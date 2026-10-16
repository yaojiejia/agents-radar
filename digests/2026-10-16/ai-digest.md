# 📡 AI Ecosystem Digest — 2026-10-16

> Generated 2026-10-16 01:01 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 151,074 | 25 | 6 | 0 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 129,398 | 22 | 0 | 43 | 2 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 107,392 | 0 | 0 | 6 | 0 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,257 | 15 | 5 | 0 | 2 |
| [OpenCode](https://github.com/anomalyco/opencode) | 213,929 | 24 | 19 | 10 | 1 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 28,508 | 21 | 24 | 2 | 6 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 392,127 | 117 | 98 | 274 | 4 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 254,125 | 31 | 3 | 0 | 1 |
| [vLLM](https://github.com/vllm-project/vllm) | 93,870 | 34 | 17 | 58 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 37,180 | 11 | 16 | 40 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 131,312 | 16 | 11 | 35 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 183,338 | 8 | 3 | 8 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 61,339 | 23 | 56 | 141 | 3 |
| [Unsloth](https://github.com/unslothai/unsloth) | 78,083 | 18 | 55 | 117 | 1 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,142 | 8 | 4 | 11 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,185 | 16 | 4 | 3 | 0 |

---

## ✨ Highlights

- **Claude Code** released version [v2.1.301](https://github.com/anthropics/claude-code/releases/tag/v2.1.301).
- **OpenAI Codex** launched two significant releases: [rust-v0.163.0](https://github.com/openai/codex/releases/tag/rust-v0.163.0) and [rust-v0.163.0-alpha.10.2](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.10.2).
- **Qwen Code** introduced multiple releases, including [v0.25.2](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.2) and a new [SDK TypeScript release](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.20).
- **OpenClaw** addressed several bugs with the merged PR [#173204](https://github.com/openclaw/openclaw/pull/173204) focusing on the Control UI and other vital fixes.
- **GitHub Copilot CLI** reported a notable new issue [#5147](https://github.com/github/copilot-cli/issues/5147) regarding the /restart command failing under specific session conditions, generating 1 comment so far.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 151,074 · **Open issues:** 15,046 · **Last push:** 5h ago

On October 16, 2026, Claude Code released version v2.1.301, which introduced the `CLAUDE_CODE_RETRY_WATCHDOG_MAX_USAGE_LIMIT_WAIT_MS` feature for better management of unattended retries, added OpenTelemetry tracing guidance for the `claude-api` skill, and implemented the `%` motion for easier navigation in vim mode. No pull requests were merged in the last 24 hours. However, a number of new issues emerged, with a particularly notable concern being issue #102245, where idle Claude Code session processes on Windows are reportedly pinning one thread at 100% CPU for extended periods. Other bugs affecting desktop functionality and session management have also been reported, indicating ongoing challenges.

#### 🚀 New Releases
- [v2.1.301](https://github.com/anthropics/claude-code/releases/tag/v2.1.301) v2.1.301

#### 🐛 New Issues
- [#102333](https://github.com/anthropics/claude-code/issues/102333) Unused connectors and MCP servers still cost tokens in every session `enhancement` `area:cost` `area:mcp` `area:claude-code-web` 💬2
- [#102548](https://github.com/anthropics/claude-code/issues/102548) [BUG] Desktop (Windows): mic dictation lost live transcript after update, shows only English "Listening..." `bug` `platform:windows` `area:desktop` 💬3
- [#102537](https://github.com/anthropics/claude-code/issues/102537) [Bug] Trackpad scroll not navigating command history correctly `bug` `platform:macos` `area:tui` 💬2
- [#102567](https://github.com/anthropics/claude-code/issues/102567) security-guidance plugin: git diff baseline gets confused across worktree switches, re-reports already-fixed findings `bug` `has repro` `platform:macos` `area:security` 💬1
- [#102604](https://github.com/anthropics/claude-code/issues/102604) [BUG] Desktop Code tab: thinking only shows as a one-line summary, and some sessions launch with --thinking-display omitted and show none `bug` `has repro` `platform:macos` `area:desktop` 💬1
- [#102245](https://github.com/anthropics/claude-code/issues/102245) [BUG] Windows: idle Claude Code session processes pin one thread at 100% CPU for hours (desktop app) `bug` `has repro` `platform:windows` `area:core` 💬1
- [#102496](https://github.com/anthropics/claude-code/issues/102496) [BUG] Desktop (Windows): new sessions silently start in a worktree after the environment-picker update; no setting to turn it off 💬1
- [#102591](https://github.com/anthropics/claude-code/issues/102591) [GitHub integration] `bug` `area:claude-code-web` `github-integration` 💬1
- [#102606](https://github.com/anthropics/claude-code/issues/102606) [Bug] Response Blocked by Safety Filter on Internal Attendance Tracking Page `bug` `duplicate` `platform:windows` `area:model`
- [#102605](https://github.com/anthropics/claude-code/issues/102605) Background session's state.json keeps a stale inFlight.queued: 1, so the daemon never retires the idle session `bug` `has repro` `platform:linux` `perf:memory`
- [#102599](https://github.com/anthropics/claude-code/issues/102599) [MODEL] Committed a status document saying CI gates were still to run, beside a plan recording them passed `bug` `area:model`
- [#102602](https://github.com/anthropics/claude-code/issues/102602) [GitHub integration] `bug` `platform:web` `needs-info` `github-integration`
- [#102603](https://github.com/anthropics/claude-code/issues/102603) [Bug] Constant "Waiting for API response" retries since 10/14 afternoon `bug` `platform:macos` `area:api` `area:networking`
- [#102601](https://github.com/anthropics/claude-code/issues/102601) I get flagged persistently for legitimate veterinary antiviral research. I am d… `bug` `area:model`
- [#102600](https://github.com/anthropics/claude-code/issues/102600) [BUG] Desktop app task list: plan is skipped or never advances mid-turn `bug` `platform:macos` `area:model` `area:desktop`
- [#102597](https://github.com/anthropics/claude-code/issues/102597) [Bug] macOS: background agents re-send full context on every DarkWake after lid close (81 requests sent, 29 completed overnight; usage consumed while asleep) `bug` `has repro` `platform:macos` `area:cost`
- [#102528](https://github.com/anthropics/claude-code/issues/102528) [BUG] Connector scope granted on claude.ai never reaches an open desktop session; status stays "connected", /clear and reconnect don't refresh the token `bug` `platform:windows` `area:mcp` `area:desktop`
- [#102476](https://github.com/anthropics/claude-code/issues/102476) Streamable HTTP MCP: after the standalone GET SSE stream drops and two retries fail, Claude Code never reopens it, so server notifications are lost for the rest of the session `bug` `has repro` `platform:linux` `area:mcp`
- [#102508](https://github.com/anthropics/claude-code/issues/102508) Claude Desktop (3P) keeps retrying a rejected MCP OAuth refresh token instead of prompting sign-in `invalid`
- [#102598](https://github.com/anthropics/claude-code/issues/102598) Bug Report: Unclear issue, no reproduction details provided `bug` `platform:linux` `needs-info`
- [#102596](https://github.com/anthropics/claude-code/issues/102596) [Redacted] `bug` `platform:macos` `area:model` `area:security`
- [#102595](https://github.com/anthropics/claude-code/issues/102595) [FEATURE] Opt-in real-time prompt persistence to external memory with Desktop UI setup
- [#102594](https://github.com/anthropics/claude-code/issues/102594) [BUG] VS Code extension: a mod's AbovePrompt band covers the `/` and `@` menus `bug` `platform:macos` `platform:vscode` `area:plugins`
- [#102593](https://github.com/anthropics/claude-code/issues/102593) I need more information to generate a proper issue title. Could you please provide: 1. What were you trying to do when the issue occurred? 2. What error message or unexpected behavior did you see? 3. `bug` `platform:windows` `needs-info`
- [#102590](https://github.com/anthropics/claude-code/issues/102590) Hi, the Setup script failed keeps popping up. It still does redirect to the exi… `bug` `area:cowork` `needs-info`

#### 🔒 Closed Issues
- [#88808](https://github.com/anthropics/claude-code/issues/88808) [Bug][cyber] False positive during timeline data rendering and UI shader debugging (req_011CeHjtCYYzNRTxMpVYSxSe)
- [#88718](https://github.com/anthropics/claude-code/issues/88718) [Bug][cyber] False positive while inspecting framework audio routing and DAC playback logic (req_011CeGsarrqNcHos6vSt46hk)
- [#88683](https://github.com/anthropics/claude-code/issues/88683) [Bug][cyber] Android firmware image rebuild and device rooting for boot audio debugging (req_011CeGcW64SuZGmcT9xgJSXp)
- [#85393](https://github.com/anthropics/claude-code/issues/85393) [Bug][cyber] ClAudit false-positive while: “open a graph page that requests perms that allow you to do w…” (req_011CdomaYXxtTodvmby6Sgi3)
- [#88926](https://github.com/anthropics/claude-code/issues/88926) [Bug][cyber] Troubleshooting missing files and inspecting cloud storage token scopes (req_011CeJtwD8fGdjksmkVkCi9A)
- [#102596](https://github.com/anthropics/claude-code/issues/102596) [Redacted]

### OpenAI Codex (`openai/codex`)

**Stars:** 129,398 · **Open issues:** 22,811 · **Last push:** 1h ago

The major update today is the release of rust-v0.163.0, which introduces significant new features such as the ability to search preferences across categories via `/config`, send follow-up prompts during Codex responses, and configure a leader key in `/keymap`. Additionally, rust-v0.163.0-alpha.10.2 was released as well. Among the notable merged pull requests, the removal of obsolete protected-path monitoring from the Linux sandbox and enhancements for remote exec-server credentials stand out. However, a concerning new issue emerged regarding the Windows platform, where users are experiencing a "Model not found" error specifically triggered by China Standard Time and other UTC+8 zones.

#### 🚀 New Releases
- [rust-v0.163.0](https://github.com/openai/codex/releases/tag/rust-v0.163.0) 0.163.0
- [rust-v0.163.0-alpha.10.2](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.10.2) 0.163.0-alpha.10.2

#### ✅ Merged PRs
- [#54445](https://github.com/openai/codex/pull/54445) Remove obsolete protected-path monitoring from the Linux sandbox
- [#54434](https://github.com/openai/codex/pull/54434) Add rotating stdin credentials for remote exec-server
- [#54433](https://github.com/openai/codex/pull/54433) Use neutral labels for nonzero exits in compact TUI output
- [#54432](https://github.com/openai/codex/pull/54432) Support remote credential masking with Zsh shell snapshots
- [#54424](https://github.com/openai/codex/pull/54424) Add remote plugin metadata to plugin configuration
- [#54421](https://github.com/openai/codex/pull/54421) Treat explicit connections to the verified default daemon as local
- [#54420](https://github.com/openai/codex/pull/54420) Record local image inputs on completed image-generation items
- [#54419](https://github.com/openai/codex/pull/54419) Support line breaks in Mermaid flowchart node labels
- [#54417](https://github.com/openai/codex/pull/54417) Skip SQLite page reclamation on Linux NFS mounts
- [#54414](https://github.com/openai/codex/pull/54414) Allow root turn suspension with live descendants
- [#54401](https://github.com/openai/codex/pull/54401) Run managed daemon processes at background priority on macOS
- [#54398](https://github.com/openai/codex/pull/54398) Store generated image items as attachment references
- [#54389](https://github.com/openai/codex/pull/54389) Preserve existing SQLite journal modes on startup
- [#54388](https://github.com/openai/codex/pull/54388) Add quick dial presets for terminal title and status line layouts
- [#54387](https://github.com/openai/codex/pull/54387) Add session-only arguments to `/title` and `/statusline`
- [#54385](https://github.com/openai/codex/pull/54385) Allow saving current permission settings as presets
- [#54383](https://github.com/openai/codex/pull/54383) Support inline permission profile selection with `/permissions`
- [#54381](https://github.com/openai/codex/pull/54381) Add a keyboard shortcut menu for presets
- [#54380](https://github.com/openai/codex/pull/54380) Add `/presets` for reusable prompts and slash commands
- [#54379](https://github.com/openai/codex/pull/54379) Add configuration support for TUI input presets
- [#54378](https://github.com/openai/codex/pull/54378) Support inline model, reasoning, and speed selection in `/model`
- [#54369](https://github.com/openai/codex/pull/54369) Retry SQLite operations on transient writer contention
- [#54365](https://github.com/openai/codex/pull/54365) Prevent duplicate assistant messages around interleaved commands
- [#54363](https://github.com/openai/codex/pull/54363) Filter uninspectable network roots from implicit MXC read grants
- [#54351](https://github.com/openai/codex/pull/54351) Use the turn index for turn-scoped item pagination
- [#54346](https://github.com/openai/codex/pull/54346) Add scoped executor credential auth for remote exec-server
- [#54316](https://github.com/openai/codex/pull/54316) Centralize context fragment kind constants
- [#54315](https://github.com/openai/codex/pull/54315) Keep TUI Markdown colors readable against their backgrounds
- [#54309](https://github.com/openai/codex/pull/54309) Enable credential masking for remote exec-server commands
- [#54281](https://github.com/openai/codex/pull/54281) Attribute compaction summaries to the assistant in Guardian transcripts
- [#54278](https://github.com/openai/codex/pull/54278) Share Guardian image deduplication and checkpoint restoration
- [#54273](https://github.com/openai/codex/pull/54273) Protect metadata writes through macOS case aliases
- [#54265](https://github.com/openai/codex/pull/54265) Add regression coverage for Guardian sandbox retry approvals
- [#54264](https://github.com/openai/codex/pull/54264) Track Guardian transcript admission across failed reviews
- [#54263](https://github.com/openai/codex/pull/54263) Require fresh Guardian approval for escalated tool retries
- [#54257](https://github.com/openai/codex/pull/54257) Preserve recent speech when trimming realtime transcripts
- [#54250](https://github.com/openai/codex/pull/54250) Add regression tests for case-variant metadata protection
- [#54217](https://github.com/openai/codex/pull/54217) Apply syntax theme colors to Markdown prose in the TUI
- [#54216](https://github.com/openai/codex/pull/54216) Show image previews in the fullscreen transcript
- [#54175](https://github.com/openai/codex/pull/54175) Retire worktree and voice feature flags
- [#54170](https://github.com/openai/codex/pull/54170) Preserve ChatGPT authentication for Gov MCP servers
- [#54169](https://github.com/openai/codex/pull/54169) Reload the model catalog after account changes
- [#54151](https://github.com/openai/codex/pull/54151) Generate keymap descriptors and binding accessors from one catalog

#### 🐛 New Issues
- [#54340](https://github.com/openai/codex/issues/54340) [Windows][Chat] "Model not found" reproducibly triggered by China Standard Time; other UTC+8 zones work `bug` `windows-os` `app` 💬6
- [#54209](https://github.com/openai/codex/issues/54209) [BUG] Windows Codex App: GPT-5.6 and GPT-6 return "Model not found" after GPT-5.5 retirement `bug` `windows-os` `app` 💬5
- [#54154](https://github.com/openai/codex/issues/54154) OpenAI Developers installed, but secure OpenAI Platform tools unavailable in Codex on Windows `bug` `windows-os` `mcp` `app` 💬3
- [#54376](https://github.com/openai/codex/issues/54376) Unable to find the connected browser `bug` `app` `browser` 💬3
- [#54234](https://github.com/openai/codex/issues/54234) Codex Windows App: HTTP 400 – ChatGPT account not supported for any model `bug` `windows-os` `auth` `app` 💬2
- [#54416](https://github.com/openai/codex/issues/54416) [macOS 26.1007.71326] 8.74 GiB main/renderer state plus agent-launched MLX transcription exhaust swap and reset WindowServer `bug` `model-behavior` `app` `performance` 💬2
- [#54456](https://github.com/openai/codex/issues/54456) [Windows Desktop] Direct user approval becomes untrusted after history restoration (history_missing_checkpoint) `bug` `windows-os` `app` `session` 💬1
- [#54455](https://github.com/openai/codex/issues/54455) Windows dot-delegated tasks: cross-thread AbsolutePathBuf failure and MXC Computer Use startup differential diagnostics `bug` `windows-os` `sandbox` `app` 💬1
- [#54454](https://github.com/openai/codex/issues/54454) [macOS 26.1007.71326] Renderer V8 footprint reaches 4.5G; replacing window releases it without app restart — request retained-object diagnosis and durable fix `bug` `app` `performance` 💬1
- [#54451](https://github.com/openai/codex/issues/54451) GPT-6 Astra desktop reliability: DB matching task expanded into unnecessary staging operations `bug` `model-behavior` `windows-os` `app` 💬1
- [#54448](https://github.com/openai/codex/issues/54448) [Windows][dots] Delegated local tasks do not honor restrictive named permission profiles (least-privilege regression) `bug` `windows-os` `sandbox` `app` 💬1
- [#54447](https://github.com/openai/codex/issues/54447) Windows: Browser/Computer Use crashes on start: trusted-worker.js gets NODE_REPL_TRUSTED_SERVICES undefined (trusted Node process exited unexpectedly / cua is not defined) `bug` `windows-os` `mcp` `app` 💬1
- [#54444](https://github.com/openai/codex/issues/54444) Hooks: clarify async-question replies and Interrupt eligibility for agent-created chats `documentation` `app` `hooks` 💬1
- [#54453](https://github.com/openai/codex/issues/54453) [Bug][Codex Goals][Cloud/Windows/Web] Failed to set goal on new no-attachment cloud thread while task executes `bug` `windows-os` `codex-web` `agent`
- [#54452](https://github.com/openai/codex/issues/54452) [Windows][Browser control] Google OAuth account popup is readable but account selection times out in Input.dispatchMouseEvent `bug` `windows-os` `tool-calls` `app`
- [#54450](https://github.com/openai/codex/issues/54450) Deleted chats remain in history and show an error when opened `bug` `windows-os` `app` `session`
- [#54449](https://github.com/openai/codex/issues/54449) [Windows][MXC] MSYS runtime incompatibility breaks Git helper workflows and official Skills commands `bug` `windows-os` `sandbox` `CLI`
- [#54446](https://github.com/openai/codex/issues/54446) [macOS app] JavaScript confirm blocks background Chrome and hidden in-app Browser at Emulation.setFocusEmulationEnabled `bug` `app` `browser`
- [#54443](https://github.com/openai/codex/issues/54443) macOS local execution: PostgreSQL initdb receives EPERM for small SysV shared-memory allocation `bug` `sandbox` `app`
- [#54442](https://github.com/openai/codex/issues/54442) Erroneous deactivation / false positive detection after purchasing ChatGPT Pro ($200) – User ID: user-odLmAWshSmSGpgXrHSMj6mLi `bug` `auth`
- [#54441](https://github.com/openai/codex/issues/54441) Windows elevated sandbox: repeated UAC prompts because offline firewall proxy_ports flip between project-level network_proxy threads and daemon threads `bug` `windows-os` `sandbox` `CLI`
- [#54440](https://github.com/openai/codex/issues/54440) Windows 0.162.1: require_escalated commands (and prefix_rule allow matches) silently run inside the sandbox, no auto-review or prompt `bug` `windows-os` `sandbox` `CLI`

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 107,392 · **Open issues:** 746 · **Last push:** <1h ago

On October 16, 2026, there were no new releases for Gemini CLI. However, several important pull requests were merged, including #29774, which adds a banner indicating that Gemini CLI is not optimized for Gemini 4, and #29760, which disables interactive credential and SSH prompts in the getSafeGitEnv function. Other notable fixes include #29769, which hardens the SKILL.md frontmatter parsing for single-line descriptions, and #29766, which ensures proper rounding before selecting units in the formatDuration function. The day was otherwise routine, with no new issues reported.

#### ✅ Merged PRs
- [#29774](https://github.com/google-gemini/gemini-cli/pull/29774) Add Banner about Gemini CLI not being optimized for Gemini 4
- [#29769](https://github.com/google-gemini/gemini-cli/pull/29769) fix(core): harden SKILL.md frontmatter parsing for single-line descriptions
- [#29750](https://github.com/google-gemini/gemini-cli/pull/29750) fix(cli): resolve settings placeholders after loading .env files
- [#29760](https://github.com/google-gemini/gemini-cli/pull/29760) fix(core): disable interactive credential and SSH prompts in getSafeGitEnv
- [#29766](https://github.com/google-gemini/gemini-cli/pull/29766) fix(cli): round before selecting units in formatDuration
- [#29753](https://github.com/google-gemini/gemini-cli/pull/29753) fix(core): format and quote Windows diff command arguments in openDiff

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,257 · **Open issues:** 2,202 · **Last push:** <1h ago

On October 16, 2026, GitHub Copilot CLI released version 1.0.99-2, which introduced significant improvements such as clearer notices for administrator-managed settings overriding user-selected models and enabling semantic code search by default for online sessions. Additionally, the update fixed several bugs, including reliability for sandboxed commands on Linux and maintaining MCP resource details during live metadata refreshes. Meanwhile, new issues emerged, with #5147 highlighting a failure with the /restart command when using the --new-session-id flag, and #5162 addressing conflicts in Agency Autopilot mode that may detract from user experience. Overall, the day showcased key enhancements aimed at improving user functionality and addressing critical concerns.

#### 🚀 New Releases
- [v1.0.99-2](https://github.com/github/copilot-cli/releases/tag/v1.0.99-2) 1.0.99-2
- [v1.0.99-1](https://github.com/github/copilot-cli/releases/tag/v1.0.99-1) 1.0.99-1

#### 🐛 New Issues
- [#5147](https://github.com/github/copilot-cli/issues/5147) /restart fails when the CLI was launched with --new-session-id `area:sessions` 💬1
- [#5162](https://github.com/github/copilot-cli/issues/5162) Agency Autopilot mode can conflict with Copilot rules resulting in annoying behavior `triage`
- [#5161](https://github.com/github/copilot-cli/issues/5161) [Bug] gemini-4-argon: unexplained full cache miss on unchanged prefix, cacheReadTokens > inputTokens, and no cache-write reporting `triage`
- [#5160](https://github.com/github/copilot-cli/issues/5160) Plan-mode responses to steering messages disappear from the conversation `triage`
- [#5159](https://github.com/github/copilot-cli/issues/5159) Allow unlimited (or higher) prompt history via `commandHistoryMaxSize` `triage`
- [#5158](https://github.com/github/copilot-cli/issues/5158) Copilot App: session name keeps reverting to a linked (merged) PR's title after an explicit rename `triage`
- [#5157](https://github.com/github/copilot-cli/issues/5157) Guest accounts can't authenticate to specific tenant for MCP servers `triage`
- [#5155](https://github.com/github/copilot-cli/issues/5155) Cloud agent: "Registry only" MCP policy blocks all repo-configured MCP servers — proxy-bridged configs can't be fingerprinted ("unable to compute fingerprint from local configuration") `triage`
- [#5154](https://github.com/github/copilot-cli/issues/5154) Command hooks always hit timeoutSec after the first JS-side child spawn (hook exits in ~20 ms but stays a zombie until timeout) `triage`
- [#5153](https://github.com/github/copilot-cli/issues/5153) CLI: Ability to repurpose the Tabs at the top (Issues, Pull Requests, Gists) `triage`
- [#5152](https://github.com/github/copilot-cli/issues/5152) Add /browser or /playwright to enable browser automation, matching /computer `triage`
- [#5151](https://github.com/github/copilot-cli/issues/5151) Regression: default-context Sol models rejected before first prompt after tool definitions grow from 15K to ~260K tokens `triage`
- [#5150](https://github.com/github/copilot-cli/issues/5150) ACP: the autopilot task_complete summary is sent only as a tool call, not as an agent message `triage`
- [#5149](https://github.com/github/copilot-cli/issues/5149) Claude Opus 5.5: 32k maxOutputTokens makes --reasoning-effort max/xhigh return empty turns on long tasks; auto-continue bills each empty turn `area:non-interactive` `area:models`
- [#5148](https://github.com/github/copilot-cli/issues/5148) Bug: Idle CLI sessions pin one CPU core at 100% (`notify-rs debouncer loop` busy-spins)

#### 🔒 Closed Issues
- [#4991](https://github.com/github/copilot-cli/issues/4991) MCP: Cloudflare connection fails with "Subscription limit reached" after successful OAuth, then reports authentication required
- [#5052](https://github.com/github/copilot-cli/issues/5052) [Linux][Ubuntu 26.04] Tool sandbox preflight fails although bubblewrap namespace test succeeds
- [#4473](https://github.com/github/copilot-cli/issues/4473) claude-haiku-4.5 sub-agent fails with reasoning effort 'medium' not supported
- [#3017](https://github.com/github/copilot-cli/issues/3017) ctrl+e view plan for review
- [#5102](https://github.com/github/copilot-cli/issues/5102) Regression: sandboxed git has no way to use a credential that differs from the Copilot/gh sign-in identity

### OpenCode (`anomalyco/opencode`)

**Stars:** 213,929 · **Open issues:** 4,339 · **Last push:** <1h ago

On October 16, 2026, OpenCode released version 1.19.1, which notably discontinued session sharing, rendering existing share links and commands unsupported. Among the day's merged pull requests, significant updates included a fix to maintain the current file view when a link is revisited and the introduction of a commentary timeline category. Other notable fixes addressed issues with long file names in the file tree and stabilizing the review pane during terminal toggling. A newly reported issue drew attention, highlighting problems with the OpenTunnel remote URL not attaching on macOS with a completed tunnel profile, which indicates a potential user-facing bug needing prompt resolution.

#### 🚀 New Releases
- [v1.19.1](https://github.com/anomalyco/opencode/releases/tag/v1.19.1) v1.19.1

#### ✅ Merged PRs
- [#55899](https://github.com/anomalyco/opencode/pull/55899) fix(app): keep the file view in place when a link rereads it
- [#55248](https://github.com/anomalyco/opencode/pull/55248) feat(app): add commentary timeline category
- [#55889](https://github.com/anomalyco/opencode/pull/55889) fix(app): fade long file names at the edge of the file tree
- [#55879](https://github.com/anomalyco/opencode/pull/55879) fix(app): keep the review pane steady when the side terminal toggles
- [#55871](https://github.com/anomalyco/opencode/pull/55871) fix(tui): roll the compact form over to M at the rounding boundary
- [#55878](https://github.com/anomalyco/opencode/pull/55878) chore(release): publish the desktop app from beta
- [#55475](https://github.com/anomalyco/opencode/pull/55475) fix(util): hide plugin Git console windows on Windows
- [#55866](https://github.com/anomalyco/opencode/pull/55866) chore(ci): speed up and stabilize the test workflow
- [#55778](https://github.com/anomalyco/opencode/pull/55778) fix(core): seed configured limits before model transforms
- [#55872](https://github.com/anomalyco/opencode/pull/55872) fix(tui): say why /editor did nothing when no editor is set

#### 🐛 New Issues
- [#55629](https://github.com/anomalyco/opencode/issues/55629) Not sure if it's client side or server side, but Big Pickle THINKING bleeds out. `pending close` `triaging` 💬9
- [#55864](https://github.com/anomalyco/opencode/issues/55864) OpenTunnel remote URL never attaches on macOS v2.0.30 despite completed tunnel profile 💬6
- [#55686](https://github.com/anomalyco/opencode/issues/55686) tui: thinking text renders in default text color instead of muted gray `triaging` 💬3
- [#55727](https://github.com/anomalyco/opencode/issues/55727) v2.0.29: agent `model` (config `agents.<id>.model` and agent frontmatter) is ignored for new sessions `reproduced` 💬3
- [#55888](https://github.com/anomalyco/opencode/issues/55888) upgrade: npm upgrade skips postinstall and leaves an invalid opencode.exe on Windows `pending close` `triaging` 💬3
- [#55873](https://github.com/anomalyco/opencode/issues/55873) cli: pair --remote fails with OpenTunnel 503 "storage unavailable" 💬3
- [#55726](https://github.com/anomalyco/opencode/issues/55726) v1 `max_tokens` option on openai-compatible models is now sent next to `max_completion_tokens`, so strict endpoints reject every request (regression from #54694) `reproduced` 💬3
- [#55886](https://github.com/anomalyco/opencode/issues/55886) server: restart that interrupts a tool call fails the next Anthropic request with "tool_use.input: Input should be an object" 💬2
- [#55642](https://github.com/anomalyco/opencode/issues/55642) go: gemini-4-argon-contributor returns ModelProtocolUnsupported on every /zen/go/v1 route — only served via /inference/go/v1 `pending close` `triaging` 💬2
- [#55768](https://github.com/anomalyco/opencode/issues/55768) [Bug]: ctx.model.transform serves placeholder limit.context (200000) for config-defined models — percentage-based plugins mis-scale on 1M models `reproduced` 💬2
- [#55861](https://github.com/anomalyco/opencode/issues/55861) desktop: ignores service disabled flag, background service persists after quit 💬2
- [#55906](https://github.com/anomalyco/opencode/issues/55906) app: model picker tooltip always shows "No reasoning" for V2 catalog models `pending close` `triaging` 💬1
- [#55904](https://github.com/anomalyco/opencode/issues/55904) fix(docs): Console still advertises retired Exo and MiMo V2.5 free models `reproduced` 💬1
- [#55905](https://github.com/anomalyco/opencode/issues/55905) web: add no-transform to prevent proxy injection from breaking PWA integrity 💬1
- [#55897](https://github.com/anomalyco/opencode/issues/55897) [Question] Trocar modelo dentro de sessão ativa perde contexto no V2 - É regrissão? `triaging` 💬1
- [#55896](https://github.com/anomalyco/opencode/issues/55896) [FEATURE]: V2 background summary preparation with validated context swap 💬1
- [#55892](https://github.com/anomalyco/opencode/issues/55892) [FEATURE]: configurable loaded-location cap with bounded eviction concurrency 💬1
- [#55891](https://github.com/anomalyco/opencode/issues/55891) sessions: 2.x upgrade strands sessions created before the old 1.x background service stops `pending close` `triaging` 💬1
- [#55887](https://github.com/anomalyco/opencode/issues/55887) Open project dialog: expanding a preloaded folder throws "Path already exists" `reproduced` 💬1
- [#55880](https://github.com/anomalyco/opencode/issues/55880) Sonnet 5.5: Invalid `signature` in `thinking` block `triaging` 💬1
- [#55821](https://github.com/anomalyco/opencode/issues/55821) tui: /editor silently does nothing when VISUAL and EDITOR are unset `reproduced` 💬1
- [#55858](https://github.com/anomalyco/opencode/issues/55858) desktop(v2): "Open in" button in side panel header opens workspace root directory instead of the active file tab 💬1
- [#55863](https://github.com/anomalyco/opencode/issues/55863) desktop: path links skip directories and paths with spaces `reproduced` 💬1
- [#55813](https://github.com/anomalyco/opencode/issues/55813) tui: diff viewer m key un-reviews the last file instead of reporting "no more files to review" `2.0` `reproduced` 💬1

#### 🔒 Closed Issues
- [#55864](https://github.com/anomalyco/opencode/issues/55864) OpenTunnel remote URL never attaches on macOS v2.0.30 despite completed tunnel profile
- [#55565](https://github.com/anomalyco/opencode/issues/55565) I don't have any credits.
- [#55888](https://github.com/anomalyco/opencode/issues/55888) upgrade: npm upgrade skips postinstall and leaves an invalid opencode.exe on Windows
- [#55873](https://github.com/anomalyco/opencode/issues/55873) cli: pair --remote fails with OpenTunnel 503 "storage unavailable"
- [#55449](https://github.com/anomalyco/opencode/issues/55449) [Bug]: Go Gemini (gemini-4-argon) implicit cache hit rate depends on time of day, not request content; cache gone within ~16 min
- [#55572](https://github.com/anomalyco/opencode/issues/55572) run: sub-agent (child session) output is not shown in non-interactive mode
- [#55569](https://github.com/anomalyco/opencode/issues/55569) subagent: free-tier restriction triggers incorrectly when spawning from within OpenCode
- [#55256](https://github.com/anomalyco/opencode/issues/55256) tui: compact number formatter shows "1000.0K" instead of "1.0M" between 999,950 and 999,999
- [#54967](https://github.com/anomalyco/opencode/issues/54967) OC uses Terminal to edit fles
- [#55555](https://github.com/anomalyco/opencode/issues/55555) Downgrade v2 → 1.19.0 also breaks: "no such column: project_id" on migrated DB makes all v1 sessions return 500 (still in release, not just dev)
- [#50868](https://github.com/anomalyco/opencode/issues/50868) server: unpinned plugin update check flashes visible git console window on Windows
- [#51951](https://github.com/anomalyco/opencode/issues/51951) test(core): flaky AppProcess interruption tests (readiness race)
- [#55642](https://github.com/anomalyco/opencode/issues/55642) go: gemini-4-argon-contributor returns ModelProtocolUnsupported on every /zen/go/v1 route — only served via /inference/go/v1
- [#55768](https://github.com/anomalyco/opencode/issues/55768) [Bug]: ctx.model.transform serves placeholder limit.context (200000) for config-defined models — percentage-based plugins mis-scale on 1M models
- [#50807](https://github.com/anomalyco/opencode/issues/50807) mcp: server entries with a "timeout" field are silently dropped from the normalized config
- [#55821](https://github.com/anomalyco/opencode/issues/55821) tui: /editor silently does nothing when VISUAL and EDITOR are unset
- [#38747](https://github.com/anomalyco/opencode/issues/38747) core: recover gracefully from truncated provider streams
- [#54184](https://github.com/anomalyco/opencode/issues/54184) fix(core): V1 to V2 MCP migration drops timeout.startup, so scalar timeouts never reach the connect budget
- [#55813](https://github.com/anomalyco/opencode/issues/55813) tui: diff viewer m key un-reviews the last file instead of reporting "no more files to review"

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 28,508 · **Open issues:** 1,904 · **Last push:** <1h ago

On October 16, 2026, Qwen Code released version v0.25.2, which introduced a feature allowing the managed agent to handle the lead's mailbox over session messages, alongside various fixes for connector and broker robustness. Additionally, the preview release v0.25.2-preview.1 saw similar enhancements and bug fixes. Significant merged pull requests included a refactor consolidating server and broker sources and an alignment of hosted prompts with declared tools. Notably, new issues arose regarding session artifact management, with #14282 highlighting the need to record and update session artifacts when agents modify existing files, suggesting a growing focus on session handling stability.

#### 🚀 New Releases
- [v0.25.2](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.2) Release v0.25.2
- [v0.25.2-preview.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.2-preview.1) Release v0.25.2-preview.1
- [v0.25.2-nightly.20261015.c24e99e9cb](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.2-nightly.20261015.c24e99e9cb) Release v0.25.2-nightly.20261015.c24e99e9cb
- [v0.25.1-nightly.20261015.415925cbda](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.1-nightly.20261015.415925cbda) Release v0.25.1-nightly.20261015.415925cbda
- [sdk-typescript-v0.1.20](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.20) SDK TypeScript Release v0.1.20
- [desktop-v0.25.2](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.25.2) Qwen Code Desktop v0.25.2

#### ✅ Merged PRs
- [#14277](https://github.com/QwenLM/qwen-code/pull/14277) refactor(managed-agent): Consolidate server and broker sources
- [#14306](https://github.com/QwenLM/qwen-code/pull/14306) fix(managed-agent): Align hosted prompts with declared tools

#### 🐛 New Issues
- [#14282](https://github.com/QwenLM/qwen-code/issues/14282) feat(artifacts): record and update session artifacts when agents modify existing files `priority/P2` `type/feature-request` `category/tools` `scope/file-operations` 💬8
- [#14234](https://github.com/QwenLM/qwen-code/issues/14234) Deferred review findings from PR #14021: settle never-started background dispatches in the live turn `priority/P2` `type/bug` `category/tools` `scope/shell` 💬7
- [#14331](https://github.com/QwenLM/qwen-code/issues/14331) Large tool output can fill the context window and fail the run instead of degrading gracefully `status/need-information` `priority/P2` `type/bug` `category/core` 💬4
- [#14278](https://github.com/QwenLM/qwen-code/issues/14278) `/branch` error says "a response or tool call is in progress" but never tells you what is blocking (background requests like auto-compact are invisible) `priority/P2` `type/bug` `category/ui` `scope/commands` 💬4
- [#14288](https://github.com/QwenLM/qwen-code/issues/14288) Zombie (defunct) session child processes accumulate under long-running / suspended sessions (48-day-old zombie observed) `priority/P3` `type/bug` `category/core` `scope/session-management` 💬4
- [#14289](https://github.com/QwenLM/qwen-code/issues/14289) feat(serve): auto-remove completed sub-sessions after a configurable TTL (sidebar threads accumulate until daemon restart) `priority/P3` `type/feature-request` `category/core` `scope/session-management` 💬4
- [#14325](https://github.com/QwenLM/qwen-code/issues/14325) Session recovery: false "interrupted request" banner after /compress completes (v0.25.1) `priority/P2` `type/bug` `category/core` `scope/session-management` 💬3
- [#14324](https://github.com/QwenLM/qwen-code/issues/14324) Web Shell ignores ui.customWittyPhrases and ui.accessibility.enableLoadingPhrases - no supported way to disable loading phrases in the browser `priority/P3` `type/feature-request` `category/ui` `scope/settings` 💬3
- [#14310](https://github.com/QwenLM/qwen-code/issues/14310) Python SDK drops buffered messages and hides ProcessExitError when an async consumer resumes after CLI failure `status/in-review` `priority/P2` `type/bug` `category/integration` 💬3
- [#14312](https://github.com/QwenLM/qwen-code/issues/14312) Web terminal can remain input-blocked after a large paste is silently consumed `status/in-review` `priority/P2` `type/bug` `category/core` 💬3
- [#14314](https://github.com/QwenLM/qwen-code/issues/14314) Grep rejects valid ripgrep inline flags before running the search `status/in-review` `priority/P2` `type/bug` `category/tools` 💬3
- [#14291](https://github.com/QwenLM/qwen-code/issues/14291) Companion bundle reads the Node `navigator` global, so VS Code 1.14x logs `PendingMigrationError` twice on every activation `priority/P3` `type/bug` `category/integration` `scope/vscode` 💬3
- [#14257](https://github.com/QwenLM/qwen-code/issues/14257) chore(providers): deferred review Suggestions from #14073 (QwenCloud /auth entry) - 25 items `priority/P3` `category/core` `category/authentication` `scope/api-keys` 💬3
- [#14243](https://github.com/QwenLM/qwen-code/issues/14243) Release Failed for v0.25.1-nightly.20261015.415925cbda on 2026-10-15 `type/bug` `status/ready-for-agent` `autofix/skip` 💬3
- [#14246](https://github.com/QwenLM/qwen-code/issues/14246) DashScope explicit cache is lost across sessions whenever git status changes: move git status out of the system prompt `priority/P2` `type/feature-request` `category/performance` `scope/content-generation` 💬3
- [#14328](https://github.com/QwenLM/qwen-code/issues/14328) cli(auth): /auth renders a mixed-language dialog — MAIN_ITEMS and nav hints still call t() at module scope `priority/P3` `type/bug` `category/ui` `scope/interactive` 💬2
- [#14327](https://github.com/QwenLM/qwen-code/issues/14327) Web Shell: single click on a session name in the sidebar should start inline rename `priority/P3` `type/feature-request` `category/ui` `scope/session-management` 💬2
- [#14326](https://github.com/QwenLM/qwen-code/issues/14326) Main CI failed: SDK Java — EventTransportMultiNodeGate.wakeDecisionsFollowTheDatabaseClockNotTheNode (+7 more) `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#14322](https://github.com/QwenLM/qwen-code/issues/14322) Main CI failed: Qwen Code CI on 51f26d3d5491 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#14309](https://github.com/QwenLM/qwen-code/issues/14309) fix(serve): await in-flight local runtime teardown during revoke and close `priority/P3` `status/blocked` `type/bug` `category/core` 💬2
- [#14308](https://github.com/QwenLM/qwen-code/issues/14308) test(cli): keep managed session-store loopback gates conformant `priority/P3` `status/blocked` `type/feature-request` `category/development` 💬2

#### 🔒 Closed Issues
- [#13801](https://github.com/QwenLM/qwen-code/issues/13801) fix(managed-agent): a child_run stuck at dispatch_started never settles when the process provably never started
- [#13901](https://github.com/QwenLM/qwen-code/issues/13901) [H4e-b2 follow-up] Align the lead's answers for stopping, unconfirmed and repeated sends, and thread one chain index per call
- [#14278](https://github.com/QwenLM/qwen-code/issues/14278) `/branch` error says "a response or tool call is in progress" but never tells you what is blocking (background requests like auto-compact are invisible)
- [#14243](https://github.com/QwenLM/qwen-code/issues/14243) Release Failed for v0.25.1-nightly.20261015.415925cbda on 2026-10-15
- [#13995](https://github.com/QwenLM/qwen-code/issues/13995) Main CI failed: E2E Tests — cli/qwen-serve-channel-workers.test.ts > … > controls a real mock-plugin worker after a channel-less boot (+1 more)
- [#14028](https://github.com/QwenLM/qwen-code/issues/14028) Main CI failed: Qwen Code CI — src/agents/workspace-agents/workspace-lock.test.ts > … > loses no roster update when two processes write at o…
- [#14088](https://github.com/QwenLM/qwen-code/issues/14088) Main CI failed: E2E Tests on c3c38cf58337
- [#14100](https://github.com/QwenLM/qwen-code/issues/14100) Main CI failed: E2E Tests on 58c59136ca6f
- [#14183](https://github.com/QwenLM/qwen-code/issues/14183) Main CI failed: Qwen Code CI on 97fb4a547dc5
- [#14189](https://github.com/QwenLM/qwen-code/issues/14189) Main CI failed: SDK Java — ChildWorktreeGitTest.applyResumesFromAHalfWrittenTree
- [#14191](https://github.com/QwenLM/qwen-code/issues/14191) Main CI failed: E2E Tests — interactive/workflow-completion.test.ts > … > delivers 'WORKFLOW_LARGE_RESULT_12176' once
- [#14102](https://github.com/QwenLM/qwen-code/issues/14102) Main CI failed: SDK Java — HostedShellLifecycleRecoveryIT.publicDeletionRecoversOriginalResources(String)[1] (+3 more)
- [#14104](https://github.com/QwenLM/qwen-code/issues/14104) Main CI failed: SDK Java — HostedShellLifecycleRecoveryIT.publicDeletionRecoversOriginalResources(String)[1] (+3 more)
- [#14106](https://github.com/QwenLM/qwen-code/issues/14106) Main CI failed: SDK Java — DurableLocalProcessRuntimeProvisionerTest.failedSpawnDoesNotRetryReconciliationForever (+4 more)
- [#14190](https://github.com/QwenLM/qwen-code/issues/14190) Main CI failed: SDK Java — HostedRecoveryWedgeGate.recoveryBlockedSessionMustNotWedgeOtherSessionTurns (+1 more)
- [#14195](https://github.com/QwenLM/qwen-code/issues/14195) Main CI failed: SDK Java — EventTransportBrokerGate.thePostCommitPathDoesNotRegress
- [#14196](https://github.com/QwenLM/qwen-code/issues/14196) Main CI failed: SDK Java — JdbcRuntimeRetentionMySqlIT.placementKeepsExactIdentitiesWithoutDecryptingHistoricalRowsOnMySql (+72 more)
- [#14197](https://github.com/QwenLM/qwen-code/issues/14197) Main CI failed: SDK Java — EventTransportBrokerGate.thePostCommitPathDoesNotRegress
- [#14199](https://github.com/QwenLM/qwen-code/issues/14199) Main CI failed: SDK Java — BackfillWitnessesTest.brokerAndServerInitializeTheSameBaselineAndReplayWithoutAddingTables (+72 more)
- [#14200](https://github.com/QwenLM/qwen-code/issues/14200) Main CI failed: SDK Java on ce75a117a5b4
- [#14201](https://github.com/QwenLM/qwen-code/issues/14201) Main CI failed: SDK Java — EventTransportBrokerGate.thePostCommitPathDoesNotRegress (+73 more)
- [#14246](https://github.com/QwenLM/qwen-code/issues/14246) DashScope explicit cache is lost across sessions whenever git status changes: move git status out of the system prompt
- [#14006](https://github.com/QwenLM/qwen-code/issues/14006) Main CI failed: SDK Java on 6ececc39bc9f
- [#14192](https://github.com/QwenLM/qwen-code/issues/14192) Main CI failed: SDK Java — HostedRecoveryWedgeGate.recoveryBlockedSessionMustNotWedgeOtherSessionTurns (+1 more)

### Claude Code Skills (`anthropics/skills`)

Top open skill PRs by community engagement:
- [#1742](https://github.com/anthropics/skills/pull/1742) fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers
- [#1298](https://github.com/anthropics/skills/pull/1298) fix(skill-creator): isolate trigger evals and handle Windows and runtime failures
- [#1245](https://github.com/anthropics/skills/pull/1245) Add notion-spec-to-implementation and quantitative-resume-auditor skills
- [#1771](https://github.com/anthropics/skills/pull/1771) feat(skills): add proofcore-contract-auditor for smart contract notarization
- [#1734](https://github.com/anthropics/skills/pull/1734) Detect orphaned docx comments

---

## 🦞 OpenClaw Ecosystem

### OpenClaw (`openclaw/openclaw`)

**Stars:** 392,127 · **Open issues:** 9,476 · **Last push:** <1h ago

On October 16, 2026, OpenClaw released version 2026.10.10-beta.1, which significantly enhances the responsiveness of its Gateway by offloading more database work to worker threads, alleviating strain from busy hosts and large agent fleets. Additionally, version 2026.10.5-beta.4 improved update reliability on macOS and made systemd installations more efficient, while version 2026.10.4 addressed issues related to the Gateway's stability during sleep and unexpected system clock changes. Among the merged pull requests, notable improvements include refining the user interface for agent row presentations and optimizing resource handling in Gateway startup tests. However, several new high-priority bugs emerged, particularly #173204, which reports a persistent loading issue in the Control UI when adding agents, creating significant user disruption.

#### 🚀 New Releases
- [v2026.10.10-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.10.10-beta.1) openclaw 2026.10.10-beta.1
- [v2026.10.5-beta.4](https://github.com/openclaw/openclaw/releases/tag/v2026.10.5-beta.4) openclaw 2026.10.5-beta.4
- [v2026.10.4](https://github.com/openclaw/openclaw/releases/tag/v2026.10.4) openclaw 2026.10.4
- [v2026.9.33](https://github.com/openclaw/openclaw/releases/tag/v2026.9.33) openclaw 2026.9.33

#### ✅ Merged PRs
- [#173266](https://github.com/openclaw/openclaw/pull/173266) fix(control-ui): retain cached conversation titles on warm reload
- [#173600](https://github.com/openclaw/openclaw/pull/173600) test: mount clipboard lifetime fixtures with Solid
- [#173334](https://github.com/openclaw/openclaw/pull/173334) fix(config): retain source updates with unchanged runtime values
- [#172681](https://github.com/openclaw/openclaw/pull/172681) refactor(search): engine-owned full-text and vector capabilities
- [#173598](https://github.com/openclaw/openclaw/pull/173598) fix(memory-wiki): preserve lint report notes on read errors
- [#173591](https://github.com/openclaw/openclaw/pull/173591) improve(ci): avoid unused Gateway startup work in handler tests
- [#173539](https://github.com/openclaw/openclaw/pull/173539) refactor(ui): simplify agent row presentation
- [#173590](https://github.com/openclaw/openclaw/pull/173590) build(ui): remove Web Awesome dependency
- [#173566](https://github.com/openclaw/openclaw/pull/173566) fix(cli): report resource disposal failures after cleanup deadlines
- [#173577](https://github.com/openclaw/openclaw/pull/173577) fix(code-mode): retire idle workers after persistent GC storms
- [#173372](https://github.com/openclaw/openclaw/pull/173372) fix(test): prepare Gateway workers before fixture shutdown deadlines
- [#173592](https://github.com/openclaw/openclaw/pull/173592) fix(tests): exercise localized link boundaries
- [#171631](https://github.com/openclaw/openclaw/pull/171631) refactor(ui): simplify plugin catalog and editor rendering
- [#173574](https://github.com/openclaw/openclaw/pull/173574) perf(runtime): stop GC telemetry from waking idle workers
- [#173548](https://github.com/openclaw/openclaw/pull/173548) perf(subagents): release settled run text from memory
- [#172223](https://github.com/openclaw/openclaw/pull/172223) fix(doctor): say that memory sync stops when the embedding key is missing
- [#172231](https://github.com/openclaw/openclaw/pull/172231) fix(zai): preserve quota reset times and weekly periods
- [#172149](https://github.com/openclaw/openclaw/pull/172149) refactor(ui): render lazy application states directly in Solid
- [#172201](https://github.com/openclaw/openclaw/pull/172201) fix: OpenAI usage double-counts audio and omits cache writes
- [#173576](https://github.com/openclaw/openclaw/pull/173576) refactor(tests): remove duplicate submenu rendering case
- [#173110](https://github.com/openclaw/openclaw/pull/173110) refactor(ui): render settings model pickers directly in Solid
- [#171784](https://github.com/openclaw/openclaw/pull/171784) refactor(ui): render chat widgets and tool previews with Solid
- [#173534](https://github.com/openclaw/openclaw/pull/173534) perf(state): keep plugin and GitHub reads off the writer queue
- [#173537](https://github.com/openclaw/openclaw/pull/173537) refactor(ui): retire tooltip template content
- [#173573](https://github.com/openclaw/openclaw/pull/173573) fix(codex): backport terminal child release retries to October
- [#172320](https://github.com/openclaw/openclaw/pull/172320) ci(ui): give the real-Gateway UI shards 30 minutes on 16-class runners
- [#173520](https://github.com/openclaw/openclaw/pull/173520) refactor(ui): retire Web Awesome theme and registrations
- [#173510](https://github.com/openclaw/openclaw/pull/173510) refactor(ui): render wizard controls directly in Solid
- [#171942](https://github.com/openclaw/openclaw/pull/171942) test(ui): reuse the shared SessionsPage context fixture
- [#173565](https://github.com/openclaw/openclaw/pull/173565) fix(codex): backport startup app snapshot reuse to October
- [#173516](https://github.com/openclaw/openclaw/pull/173516) fix(codex): stop failing successful one-shot commands at cleanup
- [#173560](https://github.com/openclaw/openclaw/pull/173560) fix: exclude generated sandbox skills from Git changes
- [#172784](https://github.com/openclaw/openclaw/pull/172784) fix(update): recover stopped gateways after unverified service activation
- [#173540](https://github.com/openclaw/openclaw/pull/173540) refactor(providers): simplify request and runtime ownership
- [#173561](https://github.com/openclaw/openclaw/pull/173561) refactor(tests): consolidate SSRF rebound cases
- [#172210](https://github.com/openclaw/openclaw/pull/172210) refactor(ui): remove Lit types from app host contracts
- [#173273](https://github.com/openclaw/openclaw/pull/173273) fix: allow quoted callback URLs through node exec approvals
- [#173549](https://github.com/openclaw/openclaw/pull/173549) refactor(ui): render agent memory panel natively in Solid
- [#173432](https://github.com/openclaw/openclaw/pull/173432) fix(gateway): omit core web_search from tools.effective when the saved session override disables it
- [#173547](https://github.com/openclaw/openclaw/pull/173547) fix(codex): release completed subagents after cleanup failures
- [#173498](https://github.com/openclaw/openclaw/pull/173498) fix(doctor): preserve explicit session runtime selections
- [#173553](https://github.com/openclaw/openclaw/pull/173553) fix(ui): report scoped snapshot transaction failures
- [#171646](https://github.com/openclaw/openclaw/pull/171646) refactor(ui): render chat transcript and replies with Solid
- [#173486](https://github.com/openclaw/openclaw/pull/173486) fix(browser): preserve network settings during allowed navigation
- [#173509](https://github.com/openclaw/openclaw/pull/173509) fix(cron): record the planned account for legacy automations instead of failing every run
- [#173426](https://github.com/openclaw/openclaw/pull/173426) refactor: trust prepared feature-plugin facts
- [#171827](https://github.com/openclaw/openclaw/pull/171827) refactor(ui): port chat metadata rendering to Solid
- [#173536](https://github.com/openclaw/openclaw/pull/173536) fix(build): release preparation ownership after cancellation
- [#173495](https://github.com/openclaw/openclaw/pull/173495) fix: prevent Codex recovery and completion handoffs from stalling
- [#173545](https://github.com/openclaw/openclaw/pull/173545) perf(agents): share retained system prompt prefixes
- [#173544](https://github.com/openclaw/openclaw/pull/173544) fix(tests): enforce sequential allowlist resolution
- [#173521](https://github.com/openclaw/openclaw/pull/173521) refactor(ui): remove unused presentation property helper
- [#172099](https://github.com/openclaw/openclaw/pull/172099) refactor(ui): exercise picker layouts with Solid fixtures
- [#172363](https://github.com/openclaw/openclaw/pull/172363) refactor(ui): render plugin routes directly with Solid
- [#173491](https://github.com/openclaw/openclaw/pull/173491) test(ui): migrate pane fixtures to Solid and drain held routes
- [#173535](https://github.com/openclaw/openclaw/pull/173535) perf(agents): release completed parents retained by fork replay
- [#173526](https://github.com/openclaw/openclaw/pull/173526) fix(slack): backport queued failure deduplication to October
- [#172212](https://github.com/openclaw/openclaw/pull/172212) fix(ui): refresh retained session labels on locale changes
- [#173452](https://github.com/openclaw/openclaw/pull/173452) refactor(auto-reply): simplify runtime bookkeeping
- [#173454](https://github.com/openclaw/openclaw/pull/173454) fix: wake sessions when background processes are lost on restart
- [#173515](https://github.com/openclaw/openclaw/pull/173515) fix(slack): deduplicate failures from queued follow-up replies
- [#172727](https://github.com/openclaw/openclaw/pull/172727) fix(codex): avoid forced app refreshes on thread startup
- [#173519](https://github.com/openclaw/openclaw/pull/173519) improve(ci): reduce macOS setup and real-time fixture cost
- [#173514](https://github.com/openclaw/openclaw/pull/173514) fix(ui): remove unused Lit test helper
- [#173469](https://github.com/openclaw/openclaw/pull/173469) perf(gateway): avoid profile writer queues on reconnect
- [#171846](https://github.com/openclaw/openclaw/pull/171846) refactor(ui): remove Lit dependency from subscriptions
- [#173468](https://github.com/openclaw/openclaw/pull/173468) fix(memory): avoid repeated scans of shared memory folders
- [#172597](https://github.com/openclaw/openclaw/pull/172597) refactor(ui): retire chat Web Awesome menu seams
- [#173533](https://github.com/openclaw/openclaw/pull/173533) perf(build): reduce ownership walks and overlap UI compression
- [#173471](https://github.com/openclaw/openclaw/pull/173471) fix(logging): drop malformed redaction entries instead of throwing
- [#173415](https://github.com/openclaw/openclaw/pull/173415) perf(gateway): avoid pairing queues during reconnect storms
- [#173528](https://github.com/openclaw/openclaw/pull/173528) refactor(tests): remove unused child-close wait helper
- [#173503](https://github.com/openclaw/openclaw/pull/173503) fix(cron): restore inherited native job authoring on October
- [#173532](https://github.com/openclaw/openclaw/pull/173532) improve(ci): shorten the real-Gateway proof tail
- [#171931](https://github.com/openclaw/openclaw/pull/171931) refactor(ui): own sidebar presence expiry without Lit
- [#173525](https://github.com/openclaw/openclaw/pull/173525) fix(update): honor drain deadline before status RPC dispatch
- [#173517](https://github.com/openclaw/openclaw/pull/173517) fix(tests): keep shutdown and stale recovery checks reliable
- [#173320](https://github.com/openclaw/openclaw/pull/173320) refactor(ui): use Solid branding for settings save status
- [#172456](https://github.com/openclaw/openclaw/pull/172456) fix: automation details retain old locale after language changes
- [#173451](https://github.com/openclaw/openclaw/pull/173451) perf(workspaces): skip dependency prewarm for disabled sandboxes
- [#173492](https://github.com/openclaw/openclaw/pull/173492) refactor: render Settings sidebar branding with Solid
- [#171887](https://github.com/openclaw/openclaw/pull/171887) refactor(ui): render picker and hosted-tab icons without Lit
- [#173211](https://github.com/openclaw/openclaw/pull/173211) refactor(ui): use Solid fixtures for chat annotation tests
- [#148682](https://github.com/openclaw/openclaw/pull/148682) fix: usage undercounts Claude CLI turns that make several model calls
- [#171562](https://github.com/openclaw/openclaw/pull/171562) refactor(ui): finish native hub tabs cutover
- [#173493](https://github.com/openclaw/openclaw/pull/173493) fix(imessage): keep one-to-one chat ID sends in direct sessions
- [#173394](https://github.com/openclaw/openclaw/pull/173394) refactor: consolidate directive and config parsing owners
- [#172365](https://github.com/openclaw/openclaw/pull/172365) refactor(ui): use Solid loading skeleton adapters and settings harness
- [#172250](https://github.com/openclaw/openclaw/pull/172250) refactor(ui): render picker and channel artwork with Solid
- [#173505](https://github.com/openclaw/openclaw/pull/173505) refactor(tests): run Telegram ownership proof in canonical suite
- [#171884](https://github.com/openclaw/openclaw/pull/171884) refactor(ui): remove legacy menu context relay
- [#171786](https://github.com/openclaw/openclaw/pull/171786) refactor(ui): retain native shell actions and lazy helpers
- [#173456](https://github.com/openclaw/openclaw/pull/173456) feat(control-ui): show plugin steering notes in chat
- [#172759](https://github.com/openclaw/openclaw/pull/172759) test(ui): mount menu surface fixtures with Solid
- [#172861](https://github.com/openclaw/openclaw/pull/172861) fix(reply): let stranded message-tool retries pass queued admission
- [#173511](https://github.com/openclaw/openclaw/pull/173511) fix(release): plugin asset hooks inherit release tooling's tsconfig
- [#172041](https://github.com/openclaw/openclaw/pull/172041) docs(memory): no path to move Ollama embeddings to llmman
- [#172639](https://github.com/openclaw/openclaw/pull/172639) fix(codex): plugin turns fail under managed on-request approval policies
- [#173502](https://github.com/openclaw/openclaw/pull/173502) test(qa): share Gateway startup in node control-plane proof
- [#173499](https://github.com/openclaw/openclaw/pull/173499) perf(doctor): avoid repeating integrity checks after agent migrations
- [#172117](https://github.com/openclaw/openclaw/pull/172117) fix(mac): long exec commands through the macOS app node fail after 20 seconds
- [#173213](https://github.com/openclaw/openclaw/pull/173213) fix: prevent stale leases after brief offline maintenance
- [#173264](https://github.com/openclaw/openclaw/pull/173264) perf(control-ui): avoid reparsing completed code while replies stream
- [#171219](https://github.com/openclaw/openclaw/pull/171219) refactor(ui): move chat header menus to native controls
- [#128845](https://github.com/openclaw/openclaw/pull/128845) fix(cron): keep replies to delivered questions in the same idle session
- [#173442](https://github.com/openclaw/openclaw/pull/173442) fix(pr): poll mergeability without repeating full inventories
- [#173333](https://github.com/openclaw/openclaw/pull/173333) perf(control-ui): remove chat reload padding jump and cut overlay style work
- [#173501](https://github.com/openclaw/openclaw/pull/173501) perf(sessions): skip unused physical row aliases
- [#173459](https://github.com/openclaw/openclaw/pull/173459) fix(advisor): cancel stale guidance after abort or new turn
- [#173458](https://github.com/openclaw/openclaw/pull/173458) fix: deduplicate steering without replaying rejected guidance
- [#173489](https://github.com/openclaw/openclaw/pull/173489) fix: preserve session forks during parent request preparation
- [#173460](https://github.com/openclaw/openclaw/pull/173460) fix(gateway): keep private model prompt projections out of display output
- [#173385](https://github.com/openclaw/openclaw/pull/173385) fix(ui): clear stuck model checks after catalog publication
- [#173475](https://github.com/openclaw/openclaw/pull/173475) perf(usage): batch durable rollup publications
- [#173496](https://github.com/openclaw/openclaw/pull/173496) refactor(tests): remove obsolete Android share staging tests
- [#173490](https://github.com/openclaw/openclaw/pull/173490) fix(talk): keep slow audio appends from ending calls
- [#173230](https://github.com/openclaw/openclaw/pull/173230) refactor(ui): simplify native session menu presentation
- [#171981](https://github.com/openclaw/openclaw/pull/171981) fix(ui): align native UI consumers and browser fixtures
- [#173208](https://github.com/openclaw/openclaw/pull/173208) refactor(ui): migrate chat microphone controls
- [#173487](https://github.com/openclaw/openclaw/pull/173487) fix: give the Claws catalog browser test its existing private-server owner
- [#173494](https://github.com/openclaw/openclaw/pull/173494) perf(build): hash warm cache inputs once
- [#173466](https://github.com/openclaw/openclaw/pull/173466) perf: reduce redundant cold transcript work
- [#173483](https://github.com/openclaw/openclaw/pull/173483) fix(ui): preserve Raw editor focus during config refreshes
- [#173375](https://github.com/openclaw/openclaw/pull/173375) refactor(providers): share catalog facts and JSON response ownership
- [#160409](https://github.com/openclaw/openclaw/pull/160409) fix(agents): failed apply_patch deletes earlier files when a later update hunk cannot apply
- [#170591](https://github.com/openclaw/openclaw/pull/170591) fix(buzz): Gateway exits when a relay closes during NIP-42 authentication
- [#173292](https://github.com/openclaw/openclaw/pull/173292) fix(onboarding): valid OpenRouter API key is rejected with a route mismatch during setup
- [#173488](https://github.com/openclaw/openclaw/pull/173488) test(qa): reuse Gateway in paired worker lifecycle proofs
- [#159333](https://github.com/openclaw/openclaw/pull/159333) fix: plugin before_tool_call hooks are skipped under openclaw agent exec
- [#173480](https://github.com/openclaw/openclaw/pull/173480) refactor(tests): remove Android fixture noise
- [#171863](https://github.com/openclaw/openclaw/pull/171863) refactor(ui): own page lifecycles without Lit adapters
- [#171652](https://github.com/openclaw/openclaw/pull/171652) refactor(ui): remove Lit from native chat tests
- [#173397](https://github.com/openclaw/openclaw/pull/173397) fix(signal): keep reply media context across restarts
- [#172039](https://github.com/openclaw/openclaw/pull/172039) refactor(ui): remove obsolete Web Awesome residuals
- [#173464](https://github.com/openclaw/openclaw/pull/173464) fix(clickclack): retain activity updates during in-flight writes
- [#171691](https://github.com/openclaw/openclaw/pull/171691) refactor(ui): render Settings navigation with Solid
- [#173004](https://github.com/openclaw/openclaw/pull/173004) refactor(ui): remove activity media bridge
- [#173470](https://github.com/openclaw/openclaw/pull/173470) refactor(ui): remove Claws rendering bridges
- [#171882](https://github.com/openclaw/openclaw/pull/171882) refactor: unify setup wizard controls in Solid
- [#173265](https://github.com/openclaw/openclaw/pull/173265) refactor(ui): port chat pane support to Solid
- [#154958](https://github.com/openclaw/openclaw/pull/154958) fix(workboard): keep dispatch working with oversized stored comments
- [#173424](https://github.com/openclaw/openclaw/pull/173424) perf: reduce redundant subagent completion writes
- [#172930](https://github.com/openclaw/openclaw/pull/172930) fix: preserve short sidebar names on touch screens
- [#173433](https://github.com/openclaw/openclaw/pull/173433) improve: avoid repeated preparation work on agent turns
- [#173472](https://github.com/openclaw/openclaw/pull/173472) refactor(tests): trim redundant Android fixtures
- [#168583](https://github.com/openclaw/openclaw/pull/168583) fix(memory-wiki): reject malformed UTF-8 before rewriting vault pages
- [#159157](https://github.com/openclaw/openclaw/pull/159157) fix: requester wake fails when a child's direct result is mirrored before its reply
- [#173411](https://github.com/openclaw/openclaw/pull/173411) fix(cron): keep legacy env/config-key automations running without fallback
- [#172051](https://github.com/openclaw/openclaw/pull/172051) refactor(ui): simplify Systems route rendering
- [#173225](https://github.com/openclaw/openclaw/pull/173225) fix(state): retain failed native lease cleanup for canonical close
- [#173443](https://github.com/openclaw/openclaw/pull/173443) fix(matrix): retire notification markers with decrypt retries
- [#173232](https://github.com/openclaw/openclaw/pull/173232) refactor: simplify board core widget property updates
- [#173457](https://github.com/openclaw/openclaw/pull/173457) refactor(tests): trim sidecar test scaffolding
- [#142571](https://github.com/openclaw/openclaw/pull/142571) fix(gateway): reject ambiguous QR login accounts and preserve sibling listeners
- [#173321](https://github.com/openclaw/openclaw/pull/173321) fix(nostr): filter literal-allowlist authors before admission
- [#173314](https://github.com/openclaw/openclaw/pull/173314) fix(security): warn when toolsBySender uses mutable name or username keys
- [#173218](https://github.com/openclaw/openclaw/pull/173218) test(ui): wait for recovered catalog publication
- [#170253](https://github.com/openclaw/openclaw/pull/170253) fix(exec): expand file: URI sqlite targets before variable expansion in live-state guard
- [#172695](https://github.com/openclaw/openclaw/pull/172695) test(ui): preserve reasoning coverage and diagnose boot failures
- [#173239](https://github.com/openclaw/openclaw/pull/173239) fix: preserve session caches when database workers exit
- [#173260](https://github.com/openclaw/openclaw/pull/173260) perf(cron): reuse committed store and session facts
- [#173449](https://github.com/openclaw/openclaw/pull/173449) perf(gateway): reuse file readers across sparse visits
- [#171600](https://github.com/openclaw/openclaw/pull/171600) feat: show Claw contents and open new agent chat after Add
- [#173420](https://github.com/openclaw/openclaw/pull/173420) refactor(channels): reuse prepared transport and runtime owners
- [#173448](https://github.com/openclaw/openclaw/pull/173448) perf(plugins): avoid redundant schema hook invocation scopes
- [#172358](https://github.com/openclaw/openclaw/pull/172358) test(ui): migrate provider icon coverage off Lit
- [#157106](https://github.com/openclaw/openclaw/pull/157106) fix: catalog list fails when Codex thread previews are huge
- [#173342](https://github.com/openclaw/openclaw/pull/173342) fix: preserve unfinished tasks when the Gateway stops
- [#173402](https://github.com/openclaw/openclaw/pull/173402) fix(gateway): keep stale UI tabs from delaying reconnects
- [#173358](https://github.com/openclaw/openclaw/pull/173358) fix: updates stall on an unhealthy incumbent Gateway
- [#173401](https://github.com/openclaw/openclaw/pull/173401) ci: avoid the hybrid PR compiler-planning queue
- [#173444](https://github.com/openclaw/openclaw/pull/173444) refactor(tests): remove fixture-only node authority model
- [#138033](https://github.com/openclaw/openclaw/pull/138033) feat(agents): label unresolved compaction model
- [#167326](https://github.com/openclaw/openclaw/pull/167326) fix(config): name the rejected-config reason in directory-resolution warnings
- [#169168](https://github.com/openclaw/openclaw/pull/169168) fix(update): keep recovery deadline monotonic across wall-clock jumps
- [#173422](https://github.com/openclaw/openclaw/pull/173422) fix(line): keep message content out of verbose logs
- [#168375](https://github.com/openclaw/openclaw/pull/168375) fix(oc-path): recursive wildcard misses zero-segment matches and duplicates results
- [#173438](https://github.com/openclaw/openclaw/pull/173438) test(ui): give update warnings distinct fixture messages
- [#173427](https://github.com/openclaw/openclaw/pull/173427) test(ci): keep Apple cache outcome literal typed
- [#172951](https://github.com/openclaw/openclaw/pull/172951) fix: show live waits for local model responses
- [#173366](https://github.com/openclaw/openclaw/pull/173366) fix: keep gateway startup alive through model refresh replacement
- [#172972](https://github.com/openclaw/openclaw/pull/172972) test(ui): exercise detached composer reconnect
- [#172863](https://github.com/openclaw/openclaw/pull/172863) fix(ui): select new sessions immediately while naming
- [#173405](https://github.com/openclaw/openclaw/pull/173405) refactor(tests): consolidate desktop sleep cases
- [#173406](https://github.com/openclaw/openclaw/pull/173406) perf(sessions): index retained actor publication subscribers
- [#173435](https://github.com/openclaw/openclaw/pull/173435) refactor(tests): use the Rust signing constructor directly
- [#173429](https://github.com/openclaw/openclaw/pull/173429) fix(discord): retire expired component registry projections
- [#173280](https://github.com/openclaw/openclaw/pull/173280) fix: local Ollama can retrieve memory directly by default
- [#173410](https://github.com/openclaw/openclaw/pull/173410) perf(sqlite): share admission scope snapshots across revisions
- [#173409](https://github.com/openclaw/openclaw/pull/173409) fix(update): keep no-restart package updates successful
- [#173253](https://github.com/openclaw/openclaw/pull/173253) perf(sessions): reuse confirmed local transcript delivery
- [#171577](https://github.com/openclaw/openclaw/pull/171577) refactor(ui): render plugin tool-result surfaces natively
- [#173414](https://github.com/openclaw/openclaw/pull/173414) perf(gateway): reuse roster selection across list polls
- [#173398](https://github.com/openclaw/openclaw/pull/173398) perf(diagnostics): skip telemetry work without interested consumers
- [#172739](https://github.com/openclaw/openclaw/pull/172739) test(ui): publish model-picker fixtures through live Gateway
- [#173054](https://github.com/openclaw/openclaw/pull/173054) perf(sessions): avoid redundant turn delivery and activity writes
- [#173340](https://github.com/openclaw/openclaw/pull/173340) perf(tooling): skip unused historical blobs in line-cap checks
- [#173326](https://github.com/openclaw/openclaw/pull/173326) test: remove low-value tests (batch d140)
- [#173319](https://github.com/openclaw/openclaw/pull/173319) fix(release): accept carried-forward npm preparation jobs after producer reruns
- [#170289](https://github.com/openclaw/openclaw/pull/170289) fix: keep browser pairing credentials out of opener process arguments
- [#173407](https://github.com/openclaw/openclaw/pull/173407) fix(slack): settle relay accepts before socket recovery
- [#173369](https://github.com/openclaw/openclaw/pull/173369) fix: keep local context timeouts out of model failover
- [#173221](https://github.com/openclaw/openclaw/pull/173221) refactor(ui): retire unused Lit scroll-state directive
- [#173418](https://github.com/openclaw/openclaw/pull/173418) perf(sessions): reduce cached row presentation allocations
- [#173408](https://github.com/openclaw/openclaw/pull/173408) perf(sessions): keep cold history reads off the writer queue
- [#172015](https://github.com/openclaw/openclaw/pull/172015) fix(ollama): allow Podman gateway link-local for provider-owned embedding origin
- [#173399](https://github.com/openclaw/openclaw/pull/173399) fix: preserve Wiki notes when generated page reads fail
- [#173413](https://github.com/openclaw/openclaw/pull/173413) perf(sessions): reduce actor replica notification allocations
- [#173339](https://github.com/openclaw/openclaw/pull/173339) fix(usage): refresh large transcript archive inventories
- [#162398](https://github.com/openclaw/openclaw/pull/162398) fix: rotate auth profiles before long rate-limit waits
- [#173283](https://github.com/openclaw/openclaw/pull/173283) fix(pr): preserve mergeability budget through local proof
- [#173371](https://github.com/openclaw/openclaw/pull/173371) fix: warn when session participant recording fails
- [#172802](https://github.com/openclaw/openclaw/pull/172802) feat: shrink standalone sidecars and bundle SQLite
- [#173389](https://github.com/openclaw/openclaw/pull/173389) fix(gateway): retry unstarted chat sends across restarts
- [#173250](https://github.com/openclaw/openclaw/pull/173250) perf: reduce deferred database work after local turns
- [#173404](https://github.com/openclaw/openclaw/pull/173404) fix: recover tasks after malformed OpenAI stream events
- [#159136](https://github.com/openclaw/openclaw/pull/159136) fix: CLI channel sessions cannot spawn worker threads
- [#173298](https://github.com/openclaw/openclaw/pull/173298) perf(cron): reduce allocation when hashing list revisions
- [#173288](https://github.com/openclaw/openclaw/pull/173288) test(agents,plugins,config,gateway): remove low-value tests (batch d137)
- [#173274](https://github.com/openclaw/openclaw/pull/173274) test(plugins,gateway,scripts): remove low-value tests (batch d135)
- [#173393](https://github.com/openclaw/openclaw/pull/173393) fix(nodes): workspace setup fails during a pairing change
- [#171623](https://github.com/openclaw/openclaw/pull/171623) feat: add Claws as ordinary agents and resources
- [#173196](https://github.com/openclaw/openclaw/pull/173196) fix(sessions): await agent schema preparation before discovery
- [#173395](https://github.com/openclaw/openclaw/pull/173395) fix(update): reconcile warnings in successful update reports
- [#173323](https://github.com/openclaw/openclaw/pull/173323) fix: avoid scanning all sessions for project recents
- [#173380](https://github.com/openclaw/openclaw/pull/173380) fix(doctor): finish already-imported transcript retries
- [#172617](https://github.com/openclaw/openclaw/pull/172617) docs(ollama): no alternative when Ollama agent turns abort or hang
- [#173016](https://github.com/openclaw/openclaw/pull/173016) fix(gateway): macOS shutdown stalls for seconds when fseventsd is busy
- [#173374](https://github.com/openclaw/openclaw/pull/173374) refactor(tests): remove redundant Wear cases
- [#173343](https://github.com/openclaw/openclaw/pull/173343) refactor(channels): reuse prepared channel facts and bookkeeping
- [#160433](https://github.com/openclaw/openclaw/pull/160433) fix(logging): Gateway hangs at 100% CPU and ignores SIGTERM after the log date rolls over on a deleted /tmp
- [#162078](https://github.com/openclaw/openclaw/pull/162078) fix(whatsapp): messages that first arrive undecryptable are never delivered
- [#173246](https://github.com/openclaw/openclaw/pull/173246) fix: fresh macOS profiles fail Gateway startup and skip automatic setup
- [#164210](https://github.com/openclaw/openclaw/pull/164210) fix(whatsapp): stickers sent from WhatsApp Web or Desktop fail to download
- [#173382](https://github.com/openclaw/openclaw/pull/173382) fix(code-mode): distinguish worker retirement causes
- [#133862](https://github.com/openclaw/openclaw/pull/133862) fix(matrix): bound monitor waitForIdle on hung joins
- [#142434](https://github.com/openclaw/openclaw/pull/142434) fix(whatsapp): avoid duplicate sends after socket failures
- [#173277](https://github.com/openclaw/openclaw/pull/173277) perf(gateway): bound pairing snapshots during connect attachment
- [#172908](https://github.com/openclaw/openclaw/pull/172908) fix: retry wrapped and ReAct tool-call text natively
- [#173354](https://github.com/openclaw/openclaw/pull/173354) refactor(ui): render chat welcome and context controls with Solid
- [#173384](https://github.com/openclaw/openclaw/pull/173384) perf(recovery): skip archived sessions before writer preparation
- [#173267](https://github.com/openclaw/openclaw/pull/173267) refactor(tests): compile Gateway SDK compatibility contracts
- [#173242](https://github.com/openclaw/openclaw/pull/173242) test(ci, subagents, qa-lab, flows, auto-reply, macos): remove low-value tests (batch d129)
- [#173379](https://github.com/openclaw/openclaw/pull/173379) fix(diagnostics): expose worker external and ArrayBuffer memory
- [#173364](https://github.com/openclaw/openclaw/pull/173364) fix(ai): Gemini references use the wrong definition namespace
- [#173322](https://github.com/openclaw/openclaw/pull/173322) fix: show why agent creation is unavailable
- [#173359](https://github.com/openclaw/openclaw/pull/173359) test(tui, streams, agents): remove low-value tests (batch d142)
- [#173376](https://github.com/openclaw/openclaw/pull/173376) test(logging): isolate prefix cases from cached inode
- [#173200](https://github.com/openclaw/openclaw/pull/173200) fix: preserve SQLite safety during Doctor backups and cleanup
- [#172906](https://github.com/openclaw/openclaw/pull/172906) fix(memory): stop quota retries from search maintenance
- [#172705](https://github.com/openclaw/openclaw/pull/172705) fix: preserve bound Codex history after app-server restart
- [#173261](https://github.com/openclaw/openclaw/pull/173261) perf: reduce repeated Gateway warm-turn work
- [#173297](https://github.com/openclaw/openclaw/pull/173297) fix: avoid duplicate store waits when replaying session approvals
- [#173318](https://github.com/openclaw/openclaw/pull/173318) fix(worktrees): avoid recalibrating Btrfs checkouts on every commit
- [#173356](https://github.com/openclaw/openclaw/pull/173356) test(plugin-sdk): publish explicit facade enablement
- [#173301](https://github.com/openclaw/openclaw/pull/173301) refactor: consolidate SQLite worker bindings and receipts
- [#173336](https://github.com/openclaw/openclaw/pull/173336) fix(file-transfer): report unreadable directory metadata
- [#173347](https://github.com/openclaw/openclaw/pull/173347) fix(cron): preserve failure alerts refused before delivery
- [#173331](https://github.com/openclaw/openclaw/pull/173331) test(core,plugins,cli): remove low-value tests (batch d141)
- [#173324](https://github.com/openclaw/openclaw/pull/173324) test: remove low-value tests (batch d139)
- [#173352](https://github.com/openclaw/openclaw/pull/173352) refactor(tests): retire Wear layout dimension snapshots
- [#173363](https://github.com/openclaw/openclaw/pull/173363) chore(agents): simplify changes before opening a PR
- [#172729](https://github.com/openclaw/openclaw/pull/172729) fix(ui): keep model defaults available during initial loading
- [#173317](https://github.com/openclaw/openclaw/pull/173317) perf(code-mode): retire surplus idle workers after bursts
- [#173341](https://github.com/openclaw/openclaw/pull/173341) fix(update): avoid rollback when post-plugin lint cannot finish
- [#173330](https://github.com/openclaw/openclaw/pull/173330) fix(update): preserve up-to-date status across cached startup checks
- [#173329](https://github.com/openclaw/openclaw/pull/173329) fix(update): wait for marker readiness and accept configured fallbacks
- [#173295](https://github.com/openclaw/openclaw/pull/173295) fix(github): avoid repeated avatar downloads for unchanged previews
- [#173325](https://github.com/openclaw/openclaw/pull/173325) fix(ci): repair worker grant fixtures and Testbox queue policy
- [#173315](https://github.com/openclaw/openclaw/pull/173315) test(agents,plugins,ui): remove low-value tests (batch d138)
- [#172748](https://github.com/openclaw/openclaw/pull/172748) fix(openai): reject oversized Decisions requests before API calls
- [#172912](https://github.com/openclaw/openclaw/pull/172912) fix(compaction): explain requests that cannot fit after compaction
- [#172885](https://github.com/openclaw/openclaw/pull/172885) fix(logging): keep logs.tail cost proportional to the window
- [#155468](https://github.com/openclaw/openclaw/pull/155468) chore(qa): cover Control UI reconnect continuity

#### 🐛 New Issues
- [#173204](https://github.com/openclaw/openclaw/issues/173204) [Bug]: Control UI "Add agent" spins forever on 2026.10.3; asks for a Control UI confirmation that never appears, no RPC reaches gateway `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `P0` `issue-rating: 🦪 silver shellfish` 💬6
- [#173082](https://github.com/openclaw/openclaw/issues/173082) [Bug]: doctor retains an update runtime when a Node process has no package.json `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬4
- [#172969](https://github.com/openclaw/openclaw/issues/172969) [Bug]: registerCliBackend without modelProvider is silently dropped, and the failure surfaces as "Invalid URL: must be http or https" `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬4
- [#173605](https://github.com/openclaw/openclaw/issues/173605) [Feature]: Move Skill Workshop from core into a bundled plugin `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬3
- [#173599](https://github.com/openclaw/openclaw/issues/173599) [Bug]: iMessage hides edit action for macOS 26 translation selector `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬3
- [#173166](https://github.com/openclaw/openclaw/issues/173166) [Bug]: Standalone HTTP MCP runtime retains a referenced socket after dispose and joinCleanup complete `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬3
- [#173453](https://github.com/openclaw/openclaw/issues/173453) Chrome relay: Network.setCacheDisabled can report false access revocation during authorised navigation `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#173461](https://github.com/openclaw/openclaw/issues/173461) [Bug]: Directory-resolution warning throws TypeError and emits nothing when the rejected config has malformed logging.redactPatterns `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#173172](https://github.com/openclaw/openclaw/issues/173172) [Bug]: Control UI "Gateway busy, retrying…" page polls /healthz forever after a WebSocket drop but never re-attempts the WS handshake — only a manual reload recovers `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬3
- [#173430](https://github.com/openclaw/openclaw/issues/173430) [Bug]: update repair on Windows refuses on Microsoft Defender's DefenderSessionHelper.exe ("Handoff descendants remain alive or unverified") `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬3
- [#173348](https://github.com/openclaw/openclaw/issues/173348) [Bug]: Gateway service restart in the setup wizard prints a success message and rejects when the restart fails `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬3
- [#173184](https://github.com/openclaw/openclaw/issues/173184) [Feature]: Config-driven retention policy for trajectory_runtime_events `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬3
- [#173057](https://github.com/openclaw/openclaw/issues/173057) [Bug]: a shared agents.defaults.workspace root stays a live workspace for prompt assembly and the reply-path guard, so deleting its bootstrap files breaks every chat of that agent `P1` `impact:message-loss` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬3
- [#173169](https://github.com/openclaw/openclaw/issues/173169) terminal tool: read() returns full unbounded buffer with no cursor/offset — output becomes unreliable in long sessions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬3
- [#173170](https://github.com/openclaw/openclaw/issues/173170) Agent cannot open terminal panel — manual user action required at every session start before shell commands work `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬3
- [#173167](https://github.com/openclaw/openclaw/issues/173167) exec shell tool: timeoutSeconds does not extend Code Mode wall-clock budget — commands >~10s always background `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬3
- [#172897](https://github.com/openclaw/openclaw/issues/172897) 2026.9.6 → 2026.10.3: doctor stops with session-entry-state (step-refused); dry-run reports historical_transcript_deferred on archived legacy registry `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬3
- [#173039](https://github.com/openclaw/openclaw/issues/173039) [Bug]: Typesafe rejects valid System One responses containing additive metadata `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬3
- [#173542](https://github.com/openclaw/openclaw/issues/173542) Update failure: candidate-doctor (2026.9.9) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#173476](https://github.com/openclaw/openclaw/issues/173476) Update failure: updater-runtime-retention (2026.9.7) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#173290](https://github.com/openclaw/openclaw/issues/173290) Update failure: managed-service-preflight (2026.9.8) `P2` `clawsweeper:needs-info` `issue-rating: 🦐 gold shrimp` `impact:ux-friction` 💬2
- [#173370](https://github.com/openclaw/openclaw/issues/173370) Update failure: validating (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#173303](https://github.com/openclaw/openclaw/issues/173303) Update failure: package-swap (2026.10.3) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#173497](https://github.com/openclaw/openclaw/issues/173497) Update failure: package-swap (2026.9.8) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#173474](https://github.com/openclaw/openclaw/issues/173474) Update failure: retired-state-format (2026.9.9) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#173570](https://github.com/openclaw/openclaw/issues/173570) Update from 2026.8.35 intermittently fails with GATEWAY_RESTART_PREPARATION_REFUSED (serving-owner) though the new version is running `P2` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` `maturity:stable` 💬2
- [#173564](https://github.com/openclaw/openclaw/issues/173564) [Bug]: 2026.10.3 Docker entrypoint runs doctor --fix on every start, taking a full ~11 GB pre-repair capture each time (≈10 min startup, 30-day retention fills disk) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#173403](https://github.com/openclaw/openclaw/issues/173403) tools.effective includes core web_search when saved SessionToolOverrides.webSearch is false `bug` `no-stale` `bug:behavior` `P2` 💬2
- [#173479](https://github.com/openclaw/openclaw/issues/173479) Control UI composer: textarea does not scroll when long text is prefilled (quick-prompt / slash-command prefill) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬2
- [#173439](https://github.com/openclaw/openclaw/issues/173439) Install the Windows desktop release candidate and verify its runtime before signing `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬2
- [#173351](https://github.com/openclaw/openclaw/issues/173351) [Bug]: Node worker supervisor command failures are collapsed to an opaque UNAVAILABLE and never logged `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#173287](https://github.com/openclaw/openclaw/issues/173287) [Feature]: QA Lab discovery for plugin-owned eval scenario packs `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬2
- [#173089](https://github.com/openclaw/openclaw/issues/173089) [Bug]: successful beta.4 report still says to wait for the update that just finished `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `maturity:stable` 💬2
- [#173396](https://github.com/openclaw/openclaw/issues/173396) [Bug]: Telegram rich-message replies show raw HTML lists in Control UI `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#173357](https://github.com/openclaw/openclaw/issues/173357) [Bug]: Gateway exits at startup when a prepared model runtime publication is superseded, boot-loops into the crash-loop breaker `clawsweeper:source-repro` `impact:crash-loop` `P0` `issue-rating: 🦞 diamond lobster` 💬2
- [#173199](https://github.com/openclaw/openclaw/issues/173199) [Bug]: Updates page shows "Update status unavailable" for healthy up-to-date installs without an auto-update schedule `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#173335](https://github.com/openclaw/openclaw/issues/173335) Cron automations fail with `Scheduled account "X" is unavailable` after 2026.10.3 upgrade — same account succeeds and fails across jobs in the same minute; interactive sends always fine `P1` `impact:message-loss` 💬2
- [#173084](https://github.com/openclaw/openclaw/issues/173084) [Bug]: Debian npm update tells the operator to restore the pacman database `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#173227](https://github.com/openclaw/openclaw/issues/173227) [Bug]: gateway stability --export silently ignores --port for its health snapshot `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#173095](https://github.com/openclaw/openclaw/issues/173095) Control UI: session sidebar stays empty on cold start that restores the last chat route (sessions.list never requested) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬2
- [#173027](https://github.com/openclaw/openclaw/issues/173027) [Bug]: Remote model catalog refresh fails on released versions: the hosted catalog now lists input "video" `no-stale` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` 💬2
- [#172987](https://github.com/openclaw/openclaw/issues/172987) [Feature]: Add a constrained-host runtime profile for “Agent in Device / Agent in Place” deployments `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬2
- [#172708](https://github.com/openclaw/openclaw/issues/172708) [Bug]: WhatsApp status reaction ends on ❌ for a message that arrives during an active run, though the next run succeeds `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#173081](https://github.com/openclaw/openclaw/issues/173081) [Bug]: beta.4 update candidate config read still exits 1 and leaves the systemd unit unchanged `P2` `maturity:stable` `impact:ux-friction` 💬2
- [#173061](https://github.com/openclaw/openclaw/issues/173061) [Bug]: a parked "plugins reload --wait" holds the plugin-replacement gate with no deadline and blocks the start of every isolated agent run on the Gateway `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#172877](https://github.com/openclaw/openclaw/issues/172877) [Bug]: Restart-recovered turn from a CLI/RPC operator chat loses its webchat source; targetless message send fails `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:message-loss` 💬2
- [#173594](https://github.com/openclaw/openclaw/issues/173594) Stale-final recovery emits delivery-failure notice after already_delivered suppression `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#173583](https://github.com/openclaw/openclaw/issues/173583) [Bug]: backup create --to <location> fails under the Gateway: scratch archive lands in ~/.openclaw/tmp (inside source) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#173586](https://github.com/openclaw/openclaw/issues/173586) [Feature]: Agent Guidance plugin for shared instructions without workspace rewrites `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#173578](https://github.com/openclaw/openclaw/issues/173578) [Bug]: Android setup still fails AUTH_VERIFIED_USER_REQUIRED with named roles while browser access works `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#173546](https://github.com/openclaw/openclaw/issues/173546) Generated sandbox skills appear as untracked project changes `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#173568](https://github.com/openclaw/openclaw/issues/173568) [Bug]: Node compile cache grows far past MAX_BYTES (512 MiB): maintenance never completes from short-lived CLI processes (2026.10.2, macOS) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#173562](https://github.com/openclaw/openclaw/issues/173562) [Bug]: Android dictation reports on-device speech unavailable for en-CA locale; works with en-US `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#173240](https://github.com/openclaw/openclaw/issues/173240) Quoted OAuth callback URLs are rejected by node exec before approval `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#173543](https://github.com/openclaw/openclaw/issues/173543) [Bug]: claude-cli resume never sees turns from other runtimes (model toggle to Codex harness and back); abort-cleared binding starts with no history `P2` `impact:session-state` 💬1
- [#173529](https://github.com/openclaw/openclaw/issues/173529) [Bug]: Local terminal chat (`openclaw chat`, `terminal`, `tui --local`) sends model requests without the configured `proxy.proxyUrl` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#173518](https://github.com/openclaw/openclaw/issues/173518) Feature: select a web-search provider per isolated automation `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#173367](https://github.com/openclaw/openclaw/issues/173367) [Bug]: one-to-one iMessage chat_id targets are stored as group sessions `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#173507](https://github.com/openclaw/openclaw/issues/173507) [Bug]: LiteLLM image generation fails with "response malformed" when the backend returns image URLs `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#173512](https://github.com/openclaw/openclaw/issues/173512) Factory enterprise sign-in needs host-scoped Git coauthor credit `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:linked-pr-open` 💬1
- [#173388](https://github.com/openclaw/openclaw/issues/173388) Control UI Talk: one talk.session.appendAudio slower than 8 s ends the session, even when the gateway recovers `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#173484](https://github.com/openclaw/openclaw/issues/173484) Windows MSIX 2026.9.900.0: isolated-session backup blocked by Cookies EBUSY and SQLite ancestor ACL guard `P2` `impact:ux-friction` 💬1
- [#173478](https://github.com/openclaw/openclaw/issues/173478) [Bug]: Resolving an unregistered CLI command captures every external plugin (~54k files, ~0.9 GB) and takes minutes before "unknown command" `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#173477](https://github.com/openclaw/openclaw/issues/173477) [Bug]: Gateway child cleanup timeout causes subagent output pipe truncation (stop_close_failed) 💬1
- [#173445](https://github.com/openclaw/openclaw/issues/173445) [Bug]: memory-core watcher reconciles every 30 s with ~10 syscalls per file and one subscription per agent — shared extraPaths saturate the Gateway main thread `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#173440](https://github.com/openclaw/openclaw/issues/173440) [Bug]: every freshly spawned sqlite-store worker runs a full integrity_check on state/openclaw.sqlite (~2 s per write on a 250 MB DB; workers retire after 60 s idle) `P2` `impact:other` 💬1
- [#173436](https://github.com/openclaw/openclaw/issues/173436) zai provider: quota exhaustion (429 "使用上限") misclassified as rate_limit, causing 9x retry before fallback `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#173423](https://github.com/openclaw/openclaw/issues/173423) Compaction cannot split a processed protected turn when accumulated tool results exceed the retention budget `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#173412](https://github.com/openclaw/openclaw/issues/173412) Restart recovery archives the agent main session and its rollover; /reset, sessions.reset and "Resume in new session" all fail `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#173417](https://github.com/openclaw/openclaw/issues/173417) [Bug]: Session observer disables its run after transient Codex plugin-replacement admission errors `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#173400](https://github.com/openclaw/openclaw/issues/173400) Retired `skill-collection-review` cron rows survive upgrade to 2026.10.3 and can't be removed `P2` `impact:ux-friction` 💬1
- [#172866](https://github.com/openclaw/openclaw/issues/172866) [Bug]: Doctor retry rejects an already-imported legacy transcript and then refuses to archive the whole store `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#173386](https://github.com/openclaw/openclaw/issues/173386) [Bug]: plugin-sdk/approval-reaction-runtime no longer exports readApprovalReactionDeliveryMetadata (2026.10.5 betas break external plugins) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#173381](https://github.com/openclaw/openclaw/issues/173381) Same-model rate_limit retry never records a failure on the auth profile, so every concurrent run re-hits the limited profile and sleeps the full Retry-After `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#173365](https://github.com/openclaw/openclaw/issues/173365) [Bug]: source CLI switches from Node to auto-staged Bun, changing SQLite runtime `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#173077](https://github.com/openclaw/openclaw/issues/173077) [Bug]: Cron failure alerts are silently dropped when the transport rejects before settling `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#173360](https://github.com/openclaw/openclaw/issues/173360) [Bug]: Discord corrections wait until work finishes despite configured steer mode `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#173350](https://github.com/openclaw/openclaw/issues/173350) [Bug]: Fire-and-forget transcript publication in the session tool-result guard produces process-level unhandled rejections and silently drops updates `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#173332](https://github.com/openclaw/openclaw/issues/173332) [Bug]: Multi-step tasks silently stall after native child completion; parent resumes only when the user prompts again `P2` `impact:session-state` `impact:message-loss` 💬1
- [#173338](https://github.com/openclaw/openclaw/issues/173338) [Feature]: Typed provider-authoring additions to the plugin SDK for external provider plugins `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#173252](https://github.com/openclaw/openclaw/issues/173252) Matrix message read: before/after are described as ids but used as pagination tokens; an event id gets a raw HTTP 400 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#173313](https://github.com/openclaw/openclaw/issues/173313) config get masks sensitive values (auth.password) — verification loop misleads for hours during a Funnel outage recovery `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#173308](https://github.com/openclaw/openclaw/issues/173308) formatCliCommand mangles version-suffixed openclaw invocations when a container hint or profile is set `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#173296](https://github.com/openclaw/openclaw/issues/173296) [Bug]: [Windows] Gateway exits silently ~1s after Telegram provider starts (exit code 0xE0000027) `bug` `bug:crash` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#173193](https://github.com/openclaw/openclaw/issues/173193) Mobile community promotion crowds the session drawer `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `clawsweeper:needs-live-repro` 💬1
- [#173244](https://github.com/openclaw/openclaw/issues/173244) Telegram: admitted non-owners lose all commands except /new /reset once commands.ownerAllowFrom is set; /help fails silently `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#173236](https://github.com/openclaw/openclaw/issues/173236) Update failure: managed-service-handoff-unavailable (2026.9.3) `P2` `impact:ux-friction` 💬1
- [#173222](https://github.com/openclaw/openclaw/issues/173222) [Bug] Spawn broker owned map reaches 256 with 255 dead PIDs stuck exited=false (2026.10.3) `P1` `impact:crash-loop` 💬1
- [#173216](https://github.com/openclaw/openclaw/issues/173216) [Bug]: prepared update recovery deadlock with same-version third-generation install; standalone helper refuses `P2` `impact:ux-friction` 💬1
- [#173206](https://github.com/openclaw/openclaw/issues/173206) [Feature]: Move curated Dreaming settings ownership into Memory Core `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#173198](https://github.com/openclaw/openclaw/issues/173198) Agent model runtime publication times out on startup (2026.10.3), Slack agent goes silent `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬1
- [#173194](https://github.com/openclaw/openclaw/issues/173194) [Feature]: Retire obsolete external delivery routes without replacing the conversation `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#173171](https://github.com/openclaw/openclaw/issues/173171) [Bug]: Subagent completion announce to a DM on claude-cli runs with zero tools (message_tool_only forces disableTools) `P1` `impact:session-state` `impact:other` 💬1
- [#173162](https://github.com/openclaw/openclaw/issues/173162) Update failure: package-swap (2026.9.9) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#173158](https://github.com/openclaw/openclaw/issues/173158) [Feature]: Let clients read a compaction's summary (chat.message.get / sessions.get return only "Compaction") `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#173148](https://github.com/openclaw/openclaw/issues/173148) [Feature]: Tell the agent which client sent a webchat message (iOS app vs. browser Control UI) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#173136](https://github.com/openclaw/openclaw/issues/173136) Update failure: package-swap (2026.9.9) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#173127](https://github.com/openclaw/openclaw/issues/173127) [Bug]: 2026.10.3 — "Agent database preparation has ended: <agent>" flaps persistently; models.list / chat.metadata stay UNAVAILABLE for one agent `P2` `impact:auth-provider` `maturity:stable` `impact:ux-friction` 💬1
- [#173125](https://github.com/openclaw/openclaw/issues/173125) [Bug]: Reef rejects a verified non-secret PDF SHA-256 digest as high_entropy_token `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#173119](https://github.com/openclaw/openclaw/issues/173119) claude-cli: sub-agent completion wake of a top-level session runs with all tools disabled (`--tools ""`), model emits tool calls as text and can loop `P1` `impact:session-state` 💬1
- [#173116](https://github.com/openclaw/openclaw/issues/173116) Control UI hides labeled, categorized sessions created by an automation (`createdActor.type: "system"`) from the session list `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#173088](https://github.com/openclaw/openclaw/issues/173088) [Bug]: beta.4 update report says Doctor disposal timed out after 52ms `P3` `impact:ux-friction` 💬1
- [#173080](https://github.com/openclaw/openclaw/issues/173080) [Bug]: Session catalog transcript probe returns undefined for unreadable files (non-ENOENT), hiding read failures `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#173076](https://github.com/openclaw/openclaw/issues/173076) [Bug]: Skill upload lease-renewal heartbeat swallows renew failures and reports success `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#173085](https://github.com/openclaw/openclaw/issues/173085) [Bug]: beta.4 update progress history stops while the state database is in offline maintenance `P2` `impact:ux-friction` 💬1
- [#173073](https://github.com/openclaw/openclaw/issues/173073) [Bug]: Plugin approvals from `before_tool_call` for MCP tools have no viable wait path under the codex runtime — relay subprocess times out in ~9s while the approval card stays live `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#173002](https://github.com/openclaw/openclaw/issues/173002) [Bug]: 2026.10.2 claude-stdio live session deadlocks before initialize when Claude Code emits >16 pre-init hook events (every tool-enabled claude-cli turn hits the 600s no-output watchdog) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#172899](https://github.com/openclaw/openclaw/issues/172899) [Bug]: Tool-execution timeout reaches successful terminal bookkeeping; compaction failure source masks blocked liveness `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#172988](https://github.com/openclaw/openclaw/issues/172988) [Bug]: Heartbeat retries channel-not-ready every 60 s with no cap, re-running the full model turn each time `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#173058](https://github.com/openclaw/openclaw/issues/173058) [Security][Bug]: tools.fs.workspaceOnly does not restrict file tools, because the agent runtime also receives the OpenClaw state root as an allowed working directory `security` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#173062](https://github.com/openclaw/openclaw/issues/173062) [Bug]: config set/unset reports "applies without restarting the gateway" for fields whose live resolution is cached until restart (models.providers, agents.defaults.workspace) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#173060](https://github.com/openclaw/openclaw/issues/173060) [Bug]: plugin-provided tools are silently dropped by a narrowing tools.allow, even when each plugin tool is named explicitly `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#173059](https://github.com/openclaw/openclaw/issues/173059) [Bug][Docs]: the documented unattended-push setup (gh auth setup-git) writes to $HOME/.gitconfig, which is not persistent in the container image — git auth silently disappears on every image update `P2` `impact:ux-friction` 💬1
- [#173053](https://github.com/openclaw/openclaw/issues/173053) [Bug]: `bug` `bug:behavior` `P1` `impact:session-state` 💬1
- [#173033](https://github.com/openclaw/openclaw/issues/173033) Update failure: invalid-config (2026.10.3) `P0` `impact:ux-release-blocker` 💬1
- [#173030](https://github.com/openclaw/openclaw/issues/173030) [Feature]: Supported reply-custody handoff for plugin tools with external asynchronous responses `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#173611](https://github.com/openclaw/openclaw/issues/173611) [Bug]: Secrets refresh retry loop is unbounded and re-runs exec SecretRef providers on every pass (startup `secrets` phase: 557 s, 1Password daily limit exhausted)

#### 🔒 Closed Issues
- [#71058](https://github.com/openclaw/openclaw/issues/71058) [Feature]: Support for multiple Azure/Teams bots on a single Openclaw Gateway
- [#77298](https://github.com/openclaw/openclaw/issues/77298) Cron consecutiveErrors increments on gateway-restart interruptions, masking real agent-failure rate (post-#50414)
- [#121617](https://github.com/openclaw/openclaw/issues/121617) Post-compaction "Already compacted" guard misclassifies "nothing new to compact" as terminal failure when fixed context overhead exceeds budget
- [#136262](https://github.com/openclaw/openclaw/issues/136262) openai-completions stream: occasional bare text_delta replaying the full accumulated text doubles message content (n → 2n → n oscillation)
- [#145137](https://github.com/openclaw/openclaw/issues/145137) Small-model security block prevents local/Ollama models from using web_search and web_fetch tools
- [#81835](https://github.com/openclaw/openclaw/issues/81835) Bug: thinking parameter format incompatible with Volcengine CodingPlan v3 API
- [#80841](https://github.com/openclaw/openclaw/issues/80841) voice-call: support Twilio AMD on outbound + dynamic mode switch when machine detected
- [#106667](https://github.com/openclaw/openclaw/issues/106667) [Bug] Missing rate limit for channel reaction spam on status updates
- [#79670](https://github.com/openclaw/openclaw/issues/79670) [Bug] Onboarding recommends Gemini preview models without validating API tier quota limits
- [#89876](https://github.com/openclaw/openclaw/issues/89876) Telegram decision packet cards for bounded agent input
- [#139706](https://github.com/openclaw/openclaw/issues/139706) [Bug]: macOS companion exec host drops the request timeout and caps every system.run at 20s, then reports COMPANION_APP_UNAVAILABLE
- [#159059](https://github.com/openclaw/openclaw/issues/159059) Direct subagent result mirror written between a wake's keyed user and its reply triggers 'keyed user is outside the current turn' (2026.9.6)
- [#80556](https://github.com/openclaw/openclaw/issues/80556) ACP bound sessions: relay progress events to channel draft (streamTo:"parent" in binding config)
- [#161829](https://github.com/openclaw/openclaw/issues/161829) [Bug]: WhatsApp: message silently lost when first received as CIPHERTEXT placeholder - durable ingress completes the empty stub, placeholder resend with the same key is dropped as duplicate
- [#171096](https://github.com/openclaw/openclaw/issues/171096) [Bug]: Linux/npm update 2026.10.2 → 2026.10.3 rolls back with post-core-update-failed on slow-disk NAS (SQLite lock contention exhausts validation/inspection budgets)
- [#108599](https://github.com/openclaw/openclaw/issues/108599) sessions_send announce delivery causes 2-3x turn amplification on claude-cli agents (session-limit exhaustion observed)
- [#77039](https://github.com/openclaw/openclaw/issues/77039) registerMemoryCorpusSupplement registrations get wiped on lazy tool-load re-register of non-activating plugins
- [#135545](https://github.com/openclaw/openclaw/issues/135545) feat(message tool + Telegram): multi-media sends grouped into albums
- [#155155](https://github.com/openclaw/openclaw/issues/155155) [Feature]: Allow an explicitly opted-in non-loopback baseUrl for local System One decision providers
- [#151964](https://github.com/openclaw/openclaw/issues/151964) [Bug]: media generation completion wake queues behind the requester's own run — image_generate action=status deadlocks on "Generated media; delivering completion" and then logs a false delivery failure
- [#173166](https://github.com/openclaw/openclaw/issues/173166) [Bug]: Standalone HTTP MCP runtime retains a referenced socket after dispose and joinCleanup complete
- [#77378](https://github.com/openclaw/openclaw/issues/77378) [Bug]: Session rotation creates duplicate sessions with broken delivery context
- [#173461](https://github.com/openclaw/openclaw/issues/173461) [Bug]: Directory-resolution warning throws TypeError and emits nothing when the rejected config has malformed logging.redactPatterns
- [#128797](https://github.com/openclaw/openclaw/issues/128797) Cron delivery appended to a channel session does not refresh its idle freshness, so the reset cuts between the question and the operator's answer
- [#154936](https://github.com/openclaw/openclaw/issues/154936) workboard: workboard_dispatch aborts entire sweep when auto-generated summary comment exceeds 2000-char limit
- [#145561](https://github.com/openclaw/openclaw/issues/145561) Assembled context keeps a full UUID line per omitted tool result — 47% of lines / 35% of bytes are placeholders for dropped content
- [#158981](https://github.com/openclaw/openclaw/issues/158981) Model catalog inventories remain retained across neutral configuration reloads
- [#138039](https://github.com/openclaw/openclaw/issues/138039) [Feature]: Provide an explicit prompt-clarification workflow in or alongside Side Chat
- [#173039](https://github.com/openclaw/openclaw/issues/173039) [Bug]: Typesafe rejects valid System One responses containing additive metadata
- [#161576](https://github.com/openclaw/openclaw/issues/161576) [Bug]: Native one-shot success is rejected at cleanup; actual-route settlement remains unconfirmed
- [#90191](https://github.com/openclaw/openclaw/issues/90191) [Bug]: Codex spawn_agent competes with OpenClaw's sessions_spawn
- [#173403](https://github.com/openclaw/openclaw/issues/173403) tools.effective includes core web_search when saved SessionToolOverrides.webSearch is false
- [#158824](https://github.com/openclaw/openclaw/issues/158824) [Bug]: before_tool_call plugin hooks don't fire under `openclaw agent exec`
- [#154541](https://github.com/openclaw/openclaw/issues/154541) Update failure: global-install-failed (2026.9.4)
- [#156831](https://github.com/openclaw/openclaw/issues/156831) [Bug]: Codex session catalog thread/list pages grow to 8-24 MB from long previews, fail to parse, and stall sessions.catalog.list
- [#167314](https://github.com/openclaw/openclaw/issues/167314) [Bug]: doctor prints "Config unavailable" while editing that same config file (silent catch hides real schema-rejection error)
- [#173439](https://github.com/openclaw/openclaw/issues/173439) Install the Windows desktop release candidate and verify its runtime before signing
- [#161981](https://github.com/openclaw/openclaw/issues/161981) Rate-limit Retry-After cap (#148580) never rotates auth profiles when no model fallback is configured, so the run sleeps hours on an exhausted profile
- [#158945](https://github.com/openclaw/openclaw/issues/158945) [Bug]: sessions_spawn thread:true fails from claude-cli sessions while threadbound-subagent-spawn is advertised
- [#173089](https://github.com/openclaw/openclaw/issues/173089) [Bug]: successful beta.4 report still says to wait for the update that just finished
- [#142398](https://github.com/openclaw/openclaw/issues/142398) [Bug]: WhatsApp retries can change message identity after ambiguous failures
- [#173199](https://github.com/openclaw/openclaw/issues/173199) [Bug]: Updates page shows "Update status unavailable" for healthy up-to-date installs without an auto-update schedule
- [#173335](https://github.com/openclaw/openclaw/issues/173335) Cron automations fail with `Scheduled account "X" is unavailable` after 2026.10.3 upgrade — same account succeeds and fails across jobs in the same minute; interactive sends always fine
- [#173084](https://github.com/openclaw/openclaw/issues/173084) [Bug]: Debian npm update tells the operator to restore the pacman database
- [#152360](https://github.com/openclaw/openclaw/issues/152360) Plugin runtime.llm.complete never rotates auth profiles: a rate-limited first profile fails every plugin completion while agent turns fail over
- [#173227](https://github.com/openclaw/openclaw/issues/173227) [Bug]: gateway stability --export silently ignores --port for its health snapshot
- [#156747](https://github.com/openclaw/openclaw/issues/156747) [Bug]: Codex Plugin Quickly Consumes Available Disk Space on Gateway Restart
- [#119986](https://github.com/openclaw/openclaw/issues/119986) Suppress stray text tokens emitted before tool calls
- [#146125](https://github.com/openclaw/openclaw/issues/146125) Control UI: add a global cross-agent session Watchlist
- [#173027](https://github.com/openclaw/openclaw/issues/173027) [Bug]: Remote model catalog refresh fails on released versions: the hosted catalog now lists input "video"
- [#172708](https://github.com/openclaw/openclaw/issues/172708) [Bug]: WhatsApp status reaction ends on ❌ for a message that arrives during an active run, though the next run succeeds
- [#173081](https://github.com/openclaw/openclaw/issues/173081) [Bug]: beta.4 update candidate config read still exits 1 and leaves the systemd unit unchanged
- [#172877](https://github.com/openclaw/openclaw/issues/172877) [Bug]: Restart-recovered turn from a CLI/RPC operator chat loses its webchat source; targetless message send fails
- [#172222](https://github.com/openclaw/openclaw/issues/172222) [Bug]: Doctor's missing-key memory warning does not say that memory sync has stopped
- [#172230](https://github.com/openclaw/openclaw/issues/172230) [Bug]: z.ai quota reports drop numeric reset times and weekly periods
- [#172200](https://github.com/openclaw/openclaw/issues/172200) [Bug]: OpenAI Admin usage double-counts audio and omits cache writes
- [#173546](https://github.com/openclaw/openclaw/issues/173546) Generated sandbox skills appear as untracked project changes
- [#173240](https://github.com/openclaw/openclaw/issues/173240) Quoted OAuth callback URLs are rejected by node exec before approval
- [#173543](https://github.com/openclaw/openclaw/issues/173543) [Bug]: claude-cli resume never sees turns from other runtimes (model toggle to Codex harness and back); abort-cleared binding starts with no history
- [#173367](https://github.com/openclaw/openclaw/issues/173367) [Bug]: one-to-one iMessage chat_id targets are stored as group sessions
- [#173388](https://github.com/openclaw/openclaw/issues/173388) Control UI Talk: one talk.session.appendAudio slower than 8 s ends the session, even when the gateway recovers
- [#147269](https://github.com/openclaw/openclaw/issues/147269) buzz: unhandled SendingOnClosedConnection from nostr-tools AUTH send kills the gateway (exit 1) when the relay closes during the NIP-42 handshake
- [#173484](https://github.com/openclaw/openclaw/issues/173484) Windows MSIX 2026.9.900.0: isolated-session backup blocked by Cookies EBUSY and SQLite ancestor ACL guard
- [#173477](https://github.com/openclaw/openclaw/issues/173477) [Bug]: Gateway child cleanup timeout causes subagent output pipe truncation (stop_close_failed)
- [#168822](https://github.com/openclaw/openclaw/issues/168822) memory-wiki compile: malformed UTF-8 vault page is rewritten with replacement characters and the compile reports success
- [#137453](https://github.com/openclaw/openclaw/issues/137453) [Feature]: give an unresolvable compaction model its own reason label (compaction_model_unresolved) instead of the unknown catch-all — the classifier improvement invited in #114655
- [#168374](https://github.com/openclaw/openclaw/issues/168374) oc-path find: recursive wildcard ** misses zero-segment matches and duplicates results
- [#173440](https://github.com/openclaw/openclaw/issues/173440) [Bug]: every freshly spawned sqlite-store worker runs a full integrity_check on state/openclaw.sqlite (~2 s per write on a 250 MB DB; workers retire after 60 s idle)
- [#171311](https://github.com/openclaw/openclaw/issues/171311) [Bug]: `openclaw update --no-restart` still restarts the running Gateway (installation-replaced watcher), then the update records a failure
- [#173400](https://github.com/openclaw/openclaw/issues/173400) Retired `skill-collection-review` cron rows survive upgrade to 2026.10.3 and can't be removed
- [#172866](https://github.com/openclaw/openclaw/issues/172866) [Bug]: Doctor retry rejects an already-imported legacy transcript and then refuses to archive the whole store
- [#130807](https://github.com/openclaw/openclaw/issues/130807) Gateway wedges at 100% CPU (unkillable without SIGKILL) when /tmp becomes a stale mount: unguarded recursive mkdirSync at logger module load never returns
- [#163559](https://github.com/openclaw/openclaw/issues/163559) WhatsApp: stickers sent from WhatsApp Web/Desktop never download — bundled Baileys rebuilds directPath on the non-media host from `url`
- [#128938](https://github.com/openclaw/openclaw/issues/128938) [Bug]: Memory sync retries terminal OpenAI embeddings 429 (insufficient_quota) on every sync, starving the sync queue
- [#173077](https://github.com/openclaw/openclaw/issues/173077) [Bug]: Cron failure alerts are silently dropped when the transport rejects before settling
- [#173332](https://github.com/openclaw/openclaw/issues/173332) [Bug]: Multi-step tasks silently stall after native child completion; parent resumes only when the user prompts again
- [#171542](https://github.com/openclaw/openclaw/issues/171542) [Bug]: openclaw update run via node exec treats the node service as the Gateway and hangs waiting for Previous-Gateway readiness
- [#172251](https://github.com/openclaw/openclaw/issues/172251) [Bug]: Microsoft Edge TTS fails with HTTP 403 using node-edge-tts@1.2.10; fixed in 1.2.11
- [#173193](https://github.com/openclaw/openclaw/issues/173193) Mobile community promotion crowds the session drawer
- [#173236](https://github.com/openclaw/openclaw/issues/173236) Update failure: managed-service-handoff-unavailable (2026.9.3)
- [#173222](https://github.com/openclaw/openclaw/issues/173222) [Bug] Spawn broker owned map reaches 256 with 255 dead PIDs stuck exited=false (2026.10.3)
- [#173216](https://github.com/openclaw/openclaw/issues/173216) [Bug]: prepared update recovery deadlock with same-version third-generation install; standalone helper refuses
- [#136467](https://github.com/openclaw/openclaw/issues/136467) Control UI: independent chats shown as nested 'child' sessions via creation-lineage parentSessionKey; no way to detach/flatten
- [#143284](https://github.com/openclaw/openclaw/issues/143284) [Feature]: agent-facing tool to send Feishu interactive cards with option buttons (clicks route back to the session)
- [#170375](https://github.com/openclaw/openclaw/issues/170375) `logging.redactPatterns` also masks tool results sent to the model, and custom patterns replace the built-in set
- [#133937](https://github.com/openclaw/openclaw/issues/133937) [Feature]: split the work, more agents, smaller context window
- [#173171](https://github.com/openclaw/openclaw/issues/173171) [Bug]: Subagent completion announce to a DM on claude-cli runs with zero tools (message_tool_only forces disableTools)
- [#173127](https://github.com/openclaw/openclaw/issues/173127) [Bug]: 2026.10.3 — "Agent database preparation has ended: <agent>" flaps persistently; models.list / chat.metadata stay UNAVAILABLE for one agent
- [#173119](https://github.com/openclaw/openclaw/issues/173119) claude-cli: sub-agent completion wake of a top-level session runs with all tools disabled (`--tools ""`), model emits tool calls as text and can loop
- [#171854](https://github.com/openclaw/openclaw/issues/171854) [Bug]: Codex chats without a per-model context config give the context engine no budget, so it compacts at 128k and replaces the thread
- [#173088](https://github.com/openclaw/openclaw/issues/173088) [Bug]: beta.4 update report says Doctor disposal timed out after 52ms
- [#173085](https://github.com/openclaw/openclaw/issues/173085) [Bug]: beta.4 update progress history stops while the state database is in offline maintenance
- [#173002](https://github.com/openclaw/openclaw/issues/173002) [Bug]: 2026.10.2 claude-stdio live session deadlocks before initialize when Claude Code emits >16 pre-init hook events (every tool-enabled claude-cli turn hits the 600s no-output watchdog)
- [#172899](https://github.com/openclaw/openclaw/issues/172899) [Bug]: Tool-execution timeout reaches successful terminal bookkeeping; compaction failure source masks blocked liveness
- [#172988](https://github.com/openclaw/openclaw/issues/172988) [Bug]: Heartbeat retries channel-not-ready every 60 s with no cap, re-running the full model turn each time
- [#173059](https://github.com/openclaw/openclaw/issues/173059) [Bug][Docs]: the documented unattended-push setup (gh auth setup-git) writes to $HOME/.gitconfig, which is not persistent in the container image — git auth silently disappears on every image update
- [#173053](https://github.com/openclaw/openclaw/issues/173053) [Bug]:
- [#173033](https://github.com/openclaw/openclaw/issues/173033) Update failure: invalid-config (2026.10.3)

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 254,125 · **Open issues:** 49,375 · **Last push:** <1h ago

On October 15, 2026, Hermes Agent released version 0.22.2, addressing issues from the prior 0.22.1 release, particularly the misbuilt gateway and persistent connection problems with the Microsoft Store app; however, it is important to note that sessions created under version 0.22.1 cannot be deleted in 0.22.2. No merged pull requests were reported in the last 24 hours, but a range of new issues surfaced, including a significant bug (#138843) where a local session's provider override fails, resulting in authentication errors. Additionally, a problem was identified with the release date showing as frozen in the startup banner (#139514), which signifies outdated information presented to users. Other notable bugs touch on gateway functionality and session management, indicating ongoing challenges for the development team ahead.

#### 🚀 New Releases
- [v0.22.2](https://github.com/nousresearch/hermes-agent/releases/tag/v0.22.2) Hermes Agent v0.22.2

#### 🐛 New Issues
- [#138843](https://github.com/NousResearch/hermes-agent/issues/138843) [Bug]: a local session.create `provider` override keeps the profile's stale model.base_url — the new provider's key is sent to the old provider's endpoint (401) `type/bug` `comp/gateway` `provider/deepseek` `provider/xiaomi` 💬7
- [#139514](https://github.com/NousResearch/hermes-agent/issues/139514) __release_date__ is frozen at "2026.9.24", so --version and the startup banner disclose a stale date `type/bug` `duplicate` `comp/cli` `comp/tui` 💬3
- [#139160](https://github.com/NousResearch/hermes-agent/issues/139160) Gateway fixes (#134889), package 2: session creation, model picks and credentials `type/bug` `comp/cli` `comp/gateway` `comp/tui` 💬3
- [#139091](https://github.com/NousResearch/hermes-agent/issues/139091) [Bug]: stable update 10s merge-base probe times out even when both commits are local (partial clone, commit-graph writes disabled) `type/bug` `comp/cli` `P2` `needs-decision` 💬3
- [#139135](https://github.com/NousResearch/hermes-agent/issues/139135) [Bug]: Discord async child completes but durable result stays pending and parent does not resume `type/bug` `comp/gateway` `tool/delegate` `platform/discord` 💬3
- [#139161](https://github.com/NousResearch/hermes-agent/issues/139161) Gateway fixes (#134889), package 3: Ink TUI and Desktop sessions, commands and live events `type/bug` `comp/gateway` `comp/tui` `P2` 💬1
- [#138785](https://github.com/NousResearch/hermes-agent/issues/138785) Anthropic 'credentials are rate-limited for <model>' AuthError has no code, so a kanban worker exits 1 (not 75) at startup and charges the failure breaker `type/bug` `comp/cli` `comp/cron` `provider/anthropic` 💬2
- [#139429](https://github.com/NousResearch/hermes-agent/issues/139429) [Bug]: `hermes update` with backup enabled, places root owned backup files of profile configs inside profiles own backup directory. `type/bug` `duplicate` `comp/cli` `P2` 💬2
- [#139492](https://github.com/NousResearch/hermes-agent/issues/139492) [Bug]: /context displays the invented 256K fallback as the real context window (missing the /status guard) `type/bug` `comp/agent` `P3` 💬2
- [#139138](https://github.com/NousResearch/hermes-agent/issues/139138) Discord/bot-mailbox receipts with status ambiguous from permission_denied are rejected as unknown receipt schema on every gateway scan `type/bug` `comp/gateway` `comp/tools` `P3` 💬2
- [#139162](https://github.com/NousResearch/hermes-agent/issues/139162) Gateway fixes (#134889), package 4: messaging bots, cron and Kanban workers `type/bug` `comp/gateway` `comp/cron` `P2` 💬1
- [#139158](https://github.com/NousResearch/hermes-agent/issues/139158) Gateway fixes (#134889), package 1: classic CLI `type/bug` `comp/cli` `comp/gateway` `P2` 💬1
- [#139048](https://github.com/NousResearch/hermes-agent/issues/139048) [Bug] Orphan gateway_routing entries can never be pruned, and the Desktop 404 delete failure never names its target `type/bug` `comp/cli` `comp/gateway` `P2` 💬1
- [#139496](https://github.com/NousResearch/hermes-agent/issues/139496) [Bug]: Desktop single-session delete always 409 runtime_coordination_required for secondary profiles under multiplex `type/bug` `duplicate` `comp/gateway` `P2` 💬1
- [#139099](https://github.com/NousResearch/hermes-agent/issues/139099) Desktop updater: stable channel always offers v0.22.2 to git installs on main, then fails with exit 1 (refusal surfaced as 'Failed to update') `type/bug` `comp/cli` `P2` `sweeper:risk-compatibility` 💬1
- [#139461](https://github.com/NousResearch/hermes-agent/issues/139461) Desktop: 300+ user-facing strings are hard-coded, so no language pack can reach them (measured) `type/bug` `P3` `comp/desktop` `area/i18n` 💬1
- [#139485](https://github.com/NousResearch/hermes-agent/issues/139485) gateway crash-loop on Windows: PermissionError from chmod 0o700 on runtime/bot_live_delivery (Administrators-owned dir) `type/bug` `duplicate` `comp/gateway` `comp/tools` 💬1
- [#139002](https://github.com/NousResearch/hermes-agent/issues/139002) [Bug]: Desktop group creation always fails with `invalid_params` — service only knows own profile `type/bug` `comp/gateway` `P2` `sweeper:risk-session-state` 💬1
- [#139085](https://github.com/NousResearch/hermes-agent/issues/139085) [Bug]: a gateway worker under a Python 3.14 runtime inherits a legacy hermes-agent/venv (cp311) site-packages from sys.path and dies on pydantic_core `type/bug` `comp/gateway` `P2` `needs-repro` 💬1
- [#139252](https://github.com/NousResearch/hermes-agent/issues/139252) [Bug]: Duplicate Mnemosyne plugin entries in dashboard on Windows 11 (Hermes 0.22.2) `type/bug` `comp/plugins` `tool/memory` `P3` 💬1
- [#139029](https://github.com/NousResearch/hermes-agent/issues/139029) [Bug]: Kanban managed worker dies with WorkerPersistenceError: synchronous_rpc_on_event_loop `type/bug` `comp/agent` `comp/gateway` `P3` 💬1
- [#139526](https://github.com/NousResearch/hermes-agent/issues/139526) [Bug]: opencode-go gemini-4-argon-contributor routed to /v1/chat/completions → HTTP 400 ModelProtocolUnsupported (Go Gemini needs the native wire) `type/bug` `comp/agent` `comp/plugins` `provider/gemini`
- [#139523](https://github.com/NousResearch/hermes-agent/issues/139523) Gateway fixes (#134889), package 5: plugins, and config the gateway reads once `type/bug` `comp/gateway` `comp/plugins` `tool/mcp`
- [#139520](https://github.com/NousResearch/hermes-agent/issues/139520) Desktop app: inline ::preview frame clamps widget width to 640px, ignoring content-declared max-width `type/bug` `P3` `comp/desktop`
- [#139517](https://github.com/NousResearch/hermes-agent/issues/139517) [Bug]: Sessions without terminal toolset get no browser tools in default Browser Use mode (docs promise built-in browser_* fallback) `type/bug` `comp/tools` `tool/browser` `area/config`
- [#139518](https://github.com/NousResearch/hermes-agent/issues/139518) [Bug]: `hermes portal info` updates and installs (unknown) detached version of hermes, instead of showing portalinfo. `type/bug` `comp/cli` `P2` `needs-repro`
- [#139500](https://github.com/NousResearch/hermes-agent/issues/139500) [Bug]: ~22,600 `*.pyc` python cache files is bloating even the smallest hermes install, and taking up >303 MiB in space `type/bug` `comp/cli` `area/config` `P2`
- [#139502](https://github.com/NousResearch/hermes-agent/issues/139502) [Bug]: Desktop UI: a provider stall looks frozen — the user is never told Hermes reconnected `type/bug` `P3` `comp/desktop` `area/streaming`
- [#139510](https://github.com/NousResearch/hermes-agent/issues/139510) [Bug]: /model reports success when a fully qualified model stays on the current provider `type/bug` `comp/cli` `provider/gemini` `P2`
- [#139507](https://github.com/NousResearch/hermes-agent/issues/139507) Bot Mode DMs on Windows: turn lock is a no-op without fcntl, so a second delivery is refused instead of queued `type/bug` `comp/tools` `P2` `sweeper:risk-session-state`
- [#138727](https://github.com/NousResearch/hermes-agent/issues/138727) [Feature]: Support the OpenRouter Batch API as a transport for offline agent swarms `type/feature` `comp/agent` `provider/openrouter` `P3`

#### 🔒 Closed Issues
- [#137646](https://github.com/NousResearch/hermes-agent/issues/137646) [Bug]: `hermes update` refuses the stable channel when the release commit is not local (10 s ancestry probe times out)
- [#139514](https://github.com/NousResearch/hermes-agent/issues/139514) __release_date__ is frozen at "2026.9.24", so --version and the startup banner disclose a stale date
- [#139099](https://github.com/NousResearch/hermes-agent/issues/139099) Desktop updater: stable channel always offers v0.22.2 to git installs on main, then fails with exit 1 (refusal surfaced as 'Failed to update')

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 93,870 · **Open issues:** 8,925 · **Last push:** <1h ago

Today was relatively routine for vLLM, with no new releases but a series of bug fixes and performance enhancements merged. Notably, PR #61930 addressed a critical bug by keeping the gate's hash_indices_table separate from RoutedExperts parameters, ensuring better functionality. Performance improvements included updated configurations for the Qwen3-30B-A3B model on ROCM_ATTN and low-latency CPU all-reduce for DP metadata syncs, which are enhancements aimed at optimizing resource usage. On the issue front, a significant concern has emerged with issue #61851, where enabling LoRA alongside dtype="float32" crashes the LFM2 startup, highlighting a compatibility problem that needs urgent attention.

#### ✅ Merged PRs
- [#61930](https://github.com/vllm-project/vllm/pull/61930) [Bugfix][MoE] Keep the gate's hash_indices_table out of RoutedExperts parameters
- [#61744](https://github.com/vllm-project/vllm/pull/61744) Update DeepGEMM commit
- [#61924](https://github.com/vllm-project/vllm/pull/61924) [Bugfix] remove duplicate hash-routing capability method
- [#61388](https://github.com/vllm-project/vllm/pull/61388) [Bugfix][MoE] Restore TP-sharded routed-expert capture for DP=1
- [#42755](https://github.com/vllm-project/vllm/pull/42755) [Model][Hardware][AMD][Kernel] Part 2/2 -> Enable e2e QK Norm + RoPE + KV Cache runtime fusion for Qwen3-30B-A3B on ROCM_ATTN
- [#61913](https://github.com/vllm-project/vllm/pull/61913) [Dependency] Upgrade FlashInfer to 0.7.2 and restore KDA auto backend
- [#61724](https://github.com/vllm-project/vllm/pull/61724) [Perf][Core] Skip the null head of sliding-window block tables
- [#61713](https://github.com/vllm-project/vllm/pull/61713) [Core] Drop the Ray driver-node GPU pin left over from the legacy executor
- [#57392](https://github.com/vllm-project/vllm/pull/57392) [ROCm][Perf][Kimi-K3] Use AITER Gluon KDA kernels for decode and spec decode
- [#61767](https://github.com/vllm-project/vllm/pull/61767) [Perf] Low-latency CPU all-reduce for DP metadata syncs
- [#59973](https://github.com/vllm-project/vllm/pull/59973) [MRV2][Spec Decode] Quantized draft lm_head for drafters that share the target head
- [#59554](https://github.com/vllm-project/vllm/pull/59554) [watermarking] Add DFlash support to dual-key gumbel-max watermarking
- [#58800](https://github.com/vllm-project/vllm/pull/58800) [ROCm] gfx1250 optimizations and model enablement
- [#61861](https://github.com/vllm-project/vllm/pull/61861) [CI] Shard the AMD mirrors of the DP, RayExecutorV2 and batch invariance steps automatically
- [#61161](https://github.com/vllm-project/vllm/pull/61161) [Bugfix][Spec Decode] Avoid reusing random draws across block verification rounds
- [#59406](https://github.com/vllm-project/vllm/pull/59406) [ROCm][Perf][Bugfix] Probe the preshuffled FP4 GEMM config by logical K
- [#61427](https://github.com/vllm-project/vllm/pull/61427) [Frontend] Replace return_mm_kwargs with an mm_payload enum on render requests
- [#61371](https://github.com/vllm-project/vllm/pull/61371) [Kernel][DSv4.1] Bump FlashMLA to the 2026.09.30 release and its interleaved V4.1 KV cache
- [#61865](https://github.com/vllm-project/vllm/pull/61865) [KV Connector][NIXL] Reject NVFP4 KV cache with heterogeneous TP head split
- [#61817](https://github.com/vllm-project/vllm/pull/61817) [CI] Shard four AMD mirrors automatically
- [#61873](https://github.com/vllm-project/vllm/pull/61873) [GLM5.3 Perf] Inplace update draft decode metadata, 1.7% E2E Throughput Improvement
- [#61732](https://github.com/vllm-project/vllm/pull/61732) [CI] Use an ungated model as the attention test config default
- [#59546](https://github.com/vllm-project/vllm/pull/59546) [KV Offload] Split the CPU offload region across shm files
- [#61860](https://github.com/vllm-project/vllm/pull/61860) [CI] Shard four more AMD mirrors automatically
- [#61016](https://github.com/vllm-project/vllm/pull/61016) [Bugfix][MRV2] Keep input_ids on later PP stages for raw-token models
- [#58668](https://github.com/vllm-project/vllm/pull/58668) [Bugfix][Core] Uncount stop-trimmed spec tokens from num_computed_tokens
- [#61668](https://github.com/vllm-project/vllm/pull/61668) [Perf][HiSparse] Reuse pinned host pool after graph profiling
- [#60282](https://github.com/vllm-project/vllm/pull/60282) [ROCm] Support DeepSeek-V4 hash routing in AITER Triton W4A16 MoE
- [#61773](https://github.com/vllm-project/vllm/pull/61773) [Perf][MoE] Skip the TRTLLM fp8-block activation-scale transpose copy
- [#61538](https://github.com/vllm-project/vllm/pull/61538) [MoE] Unify DeepGEMM MegaMoE experts behind one feature-matrix layer; add NVFP4
- [#61858](https://github.com/vllm-project/vllm/pull/61858) [Bugfix] Make Humming DeviceInfo lookups traceable under torch.compile
- [#56226](https://github.com/vllm-project/vllm/pull/56226) [ROCm][Perf] Route softmax MoE top-k, including fused shared-expert sigmoid, through AITER topk_gating
- [#61293](https://github.com/vllm-project/vllm/pull/61293) [MoE] Shape-based padding for FlashInfer TRT-LLM MXFP8 experts (gated and non-gated)
- [#59468](https://github.com/vllm-project/vllm/pull/59468) [Spec Decode] Don't reserve DFlash/DSpark draft slots in the scheduler token budget
- [#61812](https://github.com/vllm-project/vllm/pull/61812) [Bugfix] Fix Apertus streaming scientific notation
- [#58941](https://github.com/vllm-project/vllm/pull/58941) [Bugfix][Frontend] Preserve streaming chunk boundaries in RequestOutputCollector
- [#61825](https://github.com/vllm-project/vllm/pull/61825) [Bugfix][Frontend] Reject Cohere REQUIRED tool choice without tools
- [#61648](https://github.com/vllm-project/vllm/pull/61648) [CI] Skip exited descendants when finding the worker in the FT e2e test
- [#54627](https://github.com/vllm-project/vllm/pull/54627) [Core] Apply prefill_schedule_interval outside data parallelism
- [#58737](https://github.com/vllm-project/vllm/pull/58737) [Perf] Fuse the mamba align block-table gather into one Triton kernel, 7 kernels -> 1, 6x speedup on all shapes for this kernel
- [#61789](https://github.com/vllm-project/vllm/pull/61789) [UMBP][1/10] Add shared connector, runtime contracts, and request lifecycle
- [#59518](https://github.com/vllm-project/vllm/pull/59518) [Frontend] Apply each endpoint's top_logprobs cut in derender
- [#61262](https://github.com/vllm-project/vllm/pull/61262) [ROCm][DSv4] AITER MegaMoE Fixed-Slot Dispatch For DeepSeek-V4
- [#55090](https://github.com/vllm-project/vllm/pull/55090) [ROCm][Perf] Pad fp16/bf16 GEMM weight row stride for L2 cache
- [#61643](https://github.com/vllm-project/vllm/pull/61643) [Bugfix][MoE] Keep routing rows during DeepSeek V4.1 decoder replay
- [#61647](https://github.com/vllm-project/vllm/pull/61647) [Bugfix] Engage indexer TP row sharding on total rows, not per-rank rows
- [#59472](https://github.com/vllm-project/vllm/pull/59472) [Bugfix][CPU] Report the real cause when the worker outgrows its memory reservation
- [#61757](https://github.com/vllm-project/vllm/pull/61757) [Bugfix][Frontend] Leave the final stop token out of chat derender text
- [#46005](https://github.com/vllm-project/vllm/pull/46005) [MM][CG] Support ViT full CUDA graph for DeepSeek-VL2
- [#58689](https://github.com/vllm-project/vllm/pull/58689) [ROCm][DSv4.1] Disambiguate ROCm attention class names
- [#58942](https://github.com/vllm-project/vllm/pull/58942) [Bugfix] Terminate streaming sessions on ABORT/ERROR and prevent zombie sessions
- [#59324](https://github.com/vllm-project/vllm/pull/59324) [Frontend] Make finish_reason and Responses item status truthful
- [#61778](https://github.com/vllm-project/vllm/pull/61778) [Model] Support every Decision 3.0 size (d3-flash, d3-mini, d3-nano, d3-lite, d3-edge)
- [#61241](https://github.com/vllm-project/vllm/pull/61241) [Bugfix][Frontend] Emit kv/ec transfer params at the top level of render output
- [#61044](https://github.com/vllm-project/vllm/pull/61044) [Bugfix] Create cuBLAS handles before memory profiling to avoid OOM
- [#60279](https://github.com/vllm-project/vllm/pull/60279) [Bugfix][KV Offload] Always attempt NIXL agent removal during peer teardown
- [#60630](https://github.com/vllm-project/vllm/pull/60630) [Feature][Frontend] Control the log level of request JSON body using env var
- [#56054](https://github.com/vllm-project/vllm/pull/56054) [Bugfix][DSv4] Remap Quark MTP layer_quant_config onto draft prefixes

#### 🐛 New Issues
- [#61768](https://github.com/vllm-project/vllm/issues/61768) [Bug][KV Connector] Abort before load-failure processing leaves invalid prefix-cache blocks reusable 💬5
- [#61851](https://github.com/vllm-project/vllm/issues/61851) [Bug]: dtype="float32" + enable_lora crashes LFM2 startup — lora_expand Triton op asserts `weight.dtype in [torch.float16, torch.bfloat16]` `bug` 💬3
- [#61762](https://github.com/vllm-project/vllm/issues/61762) [Bug]: Scheduler livelock with multi-module MTP + Mamba align prefix caching when prompt_len % block_size < num_speculative_tokens `kimi` `scheduler` `kv-cache-manager` 💬3
- [#61847](https://github.com/vllm-project/vllm/issues/61847) [Bug]: dtype="float32" crashes unquantized MoE models at startup on SM89 — Triton fused-MoE picks a 128 KiB shared-memory kernel (Required 131072 > limit 101376) `bug` 💬2
- [#61849](https://github.com/vllm-project/vllm/issues/61849) [Bug]: Olmo-Hybrid-7B fails to load with default settings — GDN fused conv1d weight loader indexes `dims[loaded_shard_id]` while `loaded_shard_id` defaults to `None` `bug` 💬2
- [#61854](https://github.com/vllm-project/vllm/issues/61854) [Bug]: quantization="mxfp4" on CUDA reports "No MXFP4 MoE backend supports the deployment configuration" while listing only AMD backends (AITER / amd-quark) `bug` `rocm` `quantization` 💬2
- [#61820](https://github.com/vllm-project/vllm/issues/61820) [Bug]: Whisper long-audio transcription loses words at the internal 30 s cut points in json/text (split_audio cuts inside speech, no overlap or merge) 💬1
- [#61806](https://github.com/vllm-project/vllm/issues/61806) [Bug]: DSpark draft token count inflated by reusing target DP sync state with adaptive verification `bug` 💬2
- [#61800](https://github.com/vllm-project/vllm/issues/61800) [Bug]: fused_recurrent_gated_delta_rule allocates final_state for one sequence but writes it for the whole batch, resulting in out-of-bounds writes `bug` 💬2
- [#61761](https://github.com/vllm-project/vllm/issues/61761) [RFC]: DFlash2 speculative decoding performance on ROCm (MI355X) `rocm` `speculative-decoding` `kimi` 💬2
- [#61896](https://github.com/vllm-project/vllm/issues/61896) [ROCm] torch.profiler stalls on ROCm 10 from a rocprofiler-sdk split lock `rocm` `kimi` 💬1
- [#61886](https://github.com/vllm-project/vllm/issues/61886) [Tracking][Help Wanted] TP-agnostic KV offloading `quantization` 💬1
- [#61874](https://github.com/vllm-project/vllm/issues/61874) [Bug]: Disabled local media access returns HTTP 500 instead of 400 💬1
- [#61866](https://github.com/vllm-project/vllm/issues/61866) [ROCm][Perf] gfx950 spec-decode verify attention is up to 48x slower with AITER <= v0.1.25; bump to a release with ROCm/aiter#6336 `rocm` 💬1
- [#61850](https://github.com/vllm-project/vllm/issues/61850) [Bug]: Zamba2 does not support LoRA but rejects it via a bare `assert` deep inside the model constructor — opaque `Engine core initialization failed` instead of a config-time error `bug` 💬1
- [#61830](https://github.com/vllm-project/vllm/issues/61830) [Feature]: Candidate-only scoring for DeepSeek-V4.1 indexer consumers on SM90 (H20) `deepseek` `DSv4.1` 💬1
- [#61730](https://github.com/vllm-project/vllm/issues/61730) [Bug]: `lightning_attention` prefill applies one decay step too few to the stored state (tokens after position 256 wrong, and every token when continuing from a non-zero `kv_history`) `bug` 💬1
- [#61771](https://github.com/vllm-project/vllm/issues/61771) [Feature]: Harden logit_bias against absolute-logit leakage `feature request` 💬1
- [#61738](https://github.com/vllm-project/vllm/issues/61738) [Bug]: Wide speculative decoding verify (num_speculative_tokens ≥ 7) samples EOS at `prompt_len+8` on hybrid GDN models (Qwen3.5): silent early stop, byte-clean until the EOS row — reproduced on both model runners (`ngram_gpu` V1, stock MTP V2) `bug` `speculative-decoding` 💬1
- [#61927](https://github.com/vllm-project/vllm/issues/61927) [Bug]: MiMo-V2 with FP8 KV cache crashes on NVIDIA SM89/SM12x: Triton DiffKV fails to compile ("K >= 32"), since v0.32.0rc0 `bug` `nvidia`
- [#61919](https://github.com/vllm-project/vllm/issues/61919) [Bug]: Server exits at startup for OLMo 3: Anthropic merge probe catches only jinja2.TemplateError (TypeError from undefined tools) `tool-calling`
- [#61918](https://github.com/vllm-project/vllm/issues/61918) [Bug][Frontend] Client disconnect is not detected on non-streaming chat completions: request runs to completion and its tokens count as delivered
- [#61912](https://github.com/vllm-project/vllm/issues/61912) [Bug][KV Connector] Load-failure report arriving after the owner was preempted: blocks stay cached, `fail` is not applied, stale output can be delivered
- [#61905](https://github.com/vllm-project/vllm/issues/61905) [Bug][KV Connector] Late load-failure reports affect unrelated requests after block-ID reuse
- [#61898](https://github.com/vllm-project/vllm/issues/61898) [Bug]: ORCA endpoint-load-metrics reports only one engine's load under data parallel `bug`
- [#61881](https://github.com/vllm-project/vllm/issues/61881) [Refactor]: Split MRV2 CUDA graph capture planning by batch type
- [#61880](https://github.com/vllm-project/vllm/issues/61880) [RFC]: Native in-engine parallel beam search `RFC`
- [#61859](https://github.com/vllm-project/vllm/issues/61859) [Bug][HiSparse] Shutdown stalls ~90s: every TP rank unpins the full shared host pool and EngineCore blocks on dying workers `bug`
- [#61853](https://github.com/vllm-project/vllm/issues/61853) [Bug]: enable_lora on Jamba (ai21labs/Jamba-tiny-dev) causes a CUDA illegal memory access followed by an uncaught C++ exception (`terminate called ... c10::AcceleratorError`) during startup `bug`
- [#61803](https://github.com/vllm-project/vllm/issues/61803) [Bug]: triton unified_attention reads block_table out-of-bounds past the used columns `bug`
- [#61802](https://github.com/vllm-project/vllm/issues/61802) [Bug]: fused_recurrent KDA path loads the per-key gate g without a mask, resulting in out-of-bounds reads `bug`
- [#61787](https://github.com/vllm-project/vllm/issues/61787) [RFC]: Layerwise KV Pooling and P/D Disaggregation for High-Hit-Rate Agent Workloads `kv-connector` `pooling`
- [#61775](https://github.com/vllm-project/vllm/issues/61775) [Bug]: KV offload back-pressure ignores failed secondary-tier stores, so a full filesystem tier keeps receiving every cascade `bug`
- [#61766](https://github.com/vllm-project/vllm/issues/61766) [Bug]: bench forward verify cases exceeding draft capacity trigger CUDA illegal memory access

#### 🔒 Closed Issues
- [#45943](https://github.com/vllm-project/vllm/issues/45943) [Bug]: AMD MI350X/MI355X Kimi K2.5 MXFP4 decode ITL regression v0.18 → v0.19+ (distinct from #43153)
- [#57052](https://github.com/vllm-project/vllm/issues/57052) [Bug]: Scale-out token path breaks stop strings: stop text leaks into derendered output (include_stop_str_in_output ignored) and --tokens-only silently disables stop entirely
- [#52922](https://github.com/vllm-project/vllm/issues/52922) [Bug]: DSpark scheduling using an overly conservative input budget
- [#55515](https://github.com/vllm-project/vllm/issues/55515) [Bug]: Qwen4Exp N-gram PLE embedding requires pipeline_parallel_size=1 because non-first pipeline ranks do not receive the raw input_ids it needs. Please run with PP=1
- [#58228](https://github.com/vllm-project/vllm/issues/58228) [Bug]: finish_reason is "tool_calls" for a turn truncated at max_tokens, hiding the length stop from clients
- [#59471](https://github.com/vllm-project/vllm/issues/59471) [Bug]: CPU backend KV cache sizing error reports a negative size and recommends the wrong fix
- [#59569](https://github.com/vllm-project/vllm/issues/59569) [Bug]: [KV Offload][P2P] Store-job timeout unpins slots under an in-flight transfer, which then reports success
- [#61114](https://github.com/vllm-project/vllm/issues/61114) [Bug]: V2 block verification (rejection_sample_method="block") reuses position-keyed uniforms across rounds, so sampled output is biased
- [#59513](https://github.com/vllm-project/vllm/issues/59513) [Bug]: top_logprobs cut differs across chat, completions, generate and derender when the sampled token is outside the top-k
- [#60205](https://github.com/vllm-project/vllm/issues/60205) [Bug]: [KV Offload][P2P] After a peer's EngineCore stalls ~45 s, P2P transfers to and from it fail permanently, although the control session reconnects
- [#60019](https://github.com/vllm-project/vllm/issues/60019) [Bug]: P2P KV offload tier runs NIXL peer registration synchronously inside the scheduler step, stalling all requests on the rank
- [#60859](https://github.com/vllm-project/vllm/issues/60859) [Bug]: kv_cache_dtype="float16" on a bf16 model crashes the engine during CUDA-graph capture — RuntimeError: query and key must have the same dtype (flash_api.cpp:601)
- [#58138](https://github.com/vllm-project/vllm/issues/58138) [Bug]: Cross-encoder `padding="max_length"` produces incorrect `token_type_ids`
- [#59662](https://github.com/vllm-project/vllm/issues/59662) [Feature]: Support DFlash speculative decoding with dual_key_gumbel watermarking
- [#51567](https://github.com/vllm-project/vllm/issues/51567) [Bug]: EPLB fails to transport E8M0 expert state
- [#53255](https://github.com/vllm-project/vllm/issues/53255) [Bug]: finish_reason="tool_calls" is returned with an empty tool_calls array when tool_choice="required" produces no call
- [#60691](https://github.com/vllm-project/vllm/issues/60691) [Feature]: Apply model-owned MTP shard selection to RunAI ModelStreamer

### SGLang (`sgl-project/sglang`)

**Stars:** 37,180 · **Open issues:** 5,857 · **Last push:** <1h ago

On October 16, 2026, SGLang saw no new releases but included several notable updates in merged pull requests. Key changes featured improvements in the rust-server with enhancements such as reporting cached and reasoning tokens in meta_info (#44531) and applying x-override-* request headers (#44312). Additionally, performance enhancements were achieved with pageable host staging under Confidential Computing for NVIDIA (#44568) and improvements to the GPU input handling in the pd module for batch decoding without host syncs (#44598). Among the new issues, a notable bug was raised regarding the NIXL PD abort process potentially causing deadlocks due to waiting on healthy non-terminal handles (#44369).

#### ✅ Merged PRs
- [#44616](https://github.com/sgl-project/sglang/pull/44616) [Doc] blogs: Sync LMSYS SGLang blog cards
- [#44440](https://github.com/sgl-project/sglang/pull/44440) [Fix] utils: Allowlist torch.bcomplex32 in SafeUnpickler
- [#44531](https://github.com/sgl-project/sglang/pull/44531) [Feat] rust-server: Report cached_tokens and reasoning_tokens in meta_info
- [#44568](https://github.com/sgl-project/sglang/pull/44568) [Perf] [NVIDIA] scheduler: Pageable host staging and inline hidden-state/DSpark readback under Confidential Computing
- [#44537](https://github.com/sgl-project/sglang/pull/44537) [Fix] tokenizer_manager: re-report only emitted customized_info keys on cumulative streams
- [#44534](https://github.com/sgl-project/sglang/pull/44534) [Fix] [AMD] docker: Repair the AITER build step after the 2bb549102 pin bump
- [#41303](https://github.com/sgl-project/sglang/pull/41303) [Fix] deepseek-v4.1: Keep the full SWA window for short bounded-replay extends
- [#44598](https://github.com/sgl-project/sglang/pull/44598) [Perf] pd: Copy prebuilt decode batch inputs to the GPU without host syncs
- [#43922](https://github.com/sgl-project/sglang/pull/43922) [Perf] deepseek-v4.1: Integrate FlashMLA MegaAttention with NVFP4 KV
- [#44353](https://github.com/sgl-project/sglang/pull/44353) [Feat] [AMD] monokernels: one runtime switch for vendor monokernel plugins
- [#44312](https://github.com/sgl-project/sglang/pull/44312) [Feat] rust-server: Apply the x-override-* request headers
- [#44590](https://github.com/sgl-project/sglang/pull/44590) chore: bump sgl-kernel version to 0.4.10
- [#40498](https://github.com/sgl-project/sglang/pull/40498) [Fix] moe: Preserve negative routing sentinel in EP mapping
- [#44555](https://github.com/sgl-project/sglang/pull/44555) [DSv4.1] Fuse request-window KV copies
- [#44557](https://github.com/sgl-project/sglang/pull/44557) [DSv4] Sparse prefill: build compressed lengths without a host sync
- [#41006](https://github.com/sgl-project/sglang/pull/41006) [Feat] docker: Add AWS EFA image variants built on published images
- [#44410](https://github.com/sgl-project/sglang/pull/44410) [CI] pr-test: Let stage wait jobs reach their max-wait budget
- [#36810](https://github.com/sgl-project/sglang/pull/36810) perf: fix overlap scheduling for NVIDIA Confidential Computing(CC) on Blackwell
- [#44315](https://github.com/sgl-project/sglang/pull/44315) [Feat] rust-server: Attach configured metadata headers to a healthy /health_generate
- [#44173](https://github.com/sgl-project/sglang/pull/44173) [Feat] hicache: Add opt-in tail-only SWA backups in buffer mode
- [#44418](https://github.com/sgl-project/sglang/pull/44418) [Feat] diffusion: support FLUX 3 Image Klein
- [#44453](https://github.com/sgl-project/sglang/pull/44453) [Fix] pp: Order output send/recv by rank parity to fix cross-node hang
- [#44509](https://github.com/sgl-project/sglang/pull/44509) [Fix] sgl-router: Bump rustls to 0.23.46 for RUSTSEC-2026-0346..0349
- [#44527](https://github.com/sgl-project/sglang/pull/44527) [Cookbook] Add cookbook for muse spark open
- [#27702](https://github.com/sgl-project/sglang/pull/27702) [Perf] [AMD] attention: Enable diffusion BF16 attention and MXFP4 compilation
- [#44515](https://github.com/sgl-project/sglang/pull/44515) [Doc] cookbook: Expand the FLUX.3 Image Klein model description
- [#44511](https://github.com/sgl-project/sglang/pull/44511) [Fix] step5: Register Step5 HiCache pool names in the Rust tree core
- [#44510](https://github.com/sgl-project/sglang/pull/44510) [Doc] cookbook: Add Nemotron 3.5 Super VL
- [#44512](https://github.com/sgl-project/sglang/pull/44512) [Doc] cookbook: Add the FLUX.3 prompt upsampler section
- [#44093](https://github.com/sgl-project/sglang/pull/44093) [Fix] glm5_next: Correct num_experts_per_tok default to 8
- [#42699](https://github.com/sgl-project/sglang/pull/42699) [Feat] [AMD] docker: Release ROCm 10.1 for gfx1250 in parallel with ROCm 10.0
- [#43927](https://github.com/sgl-project/sglang/pull/43927) [Feat] runtime: Include FlashInfer’s default tactic in startup tuning.
- [#44072](https://github.com/sgl-project/sglang/pull/44072) [Fix] sgl-router: Send disagg_prefill_dp_rank to decode under --dp-aware
- [#43685](https://github.com/sgl-project/sglang/pull/43685) Support EPLB for Nemotron-H
- [#37625](https://github.com/sgl-project/sglang/pull/37625) Fix overflow in legacy and v1 DSA top-k selectors
- [#44266](https://github.com/sgl-project/sglang/pull/44266) [Fix] [AMD] qwen3: Fix KV cache write in the fused QK-norm + mRoPE decode path
- [#41988](https://github.com/sgl-project/sglang/pull/41988) [AMD][Diffusion] Route unquantized linears through aiter tgemm on gfx1250
- [#44432](https://github.com/sgl-project/sglang/pull/44432) [NPU] [DOC] update NPU best practices and model deployment docs to CANN 9.1.0
- [#44325](https://github.com/sgl-project/sglang/pull/44325) [Feat] diffusion: Add support for the MOSS-Image family
- [#44467](https://github.com/sgl-project/sglang/pull/44467) [Fix] test: Run megamoe sum deferral tests from __main__

#### 🐛 New Issues
- [#44369](https://github.com/sgl-project/sglang/issues/44369) [Bug] NIXL PD abort can leave all default transfer workers waiting on healthy non-terminal handles 💬3
- [#44374](https://github.com/sgl-project/sglang/issues/44374) [Feature] [RFC] Opt-in `toktier` tokenizer backend: exact incremental and chunk-parallel tokenization on the CPU 💬3
- [#44501](https://github.com/sgl-project/sglang/issues/44501) [Bug] WeightChecker reset_tensors fills MRotaryEmbedding.axis_map with random values 💬2
- [#44504](https://github.com/sgl-project/sglang/issues/44504) [Bug] update_weights_from_disk reports success when Qwen3.5-VL vision weights have unknown names (no warning for .bias) 💬1
- [#44479](https://github.com/sgl-project/sglang/issues/44479) [CI] Runner 5090-vast-no-0 is out of disk: every job fails in Install dependencies with 'No space left on device' 💬1
- [#44474](https://github.com/sgl-project/sglang/issues/44474) [Bug] Chat returns tool_choice=required calls as plain content when no --tool-call-parser is set 💬1
- [#44535](https://github.com/sgl-project/sglang/issues/44535) [Bug] Out-of-vocab `stop_token_ids` crash the server in the min_new_tokens penalizer
- [#44523](https://github.com/sgl-project/sglang/issues/44523) [Feature] [RFC] Ownership boundaries for externally orchestrated checkpoint and restore
- [#44485](https://github.com/sgl-project/sglang/issues/44485) [Feature][Spec][Ngram] Freeze external-corpus SAMs into a compact layout after finalize()
- [#44470](https://github.com/sgl-project/sglang/issues/44470) [Bug] GPU-name-only MNNVL detection rejects OEM-named GB300 devices
- [#44445](https://github.com/sgl-project/sglang/issues/44445) [Report] DeepSeek-V4.1-Flash on 4x SM120 (83 GiB): 1M context + DSpark works on v0.5.21, setup notes and numbers

#### 🔒 Closed Issues
- [#23494](https://github.com/sgl-project/sglang/issues/23494) AMD Development Roadmap (2026 Q2)
- [#36333](https://github.com/sgl-project/sglang/issues/36333) [Bug] Disconnected streaming client leaves a zombie request that decodes to max_tokens and floods "state was deleted in TokenizerManager" (regression from #34160 revert)
- [#34340](https://github.com/sgl-project/sglang/issues/34340) [Bug] Two SM10x-gated cluster/tcgen05 kernels fail on B300 (sm_103): cutedsl TGV BF16 GEMM raises Xid 13 CGA "CTA Not Present", trtllm-gen MoE finalize hangs silently
- [#42530](https://github.com/sgl-project/sglang/issues/42530) [Bug] big prefill blocks other requests on 2xRTX3090 for qwen3.8 27b
- [#34683](https://github.com/sgl-project/sglang/issues/34683) [Bug] Radix cache hit changes temperature=0 outputs for Gemma-4 (18/40 greedy flips); --enable-deterministic-inference fails to boot on SM100
- [#33978](https://github.com/sgl-project/sglang/issues/33978) [Bug]
- [#35012](https://github.com/sgl-project/sglang/issues/35012) [Bug] The timeout setting is invalid in can_terminate_prefetch when pool_transfers_done is false
- [#35642](https://github.com/sgl-project/sglang/issues/35642) [Bug] Scheduler scans waiting queue after resumed chunk exhausts chunk budget
- [#38118](https://github.com/sgl-project/sglang/issues/38118) [Bug] Decode running batch pinned at `max_running_requests - 1` under Chunked Prefill
- [#36876](https://github.com/sgl-project/sglang/issues/36876) Zombie requests after client disconnect: abort_request fails to set to_finish during batch-transition window
- [#43418](https://github.com/sgl-project/sglang/issues/43418) Batch image outputs in server mode
- [#35053](https://github.com/sgl-project/sglang/issues/35053) [Bug][Diffusion] Spectrum CFG parallel skips negative-branch initialization and can reuse forecaster state across requests
- [#35011](https://github.com/sgl-project/sglang/issues/35011) [diffusion][Model] Support MAGI-2-preview
- [#43324](https://github.com/sgl-project/sglang/issues/43324) [Bug] EP standard dispatch: -1 sentinel aliases to last local expert, padded spec-verify rows overflow masked-GEMM per-expert m_max (OOB stores, engine crash)
- [#43961](https://github.com/sgl-project/sglang/issues/43961) [Bug] #running-req / num_running_reqs grows monotonically under chunked prefill and over-reports load (hits the default config)
- [#35537](https://github.com/sgl-project/sglang/issues/35537) `batch_is_full` latched during final chunked-prefill pass starves waiting queue until a running request finishes (self-healing variant of #28530 / #22518)

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 131,312 · **Open issues:** 2,582 · **Last push:** <1h ago

On October 16, 2026, llama.cpp released version 0.7.0, which introduces the LiliCorr speculative decoding technique and MTP for GLM5-Next, along with a new GPU cache for MoE experts that can enhance decoding speed by approximately 2.2 times when offloaded. The update also adds a significant batch of new models including K2 Horizon and Prism Bonsai 2 27B. Noteworthy merged features include the addition of the Muse Spark Open model for text, vision, and audio, and various fixes improving performance and compatibility across platforms. Among new issues, a particularly concerning bug was reported regarding denial of service due to VRAM exhaustion in the llama-server, highlighting potential vulnerabilities for users.

#### 🚀 New Releases
- [v0.7.0](https://github.com/ggml-org/llama.cpp/releases/tag/v0.7.0) v0.7.0
- [b11671](https://github.com/ggml-org/llama.cpp/releases/tag/b11671) b11671
- [b11669](https://github.com/ggml-org/llama.cpp/releases/tag/b11669) b11669
- [b11662](https://github.com/ggml-org/llama.cpp/releases/tag/b11662) b11662
- [b11658](https://github.com/ggml-org/llama.cpp/releases/tag/b11658) b11658
- [b11655](https://github.com/ggml-org/llama.cpp/releases/tag/b11655) b11655
- [b11647](https://github.com/ggml-org/llama.cpp/releases/tag/b11647) b11647
- [b11645](https://github.com/ggml-org/llama.cpp/releases/tag/b11645) b11645
- [b11643](https://github.com/ggml-org/llama.cpp/releases/tag/b11643) b11643
- [b11642](https://github.com/ggml-org/llama.cpp/releases/tag/b11642) b11642

#### ✅ Merged PRs
- [#30629](https://github.com/ggml-org/llama.cpp/pull/30629) mtmd: add mtmd_audio_stream + support voxtral-realtime
- [#30621](https://github.com/ggml-org/llama.cpp/pull/30621) convert : fix Granite Switch block_count for MultiSwitch checkpoints
- [#30628](https://github.com/ggml-org/llama.cpp/pull/30628) Fix regression in conversion (mapping) of Granite speech "conv_norm" tensors
- [#30600](https://github.com/ggml-org/llama.cpp/pull/30600) fix: lightonocr does not require longest edge to always be 1540, native resolution is the default
- [#30616](https://github.com/ggml-org/llama.cpp/pull/30616) model: add Muse Spark Open (text, vision and audio)
- [#30615](https://github.com/ggml-org/llama.cpp/pull/30615) pi : expand AI disclosure with hardware and stats
- [#30520](https://github.com/ggml-org/llama.cpp/pull/30520) Add Nemotron Super 3.5 VL and Nemotron Bolt 74B A9B support
- [#30578](https://github.com/ggml-org/llama.cpp/pull/30578) model : Mellum - read MoE gating params from GGUF, unify RoPE
- [#29778](https://github.com/ggml-org/llama.cpp/pull/29778) Add Support to maion-coder arch
- [#30603](https://github.com/ggml-org/llama.cpp/pull/30603) llama.cpp : bump version to 0.7.0
- [#30586](https://github.com/ggml-org/llama.cpp/pull/30586) scripts : add ci-status.sh for listing active CI runs
- [#30580](https://github.com/ggml-org/llama.cpp/pull/30580) server: fix the off-by-two in the SWA reuse threshold
- [#30574](https://github.com/ggml-org/llama.cpp/pull/30574) server: save the draft state in the slot file
- [#30567](https://github.com/ggml-org/llama.cpp/pull/30567) server: prefer empty slots and keep states overwritten by child tasks
- [#30598](https://github.com/ggml-org/llama.cpp/pull/30598) sync : ggml
- [#27703](https://github.com/ggml-org/llama.cpp/pull/27703) vulkan : copy strided f16 KV once on AMD so reads spread across memory channels
- [#30562](https://github.com/ggml-org/llama.cpp/pull/30562) jinja : improve context copy constructor performance
- [#30533](https://github.com/ggml-org/llama.cpp/pull/30533) jinja : fix loop body variable scoping
- [#30587](https://github.com/ggml-org/llama.cpp/pull/30587) ci : bump ty to 0.0.88
- [#30582](https://github.com/ggml-org/llama.cpp/pull/30582) ui: Fix default value for agentic turns limit setting
- [#30483](https://github.com/ggml-org/llama.cpp/pull/30483) jinja : write nan and inf in tojson as json.dumps does
- [#29766](https://github.com/ggml-org/llama.cpp/pull/29766) vulkan : fix concurrent first device init
- [#30131](https://github.com/ggml-org/llama.cpp/pull/30131) [SYCL][CI] replace oneAPI package by DLE+oneDNN package
- [#30421](https://github.com/ggml-org/llama.cpp/pull/30421) opencl: fix OOB tail access for adreno noshuffle gemv kernels
- [#30526](https://github.com/ggml-org/llama.cpp/pull/30526) ggml-cpu : optimize pad_f32
- [#30485](https://github.com/ggml-org/llama.cpp/pull/30485) unicode : reject overlong UTF-8 and out-of-range codepoints
- [#30532](https://github.com/ggml-org/llama.cpp/pull/30532) llama : split llama_prefetch() into merge and prefetch steps
- [#30546](https://github.com/ggml-org/llama.cpp/pull/30546) opencl: apply flash attn softcap before mask
- [#29200](https://github.com/ggml-org/llama.cpp/pull/29200) cpu: add F16 SWIGLU_OAI reference implementation and validation
- [#30491](https://github.com/ggml-org/llama.cpp/pull/30491) metal : add BF16 variant of the tensor API flash attention kernel
- [#30506](https://github.com/ggml-org/llama.cpp/pull/30506) spec : add lilicorr support
- [#30514](https://github.com/ggml-org/llama.cpp/pull/30514) kv-cache: honor PARTIAL_ONLY in the plain KV cache
- [#30522](https://github.com/ggml-org/llama.cpp/pull/30522) graph: keep the graph non empty without embeddings
- [#30498](https://github.com/ggml-org/llama.cpp/pull/30498) server: save only restorable slot states to the prompt cache
- [#30215](https://github.com/ggml-org/llama.cpp/pull/30215) vulkan: Use L2-friendly workgroup scheduling for cm2 mulmat on DGX Spark

#### 🐛 New Issues
- [#30577](https://github.com/ggml-org/llama.cpp/issues/30577) Misc. bug: llama-server Denial Of Service exchaust VRAM `bug-unconfirmed` 💬6
- [#30610](https://github.com/ggml-org/llama.cpp/issues/30610) Eval bug: Nemotron 3.5 Bolt 74B-A9B segfaults on Metal in ggml_metal_op_mul_mat_id 💬3
- [#30617](https://github.com/ggml-org/llama.cpp/issues/30617) Eval bug: convert_hf_to_gguf: Granite Switch conversion writes block_count one too high for newer checkpoints `bug-unconfirmed` 💬4
- [#30570](https://github.com/ggml-org/llama.cpp/issues/30570) Compile bug: Latest llama-cpp releases aren't compatible wth the latest release and the latest revision of ggml `bug-unconfirmed` 💬2
- [#30626](https://github.com/ggml-org/llama.cpp/issues/30626) Feature Request: gguf-py: add numpy quantisation for Q1_0 and Q2_0 `enhancement` 💬1
- [#30633](https://github.com/ggml-org/llama.cpp/issues/30633) Eval bug: rpc-server -c: cache files truncated on disk-full are later served as valid cache hits → silent weight corruption / garbage output `bug-unconfirmed`
- [#30632](https://github.com/ggml-org/llama.cpp/issues/30632) Llama app GUI for linux `enhancement`
- [#30624](https://github.com/ggml-org/llama.cpp/issues/30624) Eval bug: GGML_SYCL_SPARSE_FA set to 1 causes corrupt token output at long contexts on Windows SYCL + Arc B70 Pro `bug-unconfirmed`
- [#30605](https://github.com/ggml-org/llama.cpp/issues/30605) Qwen3 embeddings with bidirectional attention and an output projection
- [#30583](https://github.com/ggml-org/llama.cpp/issues/30583) Eval bug: crash while loading clef-flash on arm64 CPU `bug-unconfirmed`
- [#30579](https://github.com/ggml-org/llama.cpp/issues/30579) Eval bug: Mellum NaN on Metal with Q8_0 (ffn_moe_down input exceeds F16 range) `bug-unconfirmed`
- [#30576](https://github.com/ggml-org/llama.cpp/issues/30576) Eval bug: Rank-1 LoRA causes crash on load for CUDA/HIP `bug-unconfirmed`
- [#30571](https://github.com/ggml-org/llama.cpp/issues/30571) Feature Request: Platform-dependent Keep Awake logic `enhancement`
- [#30568](https://github.com/ggml-org/llama.cpp/issues/30568) Vulkan (Strix Halo gfx1151, Windows): speculative decoding throughput halves at --spec-draft-n-max 4 vs 3 despite fixed synthetic acceptance (Qwen3.8-27B MTP)
- [#30564](https://github.com/ggml-org/llama.cpp/issues/30564) Misc. bug: Anthropic /v1/messages drops output_config.effort `bug-unconfirmed`
- [#30563](https://github.com/ggml-org/llama.cpp/issues/30563) Misc. bug: Vulkan lavapipe coopmat multiplication missing row writes `bug-unconfirmed`

#### 🔒 Closed Issues
- [#25356](https://github.com/ggml-org/llama.cpp/issues/25356) Vulkan: batched decode throughput cliff at n_tokens=9 on many-expert MoE (fixed 8-token thresholds in MMV dispatch)
- [#30364](https://github.com/ggml-org/llama.cpp/issues/30364) Eval bug: Vulkan: MiniMax-M2 prompt processing collapses at long context with ubatch above 128 on Strix Halo (gfx1151); long submits trigger amdgpu "device lost"
- [#26676](https://github.com/ggml-org/llama.cpp/issues/26676) llama-server slot KV state restore is a no-op (restore reads file, slot stays empty, cache_n=0)
- [#30617](https://github.com/ggml-org/llama.cpp/issues/30617) Eval bug: convert_hf_to_gguf: Granite Switch conversion writes block_count one too high for newer checkpoints
- [#26293](https://github.com/ggml-org/llama.cpp/issues/26293) server: prompt cache is populated by rerank tasks that can never read it back (cache_idle_slots missing the SERVER_TASK_TYPE_COMPLETION guard)
- [#27275](https://github.com/ggml-org/llama.cpp/issues/27275) ROCm 7.x comgr segfault on gfx1030 (RDNA2) — side-by-side ROCm 6.3.1 workaround restores full MTP throughput
- [#28051](https://github.com/ggml-org/llama.cpp/issues/28051) Support Qwen3.x MTP (Multi-Token Prediction) for speculative decoding
- [#30570](https://github.com/ggml-org/llama.cpp/issues/30570) Compile bug: Latest llama-cpp releases aren't compatible wth the latest release and the latest revision of ggml
- [#30502](https://github.com/ggml-org/llama.cpp/issues/30502) Eval bug: running several sequential sessions with Qwen3.8 is impossible with MTP without insane amounts of host RAM for cache (262k context at 32 checkpoints requires 37 GiB)
- [#28018](https://github.com/ggml-org/llama.cpp/issues/28018) Eval bug: CUDA
- [#28619](https://github.com/ggml-org/llama.cpp/issues/28619) Misc. bug: /slots save/restore never persists the draft-model context (ctx_dft) on speculative-decoding deployments

### Ollama (`ollama/ollama`)

**Stars:** 183,338 · **Open issues:** 4,298 · **Last push:** <1h ago

On October 16, 2026, Ollama saw a notable version bump with the update to llama.cpp, tagged as b11669, enhancing its capabilities. Key features merged included the launch of clef in Ollama's cloud and an addition to gguf that supports the new q2_0 tensor and file types, streamlining model interactions. Significant fixes were made to prevent orphaned runners on Windows and improve handling of authentication errors in OpenAI responses. Among new issues, a particularly alarming report identified a native API rendering problem where tool definitions are returned empty, indicating a critical need for attention.

#### ✅ Merged PRs
- [#19036](https://github.com/ollama/ollama/pull/19036) Launch clef in Ollama's cloud
- [#18967](https://github.com/ollama/ollama/pull/18967) gguf: add the q2_0 tensor and file types
- [#18500](https://github.com/ollama/ollama/pull/18500) win: prevent orphaned runners
- [#19032](https://github.com/ollama/ollama/pull/19032) llama.cpp: version bump b11669
- [#19030](https://github.com/ollama/ollama/pull/19030) New model...
- [#19004](https://github.com/ollama/ollama/pull/19004) openai: clarify Responses authentication errors
- [#19007](https://github.com/ollama/ollama/pull/19007) proxy: pass through ChatGPT upstream access errors
- [#19008](https://github.com/ollama/ollama/pull/19008) server: stop HTML-escaping cloud proxy request bodies

#### 🐛 New Issues
- [#19040](https://github.com/ollama/ollama/issues/19040) Native /api/chat renders EMPTY tool definitions (Install-wide): models echo {"name": ""} / {{ <nil> <nil> [] {}}} and never emit tool_calls; /v1 route renders tools correctly 💬3
- [#19035](https://github.com/ollama/ollama/issues/19035) ollama pull not working with socks proxy `bug` 💬2
- [#19034](https://github.com/ollama/ollama/issues/19034) [SCA] seroval: Seroval: `seroval.fromJSON()` Promise resolver type confusion invokes attacker-controlled methods during deserialization
- [#19029](https://github.com/ollama/ollama/issues/19029) Possible memory leak in the desktop app: context menu label C strings are never freed `app`
- [#19013](https://github.com/ollama/ollama/issues/19013) Windows: tray app starts "ollama serve" about once per second, forever, when a server already listens on 11434 `app`
- [#19015](https://github.com/ollama/ollama/issues/19015) ROCm: gemma4:26b-a4b with experts offloaded to the CPU aborts in hipGraphInstantiate (out of memory), then segfaults on every load; GGML_CUDA_DISABLE_GRAPHS=1 avoids it `amd`
- [#19021](https://github.com/ollama/ollama/issues/19021) Cloud: mistral-large-4 rejects developer-role messages with HTTP 400 `cloud`
- [#19025](https://github.com/ollama/ollama/issues/19025) QOL Request - folders for chats `feature request` `app`

#### 🔒 Closed Issues
- [#18983](https://github.com/ollama/ollama/issues/18983) openbmb/minicpm-v4.7:35b-a3b fails: "unknown projector type: minicpmv4_7" (Failed to load CLIP model) on Windows, 0.40.3
- [#17666](https://github.com/ollama/ollama/issues/17666) mlxrunner: requests are serialized; support batched/concurrent decode
- [#19035](https://github.com/ollama/ollama/issues/19035) ollama pull not working with socks proxy

### LiteLLM (`BerriAI/litellm`)

**Stars:** 61,339 · **Open issues:** 5,488 · **Last push:** <1h ago

On October 16, 2026, LiteLLM released version v1.107.0-dev.3, continuing to enhance security with Docker image signatures verified through cosign, following the standard set in commit `0112e53`. Significant merged features included the addition of NVIDIA Nemotron 3.5 Super VL to the cost map and improvements to the proxy, addressing cooldown errors and ensuring proper handling of response headers. The team also improved Terraform configurations and made several important fixes related to various integrations and API handling. A notable new issue was logged regarding high CPU usage and server process leaks when cancelling request handlers during in-flight operations, highlighting potential stability concerns in versions v1.104.0 through v1.105.1.

#### 🚀 New Releases
- [v1.107.0-dev.3](https://github.com/BerriAI/litellm/releases/tag/v1.107.0-dev.3) v1.107.0-dev.3
- [v1.107.0-dev.2](https://github.com/BerriAI/litellm/releases/tag/v1.107.0-dev.2) v1.107.0-dev.2
- [v1.106.0-rc.4](https://github.com/BerriAI/litellm/releases/tag/v1.106.0-rc.4) v1.106.0-rc.4

#### ✅ Merged PRs
- [#46795](https://github.com/BerriAI/litellm/pull/46795) feat(wandb): add NVIDIA Nemotron 3.5 Super VL to the cost map
- [#46344](https://github.com/BerriAI/litellm/pull/46344) fix(proxy): cooldown errors carry 429, Sentry starts at boot without request bodies, tracing failures log at ERROR, exporter counters exported
- [#46550](https://github.com/BerriAI/litellm/pull/46550) fix(terraform): accept 2xx from the proxy in mcp server, model, key and org requests
- [#46784](https://github.com/BerriAI/litellm/pull/46784) ci(cost map): classify token_count_framing and token_count_fallback_model in the schema generator
- [#46794](https://github.com/BerriAI/litellm/pull/46794) feat(cost-map): add baseten Muse Spark Open and Nemotron 3.5 Super VL
- [#46792](https://github.com/BerriAI/litellm/pull/46792) chore(pricing): add github_copilot deprecation dates for claude-opus-5 and gpt-5.6-terra
- [#46712](https://github.com/BerriAI/litellm/pull/46712) fix(proxy): limit gzip to dashboard analytics and offload compression
- [#46793](https://github.com/BerriAI/litellm/pull/46793) fix(vertex-ai): end free period for deepseek-v4.1-flash-maas
- [#39227](https://github.com/BerriAI/litellm/pull/39227) fix(ollama): prevent reused response ids from dropping spend logs
- [#44957](https://github.com/BerriAI/litellm/pull/44957) fix(mcp): scope gateway OAuth consent to x-mcp-servers and add explicit scope setting
- [#46776](https://github.com/BerriAI/litellm/pull/46776) test(e2e): perf users start staggered with jitter, tool-call streams get a first token, small_bodies_5rps sends from the mixed case's callers
- [#46781](https://github.com/BerriAI/litellm/pull/46781) fix(terraform): stop the perpetual plan diff on litellm_mcp_server
- [#46761](https://github.com/BerriAI/litellm/pull/46761) test(integration): hand every harness server a port from one per-worker block
- [#46780](https://github.com/BerriAI/litellm/pull/46780) ci: run mcp interactions and redis cluster iam integration tests only in circleci
- [#46749](https://github.com/BerriAI/litellm/pull/46749) fix(rust-bridge): honor the configured request_timeout on native Messages
- [#43979](https://github.com/BerriAI/litellm/pull/43979) feat(proxy): add agent_access_default_deny for least-privilege agent access
- [#46783](https://github.com/BerriAI/litellm/pull/46783) fix(ci): restore loadscope on the mcp-interactions shard so its MCP subscription cases do not race across workers
- [#46264](https://github.com/BerriAI/litellm/pull/46264) feat(mcp): enable verified stateless protocol capabilities
- [#46342](https://github.com/BerriAI/litellm/pull/46342) fix(anthropic): keep signed empty thinking blocks and honor thinking.block_binding
- [#46741](https://github.com/BerriAI/litellm/pull/46741) fix(anthropic): drop unknown legacy thinking keys under drop_params when rebuilding adaptive thinking
- [#41197](https://github.com/BerriAI/litellm/pull/41197) fix(mcp): request offline access from Google upstream OAuth providers
- [#46778](https://github.com/BerriAI/litellm/pull/46778) fix(ui): place Home Create New Virtual Key button like the Virtual Keys page
- [#46153](https://github.com/BerriAI/litellm/pull/46153) feat(mcp): relay authorized modern upstream subscriptions
- [#46240](https://github.com/BerriAI/litellm/pull/46240) feat(gemini)!: auto-continue gemini-4-argon long decodes with continuationToken
- [#46559](https://github.com/BerriAI/litellm/pull/46559) fix(proxy): preserve AWS session tokens for RDS IAM auth
- [#46545](https://github.com/BerriAI/litellm/pull/46545) fix(mcp): resolve /mcp/proxy tool_id from the owning server instead of relisting every server
- [#46773](https://github.com/BerriAI/litellm/pull/46773) fix(ci): run the MCP interactions integration contract in its own unit shard
- [#46538](https://github.com/BerriAI/litellm/pull/46538) feat(terraform): write-only secret attributes to keep secrets out of state
- [#46770](https://github.com/BerriAI/litellm/pull/46770) ci(unit): mcp-elicitation shard runs dist load so test_interactions.py's 74 params spread over its 4 workers
- [#46762](https://github.com/BerriAI/litellm/pull/46762) test(integration): assert the streamed usage.cost matches the spend row on every cost case
- [#46534](https://github.com/BerriAI/litellm/pull/46534) feat(helm): add db.useIAMAuth and db.useAzureEntraAuth token auth to litellm-helm
- [#46720](https://github.com/BerriAI/litellm/pull/46720) fix(anthropic): send detail on input_image parts bridged from /v1/messages to Responses
- [#40732](https://github.com/BerriAI/litellm/pull/40732) fix(oci): drop non-function tools under drop_params and gate reasoning_effort on declared levels
- [#46565](https://github.com/BerriAI/litellm/pull/46565) feat(ui): scope the MCP server selector to the team, user and access groups it edits
- [#46563](https://github.com/BerriAI/litellm/pull/46563) feat(mcp): add mcp_disabled_capabilities to stop advertising prompts and resources
- [#46549](https://github.com/BerriAI/litellm/pull/46549) fix(mcp): accept validated JWT subjects after virtual-key mapping
- [#46544](https://github.com/BerriAI/litellm/pull/46544) fix(mcp): persist the first DCR client for config-declared servers regardless of who registers
- [#46547](https://github.com/BerriAI/litellm/pull/46547) fix(proxy): route SSO token exchange and userinfo calls through litellm's httpx client
- [#46536](https://github.com/BerriAI/litellm/pull/46536) feat(helm): expose Redis TLS settings in the litellm chart redis values
- [#46540](https://github.com/BerriAI/litellm/pull/46540) fix(proxy): chain RDS IAM DB auth through the IRSA role when the DB role trusts only the pod role
- [#46723](https://github.com/BerriAI/litellm/pull/46723) feat(ui): set a search tool's cost per query from the Admin UI
- [#46760](https://github.com/BerriAI/litellm/pull/46760) fix(azure): set azure_ai/claude-opus-5-5-fast deprecation_date from list API
- [#41670](https://github.com/BerriAI/litellm/pull/41670) feat(proxy): name the successor model for deprecating deployments
- [#46492](https://github.com/BerriAI/litellm/pull/46492) fix(anthropic): emit one tool_use block per call when a /v1/messages stream chunk carries several
- [#40945](https://github.com/BerriAI/litellm/pull/40945) fix(proxy): honor disable_end_user_cost_tracking in spend logs and end-user tables
- [#46000](https://github.com/BerriAI/litellm/pull/46000) feat(rust): add native OpenRouter Responses
- [#46660](https://github.com/BerriAI/litellm/pull/46660) fix(proxy-extras): hold only Prisma's lock key during migrate deploy so it never waits on the request log index build
- [#46592](https://github.com/BerriAI/litellm/pull/46592) fix(proxy-extras): accept unencoded DB passwords in the v2 migration lock and redact its errors
- [#46591](https://github.com/BerriAI/litellm/pull/46591) fix(anthropic): count a replayed server tool call's cache mark the way modify_params sends it
- [#41676](https://github.com/BerriAI/litellm/pull/41676) fix(prompt_templates): do not mutate messages in-place in function_call_prompt
- [#46574](https://github.com/BerriAI/litellm/pull/46574) refactor(typing): clear 1143 basedpyright Any errors across 273 files
- [#46736](https://github.com/BerriAI/litellm/pull/46736) fix(websearch_interception): intercept the bare web_search tool type on chat completions
- [#46742](https://github.com/BerriAI/litellm/pull/46742) feat(model_prices): add missing OpenAI, Together, Fireworks and Bedrock registry entries
- [#46737](https://github.com/BerriAI/litellm/pull/46737) test(integration): wait on the right signal in five flaky integration contracts
- [#38879](https://github.com/BerriAI/litellm/pull/38879) fix(vector_stores): stop sharing one list across default-constructed registries
- [#46753](https://github.com/BerriAI/litellm/pull/46753) fix(vertex-ai): price deepseek-v4.1-flash-maas at zero during free period
- [#46713](https://github.com/BerriAI/litellm/pull/46713) test(e2e): perf rig (out-of-process mocks, PerformanceTestCase runner, per-request limits) and the small_bodies_5rps case
- [#40825](https://github.com/BerriAI/litellm/pull/40825) fix(s3): bound object key filenames
- [#45681](https://github.com/BerriAI/litellm/pull/45681) feat(agents): support Databricks Agent Platform agents in the agent gateway
- [#46743](https://github.com/BerriAI/litellm/pull/46743) ci(unit): run the two slowest shards on 4 workers
- [#46740](https://github.com/BerriAI/litellm/pull/46740) Revert "feat(proxy): add LITELLM_FIPS_MODE startup gate with provider assertion and loud password migration failure" (#42700)
- [#46696](https://github.com/BerriAI/litellm/pull/46696) fix(decisions): read a deployment's own supports_box_questions flag before the cost map
- [#46734](https://github.com/BerriAI/litellm/pull/46734) fix(search): bill an unpriced fallback search tool at its own price, not the failed primary's
- [#46733](https://github.com/BerriAI/litellm/pull/46733) test(integration): drop inherited provider API keys from the integration runner env
- [#46726](https://github.com/BerriAI/litellm/pull/46726) fix(cost): price bridged /v1/messages reasoning tokens from the chat completion, not the served Anthropic body
- [#46729](https://github.com/BerriAI/litellm/pull/46729) feat(vertex-ai): add deepseek-v4.1-flash-maas
- [#46728](https://github.com/BerriAI/litellm/pull/46728) fix(bedrock): add Priority and Flex prices to the gpt-oss-120b and gpt-oss-20b rows
- [#46727](https://github.com/BerriAI/litellm/pull/46727) fix(test): wait for the wedged Redis to be reached instead of a fixed 0.1s sleep in team roster sync tests
- [#46134](https://github.com/BerriAI/litellm/pull/46134) fix(mcp): preserve progress and cancel upstream work promptly
- [#46725](https://github.com/BerriAI/litellm/pull/46725) test(integration): remove BUG skips for 3 tests that pass on main
- [#43043](https://github.com/BerriAI/litellm/pull/43043) feat(proxy): split Azure PTU deployments across teams with per-team PTU ceilings and PTU-hour reporting
- [#46085](https://github.com/BerriAI/litellm/pull/46085) fix(guardrails): resolve decision models in caller team scope
- [#46721](https://github.com/BerriAI/litellm/pull/46721) feat(bedrock): add the jp.amazon.nova-2-lite-v1:0 geo inference profile
- [#41691](https://github.com/BerriAI/litellm/pull/41691) feat(batches): store each batch line's request and response in S3 and GCS
- [#46453](https://github.com/BerriAI/litellm/pull/46453) fix(openai): strip prompt_cache_breakpoint under drop_params for OpenAI models that cannot read it
- [#45703](https://github.com/BerriAI/litellm/pull/45703) fix(responses): bill a background response once, on the first read or poll that sees it finished
- [#41677](https://github.com/BerriAI/litellm/pull/41677) fix(proxy): allow model instances in LiteLLM_EndUserTable validation
- [#45197](https://github.com/BerriAI/litellm/pull/45197) fix(scim): write a group's roster in one locked transaction instead of one member at a time
- [#45797](https://github.com/BerriAI/litellm/pull/45797) feat(proxy): report when each per-model budget window resets
- [#46711](https://github.com/BerriAI/litellm/pull/46711) refactor(rust-bridge): remove the LoggerRule concept from the catalog
- [#46710](https://github.com/BerriAI/litellm/pull/46710) test(cost): pin litellm's own prompt count over a tool-call history when the stream carries no usage
- [#46641](https://github.com/BerriAI/litellm/pull/46641) test: extend runtime regression contracts for Messages and SDK
- [#46708](https://github.com/BerriAI/litellm/pull/46708) test(cost): cover custom deployment aliases, off-peak pricing, bridge usage shapes and duplicate spend rows
- [#46703](https://github.com/BerriAI/litellm/pull/46703) test(cost): cover turn-2 usage shapes across bridged previous_response_id, cached streams and passthrough cache writes
- [#32599](https://github.com/BerriAI/litellm/pull/32599) fix(proxy): list team access group models in /v1/model/info and keep key model lists narrow
- [#46637](https://github.com/BerriAI/litellm/pull/46637) fix(jwt): honor end_user_id_jwt_field on the JWT-to-virtual-key mapped path
- [#46690](https://github.com/BerriAI/litellm/pull/46690) test(cost): add tier 1 claude messages stream twins and recapture drifted usage shapes
- [#46486](https://github.com/BerriAI/litellm/pull/46486) feat(docker): stop, start, and uninstall a quickstart install with litellm-gateway
- [#46698](https://github.com/BerriAI/litellm/pull/46698) fix(bedrock): type performanceConfig latency as standard or optimized
- [#46694](https://github.com/BerriAI/litellm/pull/46694) test(cost): add azure_ai claude-haiku-5-5 cases and gpt-6 service tier cache prices
- [#46533](https://github.com/BerriAI/litellm/pull/46533) fix(responses): open faked stream items empty so tool arguments and text arrive once
- [#46693](https://github.com/BerriAI/litellm/pull/46693) feat(cost-map): add together_ai NVIDIA-Nemotron-3.5-Super-VL
- [#46629](https://github.com/BerriAI/litellm/pull/46629) test(cost): let CostMapEntry hold flex, priority and ultrafast cache and tier prices
- [#46691](https://github.com/BerriAI/litellm/pull/46691) test(translation): recapture azure gpt-6-astra content_filters
- [#46620](https://github.com/BerriAI/litellm/pull/46620) test(rust-bridge): select native routes per test without LITELLM_RUST
- [#46686](https://github.com/BerriAI/litellm/pull/46686) test(integration): expect signed empty thinking blocks to survive /v1/messages replay after #41362
- [#46687](https://github.com/BerriAI/litellm/pull/46687) test(cost): add best-guess tier 1 cases for vertex_ai and azure_ai claude and gpt-6 cache_write_5m
- [#46678](https://github.com/BerriAI/litellm/pull/46678) test(translation): add claude-sonnet-5-5 anthropic messages service_tier case
- [#46675](https://github.com/BerriAI/litellm/pull/46675) fix(model_prices): registry audit 2026-10-15, OpenAI GPT-4 shutdown dates, Azure gpt-chat-latest, xAI voice text input, Sail prices
- [#41669](https://github.com/BerriAI/litellm/pull/41669) feat(providers): add Inference APIs as OpenAI-compatible provider
- [#41528](https://github.com/BerriAI/litellm/pull/41528) fix(streaming): keep provider response headers on SDK streaming errors
- [#41836](https://github.com/BerriAI/litellm/pull/41836) fix(vertex_ai): route Model Garden models through the generateContent adapter
- [#46430](https://github.com/BerriAI/litellm/pull/46430) fix(count_tokens): count system and tools on Vertex Gemini, fall back to Mantle on Bedrock 404
- [#46647](https://github.com/BerriAI/litellm/pull/46647) fix: keep model capability flags out of provider requests
- [#46619](https://github.com/BerriAI/litellm/pull/46619) fix(decisions): answer 400 on a malformed provider_specific_header instead of dropping it
- [#46633](https://github.com/BerriAI/litellm/pull/46633) fix(decisions): keep box answers from OpenAI-format providers instead of turning them into refusals
- [#38284](https://github.com/BerriAI/litellm/pull/38284) fix(vertex_ai): prevent Gemini from misinterpreting $ref in tool results
- [#46663](https://github.com/BerriAI/litellm/pull/46663) refactor(types): replace Any with proven types in 24 files
- [#46652](https://github.com/BerriAI/litellm/pull/46652) test(caching): baseline breaker metrics from live state after gc
- [#43705](https://github.com/BerriAI/litellm/pull/43705) feat(minimax): add MiniMax-H3 and H3-Max video generation via /v1/videos
- [#36346](https://github.com/BerriAI/litellm/pull/36346) fix: preserve explicit provider for async image, audio, and realtime routes
- [#46645](https://github.com/BerriAI/litellm/pull/46645) test(ci): pin the xai reported-cost split and the coordinator-held Prisma lock wait
- [#40097](https://github.com/BerriAI/litellm/pull/40097) fix(vertex_ai): return 400 with file line number for malformed batch JSONL row
- [#42887](https://github.com/BerriAI/litellm/pull/42887) fix(llms): sanitize trailing slashes in provider get_complete_url
- [#40173](https://github.com/BerriAI/litellm/pull/40173) fix(vertex): report an unreadable credentials file as a read failure
- [#34653](https://github.com/BerriAI/litellm/pull/34653) fix(anthropic/adapter): stop translate_anthropic_tools_to_openai mutating the caller's input_schema
- [#41362](https://github.com/BerriAI/litellm/pull/41362) fix(anthropic): keep signed empty thinking blocks on /v1/messages requests
- [#46194](https://github.com/BerriAI/litellm/pull/46194) fix(proxy): scope /spend/tags aggregates to the caller's own and permitted-team logs
- [#39787](https://github.com/BerriAI/litellm/pull/39787) fix(auth): return a generic 401 for an unknown key
- [#45791](https://github.com/BerriAI/litellm/pull/45791) fix: cap cold MCP schema workers at usable CPUs and deflake wall-clock unit tests
- [#41041](https://github.com/BerriAI/litellm/pull/41041) fix(proxy): resolve model aliases to their target deployment for listing metadata
- [#46617](https://github.com/BerriAI/litellm/pull/46617) perf(proxy): cache the public provider and agent field endpoints
- [#46632](https://github.com/BerriAI/litellm/pull/46632) test: cover response contracts across translation endpoints
- [#46614](https://github.com/BerriAI/litellm/pull/46614) test(integration): cache the two-turn tool_search guardrail replays
- [#46628](https://github.com/BerriAI/litellm/pull/46628) feat(decisions): backport #45474, #45811, #45734, #46594, and #46596 to rc/1.106.0
- [#43710](https://github.com/BerriAI/litellm/pull/43710) feat(ui): filter active and paused model deployments
- [#46623](https://github.com/BerriAI/litellm/pull/46623) test(cost): add tier 1 gpt cache_read cases and recapture input_text usage shapes
- [#46362](https://github.com/BerriAI/litellm/pull/46362) fix(proxy): gzip responses over 16 KiB off the event loop
- [#46597](https://github.com/BerriAI/litellm/pull/46597) test: compare coding-agent response contracts across model tiers
- [#46618](https://github.com/BerriAI/litellm/pull/46618) test: expect the list-position index on streamed thinking blocks in the integration suite
- [#46577](https://github.com/BerriAI/litellm/pull/46577) fix(proxy): keep JSON nulls as null in audit log values
- [#46596](https://github.com/BerriAI/litellm/pull/46596) feat(typesafe): support Jev 1.14 images, box questions, and long-context headers
- [#46441](https://github.com/BerriAI/litellm/pull/46441) fix(responses): map Anthropic tool search to OpenAI server tool search
- [#46600](https://github.com/BerriAI/litellm/pull/46600) feat(xai): bill grok voice realtime sessions
- [#46611](https://github.com/BerriAI/litellm/pull/46611) fix: index streamed thinking_blocks so the OpenAI SDK .stream() accumulator accepts them
- [#46555](https://github.com/BerriAI/litellm/pull/46555) fix(proxy): store list-valued audit log changes as JSON text
- [#46389](https://github.com/BerriAI/litellm/pull/46389) fix(anthropic)!: translate the OpenAI tool_search tool on /v1/chat/completions for Claude models
- [#46602](https://github.com/BerriAI/litellm/pull/46602) chore(prices): add xAI grok-voice-3.0, grok-voice-2.0 and grok-voice-latest realtime rows
- [#45559](https://github.com/BerriAI/litellm/pull/45559) fix(xai): name a completed xAI batch's results file and stop looking it up on xAI's files API
- [#46444](https://github.com/BerriAI/litellm/pull/46444) fix(responses bridge): round-trip tool_search_call and tool_search_output items between turns
- [#45769](https://github.com/BerriAI/litellm/pull/45769) refactor: clean up fresh tech debt in per-user Copilot auth, Ternary FOCUS export and telemetry

#### 🐛 New Issues
- [#46657](https://github.com/BerriAI/litellm/issues/46657) [Bug]: MCP: cancelling a request handler during an in-flight stdio tools/call (session DELETE or notifications/cancelled) pins the proxy event loop at 100% CPU and leaks the server process (v1.104.0 through v1.105.1) `llm translation` 💬2
- [#46664](https://github.com/BerriAI/litellm/issues/46664) [Bug]: BYOK/static-auth MCP `tools/list` rejects per-request `x-mcp-{alias}-authorization` credential `bug` 💬2
- [#46677](https://github.com/BerriAI/litellm/issues/46677) [Bug]: Headroom compression and prompt-caching savings recorded as $0 for openrouter/* models since cost-map rows were removed 💬1
- [#46669](https://github.com/BerriAI/litellm/issues/46669) [Bug]: RouterRateLimitError in litellm/router.py `bug` `llm translation` 💬1
- [#46659](https://github.com/BerriAI/litellm/issues/46659) [Bug]: v1.105.0 GZipBufferedResponseMiddleware withholds response headers of streamed (SSE) responses until the first chunk; MCP tools/call streams start only at the 15s ping `llm translation` 💬1
- [#46651](https://github.com/BerriAI/litellm/issues/46651) [Bug]: Deployment custom pricing is billed correctly but callback and spend-log model-map rates use backend prices `llm translation` 💬1
- [#46646](https://github.com/BerriAI/litellm/issues/46646) complexity_router: OpenCode subagent injections count as fresh human asks `llm translation` 💬1
- [#46627](https://github.com/BerriAI/litellm/issues/46627) [Bug]: System One questions are omitted from standard logging and S3 callback payloads 💬1
- [#46630](https://github.com/BerriAI/litellm/issues/46630) [Bug]: Proxy 429 responses on /v1/messages drop the retry-after header that /v1/chat/completions preserves `llm translation` 💬1
- [#46576](https://github.com/BerriAI/litellm/issues/46576) [Feature]: Add pricing for gpt-5.5-cyber-preview `enhancement` `llm translation` 💬1
- [#46804](https://github.com/BerriAI/litellm/issues/46804) [Feature]: "Key Usage" view on the Usage page (filter by virtual key, with token metrics) `enhancement` `llm translation`
- [#46719](https://github.com/BerriAI/litellm/issues/46719) [Bug]: Gemini embeddings read text that starts with data:, gs:// or files/ as media, with no way to send it as text `llm translation`
- [#46701](https://github.com/BerriAI/litellm/issues/46701) [Bug]: Azure AI Foundry Anthropic endpoints 400 when azure_ad_token leaks into request body `llm translation`
- [#46692](https://github.com/BerriAI/litellm/issues/46692) [Feature] Per-MCP-server opt-out for the mandatory tool-name prefix (preserve exact tool names) `llm translation`
- [#46685](https://github.com/BerriAI/litellm/issues/46685) [Bug]: Gemini/Vertex Realtime silently drops client tools and instructions with eager setup `llm translation`
- [#46681](https://github.com/BerriAI/litellm/issues/46681) [Bug]: Responses translation drops Anthropic tool_reference blocks from function call outputs `llm translation`
- [#46665](https://github.com/BerriAI/litellm/issues/46665) [Feature]: Native support for OpenRouter's In-Region Routing (us.openrouter.ai / eu.openrouter.ai) `llm translation`
- [#46658](https://github.com/BerriAI/litellm/issues/46658) [Bug]: Change Model Name doesnt work `bug`
- [#46640](https://github.com/BerriAI/litellm/issues/46640) MCP gateway DCR rejects Gemini app connectors: `redirect_uris must be a list of 1 to 3 URIs` `llm translation`
- [#46634](https://github.com/BerriAI/litellm/issues/46634) [Bug]: Enterprise-only error when adding tags during virtual key creation in OSS `bug`
- [#46613](https://github.com/BerriAI/litellm/issues/46613) [Bug]: Provider fields on the final usage chunk of a stream are dropped `llm translation`
- [#46609](https://github.com/BerriAI/litellm/issues/46609) [Feature]: Configurable default sorting for session sidebar calls in the request logs UI `enhancement`
- [#46598](https://github.com/BerriAI/litellm/issues/46598) [Bug]: credentials with surrounding whitespace in the name cannot be deleted or updated `llm translation`

#### 🔒 Closed Issues
- [#25429](https://github.com/BerriAI/litellm/issues/25429) [Bug]: chatgpt/gpt-5.4 returns empty final Responses output, and completion() bridge fails with "Unknown items in responses API response: []"
- [#26156](https://github.com/BerriAI/litellm/issues/26156) [Bug]: Moonshot/Kimi K2.6 - reasoning_content is missing in assistant tool call message during multi-turn tool calling
- [#31447](https://github.com/BerriAI/litellm/issues/31447) [Bug]: Setting team_member_budget replaces the entire team metadata object
- [#31587](https://github.com/BerriAI/litellm/issues/31587) [Bug]: /v1/skills returns 500 when ANTHROPIC_API_KEY is not configured or invalid
- [#25191](https://github.com/BerriAI/litellm/issues/25191) [Bug]: websearch_interception agentic loop not triggered for Bedrock via /chat/completions
- [#25884](https://github.com/BerriAI/litellm/issues/25884) aws_role_name in proxy config YAML silently dropped — cross-account Bedrock AssumeRole never fires
- [#45411](https://github.com/BerriAI/litellm/issues/45411) [Bug]: per-turn-control-2026-07-01 filtered for bedrock, but Bedrock Invoke supports it — Claude Code fails with "messages.1.output_config: Extra inputs are not permitted"
- [#31438](https://github.com/BerriAI/litellm/issues/31438) [Bug]: /v1/models does not include models from team-level access_group_ids when team models is "no-default-models"
- [#32779](https://github.com/BerriAI/litellm/issues/32779) Security hardening: restrict x-litellm-customer-id to authorized virtual keys
- [#27038](https://github.com/BerriAI/litellm/issues/27038) [Bug]: disable_end_user_cost_tracking does not gate SpendLogs.end_user / DailyEndUserSpend writes
- [#24628](https://github.com/BerriAI/litellm/issues/24628) [Bug]: S3 filename too long
- [#38223](https://github.com/BerriAI/litellm/issues/38223) [Bug]: Gemini/Vertex rejects tool results containing JSON Schema $ref/$defs
- [#28427](https://github.com/BerriAI/litellm/issues/28427) [Bug]: Prompt caching router affinity TTL is hardcoded to 5 minutes — breaks 1-hour ephemeral cache routing
- [#26399](https://github.com/BerriAI/litellm/issues/26399) [Bug]: Bedrock passthrough routes bypass key.models / user.models access control
- [#46403](https://github.com/BerriAI/litellm/issues/46403) [Bug]: SpendLogs rows silently dropped when the provider reuses response ids (Ollama: `chatcmpl-<0..999>`)
- [#25456](https://github.com/BerriAI/litellm/issues/25456) [Bug]: Chat completions → Responses API bridge does not handle file_id with URL (documented LiteLLM pattern)
- [#27184](https://github.com/BerriAI/litellm/issues/27184) [Bug]: Bedrock API error when use model claude 4.6, drop_param not help
- [#37175](https://github.com/BerriAI/litellm/issues/37175) bug: Anthropic /v1/messages -> Responses API adapter drops required `detail` field on images and mislabels `thinking` as `output_text`
- [#40741](https://github.com/BerriAI/litellm/issues/40741) [Bug]: model_info keys present but None block cost-map enrichment, silently disabling budget reservation
- [#29280](https://github.com/BerriAI/litellm/issues/29280) [Bug]: Impossible to use /images/generations with OpenAI compatible providers
- [#38348](https://github.com/BerriAI/litellm/issues/38348) include_cost_in_streaming_usage injects cost unconditionally — not gated on caller's stream_options.include_usage
- [#37343](https://github.com/BerriAI/litellm/issues/37343) [Feature]: first-party Microsoft Agent 365 governance for MCP tool calls (pre-call authorization, post-call audit)
- [#26699](https://github.com/BerriAI/litellm/issues/26699) [Bug]: LiteLLM triton provider adds ~5s delay to time-to-first-token (TTFT)
- [#29223](https://github.com/BerriAI/litellm/issues/29223) [Bug]: Errors mid stream not re-raise in Responses API with Openai models
- [#32563](https://github.com/BerriAI/litellm/issues/32563) [Bug]: MCP gateway silently calls the model with no tools when zero MCP tools resolve (key without server access hallucinates)
- [#32759](https://github.com/BerriAI/litellm/issues/32759) Bedrock Mantle streaming tool_calls index starts at 1 instead of 0
- [#32774](https://github.com/BerriAI/litellm/issues/32774) [Bug] MCP gateway: every tool call fires a false-positive llm_requests_hanging alert (no litellm_call_id in synthetic data, no request_status on completion)
- [#32775](https://github.com/BerriAI/litellm/issues/32775) [Bug]: Cannot add skills from sources other than github
- [#42550](https://github.com/BerriAI/litellm/issues/42550) Anthropic /v1/messages: signed thinking blocks with empty text (default display=omitted) are stripped before dispatch, discarding replayed reasoning
- [#38831](https://github.com/BerriAI/litellm/issues/38831) is_web_search_tool(_chat_completion) misses {type:function, function:{name: web_search}} web-search shape
- [#40585](https://github.com/BerriAI/litellm/issues/40585) Feature request: X-Trust header support for human verification
- [#39011](https://github.com/BerriAI/litellm/issues/39011) [Bug]: /customer/block returns 500 even though the block is applied
- [#41835](https://github.com/BerriAI/litellm/issues/41835) [Bug]: Vertex Grok (`vertex_ai/xai/grok-*`) is rejected on `/v1beta/models/{model}:generateContent` while `/v1/chat/completions` on the same deployment works
- [#39757](https://github.com/BerriAI/litellm/issues/39757) [Bug]:Wrong-key 401 response leaks backend identity, DB table name, and SHA-256 hash of the submitted key
- [#41361](https://github.com/BerriAI/litellm/issues/41361) [Bug]: /v1/messages drops signature-only thinking blocks (Claude Opus 4.8 / Fable 5 / Fable 5.1 default shape), losing reasoning and defeating preserved-thinking checks
- [#32573](https://github.com/BerriAI/litellm/issues/32573) [Bug]: No data is displayed when filtering pages by the selected model.
- [#39838](https://github.com/BerriAI/litellm/issues/39838) A model-less PATCH can attach complexity_router_config to a non-router deployment
- [#46450](https://github.com/BerriAI/litellm/issues/46450) [Bug]: Response-cache hit reports the full price in x-litellm-response-cost / _hidden_params.response_cost, while spend logs record $0
- [#46339](https://github.com/BerriAI/litellm/issues/46339) [Bug]: gzip response middleware compresses up to 1 MiB on the event loop: an 824 KB embeddings response stalls the worker ~165 ms
- [#32597](https://github.com/BerriAI/litellm/issues/32597) [Feature]: Budget threshold webhook alerts for keys, teams, and users
- [#32731](https://github.com/BerriAI/litellm/issues/32731) [Bug]: `:generateContent` rejects spec-compliant requests omitting `contents[].role` on the vertex_ai path
- [#32757](https://github.com/BerriAI/litellm/issues/32757) [Feature]: /classify vLLM endpoint
- [#32799](https://github.com/BerriAI/litellm/issues/32799) [Bug]: config agent_list agents silently dropped (and can't use agent_access_groups) when store_model_in_db: true
- [#42551](https://github.com/BerriAI/litellm/issues/42551) Anthropic /v1/messages: invalid-thinking 400 is retried without thinking blocks even when the client set prefix_mismatch_behavior=error (debug-level only)
- [#44005](https://github.com/BerriAI/litellm/issues/44005) [Feature]: Support Databricks-hosted models with prefix of "system.ai." e.g (system.ai.gpt-5-5)
- [#40166](https://github.com/BerriAI/litellm/issues/40166) [Bug]: A missing or unreadable vertex_credentials file reports itself as invalid JSON, pointing debugging at the wrong cause
- [#34510](https://github.com/BerriAI/litellm/issues/34510) [Bug]: Anthropic→OpenAI tool translation aliases & mutates caller's input_schema in place
- [#38090](https://github.com/BerriAI/litellm/issues/38090) [Bug] Azure `apim-request-id` not available in logging callbacks for Responses API (`/v1/responses`)
- [#38057](https://github.com/BerriAI/litellm/issues/38057) [Bug]: Shared health checks multiply PostgreSQL reads and writes across workers
- [#40722](https://github.com/BerriAI/litellm/issues/40722) [Bug]: Terraform provider rejects legitimate 2xx responses (201/202) from litellm_mcp_server
- [#38874](https://github.com/BerriAI/litellm/issues/38874) [Bug]: `VectorStoreIndexRegistry` and `VectorStoreRegistry` use mutable default list arguments (`[]`)
- [#41730](https://github.com/BerriAI/litellm/issues/41730) [Bug]: /model/info returns empty data for access grouped models
- [#46658](https://github.com/BerriAI/litellm/issues/46658) [Bug]: Change Model Name doesnt work
- [#40094](https://github.com/BerriAI/litellm/issues/40094) [Bug]: Malformed row in Vertex AI batch input file returns 500 with unusable line number, not 400
- [#44029](https://github.com/BerriAI/litellm/issues/44029) [Bug]: /v1/messages streaming merges parallel tool_calls from one chunk into a single tool_use block (non-Anthropic providers)
- [#42078](https://github.com/BerriAI/litellm/issues/42078) [Feature]: Expose OpenTelemetry trace IDs on LiteLLM Proxy responses

### Unsloth (`unslothai/unsloth`)

**Stars:** 78,083 · **Open issues:** 351 · **Last push:** <1h ago

On October 16, 2026, Unsloth released version v0.1.908-beta, which introduces the ability to run NVIDIA's Nemotron 3.5 models and Meta's Muse Spark Open locally. This update features significant enhancements such as new text-diffusion LLMs, DeepSpeed training optimizations, and improved prompt caching for coding agents. Key merged pull requests included support for NVIDIA Nemotron 3.5 Bolt and Super GGUFs, along with various fixes to backend CI and Studio functionalities, notably the handling of token previews and connections. A notable new issue reported was the desktop crashing on launch with a Wayland "Error 71" on Intel + NVIDIA systems, indicating critical stability challenges that need addressing.

#### 🚀 New Releases
- [v0.1.908-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.908-beta) NVIDIA Nemotron 3.5 + Meta Muse Spark Open

#### ✅ Merged PRs
- [#13949](https://github.com/unslothai/unsloth/pull/13949) Baseline the unsloth-zoo 2026.10.6 and transformers 5.20.0 scan findings after review
- [#13892](https://github.com/unslothai/unsloth/pull/13892) Studio: prefer NVIDIA Wayland dmabuf over static compositing-off
- [#13937](https://github.com/unslothai/unsloth/pull/13937) NVFP4 tests: real-CUDA skip guards, and format the files #13840 left off the hook
- [#13936](https://github.com/unslothai/unsloth/pull/13936) Fix main's red CI: UI font tokens in the token preview, real-CUDA skip guards
- [#13840](https://github.com/unslothai/unsloth/pull/13840) NVFP4: decode weight tiles inside the GEMM for small-batch forward and dX
- [#13790](https://github.com/unslothai/unsloth/pull/13790) Studio: do not re-send the image generate POST after a dropped connection
- [#13930](https://github.com/unslothai/unsloth/pull/13930) Fix main's red Backend CI after #13850 and #13806
- [#13922](https://github.com/unslothai/unsloth/pull/13922) Locate the MTP drafter-drop fallback by its shape, not one spelling
- [#13850](https://github.com/unslothai/unsloth/pull/13850) Studio: preview tokens and the completion mask before training
- [#13918](https://github.com/unslothai/unsloth/pull/13918) Bump install.sh / install.ps1 pins to unsloth>=2026.10.6, unsloth-zoo>=2026.10.6
- [#13909](https://github.com/unslothai/unsloth/pull/13909) Fix main's red CI after #13806, #13899 and recent formatter drift
- [#13903](https://github.com/unslothai/unsloth/pull/13903) Studio: support Muse Spark Open GGUFs
- [#13846](https://github.com/unslothai/unsloth/pull/13846) Fix main's red Backend CI, repo and picker contract tests after #13724, #13749 and #13828
- [#13841](https://github.com/unslothai/unsloth/pull/13841) Studio: let Run settings load a Hugging Face model in 16-bit
- [#13851](https://github.com/unslothai/unsloth/pull/13851) MoE LoRA: keep native per-expert Linears for an explicit target_modules list on transformers 4.x
- [#13899](https://github.com/unslothai/unsloth/pull/13899) Studio: support NVIDIA Nemotron 3.5 Bolt and Super GGUFs
- [#13894](https://github.com/unslothai/unsloth/pull/13894) Frontend CI: keep grouped browser logs through a second cancel signal
- [#13806](https://github.com/unslothai/unsloth/pull/13806) Studio: train a speculative decoding drafter with fine-tunes and export it for llama.cpp and vLLM
- [#13808](https://github.com/unslothai/unsloth/pull/13808) Studio: Windows torch 2.12 kernels from our prebuilt wheels
- [#13827](https://github.com/unslothai/unsloth/pull/13827) Fix FastLanguageModel fused CE loss under FSDP2 with an untied lm_head
- [#13896](https://github.com/unslothai/unsloth/pull/13896) Studio Hub: show the Meta logo on every Unsloth Muse re-upload
- [#13889](https://github.com/unslothai/unsloth/pull/13889) Launch eager RMSNorm and LayerNorm kernels through triton_launch
- [#13831](https://github.com/unslothai/unsloth/pull/13831) MoE grouped GEMM: tl.range for the dX expert loop, drop the dead dW FLATTEN
- [#13795](https://github.com/unslothai/unsloth/pull/13795) Studio: serve /v1/messages and count_tokens from MLX and other in-process models
- [#13893](https://github.com/unslothai/unsloth/pull/13893) Stream the chunked cross entropy forward logits with evict_first
- [#13830](https://github.com/unslothai/unsloth/pull/13830) FP8 rowwise GEMV: int64 row offsets past 2^31 elements, and skip it on Blackwell with Triton 3.3
- [#13829](https://github.com/unslothai/unsloth/pull/13829) NF4 GEMV: drop K masks on even K and gather the NF4 table from registers
- [#13852](https://github.com/unslothai/unsloth/pull/13852) Docker ROCm Studio image: run GGUF chat on the GPU through Vulkan
- [#13886](https://github.com/unslothai/unsloth/pull/13886) Studio Hub: Recommended lists safetensors repos only past 30 likes, always open on Discover
- [#13794](https://github.com/unslothai/unsloth/pull/13794) Studio: stream /v1/responses from MLX and other in-process models
- [#13887](https://github.com/unslothai/unsloth/pull/13887) Format tests/test_triton_fp_fusion.py back to the hook's fixed point
- [#10744](https://github.com/unslothai/unsloth/pull/10744) Compile each transformer block as one region for every FastModel model (LoRA and QLoRA)
- [#13444](https://github.com/unslothai/unsloth/pull/13444) Studio: info stamp on image downloads, recipe in every format, load settings from an image
- [#13825](https://github.com/unslothai/unsloth/pull/13825) fast_inference: Gemma 4 Unified, Muse Glimmer, dense Gemma 4; 4-bit fallback when no -bnb-4bit repo
- [#13864](https://github.com/unslothai/unsloth/pull/13864) fast_inference: switch Gemma 4 to Unsloth inference on GPUs below sm80
- [#13738](https://github.com/unslothai/unsloth/pull/13738) fix(studio): show a download start the moment it is requested, and ke…
- [#13719](https://github.com/unslothai/unsloth/pull/13719) Fine-tune and export native MTP heads and DSpark drafters
- [#13867](https://github.com/unslothai/unsloth/pull/13867) Add UnlimitedOcrTextModel to the fused-MoE conversion snapshot
- [#13861](https://github.com/unslothai/unsloth/pull/13861) Studio: install causal-conv1d and mamba-ssm only when a model needs them
- [#13523](https://github.com/unslothai/unsloth/pull/13523) Desktop: explain Windows Long Paths before its UAC prompt
- [#13828](https://github.com/unslothai/unsloth/pull/13828) Kernels: request enable_fp_fusion=True explicitly, ahead of Triton 3.9's False default
- [#13854](https://github.com/unslothai/unsloth/pull/13854) Prebuilt CUDA wheels: compress the fatbins (flash-attn 1.49 GB -> ~285 MB)
- [#13796](https://github.com/unslothai/unsloth/pull/13796) Studio: serve /v1/completions from MLX models
- [#13843](https://github.com/unslothai/unsloth/pull/13843) Studio Desktop: open the OS folder dialog to add a model folder
- [#13863](https://github.com/unslothai/unsloth/pull/13863) MLX stub: answer zoo's fused_verify_attention
- [#13813](https://github.com/unslothai/unsloth/pull/13813) Run Linux frontend browser checks in two parallel groups
- [#13819](https://github.com/unslothai/unsloth/pull/13819) Keep fp32-only tensors (MoE router bias) in fp32 on 16-bit saves of non-PEFT models
- [#13823](https://github.com/unslothai/unsloth/pull/13823) Add dtype option to save_pretrained_merged for float32 merges
- [#13771](https://github.com/unslothai/unsloth/pull/13771) Fix SDAR empty-mask resampling to match the reference
- [#13849](https://github.com/unslothai/unsloth/pull/13849) Load the zoo Hub download helpers without unsloth_zoo's package init
- [#13751](https://github.com/unslothai/unsloth/pull/13751) Pass layers_pattern from FastLanguageModel.get_peft_model to LoraConfig
- [#13853](https://github.com/unslothai/unsloth/pull/13853) Studio: let Orpheus TTS pick one of its built-in voices
- [#13842](https://github.com/unslothai/unsloth/pull/13842) Studio: accept sk-unsloth API keys in the x-api-key header
- [#13780](https://github.com/unslothai/unsloth/pull/13780) Fix DiffusionGemma sampled-prefix cache retention
- [#13791](https://github.com/unslothai/unsloth/pull/13791) Studio: send audio.cpp request fields in the form each model reads
- [#13838](https://github.com/unslothai/unsloth/pull/13838) unsloth run: add --engine-parallelism and --gpus for multi-GPU serving
- [#13845](https://github.com/unslothai/unsloth/pull/13845) Studio recipes: keep a finished run's pump off the next run
- [#13481](https://github.com/unslothai/unsloth/pull/13481) Studio: run coding agents on a Connection model
- [#13778](https://github.com/unslothai/unsloth/pull/13778) Studio: stop listing a GGUF's borrowed text encoder and VAE as a model in the picker
- [#13344](https://github.com/unslothai/unsloth/pull/13344) Studio: int8 weight-only transformer quant on Apple Silicon through the Metal int8 kernel
- [#13361](https://github.com/unslothai/unsloth/pull/13361) Studio: model aliases for the OpenAI-compatible API
- [#13770](https://github.com/unslothai/unsloth/pull/13770) Fix bfd_split truncating overflow before packing
- [#13826](https://github.com/unslothai/unsloth/pull/13826) Studio: keep the chat template of Mac LoRAs trained on multimodal base models
- [#13816](https://github.com/unslothai/unsloth/pull/13816) Studio: train on pre-tokenized datasets (input_ids / attention_mask / labels)
- [#13782](https://github.com/unslothai/unsloth/pull/13782) Studio: stop llama-server crashing on macOS on Ctrl+C
- [#13820](https://github.com/unslothai/unsloth/pull/13820) AsyncGRPOTrainer: optional SAO-style importance sampling mask
- [#13844](https://github.com/unslothai/unsloth/pull/13844) Trim comments in tests
- [#13749](https://github.com/unslothai/unsloth/pull/13749) Studio Hub: one filter popover for capabilities, size, context and uploader, composer-style menus
- [#13446](https://github.com/unslothai/unsloth/pull/13446) Studio Desktop: choose where Unsloth installs on Windows
- [#13839](https://github.com/unslothai/unsloth/pull/13839) Studio: accept Parquet files as local Data Recipe seeds
- [#13812](https://github.com/unslothai/unsloth/pull/13812) Studio: Hub Run refuses audio models that neither Audio nor Chat can run
- [#13756](https://github.com/unslothai/unsloth/pull/13756) Studio: generate images through an external connection
- [#13805](https://github.com/unslothai/unsloth/pull/13805) Allow norm layers in FastLanguageModel modules_to_save
- [#13764](https://github.com/unslothai/unsloth/pull/13764) Studio: start audio.cpp options at each model's recommended values
- [#13762](https://github.com/unslothai/unsloth/pull/13762) Studio: keep site settings across pages in the browser panel
- [#13836](https://github.com/unslothai/unsloth/pull/13836) Read the Tauri command list inside the gated invoke_handler closure
- [#13761](https://github.com/unslothai/unsloth/pull/13761) Studio: say when a browser panel page needs the system browser
- [#13814](https://github.com/unslothai/unsloth/pull/13814) Studio: add an opt-in Settings switch to hide models that do not fit
- [#13724](https://github.com/unslothai/unsloth/pull/13724) Studio diffusion: learned activation peaks, OOM retry in group offload setup, pinned GGUF host copies, tied-weight groups
- [#13804](https://github.com/unslothai/unsloth/pull/13804) Studio NVFP4: one-pass activation quantiser for torchao's to_nvfp4
- [#13773](https://github.com/unslothai/unsloth/pull/13773) Studio: keep sd.cpp direct conv off on Vulkan and ROCm
- [#13767](https://github.com/unslothai/unsloth/pull/13767) Studio: generic text-encoder dead-tail truncation for diffusion and video
- [#13653](https://github.com/unslothai/unsloth/pull/13653) Studio: stop re-prompting a finished tool answer that labels its results by step
- [#13774](https://github.com/unslothai/unsloth/pull/13774) Studio: probe the regional diffusion compile on ROCm instead of refusing it
- [#13801](https://github.com/unslothai/unsloth/pull/13801) Return weight and bias gradients from the fast LayerNorm, and support bias=False
- [#13768](https://github.com/unslothai/unsloth/pull/13768) Studio: let the Linux tool sandbox use bubblewrap on NixOS and in FHS launchers
- [#13822](https://github.com/unslothai/unsloth/pull/13822) Studio Hub: drop the compact list view, make grid and split views responsive
- [#13763](https://github.com/unslothai/unsloth/pull/13763) Studio: finite MPS memory cap and sd.cpp --mmap on macOS
- [#13729](https://github.com/unslothai/unsloth/pull/13729) Studio: show the browser agent cursor where it clicks and types, with a Settings toggle
- [#13755](https://github.com/unslothai/unsloth/pull/13755) Studio: keep list numbers in Word and HTML knowledge base files
- [#13811](https://github.com/unslothai/unsloth/pull/13811) Studio: let tool results use the window when auto-compaction is off
- [#13777](https://github.com/unslothai/unsloth/pull/13777) Studio: add Always allow to browser agent prompts
- [#13717](https://github.com/unslothai/unsloth/pull/13717) Studio: use native Linux browser tabs with GTK overlay sizing
- [#13824](https://github.com/unslothai/unsloth/pull/13824) Studio: train ShareGPT tool calls natively on processor-loaded models
- [#13760](https://github.com/unslothai/unsloth/pull/13760) Studio: tell the model when a site's bot protection blocks a page fetch
- [#13758](https://github.com/unslothai/unsloth/pull/13758) Score a 16-bit fine-tune with unsloth eval in 16-bit, not in 4-bit
- [#13757](https://github.com/unslothai/unsloth/pull/13757) Studio: keep transcribing past a damaged audio frame
- [#13759](https://github.com/unslothai/unsloth/pull/13759) Studio: let videos in the browser panel go full screen
- [#13817](https://github.com/unslothai/unsloth/pull/13817) Studio: tighter hover pill on the chat model selector
- [#13671](https://github.com/unslothai/unsloth/pull/13671) Studio: install the Vulkan or CPU llama.cpp bundle on Windows NVIDIA drivers older than CUDA 12
- [#13785](https://github.com/unslothai/unsloth/pull/13785) Studio: keep a Connection's thinking between tool calls in the same answer
- [#13800](https://github.com/unslothai/unsloth/pull/13800) Studio: each chat keeps its own browser tabs, and the browser agent works on in chats off screen
- [#13754](https://github.com/unslothai/unsloth/pull/13754) Studio: read the code behind a GitHub file link in web search
- [#13783](https://github.com/unslothai/unsloth/pull/13783) unsloth start opencode: never pass --model on a bare launch; OpenCode 2 rejects it
- [#13371](https://github.com/unslothai/unsloth/pull/13371) Studio: let YuE2 songs run to their own ending instead of 1.5x the length
- [#13818](https://github.com/unslothai/unsloth/pull/13818) Pin vermin: 1.9.0 fails the backend floor lint on valid 3.5 syntax
- [#13680](https://github.com/unslothai/unsloth/pull/13680) Unsloth Studio / Desktop (AMD, Windows): install the Vulkan llama.cpp prebuilt when device 0 has no HIP bundle
- [#13810](https://github.com/unslothai/unsloth/pull/13810) Studio: unload a model under the id the API lists for it
- [#13803](https://github.com/unslothai/unsloth/pull/13803) Studio: stopping a model load leaves no Starting model status behind
- [#13809](https://github.com/unslothai/unsloth/pull/13809) Give the data settings driver's cold first load the same 120s as its mount wait
- [#13807](https://github.com/unslothai/unsloth/pull/13807) Prebuilt CUDA wheels: torch 2.12 for Windows x64
- [#13798](https://github.com/unslothai/unsloth/pull/13798) Studio: name the Windows update that adds MXC's built-in container
- [#13799](https://github.com/unslothai/unsloth/pull/13799) Measure the resume glyph's centring in viewBox units, not painted rects
- [#13742](https://github.com/unslothai/unsloth/pull/13742) Studio: Windows torch 2.10 kernels from our prebuilt wheels
- [#13683](https://github.com/unslothai/unsloth/pull/13683) Studio: cache Edit-mode text encoding by reference image content
- [#13734](https://github.com/unslothai/unsloth/pull/13734) Studio: keep the desktop browser page live when it opens as a dialog
- [#13789](https://github.com/unslothai/unsloth/pull/13789) Studio: raise the startup bundle budget by #13589's measured growth

#### 🐛 New Issues
- [#13788](https://github.com/unslothai/unsloth/issues/13788) [Feature] Add a way to see the exact text snippets or chunks that were loaded into context with RAG `feature request` 💬2
- [#13875](https://github.com/unslothai/unsloth/issues/13875) [Bug] Desktop crashes on launch (Wayland "Error 71") on Intel + NVIDIA open-module host; #9734 workaround causes it `feature request` `bug` 💬1
- [#13876](https://github.com/unslothai/unsloth/issues/13876) [Bug] Cannot close project sources banner when chatting within a project chat window (too much space taken) `feature request` `bug` 💬1
- [#13858](https://github.com/unslothai/unsloth/issues/13858) [Feature] Added some practical features `feature request` 💬1
- [#13950](https://github.com/unslothai/unsloth/issues/13950) [Feature Request] Add a toggle to keep Deep Research / Web search running after the tab is closed `feature request`
- [#13947](https://github.com/unslothai/unsloth/issues/13947) [Feature] Studio: make quant fit badges visible and accurate on unified-memory laptops `feature request`
- [#13948](https://github.com/unslothai/unsloth/issues/13948) [Bug] Ling 3 tiny fine tune export fails `feature request` `bug`
- [#13944](https://github.com/unslothai/unsloth/issues/13944) [Bug] Cold padding/packed mask cache fails FlexAttention capture with gb0067
- [#13943](https://github.com/unslothai/unsloth/issues/13943) [Bug] Linux homebrew install doesn't provide CLI or desktop launcher `feature request` `bug`
- [#13938](https://github.com/unslothai/unsloth/issues/13938) [Bug] Assistant messages can not be edited. `feature request` `bug`
- [#13935](https://github.com/unslothai/unsloth/issues/13935) [Feature] I need see full local path for models `feature request`
- [#13926](https://github.com/unslothai/unsloth/issues/13926) [Bug] unsloth lost models `feature request` `bug`
- [#13932](https://github.com/unslothai/unsloth/issues/13932) How to reverse back upgrade? `feature request`
- [#13921](https://github.com/unslothai/unsloth/issues/13921) Studio: /context command to show what fills the context window
- [#13904](https://github.com/unslothai/unsloth/issues/13904) [Feature] `feature request`
- [#13902](https://github.com/unslothai/unsloth/issues/13902) [Feature] [Bug] `feature request`
- [#13908](https://github.com/unslothai/unsloth/issues/13908) [Bug] Kitten TTS 2 GGUF fails to load — unsupported tensor type 43 `feature request` `bug`
- [#13905](https://github.com/unslothai/unsloth/issues/13905) [Bug] `feature request`

#### 🔒 Closed Issues
- [#5835](https://github.com/unslothai/unsloth/issues/5835) [Feature] Offline Windows installer package like 'LM Studio' or Anaconda or other offline installers
- [#5288](https://github.com/unslothai/unsloth/issues/5288) [Feature] Add missing guide for Pi coding agent
- [#5405](https://github.com/unslothai/unsloth/issues/5405) [Feature] AMD: use the GPU in the Docker image (Strix Halo ran on CPU)
- [#5806](https://github.com/unslothai/unsloth/issues/5806) Better Websearch
- [#5639](https://github.com/unslothai/unsloth/issues/5639) [Feature]请求web加载模型，让load_in_4bit参数可调
- [#11327](https://github.com/unslothai/unsloth/issues/11327) [Feature Request] Allow Windows Desktop to configure the backend installation directory
- [#5186](https://github.com/unslothai/unsloth/issues/5186) [Feature] - "merged float32" - Float32 precision safetensors, with low VRAM/RAM requirements.
- [#6559](https://github.com/unslothai/unsloth/issues/6559) Package the relevant installation packages into a single .gz file for portable installation.
- [#6025](https://github.com/unslothai/unsloth/issues/6025) [Bug] Unsloth Studio Installer Fails When PyPI.org Is Unreachable Despite Local Wheel Availability and Installation
- [#8369](https://github.com/unslothai/unsloth/issues/8369) [Feature] Studio / Desktop: Image Gen Optional Visual Watermarking, Metadata Embedding, and AI Provenance
- [#5805](https://github.com/unslothai/unsloth/issues/5805) [Feature] Standalone binary
- [#13638](https://github.com/unslothai/unsloth/issues/13638) [Bug]: TypeError: Image in diffusion_prompt_cache.py causes CUBLAS error during Image Edit (Qwen-Image-2.1)
- [#5829](https://github.com/unslothai/unsloth/issues/5829) [Feature] Unsloth Studio: Allow setting model specific parameters (Like voice selection for Orpheus-TTS)
- [#7139](https://github.com/unslothai/unsloth/issues/7139) [Feature] Support tokenized datasets in Unsloth Studio
- [#5952](https://github.com/unslothai/unsloth/issues/5952) Model support for command-a-plus-05-2026-w4a4
- [#5731](https://github.com/unslothai/unsloth/issues/5731) [Feature Request] UI/UX & Configuration Suggestions
- [#5609](https://github.com/unslothai/unsloth/issues/5609) Installation Should Allow miniforge environment manager
- [#7050](https://github.com/unslothai/unsloth/issues/7050) Add Mistral Leanstral
- [#6759](https://github.com/unslothai/unsloth/issues/6759) Add Meituan LongCat-2.0 support / Unsloth variants
- [#12205](https://github.com/unslothai/unsloth/issues/12205) [Unsloth Studio] Prebuilt ROCm llama.cpp binary crashes with "out of memory" (hipStreamCreateWithFlags); source build of the same commit works fine
- [#5605](https://github.com/unslothai/unsloth/issues/5605) [Feature] Unsloth studio: Tokenizer viewer, editable list(add new tokens/caracters)
- [#10656](https://github.com/unslothai/unsloth/issues/10656) [Bug] AMD: Unsloth Desktop on Strix Halo (Windows) now defaults to Vulkan, where prefill is very slow
- [#6399](https://github.com/unslothai/unsloth/issues/6399) [Feature] Support Claude for Microsoft Office
- [#6695](https://github.com/unslothai/unsloth/issues/6695) [Feature] Function to mask thinking closing token
- [#5404](https://github.com/unslothai/unsloth/issues/5404) [Feature] reciepes parquet Reader and Agentic mode
- [#7133](https://github.com/unslothai/unsloth/issues/7133) Does Unsloth support fine-tuning `nvidia/nemotron-3.5-asr-streaming-0.6b`?
- [#3235](https://github.com/unslothai/unsloth/issues/3235) modules_to_save not allowed
- [#6698](https://github.com/unslothai/unsloth/issues/6698) Studio: verify prebuilt llama.cpp provenance and sandbox install-time validation
- [#5789](https://github.com/unslothai/unsloth/issues/5789) Model support for cohere-transcribe-03-2026
- [#6995](https://github.com/unslothai/unsloth/issues/6995) [Feature] Support HF Kernels instead of Triton
- [#5215](https://github.com/unslothai/unsloth/issues/5215) [Feature] Support weightless RMSNorm (for FlashNorm weight folding trick)
- [#6007](https://github.com/unslothai/unsloth/issues/6007) [Feature] Apple Core ML / ANE backend support for on-device LLM acceleration
- [#13875](https://github.com/unslothai/unsloth/issues/13875) [Bug] Desktop crashes on launch (Wayland "Error 71") on Intel + NVIDIA open-module host; #9734 workaround causes it
- [#6361](https://github.com/unslothai/unsloth/issues/6361) [Feature] Qwen3.5 MTP finetune
- [#6369](https://github.com/unslothai/unsloth/issues/6369) [Feature] Isn't it possible to use native OS Open dialog boxes for selecting new model directories? For example, native Windows Open dialog box.
- [#11649](https://github.com/unslothai/unsloth/issues/11649) [Feature] Add support for model aliases
- [#7144](https://github.com/unslothai/unsloth/issues/7144) [Feature] Single-Rollout Asynchronous Optimization (SAO) RL
- [#10859](https://github.com/unslothai/unsloth/issues/10859) [Bug] Installer ignores chosen folder and installs dependencies in ~/.unsloth
- [#9648](https://github.com/unslothai/unsloth/issues/9648) [Bug] Asks where to install....installls on C: anyway. WTH !!!?
- [#13775](https://github.com/unslothai/unsloth/issues/13775) [Bug] Audio models arn't showing in the lists.
- [#5821](https://github.com/unslothai/unsloth/issues/5821) [Feature] Unsloth Documentation as Single Downloadable File for RAG
- [#6707](https://github.com/unslothai/unsloth/issues/6707) Feature Request: Hardware-Aware Model Discovery ("For You" tab + Hardware Picks in model selector)
- [#5400](https://github.com/unslothai/unsloth/issues/5400) [Feature] possibly missing tools and different feature from gemma4 template
- [#6375](https://github.com/unslothai/unsloth/issues/6375) MTP on Mac M1 Ultra is slower/same than without it?
- [#13747](https://github.com/unslothai/unsloth/issues/13747) error using opencode2
- [#6689](https://github.com/unslothai/unsloth/issues/6689) [Feature] Option to Auto-Shutdown after task completion
- [#13766](https://github.com/unslothai/unsloth/issues/13766) [Bug] API call to unload model registers as successful, shows in the log but doesn't actually unload the model
- [#13781](https://github.com/unslothai/unsloth/issues/13781) [Bug] Images: slow generate request is re-sent, producing 4 duplicate images
- [#13904](https://github.com/unslothai/unsloth/issues/13904) [Feature]
- [#13902](https://github.com/unslothai/unsloth/issues/13902) [Feature] [Bug]
- [#13905](https://github.com/unslothai/unsloth/issues/13905) [Bug]
- [#13685](https://github.com/unslothai/unsloth/issues/13685) [Feature] Support external connections for images
- [#13688](https://github.com/unslothai/unsloth/issues/13688) Linux tool sandbox rejects bubblewrap on NixOS and under user-namespace launchers
- [#13784](https://github.com/unslothai/unsloth/issues/13784) [Bug] Automatic context compaction partially triggers even when it is disabled.
- [#13662](https://github.com/unslothai/unsloth/issues/13662) [Bug] NO INSTALL END Win10

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,142 · **Open issues:** 415 · **Last push:** 4h ago

On October 16, 2026, AIBrix did not release any new versions, but several significant updates were merged into the codebase. Notable fixes include improvements to queue time counting in least-latency routing and performance enhancements for prefix caching, alongside crucial bug fixes addressing issues with Index LoRA adapter blocks, merging per-engine metrics from vLLM data-parallel pods, and corrections to token loading charges. Additionally, a new feature proposal was raised to lower the Retry-After times for sleeping models, aiming to enhance responsiveness. Overall, the day's developments reflect a focus on improving system reliability and performance.

#### ✅ Merged PRs
- [#3103](https://github.com/vllm-project/aibrix/pull/3103) [Bug] Count queue time in least-latency routing
- [#3089](https://github.com/vllm-project/aibrix/pull/3089) fix: prefix cache perf improvements
- [#3097](https://github.com/vllm-project/aibrix/pull/3097) [Bug] Index LoRA adapter blocks per adapter in KV event sync
- [#3096](https://github.com/vllm-project/aibrix/pull/3096) [Bug] Merge per-engine metrics from vLLM data-parallel pods
- [#3094](https://github.com/vllm-project/aibrix/pull/3094) [Bug] Correct the token_load decode charge with the prefill's prompt tokens
- [#3093](https://github.com/vllm-project/aibrix/pull/3093) [Misc] Benchmark the local tokenizer across prompt sizes
- [#3091](https://github.com/vllm-project/aibrix/pull/3091) [Bug] Drop the earlier autoscaler_scale_action series when the reason changes
- [#3090](https://github.com/vllm-project/aibrix/pull/3090) [Bug] Report a failing reconcile on the Ready condition
- [#3088](https://github.com/vllm-project/aibrix/pull/3088) [Bug] Propagate gateway Send errors when model is empty
- [#3077](https://github.com/vllm-project/aibrix/pull/3077) [Bug] Finish expiry of recovered overdue Batch jobs that have no execution metadata
- [#3076](https://github.com/vllm-project/aibrix/pull/3076) [Bug] Accept a Batch cancellation while a live driver validates the input

#### 🐛 New Issues
- [#3109](https://github.com/vllm-project/aibrix/issues/3109) [Feature][ModelClaim] Lower Retry-After for a sleeping model from 10 s to 3 s; a wake takes 2.5–3.1 s `kind/enhancement` `good first issue` `area/gateway` `kind/feature` 💬4
- [#3099](https://github.com/vllm-project/aibrix/issues/3099) [Discussion] Should StormService support runtime Prefill/Decode role switching? `area/gateway` `kind/feature` `area/runtime` 💬4
- [#3108](https://github.com/vllm-project/aibrix/issues/3108) [Bug]: ModelClaim engine crashes with IndexError in kvcached get_new_blocks after the controller raises its KV limit above the engine's initial block pool `kind/bug` `area/orchestration` `area/modelclaim` 💬3
- [#3098](https://github.com/vllm-project/aibrix/issues/3098) [Bug] StormService reconcile drops a ControllerRevision list error without retrying `kind/bug` `area/runtime` `area/orchestration` 💬3
- [#3112](https://github.com/vllm-project/aibrix/issues/3112) [Bug] PD routing runs the prefill before the requestsInflight cap is checked `kind/bug` `area/gateway` `area/website` 💬1
- [#3095](https://github.com/vllm-project/aibrix/issues/3095) [Bug] Metrics from a vLLM data-parallel pod only reflect one engine `area/gateway` `kind/misc` 💬1
- [#3092](https://github.com/vllm-project/aibrix/issues/3092) [Bug] token_load charges multimodal requests by their encoded body size, not their prompt tokens `kind/bug` `area/gateway` 💬1
- [#3100](https://github.com/vllm-project/aibrix/issues/3100) [Call for Testing] Try ModelWarmup in AIBrix v0.8.0 or master branch `help wanted` `kind/misc` `area/website` `area/runtime`

#### 🔒 Closed Issues
- [#2805](https://github.com/vllm-project/aibrix/issues/2805) [Testing] Triage of red tests that still need a fix (90-day sweep)
- [#2830](https://github.com/vllm-project/aibrix/issues/2830) [Testing] Triage of tests that never run: disabled specs and suites that no CI job compiles
- [#3075](https://github.com/vllm-project/aibrix/issues/3075) [Bug] A Batch cancellation during live input validation is rejected with HTTP 409
- [#3021](https://github.com/vllm-project/aibrix/issues/3021) [Bug] PodAutoscaler status is rewritten on every reconcile, alternating between two versions

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,185 · **Open issues:** 658 · **Last push:** 4h ago

On October 16, 2026, Semantic Router did not release any new versions, but several important updates were merged, including fixes for handling whitespace-only matched stop sequences and issues with omitted optional content on the Anthropic stream path (#4910 and #4863). Additionally, a test enhancement was made to ensure that all bundle participants are properly joined before the start of two specific tests (#5069). The most pressing new issues include a bug related to Decision 3.0 that raises an HTTP 200 status with errors for max_position_embeddings, and another concerning a stream error type that varies with how upstream bodies are split (#5123 and #5107). These developments indicate ongoing refinements to routing accuracy and stability within the ecosystem.

#### ✅ Merged PRs
- [#4910](https://github.com/vllm-project/semantic-router/pull/4910) [Bug] Accept whitespace-only matched stop sequences on the Anthropic stream path
- [#4863](https://github.com/vllm-project/semantic-router/pull/4863) [Bug] Accept Anthropic tool_result with omitted optional content
- [#5069](https://github.com/vllm-project/semantic-router/pull/5069) [Test] Join every bundle participant before starting in two bundle tests

#### 🐛 New Issues
- [#5123](https://github.com/vllm-project/semantic-router/issues/5123) [Bug] Decision 3.0: question over max_position_embeddings answers HTTP 200 with a per-question error (or, unconfigured, silently with input_tokens 0) `bug` `needs-info` `wg/router-models-inference-runtime` 💬2
- [#5107](https://github.com/vllm-project/semantic-router/issues/5107) [Bug] A Chat client's stream error type depends on how the upstream body is split `bug` `needs-acceptance` `wg/data-plane-networking` 💬2
- [#5115](https://github.com/vllm-project/semantic-router/issues/5115) [Bug] Hybrid cost adjustment multiplies the configured weight by itself `bug` `accepted` `in-progress` `wg/mom-routing` 💬2
- [#5113](https://github.com/vllm-project/semantic-router/issues/5113) [Bug] router_signal_ab: one bad row crashes the join, and empty score sets crash the threshold fit `bug` `accepted` `in-progress` `wg/router-models-inference-runtime` 💬2
- [#5112](https://github.com/vllm-project/semantic-router/issues/5112) [Bug] graph_cap_bench crashes with a traceback after loading the model on an empty stream `bug` `accepted` `in-progress` `wg/router-models-inference-runtime` 💬2
- [#5111](https://github.com/vllm-project/semantic-router/issues/5111) [Feature] Website: NPU deployment path and hardware matrix for Ascend `enhancement` `accepted` `in-progress` `wg/router-models-inference-runtime` 💬2
- [#5121](https://github.com/vllm-project/semantic-router/issues/5121) [Bug] Decision 3.0 multi-question requests fail on CUDA images: varlen_attn() got an unexpected keyword argument 'scale' `bug` `needs-acceptance` `wg/router-models-inference-runtime` 💬1
- [#5118](https://github.com/vllm-project/semantic-router/issues/5118) [Bug] Incomplete explicit Set probabilities can produce false routing matches `bug` `needs-acceptance` `wg/router-models-inference-runtime` 💬1
- [#5132](https://github.com/vllm-project/semantic-router/issues/5132) [Bug] Dashboard audit-log write failures are dropped silently `bug` `needs-acceptance` `wg/enterprise-environment` 💬1
- [#5122](https://github.com/vllm-project/semantic-router/issues/5122) [Bug] Decision 3.0: in-window long inputs CUDA-OOM with a 500 instead of a clean rejection `bug` `needs-acceptance` `wg/router-models-inference-runtime` 💬1
- [#5141](https://github.com/vllm-project/semantic-router/issues/5141) [Feature] Add machine-readable Decision 3 quantized-package qualification records `enhancement` `needs-acceptance` `wg/router-models-inference-runtime` 💬1
- [#5130](https://github.com/vllm-project/semantic-router/issues/5130) [Test] Lock NormalizeCandidateScores' boundary behavior `enhancement` `needs-acceptance` `wg/mom-routing` 💬1
- [#5114](https://github.com/vllm-project/semantic-router/issues/5114) [Bug] AutoMix reads model size by substring: 114b matches 14b and 1b/2b/4b/9b all fall back to 7b `bug` `needs-acceptance` `wg/mom-routing` 💬1
- [#5131](https://github.com/vllm-project/semantic-router/issues/5131) [Test] Lock the routing header's Envoy contract `enhancement` `needs-acceptance` `wg/data-plane-networking` 💬1
- [#5145](https://github.com/vllm-project/semantic-router/issues/5145) [Feature] Model runtime: load NVFP4 Decision 3.0 packages `enhancement` `needs-acceptance` `wg/router-models-inference-runtime`
- [#5143](https://github.com/vllm-project/semantic-router/issues/5143) [Research] Qualify official Decision 3 recipes on NVIDIA A100 `needs-acceptance` `research` `wg/router-models-inference-runtime`

#### 🔒 Closed Issues
- [#4968](https://github.com/vllm-project/semantic-router/issues/4968) [Bug] Escape memory IDs in Milvus Router Memory filter expressions
- [#5123](https://github.com/vllm-project/semantic-router/issues/5123) [Bug] Decision 3.0: question over max_position_embeddings answers HTTP 200 with a per-question error (or, unconfigured, silently with input_tokens 0)
- [#5079](https://github.com/vllm-project/semantic-router/issues/5079) [Feature] Model runtime: lanes, packed variable-length forwards, faster images and device-class batch limits for Decision 3.0
- [#4909](https://github.com/vllm-project/semantic-router/issues/4909) [Bug] Stream provider validation rejects whitespace-only matched stop sequences that buffered validation accepts

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*