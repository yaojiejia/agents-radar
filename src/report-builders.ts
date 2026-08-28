/**
 * Unified ecosystem digest builder.
 *
 * Replaced the three LLM-narrative builders (CLI / OpenClaw / Infra) in
 * August 2026. The digest is data-driven: every listing is verbatim GitHub
 * data categorized into merged PRs / new issues / closed issues / releases.
 * The only LLM content is the Highlights section, generated separately and
 * passed in as a finished string ("" omits the section).
 */

import type { GitHubItem, GitHubRelease, RepoFetch } from "./github.ts";
import { DIGEST_REPORT } from "./i18n.ts";

// ---------------------------------------------------------------------------
// Categorization
// ---------------------------------------------------------------------------

export interface RepoActivity {
  newIssues: GitHubItem[];
  closedIssues: GitHubItem[];
  mergedPrs: GitHubItem[];
}

/** Sort by engagement (comments + 👍) desc, so caps keep the discussed items. */
function byEngagement(a: GitHubItem, b: GitHubItem): number {
  const score = (i: GitHubItem): number => i.comments + (i.reactions?.["+1"] ?? 0);
  return score(b) - score(a);
}

/**
 * Split a repo's 24h activity into the digest's categories.
 *
 * Counts are best-effort: the source fetch lists items *updated* in the last
 * 24h and is capped at 500 items for `paginated` repos (vllm exceeds it), so
 * a very hot repo's numbers are a sample, not a census. `/pulls` has no
 * server-side `since`, so merged filtering happens here on the fetched set.
 */
export function categorizeRepoActivity(fetch: RepoFetch, since: Date): RepoActivity {
  const inWindow = (ts: string | null | undefined): boolean => ts != null && new Date(ts) >= since;
  return {
    newIssues: fetch.issues.filter((i) => inWindow(i.created_at)).sort(byEngagement),
    closedIssues: fetch.issues
      .filter((i) => i.state === "closed" && inWindow(i.closed_at))
      .sort(byEngagement),
    mergedPrs: fetch.prs.filter((p) => inWindow(p.merged_at)).sort(byEngagement),
  };
}

// ---------------------------------------------------------------------------
// Line formatting
// ---------------------------------------------------------------------------

const MERGED_PR_LIMIT = 10;
const NEW_ISSUE_LIMIT = 10;
const CLOSED_ISSUE_LIMIT = 8;
const LABEL_CHIP_LIMIT = 4;
const SKILLS_PR_LIMIT = 5;

function cleanTitle(title: string): string {
  return title.replace(/\s+/g, " ").trim();
}

function itemLine(item: GitHubItem): string {
  return `- [#${item.number}](${item.html_url}) ${cleanTitle(item.title)}`;
}

/** New-issue lines carry label chips and a comment count, like the snapshot style. */
function newIssueLine(item: GitHubItem): string {
  const chips = item.labels
    .slice(0, LABEL_CHIP_LIMIT)
    .map((l) => `\`${l.name}\``)
    .join(" ");
  const comments = item.comments > 0 ? `💬${item.comments}` : "";
  return [itemLine(item), chips, comments].filter(Boolean).join(" ");
}

function releaseLine(repo: string, r: GitHubRelease): string {
  const url = `https://github.com/${repo}/releases/tag/${encodeURIComponent(r.tag_name)}`;
  return `- [${r.tag_name}](${url}) ${cleanTitle(r.name || "")}`.trimEnd();
}

/** Render a capped list with an "…and N more" tail when items were cut. */
function cappedList(items: GitHubItem[], cap: number, toLine: (i: GitHubItem) => string): string {
  const lines = items.slice(0, cap).map(toLine);
  if (items.length > cap) lines.push(`- …and ${items.length - cap} more`);
  return lines.join("\n");
}

function timeAgo(iso: string, now: Date): string {
  const hours = Math.floor((now.getTime() - new Date(iso).getTime()) / 3_600_000);
  if (hours < 1) return "<1h ago";
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}

// ---------------------------------------------------------------------------
// Sections
// ---------------------------------------------------------------------------

export interface DigestGroup {
  /** Group heading, e.g. "🖥️ AI CLI Tools". */
  heading: string;
  repos: RepoFetch[];
  /** Extra markdown appended after the group's repo sections (e.g. skills). */
  appendix?: string;
}

function hasActivity(a: RepoActivity, releases: GitHubRelease[]): boolean {
  return a.newIssues.length > 0 || a.closedIssues.length > 0 || a.mergedPrs.length > 0 || releases.length > 0;
}

function repoSection(fetch: RepoFetch, activity: RepoActivity, now: Date): string {
  const { cfg, releases, meta } = fetch;
  const parts = [`### ${cfg.name} (\`${cfg.repo}\`)`];
  if (meta) {
    parts.push(
      `**Stars:** ${meta.stars.toLocaleString("en-US")} · **Open issues:** ` +
        `${meta.openIssues.toLocaleString("en-US")} · **Last push:** ${timeAgo(meta.pushedAt, now)}`,
    );
  }
  if (releases.length) {
    parts.push(`#### 🚀 New Releases\n${releases.map((r) => releaseLine(cfg.repo, r)).join("\n")}`);
  }
  if (activity.mergedPrs.length) {
    parts.push(`#### ✅ Merged PRs\n${cappedList(activity.mergedPrs, MERGED_PR_LIMIT, itemLine)}`);
  }
  if (activity.newIssues.length) {
    parts.push(`#### 🐛 New Issues\n${cappedList(activity.newIssues, NEW_ISSUE_LIMIT, newIssueLine)}`);
  }
  if (activity.closedIssues.length) {
    parts.push(`#### 🔒 Closed Issues\n${cappedList(activity.closedIssues, CLOSED_ISSUE_LIMIT, itemLine)}`);
  }
  return parts.join("\n\n");
}

function snapshotTable(groups: DigestGroup[], activities: Map<string, RepoActivity>): string {
  const rows = groups.flatMap((g) =>
    g.repos.map((f) => {
      const a = activities.get(f.cfg.id)!;
      const stars = f.meta ? f.meta.stars.toLocaleString("en-US") : "—";
      return (
        `| [${f.cfg.name}](https://github.com/${f.cfg.repo}) | ${stars} ` +
        `| ${a.newIssues.length} | ${a.closedIssues.length} | ${a.mergedPrs.length} | ${f.releases.length} |`
      );
    }),
  );
  return [
    "| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |",
    "|------|---------|-----------|--------|-----------|----------|",
    ...rows,
  ].join("\n");
}

/**
 * Compact data-only listing of the trending Claude Code Skills PRs — replaces
 * the old LLM skills summary. The source list is already popularity-sorted.
 */
export function buildSkillsSection(prs: GitHubItem[], skillsRepo: string): string {
  if (!prs.length) return "";
  const lines = prs
    .slice(0, SKILLS_PR_LIMIT)
    .map((p) => `${itemLine(p)} ${p.comments > 0 ? `💬${p.comments}` : ""}`.trimEnd());
  return (
    `### Claude Code Skills (\`${skillsRepo}\`)\n\n` +
    `Top open skill PRs by community engagement:\n${lines.join("\n")}`
  );
}

// ---------------------------------------------------------------------------
// Assembly
// ---------------------------------------------------------------------------

export function buildUnifiedDigestContent(
  groups: DigestGroup[],
  since: Date,
  highlights: string,
  utcStr: string,
  dateStr: string,
  footer: string,
  digestRepo: string,
  now: Date = new Date(),
): string {
  const activities = new Map<string, RepoActivity>();
  for (const g of groups) {
    for (const f of g.repos) activities.set(f.cfg.id, categorizeRepoActivity(f, since));
  }

  const generatedBy = digestRepo
    ? `> Generated ${utcStr} UTC by [${digestRepo}](https://github.com/${digestRepo})`
    : `> Generated ${utcStr} UTC`;

  const highlightsSection = highlights.trim() ? `## ✨ Highlights\n\n${highlights.trim()}\n\n---\n\n` : "";

  const groupSections = groups
    .map((g) => {
      const active = g.repos.filter((f) => hasActivity(activities.get(f.cfg.id)!, f.releases));
      const quiet = g.repos.filter((f) => !hasActivity(activities.get(f.cfg.id)!, f.releases));
      const sections = active.map((f) => repoSection(f, activities.get(f.cfg.id)!, now));
      if (g.appendix?.trim()) sections.push(g.appendix.trim());
      if (quiet.length) {
        sections.push(`_Quiet today: ${quiet.map((f) => f.cfg.name).join(", ")}_`);
      }
      return `## ${g.heading}\n\n${sections.join("\n\n")}`;
    })
    .join("\n\n---\n\n");

  return (
    `# ${DIGEST_REPORT.title} — ${dateStr}\n\n` +
    `${generatedBy}\n\n` +
    `## 📊 24h Snapshot\n\n` +
    `${snapshotTable(groups, activities)}\n\n` +
    `---\n\n` +
    highlightsSection +
    groupSections +
    footer
  );
}
