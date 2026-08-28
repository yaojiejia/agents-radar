/**
 * Centralized report strings: titles, issue titles, labels.
 *
 * All output is English — the Chinese generation/translation layer was
 * removed in August 2026. The zh entries that remain in REPORT_LABELS exist
 * only so archived bilingual reports keep a proper title in the Web UI
 * sidebar and RSS feed.
 */

// ---------------------------------------------------------------------------
// Status & error messages (used in index.ts)
// ---------------------------------------------------------------------------

export const MSG = {
  trendingNoData: "⚠️ Trending data unavailable, unable to generate report.",
  trendingFailed: "⚠️ Trending report generation failed.",
} as const;

// ---------------------------------------------------------------------------
// Report headers & issue titles
// ---------------------------------------------------------------------------

export const DIGEST_REPORT = {
  title: "📡 AI Ecosystem Digest",
  issueTitle: (dateStr: string) => `📡 AI Ecosystem Digest ${dateStr}`,
  label: "digest",
} as const;

export const WEB_REPORT = {
  title: "Official AI Content Report",
  firstCrawl: "First full crawl",
  todayUpdate: "Today's update",
  newContent: (count: number) => `New content: ${count} articles`,
  generated: (utcStr: string) => `Generated: ${utcStr} UTC`,
  sourcesHeader: "Sources:",
  issueTitle: (dateStr: string, isFirstRun: boolean) =>
    `🌐 Official AI Content Report ${dateStr}${isFirstRun ? " (First Crawl)" : ""}`,
} as const;

export const TRENDING_REPORT = {
  title: "AI Open Source Trends",
  sources: "Sources: GitHub Trending + GitHub Search API",
  issueTitle: (dateStr: string) => `📈 AI Open Source Trends ${dateStr}`,
} as const;

export const HN_REPORT = {
  title: "Hacker News AI Community Digest",
  issueTitle: (dateStr: string) => `📰 Hacker News AI Digest ${dateStr}`,
} as const;

export const PH_REPORT = {
  title: "Product Hunt AI Products Digest",
  issueTitle: (dateStr: string) => `🚀 Product Hunt AI Digest ${dateStr}`,
} as const;

export const ARXIV_REPORT = {
  title: "ArXiv AI Research Digest",
  issueTitle: (dateStr: string) => `📚 ArXiv AI Research Digest ${dateStr}`,
} as const;

// The HF report runs weekly (see HF_REPORT_WEEKDAY in index.ts) — the Hub's
// download-ranked list barely moves day to day, so the titles say "weekly".
export const HF_REPORT = {
  title: "Hugging Face Trending Models Weekly",
  issueTitle: (dateStr: string) => `🤗 Hugging Face Trending Models ${dateStr}`,
} as const;

export const COMMUNITY_REPORT = {
  title: "Tech Community AI Digest",
  issueTitle: (dateStr: string) => `💬 Tech Community AI Digest ${dateStr}`,
} as const;

// ---------------------------------------------------------------------------
// GitHub issue labels — one label per report; the -en variants stopped being
// created with the English-only change but remain on archived issues.
// ---------------------------------------------------------------------------

export const ISSUE_LABELS = {
  web: "web",
  trending: "trending",
  hn: "hn",
  ph: "ph",
  arxiv: "arxiv",
  hf: "hf",
  community: "community",
} as const;

// ---------------------------------------------------------------------------
// Report labels for manifest/RSS (used in generate-manifest.ts)
// ---------------------------------------------------------------------------

export const REPORT_LABELS: Record<string, string> = {
  "ai-digest": "AI Ecosystem Digest",
  "ai-web": "Official AI Content Report",
  "ai-trending": "AI Open Source Trends",
  "ai-hn": "Hacker News AI Community Digest",
  "ai-ph": "Product Hunt AI Products Digest",
  "ai-arxiv": "ArXiv AI Research Digest",
  "ai-hf": "Hugging Face Trending Models Weekly",
  "ai-community": "Tech Community AI Digest",
  // Everything below is no longer generated — kept so archived reports still
  // render a proper title in the sidebar and RSS feed.
  "ai-cli": "AI CLI 工具社区动态日报",
  "ai-cli-en": "AI CLI Tools Digest",
  "ai-agents": "AI Agents 生态日报",
  "ai-agents-en": "AI Agents Ecosystem Digest",
  "ai-infra": "AI 基础设施日报",
  "ai-infra-en": "AI Infrastructure Digest",
  "ai-web-en": "Official AI Content Report",
  "ai-trending-en": "AI Open Source Trends",
  "ai-hn-en": "Hacker News AI Community Digest",
  "ai-ph-en": "Product Hunt AI Products Digest",
  "ai-arxiv-en": "ArXiv AI Research Digest",
  "ai-hf-en": "Hugging Face Trending Models Weekly",
  "ai-community-en": "Tech Community AI Digest",
  "ai-weekly": "AI 工具生态周报",
  "ai-weekly-en": "AI Tools Weekly Digest",
  "ai-monthly": "AI 工具生态月报",
  "ai-monthly-en": "AI Tools Monthly Digest",
};

// ---------------------------------------------------------------------------
// Notification labels (used in notify.ts / feishu.ts)
// ---------------------------------------------------------------------------

export const NOTIFY_LABELS: Record<string, string> = {
  "ai-digest": "AI Ecosystem",
  "ai-web": "Official Updates",
  "ai-trending": "GitHub Trends",
  "ai-hn": "HN Community",
  "ai-ph": "Product Hunt",
  "ai-arxiv": "ArXiv Research",
  "ai-hf": "HF Models",
  "ai-community": "Tech Community",
  // Retired report types, kept in case an archived date is ever re-notified.
  "ai-cli": "AI CLI Tools",
  "ai-agents": "AI Agents Ecosystem",
  "ai-infra": "AI Infrastructure",
};
