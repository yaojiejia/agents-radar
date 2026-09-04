# 📡 AI Ecosystem Digest — 2026-09-04

> Generated 2026-09-04 00:49 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 143,956 | 28 | 8 | 1 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 121,263 | 22 | 1 | 44 | 5 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 106,805 | 0 | 0 | 6 | 0 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,137 | 11 | 3 | 0 | 1 |
| [OpenCode](https://github.com/anomalyco/opencode) | 203,570 | 34 | 7 | 14 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 27,627 | 35 | 14 | 3 | 1 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 388,781 | 214 | 143 | 102 | 1 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 240,839 | 27 | 2 | 0 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 90,914 | 38 | 10 | 38 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 34,077 | 19 | 11 | 70 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 126,951 | 22 | 16 | 18 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 180,080 | 12 | 3 | 2 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 57,972 | 25 | 25 | 130 | 1 |
| [Unsloth](https://github.com/unslothai/unsloth) | 75,569 | 5 | 2 | 21 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,055 | 2 | 1 | 4 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 5,530 | 7 | 0 | 5 | 0 |

---

## ✨ Highlights

- **Claude Code** released version [v2.1.260](https://github.com/anthropics/claude-code/releases/tag/v2.1.260).
- **OpenClaw** announced the release of [v2026.9.1](https://github.com/openclaw/openclaw/releases/tag/v2026.9.1).
- **GitHub Copilot CLI** introduced a new issue, [#4713](https://github.com/github/copilot-cli/issues/4713), regarding a non-specified error, which currently has 2 comments.
- **llama.cpp** has a hot issue, [#28290](https://github.com/ggml-org/llama.cpp/issues/28290), reporting an Eval bug that has received 9 comments.
- **vLLM** experienced multiple significant bug reports, including [#55169](https://github.com/vllm-project/vllm/issues/55169) with 4 comments regarding memory profiling errors.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 143,956 · **Open issues:** 14,496 · **Last push:** 1h ago

On September 4, 2026, Claude Code released version 2.1.260, which introduced a diff panel accessible in fullscreen mode to show uncommitted changes during editing, an update to the `/cost` command that specifies likely causes for prompt-cache misses, and the addition of `/reload-plugins` for headless sessions. In terms of merged pull requests, PR #91894 updated the frontend design documentation. A particularly noteworthy new issue reported is #91870, which requests enhancements to function hooks to significantly boost plugin capabilities. Overall, the day was marked by the exciting new features in the release and the focus on improving user experience through both documentation and new capabilities.

#### 🚀 New Releases
- [v2.1.260](https://github.com/anthropics/claude-code/releases/tag/v2.1.260) v2.1.260

#### ✅ Merged PRs
- [#91894](https://github.com/anthropics/claude-code/pull/91894) Update /frontend-design SKILL.md

#### 🐛 New Issues
- [#91870](https://github.com/anthropics/claude-code/issues/91870) Function Hooks - make plugins 10x more powerful `enhancement` `area:hooks` `area:plugins` 💬54
- [#91853](https://github.com/anthropics/claude-code/issues/91853) Read() deny rules force manual approval on unrelated Bash grep commands after cd with relative glob `bug` `platform:macos` `area:permissions` `area:sandbox` 💬3
- [#91930](https://github.com/anthropics/claude-code/issues/91930) [BUG] Tarea incompleta, bloqueos M365/auto-mode confusos y trato despectivo al usuario `bug` `platform:windows` `area:model` `area:mcp` 💬3
- [#91937](https://github.com/anthropics/claude-code/issues/91937) [Bug] Grep commands require manual approval instead of auto-accepting, causing agentic loop failures `bug` `platform:windows` `area:permissions` 💬1
- [#91923](https://github.com/anthropics/claude-code/issues/91923) Fable 5.1 child requests (subagents and forks) silently switch to `claude-opus-4-8` after the first tool result; main session on the same model is unaffected `bug` `has repro` `platform:windows` `area:model` 💬1
- [#91946](https://github.com/anthropics/claude-code/issues/91946) [Bug] Indian postal code 622412 not recognized by weather API integration `bug` `platform:macos` `needs-info`
- [#91945](https://github.com/anthropics/claude-code/issues/91945) Session list: no way to delete/close a session, only "Archive" (X icon removed) `enhancement` `platform:windows` `area:ide` `platform:vscode`
- [#91944](https://github.com/anthropics/claude-code/issues/91944) [Bug] India missing from country list `bug` `platform:macos` `area:auth`
- [#91943](https://github.com/anthropics/claude-code/issues/91943) Dispatch: "Another Claude Code session is already active in this directory" names no session; plus a stale scheduled_tasks.lock whose own PID-reuse guard is never checked `bug` `platform:windows` `area:desktop`
- [#91942](https://github.com/anthropics/claude-code/issues/91942) Ultracode mode was reported ON without the user enabling it; model spawned 160 subagents and exhausted the 5-hour session limit `bug` `platform:linux` `area:cost` `area:core`
- [#91941](https://github.com/anthropics/claude-code/issues/91941) [BUG] Linux Desktop: backend NodeService utility process aborts (SIGABRT) — event-loop stalls compound into whole-app crash-loop `bug` `has repro` `platform:linux` `regression`
- [#91898](https://github.com/anthropics/claude-code/issues/91898) [BUG] Claude Desktop MCP: misleading "server may be unresponsive" 4-minute timeout message, and application logging lost since ~1.34493 `invalid`
- [#91940](https://github.com/anthropics/claude-code/issues/91940) Session executed unverified EDL as fact, causing repeated costly regenerations on a music video task `bug` `area:model` `area:mcp` `model`
- [#91939](https://github.com/anthropics/claude-code/issues/91939) [BUG] Fable 5.1: final answer emitted as a thinking block (not text) before AskUserQuestion, so the user never sees it `bug` `has repro` `platform:windows` `area:tui`
- [#91938](https://github.com/anthropics/claude-code/issues/91938) [BUG] `bug` `platform:macos` `area:desktop`
- [#91936](https://github.com/anthropics/claude-code/issues/91936) [BUG] Mobile: offline local sessions are displayed under Archived, and unarchiving removes them from every filter `bug` `has repro` `platform:ios` `area:ui`
- [#91935](https://github.com/anthropics/claude-code/issues/91935) [BUG] Windows desktop: cowork session paths reach 472 chars (212 over MAX_PATH); 117 files already past the limit. Windows sibling of #80753 `bug` `platform:windows` `area:cowork` `area:desktop`
- [#91934](https://github.com/anthropics/claude-code/issues/91934) Prompt-section cache is keyed by name only, so a subagent on a different model receives the main model's identity and cutoff `bug` `has repro` `platform:linux` `area:core`
- [#91933](https://github.com/anthropics/claude-code/issues/91933) [BUG] Cowork marketplace sync rejects a plugin with `source: "./"` and no plugin.json that the CLI validates and installs fine; Desktop UI hides the real error `bug` `has repro` `platform:macos` `area:cowork`
- [#91932](https://github.com/anthropics/claude-code/issues/91932) After EnterWorktree, the Bash cwd pin does not follow, so bash refuses everywhere the agent is standing; a default-value echo trips the same guard as too complex `bug` `has repro` `area:bash` `area:sandbox`
- [#91931](https://github.com/anthropics/claude-code/issues/91931) [Bug] Safety classifiers triggering on valid input
- [#91929](https://github.com/anthropics/claude-code/issues/91929) [BUG] Image-paste separator space survives Shift+Enter and lands at the start of the next line `bug` `has repro` `area:tui` `platform:wsl`
- [#91911](https://github.com/anthropics/claude-code/issues/91911) [BUG] OAuth login fails with "Invalid OAuth Request — Missing redirect_uri parameter" `bug` `has repro` `platform:macos` `area:auth`
- [#91925](https://github.com/anthropics/claude-code/issues/91925) [BUG] Dispatch: desktop pane renders no messages — sessions-bridge drops every user echo ("empty inboundUserMessages FIFO") `bug` `has repro` `platform:windows` `area:cowork`
- [#91928](https://github.com/anthropics/claude-code/issues/91928) [FEATURE] Alerts for enterprise per-user spend limits in Claude Code CLI `duplicate` `area:cost` `area:cli`
- [#91926](https://github.com/anthropics/claude-code/issues/91926) [BUG] Dispatch shows "desktop appears offline" behind TLS-inspecting AV — sessions-bridge Node transport does not use the system CA store `bug` `has repro` `platform:windows` `area:networking`
- [#91927](https://github.com/anthropics/claude-code/issues/91927) [Bug] Anthropic API Error: Tokens consumed without task completion `bug` `duplicate` `platform:windows` `area:cost`
- [#91924](https://github.com/anthropics/claude-code/issues/91924) [Bug] Excessive token consumption without productive output `bug` `platform:macos` `area:cost` `needs-repro`

#### 🔒 Closed Issues
- [#79074](https://github.com/anthropics/claude-code/issues/79074) [Bug][cyber] Legitimate Android instrumentation framework development blocked mid-implementation (req_011CcqLxbvM6vuCf3nCBxEcm)
- [#79070](https://github.com/anthropics/claude-code/issues/79070) [Bug][cyber] Legitimate Android framework tool development blocked as cybersecurity threat (req_011CcqLRZuggj9hS7Y8ZH5xf)
- [#79065](https://github.com/anthropics/claude-code/issues/79065) [Bug][cyber] False positive on database configuration and WMS profile export work (req_011Cd1aG4WXUFpM45yjQDmV2)
- [#79068](https://github.com/anthropics/claude-code/issues/79068) [Bug][cyber] Safety block wrongly flagged WinRM/NTLM auth debugging on self-managed Windows infrastructure (req_011Cd1NGX8Giaj6mD7tMDAew)
- [#75848](https://github.com/anthropics/claude-code/issues/75848) [Bug][cyber] Legitimate Android app debugging blocked on frustrated exclamation (req_011CcqCPwdQfrLXSxKzzV1Da)
- [#79075](https://github.com/anthropics/claude-code/issues/79075) [Bug][cyber] Build system debugging blocked on frustrated tone mid-legitimate Android development session (req_011CcqM6RzGsKe8BhjpF6d5E)
- [#79069](https://github.com/anthropics/claude-code/issues/79069) [Bug][cyber] Legitimate Windows authentication troubleshooting blocked mid-session (req_011Cd1NLPm886PLRSKQWjFLr)
- [#91636](https://github.com/anthropics/claude-code/issues/91636) [Cowork] Windows host-loop: `mcp__workspace__bash` denied in every session after Desktop 1.44121.1 / CLI 2.1.258

### OpenAI Codex (`openai/codex`)

**Stars:** 121,263 · **Open issues:** 15,113 · **Last push:** <1h ago

On September 4, 2026, OpenAI Codex released rust-v0.153.2, which included a critical bug fix correcting the GPT-6-Astra Fast tier description to state “2x speed, increased usage.” Prior updates in rust-v0.153.1 introduced configuration support for GPT-6-Astra through the API, while rust-v0.153.0 added Vim mode features for undo and redo. Significant merged PRs included enhancements to the TUI, such as restoring inline functionality after full-screen overlays and hardening TUI markup parsing. A noteworthy new issue reported concerns desktop freezes related to unbounded Markdown parsing, highlighting performance challenges in handling large task previews.

#### 🚀 New Releases
- [rust-v0.153.2](https://github.com/openai/codex/releases/tag/rust-v0.153.2) 0.153.2
- [rust-v0.153.1](https://github.com/openai/codex/releases/tag/rust-v0.153.1) 0.153.1
- [rust-v0.153.0](https://github.com/openai/codex/releases/tag/rust-v0.153.0) 0.153.0
- [rust-v0.154.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.154.0-alpha.2) 0.154.0-alpha.2
- [rust-v0.154.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.154.0-alpha.1) 0.154.0-alpha.1

#### ✅ Merged PRs
- [#42641](https://github.com/openai/codex/pull/42641) Restore the inline TUI after full-screen overlays
- [#42640](https://github.com/openai/codex/pull/42640) Harden TUI parsing of assistant markup
- [#42639](https://github.com/openai/codex/pull/42639) Warn when saved model defaults are overridden
- [#42638](https://github.com/openai/codex/pull/42638) Update GPT-6-Astra Fast tier speed description
- [#42634](https://github.com/openai/codex/pull/42634) Add an injectable attachment store to ThreadManager
- [#42632](https://github.com/openai/codex/pull/42632) Fix GPT-6-Astra Fast tier description for 0.153.2
- [#42631](https://github.com/openai/codex/pull/42631) Initialize the packaged GStreamer runtime in the voice host
- [#42624](https://github.com/openai/codex/pull/42624) Centralize prompt image detail modes
- [#42623](https://github.com/openai/codex/pull/42623) Bound Noise handshakes by the exec server initialization timeout
- [#42619](https://github.com/openai/codex/pull/42619) Add GPT-6-Astra to Amazon Bedrock catalogs
- [#42609](https://github.com/openai/codex/pull/42609) Condense TUI startup warnings
- [#42605](https://github.com/openai/codex/pull/42605) Backport GPT-6-Astra model catalog to 0.153
- [#42607](https://github.com/openai/codex/pull/42607) Add GPT-6-Astra to the bundled model catalog
- [#42606](https://github.com/openai/codex/pull/42606) Support trusted headers for remote exec WebSockets
- [#42603](https://github.com/openai/codex/pull/42603) Expose global metrics installation in `codex-otel`
- [#42602](https://github.com/openai/codex/pull/42602) Deprecate detached review delivery
- [#42598](https://github.com/openai/codex/pull/42598) Report MCP tool discovery errors in server status
- [#42596](https://github.com/openai/codex/pull/42596) Record Windows sandbox private desktop usage
- [#42593](https://github.com/openai/codex/pull/42593) Reload user config after local plugin installation
- [#42590](https://github.com/openai/codex/pull/42590) Harden the macOS sandbox against terminal input injection
- [#42588](https://github.com/openai/codex/pull/42588) Require Guardian review for incompatible compaction checkpoints
- [#42584](https://github.com/openai/codex/pull/42584) Recover Vim escape input in legacy terminals
- [#42579](https://github.com/openai/codex/pull/42579) Persist verified user answers in Guardian thread context
- [#42577](https://github.com/openai/codex/pull/42577) Preserve target-native paths in command approvals
- [#42552](https://github.com/openai/codex/pull/42552) Preserve MCP authentication challenges on tool calls
- [#42529](https://github.com/openai/codex/pull/42529) Register the Guardian thread context feature flag
- [#42458](https://github.com/openai/codex/pull/42458) Expose thread originators through the app-server API
- [#42455](https://github.com/openai/codex/pull/42455) Show live task details in the agent command center
- [#42453](https://github.com/openai/codex/pull/42453) Discover permission profiles from the app server
- [#42451](https://github.com/openai/codex/pull/42451) Acknowledge pending TUI steers by submission ID
- [#42445](https://github.com/openai/codex/pull/42445) Include originator in plugin measurement analytics
- [#42432](https://github.com/openai/codex/pull/42432) Box the TUI resume picker future
- [#42428](https://github.com/openai/codex/pull/42428) Use the shared composer in the agent command center
- [#42425](https://github.com/openai/codex/pull/42425) Discover TUI experimental features from the server
- [#42422](https://github.com/openai/codex/pull/42422) Honor model requirements in Guardian computer-use scoring
- [#42419](https://github.com/openai/codex/pull/42419) Add session resume to the agent command center
- [#42417](https://github.com/openai/codex/pull/42417) Expose managed application network requirements
- [#42413](https://github.com/openai/codex/pull/42413) Enable coordinated MCP OAuth refresh
- [#42410](https://github.com/openai/codex/pull/42410) Allow reviewing and continuing misalignment-paused chats
- [#42408](https://github.com/openai/codex/pull/42408) Harden embedded composer input handling
- [#42406](https://github.com/openai/codex/pull/42406) Honor explicit plugin mentions during MCP startup
- [#42405](https://github.com/openai/codex/pull/42405) Support the app-server daemon on Windows
- [#42404](https://github.com/openai/codex/pull/42404) Read voice helper frames independently of pipe chunks
- [#42403](https://github.com/openai/codex/pull/42403) Expose the last accepted environment ready report

#### 🐛 New Issues
- [#42511](https://github.com/openai/codex/issues/42511) Cancelled Code Mode nested tool calls can leave PreToolUse hooks permanently “Running” in TUI `bug` `TUI` `CLI` `tool-calls` 💬4
- [#42516](https://github.com/openai/codex/issues/42516) [Windows] Chat mode missing after update to 26.901.200858; only Work and Codex are available `bug` `windows-os` `app` `session` 💬1
- [#42630](https://github.com/openai/codex/issues/42630) Desktop freezes near 100% CPU: unbounded Markdown parsing of 24.8M-character task previews for sidebar titles `bug` `app` `performance` 💬3
- [#42454](https://github.com/openai/codex/issues/42454) [Codex app] Allow stable cua_repl env overrides instead of replacing generated config on startup `bug` `mcp` `app` `app-server` 💬2
- [#42547](https://github.com/openai/codex/issues/42547) [Windows] Blank client area on 26.831 / 26.901 (Chromium 152): renderer paints but window never shows it; --disable-features=CalculateNativeWinOcclusion avoids it, Page.reload restores it `bug` `windows-os` `app` 💬2
- [#42612](https://github.com/openai/codex/issues/42612) [CLI] Custom agent service_tier = "fast" is ignored when the parent runs Standard `bug` `CLI` `subagent` `config` 💬1
- [#42635](https://github.com/openai/codex/issues/42635) Codex claimed an invalid and incomplete patch was a complete implementation before requesting approval `bug` `model-behavior` `windows-os` `TUI` 💬1
- [#42633](https://github.com/openai/codex/issues/42633) cursor window disappears after first input in chat/work `bug` `app` 💬1
- [#42629](https://github.com/openai/codex/issues/42629) Native Windows app-server daemon/service to enable CLI “proxy” terminal attachment (no WSL) `enhancement` `windows-os` `CLI` `app-server` 💬1
- [#42628](https://github.com/openai/codex/issues/42628) [macOS Desktop] Unified thread catalog retains deleted cloud chats and missing local rollouts `bug` `app` `session` 💬1
- [#42621](https://github.com/openai/codex/issues/42621) Windows] Elevated sandbox has no profile-backed credential context, causing SEC_E_NO_CREDENTIALS for private Git `bug` `windows-os` `auth` `sandbox` 💬1
- [#42627](https://github.com/openai/codex/issues/42627) "Cybersecurity" warnings for my C/FORTH MUD work `bug` `CLI` `safety-check` 💬1
- [#42611](https://github.com/openai/codex/issues/42611) [CLI] Auto-compaction replays an already-answered user message as a new turn `bug` `CLI` `context` `session` 💬1
- [#42617](https://github.com/openai/codex/issues/42617) [macOS] Archived cloud chats have no permanent delete action in ChatGPT/Codex desktop app `enhancement` `app` `session` 💬1
- [#42637](https://github.com/openai/codex/issues/42637) Codex Desktop developer instruction can override repository orchestration and block explicit visible-task workflows
- [#42636](https://github.com/openai/codex/issues/42636) Paired iPhone Remote: optionally follow the active desktop Codex task for Voice `enhancement` `iOS` `session` `remote`
- [#42528](https://github.com/openai/codex/issues/42528) [WSL2][Auth] Device-code final token exchange queries 127.0.0.1:53 instead of configured DNS resolver `bug` `windows-os` `auth` `CLI`
- [#42626](https://github.com/openai/codex/issues/42626) iOS remote: expose host/project named permission profiles in the permissions picker `enhancement` `sandbox` `iOS` `config`
- [#42625](https://github.com/openai/codex/issues/42625) [macOS][Desktop 26.901.20858] Renderer freezes at 100% CPU restoring a Go file editor tab: catastrophic backtracking in bundled shiki Go grammar (fixed in @shikijs/langs 4.0.2) `bug` `app` `performance`
- [#42622](https://github.com/openai/codex/issues/42622) [Codex App Server] Support durable input requests across restarts `enhancement` `CLI` `app-server`
- [#42620](https://github.com/openai/codex/issues/42620) Cannot activate grant `bug`
- [#42618](https://github.com/openai/codex/issues/42618) macOS 26.6.2: Chrome native host fails with `Operation not permitted (os error 1)` despite valid signature

#### 🔒 Closed Issues
- [#42617](https://github.com/openai/codex/issues/42617) [macOS] Archived cloud chats have no permanent delete action in ChatGPT/Codex desktop app

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 106,805 · **Open issues:** 854 · **Last push:** 2h ago

On September 4, 2026, Gemini CLI saw its version updated to 0.60.0-nightly.20260901.g0bd1d4397, while the changelog for version v0.58.0 was also finalized. Significant merged pull requests included a fix to sanitize the hardcoded Google CrUX API key in the chrome-devtools-mcp and an enhancement in the extension loader that improves path resolution and boundary validation. Additionally, there was a crucial fix isolating the temporary directory for the macOS Seatbelt sandbox. No new issues were reported, indicating a day of routine maintenance with a focus on enhancing security and stability.

#### ✅ Merged PRs
- [#29158](https://github.com/google-gemini/gemini-cli/pull/29158) fix(core): sanitize and remove hardcoded Google CrUX API key in chrome-devtools-mcp
- [#29159](https://github.com/google-gemini/gemini-cli/pull/29159) Changelog for v0.59.0-preview.0
- [#29169](https://github.com/google-gemini/gemini-cli/pull/29169) feat(extensions): harden path resolution and boundary validation in extension loader
- [#29171](https://github.com/google-gemini/gemini-cli/pull/29171) fix(cli): isolate temporary directory for macOS Seatbelt sandbox
- [#29161](https://github.com/google-gemini/gemini-cli/pull/29161) Changelog for v0.58.0
- [#29162](https://github.com/google-gemini/gemini-cli/pull/29162) chore(release): bump version to 0.60.0-nightly.20260901.g0bd1d4397

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,137 · **Open issues:** 2,280 · **Last push:** 7h ago

On September 4, 2026, GitHub Copilot CLI released version 1.0.83-4, introducing support for Client ID Metadata Document (CIMD) in MCP OAuth sign-ins and improving the CLI's responsiveness by eliminating the interrupted-session restore prompt by default. The update also addressed usability by ensuring sandboxed file tools read developer-tool paths uniformly. New issues surfaced, among which issue #4714, highlighting the sluggish performance of session resuming without UI feedback, garnered attention. Additional concerns included potential CPU overload from runaway threads and problems with multi-repo collection workspaces. Overall, while the day featured significant improvements in performance and usability, it also revealed several user-reported challenges to be addressed in future updates.

#### 🚀 New Releases
- [v1.0.83-4](https://github.com/github/copilot-cli/releases/tag/v1.0.83-4) 1.0.83-4

#### 🐛 New Issues
- [#4713](https://github.com/github/copilot-cli/issues/4713) فقغفقغ `triage` `invalid` 💬2
- [#4707](https://github.com/github/copilot-cli/issues/4707) Add setting option to disable the scrollbar `triage` 💬1
- [#4704](https://github.com/github/copilot-cli/issues/4704) Feature request: /resume and /session should support filtering by current working directory `area:sessions`
- [#4715](https://github.com/github/copilot-cli/issues/4715) Allow built-in Agent Plugin Marketplaces to be blocked `triage`
- [#4714](https://github.com/github/copilot-cli/issues/4714) Resuming a session is extremely slow, does not display UI that would indicate loading `triage`
- [#4712](https://github.com/github/copilot-cli/issues/4712) /usage help text does not explain mixed metric scopes `triage`
- [#4710](https://github.com/github/copilot-cli/issues/4710) Runaway copilot-file-search thread consumes CPU and unbounded disk while session is idle `triage`
- [#4709](https://github.com/github/copilot-cli/issues/4709) Multi-repo collection workspace never associates a worktree when member repos have different default branches (main vs master) `triage`
- [#4708](https://github.com/github/copilot-cli/issues/4708) Subagents cannot access installed skills that are available to the main agent `triage`
- [#4706](https://github.com/github/copilot-cli/issues/4706) Tool/function calls intermittently emit malformed invocation markup (court / <invoke>) and silently no-op `triage`
- [#4705](https://github.com/github/copilot-cli/issues/4705) Queued prompts occasionally remain stuck after the session becomes idle `area:sessions` `area:input-keyboard`

#### 🔒 Closed Issues
- [#4713](https://github.com/github/copilot-cli/issues/4713) فقغفقغ
- [#4669](https://github.com/github/copilot-cli/issues/4669) Managed telemetry.headers prevents OpenTelemetry (OTEL) export
- [#4283](https://github.com/github/copilot-cli/issues/4283) Server-managed enabledPlugins does not persist auto-installed plugin enablement

### OpenCode (`anomalyco/opencode`)

**Stars:** 203,570 · **Open issues:** 5,654 · **Last push:** <1h ago

There were no new releases for OpenCode in the last 24 hours, but several important features and fixes were merged, including the addition of a settings page for vertical tabs (#47119) and enhancements to session tab label stability during creation (#47099). Other notable updates include a refined build indicator in tab navigation (#47112) and improved command palette responsiveness in desktop environments (#47164). Users have reported a critical issue (#47047) regarding an SSE error related to a previous merge, highlighting ongoing stability concerns. Overall, today reflects routine maintenance while addressing key user experience enhancements and stability fixes.

#### ✅ Merged PRs
- [#47134](https://github.com/anomalyco/opencode/pull/47134) feat(tui): inspect live shell output
- [#47119](https://github.com/anomalyco/opencode/pull/47119) feat(app): add settings to vertical tabs
- [#47099](https://github.com/anomalyco/opencode/pull/47099) fix(app): keep session tab labels stable during creation
- [#47169](https://github.com/anomalyco/opencode/pull/47169) test(core): align Code Mode catalog scope assertions
- [#47112](https://github.com/anomalyco/opencode/pull/47112) fix(app): refine build indicators in tab navigation
- [#47122](https://github.com/anomalyco/opencode/pull/47122) feat(app): show vertical sidebar shortcut hints
- [#47123](https://github.com/anomalyco/opencode/pull/47123) fix(app): allow new session shortcut from settings
- [#47164](https://github.com/anomalyco/opencode/pull/47164) fix(desktop): keep command palette responsive and scoped
- [#46977](https://github.com/anomalyco/opencode/pull/46977) feat(app): add session project menu and polish header
- [#47163](https://github.com/anomalyco/opencode/pull/47163) fix(core): restore Ctrl+C in Windows terminals
- [#45782](https://github.com/anomalyco/opencode/pull/45782) feat(app): add about settings page
- [#46973](https://github.com/anomalyco/opencode/pull/46973) feat(app): give experimental settings a dedicated page
- [#47155](https://github.com/anomalyco/opencode/pull/47155) fix(app): preserve slash commands when creating worktrees
- [#47102](https://github.com/anomalyco/opencode/pull/47102) fix(desktop): render before telemetry

#### 🐛 New Issues
- [#47047](https://github.com/anomalyco/opencode/issues/47047) SSE error with #44944 — broken 💬9
- [#47167](https://github.com/anomalyco/opencode/issues/47167) archived my project by accident `needs:compliance` 💬3
- [#47127](https://github.com/anomalyco/opencode/issues/47127) TUI: add non-interrupting cancel/edit for queued message 💬3
- [#47120](https://github.com/anomalyco/opencode/issues/47120) Zen lists muse-spark-1.3-contributor-free, but OpenCode 1.18.27 omits it and invocation returns UnknownError 💬3
- [#47034](https://github.com/anomalyco/opencode/issues/47034) gemini-3.8-flash: 400 'Requests ending with a model turn are not supported' after a model turn 💬3
- [#47174](https://github.com/anomalyco/opencode/issues/47174) `lsp` tool returns empty results for TypeScript files in nested sub-projects (multiple tsconfig roots) under the working directory 💬2
- [#47020](https://github.com/anomalyco/opencode/issues/47020) [FEATURE]: Add Gemini sign-in instead of requiring an API key 💬1
- [#47157](https://github.com/anomalyco/opencode/issues/47157) Synara + Muse Spark 1.3 Contributor (Console Go) fails with Recursive JSON schemas are not currently supported 💬2
- [#47153](https://github.com/anomalyco/opencode/issues/47153) unhandled retryable case 💬2
- [#47129](https://github.com/anomalyco/opencode/issues/47129) Error from provider (Console): Rate limit exceeded. Please try again later. 💬2
- [#47116](https://github.com/anomalyco/opencode/issues/47116) bug no openCode 💬2
- [#47097](https://github.com/anomalyco/opencode/issues/47097) Local opencode serve can ship a hosted web UI that does not match the local backend 💬2
- [#47096](https://github.com/anomalyco/opencode/issues/47096) Desktop Auto-accept permissions toggle does not stop permission prompts 💬2
- [#47041](https://github.com/anomalyco/opencode/issues/47041) Compiled binary ignores NODE_OPTIONS dns-result-order and often NO_PROXY 💬2
- [#47039](https://github.com/anomalyco/opencode/issues/47039) Preserve HTTP status on UnknownError so plugins can fallback 💬2
- [#47094](https://github.com/anomalyco/opencode/issues/47094) [Bug] Desktop App Session Re-registration Storm leading to Connection Drops (Silent Failures) 💬2
- [#47165](https://github.com/anomalyco/opencode/issues/47165) TUI copy should preserve logical text instead of rendered layout 💬1
- [#47162](https://github.com/anomalyco/opencode/issues/47162) [bug] opencode run: unknown model returns a generic 500 UnknownError instead of a 404 with the "did you mean" message 💬1
- [#47080](https://github.com/anomalyco/opencode/issues/47080) opencode run resolves session directory from $PWD instead of process cwd (breaks headless spawn) 💬1
- [#47158](https://github.com/anomalyco/opencode/issues/47158) New session first prompt crashes with UnknownError (createUserMessage) when using a plugin-defined agent; built-in agents and resumed sessions work 💬1
- [#47143](https://github.com/anomalyco/opencode/issues/47143) Zen free tier: chat/completions 500s muse-spark-{1.2,1.3}-contributor-free while /responses serves them 💬1
- [#47146](https://github.com/anomalyco/opencode/issues/47146) Plan mode went into a destructive rampage 💬1
- [#47142](https://github.com/anomalyco/opencode/issues/47142) Issue with Overall Usage Percentage Calculation on Dashboard 💬1
- [#47140](https://github.com/anomalyco/opencode/issues/47140) Invalid 💬1
- [#47128](https://github.com/anomalyco/opencode/issues/47128) GLM 5.3 Flash terminated 💬1
- [#47172](https://github.com/anomalyco/opencode/issues/47172) [bug] `--model` is silently ignored on the default (TUI) entry path: an unresolvable id runs the configured default model with no warning
- [#47168](https://github.com/anomalyco/opencode/issues/47168) Unimplemented `commentary` channel in gpt.txt: progress updates end the turn on chat-completions models
- [#47133](https://github.com/anomalyco/opencode/issues/47133) [Bug] Log rotation stops working on Windows; opencode.log grows indefinitely
- [#47131](https://github.com/anomalyco/opencode/issues/47131) Npm.install reify drops user dependencies from .opencode/package.json on Desktop start
- [#47126](https://github.com/anomalyco/opencode/issues/47126) FFF panics when searching for files
- [#47111](https://github.com/anomalyco/opencode/issues/47111) [FEATURE]: Proposal: explore interoperability conventions for AI coding
- [#47114](https://github.com/anomalyco/opencode/issues/47114) providers: request falls back to api.anthropic.com (401 invalid x-api-key) after plugin hot-reload `2.0`
- [#47113](https://github.com/anomalyco/opencode/issues/47113) Worker's uncaughtException and unhandledRejection handlers are empty, so worker crashes leave no trace
- [#47105](https://github.com/anomalyco/opencode/issues/47105) [FEATURE]: add task-parallel tool to fan out independent subtasks concurrently

#### 🔒 Closed Issues
- [#47127](https://github.com/anomalyco/opencode/issues/47127) TUI: add non-interrupting cancel/edit for queued message
- [#47157](https://github.com/anomalyco/opencode/issues/47157) Synara + Muse Spark 1.3 Contributor (Console Go) fails with Recursive JSON schemas are not currently supported
- [#47129](https://github.com/anomalyco/opencode/issues/47129) Error from provider (Console): Rate limit exceeded. Please try again later.
- [#47116](https://github.com/anomalyco/opencode/issues/47116) bug no openCode
- [#47094](https://github.com/anomalyco/opencode/issues/47094) [Bug] Desktop App Session Re-registration Storm leading to Connection Drops (Silent Failures)
- [#47143](https://github.com/anomalyco/opencode/issues/47143) Zen free tier: chat/completions 500s muse-spark-{1.2,1.3}-contributor-free while /responses serves them
- [#47140](https://github.com/anomalyco/opencode/issues/47140) Invalid

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 27,627 · **Open issues:** 1,285 · **Last push:** <1h ago

On September 4, 2026, Qwen Code released version v0.23.0, introducing a branch picker feature that displays git state hints to assist users in assessing project status before committing changes. Among the notable merged pull requests, fixes were made to ensure timely closure of interactive PTY sessions and maintenance of regex guards on redaction tests, enhancing overall system reliability. Additionally, significant concerns were raised in newly opened issues, particularly regarding the ECS runner fleet being stale after a failed update, and persistent CI test failures due to module import costs, highlighting areas for urgent attention in the development pipeline.

#### 🚀 New Releases
- [v0.23.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.0) Release v0.23.0

#### ✅ Merged PRs
- [#10971](https://github.com/QwenLM/qwen-code/pull/10971) fix(test): end interactive PTY sessions a test never closed
- [#10912](https://github.com/QwenLM/qwen-code/pull/10912) test(cli): keep the redaction ReDoS guard asserting on the shared pool
- [#10961](https://github.com/QwenLM/qwen-code/pull/10961) fix(cli): complete the live slash-submit deps and fixture (#10944)

#### 🐛 New Issues
- [#10911](https://github.com/QwenLM/qwen-code/issues/10911) ECS runner fleet is stale: the qwen update failed `type/bug` `scope/ci-cd` 💬6
- [#10908](https://github.com/QwenLM/qwen-code/issues/10908) CI test time is bound by module import cost, not scheduling `priority/P2` `category/performance` `scope/testing` `scope/ci-cd` 💬5
- [#10953](https://github.com/QwenLM/qwen-code/issues/10953) Todo plan state goes stale while work is delegated to subagents (the active-todo reminder never fires) `priority/P2` `type/bug` `category/core` `scope/session-management` 💬3
- [#10903](https://github.com/QwenLM/qwen-code/issues/10903) E2E: web-shell Browser Regression is red in every run that executes it — the 30 s overview-tick case has never passed `priority/P1` `type/bug` `category/development` `scope/testing` 💬3
- [#10932](https://github.com/QwenLM/qwen-code/issues/10932) Voice dictation cannot use Token Plan ASR: resolveVoiceTransport rejects qwen-audio-3.0-asr-flash as unsupported `priority/P2` `type/bug` `category/cli` `scope/interactive` 💬3
- [#10888](https://github.com/QwenLM/qwen-code/issues/10888) [core] Agent violates skill hard constraints: fabricates fallback values instead of stopping when required input is missing `priority/P2` `type/bug` `category/core` `scope/extensions` 💬3
- [#10887](https://github.com/QwenLM/qwen-code/issues/10887) [core] No early termination on repeated tool errors: sessions burn 5-14M tokens in dead-end loops `priority/P1` `type/bug` `category/core` `scope/token-management` 💬3
- [#10974](https://github.com/QwenLM/qwen-code/issues/10974) review: follow-ups deferred from #9661 — .qwen/tmp sibling writers, cache read side, realpath case compare, empty identity `priority/P2` `status/blocked` `category/security` `scope/commands` 💬2
- [#10922](https://github.com/QwenLM/qwen-code/issues/10922) Deferred review findings from PR #10858 💬2
- [#10950](https://github.com/QwenLM/qwen-code/issues/10950) DWS IM streams should not block unrelated conversations `priority/P2` `type/bug` `category/integration` `daemon` 💬2
- [#10937](https://github.com/QwenLM/qwen-code/issues/10937) Main CI failed: E2E Tests on 0d69691f2c29 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#10935](https://github.com/QwenLM/qwen-code/issues/10935) Main CI failed: E2E Tests on b4e9e40bb476 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#10936](https://github.com/QwenLM/qwen-code/issues/10936) DingTalk channel prints clientSecret and stream ticket to stdout on every connect `priority/P1` `status/needs-triage` `type/bug` `category/integration` 💬2
- [#10925](https://github.com/QwenLM/qwen-code/issues/10925) Cross-session messaging: symmetric class parity, tighten-only repository settings, and a trusted-controller layer `status/in-progress` `type/feature-request` `category/security` `scope/settings` 💬2
- [#10918](https://github.com/QwenLM/qwen-code/issues/10918) fix(daemon): supported-commands can stay stale after Skill metadata changes `priority/P3` `type/bug` `category/cli` `scope/commands` 💬2
- [#10904](https://github.com/QwenLM/qwen-code/issues/10904) E2E: cron-interactive nightly flakes on 30 s cron-fire timeouts, and continue-on-error swallows the red `priority/P2` `type/bug` `scope/testing` `scope/ci-cd` 💬2
- [#10900](https://github.com/QwenLM/qwen-code/issues/10900) Release Failed for v0.23.0 on 2026-09-03 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#10969](https://github.com/QwenLM/qwen-code/issues/10969) Main CI failed: E2E Tests on f6a7eee341b0 `type/bug` `status/ready-for-agent` `autofix/in-progress` `autofix/approved` 💬1
- [#10972](https://github.com/QwenLM/qwen-code/issues/10972) Main CI failed: Qwen Code CI on b5595257c04d `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#10973](https://github.com/QwenLM/qwen-code/issues/10973) Main CI failed: E2E Tests on 69c4f1e4bb4f `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#10944](https://github.com/QwenLM/qwen-code/issues/10944) Main CI failed: Qwen Code CI on 678ac2e1ec2d `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#10970](https://github.com/QwenLM/qwen-code/issues/10970) Release Failed for v0.23.0-nightly.20260903.f6a7eee341 on 2026-09-03 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#10965](https://github.com/QwenLM/qwen-code/issues/10965) Main CI failed: Qwen Code CI on 81de29d36ec6 `type/bug` `status/ready-for-agent` `autofix/skip` `autofix/approved` 💬1
- [#10967](https://github.com/QwenLM/qwen-code/issues/10967) Main CI failed: Qwen Code CI on cca376f6aa4b `type/bug` `status/ready-for-agent` `autofix/in-progress` `autofix/approved` 💬1
- [#10955](https://github.com/QwenLM/qwen-code/issues/10955) Main CI failed: E2E Tests on 661f41eef060 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#10948](https://github.com/QwenLM/qwen-code/issues/10948) Main CI failed: E2E Tests on b28f7a884a7f `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#10933](https://github.com/QwenLM/qwen-code/issues/10933) Main CI failed: E2E Tests on 9ffada4eac01 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#10928](https://github.com/QwenLM/qwen-code/issues/10928) Main CI failed: E2E Tests on ce634b8905f4 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#10923](https://github.com/QwenLM/qwen-code/issues/10923) Main CI failed: E2E Tests on 80b5dab3e065 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#10907](https://github.com/QwenLM/qwen-code/issues/10907) Main CI failed: E2E Tests on 93e1597b7e91 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#10880](https://github.com/QwenLM/qwen-code/issues/10880) Deferred review findings from PR #10855 💬1
- [#10976](https://github.com/QwenLM/qwen-code/issues/10976) Main CI failed: E2E Tests on 60161cb64a2b `type/bug` `status/ready-for-agent` `autofix/approved`
- [#10964](https://github.com/QwenLM/qwen-code/issues/10964) Deferred review findings from PR #10754
- [#10960](https://github.com/QwenLM/qwen-code/issues/10960) Deferred review findings from PR #10458
- [#10927](https://github.com/QwenLM/qwen-code/issues/10927) DWS group mentions do not enter the /btw side-question path

#### 🔒 Closed Issues
- [#10911](https://github.com/QwenLM/qwen-code/issues/10911) ECS runner fleet is stale: the qwen update failed
- [#10903](https://github.com/QwenLM/qwen-code/issues/10903) E2E: web-shell Browser Regression is red in every run that executes it — the 30 s overview-tick case has never passed
- [#10094](https://github.com/QwenLM/qwen-code/issues/10094) ACP session-management handlers resolve the runtime output dir from stale this.settings, misrouting list/delete/rename across workspaces
- [#10937](https://github.com/QwenLM/qwen-code/issues/10937) Main CI failed: E2E Tests on 0d69691f2c29
- [#10935](https://github.com/QwenLM/qwen-code/issues/10935) Main CI failed: E2E Tests on b4e9e40bb476
- [#8941](https://github.com/QwenLM/qwen-code/issues/8941) feat(web-shell): visualize and manage dynamic workflow runs
- [#10900](https://github.com/QwenLM/qwen-code/issues/10900) Release Failed for v0.23.0 on 2026-09-03
- [#10668](https://github.com/QwenLM/qwen-code/issues/10668) Release Failed for v0.22.3-nightly.20260901.a8e0d293fb on 2026-09-01
- [#10726](https://github.com/QwenLM/qwen-code/issues/10726) Release Failed for v0.22.3-nightly.20260901.b27deb634d on 2026-09-01
- [#10775](https://github.com/QwenLM/qwen-code/issues/10775) Release Failed for v0.22.3-nightly.20260902.7df5ac6898 on 2026-09-02
- [#10856](https://github.com/QwenLM/qwen-code/issues/10856) Release Failed for v0.22.3-nightly.20260902.8fde141a24 on 2026-09-02
- [#10969](https://github.com/QwenLM/qwen-code/issues/10969) Main CI failed: E2E Tests on f6a7eee341b0
- [#10944](https://github.com/QwenLM/qwen-code/issues/10944) Main CI failed: Qwen Code CI on 678ac2e1ec2d
- [#10907](https://github.com/QwenLM/qwen-code/issues/10907) Main CI failed: E2E Tests on 93e1597b7e91

### Claude Code Skills (`anthropics/skills`)

Top open skill PRs by community engagement:
- [#1298](https://github.com/anthropics/skills/pull/1298) fix(skill-creator): run_eval.py always reports 0% recall — install the eval artifact as a real skill; fix Windows stream reading, trigger detection, and parallel workers
- [#514](https://github.com/anthropics/skills/pull/514) Add document-typography skill: typographic quality control for generated documents
- [#1615](https://github.com/anthropics/skills/pull/1615) Add scnet-hpc skill
- [#538](https://github.com/anthropics/skills/pull/538) fix(pdf): correct case-sensitive file references in SKILL.md
- [#486](https://github.com/anthropics/skills/pull/486) Add ODT skill — OpenDocument text creation and template filling and parse ODT to HTML

---

## 🦞 OpenClaw Ecosystem

### OpenClaw (`openclaw/openclaw`)

**Stars:** 388,781 · **Open issues:** 6,252 · **Last push:** <1h ago

The OpenClaw team released version 2026.9.1, which introduces the exciting feature of rendering Mermaid diagrams directly within the Control UI and across iOS, macOS, and Android apps, along with a quick-start lane for fresh installs that streamlines the process from installation to chat. Noteworthy merged pull requests include fixes for various UI issues, such as ensuring that task progress expands correctly upon completion and maintaining usage totals within session scopes. Additionally, a new feature was added to align progress card interactions with user feedback and transition controls. Among the new issues, a significant concern was raised regarding the `openclaw.inbound_meta.v2` detection, which triggers a 400 error related to "out of extra usage," echoing a previous issue.

#### 🚀 New Releases
- [v2026.9.1](https://github.com/openclaw/openclaw/releases/tag/v2026.9.1) openclaw 2026.9.1

#### ✅ Merged PRs
- [#137396](https://github.com/openclaw/openclaw/pull/137396) fix: keep Usage day totals within the selected session scope
- [#137655](https://github.com/openclaw/openclaw/pull/137655) refactor: reduce live digest scheduling allocations
- [#137571](https://github.com/openclaw/openclaw/pull/137571) fix(ui): submit selected slash arguments in new sessions
- [#137569](https://github.com/openclaw/openclaw/pull/137569) fix(ui): expand collapsed task progress on final
- [#137639](https://github.com/openclaw/openclaw/pull/137639) fix(ci): MCP replacement proof stalls during provider discovery
- [#137640](https://github.com/openclaw/openclaw/pull/137640) test(cli): reuse canonical directory mock call helper
- [#137597](https://github.com/openclaw/openclaw/pull/137597) fix(ci): stop plugin security scanners when cancelled
- [#137568](https://github.com/openclaw/openclaw/pull/137568) fix(android): match task progress docking to Control UI
- [#137633](https://github.com/openclaw/openclaw/pull/137633) fix(ui): persist utility defaults without a primary model
- [#137463](https://github.com/openclaw/openclaw/pull/137463) fix(watch): preserve companion messages and replies across app restarts
- [#137608](https://github.com/openclaw/openclaw/pull/137608) Fix the release test fixtures after the Codex upgrade
- [#137004](https://github.com/openclaw/openclaw/pull/137004) chore(deps): update cooled Oxfmt and harden declaration fixtures
- [#136297](https://github.com/openclaw/openclaw/pull/136297) fix(gateway): preserve desktop readiness and worker outcomes
- [#137590](https://github.com/openclaw/openclaw/pull/137590) test(doctor): inline workspace note call reads
- [#137578](https://github.com/openclaw/openclaw/pull/137578) fix(plugins): report newer releases behind official version pins
- [#137595](https://github.com/openclaw/openclaw/pull/137595) fix: align model discovery with Codex 0.153.1
- [#137559](https://github.com/openclaw/openclaw/pull/137559) refactor(openai): simplify TTS fetch fixtures
- [#137556](https://github.com/openclaw/openclaw/pull/137556) refactor(cron): reuse the shared call guard in list tests
- [#137582](https://github.com/openclaw/openclaw/pull/137582) improve: avoid browser discovery in agent fixtures
- [#137581](https://github.com/openclaw/openclaw/pull/137581) fix: update Codex for current model support
- [#137558](https://github.com/openclaw/openclaw/pull/137558) test(ui): reuse canonical plugin-page deferred fixtures
- [#137071](https://github.com/openclaw/openclaw/pull/137071) fix(gateway): own cloud startup and teardown resources
- [#136553](https://github.com/openclaw/openclaw/pull/136553) feat(meta): add Muse Spark 1.3 models
- [#137575](https://github.com/openclaw/openclaw/pull/137575) fix(release): resolve first frozen baseline
- [#133650](https://github.com/openclaw/openclaw/pull/133650) improve(ui): align picker interaction feedback
- [#131921](https://github.com/openclaw/openclaw/pull/131921) fix(media): stop losing generated artifacts when the final delivery handoff fails
- [#137564](https://github.com/openclaw/openclaw/pull/137564) improve: avoid redundant Gateway test work
- [#137267](https://github.com/openclaw/openclaw/pull/137267) fix: keep accepted chat messages queued through retryable failures
- [#137561](https://github.com/openclaw/openclaw/pull/137561) fix(openai): require discovery before offering Astra for OAuth
- [#137537](https://github.com/openclaw/openclaw/pull/137537) fix(deps): clear 7.33 fast-uri advisories
- [#137546](https://github.com/openclaw/openclaw/pull/137546) test(logging): reuse mock call presence guard
- [#131948](https://github.com/openclaw/openclaw/pull/131948) fix(ui): release queued sends from recorded idle state
- [#136535](https://github.com/openclaw/openclaw/pull/136535) fix(update): prevent stale config chunk failure after source rebuild
- [#137538](https://github.com/openclaw/openclaw/pull/137538) test(voice-call): reuse canonical Twilio call guards
- [#136690](https://github.com/openclaw/openclaw/pull/136690) refactor(channels): restore plugin types at registry
- [#131929](https://github.com/openclaw/openclaw/pull/131929) fix(agent): stop aborting healthy model responses as idle timeouts while the provider stream is still active
- [#137554](https://github.com/openclaw/openclaw/pull/137554) chore(android): forward-port the shipped 2026.8.2 pin to main
- [#136872](https://github.com/openclaw/openclaw/pull/136872) test(xai): consolidate private helper coverage
- [#136871](https://github.com/openclaw/openclaw/pull/136871) test(moonshot): consolidate private helper coverage
- [#136873](https://github.com/openclaw/openclaw/pull/136873) test(minimax): consolidate private helper coverage
- [#136874](https://github.com/openclaw/openclaw/pull/136874) test(exa): consolidate private helper coverage
- [#137550](https://github.com/openclaw/openclaw/pull/137550) feat(openai): support GPT-6 Astra
- [#137548](https://github.com/openclaw/openclaw/pull/137548) fix: avoid service install advice when installation is blocked
- [#137482](https://github.com/openclaw/openclaw/pull/137482) test(plugins): reuse the shared cleanup timer call guard
- [#137545](https://github.com/openclaw/openclaw/pull/137545) fix(sessions): cleanup fails on large archive backlogs
- [#137522](https://github.com/openclaw/openclaw/pull/137522) test(doctor): reuse canonical Claude note call guard
- [#137529](https://github.com/openclaw/openclaw/pull/137529) improve: avoid unused migration runtime startup
- [#137519](https://github.com/openclaw/openclaw/pull/137519) fix(android): preserve operator connection during gateway focus
- [#137465](https://github.com/openclaw/openclaw/pull/137465) fix: keep remote Doctor failures out of local recovery
- [#137389](https://github.com/openclaw/openclaw/pull/137389) fix(android): order gateway shutdown and credential reuse
- [#132240](https://github.com/openclaw/openclaw/pull/132240) build: consume platform-specific fs-safe packages
- [#137526](https://github.com/openclaw/openclaw/pull/137526) fix(slack): progress text shows literal backslashes around inline code and emphasis
- [#136697](https://github.com/openclaw/openclaw/pull/136697) refactor(protocol): canonicalize node presence reasons
- [#136691](https://github.com/openclaw/openclaw/pull/136691) refactor(whatsapp): preserve typed socket events
- [#136692](https://github.com/openclaw/openclaw/pull/136692) refactor(config): derive schema response wire types
- [#136693](https://github.com/openclaw/openclaw/pull/136693) refactor(browser): centralize raw CDP sender
- [#137518](https://github.com/openclaw/openclaw/pull/137518) fix(ci): tolerate delayed release child titles
- [#137475](https://github.com/openclaw/openclaw/pull/137475) fix: exec host picker inserts canonical syntax
- [#137515](https://github.com/openclaw/openclaw/pull/137515) refactor(elevenlabs): simplify fetch test fixtures
- [#137523](https://github.com/openclaw/openclaw/pull/137523) fix(slack): progress card keeps a recovered tool failure red after the turn succeeds
- [#137521](https://github.com/openclaw/openclaw/pull/137521) fix(plugin-sdk): preserve legacy retry inputs
- [#137511](https://github.com/openclaw/openclaw/pull/137511) refactor(ui): reuse canonical session test fixtures
- [#137498](https://github.com/openclaw/openclaw/pull/137498) refactor(cron): reuse shared mock-call assertions
- [#137512](https://github.com/openclaw/openclaw/pull/137512) improve: reduce command construction test startup
- [#137510](https://github.com/openclaw/openclaw/pull/137510) fix(plugin-sdk): accept positional code ranges
- [#137505](https://github.com/openclaw/openclaw/pull/137505) fix: point Doctor service recovery to the right commands
- [#137420](https://github.com/openclaw/openclaw/pull/137420) chore(ui): refresh control ui locales
- [#137212](https://github.com/openclaw/openclaw/pull/137212) fix: preserve native Codex reasoning capabilities on the release branch
- [#137500](https://github.com/openclaw/openclaw/pull/137500) fix(webchat): avoid duplicate captions when finalizing media replies
- [#137501](https://github.com/openclaw/openclaw/pull/137501) improve: reuse CI planner test setup
- [#137481](https://github.com/openclaw/openclaw/pull/137481) test: consolidate logging mock-call guards
- [#137480](https://github.com/openclaw/openclaw/pull/137480) chore(i18n): refresh native locales
- [#137487](https://github.com/openclaw/openclaw/pull/137487) fix(ci): preserve package provenance in candidates
- [#137321](https://github.com/openclaw/openclaw/pull/137321) improve(e2e): cover mobile pairing gateway upgrades
- [#137449](https://github.com/openclaw/openclaw/pull/137449) fix(qa): keep candidate plugin loading within the candidate checkout
- [#137384](https://github.com/openclaw/openclaw/pull/137384) test(voice-call): share response cancellation fixtures
- [#137468](https://github.com/openclaw/openclaw/pull/137468) improve: remove repeated SDK registration test setup
- [#137455](https://github.com/openclaw/openclaw/pull/137455) fix(ci): enforce generated preflight checks
- [#122300](https://github.com/openclaw/openclaw/pull/122300) fix(control-ui): keep usable multi-profile providers ready
- [#137392](https://github.com/openclaw/openclaw/pull/137392) feat(worker): fast-forward a cloud worker checkout to the pushed session branch
- [#137460](https://github.com/openclaw/openclaw/pull/137460) improve: reduce CLI recovery test startup time
- [#137426](https://github.com/openclaw/openclaw/pull/137426) test(doctor): simplify platform note assertions
- [#137429](https://github.com/openclaw/openclaw/pull/137429) refactor(ui): reuse canonical deferreds in subscription tests
- [#137448](https://github.com/openclaw/openclaw/pull/137448) fix(systemd): preserve services after backslash comments
- [#137412](https://github.com/openclaw/openclaw/pull/137412) feat(gateway): hot reload terminal availability and shared channel policy
- [#133057](https://github.com/openclaw/openclaw/pull/133057) fix(subagents): bound restored requester-settle recovery
- [#137433](https://github.com/openclaw/openclaw/pull/137433) fix(discord): preserve realtime speaker and playback ownership
- [#137445](https://github.com/openclaw/openclaw/pull/137445) chore(ui): refresh control ui locales
- [#137421](https://github.com/openclaw/openclaw/pull/137421) ci: consolidate QA jobs and reuse CLI test setup
- [#137431](https://github.com/openclaw/openclaw/pull/137431) fix: make completion permission recovery actionable
- [#137423](https://github.com/openclaw/openclaw/pull/137423) test: simplify entry diagnostic mocks
- [#137383](https://github.com/openclaw/openclaw/pull/137383) fix(codex): scope app approvals to native threads
- [#137333](https://github.com/openclaw/openclaw/pull/137333) test: consolidate doctor security warning coverage
- [#136379](https://github.com/openclaw/openclaw/pull/136379) fix(gateway): prevent startup stalls on large agent configs
- [#137419](https://github.com/openclaw/openclaw/pull/137419) fix(cron): preserve payload options when cloning automations
- [#137408](https://github.com/openclaw/openclaw/pull/137408) fix(cron): recover duplicated system monitors
- [#137041](https://github.com/openclaw/openclaw/pull/137041) fix(ui): show concrete model names in locked chats
- [#136343](https://github.com/openclaw/openclaw/pull/136343) fix(backup): support managed config and credentials links
- [#137227](https://github.com/openclaw/openclaw/pull/137227) improve: reduce gateway restart test startup time
- [#136914](https://github.com/openclaw/openclaw/pull/136914) fix(ci): bind release baselines to immutable candidates
- [#137405](https://github.com/openclaw/openclaw/pull/137405) fix(release): include src/plugins in the trusted plugin npm tooling checkout
- [#137406](https://github.com/openclaw/openclaw/pull/137406) fix(qa): preserve RTT measurement provenance

#### 🐛 New Issues
- [#137413](https://github.com/openclaw/openclaw/issues/137413) Anthropic detection rejects `openclaw.inbound_meta.v2` / `openclaw.diagnostics.v1` → 400 "out of extra usage" (recurrence of #65399) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#137377](https://github.com/openclaw/openclaw/issues/137377) Doctor --fix on Windows (2026.8.2) always fails at its final restart: "Gateway service ownership or manager identity changed"; Scheduled Task left disabled `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬4
- [#137266](https://github.com/openclaw/openclaw/issues/137266) Gateway exits for deferred config-reload restart in Windows service mode and never comes back (silent 'death' after channels.* config edit) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#137141](https://github.com/openclaw/openclaw/issues/137141) [Feature]: Give the session progress card a harness-side lifecycle — context feedback, transition guards, run-end reconciliation `P3` 💬4
- [#136991](https://github.com/openclaw/openclaw/issues/136991) 2026.8.1: credential migration aliases claude-cli:default to an Anthropic setup token (third-party 400); no native-CLI fallback when no profile resolves `P1` `impact:auth-provider` 💬4
- [#137056](https://github.com/openclaw/openclaw/issues/137056) memory-core: move maintenance off search/watch hot paths and keep invalidation per-file `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬3
- [#137570](https://github.com/openclaw/openclaw/issues/137570) 2026.9.1: health/heartbeat summary rebuilds the agent roster per agent (O(agents²)); 632-agent gateway blocks 45-57s every ~6 min after ready `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#136786](https://github.com/openclaw/openclaw/issues/136786) [Bug]: 2026.8.2 archive symlink guard breaks previously-working backups with no exclude/dereference escape hatch `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬3
- [#137495](https://github.com/openclaw/openclaw/issues/137495) [Feature]: Use compact Slack progress when no authored multi-step plan exists `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬3
- [#137366](https://github.com/openclaw/openclaw/issues/137366) [Bug]: `memory_search` triggers full source reconciliation while dirty, causing CPU starvation and timeouts `bug` `bug:crash` `P1` `clawsweeper:no-new-fix-pr` 💬3
- [#137492](https://github.com/openclaw/openclaw/issues/137492) [Bug]: Empty system-owned heartbeats wait behind busy queues, time out after 600 seconds, and enter retry storms `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#137473](https://github.com/openclaw/openclaw/issues/137473) [Bug]: CRT/Phosphor composer drops parts of JetBrains Mono ligatures at the caret `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#137085](https://github.com/openclaw/openclaw/issues/137085) macOS App 8.2 after upgrade from 7.1: device identity stuck in "native-importing", native gateway connection fails (handshake timeout) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#137418](https://github.com/openclaw/openclaw/issues/137418) automations MCP tool silently undercounts jobs (total: 5 vs CLI 16) and cannot get ids the CLI resolves `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#137394](https://github.com/openclaw/openclaw/issues/137394) [Bug]: Cloned automations lose stored payload options `bug` `maintainer` 💬2
- [#137095](https://github.com/openclaw/openclaw/issues/137095) Browser Panel UX: Standalone Windows and Sync Scroll Bug `P3` 💬3
- [#137367](https://github.com/openclaw/openclaw/issues/137367) [Bug]: AskUserQuestion validation error is a generic, unhelpful message with no field-level detail `bug` `no-stale` `bug:behavior` `P2` 💬3
- [#137362](https://github.com/openclaw/openclaw/issues/137362) [Bug]: Windows: appending a stdout redirect to the gateway.cmd launch line makes `openclaw gateway restart` always abort with "port is still busy before restart" `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#137382](https://github.com/openclaw/openclaw/issues/137382) Heartbeats cannot use the Codex harness when a custom models.providers.openai route exists (404 fallback to paid provider) 💬3
- [#137207](https://github.com/openclaw/openclaw/issues/137207) [Regression]: visible sessions_spawn child shows Off and the wrong runtime after #78176 `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#137249](https://github.com/openclaw/openclaw/issues/137249) Gemini-backed models reject every tool-bearing turn: multi-type `type` array in the bundled `message` tool (duplicate of #112050) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬3
- [#137217](https://github.com/openclaw/openclaw/issues/137217) [Bug]: openclaw status reports 'no token' and 'waiting for delivery route' for a working store-backed SecretRef, while --deep reports OK `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#137214](https://github.com/openclaw/openclaw/issues/137214) [Bug]: Restart-recovery tombstone blocks its own remedy — /new is stuck behind the failing message in the ordered ingress lane `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#137177](https://github.com/openclaw/openclaw/issues/137177) [Bug]: The built-in `@wecom/wecom-openclaw-plugin@2026.7.2` plugin can no longer be installed successfully `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬3
- [#137142](https://github.com/openclaw/openclaw/issues/137142) [Bug]: Discord system-agent approval buttons are emitted but rejected before resolution `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#137129](https://github.com/openclaw/openclaw/issues/137129) [Bug]: Slack agent authoring contract (mrkdwn) conflicts with 2026.8.2 outbound Markdown parsing — contract-compliant bold degrades to literal underscores 💬3
- [#136951](https://github.com/openclaw/openclaw/issues/136951) Successful no-op tool results (terminate flag) end the whole turn with non_deliverable_terminal_turn mid-task `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#137388](https://github.com/openclaw/openclaw/issues/137388) Usage selected-day totals discard session filters `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#137697](https://github.com/openclaw/openclaw/issues/137697) [Bug]: Medium running sessions lead to compaction issues `bug` `no-stale` `regression` `P1` 💬2
- [#137690](https://github.com/openclaw/openclaw/issues/137690) [Bug]: sessions_spawn fails with "unknown parent session" for Telegram-originated sessions on 2026.8.2 `bug` `no-stale` `regression` `P1` 💬2
- [#137613](https://github.com/openclaw/openclaw/issues/137613) Pre-compaction memory flush is disabled on CLI backends (ownsNativeCompaction gate), and the obvious fix hits a compactionCount trap `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#137124](https://github.com/openclaw/openclaw/issues/137124) claude-cli backend: Claude Code's built-in tools and system prompt both stay active alongside OpenClaw's — tool duplication + agent identity bleed `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#137584](https://github.com/openclaw/openclaw/issues/137584) [Bug]: 2026.9.1 official plugin update can time out on npm metadata while direct npm view succeeds `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#137591](https://github.com/openclaw/openclaw/issues/137591) [Bug]: Config hot reload drops a channel's inbound webhook route while channels status still reports running/connected `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#137508](https://github.com/openclaw/openclaw/issues/137508) [Mobile UI] 键盘弹出后聊天内容被遮挡，输入区控件布局不合理 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬2
- [#137560](https://github.com/openclaw/openclaw/issues/137560) [Bug]: memory-core reindex reports database or disk is full when container temp storage is undersized `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#137503](https://github.com/openclaw/openclaw/issues/137503) [Bug]: doctor --fix / update repair fails with generic "ownership could not be verified" on headless Linux systemd installs missing dbus-user-session `bug` `no-stale` `bug:behavior` `P2` 💬2
- [#137557](https://github.com/openclaw/openclaw/issues/137557) [Feature]: Improve queue and cancellation visibility for slow local providers `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬2
- [#137547](https://github.com/openclaw/openclaw/issues/137547) [Bug]: Gateway recovery hints recommend blocked service installation `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#137541](https://github.com/openclaw/openclaw/issues/137541) sessions: large archive selections exceed SQLite binding limits `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬2
- [#137355](https://github.com/openclaw/openclaw/issues/137355) [Bug]: 2026.8.2 restart recovery skips drain-admitted session; subsequent dispatch fails with 'changed while starting work' and drops the message `P1` `impact:session-state` `impact:message-loss` `maturity:stable` 💬2
- [#137524](https://github.com/openclaw/openclaw/issues/137524) QA Lab pre-initializes historical candidate state with the current schema `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬2
- [#137513](https://github.com/openclaw/openclaw/issues/137513) Add Fal H3 Max video model support `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬2
- [#137528](https://github.com/openclaw/openclaw/issues/137528) QA WhatsApp credential pool has no available lease for RTT `bug` `maintainer` `P2` `clawsweeper:current-main-repro` 💬2
- [#137534](https://github.com/openclaw/openclaw/issues/137534) Cron execution ignores cross-agent session controls: sessionTarget with a foreign agent id runs inside that agent’s session 💬2
- [#137504](https://github.com/openclaw/openclaw/issues/137504) [Bug]: Slack card-style progress renders literal escape backslashes around inline code `bug` `no-stale` `bug:behavior` `P2` 💬2
- [#137491](https://github.com/openclaw/openclaw/issues/137491) [Bug]: Slack native progress card retains recovered tool failure as a terminal red attention row `bug` `no-stale` `bug:behavior` `P2` 💬2
- [#137497](https://github.com/openclaw/openclaw/issues/137497) [Bug]: Doctor service recovery hints recommend the wrong repair posture `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬2
- [#137488](https://github.com/openclaw/openclaw/issues/137488) Dispatched run completion announce should follow the requester's delivery context (voice-channel dispatches announce to stale internal sink) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#137457](https://github.com/openclaw/openclaw/issues/137457) [Bug]: Failed remote Doctor health prompts local Gateway recovery `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬2
- [#137378](https://github.com/openclaw/openclaw/issues/137378) Android secondary connections outlive Disconnect and credential cleanup `maintainer` `P1` `clawsweeper:source-repro` `impact:session-state` 💬2
- [#137444](https://github.com/openclaw/openclaw/issues/137444) Slack outbound reply silently dropped after successful agent turn (no error logged) `P2` `impact:message-loss` 💬2
- [#137409](https://github.com/openclaw/openclaw/issues/137409) [Bug]: Completion permission recovery suggests an unsupported profile destination `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#137404](https://github.com/openclaw/openclaw/issues/137404) Android handshake can send before its WebSocket is published `bug` `maintainer` `P2` `clawsweeper:needs-live-repro` 💬2
- [#137111](https://github.com/openclaw/openclaw/issues/137111) Android history-load completion cancels new-turn auto-scroll `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬2
- [#137039](https://github.com/openclaw/openclaw/issues/137039) Control UI hides concrete locked model behind Codex ownership label `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#137398](https://github.com/openclaw/openclaw/issues/137398) tools.toolSearch: agent loops on tool-search when an MCP server disconnects `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#137417](https://github.com/openclaw/openclaw/issues/137417) Realtime interruption uses the newest generated item instead of audible output `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬2
- [#137416](https://github.com/openclaw/openclaw/issues/137416) agents delete fails on Windows: "cleanup path identity exceeds the safe integer range" (NTFS inode overflow) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#137339](https://github.com/openclaw/openclaw/issues/137339) [Bug]: QA implicit message targets lose conversation kind `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#137345](https://github.com/openclaw/openclaw/issues/137345) [Bug]: Doctor Control UI repair commands use the calling directory `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬2
- [#137245](https://github.com/openclaw/openclaw/issues/137245) Private Slack QA leaks plugin dependencies into root dist `bug` `maintainer` `P1` `clawsweeper:current-main-repro` 💬2
- [#137353](https://github.com/openclaw/openclaw/issues/137353) OpenAI auth broken after upgrade to 2026.8.2: split-brain between per-agent and shared auth stores (valid OAuth + valid API key both rejected) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#136940](https://github.com/openclaw/openclaw/issues/136940) [Bug]: macOS primary gateway changes leave secondary dashboards on stale routes `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#137337](https://github.com/openclaw/openclaw/issues/137337) [Bug]: tools.exec.mode=auto — auto-reviewer is never invoked after approvals migration; every non-allowlisted command falls back to human approval (2026.8.1 and 2026.8.2) `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#137332](https://github.com/openclaw/openclaw/issues/137332) [Bug]: mixed terminal requester-settle batches retry forever after ownership check `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#137060](https://github.com/openclaw/openclaw/issues/137060) Control UI duplicates streamed messages 3x while thinking is visible (2026.8.1) `P2` `impact:ux-friction` 💬2
- [#137308](https://github.com/openclaw/openclaw/issues/137308) openclaw doctor bootstrap budget excludes hook-injected files, under-reporting the total that silently drops files `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#137174](https://github.com/openclaw/openclaw/issues/137174) [Bug]: Gated tools still recommend unavailable companion tools `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬2
- [#137156](https://github.com/openclaw/openclaw/issues/137156) [Bug]: Memory watcher warning recommends a rejected configuration key `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬2
- [#137032](https://github.com/openclaw/openclaw/issues/137032) [Docs Bug]: source anchor audit disagrees with published section targets `bug` `docs` `maintainer` `P2` 💬2
- [#137257](https://github.com/openclaw/openclaw/issues/137257) [Bug]: `## Runtime` below SYSTEM_PROMPT_CACHE_BOUNDARY still voids the prefix cache — tool schemas serialize after the system message `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#137216](https://github.com/openclaw/openclaw/issues/137216) message CLI truncates large piped JSON before process exit `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#137239](https://github.com/openclaw/openclaw/issues/137239) [Bug]: Forwarding Discord message as a DM loses the forwarded message body `bug` `bug:behavior` `P2` `impact:message-loss` 💬2
- [#137110](https://github.com/openclaw/openclaw/issues/137110) [Feature]: Telegram sendDice support for the message tool `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#137198](https://github.com/openclaw/openclaw/issues/137198) [Bug]: pre-run directive rejection leaves no useful diagnostic trace for the rejected inbound message `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#137188](https://github.com/openclaw/openclaw/issues/137188) [Bug]: Stale session progress card renders with a live spinner during subsequent runs — board widget never derives run activity `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#137024](https://github.com/openclaw/openclaw/issues/137024) [Bug]: NO_REPLY silence is defeated by settled-turn fallback — agentTurn cron announces a placeholder on every healthy run `P1` `impact:other` 💬2
- [#137165](https://github.com/openclaw/openclaw/issues/137165) opencode-go: send required x-opencode-session header (vendor enforcing from 2026-09-06) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#136818](https://github.com/openclaw/openclaw/issues/136818) Session tools lose role-aware visibility and need generalized bulk patch targets `maintainer` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬2
- [#137143](https://github.com/openclaw/openclaw/issues/137143) [Feature]: Add last-active date filter to session sidebar `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬2
- [#136881](https://github.com/openclaw/openclaw/issues/136881) [Bug]: published tool-plugin declarations export undeclared __exportAll `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#137051](https://github.com/openclaw/openclaw/issues/137051) [Bug]: Native iOS 2026.8.10 Skill Workshop apply omits expectedRevisionHash `P1` `impact:ux-friction` 💬2
- [#137107](https://github.com/openclaw/openclaw/issues/137107) [Feature]: Support nested sidebar groups for sessions/projects `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬2
- [#136954](https://github.com/openclaw/openclaw/issues/136954) [Bug]: Control UI deletions omit required array-replacement intent `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬2
- [#137712](https://github.com/openclaw/openclaw/issues/137712) Prefix recovery can truncate `openclaw.json` if the write fails `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#137705](https://github.com/openclaw/openclaw/issues/137705) [Bug]: Telegram streaming path leaks raw `[label](file:///…)` Markdown when the link scheme isn't in the rich-link allowlist 💬1
- [#137710](https://github.com/openclaw/openclaw/issues/137710) [Bug]: Native Codex completion is recorded but does not wake a sessions_yield parent 💬1
- [#137694](https://github.com/openclaw/openclaw/issues/137694) [Bug]: `doctor` misattributes a Codex config error to Memory Wiki plugin tools `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#137665](https://github.com/openclaw/openclaw/issues/137665) [Bug]: gateway.trustedProxies never matches IPv4-mapped IPv6 CIDR ranges (::ffff:a.b.c.d/N), so proxied requests get 403 proxy_attribution_required `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#137651](https://github.com/openclaw/openclaw/issues/137651) [Bug]: Buzz agents never receive the message a reply points at `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#137650](https://github.com/openclaw/openclaw/issues/137650) [Bug]: sessions.compact fails with UNAVAILABLE after switching the default model to an OpenAI model — codex harness resolved from the new default while the session still carries the previous provider's model `bug` `bug:behavior` `P1` `impact:session-state` 💬1
- [#137643](https://github.com/openclaw/openclaw/issues/137643) [Bug]: announceTimeoutMs (120s) now cancels the requester settle-wake turn mid-execution after #135854; partial replies leak to the channel and the wake is retried into the same cut-off `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#137611](https://github.com/openclaw/openclaw/issues/137611) Proposal: outcome-validated tie-breaking for last-resort cap-archive eviction `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#137628](https://github.com/openclaw/openclaw/issues/137628) [Bug]: Anthropic pruning ignores allowlists for historical tools `maintainer` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#137624](https://github.com/openclaw/openclaw/issues/137624) [Regression]: 2026.9.1 plugins update --all leaves official diagnostics plugin pinned to 2026.8.2 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#137625](https://github.com/openclaw/openclaw/issues/137625) [Bug]: /models chat picker ignores plugin-registered catalog for synthetic-auth providers 💬1
- [#137607](https://github.com/openclaw/openclaw/issues/137607) [slack] handler failed: Cannot read properties of undefined (reading 'catch') — recurring bursts `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#137605](https://github.com/openclaw/openclaw/issues/137605) __auth_probe_only__ 💬1
- [#137573](https://github.com/openclaw/openclaw/issues/137573) [Bug]: `cron get` / `cron runs` reject `--json` (list/show accept it) — scripted JSON reads exit 1 with empty stdout `P2` `impact:ux-friction` 💬1
- [#137572](https://github.com/openclaw/openclaw/issues/137572) [Bug]: Telegram ingress spool retry cap is not enforced — dead-letter predicate ANDs "attempt >= 8" with a 24h age clause, logs advertise "/8" 💬1
- [#137579](https://github.com/openclaw/openclaw/issues/137579) [Docs]: the reload table documents a two-way contract; buildGatewayReloadPlan implements a three-way one `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#137580](https://github.com/openclaw/openclaw/issues/137580) [Bug]: 2026.9.1 detached agent update keeps Gateway offline ~20 minutes during post-update finalization `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#137574](https://github.com/openclaw/openclaw/issues/137574) [Bug]: OpenAI Realtime forgets provider cleanup after failed hangup `maintainer` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#137566](https://github.com/openclaw/openclaw/issues/137566) agent exec reports an aborted run as "Agent run failed" in the JSON envelope `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#137540](https://github.com/openclaw/openclaw/issues/137540) [Bug]: Cloud workspace reconciliation serially scans large checkouts four times `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#137549](https://github.com/openclaw/openclaw/issues/137549) Support GPT-6 Astra in the OpenAI plugin `enhancement` `maintainer` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#137553](https://github.com/openclaw/openclaw/issues/137553) Replies silently dropped / in-flight tool calls skipped despite queue mode followup; multiple delivery-loss mechanisms `P1` `impact:session-state` `impact:message-loss` 💬1
- [#137539](https://github.com/openclaw/openclaw/issues/137539) Cloud follow-up is interrupted while workspace reconciliation is healthy `maintainer` `P1` `clawsweeper:source-repro` `impact:session-state` 💬1
- [#137514](https://github.com/openclaw/openclaw/issues/137514) [Bug]: Android replaces an in-flight operator connection during Gateway focus `bug` `maintainer` `P1` `clawsweeper:source-repro` 💬1
- [#137525](https://github.com/openclaw/openclaw/issues/137525) 2026.8.2: memory search forces a full reindex on every call + O(n) plugin-state COUNT per write → in-session memory_search hits 15s deadline `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#137520](https://github.com/openclaw/openclaw/issues/137520) Provider wrappers accepted by stable fail to compile after retry cleanup `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#137493](https://github.com/openclaw/openclaw/issues/137493) [Bug]: Internal runtime context envelope leaks into webchat on large text pastes (2026.8.1) - regression/sibling of #62306 `P1` `impact:session-state` `impact:security` 💬1
- [#137516](https://github.com/openclaw/openclaw/issues/137516) CLI `message send --channel <plugin channel>` fails with "Unknown channel" in 2026.8.1 (request-scoped plugin registry not consulted by `resolveAvailableKnownChannel`) `P2` `impact:other` 💬1
- [#137509](https://github.com/openclaw/openclaw/issues/137509) Plugin SDK rejects positional CodeRegion inputs accepted by stable `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#137496](https://github.com/openclaw/openclaw/issues/137496) [Bug]: Skill Workshop lifecycle approvals always fail under approvalPolicy=pending — requireApproval never sets pluginId `P1` `impact:ux-friction` 💬1
- [#137499](https://github.com/openclaw/openclaw/issues/137499) WebChat duplicates captions when compact media mirrors are finalized `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#137486](https://github.com/openclaw/openclaw/issues/137486) [Bug]: WhatsApp group mention gating: bot's number "found" across unrelated digits, so digit-heavy messages trigger uninvited replies `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#137479](https://github.com/openclaw/openclaw/issues/137479) [Feature]: Show the effective runtime on session rows in the Control UI sidebar `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#137469](https://github.com/openclaw/openclaw/issues/137469) A failed structured-image hydration throws and kills the whole turn instead of degrading to text, and in a group/channel that failure becomes the silent-reply token — the second, unaddressed defect of #122616 `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#137466](https://github.com/openclaw/openclaw/issues/137466) [BUG] web_search: 422 SUBSCRIPTION_TOKEN_INVALID when brave plugin uses a sec:-ref to kind: secret store entry (OpenClaw 2026.8.2) `P3` `clawsweeper:bulk-filed` 💬1
- [#137478](https://github.com/openclaw/openclaw/issues/137478) Custom OpenAI-compatible providers never receive a native `tools` array — tool definitions arrive only as prompt-embedded text, so tool-capable models conclude they have no tools `P2` `impact:auth-provider` 💬1
- [#137470](https://github.com/openclaw/openclaw/issues/137470) A `tools.deny` entry that matches nothing is silent at every level — the policy analysis only inspects `allow`, and the `matched` suffix that would expose a dead rule is truncated together with the removed-names list `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#137477](https://github.com/openclaw/openclaw/issues/137477) TUI input: after pasting a multi-line prompt, Enter does not submit (injected \n / \r don't either) 💬1
- [#137476](https://github.com/openclaw/openclaw/issues/137476) MCP-over-HTTP: legacy SSE probe (GET) against a stateless Streamable HTTP server gets 405, then the connection fails with -32001 instead of falling back to POST `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#137472](https://github.com/openclaw/openclaw/issues/137472) [Bug]: Control UI chat renders RTL messages left-to-right when the text starts with a bidi control (RLM/RLI) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#137467](https://github.com/openclaw/openclaw/issues/137467) Parent session remains paused after sibling subagents complete `bug` `agents` `maintainer` `P1` 💬1
- [#137011](https://github.com/openclaw/openclaw/issues/137011) [Feature]: fast-forward a replacement cloud worker's checkout to the pushed session branch `enhancement` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#137459](https://github.com/openclaw/openclaw/issues/137459) [Bug]: 2026.8.2 backup restore rejects a verified 2026.7.1-2 archive with absolute Windows junction targets `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#137447](https://github.com/openclaw/openclaw/issues/137447) [Bug]: Backslash comments can make systemd services unstartable after metadata refresh `maintainer` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#137452](https://github.com/openclaw/openclaw/issues/137452) `openclaw approvals get` drops `source` and `argPattern` from the Allowlist table, so an argv- and cwd-bound `allow-always` grant renders identically to a broad path grant `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:security` 💬1
- [#137453](https://github.com/openclaw/openclaw/issues/137453) [Feature]: give an unresolvable compaction model its own reason label (compaction_model_unresolved) instead of the unknown catch-all — the classifier improvement invited in #114655 `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#137415](https://github.com/openclaw/openclaw/issues/137415) [internal] Request stable npm release of openclaw@>=2026.9.1 carrying 8c5442c0 (PR #135713) — #123331 (eefe8bdc) is already in v2026.8.2 `P1` `impact:crash-loop` 💬1
- [#137441](https://github.com/openclaw/openclaw/issues/137441) [Bug]: Android composer controls overlap and use ambiguous defaults `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#137349](https://github.com/openclaw/openclaw/issues/137349) Discord realtime voice can attribute delayed transcripts to another speaker `bug` `maintainer` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#137437](https://github.com/openclaw/openclaw/issues/137437) [Bug]: Telegram approval card edits suppress results in another topic of the same chat `maintainer` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#137432](https://github.com/openclaw/openclaw/issues/137432) [Feature]: Use task schemas during Codex-backed llm-task generation `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#137427](https://github.com/openclaw/openclaw/issues/137427) Control UI blocks consecutive prompt entry before outbox admission `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#137414](https://github.com/openclaw/openclaw/issues/137414) [internal] Request stable npm release carrying f66a2c6a (PR #123235) and 8c5442c0 (PR #135713) so downstream packaging pipelines unblock `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#137380](https://github.com/openclaw/openclaw/issues/137380) [Bug]: QA evidence drops structured RTT provenance `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#137410](https://github.com/openclaw/openclaw/issues/137410) [Feature]: Model selection dropdown for fallback. `enhancement` `P3` `impact:ux-friction` 💬1
- [#137391](https://github.com/openclaw/openclaw/issues/137391) Remembered Usage route is overwritten by stale Chat recovery on startup `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#137407](https://github.com/openclaw/openclaw/issues/137407) TUI status stuck at "running • Xm Ys" forever after gateway restart aborts an in-flight turn (session forked, old record never finalized) `P1` `impact:session-state` `maturity:stable` 💬1
- [#137400](https://github.com/openclaw/openclaw/issues/137400) [Feature]: Dashboards: card view by default with dashboard previews `enhancement` `maintainer` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#137397](https://github.com/openclaw/openclaw/issues/137397) [Bug]: Typing indicator lapses mid-turn during tool-call work; typingTtlMs is plumbed but never supplied `P1` `impact:ux-friction` 💬1
- [#137395](https://github.com/openclaw/openclaw/issues/137395) ask_user question card never delivered to Telegram, silently times out `P1` `impact:message-loss` 💬1
- [#137316](https://github.com/openclaw/openclaw/issues/137316) [Bug]: Control UI sidebar header controls misaligned after the + button lost its border `bug` `maintainer` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#137386](https://github.com/openclaw/openclaw/issues/137386) [Bug]: Hosted Gateway start/stop errors can exit the Gateway or self-wait during shutdown `maintainer` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#137385](https://github.com/openclaw/openclaw/issues/137385) [Bug]: shell redirects (2>&1, >, etc.) are unconditionally UNANALYZABLE_RISKS, permanently blocking allowlist matching regardless of entries `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#137379](https://github.com/openclaw/openclaw/issues/137379) MCP tool listing timed out after 1500ms — hardcoded timeout too tight for large MCP servers `P3` 💬1
- [#137357](https://github.com/openclaw/openclaw/issues/137357) [Bug]: tools.exec config patch with legacy security/ask shape fails after mode migration `security` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` 💬1
- [#137145](https://github.com/openclaw/openclaw/issues/137145) ChatGPT SSE drops HTTP status and ignores Retry-After pacing `maintainer` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#137369](https://github.com/openclaw/openclaw/issues/137369) [Bug]: OpenClaw Control web UI renders the same agent interim output three times `P2` `impact:ux-friction` 💬1
- [#137373](https://github.com/openclaw/openclaw/issues/137373) 2026.8.2: plugin CLI backends mirroring claude-cli fail closed on every capped run ("cannot enforce this run's tool cap") — no changelog, no doctor warning, restricted-args helper not exported from plugin-sdk `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#137370](https://github.com/openclaw/openclaw/issues/137370) Bug: macOS native client window top area renders as black rectangle (blocks UI) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#137361](https://github.com/openclaw/openclaw/issues/137361) Portals/Apps unreachable from sidebar — pin/customize (pencil) affordance is unlabeled and undiscoverable `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#137365](https://github.com/openclaw/openclaw/issues/137365) [Feature]: exec-approvals writes have no success-path audit log or confirmation gate for self-broadening `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#137363](https://github.com/openclaw/openclaw/issues/137363) Control UI (WebChat): pre-tool assistant commentary text renders 2-3x - streamed segment itemId vs committed message id not deduplicated `P1` `impact:ux-friction` 💬1
- [#137356](https://github.com/openclaw/openclaw/issues/137356) agy backend never uses native session resume, causing routine watchdog kills on long-lived sessions `P3` 💬1
- [#137221](https://github.com/openclaw/openclaw/issues/137221) [Feature]: Bundle a memory operations skill for the default memory-core path 💬1
- [#137319](https://github.com/openclaw/openclaw/issues/137319) web_search (Codex native) not projected into --session isolated cron/automation runs 💬1
- [#137306](https://github.com/openclaw/openclaw/issues/137306) [Bug]: sessions_spawn fails with "spawn parent must match the trusted agent caller" on 2026.8.2 `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#137307](https://github.com/openclaw/openclaw/issues/137307) doctor recommends bootstrapMaxChars for USER.md's fixed 4,000-char cap; the correct suppression exists in the sibling renderer `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#137304](https://github.com/openclaw/openclaw/issues/137304) mcp.servers.<name> (stdio): no env/SecretRef support for args, so secrets end up in plaintext 💬1
- [#137299](https://github.com/openclaw/openclaw/issues/137299) [Feature]: exec children carry no calling-agent identity, so a scoped wrapper must encode the agent in its own path `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#137292](https://github.com/openclaw/openclaw/issues/137292) Control UI WebChat 2026.8.2: in-turn assistant comments rendered 3x as duplicate bubbles `P2` `impact:ux-friction` 💬1
- [#137294](https://github.com/openclaw/openclaw/issues/137294) [Bug]: Preflight compaction is aborted by the shorter ingress adoption watchdog `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#137281](https://github.com/openclaw/openclaw/issues/137281) tts: a free-text `[[tts:...]]` reply is stripped to nothing and delivered as "No reply was generated" `no-stale` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` 💬1
- [#137277](https://github.com/openclaw/openclaw/issues/137277) [Bug]: Feishu inbound messages fail to dispatch to agent on OpenClaw 2026.8.2 (runDispatchLifecycle error) `bug` `bug:behavior` `P1` `impact:message-loss` 💬1
- [#137265](https://github.com/openclaw/openclaw/issues/137265) [Bug]: Memory Search does not index/retrieve conversation session content with sessions source enabled `bug` `bug:behavior` `P2` `impact:session-state` 💬1
- [#137261](https://github.com/openclaw/openclaw/issues/137261) Builtin memory index is not refreshed by searches; idle agents serve stale results (2026.8.1, unchanged in 2026.8.2) `P1` `impact:session-state` 💬1
- [#137264](https://github.com/openclaw/openclaw/issues/137264) A tombstoned agent:<id>:main has no replacement path; `sessions delete --dry-run` says would_delete but the real run refuses `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#137263](https://github.com/openclaw/openclaw/issues/137263) 2026.8.2: every heartbeat run stalls in model_call after the final assistant text and hits the 600 s cron timeout (all agents, all providers) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#137247](https://github.com/openclaw/openclaw/issues/137247) # ACP bridge: fallback session key has no agent owner in multi-agent mode `enhancement` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#137246](https://github.com/openclaw/openclaw/issues/137246) Buzz channel: large agent final replies (~9KB) silently dropped in pending-final delivery; CLI sends of same size publish fine `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬1
- [#137242](https://github.com/openclaw/openclaw/issues/137242) [Bug]: 2.0 `gateway install` / `doctor` abort with `EPERM: fchmod` on Apple VirtioFS (chmod-less) state dirs `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#137240](https://github.com/openclaw/openclaw/issues/137240) [Feature]: Codex harness: support per-tool ownership for conflicting native and OpenClaw tools `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#137103](https://github.com/openclaw/openclaw/issues/137103) [Bug]: Session Observer model picker stays empty after an initial catalog failure `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#137232](https://github.com/openclaw/openclaw/issues/137232) Voice channel: confirmation token superseded by agent's own confirmation prompt, blocking all exec/write actions `P1` `impact:ux-friction` 💬1
- [#137231](https://github.com/openclaw/openclaw/issues/137231) [Bug]: Add a navigation link to the Tasks page `bug` `bug:behavior` 💬1
- [#137226](https://github.com/openclaw/openclaw/issues/137226) Webchat renders replies 2-3x when streaming falls back to segment delivery (2026.8.2) `P2` `impact:ux-friction` 💬1
- [#136783](https://github.com/openclaw/openclaw/issues/136783) [Bug]: Unreadable cached skill aborts node-worker follow-up without path diagnostics `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#137218](https://github.com/openclaw/openclaw/issues/137218) [Feature]: Add Control UI cancellation for active cron runs `enhancement` `P3` 💬1
- [#137215](https://github.com/openclaw/openclaw/issues/137215) [Bug]: Cron retries after timeout while the original execution can still complete `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#137208](https://github.com/openclaw/openclaw/issues/137208) Telegram spool: update that COMPLETED is redelivered as a fresh inbound after losing claim ownership → duplicate agent turn `P1` `impact:session-state` `impact:message-loss` 💬1
- [#137204](https://github.com/openclaw/openclaw/issues/137204) [Feature]: Auto/Plan/Action buttons settings. `enhancement` `P3` 💬1
- [#137201](https://github.com/openclaw/openclaw/issues/137201) [Feature]: adopt Vitest 5 with validated test performance `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#137122](https://github.com/openclaw/openclaw/issues/137122) [Bug]: macOS App 2026.8.2 — embedded dashboard disconnects after ~1–2 min (code 1001) and never auto-reconnects; native WS channel never connects (0/47) `bug` `bug:crash` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#137197](https://github.com/openclaw/openclaw/issues/137197) [Bug]: inline /model parser treats ordinary prose as a model selection and aborts the turn `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#137164](https://github.com/openclaw/openclaw/issues/137164) [Feature]: Bundle a first-party Control UI operations skill `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#137190](https://github.com/openclaw/openclaw/issues/137190) [Bug]: Localize schema-derived Control UI field metadata `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#137179](https://github.com/openclaw/openclaw/issues/137179) [Bug]: CLI message send omits wecom channel on 2026.8.1 despite gateway-mode plugin (Unknown channel "wecom") `bug` `regression` `impact:message-loss` 💬1
- [#137080](https://github.com/openclaw/openclaw/issues/137080) Feature: let claude-cli sessions run on cloud workers (Crabbox) via the existing agent.cli.claude.run.v1 node path `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#137121](https://github.com/openclaw/openclaw/issues/137121) [Bug]: Codex conversations fail after native thread deletion `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#137116](https://github.com/openclaw/openclaw/issues/137116) [Bug]: Terminal upload batches have no aggregate staging bound `maintainer` `P1` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#137115](https://github.com/openclaw/openclaw/issues/137115) [Bug]: Projectless Codex Desktop sessions fragment into multiple catalog groups by date prefix `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#137135](https://github.com/openclaw/openclaw/issues/137135) [2026.8.1 UI regression] Automation prompt editor and Skill Workshop missing `P1` `impact:ux-friction` 💬1
- [#137127](https://github.com/openclaw/openclaw/issues/137127) [Bug]: Ship native iOS Skill Workshop revision-hash fix missing from App Store 2026.8.10 `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#137151](https://github.com/openclaw/openclaw/issues/137151) [Bug]: Fleet cells can crash-loop when the runtime UID cannot write the image HOME cache and temp paths `P1` `clawsweeper:needs-live-repro` `impact:crash-loop` `issue-rating: 🐚 platinum hermit` 💬1
- [#137153](https://github.com/openclaw/openclaw/issues/137153) [Bug]: Missing plugin payload plus a persisted install record can block gateway readiness `P1` `impact:auth-provider` `impact:crash-loop` 💬1
- [#137155](https://github.com/openclaw/openclaw/issues/137155) [Bug]: Busy scheduled heartbeat wakes are retried instead of settling as terminal skipped outcomes `P2` `impact:other` 💬1
- [#137152](https://github.com/openclaw/openclaw/issues/137152) [Bug]: Awaited heartbeat wakes can outlive their cron receipts and hit the fixed 600-second timeout `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#137154](https://github.com/openclaw/openclaw/issues/137154) [Bug]: Doctor reports managed-gateway restart failure seconds before the gateway becomes ready `P2` `impact:other` `maturity:stable` 💬1
- [#137125](https://github.com/openclaw/openclaw/issues/137125) [Bug]: Session reset silently suppresses new critical-attention notices `maintainer` `P1` `clawsweeper:source-repro` `impact:session-state` 💬1
- [#137108](https://github.com/openclaw/openclaw/issues/137108) [Bug]: Debug event log retains events from the previous Gateway after switching connections `maintainer` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#136963](https://github.com/openclaw/openclaw/issues/136963) Deep promotion never fires when a daily claim is recorded before its first recall `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#137026](https://github.com/openclaw/openclaw/issues/137026) iMessage: automatically recover an unresponsive private bridge after a confirmed timeout `maintainer` 💬1
- [#137025](https://github.com/openclaw/openclaw/issues/137025) [Bug]: Crabbox worker cleanup never confirms a lease that no longer exists, wedging failed placements permanently 💬1
- [#136945](https://github.com/openclaw/openclaw/issues/136945) Readable person Activity URLs `enhancement` `maintainer` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#137721](https://github.com/openclaw/openclaw/issues/137721) doctor --fix fails to migrate plaintext model-catalog credential due to unrelated "shared auth store relocation" conflict
- [#137720](https://github.com/openclaw/openclaw/issues/137720) [Feature]: Telegram: separate durable commentary from progress draft tool and plan rows
- [#137099](https://github.com/openclaw/openclaw/issues/137099) Child completion handoff remains stranded after decorated or failed status delivery `bug` `maintainer`
- [#137079](https://github.com/openclaw/openclaw/issues/137079) Codex rejects valid empty native tool catalogs `bug` `maintainer`
- [#136797](https://github.com/openclaw/openclaw/issues/136797) Issue on docs

#### 🔒 Closed Issues
- [#125344](https://github.com/openclaw/openclaw/issues/125344) memory-core local embedding workers and codex app-servers leak with no idle TTL, strangling the gateway cgroup
- [#124284](https://github.com/openclaw/openclaw/issues/124284) Subagent spawn fails with vLLM openai-completions + thinking: malformed XML tool calls since v2026.8.1-beta.2
- [#135970](https://github.com/openclaw/openclaw/issues/135970) codex plugin: dist/extensions/codex missing node_modules (Managed Codex app-server binary not found)
- [#136113](https://github.com/openclaw/openclaw/issues/136113) claude-cli backend returns an empty response on every turn whose CLI stdout exceeds ~50 KB (11/25 turns lost)
- [#91569](https://github.com/openclaw/openclaw/issues/91569) [Bug]: Desktop app stuck on old version after gateway auto-update → "protocol mismatch" with no in-app prompt
- [#137413](https://github.com/openclaw/openclaw/issues/137413) Anthropic detection rejects `openclaw.inbound_meta.v2` / `openclaw.diagnostics.v1` → 400 "out of extra usage" (recurrence of #65399)
- [#102288](https://github.com/openclaw/openclaw/issues/102288) [Bug]: agents set-identity --workspace does not set the agent's stored workspace, but its success response implies it does
- [#134557](https://github.com/openclaw/openclaw/issues/134557) Control UI approval of system-agent config proposals is silently dropped — approval consumed, config never applied, no error anywhere
- [#124099](https://github.com/openclaw/openclaw/issues/124099) SessionCanonicalKeyMigrationRequiredError loop after 2026.8.1-beta.2: trigger-pending rows block dispatch, doctor --fix deadlocks, healthy model gets fallbacked
- [#137141](https://github.com/openclaw/openclaw/issues/137141) [Feature]: Give the session progress card a harness-side lifecycle — context feedback, transition guards, run-end reconciliation
- [#136991](https://github.com/openclaw/openclaw/issues/136991) 2026.8.1: credential migration aliases claude-cli:default to an Anthropic setup token (third-party 400); no native-CLI fallback when no profile resolves
- [#127970](https://github.com/openclaw/openclaw/issues/127970) Session entry cap destroys every live Control UI conversation once auto-archived dashboard sessions reach maxEntries
- [#135892](https://github.com/openclaw/openclaw/issues/135892) Gateway startup: plugin auto-enable is O(candidates²) on large agent configs (pre-listen event-loop block)
- [#137394](https://github.com/openclaw/openclaw/issues/137394) [Bug]: Cloned automations lose stored payload options
- [#137095](https://github.com/openclaw/openclaw/issues/137095) Browser Panel UX: Standalone Windows and Sync Scroll Bug
- [#137382](https://github.com/openclaw/openclaw/issues/137382) Heartbeats cannot use the Codex harness when a custom models.providers.openai route exists (404 fallback to paid provider)
- [#135987](https://github.com/openclaw/openclaw/issues/135987) [Bug]: Realtime Talk + agent-consult: session errors/closes after exactly one turn (survives longer under provider-direct)
- [#131401](https://github.com/openclaw/openclaw/issues/131401) fix(cron): scheduler-disabled CRUD can overwrite shared runtime state
- [#137249](https://github.com/openclaw/openclaw/issues/137249) Gemini-backed models reject every tool-bearing turn: multi-type `type` array in the bundled `message` tool (duplicate of #112050)
- [#119143](https://github.com/openclaw/openclaw/issues/119143) [Bug]: subagent completions dropped during a parent run's recoverable timeout window
- [#131711](https://github.com/openclaw/openclaw/issues/131711) [Bug]: Completed reply remains active until timeout and abort duplicates transcript entry
- [#124573](https://github.com/openclaw/openclaw/issues/124573) Codex provider spawns a full Node process per tool call to relay `pre_tool_use`, an event no hook consumes; `--timeout` does not bound the process
- [#137129](https://github.com/openclaw/openclaw/issues/137129) [Bug]: Slack agent authoring contract (mrkdwn) conflicts with 2026.8.2 outbound Markdown parsing — contract-compliant bold degrades to literal underscores
- [#136708](https://github.com/openclaw/openclaw/issues/136708) tests: synchronize subprocess fixtures before deadline assertions
- [#136951](https://github.com/openclaw/openclaw/issues/136951) Successful no-op tool results (terminate flag) end the whole turn with non_deliverable_terminal_turn mid-task
- [#137388](https://github.com/openclaw/openclaw/issues/137388) Usage selected-day totals discard session filters
- [#137560](https://github.com/openclaw/openclaw/issues/137560) [Bug]: memory-core reindex reports database or disk is full when container temp storage is undersized
- [#134143](https://github.com/openclaw/openclaw/issues/134143) Codex runtime drops all configured MCP servers whenever any tool policy is set
- [#137547](https://github.com/openclaw/openclaw/issues/137547) [Bug]: Gateway recovery hints recommend blocked service installation
- [#137541](https://github.com/openclaw/openclaw/issues/137541) sessions: large archive selections exceed SQLite binding limits
- [#137355](https://github.com/openclaw/openclaw/issues/137355) [Bug]: 2026.8.2 restart recovery skips drain-admitted session; subsequent dispatch fails with 'changed while starting work' and drops the message
- [#137534](https://github.com/openclaw/openclaw/issues/137534) Cron execution ignores cross-agent session controls: sessionTarget with a foreign agent id runs inside that agent’s session
- [#137504](https://github.com/openclaw/openclaw/issues/137504) [Bug]: Slack card-style progress renders literal escape backslashes around inline code
- [#137491](https://github.com/openclaw/openclaw/issues/137491) [Bug]: Slack native progress card retains recovered tool failure as a terminal red attention row
- [#137497](https://github.com/openclaw/openclaw/issues/137497) [Bug]: Doctor service recovery hints recommend the wrong repair posture
- [#137457](https://github.com/openclaw/openclaw/issues/137457) [Bug]: Failed remote Doctor health prompts local Gateway recovery
- [#122241](https://github.com/openclaw/openclaw/issues/122241) [Bug]: Control UI marks a usable multi-profile provider as credentials rejected
- [#137378](https://github.com/openclaw/openclaw/issues/137378) Android secondary connections outlive Disconnect and credential cleanup
- [#137444](https://github.com/openclaw/openclaw/issues/137444) Slack outbound reply silently dropped after successful agent turn (no error logged)
- [#119869](https://github.com/openclaw/openclaw/issues/119869) [Bug]: restored requester-settle wakes start before Gateway request scope and create a retry storm
- [#137409](https://github.com/openclaw/openclaw/issues/137409) [Bug]: Completion permission recovery suggests an unsupported profile destination
- [#137404](https://github.com/openclaw/openclaw/issues/137404) Android handshake can send before its WebSocket is published
- [#137111](https://github.com/openclaw/openclaw/issues/137111) Android history-load completion cancels new-turn auto-scroll
- [#137039](https://github.com/openclaw/openclaw/issues/137039) Control UI hides concrete locked model behind Codex ownership label
- [#132006](https://github.com/openclaw/openclaw/issues/132006) Mobile session topbar becomes crowded when board modes are available
- [#132031](https://github.com/openclaw/openclaw/issues/132031) fix(ios): report session mutation failures
- [#134155](https://github.com/openclaw/openclaw/issues/134155) [Bug]: Split-view transcript fade uses the normal chat surface color
- [#136326](https://github.com/openclaw/openclaw/issues/136326) [Bug]: backup fails for Nix-managed absolute config symlink
- [#137339](https://github.com/openclaw/openclaw/issues/137339) [Bug]: QA implicit message targets lose conversation kind
- [#137345](https://github.com/openclaw/openclaw/issues/137345) [Bug]: Doctor Control UI repair commands use the calling directory
- [#122234](https://github.com/openclaw/openclaw/issues/122234) A hung embedded model call blocks the gateway event loop, not just its own session
- [#137245](https://github.com/openclaw/openclaw/issues/137245) Private Slack QA leaks plugin dependencies into root dist
- [#136940](https://github.com/openclaw/openclaw/issues/136940) [Bug]: macOS primary gateway changes leave secondary dashboards on stale routes
- [#112592](https://github.com/openclaw/openclaw/issues/112592) "webchat" sentinel overloads the browser UI surface and the internal event bus — internal events masquerade as a nonexistent surface
- [#122609](https://github.com/openclaw/openclaw/issues/122609) Stable 2026.7.1-2 lacks merged Codex lease-safe cleanup fix, causing post-turn CPU window
- [#137060](https://github.com/openclaw/openclaw/issues/137060) Control UI duplicates streamed messages 3x while thinking is visible (2026.8.1)
- [#137174](https://github.com/openclaw/openclaw/issues/137174) [Bug]: Gated tools still recommend unavailable companion tools
- [#137156](https://github.com/openclaw/openclaw/issues/137156) [Bug]: Memory watcher warning recommends a rejected configuration key
- [#137032](https://github.com/openclaw/openclaw/issues/137032) [Docs Bug]: source anchor audit disagrees with published section targets
- [#131743](https://github.com/openclaw/openclaw/issues/131743) [Bug]: memory-core embeds/reindexes in the background even when the memory plugin slot points elsewhere, wasting embedding-provider spend
- [#134499](https://github.com/openclaw/openclaw/issues/134499) Subagent announce wake drops transcript-commit gate and can run on stale context
- [#137239](https://github.com/openclaw/openclaw/issues/137239) [Bug]: Forwarding Discord message as a DM loses the forwarded message body
- [#126369](https://github.com/openclaw/openclaw/issues/126369) Accept `skills-sh` owner/repo/slug and git install when SKILL.md is in a subdirectory
- [#121293](https://github.com/openclaw/openclaw/issues/121293) [Bug]: Image understanding (media-understanding) fails fleet-wide with "Image understanding requires agentDir"
- [#124521](https://github.com/openclaw/openclaw/issues/124521) Browser snapshot hardcoded 20s timeout (PR #75702 fix) not in npm openclaw@2026.7.1-2 dist — release pipeline skips merged PR
- [#136818](https://github.com/openclaw/openclaw/issues/136818) Session tools lose role-aware visibility and need generalized bulk patch targets
- [#136576](https://github.com/openclaw/openclaw/issues/136576) [Bug]: macOS app advertises retired Tailscale /ui/ dashboard path
- [#136881](https://github.com/openclaw/openclaw/issues/136881) [Bug]: published tool-plugin declarations export undeclared __exportAll
- [#137051](https://github.com/openclaw/openclaw/issues/137051) [Bug]: Native iOS 2026.8.10 Skill Workshop apply omits expectedRevisionHash
- [#135668](https://github.com/openclaw/openclaw/issues/135668) cliAgents runtime: native Claude Code AskUserQuestion tool not bridged to chat channels (Telegram/etc), session appears stuck
- [#136954](https://github.com/openclaw/openclaw/issues/136954) [Bug]: Control UI deletions omit required array-replacement intent
- [#137650](https://github.com/openclaw/openclaw/issues/137650) [Bug]: sessions.compact fails with UNAVAILABLE after switching the default model to an OpenAI model — codex harness resolved from the new default while the session still carries the previous provider's model
- [#136617](https://github.com/openclaw/openclaw/issues/136617) Apple Watch: persist companion chat admission and reply receipts across app restarts
- [#137625](https://github.com/openclaw/openclaw/issues/137625) [Bug]: /models chat picker ignores plugin-registered catalog for synthetic-auth providers
- [#137605](https://github.com/openclaw/openclaw/issues/137605) __auth_probe_only__
- [#137573](https://github.com/openclaw/openclaw/issues/137573) [Bug]: `cron get` / `cron runs` reject `--json` (list/show accept it) — scripted JSON reads exit 1 with empty stdout
- [#137572](https://github.com/openclaw/openclaw/issues/137572) [Bug]: Telegram ingress spool retry cap is not enforced — dead-letter predicate ANDs "attempt >= 8" with a 24h age clause, logs advertise "/8"
- [#133642](https://github.com/openclaw/openclaw/issues/133642) [Bug]: Picker interactions use inconsistent visual feedback and motion
- [#131900](https://github.com/openclaw/openclaw/issues/131900) fix(media): retain generated artifacts when delivery fails
- [#131933](https://github.com/openclaw/openclaw/issues/131933) fix(ui): release queued sends from recorded idle state
- [#131927](https://github.com/openclaw/openclaw/issues/131927) fix(agent): use transport liveness for idle timeouts
- [#137549](https://github.com/openclaw/openclaw/issues/137549) Support GPT-6 Astra in the OpenAI plugin
- [#137553](https://github.com/openclaw/openclaw/issues/137553) Replies silently dropped / in-flight tool calls skipped despite queue mode followup; multiple delivery-loss mechanisms
- [#137514](https://github.com/openclaw/openclaw/issues/137514) [Bug]: Android replaces an in-flight operator connection during Gateway focus
- [#137520](https://github.com/openclaw/openclaw/issues/137520) Provider wrappers accepted by stable fail to compile after retry cleanup
- [#137516](https://github.com/openclaw/openclaw/issues/137516) CLI `message send --channel <plugin channel>` fails with "Unknown channel" in 2026.8.1 (request-scoped plugin registry not consulted by `resolveAvailableKnownChannel`)
- [#137509](https://github.com/openclaw/openclaw/issues/137509) Plugin SDK rejects positional CodeRegion inputs accepted by stable
- [#122496](https://github.com/openclaw/openclaw/issues/122496) [Bug]: beta.1 YAML frontmatter parser regression — workspace skills with colons in field values silently dropped
- [#137496](https://github.com/openclaw/openclaw/issues/137496) [Bug]: Skill Workshop lifecycle approvals always fail under approvalPolicy=pending — requireApproval never sets pluginId
- [#137499](https://github.com/openclaw/openclaw/issues/137499) WebChat duplicates captions when compact media mirrors are finalized
- [#137466](https://github.com/openclaw/openclaw/issues/137466) [BUG] web_search: 422 SUBSCRIPTION_TOKEN_INVALID when brave plugin uses a sec:-ref to kind: secret store entry (OpenClaw 2026.8.2)
- [#137478](https://github.com/openclaw/openclaw/issues/137478) Custom OpenAI-compatible providers never receive a native `tools` array — tool definitions arrive only as prompt-embedded text, so tool-capable models conclude they have no tools
- [#137477](https://github.com/openclaw/openclaw/issues/137477) TUI input: after pasting a multi-line prompt, Enter does not submit (injected \n / \r don't either)
- [#137011](https://github.com/openclaw/openclaw/issues/137011) [Feature]: fast-forward a replacement cloud worker's checkout to the pushed session branch
- [#137447](https://github.com/openclaw/openclaw/issues/137447) [Bug]: Backslash comments can make systemd services unstartable after metadata refresh
- [#137415](https://github.com/openclaw/openclaw/issues/137415) [internal] Request stable npm release of openclaw@>=2026.9.1 carrying 8c5442c0 (PR #135713) — #123331 (eefe8bdc) is already in v2026.8.2
- [#137349](https://github.com/openclaw/openclaw/issues/137349) Discord realtime voice can attribute delayed transcripts to another speaker
- [#137380](https://github.com/openclaw/openclaw/issues/137380) [Bug]: QA evidence drops structured RTT provenance
- [#137410](https://github.com/openclaw/openclaw/issues/137410) [Feature]: Model selection dropdown for fallback.
- [#137407](https://github.com/openclaw/openclaw/issues/137407) TUI status stuck at "running • Xm Ys" forever after gateway restart aborts an in-flight turn (session forked, old record never finalized)
- [#137397](https://github.com/openclaw/openclaw/issues/137397) [Bug]: Typing indicator lapses mid-turn during tool-call work; typingTtlMs is plumbed but never supplied
- [#137395](https://github.com/openclaw/openclaw/issues/137395) ask_user question card never delivered to Telegram, silently times out
- [#137316](https://github.com/openclaw/openclaw/issues/137316) [Bug]: Control UI sidebar header controls misaligned after the + button lost its border
- [#137379](https://github.com/openclaw/openclaw/issues/137379) MCP tool listing timed out after 1500ms — hardcoded timeout too tight for large MCP servers
- [#137145](https://github.com/openclaw/openclaw/issues/137145) ChatGPT SSE drops HTTP status and ignores Retry-After pacing
- [#137369](https://github.com/openclaw/openclaw/issues/137369) [Bug]: OpenClaw Control web UI renders the same agent interim output three times
- [#125477](https://github.com/openclaw/openclaw/issues/125477) [Bug]: ChatGPT Responses WebSocket 1006 after initial event loses transport diagnostics
- [#137363](https://github.com/openclaw/openclaw/issues/137363) Control UI (WebChat): pre-tool assistant commentary text renders 2-3x - streamed segment itemId vs committed message id not deduplicated
- [#123319](https://github.com/openclaw/openclaw/issues/123319) [Bug]: failed update leaves managed gateway deliberately stopped after successful rollback ("could not prove a runnable installation") — full fleet outage under launchd KeepAlive
- [#137356](https://github.com/openclaw/openclaw/issues/137356) agy backend never uses native session resume, causing routine watchdog kills on long-lived sessions
- [#137221](https://github.com/openclaw/openclaw/issues/137221) [Feature]: Bundle a memory operations skill for the default memory-core path
- [#137319](https://github.com/openclaw/openclaw/issues/137319) web_search (Codex native) not projected into --session isolated cron/automation runs
- [#137304](https://github.com/openclaw/openclaw/issues/137304) mcp.servers.<name> (stdio): no env/SecretRef support for args, so secrets end up in plaintext
- [#137292](https://github.com/openclaw/openclaw/issues/137292) Control UI WebChat 2026.8.2: in-turn assistant comments rendered 3x as duplicate bubbles
- [#137277](https://github.com/openclaw/openclaw/issues/137277) [Bug]: Feishu inbound messages fail to dispatch to agent on OpenClaw 2026.8.2 (runDispatchLifecycle error)
- [#137261](https://github.com/openclaw/openclaw/issues/137261) Builtin memory index is not refreshed by searches; idle agents serve stale results (2026.8.1, unchanged in 2026.8.2)
- [#130761](https://github.com/openclaw/openclaw/issues/130761) [Bug]: backup create loses legacy audit migration lease on beta.3, even with Gateway stopped
- [#131573](https://github.com/openclaw/openclaw/issues/131573) [Bug]: Implicit rollover renames a transcript while its session's reply run is still active (legacy pending-reset tombstones)
- [#132262](https://github.com/openclaw/openclaw/issues/132262) fix(acp): abort cause (errorMessage) is silently dropped, IDE shows a bare cancel
- [#137103](https://github.com/openclaw/openclaw/issues/137103) [Bug]: Session Observer model picker stays empty after an initial catalog failure
- [#137232](https://github.com/openclaw/openclaw/issues/137232) Voice channel: confirmation token superseded by agent's own confirmation prompt, blocking all exec/write actions
- [#137231](https://github.com/openclaw/openclaw/issues/137231) [Bug]: Add a navigation link to the Tasks page
- [#137226](https://github.com/openclaw/openclaw/issues/137226) Webchat renders replies 2-3x when streaming falls back to segment delivery (2026.8.2)
- [#134460](https://github.com/openclaw/openclaw/issues/134460) [Bug]: Prepared catalog drops native Codex readiness across worker boundary
- [#136783](https://github.com/openclaw/openclaw/issues/136783) [Bug]: Unreadable cached skill aborts node-worker follow-up without path diagnostics
- [#137218](https://github.com/openclaw/openclaw/issues/137218) [Feature]: Add Control UI cancellation for active cron runs
- [#137208](https://github.com/openclaw/openclaw/issues/137208) Telegram spool: update that COMPLETED is redelivered as a fresh inbound after losing claim ownership → duplicate agent turn
- [#137204](https://github.com/openclaw/openclaw/issues/137204) [Feature]: Auto/Plan/Action buttons settings.
- [#137164](https://github.com/openclaw/openclaw/issues/137164) [Feature]: Bundle a first-party Control UI operations skill
- [#137179](https://github.com/openclaw/openclaw/issues/137179) [Bug]: CLI message send omits wecom channel on 2026.8.1 despite gateway-mode plugin (Unknown channel "wecom")
- [#137121](https://github.com/openclaw/openclaw/issues/137121) [Bug]: Codex conversations fail after native thread deletion
- [#137135](https://github.com/openclaw/openclaw/issues/137135) [2026.8.1 UI regression] Automation prompt editor and Skill Workshop missing
- [#137153](https://github.com/openclaw/openclaw/issues/137153) [Bug]: Missing plugin payload plus a persisted install record can block gateway readiness
- [#137155](https://github.com/openclaw/openclaw/issues/137155) [Bug]: Busy scheduled heartbeat wakes are retried instead of settling as terminal skipped outcomes
- [#137154](https://github.com/openclaw/openclaw/issues/137154) [Bug]: Doctor reports managed-gateway restart failure seconds before the gateway becomes ready
- [#136707](https://github.com/openclaw/openclaw/issues/136707) [Bug]: Control UI media display 401s for Tailscale-Serve operator sessions under token auth: hello carries no deviceToken
- [#135645](https://github.com/openclaw/openclaw/issues/135645) Control UI human mentions with a temporary Inbox
- [#136963](https://github.com/openclaw/openclaw/issues/136963) Deep promotion never fires when a daily claim is recorded before its first recall
- [#137026](https://github.com/openclaw/openclaw/issues/137026) iMessage: automatically recover an unresponsive private bridge after a confirmed timeout
- [#136945](https://github.com/openclaw/openclaw/issues/136945) Readable person Activity URLs
- [#137099](https://github.com/openclaw/openclaw/issues/137099) Child completion handoff remains stranded after decorated or failed status delivery
- [#137079](https://github.com/openclaw/openclaw/issues/137079) Codex rejects valid empty native tool catalogs
- [#136797](https://github.com/openclaw/openclaw/issues/136797) Issue on docs

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 240,839 · **Open issues:** 39,141 · **Last push:** <1h ago

On September 4, 2026, there were no new releases or merged pull requests for the Hermes Agent. A variety of new issues were opened, with notable ones including a bug (#102486) reporting that the restart-safe cron worker dispatch fails under systemd 249, and another bug (#102194) indicating that the CLI path fails to persist the api_content sidecar, causing prompt cache misses on new turns. Additional issues include a request for a System Tray app for Hermes Agent status (#102544) and a bug related to the handling of non-ASCII page content in browser_exec on Windows (#102500). Overall, the day appeared routine in terms of maintenance, yet these newly reported issues highlight ongoing challenges within the project.

#### 🐛 New Issues
- [#102486](https://github.com/NousResearch/hermes-agent/issues/102486) [Bug]: restart-safe cron worker dispatch fails closed on systemd 249 — OOMPolicy=kill rejected as unknown assignment `type/bug` `comp/gateway` `comp/tools` `comp/cron` 💬3
- [#102504](https://github.com/NousResearch/hermes-agent/issues/102504) Shell hooks from config.yaml never register in `hermes serve` (desktop backend) — _prepare_agent_startup skips the "serve" command `type/bug` `duplicate` `comp/cli` `area/config` 💬2
- [#101925](https://github.com/NousResearch/hermes-agent/issues/101925) auxiliary.vision ignores keyless opencode-free provider (401) while chat works `type/bug` `duplicate` `comp/plugins` `tool/vision` 💬2
- [#102511](https://github.com/NousResearch/hermes-agent/issues/102511) [Bug]: `hermes cron run` can leave agent-backed executions in unknown state after caller timeout `type/bug` `comp/cli` `comp/cron` `P2` 💬1
- [#102281](https://github.com/NousResearch/hermes-agent/issues/102281) Desktop: large bot roster can't open bots after launch — spawn cap (#100985) starves foreground opens `type/bug` `P2` `comp/desktop` 💬2
- [#102194](https://github.com/NousResearch/hermes-agent/issues/102194) [Bug]: CLI path never persists api_content sidecar → injected <memory-context>/tool-result decorations dropped at turn boundary → first API call of every new turn misses prompt cache `type/bug` `comp/agent` `tool/memory` `P0` 💬2
- [#102554](https://github.com/NousResearch/hermes-agent/issues/102554) Discord adapter never clears fatal status on reconnect — dashboard shows stale "Discord startup failed" indefinitely `type/bug` `comp/gateway` `comp/plugins` `platform/discord` 💬1
- [#102552](https://github.com/NousResearch/hermes-agent/issues/102552) Custom OpenAI-compatible provider (OmniRoute): duplicated models in picker and no way to hide upstream-hidden models `type/feature` `comp/cli` `area/config` `P3` 💬1
- [#102544](https://github.com/NousResearch/hermes-agent/issues/102544) Feature Request: System Tray App for Hermes Agent Status `type/feature` `P3` `comp/desktop` 💬1
- [#102526](https://github.com/NousResearch/hermes-agent/issues/102526) Desktop: launch backend's session store binds to another profile's state.db via HERMES_HOME override race (default bot opens wrong profile's chat) `type/bug` `comp/tui` `comp/cron` `P1` 💬1
- [#102499](https://github.com/NousResearch/hermes-agent/issues/102499) Feature: integrate Google Antigravity (AGY) OAuth / subscription session as model provider `duplicate` `type/feature` `comp/plugins` `provider/gemini` 💬1
- [#102500](https://github.com/NousResearch/hermes-agent/issues/102500) Windows: browser_exec silently returns null output on non-ASCII page content (cp1252 decode crash in subprocess reader thread) `type/bug` `duplicate` `tool/browser` `P2` 💬1
- [#102494](https://github.com/NousResearch/hermes-agent/issues/102494) [Bug]: vLLM 'max_tokens cannot be greater than max_model_len=max_total_tokens' 400 misparsed as prompt-too-long — sessions die with 'Cannot compress further' on custom-provider switch `type/bug` `comp/agent` `area/config` `P2` 💬1
- [#102555](https://github.com/NousResearch/hermes-agent/issues/102555) [Bug] hermes doctor reports cryptic and unlear messages under External Tools section. `type/bug` `comp/cli` `P3`
- [#102563](https://github.com/NousResearch/hermes-agent/issues/102563) [Feature]: run and resolve both npm-check AND npm outdated before every release
- [#102545](https://github.com/NousResearch/hermes-agent/issues/102545) [Bug]: post-hoc kanban block (--kind capability, sticky-blocked event) auto-unblocked after gateway restart with no attributed caller `type/bug` `comp/gateway` `comp/cron` `P3`
- [#102535](https://github.com/NousResearch/hermes-agent/issues/102535) Meta provider ignores `muse login` subscription, always bills pay-as-you-go `type/feature` `comp/plugins` `area/auth` `P3`
- [#102531](https://github.com/NousResearch/hermes-agent/issues/102531) Accidental connector test — please ignore `invalid` `P3`
- [#102540](https://github.com/NousResearch/hermes-agent/issues/102540) [Bug] hermes update take a super long time to complete, and messages are not helpful. `type/bug` `comp/cli` `P3` `needs-repro`
- [#102514](https://github.com/NousResearch/hermes-agent/issues/102514) [Feature]: Add a separate timeout for /review `type/feature` `comp/agent` `tool/delegate` `area/config`
- [#102517](https://github.com/NousResearch/hermes-agent/issues/102517) 402 with Retry-After is classified as terminal billing exhaustion, aborting unattended runs `type/bug` `comp/agent` `comp/cron` `provider/openrouter`
- [#102495](https://github.com/NousResearch/hermes-agent/issues/102495) skills_guard: plugin-root exemption keys off plugin.json presence alone (PR #102331 follow-up) — require the agent-plugins-v1 $schema `type/security` `comp/plugins` `tool/skills` `P3`
- [#102497](https://github.com/NousResearch/hermes-agent/issues/102497) Desktop: display bot avatar / icon in workspace session tabs for quick visual identification `type/feature` `P3` `comp/desktop`
- [#102498](https://github.com/NousResearch/hermes-agent/issues/102498) [Bug]: Desktop profile switch triggers N-backend spawn storm and slot starvation due to unwhitelisted GET /api/sessions routing `type/bug` `P2` `comp/desktop` `area/sessions`
- [#102488](https://github.com/NousResearch/hermes-agent/issues/102488) Async delegation results need an originating turn generation `type/feature` `comp/agent` `tool/delegate` `P3`
- [#102473](https://github.com/NousResearch/hermes-agent/issues/102473) Bundled skill `software-development/github`: 6 reference files trip the `exfil_curl` context-scope scanner and are silently dropped from the prompt on every fresh v0.21.0 install `type/bug` `comp/tools` `tool/skills` `P2`
- [#102478](https://github.com/NousResearch/hermes-agent/issues/102478) [Feature]: Bot Cloning Between Local and Remote Gateways `type/feature` `comp/gateway` `P3` `comp/desktop`

#### 🔒 Closed Issues
- [#102544](https://github.com/NousResearch/hermes-agent/issues/102544) Feature Request: System Tray App for Hermes Agent Status
- [#102531](https://github.com/NousResearch/hermes-agent/issues/102531) Accidental connector test — please ignore

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 90,914 · **Open issues:** 7,505 · **Last push:** 1h ago

On September 4, 2026, there were no new releases for vLLM, but several significant pull requests were merged. Key enhancements included the support for TLS in the Rust frontend (PR #54999), optimizations for the MiniMax-M3 decode indexer in ROCm (PR #54682), and a bug fix addressing FP8 PLE loading issues in mixed ModelOpt checkpoints (PR #54882). Among the new issues, a particularly concerning bug related to memory profiling was reported (issue #55169), highlighting occasional gross errors that could impact performance. Overall, the day was marked by routine maintenance, but the additions and bug fixes demonstrate ongoing efforts to refine and enhance the vLLM framework.

#### ✅ Merged PRs
- [#54557](https://github.com/vllm-project/vllm/pull/54557) [warmup] overlap renderer warmup and engine core initialization
- [#54883](https://github.com/vllm-project/vllm/pull/54883) [Rust Frontend] Report reasoning tokens in chat completion usage
- [#52826](https://github.com/vllm-project/vllm/pull/52826) [ROCm] Bump AITER to 0.1.21.post1
- [#55020](https://github.com/vllm-project/vllm/pull/55020) [Perf] Prefetch the weight before the PDL wait in fused_q_kv_rmsnorm
- [#54896](https://github.com/vllm-project/vllm/pull/54896) [Perf][Kimi-K3] Cut MLA decode concat/cache epilogue latency
- [#54999](https://github.com/vllm-project/vllm/pull/54999) [Rust Frontend] Add support for TLS in render server
- [#50314](https://github.com/vllm-project/vllm/pull/50314) [CI] Zen5 image build
- [#54379](https://github.com/vllm-project/vllm/pull/54379) [CI] Avoid logging test server environment values
- [#54682](https://github.com/vllm-project/vllm/pull/54682) [ROCm][Perf] Optimize MiniMax-M3 decode indexer and top-k
- [#45091](https://github.com/vllm-project/vllm/pull/45091) Fix DeepSeek V4 FlashMLA auto KV cache dtype
- [#54837](https://github.com/vllm-project/vllm/pull/54837) [Rust Frontend] Support `--lora-modules` for static adapter loading
- [#54884](https://github.com/vllm-project/vllm/pull/54884) [Rust Frontend] Use token-attributed text in reasoning and unified parsers
- [#54845](https://github.com/vllm-project/vllm/pull/54845) [ROCm][Perf] Add low-M FP32 router GEMM for gfx950
- [#54856](https://github.com/vllm-project/vllm/pull/54856) [Model Runner V2][Spec Decode] Skip DP sync for all speculator uniform decodes
- [#51415](https://github.com/vllm-project/vllm/pull/51415) [Fusion] Manual `ActivationQuantFusionPass` initial application
- [#54882](https://github.com/vllm-project/vllm/pull/54882) [Bugfix][Model] Fix FP8 PLE loading in mixed ModelOpt checkpoints
- [#53906](https://github.com/vllm-project/vllm/pull/53906) [Model] add GLM-5.3-Flash support
- [#54606](https://github.com/vllm-project/vllm/pull/54606) [Kernel] Enable Kimi-K3 SiTU on the CuteDSL MoE backend and the SM107 low-latency GEMM plan
- [#52807](https://github.com/vllm-project/vllm/pull/52807) [Bugfix][KV Offload] Do not let a recurrent group's unhashed block truncate the load boundary
- [#54325](https://github.com/vllm-project/vllm/pull/54325) [Bugfix][KV Connector] Populate SimpleCPUOffload BlockStored metadata
- [#55041](https://github.com/vllm-project/vllm/pull/55041) [Core] Deprecate "all" mamba cache mode
- [#54651](https://github.com/vllm-project/vllm/pull/54651) [Core] Triton kernel for small-batch top-p only masking
- [#54879](https://github.com/vllm-project/vllm/pull/54879) [Bugfix][KV Connector] Safely fill circular buffers in DecodeBench
- [#55054](https://github.com/vllm-project/vllm/pull/55054) Optimize PLE MTP metadata transfers
- [#54982](https://github.com/vllm-project/vllm/pull/54982) feat: Add support for reasoning_token_count to reasoning parser
- [#55083](https://github.com/vllm-project/vllm/pull/55083) [Bugfix] Retain vocab embeddings during replacement
- [#55062](https://github.com/vllm-project/vllm/pull/55062) [Perf] Accumulate Conformer attention scores with baddbmm
- [#55111](https://github.com/vllm-project/vllm/pull/55111) [Bugfix] Account for PCP in multi-node world size validation
- [#54969](https://github.com/vllm-project/vllm/pull/54969) [Bugfix][Model] Enable torch.compile for StableLM
- [#54251](https://github.com/vllm-project/vllm/pull/54251) [Kernel] Warm up Qwen GDN gated RMSNorm
- [#55094](https://github.com/vllm-project/vllm/pull/55094) [CI][AMD] Avoid expandable segments in LoRA TP tests
- [#53905](https://github.com/vllm-project/vllm/pull/53905) [CI] Bump Transformers version to 5.16.1
- [#55057](https://github.com/vllm-project/vllm/pull/55057) [ROCm][CI] Add MiniMax reduce RMS kernel coverage
- [#55063](https://github.com/vllm-project/vllm/pull/55063) [Model] Add K2-Horizon model support
- [#52923](https://github.com/vllm-project/vllm/pull/52923) [Bugfix] Wait for offload keys before storing chunks
- [#54962](https://github.com/vllm-project/vllm/pull/54962) [Bugfix][Core] Wait for the previous PP tensor sends before the next forward pass
- [#51445](https://github.com/vllm-project/vllm/pull/51445) [Frontend] Use server-generated keys for late-interaction query caches
- [#54994](https://github.com/vllm-project/vllm/pull/54994) [Bugfix][Multimodal] Handle prefix-covered items in SHM worker cache

#### 🐛 New Issues
- [#55169](https://github.com/vllm-project/vllm/issues/55169) [Bug]: occasional gross error in memory profiling `bug` 💬4
- [#55152](https://github.com/vllm-project/vllm/issues/55152) [Bug]: guidance backend rejects tool-calling structural tags (KeyError: 'triggers') — strict/required/named tool_choice broken `structured-output` `tool-calling` 💬3
- [#55139](https://github.com/vllm-project/vllm/issues/55139) [Bug]: PP performance drop when MRV2 is set by default. `bug` 💬3
- [#55050](https://github.com/vllm-project/vllm/issues/55050) [Bug]: encoder prompt embeddings trigger a compiled AttributeError `bug` 💬3
- [#55117](https://github.com/vllm-project/vllm/issues/55117) [Feature]: Let `vllm launch render` / `--tokens-only` override an inherited `VLLM_ENABLE_SCALE_OUT_ENDPOINTS=0` instead of failing startup `feature request` 💬2
- [#55080](https://github.com/vllm-project/vllm/issues/55080) [Bug]: tool_choice='none' silently deletes tool-call-shaped content `bug` `tool-calling` 💬3
- [#55132](https://github.com/vllm-project/vllm/issues/55132) [Bug][ROCm] Sparse-MLA indexer reserves a 32 GiB decode-logits workspace during profiling (max_num_batched_tokens rows), costing 21 % of the KV cache `rocm` 💬2
- [#55261](https://github.com/vllm-project/vllm/issues/55261) [Feature]: Benchmark and integrate CUTLASS Lamport GEMM + AllReduce into vLLM `feature request` `nvidia` `kimi` 💬1
- [#55250](https://github.com/vllm-project/vllm/issues/55250) [Bug]: DFlash2 draft gets 0% acceptance with --dtype float16 on XPU (bf16 works) — Qwen3.8-27B + incoai/Qwen3.8-27B-DFlash2 `intel-gpu` `quantization` 💬1
- [#55205](https://github.com/vllm-project/vllm/issues/55205) [Bug]: Qwen3MoeSparseMoeBlock rejects its documented 1D input `bug` 💬1
- [#55179](https://github.com/vllm-project/vllm/issues/55179) [Performance]: P2P tier control path stalls behind busy source model steps
- [#55155](https://github.com/vllm-project/vllm/issues/55155) [Feature]: Restart Lifecycle Hooks for KV Transfer Connectors (NIXL) `feature request` `kv-connector` 💬1
- [#55131](https://github.com/vllm-project/vllm/issues/55131) Batch-invariant matmul is not actually batch-invariant, and TF32 causes precision degradation `bug` 💬1
- [#55114](https://github.com/vllm-project/vllm/issues/55114) [Bug]: Mooncake bootstrap registration timeout can leave producer startup blocked indefinitely 💬1
- [#55049](https://github.com/vllm-project/vllm/issues/55049) [Bug]: prefix caching and KV-scale calculation assert on encoder models `bug` `kv-cache-manager` 💬1
- [#55052](https://github.com/vllm-project/vllm/issues/55052) [Bug]: multimodal mm_encoder_only conversion fails across model families `bug` `multi-modality` 💬1
- [#55082](https://github.com/vllm-project/vllm/issues/55082) [Bug]: step3 streaming tool parser returns empty arguments unless each token arrives in its own delta `tool-calling` 💬1
- [#55048](https://github.com/vllm-project/vllm/issues/55048) [Bug]: encoder attention rejects quantized KV cache only at request time `bug` `quantization` 💬1
- [#55259](https://github.com/vllm-project/vllm/issues/55259) [RFC]: Optional native startup self-benchmarking for forward-pass performance characterization `quantization`
- [#55238](https://github.com/vllm-project/vllm/issues/55238) [Bug]: gemma-4-26B-A4B-it produces different greedy output with CUDA graphs than with enforce_eager `bug`
- [#55221](https://github.com/vllm-project/vllm/issues/55221) [Bug]: GLM-5.3-Flash: fp8 KV cache rejected by SM90 sparse MLA plan(), and the indexer prefill workspace is sized in tokens `glm`
- [#55196](https://github.com/vllm-project/vllm/issues/55196) [RFC]: fp8 KV cache gives little to no memory benefit on Mamba/GDN hybrid models `quantization`
- [#55208](https://github.com/vllm-project/vllm/issues/55208) [Bug]: Heterogeneous TP can corrupt Mamba2 conv state in disaggregated serving `bug` `kv-connector`
- [#55198](https://github.com/vllm-project/vllm/issues/55198) [Bug]: TensorizerLoader skips post-load weight processing `bug` `quantization`
- [#55197](https://github.com/vllm-project/vllm/issues/55197) [Bug]: Offline LLM.chat() can add BOS twice for multimodal models `bug` `multi-modality`
- [#55195](https://github.com/vllm-project/vllm/issues/55195) [Bug]: Reasoning parsers mishandle markers in multi-token streaming deltas `bug` `tool-calling`
- [#55189](https://github.com/vllm-project/vllm/issues/55189) [Bug]: VLLM_USE_MODELSCOPE path conversion uses stale cache layout — multimodal processor loading crashes with HFValidationError `multi-modality`
- [#55181](https://github.com/vllm-project/vllm/issues/55181) [Bug]: P2P NIXL transfer exceptions leave requests pending until client timeout `kv-connector`
- [#55207](https://github.com/vllm-project/vllm/issues/55207) [RFC]: Add QoL improvements to profiler `RFC`
- [#55204](https://github.com/vllm-project/vllm/issues/55204) [Bug]: FourierRotaryEmbedding pads sin with 1 and corrupts unrotated channels `bug`
- [#55193](https://github.com/vllm-project/vllm/issues/55193) [Bug]: LoRA adapter targeting no configured modules silently serves the base model `bug`
- [#55158](https://github.com/vllm-project/vllm/issues/55158) [Bug]: MoE LoRA one-shot path rejects max_lora_rank=256 although LoRAConfig accepts it
- [#55140](https://github.com/vllm-project/vllm/issues/55140) [Bug] HunyuanOCR (Transformers backend) crashes on startup: "Expected 4 multimodal RoPE channels, got position_ids with shape (3, 1, N)" `multi-modality`
- [#55125](https://github.com/vllm-project/vllm/issues/55125) [Bug]: --cc.<path>=<value> silently rejected; only -cc short alias works
- [#55129](https://github.com/vllm-project/vllm/issues/55129) [Feature][CPU][Arm]: Add SME1 (FEAT_SME) dispatch for KleidiAI/QMX kernels `cpu` `quantization`
- [#55087](https://github.com/vllm-project/vllm/issues/55087) [Bug]: GLM-5.3 KDA keeps stale merged convolution weights after refit `glm`
- [#55051](https://github.com/vllm-project/vllm/issues/55051) [Bug]: multimodal mm_encoder_only conversion fails across model families `bug` `multi-modality`
- [#55046](https://github.com/vllm-project/vllm/issues/55046) [Bug]: embedding cache dtype combination finds no valid CUDA attention backend `bug`

#### 🔒 Closed Issues
- [#23444](https://github.com/vllm-project/vllm/issues/23444) [Bug]: Hitting close to 100% cache causes spike in waiting and kills throughput
- [#21014](https://github.com/vllm-project/vllm/issues/21014) [Feature]: Add Triton implementation of NVFP4 GEMM
- [#48435](https://github.com/vllm-project/vllm/issues/48435) [Bug/Perf]: hybrid-SWA prefix caching collapses to zero for ALL requests in multi-session round-robin at ~25% pool occupancy (Gemma-4-31B; eager-freed SWA tails recycled tail-first)
- [#28243](https://github.com/vllm-project/vllm/issues/28243) [RFC]: Externally managed elastic EP (decouple from Ray backend)
- [#50281](https://github.com/vllm-project/vllm/issues/50281) [RFC]: Per-layer online quantization configuration
- [#28163](https://github.com/vllm-project/vllm/issues/28163) [RFC]: SageMaker Day-0 Compatibility with vLLM
- [#52170](https://github.com/vllm-project/vllm/issues/52170) OffloadingConnector AssertionError in _build_store_jobs under MultiConnector with high concurrency multi-turn
- [#54667](https://github.com/vllm-project/vllm/issues/54667) [Bug]: zero pipeline/prefill context parallel size selects no executor backend
- [#54836](https://github.com/vllm-project/vllm/issues/54836) [Feature][Rust Frontend]: Support `--lora-modules` for static adapter loading
- [#55051](https://github.com/vllm-project/vllm/issues/55051) [Bug]: multimodal mm_encoder_only conversion fails across model families

### SGLang (`sgl-project/sglang`)

**Stars:** 34,077 · **Open issues:** 5,145 · **Last push:** <1h ago

On September 4, 2026, SGLang did not release any new versions but made significant progress with several merged pull requests. Key changes included the improvement of Lark CI cards for better visibility and support for CUDA CI status notifications, enhancing overall system monitoring. Noteworthy fixes involved the rectification of idle tracking in buffer-mode and adjustments to the HiCache metrics pipeline, which should improve resource efficiency. Among newly reported issues, a bug was noted regarding client disconnects during streaming, resulting in ongoing server-side generation that never notifies the scheduler, highlighting a potential area for urgent attention.

#### ✅ Merged PRs
- [#37874](https://github.com/sgl-project/sglang/pull/37874) [PD] Bound transfer engine init with `SGLANG_DISAGGREGATION_ENGINE_INIT_TIMEOUT`
- [#37285](https://github.com/sgl-project/sglang/pull/37285) state_capturer: pin the exact host-cache size via mmap + cudaHostRegister
- [#37884](https://github.com/sgl-project/sglang/pull/37884) [CI] Improve Lark CI cards: structured layout, PDT timestamps, slow-only queue digest
- [#37883](https://github.com/sgl-project/sglang/pull/37883) [HiCache] Count hit allocations and in-flight backups in the buffer pipeline idle check
- [#37503](https://github.com/sgl-project/sglang/pull/37503) [HiCache] L3 storage prefetch lifecycle metrics and cross-tier attribution fixes
- [#37881](https://github.com/sgl-project/sglang/pull/37881) [CI] Add Lark notifications for CUDA CI status, runner health, and queue time
- [#37567](https://github.com/sgl-project/sglang/pull/37567) Fix buffer-mode idle tracking and VLM memory sizing
- [#37454](https://github.com/sgl-project/sglang/pull/37454) [PD] Gate deferred decode KV release on backend capability
- [#37629](https://github.com/sgl-project/sglang/pull/37629) [AMD] [GLM-5.3-Flash Day 0] Enable FP8 and Quark MXFP4 MoE on gfx950
- [#37880](https://github.com/sgl-project/sglang/pull/37880) Revert "[AMD] [GLM-5.3-Flash Day 0] Enable FP8 and Quark MXFP4 MoE on gfx950"
- [#37665](https://github.com/sgl-project/sglang/pull/37665) [CI] Add dspark + dsv4 e2e test
- [#37867](https://github.com/sgl-project/sglang/pull/37867) [Cherry-pick to release/v0.5.19] [AMD][CI] Correct MI355X Slurm exclude node (#37779)
- [#37552](https://github.com/sgl-project/sglang/pull/37552) [1/N] Quantization Refactor: remove dead code and dedup the FP4 marlin helpers
- [#37873](https://github.com/sgl-project/sglang/pull/37873) [Test] Allow top-k cutoff ties in `test_sampling_mask_matches_topk_logprobs`
- [#37866](https://github.com/sgl-project/sglang/pull/37866) [Cherry-pick to release/v0.5.19] [AMD][CI] Exclude unavailable MI355X nodes and skip 4N nightly (#37518)
- [#37865](https://github.com/sgl-project/sglang/pull/37865) [Cherry-pick to release/v0.5.19] [CI] Graceful teardown for the PD and HiSparse server fixtures (#37485)
- [#37864](https://github.com/sgl-project/sglang/pull/37864) [Cherry-pick to release/v0.5.19] [CI] Authenticate and retry git clones in install scripts (#37647)
- [#37863](https://github.com/sgl-project/sglang/pull/37863) [Cherry-pick to release/v0.5.19] [AMD] Fix nightly ROCm 7.0 image build: patch missing <optional> include in AITER topk kernel (#36216)
- [#37862](https://github.com/sgl-project/sglang/pull/37862) [Cherry-pick to release/v0.5.19] [AMD] Fix DSv4 draft extend taking the target compression path during prefill (#37713)
- [#37860](https://github.com/sgl-project/sglang/pull/37860) [Cherry-pick to release/v0.5.19] [ROCm] Define the DSA head-gate graph helpers on HIP (#37118)
- [#37859](https://github.com/sgl-project/sglang/pull/37859) [Cherry-pick to release/v0.5.19] Fix GPU kernel ordering and MXFP8 quantization dispatch (#37331)
- [#37858](https://github.com/sgl-project/sglang/pull/37858) [Cherry-pick to release/v0.5.19] [ROCm][Bugfix] Cap the DSA MQA-logits budget at AITER's buffer_store limit (#36960)
- [#37857](https://github.com/sgl-project/sglang/pull/37857) [Cherry-pick to release/v0.5.19] [AMD] Fix v4 topk issue (#37439)
- [#37856](https://github.com/sgl-project/sglang/pull/37856) [Cherry-pick to release/v0.5.19] [AMD] fix aiter cannot get heuristic kernel regression (#37438)
- [#37853](https://github.com/sgl-project/sglang/pull/37853) [Cherry-pick to release/v0.5.19] [Fix] DP attention: correct the decode->extend prefix off-by-one (#37505)
- [#37855](https://github.com/sgl-project/sglang/pull/37855) [Cherry-pick to release/v0.5.19] [AMD] Gate the aiter memory-reserve exemption behind an env var (#37242)
- [#37729](https://github.com/sgl-project/sglang/pull/37729) [mem_cache] Require page-aligned starts in `free_segment` and drop the boundary trim
- [#37788](https://github.com/sgl-project/sglang/pull/37788) [Docs] [BugFix] Sync --tool-call-parser and --reasoning-parser lists with the code
- [#37854](https://github.com/sgl-project/sglang/pull/37854) [Cherry-pick to release/v0.5.19] Converge the two SWA predicates, and stop conditioning the capture sink on the pool (#37550)
- [#37464](https://github.com/sgl-project/sglang/pull/37464) [HiCache] buffer mode: anchor-lock staged prefetches by default
- [#37502](https://github.com/sgl-project/sglang/pull/37502) [Scheduler] Count the parked chunked-prefill request in the busy mem check
- [#37737](https://github.com/sgl-project/sglang/pull/37737) [Cookbook] DeepSeek-V4 DGX Spark: v2 image + Flash Official NVFP4 and Flash Vision FP4 cells
- [#37381](https://github.com/sgl-project/sglang/pull/37381) [Unified Cache][5/N]: Integrate external linker mode end to end
- [#37849](https://github.com/sgl-project/sglang/pull/37849) Fix block-scale swizzling device placement
- [#36403](https://github.com/sgl-project/sglang/pull/36403) Support speculative decoding with unified SWA memory
- [#37844](https://github.com/sgl-project/sglang/pull/37844) [Cache] Forward fast prefix matching capability
- [#37731](https://github.com/sgl-project/sglang/pull/37731) [Router] Add composable scoring and eligibility policies
- [#37825](https://github.com/sgl-project/sglang/pull/37825) [Bugfix] Support K2 Horizon MoE without MoVA
- [#37266](https://github.com/sgl-project/sglang/pull/37266) [diffusion] MiniMax-H3: tiered AdaLN plan cache (pinned-host tier + per-plan LRU)
- [#37332](https://github.com/sgl-project/sglang/pull/37332) [Diffusion][minimax-h3] Add SM120 support for SubBlock sparse attention
- [#37760](https://github.com/sgl-project/sglang/pull/37760) [CI][NPU] Fix kimi_k2_6 16p in64k perf test and dsv4-flash testcases
- [#37616](https://github.com/sgl-project/sglang/pull/37616) [diffusion] loader: filter duplicate precision variants across custom loaders
- [#36735](https://github.com/sgl-project/sglang/pull/36735) [multimodal_gen] feat: support key masks on USPAttention's replicated-prefix path
- [#35922](https://github.com/sgl-project/sglang/pull/35922) [diffusion] feat: add maybe_record_function profiler spans for request phases
- [#37667](https://github.com/sgl-project/sglang/pull/37667) [Speculative Decoding] Add native UNO serving support
- [#37799](https://github.com/sgl-project/sglang/pull/37799) [NPU] [DOC] Refresh supported models and features on NPU
- [#37781](https://github.com/sgl-project/sglang/pull/37781) [AMD] Update kimi-k3 amd cookbook 0903
- [#37693](https://github.com/sgl-project/sglang/pull/37693) [Feature] Unified memory: support decode context parallelism for the trtllm_mla family
- [#37779](https://github.com/sgl-project/sglang/pull/37779) [AMD][CI] Correct MI355X Slurm exclude node
- [#37713](https://github.com/sgl-project/sglang/pull/37713) [AMD] Fix DSv4 draft extend taking the target compression path during prefill
- [#34187](https://github.com/sgl-project/sglang/pull/34187) [Kimi K3] Rework skipped-think fix as opt-in force_nonempty_content with streaming coverage
- [#33838](https://github.com/sgl-project/sglang/pull/33838) [AMD] Perf Kimi-K3 MoE optimization
- [#37623](https://github.com/sgl-project/sglang/pull/37623) fix(benchmark): support Glm4MoeLite in fused MoE tuner
- [#36617](https://github.com/sgl-project/sglang/pull/36617) fix test/manual/test_forward_split_prefill.py UT due to many refactors and design changes
- [#37660](https://github.com/sgl-project/sglang/pull/37660) [AMD] Fix FP4 indexer OOR
- [#37654](https://github.com/sgl-project/sglang/pull/37654) [Model] Add native IFM K2 Horizon serving support
- [#37723](https://github.com/sgl-project/sglang/pull/37723) [Docs] Update K2 Horizon MoE model names
- [#36349](https://github.com/sgl-project/sglang/pull/36349) [AMD][Diffusion] Migrate FlyDSL fused norm kernels to the v0.3.0 stable API
- [#37118](https://github.com/sgl-project/sglang/pull/37118) [ROCm] Define the DSA head-gate graph helpers on HIP
- [#35313](https://github.com/sgl-project/sglang/pull/35313) [CPU] Update base image to Ubuntu 26.04
- [#37675](https://github.com/sgl-project/sglang/pull/37675) [Fix] Broadcast PP dynamic-chunk profiling failures so every rank disables together
- [#37689](https://github.com/sgl-project/sglang/pull/37689) [CI] Accept t64-suffixed apt packages in the install skip check
- [#37655](https://github.com/sgl-project/sglang/pull/37655) docs: add K2 Horizon cookbook recipes and H200 results
- [#36384](https://github.com/sgl-project/sglang/pull/36384) [sglang-miles] Streamed LoRA weight updates: register RPC, session scope, LoRA stash
- [#37572](https://github.com/sgl-project/sglang/pull/37572) Modify KUBE_JOB_NAME to fix the problem of the string being too long
- [#37320](https://github.com/sgl-project/sglang/pull/37320) [Fix] Alpha-channel images and tool-result media ordering (port of #36507)
- [#37324](https://github.com/sgl-project/sglang/pull/37324) [Perf] Walk the radix tree by offset instead of re-slicing token storage (ported from #36507)
- [#37695](https://github.com/sgl-project/sglang/pull/37695) [chore] Add .git-blame-ignore-revs for the black -> ruff-format reformat (#37210)
- [#33911](https://github.com/sgl-project/sglang/pull/33911) feat(kernels): generalize persistent CuTe JIT cache
- [#37210](https://github.com/sgl-project/sglang/pull/37210) [CI][RFC] Replace black-jupyter with ruff-format

#### 🐛 New Issues
- [#37742](https://github.com/sgl-project/sglang/issues/37742) [SenseNova-U1] Feature & Performance Tracking 💬4
- [#37845](https://github.com/sgl-project/sglang/issues/37845) [Bug] Multi-part text content is rejected for system and assistant messages 💬1
- [#37833](https://github.com/sgl-project/sglang/issues/37833) Client disconnect during streaming leaves generation running server-side indefinitely ("ghost" requests never notify the scheduler) 💬1
- [#37711](https://github.com/sgl-project/sglang/issues/37711) [Bug] Ollama endpoints: /api/chat 500s on every request; /api/generate 500s when the client sends no num_predict 💬1
- [#37852](https://github.com/sgl-project/sglang/issues/37852) [Bug] sglang:kv_cache_memory_usage_gb reports 0 for DeepSeek-V4 pools
- [#37848](https://github.com/sgl-project/sglang/issues/37848) [Bug] Missing layer prefixes bypass per-module quantization setting
- [#37846](https://github.com/sgl-project/sglang/issues/37846) [Bug] Null optional config sections are treated as populated
- [#37838](https://github.com/sgl-project/sglang/issues/37838) [Feature] DeepSeek-V4 trtllm attention backend: support PD disaggregation (uniform-FP8 KV layout in the PD handshake)
- [#37834](https://github.com/sgl-project/sglang/issues/37834) [Bug] --enable-linear-replayssm forces no_buffer, which degrades mamba prefix caching and inflates TTFT up to 4.7x
- [#37817](https://github.com/sgl-project/sglang/issues/37817) [Bug] DFlash misses Mamba checkpoints when accepted tokens cross a tracking boundary
- [#37813](https://github.com/sgl-project/sglang/issues/37813) [Tracking] GLM-5.3-Flash on SM120 (RTX PRO 6000 / GB202): what it needs to work, be correct and be fast
- [#37792](https://github.com/sgl-project/sglang/issues/37792) [Feature] Serve Qwen3.8-Flash-Next (176B / 6B-active MoE) at 2.57 bpw on one 24 GB GPU with 32 GB host RAM
- [#37772](https://github.com/sgl-project/sglang/issues/37772) [Feature] LoRA adapter support for Dspark speculative decoding draft models
- [#37765](https://github.com/sgl-project/sglang/issues/37765) [PD] Make request role and state-transfer shape explicit
- [#37755](https://github.com/sgl-project/sglang/issues/37755) [Bug] MiMo-V2.5-Pro-W8A8 load weight failed via modelslim
- [#37745](https://github.com/sgl-project/sglang/issues/37745) [Bug] FlashInfer MNNVL AllReduce reduces GLM-5 NEXTN acceptance on Blackwell
- [#37712](https://github.com/sgl-project/sglang/issues/37712) [Bug] GLM-5.3-Flash: CUDA OOM in fp8_mqa_logits during long-context prefill kills all TP ranks
- [#37710](https://github.com/sgl-project/sglang/issues/37710) [Feature] KVCache can support dtype:int
- [#37707](https://github.com/sgl-project/sglang/issues/37707) [Bug] pattern + minLength: xgrammar silently drops the length bound

#### 🔒 Closed Issues
- [#21065](https://github.com/sgl-project/sglang/issues/21065) CI Maintenance Mode
- [#27021](https://github.com/sgl-project/sglang/issues/27021) [Bug]Qwen3.6-27B often stops after thinking phase with no output
- [#30178](https://github.com/sgl-project/sglang/issues/30178) [Bug] Qwen3.5 / Ornith hybrid linear attention fails with FP16 models because SGLANG_MAMBA_CONV_DTYPE defaults to BF16
- [#30160](https://github.com/sgl-project/sglang/issues/30160) [Feature] Cache-hit-aware over-admission for short bounded-output requests
- [#30188](https://github.com/sgl-project/sglang/issues/30188) OpenAI streaming logprobs and mixed-batch token-id logprobs can return wrong results or crash
- [#30176](https://github.com/sgl-project/sglang/issues/30176) [Bug] LongCat-2.0 checkpoint `oe_*` config keys mismatch LongcatFlashConfig `ngram_*`/`emb_*` — 32 ngram embedding weights silently dropped, garbled output
- [#30166](https://github.com/sgl-project/sglang/issues/30166) /server_info endpoint exposes api_key and admin_api_key via full ServerArgs serialization
- [#30162](https://github.com/sgl-project/sglang/issues/30162) [Bug] Gemma4 vision-prefill collapses at low concurrency with max_soft_tokens=1120 on Blackwell (sm121 / GB10)
- [#30099](https://github.com/sgl-project/sglang/issues/30099) [AMD][DI][CI] NIXL Cross-Node KV Transfer Blocked on MI355X Due to Ionic NIC SRQ Limitation
- [#37833](https://github.com/sgl-project/sglang/issues/37833) Client disconnect during streaming leaves generation running server-side indefinitely ("ghost" requests never notify the scheduler)
- [#34552](https://github.com/sgl-project/sglang/issues/34552) [Bug] Hardcoded .cuda() / .to("cuda") in model files breaks non-CUDA devices (XPU)

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 126,951 · **Open issues:** 2,404 · **Last push:** 1h ago

On September 4, 2026, llama.cpp saw the release of several versions, including b10793, which fixed an issue causing the whole source code to be rebuilt on each new commit, and b10792, addressing the GBNF grammar generation for empty object schemas. Key merged features included optimizations for multi-GPU support in CUDA (PR #28198) and enhancements to the OpenCL language model head and GEMM optimizations (PR #26477). Notably, new issues surfaced, with a critical evaluation bug reported related to the unpack8() function corrupting MAT_MUL on Qualcomm Snapdragon X Elite (issue #28290), highlighting ongoing challenges in optimizing cross-platform compatibility.

#### 🚀 New Releases
- [b10793](https://github.com/ggml-org/llama.cpp/releases/tag/b10793) b10793
- [b10792](https://github.com/ggml-org/llama.cpp/releases/tag/b10792) b10792
- [b10791](https://github.com/ggml-org/llama.cpp/releases/tag/b10791) b10791
- [b10790](https://github.com/ggml-org/llama.cpp/releases/tag/b10790) b10790
- [b10786](https://github.com/ggml-org/llama.cpp/releases/tag/b10786) b10786
- [b10785](https://github.com/ggml-org/llama.cpp/releases/tag/b10785) b10785
- [b10784](https://github.com/ggml-org/llama.cpp/releases/tag/b10784) b10784
- [b10783](https://github.com/ggml-org/llama.cpp/releases/tag/b10783) b10783
- [b10782](https://github.com/ggml-org/llama.cpp/releases/tag/b10782) b10782
- [b10781](https://github.com/ggml-org/llama.cpp/releases/tag/b10781) b10781

#### ✅ Merged PRs
- [#28098](https://github.com/ggml-org/llama.cpp/pull/28098) metal : add sparse FA
- [#28278](https://github.com/ggml-org/llama.cpp/pull/28278) llama: fix whole source code rebuilt on every new commit
- [#28279](https://github.com/ggml-org/llama.cpp/pull/28279) Fixed GBNF grammar generation for empty object schemas
- [#28198](https://github.com/ggml-org/llama.cpp/pull/28198) CUDA: Allow concurrent streams per split for multi-GPU
- [#26477](https://github.com/ggml-org/llama.cpp/pull/26477) opencl: quant lm_head / decode GEMV and medium-batch GEMM optimizations (speculative decoding/MTP)
- [#28285](https://github.com/ggml-org/llama.cpp/pull/28285) tune MMVQ to MMQ crossover for SM87
- [#28293](https://github.com/ggml-org/llama.cpp/pull/28293) snapdragon: ci updates to use new run script
- [#27062](https://github.com/ggml-org/llama.cpp/pull/27062) sycl: reduce redundant work in Q4_K multi-column MMVQ
- [#28263](https://github.com/ggml-org/llama.cpp/pull/28263) ops: add Hexagon to ops.md and update main README.md
- [#28298](https://github.com/ggml-org/llama.cpp/pull/28298) server : use pytest-xdist for server tests
- [#25444](https://github.com/ggml-org/llama.cpp/pull/25444) model: add NVIDIA Nemotron-3-Puzzle-75B-A9B (NemotronHPuzzle) support
- [#28310](https://github.com/ggml-org/llama.cpp/pull/28310) mtmd: propagate const to preproc class
- [#28306](https://github.com/ggml-org/llama.cpp/pull/28306) metal : fix glu dispatch with ne00 = 1
- [#28307](https://github.com/ggml-org/llama.cpp/pull/28307) mtmd : add `const` in various places
- [#28190](https://github.com/ggml-org/llama.cpp/pull/28190) vulkan: fix FA dequant path engagement
- [#27550](https://github.com/ggml-org/llama.cpp/pull/27550) [SYCL] enhance the api to support peer-to-peer copy
- [#28294](https://github.com/ggml-org/llama.cpp/pull/28294) convert : skip bias_vl tensor in DeepSeek-V4 DSpark conversion
- [#27483](https://github.com/ggml-org/llama.cpp/pull/27483) misc : prevent RAM peaking at model loading stage

#### 🐛 New Issues
- [#28290](https://github.com/ggml-org/llama.cpp/issues/28290) Eval bug: unpack8() corrupts MAT_MUL + CPY on Qualcomm Snapdragon X Elite `bug-unconfirmed` 💬9
- [#28295](https://github.com/ggml-org/llama.cpp/issues/28295) Compile bug: MSVC compilation doesn't detect AVX-VNNI `bug-unconfirmed` 💬5
- [#28312](https://github.com/ggml-org/llama.cpp/issues/28312) Eval bug: segfault when using "Ubuntu x64 (Vulkan)" build `bug-unconfirmed` 💬2
- [#28353](https://github.com/ggml-org/llama.cpp/issues/28353) Vulkan multi-GPU regression 2.31.2 -> 2.33.0: secondary GPU allocation torn down mid-load, hang (unkillable llama-server) 💬1
- [#28336](https://github.com/ggml-org/llama.cpp/issues/28336) Misc. bug: A Generated svg image has missing parts. `bug-unconfirmed` 💬1
- [#28345](https://github.com/ggml-org/llama.cpp/issues/28345) Misc. bug: SIGFPE (integer divide-by-zero) loading nemotron_h_moe GGUFs whose NextN/MTP blocks have zeroed per-layer expert arrays 💬1
- [#28296](https://github.com/ggml-org/llama.cpp/issues/28296) Feature Request: Potential unnecessary V-cache allocation for DSA / Lightning Indexer `enhancement` 💬1
- [#28315](https://github.com/ggml-org/llama.cpp/issues/28315) Misc. bug: (b10783) Windows flags llama-common.dll with Trojan:Win32/Wacatac.C!ml `bug-unconfirmed` 💬1
- [#28317](https://github.com/ggml-org/llama.cpp/issues/28317) Eval bug: support Spark-X2.5-1.7B.gguf `bug-unconfirmed` 💬1
- [#28300](https://github.com/ggml-org/llama.cpp/issues/28300) support Spark-X2.5-4B-GGUF 💬1
- [#28288](https://github.com/ggml-org/llama.cpp/issues/28288) Misc. bug: Eval bug error 0x80000406 `bug-unconfirmed` 💬1
- [#28343](https://github.com/ggml-org/llama.cpp/issues/28343) Vulkan: IQ-type results are not reproducible run to run on Imagination PowerVR
- [#28342](https://github.com/ggml-org/llama.cpp/issues/28342) Vulkan: mul_mat_vec bf16 pipelines are created even when the device has no bf16 support
- [#28340](https://github.com/ggml-org/llama.cpp/issues/28340) server: tool-call validation rejects a schema's own valid optional property, only allowing 'required' ones
- [#28338](https://github.com/ggml-org/llama.cpp/issues/28338) CUDA OOM hard-abort in ggml_cuda_op_top_k (argsort_f32_i32_cuda_cub temp alloc via ggml_cuda_pool_vmm / cuMemCreate) after long-running llama-server decode
- [#28337](https://github.com/ggml-org/llama.cpp/issues/28337) Misc. bug: Router mode loads wrong GGUF when multiple files share a subdirectory `bug-unconfirmed`
- [#28328](https://github.com/ggml-org/llama.cpp/issues/28328) Misc. bug: ggml-cpu : CPU backend score ignores OS XSAVE support -> SIGILL when CPUID advertises AVX but OS does not enable it `bug-unconfirmed`
- [#28318](https://github.com/ggml-org/llama.cpp/issues/28318) mtmd: Gemma 4 E2B/E4B image tokens are decoded non-causally, the models expect causal attention
- [#28314](https://github.com/ggml-org/llama.cpp/issues/28314) Misc. bug: SYCL backend fails GPU offload on Intel Arc Graphics (Meteor Lake 125H) with UR_RESULT_ERROR_INVALID_VALUE at ggml-sycl.cpp:1800 `bug-unconfirmed`
- [#28299](https://github.com/ggml-org/llama.cpp/issues/28299) Misc. bug: llama-server web UI keeps sending GET /tools requests that return 403, tripping fail2ban `bug-unconfirmed`
- [#28291](https://github.com/ggml-org/llama.cpp/issues/28291) Misc. bug: "libomp140.aarch64.dll not found" error on Qualcomm Snapdragon X Elite `bug-unconfirmed`
- [#28286](https://github.com/ggml-org/llama.cpp/issues/28286) Eval bug: draft-mtp + --parallel > 1 causes cross-slot content contamination (not HIP-graphs related)

#### 🔒 Closed Issues
- [#21284](https://github.com/ggml-org/llama.cpp/issues/21284) Misc. bug: Inefficient defaults for gfx1151 cost substantial performance for prefill (ROCm)
- [#25739](https://github.com/ggml-org/llama.cpp/issues/25739) Eval bug: official Gemma 4 QAT GGUF (google/gemma-4-E2B-it-qat-q4_0-gguf) aborts at vocab load: GGML_ASSERT(id_to_token.size() == token_to_id.size())
- [#25429](https://github.com/ggml-org/llama.cpp/issues/25429) Compile bug:
- [#24871](https://github.com/ggml-org/llama.cpp/issues/24871) Misc. bug: sampling penalties causes up to 20% text generation overhead
- [#27501](https://github.com/ggml-org/llama.cpp/issues/27501) Feature Request: support for n-cpu-moe in fit
- [#27189](https://github.com/ggml-org/llama.cpp/issues/27189) Eval bug: Instant crash (segfault) when loading models with AMD Strix Halo and Vulkan
- [#25755](https://github.com/ggml-org/llama.cpp/issues/25755) Eval bug: GGML_ASSERT "tensor write out of bounds" in server_prompt_cache::load with Qwen3.6-27B (Vulkan)
- [#25870](https://github.com/ggml-org/llama.cpp/issues/25870) Eval bug: OpenCL flash-attn: supports_op returns true for kernels skipped at registration under device workgroup limits -> std::out_of_range (map::at) on Adreno 740
- [#28135](https://github.com/ggml-org/llama.cpp/issues/28135) [Vulkan] FA f16-scratch fast path never enabled for hybrid-model (non-unified) KV caches
- [#25520](https://github.com/ggml-org/llama.cpp/issues/25520) Vulkan: model load hangs indefinitely on RDNA4 (gfx1201) with plain Unsloth Q6_K quant, or OOMs host with --direct-io
- [#25652](https://github.com/ggml-org/llama.cpp/issues/25652) Eval bug: LightOnOCR-1B produces degenerate output ("@@@@...") via mtmd — regression since #16764
- [#25840](https://github.com/ggml-org/llama.cpp/issues/25840) Eval bug: server -np 3 decode drops ~4.4x (166 -> 38 t/s) whenever the two busy slots are the non-contiguous pair {0,2} — hybrid/recurrent model (Qwen3.6-35B-A3B), deterministic, b9966
- [#28315](https://github.com/ggml-org/llama.cpp/issues/28315) Misc. bug: (b10783) Windows flags llama-common.dll with Trojan:Win32/Wacatac.C!ml
- [#28317](https://github.com/ggml-org/llama.cpp/issues/28317) Eval bug: support Spark-X2.5-1.7B.gguf
- [#25882](https://github.com/ggml-org/llama.cpp/issues/25882) Misc. bug: convert_hf_to_gguf.py fails/crashes on Unsloth-derived Llama 3.2 3B checkpoints: three distinct tokenizer-handling issues
- [#25889](https://github.com/ggml-org/llama.cpp/issues/25889) Misc. bug: server ignores the real audio clip and makes things up when reasoning mode is turned on (Gemma 4 E2B)

### Ollama (`ollama/ollama`)

**Stars:** 180,080 · **Open issues:** 3,896 · **Last push:** <1h ago

On September 4, 2026, there were no new releases for Ollama, but several significant updates were made through merged pull requests. Notably, PR #18105 enables speculative decoding under structured output, enhancing the decoding process, while PR #18219 rebuilds MLX macOS test payloads to ensure consistency with the latest release. The most pressing new issue noted is #18220, which reports a regression after an Ollama update that causes Gemma 4 26B A4B to enter a reasoning loop instead of issuing tool calls. Other emerging concerns include the inefficacy of the --hidethinking flag with maternion/ling-3.0-tiny and a security issue regarding OLLAMA_DEBUG_LOG_REQUESTS that persists full prompts without proper controls.

#### ✅ Merged PRs
- [#18105](https://github.com/ollama/ollama/pull/18105) mlxrunner: enable speculative decoding under structured output
- [#18219](https://github.com/ollama/ollama/pull/18219) ci: rebuild MLX macOS test payloads the release can't supply

#### 🐛 New Issues
- [#18220](https://github.com/ollama/ollama/issues/18220) Regression: Gemma 4 26B A4B enters reasoning loop instead of issuing tool calls after Ollama update `bug` `mlx` 💬3
- [#18221](https://github.com/ollama/ollama/issues/18221) --hidethinking flag has no effect with maternion/ling-3.0-tiny:8b-Q4_K_M `bug` 💬1
- [#18217](https://github.com/ollama/ollama/issues/18217) Support authenticating via API_KEY with the cli tool `feature request` 💬1
- [#18218](https://github.com/ollama/ollama/issues/18218) Windows Intel iGPU regression after upgrade: CPU fallback and recovery after downgrade 💬1
- [#18209](https://github.com/ollama/ollama/issues/18209) Enable to show thinking blocks in the TUI `feature request` 💬1
- [#18210](https://github.com/ollama/ollama/issues/18210) [Security] OLLAMA_DEBUG_LOG_REQUESTS persists full prompts without retention or redaction controls 💬1
- [#18208](https://github.com/ollama/ollama/issues/18208) Long-lived Ollama runner (keep_alive -1) emits corrupted <unused49> output after coexisting with a second model, persists until runner restart `bug` 💬1
- [#18225](https://github.com/ollama/ollama/issues/18225) [Bug] 0.33.x: ~5x slower token generation than 0.32.13 on CUDA (RTX 3090) — same GPU, same model file
- [#18215](https://github.com/ollama/ollama/issues/18215) Install on linux without root permissions `bug`
- [#18214](https://github.com/ollama/ollama/issues/18214) Does latest Ollama support Parallel inference with Qwen 3.6 & 3.8 series? `feature request`
- [#18213](https://github.com/ollama/ollama/issues/18213) macOS: after a GPU reset mid-decode, runner stays loaded in Metal error state and /api/generate returns 200 with empty response until restart `macos`
- [#18211](https://github.com/ollama/ollama/issues/18211) [Security] OLLAMA_DEBUG_LOG_REQUESTS persists full prompts without retention or redaction controls

#### 🔒 Closed Issues
- [#18218](https://github.com/ollama/ollama/issues/18218) Windows Intel iGPU regression after upgrade: CPU fallback and recovery after downgrade
- [#18214](https://github.com/ollama/ollama/issues/18214) Does latest Ollama support Parallel inference with Qwen 3.6 & 3.8 series?
- [#18211](https://github.com/ollama/ollama/issues/18211) [Security] OLLAMA_DEBUG_LOG_REQUESTS persists full prompts without retention or redaction controls

### LiteLLM (`BerriAI/litellm`)

**Stars:** 57,972 · **Open issues:** 4,859 · **Last push:** <1h ago

Today, LiteLLM released version v1.101.0-dev.2, which includes Docker image signature verification enhancements to ensure security through cosign. Notable merged pull requests include fixes for request normalization with Cortex Claude, improved logging for multi-guardrail configurations, and a performance enhancement for SSO identity assertion caching. Additionally, several user interface improvements were made, such as enabling scroll capability within the admin table and configuring auto-router session affinity TTL. Among new issues, the most pressing is the report of a breaking change in LiteLLM 1.96+, where the managed MCP OAuth2 flow unexpectedly opens the LiteLLM UI instead of directing users to the vendor authorization page.

#### 🚀 New Releases
- [v1.101.0-dev.2](https://github.com/BerriAI/litellm/releases/tag/v1.101.0-dev.2) v1.101.0-dev.2

#### ✅ Merged PRs
- [#39453](https://github.com/BerriAI/litellm/pull/39453) fix(snowflake): normalize Cortex Claude request shapes
- [#39596](https://github.com/BerriAI/litellm/pull/39596) fix(logging): blocked requests no longer report guardrail_status=success in multi-guardrail configs
- [#39349](https://github.com/BerriAI/litellm/pull/39349) fix(caching): keep a node timeout from forcing a cluster-wide topology reinit on redis-py 8.x
- [#39664](https://github.com/BerriAI/litellm/pull/39664) fix(router): evict stale global pattern_router entries on upsert/delete
- [#39684](https://github.com/BerriAI/litellm/pull/39684) fix(ui): scroll admin table rows inside the table instead of the page
- [#39678](https://github.com/BerriAI/litellm/pull/39678) test(e2e): match the Internal Users search placeholder shipped by #39604
- [#39350](https://github.com/BerriAI/litellm/pull/39350) feat(mcp): warn about the ID-JAG capture gap for config-declared servers and on the SSO debug page
- [#39348](https://github.com/BerriAI/litellm/pull/39348) perf(mcp): cache SSO identity assertion reads on the ID-JAG path
- [#39679](https://github.com/BerriAI/litellm/pull/39679) feat(ui): configure auto-router session affinity TTL
- [#39037](https://github.com/BerriAI/litellm/pull/39037) fix(anthropic_endpoints): return Anthropic type:error envelope for /v1/messages errors
- [#39662](https://github.com/BerriAI/litellm/pull/39662) fix(proxy): apply default_vertex_config location before building the Vertex passthrough base URL
- [#39351](https://github.com/BerriAI/litellm/pull/39351) perf(spend): group /spend/logs summary by day in Postgres instead of per-row Prisma group_by
- [#39673](https://github.com/BerriAI/litellm/pull/39673) test(proxy-extras): repoint the migrate-deploy harness at the run_prisma seam
- [#39663](https://github.com/BerriAI/litellm/pull/39663) fix(router): count tools and Anthropic system prompt in context-window pre-call check
- [#39623](https://github.com/BerriAI/litellm/pull/39623) fix(scim): default-team fallback on create and keep memberships when PUT /Users has no groups
- [#39669](https://github.com/BerriAI/litellm/pull/39669) test(proxy-extras): fake run_prisma instead of subprocess.run in the migrate deploy harness
- [#39661](https://github.com/BerriAI/litellm/pull/39661) feat(ui): find rows by a pasted ID on keys, agents, memory, audit, and request logs
- [#39652](https://github.com/BerriAI/litellm/pull/39652) fix(openai): mint workload identity tokens for PrivateLink and regional api.openai.com hosts
- [#39635](https://github.com/BerriAI/litellm/pull/39635) feat(cost): honor off_peak_pricing reasoning and cache-creation rates
- [#39659](https://github.com/BerriAI/litellm/pull/39659) test(router): drop duplicate get_configured_mode test failing ruff F811
- [#39613](https://github.com/BerriAI/litellm/pull/39613) feat(proxy): configure OpenAI workload identity federation from the Add Model and LLM Credentials forms
- [#39534](https://github.com/BerriAI/litellm/pull/39534) fix(responses): encrypt the response id on every streamed event
- [#39218](https://github.com/BerriAI/litellm/pull/39218) fix(access_groups): derive attached teams from the team table and reject unknown team ids
- [#38999](https://github.com/BerriAI/litellm/pull/38999) fix(caching): don't trip redis circuit breaker on short timeout bursts
- [#39347](https://github.com/BerriAI/litellm/pull/39347) perf(auth): skip object permission DB lookup when no vector stores requested
- [#39344](https://github.com/BerriAI/litellm/pull/39344) fix(docker): match USE_DDTRACE case-insensitively and route build_from_pip through prod_entrypoint.sh
- [#39345](https://github.com/BerriAI/litellm/pull/39345) fix(mcp): normalize a schemed authentication_token on the v2 and OpenAPI static paths
- [#39346](https://github.com/BerriAI/litellm/pull/39346) fix(mcp): strip inbound auth scheme case-insensitively before token exchange
- [#33536](https://github.com/BerriAI/litellm/pull/33536) feat(proxy): enforce team isolation for provider-format batch ids and output files
- [#39432](https://github.com/BerriAI/litellm/pull/39432) fix(mcp): resolve OAuth broker endpoints by server_id with IP access checks
- [#39634](https://github.com/BerriAI/litellm/pull/39634) test(router): cover configured mode lookup
- [#36328](https://github.com/BerriAI/litellm/pull/36328) fix(team_endpoints): stop partial /team/update from wiping team metadata
- [#39636](https://github.com/BerriAI/litellm/pull/39636) fix(agents): hide agents from non-admins who were never granted them
- [#39611](https://github.com/BerriAI/litellm/pull/39611) test(team-race): wait on pg_locks instead of a fixed sleep
- [#39243](https://github.com/BerriAI/litellm/pull/39243) fix(guardrails): rebuild the serving worker guardrail on PUT instead of patching it in place
- [#39358](https://github.com/BerriAI/litellm/pull/39358) fix(cache): use sync Redis batch reads
- [#39465](https://github.com/BerriAI/litellm/pull/39465) fix(helm): render ingress-nginx compatible path types via ingress.controller
- [#39541](https://github.com/BerriAI/litellm/pull/39541) fix(anthropic_messages): key bridged streaming spend rows on the streamed msg_ id
- [#39464](https://github.com/BerriAI/litellm/pull/39464) fix(containers): pass upstream error status through and forward list pagination params
- [#39538](https://github.com/BerriAI/litellm/pull/39538) fix(utils): redact credentials nested in extra_body on the verbose optional-params line
- [#39452](https://github.com/BerriAI/litellm/pull/39452) fix(rag): forward the managed vector store's params to the search call
- [#39466](https://github.com/BerriAI/litellm/pull/39466) fix(proxy-extras): kill the whole Prisma process group when a command times out
- [#39411](https://github.com/BerriAI/litellm/pull/39411) fix(bedrock): skip the SigV4 credential chain when a bearer token is configured
- [#39526](https://github.com/BerriAI/litellm/pull/39526) fix(utils): redact credential kwargs from the set_verbose request line
- [#39495](https://github.com/BerriAI/litellm/pull/39495) fix(vector-stores): survive a failing vector store search in the chat completions hook
- [#39491](https://github.com/BerriAI/litellm/pull/39491) fix(router): keep retry breadcrumbs per request and out of the request snapshot
- [#39521](https://github.com/BerriAI/litellm/pull/39521) fix(proxy): stop putting the literal string "None" in error payloads
- [#38984](https://github.com/BerriAI/litellm/pull/38984) fix: attach vector store search_results when a guardrail is registered
- [#39426](https://github.com/BerriAI/litellm/pull/39426) feat(azure_ai): add grok-4.6 to the model cost map
- [#39543](https://github.com/BerriAI/litellm/pull/39543) fix(guardrails): remove the module-global translation mapping that leaked between tests
- [#39510](https://github.com/BerriAI/litellm/pull/39510) fix(proxy): parse numeric multipart fields on /v1/images/edits back into numbers
- [#39496](https://github.com/BerriAI/litellm/pull/39496) ci(ui): run the UI build check through the image's ui-builder stage
- [#39493](https://github.com/BerriAI/litellm/pull/39493) ci(rust): build and test the ai-gateway server feature
- [#39511](https://github.com/BerriAI/litellm/pull/39511) fix(spend_tracking): key /v1/messages spend rows on the msg_ id the client received
- [#39648](https://github.com/BerriAI/litellm/pull/39648) chore(ci): promote internal staging to main
- [#39625](https://github.com/BerriAI/litellm/pull/39625) fix(vertex): add the API version to versionless project routes on the Vertex passthrough
- [#39617](https://github.com/BerriAI/litellm/pull/39617) test(responses): bound the background stream cancel e2e so an upstream stall skips fast
- [#39604](https://github.com/BerriAI/litellm/pull/39604) fix(ui): let the Internal Users search box match user_id as well as email
- [#39554](https://github.com/BerriAI/litellm/pull/39554) fix(agents): keep the published agent in public_agent_groups
- [#38440](https://github.com/BerriAI/litellm/pull/38440) fix(prompts): key the in-memory prompt registry by environment
- [#39631](https://github.com/BerriAI/litellm/pull/39631) fix: treat gpt-6 names as the gpt-5 request family in OpenAI and Azure configs
- [#39630](https://github.com/BerriAI/litellm/pull/39630) test(router): cover get_configured_mode so router_code_coverage passes
- [#39532](https://github.com/BerriAI/litellm/pull/39532) fix(auto_router): bill the routing embedding to the caller's key and team
- [#39600](https://github.com/BerriAI/litellm/pull/39600) fix(ui): clear agents when updating team permissions
- [#39468](https://github.com/BerriAI/litellm/pull/39468) feat(router): limit heuristic_v2 auto-routers to one without the auto_router license feature
- [#39593](https://github.com/BerriAI/litellm/pull/39593) chore(ci): promote internal staging to main
- [#39622](https://github.com/BerriAI/litellm/pull/39622) feat(models): add gpt-6-astra pricing and metadata
- [#39612](https://github.com/BerriAI/litellm/pull/39612) fix(vector_stores): only list vector stores the caller was granted
- [#38975](https://github.com/BerriAI/litellm/pull/38975) fix(azure_ai): don't reclassify Foundry deployments as azure provider
- [#39610](https://github.com/BerriAI/litellm/pull/39610) fix(cost): bill bedrock_mantle web search at $12 per 1k queries using Bedrock's reported count
- [#39594](https://github.com/BerriAI/litellm/pull/39594) fix(router): pin JWT-authenticated callers by user id in deployment_affinity
- [#39587](https://github.com/BerriAI/litellm/pull/39587) fix(openai): bridge gpt-5.4+ tool calls to /v1/responses on every api.openai.com host
- [#38808](https://github.com/BerriAI/litellm/pull/38808) fix(headroom): resolve CCR retrieval on streaming /v1/responses
- [#39597](https://github.com/BerriAI/litellm/pull/39597) fix(proxy): drop anthropic-beta on the Vertex passthrough count-tokens route
- [#39614](https://github.com/BerriAI/litellm/pull/39614) fix(openai): default stream usage on PrivateLink and regional api.openai.com hosts
- [#39608](https://github.com/BerriAI/litellm/pull/39608) test(bedrock): drop EOL cohere.command-r-plus-v1:0 from local_testing
- [#39592](https://github.com/BerriAI/litellm/pull/39592) fix(cost): apply off_peak_pricing in the dashscope cost calculator
- [#39598](https://github.com/BerriAI/litellm/pull/39598) fix(ui): aggregate session token usage in the logs table
- [#39619](https://github.com/BerriAI/litellm/pull/39619) fix(proxy): expose configured mode for auto-router models
- [#39215](https://github.com/BerriAI/litellm/pull/39215) fix(ui): show MCP servers and agents inherited from access groups on team overview
- [#39316](https://github.com/BerriAI/litellm/pull/39316) fix: stop a cleared Organization field from failing key creation
- [#39458](https://github.com/BerriAI/litellm/pull/39458) fix(spend_tracking): add missing_session_id: omit to leave SpendLogs.session_id null without a client session
- [#39545](https://github.com/BerriAI/litellm/pull/39545) fix(proxy): return persisted team memberships from /user/new so first CLI login gets the default team
- [#39525](https://github.com/BerriAI/litellm/pull/39525) fix(images): forward gpt-image supported params like background to OpenAI and Azure
- [#39595](https://github.com/BerriAI/litellm/pull/39595) chore: bump litellm-enterprise 0.1.63 -> 0.1.64, litellm-proxy-extras 0.4.92 -> 0.4.93
- [#39580](https://github.com/BerriAI/litellm/pull/39580) chore(release): bump tornado and pypdf on stable/1.97.x and cut 1.97.2
- [#39181](https://github.com/BerriAI/litellm/pull/39181) fix(model_armor): handle Anthropic Messages and Responses streams in post_call
- [#35987](https://github.com/BerriAI/litellm/pull/35987) fix(bedrock_mantle): stop dropping the web_search tool on /v1/responses
- [#39571](https://github.com/BerriAI/litellm/pull/39571) fix(team): generate team IDs for blank input
- [#39531](https://github.com/BerriAI/litellm/pull/39531) fix(mcp): scope allow-all servers to virtual keys
- [#39563](https://github.com/BerriAI/litellm/pull/39563) fix(proxy/db): translate libpq sslrootcert and verify-* into Prisma's strict TLS params
- [#38794](https://github.com/BerriAI/litellm/pull/38794) feat(ui): keyset-paginate request logs by session trace
- [#39425](https://github.com/BerriAI/litellm/pull/39425) test(ocr): record provider fixtures in the migration harness
- [#39409](https://github.com/BerriAI/litellm/pull/39409) fix(databricks): strip thinking_blocks and reasoning_content from outbound messages
- [#38765](https://github.com/BerriAI/litellm/pull/38765) test(harness): add OCR parity with migration strategy runners
- [#39583](https://github.com/BerriAI/litellm/pull/39583) test(timeout): time out against the local fake endpoint instead of api.openai.com
- [#39471](https://github.com/BerriAI/litellm/pull/39471) fix(ui): replace the key detail URL entry when a virtual key is rotated
- [#39372](https://github.com/BerriAI/litellm/pull/39372) feat(auto-router): support classifier reasoning effort
- [#39436](https://github.com/BerriAI/litellm/pull/39436) fix: 1.99.0-rc2 UI bug batch (empty org on key create, session pagination, access group rename/delete)
- [#39561](https://github.com/BerriAI/litellm/pull/39561) fix(docker): bump nginx runtime to 1.31.5-alpine3.24 and pin digest
- [#39445](https://github.com/BerriAI/litellm/pull/39445) feat(cli): enable Claude Code gateway model discovery by default in lite claude
- [#39506](https://github.com/BerriAI/litellm/pull/39506) fix(proxy-extras): only spend a migrate-deploy attempt when a pass made no progress
- [#36260](https://github.com/BerriAI/litellm/pull/36260) fix(proxy): 404 a credential delete that matched nothing, and raise instead of return
- [#39481](https://github.com/BerriAI/litellm/pull/39481) fix(ui): keep Virtual Keys list state in the URL so it survives leaving the page
- [#39502](https://github.com/BerriAI/litellm/pull/39502) fix(test): drop the duplicate embedding_executor arg in the Bedrock KB fake handler
- [#39398](https://github.com/BerriAI/litellm/pull/39398) fix(guardrail): hide-secrets playground redaction and guardrail telemetry
- [#39480](https://github.com/BerriAI/litellm/pull/39480) fix(sso): resolve multi-valued role claims to the highest privilege role
- [#39478](https://github.com/BerriAI/litellm/pull/39478) fix(ui): read the preset catalog at runtime in the dashboard tests
- [#39476](https://github.com/BerriAI/litellm/pull/39476) fix(ui): stop the create team form resetting organization and models
- [#39490](https://github.com/BerriAI/litellm/pull/39490) feat(ui): add 1M context auto-router preset
- [#39441](https://github.com/BerriAI/litellm/pull/39441) fix(xai): bill from the cost xAI reports instead of recomputing it (internal copy of #36281)
- [#39474](https://github.com/BerriAI/litellm/pull/39474) refactor(s3_vectors): embed search queries through the shared vector store executor
- [#39472](https://github.com/BerriAI/litellm/pull/39472) test(vector-store): accept embedding_executor in the Bedrock KB hook fake handler
- [#39482](https://github.com/BerriAI/litellm/pull/39482) test: add mistral ocr transformation parity coverage
- [#39446](https://github.com/BerriAI/litellm/pull/39446) fix(mcp): never exchange the LiteLLM virtual key as the upstream subject token
- [#39463](https://github.com/BerriAI/litellm/pull/39463) test(rust-python-harness): wire existing e2e SDK tests into the matrix
- [#39402](https://github.com/BerriAI/litellm/pull/39402) feat(datadog_llm_obs): cost tag dimensions, router decision fields, reasoning token metric, redaction gating
- [#39454](https://github.com/BerriAI/litellm/pull/39454) feat(complexity_router): opt-in modality override of a kept session-affinity pin
- [#39467](https://github.com/BerriAI/litellm/pull/39467) chore(crowdstrike): expect the deduped end-of-stream scan in crowdstrike cadence test
- [#39434](https://github.com/BerriAI/litellm/pull/39434) test: add OCR python-to-rust test parity ledger (WIP)
- [#39229](https://github.com/BerriAI/litellm/pull/39229) feat(azure): support credential chain for storage
- [#39274](https://github.com/BerriAI/litellm/pull/39274) feat(router): arm safeguard-refusal fallback on generic chains when no content-policy list exists
- [#39450](https://github.com/BerriAI/litellm/pull/39450) fix(proxy): keep SpendLogs and callback session ids in sync when the request has none
- [#39448](https://github.com/BerriAI/litellm/pull/39448) fix: keep litellm importable on Python 3.10 and guard 3.11-only typing imports in CI
- [#39386](https://github.com/BerriAI/litellm/pull/39386) fix(guardrails): skip streaming guardrail rounds that re-scan cleared output
- [#39457](https://github.com/BerriAI/litellm/pull/39457) test(responses): expect the 404 OpenAI now returns for an unknown model
- [#38877](https://github.com/BerriAI/litellm/pull/38877) fix(guardrails): apply PUT /guardrails/{id} to the serving worker immediately and reject invalid configs with 422
- [#39456](https://github.com/BerriAI/litellm/pull/39456) docs: define Rust Python harness structure
- [#39412](https://github.com/BerriAI/litellm/pull/39412) feat(proxy): serve the auto-router preset catalog at runtime
- [#39257](https://github.com/BerriAI/litellm/pull/39257) fix(ui): paginate request logs by session groups server-side

#### 🐛 New Issues
- [#39503](https://github.com/BerriAI/litellm/issues/39503) Send x-opencode-session header on API requests (required by OpenCode Go from 09/05)
- [#39564](https://github.com/BerriAI/litellm/issues/39564) [Bug]: /user/update always 400s on the documented `blocked` param (LiteLLM_UserTable has no such column) — breaks the Terraform provider's litellm_user `bug` `proxy` `llm translation` 💬2
- [#39529](https://github.com/BerriAI/litellm/issues/39529) [Feature]: litellm gateway, for custom openai provider, use model info API to get the context size instead of use builtin map `enhancement` `proxy` `llm translation` 💬1
- [#39665](https://github.com/BerriAI/litellm/issues/39665) [Bug]: Breaking change in LiteLLM 1.96+: managed MCP OAuth2 flow opens LiteLLM UI instead of the vendor authorization page `bug` `proxy` 💬1
- [#39627](https://github.com/BerriAI/litellm/issues/39627) [Bug]: Deployment-level reasoning_effort on bedrock converse sends a thinking budget above max_tokens, 400ing every small-max_tokens request `proxy` `llm translation` 💬1
- [#39451](https://github.com/BerriAI/litellm/issues/39451) [Bug]: /v1/models omits mode for auto_router models even when set in model_info (max_input_tokens/max_output_tokens work fine) `llm translation` `claude code` 💬1
- [#39514](https://github.com/BerriAI/litellm/issues/39514) [Bug]: chatgpt/ device-code auth is synchronous and blocks the proxy event loop for up to 900s, killing the worker `proxy` `llm translation` 💬1
- [#39677](https://github.com/BerriAI/litellm/issues/39677) [Feature]: Native Amazon Bedrock Web Search support for AWS GovCloud `enhancement` `proxy` `llm translation`
- [#39655](https://github.com/BerriAI/litellm/issues/39655) Router accepts malformed context_window_fallbacks, then crashes with AttributeError at fallback time
- [#39618](https://github.com/BerriAI/litellm/issues/39618) [Bug]: cost_per_token crashes on None/string token counts instead of costing zero
- [#39615](https://github.com/BerriAI/litellm/issues/39615) [Bug]: BudgetManager.projected_cost crashes on standard non-string message content (vision blocks, null content)
- [#39479](https://github.com/BerriAI/litellm/issues/39479) error po sa from litellm import completion `llm translation`
- [#39599](https://github.com/BerriAI/litellm/issues/39599) [Bug] Admin UI assets requested under literal "/litellm-asset-prefix" path, causing 404s and broken UI (no SERVER_ROOT_PATH set)
- [#39575](https://github.com/BerriAI/litellm/issues/39575) Proposal: Add YingSuan AI as a supported LLM provider `llm translation`
- [#39486](https://github.com/BerriAI/litellm/issues/39486) llm
- [#39557](https://github.com/BerriAI/litellm/issues/39557) [Bug]: OSV Scan 03.09 `bug` `SDK`
- [#39552](https://github.com/BerriAI/litellm/issues/39552) [Feature]: Request for Amazon Nova Reel and Nova Canvas Model Support with Editing and Segmentation Capabilities `enhancement` `proxy` `llm translation`
- [#39547](https://github.com/BerriAI/litellm/issues/39547) `/model/new` added models never reach a `gateway`-only process — misleading error points to log lines that are never emitted
- [#39528](https://github.com/BerriAI/litellm/issues/39528) [Bug]: [Bug]: Claude Code (subscription/Pro-Max auth) requests never reach LiteLLM proxy despite ANTHROPIC_BASE_URL being set `bug` `proxy` `llm translation` `claude code`
- [#39519](https://github.com/BerriAI/litellm/issues/39519) Headroom guardrail never uses prefix-stability API (frozen_message_count/session_id/v1/usage), breaks provider prompt caching `llm translation`
- [#39505](https://github.com/BerriAI/litellm/issues/39505) [Bug]: as of the newest stable (v1.99.1), the OpenAI-compatible response path still drops cache_read_input_tokens `bug` `proxy` `llm translation`
- [#39501](https://github.com/BerriAI/litellm/issues/39501) [Bug]: 41 of 85 openrouter/* entries disagree with openrouter.ai's own API on price (20 of them cite the page that contradicts them) `llm translation`
- [#39487](https://github.com/BerriAI/litellm/issues/39487) litellm._turn_on_debug()
- [#39462](https://github.com/BerriAI/litellm/issues/39462) mid-stream fallback asymmetry: chat completions may lose partial usage, Responses API preserves it
- [#39455](https://github.com/BerriAI/litellm/issues/39455) router retries: how should consumers derive logical operations from inflated log counts?

#### 🔒 Closed Issues
- [#26529](https://github.com/BerriAI/litellm/issues/26529) OpenAI-proxy streaming for Claude breaks AI SDK 6.x multi-step tool calls: "text part {id} not found"
- [#38193](https://github.com/BerriAI/litellm/issues/38193) LiteLLM memory keeps growing after OOM restart, with no apparent reclamation
- [#38060](https://github.com/BerriAI/litellm/issues/38060) [Bug]: Paging counts messages instead of sessions in dashboard Logs view
- [#22195](https://github.com/BerriAI/litellm/issues/22195) [Bug]: Anthropic client requests not displaying correctly in Logs View v2
- [#26436](https://github.com/BerriAI/litellm/issues/26436) [Bug]: `/v1/messages/count_tokens` proxy endpoint returns incorrect token count - `tools` field ignored on Bedrock provider
- [#28989](https://github.com/BerriAI/litellm/issues/28989) [Bug]: Gemini image generation silently drops finishReason on safety blocks
- [#37335](https://github.com/BerriAI/litellm/issues/37335) [Bug]: Azure Redis Entra auth passes username with credential provider
- [#26514](https://github.com/BerriAI/litellm/issues/26514) Hallucination detection layer that plugs into Langfuse tracing
- [#29093](https://github.com/BerriAI/litellm/issues/29093) Virtual-key auth fails with 'relation "LiteLLM_VerificationToken" does not exist' under transaction-pooled DATABASE_URL (e.g., Neon pgbouncer, Prisma raw queries lose search_path)
- [#29138](https://github.com/BerriAI/litellm/issues/29138) [Bug]: Anthropic input_audio base64 leaks into Gemini text tokens causing inflated input token counts
- [#29146](https://github.com/BerriAI/litellm/issues/29146) [Feature]: Add a typed exception for (This model isn't mapped yet) [provider=mistral]
- [#29156](https://github.com/BerriAI/litellm/issues/29156) [Bug]: SGLang rerank bug
- [#29216](https://github.com/BerriAI/litellm/issues/29216) [Bug]: Proxy drops message.reasoning_content for Mistral reasoning models (SDK returns it)
- [#38276](https://github.com/BerriAI/litellm/issues/38276) [Bug]: azure_ai deployments of OpenAI-named models are reclassified as azure, resolving the wrong cost-map entry and logging a spurious base_model error
- [#39451](https://github.com/BerriAI/litellm/issues/39451) [Bug]: /v1/models omits mode for auto_router models even when set in model_info (max_input_tokens/max_output_tokens work fine)
- [#36649](https://github.com/BerriAI/litellm/issues/36649) [Feature]: Support native Amazon Bedrock Web Search for OpenAI GPT models via Bedrock Mantle
- [#29484](https://github.com/BerriAI/litellm/issues/29484) fix(guardrails): update_in_memory_litellm_params fails with dict input from DB
- [#30997](https://github.com/BerriAI/litellm/issues/30997) fix(mcp): OAuth authorize/register endpoints fail to resolve MCP server by server_id
- [#39319](https://github.com/BerriAI/litellm/issues/39319) Fix DualCache.batch_get_cache cross-event-loop Redis access
- [#39353](https://github.com/BerriAI/litellm/issues/39353) [Bug]: gpt-5.4+ tools+reasoning bridge to /v1/responses doesn't recognize custom OpenAI api_base still backed by the real api.openai.com (e.g. PrivateLink)
- [#39479](https://github.com/BerriAI/litellm/issues/39479) error po sa from litellm import completion
- [#38649](https://github.com/BerriAI/litellm/issues/38649) [Feature]: Pass-through background parameter for gpt-image-2 (OpenAI & Azure)
- [#39486](https://github.com/BerriAI/litellm/issues/39486) llm
- [#35829](https://github.com/BerriAI/litellm/issues/35829) Provider-reported usage.cost is trusted verbatim as USD spend with no unit validation — causes astronomical phantom spend
- [#39320](https://github.com/BerriAI/litellm/issues/39320) Datadog Observability - Cost & Auto-router - Follow-up request for PR #39222

### Unsloth (`unslothai/unsloth`)

**Stars:** 75,569 · **Open issues:** 1,405 · **Last push:** <1h ago

On September 4, 2026, Unsloth did not release any new versions but saw several noteworthy changes in merged pull requests. Key updates included enhancements to the Studio interface, such as stopping update banners from floating off-screen (#10229) and improving the Llasa top_p default settings to align with API specifications (#9194). Additionally, several security audits were re-approved, including the huggingface-hub backoff loop for version 1.30.0 and four findings from torch version 2.14.0 (#10244, #10233). The day also saw the emergence of critical new issues, notably a bug related to training SIGSEGV on ROCm 6.1 when falling back to ROCm 6.4 (#10273), highlighting challenges in maintaining compatibility with different hardware configurations.

#### ✅ Merged PRs
- [#10229](https://github.com/unslothai/unsloth/pull/10229) Studio: stop the update banners floating off the corner
- [#8924](https://github.com/unslothai/unsloth/pull/8924) Studio: thread hf_token through load_and_format_dataset
- [#10201](https://github.com/unslothai/unsloth/pull/10201) Pin AppImage plugin to a versioned release
- [#10218](https://github.com/unslothai/unsloth/pull/10218) CLI: pass --hf-token to the export checkpoint load
- [#9194](https://github.com/unslothai/unsloth/pull/9194) Studio: bring the Llasa top_p default inside the range the API accepts
- [#10172](https://github.com/unslothai/unsloth/pull/10172) Studio: keep a still-advancing llama.cpp prefill from timing out
- [#10225](https://github.com/unslothai/unsloth/pull/10225) Studio: report a cut off /v1/responses turn as incomplete
- [#10246](https://github.com/unslothai/unsloth/pull/10246) Stop the stall-window comparison being decided by one noisy sample
- [#10244](https://github.com/unslothai/unsloth/pull/10244) Security audit: re-approve the huggingface-hub backoff loop for 1.30.0
- [#10232](https://github.com/unslothai/unsloth/pull/10232) CI: stop grep -c || echo 0 producing a two-line count
- [#10234](https://github.com/unslothai/unsloth/pull/10234) Pin the multi-turn determinism probe to a backend that can be deterministic
- [#10231](https://github.com/unslothai/unsloth/pull/10231) unsloth_cli tests: stop the mklink kwargs assertion breaking on an unrelated keyword
- [#10233](https://github.com/unslothai/unsloth/pull/10233) Security audit: re-approve the four torch findings that 2.14.0 opened
- [#10235](https://github.com/unslothai/unsloth/pull/10235) Format test_video_backend.py the way the pinned ruff wants
- [#10206](https://github.com/unslothai/unsloth/pull/10206) Stop the zoo digest pin living in two places
- [#10054](https://github.com/unslothai/unsloth/pull/10054) Let audio models load into CPU RAM instead of the GPU
- [#10184](https://github.com/unslothai/unsloth/pull/10184) Fix diffusion offload host RAM retention
- [#9317](https://github.com/unslothai/unsloth/pull/9317) Studio: count only this adapter's engines in the Windows AMD GPU utilization
- [#9738](https://github.com/unslothai/unsloth/pull/9738) Studio: accept subtitle, caption and the rest of the common attachment formats
- [#10205](https://github.com/unslothai/unsloth/pull/10205) Restore the comment tails the trim cut off
- [#10090](https://github.com/unslothai/unsloth/pull/10090) Studio: say when a chat is too long instead of showing a raw error

#### 🐛 New Issues
- [#10273](https://github.com/unslothai/unsloth/issues/10273) [Bug] 0.1.806-beta training SIGSEGV on ROCm 6.1 when bitsandbytes falls back to ROCm 6.4 `feature request` `bug`
- [#10272](https://github.com/unslothai/unsloth/issues/10272) [Bug] Transcribe does not load/recognize mlx models `feature request` `bug`
- [#10252](https://github.com/unslothai/unsloth/issues/10252) [Bug] GPT OSS 120b - output that does not match `feature request` `bug`
- [#10248](https://github.com/unslothai/unsloth/issues/10248) Feature Request: ChatGPT-style prompt navigator for long conversations `feature request`
- [#10245](https://github.com/unslothai/unsloth/issues/10245) [Bug] Deep Research incomplete reports, leaking reasoning conversation onto report, etc `feature request` `bug`

#### 🔒 Closed Issues
- [#9728](https://github.com/unslothai/unsloth/issues/9728) [Feature Request] Add support for .srt and .vtt subtitle files in attachments
- [#10156](https://github.com/unslothai/unsloth/issues/10156) [Bug] Memory leak during repeated Z-Image-Turbo generations — RAM grows linearly, ends in SIGKILL

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,055 · **Open issues:** 382 · **Last push:** <1h ago

On September 4, 2026, there were no new releases for AIBrix, but several significant pull requests were merged, including the addition of drain-aware RoleSet rollout and scale-in functionalities in PR #2651, and integration tests for ModelRouter in PR #2640. Additionally, PR #2657 addressed a critical issue by fixing the stale status that occurs when base model pods disappear. The CI workflow checks were also improved per PR #2656. Notably, a new issue was raised, #2663, highlighting that the /v1/embeddings endpoint rejects all inputs exceeding 8192 tokens, indicating a potential limitation in handling larger requests.

#### ✅ Merged PRs
- [#2651](https://github.com/vllm-project/aibrix/pull/2651) [API]: Add drain-aware RoleSet rollout and scale-in
- [#2640](https://github.com/vllm-project/aibrix/pull/2640) [Misc] Add ModelRouter integration tests
- [#2657](https://github.com/vllm-project/aibrix/pull/2657) fix(modeladapter): fix stale status when base model pods disappear
- [#2656](https://github.com/vllm-project/aibrix/pull/2656) ci: improve workflow check display

#### 🐛 New Issues
- [#2663](https://github.com/vllm-project/aibrix/issues/2663) /v1/embeddings rejects all inputs over 8192 tokens
- [#2662](https://github.com/vllm-project/aibrix/issues/2662) [Batch] MDS shutdown all the jobs when the concurrent scale

#### 🔒 Closed Issues
- [#2636](https://github.com/vllm-project/aibrix/issues/2636) Document PodAutoscaler support for Kubernetes external metrics adapters

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 5,530 · **Open issues:** 456 · **Last push:** <1h ago

On September 4, 2026, there were no new releases for Semantic Router, but several important changes were merged into the project. Merged pull requests included #3402, which moves ModernBERT attention onto a shared chunked kernel, enhancing performance, and bug fixes for the dashboard account panel (#3398) and position-embedding limits in multimodal text input (#3383), ensuring better functionality and user experience. The day also saw the emergence of several critical new issues, notably issue #3441, which requests the addition of explicit Podman runtime selection for the installer, highlighting ongoing discussions about deployment flexibility. Overall, while no major developments occurred in terms of releases, the steady stream of enhancements and bug resolutions reflects an active commitment to improving the system.

#### ✅ Merged PRs
- [#3432](https://github.com/vllm-project/semantic-router/pull/3432) [Test] Add Istio native-sidecar fixtures
- [#3398](https://github.com/vllm-project/semantic-router/pull/3398) [Bug] Keep the dashboard account panel within the viewport
- [#3383](https://github.com/vllm-project/semantic-router/pull/3383) [Bug] Name the position-embedding limit when multimodal text input exceeds it
- [#3422](https://github.com/vllm-project/semantic-router/pull/3422) [Bug] Remove unread ml.feature_weights config field
- [#3402](https://github.com/vllm-project/semantic-router/pull/3402) [Feature] Move ModernBERT attention onto the shared chunked kernel

#### 🐛 New Issues
- [#3441](https://github.com/vllm-project/semantic-router/issues/3441) [Feature] Add explicit Podman runtime selection to the installer `enhancement` `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬5
- [#3409](https://github.com/vllm-project/semantic-router/issues/3409) [Bug] Anthropic streamed usage with iterations fails decode, breaking current Claude Code `bug` `accepted` `in-progress` `wg/data-plane-networking` 💬3
- [#3423](https://github.com/vllm-project/semantic-router/issues/3423) [Bug] Semantic cache ignores the compatibility fingerprint `bug` `accepted` `in-progress` `wg/data-plane-networking` 💬2
- [#3413](https://github.com/vllm-project/semantic-router/issues/3413) [Bug] Anthropic requests carrying context_management fail decode, breaking Claude Code `bug` `accepted` `in-progress` `wg/data-plane-networking` 💬2
- [#3406](https://github.com/vllm-project/semantic-router/issues/3406) [Bug] ModernBERT flash-attention path ignores the sliding window and the padding mask `bug` `accepted` `in-progress` `wg/router-models-inference-runtime` 💬2
- [#3407](https://github.com/vllm-project/semantic-router/issues/3407) [Bug] Qwen3 embedding advertises a 32768 sequence limit the attention path cannot allocate for `bug` `accepted` `in-progress` `wg/router-models-inference-runtime` 💬2
- [#3392](https://github.com/vllm-project/semantic-router/issues/3392) [Feature] Define session-scoped tool state model `enhancement` `needs-acceptance` `wg/agentic-context`

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*