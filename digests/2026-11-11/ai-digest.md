# 📡 AI Ecosystem Digest — 2026-11-11

> Generated 2026-11-11 02:33 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 155,214 | 8 | 0 | 0 | 0 |
| [OpenAI Codex](https://github.com/openai/codex) | 134,782 | 19 | 7 | 49 | 3 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 108,765 | 0 | 0 | 5 | 2 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,400 | 8 | 12 | 0 | 4 |
| [OpenCode](https://github.com/anomalyco/opencode) | 225,922 | 23 | 14 | 11 | 1 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 29,174 | 26 | 7 | 4 | 3 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 394,302 | 142 | 83 | 138 | 2 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 262,478 | 16 | 5 | 4 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 96,694 | 32 | 22 | 32 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 38,700 | 22 | 15 | 72 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 133,973 | 8 | 26 | 40 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 186,587 | 2 | 6 | 6 | 1 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 63,070 | 44 | 57 | 85 | 5 |
| [Unsloth](https://github.com/unslothai/unsloth) | 79,300 | 14 | 16 | 128 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,184 | 3 | 2 | 5 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,446 | 36 | 7 | 1 | 0 |

---

## ✨ Highlights

- **OpenAI Codex** released multiple versions, including [rust-v0.169.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.169.0-alpha.9) and [rust-v0.167.1](https://github.com/openai/codex/releases/tag/rust-v0.167.1).
- **Gemini CLI** also released [v0.69.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.69.0-preview.0) and [v0.68.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.68.0).
- **Qwen Code** had significant merged features, including [feat(web-shell): show unfinished background tasks as chips above the composer](https://github.com/QwenLM/qwen-code/pull/16813).
- An issue in **OpenClaw** titled [Bug: message tool reports a failed Matrix send that was delivered](https://github.com/openclaw/openclaw/issues/196802) is worth noting due to its 4 comments.
- The issue [Main CI failed: E2E Tests — interactive/tui-agent-loop-parity.test.ts](https://github.com/QwenLM/qwen-code/issues/16787) in **Qwen Code** has garnered significant attention with 34 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 155,214 · **Open issues:** 16,894 · **Last push:** 5h ago

On November 11, 2026, there were no new releases or merged pull requests for Claude Code, indicating a routine maintenance day. However, several new issues were reported, including #108944, which highlights a regression in the Remote Control server toggle resetting to Off after app restart following a macOS upgrade, and #108942, which addresses a bug where editing a message after using the /compact command hides earlier chat history in the Desktop Code tab. Additionally, feature requests such as #108945 suggest improvements for the Desktop Code tab by seeking to increase the display limit for session cards per reply, which may enhance user experience during interactions.

#### 🐛 New Issues
- [#108948](https://github.com/anthropics/claude-code/issues/108948) Now that we have whiteboards, and data, and sheets we could really use some sor… `enhancement`
- [#108947](https://github.com/anthropics/claude-code/issues/108947) PreToolUse hooks don't run for a Read that fails binary-file validation, so updatedInput can't redirect it (e.g. .heic → .jpg) `bug` `has repro` `platform:macos` `area:tools`
- [#108777](https://github.com/anthropics/claude-code/issues/108777) [BUG] Desktop: /btw side chat context never reaches the main session, and the main session is not told the fork exists `bug` `platform:windows` `area:desktop`
- [#108946](https://github.com/anthropics/claude-code/issues/108946) [GitHub integration] `bug` `needs-info` `github-integration`
- [#108945](https://github.com/anthropics/claude-code/issues/108945) [FEATURE] Desktop Code tab: stop capping session cards at 3 per reply when the user asked for them `enhancement` `platform:windows` `area:desktop`
- [#108944](https://github.com/anthropics/claude-code/issues/108944) Remote Control server toggle resets to Off after app restart (macOS upgrade regression) `bug` `platform:macos` `regression` `area:desktop`
- [#108943](https://github.com/anthropics/claude-code/issues/108943) [FEATURE] Allow editing inline comments during plan review `enhancement` `area:desktop`
- [#108942](https://github.com/anthropics/claude-code/issues/108942) [BUG] Desktop Code tab: editing a message after /compact hides all earlier chat history `bug` `has repro` `platform:macos` `area:desktop`

### OpenAI Codex (`openai/codex`)

**Stars:** 134,782 · **Open issues:** 27,094 · **Last push:** <1h ago

Today, OpenAI Codex released several updates, including rust-v0.167.1, which included various improvements, as well as alpha versions rust-v0.169.0-alpha.9 and rust-v0.167.0-alpha.4.2. Significant merged pull requests featured in this release include #60702, which centralizes permission configuration, and #60695, adding a Signer Service backend specifically for macOS notarization. Additionally, the team addressed user experience with enhancements such as the fit of composer footer hints to terminal space in #60683 and the prioritization of draft space in #60681. However, a notable new issue emerged regarding the app-server leaking temporary directories when terminated, raising some concerns about environment management.

#### 🚀 New Releases
- [rust-v0.167.1](https://github.com/openai/codex/releases/tag/rust-v0.167.1) 0.167.1
- [rust-v0.169.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.169.0-alpha.9) 0.169.0-alpha.9
- [rust-v0.167.0-alpha.4.2](https://github.com/openai/codex/releases/tag/rust-v0.167.0-alpha.4.2) 0.167.0-alpha.4.2

#### ✅ Merged PRs
- [#60702](https://github.com/openai/codex/pull/60702) Centralize permission config selection and legacy translation
- [#60700](https://github.com/openai/codex/pull/60700) Finalize aborted turns and ignore unrelated late aborts
- [#60697](https://github.com/openai/codex/pull/60697) Limit MCP product attribution to configured REPL-backed calls
- [#60695](https://github.com/openai/codex/pull/60695) Add a Signer Service backend for macOS notarization
- [#60683](https://github.com/openai/codex/pull/60683) Fit composer footer hints to available terminal space
- [#60682](https://github.com/openai/codex/pull/60682) Wrap built-in TUI status lines within the footer row budget
- [#60681](https://github.com/openai/codex/pull/60681) Prioritize draft space when allocating composer footer rows
- [#60680](https://github.com/openai/codex/pull/60680) Keep TUI status content separate from composer hints
- [#60675](https://github.com/openai/codex/pull/60675) Avoid redundant reads and screen clears when switching side chats
- [#60673](https://github.com/openai/codex/pull/60673) Preserve agent message deliveries in rollout traces
- [#60671](https://github.com/openai/codex/pull/60671) Add sign-only mode and tighten macOS signing verification
- [#60670](https://github.com/openai/codex/pull/60670) Initialize Guardian evidence cursors from thread history state
- [#60669](https://github.com/openai/codex/pull/60669) Skip submodule worktree scans when checking repository changes
- [#60665](https://github.com/openai/codex/pull/60665) Add a content helper for forwarding MCP blocks in Code Mode
- [#60663](https://github.com/openai/codex/pull/60663) Defer exec-server sandbox preparation to the execution host
- [#60662](https://github.com/openai/codex/pull/60662) Support gateway device-code sign-in in headless TUI sessions
- [#60655](https://github.com/openai/codex/pull/60655) Support environment updates in app-server settings APIs
- [#60651](https://github.com/openai/codex/pull/60651) Enable model and reasoning effort selection for Cloud conversations
- [#60647](https://github.com/openai/codex/pull/60647) Restore PowerShell's working directory in the MXC sandbox
- [#60646](https://github.com/openai/codex/pull/60646) Use trusted Guardian templates for managed policies
- [#60645](https://github.com/openai/codex/pull/60645) Update the safety consent test for the current dialog
- [#60644](https://github.com/openai/codex/pull/60644) Keep interrupts responsive during host service-tier updates
- [#60639](https://github.com/openai/codex/pull/60639) Refresh Apps tools outside the MCP runtime gate
- [#60638](https://github.com/openai/codex/pull/60638) Honor read-only MCP tool hints in automatic approval
- [#60637](https://github.com/openai/codex/pull/60637) Show pending key chords in a shared floating shortcut guide
- [#60635](https://github.com/openai/codex/pull/60635) Support archiving and restoring cloud threads
- [#60624](https://github.com/openai/codex/pull/60624) Preserve script quotes in Windows sandbox cmd invocations
- [#60622](https://github.com/openai/codex/pull/60622) Use app-server MCP configuration and startup events in the TUI
- [#60620](https://github.com/openai/codex/pull/60620) Allow sampling in-progress turns with `thread/sample`
- [#60617](https://github.com/openai/codex/pull/60617) Support incremental tool declarations on GCP
- [#60613](https://github.com/openai/codex/pull/60613) Clarify safety recourse messaging and add a reporting option
- [#60599](https://github.com/openai/codex/pull/60599) Keep the TUI responsive while opening saved side chats
- [#60578](https://github.com/openai/codex/pull/60578) Add published OAuth metadata discovery to the RMCP client
- [#60574](https://github.com/openai/codex/pull/60574) Allow searching persisted attached threads
- [#60568](https://github.com/openai/codex/pull/60568) Add an OpenSSH ProxyCommand mode to `codex tcp-tunnel`
- [#60560](https://github.com/openai/codex/pull/60560) Avoid periodic wakeups in idle Windows file watchers
- [#60559](https://github.com/openai/codex/pull/60559) Preserve inherited previews for paginated thread forks
- [#60558](https://github.com/openai/codex/pull/60558) Discard opening prompts when side chat creation fails
- [#60557](https://github.com/openai/codex/pull/60557) Collapse completed turn activity beneath transcript prompts
- [#60556](https://github.com/openai/codex/pull/60556) Group consecutive tool calls in the full-screen conversation
- [#60555](https://github.com/openai/codex/pull/60555) Extend output-free transcript summaries to more tools
- [#60554](https://github.com/openai/codex/pull/60554) Add optional tool call summaries to the full-screen transcript
- [#60542](https://github.com/openai/codex/pull/60542) Add local diagnostic ZIP saves to the TUI
- [#60528](https://github.com/openai/codex/pull/60528) Reuse installed Git objects when upgrading marketplaces
- [#60526](https://github.com/openai/codex/pull/60526) Disable Daybreak when the selected model lacks access
- [#60525](https://github.com/openai/codex/pull/60525) Preserve first-party catalog display order in app-server model lists
- [#60524](https://github.com/openai/codex/pull/60524) Encapsulate thread metadata construction
- [#60523](https://github.com/openai/codex/pull/60523) Add policy-checked TCP upstream tunneling for SOCKS
- [#60522](https://github.com/openai/codex/pull/60522) Fragment large Responses WebSocket messages into bounded frames

#### 🐛 New Issues
- [#60516](https://github.com/openai/codex/issues/60516) dot on Windows: Get-Location rejected before launch with Unrestricted/Enabled/Disabled sandbox configuration `bug` `windows-os` `sandbox` `tool-calls` 💬3
- [#60615](https://github.com/openai/codex/issues/60615) app-server leaks ~/.codex/.tmp/git-* temp dirs when terminated during the startup plugin-marketplace check `bug` `CLI` `skills` `app-server` 💬3
- [#60604](https://github.com/openai/codex/issues/60604) [macOS] Switching to a command-auth custom provider hides all projects; OpenAI provider restores them `bug` `auth` `custom-model` `app` 💬3
- [#60587](https://github.com/openai/codex/issues/60587) CLI / TypeScript SDK: image paths containing commas are split into separate attachments `bug` `exec` `CLI` 💬3
- [#60579](https://github.com/openai/codex/issues/60579) MCP env_vars uses stale shared daemon environment, causing authentication failures after exporting token `bug` `auth` `mcp` `CLI` 💬2
- [#60530](https://github.com/openai/codex/issues/60530) GPT-6.1 Sol Usage Limits Depleting Much Faster Than Before `bug` `rate-limits` `app` 💬2
- [#60701](https://github.com/openai/codex/issues/60701) Dot voice doesn’t respond after tool calls `bug` `tool-calls` `dots` 💬1
- [#60605](https://github.com/openai/codex/issues/60605) threads 2 issues - rollout files are missing from the state DB; duplicate thread inventory entries found `bug` `CLI` `session` 💬1
- [#60582](https://github.com/openai/codex/issues/60582) Windows attached executor rejects read-only commands: registered Core owns sandbox accounts; legacy provisioning is not permitted `bug` `windows-os` `sandbox` `tool-calls` 💬1
- [#60540](https://github.com/openai/codex/issues/60540) Distracting grey background color for user input `bug` `enhancement` `windows-os` `TUI` 💬1
- [#60625](https://github.com/openai/codex/issues/60625) TUI: make the current thread ID observable locally when attached to the managed daemon `enhancement` `TUI` `CLI` `app-server` 💬1
- [#60696](https://github.com/openai/codex/issues/60696) [Desktop][Windows] Built-in automation restriction prevented overnight scheduled monitoring; no task was created `bug` `windows-os` `app` `automations` 💬1
- [#60694](https://github.com/openai/codex/issues/60694) app-server: expose the code-mode `exec` call (script, result, truncation) as a thread item `enhancement` `app-server` 💬1
- [#60703](https://github.com/openai/codex/issues/60703) External API read request blocked by policy: request to identify applied network settings
- [#60659](https://github.com/openai/codex/issues/60659) Bad contrast for codex cli on system theme change `bug` `TUI` `CLI`
- [#60699](https://github.com/openai/codex/issues/60699) [iOS][Dots] Behavior dot tab fails to load instructions with a generic 404 `bug` `iOS` `dots`
- [#60590](https://github.com/openai/codex/issues/60590) Python SDK: high-level Codex retains every global notification across completed turns `bug` `sdk` `app-server` `performance`
- [#60698](https://github.com/openai/codex/issues/60698) [Windows] Primary runtime downloads tar.gz then MSIX for the same version at startup (~1.04 GB) `bug` `windows-os` `app`
- [#60693](https://github.com/openai/codex/issues/60693) macOS project editor fails to save although the project record and local storage are valid `bug` `app`

#### 🔒 Closed Issues
- [#54168](https://github.com/openai/codex/issues/54168) Windows desktop: workspace settings fail to load in new chats while model replies still work
- [#36926](https://github.com/openai/codex/issues/36926) A repeated `turn/interrupt` can stay pending indefinitely after its turn was interrupted (aborted turns stay "active" in app-server thread state)
- [#60604](https://github.com/openai/codex/issues/60604) [macOS] Switching to a command-auth custom provider hides all projects; OpenAI provider restores them
- [#60579](https://github.com/openai/codex/issues/60579) MCP env_vars uses stale shared daemon environment, causing authentication failures after exporting token
- [#60605](https://github.com/openai/codex/issues/60605) threads 2 issues - rollout files are missing from the state DB; duplicate thread inventory entries found
- [#60540](https://github.com/openai/codex/issues/60540) Distracting grey background color for user input
- [#60659](https://github.com/openai/codex/issues/60659) Bad contrast for codex cli on system theme change

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 108,765 · **Open issues:** 720 · **Last push:** 1h ago

On November 11, 2026, Gemini CLI released version v0.69.0-preview.0, which introduced several important updates, including a fix to preserve literal `$` characters during template placeholder replacement and a new `/stats heatmap` subcommand for tracking daily token usage. Additionally, version v0.68.0 was released, containing changelogs for the previous versions and clarifications in the documentation regarding the CLI's scope and limitations. In terms of merged pull requests, notable fixes included recognition of TortoiseGitPlink as a PuTTY-family SSH client and addressing memory retention issues with PDF inlineData and telemetry buffers. No new issues were reported today, indicating a smooth operational day for the project.

#### 🚀 New Releases
- [v0.69.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.69.0-preview.0) Release v0.69.0-preview.0
- [v0.68.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.68.0) Release v0.68.0

#### ✅ Merged PRs
- [#30223](https://github.com/google-gemini/gemini-cli/pull/30223) chore(release): bump version to 0.70.0-nightly.20261110.g1603e9bab
- [#30224](https://github.com/google-gemini/gemini-cli/pull/30224) Changelog for v0.68.0
- [#30222](https://github.com/google-gemini/gemini-cli/pull/30222) Changelog for v0.69.0-preview.0
- [#30214](https://github.com/google-gemini/gemini-cli/pull/30214) fix(core): recognize TortoiseGitPlink as PuTTY-family SSH client (#29917)
- [#30217](https://github.com/google-gemini/gemini-cli/pull/30217) fix(core): prevent PDF inlineData and telemetry buffer memory retention

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,400 · **Open issues:** 2,199 · **Last push:** 3h ago

On November 11, 2026, GitHub Copilot CLI released version 1.0.110-1, which introduced several fixes, such as ensuring a session reopened with `copilot --resume` is marked in use immediately to prevent interference from additional windows, and improvements to the visibility of control characters in settings. The prior version, 1.0.110-0, added experimental handling of git, ssh, and sudo password prompts in a masked dialog, and refined the user experience for switching accounts and managing AI credit limits. No new features were merged today, but among the issues raised, #5408 highlights repeated content-filter failures, which may warrant further review regarding AI credit usage.

#### 🚀 New Releases
- [v1.0.110-1](https://github.com/github/copilot-cli/releases/tag/v1.0.110-1) 1.0.110-1
- [v1.0.110-0](https://github.com/github/copilot-cli/releases/tag/v1.0.110-0) 1.0.110-0
- [v1.0.109](https://github.com/github/copilot-cli/releases/tag/v1.0.109) 1.0.109
- [v1.0.109-1](https://github.com/github/copilot-cli/releases/tag/v1.0.109-1) 1.0.109-1

#### 🐛 New Issues
- [#5409](https://github.com/github/copilot-cli/issues/5409) Keep user-entered `!` shell commands and their output out of automatic Shell command grouping `triage`
- [#5411](https://github.com/github/copilot-cli/issues/5411) Failed to start on macOS Monterey `triage`
- [#5410](https://github.com/github/copilot-cli/issues/5410) Let Agent Plugins-format plugins set MCP OAuth options (oauthClientId, auth.redirectPort) `triage`
- [#5408](https://github.com/github/copilot-cli/issues/5408) Repeated content-filter failures and AI credit usage review `triage`
- [#5407](https://github.com/github/copilot-cli/issues/5407) Support NTLM fallback for Negotiate-authenticated corporate proxies `triage`
- [#5406](https://github.com/github/copilot-cli/issues/5406) GitHub Copilot assigned tasks receive no context from Linear when delegated `triage`
- [#5405](https://github.com/github/copilot-cli/issues/5405) view and Playwright browser_take_screenshot don't return image pixels to the model `triage`
- [#5404](https://github.com/github/copilot-cli/issues/5404) Windows: launching copilot in a git repo from interactive pwsh kills the parent pwsh.exe (tgrep indexing, 1.0.108) `area:platform-windows` `area:tools`

#### 🔒 Closed Issues
- [#191](https://github.com/github/copilot-cli/issues/191) MCP servers configured but tools not exposed to AI assistant in Copilot CLI
- [#4949](https://github.com/github/copilot-cli/issues/4949) Can't fetch available MCPs from custom registery
- [#4461](https://github.com/github/copilot-cli/issues/4461) Stdio Docker MCP containers remain running after closing a session
- [#3455](https://github.com/github/copilot-cli/issues/3455) github-mcp-server fails with "fetch failed" since 1.0.51 update
- [#4392](https://github.com/github/copilot-cli/issues/4392) Post-authentication MCP client rebuild at startup leaves orphaned stdio MCP server processes
- [#5242](https://github.com/github/copilot-cli/issues/5242) Sessions stop processing when MCP config watch registration hits the inotify limit (ENOSPC)
- [#2636](https://github.com/github/copilot-cli/issues/2636) MCP tool string parameters containing HTML are stripped before reaching MCP server
- [#1592](https://github.com/github/copilot-cli/issues/1592) Unable to use `--allow-tool` with `--prompt` and `--additional-mcp-config` (works only with `--yolo`)
- [#3290](https://github.com/github/copilot-cli/issues/3290) on using any model getting this
- [#5391](https://github.com/github/copilot-cli/issues/5391) Allow a fixed OAuth callback port for remote MCP servers
- [#5388](https://github.com/github/copilot-cli/issues/5388) Sandbox: credential masking ineffective for GH_TOKEN / GH_ENTERPRISE_TOKEN on GHE Cloud data-residency tenants; token env vars are dropped before masking
- [#5403](https://github.com/github/copilot-cli/issues/5403) Configuring providers.json hides AIC quota in the statusline even when using GitHub-hosted models

### OpenCode (`anomalyco/opencode`)

**Stars:** 225,922 · **Open issues:** 4,214 · **Last push:** <1h ago

On November 11, 2026, OpenCode released version 2.2.7, introducing the **GitHub Copilot Auto** feature, which allows users to select **Auto** in the model picker for optimized performance based on their Copilot account pools. Additionally, the update included **Side Panel Tab Shortcuts** for enhanced usability. Key merged features included the ability to run LM Studio decision models and a fix for reporting refused Console auto-watches. However, a notable new issue was reported regarding rogue actions, highlighting potential instability in the application.

#### 🚀 New Releases
- [v2.2.7](https://github.com/anomalyco/opencode/releases/tag/v2.2.7) v2.2.7

#### ✅ Merged PRs
- [#63226](https://github.com/anomalyco/opencode/pull/63226) fix(core): describe the execute program as plain JavaScript for every tool shape
- [#63200](https://github.com/anomalyco/opencode/pull/63200) feat(core): run LM Studio decision models
- [#62984](https://github.com/anomalyco/opencode/pull/62984) feat(codemode): rank tool search with name-weighted BM25
- [#63152](https://github.com/anomalyco/opencode/pull/63152) fix(cli): update npm installs through their own prefix
- [#63217](https://github.com/anomalyco/opencode/pull/63217) fix(core): report a refused Console auto-watch
- [#63198](https://github.com/anomalyco/opencode/pull/63198) fix(core): accept null context length from LM Studio models
- [#63055](https://github.com/anomalyco/opencode/pull/63055) v0.8.4
- [#63208](https://github.com/anomalyco/opencode/pull/63208) fix(desktop): stop freezing the main process during the login shell env probe
- [#63211](https://github.com/anomalyco/opencode/pull/63211) fix(app): show Recent sidebar rows exactly like side tabs
- [#63207](https://github.com/anomalyco/opencode/pull/63207) feat(tui): default transcript verbosity to low
- [#63177](https://github.com/anomalyco/opencode/pull/63177) feat(app): add Recent sessions sidebar experiment and iOS-style recency

#### 🐛 New Issues
- [#63216](https://github.com/anomalyco/opencode/issues/63216) Rogue actions `triaging` 💬11
- [#63229](https://github.com/anomalyco/opencode/issues/63229) 最新版opencode windows桌面版本会话中又缺失打开浏览器标签，之前升级就出现过这个bug `triaging` 💬3
- [#63214](https://github.com/anomalyco/opencode/issues/63214) desktop: Review panel file tree doesn't refresh when files are created/deleted by shell commands (Windows) `pending close` `triaging` 💬3
- [#63188](https://github.com/anomalyco/opencode/issues/63188) session: session.move updates directory but not the project, so moved sessions stay under the old project `pending close` `triaging` 💬3
- [#63190](https://github.com/anomalyco/opencode/issues/63190) [FEATURE]: Add keyboard shortcut to display help about available keyboard shortcuts [Desktop App] 💬2
- [#63192](https://github.com/anomalyco/opencode/issues/63192) tui: --prompt sessions start with `build` instead of default_agent when agents are still loading (2.2.7) `reproduced` 💬2
- [#63228](https://github.com/anomalyco/opencode/issues/63228) [FEATURE]: Add a thinking toggle shortcut and auto collapse mode to the Desktop app 💬2
- [#63225](https://github.com/anomalyco/opencode/issues/63225) desktop: idle GPU helper + WindowServer ~28% CPU even when the window is fully occluded (Intel MacBookPro15,1, macOS 15.8.2, v2.2.6) 💬2
- [#63233](https://github.com/anomalyco/opencode/issues/63233) bar issue `pending close` `triaging` 💬1
- [#63232](https://github.com/anomalyco/opencode/issues/63232) feature request: native scheduled tasks (recurring automations) `pending close` `triaging` 💬1
- [#63231](https://github.com/anomalyco/opencode/issues/63231) desktop: group sessions by project in the sidebar `pending close` `triaging` 💬1
- [#63221](https://github.com/anomalyco/opencode/issues/63221) cli: `opencode api` reads before plugins load, so `--standalone api get /api/skill` returns empty or partial lists `reproduced` 💬1
- [#63218](https://github.com/anomalyco/opencode/issues/63218) sessions: local database recreated empty after restart following model auth failure `severity:high` 💬1
- [#63219](https://github.com/anomalyco/opencode/issues/63219) no responde `pending close` `triaging` 💬1
- [#63215](https://github.com/anomalyco/opencode/issues/63215) [FEATURE]: Show each turn's cost in the assistant footer 💬1
- [#63212](https://github.com/anomalyco/opencode/issues/63212) GitLab Duo workflow models can't call tools in v2 💬1
- [#63205](https://github.com/anomalyco/opencode/issues/63205) lsp: v2.2.7 accepts lsp config but never starts servers or injects diagnostics `pending close` `triaging` 💬1
- [#63203](https://github.com/anomalyco/opencode/issues/63203) invalid credential `triaging` 💬1
- [#63201](https://github.com/anomalyco/opencode/issues/63201) agents: custom agents from .opencode/agents/ disappear after reload 💬1
- [#63195](https://github.com/anomalyco/opencode/issues/63195) core: reported usage.cost is trusted as USD without a unit check, so micro-dollar providers inflate session cost ~1e6x `pending close` `triaging` 💬1
- [#63194](https://github.com/anomalyco/opencode/issues/63194) [Bug] Desktop (Linux): "Desktop IPC handler failed" when opening files with VS Code if `code` is not installed – plus feature request: VSCodium support `reproduced` 💬1
- [#63193](https://github.com/anomalyco/opencode/issues/63193) nested menu items stacks on hover `pending close` `triaging` 💬1
- [#63179](https://github.com/anomalyco/opencode/issues/63179) site: reopening the download menus shows a clipped sliver instead of the full menu `reproduced` 💬1

#### 🔒 Closed Issues
- [#51828](https://github.com/anomalyco/opencode/issues/51828) [Bug] Location inactivity eviction SIGTERMs live background shells after 60 minutes
- [#62988](https://github.com/anomalyco/opencode/issues/62988) Windows: background service spawns a visible console every ~2s and steals keyboard focus
- [#62644](https://github.com/anomalyco/opencode/issues/62644) Edit tool consistently failing with unexpected reason
- [#62991](https://github.com/anomalyco/opencode/issues/62991) Claude is not responding anymore
- [#62651](https://github.com/anomalyco/opencode/issues/62651) core: reconcile re-admits an already-persisted user message on repeated POST with same messageID -> repeated steering delivery
- [#63009](https://github.com/anomalyco/opencode/issues/63009) plugin: symlinked local plugins never pick up content changes (stale module cache until service restart)
- [#52152](https://github.com/anomalyco/opencode/issues/52152) cli: upgrade reports success but the running binary is not replaced when another copy is registered with the package manager
- [#62996](https://github.com/anomalyco/opencode/issues/62996) 每天都沒有使用 但是都說沒有額度
- [#53013](https://github.com/anomalyco/opencode/issues/53013) desktop: clicking a message link opens it as a local file instead of the browser
- [#63214](https://github.com/anomalyco/opencode/issues/63214) desktop: Review panel file tree doesn't refresh when files are created/deleted by shell commands (Windows)
- [#62955](https://github.com/anomalyco/opencode/issues/62955) Wrong captialisation of vscodium plugin
- [#62659](https://github.com/anomalyco/opencode/issues/62659) data: all sessions lost — data dir recreated from scratch at service bootstrap (2.2.5→2.2.6)
- [#60166](https://github.com/anomalyco/opencode/issues/60166) tui: shell-only activity indicator opens the Subagents tab
- [#56213](https://github.com/anomalyco/opencode/issues/56213) core: LM Studio model discovery fails silently with decision-type models

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 29,174 · **Open issues:** 2,173 · **Last push:** <1h ago

On November 11, 2026, Qwen Code released version 0.27.2 and a preview of 0.27.2, introducing features for the Web Shell that enhance configurations for WeChat, QQ, and Email channels, including QR login and logout functionality. The release also included several critical fixes aimed at improving CI processes and agent enrollments. Significant merged features included the addition of chips for unfinished background tasks in the Web Shell and a refactor of the managed-agent's publication mode to streamline operations. Notably, a new issue regarding CI failures in E2E tests was raised, indicating challenges in the testing pipeline.

#### 🚀 New Releases
- [v0.27.2](https://github.com/QwenLM/qwen-code/releases/tag/v0.27.2) Release v0.27.2
- [v0.27.2-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.27.2-preview.0) Release v0.27.2-preview.0
- [sdk-typescript-v0.1.32](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.32) SDK TypeScript Release v0.1.32

#### ✅ Merged PRs
- [#16813](https://github.com/QwenLM/qwen-code/pull/16813) feat(web-shell): show unfinished background tasks as chips above the composer
- [#16840](https://github.com/QwenLM/qwen-code/pull/16840) refactor(managed-agent): keep asynchronous admission as the only publication mode
- [#16826](https://github.com/QwenLM/qwen-code/pull/16826) fix(managed-agent): harden Harness error-code parsing, host reader and exception causes
- [#16783](https://github.com/QwenLM/qwen-code/pull/16783) fix(channels): let a config field declare an inclusive lower bound

#### 🐛 New Issues
- [#16787](https://github.com/QwenLM/qwen-code/issues/16787) Main CI failed: E2E Tests — interactive/tui-agent-loop-parity.test.ts > … > 'an approved write, then a declined one' `status/needs-triage` `type/bug` 💬34
- [#16818](https://github.com/QwenLM/qwen-code/issues/16818) managed-agent: channel segment ledger follow-ups (upgrade-window backfill, reconcile gate, batched plan, projection gaps) `priority/P3` `status/blocked` `category/performance` `scope/testing` 💬6
- [#16824](https://github.com/QwenLM/qwen-code/issues/16824) Qwen Code repeatedly makes the same spelling errors even after repeated clean wipes/reinstalls `status/need-information` `priority/P2` `model/long-context` `type/bug` 💬4
- [#16863](https://github.com/QwenLM/qwen-code/issues/16863) deflake: scripts/tests/verify-capture.test.js › verify-capture helper > preserves colour and bold independently `priority/P2` `type/bug` `category/development` `scope/testing` 💬3
- [#16848](https://github.com/QwenLM/qwen-code/issues/16848) docs(providers): document Wiro AI under OpenAI-compatible providers `priority/P3` `type/documentation` `category/integration` `scope/documentation` 💬3
- [#16853](https://github.com/QwenLM/qwen-code/issues/16853) deflake: packages/cli/src/serve/hosted-harness-session.test.ts › Hosted Harness no-tool session > stops the message turn in flight and the messages waiting behind it `priority/P3` `type/bug` `category/development` `scope/testing` 💬3
- [#16785](https://github.com/QwenLM/qwen-code/issues/16785) feat(web-shell): discover custom provider models during setup and refresh `priority/P2` `type/feature-request` `category/configuration` `scope/model-switching` 💬3
- [#16778](https://github.com/QwenLM/qwen-code/issues/16778) feat(web-shell): improve session search experience `priority/P2` `category/ui` `type/enhancement` `scope/web-shell` 💬3
- [#16812](https://github.com/QwenLM/qwen-code/issues/16812) Web Shell: show unfinished background tasks as chips above the composer `status/in-review` `priority/P2` `type/feature-request` `category/ui` 💬2
- [#16856](https://github.com/QwenLM/qwen-code/issues/16856) bug(core): an input redirection in the middle of a command hides the words after it from the read-only classifier `priority/P1` `type/bug` `category/security` `scope/shell` 💬2
- [#16842](https://github.com/QwenLM/qwen-code/issues/16842) managed-agent: startup gate refuses business-only catalogs after shared-catalog handling (#16823 follow-up) `priority/P2` `type/bug` `status/ready-for-human` `managed-agent-server` 💬2
- [#16851](https://github.com/QwenLM/qwen-code/issues/16851) Web UI: Weekly usage limit stuck, not resetting after multiple weeks of inactivity `type/support` 💬2
- [#16814](https://github.com/QwenLM/qwen-code/issues/16814) feat(web-shell): show session output speed and cache hit under the composer `priority/P3` `type/feature-request` `category/ui` `scope/metrics` 💬2
- [#16832](https://github.com/QwenLM/qwen-code/issues/16832) ci: manual PR re-review channel is dead — qwen-code-pr-review.yml gates on qwen-code-ci-bot, an account that no longer exists (404) `priority/P2` `type/bug` `category/development` `scope/ci-cd` 💬2
- [#16825](https://github.com/QwenLM/qwen-code/issues/16825) docs(providers): document UberLLM under OpenAI-compatible providers `priority/P3` `type/documentation` `category/integration` `scope/documentation` 💬2
- [#16821](https://github.com/QwenLM/qwen-code/issues/16821) perf(web-shell): narrow sidebarless multi-live polling to displayed live workspaces `priority/P3` `type/feature-request` `category/performance` `status/ready-for-human` 💬2
- [#16817](https://github.com/QwenLM/qwen-code/issues/16817) bug(web-shell): welcome Settings keeps stale Current model badge `priority/P2` `type/bug` `category/ui` `scope/model-switching` 💬2
- [#16816](https://github.com/QwenLM/qwen-code/issues/16816) bug(browser-use): Zod 4 hangs on the second parse of a deep locator plan `priority/P2` `type/bug` `category/performance` `scope/build-system` 💬2
- [#16793](https://github.com/QwenLM/qwen-code/issues/16793) Auto-generated session titles can use English in a Chinese UI `priority/P3` `type/bug` `category/core` `scope/content-generation` 💬2
- [#16808](https://github.com/QwenLM/qwen-code/issues/16808) web-shell: untested residuals from #16324 (creation-screen welcome props, redundant empty-state disjunct) `priority/P3` `status/blocked` `scope/web-shell` `test` 💬2
- [#16795](https://github.com/QwenLM/qwen-code/issues/16795) auto-edit approval mode auto-approves tool calls that match a permissions.ask rule, including in subagents of a default-mode session `priority/P1` `type/bug` `category/security` `scope/settings` 💬2
- [#16782](https://github.com/QwenLM/qwen-code/issues/16782) chore(core): remove the deprecated session-commit registry now that the amend guard no longer reads it `priority/P3` `status/blocked` `category/core` `scope/shell` 💬2
- [#16861](https://github.com/QwenLM/qwen-code/issues/16861) Release Failed for v0.27.1-nightly.20261110.c238beb56f on 2026-11-10 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#16860](https://github.com/QwenLM/qwen-code/issues/16860) Main CI failed: Desktop Checks — Desktop Checks > … > Initialize containers `status/needs-triage` `type/bug`
- [#16859](https://github.com/QwenLM/qwen-code/issues/16859) VSCode IDE Companion Release Failed for 0.27.2 on 2026-11-10
- [#16829](https://github.com/QwenLM/qwen-code/issues/16829) Main CI failed: Qwen Code CI — src/serve/hosted-harness-session.test.ts > … > settles the cancelled takeover of an admitted foreground orpha… `status/needs-triage` `type/bug`

#### 🔒 Closed Issues
- [#12224](https://github.com/QwenLM/qwen-code/issues/12224) bug: unable to change directory with /cd after v0.24.0 update
- [#16848](https://github.com/QwenLM/qwen-code/issues/16848) docs(providers): document Wiro AI under OpenAI-compatible providers
- [#16700](https://github.com/QwenLM/qwen-code/issues/16700) Feedback for “命令”，使用 `/branch` 命令，一直提示“响应或工具调用正在进行时无法分支。请等待其完成或处理待确认的工具调用”
- [#16812](https://github.com/QwenLM/qwen-code/issues/16812) Web Shell: show unfinished background tasks as chips above the composer
- [#16814](https://github.com/QwenLM/qwen-code/issues/16814) feat(web-shell): show session output speed and cache hit under the composer
- [#16793](https://github.com/QwenLM/qwen-code/issues/16793) Auto-generated session titles can use English in a Chinese UI
- [#9654](https://github.com/QwenLM/qwen-code/issues/9654) Deferred review findings from PR #9332

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

**Stars:** 394,302 · **Open issues:** 8,185 · **Last push:** <1h ago

On November 11, 2026, OpenClaw released version 2026.11.3, which introduced key features such as keeping private task results out of streamed chat replies and improving reliable child-task handoffs post-cancellation. Additionally, the 2026.9.37 release provided critical security updates and performance fixes, refreshing the software's capabilities. Among the notable merged pull requests, issue #196923 ensured the preservation of queued ingress messages during gateway restarts, improving reliability. A significant new issue emerged regarding the message tool erroneously resending delivered messages, creating duplicates in user rooms, which is expected to garner attention in future updates.

#### 🚀 New Releases
- [v2026.11.3](https://github.com/openclaw/openclaw/releases/tag/v2026.11.3) openclaw 2026.11.3
- [v2026.9.37](https://github.com/openclaw/openclaw/releases/tag/v2026.9.37) openclaw 2026.9.37

#### ✅ Merged PRs
- [#196963](https://github.com/openclaw/openclaw/pull/196963) fix(discord): session-event replies reference an internal ID instead of a Discord message
- [#196441](https://github.com/openclaw/openclaw/pull/196441) fix: show inviter photos in guest welcome mentions
- [#193104](https://github.com/openclaw/openclaw/pull/193104) ci: default local Linux proof to Boat
- [#196983](https://github.com/openclaw/openclaw/pull/196983) chore(ui): refresh control ui locales
- [#196945](https://github.com/openclaw/openclaw/pull/196945) fix(release): reject npm fanout that exceeds GitHub quota
- [#196942](https://github.com/openclaw/openclaw/pull/196942) fix: restore chat behavior before #196602
- [#196478](https://github.com/openclaw/openclaw/pull/196478) fix(ui): avoid oversized focus frames in read-only chats
- [#196957](https://github.com/openclaw/openclaw/pull/196957) test(ui): measure pending agent creation status paint
- [#196470](https://github.com/openclaw/openclaw/pull/196470) improve(ui): show attachments first in the composer menu
- [#196460](https://github.com/openclaw/openclaw/pull/196460) fix(ui): center icons in multiline Permissions rows
- [#196960](https://github.com/openclaw/openclaw/pull/196960) fix(tts): omit directive hint when model overrides are disabled
- [#196457](https://github.com/openclaw/openclaw/pull/196457) fix: hide unavailable Agent Settings panels
- [#195984](https://github.com/openclaw/openclaw/pull/195984) fix(android): display gateway destination authority and path in TLS trust dialog
- [#196923](https://github.com/openclaw/openclaw/pull/196923) fix: preserve queued ingress messages during gateway restart
- [#196929](https://github.com/openclaw/openclaw/pull/196929) fix(release): retain accepted ClawHub recovery attempts on timeout
- [#196930](https://github.com/openclaw/openclaw/pull/196930) fix(ci): reject invalid shard settings before builds
- [#196924](https://github.com/openclaw/openclaw/pull/196924) docs(release): preserve scoped waivers and operator restrictions
- [#196728](https://github.com/openclaw/openclaw/pull/196728) fix(memory-wiki): preserve literal titles in generated headings
- [#196950](https://github.com/openclaw/openclaw/pull/196950) test(plugins): include Copilot featured onboarding metadata
- [#196908](https://github.com/openclaw/openclaw/pull/196908) fix(ci): route npm release runtime jobs through Boat
- [#196933](https://github.com/openclaw/openclaw/pull/196933) fix(skills): prevent missing meme option values from overwriting files
- [#196931](https://github.com/openclaw/openclaw/pull/196931) feat(ci): add a bounded managed runner canary
- [#196947](https://github.com/openclaw/openclaw/pull/196947) fix(ui): keep agent creation execution internal
- [#196918](https://github.com/openclaw/openclaw/pull/196918) fix(openclaw-id): add opt-in local build for the iroh binding
- [#196943](https://github.com/openclaw/openclaw/pull/196943) improve(ci): use tooling workers for planner source tests
- [#196936](https://github.com/openclaw/openclaw/pull/196936) fix: avoid full health summary rebuilds after session deletion
- [#196940](https://github.com/openclaw/openclaw/pull/196940) fix(subagents): subagent results sent straight to the chat fail with "Plugin invocation scope is closed"
- [#196920](https://github.com/openclaw/openclaw/pull/196920) fix(ci): route hourly plugin tests to Boat
- [#194233](https://github.com/openclaw/openclaw/pull/194233) fix(ui): activate shared Markdown preview code controls
- [#196382](https://github.com/openclaw/openclaw/pull/196382) fix(models): surface the --json/--plain conflict as an ExpectedCliError
- [#196710](https://github.com/openclaw/openclaw/pull/196710) fix(cli): surface the attach session-target conflict
- [#196751](https://github.com/openclaw/openclaw/pull/196751) fix(ui): restore prior typography and keep source updates compact
- [#196934](https://github.com/openclaw/openclaw/pull/196934) fix(ui): keep loading skeleton aligned with the chat transcript
- [#196935](https://github.com/openclaw/openclaw/pull/196935) improve(ci): use tooling workers for source analyzer tests
- [#195848](https://github.com/openclaw/openclaw/pull/195848) fix(ui): show all owners' sessions in the sidebar by default
- [#194992](https://github.com/openclaw/openclaw/pull/194992) fix(release): prevent false backport probe verdicts
- [#196896](https://github.com/openclaw/openclaw/pull/196896) fix(gateway): reduce repeated session work during streaming surges
- [#196874](https://github.com/openclaw/openclaw/pull/196874) fix: explain long sandbox workspace reuse waits
- [#195400](https://github.com/openclaw/openclaw/pull/195400) fix: Telegram restart recovery leaves final replies silent
- [#196916](https://github.com/openclaw/openclaw/pull/196916) improve(ci): pack fallback compiler queries across files
- [#196900](https://github.com/openclaw/openclaw/pull/196900) docs: redirect release retrospectives to Tideclaw
- [#196890](https://github.com/openclaw/openclaw/pull/196890) fix(ci): route Android Store releases to Boat
- [#196910](https://github.com/openclaw/openclaw/pull/196910) improve(ci): avoid redundant SDK receipt scans
- [#193499](https://github.com/openclaw/openclaw/pull/193499) ci: keep twelve-hour release watchers on Boat VMs
- [#196912](https://github.com/openclaw/openclaw/pull/196912) improve(ci): skip discarded shorthand symbol queries
- [#196448](https://github.com/openclaw/openclaw/pull/196448) fix: prevent provider catalog failures during concurrent SDK imports
- [#187795](https://github.com/openclaw/openclaw/pull/187795) fix(message): retain local final replies in conversation history
- [#196911](https://github.com/openclaw/openclaw/pull/196911) chore(ui): refresh control ui locales
- [#196889](https://github.com/openclaw/openclaw/pull/196889) fix: authenticate GitHub project worktree preparation
- [#196894](https://github.com/openclaw/openclaw/pull/196894) fix(ci): route reusable runtime jobs through Boat
- [#196395](https://github.com/openclaw/openclaw/pull/196395) feat(templates): add directly into an editable pending chat
- [#196895](https://github.com/openclaw/openclaw/pull/196895) fix: edit sidebar session names inline on double-click
- [#189522](https://github.com/openclaw/openclaw/pull/189522) improve(codex): clarify which conversation instructions each turn replaces
- [#196901](https://github.com/openclaw/openclaw/pull/196901) test: use a neutral auto-fallback model fixture
- [#196893](https://github.com/openclaw/openclaw/pull/196893) fix(macos): reopen the last selected Gateway after background launch
- [#196898](https://github.com/openclaw/openclaw/pull/196898) chore: update Kova performance evaluator pin
- [#196882](https://github.com/openclaw/openclaw/pull/196882) fix(ci): route performance and QA jobs to hosted in Boat mode
- [#196886](https://github.com/openclaw/openclaw/pull/196886) improve(worktrees): reduce preparation time for included dependency trees
- [#196735](https://github.com/openclaw/openclaw/pull/196735) fix(templates): a second copy of a Template without agent.name is named "undefined 2"
- [#196282](https://github.com/openclaw/openclaw/pull/196282) fix(auto-reply): tool progress labels freeze the Gateway on a deep path followed by a space
- [#196829](https://github.com/openclaw/openclaw/pull/196829) fix: rename sidebar sessions by double-clicking their names
- [#196392](https://github.com/openclaw/openclaw/pull/196392) feat(templates): open durable chat before verified setup
- [#196881](https://github.com/openclaw/openclaw/pull/196881) improve(gateway): reduce projection memory diagnostics overhead
- [#196878](https://github.com/openclaw/openclaw/pull/196878) fix(release): reject incompatible routes before qualification
- [#196877](https://github.com/openclaw/openclaw/pull/196877) docs: integrate approved backports while discovery continues
- [#196872](https://github.com/openclaw/openclaw/pull/196872) fix(update): updates keep a full pre-update copy until the next update
- [#196871](https://github.com/openclaw/openclaw/pull/196871) fix(ci): keep Docker utility jobs off Blacksmith in Boat mode
- [#196005](https://github.com/openclaw/openclaw/pull/196005) fix(android): preserve non-zero minutes in multi-day cron interval labels
- [#196850](https://github.com/openclaw/openclaw/pull/196850) fix: show GitHub Copilot among default setup providers
- [#196855](https://github.com/openclaw/openclaw/pull/196855) chore(release): close out 2026.11.3 on main
- [#196767](https://github.com/openclaw/openclaw/pull/196767) feat(knowledge): lean agent tool results and hash-prefix write fences
- [#196835](https://github.com/openclaw/openclaw/pull/196835) fix: shorten long sandbox freezes during workspace reconciliation
- [#196793](https://github.com/openclaw/openclaw/pull/196793) fix(templates): read package rollback owners on PostgreSQL
- [#192164](https://github.com/openclaw/openclaw/pull/192164) fix(crabbox): seed unpublished Boat source from its base
- [#196854](https://github.com/openclaw/openclaw/pull/196854) fix: preserve partial-clone filtering across shared fetches
- [#196747](https://github.com/openclaw/openclaw/pull/196747) fix(openshell): keep nested repository metadata out of mirror sync
- [#196864](https://github.com/openclaw/openclaw/pull/196864) fix(gateway): stop sidebar full resends during history churn
- [#196808](https://github.com/openclaw/openclaw/pull/196808) fix(skills): avoid repeated tree walks after sandbox usage eviction
- [#196866](https://github.com/openclaw/openclaw/pull/196866) fix(release): stop original ClawHub CLI from exiting with unsettled await
- [#196756](https://github.com/openclaw/openclaw/pull/196756) improve: send compact JSON tool results to the model
- [#196795](https://github.com/openclaw/openclaw/pull/196795) fix(release): accept bare active-parent workflow paths
- [#196786](https://github.com/openclaw/openclaw/pull/196786) improve(ci): reduce compilation for subagent tests
- [#193670](https://github.com/openclaw/openclaw/pull/193670) fix(pr): landing stalls fetching pinned commits in large partial clones
- [#196784](https://github.com/openclaw/openclaw/pull/196784) fix: avoid full-history downloads from Git revision expressions
- [#196828](https://github.com/openclaw/openclaw/pull/196828) fix: keep conversation cleanup parked across Gateway restarts
- [#196851](https://github.com/openclaw/openclaw/pull/196851) chore(i18n): refresh native locales
- [#196370](https://github.com/openclaw/openclaw/pull/196370) fix(doctor): defer update session-entry inspection when snapshot space runs out
- [#196781](https://github.com/openclaw/openclaw/pull/196781) chore(postgres): verify final-delivery crash recovery
- [#196831](https://github.com/openclaw/openclaw/pull/196831) fix(gateway): keep archive recaps alive after the calling turn ends
- [#196837](https://github.com/openclaw/openclaw/pull/196837) docs: preserve consumer-selected Crabbox provider
- [#196840](https://github.com/openclaw/openclaw/pull/196840) chore(ui): refresh control ui locales
- [#196806](https://github.com/openclaw/openclaw/pull/196806) fix(browser): release preparation state held by cached sandbox bridges
- [#196816](https://github.com/openclaw/openclaw/pull/196816) fix(cli): show why a command failed when the config cannot be read
- [#196823](https://github.com/openclaw/openclaw/pull/196823) fix(process): keep old cleanup failures from blocking Gateway shutdown
- [#196832](https://github.com/openclaw/openclaw/pull/196832) fix(message): render run model tokens in tool-send responsePrefix
- [#192394](https://github.com/openclaw/openclaw/pull/192394) fix(android): show retry instead of SHA-256 entry on TLS timeout
- [#196822](https://github.com/openclaw/openclaw/pull/196822) fix(ios): stop the speech permission prompt from crashing on Allow
- [#196157](https://github.com/openclaw/openclaw/pull/196157) fix(update): PostgreSQL update spends minutes validating the candidate before refusing a Gateway it cannot stop
- [#196825](https://github.com/openclaw/openclaw/pull/196825) fix(ci): restore generated locale pull request publication
- [#195420](https://github.com/openclaw/openclaw/pull/195420) fix(subagents): preserve paused tasks across requester notices
- [#196814](https://github.com/openclaw/openclaw/pull/196814) chore(ci): expose database ratchet graph phase timings
- [#196805](https://github.com/openclaw/openclaw/pull/196805) fix(ios): show the node connection in Quick Setup
- [#196818](https://github.com/openclaw/openclaw/pull/196818) chore(release): update appcast for 2026.11.3
- [#196807](https://github.com/openclaw/openclaw/pull/196807) fix(sandbox): report checkpoint capture paths and timing
- [#196346](https://github.com/openclaw/openclaw/pull/196346) fix(doctor): updates fail on a full disk because Doctor copies a stopped database just to read it
- [#196598](https://github.com/openclaw/openclaw/pull/196598) fix(ci): select Testbox coverage for PR gate changes
- [#196752](https://github.com/openclaw/openclaw/pull/196752) fix(gateway): keep tunnel requests on their intended route
- [#196796](https://github.com/openclaw/openclaw/pull/196796) fix(ios): stop node retries while the Gateway rate-limits auth
- [#196791](https://github.com/openclaw/openclaw/pull/196791) refactor(update): remove redundant preflight worktree prune
- [#195160](https://github.com/openclaw/openclaw/pull/195160) fix(ci): avoid repeated UI inventory scans during test planning
- [#196768](https://github.com/openclaw/openclaw/pull/196768) fix(worktrees): keep dependency copies fast in large gateways
- [#196783](https://github.com/openclaw/openclaw/pull/196783) fix(ui): show empty repository search feedback after loading
- [#196538](https://github.com/openclaw/openclaw/pull/196538) fix(bedrock): preserve system separators across cache checkpoints
- [#194595](https://github.com/openclaw/openclaw/pull/194595) fix: resumed database port reports success for a copy that owner admission rejects
- [#196771](https://github.com/openclaw/openclaw/pull/196771) fix(ci): preserve prepared package caches in Testbox installs
- [#196755](https://github.com/openclaw/openclaw/pull/196755) fix(cli): install PowerShell completion in UTF-16 profiles on Unix
- [#196772](https://github.com/openclaw/openclaw/pull/196772) fix(process): disable core dumps for agent commands
- [#196724](https://github.com/openclaw/openclaw/pull/196724) chore(sessions): add bounded delivery generation refusal diagnostics
- [#196780](https://github.com/openclaw/openclaw/pull/196780) improve(exec): reduce CPU spent on streamed command output
- [#196727](https://github.com/openclaw/openclaw/pull/196727) fix(sandbox): avoid snapshot overhead for fast checkpoints
- [#196778](https://github.com/openclaw/openclaw/pull/196778) fix(browser): start Chromium with long Linux temp paths
- [#193829](https://github.com/openclaw/openclaw/pull/193829) fix(telegram): sent-message cache writes fail with "Telegram runtime not initialized" during replies
- [#196764](https://github.com/openclaw/openclaw/pull/196764) refactor(test): share attachment session-change regression setup
- [#195793](https://github.com/openclaw/openclaw/pull/195793) fix(ios): refresh media permissions after first-use grants
- [#196711](https://github.com/openclaw/openclaw/pull/196711) fix(mcp): mcp add and configure print a literal "\n" before "Configuration was not saved." when the server check fails
- [#196779](https://github.com/openclaw/openclaw/pull/196779) fix(browser): diagnose unloadable Linux executables
- [#196757](https://github.com/openclaw/openclaw/pull/196757) fix(release): explain rejected child evidence reads
- [#196746](https://github.com/openclaw/openclaw/pull/196746) fix(skills): honor wider live model-usage reporting windows
- [#196766](https://github.com/openclaw/openclaw/pull/196766) fix(models): output caps ignore the preferred LM Studio context
- [#196750](https://github.com/openclaw/openclaw/pull/196750) fix(auto-reply): session-targeted cron and system-event replies fail with "Plugin invocation scope is closed"
- [#196777](https://github.com/openclaw/openclaw/pull/196777) fix(ui): show Telegram labels for main-session topics
- [#196765](https://github.com/openclaw/openclaw/pull/196765) fix: avoid shutdown failure after service stdin closes
- [#196250](https://github.com/openclaw/openclaw/pull/196250) fix(slack): gateway freezes during long reasoning streams when Slack streaming is off
- [#196770](https://github.com/openclaw/openclaw/pull/196770) improve(ui): show a single claw in halftone share QR codes
- [#195351](https://github.com/openclaw/openclaw/pull/195351) fix(ios): calendar, reminders and motion reject timestamps with fractional seconds
- [#196762](https://github.com/openclaw/openclaw/pull/196762) improve(ci): reduce compilation for cron and agent tests
- [#196769](https://github.com/openclaw/openclaw/pull/196769) fix(reply): a steered follow-up answered NO_REPLY no longer drops the earlier visible answer
- [#196716](https://github.com/openclaw/openclaw/pull/196716) fix(ui): preserve sign-in description during model setup loading

#### 🐛 New Issues
- [#196802](https://github.com/openclaw/openclaw/issues/196802) [Bug]: message tool reports a failed Matrix send that was delivered, so the agent resends and the room gets duplicates `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#196845](https://github.com/openclaw/openclaw/issues/196845) [Feature]: Optional explicit Git co-author name and email `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬4
- [#196505](https://github.com/openclaw/openclaw/issues/196505) memory index aborts with "worker task capacity reached" instead of retrying: a ~864 MiB corpus never completes, while the same build indexes ~205 MiB in 1.6 min `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬4
- [#196876](https://github.com/openclaw/openclaw/issues/196876) Feature: deliberate acknowledgment of out-of-band removed recovery artifacts + opt-in update audit view `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬3
- [#196674](https://github.com/openclaw/openclaw/issues/196674) [Bug]: memory indexing silently stalls for 10 min when an Ollama embed request hangs (one hung inline batch holds the single sync slot) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬3
- [#196544](https://github.com/openclaw/openclaw/issues/196544) [Bug]: Configured model without maxTokens silently gets an 8192 output cap; truncation mid tool call surfaces only as 'incomplete tool call' `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬3
- [#196968](https://github.com/openclaw/openclaw/issues/196968) [Bug]: After #196570, an inbound photo can be described instead of attached when the first catalog read is slow ("Plugin invocation scope is closed") `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#196799](https://github.com/openclaw/openclaw/issues/196799) [Bug]: Linux AppImage 2026.11.2 rejected by Control UI because bundled WebKit lacks commandForElement `bug` `regression` `P0` `impact:ux-release-blocker` 💬2
- [#196846](https://github.com/openclaw/openclaw/issues/196846) `matrix doctor recover` in a one-off container fails with GatewayLockNamespaceError and no reason by default; docs should say to run it inside the Gateway container `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬2
- [#196811](https://github.com/openclaw/openclaw/issues/196811) Managed update fails validation with SQLite-classification error and Invalid string length `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `P0` `issue-rating: 🦪 silver shellfish` 💬2
- [#196820](https://github.com/openclaw/openclaw/issues/196820) [Bug]: Control UI locks up at ~100% CPU in a `Element.getAnimations()` loop (macOS app WebContent and Edge) `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#196842](https://github.com/openclaw/openclaw/issues/196842) `automations` tool: `add` returns details that fail its declared outputSchema ("id: must have required property 'id'") `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#196798](https://github.com/openclaw/openclaw/issues/196798) Git-source update from 2026.11.1 fails at activation: schema edits retire every derived catalog hash, cross-generation asset read crashes the updater `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#196512](https://github.com/openclaw/openclaw/issues/196512) Matrix: reload or stop during account startup leaves E2EE crypto stores refused (unsafe final state) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬2
- [#196656](https://github.com/openclaw/openclaw/issues/196656) [Bug]: Subagent runs/completions unreliable on 2026.11.1 (Windows): announce fails to archived requester, batch authority error, worker-preparation UNAVAILABLE, no retry `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#196744](https://github.com/openclaw/openclaw/issues/196744) [Bug]: Native image hydration drops staged attachments with sandbox and file-transfer workspace binding (residual after #195992) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#196717](https://github.com/openclaw/openclaw/issues/196717) read tool: boolean literal serialized as string enum breaks Gemini/Vertex tool schema (HTTP 400) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬2
- [#196732](https://github.com/openclaw/openclaw/issues/196732) [Bug]: Background exec exit event queued during an active run drains as a separate silent turn after the reply (maybeNotifyOnExit has no active-run check) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#196689](https://github.com/openclaw/openclaw/issues/196689) Discord message thread-reply silently drops buffer attachment (handler reads only media/path/filePath), receipt kind=text, no error `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#196572](https://github.com/openclaw/openclaw/issues/196572) Update failure: global-install-failed (2026.9.4) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#196520](https://github.com/openclaw/openclaw/issues/196520) update (Windows): verifying fails (package-backup-retention exit 1, package-swap swap-failed) after successful activation+restart `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#196479](https://github.com/openclaw/openclaw/issues/196479) Update failure: package-update (2026.10.10) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#196962](https://github.com/openclaw/openclaw/issues/196962) Discord replies to session events carry an internal UUID as the reply reference when replyToMode is first or all `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#196836](https://github.com/openclaw/openclaw/issues/196836) [Bug]: Windows Node does not advertise computer.act despite Screen Capture being enabled `bug` `regression` `P2` `impact:ux-friction` 💬1
- [#196838](https://github.com/openclaw/openclaw/issues/196838) [Bug]: macOS app — Cmd+V does nothing in the Desktop panel's Keyboard field (works in Safari/Chrome) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#196970](https://github.com/openclaw/openclaw/issues/196970) [Feature]: Warm gateway replacement with single-writer ownership hand-off (zero-gap restarts) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#196969](https://github.com/openclaw/openclaw/issues/196969) Update failure: package-update (2026.11.2) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#196966](https://github.com/openclaw/openclaw/issues/196966) [Bug]: PostgreSQL git update to main ≥ caa978ca (#196392) refused at database-engine-preflight: "schema drift detected against generated DDL" `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#196938](https://github.com/openclaw/openclaw/issues/196938) [Bug]: auto=inbound still injects TTS directive instructions when modelOverrides.enabled=false `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#196964](https://github.com/openclaw/openclaw/issues/196964) [Bug]: Large skills_read results are truncated before model delivery instead of served whole or refused `bug` `bug:behavior` `P2` `clawsweeper:source-repro` 💬1
- [#196958](https://github.com/openclaw/openclaw/issues/196958) OpenAI ChatGPT sign-in is lost when a token refresh runs while the network is down `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#196961](https://github.com/openclaw/openclaw/issues/196961) Update failure: reconcile:abandoned (2026.11.1) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#196955](https://github.com/openclaw/openclaw/issues/196955) Update failure: package-update (2026.11.1) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#196941](https://github.com/openclaw/openclaw/issues/196941) [Feature]: Telegram Bot API 10.4 widgets (sendWidget, editMessageWidgetData, widget_query) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#196899](https://github.com/openclaw/openclaw/issues/196899) [Bug]: QA smoke subagent completion scenarios time out on main since #196570 `P1` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#196928](https://github.com/openclaw/openclaw/issues/196928) Cron inference-account binding rejects configured cross-provider fallback candidates (regression in 2026.10.10) `P1` `impact:message-loss` `impact:auth-provider` 💬1
- [#196926](https://github.com/openclaw/openclaw/issues/196926) [Bug]: Control UI sidebar shows a session and the child it spawned as flat siblings when both are in the same group; child completion reports then land in the parent chat with no lineage cue `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#196925](https://github.com/openclaw/openclaw/issues/196925) Stable 2026.11.2/11.3 (and release/2026.11.4) ship dompurify 3.4.16 under GHSA-cg2g-xh64-v4q7 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#196921](https://github.com/openclaw/openclaw/issues/196921) [Bug]: Qwen Token Plan thinking parameter incompatibility breaks Control UI Side chat `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#196915](https://github.com/openclaw/openclaw/issues/196915) Update failure: runtime-artifact-publication (2026.10.7) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#196909](https://github.com/openclaw/openclaw/issues/196909) [Feature]: Invocation-bound plugin conversation authority for guarded state effects `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#196905](https://github.com/openclaw/openclaw/issues/196905) [Docs Bug]: Private project checkout needs gateway.projects.nativeGitHubSearch, docs say tools.github is enough `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#196897](https://github.com/openclaw/openclaw/issues/196897) [Bug]: Stable 2026.11.3 still lacks the Darwin argv fallback (#185342); every update on macOS 27.2 retains an updater runtime `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#196891](https://github.com/openclaw/openclaw/issues/196891) [Bug]: Tool Search skips intent expansion for short plurals like "urls" and "runs" `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#196734](https://github.com/openclaw/openclaw/issues/196734) [Bug]: A second copy of a Template without agent.name is named "undefined 2" `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#196885](https://github.com/openclaw/openclaw/issues/196885) [Bug]: claude-cli manual compaction never reads the prompt cache (runs without the session's system prompt and MCP tools) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#196859](https://github.com/openclaw/openclaw/issues/196859) [Feature]: My five-minute reply checks can go over an hour without checking `enhancement` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#196884](https://github.com/openclaw/openclaw/issues/196884) [Feature]: Workboard Sessions board: show only pinned (or explicitly listed) sessions `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#196883](https://github.com/openclaw/openclaw/issues/196883) Voice/low-latency callers pay ~12 s after 5 idle minutes: make worker idle retirement configurable or add a keep-warm `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#196879](https://github.com/openclaw/openclaw/issues/196879) Gateway logs full /v1/chat/completions reply text to stdout (opts.json falsy on openai-http path) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `impact:security` 💬1
- [#196860](https://github.com/openclaw/openclaw/issues/196860) Update failure: invalid-config (2026.11.2) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#196863](https://github.com/openclaw/openclaw/issues/196863) sessions_history / chat.history ignore limit and offset on claude-cli-imported transcripts (same page forever, misleading nextOffset) `P2` `impact:session-state` 💬1
- [#196858](https://github.com/openclaw/openclaw/issues/196858) Code Mode leaves memory and wiki tools out of the globals index, and the memory recall prompt does not say they are callable globals `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#196857](https://github.com/openclaw/openclaw/issues/196857) Code Mode catalog search taints the turn with no network call, so memory writes become permanently untrusted `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#196844](https://github.com/openclaw/openclaw/issues/196844) [Bug]: Every config hot reload costs the Gateway main thread ~0.5-0.7 s on a 466-agent gateway; two of the largest slices are a whole-config structuredClone and a per-agent model visibility policy rebuild `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#196849](https://github.com/openclaw/openclaw/issues/196849) [Bug]: Auto-update 2026.10.9 → 2026.10.10 reports ✅ "channels ready" while Discord plugin is left on 10.9 and fails to load (~25 h outage) `P1` `impact:message-loss` 💬1
- [#196817](https://github.com/openclaw/openclaw/issues/196817) [Bug]: Setup inference loses published subscription routes and rejects usable OAuth `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#196815](https://github.com/openclaw/openclaw/issues/196815) CLI commands print only "The CLI command failed." when the config file cannot be read `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#196801](https://github.com/openclaw/openclaw/issues/196801) responsePrefix with {model}/{provider}/{think} is never applied to message-tool sends inside an agent run `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#196827](https://github.com/openclaw/openclaw/issues/196827) Update failure: package-update (2026.11.1) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#196826](https://github.com/openclaw/openclaw/issues/196826) [Bug]: Paused Goal still starts a requester turn when one of its subagents finishes `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#196821](https://github.com/openclaw/openclaw/issues/196821) [Bug]: Control UI avatar upload inlines base64 data URI into IDENTITY.md `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#196824](https://github.com/openclaw/openclaw/issues/196824) openclaw setup planner: response schema rejected by OpenAI strict mode (Missing 'command') `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#196809](https://github.com/openclaw/openclaw/issues/196809) [Bug]: claude-cli run that fails after a message-tool delivery logs no cause (the only `cli terminal failure` warning is skipped) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#196803](https://github.com/openclaw/openclaw/issues/196803) [Bug]: Codex post-tool finalization fails with invalid_content/context_unavailable; retained child results inaccessible `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#196794](https://github.com/openclaw/openclaw/issues/196794) [Feature]: Workboard: per-board visible statuses and status labels `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#196500](https://github.com/openclaw/openclaw/issues/196500) Prompt cache block splits omit separator text `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#196792](https://github.com/openclaw/openclaw/issues/196792) [Bug]: macOS app never dials its Mac node with a local launchd Gateway ("Mac capabilities offline", no reason shown) `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#196788](https://github.com/openclaw/openclaw/issues/196788) [Bug]: Template Add fails after review on multi-channel hosts when an automation announces to the last channel `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#196782](https://github.com/openclaw/openclaw/issues/196782) Update failure: package-update (2026.10.10) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#196763](https://github.com/openclaw/openclaw/issues/196763) Share attachment session-change regression setup `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#196749](https://github.com/openclaw/openclaw/issues/196749) [Bug]: Replies of cron jobs targeted at a conversation are never delivered ("Plugin invocation scope is closed") `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#196761](https://github.com/openclaw/openclaw/issues/196761) macOS node host reports AUTH_PASSWORD_MISMATCH for months; real cause is a refused agent-DB migration hidden behind a swallowed 'CLI command failed' `P2` `impact:ux-friction` 💬1
- [#196708](https://github.com/openclaw/openclaw/issues/196708) [Bug]: mcp serve reports invalid flags as a Gateway startup failure `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#196737](https://github.com/openclaw/openclaw/issues/196737) [Bug]: sessions.usage cannot reconcile with the provider bill — utility completions and aborted attempts are billed but never recorded `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#196731](https://github.com/openclaw/openclaw/issues/196731) [Feature]: Export a bounded portion of a session trajectory `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#196730](https://github.com/openclaw/openclaw/issues/196730) Restart: a turn refused during setup (GatewayDrainingError) keeps its restartRecoveryRuns fence and is resumed on the next boot with no request `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#196676](https://github.com/openclaw/openclaw/issues/196676) [Bug]: Channel replies still say "sign in again" when the provider reports an expired API key (api_key_expired) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#196726](https://github.com/openclaw/openclaw/issues/196726) security audit --deep reports gateway.probe_failed (missing scope: operator.read) on a healthy gateway when the CLI device identity is unpaired `security` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#196679](https://github.com/openclaw/openclaw/issues/196679) [Bug]: Plugin pages show "Plugin" in the phone header and browser tab title instead of their own name `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#196712](https://github.com/openclaw/openclaw/issues/196712) claude-cli on macOS: selected Anthropic auth-profile token is ignored while a native Claude login exists (Claude Code only reads the fd token when it has no login of its own) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `impact:security` 💬1
- [#196721](https://github.com/openclaw/openclaw/issues/196721) CLI backends: memory tools served over the loopback MCP bridge never receive `memoryAudience` 💬1
- [#196713](https://github.com/openclaw/openclaw/issues/196713) [Bug]: Template Add creates an agent with a reserved system ID that cannot be deleted `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#196718](https://github.com/openclaw/openclaw/issues/196718) [Bug]: CLI state reads fail while another CLI holds a transient schema lease `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#196691](https://github.com/openclaw/openclaw/issues/196691) Control UI: Settings sidebar does not clearly indicate more navigation below the footer boundary `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#196694](https://github.com/openclaw/openclaw/issues/196694) [Bug]: /model anthropic/* reports "Sign-in needed" / "A runtime is not available" with a valid Claude CLI login (claude-cli binding resolved without config) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#196692](https://github.com/openclaw/openclaw/issues/196692) Control UI: Agent List configuration needs clear agent identity headings and section boundaries `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#196682](https://github.com/openclaw/openclaw/issues/196682) [Bug]: prompt-cache prefix test fails for anthropic-messages on main since #196471 `P2` `clawsweeper:not-repro-on-main` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#196675](https://github.com/openclaw/openclaw/issues/196675) Concurrent runtime preparations race: shared plugin-capture staging deleted mid-generation (superseded errors, sessions unavailable) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#196525](https://github.com/openclaw/openclaw/issues/196525) fix(cache): honor OpenRouter system cache contracts `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#196670](https://github.com/openclaw/openclaw/issues/196670) heartbeat: a skipped run leaves a stale runningAtMs (in-flight marker never cleared) `P2` `impact:other` 💬1
- [#196663](https://github.com/openclaw/openclaw/issues/196663) [Docs Bug]: config guided sections omit memory setup `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#196664](https://github.com/openclaw/openclaw/issues/196664) [Feature]: Add a group-first “All owners” session view for agent-scoped groups `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#196658](https://github.com/openclaw/openclaw/issues/196658) [Bug]: browser text read can return a different page's text when the tab navigates mid-read `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#196649](https://github.com/openclaw/openclaw/issues/196649) [Bug]: Adding the same ClawHub Template again fails on Windows `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#196648](https://github.com/openclaw/openclaw/issues/196648) [Bug]: Control UI folds earlier runs' replies into "Worked" on 2026.11.x; request #172571 backport to 2026.11.5 `P2` `impact:ux-friction` 💬1
- [#196643](https://github.com/openclaw/openclaw/issues/196643) [Bug]: Template review drops the CLAW.md description and rewrites the agent name when publishing from chat `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#196646](https://github.com/openclaw/openclaw/issues/196646) [Bug]: npm update to 2026.11.2 fails: SQLite header discovery shares 10s timeout across 337k paths `P2` `impact:ux-friction` 💬1
- [#196625](https://github.com/openclaw/openclaw/issues/196625) refactor(rerank): remove redundant private slot request index `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#196617](https://github.com/openclaw/openclaw/issues/196617) [Bug]: Codex isolated completions send temperature to models that reject it, so Activity recaps 400 on gpt-6-luna `bug` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬1
- [#196583](https://github.com/openclaw/openclaw/issues/196583) Control UI Settings: a half-typed new list item is lost when an existing item of the same list is edited `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#196629](https://github.com/openclaw/openclaw/issues/196629) Update failure: managed-service (2026.10.8) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `P0` `issue-rating: 🦪 silver shellfish` 💬1
- [#196623](https://github.com/openclaw/openclaw/issues/196623) SessionTranscriptWriterClaimReboundError fails inbound phone-channel messages; repeated retries of the same message `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#196536](https://github.com/openclaw/openclaw/issues/196536) [Bug]: Codex provider refusal is hidden behind generic Telegram incomplete-turn failure `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#196616](https://github.com/openclaw/openclaw/issues/196616) Cron result transcript records attachment_error delivery-failed for media the channel already delivered, and discards the real prepare error `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#196607](https://github.com/openclaw/openclaw/issues/196607) [Bug]: doctor --fix moves claude-cli channel and hook model overrides to the Anthropic API route `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#196613](https://github.com/openclaw/openclaw/issues/196613) Update failure: invalid-config (2026.11.2) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#196597](https://github.com/openclaw/openclaw/issues/196597) test(ios): investigate setup-code retry and screenshot simulator-isolation flakes `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#196601](https://github.com/openclaw/openclaw/issues/196601) ci-changed-scope: let a fork add lanes and their paths from an optional data file `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#196575](https://github.com/openclaw/openclaw/issues/196575) fix(acp): investigate terminal completion racing next-turn admission `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#196577](https://github.com/openclaw/openclaw/issues/196577) refactor(acp): resolve TTS eligibility from the settings owner `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#196530](https://github.com/openclaw/openclaw/issues/196530) [Bug]: Session previews change literal code identifiers and Markdown examples `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#196560](https://github.com/openclaw/openclaw/issues/196560) [Feature]: Regenerate a session title from recent context `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#196556](https://github.com/openclaw/openclaw/issues/196556) Update failure: global-install-failed (2026.9.4) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#196553](https://github.com/openclaw/openclaw/issues/196553) test(macos): stabilize browser Stop URL projection boundary `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#196548](https://github.com/openclaw/openclaw/issues/196548) macOS: native hosting choice and OpenClaw ID onboarding `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `impact:security` 💬1
- [#196534](https://github.com/openclaw/openclaw/issues/196534) [Bug]: openclaw update hangs CPU-bound in original-state capture on a large default workspace: SQLite discovery walks ~/.openclaw/workspace (stable ≤ 2026.11.2) `P2` `impact:ux-friction` 💬1
- [#196532](https://github.com/openclaw/openclaw/issues/196532) [Bug]: Telegram posts fixed media-fetch warnings into group chats with no option to route them to the agent only `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#196524](https://github.com/openclaw/openclaw/issues/196524) [Docs Bug]: sandbox recreation help recommends a short session name that is not expanded `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#196514](https://github.com/openclaw/openclaw/issues/196514) Cron account continuity also blocks same-provider multi-account fallback, not only cross-provider `P2` `impact:auth-provider` 💬1
- [#196491](https://github.com/openclaw/openclaw/issues/196491) [Bug]: Isolated cron and heartbeat sessions lose their saved color and dashboard face after each fresh run `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#196508](https://github.com/openclaw/openclaw/issues/196508) memory-core: DREAMS.md writes fail with EROFS when the workspace root is read-only `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#196499](https://github.com/openclaw/openclaw/issues/196499) Codex app-server workers accumulate and are never retired: one pair per agent on sign-in refresh, and a second set on first Control UI session-catalog listing (Linux arm64, 2026.9.9) `P2` `impact:other` 💬1
- [#196429](https://github.com/openclaw/openclaw/issues/196429) [Bug]: Long replies with a code block arrive split into broken blocks on MS Teams, Tlon, Zalo, and Synology Chat `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#196490](https://github.com/openclaw/openclaw/issues/196490) [Bug]: Anthropic 'Invalid request data' on first request after compaction + skill_workshop update (2026.11.1) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` 💬1
- [#196475](https://github.com/openclaw/openclaw/issues/196475) [Bug]: context_bounded notice repeats every turn when a context engine (lossless-claw) already assembled within budget; byte guard counts image tool results `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#196473](https://github.com/openclaw/openclaw/issues/196473) [Bug]: Provider Access renders unknown historical usage as a `***` provider card `P2` `impact:ux-friction` 💬1
- [#196469](https://github.com/openclaw/openclaw/issues/196469) [Feature]: Control UI — option to keep the chat Details panel closed by default `P3` `impact:ux-friction` 💬1
- [#196463](https://github.com/openclaw/openclaw/issues/196463) Windows: openclaw agent exec always fails cleanup with EBUSY on the temporary plugin-capture owner.sqlite `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#196466](https://github.com/openclaw/openclaw/issues/196466) test(ios): investigate delayed SharingUIService readiness during document export `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#196449](https://github.com/openclaw/openclaw/issues/196449) Templates load slowly and enabled direct links can redirect to chat `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `clawsweeper:needs-live-repro` 💬1
- [#196444](https://github.com/openclaw/openclaw/issues/196444) [Bug]: agent exec retires temporary databases before memory indexing settles `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#196443](https://github.com/openclaw/openclaw/issues/196443) test: investigate intermittent Anthropic fallback live-probe token exhaustion `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#196436](https://github.com/openclaw/openclaw/issues/196436) Android node photos.latest returns only one or two photos when several full-size photos are requested `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#196433](https://github.com/openclaw/openclaw/issues/196433) Codex harness: sandboxed agents (workspaceAccess ro/none) never receive AGENTS.md — executionWorkspace passed as resolvedWorkspace `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#196439](https://github.com/openclaw/openclaw/issues/196439) [Bug]: Killed subagent run leaves Control UI task notification stuck; delivery stays pending, agents_wait returns not_found `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#196428](https://github.com/openclaw/openclaw/issues/196428) [Bug]: Native Codex completion records a terminal parent reply, then fails source authority and is marked undelivered (Feishu, 2026.11.2) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#196417](https://github.com/openclaw/openclaw/issues/196417) [Bug]: A2A adapter lacks durableFinal.reconcileUnknownSend; plugin-handled delivery mirror has no retry on writer-claim rebound (false-negative dead-letters + bundled a2a still on legacy queueMessage) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#196408](https://github.com/openclaw/openclaw/issues/196408) [Feature]: Consultation-scoped MCP Relay grants and stable request identity `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#196403](https://github.com/openclaw/openclaw/issues/196403) Agent denies completing bootstrap on the next turn after BOOTSTRAP.md is removed `P2` `clawsweeper:needs-live-repro` `impact:session-state` `issue-rating: 🐚 platinum hermit` 💬1
- [#196406](https://github.com/openclaw/openclaw/issues/196406) iOS: new chat is created as a child of the currently open session (nests in sidebar) `P2` `impact:session-state` `impact:ux-friction` 💬1
- [#196985](https://github.com/openclaw/openclaw/issues/196985) [Docs Bug]: Document the difference with "Luna" `bug` `docs`

#### 🔒 Closed Issues
- [#154572](https://github.com/openclaw/openclaw/issues/154572) 2026.9.5: sessions_spawn to a claude-cli-runtime child always fails with SessionTranscriptWriterClaimReboundError (~350 ms); CLI agent route works (related to #152659)
- [#149631](https://github.com/openclaw/openclaw/issues/149631) [Bug]: PR preflight throws at 121 jobs against the 120 Node matrix cap
- [#144797](https://github.com/openclaw/openclaw/issues/144797) [Bug]: reused claude-cli live session keeps a deleted --mcp-config; all mcp__openclaw__* tools die mid-session with HTTP 401
- [#119294](https://github.com/openclaw/openclaw/issues/119294) [Feature]: Track migration to MCP 2.0 (2026-07-28 stateless spec) — @modelcontextprotocol/sdk → split client/server v2 packages
- [#112372](https://github.com/openclaw/openclaw/issues/112372) Add opt-in, origin-bound deferred completion to sessions_send
- [#134918](https://github.com/openclaw/openclaw/issues/134918) Embedded agent: incomplete/empty turns from a model surface "couldn't generate" errors without consuming retry budget (two signatures + local patches that fixed both)
- [#175645](https://github.com/openclaw/openclaw/issues/175645) [Bug]: Authored NO_REPLY silence in a subagent announce run is classified as empty_response and burns the whole fallback chain
- [#150250](https://github.com/openclaw/openclaw/issues/150250) [Feature]: Skill Workshop — verify learning coverage and behavioral reuse
- [#149221](https://github.com/openclaw/openclaw/issues/149221) [Bug]: Duplicate assistant reply / Control UI double-render caused by "no active tool authority snapshot" race
- [#141115](https://github.com/openclaw/openclaw/issues/141115) 429 from primary model terminates session instead of consulting fallback chain
- [#193158](https://github.com/openclaw/openclaw/issues/193158) [Bug]: Telegram: callbacks run inside a reply run lose the plugin instance, so spooled-update retries fail with "Telegram runtime not initialized"
- [#91927](https://github.com/openclaw/openclaw/issues/91927) [Feature] Export langfuse.session.id attribute on OTel spans for Langfuse session grouping
- [#166734](https://github.com/openclaw/openclaw/issues/166734) sessions_send from an embedded-runtime run fails with 'session writer claim changed before transcript persistence': initial dispatch inherits the caller's owned transcript-write context (2026.9.8)
- [#158168](https://github.com/openclaw/openclaw/issues/158168) [Bug]: Control UI sidebar session rows show delivery-origin avatar instead of the agent's own avatar
- [#150335](https://github.com/openclaw/openclaw/issues/150335) [Bug]: Workspace migration requires Doctor repair that also performs unwanted housekeeping (2026.9.4)
- [#138489](https://github.com/openclaw/openclaw/issues/138489) [Bug]: SystemAgent Gateway restart schedules without restart-sentinel continuation
- [#144400](https://github.com/openclaw/openclaw/issues/144400) [Bug]: Heartbeat cron run stays `running` after its session finished, then fails with `FOREIGN KEY constraint failed`; the global `cron-in-progress` gate blocks every other agent meanwhile
- [#139960](https://github.com/openclaw/openclaw/issues/139960) [Bug]: Session reset racing a live turn flush persists a row the canonical validator treats as terminal corruption, bricking the agent on all surfaces
- [#138387](https://github.com/openclaw/openclaw/issues/138387) [Bug]: visible sessions_spawn silently runs Fable instead of requested Sol
- [#165668](https://github.com/openclaw/openclaw/issues/165668) iOS: reminders.list should include EKReminder.notes in OpenClawReminderPayload
- [#191784](https://github.com/openclaw/openclaw/issues/191784) [Bug]: 2026.10.10 a >256 MB session transcript blocks the agent's memory index; compact OOMs; no way to rotate
- [#194408](https://github.com/openclaw/openclaw/issues/194408) [Feature]: Compaction: make MAX_COMPACTION_SUMMARY_CHARS (16,000) configurable; two-thirds of production compactions hit it
- [#133179](https://github.com/openclaw/openclaw/issues/133179) [Feature]: Show attach-only mode in browser status
- [#127785](https://github.com/openclaw/openclaw/issues/127785) workboard_move with an active claim moves the card but does not release the claim
- [#195477](https://github.com/openclaw/openclaw/issues/195477) [Bug]: Provider discovery skipped when SDK module is not fully loaded
- [#188303](https://github.com/openclaw/openclaw/issues/188303) macOS launchd: managed Gateway disappears from launchd domain after auto-update (2026.10.8 -> 2026.10.9)
- [#195618](https://github.com/openclaw/openclaw/issues/195618) [Bug]: Agent image/media tools reject valid data URLs with media type parameters (e.g. ;charset=utf-8)
- [#196799](https://github.com/openclaw/openclaw/issues/196799) [Bug]: Linux AppImage 2026.11.2 rejected by Control UI because bundled WebKit lacks commandForElement
- [#196842](https://github.com/openclaw/openclaw/issues/196842) `automations` tool: `add` returns details that fail its declared outputSchema ("id: must have required property 'id'")
- [#194518](https://github.com/openclaw/openclaw/issues/194518) [Bug]: Resumed database staging certifies admission without rerunning a previously failed admission check
- [#196717](https://github.com/openclaw/openclaw/issues/196717) read tool: boolean literal serialized as string enum breaks Gemini/Vertex tool schema (HTTP 400)
- [#177162](https://github.com/openclaw/openclaw/issues/177162) [Bug]: Restart-recovery claim has no TTL: after a forced 5 s drain, every new Telegram turn is refused for 17 min until an operator abort + reset (2026.10.4)
- [#196689](https://github.com/openclaw/openclaw/issues/196689) Discord message thread-reply silently drops buffer attachment (handler reads only media/path/filePath), receipt kind=text, no error
- [#196962](https://github.com/openclaw/openclaw/issues/196962) Discord replies to session events carry an internal UUID as the reply reference when replyToMode is first or all
- [#196938](https://github.com/openclaw/openclaw/issues/196938) [Bug]: auto=inbound still injects TTS directive instructions when modelOverrides.enabled=false
- [#195965](https://github.com/openclaw/openclaw/issues/195965) fix(android): display gateway destination authority and path in TLS trust dialog
- [#196899](https://github.com/openclaw/openclaw/issues/196899) [Bug]: QA smoke subagent completion scenarios time out on main since #196570
- [#195846](https://github.com/openclaw/openclaw/issues/195846) Control UI: Discord sessions missing from the sidebar
- [#196928](https://github.com/openclaw/openclaw/issues/196928) Cron inference-account binding rejects configured cross-provider fallback candidates (regression in 2026.10.10)
- [#196734](https://github.com/openclaw/openclaw/issues/196734) [Bug]: A second copy of a Template without agent.name is named "undefined 2"
- [#195994](https://github.com/openclaw/openclaw/issues/195994) [Android] CronJobDetail: formatCronInterval drops non-zero minutes on multi-day intervals
- [#196863](https://github.com/openclaw/openclaw/issues/196863) sessions_history / chat.history ignore limit and offset on claude-cli-imported transcripts (same page forever, misleading nextOffset)
- [#196849](https://github.com/openclaw/openclaw/issues/196849) [Bug]: Auto-update 2026.10.9 → 2026.10.10 reports ✅ "channels ready" while Discord plugin is left on 10.9 and fails to load (~25 h outage)
- [#196815](https://github.com/openclaw/openclaw/issues/196815) CLI commands print only "The CLI command failed." when the config file cannot be read
- [#196801](https://github.com/openclaw/openclaw/issues/196801) responsePrefix with {model}/{provider}/{think} is never applied to message-tool sends inside an agent run
- [#142528](https://github.com/openclaw/openclaw/issues/142528) [Feature]: Android TLS probe failures should offer connection recovery before manual SHA-256 entry
- [#196500](https://github.com/openclaw/openclaw/issues/196500) Prompt cache block splits omit separator text
- [#196763](https://github.com/openclaw/openclaw/issues/196763) Share attachment session-change regression setup
- [#195774](https://github.com/openclaw/openclaw/issues/195774) fix(ios): camera, microphone and speech grants don't reach the node registration
- [#196749](https://github.com/openclaw/openclaw/issues/196749) [Bug]: Replies of cron jobs targeted at a conversation are never delivered ("Plugin invocation scope is closed")
- [#196249](https://github.com/openclaw/openclaw/issues/196249) [Bug]: Gateway freezes during a long reasoning stream in a Slack DM when Slack streaming is off
- [#196761](https://github.com/openclaw/openclaw/issues/196761) macOS node host reports AUTH_PASSWORD_MISMATCH for months; real cause is a refused agent-DB migration hidden behind a swallowed 'CLI command failed'
- [#195569](https://github.com/openclaw/openclaw/issues/195569) Docs: the iOS background presence beacon throttle is undocumented
- [#195559](https://github.com/openclaw/openclaw/issues/195559) iOS: chat actions and the model menu stay in English in other languages
- [#196708](https://github.com/openclaw/openclaw/issues/196708) [Bug]: mcp serve reports invalid flags as a Gateway startup failure
- [#196676](https://github.com/openclaw/openclaw/issues/196676) [Bug]: Channel replies still say "sign in again" when the provider reports an expired API key (api_key_expired)
- [#196679](https://github.com/openclaw/openclaw/issues/196679) [Bug]: Plugin pages show "Plugin" in the phone header and browser tab title instead of their own name
- [#196721](https://github.com/openclaw/openclaw/issues/196721) CLI backends: memory tools served over the loopback MCP bridge never receive `memoryAudience`
- [#195849](https://github.com/openclaw/openclaw/issues/195849) [Bug]: block streaming splits decimals/versions mid-token ("11.65" → "11." + blank line + "65")
- [#196525](https://github.com/openclaw/openclaw/issues/196525) fix(cache): honor OpenRouter system cache contracts
- [#169157](https://github.com/openclaw/openclaw/issues/169157) [Bug]: SQLite snapshot publication fails with false EXDEV on Windows EFS-encrypted profile directories (doctor aborts)
- [#185298](https://github.com/openclaw/openclaw/issues/185298) [Bug]: media-bearing Control UI live replies re-parse the whole reply per delta (12.4 s at 128 KB)
- [#196670](https://github.com/openclaw/openclaw/issues/196670) heartbeat: a skipped run leaves a stale runningAtMs (in-flight marker never cleared)
- [#196648](https://github.com/openclaw/openclaw/issues/196648) [Bug]: Control UI folds earlier runs' replies into "Worked" on 2026.11.x; request #172571 backport to 2026.11.5
- [#196646](https://github.com/openclaw/openclaw/issues/196646) [Bug]: npm update to 2026.11.2 fails: SQLite header discovery shares 10s timeout across 337k paths
- [#196625](https://github.com/openclaw/openclaw/issues/196625) refactor(rerank): remove redundant private slot request index
- [#196617](https://github.com/openclaw/openclaw/issues/196617) [Bug]: Codex isolated completions send temperature to models that reject it, so Activity recaps 400 on gpt-6-luna
- [#196583](https://github.com/openclaw/openclaw/issues/196583) Control UI Settings: a half-typed new list item is lost when an existing item of the same list is edited
- [#191539](https://github.com/openclaw/openclaw/issues/191539) [Bug]: Native iOS agent pictures show initials instead of desktop images
- [#196536](https://github.com/openclaw/openclaw/issues/196536) [Bug]: Codex provider refusal is hidden behind generic Telegram incomplete-turn failure
- [#196530](https://github.com/openclaw/openclaw/issues/196530) [Bug]: Session previews change literal code identifiers and Markdown examples
- [#195528](https://github.com/openclaw/openclaw/issues/195528) Sessions: another agent's config change refuses unscheduled session events
- [#196534](https://github.com/openclaw/openclaw/issues/196534) [Bug]: openclaw update hangs CPU-bound in original-state capture on a large default workspace: SQLite discovery walks ~/.openclaw/workspace (stable ≤ 2026.11.2)
- [#196514](https://github.com/openclaw/openclaw/issues/196514) Cron account continuity also blocks same-provider multi-account fallback, not only cross-provider
- [#196491](https://github.com/openclaw/openclaw/issues/196491) [Bug]: Isolated cron and heartbeat sessions lose their saved color and dashboard face after each fresh run
- [#196499](https://github.com/openclaw/openclaw/issues/196499) Codex app-server workers accumulate and are never retired: one pair per agent on sign-in refresh, and a second set on first Control UI session-catalog listing (Linux arm64, 2026.9.9)
- [#187590](https://github.com/openclaw/openclaw/issues/187590) [Feature]: Don't let automatic session archiving pause a conversation's automations
- [#196473](https://github.com/openclaw/openclaw/issues/196473) [Bug]: Provider Access renders unknown historical usage as a `***` provider card
- [#196469](https://github.com/openclaw/openclaw/issues/196469) [Feature]: Control UI — option to keep the chat Details panel closed by default
- [#196449](https://github.com/openclaw/openclaw/issues/196449) Templates load slowly and enabled direct links can redirect to chat
- [#196253](https://github.com/openclaw/openclaw/issues/196253) [Bug]: Native completion fallback forces two redundant replies after silent completions
- [#195814](https://github.com/openclaw/openclaw/issues/195814) [Bug]: Matrix: still images sent by the bot are labelled "GIF" in Element Web (no `is_animated` flag on m.image)
- [#196406](https://github.com/openclaw/openclaw/issues/196406) iOS: new chat is created as a child of the currently open session (nests in sidebar)

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 262,478 · **Open issues:** 53,812 · **Last push:** <1h ago

Today in Hermes Agent, a few significant updates were made: the plugin-catalog received an update that bumped the ninsei package to version 0.2.0, and the Decision Ledger was upgraded to version 0.3.2, adding a read-only Decision Board. Additionally, a new whiteboard feature was introduced within the plugin-catalog. Among the newly reported issues, the most pressing is the bug #153048, which involves a 0-byte state.db causing an OperationalError that disrupts live delivery for bots. Another critical bug to monitor is #153063, where the gateway event loop is blocked by synchronous I/O on Windows, resulting in freezes and crashes.

#### ✅ Merged PRs
- [#152912](https://github.com/NousResearch/hermes-agent/pull/152912) feat(plugin-catalog): bump ninsei to 0.2.0
- [#152766](https://github.com/NousResearch/hermes-agent/pull/152766) catalog: update Decision Ledger to v0.3.2 with read-only Decision Board
- [#152907](https://github.com/NousResearch/hermes-agent/pull/152907) feat(plugin-catalog): add whiteboard
- [#152705](https://github.com/NousResearch/hermes-agent/pull/152705) plugin-catalog: bump second-key to 0.2.0 (Plugin Hackathon entry)

#### 🐛 New Issues
- [#153048](https://github.com/NousResearch/hermes-agent/issues/153048) [Bug]: 0-byte state.db passes is_file() -> OperationalError "no such table: sessions" breaks bot live delivery `type/bug` `comp/tools` `tool/file` `P2` 💬1
- [#152817](https://github.com/NousResearch/hermes-agent/issues/152817) [Bug][Desktop]: staged skill/memory write approvals have no visible surface — users must already know "/skills approve <id>" `type/bug` `tool/skills` `P2` `comp/desktop` 💬1
- [#152717](https://github.com/NousResearch/hermes-agent/issues/152717) hermes config migrate on a config below the support floor changes nothing and exits 0 `type/bug` `comp/cli` `area/config` `P2` 💬1
- [#152731](https://github.com/NousResearch/hermes-agent/issues/152731) [Bug]: Hermes Desktop fails to invoke terminal tools with Ollama Qwen 3.5 4B `type/bug` `comp/agent` `tool/terminal` `area/config` 💬1
- [#153079](https://github.com/NousResearch/hermes-agent/issues/153079) [Bug]: cron run archive is redacted again at the gateway storage boundary, after its length stamps are written, so `_archive_answer` returns None `type/bug` `comp/cron` `P2`
- [#153073](https://github.com/NousResearch/hermes-agent/issues/153073) [Bug]: Model picker — the click that opens the menu also activates the row under the cursor (Desktop + webapp) `type/bug` `P2` `comp/desktop` `desktop/chat`
- [#153063](https://github.com/NousResearch/hermes-agent/issues/153063) [Bug]: Gateway event loop blocked by synchronous I/O on Windows (6 profiles) — 4 watchdog captures show loop freezes in scope setup, SQLite writes, hosted-rooms polling and thread spawn; exits 75 and relaunches all day `type/bug` `comp/gateway` `P2` `area/profiles`
- [#153044](https://github.com/NousResearch/hermes-agent/issues/153044) [Bug]: WeCom group messages denied as user_not_authorized — group_allow_from holds chat ids but is matched against sender user id `type/bug` `comp/gateway` `tool/file` `platform/wecom`
- [#153042](https://github.com/NousResearch/hermes-agent/issues/153042) [Bug]: One transient PermissionError reading cron/jobs.json kills a whole cron run (no retry) `type/bug` `comp/cron` `P2` `os/windows`
- [#153043](https://github.com/NousResearch/hermes-agent/issues/153043) [Bug]: Windows cron: uv-managed base interpreter has no pyvenv.cfg, so cron scripts lose venv site-packages `type/bug` `comp/cron` `P2` `os/windows`
- [#153047](https://github.com/NousResearch/hermes-agent/issues/153047) [Bug]: Desktop boot-restore toasts "Resume failed: not_found" — isSessionGoneError only matches the REST wording `type/bug` `P2` `comp/desktop` `area/sessions`
- [#153046](https://github.com/NousResearch/hermes-agent/issues/153046) [Bug]: Windows: _get_process_start_time uses psutil create_time() and can freeze the gateway event loop for tens of seconds `type/bug` `comp/gateway` `P2` `os/windows`
- [#153045](https://github.com/NousResearch/hermes-agent/issues/153045) [Bug]: WeCom bot-mode send silently drops MEDIA: attachments (_send_via ignores media_files) `type/bug` `comp/plugins` `platform/wecom` `P3`
- [#153022](https://github.com/NousResearch/hermes-agent/issues/153022) [Bug]: Bot face clock animates idle faces at 15 fps forever; an idle group room costs ~38% of a core (no off switch, ignores reduced motion) `type/perf` `P2` `comp/desktop` `desktop/chat`
- [#153025](https://github.com/NousResearch/hermes-agent/issues/153025) Unconfigured session provider can trigger remote metadata fetch before turn policy `type/security` `comp/agent` `provider/openrouter` `area/config`
- [#153021](https://github.com/NousResearch/hermes-agent/issues/153021) [Bug]: Bedrock mid-stream serviceUnavailableException classifies as unknown, so the outage ladder never starts `type/bug` `comp/agent` `provider/bedrock` `P2`

#### 🔒 Closed Issues
- [#63485](https://github.com/NousResearch/hermes-agent/issues/63485) fix(telegram): top-level inbound rich_message updates are silently ignored
- [#125695](https://github.com/NousResearch/hermes-agent/issues/125695) [Bug]: Auxiliary Codex routing ignores model scope: one model_entitlement cooldown disables smart approvals, vision, and titles for a year
- [#90789](https://github.com/NousResearch/hermes-agent/issues/90789) [Security]: terminal(background=true) bypasses dangerous command consent gate
- [#111364](https://github.com/NousResearch/hermes-agent/issues/111364) [Wave] Telegram gateway reliability — logging, reconnect recovery, send_path_degraded replay
- [#133348](https://github.com/NousResearch/hermes-agent/issues/133348) [Bug]: Telegram DM topics: document sent into a newly created topic is silently dropped (update receipted, nothing logged)

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 96,694 · **Open issues:** 10,211 · **Last push:** <1h ago

On November 11, 2026, there were no new releases for vLLM, but several important features and bug fixes were merged. Notably, PR #66073 introduced keyframe-aware sampling for the PyNvVideoCodec backend, enhancing multimodal capabilities. Other significant merges include bug fixes related to the ROCm backend, like PR #66876, which allows online quantization, and PR #62769, synchronizing adaptive decisions across TP ranks. Among the new issues, PR #66835 highlighted a loading failure for the LFM2.5-2.6B GGUF model, indicating a missing configuration for embed tokens, which may affect user experience significantly.

#### ✅ Merged PRs
- [#66073](https://github.com/vllm-project/vllm/pull/66073) [Multimodal] Add keyframe-aware sampling to PyNvVideoCodec backend
- [#66433](https://github.com/vllm-project/vllm/pull/66433) [Recipe] Kimi-K3.1-Pro: add B300 AgentX presets, align with InferenceX#4871
- [#64152](https://github.com/vllm-project/vllm/pull/64152) [ROCm][Perf][DSv4.1] Mono: tuned K1 at TP8
- [#62769](https://github.com/vllm-project/vllm/pull/62769) [Bugfix][Spec Decode] Synchronize adaptive DSpark decisions across TP ranks
- [#66876](https://github.com/vllm-project/vllm/pull/66876) [ROCm][Bugfix] Allow lut_b_moe online quantization on ROCm
- [#63838](https://github.com/vllm-project/vllm/pull/63838) [ROCm][Kimi-K3] Keep the AttnRes block bank in a persistent workspace
- [#66203](https://github.com/vllm-project/vllm/pull/66203) [Doc][Recipe] Muse Spark Open: DSpark + specialized decode mode; gate Kimi-K3.1 low-latency decode off AMD
- [#64070](https://github.com/vllm-project/vllm/pull/64070) [Recipe] Qwen3.5: keep configuration-specific content out of the guides
- [#65400](https://github.com/vllm-project/vllm/pull/65400) [Recipe] Kimi-K3, MiniMax-M3.1-Flash: add Rubin VR200 support
- [#65943](https://github.com/vllm-project/vllm/pull/65943) [KVConnector] Reuse the Mooncake PD TransferEngine in the store connector
- [#66645](https://github.com/vllm-project/vllm/pull/66645) [CI] Split the platform and stat logger plugin tests out of Plugin Integration and shard it
- [#65979](https://github.com/vllm-project/vllm/pull/65979) [CI] Enroll Language Models (Extended Generation) in automatic sharding; spawn in test_gemma's dummy-loader test
- [#66819](https://github.com/vllm-project/vllm/pull/66819) [Bugfix][Model] Let DomynEdge mix sliding and full attention layers
- [#64604](https://github.com/vllm-project/vllm/pull/64604) [CI] Enroll Language Models (Hybrid) and Granite Compatibility in automatic sharding
- [#65768](https://github.com/vllm-project/vllm/pull/65768) [Perf][Rust][Benchmark] Reuse allowed tokens in multi-turn generation
- [#66446](https://github.com/vllm-project/vllm/pull/66446) [XPU][CI] Keep all devices visible for external LB
- [#65028](https://github.com/vllm-project/vllm/pull/65028) [Perf][Rust Frontend] Serialize SSE chunks before building the event
- [#64742](https://github.com/vllm-project/vllm/pull/64742) [Bugfix][Rust Frontend] Fix cancellation during request submission
- [#66605](https://github.com/vllm-project/vllm/pull/66605) [KVConnector] Let external connectors declare KV cache memory registration
- [#66892](https://github.com/vllm-project/vllm/pull/66892) [Attention][MiniMax-M3] Allow the BLHNC KV cache layout with an NVFP4 KV cache
- [#61498](https://github.com/vllm-project/vllm/pull/61498) [ROCm][Perf][Kimi-K3] Mono decode layer for Kimi-K3 on MI355X w/ vanilla decode
- [#66875](https://github.com/vllm-project/vllm/pull/66875) [ROCm][Bugfix] Key the FSE MXFP8 scale-layout test check on the selected backend
- [#62345](https://github.com/vllm-project/vllm/pull/62345) [Bugfix][Security] muse: fix quadratic attribute scans in tool-call extraction
- [#62791](https://github.com/vllm-project/vllm/pull/62791) [Bugfix][Benchmark] Take openai-audio input tokens from server usage
- [#66854](https://github.com/vllm-project/vllm/pull/66854) [ROCm][CI] Add `vllm/v1/attention/backend.py` to the :`amd: (MI355 DPX) MLA Kernels` test group in main CI
- [#66642](https://github.com/vllm-project/vllm/pull/66642) [Recipe] Kimi-K3.1-Pro: add GB300 AgentX presets, align with InferenceX#4907
- [#65704](https://github.com/vllm-project/vllm/pull/65704) [Bugfix][GLM-5.3] Build the MTP eh_proj low-latency GEMM plan
- [#64663](https://github.com/vllm-project/vllm/pull/64663) [Doc] Named and required tool_choice need a tool parser
- [#66798](https://github.com/vllm-project/vllm/pull/66798) [ROCm][CI] Stub owns_indexer and index_epoch in the merged-cache sparse MLA test
- [#66370](https://github.com/vllm-project/vllm/pull/66370) [Bugfix][Core] Re-prepare model state after extensible KV cache extension (Kimi-K3 AMD specialized decode)
- [#65217](https://github.com/vllm-project/vllm/pull/65217) [Spec Decode][MRV2] Add prefill_context_kv_only for P/D prefill instances
- [#66824](https://github.com/vllm-project/vllm/pull/66824) [ROCm][CI] Re-enable ROCM_AITER_UNIFIED_ATTN in Whisper transcription tests

#### 🐛 New Issues
- [#66835](https://github.com/vllm-project/vllm/issues/66835) [Bug]: LFM2.5-2.6B GGUF fails to load: missing embed_tokens.qweight_type `bug` `quantization` 💬2
- [#66861](https://github.com/vllm-project/vllm/issues/66861) [ROCm] routed_mxfp8 cases of test_fse_online_quantization_routed_shared fail with scale shape mismatch `rocm` `quantization` 💬2
- [#66782](https://github.com/vllm-project/vllm/issues/66782) [RFC]: [KV Offload] Request-level KV promotions: decide at promotion time, pin until load `RFC` 💬2
- [#66801](https://github.com/vllm-project/vllm/issues/66801) [Bug]: Gemma 4 audio LoRA skips valid frames when batching unequal-length clips 💬2
- [#66700](https://github.com/vllm-project/vllm/issues/66700) [Bug]: In-process engine: requests aborted by a sleep or pause never finish, so `LLMEngine` stays busy forever 💬2
- [#66696](https://github.com/vllm-project/vllm/issues/66696) [Bug][KV Offload] A request with more unstored chunks than the CPU tier is never offloaded ("cannot store chunks" on every step) 💬2
- [#66698](https://github.com/vllm-project/vllm/issues/66698) [Bug]: `vllm bench serve --num-warmups` primes the prefix cache, so the first measured request is a cache hit `kv-cache-manager` 💬2
- [#66922](https://github.com/vllm-project/vllm/issues/66922) [Installation]: Bug / Enhancement][Blackwell HGX B300] Pre-flight check for nvcc/ninja before multi-TB shard load & graceful fallback for NVLS multicast bind failure (CUDA error 401) `installation` `kimi` 💬1
- [#66753](https://github.com/vllm-project/vllm/issues/66753) [RFC]: Tree speculative decoding in vLLM `RFC` `speculative-decoding` 💬1
- [#66902](https://github.com/vllm-project/vllm/issues/66902) [Bug]: Gemma 4: a LoRA on k_proj is not applied to the value on attention_k_eq_v layers (silent mismatch with Transformers) 💬1
- [#66915](https://github.com/vllm-project/vllm/issues/66915) [Feature]: AMD Ryzen AI Halo aka strix halo vLLM upstream CI `feature request` `rocm` 💬1
- [#66896](https://github.com/vllm-project/vllm/issues/66896) [Bug]: DeepSeek-V4.1 image delimiter parameters escape `_mark_tower_model` `deepseek` 💬1
- [#66886](https://github.com/vllm-project/vllm/issues/66886) [Bug]: MultiModuleMTPSpeculator Leaks Stale Request State into New Draft Contexts `bug` 💬1
- [#66786](https://github.com/vllm-project/vllm/issues/66786) [Bug]: Prefix cache hits always 0 on identical prompts (v0.33.0rc3, FLASH_ATTN, LBNHC KV cache layout) `kv-cache-manager` 💬1
- [#66724](https://github.com/vllm-project/vllm/issues/66724) [Bug]: Prefill node livelocks forever (Running: 0, 0 tokens/step) with sliding-window KV groups and async KV loads: capped admission counts null-padded blocks 💬1
- [#66699](https://github.com/vllm-project/vllm/issues/66699) [ROCm Product Quality Control]: Weekly Kimi Vendor Verifier (KVV) accuracy regression testing on AMD `feature request` `rocm` `kimi` 💬1
- [#66873](https://github.com/vllm-project/vllm/issues/66873) [RFC]: Replicate selected blocks across TP ranks for tensor parallelism over slow inter-node links
- [#66912](https://github.com/vllm-project/vllm/issues/66912) [Bug]: TP ranks can silently sample different tokens when their sampler configuration differs (FlashInfer fallback, per-node --seed)
- [#66904](https://github.com/vllm-project/vllm/issues/66904) [MoE] Expose FlashInfer CUTLASS MoE's fused-finalize opt-out for run-to-run reproducibility (NVFP4, SM121) `nvidia` `batch-invariance`
- [#66898](https://github.com/vllm-project/vllm/issues/66898) [Bug]: RunAI streamer OOMs on DeepSeek-V4.1-Flash: Engram tables are streamed to the device instead of CPU `deepseek`
- [#66894](https://github.com/vllm-project/vllm/issues/66894) [Feature]: Jetson AGX Thor (sm_110) support for sparse-attention models (GLM-5.3, DeepSeek-V4.1) `deepseek` `glm`
- [#66885](https://github.com/vllm-project/vllm/issues/66885) [Bug]: Cross-Tenant Vision-LoRA Cache Poisoning via Caller-Controlled UUIDs `bug`
- [#66844](https://github.com/vllm-project/vllm/issues/66844) [RFC]: Exact-end Mamba states and whole-state eviction for hybrid prefix caching `kv-cache-manager`
- [#66858](https://github.com/vllm-project/vllm/issues/66858) [RFC]: One rule for tools + response_format under tool_choice="auto" (Python and Rust frontends disagree) `structured-output` `RFC` `tool-calling` `rust`
- [#66806](https://github.com/vllm-project/vllm/issues/66806) [Bug]: Investigate DeepSeek V4.1 producer prefill graph and replay output differences `deepseek`
- [#66810](https://github.com/vllm-project/vllm/issues/66810) [Bug]: --cpu-offload-gb is silently ignored with --model-impl transformers `bug`
- [#66794](https://github.com/vllm-project/vllm/issues/66794) [RFC]: extract_hidden_states — stream hidden states to CPU pages with token-hash prefix backfill `RFC`
- [#66750](https://github.com/vllm-project/vllm/issues/66750) [CI Failure]: pre-commit undefined _start_decoding in tests/v1/core/test_scheduler.py `ci-failure`
- [#66751](https://github.com/vllm-project/vllm/issues/66751) [RFC]: Draft Window KV: Dual-Boundary Recovery and Sparse P/D Page Fill `RFC` `speculative-decoding`
- [#66729](https://github.com/vllm-project/vllm/issues/66729) [Bug]: functiongemma chat template renders tool call arguments as Python reprs, not the format its parser documents `tool-calling`
- [#66727](https://github.com/vllm-project/vllm/issues/66727) [Feature]: Release whl for torch 2.15.0 and cu134 `feature request`
- [#66713](https://github.com/vllm-project/vllm/issues/66713) [EFA Product Quality Control]: Nightly multi-node E2E functionality, accuracy & performance testing for EFA NIXL and EFA Mooncake Store, EFA DeepEP `feature request` `kv-connector`

#### 🔒 Closed Issues
- [#31624](https://github.com/vllm-project/vllm/issues/31624) [Bug]: ModelOpt Llama-4 Checkpoints Take 5+ minutes to load
- [#38693](https://github.com/vllm-project/vllm/issues/38693) [Feature]: Parity with CUDA: vLLM router should have ROCm CI
- [#43916](https://github.com/vllm-project/vllm/issues/43916) [Parity with CUDA]: Add top 5-10 popular OSS models into mi355, mi325, mi300 into vLLM nightly performance & accuracy regression testing & dashboard
- [#48405](https://github.com/vllm-project/vllm/issues/48405) [Bug]: glm-5.2-fp8 with --kvcache-dtype fp8 with h20-3e error
- [#59116](https://github.com/vllm-project/vllm/issues/59116) [Bug]: SMG MoRI-IO PD disagg
- [#48406](https://github.com/vllm-project/vllm/issues/48406) [Bug]: glm-5.2-fp8 with --kvcache-dtype fp8 with h20-3e with dspark error
- [#48043](https://github.com/vllm-project/vllm/issues/48043) [Bug][ROCm] Triton kernel_paged_attention_2d illegal memory access (hipErrorLaunchFailure) on gfx950 (MI350X) under long-context decode
- [#52738](https://github.com/vllm-project/vllm/issues/52738) [Feature]: Map unsupported reasoning_effort values to the nearest level the chat template accepts
- [#65106](https://github.com/vllm-project/vllm/issues/65106) [Bug]: [ROCm][Kimi-K3] DBO: MoE workspace locked smaller than the DP-gathered batch, first request fails
- [#65523](https://github.com/vllm-project/vllm/issues/65523) [Bug]: MiMo-V2.6 video timestamps ignore real frame times (every clip is labelled 00:00–00:30)
- [#61539](https://github.com/vllm-project/vllm/issues/61539) [RFC]: Explicit row layouts for routed-expert capture
- [#48380](https://github.com/vllm-project/vllm/issues/48380) [Bug]: DSpark/DFlash speculative decoding fails to load with --kv-cache-dtype fp8_ds_mla: draft inherits an MLA-only cache layout
- [#48423](https://github.com/vllm-project/vllm/issues/48423) [Bug]: MiniCPM-V-4.6 fails to load in vLLM 0.25.0: qkv_proj is incorrectly mapped to qkqkv_proj
- [#48441](https://github.com/vllm-project/vllm/issues/48441) [Bug]: Local PP Rank0 stalls in legacy non-SPMD Ray AsyncLLMEngine under imbalanced pipeline stages
- [#54555](https://github.com/vllm-project/vllm/issues/54555) [Bug]: V1 spec-decode proposer never constructs the positions buffer a both-XD-RoPE drafter seeds from
- [#66243](https://github.com/vllm-project/vllm/issues/66243) [Bug][Model] dots.ocr/dots.mocr: vision tower host syncs make the model untestable under VLLM_GPU_SYNC_CHECK
- [#65533](https://github.com/vllm-project/vllm/issues/65533) [Bug]: GLM-4.7-AWQ on Blackwell (sm_120) produces degenerate/looping output on v0.25.1 but correct on v0.14.0 — regression in compiled AWQ-MoE kernels
- [#66902](https://github.com/vllm-project/vllm/issues/66902) [Bug]: Gemma 4: a LoRA on k_proj is not applied to the value on attention_k_eq_v layers (silent mismatch with Transformers)
- [#66786](https://github.com/vllm-project/vllm/issues/66786) [Bug]: Prefix cache hits always 0 on identical prompts (v0.33.0rc3, FLASH_ATTN, LBNHC KV cache layout)
- [#58532](https://github.com/vllm-project/vllm/issues/58532) [Bug]: Triton fused MoE incorrectly indexes per-channel weight scales with per-tensor activations
- [#66750](https://github.com/vllm-project/vllm/issues/66750) [CI Failure]: pre-commit undefined _start_decoding in tests/v1/core/test_scheduler.py
- [#66122](https://github.com/vllm-project/vllm/issues/66122) [Feature]: Integrate FlashTopK fused indexer top-k for DSA prefill on Hopper and Blackwell (SM90/SM100)

### SGLang (`sgl-project/sglang`)

**Stars:** 38,700 · **Open issues:** 6,583 · **Last push:** <1h ago

No new releases were recorded for SGLang today. However, several significant merged PRs were completed, including a refactor of device-pool mapping in hisparse and the introduction of a new flash-attn feature for NVIDIA that enhances FP8 e4m3 KV cache handling. Fixes such as the normalization issue in diffusion workflows and the update to the GLM-5.3-Flash documentation highlight ongoing performance and reliability improvements. Additionally, a new bug was reported regarding the FlexKV system in SGLang, which is exposing tenant and LoRA KV cache details across namespaces, indicating areas that may require urgent attention.

#### ✅ Merged PRs
- [#30893](https://github.com/sgl-project/sglang/pull/30893) [Refactor] hisparse: unify device-pool mapping and selection
- [#46965](https://github.com/sgl-project/sglang/pull/46965) [Feat] [NVIDIA] flash-attn: FA4 SM90 FP8 e4m3 KV cache for head_dim 256 and 512 (Gemma-4)
- [#49337](https://github.com/sgl-project/sglang/pull/49337) [Fix] moe: Validate the scale grid and use logical K for even_Ks in the GPTQ/AWQ Triton MoE kernel
- [#44588](https://github.com/sgl-project/sglang/pull/44588) [Feat] spec: Online acceptance estimator for DSpark confidence-scheduled verification
- [#49660](https://github.com/sgl-project/sglang/pull/49660) [Refactor] moe: Remove the triton_kernel MoE runner backend
- [#49365](https://github.com/sgl-project/sglang/pull/49365) [Refactor] custom-ar-v2: Single-word push epoch and consume-style pull semaphores
- [#44458](https://github.com/sgl-project/sglang/pull/44458) [Perf] [AMD] attention: Use aiter's Triton MLA decode in the aiter backend on gfx1250
- [#48397](https://github.com/sgl-project/sglang/pull/48397) [Fix] [AMD] moe: Stop dropping FP32 partials in GLM Gluon TP8 32K MoE
- [#49448](https://github.com/sgl-project/sglang/pull/49448) [Perf] diffusion: Apply the Qwen3 text encoder's RoPE with one FlashInfer kernel
- [#49071](https://github.com/sgl-project/sglang/pull/49071) [Doc] GLM-5.3-Flash: Add B300 TP4 AgentX tuning results
- [#48810](https://github.com/sgl-project/sglang/pull/48810) [Fix] [AMD] mxfp4: Keep MoE weight layout and dispatch consistent with the selected runner
- [#49357](https://github.com/sgl-project/sglang/pull/49357) [Fix] compressed-tensors: Size the FP8 MoE w13 by the layer's gating
- [#49279](https://github.com/sgl-project/sglang/pull/49279) [Fix] diffusion: Compute CFG normalization over the whole latent under sequence parallelism (Z-Image)
- [#49442](https://github.com/sgl-project/sglang/pull/49442) [Fix] diffusion/qwen-image-edit: Run n > 1 edit outputs one by one
- [#49538](https://github.com/sgl-project/sglang/pull/49538) [Refactor] moe: Remove the SM120 top-22 small-M router path
- [#49568](https://github.com/sgl-project/sglang/pull/49568) [Doc] skills: One implementation per kernel contract, plus JIT kernel style rules
- [#49670](https://github.com/sgl-project/sglang/pull/49670) [CI] kimi-k3.1: Add B300 CI tests for the Balanced and Low Latency recipes
- [#48117](https://github.com/sgl-project/sglang/pull/48117) [Fix] spec: Prune the draft branch instead of crashing when the grammar rejects a token
- [#49524](https://github.com/sgl-project/sglang/pull/49524) [Perf] distributed: Keep the multimem logits all-gather on a multi-node NVLink clique
- [#49622](https://github.com/sgl-project/sglang/pull/49622) [Fix] sgl-router: pass a streaming prefill's in-band 4xx through to the client
- [#48778](https://github.com/sgl-project/sglang/pull/48778) [Fix] multimodal: Fail bad client media with a client error
- [#44396](https://github.com/sgl-project/sglang/pull/44396) [Perf] kda-replayssm: Reuse the verify-fused commit step indices
- [#49397](https://github.com/sgl-project/sglang/pull/49397) [Fix] http_server: Exit when a scheduler dies with multiple tokenizer workers
- [#48938](https://github.com/sgl-project/sglang/pull/48938) [Fix] watchdog: Let py-spy attach to watched processes in CI
- [#47999](https://github.com/sgl-project/sglang/pull/47999) [CI] [NVIDIA] docker: Publish the CUDA 13.4 nightly image for x86_64 as well as aarch64
- [#49623](https://github.com/sgl-project/sglang/pull/49623) [Refactor] scheduler: Each request records the list that holds it
- [#49659](https://github.com/sgl-project/sglang/pull/49659) [Refactor] quantization: Quantize MXFP8 weights with a JIT kernel instead of triton_kernels
- [#49642](https://github.com/sgl-project/sglang/pull/49642) [CI] megakernel: Run sgl-nvidia-mega PRs' tests on SGLang's GB300 runners
- [#48731](https://github.com/sgl-project/sglang/pull/48731) [Perf] [NVIDIA] dsv41: Gather 16 local Engram rows per program on SM103 and SM107
- [#46548](https://github.com/sgl-project/sglang/pull/46548) [Fix] PD/PP: Fix consensus checker failure while using PP prefill
- [#49647](https://github.com/sgl-project/sglang/pull/49647) [Fix] test: pin speculative_dspark_lm_head_dtype in the resolvable-field whitelist
- [#49139](https://github.com/sgl-project/sglang/pull/49139) [Perf] [NVIDIA] unquant: Re-land low-M BF16 autotune via FlashInfer CuTe DSL mm_bf16
- [#49392](https://github.com/sgl-project/sglang/pull/49392) [Feat] sgl-router: Render StepFun (Step-3.5-Flash, Step-3.7-Flash, Step-5-Preview) through sglang-processor
- [#49355](https://github.com/sgl-project/sglang/pull/49355) [Feat] linker: Support Kimi-K3.1 DSA, MLA draft and DCP pools in the direct linker
- [#49606](https://github.com/sgl-project/sglang/pull/49606) [Fix] sgl-router: Render and tokenize off the async workers
- [#49616](https://github.com/sgl-project/sglang/pull/49616) [Fix] dsa: Give each FlashMLA decode graph its own schedule for native-head kernels
- [#42119](https://github.com/sgl-project/sglang/pull/42119) [Feat] [AMD] quantization: enable GPTQ and AutoRound INT4 checkpoints
- [#44615](https://github.com/sgl-project/sglang/pull/44615) [Perf] NIXL: KV packing for TP-heterogeneous transfer (Muse Spark Open)
- [#49410](https://github.com/sgl-project/sglang/pull/49410) [CI] docker: Follow Mega main for nightly and pin releases
- [#48777](https://github.com/sgl-project/sglang/pull/48777) [Feat] kimi-k3: Shape chat responses to the K3 wire format
- [#49496](https://github.com/sgl-project/sglang/pull/49496) [Refactor] scheduler: Move a request between owner lists in one call
- [#49595](https://github.com/sgl-project/sglang/pull/49595) [Perf] dspark: opt-in MXFP8 draft lm_head on SM10x via --speculative-dspark-lm-head-dtype
- [#49321](https://github.com/sgl-project/sglang/pull/49321) [Perf] [NVIDIA] dsv41: Fork the decode attention mHC mix at the MegaAttention core
- [#49043](https://github.com/sgl-project/sglang/pull/49043) [Fix] linker: Renew Mooncake read leases that lapse during a load
- [#49081](https://github.com/sgl-project/sglang/pull/49081) [Feat] cli: Add the CLI Guide
- [#47626](https://github.com/sgl-project/sglang/pull/47626) [Fix] hicache: settle storage backups at the rank-agreed written prefix
- [#49443](https://github.com/sgl-project/sglang/pull/49443) [CI] [AMD] nightly-benchmark: Run InferenceX's AgentX DeepSeek-V4.1-Flash curve on MI35x
- [#47371](https://github.com/sgl-project/sglang/pull/47371) [Feat] [AMD] muse-spark: Add the ROCm day0 implementation
- [#49573](https://github.com/sgl-project/sglang/pull/49573) [Fix] bench: Check the chat template on the tokenizer the benchmark loads
- [#49423](https://github.com/sgl-project/sglang/pull/49423) [Test] diffusion: Make cancellation backpressure deterministic
- [#49577](https://github.com/sgl-project/sglang/pull/49577) [CI] ci: Raise jit-kernel Run test timeout to 90 minutes
- [#49593](https://github.com/sgl-project/sglang/pull/49593) [Doc] diffusion: Surface measured H3-Image deployment performance
- [#49311](https://github.com/sgl-project/sglang/pull/49311) [Fix] mem_cache: Signal a double free of unified pages when invariant checks are on
- [#49192](https://github.com/sgl-project/sglang/pull/49192) [Fix] sgl-router: Count media in typed gRPC Generate, embeddings and rerank access logs
- [#47617](https://github.com/sgl-project/sglang/pull/47617) [Fix] hicache: keep the storage ack sequence on backend failures, stop workers in lockstep, fail the rank when a worker dies
- [#48928](https://github.com/sgl-project/sglang/pull/48928) [Perf] DeepSeek-V4.1-Flash: Use segmented fastokens for prompt encoding
- [#49312](https://github.com/sgl-project/sglang/pull/49312) [Doc] mem_cache: Document unified memory
- [#49310](https://github.com/sgl-project/sglang/pull/49310) [Fix] scheduler: Apply the write-after-read barrier in the PP loops and on every unified-memory device
- [#49309](https://github.com/sgl-project/sglang/pull/49309) [Fix] mamba: Commit verified states into the slots the verify forward resolved
- [#49301](https://github.com/sgl-project/sglang/pull/49301) [Feat] mem_cache: Ask every unified memory capacity question of every pipeline stage
- [#49300](https://github.com/sgl-project/sglang/pull/49300) [Refactor] mem_cache: Ask unified memory every capacity question as a demand
- [#49299](https://github.com/sgl-project/sglang/pull/49299) [Fix] mem_cache: Reset a reused request row's state in the next forward
- [#49459](https://github.com/sgl-project/sglang/pull/49459) [CI] rust-server: Pass architectures to ModelConfig in the crash-dump test
- [#49335](https://github.com/sgl-project/sglang/pull/49335) [CI] pp: Launch the PP test servers on DEFAULT_URL_FOR_TEST
- [#49004](https://github.com/sgl-project/sglang/pull/49004) [Fix] [AMD] rocprofiler-sdk: fix torch.profiler hang on TP for gfx1250-rocm1010
- [#49162](https://github.com/sgl-project/sglang/pull/49162) [Fix] cosmos3: Keep single-GPU BF16 CFG arithmetic under CFG parallel
- [#45264](https://github.com/sgl-project/sglang/pull/45264) [Perf] [NVIDIA] mhc: Use BLOCK_K=32 for the hc_mix kernel on SM120
- [#45262](https://github.com/sgl-project/sglang/pull/45262) [Perf] [NVIDIA] fp8: Use FlashInfer b12x for block-fp8-as-MXFP8 linears on SM12x
- [#47398](https://github.com/sgl-project/sglang/pull/47398) [Feat] [AMD] gpt-oss: Mixed W4A8 MoE on gfx1250, Gluon below a token count and FlyDSL above
- [#42855](https://github.com/sgl-project/sglang/pull/42855) [Perf] [NVIDIA] dspark: Opt-in fused int8 Markov walk kernel for bs <= 64 on Hopper
- [#49405](https://github.com/sgl-project/sglang/pull/49405) [Feat] diffusion/sana-video2: Support sequence parallelism
- [#49552](https://github.com/sgl-project/sglang/pull/49552) [Feat] diffusion/model: Support MiniMaxAI/MiniMax-H3-Image

#### 🐛 New Issues
- [#49519](https://github.com/sgl-project/sglang/issues/49519) [Bug] rust-server: /generate text prompts get no BOS when the tokenizer relies on add_bos_token 💬4
- [#49493](https://github.com/sgl-project/sglang/issues/49493) [Bug] Qwen4-Exp PLE: BF16 n-gram shards are cast to FP8 with a unit scale when the checkpoint's config sets ple_embedding_dtype (primitive-ai/Qwen3.8-Flash-Next-NVFP4) 💬2
- [#49517](https://github.com/sgl-project/sglang/issues/49517) [Bug] diffusion_num_queue_reqs does not reflect requests pending in the ZMQ transport 💬2
- [#49549](https://github.com/sgl-project/sglang/issues/49549) [Bug] [NPU] Ascend 950: SelfAttentionOperation CreateOperation failed on Qwen3-0.6B 💬1
- [#49657](https://github.com/sgl-project/sglang/issues/49657) [Bug] [AMD gfx12] HIP custom all-reduce 1-stage gives wrong, rank-divergent sums over PCIe (2x R9700): relaxed start flag 💬1
- [#49676](https://github.com/sgl-project/sglang/issues/49676) [Feature] Share GPU memory between the KV pool and the mamba/linear-attention state pool instead of a static split
- [#49569](https://github.com/sgl-project/sglang/issues/49569) [Feature] Optimize Qwen3-VL reranking with concurrent, exact-label, prefill-only scoring 💬1
- [#49536](https://github.com/sgl-project/sglang/issues/49536) [RFC] Kimi K3 decode: FlashInfer reuse and integration scope 💬1
- [#49454](https://github.com/sgl-project/sglang/issues/49454) [Feat] kda: run the Kimi-K3 fused FlashInfer decode on a BF16 SSM state (NVIDIA SM100/103) 💬1
- [#49452](https://github.com/sgl-project/sglang/issues/49452) [Feat] kda: run the Kimi-K3 fused FlashInfer decode on a BF16 SSM state (NVIDIA SM100/103) 💬1
- [#49626](https://github.com/sgl-project/sglang/issues/49626) [Bug] Cross-Tenant Oracle Leak via NGRAM Speculative Decoding Metrics in SGLang
- [#49624](https://github.com/sgl-project/sglang/issues/49624) [Bug] SGLang FlexKV Exposes Tenant and LoRA KV Cache Across Namespaces
- [#49602](https://github.com/sgl-project/sglang/issues/49602) nightly-test-amd.yml reports "All ROCm nightly test jobs passed" when 46 of 48 jobs were skipped
- [#49550](https://github.com/sgl-project/sglang/issues/49550) [Bug] /v1/responses: late system/developer messages are moved to the top of the prompt, so the prefix cache misses every turn
- [#49541](https://github.com/sgl-project/sglang/issues/49541) [Bug] FA3 SM90 FP8 two-level accumulation rebuild is ~2.6x slower for paged head_dim=256
- [#49494](https://github.com/sgl-project/sglang/issues/49494) [Bug] scheduler_0 crashes with exit code -3 (SIGQUIT) during normal decode operation — no Python exception logged, likely C++ layer crash
- [#49491](https://github.com/sgl-project/sglang/issues/49491) [Bug] ModelOpt NVFP4 fused linear: unwritten parts decide the global scales (Gemma 4 KV-shared layers store only q_proj)
- [#49486](https://github.com/sgl-project/sglang/issues/49486) [Bug] FP8 checkpoint whose lm_head and embed_tokens are stored in FP8 but listed in modules_to_not_convert: SGLang loads the raw FP8 codes as BF16 values
- [#49483](https://github.com/sgl-project/sglang/issues/49483) [Bug] ModelOpt MIXED_PRECISION on Llama / Mistral 3: fused qkv_proj and gate_up_proj are built unquantized (the model classes declare no packed_modules_mapping)
- [#49460](https://github.com/sgl-project/sglang/issues/49460) [CI] test_rust_server_crash_dump fails on main: ModelConfig missing required 'architectures'
- [#49449](https://github.com/sgl-project/sglang/issues/49449) [EFA Product Quality Control]: Nightly multi-node E2E functionality, accuracy & performance testing for EFA NIXL and EFA Mooncake Store, EFA DeepEP
- [#49441](https://github.com/sgl-project/sglang/issues/49441) [ROCm Product Quality Control]: Weekly Kimi Vendor Verifier (KVV) accuracy regression testing on AMD

#### 🔒 Closed Issues
- [#25760](https://github.com/sgl-project/sglang/issues/25760) [Roadmap] SGLang's new lightweight SessionAware Router module for bucket-based PD serving
- [#41372](https://github.com/sgl-project/sglang/issues/41372) [Bug]: scheduler Req.decoded_text is never written: dead stop-string fallback at schedule_batch.py:1846 and empty DecodeStatus seed on eviction re-init
- [#36678](https://github.com/sgl-project/sglang/issues/36678) [Feature] Expose opt-in per-request metrics in OpenAI-compatible responses
- [#49340](https://github.com/sgl-project/sglang/issues/49340) [CI] jit-kernel: B200 runs time out on a cold JIT cache after shared-header changes
- [#38840](https://github.com/sgl-project/sglang/issues/38840) [Bug] Encoder-decoder KV cache: shared boundary page is double-freed when page_size > 1
- [#38889](https://github.com/sgl-project/sglang/issues/38889) [Feature] Move shared cache transfer types out of hicache_storage.py
- [#29913](https://github.com/sgl-project/sglang/issues/29913) FP4 KV Roadmap
- [#49549](https://github.com/sgl-project/sglang/issues/49549) [Bug] [NPU] Ascend 950: SelfAttentionOperation CreateOperation failed on Qwen3-0.6B
- [#39073](https://github.com/sgl-project/sglang/issues/39073) [Bug] Fatal multimodal processor lookup errors omit processor import failures
- [#39070](https://github.com/sgl-project/sglang/issues/39070) [Bug] FLUX.2 rejects --attention-backend sage_attn: model-level whitelist excludes SAGE_ATTN (regression since #22423)
- [#38319](https://github.com/sgl-project/sglang/issues/38319) [Bug] Chunked Prefill + Radix Insert race corrupts KV pages (QSA, Qwen3.8-Flash-Next)
- [#38981](https://github.com/sgl-project/sglang/issues/38981) [Bug] Kimi-K3: aborting a request mid-prefill kills every rank — `free_kv_row_segments` asserts "segment at N shares a page with the one ending at N"
- [#49385](https://github.com/sgl-project/sglang/issues/49385) [Bug] dsv4: top-k v2 JIT module fails to build on Vera Rubin (CC 10.7, cu134 image): cluster kernels exceed 48 KB of static shared memory
- [#49452](https://github.com/sgl-project/sglang/issues/49452) [Feat] kda: run the Kimi-K3 fused FlashInfer decode on a BF16 SSM state (NVIDIA SM100/103)
- [#49460](https://github.com/sgl-project/sglang/issues/49460) [CI] test_rust_server_crash_dump fails on main: ModelConfig missing required 'architectures'

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 133,973 · **Open issues:** 2,586 · **Last push:** <1h ago

On November 11, 2026, llama.cpp released several new versions including b12271, which enhances the backend scheduler compatibility, and b12270, which introduces precision tests for matrix operations. Other notable releases included b12263, that addresses CUDA memory reservation issues, and b12259, adding support for the Kimi K3.1 vision model. In merged pull requests, the user interface saw updates to improve chat organization and model display, while multiple fixes were made to prevent audio inconsistencies and enhance the user experience. However, a critical new issue emerged (#32050) regarding audio discrepancies in repeated requests with Qwen3-TTS when using Vulkan matrices on certain hardware.

#### 🚀 New Releases
- [b12271](https://github.com/ggml-org/llama.cpp/releases/tag/b12271) b12271
- [b12270](https://github.com/ggml-org/llama.cpp/releases/tag/b12270) b12270
- [b12263](https://github.com/ggml-org/llama.cpp/releases/tag/b12263) b12263
- [b12262](https://github.com/ggml-org/llama.cpp/releases/tag/b12262) b12262
- [b12261](https://github.com/ggml-org/llama.cpp/releases/tag/b12261) b12261
- [b12259](https://github.com/ggml-org/llama.cpp/releases/tag/b12259) b12259
- [b12257](https://github.com/ggml-org/llama.cpp/releases/tag/b12257) b12257
- [b12255](https://github.com/ggml-org/llama.cpp/releases/tag/b12255) b12255
- [b12254](https://github.com/ggml-org/llama.cpp/releases/tag/b12254) b12254
- [b12253](https://github.com/ggml-org/llama.cpp/releases/tag/b12253) b12253

#### ✅ Merged PRs
- [#31789](https://github.com/ggml-org/llama.cpp/pull/31789) ui: update the README banner to the new llama.cpp cover and remove the legacy brand assets
- [#32035](https://github.com/ggml-org/llama.cpp/pull/32035) ui: keep a hidden sidebar from intercepting clicks again
- [#32017](https://github.com/ggml-org/llama.cpp/pull/32017) chat : fix Muse Spark ignoring response_format json_schema
- [#31837](https://github.com/ggml-org/llama.cpp/pull/31837) ui: show audio in Discover for models whose mmproj has an audio encoder
- [#32030](https://github.com/ggml-org/llama.cpp/pull/32030) ci : bump ty to 0.0.100
- [#32040](https://github.com/ggml-org/llama.cpp/pull/32040) mtmd: fix string format, rename to mtmd_format
- [#31946](https://github.com/ggml-org/llama.cpp/pull/31946) ggml : remove DIAG_MASK_INF and DIAG_MASK_ZERO
- [#32022](https://github.com/ggml-org/llama.cpp/pull/32022) ui: move Models, MCP and Settings to a sidebar footer
- [#32018](https://github.com/ggml-org/llama.cpp/pull/32018) cuda : remove unused ids and type_src0 parameters
- [#28392](https://github.com/ggml-org/llama.cpp/pull/28392) Add FP8 KV-cache support
- [#32015](https://github.com/ggml-org/llama.cpp/pull/32015) graph : mark every sampling chain as an output to prevent aliasing
- [#32009](https://github.com/ggml-org/llama.cpp/pull/32009) llama : reuse backend scheduler when sched_params are compatible
- [#31896](https://github.com/ggml-org/llama.cpp/pull/31896) ggml : add MUL_MAT src1 precision tests and gating
- [#32012](https://github.com/ggml-org/llama.cpp/pull/32012) ui: gather chats into named groups in the sidebar
- [#31884](https://github.com/ggml-org/llama.cpp/pull/31884) cuda : remove unused quantize_cuda_t typedef
- [#32010](https://github.com/ggml-org/llama.cpp/pull/32010) ui: show settings save button even while focused
- [#31973](https://github.com/ggml-org/llama.cpp/pull/31973) ui: expand the chat form into a large editor for longer messages
- [#32006](https://github.com/ggml-org/llama.cpp/pull/32006) convert : mark Sarvam byte fallback tokens as BYTE
- [#31860](https://github.com/ggml-org/llama.cpp/pull/31860) workaround: gpt-oss gguf conversion for p-e-w/gpt-oss-20b-heretic-ara-v4
- [#30542](https://github.com/ggml-org/llama.cpp/pull/30542) cuda : halve VMM pool reservation size and retry on cuMemAddressReserve failure
- [#32004](https://github.com/ggml-org/llama.cpp/pull/32004) CUDA: skip graph compat check when graph is being reused
- [#31945](https://github.com/ggml-org/llama.cpp/pull/31945) mtmd: share compute buffer among subcontext
- [#31982](https://github.com/ggml-org/llama.cpp/pull/31982) server: fix output lang for realtime api
- [#31980](https://github.com/ggml-org/llama.cpp/pull/31980) mtmd: add kimi K3.1 vision
- [#31701](https://github.com/ggml-org/llama.cpp/pull/31701) ggml : fix FreeBSD Vulkan build by setting _XOPEN_SOURCE=700
- [#32001](https://github.com/ggml-org/llama.cpp/pull/32001) CUDA: refactor graph and concurrent stream state out of common.cuh
- [#31955](https://github.com/ggml-org/llama.cpp/pull/31955) ui: use a live-preview markdown editor for the chat form input
- [#31984](https://github.com/ggml-org/llama.cpp/pull/31984) model : stop renaming the recurrent cache tensors in PLaMo2
- [#31834](https://github.com/ggml-org/llama.cpp/pull/31834) common/json-schema : fix allOf with plain types (e.g. integer) generating an empty object grammar
- [#31937](https://github.com/ggml-org/llama.cpp/pull/31937) common : escape control characters in tool argument strings
- [#30591](https://github.com/ggml-org/llama.cpp/pull/30591) vulkan: add tiled-transpose concat shader for Qwen models
- [#31270](https://github.com/ggml-org/llama.cpp/pull/31270) cann: fail early when checking if buffer type is supported
- [#30156](https://github.com/ggml-org/llama.cpp/pull/30156) sycl: Add device-side MoE scheduler
- [#30415](https://github.com/ggml-org/llama.cpp/pull/30415) ggml-rpc : fail gracefully on unreachable endpoints and failed handshakes
- [#31930](https://github.com/ggml-org/llama.cpp/pull/31930) vulkan: Divide GROUP_NORM workgroup to 2D to avoid maxComputeWorkGroupCount limit
- [#31890](https://github.com/ggml-org/llama.cpp/pull/31890) vulkan: Fix out of bounds reads/writes on MoltenVK
- [#30829](https://github.com/ggml-org/llama.cpp/pull/30829) vulkan: cap scalar flash attention at 8 rows for large heads on Qualcomm Adreno GPUs
- [#31957](https://github.com/ggml-org/llama.cpp/pull/31957) llama : apply the iGPU lazy-mode fallback only when mmap is off
- [#31540](https://github.com/ggml-org/llama.cpp/pull/31540) ci: update oneAPI 2026.2, oneDNN 2026.1 and Level Zero SDK 1.34.0
- [#31574](https://github.com/ggml-org/llama.cpp/pull/31574) sycl: un-gate oneDNN fused SDPA for Alchemist at head_dim=64

#### 🐛 New Issues
- [#32050](https://github.com/ggml-org/llama.cpp/issues/32050) Eval bug: Qwen3-TTS repeated requests produce different audio with Vulkan cooperative matrices on Radeon 8060S `bug-unconfirmed` 💬1
- [#32037](https://github.com/ggml-org/llama.cpp/issues/32037) build-sanitize.yml: ctest is non-blocking for all three sanitizers (job-level continue-on-error) 💬1
- [#32002](https://github.com/ggml-org/llama.cpp/issues/32002) Misc. bug: Jinja rendering overhead with long tool-call histories and early-exit loops `bug-unconfirmed` 💬1
- [#32048](https://github.com/ggml-org/llama.cpp/issues/32048) Misc. bug: server: slot erase does not clear the --cache-ram prompt cache, so an earlier prompt is restored after erase `bug-unconfirmed`
- [#32041](https://github.com/ggml-org/llama.cpp/issues/32041) Misc. bug: scripts/moe-cache-tune.py crashes on Windows with "ValueError: Unsupported signal: 2" and leaves llama-server running `bug-unconfirmed`
- [#32036](https://github.com/ggml-org/llama.cpp/issues/32036) Eval bug: deepseek4 / qwen4exp abort when embeddings are enabled (n_embd_out is hc_mult * n_embd, t_embd is n_embd wide) `bug-unconfirmed`
- [#32019](https://github.com/ggml-org/llama.cpp/issues/32019) Feature Request: cancel model loading from the web UI `enhancement`
- [#31999](https://github.com/ggml-org/llama.cpp/issues/31999) Eval bug: [server/agent-ui] Reasoning/content split flips mid-stream when thinking contains literal think tokens `bug-unconfirmed`

#### 🔒 Closed Issues
- [#28778](https://github.com/ggml-org/llama.cpp/issues/28778) SYCL: DFlash2 draft model triggers GPU driver TDR reset (VIDEO_TDR_TIMEOUT_DETECTED) on dual Arc Pro B70
- [#17654](https://github.com/ggml-org/llama.cpp/issues/17654) Refactor: Deprecate DIAG_MASK_* operators, migrate kernels to TRI
- [#28495](https://github.com/ggml-org/llama.cpp/issues/28495) Eval bug: with -np 2 and --kv-unified, prompt processing drops 42-54% from the second long request onward (single GPU, sequential requests, no spill, no speculation)
- [#28728](https://github.com/ggml-org/llama.cpp/issues/28728) Eval bug: SYCL: bad output on Qwen3.6 35B A3B
- [#31541](https://github.com/ggml-org/llama.cpp/issues/31541) Compile bug: FreeBSD ggml vulkan compilation issue
- [#27964](https://github.com/ggml-org/llama.cpp/issues/27964) Eval bug: Qwen3.8-Flash-Next: --split-mode tensor aborts with SPLIT_AXIS_UNKNOWN on CUDA (2x RTX 5090)
- [#29082](https://github.com/ggml-org/llama.cpp/issues/29082) Eval bug: [Vulkan] GGML_ABORT cache_k_l0 in Vulkan buffer on SWA models — regression 2.40/2.41 vs 2.39
- [#28328](https://github.com/ggml-org/llama.cpp/issues/28328) Misc. bug: ggml-cpu : CPU backend score ignores OS XSAVE support -> SIGILL when CPUID advertises AVX but OS does not enable it
- [#29131](https://github.com/ggml-org/llama.cpp/issues/29131) Misc. bug: RISC-V RVV IQ4_NL/MXFP4 dot product errors with an odd number of blocks due to missing tail handling
- [#29456](https://github.com/ggml-org/llama.cpp/issues/29456) Misc. bug: llama-server does not cap logprobs / top_logprobs (n_probs)
- [#29487](https://github.com/ggml-org/llama.cpp/issues/29487) Misc. bug: Backend Top-K output buffer is still allocated at full vocabulary width
- [#31971](https://github.com/ggml-org/llama.cpp/issues/31971) llama-ui: sidebar intercepts clicks when hidden (regression re-introduced after previous fix)
- [#31689](https://github.com/ggml-org/llama.cpp/issues/31689) server: /v1/realtime audio output ignores output language/voice (non-English speech gets English accent; llama-tts with --tts-lang works)
- [#29145](https://github.com/ggml-org/llama.cpp/issues/29145) Qwen 3.5 MTP fails to load compact draft vocabularies (missing d2t mapping support)
- [#29462](https://github.com/ggml-org/llama.cpp/issues/29462) bug: the json-schema/GBNF grammar builder does not bound the repetition count — a contradictory or huge `min*` makes it allocate unboundedly and OOM-kills the server
- [#29491](https://github.com/ggml-org/llama.cpp/issues/29491) [RFC] Inkling architecture support with CPU-first implementation, split from #25731
- [#29493](https://github.com/ggml-org/llama.cpp/issues/29493) Eval bug: qwen35 dirty-ctx full-restore in test-recurrent-state-rollback fails deterministically (CPU+CUDA, q8_0+f16) while arch is whitelisted
- [#29505](https://github.com/ggml-org/llama.cpp/issues/29505) Misc. bug: Dead link in tools/server/README.md
- [#31754](https://github.com/ggml-org/llama.cpp/issues/31754) Feature Request: Implement OpenAI's TTS /v1/audio/speech API
- [#30879](https://github.com/ggml-org/llama.cpp/issues/30879) Misc. bug: Sarvam 30B MoE converter labels byte-fallback tokens <0x00>–<0xFF> NORMAL instead of BYTE
- [#31963](https://github.com/ggml-org/llama.cpp/issues/31963) Feature Request: Kimi K3.1 vision support
- [#31805](https://github.com/ggml-org/llama.cpp/issues/31805) Misc. bug: allOf with non-object types generates an empty object grammar
- [#31950](https://github.com/ggml-org/llama.cpp/issues/31950) Misc. bug: server: Muse Spark Open — every grammar fails "Failed to initialize samplers" (generation prompt '<|start|>assistant'); response_format ignored
- [#31926](https://github.com/ggml-org/llama.cpp/issues/31926) Misc. bug: GROUP_NORM unit test triggers GGML_ASSERT for Vulkan on Windows Intel GPU
- [#31892](https://github.com/ggml-org/llama.cpp/issues/31892) Misc. bug: test-backend-ops sentinel mismatch errors on MoltenVK
- [#31943](https://github.com/ggml-org/llama.cpp/issues/31943) --lazy-mode auto resolves to off on iGPUs even with --load-mode mmap; pp512 drops 2.4x (Strix Halo, qwen4exp)

### Ollama (`ollama/ollama`)

**Stars:** 186,587 · **Open issues:** 4,618 · **Last push:** 1h ago

On November 11, 2026, Ollama released version v0.40.17-rc0, which includes enhancements such as improved ChatGPT CLI restore and a graceful restart. Significant merges today included support for concurrent generation in the MLX framework, a version bump for MLX and llama.cpp, and the implementation of mmap for Vulkan integrated GPUs. A notable new issue raised is the proposal of a /v1/systemone pull request addressing decision models like Liquid d1 and H2O Lightning, indicating ongoing interest in expanding Ollama's capabilities. Overall, the day featured impactful updates and set the stage for potential new developments.

#### 🚀 New Releases
- [v0.40.17-rc0](https://github.com/ollama/ollama/releases/tag/v0.40.17-rc0) v0.40.17

#### ✅ Merged PRs
- [#19575](https://github.com/ollama/ollama/pull/19575) launch: refresh Pi metadata after sign-in and honor prompt args
- [#19647](https://github.com/ollama/ollama/pull/19647) MLX, MLX-C: version bump
- [#19646](https://github.com/ollama/ollama/pull/19646) llama.cpp: version bump b12257
- [#19197](https://github.com/ollama/ollama/pull/19197) mlx: support concurrent generation
- [#19640](https://github.com/ollama/ollama/pull/19640) llm: use mmap for Vulkan integrated GPUs
- [#17163](https://github.com/ollama/ollama/pull/17163) rpreslar4765/Ollama

#### 🐛 New Issues
- [#19639](https://github.com/ollama/ollama/issues/19639) Decision models (Jev-like: Liquid d1, Laya, Kev, vllm-d3, H2O Lightning): would a /v1/systemone PR be welcome? 💬2
- [#19645](https://github.com/ollama/ollama/issues/19645) ©️ 2026 Jeremy Sharer Software `feature request`

#### 🔒 Closed Issues
- [#15372](https://github.com/ollama/ollama/issues/15372) qwen3next: layer 2 missing attn_qkv/attn_gate projections
- [#17748](https://github.com/ollama/ollama/issues/17748) AMD Radeon 780M Vulkan regression in Ollama >=0.32.10
- [#19624](https://github.com/ollama/ollama/issues/19624) OLLAMA_KEEP_ALIVE of 300 seconds (5 minutes) is too short
- [#19639](https://github.com/ollama/ollama/issues/19639) Decision models (Jev-like: Liquid d1, Laya, Kev, vllm-d3, H2O Lightning): would a /v1/systemone PR be welcome?
- [#19645](https://github.com/ollama/ollama/issues/19645) ©️ 2026 Jeremy Sharer Software
- [#18531](https://github.com/ollama/ollama/issues/18531) Vulkan on Intel Iris Xe iGPU: qwen2.5:14b fails with ErrorOutOfDeviceMemory (KV cache alloc) on 0.33.3 and 0.34.2; works on 0.32.6

### LiteLLM (`BerriAI/litellm`)

**Stars:** 63,070 · **Open issues:** 5,100 · **Last push:** <1h ago

On November 11, 2026, LiteLLM released version v1.110.0-rc.1, along with several other updates including v1.109.0 and v1.108.5 (LTS), all signed with the key from commit e82a3c6 for enhanced security. Among the notable merged features, PR #50976 introduced the ability to forward message threads on the native /v1/messages endpoint, while PR #43332 streamlined the Docker setup to a single shipped image and entrypoint. Critical fixes included adjustments to the spending logic to handle budget waivers based on model usage (PR #51058) and enhancements to the routing system to improve performance (PR #51026). A notable new issue was reported regarding the OTel gen_ai.response.model holding incorrect model data (#51029), indicating a concern that needs addressing in future releases.

#### 🚀 New Releases
- [v1.110.0-rc.1](https://github.com/BerriAI/litellm/releases/tag/v1.110.0-rc.1) v1.110.0-rc.1
- [v1.109.0](https://github.com/BerriAI/litellm/releases/tag/v1.109.0) v1.109.0
- [v1.108.5](https://github.com/BerriAI/litellm/releases/tag/v1.108.5) 1.108.5 (LTS)
- [v1.104.9](https://github.com/BerriAI/litellm/releases/tag/v1.104.9) v1.104.9
- [v1.103.11](https://github.com/BerriAI/litellm/releases/tag/v1.103.11) v1.103.11

#### ✅ Merged PRs
- [#50976](https://github.com/BerriAI/litellm/pull/50976) feat(anthropic): forward message threads on native /v1/messages
- [#43332](https://github.com/BerriAI/litellm/pull/43332) feat(docker)!: one shipped image, one entrypoint beside the Dockerfile, one compose file
- [#51058](https://github.com/BerriAI/litellm/pull/51058) fix(proxy): judge the zero-cost budget waiver by the model a key or team alias serves
- [#50957](https://github.com/BerriAI/litellm/pull/50957) fix(spend): write a background response's settling read in-process when the spend collector is on
- [#50822](https://github.com/BerriAI/litellm/pull/50822) refactor(rust_bridge): route every Rust-to-Python call through host modules
- [#50861](https://github.com/BerriAI/litellm/pull/50861) fix(cost): backport usage.seconds billing and the unsized FLAC guard to stable/1.106.x for v1.106.8
- [#51064](https://github.com/BerriAI/litellm/pull/51064) test: backport stale integration test fixes to lts/1.108.x
- [#50726](https://github.com/BerriAI/litellm/pull/50726) fix(tool_choice): backport #49043 and #50467 to lts/1.108.x
- [#51076](https://github.com/BerriAI/litellm/pull/51076) chore(databricks): add claude-fable-5-2, date glm-5-2 retirement and fix llama-3-1-8b context from the supported-models page
- [#51067](https://github.com/BerriAI/litellm/pull/51067) chore(pricing): sync replicate model prices from replicate.com model pages
- [#51066](https://github.com/BerriAI/litellm/pull/51066) feat(auto_router): report a session's whole spend and name why savings stay unestimated
- [#51077](https://github.com/BerriAI/litellm/pull/51077) chore(cost-map): add 61 fal_ai image and video rows priced from the fal.ai model pages (second fal-ai sync)
- [#50994](https://github.com/BerriAI/litellm/pull/50994) fix(router): re-check and reserve per-model rate limits on fallback targets
- [#51046](https://github.com/BerriAI/litellm/pull/51046) fix(proxy): drop the beta label from the /v1/messages swagger tags
- [#50979](https://github.com/BerriAI/litellm/pull/50979) fix(proxy): allow management_routes keys to call PATCH /model/{model_id}/update
- [#51072](https://github.com/BerriAI/litellm/pull/51072) fix(model-prices): use current Hy4 promotional rates
- [#49912](https://github.com/BerriAI/litellm/pull/49912) fix(guardrails/rubrik): moderate text-completion prompts and forward rac_agent_id
- [#51026](https://github.com/BerriAI/litellm/pull/51026) perf(spend): narrow user and team spend log reads to the owner's api_keys so the (api_key, startTime) index is used
- [#51038](https://github.com/BerriAI/litellm/pull/51038) fix(vertex_ai): bill gemini image edits by token usage
- [#50906](https://github.com/BerriAI/litellm/pull/50906) feat(ui): combine performance alerts and model deprecations
- [#51057](https://github.com/BerriAI/litellm/pull/51057) fix(ci): install tzdata so zoneinfo tests pass on runners without legacy tz aliases
- [#50389](https://github.com/BerriAI/litellm/pull/50389) fix(mcp): challenge a single-server listing whose credential the upstream rejected
- [#46845](https://github.com/BerriAI/litellm/pull/46845) fix(otel): serialize pydantic Message objects in langfuse_otel, weave_otel and langtrace
- [#50883](https://github.com/BerriAI/litellm/pull/50883) feat(search): add Microsoft Web IQ provider
- [#51035](https://github.com/BerriAI/litellm/pull/51035) chore(cost-map): add fal_ai image and video rows priced from the fal.ai model pages (first fal-ai sync)
- [#50602](https://github.com/BerriAI/litellm/pull/50602) fix(responses): keep the namespace == name shape for deferred top-level tools
- [#50863](https://github.com/BerriAI/litellm/pull/50863) feat(cli): connect a per-user GitHub Copilot credential from the command line
- [#51030](https://github.com/BerriAI/litellm/pull/51030) fix(proxy): recheck missing users when resolving session grants
- [#50467](https://github.com/BerriAI/litellm/pull/50467) fix(tool_choice): accept the Responses API's flat allowed_tools layout on chat completions
- [#50804](https://github.com/BerriAI/litellm/pull/50804) fix(proxy): send the streamed Responses fallback metadata as a typed Responses event
- [#50728](https://github.com/BerriAI/litellm/pull/50728) fix(bedrock): forward x-pass- headers on the /bedrock/model pass-through routes
- [#51019](https://github.com/BerriAI/litellm/pull/51019) test(integration): keep owned test peers off ephemeral ports
- [#51010](https://github.com/BerriAI/litellm/pull/51010) feat(spend): report guardrail spend separately in daily activity
- [#51011](https://github.com/BerriAI/litellm/pull/51011) fix(router): sync responses() applies the Router's num_retries and fallbacks
- [#47028](https://github.com/BerriAI/litellm/pull/47028) fix(proxy)!: reject client-supplied Vertex location and project unless the admin opts in
- [#51013](https://github.com/BerriAI/litellm/pull/51013) fix(cost-map): sync together_ai together/Tev1-4B-experimental input price with /v1/models
- [#51012](https://github.com/BerriAI/litellm/pull/51012) chore(cost-map): add github_copilot/gemini-4-carbon from the Copilot changelog launch post
- [#51003](https://github.com/BerriAI/litellm/pull/51003) fix: audit registry metadata for Together, Mistral, Fireworks, Azure AI and Copilot
- [#50997](https://github.com/BerriAI/litellm/pull/50997) feat(cost): bill batch cached image input tokens for OpenAI image models
- [#50975](https://github.com/BerriAI/litellm/pull/50975) fix(router): let an explicit routing tag outrank the encrypted content pin
- [#50571](https://github.com/BerriAI/litellm/pull/50571) feat(proxy): let teams use their own allowed S3 buckets for batch files
- [#50993](https://github.com/BerriAI/litellm/pull/50993) fix(router): backport the registry lock fix (#50933) to rc/1.110.0
- [#50983](https://github.com/BerriAI/litellm/pull/50983) test(anthropic): scope structured output captures to inference routes
- [#50974](https://github.com/BerriAI/litellm/pull/50974) test(integration): recognize the model list's lock in the held write helper
- [#50960](https://github.com/BerriAI/litellm/pull/50960) fix(cost-map): mark the azure_ai Claude rows that bill web search as supporting it
- [#50984](https://github.com/BerriAI/litellm/pull/50984) chore(release): bump litellm to 1.103.11 for stable/1.103.x
- [#50985](https://github.com/BerriAI/litellm/pull/50985) chore(release): bump litellm to 1.104.9 and litellm-proxy-extras to 0.4.102.post2 for stable/1.104.x
- [#50980](https://github.com/BerriAI/litellm/pull/50980) chore: bump litellm to 1.108.5 on lts/1.108.x
- [#50972](https://github.com/BerriAI/litellm/pull/50972) test(http2): drain client traffic after sending GOAWAY
- [#50968](https://github.com/BerriAI/litellm/pull/50968) fix(responses): keep unset-effort gpt-5.4/5.5 tool calls on chat completions
- [#50959](https://github.com/BerriAI/litellm/pull/50959) fix(cost-map): give the Gemini 4 Argon rows the shared Gemini 3 search free tier
- [#50962](https://github.com/BerriAI/litellm/pull/50962) feat(openai)!: honor per-deployment workload identity on non-chat routes (#39966) [lts/1.108.x]
- [#50717](https://github.com/BerriAI/litellm/pull/50717) fix(mcp): accept comma-separated vendor scope grants on the connect check
- [#50860](https://github.com/BerriAI/litellm/pull/50860) fix(cost): backport usage.seconds billing and the unsized FLAC guard to lts/1.108.x
- [#50965](https://github.com/BerriAI/litellm/pull/50965) feat(customers): reject unknown fields on /customer/new and /customer/update instead of dropping them
- [#50764](https://github.com/BerriAI/litellm/pull/50764) feat(usage): split customer spend by the key's current team
- [#50867](https://github.com/BerriAI/litellm/pull/50867) test(integration): cap the OAuth metadata lookup in the mixed capabilities subscription case
- [#50783](https://github.com/BerriAI/litellm/pull/50783) fix(proxy): send a prompt-only call_endpoint token count to every provider count API
- [#50967](https://github.com/BerriAI/litellm/pull/50967) test(budgets): expect per-model tpm and rpm limits in budget info
- [#50807](https://github.com/BerriAI/litellm/pull/50807) feat(ui): customer portal (beta) surfacing the existing customer endpoints and customer usage
- [#50933](https://github.com/BerriAI/litellm/pull/50933) fix(router): hold the registry lock across router-core writes and mirror reads
- [#50823](https://github.com/BerriAI/litellm/pull/50823) fix(proxy-extras): backport the automatic SpendLogs index build (#43948, #44109, #44203) to stable/1.104.x
- [#50949](https://github.com/BerriAI/litellm/pull/50949) fix(redis): backport the per-request Redis batch scope leak fix (#50751) to rc/1.110.0
- [#50856](https://github.com/BerriAI/litellm/pull/50856) fix(proxy-extras): backport the automatic SpendLogs index build (#43948, #44109, #44203) to stable/1.103.x
- [#50940](https://github.com/BerriAI/litellm/pull/50940) feat: add claude mythos 5.2 to vertex ai cost map
- [#50724](https://github.com/BerriAI/litellm/pull/50724) fix(decisions): keep box questions on a deployment when a same-model sibling turns them off
- [#50956](https://github.com/BerriAI/litellm/pull/50956) test(cost): sync vertex 3.1 pro price fields and bedrock converse usage shapes
- [#50857](https://github.com/BerriAI/litellm/pull/50857) feat(rate-limit): enforce per-customer per-model tpm and rpm limits in the v3 limiter
- [#50951](https://github.com/BerriAI/litellm/pull/50951) fix(cost-map): give the Gemini 4 Carbon rows the shared Gemini 3 search free tier
- [#50797](https://github.com/BerriAI/litellm/pull/50797) feat(budgets): add per-model tpm and rpm limit maps to budgets and customers
- [#50821](https://github.com/BerriAI/litellm/pull/50821) fix(responses): replay Claude tool search on follow-up turns
- [#50786](https://github.com/BerriAI/litellm/pull/50786) perf(streaming): reuse the upstream choice for plain litellm HTTP-handler stream chunks
- [#50789](https://github.com/BerriAI/litellm/pull/50789) fix(proxy): open the Logs drawer by request_id without scanning for litellm_call_id
- [#50617](https://github.com/BerriAI/litellm/pull/50617) refactor: clean up fresh tech debt in stream cost flag, masked httpx error and encrypted reasoning helpers
- [#50942](https://github.com/BerriAI/litellm/pull/50942) feat(cost-map): add vertex_ai/gemini-4-carbon and gemini-4-carbon-cyber-permissive from the Vertex pricing page
- [#49176](https://github.com/BerriAI/litellm/pull/49176) fix(openai): download PDF URLs off the event loop and transform async chat messages once
- [#50931](https://github.com/BerriAI/litellm/pull/50931) feat(cost-map): add gemini/gemini-4-carbon from the Gemini API pricing page
- [#50751](https://github.com/BerriAI/litellm/pull/50751) fix(redis): free each request's Redis batch scope once the request ends
- [#50841](https://github.com/BerriAI/litellm/pull/50841) fix(proxy): bill an OpenAI pass-through background response once across repeated reads
- [#50777](https://github.com/BerriAI/litellm/pull/50777) feat(cost-map): rolling registry update (claude-mythos-5-2, Azure Mythos 5.2, Friendli GLM-5.1 date, GovCloud Fable 5.2 token counting)
- [#50855](https://github.com/BerriAI/litellm/pull/50855) test: repair four integration tests on rc/1.110.0
- [#50854](https://github.com/BerriAI/litellm/pull/50854) test(integration): empty the shared client cache before the tier pin batch test
- [#50849](https://github.com/BerriAI/litellm/pull/50849) test: repair four failing tests on rc/1.109.0
- [#49619](https://github.com/BerriAI/litellm/pull/49619) fix(ui): keep the request log model cell to one model
- [#50850](https://github.com/BerriAI/litellm/pull/50850) fix(proxy): let the OS assign Prisma engine ports

#### 🐛 New Issues
- [#51029](https://github.com/BerriAI/litellm/issues/51029) [Bug]: OTel gen_ai.response.model holds the requested model group, not the model that generated the response `llm translation` 💬5
- [#50926](https://github.com/BerriAI/litellm/issues/50926) [Bug]: encrypted_content_affinity pin beats an explicit routing tag, so the follow-up 401s with "Not allowed to access model due to tags configuration" `llm translation` 💬2
- [#50851](https://github.com/BerriAI/litellm/issues/50851) [Bug]: Configure test image in litellm-helm chart values `bug` 💬2
- [#50908](https://github.com/BerriAI/litellm/issues/50908) [Bug]: `/customer/delete` leaves `spend:end_user:<id>` in Redis, so a re-created end user stays over budget 💬2
- [#50893](https://github.com/BerriAI/litellm/issues/50893) [Bug]: `stream_chunk_builder` raises `TypeError` when a provider streams `reasoning_content` as a list (GPT reasoning models) `bug` `llm translation` 💬2
- [#50837](https://github.com/BerriAI/litellm/issues/50837) [Bug]: End-user spend reset applies the proxy-wide default budget tier to end users governed by a key-specific default budget 💬2
- [#50836](https://github.com/BerriAI/litellm/issues/50836) [Bug]: Token exchange always prefers the persisted shared DCR client, so a grant issued to the caller's own client fails with no fallback 💬2
- [#50835](https://github.com/BerriAI/litellm/issues/50835) [Bug]: MCP client factory requires SSL configuration even when an explicit transport is supplied 💬2
- [#50826](https://github.com/BerriAI/litellm/issues/50826) [Bug]: Ollama model-info lookup ignores explicit api_base and uses OLLAMA_API_BASE `bug` `llm translation` 💬1
- [#51074](https://github.com/BerriAI/litellm/issues/51074) [Feature]: Support Vertex AI partner models served via publisher Responses API (Meta Muse, OpenAI GPT 6.x, ...) in vertex_ai/ provider `enhancement` `llm translation` 💬1
- [#50877](https://github.com/BerriAI/litellm/issues/50877) [Feature]: Set per-model budgets within a team with custom reset intervals 💬1
- [#50961](https://github.com/BerriAI/litellm/issues/50961) [Bug]: s3_v2 requeues a permanently rejected event forever when the whole flush fails (s3_max_retry_age_seconds ignored on the bucket-wide path) 💬1
- [#50920](https://github.com/BerriAI/litellm/issues/50920) [Bug]: Entra SCIM identity and profile fields do not round-trip `bug` 💬1
- [#50891](https://github.com/BerriAI/litellm/issues/50891) [Bug]: MCP OAuth token exchange returns 400 for LiteLLM SSO session tokens when the browser has an Admin UI session 💬1
- [#50953](https://github.com/BerriAI/litellm/issues/50953) [Bug]: `anthropic_messages` (/v1/messages) silently drops the top-level `diagnostics` field `llm translation` 💬1
- [#50928](https://github.com/BerriAI/litellm/issues/50928) [Bug]: MCP managed OAuth re-authorisation requests previously granted scopes the server never advertised, locking users out (invalid_scope) `bug` `llm translation` 💬1
- [#50898](https://github.com/BerriAI/litellm/issues/50898) A retried budget reset erases the carried spend of rollover-capped end users 💬1
- [#50886](https://github.com/BerriAI/litellm/issues/50886) A deferred date-range adjustment from an earlier Apply overwrites a newer usage range in the URL 💬1
- [#50890](https://github.com/BerriAI/litellm/issues/50890) [Bug]: websearch_interception follow-up on OpenRouter drops the provider prefix and extra_body `llm translation` 💬1
- [#50884](https://github.com/BerriAI/litellm/issues/50884) A string-valued callback in the stored config is listed and deletable, but runtime sync never registers it 💬1
- [#50888](https://github.com/BerriAI/litellm/issues/50888) "View user record" link is rendered for the default proxy admin, whose record page does not exist 💬1
- [#50887](https://github.com/BerriAI/litellm/issues/50887) Clearing every scope on an OAuth2 machine-to-machine MCP server is reported as saved, but the stored scopes survive 💬1
- [#50885](https://github.com/BerriAI/litellm/issues/50885) Client-disconnect cleanup skips the legacy parallel-request limiter and leaks its `max_parallel_requests` slot 💬1
- [#50874](https://github.com/BerriAI/litellm/issues/50874) [Help Wanted]: How to handle Redis spend update queue backlog at ~300M TPM (20 pods / 80 workers)? `bug` 💬1
- [#50873](https://github.com/BerriAI/litellm/issues/50873) [Bug]: CustomCodeExecutionError in litellm/proxy/guardrails/guardrail_hooks/custom_code/custom_code_guardrail.py `bug` 💬1
- [#50918](https://github.com/BerriAI/litellm/issues/50918) [Bug]: PATCH /model/{model_id}/update returns 403 for virtual keys restricted to management_routes
- [#51070](https://github.com/BerriAI/litellm/issues/51070) [Bug]: AI Hub "Make Public" modal can't remove the last public model (same for agents)
- [#50986](https://github.com/BerriAI/litellm/issues/50986) [Feature]: Store prefix block IDs in LiteLLM SpendLogs to track shared prefixes across requests without storing raw prompts `enhancement`
- [#50955](https://github.com/BerriAI/litellm/issues/50955) [Bug]: Claude Code discovery advertises claude-router-* IDs that JWT team authorization rejects with 403 `bug` `llm translation` `claude code`
- [#50941](https://github.com/BerriAI/litellm/issues/50941) [Bug]: /{provider}/v1/files/{file_id}/content returns a decompressed body with the upstream Content-Encoding: gzip header `bug` `llm translation`
- [#50939](https://github.com/BerriAI/litellm/issues/50939) [Bug]: Successful transcription logging retains audio uploads and stringifies their contents `bug` `llm translation`
- [#50938](https://github.com/BerriAI/litellm/issues/50938) [Bug]: Anthropic mcp_tool_use blocks are dropped on /chat/completions, so MCP calls arrive without a tool name `bug` `llm translation`
- [#50934](https://github.com/BerriAI/litellm/issues/50934) [Feature]: Add Soniox stt-async-v6 and stt-rt-v6 to the cost map
- [#50911](https://github.com/BerriAI/litellm/issues/50911) [Bug]: /v1/mcp/server/{server_id} works the servers UUID, half works with an alias `bug`
- [#50923](https://github.com/BerriAI/litellm/issues/50923) [Bug]: Bedrock Converse 400 "Cache point cannot be inserted after the preceding content block" when a cache point follows a non-PDF document block `llm translation`
- [#50922](https://github.com/BerriAI/litellm/issues/50922) [Bug]: Pass-through endpoints still emit no OTel session.id for x-litellm-session-id (follow-up to #43540) `llm translation`
- [#50912](https://github.com/BerriAI/litellm/issues/50912) [Bug]: Azure streams bridged to the Responses API return chunks with model=None `llm translation`
- [#50905](https://github.com/BerriAI/litellm/issues/50905) [Bug]: [Enterprise] Audit logs: GET /audit returns 500 after /key/update or /team/update, before_value stored as a JSON string since v1.108.0
- [#50903](https://github.com/BerriAI/litellm/issues/50903) [Bug]: Streaming chat completions, A2A, and Gemini passthrough spend logs can be lost because their logging tasks are never referenced `llm translation`
- [#50900](https://github.com/BerriAI/litellm/issues/50900) Admin `/register` on a DCR-bridge MCP server posts empty grant types and an empty auth method upstream
- [#50899](https://github.com/BerriAI/litellm/issues/50899) A budget reset invalidates every reset end-user's caches twice
- [#50894](https://github.com/BerriAI/litellm/issues/50894) [Bug]: Interactions API streaming spend logs can be lost because the success logging task is never referenced `llm translation`
- [#50878](https://github.com/BerriAI/litellm/issues/50878) [Bug]: generic_api callback cache never hits, so every re-resolution leaks a periodic flush loop `bug`
- [#50876](https://github.com/BerriAI/litellm/issues/50876) [Bug]: hosted_vllm decisions-only models accepted on /chat/completions → opaque upstream 404 (mode: decisions / discoverable: false ignored for chat) `bug` `llm translation`

#### 🔒 Closed Issues
- [#47826](https://github.com/BerriAI/litellm/issues/47826) [SECURITY] litellm 1.107.0 compromised (PyPI removed; Docker latest/main-stable removed): cook.pth credential stealer + sitecustomize RCE loader, built from lookalike repo Berri-AI/litellm
- [#23777](https://github.com/BerriAI/litellm/issues/23777) Feature request: support multiple ChatGPT OAuth accounts in a single LiteLLM instance
- [#24091](https://github.com/BerriAI/litellm/issues/24091) [Bug]: LiteLLM fails to parse Ollama's tool_calls when using function calling
- [#32357](https://github.com/BerriAI/litellm/issues/32357) [Bug] /v1/messages adapter mis-encodes reasoning models: thinking_delta streamed inside a text block (+ duplicate message_start) → empty content in Anthropic SDK / Claude Code
- [#15647](https://github.com/BerriAI/litellm/issues/15647) [Bug]: Updated fallback configuration not reloaded on redeploy
- [#27191](https://github.com/BerriAI/litellm/issues/27191) [Feature]: Cache Token Cost & Tracking for Custom Pricing and OpenAI-Compatible Providers
- [#47675](https://github.com/BerriAI/litellm/issues/47675) [Bug]: response_cost is null and spend stays $0 when custom_llm_provider=anthropic and the priced row lives under a different provider
- [#39713](https://github.com/BerriAI/litellm/issues/39713) [Bug]: Per-customer RPM limits stop applying once the virtual key is cached
- [#28859](https://github.com/BerriAI/litellm/issues/28859) [Bug]: Internal User (Create/Delete/View) cannot view Request/Response Data in Logs even with store_prompts_in_spend_logs: true
- [#22841](https://github.com/BerriAI/litellm/issues/22841) [Bug]: v1/messages 接口传递 tool_result 类型消息丢失
- [#18060](https://github.com/BerriAI/litellm/issues/18060) [Bug]: Infinite loops when making unauthorized/incorrect requests.
- [#29808](https://github.com/BerriAI/litellm/issues/29808) [Bug]: MidStreamFallbackError is not being retried - vertexAI
- [#48937](https://github.com/BerriAI/litellm/issues/48937) [Bug]: streamed chat completions logged at $0 when the upstream reports usage.cost: 0 (spend and budgets read 0 for all streaming traffic)
- [#36922](https://github.com/BerriAI/litellm/issues/36922) [Bug]: LiteLLM Proxy fails to start after uv tool update due to FastAPI get_flat_dependant incompatibility
- [#47908](https://github.com/BerriAI/litellm/issues/47908) [Bug]: spend is 0 when base_model names a priced model and custom_llm_provider differs
- [#36174](https://github.com/BerriAI/litellm/issues/36174) [Bug]: Router pre-call context-window check blocks the event loop (sync token_counter on async path)
- [#31694](https://github.com/BerriAI/litellm/issues/31694) [Bug]: Complexity Router disappears from `/v2/model/info` after updating DB model
- [#50740](https://github.com/BerriAI/litellm/issues/50740) [Bug]: Proxy worker RSS grows linearly with requests because each request's Redis batch scope is never freed
- [#36940](https://github.com/BerriAI/litellm/issues/36940) [Bug]: Stale budget resets can apply twice when leader coordination is unavailable
- [#44181](https://github.com/BerriAI/litellm/issues/44181) Add gpt-5.6-sol-2026-07-09 to the model price map
- [#49884](https://github.com/BerriAI/litellm/issues/49884) [Bug]: Redis circuit breaker stays HALF_OPEN forever when the probe fails with a non-connectivity error (e.g. READONLY after a primary failover)
- [#43828](https://github.com/BerriAI/litellm/issues/43828) [Bug]: Gemini models can't be accessed through SDK
- [#49842](https://github.com/BerriAI/litellm/issues/49842) [Bug]: Weekly budget reset can leave team/user/key spend fractionally negative
- [#44069](https://github.com/BerriAI/litellm/issues/44069) [Bug]: websearch_interception agentic loop: follow-up loses its provider prefix on org-style model ids (BadRequestError swallowed into unbounded retry + dangling litellm_web_search call)
- [#41517](https://github.com/BerriAI/litellm/issues/41517) regression: TestTeamScopedToAccessGroup broken by #41310
- [#34231](https://github.com/BerriAI/litellm/issues/34231) [Bug]: In the web UI on the "AI Hub" page the colored feature pills should use the same color for the same feature
- [#32782](https://github.com/BerriAI/litellm/issues/32782) [Bug]: ModuleNotFoundError (litellm_enterprise not found) when using background=true with Responses API
- [#35662](https://github.com/BerriAI/litellm/issues/35662) MCP servers granted to a key via /key/update are invisible to tools/list (works if granted at /key/generate, or with a brand-new key)
- [#35860](https://github.com/BerriAI/litellm/issues/35860) [Bug]: Missing API key maps to InternalServerError (500), so it gets retried
- [#50926](https://github.com/BerriAI/litellm/issues/50926) [Bug]: encrypted_content_affinity pin beats an explicit routing tag, so the follow-up 401s with "Not allowed to access model due to tags configuration"
- [#47482](https://github.com/BerriAI/litellm/issues/47482) [Bug]: session_affinity retries go back to the failed pinned deployment, so num_retries never fails over until it is cooled down
- [#38018](https://github.com/BerriAI/litellm/issues/38018) Problems with ollama
- [#40704](https://github.com/BerriAI/litellm/issues/40704) [Bug]: Terraform provider cannot update a virtual key that has no team
- [#43019](https://github.com/BerriAI/litellm/issues/43019) [Bug]: Terraform resource `litellm_mcp_server.auth_type` does not support `bearer_token` input, resulting in a 422 error
- [#41009](https://github.com/BerriAI/litellm/issues/41009) chatgpt/ provider: gpt-5.6-sol response.completed has empty output[] despite streamed content, raises "Unknown items in responses API response: []"
- [#37284](https://github.com/BerriAI/litellm/issues/37284) [Bug]: Compression/caching savings always $0.00 for any custom (non-cost-map) model, even with a single deployment
- [#36414](https://github.com/BerriAI/litellm/issues/36414) Ask AI (Usage) should route through llm_router for proxy model aliases
- [#36424](https://github.com/BerriAI/litellm/issues/36424) [Feature]: Disable Healthcheck logging when LogLevel set to WARN
- [#27755](https://github.com/BerriAI/litellm/issues/27755) [Bug]: Cannot use image generation in ChatGPT Subscription
- [#32736](https://github.com/BerriAI/litellm/issues/32736) [Bug]: Price-Reload overrides my explicit definitions in the Proxy-Config.model_list. (Example I want to serve gpt-5.6 via mode: responses)
- [#35894](https://github.com/BerriAI/litellm/issues/35894) [Bug]: RejectedRequestError short-circuit returns `"model": null` on non-streaming responses, breaking every OpenAI-SDK client
- [#35908](https://github.com/BerriAI/litellm/issues/35908) [Bug]: vertex_ai/claude-sonnet-5 (global endpoint) prompt cache does not reliably hit across multi-turn conversation
- [#35951](https://github.com/BerriAI/litellm/issues/35951) [Bug]: Presidio guardrail `logging_only` mode doesn't mask data in `standard_logging_object`
- [#49938](https://github.com/BerriAI/litellm/issues/49938) [Bug]: Sync Router.responses() ignores the Router's num_retries and fallbacks, Router.aresponses() honours them
- [#37652](https://github.com/BerriAI/litellm/issues/37652) [Bug]: `code_interpreter_interception` + `stream: true` crashes with `TypeError: ... got ModelResponseStream`, and can leave the response cache with a malformed entry
- [#48552](https://github.com/BerriAI/litellm/issues/48552) [Bug]: OSV Scan fails across unrelated PRs on filelock, Pillow and MSAL vulnerabilities
- [#41370](https://github.com/BerriAI/litellm/issues/41370) Fix "xai/grok-4" entry in "model_prices_and_context_window.json"
- [#40360](https://github.com/BerriAI/litellm/issues/40360) [Bug]: Bedrock CRIS claude-3-haiku-20240307 entries use 1.25x/0.1x ratios instead of Anthropic's published $0.30/$0.03 cache prices
- [#38978](https://github.com/BerriAI/litellm/issues/38978) [Bug]: DB-less proxy returns generic 500 (not 401) for requests with no API key — unguarded import prisma in exception_handler.py
- [#37860](https://github.com/BerriAI/litellm/issues/37860) litellm-ai-gateway panics on first outbound TLS connection — "no process-level CryptoProvider available" (rustls 0.23)
- [#43843](https://github.com/BerriAI/litellm/issues/43843) Add "glm-5.3" in "model_prices_and_context_window.json"
- [#40361](https://github.com/BerriAI/litellm/issues/40361) docker/Dockerfile.database cannot be built: pinned wolfi-base digest has drifted from the apk packages installed into it
- [#38056](https://github.com/BerriAI/litellm/issues/38056) [Bug]: claude-3-haiku and claude-3-opus have the Sonnet 1-hour cache write price (12x over / 5x under)
- [#41225](https://github.com/BerriAI/litellm/issues/41225) [Bug]: Complexity auto-router session-affinity pin flaps across replicas — DualCache reads local in-memory before Redis
- [#50918](https://github.com/BerriAI/litellm/issues/50918) [Bug]: PATCH /model/{model_id}/update returns 403 for virtual keys restricted to management_routes
- [#42582](https://github.com/BerriAI/litellm/issues/42582) [Feature]: Add Microsoft Web IQ as a native search provider
- [#44250](https://github.com/BerriAI/litellm/issues/44250) [Bug]: user_turn replays previous ask’s model after classifier default_model fallback

### Unsloth (`unslothai/unsloth`)

**Stars:** 79,300 · **Open issues:** 482 · **Last push:** <1h ago

On November 11, 2026, Unsloth saw a busy day of development, with multiple features and improvements merged to enhance functionality. Key changes include the addition of a new optional speaker accent hint for transcription, and a feature to make audio model selection more visible in the user interface. Notably, the Studio's performance was improved with updates that optimize video processing and memory usage. A recent bug emerged regarding upgrade errors and a mangled UI on the Model Hub when using the Glass theme, indicating areas needing immediate attention. Overall, the day's progress reflects ongoing enhancements to user experience and system performance within Unsloth.

#### ✅ Merged PRs
- [#17459](https://github.com/unslothai/unsloth/pull/17459) Studio sd.cpp: pin the prebuilt resynced with upstream master-1056
- [#17442](https://github.com/unslothai/unsloth/pull/17442) Studio Terminal: give the heredoc quote scanner its own substitution helper
- [#12608](https://github.com/unslothai/unsloth/pull/12608) Unsloth Studio: show which models have saved run settings and reset them from the model menu
- [#17437](https://github.com/unslothai/unsloth/pull/17437) Studio tests: read video.py as UTF-8 in the H3 fused SwiGLU test
- [#17256](https://github.com/unslothai/unsloth/pull/17256) Studio: ask before running Python fed to Terminal through a heredoc
- [#17428](https://github.com/unslothai/unsloth/pull/17428) Update idempotency: let the offline test survive a version bump that is not on PyPI yet
- [#17322](https://github.com/unslothai/unsloth/pull/17322) Studio: send video to custom OpenAI-compatible connections
- [#17422](https://github.com/unslothai/unsloth/pull/17422) Studio MiniMax-H3: feed the SwiGLU halves straight into the down projection's int8 activation quant (L4 -0.85% s/step, bit-identical)
- [#17419](https://github.com/unslothai/unsloth/pull/17419) Studio: keep more of a streamed FLUX.3 klein int8 transformer resident at small budgets (L4 6 GiB -4.2% per image, H2D 56.9 -> 43.9 GiB)
- [#17421](https://github.com/unslothai/unsloth/pull/17421) Scan baseline: re-review the seven unsloth-zoo sites 2026.11.4 moved
- [#17385](https://github.com/unslothai/unsloth/pull/17385) Studio FLUX.3: keep float16 on fp16-only GPUs behind a residual rescale (T4 INT8 -24% per image, GGUF Q8_0 -73%)
- [#17418](https://github.com/unslothai/unsloth/pull/17418) Studio: mount the API monitor inside a host that stays mounted, so opening it in Glass stops restyling the app
- [#17398](https://github.com/unslothai/unsloth/pull/17398) Installer: clear damaged uv cache entries before retrying an install
- [#17414](https://github.com/unslothai/unsloth/pull/17414) Installers: require unsloth-zoo>=2026.11.4 to match the pyproject floor
- [#17363](https://github.com/unslothai/unsloth/pull/17363) Studio: leave room for thinking in a Custom connection's chat title request (#17332)
- [#17413](https://github.com/unslothai/unsloth/pull/17413) Studio: set scrollbar-color in rgb so Reduce motion stops restarting a transition on every element
- [#17386](https://github.com/unslothai/unsloth/pull/17386) Studio LTX-2: stream the text connectors under streaming offload so the denoise keeps more transformer groups resident (A100 16 GiB -16% per clip)
- [#17379](https://github.com/unslothai/unsloth/pull/17379) Studio diffusion: load Qwen-Image-2.1's hosted int8 text encoder on float16 cards (T4 Turbo INT8 82.7 -> 31.9 s/image)
- [#17165](https://github.com/unslothai/unsloth/pull/17165) fix(studio): support explicitly selected virtual bridge LAN addresses
- [#17225](https://github.com/unslothai/unsloth/pull/17225) Add retry button to download panel for failed/cancelled downloads (CS 146S)
- [#16569](https://github.com/unslothai/unsloth/pull/16569) Remove unreferenced private helpers, constants and an if False block
- [#17125](https://github.com/unslothai/unsloth/pull/17125) fix(studio): align cached GGUF picker size
- [#17150](https://github.com/unslothai/unsloth/pull/17150) docker(rocm): run gfx103X cards as gfx1030 when the image's torch lacks them
- [#17404](https://github.com/unslothai/unsloth/pull/17404) GGUF export: keep remote_code_approved out of the save_pretrained kwargs
- [#17296](https://github.com/unslothai/unsloth/pull/17296) Opt-in growable KV cache for generic decode graphs
- [#17378](https://github.com/unslothai/unsloth/pull/17378) Studio: stop image loads exhausting Windows commit on Intel Arc iGPUs
- [#17200](https://github.com/unslothai/unsloth/pull/17200) [CS146S Stanford] Studio web fetch: a bare & stays as written, and escaped code stays in its code block
- [#17326](https://github.com/unslothai/unsloth/pull/17326) Studio: keep deferred MCP tools in place when a listed tool runs again
- [#17387](https://github.com/unslothai/unsloth/pull/17387) Studio: restore real Glass on the Linux app (live blur, fills, strength and the Windows-style title bar)
- [#17254](https://github.com/unslothai/unsloth/pull/17254) Studio: ask before Python shells out through asyncio or pty
- [#17263](https://github.com/unslothai/unsloth/pull/17263) Studio GGUF vision chat: reuse the image normalization for history images sent again
- [#17239](https://github.com/unslothai/unsloth/pull/17239) Studio: keep every frame when downloading a video as WebM
- [#17380](https://github.com/unslothai/unsloth/pull/17380) Studio: remove Liquid Glass stripes and greeting rings, and the black browser tab strip on Linux
- [#17321](https://github.com/unslothai/unsloth/pull/17321) Studio: open the managed account folder browser on symlinked installs
- [#17313](https://github.com/unslothai/unsloth/pull/17313) Studio: say when a file added while creating a project fails to index
- [#17241](https://github.com/unslothai/unsloth/pull/17241) Studio: make MLX and safetensors models call a forced tool
- [#17311](https://github.com/unslothai/unsloth/pull/17311) Studio: fix embedding fine-tunes failing at the first step
- [#17383](https://github.com/unslothai/unsloth/pull/17383) Studio: centre dialogs on whole pixels so their text stays sharp
- [#17389](https://github.com/unslothai/unsloth/pull/17389) Studio: edit_file and Rewind write through an open chat-folder descriptor on POSIX
- [#17243](https://github.com/unslothai/unsloth/pull/17243) Bump trufflesecurity/trufflehog in /
- [#17397](https://github.com/unslothai/unsloth/pull/17397) Notebook GGUF export: keep the converter to the load's trust_remote_code decision
- [#17399](https://github.com/unslothai/unsloth/pull/17399) Settings sync: save the shared composer draft preference with the account
- [#17396](https://github.com/unslothai/unsloth/pull/17396) Studio: harden diffusion adapters, quant scales, prompt LoRA tags, Hub clips, short audio and restyle uploads
- [#17373](https://github.com/unslothai/unsloth/pull/17373) Studio video: a stored peak no longer widens a new process's first render; an out-of-memory render retries streamed (LTX-2.5 16 GiB returning home)
- [#17261](https://github.com/unslothai/unsloth/pull/17261) Studio: make keyword search find Chinese, Japanese and Korean words
- [#17395](https://github.com/unslothai/unsloth/pull/17395) Long-chat gate coverage: measure forced motion now that Reduce motion is on by default
- [#17394](https://github.com/unslothai/unsloth/pull/17394) Studio: open update-notes links in the Desktop app, treat .term and .tcsh downloads as code
- [#17392](https://github.com/unslothai/unsloth/pull/17392) Studio: do not start a queued fine-tuning job for a disabled or deleted account
- [#17388](https://github.com/unslothai/unsloth/pull/17388) Studio: cap request bodies on every route and decode zstd bodies one at a time
- [#17390](https://github.com/unslothai/unsloth/pull/17390) AsyncGRPO: require a per-run secret on the local vLLM server; validate BF16 AdamW state on load
- [#17391](https://github.com/unslothai/unsloth/pull/17391) Decision models on MLX: refuse a config.json model_file unless trusted
- [#17255](https://github.com/unslothai/unsloth/pull/17255) Studio: end plain-text training rows with EOS when Format is Auto
- [#17259](https://github.com/unslothai/unsloth/pull/17259) Studio: hold the login rate limit on the Colab public link
- [#17257](https://github.com/unslothai/unsloth/pull/17257) Studio: stop audio models learning to answer None for blank transcripts
- [#17324](https://github.com/unslothai/unsloth/pull/17324) Decode CUDA graphs for Qwen3.5 / Qwen3.6 hybrid linear-attention caches
- [#17260](https://github.com/unslothai/unsloth/pull/17260) Studio: save LoRA and merged exports of a run to separate folders
- [#17314](https://github.com/unslothai/unsloth/pull/17314) Studio: keep hidden spreadsheet rows in chat attachments
- [#17291](https://github.com/unslothai/unsloth/pull/17291) Fix CPU pipeline evaluation loss normalization
- [#17384](https://github.com/unslothai/unsloth/pull/17384) Slot-clamp lint: accept the allow marker on any line of a wrapped assignment
- [#17362](https://github.com/unslothai/unsloth/pull/17362) Studio MiniMax-H3: run one denoiser forward per requested step (20 steps ran 19)
- [#17312](https://github.com/unslothai/unsloth/pull/17312) Studio: train Phi-4-mini on its own chat template
- [#17320](https://github.com/unslothai/unsloth/pull/17320) Studio: keep a user-set Hermes api_key in unsloth start hermes
- [#17318](https://github.com/unslothai/unsloth/pull/17318) Skip the duplicate tokenizer load on transformers 5 when it can only copy the fast tokenizer
- [#17377](https://github.com/unslothai/unsloth/pull/17377) Studio: turn Reduce motion on by default
- [#17240](https://github.com/unslothai/unsloth/pull/17240) Studio: keep the Ask before downloading programs setting across browsers
- [#17300](https://github.com/unslothai/unsloth/pull/17300) Studio: read once per tab return instead of on both visibility and focus
- [#17289](https://github.com/unslothai/unsloth/pull/17289) Studio installers: ask for the latest llama.cpp / whisper.cpp release tag once per run
- [#17272](https://github.com/unslothai/unsloth/pull/17272) Studio Windows GPU inventory: run the PowerShell adapter scan only when AMD or Intel records need it
- [#17242](https://github.com/unslothai/unsloth/pull/17242) Studio: keep searching the web past a lone Wikipedia result
- [#17301](https://github.com/unslothai/unsloth/pull/17301) Studio: resolve the nested Radix primitive / slot / context copies to one version
- [#17258](https://github.com/unslothai/unsloth/pull/17258) Studio: keep speaker notes when a PowerPoint file is attached in chat
- [#17376](https://github.com/unslothai/unsloth/pull/17376) Diffusion guard test: match the calibrated placement and ControlNet kwargs structurally
- [#17247](https://github.com/unslothai/unsloth/pull/17247) Studio Anima LoRA: rule out kohya splits that name no registered module before probing
- [#17288](https://github.com/unslothai/unsloth/pull/17288) Studio: cache the native-template markup profile per tokenizer in renderable_tool_catalog
- [#17281](https://github.com/unslothai/unsloth/pull/17281) Studio RAG: delete a retired folder's or scope's chunks in batches instead of one index scan per document
- [#17264](https://github.com/unslothai/unsloth/pull/17264) Studio chat: skip the display strip chain for history text with no tool markup
- [#17275](https://github.com/unslothai/unsloth/pull/17275) Studio Metal: read the Apple wired headroom once per GGUF placement
- [#17267](https://github.com/unslothai/unsloth/pull/17267) Patch sentence_transformers when it is first imported instead of importing it with unsloth
- [#17283](https://github.com/unslothai/unsloth/pull/17283) unsloth studio stop: return as soon as the server exits instead of on the next half-second step
- [#17273](https://github.com/unslothai/unsloth/pull/17273) Studio: import HfApi on first use instead of at backend start
- [#17294](https://github.com/unslothai/unsloth/pull/17294) Studio: pause display-only training polls while the tab is hidden
- [#17248](https://github.com/unslothai/unsloth/pull/17248) Studio dataset detection: read only the still-missing columns when filling a sparse first row
- [#16743](https://github.com/unslothai/unsloth/pull/16743) Unsloth Studio: list Cosmos3-Nano in the Video picker and route it from the Hub
- [#17266](https://github.com/unslothai/unsloth/pull/17266) Studio Data Recipes: keep unstructured seed upload file IO off the event loop
- [#17250](https://github.com/unslothai/unsloth/pull/17250) Studio: keep marked out of startup by moving the export format names to their own module
- [#17246](https://github.com/unslothai/unsloth/pull/17246) Studio: memoize the nonce-free Content-Security-Policy on its inputs
- [#17270](https://github.com/unslothai/unsloth/pull/17270) Studio Windows tools: stop the trusted git lookup at the first trusted candidate
- [#17298](https://github.com/unslothai/unsloth/pull/17298) Studio: skip superseded wallpaper writes and no-op history / bookmark persists
- [#17279](https://github.com/unslothai/unsloth/pull/17279) Studio GGUF variants: reuse the request's Hub listing for the MLX fallback
- [#17249](https://github.com/unslothai/unsloth/pull/17249) Studio chat search: skip metadata_json when building the search index batch
- [#17277](https://github.com/unslothai/unsloth/pull/17277) Studio dataset preview: hand a JSON file that is not JSON Lines to the loader without reading it whole
- [#17286](https://github.com/unslothai/unsloth/pull/17286) Studio embeddings: parse the GGUF body only when read and once, and serialize the Studio embedder payload off the event loop
- [#16960](https://github.com/unslothai/unsloth/pull/16960) Studio: reduce Liquid Glass paint cost when WebKit paints on the CPU
- [#17280](https://github.com/unslothai/unsloth/pull/17280) Studio: keep the browser feature index out of startup
- [#16741](https://github.com/unslothai/unsloth/pull/16741) Unsloth Studio: Cosmos3-Nano video continuation (extend a clip from its last or first frames)
- [#17370](https://github.com/unslothai/unsloth/pull/17370) H3 rotation park test: read video.py as UTF-8
- [#17287](https://github.com/unslothai/unsloth/pull/17287) Studio research: run each step's knowledge base and MCP lookups alongside its web search
- [#17251](https://github.com/unslothai/unsloth/pull/17251) Studio library: cache Intl formatters for per-row dates and sizes
- [#17302](https://github.com/unslothai/unsloth/pull/17302) Studio debug logs: list log names instead of building a Path per file on each poll
- [#17265](https://github.com/unslothai/unsloth/pull/17265) Studio Images X/Y plot: shrink grid cells off the event loop
- [#17271](https://github.com/unslothai/unsloth/pull/17271) unsloth CLI: check a Studio pid with psutil before spawning tasklist on Windows
- [#17306](https://github.com/unslothai/unsloth/pull/17306) Studio: reuse Windows ROCm Get-Counter readings for display polls like amd-smi
- [#17364](https://github.com/unslothai/unsloth/pull/17364) Studio diffusion: price a Qwen-Image-2.1 edit's reference on the group tier so 16 GiB edits stop hooking the resident transformer (L4 first edit -19%, -8.4 GiB host RAM)
- [#16587](https://github.com/unslothai/unsloth/pull/16587) Decode CUDA graphs on by default for every FastModel model (2-8x on T4, tokens equal to eager)
- [#16737](https://github.com/unslothai/unsloth/pull/16737) Unsloth Studio: Cosmos3 256p, NVIDIA's frame ranges and a per-model frame-rate picker
- [#17339](https://github.com/unslothai/unsloth/pull/17339) Studio sd.cpp: retry an image render that sd-server refused for VRAM under half the budget
- [#17361](https://github.com/unslothai/unsloth/pull/17361) Long-chat gate: Firefox leg for dialogs, menus, browser pane and typing
- [#17353](https://github.com/unslothai/unsloth/pull/17353) Studio diffusion: keep a hosted checkpoint's header across processes, so an 8 GiB Qwen-Image-2.1 load skips its FP8 header read (L4 load -1.8 s)
- [#17360](https://github.com/unslothai/unsloth/pull/17360) Studio sd.cpp: send the simple scheduler so flow families get the diffusers sigma grid
- [#17359](https://github.com/unslothai/unsloth/pull/17359) Studio diffusion: keep no pinned host copy of a resident Qwen-Image-2.1 text encoder (L4 host RAM -8.1 GiB, peak RSS 25.3 -> 16.6 GiB)
- [#17356](https://github.com/unslothai/unsloth/pull/17356) Studio MiniMax-H3: park the VAEs when a render returns, so later requests keep their residency budget
- [#17355](https://github.com/unslothai/unsloth/pull/17355) Studio MiniMax-H3: keep conditioner layers on the card beside a resident denoiser, size its host pins to their weights
- [#17354](https://github.com/unslothai/unsloth/pull/17354) Studio MiniMax-H3: skip the up-front denoiser slab pin when every block will be resident (-16 GiB host peak on A100 40 GB)
- [#17345](https://github.com/unslothai/unsloth/pull/17345) Studio: fit a GGUF reload only after the stopped llama-server's VRAM shows as free
- [#17357](https://github.com/unslothai/unsloth/pull/17357) Studio: open and close dialogs and menus in long chats without a full thread re-layout on Firefox
- [#17351](https://github.com/unslothai/unsloth/pull/17351) Studio: open a long chat at its latest message on Chromium
- [#17350](https://github.com/unslothai/unsloth/pull/17350) Studio: compute ROCm VAE half-math SDPA per call instead of flipping the global flag
- [#17340](https://github.com/unslothai/unsloth/pull/17340) Studio: restore ROCm TunableOp state when the last diffusion pipeline unloads
- [#17352](https://github.com/unslothai/unsloth/pull/17352) Studio: glass toast surface for the runtime, Studio and Desktop update cards
- [#17349](https://github.com/unslothai/unsloth/pull/17349) Studio sd.cpp: send MiniMax-H3 reference video and audio to the resident sd-server
- [#17342](https://github.com/unslothai/unsloth/pull/17342) Studio: an unverified cached .pt no longer demotes the baseline-format safetensors twin
- [#17347](https://github.com/unslothai/unsloth/pull/17347) Studio ROCm layer split: apply the common SDPA guard only once the split fits
- [#17346](https://github.com/unslothai/unsloth/pull/17346) Studio sd.cpp: only block-split on builds whose --auto-fit takes on|off
- [#17348](https://github.com/unslothai/unsloth/pull/17348) Studio diffusion: do not let functools.wraps copy the prompt-cache transparent-wrapper marker
- [#17341](https://github.com/unslothai/unsloth/pull/17341) Studio FLUX.3: probe strided cuDNN attention on every layer split card
- [#17343](https://github.com/unslothai/unsloth/pull/17343) Studio: reroute only official NVFP4 checkpoints to INT8 on pre-Blackwell GPUs
- [#17337](https://github.com/unslothai/unsloth/pull/17337) Studio: share the FLUX.3 joint block int8 ConvRot quant under the span forward
- [#17336](https://github.com/unslothai/unsloth/pull/17336) Long-chat gate: block on CPU / paint growth with chat length, judged on fresh-page rechecks

#### 🐛 New Issues
- [#17375](https://github.com/unslothai/unsloth/issues/17375) [Bug] upgrade error `feature request` `bug` 💬3
- [#17417](https://github.com/unslothai/unsloth/issues/17417) [Bug] Mangled UI on Model Hub with Glass theme on `feature request` `bug` 💬2
- [#17365](https://github.com/unslothai/unsloth/issues/17365) [Bug] Getting "Could not save the background. Check available browser storage." when uploading background image `feature request` `bug` 💬2
- [#17440](https://github.com/unslothai/unsloth/issues/17440) [Feature] Add an optional speaker accent hint to transcription `feature request` 💬1
- [#17458](https://github.com/unslothai/unsloth/issues/17458) [Bug] Please fill in your issue title here. `feature request` `bug` 💬1
- [#17420](https://github.com/unslothai/unsloth/issues/17420) [Bug / Feature Request] Support secure custom domains and reverse proxies in Unsloth Desktop 💬1
- [#17371](https://github.com/unslothai/unsloth/issues/17371) [Feature] Add Ukrainian (uk) language coverage to Unsloth Dynamic GGUF imatrix calibration datasets `feature request` 💬1
- [#17445](https://github.com/unslothai/unsloth/issues/17445) [Feature] ship an rpm `feature request`
- [#17444](https://github.com/unslothai/unsloth/issues/17444) [Feature] Infer max token length default per model based on context length instead of a 32K default in custom connections `feature request`
- [#17441](https://github.com/unslothai/unsloth/issues/17441) [Feature] Make audio model selection more visible above “Load model into” `feature request`
- [#17439](https://github.com/unslothai/unsloth/issues/17439) [Feature] Make Model Hub search category-aware and capability tags clickable `feature request`
- [#17431](https://github.com/unslothai/unsloth/issues/17431) Nested folders in projects `feature request`
- [#17402](https://github.com/unslothai/unsloth/issues/17402) Qwen3.8-Flash-Next UD 3.1 GGUFs vs current MTP heads: draft acceptance drops ~74% -> 56-66% at production temperature (Ryzen AI Max+ 395) — are 3.1-matched heads planned?
- [#17366](https://github.com/unslothai/unsloth/issues/17366) [Feature] Add UI toggle to disable API monitor logs `feature request`

#### 🔒 Closed Issues
- [#17375](https://github.com/unslothai/unsloth/issues/17375) [Bug] upgrade error
- [#17017](https://github.com/unslothai/unsloth/issues/17017) [Bug] LAN addresses do not allow bind to network bridge with IP address (bug since it is a LAN Address)
- [#17417](https://github.com/unslothai/unsloth/issues/17417) [Bug] Mangled UI on Model Hub with Glass theme on
- [#17332](https://github.com/unslothai/unsloth/issues/17332) [Bug] Chat: `Regenerate title` just copy a piece of my last message
- [#17365](https://github.com/unslothai/unsloth/issues/17365) [Bug] Getting "Could not save the background. Check available browser storage." when uploading background image
- [#17140](https://github.com/unslothai/unsloth/issues/17140) [Bug] Please fill in your issue title here.
- [#17074](https://github.com/unslothai/unsloth/issues/17074) [Bug] Model size mismatch between Model Hub and Model Picker dropdown
- [#17147](https://github.com/unslothai/unsloth/issues/17147) [Bug] unsloth-rocm Docker: gfx1031 (RX 6700 XT) passes the startup check as "RDNA 2", then PyTorch segfaults on the first GPU op
- [#17137](https://github.com/unslothai/unsloth/issues/17137) [Bug] Image generation models fail to load on Intel Arc 140V
- [#17199](https://github.com/unslothai/unsloth/issues/17199) [Bug] Studio web fetch: a bare & gains a stray ;, escaped code leaves its code block, and a malformed &# can leave the rest of the page as raw HTML
- [#17162](https://github.com/unslothai/unsloth/issues/17162) Appearance: the glass material setting is exposed twice in the same tab, with two names and two option sets
- [#17295](https://github.com/unslothai/unsloth/issues/17295) [Bug] Video upload blocked for custom OpenAI-compatible connection
- [#17292](https://github.com/unslothai/unsloth/issues/17292) Managed account: Custom Folder browser returns 403 immediately on opening
- [#17315](https://github.com/unslothai/unsloth/issues/17315) [Bug] Hermes launcher credential provisioning correctness with api key in yaml
- [#17169](https://github.com/unslothai/unsloth/issues/17169) Appearance: the glass and background option pickers close on every pick
- [#17161](https://github.com/unslothai/unsloth/issues/17161) Appearance: the palette menu closes after every pick, so you cannot browse

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,184 · **Open issues:** 403 · **Last push:** 2h ago

On November 11, 2026, there were no new releases for AIBrix; however, several important pull requests were merged. Notable fixes included a resolution for the flaky ModelClaim preemptionPolicy immutability check and a bug that caused stale KV metric scores in gateway routing. Additionally, the project saw improvements such as ensuring that the CRD sync check runs on the default bash 3.2 found in macOS and enhancing the Index PodArray functionality without affecting the shared pod snapshot. A significant new issue was raised regarding the KPA and APA skipping a failed metric source, prompting discussions about scaling the target down. Overall, the day featured critical bug fixes and enhancements, reinforcing the project's ongoing development.

#### ✅ Merged PRs
- [#3437](https://github.com/vllm-project/aibrix/pull/3437) [Misc] Fix flaky ModelClaim preemptionPolicy immutability check
- [#3432](https://github.com/vllm-project/aibrix/pull/3432) [Bug] Run the CRD sync check on the bash 3.2 that ships with macOS
- [#3435](https://github.com/vllm-project/aibrix/pull/3435) [Bug] Index PodArray without reordering the shared pod snapshot
- [#3418](https://github.com/vllm-project/aibrix/pull/3418) [Bug] Avoid stale KV metric scores in gateway routing
- [#3440](https://github.com/vllm-project/aibrix/pull/3440) feat(openai-frontend): support video processors

#### 🐛 New Issues
- [#3439](https://github.com/vllm-project/aibrix/issues/3439) [Bug] KPA and APA skip a failed metric source, so the remaining sources can scale the target down `kind/bug` `area/orchestration` 💬6
- [#3442](https://github.com/vllm-project/aibrix/issues/3442) [RFC]: Read cross-gateway running counts from aibrix:rrq and drop the 100 ms gateway snapshot sync `area/gateway` `kind/feature` 💬4
- [#3441](https://github.com/vllm-project/aibrix/issues/3441) [Bug] Candidate stage keeps adding remote running counts that were last read long ago when snapshot reads keep failing `kind/bug` `area/gateway` `triage/accepted` 💬3

#### 🔒 Closed Issues
- [#3386](https://github.com/vllm-project/aibrix/issues/3386) [Bug] KPA and APA round scale-rate limits past the configured rate, so 50 pods at 1.1 can scale to 56
- [#3370](https://github.com/vllm-project/aibrix/issues/3370) [Feature] Proxy Engine — Source-Agnostic Input/Output for Unmodified Inference Engines

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,446 · **Open issues:** 669 · **Last push:** 1h ago

On November 11, 2026, there were no new releases for the Semantic Router project; however, a notable merged pull request introduces a feature to skip repeated audio preparation on result-cache hits, enhancing efficiency. The day was marked by the emergence of several new issues, with #6143 proposing the implementation of versioned System One API schemas, aiming to standardize the systemone/0.2 and create a vllm-sr/5.0 extension set. Additionally, a series of bugs were reported, including #6178, which details a deployment issue where the Builder configuration reverts after being loaded, as well as #6177, which addresses Envoy listener timeouts and schema versioning issues. These developments indicate ongoing challenges in the project as it continues to evolve in the AI ecosystem.

#### ✅ Merged PRs
- [#6054](https://github.com/vllm-project/semantic-router/pull/6054) [Feature] Skip repeated audio preparation on result-cache hits

#### 🐛 New Issues
- [#6143](https://github.com/vllm-project/semantic-router/issues/6143) [Feature] Versioned System One API schemas: the standard systemone/0.2, a vllm-sr/5.0 extension set and one codec layer `enhancement` `accepted` `wg/router-models-inference-runtime` 💬1
- [#6178](https://github.com/vllm-project/semantic-router/issues/6178) [Bug] Builder deploy reverts config saved elsewhere after the Builder loaded, and setup refuses the endpoint form its own wizard writes `bug` `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬1
- [#6169](https://github.com/vllm-project/semantic-router/issues/6169) [Bug] Dashboard config editor and setup refuse a delegated decision deployment and the renamed decision forms, flip explicit false on a raw Global Config save, and drop evaluation `bug` `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬1
- [#6177](https://github.com/vllm-project/semantic-router/issues/6177) [Bug] --gateway extproc renders listener timeouts Envoy cannot load and accepts listeners[].systemone, and Helm stamps a removed schema version on configOverride `bug` `accepted` `in-progress` `wg/enterprise-environment` 💬1
- [#6176](https://github.com/vllm-project/semantic-router/issues/6176) [Bug] Operator Ingress and Route reach the management API, Secret passwords that look like numbers change, and unset Router settings are written as zero `bug` `accepted` `in-progress` `wg/enterprise-environment` 💬1
- [#6175](https://github.com/vllm-project/semantic-router/issues/6175) [Bug] Request plugins break valid requests: Anthropic thinking under max_tokens_limit, blocked stream, a blocked named tool_choice, and prompt_cache on fallback `bug` `accepted` `in-progress` `wg/data-plane-networking` 💬1
- [#6174](https://github.com/vllm-project/semantic-router/issues/6174) [Bug] A remote System One deployment loads image and audio rules it cannot read, and an images model gets only the last text part of the prompt `bug` `accepted` `in-progress` `wg/router-models-inference-runtime` 💬1
- [#6173](https://github.com/vllm-project/semantic-router/issues/6173) [Bug] Replay credits a fallback answer to the failed primary, splits Claude Code tool hops into turns, and misses records and signal families `bug` `accepted` `in-progress` `wg/mom-routing` 💬1
- [#6171](https://github.com/vllm-project/semantic-router/issues/6171) [Bug] Standalone /ready reports ready before Kubernetes config is active, Azure requests count as other traffic, and API errors, metric labels and documented values disagree with the code `bug` `accepted` `in-progress` `wg/data-plane-networking` 💬1
- [#6172](https://github.com/vllm-project/semantic-router/issues/6172) [Bug] Vector-store attachments are lost on restart, deleted files stay searchable, and store write failures answer 404 `bug` `accepted` `in-progress` `wg/data-plane-networking` 💬1
- [#6170](https://github.com/vllm-project/semantic-router/issues/6170) [Bug] A served model name drops the catalog's Provider mapping, a default effort skips the Provider check, and shadow calls and model lists disagree with request routing `bug` `accepted` `in-progress` `wg/data-plane-networking` 💬1
- [#6168](https://github.com/vllm-project/semantic-router/issues/6168) [Bug] Looper drops a json_schema response_format, skips parts of output_contract_spec, and answers a model's 429 with 500 `bug` `accepted` `in-progress` `wg/mom-routing` 💬1
- [#6167](https://github.com/vllm-project/semantic-router/issues/6167) [Bug] Redis and Valkey stores score a COSINE match as (1 + cos) / 2 `bug` `accepted` `in-progress` `wg/agentic-context` 💬1
- [#6149](https://github.com/vllm-project/semantic-router/issues/6149) [Bug] The Router and the CLI disagree on empty global sections and several config forms `bug` `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬1
- [#6146](https://github.com/vllm-project/semantic-router/issues/6146) [Bug] Protocol translation breaks Codex usage parsing, garbles tool calls in Chat streams, and mistranslates stop reasons `bug` `accepted` `in-progress` `wg/data-plane-networking` 💬1
- [#6147](https://github.com/vllm-project/semantic-router/issues/6147) [Bug] previous_response_id drops the developer and system items of the stored input `bug` `accepted` `in-progress` `wg/data-plane-networking` 💬1
- [#6145](https://github.com/vllm-project/semantic-router/issues/6145) [Bug] Config load erases `$` text that is not an environment reference `bug` `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬1
- [#6140](https://github.com/vllm-project/semantic-router/issues/6140) [Bug] Failed responses count as fast TTFT, cross-model fallback mishandles breakers, replicas and the trace, and retry_on typos load silently `bug` `accepted` `in-progress` `wg/mom-routing` 💬1
- [#6137](https://github.com/vllm-project/semantic-router/issues/6137) [Bug] Partitions default over unread or failed members, and other signal inputs read wrong `bug` `accepted` `in-progress` `wg/mom-routing` 💬1
- [#6139](https://github.com/vllm-project/semantic-router/issues/6139) [Bug] Looper executors lose the question of a content-part turn, overcount Flow usage and spend escalate's max_calls on answer checks `bug` `accepted` `in-progress` `wg/mom-routing` 💬1
- [#6138](https://github.com/vllm-project/semantic-router/issues/6138) [Bug] Model runtime refuses a large batch even when idle, and a replica that keeps hitting timeout_ms is never ejected `bug` `accepted` `in-progress` `wg/router-models-inference-runtime` 💬1
- [#6136](https://github.com/vllm-project/semantic-router/issues/6136) [Bug] Rate limits and authz miss a capitalized identity header, and the config API refuses a standalone listener's key rotation `bug` `accepted` `in-progress` `wg/data-plane-networking` 💬1
- [#6135](https://github.com/vllm-project/semantic-router/issues/6135) [Bug] strip_tool_history drops the context plugin's documents and memories, and session memory counts the current turn twice `bug` `accepted` `in-progress` `wg/agentic-context` 💬1
- [#6144](https://github.com/vllm-project/semantic-router/issues/6144) [Feature] Fallback deployments for decision models `enhancement` `needs-acceptance` `wg/router-models-inference-runtime` 💬1
- [#6130](https://github.com/vllm-project/semantic-router/issues/6130) [Docs] Fallback per_attempt_timeout and total_timeout do not bound the first attempt `accepted` `wg/data-plane-networking` `documentation` 💬1
- [#6133](https://github.com/vllm-project/semantic-router/issues/6133) [Bug] A client's own credential headers reach the selected provider `bug` `accepted` `wg/data-plane-networking` 💬1
- [#6127](https://github.com/vllm-project/semantic-router/issues/6127) [Bug] OpenAI chat `store` is refused for Anthropic-format backends, even `store: false` `bug` `accepted` `wg/data-plane-networking` 💬1
- [#6128](https://github.com/vllm-project/semantic-router/issues/6128) [Bug] config migrate refuses embeddings.semantic naming an earlier embedding model 💬1
- [#6120](https://github.com/vllm-project/semantic-router/issues/6120) [Feature] Let vSR use a System One API that serves several models `enhancement` `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬1
- [#6179](https://github.com/vllm-project/semantic-router/issues/6179) [Bug] A response cache flush does not outlast a reload, and the Milvus and Qdrant caches never delete expired entries `bug` `needs-acceptance` `wg/agentic-context`
- [#6164](https://github.com/vllm-project/semantic-router/issues/6164) [Bug] Escalate self_verify streams fail with stream_model_mismatch when the backend names its own model `needs-acceptance` `wg/mom-routing`
- [#6161](https://github.com/vllm-project/semantic-router/issues/6161) [Bug] ci second verification on a non-matrix executor blocks all PR merges `bug` `needs-acceptance` `wg/developer-experience-ecosystem`
- [#6150](https://github.com/vllm-project/semantic-router/issues/6150) [Bug] Preserve escaped path segments when appending connector operation paths `needs-acceptance` `wg/router-models-inference-runtime`
- [#6148](https://github.com/vllm-project/semantic-router/issues/6148) [Bug] A later system or developer message moves to the top for Chat and Responses clients but stays in place for Messages clients `bug` `needs-acceptance` `wg/data-plane-networking`
- [#6126](https://github.com/vllm-project/semantic-router/issues/6126) [Bug] Hybrid cache rebuilds the whole HNSW index on every write once it's full `needs-acceptance` `wg/data-plane-networking`
- [#6124](https://github.com/vllm-project/semantic-router/issues/6124) [Feature] Serve several agent harnesses from one gateway `enhancement` `needs-acceptance` `wg/agentic-context`

#### 🔒 Closed Issues
- [#6012](https://github.com/vllm-project/semantic-router/issues/6012) [Bug] Stored response input_items regenerate instruction item IDs on every read
- [#4942](https://github.com/vllm-project/semantic-router/issues/4942) [Bug] Read-only KB validation accepts POSIX-absolute source paths on Windows
- [#6052](https://github.com/vllm-project/semantic-router/issues/6052) [Feature] Reduce latency of cached audio embeddings
- [#6130](https://github.com/vllm-project/semantic-router/issues/6130) [Docs] Fallback per_attempt_timeout and total_timeout do not bound the first attempt
- [#6133](https://github.com/vllm-project/semantic-router/issues/6133) [Bug] A client's own credential headers reach the selected provider
- [#6127](https://github.com/vllm-project/semantic-router/issues/6127) [Bug] OpenAI chat `store` is refused for Anthropic-format backends, even `store: false`
- [#6128](https://github.com/vllm-project/semantic-router/issues/6128) [Bug] config migrate refuses embeddings.semantic naming an earlier embedding model

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*