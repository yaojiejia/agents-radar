# 📡 AI Ecosystem Digest — 2026-09-16

> Generated 2026-09-16 01:08 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 145,194 | 30 | 3 | 1 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 124,444 | 17 | 4 | 50 | 3 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 107,007 | 0 | 0 | 6 | 3 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,173 | 20 | 2 | 0 | 1 |
| [OpenCode](https://github.com/anomalyco/opencode) | 207,673 | 21 | 6 | 9 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 27,887 | 30 | 13 | 3 | 1 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 389,794 | 169 | 117 | 106 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 245,871 | 31 | 2 | 0 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 91,866 | 34 | 15 | 37 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 36,005 | 20 | 18 | 49 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 128,357 | 13 | 3 | 18 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 181,079 | 5 | 6 | 5 | 1 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 58,820 | 25 | 17 | 94 | 1 |
| [Unsloth](https://github.com/unslothai/unsloth) | 76,210 | 10 | 126 | 77 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,090 | 0 | 2 | 2 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 5,834 | 13 | 1 | 1 | 0 |

---

## ✨ Highlights

- **Claude Code** released version [v2.1.273](https://github.com/anthropics/claude-code/releases/tag/v2.1.273), adding enhancements to session management.
- **OpenAI Codex** published multiple releases: [rust-v0.155.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.8), [rust-v0.155.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.7), and [rust-v0.155.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.6).
- **OpenClaw** fixed issues related to automation history and children visibility in PRs [#148954](https://github.com/openclaw/openclaw/pull/148954) and [#149482](https://github.com/openclaw/openclaw/pull/149482).
- **vLLM** addressed a critical issue with peak device memory in compressed-tensors models in the new issue [#57008](https://github.com/vllm-project/vllm/issues/57008), which has gained significant attention (💬8).
- **OpenCode** faced a user-reported [TypeError](https://github.com/anomalyco/opencode/issues/49158) that is attracting discussion with 6 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 145,194 · **Open issues:** 12,385 · **Last push:** 4h ago

On September 16, 2026, Claude Code released version v2.1.273, introducing several new request headers for LLM gateways, including `x-claude-code-request-class` and `x-claude-code-context-compacted`, which can be activated with the `CLAUDE_CODE_GATEWAY_HINT_HEADERS=1` environment variable. The update also added a notification system for MCP server disconnections during sessions. A significant merged pull request (#94594) improved the session management by ensuring that git runs only at appropriate times. Amidst this activity, the newly reported bug (#94618) raised concerns about the inaccessibility of project memory in coworking sessions, indicating a critical issue as it affects functionality across tested setups.

#### 🚀 New Releases
- [v2.1.273](https://github.com/anthropics/claude-code/releases/tag/v2.1.273) v2.1.273

#### ✅ Merged PRs
- [#94594](https://github.com/anthropics/claude-code/pull/94594) diff: run git when the built-in panel would, never at the session's start

#### 🐛 New Issues
- [#94620](https://github.com/anthropics/claude-code/issues/94620) Feature request: built-in, cross-platform way to list running Claude Code sessions and their state `enhancement` `platform:linux` `area:hooks` `area:cli` 💬3
- [#94618](https://github.com/anthropics/claude-code/issues/94618) [BUG] Cowork: Projects' project_memory_* unreachable in every session tested — "runs through the remote-session bridge, which has no memory access" `bug` `duplicate` `area:cowork` `area:desktop` 💬1
- [#94432](https://github.com/anthropics/claude-code/issues/94432) [BUG] CoworkVMService (cowork-svc.exe) blocks Windows desktop app self-update, requiring full PC reboot `bug` `has repro` `platform:windows` `area:cowork` 💬1
- [#94559](https://github.com/anthropics/claude-code/issues/94559) [BUG] Claude Desktop on macOS grows to 131–140 GB and freezes system; CLI remains under 200 MB `bug` `has repro` `platform:macos` `perf:memory` 💬1
- [#94553](https://github.com/anthropics/claude-code/issues/94553) Monitor with persistent: true is capped at 30 minutes since 2.1.26x ("expires in 30m unless the source ends first") `bug` `has repro` `platform:linux` `area:tools` 💬1
- [#94633](https://github.com/anthropics/claude-code/issues/94633) Merge/push-to-main classifier blocks git push and gh pr merge even with full permissions.allow and Auto Mode configured `bug` `platform:windows` `area:permissions`
- [#94632](https://github.com/anthropics/claude-code/issues/94632) [Bug] pkill -f process matching kills unintended user processes on occupied ports `bug` `platform:linux` `area:tools` `area:bash`
- [#94631](https://github.com/anthropics/claude-code/issues/94631) I don't see a specific bug report or technical issue in your message. This appears to be a general statement about improving website security rather than a bug report for Claude Code. If you have encountered a specific bug or issue with Claude Code while `bug` `duplicate` `platform:windows` `area:tui`
- [#94630](https://github.com/anthropics/claude-code/issues/94630) [BUG] MCP OAuth: DCR client_name "Claude Code (<server>)" is rejected by servers that validate RFC 7591 metadata strictly (Calendly MCP → 400 invalid_client_metadata); recurrence of #59445 / #73293, still present in 2.1.271 `bug` `has repro` `platform:windows` `area:auth`
- [#94629](https://github.com/anthropics/claude-code/issues/94629) [BUG] Context isolation failure `bug` `area:ide` `platform:vscode` `platform:wsl`
- [#94628](https://github.com/anthropics/claude-code/issues/94628) Desktop app update wiped local scheduled tasks and session list (claude.ai web still shows them) `bug` `platform:macos` `area:desktop` `area:routines`
- [#94627](https://github.com/anthropics/claude-code/issues/94627) [Bug] Claude frequently fails on simple confirmation and lookup tasks despite having necessary tools `bug` `platform:macos` `area:tools` `area:model`
- [#94626](https://github.com/anthropics/claude-code/issues/94626) SONNET 4.6 `bug` `area:model` `model`
- [#94625](https://github.com/anthropics/claude-code/issues/94625) Feature request: multi-select quote reply (batch quotes into one reply) `enhancement` `area:tui`
- [#94624](https://github.com/anthropics/claude-code/issues/94624) Cross-session and mid-turn messages silently dropped (SendMessage reports success, message never arrives) `bug` `platform:macos` `area:tui` `area:agents`
- [#94623](https://github.com/anthropics/claude-code/issues/94623) [Bug] Model switched without user request or clear reason `bug` `platform:macos` `area:model` `needs-repro`
- [#94622](https://github.com/anthropics/claude-code/issues/94622) VS Code extension: Claude Code occupies two tabs (chat + account/usage panel), unlike other AI extensions `enhancement` `platform:windows` `area:ide` `platform:vscode`
- [#94621](https://github.com/anthropics/claude-code/issues/94621) [Feature Request] Review content moderation for legitimate security education use cases `enhancement` `platform:linux` `area:model`
- [#94613](https://github.com/anthropics/claude-code/issues/94613) [BUG] Desktop app auto-update kills local sessions AND remote-tools-device connection; local session list stays empty after relaunch even though the session reconnects server-side (Remote Control shows "archived" on mobile) `bug` `platform:macos` `area:desktop`
- [#94619](https://github.com/anthropics/claude-code/issues/94619) [BUG] docx/pptx/xlsx skills: soffice.py raises "module 'socket' has no attribute 'AF_UNIX'" on Windows (re-filing #78841, closed as stale) `bug` `has repro` `platform:windows` `area:skills`
- [#94617](https://github.com/anthropics/claude-code/issues/94617) VS Code extension launches the CLI without --chrome, so claude-in-chrome tools are never available in sidebar sessions `bug` `has repro` `platform:windows` `area:ide`
- [#94616](https://github.com/anthropics/claude-code/issues/94616) [Bug] Inconsistent output with global rules and terminal commands causing excessive token usage `bug` `platform:macos` `area:cost` `needs-repro`
- [#94615](https://github.com/anthropics/claude-code/issues/94615) [Bug] Anthropic API Error: Overly broad cybersecurity safety filter triggering on non-security topics `bug` `duplicate` `platform:macos` `area:model`
- [#94614](https://github.com/anthropics/claude-code/issues/94614) Allow user-defined aliases for built-in slash commands (the internal `aliases` array is not user-configurable) `enhancement` `area:cli`
- [#94612](https://github.com/anthropics/claude-code/issues/94612) [BUG] Sandbox silently denies mach-lookup; system tools return default values that the model reports as fact `bug` `platform:macos` `area:bash` `area:sandbox`
- [#94611](https://github.com/anthropics/claude-code/issues/94611) Status bar "N agents" indicator doesn't clear/refresh after background tasks finish (needs window reload) `bug` `platform:linux` `platform:vscode` `area:statusline`
- [#94610](https://github.com/anthropics/claude-code/issues/94610) Suggested task ("task chip") intermittently fails to start, with no surfaced error and no log `bug` `platform:macos` `area:desktop`
- [#94588](https://github.com/anthropics/claude-code/issues/94588) [BUG] VS Code extension: SDK launch never completes — Interrupted during launch / sdk_stream_ended_no_result (CLI works; macOS 27) `bug` `has repro` `platform:macos` `area:ide`
- [#94546](https://github.com/anthropics/claude-code/issues/94546) Remote Control (--spawn=same-dir) sessions never appear in the --resume picker `bug` `has repro` `platform:linux` `area:cli`
- [#94608](https://github.com/anthropics/claude-code/issues/94608) [BUG] Desktop app rejects MCP calls that omit optional parameters (expected, nonoptional, rerecived undefined) `bug` `has repro` `platform:macos` `area:mcp`

#### 🔒 Closed Issues
- [#76577](https://github.com/anthropics/claude-code/issues/76577) [FEATURE] Persist Transcript view mode (Desktop) across sessions
- [#93524](https://github.com/anthropics/claude-code/issues/93524) [Bug] Anthropic API Error: Overly aggressive safety filtering on legitimate system signal operations
- [#94246](https://github.com/anthropics/claude-code/issues/94246) [Desktop, Windows] Accessibility: 'View usage in Settings' opens Settings dialog without moving keyboard/screen-reader focus into it

### OpenAI Codex (`openai/codex`)

**Stars:** 124,444 · **Open issues:** 17,310 · **Last push:** <1h ago

On September 16, 2026, OpenAI Codex released three new versions of its Rust packages: rust-v0.155.0-alpha.8, rust-v0.155.0-alpha.7, and rust-v0.155.0-alpha.6. Among the significant merged pull requests was #45822, which introduces opt-in response body limits to the HTTP transport, alongside improvements to sandbox policies and analytics navigation. Notably, issue #45801 surfaced a serious and recurring quality degradation in GPT-5.6 Sol for frontend, design, and project execution tasks, raising concerns about performance in critical use cases.

#### 🚀 New Releases
- [rust-v0.155.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.8) 0.155.0-alpha.8
- [rust-v0.155.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.7) 0.155.0-alpha.7
- [rust-v0.155.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.6) 0.155.0-alpha.6

#### ✅ Merged PRs
- [#45822](https://github.com/openai/codex/pull/45822) Add opt-in response body limits to the HTTP transport
- [#45821](https://github.com/openai/codex/pull/45821) Use app-server state for TUI Windows sandbox decisions
- [#45820](https://github.com/openai/codex/pull/45820) Continue interrupted work after managed daemon restarts
- [#45817](https://github.com/openai/codex/pull/45817) Add a bounded Mermaid text renderer
- [#45813](https://github.com/openai/codex/pull/45813) Track Windows sandbox policy and per-thread executor hosts in the TUI
- [#45812](https://github.com/openai/codex/pull/45812) Add workspace routing support for Responses requests
- [#45811](https://github.com/openai/codex/pull/45811) Bound WSL terminal detection and handle inconclusive probes safely
- [#45809](https://github.com/openai/codex/pull/45809) Retire the personality feature flag and document deprecated settings
- [#45807](https://github.com/openai/codex/pull/45807) Record interrupted turns in managed daemon recovery snapshots
- [#45806](https://github.com/openai/codex/pull/45806) Restrict plugin install requests to the root thread
- [#45805](https://github.com/openai/codex/pull/45805) Preserve MCP App UI metadata in tool-call events and history
- [#45799](https://github.com/openai/codex/pull/45799) Complete Windows sandbox uninstall cleanup
- [#45796](https://github.com/openai/codex/pull/45796) Preserve `ImageUserInput` in the Python SDK
- [#45794](https://github.com/openai/codex/pull/45794) Support image references by file ID in inputs and tool outputs
- [#45789](https://github.com/openai/codex/pull/45789) Preserve Guardian evidence during checkpoint migration
- [#45782](https://github.com/openai/codex/pull/45782) Preserve Guardian authorization evidence across checkpoint migration
- [#45781](https://github.com/openai/codex/pull/45781) Normalize bullet glyphs in the image preparation disconnect snapshot
- [#45780](https://github.com/openai/codex/pull/45780) Allow daemon updates to restore pinned packages to latest stable
- [#45779](https://github.com/openai/codex/pull/45779) Use native process identities for PID-managed daemons
- [#45772](https://github.com/openai/codex/pull/45772) Expose experimental analytics plan history and improve navigation
- [#45770](https://github.com/openai/codex/pull/45770) Improve analytics chart readability and navigation
- [#45769](https://github.com/openai/codex/pull/45769) Add an account Summary tab to Analytics
- [#45768](https://github.com/openai/codex/pull/45768) Add consumer Top chats usage analytics
- [#45766](https://github.com/openai/codex/pull/45766) Add gated plan usage history to TUI analytics
- [#45765](https://github.com/openai/codex/pull/45765) Add Top chats to usage analytics
- [#45764](https://github.com/openai/codex/pull/45764) Add an account analytics dashboard to `/usage`
- [#45763](https://github.com/openai/codex/pull/45763) Add stacked chart primitives for account analytics
- [#45762](https://github.com/openai/codex/pull/45762) Load analytics reports with server plans and account identity checks
- [#45760](https://github.com/openai/codex/pull/45760) Disable V8 optimization paths affected by array sort bugs
- [#45757](https://github.com/openai/codex/pull/45757) Wire Windows sandbox selection into managed proxy routing
- [#45755](https://github.com/openai/codex/pull/45755) Honor canonical plugin disables for shared connectors
- [#45749](https://github.com/openai/codex/pull/45749) Extract reusable Bash and Zsh startup scripts
- [#45746](https://github.com/openai/codex/pull/45746) Explicitly gate DotSlash publishing on release success
- [#45742](https://github.com/openai/codex/pull/45742) Add account-bound authentication for analytics requests
- [#45741](https://github.com/openai/codex/pull/45741) Add token history and credit formatting helpers for analytics
- [#45740](https://github.com/openai/codex/pull/45740) Add account analytics data normalization to the TUI
- [#45739](https://github.com/openai/codex/pull/45739) Add typed account analytics reports to the backend client
- [#45737](https://github.com/openai/codex/pull/45737) Separate Windows sandbox implementations from legacy setup modes
- [#45736](https://github.com/openai/codex/pull/45736) Route Guardian requests through `/responses` with identifying headers
- [#45730](https://github.com/openai/codex/pull/45730) Separate executor sandbox selection from Windows sandbox levels
- [#45729](https://github.com/openai/codex/pull/45729) Move Guardian reviewer configuration into the extension
- [#45716](https://github.com/openai/codex/pull/45716) Classify MCP auth and approval outcomes in analytics
- [#45711](https://github.com/openai/codex/pull/45711) Add startup tool allowlists for threads
- [#45693](https://github.com/openai/codex/pull/45693) Move Guardian approval routing into the reviewer extension
- [#45684](https://github.com/openai/codex/pull/45684) Pass `ReviewModel` through guardian review sessions
- [#45683](https://github.com/openai/codex/pull/45683) Consolidate guardian transcript tests in `guardian-context`
- [#45680](https://github.com/openai/codex/pull/45680) Restrict guardian assessment parsing and circuit breaker visibility
- [#45679](https://github.com/openai/codex/pull/45679) Retire the unused Guardian extension prototype API
- [#45677](https://github.com/openai/codex/pull/45677) Move Guardian review reporting and denial accounting into the extension
- [#45676](https://github.com/openai/codex/pull/45676) Move spawned-agent interruption rules into `AgentControl`

#### 🐛 New Issues
- [#45603](https://github.com/openai/codex/issues/45603) Windows Codex Desktop 26.908.40834: write operations hang; clean workspace never launches requested write command `bug` `windows-os` `sandbox` `tool-calls` 💬5
- [#45801](https://github.com/openai/codex/issues/45801) Serious and recurring quality degradation in GPT-5.6 Sol for frontend, design, and project execution tasks `bug` `model-behavior` `skills` 💬2
- [#45732](https://github.com/openai/codex/issues/45732) Desktop approval review binds scheduled heartbeat to preceding interactive request `bug` `sandbox` `app` `automations` 💬2
- [#45604](https://github.com/openai/codex/issues/45604) Approve for me can reject direct consent without a usable approval entry `bug` `sandbox` 💬2
- [#45797](https://github.com/openai/codex/issues/45797) Windows Desktop: first prompt succeeds, second message cannot be sent; reinstall only fixes it temporarily `bug` `windows-os` `app` 💬2
- [#45818](https://github.com/openai/codex/issues/45818) Merge Codex/GPT chat/work/codex `enhancement` `app` `session` 💬1
- [#45816](https://github.com/openai/codex/issues/45816) Astra Daybreak constantly interrupting the session. `bug` `CLI` `safety-check` 💬1
- [#45814](https://github.com/openai/codex/issues/45814) All talk, no action, in several gpt5.5 sessions today `bug` `model-behavior` `CLI` 💬1
- [#45810](https://github.com/openai/codex/issues/45810) Windows: Kaspersky blocks codex-command-runner 0.154.0 as PDM:Exploit.Win32.Generic.nblk `bug` `windows-os` `sandbox` `CLI` 💬1
- [#45804](https://github.com/openai/codex/issues/45804) Remote QR pairing fails after removing previously paired iPhone `bug` `windows-os` `app` `remote` 💬1
- [#45791](https://github.com/openai/codex/issues/45791) Codex App: threads created by codex exec can't be pinned or moved to a sidebar section `bug` `exec` `app` `app-server` 💬1
- [#45819](https://github.com/openai/codex/issues/45819) Bug: Korean (IME) text input continuously overwritten and Enter key sends empty prompt in VS Code Terminal `bug` `TUI` `CLI`
- [#45815](https://github.com/openai/codex/issues/45815) Sites artifact upload consistently times out after 60 seconds `bug` `tool-calls` `app` `connectivity`
- [#45808](https://github.com/openai/codex/issues/45808) [macOS] Fatal remote compaction v2: expected one compaction output item, got 2 from 2; task stalls `bug` `context` `app` `session`
- [#45803](https://github.com/openai/codex/issues/45803) Passwords in the project folder `enhancement`
- [#45802](https://github.com/openai/codex/issues/45802) Linux Desktop: automatically selected system skill is advertised but unreadable inside managed task sandbox `bug` `sandbox` `app` `skills`
- [#45800](https://github.com/openai/codex/issues/45800) Family / Household sharing of unused Codex usage `enhancement` `codex-web` `rate-limits`

#### 🔒 Closed Issues
- [#41522](https://github.com/openai/codex/issues/41522) TUI: allow configuring or disabling the inline diff preview limit
- [#34268](https://github.com/openai/codex/issues/34268) Multi-agent V2 full-history forks duplicate historical compaction snapshots and inline images, causing >100 GiB session storage growth
- [#44900](https://github.com/openai/codex/issues/44900) TUI startup freezes ~60s on WSL when terminal-detection probe (`cmd.exe /c set TERM_PROGRAM`) hits a stale interop socket
- [#45816](https://github.com/openai/codex/issues/45816) Astra Daybreak constantly interrupting the session.

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 107,007 · **Open issues:** 844 · **Last push:** 3h ago

On September 16, 2026, Gemini CLI released v0.61.0-preview.0 and v0.61.0-nightly.20260915.g9c1b0a610, featuring significant updates such as improved destination validation and connection routing in web fetch utilities, and enforcement of RFC 9207 issuer identification in the MCP OAuth flow with the stable v0.60.0 release. Additionally, merged pull requests included a version bump to v0.62.0-nightly.20260915.gae28844fb and fixes for various core functionalities, such as formatting MCP tool call titles and preserving properties in AgentLoopContext during object spread. No new issues were raised in this 24-hour period, indicating a smooth operational state for the Gemini CLI ecosystem.

#### 🚀 New Releases
- [v0.61.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0-preview.0) Release v0.61.0-preview.0
- [v0.61.0-nightly.20260915.g9c1b0a610](https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0-nightly.20260915.g9c1b0a610) Release v0.61.0-nightly.20260915.g9c1b0a610
- [v0.60.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.60.0) Release v0.60.0

#### ✅ Merged PRs
- [#29346](https://github.com/google-gemini/gemini-cli/pull/29346) chore(release): bump version to 0.62.0-nightly.20260915.gae28844fb
- [#29341](https://github.com/google-gemini/gemini-cli/pull/29341) fix(core,acp): format MCP tool call titles as structured signatures and segregate explanations
- [#29345](https://github.com/google-gemini/gemini-cli/pull/29345) Changelog for v0.60.0
- [#29344](https://github.com/google-gemini/gemini-cli/pull/29344) Changelog for v0.61.0-preview.0
- [#29334](https://github.com/google-gemini/gemini-cli/pull/29334) fix(a2a-server): add early return on unsupported store in tasks metadata endpoint
- [#29335](https://github.com/google-gemini/gemini-cli/pull/29335) fix(core): ensure AgentLoopContext properties are preserved across object spread

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,173 · **Open issues:** 2,396 · **Last push:** 5h ago

On September 16, 2026, GitHub Copilot CLI released version 1.0.84-9, which introduced /settings options to opt in to context management tools for agents and subagents, improved metadata scanning time for larger local session histories, and fixed an issue with cursor movement at the end of wrapped lines. While there were no merged pull requests, a number of new issues were reported, most notably issue #4847, which addresses a problem with automatic managed-settings refresh disrupting IDE MCP reloads and disabling the /allow-all option. Other significant issues included #4855, regarding the failure of Copilot CLI 1.0.84-8 to accept interactive keyboard input in macOS Terminal, and #4850, which highlights a background subagent that can run indefinitely after tool activity stops.

#### 🚀 New Releases
- [v1.0.84-9](https://github.com/github/copilot-cli/releases/tag/v1.0.84-9) 1.0.84-9

#### 🐛 New Issues
- [#4847](https://github.com/github/copilot-cli/issues/4847) Automatic managed-settings refresh breaks IDE MCP reload and disables /allow-all `triage` 💬2
- [#4849](https://github.com/github/copilot-cli/issues/4849) Reduce latency and review-loop overhead in subagent workflows `triage` 💬5
- [#4855](https://github.com/github/copilot-cli/issues/4855) Copilot CLI 1.0.84-8 does not accept interactive keyboard input in macOS Terminal 💬2
- [#4850](https://github.com/github/copilot-cli/issues/4850) Background subagent can remain running indefinitely after tool activity stops `triage` 💬2
- [#4854](https://github.com/github/copilot-cli/issues/4854) Local sandbox setting 'Allow local network' not works 💬1
- [#4865](https://github.com/github/copilot-cli/issues/4865) Ask clarifying questions in chat instead of forms `triage`
- [#4866](https://github.com/github/copilot-cli/issues/4866) Ctrl-D in ask_user /elicitation form fields triggers session shutdown and discards in-progress input `triage`
- [#4863](https://github.com/github/copilot-cli/issues/4863) SIGINT exits prompt process but model work continues and OTel later reports success `triage`
- [#4862](https://github.com/github/copilot-cli/issues/4862) OTel: parallel task dispatch emits successful chat spans without response identity or usage `triage`
- [#4864](https://github.com/github/copilot-cli/issues/4864) OTel execute_tool bash span does not expose nonzero process exit outcome `triage`
- [#4861](https://github.com/github/copilot-cli/issues/4861) OTel file exporter emits no terminal telemetry when streamed prompt mode is interrupted with SIGINT `triage`
- [#4860](https://github.com/github/copilot-cli/issues/4860) OTel: parallel task dispatch emits successful chat spans without response identity or usage `triage`
- [#4859](https://github.com/github/copilot-cli/issues/4859) Repeated requests for /work/.venv/bin/python `triage`
- [#4858](https://github.com/github/copilot-cli/issues/4858) OTEL `chat` spans do not have the proper parent span for subagents `triage`
- [#4857](https://github.com/github/copilot-cli/issues/4857) Copilot switches to windows theme instead of staying dark `triage`
- [#4856](https://github.com/github/copilot-cli/issues/4856) Parent's text-only final message not rendered when a background subagent's turn boundary lands inside the parent turn (1.0.84-8) `triage`
- [#4853](https://github.com/github/copilot-cli/issues/4853) Linux sandbox hangs silently when the host denies namespace creation; the override env var is undocumented `triage`
- [#4852](https://github.com/github/copilot-cli/issues/4852) Issue with "unknown option '--no-warnings'" during operation `triage`
- [#4851](https://github.com/github/copilot-cli/issues/4851) Azure MCP server fails sending HTTP request `triage`
- [#4848](https://github.com/github/copilot-cli/issues/4848) /feedback: “Save feedback bundle” is easily mistaken for submitting feedback `triage`

#### 🔒 Closed Issues
- [#4855](https://github.com/github/copilot-cli/issues/4855) Copilot CLI 1.0.84-8 does not accept interactive keyboard input in macOS Terminal
- [#4846](https://github.com/github/copilot-cli/issues/4846) Sandbox policies ignored for certain commands with "allow dev tool access"

### OpenCode (`anomalyco/opencode`)

**Stars:** 207,673 · **Open issues:** 5,792 · **Last push:** <1h ago

On September 16, 2026, there were no new releases for OpenCode, but several important pull requests were merged, including the addition of a preview for timeline images in the attachment overlay (PR #49111) and a fix for the TUI to clarify collapsed shell output (PR #49232). Additionally, multiple fixes addressed various areas such as deduplicating plugin targets (PR #49112) and ensuring that installed plugin dependencies are retried (PR #49187). A notable new issue emerged, with the identifier #49158, reporting a TypeError related to an undefined object, drawing attention to potential stability concerns. Overall, while the day was focused on resolving existing issues and improving the platform, the combination of fixes and the new issue indicates active development and user engagement.

#### ✅ Merged PRs
- [#49112](https://github.com/anomalyco/opencode/pull/49112) fix(tui): deduplicate plugin targets
- [#49246](https://github.com/anomalyco/opencode/pull/49246) test(tui): update descendant form expectation
- [#49251](https://github.com/anomalyco/opencode/pull/49251) test(cli): align ACP fixture contracts
- [#49249](https://github.com/anomalyco/opencode/pull/49249) fix(codemode): treat tools.search as the built-in search
- [#49243](https://github.com/anomalyco/opencode/pull/49243) test(core): align plugin host fixture with session update and permission domains
- [#48735](https://github.com/anomalyco/opencode/pull/48735) fix(app): match session title placeholder to tab label
- [#49111](https://github.com/anomalyco/opencode/pull/49111) feat(app): preview timeline images in attachment overlay
- [#49187](https://github.com/anomalyco/opencode/pull/49187) fix(tui): retry installed plugin dependencies
- [#49232](https://github.com/anomalyco/opencode/pull/49232) fix(tui): clarify collapsed shell output

#### 🐛 New Issues
- [#49158](https://github.com/anomalyco/opencode/issues/49158) TypeError: undefined is not an object (evaluating 'a.name')" 💬6
- [#49230](https://github.com/anomalyco/opencode/issues/49230) Проблема с OpenCode 💬3
- [#49206](https://github.com/anomalyco/opencode/issues/49206) Zen muse-spark-*: tool-call continuation 400s with reasoning encrypted_content was not issued to this caller 💬2
- [#49193](https://github.com/anomalyco/opencode/issues/49193) you can't send more than 1 message in a session 💬3
- [#49237](https://github.com/anomalyco/opencode/issues/49237) zai: PDF attachments always fail with 400 [1210] — opencode sends `file_data`, Z.AI accepts PDF only via `file_url`/`file_id` 💬2
- [#49222](https://github.com/anomalyco/opencode/issues/49222) TUI unconditionally uses ~6.5-7GB RSS on startup, even in a brand-new empty project (no plugins, no content) 💬2
- [#49207](https://github.com/anomalyco/opencode/issues/49207) Policy question: may a third-party desktop app launch the user's own `opencode serve` under the user's own Zen/Go login and show its events? 💬2
- [#49252](https://github.com/anomalyco/opencode/issues/49252) Muse Spark models bug `needs:compliance` 💬1
- [#49247](https://github.com/anomalyco/opencode/issues/49247) Error from provider (Console): Upstream request failed: [invalid_request_error] reasoning `encrypted_content` was not issued to this caller 💬1
- [#49244](https://github.com/anomalyco/opencode/issues/49244) tui: first press of lowercase "l" swallowed in V2 prompt (no l/super keybind) 💬1
- [#49240](https://github.com/anomalyco/opencode/issues/49240) providers: nvidia rejects unsupported prompt_cache_key sent by V2 (OpenAI-compatible runtime) 💬1
- [#49239](https://github.com/anomalyco/opencode/issues/49239) Add a simple Pause / Resume button for running Agent tasks[FEATURE]: 💬1
- [#49238](https://github.com/anomalyco/opencode/issues/49238) Windows Desktop renderer hangs on large paste in PromptInputV2 (parsePromptInputV2Editor / onPaste) 💬1
- [#49205](https://github.com/anomalyco/opencode/issues/49205) [FEATURE]: Add Codex / Claude Code style `/goal` autonomous loop command 💬1
- [#49221](https://github.com/anomalyco/opencode/issues/49221) Startup permanently OOMs and bricks the app if any session's data fails schema validation (no graceful recovery) 💬1
- [#49212](https://github.com/anomalyco/opencode/issues/49212) TUI "Move session" picker can't reach nested project directories; Search returns "No results found" 💬1
- [#49209](https://github.com/anomalyco/opencode/issues/49209) service: background server boots the user home directory as a location 💬1
- [#49227](https://github.com/anomalyco/opencode/issues/49227) [FEATURE]: Support the MCP Tasks extension (SEP-2663)
- [#49224](https://github.com/anomalyco/opencode/issues/49224) tsgo crashes with OOM on Windows when turbo typecheck runs in parallel on heavily loaded machines
- [#49216](https://github.com/anomalyco/opencode/issues/49216) tui: ctrl+b background hint shown but keypress does nothing
- [#49211](https://github.com/anomalyco/opencode/issues/49211) Desktop: assistant text part is not rendered when the same message also contains tool calls

#### 🔒 Closed Issues
- [#49230](https://github.com/anomalyco/opencode/issues/49230) Проблема с OpenCode
- [#44790](https://github.com/anomalyco/opencode/issues/44790) Remote MCP OAuth: resource_metadata URL from WWW-Authenticate is ignored (origin-only RFC 9728 lookup) — breaks AWS Bedrock AgentCore runtimes
- [#49206](https://github.com/anomalyco/opencode/issues/49206) Zen muse-spark-*: tool-call continuation 400s with reasoning encrypted_content was not issued to this caller
- [#49193](https://github.com/anomalyco/opencode/issues/49193) you can't send more than 1 message in a session
- [#49207](https://github.com/anomalyco/opencode/issues/49207) Policy question: may a third-party desktop app launch the user's own `opencode serve` under the user's own Zen/Go login and show its events?
- [#49205](https://github.com/anomalyco/opencode/issues/49205) [FEATURE]: Add Codex / Claude Code style `/goal` autonomous loop command

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 27,887 · **Open issues:** 1,444 · **Last push:** <1h ago

On September 16, 2026, Qwen Code released the cua-driver-rs version 0.20.9, featuring prebuilt binaries for macOS (codesigned and notarized), Linux (unsigned for x86_64 and arm64), and Windows (unsigned UIAccess worker). Significant merged pull requests included a fix to retain tool parameters on MiniMax chat-completions and updates to the Windows CI pipeline to restore sandbox functionality, alongside improvements for desktop app publishing workflows. Among newly reported issues, the problem with the Desktop app failing to acknowledge user-defined UI theme and language settings (#11955) garnered particular attention, suggesting potential disruptions in user experience.

#### 🚀 New Releases
- [cua-driver-rs-v0.20.9](https://github.com/QwenLM/qwen-code/releases/tag/cua-driver-rs-v0.20.9) cua-driver-rs v0.20.9

#### ✅ Merged PRs
- [#11842](https://github.com/QwenLM/qwen-code/pull/11842) fix(core): keep tool parameters on the MiniMax chat-completions wire
- [#11970](https://github.com/QwenLM/qwen-code/pull/11970) test(cli): unbreak the bwrap sandbox suites on the Windows lane (#11968)
- [#11575](https://github.com/QwenLM/qwen-code/pull/11575) ci(desktop): publish the desktop app when the CLI releases

#### 🐛 New Issues
- [#11955](https://github.com/QwenLM/qwen-code/issues/11955) Desktop app ignores ui.theme and general.language settings `priority/P2` `type/bug` `category/ui` `scope/themes` 💬6
- [#11956](https://github.com/QwenLM/qwen-code/issues/11956) qwen 0.23.4 It will serialize the 'parameters' field of a parameterless tool as null, causing strict OpenAI-compatible gateways to reject the entire request, because of outputting {} or omitting the field. `status/need-information` `priority/P2` `type/bug` `category/core` 💬5
- [#11969](https://github.com/QwenLM/qwen-code/issues/11969) stripAnalysisBlock() discards the whole summary when a thinking model closes with </think> or the summary is truncated → COMPRESSION_FAILED_EMPTY_SUMMARY `priority/P2` `type/bug` `category/core` `scope/session-management` 💬4
- [#11936](https://github.com/QwenLM/qwen-code/issues/11936) USE_OPENAI_RESPONSES leaks literal `${session_id}` in customHeaders and sends no User-Agent (no placeholder expansion on Responses wire) `priority/P2` `type/bug` `category/core` `scope/content-generation` 💬4
- [#11898](https://github.com/QwenLM/qwen-code/issues/11898) fix(core,standalone): carry the PTY load reason with the call, drop .pdb from win-x64 archives, correct the linux-arm64 guide claim `priority/P2` `type/bug` `category/core` `scope/shell` 💬4
- [#11949](https://github.com/QwenLM/qwen-code/issues/11949) feat(web-shell): configurable settings presentation for embedded hosts `priority/P3` `type/feature-request` `category/ui` `scope/settings` 💬4
- [#11908](https://github.com/QwenLM/qwen-code/issues/11908) serve/acp: an oversized `available_commands_update` notification trips MAX_JSON_NODES, tears down the channel, and makes every later request 404 `No session with id` `priority/P1` `type/bug` `category/core` `scope/session-management` 💬4
- [#11966](https://github.com/QwenLM/qwen-code/issues/11966) Desktop app: tool call blocks render empty — cannot verify Edit / Shell content before approving `priority/P2` `type/bug` `category/ui` `status/ready-for-human` 💬3
- [#11964](https://github.com/QwenLM/qwen-code/issues/11964) autofix enforces reproduce-before-fix for a fix round — would you consider the same for review findings? `priority/P3` `type/feature-request` `category/development` `scope/commands` 💬3
- [#11958](https://github.com/QwenLM/qwen-code/issues/11958) bug(web-shell): session attachment upload is one unchunked POST, so reverse-proxy body limits 413 images under the 8 MiB cap `priority/P2` `category/ui` `type/enhancement` `need-discussion` 💬3
- [#11952](https://github.com/QwenLM/qwen-code/issues/11952) ci(desktop): decide the Windows code-signing path before desktop releases follow the CLI `priority/P2` `type/feature-request` `category/security` `scope/windows` 💬3
- [#11953](https://github.com/QwenLM/qwen-code/issues/11953) ci(desktop): skip the build matrix when the desktop version is already fully published `priority/P3` `type/feature-request` `category/development` `scope/ci-cd` 💬3
- [#11951](https://github.com/QwenLM/qwen-code/issues/11951) [WebShell] Render leading Markdown metadata as plain monospace text with a bottom dashed divider `priority/P3` `category/ui` `scope/markdown` `type/enhancement` 💬3
- [#11948](https://github.com/QwenLM/qwen-code/issues/11948) Docs: comments/JSDoc contradict the actual code in several places `priority/P3` `type/documentation` `category/development` `scope/cli` 💬3
- [#11944](https://github.com/QwenLM/qwen-code/issues/11944) feat(daemon): track four independent PRs for unattended turn reliability `priority/P3` `type/feature-request` `category/core` `need-discussion` 💬3
- [#11945](https://github.com/QwenLM/qwen-code/issues/11945) MCP Apps: Amplitude chart UI rejected by fixed 1 MiB HTML limit and 10s resource timeout `priority/P2` `type/bug` `category/tools` `scope/mcp` 💬3
- [#11937](https://github.com/QwenLM/qwen-code/issues/11937) ci: "Run .github/scripts helper tests" fails repo-wide — review-runner-schedule gh shim is loaded as ESM `status/in-review` `priority/P1` `type/bug` `category/development` 💬3
- [#11935](https://github.com/QwenLM/qwen-code/issues/11935) [Windows] Standalone auto-update fails when PowerShell 7 is installed (Win11 24H2): swallowed Expand-Archive error + deadlocked deferred swap `priority/P2` `type/bug` `category/platform` `scope/installation` 💬3
- [#11929](https://github.com/QwenLM/qwen-code/issues/11929) Windows Terminal 下模型流式输出持续跳帧/闪屏（WT 1.12 不支持 DECSET 2026） `priority/P2` `type/bug` `category/ui` `scope/interactive` 💬3
- [#11914](https://github.com/QwenLM/qwen-code/issues/11914) Web Shell reports completed Goal turns as interrupted after reload `status/in-progress` `priority/P2` `type/bug` `category/core` 💬3
- [#11899](https://github.com/QwenLM/qwen-code/issues/11899) vscode-ide-companion: legacy ACP permission slot force-cancels a second concurrent request `priority/P3` `type/bug` `category/integration` `scope/vscode` 💬3
- [#11971](https://github.com/QwenLM/qwen-code/issues/11971) Release Failed for v0.23.4-nightly.20260915.888528dfae on 2026-09-15 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#11968](https://github.com/QwenLM/qwen-code/issues/11968) Main CI failed: Qwen Code CI on 3fc1133d4441 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#11967](https://github.com/QwenLM/qwen-code/issues/11967) Main CI failed: E2E Tests on 888528dfae9b `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#11962](https://github.com/QwenLM/qwen-code/issues/11962) Release Failed for v0.23.5-preview.0 on 2026-09-15 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#11942](https://github.com/QwenLM/qwen-code/issues/11942) feat(web-shell): add an SSH panel — host registry from ~/.ssh/config, terminal, file transfer, tunnels, and multi-host exec `priority/P2` `type/feature-request` `category/integration` `category/security` 💬2
- [#11941](https://github.com/QwenLM/qwen-code/issues/11941) feat(web-shell): add git visualization — branch selector, commit history graph, and worktree manager `priority/P3` `type/feature-request` `category/ui` `scope/git` 💬2
- [#11973](https://github.com/QwenLM/qwen-code/issues/11973) Main CI failed: E2E Tests on 49e8448cb50d `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#11918](https://github.com/QwenLM/qwen-code/issues/11918) Main CI failed: E2E Tests on e4a6ccd44980 `type/bug` `status/ready-for-agent` `autofix/approved` 💬1
- [#11954](https://github.com/QwenLM/qwen-code/issues/11954) Fleet Shepherd Dashboard

#### 🔒 Closed Issues
- [#11834](https://github.com/QwenLM/qwen-code/issues/11834) > 你好 ✕ [API Error: 400 invalid params, function parameters is empty (2013)] > /update ●︎ Qwen Code 0.23.3 已是最新！
- [#11556](https://github.com/QwenLM/qwen-code/issues/11556) vscode-ide-companion 0.23.1 cannot work under Remote-SSH — webview stuck loading
- [#11574](https://github.com/QwenLM/qwen-code/issues/11574) [VS Code] Extension update hides all prior session history: history dialog hardcodes sourceType filter, pre-0.23.x transcripts lack the metadata
- [#11514](https://github.com/QwenLM/qwen-code/issues/11514) Qwen code companion VSCode extension problem
- [#9387](https://github.com/QwenLM/qwen-code/issues/9387) Prevalidate a shared chat transcript contract across hosts
- [#9911](https://github.com/QwenLM/qwen-code/issues/9911) Restore VS Code message edit and rewind after the WebShell cutover
- [#11936](https://github.com/QwenLM/qwen-code/issues/11936) USE_OPENAI_RESPONSES leaks literal `${session_id}` in customHeaders and sends no User-Agent (no placeholder expansion on Responses wire)
- [#11898](https://github.com/QwenLM/qwen-code/issues/11898) fix(core,standalone): carry the PTY load reason with the call, drop .pdb from win-x64 archives, correct the linux-arm64 guide claim
- [#11862](https://github.com/QwenLM/qwen-code/issues/11862) hooks: a matcher ending in an escaped space loses it and stops matching
- [#9725](https://github.com/QwenLM/qwen-code/issues/9725) VS Code companion WebShell transcript: real VS Code runtime acceptance
- [#11734](https://github.com/QwenLM/qwen-code/issues/11734) fix(web-terminal): suppress terminal query answers during replay instead of server-side scrubbing
- [#9726](https://github.com/QwenLM/qwen-code/issues/9726) VS Code companion WebShell transcript: stable block identity and promptId
- [#11968](https://github.com/QwenLM/qwen-code/issues/11968) Main CI failed: Qwen Code CI on 3fc1133d4441

### Claude Code Skills (`anthropics/skills`)

Top open skill PRs by community engagement:
- [#1298](https://github.com/anthropics/skills/pull/1298) fix(skill-creator): isolate trigger evals and handle Windows and runtime failures
- [#1703](https://github.com/anthropics/skills/pull/1703) Add md2video-audio skill
- [#1742](https://github.com/anthropics/skills/pull/1742) fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers
- [#1734](https://github.com/anthropics/skills/pull/1734) Detect orphaned docx comments
- [#514](https://github.com/anthropics/skills/pull/514) Add document-typography skill: typographic quality control for generated documents

---

## 🦞 OpenClaw Ecosystem

### OpenClaw (`openclaw/openclaw`)

**Stars:** 389,794 · **Open issues:** 7,495 · **Last push:** <1h ago

On September 16, 2026, there were no new releases for OpenClaw, but a significant number of pull requests were merged. Key fixes included improvements to the user interface, such as ensuring the filtered automation history remains on the correct page and enhancing sidebar tooltips for pending requests. Additionally, issues related to session handling were addressed, including a fix for restoring conversations across app-server restarts and preventing the gateway from encountering a permanent restart loop due to binding issues. Among the newly reported issues, the gateway's restart loop when using specific settings drew notable attention, highlighting potential stability concerns that need to be addressed.

#### ✅ Merged PRs
- [#148954](https://github.com/openclaw/openclaw/pull/148954) fix(agents): preserve configured fallback for visible children
- [#149482](https://github.com/openclaw/openclaw/pull/149482) fix(ui): keep filtered automation history on the correct page
- [#149488](https://github.com/openclaw/openclaw/pull/149488) fix(ci): restore PR alias delegation checks
- [#149481](https://github.com/openclaw/openclaw/pull/149481) fix: restore PR alias delegation test fixtures
- [#149318](https://github.com/openclaw/openclaw/pull/149318) fix(ui): explain pending requests in sidebar attention tooltips
- [#149360](https://github.com/openclaw/openclaw/pull/149360) fix(ui): reveal sent comments on touch
- [#145223](https://github.com/openclaw/openclaw/pull/145223) fix(telegram): deliver plain text after legacy rich rejection
- [#149378](https://github.com/openclaw/openclaw/pull/149378) fix(codex): avoid repeated session catalog timeout waits
- [#149027](https://github.com/openclaw/openclaw/pull/149027) fix(gateway): wait for setup test workers before cleanup
- [#148932](https://github.com/openclaw/openclaw/pull/148932) refactor(providers): consolidate reasoning-mode tests
- [#149435](https://github.com/openclaw/openclaw/pull/149435) fix(codex): stabilize turn completion regression tests
- [#149356](https://github.com/openclaw/openclaw/pull/149356) refactor(lmstudio): remove duplicate base URL assertion
- [#148928](https://github.com/openclaw/openclaw/pull/148928) refactor(media): collect matching model entries directly
- [#149350](https://github.com/openclaw/openclaw/pull/149350) improve: compare updater database snapshots as bytes
- [#149315](https://github.com/openclaw/openclaw/pull/149315) [BACKPORT] fix(codex): preserve conversations across app-server restarts
- [#149085](https://github.com/openclaw/openclaw/pull/149085) fix(ci): retain safe dirty-source diagnostics for desktop proof
- [#149412](https://github.com/openclaw/openclaw/pull/149412) fix(cron): avoid checking scheduled completion before settlement
- [#149393](https://github.com/openclaw/openclaw/pull/149393) fix(codex): keep peer turns alive when thread startup times out
- [#149362](https://github.com/openclaw/openclaw/pull/149362) fix(ui): normalize Files search whitespace
- [#147804](https://github.com/openclaw/openclaw/pull/147804) fix(ui): show a loading label while earlier chat history loads
- [#149375](https://github.com/openclaw/openclaw/pull/149375) fix(cron): honor tool allowlists across harnesses
- [#149380](https://github.com/openclaw/openclaw/pull/149380) fix: allow Doctor maintenance after slow database preparation
- [#149410](https://github.com/openclaw/openclaw/pull/149410) test: bound stale worker fixture compilation
- [#149265](https://github.com/openclaw/openclaw/pull/149265) fix(backup): keep a configured agent's Git backup scope when it cannot be copied
- [#149202](https://github.com/openclaw/openclaw/pull/149202) fix(update): record why the managed-service handoff was refused
- [#148927](https://github.com/openclaw/openclaw/pull/148927) refactor(matrix): avoid per-character style arrays
- [#149179](https://github.com/openclaw/openclaw/pull/149179) fix: isolate the production subagent test model catalog
- [#149042](https://github.com/openclaw/openclaw/pull/149042) refactor(plugin-sdk): compact SSRF policy matrices
- [#149045](https://github.com/openclaw/openclaw/pull/149045) refactor(xai): compact provider test matrices
- [#149043](https://github.com/openclaw/openclaw/pull/149043) refactor(config): compact audit redaction matrix
- [#149044](https://github.com/openclaw/openclaw/pull/149044) refactor(qa-lab): compact evidence classification matrix
- [#149086](https://github.com/openclaw/openclaw/pull/149086) fix: prevent maturity shared-build collisions
- [#149087](https://github.com/openclaw/openclaw/pull/149087) fix: stop Gateway RPC maturity false failures
- [#149088](https://github.com/openclaw/openclaw/pull/149088) fix: stop cron maturity false failures
- [#148926](https://github.com/openclaw/openclaw/pull/148926) refactor(discord): resolve message fallbacks on demand
- [#130877](https://github.com/openclaw/openclaw/pull/130877) fix(trajectory): bound SQLite export source bytes before parse
- [#149427](https://github.com/openclaw/openclaw/pull/149427) test(infra): share managed handoff parent fixture
- [#143433](https://github.com/openclaw/openclaw/pull/143433) fix(heartbeat): isolated heartbeat runs leak bundle MCP child processes until Gateway restart
- [#149423](https://github.com/openclaw/openclaw/pull/149423) fix(test): unblock managed update fixture lint
- [#149354](https://github.com/openclaw/openclaw/pull/149354) fix(browser): preserve running browsers and locked profile data
- [#149193](https://github.com/openclaw/openclaw/pull/149193) fix(pr): materialize dependencies for code-only wrappers
- [#149399](https://github.com/openclaw/openclaw/pull/149399) fix(update): show recognized error codes for exit-coded steps in failure reports
- [#142877](https://github.com/openclaw/openclaw/pull/142877) fix: system expert permanently blocked by verified-inference owner gate when auth resolves through different paths
- [#149137](https://github.com/openclaw/openclaw/pull/149137) fix(ui): give transcript media consistent vertical spacing
- [#142853](https://github.com/openclaw/openclaw/pull/142853) fix(ui): distinguish child-batch completion from parent-turn completion in Swarm cards
- [#149168](https://github.com/openclaw/openclaw/pull/149168) fix(gateway): report the refused database schema and writer build at startup
- [#148617](https://github.com/openclaw/openclaw/pull/148617) fix(agents): preserve idle timeout failures when summary recovery is empty
- [#149368](https://github.com/openclaw/openclaw/pull/149368) fix(agents): deliver completed child results after background media
- [#149398](https://github.com/openclaw/openclaw/pull/149398) improve(browser): reduce dashboard discovery reads
- [#149347](https://github.com/openclaw/openclaw/pull/149347) fix(ui): keep chat scrolling usable around the composer
- [#149328](https://github.com/openclaw/openclaw/pull/149328) fix(ui): keep browser previews visible during refresh
- [#141626](https://github.com/openclaw/openclaw/pull/141626) improve: pause collection reviews with no eligible rooted runtime
- [#149143](https://github.com/openclaw/openclaw/pull/149143) fix(ci): require fresh checks after relevant main changes
- [#149339](https://github.com/openclaw/openclaw/pull/149339) fix(agents): stop MCP startup when compaction is canceled
- [#149223](https://github.com/openclaw/openclaw/pull/149223) fix(agents): deliver complete subagent answers to waiting parents
- [#149342](https://github.com/openclaw/openclaw/pull/149342) improve(cron): reduce data fetched when loading jobs
- [#149345](https://github.com/openclaw/openclaw/pull/149345) fix(gateway): avoid orphaned SSH desktop helpers
- [#149150](https://github.com/openclaw/openclaw/pull/149150) fix(update): support Bun handoff streams
- [#149132](https://github.com/openclaw/openclaw/pull/149132) fix(cli): skills info marks unavailable alternatives as satisfied
- [#149268](https://github.com/openclaw/openclaw/pull/149268) fix(doctor): migrate configured agentDir databases and fail when one is left behind
- [#149013](https://github.com/openclaw/openclaw/pull/149013) fix(deps): reject spoofed addresses from malformed proxy trust subnets
- [#143250](https://github.com/openclaw/openclaw/pull/143250) fix(sessions): allow pinning Home-parented dashboard sessions
- [#149334](https://github.com/openclaw/openclaw/pull/149334) improve: skip ineligible recovery backup preparation
- [#149281](https://github.com/openclaw/openclaw/pull/149281) refactor(subagents): return queue status from completion admission
- [#149228](https://github.com/openclaw/openclaw/pull/149228) fix: close database readers after failed ownership checks
- [#149349](https://github.com/openclaw/openclaw/pull/149349) test(codex): remove duplicate terminal inventory fixture case
- [#149333](https://github.com/openclaw/openclaw/pull/149333) fix(sessions): cancel revoked restores and bound rebuild checks
- [#149340](https://github.com/openclaw/openclaw/pull/149340) fix(memory): keep consolidated content removable after write errors
- [#140156](https://github.com/openclaw/openclaw/pull/140156) fix(agents): defer model-call terminal to result() after bare EOF
- [#149260](https://github.com/openclaw/openclaw/pull/149260) fix(sessions): skip empty-index receipt demand when owner has no database
- [#149311](https://github.com/openclaw/openclaw/pull/149311) fix(process): preserve output during private input delivery
- [#148993](https://github.com/openclaw/openclaw/pull/148993) improve: avoid redundant session reads when persisting turns
- [#149329](https://github.com/openclaw/openclaw/pull/149329) perf: reduce default redaction work for ordinary logs
- [#148914](https://github.com/openclaw/openclaw/pull/148914) fix: avoid long pauses while checking subagent completion
- [#149226](https://github.com/openclaw/openclaw/pull/149226) improve: start Gateway without loading idle tool runtimes
- [#149238](https://github.com/openclaw/openclaw/pull/149238) improve: reduce overhead when counting transcript events
- [#148854](https://github.com/openclaw/openclaw/pull/148854) perf(memory): bound vector point deletes during source cleanup
- [#149155](https://github.com/openclaw/openclaw/pull/149155) improve: reduce SQLite schema validation reads
- [#148900](https://github.com/openclaw/openclaw/pull/148900) improve: reduce filesystem work for standalone state access
- [#149327](https://github.com/openclaw/openclaw/pull/149327) improve(sessions): reduce allocation when loading session lists
- [#138070](https://github.com/openclaw/openclaw/pull/138070) fix(tui): show remembered session label before remote validation
- [#148985](https://github.com/openclaw/openclaw/pull/148985) improve(gateway): reduce work when loading sessions from fixed stores
- [#148925](https://github.com/openclaw/openclaw/pull/148925) refactor(usage): fold DeepSeek balances once
- [#149296](https://github.com/openclaw/openclaw/pull/149296) fix: retain usage refresh errors when lock cleanup also fails
- [#149267](https://github.com/openclaw/openclaw/pull/149267) fix: honor foreground node command timeouts in Codex
- [#148867](https://github.com/openclaw/openclaw/pull/148867) improve: reduce timestamp overhead during busy logging
- [#149276](https://github.com/openclaw/openclaw/pull/149276) fix: CPU profile capture rejects valid V8 samples
- [#128633](https://github.com/openclaw/openclaw/pull/128633) feat(ai): opt compatible Responses endpoints into stored HTTP continuation
- [#149285](https://github.com/openclaw/openclaw/pull/149285) improve: avoid repeated work when paging shared sessions
- [#149170](https://github.com/openclaw/openclaw/pull/149170) improve: reduce repeated work in multi-agent catalog reads
- [#148921](https://github.com/openclaw/openclaw/pull/148921) refactor(plugins): collect data children only when needed
- [#149244](https://github.com/openclaw/openclaw/pull/149244) refactor(ai): remove duplicate stream usage parser tests
- [#149274](https://github.com/openclaw/openclaw/pull/149274) fix(ui): clear saved automation timeout overrides
- [#149056](https://github.com/openclaw/openclaw/pull/149056) fix(tests): wait for background-task recovery to finish
- [#149261](https://github.com/openclaw/openclaw/pull/149261) fix: finish yielded tasks and identify failed child sessions
- [#149300](https://github.com/openclaw/openclaw/pull/149300) improve: avoid unused Doctor tool runtime imports
- [#148871](https://github.com/openclaw/openclaw/pull/148871) refactor(usage): bound MiniMax fallback traversal
- [#136073](https://github.com/openclaw/openclaw/pull/136073) refactor(logging): reduce redaction capture overhead
- [#149026](https://github.com/openclaw/openclaw/pull/149026) fix(skills): preserve dotted keys in API-key setup hints
- [#149066](https://github.com/openclaw/openclaw/pull/149066) fix(ui): sync exec approval selects when switching agents
- [#149301](https://github.com/openclaw/openclaw/pull/149301) fix: keep Codex model attribution fixture focused
- [#149203](https://github.com/openclaw/openclaw/pull/149203) fix: honor explicitly configured reset command aliases
- [#149294](https://github.com/openclaw/openclaw/pull/149294) fix: PR workflow tests fail during repository identity checks
- [#149299](https://github.com/openclaw/openclaw/pull/149299) fix(ui): page actions overlap the sidebar controls in RTL locales
- [#148897](https://github.com/openclaw/openclaw/pull/148897) chore(i18n): refresh native locales
- [#149284](https://github.com/openclaw/openclaw/pull/149284) fix(browser): tolerate delayed startup readiness responses

#### 🐛 New Issues
- [#148866](https://github.com/openclaw/openclaw/issues/148866) [Bug]: Gateway permanent restart loop when gateway.bind=lan (2026.9.1 + 2026.9.4, Ubuntu/systemd) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `impact:crash-loop` 💬8
- [#149198](https://github.com/openclaw/openclaw/issues/149198) [Bug]: Premature stale_lane_task release fails long cursor-cli cron `P2` `clawsweeper:source-repro` `impact:session-state` `impact:message-loss` 💬6
- [#148707](https://github.com/openclaw/openclaw/issues/148707) Bug: reply lost with 'Reply operation has no active tool authority snapshot' when a second run displaces an in-flight turn on the same session (2026.9.4 regression) `P1` `clawsweeper:needs-info` `impact:message-loss` `issue-rating: 🦪 silver shellfish` 💬6
- [#148837](https://github.com/openclaw/openclaw/issues/148837) [Bug]: Codex configuration refresh cannot recover a settled systemError thread `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬5
- [#148896](https://github.com/openclaw/openclaw/issues/148896) triage --run reports repaired for saved global-install-failed solely because Doctor lint passes `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬5
- [#148898](https://github.com/openclaw/openclaw/issues/148898) [Bug]: 2026.9.4 claude-cli no-output watchdog counts host-suspend time as CLI silence — laptop sleep kills in-flight turns (regression since 2026.8.2) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬5
- [#148974](https://github.com/openclaw/openclaw/issues/148974) [Bug]: 2026.9.4 Doctor cannot migrate legacy Skill Workshop backup with old workspace path `bug` `regression` `P2` `clawsweeper:source-repro` 💬5
- [#148680](https://github.com/openclaw/openclaw/issues/148680) Control UI TTS supplement does not merge with source message during live updates `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬5
- [#148755](https://github.com/openclaw/openclaw/issues/148755) [Bug]: 90s transient-retry window is consumed by the retried attempt, so tool-using turns get one retry and then surface "temporarily overloaded" with no fallback `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬5
- [#148886](https://github.com/openclaw/openclaw/issues/148886) [Bug]: sessions_spawn with visible: true marks the config-resolved model as a user override, disabling fallbacks for the child `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#149550](https://github.com/openclaw/openclaw/issues/149550) sessions_spawn: agentId is advertised as an unconstrained string but only main is accepted `bug` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬4
- [#149383](https://github.com/openclaw/openclaw/issues/149383) Android node events cause high-frequency main heartbeat runs and Telegram typing indicators `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬4
- [#149476](https://github.com/openclaw/openclaw/issues/149476) [Feature]: Add Prism as an official model provider `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬4
- [#149270](https://github.com/openclaw/openclaw/issues/149270) Code-mode turn wedged forever by a never-settling tool dispatch; session admission livelocks (2026.9.4) `P1` `clawsweeper:needs-info` `impact:session-state` `impact:message-loss` 💬4
- [#149101](https://github.com/openclaw/openclaw/issues/149101) [Bug]: skills info marks unavailable alternatives as satisfied `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#149232](https://github.com/openclaw/openclaw/issues/149232) main: doctor --fix exits 0 but leaves configured agentDir databases on schema 19, and the Gateway then fails startup after ~13 min `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#148963](https://github.com/openclaw/openclaw/issues/148963) Session listings scan and retain archived metadata outside the requested page `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬4
- [#148714](https://github.com/openclaw/openclaw/issues/148714) [Bug]: macOS Sparkle Autoupdate persists for 3 days with high CPU during extreme load spike `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬4
- [#148681](https://github.com/openclaw/openclaw/issues/148681) Update failure: finalize:doctor (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬4
- [#149018](https://github.com/openclaw/openclaw/issues/149018) Race condition: "Reply operation has no active tool authority snapshot" surfaces as generic error, wastes full model-fallback cascade `P1` `impact:session-state` `impact:message-loss` `impact:auth-provider` 💬3
- [#149430](https://github.com/openclaw/openclaw/issues/149430) Model-fallback tainted turns: recovery retries re-run the same source message multiple times, each re-sending the answer via message tool (4-6x duplicate Telegram replies) `P1` `impact:message-loss` `issue-rating: 🦪 silver shellfish` 💬3
- [#149454](https://github.com/openclaw/openclaw/issues/149454) [Feature]: let before_tool_call's onResolution refuse the call after an approval resolves `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬3
- [#148793](https://github.com/openclaw/openclaw/issues/148793) [Bug]: channel ingress monitor is single-use — start() no-ops after stop(), leaving a live transport with a permanently dead ingress `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬3
- [#149106](https://github.com/openclaw/openclaw/issues/149106) Gateway process froze for ~31 min while the host stayed up, then self-recovered — Windows 11 / 2026.9.1: `host timing gap detected: process was frozen ~1849447ms` `impact:crash-loop` `P0` `issue-rating: 🦪 silver shellfish` 💬3
- [#149312](https://github.com/openclaw/openclaw/issues/149312) [Bug]: memory search can exceed deadline when SQLite reorders KNN join `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#148998](https://github.com/openclaw/openclaw/issues/148998) [Bug]: owned stdio cleanup confirmation can expire before its process owner completes `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬3
- [#149255](https://github.com/openclaw/openclaw/issues/149255) Background image generation marks completed Codex child paused and drops parent result `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#148994](https://github.com/openclaw/openclaw/issues/148994) [Bug]: skills info API-key setup command fails for dotted skill keys `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#149089](https://github.com/openclaw/openclaw/issues/149089) Update failure: finalize:doctor (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬3
- [#149050](https://github.com/openclaw/openclaw/issues/149050) [Bug]: condition-trigger scripts have no MCP runtime — "MCP is not defined" before any tool call `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#148697](https://github.com/openclaw/openclaw/issues/148697) [Bug]: history prompt-cache rewritten on every call during a tool loop (cache read pinned at system prefix, ~4-8x cost) `bug` `regression` `P2` `issue-rating: 🦪 silver shellfish` 💬3
- [#148796](https://github.com/openclaw/openclaw/issues/148796) backup create --verify accepts raw SQLite .db WAL/SHM families `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#149553](https://github.com/openclaw/openclaw/issues/149553) Cron run is recorded as failed by the first tool error even when the turn recovers and completes the work `bug` `bug:behavior` `P2` `impact:other` 💬2
- [#149545](https://github.com/openclaw/openclaw/issues/149545) workboard_complete conflates build-complete with landed-complete — add independently-validated consumer_surface_evidence field 💬2
- [#149530](https://github.com/openclaw/openclaw/issues/149530) Update failure: global-install-failed (2026.9.3) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#149480](https://github.com/openclaw/openclaw/issues/149480) Gateway: SQLite inspection errors should identify the failing operation `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#149313](https://github.com/openclaw/openclaw/issues/149313) [Bug]: Feishu text-retry dedupe aliases distinct topic roots `bug` `no-stale` `bug:behavior` `P2` 💬2
- [#149394](https://github.com/openclaw/openclaw/issues/149394) [Bug]: openclaw status hardcoded 2500ms git budget times out on slow hardware ("Git did not finish within its 2.5s budget") `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#149382](https://github.com/openclaw/openclaw/issues/149382) Update failure: global-install-failed (2026.9.3) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#148874](https://github.com/openclaw/openclaw/issues/148874) Heartbeat queue deferral becomes a cron timeout `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#148942](https://github.com/openclaw/openclaw/issues/148942) Egress proxy CA (24h validity) expires on long-running Gateway, breaking all proxied egress `P1` `impact:security` 💬2
- [#148980](https://github.com/openclaw/openclaw/issues/148980) Profiler main help can stall after JavaScript exit on Node 24.19 `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬2
- [#149019](https://github.com/openclaw/openclaw/issues/149019) [Bug]: Windows restart handoff logs finished success and never issues schtasks Run when the Scheduled Task still reads Running `impact:crash-loop` `P0` `impact:ux-release-blocker` 💬2
- [#149119](https://github.com/openclaw/openclaw/issues/149119) [Bug]: Persistent ACP resume silently replaces conversation after generic initialization failure `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#149302](https://github.com/openclaw/openclaw/issues/149302) [Bug]: Runtime selects disabled context-engine plugin from retained slot `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬2
- [#149305](https://github.com/openclaw/openclaw/issues/149305) [Bug]: Terminal outcome classification depends on observation order between provider failure and queue timeout `bug` `bug:behavior` `P2` `clawsweeper:needs-live-repro` 💬2
- [#149325](https://github.com/openclaw/openclaw/issues/149325) [Bug]: Session restart swaps rich Telegram pending-final for generic notice, content lost from chat `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:linked-pr-open` 💬2
- [#149346](https://github.com/openclaw/openclaw/issues/149346) [Bug]: Async tool acknowledgments cause repeated deferred yields and false blocker reports `bug` `maintainer` `P2` `clawsweeper:needs-live-repro` 💬2
- [#149374](https://github.com/openclaw/openclaw/issues/149374) Stuck-session watchdog abort of a hung model call surfaces an error instead of trying the configured fallback model `P2` `impact:session-state` `impact:auth-provider` 💬2
- [#149290](https://github.com/openclaw/openclaw/issues/149290) [Bug]: iMessage inbound envelope sets `reply_to_id` on every message, not only genuine reply gestures `bug` `regression` `P2` `impact:session-state` 💬2
- [#149215](https://github.com/openclaw/openclaw/issues/149215) [Bug]: dreaming rejects an already-owned primary workspace in explicit multi-agent configurations `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#149259](https://github.com/openclaw/openclaw/issues/149259) Update failure: database-schema-preflight (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#149064](https://github.com/openclaw/openclaw/issues/149064) [Bug]: message read --message-id ignores the id and returns the channel's newest message `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#149249](https://github.com/openclaw/openclaw/issues/149249) Update failure: managed-service-handoff-unsafe-recovery (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#149133](https://github.com/openclaw/openclaw/issues/149133) [Bug]: Heartbeat/event wake after background completion can re-enter an interactive session and leak fallback output to an external route `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#149210](https://github.com/openclaw/openclaw/issues/149210) Update failure: managed-service-preflight (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#149182](https://github.com/openclaw/openclaw/issues/149182) Update failure: unexpected-error (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#149126](https://github.com/openclaw/openclaw/issues/149126) Resolved secret-entry cards remain fully rendered in Android app chat history ("answered elsewhere") `P3` `maturity:stable` `impact:ux-friction` 💬2
- [#149161](https://github.com/openclaw/openclaw/issues/149161) Update failure: requested (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#148878](https://github.com/openclaw/openclaw/issues/148878) [Bug]: sandbox.scope "session" makes gateway startup O(sessions x full table scan) - 1122 sessions = 219s, restart times out `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#149153](https://github.com/openclaw/openclaw/issues/149153) [Bug]: WebChat renders final (non-commentary) assistant reply twice on 2026.9.4 — storage holds exactly one clean copy `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#149024](https://github.com/openclaw/openclaw/issues/149024) [Feature]: Host-wide pre-execution authorization guard and explicit empty allowlist semantics `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬2
- [#149122](https://github.com/openclaw/openclaw/issues/149122) Update failure: unexpected-error (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#149009](https://github.com/openclaw/openclaw/issues/149009) gateway status --deep false-positive service-ownership check on system-scope units; suggests commands that would kill the running service `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#148967](https://github.com/openclaw/openclaw/issues/148967) Steering-skipped tool calls trigger misleading blocked warnings in Slack `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#149034](https://github.com/openclaw/openclaw/issues/149034) Control UI Secrets: long secret names overlap the Access column `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#149037](https://github.com/openclaw/openclaw/issues/149037) infer model run --local still cannot materialize agent-local auth-profile SecretRefs on 2026.9.4 (#141569 fix only covers config-scoped targets) `P2` `impact:auth-provider` 💬2
- [#148850](https://github.com/openclaw/openclaw/issues/148850) Feature: Compact source previews in native chat `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` `impact:ux-friction` 💬2
- [#148991](https://github.com/openclaw/openclaw/issues/148991) Update failure: database-schema-preflight (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#148847](https://github.com/openclaw/openclaw/issues/148847) [Bug]: iOS 27.0 app frequently freezes when returning from background `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `impact:crash-loop` 💬2
- [#148853](https://github.com/openclaw/openclaw/issues/148853) Core infra test shard exceeds its root headroom limit after recent main additions `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#148798](https://github.com/openclaw/openclaw/issues/148798) Update failure: finalize:doctor (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#148784](https://github.com/openclaw/openclaw/issues/148784) Support semantic indexing of subdirectories under memory/ (e.g. memory/research/) `enhancement` `P2` `impact:session-state` 💬1
- [#148760](https://github.com/openclaw/openclaw/issues/148760) Update failure: checkout-failed (2026.9.4) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#148750](https://github.com/openclaw/openclaw/issues/148750) [Bug]: iMessage plugin opens chat.db synchronously on the main thread (startup watermark), so a wedged Messages DB freezes the whole gateway `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬2
- [#148744](https://github.com/openclaw/openclaw/issues/148744) Update failure: database-schema-preflight (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#148693](https://github.com/openclaw/openclaw/issues/148693) [Bug]: Android stays Connected while node events repeatedly fail with PAIRING_CHANGED (2026.9.4) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#149534](https://github.com/openclaw/openclaw/issues/149534) WebUI: profile long tasks during retained conversation switches `P3` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#149361](https://github.com/openclaw/openclaw/issues/149361) WebUI: continuous performance and stability study with real-Gateway evidence `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#149557](https://github.com/openclaw/openclaw/issues/149557) WebUI: chat-to-chat navigation repeats system chrome style synchronization `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#149556](https://github.com/openclaw/openclaw/issues/149556) WebUI: idle favicon updates read background styles on conversation switches `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#149555](https://github.com/openclaw/openclaw/issues/149555) Update failure: database-schema-preflight (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#149551](https://github.com/openclaw/openclaw/issues/149551) [Bug]: ${VAR:-default} substitution silently passes through unresolved instead of erroring/warning `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#149552](https://github.com/openclaw/openclaw/issues/149552) Heartbeat-woken turn text output has a single delivery slot (alert path) — pending alert delivery can be silently dropped when superseded by the next wake; and any non-ack text is pushed as an "alert" `P1` `impact:message-loss` `issue-rating: 🦪 silver shellfish` 💬1
- [#149542](https://github.com/openclaw/openclaw/issues/149542) [Feature]: Streaming chat transport for node-local Ollama (ollama.chat.stream) `P3` `impact:auth-provider` 💬1
- [#149535](https://github.com/openclaw/openclaw/issues/149535) [Bug]: cron add silently ignores a blank --agent, --session-key, or --command-cwd instead of rejecting it `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#149538](https://github.com/openclaw/openclaw/issues/149538) main (1611ca6d): Gateway reaches ready but never serves; every /health probe times out while the event loop is starved (632-agent fleet) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `impact:crash-loop` 💬1
- [#149484](https://github.com/openclaw/openclaw/issues/149484) WebUI: compressed tiny modules can exceed their identity size `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#149512](https://github.com/openclaw/openclaw/issues/149512) [Bug]: pluginToolDenylist skips plugins at construction time with zero diagnostics — a scope-level deny: ["*"] silently voids that scope's entire tools.allow, and nothing is logged at any level `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#149502](https://github.com/openclaw/openclaw/issues/149502) Session with user auth-profile pin is permanently unrunnable after OAuth re-auth mints a new profile id `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#149471](https://github.com/openclaw/openclaw/issues/149471) LiteLLM model discovery requests /v1/v1/models and fails when baseUrl ends in /v1 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#149457](https://github.com/openclaw/openclaw/issues/149457) [Bug]: Mattermost reaction removal reports failure when the server's 200 response body cannot be read `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#149486](https://github.com/openclaw/openclaw/issues/149486) Retire the Feishu comment-link test adapter `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#149448](https://github.com/openclaw/openclaw/issues/149448) [Bug]: ลบทั้งหมด `bug` `regression` `P3` 💬1
- [#149445](https://github.com/openclaw/openclaw/issues/149445) [Bug]: Shared sanitizer redacts well-formed tool-call arguments and final assistantTexts as "[Malformed diagnostic JSON redacted]" (gemini-3.8-flash, 2026.9.1) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#149431](https://github.com/openclaw/openclaw/issues/149431) [Bug]: Codex Computer Use hard-codes legacy list_apps readiness probe `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#149436](https://github.com/openclaw/openclaw/issues/149436) [Feature]: Add narrow `operator.session.reset` scope for non-admin role self-service `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#149440](https://github.com/openclaw/openclaw/issues/149440) openclaw uninstall --dry-run --all `P3` 💬1
- [#149439](https://github.com/openclaw/openclaw/issues/149439) Issue on docs `P3` 💬1
- [#149429](https://github.com/openclaw/openclaw/issues/149429) Browser control blocked: "local listener owner could not be verified" (WSL2 Gateway, Linux-side, locks consistent) `P2` `impact:security` 💬1
- [#149425](https://github.com/openclaw/openclaw/issues/149425) Long Responses sessions can fail with premature context overflow `maintainer` `P1` `clawsweeper:source-repro` `impact:session-state` 💬1
- [#149406](https://github.com/openclaw/openclaw/issues/149406) [Bug]: sessions_spawn children receive only mcp__openclaw__*; every third-party MCP server is absent from the child tool registry while the parent session has them `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#149401](https://github.com/openclaw/openclaw/issues/149401) Windows node: allow unsandboxed exec mode for trusted nodes `P2` `impact:security` 💬1
- [#149400](https://github.com/openclaw/openclaw/issues/149400) Workboard: workboard_complete rejects proofId: "" sent by OpenAI strict tool schemas, so GPT workers can never complete a card `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#149395](https://github.com/openclaw/openclaw/issues/149395) [Bug]: doctor gateway-restart readiness poll (10s) still under-budgets very slow hardware — #142452 fix undershoots `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#149391](https://github.com/openclaw/openclaw/issues/149391) Duplicate/phantom "workspace" project directory in Claude Code sidebar caused by wrong cwd in internal openclaw reserved agent `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#149376](https://github.com/openclaw/openclaw/issues/149376) [Docs Bug]: after_tool_call event payload is not documented on the tool policy page `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#149263](https://github.com/openclaw/openclaw/issues/149263) Startup/doctor deadlock: empty legacy session index with a deferred plugin owner that has no database `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` `impact:crash-loop` 💬1
- [#149367](https://github.com/openclaw/openclaw/issues/149367) Gateway exits on any transient network error during channel startup (unhandled fetch failed from Telegram/WhatsApp) 💬1
- [#149363](https://github.com/openclaw/openclaw/issues/149363) Clarify dashboard widget size presets and saved width `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#149323](https://github.com/openclaw/openclaw/issues/149323) Make canonical session validation incremental across database reopens `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#149352](https://github.com/openclaw/openclaw/issues/149352) [Bug]: `openclaw message search` requires --guild-id for Microsoft Teams and ignores --limit `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#149306](https://github.com/openclaw/openclaw/issues/149306) Control UI: polish inline annotations (user bubble contrast, oversized hovercard, comment editor) `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#149341](https://github.com/openclaw/openclaw/issues/149341) [Bug]: sessions.list reports the agent default model without marking it as a fallback `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#149332](https://github.com/openclaw/openclaw/issues/149332) Bug: Bedrock rejects tool-returned images on GPT-5.6 Sol `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `clawsweeper:needs-live-repro` 💬1
- [#149326](https://github.com/openclaw/openclaw/issues/149326) Retire obsolete session-memory file-recovery test policy `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#149324](https://github.com/openclaw/openclaw/issues/149324) [Feature]: Reuse verified cloud-node runtime archives after Gateway restart `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#149293](https://github.com/openclaw/openclaw/issues/149293) Control UI: Task progress card reopens automatically after collapsing on history scroll `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#149303](https://github.com/openclaw/openclaw/issues/149303) [Bug]: MSTeams inbound debounce merges replies across distinct channel thread roots `bug` `bug:behavior` `P2` `clawsweeper:source-repro` 💬1
- [#149271](https://github.com/openclaw/openclaw/issues/149271) [Bug]: USER.MD instruction to agents is redundant to similar instructions in AGENTS.md `bug` `no-stale` `bug:behavior` `P3` 💬1
- [#149209](https://github.com/openclaw/openclaw/issues/149209) Worker result checks read unrelated pending sessions `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#149253](https://github.com/openclaw/openclaw/issues/149253) [Bug]: Linux companion spawns three openclaw CLI processes every watchdog round while idle (~31% of one core) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#149248](https://github.com/openclaw/openclaw/issues/149248) [Bug]: Dashboards list preview shows "widget host capabilities unavailable" for live-status widgets `P2` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` `impact:ux-friction` 💬1
- [#149239](https://github.com/openclaw/openclaw/issues/149239) [Bug]: `session placement turn settlement is closed` abort is fed into the model-fallback loop (every candidate "fails" in <20 ms) and the displacing inbound message never gets its own run (2026.9.4) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#149221](https://github.com/openclaw/openclaw/issues/149221) [Bug]: Duplicate assistant reply / Control UI double-render caused by "no active tool authority snapshot" race `bug` `P2` `clawsweeper:needs-info` `impact:session-state` 💬1
- [#149195](https://github.com/openclaw/openclaw/issues/149195) [Feature]: skipping ci/cd for some commits `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#149185](https://github.com/openclaw/openclaw/issues/149185) [Feature]: Improve Browser GPT-Live startup latency (3.18s measured to listening) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#149065](https://github.com/openclaw/openclaw/issues/149065) [Bug]: stuck run has no cancellation handle or liveness events — 30-min stale reaper is the only recovery `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#149006](https://github.com/openclaw/openclaw/issues/149006) [Bug]: Failed iOS beta uploads cannot be inspected through protected release CI `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#149172](https://github.com/openclaw/openclaw/issues/149172) Compaction instruction tests bypass the summary entry point `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#149171](https://github.com/openclaw/openclaw/issues/149171) Feature request: public session-bound executor for projected MCP tools `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#148909](https://github.com/openclaw/openclaw/issues/148909) [Bug]: QA image roundtrip mistakes capped shell text for a missing transcript `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#149139](https://github.com/openclaw/openclaw/issues/149139) [Bug]: MiniMax OAuth chat /login keeps polling and obtains tokens after the sender's login authority is revoked `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#149115](https://github.com/openclaw/openclaw/issues/149115) [Bug]:Non-main agents can't handle framework control commands via qqbot channel `bug` `regression` `P1` `impact:message-loss` 💬1
- [#149081](https://github.com/openclaw/openclaw/issues/149081) [Bug]: SSH/remote-shell sandbox upload treats a signal-killed transfer as success, publishing a partial workspace `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#148983](https://github.com/openclaw/openclaw/issues/148983) Successful Codex catalog waits lack phase timing `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#149091](https://github.com/openclaw/openclaw/issues/149091) [Feature]: Edit previously sent Google Chat text messages `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#148801](https://github.com/openclaw/openclaw/issues/148801) Avoid roster and template materialization for database presence checks `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#148975](https://github.com/openclaw/openclaw/issues/148975) [Bug]: Docker tooling changes trigger full-suite CI fallback `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#148973](https://github.com/openclaw/openclaw/issues/148973) Regression: Copilot manifest contract expectations lag credential-only metadata `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#148978](https://github.com/openclaw/openclaw/issues/148978) [Bug]: active-memory recall always skipped as destination-not-allowed — before_prompt_build hook ctx missing agent identity (agentId/sessionKey) `P2` `impact:session-state` `issue-rating: 🦪 silver shellfish` 💬1
- [#148945](https://github.com/openclaw/openclaw/issues/148945) [Bug]: Changed tooling tests are omitted when consumers are selected `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#148957](https://github.com/openclaw/openclaw/issues/148957) [Bug]: openai-completions omits session-affinity headers when sendSessionAffinityHeaders is enabled `bug` `bug:behavior` `P2` `clawsweeper:source-repro` 💬1
- [#148936](https://github.com/openclaw/openclaw/issues/148936) [Bug]: status shows stale/incorrect task "issues" count that disagrees with tasks audit and tasks maintenance `bug` `regression` `P2` `impact:ux-friction` 💬1
- [#148935](https://github.com/openclaw/openclaw/issues/148935) Retire private Doctor heartbeat-repair test hooks `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#148903](https://github.com/openclaw/openclaw/issues/148903) [Feature]: Query automation run history across jobs from the CLI `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#148887](https://github.com/openclaw/openclaw/issues/148887) Control UI renders pre-tool-call commentary twice when the run is cleared before the assistant row persists `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `clawsweeper:needs-live-repro` 💬1
- [#148884](https://github.com/openclaw/openclaw/issues/148884) [Bug]: show_widget treats after="placeholder" as a real dashboard anchor `bug` `bug:behavior` `P2` `impact:ux-friction` 💬1
- [#148869](https://github.com/openclaw/openclaw/issues/148869) diagnostics-otel: infra events (phase / liveness) become independent root traces `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#148862](https://github.com/openclaw/openclaw/issues/148862) subagent thinking precedence: parent standing subagents.thinking overrides subagent's own configured level (rank 2 > rank 3) `P2` `impact:session-state` 💬1
- [#148829](https://github.com/openclaw/openclaw/issues/148829) [Bug]: Explicit auth order still round-robins healthy accounts after compaction `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#148817](https://github.com/openclaw/openclaw/issues/148817) Per-provider defaults for provider-coupled params (thinking/reasoning) — system-wide default is invalid across a multi-provider fleet `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#148797](https://github.com/openclaw/openclaw/issues/148797) DeepSeek (openai-completions) lacks usage.contextUsage → provider context boundary unresolved → route=compact_only `P2` `impact:session-state` 💬1
- [#148789](https://github.com/openclaw/openclaw/issues/148789) Model fallback chain exhausts every candidate on a harness-level session failure and misattributes it to the last fallback model (2026.9.4) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#148747](https://github.com/openclaw/openclaw/issues/148747) Managed worktree cleanup forces deletion and can remove an uncaptured branch `maintainer` `clawsweeper:source-repro` `impact:data-loss` `P0` 💬1
- [#148728](https://github.com/openclaw/openclaw/issues/148728) Slow Codex catalog failures omit control phase and error category `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#148737](https://github.com/openclaw/openclaw/issues/148737) iOS beta release fails after processing during internal-group assignment `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#148766](https://github.com/openclaw/openclaw/issues/148766) [Bug]: Context-overflow recovery message recommends `/compact` and `/new`, but `preserveSessionMapping=true` makes both dead ends — user follows the instructions in a loop `impact:session-state` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#148764](https://github.com/openclaw/openclaw/issues/148764) [Feature]: Identity-scoped secrets in the shared store (--scope me) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#148720](https://github.com/openclaw/openclaw/issues/148720) fix(ci): skipped duplicate blocks native preparation after successful checks `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#148731](https://github.com/openclaw/openclaw/issues/148731) [Bug]: One queued follow-up globally disables steering for every newer message in the session `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#148730](https://github.com/openclaw/openclaw/issues/148730) [Bug]: Discord durable ingress holds the channel lane after deferral, blocking live corrections before steering `P1` `clawsweeper:source-repro` `impact:message-loss` `issue-rating: 🦞 diamond lobster` 💬1
- [#148727](https://github.com/openclaw/openclaw/issues/148727) Qualify a maintained live fixture for ClawHub skill-install E2E `bug` `maintainer` `P2` `issue-rating: 🦪 silver shellfish` 💬1
- [#148726](https://github.com/openclaw/openclaw/issues/148726) [Bug]: session observer disables itself globally after per-session model-call timeouts (2026.9.4) — should bound input or quarantine the failing session `P2` `impact:ux-friction` 💬1
- [#148723](https://github.com/openclaw/openclaw/issues/148723) [Bug]: Home session repeatedly appears under Claude Code while runtime reports OpenAI Codex `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#148708](https://github.com/openclaw/openclaw/issues/148708) [Bug]: SearXNG HTTPS searches fail with mixed private IPv4 and globally scoped IPv6 DNS answers `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#148701](https://github.com/openclaw/openclaw/issues/148701) [Bug]: cloud discovery blocks ready nodes in New Session `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#148685](https://github.com/openclaw/openclaw/issues/148685) Update failure: plugin-target-unavailable (2026.9.3) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#149200](https://github.com/openclaw/openclaw/issues/149200) [Feature]: Recipe-scoped persistent runtime adapter with protected licensing attachment

#### 🔒 Closed Issues
- [#145152](https://github.com/openclaw/openclaw/issues/145152) Stuck-session recovery reports a force-clear as an abort, names no run/owner identity, and releases the reply lane by session id (2026.7.1)
- [#115367](https://github.com/openclaw/openclaw/issues/115367) Provider-owned read gate requires `origin: bundled`, but every privileged chat surface (slack/discord/matrix/msteams/feishu) now ships as an external plugin → reads locked to current conversation
- [#148866](https://github.com/openclaw/openclaw/issues/148866) [Bug]: Gateway permanent restart loop when gateway.bind=lan (2026.9.1 + 2026.9.4, Ubuntu/systemd)
- [#98084](https://github.com/openclaw/openclaw/issues/98084) [MiniMax] M3 native video input support with timestamp-scaling metadata hint (reference branch only)
- [#60602](https://github.com/openclaw/openclaw/issues/60602) Feature Request: Per-Agent Bedrock requestMetadata Injection for Multi-Agent Cost Attribution
- [#148614](https://github.com/openclaw/openclaw/issues/148614) Update failure: runtime-verification-failed (2026.9.3)
- [#146391](https://github.com/openclaw/openclaw/issues/146391) [Bug]: Fresh Groq setup cannot resolve manifest model from an external plugin
- [#123326](https://github.com/openclaw/openclaw/issues/123326) [Bug]: Explicit multi-agent Codex migration crash-loops Gateway startup
- [#92870](https://github.com/openclaw/openclaw/issues/92870) System event text leaked into user message attribution during compaction
- [#126781](https://github.com/openclaw/openclaw/issues/126781) [Feature]: Detached managed Lobster runs after tool return
- [#148896](https://github.com/openclaw/openclaw/issues/148896) triage --run reports repaired for saved global-install-failed solely because Doctor lint passes
- [#145099](https://github.com/openclaw/openclaw/issues/145099) [Bug]: macOS sidebar browser obscures the tab-selector dropdown
- [#148974](https://github.com/openclaw/openclaw/issues/148974) [Bug]: 2026.9.4 Doctor cannot migrate legacy Skill Workshop backup with old workspace path
- [#148680](https://github.com/openclaw/openclaw/issues/148680) Control UI TTS supplement does not merge with source message during live updates
- [#148584](https://github.com/openclaw/openclaw/issues/148584) [Bug]: Plugin-owned CLI backends skipped at Gateway startup when models.providers.<id>.api is a core built-in (Unknown CLI backend)
- [#148387](https://github.com/openclaw/openclaw/issues/148387) Fresh install auto-enables the codex plugin and widens plugins.allow from a machine-written config default
- [#148886](https://github.com/openclaw/openclaw/issues/148886) [Bug]: sessions_spawn with visible: true marks the config-resolved model as a user override, disabling fallbacks for the child
- [#149476](https://github.com/openclaw/openclaw/issues/149476) [Feature]: Add Prism as an official model provider
- [#138584](https://github.com/openclaw/openclaw/issues/138584) Web UI chat blocked 100% by verified-inference owner gate: probe succeeds but credential fingerprint can never be re-derived (Windows, v2026.9.1)
- [#149101](https://github.com/openclaw/openclaw/issues/149101) [Bug]: skills info marks unavailable alternatives as satisfied
- [#149232](https://github.com/openclaw/openclaw/issues/149232) main: doctor --fix exits 0 but leaves configured agentDir databases on schema 19, and the Gateway then fails startup after ~13 min
- [#147582](https://github.com/openclaw/openclaw/issues/147582) Update failure: database-schema-preflight (2026.9.3)
- [#147016](https://github.com/openclaw/openclaw/issues/147016) [Bug]: message send waits ~30s after successful Telegram gateway response
- [#145994](https://github.com/openclaw/openclaw/issues/145994) Codex session catalog routes supplemental managed-agent homes through native user auth
- [#89131](https://github.com/openclaw/openclaw/issues/89131) [Feature]: Add realtime video frame transport for provider and gateway relay sessions
- [#119682](https://github.com/openclaw/openclaw/issues/119682) [Bug]: Codex native hook relay is turn-scoped — cross-turn wait_agent and long-running worker pods fail with "native hook relay not found"
- [#143242](https://github.com/openclaw/openclaw/issues/143242) Runtime-only event turns append per-turn bytes into the submitted system prompt (prompt-cache churn)
- [#148601](https://github.com/openclaw/openclaw/issues/148601) [Bug]: doctor --fix / gateway status broken on Windows: scheduled-task runtime probe spawns powershell.exe with windowsHide:true, which makes Windows PowerShell 5.1 exit 2 with empty stdout
- [#148620](https://github.com/openclaw/openclaw/issues/148620) Exec-approvals auto-approval breaks permanently after a gateway restart — exec-approvals.sock is never recreated
- [#145201](https://github.com/openclaw/openclaw/issues/145201) [Bug] telegram: richMessages vs older self-hosted Bot API server (apiRoot) — every send 400s "rich message must be non-empty", total channel blackout
- [#149018](https://github.com/openclaw/openclaw/issues/149018) Race condition: "Reply operation has no active tool authority snapshot" surfaces as generic error, wastes full model-fallback cascade
- [#143381](https://github.com/openclaw/openclaw/issues/143381) Heartbeat runs never retire their bundle MCP runtime (ephemeral runtimes treated as persistent)
- [#141032](https://github.com/openclaw/openclaw/issues/141032) Scheduled run aborted by model stall watchdog reports completionStatus=succeeded and announces fallback text (2026.8.2)
- [#149255](https://github.com/openclaw/openclaw/issues/149255) Background image generation marks completed Codex child paused and drops parent result
- [#148994](https://github.com/openclaw/openclaw/issues/148994) [Bug]: skills info API-key setup command fails for dotted skill keys
- [#88570](https://github.com/openclaw/openclaw/issues/88570) zh-CN localization coverage is still severely incomplete despite PR #18473 being merged
- [#138663](https://github.com/openclaw/openclaw/issues/138663) [Bug]: Nested/stacked scrollbars (up to 3 deep) in expanded tool-call activity (Control UI)
- [#145394](https://github.com/openclaw/openclaw/issues/145394) Cron timer runs a write transaction on the shared state database per agent per tick, before the session reaper's throttle (632-agent fleet, 2026.9.3 and 2026.9.4)
- [#147502](https://github.com/openclaw/openclaw/issues/147502) Windows: path redaction corrupts diagnostic messages containing `\\?\` extended-length paths (e.g. update canary mkdir errors)
- [#145951](https://github.com/openclaw/openclaw/issues/145951) active-memory: the recall sub-run prompt has no observer framing, so directives inside the conversation read as instructions to the recall agent
- [#139708](https://github.com/openclaw/openclaw/issues/139708) [Bug]: Workboard stylesheet fails in macOS app over loopback HTTP
- [#128918](https://github.com/openclaw/openclaw/issues/128918) [Bug]: ClickClack queued messages are silently dropped at account shutdown and become permanently unreplayable
- [#148498](https://github.com/openclaw/openclaw/issues/148498) [Bug]: show_widget misclassifies HTML payload when report is an empty object
- [#149553](https://github.com/openclaw/openclaw/issues/149553) Cron run is recorded as failed by the first tool error even when the turn recovers and completes the work
- [#144934](https://github.com/openclaw/openclaw/issues/144934) Update failure: post-update-plugins (2026.9.4)
- [#149545](https://github.com/openclaw/openclaw/issues/149545) workboard_complete conflates build-complete with landed-complete — add independently-validated consumer_surface_evidence field
- [#137467](https://github.com/openclaw/openclaw/issues/137467) Parent session remains paused after sibling subagents complete
- [#148874](https://github.com/openclaw/openclaw/issues/148874) Heartbeat queue deferral becomes a cron timeout
- [#149019](https://github.com/openclaw/openclaw/issues/149019) [Bug]: Windows restart handoff logs finished success and never issues schtasks Run when the Scheduled Task still reads Running
- [#149374](https://github.com/openclaw/openclaw/issues/149374) Stuck-session watchdog abort of a hung model call surfaces an error instead of trying the configured fallback model
- [#138555](https://github.com/openclaw/openclaw/issues/138555) [Bug]: requester-settle truncates child completion to 512 chars before parent processing
- [#128010](https://github.com/openclaw/openclaw/issues/128010) backup: Git backup --all prunes agent scopes whose registry schema version lags the running build after an upgrade
- [#127538](https://github.com/openclaw/openclaw/issues/127538) Model-call diagnostics report provider errors, aborts, and truncated EOF as completed
- [#140671](https://github.com/openclaw/openclaw/issues/140671) [Bug]: stuck-session watchdog aborts long-running silent MCP tool calls at 360s — no exemption for active tool execution, threshold not configurable
- [#149064](https://github.com/openclaw/openclaw/issues/149064) [Bug]: message read --message-id ignores the id and returns the channel's newest message
- [#149126](https://github.com/openclaw/openclaw/issues/149126) Resolved secret-entry cards remain fully rendered in Android app chat history ("answered elsewhere")
- [#127518](https://github.com/openclaw/openclaw/issues/127518) [Bug]: Terminal precheck-overflow abort is silent on stable v2026.7.1 (regression of #85712, fix not in stable channel)
- [#127694](https://github.com/openclaw/openclaw/issues/127694) [Bug]: scheduler queue freezes for ~90 minutes after manual `run force`, then batch-flushes overdue jobs
- [#148878](https://github.com/openclaw/openclaw/issues/148878) [Bug]: sandbox.scope "session" makes gateway startup O(sessions x full table scan) - 1122 sessions = 219s, restart times out
- [#149037](https://github.com/openclaw/openclaw/issues/149037) infer model run --local still cannot materialize agent-local auth-profile SecretRefs on 2026.9.4 (#141569 fix only covers config-scoped targets)
- [#148850](https://github.com/openclaw/openclaw/issues/148850) Feature: Compact source previews in native chat
- [#148853](https://github.com/openclaw/openclaw/issues/148853) Core infra test shard exceeds its root headroom limit after recent main additions
- [#148595](https://github.com/openclaw/openclaw/issues/148595) [Bug]: Installed plugin index fails manifest hashing with symlinked configured plugin roots
- [#148784](https://github.com/openclaw/openclaw/issues/148784) Support semantic indexing of subdirectories under memory/ (e.g. memory/research/)
- [#149542](https://github.com/openclaw/openclaw/issues/149542) [Feature]: Streaming chat transport for node-local Ollama (ollama.chat.stream)
- [#147696](https://github.com/openclaw/openclaw/issues/147696) [Bug]: Chat history boundary still says "Show earlier" while earlier messages are loading
- [#149448](https://github.com/openclaw/openclaw/issues/149448) [Bug]: ลบทั้งหมด
- [#149440](https://github.com/openclaw/openclaw/issues/149440) openclaw uninstall --dry-run --all
- [#149439](https://github.com/openclaw/openclaw/issues/149439) Issue on docs
- [#148512](https://github.com/openclaw/openclaw/issues/148512) Control UI: transcript images and attachment cards sit flush against the message text
- [#142673](https://github.com/openclaw/openclaw/issues/142673) [Regression]: Root-only pin policy prevents pinning ordinary Home-parented sessions
- [#149263](https://github.com/openclaw/openclaw/issues/149263) Startup/doctor deadlock: empty legacy session index with a deferred plugin owner that has no database
- [#134154](https://github.com/openclaw/openclaw/issues/134154) [Bug]: TUI shows the default session while restoring the remembered session
- [#149367](https://github.com/openclaw/openclaw/issues/149367) Gateway exits on any transient network error during channel startup (unhandled fetch failed from Telegram/WhatsApp)
- [#123215](https://github.com/openclaw/openclaw/issues/123215) [Feature]: reintroduce compat.supportsResponsesContinuation opt-in for custom OpenAI-Responses-compatible endpoints
- [#142189](https://github.com/openclaw/openclaw/issues/142189) [Bug]: Parallel-task card implies the parent turn is complete while it is still running
- [#149209](https://github.com/openclaw/openclaw/issues/149209) Worker result checks read unrelated pending sessions
- [#139889](https://github.com/openclaw/openclaw/issues/139889) device.pair.approve rotation drops the shared-gateway-auth issuer, stranding browser device tokens
- [#144837](https://github.com/openclaw/openclaw/issues/144837) Webchat console shows configured model during response, not the active model
- [#120507](https://github.com/openclaw/openclaw/issues/120507) claude-cli backend hangs indefinitely (no output, no error) when a long-lived stream connection drops mid model_call
- [#147419](https://github.com/openclaw/openclaw/issues/147419) [Bug]: Chat position rail moves when the Task progress card expands or collapses
- [#143842](https://github.com/openclaw/openclaw/issues/143842) workboard dispatch stamps every ready card on every tick even when it starts no worker (metadata budget churn, evidence loss)
- [#149006](https://github.com/openclaw/openclaw/issues/149006) [Bug]: Failed iOS beta uploads cannot be inspected through protected release CI
- [#148909](https://github.com/openclaw/openclaw/issues/148909) [Bug]: QA image roundtrip mistakes capped shell text for a missing transcript
- [#148140](https://github.com/openclaw/openclaw/issues/148140) [Bug]: QA web_open can outlive cancellation and lose browser cleanup ownership
- [#147955](https://github.com/openclaw/openclaw/issues/147955) [Feature]: Scoped, resumable session inventory for agents
- [#148983](https://github.com/openclaw/openclaw/issues/148983) Successful Codex catalog waits lack phase timing
- [#146007](https://github.com/openclaw/openclaw/issues/146007) [Bug]: Multi-line /steer (/tell) drops every line after the first
- [#144514](https://github.com/openclaw/openclaw/issues/144514) Exec tool timeout (~900s) aborts the whole run as OPENCLAW_DIRECT_ABORT instead of returning a tool error
- [#148801](https://github.com/openclaw/openclaw/issues/148801) Avoid roster and template materialization for database presence checks
- [#148945](https://github.com/openclaw/openclaw/issues/148945) [Bug]: Changed tooling tests are omitted when consumers are selected
- [#148936](https://github.com/openclaw/openclaw/issues/148936) [Bug]: status shows stale/incorrect task "issues" count that disagrees with tasks audit and tasks maintenance
- [#148884](https://github.com/openclaw/openclaw/issues/148884) [Bug]: show_widget treats after="placeholder" as a real dashboard anchor
- [#146088](https://github.com/openclaw/openclaw/issues/146088) [Bug]: The most recent Linux AppImage does not ship with the correct versions of libs needed to run
- [#148862](https://github.com/openclaw/openclaw/issues/148862) subagent thinking precedence: parent standing subagents.thinking overrides subagent's own configured level (rank 2 > rank 3)
- [#148409](https://github.com/openclaw/openclaw/issues/148409) Feature: Compact source previews for researched chat answers
- [#114198](https://github.com/openclaw/openclaw/issues/114198) [Bug]: ACP cancellation during pre-active setup can still start unwanted turns
- [#146371](https://github.com/openclaw/openclaw/issues/146371) Transcript counts materialize unused marker positions and metadata
- [#148177](https://github.com/openclaw/openclaw/issues/148177) Avoid cumulative key-set copies while assembling plugin setup registrations
- [#148797](https://github.com/openclaw/openclaw/issues/148797) DeepSeek (openai-completions) lacks usage.contextUsage → provider context boundary unresolved → route=compact_only
- [#148747](https://github.com/openclaw/openclaw/issues/148747) Managed worktree cleanup forces deletion and can remove an uncaptured branch
- [#148728](https://github.com/openclaw/openclaw/issues/148728) Slow Codex catalog failures omit control phase and error category
- [#148737](https://github.com/openclaw/openclaw/issues/148737) iOS beta release fails after processing during internal-group assignment
- [#127535](https://github.com/openclaw/openclaw/issues/127535) Mattermost reaction add reports failure after an accepted 201 when its unused body read fails
- [#146417](https://github.com/openclaw/openclaw/issues/146417) [Bug]: Device-required probe short-circuit cache is unbounded
- [#148160](https://github.com/openclaw/openclaw/issues/148160) Release fallback rejects reachable commits with large ref enumeration
- [#148720](https://github.com/openclaw/openclaw/issues/148720) fix(ci): skipped duplicate blocks native preparation after successful checks
- [#148726](https://github.com/openclaw/openclaw/issues/148726) [Bug]: session observer disables itself globally after per-session model-call timeouts (2026.9.4) — should bound input or quarantine the failing session
- [#148131](https://github.com/openclaw/openclaw/issues/148131) Env SecretRef on a bracket-quoted config key (e.g. models.providers["local.service"].apiKey) is skipped by the command secret gate
- [#144151](https://github.com/openclaw/openclaw/issues/144151) TTS stream cleaner mishandles a chunk split between the two opening brackets, leaking hidden speech text or swallowing the rest of the reply
- [#138981](https://github.com/openclaw/openclaw/issues/138981) [Bug]: Windows Job-supervised gateway exits on config restart without a successor after startup is repaired (2026.9.1)
- [#148685](https://github.com/openclaw/openclaw/issues/148685) Update failure: plugin-target-unavailable (2026.9.3)
- [#148342](https://github.com/openclaw/openclaw/issues/148342) [Bug]: Remote CDP checks pass but tab opening fails with Docker sidecar localhost advertisement (2026.9.3)
- [#148629](https://github.com/openclaw/openclaw/issues/148629) Slow Codex session catalog logs do not identify the waiting phase
- [#148454](https://github.com/openclaw/openclaw/issues/148454) Managed upgrade self-conflicts when legacy parent retains lease during migrated finalization
- [#149200](https://github.com/openclaw/openclaw/issues/149200) [Feature]: Recipe-scoped persistent runtime adapter with protected licensing attachment
- [#148003](https://github.com/openclaw/openclaw/issues/148003) [Feature]: capture Gateway CPU profiles without a debugger listener

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 245,871 · **Open issues:** 43,561 · **Last push:** <1h ago

On September 16, 2026, there were no new releases or merged pull requests for Hermes Agent, indicating a routine maintenance day. Notably, a critical bug was identified regarding the WhatsApp bridge, where a vulnerability in the `body-parser` override pins a susceptible version, raising 3 moderate npm advisories. Other important new issues include desktop SSH mode usability challenges with zsh, a FATAL error due to a premature SIGKILL during startup, and complications with the `_discard_lockfile_churn` function, which causes desynchronization of specifications. Additionally, a feature request for named sub-agent role definitions for the `delegate_task` was introduced.

#### 🐛 New Issues
- [#111761](https://github.com/NousResearch/hermes-agent/issues/111761) [Bug]: reasoning is promoted into assistant content on reasoning-only clean stop — pollutes history, not just display `type/bug` `comp/agent` `provider/deepseek` `P1` 💬5
- [#111949](https://github.com/NousResearch/hermes-agent/issues/111949) [Bug]: Desktop SSH mode unusable when the remote account login shell is zsh — probe watchdog runs a bare `set -m` (fatal in non-interactive zsh), reports an up-to-date remote as unsupported `type/bug` `backend/ssh` `P2` `comp/desktop` 💬4
- [#112382](https://github.com/NousResearch/hermes-agent/issues/112382) [Bug]: WhatsApp bridge `body-parser` override pins a vulnerable version (1.20.6) — 3 moderate npm advisories survive, including a transitive qs CVE 💬3
- [#112378](https://github.com/NousResearch/hermes-agent/issues/112378) [Bug]: `_discard_lockfile_churn` reverts the ROOT package-lock.json when only a workspace manifest is dirty — desyncing specs from the lock and making `hermes update` Node-deps refresh fail forever (npm 10 `edgesOut` crash) 💬2
- [#111912](https://github.com/NousResearch/hermes-agent/issues/111912) [Bug]: FATAL `DeletedWalGenerationError` on startup due to premature SIGKILL during update `type/bug` `comp/cli` `P2` `sweeper:risk-session-state` 💬1
- [#112358](https://github.com/NousResearch/hermes-agent/issues/112358) MoA aggregator: prompt cache hits stay pinned to the system prompt; growing tool history re-billed every call (~$147 in 49 min) 💬1
- [#112387](https://github.com/NousResearch/hermes-agent/issues/112387) [Bug]: stall backoff suppresses the same-turn compression fallback retry — turn ends with "Context compression timed out" although the fallback route works 💬1
- [#112369](https://github.com/NousResearch/hermes-agent/issues/112369) [Feature]: Named sub-agent role definitions for delegate_task (unifies #111545, #80995, #41554, #35688) 💬1
- [#112473](https://github.com/NousResearch/hermes-agent/issues/112473) [Bug]: Oversize request rejections reported as HTTP 400 bypass the image-shrink recovery (NVIDIA NIM, Alibaba DashScope, Nebius Token Factory)
- [#112466](https://github.com/NousResearch/hermes-agent/issues/112466) `_restarted_units_gone()` ends the 120s fleet settle poll on a scope-mismatched unit name (user unit read as inactive in the system scope)
- [#112465](https://github.com/NousResearch/hermes-agent/issues/112465) hermes update writes no receipt on v0.21.3 even with the `hermes_cli.update_` purge protection in place
- [#112458](https://github.com/NousResearch/hermes-agent/issues/112458) [Bug]: Desktop model-switch confirmation offers no way to decline — a single "Confirm" button and an ✕
- [#112459](https://github.com/NousResearch/hermes-agent/issues/112459) [Bug]: shutdown forensics writes live credentials from child argv to disk
- [#112456](https://github.com/NousResearch/hermes-agent/issues/112456) SSE body cap misses event boundaries split across chunks (and incomplete terminator set)
- [#112451](https://github.com/NousResearch/hermes-agent/issues/112451) [Feature]: Secure host-side Bitwarden authentication for NousPortal-hosted instances
- [#112450](https://github.com/NousResearch/hermes-agent/issues/112450) [Bug]: A failed unified-package desktop-half copy leaves a marker-less folder that permanently blocks re-materialization (stuck on "copying…")
- [#112445](https://github.com/NousResearch/hermes-agent/issues/112445) An MCP server whose first connect fails is never retried in the gateway
- [#112441](https://github.com/NousResearch/hermes-agent/issues/112441) self_repo_guard misses heredoc bodies piped to a shell (cat <<EOF | bash)
- [#112437](https://github.com/NousResearch/hermes-agent/issues/112437) [Bug]: hermes update prints 'Exception ignored in atexit callback' — browser atexit hooks fresh-import against a half-updated tree
- [#112430](https://github.com/NousResearch/hermes-agent/issues/112430) [Bug]: Catastrophic outage — unguarded PermissionError in _find_hermes_md() kills terminal, TUI, dashboard and gateway messaging at once; hermes doctor --fix can't repair it
- [#112426](https://github.com/NousResearch/hermes-agent/issues/112426) Cron: no way for an agent run to report failure — a delegated child that fails is recorded as a successful run
- [#112425](https://github.com/NousResearch/hermes-agent/issues/112425) Windows: kanban worktree cleanup empties the worktree but cannot remove it when the worker's cwd is inside it
- [#112424](https://github.com/NousResearch/hermes-agent/issues/112424) `search_files` with an empty or whitespace `path` returns "Path not found" instead of the documented default `.`
- [#112423](https://github.com/NousResearch/hermes-agent/issues/112423) [Wave] Landed but still open — stale issues with a merged fix in the timeline, coverage-verified
- [#112420](https://github.com/NousResearch/hermes-agent/issues/112420) [Bug]: Compaction stall ("made no progress") continues without compression — oversized context re-triggers compaction every turn; drifted system prompt rebuilt repeatedly
- [#112419](https://github.com/NousResearch/hermes-agent/issues/112419) [Bug]: Empty partial-stream stub (0 chars recovered) lets the turn continue as if nothing happened — model repeats the lost action
- [#112417](https://github.com/NousResearch/hermes-agent/issues/112417) [Wave] Stalled-PR orphan inventory: carrier-cell feed
- [#112412](https://github.com/NousResearch/hermes-agent/issues/112412) [Wave] P4 re-triage: 68 parked issues, one disposition each
- [#112410](https://github.com/NousResearch/hermes-agent/issues/112410) [Wave] Stalled-PR orphan inventory: carrier-cell feed
- [#112408](https://github.com/NousResearch/hermes-agent/issues/112408) External steer messages are not rendered in attached TUI transcript
- [#112406](https://github.com/NousResearch/hermes-agent/issues/112406) Desktop sidebar: project-grouped view caps at 3 sessions with no scroll or 'show more' affordance

#### 🔒 Closed Issues
- [#90687](https://github.com/NousResearch/hermes-agent/issues/90687) [Bug]: ERROR codes on all devices - Installation
- [#111272](https://github.com/NousResearch/hermes-agent/issues/111272) bug(update): successful update + gateway restart leaves `fleet_restart_pending` marker — every CLI startup and `hermes doctor` print a false "did not restart running gateways" warning

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 91,866 · **Open issues:** 8,015 · **Last push:** <1h ago

On September 16, 2026, vLLM did not release any new versions, but several important pull requests were merged, including a bug fix for multi-layer MTP kv caches during decode (#55055) and enhancements to support attention-HMA layouts in pipeline-parallel push prefill (#50494). Other notable updates included optimizations for persistent top-k sampling (#56346) and improvements to GPU memory handling in models with mixed precision (#57064). Meanwhile, new issues emerged, including a race condition in `hadacore_transform`'s tail warp (#57014) and reports of deprecated behavior around asynchronous requests when clients cancel (#57061). These developments highlight ongoing efforts to refine performance and address notable bugs in the vLLM ecosystem.

#### ✅ Merged PRs
- [#55055](https://github.com/vllm-project/vllm/pull/55055) [BugFix][Model Runner V2][Spec Decode] Fix decode instance's multi-layer MTP kv caches during P/D
- [#56505](https://github.com/vllm-project/vllm/pull/56505) [Pooling] Cap max-length padding for chunked embeddings
- [#56545](https://github.com/vllm-project/vllm/pull/56545) [Build][NVIDIA] Update public Rubin dependencies and MSA compatibility
- [#50494](https://github.com/vllm-project/vllm/pull/50494) [KVConnector][NIXL] Support attention-HMA layouts in pipeline-parallel push prefill
- [#57024](https://github.com/vllm-project/vllm/pull/57024) [Bugfix] Avoid nested score cancellation handlers for /v1/score alias
- [#56346](https://github.com/vllm-project/vllm/pull/56346) [Perf][Kernel] Add sampled filtering for persistent top-k
- [#56254](https://github.com/vllm-project/vllm/pull/56254) [DSA] Wire DeepGEMM sparse MQA logits into the DeepSeek V4.1 indexer
- [#56888](https://github.com/vllm-project/vllm/pull/56888) [MRV2] Buffer util simplifications
- [#54098](https://github.com/vllm-project/vllm/pull/54098) [Bugfix] Format kernel-import errors eagerly so warning_once does not retain them
- [#57027](https://github.com/vllm-project/vllm/pull/57027) [Bugfix][HiSparse] Preserve per-layer offsets in KV cache bindings
- [#56845](https://github.com/vllm-project/vllm/pull/56845) [Refactor] Remove dead kernel code
- [#57041](https://github.com/vllm-project/vllm/pull/57041) [Config] Infer HiSparse attention config from HiSparseConnector
- [#56743](https://github.com/vllm-project/vllm/pull/56743) [ROCm][Perf] Optimize DSV4.1 K=512 decode top-k on gfx950
- [#57044](https://github.com/vllm-project/vllm/pull/57044) [CI] Keep Qwen3 Omni DSpark config fixture complete
- [#56962](https://github.com/vllm-project/vllm/pull/56962) [Perf][Kernel] Integrate Mega-mHC from DeepGEMM for DeepSeek V4.1 (reopen of #56255)
- [#56408](https://github.com/vllm-project/vllm/pull/56408) [Frontend] Use XGrammar schema constraints for DeepSeek V4.1
- [#55966](https://github.com/vllm-project/vllm/pull/55966) [ROCm][Spec Decode] Add Aiter MLA decode support non-causal draft block
- [#55879](https://github.com/vllm-project/vllm/pull/55879) [Bugfix][Attention] Stabilize sparse-MLA DCP for GLM PCP evals
- [#42904](https://github.com/vllm-project/vllm/pull/42904) [feature] [xgrammar] support `patternProperties`/`propertyNames`/`unevaluatedProperties` kw for object types
- [#56969](https://github.com/vllm-project/vllm/pull/56969) [Bugfix] Prevent out-of-bounds access in FlashInfer SM90 sparse MLA mixed batches
- [#53458](https://github.com/vllm-project/vllm/pull/53458) [Bugfix][Spec Decode] Only create draft_id_to_target_id when draft vocab differs
- [#56721](https://github.com/vllm-project/vllm/pull/56721) [Bugfix][Gemma 4] Don't read fft_length when profiling unified audio
- [#54746](https://github.com/vllm-project/vllm/pull/54746) [Frontend] Share max_num_queued_reqs across API server processes
- [#56387](https://github.com/vllm-project/vllm/pull/56387) [Bugfix][Spec Decode][MoE] Avoid uninitialized EPLB state in DeepSeek V4.1 DSpark drafter
- [#52301](https://github.com/vllm-project/vllm/pull/52301) [Perf][Nemotron] Skip redundant latent-MoE all-reduce at TP>1 (~13% decode win)
- [#56200](https://github.com/vllm-project/vllm/pull/56200) [Refactor] Derive is_reasoning_end from the engine grammar
- [#56934](https://github.com/vllm-project/vllm/pull/56934) [XPU][CI]Skip test_chat_completion_with_tools in Intel GPU CI
- [#48200](https://github.com/vllm-project/vllm/pull/48200) [Refactor] StructuredOutputManager x Speculative Decoding Refactor
- [#56760](https://github.com/vllm-project/vllm/pull/56760) [Bugfix] Measure complete pooling responses
- [#56990](https://github.com/vllm-project/vllm/pull/56990) [Rust Frontend] Add iteration token histogram
- [#53124](https://github.com/vllm-project/vllm/pull/53124) [Bugfix] Load reasoning parser plugins before headless engine config
- [#56593](https://github.com/vllm-project/vllm/pull/56593) [Bugfix][Rust Frontend] Honor `add_generation_prompt` in DeepSeek V3.2/V4/V4.1 renderers
- [#56903](https://github.com/vllm-project/vllm/pull/56903) [Perf][DSpark] Collapse DeepSeek-V4.1 draft states before SP all-gather
- [#56324](https://github.com/vllm-project/vllm/pull/56324) [CI] Shard V1 KV Connectors 1→4
- [#56955](https://github.com/vllm-project/vllm/pull/56955) [CI] Fix NIXL push worker test stub after failure deferral
- [#53867](https://github.com/vllm-project/vllm/pull/53867) [Feature][PCP] Support decode-only FULL CUDA graphs
- [#56249](https://github.com/vllm-project/vllm/pull/56249) [Bugfix][Frontend] Handle aborted requests in beam search

#### 🐛 New Issues
- [#57008](https://github.com/vllm-project/vllm/issues/57008) XPU: --cpu-offload-gb (UVA) does not reduce peak device memory for compressed-tensors WNA16 MoE models `quantization` 💬8
- [#57014](https://github.com/vllm-project/vllm/issues/57014) [Bug]: race in `hadacore_transform`'s tail warp, last rows % 8 rows read stale shared memory when rows % 8 is 1-4 `bug` `quantization` 💬3
- [#56968](https://github.com/vllm-project/vllm/issues/56968) [RFC]: Plain-Python watermarking performance regression benchmark `quantization` 💬3
- [#57069](https://github.com/vllm-project/vllm/issues/57069) [Feature]: Integrate CFT counted-write MoE all-to-all kernel `feature request` 💬2
- [#56993](https://github.com/vllm-project/vllm/issues/56993) [RFC]: Split scale-out into owned components (Renderer / Frontend / Generation) with dedicated launch commands `RFC` 💬2
- [#57064](https://github.com/vllm-project/vllm/issues/57064) [Bug][ROCm][Attention][KV Connector] DeepSeek-V3.2 / GLM-5.x DSA sparse-MLA decode is garbage under CUDA graphs in PD-disaggregation (remote-prefilled KV) `rocm` `deepseek` `kv-connector` `glm` 💬2
- [#57059](https://github.com/vllm-project/vllm/issues/57059) [Bug][ROCm][Distributed] Custom all-reduce start barrier is fully relaxed — peer-data reads unordered against remote (XGMI) writes → torn reads `bug` `rocm` 💬2
- [#57002](https://github.com/vllm-project/vllm/issues/57002) [Feature]: ModernBert LoRa support `feature request` 💬2
- [#57016](https://github.com/vllm-project/vllm/issues/57016) [Bug]: `VLLM_BATCH_INVARIANT=1` is not batch-invariant for fused-MoE experts with no warning `bug` `quantization` 💬1
- [#57082](https://github.com/vllm-project/vllm/issues/57082) Engine-initiated aborts end chat completion streams as if they completed: HTTP 200, terminal finish_reason "abort" (not an OpenAI enum value), then an unconditional data: [DONE] 💬1
- [#57061](https://github.com/vllm-project/vllm/issues/57061) [Bug]: API server leaks request state when client cancels during AsyncLLM.add_request 💬1
- [#57038](https://github.com/vllm-project/vllm/issues/57038) [Bug]: truncate_prompt_tokens does not bound the final prompt after multimodal expansion `bug` `multi-modality` 💬1
- [#57031](https://github.com/vllm-project/vllm/issues/57031) 1M-context models on MRV2: `warmup_kernels()` dummy-execute leaves the engine dead at startup/capture on ROCm — skipping that call is the only thing that fixed it for us `rocm` 💬1
- [#57030](https://github.com/vllm-project/vllm/issues/57030) MRV2 `StagedWriteTensor.apply_write` computes row offsets in int32 and walks off the end of the buffer once `row_idx * stride(0) > 2**31` `rocm` 💬1
- [#57029](https://github.com/vllm-project/vllm/issues/57029) [Bug][ROCm] AiterExperts + DeepEPHT/Mori PrepareAndFinalize: illegal memory access at world_size=2 (gfx942) `rocm` `quantization` 💬1
- [#56981](https://github.com/vllm-project/vllm/issues/56981) [Bug]: Qwen3-ASR audio preprocessing produces different audio-token counts from Hugging Face `bug` 💬1
- [#56992](https://github.com/vllm-project/vllm/issues/56992) [Performance][ROCm][gfx1100] compressed-tensors silently enables fp8 KV cache, which is far slower than bf16 for paged decode attention on RDNA3 `rocm` 💬1
- [#56977](https://github.com/vllm-project/vllm/issues/56977) [Bug]: SpecDecodingStats.num_drafts counts requests whose drafts were all invalidated 💬1
- [#56945](https://github.com/vllm-project/vllm/issues/56945) [Bug]: rocm/vllm image never sets VLLM_ROCM_USE_AITER — Qwen3.5-122B-A10B-FP8 runs Triton MoE + ROCM_ATTN, 1.7x slower at short prompts and 3.7x at 12k than AITER + ROCM_AITER_UNIFIED_ATTN (MI300X/MI325X/MI355X) `rocm` 💬1
- [#57087](https://github.com/vllm-project/vllm/issues/57087) [Bug] GLM-5.3 hybrid (nvfp4, GB10/sm121, TP2): concurrent batching corrupts non-ASCII generation — fragment-token state poisoning + silent DecodeStream FFFD flush `glm`
- [#57019](https://github.com/vllm-project/vllm/issues/57019) [Bug]: HiSparse host-resident KV produces token noise from the first decode step (GLM-5.2, sparse MLA) `bug` `glm`
- [#57052](https://github.com/vllm-project/vllm/issues/57052) [Bug]: Scale-out token path breaks stop strings: stop text leaks into derendered output (include_stop_str_in_output ignored) and --tokens-only silently disables stop entirely
- [#57034](https://github.com/vllm-project/vllm/issues/57034) [Bug]: V2 model runner keeps stale ModelState.max_model_len after auto-fit -> AssertionError in DeepSeek-V4 sparse MLA (C128A) during CUDA graph capture `deepseek` `DSv4`
- [#57032](https://github.com/vllm-project/vllm/issues/57032) [Spec Decode][dflash] Drafter KV group is never identified, so prefix-cache reuse is silently disabled for the Mamba groups
- [#57017](https://github.com/vllm-project/vllm/issues/57017) [Bug]: DeepSeek-V2-Lite with online FP8 on an RTX 4090 (TRITON_MLA): NaN logits on every request once three or more sequences are decoded in one CUDA-graph batch `bug` `deepseek` `quantization`
- [#57013](https://github.com/vllm-project/vllm/issues/57013) [Feature][Spec Decode] Support MiniCPM5-2B-DSpark `feature request`
- [#56980](https://github.com/vllm-project/vllm/issues/56980) [Bug]: MiniMax-M3 MSA crashes with quack-kernels 0.6.5 on the standard SM100 CUDA path `bug` `minimax`
- [#56975](https://github.com/vllm-project/vllm/issues/56975) [Performance] GLM-5.3-Flash on 4x GB200 TP4: p99 ITL 15-20x SGLang's at c>=32; prefill-containing steps run outside CUDA graphs; raising --max-cudagraph-capture-size to the chunk size cuts the tail by about half (data) `glm`
- [#56973](https://github.com/vllm-project/vllm/issues/56973) [Bug] GLM-5.3-Flash with TP=1 per rank (DP4) fails at CUDA-graph capture in fused_recurrent_kda: grid.z = batch x 64 heads exceeds 65535 `glm`
- [#56972](https://github.com/vllm-project/vllm/issues/56972) [Bug]: MooncakeStoreConnector drops decode-phase Mamba states for hybrid Mamba/GDN models
- [#56958](https://github.com/vllm-project/vllm/issues/56958) [Feature]: add NoF (NVMe over Fabrics) replica configuration support to vLLM's MooncakeStoreConnector `feature request`
- [#56949](https://github.com/vllm-project/vllm/issues/56949) [Bug]: Dense DP weight transfer selects the wrong IPC payload `bug`
- [#56943](https://github.com/vllm-project/vllm/issues/56943) [Bug]: Per-request EngineDeadError tracebacks accumulate stack frames and flood logs after a worker crash
- [#56924](https://github.com/vllm-project/vllm/issues/56924) [Performance]: int8 W8A8 CUTLASS on Ada (sm_89) is 1.3x to 2x slower per call from M=17, at the dispatch bucket edge `nvidia` `quantization`

#### 🔒 Closed Issues
- [#23567](https://github.com/vllm-project/vllm/issues/23567) [Bug]: openai_harmony.HarmonyError: unexpected tokens remaining in message header
- [#53431](https://github.com/vllm-project/vllm/issues/53431) [Bug]: Gemma4 tool parser silently drops the bare `<|tool_call>:name{...}` opener — no tool call, no content, on both streaming and non-streaming
- [#56815](https://github.com/vllm-project/vllm/issues/56815) [Bug]: Silent ctx-load decode flake on single-GPU Qwen4Exp PLE CPU-offload — nightly range eed1f3d0→dc36fcce (#56512 ruled out)
- [#44772](https://github.com/vllm-project/vllm/issues/44772) [Feature]: [Metrics] Add per-request preemption count to Prometheus histogram
- [#53128](https://github.com/vllm-project/vllm/issues/53128) [Bug][KVOffload] PD Multi Tier discards parked KV after a fixed 60s, so a queued consumer recomputes
- [#33828](https://github.com/vllm-project/vllm/issues/33828) [Bug]: mistral3 offline multimodal inference example failing with prompt placeholder error
- [#47999](https://github.com/vllm-project/vllm/issues/47999) [Feature]: Support the EC connector in Model Runner V2 (E/P/D disaggregation)
- [#55276](https://github.com/vllm-project/vllm/issues/55276) [Doc]: Clarify ITL vs. TPOT Prometheus metrics
- [#55052](https://github.com/vllm-project/vllm/issues/55052) [Bug]: multimodal mm_encoder_only conversion fails across model families
- [#55502](https://github.com/vllm-project/vllm/issues/55502) [Bug]: /rerank keeps processing queued documents after the client disconnects, despite @with_cancellation
- [#54096](https://github.com/vllm-project/vllm/issues/54096) [Bug]: logger.warning_once with a live exception argument leaks the exception's entire traceback (pins the LLM instance on platforms without vllm._C)`
- [#57019](https://github.com/vllm-project/vllm/issues/57019) [Bug]: HiSparse host-resident KV produces token noise from the first decode step (GLM-5.2, sparse MLA)
- [#53072](https://github.com/vllm-project/vllm/issues/53072) [Bug]: --headless does not load custom reasoning parser plugins
- [#52744](https://github.com/vllm-project/vllm/issues/52744) [Performance]: DeepEP v2 (ElasticBuffer) finalize_async runs combine synchronously — the shared-expert overlap window is never used
- [#55750](https://github.com/vllm-project/vllm/issues/55750) [Bug]: Routed-expert metadata request crashes EngineCore and breaks subsequent requests

### SGLang (`sgl-project/sglang`)

**Stars:** 36,005 · **Open issues:** 5,360 · **Last push:** <1h ago

On September 16, 2026, SGLang saw no new releases but notable progress with several significant merged pull requests. Key improvements include the implementation of native 16-head attention for smaller TP4 decode batches in PR #39674, optimizations for memory usage with the C4 Indexer in PR #36534, and enhancements in buffer-mode storage bookkeeping within HiCache through PR #39480. Additionally, PR #39611 tackled a CI flake issue related to the disaggregation tests. Among new issues, PR #39624 raised a concern about Qwen4-Exp's inability to execute PD disaggregation due to uninitialized decode-side PLE state, which may require urgent attention.

#### ✅ Merged PRs
- [#39674](https://github.com/sgl-project/sglang/pull/39674) [DSV4.1] Use native 16-head attention for small TP4 decode batches
- [#39280](https://github.com/sgl-project/sglang/pull/39280) [HiCache] Label radix-cache metrics per rank and split the "shrunk" prefetch reason
- [#36534](https://github.com/sgl-project/sglang/pull/36534) [DSV4][BCG] Optimize the heavy memory use of C4 Indexer when BCG is enabled
- [#39111](https://github.com/sgl-project/sglang/pull/39111) [Router] Add a KV storage-tier coverage row to the Grafana dashboard (4/4)
- [#39004](https://github.com/sgl-project/sglang/pull/39004) [router] Resolve a wire protocol per worker at registration
- [#39227](https://github.com/sgl-project/sglang/pull/39227) Force reasoning mode for GLM-5.3 chat templates
- [#39574](https://github.com/sgl-project/sglang/pull/39574) [misc] Fix tool-call index, graph padded-row count, and prefill-graph input_embeds refresh
- [#39110](https://github.com/sgl-project/sglang/pull/39110) [Router] Real-GPU e2e coverage for storage-tier-aware cache routing (3/4)
- [#39329](https://github.com/sgl-project/sglang/pull/39329) Add external multimodal processors to the Rust frontend
- [#36729](https://github.com/sgl-project/sglang/pull/36729) Use a shared byte budget for unified hybrid-SWA memory
- [#39328](https://github.com/sgl-project/sglang/pull/39328) Fix first-token metadata and reused attention-layer indexing
- [#35809](https://github.com/sgl-project/sglang/pull/35809) fix(gemma4): set lm_head_is_tied for Gemma4UnifiedForConditionalGeneration
- [#39584](https://github.com/sgl-project/sglang/pull/39584) [Fix][PD] Give prefill and decode their own RDMA NICs in disaggregation tests
- [#39636](https://github.com/sgl-project/sglang/pull/39636) [Test] Fix DeepGEMM batch invariance test output dtype
- [#38160](https://github.com/sgl-project/sglang/pull/38160) [Feature] Support BF16 and batch-invariant inference with DeepEP v2
- [#39560](https://github.com/sgl-project/sglang/pull/39560) [Fix] Release NCCL on scheduler exit and let the ASGI server own shutdown
- [#39109](https://github.com/sgl-project/sglang/pull/39109) [Router] Expose the KV storage-tier stream and tree occupancy on /metrics (2/4)
- [#39164](https://github.com/sgl-project/sglang/pull/39164) Generalize auxiliary outputs
- [#39480](https://github.com/sgl-project/sglang/pull/39480) [HiCache] Optimize buffer-mode storage existence bookkeeping
- [#39283](https://github.com/sgl-project/sglang/pull/39283) [HiCache] Rework the buffer-mode storage prefetch pipeline and retry bookkeeping
- [#38632](https://github.com/sgl-project/sglang/pull/38632) [AMD][CI] Consolidate AMD workflows and retire ROCm 7.0 CI
- [#39611](https://github.com/sgl-project/sglang/pull/39611) [CI][Disaggregation] Fix EADDRINUSE flake in test_disaggregation_dwdp_gpt_oss
- [#39585](https://github.com/sgl-project/sglang/pull/39585) [NPU][CI] Scope NPU nightly artifact dirs by image; fix stale glm5_2 case
- [#38984](https://github.com/sgl-project/sglang/pull/38984) [Intra-node PD][DSV4] Pack all layers into one batch for INTRA_NODE_NVLINK path
- [#39600](https://github.com/sgl-project/sglang/pull/39600) [CI] Fix SWA decode radix cache NIXL import
- [#39544](https://github.com/sgl-project/sglang/pull/39544) [misc] Trim redundant variants from the 8-gpu-h20 disaggregation test suite
- [#38503](https://github.com/sgl-project/sglang/pull/38503) Fix mooncake scale joiner groups
- [#39411](https://github.com/sgl-project/sglang/pull/39411) [NPU] [CI] Fix multimodal_gen filter leakage and add daily scheduled run
- [#38890](https://github.com/sgl-project/sglang/pull/38890) Support non-strict GLM47 tool calls with EBNF constraints
- [#39474](https://github.com/sgl-project/sglang/pull/39474) [qwen 3.8 next] reuse old cuda stream instead of endlessly creating streams
- [#38176](https://github.com/sgl-project/sglang/pull/38176) keeping router GEMM in fp32 for deterministic inference (DeepSeek V3/V4)
- [#31804](https://github.com/sgl-project/sglang/pull/31804) [EPLB] Drop defensive getattr for ep_dispatch_algorithm
- [#38630](https://github.com/sgl-project/sglang/pull/38630) [profiler] Label draft-runner steps DRAFT and target verify VERIFY in step spans
- [#39370](https://github.com/sgl-project/sglang/pull/39370) [DSV4.1] Combine DSpark decode and prefill kernel optimizations
- [#39322](https://github.com/sgl-project/sglang/pull/39322) [Router] Extract worker selection into policies::selection (no behavior change)
- [#39553](https://github.com/sgl-project/sglang/pull/39553) [CI] Run test_unified_radix_cache_kl_dcp on cutedsl_mla with bf16 KV cache
- [#39423](https://github.com/sgl-project/sglang/pull/39423) [NPU][Bugfix] Disable pinned memory to fix DeepSeek-V2 DP-attention hang
- [#39555](https://github.com/sgl-project/sglang/pull/39555) [NPU] [DOC] delete unsupported models in npu docs
- [#39545](https://github.com/sgl-project/sglang/pull/39545) [CI] Wait for a killed test server's GPU memory before the next launch
- [#39534](https://github.com/sgl-project/sglang/pull/39534) [Fix] Aggregate all IPC weight update responses
- [#37748](https://github.com/sgl-project/sglang/pull/37748) [CPU] Implement fused QK Norm and RoPE kernels
- [#39487](https://github.com/sgl-project/sglang/pull/39487) [Fix][DCP] Localize widened KV ids in MLA retraction CPU backup/restore
- [#39516](https://github.com/sgl-project/sglang/pull/39516) [Fix] HiCache startup ImportError on the pinned kernel wheel
- [#39374](https://github.com/sgl-project/sglang/pull/39374) [Kimi K3] Optimization stack for 2xB300 EP16: DSPARK-DeepEP, SiTU, TGV, DCP fi_a2a, SP/hook defaults
- [#39366](https://github.com/sgl-project/sglang/pull/39366) fix: stop shadowing the DSpark shared-experts fusion guard
- [#39278](https://github.com/sgl-project/sglang/pull/39278) [Fix][Qwen-VL] Normalize <image> sentinel on artifact fast path
- [#39332](https://github.com/sgl-project/sglang/pull/39332) [PD][LoRA] Gate decode admission on adapter slots
- [#37482](https://github.com/sgl-project/sglang/pull/37482) feat(agent sessions): attribute stored KV cache blocks to sessions
- [#39148](https://github.com/sgl-project/sglang/pull/39148) [MM] Add flag to force Kimi image preprocessing onto CPU

#### 🐛 New Issues
- [#39499](https://github.com/sgl-project/sglang/issues/39499) [Roadmap] SGLang dLLM Serving 💬2
- [#39634](https://github.com/sgl-project/sglang/issues/39634) [Tracking] Pipeline parallelism x speculative decoding (EAGLE/MTP): converge prefill gate PRs, make the path model-agnostic, decide decode design
- [#39624](https://github.com/sgl-project/sglang/issues/39624) Qwen4-Exp (Qwen3.8-Flash-Next) cannot run PD disaggregation — decode-side PLE state pool is never sized, and a conservative config block masks the actual defect 💬1
- [#39583](https://github.com/sgl-project/sglang/issues/39583) [Bug] Kimi K3 leaks raw XTML tool calls into content when no tools are declared 💬1
- [#39681](https://github.com/sgl-project/sglang/issues/39681) [Bug] GitHub: Standard users do not have permission to reopen issues.
- [#39675](https://github.com/sgl-project/sglang/issues/39675) [Bug] Apple Metal (mps) reports no device memory capacity, so mem_fraction_static falls back to 0.95 and prefill OOMs
- [#39651](https://github.com/sgl-project/sglang/issues/39651) benchmark serving tool does not control or record radix cache state; CI silently runs a different cache protocol than users copying the same command
- [#39645](https://github.com/sgl-project/sglang/issues/39645) Retracted input_embeds requests silently splice two generations into one successful response (send_token_offset survives the discard of output_ids)
- [#39640](https://github.com/sgl-project/sglang/issues/39640) [Bug] SGLANG_FORWARD_UNKNOWN_TOOLS is not honoured by four tool-call detectors on the one-shot path
- [#39626](https://github.com/sgl-project/sglang/issues/39626) [Bug] Block-FP8 Triton matmul silently accepts an unsupported K tile and returns wrong results
- [#39604](https://github.com/sgl-project/sglang/issues/39604) [Feature] [KV events] Include the removal reason in `BlockRemoved`
- [#39599](https://github.com/sgl-project/sglang/issues/39599) [Bug] tool.model_dump() field order does not match vLLM/OpenAI's default tool schema order
- [#39597](https://github.com/sgl-project/sglang/issues/39597) Greedy decoding is not reproducible across server restarts when FlashInfer autotune is enabled (DFLASH speculative decoding)
- [#39570](https://github.com/sgl-project/sglang/issues/39570) [Bug] qwen38flashnext cookbook image predates #38851: start-up crash in the QSA KV-extraction kernel once max_running_requests reaches ~4000 (e.g. with --disable-radix-cache)
- [#39569](https://github.com/sgl-project/sglang/issues/39569) [Bug] Kimi-K3 TP16 on GB200 (dev 2026-09-11): 'K3 fused KDA decode disabled: unexpected conv/A_log/dt_bias layout' on every layer
- [#39568](https://github.com/sgl-project/sglang/issues/39568) [Bug] Kimi-K3 cookbook image (sglang 0.5.16) hangs in the first TP16 decode step on 4 nodes x 4 GB200
- [#39532](https://github.com/sgl-project/sglang/issues/39532) [Tracking] Reduce multimodal frontend overhead
- [#39521](https://github.com/sgl-project/sglang/issues/39521) [RFC] FuseEP Integration for MiniMax-M3 Prefill on Ascend NPU
- [#39517](https://github.com/sgl-project/sglang/issues/39517) [Bug] NEXTN with Qwen3.5-122B-A10B-FP8 memory-faults on MI300X/MI325X/MI355X (aiter backend, rocm10 nightlies); triton works, SGLANG_USE_AITER_UNIFIED_ATTN works on gfx942 only
- [#39515](https://github.com/sgl-project/sglang/issues/39515) [Bug] NEXTN on B200 silently switches Qwen3.5-122B to triton when --page-size is set; forcing trtllm_mha is 2.6x faster at long context

#### 🔒 Closed Issues
- [#21065](https://github.com/sgl-project/sglang/issues/21065) CI Maintenance Mode
- [#31236](https://github.com/sgl-project/sglang/issues/31236) [Bug] 'Gemma4ForConditionalGeneration' object has no attribute 'get_embed_and_head' when modelopt_fp4
- [#25664](https://github.com/sgl-project/sglang/issues/25664) Deprecate Hopper SBO feature
- [#31243](https://github.com/sgl-project/sglang/issues/31243) [Bug] can't deploy Mimo V2.5
- [#24502](https://github.com/sgl-project/sglang/issues/24502) [Bug] flashinfer_trtllm MoE runner has no DeepEP fused func registered — blocks EP+NVFP4 on Blackwell
- [#31545](https://github.com/sgl-project/sglang/issues/31545) [Bug][ROCm] MI355X: CUDA-graph decode kernels are captured but async-deferred into one post-marker burst — per-step timing unrecoverable (torch profiler)
- [#38645](https://github.com/sgl-project/sglang/issues/38645) [Bug][DCP][PD Disagg] Decode retraction crashes in get_cpu_copy with CUDA device-side assert
- [#30887](https://github.com/sgl-project/sglang/issues/30887) [Bug] ModelOpt NVFP4 gated MoE fails to load with TP when intermediate padding is required
- [#32527](https://github.com/sgl-project/sglang/issues/32527) [BUG] EAGLE + DP Attention + PD Disaggregation: Deadlock when `index_share_for_mtp_iteration` is enabled for GLM-5.2
- [#31599](https://github.com/sgl-project/sglang/issues/31599) Speculative decode: max_new_tokens cap masks an in-budget stop string and leaks post-stop tokens
- [#31598](https://github.com/sgl-project/sglang/issues/31598) Streaming detokenization can duplicate a character (sent_offset retreats across recovery steps)
- [#30197](https://github.com/sgl-project/sglang/issues/30197) [Bug] glm-5.2-w4afp8 dp deployment error
- [#31570](https://github.com/sgl-project/sglang/issues/31570) [Feature] [NPU] Implement CI test for different quantization prefixes (w1/2/3; gate/up/down_proj)
- [#31533](https://github.com/sgl-project/sglang/issues/31533) [Bug] xgrammar-constrained requests never terminate when tokenizer eos_token is missing from model config eos_token_id
- [#39624](https://github.com/sgl-project/sglang/issues/39624) Qwen4-Exp (Qwen3.8-Flash-Next) cannot run PD disaggregation — decode-side PLE state pool is never sized, and a conservative config block masks the actual defect
- [#38561](https://github.com/sgl-project/sglang/issues/38561) [Bug] cache_salt in BlockStored KV events is undecodable with SGLang's exported msgspec types
- [#38673](https://github.com/sgl-project/sglang/issues/38673) Title: [Bug] Gemma4UnifiedForConditionalGeneration crashes on CUDA graph capture: 'lm_head_is_tied' not set
- [#38819](https://github.com/sgl-project/sglang/issues/38819) [Feature] End-to-end PD disaggregation + DSpark support for DeepSeek-V4.1

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 128,357 · **Open issues:** 2,494 · **Last push:** 1h ago

On September 16, 2026, the llama.cpp project released multiple updates, including versions b10991, b10990, and b10989, featuring enhancements such as the reintroduction of the contiguous fast-path in hexagon for improved performance (#28886), and DMA usage for contiguous sources and destinations in hex-cpy (#28906). Key merged pull requests included enabling AllReduce for ROCm (#27825), supporting sparse Flash Attention in Vulkan (#28105), and optimizing stateful decoding in OpenVINO (#28638). A newly reported issue of high memory growth during chat on a 128GB unified-memory system (#28933) has garnered attention as a notable concern.

#### 🚀 New Releases
- [b10991](https://github.com/ggml-org/llama.cpp/releases/tag/b10991) b10991
- [b10990](https://github.com/ggml-org/llama.cpp/releases/tag/b10990) b10990
- [b10989](https://github.com/ggml-org/llama.cpp/releases/tag/b10989) b10989
- [b10988](https://github.com/ggml-org/llama.cpp/releases/tag/b10988) b10988
- [b10985](https://github.com/ggml-org/llama.cpp/releases/tag/b10985) b10985
- [b10984](https://github.com/ggml-org/llama.cpp/releases/tag/b10984) b10984
- [b10983](https://github.com/ggml-org/llama.cpp/releases/tag/b10983) b10983
- [b10982](https://github.com/ggml-org/llama.cpp/releases/tag/b10982) b10982
- [b10981](https://github.com/ggml-org/llama.cpp/releases/tag/b10981) b10981
- [b10980](https://github.com/ggml-org/llama.cpp/releases/tag/b10980) b10980

#### ✅ Merged PRs
- [#28886](https://github.com/ggml-org/llama.cpp/pull/28886) hexagon: add back missing contiguous fast-path and hvx_copy_uu for each run
- [#28906](https://github.com/ggml-org/llama.cpp/pull/28906) hexagon: use dma if src and dst are contiguous
- [#27825](https://github.com/ggml-org/llama.cpp/pull/27825) HIP: Enable AllReduce for ROCm
- [#27637](https://github.com/ggml-org/llama.cpp/pull/27637) opencl: choose the MoE expert matmul by batch size for speculative decoding/MTP
- [#28934](https://github.com/ggml-org/llama.cpp/pull/28934) models : move build_arch_graph() after graph() template specialization
- [#28944](https://github.com/ggml-org/llama.cpp/pull/28944) ci: build MUSA for only 1 arch
- [#28945](https://github.com/ggml-org/llama.cpp/pull/28945) docs: Rule of thumb for AI review time [no ci]
- [#28789](https://github.com/ggml-org/llama.cpp/pull/28789) rpc : hash-cache only weights
- [#26308](https://github.com/ggml-org/llama.cpp/pull/26308) cuda: support row-contiguous SUM_ROWS
- [#28105](https://github.com/ggml-org/llama.cpp/pull/28105) vulkan: support sparse Flash Attention
- [#28638](https://github.com/ggml-org/llama.cpp/pull/28638) OpenVINO: optimize stateful decode and GPU MoE inference
- [#28881](https://github.com/ggml-org/llama.cpp/pull/28881) opencl: add generic ssm_scan
- [#28885](https://github.com/ggml-org/llama.cpp/pull/28885) ci: bump kleidiai runners from 22.04 to 24.04
- [#28599](https://github.com/ggml-org/llama.cpp/pull/28599) metal : add FA kernels for HSK=96, HSV=64 (MiniCPM3)
- [#28930](https://github.com/ggml-org/llama.cpp/pull/28930) ci: Bump CUDA Windows x64 builds to 13.4.1 (#28930)
- [#28936](https://github.com/ggml-org/llama.cpp/pull/28936) ci : fix android release
- [#28897](https://github.com/ggml-org/llama.cpp/pull/28897) cuda : enable i16 and i32 for DUP
- [#28771](https://github.com/ggml-org/llama.cpp/pull/28771) cmake : use PROJECT_SOURCE_DIR instead of CMAKE_SOURCE_DIR

#### 🐛 New Issues
- [#28928](https://github.com/ggml-org/llama.cpp/issues/28928) Feature Request: Please publish or add to the repository the WebUI bundle `enhancement` 💬5
- [#28933](https://github.com/ggml-org/llama.cpp/issues/28933) qwen4_exp (Qwen3.8-Flash-Next): host-side memory (RSS+swap) grows during normal chat on a 128GB unified-memory system 💬3
- [#28939](https://github.com/ggml-org/llama.cpp/issues/28939) Eval bug: DeepSeek-v4-flash-vision exp. DSpark and Dflash not increase the tok gen speed. `bug-unconfirmed` 💬1
- [#28954](https://github.com/ggml-org/llama.cpp/issues/28954) Eval bug: Regression - Images above ~1.2 Mpx trigger ggml_assert with Gemma4 Models `bug-unconfirmed` 💬1
- [#28974](https://github.com/ggml-org/llama.cpp/issues/28974) Feature Request: GGML_OP_UNIFORM_RANDOM, or another way to generate random numbers on-device `enhancement`
- [#28970](https://github.com/ggml-org/llama.cpp/issues/28970) Misc. bug: `llama-batched-bench` ignores the `-fit` option `bug-unconfirmed`
- [#28969](https://github.com/ggml-org/llama.cpp/issues/28969) gguf-dump prints metadata keys and tensor names raw, allowing terminal escape sequence injection (OSC 8 hyperlinks, OSC 52 clipboard writes)
- [#28964](https://github.com/ggml-org/llama.cpp/issues/28964) Eval bug: "Invalid vector subscript" when loading model if all devices with VRAM report zero free VRAM `bug-unconfirmed`
- [#28963](https://github.com/ggml-org/llama.cpp/issues/28963) Misc. bug: CPU backend: llama_batch.embd (embedding input) decoding is non-deterministic, while the token path is bitwise deterministic `bug-unconfirmed`
- [#28960](https://github.com/ggml-org/llama.cpp/issues/28960) Misc. bug: Vulkan im2col / im2col_3d shaders write through buffer_reference without buffer_reference_align (VUID-RuntimeSpirv-PhysicalStorageBuffer64-06315) `bug-unconfirmed`
- [#28950](https://github.com/ggml-org/llama.cpp/issues/28950) Misc. bug: llama download -hf repo:model does not download mmproject `bug-unconfirmed`
- [#28942](https://github.com/ggml-org/llama.cpp/issues/28942) Feature Request: KV snapshot for agent fan-out: use seq_cp at divergence points `enhancement`
- [#28932](https://github.com/ggml-org/llama.cpp/issues/28932) [Proposal] reasoning budget: soft end-token wind-down instead of hard FORCING at the wall (+ sm_70 notes)

#### 🔒 Closed Issues
- [#20475](https://github.com/ggml-org/llama.cpp/issues/20475) Misc. bug: Webui seems not providing api key when using `Use llama-server proxy` for MCP
- [#28928](https://github.com/ggml-org/llama.cpp/issues/28928) Feature Request: Please publish or add to the repository the WebUI bundle
- [#28602](https://github.com/ggml-org/llama.cpp/issues/28602) Misc. bug: MiniCPM3-4B crashes on Metal with automatic flash attention

### Ollama (`ollama/ollama`)

**Stars:** 181,079 · **Open issues:** 4,013 · **Last push:** <1h ago

On September 16, 2026, Ollama released version v0.34.2, which includes updates from llama.cpp among other changes. Significant merged pull requests featured a version bump for llama.cpp and MLX components, documentation refresh for getting started guides, as well as the deprecation of the typical_p API. A noteworthy new issue reported concerns extremely slow response times when using the Claude integration, which could impact user experience. Other issues include problems with the Vulkan iGPU runner and unintended behavior in the gemma4 renderer related to tool parameters. Overall, the day was marked by important updates and emerging concerns that warrant attention.

#### 🚀 New Releases
- [v0.34.2-rc0](https://github.com/ollama/ollama/releases/tag/v0.34.2-rc0) v0.34.2

#### ✅ Merged PRs
- [#18446](https://github.com/ollama/ollama/pull/18446) llama.cpp: version bump b10969
- [#18450](https://github.com/ollama/ollama/pull/18450) docs: refresh getting started guides
- [#18448](https://github.com/ollama/ollama/pull/18448) API: Deprecate typical_p
- [#18449](https://github.com/ollama/ollama/pull/18449) MLX, MLX-C: version bump
- [#14969](https://github.com/ollama/ollama/pull/14969) create: add server-side MLX imports and drop GGUF conversion

#### 🐛 New Issues
- [#18474](https://github.com/ollama/ollama/issues/18474) Extremely slow response times when using Claude integration 💬1
- [#18480](https://github.com/ollama/ollama/issues/18480) typical_p is no longer supported (status code: 400) from python API `bug`
- [#18477](https://github.com/ollama/ollama/issues/18477) [Bug]: Vulkan iGPU runner wedges after a cancelled large prefill — later requests hang silently until backend restart
- [#18468](https://github.com/ollama/ollama/issues/18468) gemma4 renderer drops tool parameters named `description`, `type`, `properties`, `required` or `nullable`
- [#18463](https://github.com/ollama/ollama/issues/18463) `ollama launch claude` starts 1M-context cloud models with a 200K window, and labels a 262K model as 1M

#### 🔒 Closed Issues
- [#11691](https://github.com/ollama/ollama/issues/11691) Structured output with OpenAI SDK and gpt-oss:20b not working
- [#10538](https://github.com/ollama/ollama/issues/10538) Structured outputs for reasoning models / thinking-mode
- [#18297](https://github.com/ollama/ollama/issues/18297) Does Ollama support IQ3_S quantization for Qwen3.8-27B-GSQ-RCO-GGUF? Returns empty content
- [#14957](https://github.com/ollama/ollama/issues/14957) Format output for qwen 3.5 35b model does not count thinking tokens as eval
- [#17180](https://github.com/ollama/ollama/issues/17180) Bug 4: Goroutine Leak on Partial GGUF Header Parse Failure in Lazy Reader
- [#17179](https://github.com/ollama/ollama/issues/17179) Bug 3: Unrecovered background goroutines let a crash in any of 20+ model converters take down the whole ollama serve process

### LiteLLM (`BerriAI/litellm`)

**Stars:** 58,820 · **Open issues:** 5,086 · **Last push:** <1h ago

On September 16, 2026, LiteLLM released version 1.101.0, which includes enhancements for verifying Docker image signatures using cosign for improved security. Key changes in merged pull requests include the addition of a provider-neutral Gemini 2.5+ chat baseline fallback generalization and a new passthrough route for NIM object detection and OCR, alongside critical fixes for improving dashboard user onboarding and resolving caller identity in custom code guardrails. Additionally, there are significant new issues reported, including a bug where streaming_handler assigns raw SDK usage incorrectly to ModelResponseStream, which emerged as a regression in version 1.94.0. Overall, these updates reflect an ongoing commitment to stability and feature enhancement within LiteLLM’s ecosystem.

#### 🚀 New Releases
- [v1.101.0](https://github.com/BerriAI/litellm/releases/tag/v1.101.0) v1.101.0

#### ✅ Merged PRs
- [#41342](https://github.com/BerriAI/litellm/pull/41342) fix(responses): backport request-param leak fixes to rc/1.102.0 (#41018, #41141, #41144)
- [#41319](https://github.com/BerriAI/litellm/pull/41319) fix(e2e): onboard dashboard users through invitations
- [#41126](https://github.com/BerriAI/litellm/pull/41126) fix(guardrails): resolve caller identity from metadata buckets in custom code guardrail
- [#41326](https://github.com/BerriAI/litellm/pull/41326) feat(router): limit unlicensed Capability and Fuse v2 routers to one each
- [#35388](https://github.com/BerriAI/litellm/pull/35388) fix(spend): sum multi-round session duration in logs UI
- [#41320](https://github.com/BerriAI/litellm/pull/41320) feat(model_info): add provider-neutral Gemini 2.5+ chat baseline fallback generalization
- [#41316](https://github.com/BerriAI/litellm/pull/41316) feat(proxy): add /nvidia_nim passthrough route for NIM object detection and OCR /v1/infer
- [#41323](https://github.com/BerriAI/litellm/pull/41323) chore(release): backport #41230 to stable/1.99.x and cut 1.99.2
- [#41255](https://github.com/BerriAI/litellm/pull/41255) fix(proxy): track per-member organization spend
- [#41302](https://github.com/BerriAI/litellm/pull/41302) fix(proxy): key model rpm/tpm override takes precedence over team model limit
- [#41318](https://github.com/BerriAI/litellm/pull/41318) fix(cost): price native Responses WebSocket turns at their returned service_tier
- [#41306](https://github.com/BerriAI/litellm/pull/41306) fix(proxy): honor LITELLM_LOG for uvicorn and proxy extras loggers
- [#41322](https://github.com/BerriAI/litellm/pull/41322) fix(vertex_ai): bill Gemini Omni Interactions usage and Veo sampleCount on passthrough
- [#41294](https://github.com/BerriAI/litellm/pull/41294) fix(ui): block usage export and flag the range when a spend page fails
- [#41308](https://github.com/BerriAI/litellm/pull/41308) fix(proxy): resolve router_settings.model_group_alias before key/team model auth
- [#41303](https://github.com/BerriAI/litellm/pull/41303) fix(proxy): keep yaml pass-through endpoints visible to auth after db overlay
- [#41205](https://github.com/BerriAI/litellm/pull/41205) fix(proxy): include litellm_call_id in LLM API exception logs
- [#41282](https://github.com/BerriAI/litellm/pull/41282) feat(auto-router): add per-model Fast mode toggle
- [#41179](https://github.com/BerriAI/litellm/pull/41179) feat: add aihubmix provider pricing entries
- [#41321](https://github.com/BerriAI/litellm/pull/41321) chore: bump litellm-enterprise 0.1.67 -> 0.1.68, litellm-proxy-extras 0.4.97 -> 0.4.98, litellm 1.102.0 -> 1.103.0
- [#40476](https://github.com/BerriAI/litellm/pull/40476) feat(cli): sync Codex /model picker from proxy /v1/models in lite codex
- [#41309](https://github.com/BerriAI/litellm/pull/41309) feat(ui): add custom request headers to the API Playground
- [#41304](https://github.com/BerriAI/litellm/pull/41304) feat(openai): add openai_system_messages_first to put system messages first for prompt caching
- [#41281](https://github.com/BerriAI/litellm/pull/41281) fix(jwt-auth): scope JWT key mappings by issuer to prevent cross-issuer collisions
- [#41296](https://github.com/BerriAI/litellm/pull/41296) feat(ui): persist Models table search, filters, sort and page in the URL
- [#41307](https://github.com/BerriAI/litellm/pull/41307) fix(passthrough): attribute Vertex passthrough successes to the resolved router deployment
- [#40872](https://github.com/BerriAI/litellm/pull/40872) fix(bedrock): sanitize client tool_call ids to Bedrock toolUseId constraints
- [#41171](https://github.com/BerriAI/litellm/pull/41171) fix(logging): track spend for streams a deployment hook converted to non-streaming
- [#41288](https://github.com/BerriAI/litellm/pull/41288) fix(langsmith): keep events appended during an in-flight flush instead of clearing them
- [#41297](https://github.com/BerriAI/litellm/pull/41297) fix(proxy): return 400 instead of 500 for lone surrogate escapes in request body
- [#41300](https://github.com/BerriAI/litellm/pull/41300) fix(router): accept custom_provider_map providers before the first completion call
- [#41289](https://github.com/BerriAI/litellm/pull/41289) fix(router): stop registering a caller-supplied credential as a router deployment
- [#38268](https://github.com/BerriAI/litellm/pull/38268) fix(xai): honor nested web_search filters on the xAI Responses API
- [#41279](https://github.com/BerriAI/litellm/pull/41279) fix(proxy): reset budgets by decrementing pre-reset spend instead of zeroing rows
- [#41291](https://github.com/BerriAI/litellm/pull/41291) fix(proxy): keep client User-Agent on auth failure spend logs
- [#41272](https://github.com/BerriAI/litellm/pull/41272) feat(router): add Fuse V2 classifier after capability forecasting
- [#41230](https://github.com/BerriAI/litellm/pull/41230) fix(router): stop counting caller-set timeout 408s toward deployment cooldown
- [#35180](https://github.com/BerriAI/litellm/pull/35180) fix(rerank): bill Vertex search_units from input records and give every rerank response a unique id
- [#38682](https://github.com/BerriAI/litellm/pull/38682) feat(terraform): add tpm_limit, rpm_limit, budget_duration, allowed_models to litellm_team_member_add
- [#38278](https://github.com/BerriAI/litellm/pull/38278) fix(xai): stop sending web_search_options to xAI's retired Live Search path
- [#40310](https://github.com/BerriAI/litellm/pull/40310) fix(proxy): reconcile budget reservation before enqueuing spend to the DB
- [#40997](https://github.com/BerriAI/litellm/pull/40997) feat(proxy): add tpd_limit (tokens per day) for batch submissions
- [#40191](https://github.com/BerriAI/litellm/pull/40191) fix(proxy): log blocked streaming guardrail responses as failures, not success
- [#40262](https://github.com/BerriAI/litellm/pull/40262) fix(proxy): run the remaining inline token counts off the event loop
- [#41269](https://github.com/BerriAI/litellm/pull/41269) test: drop tests that pin vendor facts and add the CLAUDE.md rule
- [#41170](https://github.com/BerriAI/litellm/pull/41170) fix(prometheus): count 401 auth failures in litellm_proxy_failed_requests_metric
- [#41283](https://github.com/BerriAI/litellm/pull/41283) fix(proxy): keep access-group raw SQL writes on the writer while writer_unavailable is stale
- [#41270](https://github.com/BerriAI/litellm/pull/41270) feat(router): add capability classifier as Fuse foundation
- [#41156](https://github.com/BerriAI/litellm/pull/41156) fix(router): keep weighted routing when a deployment id equals a model_name
- [#41216](https://github.com/BerriAI/litellm/pull/41216) fix(utils): cache custom HuggingFace tokenizers across /utils/token_counter requests
- [#41161](https://github.com/BerriAI/litellm/pull/41161) fix(headroom): protect the cached prefix through the last cache_control breakpoint
- [#41125](https://github.com/BerriAI/litellm/pull/41125) fix(alerting): send llm_exceptions Slack alert for 5xx HTTPException and ProxyException
- [#41271](https://github.com/BerriAI/litellm/pull/41271) fix(proxy): enforce organization budgets when max_budget is 0
- [#40904](https://github.com/BerriAI/litellm/pull/40904) feat(proxy): bind JWT claims to registered agents via agent_id_jwt_field
- [#34939](https://github.com/BerriAI/litellm/pull/34939) feat(dd_span_tagger): emit litellm.user_email span tag for JWT-authenticated requests
- [#41178](https://github.com/BerriAI/litellm/pull/41178) fix(router): bind per-request routing_strategy override selectors to the request's callbacks
- [#41189](https://github.com/BerriAI/litellm/pull/41189) fix(anthropic): add the per-turn-control beta when a message carries output_config
- [#39857](https://github.com/BerriAI/litellm/pull/39857) test(e2e): cover the reliability retry, cooldown, fallback, and routing-strategy cells
- [#41144](https://github.com/BerriAI/litellm/pull/41144) fix(responses): filter bridged kwargs like the native Responses path
- [#36775](https://github.com/BerriAI/litellm/pull/36775) feat(guardrails): add new upstream presidio pii entities including german set
- [#41180](https://github.com/BerriAI/litellm/pull/41180) build(rust-bridge): add typed _native stub and validate it with mypy.stubtest
- [#41175](https://github.com/BerriAI/litellm/pull/41175) feat(auto-router): allow opted-in team members to manage their routers
- [#41256](https://github.com/BerriAI/litellm/pull/41256) fix(proxy): list directly assigned team models in model access errors
- [#41039](https://github.com/BerriAI/litellm/pull/41039) feat(proxy): add POST /management/v1/users/bulk_delete and POST /management/v1/teams/{team_id}/members/bulk_delete
- [#40917](https://github.com/BerriAI/litellm/pull/40917) fix(credentials): answer 409 on a credential name collision, make Terraform adoption opt-in
- [#41028](https://github.com/BerriAI/litellm/pull/41028) feat(proxy): add POST /management/v1/users/bulk for batched user and team membership creation
- [#41257](https://github.com/BerriAI/litellm/pull/41257) docs(github): ask for interactive coding-tool proof in the PR template
- [#41263](https://github.com/BerriAI/litellm/pull/41263) test(pricing): let synced GovCloud Bedrock rows cite the AWS price list
- [#41174](https://github.com/BerriAI/litellm/pull/41174) fix(router): preserve session model choice within each complexity tier
- [#40921](https://github.com/BerriAI/litellm/pull/40921) feat(proxy): unified custom_key_policy hook for key generate, update and regenerate
- [#40695](https://github.com/BerriAI/litellm/pull/40695) fix(proxy): enforce custom_key_update policy on /key/regenerate
- [#41173](https://github.com/BerriAI/litellm/pull/41173) fix(health): resolve litellm_credential_name in realtime health checks
- [#41208](https://github.com/BerriAI/litellm/pull/41208) fix(responses): backport mid-stream content_policy_violation fallback routing to stable/1.100.x
- [#40915](https://github.com/BerriAI/litellm/pull/40915) fix(vertex-live): bill Gemini Live sessions end to end (internal copy of #37075)
- [#41168](https://github.com/BerriAI/litellm/pull/41168) fix(bedrock): grant rerank, retrieve, agent, and agentcore actions in the web identity session policy
- [#41191](https://github.com/BerriAI/litellm/pull/41191) fix(router): count num_retries_per_request across fallback hops
- [#40984](https://github.com/BerriAI/litellm/pull/40984) fix(guardrails): scan the Anthropic top-level system prompt and tool_use arguments
- [#41188](https://github.com/BerriAI/litellm/pull/41188) test(spend): reconcile concurrent requests and daily activity
- [#41186](https://github.com/BerriAI/litellm/pull/41186) fix(cli): label router costs and simplify the routed-model header
- [#41194](https://github.com/BerriAI/litellm/pull/41194) test(e2e): verify streamed answers and tool continuation
- [#41072](https://github.com/BerriAI/litellm/pull/41072) fix(router): honor team and key provider weights
- [#40989](https://github.com/BerriAI/litellm/pull/40989) fix(responses): hoist Codex additional_tools input items into the chat bridge tools
- [#40994](https://github.com/BerriAI/litellm/pull/40994) fix(sdk): keep body and proxy headers on BadRequestError mapped from a litellm_proxy 400
- [#40228](https://github.com/BerriAI/litellm/pull/40228) fix(responses): preserve provider affinity
- [#39050](https://github.com/BerriAI/litellm/pull/39050) fix(guardrails): record not_run evaluation when scoping leaves nothing to scan
- [#41172](https://github.com/BerriAI/litellm/pull/41172) fix(proxy): log the provider usage on deferred /v1/messages calls and price cache writes without a creation rate
- [#40939](https://github.com/BerriAI/litellm/pull/40939) fix(guardrails): write per-message guardrail rewrites back onto Responses input items
- [#41181](https://github.com/BerriAI/litellm/pull/41181) fix(ci): test checked-out model pricing in unit jobs
- [#41149](https://github.com/BerriAI/litellm/pull/41149) test: add strict stateless provider replay identity
- [#40315](https://github.com/BerriAI/litellm/pull/40315) fix(headroom): protect cache_control-marked rows anywhere in history
- [#40892](https://github.com/BerriAI/litellm/pull/40892) test: bind management E2E callers and isolate JWT actors
- [#41157](https://github.com/BerriAI/litellm/pull/41157) fix(cost): bill gemini-embedding-2 per token and stop double charging audio
- [#40988](https://github.com/BerriAI/litellm/pull/40988) fix(responses): route mid-stream error events through exception_type so content_policy_fallbacks fire
- [#41046](https://github.com/BerriAI/litellm/pull/41046) fix(cli): drop enum.StrEnum so the CLI imports on Python 3.10

#### 🐛 New Issues
- [#41187](https://github.com/BerriAI/litellm/issues/41187) [Bug]: streaming_handler assigns raw SDK usage to ModelResponseStream without normalizing (regression in v1.94.0, #32255) `llm translation` 💬1
- [#41299](https://github.com/BerriAI/litellm/issues/41299) Native Responses WebSocket normalization drops returned service_tier, undercharging priority after #38856 `llm translation` 💬1
- [#41317](https://github.com/BerriAI/litellm/issues/41317) [Bug]: OpenAI Workload Identity Federation not applied on BaseLLMHTTPHandler routes (image edits, videos, vector stores, …) — sends "Authorization: Bearer None" `llm translation`
- [#41215](https://github.com/BerriAI/litellm/issues/41215) [Bug]: /v1/messages streaming + post-call guardrails: _on_deferred_native_stream_complete() takes 1 positional argument but 2 were given `llm translation` 💬1
- [#41176](https://github.com/BerriAI/litellm/issues/41176) [Bug]: /invitation/new 400s with misleading "User id does not exist" error on a fresh API-only deployment 💬1
- [#41344](https://github.com/BerriAI/litellm/issues/41344) [Bug]: Zero-cost budget bypass leaks unbounded spend when the free model has a paid fallback `llm translation`
- [#41185](https://github.com/BerriAI/litellm/issues/41185) [Bug]: Responses stream bridge never emits output_item.added for the message after a reasoning-first chunk (orphan output_text.delta) `llm translation`
- [#41262](https://github.com/BerriAI/litellm/issues/41262) Responses API bridge emits reasoning output item without required `summary` field (v1.96.2) `llm translation`
- [#41290](https://github.com/BerriAI/litellm/issues/41290) Cohere v2 chat: synthetic tool_call.index field leaks back into request, breaks multi-turn tool calling `llm translation`
- [#41301](https://github.com/BerriAI/litellm/issues/41301) [Bug]: fireworks_ai drops reasoning_content from assistant messages since 1.100.0 `SDK`
- [#41223](https://github.com/BerriAI/litellm/issues/41223) [Bug]: Caller-supplied request timeout can force primary deployment into cooldown `llm translation`
- [#41295](https://github.com/BerriAI/litellm/issues/41295) Virtual-key model allowlist bypass on the Azure pass-through route: /azure/openai/deployments/... resolves to no model, so the key scope check never runs `llm translation`
- [#41277](https://github.com/BerriAI/litellm/issues/41277) [Feature]: Cut a stable release that includes the fireworks_ai thinking_blocks fix (#27881) — newest *-stable* tag is v1.83.14, which predates it `llm translation` `claude code`
- [#41265](https://github.com/BerriAI/litellm/issues/41265) [Bug]: Presidio guardrail never scans tool-call arguments in conversation history, on both /v1/chat/completions and /v1/messages (not covered by #40984) `bug` `proxy` `llm translation` `claude code`
- [#41253](https://github.com/BerriAI/litellm/issues/41253) Native Responses API WebSocket mode doesn't restore/unwrap encrypted_content or apply encrypted_content_affinity, causing invalid_encrypted_content `llm translation`
- [#41249](https://github.com/BerriAI/litellm/issues/41249) Add Gemini Deep Research 04-2026 agent IDs to model pricing map; fix old agent mode `llm translation`
- [#41251](https://github.com/BerriAI/litellm/issues/41251) [Bug]: Azure OIDC token cache ignores scope and cached clients can retain expired tokens `proxy` `llm translation`
- [#41248](https://github.com/BerriAI/litellm/issues/41248) [Feature]: Represent zero values in bar charts `enhancement` `ui-dashboard`
- [#41238](https://github.com/BerriAI/litellm/issues/41238) [Bug]: /v1/audio/transcriptions and /v1/audio/speech fail with "LLM Provider NOT provided" when the provider is set via custom_llm_provider `proxy` `llm translation`
- [#41229](https://github.com/BerriAI/litellm/issues/41229) [Feature]: Guardrail setting to skip `assistant` role messages `enhancement` `proxy`
- [#41226](https://github.com/BerriAI/litellm/issues/41226) [Bug]: Proxy-admin JWT authentication bypasses personal max_budget `proxy`
- [#41225](https://github.com/BerriAI/litellm/issues/41225) [Bug]: Complexity auto-router session-affinity pin flaps across replicas — DualCache reads local in-memory before Redis `proxy` `llm translation`
- [#41224](https://github.com/BerriAI/litellm/issues/41224) [Bug]: Vertex AI Unit Tests Fail Consistently `bug` `llm translation` `SDK`
- [#41211](https://github.com/BerriAI/litellm/issues/41211) [Bug]: Budget Window reset hint hardcodes "midnight UTC" and wrong weekday, ignoring server timezone `ui-dashboard`
- [#41202](https://github.com/BerriAI/litellm/issues/41202) [Bug]: thinking-binding-controls-2026-08-01 beta header is stripped on /v1/messages, so thinking.block_binding 400s on Bedrock/Vertex `proxy` `llm translation`

#### 🔒 Closed Issues
- [#10788](https://github.com/BerriAI/litellm/issues/10788) [Bug]: INFO logging of incoming requests to the LiteLLM proxy server can not be switched off.
- [#36566](https://github.com/BerriAI/litellm/issues/36566) [Bug]: litellm_content_filter evaluations missing from request logs and Guardrails Monitor
- [#29680](https://github.com/BerriAI/litellm/issues/29680) Feature request: expose requested_model vs response_model mismatch signals in proxy logs
- [#29785](https://github.com/BerriAI/litellm/issues/29785) [Bug]: Test connection failing in the UI but Claude code is working
- [#30121](https://github.com/BerriAI/litellm/issues/30121) [Bug]: OTel gen_ai.input.messages / gen_ai.output.messages not set for anthropic_messages (/v1/messages) call type
- [#30129](https://github.com/BerriAI/litellm/issues/30129) Add "azure_ai/deepseek-v4-flash" and "azure_ai/deepseek-v4-pro" in "model_prices_and_context_window.json"
- [#34239](https://github.com/BerriAI/litellm/issues/34239) [Bug]: bedrock/zai.glm-5 tool_call ids exceed Bedrock's 64-char toolUseId limit on multi-turn tool calls
- [#41299](https://github.com/BerriAI/litellm/issues/41299) Native Responses WebSocket normalization drops returned service_tier, undercharging priority after #38856
- [#29995](https://github.com/BerriAI/litellm/issues/29995) [Bug]: `azure gpt-5.1-data` stream return all data at once
- [#30012](https://github.com/BerriAI/litellm/issues/30012) Preserve original PR authorship when squashing staging branches into main
- [#30120](https://github.com/BerriAI/litellm/issues/30120) Error
- [#41051](https://github.com/BerriAI/litellm/issues/41051) proxy-behavior: test_join_binds_the_membership_to_the_requested_team fails on main (org row missing from prefetched cache)
- [#37532](https://github.com/BerriAI/litellm/issues/37532) [Bug]: Proxy error/timeout logs omit litellm_call_id, making it impossible to correlate a logged exception with a specific request
- [#41223](https://github.com/BerriAI/litellm/issues/41223) [Bug]: Caller-supplied request timeout can force primary deployment into cooldown
- [#41249](https://github.com/BerriAI/litellm/issues/41249) Add Gemini Deep Research 04-2026 agent IDs to model pricing map; fix old agent mode
- [#40380](https://github.com/BerriAI/litellm/issues/40380) [Bug]: Anthropic /v1/messages pre_call guardrails silently skip historical tool_use blocks (tool-call arguments never scanned once they're in prior turns)
- [#39519](https://github.com/BerriAI/litellm/issues/39519) Headroom guardrail never uses prefix-stability API (frozen_message_count/session_id/v1/usage), breaks provider prompt caching

### Unsloth (`unslothai/unsloth`)

**Stars:** 76,210 · **Open issues:** 1,259 · **Last push:** <1h ago

On September 16, 2026, there were no new releases for Unsloth; however, several significant features and fixes were merged into the project. Notable enhancements included the addition of reasoning budget controls and prompt queue controls in Studio (#7701 and #10980), along with improved measures for handling antivirus interactions and installer behavior. Noteworthy fixes included the maintenance of recipe workers during request thread retirements (#11021) and optimizations for the NVIDIA driver library handling in Studio installations (#11008). A key issue that arose was a Windows setup failure due to an unexpected syntax error (#11012), highlighting ongoing challenges in cross-platform compatibility. Overall, it was a routine day with valuable contributions to enhancing the functionality and reliability of the platform.

#### ✅ Merged PRs
- [#7701](https://github.com/unslothai/unsloth/pull/7701) Studio: add reasoning budget controls
- [#10980](https://github.com/unslothai/unsloth/pull/10980) Studio: add prompt queue controls and composer preferences
- [#10999](https://github.com/unslothai/unsloth/pull/10999) Delete the emit apparatus that existed to colour a banner, now that measurement says it was a no-op
- [#10996](https://github.com/unslothai/unsloth/pull/10996) Give this work a before-and-after number, and find out the hardening already worked
- [#10994](https://github.com/unslothai/unsloth/pull/10994) Ask AMSI whether the installer compiles, which is the mechanism #10805 actually reports
- [#10992](https://github.com/unslothai/unsloth/pull/10992) Measure whether a hardening change alters what the installer does, instead of arguing that it does not
- [#10990](https://github.com/unslothai/unsloth/pull/10990) Stop the installers from explaining, in prose a classifier reads, which antivirus flagged them
- [#10986](https://github.com/unslothai/unsloth/pull/10986) Capture which antivirus product is actually blocking installs, and stop discarding the false-positive submission packets
- [#10984](https://github.com/unslothai/unsloth/pull/10984) Measure whether the host property can replace the native console thunk
- [#10439](https://github.com/unslothai/unsloth/pull/10439) Studio: accept OpenAI video_url content parts on /v1/chat/completions
- [#10978](https://github.com/unslothai/unsloth/pull/10978) WSL installer: stop running the C# compiler on the user's Windows machine
- [#10974](https://github.com/unslothai/unsloth/pull/10974) Studio: organize Data settings and make archives searchable
- [#11021](https://github.com/unslothai/unsloth/pull/11021) fix(studio): keep recipe workers alive when request threads retire
- [#10895](https://github.com/unslothai/unsloth/pull/10895) fix(studio): keep Studio's auth directory out of the tool loop
- [#11005](https://github.com/unslothai/unsloth/pull/11005) Studio runtime keeps the GPU when nvidia-smi cannot answer, and prefers a GPU-capable llama-server beside a CPU build
- [#11007](https://github.com/unslothai/unsloth/pull/11007) Studio installers read the NVIDIA driver library when nvidia-smi cannot answer, and setup.ps1 keeps a working GPU prebuilt over a source build
- [#10907](https://github.com/unslothai/unsloth/pull/10907) Studio: ask before a chat tool reads or writes outside the sandbox
- [#10973](https://github.com/unslothai/unsloth/pull/10973) Studio: stop a short chat video attachment from taking minutes to prefill
- [#11019](https://github.com/unslothai/unsloth/pull/11019) Format main to its own pinned hook, so pre-commit autofix can land again
- [#10972](https://github.com/unslothai/unsloth/pull/10972) Studio: stop iOS Safari zooming into chat text fields
- [#10780](https://github.com/unslothai/unsloth/pull/10780) Fix diffusion load cancellation during construction
- [#11008](https://github.com/unslothai/unsloth/pull/11008) Studio Linux update: torch repair and the source build read the NVIDIA driver library, a CPU wheel recorded as CUDA is repaired, a satisfied pin keeps the GPU prebuilt
- [#10763](https://github.com/unslothai/unsloth/pull/10763) Studio: Make installed Ollama models available through the API
- [#9138](https://github.com/unslothai/unsloth/pull/9138) fix(amd): let a pinned torch index carry a package extra, so RDNA1 can reach TheRock
- [#10746](https://github.com/unslothai/unsloth/pull/10746) fix(AMD): recognise the RX 6950 XT, 6850M XT and 6550M instead of leaving them on CPU torch
- [#9672](https://github.com/unslothai/unsloth/pull/9672) Linux: index AMD visible-device masks by device, and floor gfx1102/RDNA4 to rocm6.4
- [#7536](https://github.com/unslothai/unsloth/pull/7536) tests: pin the amd/huggingfacenotorch extras and name the audit failure
- [#8821](https://github.com/unslothai/unsloth/pull/8821) fix(amd): turn on PyTorch's fast ROCm attention kernels on import unsloth, and drop the installers' host-wide export
- [#10789](https://github.com/unslothai/unsloth/pull/10789) Studio: download image model assets without loading
- [#10989](https://github.com/unslothai/unsloth/pull/10989) Pre-import diffusers in the post-warm worker so the first image load does not
- [#10982](https://github.com/unslothai/unsloth/pull/10982) Close the AV shape-guard holes, and load the installers under RemoteSigned
- [#10979](https://github.com/unslothai/unsloth/pull/10979) Stop committing the two fixture archives that antivirus vendors flag
- [#11006](https://github.com/unslothai/unsloth/pull/11006) Studio prebuilt selection: Windows CUDA lines ordered by detected DLLs rather than filtered, portable fallback attempt, keep paths require SM coverage
- [#10981](https://github.com/unslothai/unsloth/pull/10981) Close the partially initialized torch._dynamo window on the diffusion load path
- [#10971](https://github.com/unslothai/unsloth/pull/10971) Studio: load the user's own Pi extensions and packages in unsloth start pi
- [#10243](https://github.com/unslothai/unsloth/pull/10243) Studio: show MTP companion download progress
- [#10788](https://github.com/unslothai/unsloth/pull/10788) Studio: expose image text encoder precision
- [#11003](https://github.com/unslothai/unsloth/pull/11003) Stop the video gate test failing on a rename it should not care about
- [#11001](https://github.com/unslothai/unsloth/pull/11001) Run the chat width presets in CI, and two guards main is currently red on
- [#10964](https://github.com/unslothai/unsloth/pull/10964) Desktop: extend the NVIDIA X11 WebKit fence fix to native packages
- [#10988](https://github.com/unslothai/unsloth/pull/10988) Say which unsloth_zoo revision Core tested, and warn when it is not main
- [#10987](https://github.com/unslothai/unsloth/pull/10987) Time the stall window test instead of counting polls
- [#10985](https://github.com/unslothai/unsloth/pull/10985) Studio: read the NVIDIA inventory from NVML or the CUDA driver when nvidia-smi cannot answer
- [#10975](https://github.com/unslothai/unsloth/pull/10975) Studio: keep a working GPU llama.cpp prebuilt over a CPU-only source fallback, and say so in the footer
- [#10911](https://github.com/unslothai/unsloth/pull/10911) Keep a passthrough SSE stream alive while llama-server prefills
- [#10937](https://github.com/unslothai/unsloth/pull/10937) Studio: accept the name field on chat messages
- [#10976](https://github.com/unslothai/unsloth/pull/10976) Studio: a Windows host whose NVIDIA GPU is hidden by CUDA_VISIBLE_DEVICES selects the CUDA bundle, not windows-cpu
- [#10942](https://github.com/unslothai/unsloth/pull/10942) Studio: fix unsloth start when port 8888 is already in use
- [#10675](https://github.com/unslothai/unsloth/pull/10675) fix: materialize strided LayerNorm inputs and gradients
- [#10958](https://github.com/unslothai/unsloth/pull/10958) Studio: add configurable chat width
- [#10952](https://github.com/unslothai/unsloth/pull/10952) Take the wall clock out of two backend guards that fail on a loaded runner
- [#10953](https://github.com/unslothai/unsloth/pull/10953) A first tool call must not answer from inside a legacy move's staging window
- [#10968](https://github.com/unslothai/unsloth/pull/10968) Name the Ascend NPU as its own tests expect, and close the spoofable skip-guard hole
- [#10966](https://github.com/unslothai/unsloth/pull/10966) studio: centre the chat column by reserving the scrollbar gutter on both edges
- [#10647](https://github.com/unslothai/unsloth/pull/10647) Studio: make studio/setup.sh read the recorded uv cache, and probe the cache the CLI hands it
- [#10933](https://github.com/unslothai/unsloth/pull/10933) Studio: show the right reasoning effort and image options for every API model
- [#10934](https://github.com/unslothai/unsloth/pull/10934) Studio: leave top_p out of external requests when set to Off
- [#10969](https://github.com/unslothai/unsloth/pull/10969) Studio: prevent chat options hover circle from overlapping titles
- [#10941](https://github.com/unslothai/unsloth/pull/10941) Studio: keep replaced replies out of ShareGPT exports
- [#10967](https://github.com/unslothai/unsloth/pull/10967) Studio: remove New badges from Remote & LAN and Shortcuts
- [#10954](https://github.com/unslothai/unsloth/pull/10954) Fix inline Python plot rendering and downloads
- [#10781](https://github.com/unslothai/unsloth/pull/10781) Allow removing missing images from the gallery
- [#10782](https://github.com/unslothai/unsloth/pull/10782) Use model-neutral image generation tooltips
- [#10935](https://github.com/unslothai/unsloth/pull/10935) Studio: keep nested tool call fields llama.cpp drops when written out of order
- [#10938](https://github.com/unslothai/unsloth/pull/10938) Studio: tell Codex when a chat is too long for the model
- [#4989](https://github.com/unslothai/unsloth/pull/4989) studio: configurable HuggingFace endpoint via HF_ENDPOINT env var
- [#10944](https://github.com/unslothai/unsloth/pull/10944) Studio: keep earlier messages in chats with images
- [#10943](https://github.com/unslothai/unsloth/pull/10943) Studio: fix Push to Hub for base and quantized exports
- [#10940](https://github.com/unslothai/unsloth/pull/10940) Studio: tell the model when a tool returns audio or a file
- [#10956](https://github.com/unslothai/unsloth/pull/10956) Studio: reinstall a missing PyTorch when unsloth studio update finds the package current
- [#10939](https://github.com/unslothai/unsloth/pull/10939) Studio: make the model use the tool the client asks for
- [#10955](https://github.com/unslothai/unsloth/pull/10955) Tests: stop the live no-torch server test from uninstalling torch from the Studio venv
- [#10446](https://github.com/unslothai/unsloth/pull/10446) Studio: keep created files outside the collapsed tool card
- [#9666](https://github.com/unslothai/unsloth/pull/9666) desktop: add interface scaling setting
- [#10902](https://github.com/unslothai/unsloth/pull/10902) Studio: keep the operator's package-manager policy in the installer
- [#10936](https://github.com/unslothai/unsloth/pull/10936) Studio: Show local LM Studio, Ollama and Hermes models when running in Docker
- [#10863](https://github.com/unslothai/unsloth/pull/10863) studio: compact the chat composer and add animated expansion

#### 🐛 New Issues
- [#11017](https://github.com/unslothai/unsloth/issues/11017) [Feature]Add easy model favoriting `feature request` 💬2
- [#11012](https://github.com/unslothai/unsloth/issues/11012) [Bug] Windows setup fails: Unexpected '[' (exit code 2) `feature request` `bug` 💬2
- [#10963](https://github.com/unslothai/unsloth/issues/10963) partially initialized module 'torch._dynamo' has no attribute 'utils' (most likely due to a circular import) `feature request` `bug` 💬2
- [#10995](https://github.com/unslothai/unsloth/issues/10995) Studio backend tests: the non-package loggers stub breaks collection when pytest runs from the repo root 💬2
- [#11029](https://github.com/unslothai/unsloth/issues/11029) [Bug] Unsloth Studio: a reordered CUDA_VISIBLE_DEVICES is flattened to ascending order before llama-server sees it 💬1
- [#10997](https://github.com/unslothai/unsloth/issues/10997) [Feature] MCP tools lazy loading `feature request`
- [#11030](https://github.com/unslothai/unsloth/issues/11030) [Feature] Extended filtering in the Model Hub (filter by model size, etc) `feature request`
- [#11010](https://github.com/unslothai/unsloth/issues/11010) Studio: a remote image_url is forwarded to llama-server, which fetches it from the host
- [#11002](https://github.com/unslothai/unsloth/issues/11002) [Bug] Data Recipe worker nondeterministically receives SIGTERM during generation `feature request` `bug`
- [#10983](https://github.com/unslothai/unsloth/issues/10983) Studio: durable chat runs persist an image_url or video_url data URI past the media gate

#### 🔒 Closed Issues
- [#3211](https://github.com/unslothai/unsloth/issues/3211) [Bug] The program enters an infinite loop when fine-tuning Qwen3 with unsloth-2025.7.1 or later versions
- [#3188](https://github.com/unslothai/unsloth/issues/3188) [Feature] Request: Support for Text-to-Image and Image-Text-to-Image Generation Models
- [#1635](https://github.com/unslothai/unsloth/issues/1635) Allow vLLM on 2nd GPU for GRPO training
- [#6276](https://github.com/unslothai/unsloth/issues/6276) [Bug] [Studio] Bundled ROCm runtime in rocm-gfx1151 prebuilt segfaults on bare-metal Strix Halo (Ryzen AI MAX+ 395) — works with system ROCm
- [#617](https://github.com/unslothai/unsloth/issues/617) Random Training
- [#946](https://github.com/unslothai/unsloth/issues/946) Single token output / binary classification loss goes to 0
- [#4983](https://github.com/unslothai/unsloth/issues/4983) install issues
- [#3607](https://github.com/unslothai/unsloth/issues/3607) [Bug] TypeError with device_map='auto' and Accelerate 0.34.1+ when using SFTTrainer
- [#5641](https://github.com/unslothai/unsloth/issues/5641) [Feature] Many Unsloth Studio suggestions
- [#976](https://github.com/unslothai/unsloth/issues/976) Performance of the finetuned model in unsloth notebook and Ollama/GGUF differ significantly
- [#1067](https://github.com/unslothai/unsloth/issues/1067) Evaluation loss becomes constant
- [#8854](https://github.com/unslothai/unsloth/issues/8854) [Bug] Asking a model to list all files in a thread/project or knowledge base throws tool error - Add ability to write new files, as well as read + edit existing files (RAG issue)
- [#2327](https://github.com/unslothai/unsloth/issues/2327) TypeError: TextEncodeInput must be Union[TextInputSequence, Tuple[InputSequence, InputSequence]]
- [#3573](https://github.com/unslothai/unsloth/issues/3573) Add Support for Custom Rollout Function in GRPOTrainer (like TRL)
- [#2748](https://github.com/unslothai/unsloth/issues/2748) [Bug] Unrecognized video processor Qwen 2.5-VL 3B
- [#1223](https://github.com/unslothai/unsloth/issues/1223) Adding New Tokens
- [#7203](https://github.com/unslothai/unsloth/issues/7203) [Bug] qwen3.5 9b not ever reaching first step + gemma 4 26b a4b OOM QLoRa with batch size 1 on 96GB VRAM
- [#4294](https://github.com/unslothai/unsloth/issues/4294) Unsloth: Saving LoRA finetune failed since # of LoRAs = 128 does not match # of saved modules = 0. Please file a bug report!
- [#3646](https://github.com/unslothai/unsloth/issues/3646) [Bug] Method _from_pretrained in Class PreTrainedTokenizerBase of tokenization_utils_base.py is not robust
- [#3617](https://github.com/unslothai/unsloth/issues/3617) [Bug] Qwen2.5-VL + streaming HF dataset: RuntimeError: shape '[0, 4, -1]' is invalid in visual encoder
- [#1101](https://github.com/unslothai/unsloth/issues/1101) Getting CUDA OOM on training gemma-2-2b with "lm_head" and "embed_token" target projects.
- [#1094](https://github.com/unslothai/unsloth/issues/1094) AttributeError: 'LlamaForCausalLM' object has no attribute 'save_pretrained_gguf'
- [#470](https://github.com/unslothai/unsloth/issues/470) Pushing to Hugging Face hub branches (revisions) and tags not working
- [#5415](https://github.com/unslothai/unsloth/issues/5415) [Feature] Support plan for Qwen3.5 FP8 + vLLM standby mode in GRPO training?
- [#4801](https://github.com/unslothai/unsloth/issues/4801) [Bug] RuntimeError: Sizes of tensors must match in apply_rotary_pos_emb when using Qwen3.5 with TRL GRPOTrainer
- [#3721](https://github.com/unslothai/unsloth/issues/3721) Qwen2.5-1.5B Base fails to generate `eos_token` and repeats endlessly, unlike the Unsloth version
- [#3647](https://github.com/unslothai/unsloth/issues/3647) [Bug] Can't load tokenizer through FastModel.from_pretrained while loading local cached model
- [#2629](https://github.com/unslothai/unsloth/issues/2629) [Bug] Qwen 2.5 VL 7B full fine tuning
- [#2489](https://github.com/unslothai/unsloth/issues/2489) [Bug] import unsloth failed and shows UnicodeDecodeError
- [#2333](https://github.com/unslothai/unsloth/issues/2333) Ask for OLMoE support
- [#2012](https://github.com/unslothai/unsloth/issues/2012) [bug] when set report_to = "clearml",will get error
- [#1832](https://github.com/unslothai/unsloth/issues/1832) drastic drop in text generation when model is loaded using vllm
- [#1785](https://github.com/unslothai/unsloth/issues/1785) Unablr to run GRPO in Runpod
- [#1093](https://github.com/unslothai/unsloth/issues/1093) Lora adapter is almost as large as model
- [#7697](https://github.com/unslothai/unsloth/issues/7697) Windows: unsloth studio update cannot replace the running unsloth.exe (WinError 32)
- [#6308](https://github.com/unslothai/unsloth/issues/6308) [Bug] ROCM/AMD not working with latest Studio builds.
- [#3764](https://github.com/unslothai/unsloth/issues/3764) [Bug] Error when install unsloth docker in ASUS Ascent GX10
- [#3642](https://github.com/unslothai/unsloth/issues/3642) [Feature] Support for Search-r1
- [#3615](https://github.com/unslothai/unsloth/issues/3615) [Feature] Support for Multi Turn GRPO
- [#3454](https://github.com/unslothai/unsloth/issues/3454) [Bug] Merged Model collapse while LoRA model works well
- [#3376](https://github.com/unslothai/unsloth/issues/3376) [Bug] Qwen3-4b-Instuct-2507-bnb-4bit : AttributeError: module 'transformers.models.bit.modeling_bit' has no attribute 'Linear'
- [#3249](https://github.com/unslothai/unsloth/issues/3249) [Bug] 'Qwen3ForCausalLM' object has no attribute 'disable_adapter' with FFT
- [#2031](https://github.com/unslothai/unsloth/issues/2031) The bug encountered when running the official fine-tuning example code for Qwen 2-VL.
- [#1817](https://github.com/unslothai/unsloth/issues/1817) Unsloth GRPO trainer error - IndexError: argmax(): Expected reduction dim 1 to have non-zero size.
- [#1757](https://github.com/unslothai/unsloth/issues/1757) How to export dynamic quants Qwen2-VL/Qwen2.5-VL into gguf file
- [#1680](https://github.com/unslothai/unsloth/issues/1680) Failed to import trl.trainer.grpo_trainer because of the following error: No module named 'resource'
- [#1656](https://github.com/unslothai/unsloth/issues/1656) cannot open shared object file: No such file or directory
- [#1424](https://github.com/unslothai/unsloth/issues/1424) Unslot fine tunes no longer work out of the box with GPT4ALL as of update 3.5 and 3.5.1 .... 3.4.2 still working.
- [#242](https://github.com/unslothai/unsloth/issues/242) Anyone wanna attempt tweaking unsloth for Mamba-2.8b?
- [#7524](https://github.com/unslothai/unsloth/issues/7524) [Feature] reasoning-budget and reasoning-budget-message support?
- [#10805](https://github.com/unslothai/unsloth/issues/10805) [Bug] install.ps1 is flagged by antivirus, unable to proceed with update via powershell
- [#9874](https://github.com/unslothai/unsloth/issues/9874) [Bug] macOS arm64 prebuilt b10639 links /usr/lib/librdma.dylib — unloadable on macOS < 26
- [#8972](https://github.com/unslothai/unsloth/issues/8972) [Bug] Backend mismatch: Intel
- [#6757](https://github.com/unslothai/unsloth/issues/6757) Context length capped at 4096 on unified-memory NVIDIA (DGX Spark / GB10): mem_get_info free is misleading, unified-memory path is AMD-only
- [#6661](https://github.com/unslothai/unsloth/issues/6661) [Feature] Finetuning support for PaddlePaddle/PaddleOCR-VL-1.6
- [#3872](https://github.com/unslothai/unsloth/issues/3872) [Bug] Error on B200s
- [#3476](https://github.com/unslothai/unsloth/issues/3476) [Bug] Qwen3VL-8B Trying to backward through the graph a second time.... Error
- [#3141](https://github.com/unslothai/unsloth/issues/3141) [Bug] Inconsistent results and downloading model file in tutorial DeepSeek_R1_0528_Qwen3_(8B)_GRPO.ipynb
- [#2541](https://github.com/unslothai/unsloth/issues/2541) [Feature] GRPO rollout by interaction with tools
- [#2456](https://github.com/unslothai/unsloth/issues/2456) [Bug] Qwen3: Evaluation loss doesn't work! (works only at step 0)
- [#1957](https://github.com/unslothai/unsloth/issues/1957) Fine-tuning always shows training loss 0.00000 at early logging steps—Is this normal?
- [#1592](https://github.com/unslothai/unsloth/issues/1592) Trainer Updating Only One Adapter During Fine-Tuning with Multiple Adapters and a Router
- [#1389](https://github.com/unslothai/unsloth/issues/1389) Saving GGUF for Ollama: CUDA driver error: out of memory
- [#10389](https://github.com/unslothai/unsloth/issues/10389) qwen3.6 35B A3B​ MLX API issue
- [#3839](https://github.com/unslothai/unsloth/issues/3839) [Bug] IBM Granite finetuning failed, even after running notebook as is
- [#9290](https://github.com/unslothai/unsloth/issues/9290) [Feature] Unsloth Desktop - Add support for skills
- [#8666](https://github.com/unslothai/unsloth/issues/8666) [Bug] MiniMax-H3 video generation fails: qwen3vl prepare graph weights failed (sd-cli exited -6)
- [#6071](https://github.com/unslothai/unsloth/issues/6071) [Bug] Qwen3.5 / Qwen3.6 GGUF export pipeline truncates trailing 'ssm_conv1d.weight' tensors in final layers
- [#4430](https://github.com/unslothai/unsloth/issues/4430) [Bug] requests [ERROR] npm run build failed (exit code 2)
- [#3932](https://github.com/unslothai/unsloth/issues/3932) [Bug] embeddinggemma saving issue
- [#3847](https://github.com/unslothai/unsloth/issues/3847) [Bug] Transformers 5: save_pretrained_torchao not working
- [#2973](https://github.com/unslothai/unsloth/issues/2973) [Bug] unwrap_model_for_generation switches model mode from eval to train
- [#2902](https://github.com/unslothai/unsloth/issues/2902) Bug Report: `ValueError: Attempting to unscale FP16 gradients` during training with `fp16=False (ModernBERT-large)
- [#2859](https://github.com/unslothai/unsloth/issues/2859) Fatal Python error: none_dealloc during second training run in hyperparameter grid search
- [#2335](https://github.com/unslothai/unsloth/issues/2335) [Feature] Support for AprielForCasualLM
- [#2317](https://github.com/unslothai/unsloth/issues/2317) [QST] Cannot find any model weights with `unsloth/Phi-4-mini-instruct-unsloth-bnb-4bit`
- [#1840](https://github.com/unslothai/unsloth/issues/1840) [GRPO] Changing QLoRA to LoRA or increasing num_gen does not affect VRAM
- [#1558](https://github.com/unslothai/unsloth/issues/1558) [Fixing] Better exporting to `llama.cpp` and 16bit merging
- [#1398](https://github.com/unslothai/unsloth/issues/1398) Add support for florence-2
- [#287](https://github.com/unslothai/unsloth/issues/287) Support for Databricks DBRX models
- [#10875](https://github.com/unslothai/unsloth/issues/10875) [Bug] Windows ARM64 desktop installer fails on pyarrow while CLI succeeds
- [#10917](https://github.com/unslothai/unsloth/issues/10917) [Bug] Connection to certain cloud models fail due to Run settings including conflicting parameters
- [#10176](https://github.com/unslothai/unsloth/issues/10176) KV admission: the uncapped-cap exemption for tools is wider than the retry that motivates it
- [#9581](https://github.com/unslothai/unsloth/issues/9581) [Feature] AMD Docker image
- [#8458](https://github.com/unslothai/unsloth/issues/8458) [Bug] AMD RX 580 not detected with UNSLOTH_FORCE_VULKAN=1 until clean reinstall
- [#8456](https://github.com/unslothai/unsloth/issues/8456) [Bug] × Failed to download `torch==2.11.0+cu130` // Fix: dump (garbage) pip in the script, use wget instead.
- [#6992](https://github.com/unslothai/unsloth/issues/6992) Add support for fine tuning embedding model: https://huggingface.co/microsoft/harrier-oss-v1-0.6b
- [#6913](https://github.com/unslothai/unsloth/issues/6913) [Bug] api issue
- [#6373](https://github.com/unslothai/unsloth/issues/6373) Getting error after addition of "apache-tvm-ffi==0.1.9" "tilelang==0.1.8" packages
- [#5193](https://github.com/unslothai/unsloth/issues/5193) [Feature request] [Studio] There is no way to import and export the dataset
- [#4036](https://github.com/unslothai/unsloth/issues/4036) ValueError: NYI: Currently non power of 2 embedding dimension are not supported. Got E=72 and Ev=72.
- [#3601](https://github.com/unslothai/unsloth/issues/3601) [ Potential issue ] Decoding input_ids may use the different chat template due to the keyword "thinking" from final assistant.
- [#3530](https://github.com/unslothai/unsloth/issues/3530) [Feature] Multi-GPU support in VLM Reinforcement Learning
- [#3439](https://github.com/unslothai/unsloth/issues/3439) [Bug] Getting Qwen3ForCausalLM.forward() got multiple values for argument 'input_ids' with GRPO
- [#3310](https://github.com/unslothai/unsloth/issues/3310) We are eager to support the Hunyuan-MT-7B model.
- [#3206](https://github.com/unslothai/unsloth/issues/3206) [Bug] Classification weights not loading properly
- [#3067](https://github.com/unslothai/unsloth/issues/3067) [Bug] 'LlamaForCausalLM' object has no attribute 'disable_adapter'. Did you mean: 'disable_adapters'?
- [#3064](https://github.com/unslothai/unsloth/issues/3064) [Bug] AttributeError: 'Qwen3ForCausalLM' object has no attribute 'disable_adapter'.
- [#2802](https://github.com/unslothai/unsloth/issues/2802) [Bug] OOM when loading checkpoint
- [#2440](https://github.com/unslothai/unsloth/issues/2440) CUDA Error during Qwen2.5-VL Fine-Tuning on Videos
- [#1909](https://github.com/unslothai/unsloth/issues/1909) LINK : fatal error LNK1181: cannot open input file 'aio.lib' & 'cufile.lib'
- [#1775](https://github.com/unslothai/unsloth/issues/1775) GRPO trainer without fast inference and vllm, trained for 1000 steps on Windows OS, resulting in 0 reward.
- [#1756](https://github.com/unslothai/unsloth/issues/1756) fine-tuned llama3.2 models do not provide output while inferencing
- [#1682](https://github.com/unslothai/unsloth/issues/1682) When loading a saved adapter, the tokenizer is not fast.
- [#410](https://github.com/unslothai/unsloth/issues/410) Request to support RWKV and Mamba SSMs
- [#176](https://github.com/unslothai/unsloth/issues/176) Unsloth: ai-forever/ruGPT-3.5-13B not supported yet!
- [#8819](https://github.com/unslothai/unsloth/issues/8819) [Bug] AMD: pip-installed unsloth leaves the ROCm AOTriton gate shut, so SDPA falls to MATH and finetuning OOMs at a fraction of the context the card holds
- [#10963](https://github.com/unslothai/unsloth/issues/10963) partially initialized module 'torch._dynamo' has no attribute 'utils' (most likely due to a circular import)
- [#10912](https://github.com/unslothai/unsloth/issues/10912) [Bug] unsloth start pi: frequent "Error: terminated" / "Retry failed after 3 attempts: terminated" on slow CPU hosts
- [#11029](https://github.com/unslothai/unsloth/issues/11029) [Bug] Unsloth Studio: a reordered CUDA_VISIBLE_DEVICES is flattened to ascending order before llama-server sees it
- [#10881](https://github.com/unslothai/unsloth/issues/10881) Training for Krea2 LORA
- [#10839](https://github.com/unslothai/unsloth/issues/10839) [Bug] MCP call is systematically truncated and cannot be bypassed (deduplication problem?)
- [#10127](https://github.com/unslothai/unsloth/issues/10127) image generation API.
- [#8142](https://github.com/unslothai/unsloth/issues/8142) [Bug] no token usage when using tencent code buddy
- [#4162](https://github.com/unslothai/unsloth/issues/4162) [Bug] version 2026.3.1 has multiple GPU bug when doing CPT with Qwen3.5
- [#2139](https://github.com/unslothai/unsloth/issues/2139) Setup a versioning system similar to revision from huggingface
- [#1428](https://github.com/unslothai/unsloth/issues/1428) Tokens unrecognized. Using unsloth model and tokenizer "unsloth/Llama-3.2-11B-Vision-Instruct"
- [#10350](https://github.com/unslothai/unsloth/issues/10350) [Bug] torch.dynamo circular import error when running Z-Image-GGUF (Q4_K_M) in Unsloth Desktop
- [#9255](https://github.com/unslothai/unsloth/issues/9255) [Bug] A failed llama.cpp prebuilt install silently falls back to a CPU-only build on a CUDA host
- [#9649](https://github.com/unslothai/unsloth/issues/9649) Studio: expose Thinking controls for Ollama connections and forward reasoning_effort
- [#10425](https://github.com/unslothai/unsloth/issues/10425) [Bug] Files created by the Code tool are hidden inside the collapsed tool card, no preview for sandbox .html
- [#10947](https://github.com/unslothai/unsloth/issues/10947) Strange errors
- [#10946](https://github.com/unslothai/unsloth/issues/10946) Unexpected overfit problem
- [#10945](https://github.com/unslothai/unsloth/issues/10945) Unable to launch because it still forces me to run the .bat
- [#10051](https://github.com/unslothai/unsloth/issues/10051) Proposal: one Ollama scanner for both inventory stacks
- [#10795](https://github.com/unslothai/unsloth/issues/10795) [Unsloth Bug] X11 + NVIDIA: WebKitWebProcess leaks DMA-BUF sync_file fds until EMFILE — blank/frozen window (looks like a hang)

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,090 · **Open issues:** 379 · **Last push:** 7h ago

On September 16, 2026, AIBrix did not release any new versions, but several notable updates were made through merged pull requests. The key changes included the introduction of per-replica inflight and RPS (Requests Per Second) limits to config profiles, enhancing scalability and performance management. Additionally, a fix was implemented to correct a typo in the SetOutputPreditor API within the RoutingContext, improving the clarity of the codebase. There were no new issues reported today, indicating a stable development environment. Overall, it was a routine maintenance day with a focus on optimizing existing features.

#### ✅ Merged PRs
- [#2731](https://github.com/vllm-project/aibrix/pull/2731) [Misc] Fix SetOutputPreditor typo in RoutingContext API
- [#2726](https://github.com/vllm-project/aibrix/pull/2726) feat: [API] Add per-replica inflight and RPS limits to config profiles

#### 🔒 Closed Issues
- [#2670](https://github.com/vllm-project/aibrix/issues/2670) [RFC]: Add pending replica guard to PodAutoscaler KPA/APA to prevent cascading scale-up
- [#2561](https://github.com/vllm-project/aibrix/issues/2561) Discussion: Cache-aware rescheduling for recreated StormService/RoleSet pods

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 5,834 · **Open issues:** 579 · **Last push:** 5h ago

On September 16, 2026, there were no new releases for the Semantic Router; however, significant development activity included the merging of pull request #3769, which adopted Vela models and strengthened router recipes, enhancing the overall functionality of the router. In addition to this, several new issues were reported, including a critical bug (#3831) where Vela Guard misclassifies benign and attack inputs on CPU and AMD systems, highlighting potential security vulnerabilities. Other notable new issues included #3833, which deals with preserving optional model fields when normalizing the Dashboard catalog, and #3822, where hot reload accepts tracing changes without reconfiguring the exporter, reflecting areas needing immediate attention by developers.

#### ✅ Merged PRs
- [#3769](https://github.com/vllm-project/semantic-router/pull/3769) [Feature] Adopt Vela models and strengthen router recipes

#### 🐛 New Issues
- [#3833](https://github.com/vllm-project/semantic-router/issues/3833) [Bug] Preserve optional model fields when normalizing the Dashboard catalog `bug` `accepted` `wg/developer-experience-ecosystem` 💬1
- [#3832](https://github.com/vllm-project/semantic-router/issues/3832) [Bug] Open runtime model details from Router Intelligence cards `bug` `accepted` `wg/developer-experience-ecosystem` 💬1
- [#3831](https://github.com/vllm-project/semantic-router/issues/3831) [Bug] Vela Guard misclassifies fixed benign and attack inputs on CPU and AMD `bug` `accepted` `wg/router-models-inference-runtime` 💬1
- [#3826](https://github.com/vllm-project/semantic-router/issues/3826) [Bug] Built-in Vault positive probes exceed the Vela triage budget `bug` `accepted` `wg/mom-routing` 💬1
- [#3823](https://github.com/vllm-project/semantic-router/issues/3823) [Bug] Diagnostic input-limit rejection returns a server error `bug` `accepted` `wg/router-models-inference-runtime` 💬1
- [#3822](https://github.com/vllm-project/semantic-router/issues/3822) [Bug] Hot reload accepts tracing changes without reconfiguring the exporter `bug` `accepted` `wg/data-plane-networking` 💬1
- [#3819](https://github.com/vllm-project/semantic-router/issues/3819) [Bug] Minimal serve exports traces to an absent local collector `bug` `accepted` `wg/developer-experience-ecosystem` 💬1
- [#3818](https://github.com/vllm-project/semantic-router/issues/3818) [Bug] Routing preview hides base selection failures behind protection `bug` `needs-acceptance` `accepted` `wg/mom-routing` 💬1
- [#3817](https://github.com/vllm-project/semantic-router/issues/3817) [Bug] Model inventory does not reflect prepared Vela bindings or GPU use `bug` `accepted` `wg/router-models-inference-runtime` 💬1
- [#3816](https://github.com/vllm-project/semantic-router/issues/3816) [Bug] CLI infers a reasoning contract from a custom model name `bug` `accepted` `wg/developer-experience-ecosystem` 💬1
- [#3815](https://github.com/vllm-project/semantic-router/issues/3815) [Bug] Vela default windows override custom classifier input policies `bug` `accepted` `wg/router-models-inference-runtime` 💬1
- [#3812](https://github.com/vllm-project/semantic-router/issues/3812) [Bug] xAI and Groq replies fail with 502 through the router `needs-acceptance` `wg/data-plane-networking`
- [#3811](https://github.com/vllm-project/semantic-router/issues/3811) [Bug] Kubernetes CRDs can report Ready before runtime activation succeeds `needs-acceptance`

#### 🔒 Closed Issues
- [#3423](https://github.com/vllm-project/semantic-router/issues/3423) [Bug] Semantic cache ignores the compatibility fingerprint

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*