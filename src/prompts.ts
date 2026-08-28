/**
 * Translation prompt builders.
 *
 * The per-repo narrative prompt builders (CLI/peer/infra/skills/comparisons)
 * were removed in August 2026 when the three LLM-narrative reports were
 * replaced by the data-driven unified digest (see report-builders.ts). Data-
 * source report prompts live in prompts-data.ts.
 */

// ---------------------------------------------------------------------------
// Translation
// ---------------------------------------------------------------------------
// Bilingual report bodies are generated once in English, then translated to
// Chinese. Generating both languages from the raw GitHub/API data doubled the
// LLM bill for identical information; a translation pass costs a fraction of
// the input tokens because its prompt is the finished report, not the source
// data.

/** Prompt that translates a finished English report body into Chinese. */
export function buildTranslationPrompt(text: string): string {
  return `Translate the following English technical report into Simplified Chinese.

${text}

---

Rules:
- Output ONLY the translation. No preamble, no explanation, no markdown fences around the whole output.
- Preserve the Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji.
- Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim.
- Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form — do not translate them.
- Issue/PR references like #12345 and their link text stay as-is.
- Use natural technical Chinese, the register of a Chinese developer newsletter — not a literal word-for-word rendering.`;
}

/** Prompt that translates the string values of a JSON object into Chinese. */
export function buildJsonTranslationPrompt(json: string): string {
  return `Translate the string values in the following JSON into Simplified Chinese.

${json}

---

Rules:
- Return ONLY valid JSON. No markdown fences, no explanation.
- Keep every key exactly as-is. Keep the array lengths and nesting identical.
- Translate only the string values.
- Keep project names, repository slugs, version tags and numbers in their original form.
- Each translated string must stay under 30 Chinese characters.`;
}
