import { describe, it, expect, afterEach } from "vitest";
import { buildFeishuMessage } from "../feishu.ts";
import type { ReportHighlights } from "../prompts-data.ts";

const BASE_URL = "https://example.com/radar";

describe("buildFeishuMessage", () => {
  const origPagesUrl = process.env["PAGES_URL"];

  afterEach(() => {
    if (origPagesUrl !== undefined) {
      process.env["PAGES_URL"] = origPagesUrl;
    } else {
      delete process.env["PAGES_URL"];
    }
  });

  it("builds a daily message with one link per report", () => {
    const msg = buildFeishuMessage("2026-03-09", ["ai-digest", "ai-hn"], BASE_URL);
    expect(msg).toContain("agents-radar");
    expect(msg).toContain("2026-03-09");
    expect(msg).toContain("📡");
    expect(msg).toContain(`[AI Ecosystem](${BASE_URL}/#2026-03-09/ai-digest)`);
    expect(msg).toContain(`[HN Community](${BASE_URL}/#2026-03-09/ai-hn)`);
  });

  it("skips archived -en twins so each report is linked once", () => {
    const msg = buildFeishuMessage("2026-03-09", ["ai-hn", "ai-hn-en"], BASE_URL);
    expect(msg).toContain(`${BASE_URL}/#2026-03-09/ai-hn`);
    expect(msg).not.toContain("ai-hn-en");
  });

  it("includes Web UI and RSS links", () => {
    const msg = buildFeishuMessage("2026-03-09", ["ai-digest"], BASE_URL);
    expect(msg).toContain("🌐 Web UI");
    expect(msg).toContain("RSS");
    expect(msg).toContain(`${BASE_URL}/feed.xml`);
  });

  it("uses markdown links instead of HTML", () => {
    const msg = buildFeishuMessage("2026-03-09", ["ai-digest"], BASE_URL);
    expect(msg).not.toContain("<a href=");
    expect(msg).not.toContain("<b>");
    expect(msg).toContain("**agents-radar");
    expect(msg).toContain(`[AI Ecosystem](`);
  });

  it("includes highlights when provided", () => {
    const highlights: ReportHighlights = {
      "ai-digest": ["Claude Code releases v1.2.0", "vLLM merges FP8 kernels"],
      "ai-hn": ["New OSS model tops HN"],
    };
    const msg = buildFeishuMessage("2026-03-09", ["ai-digest", "ai-hn"], BASE_URL, highlights);
    expect(msg).toContain("◦ Claude Code releases v1.2.0");
    expect(msg).toContain("◦ vLLM merges FP8 kernels");
    expect(msg).toContain("◦ New OSS model tops HN");
  });

  it("works without highlights", () => {
    const msg = buildFeishuMessage("2026-03-09", ["ai-digest"], BASE_URL, null);
    expect(msg).toContain("AI Ecosystem");
    expect(msg).not.toContain("◦");
  });
});
