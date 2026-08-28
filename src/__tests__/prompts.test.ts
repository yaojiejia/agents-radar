import { describe, it, expect } from "vitest";
import { buildTranslationPrompt, buildJsonTranslationPrompt } from "../prompts.ts";

describe("buildTranslationPrompt", () => {
  it("embeds the source text and asks for Chinese output only", () => {
    const p = buildTranslationPrompt("## Releases\n\n- v1.2.3 shipped");
    expect(p).toContain("## Releases");
    expect(p).toContain("v1.2.3 shipped");
    expect(p).toContain("Simplified Chinese");
    expect(p).toContain("Output ONLY the translation");
  });

  it("tells the model to preserve Markdown structure and identifiers", () => {
    const p = buildTranslationPrompt("body");
    expect(p).toContain("Preserve the Markdown structure");
    expect(p).toContain("repository slugs");
  });
});

describe("buildJsonTranslationPrompt", () => {
  it("embeds the JSON and requires valid JSON back with identical keys", () => {
    const p = buildJsonTranslationPrompt('{"ai-cli":["a","b"]}');
    expect(p).toContain('{"ai-cli":["a","b"]}');
    expect(p).toContain("Return ONLY valid JSON");
    expect(p).toContain("Keep every key exactly as-is");
  });
});
