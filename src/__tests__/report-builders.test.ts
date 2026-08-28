import { describe, it, expect } from "vitest";
import {
  categorizeRepoActivity,
  buildSkillsSection,
  buildUnifiedDigestContent,
  type DigestGroup,
} from "../report-builders.ts";
import type { GitHubItem, GitHubRelease, RepoFetch, RepoMeta } from "../github.ts";

// ---------------------------------------------------------------------------
// Fixtures
// ---------------------------------------------------------------------------

const SINCE = new Date("2026-03-09T00:00:00Z");
const NOW = new Date("2026-03-10T00:00:00Z");

function makeItem(overrides: Partial<GitHubItem> = {}): GitHubItem {
  return {
    number: 1,
    title: "Test issue",
    state: "open",
    user: { login: "alice" },
    labels: [],
    created_at: "2026-03-09T06:00:00Z",
    updated_at: "2026-03-09T12:00:00Z",
    comments: 0,
    reactions: { "+1": 0 },
    body: "body",
    html_url: "https://github.com/org/test/issues/1",
    ...overrides,
  };
}

const release: GitHubRelease = {
  tag_name: "v1.0.0",
  name: "Release 1.0",
  body: "Release notes",
  published_at: "2026-03-09T06:00:00Z",
};

const meta: RepoMeta = { stars: 12345, openIssues: 678, pushedAt: "2026-03-09T22:00:00Z" };

function makeFetch(overrides: Partial<RepoFetch> = {}): RepoFetch {
  return {
    cfg: { id: "test", repo: "org/test", name: "TestTool" },
    issues: [],
    prs: [],
    releases: [],
    discussions: [],
    meta,
    ...overrides,
  };
}

// ---------------------------------------------------------------------------
// categorizeRepoActivity
// ---------------------------------------------------------------------------

describe("categorizeRepoActivity", () => {
  it("keeps issues created inside the window as new, drops older ones", () => {
    const fresh = makeItem({ number: 1, created_at: "2026-03-09T06:00:00Z" });
    const old = makeItem({ number: 2, created_at: "2026-03-01T00:00:00Z" });
    const a = categorizeRepoActivity(makeFetch({ issues: [fresh, old] }), SINCE);
    expect(a.newIssues.map((i) => i.number)).toEqual([1]);
  });

  it("keeps issues closed inside the window, requires closed state", () => {
    const closedNow = makeItem({
      number: 1,
      state: "closed",
      created_at: "2026-03-01T00:00:00Z",
      closed_at: "2026-03-09T06:00:00Z",
    });
    const closedLongAgo = makeItem({
      number: 2,
      state: "closed",
      created_at: "2026-03-01T00:00:00Z",
      closed_at: "2026-03-02T00:00:00Z",
    });
    const stillOpen = makeItem({ number: 3, created_at: "2026-03-01T00:00:00Z" });
    const a = categorizeRepoActivity(makeFetch({ issues: [closedNow, closedLongAgo, stillOpen] }), SINCE);
    expect(a.closedIssues.map((i) => i.number)).toEqual([1]);
  });

  it("keeps only PRs actually merged inside the window", () => {
    const merged = makeItem({ number: 1, state: "closed", merged_at: "2026-03-09T06:00:00Z" });
    const closedUnmerged = makeItem({
      number: 2,
      state: "closed",
      merged_at: null,
      closed_at: "2026-03-09T06:00:00Z",
    });
    const mergedLongAgo = makeItem({ number: 3, state: "closed", merged_at: "2026-03-02T00:00:00Z" });
    const openPr = makeItem({ number: 4 });
    const a = categorizeRepoActivity(
      makeFetch({ prs: [merged, closedUnmerged, mergedLongAgo, openPr] }),
      SINCE,
    );
    expect(a.mergedPrs.map((p) => p.number)).toEqual([1]);
  });

  it("sorts each category by comments + reactions descending", () => {
    const quiet = makeItem({ number: 1, comments: 1, reactions: { "+1": 0 } });
    const hot = makeItem({ number: 2, comments: 5, reactions: { "+1": 10 } });
    const mid = makeItem({ number: 3, comments: 4, reactions: { "+1": 0 } });
    const a = categorizeRepoActivity(makeFetch({ issues: [quiet, hot, mid] }), SINCE);
    expect(a.newIssues.map((i) => i.number)).toEqual([2, 3, 1]);
  });
});

// ---------------------------------------------------------------------------
// buildSkillsSection
// ---------------------------------------------------------------------------

describe("buildSkillsSection", () => {
  it("lists the top 5 PRs with comment counts", () => {
    const prs = Array.from({ length: 8 }, (_, i) =>
      makeItem({
        number: i + 1,
        title: `Skill ${i + 1}`,
        comments: 8 - i,
        html_url: `https://github.com/anthropics/skills/pull/${i + 1}`,
      }),
    );
    const s = buildSkillsSection(prs, "anthropics/skills");
    expect(s).toContain("Claude Code Skills");
    expect(s).toContain("anthropics/skills");
    expect(s).toContain("[#1](https://github.com/anthropics/skills/pull/1) Skill 1 💬8");
    expect(s).toContain("Skill 5");
    expect(s).not.toContain("Skill 6");
  });

  it("returns empty string when there are no PRs", () => {
    expect(buildSkillsSection([], "anthropics/skills")).toBe("");
  });
});

// ---------------------------------------------------------------------------
// buildUnifiedDigestContent
// ---------------------------------------------------------------------------

function build(groups: DigestGroup[], highlights = ""): string {
  return buildUnifiedDigestContent(
    groups,
    SINCE,
    highlights,
    "2026-03-09 23:00",
    "2026-03-09",
    "\n\n---\nfooter",
    "owner/fork",
    NOW,
  );
}

describe("buildUnifiedDigestContent", () => {
  const activeRepo = makeFetch({
    issues: [
      makeItem({ number: 10, title: "New bug", labels: [{ name: "bug" }, { name: "P1" }], comments: 3 }),
      makeItem({
        number: 11,
        state: "closed",
        created_at: "2026-03-01T00:00:00Z",
        closed_at: "2026-03-09T06:00:00Z",
        title: "Fixed bug",
      }),
    ],
    prs: [makeItem({ number: 20, title: "Add feature", merged_at: "2026-03-09T06:00:00Z" })],
    releases: [release],
  });

  it("renders title, attribution, snapshot table and repo sections", () => {
    const out = build([{ heading: "🖥️ AI CLI Tools", repos: [activeRepo] }]);
    expect(out).toContain("# 📡 AI Ecosystem Digest — 2026-03-09");
    expect(out).toContain("> Generated 2026-03-09 23:00 UTC by [owner/fork](https://github.com/owner/fork)");
    expect(out).toContain("| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |");
    expect(out).toContain("| [TestTool](https://github.com/org/test) | 12,345 | 1 | 1 | 1 | 1 |");
    expect(out).toContain("### TestTool (`org/test`)");
    expect(out).toContain("**Stars:** 12,345 · **Open issues:** 678 · **Last push:** 2h ago");
    expect(out).toContain("#### 🚀 New Releases");
    expect(out).toContain("[v1.0.0](https://github.com/org/test/releases/tag/v1.0.0) Release 1.0");
    expect(out).toContain("#### ✅ Merged PRs");
    expect(out).toContain("[#20](https://github.com/org/test/issues/1) Add feature");
    expect(out).toContain("#### 🐛 New Issues");
    expect(out).toContain("`bug` `P1` 💬3");
    expect(out).toContain("#### 🔒 Closed Issues");
    expect(out).toContain("Fixed bug");
    expect(out).toContain("footer");
  });

  it("includes the highlights section only when highlights are non-empty", () => {
    const groups: DigestGroup[] = [{ heading: "G", repos: [activeRepo] }];
    expect(build(groups, "- **TestTool** shipped v1.0.0")).toContain("## ✨ Highlights");
    expect(build(groups, "")).not.toContain("## ✨ Highlights");
  });

  it("collapses repos without activity into a quiet line", () => {
    const quietRepo = makeFetch({ cfg: { id: "quiet", repo: "org/quiet", name: "QuietTool" } });
    const out = build([{ heading: "G", repos: [activeRepo, quietRepo] }]);
    expect(out).toContain("_Quiet today: QuietTool_");
    expect(out).not.toContain("### QuietTool");
    // Quiet repos still appear in the snapshot table
    expect(out).toContain("| [QuietTool](https://github.com/org/quiet) | 12,345 | 0 | 0 | 0 | 0 |");
  });

  it("caps lists and appends an overflow tail", () => {
    const manyPrs = Array.from({ length: 14 }, (_, i) =>
      makeItem({ number: 100 + i, merged_at: "2026-03-09T06:00:00Z", comments: i }),
    );
    const out = build([{ heading: "G", repos: [makeFetch({ prs: manyPrs })] }]);
    expect(out).toContain("- …and 4 more");
  });

  it("renders a dash for stars and omits the meta line when meta is missing", () => {
    const noMeta = makeFetch({ meta: null, releases: [release] });
    const out = build([{ heading: "G", repos: [noMeta] }]);
    expect(out).toContain("| [TestTool](https://github.com/org/test) | — | 0 | 0 | 0 | 1 |");
    expect(out).not.toContain("**Stars:**");
  });

  it("appends a group appendix after its repo sections", () => {
    const out = build([{ heading: "G", repos: [activeRepo], appendix: "### Extra appendix" }]);
    expect(out).toContain("### Extra appendix");
  });
});
