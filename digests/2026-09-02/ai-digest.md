# 📡 AI Ecosystem Digest — 2026-09-02

> Generated 2026-09-02 00:52 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 143,703 | 16 | 23 | 0 | 2 |
| [OpenAI Codex](https://github.com/openai/codex) | 120,691 | 18 | 3 | 50 | 5 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 106,761 | 0 | 0 | 1 | 3 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,133 | 12 | 4 | 0 | 1 |
| [OpenCode](https://github.com/anomalyco/opencode) | 203,073 | 25 | 11 | 3 | 1 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 27,559 | 31 | 12 | 3 | 1 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 388,526 | 222 | 138 | 145 | 1 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 239,515 | 24 | 0 | 0 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 90,704 | 50 | 27 | 51 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 33,060 | 19 | 11 | 69 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 126,683 | 28 | 10 | 23 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 179,921 | 9 | 2 | 5 | 1 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 57,774 | 21 | 21 | 98 | 2 |
| [Unsloth](https://github.com/unslothai/unsloth) | 75,440 | 16 | 14 | 53 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,051 | 0 | 1 | 4 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 5,480 | 16 | 6 | 11 | 0 |

---

## ✨ Highlights

- **Claude Code** released versions [v2.1.258](https://github.com/anthropics/claude-code/releases/tag/v2.1.258) and [v2.1.257](https://github.com/anthropics/claude-code/releases/tag/v2.1.257).
- **OpenAI Codex** introduced multiple releases, including [rust-v0.153.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.153.0-alpha.4).
- **Gemini CLI** released [v0.59.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.59.0-preview.0).
- A significant new issue emerged in **OpenClaw** with [#135171](https://github.com/openclaw/openclaw/issues/135171), detailing a crash-loop caused by the bundled Perplexity.
- In **llama.cpp**, a critical issue was reported in [#28134](https://github.com/ggml-org/llama.cpp/issues/28134), highlighting an eval bug that aborts model loading on certain GPUs, accumulating 11 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 143,703 · **Open issues:** 15,094 · **Last push:** 2h ago

On September 2, 2026, Claude Code released versions v2.1.258 and v2.1.257, introducing crucial fixes including a resolution for the launch issue on macOS 12 and addressing problems with remote session messages. Version v2.1.257 also added the new default Fable model, Claude Fable 5.1, featuring a 1M context along with new time format and time zone settings for enhanced user customization. Notably, among the newly reported issues, #91296 highlights a potential oversight with the `defaultMode: bypassPermissions` not functioning as expected, raising concerns from users about its integration into workflow.

#### 🚀 New Releases
- [v2.1.258](https://github.com/anthropics/claude-code/releases/tag/v2.1.258) v2.1.258
- [v2.1.257](https://github.com/anthropics/claude-code/releases/tag/v2.1.257) v2.1.257

#### 🐛 New Issues
- [#91296](https://github.com/anthropics/claude-code/issues/91296) defaultMode: bypassPermissions in .claude/settings.local.json silently ignored, missing from Shift+Tab cycle `bug` `has repro` `platform:macos` `area:permissions` 💬1
- [#91345](https://github.com/anthropics/claude-code/issues/91345) [BUG] Fable 5.1 requires unstable release of Claude Code `bug` `has repro` `platform:macos` `area:model` 💬3
- [#91358](https://github.com/anthropics/claude-code/issues/91358) [BUG] Can not /login via SSH - URL is not displayed nor is it copy-able `bug` `duplicate` `area:tui` `area:auth`
- [#91357](https://github.com/anthropics/claude-code/issues/91357) [BUG] Windows installer cannot recover when the MSIX install volume is physically removed — orphaned package + stale packaged service block AddPackage permanently `bug` `platform:windows` `area:cowork` `area:installation`
- [#91356](https://github.com/anthropics/claude-code/issues/91356) [FEATURE] Setting to suppress update notification without disabling auto-update `enhancement` `area:tui`
- [#91355](https://github.com/anthropics/claude-code/issues/91355) [Bug] False positive safety filter: legitimate database code flagged as biohazard content `bug` `platform:linux` `area:model` `needs-repro`
- [#91305](https://github.com/anthropics/claude-code/issues/91305) [BUG] Gmail MCP: update_draft on a correctly-threaded draft returns a new orphaned threadId `bug` `external` `area:mcp`
- [#91307](https://github.com/anthropics/claude-code/issues/91307) MCP server (Gitea) fails auth in Desktop app, connects immediately after resuming same session in Terminal app, no config changes `bug` `has repro` `platform:macos` `area:mcp`
- [#91354](https://github.com/anthropics/claude-code/issues/91354) I appreciate you sharing details about your authorized bug bounty work, but I need to clarify something important: **This is not a bug report for Claude Code.** You're describing security testing work you're conducting on a third-party e-commerce platform `invalid`
- [#91351](https://github.com/anthropics/claude-code/issues/91351) [Bug] Context Compaction Loses Task State and Recent Work Details `bug` `platform:linux` `area:core`
- [#91350](https://github.com/anthropics/claude-code/issues/91350) [Bug] Auto mode classifier generates unsafe `awk` commands with large unintended replacement radius `bug` `platform:linux` `area:bash` `area:permissions`
- [#91353](https://github.com/anthropics/claude-code/issues/91353) Duplicate background-agent execution on same target (Agent tool + SendMessage resume) `bug` `area:agents`
- [#91352](https://github.com/anthropics/claude-code/issues/91352) I need more information to generate a GitHub issue title. Please provide the bug report or issue description you'd like me to create a title for. `bug` `platform:macos` `needs-info`
- [#91349](https://github.com/anthropics/claude-code/issues/91349) Session's declared worktree path sometimes not populated by git worktree add — falls through to shared main checkout `bug` `area:core`
- [#91348](https://github.com/anthropics/claude-code/issues/91348) I don't have a bug report to analyze. Please provide the bug report or issue description you'd like me to generate a GitHub issue title for. `invalid`
- [#91347](https://github.com/anthropics/claude-code/issues/91347) [BUG] claude states that it is a subagent `bug` `platform:windows` `area:model` `area:agents`

#### 🔒 Closed Issues
- [#75165](https://github.com/anthropics/claude-code/issues/75165) [BUG] Title: Nested sub-agents spawned by general-purpose agents are invisible and uncontrollable by both the parent session and the user
- [#75792](https://github.com/anthropics/claude-code/issues/75792) [Bug][cyber] Safety block fired on innocent technical request during legitimate hardware debugging session (req_011Ccq4qQMX8h4JMButvzEf9)
- [#75788](https://github.com/anthropics/claude-code/issues/75788) [Bug][cyber] MAC address sweep on personal devices wrongly flagged as cybersecurity threat (req_011Ccq2iQpcrsFEHzRwTAmF9)
- [#75791](https://github.com/anthropics/claude-code/issues/75791) [Bug][cyber] Flagged personal hardware device communication as cybersecurity topic (req_011Ccq4bSaaM23ttSAJUdqqa)
- [#75787](https://github.com/anthropics/claude-code/issues/75787) [Bug][cyber] System admin device configuration scan review blocked mid-workflow on frustration (req_011Ccq2dkeavEmD8oP1v9txh)
- [#75775](https://github.com/anthropics/claude-code/issues/75775) [Bug][cyber] Firmware reverse-engineering and authentication analysis on owned device blocked (req_011CcpziRkCdprJVbHjKKeLy)
- [#75784](https://github.com/anthropics/claude-code/issues/75784) [Bug][cyber] False positive blocking personal device diagnostic analysis work (req_011Ccq2ZQBfstotcVH7qN7Sd)
- [#75785](https://github.com/anthropics/claude-code/issues/75785) [Bug][cyber] Safety block halts network packet analysis after user frustration exclamation (req_011Ccq2cQSssQ5Bcyy88Xuar)
- [#75555](https://github.com/anthropics/claude-code/issues/75555) [Bug][cyber] Safety block halts static APK analysis on personal Android device (req_011Ccoxy1X7DHomS8UsFWMYM)
- [#75778](https://github.com/anthropics/claude-code/issues/75778) [Bug][cyber] Safety block halted device traffic debugging after vented frustration (req_011CcpzoDbLt22hAJh9sJ8tV)
- [#75719](https://github.com/anthropics/claude-code/issues/75719) [Bug][cyber] Safety block halts session on frustrated user exclamation during work (req_011CcpqMkHnQet8Vk2ndZk77)
- [#75553](https://github.com/anthropics/claude-code/issues/75553) [Bug][cyber] Safety block incorrectly flags ADB debugging on personally-owned device (req_011Ccoxt7tCgZ6pkrFz3yAV2)
- [#75554](https://github.com/anthropics/claude-code/issues/75554) [Bug][cyber] ClAudit false-positive while: “its on the pixel8 wireless adb…” (req_011CcoxxCvvTVhmdwiTWWLbi)
- [#75550](https://github.com/anthropics/claude-code/issues/75550) [Bug][cyber] HMAC authentication code development blocked by overly-broad crypto classifier (req_011CcowZRmLbN6rxggQDi5ei)
- [#75551](https://github.com/anthropics/claude-code/issues/75551) [Bug][cyber] Safety block halts documentation review of authentication protocol handshake (req_011CcoxLdBverVzm3jG947zw)
- [#75539](https://github.com/anthropics/claude-code/issues/75539) [Bug][cyber] False positive on legitimate signature verification and protocol analysis (req_011CcotxiqnVpK82PNF1BLtF)
- [#75364](https://github.com/anthropics/claude-code/issues/75364) [Bug][cyber] False block on authorized Frida memory inspection of development device (req_011CcoAjdGB9Xs5QVtMUc2Sj)
- [#75370](https://github.com/anthropics/claude-code/issues/75370) [Bug][cyber] Safety block halts legitimate code review of authentication implementation in Android codebase (req_011CcoDGGkVY4xhCXJShhV3z)
- [#75363](https://github.com/anthropics/claude-code/issues/75363) [Bug][cyber] False positive: blocked Android debugging after user frustration venting (req_011CcoAgGwE3p61cynoQkCi3)
- [#75365](https://github.com/anthropics/claude-code/issues/75365) [Bug][cyber] Safety block halted reverse-engineering on personal Android device via frida (req_011CcoAkdyNXXZUGCyzRHYhB)
- [#75361](https://github.com/anthropics/claude-code/issues/75361) [Bug][cyber] Standard Android debugging tools blocked during legitimate reverse-engineering (req_011CcoAPQnnBADcFmQgLUqwq)
- [#75348](https://github.com/anthropics/claude-code/issues/75348) [Bug][cyber] Reverse-engineering investigation blocked during flight data analysis (req_011Cco8sCYdMz8m4hPS2NB5Z)
- [#75371](https://github.com/anthropics/claude-code/issues/75371) [Bug][cyber] Code-review halted by cybersecurity block on frustrated user venting (req_011CcoDKJmNEXtFk5NH5NWLb)

### OpenAI Codex (`openai/codex`)

**Stars:** 120,691 · **Open issues:** 14,801 · **Last push:** <1h ago

Today saw the release of rust-v0.152.1, which includes a bug fix that ensures Guardian approval reviews adhere to Node REPL policies via model metadata. Additionally, rust-v0.152.0 introduced several new features, such as enhanced Vim mode search capabilities, rate-limit banners for usage management, and improved credential-refresh tracking in the terminal UI. Noteworthy merged features include the addition of early rate-limit warnings in PR #42142 and improved support for remote marketplaces in the plugin CLI (PR #42150). Among the new issues, #41960 highlights a problem with Pets on Windows not responding to user interactions, which appears to be causing frustration for users.

#### 🚀 New Releases
- [rust-v0.152.1](https://github.com/openai/codex/releases/tag/rust-v0.152.1) 0.152.1
- [rust-v0.152.0](https://github.com/openai/codex/releases/tag/rust-v0.152.0) 0.152.0
- [rust-v0.153.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.153.0-alpha.4) 0.153.0-alpha.4
- [rust-v0.153.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.153.0-alpha.2) 0.153.0-alpha.2
- [rust-v0.153.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.153.0-alpha.1) 0.153.0-alpha.1

#### ✅ Merged PRs
- [#42161](https://github.com/openai/codex/pull/42161) Split tool JSON Schema code into focused modules
- [#42151](https://github.com/openai/codex/pull/42151) Expose model settings in app-server thread metadata
- [#42150](https://github.com/openai/codex/pull/42150) Support remote marketplaces in the plugin CLI
- [#42149](https://github.com/openai/codex/pull/42149) Upgrade Git marketplaces from merged configuration
- [#42147](https://github.com/openai/codex/pull/42147) Skip Guardian reviews in Full Access
- [#42146](https://github.com/openai/codex/pull/42146) Resolve permission requests in the executor context
- [#42144](https://github.com/openai/codex/pull/42144) Add Guardian V2 analytics events
- [#42142](https://github.com/openai/codex/pull/42142) Add early rate-limit warnings for Plus and Team plans
- [#42140](https://github.com/openai/codex/pull/42140) Add redo support to Vim composer history
- [#42137](https://github.com/openai/codex/pull/42137) Prewarm shell snapshots for eligible turns
- [#42135](https://github.com/openai/codex/pull/42135) Support thread forks from symlinked session roots
- [#42134](https://github.com/openai/codex/pull/42134) Include app link metadata in MCP approval elicitations
- [#42133](https://github.com/openai/codex/pull/42133) Scope session MCP approvals to app account links
- [#42132](https://github.com/openai/codex/pull/42132) Bound Git root discovery for metadata enrichment
- [#42128](https://github.com/openai/codex/pull/42128) Prepare MCP connections for coordinated OAuth refresh
- [#42126](https://github.com/openai/codex/pull/42126) Ignore non-JSON files in plugin catalog test helpers
- [#42123](https://github.com/openai/codex/pull/42123) Preserve descriptive labels on local file links
- [#42121](https://github.com/openai/codex/pull/42121) Allow updating the approval reviewer for active turns
- [#42118](https://github.com/openai/codex/pull/42118) Refine hook activity rendering in the TUI
- [#42117](https://github.com/openai/codex/pull/42117) Fix relative MCP server spawning on macOS
- [#42114](https://github.com/openai/codex/pull/42114) Centralize remote plugin mutations in `PluginsManager`
- [#42113](https://github.com/openai/codex/pull/42113) Apply remote platform semantics to exec safety checks
- [#42110](https://github.com/openai/codex/pull/42110) Treat bundled cleanup hooks as built-ins
- [#42109](https://github.com/openai/codex/pull/42109) Format Python scripts across the repository
- [#42107](https://github.com/openai/codex/pull/42107) Show full patches and terminal input in TUI history
- [#42104](https://github.com/openai/codex/pull/42104) Show recent sessions in the agent command center
- [#42102](https://github.com/openai/codex/pull/42102) Extract OTEL trace WebSocket into a reusable crate
- [#42101](https://github.com/openai/codex/pull/42101) Add a TUI setting to disable automatic recaps
- [#42100](https://github.com/openai/codex/pull/42100) Prefer remote Sites over the bundled plugin
- [#42096](https://github.com/openai/codex/pull/42096) Make diagnostic report uploads resilient to slow networks
- [#42094](https://github.com/openai/codex/pull/42094) Record Windows MXC availability
- [#42086](https://github.com/openai/codex/pull/42086) Attribute Guardian reviews to OpenAI app tools
- [#42085](https://github.com/openai/codex/pull/42085) Centralize Guardian context composition
- [#42082](https://github.com/openai/codex/pull/42082) Attribute nested REPL reviews to their tool calls
- [#42076](https://github.com/openai/codex/pull/42076) Unify Guardian context section collection
- [#42071](https://github.com/openai/codex/pull/42071) Detect Vite+-managed Codex installs
- [#42069](https://github.com/openai/codex/pull/42069) Remove redundant test coverage
- [#42068](https://github.com/openai/codex/pull/42068) Detect standalone installs from the macOS CLI bundle
- [#42066](https://github.com/openai/codex/pull/42066) Remove selected core test cases
- [#42065](https://github.com/openai/codex/pull/42065) Preserve Guardian history across thread reconstruction
- [#42056](https://github.com/openai/codex/pull/42056) Honor app link settings for MCP tool approvals
- [#42054](https://github.com/openai/codex/pull/42054) Honor explicit account selectors for Apps tool calls
- [#42047](https://github.com/openai/codex/pull/42047) Add per-account approval settings for apps
- [#42043](https://github.com/openai/codex/pull/42043) Tag Codex home size metrics with compression state
- [#42039](https://github.com/openai/codex/pull/42039) Include shared histories in rollout compression
- [#42033](https://github.com/openai/codex/pull/42033) Improve Guardian report diagnostics
- [#42031](https://github.com/openai/codex/pull/42031) Share Guardian user-message retention logic
- [#42003](https://github.com/openai/codex/pull/42003) Report turn trigger and source in turn analytics
- [#41980](https://github.com/openai/codex/pull/41980) Preserve raw response usage metadata
- [#41976](https://github.com/openai/codex/pull/41976) Move `disable_paste_burst` under `[tui]`

#### 🐛 New Issues
- [#41960](https://github.com/openai/codex/issues/41960) Windows: Pets do not respond to clicks or drag input `bug` `windows-os` `app` `pets` 💬3
- [#42037](https://github.com/openai/codex/issues/42037) [Regression] "Open in" submenu now takes several seconds to load available apps `bug` `windows-os` `app` `performance` 💬3
- [#41968](https://github.com/openai/codex/issues/41968) Monthly Codex usage limit is depleted abnormally fast after switching from 5-hour/weekly limits `bug` `rate-limits` 💬2
- [#42080](https://github.com/openai/codex/issues/42080) Codex long-task reliability: completion claims without target evidence and missing circuit breakers `bug` `model-behavior` `context` `app` 💬2
- [#42159](https://github.com/openai/codex/issues/42159) Codex Mobile Remote loses multiple queued prompts after VPN reconnect `bug` `app` `connectivity` `remote` 💬1
- [#42158](https://github.com/openai/codex/issues/42158) Phone session wiped out computer session `bug` `app` `session` 💬1
- [#42157](https://github.com/openai/codex/issues/42157) [Windows][26.831.1445.0] App update/resume duplicates a rollout ordinal and hides later task history `bug` `windows-os` `app` `app-server` 💬1
- [#42155](https://github.com/openai/codex/issues/42155) ChatGPT iOS 1.2026.230 repeatedly opens Remote Setup on app launch `bug` `iOS` `remote` 💬1
- [#42050](https://github.com/openai/codex/issues/42050) AgentCore Gateway semantic search returns MCP tools, but discovered tools are not callable `bug` `mcp` `CLI` `tool-calls` 💬1
- [#42153](https://github.com/openai/codex/issues/42153) [Desktop] Manual switch to GPT-5.6 Luna after usage exhaustion shows an active model, but every prompt remains blocked `bug` `rate-limits` `app` 💬1
- [#42079](https://github.com/openai/codex/issues/42079) Codex Desktop receives MCP startup failures but silently omits plugin tools `bug` `mcp` `app` `app-server` 💬1
- [#42145](https://github.com/openai/codex/issues/42145) [model-behavior][macOS] Identical GPT-5.6 Sol / Full access sessions inconsistently execute live brokerage orders `bug` `model-behavior` `app` `memory` 💬1
- [#42160](https://github.com/openai/codex/issues/42160) Quota acting odd `bug` `rate-limits` `CLI`
- [#42156](https://github.com/openai/codex/issues/42156) GitHub Connector can create issues but cannot permanently delete them `enhancement` `codex-web` `tool-calls`
- [#42154](https://github.com/openai/codex/issues/42154) Windows: Codex-created node_modules junctions in OneDrive folders trigger severe handle leak `bug` `windows-os` `app` `performance`
- [#42097](https://github.com/openai/codex/issues/42097) Withdrawn: opened in the wrong repository `enhancement` `app` `subagent`
- [#42152](https://github.com/openai/codex/issues/42152) I would like to be able to open multiple thread tabs in the Codex App. `enhancement` `app` `session`
- [#42148](https://github.com/openai/codex/issues/42148) Linux app crashes on startup in libqxcb after recent update `bug` `app`

#### 🔒 Closed Issues
- [#39473](https://github.com/openai/codex/issues/39473) Codex desktop exhausts the Linux file-watch limit by watching .venv, cache, and Git-internal files
- [#41968](https://github.com/openai/codex/issues/41968) Monthly Codex usage limit is depleted abnormally fast after switching from 5-hour/weekly limits
- [#42097](https://github.com/openai/codex/issues/42097) Withdrawn: opened in the wrong repository

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 106,761 · **Open issues:** 869 · **Last push:** 3h ago

On September 2, 2026, Gemini CLI released version v0.59.0-preview.0, which includes a crucial fix for preventing SSRF vulnerabilities in MCP OAuth metadata discovery and authentication. Additionally, the nightly version v0.59.0-nightly.20260901.g0bd1d4397 was made available, showcasing ongoing enhancements. In recent development, a significant merge, PR #29120, improved destination validation and connection routing within the web fetch utilities. No new issues were reported in the last 24 hours, indicating a stable day for the project.

#### 🚀 New Releases
- [v0.59.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.59.0-preview.0) Release v0.59.0-preview.0
- [v0.59.0-nightly.20260901.g0bd1d4397](https://github.com/google-gemini/gemini-cli/releases/tag/v0.59.0-nightly.20260901.g0bd1d4397) Release v0.59.0-nightly.20260901.g0bd1d4397
- [v0.58.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.58.0) Release v0.58.0

#### ✅ Merged PRs
- [#29120](https://github.com/google-gemini/gemini-cli/pull/29120) fix(core): improve destination validation and connection routing in web fetch utilities

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,133 · **Open issues:** 2,264 · **Last push:** 7h ago

On September 2, 2026, GitHub Copilot CLI released version 1.0.83-1, introducing enhanced sorting options for the Sessions sidebar, including Recent, Created, and Name, with the selected order now persisting across restarts. Additionally, enterprise admins gained the capability to pin sign-in to approved GitHub organizations via the forceLoginOrgs setting. No pull requests were merged today, but several issues were reported, including a significant one (#4681) involving the omission of the User-Agent header during MCP OAuth requests after successful logins. Other notable issues included a Node.js out-of-memory crash (#4686) and problems with shell commands under PowerShell ConstrainedLanguage mode (#4683).

#### 🚀 New Releases
- [v1.0.83-1](https://github.com/github/copilot-cli/releases/tag/v1.0.83-1) 1.0.83-1

#### 🐛 New Issues
- [#4681](https://github.com/github/copilot-cli/issues/4681) MCP OAuth: initialize request after successful OAuth login omits User-Agent header, ignoring configured custom headers `triage` 💬2
- [#4680](https://github.com/github/copilot-cli/issues/4680) CLI sends wrong model ID to custom OpenAI-compatible endpoint, killing the session `triage` 💬2
- [#4686](https://github.com/github/copilot-cli/issues/4686) Node.js OOM crash after ~37 min — 31,965 leaked async libuv handles (SEA ignores NODE_OPTIONS) `triage` 💬1
- [#4683](https://github.com/github/copilot-cli/issues/4683) Every shell command emits a spurious error under PowerShell ConstrainedLanguage mode (AppLocker/WDAC): $host.SetShouldExit() is not permitted `triage` 💬1
- [#4684](https://github.com/github/copilot-cli/issues/4684) closed `triage` `invalid` 💬1
- [#4690](https://github.com/github/copilot-cli/issues/4690) Adding agentic marketplace fails when marketplace repo has files with long paths `triage`
- [#4689](https://github.com/github/copilot-cli/issues/4689) Issues and Pull requests panels resolve to the fork, ignoring gh repo set-default `triage`
- [#4688](https://github.com/github/copilot-cli/issues/4688) Subagent concurrency limiter is load-blind: parallel fleets saturate the host and freeze the CLI's own UI `triage`
- [#4687](https://github.com/github/copilot-cli/issues/4687) Repo-level instruction files (AGENTS.md/CLAUDE.md/etc.) are not preserved across /compact `triage`
- [#4685](https://github.com/github/copilot-cli/issues/4685) github/copilot-cli: 🐞 Báo cáo lỗi `triage`
- [#4682](https://github.com/github/copilot-cli/issues/4682) Support persistent, path-scoped write approvals in permissions-config.json `triage`
- [#4679](https://github.com/github/copilot-cli/issues/4679) Sandbox bug - blocking shell `triage`

#### 🔒 Closed Issues
- [#13](https://github.com/github/copilot-cli/issues/13) CLI input should have a vi/vim input mode
- [#4684](https://github.com/github/copilot-cli/issues/4684) closed
- [#4413](https://github.com/github/copilot-cli/issues/4413) Warm `session.resume` replays provider-specific reasoning metadata across wire formats
- [#4645](https://github.com/github/copilot-cli/issues/4645) `session.resume` silently ignores the `model` parameter; the persisted session model wins

### OpenCode (`anomalyco/opencode`)

**Stars:** 203,073 · **Open issues:** 5,626 · **Last push:** <1h ago

On September 2, 2026, OpenCode released version 1.18.26, introducing critical bug fixes for Claude 5 sessions, which now accommodate stale thinking blocks, and improved Bedrock GPT-5.6 model functionality with the acceptance of `none` reasoning effort. Key enhancements include more reliable reasoning and playback handling, alongside accurate tool call timing despite metadata updates during execution. Significant merged pull requests featured a refactor that decouples plugins from config loading and a test design aimed at making certain Windows-specific shell and npm tests deterministic. Notably, new issues emerged, with #46625 highlighting problems with Ollama qwen2.5-coder:7b tool calls not executing in OpenCode, drawing attention from users.

#### 🚀 New Releases
- [v1.18.26](https://github.com/anomalyco/opencode/releases/tag/v1.18.26) v1.18.26

#### ✅ Merged PRs
- [#46610](https://github.com/anomalyco/opencode/pull/46610) test(core): make Windows-flaky shell and npm tests deterministic
- [#46558](https://github.com/anomalyco/opencode/pull/46558) refactor(app): drive persisted state with Effect Schema
- [#46639](https://github.com/anomalyco/opencode/pull/46639) refactor(core): decouple plugins from config loading

#### 🐛 New Issues
- [#46625](https://github.com/anomalyco/opencode/issues/46625) Ollama qwen2.5-coder:7b tool calls are not executed by OpenCode 💬4
- [#46522](https://github.com/anomalyco/opencode/issues/46522) Muse Spark 1.2 Contributor Not Found 💬3
- [#46685](https://github.com/anomalyco/opencode/issues/46685) Subagent permission/error events leave external integrations no way to see root-session progress (pane misreported as blocked/needs-input while subagent runs) 💬2
- [#46668](https://github.com/anomalyco/opencode/issues/46668) feat: load a custom theme from a URL 💬2
- [#46680](https://github.com/anomalyco/opencode/issues/46680) Bug: Settings & Connect Provider dialogs hide their scrollbar (v2 layout) — Windows and Ubuntu 💬2
- [#46658](https://github.com/anomalyco/opencode/issues/46658) Azure CLI account discovery blocks every startup for signed-in users 💬2
- [#46635](https://github.com/anomalyco/opencode/issues/46635) falla del sistema con linux kubuntu 💬2
- [#46624](https://github.com/anomalyco/opencode/issues/46624) Keep DeepSeek V4 Flash available in free tier (Zen) 💬2
- [#46623](https://github.com/anomalyco/opencode/issues/46623) Transition from Ken Burns stills to native T2V + LLM visual prompt translator 💬2
- [#46691](https://github.com/anomalyco/opencode/issues/46691) Windows 11: OpenCode Desktop crashes on launch with repeated GPU process failures (0x80000003) 💬1
- [#46686](https://github.com/anomalyco/opencode/issues/46686) [FEATURE]:[Feature Request] Add Session List Management to Windows Desktop Version `needs:compliance` 💬1
- [#46683](https://github.com/anomalyco/opencode/issues/46683) 検証器が検証対象のリポジトリを破壊する — h5-admission-check.sh の無条件 --depth=1 💬1
- [#46648](https://github.com/anomalyco/opencode/issues/46648) i got a bug like i doesn't getting replies...why????????? `needs:compliance` 💬1
- [#46669](https://github.com/anomalyco/opencode/issues/46669) [FEATURE]: Add GPT 5.6 Terra in opencode go since openAI introduced openAI flex 💬1
- [#46662](https://github.com/anomalyco/opencode/issues/46662) Web UI over plain HTTP: sessions appear empty / missing because crypto.subtle and crypto.randomUUID are unavailable on insecure origins 💬1
- [#46661](https://github.com/anomalyco/opencode/issues/46661) Path completion 💬1
- [#46647](https://github.com/anomalyco/opencode/issues/46647) Reasoning variants ineffective for alibaba provider: catalog npm (@ai-sdk/openai-compatible) drops enableThinking/thinkingBudget 💬1
- [#46654](https://github.com/anomalyco/opencode/issues/46654) [FEATURE]:Show session scrollbar by default for long chats 💬1
- [#46652](https://github.com/anomalyco/opencode/issues/46652) bug: headless "opencode run" provides no agent identity on the event bus 💬1
- [#46651](https://github.com/anomalyco/opencode/issues/46651) TypeError: Failed to fetch - OpenCode Desktop v1.18.25 / Windows 💬1
- [#46585](https://github.com/anomalyco/opencode/issues/46585) Console OpenAI variants send legacy SDK reasoning fields as raw JSON 💬1
- [#46692](https://github.com/anomalyco/opencode/issues/46692) chunkTimeout and timeout are silently ignored on the v2 packages/llm provider path `2.0`
- [#46679](https://github.com/anomalyco/opencode/issues/46679) Web/Desktop directory picker persists every subdirectory of `$HOME` as a project (v2) `2.0`
- [#46664](https://github.com/anomalyco/opencode/issues/46664) [FEATURE]: TUI should capture dropped/pasted files at drop time when the source path is ephemeral
- [#46643](https://github.com/anomalyco/opencode/issues/46643) fix(tui): ASCII logo renders letter n as o (opeocode)

#### 🔒 Closed Issues
- [#46625](https://github.com/anomalyco/opencode/issues/46625) Ollama qwen2.5-coder:7b tool calls are not executed by OpenCode
- [#46522](https://github.com/anomalyco/opencode/issues/46522) Muse Spark 1.2 Contributor Not Found
- [#45405](https://github.com/anomalyco/opencode/issues/45405) fix: GPT-5.6 Bedrock reasoning variants fail with SDK 4.0.158
- [#46668](https://github.com/anomalyco/opencode/issues/46668) feat: load a custom theme from a URL
- [#46658](https://github.com/anomalyco/opencode/issues/46658) Azure CLI account discovery blocks every startup for signed-in users
- [#46635](https://github.com/anomalyco/opencode/issues/46635) falla del sistema con linux kubuntu
- [#46624](https://github.com/anomalyco/opencode/issues/46624) Keep DeepSeek V4 Flash available in free tier (Zen)
- [#46623](https://github.com/anomalyco/opencode/issues/46623) Transition from Ken Burns stills to native T2V + LLM visual prompt translator
- [#46683](https://github.com/anomalyco/opencode/issues/46683) 検証器が検証対象のリポジトリを破壊する — h5-admission-check.sh の無条件 --depth=1
- [#46648](https://github.com/anomalyco/opencode/issues/46648) i got a bug like i doesn't getting replies...why?????????
- [#37166](https://github.com/anomalyco/opencode/issues/37166) Azure Government OpenAI Foundry Connection no Longer Functional

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 27,559 · **Open issues:** 1,254 · **Last push:** <1h ago

On September 2, 2026, Qwen Code released cua-driver-rs v0.20.3, featuring prebuilt binaries for macOS, Linux, and Windows, with the macOS version notably being codesigned and notarized for easier deployment. Significant updates included merging #10390, which unblocks git updates on a dirty working tree, and #10704, which reconciles queued prompts across clients. A standout new issue arose (#10710), highlighting the problem of reloading a session when a turn was killed mid-flight, leading to hidden assistant messages.

#### 🚀 New Releases
- [cua-driver-rs-v0.20.3](https://github.com/QwenLM/qwen-code/releases/tag/cua-driver-rs-v0.20.3) cua-driver-rs v0.20.3

#### ✅ Merged PRs
- [#10390](https://github.com/QwenLM/qwen-code/pull/10390) feat(web-shell): unblock git update on dirty working tree
- [#10704](https://github.com/QwenLM/qwen-code/pull/10704) fix(web-shell): reconcile queued prompts across clients
- [#10653](https://github.com/QwenLM/qwen-code/pull/10653) feat(external-context): Publish the Mem0 Extension package

#### 🐛 New Issues
- [#10710](https://github.com/QwenLM/qwen-code/issues/10710) serve: reloading a session whose turn was killed mid-flight hides already-persisted assistant messages `priority/P2` `type/bug` `category/core` `scope/session-management` 💬4
- [#10698](https://github.com/QwenLM/qwen-code/issues/10698) Build fails on Node 20 with ESM errors `priority/P3` `type/support` `category/security` `scope/build-system` 💬4
- [#10750](https://github.com/QwenLM/qwen-code/issues/10750) feat(web-shell): add session-wide turn navigation `status/in-progress` `priority/P2` `type/feature-request` `category/ui` 💬3
- [#10711](https://github.com/QwenLM/qwen-code/issues/10711) feat(channels): support /btw side questions `priority/P3` `type/feature-request` `category/integration` `scope/commands` 💬3
- [#10693](https://github.com/QwenLM/qwen-code/issues/10693) bug(core): image reads wedge OpenAI-compatible routes that reject the re-encoded JPEG data URL (qwen3.8-max-* / idealab preset) `priority/P2` `type/bug` `category/core` `scope/content-generation` 💬3
- [#10749](https://github.com/QwenLM/qwen-code/issues/10749) TUI scrolling loads previous prompts into the input instead of scrolling the conversation `priority/P2` `type/bug` `category/ui` `scope/interactive` 💬2
- [#10745](https://github.com/QwenLM/qwen-code/issues/10745) Bug: Edit confirmation offers "Modify with external editor" when the configured editor is unavailable `priority/P3` `type/bug` `category/ui` `scope/components` 💬2
- [#10742](https://github.com/QwenLM/qwen-code/issues/10742) qwen extensions install from .zip URL silently exits 0 without installing (Windows 11, v0.22.3) `status/need-information` `priority/P2` `type/bug` `category/cli` 💬2
- [#10741](https://github.com/QwenLM/qwen-code/issues/10741) qwen extensions install silently exits without installing from archive URL (v0.22.3) `status/need-information` `priority/P2` `type/bug` `category/cli` 💬2
- [#10734](https://github.com/QwenLM/qwen-code/issues/10734) ci: the 1000 ms CPU budget in shellAstParser.test.ts is a wall-clock number applied to a CPU-time metric — deterministic red on GitHub-hosted runners `priority/P1` `type/bug` `category/development` `scope/testing` 💬2
- [#10733](https://github.com/QwenLM/qwen-code/issues/10733) perf(dws): avoid full cursor rewrites for pending-message journal updates `priority/P2` `category/performance` `type/enhancement` 💬2
- [#10728](https://github.com/QwenLM/qwen-code/issues/10728) Follow-up: OpenTUI migration deferred review items (test hardening, dead code, packaging cleanup) `priority/P3` `category/ui` `scope/packaging` `scope/testing` 💬2
- [#10716](https://github.com/QwenLM/qwen-code/issues/10716) Web Shell workflow follow-ups from PR #10594 review `priority/P3` `category/ui` `type/enhancement` `scope/web-shell` 💬2
- [#10718](https://github.com/QwenLM/qwen-code/issues/10718) Ctrl+C exit warning overflows shorter terminals and scrolls the startup banner off `priority/P2` `type/bug` `category/ui` `scope/interactive` 💬2
- [#10717](https://github.com/QwenLM/qwen-code/issues/10717) feat: expose structured scheduled-task titles in session summaries `priority/P3` `type/feature-request` `category/ui` `daemon` 💬2
- [#10714](https://github.com/QwenLM/qwen-code/issues/10714) fix(channels): apply approvalMode to standalone sessions `priority/P1` `type/bug` `category/configuration` `status/ready-for-agent` 💬2
- [#10705](https://github.com/QwenLM/qwen-code/issues/10705) bug(channels): /approve returns "no longer pending" in non-primary workspaces `priority/P2` `type/bug` `category/integration` `daemon` 💬2
- [#10702](https://github.com/QwenLM/qwen-code/issues/10702) web-shell: Cmd+A selects the entire page instead of the value text in the table cell dialog `priority/P3` `type/bug` `category/ui` `scope/web-shell` 💬2
- [#10700](https://github.com/QwenLM/qwen-code/issues/10700) [Bug] Orphaned tool-call closing tags leak as plain text: XML recovery only matches balanced invoke pairs `priority/P2` `type/bug` `category/core` `scope/content-generation` 💬2
- [#10686](https://github.com/QwenLM/qwen-code/issues/10686) Main CI failed: E2E Tests on a0096eb5d6e4 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#10682](https://github.com/QwenLM/qwen-code/issues/10682) Main CI failed: E2E Tests on 1aa365ba8e50 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#10744](https://github.com/QwenLM/qwen-code/issues/10744) Main CI failed: Qwen Code CI on 431ff3a11f32 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#10740](https://github.com/QwenLM/qwen-code/issues/10740) Main CI failed: Qwen Code CI on aed0c0d920a1 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#10726](https://github.com/QwenLM/qwen-code/issues/10726) Release Failed for v0.22.3-nightly.20260901.b27deb634d on 2026-09-01 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#10721](https://github.com/QwenLM/qwen-code/issues/10721) Main CI failed: Qwen Code CI on b27deb634d87 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#10725](https://github.com/QwenLM/qwen-code/issues/10725) Main CI failed: E2E Tests on d6c03908164d `type/bug` `status/ready-for-agent` `autofix/skip` `autofix/approved` 💬1
- [#10736](https://github.com/QwenLM/qwen-code/issues/10736) Main CI failed: Qwen Code CI on 180468306c3a `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#10701](https://github.com/QwenLM/qwen-code/issues/10701) Main CI failed: E2E Tests on 1f120c2253fe `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#10753](https://github.com/QwenLM/qwen-code/issues/10753) Deferred review findings from PR #10713
- [#10743](https://github.com/QwenLM/qwen-code/issues/10743) Deferred review findings from PR #10421
- [#10737](https://github.com/QwenLM/qwen-code/issues/10737) Deferred review findings from PR #10527

#### 🔒 Closed Issues
- [#10520](https://github.com/QwenLM/qwen-code/issues/10520) toolSearch threshold > 0 causes llama.cpp 400 "failed to parse grammar" with MCP tools; threshold 0 works
- [#7713](https://github.com/QwenLM/qwen-code/issues/7713) Qwen Code v0.21.0 界面不正确显示的问题
- [#10422](https://github.com/QwenLM/qwen-code/issues/10422) ci: release pipeline slowing down — Quality Checks job ~44 min and on the critical path
- [#10108](https://github.com/QwenLM/qwen-code/issues/10108) review: provision worktree dependencies from a host cache on the persistent runners
- [#10261](https://github.com/QwenLM/qwen-code/issues/10261) web-shell: session search should match conversation content, not only titles
- [#10568](https://github.com/QwenLM/qwen-code/issues/10568) 功能请求：模型配置热加载，无需重启 CLI
- [#10484](https://github.com/QwenLM/qwen-code/issues/10484) qwen-serve-mcp bin is unstartable: build emits a duplicated hashbang
- [#9908](https://github.com/QwenLM/qwen-code/issues/9908) review: a decided stop round cannot gate --fail-on — compose a verdict on the stop path
- [#8581](https://github.com/QwenLM/qwen-code/issues/8581) feat(tools): allow edit/write_file to operate on paths outside the current working directory
- [#10686](https://github.com/QwenLM/qwen-code/issues/10686) Main CI failed: E2E Tests on a0096eb5d6e4
- [#10682](https://github.com/QwenLM/qwen-code/issues/10682) Main CI failed: E2E Tests on 1aa365ba8e50
- [#10701](https://github.com/QwenLM/qwen-code/issues/10701) Main CI failed: E2E Tests on 1f120c2253fe

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

**Stars:** 388,526 · **Open issues:** 6,069 · **Last push:** <1h ago

On September 2, 2026, OpenClaw released version 2026.8.2, introducing a new Home agent feature that allows users to manage work-context snapshots while keeping their current page visible. This update also includes support for a desktop companion on x86-64 Linux, enhancing connectivity options. Significant merged features include the rendering of Mermaid diagrams in native chat for iOS and a streamlined native chat composer for macOS. Notably, the new release has already generated attention due to several bugs, including a critical issue where the gateway crashes in both versions 2026.8.1 and 2026.8.2, attributed to required capability consent for bundled Perplexity.

#### 🚀 New Releases
- [v2026.8.2](https://github.com/openclaw/openclaw/releases/tag/v2026.8.2) openclaw 2026.8.2

#### ✅ Merged PRs
- [#135703](https://github.com/openclaw/openclaw/pull/135703) test(google): centralize auth fixture environment cleanup
- [#120105](https://github.com/openclaw/openclaw/pull/120105) fix(scripts): stabilize Vitest shard timing keys
- [#135719](https://github.com/openclaw/openclaw/pull/135719) test(agents): reuse deferred gates in terminal lifecycle tests
- [#135698](https://github.com/openclaw/openclaw/pull/135698) test(bedrock): consolidate missing-credential selection coverage
- [#135609](https://github.com/openclaw/openclaw/pull/135609) fix(test): empty named-file runs incorrectly pass by default
- [#135470](https://github.com/openclaw/openclaw/pull/135470) feat(ios): render Mermaid diagrams in native chat
- [#134976](https://github.com/openclaw/openclaw/pull/134976) fix(line): keep the words and options a quick-reply prompt leaves behind
- [#135284](https://github.com/openclaw/openclaw/pull/135284) refactor(claws): centralize failure output at the CLI owner
- [#134929](https://github.com/openclaw/openclaw/pull/134929) docs: update v2026.8.1 human-readable release notes
- [#135391](https://github.com/openclaw/openclaw/pull/135391) refactor(agents): keep refusal display independent of runtime policy
- [#135174](https://github.com/openclaw/openclaw/pull/135174) refactor(cron): derive output types from protocol schema
- [#122586](https://github.com/openclaw/openclaw/pull/122586) fix(doctor): stop scanning sibling account state directories
- [#133091](https://github.com/openclaw/openclaw/pull/133091) fix(ui): announce ClawHub search completion via a live region
- [#135687](https://github.com/openclaw/openclaw/pull/135687) fix(release): generate stable appcasts with macOS Bash
- [#135685](https://github.com/openclaw/openclaw/pull/135685) test(tooling): join signal fixture process groups before cleanup
- [#135608](https://github.com/openclaw/openclaw/pull/135608) feat(macos): streamline native chat composer
- [#135680](https://github.com/openclaw/openclaw/pull/135680) chore(release): publish macOS 2026.8.2 appcast
- [#135681](https://github.com/openclaw/openclaw/pull/135681) fix(ui): label device workers correctly during startup
- [#135617](https://github.com/openclaw/openclaw/pull/135617) fix(devices): allow authorized scoped node token management
- [#135501](https://github.com/openclaw/openclaw/pull/135501) fix(test): prevent concurrent macOS fixtures from starving child cleanup
- [#135547](https://github.com/openclaw/openclaw/pull/135547) fix(ui): group accent color with theme
- [#135629](https://github.com/openclaw/openclaw/pull/135629) fix(ui): restore keyboard navigation after switching submenus
- [#135672](https://github.com/openclaw/openclaw/pull/135672) test(browser): consolidate proxy file rejection coverage
- [#126473](https://github.com/openclaw/openclaw/pull/126473) fix(anthropic): keep context usage for providers that never write cache
- [#135650](https://github.com/openclaw/openclaw/pull/135650) fix(linux): restore first-run Gateway choices without the CLI
- [#135674](https://github.com/openclaw/openclaw/pull/135674) refactor(skills): reuse full catalog rendering
- [#135619](https://github.com/openclaw/openclaw/pull/135619) fix(gateway): avoid stale Control UI 304 responses
- [#135622](https://github.com/openclaw/openclaw/pull/135622) feat: recover an explicitly approved replacement PR head
- [#134615](https://github.com/openclaw/openclaw/pull/134615) chore: remove redundant system-agent source mirror
- [#134614](https://github.com/openclaw/openclaw/pull/134614) chore: prune live CLI backend source mirrors
- [#134613](https://github.com/openclaw/openclaw/pull/134613) chore: prune Android screenshot source mirrors
- [#126887](https://github.com/openclaw/openclaw/pull/126887) fix(release): isolate plugin security scanning
- [#135662](https://github.com/openclaw/openclaw/pull/135662) test(media): scope QR temporary files to their test
- [#134457](https://github.com/openclaw/openclaw/pull/134457) fix(ui): retire interrupted runs from history
- [#135616](https://github.com/openclaw/openclaw/pull/135616) test(skills): simplify library wire proof assertions
- [#135667](https://github.com/openclaw/openclaw/pull/135667) test(plugins): align artifact fixtures with build policy
- [#135273](https://github.com/openclaw/openclaw/pull/135273) fix(cli): keep agent exec run errors when cleanup fails
- [#134788](https://github.com/openclaw/openclaw/pull/134788) fix(ai): preserve Responses stream output
- [#135607](https://github.com/openclaw/openclaw/pull/135607) perf(agents): remove redundant finalize-hook message copy
- [#135626](https://github.com/openclaw/openclaw/pull/135626) perf: let context memory own tool-set snapshots
- [#135585](https://github.com/openclaw/openclaw/pull/135585) ci: refit shard weights within existing runner caps
- [#135625](https://github.com/openclaw/openclaw/pull/135625) perf: avoid transient executable-header buffers
- [#134443](https://github.com/openclaw/openclaw/pull/134443) test(release): scope Plugin SDK temp cleanup
- [#133897](https://github.com/openclaw/openclaw/pull/133897) test(ci): await checkout fixture cleanup
- [#135398](https://github.com/openclaw/openclaw/pull/135398) fix(tools): release terminal summaries after nested calls settle
- [#135643](https://github.com/openclaw/openclaw/pull/135643) test(ai): reuse immutable oversized stream chunks
- [#134789](https://github.com/openclaw/openclaw/pull/134789) fix(plugins): validate provider scaffolds from candidate packages
- [#134490](https://github.com/openclaw/openclaw/pull/134490) fix(update): preserve configuration and hand failed upgrades to triage
- [#134787](https://github.com/openclaw/openclaw/pull/134787) fix(release): harden 7.33 Kova validation
- [#134774](https://github.com/openclaw/openclaw/pull/134774) fix(tlon): clear SSE connection timeout
- [#134773](https://github.com/openclaw/openclaw/pull/134773) test(proxy): align absolute-form request targets
- [#134772](https://github.com/openclaw/openclaw/pull/134772) fix(docker): copy lockfile into runtime image
- [#135638](https://github.com/openclaw/openclaw/pull/135638) feat(anthropic): support Fable 5.1 from shared model metadata
- [#134771](https://github.com/openclaw/openclaw/pull/134771) fix(docker): resolve plugins by public id
- [#134770](https://github.com/openclaw/openclaw/pull/134770) fix(plugins): trust managed host peer links
- [#134769](https://github.com/openclaw/openclaw/pull/134769) test(plugins): verify manifest cache identity
- [#134768](https://github.com/openclaw/openclaw/pull/134768) fix(swift): freeze 2026.7.33 formatter rules
- [#134767](https://github.com/openclaw/openclaw/pull/134767) test(openai): align stable manifest contract
- [#134766](https://github.com/openclaw/openclaw/pull/134766) test(memory): model QMD child stream encoding
- [#135210](https://github.com/openclaw/openclaw/pull/135210) ci: balance Control UI browser checks
- [#134786](https://github.com/openclaw/openclaw/pull/134786) fix(release): close 7.33 package acceptance gaps
- [#135476](https://github.com/openclaw/openclaw/pull/135476) perf: reuse sorted ranges while rendering context maps
- [#135611](https://github.com/openclaw/openclaw/pull/135611) test(tooling): centralize PR wrapper fixture identities
- [#135669](https://github.com/openclaw/openclaw/pull/135669) chore(ui): refresh control ui locales
- [#135640](https://github.com/openclaw/openclaw/pull/135640) test(tooling): share immutable GitHub CLI fixture commands
- [#135421](https://github.com/openclaw/openclaw/pull/135421) fix(twitch): name the accessToken config key in setup errors
- [#135601](https://github.com/openclaw/openclaw/pull/135601) fix(macos): resume notarization without rebuilding signed artifacts
- [#135651](https://github.com/openclaw/openclaw/pull/135651) test(infra): reuse maintenance warning runtime
- [#135592](https://github.com/openclaw/openclaw/pull/135592) chore(deps): refresh macOS and iOS app dependencies
- [#135644](https://github.com/openclaw/openclaw/pull/135644) test: avoid leaked concurrent node configuration workers
- [#135577](https://github.com/openclaw/openclaw/pull/135577) fix(codex): stop using stale instructions after prompt-hook changes
- [#135325](https://github.com/openclaw/openclaw/pull/135325) refactor(qa): share standard live transport CLI composition
- [#135319](https://github.com/openclaw/openclaw/pull/135319) refactor(cli): share message payload projections
- [#135317](https://github.com/openclaw/openclaw/pull/135317) refactor(policy): remove unused CLI runtime plumbing
- [#135264](https://github.com/openclaw/openclaw/pull/135264) refactor(mobile): share version script argument parsing
- [#134964](https://github.com/openclaw/openclaw/pull/134964) refactor(line): share media and control card construction
- [#134948](https://github.com/openclaw/openclaw/pull/134948) refactor(qa): derive suite types from their canonical declarations
- [#134945](https://github.com/openclaw/openclaw/pull/134945) refactor(channels): share lazy runtime forwarding
- [#134910](https://github.com/openclaw/openclaw/pull/134910) refactor(markdown): share span clipping logic
- [#135597](https://github.com/openclaw/openclaw/pull/135597) perf(cron): reuse collation within name-sorted job lists
- [#134068](https://github.com/openclaw/openclaw/pull/134068) feat(skills): add personal libraries for shared Gateways
- [#135624](https://github.com/openclaw/openclaw/pull/135624) test(file-transfer): reuse directory archive runtime
- [#135432](https://github.com/openclaw/openclaw/pull/135432) fix(android): keep narrow chat composers readable
- [#135563](https://github.com/openclaw/openclaw/pull/135563) chore(android): refresh libraries and build tooling
- [#135477](https://github.com/openclaw/openclaw/pull/135477) perf: remove unused Gateway metadata scope hashing
- [#135602](https://github.com/openclaw/openclaw/pull/135602) perf(cli): avoid materializing unused process output
- [#135504](https://github.com/openclaw/openclaw/pull/135504) perf: resolve web fetch providers once in their owner
- [#135475](https://github.com/openclaw/openclaw/pull/135475) perf: avoid copying outbound node duplex fragments
- [#135593](https://github.com/openclaw/openclaw/pull/135593) fix(skills): keep one profile from exhausting pending ZIP imports
- [#135574](https://github.com/openclaw/openclaw/pull/135574) improve(ui): speed up switching in large session lists
- [#135473](https://github.com/openclaw/openclaw/pull/135473) perf: reuse measured widths while wrapping terminal tables
- [#135514](https://github.com/openclaw/openclaw/pull/135514) perf(security): avoid unnecessary Unicode marker folding
- [#135521](https://github.com/openclaw/openclaw/pull/135521) fix(ui): hide rewind while agent is working
- [#124568](https://github.com/openclaw/openclaw/pull/124568) fix(gateway): reject invalid utcOffset in usage date interpretation
- [#135415](https://github.com/openclaw/openclaw/pull/135415) fix: retain memory repair guidance when wiki search succeeds
- [#135598](https://github.com/openclaw/openclaw/pull/135598) refactor(plugins): simplify discovery, setup, and update reporting
- [#135605](https://github.com/openclaw/openclaw/pull/135605) test(cli): consolidate root help fast-path coverage
- [#127284](https://github.com/openclaw/openclaw/pull/127284) fix(agents): tolerate replaced thinking catalog owners
- [#135600](https://github.com/openclaw/openclaw/pull/135600) chore(i18n): refresh native locales
- [#135093](https://github.com/openclaw/openclaw/pull/135093) fix(ai): honor Model Studio cache defaults and retention
- [#135200](https://github.com/openclaw/openclaw/pull/135200) fix(markdown): preserve task lists across chunk boundaries
- [#134572](https://github.com/openclaw/openclaw/pull/134572) fix(imessage): sends keep failing with an opaque timeout after the private-API bridge dies
- [#135559](https://github.com/openclaw/openclaw/pull/135559) ci: scope declaration caches to generator inputs
- [#134532](https://github.com/openclaw/openclaw/pull/134532) fix(docker): install libgomp1 in the runtime image for managed llama.cpp
- [#135557](https://github.com/openclaw/openclaw/pull/135557) chore(linux): update Tauri app dependencies
- [#135412](https://github.com/openclaw/openclaw/pull/135412) refactor(text): avoid full-string encoding for bounded prefixes
- [#135594](https://github.com/openclaw/openclaw/pull/135594) test(cli): await version diagnostic completion
- [#135595](https://github.com/openclaw/openclaw/pull/135595) docs: move v2026.8.1 beta note to footnote
- [#135524](https://github.com/openclaw/openclaw/pull/135524) fix: Recent Chats list has cleaner alignment and hover feedback
- [#135523](https://github.com/openclaw/openclaw/pull/135523) fix(ui): keep group titles on one marquee line
- [#135586](https://github.com/openclaw/openclaw/pull/135586) test(tooling): share immutable pnpm launcher fixtures
- [#135405](https://github.com/openclaw/openclaw/pull/135405) refactor(http): avoid discarded body buffers
- [#135579](https://github.com/openclaw/openclaw/pull/135579) test(node): reuse immutable worker bundle archive
- [#135195](https://github.com/openclaw/openclaw/pull/135195) fix(line): let a group mention reach the turn that answers it
- [#135375](https://github.com/openclaw/openclaw/pull/135375) refactor(logging): reduce work for ordinary log records
- [#135572](https://github.com/openclaw/openclaw/pull/135572) test(tooling): reuse packed artifact identity fixture
- [#135568](https://github.com/openclaw/openclaw/pull/135568) fix(control-ui): replies appear above queued prompts during recovery
- [#135367](https://github.com/openclaw/openclaw/pull/135367) perf(release): shorten preflight and publication
- [#134664](https://github.com/openclaw/openclaw/pull/134664) refactor(plugins): centralize release cohort convergence
- [#135423](https://github.com/openclaw/openclaw/pull/135423) fix(talk): keep internal consult prompts out of later model context
- [#135071](https://github.com/openclaw/openclaw/pull/135071) feat(cron): optionally skip missed recurring jobs at startup
- [#135500](https://github.com/openclaw/openclaw/pull/135500) fix(pr): preserve ignored files and skip redundant prepare transitions
- [#135342](https://github.com/openclaw/openclaw/pull/135342) feat(android): render Mermaid diagrams in chat
- [#135560](https://github.com/openclaw/openclaw/pull/135560) test(infra): reuse commit-resolution setup
- [#135505](https://github.com/openclaw/openclaw/pull/135505) fix(channels): preserve selected agent during plugin discovery
- [#135464](https://github.com/openclaw/openclaw/pull/135464) perf(agents): avoid cloning credentials for presence checks
- [#134756](https://github.com/openclaw/openclaw/pull/134756) fix(macos): reveal onboarding failures and restore retry actions
- [#135460](https://github.com/openclaw/openclaw/pull/135460) fix(update): fail finalization on unresolved plugin consent
- [#135447](https://github.com/openclaw/openclaw/pull/135447) fix: preserve explicit fleet diagnostic ownership
- [#135392](https://github.com/openclaw/openclaw/pull/135392) refactor: simplify transcript reads and recovery state
- [#135397](https://github.com/openclaw/openclaw/pull/135397) fix: preserve Ultra across model runtime boundaries
- [#135445](https://github.com/openclaw/openclaw/pull/135445) fix(llama-cpp): discover models behind web app endpoints
- [#135495](https://github.com/openclaw/openclaw/pull/135495) fix: keep state-dir Gateway CI proof reliable under load
- [#135401](https://github.com/openclaw/openclaw/pull/135401) fix(macos): avoid rebuilding speech recognizers between voice captures
- [#135543](https://github.com/openclaw/openclaw/pull/135543) chore(i18n): refresh native locales
- [#132370](https://github.com/openclaw/openclaw/pull/132370) feat: reuse approvals for active Codex placements
- [#135373](https://github.com/openclaw/openclaw/pull/135373) fix(memory): prevent cache overflow during forced reindex publication
- [#135425](https://github.com/openclaw/openclaw/pull/135425) fix(plugins): detect native loading regressions in tests
- [#135440](https://github.com/openclaw/openclaw/pull/135440) ci: shorten preflight and rebalance isolated tooling
- [#134365](https://github.com/openclaw/openclaw/pull/134365) improve(ui): move sidebar controls into agent header
- [#135112](https://github.com/openclaw/openclaw/pull/135112) fix: show concise OAuth errors in Control UI
- [#135431](https://github.com/openclaw/openclaw/pull/135431) docs(memory): preserve session history during index recovery
- [#118045](https://github.com/openclaw/openclaw/pull/118045) docs: remove retired openai-codex from /login valid args
- [#135239](https://github.com/openclaw/openclaw/pull/135239) fix(google): auto-enable configured provider plugin
- [#135529](https://github.com/openclaw/openclaw/pull/135529) chore(ui): refresh control ui locales

#### 🐛 New Issues
- [#135171](https://github.com/openclaw/openclaw/issues/135171) [Bug]: 2026.8.1 and 2026.8.2 gateway crash-loop: bundled Perplexity requires capability consent but cannot be inspected/enabled/disabled `bug` `regression` `impact:crash-loop` `P0` 💬8
- [#135347](https://github.com/openclaw/openclaw/issues/135347) [Bug]: Forced memory reindex inflates shared agent DB; deleting it for recovery destroys sessions `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬6
- [#134608](https://github.com/openclaw/openclaw/issues/134608) [Bug]: 2026.8.1 auth migration archives JSON and writes a success receipt without credentials, permanently blocking repair `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬6
- [#135533](https://github.com/openclaw/openclaw/issues/135533) [Bug] Control UI renders duplicate assistant messages (same text 3–4×) on streamed output in v2026.8.2 `P2` `impact:session-state` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬3
- [#134925](https://github.com/openclaw/openclaw/issues/134925) Gateway main thread hits ~100% CPU on every agent turn on ARM64/Pi `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬4
- [#135566](https://github.com/openclaw/openclaw/issues/135566) [Bug]: Utility simple-completion ignores Claude CLI runtime for canonical and CLI model refs `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬4
- [#135576](https://github.com/openclaw/openclaw/issues/135576) [Bug]: Codex-harness sessions_spawn can leave detached requester-settle unbound (still present in 2026.8.2) 💬4
- [#135272](https://github.com/openclaw/openclaw/issues/135272) macOS companion UI-control path intermittently fails with COMPANION_APP_UNAVAILABLE on 2026.8.1 `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬4
- [#135459](https://github.com/openclaw/openclaw/issues/135459) openclaw memory search starts reindex work on a clean valid index and delays CLI exit despite returning hits `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬4
- [#134968](https://github.com/openclaw/openclaw/issues/134968) Anthropic provider refusals retry the same request `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#134960](https://github.com/openclaw/openclaw/issues/134960) Windows: CLI backends fail to bind — identity resolver picks npm's extensionless sh shim over .cmd `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#135013](https://github.com/openclaw/openclaw/issues/135013) [Bug]: claude-cli connection fails with mise usage text when `claude` resolves to a mise shim `bug` `no-stale` `bug:behavior` `P1` 💬4
- [#134616](https://github.com/openclaw/openclaw/issues/134616) [Bug]: The upgrade of OpenClaw from 2026.7.1 to 2026.8.1 has been unsuccessful. `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬3
- [#134638](https://github.com/openclaw/openclaw/issues/134638) [Bug]: Installer prints an `Installer log:` path that is normally deleted before the user can read it `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#134895](https://github.com/openclaw/openclaw/issues/134895) [Bug]: Isolated CLI cron announce with default channel=last leaves no operator-visible outcome `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#135717](https://github.com/openclaw/openclaw/issues/135717) Maintenance lease heartbeat: startup-ready notification can be overtaken by the 5s timeout under a starved parent event loop `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬3
- [#135705](https://github.com/openclaw/openclaw/issues/135705) [Bug]: Review tab Markdown body clamps to a ~120px column, rest of panel empty `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#135661](https://github.com/openclaw/openclaw/issues/135661) [Bug]: openclaw node worker never exits after a stop while its stdin writer is held open or a plugin child pins the event loop `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬3
- [#135305](https://github.com/openclaw/openclaw/issues/135305) Session observer disables itself after delivery failures and silently drops announce-path Slack messages (error logged as empty {}) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#135414](https://github.com/openclaw/openclaw/issues/135414) [Bug]: Combined memory/wiki search omits memory index repair guidance `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬3
- [#134975](https://github.com/openclaw/openclaw/issues/134975) LINE drops the question and the overflow options when a reply's only control is a select `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬3
- [#135061](https://github.com/openclaw/openclaw/issues/135061) webchat: attachment failures corrupt the session transcript (trim crash) - and 2026.8.1 dropped .pptx from the allowlist `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#134967](https://github.com/openclaw/openclaw/issues/134967) [Bug]: Symlinked USER.md/MEMORY.md aborts the entire memory sync ("path must be a regular file") instead of being skipped `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#135248](https://github.com/openclaw/openclaw/issues/135248) [Bug]: Commentary text still renders 3x on stable 2026.8.1 (fresh install) — #134276 auto-closed as 'fixed on main' but no release contains the fix `P2` `impact:ux-friction` 💬3
- [#135068](https://github.com/openclaw/openclaw/issues/135068) [Bug]: WebChat silently drops the only failed-exec warning on 2026.8.1 `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬3
- [#134619](https://github.com/openclaw/openclaw/issues/134619) [Bug]: Upgrade to 8.1 Completely Breaks Existing Installation and Major Features `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬3
- [#134999](https://github.com/openclaw/openclaw/issues/134999) memory-core short-term-locks rows never expire (expires_at=null) — orphaned lock permanently wedges memory sync after unclean exit `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#135716](https://github.com/openclaw/openclaw/issues/135716) [Feature]: Support file and binary parts in A2A messages `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#135708](https://github.com/openclaw/openclaw/issues/135708) [Feature]: Support Microsoft Graph operations for Teams China/21Vianet `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#135720](https://github.com/openclaw/openclaw/issues/135720) [Bug]: Inbox appears outside its navigation hosts `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#135613](https://github.com/openclaw/openclaw/issues/135613) [Bug]: Keyboard navigation gets stuck after switching sibling submenus `bug` `maintainer` `P2` `clawsweeper:needs-live-repro` 💬2
- [#135704](https://github.com/openclaw/openclaw/issues/135704) [Bug]: iMessage reflections with reply_to_guid bypass the echo cache `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#135581](https://github.com/openclaw/openclaw/issues/135581) Auth profiles are not migrated to the shared state DB on 2026.8.2 (models auth list shows "Profiles: (none)") `P1` `impact:auth-provider` 💬2
- [#135575](https://github.com/openclaw/openclaw/issues/135575) [Bug]: Device startup stop controls say cloud worker `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬2
- [#135606](https://github.com/openclaw/openclaw/issues/135606) [Bug]: Control UI returns 304 for nonmatching cache validators `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬2
- [#135695](https://github.com/openclaw/openclaw/issues/135695) infer image describe: AgentSelectionRequiredError despite explicit --agent and agents.defaults.systemAgent.agentId (2026.8.1) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#135658](https://github.com/openclaw/openclaw/issues/135658) [Bug]: 2026.8.2 delivers the synthesized "no final summary was produced" fallback for cron jobs that deliberately end with NO_REPLY after tool calls (2026.8.1 stayed silent) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#135385](https://github.com/openclaw/openclaw/issues/135385) [Bug]: Shared auth store relocation fails silently across multiple doctor runs and version upgrades `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#135299](https://github.com/openclaw/openclaw/issues/135299) Upgrade to 2026.8.1 unusable for system-npm installs with external plugins and a non-root gateway user `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬2
- [#135649](https://github.com/openclaw/openclaw/issues/135649) [Bug]: New MCP server Env/Headers entries can't be renamed off "custom-N" (redaction sentinel trips the rename guard) `bug` `no-stale` `bug:behavior` `P2` 💬2
- [#135590](https://github.com/openclaw/openclaw/issues/135590) gateway broken after 2026.8.x auto-update, "Legacy workspace setup state requires migration" but nothing actually migrates it `P1` `impact:session-state` `impact:crash-loop` `maturity:stable` 💬2
- [#135668](https://github.com/openclaw/openclaw/issues/135668) cliAgents runtime: native Claude Code AskUserQuestion tool not bridged to chat channels (Telegram/etc), session appears stuck `P1` `impact:message-loss` 💬2
- [#135623](https://github.com/openclaw/openclaw/issues/135623) [Feature]: first-class Claude Fable 5.1 support with manifest-owned metadata `enhancement` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#135635](https://github.com/openclaw/openclaw/issues/135635) [Bug]: Legacy cron upgrade creates unconfigured announce delivery `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#134993](https://github.com/openclaw/openclaw/issues/134993) [Bug]: Gateway pegs one CPU core (busy loop in filesystem discovery) after 2026.8.1 upgrade with a large skill/agent fleet `bug` `bug:crash` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#135633](https://github.com/openclaw/openclaw/issues/135633) Subagent announce failure blames the completion agent when the child returned nothing `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#135631](https://github.com/openclaw/openclaw/issues/135631) [Bug]: Session list ignores explicit membership, leaving no way to scope visibility to invited sessions `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#135338](https://github.com/openclaw/openclaw/issues/135338) [Bug]: Codex sessions retain stale generic instructions after prompt-hook replacement `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#135507](https://github.com/openclaw/openclaw/issues/135507) [Bug]: Control UI can render saved replies above queued prompts during history recovery `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬2
- [#135266](https://github.com/openclaw/openclaw/issues/135266) Control UI: no way to navigate between same-agent channel sessions (Telegram, WebChat, etc.) `P2` `impact:ux-friction` 💬2
- [#135578](https://github.com/openclaw/openclaw/issues/135578) [Bug]: Profile avatar remains stale after successful upload on 2026.8.2 `P2` `impact:ux-friction` 💬2
- [#135571](https://github.com/openclaw/openclaw/issues/135571) [Bug]: Codex dynamic message_tool_only drops inbound-audio state before inbound TTS `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#135573](https://github.com/openclaw/openclaw/issues/135573) [Bug]: message CLI rejects request-scoped custom channels before scoped plugin resolution `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#135437](https://github.com/openclaw/openclaw/issues/135437) [Bug]: Doctor reports success while legacy exec approvals still block runtime `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#135442](https://github.com/openclaw/openclaw/issues/135442) [Bug]: Discord session-busy notices bypass quiet reply policy `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#135361](https://github.com/openclaw/openclaw/issues/135361) [Bug]: llama-cpp plugin is unable to connect to unsloth hosted on the same machine `bug` `no-stale` `regression` `P1` 💬2
- [#135457](https://github.com/openclaw/openclaw/issues/135457) [Bug]: Control UI cron page never displays heartbeat scratch — "Heartbeat monitor" field is always empty `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#135502](https://github.com/openclaw/openclaw/issues/135502) [Bug]: Signal and MS Teams omit plugin-command authorization `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#135509](https://github.com/openclaw/openclaw/issues/135509) OpenClaw 2.0 migration removed host/config tools from agent main `P3` 💬2
- [#135519](https://github.com/openclaw/openclaw/issues/135519) [Bug]: Claude CLI 410 session_expired falls through to generic Control UI error `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬2
- [#135340](https://github.com/openclaw/openclaw/issues/135340) [Bug]: Discord realtime voice reports cancelled consults as errors `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬2
- [#135330](https://github.com/openclaw/openclaw/issues/135330) [Feature]: Expose provider messageId and conversationId on PluginCommandContext `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#135408](https://github.com/openclaw/openclaw/issues/135408) [Bug]: Embedding llama-server crashes on inputs >512 tokens: --ubatch-size flag never passed when provider is non-default `P3` `clawsweeper:bulk-filed` 💬2
- [#134731](https://github.com/openclaw/openclaw/issues/134731) [Bug]: Control UI model picker is inert for local Ollama models — row click emits no sessions.patch (2026.8.1) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#135364](https://github.com/openclaw/openclaw/issues/135364) claude-cli: raw tool-protocol leak in assistant text fails the whole turn with next=none, though the leak's boundaries are already known `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#135389](https://github.com/openclaw/openclaw/issues/135389) [Bug]: Browser control always fails with "local listener owner could not be verified" when the Gateway runs in Docker `bug` `bug:behavior` `P1` `impact:other` 💬2
- [#135383](https://github.com/openclaw/openclaw/issues/135383) [Bug]: Stale openclaw-doctor subprocess holds SQLite lock, blocking future doctor runs with misleading agent-lease error `P2` `impact:other` `maturity:stable` 💬2
- [#135378](https://github.com/openclaw/openclaw/issues/135378) [Bug]: Session host picker offers ineligible devices and its tooltip names an already-satisfied config key `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#135358](https://github.com/openclaw/openclaw/issues/135358) [Bug]: Discord system-agent approval leaves the dashboard proposal pending in 2026.8.1 `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#134864](https://github.com/openclaw/openclaw/issues/134864) [Bug]: Source Gateway preload breaks compiled plugin ESM dependencies `bug` `maintainer` `P2` `clawsweeper:needs-live-repro` 💬2
- [#135291](https://github.com/openclaw/openclaw/issues/135291) [Bug]: Skill Workshop approval buttons missing in Telegram DM on 2026.8.1 `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#135310](https://github.com/openclaw/openclaw/issues/135310) Codex supervision errors hide the incompatible binding policy `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#135282](https://github.com/openclaw/openclaw/issues/135282) Isolated automation records success after sessions_yield, then requester can become killed `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#134657](https://github.com/openclaw/openclaw/issues/134657) Plugin registry falsely stays stale when packageBuild lacks bundledDist `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#135231](https://github.com/openclaw/openclaw/issues/135231) Settle-wake retry loop re-dispatches into a session lane still held by the timed-out (non-cancelling) announce run `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#135240](https://github.com/openclaw/openclaw/issues/135240) feat(memory): Allow configuring extraPaths as trusted — memory_search tool filters out workspace knowledge files `P3` 💬2
- [#135111](https://github.com/openclaw/openclaw/issues/135111) [Bug]: Intermittent "Provider completed tool call with malformed JSON arguments" on v2026.8.1 (claude-sonnet-5), not tied to specific file/tool `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#135216](https://github.com/openclaw/openclaw/issues/135216) [Bug]: Protected secret-entry prompt loses focus and shifts chat on iOS `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬2
- [#135218](https://github.com/openclaw/openclaw/issues/135218) [Bug]: --no-include-workspace still traverses workspace absolute symlink `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#135205](https://github.com/openclaw/openclaw/issues/135205) [Bug]: Heartbeat "First heartbeat alert" preamble repeats on every delivery — lastHeartbeatSentAt never sticks on implicit default route `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#134830](https://github.com/openclaw/openclaw/issues/134830) Aborted full reindex strands its temp database (*.sqlite.memory-reindex-<uuid>) — clean abort path, no startup sweep; 5.1 GiB leaked in one afternoon 💬2
- [#134918](https://github.com/openclaw/openclaw/issues/134918) Embedded agent: incomplete/empty turns from a model surface "couldn't generate" errors without consuming retry budget (two signatures + local patches that fixed both) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#135038](https://github.com/openclaw/openclaw/issues/135038) 2026.8.1 upgrade: gateway unstartable (session-store + exec-approvals gates don't self-heal), false agents.ownership UI error, no agent search `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#135117](https://github.com/openclaw/openclaw/issues/135117) [Bug]: 2026.8.1 heartbeat replays delivered async results into the wrong Discord channel `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬2
- [#134649](https://github.com/openclaw/openclaw/issues/134649) [Bug]: Gateway shutdown hangs 5+ minutes when local llama-server child process doesn't terminate with parent `bug` `no-stale` `bug:behavior` `P1` 💬2
- [#135026](https://github.com/openclaw/openclaw/issues/135026) [Bug]: Control UI Stop can discard dictation before the first transcript preview `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#134997](https://github.com/openclaw/openclaw/issues/134997) [Bug]: Reopening a dropdown during hide can leave it stuck open `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#135164](https://github.com/openclaw/openclaw/issues/135164) [Bug]: Windows PowerShell config set --strict-json loses quotes for JSON array values `bug` `no-stale` `bug:behavior` `P2` 💬2
- [#134834](https://github.com/openclaw/openclaw/issues/134834) [Bug]: overlapping package jobs can remove the next package’s lifecycle marker `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬2
- [#135084](https://github.com/openclaw/openclaw/issues/135084) [Bug]: Memory-source provenance repair runs inline in first turn after upgrade — system-prompt stage blocked ~285s `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#135734](https://github.com/openclaw/openclaw/issues/135734) models auth order set refresh preserves stale live order until Gateway restart 💬1
- [#135726](https://github.com/openclaw/openclaw/issues/135726) [Bug]: Uninstalled provider plugins are restored during startup convergence `no-stale` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` 💬1
- [#135352](https://github.com/openclaw/openclaw/issues/135352) [Bug]: explicit-file tests can pass empty without an allow-empty option `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#135706](https://github.com/openclaw/openclaw/issues/135706) [Bug]: Tailscale Serve `sudo -n` fallback can never succeed on systemd user services; error never names `tailscale set --operator` `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#135535](https://github.com/openclaw/openclaw/issues/135535) [Feature]: Group Accent color directly below Theme `enhancement` `maintainer` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#135692](https://github.com/openclaw/openclaw/issues/135692) [Bug]: Subagent sweeper re-drives already-delivered requester settle wakes every 60s forever — attemptCount frozen at 0, cap unreachable, no give-up `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:session-state` 💬1
- [#135690](https://github.com/openclaw/openclaw/issues/135690) [Bug]: Model selected on a spawned child session is persisted to the agent/global config layer, silently changing the parent's model `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#135676](https://github.com/openclaw/openclaw/issues/135676) Metadata-only device refresh is serialized as an operator-scope grant `P2` `impact:security` 💬1
- [#135688](https://github.com/openclaw/openclaw/issues/135688) [Bug]: Turn that fails its ReplyOperation after a settled run still reports 'completed' — status reactions, gateway HTTP mapping, and CLI exit code all mark a failed turn as done `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#135684](https://github.com/openclaw/openclaw/issues/135684) [Bug]: Read-only surfaces (memory status, session diagnostics, config health) still open the writable SQLite lifecycle despite existing query-only helpers `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#135694](https://github.com/openclaw/openclaw/issues/135694) 2026.8.1: CLI watchdog profile is unreachable from config — backend.reliability.watchdog is still read but every config path is schema-rejected `P2` `impact:session-state` 💬1
- [#135565](https://github.com/openclaw/openclaw/issues/135565) [Bug]: Linux first-run setup hides remote Gateway choice without the CLI `bug` `maintainer` `clawsweeper:source-repro` `P0` 💬1
- [#135682](https://github.com/openclaw/openclaw/issues/135682) [Bug]: Control UI plugins page proxies first-party @openclaw plugin icons through the remote CDN instead of using shipped local art `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#135496](https://github.com/openclaw/openclaw/issues/135496) [Feature]: Recover an explicitly approved replacement PR head `enhancement` `maintainer` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#135696](https://github.com/openclaw/openclaw/issues/135696) tools.media.models: an entry without "capabilities" is offered for every capability — an audio-only model silently disables image understanding `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#135693](https://github.com/openclaw/openclaw/issues/135693) [Bug]: Watch voice turns lose chat, playback, or delivery ownership `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#135691](https://github.com/openclaw/openclaw/issues/135691) [Bug]: standalone mock previews can make native connections and invalidate sibling caches `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#135679](https://github.com/openclaw/openclaw/issues/135679) [Feature]: Batched bounded queries for sessions_search (up to 8 per call) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#135677](https://github.com/openclaw/openclaw/issues/135677) Gateway-denied tool call can disappear without a requester-visible terminal response `P1` `impact:session-state` `impact:ux-friction` 💬1
- [#135675](https://github.com/openclaw/openclaw/issues/135675) Approval UI can falsely report "aborted by user" and terminate the agent turn without a visible reply `P1` `impact:session-state` 💬1
- [#135678](https://github.com/openclaw/openclaw/issues/135678) memory-core dreaming: promotion weights compound the signalCount gate bypass — recurring daily boilerplate is near-optimal for promotion `P2` `impact:session-state` 💬1
- [#135664](https://github.com/openclaw/openclaw/issues/135664) [Bug]: Vertex Sonnet 5 cost estimates are 50% too high after September 1 `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#135660](https://github.com/openclaw/openclaw/issues/135660) [Bug]: OpenClaw.app never owns its openclaw-node worker: the CLI respawn setsid()s it out of the app's process group, so every worker restart orphans it (plus its codex app-server) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#135150](https://github.com/openclaw/openclaw/issues/135150) Startup migration treats warnings as fatal → single stale-plugin warning crash-loops the gateway `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#135656](https://github.com/openclaw/openclaw/issues/135656) [Bug]: First-time memory plugin installs are enabled but not selected `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#135655](https://github.com/openclaw/openclaw/issues/135655) [Bug]: agent-initiated update stops its own managed Gateway process tree `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#135652](https://github.com/openclaw/openclaw/issues/135652) [Bug]: Block queue admission can suppress a final after rejected delivery `bug` `maintainer` `P1` `clawsweeper:source-repro` 💬1
- [#135233](https://github.com/openclaw/openclaw/issues/135233) Gateway refuses to start: bundled catalog demands capability consent for an uninstalled, unconfigured plugin with no way to grant it `impact:crash-loop` `P0` `issue-rating: 🦪 silver shellfish` 💬1
- [#135645](https://github.com/openclaw/openclaw/issues/135645) Control UI human mentions with a temporary Inbox `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#135637](https://github.com/openclaw/openclaw/issues/135637) [Bug]: Cancelled plugin installs can still record or enable packages `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#135641](https://github.com/openclaw/openclaw/issues/135641) [Bug]: Memory index recovery diagnostics hide mismatch ownership and blocking source paths `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#135628](https://github.com/openclaw/openclaw/issues/135628) Context-engine turn outbox is starved permanently by orphaned 'admitted' rows: the drain charges budget for rows it cannot advance, and only the originating session can retire them `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#135634](https://github.com/openclaw/openclaw/issues/135634) [Bug]: Doctor deletes credentials replaced during its repair prompt `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#135630](https://github.com/openclaw/openclaw/issues/135630) [Bug]: Vitest removes retained fixture inputs while nested writers remain live `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#135627](https://github.com/openclaw/openclaw/issues/135627) [Bug]: Skill Workshop proposals created in a worktree session bake the worktree path into the target and cannot be applied `P2` `impact:data-loss` 💬1
- [#135618](https://github.com/openclaw/openclaw/issues/135618) [Bug]: codexPlugins config mutation invalidates the active Codex harness until restart `bug` `maintainer` `P1` `clawsweeper:source-repro` 💬1
- [#135614](https://github.com/openclaw/openclaw/issues/135614) [Bug]: Control UI renders keyed commentary segments multiple times during a run (persisted once) `P2` `impact:ux-friction` 💬1
- [#135587](https://github.com/openclaw/openclaw/issues/135587) fix: one profile can exhaust pending skill ZIP imports for other users `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#135612](https://github.com/openclaw/openclaw/issues/135612) [Bug]: Scheduled Telegram delivery loses explicit agent owner `P1` `impact:message-loss` 💬1
- [#135596](https://github.com/openclaw/openclaw/issues/135596) [Bug]: v2026.8.2 drops web-search publication dates for Tavily and Brave `bug` `regression` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#135187](https://github.com/openclaw/openclaw/issues/135187) LINE never tells the turn that a group message mentioned the bot `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#135569](https://github.com/openclaw/openclaw/issues/135569) Signal channel: internal runtime-context block leaks into visible messages when message_id == reply_to_id (thread self-reference) `P3` 💬1
- [#135562](https://github.com/openclaw/openclaw/issues/135562) [Bug]: Sidebar and chat fades obscure vertical scrollbars `bug` `maintainer` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#135556](https://github.com/openclaw/openclaw/issues/135556) [Bug]: Control UI reports missing proxy identity headers as a network failure `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#135551](https://github.com/openclaw/openclaw/issues/135551) Direct iMessage session is embedded and message-only on 2026.8.1 `P2` 💬1
- [#134916](https://github.com/openclaw/openclaw/issues/134916) [Bug]: Control UI error summary exposes raw provider JSON instead of the provider message `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#135515](https://github.com/openclaw/openclaw/issues/135515) [Feature]: Authenticated GitHub data reads for dashboard widgets `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#135548](https://github.com/openclaw/openclaw/issues/135548) auth.order not respected: gateway keeps selecting api-key profile over preferred OAuth profile for same provider `P1` `impact:auth-provider` 💬1
- [#135498](https://github.com/openclaw/openclaw/issues/135498) [Bug]: Session Tasks side panel reorders running tasks during activity `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#135546](https://github.com/openclaw/openclaw/issues/135546) fix(telegram): chunk oversized rich draft plain fallbacks `maintainer` `P1` `clawsweeper:source-repro` `impact:message-loss` 💬1
- [#135545](https://github.com/openclaw/openclaw/issues/135545) feat(message tool + Telegram): multi-media sends grouped into albums `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#135221](https://github.com/openclaw/openclaw/issues/135221) [Bug]: Google API-key provider config does not auto-enable the bundled Google plugin under plugins.allow `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#135538](https://github.com/openclaw/openclaw/issues/135538) opencode-go sends no OpenClaw User-Agent, contrary to OpenCode Go's documented client-identification requirement `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#135530](https://github.com/openclaw/openclaw/issues/135530) [Bug]: /status drops authored context cap for Claude CLI runtime aliases `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#135527](https://github.com/openclaw/openclaw/issues/135527) Heartbeat commitment delivery forces disableTools, which claude-cli backend hard-rejects `P2` 💬1
- [#135506](https://github.com/openclaw/openclaw/issues/135506) [Feature]: Consolidate session assignment into one submenu `enhancement` `maintainer` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#135149](https://github.com/openclaw/openclaw/issues/135149) Telegram lane can starve on repeated session-start invalidation after aborted turn `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#135510](https://github.com/openclaw/openclaw/issues/135510) In-process Gateway tool dispatch dies for the rest of a CLI session after a prompt-tools resume; identical call succeeds from a fresh run against the same never-restarted Gateway `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#135503](https://github.com/openclaw/openclaw/issues/135503) [Feature]: Move session owner filters into a submenu `enhancement` `maintainer` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#135487](https://github.com/openclaw/openclaw/issues/135487) [Bug]: Native localization guard accepts uncatalogued macOS interpolation `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#135472](https://github.com/openclaw/openclaw/issues/135472) check-lint: --extension-stripe rejects the unsplit extensions shard on unconstrained runners `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#135471](https://github.com/openclaw/openclaw/issues/135471) [Bug]: gateway status --require-rpc rejects an auth-none service as an explicit URL override `bug` `maintainer` `P1` `clawsweeper:source-repro` 💬1
- [#135458](https://github.com/openclaw/openclaw/issues/135458) Ordinary CLI invocation of an older/divergent build destructively reconciles a newer-lineage state DB in place (dropped tables/indexes/columns, marker and user_version rewritten) - no destructive-action guard on the CLI state-open path, unlike gateway startup `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:needs-live-repro` 💬1
- [#135452](https://github.com/openclaw/openclaw/issues/135452) [Bug]: Discord session-busy notices bypass quiet reply policy `bug` `regression` `P2` `maturity:stable` 💬1
- [#135450](https://github.com/openclaw/openclaw/issues/135450) [Bug]: Post-update repair retains stale npm plugins when install records are missing `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#135156](https://github.com/openclaw/openclaw/issues/135156) [Bug]: Control UI progressCard.get can send ownerless catalog session key in explicit multi-agent setups `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#135433](https://github.com/openclaw/openclaw/issues/135433) Gateway lifecycle: hot reload escalates retryable cron reconcile into self-restart; shutdown drain hardcoded at 315s 💬1
- [#135435](https://github.com/openclaw/openclaw/issues/135435) Heartbeat timeouts unenforceable: payloads cannot carry timeoutSeconds, non-cron wakes silently replace configured state, no pre-stream liveness guard `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#135436](https://github.com/openclaw/openclaw/issues/135436) Embedded agent loses cron.* when ambient OPENCLAW_GATEWAY_URL reclassifies target as remote; in-process dispatch not injected for cron tool; no narrower cron scope than operator.admin `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#135434](https://github.com/openclaw/openclaw/issues/135434) Cron: disable-then-redeclare mints duplicate system-owned declarationKeys with no native repair path; heartbeat turns create task records docs say cannot exist `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#135427](https://github.com/openclaw/openclaw/issues/135427) sessions_send should honor agentId over a non-empty label instead of failing with 'No session found with label' `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#135416](https://github.com/openclaw/openclaw/issues/135416) Extensions cannot consume structured CLI-backend quota/subscription failures before auth-profile settlement `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#135424](https://github.com/openclaw/openclaw/issues/135424) Update failure: dirty (2026.8.1) `maintainer` 💬1
- [#135079](https://github.com/openclaw/openclaw/issues/135079) [Bug]: 2026.8.1 doctor persists unresolved model env references as API keys `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#135388](https://github.com/openclaw/openclaw/issues/135388) WeCom plugin re-registers wecom-cli tool every turn; prompt-tools restarts on claude-cli runtime break subagent completion delivery 💬1
- [#135140](https://github.com/openclaw/openclaw/issues/135140) `openai/*` model calls fail instantly with "Explicit auth order for openai has no usable profiles" after 2026.8.1 upgrade (ChatGPT OAuth is healthy) `P1` `clawsweeper:needs-live-repro` `impact:auth-provider` `issue-rating: 🐚 platinum hermit` 💬1
- [#135377](https://github.com/openclaw/openclaw/issues/135377) [Bug]: iOS secure Tailnet setup-code pairing still stalls before WebSocket on 2026.8.1 `impact:auth-provider` `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#135371](https://github.com/openclaw/openclaw/issues/135371) Codex harness: add fail-closed `before_agent_run` parity before `turn/start` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#135365](https://github.com/openclaw/openclaw/issues/135365) [Bug]: Test wrappers stall after passing summaries during subprocess artifact verification `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#135354](https://github.com/openclaw/openclaw/issues/135354) ask_user prompts say "Tap an option" on channels that render no tappable control `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#135356](https://github.com/openclaw/openclaw/issues/135356) Discord reactions never trigger a real agent reply — enqueueRoutedSystemEvent should route through the component/interaction dispatch path `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#135237](https://github.com/openclaw/openclaw/issues/135237) [Bug]: First accent color swatch resets to Coral `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#135335](https://github.com/openclaw/openclaw/issues/135335) [Bug]: Native merge receipt recovery stalls when main advances `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#135333](https://github.com/openclaw/openclaw/issues/135333) [Bug]: Unresolvable self-hosted Firecrawl baseUrl reported as "not private" instead of a DNS failure `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#135331](https://github.com/openclaw/openclaw/issues/135331) [Feature]: Extend protected secret egress to local container sandboxes `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#135327](https://github.com/openclaw/openclaw/issues/135327) [Bug]: bare-token NO_REPLY replies leak empty/twin renders when multiple sessions reply concurrently 💬1
- [#135320](https://github.com/openclaw/openclaw/issues/135320) [Bug]: Existing agent instance loses recent continuity after runtime upgrade `bug` `regression` `P3` `impact:session-state` 💬1
- [#135324](https://github.com/openclaw/openclaw/issues/135324) [Feature]: Support OAuth for node-hosted MCP servers `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#135308](https://github.com/openclaw/openclaw/issues/135308) [Bug]: [Feishu] callback buttons don't render in card JSON 2.0 — but do in JSON 1.0 (same tenant, same client, same App config) `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#135309](https://github.com/openclaw/openclaw/issues/135309) [Bug]: reloading the browser extension silently disables all tab access while the popup still reports "Connected" `P2` `impact:ux-friction` 💬1
- [#135307](https://github.com/openclaw/openclaw/issues/135307) [Feature]: Manage backup schedules on remote Gateways `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#135297](https://github.com/openclaw/openclaw/issues/135297) doctor --fix aborts immediately on legacy exec-approvals.json instead of migrating it `P1` `impact:other` `maturity:stable` 💬1
- [#135293](https://github.com/openclaw/openclaw/issues/135293) [Feature]: Render Mermaid diagrams in native chat `enhancement` `maintainer` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#135247](https://github.com/openclaw/openclaw/issues/135247) [Feature]: Add time-range filters to sessions_search `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#135250](https://github.com/openclaw/openclaw/issues/135250) [Bug]: iOS transcript shifts horizontally and flickers while scrolling during an active run `bug` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#135249](https://github.com/openclaw/openclaw/issues/135249) [Bug]: iOS chat turns black after long-pressing an assistant message `bug` `maintainer` `P1` `clawsweeper:needs-info` 💬1
- [#135251](https://github.com/openclaw/openclaw/issues/135251) [Bug]: iOS opens existing sessions at the latest user-turn start instead of current output `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#135244](https://github.com/openclaw/openclaw/issues/135244) claude-cli session reset drops conversation history and re-stamps surviving messages with restart time `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#135242](https://github.com/openclaw/openclaw/issues/135242) [Feature]: Wake Gateway sessions when worker background commands finish `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#134971](https://github.com/openclaw/openclaw/issues/134971) WebChat duplicates assistant commentary messages (constant itemId "commentary-0" breaks stream-segment reconciliation) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#135236](https://github.com/openclaw/openclaw/issues/135236) [Feature]: Add opt-in native WhatsApp contact-card sending to the message tool `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#135176](https://github.com/openclaw/openclaw/issues/135176) [Bug]: Stale group reconciliation revokes valid selected-tab commands `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#135234](https://github.com/openclaw/openclaw/issues/135234) doctor --fix reports the agents.list to agents.entries migration but never performs it, blocking gateway startup `P1` `impact:crash-loop` `maturity:stable` `impact:ux-friction` 💬1
- [#135228](https://github.com/openclaw/openclaw/issues/135228) A LINE reply that offers a control and carries a long answer is dropped whole `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#135230](https://github.com/openclaw/openclaw/issues/135230) [Bug]: writeFileIfMissing throws EPERM (not EEXIST) on Windows NTFS `bug` `no-stale` `bug:behavior` `P1` 💬1
- [#135214](https://github.com/openclaw/openclaw/issues/135214) [Bug]: iOS chat transcript disappears while typing and after sending until forced redraw `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#135217](https://github.com/openclaw/openclaw/issues/135217) [Bug]: Assistant message text cannot be selected or copied in the iOS app `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#135215](https://github.com/openclaw/openclaw/issues/135215) [Bug]: iOS composer strips line breaks and joins words in sent messages `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:data-loss` 💬1
- [#135211](https://github.com/openclaw/openclaw/issues/135211) [Bug]: /new /reset carries the "Retained accepted inputs" over and cannot kill these `bug` `bug:behavior` `P2` `impact:session-state` 💬1
- [#135194](https://github.com/openclaw/openclaw/issues/135194) Agent-database maintenance lease (60s) expires during its own synchronous integrity_check - v17->v19 migration and doctor --fix fail deterministically on large databases `bug` `bug:behavior` `P1` `impact:session-state` 💬1
- [#135197](https://github.com/openclaw/openclaw/issues/135197) memory_search 15s deadline: repeated full-reindex storms while index reports `Dirty: no` (mid-size install, single active chat) `P1` `impact:session-state` 💬1
- [#135192](https://github.com/openclaw/openclaw/issues/135192) 2026.8.1 regressions: stale turn claims kill long runs; completion announcements dropped; symlink migration writes stale over-cap bootstrap content; ingress lane blocks silently on legacy state `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#135191](https://github.com/openclaw/openclaw/issues/135191) Legacy delivery-queue migration re-activates months-old stale 'pending' entries, causing mass outbound message flood on reconnect `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#135188](https://github.com/openclaw/openclaw/issues/135188) Control UI: interim commentary blocks render 3–4× during a turn (render-only; resolves on commit) `P2` `impact:ux-friction` 💬1
- [#135190](https://github.com/openclaw/openclaw/issues/135190) [Bug]: Invalid optional third-party plugin config prevents Gateway startup and blocks healthy channels `P2` `impact:crash-loop` 💬1
- [#135178](https://github.com/openclaw/openclaw/issues/135178) [Feature]: Show Codex and Claude Code session catalogs in the native iOS app `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#135152](https://github.com/openclaw/openclaw/issues/135152) agents.ownership: "explicit" — unowned Talk relay & CLI ops fail with no auto-owner fallback `P2` `maturity:stable` 💬1
- [#135151](https://github.com/openclaw/openclaw/issues/135151) doctor --fix deadlocks when legacy exec-approvals.json exists (repair-ordering bug) `P1` `impact:other` 💬1
- [#135142](https://github.com/openclaw/openclaw/issues/135142) web.login.start accepts a missing accountId: QR pairing writes into the default account and stops every other account's listener `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:message-loss` 💬1
- [#135144](https://github.com/openclaw/openclaw/issues/135144) [Bug]: Intermittent workspace-lock validation failure during concurrent rollback/recovery `bug` `maintainer` `P1` `clawsweeper:source-repro` 💬1
- [#135139](https://github.com/openclaw/openclaw/issues/135139) [Bug]: Stable 2026.8.1 marks recovered isolated cron tool error fatal after successful session `P2` `impact:session-state` 💬1
- [#135132](https://github.com/openclaw/openclaw/issues/135132) [Bug]: Cron announce delivery during active turn silently drops the turn final reply (WhatsApp) 💬1
- [#135089](https://github.com/openclaw/openclaw/issues/135089) [Bug]: zsh Tab completion evaluates subcommand descriptions `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#134690](https://github.com/openclaw/openclaw/issues/134690) Claude subprocess failures discard actionable stderr diagnostics `maintainer` 💬1
- [#135104](https://github.com/openclaw/openclaw/issues/135104) [Bug]: changed-file checks omit type-aware lint for root tests `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#135134](https://github.com/openclaw/openclaw/issues/135134) [Bug]: 2026.8.1 preserves legacy OpenAI provider override that breaks Codex routes `P2` `impact:auth-provider` 💬1
- [#135133](https://github.com/openclaw/openclaw/issues/135133) [Bug]: Docker Compose Doctor reports stale Gateway PID 8 and skips SQLite migrations `P1` `impact:message-loss` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#135129](https://github.com/openclaw/openclaw/issues/135129) [Bug]: Invalid tool_search query/queries calls can leave turns silent and sessions stuck running `P1` `impact:session-state` `impact:message-loss` 💬1
- [#135127](https://github.com/openclaw/openclaw/issues/135127) [Feishu] Tool-status line (🛠️ Exec …) remains visible in groups with renderMode raw + streaming off `P3` 💬1
- [#135115](https://github.com/openclaw/openclaw/issues/135115) [Feature]: Role assignment and agent picker in Control UI `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#134883](https://github.com/openclaw/openclaw/issues/134883) [Bug]: Realtime phone calls report host tool cancellation as failure `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#135683](https://github.com/openclaw/openclaw/issues/135683) [Bug]: Control UI is a blank page behind Cloudflare Rocket Loader — boot scripts carry no data-cfasync opt-out, and the Vite build would drop one `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro`

#### 🔒 Closed Issues
- [#135171](https://github.com/openclaw/openclaw/issues/135171) [Bug]: 2026.8.1 and 2026.8.2 gateway crash-loop: bundled Perplexity requires capability consent but cannot be inspected/enabled/disabled
- [#134453](https://github.com/openclaw/openclaw/issues/134453) [Bug]: Windows 2026.8.1 doctor --fix aborts with bare file not found while interactive openclaw doctor completes
- [#124343](https://github.com/openclaw/openclaw/issues/124343) [Bug]: yield-owned settle-wake parks a completed subagent forever — no delivery, no retry, no recorded reason
- [#134608](https://github.com/openclaw/openclaw/issues/134608) [Bug]: 2026.8.1 auth migration archives JSON and writes a success receipt without credentials, permanently blocking repair
- [#99071](https://github.com/openclaw/openclaw/issues/99071) [Bug]: Possible repeated Codex Apps plugin discovery causing excessive disk I/O during a single request (investigated with opensnoop and atop)
- [#134325](https://github.com/openclaw/openclaw/issues/134325) [Bug]: Gateway reports authenticated claude-cli models unavailable, so Control UI hard-disables working rows
- [#96681](https://github.com/openclaw/openclaw/issues/96681) Duplicate reply: message-tool sends followed by short trailing acks ("已发 #xxx", "Sent above", "核心回答如下", "OK")
- [#111944](https://github.com/openclaw/openclaw/issues/111944) [Bug]: Codex commentary is not delivered to Telegram progress or block streaming
- [#128967](https://github.com/openclaw/openclaw/issues/128967) Session layer silently front-truncates large tool results to 64KiB; surviving truncation marker accounts only for tail loss
- [#131102](https://github.com/openclaw/openclaw/issues/131102) [Bug]: tools-policy implicit-grant warning ignores `tools.deny`, advising operators to `alsoAllow` a tool they explicitly denied
- [#68170](https://github.com/openclaw/openclaw/issues/68170) doctor findOtherStateDirs scans /home/*/ — cross-user info leak and false positives on sibling backup dirs
- [#135576](https://github.com/openclaw/openclaw/issues/135576) [Bug]: Codex-harness sessions_spawn can leave detached requester-settle unbound (still present in 2026.8.2)
- [#134968](https://github.com/openclaw/openclaw/issues/134968) Anthropic provider refusals retry the same request
- [#134960](https://github.com/openclaw/openclaw/issues/134960) Windows: CLI backends fail to bind — identity resolver picks npm's extensionless sh shim over .cmd
- [#135013](https://github.com/openclaw/openclaw/issues/135013) [Bug]: claude-cli connection fails with mise usage text when `claude` resolves to a mise shim
- [#134638](https://github.com/openclaw/openclaw/issues/134638) [Bug]: Installer prints an `Installer log:` path that is normally deleted before the user can read it
- [#134895](https://github.com/openclaw/openclaw/issues/134895) [Bug]: Isolated CLI cron announce with default channel=last leaves no operator-visible outcome
- [#135414](https://github.com/openclaw/openclaw/issues/135414) [Bug]: Combined memory/wiki search omits memory index repair guidance
- [#134975](https://github.com/openclaw/openclaw/issues/134975) LINE drops the question and the overflow options when a reply's only control is a select
- [#134421](https://github.com/openclaw/openclaw/issues/134421) [Bug]: channels login/logout unreachable on explicit multi-agent fleets — channel plugin discovery resolves an ambient workspace via the deprecated resolveDefaultAgentId; hint names three remedies, none of which exists on this surface
- [#93908](https://github.com/openclaw/openclaw/issues/93908) [Bug]: [Bug]: Feishu plugin skipping discovery - host reports 2026.5.28 despite 2026.6.8 install
- [#135061](https://github.com/openclaw/openclaw/issues/135061) webchat: attachment failures corrupt the session transcript (trim crash) - and 2026.8.1 dropped .pptx from the allowlist
- [#131113](https://github.com/openclaw/openclaw/issues/131113) [Bug]: Exclusive store-writer queue admits a nested drain, so a write enqueued inside an active writer runs before it
- [#134257](https://github.com/openclaw/openclaw/issues/134257) [Bug]: doctor --fix ignores OPENCLAW_STATE_DIR isolation — mutates configured agent workspaces during rehearsal on copied state; no --dry-run for state migrations
- [#134379](https://github.com/openclaw/openclaw/issues/134379) [Bug]: Model Setup persists legacy claude-cli/* key beside canonical Anthropic CLI route
- [#134967](https://github.com/openclaw/openclaw/issues/134967) [Bug]: Symlinked USER.md/MEMORY.md aborts the entire memory sync ("path must be a regular file") instead of being skipped
- [#135248](https://github.com/openclaw/openclaw/issues/135248) [Bug]: Commentary text still renders 3x on stable 2026.8.1 (fresh install) — #134276 auto-closed as 'fixed on main' but no release contains the fix
- [#125177](https://github.com/openclaw/openclaw/issues/125177) [Bug]: Latest stable v2026.7.1-2 still ships unscrollable Control UI Markdown Preview (fix only in 2026.7.2-beta)
- [#134304](https://github.com/openclaw/openclaw/issues/134304) [Bug]: Unregistered required agent harness leaves model-dependent turns failing while Gateway stays healthy
- [#121513](https://github.com/openclaw/openclaw/issues/121513) [Bug]: agents.list[].identity (name/emoji) never applied to outbound Slack messages despite chat:write.customize scope and correct config
- [#135068](https://github.com/openclaw/openclaw/issues/135068) [Bug]: WebChat silently drops the only failed-exec warning on 2026.8.1
- [#134999](https://github.com/openclaw/openclaw/issues/134999) memory-core short-term-locks rows never expire (expires_at=null) — orphaned lock permanently wedges memory sync after unclean exit
- [#135613](https://github.com/openclaw/openclaw/issues/135613) [Bug]: Keyboard navigation gets stuck after switching sibling submenus
- [#135581](https://github.com/openclaw/openclaw/issues/135581) Auth profiles are not migrated to the shared state DB on 2026.8.2 (models auth list shows "Profiles: (none)")
- [#135575](https://github.com/openclaw/openclaw/issues/135575) [Bug]: Device startup stop controls say cloud worker
- [#135606](https://github.com/openclaw/openclaw/issues/135606) [Bug]: Control UI returns 304 for nonmatching cache validators
- [#131688](https://github.com/openclaw/openclaw/issues/131688) [Bug]: Feishu outbound media falls back to "📎 <local path>" text — staged ~/.openclaw/media/outbound file rejected by localRoots containment
- [#126436](https://github.com/openclaw/openclaw/issues/126436) contextUsage stays `unavailable` for Anthropic-compatible providers that omit `cache_creation_input_tokens` (asymmetry between message_start and message_delta)
- [#135590](https://github.com/openclaw/openclaw/issues/135590) gateway broken after 2026.8.x auto-update, "Legacy workspace setup state requires migration" but nothing actually migrates it
- [#132751](https://github.com/openclaw/openclaw/issues/132751) [Bug]: a skill's binary requirement stays "missing" after a same-process install lands it
- [#135623](https://github.com/openclaw/openclaw/issues/135623) [Feature]: first-class Claude Fable 5.1 support with manifest-owned metadata
- [#135338](https://github.com/openclaw/openclaw/issues/135338) [Bug]: Codex sessions retain stale generic instructions after prompt-hook replacement
- [#124567](https://github.com/openclaw/openclaw/issues/124567) [Bug]: usage.cost and sessions.usage silently treat invalid utcOffset as UTC
- [#134439](https://github.com/openclaw/openclaw/issues/134439) [Bug]: Official Docker image lacks libgomp1, so managed llama.cpp local embeddings can never start
- [#135507](https://github.com/openclaw/openclaw/issues/135507) [Bug]: Control UI can render saved replies above queued prompts during history recovery
- [#126308](https://github.com/openclaw/openclaw/issues/126308) doctor silently strips models.providers.*.models[].compat.supportsEagerToolInputStreaming (missing from ModelCompatSchema)
- [#135266](https://github.com/openclaw/openclaw/issues/135266) Control UI: no way to navigate between same-agent channel sessions (Telegram, WebChat, etc.)
- [#135578](https://github.com/openclaw/openclaw/issues/135578) [Bug]: Profile avatar remains stale after successful upload on 2026.8.2
- [#131765](https://github.com/openclaw/openclaw/issues/131765) fix(exec): alinhar active_node ao resolvedor de alvo
- [#135437](https://github.com/openclaw/openclaw/issues/135437) [Bug]: Doctor reports success while legacy exec approvals still block runtime
- [#135442](https://github.com/openclaw/openclaw/issues/135442) [Bug]: Discord session-busy notices bypass quiet reply policy
- [#135361](https://github.com/openclaw/openclaw/issues/135361) [Bug]: llama-cpp plugin is unable to connect to unsloth hosted on the same machine
- [#135509](https://github.com/openclaw/openclaw/issues/135509) OpenClaw 2.0 migration removed host/config tools from agent main
- [#135340](https://github.com/openclaw/openclaw/issues/135340) [Bug]: Discord realtime voice reports cancelled consults as errors
- [#135408](https://github.com/openclaw/openclaw/issues/135408) [Bug]: Embedding llama-server crashes on inputs >512 tokens: --ubatch-size flag never passed when provider is non-default
- [#134731](https://github.com/openclaw/openclaw/issues/134731) [Bug]: Control UI model picker is inert for local Ollama models — row click emits no sessions.patch (2026.8.1)
- [#133550](https://github.com/openclaw/openclaw/issues/133550) Discord /model picker fails to apply session model override on 2026.8.1-beta.3 (stuck "still processing" / "Failed to apply")
- [#134544](https://github.com/openclaw/openclaw/issues/134544) [Bug]: models.list drops authenticated providers after hot reload until explicit refresh
- [#135389](https://github.com/openclaw/openclaw/issues/135389) [Bug]: Browser control always fails with "local listener owner could not be verified" when the Gateway runs in Docker
- [#135383](https://github.com/openclaw/openclaw/issues/135383) [Bug]: Stale openclaw-doctor subprocess holds SQLite lock, blocking future doctor runs with misleading agent-lease error
- [#130912](https://github.com/openclaw/openclaw/issues/130912) [Bug]: Usage view stays on "cache is rebuilding" forever when compressed session archives exist
- [#135358](https://github.com/openclaw/openclaw/issues/135358) [Bug]: Discord system-agent approval leaves the dashboard proposal pending in 2026.8.1
- [#134864](https://github.com/openclaw/openclaw/issues/134864) [Bug]: Source Gateway preload breaks compiled plugin ESM dependencies
- [#133294](https://github.com/openclaw/openclaw/issues/133294) [Bug]: Telegram callback queries share the per-chat ingress lane, so answerCallbackQuery expires during a long turn
- [#132581](https://github.com/openclaw/openclaw/issues/132581) [Bug]: Gateway crashes after CLI timeout when inherited output remains open
- [#134657](https://github.com/openclaw/openclaw/issues/134657) Plugin registry falsely stays stale when packageBuild lacks bundledDist
- [#135240](https://github.com/openclaw/openclaw/issues/135240) feat(memory): Allow configuring extraPaths as trusted — memory_search tool filters out workspace knowledge files
- [#133211](https://github.com/openclaw/openclaw/issues/133211) [Bug]: Control UI changes duration quantities while localizing them
- [#134830](https://github.com/openclaw/openclaw/issues/134830) Aborted full reindex strands its temp database (*.sqlite.memory-reindex-<uuid>) — clean abort path, no startup sweep; 5.1 GiB leaked in one afternoon
- [#134649](https://github.com/openclaw/openclaw/issues/134649) [Bug]: Gateway shutdown hangs 5+ minutes when local llama-server child process doesn't terminate with parent
- [#135026](https://github.com/openclaw/openclaw/issues/135026) [Bug]: Control UI Stop can discard dictation before the first transcript preview
- [#134997](https://github.com/openclaw/openclaw/issues/134997) [Bug]: Reopening a dropdown during hide can leave it stuck open
- [#134834](https://github.com/openclaw/openclaw/issues/134834) [Bug]: overlapping package jobs can remove the next package’s lifecycle marker
- [#122655](https://github.com/openclaw/openclaw/issues/122655) [Bug]: official @openclaw/discord@latest fails to register on core 2026.8 - plugin-sdk/security-runtime no longer re-exports privateFileStore, Discord silently drops all inbound messages
- [#134233](https://github.com/openclaw/openclaw/issues/134233) [Bug]: LINE renders buttons but the agent is told they are off, pointing at a config key LINE rejects
- [#126730](https://github.com/openclaw/openclaw/issues/126730) [Bug]: Talk loses agent ownership for bare session keys in explicit multi-agent configs
- [#134461](https://github.com/openclaw/openclaw/issues/134461) 2026.8.1: memory-core startup full reindex can block foreground agent replies until command-lane timeout
- [#135352](https://github.com/openclaw/openclaw/issues/135352) [Bug]: explicit-file tests can pass empty without an allow-empty option
- [#127333](https://github.com/openclaw/openclaw/issues/127333) [Bug]: plugin search completion is not announced
- [#135535](https://github.com/openclaw/openclaw/issues/135535) [Feature]: Group Accent color directly below Theme
- [#135694](https://github.com/openclaw/openclaw/issues/135694) 2026.8.1: CLI watchdog profile is unreachable from config — backend.reliability.watchdog is still read but every config path is schema-rejected
- [#135565](https://github.com/openclaw/openclaw/issues/135565) [Bug]: Linux first-run setup hides remote Gateway choice without the CLI
- [#135496](https://github.com/openclaw/openclaw/issues/135496) [Feature]: Recover an explicitly approved replacement PR head
- [#135677](https://github.com/openclaw/openclaw/issues/135677) Gateway-denied tool call can disappear without a requester-visible terminal response
- [#135675](https://github.com/openclaw/openclaw/issues/135675) Approval UI can falsely report "aborted by user" and terminate the agent turn without a visible reply
- [#135678](https://github.com/openclaw/openclaw/issues/135678) memory-core dreaming: promotion weights compound the signalCount gate bypass — recurring daily boilerplate is near-optimal for promotion
- [#135627](https://github.com/openclaw/openclaw/issues/135627) [Bug]: Skill Workshop proposals created in a worktree session bake the worktree path into the target and cannot be applied
- [#135614](https://github.com/openclaw/openclaw/issues/135614) [Bug]: Control UI renders keyed commentary segments multiple times during a run (persisted once)
- [#135587](https://github.com/openclaw/openclaw/issues/135587) fix: one profile can exhaust pending skill ZIP imports for other users
- [#135612](https://github.com/openclaw/openclaw/issues/135612) [Bug]: Scheduled Telegram delivery loses explicit agent owner
- [#135187](https://github.com/openclaw/openclaw/issues/135187) LINE never tells the turn that a group message mentioned the bot
- [#135569](https://github.com/openclaw/openclaw/issues/135569) Signal channel: internal runtime-context block leaks into visible messages when message_id == reply_to_id (thread self-reference)
- [#135551](https://github.com/openclaw/openclaw/issues/135551) Direct iMessage session is embedded and message-only on 2026.8.1
- [#134916](https://github.com/openclaw/openclaw/issues/134916) [Bug]: Control UI error summary exposes raw provider JSON instead of the provider message
- [#135548](https://github.com/openclaw/openclaw/issues/135548) auth.order not respected: gateway keeps selecting api-key profile over preferred OAuth profile for same provider
- [#135221](https://github.com/openclaw/openclaw/issues/135221) [Bug]: Google API-key provider config does not auto-enable the bundled Google plugin under plugins.allow
- [#135527](https://github.com/openclaw/openclaw/issues/135527) Heartbeat commitment delivery forces disableTools, which claude-cli backend hard-rejects
- [#133602](https://github.com/openclaw/openclaw/issues/133602) Profile-owned custom skills for shared Gateways, preserving solo defaults
- [#135149](https://github.com/openclaw/openclaw/issues/135149) Telegram lane can starve on repeated session-start invalidation after aborted turn
- [#134506](https://github.com/openclaw/openclaw/issues/134506) [Bug]: Failed cloud sessions cannot be restarted from Control UI
- [#132369](https://github.com/openclaw/openclaw/issues/132369) Codex: reuse approvals while a remote placement remains active
- [#135452](https://github.com/openclaw/openclaw/issues/135452) [Bug]: Discord session-busy notices bypass quiet reply policy
- [#135156](https://github.com/openclaw/openclaw/issues/135156) [Bug]: Control UI progressCard.get can send ownerless catalog session key in explicit multi-agent setups
- [#119918](https://github.com/openclaw/openclaw/issues/119918) [Bug]: Claude provider shows HTTP 403 scope error with no re-authentication option in dashboard
- [#135433](https://github.com/openclaw/openclaw/issues/135433) Gateway lifecycle: hot reload escalates retryable cron reconcile into self-restart; shutdown drain hardcoded at 315s
- [#135424](https://github.com/openclaw/openclaw/issues/135424) Update failure: dirty (2026.8.1)
- [#135079](https://github.com/openclaw/openclaw/issues/135079) [Bug]: 2026.8.1 doctor persists unresolved model env references as API keys
- [#135388](https://github.com/openclaw/openclaw/issues/135388) WeCom plugin re-registers wecom-cli tool every turn; prompt-tools restarts on claude-cli runtime break subagent completion delivery
- [#135140](https://github.com/openclaw/openclaw/issues/135140) `openai/*` model calls fail instantly with "Explicit auth order for openai has no usable profiles" after 2026.8.1 upgrade (ChatGPT OAuth is healthy)
- [#135377](https://github.com/openclaw/openclaw/issues/135377) [Bug]: iOS secure Tailnet setup-code pairing still stalls before WebSocket on 2026.8.1
- [#130918](https://github.com/openclaw/openclaw/issues/130918) [Bug]: Compressed session archives lose their session id in usage discovery
- [#135327](https://github.com/openclaw/openclaw/issues/135327) [Bug]: bare-token NO_REPLY replies leak empty/twin renders when multiple sessions reply concurrently
- [#135320](https://github.com/openclaw/openclaw/issues/135320) [Bug]: Existing agent instance loses recent continuity after runtime upgrade
- [#135309](https://github.com/openclaw/openclaw/issues/135309) [Bug]: reloading the browser extension silently disables all tab access while the popup still reports "Connected"
- [#135297](https://github.com/openclaw/openclaw/issues/135297) doctor --fix aborts immediately on legacy exec-approvals.json instead of migrating it
- [#134971](https://github.com/openclaw/openclaw/issues/134971) WebChat duplicates assistant commentary messages (constant itemId "commentary-0" breaks stream-segment reconciliation)
- [#135176](https://github.com/openclaw/openclaw/issues/135176) [Bug]: Stale group reconciliation revokes valid selected-tab commands
- [#135234](https://github.com/openclaw/openclaw/issues/135234) doctor --fix reports the agents.list to agents.entries migration but never performs it, blocking gateway startup
- [#132739](https://github.com/openclaw/openclaw/issues/132739) [Feature]: Deliver the buttons and selects an agent reply offers on Matrix replies
- [#135211](https://github.com/openclaw/openclaw/issues/135211) [Bug]: /new /reset carries the "Retained accepted inputs" over and cannot kill these
- [#70233](https://github.com/openclaw/openclaw/issues/70233) [Bug]: memory-lancedb plugin ignores runtime config updates on Windows (stale API key / baseUrl canary ignored)
- [#113019](https://github.com/openclaw/openclaw/issues/113019) [Bug]: Session write-lock orphaned after aborted turn — reacquireAfterPrompt() re-acquires on torn-down attempt; session dead ~17min
- [#135194](https://github.com/openclaw/openclaw/issues/135194) Agent-database maintenance lease (60s) expires during its own synchronous integrity_check - v17->v19 migration and doctor --fix fail deterministically on large databases
- [#135197](https://github.com/openclaw/openclaw/issues/135197) memory_search 15s deadline: repeated full-reindex storms while index reports `Dirty: no` (mid-size install, single active chat)
- [#135188](https://github.com/openclaw/openclaw/issues/135188) Control UI: interim commentary blocks render 3–4× during a turn (render-only; resolves on commit)
- [#135190](https://github.com/openclaw/openclaw/issues/135190) [Bug]: Invalid optional third-party plugin config prevents Gateway startup and blocks healthy channels
- [#135152](https://github.com/openclaw/openclaw/issues/135152) agents.ownership: "explicit" — unowned Talk relay & CLI ops fail with no auto-owner fallback
- [#120659](https://github.com/openclaw/openclaw/issues/120659) [Bug]: Docker selection stages WhatsApp but excludes it from the runtime build
- [#135151](https://github.com/openclaw/openclaw/issues/135151) doctor --fix deadlocks when legacy exec-approvals.json exists (repair-ordering bug)
- [#135139](https://github.com/openclaw/openclaw/issues/135139) [Bug]: Stable 2026.8.1 marks recovered isolated cron tool error fatal after successful session
- [#135132](https://github.com/openclaw/openclaw/issues/135132) [Bug]: Cron announce delivery during active turn silently drops the turn final reply (WhatsApp)
- [#135089](https://github.com/openclaw/openclaw/issues/135089) [Bug]: zsh Tab completion evaluates subcommand descriptions
- [#134690](https://github.com/openclaw/openclaw/issues/134690) Claude subprocess failures discard actionable stderr diagnostics
- [#135104](https://github.com/openclaw/openclaw/issues/135104) [Bug]: changed-file checks omit type-aware lint for root tests
- [#135134](https://github.com/openclaw/openclaw/issues/135134) [Bug]: 2026.8.1 preserves legacy OpenAI provider override that breaks Codex routes
- [#135129](https://github.com/openclaw/openclaw/issues/135129) [Bug]: Invalid tool_search query/queries calls can leave turns silent and sessions stuck running
- [#135127](https://github.com/openclaw/openclaw/issues/135127) [Feishu] Tool-status line (🛠️ Exec …) remains visible in groups with renderMode raw + streaming off
- [#134883](https://github.com/openclaw/openclaw/issues/134883) [Bug]: Realtime phone calls report host tool cancellation as failure

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 239,515 · **Open issues:** 38,598 · **Last push:** <1h ago

On September 2, 2026, there were no new releases or merged pull requests for Hermes Agent. A notable issue emerged, #100461, detailing a crash in the anthropic SDK when importing with CPython 3.12.13 due to typing recursion during concurrent cold-starts. Additionally, #100645 reported a failure in Windows updates where gateway launches initiated via Scheduled Task were misidentified, leading to an "Access Denied" error. Another key issue is #100778, which proposed adding WebSocket disconnect diagnostics to assist with debugging periodic reconnections. Overall, the day was primarily focused on addressing existing bugs and gathering community insights.

#### 🐛 New Issues
- [#100461](https://github.com/NousResearch/hermes-agent/issues/100461) v0.21.0: anthropic SDK import crashes on cpython-3.12.13 typing recursion (concurrent cold-start) `type/bug` `comp/agent` `provider/anthropic` `P1` 💬4
- [#100656](https://github.com/NousResearch/hermes-agent/issues/100656) deepseek-v4-flash-0731 serves 163,840-token context window while model spec is 1M `type/bug` `provider/nous` `P2` `needs-repro` 💬1
- [#100645](https://github.com/NousResearch/hermes-agent/issues/100645) Windows update aborts: gateway launched via Scheduled Task is misidentified as SCM service "Schedule" — update fails with Access Denied `type/bug` `duplicate` `comp/cli` `P2` 💬2
- [#100772](https://github.com/NousResearch/hermes-agent/issues/100772) `profile install` does not clear a tombstone when reinstalling a deleted distribution profile `type/bug` `comp/cli` `P2` `sweeper:risk-compatibility` 💬1
- [#100730](https://github.com/NousResearch/hermes-agent/issues/100730) patch tool corrupts backslash-heavy new_string — writes 3 backslashes where 1 was intended (intermittent) `type/bug` `comp/tools` `tool/file` `P2` 💬1
- [#100403](https://github.com/NousResearch/hermes-agent/issues/100403) Plugin-registered skills are omitted from interactive skill commands `type/bug` `comp/agent` `comp/cli` `comp/tui` 💬1
- [#100444](https://github.com/NousResearch/hermes-agent/issues/100444) [Bug]: Docker containers do not consistently apply config.yaml environment and workspace-mount settings `type/bug` `comp/tools` `backend/docker` `area/config` 💬1
- [#100731](https://github.com/NousResearch/hermes-agent/issues/100731) Hardcode registry for Russian locale — interest check before opening a PR `type/feature` `comp/plugins` `P3` `needs-decision` 💬1
- [#100738](https://github.com/NousResearch/hermes-agent/issues/100738) browser_tool janitor retries a failing session cleanup forever: get_secret('CAMOFOX_URL') has no profile secret scope on multiplexed gateways, and failures never leave _session_last_activity `type/bug` `duplicate` `comp/gateway` `tool/browser` 💬1
- [#100717](https://github.com/NousResearch/hermes-agent/issues/100717) [Bug]: Telegram background completion after /new replies to stale pre-reset message `type/bug` `comp/gateway` `tool/terminal` `platform/telegram` 💬1
- [#100715](https://github.com/NousResearch/hermes-agent/issues/100715) Kanban: worker spawn fails with "Unknown skill(s)" when --skill names a builtin skill `type/bug` `comp/cron` `tool/skills` `P3` 💬1
- [#100788](https://github.com/NousResearch/hermes-agent/issues/100788) [Bug]: load_transcript() returns [] on a failed read — a corrupt state.db silently resumes as a new conversation (gap in #82616) `type/bug` `comp/gateway` `platform/telegram` `P1`
- [#100773](https://github.com/NousResearch/hermes-agent/issues/100773) [Windows][Desktop] reapOrphans 30s per-record probe stalls boot for 5+ minutes when ownership file accumulates `type/perf` `P2` `sweeper:risk-platform-windows` `comp/desktop`
- [#100776](https://github.com/NousResearch/hermes-agent/issues/100776) [Desktop] Tool-heavy turns show raw interim commentary without visual distinction from final answer `type/feature` `P3` `sweeper:risk-platform-windows` `comp/desktop`
- [#100778](https://github.com/NousResearch/hermes-agent/issues/100778) [Desktop] Add WS disconnect diagnostics (heartbeat_pings, last_inbound_ago, close reason) to help debug periodic reconnects `type/feature` `comp/tui` `P3` `sweeper:risk-platform-windows`
- [#100768](https://github.com/NousResearch/hermes-agent/issues/100768) Desktop: 30s transcript re-graft rebuilds the entire message list (2k-13k DOM mutations) even when content is unchanged — visible blanking/flash on long sessions (photosensitivity risk) `type/bug` `P2` `needs-repro` `sweeper:risk-session-state`
- [#100762](https://github.com/NousResearch/hermes-agent/issues/100762) [Bug]: bare /refine silently dropped when auxiliary.background_review.enabled=false (breaks #87250 manual-refine contract) `type/bug` `comp/agent` `comp/cli` `comp/gateway`
- [#100747](https://github.com/NousResearch/hermes-agent/issues/100747) Windows: Ctrl+C is a no-op once the TUI unwinds — the exit backstop is unreachable, leaving an unkillable CLI `type/bug` `comp/cli` `P2` `sweeper:risk-platform-windows`
- [#100748](https://github.com/NousResearch/hermes-agent/issues/100748) ci.yaml fails to parse since 24f5a60 (re-disable e2e): expression not closed on line 126 `type/bug` `P1` `sweeper:risk-automation`
- [#100740](https://github.com/NousResearch/hermes-agent/issues/100740) Managed local runtime installs CPU llama.cpp build on AMD/Intel GPU machines — vendor probe is NVIDIA-only, Vulkan never selected `type/perf` `comp/cli` `backend/local` `P2`
- [#100732](https://github.com/NousResearch/hermes-agent/issues/100732) Desktop app: Reasoning effort dropdown shows the same value for both profiles after switching 'Applies to' `type/bug` `area/config` `P2` `sweeper:risk-compatibility`
- [#100723](https://github.com/NousResearch/hermes-agent/issues/100723) Desktop ghost WebSocket reconnect loop → auth.json file-lock conflict → Nous OAuth session revoked (Windows, v0.21.0) `type/bug` `provider/nous` `area/auth` `P2`
- [#100655](https://github.com/NousResearch/hermes-agent/issues/100655) [Feature]: Evaluate an opt-in pre-lifecycle boundary for external applications `type/feature` `innovation` `comp/agent` `comp/cli`
- [#100716](https://github.com/NousResearch/hermes-agent/issues/100716) [Bug]: is_repetition_dominated misses almost every real repetition loop, and only runs on the finish_reason=length path `type/bug` `comp/agent` `P2` `sweeper:risk-message-delivery`

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 90,704 · **Open issues:** 7,321 · **Last push:** 1h ago

On September 2, 2026, there were no new releases for vLLM; however, several important pull requests were merged. Key changes included improvements to the CI pipeline with sharded testing groups and the restoration of `weight_dtype` in the `QuarkW8A8Fp8MoEMethod`, addressing a critical bug in GPT-OSS FP8 MoE weight loading. Additionally, the Rust frontend received updates with support for the Qwen4-exp multimodal model. Notably, a new issue was raised regarding the qwen3_coder parser, which was found to silently ignore specific tool choices, drawing attention for its potential impact on functionality. Overall, the day focused on enhancing performance and fixing crucial bugs rather than introducing new versions.

#### ✅ Merged PRs
- [#54827](https://github.com/vllm-project/vllm/pull/54827) [CI/Build] Gate PR title check on ready PRs & use slim runners
- [#52679](https://github.com/vllm-project/vllm/pull/52679) [ROCm][CI] Handle tied experts in softplus sqrt top-k test
- [#54754](https://github.com/vllm-project/vllm/pull/54754) [CI] Shard long kernel test groups
- [#54752](https://github.com/vllm-project/vllm/pull/54752) [CI] Shard distributed model jobs above the 24h P90 threshold
- [#52353](https://github.com/vllm-project/vllm/pull/52353) [CI] Split nightly MTP acceptance tests
- [#52910](https://github.com/vllm-project/vllm/pull/52910) [Rust Frontend] Attribute decoded text to tokens
- [#53524](https://github.com/vllm-project/vllm/pull/53524) [Kimi-K3][Perf] Prefetch ll_bf16 router weights for M=1
- [#54745](https://github.com/vllm-project/vllm/pull/54745) [CI] Disable CUDA graphs for GLM PCP evals
- [#54823](https://github.com/vllm-project/vllm/pull/54823) [CI] Remove MRV2-specific tests
- [#54781](https://github.com/vllm-project/vllm/pull/54781) [Kimi Bug] Fix `cannot access local variable 'active_non_spec_mask_cpu'`
- [#54824](https://github.com/vllm-project/vllm/pull/54824) [Bugfix] Restore `weight_dtype` in `QuarkW8A8Fp8MoEMethod` to fix GPT-OSS FP8 MoE weight loading
- [#54679](https://github.com/vllm-project/vllm/pull/54679) [Bugfix][KV Connector] Fix DecodeBench DCP block selection
- [#54605](https://github.com/vllm-project/vllm/pull/54605) [CI] Read the CRCR report token from a Buildkite secret
- [#49381](https://github.com/vllm-project/vllm/pull/49381) [ModelOpt] Redesign the LinearMethod classes using the generic QuantKey-driven method
- [#54813](https://github.com/vllm-project/vllm/pull/54813) [Rust Frontend] Enable Qwen4-exp multimodal support
- [#54272](https://github.com/vllm-project/vllm/pull/54272) [Bugfix][KV Connector] Fix Mooncake physical-block transfer length
- [#52832](https://github.com/vllm-project/vllm/pull/52832) [Bugfix][Mooncake] Offload producer partial tails on request finish
- [#51678](https://github.com/vllm-project/vllm/pull/51678) [Bugfix][Profiler] Fix API server crash on double /stop_profile
- [#54052](https://github.com/vllm-project/vllm/pull/54052) [Bugfix][Model] Fix GraniteMoeHybrid per-expert quantized weight loading
- [#54773](https://github.com/vllm-project/vllm/pull/54773) [ROCm][MoE] Fix gfx950 block scale swizzle for AITER Triton MXFP4 W4A16
- [#54303](https://github.com/vllm-project/vllm/pull/54303) [Rust Frontend] Bound recursive argument parsers
- [#46872](https://github.com/vllm-project/vllm/pull/46872) [Chore] Remove redundant `_pack_topk_ids_weights_kernel` in TrtLLM NvFP4 MoE
- [#52285](https://github.com/vllm-project/vllm/pull/52285) [Bugfix] Log platform plugin detection failures
- [#53279](https://github.com/vllm-project/vllm/pull/53279) [ROCm][CI] Add ROCm misc ops and env tests
- [#54794](https://github.com/vllm-project/vllm/pull/54794) [Feature] Avoid flashinfer autotune each time when vllm source change
- [#54799](https://github.com/vllm-project/vllm/pull/54799) [Bugfix][Frontend] Honor skip_decoder_start_token in async encoder-decoder rendering
- [#54622](https://github.com/vllm-project/vllm/pull/54622) [Bugfix][Frontend] Restore the chat template content format mismatch warning
- [#53291](https://github.com/vllm-project/vllm/pull/53291) [CI] Speed up quantization test group
- [#47562](https://github.com/vllm-project/vllm/pull/47562) [Bugfix] Drop incomplete tool-call markup in non-streaming to match streaming
- [#54806](https://github.com/vllm-project/vllm/pull/54806) [Misc] Share Buildkite CI failure skill across agents
- [#53129](https://github.com/vllm-project/vllm/pull/53129) [KV Connector] Support heterogeneous TP sharing in Mooncake Store Connector
- [#54573](https://github.com/vllm-project/vllm/pull/54573) [Fix] Fix FSE compatibility detection for Quark-produced models
- [#53568](https://github.com/vllm-project/vllm/pull/53568) [Perf][Kernel] Initialize NVFP4 padding in quant kernel
- [#54533](https://github.com/vllm-project/vllm/pull/54533) [Bugfix] Support Sentence Transformers 5.4+ serialized configs
- [#54760](https://github.com/vllm-project/vllm/pull/54760) [Transformers backend] Replace vocab embeddings in `recursive_replace`
- [#51217](https://github.com/vllm-project/vllm/pull/51217) [MoE] Generalize masked activation for padded layouts
- [#54306](https://github.com/vllm-project/vllm/pull/54306) [Bugfix] Gate sm_100-only kernel tests on the capability family, not >=
- [#54708](https://github.com/vllm-project/vllm/pull/54708) [Bugfix] Reject tokenless chat and audio streams
- [#54262](https://github.com/vllm-project/vllm/pull/54262) [Mypy] Fix typing for M models
- [#53870](https://github.com/vllm-project/vllm/pull/53870) [Bugfix] Support MCP SDK 2.x tool input schemas
- [#52017](https://github.com/vllm-project/vllm/pull/52017) [Kernel] Add B12X causal paged attention backend
- [#52506](https://github.com/vllm-project/vllm/pull/52506) [Mamba] Add FlashInfer ReplaySSM backend
- [#52724](https://github.com/vllm-project/vllm/pull/52724) [Attention] Enable adaptive verification for FLASHINFER_MLA_SPARSE_DSV4
- [#54241](https://github.com/vllm-project/vllm/pull/54241) [Feat][MM Hashing] include media_io_kwargs in multi-modal hashes
- [#49936](https://github.com/vllm-project/vllm/pull/49936) [Doc] Document FP8 GEMM kernel selection and Blackwell support
- [#50622](https://github.com/vllm-project/vllm/pull/50622) [ROCm][MoE] Split AITER CK and Triton MXFP4 W4A16 into separate backends
- [#54560](https://github.com/vllm-project/vllm/pull/54560) [Kernel][Qwen] Add Hopper LL-GEMM tuning table for Qwen4Exp
- [#53388](https://github.com/vllm-project/vllm/pull/53388) [Feature][Spec] Support disabling trailing prefix-cache block dropping
- [#54136](https://github.com/vllm-project/vllm/pull/54136) [Bugfix] Account for client queue time in serve benchmarks
- [#47237](https://github.com/vllm-project/vllm/pull/47237) [Bugifx][INC] Fix INC quantization method selection for non-quantized layers
- [#54750](https://github.com/vllm-project/vllm/pull/54750) [CI/Build] Fix entrypoints coverage

#### 🐛 New Issues
- [#54808](https://github.com/vllm-project/vllm/issues/54808) [Bug]: qwen3_coder / qwen3_xml parser silently ignores tool_choice "required" and named function on /v1/chat/completions (0.28.0) `tool-calling` 💬4
- [#54677](https://github.com/vllm-project/vllm/issues/54677) [Perf]: DeepSeek-V4-Flash-0731 on 4xH800 TP4: v0.28.0 is ~3x slower TTFT and 21-41% lower throughput than v0.26.0 (measured with thinking disabled on both) `tool-calling` `deepseek` `DSv4` 💬3
- [#54701](https://github.com/vllm-project/vllm/issues/54701) [Bug] kimi_k2 streaming tool parser intermittently emits empty tool_calls deltas under concurrent load (finish_reason=tool_calls, no name/arguments) `tool-calling` `kimi` 💬2
- [#54843](https://github.com/vllm-project/vllm/issues/54843) [Bug][CPU][Spec Decode]: --use-fp64-gumbel silently ignored in CPU recovered-token sampling (inv_q downcast to fp32); in-code comment claims otherwise 💬2
- [#54831](https://github.com/vllm-project/vllm/issues/54831) [Bug]: KV offloading impossible for GLM-5.3 (DSA indexer): tail_cache block_size=4 fails the hash-alignment assertion, --mamba-cache-mode align does not reach it `rocm` `glm` 💬2
- [#54766](https://github.com/vllm-project/vllm/issues/54766) [RFC]: Custom all-reduce for XPU `RFC` `intel-gpu` 💬2
- [#54690](https://github.com/vllm-project/vllm/issues/54690) [Bug]: Speculative kv_cache_dtype=fp8 crashes startup on hybrid GDN models - FlashInfer "Unrecognized dtype: auto", then native crash on SM89 with explicit target dtype 💬2
- [#54726](https://github.com/vllm-project/vllm/issues/54726) [Bug]: Qwen3.8-Flash-Next-FP8 + MooncakeStoreConnector fails at startup `bug` 💬1
- [#54744](https://github.com/vllm-project/vllm/issues/54744) [Bug]: GLM-5.3 reasoning leaks into content when clients pass enable_thinking/thinking=false — parser gates on kwargs the GLM-5.3 template never reads `tool-calling` `glm` 💬1
- [#54667](https://github.com/vllm-project/vllm/issues/54667) [Bug]: zero pipeline/prefill context parallel size selects no executor backend `bug` 💬1
- [#54785](https://github.com/vllm-project/vllm/issues/54785) [Bug][XPU] XPU graph capture + MTP num_speculative_tokens=4 produce non-deterministic, wrong logits at temperature=0 (k<=3 clean, eager clean, bs>=2 eager fallback clean, compile-independent) `intel-gpu` 💬1
- [#54691](https://github.com/vllm-project/vllm/issues/54691) [Bug][Spec Decode]: DFlash is a net loss at long context (~185k) on hybrid GDN models - drafter re-scans full accumulated KV every cycle; no per-sequence-length disable hook 💬1
- [#54777](https://github.com/vllm-project/vllm/issues/54777) [RFC]: GDS kv offloading `RFC` 💬1
- [#54775](https://github.com/vllm-project/vllm/issues/54775) [Bug]: KDA/gated-delta-rule chunked-scan buffers are outside memory profiling — runtime OOM at large --max-num-batched-tokens `rocm` 💬1
- [#54765](https://github.com/vllm-project/vllm/issues/54765) [Bug]: Qwen3.8-Flash-Next: ModelOpt NVFP4 checkpoint with an FP8-quantized PLE n-gram table fails to load (ngram_embedding.weight_scale) `quantization` 💬1
- [#54761](https://github.com/vllm-project/vllm/issues/54761) [Bug]: On ROCm, DCP and non-FP8 KV dtypes are unreachable, but the errors suggest fixes that don't exist there `rocm` 💬1
- [#54732](https://github.com/vllm-project/vllm/issues/54732) [Bug]: AITER topK meta buffer ignores pcp_size — every PCP start fails with fused shared experts on ROCm `rocm` 💬1
- [#54671](https://github.com/vllm-project/vllm/issues/54671) [Bug]: LoRA and KV-cache settings reach a compiled torch assertion `bug` 💬1
- [#54728](https://github.com/vllm-project/vllm/issues/54728) [Feature]: [ROCm] Add gfx1030 (RDNA2) to Dockerfile archs + proper gate `feature request` `rocm` 💬1
- [#54704](https://github.com/vllm-project/vllm/issues/54704) [RFC]: fp8 KV cache support for Inkling on SM100-family GPUs `quantization` `inkling` 💬1
- [#54688](https://github.com/vllm-project/vllm/issues/54688) [RFC] Remove torch.compile dependency from Qwen3.8-Flash-Next NVIDIA path `torch.compile` `nvidia`
- [#54670](https://github.com/vllm-project/vllm/issues/54670) [Bug]: multimodal convert plus skip-tokenizer-init breaks processor construction `bug` `multi-modality` 💬1
- [#54681](https://github.com/vllm-project/vllm/issues/54681) [Performance][ROCm] Optimize MiniMax-M3 fresh decode indexer on gfx950 `rocm` `minimax` 💬1
- [#54676](https://github.com/vllm-project/vllm/issues/54676) [Perf]: DeepSeek-V4-Flash-0731 first-token latency regresses 6-13x from v0.26.0 to v0.28.0 on SM90/TP4 (constant ~1s/request prefill floor; knob sweep included) `deepseek` `DSv4` 💬1
- [#54657](https://github.com/vllm-project/vllm/issues/54657) [Bug]: --tensor-parallel-size 0 reaches an uncaught ZeroDivisionError `bug` 💬1
- [#54665](https://github.com/vllm-project/vllm/issues/54665) [Bug]: --decode-context-parallel-size 0 reaches an uncaught ZeroDivisionError `bug` 💬1
- [#54836](https://github.com/vllm-project/vllm/issues/54836) [Feature][Rust Frontend]: Support `--lora-modules` for static adapter loading `rust`
- [#54839](https://github.com/vllm-project/vllm/issues/54839) [Bug]: /v1/unload_lora_adapter never removes the adapter from the engine
- [#54829](https://github.com/vllm-project/vllm/issues/54829) [Feature][Frontend] Add reasoning and content phase per-request metrics `tool-calling`
- [#54828](https://github.com/vllm-project/vllm/issues/54828) [Feature][Frontend] Add per-request timing metrics to the Responses API
- [#54796](https://github.com/vllm-project/vllm/issues/54796) [Bug][XPU] inductor-compiled decode pieces x speculative decode livelock both GPUs at >=32k ctx (graph capture alone clean; native stacks included) `intel-gpu` `speculative-decoding`
- [#54779](https://github.com/vllm-project/vllm/issues/54779) [RFC] Bounded, restart-safe capacity management for the filesystem KV offload tier
- [#54764](https://github.com/vllm-project/vllm/issues/54764) [Bug]: PLE short-conv batched prefill pads all requests to batch-max query length, causing transient activation OOM on mixed-length workloads(Qwen3.8-Flash-Next) `bug`
- [#54763](https://github.com/vllm-project/vllm/issues/54763) [Perf] Qwen3-Next MoE: gate and shared_expert_gate are two separate ReplicatedLinear over the same input
- [#54749](https://github.com/vllm-project/vllm/issues/54749) [RFC]: The dynamic-SD K decision is a batch-keyed array index — agreeing on its shape before more signals arrive
- [#54740](https://github.com/vllm-project/vllm/issues/54740) [Bug]: [XPU] gdn_attention asserts on ragged ngram draft lengths (single stream, survives #53077) `bug` `intel-gpu` `quantization`
- [#54739](https://github.com/vllm-project/vllm/issues/54739) [Bug]: Qwen3.8-Flash-Next generates corrupted Thai orthography under vLLM; the same model under llama.cpp at the same QSA budget is clean `llama` `quantization`
- [#54730](https://github.com/vllm-project/vllm/issues/54730) [Bug]: Backport monolithic routed-experts capture to v0.26.0
- [#54723](https://github.com/vllm-project/vllm/issues/54723) [Bug]: FlashInfer TRTLLM MoE Backend stuck under DP/EP (Kimi K2 base, DeepSeek v3 base) `bug` `deepseek` `quantization` `kimi`
- [#54712](https://github.com/vllm-project/vllm/issues/54712) [Bug]: `--load-format dummy` OOMs on large FP8 parameters — `initialize_single_dummy_weight` materializes a full-size fp16 temporary
- [#54711](https://github.com/vllm-project/vllm/issues/54711) [Bug]: PP: a KV-cache group projected empty still emits `KVCacheTensor`s for other ranks' layers, causing a bare `StopIteration` in `allocate_kv_cache`
- [#54710](https://github.com/vllm-project/vllm/issues/54710) [Bug]: `resolve_kv_cache_layout` asserts every worker reports identical KV layouts — false for hybrid models under pipeline parallelism
- [#54709](https://github.com/vllm-project/vllm/issues/54709) [Bug]: Qwen4Exp (Qwen3.8-Flash-Next) hard-refuses PP>1 for any PLE checkpoint, and its MTP draft head branches on the global `is_first_rank`
- [#54703](https://github.com/vllm-project/vllm/issues/54703) [Performance]: Tiny-window SlidingWindowSpec conv state dominates per-request KV accounting via the in-flight admission reserve `quantization`
- [#54698](https://github.com/vllm-project/vllm/issues/54698) [Bug]: EngineCore hangs indefinitely in torch.xpu.graphs.replay() under concurrent load on Intel Arc B70 (Battlemage) `intel-gpu` `quantization`
- [#54666](https://github.com/vllm-project/vllm/issues/54666) [Feature]: Consider B12X in automatic NVFP4 MoE backend selection on SM120/SM121 before the Marlin fallback `quantization`
- [#54664](https://github.com/vllm-project/vllm/issues/54664) [Bug]: vllm 0.25.0 dsv4 flash PD混部流式输出，无参数可设置，默认输出usage，非流式输出默认带usage `bug` `DSv4`
- [#54661](https://github.com/vllm-project/vllm/issues/54661) [RFC]: Per-KV-cache-group prefix-cache retention, with a hit-min exemption for hit-inert EAGLE sliding-window draft groups `speculative-decoding`
- [#54662](https://github.com/vllm-project/vllm/issues/54662) [Feature]: Log block pool size and per-group blocks-per-request next to "GPU KV cache size: N tokens" (N is max_concurrency x max_model_len)
- [#54658](https://github.com/vllm-project/vllm/issues/54658) [Feature]: Expose multimodal metadata from Render for disaggregated prefill `multi-modality` `kv-connector`

#### 🔒 Closed Issues
- [#40628](https://github.com/vllm-project/vllm/issues/40628) [RFC][vLLM IR]: Batch Invariance Dispatching in vLLM IR
- [#46856](https://github.com/vllm-project/vllm/issues/46856) [Bug][ROCm] GLM5.1 ROCM_AITER_MLA_SPARSE corruption persists between ISL 60k to 137k (AA-LCR dataset) on gfx942 in v0.23.0 (both compiled and eager mode)
- [#50660](https://github.com/vllm-project/vllm/issues/50660) [Bug]: deepseek-v4-flash-0731 can not be Stablize running
- [#43801](https://github.com/vllm-project/vllm/issues/43801) [Performance]: Async scheduling on AMD hardware
- [#47137](https://github.com/vllm-project/vllm/issues/47137) [Bug]: Streaming vs non-streaming tool-parser divergence on a truncated `<tool_call>` opener (ParserEngine / Qwen3)
- [#54607](https://github.com/vllm-project/vllm/issues/54607) [Doc]: --prefix-match-unit and the default match granularity are undocumented
- [#53665](https://github.com/vllm-project/vllm/issues/53665) [Bug]: min_tokens + structured output can empty the token mask and return HTTP 500
- [#48089](https://github.com/vllm-project/vllm/issues/48089) [Bug]: DeepSeek V4 reasoning/tool parsers produce unbalanced tags under concurrent load
- [#51142](https://github.com/vllm-project/vllm/issues/51142) [Feature][CI] Speed up `Quantization` mi300/mi355 test groups
- [#45995](https://github.com/vllm-project/vllm/issues/45995) [Bug]: Sentence-Transformers models saved with sentence-transformers>=5.4.0 are silently mis-pooled — compact `1_Pooling/config.json` (`pooling_mode` string) is not parsed, so vLLM falls back to the architecture-default pooler `
- [#51957](https://github.com/vllm-project/vllm/issues/51957) [Bug][ROCm]: AITER FP8 BMM segfaults with data parallel attention
- [#40741](https://github.com/vllm-project/vllm/issues/40741) [Feature]: Make opencv-python-headless an optional dependency for FIPS compliance
- [#40621](https://github.com/vllm-project/vllm/issues/40621) [Bug]: Qwen/Qwen3.6-27B - Batch Inference still not working in vllm 0.19.1
- [#41250](https://github.com/vllm-project/vllm/issues/41250) [Feature]: Server overloaded response
- [#54616](https://github.com/vllm-project/vllm/issues/54616) [Bug]: reasoning_effort not forwarded to chat_template_kwargs in ChatCompletionRequest
- [#50927](https://github.com/vllm-project/vllm/issues/50927) [Bug]: stack overflow causing system crash: Rust unbounded recursion in the Gemma4 unified parser
- [#54486](https://github.com/vllm-project/vllm/issues/54486) [Bug]: openai chat-template content format breaks structured request contracts
- [#53855](https://github.com/vllm-project/vllm/issues/53855) [Bug]: vLLM 0.27.1 declares an unbounded `mcp` dependency but is incompatible with MCP SDK 2.x
- [#49239](https://github.com/vllm-project/vllm/issues/49239) Malformed /v1/responses request returns a >100MB validation-error body (full input echoed per error)
- [#54681](https://github.com/vllm-project/vllm/issues/54681) [Performance][ROCm] Optimize MiniMax-M3 fresh decode indexer on gfx950
- [#54676](https://github.com/vllm-project/vllm/issues/54676) [Perf]: DeepSeek-V4-Flash-0731 first-token latency regresses 6-13x from v0.26.0 to v0.28.0 on SM90/TP4 (constant ~1s/request prefill floor; knob sweep included)
- [#54657](https://github.com/vllm-project/vllm/issues/54657) [Bug]: --tensor-parallel-size 0 reaches an uncaught ZeroDivisionError
- [#54665](https://github.com/vllm-project/vllm/issues/54665) [Bug]: --decode-context-parallel-size 0 reaches an uncaught ZeroDivisionError
- [#51676](https://github.com/vllm-project/vllm/issues/51676) [Bug]: Stopping profiler twice causes 500 and segfault
- [#54047](https://github.com/vllm-project/vllm/issues/54047) [Bug]: GraniteMoeHybrid cannot load per-expert quantized checkpoints — KeyError: 'layers.0.block_sparse_moe.experts.w2_weight'
- [#54101](https://github.com/vllm-project/vllm/issues/54101) [Bug]: bench serve latency metrics exclude client-side queueing under --max-concurrency
- [#54730](https://github.com/vllm-project/vllm/issues/54730) [Bug]: Backport monolithic routed-experts capture to v0.26.0

### SGLang (`sgl-project/sglang`)

**Stars:** 33,060 · **Open issues:** 5,034 · **Last push:** <1h ago

On September 2, 2026, there were no new release versions for SGLang. Significant contributions included merged pull requests such as #37096, which optimized FLUX.2 quantization, and #37468, which verified performance on the DeepSeek-V4 Flash Vision framework. Bug fixes were also a priority, with #37439 addressing a top-k issue in the AMD implementation, while #37372 proposed a new out-of-process HiCache data plane for device-memory IPC. Notably, a new issue (#37478) was raised regarding unbounded calls in the IndexerKPool, which could lead to resource exhaustion in tensor processing ranks.

#### ✅ Merged PRs
- [#37452](https://github.com/sgl-project/sglang/pull/37452) [CI] Double the base-b-test-1-gpu-large timeout
- [#37096](https://github.com/sgl-project/sglang/pull/37096) [Diffusion] Fuse FLUX.2 NVFP4 FC1, SwiGLU, and FC2 quantization
- [#36865](https://github.com/sgl-project/sglang/pull/36865) [Kernel] Add KDA NVFP4 GEMM for Qwen3.x on SM120
- [#37492](https://github.com/sgl-project/sglang/pull/37492) [Cookbook] Verify DeepSeek-V4 Flash Vision on GB300
- [#37331](https://github.com/sgl-project/sglang/pull/37331) Fix GPU kernel ordering and MXFP8 quantization dispatch
- [#37486](https://github.com/sgl-project/sglang/pull/37486) test: add GLM-5.3 Flash DFlash2 B200 coverage
- [#30915](https://github.com/sgl-project/sglang/pull/30915) [Feature] Megatron LayerNorm sequence parallelism (--enable-layernorm-sp)
- [#36811](https://github.com/sgl-project/sglang/pull/36811) [Kernel] Avoid zero-bias allocation in fused softmax routing
- [#36960](https://github.com/sgl-project/sglang/pull/36960) [ROCm][Bugfix] Cap the DSA MQA-logits budget at AITER's buffer_store limit
- [#37479](https://github.com/sgl-project/sglang/pull/37479) [Cookbook] DeepSeek-V4: add DGX Spark (2x GB10) Flash Official FP4 recipe
- [#36220](https://github.com/sgl-project/sglang/pull/36220) add reindex_device_id to device OOT plugin
- [#35491](https://github.com/sgl-project/sglang/pull/35491) Fix dummy initialization of inverse weight scales
- [#37463](https://github.com/sgl-project/sglang/pull/37463) [mem_cache] Drop the `torch.unique` sync from the SWA page expansion
- [#32882](https://github.com/sgl-project/sglang/pull/32882) [Bugfix] Accept int64 top-k IDs in FlashInfer routed MoE packer
- [#32218](https://github.com/sgl-project/sglang/pull/32218) [FlashInfer] Avoid D2H sync for sliding-window lengths
- [#37468](https://github.com/sgl-project/sglang/pull/37468) [Cookbook] Verify DeepSeek-V4 Flash Vision balanced and high-throughput on B200
- [#37412](https://github.com/sgl-project/sglang/pull/37412) [Docs] GLM-5.3-Flash cookbook: add NVFP4 FP8+TRT-LLM benchmark rows (follow-up to #37109)
- [#37466](https://github.com/sgl-project/sglang/pull/37466) [LoRA] Restore GDN in_proj target-module choices lost in the rebase
- [#36890](https://github.com/sgl-project/sglang/pull/36890) [Feature] Unified memory: support decode context parallelism for Kimi-Linear
- [#37360](https://github.com/sgl-project/sglang/pull/37360) docs(cookbook): enable FlashInfer GDN for Qwen3.5 B200
- [#37453](https://github.com/sgl-project/sglang/pull/37453) [CI][MLX] Restore the mamba_branching_seqlen attribute the MLX runner reads off a request
- [#37290](https://github.com/sgl-project/sglang/pull/37290) [Rust] Rename mem-cache to sglang-radix-tree
- [#36911](https://github.com/sgl-project/sglang/pull/36911) [Memory] Size the CUDA graph pool from warmup measurements and fix graph-pool borrowing
- [#34362](https://github.com/sgl-project/sglang/pull/34362) fix(nixl): make FILE path-mode devId globally unique
- [#37439](https://github.com/sgl-project/sglang/pull/37439) [AMD] Fix v4 topk issue
- [#37438](https://github.com/sgl-project/sglang/pull/37438) [AMD] fix aiter cannot get heuristic kernel regression
- [#34693](https://github.com/sgl-project/sglang/pull/34693) [Kernel] Replace dsv3_router_gemm with the unified tiny GEMM
- [#37158](https://github.com/sgl-project/sglang/pull/37158) [Kernel] Add tuned LFM2.5 Triton MoE configs on B300
- [#36831](https://github.com/sgl-project/sglang/pull/36831) [DSA] Drop the redundant 512 from the top-k transform entry-point names
- [#37385](https://github.com/sgl-project/sglang/pull/37385) [Kernel] Register merged diffusion agent kernels with KDA backend
- [#37435](https://github.com/sgl-project/sglang/pull/37435) [CI] Double JIT kernel unit test timeout
- [#37406](https://github.com/sgl-project/sglang/pull/37406) [CI] Add entrypoint to hc_combine test for standalone execution
- [#37431](https://github.com/sgl-project/sglang/pull/37431) test(npu): add DSV4-Flash / GLM-5.2 / Kimi-K3 gpqa accuracy cases
- [#36216](https://github.com/sgl-project/sglang/pull/36216) [AMD] Fix nightly ROCm 7.0 image build: patch missing <optional> include in AITER topk kernel
- [#36329](https://github.com/sgl-project/sglang/pull/36329) [NPU]Strip padding before FIA kernel for vision encoder padded sequences
- [#37409](https://github.com/sgl-project/sglang/pull/37409) [AMD][CI] Add daily ROCm 10 PR/Nightly Test
- [#35118](https://github.com/sgl-project/sglang/pull/35118) [DSV4] hc-prenorm: fuse the combine step into a Triton kernel
- [#36851](https://github.com/sgl-project/sglang/pull/36851) [AMD] Enable topk v2 GLM ROCm
- [#37242](https://github.com/sgl-project/sglang/pull/37242) [AMD] Gate the aiter memory-reserve exemption behind an env var
- [#35787](https://github.com/sgl-project/sglang/pull/35787) fix(test): deflake zmq load-snapshot round-trip tests
- [#36813](https://github.com/sgl-project/sglang/pull/36813) [NPU] [bugfix] Fix NPU MLA HiCache backup accessing missing data_ptrs.
- [#37392](https://github.com/sgl-project/sglang/pull/37392) [Cookbook] Add the DFlash2 speculative option to GLM-5.3
- [#37380](https://github.com/sgl-project/sglang/pull/37380) Revert "[AMD] Add GLM-5.3-Flash recipes for MI300X, MI325X, and MI355X (#36608)"
- [#37366](https://github.com/sgl-project/sglang/pull/37366) Fix GLM-5.3 Flash CI regressions after latest main merge
- [#33237](https://github.com/sgl-project/sglang/pull/33237) [FlashInfer V0.6.18] feat(dsv4): support --dsa-topk-backend flashinfer with fused top-k
- [#36721](https://github.com/sgl-project/sglang/pull/36721) [mem_cache] Add `free_kv_row` to release a request's kv row by row range
- [#37162](https://github.com/sgl-project/sglang/pull/37162) [Diffusion] Fuse FLUX.2 ModelOpt FP8 producers and QKV packing
- [#37351](https://github.com/sgl-project/sglang/pull/37351) [Cookbook] Add NVFP4 options for DeepSeek-V4 Flash Official (0731) and Pro Official (0813)
- [#37374](https://github.com/sgl-project/sglang/pull/37374) [CI] Fix hybrid wrapper test fake missing kv_index_translator
- [#34647](https://github.com/sgl-project/sglang/pull/34647) [AMD] Enable 12-head MLA aiter fp8 Gluon decode (batched bh16bn128).
- [#37338](https://github.com/sgl-project/sglang/pull/37338) [Fix][CPU] fix xeon ci failure by test_qwen35_flashinfer_fusion
- [#37109](https://github.com/sgl-project/sglang/pull/37109) [Docs] Add NVFP4 section to GLM-5.3-Flash cookbook
- [#37299](https://github.com/sgl-project/sglang/pull/37299) refactor(hicache): simplify decode offload state bookkeeping
- [#37047](https://github.com/sgl-project/sglang/pull/37047) fix(vlm): contain multimodal feature transport failures
- [#37298](https://github.com/sgl-project/sglang/pull/37298) fix: resolve CI regressions after GLM-5.3 Flash rebase
- [#37345](https://github.com/sgl-project/sglang/pull/37345) test: update hybrid attention runner fixtures
- [#37286](https://github.com/sgl-project/sglang/pull/37286) [AMD][MORI] Bump MoRI to 7c51d18 for ionic RoCE dmabuf fix (#509)
- [#37205](https://github.com/sgl-project/sglang/pull/37205) [Unified Cache][4/N]: Add Mooncake backend for external linker
- [#34967](https://github.com/sgl-project/sglang/pull/34967) [MoE] Add FlashInfer SM90 MXFP4 W4A8 CUTLASS MoE
- [#33926](https://github.com/sgl-project/sglang/pull/33926) [DCP] Support decode context parallelism on the trtllm_mla decode path
- [#37339](https://github.com/sgl-project/sglang/pull/37339) [Fix] Use real ReqKvInfo in unit-test req mocks
- [#35500](https://github.com/sgl-project/sglang/pull/35500) [CI/NPU] Isolate multi-node tests by run_id to prevent concurrent-run…
- [#37307](https://github.com/sgl-project/sglang/pull/37307) fix(unified-memory): forward the KV-index translator through every wrapper backend
- [#36624](https://github.com/sgl-project/sglang/pull/36624) [Cohere Command-A-Plus] Optimize decode and BCG capture on SM10X
- [#35703](https://github.com/sgl-project/sglang/pull/35703) [diffusion] fix: fix loading a block-FP8 quantized MiniMax-H3 DiT
- [#36680](https://github.com/sgl-project/sglang/pull/36680) [Diffusion] Optimize Qwen-Image TP collectives and attention
- [#36699](https://github.com/sgl-project/sglang/pull/36699) xpu: record per-model metrics to jsonl for nightly dashboard
- [#37317](https://github.com/sgl-project/sglang/pull/37317) [Kernel] Raise shape limits in shared FLA and MoE kernels (ported from #36507)
- [#35120](https://github.com/sgl-project/sglang/pull/35120) [FlashInfer v0.6.18] add FlashInfer CuTe DSL NVFP4 W4A16 mode

#### 🐛 New Issues
- [#37478](https://github.com/sgl-project/sglang/issues/37478) [ROCm] IndexerKPool calls aiter fp8_mqa_logits unbounded; >2 GiB logits abort every TP rank (#36960 does not cover this class) 💬2
- [#37372](https://github.com/sgl-project/sglang/issues/37372) [Feature] [RFC] [HiCache] Out-of-process HiCache data plane with device-memory IPC 💬2
- [#37430](https://github.com/sgl-project/sglang/issues/37430) [Bug] Kimi-K3 tool_choice=required requests hang until ReadTimeout in 2P2D TP8/DCP8 deployment 💬1
- [#37419](https://github.com/sgl-project/sglang/issues/37419) [Feature] Avoid raw media input prefixes in multimodal error logs 💬1
- [#37326](https://github.com/sgl-project/sglang/issues/37326) [Bug] NEXTN/MTP draft acceptance decays to ~0 over server uptime on qwen4_exp (Qwen3.8-Flash-Next), fully restored by a restart 💬1
- [#37421](https://github.com/sgl-project/sglang/issues/37421) CI: tests flaking on ubuntu-latest 💬1
- [#37393](https://github.com/sgl-project/sglang/issues/37393) [Bug] Kimi-K3 chunked prefill submits different VocabParallelEmbedding ALLREDUCE sizes across TP ranks 💬1
- [#37389](https://github.com/sgl-project/sglang/issues/37389) [RFC][Feature] Extract an In-Process Route Planner from experimental/sgl-router's PD Workflow
- [#37379](https://github.com/sgl-project/sglang/issues/37379) [Model] Qwen3.5-MoE: RuntimeError when using --quantization-param-path for FP8 KV cache 💬1
- [#37349](https://github.com/sgl-project/sglang/issues/37349) [Guide] Setup and Troubleshooting for SGLang on V100 💬1
- [#37342](https://github.com/sgl-project/sglang/issues/37342) [Bug] DeepSeek-V4-Flash-0731 fails to load on v0.5.17/v0.5.18: AssertionError: Hidden size mismatch in the mxfp4 MoE path (works on main) 💬1
- [#37405](https://github.com/sgl-project/sglang/issues/37405) [RFC] Incremental test cleanup, CI taxonomy, and shared diffusion dispatch `RFC`
- [#37451](https://github.com/sgl-project/sglang/issues/37451) [Failure Tracker] PR Test (AMD) `ci-failure-tracker`
- [#37475](https://github.com/sgl-project/sglang/issues/37475) [Bug] DFlash target_layer_ids fallback guesses wrong tap layers; count collision fails silently
- [#37457](https://github.com/sgl-project/sglang/issues/37457) [Bug] Startup logs and server_info expose API keys in resolved server arguments
- [#37410](https://github.com/sgl-project/sglang/issues/37410) [Failure Tracker] PR Test (AMD)
- [#37369](https://github.com/sgl-project/sglang/issues/37369) [Bug] GLM-5.3-Flash RunAI streaming can corrupt fused MLA weights
- [#37368](https://github.com/sgl-project/sglang/issues/37368) [Bug] NVFP4 online MoE loading can use overwritten RunAI streamer tensors
- [#37348](https://github.com/sgl-project/sglang/issues/37348) [Perf] DeepSeek-V4-Flash-0731 on 4×H800 (SM90, TP4, no EP): ~40% lower per-stream decode at conc=32; dp-attention regresses and TBO is gated — what is the recommended small-node config?

#### 🔒 Closed Issues
- [#29957](https://github.com/sgl-project/sglang/issues/29957) [Bug] Deadlock in decode scheduler when running with --grpc-mode
- [#35129](https://github.com/sgl-project/sglang/issues/35129) [Bug] DeepSeek-V4-Flash-0731 + dsv4 + DSPARK + HiCache: long agentic sessions get #cached-token: 0 every turn despite stable 50%+ prefix (short requests hit ~98%)
- [#30009](https://github.com/sgl-project/sglang/issues/30009) [Bug] DeepSeekV4 Pro B300 TP4 conc4 MTP perf regression
- [#29904](https://github.com/sgl-project/sglang/issues/29904) [Bug] Unknown diffusion LLM: DiffusionGemmaForBlockDiffusion
- [#30010](https://github.com/sgl-project/sglang/issues/30010) PD disaggregation decode deadlocks at high per-rank batch size with CUDA graphs (all ranks spinning in flashinfer moeA2ACombineKernel)
- [#30033](https://github.com/sgl-project/sglang/issues/30033) [Bug] PD disaggregation + DP-attention decode: no admission control against future resident-KV growth (running + prealloc) → whole-node lockstep freeze
- [#29875](https://github.com/sgl-project/sglang/issues/29875) [Bug] MI355X nightly: Kimi-K2.6 (trust_remote_code) fails at server startup on image with transformers 5.12.1 (FileNotFoundError: .../blobs/media_utils.py)
- [#30055](https://github.com/sgl-project/sglang/issues/30055) [Bug] illegal CUDA Memory access with Qwen3.5 + HiCache
- [#30002](https://github.com/sgl-project/sglang/issues/30002) [Bug] JoyAI-Echo fails to load with transformers KeyError 'joyai-echo' on SGLang 0.5.14 with Python 3.13
- [#34003](https://github.com/sgl-project/sglang/issues/34003) [Bug] [NPU] Qwen3.5 model does not work in dynamic CPP scenario with radix cache
- [#37410](https://github.com/sgl-project/sglang/issues/37410) [Failure Tracker] PR Test (AMD)

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 126,683 · **Open issues:** 2,361 · **Last push:** <1h ago

On September 2, 2026, the latest release, b10752, introduced metallib build support for xcframeworks, enhancing compatibility for Metal-based applications. Additionally, significant updates in previous releases include the fusion of MoE weighted expert reductions in b10751 and the optimization of n-gram history lookups in kv-cells within b10750. Key merged features today include enhanced metal tunings for M2 Pro and M2 Max from PRs #28122 and #28015, alongside a fix for gemma4-assistant in PR #28183. However, the day also saw the emergence of a critical evaluation bug (#28134) that prevents model loading on certain iGPU configurations, highlighting ongoing challenges with compatibility in the ecosystem.

#### 🚀 New Releases
- [b10752](https://github.com/ggml-org/llama.cpp/releases/tag/b10752) b10752
- [b10751](https://github.com/ggml-org/llama.cpp/releases/tag/b10751) b10751
- [b10750](https://github.com/ggml-org/llama.cpp/releases/tag/b10750) b10750
- [b10749](https://github.com/ggml-org/llama.cpp/releases/tag/b10749) b10749
- [b10743](https://github.com/ggml-org/llama.cpp/releases/tag/b10743) b10743
- [b10742](https://github.com/ggml-org/llama.cpp/releases/tag/b10742) b10742
- [b10741](https://github.com/ggml-org/llama.cpp/releases/tag/b10741) b10741
- [b10740](https://github.com/ggml-org/llama.cpp/releases/tag/b10740) b10740
- [b10739](https://github.com/ggml-org/llama.cpp/releases/tag/b10739) b10739
- [b10738](https://github.com/ggml-org/llama.cpp/releases/tag/b10738) b10738

#### ✅ Merged PRs
- [#28163](https://github.com/ggml-org/llama.cpp/pull/28163) metal : add metallib build support for xcframework
- [#28159](https://github.com/ggml-org/llama.cpp/pull/28159) model : load hparams.n_layer_nextn before n_layer() calls
- [#27461](https://github.com/ggml-org/llama.cpp/pull/27461) metal: enable Metal 4.0 tensor API on M5+/A19+
- [#25952](https://github.com/ggml-org/llama.cpp/pull/25952) cuda: fuse MoE weighted expert reduction
- [#28040](https://github.com/ggml-org/llama.cpp/pull/28040) kv-cells: resolve get_prev_tokens in O(log n) from the sequence position index
- [#28030](https://github.com/ggml-org/llama.cpp/pull/28030) context : autoscale n_ctx_train when yarn scaling is specified
- [#28121](https://github.com/ggml-org/llama.cpp/pull/28121) models : appropriately flag noscan ssm_a tensors
- [#28183](https://github.com/ggml-org/llama.cpp/pull/28183) model : fix gemma4-assistant
- [#28173](https://github.com/ggml-org/llama.cpp/pull/28173) model : load relevant arrays with n_layer_all
- [#28184](https://github.com/ggml-org/llama.cpp/pull/28184) Revert "sycl : add Kronecker product FWHT support for sizes 384, 640, 768, 1280"
- [#28016](https://github.com/ggml-org/llama.cpp/pull/28016) sycl : add Kronecker product FWHT support for sizes 384, 640, 768, 1280
- [#28122](https://github.com/ggml-org/llama.cpp/pull/28122) metal : add fa-vec tuning for M2 Pro
- [#28152](https://github.com/ggml-org/llama.cpp/pull/28152) metal : add fa-vec tunings for A18 Pro (MacBook Neo)
- [#27883](https://github.com/ggml-org/llama.cpp/pull/27883) metal : fix more leaks due to missing autoreleasepools
- [#27941](https://github.com/ggml-org/llama.cpp/pull/27941) qwen4exp: follow up fixes
- [#28015](https://github.com/ggml-org/llama.cpp/pull/28015) metal : add fa-vec tuning for M2 Max
- [#27559](https://github.com/ggml-org/llama.cpp/pull/27559) [SYCL] Support limit max alloc memory within 2GB for host-pinned memory
- [#28147](https://github.com/ggml-org/llama.cpp/pull/28147) tests : fix log verbosity for test-llama-archs
- [#27830](https://github.com/ggml-org/llama.cpp/pull/27830) quantize: row-chunks stream to avoid thread starvation
- [#28083](https://github.com/ggml-org/llama.cpp/pull/28083) ci: Bump ggml-org/ccache-action to v1.2.24
- [#26078](https://github.com/ggml-org/llama.cpp/pull/26078) kleidiai: Update KleidiAI Documentation
- [#28123](https://github.com/ggml-org/llama.cpp/pull/28123) qwen4exp: support recurrent state rollback
- [#28023](https://github.com/ggml-org/llama.cpp/pull/28023) qwen4exp: sum the indexer heads by slices

#### 🐛 New Issues
- [#28134](https://github.com/ggml-org/llama.cpp/issues/28134) Eval bug: SYCL backend aborts at model load on Lunar Lake iGPU (Arc 140V) — device memory query fails with both Level Zero and SYCL APIs 💬11
- [#28197](https://github.com/ggml-org/llama.cpp/issues/28197) Eval bug: Error on loading Gemma 4 family with the new updates `bug-unconfirmed` 💬3
- [#28158](https://github.com/ggml-org/llama.cpp/issues/28158) bug: Qwen3.8 DFlash/MTP speculative emits OOB token id == n_vocab (248320) on Vulkan 💬2
- [#28196](https://github.com/ggml-org/llama.cpp/issues/28196) CUDA: qwen35 (hybrid Gated DeltaNet) token generation ~3.5x below memory-bandwidth bound on RTX 5090 (sm_120), Windows - MoE control on same rig is fine 💬2
- [#28160](https://github.com/ggml-org/llama.cpp/issues/28160) Regression: --lazy-mode auto halves pp512 for qwen4exp on Vulkan (AMD iGPU) 💬2
- [#28135](https://github.com/ggml-org/llama.cpp/issues/28135) [Vulkan] FA f16-scratch fast path never enabled for hybrid-model (non-unified) KV caches 💬2
- [#28157](https://github.com/ggml-org/llama.cpp/issues/28157) Misc. bug: Web UI reasoning menu item is missing in the desktop view dropdown `bug-unconfirmed` 💬2
- [#28182](https://github.com/ggml-org/llama.cpp/issues/28182) Misc. bug: thinking_budget_tokens desyncs the reasoning parser — leftover reasoning and a literal </think> emitted as content 💬1
- [#28188](https://github.com/ggml-org/llama.cpp/issues/28188) Eval bug: Gemma4 + MTP Crashes `bug-unconfirmed` 💬1
- [#28151](https://github.com/ggml-org/llama.cpp/issues/28151) CUDA MMQ: mul_mat_id reads past src1_q8_1 when the column count is not a multiple of J 💬1
- [#28139](https://github.com/ggml-org/llama.cpp/issues/28139) server: pinning a request to an empty slot via id_slot skips the prompt cache `bug-unconfirmed`
- [#28214](https://github.com/ggml-org/llama.cpp/issues/28214) Vulkan: GPU firmware crashes on Imagination PowerVR C-series (Pixel 11 Pro, Tensor G6, subgroupSize 128)
- [#28211](https://github.com/ggml-org/llama.cpp/issues/28211) Eval bug: HIP/ROCm on gfx1151, wrong logits (not a crash), triggered by prompts longer than n_ubatch. `bug-unconfirmed`
- [#28207](https://github.com/ggml-org/llama.cpp/issues/28207) Misc. bug: Qwen3.5 layer_types ignored, non-uniform layouts load mis-typed `bug-unconfirmed`
- [#28201](https://github.com/ggml-org/llama.cpp/issues/28201) qwen4exp (Qwen3.8-Flash-Next): HIP memory access fault during warmup with -ot per_layer_token_embd=ROCm0 on gfx1151 APU
- [#28194](https://github.com/ggml-org/llama.cpp/issues/28194) Misc. bug: /slots restore yields no KV reuse on hybrid/recurrent and SWA models (context checkpoints are not persisted)
- [#28193](https://github.com/ggml-org/llama.cpp/issues/28193) Misc. bug: test-backend-ops FLASH_ATTN_EXT fails on Intel Arc B70 (SYCL) for permuted q8_0 KV with nb > 1
- [#28185](https://github.com/ggml-org/llama.cpp/issues/28185) Misc. bug: --tensor-split causes intermittent output degeneration on long-context MoE inference, independent of client (reproducible via raw API calls) `bug-unconfirmed`
- [#28167](https://github.com/ggml-org/llama.cpp/issues/28167) Eval bug: `bug-unconfirmed`
- [#28180](https://github.com/ggml-org/llama.cpp/issues/28180) Eval bug: ppc64le llamafile Q0 MMA KERNEL_Q0 OOB store when n=4
- [#28179](https://github.com/ggml-org/llama.cpp/issues/28179) Feature Request: Deferred tool loading `enhancement`
- [#28166](https://github.com/ggml-org/llama.cpp/issues/28166) Eval bug: every mrope image decode on hybrid recurrent models (qwen3_5) triggers guaranteed non-consecutive position warnings in llama_memory_recurrent; mechanism fixed by #27941 for hybrid-idx only
- [#28165](https://github.com/ggml-org/llama.cpp/issues/28165) Eval bug: SYCL backend models load in WSL2 `bug-unconfirmed`
- [#28161](https://github.com/ggml-org/llama.cpp/issues/28161) Eval bug: `VK_KHR_shader_bfloat16` is requested even when unsupported `bug-unconfirmed`
- [#28153](https://github.com/ggml-org/llama.cpp/issues/28153) Feature Request: Add support for XingChen4 `enhancement`
- [#28142](https://github.com/ggml-org/llama.cpp/issues/28142) Eval bug: llama-mtmd-cli segfaults on OOM instead of returning an error `bug-unconfirmed`
- [#28144](https://github.com/ggml-org/llama.cpp/issues/28144) Misc. bug: ggml_cuda_compute_forward: SOFT_MAX failed / invalid argument on GLM-5.3-Flash (Turing, glm5next)
- [#28132](https://github.com/ggml-org/llama.cpp/issues/28132) [Bug] DeepSeek-V4-Flash on sm_121 (GB10): deterministic character-level output corruption — quant/build-independent

#### 🔒 Closed Issues
- [#17459](https://github.com/ggml-org/llama.cpp/issues/17459) Misc. bug: Can't use longer context than model via RoPE due to server-imposed restrictions
- [#27998](https://github.com/ggml-org/llama.cpp/issues/27998) Vulkan GATED_DELTA_NET pipeline compile hangs on gfx1103 (RADV 780M) — llama-server never reaches listening
- [#26985](https://github.com/ggml-org/llama.cpp/issues/26985) Bump ggml-org/ccache-action to upstream's v1.2.23
- [#28197](https://github.com/ggml-org/llama.cpp/issues/28197) Eval bug: Error on loading Gemma 4 family with the new updates
- [#28157](https://github.com/ggml-org/llama.cpp/issues/28157) Misc. bug: Web UI reasoning menu item is missing in the desktop view dropdown
- [#28182](https://github.com/ggml-org/llama.cpp/issues/28182) Misc. bug: thinking_budget_tokens desyncs the reasoning parser — leftover reasoning and a literal </think> emitted as content
- [#28188](https://github.com/ggml-org/llama.cpp/issues/28188) Eval bug: Gemma4 + MTP Crashes
- [#28151](https://github.com/ggml-org/llama.cpp/issues/28151) CUDA MMQ: mul_mat_id reads past src1_q8_1 when the column count is not a multiple of J
- [#28201](https://github.com/ggml-org/llama.cpp/issues/28201) qwen4exp (Qwen3.8-Flash-Next): HIP memory access fault during warmup with -ot per_layer_token_embd=ROCm0 on gfx1151 APU
- [#28060](https://github.com/ggml-org/llama.cpp/issues/28060) server: Vulkan speculative decoding can livelock on checkpoint-restore replay (no tokens emitted, GPU pegged)

### Ollama (`ollama/ollama`)

**Stars:** 179,921 · **Open issues:** 3,875 · **Last push:** <1h ago

On September 2, 2026, Ollama released version v0.33.3, introducing key updates such as honoring GGUF model default parameters and enhancements to MLX and MLX-C, along with updates to llama.cpp. Significant merges included the integration of MLX unit tests for CI, a version bump for llama.cpp, and improvements to model generation defaults. Notably, a new issue was raised regarding the Claude Desktop toggle switch being unavailable on Windows, which has garnered attention from users. Overall, the updates reflect a continued commitment to improving model performance and usability in the Ollama ecosystem.

#### 🚀 New Releases
- [v0.33.3-rc0](https://github.com/ollama/ollama/releases/tag/v0.33.3-rc0) v0.33.3

#### ✅ Merged PRs
- [#17022](https://github.com/ollama/ollama/pull/17022) ci: wire up MLX unit tests for PR runs
- [#18160](https://github.com/ollama/ollama/pull/18160) llama.cpp: version bump b10729
- [#18080](https://github.com/ollama/ollama/pull/18080) MLX, MLX-C: version bump
- [#16471](https://github.com/ollama/ollama/pull/16471) Honor model generation defaults
- [#18161](https://github.com/ollama/ollama/pull/18161) build: go deps

#### 🐛 New Issues
- [#18184](https://github.com/ollama/ollama/issues/18184) convert: parseTorch ignores the supplied fs.FS and resolves paths against the working directory 💬2
- [#18186](https://github.com/ollama/ollama/issues/18186) QWEN3.8 27b plus MTP settings cause offloading to CPU `bug` 💬2
- [#18164](https://github.com/ollama/ollama/issues/18164) Claude Desktop toggle switch not available on Windows `bug` 💬1
- [#18185](https://github.com/ollama/ollama/issues/18185) Custom GPU / CPU workload allocation per model `feature request` 💬1
- [#18182](https://github.com/ollama/ollama/issues/18182) docs: Add Windows installation troubleshooting `documentation`
- [#18178](https://github.com/ollama/ollama/issues/18178) [Cloud] DeepSeek V4 Flash Vision Exp request `model` `cloud`
- [#18180](https://github.com/ollama/ollama/issues/18180) Claude Desktop integration: 1M-capable models stuck at 200k — gateway rejects [1m] IDs and can't signal 1M capability
- [#18163](https://github.com/ollama/ollama/issues/18163) Requesting logprobs changes which tokens are generated under greedy decoding (long generations, 0.30.5)
- [#18162](https://github.com/ollama/ollama/issues/18162) MoE models crash with "ROCm error: no kernel image is available" when split across mixed AMD GPU architectures (gfx1200 + gfx1201) `bug`

#### 🔒 Closed Issues
- [#2475](https://github.com/ollama/ollama/issues/2475) Request to add leo-hessianai to ollama
- [#18180](https://github.com/ollama/ollama/issues/18180) Claude Desktop integration: 1M-capable models stuck at 200k — gateway rejects [1m] IDs and can't signal 1M capability

### LiteLLM (`BerriAI/litellm`)

**Stars:** 57,774 · **Open issues:** 4,872 · **Last push:** <1h ago

On September 2, 2026, LiteLLM released two new versions: v1.101.0-dev.1 and v1.99.0, with both confirmed for security via cosign signatures. Notable merged pull requests include #39174, which addressed CLI compatibility for Windows, and #38438, introducing Slack alerts for spend thresholds, enhancing user monitoring capabilities. Additionally, several critical bug fixes were implemented, including #39125, which resolves intermittent token reporting issues with Vertex AI Gemini. The team also opened new issues, notably #39057, which raises questions about token report aggregation during cache hits, pointing to ongoing challenges in optimizing usage metrics.

#### 🚀 New Releases
- [v1.101.0-dev.1](https://github.com/BerriAI/litellm/releases/tag/v1.101.0-dev.1) v1.101.0-dev.1
- [v1.99.0](https://github.com/BerriAI/litellm/releases/tag/v1.99.0) v1.99.0

#### ✅ Merged PRs
- [#39223](https://github.com/BerriAI/litellm/pull/39223) fix(docker): install bedrock-realtime extra in monolith proxy images
- [#39228](https://github.com/BerriAI/litellm/pull/39228) perf(scim): resolve group members with one user table read per member
- [#39230](https://github.com/BerriAI/litellm/pull/39230) fix(cost-map): retry transient boot fetch failures and recover config deployments dropped by a stale cost map
- [#39232](https://github.com/BerriAI/litellm/pull/39232) fix(mcp): report per-server outcomes in aggregate REST tools/list
- [#39219](https://github.com/BerriAI/litellm/pull/39219) fix(helm): reuse the generated master key Secret on helm upgrade
- [#35816](https://github.com/BerriAI/litellm/pull/35816) fix(proxy): report requested model on Anthropic streaming message_start
- [#39157](https://github.com/BerriAI/litellm/pull/39157) feat(router): fall back on anthropic safeguard refusals on /v1/messages
- [#39209](https://github.com/BerriAI/litellm/pull/39209) test: record each e2e test's source location in the JUnit report
- [#39206](https://github.com/BerriAI/litellm/pull/39206) fix: stop a cleared Team field from blocking personal key creation
- [#39214](https://github.com/BerriAI/litellm/pull/39214) fix(budget): reject known estimates over remaining budget under fail_closed_budget_enforcement
- [#39197](https://github.com/BerriAI/litellm/pull/39197) test(e2e): cover retry-on-timeout and the context-window fallback
- [#39212](https://github.com/BerriAI/litellm/pull/39212) fix(docker): pin apk python to 3.13 and bump wolfi-base on stable/1.97.x (cherry-pick #38917 + #38973)
- [#38969](https://github.com/BerriAI/litellm/pull/38969) fix(router): keep order fallback on the requested order level
- [#39033](https://github.com/BerriAI/litellm/pull/39033) fix(docker): add public Wolfi apk repo to runtime image
- [#38438](https://github.com/BerriAI/litellm/pull/38438) feat(alerting): slack alerts for per-user daily/monthly spend thresholds and spend anomaly detection
- [#39093](https://github.com/BerriAI/litellm/pull/39093) fix(logging): guarantee max_parallel_requests slot release when streaming logging fails
- [#39174](https://github.com/BerriAI/litellm/pull/39174) fix(cli): quote the Claude Code apiKeyHelper for cmd.exe on Windows
- [#39200](https://github.com/BerriAI/litellm/pull/39200) chore(deps): refresh stale dependency pins and cut 1.97.1
- [#38872](https://github.com/BerriAI/litellm/pull/38872) fix(ui): hide model write affordances from view-only admin sessions
- [#38734](https://github.com/BerriAI/litellm/pull/38734) fix(bedrock): route streamed responses-API output through the unified guardrail
- [#38870](https://github.com/BerriAI/litellm/pull/38870) fix(azure): flatten top-level tool schema combinators on Azure chat completions
- [#39000](https://github.com/BerriAI/litellm/pull/39000) fix(proxy): resolve router model aliases in /utils/supported_openai_params
- [#39172](https://github.com/BerriAI/litellm/pull/39172) fix(mcp): follow tools/list pagination from upstream servers
- [#39179](https://github.com/BerriAI/litellm/pull/39179) chore(release): backport #38716 to stable/1.99.x and cut 1.99.1
- [#39134](https://github.com/BerriAI/litellm/pull/39134) fix(proxy): default max_idle_connection_lifetime to 60s on DB URLs
- [#39186](https://github.com/BerriAI/litellm/pull/39186) chore(ci): promote internal staging to main
- [#39129](https://github.com/BerriAI/litellm/pull/39129) fix(ui): render the logs Tools panel with theme tokens
- [#39185](https://github.com/BerriAI/litellm/pull/39185) test: exempt MockTransport request-shape embedding tests from VCR replay
- [#39047](https://github.com/BerriAI/litellm/pull/39047) fix: keep litellm_credential_name from LiteLLM Params JSON and gate stored credential attach to proxy admins
- [#39184](https://github.com/BerriAI/litellm/pull/39184) fix(anthropic): fix response_format for claude-fable-5-1 on Vertex AI and Bedrock
- [#39155](https://github.com/BerriAI/litellm/pull/39155) feat(ui): add search to the Agent Hub tab and admin agents table
- [#39136](https://github.com/BerriAI/litellm/pull/39136) fix(prometheus): bound requested_model label cardinality on client failure paths
- [#39178](https://github.com/BerriAI/litellm/pull/39178) revert: default the proxy back to the v1 migration resolver
- [#39164](https://github.com/BerriAI/litellm/pull/39164) fix(s3): bound s3 object keys and download filenames for long Responses API ids
- [#38839](https://github.com/BerriAI/litellm/pull/38839) fix(openai): flatten top-level tool schema combinators on chat completions
- [#31725](https://github.com/BerriAI/litellm/pull/31725) feat(cost): support time-based off-peak pricing in cost calculation
- [#39141](https://github.com/BerriAI/litellm/pull/39141) chore(ci): promote internal staging to main
- [#39175](https://github.com/BerriAI/litellm/pull/39175) test(ui): pick select options by role instead of by text
- [#39147](https://github.com/BerriAI/litellm/pull/39147) fix(openai): drop tool_choice when request has no tools on chat completions
- [#39144](https://github.com/BerriAI/litellm/pull/39144) fix(responses): tool call id shape breaks gpt-5 -> claude fallback conversations
- [#39131](https://github.com/BerriAI/litellm/pull/39131) fix(ui): render the guardrail garden detail page with theme tokens
- [#39061](https://github.com/BerriAI/litellm/pull/39061) test(e2e/ui): cover the Usage page activity tabs
- [#39058](https://github.com/BerriAI/litellm/pull/39058) test(e2e/ui): cover the team Settings tab
- [#39063](https://github.com/BerriAI/litellm/pull/39063) test(e2e/ui): stop the suite failing on things that are not regressions
- [#39148](https://github.com/BerriAI/litellm/pull/39148) feat(models): add Claude Fable 5.1 across Anthropic, Bedrock, Vertex AI, and Azure AI
- [#39056](https://github.com/BerriAI/litellm/pull/39056) test(e2e/ui): cover the Logs page filter drawer
- [#38898](https://github.com/BerriAI/litellm/pull/38898) feat(guardrails): add Alice guardrail
- [#39104](https://github.com/BerriAI/litellm/pull/39104) refactor(types): replace Any with precise types across 73 modules
- [#39053](https://github.com/BerriAI/litellm/pull/39053) test(e2e/ui): cover creating, testing and deleting a guardrail
- [#39070](https://github.com/BerriAI/litellm/pull/39070) fix(bedrock): forward native structured outputs on Invoke instead of silently inlining the schema
- [#39149](https://github.com/BerriAI/litellm/pull/39149) feat(dashscope): add QwenCloud and Qwen AI Platform provider aliases
- [#39052](https://github.com/BerriAI/litellm/pull/39052) test(e2e/ui): cover the Budgets page create, edit and delete flows
- [#38106](https://github.com/BerriAI/litellm/pull/38106) fix(streaming): keep response id stable across streamed chunks
- [#39023](https://github.com/BerriAI/litellm/pull/39023) feat: add Azure AI DeepSeek V4 Flash 0731 pricing
- [#39130](https://github.com/BerriAI/litellm/pull/39130) fix(ui): render the skill detail page with theme tokens
- [#39142](https://github.com/BerriAI/litellm/pull/39142) build(deps): bump browserslist to 4.28.8 to clear osv-scan
- [#31125](https://github.com/BerriAI/litellm/pull/31125) feat(proxy): default to the v2 migration resolver, keep v1 as an opt-out
- [#39074](https://github.com/BerriAI/litellm/pull/39074) test(websearch): register configured search tool in pre-request hook test
- [#39146](https://github.com/BerriAI/litellm/pull/39146) revert: restore search tool fallback when no router is configured
- [#39140](https://github.com/BerriAI/litellm/pull/39140) chore: bump litellm-enterprise 0.1.62 -> 0.1.63, litellm-proxy-extras 0.4.91 -> 0.4.92, litellm 1.100.0 -> 1.101.0
- [#39108](https://github.com/BerriAI/litellm/pull/39108) fix(ui): stop checkboxes stretching to the full width of a form field
- [#39085](https://github.com/BerriAI/litellm/pull/39085) test(ui): query the screen instead of the render result
- [#39084](https://github.com/BerriAI/litellm/pull/39084) test(ui): assert DataTable behavior instead of DOM structure
- [#39082](https://github.com/BerriAI/litellm/pull/39082) test(ui): budget DOM-structure assertions in dashboard tests
- [#38990](https://github.com/BerriAI/litellm/pull/38990) fix(registry): veo 3.1 pricing tiers + roll up open registry PRs (glm-5.2, Qwen3.8-Flash, gemma-4-31b, scribe_v2, fireworks/databricks deepseek v4) + deprecation dates
- [#39112](https://github.com/BerriAI/litellm/pull/39112) feat(helm): add Argo CD PreSync hook and rollout strategy knobs to the componentized chart
- [#38891](https://github.com/BerriAI/litellm/pull/38891) test: deflake MCP registry state, savings cost map, and MCP identity env reload tests
- [#38774](https://github.com/BerriAI/litellm/pull/38774) fix(embeddings): omit encoding_format when the client omits it on OpenAI-compatible calls
- [#39038](https://github.com/BerriAI/litellm/pull/39038) fix(policy_engine): restore request guardrails list after pipeline allow
- [#38985](https://github.com/BerriAI/litellm/pull/38985) fix(cost): bill OCR annotation pages via annotation_cost_per_page
- [#35417](https://github.com/BerriAI/litellm/pull/35417) fix(responses): json-encode object tool call arguments in the chat completions bridge
- [#39119](https://github.com/BerriAI/litellm/pull/39119) fix(mcp): persist alias MCP grants verbatim instead of rewriting to local server ids
- [#39066](https://github.com/BerriAI/litellm/pull/39066) fix(bedrock): forward aws_external_id in files and batches credential loading
- [#39044](https://github.com/BerriAI/litellm/pull/39044) fix(bedrock): mask signed request headers in guardrail debug log
- [#39045](https://github.com/BerriAI/litellm/pull/39045) fix(proxy): include litellm_model_table in GET /v2/team/list
- [#39059](https://github.com/BerriAI/litellm/pull/39059) feat(ui): modality routing toggle on the auto-router create and edit forms
- [#39073](https://github.com/BerriAI/litellm/pull/39073) test(e2e-ui): poll credential availability before Test Connect to deflake multi-instance runs
- [#39065](https://github.com/BerriAI/litellm/pull/39065) fix(openai): forward reasoning_effort for unknown model aliases instead of failing closed
- [#38796](https://github.com/BerriAI/litellm/pull/38796) chore(typing): clear 1.1k basedpyright Any errors across 53 backend files
- [#39051](https://github.com/BerriAI/litellm/pull/39051) fix(key_management): allow non-admin key_type preset transitions on /key/update
- [#39025](https://github.com/BerriAI/litellm/pull/39025) test(e2e/ui): automate 8 manual QA checklist flows
- [#39042](https://github.com/BerriAI/litellm/pull/39042) feat(ui): one classification frequency picker for complexity auto-routers
- [#39055](https://github.com/BerriAI/litellm/pull/39055) test(e2e): drop the two mgmt registry cells no shared-proxy test can cover
- [#38798](https://github.com/BerriAI/litellm/pull/38798) fix(proxy): match /v1/audio/speech content-type to the returned audio format
- [#38868](https://github.com/BerriAI/litellm/pull/38868) fix(speech): honor pcm/wav response_format for Gemini TTS and reject unsupported containers
- [#39028](https://github.com/BerriAI/litellm/pull/39028) feat(shadow_eval): compare several auto-routers on one job's sampled traffic
- [#38113](https://github.com/BerriAI/litellm/pull/38113) fix(websearch): reject invalid explicit search tool selections
- [#37044](https://github.com/BerriAI/litellm/pull/37044) feat(key management): show budget window usage on /key/info
- [#30644](https://github.com/BerriAI/litellm/pull/30644) fix(redis): coerce env var string types and fix param discovery through decorator wrappers
- [#39054](https://github.com/BerriAI/litellm/pull/39054) feat(ui): auto-router controls for context-window escalation
- [#39040](https://github.com/BerriAI/litellm/pull/39040) fix(ui): let the auto-router scoring tier list follow the theme
- [#39032](https://github.com/BerriAI/litellm/pull/39032) feat(complexity_router): opt-in modality-based capability routing for image requests
- [#38979](https://github.com/BerriAI/litellm/pull/38979) fix(proxy): wire team-level logging callbacks into passthrough endpoints
- [#38838](https://github.com/BerriAI/litellm/pull/38838) fix(auth): quiet malformed virtual key rejections to stdout
- [#39048](https://github.com/BerriAI/litellm/pull/39048) fix(docker): pin apk python to 3.13 on rc/1.99.0 (cherry-pick #38917)
- [#39046](https://github.com/BerriAI/litellm/pull/39046) Revert "fix(ui): keep litellm_credential_name from LiteLLM Params JSON when no credential is selected"
- [#39005](https://github.com/BerriAI/litellm/pull/39005) fix(ui): keep litellm_credential_name from LiteLLM Params JSON when no credential is selected
- [#39020](https://github.com/BerriAI/litellm/pull/39020) build(rust): configure native extension profiles

#### 🐛 New Issues
- [#39057](https://github.com/BerriAI/litellm/issues/39057) Design intent: on cache hits, spend is zeroed but token columns replay the original usage — which basis should token reports aggregate? 💬2
- [#39180](https://github.com/BerriAI/litellm/issues/39180) [Bug]: ValkeySemanticCache crashes at import with redis-py >= 5 — stale camelCase import of redis.commands.search.indexDefinition `llm translation` 💬1
- [#39078](https://github.com/BerriAI/litellm/issues/39078) [Bug]: Darkmode issue with tools visibility `bug` `ui-dashboard` `claude code` 💬1
- [#39125](https://github.com/BerriAI/litellm/issues/39125) [Bug]: Vertex AI Gemini + explicit context caching - usage.prompt_tokens intermittently reports only the fresh (non-cached) token count instead of the total, when the request body is repeated identically `llm translation` 💬1
- [#39088](https://github.com/BerriAI/litellm/issues/39088) [Bug]: Vercel AI Gateway streaming drops prompt_tokens_details — cached tokens billed at full input price `llm translation` 💬1
- [#39067](https://github.com/BerriAI/litellm/issues/39067) [Bug]: `forward_traceparent_to_llm_provider` creates provider span as sibling of LiteLLM span instead of child `llm translation` 💬1
- [#39217](https://github.com/BerriAI/litellm/issues/39217) [Bug]: OSV Scan fails on fork PRs due to vulnerable pypdf and tornado locks
- [#39203](https://github.com/BerriAI/litellm/issues/39203) [Bug]: Chat-to-Responses stream bridge drops response.refusal events
- [#39208](https://github.com/BerriAI/litellm/issues/39208) [Feature]: Route by requested `service_tier` capability within a model group `proxy` `llm translation`
- [#39183](https://github.com/BerriAI/litellm/issues/39183) [Bug]: Codex CLI with Headroom on changes the name of MCP tools `bug` `llm translation` `SDK`
- [#39169](https://github.com/BerriAI/litellm/issues/39169) [Bug]: OpenRouter wildcard routing causes duplicated irelevent warnings about unknown costs
- [#39153](https://github.com/BerriAI/litellm/issues/39153) Translate CC Session id header to OpenRouter's session_id for sticky routing and tracing `llm translation` `claude code`
- [#39145](https://github.com/BerriAI/litellm/issues/39145) llm_translation: prompt_cache_key derived from user_id is always the same `llm translation` `claude code`
- [#39158](https://github.com/BerriAI/litellm/issues/39158) setting forward_client_headers_to_llm_api unleashes sillines
- [#39150](https://github.com/BerriAI/litellm/issues/39150) [Bug]: Buffered spend updates crossing a budget reset are charged to the wrong window `proxy`
- [#39103](https://github.com/BerriAI/litellm/issues/39103) [Bug]: "Send invitation email" renders as a full-width bar instead of a checkbox in the Invite User modal `bug` `ui-dashboard`
- [#39123](https://github.com/BerriAI/litellm/issues/39123) Discussion: trust-card verification for MCP servers used through LiteLLM
- [#39114](https://github.com/BerriAI/litellm/issues/39114) [Bug]: Prisma proxy client fails to connect with prisma>=0.13 due to mangled-attribute write `proxy`
- [#39113](https://github.com/BerriAI/litellm/issues/39113) [Feature]: Suppress x-litellm-version response header for LLM Proxy `enhancement` `proxy`
- [#39109](https://github.com/BerriAI/litellm/issues/39109) [Feature]: Add LITELLM_DISABLE_DOTENV opt-out for implicit .env loading `enhancement` `llm translation` `SDK`
- [#39099](https://github.com/BerriAI/litellm/issues/39099) [Bug]: bedrock_mantle chat completions drop aws_role_name so AssumeRole never fires `proxy` `llm translation`

#### 🔒 Closed Issues
- [#31606](https://github.com/BerriAI/litellm/issues/31606) [Feature]: Support time-based / peak-offpeak pricing for model cost calculation
- [#26312](https://github.com/BerriAI/litellm/issues/26312) Model alias for team can not be viewed via the UI or the API after creation.
- [#30534](https://github.com/BerriAI/litellm/issues/30534) [Bug]: TypeError unsupported operand type(s) for +: 'float' and 'str' in caching code
- [#22289](https://github.com/BerriAI/litellm/issues/22289) PostgreSQL connections silently dropped by RDS due to missing default idle connection lifetime config
- [#28882](https://github.com/BerriAI/litellm/issues/28882) bug(rerank): extra_headers silently dropped for hosted_vllm and other rerank providers
- [#28892](https://github.com/BerriAI/litellm/issues/28892) [Feature]: support Datadog Agent over Unix domain socket in datadog_llm_observability
- [#28895](https://github.com/BerriAI/litellm/issues/28895) The dependency story is not flexible enough.
- [#29064](https://github.com/BerriAI/litellm/issues/29064) upsert_deployment does not clean up stale entries in team_pattern_routers / pattern_router on model update
- [#29066](https://github.com/BerriAI/litellm/issues/29066) [Bug] team/member_update with max_budget_in_team=null leaves litellm_budget_table null, failing Pydantic validation on every subsequent request from that team's members
- [#29079](https://github.com/BerriAI/litellm/issues/29079) feat: Custom x- headers not captured in spend logs on Vertex AI pass-through
- [#38832](https://github.com/BerriAI/litellm/issues/38832) Complexity/auto-router: fallbacks look up the router name, not the selected tier
- [#39078](https://github.com/BerriAI/litellm/issues/39078) [Bug]: Darkmode issue with tools visibility
- [#37184](https://github.com/BerriAI/litellm/issues/37184) Sync current Cerebras model metadata
- [#38546](https://github.com/BerriAI/litellm/issues/38546) ocr_cost() does not account for annotation_cost_per_page / pages_processed_annotation
- [#38761](https://github.com/BerriAI/litellm/issues/38761) [Bug]: Anthropic /v1/messages streaming leaks the backend model id in message_start (non-streaming returns the requested model)
- [#38968](https://github.com/BerriAI/litellm/issues/38968) [Bug]: Order-based fallback reselects the failed primary when higher-order deployments are filtered out
- [#33518](https://github.com/BerriAI/litellm/issues/33518) [Bug]: Base image cannot install anything via apk
- [#38098](https://github.com/BerriAI/litellm/issues/38098) [Bug]: Providers without an upstream response id emit a new chunk.id per SSE chunk, splitting replies in clients that merge by id (e.g. GigaChat)
- [#39103](https://github.com/BerriAI/litellm/issues/39103) [Bug]: "Send invitation email" renders as a full-width bar instead of a checkbox in the Invite User modal
- [#38661](https://github.com/BerriAI/litellm/issues/38661) [Bug]: `encoding_format` cannot be suppressed when proxying embeddings through `custom_llm_provider="openai"`, breaking any 2-hop LiteLLM→LiteLLM chain
- [#34975](https://github.com/BerriAI/litellm/issues/34975) [Bug]: Non-admin users can no longer change key type of existing keys on v1.92.0

### Unsloth (`unslothai/unsloth`)

**Stars:** 75,440 · **Open issues:** 1,385 · **Last push:** <1h ago

On September 2, 2026, there were no new releases for Unsloth; however, several key pull requests were merged, enhancing both functionality and user experience in the Studio. Noteworthy merges include a fix for llama.cpp update failures related to GitHub API rate limits (#9980), improvements to the model picker interface for better usability (#5684), and a feature to keep tools available when images are attached (#10092). Additionally, there were important bug fixes addressing stale sampling defaults after Studio upgrades (#9643) and cleaning up the user interface for settings management. Among the new issues, a significant bug concerning a memory leak during repeated Z-Image-Turbo generations (#10156) has garnered attention, indicating a critical area for ongoing development.

#### ✅ Merged PRs
- [#9980](https://github.com/unslothai/unsloth/pull/9980) Fix llama.cpp Studio update failures on GitHub API rate limits (#9970)
- [#5684](https://github.com/unslothai/unsloth/pull/5684) Studio: surface every live provider model in the picker
- [#9971](https://github.com/unslothai/unsloth/pull/9971) Studio: restore sticky checkpoint boundaries on tool-heavy threads
- [#5901](https://github.com/unslothai/unsloth/pull/5901) fix(studio): poll inference status while CLI model is loading
- [#10073](https://github.com/unslothai/unsloth/pull/10073) studio: fetch the XPU triton wheel with --dest, not pip's -d
- [#9438](https://github.com/unslothai/unsloth/pull/9438) studio: use generation usage for conversation search budgets
- [#9505](https://github.com/unslothai/unsloth/pull/9505) desktop: check for updates periodically
- [#10154](https://github.com/unslothai/unsloth/pull/10154) Fix pre-commit formatting drift after #10076
- [#10092](https://github.com/unslothai/unsloth/pull/10092) Studio: keep tools available when a picture is attached
- [#10076](https://github.com/unslothai/unsloth/pull/10076) fix(studio): enforce Hub token caller boundary
- [#9643](https://github.com/unslothai/unsloth/pull/9643) Fix stale Qwen sampling defaults after Studio upgrades
- [#9921](https://github.com/unslothai/unsloth/pull/9921) MLX: drain GPU work before clearing the cache
- [#10136](https://github.com/unslothai/unsloth/pull/10136) Studio: keep download restart toasts job-scoped
- [#10132](https://github.com/unslothai/unsloth/pull/10132) Widen model picker panel and header controls
- [#10128](https://github.com/unslothai/unsloth/pull/10128) Studio: line up On Device rows, and list partial downloads
- [#10134](https://github.com/unslothai/unsloth/pull/10134) Studio: restore Deep Research plan approval
- [#10095](https://github.com/unslothai/unsloth/pull/10095) Studio: keep one MCP connection per chat instead of reconnecting every call
- [#7392](https://github.com/unslothai/unsloth/pull/7392) Studio: auto-generate an admin password for headless public launches
- [#10124](https://github.com/unslothai/unsloth/pull/10124) studio: fall back to the MTP/ folder when a repo publishes no root drafter
- [#10089](https://github.com/unslothai/unsloth/pull/10089) Stop `unsloth start claude` from opening with a model it cannot use
- [#9798](https://github.com/unslothai/unsloth/pull/9798) Bump the cargo-tauri group across 1 directory with 6 updates
- [#9797](https://github.com/unslothai/unsloth/pull/9797) Bump the actions group with 3 updates
- [#8125](https://github.com/unslothai/unsloth/pull/8125) feat(studio): give MLX models a real context length, from the model config to the KV cache
- [#10133](https://github.com/unslothai/unsloth/pull/10133) Remove OpenSSF Scorecard workflow
- [#10125](https://github.com/unslothai/unsloth/pull/10125) Make the notebooks smoke job reach the check it exists for
- [#10122](https://github.com/unslothai/unsloth/pull/10122) Cache the same Playwright engines under the same key
- [#10123](https://github.com/unslothai/unsloth/pull/10123) Prune an open PR's caches once nothing has read them
- [#10129](https://github.com/unslothai/unsloth/pull/10129) Studio: use plain arrow icons for up, down, left and right
- [#9152](https://github.com/unslothai/unsloth/pull/9152) fix(AMD): route Fedora/Bazzite to per-arch ROCm wheels when no version is readable
- [#7704](https://github.com/unslothai/unsloth/pull/7704) fix(amd): don't enable torch.compile when Triton's C toolchain can't compile it (Windows)
- [#9692](https://github.com/unslothai/unsloth/pull/9692) Kaggle T4: split the load phase into fetch and weight load
- [#10121](https://github.com/unslothai/unsloth/pull/10121) Kaggle CI: use both accounts, weighted by their own weekly quota
- [#9700](https://github.com/unslothai/unsloth/pull/9700) Kaggle T4: Latest_compile and Vision_FLA_compile legs, plus gpt-oss completions and GGUF
- [#9849](https://github.com/unslothai/unsloth/pull/9849) Studio: keep a Downloads entry when the list is empty
- [#9944](https://github.com/unslothai/unsloth/pull/9944) Report a trainer kwarg that neither the trainer nor the config takes
- [#10062](https://github.com/unslothai/unsloth/pull/10062) Reuse the MLX prompt cache on hybrid recurrent models
- [#10093](https://github.com/unslothai/unsloth/pull/10093) Apply the context length and quant settings when attaching to a running server
- [#9858](https://github.com/unslothai/unsloth/pull/9858) Studio: report the GPUs the OS sees, not just the ones PyTorch opened
- [#10119](https://github.com/unslothai/unsloth/pull/10119) studio: keep MTP on for GLM-5.3-Flash
- [#10091](https://github.com/unslothai/unsloth/pull/10091) Studio: send tool results to the model in the right order
- [#8886](https://github.com/unslothai/unsloth/pull/8886) Linux: fix ROCm detection on split Debian stacks
- [#7682](https://github.com/unslothai/unsloth/pull/7682) AMD: Fix BF16 detection on gfx10 ROCm GPUs
- [#8791](https://github.com/unslothai/unsloth/pull/8791) fix(amd): gate training GPU selection on the installed torch build's arch coverage
- [#10104](https://github.com/unslothai/unsloth/pull/10104) Studio: tell the browser about the bootstrap shutdown deadline
- [#10098](https://github.com/unslothai/unsloth/pull/10098) Studio: report a context size for models loaded through MLX
- [#10108](https://github.com/unslothai/unsloth/pull/10108) Give the unsloth_zoo pytest step a per-test timeout
- [#10107](https://github.com/unslothai/unsloth/pull/10107) Reduce the comments added by PR #9979
- [#10023](https://github.com/unslothai/unsloth/pull/10023) fix(studio): show the confirmation card the argument text the tool is run with
- [#10099](https://github.com/unslothai/unsloth/pull/10099) Stop the torchao ROCm test from depending on the host's GPU
- [#10106](https://github.com/unslothai/unsloth/pull/10106) Run the llama.cpp keep-install back-compat tests on Windows
- [#10105](https://github.com/unslothai/unsloth/pull/10105) Scope the llama.cpp update test's Popen patch to the installer
- [#10110](https://github.com/unslothai/unsloth/pull/10110) Use the public fastmcp call_tool so the MCP guard test survives fastmcp 4
- [#4882](https://github.com/unslothai/unsloth/pull/4882) Add GGUF fit-target control and wire to llama-server --fit-target

#### 🐛 New Issues
- [#10126](https://github.com/unslothai/unsloth/issues/10126) Studio: Hub write paths still lend the backend's HF_TOKEN to API-key callers 💬1
- [#10170](https://github.com/unslothai/unsloth/issues/10170) [Bug] Please fill in your issue title here. `feature request` `bug`
- [#10169](https://github.com/unslothai/unsloth/issues/10169) [Bug] Studio passes repo-root mtp-*.gguf as --model-draft when the main GGUF embeds MTP `feature request` `bug`
- [#10168](https://github.com/unslothai/unsloth/issues/10168) [Feature] Allow saving cutom settings without loading the model `feature request`
- [#10159](https://github.com/unslothai/unsloth/issues/10159) [Feature] allow deleting "Settings applied on API load" for custom paths after path removal `feature request`
- [#10157](https://github.com/unslothai/unsloth/issues/10157) [Feature] Ability to disable the Menu bar icon on macOS `feature request`
- [#10156](https://github.com/unslothai/unsloth/issues/10156) [Bug] Memory leak during repeated Z-Image-Turbo generations — RAM grows linearly, ends in SIGKILL
- [#10155](https://github.com/unslothai/unsloth/issues/10155) [Bug] Cannot attach image when historical token count exceeds limit, even though post-compaction context has room `feature request` `bug`
- [#10141](https://github.com/unslothai/unsloth/issues/10141) [Bug] Notion MCP OAuth token exchange fails with 401 "Client must not use multiple authentication methods" `feature request` `bug`
- [#10147](https://github.com/unslothai/unsloth/issues/10147) Studio: Hub caller boundary follow-ups deferred from #10076
- [#10146](https://github.com/unslothai/unsloth/issues/10146) [Bug] The tokenizer for Gemma4 doesn't have padding_side, error at get_chat_template. `feature request` `bug`
- [#10144](https://github.com/unslothai/unsloth/issues/10144) [Bug] Unsloth Desktop current Preset gets cleared during update `feature request` `bug`
- [#10109](https://github.com/unslothai/unsloth/issues/10109) [Bug] Deepresearch is hardcoded to run 127.0.0.1. `feature request` `bug`
- [#10135](https://github.com/unslothai/unsloth/issues/10135) [Feature] Add Ability to Specify Custom Terminal Truncation Limit `feature request`
- [#10130](https://github.com/unslothai/unsloth/issues/10130) [Bug] Run Settings UI and other UIs inconsistancy `feature request` `bug`
- [#10127](https://github.com/unslothai/unsloth/issues/10127) image generation API. `feature request`

#### 🔒 Closed Issues
- [#9861](https://github.com/unslothai/unsloth/issues/9861) Smart offload planner is slower than --fit on in 40 of 43 measured cells on a 6-core desktop
- [#9915](https://github.com/unslothai/unsloth/issues/9915) [Unsloth Bug] Checkpoint compaction fires EVERY turn on agent threads: sticky boundary clamped by a wire/row unit mismatch in anchor re-derivation (1.804)
- [#10031](https://github.com/unslothai/unsloth/issues/10031) [Bug] MLX prompt cache not reused with Qwen3.8-27B due to ArraysCache layout
- [#10083](https://github.com/unslothai/unsloth/issues/10083) Website says Desktop code execution is in a “secure sandbox”, but current main runs tools as the user
- [#9970](https://github.com/unslothai/unsloth/issues/9970) [Bug] llama update failed
- [#9801](https://github.com/unslothai/unsloth/issues/9801) [Bug] ROCM fails to load model or model crashes anytime GPU VRAM is exceeded
- [#8731](https://github.com/unslothai/unsloth/issues/8731) [Bug] AMD: Fedora/Bazzite installs CPU PyTorch on gfx1201 because no source reports a ROCm version
- [#9948](https://github.com/unslothai/unsloth/issues/9948) [Bug] Settings are not saved properly
- [#9947](https://github.com/unslothai/unsloth/issues/9947) [Bug] Search toggle appears to couple Project Sources RAG with web search
- [#7922](https://github.com/unslothai/unsloth/issues/7922) [Bug] fine-tuning with AMD gfx1032 crashes
- [#9366](https://github.com/unslothai/unsloth/issues/9366) [Bug] Need to Open and Close Unsloth Desktop to get Updates / Update Notification [WINDOWS]
- [#7595](https://github.com/unslothai/unsloth/issues/7595) 'stdlib.h' file not found during 1st install on AMD/Windows
- [#9780](https://github.com/unslothai/unsloth/issues/9780) [Bug] failed downloads not show in the Downloads list
- [#8792](https://github.com/unslothai/unsloth/issues/8792) [Bug] AMD: training auto-selection picks a gfx1036 iGPU the torch wheel has no kernels for — "CUDA error: invalid kernel file"

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,051 · **Open issues:** 377 · **Last push:** 16h ago

On September 2, 2026, AIBrix saw no new releases but recorded several significant changes in merged pull requests. The addition of KVCache controller integration tests in PR #2648 enhances testing capabilities, while PR #2634 addresses console functionality by fixing issues related to the bound planner background work. Documentation improvements were made in PR #2645, adding support details for the PodAutoscaler with Kubernetes external metrics. Additionally, PR #2604 introduced a progress deadline feature for StormService, which aims to enhance user control over service execution timelines. Overall, the day was characterized by solid improvements and no new issues reported.

#### ✅ Merged PRs
- [#2648](https://github.com/vllm-project/aibrix/pull/2648) [Misc] Add KVCache controller integration tests
- [#2634](https://github.com/vllm-project/aibrix/pull/2634) fix(console): bound planner background work
- [#2645](https://github.com/vllm-project/aibrix/pull/2645) docs: document PodAutoscaler support for Kubernetes external metrics
- [#2604](https://github.com/vllm-project/aibrix/pull/2604) feat: add StormService progress deadline

#### 🔒 Closed Issues
- [#2534](https://github.com/vllm-project/aibrix/issues/2534) Add progressDeadlineSeconds support to StormService rollout progress

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 5,480 · **Open issues:** 392 · **Last push:** <1h ago

On September 2, 2026, there were no new releases for Semantic Router. However, several key merged pull requests included #3137, which introduced a deterministic input_modality signal to enhance detection of structural text, image, audio, and video inputs, and #3285, which pinned the Jaeger all-in-one image to version 1.76.0 for better stability. Additionally, the bug fix in #3252 ensured that replay is finalized as failed on a fail_request 503. Among new issues, #3292 raised concerns about idempotency in Envoy base URL path rewrites for /v1-prefixed targets, highlighting ongoing challenges in maintaining robust API integrations.

#### ✅ Merged PRs
- [#3108](https://github.com/vllm-project/semantic-router/pull/3108) [Bug] Count Response API image inputs before translation so file_id images reach the conversation image signal
- [#3255](https://github.com/vllm-project/semantic-router/pull/3255) [CI/Build] Use a pipe GOPROXY fallback for Go module downloads
- [#3228](https://github.com/vllm-project/semantic-router/pull/3228) [Bug] Remove unused router packages
- [#3285](https://github.com/vllm-project/semantic-router/pull/3285) [Bug] Pin Jaeger all-in-one image to 1.76.0
- [#3287](https://github.com/vllm-project/semantic-router/pull/3287) [Bug] roll back applied blocks on recovery-store failure in context_compression
- [#3297](https://github.com/vllm-project/semantic-router/pull/3297) [Community] Clarify weekly Workgroup claiming
- [#3288](https://github.com/vllm-project/semantic-router/pull/3288) [Bug] Default local Envoy logging to info
- [#3115](https://github.com/vllm-project/semantic-router/pull/3115) [Test] Cover OpenAI system cache_control translation
- [#3252](https://github.com/vllm-project/semantic-router/pull/3252) [Bug] Finalize replay as failed on fail_request 503
- [#3137](https://github.com/vllm-project/semantic-router/pull/3137) [Feature] Add deterministic input_modality signal for structural text, image, audio, and video input presence
- [#3271](https://github.com/vllm-project/semantic-router/pull/3271) [CI/Build] Preserve Maintainer Workgroup reclassification

#### 🐛 New Issues
- [#3261](https://github.com/vllm-project/semantic-router/issues/3261) [Community] Workgroup Issues · 2026-08-31 – 2026-09-06 `community` `accepted` `owner/maintainers` 💬14
- [#3292](https://github.com/vllm-project/semantic-router/issues/3292) [Bug] Make Envoy base URL path rewrites idempotent for /v1-prefixed targets `bug` `accepted` `wg/data-plane-networking` 💬5
- [#3277](https://github.com/vllm-project/semantic-router/issues/3277) [Bug] --image-pull-policy never always fails for digest-pinned images `bug` `good first issue` `help wanted` `accepted` 💬4
- [#3256](https://github.com/vllm-project/semantic-router/issues/3256) [Bug] model_fa_fp16.onnx holds FP32 weights in five of six published 32K heads `bug` `accepted` `in-progress` `wg/router-models-inference-runtime` 💬3
- [#3275](https://github.com/vllm-project/semantic-router/issues/3275) [Bug] Jaeger is the only support image not pinned — it uses a floating `latest` tag on an EOL v1 line `bug` `good first issue` `help wanted` `accepted` 💬3
- [#3278](https://github.com/vllm-project/semantic-router/issues/3278) [Bug] context_compression leaves partially compressed body on recovery-store failure `bug` `accepted` `in-progress` `wg/agentic-context` 💬3
- [#3274](https://github.com/vllm-project/semantic-router/issues/3274) [Bug] Envoy is always started with --log-level debug, which writes upstream API keys into its logs `bug` `good first issue` `help wanted` `accepted` 💬3
- [#3273](https://github.com/vllm-project/semantic-router/issues/3273) [Feature] Add a bounded random model-selection algorithm `enhancement` `accepted` `wg/mom-routing` 💬3
- [#3267](https://github.com/vllm-project/semantic-router/issues/3267) [Feature] Make on_unknown friendlier and simplify its implementation `enhancement` `accepted` `wg/mom-routing` 💬3
- [#3295](https://github.com/vllm-project/semantic-router/issues/3295) [Test] Retire unprofiled rl-driven E2E cases `enhancement` `good first issue` `help wanted` `accepted` 💬2
- [#3291](https://github.com/vllm-project/semantic-router/issues/3291) [CI] Use one image catalog for docker-validate and docker-publish `enhancement` `good first issue` `help wanted` `accepted` 💬2
- [#3289](https://github.com/vllm-project/semantic-router/issues/3289) [CI] Share one Go 1.25 setup composite and drop dead Core toolchain steps `enhancement` `good first issue` `help wanted` `accepted` 💬2
- [#3272](https://github.com/vllm-project/semantic-router/issues/3272) [Feature] Separate response detection signals from enforcement plugins `enhancement` `accepted` `wg/mom-routing` 💬2
- [#3279](https://github.com/vllm-project/semantic-router/issues/3279) [Feature] Add bounded shadow model dispatch and replay capture `enhancement` `accepted` `wg/mom-routing` 💬2
- [#3290](https://github.com/vllm-project/semantic-router/issues/3290) [CI] Unify Kind and disk-space bootstrap for Operator and E2E `enhancement` `good first issue` `help wanted` `accepted` 💬1
- [#3302](https://github.com/vllm-project/semantic-router/issues/3302) [Bug] find_onnx_models ignores the execution provider, so CPU signals run 10x slower on the FP16 graph `needs-acceptance` `wg/router-models-inference-runtime`

#### 🔒 Closed Issues
- [#3275](https://github.com/vllm-project/semantic-router/issues/3275) [Bug] Jaeger is the only support image not pinned — it uses a floating `latest` tag on an EOL v1 line
- [#3278](https://github.com/vllm-project/semantic-router/issues/3278) [Bug] context_compression leaves partially compressed body on recovery-store failure
- [#3274](https://github.com/vllm-project/semantic-router/issues/3274) [Bug] Envoy is always started with --log-level debug, which writes upstream API keys into its logs
- [#3107](https://github.com/vllm-project/semantic-router/issues/3107) [Bug] Resolve Router-owned Responses file_id images before cross-format dispatch
- [#3226](https://github.com/vllm-project/semantic-router/issues/3226) [CI] go mod download has no fallback on Go proxy network errors
- [#3213](https://github.com/vllm-project/semantic-router/issues/3213) [Bug] Router still ships unused pkg/hnsw and pkg/utils/pii packages

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*