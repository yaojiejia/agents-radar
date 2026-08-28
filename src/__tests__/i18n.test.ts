import { describe, it, expect } from "vitest";
import {
  MSG,
  DIGEST_REPORT,
  WEB_REPORT,
  TRENDING_REPORT,
  HN_REPORT,
  PH_REPORT,
  ARXIV_REPORT,
  HF_REPORT,
  COMMUNITY_REPORT,
  ISSUE_LABELS,
  NOTIFY_LABELS,
  REPORT_LABELS,
} from "../i18n.ts";

// ---------------------------------------------------------------------------
// Issue title functions
// ---------------------------------------------------------------------------

describe("issue title functions", () => {
  it("DIGEST_REPORT.issueTitle embeds the date", () => {
    expect(DIGEST_REPORT.issueTitle("2026-03-12")).toBe("📡 AI Ecosystem Digest 2026-03-12");
  });

  it("WEB_REPORT.issueTitle includes first crawl flag", () => {
    expect(WEB_REPORT.issueTitle("2026-03-12", true)).toContain("First Crawl");
    expect(WEB_REPORT.issueTitle("2026-03-12", false)).not.toContain("First Crawl");
  });

  for (const [name, report] of [
    ["TRENDING_REPORT", TRENDING_REPORT],
    ["HN_REPORT", HN_REPORT],
    ["PH_REPORT", PH_REPORT],
    ["ARXIV_REPORT", ARXIV_REPORT],
    ["HF_REPORT", HF_REPORT],
    ["COMMUNITY_REPORT", COMMUNITY_REPORT],
  ] as const) {
    it(`${name}.issueTitle embeds the date and title is non-empty`, () => {
      expect(report.issueTitle("2026-03-12")).toContain("2026-03-12");
      expect(report.title).toBeTruthy();
    });
  }
});

// ---------------------------------------------------------------------------
// Dynamic content helpers
// ---------------------------------------------------------------------------

describe("WEB_REPORT helpers", () => {
  it("newContent formats count", () => {
    expect(WEB_REPORT.newContent(10)).toBe("New content: 10 articles");
  });

  it("generated formats timestamp", () => {
    expect(WEB_REPORT.generated("12:00")).toBe("Generated: 12:00 UTC");
  });
});

// ---------------------------------------------------------------------------
// Labels
// ---------------------------------------------------------------------------

describe("ISSUE_LABELS", () => {
  it("maps report types to base label names", () => {
    expect(ISSUE_LABELS.web).toBe("web");
    expect(ISSUE_LABELS.trending).toBe("trending");
    expect(ISSUE_LABELS.hn).toBe("hn");
    expect(ISSUE_LABELS.community).toBe("community");
  });
});

describe("REPORT_LABELS", () => {
  it("covers every active report id", () => {
    for (const id of [
      "ai-digest",
      "ai-web",
      "ai-trending",
      "ai-hn",
      "ai-ph",
      "ai-arxiv",
      "ai-hf",
      "ai-community",
    ]) {
      expect(REPORT_LABELS[id]).toBeTruthy();
    }
  });

  it("keeps archived ids so old reports still render titles", () => {
    expect(REPORT_LABELS["ai-cli"]).toBeTruthy();
    expect(REPORT_LABELS["ai-infra-en"]).toBeTruthy();
    expect(REPORT_LABELS["ai-weekly"]).toBeTruthy();
  });
});

describe("NOTIFY_LABELS", () => {
  it("covers all active report types with plain English labels", () => {
    for (const key of ["ai-digest", "ai-web", "ai-trending", "ai-hn", "ai-arxiv", "ai-community"]) {
      expect(typeof NOTIFY_LABELS[key]).toBe("string");
      expect(NOTIFY_LABELS[key]).toBeTruthy();
    }
  });
});

// ---------------------------------------------------------------------------
// Status messages
// ---------------------------------------------------------------------------

describe("MSG", () => {
  it("provides trending status strings", () => {
    expect(MSG.trendingNoData).toContain("unavailable");
    expect(MSG.trendingFailed).toContain("failed");
  });
});
