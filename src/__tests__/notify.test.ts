import { describe, it, expect, afterEach } from "vitest";
import { buildMessage, normalizeHighlights } from "../notify.ts";
import type { ReportHighlights } from "../prompts-data.ts";

const BASE_URL = "https://example.com/radar";

describe("buildMessage", () => {
  const origPagesUrl = process.env["PAGES_URL"];

  afterEach(() => {
    if (origPagesUrl !== undefined) {
      process.env["PAGES_URL"] = origPagesUrl;
    } else {
      delete process.env["PAGES_URL"];
    }
  });

  it("builds a daily message with one link per report", () => {
    const msg = buildMessage("2026-03-09", ["ai-digest", "ai-hn", "ai-trending"], BASE_URL);
    expect(msg).toContain("agents-radar");
    expect(msg).toContain("2026-03-09");
    expect(msg).toContain("📡");
    expect(msg).toContain(`${BASE_URL}/#2026-03-09/ai-digest`);
    expect(msg).toContain("AI Ecosystem");
    expect(msg).toContain(`${BASE_URL}/#2026-03-09/ai-hn`);
    expect(msg).toContain("HN Community");
  });

  it("skips archived -en twins so each report is linked once", () => {
    const msg = buildMessage("2026-03-09", ["ai-hn", "ai-hn-en"], BASE_URL);
    expect(msg).toContain(`${BASE_URL}/#2026-03-09/ai-hn`);
    expect(msg).not.toContain("ai-hn-en");
  });

  it("includes Web UI and RSS links", () => {
    const msg = buildMessage("2026-03-09", ["ai-digest"], BASE_URL);
    expect(msg).toContain("🌐 Web UI");
    expect(msg).toContain("RSS");
    expect(msg).toContain(`${BASE_URL}/feed.xml`);
  });

  it("strips trailing slash from pagesUrl", () => {
    const msg = buildMessage("2026-03-09", ["ai-digest"], BASE_URL + "/");
    expect(msg).not.toContain("//feed.xml");
    expect(msg).toContain(`${BASE_URL}/feed.xml`);
  });

  it("includes highlights when provided", () => {
    const highlights: ReportHighlights = {
      "ai-digest": ["Claude Code releases v1.2.0", "vLLM merges FP8 kernels"],
      "ai-hn": ["New OSS model tops HN"],
    };
    const msg = buildMessage("2026-03-09", ["ai-digest", "ai-hn"], BASE_URL, highlights);
    expect(msg).toContain("◦ Claude Code releases v1.2.0");
    expect(msg).toContain("◦ vLLM merges FP8 kernels");
    expect(msg).toContain("◦ New OSS model tops HN");
  });

  it("escapes HTML in highlights", () => {
    const highlights: ReportHighlights = { "ai-digest": ["a <b> & c"] };
    const msg = buildMessage("2026-03-09", ["ai-digest"], BASE_URL, highlights);
    expect(msg).toContain("a &lt;b&gt; &amp; c");
  });

  it("works without highlights (null)", () => {
    const msg = buildMessage("2026-03-09", ["ai-digest"], BASE_URL, null);
    expect(msg).toContain("AI Ecosystem");
    expect(msg).not.toContain("◦");
  });

  it("works without highlights (undefined)", () => {
    const msg = buildMessage("2026-03-09", ["ai-digest"], BASE_URL);
    expect(msg).toContain("AI Ecosystem");
    expect(msg).not.toContain("◦");
  });
});

describe("normalizeHighlights", () => {
  it("passes a flat highlights object through", () => {
    const flat = { "ai-digest": ["a"], "ai-hn": ["b"] };
    expect(normalizeHighlights(flat)).toEqual(flat);
  });

  it("unwraps the legacy bilingual {zh, en} shape, preferring en", () => {
    const legacy = { zh: { "ai-cli": ["中文"] }, en: { "ai-cli": ["English"] } };
    expect(normalizeHighlights(legacy)).toEqual({ "ai-cli": ["English"] });
  });

  it("falls back to zh when the legacy shape has no en", () => {
    const legacy = { zh: { "ai-cli": ["中文"] } };
    expect(normalizeHighlights(legacy)).toEqual({ "ai-cli": ["中文"] });
  });

  it("returns an empty object for non-object input", () => {
    expect(normalizeHighlights(null)).toEqual({});
    expect(normalizeHighlights("x")).toEqual({});
  });
});
