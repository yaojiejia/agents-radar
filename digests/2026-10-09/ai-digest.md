# 📡 AI Ecosystem Digest — 2026-10-09

> Generated 2026-10-09 02:48 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 149,733 | 31 | 1 | 0 | 2 |
| [OpenAI Codex](https://github.com/openai/codex) | 128,234 | 23 | 3 | 50 | 4 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 107,259 | 0 | 0 | 5 | 0 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,249 | 15 | 10 | 0 | 6 |
| [OpenCode](https://github.com/anomalyco/opencode) | 212,218 | 5 | 44 | 6 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 28,369 | 29 | 9 | 4 | 0 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 391,488 | 126 | 91 | 109 | 1 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 252,062 | 23 | 2 | 2 | 1 |
| [vLLM](https://github.com/vllm-project/vllm) | 93,418 | 32 | 22 | 46 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 36,894 | 48 | 9 | 59 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 130,559 | 9 | 23 | 25 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 182,425 | 10 | 3 | 3 | 1 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 60,397 | 19 | 40 | 94 | 5 |
| [Unsloth](https://github.com/unslothai/unsloth) | 77,537 | 7 | 136 | 99 | 1 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,128 | 7 | 2 | 12 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,064 | 12 | 17 | 14 | 0 |

---

## ✨ Highlights

- **Ollama** released version [v0.40.2](https://github.com/ollama/ollama/releases/tag/v0.40.2), enhancing model capabilities.
- **Claude Code** had multiple releases with versions [v2.1.295](https://github.com/anthropics/claude-code/releases/tag/v2.1.295) and [v2.1.294](https://github.com/anthropics/claude-code/releases/tag/v2.1.294).
- **OpenAI Codex** merged PR [#52363](https://github.com/openai/codex/pull/52363) to expand realtime v3 voice support.
- A notable issue for **OpenAI Codex** is [#51969](https://github.com/openai/codex/issues/51969), concerning a Windows sandbox setup blocked by a running bundled node_repl.exe, with 11 comments.
- **Semantic Router** has a significant new issue [#4770](https://github.com/vllm-project/semantic-router/issues/4770) about truncated pricing column headers, attracting 5 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 149,733 · **Open issues:** 14,600 · **Last push:** 4h ago

Today, Claude Code released v2.1.295, introducing significant enhancements such as the `onFailure: "block"` feature for command and HTTP hooks, which prevents actions from proceeding under certain failure conditions, and support for the Program Status Protocol (OSC 7501) to indicate processing states in compatible terminals. Additional improvements in this version include the ability to copy quoted text from the `/copy` picker. Earlier in the day, v2.1.294 was released, which fixed issues with `prompt` and `agent` hooks written as instructions and refined the judgment process for certain stop commands. Notably, there were multiple new issues reported, including a bug related to the Desktop Code tab displaying Persian text incorrectly and a persistent max effort warning strip that cannot be dismissed, indicating ongoing user challenges with interface functionalities.

#### 🚀 New Releases
- [v2.1.295](https://github.com/anthropics/claude-code/releases/tag/v2.1.295) v2.1.295
- [v2.1.294](https://github.com/anthropics/claude-code/releases/tag/v2.1.294) v2.1.294

#### 🐛 New Issues
- [#100492](https://github.com/anthropics/claude-code/issues/100492) [BUG] Desktop Code tab: Persian is reversed in permission prompts, ZWNJ shown as [U+200C] or removed, RLM shown as U+FFFD, and several places set no text direction `bug` `platform:linux` `area:a11y` `area:ui` 💬1
- [#100676](https://github.com/anthropics/claude-code/issues/100676) Desktop (Code tab): Max effort warning strip can't be turned off, and dismissing it doesn't last `bug` `platform:windows` `user-experience` `area:desktop` 💬1
- [#100667](https://github.com/anthropics/claude-code/issues/100667) [Bug] Unspecified issue reported by user (no details provided) `bug` `platform:windows` `needs-info` 💬1
- [#100681](https://github.com/anthropics/claude-code/issues/100681) [BUG] claude plugin eval refuses Bash-granting cases on WSL2: Docker Desktop's ~/.docker/contexts symlink is not in the pre-flight skip set
- [#100680](https://github.com/anthropics/claude-code/issues/100680) Desktop: stealth update relaunch does not restore Remote Control on restored sessions `bug` `platform:macos` `area:desktop`
- [#100679](https://github.com/anthropics/claude-code/issues/100679) its stuck `bug` `needs-info` `needs-repro`
- [#100678](https://github.com/anthropics/claude-code/issues/100678) Bug Report: Unclear "cheat report" submission lacks details `bug` `platform:windows` `needs-info`
- [#100677](https://github.com/anthropics/claude-code/issues/100677) Bug Report: Unclear Issue, Complaint About Model Quality `bug` `platform:windows` `area:model` `needs-info`
- [#100675](https://github.com/anthropics/claude-code/issues/100675) I cant type of remove these files `bug` `needs-info`
- [#100674](https://github.com/anthropics/claude-code/issues/100674) [Bug] Cyber safeguard falsely flags passive documentation prompt for security research workflow `bug` `duplicate` `platform:macos` `area:model`
- [#100673](https://github.com/anthropics/claude-code/issues/100673) Bug Report: Unclear Non-Technical Input `invalid`
- [#100671](https://github.com/anthropics/claude-code/issues/100671) [BUG] /usage panel leaves stale characters when switching day/week views if the panel is taller than the terminal `bug` `has repro` `platform:macos` `area:tui`
- [#100672](https://github.com/anthropics/claude-code/issues/100672) [FEATURE] Desktop app: new session should default to the selected session's folder, not the last-used folder `enhancement` `area:desktop`
- [#100670](https://github.com/anthropics/claude-code/issues/100670) [Bug] Bug Report: No reproducible details provided `bug` `platform:windows` `needs-info` `needs-repro`
- [#100669](https://github.com/anthropics/claude-code/issues/100669) [Bug] Bug Report: Unclear report with no reproducible details `bug` `platform:windows` `needs-info` `needs-repro`
- [#100668](https://github.com/anthropics/claude-code/issues/100668) [Bug] Bug Report: Unspecified issue with no reproduction details `invalid`
- [#100666](https://github.com/anthropics/claude-code/issues/100666) Hooks: document whether a UserPromptSubmit prompt was typed by the human `duplicate` `area:hooks`
- [#100665](https://github.com/anthropics/claude-code/issues/100665) [Bug] Bug Report: No Actionable Details Provided `bug` `platform:windows` `needs-info`
- [#100664](https://github.com/anthropics/claude-code/issues/100664) Bug Report: No actionable issue description provided `invalid`
- [#100662](https://github.com/anthropics/claude-code/issues/100662) Bug Report: Unclear Issue, No Details Provided `bug` `platform:windows` `needs-info`
- [#100663](https://github.com/anthropics/claude-code/issues/100663) Bug Report: User Dissatisfaction with Opus 5.5 Performance `bug` `platform:windows` `area:model` `needs-info`
- [#100660](https://github.com/anthropics/claude-code/issues/100660) Bug Report: Unclear Input, No Actionable Issue Described `invalid`
- [#100659](https://github.com/anthropics/claude-code/issues/100659) Advisor binds claude-opus-5-5 when advisorModel is set to Fable mid-session; resume keeps it `bug` `platform:macos` `area:model`
- [#100661](https://github.com/anthropics/claude-code/issues/100661) Bug Report: Unclear abusive message with no reproducible details
- [#100658](https://github.com/anthropics/claude-code/issues/100658) [Bug] Bug Report: Abusive input with no technical details `invalid`
- [#100657](https://github.com/anthropics/claude-code/issues/100657) [FEATURE] VSCode Extension login is derived from base VSCode instance `enhancement` `area:auth` `platform:vscode`
- [#100655](https://github.com/anthropics/claude-code/issues/100655) [FEATURE] Lightweight Mac daemon with cross-client session discovery and continuation `enhancement` `platform:macos` `area:agent-view`
- [#100656](https://github.com/anthropics/claude-code/issues/100656) [Bug] Copy/paste inserts hard line wraps into commands, breaking pasted ! commands `bug` `duplicate` `platform:macos` `area:tui`
- [#100654](https://github.com/anthropics/claude-code/issues/100654) [BUG] Mods: mouse events land to the right of the pointer while a mod Client listens to pointer events (Orca, xterm.js) `bug` `has repro` `area:tui` `area:plugins`
- [#100653](https://github.com/anthropics/claude-code/issues/100653) [BUG] VS Code terminal: every Session start runs `code --list-extensions --show-versions` (a full Electron launch) `bug` `has repro` `platform:macos` `area:ide`
- [#100652](https://github.com/anthropics/claude-code/issues/100652) [Bug] Artifact pane fails to open on "open" action, requires manual mcp__ccd_view__show_pane call `bug` `platform:windows` `area:desktop`

#### 🔒 Closed Issues
- [#94614](https://github.com/anthropics/claude-code/issues/94614) Allow user-defined aliases for built-in slash commands (the internal `aliases` array is not user-configurable)

### OpenAI Codex (`openai/codex`)

**Stars:** 128,234 · **Open issues:** 21,625 · **Last push:** <1h ago

On October 9, 2026, OpenAI Codex released new versions, including rust-v0.163.0-alpha.2, which features tools for creating and listing managed Git worktrees when enabled, and enhancements to the agent Command Center that allow users to pin tasks and navigate transcript blocks more efficiently. Concurrently, notable merged pull requests included the expansion of realtime v3 voice support and the introduction of durable thread read state with revision-checked updates, enhancing the overall functionality of the platform. A significant issue reported today involved Windows users facing sandbox setup blocks due to a sharing violation with node_repl.exe, signaling ongoing challenges in the Windows environment.

#### 🚀 New Releases
- [rust-v0.163.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.2) 0.163.0-alpha.2
- [rust-v0.162.0](https://github.com/openai/codex/releases/tag/rust-v0.162.0) 0.162.0
- [rust-v0.163.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.1) 0.163.0-alpha.1
- [rust-v0.162.0-alpha.17.2](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.17.2) 0.162.0-alpha.17.2

#### ✅ Merged PRs
- [#52363](https://github.com/openai/codex/pull/52363) Expand realtime v3 voice support
- [#52350](https://github.com/openai/codex/pull/52350) Expose experimental durable thread read state in the app server
- [#52337](https://github.com/openai/codex/pull/52337) Add durable thread read state with revision-checked updates
- [#52330](https://github.com/openai/codex/pull/52330) Clamp wrapped source ranges before remapping terminal hyperlinks
- [#52329](https://github.com/openai/codex/pull/52329) Remove per-content source attribution metadata
- [#52325](https://github.com/openai/codex/pull/52325) Track history initialization in Responses turn metadata
- [#52304](https://github.com/openai/codex/pull/52304) Persist remote-control RPC preferences in managed daemon settings
- [#52302](https://github.com/openai/codex/pull/52302) Add opt-in credential masking for proxied sandboxed sessions
- [#52299](https://github.com/openai/codex/pull/52299) Make Bazel release jobs advisory
- [#52295](https://github.com/openai/codex/pull/52295) Emit one developer notice per incremental namespace update batch
- [#52288](https://github.com/openai/codex/pull/52288) Remove duplicate field initializers from extension registry tests
- [#52278](https://github.com/openai/codex/pull/52278) Honor custom OTLP metrics exporters when analytics is disabled
- [#52277](https://github.com/openai/codex/pull/52277) Preserve UTF-8 byte semantics in network domain matching
- [#52274](https://github.com/openai/codex/pull/52274) Add structured tracing for Guardian reviews and background scoring
- [#52273](https://github.com/openai/codex/pull/52273) Add configurable persistent leader shortcuts to the TUI
- [#52270](https://github.com/openai/codex/pull/52270) Enable text selection in the fullscreen TUI footer
- [#52268](https://github.com/openai/codex/pull/52268) Preserve large arguments in executed tool call metadata
- [#52256](https://github.com/openai/codex/pull/52256) Normalize formatting in docs, web assets, and sample scripts
- [#52250](https://github.com/openai/codex/pull/52250) Add opt-in Guardian trust for orchestrator connector identities
- [#52245](https://github.com/openai/codex/pull/52245) Enable parallel execution for read-only tools
- [#52241](https://github.com/openai/codex/pull/52241) Preserve subagent capabilities independently of forked history
- [#52235](https://github.com/openai/codex/pull/52235) Recover gRPC code-mode sessions after missing-session errors
- [#52234](https://github.com/openai/codex/pull/52234) Support request IDs in exec-server WebSocket handshakes
- [#52228](https://github.com/openai/codex/pull/52228) Honor API-key feature gates in TUI Daybreak selection
- [#52226](https://github.com/openai/codex/pull/52226) Include foreground activity in iTerm2 session status
- [#52225](https://github.com/openai/codex/pull/52225) Fix config rebuild call in the Windows MXC preference test
- [#52223](https://github.com/openai/codex/pull/52223) Enforce application network policy for daemon updates
- [#52220](https://github.com/openai/codex/pull/52220) Add configurable default plugin activation policy
- [#52215](https://github.com/openai/codex/pull/52215) Enforce application network policy in standalone MCP commands
- [#52213](https://github.com/openai/codex/pull/52213) Stop bundling patched zsh in Codex packages
- [#52203](https://github.com/openai/codex/pull/52203) Expose Codex lifecycle status in iTerm2 sessions
- [#52200](https://github.com/openai/codex/pull/52200) Allow plugin toggles while searching and preserve filters on refresh
- [#52195](https://github.com/openai/codex/pull/52195) Track source attribution for individual context parts
- [#52193](https://github.com/openai/codex/pull/52193) Enforce managed MXC requirements on Windows
- [#52184](https://github.com/openai/codex/pull/52184) Preserve side conversations across thread navigation
- [#52183](https://github.com/openai/codex/pull/52183) Add optional descriptions to agent message board channels
- [#52182](https://github.com/openai/codex/pull/52182) Expose a verified sandbox launcher to local MCP servers
- [#52178](https://github.com/openai/codex/pull/52178) Strip symbols from source-built release package binaries
- [#52177](https://github.com/openai/codex/pull/52177) Set a User-Agent for package archive downloads
- [#52176](https://github.com/openai/codex/pull/52176) Show AWS GovCloud guidance at startup and remember acknowledgment
- [#52164](https://github.com/openai/codex/pull/52164) Make environment context date and timezone configurable
- [#52160](https://github.com/openai/codex/pull/52160) Remove the patched zsh shell execution backend
- [#52119](https://github.com/openai/codex/pull/52119) Expose originating tool call metadata in command environments
- [#52081](https://github.com/openai/codex/pull/52081) Fix idle cleanup for disconnected multi-agent v2 children
- [#52065](https://github.com/openai/codex/pull/52065) Require assessment text in the Guardian parser
- [#52062](https://github.com/openai/codex/pull/52062) Add scenario coverage for worker context across idle eviction
- [#52061](https://github.com/openai/codex/pull/52061) Run Guardian conversation classifiers concurrently and preserve action order
- [#52048](https://github.com/openai/codex/pull/52048) Cover instant interruption in steered-input persistence tests
- [#52040](https://github.com/openai/codex/pull/52040) Add regression coverage for cancelled agent reloads
- [#52034](https://github.com/openai/codex/pull/52034) Preserve agent state when unloading idle multi-agent v2 children

#### 🐛 New Issues
- [#51969](https://github.com/openai/codex/issues/51969) Windows sandbox setup blocked by running bundled node_repl.exe / Swift DLL (os error 32) `bug` `windows-os` `sandbox` `app` 💬11
- [#51972](https://github.com/openai/codex/issues/51972) [Windows][26.1002] Browser bootstrap fails with EPERM realpath; sandbox provisioning locks its own runtime `bug` `windows-os` `sandbox` `app` 💬5
- [#51999](https://github.com/openai/codex/issues/51999) Windows sandbox blocked by node_repl.exe sharing violation; helper processes respawn after termination `bug` `windows-os` `sandbox` `app` 💬4
- [#52334](https://github.com/openai/codex/issues/52334) Windows dot cannot access connected PC: “setup refresh had errors” / node_repl.exe sharing violation `bug` `windows-os` `sandbox` `app` 💬4
- [#52075](https://github.com/openai/codex/issues/52075) [Windows][In-app Browser] Notion reload rejected by browser security policy despite Always allow `bug` `windows-os` `app` `browser` 💬4
- [#52179](https://github.com/openai/codex/issues/52179) [Windows] All commands fail: "setup refresh had errors" `bug` `windows-os` `sandbox` `app` 💬3
- [#51975](https://github.com/openai/codex/issues/51975) Projects missing from Windows desktop app after upgrade, still visible in browser `bug` `windows-os` `app` 💬3
- [#52321](https://github.com/openai/codex/issues/52321) Intermittent Codex Cloud proxy port 8080 failures across isolated task VMs `bug` `codex-web` `connectivity` 💬2
- [#52129](https://github.com/openai/codex/issues/52129) [Windows Desktop] Dot-created cloud history remains missing/access-denied after connection recovery; direct reads retrieve original messages `bug` `windows-os` `app` `app-server` 💬2
- [#52373](https://github.com/openai/codex/issues/52373) Endless page initialization `bug` `app` `session` 💬2
- [#52054](https://github.com/openai/codex/issues/52054) Windows sandbox refresh fails before command execution: node_repl.exe ACL update hits sharing violation (os error 32) `bug` `windows-os` `sandbox` `app` 💬2
- [#51942](https://github.com/openai/codex/issues/51942) macOS: Browser Use saved denial persists after Always allow, rule removal and restart `bug` `app` `browser` 💬2
- [#52380](https://github.com/openai/codex/issues/52380) stream disconnected - retrying sampling request (1/5 in 205ms)-codex `bug` `app` `connectivity` 💬1
- [#52379](https://github.com/openai/codex/issues/52379) The Codex app stops working and closes after 38 seconds. `bug` `windows-os` `app` 💬1
- [#52378](https://github.com/openai/codex/issues/52378) [Linux][Desktop] No response with Clash system proxy, CLI works; TUN or launching with an explicit proxy restores functionality `bug` `app` `connectivity` 💬1
- [#52377](https://github.com/openai/codex/issues/52377) Windows: browser control trusted Node child exits before connecting to Edge `bug` `windows-os` `tool-calls` `app` 💬1
- [#52376](https://github.com/openai/codex/issues/52376) Codex CLI: clipboard failures, goal continuity loss, Astra Max discrepancy, and subagent usage/control issues `bug` `model-behavior` `sandbox` `TUI` 💬1
- [#52374](https://github.com/openai/codex/issues/52374) Dot cloud task control regression: readable tasks return UNKNOWN/NOT_FOUND on continuation; direct resume also fails `bug` `codex-web` `app-server` `dots` 💬1
- [#52370](https://github.com/openai/codex/issues/52370) Desktop follow-up appears unanswered while wait_agent is active on a remote host (triage request) `bug` `app` `subagent` `remote` 💬1
- [#52369](https://github.com/openai/codex/issues/52369) # [macOS] Codex Desktop CrBrowserMain SIGTRAP crash after extended use (build 13536, same signature as #52091) `bug` `app` 💬1
- [#52375](https://github.com/openai/codex/issues/52375) CLI 0.162.0 panics at terminal_hyperlinks.rs:392: UTF-8 boundary inside ➡ while rendering Chinese text `bug` `TUI` `CLI`
- [#52371](https://github.com/openai/codex/issues/52371) Windows desktop: keep-awake protection is dropped when remote-control status becomes errored `bug` `windows-os` `app` `connectivity`
- [#52368](https://github.com/openai/codex/issues/52368) Windows Codex desktop app crashes unless GPU is disabled `bug` `windows-os` `app`

#### 🔒 Closed Issues
- [#17412](https://github.com/openai/codex/issues/17412) Pressing "Back to app" not working
- [#51975](https://github.com/openai/codex/issues/51975) Projects missing from Windows desktop app after upgrade, still visible in browser
- [#32883](https://github.com/openai/codex/issues/32883) Please put decent effort into performance on the Windows App.

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 107,259 · **Open issues:** 756 · **Last push:** 4h ago

On October 9, 2026, there were no new releases for the Gemini CLI. However, several important fixes were merged, including enhancements to eliminate false positives on untrusted command flags and compound loops with PR #29672, and improvements in user interaction display, ensuring the retained visibility of user prompts in tool results as per PR #29677. Noteworthy adjustments were also made to the VSCode IDE companion, specifically in PR #29674, which allows the IdeServer.stop() method to resolve while MCP sessions remain active. Additionally, PR #29658 fixed JSON parse and response stream errors in the fetchJson utility, contributing to more robust error handling. Overall, the day was routine but marked by strong progress in stabilizing core functionalities.

#### ✅ Merged PRs
- [#29672](https://github.com/google-gemini/gemini-cli/pull/29672) fix(core): eliminate false positives on untrusted command flags and compound loops
- [#29677](https://github.com/google-gemini/gemini-cli/pull/29677) fix(core): retain ask_user question text in the tool result display
- [#29674](https://github.com/google-gemini/gemini-cli/pull/29674) fix(vscode-ide-companion): make IdeServer.stop() resolve while MCP sessions are open
- [#29673](https://github.com/google-gemini/gemini-cli/pull/29673) fix(core): preserve line terminators in truncateString
- [#29658](https://github.com/google-gemini/gemini-cli/pull/29658) fix(cli): handle JSON parse and response stream errors in fetchJson

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,249 · **Open issues:** 2,179 · **Last push:** <1h ago

On October 9, 2026, GitHub Copilot CLI released version 1.0.95-2, which added support for sandbox credential injectHosts keys in the copilot configuration, complete with key completion in Bash, Zsh, and Fish. Version 1.0.95-1 introduced native Microsoft Entra broker authentication on macOS, with a fallback to browser authentication when necessary. Notably, new issues reported include #5079, concerning Copilot's use of the 2026-07-28 protocol and the reuse of rotated refresh tokens, and #5088, where the CLI crashes during the first sign-in for the MCP server on Windows. Overall, the day saw significant updates in user experience and configuration options, alongside pressing concerns being raised by users.

#### 🚀 New Releases
- [v1.0.95-2](https://github.com/github/copilot-cli/releases/tag/v1.0.95-2) 1.0.95-2
- [v1.0.95-1](https://github.com/github/copilot-cli/releases/tag/v1.0.95-1) 1.0.95-1
- [v1.0.95-0](https://github.com/github/copilot-cli/releases/tag/v1.0.95-0) 1.0.95-0
- [v1.0.94](https://github.com/github/copilot-cli/releases/tag/v1.0.94) 1.0.94
- [v1.0.94-5](https://github.com/github/copilot-cli/releases/tag/v1.0.94-5) 1.0.94-5
- [v1.0.94-4](https://github.com/github/copilot-cli/releases/tag/v1.0.94-4) 1.0.94-4

#### 🐛 New Issues
- [#5079](https://github.com/github/copilot-cli/issues/5079) Copilot sends `ping` on the 2026-07-28 protocol, and reuses rotated refresh tokens `triage` 💬1
- [#5091](https://github.com/github/copilot-cli/issues/5091) Session queues all prompts, keeps trying to reconnect mcps when they are already connected `triage` 💬1
- [#5090](https://github.com/github/copilot-cli/issues/5090) Boot experience + Input line experience `triage`
- [#5092](https://github.com/github/copilot-cli/issues/5092) Secret redaction corrupts JSON output when tool results contain harmless authorization-header code `triage`
- [#5089](https://github.com/github/copilot-cli/issues/5089) `copilot --acp` ignores `--sandbox` and `sandbox.enabled`; shell commands run unsandboxed `triage`
- [#5088](https://github.com/github/copilot-cli/issues/5088) Windows: CLI crashes (0xc0000005 in msalruntime.dll) on first Entra account-broker sign-in for MCP server - interactive WAM called with no parent window `triage`
- [#5087](https://github.com/github/copilot-cli/issues/5087) The ask_user single-select field looks nearly identical to the multi-select field `triage`
- [#5086](https://github.com/github/copilot-cli/issues/5086) Sessions tab new sessions ignore remoteSessions and open view-only `triage`
- [#5085](https://github.com/github/copilot-cli/issues/5085) 1.0.93 regression on macOS: all native HTTPS requests fail with "bad certificate format" when com.apple.SecurityServer is not reachable (sandboxes) `triage`
- [#5084](https://github.com/github/copilot-cli/issues/5084) ask_user "needs information" prompts don't render markdown (bold, etc.) `triage`
- [#5083](https://github.com/github/copilot-cli/issues/5083) Remember permission approvals across sessions `triage`
- [#5082](https://github.com/github/copilot-cli/issues/5082) MCP OAuth: Dataverse MCP rejected by RFC 8414 issuer check ( login.windows.net vs login.microsoftonline.com ), with and without a static oauthClientId `triage`
- [#5081](https://github.com/github/copilot-cli/issues/5081) Execution failed: Failed to get response from the AI model ... invalid peer certificate: UnknownIssuer `triage`
- [#5078](https://github.com/github/copilot-cli/issues/5078) Clearer notification tab header that GitHub Copilot needs feedback `triage`
- [#5077](https://github.com/github/copilot-cli/issues/5077) Prune older installed versions — keep only the latest three (including the live one) `triage`

#### 🔒 Closed Issues
- [#892](https://github.com/github/copilot-cli/issues/892) Add sandbox mode to restrict Copilot CLI file access to a specified working directory
- [#4998](https://github.com/github/copilot-cli/issues/4998) Copilot CLI unusable after macOS update/reboot because `.mcp-writer.binding` persists stale filesystem device ID
- [#770](https://github.com/github/copilot-cli/issues/770) The model Claude Opus 4.5 froze while processing the prompt.
- [#4844](https://github.com/github/copilot-cli/issues/4844) --yolo launch flag swallowed by the pre-auth fail-closed bypass cap, never re-applied once the policy resolves
- [#3024](https://github.com/github/copilot-cli/issues/3024) Too many MCP servers results in continuous compaction
- [#1988](https://github.com/github/copilot-cli/issues/1988) Limit Premium Request Toggle
- [#3332](https://github.com/github/copilot-cli/issues/3332) /restart does not work with --name
- [#4858](https://github.com/github/copilot-cli/issues/4858) OTEL `chat` spans do not have the proper parent span for subagents
- [#4130](https://github.com/github/copilot-cli/issues/4130) copilot --resume can't use the Copilot-Session commit trailer id (it's the cloud mc_session_id, not the local session id)
- [#4270](https://github.com/github/copilot-cli/issues/4270) Claude Sonnet 5 delegated to a lesser agent to perform a code review

### OpenCode (`anomalyco/opencode`)

**Stars:** 212,218 · **Open issues:** 6,176 · **Last push:** <1h ago

On October 9, 2026, OpenCode did not release any new versions, but several important pull requests were successfully merged. Key fixes included enhancing the session UI by ensuring the full tool error text appears when expanded (#53816) and improving the core functionality by adding variants to the thinking toggle for Vertex MaaS models (#54040). Additionally, the desktop interface saw improvements with issues related to alignment in the browser panel being addressed (#52461). Notably, the new issue flagged today involves a bug related to missing spacing in task prompts and multipart messages (#54045), attracting attention from the community. Overall, it was a day of routine maintenance with several important enhancements implemented.

#### ✅ Merged PRs
- [#53816](https://github.com/anomalyco/opencode/pull/53816) fix(session-ui): show full tool error text when expanded
- [#54040](https://github.com/anomalyco/opencode/pull/54040) fix(core): add thinking toggle variants for Vertex MaaS models
- [#54038](https://github.com/anomalyco/opencode/pull/54038) fix(app): keep the browser page up until its still is on screen
- [#54027](https://github.com/anomalyco/opencode/pull/54027) fix(session-ui): align the subagent icon with the progress spinner
- [#54017](https://github.com/anomalyco/opencode/pull/54017) fix(session-ui): reuse complete patch diffs instead of re-diffing
- [#52461](https://github.com/anomalyco/opencode/pull/52461) fix(desktop): keep browser panel corner masks aligned

#### 🐛 New Issues
- [#54045](https://github.com/anomalyco/opencode/issues/54045) [Bug]: missing spacing in task prompts and copied multipart messages 💬3
- [#54050](https://github.com/anomalyco/opencode/issues/54050) MCP child process is never spawned when cwd is $HOME (traced with spawn logger) `triaging` 💬1
- [#54049](https://github.com/anomalyco/opencode/issues/54049) 内置 Read 无法直读 mp4 格式文件 💬1
- [#54044](https://github.com/anomalyco/opencode/issues/54044) agents: browser tools exposed despite agent-level "deny browser" when the agent has execute 💬1
- [#54043](https://github.com/anomalyco/opencode/issues/54043) [FEATURE]: V2 - Show model and context use in subagent screen `pending close` `triaging` 💬1

#### 🔒 Closed Issues
- [#40480](https://github.com/anomalyco/opencode/issues/40480) [BUG] OpenCode Go deepseek-v4-flash returns HTTP 500 while mimo-v2.5 works
- [#53841](https://github.com/anomalyco/opencode/issues/53841) Multiple models/providers intermittently fail with Endpoint is unavailable
- [#37003](https://github.com/anomalyco/opencode/issues/37003) [FEATURE]: Clean Output Mode: Collapse AI Work by Default
- [#53835](https://github.com/anomalyco/opencode/issues/53835) permissions: reading a bundled skill reference asks for access to the plugin cache
- [#38081](https://github.com/anomalyco/opencode/issues/38081) [FEATURE]: Todo Sidebar with Linear integration (project-scoped issue management)
- [#38932](https://github.com/anomalyco/opencode/issues/38932) Pasting a long text in prompt box make Desktop app hang
- [#39655](https://github.com/anomalyco/opencode/issues/39655) [Bug] OpenCode Web shows "No folders found" although projects are returned by the backend API
- [#41030](https://github.com/anomalyco/opencode/issues/41030) v2: /skills shows deleted and permission-disabled skills
- [#41102](https://github.com/anomalyco/opencode/issues/41102) Usage bug.
- [#53840](https://github.com/anomalyco/opencode/issues/53840) provider: Anthropic Messages cannot round-trip openrouter:tool_search, breaking websearch on Anthropic-protocol models
- [#41351](https://github.com/anomalyco/opencode/issues/41351) [FEATURE]: guard against stale agent/skill definitions (doctor drift check + EOL-aware lint + dated claims)
- [#40420](https://github.com/anomalyco/opencode/issues/40420) bug: Hermes Agent — gpt-5.6-luna via opencode-go provider returns finish_reason:null (no [DONE])
- [#39772](https://github.com/anomalyco/opencode/issues/39772) [FEATURE]: Debugging loop detection and cross-session memory
- [#37876](https://github.com/anomalyco/opencode/issues/37876) On narrow screens, the help icon on the Web overlaps with the send/stop button.
- [#41288](https://github.com/anomalyco/opencode/issues/41288) Feature: exclude/deny skills from the skill selector (not just from the model's context)
- [#41282](https://github.com/anomalyco/opencode/issues/41282) [Desktop] Unable to add folder from another worktree of the same repository
- [#41254](https://github.com/anomalyco/opencode/issues/41254) opencode2 failed to run, "not a valid application for this OS platform"
- [#39163](https://github.com/anomalyco/opencode/issues/39163) GitHub action: pinning the action to a SHA doesn't pin the installer or the CLI version
- [#40826](https://github.com/anomalyco/opencode/issues/40826) [FEATURE]: Conversation outline / prompt navigation for long chats
- [#41099](https://github.com/anomalyco/opencode/issues/41099) TUI crashes with STATUS_ACCESS_VIOLATION (0xC0000005) during terminal capability negotiation on Windows on ARM (Snapdragon X Elite)
- [#41224](https://github.com/anomalyco/opencode/issues/41224) Zen/Go API endpoints missing `Access-Control-Allow-Origin` on actual responses (CORS fails for browser-based clients)
- [#41464](https://github.com/anomalyco/opencode/issues/41464) Tool definitions sent to models that cannot call tools (Vertex Gemini image models reject every request)
- [#41357](https://github.com/anomalyco/opencode/issues/41357) [FEATURE]: Allow Go plan users to restrict which models the client can enable
- [#41353](https://github.com/anomalyco/opencode/issues/41353) Responses in OpenCode chat are either very choppy or none after 'Thought'
- [#41296](https://github.com/anomalyco/opencode/issues/41296) [Bug] OpenCode Go gpt-5.6-luna buffers Responses output into a single late delta
- [#41293](https://github.com/anomalyco/opencode/issues/41293) [FEATURE]:U、account usage display on the tui sidebar
- [#41277](https://github.com/anomalyco/opencode/issues/41277) 101% Context Used =))?
- [#41263](https://github.com/anomalyco/opencode/issues/41263) [FEATURE]:Add a copy action for tool output blocks
- [#40978](https://github.com/anomalyco/opencode/issues/40978) ACP sessions can access MCP tools supplied by other sessions
- [#41252](https://github.com/anomalyco/opencode/issues/41252) [Bug] macOS tool shell cannot access gh Keychain credential
- [#41243](https://github.com/anomalyco/opencode/issues/41243) Root cause analysis: viewport drifts while reading a backlog during generation (ref #29094)
- [#41229](https://github.com/anomalyco/opencode/issues/41229) MCP local server config: 'connection closed' / 'Ignoring MCP config entry without type' with command string + args + env fields
- [#41225](https://github.com/anomalyco/opencode/issues/41225) `opencode web` ENOENT: no such file or directory, lstat '/home/sinawic/codex/r��y�')
- [#41220](https://github.com/anomalyco/opencode/issues/41220) [Windows] UTF-8/GBK mojibake in model thinking chain and assistant output
- [#39319](https://github.com/anomalyco/opencode/issues/39319) Manually selected model reverts to the agent's configured model after every turn
- [#41203](https://github.com/anomalyco/opencode/issues/41203) Sidebar overlay hides chat content and interrupts session switching — poor UX in Desktop v1.18.15
- [#53459](https://github.com/anomalyco/opencode/issues/53459) [FEATURE]: task delegation needs enforceable cumulative parent deadlines and bounded cancellation
- [#41315](https://github.com/anomalyco/opencode/issues/41315) Workspace sync hangs in `connecting` forever when the target accepts but never answers
- [#41311](https://github.com/anomalyco/opencode/issues/41311) (macos) Notification POP sound only appears after opening the app
- [#41274](https://github.com/anomalyco/opencode/issues/41274) [Bug] CJK and wide emoji disappear behind translucent TUI dialog backdrops
- [#41255](https://github.com/anomalyco/opencode/issues/41255) OAuth callback servers bind 0.0.0.0 instead of loopback (codex, digitalocean)
- [#41250](https://github.com/anomalyco/opencode/issues/41250) V2 docs: Fix bash rendering as part of installation commands
- [#41198](https://github.com/anomalyco/opencode/issues/41198) [FEATURE]: Open-source contributions from humans
- [#54043](https://github.com/anomalyco/opencode/issues/54043) [FEATURE]: V2 - Show model and context use in subagent screen

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 28,369 · **Open issues:** 1,745 · **Last push:** <1h ago

On October 9, 2026, there were no new releases for Qwen Code, but several important changes were merged, including enhancements to managed agent roles and session owners in PR #13544, and fixes improving core functionality such as surfacing the PreToolUse ask content (PR #13697) and preserving prompt prefixes during memory index changes (PR #13521). Additionally, core discovery hints have been gated based on registered capabilities as highlighted in PR #13576. Among the new issues raised, the bug related to the browser-use skill being non-functional on Windows due to the Native Messaging host not being registered (issue #13663) stood out as particularly concerning. Overall, the day involved routine maintenance with notable improvements and issues to address moving forward.

#### ✅ Merged PRs
- [#13544](https://github.com/QwenLM/qwen-code/pull/13544) feat(managed-agent): persist workspace actor roles and session owners
- [#13697](https://github.com/QwenLM/qwen-code/pull/13697) fix(core): surface PreToolUse ask content on MCP tool confirmations (#13687)
- [#13521](https://github.com/QwenLM/qwen-code/pull/13521) fix(memory): preserve the prompt prefix when memory indexes change
- [#13576](https://github.com/QwenLM/qwen-code/pull/13576) fix(core): gate discovery hints on registered capabilities

#### 🐛 New Issues
- [#13707](https://github.com/QwenLM/qwen-code/issues/13707) stripAnalysisBlock: rebind-path gap strips reasoning pairs quoted inside the payload `priority/P3` `type/bug` `category/core` `scope/session-management` 💬5
- [#13689](https://github.com/QwenLM/qwen-code/issues/13689) Subagent definitions cannot contain ${identifier} — templateString throws on JS template literals and shell variables inside code fences `priority/P2` `type/bug` `category/core` `scope/core` 💬5
- [#13687](https://github.com/QwenLM/qwen-code/issues/13687) Main CI failed: E2E Tests — interactive/external-context-mem0-write.test.ts > … > 'uses two confirmations in default mode' (+8 more) `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬4
- [#13691](https://github.com/QwenLM/qwen-code/issues/13691) feat(permissions): add /auto-mode-setup command to ground classifier with local environment context `priority/P3` `type/feature-request` `category/security` `scope/commands` 💬4
- [#13683](https://github.com/QwenLM/qwen-code/issues/13683) bug(core): extension skills cannot be invoked by bare authored name after #10841 — live invocation rejects unambiguous names `priority/P2` `type/bug` `category/tools` `scope/extensions` 💬4
- [#13667](https://github.com/QwenLM/qwen-code/issues/13667) bug(web-shell): turn artifact card shows the model title instead of the workspace filename `priority/P3` `type/bug` `category/tools` `scope/web-shell` 💬4
- [#13663](https://github.com/QwenLM/qwen-code/issues/13663) browser-use skill is non-functional on Windows — Native Messaging host is never registered (macOS/Linux only) `priority/P2` `type/bug` `category/platform` `scope/installation` 💬4
- [#13650](https://github.com/QwenLM/qwen-code/issues/13650) Managed Agent: Hosted Session journal dies permanently after an outage spanning an activation renewal `priority/P1` `type/bug` `category/core` `scope/session-management` 💬4
- [#13662](https://github.com/QwenLM/qwen-code/issues/13662) Hook subprocess spawn lacks windowsHide: true — PowerShell hooks with -WindowStyle Hidden minimize the entire Windows Terminal window (ConPTY) `priority/P2` `type/bug` `category/platform` `scope/windows` 💬4
- [#13649](https://github.com/QwenLM/qwen-code/issues/13649) feat(a2a): contextId-less A2A messages each create an indistinguishable, unbounded chat session `priority/P2` `category/integration` `scope/session-management` `type/enhancement` 💬4
- [#13656](https://github.com/QwenLM/qwen-code/issues/13656) feat: expose current Desktop downloads on qwen.ai and keep README links updated automatically `priority/P3` `type/feature-request` `category/platform` `scope/installation` 💬4
- [#13710](https://github.com/QwenLM/qwen-code/issues/13710) MCP import from Claude configs (.claude.json / claude_desktop_config.json) with a UTF-8 BOM fails to parse `priority/P3` `type/bug` `category/configuration` `scope/mcp` 💬3
- [#13696](https://github.com/QwenLM/qwen-code/issues/13696) Release Failed for v0.25.1-preview.1 on 2026-10-08 `type/bug` `status/ready-for-agent` `autofix/skip` 💬3
- [#13708](https://github.com/QwenLM/qwen-code/issues/13708) [H4b follow-up] Foreground child wait is not restart-recoverable (checkpoint continuation) `priority/P2` `type/bug` `category/core` `scope/session-management` 💬3
- [#13709](https://github.com/QwenLM/qwen-code/issues/13709) [H4b follow-up] Count PostToolUse known-future mounts at child admission `priority/P1` `status/blocked` `type/bug` `category/core` 💬3
- [#13705](https://github.com/QwenLM/qwen-code/issues/13705) daemon git worktree guard: a heredoc fed to a shell or interpreter still executes its stripped body `priority/P1` `type/bug` `category/security` `scope/shell` 💬3
- [#13704](https://github.com/QwenLM/qwen-code/issues/13704) [Bug] arm64-linux vendored ripgrep binary fails on ARM64 hosts (e.g. Raspberry Pi 5); falls back to built-in grep `priority/P2` `type/bug` `category/platform` `scope/linux` 💬3
- [#13698](https://github.com/QwenLM/qwen-code/issues/13698) test(runtime-broker): harden retention coverage and skip diagnostics `priority/P3` `category/development` `scope/testing` `type/enhancement` 💬3
- [#13692](https://github.com/QwenLM/qwen-code/issues/13692) browser-use: skip the connect poll on platforms where no Native Messaging host can be registered `priority/P2` `type/bug` `category/performance` `scope/windows` 💬3
- [#13680](https://github.com/QwenLM/qwen-code/issues/13680) bug(desktop): vendored x64-linux ripgrep is rewritten post-link (RUNPATH $ORIGIN, phdrs moved) and SIGSEGVs on every startup probe `priority/P1` `type/bug` `category/platform` `scope/linux` 💬3
- [#13647](https://github.com/QwenLM/qwen-code/issues/13647) Main CI failed: SDK Java — HostedHarnessClientTest.lifecycleDetachStopsHeartbeatOnlyAfterConfirmedAbsence(boolean, int, boolean)[5] (+3 more) `type/bug` `status/ready-for-agent` `autofix/skip` 💬3
- [#13659](https://github.com/QwenLM/qwen-code/issues/13659) core(openaiContentGenerator): six copies of the closing think-tag vocabulary disagree on indentation whitespace `priority/P3` `status/blocked` `type/bug` `category/core` 💬3
- [#13660](https://github.com/QwenLM/qwen-code/issues/13660) core(openaiContentGenerator): protocolTagSanitized has no reader on the non-streaming route, so a suppressed trailing tag is neither logged nor counted `priority/P3` `status/blocked` `type/bug` `category/core` 💬3
- [#13702](https://github.com/QwenLM/qwen-code/issues/13702) Release Failed for v0.25.0-nightly.20261008.29aef7de40 on 2026-10-08 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#13684](https://github.com/QwenLM/qwen-code/issues/13684) Main CI failed: SDK Java on bb213cd05d97 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#13657](https://github.com/QwenLM/qwen-code/issues/13657) perf(managed-agent): measure local publication placement-lock contention `priority/P2` `type/feature-request` `category/performance` `scope/latency` 💬2
- [#13703](https://github.com/QwenLM/qwen-code/issues/13703) Deferred review findings from PR #13688: fix(ci): raise the O4 gate step ceiling above its failsafe fork timeout (#13684) 💬1
- [#13701](https://github.com/QwenLM/qwen-code/issues/13701) Deferred review findings from PR #13344: fix(managed-agent): e2e runner and image robustness from the #12692 R2 review 💬1
- [#13671](https://github.com/QwenLM/qwen-code/issues/13671) Deferred review findings from PR #13621: feat(managed-agent): add opt-in production replay-floor advancement for Session 💬1

#### 🔒 Closed Issues
- [#13687](https://github.com/QwenLM/qwen-code/issues/13687) Main CI failed: E2E Tests — interactive/external-context-mem0-write.test.ts > … > 'uses two confirmations in default mode' (+8 more)
- [#12389](https://github.com/QwenLM/qwen-code/issues/12389) bug(acp-bridge): local published file:// artifacts persist as restorable and fail session restore
- [#13696](https://github.com/QwenLM/qwen-code/issues/13696) Release Failed for v0.25.1-preview.1 on 2026-10-08
- [#13253](https://github.com/QwenLM/qwen-code/issues/13253) fix(core): the four new `toolSearchBridgeSentence` sites emit the bridge sentence without the registration gate their two pre-existing siblings use
- [#13360](https://github.com/QwenLM/qwen-code/issues/13360) Goal verifier treats aggregate wrapper results (agent/advisor/workflow/thread_read) as external_fact
- [#13394](https://github.com/QwenLM/qwen-code/issues/13394) refactor(transcript): give the internal Code Mode tool-result subtype a single owner
- [#13414](https://github.com/QwenLM/qwen-code/issues/13414) models.dev catalog: versionSpellingAlias refuses ids whose minor version carries a variant letter (glm-4-5v misses glm-4.5v), and the limit-less alias branch is untested
- [#12877](https://github.com/QwenLM/qwen-code/issues/12877) Desktop release matrix: the arm64 runner's glibc floor (ubuntu-22.04-arm) has no test witness
- [#13552](https://github.com/QwenLM/qwen-code/issues/13552) Main CI failed: E2E Tests — interactive/workflow-completion.test.ts > … > delivers 'WORKFLOW_MODEL_RESULT_12176' once

### Claude Code Skills (`anthropics/skills`)

Top open skill PRs by community engagement:
- [#1742](https://github.com/anthropics/skills/pull/1742) fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers
- [#1298](https://github.com/anthropics/skills/pull/1298) fix(skill-creator): isolate trigger evals and handle Windows and runtime failures
- [#1771](https://github.com/anthropics/skills/pull/1771) feat(skills): add proofcore-contract-auditor for smart contract notarization
- [#1734](https://github.com/anthropics/skills/pull/1734) Detect orphaned docx comments
- [#1703](https://github.com/anthropics/skills/pull/1703) Add md2video-audio skill

---

## 🦞 OpenClaw Ecosystem

### OpenClaw (`openclaw/openclaw`)

**Stars:** 391,488 · **Open issues:** 9,555 · **Last push:** <1h ago

On October 9, 2026, OpenClaw released version 2026.9.9, which included significant improvements across various components due to 185 commits. Key fixes addressed session creation failures on fresh stores, resolved issues with attempts to retry retired Ollama models, and improved the handling of malformed JSON in browser interactions. Notable merged pull requests focused on refactoring worker write envelopes and enhancing update recovery paths to streamline operations. However, the day was not without challenges, as new issues were reported, including difficulties with the package-swap update process from version 2026.9.8, indicating recovery permissions were deemed unsafe.

#### 🚀 New Releases
- [v2026.9.9](https://github.com/openclaw/openclaw/releases/tag/v2026.9.9) openclaw 2026.9.9

#### ✅ Merged PRs
- [#167515](https://github.com/openclaw/openclaw/pull/167515) fix: prevent session creation failures on fresh stores
- [#167552](https://github.com/openclaw/openclaw/pull/167552) refactor(state): share admitted worker write envelopes
- [#167564](https://github.com/openclaw/openclaw/pull/167564) test(update): cover lease database loss shapes reported after temp cleanup
- [#160047](https://github.com/openclaw/openclaw/pull/160047) fix(agents): stop retrying retired Ollama models as timeouts
- [#167482](https://github.com/openclaw/openclaw/pull/167482) fix: avoid false Doctor budget failures on large upgrade fixtures
- [#167244](https://github.com/openclaw/openclaw/pull/167244) fix(mattermost): stop retrying permanent API refusals
- [#167542](https://github.com/openclaw/openclaw/pull/167542) refactor(doctor): simplify migration and update recovery paths
- [#167065](https://github.com/openclaw/openclaw/pull/167065) fix(portals): unknown and unauthorized portal WebSocket upgrades hang
- [#167520](https://github.com/openclaw/openclaw/pull/167520) refactor: reduce Gateway database work for profile labels and sharing
- [#167412](https://github.com/openclaw/openclaw/pull/167412) fix(browser): reject malformed JSON bytes before filling forms
- [#167124](https://github.com/openclaw/openclaw/pull/167124) fix: agent_end hook context is missing jobId for scheduled agent runs
- [#166843](https://github.com/openclaw/openclaw/pull/166843) fix(ui): hold-to-dictate stops as soon as the mic button is released
- [#167526](https://github.com/openclaw/openclaw/pull/167526) refactor: simplify async persistence bookkeeping and fixtures
- [#166067](https://github.com/openclaw/openclaw/pull/166067) fix(ios): chat spends phone width on an avatar beside every reply, unlike the web chat
- [#167484](https://github.com/openclaw/openclaw/pull/167484) fix(browser): isolate session tab ownership by agent
- [#167532](https://github.com/openclaw/openclaw/pull/167532) refactor(transcripts): stream meeting exports through the read worker
- [#159037](https://github.com/openclaw/openclaw/pull/159037) fix(video): report unrecognized size overrides instead of dropping them silently
- [#167191](https://github.com/openclaw/openclaw/pull/167191) fix(tlon): links and images break on parenthesized URLs
- [#166804](https://github.com/openclaw/openclaw/pull/166804) perf(sessions): coalesce transcript metadata reads (step 4a)
- [#159730](https://github.com/openclaw/openclaw/pull/159730) fix(irc): long non-ASCII replies are lost when the server relays them
- [#167521](https://github.com/openclaw/openclaw/pull/167521) fix(qa): preserve Telegram fixture ownership in isolated gateways
- [#167462](https://github.com/openclaw/openclaw/pull/167462) fix(models): show every chat model a signed-in provider lists
- [#167463](https://github.com/openclaw/openclaw/pull/167463) fix(ollama): models pulled after setup never appear in model pickers
- [#165031](https://github.com/openclaw/openclaw/pull/165031) fix: keep aborted Claude CLI tool markup out of chat history
- [#163357](https://github.com/openclaw/openclaw/pull/163357) fix: recover transient security review notice failures
- [#163356](https://github.com/openclaw/openclaw/pull/163356) fix: stop security review cleanly when closed PR disables edits
- [#167504](https://github.com/openclaw/openclaw/pull/167504) refactor(sessions): move sharing writes and fork preparation to workers
- [#167514](https://github.com/openclaw/openclaw/pull/167514) fix(gateway): stop the Tailscale serve process when a start is interrupted
- [#167523](https://github.com/openclaw/openclaw/pull/167523) refactor(e2e): share scenario and guest execution paths
- [#167263](https://github.com/openclaw/openclaw/pull/167263) perf: reduce SQLite work during chat turns
- [#167468](https://github.com/openclaw/openclaw/pull/167468) chore(ui): refresh control ui locales
- [#167458](https://github.com/openclaw/openclaw/pull/167458) fix(models): a Gateway restart hides models that only a full refresh discovers
- [#167479](https://github.com/openclaw/openclaw/pull/167479) refactor(agents): simplify prepared input and context adapters
- [#167443](https://github.com/openclaw/openclaw/pull/167443) perf(git): prevent agent-triggered automatic maintenance
- [#167278](https://github.com/openclaw/openclaw/pull/167278) perf(sessions): reduce session-entry SQL and worker requests per turn
- [#167485](https://github.com/openclaw/openclaw/pull/167485) fix(plugins): pick the newest official plugin release the running OpenClaw supports
- [#167473](https://github.com/openclaw/openclaw/pull/167473) fix(worktrees): heal fetches with missing commit-graph tips
- [#167505](https://github.com/openclaw/openclaw/pull/167505) fix: continue replies when byte compaction declines
- [#167113](https://github.com/openclaw/openclaw/pull/167113) refactor: run immediate notifications through ordinary session execution
- [#166966](https://github.com/openclaw/openclaw/pull/166966) perf(sqlite): reduce worker admission and checkpoint statements
- [#158632](https://github.com/openclaw/openclaw/pull/158632) fix: tool_call rejects memory_search snake_case arguments that direct calls accept
- [#167513](https://github.com/openclaw/openclaw/pull/167513) fix(test): compaction worker clamp test fails on main after queue-anchored deadlines
- [#167511](https://github.com/openclaw/openclaw/pull/167511) fix: release qualification fails to resolve stable gateway metadata
- [#167194](https://github.com/openclaw/openclaw/pull/167194) perf(gateway): reduce projection database work during chat turns
- [#167509](https://github.com/openclaw/openclaw/pull/167509) fix(update): show every recorded update warning in the summary, report and status
- [#167507](https://github.com/openclaw/openclaw/pull/167507) fix(ui): stop sent drafts from returning after tab close
- [#167460](https://github.com/openclaw/openclaw/pull/167460) fix(models): show a provider's known models right after sign-in
- [#167493](https://github.com/openclaw/openclaw/pull/167493) test(agents,plugins): remove low-value tests (batch d025)
- [#167486](https://github.com/openclaw/openclaw/pull/167486) fix: prevent exec launch failures during repeated schema setup
- [#160604](https://github.com/openclaw/openclaw/pull/160604) fix: viewing an image with an OpenCode Go model fails with 400 MissingSessionID
- [#162901](https://github.com/openclaw/openclaw/pull/162901) fix(gateway): recheck models after failed catalog recovery
- [#167483](https://github.com/openclaw/openclaw/pull/167483) test(agents, sessions, plugins): remove low-value tests (batch d024)
- [#167478](https://github.com/openclaw/openclaw/pull/167478) fix(gateway): stop reporting terminal channel logouts as ready
- [#167427](https://github.com/openclaw/openclaw/pull/167427) fix(workboard): explain dispatch workspace refusals
- [#167470](https://github.com/openclaw/openclaw/pull/167470) fix(telegram): stop treating local owner rejection as ambiguous delivery
- [#160013](https://github.com/openclaw/openclaw/pull/160013) fix(browser): upload files as payloads on extension-backed profiles so Chrome does not reject them
- [#164406](https://github.com/openclaw/openclaw/pull/164406) fix(bedrock): activate custom provider routes in their configured region
- [#167467](https://github.com/openclaw/openclaw/pull/167467) fix(state): stop lease timers from firing early when a delay exceeds the Node timer limit
- [#167046](https://github.com/openclaw/openclaw/pull/167046) perf(sessions): reduce duplicate run preparation reads
- [#167464](https://github.com/openclaw/openclaw/pull/167464) ci: admit support and gateway method tests to Bun
- [#167291](https://github.com/openclaw/openclaw/pull/167291) perf(sessions): reduce append and maintenance database calls
- [#167449](https://github.com/openclaw/openclaw/pull/167449) perf(sessions): reduce disk-accounting queue waits
- [#166925](https://github.com/openclaw/openclaw/pull/166925) perf(sqlite): reuse freshness probes within session transactions
- [#167450](https://github.com/openclaw/openclaw/pull/167450) refactor(agents): consolidate repeated top-level runtime paths
- [#167454](https://github.com/openclaw/openclaw/pull/167454) perf(agents): reduce retained heap during concurrent runs
- [#145776](https://github.com/openclaw/openclaw/pull/145776) fix(voice-call): stop sharing answers across distinct consult requests
- [#167440](https://github.com/openclaw/openclaw/pull/167440) improve(ui): Skill Workshop shows each skill with its changes, files, and history in one view
- [#167453](https://github.com/openclaw/openclaw/pull/167453) perf(worktrees): consolidate shared packs and reclaim stale temp packs
- [#167451](https://github.com/openclaw/openclaw/pull/167451) fix(update): bound private SQLite snapshot amplification during candidate validation on a live install
- [#167407](https://github.com/openclaw/openclaw/pull/167407) perf(gateway): pause reconnect bootstrap during restart
- [#167361](https://github.com/openclaw/openclaw/pull/167361) refactor(ui): share command palette test hooks
- [#167447](https://github.com/openclaw/openclaw/pull/167447) perf(chat): keep personal account startup off the writer queue
- [#167426](https://github.com/openclaw/openclaw/pull/167426) fix(worktrees): use remote defaults after fetch failures
- [#167444](https://github.com/openclaw/openclaw/pull/167444) fix(models): model picker lists xAI models twice under an x-ai group
- [#167446](https://github.com/openclaw/openclaw/pull/167446) fix(history): keep committed reads responsive during writer stalls
- [#167438](https://github.com/openclaw/openclaw/pull/167438) fix(ui): model picker shows an Anthropic group for Claude CLI-only setups and keeps expanded All models rows
- [#167442](https://github.com/openclaw/openclaw/pull/167442) test(core,plugins,ui): remove low-value tests (batch d023)
- [#167434](https://github.com/openclaw/openclaw/pull/167434) perf(sessions): skip superseded branch headline payloads
- [#167433](https://github.com/openclaw/openclaw/pull/167433) fix(ollama): keep ollama.com setup out of the local Ollama provider
- [#167375](https://github.com/openclaw/openclaw/pull/167375) fix(ui): failed publication account discovery pins an undismissable error row
- [#166703](https://github.com/openclaw/openclaw/pull/166703) perf(agent-db): retain selected session execution through turn phases
- [#167400](https://github.com/openclaw/openclaw/pull/167400) fix(ui): center status dots in plugin catalog cards
- [#167374](https://github.com/openclaw/openclaw/pull/167374) fix(gateway): Control UI reconnects freeze the Gateway while plugins reload
- [#167358](https://github.com/openclaw/openclaw/pull/167358) fix: completed recovery history blocks future updates
- [#167377](https://github.com/openclaw/openclaw/pull/167377) fix: release validation misses interrupted package upgrades
- [#167330](https://github.com/openclaw/openclaw/pull/167330) fix(update): make completed recovery evidence best effort
- [#163117](https://github.com/openclaw/openclaw/pull/163117) fix(agents): run preflight compaction for preserve-state completion turns
- [#167338](https://github.com/openclaw/openclaw/pull/167338) chore(catalog): curate recommended models
- [#167335](https://github.com/openclaw/openclaw/pull/167335) refactor(gateway): share handler preparation and lifecycle projections
- [#167324](https://github.com/openclaw/openclaw/pull/167324) chore(ui): refresh control ui locales
- [#167420](https://github.com/openclaw/openclaw/pull/167420) chore(ui): refresh control ui locales
- [#167309](https://github.com/openclaw/openclaw/pull/167309) fix: turns fail after runtime notices on strict chat templates
- [#167387](https://github.com/openclaw/openclaw/pull/167387) fix(openai): new ChatGPT-login models stay hidden until an OpenClaw release
- [#167373](https://github.com/openclaw/openclaw/pull/167373) test(core,plugins,ui): remove low-value tests (batch d022)
- [#167401](https://github.com/openclaw/openclaw/pull/167401) refactor: deslop auth and config leftovers
- [#166995](https://github.com/openclaw/openclaw/pull/166995) refactor(sessions): retain inactive incognito source authority
- [#167396](https://github.com/openclaw/openclaw/pull/167396) fix: prevent chat stalls during progress-card saves
- [#167408](https://github.com/openclaw/openclaw/pull/167408) chore(i18n): refresh native locales
- [#167404](https://github.com/openclaw/openclaw/pull/167404) improve(skills): learned skills keep repeatable procedures, not facts or codebase knowledge
- [#167362](https://github.com/openclaw/openclaw/pull/167362) fix(telegram): keep the progress card while a media run owes the reply
- [#167370](https://github.com/openclaw/openclaw/pull/167370) feat(models): show each provider's recommended models first in pickers
- [#167115](https://github.com/openclaw/openclaw/pull/167115) refactor: move exec policy writes off the Gateway thread
- [#167284](https://github.com/openclaw/openclaw/pull/167284) fix: chained background replies escape Control UI sessions
- [#167384](https://github.com/openclaw/openclaw/pull/167384) fix(ui): open new sessions before draft cleanup settles
- [#167057](https://github.com/openclaw/openclaw/pull/167057) improve(ci): shorten full release validation critical path
- [#167380](https://github.com/openclaw/openclaw/pull/167380) fix(test): skill refresh e2e flakes when local CLI control step starts slowly under load
- [#167126](https://github.com/openclaw/openclaw/pull/167126) fix(agents): sessions_send into a busy session is reported queued but never runs
- [#167082](https://github.com/openclaw/openclaw/pull/167082) fix(control-ui): catch missing plugin label keys
- [#165473](https://github.com/openclaw/openclaw/pull/165473) fix(ios): keep voice replies and held answers in place, fold compaction notices

#### 🐛 New Issues
- [#167376](https://github.com/openclaw/openclaw/issues/167376) Update 2026.9.8→2026.9.9 fails twice at package-swap: recovery permissions are unsafe `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `P0` 💬7
- [#167181](https://github.com/openclaw/openclaw/issues/167181) Update failure: package-swap (2026.9.8) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬7
- [#167385](https://github.com/openclaw/openclaw/issues/167385) [Bug]: hand-deleted sessions-delete archive (.jsonl.deleted.*.zst) permanently blocks plugin session repair, codex data upgrade and update verification `clawsweeper:needs-live-repro` `impact:session-state` `P0` `issue-rating: 🐚 platinum hermit` 💬5
- [#167085](https://github.com/openclaw/openclaw/issues/167085) [Bug]: `message` tool unavailable in isolated cron runs on the claude-cli runtime, even when explicitly allowed `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬5
- [#167336](https://github.com/openclaw/openclaw/issues/167336) [Bug]: active-memory recall sub-sessions ("memory search agent" rows) remain visible in the session list with System and Automation sessions hidden `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#167052](https://github.com/openclaw/openclaw/issues/167052) WebChat renders a single generated assistant message twice (stream + committed replay?) `P2` `impact:message-loss` `impact:ux-friction` 💬4
- [#166964](https://github.com/openclaw/openclaw/issues/166964) Subagent completion delivery fails permanently when the requester authority is revoked, and no revoke reason is logged `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬3
- [#167415](https://github.com/openclaw/openclaw/issues/167415) [Bug]: sidebar rows: expand/open and one-click Archive swap the same spot across hover states; overclick archives the session `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬3
- [#167405](https://github.com/openclaw/openclaw/issues/167405) Update failure: package-swap (2026.9.8) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬3
- [#167371](https://github.com/openclaw/openclaw/issues/167371) [Bug]: MCP SSE transport silently switches to an uninitialized server session after eventsource auto-reconnect — tools/call fails with -32602 until the runtime is rebuilt `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#167365](https://github.com/openclaw/openclaw/issues/167365) `tools.effective` omits every non-memory plugin tool (e.g. `workboard_*`) and logs false "unknown entries" warnings `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#167033](https://github.com/openclaw/openclaw/issues/167033) [Bug]: upgrade from 2026.9.6 to 2026.9.7 and fs-safe from 0.18.1 to 0.21.1 breaks standalone root appliances `bug` `regression` `P2` `clawsweeper:needs-info` 💬3
- [#167316](https://github.com/openclaw/openclaw/issues/167316) [Bug]: Android repeatedly queries chat.history for unknown agent "openclaw", including after restart `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#167345](https://github.com/openclaw/openclaw/issues/167345) Let a turn continue after a mid-stream `WebSocket closed 1000` on the ChatGPT Responses transport `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#167299](https://github.com/openclaw/openclaw/issues/167299) Update failure: managed-service-update-handoff (2026.9.8) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `P0` 💬3
- [#167088](https://github.com/openclaw/openclaw/issues/167088) Unused-skill archive can remove a skill after fresh activity commits `no-stale` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` 💬3
- [#167269](https://github.com/openclaw/openclaw/issues/167269) [Bug]: Code mode: API.read() returns a file record, but the docs and the exec prompt imply a string `bug` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬3
- [#167256](https://github.com/openclaw/openclaw/issues/167256) Slack: allow user preferences to override native chart formatting `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#167574](https://github.com/openclaw/openclaw/issues/167574) Workboard: card is moved to blocked when the first model candidate fails, although the same run continues and completes on the fallback model `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#167565](https://github.com/openclaw/openclaw/issues/167565) package-swap validation rejects every managed update: staged journal sqlite inherits group-read bits from default umask 022 (macOS npm-global) `P0` `impact:ux-release-blocker` 💬2
- [#167562](https://github.com/openclaw/openclaw/issues/167562) Update failure: candidate-doctor (2026.9.8) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#167543](https://github.com/openclaw/openclaw/issues/167543) [Bug]: Retained final answer replaced by incomplete-turn warning after a reasoning-only follow-up `bug` `no-stale` `P1` `clawsweeper:fix-shape-clear` 💬2
- [#167557](https://github.com/openclaw/openclaw/issues/167557) [Bug]: Deferred plugin data/settings migration never converges (Linux/npm); package recovery reports "managed handoff lease database identity changed" `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#167475](https://github.com/openclaw/openclaw/issues/167475) Update failure: reconcile:abandoned (2026.9.8) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#167540](https://github.com/openclaw/openclaw/issues/167540) Upgrade 2026.9.8 → 2026.9.9 stuck at package-swap: "Package publication recovery permissions are unsafe" (5/5 attempts, deterministic) `clawsweeper:needs-info` `P0` `issue-rating: 🦐 gold shrimp` `maturity:stable` 💬2
- [#167506](https://github.com/openclaw/openclaw/issues/167506) OpenClaw 2026.9.8: deleted temporary handoff database blocks package recovery and all future updates `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` `P0` 💬2
- [#167283](https://github.com/openclaw/openclaw/issues/167283) Updater rejects package-swap on stale activation journal: hard-link race triggers "Package publication recovery permissions are unsafe" `P0` `impact:ux-release-blocker` 💬2
- [#167537](https://github.com/openclaw/openclaw/issues/167537) Issue on docs `P3` 💬1
- [#167536](https://github.com/openclaw/openclaw/issues/167536) [Docs Bug]: Documentation issue on /plugins/reference/a2a `bug` `docs` `P3` 💬2
- [#167382](https://github.com/openclaw/openclaw/issues/167382) [Bug]: On 2026.9.7, plugins.install from the official catalog picks @openclaw/perplexity-plugin@2026.9.9, which the same runtime then refuses `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#167501](https://github.com/openclaw/openclaw/issues/167501) [Bug]: release readback treats invalid content as transient unavailability `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#167499](https://github.com/openclaw/openclaw/issues/167499) FRV watch repeats throttled reads before GitHub retry boundaries `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#167497](https://github.com/openclaw/openclaw/issues/167497) [Bug]: wedged ingress stays green on both /healthz (liveness by contract) and /readyz (stale-socket/grace categories) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-info` 💬2
- [#167498](https://github.com/openclaw/openclaw/issues/167498) [Feature]: retention configuration for historical transcript archives; make post-archival compaction discoverable/automatic `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `impact:session-state` 💬2
- [#167346](https://github.com/openclaw/openclaw/issues/167346) `workboard dispatch`: point to `--admin` when a card's workspace is outside the caller's allowed workspaces `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#167413](https://github.com/openclaw/openclaw/issues/167413) Update failure: candidate-doctor (2026.9.8) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#167419](https://github.com/openclaw/openclaw/issues/167419) Update failure: package-doctor (2026.9.8) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#167395](https://github.com/openclaw/openclaw/issues/167395) Update failure: global-install-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#167397](https://github.com/openclaw/openclaw/issues/167397) Update failure: global-install-failed (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#167465](https://github.com/openclaw/openclaw/issues/167465) Update failure: global-install-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#167398](https://github.com/openclaw/openclaw/issues/167398) Update failure: package-swap (2026.9.8) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#167430](https://github.com/openclaw/openclaw/issues/167430) Update failure: package-swap (2026.9.8) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#167457](https://github.com/openclaw/openclaw/issues/167457) [Feature]: Android approval notifications with unlock-gated actions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#167418](https://github.com/openclaw/openclaw/issues/167418) [Feature]: render assistant MEDIA: lines as attachments in the Android app `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬2
- [#167305](https://github.com/openclaw/openclaw/issues/167305) [Bug]: Runtime-context notices become mid-transcript system messages and break Qwen Chat Completions `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#167410](https://github.com/openclaw/openclaw/issues/167410) [Bug]: Native Codex completion inherits an aborted run scope and fails before parent admission `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#167231](https://github.com/openclaw/openclaw/issues/167231) ssh sandbox backend: workspace publish fails with EINVAL on gVisor volume mounts (renameat2 RENAME_NOREPLACE) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#167349](https://github.com/openclaw/openclaw/issues/167349) Update failure: package-swap (2026.9.8) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#167172](https://github.com/openclaw/openclaw/issues/167172) [Bug]: Gateway full-process restart every ~40 min on update activation, with a 4-day-expired gateway_restart_handoff row as the only recorded reason `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#167277](https://github.com/openclaw/openclaw/issues/167277) Session controller: keep one Codex thread across interactive and internal turns `agents` `maintainer` `no-stale` `P2` 💬2
- [#167343](https://github.com/openclaw/openclaw/issues/167343) Update failure: gateway-recovery-verification (2026.9.9) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#167262](https://github.com/openclaw/openclaw/issues/167262) Update failure: runtime-verification-failed (2026.9.5) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#167321](https://github.com/openclaw/openclaw/issues/167321) Update failure: managed-service-preflight (2026.9.5) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#167233](https://github.com/openclaw/openclaw/issues/167233) Update failure: managed-service-update-handoff (2026.9.8) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#167318](https://github.com/openclaw/openclaw/issues/167318) Update failure: candidate-doctor (2026.9.8) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#167206](https://github.com/openclaw/openclaw/issues/167206) Update failure: post-update-verification (2026.9.8) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#167249](https://github.com/openclaw/openclaw/issues/167249) Update failure: requested (2026.9.8) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#167315](https://github.com/openclaw/openclaw/issues/167315) Update failure: package-update (2026.9.8) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#167208](https://github.com/openclaw/openclaw/issues/167208) Update failure: package-swap (2026.9.8) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#167247](https://github.com/openclaw/openclaw/issues/167247) Update failure: package-swap (2026.9.8) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#167297](https://github.com/openclaw/openclaw/issues/167297) Update failure: package-swap (2026.9.8) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#167313](https://github.com/openclaw/openclaw/issues/167313) Update failure: package-swap (2026.9.8) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#167314](https://github.com/openclaw/openclaw/issues/167314) [Bug]: doctor prints "Config unavailable" while editing that same config file (silent catch hides real schema-rejection error) `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#167287](https://github.com/openclaw/openclaw/issues/167287) Orphan session_windows rows repeatedly fail foreign_key_check, blocking all cron jobs and heartbeats `P1` `clawsweeper:needs-info` `impact:session-state` `issue-rating: 🦐 gold shrimp` 💬2
- [#167270](https://github.com/openclaw/openclaw/issues/167270) Feishu: cross-session send attaches internal reply anchor (UUID instead of om_ id), first send fails with 400 `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#167575](https://github.com/openclaw/openclaw/issues/167575) Update failure: package-swap (2026.9.8) 💬1
- [#167573](https://github.com/openclaw/openclaw/issues/167573) fix: a hosted model catalog adoption fails a turn that has not called the model yet `agents` `maintainer` `P1` `clawsweeper:source-repro` 💬1
- [#167496](https://github.com/openclaw/openclaw/issues/167496) [Bug]: auth-profiles migration replays its own .migrated-* archive over newer live credentials; passes are not idempotent `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-info` `impact:auth-provider` 💬1
- [#167495](https://github.com/openclaw/openclaw/issues/167495) [Bug]: Config writer can persist schema-invalid documents (legacy keys re-emitted on rewrite/shutdown-save) 💬1
- [#167555](https://github.com/openclaw/openclaw/issues/167555) Memory pressure: level=critical fires continuously with no warning tier; worker-retirement churn drives slow-SQLite log volume (WSL2) `P2` `impact:other` 💬1
- [#167123](https://github.com/openclaw/openclaw/issues/167123) [Bug]: agent_end hook context omits jobId for scheduled (cron) agent runs `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#167553](https://github.com/openclaw/openclaw/issues/167553) [Bug]: Control UI dictation commits the transcript twice on Android Chrome with a custom WebSocket realtime provider `bug` `bug:behavior` `P2` `impact:ux-friction` 💬1
- [#167545](https://github.com/openclaw/openclaw/issues/167545) [Feature]: Which interface should support device provisioning before first start? `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `impact:security` 💬1
- [#167539](https://github.com/openclaw/openclaw/issues/167539) [Android release] Signed APK remains at 2026.8.2: merged Talk fixes have no newer GitHub APK for verification `P2` `impact:ux-friction` 💬1
- [#167436](https://github.com/openclaw/openclaw/issues/167436) [Bug]: Gateway stays down (exit 78) after a restart during startup leaves a root `tailscale serve` running `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#167527](https://github.com/openclaw/openclaw/issues/167527) [Bug]: WeChat channel fails with "SYSTEM_ERROR: service not found" for 402 payment, but Web Control UI works `bug` `regression` `P2` 💬1
- [#167525](https://github.com/openclaw/openclaw/issues/167525) [Bug]: iMessage final replies rejected after plugin registry swap (no prepareRuntimeHandoff) `P1` `impact:message-loss` 💬1
- [#167522](https://github.com/openclaw/openclaw/issues/167522) [Bug]: Signal final replies rejected by durable delivery — missing prepareRuntimeHandoff in @openclaw/signal (2026.9.8) `P1` `impact:message-loss` 💬1
- [#167517](https://github.com/openclaw/openclaw/issues/167517) [Bug]: release-validation status omits qualification and diagnostic drain `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#167519](https://github.com/openclaw/openclaw/issues/167519) Session SQLite migration recovery report (session-sqlite-1791499327486-34195eab) `P2` `clawsweeper:needs-info` `impact:session-state` `issue-rating: 🦪 silver shellfish` 💬1
- [#167414](https://github.com/openclaw/openclaw/issues/167414) Successful update hides warning steps: disabled database auto-restore and unreplayed local overrides only appear in update status --json `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#167441](https://github.com/openclaw/openclaw/issues/167441) Bug: saved update receipts can suppress Dev updates and verified outcomes `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#167500](https://github.com/openclaw/openclaw/issues/167500) docs(release): require selected backport closure before qualification `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#167494](https://github.com/openclaw/openclaw/issues/167494) fix: release dispatch hides effective qualification selection `no-stale` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` 💬1
- [#167491](https://github.com/openclaw/openclaw/issues/167491) RSS growth ~1.3 GiB/hr under active workload; memory-pressure thresholds not configurable; no supported ceiling/restart 💬1
- [#167490](https://github.com/openclaw/openclaw/issues/167490) Session-archive maintenance leaves DB pages behind (890MB DB unchanged after full archival); no retention knob for historical transcripts 💬1
- [#167489](https://github.com/openclaw/openclaw/issues/167489) /healthz returns 200 while channel ingress is dead for hours; drain failures unlogged until crash 💬1
- [#167488](https://github.com/openclaw/openclaw/issues/167488) Doctor auth migration trusts its own .migrated-* archives over the current env-synced source (restores placeholder credentials) 💬1
- [#167487](https://github.com/openclaw/openclaw/issues/167487) Internal config writer can emit legacy agents.list and bypasses schema validation (boot exit 78) 💬1
- [#167477](https://github.com/openclaw/openclaw/issues/167477) Setup inventory stays retired after a config hot reload: setup-registry, setup-inference, model runtime refresh, subagent announce, and chat.metadata fail until restart `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬1
- [#167480](https://github.com/openclaw/openclaw/issues/167480) Plugin-admission captures in tmp/plugin-captures/ are never pruned (~1.8 GiB/day on long-lived VM) `P2` `impact:other` 💬1
- [#167416](https://github.com/openclaw/openclaw/issues/167416) [Bug]: Telegram local account-owner rejection becomes ambiguous delivery and replaces final replies with recovery notices `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#167469](https://github.com/openclaw/openclaw/issues/167469) `ask_user` prompts raised during a streaming turn never reach Mattermost in `progress` mode (and are lost with block replies); the tool reports `no_answer` instead of a delivery failure `P1` `impact:message-loss` `issue-rating: 🦪 silver shellfish` 💬1
- [#167472](https://github.com/openclaw/openclaw/issues/167472) Subagent sessions cannot register exec approvals: 'missing scope: operator.approvals' (no approval card, fail-closed) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#167038](https://github.com/openclaw/openclaw/issues/167038) CI: commands owner exceeds the qualification deadline on Node 24 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#167466](https://github.com/openclaw/openclaw/issues/167466) [Bug]: Gateway startup hangs for 15+ minutes with sustained single-core CPU and filesystem activity `bug` `regression` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#167439](https://github.com/openclaw/openclaw/issues/167439) openclaw update permanently fails with update-recovery-pending after npm prefix migration changes install file identities `P0` `impact:ux-release-blocker` 💬1
- [#167432](https://github.com/openclaw/openclaw/issues/167432) Transient SQLite sidecar held as an unverified agent store blocks updates `P0` `impact:ux-release-blocker` 💬1
- [#167428](https://github.com/openclaw/openclaw/issues/167428) 2026.9.9 update blocked: acp-session-metadata refuses on a stale deferred-plugin session import record bound to a different DB; supported recovery cannot repair or replace it `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#167424](https://github.com/openclaw/openclaw/issues/167424) Anthropic transport: history cache breakpoint lands on the runtime-context carrier, so conversation history is re-written to cache on every request `P2` `impact:other` 💬1
- [#167422](https://github.com/openclaw/openclaw/issues/167422) Update failure: plugin-target-unavailable (2026.9.3) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#167417](https://github.com/openclaw/openclaw/issues/167417) [Feature]: Workboard automation nudge should request one follow-up run when the automation is already running `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#167406](https://github.com/openclaw/openclaw/issues/167406) [Bug]: Windows MSIX 2026.9.900.0: Codex-enabled Gateway startup starves main thread `bug` `bug:crash` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#167403](https://github.com/openclaw/openclaw/issues/167403) [Feature]: add Google Antigravity CLI (agy) as an openclaw triage --agent option `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#167056](https://github.com/openclaw/openclaw/issues/167056) Release CI: reduce full validation migration and acceptance critical paths `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#167381](https://github.com/openclaw/openclaw/issues/167381) [Bug]: A second OpenRouter OAuth sign-in is saved inactive, and activating it with saved-auth fails ("The candidate route does not match…") on 2026.9.7 `clawsweeper:source-repro` `impact:auth-provider` `P0` `issue-rating: 🦞 diamond lobster` 💬1
- [#167354](https://github.com/openclaw/openclaw/issues/167354) Session controller: sessions_yield on Codex ignores native children from earlier turns `agents` `maintainer` `no-stale` `P2` 💬1
- [#167351](https://github.com/openclaw/openclaw/issues/167351) refactor(plugins): allowGatewaySubagentBinding is the de facto Gateway-hosted load marker; misnaming silently drops plugin reuse `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#167341](https://github.com/openclaw/openclaw/issues/167341) [Feature]: Let operators override the user-facing copy for classified model-request failures `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#167339](https://github.com/openclaw/openclaw/issues/167339) Update failure: finalize-doctor (2026.9.8) `P0` `impact:ux-release-blocker` 💬1
- [#167340](https://github.com/openclaw/openclaw/issues/167340) claude-cli backend: cron/announce runs deliver pre-tool narration joined to the final answer (no commentary callback on the cron path) `P2` `impact:ux-friction` 💬1
- [#167328](https://github.com/openclaw/openclaw/issues/167328) [Feature]: Support host-provided acquisition transport for the built-in web_fetch tool `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#167320](https://github.com/openclaw/openclaw/issues/167320) Telegram delivery silently stalls: session-admission race ('session changed before durable user-turn admission') rejects valid retries `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#167317](https://github.com/openclaw/openclaw/issues/167317) [v2026.9.9] 三个 breaking default change 集中爆发：session 存储 / secrets / exec 权限（13h 实战反馈） `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#167310](https://github.com/openclaw/openclaw/issues/167310) [Bug]: Generated images remain undelivered after handoff timeout and retired state-owner errors (2026.9.6, Weixin) `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#167293](https://github.com/openclaw/openclaw/issues/167293) [Bug]: /tools/invoke and tools.invoke return "Tool not available" for a session's discovered MCP tools `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#167290](https://github.com/openclaw/openclaw/issues/167290) [Bug] Durable turn advancement never settles for runs that background exec — outbox rows stuck at 'admitted', context-engine afterTurn accounting silently frozen (2026.9.6) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#167285](https://github.com/openclaw/openclaw/issues/167285) [Bug][Windows] Exited update driver whose PID is still reserved reports liveness: alive, permanently blocking openclaw update repair `P0` `impact:ux-release-blocker` 💬1
- [#167281](https://github.com/openclaw/openclaw/issues/167281) [Bug]: Codex automation add drops MCP alias, update saves it, scheduled tool unavailable (2026.9.8) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#167280](https://github.com/openclaw/openclaw/issues/167280) Session controller: a Stop on a Codex turn stalls the session's next turn for minutes `agents` `maintainer` `no-stale` `P1` 💬1
- [#167276](https://github.com/openclaw/openclaw/issues/167276) Session controller: carry subagent completion results into plugin-harness turns `agents` `maintainer` `no-stale` `P2` 💬1
- [#167272](https://github.com/openclaw/openclaw/issues/167272) Session controller: broadcast transcript updates outside the producing tool call's work scope `gateway` `maintainer` `no-stale` `P2` 💬1
- [#167271](https://github.com/openclaw/openclaw/issues/167271) Session controller: publish exactly one chat terminal per run when the message tool delivered the reply `gateway` `maintainer` `no-stale` `P2` 💬1
- [#167210](https://github.com/openclaw/openclaw/issues/167210) JSON.parse on request bodies without schema validation in multiple handlers `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `impact:security` 💬1
- [#167266](https://github.com/openclaw/openclaw/issues/167266) [Feature]: Durable ask_user questions and recoverable continuations across Gateway restarts `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#167347](https://github.com/openclaw/openclaw/issues/167347) [Feature]: Slack: utility-model status narration in progress mode (Discord parity)

#### 🔒 Closed Issues
- [#80319](https://github.com/openclaw/openclaw/issues/80319) QA tool-defaults suite conflates Codex-native tools with OpenClaw dynamic tool parity
- [#167376](https://github.com/openclaw/openclaw/issues/167376) Update 2026.9.8→2026.9.9 fails twice at package-swap: recovery permissions are unsafe
- [#167181](https://github.com/openclaw/openclaw/issues/167181) Update failure: package-swap (2026.9.8)
- [#48786](https://github.com/openclaw/openclaw/issues/48786) Feishu: replied/quoted message mentions show as raw @_user_N placeholders
- [#159985](https://github.com/openclaw/openclaw/issues/159985) [Bug]: Browser uploads fail with "DOM.setFileInputFiles: Not allowed" on driver "extension" profiles (Chrome Web Store extension)
- [#142619](https://github.com/openclaw/openclaw/issues/142619) codex: random subscription-route "subscription route requires ChatGPT auth in the native Codex home" failures under appServer.homeScope="user"
- [#165162](https://github.com/openclaw/openclaw/issues/165162) [Bug]: Session-bound cron advances lifecycleRevision before acquiring the session lane, causing host compaction persistence to fail repeatedly
- [#167052](https://github.com/openclaw/openclaw/issues/167052) WebChat renders a single generated assistant message twice (stream + committed replay?)
- [#160100](https://github.com/openclaw/openclaw/issues/160100) [Bug]: before_agent_finalize's revise retry.instruction silently dropped on Telegram-routed runs (works on CLI/webchat)
- [#160441](https://github.com/openclaw/openclaw/issues/160441) [Bug]: opencode-go imageModel/vision calls fail with 400 MissingSessionID (x-opencode-session header missing on image path)
- [#167405](https://github.com/openclaw/openclaw/issues/167405) Update failure: package-swap (2026.9.8)
- [#162853](https://github.com/openclaw/openclaw/issues/162853) [Bug]: Subagent-completion turns skip preflight compaction, so a session over its threshold is not compacted
- [#167299](https://github.com/openclaw/openclaw/issues/167299) Update failure: managed-service-update-handoff (2026.9.8)
- [#167088](https://github.com/openclaw/openclaw/issues/167088) Unused-skill archive can remove a skill after fresh activity commits
- [#167269](https://github.com/openclaw/openclaw/issues/167269) [Bug]: Code mode: API.read() returns a file record, but the docs and the exec prompt imply a string
- [#167565](https://github.com/openclaw/openclaw/issues/167565) package-swap validation rejects every managed update: staged journal sqlite inherits group-read bits from default umask 022 (macOS npm-global)
- [#167562](https://github.com/openclaw/openclaw/issues/167562) Update failure: candidate-doctor (2026.9.8)
- [#167475](https://github.com/openclaw/openclaw/issues/167475) Update failure: reconcile:abandoned (2026.9.8)
- [#167540](https://github.com/openclaw/openclaw/issues/167540) Upgrade 2026.9.8 → 2026.9.9 stuck at package-swap: "Package publication recovery permissions are unsafe" (5/5 attempts, deterministic)
- [#167283](https://github.com/openclaw/openclaw/issues/167283) Updater rejects package-swap on stale activation journal: hard-link race triggers "Package publication recovery permissions are unsafe"
- [#111405](https://github.com/openclaw/openclaw/issues/111405) Cron: agent runs that self-report ===DONE_ERR=== are recorded as ok — failureAlert never fires
- [#167537](https://github.com/openclaw/openclaw/issues/167537) Issue on docs
- [#167536](https://github.com/openclaw/openclaw/issues/167536) [Docs Bug]: Documentation issue on /plugins/reference/a2a
- [#158093](https://github.com/openclaw/openclaw/issues/158093) [Bug]: One transient SQLite I/O error disables the task registry until the Gateway is restarted
- [#167382](https://github.com/openclaw/openclaw/issues/167382) [Bug]: On 2026.9.7, plugins.install from the official catalog picks @openclaw/perplexity-plugin@2026.9.9, which the same runtime then refuses
- [#165460](https://github.com/openclaw/openclaw/issues/165460) [Bug]: Codex byte-fuse preflight drops the turn when the context engine declines compaction
- [#158631](https://github.com/openclaw/openclaw/issues/158631) [Bug]: memory_search rejects snake_case arguments when called through tool_call (default Tool Search)
- [#167346](https://github.com/openclaw/openclaw/issues/167346) `workboard dispatch`: point to `--admin` when a card's workspace is outside the caller's allowed workspaces
- [#167413](https://github.com/openclaw/openclaw/issues/167413) Update failure: candidate-doctor (2026.9.8)
- [#167419](https://github.com/openclaw/openclaw/issues/167419) Update failure: package-doctor (2026.9.8)
- [#167395](https://github.com/openclaw/openclaw/issues/167395) Update failure: global-install-failed (2026.9.4)
- [#167397](https://github.com/openclaw/openclaw/issues/167397) Update failure: global-install-failed (2026.9.4)
- [#167465](https://github.com/openclaw/openclaw/issues/167465) Update failure: global-install-failed (2026.9.4)
- [#167398](https://github.com/openclaw/openclaw/issues/167398) Update failure: package-swap (2026.9.8)
- [#167430](https://github.com/openclaw/openclaw/issues/167430) Update failure: package-swap (2026.9.8)
- [#145445](https://github.com/openclaw/openclaw/issues/145445) [Bug]: Voice-call Realtime returns one in-flight consult result for distinct requests
- [#166237](https://github.com/openclaw/openclaw/issues/166237) [Bug]: Each plugin replacement (config hot reload) retains the old plugin instance for the life of the process
- [#166438](https://github.com/openclaw/openclaw/issues/166438) [Bug]: Compaction failure reason is not logged (only generic agent-runner-failure)
- [#167305](https://github.com/openclaw/openclaw/issues/167305) [Bug]: Runtime-context notices become mid-transcript system messages and break Qwen Chat Completions
- [#162907](https://github.com/openclaw/openclaw/issues/162907) [Bug]: Talk consult can fail before model execution when finalized speech races stale pre-run orphan repair
- [#167349](https://github.com/openclaw/openclaw/issues/167349) Update failure: package-swap (2026.9.8)
- [#167262](https://github.com/openclaw/openclaw/issues/167262) Update failure: runtime-verification-failed (2026.9.5)
- [#167321](https://github.com/openclaw/openclaw/issues/167321) Update failure: managed-service-preflight (2026.9.5)
- [#167233](https://github.com/openclaw/openclaw/issues/167233) Update failure: managed-service-update-handoff (2026.9.8)
- [#167318](https://github.com/openclaw/openclaw/issues/167318) Update failure: candidate-doctor (2026.9.8)
- [#167206](https://github.com/openclaw/openclaw/issues/167206) Update failure: post-update-verification (2026.9.8)
- [#167249](https://github.com/openclaw/openclaw/issues/167249) Update failure: requested (2026.9.8)
- [#167315](https://github.com/openclaw/openclaw/issues/167315) Update failure: package-update (2026.9.8)
- [#167208](https://github.com/openclaw/openclaw/issues/167208) Update failure: package-swap (2026.9.8)
- [#167247](https://github.com/openclaw/openclaw/issues/167247) Update failure: package-swap (2026.9.8)
- [#167297](https://github.com/openclaw/openclaw/issues/167297) Update failure: package-swap (2026.9.8)
- [#167313](https://github.com/openclaw/openclaw/issues/167313) Update failure: package-swap (2026.9.8)
- [#166859](https://github.com/openclaw/openclaw/issues/166859) Slack progress shows a tool row for message react calls on the embedded runtime
- [#165786](https://github.com/openclaw/openclaw/issues/165786) crabbox: second create in a session fails as "already stopped" when the provider repeats tool-call ids
- [#166756](https://github.com/openclaw/openclaw/issues/166756) 2026.9.8: first cron condition-trigger eval per Gateway process loads the plugin registry synchronously on the main thread (~31 s), trigger times out and liveness fires
- [#159184](https://github.com/openclaw/openclaw/issues/159184) [Bug]: HTTP 400 with transient inner `code` triggers 9 same-model retries (misclassified as rate_limit)
- [#167575](https://github.com/openclaw/openclaw/issues/167575) Update failure: package-swap (2026.9.8)
- [#167496](https://github.com/openclaw/openclaw/issues/167496) [Bug]: auth-profiles migration replays its own .migrated-* archive over newer live credentials; passes are not idempotent
- [#167495](https://github.com/openclaw/openclaw/issues/167495) [Bug]: Config writer can persist schema-invalid documents (legacy keys re-emitted on rewrite/shutdown-save)
- [#167555](https://github.com/openclaw/openclaw/issues/167555) Memory pressure: level=critical fires continuously with no warning tier; worker-retirement churn drives slow-SQLite log volume (WSL2)
- [#167123](https://github.com/openclaw/openclaw/issues/167123) [Bug]: agent_end hook context omits jobId for scheduled (cron) agent runs
- [#167553](https://github.com/openclaw/openclaw/issues/167553) [Bug]: Control UI dictation commits the transcript twice on Android Chrome with a custom WebSocket realtime provider
- [#166842](https://github.com/openclaw/openclaw/issues/166842) [Bug]: Control UI hold-to-dictate stops as soon as the mic button is released
- [#167539](https://github.com/openclaw/openclaw/issues/167539) [Android release] Signed APK remains at 2026.8.2: merged Talk fixes have no newer GitHub APK for verification
- [#164977](https://github.com/openclaw/openclaw/issues/164977) [Bug]: aborted claude-cli completion turn persists raw tool-protocol text that the normal path refuses (2026.9.7)
- [#167436](https://github.com/openclaw/openclaw/issues/167436) [Bug]: Gateway stays down (exit 78) after a restart during startup leaves a root `tailscale serve` running
- [#167527](https://github.com/openclaw/openclaw/issues/167527) [Bug]: WeChat channel fails with "SYSTEM_ERROR: service not found" for 402 payment, but Web Control UI works
- [#167525](https://github.com/openclaw/openclaw/issues/167525) [Bug]: iMessage final replies rejected after plugin registry swap (no prepareRuntimeHandoff)
- [#167522](https://github.com/openclaw/openclaw/issues/167522) [Bug]: Signal final replies rejected by durable delivery — missing prepareRuntimeHandoff in @openclaw/signal (2026.9.8)
- [#167414](https://github.com/openclaw/openclaw/issues/167414) Successful update hides warning steps: disabled database auto-restore and unreplayed local overrides only appear in update status --json
- [#167491](https://github.com/openclaw/openclaw/issues/167491) RSS growth ~1.3 GiB/hr under active workload; memory-pressure thresholds not configurable; no supported ceiling/restart
- [#167490](https://github.com/openclaw/openclaw/issues/167490) Session-archive maintenance leaves DB pages behind (890MB DB unchanged after full archival); no retention knob for historical transcripts
- [#167489](https://github.com/openclaw/openclaw/issues/167489) /healthz returns 200 while channel ingress is dead for hours; drain failures unlogged until crash
- [#167488](https://github.com/openclaw/openclaw/issues/167488) Doctor auth migration trusts its own .migrated-* archives over the current env-synced source (restores placeholder credentials)
- [#167487](https://github.com/openclaw/openclaw/issues/167487) Internal config writer can emit legacy agents.list and bypasses schema validation (boot exit 78)
- [#167480](https://github.com/openclaw/openclaw/issues/167480) Plugin-admission captures in tmp/plugin-captures/ are never pruned (~1.8 GiB/day on long-lived VM)
- [#167416](https://github.com/openclaw/openclaw/issues/167416) [Bug]: Telegram local account-owner rejection becomes ambiguous delivery and replaces final replies with recovery notices
- [#164379](https://github.com/openclaw/openclaw/issues/164379) [Bug]: Custom Bedrock provider id (api: bedrock-converse-stream) fails "No API provider registered" since 2026.9.3 — plugin never activates for non-stock provider ids
- [#167439](https://github.com/openclaw/openclaw/issues/167439) openclaw update permanently fails with update-recovery-pending after npm prefix migration changes install file identities
- [#167432](https://github.com/openclaw/openclaw/issues/167432) Transient SQLite sidecar held as an unverified agent store blocks updates
- [#167424](https://github.com/openclaw/openclaw/issues/167424) Anthropic transport: history cache breakpoint lands on the runtime-context carrier, so conversation history is re-written to cache on every request
- [#167422](https://github.com/openclaw/openclaw/issues/167422) Update failure: plugin-target-unavailable (2026.9.3)
- [#167056](https://github.com/openclaw/openclaw/issues/167056) Release CI: reduce full validation migration and acceptance critical paths
- [#152535](https://github.com/openclaw/openclaw/issues/152535) [Bug]: SSE comment keepalives are discarded before the idle watchdog sees them, aborting healthy streams
- [#167339](https://github.com/openclaw/openclaw/issues/167339) Update failure: finalize-doctor (2026.9.8)
- [#167340](https://github.com/openclaw/openclaw/issues/167340) claude-cli backend: cron/announce runs deliver pre-tool narration joined to the final answer (no commentary callback on the cron path)
- [#166697](https://github.com/openclaw/openclaw/issues/166697) [Bug]: WebChat image completion inherits a saved WeChat route in a shared main session (2026.9.8)
- [#166297](https://github.com/openclaw/openclaw/issues/166297) [Feature]: expose assertion inventory coverage and unused allowances
- [#128314](https://github.com/openclaw/openclaw/issues/128314) before_agent_finalize retry can independently produce NO_REPLY again, silently dropping the turn even with #116006's transcript-isolation fix in place
- [#167285](https://github.com/openclaw/openclaw/issues/167285) [Bug][Windows] Exited update driver whose PID is still reserved reports liveness: alive, permanently blocking openclaw update repair
- [#167347](https://github.com/openclaw/openclaw/issues/167347) [Feature]: Slack: utility-model status narration in progress mode (Discord parity)

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 252,062 · **Open issues:** 47,838 · **Last push:** <1h ago

On October 8, 2026, Hermes Agent released version v0.21.6, a patch that consolidates approximately 2,100 pull requests merged since v0.21.5, marking a transition to a new stable release pipeline featuring a tested Docker image. Among the significant merged pull requests, notable improvements include ensuring that test runs do not leave detached gateways operational post-completion and that end-to-end suites are now restricted to run only on official release builds. However, this release has also introduced several critical issues, most notably bug #135298, which reports that the api_server fails to connect on startup when configured with zero messaging platforms, a regression affecting new users.

#### 🚀 New Releases
- [v0.21.6](https://github.com/nousresearch/hermes-agent/releases/tag/v0.21.6) Hermes Agent v0.21.6

#### ✅ Merged PRs
- [#135406](https://github.com/NousResearch/hermes-agent/pull/135406) Test runs no longer leave detached gateways running after they finish
- [#135409](https://github.com/NousResearch/hermes-agent/pull/135409) E2E suites run only on release builds, never on PRs or main pushes

#### 🐛 New Issues
- [#135383](https://github.com/NousResearch/hermes-agent/issues/135383) Bundled provider plugin 'solstice' fails to load: pm-runtime venv lacks httpx (floods logs) `type/bug` `comp/agent` `comp/cli` `comp/tui` 💬4
- [#135298](https://github.com/NousResearch/hermes-agent/issues/135298) [Bug]: api_server never connects on startup when zero messaging platforms are configured (regression in 0.21.6) `type/bug` `comp/gateway` `P1` `sweeper:risk-message-delivery` 💬4
- [#135210](https://github.com/NousResearch/hermes-agent/issues/135210) [Bug]: macOS Desktop Installer Fails at “Install Command and Apps + Desktop” — Solstice Missing httpx `type/bug` `comp/cli` `P1` `sweeper:risk-compatibility` 💬3
- [#135405](https://github.com/NousResearch/hermes-agent/issues/135405) [Bug]: Hermes Desktop Update Failure "exit code 2" `type/bug` `comp/cli` `P2` `needs-repro` 💬2
- [#135217](https://github.com/NousResearch/hermes-agent/issues/135217) [Bug]: v0.21.6 shows the v0.21.5 release date (2026.9.24) in `hermes --version` and the banner `type/bug` `comp/cli` `P3` `area/install-update` 💬2
- [#135328](https://github.com/NousResearch/hermes-agent/issues/135328) [Bug]: 1Password vault backend only lists Login items — credit cards never surface in browser_vault_list and can't be filled `type/bug` `duplicate` `comp/agent` `tool/browser` 💬2
- [#135412](https://github.com/NousResearch/hermes-agent/issues/135412) [Bug] disk-cleanup deletes permanent scripts/test_*.py on non-git installs (no protection, silent) `type/bug` `duplicate` `comp/plugins` `P2` 💬1
- [#135357](https://github.com/NousResearch/hermes-agent/issues/135357) [Bug]: Curator consolidation stops at staged writes and leaves an incomplete proposal when skill approval is enabled `type/bug` `comp/agent` `tool/skills` `area/config` 💬1
- [#135376](https://github.com/NousResearch/hermes-agent/issues/135376) Console personal API keys (sk-ant-usr-) misclassified as OAuth: Claude Code identity injected, requests fail with "credit balance too low" `type/bug` `duplicate` `comp/agent` `provider/anthropic` 💬1
- [#135337](https://github.com/NousResearch/hermes-agent/issues/135337) Dashboard: WhatsApp "Pair with QR" on a secondary profile checks the default profile's session (multiplex) `type/bug` `comp/cli` `platform/whatsapp` `P2` 💬1
- [#135347](https://github.com/NousResearch/hermes-agent/issues/135347) mem0 OSS + pgvector breaks on every update: drivers are the plugin's `postgres` extra, and nothing enables it `type/bug` `comp/cli` `comp/plugins` `tool/memory` 💬1
- [#135330](https://github.com/NousResearch/hermes-agent/issues/135330) kanban: PR completion contracts are GitHub-only; a Forgejo/Gitea PR card can never complete `type/feature` `comp/cli` `comp/cron` `P3` 💬1
- [#135411](https://github.com/NousResearch/hermes-agent/issues/135411) [Feature] execute_code: make the sandbox tool allow-list configurable (enable MCP tools / Code Mode) `type/feature` `comp/tools` `tool/mcp` `tool/code-exec`
- [#135392](https://github.com/NousResearch/hermes-agent/issues/135392) [Bug]: Fresh Nous Cloud instance enters gateway ownership restart loop after environment update `type/bug` `comp/gateway` `provider/nous` `area/auth`
- [#135368](https://github.com/NousResearch/hermes-agent/issues/135368) [Bug]: Desktop avatar "Generate" reports no image backend on a multiplexed `hermes serve` (`image.generate` runs unscoped → `UnscopedSecretError` on `HERMES_CODEX_BASE_URL`) `type/bug` `comp/tui` `tool/vision` `provider/openai`
- [#135365](https://github.com/NousResearch/hermes-agent/issues/135365) compute host: HERMES_HOME mismatch on Windows when HERMES_HOME uses forward slashes (turn isolation silently falls back inline) `type/bug` `comp/tui` `area/config` `P2`
- [#135366](https://github.com/NousResearch/hermes-agent/issues/135366) turn_isolation: prompt.submit sent on message.complete returns queued but never runs (same text dropped as self-duplicate) `type/bug` `comp/tui` `P2` `sweeper:risk-session-state`
- [#135363](https://github.com/NousResearch/hermes-agent/issues/135363) [Feature]: Windows updater dialog: show progress (bar/stage/files) and an optional 'shut down PC after update' `type/feature` `P3` `sweeper:risk-platform-windows` `comp/desktop`
- [#135367](https://github.com/NousResearch/hermes-agent/issues/135367) Built-in plugin toolsets (image_gen, computer_use) intermittently report 'Tool does not exist' despite being connected/enabled `type/bug` `comp/tools` `comp/plugins` `P3`
- [#135350](https://github.com/NousResearch/hermes-agent/issues/135350) Plugin approve directive cannot control approval grain (session/always shown on gateway even for 'always ask' rules) `type/feature` `comp/cli` `comp/gateway` `comp/plugins`
- [#135344](https://github.com/NousResearch/hermes-agent/issues/135344) kanban dispatcher: _pid_recycled compares the composed worker fingerprint by exact equality, so live macOS workers read as recycled and get duplicated `type/bug` `comp/cli` `comp/cron` `P2`
- [#135339](https://github.com/NousResearch/hermes-agent/issues/135339) clarify: typed reply to a second pending clarify in the same session is lost (TEXT_NO_PENDING race) `type/bug` `comp/gateway` `P2` `sweeper:risk-session-state`
- [#135329](https://github.com/NousResearch/hermes-agent/issues/135329) [Bug]: Docker: first PM dependency generation drops the image's shipped extras (mcp missing → every MCP server fails to connect) `type/bug` `comp/cli` `tool/mcp` `area/docker`

#### 🔒 Closed Issues
- [#135383](https://github.com/NousResearch/hermes-agent/issues/135383) Bundled provider plugin 'solstice' fails to load: pm-runtime venv lacks httpx (floods logs)
- [#135328](https://github.com/NousResearch/hermes-agent/issues/135328) [Bug]: 1Password vault backend only lists Login items — credit cards never surface in browser_vault_list and can't be filled

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 93,418 · **Open issues:** 8,641 · **Last push:** <1h ago

On October 9, 2026, vLLM saw no new releases; however, several important merged pull requests enhanced the project. Key changes include a fix for the x86 Docker build, validation for incompatible MoE adapter formats, and improvements in handling multimodal embeddings in Llama 4, ensuring better performance and compatibility. Additionally, a significant performance enhancement was made by reducing fallback decode CPU usage by 69% at 32K. Notably, a new issue was raised regarding the MXFP4 weight with block-FP8 activation, which is being mistakenly listed as supported on Hopper while facing rejection by the humming-kernels version 0.1.16, highlighting ongoing challenges with compatibility.

#### ✅ Merged PRs
- [#60488](https://github.com/vllm-project/vllm/pull/60488) Fix x86 docker build
- [#59829](https://github.com/vllm-project/vllm/pull/59829) [BugFix][DiffusionGemma][CPU] Copy async output snapshots instead of aliasing reused buffers
- [#59924](https://github.com/vllm-project/vllm/pull/59924) [Bugfix][LoRA] Validate incompatible MoE adapter formats
- [#57633](https://github.com/vllm-project/vllm/pull/57633) [Bugfix][Spec Decode] Fix multimodal embedding merge in Llama 4 and Mistral Large 3 EAGLE drafters
- [#59875](https://github.com/vllm-project/vllm/pull/59875) [Bugfix][EC Connector] Release shared memory on NIXL setup failure
- [#52299](https://github.com/vllm-project/vllm/pull/52299) [Frontend] shutdown engine core and its sub processes asap when initializing
- [#59263](https://github.com/vllm-project/vllm/pull/59263) [Bugfix][Frontend] Forward the reasoning wiring to the engine for batch chat completions
- [#60497](https://github.com/vllm-project/vllm/pull/60497) [Perf] Reduce fallback decode CPU by 69% at 32K
- [#60253](https://github.com/vllm-project/vllm/pull/60253) [CI] Run GH200 test on the shared arm64 CI image
- [#59528](https://github.com/vllm-project/vllm/pull/59528) [Bugfix] Keep the GLM-5.3 kpool tail and Qwen4 QSA ring out of the null block
- [#48084](https://github.com/vllm-project/vllm/pull/48084) [Frontend] Support min_p in the Responses API
- [#59447](https://github.com/vllm-project/vllm/pull/59447) [ROCm][Build] Fail fast when `setup.py develop` deps aren't pip-preinstalled
- [#60677](https://github.com/vllm-project/vllm/pull/60677) [Frontend] Expose /v1/systemone without an opt-in flag
- [#60682](https://github.com/vllm-project/vllm/pull/60682) [Bugfix][HiSparse] Route by swap-row capacity, not the index-group workspace
- [#59997](https://github.com/vllm-project/vllm/pull/59997) [Bugfix][KV Connector][NIXL] Transfer the whole PLE short-conv page in disaggregated P/D
- [#60079](https://github.com/vllm-project/vllm/pull/60079) [MoE] MXFP4 oracle: add CUTLASS W4A4 backend and BF16 activation fallback
- [#59627](https://github.com/vllm-project/vllm/pull/59627) [Bugfix][Structured Output] Feed the token that implicitly ends reasoning to the grammar
- [#60447](https://github.com/vllm-project/vllm/pull/60447) [Bugfix][MoE] Size the permute scratch from its inputs
- [#60620](https://github.com/vllm-project/vllm/pull/60620) [Attention] Allow an NVFP4 KV cache on SM90 with fa2
- [#58878](https://github.com/vllm-project/vllm/pull/58878) [Test][Quantization] Gate CUTLASS W4A8 kernel tests to SM90
- [#59334](https://github.com/vllm-project/vllm/pull/59334) [ROCm][CI] Add coverage for AiterExperts token padding: inf/nan garbage rows
- [#60472](https://github.com/vllm-project/vllm/pull/60472) [Bugfix] Close MessageQueue zmq resources via finalizer to avoid exit
- [#56592](https://github.com/vllm-project/vllm/pull/56592) [Bugfix][Frontend] Honor stop_token_ids on the Responses API
- [#56983](https://github.com/vllm-project/vllm/pull/56983) [Spec Decode][Model] Support DFlash2 draft models with GLM-5.3-Flash
- [#60533](https://github.com/vllm-project/vllm/pull/60533) [Bugfix][Prefix caching] Fix inconsistent hybrid Mamba prefix cache boundaries
- [#54597](https://github.com/vllm-project/vllm/pull/54597) [Bugfix][MiniMax-M3] Guard sparse decode sentinel indices
- [#60312](https://github.com/vllm-project/vllm/pull/60312) [CI][Build] build macos wheels using abi3
- [#60651](https://github.com/vllm-project/vllm/pull/60651) [Bugfix] Followup to #59299: preserve Unicode in structured decision state prompts
- [#60259](https://github.com/vllm-project/vllm/pull/60259) [Doc] Require GCC 13 for CUDA source builds
- [#56875](https://github.com/vllm-project/vllm/pull/56875) [Perf] Enable Kimi K3 shared expert sharding with DeepEP v2
- [#60633](https://github.com/vllm-project/vllm/pull/60633) [CI][ROCm] Reuse AITER's prebuilt MoE module in the modular-kernel harness
- [#55686](https://github.com/vllm-project/vllm/pull/55686) [Quantization] Enable shared expert fusion compatibility with online `shared_expert` quantization (showcase: along Quark MXFP4 routed experts)
- [#60021](https://github.com/vllm-project/vllm/pull/60021) [ROCm][Qwen4Exp] Use fused PLE Triton kernels on the AMD backend
- [#60364](https://github.com/vllm-project/vllm/pull/60364) [Bugfix] Don't int-sort attention-type names in --kv-cache-dtype-skip-layers for packed KV dtypes
- [#60412](https://github.com/vllm-project/vllm/pull/60412) [Bugfix] Don't warn about missing watermark config for default requests
- [#59917](https://github.com/vllm-project/vllm/pull/59917) [Bugfix] Scope deprecated CLI argument warnings to the parser that defines them
- [#60517](https://github.com/vllm-project/vllm/pull/60517) [Compile] Remove torch.compile-based sequence parallelism and AsyncTP
- [#56959](https://github.com/vllm-project/vllm/pull/56959) [Platform] Support platform-specific MLA prefill backend selection
- [#60271](https://github.com/vllm-project/vllm/pull/60271) [Bugfix] Check batch-invariance support for every attention backend
- [#60388](https://github.com/vllm-project/vllm/pull/60388) [Bugfix][ROCm] RDNA3 W4A16 MoE: handle the N-first CT weight layout
- [#59591](https://github.com/vllm-project/vllm/pull/59591) [ROCm][Perf] Kimi-K3 Store only the current rank's shards in latent MoE up-proj
- [#59299](https://github.com/vllm-project/vllm/pull/59299) [Feat] Structured decisions endpoint (`/v1/systemone`)
- [#59412](https://github.com/vllm-project/vllm/pull/59412) [Bugfix][ROCm] Select page-aligned kernel blocks for pooled indexers so the block table addresses storage pages (GLM-5.3-Flash)
- [#53250](https://github.com/vllm-project/vllm/pull/53250) [Bugfix][MoRIIO] Prevent remote KV reload after decoder preemption
- [#60161](https://github.com/vllm-project/vllm/pull/60161) [KV Connector][NIXL] Register HiSparse host pool under single TP Rank
- [#60429](https://github.com/vllm-project/vllm/pull/60429) [Bugfix][HiSparse] Drop the unaccounted, write-only prefill mirror staging buffer

#### 🐛 New Issues
- [#60600](https://github.com/vllm-project/vllm/issues/60600) [Bug][Humming] MXFP4 weight + block-FP8 activation is listed as supported on Hopper, but humming-kernels 0.1.16 rejects it `quantization` 💬2
- [#60611](https://github.com/vllm-project/vllm/issues/60611) [Bug]: AOT compile artifacts fail to load with mode `DYNAMO_TRACE_ONCE` `bug` 💬2
- [#60552](https://github.com/vllm-project/vllm/issues/60552) [Bug]: `POST /reset_prefix_cache?reset_running_requests=true` returns HTTP 500 while an OffloadingConnector load is in flight `bug` 💬2
- [#60559](https://github.com/vllm-project/vllm/issues/60559) [RFC]: TPSP Fusion Design `RFC` `quantization` 💬1
- [#60560](https://github.com/vllm-project/vllm/issues/60560) [Bug][Spec Decode] DFlash2 acceptance drops ~5.5 points when the hybrid KV cache manager makes its sliding-window draft a real SWA group (BLHNC, NIXL P/D) `kv-connector` `kv-cache-manager` 💬2
- [#60561](https://github.com/vllm-project/vllm/issues/60561) [Performance][NIXL] BLHNC MLA caches lost whole-row registration in #53781 and now need more NIXL descriptors than LBHNC `kv-connector` 💬2
- [#60744](https://github.com/vllm-project/vllm/issues/60744) [Bug] pause_generation(mode="keep", clear_cache=True) raises when a streaming-input session is parked between turns 💬1
- [#60703](https://github.com/vllm-project/vllm/issues/60703) [Bug]: glm47 streaming parser silently swallows the rest of the stream (including the real tool call) after a stray `<tool_call>` token in prose `tool-calling` 💬1
- [#60664](https://github.com/vllm-project/vllm/issues/60664) [Bug]: GPT-OSS Harmony json_schema/json_object constraints apply from token 0 and drop reasoning `structured-output` `tool-calling` `gpt-oss` 💬1
- [#60660](https://github.com/vllm-project/vllm/issues/60660) FlashInfer MNNVL allreduce: runtime CUDA ILLEGAL_ADDRESS (700) surfacing at signal_pads cuMemFree during multi-block long prefill — persists after disabling MTP / comm fusion / fp8 custom ops / norm+act fusion `quantization` 💬1
- [#60700](https://github.com/vllm-project/vllm/issues/60700) [Bug]: W4A8 (int4×FP8) MoE asserts hidden/intermediate %256 for every backend, so HUMMING cannot load shapes CUTLASS rejects (e.g. intermediate 640) `nvidia` `quantization` 💬1
- [#60629](https://github.com/vllm-project/vllm/issues/60629) [Bug]: Boolean sweep plot filters discard or retain the wrong benchmark runs 💬1
- [#60608](https://github.com/vllm-project/vllm/issues/60608) [Bug]: Exllama GPTQ and RDNA3 W4A16 kernels silently produce wrong output when `group_size % 32 != 0` (reproduced on CUDA sm_120 and ROCm gfx1100) `rocm` `quantization` 💬1
- [#60581](https://github.com/vllm-project/vllm/issues/60581) [Usage]: ROCm gfx950: MXFP4 activation quant not fused into GEMM; Quark INT4 W4A16 uses a very slow Triton kernel `rocm` `usage` 💬1
- [#60576](https://github.com/vllm-project/vllm/issues/60576) [Feature]: Extend --numa-bind to the DP coordinator and multi-API-server processes 💬1
- [#60536](https://github.com/vllm-project/vllm/issues/60536) [Bug]: GLM-5.3-Flash JIT-compiles DeepGEMM `tf32_hc_prenorm_gemm` during serving (20 mHC split-K variants are never warmed) `bug` `glm` 💬1
- [#60537](https://github.com/vllm-project/vllm/issues/60537) [Bug]: `DeepSeek-V4.1-Flash`: `/v1/messages` hoists mid-conversation system messages without `--chat-template`, breaking prefix caching `deepseek` `kv-cache-manager` `DSv4.1` 💬1
- [#60755](https://github.com/vllm-project/vllm/issues/60755) [Bug]: vLLM 0.31.0 Mooncake connector crashes after Decode timeout `bug`
- [#60752](https://github.com/vllm-project/vllm/issues/60752) [Bug]: grouped_topk selects wrong experts with more than eight groups
- [#60722](https://github.com/vllm-project/vllm/issues/60722) [RFC]: Strcutured Outputs Not Respected When Reasoning Implicitly Ends `structured-output` `RFC` `tool-calling`
- [#60708](https://github.com/vllm-project/vllm/issues/60708) [Feature]: [New Model]: Native support for Qwen3BidirectionalModel (ai-sage/Giga-Embeddings-instruct-480M-0826) `feature request`
- [#60698](https://github.com/vllm-project/vllm/issues/60698) [Bug]: Sweep server readiness can succeed after its startup timeout
- [#60694](https://github.com/vllm-project/vllm/issues/60694) [Feature][KVConnector][NIXL] NixlPushConnector inverts the transfer initiator but hides no latency: the KV is still sent as one batch after prefill `kv-connector`
- [#60691](https://github.com/vllm-project/vllm/issues/60691) [Feature]: Apply model-owned MTP shard selection to RunAI ModelStreamer `quantization`
- [#60685](https://github.com/vllm-project/vllm/issues/60685) [Bug]: EPLB counts load for the wrong expert when step_interval < window_size
- [#60622](https://github.com/vllm-project/vllm/issues/60622) [Feature]: Export live EAGLE-3 training data (committed tokens + aux hidden states) for online draft-model adaptation `speculative-decoding`
- [#60599](https://github.com/vllm-project/vllm/issues/60599) [Usage]: Recommended way to serve multiple models (e.g. embedding) on a single GPU `usage`
- [#60587](https://github.com/vllm-project/vllm/issues/60587) [Bug] DeepSeek-V4-Flash-Vision-Exp fails at engine init on v0.31.0: deep_gemm_fp8_o_proj shape mismatch '[4, 4096] vs [4, 1024]' from BOTH sparse-MLA backends (sm_121) `deepseek` `DSv4`
- [#60580](https://github.com/vllm-project/vllm/issues/60580) [Bug]: xgrammar lets Muse Glimmer control tokens (<|eom|>, <|start|>, <|message|>) into JSON strings; muse_glimmer parser then silently truncates the answer `structured-output` `tool-calling`
- [#60563](https://github.com/vllm-project/vllm/issues/60563) [Feature]: Support per-parameter meshes in NCCL M2N weight transfer
- [#60551](https://github.com/vllm-project/vllm/issues/60551) External speculators (DSpark Qwen3 draft, DFlash2) crash with kv_cache_dtype=nvfp4_ds_mla on GLM-5.3 NVFP4: draft-model code assumes split k/v `glm`
- [#60547](https://github.com/vllm-project/vllm/issues/60547) [Bug]: stream_interval is ignored for RequestOutputKind.CUMULATIVE (the SamplingParams default)

#### 🔒 Closed Issues
- [#38551](https://github.com/vllm-project/vllm/issues/38551) [Bug]: AssertionError: Encoder cache miss crashes engine with MTP + multimodal under high concurrency
- [#59642](https://github.com/vllm-project/vllm/issues/59642) [Bug]: Qwen3.8-flash-next 0% MTP acceptance rate in disaggregated PD serving
- [#41485](https://github.com/vllm-project/vllm/issues/41485) [Bug]: Qwen3-VL deepstack ValueError "Requested more deepstack tokens than available in buffer" with chunked prefill + prefix caching
- [#46796](https://github.com/vllm-project/vllm/issues/46796) [Bug]: DeepSeek-V4-Flash fails to start on B300 (SM100) — DeepGEMM sm100_tf32_hc_prenorm_gemm kernel launch fails (invalid argument on CUDA 13, invalid configuration argument on CUDA 12.9)
- [#60473](https://github.com/vllm-project/vllm/issues/60473) [Bug][ROCm][MoRIIO] A decode whose notify port is already in use starts and reports healthy without its notify listener, so its WRITE requests hang
- [#43171](https://github.com/vllm-project/vllm/issues/43171) [Feature]: Add separate_reasoning option for OpenAI chat completion API
- [#59786](https://github.com/vllm-project/vllm/issues/59786) [Bug][CPU] V1 CPU sampling (fused_gumbel_argmax) is biased: the 2^20 noise table makes about half of a 152K vocabulary unreachable
- [#57630](https://github.com/vllm-project/vllm/issues/57630) [Bug][Spec Decode] Llama 4 / Mistral Large 3 EAGLE drafters crash at startup with a multimodal target: no attribute `_embed_text_input_ids`
- [#60396](https://github.com/vllm-project/vllm/issues/60396) Unvalidated passthrough in `_construct_message_from_response_item` lets 14 of 32 valid input item types reach the renderer — `KeyError: 'role'` for dicts, `TypeError: not subscriptable` for pydantic models
- [#48094](https://github.com/vllm-project/vllm/issues/48094) [CI Failure]: vllm chat --url : 'url' is deprecated..warning
- [#59828](https://github.com/vllm-project/vllm/issues/59828) [Bug][DiffusionGemma][CPU]: CPU async output snapshots can alias reused sampler buffers
- [#59608](https://github.com/vllm-project/vllm/issues/59608) [Bug]: Structured output skips the `<tool_call>` that implicitly ends reasoning, so GLM-4.7/5.x `required`/named tool calls are lost
- [#60600](https://github.com/vllm-project/vllm/issues/60600) [Bug][Humming] MXFP4 weight + block-FP8 activation is listed as supported on Hopper, but humming-kernels 0.1.16 rejects it
- [#58158](https://github.com/vllm-project/vllm/issues/58158) [Bug]: v0.30 dependencies raise the effective compiler floor above GCC 11.3
- [#58858](https://github.com/vllm-project/vllm/issues/58858) [Question][ROCm] GLM-5.3-Flash kpool indexer: does the 640-token block table reach 32-pool pages on gfx942/gfx950 too?
- [#59269](https://github.com/vllm-project/vllm/issues/59269) [Bug]: vllm.utils.system_utils.suppress_stdout silently suppresses stderr when sys.stdout is bound to fd 2
- [#59268](https://github.com/vllm-project/vllm/issues/59268) [Bug]: vllm.utils.system_utils.suppress_stdout crashes when sys.stdout has no file descriptor
- [#59189](https://github.com/vllm-project/vllm/issues/59189) [Bug]: GB200 DP4+EP serving crashes in NCCL symmetric reduce-scatter after #48247
- [#60576](https://github.com/vllm-project/vllm/issues/60576) [Feature]: Extend --numa-bind to the DP coordinator and multi-API-server processes
- [#60212](https://github.com/vllm-project/vllm/issues/60212) [Bug]: DeepStream video backend raises ZeroDivisionError on MP4s with moov at the end, and truncates fragmented MP4s
- [#60311](https://github.com/vllm-project/vllm/issues/60311) [Build]: Build macOS wheel using Python’s stable ABI
- [#60093](https://github.com/vllm-project/vllm/issues/60093) [Bug]: enable_moe_shared_loras crashes at startup on 3D-weight MoE models

### SGLang (`sgl-project/sglang`)

**Stars:** 36,894 · **Open issues:** 5,594 · **Last push:** <1h ago

On October 9, 2026, there were no new releases for SGLang, but several important pull requests were merged. Notably, the introduction of the default safe-gate Blackwell prefill set to FlashInfer aims to enhance performance, alongside improvements to the MemCache with changes for serving disabled models through `UnifiedRadixCache`. Additionally, the XPUAttentionBackend received updates to enable ring attention, while significant bug fixes addressed issues with deterministic inference and CUDA graph behavior. One particularly notable new issue reported a critical error when using the `--enable-deterministic-inference` flag combined with a repetition penalty, causing scheduler failures, which may pose challenges for stability moving forward.

#### ✅ Merged PRs
- [#43246](https://github.com/sgl-project/sglang/pull/43246) [KDA] Default safe-gate Blackwell prefill to FlashInfer
- [#43173](https://github.com/sgl-project/sglang/pull/43173) [PD] Charge decode admission the page-rounded allocation when the radix cache is disabled
- [#41406](https://github.com/sgl-project/sglang/pull/41406) [XPU] Enable ring attention on XPUAttentionBackend
- [#42980](https://github.com/sgl-project/sglang/pull/42980) [diffusion] Share SANA-WM refiner block computation
- [#43253](https://github.com/sgl-project/sglang/pull/43253) [MemCache] Skip KV events and eviction config on a disabled radix cache
- [#39817](https://github.com/sgl-project/sglang/pull/39817) [XPU] Misc changes to support XPU
- [#41857](https://github.com/sgl-project/sglang/pull/41857) [XPU] split Intel nightly into kernel-main and kernel-wheel jobs
- [#42923](https://github.com/sgl-project/sglang/pull/42923) [MemCache] Return only the matched length from `match_prefix`; read KV indices off the node path
- [#43200](https://github.com/sgl-project/sglang/pull/43200) [MemCache] Serve disabled hybrid-SWA models with `UnifiedRadixCache`
- [#43199](https://github.com/sgl-project/sglang/pull/43199) [MemCache] Serve disabled full-attention models with `UnifiedRadixCache`
- [#39199](https://github.com/sgl-project/sglang/pull/39199) Add per-token NVFP4 MoE support for ReLU2 activation
- [#43202](https://github.com/sgl-project/sglang/pull/43202) [MemCache] Rename `SWAChunkCapPoolConfigurator` to `SWARequestCapPoolConfigurator`
- [#43143](https://github.com/sgl-project/sglang/pull/43143) [Rust] Pass the media item fps hint to multimodal processors
- [#43185](https://github.com/sgl-project/sglang/pull/43185) [MemCache] Count reclaimable tokens in the unified tree ledgers
- [#43201](https://github.com/sgl-project/sglang/pull/43201) [MemCache] Delete `ChunkCache`
- [#43198](https://github.com/sgl-project/sglang/pull/43198) [MemCache] Serve disabled pure-SWA models with `PureSWARadixCache`
- [#43197](https://github.com/sgl-project/sglang/pull/43197) [MemCache] Report no prefix sharing from a disabled `RadixCache`
- [#41400](https://github.com/sgl-project/sglang/pull/41400) feat(kda): integrate FlashInfer prefill checkpoints
- [#43227](https://github.com/sgl-project/sglang/pull/43227) [Perf] Avoid gate copies in gated RMSNorm
- [#41593](https://github.com/sgl-project/sglang/pull/41593) [Scheduler] Refresh waiting requests' cached prefixes under FCFS-like policies with LRU eviction
- [#43159](https://github.com/sgl-project/sglang/pull/43159) docs(cookbook): add Qwen3.8 GB300 long-context recipe
- [#43229](https://github.com/sgl-project/sglang/pull/43229) [CI] Avoid Hugging Face Hub API calls when the local model cache is complete
- [#43234](https://github.com/sgl-project/sglang/pull/43234) [CI] Drop the `labeled` trigger from the extra CI workflows
- [#43203](https://github.com/sgl-project/sglang/pull/43203) [MemCache] Skip SWA request-cap pool sizing when chunked prefill is off
- [#43226](https://github.com/sgl-project/sglang/pull/43226) [CI] Fix stale fakes in the NVFP4 MoE dispatch and CP strategy unit tests
- [#43218](https://github.com/sgl-project/sglang/pull/43218) [metrics] Call DPBalanceStats.create by keyword in the ratio ladder test
- [#43180](https://github.com/sgl-project/sglang/pull/43180) [metrics] Count per-rank DP attention pairs and their imbalance
- [#43188](https://github.com/sgl-project/sglang/pull/43188) [Bench][MoE] Deal the simulated round-robin experts evenly across EP ranks
- [#40177](https://github.com/sgl-project/sglang/pull/40177) [DSV4.1][PD][5/N] Decode node support DP attention
- [#43187](https://github.com/sgl-project/sglang/pull/43187) [Metrics] Use widely supported bucket boundaries for the DP attention imbalance ratio
- [#43004](https://github.com/sgl-project/sglang/pull/43004) [rust-server] warm up each rust listener in-process
- [#39723](https://github.com/sgl-project/sglang/pull/39723) [Qwen3.8 CP 3/4] Collocated prefill CP integration
- [#43012](https://github.com/sgl-project/sglang/pull/43012) [Speculative] Support block verification for the DFlash family
- [#43195](https://github.com/sgl-project/sglang/pull/43195) [CI] Clean some unnecessary DSV4 tests
- [#42782](https://github.com/sgl-project/sglang/pull/42782) [Model] Add support for EmbeddingGemma 2
- [#43058](https://github.com/sgl-project/sglang/pull/43058) [CI] Re-enable GB300
- [#42904](https://github.com/sgl-project/sglang/pull/42904) [PD] Allow state-only KV checksum inputs
- [#43192](https://github.com/sgl-project/sglang/pull/43192) [Mamba] Describe the track snapshot dtype by its kernel instead of fp32
- [#43179](https://github.com/sgl-project/sglang/pull/43179) [DFlash] Build the attention QKV projection through an overridable hook
- [#31773](https://github.com/sgl-project/sglang/pull/31773) [dLLM] Add JointThresholdInDel algorithm for insertion & deletion decoding
- [#42690](https://github.com/sgl-project/sglang/pull/42690) [Debug] Add opt-in NaN detection before sampling
- [#34076](https://github.com/sgl-project/sglang/pull/34076) [Fix] overlap scheduler: record_stream mix_running_indices for the forward-stream relay gather
- [#43114](https://github.com/sgl-project/sglang/pull/43114) [http_server] Let custom /generate routes skip the second contract check
- [#41072](https://github.com/sgl-project/sglang/pull/41072) [Bugfix] Skip post-experts EP all-reduce on the FlashInfer cutlass FP4 all-gather MoE path
- [#43022](https://github.com/sgl-project/sglang/pull/43022) [CI] Add dedicated sglang-processor workflow
- [#42643](https://github.com/sgl-project/sglang/pull/42643) Stream a chunk once stream_interval tokens are unsent
- [#43013](https://github.com/sgl-project/sglang/pull/43013) [Perf] Fuse short-convolution checkpoint tracking metadata
- [#43101](https://github.com/sgl-project/sglang/pull/43101) Fix K-only host buffer cleanup
- [#43100](https://github.com/sgl-project/sglang/pull/43100) Fix DSA index host buffer cleanup
- [#34537](https://github.com/sgl-project/sglang/pull/34537) [AMD][DCP 3/N] add aiter asm for kimi k3 target verify
- [#42903](https://github.com/sgl-project/sglang/pull/42903) [diffusion] Deduplicate request extraction and ComfyUI test helpers
- [#42230](https://github.com/sgl-project/sglang/pull/42230) [AMD] Fix DSpark draft bucket tests for the raw in-graph metadata default
- [#43035](https://github.com/sgl-project/sglang/pull/43035) [NPU] Quote the arm64 Triton-ascend wheel URL in npu.Dockerfile
- [#42665](https://github.com/sgl-project/sglang/pull/42665) [sgl-router] Render DeepSeek-V4 through sglang-processor
- [#38841](https://github.com/sgl-project/sglang/pull/38841) [MiniMax-M3] Decode: paged K/V tile loads and a tiny GEMM for the router projection
- [#38615](https://github.com/sgl-project/sglang/pull/38615) [MiniMax-M3] Instantiate the decode block top-k in register buckets
- [#42664](https://github.com/sgl-project/sglang/pull/42664) [rust-processor] DeepSeek-V4 parity with SGLang, plus a reusable parity harness and skill
- [#43025](https://github.com/sgl-project/sglang/pull/43025) [CI] Don't run the full GPU suite for renderer-only Cargo.lock changes
- [#43002](https://github.com/sgl-project/sglang/pull/43002) [diffusion] Deduplicate FLUX positions and RoPE application

#### 🐛 New Issues
- [#43061](https://github.com/sgl-project/sglang/issues/43061) [Bug] `--enable-deterministic-inference` + one request with `repetition_penalty` kills the scheduler on granite-4.0-h (torch.compile `InternalTorchDynamoError` in `apply_scaling_penalties`) 💬5
- [#43142](https://github.com/sgl-project/sglang/issues/43142) [Bug] CUDA graphs stay enabled for `torch_native` attention when the platform fallback selects it 💬2
- [#43085](https://github.com/sgl-project/sglang/issues/43085) [Bug] 💬1
- [#43098](https://github.com/sgl-project/sglang/issues/43098) Agentic Cache Scheduling System Roadmap (Q4) 💬1
- [#43094](https://github.com/sgl-project/sglang/issues/43094) num_matched_prefix_tokens stays 0 for cache-agnostic policies (fcfs, lof, random, routing-key) 💬1
- [#43075](https://github.com/sgl-project/sglang/issues/43075) [Bug] GPU JPEG decode can overwrite memory that queued GPU work still reads 💬1
- [#43055](https://github.com/sgl-project/sglang/issues/43055) [Bug] `--enable-deterministic-inference` does not make gpt-oss-20b deterministic: `test_deterministic --test-mode prefix` returns several outputs for one prompt 💬1
- [#43263](https://github.com/sgl-project/sglang/issues/43263) [Playground] Verified cell: h100 / default / fp8 / low-latency / single
- [#43258](https://github.com/sgl-project/sglang/issues/43258) [Performance] Cake NVFP4 warp-decode regresses TPOT on Qwen3-30B-A3B (GB200 TP1)
- [#43256](https://github.com/sgl-project/sglang/issues/43256) [Feature] Support Aleph-Alpha/Kolibri-1
- [#43239](https://github.com/sgl-project/sglang/issues/43239) [HiCache] NVFP4 KV + kernel io-backend: host pool row geometry mismatch and block scales never transported (packed MTP draft silently corrupted, accept length pinned to 1.0)
- [#43205](https://github.com/sgl-project/sglang/issues/43205) [Bug] Hard watchdog can hang in diagnostics before logging or sending SIGQUIT
- [#43204](https://github.com/sgl-project/sglang/issues/43204) `AssertionError: Can not alloc mamba cache` kills the engine when every cached mamba state is locked
- [#43196](https://github.com/sgl-project/sglang/issues/43196) [Feature] Reuse model-owned MTP weight selection before Default and RunAI shard reads
- [#43190](https://github.com/sgl-project/sglang/issues/43190) [Bug] [diffusion] ComfyUI server-mode video nodes fail on current ComfyUI and need a local output file
- [#43189](https://github.com/sgl-project/sglang/issues/43189) [Bug] [diffusion] ComfyUI executor drops conditioning after rebuilding a dead worker mid-run
- [#43184](https://github.com/sgl-project/sglang/issues/43184) [Bug] [diffusion] Chained SGLD LoRA nodes in ComfyUI keep only the last LoRA
- [#43175](https://github.com/sgl-project/sglang/issues/43175) [Bug] [diffusion] ComfyUI plugin reports 'sglang.multimodal_gen is not installed' for any import error
- [#43144](https://github.com/sgl-project/sglang/issues/43144) [Feature] Public, non-fatal way for a model or plugin to refuse online weight updates, also honoured by `begin_weight_update`
- [#43139](https://github.com/sgl-project/sglang/issues/43139) [Feature] Let a general plugin provide the weight offloader, with a post-load step that receives the loaded model
- [#43133](https://github.com/sgl-project/sglang/issues/43133) [Feature] SRT plugins: opt-in fail-fast for required plugins and hooks (`SGLANG_REQUIRED_PLUGINS`)
- [#43162](https://github.com/sgl-project/sglang/issues/43162) [Bug] sglang.Engine crashes with `KeyError: torch.float32` when the documented `dtype="float32"` is used
- [#43161](https://github.com/sgl-project/sglang/issues/43161) [Bug] sglang.Engine `schedule_policy="priority"` is an advertised choice that always kills the scheduler
- [#43160](https://github.com/sgl-project/sglang/issues/43160) [Bug] sglang.Engine `chunked_prefill_size=-1` derives a negative `mem_fraction_static` and the engine fails to start
- [#43158](https://github.com/sgl-project/sglang/issues/43158) [Bug] `get_rope_config` fabricates `rope_theta=10000` for transformers-v5 per-layer-type rope configs
- [#43157](https://github.com/sgl-project/sglang/issues/43157) [Bug] get_hf_text_config` erases the text sub-config's `dtype` on the `thinker_config` path
- [#43156](https://github.com/sgl-project/sglang/issues/43156) [Bug] HarmonyParser silently deletes streamed content that is a prefix of "commentary"
- [#43155](https://github.com/sgl-project/sglang/issues/43155) [Bug] sglang.srt.parser.conversation LLAMA2 style derives role tags from message index parity instead of the message's own role
- [#43154](https://github.com/sgl-project/sglang/issues/43154) [Bug] `get_token_ids_logprobs` returns a plain `[]` instead of a tensor for absent entries, crashing decode logprob post-processing
- [#43153](https://github.com/sgl-project/sglang/issues/43153) [Bug] Qwen3CoderDetector silently flips boolean parameters to `false` when the value has surrounding whitespace
- [#43151](https://github.com/sgl-project/sglang/issues/43151) [Bug] Qwen3CoderDetector streaming parser fabricates tool calls from plain text, emitting `tool_index=-1
- [#43150](https://github.com/sgl-project/sglang/issues/43150) [Bug] Qwen3CoderDetector streaming emits unterminated JSON arguments when the model omits `</function>`
- [#43149](https://github.com/sgl-project/sglang/issues/43149) [Bug] PoolsideV1Detector silently retypes nullable/union string arguments
- [#43148](https://github.com/sgl-project/sglang/issues/43148) [Bug] HermesDetector reorders streamed normal text across a tool call
- [#43147](https://github.com/sgl-project/sglang/issues/43147) [Bug] parse_arguments turns comma-containing values into Python tuples
- [#43146](https://github.com/sgl-project/sglang/issues/43146) [Bug] OpenAIServingChat.apply_reasoning_enabled Does Not Mirror the minimax-m3 Read-Side Rule
- [#43145](https://github.com/sgl-project/sglang/issues/43145) [Bug] OpenAIServingChat._get_reasoning_from_request Ignores the Inkling "reasoning off" Signal
- [#43118](https://github.com/sgl-project/sglang/issues/43118) [Bug] Kimi-K3 strict tool grammar: a free-text string argument can close itself early and smuggle in arguments the schema forbids
- [#43116](https://github.com/sgl-project/sglang/issues/43116) [Bug] [diffusion] ComfyUI Qwen-Image-Edit executor drops every reference image after the first
- [#43115](https://github.com/sgl-project/sglang/issues/43115) [Bug] [diffusion] ComfyUI Flux executor crashes when y (pooled_output) is None
- [#43111](https://github.com/sgl-project/sglang/issues/43111) [Bug] [diffusion] ComfyUI executor crashes when ComfyUI batches a DiT call (cfg > 1 or batch_size > 1)
- [#43107](https://github.com/sgl-project/sglang/issues/43107) [Bug] [diffusion] ComfyUI executor cond key collision reuses another prompt's conditioning
- [#43096](https://github.com/sgl-project/sglang/issues/43096) Detokenizer return-path fanout performs one IPC send per request
- [#43087](https://github.com/sgl-project/sglang/issues/43087) [Bug] trtllm_mha: a NaN left in a reused KV page turns later requests into NaN
- [#43080](https://github.com/sgl-project/sglang/issues/43080) [Bug] Video jobs can complete after temporary outputs are deleted
- [#43050](https://github.com/sgl-project/sglang/issues/43050) Idle-wake hang at _low_ratio_index_topk_dense when --sleep-on-idle is enabled (post-#40111 prefill host-sync path)
- [#43040](https://github.com/sgl-project/sglang/issues/43040) [Bug] In the -dp-size=2 scenario, when the --msprobe-dump-config parameter is used to collect profile data, only the data of one card is collected
- [#43038](https://github.com/sgl-project/sglang/issues/43038) [Qwen4-Exp] aux-hidden capture at stage boundaries yields the hyper-connection-wide stream — intended width contract for consumers?

#### 🔒 Closed Issues
- [#33466](https://github.com/sgl-project/sglang/issues/33466) [Bug] MiniMax-H3 occurs args error
- [#30815](https://github.com/sgl-project/sglang/issues/30815) [Bug] FP8 KV-cache decode slowdown: unfused K/V quantization + per-layer Q conversion overhead
- [#31779](https://github.com/sgl-project/sglang/issues/31779) [RFC] An NPU-Native, Sparsity-Driven KV Offloading SubSystem for Efficient LLM Decoding
- [#34118](https://github.com/sgl-project/sglang/issues/34118) [Doc]The invalid links in the document
- [#34193](https://github.com/sgl-project/sglang/issues/34193) Where do CPU kernel patches go after sgl-kernel moved under sglang.kernels.aot?
- [#34149](https://github.com/sgl-project/sglang/issues/34149) [Bug] Abort can commit a delayed final chunked-prefill token on latest main
- [#34179](https://github.com/sgl-project/sglang/issues/34179) W4A4 MegaMoE FP4-acts on DeepSeek-V4-Flash-0731 (8x B200, SGLang v0.5.17): end-to-end TTFT unchanged on two serving shapes (scheduling-bound and GEMM-bound), plus bounded quality observations
- [#34152](https://github.com/sgl-project/sglang/issues/34152) [Bug] Qwen3-VL + EAGLE3: draft-extend emits too few mRoPE positions, crashing on any batched traffic
- [#34366](https://github.com/sgl-project/sglang/issues/34366) [Bug][diffusion] JoyAI-Image-Edit fails at ImageEncodingStage: Qwen3-VL text encoder missing `mm_token_type_ids`

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 130,559 · **Open issues:** 2,477 · **Last push:** <1h ago

On October 9, 2026, the llama.cpp project released version b11514, which includes a fix for the Musa FWHT issue. Other recent updates include b11513, which improves the CUDA top-k algorithm selection, and b11511, addressing out-of-bounds reads in MMQ. Significant merged features today encompass support for MoE cache over multiple GPUs and fixes related to DFlash output head sharing and top-k operations for extreme input values. A notable new issue raised includes a request to allow `--moe-cache-mib` to be comma-separated per device, indicating ongoing user interest in optimizing model configurations.

#### 🚀 New Releases
- [b11514](https://github.com/ggml-org/llama.cpp/releases/tag/b11514) b11514
- [b11513](https://github.com/ggml-org/llama.cpp/releases/tag/b11513) b11513
- [b11512](https://github.com/ggml-org/llama.cpp/releases/tag/b11512) b11512
- [b11511](https://github.com/ggml-org/llama.cpp/releases/tag/b11511) b11511
- [b11510](https://github.com/ggml-org/llama.cpp/releases/tag/b11510) b11510
- [b11509](https://github.com/ggml-org/llama.cpp/releases/tag/b11509) b11509
- [b11507](https://github.com/ggml-org/llama.cpp/releases/tag/b11507) b11507
- [b11505](https://github.com/ggml-org/llama.cpp/releases/tag/b11505) b11505
- [b11503](https://github.com/ggml-org/llama.cpp/releases/tag/b11503) b11503
- [b11501](https://github.com/ggml-org/llama.cpp/releases/tag/b11501) b11501

#### ✅ Merged PRs
- [#29375](https://github.com/ggml-org/llama.cpp/pull/29375) sycl : Q5_K reorder-layout MMVQ and fused GLU
- [#30112](https://github.com/ggml-org/llama.cpp/pull/30112) llama: support MoE cache over multiple GPUs
- [#30167](https://github.com/ggml-org/llama.cpp/pull/30167) musa: Fix for FWHT shared memory bug
- [#28713](https://github.com/ggml-org/llama.cpp/pull/28713) CUDA: improve top-k algorithm selection
- [#30111](https://github.com/ggml-org/llama.cpp/pull/30111) llama : fix DFlash output head sharing
- [#29953](https://github.com/ggml-org/llama.cpp/pull/29953) CUDA: fix MMQ out-of-bounds reads
- [#30147](https://github.com/ggml-org/llama.cpp/pull/30147) CUDA : looped PAD kernel for more than 65535 rows or slices
- [#29453](https://github.com/ggml-org/llama.cpp/pull/29453) CUDA: fix CCCL version guard breaking on major version rollover
- [#29668](https://github.com/ggml-org/llama.cpp/pull/29668) ui: apply ui_settings on first visit in router mode
- [#26004](https://github.com/ggml-org/llama.cpp/pull/26004) server : preserve context checkpoints across slot save/restore
- [#30107](https://github.com/ggml-org/llama.cpp/pull/30107) vulkan : fix TOP_K for +inf/NaN inputs and k = 1 on negative values
- [#28175](https://github.com/ggml-org/llama.cpp/pull/28175) CUDA: fix NORM/RMS_NORM/L2_NORM for more than 65535 channels or samples
- [#30003](https://github.com/ggml-org/llama.cpp/pull/30003) vulkan: extend sparse FA support to coopmat2
- [#30134](https://github.com/ggml-org/llama.cpp/pull/30134) vendor : update cpp-httplib to 0.60.1
- [#27920](https://github.com/ggml-org/llama.cpp/pull/27920) Update convert_hf_to_gguf: support Qwen3.5 embedding models
- [#29781](https://github.com/ggml-org/llama.cpp/pull/29781) cuda : support arbitrary striding for unary ops on f16, f32, and bf16
- [#29605](https://github.com/ggml-org/llama.cpp/pull/29605) sycl: FWHT optimizations
- [#30133](https://github.com/ggml-org/llama.cpp/pull/30133) hexagon: do not assume aligned read/write when bias-add is fused
- [#29547](https://github.com/ggml-org/llama.cpp/pull/29547) cuda : Use byte strides for roll to allow non-contiguous ROLL operations
- [#29687](https://github.com/ggml-org/llama.cpp/pull/29687) sycl: fuse the delta-net alpha gate (add + unary + mul)
- [#30087](https://github.com/ggml-org/llama.cpp/pull/30087) ggml-cuda: assign four GDN state columns per warp
- [#29608](https://github.com/ggml-org/llama.cpp/pull/29608) sycl: stage bulk uploads (model loading) through a pinned ring buffer
- [#29692](https://github.com/ggml-org/llama.cpp/pull/29692) model : support classifier_activation for rerankers
- [#29245](https://github.com/ggml-org/llama.cpp/pull/29245) sycl: add grouped MoE XMX GEMM
- [#29507](https://github.com/ggml-org/llama.cpp/pull/29507) sycl: remove duplicate block-size defines from op headers

#### 🐛 New Issues
- [#30163](https://github.com/ggml-org/llama.cpp/issues/30163) Feature Request: Allow `--moe-cache-mib` to be comma separated per-device. `enhancement`
- [#30144](https://github.com/ggml-org/llama.cpp/issues/30144) Eval bug: Fail to run StartLux-Decision model, llama-server reports 501. `bug-unconfirmed` 💬2
- [#30175](https://github.com/ggml-org/llama.cpp/issues/30175) Eval bug: Nondeterministic FA prefill with Qwen 3.5 9B on RDNA3 (ROCm/HIP) on multimodal requests since b10905 `bug-unconfirmed` 💬1
- [#30166](https://github.com/ggml-org/llama.cpp/issues/30166) Misc. bug: Vulkan: FLASH_ATTN_EXT wrong results on MoltenVK 1.4.2 + AMD RDNA1 when head size is not a multiple of subgroup size (Apple+AMD shuffle disable from #15846 still required) `bug-unconfirmed` 💬1
- [#30195](https://github.com/ggml-org/llama.cpp/issues/30195) Eval bug: EmbeddingGemma-2 vision is generating more tokens than set. `bug-unconfirmed`
- [#30174](https://github.com/ggml-org/llama.cpp/issues/30174) Metal: draft-mtp allocates up to ~15 GB host (malloc) memory during a ~96k-token session vs ~5 GB without spec (Qwen3.8-27B, 64 GB M4 Max) `bug-unconfirmed`
- [#30171](https://github.com/ggml-org/llama.cpp/issues/30171) ggml-cuda: GGML_OP_NORM returns all-NaN rows for some constant inputs (one-pass variance)
- [#30162](https://github.com/ggml-org/llama.cpp/issues/30162) Vulkan: add_rms_fusion is disabled for all Intel devices by a vendor gate - re-enable on Xe2 (tested on Arc B580)
- [#30161](https://github.com/ggml-org/llama.cpp/issues/30161) Feature Request: Decision 2.0 GGUF and systemone support

#### 🔒 Closed Issues
- [#25992](https://github.com/ggml-org/llama.cpp/issues/25992) Eval bug: server -np 4 --kv-unified returns other requests' responses verbatim on integrated HIP GPU (gfx1151) — bisected to c7d87229
- [#25913](https://github.com/ggml-org/llama.cpp/issues/25913) Misc. bug: /slots save/restore silently loses all prompt reuse on hybrid/recurrent models — checkpoints are never persisted
- [#27282](https://github.com/ggml-org/llama.cpp/issues/27282) Eval bug: native MTP reserves a separate CUDA compute arena and OOMs; shared gallocr fixes it
- [#26038](https://github.com/ggml-org/llama.cpp/issues/26038) Eval bug: Excessive compute buffer reservation in MTP draft context on ROCm HIP unnecessarily reduces fitted context size
- [#24999](https://github.com/ggml-org/llama.cpp/issues/24999) CUDA error: the requested functionality is not supported
- [#27532](https://github.com/ggml-org/llama.cpp/issues/27532) WebUI Edit LLM responses (Payload / KV cache manipulation )
- [#27151](https://github.com/ggml-org/llama.cpp/issues/27151) Misc. bug: MTP draft acceptance 1 of 633
- [#29513](https://github.com/ggml-org/llama.cpp/issues/29513) Qwen3.5-4B: first request after load is extremely slow (CUDA backend), warm performance is fine (RTX 2060 / sm_75, b11206)
- [#24788](https://github.com/ggml-org/llama.cpp/issues/24788) Docs: add backend selection guidance for different hardware configurations
- [#26432](https://github.com/ggml-org/llama.cpp/issues/26432) Silent GTT fallback when context + MTP exceeds VRAM — no error at load, massive throughput collapse at runtime
- [#27622](https://github.com/ggml-org/llama.cpp/issues/27622) Feature Request: Multiple Model Names, One LLM
- [#27680](https://github.com/ggml-org/llama.cpp/issues/27680) Eval bug: Possible regression: DSV4 CUDA compute buffer size
- [#27407](https://github.com/ggml-org/llama.cpp/issues/27407) spec: greedy output diverges from non-speculative baseline under batched verification on CUDA (deterministic numerics; draft-simple alone reproduces, DFlash2 amplifies)
- [#27442](https://github.com/ggml-org/llama.cpp/issues/27442) Eval bug: qwen35moe (hybrid recurrent/attention) models produce empty generation when prompt exceeds ~16K tokens via llama-server (Metal)
- [#29849](https://github.com/ggml-org/llama.cpp/issues/29849) Misc. bug: Homebrew's llama.cpp 0.5.0 has no web UI
- [#24670](https://github.com/ggml-org/llama.cpp/issues/24670) draft-mtp speculative decoding not activating on Turing (sm_75) with hybrid SSM+attention model (Qwen3.6-35B-A3B)
- [#26391](https://github.com/ggml-org/llama.cpp/issues/26391) Eval bug: --batch-size and --ubatch-size ignored when set to 1024/1024
- [#27549](https://github.com/ggml-org/llama.cpp/issues/27549) Eval bug: llama.cpp\llama.cpp\ggml\src\ggml-cuda\fattn.cu:574: fatal error
- [#27648](https://github.com/ggml-org/llama.cpp/issues/27648) Misc. bug: llama-finetune crashes with 'failed to allocate buffer of size 18446744073709547520' before training starts (all model precisions)
- [#27901](https://github.com/ggml-org/llama.cpp/issues/27901) Eval bug: rms_norm_f32 exceeds the CUDA gridDim.y limit (65535) at n_ctx 262144
- [#27683](https://github.com/ggml-org/llama.cpp/issues/27683) Eval bug: broken, Garbage output from Qwen3-2507 4B
- [#30162](https://github.com/ggml-org/llama.cpp/issues/30162) Vulkan: add_rms_fusion is disabled for all Intel devices by a vendor gate - re-enable on Xe2 (tested on Arc B580)
- [#28260](https://github.com/ggml-org/llama.cpp/issues/28260) Misc. bug: --ui-config-file requires to click "Reset to default" in settings to apply values

### Ollama (`ollama/ollama`)

**Stars:** 182,425 · **Open issues:** 4,213 · **Last push:** 3h ago

On October 9, 2026, Ollama released version 0.40.2, which included updates to the README to recognize oxi as a community integration and improvements that hide duplicate and downgrade guards from the server list. Among the significant changes, merged pull requests addressed Codex service-tier warnings (#18879) and adjusted the CLAUDE_CODE_MAX_CONTEXT_TOKENS to match the model's context length (#18855). Additionally, several new issues emerged, with #18870 regarding manifests-v2 gaining notable attention, signaling potential challenges in that area. Overall, the day was marked by meaningful enhancements alongside the emergence of pressing issues in the repository.

#### 🚀 New Releases
- [v0.40.2](https://github.com/ollama/ollama/releases/tag/v0.40.2) v0.40.2

#### ✅ Merged PRs
- [#18879](https://github.com/ollama/ollama/pull/18879) launch: avoid inherited service-tier warnings in Codex
- [#18874](https://github.com/ollama/ollama/pull/18874) server: hide duplicate and downgrade guards from list
- [#18855](https://github.com/ollama/ollama/pull/18855) Set CLAUDE_CODE_MAX_CONTEXT_TOKENS to model's context length

#### 🐛 New Issues
- [#18870](https://github.com/ollama/ollama/issues/18870) manifests-v2 `bug` 💬4
- [#18863](https://github.com/ollama/ollama/issues/18863) Error: image generation models are not currently supported `bug` 💬2
- [#18871](https://github.com/ollama/ollama/issues/18871) Model Request: Index Translate family `model` 💬2
- [#18864](https://github.com/ollama/ollama/issues/18864) Probabilities output is messed up `bug` 💬2
- [#18876](https://github.com/ollama/ollama/issues/18876) Ollama `bug` 💬1
- [#18869](https://github.com/ollama/ollama/issues/18869) ffn_down_exps.weight size overflows `bug` 💬1
- [#18865](https://github.com/ollama/ollama/issues/18865) Clef / Clef Flash: n_ubatch is forced to n_ctx, so default num_ctx 16384 fails to load (OOM / GGML_ASSERT) 💬1
- [#18885](https://github.com/ollama/ollama/issues/18885) mlx runner failed: panic: mlx `bug`
- [#18880](https://github.com/ollama/ollama/issues/18880) model return empty response with no action `cloud`
- [#18861](https://github.com/ollama/ollama/issues/18861) gemma4 with `think: false`: empty reply after a tool response, because nothing closes the empty thought `bug`

#### 🔒 Closed Issues
- [#18870](https://github.com/ollama/ollama/issues/18870) manifests-v2
- [#18863](https://github.com/ollama/ollama/issues/18863) Error: image generation models are not currently supported
- [#18871](https://github.com/ollama/ollama/issues/18871) Model Request: Index Translate family

### LiteLLM (`BerriAI/litellm`)

**Stars:** 60,397 · **Open issues:** 5,327 · **Last push:** <1h ago

Today, LiteLLM released versions v1.106.0-dev.2, v1.105.0-rc.3, v1.104.2, v1.102.4, and v1.101.6, all of which feature Docker images signed with cosign for enhanced security. Among the notable merged pull requests, the fix for import issues in Rust trace tests (#45485) and the addition of inference profiles for twelvelabs pegasus 1.5 (#45477) stand out, reflecting continued enhancements in functionality and integration. Additionally, the fix addressing the 429 error during client use of BYOK (#45312) highlights ongoing efforts to improve user experience amidst operational challenges. The report also notes a significant bug regarding dropped arguments in parallel tool calls for the chatgpt provider (#45348), indicating areas for immediate attention.

#### 🚀 New Releases
- [v1.106.0-dev.2](https://github.com/BerriAI/litellm/releases/tag/v1.106.0-dev.2) v1.106.0-dev.2
- [v1.105.0-rc.3](https://github.com/BerriAI/litellm/releases/tag/v1.105.0-rc.3) v1.105.0-rc.3
- [v1.104.2](https://github.com/BerriAI/litellm/releases/tag/v1.104.2) v1.104.2
- [v1.102.4](https://github.com/BerriAI/litellm/releases/tag/v1.102.4) v1.102.4
- [v1.101.6](https://github.com/BerriAI/litellm/releases/tag/v1.101.6) v1.101.6

#### ✅ Merged PRs
- [#45485](https://github.com/BerriAI/litellm/pull/45485) fix(ci): import seed_tracing_fixtures from the pytest scripts path in rust trace tests
- [#45482](https://github.com/BerriAI/litellm/pull/45482) fix(bedrock): add gpt-6.1-sol ultrafast tier prices from the Bedrock model card
- [#45472](https://github.com/BerriAI/litellm/pull/45472) fix(router): match deployment pricing ids against the cost map only within the deployment's provider
- [#44447](https://github.com/BerriAI/litellm/pull/44447) refactor(sdk): separate core AWS and tokenizer dependencies
- [#45479](https://github.com/BerriAI/litellm/pull/45479) fix(bedrock): remove the bare openai.gpt-6.1-sol cost-map row that AWS cannot invoke
- [#41761](https://github.com/BerriAI/litellm/pull/41761) fix(proxy): save file details for every batch output file so they list and retrieve
- [#44340](https://github.com/BerriAI/litellm/pull/44340) feat(sdk): build core from an independent packaging manifest
- [#45477](https://github.com/BerriAI/litellm/pull/45477) feat(bedrock): add twelvelabs pegasus 1.5 inference profiles
- [#40739](https://github.com/BerriAI/litellm/pull/40739) fix(cli): pin pi compat flags so lite pi stops sending store to Anthropic models
- [#45469](https://github.com/BerriAI/litellm/pull/45469) chore(cost-map): sync openrouter prices from the models API
- [#45450](https://github.com/BerriAI/litellm/pull/45450) refactor(python-bridge): ship a signature base and read the resolved call
- [#45393](https://github.com/BerriAI/litellm/pull/45393) fix(router): drop the encrypted reasoning a fallback hop's target cannot decrypt
- [#45461](https://github.com/BerriAI/litellm/pull/45461) feat(guardrails): support logging_only mode for the Akto guardrail
- [#45466](https://github.com/BerriAI/litellm/pull/45466) ci(unit): add unit passed collector job and fold proxy-db shards into test-unit.yml
- [#45468](https://github.com/BerriAI/litellm/pull/45468) fix(cost-map): update baseten DeepSeek-V4.1-Flash-Fast cache read price and max output
- [#45449](https://github.com/BerriAI/litellm/pull/45449) refactor(python-bridge): derive NativeCall extraction
- [#45465](https://github.com/BerriAI/litellm/pull/45465) test(streaming): expect the unwrapped provider error in bridged /v1/messages error frames
- [#45456](https://github.com/BerriAI/litellm/pull/45456) feat(ui): add Cmd+K command palette with key search
- [#44432](https://github.com/BerriAI/litellm/pull/44432) fix(bedrock): split the <reasoning> tag for gpt-oss only on native Chat Completions
- [#45351](https://github.com/BerriAI/litellm/pull/45351) test: make 38 legacy live base-class translation tests offline
- [#45288](https://github.com/BerriAI/litellm/pull/45288) test: move 81 legacy live tests in pass-through, spend, batches, audio, search, guardrails, image and ocr dirs offline
- [#43801](https://github.com/BerriAI/litellm/pull/43801) feat(guardrails): per-mode stream_scope with bedrock stream and pass-through fixes
- [#45460](https://github.com/BerriAI/litellm/pull/45460) fix(bedrock): remove the bare xai.grok-4.7 cost-map row that AWS cannot invoke
- [#45455](https://github.com/BerriAI/litellm/pull/45455) fix(proxy): accept team-scoped models by their public name on POST /fallback
- [#45362](https://github.com/BerriAI/litellm/pull/45362) test: replace 61 live logging and otel tests with offline unit and integration coverage
- [#45347](https://github.com/BerriAI/litellm/pull/45347) test(ui-e2e): update usage page selectors after the #45221 redesign
- [#43698](https://github.com/BerriAI/litellm/pull/43698) fix(otel): emit OpenInference tool calls and metadata on Arize OTel v2 spans
- [#45402](https://github.com/BerriAI/litellm/pull/45402) fix(ui): link model access group chips to the access group filter
- [#45317](https://github.com/BerriAI/litellm/pull/45317) fix(bedrock): count tokens on bedrock-mantle when bedrock-runtime cannot count a Claude model
- [#45439](https://github.com/BerriAI/litellm/pull/45439) fix(rust): add the inline-tools-2026-09-15 beta to AnthropicBeta
- [#45426](https://github.com/BerriAI/litellm/pull/45426) fix(ui): show the Add Model picker once the model catalog loads after a provider is picked
- [#44659](https://github.com/BerriAI/litellm/pull/44659) feat(spend_logs): configure which metadata fields are stored in LiteLLM_SpendLogs
- [#45442](https://github.com/BerriAI/litellm/pull/45442) chore(decisions): remove the System One converters and OpenAI spec types left dead by #45214
- [#45434](https://github.com/BerriAI/litellm/pull/45434) refactor(rust): derive strum VariantArray and string conversions
- [#45432](https://github.com/BerriAI/litellm/pull/45432) fix(lens): prevent progress updates from starving analysis budget reservations
- [#45431](https://github.com/BerriAI/litellm/pull/45431) fix(ci): drop the publicly known master key prefix from the voyage routing test
- [#45413](https://github.com/BerriAI/litellm/pull/45413) refactor(python-bridge): take NativeCall directly and fold routes into per-route folders
- [#45305](https://github.com/BerriAI/litellm/pull/45305) feat(gemini): accept file content blocks with video_metadata on multimodal embeddings
- [#45327](https://github.com/BerriAI/litellm/pull/45327) test(decisions): post System One bodies to /v1/systemone in the translation bases
- [#45419](https://github.com/BerriAI/litellm/pull/45419) feat(rust): add the Anthropic beta header policy
- [#41812](https://github.com/BerriAI/litellm/pull/41812) feat(voyage): rebrand to VoyageAI by MongoDB and route MongoDB keys to ai.mongodb.com
- [#44910](https://github.com/BerriAI/litellm/pull/44910) fix(model_prices): add Bedrock flex prices, Anthropic web search flags, Gemini shutdown dates, OpenRouter alias drift, Mistral Large 4 context
- [#45265](https://github.com/BerriAI/litellm/pull/45265) feat(fireworks_ai): forward the LiteLLM user id as user behind fireworks_forward_user_id
- [#45297](https://github.com/BerriAI/litellm/pull/45297) fix(vertex_ai): forward the inline-tools-2026-09-15 beta to Vertex and Anthropic
- [#31942](https://github.com/BerriAI/litellm/pull/31942) fix(proxy): use budget reset window for projected spend alerts
- [#45273](https://github.com/BerriAI/litellm/pull/45273) fix(proxy): retry lock-timed-out daily spend batches in place so the shutdown flush keeps them
- [#45293](https://github.com/BerriAI/litellm/pull/45293) test(proxy): audit the websocket rejection log on every live route
- [#45416](https://github.com/BerriAI/litellm/pull/45416) fix(rust): path-qualify attribute aliases so rust-analyzer resolves them
- [#45417](https://github.com/BerriAI/litellm/pull/45417) fix(bedrock_mantle): take gpt-oss output limits and EOL dates from the Bedrock model cards
- [#45408](https://github.com/BerriAI/litellm/pull/45408) chore(cost-map): add openai gpt-6.1-sol ultrafast tier prices from the pricing page
- [#45409](https://github.com/BerriAI/litellm/pull/45409) fix(bedrock): take context, output limits and EOL dates from the Bedrock model cards
- [#41724](https://github.com/BerriAI/litellm/pull/41724) fix(proxy): mark background responses stale_expired when provider returns 404
- [#45352](https://github.com/BerriAI/litellm/pull/45352) test: move 76 live top-level tests to offline unit and integration coverage
- [#45205](https://github.com/BerriAI/litellm/pull/45205) docs(rust): add ADRs for the Rust core
- [#45255](https://github.com/BerriAI/litellm/pull/45255) fix(mcp): preserve elicitation context and report relay failures
- [#45105](https://github.com/BerriAI/litellm/pull/45105) fix(lens): refresh runs until gateway costs are complete
- [#43561](https://github.com/BerriAI/litellm/pull/43561) feat(prometheus): expose per-project per-model rate limit allowed and used gauges
- [#45346](https://github.com/BerriAI/litellm/pull/45346) test: realign stale decisions and lens tests with merged behaviour
- [#45322](https://github.com/BerriAI/litellm/pull/45322) fix(responses): keep tool_result next to tool_use on Anthropic previous_response_id continuations
- [#45340](https://github.com/BerriAI/litellm/pull/45340) test: delete 34 legacy tests already covered by e2e
- [#45382](https://github.com/BerriAI/litellm/pull/45382) refactor(rust): carry provider credentials as typed ConnectionArguments
- [#45188](https://github.com/BerriAI/litellm/pull/45188) feat(rust): add standalone typed LLM wire contracts
- [#44877](https://github.com/BerriAI/litellm/pull/44877) fix(ui): list only catalog models in the Add Model picker
- [#45318](https://github.com/BerriAI/litellm/pull/45318) fix(ci): trim rust-test debuginfo so the job fits on the runner disk
- [#45266](https://github.com/BerriAI/litellm/pull/45266) fix(lens): block teamless feedback writes and fix retention test
- [#45355](https://github.com/BerriAI/litellm/pull/45355) fix(azure): move sora-2 retirement date to the later Models API date
- [#45345](https://github.com/BerriAI/litellm/pull/45345) fix(logging): skip sync success callbacks for internal sub-calls, deflake RAG and Langfuse tests
- [#45350](https://github.com/BerriAI/litellm/pull/45350) test(integration): run the response cache tool-call tests on a proxy without the message cap
- [#45341](https://github.com/BerriAI/litellm/pull/45341) fix(proxy-extras): name the database error when the Lens rename check cannot run
- [#45231](https://github.com/BerriAI/litellm/pull/45231) feat(mcp): support upstream OAuth client metadata identities
- [#45335](https://github.com/BerriAI/litellm/pull/45335) feat(ui): add TypeSafe and Strands Decider to the Add Model provider list
- [#45298](https://github.com/BerriAI/litellm/pull/45298) test: make 77 legacy live tests offline in litellm_utils, router_unit and responses dirs
- [#38729](https://github.com/BerriAI/litellm/pull/38729) fix(bedrock_mantle): send OpenAI explicit prompt cache breakpoints for GPT-5.6 and newer
- [#45319](https://github.com/BerriAI/litellm/pull/45319) revert(lint-gates): accept an empty base scan again, since zero violations is a legitimate count
- [#40193](https://github.com/BerriAI/litellm/pull/40193) ci(lint): gate every rule on its merge-base count and cap Anys at a fixed total
- [#45315](https://github.com/BerriAI/litellm/pull/45315) refactor(proxy): type fresh Moyai connect helpers and drop MCP rpm getattr
- [#45314](https://github.com/BerriAI/litellm/pull/45314) fix(lint-gates): fail on an empty base scan instead of blaming the change for every violation
- [#45294](https://github.com/BerriAI/litellm/pull/45294) fix(utils): make supports_audio_output read the supports_audio_output cost-map key
- [#45292](https://github.com/BerriAI/litellm/pull/45292) test(integration): boot owned proxies with a readiness-sized worker healthcheck budget
- [#45291](https://github.com/BerriAI/litellm/pull/45291) chore: bump litellm-proxy-extras to 0.4.107 and litellm-enterprise to 0.1.75
- [#45251](https://github.com/BerriAI/litellm/pull/45251) fix(proxy): answer a rejected websocket handshake without crashing the HTTP exception handler
- [#45248](https://github.com/BerriAI/litellm/pull/45248) test(e2e): cover responses API gaps on gemini, azure, compact and context management
- [#45190](https://github.com/BerriAI/litellm/pull/45190) feat(decisions): backport /v1/systemone, OpenAI-format /v1/decisions and the OpenAI Decisions provider to stable/1.104.x for v1.104.2 (#44236, #45184, #45214)
- [#45224](https://github.com/BerriAI/litellm/pull/45224) fix(responses): map input_audio blocks in the chat-to-Responses bridge
- [#45227](https://github.com/BerriAI/litellm/pull/45227) fix(router): honor a per-request fallbacks list on a mid-stream fallback
- [#45218](https://github.com/BerriAI/litellm/pull/45218) fix(router): keep include_fallback_errors off the provider call on the sync Router path
- [#42348](https://github.com/BerriAI/litellm/pull/42348) feat(lint): add LIT015 requiring pydantic models to be frozen
- [#45214](https://github.com/BerriAI/litellm/pull/45214) feat(decisions): add OpenAI as a Decisions provider behind a shared decisions format
- [#45189](https://github.com/BerriAI/litellm/pull/45189) feat(decisions): backport /v1/systemone, OpenAI-format /v1/decisions and the openai Decisions provider to rc/1.105.0 (#44236, #45184, #45214)
- [#45184](https://github.com/BerriAI/litellm/pull/45184) feat(decisions): serve System One format at /v1/systemone and OpenAI format at /v1/decisions
- [#38617](https://github.com/BerriAI/litellm/pull/38617) fix(proxy): admit litellm_proxy/hosted_vllm in provider-endpoint discovery
- [#45171](https://github.com/BerriAI/litellm/pull/45171) feat(lens): show end-user feedback on traces, stored in ClickHouse
- [#45220](https://github.com/BerriAI/litellm/pull/45220) fix(proxy): declare the Moyai settings write's service target and allowlist its routes
- [#45261](https://github.com/BerriAI/litellm/pull/45261) feat(lens): show agent, user and slack thread first in the run header

#### 🐛 New Issues
- [#45422](https://github.com/BerriAI/litellm/issues/45422) [Bug]: Consumed Tokens via GitHub BYOK is not operational `bug` 💬5
- [#45378](https://github.com/BerriAI/litellm/issues/45378) [Bug]: Mistral — content returned as a list of chunks is truncated to the last `text` chunk; `reference` chunks are dropped `bug` `llm translation` 💬4
- [#45284](https://github.com/BerriAI/litellm/issues/45284) OTel: gen_ai.operation.name missing when turn_off_message_logging is enabled (v1.104.0) `claude code` 💬3
- [#45457](https://github.com/BerriAI/litellm/issues/45457) [Bug]: google-genai streamGenerateContent: a stream dropped before its first chunk is never retried (httpx.ReadError: Connection closed.) `bug` `llm translation` 💬2
- [#45348](https://github.com/BerriAI/litellm/issues/45348) [Bug]: Parallel tool-call arguments dropped when streaming `/v1/messages` for the `chatgpt` (Codex) provider `bug` `llm translation` 💬2
- [#45312](https://github.com/BerriAI/litellm/issues/45312) [Bug]: With BYOK, one client's 429 cools the shared deployment for everyone for the provider's full retry-after, and the cooldown can't be cleared `llm translation` 💬2
- [#45379](https://github.com/BerriAI/litellm/issues/45379) [Bug]: Top-level `import soundfile` in the Transcribe pass-through handler breaks `/v1/messages` streaming without the `proxy` extra (since v1.103.0) `llm translation` 💬2
- [#45333](https://github.com/BerriAI/litellm/issues/45333) [Bug]: Gemini 3 provider always injects temperature=1.0; Google will reject sampling params on upcoming models `llm translation` 💬2
- [#45309](https://github.com/BerriAI/litellm/issues/45309) [Bug]: Router fallback to bedrock/ (and bedrock_mantle/) sends the caller's forwarded API key to AWS instead of SigV4-signing (follow-up to #14371) `llm translation` 💬1
- [#45357](https://github.com/BerriAI/litellm/issues/45357) [Bug]: Mistral transcription cost ignores usage.prompt_audio_seconds; local duration fallback bills a FLAC without a sample count as 2^63 frames `llm translation` 💬1
- [#45359](https://github.com/BerriAI/litellm/issues/45359) [Feature]: Add continuous_usage_stats to LiteLLM stream chunks `enhancement` `llm translation` 💬1
- [#45332](https://github.com/BerriAI/litellm/issues/45332) [Bug]: Langfuse traces silently dropped when the shared cached httpx client is closed under a live logger 💬1
- [#45406](https://github.com/BerriAI/litellm/issues/45406) [Bug]: Proxy emits non-Responses error frame {"error": {...}} on streaming /v1/responses failures `llm translation`
- [#45470](https://github.com/BerriAI/litellm/issues/45470) [Bug]: /v1/messages → Responses API: assistant text blocks are replayed after the turn's `function_call` items `llm translation`
- [#45430](https://github.com/BerriAI/litellm/issues/45430) [Feature] Auto-discover and register external A2A agents from GCP Vertex AI Agent Engine, Azure AI Foundry, etc. `llm translation` `claude code`
- [#45411](https://github.com/BerriAI/litellm/issues/45411) [Bug]: per-turn-control-2026-07-01 filtered for bedrock, but Bedrock Invoke supports it — Claude Code fails with "messages.1.output_config: Extra inputs are not permitted" `llm translation` `claude code`
- [#45380](https://github.com/BerriAI/litellm/issues/45380) [Bug]: `/v1/messages` streaming needs undeclared `redis` since v1.98.0, and Bedrock streams then skip success callbacks without an error `llm translation`
- [#45336](https://github.com/BerriAI/litellm/issues/45336) [Bug]: Oversized tool names drop healthy tool-usage records during PostgreSQL flush
- [#45311](https://github.com/BerriAI/litellm/issues/45311) [Feature]: configurable URL prefix for the standalone UI in the microservices Helm chart

#### 🔒 Closed Issues
- [#18801](https://github.com/BerriAI/litellm/issues/18801) [Bug]: Streaming + logprobs fails for vLLM-backed models (PydanticSerializationError)
- [#20482](https://github.com/BerriAI/litellm/issues/20482) [Bug]: LiteLLM Proxy {+request log) shows ProxyException instead of unauthenticated when using config-defined models
- [#26973](https://github.com/BerriAI/litellm/issues/26973) Add "gemma4" in "model_prices_and_context_window.json"
- [#32045](https://github.com/BerriAI/litellm/issues/32045) [Bug]: Request log detail shows provider prompt-cache hits as Cache Hit: False and hides cached-token cost breakdown
- [#45009](https://github.com/BerriAI/litellm/issues/45009) [Feature]: OpenAI Decisions API
- [#35524](https://github.com/BerriAI/litellm/issues/35524) [Bug]: Budgeted requests skip reservation when admission cost cannot be estimated
- [#35536](https://github.com/BerriAI/litellm/issues/35536) [Security]: Responses ID checks need a policy for missing signing configuration and ownership metadata
- [#28991](https://github.com/BerriAI/litellm/issues/28991) [Bug]: Proxy forwards internal _litellm_* reservation fields to OpenAI chat completions
- [#35526](https://github.com/BerriAI/litellm/issues/35526) [Bug]: Custom authentication needs an explicit common-check enforcement contract
- [#35527](https://github.com/BerriAI/litellm/issues/35527) [Security]: Explicitly enabled drain endpoint permits anonymous requests
- [#35533](https://github.com/BerriAI/litellm/issues/35533) [Bug]: Redis limiter fallback lacks visibility when shared enforcement is unavailable
- [#23749](https://github.com/BerriAI/litellm/issues/23749) [Bug]: dynamic_rate_limiter_v3 do not trigger fallback
- [#32019](https://github.com/BerriAI/litellm/issues/32019) [Bug]: s3_v2 success logger does not persist all anthropic_messages
- [#32046](https://github.com/BerriAI/litellm/issues/32046) Fix "deepseek/deepseek-v4-flash" entry in "model_prices_and_context_window.json"
- [#38425](https://github.com/BerriAI/litellm/issues/38425) Fallback DELETE returns 404 while GET still returns the created fallback
- [#43489](https://github.com/BerriAI/litellm/issues/43489) [Bug]: Cache reads fall back to ast.literal_eval when the stored value is not JSON
- [#44038](https://github.com/BerriAI/litellm/issues/44038) [Bug]: Azure AI Foundry /v1/messages 400s on new Anthropic params (safeguards, output_config) passed through verbatim
- [#35532](https://github.com/BerriAI/litellm/issues/35532) [Security]: Signed JWT team provisioning needs explicit resource limits
- [#43474](https://github.com/BerriAI/litellm/issues/43474) [Bug]: Azure cost-map aliases and historical price units need source verification
- [#43480](https://github.com/BerriAI/litellm/issues/43480) [Bug]: Config includes need an explicit containment policy
- [#43485](https://github.com/BerriAI/litellm/issues/43485) [Bug]: Audio health checks lack explicit file closure
- [#43495](https://github.com/BerriAI/litellm/issues/43495) [Bug]: Routing by deployment id reports no healthy deployments
- [#45240](https://github.com/BerriAI/litellm/issues/45240) [Bug]: Management-object cache churn evicts authorization registries before their TTL
- [#32656](https://github.com/BerriAI/litellm/issues/32656) Support prompt_cache_breakpoint for GPT 5.6 models
- [#31836](https://github.com/BerriAI/litellm/issues/31836) [Bug]: DB-backed router_settings JSON strings are skipped on reload
- [#32061](https://github.com/BerriAI/litellm/issues/32061) [Bug]: Azure text_moderations guardrail fails proxy startup: categories/severity_threshold collide with ContentFilterConfigModel in LitellmParams
- [#32062](https://github.com/BerriAI/litellm/issues/32062) [Bug]: /key/list — user_id/key_alias filters ignored when caller has team-wide key visibility (OR'd instead of AND'd)
- [#32068](https://github.com/BerriAI/litellm/issues/32068) [Bug]: reasoning_content lost on streaming cache hit; FIX included
- [#32086](https://github.com/BerriAI/litellm/issues/32086) [Bug]: /v1/messages bridge to openai-provider upstreams swallows mid-stream failures into empty 200 SSE (no error event, no spend row, usage all-zero)
- [#35537](https://github.com/BerriAI/litellm/issues/35537) [Bug]: Spend entity updates are launched fire-and-forget and failures are swallowed
- [#35660](https://github.com/BerriAI/litellm/issues/35660) [Bug][Performance]: SPEND_LOG_QUEUE_SIZE_THRESHOLD does not gate SpendLogs flushes
- [#43479](https://github.com/BerriAI/litellm/issues/43479) [Bug]: Streaming error frames send the raw exception text to the client
- [#43482](https://github.com/BerriAI/litellm/issues/43482) [Bug]: Budget reset commits key, user, and team spend in separate transactions
- [#43493](https://github.com/BerriAI/litellm/issues/43493) [Bug]: Responses id decryption raises IndexError when the team segment is missing
- [#45246](https://github.com/BerriAI/litellm/issues/45246) [Bug]: Printed stream boolean conflicts with container stream metadata
- [#45332](https://github.com/BerriAI/litellm/issues/45332) [Bug]: Langfuse traces silently dropped when the shared cached httpx client is closed under a live logger
- [#38666](https://github.com/BerriAI/litellm/issues/38666) supports_openai_prompt_cache_breakpoint's provider gate excludes bedrock_mantle, which genuinely supports the same dialect
- [#41751](https://github.com/BerriAI/litellm/issues/41751) [Bug]: `GET /v1/files/{id}` 500s for a Bedrock batch *output* file
- [#41753](https://github.com/BerriAI/litellm/issues/41753) [Bug]: batch output files are invisible to `GET /v1/files` for the user who created them
- [#38547](https://github.com/BerriAI/litellm/issues/38547) [Bug]: /v1/models never expands litellm_proxy/* wildcards — provider-endpoint discovery is gated on a static dict that excludes litellm_proxy

### Unsloth (`unslothai/unsloth`)

**Stars:** 77,537 · **Open issues:** 755 · **Last push:** <1h ago

On October 8th, Unsloth released version v0.1.905-beta, introducing the ability to train custom Decision models, significantly boosting decision accuracy from 30% to 80%. This update also brought improvements such as native ComfyUI models, enhanced diffusion capabilities, and a better browser experience on desktop. Key merged pull requests included enhancements for the Studio interface, such as allowing Gemma 4 to read web search results and enabling easier access to image workflows. Notably, a new bug fix addressed server crashes during document embedding, while users reported issues with the inability to stop or pause the embedding process once initiated, highlighting ongoing challenges with project management.

#### 🚀 New Releases
- [v0.1.905-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.905-beta) Train your own Decision model

#### ✅ Merged PRs
- [#13109](https://github.com/unslothai/unsloth/pull/13109) Studio: reopen a chat on the branch it was left on
- [#13096](https://github.com/unslothai/unsloth/pull/13096) Studio: let Gemma 4 read web search and tool results on safetensors
- [#13103](https://github.com/unslothai/unsloth/pull/13103) Studio: let Deep Research search MCP tools as extra sources
- [#13101](https://github.com/unslothai/unsloth/pull/13101) Studio: open Images workflows from More when Images is unpinned
- [#13100](https://github.com/unslothai/unsloth/pull/13100) Studio: read news articles whose pages carry megabytes of inline code
- [#13106](https://github.com/unslothai/unsloth/pull/13106) Studio: fill the context bar for Ollama connections
- [#13077](https://github.com/unslothai/unsloth/pull/13077) Studio: hold message hover still while a wheel scroll moves the thread
- [#13099](https://github.com/unslothai/unsloth/pull/13099) Studio: let imported chats with image links answer follow-up questions
- [#12950](https://github.com/unslothai/unsloth/pull/12950) Studio: raise the llama-server micro-batch to 2048 when MoE experts spill to RAM
- [#13102](https://github.com/unslothai/unsloth/pull/13102) Studio: stop link URLs from crowding out long page text
- [#13104](https://github.com/unslothai/unsloth/pull/13104) Studio: keep Think off working on Claude Opus 5.5 and Sonnet 5.5
- [#13105](https://github.com/unslothai/unsloth/pull/13105) Studio: keep table columns in attached Word and HTML files
- [#12971](https://github.com/unslothai/unsloth/pull/12971) Windows installer: stop installing Git and the VS toolchain without asking
- [#13056](https://github.com/unslothai/unsloth/pull/13056) GGUF adapter export and llama.cpp installer: use unslothai/llama.cpp releases only, no git
- [#13097](https://github.com/unslothai/unsloth/pull/13097) Studio: let Gemma 4 GGUF models think after a tool call
- [#13084](https://github.com/unslothai/unsloth/pull/13084) Studio: provide Git lazily for FP8/FP4 export instead of at install time
- [#13089](https://github.com/unslothai/unsloth/pull/13089) Reject Activated LoRA adapters instead of training them as plain LoRA
- [#13059](https://github.com/unslothai/unsloth/pull/13059) Studio: keep typing and streaming fast in long chats
- [#12998](https://github.com/unslothai/unsloth/pull/12998) Unsloth Studio / Desktop: per-GPU Block Swap budget and layer panel for multi-GPU training
- [#12996](https://github.com/unslothai/unsloth/pull/12996) Unsloth Studio / Desktop: Block Swap settings, a VRAM budget, and a live layer panel on the training page
- [#13016](https://github.com/unslothai/unsloth/pull/13016) MLX: train decision models on Apple Silicon
- [#13062](https://github.com/unslothai/unsloth/pull/13062) Add loraplus_lr_ratio for LoRA+ training
- [#13079](https://github.com/unslothai/unsloth/pull/13079) Dequantize pre-quantized bitsandbytes checkpoints for full finetuning
- [#13028](https://github.com/unslothai/unsloth/pull/13028) Studio: fix Qwen-Image-2.1 input-image encode on Apple Silicon (MPS frame-axis pad returns wrong data)
- [#13035](https://github.com/unslothai/unsloth/pull/13035) Studio: load community SDXL single-file GGUFs on the Images page
- [#12011](https://github.com/unslothai/unsloth/pull/12011) Studio: don't take a port another process holds on 0.0.0.0
- [#13031](https://github.com/unslothai/unsloth/pull/13031) Studio: keep CUDA 12 llama.cpp prebuilts off drivers older than CUDA 12.4
- [#13044](https://github.com/unslothai/unsloth/pull/13044) Studio: restart llama-server after a lost GPU device instead of locking the chat
- [#13045](https://github.com/unslothai/unsloth/pull/13045) Studio: install the released Diffusers 0.41.0 instead of the pinned main commit
- [#13082](https://github.com/unslothai/unsloth/pull/13082) Studio: re-measure annotate marks after a tab zoom
- [#13054](https://github.com/unslothai/unsloth/pull/13054) Save models loaded from pre-quantized bitsandbytes checkpoints on transformers 5
- [#13026](https://github.com/unslothai/unsloth/pull/13026) Studio: int8 ConvRot Qwen-Image-2.1 text encoder on Apple Silicon, and release text encoders during denoise on unified memory
- [#13065](https://github.com/unslothai/unsloth/pull/13065) Keep loss-only evaluation on the fused CE path instead of materializing logits
- [#13083](https://github.com/unslothai/unsloth/pull/13083) Bump install.sh / install.ps1 pins to unsloth>=2026.10.3
- [#13036](https://github.com/unslothai/unsloth/pull/13036) Studio: report the real llama.cpp version for source builds
- [#13043](https://github.com/unslothai/unsloth/pull/13043) Studio: point compressed-tensors, AWQ and GPTQ models to the vLLM engine
- [#13070](https://github.com/unslothai/unsloth/pull/13070) Studio: keep a dragged annotate area the size it was drawn
- [#13058](https://github.com/unslothai/unsloth/pull/13058) Train EXAONE 3.5: name the token embedding remote code no longer exposes
- [#13034](https://github.com/unslothai/unsloth/pull/13034) Studio: load a repo id from its scan-folder copy instead of re-downloading it
- [#13027](https://github.com/unslothai/unsloth/pull/13027) Studio: name media companion downloads by component, and show what Run still fetches for an on-device GGUF
- [#13047](https://github.com/unslothai/unsloth/pull/13047) Studio: pin FastFlowLM 1.0.7 for Qwen3.8 27B on the AMD NPU and keep Lemonade / FastFlowLM current
- [#13015](https://github.com/unslothai/unsloth/pull/13015) Studio: serve decision models through the MLX engine on Apple Silicon
- [#13076](https://github.com/unslothai/unsloth/pull/13076) Studio: Docs links for Sandbox, Agents and the Decision API
- [#13051](https://github.com/unslothai/unsloth/pull/13051) Make Q-GaLore optimizer state resumable from checkpoints
- [#13050](https://github.com/unslothai/unsloth/pull/13050) Allow backward through eval-mode and for_inference forwards
- [#13040](https://github.com/unslothai/unsloth/pull/13040) Studio: keep tensor split and MTP when Auto would pick a DFlash drafter that aborts it
- [#13041](https://github.com/unslothai/unsloth/pull/13041) Installer: read the venv's torch in isolation so a PYTHONPATH torch cannot break the install
- [#13071](https://github.com/unslothai/unsloth/pull/13071) Studio: give the annotate comment box a visible shadow in dark mode
- [#13038](https://github.com/unslothai/unsloth/pull/13038) Studio: let another account join the resident GGUF instead of replacing it
- [#12957](https://github.com/unslothai/unsloth/pull/12957) Decline the packed INT4 kernel when weight_scale has the wrong group count
- [#13037](https://github.com/unslothai/unsloth/pull/13037) Studio: stop a Git Bash nul file from blocking every Windows MXC tool call
- [#13032](https://github.com/unslothai/unsloth/pull/13032) Studio: retry web search over HTTP/1.1 when the connection is reset
- [#11506](https://github.com/unslothai/unsloth/pull/11506) Studio: avoid a TypeError after a tools module reload
- [#13025](https://github.com/unslothai/unsloth/pull/13025) Studio: stop MXC read grants looping on a Microsoft Store Python
- [#12478](https://github.com/unslothai/unsloth/pull/12478) Studio: skip the Xet probe's GPU-init-off zoo retry on GPU hosts
- [#13024](https://github.com/unslothai/unsloth/pull/13024) Fix notebook failures on Kaggle T4x2 and duplicate import warnings
- [#12919](https://github.com/unslothai/unsloth/pull/12919) Studio: show the real cause when a desktop install runs out of disk space
- [#12997](https://github.com/unslothai/unsloth/pull/12997) Load one tensor at a time when quantizing a 16-bit checkpoint, so Qwen3.5-27B 4-bit loads without Block Swap
- [#12557](https://github.com/unslothai/unsloth/pull/12557) Unsloth Studio / Desktop: show a cached image GGUF as Partial until Run has its text encoder and VAE
- [#12979](https://github.com/unslothai/unsloth/pull/12979) Studio: duplicate a past training run into a new Configure draft
- [#12984](https://github.com/unslothai/unsloth/pull/12984) Studio: keep browsing from a temporary chat out of browser history
- [#12627](https://github.com/unslothai/unsloth/pull/12627) Studio: close refused tool calls under tool_choice none
- [#13033](https://github.com/unslothai/unsloth/pull/13033) Studio: put the skill row chevron next to the skill name
- [#13003](https://github.com/unslothai/unsloth/pull/13003) Studio: make the browser's right-click downloads work on macOS
- [#12985](https://github.com/unslothai/unsloth/pull/12985) Studio: keep a chat's HTML pages with that chat
- [#13009](https://github.com/unslothai/unsloth/pull/13009) Studio: Downloads button in the browser panel
- [#12961](https://github.com/unslothai/unsloth/pull/12961) Unsloth Studio (AMD): show each GPU's live VRAM and utilization under its own HIP id
- [#12959](https://github.com/unslothai/unsloth/pull/12959) FastModel: fall back to Unsloth inference on GPUs older than Volta
- [#12963](https://github.com/unslothai/unsloth/pull/12963) install.sh: install for the discrete AMD GPU when an iGPU is listed first
- [#12987](https://github.com/unslothai/unsloth/pull/12987) Studio: keep new image sets from merging into an existing one
- [#13011](https://github.com/unslothai/unsloth/pull/13011) Studio: run llama-server with a per-launch API key by default
- [#12937](https://github.com/unslothai/unsloth/pull/12937) Studio: build VAE tile blend weights on CPU so MPS tiled encode works
- [#12733](https://github.com/unslothai/unsloth/pull/12733) Studio: leave a bracketed IPv6 host unchanged in dial_host
- [#12917](https://github.com/unslothai/unsloth/pull/12917) Studio: make llama-fit-params executable after the macOS prebuilt install
- [#12962](https://github.com/unslothai/unsloth/pull/12962) Studio: find nvidia-smi under WSL on every query, count Core Ultra Arc iGPUs as XPU, cut GPU masks at an invalid index
- [#13002](https://github.com/unslothai/unsloth/pull/13002) Studio: serve whisper-server under a random per-launch request path
- [#13018](https://github.com/unslothai/unsloth/pull/13018) Update the flex large head dim mask tests to the unpadded causal-mask skip
- [#12980](https://github.com/unslothai/unsloth/pull/12980) Studio: parse Yahoo's newer result layout in web search
- [#13001](https://github.com/unslothai/unsloth/pull/13001) Studio: ask before numpy pickle loads, keep audio tags inline, cap the variable-prose regex
- [#13006](https://github.com/unslothai/unsloth/pull/13006) Studio: prefer llama-server for EmbeddingGemma in the embedding model picker
- [#12981](https://github.com/unslothai/unsloth/pull/12981) Skip the fast LoRA paths when lora_B has a bias
- [#12994](https://github.com/unslothai/unsloth/pull/12994) Keep the model a training script saves when it runs in Docker
- [#12982](https://github.com/unslothai/unsloth/pull/12982) Studio: list typed-decisions datasets first for decision training
- [#12986](https://github.com/unslothai/unsloth/pull/12986) Studio: show a site's own error page in the browser panel
- [#13013](https://github.com/unslothai/unsloth/pull/13013) Studio: static dark dropdown glow, and stop modal opens restyling the page
- [#13007](https://github.com/unslothai/unsloth/pull/13007) Studio: open video attachments in the browser panel
- [#13008](https://github.com/unslothai/unsloth/pull/13008) Studio: smaller settings info icons, engine notes under the engine name
- [#12989](https://github.com/unslothai/unsloth/pull/12989) Studio: make Thinking off and Preserve thinking work on Qwen3.6
- [#12964](https://github.com/unslothai/unsloth/pull/12964) Support text attachments in per-chat prompt queues
- [#12991](https://github.com/unslothai/unsloth/pull/12991) Studio: train vision datasets that have some rows without an image
- [#13005](https://github.com/unslothai/unsloth/pull/13005) Studio: use llama-server for embedding models the installed sentence-transformers cannot load
- [#12983](https://github.com/unslothai/unsloth/pull/12983) Studio: decode pages in the browser panel the way browsers do
- [#12976](https://github.com/unslothai/unsloth/pull/12976) Studio: stop crashing on a lowercase boolean in PYTORCH_ALLOC_CONF
- [#12992](https://github.com/unslothai/unsloth/pull/12992) Studio: show a download card when the python tool edits an attached file
- [#12993](https://github.com/unslothai/unsloth/pull/12993) Studio: show project sources as unused on models without tools
- [#12975](https://github.com/unslothai/unsloth/pull/12975) Studio: compact long chats on self-hosted connections to the window the server reports
- [#12972](https://github.com/unslothai/unsloth/pull/12972) Fix linked-folder indexing of hidden subdirectories
- [#12988](https://github.com/unslothai/unsloth/pull/12988) Studio: keep tool call arguments in Qwen3.5 safetensors and MLX prompts
- [#12990](https://github.com/unslothai/unsloth/pull/12990) Studio: keep Deep Research tables intact when a cited title has a pipe

#### 🐛 New Issues
- [#13049](https://github.com/unslothai/unsloth/issues/13049) [Feature / UX] Collapse model quantization accordions by default in "Select model" dropdown `feature request` 💬2
- [#13110](https://github.com/unslothai/unsloth/issues/13110) Ace-step cpp support `feature request`
- [#13095](https://github.com/unslothai/unsloth/issues/13095) [Bug] No option to stop, pause or cancel embedding of linked folder once it has begun and the process is now stuck indefinitely `feature request` `bug`
- [#13094](https://github.com/unslothai/unsloth/issues/13094) [Bug] Server stopped unexpectedly while embedding documents `feature request` `bug`
- [#13093](https://github.com/unslothai/unsloth/issues/13093) Deleted project is blocking folder link for new projects `feature request` `bug`
- [#13074](https://github.com/unslothai/unsloth/issues/13074) [Bug] Unable to load/process images in multimodal models despite support `feature request` `bug`
- [#13042](https://github.com/unslothai/unsloth/issues/13042) [Studio] audio.cpp runs on CPU on AMD GPUs: ship ROCm/HIP bundles in unslothai/audio.cpp and fall back to Vulkan `feature request` `AMD` `Studio`

#### 🔒 Closed Issues
- [#1886](https://github.com/unslothai/unsloth/issues/1886) AssertionError (assert param_data.shape == loaded_weight.shape) when serving dynamic quantized models with VLLM
- [#512](https://github.com/unslothai/unsloth/issues/512) LLVM ERROR: Cannot select: intrinsic %llvm.nvvm.shfl.sync.bfly.i32
- [#2482](https://github.com/unslothai/unsloth/issues/2482) RuntimeError: PassManager::run failed during training unsloth/Qwen3-0.6B-unsloth-bnb-4bit on Colab T4 GPU
- [#1672](https://github.com/unslothai/unsloth/issues/1672) GRPO training often produces garbage/mangled outputs.
- [#638](https://github.com/unslothai/unsloth/issues/638) Can't load CodeLlama-13b
- [#1801](https://github.com/unslothai/unsloth/issues/1801) VRAM spikes after "LlamaForCausalLM does not accept 'num_items_in_batch'"
- [#2506](https://github.com/unslothai/unsloth/issues/2506) [Bug] pulling models from local repository breaks with new name in lower case.
- [#338](https://github.com/unslothai/unsloth/issues/338) Unexpected OOM When Using use_gradient_checkpointing = "unsloth"
- [#286](https://github.com/unslothai/unsloth/issues/286) Please add Support for Encoder Decoder Models (T5 Family etc.)
- [#1744](https://github.com/unslothai/unsloth/issues/1744) OOM on WSL, GRPOTrainer RuntimeError: CUDA driver error: out of memory
- [#2390](https://github.com/unslothai/unsloth/issues/2390) [Feature] Is it possible to support to train microsoft/bitnet-b1.58-2B-4T ?
- [#11221](https://github.com/unslothai/unsloth/issues/11221) [Studio Regression] GGUF inference throughput is slower after v0.1.810-beta update
- [#12552](https://github.com/unslothai/unsloth/issues/12552) [Bug] The long-context chat has started to lag.
- [#1353](https://github.com/unslothai/unsloth/issues/1353) Some models bypass HF_ENDPOINT and download from huggingface.co
- [#1406](https://github.com/unslothai/unsloth/issues/1406) Model request: EXAONE-3.5-2.4B-Instruct
- [#2368](https://github.com/unslothai/unsloth/issues/2368) [Question] Cannot install specific releases from source ?
- [#1343](https://github.com/unslothai/unsloth/issues/1343) Adding New Tokens, then Saving & Re-loading Model Adapter
- [#2302](https://github.com/unslothai/unsloth/issues/2302) [BUG] CUDA out of memory during Llama-4-Scout loading on H200
- [#865](https://github.com/unslothai/unsloth/issues/865) Deploying llama3.1 8b instruct to sagemaker model endpoints
- [#2613](https://github.com/unslothai/unsloth/issues/2613) [Bug] Full Finetune: Tensors of floating point dtype can require gradients
- [#2575](https://github.com/unslothai/unsloth/issues/2575) [Crash] Colab Instantly Crashes with Whisper + unsloth — Small Dataset, CPU Only, No Traceback
- [#2305](https://github.com/unslothai/unsloth/issues/2305) [QST] How i can get the validation loss to also log when i train
- [#2652](https://github.com/unslothai/unsloth/issues/2652) [Feature] Converting `tekken.json` for Devstral to `tokenizer.json` and `tokenizer_config.json`
- [#1797](https://github.com/unslothai/unsloth/issues/1797) CUDA error: out of memory in WSL with 24G VRAM while 2/3 was still left unused
- [#1275](https://github.com/unslothai/unsloth/issues/1275) Finetuned Llama 3.1 8B (base) gets stuck in a loop
- [#1552](https://github.com/unslothai/unsloth/issues/1552) RuntimeError: CUDA error: out of memory CUDA
- [#11637](https://github.com/unslothai/unsloth/issues/11637) [Bug] Unsloth Studio / Desktop: Qwen-Image-2.1 shows as downloaded after the GGUF, then Run pulls another ~19 GB labelled only "Required assets"
- [#2410](https://github.com/unslothai/unsloth/issues/2410) [Feature] DIA TTS model finetuning support
- [#895](https://github.com/unslothai/unsloth/issues/895) Error: one of the variables needed for gradient computation has been modified by an inplace operation
- [#2123](https://github.com/unslothai/unsloth/issues/2123) results are truncated
- [#908](https://github.com/unslothai/unsloth/issues/908) Request for Support: Phi-3 Vision Model
- [#2171](https://github.com/unslothai/unsloth/issues/2171) whether support Ascend NPU device
- [#2404](https://github.com/unslothai/unsloth/issues/2404) [Question] Do not see 2x speed finetuning Qwen2.5-VL model
- [#729](https://github.com/unslothai/unsloth/issues/729) Using CPU when resume training from checkpoint @ patch 2024.7
- [#2257](https://github.com/unslothai/unsloth/issues/2257) [BUG] Evaluation & custom compute_metrics don't receive coherent text
- [#409](https://github.com/unslothai/unsloth/issues/409) setStorage out of bounds for size 0, on 2xV100 with accelerate
- [#1240](https://github.com/unslothai/unsloth/issues/1240) why is unsloth thinking I'm doing multi gpu optimization when I'm not?
- [#1728](https://github.com/unslothai/unsloth/issues/1728) while training unsloth/Meta-Llama-3.1-8B-Instruct-bnb-4bit why it is showning applying chat template .
- [#11241](https://github.com/unslothai/unsloth/issues/11241) Backend CI (Python 3.13, l-r): a withheld model 500s instead of 404ing, from state a neighbouring test leaves behind
- [#2666](https://github.com/unslothai/unsloth/issues/2666) ValueError: The decoder prompt (length 322) is longer than the maximum model length of 256.
- [#12365](https://github.com/unslothai/unsloth/issues/12365) When using multiple accounts to access the same local model it - current loaded model does not sync correctly
- [#8602](https://github.com/unslothai/unsloth/issues/8602) No chat history toggle (allowing multi-user inference)
- [#2306](https://github.com/unslothai/unsloth/issues/2306) [BUG] "I only used the original model for inference, but why do the results keep showing a continuous error loop?"
- [#1787](https://github.com/unslothai/unsloth/issues/1787) fine-tuned llama3.1 models keeps repeating itself
- [#620](https://github.com/unslothai/unsloth/issues/620) Megalodonian models
- [#642](https://github.com/unslothai/unsloth/issues/642) LLVM ERROR: Cannot select: intrinsic %llvm.nvvm.shfl.sync.bfly.i32 Aborted
- [#1666](https://github.com/unslothai/unsloth/issues/1666) It is too slow to run DeepSeek-R1-UD-Q2_K_XL
- [#1559](https://github.com/unslothai/unsloth/issues/1559) [Fixing] Better vision model finetuning
- [#844](https://github.com/unslothai/unsloth/issues/844) Inference speed so slow on T4
- [#1725](https://github.com/unslothai/unsloth/issues/1725) CalledProcessError: Command xxx returned non-zero exit status 2.
- [#11078](https://github.com/unslothai/unsloth/issues/11078) [Question] Kimi K3 training support
- [#12445](https://github.com/unslothai/unsloth/issues/12445) [Unsloth Bug] Studio: Qwen-Image-2.1 GGUF generation fails - 1-D norm weights never dequantized in no-conversion load path (4096 vs 8192)
- [#893](https://github.com/unslothai/unsloth/issues/893) Supporting "LoRA+: Efficient Low Rank Adaptation of Large Models"
- [#12842](https://github.com/unslothai/unsloth/issues/12842) [Bug] Models not loading after the latest update
- [#2627](https://github.com/unslothai/unsloth/issues/2627) [rank0]: OverflowError: out of range integral type conversion attempted
- [#2417](https://github.com/unslothai/unsloth/issues/2417) [Bug] Loss not decreasing with Qwen 2.5 32B
- [#2397](https://github.com/unslothai/unsloth/issues/2397) [Bug] When use customized trl.trainer, there is a sharp increase in CUDA memory?
- [#2424](https://github.com/unslothai/unsloth/issues/2424) GRPO Training: Repeated Output After Initial Normal Output
- [#2069](https://github.com/unslothai/unsloth/issues/2069) ObjMismatchError: The object provided is from 'torch._inductor.fx_passes.post_grad', which is coming from the current Python environment..
- [#2369](https://github.com/unslothai/unsloth/issues/2369) [Question] How to handle "Not an error, but Unsloth cannot patch layer" errors
- [#2731](https://github.com/unslothai/unsloth/issues/2731) Question about the DeepSeek-R1-0528-UD-Q2_K_XL
- [#1879](https://github.com/unslothai/unsloth/issues/1879) Trained deepseek qwen 32b R1 model giving rubbish output, though training went fine
- [#452](https://github.com/unslothai/unsloth/issues/452) Feature Request Support for Apple OpenELM
- [#379](https://github.com/unslothai/unsloth/issues/379) Add support for OpenELM models from apple?
- [#622](https://github.com/unslothai/unsloth/issues/622) Support for OpenELM
- [#1582](https://github.com/unslothai/unsloth/issues/1582) Did you tested unsloth/phi-4-bnb-4bit model with text generation inference (TGI)
- [#1018](https://github.com/unslothai/unsloth/issues/1018) Add support for Qwen2Audio
- [#1733](https://github.com/unslothai/unsloth/issues/1733) retrieve training parameters from a lora model?
- [#11384](https://github.com/unslothai/unsloth/issues/11384) Backend CI: _page_char_budget raises TypeError when the context sentinel is compared across two module copies
- [#12941](https://github.com/unslothai/unsloth/issues/12941) [Bug] The MXC probe fails with `ReadGrantError` because it attempts to modify grants on the protected MS Store Python directory.
- [#12466](https://github.com/unslothai/unsloth/issues/12466) Unsloth Studio backend: Xet health probe stubs out Triton process-wide, breaking diffusers/xformers ("'function' object has no attribute 'fn'")
- [#1357](https://github.com/unslothai/unsloth/issues/1357) Error on resuming training
- [#11890](https://github.com/unslothai/unsloth/issues/11890) [Bug] AMD: the ROCm Docker image loads the Qwen-Image-2.1 GGUF as Qwen-Image 1.x and fails on a shape mismatch
- [#11186](https://github.com/unslothai/unsloth/issues/11186) [Bug] "Thread __LOCALID_s9k2Cx0 was not persisted" when uploaded documents.
- [#2471](https://github.com/unslothai/unsloth/issues/2471) [Question] Support for custom PEFT Configs
- [#11453](https://github.com/unslothai/unsloth/issues/11453) [Bug] Intel: dual Arc Pro B60 on Vulkan hits ErrorDeviceLost mid-generation, chat locks until eject and reload
- [#2665](https://github.com/unslothai/unsloth/issues/2665) [Feature] Is there a plan to support ByteDance Seed/BAGEL-7B-MoT
- [#2602](https://github.com/unslothai/unsloth/issues/2602) [Feature/Question] - Is it possible to (explicitly) save / re-use GRPO generations in GRPO training?
- [#2338](https://github.com/unslothai/unsloth/issues/2338) [Feature] https://huggingface.co/nvidia/Cosmos-1.0-Diffusion-7B-Text2World
- [#1719](https://github.com/unslothai/unsloth/issues/1719) Feature Request: Finetune DeepSeek (and other MoEs) to use Pregate for predictive MoE offloading and fetching
- [#2351](https://github.com/unslothai/unsloth/issues/2351) [Question] CUDA driver error: invalid argument
- [#2723](https://github.com/unslothai/unsloth/issues/2723) [Bug] As soon as I install deepspeed, even if not used, unsloth reserved mem increases from 6.4 to 33.27GB
- [#1884](https://github.com/unslothai/unsloth/issues/1884) add_new_tokens is causing out of memory problem
- [#2382](https://github.com/unslothai/unsloth/issues/2382) [Question] load (from_pretrained) base_model only once, and load different lora models
- [#2510](https://github.com/unslothai/unsloth/issues/2510) [Question] Merging 4-bit Checkpoint into Phi-4 Base Model – Model Inference Inconsistent
- [#2556](https://github.com/unslothai/unsloth/issues/2556) [Question] Gemma3 Tools support
- [#1981](https://github.com/unslothai/unsloth/issues/1981) unsloth version suit for transfomer=4.43.0
- [#11435](https://github.com/unslothai/unsloth/issues/11435) [Bug] Gemma 4 26B A4B QAT uses more than 15 GB RAM with llama.cpp-b11067
- [#1712](https://github.com/unslothai/unsloth/issues/1712) Streaming fastgenerate
- [#1426](https://github.com/unslothai/unsloth/issues/1426) dynamic quant for llava 1.5 / 1.6 models
- [#1605](https://github.com/unslothai/unsloth/issues/1605) Error running Mistral small 2501 on vllm
- [#1824](https://github.com/unslothai/unsloth/issues/1824) Bug in flex attention
- [#1834](https://github.com/unslothai/unsloth/issues/1834) Prompt Adherence Issue in unsloth/Meta-Llama-3.1-8B-Instruct After Fine-tuning
- [#13049](https://github.com/unslothai/unsloth/issues/13049) [Feature / UX] Collapse model quantization accordions by default in "Select model" dropdown
- [#12473](https://github.com/unslothai/unsloth/issues/12473) Sandbox nul file breaks tools
- [#569](https://github.com/unslothai/unsloth/issues/569) Possible CrossEntropy optimization
- [#12638](https://github.com/unslothai/unsloth/issues/12638) [Bug] Web search fails: primp h2_client connection reset on v0.1.902-beta
- [#1661](https://github.com/unslothai/unsloth/issues/1661) Dialogue length decrease when training Qwen2.5-1.5B with 16bit LORA GRPO RL
- [#1564](https://github.com/unslothai/unsloth/issues/1564) Validation of Fine-Tuning and Inference Methods for Multi-Turn Conversations with LLaMA 3.1 8B
- [#1464](https://github.com/unslothai/unsloth/issues/1464) Extracting Image-Text Fusion Features from Fine-Tuned LLaMA 3.2-Vision Architecture
- [#12745](https://github.com/unslothai/unsloth/issues/12745) [Bug] Images tab only show Reference/Edit, etc sections if its pinned to the sidebar
- [#11391](https://github.com/unslothai/unsloth/issues/11391) [Feature] Load community SDXL fine-tunes (single-file GGUF/safetensors) in the Images page
- [#11906](https://github.com/unslothai/unsloth/issues/11906) Fix: Unsloth Desktop Qwen Image 2.1 Fails with "diffusers 0.40.0" Error
- [#2396](https://github.com/unslothai/unsloth/issues/2396) [Bug] Can't load saved model
- [#1983](https://github.com/unslothai/unsloth/issues/1983) I use unsloth+vllm has somethin wrong
- [#2001](https://github.com/unslothai/unsloth/issues/2001) Error when asking questions about the local deployment of DeepSeek-R1
- [#2100](https://github.com/unslothai/unsloth/issues/2100) duplicated imports
- [#1887](https://github.com/unslothai/unsloth/issues/1887) The inference results are not in the same order as the inputs
- [#2155](https://github.com/unslothai/unsloth/issues/2155) question about rms kernel
- [#2049](https://github.com/unslothai/unsloth/issues/2049) Can't find nvmlDeviceGetNvLinkRemoteDeviceType: /home/opt/gpuproxy/lib64/libnvidia-ml.so.1: undefined symbol: nvmlDeviceGetNvLinkRemoteDeviceType
- [#1959](https://github.com/unslothai/unsloth/issues/1959) qwen2_5_(3b)_grpo crash in my local Linux/Conda environment: process group has NOT been destroyed before we destruct ProcessGroupNCCL
- [#2309](https://github.com/unslothai/unsloth/issues/2309) [QST]How models are saved after SFT?
- [#2287](https://github.com/unslothai/unsloth/issues/2287) [QST] Does fine-tuning qwq32B with unsloth require modifying the thinking format in SYSTEM_PROMPT, because the original QWQ32B model's thinking process and template are different?
- [#2266](https://github.com/unslothai/unsloth/issues/2266) [BUG]ValueError: Tried to launch on distributed with multinode, but `MASTER_ADDR` env was not set
- [#1837](https://github.com/unslothai/unsloth/issues/1837) I can not see the thinking tokens when I do inference in distill models using unsloth.
- [#1883](https://github.com/unslothai/unsloth/issues/1883) Why DeepSeek-R1-Distill-Llama-8B-Q4_K_M.gguf uesed --cache-type-k q8_0
- [#1665](https://github.com/unslothai/unsloth/issues/1665) It is to0 slow to run DeepSeek-R1-UD-Q2_K_XL
- [#12798](https://github.com/unslothai/unsloth/issues/12798) pop up to update not updating keep poping up
- [#2202](https://github.com/unslothai/unsloth/issues/2202) how to use dora or Qdora in unsloth reinforce training script?
- [#11335](https://github.com/unslothai/unsloth/issues/11335) Qwen 3.5 FastMTP draft-vocab trim (d2t) causes loader crash in llama.cpp engine
- [#11622](https://github.com/unslothai/unsloth/issues/11622) [Studio Bug] set HF_ENDPOINT=https://hf-mirror.com but it not work
- [#12977](https://github.com/unslothai/unsloth/issues/12977) [Feature] Unsloth Studio: Make it easy to duplicate a past training run into a new Configure draft
- [#12592](https://github.com/unslothai/unsloth/issues/12592) [Bug] stop generating buttons freeze. Keeps generating even after model unload and chat get freeze.
- [#12935](https://github.com/unslothai/unsloth/issues/12935) [Bug] Studio (macOS/MPS): image generation with an input image fails — VAE tiling builds float64 weights on MPS
- [#12537](https://github.com/unslothai/unsloth/issues/12537) [Feature] Add mcp support for the Deep Research feature
- [#12391](https://github.com/unslothai/unsloth/issues/12391) unsloth_zoo's torch._grouped_mm support probe segfaults the whole process on ROCm (not a catchable exception)
- [#11623](https://github.com/unslothai/unsloth/issues/11623) [Studio/Windows] `_is_port_free` misses a listener on `0.0.0.0`, so the desktop backend takes over `127.0.0.1:8888` from another app
- [#11728](https://github.com/unslothai/unsloth/issues/11728) Qwen3.8-27B-NVFP4 Safetensors cannot be loaded in Unsloth Desktop
- [#12253](https://github.com/unslothai/unsloth/issues/12253) [Bug] Unsloth Loading a repo id that exists in a registered scan folder downloads it into the hub cache instead of using the local copy
- [#11308](https://github.com/unslothai/unsloth/issues/11308) [Bug] AMD: Unsloth Studio DFlash with tensor split crashes on 2x R9700 and silently falls back to slower layer split
- [#11980](https://github.com/unslothai/unsloth/issues/11980) [Bug] ARM64 Linux (GB10 / ASUS GX10): unsloth>=2026.9.11 pins torch==2.9.0a0+50eac811a6.nv25.9, install unsatisfiable
- [#12955](https://github.com/unslothai/unsloth/issues/12955) [Bug] int4 (compressed-tensors) loader doesn't validate group_size against the real weight_scale shape
- [#12626](https://github.com/unslothai/unsloth/issues/12626) [Bug] tool_choice="none" can leave streamed tool calls without a terminal event
- [#12719](https://github.com/unslothai/unsloth/issues/12719) Make dial_host idempotent for already-bracketed IPv6 literals
- [#12901](https://github.com/unslothai/unsloth/issues/12901) [Bug] Studio macOS installer leaves llama-fit-params non-executable, reducing context to 8K
- [#6178](https://github.com/unslothai/unsloth/issues/6178) [Feature] Recipes: "Train on this dataset" card with training configuration

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,128 · **Open issues:** 380 · **Last push:** 3h ago

On October 9, 2026, there were no new releases for AIBrix; however, several significant updates were made through merged pull requests. Notably, the ModelClaim keys were renamed and capped at 63 characters, and a feature was added to report the number of cached prefix blocks. Additionally, important bug fixes were implemented to enhance the autoscaler schedule transitions and improve KV event handling. Among the newly opened issues, a critical one highlighted the growing duration of the CI installation E2E test step, which has increased from approximately 9 minutes to 41 minutes since July, warranting urgent attention.

#### ✅ Merged PRs
- [#2937](https://github.com/vllm-project/aibrix/pull/2937) [Bug] Keep autoscaler schedule transitions at local clock times
- [#2872](https://github.com/vllm-project/aibrix/pull/2872) fix: separate GPU optimizer deps to reduce runtime image size (#2863)
- [#2946](https://github.com/vllm-project/aibrix/pull/2946) [API] Rename the ModelClaim keys and cap claim names at 63 characters
- [#2587](https://github.com/vllm-project/aibrix/pull/2587) fix(kvcache): decode vLLM map-format KV events; tier-aware prefix scoring
- [#2939](https://github.com/vllm-project/aibrix/pull/2939) [CI][Docs] Publish the ModelClaim kvcached runtime image
- [#2945](https://github.com/vllm-project/aibrix/pull/2945) [Feat] Report how many prefix blocks are cached
- [#2700](https://github.com/vllm-project/aibrix/pull/2700) [Docs] Add Simplified Chinese catalogs and a navbar language switcher
- [#2934](https://github.com/vllm-project/aibrix/pull/2934) [Bug] Keep a waiting deactivate off the runtime's event loop
- [#2907](https://github.com/vllm-project/aibrix/pull/2907) [Bug] Apply replayed KV event batches instead of leaving them unread
- [#2933](https://github.com/vllm-project/aibrix/pull/2933) [Gateway] Arm the PD decode watchdog after a non-terminal prefill failure
- [#2860](https://github.com/vllm-project/aibrix/pull/2860) [Gateway] Time the PD decode first response to its first token and cut silent streams
- [#2932](https://github.com/vllm-project/aibrix/pull/2932) [Feat] Log the auto-blended routing strategy as resolved_strategy

#### 🐛 New Issues
- [#2948](https://github.com/vllm-project/aibrix/issues/2948) [CI] Installation E2E test step grew from ~9 min to ~41 min since July `area/gateway` `area/testing` `kind/misc` `area/cicd` 💬2
- [#2938](https://github.com/vllm-project/aibrix/issues/2938) [Feature][ModelClaim] Get ModelClaim ready for v0.8.0 `kind/feature` `area/orchestration` 💬1
- [#2947](https://github.com/vllm-project/aibrix/issues/2947) Tier-aware prefix scoring follow-ups from #2587 `kind/misc` `area/website` 💬1
- [#2942](https://github.com/vllm-project/aibrix/issues/2942) [Feat] Report how many prefix blocks are cached `area/gateway` `kind/feature` 💬1
- [#2941](https://github.com/vllm-project/aibrix/issues/2941) [Bug] A zero prefix-cache eviction interval panics at startup `kind/bug` `area/gateway` 💬1
- [#2940](https://github.com/vllm-project/aibrix/issues/2940) [Bug] A one-block prefix match scores 0 on a long prompt `kind/bug` `area/gateway` 💬1
- [#2936](https://github.com/vllm-project/aibrix/issues/2936) [Bug] Scheduled autoscaler transitions drift across daylight saving changes `kind/bug` `area/orchestration` 💬1

#### 🔒 Closed Issues
- [#2858](https://github.com/vllm-project/aibrix/issues/2858) [Feature][Gateway] Decode watchdog for SGLang PD requests whose decode pod stops responding
- [#2936](https://github.com/vllm-project/aibrix/issues/2936) [Bug] Scheduled autoscaler transitions drift across daylight saving changes

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,064 · **Open issues:** 581 · **Last push:** <1h ago

On October 9, 2026, there were no new releases for Semantic Router, but several important pull requests were merged, including the introduction of shared tasks and persistent frontend with System One (#4734) and a feature to report the ranking runner-up in inference requests (#4637). Bug fixes also addressed issues ranging from managing looper construction failures (#4606) to rejecting bodyless inference requests at the header stage (#4298) and configuring external Dashboard URL origins in Grafana Live (#3497). Among the new issues reported, the most pressing seems to be related to truncated pricing columns in the models inventory (#4770), which may affect user experience when assessing model costs. Overall, the day was characterized by crucial updates and a focus on improving stability and usability.

#### ✅ Merged PRs
- [#4734](https://github.com/vllm-project/semantic-router/pull/4734) [Feature] System One: shared tasks, persistent frontend and replica pools
- [#4606](https://github.com/vllm-project/semantic-router/pull/4606) [Bug] Keep looper construction failures out of the client message
- [#4298](https://github.com/vllm-project/semantic-router/pull/4298) [Bug] Reject bodyless inference requests at the header stage
- [#3497](https://github.com/vllm-project/semantic-router/pull/3497) [Bug] Configure Grafana Live origins for external Dashboard URLs in vllm-sr serve
- [#4754](https://github.com/vllm-project/semantic-router/pull/4754) [Bug] fix images codec to accept integer error codes from vLLM
- [#4558](https://github.com/vllm-project/semantic-router/pull/4558) [Feature] Add deterministic bounded sticky tool-set planning (#3347 Phase 2)
- [#4637](https://github.com/vllm-project/semantic-router/pull/4637) [Feature] Report the ranking runner-up and why it lost
- [#4735](https://github.com/vllm-project/semantic-router/pull/4735) [Feature] Add cross-model KV handoff coordinator and configuration
- [#4471](https://github.com/vllm-project/semantic-router/pull/4471) [Bug] Encode assistant history as output_text on the Responses input path
- [#4109](https://github.com/vllm-project/semantic-router/pull/4109) [Feature] Add Grok 4.7 to the built-in model catalog
- [#4594](https://github.com/vllm-project/semantic-router/pull/4594) [Bug] Apply hybrid_search and adaptive_threshold on Qdrant Router Memory retrieve
- [#4332](https://github.com/vllm-project/semantic-router/pull/4332) [Bug] Reject negative RAG max_context_length at load time
- [#4530](https://github.com/vllm-project/semantic-router/pull/4530) [Bug] Fix home page raw skill link
- [#4473](https://github.com/vllm-project/semantic-router/pull/4473) [Bug] MCP streaming endpoint reports tool failures as successful null results

#### 🐛 New Issues
- [#4770](https://github.com/vllm-project/semantic-router/issues/4770) [Bug] Models inventory: Pricing column header truncated / not readablle `bug` `needs-acceptance` `needs-info` `wg/developer-experience-ecosystem` 💬5
- [#4756](https://github.com/vllm-project/semantic-router/issues/4756) [Bug] CPU model runtime oversubscribes threads on many-core hosts `bug` `accepted` `wg/router-models-inference-runtime` 💬4
- [#4769](https://github.com/vllm-project/semantic-router/issues/4769) [Bug] /metrics/router redirects unauthenticated users to the internal metrics URL and /health always answers 200 `bug` `accepted` `wg/enterprise-environment` 💬3
- [#4764](https://github.com/vllm-project/semantic-router/issues/4764) [Feature] Serve external NLI models through the shared decision runtime `enhancement` `accepted` `wg/router-models-inference-runtime` 💬3
- [#4762](https://github.com/vllm-project/semantic-router/issues/4762) [Feature] Expose safe WebSearch rate-limit statistics `enhancement` `needs-acceptance` `wg/developer-experience-ecosystem` 💬3
- [#4772](https://github.com/vllm-project/semantic-router/issues/4772) [Bug] Kubernetes, OpenShift and Helm deployments don't configure Grafana Live origins for external Dashboard URLs `bug` `needs-acceptance` `wg/enterprise-environment` 💬2
- [#4744](https://github.com/vllm-project/semantic-router/issues/4744) [Bug] Images codec drops vLLM error messages that use an integer code `bug` `accepted` `wg/data-plane-networking` 💬2
- [#4774](https://github.com/vllm-project/semantic-router/issues/4774) [Bug] Anthropic encoding rejects tool_choice=none with explicit parallel_tool_calls `bug` `needs-acceptance` `wg/data-plane-networking` 💬1
- [#4773](https://github.com/vllm-project/semantic-router/issues/4773) [Bug] Semantic response cache ignores authorized max-age request control `bug` `needs-acceptance` `wg/data-plane-networking` 💬1
- [#4768](https://github.com/vllm-project/semantic-router/issues/4768) [Test] Cover the benchmark target register credential-store flow with unit tests `enhancement` `needs-acceptance` `wg/evaluation-quality` 💬1
- [#4760](https://github.com/vllm-project/semantic-router/issues/4760) [Feature] Reuse SystemOne decision questions in verifier and relevance consumers `enhancement` `needs-acceptance` `wg/mom-routing` 💬1
- [#4753](https://github.com/vllm-project/semantic-router/issues/4753) [Test] Published Models: check Vela 2.0 with its real weights on CPU, including the fused decisions call `accepted` `wg/router-models-inference-runtime`

#### 🔒 Closed Issues
- [#4585](https://github.com/vllm-project/semantic-router/issues/4585) [Bug] Ollama's timing field is rejected by json validator
- [#4517](https://github.com/vllm-project/semantic-router/issues/4517) [Feature] Implement deterministic bounded sticky tool-set planning (#3347 Phase 2)
- [#3658](https://github.com/vllm-project/semantic-router/issues/3658) [Feature] Report why a decision won, not just which one
- [#4423](https://github.com/vllm-project/semantic-router/issues/4423) [Bug] Responses encoder sends assistant history as input_text, so translated multi-turn requests are rejected
- [#4592](https://github.com/vllm-project/semantic-router/issues/4592) [Bug] Qdrant Router Memory ignores hybrid_search and adaptive_threshold
- [#4547](https://github.com/vllm-project/semantic-router/issues/4547) [Bug] Looper construction failures leak the internal error chain to the client
- [#3471](https://github.com/vllm-project/semantic-router/issues/3471) [Bug] vllm-sr serve does not configure Grafana Live origins for external Dashboard URLs
- [#4292](https://github.com/vllm-project/semantic-router/issues/4292) [Bug] Empty request bodies bypass ingress validation and reach the upstream
- [#4716](https://github.com/vllm-project/semantic-router/issues/4716) [Bug] Shadow dispatch drops provider auth resolution failures with no server-side trace
- [#4529](https://github.com/vllm-project/semantic-router/issues/4529) [Bug] Home page "View raw skill" link shows Page Not Found
- [#4468](https://github.com/vllm-project/semantic-router/issues/4468) [Bug] MCP streaming endpoint reports tool failures as successful null results
- [#4568](https://github.com/vllm-project/semantic-router/issues/4568) [Bug] Static selector incorrectly treats configured score of 1.0 as 'no score'
- [#4500](https://github.com/vllm-project/semantic-router/issues/4500) [Bug] Saving a Builder route turns NOT (a AND b) into NOT a AND b
- [#4744](https://github.com/vllm-project/semantic-router/issues/4744) [Bug] Images codec drops vLLM error messages that use an integer code
- [#4561](https://github.com/vllm-project/semantic-router/issues/4561) [Bug] Responses parallel tool history becomes invalid Chat messages and fails with HTTP 400
- [#4732](https://github.com/vllm-project/semantic-router/issues/4732) [Feature] Recipes: route a reasoning fleet with one decision-model call (decision-balance)
- [#4753](https://github.com/vllm-project/semantic-router/issues/4753) [Test] Published Models: check Vela 2.0 with its real weights on CPU, including the fused decisions call

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*