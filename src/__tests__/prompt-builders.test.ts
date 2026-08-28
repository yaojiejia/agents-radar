import { describe, it, expect } from "vitest";
import {
  buildDigestHighlightsPrompt,
  buildTrendingPrompt,
  buildWebReportPrompt,
  buildHnPrompt,
} from "../prompts-data.ts";
import type { DigestGroup } from "../report-builders.ts";
import type { GitHubItem, GitHubRelease, RepoFetch } from "../github.ts";
import type { TrendingData } from "../trending.ts";
import type { HnData } from "../hn.ts";
import type { WebFetchResult } from "../web.ts";

// ---------------------------------------------------------------------------
// Fixtures
// ---------------------------------------------------------------------------

function makeItem(overrides: Partial<GitHubItem> = {}): GitHubItem {
  return {
    number: 1,
    title: "Issue",
    state: "open",
    user: { login: "alice" },
    labels: [],
    created_at: "2026-03-09T06:00:00Z",
    updated_at: "2026-03-09T12:00:00Z",
    comments: 5,
    reactions: { "+1": 2 },
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

function makeFetch(overrides: Partial<RepoFetch> = {}): RepoFetch {
  return {
    cfg: { id: "test", repo: "org/test", name: "TestTool" },
    issues: [],
    prs: [],
    releases: [],
    discussions: [],
    meta: null,
    ...overrides,
  };
}

// ---------------------------------------------------------------------------
// buildDigestHighlightsPrompt
// ---------------------------------------------------------------------------

describe("buildDigestHighlightsPrompt", () => {
  const since = new Date("2026-03-09T00:00:00Z");

  it("includes releases, merged PRs and new issues per repo", () => {
    const groups: DigestGroup[] = [
      {
        heading: "🖥️ AI CLI Tools",
        repos: [
          makeFetch({
            releases: [release],
            prs: [makeItem({ number: 20, title: "Merged feature", merged_at: "2026-03-09T06:00:00Z" })],
            issues: [makeItem({ number: 10, title: "Hot new issue" })],
          }),
        ],
      },
    ];
    const p = buildDigestHighlightsPrompt(groups, since, "2026-03-09");
    expect(p).toContain("2026-03-09");
    expect(p).toContain("TestTool (org/test)");
    expect(p).toContain("release: v1.0.0 Release 1.0");
    expect(p).toContain("merged PR [#20]");
    expect(p).toContain("Merged feature");
    expect(p).toContain("new issue [#10]");
    expect(p).toContain("3-5 Markdown bullets");
  });

  it("omits repos and groups without any qualifying activity", () => {
    const groups: DigestGroup[] = [
      { heading: "Active group", repos: [makeFetch({ releases: [release] })] },
      {
        heading: "Empty group",
        repos: [makeFetch({ cfg: { id: "quiet", repo: "org/quiet", name: "QuietTool" } })],
      },
    ];
    const p = buildDigestHighlightsPrompt(groups, since, "2026-03-09");
    expect(p).toContain("Active group");
    expect(p).not.toContain("QuietTool");
    expect(p).not.toContain("Empty group");
  });

  it("caps merged PRs and new issues at 3 per repo", () => {
    const prs = Array.from({ length: 6 }, (_, i) =>
      makeItem({ number: 100 + i, merged_at: "2026-03-09T06:00:00Z", comments: 10 - i }),
    );
    const groups: DigestGroup[] = [{ heading: "G", repos: [makeFetch({ prs })] }];
    const p = buildDigestHighlightsPrompt(groups, since, "2026-03-09");
    expect(p).toContain("[#100]");
    expect(p).toContain("[#102]");
    expect(p).not.toContain("[#103]");
  });
});

// ---------------------------------------------------------------------------
// buildTrendingPrompt
// ---------------------------------------------------------------------------

describe("buildTrendingPrompt", () => {
  it("includes trending repos", () => {
    const data: TrendingData = {
      trendingRepos: [
        {
          fullName: "org/repo",
          description: "desc",
          language: "Python",
          todayStars: 100,
          totalStars: 5000,
          forks: 200,
          url: "https://github.com/org/repo",
        },
      ],
      searchRepos: [],
      trendingFetchSuccess: true,
    };
    const result = buildTrendingPrompt(data, "2026-03-09");
    expect(result).toContain("org/repo");
    expect(result).toContain("Python");
    expect(result).toContain("5,000");
    expect(result).toContain("+100 today");
  });

  it("shows fetch failure message when trending fails", () => {
    const data: TrendingData = { trendingRepos: [], searchRepos: [], trendingFetchSuccess: false };
    const result = buildTrendingPrompt(data, "2026-03-09");
    expect(result).toContain("Unable to fetch today's GitHub Trending list");
  });

  it("includes search repos with topic tag", () => {
    const data: TrendingData = {
      trendingRepos: [],
      searchRepos: [
        {
          fullName: "ai/agent",
          description: "An AI agent",
          language: "TypeScript",
          stargazersCount: 1000,
          pushedAt: "2026-03-08",
          url: "https://github.com/ai/agent",
          searchQuery: "ai-agent",
        },
      ],
      trendingFetchSuccess: false,
    };
    const result = buildTrendingPrompt(data, "2026-03-09");
    expect(result).toContain("[topic:ai-agent]");
    expect(result).toContain("1,000");
  });
});

// ---------------------------------------------------------------------------
// buildWebReportPrompt
// ---------------------------------------------------------------------------

describe("buildWebReportPrompt", () => {
  it("includes site sections for first run", () => {
    const results: WebFetchResult[] = [
      {
        site: "anthropic",
        siteName: "Anthropic",
        isFirstRun: true,
        newItems: [
          {
            url: "https://anthropic.com/news/test",
            title: "Test",
            lastmod: "2026-03-09",
            content: "Content",
            site: "anthropic",
            category: "news",
          },
        ],
        totalDiscovered: 50,
      },
    ];
    const result = buildWebReportPrompt(results, "2026-03-09");
    expect(result).toContain("First full crawl");
    expect(result).toContain("Anthropic");
    expect(result).toContain("Content Landscape Overview"); // first-run-only section
  });

  it("shows incremental mode for non-first-run", () => {
    const results: WebFetchResult[] = [
      { site: "openai", siteName: "OpenAI", isFirstRun: false, newItems: [], totalDiscovered: 100 },
    ];
    const result = buildWebReportPrompt(results, "2026-03-09");
    expect(result).toContain("Incremental update");
    expect(result).not.toContain("Content Landscape Overview");
  });
});

// ---------------------------------------------------------------------------
// buildHnPrompt
// ---------------------------------------------------------------------------

describe("buildHnPrompt", () => {
  it("includes stories with metadata", () => {
    const data: HnData = {
      stories: [
        {
          id: "123",
          title: "AI News",
          url: "https://example.com/ai",
          hnUrl: "https://news.ycombinator.com/item?id=123",
          points: 200,
          comments: 50,
          author: "bob",
          createdAt: "2026-03-09T10:00:00Z",
        },
      ],
      fetchSuccess: true,
    };
    const result = buildHnPrompt(data, "2026-03-09");
    expect(result).toContain("AI News");
    expect(result).toContain("Score: 200");
    expect(result).toContain("Comments: 50");
    expect(result).toContain("Author: bob");
    expect(result).toContain("1 total");
    expect(result).toContain("Hacker News");
  });
});
