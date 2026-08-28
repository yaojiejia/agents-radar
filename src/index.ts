/**
 * agents-radar: daily digest for AI CLI tools and OpenClaw.
 *
 * Env vars:
 *   LLM_PROVIDER        - "anthropic" | "openai" | "github-copilot" | "openrouter" (default: anthropic)
 *   GITHUB_TOKEN        - GitHub token for API access and issue creation
 *   DIGEST_REPO         - owner/repo where digest issues are posted (optional)
 *
 * Provider-specific env vars — see src/providers/ for full list.
 */

import fs from "node:fs";
import path from "node:path";
import {
  type GitHubItem,
  type RepoFetch,
  fetchRecentItems,
  fetchRecentReleases,
  fetchRecentDiscussions,
  fetchRepoMeta,
  fetchSkillsData,
  createGitHubIssue,
} from "./github.ts";
import {
  buildTrendingPrompt,
  buildHighlightsPrompt,
  buildDigestHighlightsPrompt,
  buildRepoSummaryPrompt,
  type ReportHighlights,
} from "./prompts-data.ts";
import { callLlm, parseLlmJson, saveFile, autoGenFooter, LLM_TOKENS_TRENDING } from "./report.ts";
import {
  type DigestGroup,
  buildUnifiedDigestContent,
  buildSkillsSection,
  categorizeRepoActivity,
} from "./report-builders.ts";
import {
  saveWebReport,
  saveTrendingReport,
  saveHnReport,
  savePhReport,
  saveArxivReport,
  saveHfReport,
  saveCommunityReport,
} from "./report-savers.ts";
import { loadWebState, fetchSiteContent, type WebFetchResult, type WebState } from "./web.ts";
import { fetchTrendingData, type TrendingData } from "./trending.ts";
import { fetchHnData, type HnData } from "./hn.ts";
import { fetchPhData, type PhData } from "./ph.ts";
import { fetchArxivData, type ArxivData } from "./arxiv.ts";
import { fetchHfData, type HfData } from "./hf.ts";
import { fetchDevtoData, type DevtoData } from "./devto.ts";
import { fetchLobstersData, type LobstersData } from "./lobsters.ts";
import { loadConfig } from "./config.ts";
import { toCstDateStr, toUtcStr, weekdayOf } from "./date.ts";
import { MSG, DIGEST_REPORT } from "./i18n.ts";

// ---------------------------------------------------------------------------
// Repo config — loaded from config.yml, falls back to built-in defaults
// ---------------------------------------------------------------------------

const {
  cliRepos: CLI_REPOS,
  skillsRepo: CLAUDE_SKILLS_REPO,
  openclaw: OPENCLAW,
  openclawPeers: OPENCLAW_PEERS,
  infraRepos: INFRA_REPOS,
} = loadConfig();

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

// ---------------------------------------------------------------------------
// Phase 1: Fetch
// ---------------------------------------------------------------------------

async function fetchAllData(
  since: Date,
  webState: WebState,
  fetchHf: boolean,
): Promise<{
  fetched: RepoFetch[];
  skillsData: { prs: GitHubItem[]; issues: GitHubItem[] };
  webResults: WebFetchResult[];
  trendingData: TrendingData;
  hnData: HnData;
  phData: PhData;
  arxivData: ArxivData;
  hfData: HfData;
  devtoData: DevtoData;
  lobstersData: LobstersData;
}> {
  const allConfigs = [...CLI_REPOS, OPENCLAW, ...OPENCLAW_PEERS, ...INFRA_REPOS];
  console.log(
    `  Tracking: ${allConfigs.map((r) => r.id).join(", ")}, claude-code-skills, web, hn, ph, arxiv, ` +
      `${fetchHf ? "hf, " : ""}devto, lobsters`,
  );

  const [
    fetched,
    skillsData,
    webResults,
    trendingData,
    hnData,
    phData,
    arxivData,
    hfData,
    devtoData,
    lobstersData,
  ] = await Promise.all([
    Promise.all(
      allConfigs.map(async (cfg): Promise<RepoFetch> => {
        try {
          const [issuesRaw, prs, releases, discussions, meta] = await Promise.all([
            fetchRecentItems(cfg, "issues", since),
            fetchRecentItems(cfg, "pulls", since),
            fetchRecentReleases(cfg.repo, since),
            cfg.discussions ? fetchRecentDiscussions(cfg.repo, since) : Promise.resolve([]),
            fetchRepoMeta(cfg.repo).catch((err) => {
              console.error(`  [${cfg.id}] meta fetch failed: ${err}`);
              return null;
            }),
          ]);
          const issues = issuesRaw.filter((i) => !i.pull_request);
          console.log(
            `  [${cfg.id}] issues: ${issues.length}, prs: ${prs.length}, releases: ${releases.length}` +
              (cfg.discussions ? `, discussions: ${discussions.length}` : ""),
          );
          return { cfg, issues, prs, releases, discussions, meta };
        } catch (err) {
          console.error(`  [${cfg.id}] fetch failed: ${err}`);
          return { cfg, issues: [], prs: [], releases: [], discussions: [], meta: null };
        }
      }),
    ),
    fetchSkillsData(CLAUDE_SKILLS_REPO)
      .then((d) => {
        console.log(`  [claude-code-skills] prs: ${d.prs.length}, issues: ${d.issues.length}`);
        return d;
      })
      .catch((err) => {
        console.error(`  [claude-code-skills] fetch failed: ${err}`);
        return { prs: [] as GitHubItem[], issues: [] as GitHubItem[] };
      }),
    Promise.all([
      fetchSiteContent("anthropic", webState).catch((err): WebFetchResult => {
        console.error(`  [web/anthropic] fetch failed: ${err}`);
        return {
          site: "anthropic",
          siteName: "Anthropic (Claude)",
          isFirstRun: false,
          newItems: [],
          totalDiscovered: 0,
        };
      }),
      fetchSiteContent("openai", webState).catch((err): WebFetchResult => {
        console.error(`  [web/openai] fetch failed: ${err}`);
        return { site: "openai", siteName: "OpenAI", isFirstRun: false, newItems: [], totalDiscovered: 0 };
      }),
    ]),
    fetchTrendingData().catch(
      (): TrendingData => ({
        trendingRepos: [],
        searchRepos: [],
        trendingFetchSuccess: false,
      }),
    ),
    fetchHnData().catch((): HnData => ({ stories: [], fetchSuccess: false })),
    fetchPhData().catch((): PhData => ({ products: [], fetchSuccess: false })),
    fetchArxivData().catch((): ArxivData => ({ papers: [], fetchSuccess: false })),
    fetchHf
      ? fetchHfData().catch((): HfData => ({ models: [], fetchSuccess: false }))
      : Promise.resolve<HfData>({ models: [], fetchSuccess: false }),
    fetchDevtoData().catch((): DevtoData => ({ articles: [], fetchSuccess: false })),
    fetchLobstersData().catch((): LobstersData => ({ stories: [], fetchSuccess: false })),
  ]);

  return {
    fetched,
    skillsData,
    webResults,
    trendingData,
    hnData,
    phData,
    arxivData,
    hfData,
    devtoData,
    lobstersData,
  };
}

// ---------------------------------------------------------------------------
// Phase 2: LLM summaries
// ---------------------------------------------------------------------------

/** Call LLM with logging and error fallback. */
async function summarize(id: string, prompt: string, failMsg: string, maxTokens?: number): Promise<string> {
  console.log(`  [${id}] Calling LLM for summary...`);
  try {
    return await callLlm(prompt, maxTokens);
  } catch (err) {
    console.error(`  [${id}] LLM call failed: ${err}`);
    return failMsg;
  }
}

/** Token budget for the digest Highlights bullets — a short list, not a report. */
const LLM_TOKENS_DIGEST_HIGHLIGHTS = 2048;

/** Token budget for a per-repo 3-5 sentence summary paragraph. */
const LLM_TOKENS_REPO_SUMMARY = 512;

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

/**
 * The Hugging Face report runs weekly, not daily. The Hub's trending list is
 * ranked by cumulative downloads, so it barely moves: measured over 14 days,
 * 90.5% of the models in a given day's report were already in the previous
 * day's. Weekly keeps the signal and drops 12 LLM calls a week (six days of
 * generate + translate), plus the Hub fetch on those days.
 * 1 = Monday, against the CST date the digest folder is named for.
 */
const HF_REPORT_WEEKDAY = 1;

async function main(): Promise<void> {
  requireEnv("GITHUB_TOKEN");

  const now = new Date();
  const since = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  const dateStr = toCstDateStr(now);
  const utcStr = toUtcStr(now);
  const digestRepo = process.env["DIGEST_REPO"] ?? "";

  const providerName = process.env["LLM_PROVIDER"] ?? "anthropic";
  const isHfWeek = weekdayOf(dateStr) === HF_REPORT_WEEKDAY;
  console.log(
    `[${now.toISOString()}] Starting digest | provider: ${providerName} | HF weekly: ${isHfWeek ? "yes" : "no"}`,
  );

  // 1. Fetch all data in parallel
  const webState = loadWebState();
  const {
    fetched,
    skillsData,
    webResults,
    trendingData,
    hnData,
    phData,
    arxivData,
    hfData,
    devtoData,
    lobstersData,
  } = await fetchAllData(since, webState, isHfWeek);

  const peerIds = new Set(OPENCLAW_PEERS.map((p) => p.id));
  const infraIds = new Set(INFRA_REPOS.map((r) => r.id));
  const fetchedCli = fetched.filter(
    (f) => f.cfg.id !== OPENCLAW.id && !peerIds.has(f.cfg.id) && !infraIds.has(f.cfg.id),
  );
  const fetchedOpenclaw = fetched.find((f) => f.cfg.id === OPENCLAW.id)!;
  const fetchedPeers = fetched.filter((f) => peerIds.has(f.cfg.id));
  const fetchedInfra = fetched.filter((f) => infraIds.has(f.cfg.id));

  const digestGroups: DigestGroup[] = [
    {
      heading: "🖥️ AI CLI Tools",
      repos: fetchedCli,
      appendix: buildSkillsSection(skillsData.prs, CLAUDE_SKILLS_REPO),
    },
    { heading: "🦞 OpenClaw Ecosystem", repos: [fetchedOpenclaw, ...fetchedPeers] },
    { heading: "⚙️ AI Infrastructure", repos: fetchedInfra },
  ];

  // 2. LLM content: digest highlights + per-repo summaries + trending summary.
  // The digest's listings are verbatim data; every generated piece degrades to
  // omission (highlights, repo summaries) or a fixed message (trending).
  console.log("  Generating digest highlights, repo summaries + trending summary...");
  const hasTrendingData = trendingData.trendingRepos.length > 0 || trendingData.searchRepos.length > 0;
  const repoSummaries = new Map<string, string>();
  const [digestHighlights, trendingSummary] = await Promise.all([
    callLlm(buildDigestHighlightsPrompt(digestGroups, since, dateStr), LLM_TOKENS_DIGEST_HIGHLIGHTS).catch(
      (err) => {
        console.error(`  [digest] Highlights generation failed, omitting section: ${err}`);
        return "";
      },
    ),
    hasTrendingData
      ? summarize(
          "trending",
          buildTrendingPrompt(trendingData, dateStr),
          MSG.trendingFailed,
          LLM_TOKENS_TRENDING,
        )
      : Promise.resolve(MSG.trendingNoData),
    ...digestGroups
      .flatMap((g) => g.repos)
      .map(async (f) => {
        const a = categorizeRepoActivity(f, since);
        const quiet =
          !f.releases.length && !a.mergedPrs.length && !a.newIssues.length && !a.closedIssues.length;
        if (quiet) return;
        try {
          const text = await callLlm(buildRepoSummaryPrompt(f, since, dateStr), LLM_TOKENS_REPO_SUMMARY);
          repoSummaries.set(f.cfg.id, text);
        } catch (err) {
          console.error(`  [${f.cfg.id}] repo summary failed, omitting: ${err}`);
        }
      }),
  ]);

  // 3. Build + save the unified digest
  const digestContent = buildUnifiedDigestContent(
    digestGroups,
    since,
    digestHighlights,
    repoSummaries,
    utcStr,
    dateStr,
    autoGenFooter(),
    digestRepo,
    now,
  );
  console.log(`  Saved ${saveFile(digestContent, dateStr, "ai-digest.md")}`);

  // 4. Data-source reports
  if (!isHfWeek) {
    console.log("  [hf] Weekly report — not scheduled today, skipping.");
  }

  await Promise.all([
    saveWebReport(webResults, webState, utcStr, dateStr, digestRepo),
    saveTrendingReport(trendingData, trendingSummary, utcStr, dateStr, digestRepo),
    saveHnReport(hnData, utcStr, dateStr, digestRepo),
    savePhReport(phData, utcStr, dateStr, digestRepo),
    saveArxivReport(arxivData, utcStr, dateStr, digestRepo),
    saveCommunityReport(devtoData, lobstersData, utcStr, dateStr, digestRepo),
    ...(isHfWeek ? [saveHfReport(hfData, utcStr, dateStr, digestRepo)] : []),
  ]);

  // 5. Generate highlights for Telegram notification
  const readReport = (name: string): string | undefined => {
    const p = path.join("digests", dateStr, name);
    return fs.existsSync(p) ? fs.readFileSync(p, "utf-8") : undefined;
  };

  const reports: Record<string, string> = {
    "ai-digest": digestContent,
  };
  for (const [id, file] of [
    ["ai-trending", "ai-trending.md"],
    ["ai-web", "ai-web.md"],
    ["ai-hn", "ai-hn.md"],
    ["ai-ph", "ai-ph.md"],
    ["ai-arxiv", "ai-arxiv.md"],
    ["ai-hf", "ai-hf.md"],
    ["ai-community", "ai-community.md"],
  ] as const) {
    const content = readReport(file);
    if (content) reports[id] = content;
  }

  console.log("  Generating highlights for Telegram...");
  // Parsing retries once: the LLM occasionally emits slightly malformed JSON
  // that repairJson can't fix (seen 2026-07-13: "Expected ',' or ']' after
  // array element"); a fresh generation usually returns valid JSON.
  const attemptJson = async (prompt: string): Promise<ReportHighlights> => {
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        return parseLlmJson<ReportHighlights>(await callLlm(prompt, 2048));
      } catch (err) {
        const tag = attempt < 2 ? "retrying" : "giving up";
        console.error(`  [highlights] attempt ${attempt} failed (${tag}): ${err}`);
      }
    }
    return {};
  };

  const highlights = await attemptJson(buildHighlightsPrompt(reports));

  const highlightsPath = saveFile(JSON.stringify(highlights, null, 2), dateStr, "highlights.json");
  console.log(`  Saved ${highlightsPath}`);

  // 6. Create the unified digest issue
  if (digestRepo) {
    const digestUrl = await createGitHubIssue(
      DIGEST_REPORT.issueTitle(dateStr),
      digestContent,
      DIGEST_REPORT.label,
    );
    console.log(`  Created digest issue: ${digestUrl}`);
  }

  console.log("Done!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
