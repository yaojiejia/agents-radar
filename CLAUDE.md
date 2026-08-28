# CLAUDE.md

## Project overview

agents-radar is a daily digest generator for the AI open-source ecosystem. A GitHub Actions cron job runs at 23:00 UTC (07:00 CST next day) and publishes **English-only** reports as GitHub Issues and committed Markdown files. The main report is the **unified ecosystem digest** (`ai-digest.md`): a data-driven monitoring report — snapshot table, merged PRs, new/closed issues, releases — across all 18 tracked repos. Data-source reports (trending, HN, ArXiv, web, community, HF) are LLM summaries of their feeds.

## Commands

```bash
pnpm start          # run the full digest locally
pnpm test           # vitest (unit tests)
pnpm typecheck      # tsc --noEmit
pnpm lint           # ESLint
pnpm lint:fix       # ESLint --fix
pnpm format         # Prettier --write src
pnpm format:check   # Prettier --check src
```

Required env vars for local runs:

```bash
export GITHUB_TOKEN=ghp_xxxxx
export DIGEST_REPO=owner/repo   # omit to skip GitHub issue creation

# LLM provider (default: anthropic)
export LLM_PROVIDER=anthropic   # anthropic | openai | github-copilot | openrouter | deepseek | qwen

# Anthropic (default)
export ANTHROPIC_API_KEY=sk-ant-xxxxx

# OpenAI
# export OPENAI_API_KEY=sk-xxxxx

# GitHub Copilot — uses GITHUB_TOKEN

# OpenRouter
# export OPENROUTER_API_KEY=sk-or-xxxxx

# DeepSeek
# export DEEPSEEK_API_KEY=sk-xxxxx

# Qwen (Alibaba Model Studio) — provider used by the GitHub Actions cron
# export DASHSCOPE_API_KEY=sk-xxxxx
```

## Architecture

The pipeline runs in sequential phases in `src/index.ts`'s `main()`:

1. **`fetchAllData`** — all network I/O in parallel: GitHub API (issues/PRs/releases + repo metadata via `fetchRepoMeta`) for 18 repos, Claude Code Skills, Anthropic/OpenAI sitemaps, GitHub Trending HTML + Search API, Hacker News Algolia API.
2. **LLM content** — exactly two calls here: the digest Highlights bullets (`buildDigestHighlightsPrompt`, fail-soft to omission) and the trending summary. All `callLlm` traffic is rate-limited to 5 concurrent requests by a queue in `src/report.ts`.
3. **Unified digest** — `categorizeRepoActivity` splits each repo's 24h activity into merged PRs / new issues / closed issues; `buildUnifiedDigestContent` (in `src/report-builders.ts`) renders the snapshot table + per-repo listings. Saved as `ai-digest.md` and posted as ONE GitHub issue (label `digest`).
4. **Data-source reports** — the `saveXxxReport` functions (in `src/report-savers.ts`): one LLM call, one file (base name, e.g. `ai-hn.md`), one GitHub issue (base label).
5. **Telegram highlights** — `buildHighlightsPrompt` extracts JSON highlights from the finished reports for the notification scripts.

### English-only output

Two August 2026 refactors shaped the current pipeline; do not reverse either:

- The three LLM-narrative reports (`ai-cli` / `ai-agents` / `ai-infra`, with per-repo summaries and comparison analyses) were replaced by the unified data-driven digest, dropping the run from ~50 LLM calls to ~15. Do not add per-repo narrative generation back.
- The Chinese generation/translation layer (`translateToZh`, `buildTranslationPrompt`, per-`lang` prompt branches, `-en` twin files and `-en` labeled issues) was removed entirely. Everything is generated once, in English, into the base filenames. Archived bilingual reports stay reachable via the `-en` entries kept in `REPORT_LABELS` and `REPORT_FILES`. `highlights.json` is now a flat `{reportId: [...]}` object; `normalizeHighlights` in `src/notify.ts` still accepts the archived `{zh, en}` shape.

## Source files

| File | Responsibility |
|------|---------------|
| `src/index.ts` | Orchestration: repo config, phase functions, `main()` |
| `src/i18n.ts` | Centralized report strings: titles, issue-title functions, `ISSUE_LABELS`, `REPORT_LABELS` (includes archived zh/-en ids), `NOTIFY_LABELS` |
| `src/github.ts` | GitHub API helpers: `fetchRecentItems`, `fetchRecentReleases`, `fetchRecentDiscussions` (GraphQL), `fetchRepoMeta` (stars/open issues/last push), `fetchSkillsData`, `createGitHubIssue`; shared `RepoFetch` type |
| `src/config.ts` | Loads `config.yml` into `RadarConfig` (`cliRepos`, `skillsRepo`, `openclaw`, `openclawPeers`, `infraRepos`); built-in defaults when a section is missing |
| `src/prompts-data.ts` | All LLM prompt builders: data-source reports (`buildTrendingPrompt`, `buildWebReportPrompt`, `buildHnPrompt`, …), `buildDigestHighlightsPrompt`, and the Telegram `buildHighlightsPrompt` |
| `src/report.ts` | `callLlm` (with concurrency limiter), `parseLlmJson`, `saveFile`, `autoGenFooter`, LLM token budget constants |
| `src/report-builders.ts` | Unified digest: `categorizeRepoActivity` (new/closed issues, merged PRs), `buildSkillsSection`, `buildUnifiedDigestContent` (snapshot table + per-repo listings) |
| `src/report-savers.ts` | `saveWebReport`, `saveTrendingReport`, `saveHnReport`, … — one LLM call + one file + optional GitHub issue per report |
| `src/date.ts` | Date and timing utilities: `toCstDateStr`, `toUtcStr`, `weekdayOf`, `sleep` |
| `src/providers/types.ts` | `LlmProvider` interface, `ProviderName` type, `VALID_PROVIDER_NAMES` |
| `src/providers/openai-compatible.ts` | `OpenAICompatibleProvider` — shared base class for OpenAI-compatible providers |
| `src/providers/anthropic.ts` | `AnthropicProvider` — Anthropic SDK wrapper |
| `src/providers/openai.ts` | `OpenAIProvider` — extends `OpenAICompatibleProvider` |
| `src/providers/github-copilot.ts` | `GitHubCopilotProvider` — extends `OpenAICompatibleProvider` |
| `src/providers/openrouter.ts` | `OpenRouterProvider` — extends `OpenAICompatibleProvider` |
| `src/providers/deepseek.ts` | `DeepSeekProvider` — extends `OpenAICompatibleProvider` |
| `src/providers/qwen.ts` | `QwenProvider` — extends `OpenAICompatibleProvider`; Alibaba Model Studio |
| `src/providers/index.ts` | `createProvider` factory + barrel re-exports |
| `src/web.ts` | Sitemap-based web content fetching; state persisted to `digests/web-state.json` |
| `src/trending.ts` | GitHub Trending HTML scraper + Search API topic queries |
| `src/hn.ts` | Hacker News top AI stories via Algolia HN Search API |
| `src/generate-manifest.ts` | Generates `manifest.json` (sidebar data for Web UI) and `feed.xml` (RSS 2.0 feed) |

## Report outputs

Files written to `digests/YYYY-MM-DD/`:

| File | Label | Notes |
|------|-------|-------|
| `ai-digest.md` | `digest` | Always generated. Replaced `ai-cli`/`ai-agents`/`ai-infra` in August 2026 |
| `ai-web.md` | `web` | Skipped if no new sitemap content |
| `ai-trending.md` | `trending` | Skipped if both data sources fail |
| `ai-hn.md` | `hn` | Skipped if Algolia fetch fails |
| `ai-hf.md` | `hf` | **Weekly** — only on `HF_REPORT_WEEKDAY` (Monday, CST) |

## Tracked sources

- **CLI_REPOS** (7): claude-code, codex, gemini-cli, copilot-cli, opencode, pi, qwen-code
- **Discussions** (`discussions: true` in `config.yml`): codex, pi.
- **OPENCLAW** + **OPENCLAW_PEERS** (5): openclaw/openclaw + 4 peer projects (sorted by stars)
- **INFRA_REPOS** (6): vllm, sglang, llama-cpp, ollama, litellm, unsloth — inference engines, gateway and fine-tuning layer
- **CLAUDE_SKILLS_REPO**: anthropics/skills — no date filter, sorted by popularity
- **Web**: anthropic.com + openai.com via sitemap, state in `digests/web-state.json`
- **Trending**: github.com/trending (HTML) + GitHub Search API (6 AI topics, 7-day window)
- **HN**: Algolia HN Search API — 6 parallel queries, top-30 AI stories by points, last 24h
- **HF**: Hugging Face Hub trending models — **weekly**, gated on `HF_REPORT_WEEKDAY` in `src/index.ts`. The Hub list is ranked by cumulative downloads and 90.5% of a day's models carried over from the previous day, so daily generation was re-summarizing the same table. The fetch is gated too, not just the report.

## Key conventions

- All output is **English only** (see "English-only output" above). Do not add per-language branches, `lang` parameters, or translation passes. Report titles and labels are centralized in `src/i18n.ts`.
- The unified digest is **data-driven**: listings are verbatim GitHub data with fixed per-section caps (10 merged PRs / 10 new issues / 8 closed issues per repo, 4 label chips) chosen to keep the worst-case body under GitHub's 65,536-char issue limit. The Highlights section is its only LLM content and fails soft to omission. Categorization lives in `categorizeRepoActivity` — new = `created_at` in window, closed = `state === "closed"` + `closed_at` in window, merged = `merged_at` in window. Counts are best-effort: the fetch lists items *updated* in 24h, capped at 500 for `paginated` repos.
- All LLM prompt builders live in `src/prompts-data.ts`.
- Weekly and monthly rollups were removed in July 2026. `ai-weekly`/`ai-monthly` remain in `REPORT_LABELS` (`src/i18n.ts`) and `REPORT_FILES` (`src/generate-manifest.ts`) only so archived reports stay reachable — do not add generation code back.
- `callLlm(prompt, maxTokens?)` defaults to 4096 tokens. Web report uses 8192, trending uses 6144. The table-formatted listing reports (HN, PH, ArXiv, HF, Community) use `LLM_TOKENS_LISTING` = 6144 to fit multi-row tables plus 2-sentence summaries.
- Data-source listing reports (Trending, HN, PH, ArXiv, HF, Community) render their item lists as **Markdown tables** (not bullet lists). Numeric columns are copied verbatim from the fetched data; the summary column is 2 sentences. Tables already have CSS in `index.html` and render natively in GitHub Issues too.
- On 429 rate-limit errors `callLlm` retries up to 3 times with exponential backoff (5 s / 10 s / 20 s); the concurrency slot is released during the wait.
- The concurrency limiter (`LLM_CONCURRENCY = 5`) prevents 429s when many parallel LLM calls fire. Do not bypass it by calling SDK clients directly.
- LLM provider is selected via `LLM_PROVIDER` env var (default: `anthropic`). Valid values: `anthropic`, `openai`, `github-copilot`, `openrouter`, `deepseek`, `qwen`.
- The daily GitHub Actions run uses `qwen` (`qwen-flash`). It replaced `deepseek-v4-flash` in August 2026, after DeepSeek's 8/16 repricing pushed a run to ~¥3; qwen-flash is ~¥0.5. `qwen-flash` is tier-priced by single-request input length — every prompt here stays inside the cheapest 0–128K tier.
- Provider implementations live in `src/providers/`. Each file implements the `LlmProvider` interface. The factory in `src/providers/index.ts` validates the provider name and logs only the provider name — never API keys or endpoint URLs.
- GitHub issue label colors are defined in `LABEL_COLORS` in `src/github.ts`. Add new labels there.
- GitHub Discussions have no REST API, so `fetchRecentDiscussions` uses GraphQL. Enable per-repo with `discussions: true` — most tracked repos have the board enabled but dormant, and an unconditional fetch would just burn quota. Since the unified-digest change the fetched discussions are not rendered anywhere; drop or render them rather than widening the fetch.
- Web state (`digests/web-state.json`) is committed to git on every run. It is the source of truth for which URLs have been seen. `saveWebReport` writes it once at the end, regardless of whether a report was generated.
- Tracked repos are pruned when they go quiet. Removed August 2026 after an activity audit:
  - `deepseek-harness` — Issues/PRs disabled upstream and the Discussions board dormant: 13/13 days of zero data.
  - `zeptoclaw`, `nullclaw` — no upstream push for 30+ days; 90% and 50% of days had no activity at all.
  - `nanobot`, `nanoclaw`, `lobsterai`, `codewhale` — 17–37 items per 24h, well under the 30-issue + 20-PR prompt sample, so the model was padding a full 8-section report out of a handful of items.
  - `picoclaw`, `moltis` — removed by maintainer decision alongside the above.
  - Same audit fixed two renames: `qwibitai/nanoclaw` → `nanocoai/nanoclaw`, `agentscope-ai/CoPaw` → `agentscope-ai/QwenPaw`.

## Web UI & RSS Feed

- Web UI: `index.html` reads `manifest.json` to build the sidebar, then fetches `digests/YYYY-MM-DD/report.md` on demand.
- RSS Feed: `feed.xml` at the repo root. Generated by `src/generate-manifest.ts` in the same `pnpm manifest` step. Contains the latest 30 items (newest first) across all report types. Item links use hash routing: `https://duanyytop.github.io/agents-radar/#YYYY-MM-DD/report`.
- Both `manifest.json` and `feed.xml` are committed together in the "Commit manifest and feed" GHA step.
- The `REPORT_LABELS` map in `src/i18n.ts` must be kept in sync with the `LABELS` object in `index.html` when adding new report types.

## Adding a new report type

1. Create a data fetcher (or add to an existing one). For a repo-backed report, add the section to `RawConfig`/`RadarConfig` and `loadConfig` in `src/config.ts` — a `config.yml` section with no schema entry is silently ignored.
2. Add a `buildXxxPrompt` function in `src/prompts-data.ts`.
3. Add strings (title, issue title function, label) to `src/i18n.ts`.
4. Add a `saveXxxReport` function in `src/report-savers.ts`.
5. Wire into `fetchAllData` and the save phase in `src/index.ts`.
6. Add a label color entry in `LABEL_COLORS` in `src/github.ts`.
7. Add the report ID and label to `REPORT_LABELS` in `src/i18n.ts` and `LABELS` in `index.html`.
8. Add the report file name to `REPORT_FILES` in `src/generate-manifest.ts`.
9. Update both README files and this file.
