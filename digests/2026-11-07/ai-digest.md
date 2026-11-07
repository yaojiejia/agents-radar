# 📡 AI Ecosystem Digest — 2026-11-07

> Generated 2026-11-07 02:33 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 154,810 | 23 | 1 | 0 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 133,493 | 18 | 2 | 50 | 1 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 108,756 | 0 | 0 | 13 | 0 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,370 | 8 | 5 | 0 | 3 |
| [OpenCode](https://github.com/anomalyco/opencode) | 225,079 | 16 | 21 | 19 | 1 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 29,057 | 18 | 15 | 7 | 2 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 394,078 | 112 | 154 | 97 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 261,227 | 33 | 4 | 3 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 96,481 | 28 | 23 | 46 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 38,538 | 21 | 18 | 53 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 133,585 | 12 | 26 | 17 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 186,154 | 4 | 2 | 5 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 62,848 | 11 | 32 | 76 | 1 |
| [Unsloth](https://github.com/unslothai/unsloth) | 79,133 | 16 | 15 | 100 | 1 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,182 | 4 | 0 | 3 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,413 | 7 | 20 | 5 | 0 |

---

## ✨ Highlights

- **LiteLLM** released version [v1.108.2](https://github.com/BerriAI/litellm/releases/tag/v1.108.2) (LTS).
- **Claude Code** had a new release [v2.1.319](https://github.com/anthropics/claude-code/releases/tag/v2.1.319).
- **OpenAI Codex** addressed multiple issues in its [merged PRs](https://github.com/openai/codex/pull/60039) improving the handling of cached stdio MCP servers.
- **OpenClaw** has several new issues reported, including [#193962](https://github.com/openclaw/openclaw/issues/193962) regarding a bug that prevents a package-update from reaching a time-out fix.
- **AIBrix** is experiencing a notable increase in discussion around its [issue](https://github.com/vllm-project/aibrix/issues/3412) on Redis deadlines impacting running-request writes.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 154,810 · **Open issues:** 16,769 · **Last push:** 9h ago

On November 7, 2026, Claude Code released version 2.1.319, introducing significant updates to the auto mode functionality when telemetry or feature flags are turned off, emphasizing server-side verification for requests behind LLM gateways. Notably, there were no merged pull requests in the last 24 hours, but several new issues emerged, including #108074 regarding the unavailability of auto-dream on the Ultra plan and #108076, which reports unexpected weekly usage depletion for Claude Ultra since late October. Other notable issues include #108079, highlighting a bug in Windows where code sessions stop saving under certain conditions, and #108078, which addresses memory exhaustion leading to crashes.

#### 🚀 New Releases
- [v2.1.319](https://github.com/anthropics/claude-code/releases/tag/v2.1.319) v2.1.319

#### 🐛 New Issues
- [#108074](https://github.com/anthropics/claude-code/issues/108074) Auto-dream not available on Ultra plan (tengu_onyx_plover disabled) `question` `platform:windows` `memory` 💬1
- [#108070](https://github.com/anthropics/claude-code/issues/108070) [FEATURE] 1Password for Claude sign-in in Claude Code / desktop Code tab, not only Cowork `enhancement` `platform:macos` `area:desktop` `area:chrome` 💬1
- [#107905](https://github.com/anthropics/claude-code/issues/107905) [Claude in Chrome] Tab group vanishes between tool calls on Vivaldi 8.3 `bug` `has repro` `platform:windows` `regression` 💬1
- [#108019](https://github.com/anthropics/claude-code/issues/108019) [REGRESSION] Desktop sidebar lost running/attention status dots for sessions `bug` `platform:windows` `area:cowork` `regression` 💬1
- [#108080](https://github.com/anthropics/claude-code/issues/108080) [BUG] WebFetch domain check refuses www.theguardian.com ("Claude Code is unable to fetch from www.theguardian.com") `bug` `platform:windows` `area:tools` `area:desktop`
- [#108079](https://github.com/anthropics/claude-code/issues/108079) [BUG] Windows: Code sessions silently stop saving when package data on a non-system drive loses EFS app protection (ERROR_APPX_FILE_NOT_ENCRYPTED) `bug` `platform:windows` `area:desktop`
- [#108078](https://github.com/anthropics/claude-code/issues/108078) [Bug] Spawned tasks can exhaust machine memory and crash Claude Code `bug` `platform:linux` `perf:memory` `area:agents`
- [#108076](https://github.com/anthropics/claude-code/issues/108076) Claude Ultra — Unexpected weekly usage depletion since late October 2026 `bug` `platform:linux` `area:cost`
- [#108077](https://github.com/anthropics/claude-code/issues/108077) [BUG] VS Code extension 2.1.319 fails to install/open on macOS arm64 — Manifest asset fetch fails `bug` `platform:macos` `area:packaging` `area:ide`
- [#108075](https://github.com/anthropics/claude-code/issues/108075) Edit cloud environment modal is completely black - can’t see or edit fields `bug` `has repro` `platform:macos` `area:claude-code-web`
- [#108073](https://github.com/anthropics/claude-code/issues/108073) [Bug] False positive AUP safeguard flag (reasoning_extraction) on benign debugging request `bug` `duplicate` `platform:linux` `area:model`
- [#108072](https://github.com/anthropics/claude-code/issues/108072) [BUG] Desktop app sessions never report vcs.repository.* OTel attributes (spare process starts outside the repo) `bug` `has repro` `platform:macos` `area:desktop`
- [#108071](https://github.com/anthropics/claude-code/issues/108071) [BUG] Linux sandbox: denyRead globs are expanded when a command starts, so a matching file created while that command runs is readable by it `bug` `has repro` `platform:linux` `area:security`
- [#108069](https://github.com/anthropics/claude-code/issues/108069) [FEATURE] Per-skill opt-out for claude.ai-synced skills in Claude Code (document skillOverrides for anthropic-skills:*) `enhancement` `platform:macos` `area:skills`
- [#108068](https://github.com/anthropics/claude-code/issues/108068) [Feature Request] Automatically update Claude Code when idle, without requiring session restart `enhancement` `platform:macos` `area:installation`
- [#108067](https://github.com/anthropics/claude-code/issues/108067) [Bug] Opus 5.5 Safeguards Flag Session with [cyber] False Positive `bug` `duplicate` `platform:windows` `area:model`
- [#108066](https://github.com/anthropics/claude-code/issues/108066) [BUG] Regression after 2.1.281: blocking "path could not be vetted" Settings Error on every launch when the Windows build runs from a WSL home whose ~/.claude is a WSL symlink `bug` `has repro` `platform:windows` `area:core`
- [#108065](https://github.com/anthropics/claude-code/issues/108065) [BUG] BUG FOR CLAUDE DESKTOP New chat created with Command+N does not default to the currently selected project folder `bug` `platform:macos` `area:desktop`
- [#108064](https://github.com/anthropics/claude-code/issues/108064) [FEATURE] Generic "needs input" hook that covers every prompt the desktop app shows as "Needs your input" `enhancement` `platform:macos` `area:hooks` `area:desktop`
- [#108063](https://github.com/anthropics/claude-code/issues/108063) Claude Code in the desktop app refuses to delete my own files, even in bypass permissions mode `bug` `platform:windows` `area:model` `area:permissions`
- [#108062](https://github.com/anthropics/claude-code/issues/108062) [Bug] Unexpected model switching from Fable to Opus `bug` `platform:macos` `area:model`
- [#108061](https://github.com/anthropics/claude-code/issues/108061) [Bug] Safety Classifier False Positive Cuts Defensive auditd Sensor Code Responses `bug` `platform:linux` `area:model`
- [#108059](https://github.com/anthropics/claude-code/issues/108059) [BUG] macOS sandbox: scutil --get LocalHostName returns MacBook-Air `bug` `platform:macos` `area:bash` `area:sandbox`

#### 🔒 Closed Issues
- [#106746](https://github.com/anthropics/claude-code/issues/106746) [BUG] Claude Desktop (Windows): clicks and scrolling blocked system-wide in a screen region; foreground drops to NULL until Claude Desktop is restarted

### OpenAI Codex (`openai/codex`)

**Stars:** 133,493 · **Open issues:** 26,782 · **Last push:** <1h ago

On November 7, 2026, OpenAI Codex released version rust-v0.169.0-alpha.2, introducing several improvements to server interaction and UI functionality. Noteworthy merged pull requests include the addition of opt-in lazy startup for cached stdio MCP servers, enhancements for error visibility during MCP server startup, and a fix for authentication issues affecting git-attribution settings. Additionally, significant updates were made to the UI, such as allowing for multiple footer rows in extension status content and normalizing inline UI tree text. Among the newly reported issues, a prominent one involves disappearing local projects on Windows following an app update and switching accounts, indicating a critical area needing attention.

#### 🚀 New Releases
- [rust-v0.169.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.169.0-alpha.2) 0.169.0-alpha.2

#### ✅ Merged PRs
- [#60039](https://github.com/openai/codex/pull/60039) Add opt-in lazy startup for cached stdio MCP servers
- [#60038](https://github.com/openai/codex/pull/60038) Surface MCP server startup errors when preparing cached tool calls
- [#60037](https://github.com/openai/codex/pull/60037) Preserve MCP sharing discovery when deferring cached stdio startup
- [#60035](https://github.com/openai/codex/pull/60035) Fix authentication for git-attribution settings requests
- [#60034](https://github.com/openai/codex/pull/60034) Omit sensitive process inputs from spawn trace logs
- [#60032](https://github.com/openai/codex/pull/60032) Allow extension status content to use multiple footer rows
- [#60031](https://github.com/openai/codex/pull/60031) Unify TUI status line layout for extension content
- [#60029](https://github.com/openai/codex/pull/60029) Render UI trees directly into terminal buffers
- [#60028](https://github.com/openai/codex/pull/60028) Reuse prepared UI trees for footer rendering
- [#60027](https://github.com/openai/codex/pull/60027) Keep configured status lines on the native renderer
- [#60026](https://github.com/openai/codex/pull/60026) Add multiline layout and row wrapping to UI trees
- [#60022](https://github.com/openai/codex/pull/60022) Separate UI tree preparation from line rendering
- [#60021](https://github.com/openai/codex/pull/60021) Normalize inline UI tree text across styled leaves
- [#60020](https://github.com/openai/codex/pull/60020) Strip terminal commands from UI tree strings
- [#60019](https://github.com/openai/codex/pull/60019) Add theme-aware semantic colors to extension UI trees
- [#60018](https://github.com/openai/codex/pull/60018) Propagate turn triggers to usage analytics events
- [#60017](https://github.com/openai/codex/pull/60017) Disable bundled skills in the prompt-prefix comparison test
- [#60014](https://github.com/openai/codex/pull/60014) Honor managed runtime authentication modes and expand coverage
- [#60011](https://github.com/openai/codex/pull/60011) Adapt multi-agent mode guidance for hosted tools
- [#60010](https://github.com/openai/codex/pull/60010) Add a shared Windows Bazel setup action
- [#60009](https://github.com/openai/codex/pull/60009) Add custom gateway selection to TUI sign-in
- [#60008](https://github.com/openai/codex/pull/60008) Refactor TUI clipboard and composer input handling
- [#60007](https://github.com/openai/codex/pull/60007) Start cloud threads with the local GitHub project
- [#60006](https://github.com/openai/codex/pull/60006) Reduce SQLite write overhead for thread activity and history
- [#60004](https://github.com/openai/codex/pull/60004) Expose ChatGPT user IDs in `account/read` responses
- [#60003](https://github.com/openai/codex/pull/60003) Apply runtime authentication to realtime connections
- [#60002](https://github.com/openai/codex/pull/60002) Decouple Guardian retrieval from local message-board handles
- [#60001](https://github.com/openai/codex/pull/60001) Add bounded original-evidence delivery for Guardian reviewers
- [#60000](https://github.com/openai/codex/pull/60000) Plan Guardian evidence delivery in source order
- [#59999](https://github.com/openai/codex/pull/59999) Add model-driven Guardian channel selection
- [#59998](https://github.com/openai/codex/pull/59998) Add atomic bulk channel subscription updates
- [#59995](https://github.com/openai/codex/pull/59995) Add subscription tools for Guardian reviewers
- [#59994](https://github.com/openai/codex/pull/59994) Add read-only evidence retrieval tools for Guardian reviewers
- [#59993](https://github.com/openai/codex/pull/59993) Add fixed read views for local message boards
- [#59991](https://github.com/openai/codex/pull/59991) Preserve app invocation context across MCP tool refreshes
- [#59988](https://github.com/openai/codex/pull/59988) Add inherited styling to TUI display trees
- [#59987](https://github.com/openai/codex/pull/59987) Resolve startup models using thread creation options
- [#59983](https://github.com/openai/codex/pull/59983) Render typed prompts as Markdown in the TUI
- [#59980](https://github.com/openai/codex/pull/59980) Test rejection of PNGs with readable dimensions but corrupt pixels
- [#59974](https://github.com/openai/codex/pull/59974) Test command completion before network denial grace expires
- [#59973](https://github.com/openai/codex/pull/59973) Enable gRPC and host output truncation by default for Code Mode
- [#59972](https://github.com/openai/codex/pull/59972) Fix Opus header installation with relative symlink inputs
- [#59969](https://github.com/openai/codex/pull/59969) Reduce contention in thread writer lock coordination
- [#59963](https://github.com/openai/codex/pull/59963) Normalize turn context permissions to a required profile
- [#59960](https://github.com/openai/codex/pull/59960) Skip the network denial grace period when remote decisions drain
- [#59958](https://github.com/openai/codex/pull/59958) Expose model metadata from each thread's catalog and settings
- [#59955](https://github.com/openai/codex/pull/59955) Bump `ignore` to `0.4.30`
- [#59954](https://github.com/openai/codex/pull/59954) Resolve skill display names in read and installations tools
- [#59949](https://github.com/openai/codex/pull/59949) Route broad Codex setup questions through self-knowledge guidance
- [#59944](https://github.com/openai/codex/pull/59944) Narrow openai-docs to product Q&A and first-time API setup

#### 🐛 New Issues
- [#59895](https://github.com/openai/codex/issues/59895) Windows: local projects disappear after app update and switching back to personal account `bug` `windows-os` `app` `session` 💬9
- [#59890](https://github.com/openai/codex/issues/59890) Images 2.6 on Codex OAuth: no model selection, complexity/SVG ignored, GIF rejected, animation flag not in shipped CLI `bug` `CLI` `imagen` 💬3
- [#60005](https://github.com/openai/codex/issues/60005) [macOS] Chat tab missing in full-view browser layout; Cmd+Option+B still reaches chat `bug` `app` `browser` 💬3
- [#60023](https://github.com/openai/codex/issues/60023) debug app error `bug` `windows-os` `extension` `computer-use` 💬2
- [#59970](https://github.com/openai/codex/issues/59970) Codex Desktop repeatedly injects oversized continuity context after resume/compaction, causing runaway usage `bug` `rate-limits` `context` `app` 💬2
- [#60013](https://github.com/openai/codex/issues/60013) Personal plugin catalog retains a stale “Created by you” card that opens a 404 `bug` `mcp` `skills` 💬2
- [#59997](https://github.com/openai/codex/issues/59997) Codex Desktop: preserve human authorization across native answers and scoped peer messages `enhancement` `app` `subagent` `app-server` 💬2
- [#60036](https://github.com/openai/codex/issues/60036) mr `bug` `app` `browser` 💬1
- [#59898](https://github.com/openai/codex/issues/59898) Codex Desktop: Last Turn is empty when custom subagents edit tracked repository files `bug` `windows-os` `app` `subagent` 💬1
- [#60024](https://github.com/openai/codex/issues/60024) Windows desktop Work: Queue follow-up preference not respected and native /plan action missing `bug` `windows-os` `app` `plan` 💬1
- [#59920](https://github.com/openai/codex/issues/59920) Spawned-process environment, secrets included, is written unredacted to logs_2.sqlite at TRACE level with no switch `bug` `CLI` 💬1
- [#59996](https://github.com/openai/codex/issues/59996) ChatGPT for Windows cannot verify Chrome extension; browser side chat works `bug` `windows-os` `app` `browser` 💬1
- [#60033](https://github.com/openai/codex/issues/60033) Dictation stops working in existing Codex chats and disappears without inserting text `bug` `app`
- [#60030](https://github.com/openai/codex/issues/60030) [macOS Desktop 26.1103] projectId remains null after moving a chat, in both recent and history listings `bug` `app` `app-server`
- [#60025](https://github.com/openai/codex/issues/60025) [Windows][Projects] Adding Work conversation causes Project Home to stop displaying chats `bug` `windows-os` `app` `session`
- [#60016](https://github.com/openai/codex/issues/60016) Windows desktop: expanding to full view stops dictation and loses recorded input `bug` `windows-os` `app`
- [#60015](https://github.com/openai/codex/issues/60015) CLI managed worktrees ignore .worktreeinclude and AGENTS.override.md, unlike the app `bug` `exec` `CLI`
- [#59992](https://github.com/openai/codex/issues/59992) [Windows] Primary runtime (~500MB) re-downloads on every app start; EPERM on cleanup + sync_plugins post_install_failed `bug` `windows-os` `app`

#### 🔒 Closed Issues
- [#60005](https://github.com/openai/codex/issues/60005) [macOS] Chat tab missing in full-view browser layout; Cmd+Option+B still reaches chat
- [#59920](https://github.com/openai/codex/issues/59920) Spawned-process environment, secrets included, is written unredacted to logs_2.sqlite at TRACE level with no switch

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 108,756 · **Open issues:** 766 · **Last push:** 1h ago

On November 7, 2026, there were no new releases for Gemini CLI, but several significant pull requests were merged, enhancing functionality and fixing bugs. Notably, PR #30183 allows users to override the 60-second API headers timeout for all authentication modes, while PR #30184 addresses an issue on macOS by closing leaked file descriptors in PTY spawn. Other important fixes include improvements to multi-hour quota retry notifications (PR #30187), enhancements to terminal model management (PR #30186), and an update that enables the validation of model names through the `/model` command (PR #30137). Additionally, PR #30119 introduces support for standalone `theme.json` configurations, allowing for customized theme setups. Overall, it was a day of routine maintenance with noteworthy improvements to the user experience and system reliability.

#### ✅ Merged PRs
- [#30183](https://github.com/google-gemini/gemini-cli/pull/30183) fix(core,cli): allow overriding 60s API headers timeout across all auth modes (`model.requestTimeoutMs` / `GEMINI_API_HEADERS_TIMEOUT_MS`)
- [#30184](https://github.com/google-gemini/gemini-cli/pull/30184) fix(core): close orphan /dev/ptmx master FD leaked on macOS PTY spawn
- [#30165](https://github.com/google-gemini/gemini-cli/pull/30165) fix(acp): handle mid-stream retries to prevent text concatenation
- [#30187](https://github.com/google-gemini/gemini-cli/pull/30187) fix(core): prevent multi-hour quota retries and notify ACP client on retry attempts
- [#30186](https://github.com/google-gemini/gemini-cli/pull/30186) fix(core,cli): prevent terminal model-turn 400s on resume and main-thread JSONL freezes
- [#30182](https://github.com/google-gemini/gemini-cli/pull/30182) fix(core,cli): prevent silent multi-minute loading hangs on network failures
- [#30181](https://github.com/google-gemini/gemini-cli/pull/30181) fix(vscode): eliminate barrel import bundle bloat and redundant setContext calls
- [#30180](https://github.com/google-gemini/gemini-cli/pull/30180) fix(core): bound multi-part tool outputs and evict older multimodal inlineData
- [#30143](https://github.com/google-gemini/gemini-cli/pull/30143) fix(cli): handle file watcher errors and permit FSEvents in macOS permissive sandbox
- [#30137](https://github.com/google-gemini/gemini-cli/pull/30137) fix(cli): validate model names and support direct arguments in /model command
- [#30124](https://github.com/google-gemini/gemini-cli/pull/30124) fix(core): require path-separator boundary in tildeifyPath
- [#30117](https://github.com/google-gemini/gemini-cli/pull/30117) fix(cli): normalize error payloads in headless CLI formatting
- [#30119](https://github.com/google-gemini/gemini-cli/pull/30119) feat(cli): support standalone theme.json configuration for custom themes

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,370 · **Open issues:** 2,199 · **Last push:** <1h ago

On November 7, 2026, GitHub Copilot CLI released version 1.0.108-1, which fixed an issue with PDF attachments in Grok versions 4.6 and 4.7, ensuring a fallback to file references, and introduced a local MCP server restart after the `/cd` command to adhere to new directory settings. Version 1.0.108-0 was also released, adding the new `sandbox.userPolicy.filesystem.enumeratePaths` in `settings.json` for Windows, along with enhancements to documentation clarity regarding the CLI's behavior. No merged pull requests were reported, but several notable issues emerged, including issue #5370 regarding agent output being withheld during long backgrounded commands in Fusion/Auto mode.

#### 🚀 New Releases
- [v1.0.108-1](https://github.com/github/copilot-cli/releases/tag/v1.0.108-1) 1.0.108-1
- [v1.0.108-0](https://github.com/github/copilot-cli/releases/tag/v1.0.108-0) 1.0.108-0
- [v1.0.107](https://github.com/github/copilot-cli/releases/tag/v1.0.107) 1.0.107

#### 🐛 New Issues
- [#5370](https://github.com/github/copilot-cli/issues/5370) Agent output withheld until next user turn when long shell commands are backgrounded (Fusion/Auto mode) `triage` 💬1
- [#5369](https://github.com/github/copilot-cli/issues/5369) Allow a block list of models in copilot fusion or auto mode `area:models`
- [#5377](https://github.com/github/copilot-cli/issues/5377) Clarify the 1.0.107 release notes `triage`
- [#5376](https://github.com/github/copilot-cli/issues/5376) copilot --acp emits no OpenTelemetry traces or metrics (no per-session OTel tracker is created in ACP mode) `triage`
- [#5375](https://github.com/github/copilot-cli/issues/5375) Add ability to disable built in slash commands `triage`
- [#5374](https://github.com/github/copilot-cli/issues/5374) Render postToolUse hook messages in the Copilot desktop app `triage`
- [#5372](https://github.com/github/copilot-cli/issues/5372) /rubber-duck command disappeared from copilot-cli `triage`
- [#5371](https://github.com/github/copilot-cli/issues/5371) Custom model providers (`COPILOT_PROVIDERS_CONFIG` / `COPILOT_PROVIDER_*`) are ignored in `--host-environment` and `--server` modes `triage`

#### 🔒 Closed Issues
- [#2731](https://github.com/github/copilot-cli/issues/2731) @ file autocomplete breaks on paths containing spaces
- [#5368](https://github.com/github/copilot-cli/issues/5368) Sandbox enforcement probe fails with CreateProcessW error 2 on Windows when `failIfUnavailable: true` (managed settings)
- [#4845](https://github.com/github/copilot-cli/issues/4845) Sessions stuck permanently in "In use" state when not in use
- [#4943](https://github.com/github/copilot-cli/issues/4943) ask_user form: pressing Esc silently discards the entire form instead of clearing current input
- [#5265](https://github.com/github/copilot-cli/issues/5265) Input history (command-history-state.json) is last-writer-wins across concurrent copilot processes; prompts typed in one session are erased

### OpenCode (`anomalyco/opencode`)

**Stars:** 225,079 · **Open issues:** 4,113 · **Last push:** <1h ago

On November 7, 2026, OpenCode released version 2.2.6, introducing significant enhancements such as shared MCP connections for faster project initialization by pooling server connections, and new GUI plugin capabilities that allow for color themes and enhanced actions on code blocks. Among the merged pull requests, notable fixes include session export saving to the working directory and a restored hero section on the browse page, while new features aim to improve product visibility by promoting key tools and providing comprehensive Linux desktop download listings. A recurring issue was highlighted with the new problem #62442, concerning a stuck session that continues running and leads to timeout errors during interruptions.

#### 🚀 New Releases
- [v2.2.6](https://github.com/anomalyco/opencode/releases/tag/v2.2.6) v2.2.6

#### ✅ Merged PRs
- [#62253](https://github.com/anomalyco/opencode/pull/62253) fix(tui): save session exports to the working directory
- [#62491](https://github.com/anomalyco/opencode/pull/62491) fix(site): keep the browse page's hero out of the products bundle
- [#62489](https://github.com/anomalyco/opencode/pull/62489) fix(site): drop the free button from the companions shelf
- [#62487](https://github.com/anomalyco/opencode/pull/62487) feat(site): add a hero to the browse page
- [#62486](https://github.com/anomalyco/opencode/pull/62486) fix(site): keep the companions shelf's category in its column on phones
- [#62485](https://github.com/anomalyco/opencode/pull/62485) feat(site): promote browse, hex and opentunnel on the product pages
- [#62482](https://github.com/anomalyco/opencode/pull/62482) feat(site): list every linux desktop download
- [#62484](https://github.com/anomalyco/opencode/pull/62484) fix(site): drop the external arrow from the Data nav link
- [#62483](https://github.com/anomalyco/opencode/pull/62483) fix(site): highlight logins on the browse page
- [#62252](https://github.com/anomalyco/opencode/pull/62252) fix(desktop): translate cut, copy, paste and select all in the right-click menu
- [#62467](https://github.com/anomalyco/opencode/pull/62467) fix(site): close the docs menu with Escape after a click
- [#62464](https://github.com/anomalyco/opencode/pull/62464) fix(core): log markdown agents that fail to load
- [#62251](https://github.com/anomalyco/opencode/pull/62251) fix(core): log command files that fail to load
- [#62466](https://github.com/anomalyco/opencode/pull/62466) feat(site): ship the restyled docs to opencode.ai
- [#62465](https://github.com/anomalyco/opencode/pull/62465) fix(site): fit the home og description on two lines
- [#62463](https://github.com/anomalyco/opencode/pull/62463) fix(site): order the hero and what copy desktop, terminal, phone
- [#62462](https://github.com/anomalyco/opencode/pull/62462) fix(site): order products desktop, terminal, mobile
- [#62461](https://github.com/anomalyco/opencode/pull/62461) fix(site): remove the home page faq
- [#62458](https://github.com/anomalyco/opencode/pull/62458) docs(console): add Inkling 2 Small Free

#### 🐛 New Issues
- [#62442](https://github.com/anomalyco/opencode/issues/62442) desktop: stuck session stays running; interrupt returns false and delete times out 💬6
- [#62460](https://github.com/anomalyco/opencode/issues/62460) Stalling Beam Free 💬5
- [#62447](https://github.com/anomalyco/opencode/issues/62447) tui: model picker shows only subset of declared custom provider models 💬5
- [#62432](https://github.com/anomalyco/opencode/issues/62432) permissions: option to disable persisting "Allow always" approvals `pending close` `triaging` 💬3
- [#62411](https://github.com/anomalyco/opencode/issues/62411) opencode-go: GLM-5.3-Flash emits corrupted Polish text with foreign-script glyph insertions `pending close` `triaging` 💬3
- [#62282](https://github.com/anomalyco/opencode/issues/62282) desktop: Branch Changes still includes unpushed local-default commits in V2 `reproduced` 💬2
- [#62488](https://github.com/anomalyco/opencode/issues/62488) serve: sessions cut by a restart stay "Working" forever unless the server runs with --service `pending close` `triaging` 💬1
- [#62481](https://github.com/anomalyco/opencode/issues/62481) compaction: auto compaction between a tool call and its result drops the tool output ("No tool output found for function call") 💬1
- [#62456](https://github.com/anomalyco/opencode/issues/62456) why my usage never reset??? `pending close` `triaging` 💬1
- [#62454](https://github.com/anomalyco/opencode/issues/62454) [FEATURE]: Tell ACP clients when a session's MCP tools are ready (first prompt misses them) `pending close` `triaging` 💬1
- [#62452](https://github.com/anomalyco/opencode/issues/62452) limit message `pending close` `triaging` 💬1
- [#62448](https://github.com/anomalyco/opencode/issues/62448) [FEATURE]: Better provider management settings in the desktop client 💬1
- [#62441](https://github.com/anomalyco/opencode/issues/62441) mcp: notebooklm-mcp@latest fails to start on Node 26 (ERR_MODULE_NOT_FOUND hono/ws) 💬1
- [#62438](https://github.com/anomalyco/opencode/issues/62438) Local plugins are re-evaluated per Location, and config plugins receive every Location's events `reproduced` 💬1
- [#62436](https://github.com/anomalyco/opencode/issues/62436) [desktop] Group the Home session list by project instead of by date `pending close` `triaging` 💬1
- [#62435](https://github.com/anomalyco/opencode/issues/62435) CLI: opencode doctor faalt met ENOENT en opencode auth status is geen geldige subcommand `pending close` `triaging` 💬1

#### 🔒 Closed Issues
- [#61511](https://github.com/anomalyco/opencode/issues/61511) agent: Crouton Alpha stalls mid-turn and does not continue next steps
- [#53748](https://github.com/anomalyco/opencode/issues/53748) v2 /export saves to /tmp/ instead of current working dir like v1
- [#52457](https://github.com/anomalyco/opencode/issues/52457) TUI stays dark on a light terminal after a dark palette was cached
- [#61481](https://github.com/anomalyco/opencode/issues/61481) Models list is completely empty on BOTH 2.2.5 and 2.2.4 (Windows 11)
- [#50969](https://github.com/anomalyco/opencode/issues/50969) tui: model favorites toggle missing hint and dead in /models dialog (2.0.13)
- [#62233](https://github.com/anomalyco/opencode/issues/62233) no se actualiza el tiempo de uso
- [#61507](https://github.com/anomalyco/opencode/issues/61507) TUI discards --model when resuming a session, while --agent is honored
- [#62202](https://github.com/anomalyco/opencode/issues/62202) run: on Windows the prompt after -- is stored twice, with literal shell quotes
- [#52065](https://github.com/anomalyco/opencode/issues/52065) commands: unresolvable model in frontmatter silently drops the command
- [#54200](https://github.com/anomalyco/opencode/issues/54200) agent: frontmatter description starting with '[' silently drops the agent (AgentNotFoundError)
- [#51060](https://github.com/anomalyco/opencode/issues/51060) tui: MCP dialog closes after browser OAuth completes
- [#50393](https://github.com/anomalyco/opencode/issues/50393) Composer flags bare @words (e.g. Slack-style @here) as missing files
- [#62432](https://github.com/anomalyco/opencode/issues/62432) permissions: option to disable persisting "Allow always" approvals
- [#62411](https://github.com/anomalyco/opencode/issues/62411) opencode-go: GLM-5.3-Flash emits corrupted Polish text with foreign-script glyph insertions
- [#45876](https://github.com/anomalyco/opencode/issues/45876) Agent .md files with invalid YAML frontmatter are silently skipped without warning
- [#62224](https://github.com/anomalyco/opencode/issues/62224) Refund request - no response from help@anoma.ly
- [#62218](https://github.com/anomalyco/opencode/issues/62218) compaction: auto-compaction triggers far below the threshold after session revert / model refresh
- [#62208](https://github.com/anomalyco/opencode/issues/62208) ACP: no way to steer or queue a message into a running session; session/prompt during a turn is refused although the core inbox supports both
- [#62206](https://github.com/anomalyco/opencode/issues/62206) desktop: ResizeObserver loop storm on every launch (Windows), 33-37 MB renderer dumps
- [#62197](https://github.com/anomalyco/opencode/issues/62197) `@` usage in quote comment prevents sending message
- [#55912](https://github.com/anomalyco/opencode/issues/55912) Right-click context menu in the prompt input is not localized on Linux

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 29,057 · **Open issues:** 2,134 · **Last push:** <1h ago

On November 6, 2026, Qwen Code released version v0.26.9, which enhances skill installation and activation with improvements to the reliability of Skill ZIP uploads, daemon APIs, and bulk activation. Additionally, the nightly release v0.26.9-nightly.20261106.80fd7c3353 included a fix in the interactive testing framework, allowing it to poll the foreground-shell frame instead of taking snapshots. Significant merged pull requests addressed issues in CI processes and managed-agent functions, with notable fixes for snapshot claims and lifecycle management. A hot new issue was raised regarding the CLI background-view, focused on improving user experience by addressing deferred UX edges.

#### 🚀 New Releases
- [v0.26.9-nightly.20261106.80fd7c3353](https://github.com/QwenLM/qwen-code/releases/tag/v0.26.9-nightly.20261106.80fd7c3353) Release v0.26.9-nightly.20261106.80fd7c3353
- [v0.26.9](https://github.com/QwenLM/qwen-code/releases/tag/v0.26.9) Release v0.26.9

#### ✅ Merged PRs
- [#15274](https://github.com/QwenLM/qwen-code/pull/15274) fix(ci): preserve Maven suite results across cache write-back failures
- [#16489](https://github.com/QwenLM/qwen-code/pull/16489) fix(managed-agent): let a late snapshot publication wait for the claim instead of losing deadlocks
- [#16504](https://github.com/QwenLM/qwen-code/pull/16504) refactor(runtime): import inline fully qualified names in runtime modules
- [#16445](https://github.com/QwenLM/qwen-code/pull/16445) feat(cli): align managed agent basic tools with daemon
- [#16483](https://github.com/QwenLM/qwen-code/pull/16483) fix(core): re-read a grown local journal prefix even when its timestamps did not move
- [#15836](https://github.com/QwenLM/qwen-code/pull/15836) fix(core): report a cancelled shell as interrupted, not completed
- [#16503](https://github.com/QwenLM/qwen-code/pull/16503) refactor(managed-agent): fold the last CSI statement helper copies

#### 🐛 New Issues
- [#16444](https://github.com/QwenLM/qwen-code/issues/16444) cli background-view: auto-surface UX edges deferred from #16432 (Ctrl+C target, positional index, detail drain) `priority/P3` `type/bug` `category/ui` `scope/keybindings` 💬4
- [#16508](https://github.com/QwenLM/qwen-code/issues/16508) feat(core): idle-time auto-compaction — run the summarizer while the user is away, not mid-turn `priority/P2` `type/feature-request` `category/performance` `scope/latency` 💬3
- [#16449](https://github.com/QwenLM/qwen-code/issues/16449) core(permissions): extend amend-guard inert proof and recognizer coverage (follow-up to #16075) `priority/P2` `type/bug` `category/security` `scope/shell` 💬3
- [#16443](https://github.com/QwenLM/qwen-code/issues/16443) sdk daemon-ui: nameOnly lifecycle follow-ups from #16306 (generation signal, side keying, previews, bounds) `priority/P2` `type/bug` `category/ui` `scope/web-shell` 💬3
- [#16506](https://github.com/QwenLM/qwen-code/issues/16506) feat(providers): Wally (RunAnywhere) provider preset `priority/P3` `type/feature-request` `category/integration` `need-discussion` 💬2
- [#16474](https://github.com/QwenLM/qwen-code/issues/16474) feat(web-shell): selection-anchored inline branch threads with collapsible local Q&A (interactive PoC) `priority/P3` `type/feature-request` `category/ui` `need-discussion` 💬2
- [#16471](https://github.com/QwenLM/qwen-code/issues/16471) web-shell: managed-host review suggestions deferred from #16200 `priority/P3` `category/ui` `scope/testing` `type/enhancement` 💬2
- [#16473](https://github.com/QwenLM/qwen-code/issues/16473) Extract isMainRouteSelector as the shared main-route predicate (follow-up to #15318) `priority/P3` `status/blocked` `category/core` `type/enhancement` 💬2
- [#16457](https://github.com/QwenLM/qwen-code/issues/16457) MCP OAuth: overlapping authorization flows share the fixed callback port 7777 and invalidate each other's state `priority/P2` `type/bug` `category/authentication` `scope/oauth` 💬2
- [#16441](https://github.com/QwenLM/qwen-code/issues/16441) Follow-up: stacked-skill notice output and replay contracts `priority/P3` `category/cli` `scope/non-interactive` `scope/testing` 💬2
- [#16442](https://github.com/QwenLM/qwen-code/issues/16442) follow-up: daemon UI lifecycle naming polish deferred from #16306 `priority/P2` `category/ui` `type/enhancement` `daemon` 💬2
- [#16440](https://github.com/QwenLM/qwen-code/issues/16440) feat: source-scoped allowlists for bundled skills and builtin agents `priority/P2` `type/feature-request` `category/configuration` `scope/settings` 💬2
- [#16431](https://github.com/QwenLM/qwen-code/issues/16431) Main CI failed: Managed Agent gate — ManagedAgentServerIntegrationTest.theTitleBoundIsEnforcedInUtf16CodeUnits `status/needs-triage` `type/bug` 💬1
- [#16466](https://github.com/QwenLM/qwen-code/issues/16466) Release Failed for N/A on 2026-11-06 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#16505](https://github.com/QwenLM/qwen-code/issues/16505) Main CI failed: E2E Tests — interactive/ink-agent-loop-parity.test.ts > … > 'an approved write, then a declined one' `status/needs-triage` `type/bug`
- [#16497](https://github.com/QwenLM/qwen-code/issues/16497) AUTO mode: the classifier treats goal-related actions as user-authorized ("clean up my branch" → `git branch -D`)
- [#16496](https://github.com/QwenLM/qwen-code/issues/16496) AUTO mode: the classifier is told the pending tool call already ran (it is echoed as a `Prior action`)
- [#16490](https://github.com/QwenLM/qwen-code/issues/16490) SDK Release Failed for v0.1.29 on 2026-11-06

#### 🔒 Closed Issues
- [#15712](https://github.com/QwenLM/qwen-code/issues/15712) Main CI failed: E2E Tests — interactive/tui-foreground-shell.test.ts > keeps PTY bytes and composer drafts with their actual input owner
- [#16377](https://github.com/QwenLM/qwen-code/issues/16377) Main CI failed: Managed Agent gate — ChildWorkspaceServiceTest.aBusyStorageParksTheStepWithoutSpendingAnAttempt
- [#15675](https://github.com/QwenLM/qwen-code/issues/15675) sed edit simulation: `.` does not match `\r` or a whole emoji, so results differ from real sed
- [#16279](https://github.com/QwenLM/qwen-code/issues/16279) bug(web-shell): generated-ui retention e2e never dispatches the continue request (nightly red)
- [#13870](https://github.com/QwenLM/qwen-code/issues/13870) Support OSC 7501 program status in the interactive CLI
- [#16443](https://github.com/QwenLM/qwen-code/issues/16443) sdk daemon-ui: nameOnly lifecycle follow-ups from #16306 (generation signal, side keying, previews, bounds)
- [#15833](https://github.com/QwenLM/qwen-code/issues/15833) Cancelling a running shell command tells the model "The tool had already completed" although the command was killed
- [#15976](https://github.com/QwenLM/qwen-code/issues/15976) test(managed-agent): add a behavioral unit test for the A3 pending-sibling approval hold hook
- [#16307](https://github.com/QwenLM/qwen-code/issues/16307) bug(core): Qwen VL models are treated as text-only under their Ollama names
- [#14879](https://github.com/QwenLM/qwen-code/issues/14879) bug(web-shell): ArrowUp/Down in a wrapped long prompt recalls history instead of moving the caret
- [#16271](https://github.com/QwenLM/qwen-code/issues/16271) ci: release docker integration lane is always cold on apt — same defect #16214 fixed for E2E, still unfixed
- [#16431](https://github.com/QwenLM/qwen-code/issues/16431) Main CI failed: Managed Agent gate — ManagedAgentServerIntegrationTest.theTitleBoundIsEnforcedInUtf16CodeUnits
- [#16419](https://github.com/QwenLM/qwen-code/issues/16419) Main CI failed: SDK Java — ToolPublicationLifecycleMySqlIT.receiptAndReplayDoNotDeadlockWithSameTenantLifecycleCompletion(boolean)[1] (+2 more)
- [#16391](https://github.com/QwenLM/qwen-code/issues/16391) Main CI failed: SDK Java — ChildWorkspaceServiceTest.aBusyStorageParksTheStepWithoutSpendingAnAttempt
- [#11706](https://github.com/QwenLM/qwen-code/issues/11706) fix(core): make persisted session pagination safe for equal mtimes

### Claude Code Skills (`anthropics/skills`)

Top open skill PRs by community engagement:
- [#1742](https://github.com/anthropics/skills/pull/1742) fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers
- [#1298](https://github.com/anthropics/skills/pull/1298) fix(skill-creator): isolate trigger evals and handle Windows and runtime failures
- [#1245](https://github.com/anthropics/skills/pull/1245) Add notion-spec-to-implementation and quantitative-resume-auditor skills
- [#1980](https://github.com/anthropics/skills/pull/1980) webapp-testing: avoid shell=True in with_server.py
- [#1792](https://github.com/anthropics/skills/pull/1792) fix(docx): report LibreOffice timeout as an error and verify the output

---

## 🦞 OpenClaw Ecosystem

### OpenClaw (`openclaw/openclaw`)

**Stars:** 394,078 · **Open issues:** 7,657 · **Last push:** <1h ago

On November 7, 2026, there were no new releases for OpenClaw; however, several notable merged pull requests included fixes for UI elements and improvements to continuous integration processes. Key updates included a fix that ensures one-shot finalization works consistently with PostgreSQL 16 and enhancements to the Android build's garbage collection overhead. Additionally, significant improvements were made to the handling of worker reuse during testing and media download interruptions. Among the new issues reported, a critical bug was highlighted regarding the GPT-Live Talk call behavior, which ends prematurely when controlled through the gateway, drawing attention from the development team.

#### ✅ Merged PRs
- [#194416](https://github.com/openclaw/openclaw/pull/194416) chore(ui): align IconButton consumer checks
- [#189371](https://github.com/openclaw/openclaw/pull/189371) docs(users): explain that personal profiles from a past sign-in remain
- [#194384](https://github.com/openclaw/openclaw/pull/194384) fix(cron): keep one-shot finalization working on PostgreSQL 16
- [#194190](https://github.com/openclaw/openclaw/pull/194190) fix(ui): show only the time for same-day timestamps in tight rows
- [#194407](https://github.com/openclaw/openclaw/pull/194407) fix(ci): preserve worker reuse when test caches grow
- [#194405](https://github.com/openclaw/openclaw/pull/194405) test(ui): wait for configured provider icons before assertions
- [#194152](https://github.com/openclaw/openclaw/pull/194152) ui: move dialog closes and ghost icon actions onto IconButton
- [#194399](https://github.com/openclaw/openclaw/pull/194399) fix(media): cancel interrupted attachment downloads
- [#194401](https://github.com/openclaw/openclaw/pull/194401) improve(ci): reuse native import graph resolutions
- [#194374](https://github.com/openclaw/openclaw/pull/194374) fix(ui): open the mobile Where picker above when space below is short
- [#194382](https://github.com/openclaw/openclaw/pull/194382) improve: reduce Android build GC overhead
- [#194400](https://github.com/openclaw/openclaw/pull/194400) improve(ci): limit update fixture checks to their inputs
- [#194390](https://github.com/openclaw/openclaw/pull/194390) refactor(test): share plugin reload product child fixture
- [#193217](https://github.com/openclaw/openclaw/pull/193217) fix(control-ui): avoid warm chat reload backtracking
- [#194391](https://github.com/openclaw/openclaw/pull/194391) fix(infer): cancel interrupted image descriptions
- [#194392](https://github.com/openclaw/openclaw/pull/194392) improve(ci): avoid SDK fixture setup in boundary tests
- [#194389](https://github.com/openclaw/openclaw/pull/194389) improve(ci): cut repeated Git setup in wrapper tests
- [#194385](https://github.com/openclaw/openclaw/pull/194385) improve(ci): reuse compiler lookups across worker guards
- [#194380](https://github.com/openclaw/openclaw/pull/194380) improve(ci): scope provisioning tests to copied inputs
- [#194369](https://github.com/openclaw/openclaw/pull/194369) chore(release): prepare 2026.9.37 extended-stable
- [#194379](https://github.com/openclaw/openclaw/pull/194379) fix(release): authorize scoped 2026.11.2 Kova waiver
- [#194373](https://github.com/openclaw/openclaw/pull/194373) refactor(test): reuse deferred identity lookup gates
- [#194372](https://github.com/openclaw/openclaw/pull/194372) improve(ci): skip unnecessary boundary-test parsing
- [#194329](https://github.com/openclaw/openclaw/pull/194329) improve(ci): defer accelerated checkout startup on native Git
- [#192979](https://github.com/openclaw/openclaw/pull/192979) fix(deepinfra): honor thinking off for Nemotron 3.5 Super VL
- [#194364](https://github.com/openclaw/openclaw/pull/194364) fix(release): align attribution gate with human credit policy
- [#194347](https://github.com/openclaw/openclaw/pull/194347) refactor(gateway): reuse HTTP disconnect test deferreds
- [#194325](https://github.com/openclaw/openclaw/pull/194325) fix(update): update still copies a drained database just to read its generation
- [#192839](https://github.com/openclaw/openclaw/pull/192839) fix(sessions): classify storage worker OOM failures
- [#194349](https://github.com/openclaw/openclaw/pull/194349) docs: consolidate release and session skill guidance
- [#194312](https://github.com/openclaw/openclaw/pull/194312) fix(ui): hide snoozed pinned sessions until wake
- [#194341](https://github.com/openclaw/openclaw/pull/194341) fix: honor trusted admin authority for eligible Access programs
- [#194332](https://github.com/openclaw/openclaw/pull/194332) fix(ui): long answers hide prompts from input recall
- [#193450](https://github.com/openclaw/openclaw/pull/193450) fix(ios): show accurate errors when workspace files cannot be read
- [#194351](https://github.com/openclaw/openclaw/pull/194351) improve: avoid dependency scans during Android release cache setup
- [#194333](https://github.com/openclaw/openclaw/pull/194333) perf(ui): open Terminal without loading Chat
- [#194339](https://github.com/openclaw/openclaw/pull/194339) improve: reuse Gradle inputs in Android releases
- [#194344](https://github.com/openclaw/openclaw/pull/194344) chore(ui): refresh control ui locales
- [#194326](https://github.com/openclaw/openclaw/pull/194326) refactor(ui): reuse composer test draft state
- [#192352](https://github.com/openclaw/openclaw/pull/192352) feat(openclaw-id): add the Control UI account menu, linking dialogs and the Access page
- [#194289](https://github.com/openclaw/openclaw/pull/194289) fix(update): stop chat /update asking owners to retry a running update
- [#166488](https://github.com/openclaw/openclaw/pull/166488) fix(process): keep commands available with retained MCP servers
- [#194298](https://github.com/openclaw/openclaw/pull/194298) improve(ios): run simulator tests with pnpm ios:test
- [#194310](https://github.com/openclaw/openclaw/pull/194310) fix(cli): preserve repeated spaces in workspace summaries
- [#194314](https://github.com/openclaw/openclaw/pull/194314) improve(ci): avoid unused credential guard symbol lookups
- [#194267](https://github.com/openclaw/openclaw/pull/194267) fix(update): update and Doctor still copy the state database for most reads
- [#194311](https://github.com/openclaw/openclaw/pull/194311) fix(ci): reuse prepared SDK for tail extension lint
- [#194263](https://github.com/openclaw/openclaw/pull/194263) perf(control-ui): render cached Subagents without awaiting live activity
- [#194283](https://github.com/openclaw/openclaw/pull/194283) fix(research): restore the native pane browser client
- [#194181](https://github.com/openclaw/openclaw/pull/194181) fix(config): preserve malformed UTF-8 sources before writing
- [#194265](https://github.com/openclaw/openclaw/pull/194265) test(ui): measure repeated provider artwork loads
- [#194239](https://github.com/openclaw/openclaw/pull/194239) fix(backup): backups and updates fail on slow storage when a header probe batch misses its deadline
- [#194297](https://github.com/openclaw/openclaw/pull/194297) docs(ui): capture rendering and measurement lessons
- [#194287](https://github.com/openclaw/openclaw/pull/194287) chore: remove expired LanceDB admission exceptions
- [#194290](https://github.com/openclaw/openclaw/pull/194290) fix(ci): price measured tooling subsets on Blacksmith
- [#194286](https://github.com/openclaw/openclaw/pull/194286) improve: overlap Android release notes with bundle builds
- [#194200](https://github.com/openclaw/openclaw/pull/194200) perf(ui): keep split and fork responsive during transcript mount
- [#194231](https://github.com/openclaw/openclaw/pull/194231) improve(ci): defer unused assertion scope analysis
- [#194284](https://github.com/openclaw/openclaw/pull/194284) fix(ui): align browser reload idle busy assertions
- [#194278](https://github.com/openclaw/openclaw/pull/194278) fix(ci): avoid full lint for test budget updates
- [#194266](https://github.com/openclaw/openclaw/pull/194266) fix: no-op edits appear as modified files in compaction summaries
- [#194277](https://github.com/openclaw/openclaw/pull/194277) fix(ui): update agent menu title selector in layout test
- [#194272](https://github.com/openclaw/openclaw/pull/194272) fix(ci): keep compiler selection with docs and test budgets
- [#194151](https://github.com/openclaw/openclaw/pull/194151) ui: move chat header and panel rail actions onto IconButton
- [#194141](https://github.com/openclaw/openclaw/pull/194141) ui: move Sessions and Automations row actions onto IconButton
- [#194271](https://github.com/openclaw/openclaw/pull/194271) fix(ci): preserve Android CodeQL memory headroom
- [#193472](https://github.com/openclaw/openclaw/pull/193472) fix(ui): make Goal shorthand composer reversible
- [#194251](https://github.com/openclaw/openclaw/pull/194251) fix(infer): cancel interrupted video description requests
- [#194258](https://github.com/openclaw/openclaw/pull/194258) fix(ui): wait for quota metrics in account identity e2e
- [#194124](https://github.com/openclaw/openclaw/pull/194124) feat(ui): shared InlineAlert for inline errors, warnings and notes
- [#177232](https://github.com/openclaw/openclaw/pull/177232) feat(research): add native session research pane
- [#194140](https://github.com/openclaw/openclaw/pull/194140) ui: shared IconButton for composer, refresh and Sessions toolbar
- [#194192](https://github.com/openclaw/openclaw/pull/194192) perf(ci): share SDK declarations with selected lint
- [#194255](https://github.com/openclaw/openclaw/pull/194255) fix(ci): keep valid timings when sibling jobs fail
- [#194132](https://github.com/openclaw/openclaw/pull/194132) refactor(ui): share one menu and popover section heading
- [#194221](https://github.com/openclaw/openclaw/pull/194221) improve: reuse prepared provider descriptors for live model reads
- [#194179](https://github.com/openclaw/openclaw/pull/194179) fix: do not block local work on publication readiness
- [#194127](https://github.com/openclaw/openclaw/pull/194127) ui: share one accent checkbox across the Control UI
- [#194237](https://github.com/openclaw/openclaw/pull/194237) fix(ci): restore measured Blacksmith runner allocations
- [#194241](https://github.com/openclaw/openclaw/pull/194241) improve(ui): stop loading unused CJK tables during boot
- [#192505](https://github.com/openclaw/openclaw/pull/192505) refactor(update): share handoff outcome policy
- [#194153](https://github.com/openclaw/openclaw/pull/194153) fix(ui): one scrollbar behaviour for every scroll container
- [#194215](https://github.com/openclaw/openclaw/pull/194215) chore: main checks fail on stale copy, unused exports and runtime plan fixtures
- [#194246](https://github.com/openclaw/openclaw/pull/194246) fix(ci): stop overbudgeting fast Bun planner tests
- [#194070](https://github.com/openclaw/openclaw/pull/194070) perf(ui): prepare saved locale and preload compact Chat catalogs
- [#193775](https://github.com/openclaw/openclaw/pull/193775) fix(agents): run non-OpenAI turns as Standard when Daybreak is saved
- [#194244](https://github.com/openclaw/openclaw/pull/194244) chore(ui): refresh control ui locales
- [#194229](https://github.com/openclaw/openclaw/pull/194229) fix(doctor): finished Doctor and update repair hang on a leaked handle
- [#194171](https://github.com/openclaw/openclaw/pull/194171) perf(ui): avoid unchanged sidebar projections on session switches
- [#194211](https://github.com/openclaw/openclaw/pull/194211) fix(test): observe registry contention and reuse CLI mocks
- [#194203](https://github.com/openclaw/openclaw/pull/194203) perf(ui): restore Chat byte budgets with browser-floor cleanup
- [#194232](https://github.com/openclaw/openclaw/pull/194232) fix(browser): preserve command outcomes on interruption
- [#193913](https://github.com/openclaw/openclaw/pull/193913) perf(control-ui): retain cached child activity in Details
- [#194207](https://github.com/openclaw/openclaw/pull/194207) improve(ci): avoid repeated Darwin tooling startup
- [#177231](https://github.com/openclaw/openclaw/pull/177231) feat(research): retain authorized browser research state
- [#194210](https://github.com/openclaw/openclaw/pull/194210) fix(ci): report nested runner cgroup memory peaks
- [#194225](https://github.com/openclaw/openclaw/pull/194225) docs: name the escape when 2026.9.7 and 2026.9.8 updates refuse at package-swap

#### 🐛 New Issues
- [#193962](https://github.com/openclaw/openclaw/issues/193962) [Bug]: Fix for the SQLite header-probe timeout (#187197) can't be reached from 2026.10.10: package-update runs the installed updater's 10 s probe `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬7
- [#193929](https://github.com/openclaw/openclaw/issues/193929) [Bug]: Control UI spinners on main keep WebKit's GPU process busy every frame (regression from #189847) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬7
- [#194114](https://github.com/openclaw/openclaw/issues/194114) [Bug]: Gateway-controlled GPT-Live Talk call ends seconds after the first delegation completes (client-owned is fine) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬4
- [#194222](https://github.com/openclaw/openclaw/issues/194222) Update failure: package-update (2026.10.10) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬4
- [#194330](https://github.com/openclaw/openclaw/issues/194330) [Bug]: Android partial model catalog refresh warning lacks failing-provider diagnostics `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#194078](https://github.com/openclaw/openclaw/issues/194078) [Bug]: MCP stdio ownership anchor does not terminate decisively when the owning host disappears `bug` `bug:crash` `P2` `clawsweeper:source-repro` 💬3
- [#194191](https://github.com/openclaw/openclaw/issues/194191) [Bug]: openclaw update fails on Git < 2.45: preflight-local-history passes --no-lazy-fetch without checking support `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬3
- [#194143](https://github.com/openclaw/openclaw/issues/194143) Updater: false global-install-permission-denied on macOS 26.3 (Darwin 25.3) — npm staging succeeds, all fs probes pass `P2` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` `maturity:stable` 💬3
- [#194366](https://github.com/openclaw/openclaw/issues/194366) MCP relay Control UI stays on connection skeleton in ChatGPT in-app browser; same grant works in Brave `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬2
- [#194334](https://github.com/openclaw/openclaw/issues/194334) [Bug]: MCP stdio runtimes become permanently un-evictable when their backing run context never clears, regardless of mcp.sessionIdleTtlMs `bug` `regression` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#194320](https://github.com/openclaw/openclaw/issues/194320) Android app: chat composer ignores Gboard sentence auto-capitalization `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬2
- [#194304](https://github.com/openclaw/openclaw/issues/194304) Chat composer does not auto-capitalize sentence starts on mobile keyboards `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🦪 silver shellfish` 💬2
- [#194261](https://github.com/openclaw/openclaw/issues/194261) [Bug]: cron posts "did not start" notices for expected active-hours/busy skips, and heartbeat sessions repeat them back into Slack, growing each run (2026.11.5-beta.1) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#194292](https://github.com/openclaw/openclaw/issues/194292) Update failure: update-recovery-pending (2026.10.10) `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#194291](https://github.com/openclaw/openclaw/issues/194291) Update failure: update-recovery-pending (2026.10.10) `clawsweeper:needs-live-repro` `P0` `issue-rating: 🐚 platinum hermit` `impact:ux-release-blocker` 💬2
- [#194164](https://github.com/openclaw/openclaw/issues/194164) Memory indexing does not start after Gateway boot; only an agent memory_search creates the indexing manager (2026.10.10) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬2
- [#194285](https://github.com/openclaw/openclaw/issues/194285) [Bug]: 2026.11.1 Control UI session list takes 4–10 s (sessions.list materializes all rows incl. archived, limit 10000) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬2
- [#194236](https://github.com/openclaw/openclaw/issues/194236) browser create-profile allocates a CDP port already in use by another gateway on the same host `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#194182](https://github.com/openclaw/openclaw/issues/194182) [Bug]: iMessage media to an explicit chat_id target fails with AppleScript -1728 (send-attachment has no stale-chat recovery) and is recorded as unknown_after_send `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#194208](https://github.com/openclaw/openclaw/issues/194208) backup sqlite create: in-place VACUUM writes a DB-sized temp file to TMPDIR; over a tmpfs quota it fails as 'disk I/O error' `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#193978](https://github.com/openclaw/openclaw/issues/193978) Update failure: update (2026.11.1) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬2
- [#194202](https://github.com/openclaw/openclaw/issues/194202) Update failure: invalid-config (2026.11.1) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#193964](https://github.com/openclaw/openclaw/issues/193964) [Bug]: Update to 2026.11.5-beta.1 breaks all sandboxed turns: default image moved to openclaw-sandbox:trixie-slim, nothing builds or checks it `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#194062](https://github.com/openclaw/openclaw/issues/194062) [macOS] App Crashes on macOS 15.8.2 (x86_64) - Missing _LocationEssentials.framework `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:not-repro-on-main` 💬2
- [#194163](https://github.com/openclaw/openclaw/issues/194163) [Bug]: iOS chat sends seed thinking "off" before live history loads; Opus 5.5 turns rejected `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#194157](https://github.com/openclaw/openclaw/issues/194157) 2026.10.6: Codex harness re-imports plugin module graph from plugin-captures on every new Codex thread (~50 MB retained main-heap per new session/isolated cron run) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#194082](https://github.com/openclaw/openclaw/issues/194082) [Bug]: macOS gateway stop refuses when successful launchctl output omits coalition despite valid native membership `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#193997](https://github.com/openclaw/openclaw/issues/193997) [Bug]: ranged session-backfill replays an ingested message after successful apply `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬2
- [#194038](https://github.com/openclaw/openclaw/issues/194038) Update failure: runtime-artifact-publication (2026.10.10) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#193928](https://github.com/openclaw/openclaw/issues/193928) chunkText/chunkTextRanges: NaN chunk limit silently drops the whole outbound message `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#194418](https://github.com/openclaw/openclaw/issues/194418) [Bug]: `openclaw agent` prints only "⚠️ Bash failed" when the run failed on a provider usage limit; the limit message is dropped `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#194413](https://github.com/openclaw/openclaw/issues/194413) First Codex chat after a gateway restart waits for the native model catalog `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#194414](https://github.com/openclaw/openclaw/issues/194414) [Docs Bug]: Workboard CLI page says to restart the Gateway after `plugins enable workboard`; the plugin pages say enablement applies to a running Gateway `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#194408](https://github.com/openclaw/openclaw/issues/194408) [Feature]: Compaction: make MAX_COMPACTION_SUMMARY_CHARS (16,000) configurable; two-thirds of production compactions hit it `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` 💬1
- [#194406](https://github.com/openclaw/openclaw/issues/194406) [Bug]: A local media path whose directory doesn't exist is reported as "not under an allowed directory" `bug` `no-stale` `bug:behavior` `P2` 💬1
- [#194404](https://github.com/openclaw/openclaw/issues/194404) [Bug]: Plugin resolveSyntheticAuth skipped when an agent has no saved auth profiles (allowAuthProfileFallback:false also disables plugin synthetic auth) `P2` `clawsweeper:needs-live-repro` `impact:auth-provider` `issue-rating: 🐚 platinum hermit` 💬1
- [#194403](https://github.com/openclaw/openclaw/issues/194403) [Bug]: Helper-completion continuations invalidate their own authority and leave conversations blocked `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#194402](https://github.com/openclaw/openclaw/issues/194402) Tool-call policy ctx: forward the existing `toolOwnerPluginId` and `workspaceDir` to plugin policies and hooks `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#194394](https://github.com/openclaw/openclaw/issues/194394) [Feature]: Document Wally as a custom OpenAI-compatible provider `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#194383](https://github.com/openclaw/openclaw/issues/194383) [Docs Bug]: Plugin reload recovery is described too narrowly `bug` `docs` `no-stale` `P3` 💬1
- [#194370](https://github.com/openclaw/openclaw/issues/194370) [Bug]: cron maintenance fails every minute with "Agent database preparation has ended" until restart `P2` `impact:session-state` 💬1
- [#194358](https://github.com/openclaw/openclaw/issues/194358) Doctor refuses beta.6 agent databases that contain OpenClaw's own memory FTS tables `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#194348](https://github.com/openclaw/openclaw/issues/194348) Consolidate reusable release and session guidance into repository skills `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#194327](https://github.com/openclaw/openclaw/issues/194327) Control UI: long assistant activity hides the latest prompt from input recall `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#194345](https://github.com/openclaw/openclaw/issues/194345) 2026.11.5-beta.1: own sqlite-maintenance heartbeat refuses admission when /proc/self/ns/pid is absent `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#194337](https://github.com/openclaw/openclaw/issues/194337) [Bug]: Windows command lookup fails beneath a working directory containing a semicolon `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#194335](https://github.com/openclaw/openclaw/issues/194335) Update failure: package-swap (2026.9.9) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#194324](https://github.com/openclaw/openclaw/issues/194324) [Bug]: Android - Talk stops as soon as the app is backgrounded or the phone is locked. `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#194322](https://github.com/openclaw/openclaw/issues/194322) iOS sidebar rows jump when sessions arrive above the viewport `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#194309](https://github.com/openclaw/openclaw/issues/194309) [Bug]: zalouser marks every inbound message as seen (before policy check, no opt-out) — personal Zalo loses unread/notifications `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#194306](https://github.com/openclaw/openclaw/issues/194306) [Bug]: Basic auth rejects protected sentinel for a pre-encoded full credential payload (2026.10.10) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#194303](https://github.com/openclaw/openclaw/issues/194303) [Bug]: `/stop` mirrors its command exchange after the next turn's persisted user message, so that turn fails replay admission and the message is never answered `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#194302](https://github.com/openclaw/openclaw/issues/194302) [Bug]: `agents.defaults.timeoutSeconds` does not bound a channel turn: each same-model retry starts a fresh budget (5 h setting, 9 h 11 min turn) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#194300](https://github.com/openclaw/openclaw/issues/194300) [Feature]: Configurable model, thinking level, and token budget for background Skill Workshop reviews `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#194299](https://github.com/openclaw/openclaw/issues/194299) Replies sent from a plugin's reply_dispatch hook fail on Matrix: "Matrix runtime not initialized" `P2` `impact:message-loss` 💬1
- [#194296](https://github.com/openclaw/openclaw/issues/194296) plaintext auth profile key remains in state/openclaw.sqlite after `secrets apply` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#194281](https://github.com/openclaw/openclaw/issues/194281) iOS small upward scroll can resume following a reply `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#194264](https://github.com/openclaw/openclaw/issues/194264) Compaction can report unchanged edit and write targets as modified `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#194274](https://github.com/openclaw/openclaw/issues/194274) [Bug]: Telegram health-monitor account restart leaves no session-binding adapter; every reply fails with "Session binding owner changed for telegram:default" until the Gateway restarts `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#194247](https://github.com/openclaw/openclaw/issues/194247) [Feature]: Reduce PWA new-message catch-up with best-effort push-assisted cache refresh `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#194273](https://github.com/openclaw/openclaw/issues/194273) Update failure: update (2026.11.1) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#194269](https://github.com/openclaw/openclaw/issues/194269) [Bug]: Gateway restart wakes a full heartbeat run, posting extra heartbeat messages with no wake-source record `P2` `impact:ux-friction` 💬1
- [#194268](https://github.com/openclaw/openclaw/issues/194268) [Bug]: Codex gateway_exec naming obscures canonical exec permission when authoring automations `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#194260](https://github.com/openclaw/openclaw/issues/194260) [Bug]: Usage page shows "unknown" totals and hides all analytics when one response ends before final usage arrives (v2026.11.1) `P2` `impact:ux-friction` 💬1
- [#194259](https://github.com/openclaw/openclaw/issues/194259) [Feature]: WhatsApp login by phone pairing code — refiling #85867 with a 2026.9.3 reproduction `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` `impact:auth-provider` 💬1
- [#194252](https://github.com/openclaw/openclaw/issues/194252) [Bug]: sessions.abort cascades into terminal "keep" subagent runs that never age out and cannot be retired `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#194253](https://github.com/openclaw/openclaw/issues/194253) [Bug]: iOS queued chat messages are not sent during background refresh or silent push wakes `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#194248](https://github.com/openclaw/openclaw/issues/194248) [Bug]: Auto-TTS still skipped for queued follow-up replies in 2026.10.8 / 2026.11.1 (fix from #181592 not in published dist?) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#194240](https://github.com/openclaw/openclaw/issues/194240) Model catalog generation apply drops provider-discovered rows until a forced refresh (startup + 6h catalogRefresh) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#194206](https://github.com/openclaw/openclaw/issues/194206) Test maintenance: observe registry refresh lease contention `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#194226](https://github.com/openclaw/openclaw/issues/194226) [Docs]: Ollama compatible-mode guide overstates num_ctx enforcement `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#194223](https://github.com/openclaw/openclaw/issues/194223) [Bug]: Apple chat repeats its catalog refreshes on every reconnect while the transcript is still loading `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#194219](https://github.com/openclaw/openclaw/issues/194219) [Bug]: Apple apps stay "connected" to a dead Gateway socket for up to two minutes because keepalive ping failures are ignored `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#194213](https://github.com/openclaw/openclaw/issues/194213) [Bug]: Apple chat send with a large attachment fails after 30 s on a slow uplink while the upload is still running `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#194209](https://github.com/openclaw/openclaw/issues/194209) backup sqlite create / git create: engine probe byte-copies the whole live DB and fails 'did not stabilize' on busy WAL databases `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#194186](https://github.com/openclaw/openclaw/issues/194186) [Feature]: Asterisk provider for the Voice Call plugin (revive #130992 with real-PBX proof) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#194183](https://github.com/openclaw/openclaw/issues/194183) Talk consults reject unsupported machine-selected thinking levels `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#194178](https://github.com/openclaw/openclaw/issues/194178) [Feature]: Native macOS notifications when ordinary chat turns finish `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#194149](https://github.com/openclaw/openclaw/issues/194149) Discord command deployment aborts when an obsolete application command has already been deleted `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#194170](https://github.com/openclaw/openclaw/issues/194170) [Bug]: Windows plugin captures duplicate ~380,000 host-package files per Gateway restart `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#194168](https://github.com/openclaw/openclaw/issues/194168) [Bug]: Discord progress draft renders two identical rows per tool call with verbose toolProgress `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#194155](https://github.com/openclaw/openclaw/issues/194155) [Bug]: scheduled heartbeats skipped `requests-in-flight` for 2 h by an active-run entry no persisted state shows; the skip names no blocker and the heartbeat gate never expires it (2026.10.10) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#194156](https://github.com/openclaw/openclaw/issues/194156) [Bug]:requesterSettleWake stuck in dispatching has no recovery path; orphaned run rows block task wait/cancel indefinitely `bug` `bug:behavior` `P2` `impact:session-state` 💬1
- [#194134](https://github.com/openclaw/openclaw/issues/194134) [Bug]: iOS app UI completely unresponsive when saved Gateway is unreachable; force-quit doesn't recover, can't reach Gateway settings `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#194109](https://github.com/openclaw/openclaw/issues/194109) [Feature]: Android Threads: sort recent activity globally instead of within groups `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#194108](https://github.com/openclaw/openclaw/issues/194108) [Feature]: Android: rename chats and copy session references from chat list and open chat `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#194092](https://github.com/openclaw/openclaw/issues/194092) Google Meet calendar lookup omits events after the first results page `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#194104](https://github.com/openclaw/openclaw/issues/194104) Update failure: package-update (2026.10.10) `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#194101](https://github.com/openclaw/openclaw/issues/194101) Mattermost: linked owner gets no owner authority on 2026.11.1, backport of #188029 is partial `P2` `clawsweeper:source-repro` `impact:security` `issue-rating: 🦞 diamond lobster` 💬1
- [#194096](https://github.com/openclaw/openclaw/issues/194096) [Bug] npm update to 2026.11.1 fails in validating: sqlite header probe spawnSync ETIMEDOUT (56k-path batch vs hardcoded 10s timeout) `P2` `maturity:stable` `impact:ux-friction` 💬1
- [#194093](https://github.com/openclaw/openclaw/issues/194093) [Bug]: AWS resource ARNs are truncated as Telegram tokens in diagnostic output `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#194091](https://github.com/openclaw/openclaw/issues/194091) xAI: opt-in x-grok-conv-id sticky routing — ~1/3 of Grok prompt-cache drops are provider-side cold-server misses `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#194067](https://github.com/openclaw/openclaw/issues/194067) [Bug]: `plugins enable` hides actionable gateway errors (e.g. "blocked by allowlist") unless OPENCLAW_DEBUG=1 `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#194073](https://github.com/openclaw/openclaw/issues/194073) [Bug]: Codex 0.164.0 policy refresh fails when retained ownership is missing (follow-up #153003) `P2` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬1
- [#194054](https://github.com/openclaw/openclaw/issues/194054) Gateway diagnostics export prints path control characters into the human report `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#194046](https://github.com/openclaw/openclaw/issues/194046) Unchanged channel policy invalidates active HTTP tool requests on config reload `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#194035](https://github.com/openclaw/openclaw/issues/194035) Update failure: package-update (2026.10.10) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#194032](https://github.com/openclaw/openclaw/issues/194032) [Bug]: Cron scheduler never recovers after its worker lease closes ("Shared-state worker lease is closed") `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#194029](https://github.com/openclaw/openclaw/issues/194029) [Bug]: Signal exec approval responses queue behind the turn waiting for approval `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#194024](https://github.com/openclaw/openclaw/issues/194024) [Bug]: Completed sessions_spawn children stay pending: subagent_settle reports existing Telegram parent session not found `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#194016](https://github.com/openclaw/openclaw/issues/194016) Update failure: package-update (2026.10.10) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#194013](https://github.com/openclaw/openclaw/issues/194013) [Feature]: List the session group catalog from the CLI (sessions groups) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#194011](https://github.com/openclaw/openclaw/issues/194011) Update failure: gateway-stop-unverified (2026.10.9) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#193989](https://github.com/openclaw/openclaw/issues/193989) [Bug]: Discord: message-tool send from a thread turn posts to the parent channel when threadId is omitted (default current-source resolves to parent) `P2` `impact:message-loss` 💬1
- [#193979](https://github.com/openclaw/openclaw/issues/193979) [Bug]: MCP Relay fails to validate ChatGPT client metadata `bug` `bug:behavior` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#193958](https://github.com/openclaw/openclaw/issues/193958) [Bug]: Reminder guard appends "I did not schedule a reminder" even after a successful `automations` add (claude-cli / MCP tool path) `bug` `no-stale` `regression` `P2` 💬1
- [#193927](https://github.com/openclaw/openclaw/issues/193927) Control UI: arrow navigation replaces a recalled multiline prompt `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#193947](https://github.com/openclaw/openclaw/issues/193947) Bug: Telegram media callback card disappears when replacement delivery fails `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#193925](https://github.com/openclaw/openclaw/issues/193925) claws remove: 'State lease worker transaction outcome is unknown', Status partial, records not removed (2026.11.1) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#193914](https://github.com/openclaw/openclaw/issues/193914) [Feature]: Default contextTokens cap (128k) and Control UI slider for metered API providers `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#194319](https://github.com/openclaw/openclaw/issues/194319) test
- [#194249](https://github.com/openclaw/openclaw/issues/194249) [Bug]: Control UI hides video compression errors and mislabels preparation progress

#### 🔒 Closed Issues
- [#164923](https://github.com/openclaw/openclaw/issues/164923) [Investigating] Short-term promotion: one workspace promotes 0/512 while sibling workspaces promote 50-90% (raw conversation-turn snippets structurally rejected)
- [#166017](https://github.com/openclaw/openclaw/issues/166017) `mcp.sessionIdleTtlMs` default (10 min) is not applied when the key is unset: session MCP runtimes are never evicted, the spawn broker fills up to its hard cap of 256 children and every exec/read/MCP start then fails
- [#178291](https://github.com/openclaw/openclaw/issues/178291) [Bug]: 2026.10.4→10.5 chat update fails post-activation Doctor on offline-maintenance authority
- [#155457](https://github.com/openclaw/openclaw/issues/155457) Agent tool calls to Anthropic intermittently fail with malformed streamed JSON arguments on large edits
- [#153706](https://github.com/openclaw/openclaw/issues/153706) [Bug]: closed ACP sessions project agentRuntime as {id:"codex", source:"implicit"}, asserting a native runtime they never use
- [#165433](https://github.com/openclaw/openclaw/issues/165433) [Bug]: chat.send rejects reconnect envelopes with unexpected property '__controlUiReconnectResume' when client is not an Operator UI client
- [#164690](https://github.com/openclaw/openclaw/issues/164690) [Bug] claude-cli runs spawn every stdio MCP server twice (Gateway policy runtime + CLI mcp.json); relay+anchor wrapper costs ~144 MB per stdio child, not configurable
- [#167316](https://github.com/openclaw/openclaw/issues/167316) [Bug]: Android repeatedly queries chat.history for unknown agent "openclaw", including after restart
- [#139909](https://github.com/openclaw/openclaw/issues/139909) [Bug]: Phone composer narrows to ~5-6 chars per line; long drafts unreadable while typing
- [#153003](https://github.com/openclaw/openclaw/issues/153003) [Bug]: Codex configuration refresh skips unsubscribe when retained owner is missing
- [#167256](https://github.com/openclaw/openclaw/issues/167256) Slack: allow user preferences to override native chart formatting
- [#126631](https://github.com/openclaw/openclaw/issues/126631) [Bug]: Sandbox skills bind-mount creates root-owned /workspace/.openclaw, locking out the sandbox user (uid 1000)
- [#126012](https://github.com/openclaw/openclaw/issues/126012) Feature: pre-turn context gate — forced /compact at configurable threshold before model submission
- [#158156](https://github.com/openclaw/openclaw/issues/158156) Chat: assistant response occasionally rendered/duplicated twice in full, verbatim, within a single turn
- [#156548](https://github.com/openclaw/openclaw/issues/156548) [Bug]: Plugin toolContext.delivery.send media does not appear in Control UI
- [#154482](https://github.com/openclaw/openclaw/issues/154482) [Feature]: a supported lifecycle for a permanent MAIN session's history (export/trim by range or rollover) — continuity-focused deployments have no way to bound transcript_events
- [#153686](https://github.com/openclaw/openclaw/issues/153686) [Feature]: Preserve named session groups under each agent in team mode
- [#153604](https://github.com/openclaw/openclaw/issues/153604) Plugin runtime: `config.loadConfig` removal breaks third-party plugins (wecom-openclaw-plugin) — no shim or load-time detection
- [#167498](https://github.com/openclaw/openclaw/issues/167498) [Feature]: retention configuration for historical transcript archives; make post-archival compaction discoverable/automatic
- [#167497](https://github.com/openclaw/openclaw/issues/167497) [Bug]: wedged ingress stays green on both /healthz (liveness by contract) and /readyz (stale-socket/grace categories)
- [#166692](https://github.com/openclaw/openclaw/issues/166692) Feature request: attach cost to model.call.completed/model.call.error, same as model.usage already does
- [#166603](https://github.com/openclaw/openclaw/issues/166603) `tts.provider` silently ignored during plugin-inventory rebuilds — pinned local TTS provider falls through to the next provider by autoSelectOrder
- [#165270](https://github.com/openclaw/openclaw/issues/165270) [Bug]: xAI OAuth refresh exceeds 120000 ms hard timeout although endpoints respond in ~100 ms; 1 ms expiry sentinel forces refresh on every use
- [#165135](https://github.com/openclaw/openclaw/issues/165135) [Bug]: Fallback OAuth timeout hides primary local-runtime failure in Discord error reply
- [#134982](https://github.com/openclaw/openclaw/issues/134982) Exec approval prompts lose their buttons on every channel without a typed-approval encoder
- [#125989](https://github.com/openclaw/openclaw/issues/125989) Control UI polls session catalogs while no catalog surface is visible
- [#162814](https://github.com/openclaw/openclaw/issues/162814) [Feature]: iOS app — search and filter on the Sessions screen and sidebar (text, agent, kind, channel)
- [#156038](https://github.com/openclaw/openclaw/issues/156038) [Bug]: before_model_resolve never runs for CLI-backed models (claude-cli)
- [#154739](https://github.com/openclaw/openclaw/issues/154739) 跨会话空封皮（运行时状态广播）以 sessions_send 消息形态投递各户会话，产生账面噪声与多户误报成本
- [#154510](https://github.com/openclaw/openclaw/issues/154510) [Bug]: models auth order clear leaves migrated shared override active and silently ignores config order
- [#167678](https://github.com/openclaw/openclaw/issues/167678) [Feature]: Codex harness: start a fresh native thread without the continuity projection (plugin or turn opt-out)
- [#167418](https://github.com/openclaw/openclaw/issues/167418) [Feature]: render assistant MEDIA: lines as attachments in the Android app
- [#167242](https://github.com/openclaw/openclaw/issues/167242) [Feature]: read retained automation transcripts with cron history
- [#167179](https://github.com/openclaw/openclaw/issues/167179) [Bug]: iOS app repeatedly loses gateway connection when using Tailscale
- [#167177](https://github.com/openclaw/openclaw/issues/167177) [Feature]: Make CLI live-session capacity configurable
- [#167176](https://github.com/openclaw/openclaw/issues/167176) Auth probe reports ok while database cleanup rejects a late resource registration
- [#167083](https://github.com/openclaw/openclaw/issues/167083) [Bug] Linux desktop (Tauri/WebKitGTK): chat scroll auto-jumps/bounces on hover — `overflow-anchor: none` missing on virtualized scroll container
- [#167053](https://github.com/openclaw/openclaw/issues/167053) [Feature]: Bounded native recovery for failed headless commands and safe recurrence pause
- [#166958](https://github.com/openclaw/openclaw/issues/166958) [Feature]: Expose assistant-message tool-call batches to plugins before execution
- [#166729](https://github.com/openclaw/openclaw/issues/166729) [Feature]: Configure custom decision-model providers in models.providers
- [#166712](https://github.com/openclaw/openclaw/issues/166712) [Bug]: model.usage cost/tokens appear to reflect only the final real call of a multi-call turn, not the whole turn
- [#166688](https://github.com/openclaw/openclaw/issues/166688) feat: identify unusable web_fetch pages with opt-in Decision assistance
- [#166686](https://github.com/openclaw/openclaw/issues/166686) feat(ui): per-agent accent color for pane headers, sidebar rows, and avatars
- [#166648](https://github.com/openclaw/openclaw/issues/166648) [Bug]: chat.send queueMode "steer" still starts a separate turn instead of injecting into the active webchat run on 2026.9.8 (same symptom as #164571)
- [#166628](https://github.com/openclaw/openclaw/issues/166628) [Feature]: Add a maintainer-approved path for proven main CI repairs
- [#166624](https://github.com/openclaw/openclaw/issues/166624) [Docs Bug]: Clarify related-work research before opening issues and PRs
- [#166596](https://github.com/openclaw/openclaw/issues/166596) Context engine silently degrades to legacy for the turn when the plugin-hosted engine instance is mid-retirement; failed drain replacements make the degradation persist across turns
- [#166574](https://github.com/openclaw/openclaw/issues/166574) [Feature]: Restore session-local structured planning for subagents without parent progress-card access
- [#166547](https://github.com/openclaw/openclaw/issues/166547) Feature: operator-controlled compatibility preflight for adapted installations
- [#166546](https://github.com/openclaw/openclaw/issues/166546) Feature: plugin-owned searchable WhatsApp group archive with media and retention
- [#166545](https://github.com/openclaw/openclaw/issues/166545) Feature: opt-in bounded follow-up listening windows for WhatsApp groups
- [#166473](https://github.com/openclaw/openclaw/issues/166473) `gateway.restart.safe` uses a 0 ms drain budget while model requests are in flight, so plugins are force-retired and the shutdown deadline is hit with `cleanup incomplete`
- [#166471](https://github.com/openclaw/openclaw/issues/166471) gateway restart loses pending exec `notifyOnExit` wakes and preflight-compaction wake turns
- [#165053](https://github.com/openclaw/openclaw/issues/165053) [Bug]: Verified test preparation cannot establish artifact separation for immutable Gateway launchers
- [#194222](https://github.com/openclaw/openclaw/issues/194222) Update failure: package-update (2026.10.10)
- [#193734](https://github.com/openclaw/openclaw/issues/193734) package-swap permanently refuses updates on user-owned npm-global install: 'Package publication recovery permissions are unsafe' (2026.9.8 first hop, 10+ attempts, post-repair re-fire included)
- [#129766](https://github.com/openclaw/openclaw/issues/129766) [Bug]: Model Providers merges native Claude CLI readiness with missing direct Anthropic auth
- [#156871](https://github.com/openclaw/openclaw/issues/156871) Configurable bounded pixel limit for inbound agent images
- [#155361](https://github.com/openclaw/openclaw/issues/155361) [Bug]: Native Codex parent loses child access after automatic completion changes tool catalog
- [#148659](https://github.com/openclaw/openclaw/issues/148659) [Bug]: macOS onboarding remains stuck after OpenRouter is configured and inference succeeds
- [#152511](https://github.com/openclaw/openclaw/issues/152511) [Bug]: Next keyed user message fails with "Session transcript anchor was not returned" for seconds after the agent replies into a captured conversation turn
- [#151859](https://github.com/openclaw/openclaw/issues/151859) ACP session cleanup fails every minute (undiagnosable) + programmatic stop reports error while the session is already stopped
- [#151789](https://github.com/openclaw/openclaw/issues/151789) Windows: deleting explicit sessions fails with ENOENT when sessionId contains colon
- [#151059](https://github.com/openclaw/openclaw/issues/151059) Workboard: list/show/promote hydrate the entire card universe (no SQL filtering) + no archive/prune for done cards
- [#166620](https://github.com/openclaw/openclaw/issues/166620) [Bug]: file-transfer policy reload blocked by five uninspectable retained work items
- [#167768](https://github.com/openclaw/openclaw/issues/167768) [Bug]: Local Responses reasoning replay changes after session reload
- [#167752](https://github.com/openclaw/openclaw/issues/167752) [Bug]: Gateway shutdown with running stream cron jobs always warns 'stream owner stops failed' — shutdown retirement hits the already-sealed cron receipt authority
- [#167747](https://github.com/openclaw/openclaw/issues/167747) Control UI omits alternate shared accounts from the existing-chat model picker
- [#167741](https://github.com/openclaw/openclaw/issues/167741) [Bug]: Unset preferences in the Config form look switched off when their default is on
- [#167716](https://github.com/openclaw/openclaw/issues/167716) [Bug]: Renaming or deleting a session group takes 12 seconds on a three-agent Gateway
- [#167582](https://github.com/openclaw/openclaw/issues/167582) [bug] Telegram channel: resolveInboundAttachmentRoots not implemented → workspace inbound media rejected by allowlist
- [#167293](https://github.com/openclaw/openclaw/issues/167293) [Bug]: /tools/invoke and tools.invoke return "Tool not available" for a session's discovered MCP tools
- [#166757](https://github.com/openclaw/openclaw/issues/166757) Control UI: support large chat attachments via configurable HTTP/streaming uploads
- [#166718](https://github.com/openclaw/openclaw/issues/166718) config patch --dry-run passes but the write is refused by the size-drop guard; no way to allow an intended shrink
- [#166504](https://github.com/openclaw/openclaw/issues/166504) [Bug]: Telegram non-abort commands can tombstone pending media and cancel an entire album before adoption
- [#166501](https://github.com/openclaw/openclaw/issues/166501) date-time.ts single-slot formatter caches miss on every call when two time zones alternate
- [#166328](https://github.com/openclaw/openclaw/issues/166328) workboard_list caps at 200 oldest-first with no offset/updatedAfter/label filter — newest cards are unreachable on larger boards
- [#194191](https://github.com/openclaw/openclaw/issues/194191) [Bug]: openclaw update fails on Git < 2.45: preflight-local-history passes --no-lazy-fetch without checking support
- [#159186](https://github.com/openclaw/openclaw/issues/159186) [Bug]: Transient `app/read` timeout during Codex plugin thread config build is treated as "app policy changed" and rotates the native thread (2026.9.5)
- [#194143](https://github.com/openclaw/openclaw/issues/194143) Updater: false global-install-permission-denied on macOS 26.3 (Darwin 25.3) — npm staging succeeds, all fs probes pass
- [#157639](https://github.com/openclaw/openclaw/issues/157639) [Bug]: Windows CP866 cmd output still mojibakes because console encoding map omits code page 866
- [#157547](https://github.com/openclaw/openclaw/issues/157547) [Bug]: CDP attachment redirects native browser downloads to a temporary directory
- [#157284](https://github.com/openclaw/openclaw/issues/157284) [Design] Chat-created agentTurn cron jobs default to sessionTarget:current — unpredictable across creation paths and fragile on long sessions
- [#157180](https://github.com/openclaw/openclaw/issues/157180) docs: sessions.others help says membership grants access, but "none" rejects members
- [#156597](https://github.com/openclaw/openclaw/issues/156597) [Bug]: requester-settle wake retry leaks default "Agent run failed" text into the user channel
- [#156589](https://github.com/openclaw/openclaw/issues/156589) [Bug]: runtime-postbuild skips unresolvable declared static extension assets, and build stamps then certify the incomplete dist
- [#156443](https://github.com/openclaw/openclaw/issues/156443) [Bug]: Windows Control UI plugin build fails intermittently with a misleading immutable-build error (transient EPERM on fresh rename)
- [#156135](https://github.com/openclaw/openclaw/issues/156135) Supported zero-tool persisted claude-cli agent route without loopback startup?
- [#156051](https://github.com/openclaw/openclaw/issues/156051) [Bug]: Control UI chat — own sent message bubble disappears before reading (optimistic bubble retired without canonical row attached)
- [#156031](https://github.com/openclaw/openclaw/issues/156031) [Bug]: Built-in shorthand 'sonnet' resolves to claude-sonnet-4-6 via vercel-ai-gateway but claude-sonnet-5 via anthropic; bare 'opus' still pins claude-opus-5 after Opus 5.5
- [#155806](https://github.com/openclaw/openclaw/issues/155806) [Bug]: WhatsApp's stored inbound events cannot be reached by channels dead-letters, because WhatsApp keys its ingress queue by a hash of the account id
- [#155797](https://github.com/openclaw/openclaw/issues/155797) dashboard/gateway readiness ignores gateway.mode=remote, reports healthy remote Gateway as "not running"
- [#155605](https://github.com/openclaw/openclaw/issues/155605) ### Summary
- [#155602](https://github.com/openclaw/openclaw/issues/155602) [Bug]: Side chat hardcodes American English instead of following the user’s language
- [#155440](https://github.com/openclaw/openclaw/issues/155440) fix: Codex sandbox tests fail after host capability context change
- [#154660](https://github.com/openclaw/openclaw/issues/154660) [Feature/Performance] Make Control UI Workboard loading archive-aware and payload-bounded
- [#154513](https://github.com/openclaw/openclaw/issues/154513) [Bug]: Empty quoted command arguments are dropped from Codex app-server argv
- [#154468](https://github.com/openclaw/openclaw/issues/154468) [Feature]: Let Discord voice use GA realtime models (e.g. `gpt-realtime-2`, voice `coral`) over ChatGPT OAuth, like browser Talk
- [#154271](https://github.com/openclaw/openclaw/issues/154271) Webchat: composer autosize forces per-keystroke layout that scales with draft size; a large per-session durable draft makes one session lag until site data is cleared
- [#153949](https://github.com/openclaw/openclaw/issues/153949) [Bug]: Codex tool-output screenshots are dropped before Control UI reply
- [#153712](https://github.com/openclaw/openclaw/issues/153712) [Bug]: Codex harness releases the turn on a plugin tool's terminate:true but never projects it into toolMetas, so core finalizes the released turn and delivers the fallback text
- [#153501](https://github.com/openclaw/openclaw/issues/153501) [Bug]: Corrupt restart-sentinel JSON columns read as null, recovery context lost
- [#153497](https://github.com/openclaw/openclaw/issues/153497) [Bug]: isStartupEntryInstalled treats access-denied as not-installed, duplicates Windows login items
- [#153494](https://github.com/openclaw/openclaw/issues/153494) [Bug]: Reply-dispatcher observer errors dropped at three sites (onIdle, onError x2)
- [#153491](https://github.com/openclaw/openclaw/issues/153491) [Bug]: Telegram something-went-wrong fallback send failure swallowed, zero user feedback
- [#153489](https://github.com/openclaw/openclaw/issues/153489) [Bug]: Codex credential readers return null for errors, indistinguishable from not logged in
- [#153485](https://github.com/openclaw/openclaw/issues/153485) [Bug]: !-command credential cache is process-lifetime including negatives, rotation never picked up
- [#153483](https://github.com/openclaw/openclaw/issues/153483) [Bug]: clearGatewayRestartIntentSync swallows failure, stale intent can trigger unwanted restart
- [#153482](https://github.com/openclaw/openclaw/issues/153482) [Bug]: Clobber-snapshot lock-release failures swallowed, safety snapshots stall 30s silently
- [#153318](https://github.com/openclaw/openclaw/issues/153318) [Bug]: memory-wiki Related blocks are emptied entirely when shared-source fanout exceeds MAX_SHARED_SOURCE_FANOUT (24) instead of truncating
- [#153203](https://github.com/openclaw/openclaw/issues/153203) Workboard archive accepts non-terminal cards and strands active work
- [#153192](https://github.com/openclaw/openclaw/issues/153192) [Bug]: iOS app reopens the main chat instead of the chat you were in after a relaunch
- [#153048](https://github.com/openclaw/openclaw/issues/153048) [Bug]: Skill Workshop `update` creates a second pending proposal instead of continuing the existing review stream
- [#153024](https://github.com/openclaw/openclaw/issues/153024) [Bug]: Google Live Talk ignores the caller's language hint and replies in whatever language an utterance was transcribed as
- [#148658](https://github.com/openclaw/openclaw/issues/148658) [Bug]: macOS realtime Talk cancels multi-sentence replies with playback-overflow
- [#152606](https://github.com/openclaw/openclaw/issues/152606) voice-call: interrupted persistence leaves unreachable chunks across restart
- [#152577](https://github.com/openclaw/openclaw/issues/152577) voice-call: pre-connect dtmfSequence is silently discarded on plivo and telnyx while initiate_call reports success
- [#152103](https://github.com/openclaw/openclaw/issues/152103) [Bug]: Feishu react and reactions fail with "Feishu reaction requires messageId." when messageId is omitted
- [#151746](https://github.com/openclaw/openclaw/issues/151746) `markdownDetails` capability is granted by channel name, so non-browser webchat clients get raw `<details>` tags
- [#151306](https://github.com/openclaw/openclaw/issues/151306) [Feature]: Per-account inbound debounce for multi-account channels (retired as redundant in #113174)
- [#194304](https://github.com/openclaw/openclaw/issues/194304) Chat composer does not auto-capitalize sentence starts on mobile keyboards
- [#194292](https://github.com/openclaw/openclaw/issues/194292) Update failure: update-recovery-pending (2026.10.10)
- [#193964](https://github.com/openclaw/openclaw/issues/193964) [Bug]: Update to 2026.11.5-beta.1 breaks all sandboxed turns: default image moved to openclaw-sandbox:trixie-slim, nothing builds or checks it
- [#193108](https://github.com/openclaw/openclaw/issues/193108) Git dev-channel update skips on release-tag clones with tag-only fetch mappings
- [#193485](https://github.com/openclaw/openclaw/issues/193485) [Bug]: iOS New session options clips controls at accessibility text sizes
- [#193772](https://github.com/openclaw/openclaw/issues/193772) [Bug]: Codex plugin install fails under sandbox that denies exec: platform check uses access(X_OK) and gets EPERM
- [#41042](https://github.com/openclaw/openclaw/issues/41042) [macOS node] screenRecording permission granted but `screen.record` missing from node commands
- [#194370](https://github.com/openclaw/openclaw/issues/194370) [Bug]: cron maintenance fails every minute with "Agent database preparation has ended" until restart
- [#192978](https://github.com/openclaw/openclaw/issues/192978) [Bug]: DeepInfra Nemotron 3.5 Super VL omits the explicit thinking-off selector
- [#194348](https://github.com/openclaw/openclaw/issues/194348) Consolidate reusable release and session guidance into repository skills
- [#194327](https://github.com/openclaw/openclaw/issues/194327) Control UI: long assistant activity hides the latest prompt from input recall
- [#193347](https://github.com/openclaw/openclaw/issues/193347) [Bug]: iOS Files suggests binary or oversized content for a missing file
- [#194299](https://github.com/openclaw/openclaw/issues/194299) Replies sent from a plugin's reply_dispatch hook fail on Matrix: "Matrix runtime not initialized"
- [#194264](https://github.com/openclaw/openclaw/issues/194264) Compaction can report unchanged edit and write targets as modified
- [#194269](https://github.com/openclaw/openclaw/issues/194269) [Bug]: Gateway restart wakes a full heartbeat run, posting extra heartbeat messages with no wake-source record
- [#127953](https://github.com/openclaw/openclaw/issues/127953) [Feature]: agy (antigravity cli) support for openclaw
- [#194260](https://github.com/openclaw/openclaw/issues/194260) [Bug]: Usage page shows "unknown" totals and hides all analytics when one response ends before final usage arrives (v2026.11.1)
- [#192500](https://github.com/openclaw/openclaw/issues/192500) refactor(update): consolidate handoff outcome classification
- [#194206](https://github.com/openclaw/openclaw/issues/194206) Test maintenance: observe registry refresh lease contention
- [#191507](https://github.com/openclaw/openclaw/issues/191507) [Bug]: Sign in with ChatGPT fails or stalls when port 8080 is in use
- [#191327](https://github.com/openclaw/openclaw/issues/191327) [Feature]: Use OpenClaw’s base prompt for Codex-engine threads
- [#145522](https://github.com/openclaw/openclaw/issues/145522) [Bug]: macOS Remote over SSH does not forward widget sandbox port; canvas widgets fail
- [#193027](https://github.com/openclaw/openclaw/issues/193027) Dashboard widgets show only “Disconnected” when the sandbox origin is unreachable
- [#194149](https://github.com/openclaw/openclaw/issues/194149) Discord command deployment aborts when an obsolete application command has already been deleted
- [#194156](https://github.com/openclaw/openclaw/issues/194156) [Bug]:requesterSettleWake stuck in dispatching has no recovery path; orphaned run rows block task wait/cancel indefinitely
- [#194134](https://github.com/openclaw/openclaw/issues/194134) [Bug]: iOS app UI completely unresponsive when saved Gateway is unreachable; force-quit doesn't recover, can't reach Gateway settings
- [#194092](https://github.com/openclaw/openclaw/issues/194092) Google Meet calendar lookup omits events after the first results page
- [#194096](https://github.com/openclaw/openclaw/issues/194096) [Bug] npm update to 2026.11.1 fails in validating: sqlite header probe spawnSync ETIMEDOUT (56k-path batch vs hardcoded 10s timeout)
- [#194067](https://github.com/openclaw/openclaw/issues/194067) [Bug]: `plugins enable` hides actionable gateway errors (e.g. "blocked by allowlist") unless OPENCLAW_DEBUG=1
- [#176336](https://github.com/openclaw/openclaw/issues/176336) OpenRouter generation providers ignore request.allowPrivateNetwork (hardcoded false)
- [#193989](https://github.com/openclaw/openclaw/issues/193989) [Bug]: Discord: message-tool send from a thread turn posts to the parent channel when threadId is omitted (default current-source resolves to parent)
- [#193927](https://github.com/openclaw/openclaw/issues/193927) Control UI: arrow navigation replaces a recalled multiline prompt
- [#194319](https://github.com/openclaw/openclaw/issues/194319) test
- [#194249](https://github.com/openclaw/openclaw/issues/194249) [Bug]: Control UI hides video compression errors and mislabels preparation progress

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 261,227 · **Open issues:** 53,396 · **Last push:** <1h ago

On November 7, 2026, there were no new releases for Hermes Agent; however, several important developments occurred in merged pull requests. Notably, PR #150430 improved the pnpm switch integration by cleaning up cache inputs and undeclared dependencies, while PR #149214 enhanced group functionality by ensuring complete restart stop recovery, keeping controls responsive. Additionally, PR #150286 introduced a feature allowing clients to self-name during session creation. Among new issues, the reported bug #149861 highlights a critical failure in the macOS desktop build, which is attributed to pnpm 12.15.0 dropping an essential optional dependency, marking it as a significant concern for users on that platform.

#### ✅ Merged PRs
- [#150430](https://github.com/NousResearch/hermes-agent/pull/150430) chore(js): pnpm switch leftovers (cache inputs, undeclared deps, lock attributes, Nix hash docs)
- [#149214](https://github.com/NousResearch/hermes-agent/pull/149214) fix(groups): complete restart stop recovery and keep controls responsive
- [#150286](https://github.com/NousResearch/hermes-agent/pull/150286) feat(gateway): a client can name itself on session.create

#### 🐛 New Issues
- [#149861](https://github.com/NousResearch/hermes-agent/issues/149861) [Bug]: macOS desktop build fails on main since the pnpm switch — pnpm 12.15.0 silently drops the get-windows optional dependency 💬6
- [#150369](https://github.com/NousResearch/hermes-agent/issues/150369) Webapp on iPhone Safari: mic button needs double-tap to start/stop (AudioContext resume gated on user gesture) 💬5
- [#150390](https://github.com/NousResearch/hermes-agent/issues/150390) [Bug]: Desktop/mobile turn on a messaging chat's live conversation replies into the chat and is attributed to the chat's stored origin user 💬1
- [#150362](https://github.com/NousResearch/hermes-agent/issues/150362) Stamp-independent config migrations (46, 50) never run on a current-stamped config 💬1
- [#150056](https://github.com/NousResearch/hermes-agent/issues/150056) Local Bot Chat: message_agent deliveries refused with admission_conflict for hours after the desktop backend compressed the target chat (cause not yet identified) 💬1
- [#150146](https://github.com/NousResearch/hermes-agent/issues/150146) Desktop build fails on macOS when pnpm omits the optional get-windows dependency 💬1
- [#150397](https://github.com/NousResearch/hermes-agent/issues/150397) Multiplexed gateway: local terminal backend overwrites the routed profile's terminal.cwd with the process cwd 💬1
- [#150398](https://github.com/NousResearch/hermes-agent/issues/150398) Two install-root lookups in hermes_cli are wrong on main `type/bug` 💬1
- [#150399](https://github.com/NousResearch/hermes-agent/issues/150399) The downgrade guard cannot see state modules inside the package `type/bug` `area/install-update` 💬1
- [#150403](https://github.com/NousResearch/hermes-agent/issues/150403) Updaters from v0.21.6 on import names from the new tree that are not frozen `type/bug` `area/install-update` 💬1
- [#150402](https://github.com/NousResearch/hermes-agent/issues/150402) The e2e-upgrade handoff cell waits the full job timeout on a drain that will not end `type/test` `area/install-update` 💬1
- [#150041](https://github.com/NousResearch/hermes-agent/issues/150041) Tracking: pnpm switch follow-ups (#149746) `area/install-update` 💬1
- [#150035](https://github.com/NousResearch/hermes-agent/issues/150035) refactor(pm): one npmrc reader for the registry lookup and the source-build bridge `type/bug` `area/install-update` 💬1
- [#150445](https://github.com/NousResearch/hermes-agent/issues/150445) Managed worker crashes at init when the init-time fallback lands on anthropic_messages: AttributeError '_anthropic_api_key'
- [#150443](https://github.com/NousResearch/hermes-agent/issues/150443) Config-write refusal tells the agent to hand-edit config.yaml and cites a POSIX-only path
- [#150439](https://github.com/NousResearch/hermes-agent/issues/150439) Clarification: Reauthorization after explicit "Deny" in Dangerous Command (CLI v0.22.5)
- [#150436](https://github.com/NousResearch/hermes-agent/issues/150436) Any config save (e.g. an "always allow" approval) deletes user values for keys the managed scope also sets
- [#150431](https://github.com/NousResearch/hermes-agent/issues/150431) [Feature]: managed scope: let an admin lock mcp_servers (no user-layer servers)
- [#150427](https://github.com/NousResearch/hermes-agent/issues/150427) [Bug]: Gateway systemd unit replaces the user manager's PATH, so external-process providers can't find CLIs installed with mise
- [#150426](https://github.com/NousResearch/hermes-agent/issues/150426) [macOS] Missing NSAudioCaptureUsageDescription in setup wrapper causes system sounds (screenshot, Finder) to mute
- [#150424](https://github.com/NousResearch/hermes-agent/issues/150424) Gateway fails to start on macOS when an env var contains control characters (plistlib ValueError reported as "invalid_invocation")
- [#150420](https://github.com/NousResearch/hermes-agent/issues/150420) [Bug]: delegate_task output_schema: a failed first run (failed=True) still triggers the schema retry, which then starts with no history
- [#150383](https://github.com/NousResearch/hermes-agent/issues/150383) Updates keep working when files move
- [#150414](https://github.com/NousResearch/hermes-agent/issues/150414) Plugin with a pyproject cannot be enabled on two profiles: PM stages every profile's plugin dir into one uv workspace
- [#150410](https://github.com/NousResearch/hermes-agent/issues/150410) Upgrade tests start from an old release and never see a file move
- [#150409](https://github.com/NousResearch/hermes-agent/issues/150409) [Bug]: Gateway: editor MCP validation answers bare -32603 when the optional [acp] extra is not installed
- [#150396](https://github.com/NousResearch/hermes-agent/issues/150396) CI guards report success while they cannot see a file move
- [#150395](https://github.com/NousResearch/hermes-agent/issues/150395) Log routing drops records from modules that run inside the hermes_agent package
- [#150394](https://github.com/NousResearch/hermes-agent/issues/150394) Optional-import guards misread a missing parent package after a module move
- [#150393](https://github.com/NousResearch/hermes-agent/issues/150393) Desktop app pops a "Install WSL" console window on every launch on WSL-less Windows machines
- [#150380](https://github.com/NousResearch/hermes-agent/issues/150380) [Feature]: Support cron-style Bot Chat delivery for webhook results
- [#150378](https://github.com/NousResearch/hermes-agent/issues/150378) [Bug]: cron can't deliver to the generic relay platform (bare, explicit or origin fallback)
- [#150375](https://github.com/NousResearch/hermes-agent/issues/150375) fix(state): a read-only view of a retired WAL in another process no longer blocks state.db opens

#### 🔒 Closed Issues
- [#106960](https://github.com/NousResearch/hermes-agent/issues/106960) systemd dashboard is inventoried as a manual serve after hermes update
- [#149861](https://github.com/NousResearch/hermes-agent/issues/149861) [Bug]: macOS desktop build fails on main since the pnpm switch — pnpm 12.15.0 silently drops the get-windows optional dependency
- [#143302](https://github.com/NousResearch/hermes-agent/issues/143302) A Group Chat message sent just as the previous discussion settles never gets a turn
- [#150035](https://github.com/NousResearch/hermes-agent/issues/150035) refactor(pm): one npmrc reader for the registry lookup and the source-build bridge

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 96,481 · **Open issues:** 9,974 · **Last push:** 1h ago

On November 7, 2026, vLLM saw no new releases, but several significant pull requests were merged, enhancing the platform's performance and functionality. Notable changes include bug fixes for the ROCm integration and the Mixture of Experts (MoE) functionality, such as the fix for padded row strides in top-k routing (#57823) and a resolution for the issue of count-free expert metadata (#65517). Additionally, performance improvements were introduced with the vectorization of the silu_and_mul_per_block_quant function for large inputs (#65791) and support for batch-invariant kernels in Kimi K3.1 on MI355X hardware (#66163). A critical new issue was raised regarding a potential bug in the ROCM_AITER_MLA decode kernel, which could yield uncorrelated output under specific conditions (#66141).

#### ✅ Merged PRs
- [#61816](https://github.com/vllm-project/vllm/pull/61816) [ROCm][Bugfix] Stop declaring the MXFP4 MoE intermediate padding to AITER
- [#56246](https://github.com/vllm-project/vllm/pull/56246) [CI][XPU] Add Rust Frontend CI coverage for Intel GPU
- [#65792](https://github.com/vllm-project/vllm/pull/65792) [BugFix][DP] Hash the parallel config before engine init for DP validation
- [#62298](https://github.com/vllm-project/vllm/pull/62298) [CI][ROCm] Run ROCm-capable tests that are currently skipped on AMD
- [#65791](https://github.com/vllm-project/vllm/pull/65791) [Perf] Vectorize silu_and_mul_per_block_quant for large inputs
- [#57823](https://github.com/vllm-project/vllm/pull/57823) [Bugfix][MoE] Respect padded row strides in top-k routing
- [#60308](https://github.com/vllm-project/vllm/pull/60308) [Bugfix][Frontend] Return 400 for images rejected by Pillow's bomb check
- [#64159](https://github.com/vllm-project/vllm/pull/64159) [Bugfix][DP] Log cross-engine step statistics ordering at debug level
- [#62529](https://github.com/vllm-project/vllm/pull/62529) [Tests] Add TP2 PCP2 canonical mapping byte coverage
- [#64622](https://github.com/vllm-project/vllm/pull/64622) [Startup] Skip the CUDA graph memory profile when its estimate is disabled
- [#66030](https://github.com/vllm-project/vllm/pull/66030) [Model] Kimi K3.1: model files and NVIDIA specialized decode (Kimi K3.1 split 1/5)
- [#66028](https://github.com/vllm-project/vllm/pull/66028) [Rust Frontend] Kimi K3.1 chat renderer (Kimi K3.1 split 2/5)
- [#66175](https://github.com/vllm-project/vllm/pull/66175) [CI] Recompile the KV connector lock against the raised opentelemetry floors
- [#66010](https://github.com/vllm-project/vllm/pull/66010) [Sleep Mode] Level 2 discards only parameters
- [#65517](https://github.com/vllm-project/vllm/pull/65517) [Bugfix][ROCm][MoE] Fix tkw1 rejecting count-free expert metadata, rename AITER QuantMethod
- [#64131](https://github.com/vllm-project/vllm/pull/64131) [ROCm][CI] Keep nightlies off PR-writable images and trim the csrc cache key
- [#66048](https://github.com/vllm-project/vllm/pull/66048) [BugFix] Fix/spec decode insert resampled race
- [#65145](https://github.com/vllm-project/vllm/pull/65145) [CI] Bake hash-locked KV connectors into the CI image and re-enable their jobs
- [#65270](https://github.com/vllm-project/vllm/pull/65270) [MRV2][Spec Decode] Fix mixed draft-model warmup token budget
- [#65804](https://github.com/vllm-project/vllm/pull/65804) [Spec Decode] Treat standalone draft model prefill as decode
- [#59746](https://github.com/vllm-project/vllm/pull/59746) [Bugfix][NIXL] Pair P/D blocks by the last token with different block sizes
- [#63890](https://github.com/vllm-project/vllm/pull/63890) [ROCm][Perf] Use AITER's all-gather for small TP all-gathers
- [#61448](https://github.com/vllm-project/vllm/pull/61448) [ROCm][Model] Add fusions for Muse Glimmer for AMD backend
- [#63795](https://github.com/vllm-project/vllm/pull/63795) [Spec Decode] DSpark: sliding-window MLA draft layers
- [#64410](https://github.com/vllm-project/vllm/pull/64410) [Quantization] Support w4afp8 checkpoints on the W4A8 FP8 MoE path
- [#65808](https://github.com/vllm-project/vllm/pull/65808) [Bugfix] Fix DP ViT all-gather dtype mismatch when the first parameter is fp32
- [#62718](https://github.com/vllm-project/vllm/pull/62718) [ROCm][Build][3/5] Speed up ROCm build: split the skinny GEMMs per kernel family and trim torch headers
- [#63365](https://github.com/vllm-project/vllm/pull/63365) [ROCm][Build][5/5] Speed up ROCm build: instantiate the fused MUSE-Spark op per head size
- [#65463](https://github.com/vllm-project/vllm/pull/65463) [Bugfix][KV Cache] Re-fit `--max-model-len auto` after the extensible KV cache shrinks
- [#65746](https://github.com/vllm-project/vllm/pull/65746) [GLM 5.3 Perf] Expand fp8 moe tma for sm100, 1.03~1.60x kernel performance improvement
- [#63574](https://github.com/vllm-project/vllm/pull/63574) [Security] Raise patched runtime and test dependency floors
- [#65955](https://github.com/vllm-project/vllm/pull/65955) [Quantization] Avoid importing humming when resolving quantization configs
- [#65874](https://github.com/vllm-project/vllm/pull/65874) [Kernel][Perf] Fused GDN MTP: Support DSpark K=8 and use idle SMs at small batch sizes
- [#65667](https://github.com/vllm-project/vllm/pull/65667) [Bugfix][MRV2] Read routed experts from unkeyed full blocks
- [#66123](https://github.com/vllm-project/vllm/pull/66123) [Bugfix] Preserve embedding size overrides
- [#60047](https://github.com/vllm-project/vllm/pull/60047) [Bugfix] Register the aten::mm out_dtype overloads for batch invariance
- [#66111](https://github.com/vllm-project/vllm/pull/66111) [CI] Reuse the HF reference across use_prompt_embeds
- [#65828](https://github.com/vllm-project/vllm/pull/65828) [Model] Add LFM3-Audio
- [#60438](https://github.com/vllm-project/vllm/pull/60438) [Bugfix] Fall back from DeepGEMM when nvcc is older than 12.9
- [#63304](https://github.com/vllm-project/vllm/pull/63304) [Frontend] Remove dead helpers and sync type annotations in entrypoints and config
- [#66012](https://github.com/vllm-project/vllm/pull/66012) [Bugfix] Do not retry safetensors metadata lookup in offline mode
- [#65620](https://github.com/vllm-project/vllm/pull/65620) [Doc] Document multimodal requirements for the Transformers modeling …
- [#42837](https://github.com/vllm-project/vllm/pull/42837) [feature] shuffle safetensor weight files
- [#66097](https://github.com/vllm-project/vllm/pull/66097) [Model] Use the upstream config for Qwen3-ASR
- [#65977](https://github.com/vllm-project/vllm/pull/65977) [Misc] Add NIXL team to nixl label
- [#66062](https://github.com/vllm-project/vllm/pull/66062) [Doc][Bugfix] Fix strict docs build broken by subclassing mocked torch classes

#### 🐛 New Issues
- [#66141](https://github.com/vllm-project/vllm/issues/66141) [Bug][ROCm]: ROCM_AITER_MLA can select an aiter MLA decode kernel that silently returns uncorrelated output (gqa_ratio=16, fp8 Q+KV, decode_qlen 3-4, non-persistent) `rocm` `kimi` 💬2
- [#66211](https://github.com/vllm-project/vllm/issues/66211) [Bug]: Compressed-tensors NVFP4/MXFP4 row-parallel layers load with other groups' block scales when the TP split cuts a scale group (Gemma-4-26B-A4B NVFP4 at TP=8: GSM8K 24% -> 1.4%) `quantization` 💬1
- [#66195](https://github.com/vllm-project/vllm/issues/66195) [Bug]: Block-FP8 Triton fused_moe_kernel fails to compile with Triton 3.9 since #64760 (`too many indices for tensor of rank 0` at `b_scale[None, :]`) 💬1
- [#66070](https://github.com/vllm-project/vllm/issues/66070) [Bug]: Qwen3.5 vision RoPE angle precision differs from HF (public 9B reproduction, mixed FP32 workaround results) `bug` `quantization` 💬1
- [#66163](https://github.com/vllm-project/vllm/issues/66163) [RFC][ROCm]: Batch-invariant kernels for Kimi-K3.1 on MI355X (KDA, DSA/indexer, MXFP4 MoE, LoRA, all-reduce) `rocm` `kimi` `batch-invariance` 💬1
- [#66144](https://github.com/vllm-project/vllm/issues/66144) [Bug]: With --enable-fault-tolerance, an async EPLB worker exception stalls EPLB silently instead of making the engine UNHEALTHY 💬1
- [#66129](https://github.com/vllm-project/vllm/issues/66129) [Bug]: compressed-tensors loads checkpoint FP8 k/v scales into layers kept in BF16 by kv_cache_dtype_skip_layers, and FlashInfer applies them `bug` `quantization` 💬1
- [#66113](https://github.com/vllm-project/vllm/issues/66113) [Bug]: Ministral-3 / Devstral-Small-2 FP8 with `--config-format hf`: vision tower and projector are built as FP8 and image embeddings are all zeros `quantization` `mistral` 💬1
- [#66193](https://github.com/vllm-project/vllm/issues/66193) [Bug]: Extensible KV cache reserves the one-off FlashInfer autotune peak as a serving transient, cutting KV 2.4x under an explicit --gpu-memory-utilization (regression from #56492) `quantization`
- [#66192](https://github.com/vllm-project/vllm/issues/66192) [Bug]: SM100 default prefill CUDA-graph grid (up to 8192 tokens, #63406) adds ~5 GiB/GPU graph memory and breaks max_model_len=256000 startup for Qwen3.8-2.4T-A95B-FP8 TP16 on GB200
- [#66182](https://github.com/vllm-project/vllm/issues/66182) [Bug]: Step3ReasoningParser.extract_content_ids excludes think_end_token at last index
- [#66180](https://github.com/vllm-project/vllm/issues/66180) [Bug]: xLAM non-streaming tool parser drops single tool call object in <tool_call> tags `tool-calling`
- [#66178](https://github.com/vllm-project/vllm/issues/66178) [Bug]: Granite20bFCToolParser streaming misses tool calls when preceded by content `tool-calling`
- [#66173](https://github.com/vllm-project/vllm/issues/66173) [Bug]: Pythonic tool parsers silently drop calls with Python reserved keywords as parameter names `tool-calling`
- [#66170](https://github.com/vllm-project/vllm/issues/66170) [Feature]: Enable and validate pipeline parallelism for Domyn Edge `feature request` `quantization`
- [#66137](https://github.com/vllm-project/vllm/issues/66137) [Bug][Prefix Cache][Kimi-K3.1-Pro] DSpark does not enable shared Mamba checkpoints `kimi` `kv-cache-manager`
- [#66131](https://github.com/vllm-project/vllm/issues/66131) [Bug][KV Connector][Kimi-K3.1-Pro] Local hybrid hit can exceed draft-attention coverage `kimi`
- [#66134](https://github.com/vllm-project/vllm/issues/66134) [RFC]: Text sessions on /v1/realtime with streaming-input prefill
- [#66124](https://github.com/vllm-project/vllm/issues/66124) [Bug]: `enable_weights_track` refuses correct weight-only NVFP4 checkpoints (input scales that no export writes and no kernel reads) `quantization`
- [#66122](https://github.com/vllm-project/vllm/issues/66122) [Feature]: Integrate FlashTopK fused indexer top-k for DSA prefill on Hopper (SM90)
- [#66120](https://github.com/vllm-project/vllm/issues/66120) [Bug]: MiniMax-M3 sparse attention layers drop checkpoint FP8 KV-cache scales and run with scale 1.0 `quantization` `minimax`
- [#66115](https://github.com/vllm-project/vllm/issues/66115) [Bug]: LFM2, LFM2-MoE, Jamba, Zamba2, Step3, Bailing MoE and PLaMo3 build `Attention` without `quant_config`, so checkpoints with static FP8 KV-cache scales fail to load `quantization`
- [#66109](https://github.com/vllm-project/vllm/issues/66109) [Bug]: Marlin NVFP4 zeroes E4M3 subnormal block scales with float16 activations, although its float16 path decodes them `quantization`
- [#66101](https://github.com/vllm-project/vllm/issues/66101) [Spec Decode] Broaden NVFP4 draft LM-head validation beyond GB10: Memra results and Blackwell/model matrix `quantization`
- [#66093](https://github.com/vllm-project/vllm/issues/66093) [Feature]: Carry the HTTP EPD multimodal handoff on the Rust gRPC frontend `multi-modality` `rust`
- [#66085](https://github.com/vllm-project/vllm/issues/66085) [Performance]: Avoid extra logits passes for temperature-only sampling
- [#66074](https://github.com/vllm-project/vllm/issues/66074) [Bug]: MXFP4 linear layers on Hopper (default Humming kernel) silently round or zero weights whose E8M0 scale is 12+ binades below the fused tensor's largest scale `quantization`
- [#66055](https://github.com/vllm-project/vllm/issues/66055) [Bug]: thinking_token_budget turns off reasoning when an earlier message mentions <think> `tool-calling`

#### 🔒 Closed Issues
- [#39479](https://github.com/vllm-project/vllm/issues/39479) [torch.compile] config hashing refactor follow-ups
- [#56900](https://github.com/vllm-project/vllm/issues/56900) [Bug]: Qwen/Qwen1.5-MoE-A2.7B-Chat produces degenerate output with torch.compile (VLLM_COMPILE) but correct output without it on vLLM 0.28.0 (H100, torch 2.13.0+cu130); CUDA graphs, compile cache and custom_ops make no difference
- [#52833](https://github.com/vllm-project/vllm/issues/52833) [Bug]: GLM-5.2 MTP accepts 0% of drafts on MI355X (gfx950); disabling expert parallelism hits hipErrorIllegalAddress
- [#63944](https://github.com/vllm-project/vllm/issues/63944) [Bug]: int8_per_token_head scale-view fill overwrites Gated DeltaNet state in hybrid models
- [#48029](https://github.com/vllm-project/vllm/issues/48029) [RFC]: Composite Attention Backends
- [#63732](https://github.com/vllm-project/vllm/issues/63732) [Bug]: Gemma 4 + online --quantization fp8: image requests crash since v0.23.0 (FP8-cast pixel values reach quantized patch_embedder.input_proj); v0.22.0 works
- [#48005](https://github.com/vllm-project/vllm/issues/48005) [Bug]: VLLM concurrent requests: the last request does not return
- [#55383](https://github.com/vllm-project/vllm/issues/55383) AOT compile cache key ignores the LoRA module tree, loading an incompatible artifact (`KeyError: 'weight'`)
- [#55518](https://github.com/vllm-project/vllm/issues/55518) [Bug]: kv_cache_utils warns that prefix-cache reuse is disabled even when disable_eagle_block_drop keeps it working
- [#47919](https://github.com/vllm-project/vllm/issues/47919) [RFC] guard-gated sparse MLA topology index policy
- [#47974](https://github.com/vllm-project/vllm/issues/47974) [Bug]: vllm 校验arguments合法性
- [#47982](https://github.com/vllm-project/vllm/issues/47982) [Bug]: flashinfer_b12x MoE broken after PR #43328: "num_tokens exceeds max_num_tokens" with dp_size>1 and OOM in B12xMoEWrapper buffer allocation
- [#48066](https://github.com/vllm-project/vllm/issues/48066) [Performance]: Marlin MoE block_size_m heuristic over-selects a large M-tile for expert-parallel decode (up to ~30% TPOT on gpt-oss)
- [#63162](https://github.com/vllm-project/vllm/issues/63162) [Bug]: `return_tokens_as_token_ids` is ignored on derender paths
- [#65856](https://github.com/vllm-project/vllm/issues/65856) [Bug]: Draft-model speculative decoding exceeds the token budget during warmup
- [#60977](https://github.com/vllm-project/vllm/issues/60977) [Bug]: EmbeddingGemma 2 rejects dimensions=768 despite returning 768-dimensional embeddings
- [#64778](https://github.com/vllm-project/vllm/issues/64778) [Bug]: Non-streaming `/v1/chat/completions/derender` and `/v1/completions/derender` report `usage.prompt_tokens: 0` when the request omits `prompt_tokens`, ignoring `generate_response.usage`
- [#61853](https://github.com/vllm-project/vllm/issues/61853) [Bug]: enable_lora on Jamba (ai21labs/Jamba-tiny-dev) causes a CUDA illegal memory access followed by an uncaught C++ exception (`terminate called ... c10::AcceleratorError`) during startup
- [#64845](https://github.com/vllm-project/vllm/issues/64845) [Bug]: EmbeddingGemma 2 rejects `dimensions` by default although the model supports Matryoshka (128/256/512/768)
- [#65811](https://github.com/vllm-project/vllm/issues/65811) [Bug]: Qwen3.5-122B + LoRA crashes at startup: _inject_lora_into_fused_moe asserts TritonExperts, but FlashInferExperts is auto-selected
- [#60303](https://github.com/vllm-project/vllm/issues/60303) [Bug]: Images above Pillow's pixel limit get HTTP 500 instead of 400
- [#66006](https://github.com/vllm-project/vllm/issues/66006) [Bug]: With `HF_HUB_OFFLINE=1`, a Hub-ID speculative draft model logs `ERROR ... Error retrieving safetensors: ... offline mode is enabled` twice (plus a 2 s retry sleep), although startup succeeds
- [#64985](https://github.com/vllm-project/vllm/issues/64985) [Bug]: KV-sharing fast prefill hangs under async scheduling (non-blocking D2H copy of query_start_loc_cpu)

### SGLang (`sgl-project/sglang`)

**Stars:** 38,538 · **Open issues:** 6,553 · **Last push:** <1h ago

Today was relatively routine for SGLang with no new releases. Key developments included the merging of several performance optimizations for the Kimi-K3.1 architecture, particularly enhancements to MegaMoE and context parallelism features. Notable fixes addressed issues such as ensuring the InstantTensor properly returns load-time GPU memory to the KV cache and resolving bugs related to the ML-shaped Triton decode and model gateway cache handling. Among the new issues, the report of the reasoning parser splitting on the first occurrence of a closing think tag highlights a potential problem that could affect content processing.

#### ✅ Merged PRs
- [#48584](https://github.com/sgl-project/sglang/pull/48584) [Perf] kimi-k3.1: TP-shard the decode MoE front and latent-up tail
- [#48832](https://github.com/sgl-project/sglang/pull/48832) [Perf] dsv4: Run compact target verify's ratio 1 and 2 compressors through the fused kernels
- [#48993](https://github.com/sgl-project/sglang/pull/48993) [Refactor] attention: Let the DSV4 backend count the query rows of its prefill shared-read snapshot
- [#48999](https://github.com/sgl-project/sglang/pull/48999) [Chore] docker: Remove muse_spark folder
- [#45886](https://github.com/sgl-project/sglang/pull/45886) [Fix] InstantTensor: return load-time GPU memory to the KV cache
- [#48479](https://github.com/sgl-project/sglang/pull/48479) [CI] [AMD] nightly: Add Kimi-K3.1-Pro nightly test
- [#48980](https://github.com/sgl-project/sglang/pull/48980) [Fix] deepseek-v4.1: Run attention on the real rows of an MLP-sync-padded extend
- [#48712](https://github.com/sgl-project/sglang/pull/48712) [Feat] cuda-graph: Kimi-K3.1 breakable prefill graphs with PP x prefill CP
- [#48711](https://github.com/sgl-project/sglang/pull/48711) [Perf] kimi-k3.1: Fuse MegaMoE padding masks, DSA indexer Q prep and CP row copies
- [#48710](https://github.com/sgl-project/sglang/pull/48710) [Feat] kimi-k3.1: MegaMoE, breakable prefill graphs and DFlash under prefill CP
- [#48709](https://github.com/sgl-project/sglang/pull/48709) [Feat] kimi-k3.1: Prefill context parallelism (CP-TP group sharing)
- [#48507](https://github.com/sgl-project/sglang/pull/48507) [Fix] multimodal: Cap receive-time CUDA VMM feature copies per GPU and stage the rest in pinned host memory
- [#48241](https://github.com/sgl-project/sglang/pull/48241) [Feat] weight-sync: let one serialized payload serve every TP rank
- [#47930](https://github.com/sgl-project/sglang/pull/47930) [Feat] [NVIDIA] megakernel: Support prefill and extend steps
- [#48990](https://github.com/sgl-project/sglang/pull/48990) [CI] ci: Remove 13 nightly CUDA tests
- [#48513](https://github.com/sgl-project/sglang/pull/48513) [Feat] rust-server: Export extension metric families and hand media admission timing to the MM processor
- [#48971](https://github.com/sgl-project/sglang/pull/48971) [Perf] dsv4: route wo_b and Engram KV MXFP8 GEMMs to cuDNN on CC 10.7 above 8K rows
- [#48983](https://github.com/sgl-project/sglang/pull/48983) [Chore] ci: Remove the runtime Docker image release workflow
- [#48955](https://github.com/sgl-project/sglang/pull/48955) [Fix] [AMD] imports: [sglang-miles] Skip import-time device probes when no GPU is visible
- [#47695](https://github.com/sgl-project/sglang/pull/47695) [Feat] [AMD] quark: Quark int4 W4A16 on ROCm, and gfx1151 kernels for Strix Halo decode and prefill
- [#48986](https://github.com/sgl-project/sglang/pull/48986) [Fix] dsa: Accept metadata padding past q inside a breakable prefill graph
- [#47964](https://github.com/sgl-project/sglang/pull/47964) [Feat] [AMD] custom-all-reduce: Run the JIT custom all-reduce v2 on ROCm
- [#48762](https://github.com/sgl-project/sglang/pull/48762) [Refactor] scheduler: Run every state check through SchedulerInvariantChecker.run
- [#48468](https://github.com/sgl-project/sglang/pull/48468) [Chore] [NVIDIA] deps: Bump FlashInfer to 0.7.3 and migrate the NVLink one-sided all-to-all to flashinfer.moe_ep
- [#48831](https://github.com/sgl-project/sglang/pull/48831) [Perf] dspark: Prepare the DSpark draft attention metadata through the glue graph under every verify mode
- [#48733](https://github.com/sgl-project/sglang/pull/48733) [Perf] [NVIDIA] dsv41: Index-Q RoPE + fp4 pack runs one thread per fp4 block for prefill-sized calls
- [#48977](https://github.com/sgl-project/sglang/pull/48977) [Fix] kimi-k3.1: Sync the PCP stack's CI fixes (DSA trtllm row plan, MegaMoE pre-allocation, DCP fixture)
- [#37354](https://github.com/sgl-project/sglang/pull/37354) [Feat] [Apple] mlx: Add an architecture-independent ATen-to-MLX lowering layer
- [#46200](https://github.com/sgl-project/sglang/pull/46200) [Fix] swa: Start the SWA KV pool at its first layer under pipeline parallelism
- [#48941](https://github.com/sgl-project/sglang/pull/48941) [Perf] layernorm: rmsnorm_mxfp8 on 2 warps for 1280-wide rows; hc_combine_norm loads its weight before the reduction
- [#48554](https://github.com/sgl-project/sglang/pull/48554) [Fix] [NVIDIA] custom-allreduce: Scope a zero NVLink fabric cluster UUID to its own node
- [#48487](https://github.com/sgl-project/sglang/pull/48487) [Fix] sampler: skip the token-id all-reduce when the TP sync group has one rank
- [#48451](https://github.com/sgl-project/sglang/pull/48451) [Perf] pd: Poll the prefill result wait per attention-DP shard and pump HiCache storage events in it
- [#48305](https://github.com/sgl-project/sglang/pull/48305) [Feature] multimodal: [sglang-miles] Write each item feature cache key once
- [#48304](https://github.com/sgl-project/sglang/pull/48304) [Feature] multimodal: [sglang-miles] Write item feature cache entries behind the request
- [#48286](https://github.com/sgl-project/sglang/pull/48286) [Feature] multimodal: [sglang-miles] Item feature cache key sanity check
- [#48285](https://github.com/sgl-project/sglang/pull/48285) [Feature] multimodal: [sglang-miles] Share the token-space item feature cache on disk
- [#47903](https://github.com/sgl-project/sglang/pull/47903) [Feature] multimodal: [sglang-miles] Cache token-space media features per item before loading
- [#48784](https://github.com/sgl-project/sglang/pull/48784) [Perf] eplb: Vectorize the static per-rank dispatch map
- [#48586](https://github.com/sgl-project/sglang/pull/48586) [Perf] kimi-k3: Fuse the decode MoE routing for 1-256 rows into one kernel
- [#48496](https://github.com/sgl-project/sglang/pull/48496) [Perf] mem_cache: Order recycled unified-page writers after the forward instead of the current stream
- [#48458](https://github.com/sgl-project/sglang/pull/48458) [Fix] disaggregation: Keep non-final KV sends inside the protected prefix
- [#48448](https://github.com/sgl-project/sglang/pull/48448) [CI] server_args: Isolate two tests from process state and host hardware
- [#41635](https://github.com/sgl-project/sglang/pull/41635) [Feat] gemma4: Add out-of-tree MoE expert executor selection
- [#48699](https://github.com/sgl-project/sglang/pull/48699) [CI] [AMD] disaggregation: Send aux data over TCP in the PP disaggregation test
- [#48757](https://github.com/sgl-project/sglang/pull/48757) [Fix] scheduler: Abort beam groups on a retract pause and close three request-drop gaps
- [#48508](https://github.com/sgl-project/sglang/pull/48508) [Perf] tokenizer_manager: Keep the crash-dump request history pickled so the cyclic GC never scans it
- [#48447](https://github.com/sgl-project/sglang/pull/48447) [Fix] dp-attention: Carry a rank's ShutdownReq to its DP peers through the MLP-sync gather
- [#47968](https://github.com/sgl-project/sglang/pull/47968) [Refactor] multimodal: Share the CUDA VMM chunk copy and let the transport pick its pool class
- [#48547](https://github.com/sgl-project/sglang/pull/48547) [Feat] model: Support ERNIE 5.5 Flash
- [#48668](https://github.com/sgl-project/sglang/pull/48668) [Fix] sgl-router: Keep a worker's cached chain visible when another worker holds its prefix
- [#48816](https://github.com/sgl-project/sglang/pull/48816) [CI] sgl-router: Stop label events from cancelling and restarting the router tiers
- [#46291](https://github.com/sgl-project/sglang/pull/46291) [Feat] rust-server: multimodal (image) preprocessing through sglang-processor

#### 🐛 New Issues
- [#48791](https://github.com/sgl-project/sglang/issues/48791) [Bug] Reasoning parser splits on first occurrence of closing think tag: quoted </think> inside reasoning truncates reasoning_content and leaks the rest of the CoT into content 💬2
- [#48892](https://github.com/sgl-project/sglang/issues/48892) [CI] multimodal-gen-test-2-gpu (test_kandinsky6_sr_decode_parallel spatial-2) fails on main: Tensor-likes are not close 💬2
- [#48793](https://github.com/sgl-project/sglang/issues/48793) [Bug] Model gateway silently drops `cache_salt` on chat completions 💬2
- [#48967](https://github.com/sgl-project/sglang/issues/48967) [Bug] [AMD] decode attention: MLA-shaped Triton decode returns NaN / wrong rows on ragged batches (gfx1151) 💬1
- [#48964](https://github.com/sgl-project/sglang/issues/48964) [Bug] GLM-5.3-Flash: engine state corrupted after a 1M-token request on v0.5.23 (MTP accept rate 0.00, all subsequent requests degenerate); v0.5.22 clean 💬1
- [#48922](https://github.com/sgl-project/sglang/issues/48922) [Bug] SM120 DeepSeek-V4.1: low-ratio indexer decode dies with schedule_meta=None (fp8_fp4_paged_mqa_logits arg #6) in dev-dsv41 💬1
- [#48802](https://github.com/sgl-project/sglang/issues/48802) [Bug] Decode HiCache restore returns HTTP 500 under host-cache pressure with GLM-5.3-Flash 💬1
- [#48968](https://github.com/sgl-project/sglang/issues/48968) [Bug] [AMD] --enable-deterministic-inference fails at startup on RDNA: batch-invariant matmul needs 99 KB LDS (64 KB available)
- [#48963](https://github.com/sgl-project/sglang/issues/48963) [Feature] Share a prompt's KV among requests admitted in the same prefill batch
- [#48944](https://github.com/sgl-project/sglang/issues/48944) [CI] cuda: uv pip install -e times out waiting for the shared uv editable-build lock
- [#48930](https://github.com/sgl-project/sglang/issues/48930) [Bug] NVFP4 MoE: the Marlin backend applies the gate's global scale to the up projection
- [#48919](https://github.com/sgl-project/sglang/issues/48919) [Bug] NVFP4 W4A4 linear keeps the largest weight global scale of fused q/k/v and gate/up layers without a check
- [#48917](https://github.com/sgl-project/sglang/issues/48917) [Bug] TorchNativeLlamaForCausalLM / TorchNativePhi3ForCausalLM load no checkpoint tensors and no KV-cache scales
- [#48913](https://github.com/sgl-project/sglang/issues/48913) [Bug] Gemma 4 and Gemma 3n KV-shared layers read the FP8 KV cache with scale 1.0 instead of the writing layer's scales
- [#48911](https://github.com/sgl-project/sglang/issues/48911) [Bug] More model loaders drop checkpoint FP8 KV-cache scales (Qwen1.5/2-MoE, Qwen2.5-VL, Qwen3-Next, AFMoE, Gemma 3n, Gemma 4 Unified, Bailing-V2.5, DBRX, HRM-Text, Nanbeige, ...)
- [#48906](https://github.com/sgl-project/sglang/issues/48906) [Bug] NVFP4 Marlin path (default on SM80-SM90) decodes E4M3 subnormal block scales as 0 with bfloat16 activations
- [#48904](https://github.com/sgl-project/sglang/issues/48904) [Bug] Qwen3, Qwen3-VL, Qwen3-VL-MoE, Qwen3-Omni-MoE, Qwen3-ASR and Qwen3 rerankers ignore checkpoint FP8 KV-cache scales
- [#48808](https://github.com/sgl-project/sglang/issues/48808) [CI] multimodal-gen-test-1-gpu (llada_image) fails on main: 'NoneType' object has no attribute 'takes_deferred_relay'
- [#48837](https://github.com/sgl-project/sglang/issues/48837) [Bug] PD decode server fails to start with CUDA OOM on hybrid mamba models: mamba memory budget ignores decode extra slots and pre-allocated speculative states
- [#48822](https://github.com/sgl-project/sglang/issues/48822) [RFC] Add NPU RLHF Lifecycle Tests
- [#48819](https://github.com/sgl-project/sglang/issues/48819) [Bug] SAIL/PPU memory capacity query incorrectly invokes nvidia-smi and warns about NVIDIA drivers

#### 🔒 Closed Issues
- [#36807](https://github.com/sgl-project/sglang/issues/36807) [Bug] fast_topk_v2 can silently return wrong top-k sets when a radix threshold bucket exceeds its 4096-entry candidate buffer (k=2048, long rows)
- [#31504](https://github.com/sgl-project/sglang/issues/31504) [Proposal] Fuse static FP8 activation quantization into producer kernels (norm / activation / allreduce epilogue)
- [#34716](https://github.com/sgl-project/sglang/issues/34716) [Bug] /v1/responses: `created_at` is a float in streaming events but an int in non-streaming responses
- [#38291](https://github.com/sgl-project/sglang/issues/38291) [Bug] `fp8e4nv` not supported on A100 (SM80) when serving Qwen3.8-Flash-Next-FP8
- [#38104](https://github.com/sgl-project/sglang/issues/38104) [Bug] `--default-chat-template-kwargs` with `reasoning_effort` silently overrides the per-request `reasoning_effort`
- [#34572](https://github.com/sgl-project/sglang/issues/34572) [Bug][PP] PP disaggregated prefill hangs: bootstrap queue history diverges across stages under abort storms (RCA + fix series)
- [#38360](https://github.com/sgl-project/sglang/issues/38360) [Bug] /v1/score returns validation error for single-label cross-encoder rerankers (e.g. bge-reranker-v2-m3)
- [#38357](https://github.com/sgl-project/sglang/issues/38357) [RFC / Feature]: Zero-Copy In-Place KV-Cache Compactor via In-Situ Cycle Permutations (1.65x Speedup, 0 Bytes Aux VRAM)
- [#38341](https://github.com/sgl-project/sglang/issues/38341) [decode] Spec-decode with large draft-token counts OOMs mid-traffic on the decode instance - no upfront capacity check (verify workspace vs KV pool is zero-sum)
- [#38156](https://github.com/sgl-project/sglang/issues/38156) [Bug] HiCache host-memory sizing guard charges co-located ranks twice and rejects pools that fit (host_memory_budget_bytes, #35540)
- [#38312](https://github.com/sgl-project/sglang/issues/38312) [Playground] Verified cell: h100 / flash-official / fp4 / high-throughput / single
- [#48677](https://github.com/sgl-project/sglang/issues/48677) [CI] attention/unittests/mla/test_flashinfer.py fails on main: FlashInfer MLA EAGLE draft CUDA-graph outputs mismatch on H100
- [#45770](https://github.com/sgl-project/sglang/issues/45770) [Bug] EPD encoder allocates unused pinned embedding pools on nonzero TP ranks
- [#45953](https://github.com/sgl-project/sglang/issues/45953) [Bug] Glm47MoeDetector.detect_and_parse drops tool calls when the function name is followed by a newline (non-streaming)
- [#47444](https://github.com/sgl-project/sglang/issues/47444) [Bug] NemotronHConfig rejects transformers 5 layer types `linear_attention` / `full_attention` in config.json
- [#48808](https://github.com/sgl-project/sglang/issues/48808) [CI] multimodal-gen-test-1-gpu (llada_image) fails on main: 'NoneType' object has no attribute 'takes_deferred_relay'
- [#48230](https://github.com/sgl-project/sglang/issues/48230) [Bug] PD + Mooncake: different DSA backends on prefill and decode silently corrupt the decode KV ("Requested address ... not found")
- [#48603](https://github.com/sgl-project/sglang/issues/48603) [Bug] EPLB statistics include empty draft records during speculative decoding

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 133,585 · **Open issues:** 2,588 · **Last push:** 2h ago

On November 7, 2026, the latest release of llama.cpp, version b12180, introduced the Kimi-K3.1-Pro text model, which features innovative full-attention MLA layers replaced with DSA for improved performance. Version b12179 enhanced the hexagon implementation with optimizations for conv_3d, while b12177 addressed a crash issue related to invalid UTF-8 prompts or files. Notable merged features include the addition of a batched tensor API in WebGPU and improvements in the testing framework to ensure compliance with standard math functions. Among new issues reported, one particularly concerning item involves the Vulkan GLM-OCR vision encoder producing garbage outputs on Intel Arc A380 under certain conditions, highlighting a critical compatibility challenge.

#### 🚀 New Releases
- [b12180](https://github.com/ggml-org/llama.cpp/releases/tag/b12180) b12180
- [b12179](https://github.com/ggml-org/llama.cpp/releases/tag/b12179) b12179
- [b12177](https://github.com/ggml-org/llama.cpp/releases/tag/b12177) b12177
- [b12176](https://github.com/ggml-org/llama.cpp/releases/tag/b12176) b12176
- [b12175](https://github.com/ggml-org/llama.cpp/releases/tag/b12175) b12175
- [b12174](https://github.com/ggml-org/llama.cpp/releases/tag/b12174) b12174
- [b12173](https://github.com/ggml-org/llama.cpp/releases/tag/b12173) b12173
- [b12172](https://github.com/ggml-org/llama.cpp/releases/tag/b12172) b12172
- [b12171](https://github.com/ggml-org/llama.cpp/releases/tag/b12171) b12171
- [b12170](https://github.com/ggml-org/llama.cpp/releases/tag/b12170) b12170

#### ✅ Merged PRs
- [#31822](https://github.com/ggml-org/llama.cpp/pull/31822) hexagon: fuse post-norm residual add into RMS_NORM_MUL
- [#31779](https://github.com/ggml-org/llama.cpp/pull/31779) model: add Kimi-K3.1-Pro text model
- [#31814](https://github.com/ggml-org/llama.cpp/pull/31814) hexagon: conv_2d optimizations and support for conv_3d
- [#31806](https://github.com/ggml-org/llama.cpp/pull/31806) docker: add explicit /usr/local/nvidia search path
- [#31473](https://github.com/ggml-org/llama.cpp/pull/31473) webgpu: add batched tensor API (`get_tensor_n` and `set_tensor_n`)
- [#31791](https://github.com/ggml-org/llama.cpp/pull/31791) tests : qualify isnan and signbit with std::
- [#31563](https://github.com/ggml-org/llama.cpp/pull/31563) cli : fix crash on invalid UTF-8 in prompt or files
- [#31797](https://github.com/ggml-org/llama.cpp/pull/31797) tests : override hardware_concurrency in CI
- [#31718](https://github.com/ggml-org/llama.cpp/pull/31718) cmake : generate RC file directly without win-app.rc.in
- [#31782](https://github.com/ggml-org/llama.cpp/pull/31782) opencl: support repeat for f16, i32, i16, bf16
- [#31658](https://github.com/ggml-org/llama.cpp/pull/31658) vulkan: detect ReBAR support, avoid BAR allocations if unavailable
- [#31233](https://github.com/ggml-org/llama.cpp/pull/31233) moe-cache : LRFU/MQ-like hybrid cache, ClassLRU
- [#31788](https://github.com/ggml-org/llama.cpp/pull/31788) ci : bump CUDA 13 release builds to 13.5
- [#31757](https://github.com/ggml-org/llama.cpp/pull/31757) vendor: update BoringSSL to 0.20261105.0
- [#31787](https://github.com/ggml-org/llama.cpp/pull/31787) CUDA: fix Maxwell build
- [#31730](https://github.com/ggml-org/llama.cpp/pull/31730) common : restrict HF token to huggingface.co hosts
- [#31758](https://github.com/ggml-org/llama.cpp/pull/31758) opencl: add q6_k multi column tiled GEMV for speculative verification and refactoring

#### 🐛 New Issues
- [#31836](https://github.com/ggml-org/llama.cpp/issues/31836) Vulkan: GLM-OCR vision encoder produces garbage on Intel Arc A380 for full-page images (works on CPU and SYCL) `bug-unconfirmed` 💬1
- [#31805](https://github.com/ggml-org/llama.cpp/issues/31805) Misc. bug: allOf with non-object types generates an empty object grammar `bug-unconfirmed` 💬1
- [#31823](https://github.com/ggml-org/llama.cpp/issues/31823) Misc. bug: SYCL and Flash Attention problem / warnings `bug-unconfirmed` 💬1
- [#31778](https://github.com/ggml-org/llama.cpp/issues/31778) Feature Request: Kimi-K3.1(-Pro) model support `enhancement`
- [#31830](https://github.com/ggml-org/llama.cpp/issues/31830) Feature request: make mixed-vendor (e.g. Intel Vulkan target + NVIDIA CUDA draft) speculative decoding actually worth using
- [#31828](https://github.com/ggml-org/llama.cpp/issues/31828) Vulkan output corruption on Intel Arc B-series persists under long-context/RAG prompts despite GGML_VK_DISABLE_COOPMAT workaround
- [#31825](https://github.com/ggml-org/llama.cpp/issues/31825) Feature Request: improve large MoE model loading time when using offloading `enhancement`
- [#31800](https://github.com/ggml-org/llama.cpp/issues/31800) Eval bug: draft dflash on other device `bug-unconfirmed`
- [#31796](https://github.com/ggml-org/llama.cpp/issues/31796) Qwen2.5-Omni audio: clips are padded to 30 s and the encoder does not use 2 s windows `bug-unconfirmed`
- [#31792](https://github.com/ggml-org/llama.cpp/issues/31792) Feature Request: Video with audio support `enhancement`
- [#31780](https://github.com/ggml-org/llama.cpp/issues/31780) Eval bug: Nemotron Labs Dory model not supported with llama.cpp `bug-unconfirmed`
- [#31777](https://github.com/ggml-org/llama.cpp/issues/31777) Eval bug: [Vulkan] Windows VIDEO_TDR_FAILURE (0x116) during Intel Arc multi-GPU inference; reduced micro-batch size avoids crash `bug-unconfirmed`

#### 🔒 Closed Issues
- [#20697](https://github.com/ggml-org/llama.cpp/issues/20697) Feature Request: Disk-based context checkpoint offloading (`--cache-disk`)
- [#27097](https://github.com/ggml-org/llama.cpp/issues/27097) Misc. bug: Vulkan - slow token generation with AMD DGPU Resizable BAR disabled
- [#26381](https://github.com/ggml-org/llama.cpp/issues/26381) Generation bug: The model produced output that does not match the expected peg-native format
- [#28241](https://github.com/ggml-org/llama.cpp/issues/28241) Eval bug: CUDA "illegal memory access" with -cmoe on Turing (sm_75) at exactly 94 prompt tokens
- [#28843](https://github.com/ggml-org/llama.cpp/issues/28843) Feature Request: Vulkan: retune coopmat/MMQ tiles for RDNA3.5 / Strix Halo prefill
- [#29262](https://github.com/ggml-org/llama.cpp/issues/29262) Feature Request: Add a think level directly in the UX like Hermes Agent
- [#29289](https://github.com/ggml-org/llama.cpp/issues/29289) Feature Request: Independent `bash-completion` for each executable
- [#31756](https://github.com/ggml-org/llama.cpp/issues/31756) Compile bug: CUDA11 sm_50 fails in lightning-indexer.cu
- [#29251](https://github.com/ggml-org/llama.cpp/issues/29251) Qwen3-VL: mtmd vision embeddings carry ~5× HF precision-floor noise → reproducible accuracy drop vs transformers (quant/backend/version-independent)
- [#29252](https://github.com/ggml-org/llama.cpp/issues/29252) Misc. bug: CPU f32 GELU uses GGML_GELU_FP16, loses precision
- [#29264](https://github.com/ggml-org/llama.cpp/issues/29264) Feature Request: Add /think command to control reasoning and hide <think> tags
- [#31823](https://github.com/ggml-org/llama.cpp/issues/31823) Misc. bug: SYCL and Flash Attention problem / warnings
- [#30323](https://github.com/ggml-org/llama.cpp/issues/30323) perf: pooled embeddings context copies full-vocab logits to host on every decode (1.55x slower GPU embedding with Qwen3-Embedding)
- [#31778](https://github.com/ggml-org/llama.cpp/issues/31778) Feature Request: Kimi-K3.1(-Pro) model support
- [#31774](https://github.com/ggml-org/llama.cpp/issues/31774) Discussion: Possible fast paths for greedy and draft sampling
- [#31773](https://github.com/ggml-org/llama.cpp/issues/31773) Proposal: Investigate speculative decoding checkpoint initialization
- [#31772](https://github.com/ggml-org/llama.cpp/issues/31772) Proposal: Configurable resource limits for sequence-state I/O
- [#31771](https://github.com/ggml-org/llama.cpp/issues/31771) Discussion: KV capacity admission, slot restore, and per-sequence windowing
- [#31770](https://github.com/ggml-org/llama.cpp/issues/31770) Proposal: gfx906 MMVQ decode and fused glue kernels
- [#31769](https://github.com/ggml-org/llama.cpp/issues/31769) Proposal: Quantized-KV GQA flash attention for AMD gfx906 (MI50)
- [#31768](https://github.com/ggml-org/llama.cpp/issues/31768) Proposal: BF16 wire representation for HIP AllReduce in two-GPU tensor split
- [#31767](https://github.com/ggml-org/llama.cpp/issues/31767) Proposal: FastMTP speculative draft graph and scatter
- [#31766](https://github.com/ggml-org/llama.cpp/issues/31766) Proposal: CUDA GQA flash attention for q8_0 K / q4_0 V
- [#31765](https://github.com/ggml-org/llama.cpp/issues/31765) Proposal: Optimized gfx906 (MI50) decode kernels
- [#31690](https://github.com/ggml-org/llama.cpp/issues/31690) Android
- [#30938](https://github.com/ggml-org/llama.cpp/issues/30938) Eval bug: terminate called after throwing an instance of 'common_json_error'

### Ollama (`ollama/ollama`)

**Stars:** 186,154 · **Open issues:** 4,603 · **Last push:** <1h ago

On November 7, 2026, Ollama saw a version bump to llama.cpp, now at b12177, alongside significant improvements in memory efficiency for Qwen3.8 and the addition of CUDA 13.5 for ARM64 systems. Key merged pull requests included fixes for routing issues with Claude Code, as well as the incorporation of Quock into the Mobile community integrations. However, the day was not without challenges, as a critical issue emerged regarding account billing glitches, specifically a $20 charge on a cancelled account, which is drawing attention from users. Additionally, there were reports of the "llama-server" runner failing to terminate at keep_alive expiration, indicating potential performance concerns.

#### ✅ Merged PRs
- [#19587](https://github.com/ollama/ollama/pull/19587) launch: fix Claude Code routing and retired model errors
- [#18078](https://github.com/ollama/ollama/pull/18078) MLX: make Qwen3.8 Flash Next memory efficient
- [#19580](https://github.com/ollama/ollama/pull/19580) windows: add CUDA 13.5 and SM 103 for ARM64
- [#19361](https://github.com/ollama/ollama/pull/19361) README: add Quock to Mobile community integrations
- [#19576](https://github.com/ollama/ollama/pull/19576) llama.cpp: version bump b12177

#### 🐛 New Issues
- [#19577](https://github.com/ollama/ollama/issues/19577) Ollama fails to terminate idle "llama-server" runner at keep_alive expiration `bug` 💬2
- [#19591](https://github.com/ollama/ollama/issues/19591) CRITICAL: Account Billing Glitch / Charged $20 on Cancelled Account `bug`
- [#19589](https://github.com/ollama/ollama/issues/19589) ollama-vulkan-fix `bug`
- [#19566](https://github.com/ollama/ollama/issues/19566) MLX support for dense Nemotron / Luciole Safetensors models `model` `mlx`

#### 🔒 Closed Issues
- [#4165](https://github.com/ollama/ollama/issues/4165) `OLLAMA_NUM_PARALLEL` and multi-modal models lead to `failed processing images` error
- [#7135](https://github.com/ollama/ollama/issues/7135) use the macOS electron app for Windows and Linux

### LiteLLM (`BerriAI/litellm`)

**Stars:** 62,848 · **Open issues:** 5,703 · **Last push:** <1h ago

Today, LiteLLM released version 1.108.2, the latest Long Term Support (LTS) version, which includes crucial updates for stability and performance. Key merged changes include enhancements to guardrails and cost management, such as fixing deployment input cost handling for xAI image costs and syncing prices for various models including Kimi K3.1. Additionally, there was a notable fix addressing issues with real-time guardrails on Nova Sonic sessions. Among the new issues reported, a critical bug (#50434) was raised regarding intermittent 503 errors or APIConnectionErrors for Gemini requests.

#### 🚀 New Releases
- [v1.108.2](https://github.com/BerriAI/litellm/releases/tag/v1.108.2) 1.108.2 (LTS)

#### ✅ Merged PRs
- [#50490](https://github.com/BerriAI/litellm/pull/50490) fix(xai): honor deployment input_cost_per_pixel for xAI image costs
- [#50481](https://github.com/BerriAI/litellm/pull/50481) feat(xai): bill image calls from cost_in_usd_ticks and add grok-imagine-image-2.0 resolution prices
- [#50457](https://github.com/BerriAI/litellm/pull/50457) fix(bedrock): forward Codex agent messages that carry encrypted content intact
- [#50463](https://github.com/BerriAI/litellm/pull/50463) fix(guardrails): backport #50300 to lts/1.108.x
- [#50449](https://github.com/BerriAI/litellm/pull/50449) fix(bedrock): treat an empty api_base or runtime endpoint as unset on lts/1.108.x
- [#49986](https://github.com/BerriAI/litellm/pull/49986) refactor(typing): clear about 1,100 basedpyright Any errors across 303 files
- [#50373](https://github.com/BerriAI/litellm/pull/50373) fix(otel): seed request metadata baggage for team-only OTel v2 destinations
- [#50319](https://github.com/BerriAI/litellm/pull/50319) feat(videos): add first-class OpenRouter video request fields
- [#50476](https://github.com/BerriAI/litellm/pull/50476) fix(wandb): sync CoreWeave Forge prices and add DeepSeek V4.1-Flash-1017
- [#50477](https://github.com/BerriAI/litellm/pull/50477) fix(baseten): sync Kimi K3.1 Pro output limit
- [#50474](https://github.com/BerriAI/litellm/pull/50474) test(routing): expect /v1/responses to pin the served deployment for an hour after #50321
- [#50451](https://github.com/BerriAI/litellm/pull/50451) fix(bedrock): sync published Kimi K3.1 Highspeed prices
- [#50468](https://github.com/BerriAI/litellm/pull/50468) fix(gemini): sync documented model successors
- [#50443](https://github.com/BerriAI/litellm/pull/50443) feat(ui): format dashboard numbers, money and dates through i18next
- [#50453](https://github.com/BerriAI/litellm/pull/50453) test(e2e): follow the Aria sidebar move and the Skills Hub rename in UI specs
- [#50300](https://github.com/BerriAI/litellm/pull/50300) fix(guardrails): stop model-level post_call guardrails from checking a proxy response twice
- [#50253](https://github.com/BerriAI/litellm/pull/50253) fix(usage): keep spend when metadata lookups hit database failures
- [#50452](https://github.com/BerriAI/litellm/pull/50452) fix(cost-map): jais-30b-chat and jais-13b-chat prices were per 1K tokens
- [#50318](https://github.com/BerriAI/litellm/pull/50318) feat(proxy): serve Codex its own release's model catalog, fetched from GitHub
- [#49833](https://github.com/BerriAI/litellm/pull/49833) fix(bedrock): run realtime guardrails on Nova Sonic sessions
- [#50284](https://github.com/BerriAI/litellm/pull/50284) feat(guardrails): add mcp_block_behavior to raise 400 on MCP tool blocks
- [#50350](https://github.com/BerriAI/litellm/pull/50350) fix(ui): stop parsing formatted dates and spend back into values
- [#50407](https://github.com/BerriAI/litellm/pull/50407) feat(router): add the Switchyard stage router as an auto router strategy
- [#50436](https://github.com/BerriAI/litellm/pull/50436) chore(model_prices): rolling registry audit 2026-11-06
- [#50267](https://github.com/BerriAI/litellm/pull/50267) fix(responses): backport json_object system prompt in input to lts/1.108.x (#49957)
- [#50437](https://github.com/BerriAI/litellm/pull/50437) chore: bump litellm-enterprise 0.1.81 -> 0.1.83, litellm-proxy-extras 0.4.112 -> 0.4.114, litellm 1.109.0 -> 1.110.0
- [#50280](https://github.com/BerriAI/litellm/pull/50280) fix: backport #46870, #46984 and #47100 to lts/1.108.x
- [#49851](https://github.com/BerriAI/litellm/pull/49851) fix(router): count embedding batches per input in pre-call checks
- [#50343](https://github.com/BerriAI/litellm/pull/50343) test(bedrock): expect native output on Opus 4.8 profiles after #50222
- [#50430](https://github.com/BerriAI/litellm/pull/50430) fix(azure): sync speech retirement dates and sources
- [#50145](https://github.com/BerriAI/litellm/pull/50145) feat(model-hub): show each deployment's full prices in the model hub
- [#50323](https://github.com/BerriAI/litellm/pull/50323) feat(tags): reset a tag's spend through /tag/update
- [#50429](https://github.com/BerriAI/litellm/pull/50429) fix(gemini): correct Embedding 2 Preview shutdown date
- [#50419](https://github.com/BerriAI/litellm/pull/50419) chore: remove paragraph-ending period restriction
- [#50348](https://github.com/BerriAI/litellm/pull/50348) fix(mcp): backport #48931 to lts/1.108.x
- [#50416](https://github.com/BerriAI/litellm/pull/50416) feat(router-core): derive serialize on router events
- [#50336](https://github.com/BerriAI/litellm/pull/50336) fix(responses): map streamed flex_unavailable errors to 429 not 500
- [#50418](https://github.com/BerriAI/litellm/pull/50418) test(spend): drive the TTL-preserving token increment through the native counter increments
- [#50221](https://github.com/BerriAI/litellm/pull/50221) feat(bedrock): default to native structured output on Opus 5.5, Fable 5.1, Sonnet 5 and Haiku 5.5
- [#50392](https://github.com/BerriAI/litellm/pull/50392) fix(vertex_ai): backport #50255 to lts/1.108.x
- [#50410](https://github.com/BerriAI/litellm/pull/50410) test(cost): sync Azure GPT flex price fields for gpt-6-astra, gpt-6-luna and gpt-6.1-sol
- [#50360](https://github.com/BerriAI/litellm/pull/50360) fix(bedrock): backport Converse service_tier fix to lts/1.108.x
- [#50362](https://github.com/BerriAI/litellm/pull/50362) fix(bedrock): backport #43086 to lts/1.108.x
- [#50326](https://github.com/BerriAI/litellm/pull/50326) fix(backport): bring #50132, #50218, #50274 and #50276 onto lts/1.108.x
- [#50324](https://github.com/BerriAI/litellm/pull/50324) fix(proxy): stop /tag/update 500 when the body carries the tag's budget_id
- [#50294](https://github.com/BerriAI/litellm/pull/50294) fix(model-map): add verified Mistral retirement dates
- [#50402](https://github.com/BerriAI/litellm/pull/50402) chore(cost-map): add the openai o1 deprecation source from the deprecations page
- [#38086](https://github.com/BerriAI/litellm/pull/38086) fix(chatgpt): forward text and max_output_tokens to the Codex backend
- [#48385](https://github.com/BerriAI/litellm/pull/48385) fix(anthropic)!: do not surface server_tool_use as client tool_calls
- [#50073](https://github.com/BerriAI/litellm/pull/50073) fix(bedrock): drop another model's signed thinking when replaying to a non-Claude Converse target
- [#50315](https://github.com/BerriAI/litellm/pull/50315) feat: add OpenRouter-style -latest model aliases for first-party providers
- [#50381](https://github.com/BerriAI/litellm/pull/50381) fix(anthropic): preserve Azure Responses reasoning replay (#50024)
- [#50375](https://github.com/BerriAI/litellm/pull/50375) fix(anthropic): default Responses JSON-schema strictness (#50023)
- [#50386](https://github.com/BerriAI/litellm/pull/50386) build(deps): keep Python 3.10 osv-scan suppressions until 2027-02-01
- [#50374](https://github.com/BerriAI/litellm/pull/50374) fix(proxy): discover models for LiteLLM Gateway wildcard providers
- [#49874](https://github.com/BerriAI/litellm/pull/49874) feat(proxy): hash UI passwords with PBKDF2 in FIPS mode
- [#50170](https://github.com/BerriAI/litellm/pull/50170) feat(redis): serve the proxy's common Redis call with Rust stores
- [#49204](https://github.com/BerriAI/litellm/pull/49204) build(deps): bump oauthlib to 4.0.1 and lock filelock 4.2.4 on 3.11+ and 3.20.3 on 3.10 to clear osv-scan
- [#50371](https://github.com/BerriAI/litellm/pull/50371) fix(ui): support custom model provider logos (#50056)
- [#50369](https://github.com/BerriAI/litellm/pull/50369) fix(ui): simplify the collapsed workspace dropdown
- [#50255](https://github.com/BerriAI/litellm/pull/50255) fix(vertex_ai): honor vertex_location for the Cloud Text-to-Speech endpoint
- [#50366](https://github.com/BerriAI/litellm/pull/50366) test(e2e): wait for saved MCP credentials before deleting the server
- [#43086](https://github.com/BerriAI/litellm/pull/43086) fix(bedrock): forward the per-turn-control beta to Bedrock Invoke
- [#50344](https://github.com/BerriAI/litellm/pull/50344) test(bedrock_mantle): expect the generic unsupported-param 400 for temperature on fixed-sampling Claude
- [#50314](https://github.com/BerriAI/litellm/pull/50314) feat(ui): set tpm_limit and rpm_limit on tags from the Admin UI
- [#50334](https://github.com/BerriAI/litellm/pull/50334) chore(cost-map): source fireworks deprecations and replacement models
- [#47877](https://github.com/BerriAI/litellm/pull/47877) fix(terraform): drop out-of-band deleted litellm_key from state and treat its 404 on delete as gone
- [#50297](https://github.com/BerriAI/litellm/pull/50297) fix(router): backport #48470 to lts/1.108.x
- [#50312](https://github.com/BerriAI/litellm/pull/50312) refactor(ui): move remaining outlier text onto i18n
- [#50325](https://github.com/BerriAI/litellm/pull/50325) fix(audio-transcription): backport #50137 to lts/1.108.x
- [#49817](https://github.com/BerriAI/litellm/pull/49817) test(e2e): add a Codex row that calls a local MCP tool on a first and a resumed turn
- [#49908](https://github.com/BerriAI/litellm/pull/49908) feat(team): let default_team_params attach access_group_ids to every new team
- [#49544](https://github.com/BerriAI/litellm/pull/49544) feat(spend-logs): opt-in latest_turn mode that stores only the current turn of stateless requests
- [#49825](https://github.com/BerriAI/litellm/pull/49825) feat(proxy): give Codex accurate model entries for every model in /v1/models
- [#50169](https://github.com/BerriAI/litellm/pull/50169) feat(redis): rust Redis foundation with no runtime change
- [#47496](https://github.com/BerriAI/litellm/pull/47496) feat(proxy)!: only let clients pick S3 buckets the admin allowed

#### 🐛 New Issues
- [#50434](https://github.com/BerriAI/litellm/issues/50434) [Bug]: Gemini requests intermittently fail with 503 or APIConnectionError `bug` `llm translation` 💬1
- [#50414](https://github.com/BerriAI/litellm/issues/50414) [Bug / Feature]: Duplicate OpenTelemetry GenAI CLIENT spans & metrics when used with instrumented agent frameworks `llm translation` 💬1
- [#50390](https://github.com/BerriAI/litellm/issues/50390) [Bug]: safeguards classifier always fails with "'tuple' object does not support item assignment" when the classifier model has message-level cache_control_injection_points `llm translation` `claude code` 💬1
- [#50482](https://github.com/BerriAI/litellm/issues/50482) [Feature]: Cascade routing: answer with a cheap model group, check the answer, escalate to a strong group `llm translation`
- [#50475](https://github.com/BerriAI/litellm/issues/50475) [Bug]: Accounting metrics scan all retained SpendLogDelivery rows on every spend flush
- [#50465](https://github.com/BerriAI/litellm/issues/50465) [Bug]: post_call guardrail redaction doesn't reach streamed deltas with streaming_buffer_until_moderated `llm translation`
- [#50444](https://github.com/BerriAI/litellm/issues/50444) [Bug]: Complexity Router: Claude Code background requests overwrite subagent user_turn tier pins `claude code`
- [#50411](https://github.com/BerriAI/litellm/issues/50411) probe (closing)
- [#50405](https://github.com/BerriAI/litellm/issues/50405) [Suggestion]: An HN badge might help on the Readme `enhancement`
- [#50394](https://github.com/BerriAI/litellm/issues/50394) [Bug]: azure_ai/Cohere-Embed-V5-Fast and -Pro embeddings return 404 on Azure AI Foundry, and the cohere provider can't use Entra ID on the route they need `bug` `llm translation`
- [#50359](https://github.com/BerriAI/litellm/issues/50359) [Feature]: feat(ui): internationalize left sidebar menu labels `enhancement`

#### 🔒 Closed Issues
- [#25869](https://github.com/BerriAI/litellm/issues/25869) [Bug]: `stream_chunk_builder` corrupts Gemini `server_side_tool_invocations` and `thought_signatures` in streaming, causing "Corrupted tool call context" on follow-up turns
- [#33764](https://github.com/BerriAI/litellm/issues/33764) [Bug]: transcription with `response_format=json` fails pydantic validation on both SDK and proxy
- [#49038](https://github.com/BerriAI/litellm/issues/49038) Interactions spec canary is red
- [#35626](https://github.com/BerriAI/litellm/issues/35626) [Bug]: Embedding list[str] input causes router pre-call token-count exception
- [#38085](https://github.com/BerriAI/litellm/issues/38085) [Bug]: chatgpt/* drops response_format and rejects a string input, because allowed_keys omits "text"
- [#33921](https://github.com/BerriAI/litellm/issues/33921) [Feat]: Add native API support for Kimi K3 (Moonshot AI), Inkling, and Tinker platform
- [#35570](https://github.com/BerriAI/litellm/issues/35570) [Bug]: Reservation reseed marks actual cost applied without incrementing it
- [#49969](https://github.com/BerriAI/litellm/issues/49969) [Bug]: Bedrock Converse replays reasoningText.signature to non-Anthropic models (GLM 5.3) causing Bad Request
- [#48384](https://github.com/BerriAI/litellm/issues/48384) [Bug]: Anthropic server_tool_use (web search) is returned as a pending tool_call on /v1/chat/completions, so agent clients loop
- [#50219](https://github.com/BerriAI/litellm/issues/50219) [Bug]: vertex_ai text-to-speech ignores `vertex_location` when building the endpoint (always global unless `api_base` is the full URL)
- [#46999](https://github.com/BerriAI/litellm/issues/46999) [Bug]: /tag/update 500s "BudgetNewRequest() got multiple values for keyword argument 'budget_id'" on any tag that has a budget
- [#50024](https://github.com/BerriAI/litellm/issues/50024) [Bug]: Azure Messages-to-Responses detour drops encrypted reasoning; follow-up to #40451 / LIT-7419
- [#29638](https://github.com/BerriAI/litellm/issues/29638) [Bug]: Proxy double-logs image_generation (2 callback events per call); SDK logs once
- [#35543](https://github.com/BerriAI/litellm/issues/35543) [Bug]: async_pre_call_hook `str` return is unreachable on /v1/chat/completions (call_type is `acompletion`)
- [#35544](https://github.com/BerriAI/litellm/issues/35544) [Bug]: RejectedRequestError message prefixes leak into completion content
- [#46905](https://github.com/BerriAI/litellm/issues/46905) [Bug]: Bedrock Mantle GPT-5.6 entries still use mode responses
- [#49736](https://github.com/BerriAI/litellm/issues/49736) [Bug]: streamed Responses API flex_unavailable error maps to 500 InternalServerError instead of 429
- [#50023](https://github.com/BerriAI/litellm/issues/50023) [Bug]: Messages-to-Responses bridge defaults JSON schema strictness to false while Messages-to-Chat uses true
- [#35429](https://github.com/BerriAI/litellm/issues/35429) [Bug][Proxy]: Container pagination parameters are not forwarded
- [#35430](https://github.com/BerriAI/litellm/issues/35430) [Bug][Proxy]: Vector store routes ignore request model and embedded File ID routing
- [#35457](https://github.com/BerriAI/litellm/issues/35457) [Bug]: master-key-only proxy returns 500 instead of 401 on auth failure (unconditional `import prisma` in exception classifier)
- [#35459](https://github.com/BerriAI/litellm/issues/35459) [Bug]: LowestCostLoggingHandler.log_success_event raises AttributeError when litellm_params["model_info"] is explicitly None (usage-based-routing-v2)
- [#35462](https://github.com/BerriAI/litellm/issues/35462) [Bug]: PATCH /model/{id}/update cannot delete a litellm_params field - omitting or nulling a key both preserve the old value
- [#35469](https://github.com/BerriAI/litellm/issues/35469) Litellm not opening in command prompt
- [#35502](https://github.com/BerriAI/litellm/issues/35502) [Bug]: SSRF overrides from DB backed config are not reset when keys are removed
- [#49865](https://github.com/BerriAI/litellm/issues/49865) [Bug]: Azure AI Claude Mythos 5.1 has no cost-map entry and records zero spend
- [#41624](https://github.com/BerriAI/litellm/issues/41624) [Feature]: API endpoint to manually reset a Tag's spend/budget
- [#50056](https://github.com/BerriAI/litellm/issues/50056) Can the provider logo in Model Management be customized for models routed through an OpenAI/Anthropic-compatible gateway?
- [#49881](https://github.com/BerriAI/litellm/issues/49881) `POST /customer/block` blocks the customer, then returns HTTP 500
- [#35663](https://github.com/BerriAI/litellm/issues/35663) [Bug]: ollama_chat streaming tool calls end with finish_reason stop instead of tool_calls (tool_calls arrive in a chunk separate from the done chunk)
- [#50411](https://github.com/BerriAI/litellm/issues/50411) probe (closing)
- [#48365](https://github.com/BerriAI/litellm/issues/48365) [Bug]: Azure OpenAI web_search fee billed at OpenAI's $0.01 per request, or $0 on some azure/* models, instead of the Grounding with Bing rate

### Unsloth (`unslothai/unsloth`)

**Stars:** 79,133 · **Open issues:** 481 · **Last push:** <1h ago

On November 7, 2026, Unsloth released v0.1.916-beta, featuring major performance enhancements including faster typing and search in long chats, rapid image and video loading, and two-GPU processing for media generation. The update also introduces separate browsers for each chat and a floating browser window, alongside optimizations for the Glass theme that improve rendering and eliminate blur effects. Significant merged pull requests focus on reducing restyling during dialog interactions and improving long-chat performance on Linux with quicker history loading. Among new issues, a notable bug (#16892) has emerged wherein the Unsloth Studio backend crashes when loading Krea 2 Turbo on Windows, highlighting the ongoing challenges in compatibility across platforms.

#### 🚀 New Releases
- [v0.1.916-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.916-beta) Large Performance Fixes

#### ✅ Merged PRs
- [#16830](https://github.com/unslothai/unsloth/pull/16830) Studio: preserve S3 dataset files with colliding names
- [#16978](https://github.com/unslothai/unsloth/pull/16978) Studio CI: tighten long-chat gate allowances after the :has() rewrite
- [#16961](https://github.com/unslothai/unsloth/pull/16961) Studio: stop WebKit restyling the whole page when dialogs, menus and the browser pane open or close
- [#16938](https://github.com/unslothai/unsloth/pull/16938) Studio: stop menus, sidebar and browser pane from restyling the whole chat
- [#16957](https://github.com/unslothai/unsloth/pull/16957) Studio: keep Glass cheap on the Linux app by dropping its live blur except the sidebar's
- [#16931](https://github.com/unslothai/unsloth/pull/16931) Studio CI: long-chat gate measures every interactive area under every appearance mode
- [#16942](https://github.com/unslothai/unsloth/pull/16942) Studio: blur the glass Settings dialog on its own layer so scrolling it stays cheap
- [#16883](https://github.com/unslothai/unsloth/pull/16883) Studio: classify MLX repos by name or model-card tag everywhere
- [#16713](https://github.com/unslothai/unsloth/pull/16713) Studio: preserve Unicode across continued XLS strings
- [#16821](https://github.com/unslothai/unsloth/pull/16821) Studio: refuse MLX prompts longer than the served context
- [#16712](https://github.com/unslothai/unsloth/pull/16712) Studio: decode escaped spreadsheet text during RAG indexing
- [#16924](https://github.com/unslothai/unsloth/pull/16924) Studio: load long chat history faster on Linux by mounting parked history in larger steps
- [#16914](https://github.com/unslothai/unsloth/pull/16914) Studio: release a streamed encoder's safetensors mapping once its weights are pinned
- [#16921](https://github.com/unslothai/unsloth/pull/16921) Studio: keep Glass fast on WebKit by giving glass surface contents their own layers
- [#16910](https://github.com/unslothai/unsloth/pull/16910) Studio diffusion: reuse the early quant probe's result instead of spawning a second child
- [#16917](https://github.com/unslothai/unsloth/pull/16917) Studio: pre-seed the float specialisations of an image load's first compiled render
- [#16918](https://github.com/unslothai/unsloth/pull/16918) Studio: warm the compile workers and Triton / inductor keys during a load that compiles inline
- [#16919](https://github.com/unslothai/unsloth/pull/16919) Studio: restore WebKitGTK offscreen code fences in batches and on any pointer release
- [#16874](https://github.com/unslothai/unsloth/pull/16874) Studio: merge LoRA and LoKR adapters into ComfyUI-quantized weights
- [#16902](https://github.com/unslothai/unsloth/pull/16902) Studio: stop dialogs and menus from restyling the whole chat on open and close
- [#16911](https://github.com/unslothai/unsloth/pull/16911) Studio GGUF: keep the stock Q8_0 forward on torch below 2.7
- [#16920](https://github.com/unslothai/unsloth/pull/16920) Bump install.sh / install.ps1 pins to unsloth>=2026.11.3
- [#16854](https://github.com/unslothai/unsloth/pull/16854) Studio: reduce long-chat panel and scrolling lag on Linux
- [#16782](https://github.com/unslothai/unsloth/pull/16782) Reduce scrolling lag in long chats by bounding offscreen reply painting
- [#16890](https://github.com/unslothai/unsloth/pull/16890) Studio: Element outline setting, outlined light glass, Transparent glass with strength as opacity, glass Show on, and glass on pages without a background
- [#16722](https://github.com/unslothai/unsloth/pull/16722) Studio: wait for a pending embedding model download instead of failing every linked-folder file
- [#16823](https://github.com/unslothai/unsloth/pull/16823) Studio: keep fine-tuning job pages complete when a batch starts
- [#16725](https://github.com/unslothai/unsloth/pull/16725) fix(studio): preserve Unicode separators in S3 JSON Lines transcripts
- [#16909](https://github.com/unslothai/unsloth/pull/16909) Chat UI: let the floating monitor settle after the viewport restore before dragging it
- [#16908](https://github.com/unslothai/unsloth/pull/16908) Tests: undo the Unsloth load's PEFT LoRA forward swap after the probe memo tests
- [#16887](https://github.com/unslothai/unsloth/pull/16887) Studio: fill the H3 conditioner's pinned arenas once, before registering (33% faster cold pin)
- [#16879](https://github.com/unslothai/unsloth/pull/16879) Studio: prequant fingerprint check on a thread pool, zero-copy (13x faster first load verify)
- [#16886](https://github.com/unslothai/unsloth/pull/16886) Studio LTX-2.5: read the hosted int8 checkpoint as native Linears when the DiT is offloaded
- [#16882](https://github.com/unslothai/unsloth/pull/16882) Studio diffusion: overlap the quant scheme probe with the planner import on a cold image load
- [#16905](https://github.com/unslothai/unsloth/pull/16905) Studio: fix the browser use bar's text size and button order
- [#16907](https://github.com/unslothai/unsloth/pull/16907) Studio: smaller sidebar logo on web, desktop sidebar header back to its pre-#16775 look
- [#16903](https://github.com/unslothai/unsloth/pull/16903) Document browser use and sandboxing in the README
- [#16904](https://github.com/unslothai/unsloth/pull/16904) Studio: reorder cloud providers in the connection picker
- [#16891](https://github.com/unslothai/unsloth/pull/16891) Studio Qwen-Image-2.1: fused q/k RMSNorm + RoPE and broadcast modulation for eager renders on ROCm
- [#16797](https://github.com/unslothai/unsloth/pull/16797) Studio diffusion: settle device memory once per video plan, wake sd.cpp polls on server output
- [#16833](https://github.com/unslothai/unsloth/pull/16833) Keep gradient checkpointing settings working on transformers 5.23
- [#16873](https://github.com/unslothai/unsloth/pull/16873) Studio: compile Anima's transformer blocks
- [#16898](https://github.com/unslothai/unsloth/pull/16898) Backend tests: importorskip the unsloth submodule a test uses, not the stubbable package
- [#16761](https://github.com/unslothai/unsloth/pull/16761) Match the Chat with files panel and Add files button to the glass theme
- [#16818](https://github.com/unslothai/unsloth/pull/16818) Check a dataset for bad rows and over-length examples before training
- [#16829](https://github.com/unslothai/unsloth/pull/16829) Studio: make links in the collapsed update notes clickable
- [#16868](https://github.com/unslothai/unsloth/pull/16868) Report incomplete Studio streams in the CLI
- [#16895](https://github.com/unslothai/unsloth/pull/16895) Studio: start Blender MCP on mcp 2
- [#16819](https://github.com/unslothai/unsloth/pull/16819) Studio: limit model download speed
- [#16843](https://github.com/unslothai/unsloth/pull/16843) Studio: ask to update Codex when it is too old for unsloth start codex
- [#14180](https://github.com/unslothai/unsloth/pull/14180) Studio: test that the picker keeps a Hub search tab when a local model lands
- [#16840](https://github.com/unslothai/unsloth/pull/16840) Studio: ask before Python runs blocked shell commands via __import__
- [#16885](https://github.com/unslothai/unsloth/pull/16885) Studio chat UI test: wait for the monitor size limits before the resize, and report them
- [#16884](https://github.com/unslothai/unsloth/pull/16884) Studio GGUF: fuse Q8_0 dequant and cast into one kernel (LTX-2.5 Q8_0 denoise -12%, bit-identical)
- [#16793](https://github.com/unslothai/unsloth/pull/16793) Load path: read an adapter's base config through the probe memo, skip the remote mapper for unknown LoRA bases in Studio
- [#16800](https://github.com/unslothai/unsloth/pull/16800) Studio: decode the Transformers chat stream incrementally instead of re-decoding the current line per token
- [#16839](https://github.com/unslothai/unsloth/pull/16839) Studio: make the claude mcp add command work in every project
- [#16848](https://github.com/unslothai/unsloth/pull/16848) Unsloth Studio: keep chat search fast on long histories by not shipping tool images and widget seeds to the index
- [#16796](https://github.com/unslothai/unsloth/pull/16796) install.ps1: delete the committed venv rollback in a background process
- [#16896](https://github.com/unslothai/unsloth/pull/16896) RL class source: parse the code above a class with ast.parse, not a dynamic compile()
- [#16812](https://github.com/unslothai/unsloth/pull/16812) Studio RAG: batch llama-server token counts and encode the auto-inject query once
- [#16697](https://github.com/unslothai/unsloth/pull/16697) TextPreprocessor.add_structure_tokens: leave fenced code blocks alone
- [#16795](https://github.com/unslothai/unsloth/pull/16795) Studio: index FK child columns, partial index for the run lease sweep, keep the inventory clean on Deep Research start
- [#16806](https://github.com/unslothai/unsloth/pull/16806) RL patch pass: skip the whole-module ast.parse when reading trainer class source on Python < 3.13
- [#15775](https://github.com/unslothai/unsloth/pull/15775) Legacy CLI: accept --dtype None on every backend, not only MLX
- [#16844](https://github.com/unslothai/unsloth/pull/16844) Studio: let unsloth start dsh install DeepSeek Harness on Node 22
- [#16872](https://github.com/unslothai/unsloth/pull/16872) Studio: run Chroma's ComfyUI fp8 files in fp8, as ComfyUI does
- [#16425](https://github.com/unslothai/unsloth/pull/16425) get_chat_template: apply mapping when the role key is not renamed
- [#16834](https://github.com/unslothai/unsloth/pull/16834) Studio: update the NPU runtime, harden its pin updates, and polish the NPU UI
- [#16828](https://github.com/unslothai/unsloth/pull/16828) Studio: resume paused and interrupted model downloads on Windows
- [#16794](https://github.com/unslothai/unsloth/pull/16794) Studio audio analyze: screen the true peak in float32 and convolve only the candidate outputs
- [#16847](https://github.com/unslothai/unsloth/pull/16847) Studio: read unread scheduled replies aloud when opened
- [#16832](https://github.com/unslothai/unsloth/pull/16832) Studio: keep fine-tuning jobs in order when a batch starts ahead of them
- [#16841](https://github.com/unslothai/unsloth/pull/16841) Studio: show the OpenAI thinking summary once
- [#16790](https://github.com/unslothai/unsloth/pull/16790) Studio: validate each dataset snapshot once per provenance attestation
- [#16875](https://github.com/unslothai/unsloth/pull/16875) Studio MiniMax-H3: opt-in FlashInfer SM120 fused block kernels for FP8 and NVFP4
- [#16792](https://github.com/unslothai/unsloth/pull/16792) Studio: build the video backend off the event loop in /video/status
- [#16827](https://github.com/unslothai/unsloth/pull/16827) Studio: round the MLX warmup and eval ratios up like transformers
- [#16783](https://github.com/unslothai/unsloth/pull/16783) Studio: probe STT Transformers availability off the event loop
- [#16852](https://github.com/unslothai/unsloth/pull/16852) Studio: draw nothing for the glass lens when it is Off (glass 1.4 to 2.1x faster without GPU rendering)
- [#16801](https://github.com/unslothai/unsloth/pull/16801) Studio: CI gate that fails when typing in a long chat gets slower as the chat grows
- [#16870](https://github.com/unslothai/unsloth/pull/16870) Context parallel: accept Unsloth's fast Qwen3 attention and compiled FastModel attention
- [#16822](https://github.com/unslothai/unsloth/pull/16822) Pipeline parallel: refuse the MoE router aux loss over several micro-batches at Trainer init
- [#16656](https://github.com/unslothai/unsloth/pull/16656) Fix slow typing in long chats on Windows
- [#16831](https://github.com/unslothai/unsloth/pull/16831) Studio: stop read aloud from waiting on a model catalog rescan
- [#16842](https://github.com/unslothai/unsloth/pull/16842) Studio: clear the API key when the connection type changes
- [#16880](https://github.com/unslothai/unsloth/pull/16880) Studio: name the runtime and its release in the runtime update card
- [#16862](https://github.com/unslothai/unsloth/pull/16862) Context parallel: give decoder layers no mask inside a CP step so block compile keeps one graph on packed rows
- [#16808](https://github.com/unslothai/unsloth/pull/16808) Studio diffusion: measured activations for Lumina-Image-2.0 (int8 stays resident on 16-24 GB cards, ~3% per render)
- [#16845](https://github.com/unslothai/unsloth/pull/16845) Studio LTX-2.5: keep a streamed denoiser partly resident per request
- [#16804](https://github.com/unslothai/unsloth/pull/16804) Studio LTX-2.5: release the server's cached GPU blocks before an encode, so later prompts stop encoding on the CPU
- [#16846](https://github.com/unslothai/unsloth/pull/16846) Pipeline parallel on CPU: run the chunked cross entropy on the last stage
- [#16871](https://github.com/unslothai/unsloth/pull/16871) Installer mirror test: bound the probe speed by the batch time, not a fixed 1 KiB/s
- [#15703](https://github.com/unslothai/unsloth/pull/15703) Mac CI: run the permission and loaded-models indicator suites alongside the UI suites
- [#16866](https://github.com/unslothai/unsloth/pull/16866) Studio: prompt More menu for Fork and Bookmark, and no composer scrollbar flash
- [#16759](https://github.com/unslothai/unsloth/pull/16759) Studio diffusion: protect the first and last NVFP4 steps by default on sm_100-class cards (W4A16 auto)
- [#16861](https://github.com/unslothai/unsloth/pull/16861) Studio chat UI test: drag the monitor grip again when a native resize stops early
- [#16849](https://github.com/unslothai/unsloth/pull/16849) Studio MiniMax-H3: price the slab compaction against the host reserve so a 16 GiB L4 render is not OOM-killed
- [#16805](https://github.com/unslothai/unsloth/pull/16805) Studio video memory plan: count the forward's headroom before keeping whole-module offload
- [#16859](https://github.com/unslothai/unsloth/pull/16859) Studio: let the floating browser go anywhere, and float per chat

#### 🐛 New Issues
- [#16892](https://github.com/unslothai/unsloth/issues/16892) [Bug] Unsloth Studio backend crashes when loading Krea 2 Turbo on Windows (0xc0000005) `feature request` `bug` 💬2
- [#16912](https://github.com/unslothai/unsloth/issues/16912) [Bug] Sync remaining account-level preferences to server-side storage `feature request` `bug` 💬1
- [#16925](https://github.com/unslothai/unsloth/issues/16925) [Bug] DiffusionGemma multi-GPU: prompts over ~1792 tokens abort the visual server (GGML_ASSERT n_ubatch >= n_tokens) 💬1
- [#16897](https://github.com/unslothai/unsloth/issues/16897) [BUG] beta Update fails `feature request` `bug` 💬1
- [#16899](https://github.com/unslothai/unsloth/issues/16899) [Feature]: Add "Voice Design" (Prompt-to-Voice creation via text description) `feature request`
- [#16867](https://github.com/unslothai/unsloth/issues/16867) [Bug] CLI treats a Studio stream ending before its completion marker as a successful reply 💬1
- [#16878](https://github.com/unslothai/unsloth/issues/16878) Blender MCP fails to start due to MCP SDK 2.3.0 incompatibility in v0.1.915-beta 💬1
- [#16982](https://github.com/unslothai/unsloth/issues/16982) [Bug] studio does not allow searching for models that do not "fit" on system `feature request` `bug`
- [#16980](https://github.com/unslothai/unsloth/issues/16980) [Feature] Add a "Keep all checkpoints" option for when an Image LoRA completes `feature request`
- [#16979](https://github.com/unslothai/unsloth/issues/16979) [Feature] Support custom templates (profiles) for Image-LoRA training settings `feature request`
- [#16967](https://github.com/unslothai/unsloth/issues/16967) [Feature] StrataFlux: Memory-Hierarchy-Native Low-Bit LLM Inference `feature request`
- [#16962](https://github.com/unslothai/unsloth/issues/16962) [Bug] Search icon blurred in model hub `feature request` `bug`
- [#16916](https://github.com/unslothai/unsloth/issues/16916) [Feature] Quantization-Aware Distillation (QAD) for PQ2 Models `feature request`
- [#16913](https://github.com/unslothai/unsloth/issues/16913) Studio chat: an attached file whose content looks like an attachment note is parsed as a second attachment
- [#16900](https://github.com/unslothai/unsloth/issues/16900) [Feature Request] Allow selecting a specific LoRA when clicking "Add LoRA" `feature request`
- [#16894](https://github.com/unslothai/unsloth/issues/16894) [Feature] Way to train more modules of an AI model by cycling the target module every step `feature request`

#### 🔒 Closed Issues
- [#16770](https://github.com/unslothai/unsloth/issues/16770) [Bug] Glass setting not applied consistently across Unsloth Desktop UI
- [#16603](https://github.com/unslothai/unsloth/issues/16603) [Bug] Regression: long conversations cause UI lag (web + desktop)
- [#16699](https://github.com/unslothai/unsloth/issues/16699) [Bug] Chat template for gemma-4-thinking removes reasoning
- [#16820](https://github.com/unslothai/unsloth/issues/16820) [Bug] Glass theme makes entire background blur
- [#16714](https://github.com/unslothai/unsloth/issues/16714) RAG: indexing during an embedding model download fails every file, permanently
- [#15603](https://github.com/unslothai/unsloth/issues/15603) [Feature] Limit model downloading speed
- [#16736](https://github.com/unslothai/unsloth/issues/16736) [Bug] (fix included) Background wallpaper hidden in active chats due to CSS specificity conflict
- [#16816](https://github.com/unslothai/unsloth/issues/16816) [Bug] Crash of Unsloth
- [#16719](https://github.com/unslothai/unsloth/issues/16719) Studio: a Multi-LoRA batch starting during a fine-tuning list request can invalidate a public cursor
- [#16721](https://github.com/unslothai/unsloth/issues/16721) [Bug] Studio S3 audio JSONL preparation fails on Unicode separators inside transcripts
- [#16667](https://github.com/unslothai/unsloth/issues/16667) transformers 5.23 renames gradient checkpointing to activation checkpointing: 4 spots change behaviour
- [#16867](https://github.com/unslothai/unsloth/issues/16867) [Bug] CLI treats a Studio stream ending before its completion marker as a successful reply
- [#16878](https://github.com/unslothai/unsloth/issues/16878) Blender MCP fails to start due to MCP SDK 2.3.0 incompatibility in v0.1.915-beta
- [#16720](https://github.com/unslothai/unsloth/issues/16720) Studio: fine-tuning pagination can skip a job when Multi-LoRA batches start out of order
- [#16810](https://github.com/unslothai/unsloth/issues/16810) [Bug] Download never resumes

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,182 · **Open issues:** 399 · **Last push:** <1h ago

On November 7, 2026, there were no new releases for AIBrix, but several important updates were made through merged pull requests. Notably, PR #3409 addressed a significant bug by ensuring that Redis deadlines for admission and routing reads are honored, while PR #3412 introduced a feature to integrate media lifecycle and output persistence within the openai-frontend module. Additionally, the documentation was improved under PR #3394, clarifying how new claims can be accommodated in the ModelClaim guide. The day also saw the creation of notable issues, including bug reports regarding Redis deadline enforcement on running-request writes and heartbeats (issue #3411), and a new feature request to expose Redis admission and routing fallback counts (issue #3410).

#### ✅ Merged PRs
- [#3394](https://github.com/vllm-project/aibrix/pull/3394) [Docs] Clarify how new claims get room in the ModelClaim guide
- [#3409](https://github.com/vllm-project/aibrix/pull/3409) [Bug] Honor Redis deadlines for admission and routing reads
- [#3412](https://github.com/vllm-project/aibrix/pull/3412) feat(openai-frontend): integrate media lifecycle and output persistence

#### 🐛 New Issues
- [#3410](https://github.com/vllm-project/aibrix/issues/3410) [Feat] Expose Redis admission and routing fallback counts `area/gateway` `kind/feature` 💬2
- [#3411](https://github.com/vllm-project/aibrix/issues/3411) [Bug] Honor Redis deadlines on running-request writes and heartbeats `kind/bug` `area/gateway` 💬2
- [#3413](https://github.com/vllm-project/aibrix/issues/3413) [Bug] LoadEnvFloat accepts NaN and positive infinity, bypassing the KV threshold `kind/bug` `area/gateway` `bug` `triage` 💬2
- [#3414](https://github.com/vllm-project/aibrix/issues/3414) [Bug][ModelClaim] An engine whose EngineCore dies during a wake stays sleeping `kind/bug` `area/runtime` 💬1

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,413 · **Open issues:** 695 · **Last push:** 5h ago

On November 7, 2026, there were no new releases for Semantic Router. However, several important features and fixes were merged, including a bug fix that preserves local configuration on custom management endpoints (#5846) and another that accepts dropping reasoning signatures (#5691). Significant documentation updates included clarifying that local replies reach clients as plain text via Envoy (#5876). Among the newly reported issues, a noteworthy concern is the workflow claim-renew test, which is found to rely on a 30ms wall-clock margin (#5899), indicating potential timing-related challenges within the testing framework. Overall, the day focused on refining existing functionality and addressing critical bugs rather than introducing new version updates.

#### ✅ Merged PRs
- [#5846](https://github.com/vllm-project/semantic-router/pull/5846) [Bug] Preserve local config apply on custom management endpoints
- [#5691](https://github.com/vllm-project/semantic-router/pull/5691) [Bug] Let operators accept dropping reasoning signatures
- [#5876](https://github.com/vllm-project/semantic-router/pull/5876) [Docs] Say that local replies reach clients as Envoy's plain text
- [#5244](https://github.com/vllm-project/semantic-router/pull/5244) [Bug] Reject oversized streamed body chunks before buffering and keep rejection terminal
- [#5690](https://github.com/vllm-project/semantic-router/pull/5690) [Bug] Accept the official async field on Responses tool calls

#### 🐛 New Issues
- [#5899](https://github.com/vllm-project/semantic-router/issues/5899) [Bug] Workflow claim-renew test depends on a 30ms wall-clock margin `bug` `accepted` `in-progress` `wg/agentic-context` 💬3
- [#5900](https://github.com/vllm-project/semantic-router/issues/5900) [Feature] Model runtime: attend without a key mask on unpadded long Decision 3.0 rows `enhancement` `accepted` `wg/router-models-inference-runtime` 💬2
- [#5898](https://github.com/vllm-project/semantic-router/issues/5898) [Bug] System One serving tests race bundle participant registration `bug` `accepted` `in-progress` `wg/router-models-inference-runtime` 💬2
- [#5903](https://github.com/vllm-project/semantic-router/issues/5903) [Feature] Build a use-case-first Semantic Router recipes page `enhancement` `needs-acceptance` `wg/developer-experience-ecosystem` 💬1
- [#5941](https://github.com/vllm-project/semantic-router/issues/5941) [Bug] Model runtime: a burst of equal-state one-question requests encodes the state once per request `needs-acceptance` `wg/router-models-inference-runtime`
- [#5905](https://github.com/vllm-project/semantic-router/issues/5905) [Community] Route PR review requests by owning Working Group `enhancement` `needs-acceptance`
- [#5894](https://github.com/vllm-project/semantic-router/issues/5894) [Bug] Protection release: header values, identity header collisions, lossy metric, Replay and CLI deltas `bug` `needs-acceptance` `wg/mom-routing`

#### 🔒 Closed Issues
- [#5662](https://github.com/vllm-project/semantic-router/issues/5662) [Bug] Preserve local config apply behavior on custom management endpoints
- [#5122](https://github.com/vllm-project/semantic-router/issues/5122) [Bug] Decision 3.0: in-window long inputs CUDA-OOM with a 500 instead of a clean rejection
- [#5616](https://github.com/vllm-project/semantic-router/issues/5616) [Feature] Model runtime: enable CUDA gated-delta fusion without causal-conv1d
- [#5024](https://github.com/vllm-project/semantic-router/issues/5024) [Feature] Add a locked uv environment for the RL model selection trainer
- [#5032](https://github.com/vllm-project/semantic-router/issues/5032) [Bug] Nested parallel skip hides run-wide token and cost ceilings
- [#5262](https://github.com/vllm-project/semantic-router/issues/5262) [Bug] Responses decoding rejects recorded vLLM and SGLang responses on extension fields, reasoning parts, and timestamps
- [#5217](https://github.com/vllm-project/semantic-router/issues/5217) [Bug] Contrastive jailbreak scoring can be inflated when benign embeddings are missing
- [#5278](https://github.com/vllm-project/semantic-router/issues/5278) [Bug] vector_store supported_formats accepts formats with no text extractor
- [#5013](https://github.com/vllm-project/semantic-router/issues/5013) [Feature] Add a locked uv environment for the prompt guard fine-tuning scripts
- [#5016](https://github.com/vllm-project/semantic-router/issues/5016) [Feature] Add a locked uv environment for the mmBERT-32K embedding trainer
- [#4904](https://github.com/vllm-project/semantic-router/issues/4904) [Bug] modelservice client test cannot bind its unix socket on macOS
- [#5243](https://github.com/vllm-project/semantic-router/issues/5243) [Bug] Streamed request bodies are copied before the size guard rejects them
- [#5525](https://github.com/vllm-project/semantic-router/issues/5525) [Bug] Fall back to extractive compression when trusted recovery scope is empty
- [#5522](https://github.com/vllm-project/semantic-router/issues/5522) [Bug] Skip context compression and strip vsr_context_retrieve on recovery follow-up hops
- [#5463](https://github.com/vllm-project/semantic-router/issues/5463) [Bug] InMemoryStore.Get hands out the store's live pointer
- [#5541](https://github.com/vllm-project/semantic-router/issues/5541) [Feature] Let a harness request a fresh routing decision within a session through request metadata
- [#5648](https://github.com/vllm-project/semantic-router/issues/5648) [Bug] Vela 3.0 span threshold lookup raises uncaught StopIteration when no bucket matches
- [#5889](https://github.com/vllm-project/semantic-router/issues/5889) [Bug] cmd startup tests lose released ports to other sockets, and a lost management port exits the test binary silently
- [#5626](https://github.com/vllm-project/semantic-router/issues/5626) [Bug] Non-finite learning and protection tunables pass config validation and silently freeze model switching
- [#5659](https://github.com/vllm-project/semantic-router/issues/5659) [Bug] vela3-fast decodes a text state that holds JSON, so its PII preset scans the wrong text

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*