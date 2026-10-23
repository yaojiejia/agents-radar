# 📡 AI Ecosystem Digest — 2026-10-23

> Generated 2026-10-23 01:16 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 152,920 | 21 | 1 | 0 | 2 |
| [OpenAI Codex](https://github.com/openai/codex) | 130,482 | 20 | 1 | 49 | 3 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 107,529 | 0 | 0 | 4 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,293 | 14 | 2 | 0 | 2 |
| [OpenCode](https://github.com/anomalyco/opencode) | 220,222 | 20 | 27 | 15 | 1 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 28,660 | 40 | 6 | 3 | 1 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 392,790 | 67 | 420 | 223 | 1 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 256,255 | 40 | 3 | 6 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 95,154 | 34 | 35 | 46 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 37,624 | 20 | 8 | 63 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 132,054 | 10 | 20 | 25 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 184,343 | 3 | 14 | 10 | 1 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 61,838 | 26 | 5 | 4 | 0 |
| [Unsloth](https://github.com/unslothai/unsloth) | 78,435 | 13 | 10 | 148 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,159 | 7 | 32 | 16 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,247 | 10 | 4 | 3 | 0 |

---

## ✨ Highlights

- **Claude Code** released versions [v2.1.309](https://github.com/anthropics/claude-code/releases/tag/v2.1.309) and [v2.1.308](https://github.com/anthropics/claude-code/releases/tag/v2.1.308).
- **OpenAI Codex** has merged several important PRs including [#56314](https://github.com/openai/codex/pull/56314) for managed configuration loaders and [#56313](https://github.com/openai/codex/pull/56313) for model catalog overrides.
- **OpenClaw** addressed multiple issues in the latest release, including fixes for session handling and accessibility improvements.
- **Hermes Agent** received significant attention with a new issue on the [Bug](https://github.com/NousResearch/hermes-agent/issues/143290) where posting to a completed run interrupts future actions, accumulating 7 comments.
- **LiteLLM** has a hot new issue reported regarding the [Bug](https://github.com/BerriAI/litellm/issues/47904) that impacts root CA trust in certain images, gathering 5 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 152,920 · **Open issues:** 15,458 · **Last push:** 2h ago

On October 23, 2026, Claude Code released version 2.1.309, which addressed critical issues with sandboxed Bash commands on macOS and Linux, ensuring that sandbox restrictions apply correctly with symlinks and during command execution. Version 2.1.308 also rolled out, focusing on bug fixes and reliability improvements. Notably, several new issues emerged, including a bug where the remote control for local Code sessions is not restored after a silent auto-update (issue #104230), and concerns about Claude ignoring user instructions regarding code modifications (issue #104428). These developments highlight ongoing challenges for users on both macOS and Windows platforms, particularly with session management and user permissions.

#### 🚀 New Releases
- [v2.1.309](https://github.com/anthropics/claude-code/releases/tag/v2.1.309) v2.1.309
- [v2.1.308](https://github.com/anthropics/claude-code/releases/tag/v2.1.308) v2.1.308

#### 🐛 New Issues
- [#104230](https://github.com/anthropics/claude-code/issues/104230) [BUG] Desktop (macOS): Remote Control for local Code sessions is not restored after silent auto-update relaunch `bug` `has repro` `platform:macos` `area:desktop` 💬1
- [#104283](https://github.com/anthropics/claude-code/issues/104283) [FEATURE] Desktop app (Code tab): let users unpin the task plan block so it scrolls with the conversation `enhancement` `platform:windows` `area:ui` `area:desktop` 💬1
- [#104436](https://github.com/anthropics/claude-code/issues/104436) [BUG] bashEditDiff stages the whole working tree in the user's real repo when `GIT_DIR`/`GIT_WORK_TREE` don't reach git `bug` `has repro` `platform:macos` `area:bash` 💬1
- [#104428](https://github.com/anthropics/claude-code/issues/104428) [Bug] Claude ignores user instructions and modifies code against specified direction `bug` `platform:macos` `area:model` `platform:vscode` 💬1
- [#104443](https://github.com/anthropics/claude-code/issues/104443) Desktop: "Couldn't resume that session" hides real cause (macOS TCC EPERM on session cwd) `bug` `platform:macos` `area:desktop`
- [#104441](https://github.com/anthropics/claude-code/issues/104441) Auto mode blocks user-approved permission changes with no in-chat override `enhancement` `platform:windows` `area:permissions`
- [#104442](https://github.com/anthropics/claude-code/issues/104442) Thumbs-down / feedback buttons missing in Claude desktop app Code tab `enhancement` `platform:windows` `area:ui` `area:desktop`
- [#104440](https://github.com/anthropics/claude-code/issues/104440) Bug Report: Claude Code refuses requests and gives unhelpful responses `bug` `platform:linux` `area:model` `needs-repro`
- [#104439](https://github.com/anthropics/claude-code/issues/104439) [BUG] Claude Desktop (Linux/KDE Wayland): taskbar button flashes on every Alt+Tab away from the app; gone with --ozone-platform=x11 `invalid`
- [#104438](https://github.com/anthropics/claude-code/issues/104438) [BUG] Claude Desktop (macOS): device link flaps "computer isn't connected" — server closes 1012 "Tool list recovery after restart failed", then handshake-timeout loops (regression since 3.x, Oct 20) `bug` `has repro` `platform:macos` `area:mcp`
- [#104437](https://github.com/anthropics/claude-code/issues/104437) [Feature Request] Cmd+C should copy fullscreen selection on macOS `enhancement` `platform:macos` `area:tui`
- [#104435](https://github.com/anthropics/claude-code/issues/104435) [Bug] Claude in Chrome extension fails to connect: "Browser extension is not connected" `duplicate` `platform:linux` `area:chrome`
- [#104434](https://github.com/anthropics/claude-code/issues/104434) Windows: session CLI walks scratch/session trees with per-file opens, exhausting NTFS nonpaged pool (NtFC) `duplicate`
- [#104433](https://github.com/anthropics/claude-code/issues/104433) Windows: session CLI walks scratch/session trees with per-file opens, exhausting NTFS nonpaged pool (NtFC) `bug` `has repro` `platform:windows` `area:core`
- [#104432](https://github.com/anthropics/claude-code/issues/104432) [BUG] Console/PowerShell window flickers open-and-closed on every shell command (Windows) — unusable `bug` `platform:windows` `area:bash`
- [#104431](https://github.com/anthropics/claude-code/issues/104431) [FEATURE] Mods: let a multi-row Input wrap long lines `enhancement` `area:plugins`
- [#104429](https://github.com/anthropics/claude-code/issues/104429) [GitHub integration] `bug` `needs-info` `github-integration`
- [#104430](https://github.com/anthropics/claude-code/issues/104430) [Bug] Claims Unverified Root Causes and Ignores "stop" Instructions `bug` `platform:macos` `area:model` `area:agents`
- [#104427](https://github.com/anthropics/claude-code/issues/104427) [GitHub integration] `question` `github-integration`
- [#104426](https://github.com/anthropics/claude-code/issues/104426) [FEATURE] Desktop Code tab: show the Allow/Deny approval card below the task list, at the bottom of the conversation `enhancement` `platform:macos` `area:ui` `area:desktop`
- [#104425](https://github.com/anthropics/claude-code/issues/104425) Claude Desktop (Code tab): new session worktrees are cut from `main` instead of the repository's default branch `bug` `has repro` `platform:macos` `regression`

#### 🔒 Closed Issues
- [#87164](https://github.com/anthropics/claude-code/issues/87164) [BUG] Desktop file pane: right-click on a text selection offers no Copy — the context menu is entirely file-scoped

### OpenAI Codex (`openai/codex`)

**Stars:** 130,482 · **Open issues:** 24,224 · **Last push:** <1h ago

On October 23, 2026, the OpenAI Codex ecosystem saw the release of several alpha versions, including rust-v0.164.0-alpha.12, with notable updates such as improved managed configuration loaders and model catalog overrides for context tools. Key features merged today included enhancements like environment-scoped managed hooks and support for model-specific writable-root permissions, which aim to refine user experiences and developer interactions. An important issue raised in the community involved banked resets being improperly marked as "not needed" post-global reset, resulting in significant discrepancies in eligibility assessments. Overall, the day's developments reflect ongoing efforts to enhance Codex's functionality and address user concerns effectively.

#### 🚀 New Releases
- [rust-v0.164.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.164.0-alpha.12) 0.164.0-alpha.12
- [rust-v0.164.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.164.0-alpha.11) 0.164.0-alpha.11
- [rust-v0.163.0-alpha.11.2](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.11.2) 0.163.0-alpha.11.2

#### ✅ Merged PRs
- [#56314](https://github.com/openai/codex/pull/56314) Add managed configuration loaders for custom config servers
- [#56313](https://github.com/openai/codex/pull/56313) Apply model catalog overrides to history, notes, and context tools
- [#56312](https://github.com/openai/codex/pull/56312) Track accepted conversation history in rollout traces
- [#56309](https://github.com/openai/codex/pull/56309) Support model-specific writable-root permission wording
- [#56308](https://github.com/openai/codex/pull/56308) Separate directory and repository scopes in the TUI
- [#56304](https://github.com/openai/codex/pull/56304) Add support for environment-scoped managed hooks
- [#56302](https://github.com/openai/codex/pull/56302) Add hook configuration to environment attachments
- [#56301](https://github.com/openai/codex/pull/56301) Add TLS forwarding tests for MITM SigV4 requests
- [#56297](https://github.com/openai/codex/pull/56297) Mark built-in dummy credentials and strengthen collision checks
- [#56295](https://github.com/openai/codex/pull/56295) Decouple managed configuration loading from ChatGPT authentication
- [#56293](https://github.com/openai/codex/pull/56293) Use fixed-token auth fixtures in Vertex tests
- [#56292](https://github.com/openai/codex/pull/56292) Fix MCP cancellation tests to use the metadata callback
- [#56290](https://github.com/openai/codex/pull/56290) Lock Python release build tools with uv
- [#56288](https://github.com/openai/codex/pull/56288) Pin Linux artifact signing to Cosign v3.1.4
- [#56286](https://github.com/openai/codex/pull/56286) Bump `@modelcontextprotocol/sdk` to `1.32.0`
- [#56284](https://github.com/openai/codex/pull/56284) Scope model catalogs and caches by thread originator
- [#56280](https://github.com/openai/codex/pull/56280) Group consecutive transcript prompts into one background block
- [#56278](https://github.com/openai/codex/pull/56278) Add negotiated network policy metadata support for MCP calls
- [#56277](https://github.com/openai/codex/pull/56277) Support bounded request bodies in AWS SigV4 signing
- [#56274](https://github.com/openai/codex/pull/56274) Wait for cloud config refresh cancellation in loader lifetime tests
- [#56272](https://github.com/openai/codex/pull/56272) Upgrade Python SDK model generation to datamodel-code-generator 0.64.0
- [#56266](https://github.com/openai/codex/pull/56266) Preserve MCP disable reasons across runtime overlays
- [#56265](https://github.com/openai/codex/pull/56265) Add a built-in Google Cloud Vertex AI provider
- [#56263](https://github.com/openai/codex/pull/56263) Reject backslashes in HTTP(S) marketplace URL userinfo
- [#56261](https://github.com/openai/codex/pull/56261) Isolate V8 source dependencies and their C++ runtime settings
- [#56250](https://github.com/openai/codex/pull/56250) Avoid redundant settings checkpoints when resuming threads
- [#56248](https://github.com/openai/codex/pull/56248) Bump uv to 0.13.5 in CI and release workflows
- [#56247](https://github.com/openai/codex/pull/56247) Consolidate Rust unit tests under dedicated test modules
- [#56246](https://github.com/openai/codex/pull/56246) Bump Bazelisk to 1.30.0 in the Bazel CI setup action
- [#56236](https://github.com/openai/codex/pull/56236) Make the code mode yield/resume test yield explicitly between phases
- [#56234](https://github.com/openai/codex/pull/56234) Emit prompt telemetry only after hooks accept input
- [#56233](https://github.com/openai/codex/pull/56233) Make Opus encoder test timestamps follow sample time
- [#56224](https://github.com/openai/codex/pull/56224) Reuse current model context across paginated resume config loading
- [#56222](https://github.com/openai/codex/pull/56222) Consolidate Bazel CI setup into `prepare-bazel-ci`
- [#56220](https://github.com/openai/codex/pull/56220) Use cargo_bin in the Windows sandbox manifest test
- [#56214](https://github.com/openai/codex/pull/56214) Remove the `u64` cast from WSL DrvFS detection
- [#56211](https://github.com/openai/codex/pull/56211) Default fresh memory profiles to v2
- [#56210](https://github.com/openai/codex/pull/56210) Stabilize the marketplace staging cleanup test
- [#56182](https://github.com/openai/codex/pull/56182) Add AWS SigV4 signing to network proxy MITM hooks
- [#56163](https://github.com/openai/codex/pull/56163) Enable reasoning effort overrides by default
- [#56154](https://github.com/openai/codex/pull/56154) Add managed network review domains before allow rules
- [#56153](https://github.com/openai/codex/pull/56153) Preserve safe enterprise MCP authentication error details
- [#56139](https://github.com/openai/codex/pull/56139) Fix the MCP auth status test's IdP OAuth configuration
- [#56133](https://github.com/openai/codex/pull/56133) Defer agent mail after empty final answers
- [#56132](https://github.com/openai/codex/pull/56132) Cancel MCP tool requests when response futures are dropped
- [#56127](https://github.com/openai/codex/pull/56127) Avoid blocking EMA auth status checks on account refresh
- [#56124](https://github.com/openai/codex/pull/56124) Forward Guardian reviewer events to parent raw-event subscribers
- [#56097](https://github.com/openai/codex/pull/56097) Prepare TUI startup to accept multiple backend sessions
- [#56091](https://github.com/openai/codex/pull/56091) Keep TUI preferences editable when execution settings are invalid

#### 🐛 New Issues
- [#56262](https://github.com/openai/codex/issues/56262) Banked resets rejected as "not needed" for hours after a global reset — weekly shows 83–87% but eligibility treats it as 100% (reproduced twice, 2 resets lost) `bug` `codex-web` `rate-limits` 💬5
- [#56086](https://github.com/openai/codex/issues/56086) GPT-6 Astra max turns one deletion-command rejection into a false permanent refusal loop `bug` `model-behavior` `windows-os` `sandbox` 💬3
- [#56291](https://github.com/openai/codex/issues/56291) iOS project list does not match Mac project list `bug` `iOS` `app` `session` 💬2
- [#56285](https://github.com/openai/codex/issues/56285) macOS desktop Work: Chrome browser access fails with "originating browser context" error `bug` `app` `browser` 💬1
- [#56311](https://github.com/openai/codex/issues/56311) Windows: each `codex.exe --__codex-windows-mxc` launch leaves ~395 BfsS/BfsG kernel pool allocations (bfs.sys, via Appinfo) that are not released after the launcher exits; long uptime ends in `CreateProcessSecurityEnvironment failed (0x800705AA)` `bug` `windows-os` `sandbox` `app` 💬1
- [#56310](https://github.com/openai/codex/issues/56310) macOS Computer Use: VirtualBuddy screenshots/AX tree available but coordinate clicks fail with -10005 noWindowsAvailable `bug` `app` `computer-use` 💬1
- [#56299](https://github.com/openai/codex/issues/56299) macOS desktop Local: Sites write_stdin rejected with sandbox_approval=false after on-request config and restart `bug` `sandbox` `tool-calls` `app` 💬1
- [#56294](https://github.com/openai/codex/issues/56294) Missing Computer use `bug` `app` `computer-use` 💬1
- [#56283](https://github.com/openai/codex/issues/56283) 5 hours limited were hitted immediately after the reset time `bug` `rate-limits` `CLI` 💬1
- [#56316](https://github.com/openai/codex/issues/56316) SessionStart(compact) delivery is lost when app-server restarts before continuation `bug` `CLI` `context` `hooks`
- [#56315](https://github.com/openai/codex/issues/56315) Chrome browser use: an empty HTTP Basic auth 401 without Content-Type is classified as a download and fails with net::ERR_BLOCKED_BY_CLIENT `bug` `auth` `app` `browser`
- [#56305](https://github.com/openai/codex/issues/56305) [IDE Extension] Preserve completed agent runs and model preferences by workspace `enhancement` `extension` `subagent` `session`
- [#56307](https://github.com/openai/codex/issues/56307) [dots][cloud browser] WeChat Official Account admin blocked by site-safety before login `bug` `browser` `dots`
- [#56306](https://github.com/openai/codex/issues/56306) [FEATURE]: Support input token counting for ChatGPT plan (OAuth) inference `enhancement` `auth` `rate-limits` `CLI`
- [#56303](https://github.com/openai/codex/issues/56303) Codex macOS: intermittent broken autofill popup layout `bug` `app`
- [#56300](https://github.com/openai/codex/issues/56300) [Ordinary Pro Chat][Oct 22 recurrence] Google Drive Always allow does not persist into a fresh chat `bug` `tool-calls`
- [#56298](https://github.com/openai/codex/issues/56298) Cloud: saved instructions are not consistently reflected in the first response of a new conversation `bug` `codex-web` `config`
- [#56289](https://github.com/openai/codex/issues/56289) [Windows] ChatGPT repeatedly fails to open in one Windows user profile after updating in another `bug` `windows-os` `app`
- [#56296](https://github.com/openai/codex/issues/56296) Show a live preview of remote computer-use sessions `enhancement` `app` `computer-use` `remote`
- [#56287](https://github.com/openai/codex/issues/56287) [Spaces] Space-scoped search finds Pages by title but not exact body text; global Ctrl+K works `bug` `app`

#### 🔒 Closed Issues
- [#45804](https://github.com/openai/codex/issues/45804) Remote QR pairing fails after removing previously paired iPhone

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 107,529 · **Open issues:** 750 · **Last push:** 2h ago

On October 22, 2026, Gemini CLI released version v0.67.0-nightly.20261022.g09d81bf11, which includes the integration of an IDE companion into container sandboxes via execution standard input/output, addressing the changelog for the previous v0.66.0-preview. Notable merged pull requests feature fixes for preserving `${VAR}` placeholders during deprecated settings migration, handling termination signals to stop tool executions after cancellation in non-interactive modes, and ensuring function call model turns receive necessary thought signatures. Additionally, work was done to maintain extended token usage metadata and align per-turn reporting. There were no new issues reported today, indicating a stable development process.

#### 🚀 New Releases
- [v0.67.0-nightly.20261022.g09d81bf11](https://github.com/google-gemini/gemini-cli/releases/tag/v0.67.0-nightly.20261022.g09d81bf11) Release v0.67.0-nightly.20261022.g09d81bf11

#### ✅ Merged PRs
- [#29867](https://github.com/google-gemini/gemini-cli/pull/29867) fix(cli): preserve ${VAR} placeholders during deprecated settings migration
- [#29849](https://github.com/google-gemini/gemini-cli/pull/29849) fix(cli): handle termination signals and prevent tool execution after cancellation in non-interactive mode
- [#29828](https://github.com/google-gemini/gemini-cli/pull/29828) fix(core): ensure all model turns with function calls receive thought signatures
- [#29834](https://github.com/google-gemini/gemini-cli/pull/29834) fix(a2a-server,core): preserve extended token usage metadata and align per-turn reporting

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,293 · **Open issues:** 2,254 · **Last push:** 8h ago

On October 22, 2026, GitHub Copilot CLI released version 1.0.103, which introduced the ability to copy the original code from completed response code blocks when enabled and improved the session behavior to honor saved sandbox settings and flags. This update also ensures that cloud replies retain their full text after a connection drop and enhances the sessions browser by displaying a session's recorded title instead of a generic fallback. No pull requests were merged today, but several new issues were reported, with #5232 raising concerns about trusted folders auto-approving shell executions in manual mode, potentially leading to unexpected side effects from commands like scripts and SQL queries. Other notable issues include problems with cache management and session handling, alongside feature requests aimed at enhancing user experience.

#### 🚀 New Releases
- [v1.0.103](https://github.com/github/copilot-cli/releases/tag/v1.0.103) 1.0.103
- [v1.0.103-0](https://github.com/github/copilot-cli/releases/tag/v1.0.103-0) 1.0.103-0

#### 🐛 New Issues
- [#5232](https://github.com/github/copilot-cli/issues/5232) Trusted folders silently auto-approve shell execution in manual mode, even for commands with unpredictable side effects (scripts, sqlcmd, curl) `triage` 💬2
- [#5238](https://github.com/github/copilot-cli/issues/5238) repeated cache bust for every image after 50th `triage`
- [#5237](https://github.com/github/copilot-cli/issues/5237) Installed plugin custom agent cancels its own HTTP MCP calls while default agent succeeds `triage`
- [#5236](https://github.com/github/copilot-cli/issues/5236) Windows: Entra broker token cache stays 0 bytes after MCP sign-in, so every new process re-prompts `triage`
- [#5235](https://github.com/github/copilot-cli/issues/5235) Skills can't ask clarifying questions in interactive mode with Hydra Fusion (e.g. grill-me) `triage`
- [#5234](https://github.com/github/copilot-cli/issues/5234) Windows CLI becomes unusable when a configured MCP server needs authentication `triage`
- [#5233](https://github.com/github/copilot-cli/issues/5233) Remote MCP (OAuth): active session keeps resending an expired access token instead of refreshing or prompting sign-in `triage`
- [#5231](https://github.com/github/copilot-cli/issues/5231) Allow excluding specific models from Auto model selection `triage`
- [#5230](https://github.com/github/copilot-cli/issues/5230) web_fetch fails DNS validation in proxy-only environments despite working native HTTP transport (1.0.102) `triage`
- [#5229](https://github.com/github/copilot-cli/issues/5229) ACP mode: expired MCP OAuth access token opens the browser authorization page instead of using the stored refresh token `triage`
- [#5228](https://github.com/github/copilot-cli/issues/5228) `copilot --resume` without an ID drops into a new empty session; the Sessions list is auto-replaced after ~2s and the trust prompt takes the first Enter `triage`
- [#5227](https://github.com/github/copilot-cli/issues/5227) Feature request: option to pin input box to the top of the screen `triage`
- [#5226](https://github.com/github/copilot-cli/issues/5226) Voice: make the transcription language configurable (currently hard-coded to `"auto"`) `triage`
- [#5225](https://github.com/github/copilot-cli/issues/5225) Keep sessionStart hook additionalContext after compaction `area:context-memory` `area:plugins`

#### 🔒 Closed Issues
- [#5027](https://github.com/github/copilot-cli/issues/5027) DNS broken for Linux Sandbox when using systemd-resolved stub resolver
- [#4914](https://github.com/github/copilot-cli/issues/4914) Gemini continuation and /compact fail with "Tool name is required" on mixed-model history

### OpenCode (`anomalyco/opencode`)

**Stars:** 220,222 · **Open issues:** 3,647 · **Last push:** <1h ago

On October 23, 2026, OpenCode released version v1.19.4, which upgraded the Bun runtime to 1.4.4, addressing critical security fixes for various protocols and updating root certificates. Significant merged features included the ability to capture app and server heap snapshots into one folder, a new search list with sticky sections across Desktop, and cleaner organization of OpenAPI documents for CI checks. Notably, a new issue was raised regarding a FreeUsageLimitError being triggered despite no free usage being recorded in the last 24 hours, highlighting potential issues with user experience on the free plan. Additionally, community feedback surfaced around the desktop's inaccurate timeline detail and a feature request for improved Workspace Lock capabilities.

#### 🚀 New Releases
- [v1.19.4](https://github.com/anomalyco/opencode/releases/tag/v1.19.4) v1.19.4

#### ✅ Merged PRs
- [#58278](https://github.com/anomalyco/opencode/pull/58278) docs: fix broken translated pages
- [#58283](https://github.com/anomalyco/opencode/pull/58283) fix(stats): send User-Agent for GitHub star count
- [#58263](https://github.com/anomalyco/opencode/pull/58263) fix(desktop): stop AppImage executable name ending in .desktop
- [#57999](https://github.com/anomalyco/opencode/pull/57999) refactor(client,schema): remove duplicate helpers and unused schema exports
- [#57994](https://github.com/anomalyco/opencode/pull/57994) refactor(core): deduplicate session token types and tighten provider plugins
- [#58259](https://github.com/anomalyco/opencode/pull/58259) feat(desktop): capture app and server heap snapshots into one folder
- [#58262](https://github.com/anomalyco/opencode/pull/58262) fix: regenerate broken OpenAPI documents and check them in CI
- [#57947](https://github.com/anomalyco/opencode/pull/57947) feat(app): glide the sidebar tooltip between rows
- [#57996](https://github.com/anomalyco/opencode/pull/57996) refactor: remove redundant casts and duplicate helpers across sdk, plugin, codemode, and schema
- [#58222](https://github.com/anomalyco/opencode/pull/58222) feat(app): share one search list with sticky sections across Desktop
- [#58256](https://github.com/anomalyco/opencode/pull/58256) fix(desktop): tidy the What's new in beta page and drop its command
- [#58001](https://github.com/anomalyco/opencode/pull/58001) refactor(ai): decode WebSocket frames once and derive provider option types from schemas
- [#56322](https://github.com/anomalyco/opencode/pull/56322) fix(core): attribute V1 global sessions during import
- [#58232](https://github.com/anomalyco/opencode/pull/58232) chore(core): update MCP SDK to 2.3.1
- [#58253](https://github.com/anomalyco/opencode/pull/58253) chore: use bun check for local typechecks and TypeScript 7.1 in CI

#### 🐛 New Issues
- [#58205](https://github.com/anomalyco/opencode/issues/58205) [BUG] FreeUsageLimitError raised with no free usage in the 24h window (free plan, $0 balance) — reset window not exposed to CLI/API `pending close` `triaging` 💬4
- [#58175](https://github.com/anomalyco/opencode/issues/58175) zen: deepseek-v4.1-flash prompt cache collapses above ~256k context since 2026-10-17 `triaging` 💬4
- [#58198](https://github.com/anomalyco/opencode/issues/58198) Global Rules Ignored `pending close` `triaging` 💬3
- [#58128](https://github.com/anomalyco/opencode/issues/58128) do not stop retrying on llm api failures 💬3
- [#58150](https://github.com/anomalyco/opencode/issues/58150) Desktop: Timeline detail is inaccurate. 💬3
- [#58243](https://github.com/anomalyco/opencode/issues/58243) [FEATURE]: MCP manager UX - per-server output links (web panel URLs), placeholder prompts with secure secret storage, a full config editor, and richer ask/mention inputs 💬2
- [#58241](https://github.com/anomalyco/opencode/issues/58241) [FEATURE]: Workspace Lock `triaging` 💬2
- [#58226](https://github.com/anomalyco/opencode/issues/58226) cli: upgrade (curl) surfaces raw "curl: (23) Failure writing output" instead of the disk-full root cause 💬2
- [#58286](https://github.com/anomalyco/opencode/issues/58286) Opencode GO subscription gone, all account activity history wiped `pending close` `triaging` 💬1
- [#58285](https://github.com/anomalyco/opencode/issues/58285) False Free Usage Exceeded Message Going on for 2 Days already `pending close` `triaging` 💬1
- [#58284](https://github.com/anomalyco/opencode/issues/58284) Free models report "Free usage limit reached" despite zero usage `pending close` `triaging` 💬1
- [#58270](https://github.com/anomalyco/opencode/issues/58270) [FEATURE]: Add a token-count endpoint to the Zen/Go inference gateway 💬1
- [#58268](https://github.com/anomalyco/opencode/issues/58268) desktop: Electron version still ~1GB memory (Node server wrapped in Electron) `pending close` `triaging` 💬1
- [#58254](https://github.com/anomalyco/opencode/issues/58254) [FEATURE] Models settings menu: allow selecting multiple models 💬1
- [#58250](https://github.com/anomalyco/opencode/issues/58250) [FEATURE]: Add a /goal Command for Autonomous Goal Pursuit `pending close` `triaging` 💬1
- [#58247](https://github.com/anomalyco/opencode/issues/58247) desktop: maximized state lost when saved bounds exceed the display `reproduced` 💬1
- [#58245](https://github.com/anomalyco/opencode/issues/58245) [FEATURE]: Sessions split view 💬1
- [#58242](https://github.com/anomalyco/opencode/issues/58242) [FEATURE]: Make local file paths clickable in terminal output 💬1
- [#58239](https://github.com/anomalyco/opencode/issues/58239) error ot_scene_move_node failed: Scene nesting depth exceeds the native limit `reproduced` 💬1
- [#58234](https://github.com/anomalyco/opencode/issues/58234) tui: unresponsive after lock/unlock while background service and terminal stay healthy 💬1

#### 🔒 Closed Issues
- [#49827](https://github.com/anomalyco/opencode/issues/49827) migrate-v1: non-git sessions in "global" project hidden after V1→V2 upgrade
- [#19005](https://github.com/anomalyco/opencode/issues/19005) [FEATURE]: Make local file paths clickable in terminal output
- [#31377](https://github.com/anomalyco/opencode/issues/31377) [FEATURE]: Auto-discover skills from nested subdirectories (downward walk)
- [#53688](https://github.com/anomalyco/opencode/issues/53688) serve: Bun 1.4.2 segfault (address 0x3D8) after long uptime on Windows
- [#57178](https://github.com/anomalyco/opencode/issues/57178) [Bug]: session time.streamed is never persisted and step.streamed fires after the stream ends, not at first token
- [#37735](https://github.com/anomalyco/opencode/issues/37735) Empty stop completions are recorded as successful responses
- [#57975](https://github.com/anomalyco/opencode/issues/57975) Unified Real-Time Usage Dashboard for All AI Models
- [#55166](https://github.com/anomalyco/opencode/issues/55166) v2 MCP OAuth follows cross-origin redirects with request bodies
- [#51867](https://github.com/anomalyco/opencode/issues/51867) desktop/appimage: ELF binary named "ai.opencode.desktop" spams KDE Plasma with KConfigIni warnings
- [#57955](https://github.com/anomalyco/opencode/issues/57955) core: github-copilot shows zero models on auto-only accounts (model_picker_enabled false for every model)
- [#58150](https://github.com/anomalyco/opencode/issues/58150) Desktop: Timeline detail is inaccurate.
- [#57929](https://github.com/anomalyco/opencode/issues/57929) tui: option to show per-message timestamps in the session transcript
- [#45757](https://github.com/anomalyco/opencode/issues/45757) How to validate release attestation (json) ?
- [#45934](https://github.com/anomalyco/opencode/issues/45934) web UI hiding models visible in TUI
- [#44184](https://github.com/anomalyco/opencode/issues/44184) [FEATURE]:appearance.fontSize setting not applied to UI or terminal font size (v1.18.21 Linux)
- [#57973](https://github.com/anomalyco/opencode/issues/57973) Unable to switch agent (plan<->build) in webpage in mobile
- [#57967](https://github.com/anomalyco/opencode/issues/57967) provider: opencode-go/gemini-4-argon-contributor always fails with "Upstream request failed: Endpoint is unavailable"
- [#57939](https://github.com/anomalyco/opencode/issues/57939) [BUG]: /thinking command changes model reasoning variant instead of toggling visibility
- [#57210](https://github.com/anomalyco/opencode/issues/57210) tui: model picker omits configured local provider (ollama) models listed by CLI and API
- [#57920](https://github.com/anomalyco/opencode/issues/57920) web: session review pane never refreshes documents written by the assistant
- [#58226](https://github.com/anomalyco/opencode/issues/58226) cli: upgrade (curl) surfaces raw "curl: (23) Failure writing output" instead of the disk-full root cause
- [#46284](https://github.com/anomalyco/opencode/issues/46284) feat(app): favorite models for quick switching in model selector
- [#46354](https://github.com/anomalyco/opencode/issues/46354) bug(provider): credentials set via CLI/`/connect` are not applied to a running server (SAP AI Core, GitHub Copilot), and SAP multi-line keys are stored truncated
- [#45622](https://github.com/anomalyco/opencode/issues/45622) [FEATURE] Desktop app: option to start with a fresh session instead of resuming the last one
- [#45908](https://github.com/anomalyco/opencode/issues/45908) formatter subprocesses have no timeout and can hang the whole session
- [#46304](https://github.com/anomalyco/opencode/issues/46304) Frameless desktop windows can stay always-on-top on Windows after first show
- [#46194](https://github.com/anomalyco/opencode/issues/46194) Add --no-minify flag to the opencode CLI build script

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 28,660 · **Open issues:** 2,032 · **Last push:** <1h ago

On October 22, 2026, Qwen Code released version v0.26.0-nightly.20261022.bf66a26c97, which introduced daemon token persistence and fixed issues related to executable permissions in released binaries. Significant merged pull requests included enhancements to the managed-agent tests by replacing Runtime MCP connections and improvements to the CLI to handle message encoding limits. Among the new issues, the most noteworthy is #15138, which raises concerns about the Java failure reporter's potential to silently drop PR reports, indicating a crucial area for attention in CI processes.

#### 🚀 New Releases
- [v0.26.0-nightly.20261022.bf66a26c97](https://github.com/QwenLM/qwen-code/releases/tag/v0.26.0-nightly.20261022.bf66a26c97) Release v0.26.0-nightly.20261022.bf66a26c97

#### ✅ Merged PRs
- [#15198](https://github.com/QwenLM/qwen-code/pull/15198) test(managed-agent): replace the Runtime MCP connection mid-stream (FG12e)
- [#14726](https://github.com/QwenLM/qwen-code/pull/14726) fix(cli): recover from hosted send_message encoding limits
- [#15065](https://github.com/QwenLM/qwen-code/pull/15065) test(managed-agent): poll ToolTurn producers instead of waiting on onExit()

#### 🐛 New Issues
- [#15138](https://github.com/QwenLM/qwen-code/issues/15138) ci: Java failure reporter can silently drop PR reports or accept partial paginated jobs `priority/P2` `type/bug` `category/development` `scope/github-actions` 💬6
- [#15267](https://github.com/QwenLM/qwen-code/issues/15267) test(cli): --no-isolate run of the cli suite overwrites the real ~/.qwen/settings.json `priority/P3` `type/bug` `category/development` `scope/settings` 💬5
- [#15235](https://github.com/QwenLM/qwen-code/issues/15235) reasoning.effort "max" is silently downgraded to "xhigh" on non-Z.ai hostnames (local reverse proxies), even though the upstream provider documents and accepts "max" `priority/P2` `type/bug` `category/core` `scope/content-generation` 💬5
- [#15248](https://github.com/QwenLM/qwen-code/issues/15248) ci(sdk-java): runtime broker timing tests flake 3/3 on GitHub-hosted runners, blocking fork PR fast lane `priority/P2` `type/bug` `category/development` `scope/testing` 💬4
- [#15280](https://github.com/QwenLM/qwen-code/issues/15280) feat(web-shell): show full tool arguments and result when an MCP tool card is expanded `priority/P2` `type/feature-request` `category/ui` `scope/web-shell` 💬3
- [#15276](https://github.com/QwenLM/qwen-code/issues/15276) Windows desktop update fails with "Error opening file for writing" while the bundled runtime keeps node.exe locked `priority/P1` `type/bug` `category/platform` `scope/installation` 💬3
- [#15258](https://github.com/QwenLM/qwen-code/issues/15258) хук выдал мне текст который должен был выдать сессии после автосжатия `status/need-information` `priority/P3` `type/bug` `category/core` 💬3
- [#15225](https://github.com/QwenLM/qwen-code/issues/15225) bug(core): trailing auto-memory user message after tool result can prematurely stop tool-using agents `priority/P2` `model/long-context` `type/bug` `category/core` 💬3
- [#15292](https://github.com/QwenLM/qwen-code/issues/15292) feat: configurable base directory for general-purpose worktrees (`worktree.baseDir`) `priority/P3` `type/feature-request` `category/configuration` `scope/git` 💬2
- [#15287](https://github.com/QwenLM/qwen-code/issues/15287) Main CI failed: Qwen Code CI — cli/hosted-harness-process.test.ts [ cli/hosted-harness-process.test.ts ] `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#15277](https://github.com/QwenLM/qwen-code/issues/15277) memory: follow up on diagnostic advice, notice bounds and scan contracts `priority/P3` `category/core` `scope/memory` `type/enhancement` 💬2
- [#15271](https://github.com/QwenLM/qwen-code/issues/15271) test(feishu): consolidate inbound-file coverage and pin scoped dedup rollback `priority/P3` `status/blocked` `category/integration` `scope/testing` 💬2
- [#15269](https://github.com/QwenLM/qwen-code/issues/15269) Memory: a failed queued extraction escapes as an unhandled rejection and fails Core CI after a drain timeout `priority/P2` `type/bug` `category/core` `scope/memory` 💬2
- [#15247](https://github.com/QwenLM/qwen-code/issues/15247) feat(runtime-broker): add an HTTP-backed external Runtime provisioner for Session workers `priority/P2` `type/feature-request` `category/core` `roadmap/platform-distribution` 💬2
- [#15185](https://github.com/QwenLM/qwen-code/issues/15185) Main CI failed: E2E Tests — skill-hooks-resume.test.ts > … > a gate that blocked in the first session still blocks after --continue `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#15208](https://github.com/QwenLM/qwen-code/issues/15208) Main CI failed: SDK Java — WorkspaceCsiSqlWorkerMySqlIT.hostedProducerConsumesCommittedFinalOutputWithoutAnotherModelRequest `type/bug` `status/ready-for-agent` `autofix/in-progress` `autofix/approved` 💬1
- [#15288](https://github.com/QwenLM/qwen-code/issues/15288) Main CI failed: Managed Agent gate on e2f5037f0c0a `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#15253](https://github.com/QwenLM/qwen-code/issues/15253) Main CI failed: Managed Agent gate — WorkspaceCsiSqlWorkerMySqlIT.hostedProducerConsumesCommittedFinalOutputWithoutAnotherModelRequest `type/bug` `status/ready-for-agent` `autofix/in-progress` `autofix/approved` 💬1
- [#15285](https://github.com/QwenLM/qwen-code/issues/15285) Main CI failed: Managed Agent gate on 28c53fb50291 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#15268](https://github.com/QwenLM/qwen-code/issues/15268) Main CI failed: Managed Agent gate on 0961aab0873c `type/bug` `status/ready-for-agent` `autofix/skip` `autofix/approved` 💬1
- [#15282](https://github.com/QwenLM/qwen-code/issues/15282) Main CI failed: Managed Agent gate on 2050db87ef62 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#15281](https://github.com/QwenLM/qwen-code/issues/15281) Main CI failed: Managed Agent gate on 49f1f623c2e9 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#15264](https://github.com/QwenLM/qwen-code/issues/15264) Main CI failed: Managed Agent gate on 1a7390258df7 `type/bug` `status/ready-for-agent` `autofix/in-progress` `autofix/approved` 💬1
- [#15278](https://github.com/QwenLM/qwen-code/issues/15278) Main CI failed: Managed Agent gate on 6fb149d6d8fd `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#15203](https://github.com/QwenLM/qwen-code/issues/15203) Main CI failed: Managed Agent gate on c3802bcecad0 `type/bug` `status/ready-for-agent` `autofix/skip` `autofix/approved` 💬1
- [#15266](https://github.com/QwenLM/qwen-code/issues/15266) Main CI failed: Managed Agent gate on 85d3000c87c5 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#15260](https://github.com/QwenLM/qwen-code/issues/15260) Main CI failed: Managed Agent gate on 74c67c9e94f0 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#15262](https://github.com/QwenLM/qwen-code/issues/15262) Main CI failed: Managed Agent gate on c81d9ff6d1ea `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#15259](https://github.com/QwenLM/qwen-code/issues/15259) Main CI failed: Managed Agent gate on 06e59666dfaa `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#15252](https://github.com/QwenLM/qwen-code/issues/15252) Main CI failed: Managed Agent gate — ManagedAgentServerIntegrationTest.retriesAFailedRenameWithTheSameIdempotencyKey `type/bug` `status/ready-for-agent` 💬1
- [#15249](https://github.com/QwenLM/qwen-code/issues/15249) Main CI failed: Managed Agent gate on c184155148d2 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#15243](https://github.com/QwenLM/qwen-code/issues/15243) Main CI failed: Managed Agent gate on 6de63a157439 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#15241](https://github.com/QwenLM/qwen-code/issues/15241) Main CI failed: Managed Agent gate on 1733cd9e0728 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#15240](https://github.com/QwenLM/qwen-code/issues/15240) Main CI failed: Managed Agent gate on 0b3c2f816a9f `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#15242](https://github.com/QwenLM/qwen-code/issues/15242) Main CI failed: Managed Agent gate on 51f1d2c8bbf1 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#15239](https://github.com/QwenLM/qwen-code/issues/15239) Main CI failed: Managed Agent gate on 6e36259a003a `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#15226](https://github.com/QwenLM/qwen-code/issues/15226) Main CI failed: E2E Tests — skill-hooks-invocation-parity.test.ts > … > model-invoked skill: the gate fires and blocks the shell call `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#15206](https://github.com/QwenLM/qwen-code/issues/15206) Main CI failed: Managed Agent gate — ConcurrencyStorageFaultGateTest.aDatabaseOutageDuringTheResultCommitNeverSettles `type/bug` `status/ready-for-agent` 💬1
- [#15251](https://github.com/QwenLM/qwen-code/issues/15251) Fleet Shepherd Dashboard
- [#15149](https://github.com/QwenLM/qwen-code/issues/15149) Main CI failed: Managed Agent gate — EventTransportBrokerGate.bothWiresDeliverCanonicalEnvelopesToTheSessionLiteTopic `type/bug` `status/ready-for-agent` `autofix/approved`

#### 🔒 Closed Issues
- [#12277](https://github.com/QwenLM/qwen-code/issues/12277) serve: Local Control enable fails with EADDRINUSE when the daemon's ephemeral port is held on the LAN interface
- [#11394](https://github.com/QwenLM/qwen-code/issues/11394) test(e2e): sdk-typescript docker leg shares one QWEN_HOME; memory prefetch eats fake-server scripted responses
- [#15049](https://github.com/QwenLM/qwen-code/issues/15049) Hosted gate: HostedWorkspaceToolTurnIT packagedHarness test times out at runDriver
- [#13556](https://github.com/QwenLM/qwen-code/issues/13556) sed -i simulation misreads backslash escapes inside bracket expressions
- [#15079](https://github.com/QwenLM/qwen-code/issues/15079) Managed Agent: manage MCP servers at runtime without recreating a Session
- [#15185](https://github.com/QwenLM/qwen-code/issues/15185) Main CI failed: E2E Tests — skill-hooks-resume.test.ts > … > a gate that blocked in the first session still blocks after --continue

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

**Stars:** 392,790 · **Open issues:** 8,966 · **Last push:** <1h ago

The key highlight for OpenClaw on October 23, 2026, was the release of version 2026.10.6, which mandates a minimum Node.js version of 24.22.1 or 26.12.1 to reject insecure TLS chains linked to recent security issues. Significant fixes were merged, including a resolution for UI refresh issues in tool access views and the stabilization of chat media spacing during imports, enhancing overall user experience. Notably, a new issue was raised concerning Linux non-ASCII mount points being improperly decoded, which could impact user accessibility and functionality. Overall, the day focused on crucial security updates and performance refinements.

#### 🚀 New Releases
- [v2026.10.6](https://github.com/openclaw/openclaw/releases/tag/v2026.10.6) openclaw 2026.10.6

#### ✅ Merged PRs
- [#180865](https://github.com/openclaw/openclaw/pull/180865) fix(ui): refresh an open Tool access view when the session run settles
- [#180728](https://github.com/openclaw/openclaw/pull/180728) fix: recovered child sessions fail after their parent finishes
- [#180569](https://github.com/openclaw/openclaw/pull/180569) fix(control-ui): keep sidebar rows steady through reload
- [#179181](https://github.com/openclaw/openclaw/pull/179181) fix(ci): local checks fail on clean main while CI stays green
- [#181138](https://github.com/openclaw/openclaw/pull/181138) fix(plugins): retain deferred system events through SDK consumption
- [#181146](https://github.com/openclaw/openclaw/pull/181146) fix: restore LINE context wiring guard
- [#181128](https://github.com/openclaw/openclaw/pull/181128) fix(plugins): memory tasks fail after bundled plugin reload
- [#181139](https://github.com/openclaw/openclaw/pull/181139) refactor: keep approval presentation helpers private
- [#181088](https://github.com/openclaw/openclaw/pull/181088) fix: allow retry after Side chat times out
- [#180861](https://github.com/openclaw/openclaw/pull/180861) fix(doctor): reject malformed UTF-8 across legacy imports
- [#179622](https://github.com/openclaw/openclaw/pull/179622) fix: public conversation links show raw embed shortcodes for YouTube and external pages
- [#180135](https://github.com/openclaw/openclaw/pull/180135) fix(ui): composer shows no keyboard focus in forced-colors mode
- [#181132](https://github.com/openclaw/openclaw/pull/181132) refactor: reuse cron due-job test fixtures
- [#181135](https://github.com/openclaw/openclaw/pull/181135) fix(ui): stabilize chat media spacing checks during cold imports
- [#181024](https://github.com/openclaw/openclaw/pull/181024) perf(ui): defer menu navigation until first open
- [#178909](https://github.com/openclaw/openclaw/pull/178909) fix(telegram): offset checkpoints fail under stock Bun
- [#181129](https://github.com/openclaw/openclaw/pull/181129) fix: restore worker admission timeout regression
- [#172872](https://github.com/openclaw/openclaw/pull/172872) fix(cli): prevent descriptor controls in skill and hook reports
- [#181063](https://github.com/openclaw/openclaw/pull/181063) test(ui): align plugin composer checks with shadow removal
- [#181123](https://github.com/openclaw/openclaw/pull/181123) fix(macos): stop Gateway crash loops after illegal instructions
- [#181127](https://github.com/openclaw/openclaw/pull/181127) fix(secrets): 1Password secret provider fails when OpenClaw files are group-writable
- [#180822](https://github.com/openclaw/openclaw/pull/180822) fix(update): preserve JSON errors for invalid repair channels
- [#181052](https://github.com/openclaw/openclaw/pull/181052) perf(ui): defer detailed tool rendering from chat boot
- [#181028](https://github.com/openclaw/openclaw/pull/181028) fix(qa): image generation checks reject valid completion replies
- [#181068](https://github.com/openclaw/openclaw/pull/181068) perf(ui): defer emoji catalogs until composer or reaction intent
- [#181109](https://github.com/openclaw/openclaw/pull/181109) refactor: reuse update campaign inspector fixtures
- [#181118](https://github.com/openclaw/openclaw/pull/181118) chore(ui): refresh control ui locales
- [#181108](https://github.com/openclaw/openclaw/pull/181108) refactor(web-search): share live runtime config selection
- [#181076](https://github.com/openclaw/openclaw/pull/181076) improve: give mobile session titles more room
- [#181069](https://github.com/openclaw/openclaw/pull/181069) refactor: remove unserved runtime and plugin inputs
- [#149817](https://github.com/openclaw/openclaw/pull/149817) fix: keep onboarding pending after starter template updates
- [#178904](https://github.com/openclaw/openclaw/pull/178904) fix(automations): limit webhook-triggered turns to their own automation
- [#172921](https://github.com/openclaw/openclaw/pull/172921) fix(ui): keep the UI language out of the generic Prefs form and settings search
- [#181099](https://github.com/openclaw/openclaw/pull/181099) refactor(tts): share live runtime config selection
- [#181089](https://github.com/openclaw/openclaw/pull/181089) fix(gateway): resume saved inputs after crash-loop quarantine
- [#181087](https://github.com/openclaw/openclaw/pull/181087) refactor(reply): share live runtime config selection
- [#181038](https://github.com/openclaw/openclaw/pull/181038) fix(ui): pinned sessions cannot be reordered and guest drags fail
- [#181080](https://github.com/openclaw/openclaw/pull/181080) docs(ui): align Solid recipes with current lifecycle owners
- [#176335](https://github.com/openclaw/openclaw/pull/176335) fix(cli): service stop and uninstall failures print no next step
- [#181061](https://github.com/openclaw/openclaw/pull/181061) refactor(ui): remove unserved private presentation inputs
- [#181066](https://github.com/openclaw/openclaw/pull/181066) refactor(config): own live runtime selection beside snapshots
- [#181071](https://github.com/openclaw/openclaw/pull/181071) docs: make release index consistent and scannable
- [#180852](https://github.com/openclaw/openclaw/pull/180852) perf(ui): defer New Session picker bodies and obsolete preload code
- [#181060](https://github.com/openclaw/openclaw/pull/181060) fix: isolate sidebar pin E2E source server
- [#181035](https://github.com/openclaw/openclaw/pull/181035) fix: collapse scheduled prompts in conversation history
- [#181054](https://github.com/openclaw/openclaw/pull/181054) refactor: consolidate runtime preparation owners
- [#181043](https://github.com/openclaw/openclaw/pull/181043) fix: catch lint inventory drift in pull requests
- [#180993](https://github.com/openclaw/openclaw/pull/180993) fix(ui): clear stale settings errors during save retries
- [#180988](https://github.com/openclaw/openclaw/pull/180988) fix(release): repair 2026.9.34 validation drift
- [#181051](https://github.com/openclaw/openclaw/pull/181051) fix(qa): distinguish split-turn summaries from recovery retries
- [#176266](https://github.com/openclaw/openclaw/pull/176266) fix(message): stop printing channel control sequences in CLI output
- [#181064](https://github.com/openclaw/openclaw/pull/181064) test(android): await model availability publication
- [#181065](https://github.com/openclaw/openclaw/pull/181065) improve(ui): show startup byte changes in base comparisons
- [#181039](https://github.com/openclaw/openclaw/pull/181039) feat(plugins): support pre-storage ingress sanitization
- [#180303](https://github.com/openclaw/openclaw/pull/180303) fix: restore compaction status when reopening a running chat
- [#181019](https://github.com/openclaw/openclaw/pull/181019) fix: worker child spawn fails while required setup is running
- [#181055](https://github.com/openclaw/openclaw/pull/181055) refactor: localize single-consumer surface preparation
- [#181044](https://github.com/openclaw/openclaw/pull/181044) refactor(core): share schema and filesystem utility owners
- [#181001](https://github.com/openclaw/openclaw/pull/181001) fix(ui): remove unused cron model suggestion re-export
- [#181048](https://github.com/openclaw/openclaw/pull/181048) improve: reduce desktop sidebar toggle layout work
- [#181041](https://github.com/openclaw/openclaw/pull/181041) fix(scripts): clean older PR clones after template refresh
- [#180889](https://github.com/openclaw/openclaw/pull/180889) perf(ui): reduce warm model and automation interaction work
- [#181034](https://github.com/openclaw/openclaw/pull/181034) fix(ui): retain completed turn recaps after delayed session updates
- [#180961](https://github.com/openclaw/openclaw/pull/180961) refactor(agents): keep private execution phases with their owners
- [#175886](https://github.com/openclaw/openclaw/pull/175886) fix(openai): GPT-Live Talk bypasses the managed proxy on egress-restricted hosts
- [#181042](https://github.com/openclaw/openclaw/pull/181042) refactor(core): keep single-consumer preparation with its owners
- [#180910](https://github.com/openclaw/openclaw/pull/180910) chore: capture worker CPU in Gateway startup benchmarks
- [#180938](https://github.com/openclaw/openclaw/pull/180938) fix(ui): keep unused implementation exports private
- [#180931](https://github.com/openclaw/openclaw/pull/180931) fix(ci): updater launcher tests fail after early Node refusal
- [#180925](https://github.com/openclaw/openclaw/pull/180925) fix(msteams): resolve its unused-type CI failure
- [#180902](https://github.com/openclaw/openclaw/pull/180902) chore: reuse SMS wire fixtures across tests
- [#180213](https://github.com/openclaw/openclaw/pull/180213) fix(codex): checkpoint missing native tool results
- [#180204](https://github.com/openclaw/openclaw/pull/180204) fix(codex): release exact closed thread handoffs
- [#180466](https://github.com/openclaw/openclaw/pull/180466) fix(plugins): reload edited bundled code without restarting the gateway
- [#181045](https://github.com/openclaw/openclaw/pull/181045) fix: stabilize lazy chat menu tests
- [#181014](https://github.com/openclaw/openclaw/pull/181014) refactor(ui): remove obsolete component import facades
- [#181040](https://github.com/openclaw/openclaw/pull/181040) refactor(plugins): consolidate plugin-local owners
- [#176710](https://github.com/openclaw/openclaw/pull/176710) fix(path): keep frontmatter values the strings they were written as
- [#177702](https://github.com/openclaw/openclaw/pull/177702) fix(anthropic): selected 200K context window runs on the full 1M window after model discovery fails
- [#181036](https://github.com/openclaw/openclaw/pull/181036) refactor: simplify CLI output test fixtures
- [#175005](https://github.com/openclaw/openclaw/pull/175005) fix: session usage logs exceed the cap with fractional limits
- [#181029](https://github.com/openclaw/openclaw/pull/181029) refactor(cli): consolidate parsing and lifecycle owners
- [#181026](https://github.com/openclaw/openclaw/pull/181026) fix: accept intentionally empty bundled provider catalogs
- [#181017](https://github.com/openclaw/openclaw/pull/181017) fix(ui): remove the shadow strip above the chat composer
- [#181006](https://github.com/openclaw/openclaw/pull/181006) refactor(ui): route shell navigation directly to its owner
- [#181022](https://github.com/openclaw/openclaw/pull/181022) fix(scripts): recover failed PR template clones
- [#181009](https://github.com/openclaw/openclaw/pull/181009) refactor(clients): remove unserved private inputs
- [#181021](https://github.com/openclaw/openclaw/pull/181021) fix: open the keyboard when tapping the mobile composer
- [#181015](https://github.com/openclaw/openclaw/pull/181015) perf(ui): skip offscreen model option layout
- [#181018](https://github.com/openclaw/openclaw/pull/181018) fix(ui): hide mobile Publish PR when there are no changes
- [#181016](https://github.com/openclaw/openclaw/pull/181016) fix(ui): center composer plus and close icons
- [#180859](https://github.com/openclaw/openclaw/pull/180859) fix(tooling): run line-cap hooks in code-only worktrees
- [#180885](https://github.com/openclaw/openclaw/pull/180885) fix: project search shows unrelated projects from shared Git owners and paths
- [#181005](https://github.com/openclaw/openclaw/pull/181005) refactor(ui): remove retired Claws catalog dialog mode
- [#181012](https://github.com/openclaw/openclaw/pull/181012) fix(ui): align startup ratchet with measured bundle
- [#181007](https://github.com/openclaw/openclaw/pull/181007) refactor(ui): simplify agent tools preview
- [#181010](https://github.com/openclaw/openclaw/pull/181010) refactor(ui): derive session rail JSX properties
- [#180968](https://github.com/openclaw/openclaw/pull/180968) fix(plugins): channel plugin commands never receive native subagents or scheduled turns
- [#181004](https://github.com/openclaw/openclaw/pull/181004) refactor(ui): share profile preference failure results
- [#181008](https://github.com/openclaw/openclaw/pull/181008) test(ui): reuse run inspector fixture
- [#180997](https://github.com/openclaw/openclaw/pull/180997) refactor(ui): scope sharing saving feedback to each session
- [#180994](https://github.com/openclaw/openclaw/pull/180994) refactor(ui): remove retired cloud picker presentation
- [#180987](https://github.com/openclaw/openclaw/pull/180987) refactor(ui): simplify native component forwarding
- [#180976](https://github.com/openclaw/openclaw/pull/180976) refactor(runtime): remove unserved private inputs
- [#181003](https://github.com/openclaw/openclaw/pull/181003) refactor(ui): remove unused provider read receipts
- [#180998](https://github.com/openclaw/openclaw/pull/180998) refactor(ui): share chat import recovery lifecycle
- [#179840](https://github.com/openclaw/openclaw/pull/179840) chore: cover pasted text retention across chat turns
- [#181002](https://github.com/openclaw/openclaw/pull/181002) test(ui): share native attachment transfer fixture
- [#180992](https://github.com/openclaw/openclaw/pull/180992) refactor(ui): consolidate avatar request deadline tests
- [#180991](https://github.com/openclaw/openclaw/pull/180991) refactor(ui): consolidate config rejection test cases
- [#180986](https://github.com/openclaw/openclaw/pull/180986) refactor(ui): share file preview copy feedback styles
- [#180958](https://github.com/openclaw/openclaw/pull/180958) refactor(plugins): keep single-consumer work in its owner
- [#180967](https://github.com/openclaw/openclaw/pull/180967) perf(ui): retain prepared model catalogs across warm updates
- [#180981](https://github.com/openclaw/openclaw/pull/180981) refactor(host): remove unserved private inputs
- [#180982](https://github.com/openclaw/openclaw/pull/180982) fix: stop dead-code scan flagging benchmark entrypoints
- [#180985](https://github.com/openclaw/openclaw/pull/180985) refactor(ui): consolidate terminal cancellation and recovery tests
- [#180983](https://github.com/openclaw/openclaw/pull/180983) fix(discord): avoid unused Activity transport work during discovery
- [#176173](https://github.com/openclaw/openclaw/pull/176173) fix(agents): UTF-16-safe subagent progress draft titles
- [#179924](https://github.com/openclaw/openclaw/pull/179924) fix: let members edit their own profile without general write access
- [#180973](https://github.com/openclaw/openclaw/pull/180973) fix: reduce delays while loading Gateway plugins
- [#169684](https://github.com/openclaw/openclaw/pull/169684) fix: Cron repair shows a false empty-response error in WebChat
- [#180972](https://github.com/openclaw/openclaw/pull/180972) improve(ui): download over 5% less JavaScript with Brotli
- [#170245](https://github.com/openclaw/openclaw/pull/170245) fix(ios): make manual Gateway Connect a recognizable primary button
- [#169266](https://github.com/openclaw/openclaw/pull/169266) fix(oc-path): prevent duplicate YAML timestamp keys during edits
- [#168045](https://github.com/openclaw/openclaw/pull/168045) fix(memory-wiki): reject blank or non-UTF-8 wiki apply --body-file
- [#180884](https://github.com/openclaw/openclaw/pull/180884) perf(ui): reduce CPU while streaming long chat replies
- [#180984](https://github.com/openclaw/openclaw/pull/180984) chore(release): update appcast for 2026.10.6
- [#180890](https://github.com/openclaw/openclaw/pull/180890) perf: trim session setup copy from chat boot
- [#180819](https://github.com/openclaw/openclaw/pull/180819) fix(ui): observe provider review callback failures
- [#180957](https://github.com/openclaw/openclaw/pull/180957) fix: keep Gateway responsive during plugin reload cleanup
- [#180965](https://github.com/openclaw/openclaw/pull/180965) perf(ui): isolate cron rows from pending filter updates
- [#180546](https://github.com/openclaw/openclaw/pull/180546) fix(ui): preserve image extensions when MIME types include parameters
- [#180954](https://github.com/openclaw/openclaw/pull/180954) refactor(ui): remove redundant avatar renderer layers
- [#180738](https://github.com/openclaw/openclaw/pull/180738) improve(ui): prioritize archiving nested sessions together
- [#180878](https://github.com/openclaw/openclaw/pull/180878) fix(slack): stop replies when their parent is deleted
- [#180962](https://github.com/openclaw/openclaw/pull/180962) test(gateway): await traffic readiness in startup fixtures
- [#180963](https://github.com/openclaw/openclaw/pull/180963) fix: preserve accepted chat turns during restart recovery
- [#180975](https://github.com/openclaw/openclaw/pull/180975) chore(ui): refresh control ui locales
- [#180964](https://github.com/openclaw/openclaw/pull/180964) perf(ui): narrow sibling spacing invalidation
- [#180881](https://github.com/openclaw/openclaw/pull/180881) test(ui): advance calendar preset debounces with browser clock
- [#180860](https://github.com/openclaw/openclaw/pull/180860) refactor: consolidate plugin and QA operation owners
- [#180924](https://github.com/openclaw/openclaw/pull/180924) fix(gateway): wait for chat recovery before reporting ready
- [#180953](https://github.com/openclaw/openclaw/pull/180953) docs(models): clarify named custom provider setup
- [#180944](https://github.com/openclaw/openclaw/pull/180944) refactor: trim unused internal exports and test helpers
- [#180297](https://github.com/openclaw/openclaw/pull/180297) fix: preserve authored text alternatives for chat diagrams
- [#180945](https://github.com/openclaw/openclaw/pull/180945) fix: keep documented lint suppressions in inventory
- [#180894](https://github.com/openclaw/openclaw/pull/180894) refactor: consolidate plugin metadata preparation
- [#176233](https://github.com/openclaw/openclaw/pull/176233) fix(agents): keep emoji whole in skill descriptions
- [#168919](https://github.com/openclaw/openclaw/pull/168919) fix(iOS): performance - reduce chat streaming and transcript update work
- [#180951](https://github.com/openclaw/openclaw/pull/180951) fix: preserve profiles in node child commands
- [#180905](https://github.com/openclaw/openclaw/pull/180905) feat(vercel): pick the onboarding default from catalog recommendations
- [#180897](https://github.com/openclaw/openclaw/pull/180897) fix(ui): restore model discovery retry for unavailable providers
- [#180618](https://github.com/openclaw/openclaw/pull/180618) fix(ui): Appearance heading stays stale after language change
- [#180948](https://github.com/openclaw/openclaw/pull/180948) refactor(sessions): remove dead metadata and forwarding helpers
- [#170322](https://github.com/openclaw/openclaw/pull/170322) fix(claude-cli): stop unrelated native tasks holding the current final answer
- [#180883](https://github.com/openclaw/openclaw/pull/180883) docs(ui): align Solid guidance with current owners
- [#180939](https://github.com/openclaw/openclaw/pull/180939) fix: restore update checks after early Node refusal
- [#180887](https://github.com/openclaw/openclaw/pull/180887) perf(ui): keep New Session boot imports narrow
- [#180949](https://github.com/openclaw/openclaw/pull/180949) fix(browser): isolate executable detection fixtures from host files
- [#180868](https://github.com/openclaw/openclaw/pull/180868) refactor(ui): split oversized page responsibilities
- [#180919](https://github.com/openclaw/openclaw/pull/180919) refactor(ui): tighten Solid closeout baselines and guidance
- [#180933](https://github.com/openclaw/openclaw/pull/180933) chore: remove unused npm test fixtures
- [#180806](https://github.com/openclaw/openclaw/pull/180806) fix(ui): separate goal callback errors from validation
- [#180800](https://github.com/openclaw/openclaw/pull/180800) refactor(ui): use explicit raw config command flags
- [#180837](https://github.com/openclaw/openclaw/pull/180837) refactor: reuse dedupe and voice operation owners
- [#180914](https://github.com/openclaw/openclaw/pull/180914) refactor(ui): consolidate read and action presentation owners
- [#180879](https://github.com/openclaw/openclaw/pull/180879) fix(cron): cron.list shows scheduled plugin commands as ordinary agent turns
- [#179009](https://github.com/openclaw/openclaw/pull/179009) docs: add v2026.10.6 release notes
- [#178525](https://github.com/openclaw/openclaw/pull/178525) fix(agents): recovered summary reports unfinished work as done after an output-limit cut-off
- [#178638](https://github.com/openclaw/openclaw/pull/178638) fix(agents): recovered summary claims success after an earlier tool failed
- [#180901](https://github.com/openclaw/openclaw/pull/180901) perf(bench): measure warm channel-turn CPU and completion latency
- [#175015](https://github.com/openclaw/openclaw/pull/175015) fix(cli): surface the worktrees --removed-at validation error
- [#180820](https://github.com/openclaw/openclaw/pull/180820) fix(ui): retire stale widget pin feedback on membership changes
- [#180928](https://github.com/openclaw/openclaw/pull/180928) refactor(state): remove redundant database forwarding layers
- [#180929](https://github.com/openclaw/openclaw/pull/180929) fix: accept security reviews for the selected CI attempt
- [#180937](https://github.com/openclaw/openclaw/pull/180937) fix(ui): remove unused usage loading renderer
- [#180934](https://github.com/openclaw/openclaw/pull/180934) fix: restore controller guard fixture coverage
- [#178842](https://github.com/openclaw/openclaw/pull/178842) feat: drop files into new sessions from the command palette
- [#178066](https://github.com/openclaw/openclaw/pull/178066) fix: keep pinned sessions in the sidebar by default
- [#180915](https://github.com/openclaw/openclaw/pull/180915) refactor: remove retired heartbeat and queue helpers
- [#180911](https://github.com/openclaw/openclaw/pull/180911) refactor(sessions): remove deletion and archive forwarding layers
- [#180750](https://github.com/openclaw/openclaw/pull/180750) fix(ui): preserve pull request copy failure feedback
- [#180909](https://github.com/openclaw/openclaw/pull/180909) chore(perf): measure connected Gateway idle work
- [#179981](https://github.com/openclaw/openclaw/pull/179981) fix(ui): correct chat direction after numeric prefixes
- [#180932](https://github.com/openclaw/openclaw/pull/180932) chore(ui): refresh control ui locales
- [#180926](https://github.com/openclaw/openclaw/pull/180926) docs: preserve actionable catalog retry feedback
- [#180853](https://github.com/openclaw/openclaw/pull/180853) fix: unblock sessions with stale restart recovery sources
- [#180844](https://github.com/openclaw/openclaw/pull/180844) feat(plugins): keep requester command schedules across Gateway restarts
- [#180335](https://github.com/openclaw/openclaw/pull/180335) fix(ui): announce when a chat video cannot play
- [#180906](https://github.com/openclaw/openclaw/pull/180906) refactor: remove unused private runtime options
- [#180886](https://github.com/openclaw/openclaw/pull/180886) perf(ui): defer chat header menu contents
- [#180663](https://github.com/openclaw/openclaw/pull/180663) fix(secrets): retain retry guidance when secure input is unavailable
- [#180893](https://github.com/openclaw/openclaw/pull/180893) fix: hide native Claude interrupt markers from chat history
- [#180873](https://github.com/openclaw/openclaw/pull/180873) refactor: keep single-consumer details with their feature owners
- [#177825](https://github.com/openclaw/openclaw/pull/177825) fix(cron): scheduled script tool calls fail after a hook plugin is replaced
- [#180673](https://github.com/openclaw/openclaw/pull/180673) chore(release): close out 2026.10.6 on main
- [#180849](https://github.com/openclaw/openclaw/pull/180849) chore: remove the unused Slack QA runner fixture
- [#180888](https://github.com/openclaw/openclaw/pull/180888) refactor(core): retire unused private helper inputs
- [#180168](https://github.com/openclaw/openclaw/pull/180168) fix(feishu): oversized JSON body tests flake when CI runs them under Bun
- [#173750](https://github.com/openclaw/openclaw/pull/173750) fix(vercel): keep Token Pass keys usable after model-scope errors
- [#180875](https://github.com/openclaw/openclaw/pull/180875) perf(cron): reuse the selected diagnostic partition and startup refresh
- [#152565](https://github.com/openclaw/openclaw/pull/152565) fix(config): keep last-known-good when the observer flags the config as truncated
- [#180838](https://github.com/openclaw/openclaw/pull/180838) fix(vercel): list models with the configured API key
- [#180786](https://github.com/openclaw/openclaw/pull/180786) refactor: consolidate one-consumer internal surfaces
- [#180742](https://github.com/openclaw/openclaw/pull/180742) fix(ui): show recoverable lazy renderer errors
- [#180841](https://github.com/openclaw/openclaw/pull/180841) fix: shutdown waits on optional worker reconciliation
- [#180876](https://github.com/openclaw/openclaw/pull/180876) fix(synology-chat): resolve its unused-type CI failure
- [#180630](https://github.com/openclaw/openclaw/pull/180630) refactor(ui): observe question resource operation errors
- [#180606](https://github.com/openclaw/openclaw/pull/180606) fix(ui): remove unused file preview type export
- [#180600](https://github.com/openclaw/openclaw/pull/180600) fix(doctor): explain which bootstrap text reaches the model
- [#180596](https://github.com/openclaw/openclaw/pull/180596) refactor(runtime): remove unused private results and inputs
- [#180591](https://github.com/openclaw/openclaw/pull/180591) refactor(ui): present runtime reads and raw commands with Solid
- [#180593](https://github.com/openclaw/openclaw/pull/180593) refactor(ui): present native locale edits optimistically
- [#180590](https://github.com/openclaw/openclaw/pull/180590) refactor(ui): present agent identity writes with Solid actions
- [#180589](https://github.com/openclaw/openclaw/pull/180589) refactor(ui): present session roster readiness with Solid
- [#180541](https://github.com/openclaw/openclaw/pull/180541) fix(node): preserve other profiles’ legacy Gateway services
- [#180706](https://github.com/openclaw/openclaw/pull/180706) refactor(agents): narrow private runtime inputs and results
- [#180700](https://github.com/openclaw/openclaw/pull/180700) refactor(plugins): narrow private inputs and results
- [#177584](https://github.com/openclaw/openclaw/pull/177584) fix: PowerShell completion loses context after quoted subcommands
- [#176332](https://github.com/openclaw/openclaw/pull/176332) fix(oc-path): match quoted union keys containing commas
- [#180846](https://github.com/openclaw/openclaw/pull/180846) fix: view_image refuses host images that read can open
- [#168668](https://github.com/openclaw/openclaw/pull/168668) fix(ui): MCP Tool access stays empty after a run until reload
- [#180848](https://github.com/openclaw/openclaw/pull/180848) fix(scripts): PR wrapper leaks materialized trust-anchor dirs in TMPDIR on failures and interrupts

#### 🐛 New Issues
- [#181101](https://github.com/openclaw/openclaw/issues/181101) [Bug]: Linux non-ASCII mount points are decoded as the wrong path `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `clawsweeper:not-repro-on-main` 💬5
- [#180690](https://github.com/openclaw/openclaw/issues/180690) doctor --fix on an ~800-agent state: heap OOM at 6 GB in the contributions phase; three passes and ~110 minutes from v28 to v31 `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬4
- [#180196](https://github.com/openclaw/openclaw/issues/180196) [Bug]: Control UI session status badge is unreachable by keyboard and unnamed for screen readers `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬4
- [#180490](https://github.com/openclaw/openclaw/issues/180490) Chat hides agent narration in the Worked… fold once a run finishes (native and web) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬3
- [#180941](https://github.com/openclaw/openclaw/issues/180941) [Bug]: Agents repeatedly call sessions_yield after nothing_pending instead of discovering task tools (multiple models/releases) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬3
- [#181032](https://github.com/openclaw/openclaw/issues/181032) [Bug]: server class machines, no avx `bug` `bug:crash` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬2
- [#181084](https://github.com/openclaw/openclaw/issues/181084) Very large main session (35k events / 228 MB) causes multi-second SQLite snapshot reads; sessions compact fails with "admission is closed", also right after a gateway restart `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬2
- [#181078](https://github.com/openclaw/openclaw/issues/181078) [Bug]: 2026.10.5: agent turns intermittently fail after the model reply with "Canonical session reader continuation is no longer current" `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬2
- [#180969](https://github.com/openclaw/openclaw/issues/180969) [Bug]: Windows built-plugin singleton smoke fails cleanup after successful assertions `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#180903](https://github.com/openclaw/openclaw/issues/180903) [Bug]: Node-gated update leaves plugin peer-links at the old install root; the degraded gateway's state ownership then blocks openclaw update repair `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬2
- [#180892](https://github.com/openclaw/openclaw/issues/180892) [Bug]: Windows Doctor rejects native capture for DELETE-self permission on a volume-root ancestor `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬2
- [#180907](https://github.com/openclaw/openclaw/issues/180907) [Bug]: iOS native Talk passes chat.send timeoutMs 30000, capping every Talk agent turn at 30 s `P1` `maturity:stable` `impact:ux-friction` 💬2
- [#180802](https://github.com/openclaw/openclaw/issues/180802) [Bug]: Restart recovery ownership mismatch wedges main session — every message fails with "Restart recovery failed" until sessions.reset `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬2
- [#180904](https://github.com/openclaw/openclaw/issues/180904) [Bug]: doctor deadlocks when an agent database migration refuses (FTS5 corruption) - no FTS repair path, refusal message points at doctor itself `P1` `impact:session-state` `maturity:stable` 💬2
- [#180815](https://github.com/openclaw/openclaw/issues/180815) [Bug]: Control UI chat: keyboard users must Tab through every transcript control before reaching the composer `bug` `no-stale` `bug:behavior` `P2` 💬2
- [#180898](https://github.com/openclaw/openclaw/issues/180898) Gateway heap: full session-store copies retained per turn via AsyncLocalStorage (60% of heap after 1 day, 8.35 → still in 10.6) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬2
- [#180626](https://github.com/openclaw/openclaw/issues/180626) Update failure: preflight-node-runtime (2026.10.5) `clawsweeper:intake:bug` `clawsweeper:intake:needs-repro` 💬2
- [#180845](https://github.com/openclaw/openclaw/issues/180845) [Bug]: xAI realtime transcription drops locked chunk-final text from dictation preview (Control UI) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#181152](https://github.com/openclaw/openclaw/issues/181152) [Bug]: "runtime owner was not published" is retried indefinitely — typing indicator sticks and the turn is lost `clawsweeper:intake:bug` `clawsweeper:intake:needs-repro` 💬1
- [#181148](https://github.com/openclaw/openclaw/issues/181148) [Feature]: Let the system agent read usage cost `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#180795](https://github.com/openclaw/openclaw/issues/180795) [Bug]: Doctor retired-runtime import commits replacement characters from malformed UTF-8 legacy sources `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#180782](https://github.com/openclaw/openclaw/issues/180782) Doctor restores replacement characters into workspace skill files from malformed legacy Skill Workshop rollbacks `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#180134](https://github.com/openclaw/openclaw/issues/180134) [Bug]: Control UI: composer shows no keyboard focus in forced-colors (high contrast) mode `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#181136](https://github.com/openclaw/openclaw/issues/181136) Update failure: package-install-omit-optional (2026.10.4) `P2` `impact:ux-friction` 💬1
- [#181115](https://github.com/openclaw/openclaw/issues/181115) [Bug]: bundled 1Password secret provider silently fails on group-writable installs (default Ubuntu umask 002) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#181125](https://github.com/openclaw/openclaw/issues/181125) Doctor media migration rewrites corrupt transcript archives with replacement characters `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#181120](https://github.com/openclaw/openclaw/issues/181120) [Bug]: macOS Gateway stops responding with main thread blocked closing a worker MessagePort `bug` `bug:crash` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#181116](https://github.com/openclaw/openclaw/issues/181116) Update failure: package-install-omit-optional (2026.10.5) `P2` `impact:ux-friction` 💬1
- [#181114](https://github.com/openclaw/openclaw/issues/181114) [Bug]: Windows Store: session-host.exe blocked by Code Integrity (3033/3077), CLI exit 4551 `bug` `bug:behavior` `P2` `impact:ux-friction` 💬1
- [#181111](https://github.com/openclaw/openclaw/issues/181111) [Bug]: zalouser never reports lastTransportActivityAt, so the core health monitor cannot detect a silently dead listener (18h inbound outage while reported running/connected) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#181110](https://github.com/openclaw/openclaw/issues/181110) [Bug]: doctor --fix deadlocks on legacy agents.defaults.heartbeat: plugin-migration settle rejects the invalid config before heartbeat retirement runs `P1` `clawsweeper:source-repro` `impact:crash-loop` `issue-rating: 🦞 diamond lobster` 💬1
- [#181107](https://github.com/openclaw/openclaw/issues/181107) 2026.10.6 (macOS): skills skipped with "resolved path escapes skill root" when the configured workspace path's case differs from the on-disk case `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#181106](https://github.com/openclaw/openclaw/issues/181106) 2026.10.6: plugin-registry hot reload force-retires npm plugins during a main-thread stall, then every later gateway close fails (PluginRuntimeCloseRetainedError) `P1` `clawsweeper:source-repro` `impact:crash-loop` `issue-rating: 🦞 diamond lobster` 💬1
- [#180863](https://github.com/openclaw/openclaw/issues/180863) [Feature]: DotHoosh model provider (OpenAI, Responses and Anthropic routes behind one key) `P3` `impact:ux-friction` 💬1
- [#180680](https://github.com/openclaw/openclaw/issues/180680) [Feature]: Add DeepSeek Fetch as an optional web_fetch fallback provider `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#181104](https://github.com/openclaw/openclaw/issues/181104) Feature: iMessage tapback/reaction events should be able to trigger agent turns `P3` `impact:ux-friction` 💬1
- [#181092](https://github.com/openclaw/openclaw/issues/181092) memory_search: session-visibility filter reloads full session store per call; times out under DB load and backoff fails all searches for 60 s `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#181100](https://github.com/openclaw/openclaw/issues/181100) docs(workboard): dependency promotion also moves backlog/triage children; document which statuses hold a dependent card `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#181090](https://github.com/openclaw/openclaw/issues/181090) [Bug]: startup blocks ~105 s in markGatewayStartupMainSessionOrphans and always fails (Windows, 2026.10.5) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#181094](https://github.com/openclaw/openclaw/issues/181094) Update failure: package-install-omit-optional (2026.9.9) `P2` `impact:ux-friction` 💬1
- [#181091](https://github.com/openclaw/openclaw/issues/181091) [Bug]: Feishu doctor reloads the whole session store with skipCache:true on every startup (main thread, ~85 s on a 1.26 GB store) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#181086](https://github.com/openclaw/openclaw/issues/181086) Google media understanding ignores providerOptions: no way to set Gemini thinking level for audio transcription `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#181070](https://github.com/openclaw/openclaw/issues/181070) [Bug]: Telegram captioned final TTS sends the full reply text twice (mergeDeferredFinalText concatenates streamed + final) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#181050](https://github.com/openclaw/openclaw/issues/181050) [Bug]: npm updates fail package-verify on UGREEN UGOS when dist files gain execute bits `bug` `clawsweeper:needs-live-repro` `P0` `issue-rating: 🐚 platinum hermit` 💬1
- [#181046](https://github.com/openclaw/openclaw/issues/181046) Codex active-thread rejection incorrectly triggers model fallback `P2` `clawsweeper:source-repro` `impact:auth-provider` `issue-rating: 🦞 diamond lobster` 💬1
- [#181037](https://github.com/openclaw/openclaw/issues/181037) [Bug]: Update to 2026.10.10-beta.3 left Telegram dispatch broken: codex appServer.command points at a deleted plugin generation `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#181027](https://github.com/openclaw/openclaw/issues/181027) Update failure: gateway-recovery-verification (2026.10.4) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#181020](https://github.com/openclaw/openclaw/issues/181020) [Bug]: 2026.10.5 → 2026.10.6 update reports failed after target becomes healthy; preserved service-setting warning obscures outcome `bug` `no-stale` `regression` `P2` 💬1
- [#181013](https://github.com/openclaw/openclaw/issues/181013) [Bug]: doctor heartbeat→Automations migration blocks on legacy heartbeat-main cron scratch; config stays invalid, gateway exits 78/CONFIG `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#180979](https://github.com/openclaw/openclaw/issues/180979) Update failure: package-install-omit-optional (2026.9.9) `P2` `impact:ux-friction` 💬1
- [#180978](https://github.com/openclaw/openclaw/issues/180978) Active Memory timeout circuit breaker never opens at chat pace: slow recall blocks every turn for the full budget `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#180971](https://github.com/openclaw/openclaw/issues/180971) [Feature]: Supported plugin fallback selection for an ordinary final reply without another model pass `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#180970](https://github.com/openclaw/openclaw/issues/180970) [Feature]: Supported request-scoped transport handoff for channel plugins `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#180960](https://github.com/openclaw/openclaw/issues/180960) [Bug]: Discord disposable cache migration omits recovery inventory declaration `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#180577](https://github.com/openclaw/openclaw/issues/180577) [Feature] Refresh the Appearance page title after a language switch `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#180943](https://github.com/openclaw/openclaw/issues/180943) Control UI image lightbox: zoom changes the label but not the image (Panzoom transform overwritten) `P2` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` `impact:ux-friction` 💬1
- [#180942](https://github.com/openclaw/openclaw/issues/180942) [Bug]: A single `invalid_auth` with a valid token permanently disables Slack Socket Mode (health monitor skips `terminal-disconnect`) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#180940](https://github.com/openclaw/openclaw/issues/180940) [Bug]: External Codex session browsing loses structured tool presentation `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#180927](https://github.com/openclaw/openclaw/issues/180927) WebChat shows the CLI assistant reply twice when block streaming is off `P2` `clawsweeper:needs-info` `issue-rating: 🦐 gold shrimp` `impact:ux-friction` 💬1
- [#180920](https://github.com/openclaw/openclaw/issues/180920) Chat history projection throws when a forwarded message has no cron-name resolver `P1` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬1
- [#180874](https://github.com/openclaw/openclaw/issues/180874) [Bug]: Background skill-review notice is delivered as an independent message and can displace the agent's reply `bug` `bug:behavior` `P2` `impact:ux-friction` 💬1
- [#180858](https://github.com/openclaw/openclaw/issues/180858) Codex GPT-Live WebRTC startup discards actionable provider error `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#180856](https://github.com/openclaw/openclaw/issues/180856) [Bug]: Billing error copy gets re-classified as rate_limit, so lastRunError says "needs a short break" `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#180833](https://github.com/openclaw/openclaw/issues/180833) [2026.10.6] heartbeat_respond loop persists: model keeps calling it after it is accepted (follow-up to #86324) `P1` `clawsweeper:not-repro-on-main` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#180835](https://github.com/openclaw/openclaw/issues/180835) Update failure: node-runtime-preflight (2026.9.5) `P2` `impact:ux-friction` 💬1
- [#180814](https://github.com/openclaw/openclaw/issues/180814) [Bug]: Control UI chat: focusable transcript region (role="log") has no accessible name `bug` `no-stale` `bug:behavior` `P2` 💬1
- [#180799](https://github.com/openclaw/openclaw/issues/180799) [Feature]: Per-provider transport-level retry for model calls (router backends drop connections) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1

#### 🔒 Closed Issues
- [#7707](https://github.com/openclaw/openclaw/issues/7707) Feature Request: Memory Trust Tagging by Source
- [#68596](https://github.com/openclaw/openclaw/issues/68596) Feature Request: Configurable streaming watchdog timeout threshold
- [#11829](https://github.com/openclaw/openclaw/issues/11829) Security Roadmap: Protecting API Keys from Agent Access
- [#22438](https://github.com/openclaw/openclaw/issues/22438) feat: Tiered bootstrap file loading for progressive context control
- [#13583](https://github.com/openclaw/openclaw/issues/13583) [Feature] Pre-response enforcement hooks (hard gates) for mandatory tool-call / policy rules
- [#43367](https://github.com/openclaw/openclaw/issues/43367) Multi-agent orchestration is unstable: concurrent agents add/config overwrites, session-lock failures, and detached child work
- [#53763](https://github.com/openclaw/openclaw/issues/53763) [Feature]: Built-in headless browser for reliable web access without external dependencies
- [#53628](https://github.com/openclaw/openclaw/issues/53628) [Bug]: ${XDG_CONFIG_HOME} is not process when installing a skill
- [#18677](https://github.com/openclaw/openclaw/issues/18677) Feature Proposal: Security Scan Hook API for skill:install
- [#51429](https://github.com/openclaw/openclaw/issues/51429) [Bug]: 看起来有人把工作路径hardcode进代码里而且居然被合并发布了
- [#41744](https://github.com/openclaw/openclaw/issues/41744) Feishu: read image tool result loses media before final outbound payload
- [#6599](https://github.com/openclaw/openclaw/issues/6599) Feature: Add /models test-fallback command to verify fallback chain
- [#13597](https://github.com/openclaw/openclaw/issues/13597) Add comprehensive AWS deployment guide (EC2, ECS, Lambda)
- [#41165](https://github.com/openclaw/openclaw/issues/41165) [Bug]: Telegram DMs can still land in agent:main:main, polluting heartbeat/main session after #40519
- [#53783](https://github.com/openclaw/openclaw/issues/53783) [Bug]: Telegram group: cross-agent sessions_list visibility mismatch causes one-way sessions_send failure
- [#35203](https://github.com/openclaw/openclaw/issues/35203) [RFC] Multi-Agent Collaboration Enhancement: Capability Profiling + Shared Blackboard + Layered Memory + Token Cost Governance
- [#45494](https://github.com/openclaw/openclaw/issues/45494) [Bug]: Cron agent jobs silently time out during sustained LLM API outages instead of fast-failing on definitive errors
- [#8719](https://github.com/openclaw/openclaw/issues/8719) [Feature] OpenClaw Security Profile v1.1 (Data-centric, secure-by-default)
- [#60572](https://github.com/openclaw/openclaw/issues/60572) Multi-Slot Memory Architecture
- [#43996](https://github.com/openclaw/openclaw/issues/43996) [Bug]: Sandbox container exits immediately when no-new-privileges is applied (exec /usr/bin/sleep: operation not permitted)
- [#53540](https://github.com/openclaw/openclaw/issues/53540) [Bug]: Embedded runner "Network connection lost" when LLM generates a tool call with large parameters (param generation latency > underlying request timeout)
- [#51572](https://github.com/openclaw/openclaw/issues/51572) Feature: fire session-memory hook on session reset/prune, not just compaction
- [#63930](https://github.com/openclaw/openclaw/issues/63930) [Feature] Support Anthropic advisor tool (beta server-side tool)
- [#66252](https://github.com/openclaw/openclaw/issues/66252) [Feature]: Per-Agent TTS/STT Configuration Overrides for Multi-Language Support
- [#41366](https://github.com/openclaw/openclaw/issues/41366) Feature: durable natural-language rule learning + explicit multi-mention reply semantics
- [#51396](https://github.com/openclaw/openclaw/issues/51396) [Bug]: clearUnboundScopes strips operator scopes unconditionally for non-local token-auth clients
- [#44502](https://github.com/openclaw/openclaw/issues/44502) [Bug]: Discord routing / mention-gating issue in OpenClaw
- [#56692](https://github.com/openclaw/openclaw/issues/56692) Group chat context handling can blur which messages are addressed to the current agent
- [#53548](https://github.com/openclaw/openclaw/issues/53548) Decouple mode="session" from thread binding requirement
- [#46058](https://github.com/openclaw/openclaw/issues/46058) Exploring a chat-first Android surface for OpenClaw (discussion + possible focused upstreaming)
- [#7227](https://github.com/openclaw/openclaw/issues/7227) [Security] Accessibility permissions requested for 'node' exposes all npm packages to GUI automation
- [#47677](https://github.com/openclaw/openclaw/issues/47677) Feature request: first-class Telegram reaction triggers for agent wake-up and execution
- [#53008](https://github.com/openclaw/openclaw/issues/53008) Memory compaction blocks main processing lane, causing unresponsive bot for 10+ minutes
- [#12855](https://github.com/openclaw/openclaw/issues/12855) [Feature]: Built-in auto-update with configurable schedule, confirmation, and post-update notification
- [#13616](https://github.com/openclaw/openclaw/issues/13616) Add backup/restore utility for config, cron jobs, and session history
- [#15032](https://github.com/openclaw/openclaw/issues/15032) Feature: Per-spawn tool restrictions for sub-agents
- [#33975](https://github.com/openclaw/openclaw/issues/33975) [Feature]: Fallback approval mode + model attribution in messages
- [#45184](https://github.com/openclaw/openclaw/issues/45184) [Feature]: Skip dispatch when message mentions a different account's bot
- [#47273](https://github.com/openclaw/openclaw/issues/47273) [Bug]: Memory detection skips macOS (darwin) — os.freemem() / os.totalmem() never reported to agent on non-Linux platforms
- [#20935](https://github.com/openclaw/openclaw/issues/20935) [Feature]: Audit log for agent memory changes
- [#44395](https://github.com/openclaw/openclaw/issues/44395) feat: heading-aware chunking + entity extraction for memory search
- [#52238](https://github.com/openclaw/openclaw/issues/52238) 飞书话题群(Topic Group)被识别为p2p导致消息路由错误
- [#56693](https://github.com/openclaw/openclaw/issues/56693) OpenAI Codex OAuth can bind to a deactivated ChatGPT workspace when accounts have multiple workspaces
- [#6890](https://github.com/openclaw/openclaw/issues/6890) [Feature]: Add Ralph Loop feature and add max iteration number into the agent configuration
- [#65438](https://github.com/openclaw/openclaw/issues/65438) Feature: configurable bootstrap file injection order for prompt cache optimization
- [#49931](https://github.com/openclaw/openclaw/issues/49931) feat(exec): configurable shell override (tools.exec.shell)
- [#51336](https://github.com/openclaw/openclaw/issues/51336) Feature Request: Surface API provider name in error/overload messages
- [#40694](https://github.com/openclaw/openclaw/issues/40694) Browser-opened temporary tabs/windows should close automatically after task completion
- [#42631](https://github.com/openclaw/openclaw/issues/42631) [Feature]: Allow job-level model override for cron jobs using sessionTarget=main + payload.kind=systemEvent
- [#43794](https://github.com/openclaw/openclaw/issues/43794) [Feature Request] Add config encryption for credentials at rest
- [#44291](https://github.com/openclaw/openclaw/issues/44291) Add native PowerShell smoke coverage for contributor commands
- [#49223](https://github.com/openclaw/openclaw/issues/49223) WhatsApp inter_session delivery requests can be wrongly suppressed as REPLY_SKIP / ANNOUNCE_SKIP / NO_REPLY
- [#13364](https://github.com/openclaw/openclaw/issues/13364) [Feature]: Expose before_tool_call/after_tool_call in internal hooks system
- [#9409](https://github.com/openclaw/openclaw/issues/9409) Improve context overflow error message with specifics
- [#16555](https://github.com/openclaw/openclaw/issues/16555) [Feature]: Add TTL/Expiry for Delivery Queue Messages
- [#40880](https://github.com/openclaw/openclaw/issues/40880) [Bug]: tools/sandbox: MEDIA_MAX_BYTES (5 MB) is hardcoded and not user-configurable
- [#47167](https://github.com/openclaw/openclaw/issues/47167) Skipped group messages behind requireMention do not reach message hooks, which blocks full-history archive plugins
- [#64267](https://github.com/openclaw/openclaw/issues/64267) Bug: OpenClaw 2026.4.9 exposes agent internal thinking (English) to user
- [#48918](https://github.com/openclaw/openclaw/issues/48918) Feature Request: User-Level Skill Preferences/Conventions Support
- [#58776](https://github.com/openclaw/openclaw/issues/58776) Sub-agent startup silence: no first-progress signal, aborted runs appear as hangs
- [#42539](https://github.com/openclaw/openclaw/issues/42539) Feature: TTS delivery mode option — separate text + voice messages on Telegram
- [#7540](https://github.com/openclaw/openclaw/issues/7540) Feature: Subscribe to WhatsApp call events (Baileys)
- [#13543](https://github.com/openclaw/openclaw/issues/13543) Feature: Tool-level sandbox mode for selective isolation
- [#42373](https://github.com/openclaw/openclaw/issues/42373) Feature: Add costCurrency config option to customize cost display currency
- [#50481](https://github.com/openclaw/openclaw/issues/50481) Slack: support assistant.threads.setSuggestedPrompts for dynamic prompt suggestions
- [#68478](https://github.com/openclaw/openclaw/issues/68478) Auto system messages spam the chat (e.g. '💾 Cron job created', '💾 Skill installed')
- [#45854](https://github.com/openclaw/openclaw/issues/45854) [Feature]: Android Node Tools & Session Enhancement
- [#47320](https://github.com/openclaw/openclaw/issues/47320) Feature Request: recursive subagent listing (--depth / --recursive)
- [#59168](https://github.com/openclaw/openclaw/issues/59168) feat(models): use provider/name as internal key to decouple from API model ID
- [#67440](https://github.com/openclaw/openclaw/issues/67440) [Feature][Security]: Add optional TOTP (authenticator app code) to exec approvals
- [#26926](https://github.com/openclaw/openclaw/issues/26926) [Feature]: Synology chat attachment support
- [#39305](https://github.com/openclaw/openclaw/issues/39305) Feature request: Escalating stall recovery for sub-agents (nudge → kill)
- [#41120](https://github.com/openclaw/openclaw/issues/41120) Browser-heavy sessions block all main lanes — need dedicated browser lane or per-channel lane routing
- [#42276](https://github.com/openclaw/openclaw/issues/42276) Reasoning stream
- [#45475](https://github.com/openclaw/openclaw/issues/45475) Feature: channels.slack.ignoreSubtypes config key to suppress message_changed / message_deleted events
- [#50530](https://github.com/openclaw/openclaw/issues/50530) Telegram: collapse mid-paragraph newlines before sending
- [#14619](https://github.com/openclaw/openclaw/issues/14619) [Feature]: Option to skip tool list text in system prompt (reduce duplication)
- [#38626](https://github.com/openclaw/openclaw/issues/38626) Subagent lifecycle observability + async supervision controls
- [#42986](https://github.com/openclaw/openclaw/issues/42986) [Feature Request] Telegram Channel: Support Thread Binding for Subagent Sessions
- [#53390](https://github.com/openclaw/openclaw/issues/53390) [BUG]: Browser tool: `snapshot` returns page content before scroll, ignoring viewport position
- [#56880](https://github.com/openclaw/openclaw/issues/56880) Concurrent message handling per session (async agent turns)
- [#61009](https://github.com/openclaw/openclaw/issues/61009) [Bug]: docs/tools/exec says host=node override is allowed from auto, but runtime rejects it
- [#7476](https://github.com/openclaw/openclaw/issues/7476) Feature Request: WhatsApp sticker send support
- [#50287](https://github.com/openclaw/openclaw/issues/50287) Next Sprint B: model-input validation guardrails
- [#64086](https://github.com/openclaw/openclaw/issues/64086) feat: Plugin API for TUI footer status contributions (registerStatusProvider)
- [#8355](https://github.com/openclaw/openclaw/issues/8355) Feature: Streaming TTS pipeline for voice calls (sentence-level LLM→TTS→audio)
- [#40768](https://github.com/openclaw/openclaw/issues/40768) Feishu: @mention not recognized in group when multiple bots share the same group (open_id app-scoped mismatch)
- [#41860](https://github.com/openclaw/openclaw/issues/41860) [Bug]: When openclaw sends a link with an underscore to Feishu, the full hyperlink cannot be displayed
- [#6625](https://github.com/openclaw/openclaw/issues/6625) Feature: Graceful sub-agent timeout (pre-timeout warning)
- [#7338](https://github.com/openclaw/openclaw/issues/7338) [Feature]: Agent Attestation Headers
- [#14344](https://github.com/openclaw/openclaw/issues/14344) Feature request: message delete (revoke) action for WhatsApp channel
- [#26250](https://github.com/openclaw/openclaw/issues/26250) SSH transport security check rejects connection before tunnel is established
- [#37584](https://github.com/openclaw/openclaw/issues/37584) feat: per-agent tool settings (e.g. tools.web.search.apiKey)
- [#55249](https://github.com/openclaw/openclaw/issues/55249) Feature: Session labels / nicknames for easier identification
- [#9835](https://github.com/openclaw/openclaw/issues/9835) Feature: Telegram Reactions - Two-Way Support with Prompt Guidance
- [#12219](https://github.com/openclaw/openclaw/issues/12219) [Feature]: Skill Permission Manifest Standard (skill.yaml)
- [#14376](https://github.com/openclaw/openclaw/issues/14376) Feature: Reason-aware cron guardrails (quota/auth/rate-limit aware backoff + circuit breaker)
- [#51184](https://github.com/openclaw/openclaw/issues/51184) Feature: Surface cron job name / session label in /status and statusline
- [#56227](https://github.com/openclaw/openclaw/issues/56227) Gateway restart failure should keep previous instance running to avoid total disconnect
- [#168356](https://github.com/openclaw/openclaw/issues/168356) [Bug]: provider model discovery uses a fixed ~5s guarded-fetch budget and ignores models.providers.<id>.timeoutSeconds
- [#13620](https://github.com/openclaw/openclaw/issues/13620) Feature: Support Telegram media groups (albums) in message tool
- [#48117](https://github.com/openclaw/openclaw/issues/48117) [Bug]: npm error code UNABLE_TO_VERIFT_LEAF_SIGNATURE
- [#8176](https://github.com/openclaw/openclaw/issues/8176) Allow before_agent_start hooks to override prompt
- [#14526](https://github.com/openclaw/openclaw/issues/14526) Proposal: safer self-update with pre-update backup + health check + auto-rollback/restore
- [#15634](https://github.com/openclaw/openclaw/issues/15634) [Feature]: Mattermost — Parity improvements (formatting, reactions, rich interactions)
- [#23353](https://github.com/openclaw/openclaw/issues/23353) [Feature]: Support Anthropic native server-side tools (web_search, web_fetch, code_execution)
- [#42952](https://github.com/openclaw/openclaw/issues/42952) ignoreFileContent setting not working - file content still sent to model as context
- [#48486](https://github.com/openclaw/openclaw/issues/48486) [Security] web-fetch-visibility: near-invisible CSS patterns not covered by sanitizer
- [#51620](https://github.com/openclaw/openclaw/issues/51620) Gateway restart drops queued and in-flight inbound messages
- [#57225](https://github.com/openclaw/openclaw/issues/57225) [Bug]: Discord multi-segment responses arrive out of order when interleaved with tool calls
- [#12678](https://github.com/openclaw/openclaw/issues/12678) [Feature]: Capability-based permissions for skills/tools (default-deny high-risk actions)
- [#23451](https://github.com/openclaw/openclaw/issues/23451) [Feature]: Tool-level confirmation gate before execution
- [#39739](https://github.com/openclaw/openclaw/issues/39739) gateway.controlUi.allowedOrigins: support scheme-level wildcards (e.g. chrome-extension://*)
- [#50274](https://github.com/openclaw/openclaw/issues/50274) Follow-up: optimize fallback order + add model-input config guardrail
- [#50611](https://github.com/openclaw/openclaw/issues/50611) memory flush never triggers when reserveTokensFloor equals contextWindow
- [#13676](https://github.com/openclaw/openclaw/issues/13676) Feature Request: First-class Projects in Gateway Dashboard (workspace + skill scoping + runtime constraints)
- [#41824](https://github.com/openclaw/openclaw/issues/41824) Agent confabulates completed actions on Telegram surface — same config works reliably on Claude Code/Codex
- [#46548](https://github.com/openclaw/openclaw/issues/46548) Tool error messages surfaced to chat should include failure reason and retry confirmation
- [#48532](https://github.com/openclaw/openclaw/issues/48532) Security by Intent: Progressive Permission Pattern Generalization to Eliminate Privilege Escalation and Approval Fatigue
- [#50677](https://github.com/openclaw/openclaw/issues/50677) Skills silently truncated - user-created skills invisible with no warning or prioritization
- [#62615](https://github.com/openclaw/openclaw/issues/62615) [Feature]: Add gateway-side circuit breaker for unhealthy sessions after consecutive failures
- [#8724](https://github.com/openclaw/openclaw/issues/8724) Feature: Add per-model generation timeout config
- [#14747](https://github.com/openclaw/openclaw/issues/14747) Feature request: configurable lane wait diagnostic threshold
- [#33478](https://github.com/openclaw/openclaw/issues/33478) [Feature]: Structured Callback Actions and Thread Context Inheritance for Agent Handoffs
- [#39913](https://github.com/openclaw/openclaw/issues/39913) feat: apply messages.responsePrefix to message tool outbound sends
- [#43797](https://github.com/openclaw/openclaw/issues/43797) [Bug]: Sandbox prune does not clean up workspace directory
- [#49251](https://github.com/openclaw/openclaw/issues/49251) [Feature] Queue prompts when API limits prevent an immediate response
- [#59526](https://github.com/openclaw/openclaw/issues/59526) Feature: allow account switching from /models buttons for GPT and Claude
- [#65774](https://github.com/openclaw/openclaw/issues/65774) Crons ejecutaron mensajes de WhatsApp a la 1 AM fuera de horario y no se podían detener
- [#9820](https://github.com/openclaw/openclaw/issues/9820) feat: add jsonl support to memory indexer
- [#13911](https://github.com/openclaw/openclaw/issues/13911) Feature: per-channel announce suppression for sub-agents
- [#41444](https://github.com/openclaw/openclaw/issues/41444) OAuth 401 regression: oauth-2025-04-20 beta not injected when context1m set via model headers
- [#41966](https://github.com/openclaw/openclaw/issues/41966) MEDIA: tokens inside markdown code fences are silently ignored
- [#45179](https://github.com/openclaw/openclaw/issues/45179) Feature: temp artifact provenance + durable-path guardrails to prevent /tmp chaos
- [#45839](https://github.com/openclaw/openclaw/issues/45839) [Feature Request] Telegram inline buttons for pairing approve/deny
- [#46701](https://github.com/openclaw/openclaw/issues/46701) Telegram: Auto-reply to unauthorized group senders with admin contact instructions
- [#181101](https://github.com/openclaw/openclaw/issues/181101) [Bug]: Linux non-ASCII mount points are decoded as the wrong path
- [#53023](https://github.com/openclaw/openclaw/issues/53023) Feature Request: Configurable Session Lane Concurrency + Auto-Yield
- [#7359](https://github.com/openclaw/openclaw/issues/7359) [Slack] Agent lacks visibility into own channel messages from DM sessions
- [#7909](https://github.com/openclaw/openclaw/issues/7909) [Feature]: Add plain text copy option
- [#37816](https://github.com/openclaw/openclaw/issues/37816) [Feature]: Telegram — full agent activity visibility (Web UI parity)
- [#40948](https://github.com/openclaw/openclaw/issues/40948) UI/TUI: session-recap block leaks into visible user message rendering
- [#61673](https://github.com/openclaw/openclaw/issues/61673) [Feature]: Pre-container-creation hook for dynamic sandbox bind mounts
- [#63107](https://github.com/openclaw/openclaw/issues/63107) cron: systemEvent on main session silently ignores shell commands in payload text
- [#63589](https://github.com/openclaw/openclaw/issues/63589) Include participant identity and quoted reply context in gateway inbound log
- [#13225](https://github.com/openclaw/openclaw/issues/13225) Feature Request: Pre-tool-call routing hook for model delegation
- [#37842](https://github.com/openclaw/openclaw/issues/37842) Feature: Graph-aware loop detection for sessions_send (triangular/polygonal cascades bypass maxPingPongTurns)
- [#49889](https://github.com/openclaw/openclaw/issues/49889) [Bug]: Telegram partial-stream finalization lacks clear delivery-mode observability (sent vs preview-finalized vs canceled)
- [#50205](https://github.com/openclaw/openclaw/issues/50205) [Feature]: Support configurable request labels for Gemini API calls (GCP billing tracking)
- [#52803](https://github.com/openclaw/openclaw/issues/52803) [Feature]: Improve Control UI for Multi-Agent + Subagent Orchestration (Hierarchy, Bulk Ops, and Scalability)
- [#53274](https://github.com/openclaw/openclaw/issues/53274) Device identity generation should not depend on browser Secure Context — breaks HTTP reverse-proxy deployments
- [#11955](https://github.com/openclaw/openclaw/issues/11955) [Feature]: Memory/Context Improvements (metrics + global semantic search + conversation chaining + preload on restart)
- [#13593](https://github.com/openclaw/openclaw/issues/13593) Add logging and warnings for cron job execution failures
- [#20321](https://github.com/openclaw/openclaw/issues/20321) [Feature]: Allow telegram groups by creating allowList of users
- [#25493](https://github.com/openclaw/openclaw/issues/25493) [Feature]: Support to edit system prompt template
- [#39734](https://github.com/openclaw/openclaw/issues/39734) Feature: Support custom anthropic_beta flags in Bedrock model config
- [#43481](https://github.com/openclaw/openclaw/issues/43481) Cross-provider fallback should respect provider trust boundaries for images/attachments
- [#51287](https://github.com/openclaw/openclaw/issues/51287) [Feature]: Configurable Exec Approval timeout
- [#59235](https://github.com/openclaw/openclaw/issues/59235) [Bug]: notion skill docs use curl pattern that triggers allowlist miss
- [#66125](https://github.com/openclaw/openclaw/issues/66125) [Bug]: openai-completions fallback candidate is selected, but fallback does not complete successfully through an OpenAI-compatible proxy
- [#40194](https://github.com/openclaw/openclaw/issues/40194) [Feishu] 飞书群多机器人身份混乱问题
- [#42291](https://github.com/openclaw/openclaw/issues/42291) [Bug]: `openclaw models auth login` on node host writes OAuth token locally instead of syncing to gateway
- [#51660](https://github.com/openclaw/openclaw/issues/51660) [Feature]: Configurable umask / file permissions for agent-created user-facing files
- [#54416](https://github.com/openclaw/openclaw/issues/54416) [Bug] Agent automatically executes config commands from example code without user confirmation
- [#55686](https://github.com/openclaw/openclaw/issues/55686) [Feature Request] Make command options clickable buttons in Feishu (e.g., /reasoning)
- [#59245](https://github.com/openclaw/openclaw/issues/59245) [Feature]: Outbound Task Calls — Agent makes phone calls on user's behalf (reservations, inquiries, flight changes)
- [#66138](https://github.com/openclaw/openclaw/issues/66138) [Feature]: Make OpenClaw Feel Like WordPress: A UX Revolution for Effortless Configuration
- [#9764](https://github.com/openclaw/openclaw/issues/9764) Google Chat: Add user OAuth support for reactions and media uploads
- [#9993](https://github.com/openclaw/openclaw/issues/9993) Feature Request: config:pre-apply hook for validating config changes
- [#43005](https://github.com/openclaw/openclaw/issues/43005) Enhancement: Allow custom safe headers in fetch-guard cross-origin redirects
- [#47070](https://github.com/openclaw/openclaw/issues/47070) Attach input provenance to sessions_spawn child tasks
- [#56597](https://github.com/openclaw/openclaw/issues/56597) [Bug]: Discord sessions persist per-session exec directives, causing allowlist mode to behave unexpectedly after config changes
- [#56994](https://github.com/openclaw/openclaw/issues/56994) fix: use atomic writes for crash-safety on exec approvals, restart sentinel, shell profile, and saveJsonFile
- [#58887](https://github.com/openclaw/openclaw/issues/58887) feat(typing): show typing indicator immediately on voice message receipt, before STT transcription
- [#37487](https://github.com/openclaw/openclaw/issues/37487) [Feature]: Feature request: Per-agent isolated browser instances with per-profile proxy support (concurrent execution)
- [#38716](https://github.com/openclaw/openclaw/issues/38716) feat(slack): Support Slack RTS (Real-Time Search) API via assistant action tokens
- [#42663](https://github.com/openclaw/openclaw/issues/42663) Feature: trustedWebhooks for Discord — allow specific webhooks to trigger agent responses
- [#43202](https://github.com/openclaw/openclaw/issues/43202) Feishu card action: pass through form_value, input_value and other fields
- [#46661](https://github.com/openclaw/openclaw/issues/46661) [Feature]: Support Custom ASR (Speech-to-Text) Server Configuration
- [#50289](https://github.com/openclaw/openclaw/issues/50289) [Bug]: Performance Issue: Large `ownerAllowFrom` Configuration Causes Severe Slowdown
- [#53941](https://github.com/openclaw/openclaw/issues/53941) docs: LiteLLM supply chain attack advisory (v1.82.7 / v1.82.8)
- [#55235](https://github.com/openclaw/openclaw/issues/55235) [Feature]: Generate and update openclaw.json JSON schema on bootstrap/update
- [#57031](https://github.com/openclaw/openclaw/issues/57031) fix: QueuedFileWriter silently swallows all write errors
- [#10142](https://github.com/openclaw/openclaw/issues/10142) Feature: session:end internal hook event
- [#13487](https://github.com/openclaw/openclaw/issues/13487) Discord routing: mention > reply-target > default owner (suppress default owner when targeted)
- [#38570](https://github.com/openclaw/openclaw/issues/38570) Inter-agent sessions_send: sender attributed as wrong agent (missing identity name)
- [#43231](https://github.com/openclaw/openclaw/issues/43231) Telegram forum: no reliable topic-name -> topic_id resolution for agent routing
- [#43935](https://github.com/openclaw/openclaw/issues/43935) Gateway: account-scoped channel config changes restart the entire channel and can disrupt active traffic
- [#51041](https://github.com/openclaw/openclaw/issues/51041) [Feature]: Expose Discord slash interaction response controls to plugin commands
- [#8913](https://github.com/openclaw/openclaw/issues/8913) [Feature] Configurable thinking/reasoning block format per channel
- [#10467](https://github.com/openclaw/openclaw/issues/10467) [Feature Request]: Multi-lane concurrency support for sub-agents via sessions_spawn
- [#11460](https://github.com/openclaw/openclaw/issues/11460) WhatsApp: Add support for querying message reactions
- [#20173](https://github.com/openclaw/openclaw/issues/20173) [Feature]: Discord: Re-process edited user messages (MESSAGE_UPDATE event)
- [#20934](https://github.com/openclaw/openclaw/issues/20934) [Feature]: REST endpoint for session management in HTTP API integrations
- [#45841](https://github.com/openclaw/openclaw/issues/45841) [Feature]: Sandboxing + ACP
- [#49599](https://github.com/openclaw/openclaw/issues/49599) [Feature]: Support custom HTTP headers on CLI WebSocket connections
- [#50185](https://github.com/openclaw/openclaw/issues/50185) Telegram: unquarantine skipped sticker e2e tests
- [#54518](https://github.com/openclaw/openclaw/issues/54518) [Bug]: Agents should not be able to access or modify files outside their own working space.
- [#6792](https://github.com/openclaw/openclaw/issues/6792) Feature: configPatch in plugin manifest — automatic config setup on install
- [#7379](https://github.com/openclaw/openclaw/issues/7379) Feature Request: Add premium request % to /usage footer
- [#15073](https://github.com/openclaw/openclaw/issues/15073) Feature Request: Per-agent context/workspace on model fallback
- [#18967](https://github.com/openclaw/openclaw/issues/18967) [Feature]: Parent-scoped sessions_send for sub-agents
- [#22774](https://github.com/openclaw/openclaw/issues/22774) [Feature]: Multi-role support in Chat UI for multi-agent workflows
- [#30452](https://github.com/openclaw/openclaw/issues/30452) [Feature]: Compaction: configurable model override + flush-then-reset mode
- [#54200](https://github.com/openclaw/openclaw/issues/54200) moltbot.json in ~/.openclaw/ silently dropped on upgrade to v2026.3.22+ causing blank UI and crash-loop
- [#56312](https://github.com/openclaw/openclaw/issues/56312) Telegram animation/GIF messages bypass inbound media download
- [#8969](https://github.com/openclaw/openclaw/issues/8969) Enhancement: Developer experience quick wins from code analysis
- [#13239](https://github.com/openclaw/openclaw/issues/13239) Proposal: Publish a provider compatibility matrix with deprecation policy
- [#17876](https://github.com/openclaw/openclaw/issues/17876) [Feature]:
- [#20950](https://github.com/openclaw/openclaw/issues/20950) [Feature]: cron jobs.d/ directory support (one file per job, for NixOS/GitOps declarative setups)
- [#37967](https://github.com/openclaw/openclaw/issues/37967) [Feature]: Feishu Group Chat SubAgents for User-Specific Skills and Memory
- [#55462](https://github.com/openclaw/openclaw/issues/55462) Telegram callback_query should include message_id
- [#60816](https://github.com/openclaw/openclaw/issues/60816) edit tool should classify concurrent identical edits as noop and distinguish them from both success and failure
- [#9656](https://github.com/openclaw/openclaw/issues/9656) Feature: Handle Signal message edits (editMessage envelope)
- [#10827](https://github.com/openclaw/openclaw/issues/10827) Skill supply-chain security: provenance tracking + permission manifests
- [#12505](https://github.com/openclaw/openclaw/issues/12505) [Feature Request] Unified Built-in Sandbox with Multi-Platform Support and Tiered Presets
- [#13670](https://github.com/openclaw/openclaw/issues/13670) Add Model and Token Usage Status Display to Control UI Topbar
- [#20460](https://github.com/openclaw/openclaw/issues/20460) [Feature]: Store configuration backup files in their own directory, with datetime name convention
- [#21207](https://github.com/openclaw/openclaw/issues/21207) [Feature]: Feature Request: Batch Tool Calls + Context Block Management + Plan Enforcement
- [#25883](https://github.com/openclaw/openclaw/issues/25883) [Feature]: Proposal - OpenClaw Horizontal Scaling
- [#35208](https://github.com/openclaw/openclaw/issues/35208) [Feature]: Owner Takeover / Human Handoff for DM Auto-Reply
- [#49190](https://github.com/openclaw/openclaw/issues/49190) [Feature]: Cron should distinguish execution success from delivery failure and show warning instead of error
- [#56502](https://github.com/openclaw/openclaw/issues/56502) [Feature]: support SecretRef for channel phone numbers as it's Personal Identifiable Information (PII)
- [#60035](https://github.com/openclaw/openclaw/issues/60035) [Feature]: Add Support for System/Custom HTTP & SOCKS Proxy Configuration in OpenClaw
- [#67129](https://github.com/openclaw/openclaw/issues/67129) [Feature]:
- [#7679](https://github.com/openclaw/openclaw/issues/7679) Telegram should default to allowlist mode with owner ID
- [#11040](https://github.com/openclaw/openclaw/issues/11040) Feature: First-class session/task chain tracking (parent/root/trace/depth)
- [#13304](https://github.com/openclaw/openclaw/issues/13304) [Feature]: Content-based agent routing in bindings
- [#14251](https://github.com/openclaw/openclaw/issues/14251) [Feature]: Improve gateway stop/uninstall to handle system-level LaunchDaemons
- [#17215](https://github.com/openclaw/openclaw/issues/17215) [Tooling]: Add pre/post-update compatibility scanner with risk report and smoke recommendations
- [#27526](https://github.com/openclaw/openclaw/issues/27526) [Feature]: [Feature Request] OpenClaw WebChat: Conversation Management & Multi-AI Collaboration
- [#29442](https://github.com/openclaw/openclaw/issues/29442) [Security/Architecture/Feature] Preventing Prompt Injection in Cron Jobs via Privilege Separation & Tagging
- [#49949](https://github.com/openclaw/openclaw/issues/49949) Feature Request: Add Anthropic native web search (web_search_20260209) as a search provider
- [#51377](https://github.com/openclaw/openclaw/issues/51377) [Feature]: Support Excel (.xlsx/.xls) and generic binary uploads in gateway / input_file
- [#57592](https://github.com/openclaw/openclaw/issues/57592) TUI: Support inline image display in iTerm2 / Kitty / Sixel terminals
- [#9155](https://github.com/openclaw/openclaw/issues/9155) Feature Request: cron.defaults.delivery config for default delivery target
- [#9797](https://github.com/openclaw/openclaw/issues/9797) [Feature]: `queue_status` tool for intelligent task dispatch
- [#11623](https://github.com/openclaw/openclaw/issues/11623) Feature: Floating agent bubbles (Clawi) for macOS
- [#12756](https://github.com/openclaw/openclaw/issues/12756) Feature: support message read action for Telegram
- [#24118](https://github.com/openclaw/openclaw/issues/24118) [Feature]: Add channels.signal.linkPreview config and pass-through to signal-cli JSON-RPC send
- [#53088](https://github.com/openclaw/openclaw/issues/53088) [Feature]: Control console session list should show full date
- [#57297](https://github.com/openclaw/openclaw/issues/57297) WebChat TTS: add explicit routing/playback logs and user-visible delivery status
- [#8812](https://github.com/openclaw/openclaw/issues/8812) [Feature Request] Auto-linkify URLs in tool output cards (Control UI & WebChat)
- [#12508](https://github.com/openclaw/openclaw/issues/12508) [Feature Request] Hook Chain Integrity Protection Against Message Tampering
- [#17447](https://github.com/openclaw/openclaw/issues/17447) [Bug]: Security audit: allow suppressing acknowledged findings + fix false positives
- [#19995](https://github.com/openclaw/openclaw/issues/19995) [Bug]: Upgrade to 2026.2.17 does not auto-migrate plugins.allow when extensions exist (security audit critical)
- [#30361](https://github.com/openclaw/openclaw/issues/30361) [Bug]: Security audit falsely reports “UFW not found” when ufw is installed in /usr/sbin but sbin not in PATH
- [#39568](https://github.com/openclaw/openclaw/issues/39568) Feishu: bot does not respond when @-mentioned in a reply message
- [#47826](https://github.com/openclaw/openclaw/issues/47826) Gateway should expose HTTP REST endpoints for common queries
- [#48855](https://github.com/openclaw/openclaw/issues/48855) [Feature]: Android Gateway Support
- [#49380](https://github.com/openclaw/openclaw/issues/49380) Plugin context engines cannot increment /status compaction count
- [#180196](https://github.com/openclaw/openclaw/issues/180196) [Bug]: Control UI session status badge is unreachable by keyboard and unnamed for screen readers
- [#50103](https://github.com/openclaw/openclaw/issues/50103) [Feature]: Add agents.defaults.systemPrompt for config-injectable rules
- [#53531](https://github.com/openclaw/openclaw/issues/53531) Compaction should use auth-profile rotation / failover within the same provider
- [#57408](https://github.com/openclaw/openclaw/issues/57408) [Bug]: project-local .env is ignored in 2026.3.28, OPENCLAW_CONFIG_PATH falls back to ~/.openclaw/openclaw.json
- [#68425](https://github.com/openclaw/openclaw/issues/68425) Redacted tool output should include a machine-readable marker so agents can detect redaction
- [#175794](https://github.com/openclaw/openclaw/issues/175794) [Bug]: Realtime Talk (gateway-relay) WebSocket bypasses managed proxy (proxy.proxyUrl) – "Realtime provider error" on egress-restricted hosts
- [#144679](https://github.com/openclaw/openclaw/issues/144679) [Design]: Make Connect a recognizable primary button in iOS Gateway setup
- [#29100](https://github.com/openclaw/openclaw/issues/29100) [Feature]: Cost metadata support for auto-discovered Amazon Bedrock models
- [#44025](https://github.com/openclaw/openclaw/issues/44025) [Feature]: Intelligent Model Fallback with Wildcard/Auto Selection
- [#50963](https://github.com/openclaw/openclaw/issues/50963) [Feature]: Subagent session reuse for expert agents (avoid new session per spawn)
- [#168627](https://github.com/openclaw/openclaw/issues/168627) Control UI: composer Tool access never refreshes after a run, so it keeps saying "MCP tools will appear here after the next agent run"
- [#11703](https://github.com/openclaw/openclaw/issues/11703) [Feature]: Batch WhatsApp messages by messageTimestamp instead of receive time
- [#12512](https://github.com/openclaw/openclaw/issues/12512) [Feature Request] SKILL.md Instruction Isolation from Agent Context
- [#17683](https://github.com/openclaw/openclaw/issues/17683) Feature Request: Scoped / Script-Limited Agent Mode (Cost-Controlled + Predictable Execution)
- [#18813](https://github.com/openclaw/openclaw/issues/18813) [Feature]: Add CI Checks to Enforce TLS Security Standards
- [#22770](https://github.com/openclaw/openclaw/issues/22770) [Feature]: Add $EDITOR compose mode in TUI (external editor handoff) for multiline prompts
- [#26772](https://github.com/openclaw/openclaw/issues/26772) [Feature]: Memory indexing lacks checkpoint/resume capability for long-running operations
- [#38931](https://github.com/openclaw/openclaw/issues/38931) [Feature]: SSRF 内网访问确认机制
- [#40009](https://github.com/openclaw/openclaw/issues/40009) [Feature Request]: Replace raw textarea with a structured JSON code editor (with folding support)
- [#43235](https://github.com/openclaw/openclaw/issues/43235) [Feature]:Support per-agent command lanes for multi-agent deployments
- [#53228](https://github.com/openclaw/openclaw/issues/53228) [Feature]: openclaw notify — admin-scoped push to connected UI sessions
- [#64383](https://github.com/openclaw/openclaw/issues/64383) [Feature]: Evaluate simplifying the sandbox browser CDP path
- [#8589](https://github.com/openclaw/openclaw/issues/8589) Security: Arbitrary file read within sandbox boundaries lacks content filtering
- [#8959](https://github.com/openclaw/openclaw/issues/8959) Feature: Cross-platform multi-select component in message tool
- [#11487](https://github.com/openclaw/openclaw/issues/11487) Add optional `name`/`label` field to group config entries
- [#12398](https://github.com/openclaw/openclaw/issues/12398) Feature: Postcondition checks for cron jobs (deterministic verification of agent outcomes)
- [#12517](https://github.com/openclaw/openclaw/issues/12517) [Security] Plugin Runtime: Lateral Movement via Shared Process Model
- [#13962](https://github.com/openclaw/openclaw/issues/13962) Feature: Per-mention model routing + context window for group mentions
- [#14407](https://github.com/openclaw/openclaw/issues/14407) [Feature]: Integrate password toggle functionality across all platforms to let users see password in clear text
- [#16711](https://github.com/openclaw/openclaw/issues/16711) [Feature]: Chat composer “Expand” button/modal (for long prompts)
- [#25401](https://github.com/openclaw/openclaw/issues/25401) [Feature]: models.providers.*.enabled flag to disable providers without removing config
- [#26859](https://github.com/openclaw/openclaw/issues/26859) security audit: two false positives for single-operator multi-agent setups
- [#29372](https://github.com/openclaw/openclaw/issues/29372) FEATURE: Per-agent subagents.workspace config
- [#34004](https://github.com/openclaw/openclaw/issues/34004) [Feature]: Discord self-profile updates (strict bot-only scope for nickname/avatar/status)
- [#40078](https://github.com/openclaw/openclaw/issues/40078) [Feature]: Silent preflight transcription in requireMention channels
- [#61716](https://github.com/openclaw/openclaw/issues/61716) [Feature]: Add model parameter prompts (context window, max_tokens, modalities) during OpenAI-compatible provider onboarding CLI flow
- [#64624](https://github.com/openclaw/openclaw/issues/64624) [Feature]: Suppress or throttle transient channel connection status system events
- [#66791](https://github.com/openclaw/openclaw/issues/66791) [Feature]: Discord event-edit and event-delete Support
- [#8635](https://github.com/openclaw/openclaw/issues/8635) Feature Request: Token Usage API for session_status Tool
- [#9876](https://github.com/openclaw/openclaw/issues/9876) [Feature]: Show session and requester context in macOS exec approval popup
- [#11489](https://github.com/openclaw/openclaw/issues/11489) [Feature Request] Group pairing flow: notify owner + read-only mode for unconfigured groups
- [#12441](https://github.com/openclaw/openclaw/issues/12441) [Feature] Control UI should accept gateway token from Authorization header
- [#13634](https://github.com/openclaw/openclaw/issues/13634) Feature: Slack workspace file injection + global systemPrompt (parity with Telegram)
- [#14051](https://github.com/openclaw/openclaw/issues/14051) Feature: Activity-based heartbeat with idle timeout
- [#17211](https://github.com/openclaw/openclaw/issues/17211) [Feature]: Add native checkpoint engine with deterministic resume and diff
- [#19289](https://github.com/openclaw/openclaw/issues/19289) Browser backend plugin interface (support third-party drivers via MCP/custom adapter)
- [#30518](https://github.com/openclaw/openclaw/issues/30518) [Feature]: pin/unpin message action for Telegram
- [#40088](https://github.com/openclaw/openclaw/issues/40088) memory_search: chokidar file watcher silently stops delivering events, index goes stale
- [#50253](https://github.com/openclaw/openclaw/issues/50253) [Feature]: bind lan not support ipv6
- [#53345](https://github.com/openclaw/openclaw/issues/53345) [Feature]: Add Korean (ko) language support to Control UI and AI agent
- [#63118](https://github.com/openclaw/openclaw/issues/63118) [Feature]: Missing Session Management Commands in OpenClaw
- [#7669](https://github.com/openclaw/openclaw/issues/7669) [Feature] Re-enable dev channel distribution tag for npm releases
- [#8190](https://github.com/openclaw/openclaw/issues/8190) Feature: Global session reset on auth switch
- [#11492](https://github.com/openclaw/openclaw/issues/11492) [Feature]: Allow agents to resolve Slack channel IDs to names via channel-info/channel-list
- [#14206](https://github.com/openclaw/openclaw/issues/14206) Add Message Rate Limiting for Feishu Channel
- [#15828](https://github.com/openclaw/openclaw/issues/15828) [Feature]: feat(session-memory): Add auto-trigger on idle, shutdown, and periodic checkpoints
- [#17213](https://github.com/openclaw/openclaw/issues/17213) [Reliability]: Enforce atomic intent→execution flow to prevent orphan pre-action notices
- [#48509](https://github.com/openclaw/openclaw/issues/48509) [Feature]: Add before_persistence_write hook for durable state changes
- [#54565](https://github.com/openclaw/openclaw/issues/54565) Feature request: per-group debounceMs for WhatsApp (and other channels)
- [#7234](https://github.com/openclaw/openclaw/issues/7234) Feature: Granular Discord action gates (split actions.messages into read/edit/delete)
- [#9120](https://github.com/openclaw/openclaw/issues/9120) Feature: Message continuation marker for batched input (cost savings)
- [#11517](https://github.com/openclaw/openclaw/issues/11517) Architecture: reduce import coupling in pi-embedded-runner/attempt.ts (50+ imports) and discord monitor (30 imports)
- [#13613](https://github.com/openclaw/openclaw/issues/13613) Add multi-gateway cron job coordination for HA deployments
- [#14629](https://github.com/openclaw/openclaw/issues/14629) Output sanitizer: improve duplicate detection for same-line and partial duplicates
- [#16351](https://github.com/openclaw/openclaw/issues/16351) [Feature]: Improve `openclaw config` to avoid secrets and invalid files
- [#19680](https://github.com/openclaw/openclaw/issues/19680) [Feature]: Proposal: Restructure VISION.md as a decision framework for humans and AI PR review
- [#20756](https://github.com/openclaw/openclaw/issues/20756) message tool should auto-select the only enabled account
- [#22021](https://github.com/openclaw/openclaw/issues/22021) [Feature]: Add X-Actual-Model header to expose runtime model in HTTP responses
- [#23926](https://github.com/openclaw/openclaw/issues/23926) [Feature]: skill:pre-install and skill:post-install Hook Events
- [#35835](https://github.com/openclaw/openclaw/issues/35835) [Feature]: Audio file support in read tool (multimodal parity with images)
- [#45519](https://github.com/openclaw/openclaw/issues/45519) [Feature]: Collapsible messages in Control UI chat
- [#54496](https://github.com/openclaw/openclaw/issues/54496) [Feature]: Silent reasoning — exclude thinking content from session transcript
- [#63188](https://github.com/openclaw/openclaw/issues/63188) [Feature]: Agent Runtime: Configurable stopReason="length" catch-and-continue for mode:"run" sessions
- [#67154](https://github.com/openclaw/openclaw/issues/67154) [Feature]: Separate runtime tracking from allowlist — write lastUsedAt/lastUsedCommand to exec-runtime.json instead of exec-approvals.jso
- [#68353](https://github.com/openclaw/openclaw/issues/68353) [Feature]: first-class per-message author attribution on chat.send for multi-user shared sessions
- [#7281](https://github.com/openclaw/openclaw/issues/7281) Feature: fallbackChannel for hook mappings when primary delivery fails
- [#10005](https://github.com/openclaw/openclaw/issues/10005) Add option to hide session status card
- [#12198](https://github.com/openclaw/openclaw/issues/12198) [Feature]: Markdown validation for prompt files
- [#12507](https://github.com/openclaw/openclaw/issues/12507) [Feature Request] Code Verification and Signature for Skills
- [#14317](https://github.com/openclaw/openclaw/issues/14317) Feature: Add 'private' groupPolicy option for Slack channels
- [#17217](https://github.com/openclaw/openclaw/issues/17217) [Feature]:
- [#18548](https://github.com/openclaw/openclaw/issues/18548) [Feature]: 3 architecture improvements — bootstrap relevance, incremental compaction, observation extraction
- [#26137](https://github.com/openclaw/openclaw/issues/26137) [Feature]: Integrate OpenSSF Best Practices & Tooling into OpenClaw
- [#29725](https://github.com/openclaw/openclaw/issues/29725) [Feature]: Set Discord Presence
- [#51872](https://github.com/openclaw/openclaw/issues/51872) [Feature]: bearer token authentication for proxy servers
- [#54504](https://github.com/openclaw/openclaw/issues/54504) [Feature]: Lightweight subagent instruction files (à la Claude Code .claude/agents/)
- [#62962](https://github.com/openclaw/openclaw/issues/62962) [Feature]: Tool security classification properties (isDestructive, isReadOnly, isConcurrencySafe)
- [#66672](https://github.com/openclaw/openclaw/issues/66672) [Feature]: Safe AI Workflow Modes: Ask, Plan, and Modify for Full Control & Transparency
- [#8495](https://github.com/openclaw/openclaw/issues/8495) Feature: Auto-leave WhatsApp groups not in allowlist + group-join webhook
- [#11676](https://github.com/openclaw/openclaw/issues/11676) [Feature]: Support running OpenClaw on devices without Linux / Node.js (inspired by MimiClaw)
- [#12208](https://github.com/openclaw/openclaw/issues/12208) All .large bubbles should have scrollable body regardless of truncation
- [#59560](https://github.com/openclaw/openclaw/issues/59560) [Feature]: WhatsApp: add per-contact messaging policy for inbound, outbound, and autonomous replies
- [#172817](https://github.com/openclaw/openclaw/issues/172817) Control UI: Settings → Appearance → UI → Prefs "Locale" is an unlabeled empty text box (should be the Language picker or hidden)
- [#168688](https://github.com/openclaw/openclaw/issues/168688) [Bug]: Control UI "Icon & color" picker has no clear choice in the Emoji section; an emoji can only be removed from the Icons row
- [#38573](https://github.com/openclaw/openclaw/issues/38573) [Feature]: Allow topic/forum cron deliveries to use main-session announce/agent-turn flow instead of forced direct delivery
- [#60659](https://github.com/openclaw/openclaw/issues/60659) [Feature]: Per-agent or per-binding session reset policy
- [#42246](https://github.com/openclaw/openclaw/issues/42246) [Feature]: Configurable batching/aggregation of outbound Telegram notifications
- [#59788](https://github.com/openclaw/openclaw/issues/59788) [Feature]: Start and persist routed agent sessions from outbound WhatsApp sends
- [#180907](https://github.com/openclaw/openclaw/issues/180907) [Bug]: iOS native Talk passes chat.send timeoutMs 30000, capping every Talk agent turn at 30 s
- [#180802](https://github.com/openclaw/openclaw/issues/180802) [Bug]: Restart recovery ownership mismatch wedges main session — every message fails with "Restart recovery failed" until sessions.reset
- [#180904](https://github.com/openclaw/openclaw/issues/180904) [Bug]: doctor deadlocks when an agent database migration refuses (FTS5 corruption) - no FTS repair path, refusal message points at doctor itself
- [#152509](https://github.com/openclaw/openclaw/issues/152509) config: a detected openclaw.json truncation is promoted over last-known-good on the next gateway start, and doctor --fix then restores the truncated file
- [#180626](https://github.com/openclaw/openclaw/issues/180626) Update failure: preflight-node-runtime (2026.10.5)
- [#41459](https://github.com/openclaw/openclaw/issues/41459) [Feature]: Add per-channel identity override for Discord bindings
- [#52736](https://github.com/openclaw/openclaw/issues/52736) [Feature]: Add screenshot capture button to Control UI chat input (like Doubao)
- [#57110](https://github.com/openclaw/openclaw/issues/57110) Tailscale serve mode lacks optional secondary authentication
- [#65945](https://github.com/openclaw/openclaw/issues/65945) [Feature]: Auto‑forward images from Node agent.request to IM users when deliver: true
- [#7604](https://github.com/openclaw/openclaw/issues/7604) Security Hardening: Request Timeouts, Credential Encryption, Skill Signing, and Prompt Injection Defense
- [#41645](https://github.com/openclaw/openclaw/issues/41645) [Feature]: [Feature Request] 按用户维度统计 Token 使用量
- [#58687](https://github.com/openclaw/openclaw/issues/58687) [Bug]: Security prompt is too long to approve, and clicking "Allow All" on the security prompt is ineffective
- [#29384](https://github.com/openclaw/openclaw/issues/29384) [Feature]: Support for sandbox Docker parameters (--gpus all, --ipc=host)
- [#46919](https://github.com/openclaw/openclaw/issues/46919) [Feature]: Token URL Disabled Via Config
- [#47461](https://github.com/openclaw/openclaw/issues/47461) [Telegram] 机器人头像更改后无法同步到 Telegram 客户端
- [#49078](https://github.com/openclaw/openclaw/issues/49078) [Feature]: Cron job output routing — hard-coded destination for job results (file, channel, session)
- [#52373](https://github.com/openclaw/openclaw/issues/52373) [Feature]:Add configUrl and configButton support in SKILL.md frontmatter
- [#52894](https://github.com/openclaw/openclaw/issues/52894) [Feature]: Automatically install brew if not installed
- [#64821](https://github.com/openclaw/openclaw/issues/64821) [Bug]: tools.exec.security corrupted by plugin init logs — hot-reload concatenates plugin output into config value
- [#27306](https://github.com/openclaw/openclaw/issues/27306) [Feature]: Allow sandbox for main but keep sandbox for groups without security warning
- [#31379](https://github.com/openclaw/openclaw/issues/31379) [Feature]: Channels settings page should always show built-in channels alongside custom channels
- [#41805](https://github.com/openclaw/openclaw/issues/41805) [Feature]: Include interaction metadata in Discord button callbacks
- [#43786](https://github.com/openclaw/openclaw/issues/43786) [Feature]: auth mode = none is required
- [#44603](https://github.com/openclaw/openclaw/issues/44603) [Feature]: pty setting
- [#57588](https://github.com/openclaw/openclaw/issues/57588) [Feature]: Security: fetch-auth bearer token fallback attaches tokens to arbitrary URLs without fail-closed defaults
- [#58830](https://github.com/openclaw/openclaw/issues/58830) [Feature]: Add user-visible and confirmable context compaction mechanisms
- [#62513](https://github.com/openclaw/openclaw/issues/62513) [Feature]: this.hasIndexedContent() seems to be called too frequently, causing performance issus
- [#63145](https://github.com/openclaw/openclaw/issues/63145) [Feature]: openclaw models status --probe --all — per-model health check across all configured models
- [#68871](https://github.com/openclaw/openclaw/issues/68871) [Feature]: Smart proxy detection - fallback to direct connection when proxy unavailable
- [#12506](https://github.com/openclaw/openclaw/issues/12506) [Feature Request] Unified Security Profile System with Preset Scenario Templates
- [#47684](https://github.com/openclaw/openclaw/issues/47684) Add auth sync command or auto-sync for API key rotation across agents
- [#60154](https://github.com/openclaw/openclaw/issues/60154) [Feature]: Per-account media inbound directory for multi-account Feishu
- [#61368](https://github.com/openclaw/openclaw/issues/61368) [Feature]: Full Workspace File Management API for Remote/Container Deployments
- [#65636](https://github.com/openclaw/openclaw/issues/65636) [Feature]: cron add: support custom job IDs via --id
- [#68955](https://github.com/openclaw/openclaw/issues/68955) [Feature]: Slash commands like /new should trigger ack reaction and typing indicator
- [#11207](https://github.com/openclaw/openclaw/issues/11207) [Security] Agent executes instructions from untrusted file content despite explicit read-only directive (indirect prompt injection)
- [#42332](https://github.com/openclaw/openclaw/issues/42332) [Feature]: Support sessionKey-based concurrency guard for webhook deliveries
- [#47120](https://github.com/openclaw/openclaw/issues/47120) [Feature Request] Session List: Show timestamp + last message preview
- [#47750](https://github.com/openclaw/openclaw/issues/47750) [Feature]: Non-interactive command to use Codex OAuth for model provider
- [#48620](https://github.com/openclaw/openclaw/issues/48620) [Feature]: No way to view/manage paired contacts & permissions
- [#52665](https://github.com/openclaw/openclaw/issues/52665) [Feature]: Optimization for Dockerfile.sandbox-common # add retries and fix-missings for apt-get
- [#58135](https://github.com/openclaw/openclaw/issues/58135) [Feature]: expose promptMode parameter in sessions_spawn for deterministic blank sub-agents
- [#63471](https://github.com/openclaw/openclaw/issues/63471) [Feature]: Be friendlier with Dockge/etc
- [#20793](https://github.com/openclaw/openclaw/issues/20793) [Feature]: Hook security enhancement: map Gmail preset payloads to tool-role context instead of user-role prompt text
- [#28913](https://github.com/openclaw/openclaw/issues/28913) [Feature]: Source-based filtering for autoCapture
- [#42747](https://github.com/openclaw/openclaw/issues/42747) Native Slack token rotation support (oauth.v2.access refresh flow)
- [#53958](https://github.com/openclaw/openclaw/issues/53958) [Feature]: Overview should show config file path
- [#59078](https://github.com/openclaw/openclaw/issues/59078) Skill setup detection false positive when credentials use config files instead of env vars
- [#61520](https://github.com/openclaw/openclaw/issues/61520) [Feature]: Config IO silently swallows errors that may indicate serious problems
- [#180795](https://github.com/openclaw/openclaw/issues/180795) [Bug]: Doctor retired-runtime import commits replacement characters from malformed UTF-8 legacy sources
- [#180782](https://github.com/openclaw/openclaw/issues/180782) Doctor restores replacement characters into workspace skill files from malformed legacy Skill Workshop rollbacks
- [#180134](https://github.com/openclaw/openclaw/issues/180134) [Bug]: Control UI: composer shows no keyboard focus in forced-colors (high contrast) mode
- [#181136](https://github.com/openclaw/openclaw/issues/181136) Update failure: package-install-omit-optional (2026.10.4)
- [#178809](https://github.com/openclaw/openclaw/issues/178809) [Bug]: Telegram ingress Worker loses plugin runtime context on Bun; offset persistence retries with "Telegram runtime not initialized"
- [#181115](https://github.com/openclaw/openclaw/issues/181115) [Bug]: bundled 1Password secret provider silently fails on group-writable installs (default Ubuntu umask 002)
- [#181116](https://github.com/openclaw/openclaw/issues/181116) Update failure: package-install-omit-optional (2026.10.5)
- [#149768](https://github.com/openclaw/openclaw/issues/149768) [Bug]: Template updates can prematurely complete pending workspace onboarding
- [#181104](https://github.com/openclaw/openclaw/issues/181104) Feature: iMessage tapback/reaction events should be able to trigger agent turns
- [#181094](https://github.com/openclaw/openclaw/issues/181094) Update failure: package-install-omit-optional (2026.9.9)
- [#176268](https://github.com/openclaw/openclaw/issues/176268) [Bug]: `openclaw gateway stop` and `uninstall` failures print no next step, unlike start/restart/repair
- [#177701](https://github.com/openclaw/openclaw/issues/177701) [Bug]: Selected 200K context window is ignored on the direct Anthropic route after live model discovery fails
- [#180979](https://github.com/openclaw/openclaw/issues/180979) Update failure: package-install-omit-optional (2026.9.9)
- [#168918](https://github.com/openclaw/openclaw/issues/168918) Native chat performs redundant transcript updates during active runs
- [#180577](https://github.com/openclaw/openclaw/issues/180577) [Feature] Refresh the Appearance page title after a language switch
- [#179968](https://github.com/openclaw/openclaw/issues/179968) [Bug]: Numeric prefixes choose the wrong Control UI chat text direction
- [#180874](https://github.com/openclaw/openclaw/issues/180874) [Bug]: Background skill-review notice is delivered as an independent message and can displace the agent's reply
- [#57535](https://github.com/openclaw/openclaw/issues/57535) Proposal: Add security warning for untrusted skills loaded from local sources
- [#57552](https://github.com/openclaw/openclaw/issues/57552) Proposal: Enhance security audit to include `skill.md` for better risk detection
- [#177782](https://github.com/openclaw/openclaw/issues/177782) [Bug]: Matrix agent keeps seeing a room's old name after the room is renamed, until the Gateway restarts
- [#179994](https://github.com/openclaw/openclaw/issues/179994) Bug: Dreaming settings lose uncommitted input drafts on unrelated config refresh
- [#169195](https://github.com/openclaw/openclaw/issues/169195) iOS sidebar repeats lookup and font work while rendering sessions

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 256,255 · **Open issues:** 50,560 · **Last push:** <1h ago

On October 23, 2026, there were no new releases for the Hermes Agent. Significant developments included several merged pull requests, notably #143292 which restored compilation of cold-cache SDists for Windows desktop builds, and #143248 that introduced a feature for connector sign-in offers without guest access on page opens. Additional enhancements included #143236, where sign-in results now display who signed in and what movements occurred, and #143235, which standardizes the Nous sign-in process to a plain device login. Among the new issues, #143290 emerged as a prominent concern, highlighting a bug where POST requests to stop a recently finished run interrupt the subsequent turn, causing messages to be silently dropped.

#### ✅ Merged PRs
- [#143292](https://github.com/NousResearch/hermes-agent/pull/143292) Windows desktop builds compile cold-cache sdists again (short uv path, no MAX_PATH LNK1104)
- [#143248](https://github.com/NousResearch/hermes-agent/pull/143248) feat(connectors): no guest on page open, connector sign-in offer
- [#143236](https://github.com/NousResearch/hermes-agent/pull/143236) feat(desktop): sign-in result shows who signed in and what moved
- [#143235](https://github.com/NousResearch/hermes-agent/pull/143235) feat(auth): every Nous sign-in is the plain device login
- [#143234](https://github.com/NousResearch/hermes-agent/pull/143234) feat(auth): hand the free-tier guest to the account after sign-in
- [#143281](https://github.com/NousResearch/hermes-agent/pull/143281) fix: uv resolution works again on newest uv

#### 🐛 New Issues
- [#143290](https://github.com/NousResearch/hermes-agent/issues/143290) [Bug]: POST /v1/runs/{id}/stop on a just-finished run interrupts the NEXT turn — the new message is silently dropped `type/bug` `comp/gateway` `P2` `area/sessions` 💬7
- [#142849](https://github.com/NousResearch/hermes-agent/issues/142849) window-owned requests (preview.read/preview.act/terminal.read/theme.apply) time out for a session on a primary-shared profile `type/bug` `P2` `comp/desktop` `area/profiles` 💬6
- [#143197](https://github.com/NousResearch/hermes-agent/issues/143197) [Bug]: v0.22.4 accepts `X-Hermes-Session-Key` but ignores it for binding — every /v1/chat/completions call mints a new `api-*` session (`X-Hermes-Session-Id` binds correctly) `type/bug` `comp/gateway` `platform/webhook` `P2` 💬5
- [#143313](https://github.com/NousResearch/hermes-agent/issues/143313) pip install -e . is unsatisfiable on Python 3.14: Pillow==13.0.0 conflicts with browser-harness's pillow==12.3.0 `type/bug` `P2` `area/install-update` 💬4
- [#143288](https://github.com/NousResearch/hermes-agent/issues/143288) [Bug]: a long-lived session pins its auxiliary vision route to one provider — auxiliary.vision.provider / base_url are ignored, only the model name propagates `type/bug` `comp/agent` `tool/vision` `area/config` 💬4
- [#143170](https://github.com/NousResearch/hermes-agent/issues/143170) [Bug]: Routed-profile browser tools ignore scoped AGENT_BROWSER_EXECUTABLE_PATH and select PM Chromium `type/bug` `comp/cli` `comp/tools` `tool/browser` 💬3
- [#143316](https://github.com/NousResearch/hermes-agent/issues/143316) [Bug]: Compression threshold assumes a 524,288-token window and only reports the mismatch after silently auto-lowering `type/bug` `comp/agent` `area/config` `P2` 💬2
- [#143315](https://github.com/NousResearch/hermes-agent/issues/143315) [Bug]: auxiliary.compression.provider "auto" inherits the chat model's provider and 404s on models it cannot serve `type/bug` `comp/agent` `area/config` `P2` 💬2
- [#142893](https://github.com/NousResearch/hermes-agent/issues/142893) [Bug]: api_server synthesizes an auto-TTS reply it can never deliver — 70 s of paid synthesis per turn, next request queued behind it `type/bug` `comp/gateway` `tool/file` `tool/tts` 💬2
- [#143249](https://github.com/NousResearch/hermes-agent/issues/143249) [Bug]: Kanban worktree workspace is unusable when the worker runs on a remote SSH backend (WSL2) `type/bug` `backend/ssh` `comp/cron` `comp/plugins` 💬2
- [#143256](https://github.com/NousResearch/hermes-agent/issues/143256) [Bug]: hosted-room driver runs one 5s supervisor thread per multiplexed profile (even with zero rooms) — exhausts read pool, starves event loop `type/perf` `comp/gateway` `P2` `area/sessions` 💬2
- [#143268](https://github.com/NousResearch/hermes-agent/issues/143268) [Bug] LOCAL Kanban notify+wake never reaches the session FIFO: LocalSessionAdapter has no gateway_runner `type/bug` `comp/gateway` `P2` `area/sessions` 💬2
- [#143229](https://github.com/NousResearch/hermes-agent/issues/143229) `hermes security` reports CRITICAL findings for pinned certifi/aiohttp/pillow — patched versions available (pillow blocked by browser-harness) `type/security` `comp/plugins` `P3` `area/install-update` 💬2
- [#143255](https://github.com/NousResearch/hermes-agent/issues/143255) [Bug]: multiplexed gateway starts one cron-worktree-prune thread per profile, all pruning the same repo — thread/git storm trips liveness watchdog (exit 75) `type/bug` `comp/cron` `P2` `area/profiles` 💬2
- [#143244](https://github.com/NousResearch/hermes-agent/issues/143244) A classic Group Chat member starts a fresh session, and loses the room's context, when a session lookup reply is malformed `type/bug` `P2` `comp/desktop` `area/sessions` 💬2
- [#143327](https://github.com/NousResearch/hermes-agent/issues/143327) preflight_db_writability reports "read-only" for a -wal/-shm sidecar that SQLite deleted mid-check (TOCTOU race) `type/bug` `tool/code-exec` `P2` 💬1
- [#143254](https://github.com/NousResearch/hermes-agent/issues/143254) uv 0.13.5 bump (75a8d6fc) breaks PM plugin workspace resolve: plugins with deps evicted, memory.provider cleared `type/bug` `tool/memory` `P2` `area/install-update` 💬1
- [#143320](https://github.com/NousResearch/hermes-agent/issues/143320) [Bug]: Desktop turn-end chime fires for another session while the chat on screen is still working `type/bug` `P2` `comp/desktop` `area/streaming` 💬1
- [#143326](https://github.com/NousResearch/hermes-agent/issues/143326) [Bug]: issues following recent update / Model selection delay `type/bug` `area/config` `P2` `comp/desktop` 💬1
- [#143323](https://github.com/NousResearch/hermes-agent/issues/143323) [Bug]: Desktop model picker commits the picked model with the session's current provider — cross-provider route mismatch (variant of #79536) `type/bug` `area/config` `P2` `comp/desktop` 💬1
- [#142958](https://github.com/NousResearch/hermes-agent/issues/142958) [Bug]: Mattermost typing indicator appears in parent channel instead of thread `type/bug` `comp/plugins` `tool/file` `P3` 💬1
- [#142834](https://github.com/NousResearch/hermes-agent/issues/142834) [Feature]: Approval gate for general write_file actions `type/security` `comp/tools` `tool/file` `area/config` 💬1
- [#143241](https://github.com/NousResearch/hermes-agent/issues/143241) "Start gateway group" stays clickable after it worked, and a second click makes another room `type/bug` `P2` `comp/desktop` 💬1
- [#143305](https://github.com/NousResearch/hermes-agent/issues/143305) Plugin admission fails for any plugin with Python deps: core uv.lock cannot be re-resolved for the sys_platform == 'android' split `type/bug` `P2` `area/install-update` 💬1
- [#143284](https://github.com/NousResearch/hermes-agent/issues/143284) [Bug]: Auxiliary Codex adapter sends no reasoning when unset — reasoning models trip the 60 s no-progress timeout, and the shared-client close takes concurrent calls down `type/bug` `comp/agent` `tool/vision` `provider/openai` 💬1
- [#143306](https://github.com/NousResearch/hermes-agent/issues/143306) [Bug]: Shared Discord thread speaker changes strand pinned completion wakes with admission_conflict `type/bug` `comp/gateway` `platform/discord` `P2` 💬1
- [#143302](https://github.com/NousResearch/hermes-agent/issues/143302) A Group Chat message sent just as the previous discussion settles never gets a turn `type/bug` `comp/gateway` `P2` 💬1
- [#143303](https://github.com/NousResearch/hermes-agent/issues/143303) Stop in a gateway Group Chat reports a Bot's turn stopped while it is still running `type/bug` `comp/gateway` `P2` 💬1
- [#143299](https://github.com/NousResearch/hermes-agent/issues/143299) Email replies use the subject of the sender's latest email, not the one being answered `type/bug` `comp/plugins` `platform/email` `P2` 💬1
- [#143286](https://github.com/NousResearch/hermes-agent/issues/143286) [Bug]: Desktop: a Bot Chat handed off with `/handoff telegram` can never be opened again ("Could not check <bot>'s Bot Chat registry (not_found)") `type/bug` `comp/gateway` `platform/telegram` `P3` 💬1
- [#143272](https://github.com/NousResearch/hermes-agent/issues/143272) search_files on macOS: protected-folder exclusion still opens ~/Downloads etc. (TCC prompts), and matches nothing when cwd ≠ search root `type/security` `comp/tools` `tool/file` `backend/local` 💬1
- [#143278](https://github.com/NousResearch/hermes-agent/issues/143278) [Feature]: Desktop: open Scheduled jobs as a workspace page, like Artifacts and Kanban `type/feature` `tool/file` `P3` `comp/desktop` 💬1
- [#143243](https://github.com/NousResearch/hermes-agent/issues/143243) An ended classic Group Chat can come back with its history when a sync read was already in flight `type/bug` `P3` `comp/desktop` 💬1
- [#143266](https://github.com/NousResearch/hermes-agent/issues/143266) [Bug]: The protected-instruction-file approval gate only covers the file tools. Any agent can overwrite AGENTS.md, SOUL.md, CLAUDE.md or .cursorrules through terminal or execute_code without ever triggering the approval prompt. `type/security` `comp/tools` `tool/terminal` `tool/file` 💬1
- [#142998](https://github.com/NousResearch/hermes-agent/issues/142998) [Bug]: bundled desktop app keeps a PM dependency generation resolved for the previous release after an in-place update (refresh_dependencies only runs in Docker) `type/bug` `P2` `comp/desktop` `area/install-update` 💬1
- [#143259](https://github.com/NousResearch/hermes-agent/issues/143259) [Bug]: a CLI run under a scratch HERMES_HOME commits a dependency generation to the owning install; the gateway then restarts without MCP `type/bug` `comp/tools` `tool/mcp` `P3` 💬1
- [#143324](https://github.com/NousResearch/hermes-agent/issues/143324) [Bug]: Canonical group chats lost avatars and thinking indicators `type/bug` `P2` `comp/desktop` `desktop/chat`
- [#143277](https://github.com/NousResearch/hermes-agent/issues/143277) Tracking: Electron 44.9.3 upgrade (#142727) regressions `P3` `comp/desktop` `os/macos`
- [#143285](https://github.com/NousResearch/hermes-agent/issues/143285) Desktop: "An unconfirmed send was restored" flashes on every Group Chat message `type/bug` `P3` `comp/desktop` `desktop/chat`
- [#143200](https://github.com/NousResearch/hermes-agent/issues/143200) [Tracking]: Session lifecycle and storage — closed tracker #134889 still receives new reports; please reopen it or adopt this one `comp/gateway` `P2` `area/sessions`

#### 🔒 Closed Issues
- [#140729](https://github.com/NousResearch/hermes-agent/issues/140729) [Bug]: hermes update fails with Refusing to move this install
- [#143244](https://github.com/NousResearch/hermes-agent/issues/143244) A classic Group Chat member starts a fresh session, and loses the room's context, when a session lookup reply is malformed
- [#143327](https://github.com/NousResearch/hermes-agent/issues/143327) preflight_db_writability reports "read-only" for a -wal/-shm sidecar that SQLite deleted mid-check (TOCTOU race)

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 95,154 · **Open issues:** 9,323 · **Last push:** <1h ago

On October 23, 2026, there were no new releases for vLLM, but several significant updates were merged. The bugfixes included important changes like deferring MRV2 Triton validation to worker startup and fixing key issues in ROCm build processes, including improvements to the paged attention kernel split, which enhances build speed significantly. Notably, the documentation was updated to remedy missing-type warnings in XPress kernels. Among the new issues, the report of GLM-5.x reusing layers under pipeline parallelism highlights a critical concern regarding stale top-k indices, signifying potential instability in ongoing projects. Overall, it was a day of routine maintenance with noteworthy improvements and ongoing challenges in the development process.

#### ✅ Merged PRs
- [#62576](https://github.com/vllm-project/vllm/pull/62576) [Bugfix] Defer MRV2 Triton validation to worker startup
- [#63228](https://github.com/vllm-project/vllm/pull/63228) [Docs] Fix griffe missing-type warnings in XPress kernels
- [#54163](https://github.com/vllm-project/vllm/pull/54163) [Bugfix][Spec Decode] DFlash/DSpark no longer drop the last prefix-cache block (mamba align context recompute)
- [#56939](https://github.com/vllm-project/vllm/pull/56939) [KV Connector][Mooncake] Expose transfer stats via Prometheus
- [#63105](https://github.com/vllm-project/vllm/pull/63105) [ROCm][Build] Reland #62475: paged attention kernel split with `--offload-compress` => x4-x7 wheel build speedup on ROCm
- [#63138](https://github.com/vllm-project/vllm/pull/63138) [Frontend] Expose --sleep-mode-backend on the CLI
- [#63007](https://github.com/vllm-project/vllm/pull/63007) [Bugfix][ROCm][DSv4.1] Gather Engram hashes across DP replicas in the AMD model
- [#63009](https://github.com/vllm-project/vllm/pull/63009) [ROCm][DSv4.1] Allocate offloaded Engram tables at their exact size
- [#63192](https://github.com/vllm-project/vllm/pull/63192) [Bugfix][Model] Build the skipped DeepSeek-VL2 vision tower without meta .item()
- [#60028](https://github.com/vllm-project/vllm/pull/60028) [Startup][UX] Start multiproc workers concurrently when using spawn
- [#63080](https://github.com/vllm-project/vllm/pull/63080) upgrade tpu-inference to v0.32.0 and torch to 2.14.0
- [#62938](https://github.com/vllm-project/vllm/pull/62938) [Model] Add Flint (RecursiveSI/flint)
- [#62784](https://github.com/vllm-project/vllm/pull/62784) [Spec Decode][MRV2] Skip drafting in steps where no request can use the drafts
- [#62294](https://github.com/vllm-project/vllm/pull/62294) [Bugfix][Anthropic] Map vLLM error types to Anthropic error.type vocabulary
- [#54448](https://github.com/vllm-project/vllm/pull/54448) [Core] Add XPress speculative decoding method
- [#62856](https://github.com/vllm-project/vllm/pull/62856) [Bugfix][Frontend] Accept and echo prompt-cache and safety_identifier fields in the Responses API
- [#62507](https://github.com/vllm-project/vllm/pull/62507) [Bugfix][Frontend][Kimi K3] Fix Kimi K3 XTML marker leakage in responses API
- [#62816](https://github.com/vllm-project/vllm/pull/62816) [Quantization] Bump humming-kernels to 0.1.18 and remove DeviceInfo workaround
- [#54642](https://github.com/vllm-project/vllm/pull/54642) [Bugfix] Include multimodal limits in the model compile-cache hash
- [#61822](https://github.com/vllm-project/vllm/pull/61822) [Docs][KV Offload] Document canonical_layout in the KV offloading usage guide
- [#58304](https://github.com/vllm-project/vllm/pull/58304) [Bugfix][Attention] Fix FA4 FP8 descale strides for singleton KV heads
- [#62099](https://github.com/vllm-project/vllm/pull/62099) [ROCm][CI] Fix int8 GEMM kernel selection logic for ROCm platform
- [#63147](https://github.com/vllm-project/vllm/pull/63147) [Bugfix] Add SM100 support for Step-5-Preview
- [#56430](https://github.com/vllm-project/vllm/pull/56430) [bug-fix] Fix KV block leak with fault tolerance enabled in P/D disaggregation
- [#62738](https://github.com/vllm-project/vllm/pull/62738) [Frontend] Use VLLMValidationError for client input errors in renderers base
- [#62765](https://github.com/vllm-project/vllm/pull/62765) [Feature] [Frontend] [Reasoning] Support Prompt Embeds inputs for reasoning traces
- [#62843](https://github.com/vllm-project/vllm/pull/62843) [Perf][GLM-5.3] Enable GLM low-latency BF16 GEMM on SM107
- [#63125](https://github.com/vllm-project/vllm/pull/63125) [Quantization][Quark] Support MXFP8 (W8A8) routed experts
- [#62526](https://github.com/vllm-project/vllm/pull/62526) [Benchmark] benchmark_moe: read Gemma 4's MoE shape from its text config
- [#62783](https://github.com/vllm-project/vllm/pull/62783) [Bugfix][Pooling] Keep the JinaVL score token when truncating score prompts
- [#62555](https://github.com/vllm-project/vllm/pull/62555) [Bugfix][RL] Fix cross-stream reuse of packed NCCL receive buffers
- [#60532](https://github.com/vllm-project/vllm/pull/60532) [Attention] Decode FlashInfer spec queries with fa2 on pre-SM90 GPUs
- [#62994](https://github.com/vllm-project/vllm/pull/62994) [ROCm][Perf][MiniMax-M3] MonoKernel: serve EAGLE3 verify steps
- [#61655](https://github.com/vllm-project/vllm/pull/61655) [Refactor] Migrate FlashInfer NVLink one-sided to MoEEpCommunication
- [#62194](https://github.com/vllm-project/vllm/pull/62194) [Model] NemotronHMTP: share the target's embedding and LM head
- [#60298](https://github.com/vllm-project/vllm/pull/60298) [CI][Test][1/N] Enable unit tests to run on Rubin
- [#63127](https://github.com/vllm-project/vllm/pull/63127) [ROCm][CI] Download quick-reduce e2e model when cached snapshot has no weights
- [#60643](https://github.com/vllm-project/vllm/pull/60643) [Perf][Gemma4][Multimodal] Fuse Gemma4Unified 2D posemb and batch image/video embedder
- [#62940](https://github.com/vllm-project/vllm/pull/62940) [Perf] Bypass DispatchPooler grouping for homogeneous tasks
- [#62054](https://github.com/vllm-project/vllm/pull/62054) [MoE] Use the sorted fused-MoE path for host-resident expert weights
- [#60774](https://github.com/vllm-project/vllm/pull/60774) [Bugfix][Benchmark] Support boolean sweep plot filters
- [#62888](https://github.com/vllm-project/vllm/pull/62888) [CPU] Warm up MRV2 Triton kernels at startup
- [#60238](https://github.com/vllm-project/vllm/pull/60238) [Multimodal] Skip encoder towers on later PP stages under V2
- [#60405](https://github.com/vllm-project/vllm/pull/60405) [CPU][GDN] Route FP16 attention through Triton/FLA
- [#62957](https://github.com/vllm-project/vllm/pull/62957) [Model] Add Alpamayo 2 Super (reasoning model)
- [#62892](https://github.com/vllm-project/vllm/pull/62892) [Rust Frontend] Match reasoning delimiters by token identity

#### 🐛 New Issues
- [#63006](https://github.com/vllm-project/vllm/issues/63006) [RFC]: Reduce descriptor and WR overhead to improve Mooncake KV transfer bandwidth `RFC` `kv-connector` 💬3
- [#63170](https://github.com/vllm-project/vllm/issues/63170) [Bug]: GLM-5.x (DSA) under pipeline parallelism: reuse layers at a stage start read stale top-k indices `bug` `glm` 💬4
- [#63130](https://github.com/vllm-project/vllm/issues/63130) [Bug]: Strict serde rejection of duplicate field `reasoning` breaks agent harnesses that echo both `reasoning` and `reasoning_content` `bug` `tool-calling` 💬3
- [#63056](https://github.com/vllm-project/vllm/issues/63056) [Feature]: expose --sleep-mode-backend on the CLI (ModelConfig.sleep_mode_backend has no EngineArgs flag) 💬2
- [#63162](https://github.com/vllm-project/vllm/issues/63162) [Bug]: `return_tokens_as_token_ids` is ignored on derender paths `bug` 💬2
- [#63058](https://github.com/vllm-project/vllm/issues/63058) [Feature]: keep_tags for CuMemAllocator.sleep so selected allocations (e.g. kv_cache) stay mapped 💬2
- [#63121](https://github.com/vllm-project/vllm/issues/63121) [Bug]: `torchcodec` is unpinned and resolves to a CUDA-13 wheel in CUDA-12.9 builds, breaking `vllm serve` on `vllm/vllm-openai:v0.32.0-cu129` `bug` 💬2
- [#63020](https://github.com/vllm-project/vllm/issues/63020) [Bug]: vllm/vllm-openai:flint can't serve the NVFP4 GGUF checkpoint without the gguf package and a speculators-probe workaround 💬2
- [#63184](https://github.com/vllm-project/vllm/issues/63184) [Bug]: Responses API: `reasoning.summary` is accepted and echoed, but reasoning items always come back with `summary: []` `tool-calling` 💬1
- [#63004](https://github.com/vllm-project/vllm/issues/63004) [RFC]: add eage4 spec decode `RFC` 💬1
- [#63026](https://github.com/vllm-project/vllm/issues/63026) [Bug]: EngineCore CPU memory growth on Ascend associated with SHM notification mailbox accumulation `bug` 💬1
- [#63158](https://github.com/vllm-project/vllm/issues/63158) [Spec Decode][DeepSeek-V4.1] Support DSpark with pipeline parallelism `deepseek` `DSv4.1` 💬1
- [#63156](https://github.com/vllm-project/vllm/issues/63156) [Tracking] Dory looped model: per-request loops, speculative decoding, GB10 performance `speculative-decoding` 💬1
- [#63128](https://github.com/vllm-project/vllm/issues/63128) [Bug][Spec Decode] MTP draft from a draft-only checkpoint runs with an uninitialised embedding under pipeline parallelism (no error; acceptance collapses) `quantization` 💬1
- [#63049](https://github.com/vllm-project/vllm/issues/63049) [Bug]: TritonW4A16 GEMM faults on ROCm once M × N or M × K passes 2^31 `rocm` 💬1
- [#63019](https://github.com/vllm-project/vllm/issues/63019) [Bug]: "Loading weights took" logs the raw clock (~host uptime) when load_weights() doesn't pull from the weights iterator 💬1
- [#63152](https://github.com/vllm-project/vllm/issues/63152) [Tracking] Dory looped model: per-request loops, speculative decoding, GB10 performance `speculative-decoding` `quantization`
- [#63215](https://github.com/vllm-project/vllm/issues/63215) [RFC]: Declared ownership and layout for WeightSource (NCCL broadcast PP + NCCL M2N) `RFC`
- [#63198](https://github.com/vllm-project/vllm/issues/63198) [Performance]: SM100 prefill indexer: BF16 logits are upcast to FP32 before top-k (as_fp32_logits); a BF16-native top_k_per_row_prefill is 20-25% faster end to end at 64k-192k
- [#63187](https://github.com/vllm-project/vllm/issues/63187) [Bug]: With multimodal pruning, the encoder compute budget is debited by the pruned placeholder count, so one step can send several times the profiled patches to the ViT (CUDA OOM) `bug` `multi-modality`
- [#63185](https://github.com/vllm-project/vllm/issues/63185) [Bug]: Responses API rejects `include: ["web_search_call.results", "web_search_call.action.sources"]` with 400, although the `web_search` tool is accepted `tool-calling`
- [#63183](https://github.com/vllm-project/vllm/issues/63183) [Bug]: Responses API: completed responses never carry `completed_at`
- [#63175](https://github.com/vllm-project/vllm/issues/63175) [Bug]: Triton ReplaySSM (V1) drops un-flushed ring tokens when a running request skips a step
- [#63168](https://github.com/vllm-project/vllm/issues/63168) [Bug]: GLM-5.3-Flash kpool prefill writer leaves the pool straddling an unaligned chunk start unwritten or pooled from another request's tokens `glm`
- [#63164](https://github.com/vllm-project/vllm/issues/63164) [Feature]: Cohere grounding citations on the derender paths `feature request`
- [#63140](https://github.com/vllm-project/vllm/issues/63140) [RFC] Stream request-level prefill progress over gRPC
- [#63157](https://github.com/vllm-project/vllm/issues/63157) [Spec Decode][DeepSeek-V4.1] Support DSpark with pipeline parallelism `deepseek` `DSv4.1`
- [#63149](https://github.com/vllm-project/vllm/issues/63149) [Tracking] KV event correctness and compatibility
- [#63057](https://github.com/vllm-project/vllm/issues/63057) [Feature]: Worker.sleep device-wide memory check should warn, not assert (false positives with other processes on the GPU)
- [#63052](https://github.com/vllm-project/vllm/issues/63052) [Bug]: Breakable PIECEWISE capture (model runner V2) leaves warmup activations cached on the discarded capture stream `bug`
- [#63043](https://github.com/vllm-project/vllm/issues/63043) [Bug]: Native FlashInfer produces garbage output with BF16 Q and non-unit q_scale `quantization`
- [#63037](https://github.com/vllm-project/vllm/issues/63037) [Bug][KV Offload] Reused OffloadKey can lose metadata from delayed BlockStored events
- [#63011](https://github.com/vllm-project/vllm/issues/63011) [Bug]: b12x attention backend advertises head_dim 64, but every head_dim 64 model crashes at the first forward (no valid NUM_MMA_KV typed shared-memory allocation)
- [#63003](https://github.com/vllm-project/vllm/issues/63003) [Bug]: MiniMax-M3 ViT mRoPE setup BLOCK_N=32 exceeds UB capacity on Ascend A5 `minimax`

#### 🔒 Closed Issues
- [#41230](https://github.com/vllm-project/vllm/issues/41230) [Docs] Document NIXL KV connector metrics aggregation semantics
- [#60845](https://github.com/vllm-project/vllm/issues/60845) [Bug]: CUDA graphs deadlock fully-sharded fused-MoE LoRA across TP ranks
- [#45658](https://github.com/vllm-project/vllm/issues/45658) [Bug]: AssertionError: Encoder cache miss
- [#47161](https://github.com/vllm-project/vllm/issues/47161) [RFC]: Streaming Derender for Disaggregated Serving
- [#57052](https://github.com/vllm-project/vllm/issues/57052) [Bug]: Scale-out token path breaks stop strings: stop text leaks into derendered output (include_stop_str_in_output ignored) and --tokens-only silently disables stop entirely
- [#46261](https://github.com/vllm-project/vllm/issues/46261) [ROCm] test_rocm_mxfp4_moe_oracle is stale, and the fused-TRITON case fails accuracy on gfx950
- [#60406](https://github.com/vllm-project/vllm/issues/60406) [Bug]: vllm/vllm-openai:v0.31.0-cu129 fails at startup: bundled torchcodec 0.17.0 is built against CUDA 13 (libcudart.so.13)
- [#45784](https://github.com/vllm-project/vllm/issues/45784) [Bug]: vllm 0.23.0 2*h20-141G mp+dep and mp +tep deploy dsv4p error
- [#44997](https://github.com/vllm-project/vllm/issues/44997) [Usage]: vLLM logs orjson warning
- [#62225](https://github.com/vllm-project/vllm/issues/62225) [Bug]: CPU backend — non-LoRA requests batched with LoRA requests get the adapter applied (silent wrong output)
- [#56540](https://github.com/vllm-project/vllm/issues/56540) [Bug]: ROCm Stack DeepSeekv4.1 Flash Issue spamming logs with GLUON backend not available. Using TRITON backend!!!
- [#46204](https://github.com/vllm-project/vllm/issues/46204) [Bug]: MiniMax‑M3 (MSA) + NixlConnector: connector forces HND KV layout while MSA is NHD‑native, permuting the head axis under P/D disaggregation
- [#46307](https://github.com/vllm-project/vllm/issues/46307) [Bug]: gpu_memory_utilization is not respected on GB10 unified-memory systems during startup profiling (host wedges)
- [#45771](https://github.com/vllm-project/vllm/issues/45771) [RFC]: Enable connector LoRA for audio multimodal models — convert nn.Linear projectors to vLLM-native linears
- [#46364](https://github.com/vllm-project/vllm/issues/46364) [Bug]: Transcribing long audio that needs resampling fails — resample_audio_pyav overflows the int32 AudioFrame buffer, masked as "Invalid or unsupported audio file"
- [#46411](https://github.com/vllm-project/vllm/issues/46411) [ROCm]: Verify and enable cross-layer KV cache layout for AITER MLA decode
- [#46490](https://github.com/vllm-project/vllm/issues/46490) [Bug]: AttributeError: 'ColumnParallelLinear' object has no attribute 'weight' KeyError req_index = model_runner_output.req_id_to_index[req_id]
- [#46509](https://github.com/vllm-project/vllm/issues/46509) [Bug]: Unclean shutdown on DeepEP timeout during startup causes hung processes
- [#55207](https://github.com/vllm-project/vllm/issues/55207) [RFC]: Add QoL improvements to profiler
- [#53477](https://github.com/vllm-project/vllm/issues/53477) [Bug]: DFLASH2 force reprocesses context every reply
- [#63056](https://github.com/vllm-project/vllm/issues/63056) [Feature]: expose --sleep-mode-backend on the CLI (ModelConfig.sleep_mode_backend has no EngineArgs flag)
- [#46354](https://github.com/vllm-project/vllm/issues/46354) [Bug]: AssertionError: Expected a cached item for mm_hash
- [#46460](https://github.com/vllm-project/vllm/issues/46460) [Bug][TurboQuant] Fast-path incorrectly triggers with continuation requests under prefix caching, losing cached prefix K/V
- [#46462](https://github.com/vllm-project/vllm/issues/46462) [Bug]: DFlash+Qwen3.6-35B-A3B, invalid gpu kv cache usage, low decode speed
- [#46470](https://github.com/vllm-project/vllm/issues/46470) [Bug]: InternLM2 models crash with IndexError in embedding layer on CPU backend (v0.23.0 regression from v0.22.1)
- [#63158](https://github.com/vllm-project/vllm/issues/63158) [Spec Decode][DeepSeek-V4.1] Support DSpark with pipeline parallelism
- [#63156](https://github.com/vllm-project/vllm/issues/63156) [Tracking] Dory looped model: per-request loops, speculative decoding, GB10 performance
- [#60629](https://github.com/vllm-project/vllm/issues/60629) [Bug]: Boolean sweep plot filters discard or retain the wrong benchmark runs
- [#62855](https://github.com/vllm-project/vllm/issues/62855) [Bug]: Responses API ignores `safety_identifier`, `prompt_cache_retention`, `prompt_cache_options` and doesn't echo `prompt_cache_key`
- [#62554](https://github.com/vllm-project/vllm/issues/62554) [Bug]: Packed NCCL weight sync can corrupt MoE weights under layerwise reload (receive buffer reused while replay is pending)
- [#62664](https://github.com/vllm-project/vllm/issues/62664) [Bug]: CPU backend accepts unsupported --kv-cache-dtype and silently produces garbage
- [#62703](https://github.com/vllm-project/vllm/issues/62703) [Bug]: Corrupt PNG image in request returns HTTP 500 "broken PNG file (chunk ...)" instead of a client error
- [#52308](https://github.com/vllm-project/vllm/issues/52308) [Bug]: NVFP4 MoE monolithic backend (trtllm_fp4_block_scale_moe) produces semantically corrupt output for non-gated ReLU² MoE (Nemotron-3-Nano) on SM100; flashinfer_cutlass is correct on the same GPU
- [#61195](https://github.com/vllm-project/vllm/issues/61195) [Bug]: Gemma 4 image requests fail with "Failed to apply prompt replacement" under --chat-template-content-format string
- [#60301](https://github.com/vllm-project/vllm/issues/60301) [Bug]: Engine core dies on `assert len(scheduled_loras) <= max_loras` with LoRA and pipeline parallelism

### SGLang (`sgl-project/sglang`)

**Stars:** 37,624 · **Open issues:** 6,067 · **Last push:** <1h ago

On October 23, 2026, SGLang saw a flurry of merged pull requests addressing various performance enhancements and bug fixes, with notable contributions including improvements to the deepseek-v4.1 CUDA graph and optimizations across multiple MoE routing configurations. Significant fixes targeted issues related to FP8 and FP4 operations within the MoE framework, as well as ensuring device-agnostic checksum functionality. Among the newly reported issues, the priority preemption behavior in the scheduler was highlighted, which may cause requeueing inconsistencies across TP ranks. Overall, it appears to be a day of routine maintenance with a focus on improving reliability and efficiency.

#### ✅ Merged PRs
- [#45407](https://github.com/sgl-project/sglang/pull/45407) [Fix] [NVIDIA] deepseek-v4.1: Fix the breakable prefill CUDA graph in the late-layer tail on SM90
- [#45924](https://github.com/sgl-project/sglang/pull/45924) [Doc] Cookbook: add MiniMax-M3.1
- [#45848](https://github.com/sgl-project/sglang/pull/45848) [CI] [AMD] docker: Start the ROCm 10 nightly at 10:00 UTC and ROCm 7.2 at 11:00 UTC
- [#45881](https://github.com/sgl-project/sglang/pull/45881) [Fix] prefill-graph: Keep every DP rank eager when the replay tail captures behind rank barriers
- [#40565](https://github.com/sgl-project/sglang/pull/40565) [Fix] hicache: Fail fast on a null pointer from the Mooncake host allocator
- [#45909](https://github.com/sgl-project/sglang/pull/45909) [Perf] dsv4: Dequantize each shared sparse-prefill KV source once per forward
- [#45904](https://github.com/sgl-project/sglang/pull/45904) [Perf] dsv4: Keep V4.1 image rows inside the Engram gate kernel
- [#45918](https://github.com/sgl-project/sglang/pull/45918) [Fix] weight_checker: Make the checksum device-agnostic
- [#45219](https://github.com/sgl-project/sglang/pull/45219) [Perf] mlp: Fuse dense SwiGLU with block-FP8 quantization on decode
- [#45863](https://github.com/sgl-project/sglang/pull/45863) Reuse routing preparation across staged Marlin MoE LoRA projections
- [#45821](https://github.com/sgl-project/sglang/pull/45821) Reuse complete route preparation for CUTLASS W4A8 MoE
- [#45815](https://github.com/sgl-project/sglang/pull/45815) Streamline Marlin LoRA launches while preserving route safety
- [#45814](https://github.com/sgl-project/sglang/pull/45814) Reduce checked CUTLASS MoE launch overhead
- [#45805](https://github.com/sgl-project/sglang/pull/45805) [Fix] moe: Validate LoRA routing before grouped alignment arithmetic
- [#45754](https://github.com/sgl-project/sglang/pull/45754) [Refactor] moe: Share GGUF vector kernels across CUDA entries
- [#45744](https://github.com/sgl-project/sglang/pull/45744) [Fix] moe: Publish FP8 routing policy and preserve padding metadata
- [#45743](https://github.com/sgl-project/sglang/pull/45743) [Fix] moe: Preserve CUTLASS routing metadata and execution budgets
- [#45566](https://github.com/sgl-project/sglang/pull/45566) [Fix] gguf: Preserve MoE routing, weighting and allocation budgets
- [#45567](https://github.com/sgl-project/sglang/pull/45567) [Fix] deepseek-v4: Preserve decoder-tail token-count ownership
- [#45911](https://github.com/sgl-project/sglang/pull/45911) [Fix] [NVIDIA] jit: Build sm_100f on CC 10.7 until the bundled CUTLASS supports SM107
- [#45676](https://github.com/sgl-project/sglang/pull/45676) [Fix] [AMD] kernels: Import the HIP launch helpers from jit.utils.hipcc in smallm_fp8_blockscale_gfx950
- [#45910](https://github.com/sgl-project/sglang/pull/45910) [CI] deepgemm: Remove obsolete ref_mhc preflight check
- [#45771](https://github.com/sgl-project/sglang/pull/45771) [Perf] gemma4: Capture single-step frozen-KV drafts
- [#45903](https://github.com/sgl-project/sglang/pull/45903) [Perf] dsv4: Use the fused MXFP8 producers in eager prefill
- [#45901](https://github.com/sgl-project/sglang/pull/45901) [Perf] dsv4: Write the MegaAttention output straight into the prefill graph buffer
- [#45900](https://github.com/sgl-project/sglang/pull/45900) [Perf] dsv4: Drop local references that keep residual-stream tensors alive through the prefill step
- [#42701](https://github.com/sgl-project/sglang/pull/42701) [Fix] HiCache: stale host KV from write-through copies racing the in-flight forward
- [#45873](https://github.com/sgl-project/sglang/pull/45873) [Fix] ci: Reduce runner utilization scan overhead and bound API retries
- [#45880](https://github.com/sgl-project/sglang/pull/45880) [Perf] dsv4: Score the V4.1 index logits in bf16 on SM100
- [#33395](https://github.com/sgl-project/sglang/pull/33395) [Feat] speculative: Seed rejection-sampling draft proposals for deterministic inference
- [#44581](https://github.com/sgl-project/sglang/pull/44581) [Fix] nemotron_vl: Pad visual spans using processor offsets
- [#43216](https://github.com/sgl-project/sglang/pull/43216) [Fix] nccl: Disable graph buffer registration whenever a captured graph can hold a collective
- [#45896](https://github.com/sgl-project/sglang/pull/45896) [Fix] engram: let the hasher take idle DP-attention batches
- [#45892](https://github.com/sgl-project/sglang/pull/45892) [Feat] lora: Add plan-driven dense and MoE LoRA engines
- [#43792](https://github.com/sgl-project/sglang/pull/43792) [Perf] CP: QSA Context Parallel Optimization
- [#45879](https://github.com/sgl-project/sglang/pull/45879) [Perf] engram: Read host-table rows in address order on GPUs without host page tables
- [#45702](https://github.com/sgl-project/sglang/pull/45702) [Refactor] radix-tree: Move insert overlap handling into a resumable OVERLAP phase
- [#45703](https://github.com/sgl-project/sglang/pull/45703) [Feat] radix-tree: Report the last visited node and a shorter FULL device match in match results
- [#45701](https://github.com/sgl-project/sglang/pull/45701) [Refactor] hicache: Route buffer-mode backup admission keys and FULL transfers through pipeline hooks
- [#45334](https://github.com/sgl-project/sglang/pull/45334) [CI] radix-cache: Build unified radix cache test states through production paths
- [#45855](https://github.com/sgl-project/sglang/pull/45855) [Fix] logits: Preserve lm_head precision with shared buffers
- [#45783](https://github.com/sgl-project/sglang/pull/45783) [Refactor] dsv4: Keep only the two-level V4.1 indexer in the prefill graph
- [#45843](https://github.com/sgl-project/sglang/pull/45843) [Fix] ci: Add pytest entry point for Muse Spark router tests
- [#44517](https://github.com/sgl-project/sglang/pull/44517) [Fix] true-on-policy: Allocate the graph logits buffer in the logits dtype
- [#45507](https://github.com/sgl-project/sglang/pull/45507) [Test] [AMD] deepseek-v4.1: Fix the HIP breakable-graph unit tests for the default prefill context limit and the DSpark draft ring
- [#45845](https://github.com/sgl-project/sglang/pull/45845) [Fix] CI: add missing entry point to Muse Spark router test
- [#45722](https://github.com/sgl-project/sglang/pull/45722) [Fix] NIXL: Preserve explicit UCX network device selection
- [#43809](https://github.com/sgl-project/sglang/pull/43809) [Fix] [AMD] deterministic: Refuse RCCL all-reduce in deterministic mode above TP2
- [#44280](https://github.com/sgl-project/sglang/pull/44280) [Feat] KVShard: Add attention and indexer support for page-sharded DSA caches
- [#45538](https://github.com/sgl-project/sglang/pull/45538) [Fix] mem_cache: Skip linker L3 lookup on PD decode
- [#45214](https://github.com/sgl-project/sglang/pull/45214) [Perf] qknorm: run head_dim-128 rows two per warp with 16B lanes, bit-identical
- [#44260](https://github.com/sgl-project/sglang/pull/44260) [Fix] flux: use true_cfg_scale as the FLUX CFG weight
- [#45761](https://github.com/sgl-project/sglang/pull/45761) [CI] multimodal_gen: Target thirty-minute CI shards
- [#37620](https://github.com/sgl-project/sglang/pull/37620) [Perf] diffusion: Accumulate chunked LoRA merges with addmm
- [#42758](https://github.com/sgl-project/sglang/pull/42758) [Perf] diffusion: fuse FLUX3 SwiGLU with rowwise FP8 quantization
- [#45637](https://github.com/sgl-project/sglang/pull/45637) [Perf] [KDA] muse_spark: use BLOCK_M 240 for BF16 MegaMoE prefill shards
- [#41564](https://github.com/sgl-project/sglang/pull/41564) [Fix] [NPU] qwen: adapt pcp-v2
- [#45508](https://github.com/sgl-project/sglang/pull/45508) [Perf] [KDA] muse_spark: Run the one-token router GEMV on CuTe DSL
- [#45456](https://github.com/sgl-project/sglang/pull/45456) [Fix] [NVIDIA] docker: Disable torch 2.15 nccl2 in CUDA 13.4 container to fix EPLB rebalance crash
- [#45429](https://github.com/sgl-project/sglang/pull/45429) [Perf] [KDA] cookbook: enable custom all-reduce for GB300 BF16 Muse Spark
- [#45422](https://github.com/sgl-project/sglang/pull/45422) [Fix] [KDA] cookbook: add MoE runner backend to Muse Spark BF16 recipes
- [#45591](https://github.com/sgl-project/sglang/pull/45591) [Perf] moe: Add H200 block-FP8 Triton configurations
- [#45495](https://github.com/sgl-project/sglang/pull/45495) [Doc] Cookbook: update GB300 DSV4.1 disagg AgentX launches from InferenceX #4303

#### 🐛 New Issues
- [#45812](https://github.com/sgl-project/sglang/issues/45812) [Bug] scheduler: Priority preemption requeues victims in set order, which can differ across TP ranks 💬2
- [#45755](https://github.com/sgl-project/sglang/issues/45755) [Bug] Kimi-K3 on SM90: `flashinfer_mxfp4` silently computes GPT-OSS SwiGLU instead of SiTU 💬1
- [#45847](https://github.com/sgl-project/sglang/issues/45847) [Failure Tracker] PR Test (AMD) `ci-failure-tracker`
- [#45887](https://github.com/sgl-project/sglang/issues/45887) [Bug] FP8 fused MoE swap_ab fails to compile on Triton 3.9 with rank-0 scale indexing
- [#45866](https://github.com/sgl-project/sglang/issues/45866) [Bug] FP4 KV block scales are dropped by PD transfer and cpu_tensor retraction (fp4_mx_block16 gives garbage)
- [#45864](https://github.com/sgl-project/sglang/issues/45864) [Bug] PD decode: Qwen3.8-Flash-Next resumes with another request's QSA indexer state after retraction
- [#45850](https://github.com/sgl-project/sglang/issues/45850) [CI] [AMD] disaggregation: test_nixl_transfer_engine_e2e.py fails with NIXL_ERR_BACKEND (UCX destination unreachable)
- [#45849](https://github.com/sgl-project/sglang/issues/45849) [CI] [AMD] disaggregation: test_disaggregation_pp.py fails with Mooncake v0.3.14 (aux data sends over same-node RDMA)
- [#45846](https://github.com/sgl-project/sglang/issues/45846) [CI] test_basic_sanity_dspark.py fails on main: decode vs prefill top-logprob mismatch exceeds 0.5 delta
- [#45842](https://github.com/sgl-project/sglang/issues/45842) /v1/systemone requests are not aborted when the client disconnects (0.5.22)
- [#45841](https://github.com/sgl-project/sglang/issues/45841) [Feature] Treat max_tokens as an upper bound when the prompt fits the context
- [#45835](https://github.com/sgl-project/sglang/issues/45835) [Failure Tracker] PR Test (AMD) `ci-failure-tracker`
- [#45816](https://github.com/sgl-project/sglang/issues/45816) [RFC] Complete migration to the shared api.v1 backend API
- [#45786](https://github.com/sgl-project/sglang/issues/45786) [Bug] GB300 aarch64/MNNVL: NCCL initialization fails under Nsight Systems in v0.5.22 stack
- [#45781](https://github.com/sgl-project/sglang/issues/45781) [Bug] GLM-5.3 FP8 inference hangs after sustained workload with KV cache full (TP8, EAGLE, H200)
- [#45777](https://github.com/sgl-project/sglang/issues/45777) [Feature] Add Host Offloading and Asynchronous Prefetching for DeepSeek V4.1 Engram
- [#45773](https://github.com/sgl-project/sglang/issues/45773) [Bug] pause_generation(mode="abort") with --tokenizer-worker-num > 1 can let a request reach the scheduler after the KV cache is released
- [#45770](https://github.com/sgl-project/sglang/issues/45770) [Bug] EPD encoder allocates unused pinned embedding pools on nonzero TP ranks
- [#45697](https://github.com/sgl-project/sglang/issues/45697) [Bug] Kimi K3 tool-call parser (kimi_k3) does not stream tool-call arguments: whole call is buffered until <|close|>call, leaving the stream silent for minutes on long tool calls
- [#45695](https://github.com/sgl-project/sglang/issues/45695) [RFC]: add eagle4 spec decode

#### 🔒 Closed Issues
- [#35949](https://github.com/sgl-project/sglang/issues/35949) [Bug] Qwen 3.8 27b NVFP4 incorrect coordinate detection on image
- [#34737](https://github.com/sgl-project/sglang/issues/34737) [Bug] Stale staging watermark subscribers survive prefill failure
- [#36105](https://github.com/sgl-project/sglang/issues/36105) [Bug] `--model-path` required when `--config` is passed
- [#36083](https://github.com/sgl-project/sglang/issues/36083) [Feature] Extend cross-layer index-topk reuse (dsa_layer_skips_topk) to DeepSeek-V4
- [#36058](https://github.com/sgl-project/sglang/issues/36058) [Bug] /usr/bin/ld: cannot find -lcuda: No such file or directory collect2: error: ld returned 1 exit status ninja: build stopped: subcommand failed.
- [#36048](https://github.com/sgl-project/sglang/issues/36048) [Bug] Qwen3.8-27B AWQ has no usable fast path on single Ada SM89 32GB: CUDA graph hangs and native MTP cannot allocate requests
- [#40564](https://github.com/sgl-project/sglang/issues/40564) [Bug] MooncakeHostTensorAllocator wraps a null pointer from the host allocator instead of failing at the allocation site
- [#45094](https://github.com/sgl-project/sglang/issues/45094) [Feature] Reduce redundant tokenizer initialization during startup

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 132,054 · **Open issues:** 2,566 · **Last push:** 1h ago

On October 23, 2026, several new versions of llama.cpp were released, including b11829, which addressed issues with the rerank placeholder template, and b11828, which improved the realtime API to ensure that commits are sent after audio drains. Notably, b11827 introduced depthwise conv2d support in OpenCL, while b11826 added support for MiniCPM-OCR 1.0. Merged pull requests included enhancements to optimize inputs in glm5 (PR #30932) and fixes for the qwen4exp layer inputs (PR #30927). A significant new issue was reported regarding a Metal abort caused by certain matrix multiplication conditions on GPU (issue #30973).

#### 🚀 New Releases
- [b11829](https://github.com/ggml-org/llama.cpp/releases/tag/b11829) b11829
- [b11828](https://github.com/ggml-org/llama.cpp/releases/tag/b11828) b11828
- [b11827](https://github.com/ggml-org/llama.cpp/releases/tag/b11827) b11827
- [b11826](https://github.com/ggml-org/llama.cpp/releases/tag/b11826) b11826
- [b11823](https://github.com/ggml-org/llama.cpp/releases/tag/b11823) b11823
- [b11822](https://github.com/ggml-org/llama.cpp/releases/tag/b11822) b11822
- [b11821](https://github.com/ggml-org/llama.cpp/releases/tag/b11821) b11821
- [b11819](https://github.com/ggml-org/llama.cpp/releases/tag/b11819) b11819
- [b11818](https://github.com/ggml-org/llama.cpp/releases/tag/b11818) b11818
- [b11815](https://github.com/ggml-org/llama.cpp/releases/tag/b11815) b11815

#### ✅ Merged PRs
- [#30864](https://github.com/ggml-org/llama.cpp/pull/30864) server : substitute rerank placeholder from the original template only.
- [#30994](https://github.com/ggml-org/llama.cpp/pull/30994) server: realtime API: send complete after committed audio drains
- [#30900](https://github.com/ggml-org/llama.cpp/pull/30900) opencl: add depthwise conv2d
- [#30979](https://github.com/ggml-org/llama.cpp/pull/30979) mtmd : add MiniCPM-OCR 1.0 support
- [#30981](https://github.com/ggml-org/llama.cpp/pull/30981) model : include <algorithm> for std::find and std::copy
- [#29625](https://github.com/ggml-org/llama.cpp/pull/29625) server : support typed content input for RERANK endpoint
- [#30926](https://github.com/ggml-org/llama.cpp/pull/30926) Fix #30793
- [#30932](https://github.com/ggml-org/llama.cpp/pull/30932) glm5 : optimize inputs
- [#30927](https://github.com/ggml-org/llama.cpp/pull/30927) model : fix qwen4exp layer inputs for DFlash drafters
- [#29864](https://github.com/ggml-org/llama.cpp/pull/29864) Multi-column on Intel XMX matrix engines refactored
- [#30828](https://github.com/ggml-org/llama.cpp/pull/30828) Fix termux vulkan builds
- [#30957](https://github.com/ggml-org/llama.cpp/pull/30957) fix: Record layer inputs for all granite models
- [#30963](https://github.com/ggml-org/llama.cpp/pull/30963) ci : disable slow WebGPU tests
- [#23343](https://github.com/ggml-org/llama.cpp/pull/23343) nemotron : support non-standard GQA, BPE tokenizer and domyn-small pre-type
- [#30972](https://github.com/ggml-org/llama.cpp/pull/30972) ci : be able to reconfigure HTTP port for server pytest workers
- [#30363](https://github.com/ggml-org/llama.cpp/pull/30363) sycl: fix CONV_2D wrong results for non-contiguous input
- [#30940](https://github.com/ggml-org/llama.cpp/pull/30940) vocab : add clean_spaces GGUF key
- [#30960](https://github.com/ggml-org/llama.cpp/pull/30960) vocab : use Tekken pre-tokenizer for pixtral rather than the Llama 3 one
- [#30808](https://github.com/ggml-org/llama.cpp/pull/30808) kleidiai : add q8_0 sve gemm/gemv with 256 bit vector length kernels
- [#30740](https://github.com/ggml-org/llama.cpp/pull/30740) sycl: merge the fp16 and fp32 dequant switches
- [#30914](https://github.com/ggml-org/llama.cpp/pull/30914) webgpu : add Q2_0 support
- [#30945](https://github.com/ggml-org/llama.cpp/pull/30945) dflash : load optional FC input scale
- [#30681](https://github.com/ggml-org/llama.cpp/pull/30681) ui: Add "Show tool call in progress" setting
- [#30910](https://github.com/ggml-org/llama.cpp/pull/30910) lora : support prism.hadamard folded weights
- [#30919](https://github.com/ggml-org/llama.cpp/pull/30919) ui : key draft sidecar badges by model instead of repo

#### 🐛 New Issues
- [#30973](https://github.com/ggml-org/llama.cpp/issues/30973) Misc. bug: Metal aborts on MUL_MAT with BF16 src1 at K >= 64, batch > 8 (no BF16 mul_mm kernel) `bug-unconfirmed` 💬1
- [#30968](https://github.com/ggml-org/llama.cpp/issues/30968) Misc. bug: server: realtime commit completes the item before the flushed words are decoded `bug-unconfirmed` 💬1
- [#31007](https://github.com/ggml-org/llama.cpp/issues/31007) Compile bug: Compilation fails with older glibc. `bug-unconfirmed`
- [#31000](https://github.com/ggml-org/llama.cpp/issues/31000) Eval bug: Flint NVFP4: tool-call XML remains in reasoning, turn ends with stop (llama.cpp b11823 / OpenCode 2.1.2)
- [#30998](https://github.com/ggml-org/llama.cpp/issues/30998) Misc. bug: https://llama.app/install.sh doesn't add `~/.local/bin` to path, cannot find llama after install `bug-unconfirmed`
- [#30987](https://github.com/ggml-org/llama.cpp/issues/30987) Misc. bug: increasing -ncmoe!!! (or putting cmoe) leads to OOM on GPU `bug-unconfirmed`
- [#30989](https://github.com/ggml-org/llama.cpp/issues/30989) Compile bug: wavefront shifts are not supported on GFX10+ `bug-unconfirmed`
- [#30983](https://github.com/ggml-org/llama.cpp/issues/30983) OpenCL (Adreno): kernels fail to build on Adreno X1-45 (Snapdragon X X1-26-100, Windows) — driver lacks cl_khr_subgroups / cl_qcom_subgroup_shuffle `bug-unconfirmed`
- [#30975](https://github.com/ggml-org/llama.cpp/issues/30975) Misc. bug: llama-server teardown hangs after 'cleaning up before exit...' on first SIGTERM (spec decoder + quantized draft cache, CUDA); second signal terminates
- [#30961](https://github.com/ggml-org/llama.cpp/issues/30961) Eval bug: llama-server restores a cached prompt before idle slots are cleared, so the restore fails with a unified KV cache

#### 🔒 Closed Issues
- [#25060](https://github.com/ggml-org/llama.cpp/issues/25060) Misc. bug: Blackwell GGML-CUDA SOFT_MAX Crash
- [#28827](https://github.com/ggml-org/llama.cpp/issues/28827) Eval bug: gemma4 thinking starts to emit progressivly long trailing garbage
- [#27756](https://github.com/ggml-org/llama.cpp/issues/27756) Qwen3.5-hybrid 64-layer (Qwen3.8-27B): silent instant-EOS beyond ~130k context on both CUDA and CPU — consistent with DeltaNet recurrent-state depth × layer-count degradation
- [#28139](https://github.com/ggml-org/llama.cpp/issues/28139) server: pinning a request to an empty slot via id_slot skips the prompt cache
- [#28185](https://github.com/ggml-org/llama.cpp/issues/28185) Misc. bug: --tensor-split causes intermittent output degeneration on long-context MoE inference, independent of client (reproducible via raw API calls)
- [#28497](https://github.com/ggml-org/llama.cpp/issues/28497) Eval bug: qwen4exp QSA indexer top-k selects a different cell set each run on CUDA (CUB DeviceTopK over tied block scores)
- [#28515](https://github.com/ggml-org/llama.cpp/issues/28515) Compile bug: ggml_backend_sycl_device_get_memory aborts with "failed to get device memory size" on Intel Arc Pro B60 (Battlemage)
- [#30894](https://github.com/ggml-org/llama.cpp/issues/30894) Misc. bug: Nemotron 3 / 3.5 GGUFs are tagged "pixtral" and get the wrong pre-tokenizer
- [#26945](https://github.com/ggml-org/llama.cpp/issues/26945) Vulkan backend crash (STATUS_STACK_BUFFER_OVERRUN) when offloading 2+ repeating layers to GPU with qwen35moe (Gated Delta Net / Lightning Indexer / DeepSeek V4 HC)
- [#30905](https://github.com/ggml-org/llama.cpp/issues/30905) Misc. bug: llama_detokenize removes the space preceding "!", "?", ".", ",", and prior to "'s", "'re" for Gemma 4 and other vocabs whose Hugging Face tokenizer does not, so `x != y` turns into `x!= y`
- [#27580](https://github.com/ggml-org/llama.cpp/issues/27580) json_schema_to_grammar: regex shorthand classes (\d, \w, \s) in "pattern" are copied verbatim into GBNF, producing an unparseable grammar with no error
- [#28506](https://github.com/ggml-org/llama.cpp/issues/28506) Misc. bug: tensor split drifts from requested -ts ratio and results in OOM
- [#28524](https://github.com/ggml-org/llama.cpp/issues/28524) Eval bug: Quantized V cache terminates llama-server when Flash Attention is disabled
- [#30793](https://github.com/ggml-org/llama.cpp/issues/30793) Regression: first-inference TTFT 10s → 60s+ with large CPU-resident MoE weights after #30449
- [#28513](https://github.com/ggml-org/llama.cpp/issues/28513) Misc. bug: backend sampler probe hardcodes a 1M-row width, turning ARGSORT's fallback check into a hard gate
- [#28526](https://github.com/ggml-org/llama.cpp/issues/28526) Eval bug: --cache-reuse 1 returns HTTP 200 with an empty completion
- [#28546](https://github.com/ggml-org/llama.cpp/issues/28546) Feature Request: llama-bench --override-kv (model metadata overrides), as in llama-server / llama-cli
- [#30968](https://github.com/ggml-org/llama.cpp/issues/30968) Misc. bug: server: realtime commit completes the item before the flushed words are decoded
- [#30518](https://github.com/ggml-org/llama.cpp/issues/30518) Eval bug: NemotronForCausalLM with decoupled head_dim (head_dim != n_embd / n_head) fails to load ("error loading model: check_tensor_dims: tensor ... has wrong shape")
- [#30909](https://github.com/ggml-org/llama.cpp/issues/30909) Feature Request: LoRA adapters on prism.hadamard folded weights

### Ollama (`ollama/ollama`)

**Stars:** 184,343 · **Open issues:** 4,394 · **Last push:** <1h ago

Ollama released version v0.40.9, which introduces support for speech generation through Phonon on Apple Silicon, allowing users to play text and model replies aloud using the command `ollama run phonon "Hello from Ollama."` Additionally, the latest version enhances the d3 decision model. Key merged pull requests include improvements to cloud model metadata handling and fixes for failures in response streams. A noteworthy new issue has emerged regarding Gemma 4, where the thinking feature cannot be reliably disabled via the OpenAI-compatible API.

#### 🚀 New Releases
- [v0.40.9-rc3](https://github.com/ollama/ollama/releases/tag/v0.40.9-rc3) v0.40.9

#### ✅ Merged PRs
- [#19227](https://github.com/ollama/ollama/pull/19227) Support GA Gradium Phonon checkpoints
- [#19223](https://github.com/ollama/ollama/pull/19223) Make sure all launchers know about cloud model metadata
- [#19225](https://github.com/ollama/ollama/pull/19225) openai: preserve failures in Responses streams
- [#19098](https://github.com/ollama/ollama/pull/19098) anthropic: reuse resolved thinking for web search
- [#19216](https://github.com/ollama/ollama/pull/19216) flint: fix replies with thinking disabled
- [#19166](https://github.com/ollama/ollama/pull/19166) mlxrunner: add Phonon text-to-speech support
- [#19220](https://github.com/ollama/ollama/pull/19220) build: update jsonparser to v1.1.2
- [#19119](https://github.com/ollama/ollama/pull/19119) launch: use cloud model context in Claude Code
- [#19200](https://github.com/ollama/ollama/pull/19200) build: update Go toolchain and dependencies
- [#19196](https://github.com/ollama/ollama/pull/19196) mlx: add d3 decision model support

#### 🐛 New Issues
- [#19217](https://github.com/ollama/ollama/issues/19217) Bug Report: Gemma 4 thinking cannot be reliably disabled through OpenAI-compatible API `bug` 💬1
- [#19201](https://github.com/ollama/ollama/issues/19201) [Vulkan][AMD RADV] ~30× generation slowdown after first request with prompt cache enabled — Ollama 0.40.8 `bug` 💬1
- [#19204](https://github.com/ollama/ollama/issues/19204) size_vram under-reported when a llama-server buffer size line is split between pipe reads `bug`

#### 🔒 Closed Issues
- [#16033](https://github.com/ollama/ollama/issues/16033) CRITICAL and HIGH CVE Vulnerabilities reported in OLLAMA GOBinary
- [#18061](https://github.com/ollama/ollama/issues/18061) [Bug][Windows] Desktop app 0.33.1 fails to launch built-in server silently (server.log empty, no listener), manual `ollama serve` works
- [#18594](https://github.com/ollama/ollama/issues/18594) System 1 Models
- [#18505](https://github.com/ollama/ollama/issues/18505) [BUG] MLX nvfp4: admitted request stalls in prefill at processed=total-1 with zero tokens for minutes under sustained single-slot load; only runner SIGTERM recovers
- [#17016](https://github.com/ollama/ollama/issues/17016) dspark option
- [#18830](https://github.com/ollama/ollama/issues/18830) ollama list / GET /api/tags show a duplicate model and a bogus llamacpp:<sha> tag after the local compat GGUF migration
- [#19079](https://github.com/ollama/ollama/issues/19079) Cloud:DeepSeek-V4.1-Flash-1017
- [#18924](https://github.com/ollama/ollama/issues/18924) Error running rnj-1: llama-server process has terminated: GGML_ASSERT(hparams.is_swa_any()) failed: GGML_ASSERT(hparams.is_swa_any()) failed
- [#19162](https://github.com/ollama/ollama/issues/19162) Critical Go CVEs present in current binaries
- [#17118](https://github.com/ollama/ollama/issues/17118) Intermittent /v1/responses stream closes during reasoning without a terminal event
- [#18480](https://github.com/ollama/ollama/issues/18480) typical_p is no longer supported (status code: 400) from python API
- [#18666](https://github.com/ollama/ollama/issues/18666) Add Perplexity agentic browsing into ollama launch comet
- [#18667](https://github.com/ollama/ollama/issues/18667) ollama launch chrome
- [#19177](https://github.com/ollama/ollama/issues/19177) /v1/messages: errors after the first streamed chunk are dropped

### LiteLLM (`BerriAI/litellm`)

**Stars:** 61,838 · **Open issues:** 5,615 · **Last push:** <1h ago

On October 23, 2026, LiteLLM saw no new releases but a series of significant merged pull requests aimed at enhancing functionality and security. Key fixes included adjustments in the gateway and router components to improve cache handling and deployment retry logic, as well as addressing security concerns by stopping trust in the compromised eMudhra root CA. However, new issues have emerged, notably issue #47904 which highlights a need to backport a critical security fix to the stable 1.106.x branch, indicating ongoing concerns about the eMudhra CA presence in that version. Other notable bugs reported involve erroneous HTTP 500 responses from various API endpoints, including those related to completions and responses, which may affect user experience and system reliability.

#### ✅ Merged PRs
- [#47959](https://github.com/BerriAI/litellm/pull/47959) fix(gateway): place chat's cache_control_injection_points instead of sending them
- [#47962](https://github.com/BerriAI/litellm/pull/47962) fix(router): keep retrying once every deployment of a group has been tried
- [#47791](https://github.com/BerriAI/litellm/pull/47791) fix(model-catalog): read unknown model modes as absent instead of failing the map
- [#47670](https://github.com/BerriAI/litellm/pull/47670) fix(security): stop trusting the compromised eMudhra root CA

#### 🐛 New Issues
- [#47904](https://github.com/BerriAI/litellm/issues/47904) [Bug]: Backport eMudhra root CA fix (#47670) to stable/1.106.x — 1.106.x images still trust emSign ECC Root CA - G3 💬5
- [#47924](https://github.com/BerriAI/litellm/issues/47924) [Bug]: reasoning_effort="none" omits thinking instead of disabling it on default-on Claude models `llm translation` 💬3
- [#47952](https://github.com/BerriAI/litellm/issues/47952) [Bug]: /v1/messages/count_tokens returns 500 for a `search_result` block, and for any content block type the local counter does not list `llm translation` 💬2
- [#47908](https://github.com/BerriAI/litellm/issues/47908) [Bug]: spend is 0 when base_model names a priced model and custom_llm_provider differs `llm translation` 💬2
- [#47951](https://github.com/BerriAI/litellm/issues/47951) [Bug]: /v1/completions with `response_format` returns 500 "AsyncCompletions.create() got an unexpected keyword argument 'response_format'" `llm translation` 💬2
- [#47946](https://github.com/BerriAI/litellm/issues/47946) [Bug]: Non-streamed /v1/messages response has no `stop_sequence` key unless a stop sequence fired (hosted_vllm) `llm translation` 💬2
- [#47947](https://github.com/BerriAI/litellm/issues/47947) [Bug]: Proxy rewrites JSON integers larger than 64 bits as floats before forwarding (e.g. a tool schema `maximum` of 12345678901234567890123 reaches the model as 1.2345678901234568e+22) 💬1
- [#47950](https://github.com/BerriAI/litellm/issues/47950) [Bug]: A Chat message with an unknown content part type, or a Completions `prompt` of the wrong type, gets HTTP 500 APIConnectionError and is retried `llm translation` 💬1
- [#47931](https://github.com/BerriAI/litellm/issues/47931) [Bug]: Groq rejects the next turn after a streamed reasoning reply because reasoning_content is sent back `llm translation` 💬1
- [#47922](https://github.com/BerriAI/litellm/issues/47922) [Bug]: ModelNotMappedError in litellm/utils.py `bug` `llm translation` 💬1
- [#47918](https://github.com/BerriAI/litellm/issues/47918) [Bug]: /v1/responses rejects spec-valid assistant history messages (output_text parts) with HTTP 500 `llm translation` 💬1
- [#47898](https://github.com/BerriAI/litellm/issues/47898) [Bug]: OTel v2 LangfuseMapper drops langfuse.environment / release / version (parity regression from OTel v1) `llm translation` 💬1
- [#47895](https://github.com/BerriAI/litellm/issues/47895) [Bug]: Tool results with images fail on Gemini 2.5 since v1.89.0 ("Multimodal function responses are not supported for this model") `llm translation` `claude code` 💬1
- [#47975](https://github.com/BerriAI/litellm/issues/47975) [Bug]: /v1/realtime with Gemini Live stalls after the first output_audio_transcript.delta when the turn is triggered by streamed audio (text-triggered turns work) `llm translation`
- [#47965](https://github.com/BerriAI/litellm/issues/47965) [Bug]: Cloudflare decisions provider uses the /ai/run path the chat provider calls 'legacy' — inconsistent and undocumented `llm translation`
- [#47964](https://github.com/BerriAI/litellm/issues/47964) [Bug]: PATCH /model/{id}/update returns 200 but litellm_params.model / api_base / api_key are never applied (silent no-op) `llm translation`
- [#47953](https://github.com/BerriAI/litellm/issues/47953) [Bug]: Streamed /v1/completions without `stream_options` puts `"usage": {0, 0, 0}` on every chunk `llm translation`
- [#47949](https://github.com/BerriAI/litellm/issues/47949) [Bug]: Errors relayed from an OpenAI-compatible backend lose `param` and arrive as a stringified JSON (or Python repr) inside `message` `llm translation`
- [#47948](https://github.com/BerriAI/litellm/issues/47948) [Bug]: /v1/messages still answers auth, model-access and malformed-JSON errors in the OpenAI error shape `llm translation`
- [#47945](https://github.com/BerriAI/litellm/issues/47945) [Feature]: hosted_vllm Chat Completions: keep vLLM's `stop_reason` and `token_ids` on the choice, as /v1/completions and streamed Chat already do `llm translation`
- [#47944](https://github.com/BerriAI/litellm/issues/47944) [Bug]: Streamed /v1/responses through the proxy has no SSE `event:` lines and ends with `data: [DONE]` `llm translation`
- [#47935](https://github.com/BerriAI/litellm/issues/47935) [Bug]: Logging Request Metadata - Crashes `bug`
- [#47932](https://github.com/BerriAI/litellm/issues/47932) [Bug]: Vertex AI rerank reloads Google credentials on every request `llm translation`
- [#47927](https://github.com/BerriAI/litellm/issues/47927) [Bug]: Responses WebSocket bypasses request-selected pre-call guardrails `llm translation`
- [#47923](https://github.com/BerriAI/litellm/issues/47923) [Feature]: Support WAV format for Elevenlabs `enhancement`
- [#47896](https://github.com/BerriAI/litellm/issues/47896) [Feature]: Per-model-group (or per-key) opt-in for cancel_on_disconnect `llm translation`

#### 🔒 Closed Issues
- [#30118](https://github.com/BerriAI/litellm/issues/30118) [Bug]: UI login redirects to internal Docker container IP after upgrade to v1.88.x (regression from v1.87.0)
- [#25390](https://github.com/BerriAI/litellm/issues/25390) Anthropic /v1/messages streaming drops tool_use.input for gemini/gemma-4-31b-it while non-streaming works
- [#27284](https://github.com/BerriAI/litellm/issues/27284) FIPS compliance of hash algo scrypt
- [#29755](https://github.com/BerriAI/litellm/issues/29755) RateLimitError handling with Groq provider
- [#43486](https://github.com/BerriAI/litellm/issues/43486) [Bug]: user_config routing discards the Router before the call runs

### Unsloth (`unslothai/unsloth`)

**Stars:** 78,435 · **Open issues:** 418 · **Last push:** <1h ago

On October 23, 2026, there were no new releases for Unsloth. However, several significant pull requests were merged, including updates to the studio components, such as restoring media model pricing after a failed replacement (#14826), enhancing video stream handling in the VAE decode graph (#14822), and optimizing the handling of resident GGUFs during reload operations (#14828). Additional improvements focused on testing and performance, such as skipping faulty tests on ROCm (#14618) and introducing automated checks for model configurations (#14746). Meanwhile, new issues surfaced, including a bug related to unreadable attachments after auto-compaction (#14708) and a request for support for larger chat templates (#14841), hinting at areas for future development.

#### ✅ Merged PRs
- [#14826](https://github.com/unslothai/unsloth/pull/14826) Studio: restore a kept media model's price after a failed replacement
- [#14822](https://github.com/unslothai/unsloth/pull/14822) Studio video: keep the stream encode hook out of a compiled VAE decode graph
- [#14828](https://github.com/unslothai/unsloth/pull/14828) Studio images: keep the resident GGUF's base repo on Reapply and native reload
- [#14825](https://github.com/unslothai/unsloth/pull/14825) Studio MCP: drop a queued video's request and caller once it settles
- [#14817](https://github.com/unslothai/unsloth/pull/14817) Apply the repo formatter to 26 files merged without it
- [#14618](https://github.com/unslothai/unsloth/pull/14618) Studio tests: skip the two-card fast pin test on ROCm instead of erroring
- [#14809](https://github.com/unslothai/unsloth/pull/14809) Studio tests: compare MLX snapshot paths as paths, not posix strings
- [#14739](https://github.com/unslothai/unsloth/pull/14739) FSDP2 NF4 saves: stage packed bytes on the CPU, restore QuantState on full DCP load
- [#14779](https://github.com/unslothai/unsloth/pull/14779) Attention: let the SDPA GQA probe trace under torch.compile(dynamic=True)
- [#14806](https://github.com/unslothai/unsloth/pull/14806) Fused LoRA: fall back to PEFT for variants, disabled or merged adapters, trainable bases and autocast dtype mismatches
- [#14767](https://github.com/unslothai/unsloth/pull/14767) Studio diffusion: fast whole-component swap for low_vram offload
- [#14804](https://github.com/unslothai/unsloth/pull/14804) Studio tests: pin the card name in the learned-peaks store fixture
- [#14802](https://github.com/unslothai/unsloth/pull/14802) Studio: cap Pillow below 13 for the MLX image engine
- [#14793](https://github.com/unslothai/unsloth/pull/14793) Studio MLX images: plan text encoder and dense bits from the Metal working set
- [#14794](https://github.com/unslothai/unsloth/pull/14794) Studio MLX images: convert Q4_K / Q5_K / Q6_K and Q5_0 / Q5_1 GGUFs
- [#14813](https://github.com/unslothai/unsloth/pull/14813) FP8 block decode: weight-only GEMV where it beats the block GEMM, fused small-M called directly
- [#14702](https://github.com/unslothai/unsloth/pull/14702) QAT: fake quantize Gemma embeddings on the float32 and Accelerate-hooked paths
- [#14796](https://github.com/unslothai/unsloth/pull/14796) Studio MLX images: tile the VAE decode when the untiled one would not fit
- [#14787](https://github.com/unslothai/unsloth/pull/14787) MoE grouped GEMM: skip kernel-info logging work unless debug logging is on
- [#14653](https://github.com/unslothai/unsloth/pull/14653) Studio video: stream-encode Wan clips under the ROCm bf16 VAE decode
- [#14720](https://github.com/unslothai/unsloth/pull/14720) Studio diffusion: seed dense fp16 denoisers on the default and max tiers from measured peaks
- [#14654](https://github.com/unslothai/unsloth/pull/14654) Studio diffusion: read ROCm from the wheel tag in every fast-path gate
- [#14771](https://github.com/unslothai/unsloth/pull/14771) Studio: resolve torchao's int8 GEMM home before the int8 fused install returns
- [#14746](https://github.com/unslothai/unsloth/pull/14746) Studio Images: detect v-prediction SDXL fine-tunes from their own config, not their name
- [#14734](https://github.com/unslothai/unsloth/pull/14734) Studio diffusion: one host read per guided step in the CFG-batch and CFG-parallel argument checks
- [#14784](https://github.com/unslothai/unsloth/pull/14784) MXFP4 packed Linear: bound the below-sm_80 weight decode by free memory
- [#14624](https://github.com/unslothai/unsloth/pull/14624) Studio Images: Compare grid (X/Y/Z plot)
- [#14788](https://github.com/unslothai/unsloth/pull/14788) Fused preference loss: fall back when lm_head has module backward hooks
- [#14778](https://github.com/unslothai/unsloth/pull/14778) Gemma 4 vLLM fallback: check the engine's GPU, not the current one
- [#14759](https://github.com/unslothai/unsloth/pull/14759) MoE dW accumulation: fall back when autograd Node hooks can rewrite dW
- [#14756](https://github.com/unslothai/unsloth/pull/14756) GRPO routing replay: prime router formulas before compile and score the PEFT reference without replay
- [#14735](https://github.com/unslothai/unsloth/pull/14735) Studio: size auto-quantised text encoders at the hosted file in the image picker
- [#14657](https://github.com/unslothai/unsloth/pull/14657) Studio diffusion: Automatic multi-GPU placement fixes and a placement decision in status
- [#14627](https://github.com/unslothai/unsloth/pull/14627) Studio Images: run Krea 2 GGUFs on stable-diffusion.cpp on CPU-only hosts
- [#13879](https://github.com/unslothai/unsloth/pull/13879) Studio: show a checkpoint's training loss when that step also evaluated
- [#14751](https://github.com/unslothai/unsloth/pull/14751) MoE autotune cache: pick kernel configs for the operands' GPU
- [#14786](https://github.com/unslothai/unsloth/pull/14786) RMSNorm kernels: do not specialize on the row count and row stride
- [#14792](https://github.com/unslothai/unsloth/pull/14792) FP8 block decode: fused act_quant and narrow-N GEMM for 1 to 16 tokens
- [#14791](https://github.com/unslothai/unsloth/pull/14791) FP8 rowwise decode: one multi-row GEMV launch for 2 to 16 tokens
- [#14789](https://github.com/unslothai/unsloth/pull/14789) tests: keep the fused-NVFP4 env in place after the split-reduction hook override
- [#14466](https://github.com/unslothai/unsloth/pull/14466) perf(studio): prefill MLX loads in the planned step while experts are on disk
- [#14626](https://github.com/unslothai/unsloth/pull/14626) Studio: build the CFG-parallel replica outside inference mode and catch in-place edits of inference weights
- [#14692](https://github.com/unslothai/unsloth/pull/14692) Studio diffusion: change baked LoRA subsets and weights without recompiling or recapturing
- [#14651](https://github.com/unslothai/unsloth/pull/14651) Studio Images: Hires fix and ESRGAN model upscalers
- [#14752](https://github.com/unslothai/unsloth/pull/14752) Two-GPU decode RoPE test: check the copy bitwise and the rounding at 2 ulp
- [#14745](https://github.com/unslothai/unsloth/pull/14745) MoE LoRA targets: keep a requested router sibling when attention modules are also listed
- [#14754](https://github.com/unslothai/unsloth/pull/14754) 4-bit decode: no recompile from the eager setup, one output dtype under autocast, refresh the cached LoRA cast
- [#14782](https://github.com/unslothai/unsloth/pull/14782) Compiled blocks: packed GatedDeltaNet op, flex main kernel in training blocks, PrefixGrouper calls skip the block (0 graph breaks)
- [#14659](https://github.com/unslothai/unsloth/pull/14659) Studio NVFP4: keep ungated and gate-failing video builds out of Auto, check flashinfer against the gate record
- [#14222](https://github.com/unslothai/unsloth/pull/14222) Studio: clamp the top_k a model passes to search_knowledge_base
- [#14694](https://github.com/unslothai/unsloth/pull/14694) Studio sd.cpp: one CPU thread per usable physical core on Linux
- [#14704](https://github.com/unslothai/unsloth/pull/14704) Block compile: let an enclosing torch.compile own wrapped decoder layers
- [#14715](https://github.com/unslothai/unsloth/pull/14715) Studio diffusion: arm Z-Image's prompt-length inputs for an int8 / fp8 compile
- [#14724](https://github.com/unslothai/unsloth/pull/14724) FSDP2 QLoRA: keep 4-bit merge operands on one device in push_to_hub_merged
- [#14689](https://github.com/unslothai/unsloth/pull/14689) Studio diffusion: arm FLUX.1 prompt-length dynamic shapes so int8 does not recompile on a long prompt or new size
- [#14666](https://github.com/unslothai/unsloth/pull/14666) Studio diffusion: replay a model-offloaded denoiser's CUDA graph across renders and pin torchao int8 host weights
- [#14656](https://github.com/unslothai/unsloth/pull/14656) Studio diffusion: report compile and CUDA graph engagement in the image and video status
- [#14703](https://github.com/unslothai/unsloth/pull/14703) NVFP4 QAT: require in_features divisible by 32
- [#14697](https://github.com/unslothai/unsloth/pull/14697) Studio sd.cpp: BF16 text encoders by default (Q8_0 / Q4_K_M changed pixels), opt-in lower precision
- [#14631](https://github.com/unslothai/unsloth/pull/14631) Studio diffusion: give stored-fp8 denoisers their own planner label instead of dense
- [#14613](https://github.com/unslothai/unsloth/pull/14613) Images: refuse Flux base / max shift values that build NaN sigmas
- [#14652](https://github.com/unslothai/unsloth/pull/14652) Studio diffusion: keep CFG batching off for a resident denoiser with no device timer (CPU, MPS)
- [#14614](https://github.com/unslothai/unsloth/pull/14614) CFG-parallel: treat a changed Python number, storage offset or autocast as a cold call
- [#12650](https://github.com/unslothai/unsloth/pull/12650) Unsloth Studio (Vulkan): fill the discrete GPU before a shared-memory iGPU in a mixed pin
- [#14326](https://github.com/unslothai/unsloth/pull/14326) feat(studio): MLX PLE and expert offload in Unsloth Studio
- [#14750](https://github.com/unslothai/unsloth/pull/14750) NVFP4: keep fast decode callers in the activation dtype under autocast
- [#14593](https://github.com/unslothai/unsloth/pull/14593) Studio: upgrade a Desktop Chat only install to the full install from Settings
- [#14677](https://github.com/unslothai/unsloth/pull/14677) FP8 dequant: multiply per-tensor and rowwise scales in fp32 for fp16 output
- [#14741](https://github.com/unslothai/unsloth/pull/14741) tests: restore transformers' Fp8Dequantize after the fp8 save policy tests
- [#14557](https://github.com/unslothai/unsloth/pull/14557) Studio: let the owner turn off the Decision API while a model loads
- [#14289](https://github.com/unslothai/unsloth/pull/14289) Studio: transcribe audio through a saved connection on the Audio page
- [#14598](https://github.com/unslothai/unsloth/pull/14598) Studio: warn when a GGUF is tight for Apple unified memory
- [#14723](https://github.com/unslothai/unsloth/pull/14723) MoE grouped GEMM: keep the legacy dW kernel when an explicit tile overflows per-expert shared memory
- [#13427](https://github.com/unslothai/unsloth/pull/13427) Studio: lower the VRAM budget floor to 10% for multi-GPU spreading
- [#14596](https://github.com/unslothai/unsloth/pull/14596) Studio settings: fix API, Connections, Remote access and LAN issues
- [#14592](https://github.com/unslothai/unsloth/pull/14592) Studio: lighter system polling and clearer unified-memory monitor
- [#14672](https://github.com/unslothai/unsloth/pull/14672) Attention routing tests: follow torch's own GQA kernel choice (fixes two failures on torch 2.14)
- [#14678](https://github.com/unslothai/unsloth/pull/14678) FP8: keep every scoped converter and clean up every dequantizing load before save
- [#14499](https://github.com/unslothai/unsloth/pull/14499) Studio: extract ebooks, Office files and email in Data Recipes document seeds
- [#14488](https://github.com/unslothai/unsloth/pull/14488) Studio: stop the SDPA probe reporting fused attention on MPS
- [#13639](https://github.com/unslothai/unsloth/pull/13639) FastSentenceTransformer: non-reentrant gradient checkpointing under DDP for encoder models
- [#14555](https://github.com/unslothai/unsloth/pull/14555) Studio: unload an idle decision model when another model loads
- [#14500](https://github.com/unslothai/unsloth/pull/14500) Studio: optional reply times in Settings > Chat
- [#14453](https://github.com/unslothai/unsloth/pull/14453) feat: add EPUB and optional MOBI dataset loading
- [#14575](https://github.com/unslothai/unsloth/pull/14575) Studio: stop showing a crashed chat model as loaded
- [#14595](https://github.com/unslothai/unsloth/pull/14595) Studio: cut polled-probe cost and release memory sooner
- [#14669](https://github.com/unslothai/unsloth/pull/14669) Studio: keep the image info stamp off by default, recipe stays in the metadata
- [#14585](https://github.com/unslothai/unsloth/pull/14585) Chat: the composer dock stops searching the whole thread on every com…
- [#14663](https://github.com/unslothai/unsloth/pull/14663) Native FSDP2 float16: fix fused AdamW crashing at the first step
- [#14288](https://github.com/unslothai/unsloth/pull/14288) Studio: speak through a saved connection on the Audio page
- [#14658](https://github.com/unslothai/unsloth/pull/14658) Windows UI lane: retry the permission suite's auth wipe while the stopped server releases auth.db
- [#14661](https://github.com/unslothai/unsloth/pull/14661) Gate the fused decode RoPE tests on a real CUDA device, not the spoofable probe
- [#14290](https://github.com/unslothai/unsloth/pull/14290) Studio: open localhost addresses typed in the desktop browser panel
- [#13874](https://github.com/unslothai/unsloth/pull/13874) Trim comments in the Studio backend tests
- [#13859](https://github.com/unslothai/unsloth/pull/13859) Trim comments in the Studio frontend tests
- [#14647](https://github.com/unslothai/unsloth/pull/14647) Studio composer icon check: re-measure a case when the dev page reloads mid-case
- [#14612](https://github.com/unslothai/unsloth/pull/14612) Unsloth Studio: serve an MLX model through the library that loaded it
- [#14556](https://github.com/unslothai/unsloth/pull/14556) Studio: stop a Clef decision model from outliving a crashed Unsloth
- [#14637](https://github.com/unslothai/unsloth/pull/14637) RMSNorm: enable the narrow-row kernels on ROCm with the DPP reduction order
- [#14639](https://github.com/unslothai/unsloth/pull/14639) Fix save_pretrained_torchao for full finetuning QAT on transformers 5
- [#14573](https://github.com/unslothai/unsloth/pull/14573) Studio: load GGUF models faster by skipping the vocabulary read
- [#14620](https://github.com/unslothai/unsloth/pull/14620) Studio diffusion: test First Block Cache on a two-card FLUX.2 layer split
- [#14574](https://github.com/unslothai/unsloth/pull/14574) Studio: stop long MLX chats from re-reading the whole chat every turn
- [#14649](https://github.com/unslothai/unsloth/pull/14649) Studio Settings: stop forcing a GitHub release lookup on every Settings open
- [#14590](https://github.com/unslothai/unsloth/pull/14590) Studio: engine versions and updates in Settings, Use via API for Images and Video, shorter Notifications, rounder waveforms
- [#14628](https://github.com/unslothai/unsloth/pull/14628) MoE LoRA: widen gate_up_proj to split gate_proj / up_proj experts when down_proj already matches
- [#14625](https://github.com/unslothai/unsloth/pull/14625) NVFP4 fused GEMM: honor autocast dtype and check K alignment for dX
- [#14636](https://github.com/unslothai/unsloth/pull/14636) Studio: name an untitled chat's fork after its first reply (follow-up to #14587)
- [#14629](https://github.com/unslothai/unsloth/pull/14629) Studio: default scheme-less public provider URLs to https (follow-up to #14594)
- [#14635](https://github.com/unslothai/unsloth/pull/14635) unsloth start: hard-link only auth.json into the Codex parent overlay (follow-up to #14591)
- [#14638](https://github.com/unslothai/unsloth/pull/14638) Studio: keep folder identity lookups inside the scan budget (follow-up to #14588)
- [#14634](https://github.com/unslothai/unsloth/pull/14634) Studio: keep Projects page renames and deletes from waiting out a streaming reply
- [#14630](https://github.com/unslothai/unsloth/pull/14630) Studio: busiest day keeps the darkest token activity shade (follow-up to #14600)
- [#14633](https://github.com/unslothai/unsloth/pull/14633) Studio: shortcut follow-up to #14597 for Swiss/Turkish digit chords and Esc-to-stop
- [#14632](https://github.com/unslothai/unsloth/pull/14632) Give the single-row cached attention harness CPU stand-ins for the fused decode RoPE kernels
- [#14558](https://github.com/unslothai/unsloth/pull/14558) Studio: refuse Laya choice questions whose options would be cut short
- [#14580](https://github.com/unslothai/unsloth/pull/14580) Studio: keep Decision API models out of the chat model picker
- [#14537](https://github.com/unslothai/unsloth/pull/14537) Studio: accept skills whose description has an unquoted colon
- [#14538](https://github.com/unslothai/unsloth/pull/14538) Studio: say when an attached image is over the 20 MB limit
- [#14496](https://github.com/unslothai/unsloth/pull/14496) Studio: OpenAI-compatible fine-tuning jobs API (/v1/files, /v1/fine_tuning/jobs)
- [#14608](https://github.com/unslothai/unsloth/pull/14608) NF4 bitsandbytes GEMM gate: return before its lazy setup under torch.compile
- [#14562](https://github.com/unslothai/unsloth/pull/14562) Studio Images: SDXL prompt weighting, CLIP skip, CFG rescale and variation seeds
- [#14617](https://github.com/unslothai/unsloth/pull/14617) MoE autotune cache: version disk entries and refit loaded configs
- [#14361](https://github.com/unslothai/unsloth/pull/14361) Studio: resize the sliding pill with transforms, so it keeps pace with the move
- [#14611](https://github.com/unslothai/unsloth/pull/14611) Fused decode RoPE: drop the per-layer host drain on split models
- [#14609](https://github.com/unslothai/unsloth/pull/14609) Fast LayerNorm backward: no aliased gradient buffers when only one of weight / bias trains
- [#14589](https://github.com/unslothai/unsloth/pull/14589) Studio Run settings: restore saved settings on a fresh editor, show save state, group Advanced rows
- [#14594](https://github.com/unslothai/unsloth/pull/14594) Studio: more accurate connection checks and clearer errors
- [#14604](https://github.com/unslothai/unsloth/pull/14604) FLUX.3 upsampler: name older NVIDIA Vulkan devices as NVIDIA, probe an empty answer once per window
- [#14597](https://github.com/unslothai/unsloth/pull/14597) Studio: shortcut fixes for non-US layouts, Esc and Cmd-K, plus clearer settings
- [#14600](https://github.com/unslothai/unsloth/pull/14600) Studio: token activity shows a year of quartile-shaded days, with accurate counts behind it
- [#14601](https://github.com/unslothai/unsloth/pull/14601) Studio: loaded models card and live monitor fixes
- [#14605](https://github.com/unslothai/unsloth/pull/14605) MoE grouped GEMM: no lock on cached autotuner launches; read the SM count once per card
- [#14588](https://github.com/unslothai/unsloth/pull/14588) Studio: faster, clearer model folder management
- [#14591](https://github.com/unslothai/unsloth/pull/14591) unsloth start: fix Studio discovery, proxy, Hermes context, Claude hooks and Codex login
- [#14607](https://github.com/unslothai/unsloth/pull/14607) QAT: qat_scheme = "mxfp8", and let MX QAT linears take float32 activations under autocast
- [#14586](https://github.com/unslothai/unsloth/pull/14586) Studio: Projects recency by chat activity, less polling behind projects and sources
- [#14587](https://github.com/unslothai/unsloth/pull/14587) Studio: chat fork fixes and clearer fork affordances
- [#14602](https://github.com/unslothai/unsloth/pull/14602) Studio: show relative and blob Hugging Face images in Hub model cards
- [#14548](https://github.com/unslothai/unsloth/pull/14548) Honor requested languages for Studio Qwen3-ASR transcription
- [#14599](https://github.com/unslothai/unsloth/pull/14599) Fast decode: rotate Q and K in one launch, and fuse Qwen3 q/k norm with RoPE
- [#14540](https://github.com/unslothai/unsloth/pull/14540) Keep Unsloth Studio data after docker rm on CPU-only Docker hosts
- [#14584](https://github.com/unslothai/unsloth/pull/14584) RoPE cache: build cos/sin outside inference_mode so GRPO keeps the compiled decoder block
- [#14583](https://github.com/unslothai/unsloth/pull/14583) Studio diffusion: latch failed fused fp16 RoPE and AdaLN launches for the load
- [#14581](https://github.com/unslothai/unsloth/pull/14581) Studio video: export GIFs with one clip-wide palette (about 3x faster)
- [#14566](https://github.com/unslothai/unsloth/pull/14566) Studio diffusion: turn on the measured-safe optimizations by default (fused FLUX RoPE, CFG batching, Blackwell native attention, BF16 small DiTs)
- [#14564](https://github.com/unslothai/unsloth/pull/14564) Studio: keep CFG-parallel on the default speed tier and run Z-Image's guidance branches on two cards
- [#14549](https://github.com/unslothai/unsloth/pull/14549) Studio diffusion: keep fp8 single-file weights stored in fp8 where widening would offload or crowd host RAM

#### 🐛 New Issues
- [#14680](https://github.com/unslothai/unsloth/issues/14680) custom greeeting text & different configuration per user... `feature request` 💬1
- [#14764](https://github.com/unslothai/unsloth/issues/14764) [Bug] Arrow key problem in MacOS chat window `feature request` `bug` 💬1
- [#14783](https://github.com/unslothai/unsloth/issues/14783) [Bug] Unsloth Desktop request edits tool change Unsloth Browser to code view instead of staying on rendered preview page `feature request` `bug`
- [#14708](https://github.com/unslothai/unsloth/issues/14708) [Bug] Attachments (images/PDFs) become permanently unreadable after auto-compaction, and `search_conversation` never being invoked `feature request` `bug` 💬1
- [#14695](https://github.com/unslothai/unsloth/issues/14695) [Bug] failed to load DeepSeek-V4.1-Flash-1017 (pls fix or tell working model link/name) `feature request` `bug` 💬1
- [#14841](https://github.com/unslothai/unsloth/issues/14841) [Issue] Need support for larger chat templates `feature request` `bug`
- [#14811](https://github.com/unslothai/unsloth/issues/14811) [Feature] Allow custom headers for remote providers `feature request`
- [#14807](https://github.com/unslothai/unsloth/issues/14807) [Bug] Unsloth Studio Intel XPU LoRA inference mixes GNU and MSVC linker arguments on Windows `feature request` `bug`
- [#14766](https://github.com/unslothai/unsloth/issues/14766) [Feature] Automate the curl -sL https://unsloth.ai/docs/llms-full.txt https://unsloth.ai/docs/llms-full.txt/1 > unsloth-docs.md for each Unsloth Release `feature request`
- [#14743](https://github.com/unslothai/unsloth/issues/14743) [Feature] Remember disabled thinking setting `feature request`
- [#14688](https://github.com/unslothai/unsloth/issues/14688) [Bug] Models with remote code can't be exported from UI `feature request` `bug`
- [#14660](https://github.com/unslothai/unsloth/issues/14660) [Feature] Omnivoice full model inference and finetune (lora/full) `feature request`
- [#14650](https://github.com/unslothai/unsloth/issues/14650) Lemonade & FastFlowLM chat and models stopped working

#### 🔒 Closed Issues
- [#14377](https://github.com/unslothai/unsloth/issues/14377) [Feature]Native Support for EPUB and MOBI File Formats in Unsloth
- [#13673](https://github.com/unslothai/unsloth/issues/13673) [Feature] give option to add timestamp on prompt responses
- [#14257](https://github.com/unslothai/unsloth/issues/14257) [Feature]: Add a setting to allow localhost sites to be opened in the built-in browser
- [#12051](https://github.com/unslothai/unsloth/issues/12051) Context parallel does not support Qwen3.5 GatedDeltaNet
- [#14680](https://github.com/unslothai/unsloth/issues/14680) custom greeeting text & different configuration per user...
- [#13598](https://github.com/unslothai/unsloth/issues/13598) [Feature] allow VRAM budget floor of 0% for multi-GPU spreading
- [#14506](https://github.com/unslothai/unsloth/issues/14506) [Bug] Leave original model selected (by default) when multiple models + multiple conversations are loaded
- [#13603](https://github.com/unslothai/unsloth/issues/13603) [Feature] OpenAI-compatible Fine-tuning Jobs API for Unsloth Studio
- [#14194](https://github.com/unslothai/unsloth/issues/14194) [Feature] Allow using external connections from the Audio tools
- [#14547](https://github.com/unslothai/unsloth/issues/14547) [Bug] Studio Qwen3-ASR ignores the requested transcription language in the mtmd backend

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,159 · **Open issues:** 368 · **Last push:** 1h ago

On October 23, 2026, there were no new releases for AIBrix, but significant progress was made with the merging of several pull requests. Key bug fixes included addressing issues related to the KV cache management and model download errors, such as preventing a prefix-matched pod from being selected improperly (#3256) and ensuring that the job's client request timeout applies correctly to batch inference requests (#3205). Of notable interest, the introduction of a feature that cuts gateway routing costs per pod without altering the decision-making process (#3254) could optimize resource management. Additionally, a new issue was raised regarding the inability of the model runtime to download specific artifact URLs, indicating ongoing challenges with the ModelClaim API (#3259).

#### ✅ Merged PRs
- [#3256](https://github.com/vllm-project/aibrix/pull/3256) [Bug] Skip a prefix-matched pod far above the pool mean at any pool size
- [#3249](https://github.com/vllm-project/aibrix/pull/3249) [Bug] Stop KPA rounding a whole pod count up by floating-point error
- [#3248](https://github.com/vllm-project/aibrix/pull/3248) [Misc] chart: ensure kubernetes common labels are set
- [#3258](https://github.com/vllm-project/aibrix/pull/3258) [Bug] Raise model download errors instead of passing the raw path to the engine
- [#3240](https://github.com/vllm-project/aibrix/pull/3240) [Bug] Keep all of a KV cache pod's slot ranges when it owns the first and last slot
- [#3218](https://github.com/vllm-project/aibrix/pull/3218) [Bug] Return an error status when the Redis cluster meta key is missing
- [#3205](https://github.com/vllm-project/aibrix/pull/3205) [Bug] Apply the job's client request timeout to batch inference requests
- [#3203](https://github.com/vllm-project/aibrix/pull/3203) [Bug] Recover KV event replay across every remaining sequence gap
- [#3211](https://github.com/vllm-project/aibrix/pull/3211) [Bug] Apply updated GPU profiles to deployments registered by namespace
- [#3209](https://github.com/vllm-project/aibrix/pull/3209) [Bug] Decode prefix and query tokens from the packed token area
- [#3207](https://github.com/vllm-project/aibrix/pull/3207) [Bug] Keep ghost entry sizes so the S3FIFO ghost fifo is trimmed
- [#3191](https://github.com/vllm-project/aibrix/pull/3191) [Bug] Correct batch engine argument mappings for SGLang and vLLM
- [#3234](https://github.com/vllm-project/aibrix/pull/3234) [Gateway] Support PD routing for /v1/responses on vLLM and SGLang
- [#3254](https://github.com/vllm-project/aibrix/pull/3254) [Feat] Cut gateway routing cost per pod without changing the decision rule
- [#3224](https://github.com/vllm-project/aibrix/pull/3224) [Bug] Skip a prefill pod far above the pool mean at any pool size
- [#3251](https://github.com/vllm-project/aibrix/pull/3251) [Bug] Keep the placement turn of a ModelClaim refused before its runtime answered

#### 🐛 New Issues
- [#3259](https://github.com/vllm-project/aibrix/issues/3259) Model runtime cannot download gcs:// artifact URLs that the ModelClaim API lists as supported `kind/bug` `area/runtime` 💬2
- [#3266](https://github.com/vllm-project/aibrix/issues/3266) Runtime fails to launch an s3:// model: the downloaded path is a Path, and the launch log line raises TypeError `kind/bug` `area/runtime` 💬1
- [#3264](https://github.com/vllm-project/aibrix/issues/3264) KV cache SHFS connector: concurrent puts of the same key share one temp file, so puts fail and readers see a partly written block `kind/bug` `area/kv-cache` 💬1
- [#3262](https://github.com/vllm-project/aibrix/issues/3262) KV cache manager metrics multiply get() results by the block size (hit rate 1600% with 16-token blocks) `kind/bug` `area/kv-cache` 💬1
- [#3260](https://github.com/vllm-project/aibrix/issues/3260) Batch job resumed at request N re-sends earlier requests when the input has a blank line before N `kind/bug` `area/batch` 💬1
- [#3257](https://github.com/vllm-project/aibrix/issues/3257) Runtime drops model download errors and starts the engine with "bucket/key" as the model `kind/bug` `area/runtime` `area/orchestration` 💬1
- [#3250](https://github.com/vllm-project/aibrix/issues/3250) [Bug][ModelClaim] A lower-priority claim can take a starting pod before a higher-priority one `kind/bug` `area/orchestration` 💬1

#### 🔒 Closed Issues
- [#834](https://github.com/vllm-project/aibrix/issues/834) OSError: /models/deepseek-r1 does not appear to have a file named configuration_deepseek.py. Checkout 'https://huggingface.co//models/deepseek-r1/tree/None' for available files.
- [#3164](https://github.com/vllm-project/aibrix/issues/3164) flaky e2e test - TestModelClaimLifecycleAndRequestWake
- [#685](https://github.com/vllm-project/aibrix/issues/685) Examples should come with health and readiness checks
- [#2062](https://github.com/vllm-project/aibrix/issues/2062) After aibrix shutdown, stormService/roleset persist but pods delete. After restart, all resources disappear
- [#238](https://github.com/vllm-project/aibrix/issues/238) Should ModelAdapter displays the `Status` on the result of get command
- [#1546](https://github.com/vllm-project/aibrix/issues/1546) Support nested download in aibrix runtime downloader
- [#1885](https://github.com/vllm-project/aibrix/issues/1885) Disclose exact pending reason for failed to schedule lora
- [#2008](https://github.com/vllm-project/aibrix/issues/2008) trtllm metrics is undefined if we use absolute model path in the startup command
- [#3236](https://github.com/vllm-project/aibrix/issues/3236) [Bug] vtc-basic maps users to pods by list index, but the gateway shuffles the list on every request
- [#2540](https://github.com/vllm-project/aibrix/issues/2540) [Bug] Benchmark connection timeout when creating or receiving chunks
- [#1713](https://github.com/vllm-project/aibrix/issues/1713) GPU Optimizer Not Scaling in Heterogeneous Setup
- [#3172](https://github.com/vllm-project/aibrix/issues/3172) [Bug] ModelAdapter rejects the gs:// artifact URL that the docs recommend
- [#3198](https://github.com/vllm-project/aibrix/issues/3198) [Bug] E+PD requests skip the encode stage when requestsInflight is set
- [#3202](https://github.com/vllm-project/aibrix/issues/3202) [Bug] KV event replay recovery stops behind a second sequence gap
- [#2229](https://github.com/vllm-project/aibrix/issues/2229) [Bug] Per-model metrics cross-talk on multi-model pods (engine_fetcher only parses Metric[0])
- [#2082](https://github.com/vllm-project/aibrix/issues/2082) Bug: StormSet scale-in does not prioritize deleting non-ready RoleSets
- [#2018](https://github.com/vllm-project/aibrix/issues/2018) [Feat] Support TensorRT-LLM generation-first (parallel) P/D scheduling
- [#1876](https://github.com/vllm-project/aibrix/issues/1876) Polish the cpu mocked app to make sure the api is compatible
- [#1642](https://github.com/vllm-project/aibrix/issues/1642) [metadata] provide better abstraction for redis client
- [#1421](https://github.com/vllm-project/aibrix/issues/1421) Support Mooncake P/D conductor algorithm in AIBrix router
- [#3160](https://github.com/vllm-project/aibrix/issues/3160) [Bug] A failed TPM increment replaces a completed response with a 500
- [#3158](https://github.com/vllm-project/aibrix/issues/3158) [Bug] Routers credit a prefix or pin a session on a pod that then rejects the request with a 429
- [#3152](https://github.com/vllm-project/aibrix/issues/3152) [Bug] KPA recommends the pod count the pending-replica guard trimmed once slow pods turn ready
- [#3143](https://github.com/vllm-project/aibrix/issues/3143) [Bug] An unhealthy remote tokenizer is re-probed on every prefix-cache request, adding up to 5s each
- [#3241](https://github.com/vllm-project/aibrix/issues/3241) [Bug] kvcache-watcher keeps a cache pod's old address after the pod is recreated
- [#3193](https://github.com/vllm-project/aibrix/issues/3193) [Feature][Console]: Manage ModelClaims in the AIBrix Console (frontend + backend)
- [#3178](https://github.com/vllm-project/aibrix/issues/3178) [Bug] A request rejected for TPM keeps the user's RPM slot
- [#3250](https://github.com/vllm-project/aibrix/issues/3250) [Bug][ModelClaim] A lower-priority claim can take a starting pod before a higher-priority one
- [#2223](https://github.com/vllm-project/aibrix/issues/2223) FAIL: TestCancelSubmittedJobForwardsToMDSAndReleasesProvision (0.01s)
- [#2180](https://github.com/vllm-project/aibrix/issues/2180) panic: failed to initialize sqlite memory store: failed to open sqlite: Binary was compiled with 'CGO_ENABLED=0',
- [#1740](https://github.com/vllm-project/aibrix/issues/1740) /v1/model is not available and user need to append /
- [#1423](https://github.com/vllm-project/aibrix/issues/1423) RayClusterFleet pod leak when use different model.aibrix.ai/name

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,247 · **Open issues:** 729 · **Last push:** <1h ago

On October 23, 2026, there were no new releases for Semantic Router, but several significant developments occurred in merged pull requests. Notably, PR #5333 introduced a feature for Recipes that enables MoM V1 routes on named decision-model questions utilizing Vela 2.0 0.8B, enhancing routing capabilities. Additionally, PR #5271 addressed a bug by allowing integer and floating-point response timestamps, while PR #5344 fixed an issue regarding port offsets when the Playground targets the standalone Router. Among the new issues, the bug reported in #5401 about Fireworks Chat responses failing strict decoding on raw_output and reasoning_content has garnered attention, highlighting ongoing challenges in maintaining flexibility in response formats.

#### ✅ Merged PRs
- [#5271](https://github.com/vllm-project/semantic-router/pull/5271) [Bug] Accept integer and floating-point Responses timestamps
- [#5333](https://github.com/vllm-project/semantic-router/pull/5333) [Feature] Recipes: MoM V1 routes on named decision-model questions with Vela 2.0 0.8B
- [#5344](https://github.com/vllm-project/semantic-router/pull/5344) [Bug] Skip the port offset when the Playground targets the standalone Router

#### 🐛 New Issues
- [#5408](https://github.com/vllm-project/semantic-router/issues/5408) [Website] Center the AI translation banner text vertically `bug` `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬2
- [#5401](https://github.com/vllm-project/semantic-router/issues/5401) [Bug] Fireworks Chat responses fail strict decoding on raw_output and reasoning_content `needs-acceptance` 💬1
- [#5403](https://github.com/vllm-project/semantic-router/issues/5403) [Bug] Anthropic streamed message_start rejected on usage.speed (strict decoding) `needs-acceptance` 💬1
- [#5402](https://github.com/vllm-project/semantic-router/issues/5402) [Bug] request_params silently ignores a blocked_params name the Router cannot block `needs-acceptance` `wg/data-plane-networking` 💬1
- [#5411](https://github.com/vllm-project/semantic-router/issues/5411) [Bug] Unexpected model scheduler worker failure leaves requests pending `needs-acceptance` `wg/router-models-inference-runtime`
- [#5406](https://github.com/vllm-project/semantic-router/issues/5406) [Bug] Grafana deployment latency panels query obsolete metrics `needs-acceptance` `wg/enterprise-environment`
- [#5405](https://github.com/vllm-project/semantic-router/issues/5405) [Bug] Background model loading can activate a scheduler after runtime shutdown begins `bug` `needs-acceptance` `wg/router-models-inference-runtime`
- [#5404](https://github.com/vllm-project/semantic-router/issues/5404) [Feature] recipe-lab: automate the routing-recipe improvement loop (design & phased delivery) `enhancement` `needs-acceptance` `wg/evaluation-quality`
- [#5400](https://github.com/vllm-project/semantic-router/issues/5400) [Bug] Website navbar: search box overlaps Community link between ~997 and 1310px `bug` `needs-acceptance` `wg/developer-experience-ecosystem`
- [#5399](https://github.com/vllm-project/semantic-router/issues/5399) [Feature] Document the recommended Decision 3.0 CUDA performance path on NVIDIA Ampere (A100/A800) `needs-acceptance` `wg/router-models-inference-runtime`

#### 🔒 Closed Issues
- [#5249](https://github.com/vllm-project/semantic-router/issues/5249) [Bug] Dashboard Playground adds the port offset to a standalone Router's in-network port
- [#5307](https://github.com/vllm-project/semantic-router/issues/5307) [Bug] Engine mode silently keeps a revision an older vllm-sr saved after an upgrade
- [#5254](https://github.com/vllm-project/semantic-router/issues/5254) [Bug] Immediate error responses default to HTTP 200 and lose cancellation causes
- [#5341](https://github.com/vllm-project/semantic-router/issues/5341) [Bug] README agent harness guide link returns 404

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*