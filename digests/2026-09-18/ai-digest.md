# 📡 AI Ecosystem Digest — 2026-09-18

> Generated 2026-09-18 01:05 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 145,870 | 11 | 18 | 0 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 124,925 | 18 | 4 | 49 | 6 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 107,044 | 1 | 0 | 4 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,180 | 10 | 27 | 0 | 1 |
| [OpenCode](https://github.com/anomalyco/opencode) | 208,198 | 35 | 20 | 1 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 27,931 | 25 | 10 | 3 | 2 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 390,006 | 196 | 123 | 195 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 246,556 | 36 | 10 | 0 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 92,035 | 26 | 42 | 58 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 36,111 | 13 | 7 | 34 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 128,604 | 16 | 13 | 18 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 181,175 | 8 | 2 | 8 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 59,022 | 28 | 27 | 74 | 0 |
| [Unsloth](https://github.com/unslothai/unsloth) | 76,318 | 9 | 27 | 79 | 1 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,096 | 2 | 2 | 2 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 5,851 | 3 | 9 | 13 | 0 |

---

## ✨ Highlights

- **Claude Code** released version [v2.1.275](https://github.com/anthropics/claude-code/releases/tag/v2.1.275).
- **OpenAI Codex** had multiple releases including version [rust-v0.156.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.156.0-alpha.1).
- **Qwen Code** launched two updates with releases [v0.24.0-nightly.20260917.f822124af5](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.0-nightly.20260917.f822124af5) and [desktop-v0.24.0](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.24.0).
- **OpenCode** saw various issues gaining traction, notably the bug report [#49580](https://github.com/anomalyco/opencode/issues/49580) with 31 comments regarding the free tier's functionality.
- **VLLM** faced significant discussion on new issues, particularly [#57424](https://github.com/vllm-project/vllm/issues/57424) related to boot failures in nightly builds, collecting 6 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 145,870 · **Open issues:** 12,459 · **Last push:** 2h ago

On September 18, 2026, Claude Code released version 2.1.275, which introduced a signed-in account confirmation for the Claude apps gateway sign-in, a new send-now key functionality for instant message sending, and a startup warning to improve user experience. There were no merged pull requests reported in the last 24 hours, but several new issues emerged, including a significant bug (#95050) where Claude Desktop 2.110.0 on Windows fails to launch after quitting without restarting the CoworkVMService. Other notable bugs include session visibility issues (#95231, #95254) and a potential privacy concern involving user email exposure (#95258).

#### 🚀 New Releases
- [v2.1.275](https://github.com/anthropics/claude-code/releases/tag/v2.1.275) v2.1.275

#### 🐛 New Issues
- [#95050](https://github.com/anthropics/claude-code/issues/95050) [BUG] Claude Desktop 2.110.0 (Windows/MSIX): after a quit, every launch fails with renderer "launch-failed, exitCode: 21" until CoworkVMService is restarted `bug` `has repro` `platform:windows` `area:cowork` 💬2
- [#95231](https://github.com/anthropics/claude-code/issues/95231) [BUG] Remote Control sessions are hidden from the local /resume picker (filtered as entrypoint=sdk-cli) 💬1
- [#95254](https://github.com/anthropics/claude-code/issues/95254) [BUG] Remote Control session shows/processes incoming cross-session messages but reports 'offline' for the user's own input 💬1
- [#95258](https://github.com/anthropics/claude-code/issues/95258) [Bug] User email from account metadata inadvertently sent to external service in User-Agent header `bug` `platform:linux` `area:security`
- [#95257](https://github.com/anthropics/claude-code/issues/95257) [BUG] Claude Code repeatedly ignores explicit user instructions to stop and research before acting `bug` `platform:macos` `area:model`
- [#95256](https://github.com/anthropics/claude-code/issues/95256) [Feature Request] UI testing agent should capture screenshot before attempting interactions `enhancement` `area:model` `platform:intellij`
- [#95255](https://github.com/anthropics/claude-code/issues/95255) PowerShell tool spawns a bare, visible powershell.exe host window (Windows) `bug` `platform:windows` `area:tools` `area:desktop`
- [#95253](https://github.com/anthropics/claude-code/issues/95253) Host-side AffixIO attestation for privileged tool calls (PreToolUse / PermissionRequest)
- [#95252](https://github.com/anthropics/claude-code/issues/95252) VSCode extension: Session History panel empty/stale due to missing or orphaned sessions-index.json
- [#95251](https://github.com/anthropics/claude-code/issues/95251) Allow remapping/disabling GUI menu keyboard shortcuts (View menu, etc.)
- [#95250](https://github.com/anthropics/claude-code/issues/95250) [Feature Request] Allow running jobs to complete when credit limit reached instead of immediate termination

#### 🔒 Closed Issues
- [#79296](https://github.com/anthropics/claude-code/issues/79296) [Feature Request] Official support for Claude Desktop on Arch Linux and derivatives
- [#79381](https://github.com/anthropics/claude-code/issues/79381) [FEATURE] /nudge — send an ephemeral one-turn instruction that doesn't persist in conversation context
- [#79436](https://github.com/anthropics/claude-code/issues/79436) [FEATURE] VSCode extension: render images inline in the chat panel instead of the "[Image]" placeholder
- [#79399](https://github.com/anthropics/claude-code/issues/79399) [BUG] No safeguard before an agent bulk-creates dozens of PRs against a real external repo (91 PRs auto-closed + repo locked me out)
- [#79453](https://github.com/anthropics/claude-code/issues/79453) [FEATURE] Add a setting to exit with a single Ctrl+D instead of pressing it twice
- [#79435](https://github.com/anthropics/claude-code/issues/79435) [FEATURE] prompt for `cleanupPeriodDays` during initial setup
- [#79304](https://github.com/anthropics/claude-code/issues/79304) [Feature Request] Restore discontinued Fable model support
- [#79311](https://github.com/anthropics/claude-code/issues/79311) [FEATURE] VS Code extension: render MCP `claude/channel` push notifications in the native panel (parity with the terminal TUI)
- [#79330](https://github.com/anthropics/claude-code/issues/79330) [FEATURE] Permission Dialog Position Conflicts with Windows Notifications
- [#79361](https://github.com/anthropics/claude-code/issues/79361) [FEATURE] Chips with dropdown functionality e.g. workfolder should have a chevron or other indication that they are dropdown
- [#79391](https://github.com/anthropics/claude-code/issues/79391) [FEATURE] /export to export sessions in .html file
- [#79394](https://github.com/anthropics/claude-code/issues/79394) [FEATURE] Configure list of session history to display in Claude desktop
- [#79401](https://github.com/anthropics/claude-code/issues/79401) I'm not able to generate an issue title from that input as it doesn't contain a bug report or feature request description. Please provide details about the actual problem you're experiencing with Claude Code, including: - What you were trying to do - What
- [#79411](https://github.com/anthropics/claude-code/issues/79411) [FEATURE] Ability to revoke Claude's access to a specific tab without closing/reloading it
- [#79440](https://github.com/anthropics/claude-code/issues/79440) Bash tool shell runs with `expand_aliases` enabled — shell aliases can silently rewrite commands after PreToolUse hook approval
- [#79443](https://github.com/anthropics/claude-code/issues/79443) [FEATURE] Interactive session deletion in the `--resume` picker (like Ctrl+X in `claude agents`)
- [#79451](https://github.com/anthropics/claude-code/issues/79451) [FEATURE] Allow Ctrl+D, Ctrl+D to exit `claude agents` (consistent with `claude --resume`)
- [#79456](https://github.com/anthropics/claude-code/issues/79456) Agents view: @ project picker is prefix-only, so interior substring matches never surface

### OpenAI Codex (`openai/codex`)

**Stars:** 124,925 · **Open issues:** 17,657 · **Last push:** <1h ago

On September 18, 2026, the Rust release cycle saw significant updates with rust-v0.155.0 introducing experimental `/voice` conversations featuring live transcripts and microphone controls, along with display enhancements in the TUI for reasoning summaries and completion timestamps. An alpha update, rust-v0.156.0-alpha.1, was also released. Key merged PRs included improvements to MCP policy consistency, network policy validation timing, and enhancements to OAuth credential management for model providers. Notably, a critical issue was reported regarding the Amazon Bedrock GPT rejecting reasoning summaries after the v0.155.0 update, raising concerns among users.

#### 🚀 New Releases
- [rust-v0.155.0](https://github.com/openai/codex/releases/tag/rust-v0.155.0) 0.155.0
- [rust-v0.156.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.156.0-alpha.1) 0.156.0-alpha.1
- [rust-v0.155.0-alpha.18](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.18) 0.155.0-alpha.18
- [rust-v0.155.0-alpha.17](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.17) 0.155.0-alpha.17
- [rust-v0.155.0-alpha.16](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.16) 0.155.0-alpha.16
- [rust-v0.155.0-alpha.15](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.15) 0.155.0-alpha.15

#### ✅ Merged PRs
- [#46335](https://github.com/openai/codex/pull/46335) Keep MCP policy evaluation consistent with turn environments
- [#46334](https://github.com/openai/codex/pull/46334) Share platform identity across path, network, and sandbox configuration
- [#46333](https://github.com/openai/codex/pull/46333) Handle disabled Windows sandbox accounts during cleanup
- [#46332](https://github.com/openai/codex/pull/46332) Dim conversation recaps in the TUI
- [#46331](https://github.com/openai/codex/pull/46331) Defer environment network policy validation until after composition
- [#46330](https://github.com/openai/codex/pull/46330) Move retry backoff into `codex-async-utils`
- [#46328](https://github.com/openai/codex/pull/46328) Avoid persisting project trust for projectless directories
- [#46324](https://github.com/openai/codex/pull/46324) Broaden compaction fallback to the current model
- [#46323](https://github.com/openai/codex/pull/46323) Record active plugin inventory in turn analytics
- [#46322](https://github.com/openai/codex/pull/46322) Set the Windows sandbox type in the pending environment test
- [#46319](https://github.com/openai/codex/pull/46319) Preserve web search actions and results in exec JSON output
- [#46318](https://github.com/openai/codex/pull/46318) Add OAuth credential management for model provider gateways
- [#46310](https://github.com/openai/codex/pull/46310) Defer environment selection changes until the next turn
- [#46309](https://github.com/openai/codex/pull/46309) Preserve plugin caches across display metadata refreshes
- [#46306](https://github.com/openai/codex/pull/46306) Preserve bio policy errors as a distinct non-retryable error
- [#46305](https://github.com/openai/codex/pull/46305) Avoid cloning turn items for app-server active turn lookups
- [#46303](https://github.com/openai/codex/pull/46303) Serialize release asset uploads to avoid secondary rate limits
- [#46302](https://github.com/openai/codex/pull/46302) Validate network socket policies using the executor OS
- [#46300](https://github.com/openai/codex/pull/46300) Centralize OAuth login and refresh handling with safer diagnostics
- [#46297](https://github.com/openai/codex/pull/46297) Support catalog descriptions for all multi-agent V2 tools
- [#46294](https://github.com/openai/codex/pull/46294) Separate thread startup metadata from replay history
- [#46293](https://github.com/openai/codex/pull/46293) Route skill discovery and loading through `EnvironmentAccess`
- [#46292](https://github.com/openai/codex/pull/46292) Preserve selected reasoning effort for synchronous Guardian reviews
- [#46291](https://github.com/openai/codex/pull/46291) Filter saved reasoning overrides from requests when disabled
- [#46288](https://github.com/openai/codex/pull/46288) Add opt-in overhead timing to code-mode responses
- [#46281](https://github.com/openai/codex/pull/46281) Connect app-server workspace discovery to model request routing
- [#46279](https://github.com/openai/codex/pull/46279) Preserve Guardian's reusable history prefix across approval requests
- [#46278](https://github.com/openai/codex/pull/46278) Reduce R2 release upload concurrency and enable standard retries
- [#46271](https://github.com/openai/codex/pull/46271) Enable MXC selection through Windows sandbox configuration
- [#46268](https://github.com/openai/codex/pull/46268) Add filesystem accessors bound to environment permissions
- [#46266](https://github.com/openai/codex/pull/46266) Expand Unicode math rendering with accents, symbols, and delimiters
- [#46264](https://github.com/openai/codex/pull/46264) Relax delegation guidance in the v2 `spawn_agent` description
- [#46258](https://github.com/openai/codex/pull/46258) Preserve uploaded image file IDs in user message display history
- [#46245](https://github.com/openai/codex/pull/46245) Publish Guardian cached scores and coverage atomically
- [#46241](https://github.com/openai/codex/pull/46241) Repair Windows sandbox access to existing runtime children
- [#46239](https://github.com/openai/codex/pull/46239) Prefer the provisioning service for automatic Windows sandbox setup
- [#46237](https://github.com/openai/codex/pull/46237) Improve Windows sandbox error details and registry cleanup
- [#46230](https://github.com/openai/codex/pull/46230) Preserve configured Flex tiers without catalog or fast-mode support
- [#46179](https://github.com/openai/codex/pull/46179) Include sender user messages in Guardian delegation reviews
- [#46126](https://github.com/openai/codex/pull/46126) Record daemon startup and update telemetry with consent handling
- [#46125](https://github.com/openai/codex/pull/46125) Fix daemon socket isolation checks for private tmp mounts
- [#46123](https://github.com/openai/codex/pull/46123) Allow model catalogs to override the V2 `spawn_agent` description
- [#46122](https://github.com/openai/codex/pull/46122) Route filesystem reads and writes by their own sandbox permissions
- [#46117](https://github.com/openai/codex/pull/46117) Add opt-in automatic background server startup
- [#46116](https://github.com/openai/codex/pull/46116) Make TUI web and image activity summaries compact and descriptive
- [#46112](https://github.com/openai/codex/pull/46112) Preserve filesystem sandbox policy context when the cwd disappears
- [#46108](https://github.com/openai/codex/pull/46108) Replace Sites migration state with a runtime compatibility guard
- [#46107](https://github.com/openai/codex/pull/46107) Box app-server request handler futures to reduce stack usage
- [#46104](https://github.com/openai/codex/pull/46104) Pause TUI events in the agents overview regression test

#### 🐛 New Issues
- [#46254](https://github.com/openai/codex/issues/46254) I am PRO $100 plan and it already used the weekly usage so i spent another $100 this morning to buy credits and its gone already???? WHy and how? `bug` `rate-limits` `performance` 💬5
- [#46114](https://github.com/openai/codex/issues/46114) Windows Desktop: elevated sandbox fails with "requires effective :root read access" on every thread (new and existing); unelevated, admin relaunch, app repair, and app reset all fail to fix it `bug` `windows-os` `sandbox` `app` 💬3
- [#46327](https://github.com/openai/codex/issues/46327) Computer Use is not available on ChatGPT MacOS Intel `bug` `app` `skills` `computer-use` 💬1
- [#46312](https://github.com/openai/codex/issues/46312) [Windows Desktop regression] Existing root-deny permission-profile chat cannot resume after 26.911.7940.0 update `bug` `windows-os` `sandbox` `app` 💬1
- [#46336](https://github.com/openai/codex/issues/46336) Amazon Bedrock GPT rejects reasoning.summary after v0.155.0 `bug` `CLI` `aws-bedrock` 💬1
- [#46229](https://github.com/openai/codex/issues/46229) Windows app: authenticated GCS download blocked by client, followed by auto-review denial of diagnostic lookup `bug` `windows-os` `sandbox` `app` 💬1
- [#46326](https://github.com/openai/codex/issues/46326) Windows sandbox error `bug` `windows-os` `sandbox` `app` 💬1
- [#46321](https://github.com/openai/codex/issues/46321) capacity `bug` `rate-limits` `app` 💬1
- [#46320](https://github.com/openai/codex/issues/46320) ChatGPT Windows app – broken response formatting `bug` `windows-os` `app` 💬1
- [#46317](https://github.com/openai/codex/issues/46317) [Desktop] Non-dismissible subscription quota banner persists in working custom API sessions `bug` `rate-limits` `custom-model` `app` 💬1
- [#46316](https://github.com/openai/codex/issues/46316) app-server: thread history projection stalls forever after a duplicated rollout ordinal ("expected N, got N-1"); thread/items/list and thread/turns/list stop reflecting new turns `bug` `CLI` `app-server` 💬1
- [#46313](https://github.com/openai/codex/issues/46313) Allow a VS Code Codex prompt to declare the model and reasoning effort for that invocation `enhancement` `extension` 💬1
- [#46311](https://github.com/openai/codex/issues/46311) Send to Codex `enhancement` `CLI` `session` 💬1
- [#46337](https://github.com/openai/codex/issues/46337) Allow PreCompact hooks to replace the active conversation history
- [#46329](https://github.com/openai/codex/issues/46329) Withdrawn `bug` `model-behavior` `extension` `automations`
- [#46325](https://github.com/openai/codex/issues/46325) chat button turns into voice command `bug` `app`
- [#46315](https://github.com/openai/codex/issues/46315) Workspace Plugins not invocable `bug` `CLI` `skills`
- [#46314](https://github.com/openai/codex/issues/46314) Codex desktop renderer SIGILL at explicit UD2 trap on Linux (26.908.40834) `bug` `app`

#### 🔒 Closed Issues
- [#45999](https://github.com/openai/codex/issues/45999) SessionStart hook output with additionalContext is rejected, so no context can be injected
- [#45773](https://github.com/openai/codex/issues/45773) exec JSON events collapse web_search page opens into `other` and drop `results`
- [#46336](https://github.com/openai/codex/issues/46336) Amazon Bedrock GPT rejects reasoning.summary after v0.155.0
- [#46329](https://github.com/openai/codex/issues/46329) Withdrawn

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 107,044 · **Open issues:** 853 · **Last push:** 4h ago

On September 18, 2026, Gemini CLI released the new version v0.62.0-nightly.20260917.g6a466a7e2, which includes various updates improving the command-line interface's performance and capabilities. Among the merged pull requests, significant fixes include enhancements to PTY file descriptor management, making credential deletion idempotent, and a guard against negative layout dimensions in the UI, all contributing to better stability and usability. Additionally, the integration tests for run_shell_command and file-system-interactive were deflaked to improve reliability. A notable new issue has been reported (#29370) regarding the removal of comments from files during updates, which may require urgent attention.

#### 🚀 New Releases
- [v0.62.0-nightly.20260917.g6a466a7e2](https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0-nightly.20260917.g6a466a7e2) Release v0.62.0-nightly.20260917.g6a466a7e2

#### ✅ Merged PRs
- [#29340](https://github.com/google-gemini/gemini-cli/pull/29340) fix(core): improve PTY file descriptor cleanup and execution lifecycle management
- [#29185](https://github.com/google-gemini/gemini-cli/pull/29185) test(integration): deflake run_shell_command and file-system-interactive tests
- [#29347](https://github.com/google-gemini/gemini-cli/pull/29347) fix(ui): guard against negative layout dimensions in border rendering
- [#29339](https://github.com/google-gemini/gemini-cli/pull/29339) fix(core): retain oauth refresh token on refresh and make credential deletion idempotent

#### 🐛 New Issues
- [#29370](https://github.com/google-gemini/gemini-cli/issues/29370) Removes comments from a file when making updates `priority/p2` `area/agent` `status/bot-triaged` `kind/bug` 💬1

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,180 · **Open issues:** 2,378 · **Last push:** 2h ago

On September 17, 2026, GitHub Copilot CLI released version 1.0.86, which introduced the ability for custom agents to opt into repository instruction files by setting `include-custom-instructions: true` in their frontmatter. It also enhanced session resumption by preserving marketplace plugins and skills after a reload, even when certain directory overrides are not used. Among the new issues reported, #4887 highlights an error in Model mode auto-returning issues when using the /btw or /ask commands, indicating potential usability concerns. Overall, the day was marked by a significant update but no merged pull requests for enhancements or fixes.

#### 🚀 New Releases
- [v1.0.86](https://github.com/github/copilot-cli/releases/tag/v1.0.86) 1.0.86

#### 🐛 New Issues
- [#4887](https://github.com/github/copilot-cli/issues/4887) GitHub Copilot CLI in Model mode Auto returns error if you are using /btw or /ask command `triage` 💬3
- [#4892](https://github.com/github/copilot-cli/issues/4892) Extension hosts and all MCP servers are re-enumerated on an hourly in-session reload cycle `triage` 💬1
- [#4896](https://github.com/github/copilot-cli/issues/4896) GPT-6 Astra remains absent from authenticated model catalog after provider incident resolved `triage`
- [#4895](https://github.com/github/copilot-cli/issues/4895) Unused new sessions are titled with a random ID rather than retaining "Session 4" label `triage`
- [#4894](https://github.com/github/copilot-cli/issues/4894) Resuming a long session scrolls very far back, scrollbar may or may not be draggable to return `triage`
- [#4893](https://github.com/github/copilot-cli/issues/4893) Links are not clickable `triage`
- [#4891](https://github.com/github/copilot-cli/issues/4891) `copilot.exe` hard-crashes on Windows (0xc0000005), losing in-flight turns and corrupting terminal state `triage`
- [#4889](https://github.com/github/copilot-cli/issues/4889) Resume session with session id fails with "no session matched" `triage`
- [#4890](https://github.com/github/copilot-cli/issues/4890) In `ask_user` "Other" option has issues: it disappears or gets overridden by later "Other" text `triage`
- [#4888](https://github.com/github/copilot-cli/issues/4888) MCP client sends legacy initialize after successful 2026-07-28 server/discover `triage`

#### 🔒 Closed Issues
- [#4753](https://github.com/github/copilot-cli/issues/4753) v1.0.83: session resume cancels in-flight stdio MCP server connections (~1s timeout, was ~16s in v1.0.82)
- [#2653](https://github.com/github/copilot-cli/issues/2653) Native worktree support
- [#1575](https://github.com/github/copilot-cli/issues/1575) Allow copilot to see the output from user shell commands
- [#3647](https://github.com/github/copilot-cli/issues/3647) Plan mode has become unreliable
- [#2555](https://github.com/github/copilot-cli/issues/2555) Support all slash commands in ACP
- [#4655](https://github.com/github/copilot-cli/issues/4655) Agent Plugins 1.0: custom agents under com.github.copilot/agents are not discovered
- [#1505](https://github.com/github/copilot-cli/issues/1505) Unactionable message when github-mcp-server is disable in Azure Dev Ops repository
- [#847](https://github.com/github/copilot-cli/issues/847) Powershell tool requires `pwsh` and fails if I do not have it installed
- [#3382](https://github.com/github/copilot-cli/issues/3382) [regression] Copilot stopped working on FreeBSD: Unsupported platform: freebsd/x64
- [#3605](https://github.com/github/copilot-cli/issues/3605) Multiline copy truncates spaces between lines
- [#2429](https://github.com/github/copilot-cli/issues/2429) Using tab during file autocomplete adds space
- [#1239](https://github.com/github/copilot-cli/issues/1239) Bash tool PTY cleanup corruption causes complete failure after sustained use
- [#4500](https://github.com/github/copilot-cli/issues/4500) BYOK: autopilot nudge turn re-serializes previously-sent transcript items, breaking prompt caching
- [#3553](https://github.com/github/copilot-cli/issues/3553) Session data loss when agency copilot closes
- [#4060](https://github.com/github/copilot-cli/issues/4060) Pasting output copied from copilot mangles the input area unrecoverably
- [#4459](https://github.com/github/copilot-cli/issues/4459) Auto model execution failure due to reasoning level
- [#4445](https://github.com/github/copilot-cli/issues/4445) Auto mode sometimes picks impossible model
- [#4319](https://github.com/github/copilot-cli/issues/4319) Plan review not shown and session hangs after switching sessions during plan mode
- [#4193](https://github.com/github/copilot-cli/issues/4193) Allow sandboxed sessions to write their own plan.md without granting access to other sessions
- [#3899](https://github.com/github/copilot-cli/issues/3899) /rubber-duck availability is unclear under /model auto; docs should clarify or command should work when auto resolves to an eligible model
- [#3591](https://github.com/github/copilot-cli/issues/3591) Accessibility regression: User prompt visual distinction removed (#3390 fix) — needs opt-in restoration
- [#3409](https://github.com/github/copilot-cli/issues/3409) 'No copilot-instructions.md found' notice is misleading when global config exists
- [#3283](https://github.com/github/copilot-cli/issues/3283) Cannot use 1.0.46 copilot-cli in Ubuntu System with GLIBC_2.33
- [#2961](https://github.com/github/copilot-cli/issues/2961) Make `!shell` commands and their output visible to the agent
- [#2569](https://github.com/github/copilot-cli/issues/2569) Bug: Multiple unsolicited rubber-duck background agents spawned from a single task tool call
- [#2387](https://github.com/github/copilot-cli/issues/2387) Intermittent ACCESS_VIOLATION (0xC0000005) crash on Windows during AI model requests
- [#4604](https://github.com/github/copilot-cli/issues/4604) MCP: user-configured api.githubcopilot.com/mcp/ server loses the injected Copilot token on 1.0.81-10, and /mcp auth cannot rescue it (github.com advertises no dynamic client registration)

### OpenCode (`anomalyco/opencode`)

**Stars:** 208,198 · **Open issues:** 5,849 · **Last push:** <1h ago

On September 18, 2026, there were no new releases for OpenCode. However, a notable feature was merged in PR #49646, which introduces the new "/btw side question" command to the TUI, enhancing user interaction capabilities. The day saw a surge of new issues, particularly concerning the limitations of the free tier where multiple users reported errors indicating it "can only be used from within OpenCode" when attempting to use features like the MonoCode frontend or during auto-compaction. These issues are generating significant discussion, highlighting a pressing concern for users relying on the free-tier model.

#### ✅ Merged PRs
- [#49646](https://github.com/anomalyco/opencode/pull/49646) feat(tui): add /btw side question command

#### 🐛 New Issues
- [#49580](https://github.com/anomalyco/opencode/issues/49580) [BUG]: Free tier (Muse Spark 1.3 Free) fails with 'can only be used from within OpenCode' when using MonoCode frontend with OpenCode backend 💬31
- [#49610](https://github.com/anomalyco/opencode/issues/49610) OpenCode's free tier can only be used from within OpenCode while usign Opencode? 💬13
- [#49587](https://github.com/anomalyco/opencode/issues/49587) [Bug]: Auto-compaction fails with "OpenCode's free tier can only be used from within OpenCode" on OpenCode Zen 💬11
- [#49438](https://github.com/anomalyco/opencode/issues/49438) Error from provider (Console): OpenCode's free tier can only be used from within OpenCode 💬7
- [#49609](https://github.com/anomalyco/opencode/issues/49609) Error from provider (Console): OpenCode's free tier can only be used from within OpenCode 💬7
- [#49604](https://github.com/anomalyco/opencode/issues/49604) OpenCode Desktop incorrectly rejects free-tier models with "can only be used from within OpenCode 💬6
- [#49588](https://github.com/anomalyco/opencode/issues/49588) Error from provider (Console): OpenCode's free tier can only be used from within OpenCode (Desktop app v1.18.31) 💬6
- [#49590](https://github.com/anomalyco/opencode/issues/49590) Official OpenCode Desktop incorrectly rejects free-tier models with "can only be used from within OpenCode" 💬6
- [#49627](https://github.com/anomalyco/opencode/issues/49627) Error from provider (Console): OpenCode's free tier can only be used from within OpenCode 💬4
- [#49640](https://github.com/anomalyco/opencode/issues/49640) "Edit Project" fails to do anything noticable if the Project's folder is not in git. 💬3
- [#49607](https://github.com/anomalyco/opencode/issues/49607) Error from provider 💬3
- [#49633](https://github.com/anomalyco/opencode/issues/49633) opencode problem `needs:compliance` 💬2
- [#49621](https://github.com/anomalyco/opencode/issues/49621) Free-tier Zen 403 for all third-party stacks despite valid session + key (only genuine client passes) 💬2
- [#49603](https://github.com/anomalyco/opencode/issues/49603) On compact opencode says "Error from provider (Console): OpenCode's free tier can only be used from within OpenCode" 💬2
- [#49592](https://github.com/anomalyco/opencode/issues/49592) Free tier: agent=compaction and agent=title fail with "free tier can only be used from within OpenCode"; agent=build works 💬2
- [#49589](https://github.com/anomalyco/opencode/issues/49589) opencode saying "Error from provider (Console): OpenCode's free tier can only be used from within OpenCode" when you try to compact 💬2
- [#49585](https://github.com/anomalyco/opencode/issues/49585) [BUG] Modèle gratuit de OpenCode en erreur 💬2
- [#49638](https://github.com/anomalyco/opencode/issues/49638) Free usage exceeded, subscribe to Go. I *am* subscribed! 💬2
- [#49626](https://github.com/anomalyco/opencode/issues/49626) Opencode crashes while loading project 💬2
- [#49625](https://github.com/anomalyco/opencode/issues/49625) 38% of my available usage** on 3 minutes 💬2
- [#49515](https://github.com/anomalyco/opencode/issues/49515) MUSE SPARK 1.3 FREE fails when continuing an existing project 💬2
- [#49602](https://github.com/anomalyco/opencode/issues/49602) Patch to increase timeout limit, useful for local models that take longer than 5 minutes and then face disconnect issue. 💬2
- [#49606](https://github.com/anomalyco/opencode/issues/49606) [Patch]: 💬2
- [#49617](https://github.com/anomalyco/opencode/issues/49617) [FEATURE]: Add session switching to `opencode --mini` 💬2
- [#49593](https://github.com/anomalyco/opencode/issues/49593) a problem about using opencode free tier outside of opencode 💬2
- [#49645](https://github.com/anomalyco/opencode/issues/49645) [FEATURE]: Model-agnostic MCP tool search / deferred schema loading (works on OpenAI-style backends) 💬1
- [#49644](https://github.com/anomalyco/opencode/issues/49644) Authorization dialog becomes impossible to approve when command is too long 💬1
- [#49641](https://github.com/anomalyco/opencode/issues/49641) session: V1→V2 importer skips sessions created after first V2 launch `2.0` 💬1
- [#49639](https://github.com/anomalyco/opencode/issues/49639) Free Usage Limit Reach: Upgrade to Opencode Go 💬1
- [#49635](https://github.com/anomalyco/opencode/issues/49635) TUI: typing large amounts of text into the chat input causes severe lag 💬1
- [#49629](https://github.com/anomalyco/opencode/issues/49629) Boot blocks for minutes on project .opencode/ dir + any plugin when IPv6 is advertised but unroutable (registry install: no timeout, AAAA-first) 💬1
- [#49623](https://github.com/anomalyco/opencode/issues/49623) [FEATURE]: Support Vite+ installations 💬1
- [#49622](https://github.com/anomalyco/opencode/issues/49622) TUI: mouse wheel never captured in iTerm2 (macOS) — wheel scrolls iTerm2's own scrollback instead of the conversation 💬1
- [#49553](https://github.com/anomalyco/opencode/issues/49553) invalid_request_error: reasoning encrypted_content was not issued to this caller + timestamp 2026-09-17 💬1
- [#49630](https://github.com/anomalyco/opencode/issues/49630) acp: custom providers fail to load due to SchemaError(Missing key at ["path"]) on event subscription

#### 🔒 Closed Issues
- [#49610](https://github.com/anomalyco/opencode/issues/49610) OpenCode's free tier can only be used from within OpenCode while usign Opencode?
- [#49587](https://github.com/anomalyco/opencode/issues/49587) [Bug]: Auto-compaction fails with "OpenCode's free tier can only be used from within OpenCode" on OpenCode Zen
- [#49438](https://github.com/anomalyco/opencode/issues/49438) Error from provider (Console): OpenCode's free tier can only be used from within OpenCode
- [#49609](https://github.com/anomalyco/opencode/issues/49609) Error from provider (Console): OpenCode's free tier can only be used from within OpenCode
- [#49604](https://github.com/anomalyco/opencode/issues/49604) OpenCode Desktop incorrectly rejects free-tier models with "can only be used from within OpenCode
- [#49588](https://github.com/anomalyco/opencode/issues/49588) Error from provider (Console): OpenCode's free tier can only be used from within OpenCode (Desktop app v1.18.31)
- [#49627](https://github.com/anomalyco/opencode/issues/49627) Error from provider (Console): OpenCode's free tier can only be used from within OpenCode
- [#49607](https://github.com/anomalyco/opencode/issues/49607) Error from provider
- [#49633](https://github.com/anomalyco/opencode/issues/49633) opencode problem
- [#49621](https://github.com/anomalyco/opencode/issues/49621) Free-tier Zen 403 for all third-party stacks despite valid session + key (only genuine client passes)
- [#49603](https://github.com/anomalyco/opencode/issues/49603) On compact opencode says "Error from provider (Console): OpenCode's free tier can only be used from within OpenCode"
- [#49592](https://github.com/anomalyco/opencode/issues/49592) Free tier: agent=compaction and agent=title fail with "free tier can only be used from within OpenCode"; agent=build works
- [#49589](https://github.com/anomalyco/opencode/issues/49589) opencode saying "Error from provider (Console): OpenCode's free tier can only be used from within OpenCode" when you try to compact
- [#49585](https://github.com/anomalyco/opencode/issues/49585) [BUG] Modèle gratuit de OpenCode en erreur
- [#49638](https://github.com/anomalyco/opencode/issues/49638) Free usage exceeded, subscribe to Go. I *am* subscribed!
- [#49626](https://github.com/anomalyco/opencode/issues/49626) Opencode crashes while loading project
- [#49625](https://github.com/anomalyco/opencode/issues/49625) 38% of my available usage** on 3 minutes
- [#49602](https://github.com/anomalyco/opencode/issues/49602) Patch to increase timeout limit, useful for local models that take longer than 5 minutes and then face disconnect issue.
- [#49606](https://github.com/anomalyco/opencode/issues/49606) [Patch]:
- [#49593](https://github.com/anomalyco/opencode/issues/49593) a problem about using opencode free tier outside of opencode

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 27,931 · **Open issues:** 1,471 · **Last push:** <1h ago

On September 18, 2026, Qwen Code released versions v0.24.0-nightly.20260917.f822124af5 and desktop-v0.24.0, introducing key improvements such as scoped ACP permission queues and new shared output modes with DingTalk support. Significant merged pull requests included a fix for DeepSeek's API name resolution in V4 limits and enhancements to the web-shell's PWA installability. However, several notable issues emerged, including #12061, which reports a callback identity change that can disrupt the active tool scheduler. Overall, the day was marked by substantial feature advancements alongside new bugs that may require attention.

#### 🚀 New Releases
- [v0.24.0-nightly.20260917.f822124af5](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.0-nightly.20260917.f822124af5) Release v0.24.0-nightly.20260917.f822124af5
- [desktop-v0.24.0](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.24.0) Qwen Code Desktop v0.24.0

#### ✅ Merged PRs
- [#11909](https://github.com/QwenLM/qwen-code/pull/11909) fix(core): resolve DeepSeek's official API deepseek-flash name at V4 limits
- [#12131](https://github.com/QwenLM/qwen-code/pull/12131) fix(core): keep MCP App html in recorded transcripts so replay can render
- [#11722](https://github.com/QwenLM/qwen-code/pull/11722) feat(web-shell): add PWA installability and Android development shell

#### 🐛 New Issues
- [#12061](https://github.com/QwenLM/qwen-code/issues/12061) bug(cli): callback identity changes can replace an active tool scheduler `priority/P2` `type/bug` `category/tools` `scope/interactive` 💬8
- [#12053](https://github.com/QwenLM/qwen-code/issues/12053) Slim the Goal runtime: judge completion from the current turn's evidence and drop the evidence catalog and checkpoints `priority/P2` `category/core` `type/enhancement` `need-discussion` 💬7
- [#12072](https://github.com/QwenLM/qwen-code/issues/12072) OpenRouter preset sends `X-OpenRouter-Title` — OpenRouter only recognizes `X-Title` for app attribution `status/need-information` `priority/P3` `category/integration` `scope/model-switching` 💬6
- [#12113](https://github.com/QwenLM/qwen-code/issues/12113) bug(acp): reports end_turn after repeated finish_reason=length responses (0.24.0) `priority/P2` `type/bug` `category/integration` `scope/token-management` 💬5
- [#12059](https://github.com/QwenLM/qwen-code/issues/12059) vscode-ide-companion: cover the remote-webview failure modes #11983 left open (forwarded-port Host gate, IPv6 CSP, Remote-SSH/WSL run) `priority/P3` `type/bug` `category/integration` `scope/vscode` 💬5
- [#12048](https://github.com/QwenLM/qwen-code/issues/12048) fix(core): context-usage telemetry is dropped entirely when a non-function tool is present, and mixes two token estimators `priority/P3` `type/bug` `category/core` `scope/token-management` 💬5
- [#12093](https://github.com/QwenLM/qwen-code/issues/12093) CSP comments state the wrong failure mode for bracketed IPv6 host-sources `priority/P3` `type/documentation` `category/security` `scope/web-shell` 💬4
- [#12082](https://github.com/QwenLM/qwen-code/issues/12082) fix(core): omni media error sanitizer can leak a parent path segment on Windows `priority/P2` `type/bug` `category/core` `scope/windows` 💬4
- [#12091](https://github.com/QwenLM/qwen-code/issues/12091) `sessions/delete` on a live session unlinks its transcript; the still-attached writer recreates the file head-less, permanently breaking the session (degraded_history, auto-continue disabled) `priority/P1` `type/bug` `category/core` `scope/session-management` 💬4
- [#12046](https://github.com/QwenLM/qwen-code/issues/12046) fix(desktop): smoke-packaged.js cleanup races the daemon subprocess, failing otherwise-passing checks `priority/P1` `type/bug` `category/development` `scope/packaging` 💬4
- [#12122](https://github.com/QwenLM/qwen-code/issues/12122) fix(core): bare deepseek-v4 alias never reaches the 1M token-limit rows `priority/P2` `type/bug` `category/core` `scope/token-management` 💬3
- [#12116](https://github.com/QwenLM/qwen-code/issues/12116) bug(daemon): intermittent POST /session 504 — AcpSessionBridge newSession times out after 10000ms on shared ACP child `priority/P2` `type/bug` `category/core` `scope/session-management` 💬3
- [#12047](https://github.com/QwenLM/qwen-code/issues/12047) fix(cli): /context subtracts a process-global cached-token count, so a daemon session can be charged another session's cache `priority/P2` `type/bug` `category/cli` `scope/commands` 💬3
- [#12111](https://github.com/QwenLM/qwen-code/issues/12111) bug(export): JSON/JSONL exports can assign incorrect message UUIDs and timestamps `priority/P2` `type/bug` `category/cli` `scope/commands` 💬3
- [#12094](https://github.com/QwenLM/qwen-code/issues/12094) Main CI failed: Qwen Code CI on 66b041043a14 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬3
- [#12089](https://github.com/QwenLM/qwen-code/issues/12089) shell-utils.ts still treats Unicode whitespace as a bash word separator `priority/P2` `type/bug` `category/security` `scope/shell` 💬3
- [#12076](https://github.com/QwenLM/qwen-code/issues/12076) feat(workflow-creator): support extension-bound expert steps in generated workflows `priority/P3` `type/feature-request` `category/core` `scope/extensions` 💬3
- [#12125](https://github.com/QwenLM/qwen-code/issues/12125) Main CI failed: E2E Tests on f822124af568 `type/bug` `status/ready-for-agent` `autofix/in-progress` `autofix/approved` 💬2
- [#12112](https://github.com/QwenLM/qwen-code/issues/12112) Main CI failed: E2E Tests on 673601db3f83 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#12108](https://github.com/QwenLM/qwen-code/issues/12108) Main CI failed: Qwen Code CI on 6c962b3719c6 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#12106](https://github.com/QwenLM/qwen-code/issues/12106) Main CI failed: Qwen Code CI on 3c774d1d5f80 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#12102](https://github.com/QwenLM/qwen-code/issues/12102) Main CI failed: Qwen Code CI on d7db7d16cf1b `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#12095](https://github.com/QwenLM/qwen-code/issues/12095) Main CI failed: Qwen Code CI on 204c81886b40 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#12133](https://github.com/QwenLM/qwen-code/issues/12133) Deferred review findings from PR #12117: fix(ci): retry the failure watcher's job-log download once (#12112) 💬1
- [#12132](https://github.com/QwenLM/qwen-code/issues/12132) Deferred review findings from PR #12128: fix(ci): retry transient E2E build artifact download failures once (#12125) 💬1

#### 🔒 Closed Issues
- [#11732](https://github.com/QwenLM/qwen-code/issues/11732) Qwen Code 0.23.3 crashes with React error #185 while native monitor task continues running
- [#11894](https://github.com/QwenLM/qwen-code/issues/11894) tokenLimits: DeepSeek's API model name `deepseek-flash` resolves to 128k/32k instead of the V4 1M/384k, so long sessions die on failed compression
- [#10369](https://github.com/QwenLM/qwen-code/issues/10369) MCP Apps inline UI never renders in v0.22.2 Web Shell (payload delivered, renderer present); silent fallback and stale stdio servers make debugging hard
- [#12082](https://github.com/QwenLM/qwen-code/issues/12082) fix(core): omni media error sanitizer can leak a parent path segment on Windows
- [#12046](https://github.com/QwenLM/qwen-code/issues/12046) fix(desktop): smoke-packaged.js cleanup races the daemon subprocess, failing otherwise-passing checks
- [#12047](https://github.com/QwenLM/qwen-code/issues/12047) fix(cli): /context subtracts a process-global cached-token count, so a daemon session can be charged another session's cache
- [#12094](https://github.com/QwenLM/qwen-code/issues/12094) Main CI failed: Qwen Code CI on 66b041043a14
- [#11178](https://github.com/QwenLM/qwen-code/issues/11178) bug(sdk): preserve user resource_link attachments during transcript normalization and replay
- [#11884](https://github.com/QwenLM/qwen-code/issues/11884) `/extensions` update flow shows no progress and never clears the "update available" state
- [#12043](https://github.com/QwenLM/qwen-code/issues/12043) Main CI failed: Qwen Code CI on b8def02aadfc

### Claude Code Skills (`anthropics/skills`)

Top open skill PRs by community engagement:
- [#1298](https://github.com/anthropics/skills/pull/1298) fix(skill-creator): isolate trigger evals and handle Windows and runtime failures
- [#1771](https://github.com/anthropics/skills/pull/1771) feat(skills): add proofcore-contract-auditor for smart contract notarization
- [#1703](https://github.com/anthropics/skills/pull/1703) Add md2video-audio skill
- [#1742](https://github.com/anthropics/skills/pull/1742) fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers
- [#1734](https://github.com/anthropics/skills/pull/1734) Detect orphaned docx comments

---

## 🦞 OpenClaw Ecosystem

### OpenClaw (`openclaw/openclaw`)

**Stars:** 390,006 · **Open issues:** 7,668 · **Last push:** <1h ago

On September 18, 2026, there were no new version releases for OpenClaw, but several significant PRs were merged to enhance the platform’s functionality and stability. Key improvements included fixing UI issues like the alignment of task progress cards and retaining desktop reconnects after visibility updates, as well as restoring observers when the implicit Codex is unavailable. Additionally, a critical fix addressed issues with Gateway startup under Bun and improved performance for session links and lists. Among new issues, the bug report #150452 highlighted complications arising from a recent update, indicating that a configuration migration invalidated a two-agent gateway setup, which has raised concerns about update reliability.

#### ✅ Merged PRs
- [#150569](https://github.com/openclaw/openclaw/pull/150569) fix(ui): hide latest reply metadata until hover or focus on desktop
- [#150881](https://github.com/openclaw/openclaw/pull/150881) fix(ui): polish task progress card handle, fade, and checklist alignment
- [#151241](https://github.com/openclaw/openclaw/pull/151241) fix: restore observers and recaps when implicit Codex is unavailable
- [#151214](https://github.com/openclaw/openclaw/pull/151214) fix: cancel suspended follow-up work when its owner closes
- [#151204](https://github.com/openclaw/openclaw/pull/151204) improve(sessions): speed up session links and list pages
- [#151269](https://github.com/openclaw/openclaw/pull/151269) fix(sqlite): restore Gateway startup under Bun
- [#151244](https://github.com/openclaw/openclaw/pull/151244) fix: recheck delivery ownership before pin requests
- [#150001](https://github.com/openclaw/openclaw/pull/150001) fix(ui): avoid scheduling settled child session loads
- [#151262](https://github.com/openclaw/openclaw/pull/151262) fix(wear): open the app when tapping a failed reply notification
- [#151225](https://github.com/openclaw/openclaw/pull/151225) fix(test): drain Codex fixture workers and diagnose teardown stalls
- [#151247](https://github.com/openclaw/openclaw/pull/151247) fix(gateway): avoid metadata broadcasts for auth bookkeeping
- [#150659](https://github.com/openclaw/openclaw/pull/150659) fix(codex): keep session catalog queries in memory
- [#151261](https://github.com/openclaw/openclaw/pull/151261) fix(tasks): keep subagent waits responsive in large registries
- [#151257](https://github.com/openclaw/openclaw/pull/151257) fix: stop canceled Matrix sends before later requests
- [#151254](https://github.com/openclaw/openclaw/pull/151254) refactor: reuse fs-safe for path checks and file operations
- [#151243](https://github.com/openclaw/openclaw/pull/151243) fix(ui): retain Desktop reconnect after batched visibility updates
- [#150935](https://github.com/openclaw/openclaw/pull/150935) fix(status): show which install the Gateway service points at when no version comes back
- [#151230](https://github.com/openclaw/openclaw/pull/151230) fix: stop Zalo sends after caller cancellation during preparation
- [#151259](https://github.com/openclaw/openclaw/pull/151259) fix(worktrees): idle cleanup fails when a directory replaces a conflicted path
- [#151235](https://github.com/openclaw/openclaw/pull/151235) fix: stop Feishu mutations after caller cancellation
- [#151237](https://github.com/openclaw/openclaw/pull/151237) fix: stop Teams Graph actions when their caller closes
- [#151198](https://github.com/openclaw/openclaw/pull/151198) fix(ui): stop redundant catalog reads during chat updates
- [#148574](https://github.com/openclaw/openclaw/pull/148574) refactor(tasks): prepare cold task and flow reads asynchronously
- [#151215](https://github.com/openclaw/openclaw/pull/151215) fix(logging): surface structured warn fields on plain console sinks
- [#151248](https://github.com/openclaw/openclaw/pull/151248) fix(gateway): stop heap growth during session-row refreshes
- [#151182](https://github.com/openclaw/openclaw/pull/151182) perf(gateway): reuse transcript titles across appends
- [#151231](https://github.com/openclaw/openclaw/pull/151231) fix: collect managed worktrees whose untracked file listing exceeds the Git output limit
- [#151165](https://github.com/openclaw/openclaw/pull/151165) fix: preserve completed broadcast results after cancellation
- [#150976](https://github.com/openclaw/openclaw/pull/150976) fix(ui): open Goal composer from incomplete goal commands
- [#151115](https://github.com/openclaw/openclaw/pull/151115) test(plugins): reuse command lifecycle deferred fixtures
- [#151193](https://github.com/openclaw/openclaw/pull/151193) fix: stop Teams sends after delivery authority closes
- [#151224](https://github.com/openclaw/openclaw/pull/151224) fix(wear): show chat replies after Voice input
- [#151240](https://github.com/openclaw/openclaw/pull/151240) perf(sessions): bound transcript sizing and JSON intermediates
- [#151132](https://github.com/openclaw/openclaw/pull/151132) fix(update): recover external systemd service repairs
- [#151236](https://github.com/openclaw/openclaw/pull/151236) fix(desktop): finish shutdown across owner replacement and queued launches
- [#151168](https://github.com/openclaw/openclaw/pull/151168) fix: stop Feishu sends after sender cancellation
- [#148360](https://github.com/openclaw/openclaw/pull/148360) fix(infra): relay exec-completion replies on WebChat-internal sessions
- [#151209](https://github.com/openclaw/openclaw/pull/151209) test(ui): await persisted delegation replies before expansion
- [#151208](https://github.com/openclaw/openclaw/pull/151208) fix: stop ClickClack sends after sender cancellation
- [#151003](https://github.com/openclaw/openclaw/pull/151003) fix(update): restore Gateway and clear stale warnings after repair
- [#151202](https://github.com/openclaw/openclaw/pull/151202) perf(gateway): reduce session list refresh allocation churn
- [#150824](https://github.com/openclaw/openclaw/pull/150824) fix: keep telemetry checks responsive and drain them on shutdown
- [#147881](https://github.com/openclaw/openclaw/pull/147881) perf(windows): avoid full-chunk copies during UTF-8 decoding
- [#151233](https://github.com/openclaw/openclaw/pull/151233) Restore selected app connections with legacy IDs on the release branch
- [#151210](https://github.com/openclaw/openclaw/pull/151210) fix(code-mode): preserve tool lookup, wait lifetime, and returned values
- [#151179](https://github.com/openclaw/openclaw/pull/151179) fix: published upgrades fail to restart after package replacement
- [#151228](https://github.com/openclaw/openclaw/pull/151228) Keep selected Codex apps available across legacy connection IDs
- [#129660](https://github.com/openclaw/openclaw/pull/129660) fix(irc): reject sanitized-empty sends before reply metadata
- [#151194](https://github.com/openclaw/openclaw/pull/151194) improve(history): reduce CPU during live message updates
- [#151197](https://github.com/openclaw/openclaw/pull/151197) fix: explain how to customize heartbeat checks through chat
- [#151200](https://github.com/openclaw/openclaw/pull/151200) fix(codex): preserve native text and avoid duplicate async replies
- [#151102](https://github.com/openclaw/openclaw/pull/151102) fix: fence Slack direct-delivery requests
- [#151220](https://github.com/openclaw/openclaw/pull/151220) test(maintainer): run native review suite with Node
- [#120789](https://github.com/openclaw/openclaw/pull/120789) improve: cover Responses captions and tool-only replies
- [#151195](https://github.com/openclaw/openclaw/pull/151195) fix(process): prevent premature broker-loss test failures
- [#151169](https://github.com/openclaw/openclaw/pull/151169) fix: stop pending Signal sends after caller cancellation
- [#150798](https://github.com/openclaw/openclaw/pull/150798) docs(update): cover promisor marker cleanup when de-partialing a clone
- [#129312](https://github.com/openclaw/openclaw/pull/129312) fix(qa): prevent stale replies from passing character checks
- [#151192](https://github.com/openclaw/openclaw/pull/151192) fix(codex): settle disconnected sockets and force shutdown
- [#151186](https://github.com/openclaw/openclaw/pull/151186) refactor(gateway): prepare incognito descriptions before presentation
- [#148882](https://github.com/openclaw/openclaw/pull/148882) fix: avoid writer waits when reading usage status
- [#151160](https://github.com/openclaw/openclaw/pull/151160) fix: stop canceled Nostr relay fallback
- [#151187](https://github.com/openclaw/openclaw/pull/151187) fix(voice-call): release lingering handles in closed-loop test teardown
- [#151162](https://github.com/openclaw/openclaw/pull/151162) fix: honor LINE delivery handoff checks
- [#151177](https://github.com/openclaw/openclaw/pull/151177) fix: preserve task errors when worker retirement fails
- [#150570](https://github.com/openclaw/openclaw/pull/150570) fix: keep APNs registration lookups off the gateway thread
- [#151171](https://github.com/openclaw/openclaw/pull/151171) fix: recheck Zalo sends before dispatch
- [#150816](https://github.com/openclaw/openclaw/pull/150816) fix(state): reclaim interrupted SQLite staging copies
- [#150927](https://github.com/openclaw/openclaw/pull/150927) fix(doctor): preserve upgrade settings and explain local memory setup
- [#151174](https://github.com/openclaw/openclaw/pull/151174) fix(state): reject uncertain database path ownership
- [#151110](https://github.com/openclaw/openclaw/pull/151110) fix(update): keep temporary Doctor cleanup from blocking updates
- [#151135](https://github.com/openclaw/openclaw/pull/151135) fix: stop Nextcloud Talk sends after cancellation
- [#151146](https://github.com/openclaw/openclaw/pull/151146) fix: stop canceled Google Chat sends after preparation
- [#151166](https://github.com/openclaw/openclaw/pull/151166) fix: fence Slack interactive action requests
- [#151142](https://github.com/openclaw/openclaw/pull/151142) fix(gateway): honor system-unit stop deadlines for service users
- [#151170](https://github.com/openclaw/openclaw/pull/151170) fix(release): accept preserved cell skips in runtime-pair reports
- [#151158](https://github.com/openclaw/openclaw/pull/151158) fix(e2e): retain candidate registry during plugin repair
- [#151163](https://github.com/openclaw/openclaw/pull/151163) fix(sessions): preserve read failures when cleanup fails
- [#150526](https://github.com/openclaw/openclaw/pull/150526) fix(update): prevent runtime recovery from replacing another install
- [#151150](https://github.com/openclaw/openclaw/pull/151150) fix(update): preserve channels through runtime recovery
- [#151139](https://github.com/openclaw/openclaw/pull/151139) fix(desktop): wait for retiring streams during owner shutdown
- [#151144](https://github.com/openclaw/openclaw/pull/151144) fix: stop obsolete iMessage sends after preparation
- [#151129](https://github.com/openclaw/openclaw/pull/151129) fix: stop Tlon sends cancelled during preparation
- [#151154](https://github.com/openclaw/openclaw/pull/151154) fix(sqlite): share worker host context across module copies
- [#151153](https://github.com/openclaw/openclaw/pull/151153) fix(sqlite): share worker host context across module copies
- [#151167](https://github.com/openclaw/openclaw/pull/151167) Keep complete Slack preambles on the current release
- [#151148](https://github.com/openclaw/openclaw/pull/151148) test(ui): honor session pagination windows in mutation scope e2e
- [#151164](https://github.com/openclaw/openclaw/pull/151164) Keep complete Slack preambles visible between updates
- [#151123](https://github.com/openclaw/openclaw/pull/151123) fix(ui): keep left chat blocks inside the shared content edge
- [#150529](https://github.com/openclaw/openclaw/pull/150529) fix: prevent Control UI theme flash during startup
- [#151122](https://github.com/openclaw/openclaw/pull/151122) fix(tests): await Gateway connection readiness signals
- [#151093](https://github.com/openclaw/openclaw/pull/151093) fix: keep Matrix reads from updating DM mappings
- [#151010](https://github.com/openclaw/openclaw/pull/151010) perf(ui): reduce repeated archive projection work
- [#151106](https://github.com/openclaw/openclaw/pull/151106) fix: prevent duplicate deferred maintenance during task callbacks
- [#150882](https://github.com/openclaw/openclaw/pull/150882) fix: transcript failures cool healthy credentials and hide recovery guidance
- [#150317](https://github.com/openclaw/openclaw/pull/150317) fix(browser): Space key from Control UI rejected as empty press
- [#151131](https://github.com/openclaw/openclaw/pull/151131) fix: avoid false timeouts during test worker preparation
- [#151104](https://github.com/openclaw/openclaw/pull/151104) fix(test): observe shared-state WAL warnings
- [#151019](https://github.com/openclaw/openclaw/pull/151019) refactor(agents): simplify session reply delivery
- [#150965](https://github.com/openclaw/openclaw/pull/150965) fix(activity): skip Cron run recaps
- [#143331](https://github.com/openclaw/openclaw/pull/143331) fix(release): keep packed CLI smoke offline
- [#151039](https://github.com/openclaw/openclaw/pull/151039) fix: Telegram QA rejects frozen candidates after release branch advances
- [#151105](https://github.com/openclaw/openclaw/pull/151105) perf(ui): avoid rebuilding canonical session keys
- [#150428](https://github.com/openclaw/openclaw/pull/150428) fix(ui): hide avatars for unknown forwarded senders
- [#151042](https://github.com/openclaw/openclaw/pull/151042) Respect deliberate silence after conversational read failures
- [#151030](https://github.com/openclaw/openclaw/pull/151030) fix(tasks): resolve current ACP tasks after run ID reuse
- [#151088](https://github.com/openclaw/openclaw/pull/151088) test(cli): dump active handles when the process deadlock guard fires
- [#150505](https://github.com/openclaw/openclaw/pull/150505) test(ui): share startup storage failure fixtures
- [#151101](https://github.com/openclaw/openclaw/pull/151101) test(codex): complete app-server client mock cleanup
- [#151108](https://github.com/openclaw/openclaw/pull/151108) fix: stop canceled A2A sends before peer requests
- [#136226](https://github.com/openclaw/openclaw/pull/136226) fix(matrix): refresh verification status before reporting device trust
- [#151061](https://github.com/openclaw/openclaw/pull/151061) fix(matrix): refresh July verification status after setup
- [#150867](https://github.com/openclaw/openclaw/pull/150867) test(qa): isolate restart delivery from child handoff
- [#150989](https://github.com/openclaw/openclaw/pull/150989) fix(gateway): keep transcript reads out of session-row materialization
- [#151004](https://github.com/openclaw/openclaw/pull/151004) fix(ios): show dictation and attachment progress
- [#150994](https://github.com/openclaw/openclaw/pull/150994) fix(android): show dictation and attachment progress
- [#150970](https://github.com/openclaw/openclaw/pull/150970) fix(ci): give Gateway boot configs exclusive plan admission
- [#151075](https://github.com/openclaw/openclaw/pull/151075) fix(qa): preserve parity request and completion evidence
- [#151071](https://github.com/openclaw/openclaw/pull/151071) fix(ci): prevent startup corpus build memory failures
- [#151089](https://github.com/openclaw/openclaw/pull/151089) fix(update): preserve diagnostics for unexpected failures
- [#151096](https://github.com/openclaw/openclaw/pull/151096) test(process): define synthetic child stdio state
- [#138338](https://github.com/openclaw/openclaw/pull/138338) feat(browser): expose native extension tab IDs
- [#151049](https://github.com/openclaw/openclaw/pull/151049) fix: published Linux upgrades leave unchanged gateways stopped
- [#151090](https://github.com/openclaw/openclaw/pull/151090) fix(slack): keep channel tests inside the plugin boundary
- [#151077](https://github.com/openclaw/openclaw/pull/151077) fix(ci): preflight import guard launches Bun instead of Node
- [#151086](https://github.com/openclaw/openclaw/pull/151086) fix(test): preserve Slack threading coverage across plugin boundary
- [#151080](https://github.com/openclaw/openclaw/pull/151080) fix(ci): keep Slack tests on plugin boundary
- [#151087](https://github.com/openclaw/openclaw/pull/151087) Bring queued Slack preamble cleanup into the release branch
- [#151084](https://github.com/openclaw/openclaw/pull/151084) Clear temporary Slack preambles when queued work finishes
- [#151064](https://github.com/openclaw/openclaw/pull/151064) fix: require declared scheduled write adapters
- [#151062](https://github.com/openclaw/openclaw/pull/151062) fix(test): complete silent answer segment fixture
- [#151070](https://github.com/openclaw/openclaw/pull/151070) fix: keep message updates inside Slack reply threads
- [#151069](https://github.com/openclaw/openclaw/pull/151069) fix: keep message updates inside Slack reply threads
- [#150539](https://github.com/openclaw/openclaw/pull/150539) fix: avoid duplicate answers after silent tool continuations
- [#150547](https://github.com/openclaw/openclaw/pull/150547) fix(agents): attribute prompt-cache drops to system prompt suffix churn
- [#151040](https://github.com/openclaw/openclaw/pull/151040) fix(gateway): prevent Git spawn stalls in WebSocket requests
- [#150490](https://github.com/openclaw/openclaw/pull/150490) fix(codex): preserve provenance through context-engine compaction
- [#150988](https://github.com/openclaw/openclaw/pull/150988) improve(status): offload memory-presence inspection
- [#115184](https://github.com/openclaw/openclaw/pull/115184) fix: recover ACP sessions when reset cleanup times out
- [#151041](https://github.com/openclaw/openclaw/pull/151041) chore(i18n): refresh native locales
- [#151036](https://github.com/openclaw/openclaw/pull/151036) refactor(sessions): keep member queries off the Gateway thread
- [#150964](https://github.com/openclaw/openclaw/pull/150964) fix: prevent repeated reads from delaying session lists
- [#151028](https://github.com/openclaw/openclaw/pull/151028) fix(doctor): avoid unnecessary runtime loading during config migration
- [#150819](https://github.com/openclaw/openclaw/pull/150819) fix(state): let image upgrades repair missing SQLite indexes
- [#151045](https://github.com/openclaw/openclaw/pull/151045) Keep deliberate silent replies quiet on the Claw release branch
- [#150913](https://github.com/openclaw/openclaw/pull/150913) chore(ui): refresh control ui locales
- [#150590](https://github.com/openclaw/openclaw/pull/150590) refactor(infra): keep machine model probing in its production owner
- [#151018](https://github.com/openclaw/openclaw/pull/151018) fix(test): await catalog publication in Gateway integration tests
- [#150991](https://github.com/openclaw/openclaw/pull/150991) fix(release): retry failed npm qualification without restarting validation
- [#151021](https://github.com/openclaw/openclaw/pull/151021) fix: stop reporting delivered Code Mode replies as failed
- [#151027](https://github.com/openclaw/openclaw/pull/151027) test: make readiness deadline assertions deterministic
- [#151031](https://github.com/openclaw/openclaw/pull/151031) test(agents): avoid repeated static capability onboarding
- [#150863](https://github.com/openclaw/openclaw/pull/150863) test(qa): remove retired Codex idle timeout
- [#150854](https://github.com/openclaw/openclaw/pull/150854) test(release): eliminate nested process churn in Linux channel suite
- [#150846](https://github.com/openclaw/openclaw/pull/150846) perf(ci): cache immutable planner inventories
- [#151026](https://github.com/openclaw/openclaw/pull/151026) fix(ci): plugin retention check observes live async frame
- [#151002](https://github.com/openclaw/openclaw/pull/151002) test(live): isolate Ultra proof from session observer
- [#150834](https://github.com/openclaw/openclaw/pull/150834) fix(update): retain run history and stop dry runs clearing real failures
- [#150987](https://github.com/openclaw/openclaw/pull/150987) fix(maintainer): validate reviews early and show CI job progress
- [#150812](https://github.com/openclaw/openclaw/pull/150812) fix(gateway): scope async config snapshots to the native host
- [#150983](https://github.com/openclaw/openclaw/pull/150983) fix(test): redact credentials from Vitest failure reports
- [#151014](https://github.com/openclaw/openclaw/pull/151014) fix(ci): macOS installer version test hangs under Bash 5.3
- [#148775](https://github.com/openclaw/openclaw/pull/148775) perf(sessions): reduce cold history child lookup overhead
- [#150886](https://github.com/openclaw/openclaw/pull/150886) test(plugins): reuse catalog JSON response fixtures
- [#150440](https://github.com/openclaw/openclaw/pull/150440) fix(ui): collapse long forwarded session messages
- [#150311](https://github.com/openclaw/openclaw/pull/150311) fix: keep local scheduled account reads authorized
- [#150953](https://github.com/openclaw/openclaw/pull/150953) fix(plugins): recover channels after replacement drain timeouts
- [#151005](https://github.com/openclaw/openclaw/pull/151005) test(gateway): await accepted catalog renewal before freshness assertion
- [#150997](https://github.com/openclaw/openclaw/pull/150997) test(release): accept projected cron assistant text
- [#150847](https://github.com/openclaw/openclaw/pull/150847) improve(doctor): version the lint JSON envelope
- [#150828](https://github.com/openclaw/openclaw/pull/150828) fix(gateway): distinguish probe timeout under load
- [#150793](https://github.com/openclaw/openclaw/pull/150793) improve(update): classify partial-clone blob gaps instead of reporting corruption
- [#150799](https://github.com/openclaw/openclaw/pull/150799) fix(update): stop returning exit 0 for detached, unfinished updates
- [#150848](https://github.com/openclaw/openclaw/pull/150848) fix(doctor): acquire lifecycle lock before stopping the Gateway
- [#150796](https://github.com/openclaw/openclaw/pull/150796) fix(plugins): deduplicate registrar failure reporting per process
- [#150901](https://github.com/openclaw/openclaw/pull/150901) fix(mcp): stop retaining empty session runtimes
- [#150415](https://github.com/openclaw/openclaw/pull/150415) refactor(agents): centralize tool block contracts
- [#150405](https://github.com/openclaw/openclaw/pull/150405) refactor(tts): derive config contracts from schema
- [#150404](https://github.com/openclaw/openclaw/pull/150404) refactor(config): derive Talk contracts from schema
- [#150836](https://github.com/openclaw/openclaw/pull/150836) test(gateway): avoid audit workers in generic server fixtures
- [#150394](https://github.com/openclaw/openclaw/pull/150394) refactor(ui): derive config runtime contracts
- [#150823](https://github.com/openclaw/openclaw/pull/150823) refactor(gateway): await Web Push storage worker operations
- [#151000](https://github.com/openclaw/openclaw/pull/151000) test(live): isolate compaction from plugin discovery
- [#150999](https://github.com/openclaw/openclaw/pull/150999) test(live): admit durable output-limit replay
- [#150998](https://github.com/openclaw/openclaw/pull/150998) fix(release): enable selected node timeout proof
- [#150993](https://github.com/openclaw/openclaw/pull/150993) fix(qa): isolate Telegram startup account
- [#150954](https://github.com/openclaw/openclaw/pull/150954) fix(gateway): fit shutdown drain within systemd stop timeout
- [#150978](https://github.com/openclaw/openclaw/pull/150978) fix(update): run copied config plugin Doctor contracts
- [#150586](https://github.com/openclaw/openclaw/pull/150586) fix(ui): fade long sidebar titles and reveal them on hover or focus
- [#150990](https://github.com/openclaw/openclaw/pull/150990) fix(ci): macOS workflow fixtures hang under Bash 5.3
- [#150985](https://github.com/openclaw/openclaw/pull/150985) fix(test): make healthy restart probe fixture deterministic
- [#150888](https://github.com/openclaw/openclaw/pull/150888) test(gateway): cut fixture cost in the gateway server suites
- [#150840](https://github.com/openclaw/openclaw/pull/150840) fix(plugins): keep SDK alias validation on demand
- [#150794](https://github.com/openclaw/openclaw/pull/150794) ci: separate Android emulator cache identity
- [#150784](https://github.com/openclaw/openclaw/pull/150784) ci: remove orphan pnpm warmup job

#### 🐛 New Issues
- [#150452](https://github.com/openclaw/openclaw/issues/150452) [Bug]: 2026.7.1-2 → 2026.9.4 update required ~1 day of manual repair on a 2-agent gateway (config migration invalid, Telegram crash-loop, iOS node re-approval, empty Usage screen) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` `impact:session-state` 💬8
- [#150574](https://github.com/openclaw/openclaw/issues/150574) Hard-coded 30s SQLite startup integrity/snapshot budget kills gateway on slow disks under concurrent multi-agent preflight (no timeout override) `clawsweeper:source-repro` `impact:crash-loop` `P0` `issue-rating: 🦞 diamond lobster` 💬5
- [#151050](https://github.com/openclaw/openclaw/issues/151050) Update failure: unexpected-error (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬4
- [#150797](https://github.com/openclaw/openclaw/issues/150797) [Bug]: Docker image upgrade 2026.9.1 → 2026.9.4 on the same state: Gateway exits on every start ("missing or drifted index idx_agent_session_nodes_active") until doctor --fix `bug` `bug:behavior` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬4
- [#150950](https://github.com/openclaw/openclaw/issues/150950) update repair always fails: finalize:doctor deadlocks against its own update parent (2026.9.4) `P0` `maturity:stable` `impact:ux-release-blocker` 💬4
- [#150833](https://github.com/openclaw/openclaw/issues/150833) Update failure: global-install-failed (2026.9.3) `clawsweeper:not-repro-on-main` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬4
- [#151280](https://github.com/openclaw/openclaw/issues/151280) [Bug]: Teams personal-chat replies lose explicit reply placement `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬3
- [#151251](https://github.com/openclaw/openclaw/issues/151251) [Bug]: Teams reaction events cannot identify the reacted-to bot reply `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬3
- [#151081](https://github.com/openclaw/openclaw/issues/151081) 2026.9.4 regression of #138620: `update repair` fresh Doctor child drops `OPENCLAW_SERVICE_REPAIR_POLICY=external` again (fix from #138771 missing in shipped build) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬3
- [#151047](https://github.com/openclaw/openclaw/issues/151047) Chat PR links use the checkout repository instead of the named project `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬3
- [#150940](https://github.com/openclaw/openclaw/issues/150940) Codex app-server stores (codex-home) grow unbounded — no retention, 97% image payloads `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬3
- [#150809](https://github.com/openclaw/openclaw/issues/150809) "provider session expired" misclassification hides gateway-internal transcript validation error `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#150733](https://github.com/openclaw/openclaw/issues/150733) Control UI's Content-Security-Policy blocks config-runtime-*.js eval, causing the model/provider picker to render empty `bug` `security` `regression` `P2` 💬3
- [#150766](https://github.com/openclaw/openclaw/issues/150766) cron broken on Android/Termux: platform check excludes android `bug` `no-stale` `bug:crash` `P1` 💬3
- [#150762](https://github.com/openclaw/openclaw/issues/150762) [Bug]: Gateway restart loop after EC2 reboot: 30s SQLite integrity timeout on databases that pass standalone checks `bug` `regression` `impact:crash-loop` `P0` 💬3
- [#150498](https://github.com/openclaw/openclaw/issues/150498) [Bug]: Subagent announce run loses the child's report (raw tool-protocol refusal), and on failure the raw child text bypasses the requester `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬3
- [#150601](https://github.com/openclaw/openclaw/issues/150601) [Bug]: Control UI config editor save fails for model providers defined via $include (SecretRef apiKey id dropped on round-trip) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#150579](https://github.com/openclaw/openclaw/issues/150579) Pre-compaction/budget flush-hook token meter reads cumulative retained transcript events instead of the active window, spuriously firing budget compactions `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#151223](https://github.com/openclaw/openclaw/issues/151223) Session observers select an unavailable Codex harness for OpenAI utility completions `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬2
- [#151173](https://github.com/openclaw/openclaw/issues/151173) [Bug]: memory-core recall rehydration anchors on fragments and picks ambiguous ranges by line distance `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#151265](https://github.com/openclaw/openclaw/issues/151265) [Bug]: Remote administrator management removes ordinary automation creation `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#151059](https://github.com/openclaw/openclaw/issues/151059) Workboard: list/show/promote hydrate the entire card universe (no SQL filtering) + no archive/prune for done cards `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#150810](https://github.com/openclaw/openclaw/issues/150810) [Bug]: isolated finalization produced a reply but the turn was dispatched with "no queued reply payloads" and the user got the placeholder (Telegram, 2026.9.4) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬2
- [#151183](https://github.com/openclaw/openclaw/issues/151183) Workboard: claim-token fence is bypassed by any sibling session of the claiming agent (contextOwner resolves to agentId, not the claim holder) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬2
- [#151111](https://github.com/openclaw/openclaw/issues/151111) Isolated completions skip prepared backup profiles after returned quota errors `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#150895](https://github.com/openclaw/openclaw/issues/150895) Control UI: stationary pointer overrides model-picker highlight when search clears `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#151151](https://github.com/openclaw/openclaw/issues/151151) [Bug]: Worktree creation runs a full git gc on the partial-clone source repository on git 2.36 to 2.53 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#150902](https://github.com/openclaw/openclaw/issues/150902) Control UI: saving or canceling a queued-message edit loses keyboard focus `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#150744](https://github.com/openclaw/openclaw/issues/150744) [Bug]: Managed gateway service can remain pinned to an older global install `clawsweeper:source-repro` `P0` `issue-rating: 🦞 diamond lobster` `maturity:stable` 💬2
- [#151055](https://github.com/openclaw/openclaw/issues/151055) memory-core: a hot reload of models.providers never rebuilds the cached memory index manager (stale provider config until restart) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#150726](https://github.com/openclaw/openclaw/issues/150726) Fallback chain doesn't fire on rate limit — 429 gets converted to friendly text before failover classifier sees it `P2` `impact:auth-provider` `issue-rating: 🦪 silver shellfish` 💬2
- [#151006](https://github.com/openclaw/openclaw/issues/151006) [Bug]: ACP task failure notices include unbounded diagnostics `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#150996](https://github.com/openclaw/openclaw/issues/150996) Update failure: runtime-verification-failed (2026.9.3) `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#150974](https://github.com/openclaw/openclaw/issues/150974) Windows: generated agent-CLI shim (openclaw.cmd) is UTF-8 with an absolute non-ASCII path, breaking bare `openclaw` on GBK consoles `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#150818](https://github.com/openclaw/openclaw/issues/150818) [Bug]: models status --json masks a stored OAuth expiry with the codex-app-server runtime token `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#150957](https://github.com/openclaw/openclaw/issues/150957) Skill collection review fails with "Path escapes sandbox root" when reading collection-backups manifest (9.4 regression) `P2` `clawsweeper:needs-info` `issue-rating: 🦐 gold shrimp` `impact:other` 💬2
- [#150956](https://github.com/openclaw/openclaw/issues/150956) Context engine contract: the host appends its live user turn after assemble() with no coverage signal, and the loop hook hands the engine the turn it just persisted `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#150955](https://github.com/openclaw/openclaw/issues/150955) Gateway RSS growth freezes the event loop: process accepts TCP but cannot complete a websocket handshake `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `impact:crash-loop` 💬2
- [#150624](https://github.com/openclaw/openclaw/issues/150624) Telegram topic lane strands queued messages after a blocked Bash tool call (claimed, attempts=0, never dispatched) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬2
- [#150829](https://github.com/openclaw/openclaw/issues/150829) Consolidate Mattermost request URL test fixtures `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬2
- [#150865](https://github.com/openclaw/openclaw/issues/150865) Agent-level model fallback does not fire when a cron job's model override fails to route `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#150864](https://github.com/openclaw/openclaw/issues/150864) diagnostics.memoryPressureSnapshot: no config path exists in 2026.9.4, despite runtime still checking it `P2` `impact:ux-friction` 💬2
- [#150870](https://github.com/openclaw/openclaw/issues/150870) Update failure: unexpected-error (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#150764](https://github.com/openclaw/openclaw/issues/150764) test cleanup: consolidate browser lifecycle deferred fixtures `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬2
- [#150805](https://github.com/openclaw/openclaw/issues/150805) [Bug]: claude-cli runtime: progress_card plan updates never reach channel progress drafts (Codex shows checklist) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#150802](https://github.com/openclaw/openclaw/issues/150802) Update failure: finalize:doctor (2026.9.3) `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#150488](https://github.com/openclaw/openclaw/issues/150488) Subagent coordination leaks into chat and triggers peer reply loops `maintainer` `P1` `clawsweeper:source-repro` `impact:session-state` 💬2
- [#150696](https://github.com/openclaw/openclaw/issues/150696) feat: show Codex-native child activity after parent yield `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#150708](https://github.com/openclaw/openclaw/issues/150708) [Feature]: Add Cheaper Inference as a bundled model-provider plugin `enhancement` `P3` `impact:auth-provider` 💬2
- [#150707](https://github.com/openclaw/openclaw/issues/150707) [Bug]: Setup wizard dropdown menu keeps looping and cannot proceed in macOS desktop app `bug` `regression` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬2
- [#150636](https://github.com/openclaw/openclaw/issues/150636) Slack monitor tests fail after envelope guard requires SDK acknowledgement sender `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#150544](https://github.com/openclaw/openclaw/issues/150544) [Bug]: Lane progress-idle timeout kills agent runs that wait on long background subprocesses - timer never renews, subprocess progress invisible, diagnostic replaced with generic abort `P2` `clawsweeper:needs-info` `issue-rating: 🦐 gold shrimp` `impact:other` 💬2
- [#150664](https://github.com/openclaw/openclaw/issues/150664) [Bug]: Control UI stutters while scrolling or hovering when reduced motion is on `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#150477](https://github.com/openclaw/openclaw/issues/150477) Chat: latest assistant turn shows its meta actions without hover `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#150862](https://github.com/openclaw/openclaw/issues/150862) Chat task progress card: handle tooltip, missing bottom fade, checklist icon alignment `maintainer` `P3` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` 💬1
- [#151190](https://github.com/openclaw/openclaw/issues/151190) [Bug]: Delivery pinning continues after its owner is revoked `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` 💬1
- [#151276](https://github.com/openclaw/openclaw/issues/151276) [Bug]: Gateway service management is refused as "non-default state dir or config path" when OPENCLAW_HOME is the literal "undefined" `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#151278](https://github.com/openclaw/openclaw/issues/151278) [Bug]: Teams polls can be submitted after message authority is withdrawn `maintainer` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#151272](https://github.com/openclaw/openclaw/issues/151272) [Bug]: Every cron event invalidates all resident session rows through automation bindings `bug` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬1
- [#151271](https://github.com/openclaw/openclaw/issues/151271) [Bug]: Catalog attempt notifications repeatedly rebuild all resident session rows `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#151203](https://github.com/openclaw/openclaw/issues/151203) [Bug]: Matrix send preparation can continue after caller cancellation `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` 💬1
- [#151268](https://github.com/openclaw/openclaw/issues/151268) Successful subagent completions emit stale-owner timing warnings when completion paths overlap `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#151212](https://github.com/openclaw/openclaw/issues/151212) [Bug]: Zalo Personal sends can continue after caller cancellation `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#151267](https://github.com/openclaw/openclaw/issues/151267) [Bug]: Cron/automation agentTurn jobs cannot access custom MCP server tools (toolsAllow correct, mcp reload + gateway restart do not help) `bug` `bug:behavior` `P1` `impact:other` 💬1
- [#151221](https://github.com/openclaw/openclaw/issues/151221) [Bug]: Feishu edits can reach the provider after caller cancellation `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#151213](https://github.com/openclaw/openclaw/issues/151213) Teams Graph actions can continue after caller authority closes during preparation `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#151266](https://github.com/openclaw/openclaw/issues/151266) [Bug]: iMessage group messages bypass groupPolicy allowlist and can leak raw error text to real contacts `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#151264](https://github.com/openclaw/openclaw/issues/151264) [Bug]: canceled message actions can still start directory lookups `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` 💬1
- [#151149](https://github.com/openclaw/openclaw/issues/151149) Broadcast cancellation discards completed target results `maintainer` `P2` `clawsweeper:source-repro` `impact:message-loss` 💬1
- [#151234](https://github.com/openclaw/openclaw/issues/151234) Chat shifts when initial task progress finishes loading `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#150508](https://github.com/openclaw/openclaw/issues/150508) Control UI: remove the upward session entrance animation `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#151126](https://github.com/openclaw/openclaw/issues/151126) [Bug]: Teams can send after delivery authority closes during token acquisition `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#151134](https://github.com/openclaw/openclaw/issues/151134) [Bug]: Feishu delivery continues after the originating sender retires during preparation `maintainer` `P2` `clawsweeper:source-repro` `impact:message-loss` 💬1
- [#151143](https://github.com/openclaw/openclaw/issues/151143) [Bug]: ClickClack sends after sender retirement during DM creation `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#151239](https://github.com/openclaw/openclaw/issues/151239) Update failure: managed-service-handoff-unavailable (2026.9.3) `P0` `impact:ux-release-blocker` 💬1
- [#151238](https://github.com/openclaw/openclaw/issues/151238) Composer reply and mention previews look detached from the input `maintainer` `P3` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` 💬1
- [#150458](https://github.com/openclaw/openclaw/issues/150458) Sidebar identity menu confuses agent navigation and display preferences `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#150456](https://github.com/openclaw/openclaw/issues/150456) Sidebar: give the session menu a clearer structure `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#151219](https://github.com/openclaw/openclaw/issues/151219) [Feature]: Optional light and dark icons for plugin identity artwork `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#151114](https://github.com/openclaw/openclaw/issues/151114) [Bug]: Signal sends can outlive their canceled delivery `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#151191](https://github.com/openclaw/openclaw/issues/151191) [Bug]: Talk spoken-confirmation gate is English-only; non-English refusals never clear the pending action `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#151141](https://github.com/openclaw/openclaw/issues/151141) [Bug]: Canceled Nostr sends can continue through relay fallback `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` 💬1
- [#151206](https://github.com/openclaw/openclaw/issues/151206) [Bug]: Accepted message sends fail when source annotation loses its caller `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#151207](https://github.com/openclaw/openclaw/issues/151207) [Bug]: Auto-compaction inherits retired plugin inventory after reload `maintainer` `P1` `clawsweeper:source-repro` `impact:session-state` 💬1
- [#151130](https://github.com/openclaw/openclaw/issues/151130) [Bug]: LINE drops the caller handoff check before outbound delivery `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#151196](https://github.com/openclaw/openclaw/issues/151196) [Bug]: deepseek provider catalog omits canonical deepseek-flash (V4.1) — thinking profile unresolved, context falls back to 200k `P2` `impact:session-state` `impact:auth-provider` 💬1
- [#151189](https://github.com/openclaw/openclaw/issues/151189) [Bug]: redaction sentinel `__OPENCLAW_REDACTED__` can be written into the secret store as the gateway token, locking out every paired device (and weakening auth to a public constant) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` `impact:data-loss` 💬1
- [#151118](https://github.com/openclaw/openclaw/issues/151118) Nextcloud Talk can send after its delivery is cancelled `maintainer` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` 💬1
- [#151188](https://github.com/openclaw/openclaw/issues/151188) [Bug]: GitHub Copilot Responses tool stream ends without terminal event `maintainer` `P1` `clawsweeper:needs-live-repro` `impact:auth-provider` 💬1
- [#151125](https://github.com/openclaw/openclaw/issues/151125) [Bug]: Google Chat sends continue after cancellation during recipient lookup `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#151184](https://github.com/openclaw/openclaw/issues/151184) Workboard: card comments have no author column, so comment-carried approvals are unverifiable (server-set attribution) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#151178](https://github.com/openclaw/openclaw/issues/151178) [Feature]: Let Active Memory delegate escalation decisions to a plugin provider `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#151113](https://github.com/openclaw/openclaw/issues/151113) [Bug]: iMessage sends can continue after the delivery caller retires `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#151117](https://github.com/openclaw/openclaw/issues/151117) Tlon outbound sends continue after delivery authority is revoked during preparation `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#150926](https://github.com/openclaw/openclaw/issues/150926) Control UI queued-message edit retry keeps the resolved conflict warning `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#150885](https://github.com/openclaw/openclaw/issues/150885) Control UI: keyboard Refresh in Logs leaves focus on the document body `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#150679](https://github.com/openclaw/openclaw/issues/150679) Control UI: filtering the global command palette leaves the active option outside the results viewport `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#150462](https://github.com/openclaw/openclaw/issues/150462) Control UI: split-view round trips drift the reading position through stale row-resize compensation `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#151155](https://github.com/openclaw/openclaw/issues/151155) claude-cli backend: auth-profile-failure aborts live session mid-turn instead of proactive refresh `P1` `impact:session-state` `impact:auth-provider` `issue-rating: 🦪 silver shellfish` 💬1
- [#151097](https://github.com/openclaw/openclaw/issues/151097) Chat: left-side blocks extend past the right content edge into the avatar gutter `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#150615](https://github.com/openclaw/openclaw/issues/150615) Control UI: filtering a scrolled command menu leaves the active result out of view `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#150506](https://github.com/openclaw/openclaw/issues/150506) Control UI: wrong theme flashes during startup before the saved theme is applied `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#151147](https://github.com/openclaw/openclaw/issues/151147) [Bug]: Embedded reply chunking splits Markdown links at the message cap `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#150614](https://github.com/openclaw/openclaw/issues/150614) Control UI: slash-menu arrow navigation differs from displayed category order `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#150693](https://github.com/openclaw/openclaw/issues/150693) Control UI: resizing Logs silently disables tail following while Auto-follow stays checked `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#150603](https://github.com/openclaw/openclaw/issues/150603) Control UI: New Session ten-line cap overrides short-landscape composer limit `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#150620](https://github.com/openclaw/openclaw/issues/150620) Control UI: stationary pointer overrides command-menu selection during layout movement `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#150571](https://github.com/openclaw/openclaw/issues/150571) WebUI: unchanged chat hydration rewrites persisted snapshots `bug` `maintainer` `P3` `clawsweeper:source-repro` 💬1
- [#151085](https://github.com/openclaw/openclaw/issues/151085) [Bug]: Denied Matrix reads update direct-message account data `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#151145](https://github.com/openclaw/openclaw/issues/151145) [Bug]: Mattermost continues a send after authority is lost during preparation `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` 💬1
- [#151137](https://github.com/openclaw/openclaw/issues/151137) Control UI shows a view_image result as a non-recoverable "Omitted from history" placeholder `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#151109](https://github.com/openclaw/openclaw/issues/151109) [Bug]: minimax/MiniMax-M3 reasoning content leaks into visible text on native minimax provider `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `impact:security` 💬1
- [#150938](https://github.com/openclaw/openclaw/issues/150938) Activity recaps should skip Cron run sessions `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#151053](https://github.com/openclaw/openclaw/issues/151053) [Bug]: Packed CLI release smoke can inherit provider credentials `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#151119](https://github.com/openclaw/openclaw/issues/151119) [Bug]: doctor --fix cannot repair a tool policy that sets both allow and alsoAllow without a profile, so the Gateway stays down `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` `impact:crash-loop` 💬1
- [#151112](https://github.com/openclaw/openclaw/issues/151112) Product regression: self-hosted operator autonomy blocked by secrets and approval loops `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#151103](https://github.com/openclaw/openclaw/issues/151103) [Bug]: `bug` `regression` `P2` `impact:auth-provider` 💬1
- [#151094](https://github.com/openclaw/openclaw/issues/151094) [Bug]: iOS Voice Wake stays Listening and never triggers in foreground `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#151078](https://github.com/openclaw/openclaw/issues/151078) [Feature]: Keep Android chat calls in context while sharing photos `enhancement` `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151072](https://github.com/openclaw/openclaw/issues/151072) [Bug]: Copilot runtime never sends the protected secrets link on Telegram and other channel turns `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#151060](https://github.com/openclaw/openclaw/issues/151060) Bundled scheduled message writes bypass declared live-authority support `maintainer` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#151068](https://github.com/openclaw/openclaw/issues/151068) [Bug]: macOS menu-bar Settings flashes but does not surface dashboard window `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#150489](https://github.com/openclaw/openclaw/issues/150489) Bug: Codex context-engine compaction drops stable sender provenance `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#151058](https://github.com/openclaw/openclaw/issues/151058) Scheduled message sends continue after job authority revocation `maintainer` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#151054](https://github.com/openclaw/openclaw/issues/151054) [Docs Bug]: v2026.6.35 (final extended-stable) does not state which 2026-09-11 security advisories it backports `security` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` 💬1
- [#151051](https://github.com/openclaw/openclaw/issues/151051) [Bug]: Partial-clone Git updates fail at candidate history after successful build and canary `bug` `maintainer` 💬1
- [#151033](https://github.com/openclaw/openclaw/issues/151033) [Bug]: Chrome extension empty-state cleanup failure latches automation off across restarts `no-stale` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` 💬1
- [#150986](https://github.com/openclaw/openclaw/issues/150986) [Bug]: Invalid local PR review artifacts can trigger authorization and retained operation locks `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#151024](https://github.com/openclaw/openclaw/issues/151024) [Feature]: Allow plugins to register node-scoped Gateway methods `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#150884](https://github.com/openclaw/openclaw/issues/150884) Reuse the shared JSON response fixture in catalog tests `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#151015](https://github.com/openclaw/openclaw/issues/151015) [Bug]: Kilo Gateway models without tool support still receive tool definitions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#151007](https://github.com/openclaw/openclaw/issues/151007) [Feature]: In-app completion toasts for unattended sessions regardless of launch method `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#150984](https://github.com/openclaw/openclaw/issues/150984) Native OpenAI web_search documented as supported but not wired into runtime (2026.9.4) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#150969](https://github.com/openclaw/openclaw/issues/150969) [bug] sessions_spawn(runtime="acp") rejects documented built-in acpx aliases (cursor, dsh) with "Unknown agent id" on 2026.9.4 `P2` `impact:session-state` 💬1
- [#150944](https://github.com/openclaw/openclaw/issues/150944) [Bug]: Gateway session fixtures leave transcript reconciliation pending `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#150966](https://github.com/openclaw/openclaw/issues/150966) [Bug]: Telegram parent turn that spawns a child and calls sessions_yield ends with zero visible signal (no ack, no draft, no typing) for the whole child run — 2026.9.4, Codex `P2` `impact:ux-friction` 💬1
- [#150960](https://github.com/openclaw/openclaw/issues/150960) [Bug]: Multiple quoted MEDIA paths are combined into one missing attachment `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#150962](https://github.com/openclaw/openclaw/issues/150962) [Bug]: MiniMax catalog discovery throws Invalid URL on an unparseable configured baseUrl instead of reporting the provider unavailable `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#150949](https://github.com/openclaw/openclaw/issues/150949) `computer` launch_app always rejected with COMPUTER_STALE_OBSERVATION on macOS (app-provided embedded CUA driver, 2026.9.4) `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#150850](https://github.com/openclaw/openclaw/issues/150850) [Bug]: Z.AI built-in catalog is empty when using China (open.bigmodel.cn) endpoints `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#150939](https://github.com/openclaw/openclaw/issues/150939) [Bug]: Discord message body treated as elided after tool call in same turn `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#150943](https://github.com/openclaw/openclaw/issues/150943) [Bug]: WhatsApp outbound 'composing' presence silences phone notifications after the agent replies (selfChatMode 'unavailable' is only sent on connect) `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#150942](https://github.com/openclaw/openclaw/issues/150942) doctor --fix stops the systemd --user gateway and leaves it down (2026.9.4) `impact:crash-loop` `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#150914](https://github.com/openclaw/openclaw/issues/150914) [Feature]: Add plugin provider stream decorators `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#150448](https://github.com/openclaw/openclaw/issues/150448) Sidebar: fade long session titles instead of truncating and make the hover marquee work on the web `maintainer` `P2` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` 💬1
- [#150930](https://github.com/openclaw/openclaw/issues/150930) Superseded reply run surfaces as generic model failure: "Reply operation has no active tool authority snapshot" burns the fallback ladder `P1` `impact:message-loss` `impact:auth-provider` 💬1
- [#150931](https://github.com/openclaw/openclaw/issues/150931) Raw English operator-facing timeout text is delivered to end users in channel replies; no hook to customize `P2` `impact:ux-friction` 💬1
- [#150924](https://github.com/openclaw/openclaw/issues/150924) Update failure: plugin-target-unavailable (2026.9.3) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#150918](https://github.com/openclaw/openclaw/issues/150918) Telegram DM messages sent during a running turn are held in ingress for the whole turn (~15 min), then arrive late as a new turn — looks like message loss `P1` `clawsweeper:needs-info` `impact:message-loss` `issue-rating: 🦐 gold shrimp` 💬1
- [#150907](https://github.com/openclaw/openclaw/issues/150907) [BUG] exec/read output appears as an image when a byte-truncated UTF-8 file is read `bug` `bug:behavior` `P2` `impact:ux-friction` 💬1
- [#150877](https://github.com/openclaw/openclaw/issues/150877) Chat link card overflow menu ignores the shared menu style `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#150442](https://github.com/openclaw/openclaw/issues/150442) Chat: pull request stack shows a detached Show more pill and reserves empty space below it `maintainer` `P3` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` 💬1
- [#150893](https://github.com/openclaw/openclaw/issues/150893) Update failure: managed-service-handoff-already-running (2026.9.3) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#150878](https://github.com/openclaw/openclaw/issues/150878) Control UI theme flashes need coverage across first paint, profile loading, and reconnect `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#150891](https://github.com/openclaw/openclaw/issues/150891) Update failure: unexpected-error (2026.9.4) 💬1
- [#150889](https://github.com/openclaw/openclaw/issues/150889) Update failure: unexpected-error (2026.9.4) 💬1
- [#150443](https://github.com/openclaw/openclaw/issues/150443) Chat Markdown: give headings more space above them `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` `impact:ux-friction` 💬1
- [#150869](https://github.com/openclaw/openclaw/issues/150869) Maintain baseline setup through canonical dependencies `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#150855](https://github.com/openclaw/openclaw/issues/150855) [Bug]: MCP: optional Airtable tool parameters appear required and non-nullable with OpenAI `bug` `bug:behavior` `P2` `impact:auth-provider` 💬1
- [#150843](https://github.com/openclaw/openclaw/issues/150843) [Bug]: logs --follow skips initial records when the log file path changes `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#150822](https://github.com/openclaw/openclaw/issues/150822) Bug: native Codex children advertise OpenClaw tools without an execution handler; detached failure delivery also fails `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:needs-live-repro` 💬1
- [#150825](https://github.com/openclaw/openclaw/issues/150825) [Bug]: unexpected status 401 Unauthorized: Missing bearer or basic authentication in header, url: https://api.openai.com/v1/responses, cf-ray: a3c792194cefc63b-SIN, request id: req_5fc80764e4824c85a044b1900853c836 `bug` `regression` `P2` `impact:auth-provider` 💬1
- [#150808](https://github.com/openclaw/openclaw/issues/150808) Cron/direct-announce delivery silently DROPS the entire remaining output when a turn's final text ends with a trailing silent token `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#150795](https://github.com/openclaw/openclaw/issues/150795) [Bug]: ask_user called after sessions_yield never reaches Telegram, and every Telegram message meanwhile is refused ("question answer caller policy does not match its creator") `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#150781](https://github.com/openclaw/openclaw/issues/150781) Refactor searchable TUI highlighting onto the ANSI owner `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#150774](https://github.com/openclaw/openclaw/issues/150774) [Bug]: Extension relay Target.getTargets fails permanently once any known tab has no live debugger attachment `P2` `impact:other` 💬1
- [#150769](https://github.com/openclaw/openclaw/issues/150769) blocked_tool_call session stalls (approval-gated tool waits) never recover — no timeout, requires manual gateway restart (2026.9.4) `P1` `impact:session-state` `impact:message-loss` `issue-rating: 🦪 silver shellfish` 💬1
- [#150753](https://github.com/openclaw/openclaw/issues/150753) [Bug]: Appeal for account suspension — huawei-cloud-find-skills flagged by ClawScan `bug` `bug:behavior` `P3` 💬1
- [#150749](https://github.com/openclaw/openclaw/issues/150749) [Bug]: `loadProviderScopedThinkingCatalog` regression in 2026.9.4 breaks channel replies with `PreparedModelCatalogConfigReplacedError` (WeChat channel affected, WebChat unaffected) `bug` `regression` 💬1
- [#150745](https://github.com/openclaw/openclaw/issues/150745) Discord: agent can't resolve a DM reply's referenced message on 2026.9.4 (no inline fetch + delegated read gate) `P2` `impact:session-state` `maturity:stable` 💬1
- [#150743](https://github.com/openclaw/openclaw/issues/150743) [Discussion] QQ channel sustainability: the Tencent handoff has stalled — please clarify the long-term support plan `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#150735](https://github.com/openclaw/openclaw/issues/150735) [Bug]: Skill Workshop / self-learning review fails on oversized sessions — single request exceeds model context window (terminal overflow) `P2` `impact:other` 💬1
- [#150724](https://github.com/openclaw/openclaw/issues/150724) Raw-trace usage diagnostics retain full transcript message arrays `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#150710](https://github.com/openclaw/openclaw/issues/150710) Discord: ask_user answers and component buttons are rejected in parent-allowlisted threads when the interaction has no channel object `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#150701](https://github.com/openclaw/openclaw/issues/150701) Bug: message tool drops buffer attachments when the caption is sanitized away `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#150700](https://github.com/openclaw/openclaw/issues/150700) [Bug]: Native hook relay CLI can accept a response after its deadline `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#150699](https://github.com/openclaw/openclaw/issues/150699) [Bug]: Large blank top area after entering fullscreen mode in macOS desktop app `bug` `regression` `P2` `impact:ux-friction` 💬1
- [#150695](https://github.com/openclaw/openclaw/issues/150695) [Bug]: iOS composer disables Send for typed drafts during active runs `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#150687](https://github.com/openclaw/openclaw/issues/150687) stdio MCP server processes (mcp-gsheets) not reused across sub-agent sessions — zombies accumulate after update `P1` `impact:crash-loop` 💬1
- [#150643](https://github.com/openclaw/openclaw/issues/150643) [Bug]: Tool continuations lose encrypted reasoning through managed Chat Completions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#150635](https://github.com/openclaw/openclaw/issues/150635) [Bug]: short-term recall retention evicts recalled entries nightly, so dreaming deep phase never promotes `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#150634](https://github.com/openclaw/openclaw/issues/150634) [feishu] 300309 storm also triggered by Feishu's ~10-min stream lifetime auto-close; blind retries slow perceived streaming to ~2-3 chars/s `P1` `impact:ux-friction` 💬1
- [#150612](https://github.com/openclaw/openclaw/issues/150612) [Bug]: Automation shell commands lose escaped trailing spaces on create and edit `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#150617](https://github.com/openclaw/openclaw/issues/150617) Conversation delivery retries repeat synchronous query compilation `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#150591](https://github.com/openclaw/openclaw/issues/150591) [Bug]: Mattermost message read ignores --message-id and returns recent channel history `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#150610](https://github.com/openclaw/openclaw/issues/150610) Talk gateway-relay appends one spoken utterance as 4-5 duplicate user messages (xAI repeated final transcripts) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#150606](https://github.com/openclaw/openclaw/issues/150606) feishu channel: missing `preferFinalAssistantVisibleText` causes tool-failure warnings to be shown to users even after the agent self-recovers `P2` `impact:ux-friction` 💬1
- [#150552](https://github.com/openclaw/openclaw/issues/150552) [Bug]: Matrix message read ignores --message-id and returns the newest room history instead `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#150598](https://github.com/openclaw/openclaw/issues/150598) Proposal: completion-wake delivery semantics (terminal-only, new-turn, coalesced, failure-as-triage) — field data from heavy multi-session use `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#150575](https://github.com/openclaw/openclaw/issues/150575) Telegram: retain group messages and read history on demand `maintainer` `P2` `impact:session-state` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#150578](https://github.com/openclaw/openclaw/issues/150578) Gateway RSS growth correlates with clusters of silent turn-deaths; restart clears both — needs leak investigation + self-restart/load-shed on memory pressure `P1` `impact:session-state` 💬1
- [#150577](https://github.com/openclaw/openclaw/issues/150577) Compaction quality safeguard can repeat-block a session with a different reasonCode each retry, no fallback or operator-visible alert `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#150560](https://github.com/openclaw/openclaw/issues/150560) [Feature]: Allow `sessions_send` to target thread-scoped sessions `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#150487](https://github.com/openclaw/openclaw/issues/150487) Subagents bypass unavailable messaging tools through the CLI `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#150558](https://github.com/openclaw/openclaw/issues/150558) [Bug]: IMAP plugin: hardcoded 5s/1-try DNS timeout causes spurious DMARC failures for validly-signed mail `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#150922](https://github.com/openclaw/openclaw/issues/150922) [Bug] Control UI dictation inserts the transcript twice into the composer on iOS Safari (macOS Chrome and Safari insert once)

#### 🔒 Closed Issues
- [#138260](https://github.com/openclaw/openclaw/issues/138260) doctor runtime-tool-schemas self-check fails: Temporary doctor lint state snapshot cleanup did not complete
- [#150452](https://github.com/openclaw/openclaw/issues/150452) [Bug]: 2026.7.1-2 → 2026.9.4 update required ~1 day of manual repair on a 2-agent gateway (config migration invalid, Telegram crash-loop, iOS node re-approval, empty Usage screen)
- [#142965](https://github.com/openclaw/openclaw/issues/142965) fix(subagents/mcp): per-session MCP child processes are not reaped after a session ends; process count grows unbounded until gateway restart
- [#139809](https://github.com/openclaw/openclaw/issues/139809) [Bug]: Telegram does not receive protected secrets prompt from Codex
- [#150574](https://github.com/openclaw/openclaw/issues/150574) Hard-coded 30s SQLite startup integrity/snapshot budget kills gateway on slow disks under concurrent multi-agent preflight (no timeout override)
- [#145098](https://github.com/openclaw/openclaw/issues/145098) Control UI serves stale cached bundle after gateway upgrade — streaming rendering breaks (tables degrade to plain text) until manual hard refresh
- [#149978](https://github.com/openclaw/openclaw/issues/149978) Gateway startup can retain GiB-sized SQLite staging copies after interruption
- [#150797](https://github.com/openclaw/openclaw/issues/150797) [Bug]: Docker image upgrade 2026.9.1 → 2026.9.4 on the same state: Gateway exits on every start ("missing or drifted index idx_agent_session_nodes_active") until doctor --fix
- [#150950](https://github.com/openclaw/openclaw/issues/150950) update repair always fails: finalize:doctor deadlocks against its own update parent (2026.9.4)
- [#150332](https://github.com/openclaw/openclaw/issues/150332) Update failure: database-schema-preflight (2026.9.4)
- [#150833](https://github.com/openclaw/openclaw/issues/150833) Update failure: global-install-failed (2026.9.3)
- [#147041](https://github.com/openclaw/openclaw/issues/147041) [Bug]: bundle-mcp leaves stdio MCP server processes running — orphaned trees accumulate (~185 MB each)
- [#93204](https://github.com/openclaw/openclaw/issues/93204) Mattermost: thread context lost after restart/session-clear — no server-side backfill (split from #65729)
- [#109178](https://github.com/openclaw/openclaw/issues/109178) [Bug]: Gateway 重复调用大模型 API 导致"复读机"循环，浪费 Token，影响效率
- [#114579](https://github.com/openclaw/openclaw/issues/114579) [Feature]: Add message deletion (unsend) capability to Feishu channel
- [#110318](https://github.com/openclaw/openclaw/issues/110318) [Feature]: Allow Gateway-relay Talk clients to declare realtime tools
- [#116494](https://github.com/openclaw/openclaw/issues/116494) [Feature]: Decide scoped agents.files support for persisted memory
- [#151081](https://github.com/openclaw/openclaw/issues/151081) 2026.9.4 regression of #138620: `update repair` fresh Doctor child drops `OPENCLAW_SERVICE_REPAIR_POLICY=external` again (fix from #138771 missing in shipped build)
- [#106631](https://github.com/openclaw/openclaw/issues/106631) [Bug]: /reset cancel/close timeout leaves stale ACP runtime handle — subsequent messages reuse poisoned session
- [#150809](https://github.com/openclaw/openclaw/issues/150809) "provider session expired" misclassification hides gateway-internal transcript validation error
- [#135690](https://github.com/openclaw/openclaw/issues/135690) [Bug]: Model selected on a spawned child session is persisted to the agent/global config layer, silently changing the parent's model
- [#150762](https://github.com/openclaw/openclaw/issues/150762) [Bug]: Gateway restart loop after EC2 reboot: 30s SQLite integrity timeout on databases that pass standalone checks
- [#150601](https://github.com/openclaw/openclaw/issues/150601) [Bug]: Control UI config editor save fails for model providers defined via $include (SecretRef apiKey id dropped on round-trip)
- [#137142](https://github.com/openclaw/openclaw/issues/137142) [Bug]: Discord system-agent approval buttons are emitted but rejected before resolution
- [#91122](https://github.com/openclaw/openclaw/issues/91122) [core/runtime] Backward-compat shim missing: core.channel.turn.* renamed to core.channel.inbound.* on 2026-06-03
- [#130422](https://github.com/openclaw/openclaw/issues/130422) feat(exec): add optional description field shown in exec approval prompts
- [#130152](https://github.com/openclaw/openclaw/issues/130152) [Feature]: List and revoke operator standing grants (RPC + Control UI surface)
- [#128813](https://github.com/openclaw/openclaw/issues/128813) agent-write-file pattern: support opt-in shared write roots beyond the agent workspace
- [#151223](https://github.com/openclaw/openclaw/issues/151223) Session observers select an unavailable Codex harness for OpenAI utility completions
- [#115331](https://github.com/openclaw/openclaw/issues/115331) [Feature]: Define persisted memory file discovery semantics
- [#115330](https://github.com/openclaw/openclaw/issues/115330) [Feature]: Decide persisted memory Gateway read contract
- [#115303](https://github.com/openclaw/openclaw/issues/115303) [Feature]: Upstream persisted memory Gateway read capability
- [#147387](https://github.com/openclaw/openclaw/issues/147387) [Bug]: exec-completion wake succeeds but visible reply is dropped in WebChat / Companion
- [#150193](https://github.com/openclaw/openclaw/issues/150193) [Bug]: Slack member-info for the current DM's own participant is rejected by the delegated conversation-read gate on 2026.9.2 (targetless react in the same DM passes)
- [#136370](https://github.com/openclaw/openclaw/issues/136370) Discord guild-admin actions (channel-create) blocked even when sender is in commands.ownerAllowFrom
- [#150744](https://github.com/openclaw/openclaw/issues/150744) [Bug]: Managed gateway service can remain pinned to an older global install
- [#147233](https://github.com/openclaw/openclaw/issues/147233) [Bug]: view_image rejects images in admitted task worktrees
- [#150829](https://github.com/openclaw/openclaw/issues/150829) Consolidate Mattermost request URL test fixtures
- [#141028](https://github.com/openclaw/openclaw/issues/141028) [Bug]: ACP spawn cleanup stops waiting after the 10 s non-cancelling sessions.delete deadline; child session row outlives spawn return (flaky acp-spawn.authority runtime / abort)
- [#150864](https://github.com/openclaw/openclaw/issues/150864) diagnostics.memoryPressureSnapshot: no config path exists in 2026.9.4, despite runtime still checking it
- [#150764](https://github.com/openclaw/openclaw/issues/150764) test cleanup: consolidate browser lifecycle deferred fixtures
- [#150488](https://github.com/openclaw/openclaw/issues/150488) Subagent coordination leaks into chat and triggers peer reply loops
- [#150430](https://github.com/openclaw/openclaw/issues/150430) Remove the Node execution test-only global bridge
- [#150708](https://github.com/openclaw/openclaw/issues/150708) [Feature]: Add Cheaper Inference as a bundled model-provider plugin
- [#146832](https://github.com/openclaw/openclaw/issues/146832) Update failure: runtime-verification-failed (2026.9.3)
- [#150636](https://github.com/openclaw/openclaw/issues/150636) Slack monitor tests fail after envelope guard requires SDK acknowledgement sender
- [#115637](https://github.com/openclaw/openclaw/issues/115637) [Bug]: Matrix outbound E2EE fails for rooms joined before initRustCrypto — no post-crypto room reprocessing
- [#144001](https://github.com/openclaw/openclaw/issues/144001) gateway install --runtime node duplicates env wrapper path instead of Node executable and entry point (macOS)
- [#149931](https://github.com/openclaw/openclaw/issues/149931) health 快照逐 agent 同步读取会话存储，导致事件循环每 60s 冻结 ~22.5s
- [#127157](https://github.com/openclaw/openclaw/issues/127157) [Bug]: Idle Gateway does not prune expired tool-event recipients
- [#121199](https://github.com/openclaw/openclaw/issues/121199) [Bug]: Recurring autonomous API usage after previous fix: OpenClaw generated over $44 in unintended OpenRouter charges
- [#109961](https://github.com/openclaw/openclaw/issues/109961) ACP Issue
- [#150477](https://github.com/openclaw/openclaw/issues/150477) Chat: latest assistant turn shows its meta actions without hover
- [#150862](https://github.com/openclaw/openclaw/issues/150862) Chat task progress card: handle tooltip, missing bottom fade, checklist icon alignment
- [#151190](https://github.com/openclaw/openclaw/issues/151190) [Bug]: Delivery pinning continues after its owner is revoked
- [#151203](https://github.com/openclaw/openclaw/issues/151203) [Bug]: Matrix send preparation can continue after caller cancellation
- [#151212](https://github.com/openclaw/openclaw/issues/151212) [Bug]: Zalo Personal sends can continue after caller cancellation
- [#151267](https://github.com/openclaw/openclaw/issues/151267) [Bug]: Cron/automation agentTurn jobs cannot access custom MCP server tools (toolsAllow correct, mcp reload + gateway restart do not help)
- [#151221](https://github.com/openclaw/openclaw/issues/151221) [Bug]: Feishu edits can reach the provider after caller cancellation
- [#151213](https://github.com/openclaw/openclaw/issues/151213) Teams Graph actions can continue after caller authority closes during preparation
- [#151149](https://github.com/openclaw/openclaw/issues/151149) Broadcast cancellation discards completed target results
- [#151126](https://github.com/openclaw/openclaw/issues/151126) [Bug]: Teams can send after delivery authority closes during token acquisition
- [#151134](https://github.com/openclaw/openclaw/issues/151134) [Bug]: Feishu delivery continues after the originating sender retires during preparation
- [#151143](https://github.com/openclaw/openclaw/issues/151143) [Bug]: ClickClack sends after sender retirement during DM creation
- [#151239](https://github.com/openclaw/openclaw/issues/151239) Update failure: managed-service-handoff-unavailable (2026.9.3)
- [#151114](https://github.com/openclaw/openclaw/issues/151114) [Bug]: Signal sends can outlive their canceled delivery
- [#151141](https://github.com/openclaw/openclaw/issues/151141) [Bug]: Canceled Nostr sends can continue through relay fallback
- [#151130](https://github.com/openclaw/openclaw/issues/151130) [Bug]: LINE drops the caller handoff check before outbound delivery
- [#151196](https://github.com/openclaw/openclaw/issues/151196) [Bug]: deepseek provider catalog omits canonical deepseek-flash (V4.1) — thinking profile unresolved, context falls back to 200k
- [#151118](https://github.com/openclaw/openclaw/issues/151118) Nextcloud Talk can send after its delivery is cancelled
- [#151125](https://github.com/openclaw/openclaw/issues/151125) [Bug]: Google Chat sends continue after cancellation during recipient lookup
- [#151113](https://github.com/openclaw/openclaw/issues/151113) [Bug]: iMessage sends can continue after the delivery caller retires
- [#151117](https://github.com/openclaw/openclaw/issues/151117) Tlon outbound sends continue after delivery authority is revoked during preparation
- [#151097](https://github.com/openclaw/openclaw/issues/151097) Chat: left-side blocks extend past the right content edge into the avatar gutter
- [#150506](https://github.com/openclaw/openclaw/issues/150506) Control UI: wrong theme flashes during startup before the saved theme is applied
- [#151085](https://github.com/openclaw/openclaw/issues/151085) [Bug]: Denied Matrix reads update direct-message account data
- [#150938](https://github.com/openclaw/openclaw/issues/150938) Activity recaps should skip Cron run sessions
- [#151053](https://github.com/openclaw/openclaw/issues/151053) [Bug]: Packed CLI release smoke can inherit provider credentials
- [#150418](https://github.com/openclaw/openclaw/issues/150418) Chat: forwarded messages from an unresolved sender should not show the arrow avatar
- [#151103](https://github.com/openclaw/openclaw/issues/151103) [Bug]:
- [#151060](https://github.com/openclaw/openclaw/issues/151060) Bundled scheduled message writes bypass declared live-authority support
- [#150410](https://github.com/openclaw/openclaw/issues/150410) [Bug]: Settled-tool recovery repeats an already visible answer after NO_REPLY
- [#150489](https://github.com/openclaw/openclaw/issues/150489) Bug: Codex context-engine compaction drops stable sender provenance
- [#151051](https://github.com/openclaw/openclaw/issues/151051) [Bug]: Partial-clone Git updates fail at candidate history after successful build and canary
- [#150986](https://github.com/openclaw/openclaw/issues/150986) [Bug]: Invalid local PR review artifacts can trigger authorization and retained operation locks
- [#150884](https://github.com/openclaw/openclaw/issues/150884) Reuse the shared JSON response fixture in catalog tests
- [#150363](https://github.com/openclaw/openclaw/issues/150363) Chat: collapse forwarded session messages by default and flatten their attribution row
- [#150969](https://github.com/openclaw/openclaw/issues/150969) [bug] sessions_spawn(runtime="acp") rejects documented built-in acpx aliases (cursor, dsh) with "Unknown agent id" on 2026.9.4
- [#150944](https://github.com/openclaw/openclaw/issues/150944) [Bug]: Gateway session fixtures leave transcript reconciliation pending
- [#150966](https://github.com/openclaw/openclaw/issues/150966) [Bug]: Telegram parent turn that spawns a child and calls sessions_yield ends with zero visible signal (no ack, no draft, no typing) for the whole child run — 2026.9.4, Codex
- [#150850](https://github.com/openclaw/openclaw/issues/150850) [Bug]: Z.AI built-in catalog is empty when using China (open.bigmodel.cn) endpoints
- [#150942](https://github.com/openclaw/openclaw/issues/150942) doctor --fix stops the systemd --user gateway and leaves it down (2026.9.4)
- [#150914](https://github.com/openclaw/openclaw/issues/150914) [Feature]: Add plugin provider stream decorators
- [#150403](https://github.com/openclaw/openclaw/issues/150403) Chat: collapsed messages should keep more of their last visible line
- [#150448](https://github.com/openclaw/openclaw/issues/150448) Sidebar: fade long session titles instead of truncating and make the hover marquee work on the web
- [#132790](https://github.com/openclaw/openclaw/issues/132790) [Bug]: Sidebar session marquee measures before hover actions resize the title
- [#150930](https://github.com/openclaw/openclaw/issues/150930) Superseded reply run surfaces as generic model failure: "Reply operation has no active tool authority snapshot" burns the fallback ladder
- [#150931](https://github.com/openclaw/openclaw/issues/150931) Raw English operator-facing timeout text is delivered to end users in channel replies; no hook to customize
- [#150924](https://github.com/openclaw/openclaw/issues/150924) Update failure: plugin-target-unavailable (2026.9.3)
- [#150432](https://github.com/openclaw/openclaw/issues/150432) Cron runs leak UUIDs into the chat: prompt shows as a user turn and forwarded sender shows the raw run key
- [#150907](https://github.com/openclaw/openclaw/issues/150907) [BUG] exec/read output appears as an image when a byte-truncated UTF-8 file is read
- [#150877](https://github.com/openclaw/openclaw/issues/150877) Chat link card overflow menu ignores the shared menu style
- [#150442](https://github.com/openclaw/openclaw/issues/150442) Chat: pull request stack shows a detached Show more pill and reserves empty space below it
- [#150893](https://github.com/openclaw/openclaw/issues/150893) Update failure: managed-service-handoff-already-running (2026.9.3)
- [#150891](https://github.com/openclaw/openclaw/issues/150891) Update failure: unexpected-error (2026.9.4)
- [#150889](https://github.com/openclaw/openclaw/issues/150889) Update failure: unexpected-error (2026.9.4)
- [#150443](https://github.com/openclaw/openclaw/issues/150443) Chat Markdown: give headings more space above them
- [#150855](https://github.com/openclaw/openclaw/issues/150855) [Bug]: MCP: optional Airtable tool parameters appear required and non-nullable with OpenAI
- [#150825](https://github.com/openclaw/openclaw/issues/150825) [Bug]: unexpected status 401 Unauthorized: Missing bearer or basic authentication in header, url: https://api.openai.com/v1/responses, cf-ray: a3c792194cefc63b-SIN, request id: req_5fc80764e4824c85a044b1900853c836
- [#118007](https://github.com/openclaw/openclaw/issues/118007) [Feature]: Align QA Lab with Crabline 0.1.13 server artifacts
- [#150774](https://github.com/openclaw/openclaw/issues/150774) [Bug]: Extension relay Target.getTargets fails permanently once any known tab has no live debugger attachment
- [#150753](https://github.com/openclaw/openclaw/issues/150753) [Bug]: Appeal for account suspension — huawei-cloud-find-skills flagged by ClawScan
- [#150749](https://github.com/openclaw/openclaw/issues/150749) [Bug]: `loadProviderScopedThinkingCatalog` regression in 2026.9.4 breaks channel replies with `PreparedModelCatalogConfigReplacedError` (WeChat channel affected, WebChat unaffected)
- [#150745](https://github.com/openclaw/openclaw/issues/150745) Discord: agent can't resolve a DM reply's referenced message on 2026.9.4 (no inline fetch + delegated read gate)
- [#150388](https://github.com/openclaw/openclaw/issues/150388) [Bug]: channel messages stay unanswered when compaction auth preparation fails
- [#150735](https://github.com/openclaw/openclaw/issues/150735) [Bug]: Skill Workshop / self-learning review fails on oversized sessions — single request exceeds model context window (terminal overflow)
- [#150699](https://github.com/openclaw/openclaw/issues/150699) [Bug]: Large blank top area after entering fullscreen mode in macOS desktop app
- [#150687](https://github.com/openclaw/openclaw/issues/150687) stdio MCP server processes (mcp-gsheets) not reused across sub-agent sessions — zombies accumulate after update
- [#150634](https://github.com/openclaw/openclaw/issues/150634) [feishu] 300309 storm also triggered by Feishu's ~10-min stream lifetime auto-close; blind retries slow perceived streaming to ~2-3 chars/s
- [#150606](https://github.com/openclaw/openclaw/issues/150606) feishu channel: missing `preferFinalAssistantVisibleText` causes tool-failure warnings to be shown to users even after the agent self-recovers
- [#150578](https://github.com/openclaw/openclaw/issues/150578) Gateway RSS growth correlates with clusters of silent turn-deaths; restart clears both — needs leak investigation + self-restart/load-shed on memory pressure
- [#150336](https://github.com/openclaw/openclaw/issues/150336) Release validation fails in trusted harness/bootstrap or optional Swift cache work
- [#150487](https://github.com/openclaw/openclaw/issues/150487) Subagents bypass unavailable messaging tools through the CLI

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 246,556 · **Open issues:** 43,818 · **Last push:** <1h ago

On September 18, 2026, there were no new releases or merged pull requests for Hermes Agent, indicating a day of routine maintenance. Among the newly opened issues, a notable bug was reported (#113683) regarding the Windows GUI becoming unresponsive after daily updates to the Linux backend. Another significant issue (#114484) highlighted a misleading error related to batch envelopes emitted as JSON strings by the model, which could lead to problematic tool-call loops. Additionally, the team is addressing several other bugs, including stalled tool calls (#114395) and issues with OAuth failures being misreported (#113771). Overall, while the day lacked major updates, the newly reported issues reflect ongoing challenges within the ecosystem.

#### 🐛 New Issues
- [#113683](https://github.com/NousResearch/hermes-agent/issues/113683) [Bug]: Every day, updating linux backend, makes the windows GUI stop working `type/bug` `comp/cli` `comp/tui` `P2` 💬6
- [#113887](https://github.com/NousResearch/hermes-agent/issues/113887) [Wave] Refactor PR triage: superseded/stale (265 rows, full title-scope sweep) `type/refactor` `comp/cron` `P3` `needs-decision` 💬4
- [#114484](https://github.com/NousResearch/hermes-agent/issues/114484) tool_call bridge: batch envelope emitted as JSON string by model is rejected with misleading "non-empty array" error, causing tool-call loops `type/bug` `comp/tools` `P2` 💬4
- [#114395](https://github.com/NousResearch/hermes-agent/issues/114395) [Bug]: ACP tool calls never reach a terminal status — a turn's last tools and every blocked call stay in_progress `type/bug` `comp/agent` `comp/acp` `P2` 💬4
- [#114503](https://github.com/NousResearch/hermes-agent/issues/114503) Email gateway: msg.get() returns a Header object on mojibake headers — coerce to str before parsing `type/bug` `duplicate` `comp/plugins` `platform/email` 💬3
- [#113771](https://github.com/NousResearch/hermes-agent/issues/113771) MCP OAuth: failed authorization-server discovery is reported as "Registration failed: 404", hiding the real 403 `type/bug` `comp/tools` `tool/mcp` `area/auth` 💬2
- [#114526](https://github.com/NousResearch/hermes-agent/issues/114526) [Bug] hermes plugins install fails cloning public catalog repo: 'could not read Username ... terminal prompts disabled' `type/bug` `comp/plugins` `area/auth` `P3` 💬2
- [#114495](https://github.com/NousResearch/hermes-agent/issues/114495) [bug] hermes -p <profile> gateway <action> undocumented in hermes --help `type/docs` `comp/cli` `P3` `area/profiles` 💬2
- [#114467](https://github.com/NousResearch/hermes-agent/issues/114467) Cron ticker drifts: sleep-after-work means jobs fire progressively later `type/bug` `comp/cron` `P3` 💬2
- [#114464](https://github.com/NousResearch/hermes-agent/issues/114464) `hermes update` installs huggingface-hub 1.24.0 into the venv, silently breaking the TTS/voice path (transformers, outetts imports raise) `type/bug` `tool/tts` `P2` `python:uv` 💬2
- [#114456](https://github.com/NousResearch/hermes-agent/issues/114456) Async delegation completion notice stalls behind a busy/interrupted session: pending queue not drained after /stop, and mid-history insertion invalidates the prompt cache `type/bug` `comp/gateway` `tool/delegate` `P0` 💬2
- [#113850](https://github.com/NousResearch/hermes-agent/issues/113850) [Feature]: Jev as the System-One lane for computer use `type/feature` `comp/agent` `comp/tools` `comp/plugins` 💬2
- [#113646](https://github.com/NousResearch/hermes-agent/issues/113646) [Bug]: Cannot compress context even though desktop client is under context cap. `type/bug` `P2` `comp/desktop` `bug` 💬2
- [#114543](https://github.com/NousResearch/hermes-agent/issues/114543) Desktop: empty-text resume matching grafts later tool activity onto earlier messages 💬1
- [#114114](https://github.com/NousResearch/hermes-agent/issues/114114) [Closed / Unconfirmed]: Custom GSV TTS may add Chinese filler interjections `type/bug` `tool/tts` `P3` `needs-repro` 💬1
- [#114501](https://github.com/NousResearch/hermes-agent/issues/114501) [Bug]: Credential-pool rotation never reverts in a live session — subscription seat keeps billing the paid fallback after its quota window reopens `type/bug` `comp/agent` `area/auth` `P2` 💬1
- [#114477](https://github.com/NousResearch/hermes-agent/issues/114477) Feature: operator-curated model list for the picker, and provider-scoped family aliases `type/feature` `comp/cli` `provider/openrouter` `provider/bedrock` 💬1
- [#114476](https://github.com/NousResearch/hermes-agent/issues/114476) Bedrock: application inference profile ARNs fall back to the 128k default context window `type/bug` `comp/agent` `provider/bedrock` `P2` 💬1
- [#114471](https://github.com/NousResearch/hermes-agent/issues/114471) Second local server: alias base_url ignored, plus settings/config gaps found wiring it `type/bug` `comp/cli` `area/config` `P2` 💬1
- [#114475](https://github.com/NousResearch/hermes-agent/issues/114475) Feature: operator-curated model list for the picker, and provider-scoped family aliases 💬1
- [#114474](https://github.com/NousResearch/hermes-agent/issues/114474) Bedrock: application inference profile ARNs fall back to the 128k default context window 💬1
- [#114466](https://github.com/NousResearch/hermes-agent/issues/114466) Compression via Subagent? `type/feature` `question` `comp/agent` `P3` 💬1
- [#114424](https://github.com/NousResearch/hermes-agent/issues/114424) [Bug]: test_auxiliary_client_cache_follows_credential is not hermetic — fails on hosts with an ambient Claude Code credential `type/test` `comp/agent` `provider/anthropic` `area/auth` 💬1
- [#114428](https://github.com/NousResearch/hermes-agent/issues/114428) [docs] github - multiple links in github repo *.md files gives 404 `type/docs` `P3` 💬1
- [#114537](https://github.com/NousResearch/hermes-agent/issues/114537) Desktop: analyzed local images disappear from vision_analyze activity and cannot be expanded `type/bug` `tool/vision` `P3` `sweeper:risk-platform-windows`
- [#114531](https://github.com/NousResearch/hermes-agent/issues/114531) WSL + Windows Desktop Remote: Computer Use setup targets the Linux guest, with no Windows-host target selection `type/feature` `comp/tools` `P3` `sweeper:risk-platform-windows`
- [#114525](https://github.com/NousResearch/hermes-agent/issues/114525) [skills-index-watchdog] Skills index is stale or degraded (degraded) `type/bug` `tool/skills` `P3` `sweeper:risk-automation`
- [#114510](https://github.com/NousResearch/hermes-agent/issues/114510) [Wave] Self-declared "Supersedes #N" PRs whose target is still open (137 rows) `type/refactor` `comp/cron` `P3` `needs-decision`
- [#114511](https://github.com/NousResearch/hermes-agent/issues/114511) Kanban: supported bounds for quota retries and non-destructive run-log retention? `type/feature` `question` `comp/gateway` `comp/cron`
- [#114509](https://github.com/NousResearch/hermes-agent/issues/114509) Restart-safe cron worker becomes a zombie when terminal state is observed before child exit `type/bug` `comp/cron` `P2`
- [#114492](https://github.com/NousResearch/hermes-agent/issues/114492) [Feature]: Filter Desktop profiles by the selected gateway `type/feature` `P3` `comp/desktop` `area/profiles`
- [#114479](https://github.com/NousResearch/hermes-agent/issues/114479) [Bug]: Compaction update instruction names "## Active Task" but the template emits "## Historical Task Snapshot" `type/bug` `comp/agent` `P1` `sweeper:risk-session-state`
- [#114468](https://github.com/NousResearch/hermes-agent/issues/114468) security: remote-party-supplied URLs fetched without SSRF guard across provider media, pet store, RPC, and skills hub `type/security` `comp/agent` `comp/tui` `comp/plugins`
- [#114460](https://github.com/NousResearch/hermes-agent/issues/114460) [Bug]: Custom OpenAI-compat provider's reasoning_effort 'none' unsupported 400 wording is not matched by the reasoning-rejection retry ladder `type/bug` `comp/agent` `provider/openai` `P2`
- [#114446](https://github.com/NousResearch/hermes-agent/issues/114446) file_state: stale _last_writer entries report a finished predecessor as a concurrent sibling; forget_task() never clears them `type/bug` `tool/file` `P2`
- [#114437](https://github.com/NousResearch/hermes-agent/issues/114437) [Bug]: sync_back() leaks multi-GB /tmp tars and can fill the disk (tar exits 2 on gateway.sock; 6h sweep window) `type/bug` `backend/file-sync` `comp/tools` `P2`

#### 🔒 Closed Issues
- [#34271](https://github.com/NousResearch/hermes-agent/issues/34271) Proposal: Add Mnemosyne to official memory provider documentation
- [#98503](https://github.com/NousResearch/hermes-agent/issues/98503) [Bug]: Desktop clarify card never renders — clarify.request event lost in transport routing
- [#103746](https://github.com/NousResearch/hermes-agent/issues/103746) [Bug]: MCP servers break ~60-90s after successful connection due to broken "revival" logic
- [#104303](https://github.com/NousResearch/hermes-agent/issues/104303) Turn lease held forever when a provider stream fails with ReadError (stream_opened=false) — session locks out, all following turns rejected
- [#109824](https://github.com/NousResearch/hermes-agent/issues/109824) Two WAL stability bugs: cron writer causes inode conflict every 30 min; `_refresh_tools` crashes on `None` session during MCP restart
- [#109902](https://github.com/NousResearch/hermes-agent/issues/109902) [Bug]: self-referential .env line (PATH=/x:${PATH}) grows on every reload until every child spawn dies with E2BIG
- [#95713](https://github.com/NousResearch/hermes-agent/issues/95713) [Bug]: strip markdown bold from file-open path (2026-08)
- [#114114](https://github.com/NousResearch/hermes-agent/issues/114114) [Closed / Unconfirmed]: Custom GSV TTS may add Chinese filler interjections
- [#114475](https://github.com/NousResearch/hermes-agent/issues/114475) Feature: operator-curated model list for the picker, and provider-scoped family aliases
- [#114474](https://github.com/NousResearch/hermes-agent/issues/114474) Bedrock: application inference profile ARNs fall back to the 128k default context window

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 92,035 · **Open issues:** 8,071 · **Last push:** <1h ago

On September 18, 2026, there were no new releases for vLLM. Significant merged pull requests include a fix in #57414 for stashed logprobs handling in DiffusionGemma and an update in #56925 restoring the KV cache metadata GET method for external event consumers. The #57426 PR addresses a bug with the AITER MXFP8 MoE enabling flag, and #57432 resolves non-causal attention issues within FlashInfer DSv4.1. Among new issues, #57424 highlights a critical boot failure for GLM-5.3-Flash caused by a missing implementation in the ROCm environment, drawing attention to potential instability in the current nightly release.

#### ✅ Merged PRs
- [#57414](https://github.com/vllm-project/vllm/pull/57414) [Bugfix] DiffusionGemma: hand out stashed logprobs only on the committing step
- [#56431](https://github.com/vllm-project/vllm/pull/56431) [XPU] Fix incorrect context-key normalization for Qwen DFlash-based models
- [#57426](https://github.com/vllm-project/vllm/pull/57426) [ROCm][Bugfix] Gate AITER MXFP8 MoE on the aiter enable flag
- [#44890](https://github.com/vllm-project/vllm/pull/44890) [Frontend][Core] Add release_kv_cache_memory() API
- [#57289](https://github.com/vllm-project/vllm/pull/57289) [AMD][Bugfix] Make the nested-RoPE patch reach automatic validation
- [#56925](https://github.com/vllm-project/vllm/pull/56925) [Bugfix] Restore KV cache metadata GET method for external event consumer
- [#57252](https://github.com/vllm-project/vllm/pull/57252) [Bugfix][ROCm] Add record_logical_topk_ready to ROCMAiterMLASparseImpl (GLM-5.3-Flash boot crash)
- [#57432](https://github.com/vllm-project/vllm/pull/57432) [Bugfix][DSv4.1] Fix FlashInfer DSpark non-causal attention
- [#53837](https://github.com/vllm-project/vllm/pull/53837) [AMD][CI][The Rock] Fix language models standard for The Rock on mi355
- [#57058](https://github.com/vllm-project/vllm/pull/57058) [Bugfix][Frontend] Reject stop strings on --tokens-only servers instead of silently ignoring them
- [#57405](https://github.com/vllm-project/vllm/pull/57405) [MoE] Encapsulate TRT-LLM BF16 weight layout handling
- [#55960](https://github.com/vllm-project/vllm/pull/55960) [Perf] Add fused DFlash2 grouped convolution
- [#56316](https://github.com/vllm-project/vllm/pull/56316) [CI] Shard multimodal Processor 1->4
- [#56902](https://github.com/vllm-project/vllm/pull/56902) [Bugfix] Release stale FlashMLA workspace views after growth
- [#54849](https://github.com/vllm-project/vllm/pull/54849) [ROCm][CI][The Rock 10] Fix (MI355) Quantized Models failure on The Rock 10 with Triton 3.8.x
- [#49819](https://github.com/vllm-project/vllm/pull/49819) [Model] Add Cohere2MoE Eagle3 auxiliary hidden states
- [#57398](https://github.com/vllm-project/vllm/pull/57398) [CI] Retire Weight Loading smoke tests
- [#56079](https://github.com/vllm-project/vllm/pull/56079) [MoE][Bugfix] Skip SP padded rows in grouped MoE routing
- [#57049](https://github.com/vllm-project/vllm/pull/57049) [Bugfix][HiSparse][NIXL] Import full blocks without tail prefill on D
- [#56266](https://github.com/vllm-project/vllm/pull/56266) [DSv4.1] Integrate Mega-Gate from DeepGEMM
- [#57055](https://github.com/vllm-project/vllm/pull/57055) [ROCm] Restore `VLLM_ROCM_USE_AITER_FP4_ASM_GEMM` and default w4a4 ASM GEMM back to off
- [#54990](https://github.com/vllm-project/vllm/pull/54990) [Bugfix][Metrics] Do not log a 0.0% prefix cache hit rate before any query
- [#57355](https://github.com/vllm-project/vllm/pull/57355) [Bugfix] Max-load throughput cliff when `max_num_seqs` is not a multiple of 8
- [#53792](https://github.com/vllm-project/vllm/pull/53792) [ROCm] Resolve the indexer fp8 cache dtype once at import
- [#57098](https://github.com/vllm-project/vllm/pull/57098) [Kimi K3 Bug] Fix kimi k3 reasoning parser
- [#57402](https://github.com/vllm-project/vllm/pull/57402) [CI][Bugfix] Add tp_shard_with_padding to padded MoE reload test mock
- [#57385](https://github.com/vllm-project/vllm/pull/57385) [ROCm][CI] Adapt MoE tests to the triton_kernels 3.8 API
- [#57380](https://github.com/vllm-project/vllm/pull/57380) [ROCm][CI] Fix Entrypoints Integration (Pooling) tests on TheRock image
- [#54699](https://github.com/vllm-project/vllm/pull/54699) [Bugfix][MoE] Convert FlashInfer BF16 weights in place
- [#54320](https://github.com/vllm-project/vllm/pull/54320) [Mypy] Fix mypy typing for Transformers models
- [#57190](https://github.com/vllm-project/vllm/pull/57190) [Docs] Fix the typos in the document
- [#57295](https://github.com/vllm-project/vllm/pull/57295) [Bugfix] Fix wrong vLLM version reported by pip install (proto-v* tag collision)
- [#53864](https://github.com/vllm-project/vllm/pull/53864) [Bugfix][GDN] Fix CuteDSL BF16 KKT inversion divergence
- [#57356](https://github.com/vllm-project/vllm/pull/57356) [bugfix] Mark draft tokens to rebuilt their embeddings.
- [#48249](https://github.com/vllm-project/vllm/pull/48249) [Perf][ROCm] Enable AITER QuickReduce + RMSNorm fusion
- [#55953](https://github.com/vllm-project/vllm/pull/55953) [CI/Build][Hardware][NVIDIA] Add Rubin CUDA 13.4 nightly images
- [#56359](https://github.com/vllm-project/vllm/pull/56359) [Fix][ROCm] MXFP4 MoE round-up inflates TP-sharded expert weights on CDNA3, starving KV cache
- [#56849](https://github.com/vllm-project/vllm/pull/56849) [ROCm][Perf] Insert MiniMax-M3 sparse-PA K/V without a contiguous copy
- [#56950](https://github.com/vllm-project/vllm/pull/56950) [Bugfix] Use DP index for dense DP weight updates and EC CPU region
- [#57270](https://github.com/vllm-project/vllm/pull/57270) [Bugfix][Model Runner V2] Route dummy tokens to MoE experts during profiling
- [#53914](https://github.com/vllm-project/vllm/pull/53914) [BugFxi] Fix DeepGEMM FP8 workspace over allocation
- [#55316](https://github.com/vllm-project/vllm/pull/55316) [HARDWARE][POWER] Enable W8A8 INT8 MoE on POWER
- [#56590](https://github.com/vllm-project/vllm/pull/56590) [Bugfix][ROCm][MoE] Fall back instead of crashing when AITER MoE is requested for a non-gated (is_act_and_mul=False) model
- [#57357](https://github.com/vllm-project/vllm/pull/57357) [Frontend] Only show the summary line of config docstrings in `--help`
- [#48115](https://github.com/vllm-project/vllm/pull/48115) [Bugfix] Escape control characters in xgrammar choice grammar
- [#57375](https://github.com/vllm-project/vllm/pull/57375) [ROCm][CI] Fix AMD CI pipeline upload rejected by an invalid block-step key
- [#57367](https://github.com/vllm-project/vllm/pull/57367) [CI] Make ci-clean-log.sh portable to macOS/BSD sed
- [#48956](https://github.com/vllm-project/vllm/pull/48956) [Bugfix] Fall back to native sampling when FlashInfer cannot target the GPU
- [#57189](https://github.com/vllm-project/vllm/pull/57189) Fix Laguna patch mutating flat RoPE parameters
- [#56609](https://github.com/vllm-project/vllm/pull/56609) [Compile] Fix compile warning #177-D
- [#57192](https://github.com/vllm-project/vllm/pull/57192) [Bugfix][ROCm][GLM-5.3-Flash] Apply deferred tilelang.jit already on attribute access
- [#57301](https://github.com/vllm-project/vllm/pull/57301) [XPU][CI] skip test_hybrid_prefix_cache_hit_rate
- [#57269](https://github.com/vllm-project/vllm/pull/57269) [Bugfix] Honor skip_reading_prefix_cache for KV connector hits
- [#57095](https://github.com/vllm-project/vllm/pull/57095) [Perf][EPD] Batch image requests per encoder
- [#57334](https://github.com/vllm-project/vllm/pull/57334) [CI] Raise DSv4-Flash disaggregated engine readiness timeout to 1800s
- [#57335](https://github.com/vllm-project/vllm/pull/57335) [CI] Raise H200 LM Eval Large Models timeout to 120 min
- [#57145](https://github.com/vllm-project/vllm/pull/57145) [kv_offload] Skip scratch groups
- [#51081](https://github.com/vllm-project/vllm/pull/51081) [Bugfix][KV Offload] Register the offload region in chunks

#### 🐛 New Issues
- [#57424](https://github.com/vllm-project/vllm/issues/57424) [Bug][ROCm] GLM-5.3-Flash fails to boot on 0.3.1 nightly: SparseAttnIndexerKpool (AMD) missing forward_cuda → NotImplementedError `rocm` `glm` 💬6
- [#57413](https://github.com/vllm-project/vllm/issues/57413) [Feature]: Production evidence for restoring concurrent partial prefill limits (max_num_partial_prefills / max_concurrent_prefills) in V1 scheduler `feature request` `scheduler` 💬4
- [#57350](https://github.com/vllm-project/vllm/issues/57350) [Performance]: Streaming derender bypasses renderer thread pool and blocks the event loop `bug` 💬4
- [#57373](https://github.com/vllm-project/vllm/issues/57373) [RFC]: Share KV transfer planning primitives across KV connectors `kv-connector` 💬4
- [#57324](https://github.com/vllm-project/vllm/issues/57324) [Bug]: Claude Code tool search: first request of every session rejected with 400 (tool_addition content blocks not accepted by /v1/messages) `tool-calling` 💬4
- [#57267](https://github.com/vllm-project/vllm/issues/57267) [Bug]: Hybrid Mamba2 with prefix caching (`mamba_cache_mode="all", should be deterministic`) returns different in same batch `bug` `kv-cache-manager` 💬3
- [#57429](https://github.com/vllm-project/vllm/issues/57429) [Bug][ROCm] Engine stops making progress inside an aiter fused MoE step on gfx942, then dies with no error (GLM-5.3, TP8, v0.29.0) `rocm` `glm` 💬2
- [#57423](https://github.com/vllm-project/vllm/issues/57423) [Bug]: FlashInfer autotune config cache hits only on rank 0, deadlocking the engine launch `bug` `quantization` 💬2
- [#57346](https://github.com/vllm-project/vllm/issues/57346) [Feature]: [CPU][GLM5Next][KDA] Add CPU KDA backend for GLM-5.3-Flash `feature request` `kimi` `glm` 💬2
- [#57383](https://github.com/vllm-project/vllm/issues/57383) [RFC]: Asymmetric P/D Deployment for DeepSeek-V4.1 Flash `RFC` `deepseek` `DSv4.1` 💬1
- [#57353](https://github.com/vllm-project/vllm/issues/57353) [Bug][Reasoning] kimi_k3: non-streaming path classifies truncated reasoning as content (inconsistent with streaming path) `tool-calling` `kimi` `k3` 💬2
- [#57321](https://github.com/vllm-project/vllm/issues/57321) [Bug]: audio/transcriptions verbose_json segment ids are not unique `bug` 💬2
- [#57449](https://github.com/vllm-project/vllm/issues/57449) [Bug]: MLA Workspace OOM At Runtime `bug` `quantization` 💬1
- [#57372](https://github.com/vllm-project/vllm/issues/57372) [CI Failure]: Recurring flaky infrastructure failures — AMD GPU hangs, H200-MIG step timeouts, agent loss (200-build analysis) `rocm` `ci-failure` `kimi` 💬1
- [#57354](https://github.com/vllm-project/vllm/issues/57354) [Bug]: DeepSeek-V4 sparse-MLA mixed warmup intermittently segfaults on ROCm `bug` `rocm` `deepseek` `DSv4` 💬1
- [#57448](https://github.com/vllm-project/vllm/issues/57448) [Model Support] DeepSeek V4.1 Tracking Issue `deepseek` `DSv4.1`
- [#57445](https://github.com/vllm-project/vllm/issues/57445) [RFC]: Layer-Wise Mixed-Precision KV Cache `quantization`
- [#57446](https://github.com/vllm-project/vllm/issues/57446) [Bug]: AriaForConditionalGeneration.load_weights discards loaded parameter set, making weight tracking ineffective `quantization`
- [#57406](https://github.com/vllm-project/vllm/issues/57406) [Feature]: GLM 5.3 Performance Optimization `feature request` `glm`
- [#57440](https://github.com/vllm-project/vllm/issues/57440) [Bug]: Weight-loading/repacking memory is not reclaimed on discrete GPUs, forcing lower max-num-seqs / max-num-batched-tokens (Kimi K3, B200, fastsafetensors + DeepEP v2) `bug` `kimi` `k3`
- [#57376](https://github.com/vllm-project/vllm/issues/57376) [Bug]: --fingerprint-mode=none still emits "system_fingerprint": null in non-streaming responses `bug`
- [#57345](https://github.com/vllm-project/vllm/issues/57345) [Feature]: [CPU][GLM5Next] Add native sparse MLA / KeyPool indexer support for GLM-5.3-Flash `feature request` `quantization` `glm`
- [#57342](https://github.com/vllm-project/vllm/issues/57342) [Performance]: Canonical KV offload layout picks the DMA load path by page size, but copies per fragment
- [#57303](https://github.com/vllm-project/vllm/issues/57303) [Bug]: TieringOffloadingSpec leaks /dev/shm mmap files on non-graceful shutdown (barrier-unlink fix from #52596 not applied) `bug`
- [#57276](https://github.com/vllm-project/vllm/issues/57276) [Bug]: MRV2不支持anthropic? `bug`
- [#57266](https://github.com/vllm-project/vllm/issues/57266) [Bug]: Hybrid Mamba2 + prefix caching with an explicit `--mamba-block-size`, `conv_ssm_forward` writes SSM state from an out-of-range strided slice and kills EngineCore. `bug` `quantization` `kv-cache-manager`

#### 🔒 Closed Issues
- [#39071](https://github.com/vllm-project/vllm/issues/39071) [Bug]: Gemma 4 31B Structured Outputs weird behaviour / character output - might be a quick solve
- [#42384](https://github.com/vllm-project/vllm/issues/42384) [Bug]: DeepSeek-V4-Pro TP=16 fails fp8 block-shape check on shared_experts.down_proj — contradicts the official recipe
- [#57223](https://github.com/vllm-project/vllm/issues/57223) [Bug]: assistant_tokens_mask misaligned after multimodal placeholder expansion
- [#38979](https://github.com/vllm-project/vllm/issues/38979) [Bug]: Regression in vllm 0.19.0 - The page size of the layer is not divisible by the maximum page size
- [#41702](https://github.com/vllm-project/vllm/issues/41702) [Usage]: ValueError: mismatch of LoRA layer names for Gemma4 E2B trained with unsloth
- [#42372](https://github.com/vllm-project/vllm/issues/42372) KVConnector V1 external hit lookup is consumed as a reservation, but has no plan/abort lifecycle
- [#42490](https://github.com/vllm-project/vllm/issues/42490) [Bug]: Async double streaming_update with shared-prefix reuse can leave invalid -1 token ids in the worker input row
- [#37974](https://github.com/vllm-project/vllm/issues/37974) [Bug]: [Bug]: Kimi-K2.5 on version 0.18.0 results in an keyerror when the pipeline parallelism (PP) is greater than or equal to 2
- [#40987](https://github.com/vllm-project/vllm/issues/40987) [Bug][DeepSeek-V4][MTP] deep_gemm assertion: context_lens.is_contiguous() in paged MQA metadata
- [#41647](https://github.com/vllm-project/vllm/issues/41647) [Bug]: Unable to start Gemma4 with 2 GPUs
- [#42761](https://github.com/vllm-project/vllm/issues/42761) [Bug]: kv_cache_offloadig crashes on 0.21.0 - KeyError in self._block_id_to_pending_jobs[bid]
- [#56797](https://github.com/vllm-project/vllm/issues/56797) [Perf][Spec Decode] DeepSeek-V4.1-Flash DSpark mean acceptance length only 2.82 on GSM8K (k=5, 2×8 H20)
- [#42393](https://github.com/vllm-project/vllm/issues/42393) [Installation]: RuntimeError: FlashInfer requires GPUs with sm75 or higher when running vllm server
- [#42583](https://github.com/vllm-project/vllm/issues/42583) Qwen3.5 + --enable-lora + TP=4 fails at startup in custom_all_reduce.cuh
- [#42826](https://github.com/vllm-project/vllm/issues/42826) [RFC]: Split Flashattn Forward for Prefill/Decode Separation
- [#42831](https://github.com/vllm-project/vllm/issues/42831) [Bug]: MultiConnector _update_from_kv_xfer_finished error
- [#42842](https://github.com/vllm-project/vllm/issues/42842) Code quality scan: 233 findings (A-, 81/100)
- [#53961](https://github.com/vllm-project/vllm/issues/53961) [Bug]: PR #51726's >=160GiB tier captures MI300X (191.98 GiB), doubling max_num_batched_tokens and breaking KV cache init for DeepSeek-V4-Pro at 1M
- [#42119](https://github.com/vllm-project/vllm/issues/42119) [Bug]: LMCache external KV keys omit prompt_embeds content, allowing same-length embedding prompts to share stale KV
- [#42204](https://github.com/vllm-project/vllm/issues/42204) [Bug]: compiling from source crashes the PC
- [#57248](https://github.com/vllm-project/vllm/issues/57248) [Bug][ROCm] Nightly af1c01499: GLM-5.3-Flash cannot boot — ROCMAiterMLASparseImpl missing record_logical_topk_ready + jit-warmup tilelang crash
- [#42207](https://github.com/vllm-project/vllm/issues/42207) [Usage]: How to proactively clear CPU-resident memory left behind by unloaded LoRA adapters after calling `/v1/unload_lora_adapter`?
- [#42216](https://github.com/vllm-project/vllm/issues/42216) [Security] Blocked by CVE-2025-30165 & CVE-2024-11041 (Legacy V0 Engine)
- [#42361](https://github.com/vllm-project/vllm/issues/42361) [RFC]: Zero-copy LoRA loading from tmpfs via mmap + cudaHostRegister
- [#42516](https://github.com/vllm-project/vllm/issues/42516) [Bug]: Gemma4 NVFP4 fails to start with pipeline parallel = 2, or TP = 2 without EP
- [#42572](https://github.com/vllm-project/vllm/issues/42572) [Bug]: Intermittent `vectorized_gather_kernel index out of bounds` in `triton_reshape_and_cache_flash` (KV-cache update) during Gemma 4 31B + MTP K=3 inference — both FP8-block and NVFP4
- [#42633](https://github.com/vllm-project/vllm/issues/42633) [Bug]: Runtime LoRA unload does not remove adapter from engine
- [#42718](https://github.com/vllm-project/vllm/issues/42718) [Bug]: fully-sharded fused MoE W13 LoRA uses wrong slice offset after all-gather when local LoRA rank is 1
- [#42852](https://github.com/vllm-project/vllm/issues/42852) [Bug]: Deprecated CLI argument warning leaks from run-batch --url to chat --url
- [#42533](https://github.com/vllm-project/vllm/issues/42533) [Bug]: ngram_gpu speculative decoding can propose draft tokens past max_model_len budget
- [#42593](https://github.com/vllm-project/vllm/issues/42593) [Bug]: --enable-return-routed-experts crashes with AttributeError on non-MoE models after full model load (missing architecture compatibility check)
- [#42628](https://github.com/vllm-project/vllm/issues/42628) macOS source checkout resolves to UnspecifiedPlatform (empty device_type)
- [#42745](https://github.com/vllm-project/vllm/issues/42745) [Bug]: `apply_top_k_top_p_pytorch` `scatter_` crashes under cudagraph capture on sm_121a (Blackwell GB10)
- [#42794](https://github.com/vllm-project/vllm/issues/42794) with_cancellation can return None, causing FastAPI to send HTTP 200 with JSON null after http.disconnect
- [#42845](https://github.com/vllm-project/vllm/issues/42845) [Feature]: DeepSeek V4 w4a4 MegaMoE support
- [#49103](https://github.com/vllm-project/vllm/issues/49103) [Bug]: Latest vllm is incompatible with `openai<2.25.0`
- [#57188](https://github.com/vllm-project/vllm/issues/57188) Bug: Laguna global RoPE validator mutates later flat rope_parameters
- [#57136](https://github.com/vllm-project/vllm/issues/57136) [Bug]: NaN vision embeddings with multi-budget encoder CUDA graphs sharing a pool
- [#56772](https://github.com/vllm-project/vllm/issues/56772) [KV Connector][Offloading] Canonical MLA+DSA secondary transfers use TP-dependent row sizes
- [#56949](https://github.com/vllm-project/vllm/issues/56949) [Bug]: Dense DP weight transfer selects the wrong IPC payload
- [#51080](https://github.com/vllm-project/vllm/issues/51080) [Bug]: CPU offload cannot pin regions of 512 GiB or more (single cudaHostRegister call)
- [#53655](https://github.com/vllm-project/vllm/issues/53655) [Bug]: model_hosting_container_standards changes a shared root/vllm handler to ERROR and suppresses vLLM startup logs

### SGLang (`sgl-project/sglang`)

**Stars:** 36,111 · **Open issues:** 5,434 · **Last push:** <1h ago

The SGLang project experienced a routine maintenance day with no new releases. A significant update included the merging of PR #40033, which moves CUDA and ROCm speculative kernels to JIT, enhancing performance and efficiency. Other notable merges were PR #40036, temporarily removing the DCP option from the GLM-5.3-Flash cookbook, and PR #39170, which aims to improve chat render parity within SGLang. Among new issues, bug #39925 drew attention as it reported that FlashKDA prefill returns a tuple, leading to crashes in GLM-5.3-Flash when the radix cache is disabled.

#### ✅ Merged PRs
- [#40033](https://github.com/sgl-project/sglang/pull/40033) [Kernel] Move CUDA and ROCm speculative kernels to JIT
- [#40028](https://github.com/sgl-project/sglang/pull/40028) [sglang-miles] Compare MXFP4 Marlin experts in dequantized space in the weight checker
- [#35204](https://github.com/sgl-project/sglang/pull/35204) [Scheduler] Align `RadixCache` no-insert cleanup with `kv_len_to_handle`
- [#39966](https://github.com/sgl-project/sglang/pull/39966) [Test] Consolidate kernel tests under plural kernels tree
- [#40036](https://github.com/sgl-project/sglang/pull/40036) [Docs] GLM-5.3-Flash cookbook: temporarily remove the DCP option
- [#40035](https://github.com/sgl-project/sglang/pull/40035) [Cherry-pick to release/v0.5.20] [Moe] Fix flashinfer_trtllm silently dropping swiglu_limit clamped SwiGLU activation (#39920)
- [#39921](https://github.com/sgl-project/sglang/pull/39921) [DSV4] Generalize attention metadata, sparse prefill, and KV pool over compress ratios
- [#35123](https://github.com/sgl-project/sglang/pull/35123) [AMD] Fix DSV4 FP4 dequant path for AITER on ROCm
- [#40017](https://github.com/sgl-project/sglang/pull/40017) [CI] Add metamergebot to CI permissions
- [#40012](https://github.com/sgl-project/sglang/pull/40012) [Cherry-pick to release/v0.5.20] [DP Attn] Fix crash for no token all-gather case (#39899)
- [#40009](https://github.com/sgl-project/sglang/pull/40009) [Cherry-pick to release/v0.5.20] fix(multimodal): handle tensor images in exact-token preprocessing (#30368)
- [#39170](https://github.com/sgl-project/sglang/pull/39170) [Router] Sample k random candidates for the min-load fallback (--min-load-choices)
- [#37778](https://github.com/sgl-project/sglang/pull/37778) [AMD][DSV4] Enable hicache on deepseek-v4 fp8 unified attn
- [#28403](https://github.com/sgl-project/sglang/pull/28403) [PD] Introduce runtime role switching between prefill and decode
- [#39899](https://github.com/sgl-project/sglang/pull/39899) [DP Attn] Fix crash for no token all-gather case
- [#30368](https://github.com/sgl-project/sglang/pull/30368) fix(multimodal): handle tensor images in exact-token preprocessing
- [#39133](https://github.com/sgl-project/sglang/pull/39133) [router] Improve SGLang chat render parity
- [#39952](https://github.com/sgl-project/sglang/pull/39952) [NPU][CI] Increase e2e multi-node test timeout to 210 minutes
- [#39427](https://github.com/sgl-project/sglang/pull/39427) dsv4(npu): support prefill context parallelism with interleave and zigzag
- [#38878](https://github.com/sgl-project/sglang/pull/38878) [AMD] Load fused shared experts for Qwen4-Exp and Qwen3.5 MTP
- [#39438](https://github.com/sgl-project/sglang/pull/39438) [NPU][Diffusion] FA MXFP8 and modelslim w4a4f8 and w8a8f8 support for Wan2.2 and FLUX
- [#39050](https://github.com/sgl-project/sglang/pull/39050) [HiCache][Perf] fix: batch HiCache D2H submits per step for hybrid pools
- [#34012](https://github.com/sgl-project/sglang/pull/34012) Add Agentic-Aware Tail-Optimized LRU eviction to the unified radix cache
- [#39413](https://github.com/sgl-project/sglang/pull/39413) [NPU] Support nccl backend for --remote-instance-weight-loader
- [#38420](https://github.com/sgl-project/sglang/pull/38420) [NPU]Refactor weight processing and add NPUSwigluLimit activation
- [#38184](https://github.com/sgl-project/sglang/pull/38184) [AMD][Spec] Enable GDN ReplaySSM target-verify on ROCm
- [#39870](https://github.com/sgl-project/sglang/pull/39870) Carry deferred attention operands and reuse multimodal shared memory
- [#39858](https://github.com/sgl-project/sglang/pull/39858) Restrict SafeUnpickler standard-library globals
- [#39513](https://github.com/sgl-project/sglang/pull/39513) [AMD][Bugfix] Fix vattn_asm HIP error 709 under CUDA graph capture on ROCm 10
- [#38983](https://github.com/sgl-project/sglang/pull/38983) [sgl-router] Render chat prompts with dynamo-render
- [#29668](https://github.com/sgl-project/sglang/pull/29668) [HiCache] fix: resolve Mooncake local_hostname per node for runtime attach
- [#39920](https://github.com/sgl-project/sglang/pull/39920) [Moe] Fix flashinfer_trtllm silently dropping swiglu_limit clamped SwiGLU activation
- [#39884](https://github.com/sgl-project/sglang/pull/39884) [Diffusion] Remove retired auto-residency workload helpers
- [#39382](https://github.com/sgl-project/sglang/pull/39382) [NPU][Diffusion] Optimize SenseNova-U1 batched generation

#### 🐛 New Issues
- [#39991](https://github.com/sgl-project/sglang/issues/39991) [RFC] Align KV cache events with vLLM's schema so shared consumers have a standard format 💬1
- [#39900](https://github.com/sgl-project/sglang/issues/39900) C:/Program Files/Git/v1/messages never returns cache_creation_input_tokens, so cache-write tokens are billed as plain input 💬2
- [#39922](https://github.com/sgl-project/sglang/issues/39922) [Bug] /v1/messages never reports cache_creation_input_tokens, so cache writes are billed as plain input 💬1
- [#40025](https://github.com/sgl-project/sglang/issues/40025) [Bug] EAGLE draft-extend plan stream lacks an input-producer dependency 💬1
- [#39971](https://github.com/sgl-project/sglang/issues/39971) [KDA] Fused intra-chunk prefill path (`chunk_kda_fwd_intra(fuse_diagonal=True)`) collapses for strong per-channel decays because of the ±126 clamp in the exp2 factorization 💬1
- [#39925](https://github.com/sgl-project/sglang/issues/39925) [Bug] FlashKDA prefill returns a tuple and crashes GLM-5.3-Flash with radix cache disabled 💬1
- [#39963](https://github.com/sgl-project/sglang/issues/39963) # [RFC] Asymmetric P/D deployment for DeepSeek-V4.1 Flash
- [#39942](https://github.com/sgl-project/sglang/issues/39942) [Bug] FP8 KV cache scales are silently dropped when loading Qwen3-MoE / Qwen2 / Mixtral and every layer falls back to scale 1.0
- [#39936](https://github.com/sgl-project/sglang/issues/39936) [Bug] Rust server assigns the same HTTP port to multiple system-DP replicas
- [#39935](https://github.com/sgl-project/sglang/issues/39935) [Bug] Rust server cannot find a cached tokenizer when the model revision is a commit SHA
- [#39909](https://github.com/sgl-project/sglang/issues/39909) [Bug] DeepSeek-V4.1 encoder renders the pre-release reasoning-effort budgets (high → 50; release reference and deepseek-recipe → 75)
- [#39898](https://github.com/sgl-project/sglang/issues/39898) [Feature] Kimi-K3 Kimi-Vendor-Verifier (KVV) conformance: `feature` `function-calling`
- [#39886](https://github.com/sgl-project/sglang/issues/39886) [Bug] Potential DSpark startup hang from an unsynchronized CUDA graph memory check

#### 🔒 Closed Issues
- [#29900](https://github.com/sgl-project/sglang/issues/29900) [Bug] sgl-kernel tests lack compute-capability gates: 253 expected-unsupported failures on SM120 (deepgemm ue8m0, flashmla, fp8_blockwise_moe)
- [#31568](https://github.com/sgl-project/sglang/issues/31568) [Bug] Unused/unnecessary tl.constexpr params causing Triton cache-key pollution in KV-cache and FLA kernels
- [#39900](https://github.com/sgl-project/sglang/issues/39900) C:/Program Files/Git/v1/messages never returns cache_creation_input_tokens, so cache-write tokens are billed as plain input
- [#39797](https://github.com/sgl-project/sglang/issues/39797) [Question] GLM-5.3-Flash on 4x GB200: `--moe-runner-backend flashinfer_trtllm` scores ~1.3 gsm8k points below `deep_gemm` in repeated runs (6 vs 3 runs); one `triton` run agrees with deep_gemm
- [#39762](https://github.com/sgl-project/sglang/issues/39762) [weight-cache] DeepSeek-V4-Flash MXFP4 bypasses the IPC quant gate
- [#35122](https://github.com/sgl-project/sglang/issues/35122) [Bug] [AMD] SGLANG_DSV4_FP4_DEQUANT=1 is ignored by AITER FP4 MoE on ROCm
- [#39367](https://github.com/sgl-project/sglang/issues/39367) [CI][PD] test_decode_hicache_file_backend_l3_reuses_decode_output_after_flush hangs: decode worker never leaves KVPoll.Bootstrapping

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 128,604 · **Open issues:** 2,497 · **Last push:** <1h ago

On September 18, 2026, llama.cpp released several new versions, including b11028, which adds missing evict-old-files to the CI, and b11020, which introduces message delimiters to the DeepSeek V3.2/V4 parser. Merged PRs featured significant updates such as improvements in OpenVINO support (#29009) and enhancements to model handling, including skipping unneeded operations when TENSOR_SKIP is set (#29014) and extending Nemotron MTP support (#29018). Notably, a new issue was raised regarding an eval bug where the qwen4exp model aborts during the first decode on Vulkan, highlighting ongoing concerns with device compatibility and performance.

#### 🚀 New Releases
- [b11028](https://github.com/ggml-org/llama.cpp/releases/tag/b11028) b11028
- [b11027](https://github.com/ggml-org/llama.cpp/releases/tag/b11027) b11027
- [b11026](https://github.com/ggml-org/llama.cpp/releases/tag/b11026) b11026
- [b11025](https://github.com/ggml-org/llama.cpp/releases/tag/b11025) b11025
- [b11024](https://github.com/ggml-org/llama.cpp/releases/tag/b11024) b11024
- [b11022](https://github.com/ggml-org/llama.cpp/releases/tag/b11022) b11022
- [b11020](https://github.com/ggml-org/llama.cpp/releases/tag/b11020) b11020
- [b11019](https://github.com/ggml-org/llama.cpp/releases/tag/b11019) b11019
- [b11018](https://github.com/ggml-org/llama.cpp/releases/tag/b11018) b11018
- [b11017](https://github.com/ggml-org/llama.cpp/releases/tag/b11017) b11017

#### ✅ Merged PRs
- [#29041](https://github.com/ggml-org/llama.cpp/pull/29041) ci : add missing evict-old-files
- [#29020](https://github.com/ggml-org/llama.cpp/pull/29020) [rpc] skip ACCEL devices
- [#29008](https://github.com/ggml-org/llama.cpp/pull/29008) chat : add message delimiters to the DeepSeek V3.2/V4 parser
- [#29014](https://github.com/ggml-org/llama.cpp/pull/29014) model: skip gate_up_exps if TENSOR_SKIP is set
- [#29018](https://github.com/ggml-org/llama.cpp/pull/29018) model : extend Nemotron MTP support
- [#29009](https://github.com/ggml-org/llama.cpp/pull/29009) ggml-openvino: Update OpenVINO to 2026.4;fix clangd,MSVC warnings;
- [#28993](https://github.com/ggml-org/llama.cpp/pull/28993) gguf : align the data section relative to the GGUF start, not the file
- [#27985](https://github.com/ggml-org/llama.cpp/pull/27985) ui: fix removed reasoning menu in single model mode on desktop
- [#28732](https://github.com/ggml-org/llama.cpp/pull/28732) vulkan: split buffers and debug code into separate files, add shared headers
- [#28947](https://github.com/ggml-org/llama.cpp/pull/28947) ci : add API/ABI check to make-release workflow [no ci]
- [#28953](https://github.com/ggml-org/llama.cpp/pull/28953) [SYCL]fix the B70 mem allocate error when >19.3GB, can't allocate 2303168640 Bytes of memory on device
- [#25483](https://github.com/ggml-org/llama.cpp/pull/25483) vulkan: skip unneeded MoE work in mul_mm coopmat1 path
- [#28929](https://github.com/ggml-org/llama.cpp/pull/28929) sycl: ssm_conv: fuse the SiLU epilogue into the ssm_conv kernel
- [#28984](https://github.com/ggml-org/llama.cpp/pull/28984) opencl: fix various warnings
- [#29003](https://github.com/ggml-org/llama.cpp/pull/29003) docs: remove JG as CODEOWNER for test-llama-archs
- [#28996](https://github.com/ggml-org/llama.cpp/pull/28996) vulkan: fix buffer_reference alignment in im2col shaders
- [#28988](https://github.com/ggml-org/llama.cpp/pull/28988) vulkan: support qwen4exp hc ops
- [#28981](https://github.com/ggml-org/llama.cpp/pull/28981) [SYCL] Fix function signature for `ggml_backend_sycl_split_buffer_type`

#### 🐛 New Issues
- [#29022](https://github.com/ggml-org/llama.cpp/issues/29022) Feature Request: Fast Tool Gating & Single-Pass Selection via Prefill Logit Slicing `enhancement` 💬2
- [#29028](https://github.com/ggml-org/llama.cpp/issues/29028) Eval bug: qwen4exp / deepseek-v4 abort at first decode on Vulkan (RADV, gfx1151) 💬2
- [#29045](https://github.com/ggml-org/llama.cpp/issues/29045) iSWA: seq_pos_max answers from the sliding cache, so a batch without positions lands at 0 after a partial seq_rm and leaks base-cache cells `bug-unconfirmed` 💬1
- [#29061](https://github.com/ggml-org/llama.cpp/issues/29061) Feature Request: Edge0 support and also direct safetensors `enhancement`
- [#29059](https://github.com/ggml-org/llama.cpp/issues/29059) Misc. bug: Releases page appears newly busted `bug-unconfirmed`
- [#29058](https://github.com/ggml-org/llama.cpp/issues/29058) Feature Request: Support Prism PQ2_0 (GGML type 142) and PTQ1_0 (type 143) used by Ternary-Bonsai-2 `enhancement`
- [#29054](https://github.com/ggml-org/llama.cpp/issues/29054) Vulkan: deterministic GPU hang + SIGABRT on Intel Gen9.5 iGPU (UHD 630) with q8_0 KV cache — vk::Error escapes as std::terminate
- [#29049](https://github.com/ggml-org/llama.cpp/issues/29049) Feature Request: Include preferred citation in the readme `enhancement`
- [#29048](https://github.com/ggml-org/llama.cpp/issues/29048) Feature Request: Make HIP and CUDA crash compilation `enhancement`
- [#29044](https://github.com/ggml-org/llama.cpp/issues/29044) Eval bug: draft-mtp draft model fails to load with -ngl (vector::_M_range_check 1 >= 1); explicit -ts fixes it — likely NaN split when device reports 0 free
- [#29023](https://github.com/ggml-org/llama.cpp/issues/29023) Misc. bug: UI Bug. Сhat message box grows above the top of the window on the empty chat screen (regression in b10824) `bug-unconfirmed`
- [#29039](https://github.com/ggml-org/llama.cpp/issues/29039) Misc. bug: Vulkan flash_attn.comp writes past the end of Qf in the quantized (MMQ) path `bug-unconfirmed`
- [#29021](https://github.com/ggml-org/llama.cpp/issues/29021) Eval bug: Gemma 4 E4B hangs during model loading with Vulkan GPU offload `bug-unconfirmed`
- [#29017](https://github.com/ggml-org/llama.cpp/issues/29017) Misc. bug: Significant generation throughput drop when `presence_penalty > 0` with MTP enabled `bug-unconfirmed`
- [#29011](https://github.com/ggml-org/llama.cpp/issues/29011) Feature Request: MoE Browser Experts `enhancement`
- [#29010](https://github.com/ggml-org/llama.cpp/issues/29010) GLM-5.3 (glm_moe_dsa) emits repeated '@' tokens instead of a response on CPU (ngl=0)

#### 🔒 Closed Issues
- [#27981](https://github.com/ggml-org/llama.cpp/issues/27981) llama-ui : unable to open reasoning level selection menu on desktop
- [#26206](https://github.com/ggml-org/llama.cpp/issues/26206) Eval bug: Gemma 4 12B produces garbled output on large prompts, Intel Arc Pro B70 (Xe2)
- [#25082](https://github.com/ggml-org/llama.cpp/issues/25082) HIP/ROCm: system RAM grows unbounded with parallel slots due to CUDA graph cache never being evicted
- [#28960](https://github.com/ggml-org/llama.cpp/issues/28960) Misc. bug: Vulkan im2col / im2col_3d shaders write through buffer_reference without buffer_reference_align (VUID-RuntimeSpirv-PhysicalStorageBuffer64-06315)
- [#26122](https://github.com/ggml-org/llama.cpp/issues/26122) Eval bug: --swa-full + -sm tensor crashes on load for Gemma4-31B (ISWA KV cache / ggml_backend_meta_alloc_ctx_tensors_from_buft)
- [#26530](https://github.com/ggml-org/llama.cpp/issues/26530) Qwen3-Coder template: model fails to trigger XML tool calls with large prompts — request JSON format option
- [#26540](https://github.com/ggml-org/llama.cpp/issues/26540) Streaming behavior of the WebUI
- [#28980](https://github.com/ggml-org/llama.cpp/issues/28980) Misc. bug: [SYCL] incorrect func sig for `ggml_backend_sycl_split_buffer_type`
- [#25817](https://github.com/ggml-org/llama.cpp/issues/25817) Eval bug: mtmd llava models run one ViT layer short (subtracted at conversion AND graph build)
- [#26482](https://github.com/ggml-org/llama.cpp/issues/26482) Feature Request: Add native HarmonyOS NPU (HiAI) support
- [#26529](https://github.com/ggml-org/llama.cpp/issues/26529) server: prompt-cache save aborts with RPC backend (rpc_buffer_get_tensor abort); --cache-ram 0 works around it
- [#26535](https://github.com/ggml-org/llama.cpp/issues/26535) llama-server object-form tool_choice silent fallback
- [#26541](https://github.com/ggml-org/llama.cpp/issues/26541) Unbuffered positional read on Windows

### Ollama (`ollama/ollama`)

**Stars:** 181,175 · **Open issues:** 4,033 · **Last push:** 1h ago

On September 18, 2026, there were no new releases for Ollama, but several important updates were merged into the codebase, including the addition of MLX vision support in PR #17714 and improvements to release artifact uploads in PR #18516. The team also tightened redirect handling for registry requests in PR #18512 and enhanced the onboarding experience for the CLI with shared features from the desktop app in PR #18495. Notably, a significant new issue was reported (#18505) involving a stall in the MLX nvfp4 request handling during sustained loads, which only recovers with a server restart, drawing attention to potential stability concerns.

#### ✅ Merged PRs
- [#18493](https://github.com/ollama/ollama/pull/18493) tests: fix metadata deletion test flake
- [#17714](https://github.com/ollama/ollama/pull/17714) nemotron_h: add MLX vision support
- [#18516](https://github.com/ollama/ollama/pull/18516) ci: harden release artifact uploads
- [#18512](https://github.com/ollama/ollama/pull/18512) x/transfer, server: tighten redirect handling for registry requests
- [#18511](https://github.com/ollama/ollama/pull/18511) docs: clarify integrations overview and add assistant icons
- [#18495](https://github.com/ollama/ollama/pull/18495) cli: add first-run onboarding shared with the desktop app
- [#18510](https://github.com/ollama/ollama/pull/18510) mlxrunner: Release freed KV buffers during speculative decode
- [#18497](https://github.com/ollama/ollama/pull/18497) app: add Apps deep link

#### 🐛 New Issues
- [#18505](https://github.com/ollama/ollama/issues/18505) [BUG] MLX nvfp4: admitted request stalls in prefill at processed=total-1 with zero tokens for minutes under sustained single-slot load; only runner SIGTERM recovers `bug` `mlx` 💬2
- [#18507](https://github.com/ollama/ollama/issues/18507) Windows 11 26200, Ollama 0.34.1 — tray app shows icon but never starts server; manual ollama serve works perfectly `bug` 💬2
- [#18517](https://github.com/ollama/ollama/issues/18517) Proposal: Add `--nodraft` flag to `ollama run` to disable speculative decoding `feature request` 💬1
- [#18515](https://github.com/ollama/ollama/issues/18515) Add MLX support for Bonsai's low-bit (1-bit/2-bit) quantized weights to the new 0.19 MLX backend.
- [#18513](https://github.com/ollama/ollama/issues/18513) ollama cloud settings panel login with anonaddy.me email alias: Access blocked, please contact support. `bug` 💬1
- [#18509](https://github.com/ollama/ollama/issues/18509) Ollama refusing tool role, which always worked fine in llama.cpp with qwen. `bug` 💬1
- [#18506](https://github.com/ollama/ollama/issues/18506) glm-5.3-flash intermittently emits malformed string-encoded tool calls via Ollama Cloud `cloud`
- [#18502](https://github.com/ollama/ollama/issues/18502) linux: fix Vulkan inference support on ARM64 (PR implemented) `bug`

#### 🔒 Closed Issues
- [#18195](https://github.com/ollama/ollama/issues/18195) Support `spark2_5` architecture (Spark-X2.5-4B / 1.7B)
- [#18484](https://github.com/ollama/ollama/issues/18484) `deepseek-v4.1-flash:cloud` default reasoning level is not in its supported levels

### LiteLLM (`BerriAI/litellm`)

**Stars:** 59,022 · **Open issues:** 5,175 · **Last push:** <1h ago

On September 18, 2026, LiteLLM saw a significant maintenance day with no new releases but several important improvements through merged pull requests. Notably, version 1.101.1 was released, including a fix for Azure PTU spillover requests to be priced at standard token rates. Additionally, key refactors were made, such as the removal of obsolete code in the vertex AI and a drop of commented-out legacy implementations across various components. A pressing issue emerged with the bug report on streaming guardrails where value splits across SSE chunks can pass checks, highlighting potential vulnerabilities in the system's handling of data streams.

#### ✅ Merged PRs
- [#41469](https://github.com/BerriAI/litellm/pull/41469) fix(responses): drop top_p for gpt-5 reasoning models when drop_params is set
- [#41448](https://github.com/BerriAI/litellm/pull/41448) fix(passthrough): keep target URL query when client sends no query params
- [#41665](https://github.com/BerriAI/litellm/pull/41665) refactor(vertex_ai): remove constant-False is_using_v1beta1_features stub and its dead call sites
- [#41662](https://github.com/BerriAI/litellm/pull/41662) chore(streaming): remove retired ai21/maritalk/baseten/azure raw-bytes handlers and dead palm completion code
- [#41661](https://github.com/BerriAI/litellm/pull/41661) refactor(prometheus): remove unreferenced metric validators and pretty printers
- [#41660](https://github.com/BerriAI/litellm/pull/41660) chore(tests): remove fully commented-out proxy test files and their CI entries
- [#41654](https://github.com/BerriAI/litellm/pull/41654) test: remove 15 fully commented-out test files that collect no tests
- [#41652](https://github.com/BerriAI/litellm/pull/41652) refactor(langfuse): remove unreachable langfuse v1 logging path
- [#41648](https://github.com/BerriAI/litellm/pull/41648) test(streaming): remove commented-out retired-provider streaming tests
- [#41643](https://github.com/BerriAI/litellm/pull/41643) chore(proxy): remove unreferenced performance_utils profiling module
- [#41642](https://github.com/BerriAI/litellm/pull/41642) chore(proxy): delete deprecated unused litellm/proxy/_logging.py
- [#41641](https://github.com/BerriAI/litellm/pull/41641) chore(openai): drop commented-out legacy cost_per_token implementation
- [#41640](https://github.com/BerriAI/litellm/pull/41640) chore(tests): remove commented-out hf, petals and vertex ai completion blocks
- [#41443](https://github.com/BerriAI/litellm/pull/41443) test: delete unit-test assertions that pin cost-map prices, limits and deprecation dates
- [#41694](https://github.com/BerriAI/litellm/pull/41694) fix(proxy): propagate db model renames to key, team, org, project and user model allowlists
- [#41702](https://github.com/BerriAI/litellm/pull/41702) fix(bedrock): gate Invoke tool search on the model map for Opus 4.8 and gen 5 Claude
- [#40632](https://github.com/BerriAI/litellm/pull/40632) fix(ui): persist disabling cache control injection points on model update
- [#41678](https://github.com/BerriAI/litellm/pull/41678) ci(auto-merge): stop requiring Greptile and Bugbot on price sync pull requests
- [#41615](https://github.com/BerriAI/litellm/pull/41615) feat(router): add TypeSafe Jev as a complexity router classifier
- [#41571](https://github.com/BerriAI/litellm/pull/41571) feat(policy_engine): explicit priority for policy attachment execution order
- [#41704](https://github.com/BerriAI/litellm/pull/41704) chore(release): bump stable/1.101.x to 1.101.1
- [#41699](https://github.com/BerriAI/litellm/pull/41699) fix(fireworks_ai): restore supports_vision on minimax-m3 in the cost map
- [#41703](https://github.com/BerriAI/litellm/pull/41703) build(deps): bump soupsieve to 2.9.2 to clear the osv-scan advisories
- [#41569](https://github.com/BerriAI/litellm/pull/41569) fix(cost): price Azure PTU spillover requests at standard token rates
- [#41701](https://github.com/BerriAI/litellm/pull/41701) fix(license): backport the wildcard license auto_router grant to rc/1.102.0 (#41684)
- [#41697](https://github.com/BerriAI/litellm/pull/41697) fix(images): backport the image[] and mask[] form key drop to rc/1.102.0 (#39512)
- [#41578](https://github.com/BerriAI/litellm/pull/41578) feat(grafana): add all-metrics dashboard and fix stale dashboard_v2 gauges
- [#41536](https://github.com/BerriAI/litellm/pull/41536) test(e2e): cover bedrock batch file upload and create in the us-gov-west-1 partition
- [#41698](https://github.com/BerriAI/litellm/pull/41698) fix(license): backport #41684 to stable/1.101.x so a wildcard license grants auto_router
- [#41607](https://github.com/BerriAI/litellm/pull/41607) feat(proxy): add TypeSafe AI Jev evaluate passthrough with registry-priced spend tracking
- [#41686](https://github.com/BerriAI/litellm/pull/41686) fix(team): keep a forked member budget's reset window and audit bulk member budget writes
- [#40875](https://github.com/BerriAI/litellm/pull/40875) fix(ui): list every provider in the cache leakage by-model table
- [#41684](https://github.com/BerriAI/litellm/pull/41684) fix(license): let a wildcard allowed_features license grant the auto_router feature
- [#41689](https://github.com/BerriAI/litellm/pull/41689) fix(responses): keep the addressed response id off bridged provider requests
- [#41672](https://github.com/BerriAI/litellm/pull/41672) feat(cli): rename lite autoroute up/down to start/stop, keeping the old names as deprecated aliases
- [#41690](https://github.com/BerriAI/litellm/pull/41690) refactor(rust): extract provider translations
- [#41632](https://github.com/BerriAI/litellm/pull/41632) feat(management_v1): bulk update team member budgets
- [#39512](https://github.com/BerriAI/litellm/pull/39512) fix(images): stop forwarding the raw image[] and mask[] form keys
- [#41419](https://github.com/BerriAI/litellm/pull/41419) fix(bedrock): never emit Converse cachePoint for OpenAI-family models
- [#41444](https://github.com/BerriAI/litellm/pull/41444) fix(scim): align pagination `count` validation with RFC 7644
- [#41673](https://github.com/BerriAI/litellm/pull/41673) feat(cli): deprecate the litellm-proxy entrypoint in favour of lite
- [#41542](https://github.com/BerriAI/litellm/pull/41542) fix(bedrock): support aws-sdk-bedrock-runtime 0.10/0.11 in Bedrock Realtime
- [#41493](https://github.com/BerriAI/litellm/pull/41493) fix(anthropic-bridge): convert mid-conversation system turns to user turns on /v1/messages to chat completions
- [#41374](https://github.com/BerriAI/litellm/pull/41374) fix(ui): keep untimed guardrail entries on the request lifecycle
- [#41373](https://github.com/BerriAI/litellm/pull/41373) fix(tests): resolve the integration support package without run.py's PYTHONPATH
- [#41659](https://github.com/BerriAI/litellm/pull/41659) chore: bump litellm-proxy-extras 0.4.98 -> 0.4.99
- [#41488](https://github.com/BerriAI/litellm/pull/41488) fix(budgets): page end-user cache invalidation after a budget reset
- [#41570](https://github.com/BerriAI/litellm/pull/41570) chore(prices): sync Together AI prices: 6 models, 6 deprecated [sync failed: Google Gemini]
- [#41623](https://github.com/BerriAI/litellm/pull/41623) fix(mock_completion): keep the resolved provider so router custom pricing resolves for azure_ai deployments
- [#41635](https://github.com/BerriAI/litellm/pull/41635) test(together_ai): stop pinning successor deprecation status
- [#41633](https://github.com/BerriAI/litellm/pull/41633) fix(proxy): reject non-string model with 400 and log its spend as unknown-model
- [#37983](https://github.com/BerriAI/litellm/pull/37983) perf(spend_tracking): index LiteLLM_SpendLogs by (api_key, startTime)
- [#41627](https://github.com/BerriAI/litellm/pull/41627) test(fireworks_ai): stop pinning vision support on minimax-m3
- [#41550](https://github.com/BerriAI/litellm/pull/41550) refactor(ocr): mirror Python provider layout and preserve tests
- [#41619](https://github.com/BerriAI/litellm/pull/41619) fix(mcp): preserve request-selected guardrails during tool execution
- [#41609](https://github.com/BerriAI/litellm/pull/41609) fix(mcp): restrict health discovery to virtual key grants
- [#41479](https://github.com/BerriAI/litellm/pull/41479) refactor(rust_bridge): declarative route catalog and shared runtime selection
- [#41616](https://github.com/BerriAI/litellm/pull/41616) fix(e2e): clear the three standing errors in the scheduled Buildkite suite
- [#41531](https://github.com/BerriAI/litellm/pull/41531) feat(rust): map Anthropic Messages transformations
- [#41573](https://github.com/BerriAI/litellm/pull/41573) test(management): cover project authorization lifecycle
- [#41220](https://github.com/BerriAI/litellm/pull/41220) fix(guardrails): give post-call scans the scoped request conversation and tools
- [#41576](https://github.com/BerriAI/litellm/pull/41576) feat(openrouter): add stealth/union-alpha to the model cost map
- [#41558](https://github.com/BerriAI/litellm/pull/41558) fix(guardrails): stream Prompt Security post_call redactions in incremental_diff mode
- [#41568](https://github.com/BerriAI/litellm/pull/41568) test(e2e): drop the auto-router select "opens below" spec
- [#41563](https://github.com/BerriAI/litellm/pull/41563) test(budgets): cover management null handling
- [#40934](https://github.com/BerriAI/litellm/pull/40934) fix(logging): scan each log record once and collapse base64 payloads before the secret regex
- [#41527](https://github.com/BerriAI/litellm/pull/41527) test: fix seven tests left stale by #41311, #41337, #39996, #41310, #41289 and #41315
- [#41140](https://github.com/BerriAI/litellm/pull/41140) fix(otel v2): map the caller's Langfuse user, session and tags onto the root and generation spans
- [#41551](https://github.com/BerriAI/litellm/pull/41551) test(e2e): read a deleted key back as deleted, not as a 404
- [#41524](https://github.com/BerriAI/litellm/pull/41524) test(aws): verify rotated secret value
- [#41498](https://github.com/BerriAI/litellm/pull/41498) fix(otel): fit per-index OpenInference messages to the span's remaining attribute budget
- [#41525](https://github.com/BerriAI/litellm/pull/41525) feat(proxy): let team admins edit rpm_limit and max_budget when enabled
- [#41508](https://github.com/BerriAI/litellm/pull/41508) feat(router): discover token limits for hosted OpenAI-compatible models
- [#41507](https://github.com/BerriAI/litellm/pull/41507) fix(spend_tracking): attribute router-rejected requests to the model group provider

#### 🐛 New Issues
- [#41553](https://github.com/BerriAI/litellm/issues/41553) cadence 319f427c: 4 new red `potential-duplicate` `ci-cadence` 💬4
- [#41611](https://github.com/BerriAI/litellm/issues/41611) [Bug]: Streaming guardrails: value split across two SSE chunks can pass per-chunk checks `bug` `proxy` `llm translation` 💬2
- [#41605](https://github.com/BerriAI/litellm/issues/41605) [Bug]: Synchronous Azure deployment pricing can be recorded as $0 `bug` `proxy` `llm translation` 💬2
- [#41595](https://github.com/BerriAI/litellm/issues/41595) /v1/models does not respect Team member allowed_models restrictions `llm translation` 💬2
- [#41639](https://github.com/BerriAI/litellm/issues/41639) [Bug]: Vertex AI 400 rejection when tools define top-level anyOf parameter schemas without type: object `bug` `proxy` `llm translation` 💬1
- [#41575](https://github.com/BerriAI/litellm/issues/41575) `/customer/block` returns 500 (`AttributeError: 'LiteLLM_EndUserTable' object has no attribute 'get'`) while the DB flag is still updated 💬1
- [#41580](https://github.com/BerriAI/litellm/issues/41580) [Bug]: Pause (blocked) and delete are ignored at routing time for wildcard-model deployments — PatternMatchRouter pool is never reconciled 💬1
- [#41600](https://github.com/BerriAI/litellm/issues/41600) [Feature]: Presidio output_parse_pii — derive placeholders from the value so tokens stay stable across requests 💬1
- [#41599](https://github.com/BerriAI/litellm/issues/41599) [Bug]: Datadog LLM Observability callback drops session_id from request metadata 💬1
- [#41598](https://github.com/BerriAI/litellm/issues/41598) [Bug] AdaptiveRouter alpha=0 persisted state crashes thompson_sample with gammavariate ValueError — still unfixed in v1.95.0 (production evidence) 💬1
- [#41548](https://github.com/BerriAI/litellm/issues/41548) [Bug]: Migration 20260831120001 fails on partitioned "LiteLLM_SpendLogs" table (cannot create index concurrently) `proxy` 💬1
- [#41544](https://github.com/BerriAI/litellm/issues/41544) [Bug]: Bedrock audio transcription fails with HTTP 400 validation error (System message incompatible with audio blocks) `bug` `proxy` `llm translation` 💬1
- [#41552](https://github.com/BerriAI/litellm/issues/41552) regression: test_chat_completions_stream_exports_complete_trace red at 319f427c `llm translation` `potential-duplicate` `regression` `ci-cadence` 💬1
- [#41610](https://github.com/BerriAI/litellm/issues/41610) [Bug]: enforce_model_rate_limits — deployment TPM is never enforced for streaming requests (hidden_params.litellm_model_name is None) `bug` `proxy` `llm translation`
- [#41714](https://github.com/BerriAI/litellm/issues/41714) [Bug]: POST /model/new with a typesafe/* model saves the row then answers 500 because typesafe is not a routable provider `bug` `proxy` `llm translation`
- [#41713](https://github.com/BerriAI/litellm/issues/41713) [Bug]: POST /auto_router/test_routing with classifier_type jev and no TypeSafe key returns a bare 500 while validate says valid `bug` `proxy` `llm translation`
- [#41712](https://github.com/BerriAI/litellm/issues/41712) [Bug]: Admin UI has no Jev classifier option and labels Jev auto routers as Heuristic `bug` `llm translation` `ui-dashboard`
- [#41680](https://github.com/BerriAI/litellm/issues/41680) [Feature]: scope guardrail policies to specific MCP servers `proxy`
- [#41637](https://github.com/BerriAI/litellm/issues/41637) [Feature]: Filter Internal Users by personal model access (and optional Personal Models column)
- [#41668](https://github.com/BerriAI/litellm/issues/41668) [Feature]: Model lifecycle management: successor models, deprecation response headers, provider lifecycle sync, and opt-in enforcement `enhancement` `proxy` `llm translation`
- [#41624](https://github.com/BerriAI/litellm/issues/41624) [Feature]: API endpoint to manually reset a Tag's spend/budget `proxy` `llm translation`
- [#41601](https://github.com/BerriAI/litellm/issues/41601) [Bug]: Datadog LLM Obs embedding spans lack top-level model_name, causing "Partial cost" `llm translation`
- [#41591](https://github.com/BerriAI/litellm/issues/41591) [Bug]: OTel v2: gen_ai.output.messages and gen_ai.response.finish_reasons missing on Responses API (/v1/responses) spans `bug` `proxy`
- [#41589](https://github.com/BerriAI/litellm/issues/41589) [Bug]: /vertex_ai/live cost/logging doesn't resolve model_group_alias `bug` `proxy` `llm translation`
- [#41579](https://github.com/BerriAI/litellm/issues/41579) adaptive_router: thompson_sample has no alpha/beta floor — one persisted alpha=0 cell bricks the router with HTTP 500 (gammavariate)
- [#41549](https://github.com/BerriAI/litellm/issues/41549) regression: test_failing_requests_do_not_grow_rss_or_stored_request red at 319f427c `regression` `ci-cadence`
- [#41535](https://github.com/BerriAI/litellm/issues/41535) [Bug]: /v1/realtime drops translation config for gemini-3.5-live-translate-preview, model streams silence `proxy` `llm translation`
- [#41534](https://github.com/BerriAI/litellm/issues/41534) [Bug]: Gemini thought-signature embedded in tool_call.id leaks into Responses API input[N].id, causing OpenAI 400 "string too long" on router fallback `llm translation`

#### 🔒 Closed Issues
- [#16073](https://github.com/BerriAI/litellm/issues/16073) [Feature]: Request to Add fal.ai Models Support to LiteLLM
- [#27830](https://github.com/BerriAI/litellm/issues/27830) [Feature]: Auto-populate max_input_tokens/max_output_tokens for hosted vLLM/OpenAI-like models
- [#24771](https://github.com/BerriAI/litellm/issues/24771) MCP OAuth2 callback redirects to non-existent /ui/mcp/oauth/callback
- [#29764](https://github.com/BerriAI/litellm/issues/29764) [Bug]: Anthropic `/v1/messages/count_tokens` ignores configured `api_base` and hardcodes `api.anthropic.com`, breaking vLLM Anthropic-compatible backends
- [#30033](https://github.com/BerriAI/litellm/issues/30033) [Feature]: Auto-tag generic pass-through requests by upstream URL for observability (Langfuse / Spend Logs)
- [#30135](https://github.com/BerriAI/litellm/issues/30135) [Bug]: tiered pricing fields (`*_above_200k_tokens`) ignored in cost calculations — base rate applied flat to all tokens
- [#41553](https://github.com/BerriAI/litellm/issues/41553) cadence 319f427c: 4 new red
- [#23339](https://github.com/BerriAI/litellm/issues/23339) [Bug]: Support cursor:// MCP callback redirect schema
- [#23352](https://github.com/BerriAI/litellm/issues/23352) [Bug]: Custom LLM providers silently bypassed when model name matches built-in provider
- [#24500](https://github.com/BerriAI/litellm/issues/24500) Passthrough endpoints with include_subpath and auth disabled reject subpath requests with 401
- [#28083](https://github.com/BerriAI/litellm/issues/28083) [Bug]: Bedrock Invoke rejects `tool_search_tool_regex_20251119` server-side tool type (Anthropic tool-search beta)
- [#28763](https://github.com/BerriAI/litellm/issues/28763) [Feature]: Add native DashScope / Alibaba Cloud image generation support for Qwen-Image and Wan models
- [#30126](https://github.com/BerriAI/litellm/issues/30126) [Bug]: `/cursor/chat/completions` is not logged in LiteLLM 1.88.1
- [#30320](https://github.com/BerriAI/litellm/issues/30320) [Bug]: litellm[proxy] + vertex_ai models 500s on every request with raw "No module named 'google'" — google-auth missing from proxy extra, no startup validation
- [#30667](https://github.com/BerriAI/litellm/issues/30667) [Bug]: Streaming pass-through requests that fail mid-stream (timeout / connection error) log no usage/cost
- [#41605](https://github.com/BerriAI/litellm/issues/41605) [Bug]: Synchronous Azure deployment pricing can be recorded as $0
- [#41042](https://github.com/BerriAI/litellm/issues/41042) Add Bourse as an OpenAI-compatible provider
- [#35599](https://github.com/BerriAI/litellm/issues/35599) /v1/rag/query endpoint does not resolve vector store credentials from vector_store_registry config
- [#30308](https://github.com/BerriAI/litellm/issues/30308) [Feature]: Native image_generation routing for EmpirioLabs (JSON-registry provider)
- [#30311](https://github.com/BerriAI/litellm/issues/30311) [Bug]: Migration job in helm chart does not support envFrom secrets or configmaps
- [#30313](https://github.com/BerriAI/litellm/issues/30313) [Bug]: ollama_chat sends remote http(s) image_url verbatim as base64 → "illegal base64 data at input byte 5"
- [#35229](https://github.com/BerriAI/litellm/issues/35229) [Bug]: Snowflake Claude provider drops cache_creation_input_tokens and cache_read_input_tokens from response usage
- [#41599](https://github.com/BerriAI/litellm/issues/41599) [Bug]: Datadog LLM Observability callback drops session_id from request metadata
- [#41598](https://github.com/BerriAI/litellm/issues/41598) [Bug] AdaptiveRouter alpha=0 persisted state crashes thompson_sample with gammavariate ValueError — still unfixed in v1.95.0 (production evidence)
- [#41421](https://github.com/BerriAI/litellm/issues/41421) [Bug]: LiteLLM Proxy 1.100.0 serializes image-edit uploads as strings for OpenAI GPT Image models
- [#40445](https://github.com/BerriAI/litellm/issues/40445) [Feature]: Migrate Bedrock Realtime handler for aws-sdk-bedrock-runtime 0.10/0.11 compatibility
- [#41519](https://github.com/BerriAI/litellm/issues/41519) CI cadence heartbeat

### Unsloth (`unslothai/unsloth`)

**Stars:** 76,318 · **Open issues:** 1,237 · **Last push:** <1h ago

On September 18, 2026, Unsloth released version 0.1.810-beta, which introduces a new Docker image supporting both NVIDIA and AMD platforms, multi-user accounts with settings isolation, and significant improvements in RDNA1+2, FP8/INT8 diffusion capabilities, along with various training and inference enhancements. Noteworthy merged features include crucial fixes for cache recovery and red checks on the main branch, as well as adjustments to ensure Studio can accurately handle model precision requests and live backend status. However, a significant new issue has been reported regarding a regression in GGUF inference throughput following the latest update, indicating a potential area for immediate focus.

#### 🚀 New Releases
- [v0.1.810-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.810-beta) Docker + Multi User + AMD Support

#### ✅ Merged PRs
- [#11220](https://github.com/unslothai/unsloth/pull/11220) Stop the denied llama.cpp cache recovery littering, and say what Windows allows
- [#11222](https://github.com/unslothai/unsloth/pull/11222) Repair the four checks that went red on main today
- [#11031](https://github.com/unslothai/unsloth/pull/11031) GRPO: forward every vision kwarg, and accept an image column holding a list
- [#11125](https://github.com/unslothai/unsloth/pull/11125) Studio: give a desktop launch the ROCm environment a terminal launch has
- [#11110](https://github.com/unslothai/unsloth/pull/11110) studio/frontend: resolve @xmldom/xmldom past the 0.8.14/0.8.15 advisories
- [#10690](https://github.com/unslothai/unsloth/pull/10690) Studio: detect tool support from Jinja syntax instead of substrings
- [#11107](https://github.com/unslothai/unsloth/pull/11107) Put back the dimensions GGUF trims, so a GGUF pick with Precision Off loads
- [#11211](https://github.com/unslothai/unsloth/pull/11211) Stop the settings number fields stealing focus from each other
- [#11204](https://github.com/unslothai/unsloth/pull/11204) Keep the transcribed repo id rule ASCII, as the Hub's is
- [#11215](https://github.com/unslothai/unsloth/pull/11215) Bump install.sh / install.ps1 pins to unsloth>=2026.9.6
- [#11207](https://github.com/unslothai/unsloth/pull/11207) Repair the three checks that are red on main itself
- [#11169](https://github.com/unslothai/unsloth/pull/11169) Do not inject the GRPO prompt-trim block into a TRL that cannot host it
- [#11210](https://github.com/unslothai/unsloth/pull/11210) Raise the unsloth_zoo floor to 2026.9.5 now that the compiled-path sentinel fix shipped
- [#11205](https://github.com/unslothai/unsloth/pull/11205) Reject an hf_xet that is only an empty namespace package
- [#10472](https://github.com/unslothai/unsloth/pull/10472) Kaggle GPU harness: an all-[N/A] listing is cannot attribute, not no GPU
- [#11206](https://github.com/unslothai/unsloth/pull/11206) Baseline the four huggingface_hub 1.32.0 sandbox findings
- [#11011](https://github.com/unslothai/unsloth/pull/11011) Studio: judge a local chat model by the transformers 5 modality keys, not text_config
- [#11070](https://github.com/unslothai/unsloth/pull/11070) Studio: stop declaring a live backend dead, and keep a crashed worker's stderr
- [#11156](https://github.com/unslothai/unsloth/pull/11156) Docker: stop notebooks from uninstalling the baked packages
- [#11157](https://github.com/unslothai/unsloth/pull/11157) Docker: keep the startup health checks off the HTTP proxy
- [#11032](https://github.com/unslothai/unsloth/pull/11032) Studio: an AMD owner asking for a precision outright is told the real reason
- [#10533](https://github.com/unslothai/unsloth/pull/10533) Installer: recover from and explain an unreadable llama.cpp cache on Windows
- [#11067](https://github.com/unslothai/unsloth/pull/11067) Route save_method="lora" to the adapter save instead of the merge
- [#11025](https://github.com/unslothai/unsloth/pull/11025) Studio: honour an unmeasured context request and price the real attention plan
- [#11167](https://github.com/unslothai/unsloth/pull/11167) Fall back to HTTPS when hf_xet is installed but cannot be imported
- [#11203](https://github.com/unslothai/unsloth/pull/11203) Format the two files main is failing its own pre-commit hook on
- [#11198](https://github.com/unslothai/unsloth/pull/11198) Catch a temporary patch that stops applying instead of only logging it
- [#11122](https://github.com/unslothai/unsloth/pull/11122) Desktop: build and ship a native Windows ARM64 installer
- [#11199](https://github.com/unslothai/unsloth/pull/11199) Bump the actions group across 1 directory with 10 updates
- [#11094](https://github.com/unslothai/unsloth/pull/11094) Unsloth Studio Installer: hold the install lock as a file as well as a mutex
- [#11175](https://github.com/unslothai/unsloth/pull/11175) Turn the CUDA graph off for MiniMax-H3: measured 1.0018x for 3.93 GB
- [#11119](https://github.com/unslothai/unsloth/pull/11119) Look for nvidia-smi everywhere it actually is
- [#11168](https://github.com/unslothai/unsloth/pull/11168) Stop a removed torchao class from killing plain LoRA
- [#10977](https://github.com/unslothai/unsloth/pull/10977) Studio: serve an installed MLX checkpoint whose config drops its vision sub-config
- [#11136](https://github.com/unslothai/unsloth/pull/11136) Track PyPI for the transformers compat matrix
- [#11194](https://github.com/unslothai/unsloth/pull/11194) Define everything Refresh-Environment calls before the PSModulePath test runs it
- [#10922](https://github.com/unslothai/unsloth/pull/10922) Studio: keep a reasoning page start below its end
- [#11077](https://github.com/unslothai/unsloth/pull/11077) Fix the cold unsloth.save import, the preview role map and the GPU memory cap
- [#11009](https://github.com/unslothai/unsloth/pull/11009) Take the compile-cache bundle write off the image generation request path
- [#11023](https://github.com/unslothai/unsloth/pull/11023) Diagnose torch and triton version skew at import time
- [#10883](https://github.com/unslothai/unsloth/pull/10883) Studio: official image picks default to the hosted FP8 or INT8 checkpoint
- [#11080](https://github.com/unslothai/unsloth/pull/11080) Move the Studio MLX pins to mlx 0.32.2 and mlx-vlm 0.7.1
- [#11153](https://github.com/unslothai/unsloth/pull/11153) Studio: do not run Gemma tool call examples written inside code blocks
- [#10970](https://github.com/unslothai/unsloth/pull/10970) Studio: serve every image an MLX conversation carries, not just the newest
- [#10962](https://github.com/unslothai/unsloth/pull/10962) perf(studio): keep MLX VLM generation on one stream
- [#10645](https://github.com/unslothai/unsloth/pull/10645) Studio: assert the argv, not the call count, in the shutdown spawn-refusal test
- [#11123](https://github.com/unslothai/unsloth/pull/11123) Release: stop publishing standalone signed scripts
- [#11130](https://github.com/unslothai/unsloth/pull/11130) Stop the empty-logits sentinel from claiming protocol dunders it cannot honour
- [#11192](https://github.com/unslothai/unsloth/pull/11192) Keep every nested RoPE base, and never put a per-label mapping in rope_theta
- [#11129](https://github.com/unslothai/unsloth/pull/11129) Pin every rank of a distributed launch to its own device, not just quantized ones
- [#11022](https://github.com/unslothai/unsloth/pull/11022) Studio: reap the llama-server tree on Windows unload, and unblock a dead spawned backend
- [#11004](https://github.com/unslothai/unsloth/pull/11004) Report the video progress the GPU has actually done
- [#11024](https://github.com/unslothai/unsloth/pull/11024) Installers: require x64 Python on Windows on ARM, and respect active conda
- [#11020](https://github.com/unslothai/unsloth/pull/11020) Resolve the per layer device through a helper instead of a raw index
- [#11190](https://github.com/unslothai/unsloth/pull/11190) Model picker: collapse a single downloaded quant again
- [#11120](https://github.com/unslothai/unsloth/pull/11120) Studio backend tests: pin the logical CPU count in the oversubscribed-threads spill test
- [#11038](https://github.com/unslothai/unsloth/pull/11038) Resolve apply_qkv and apply_o defensively, and explain zero patch counts
- [#11072](https://github.com/unslothai/unsloth/pull/11072) Studio: use --reasoning where available and name the compressed-tensors refusal
- [#11037](https://github.com/unslothai/unsloth/pull/11037) Keep the RoPE base frequency on transformers 5, and make triton optional
- [#11152](https://github.com/unslothai/unsloth/pull/11152) Studio: pass search results and documents through to the model on /v1/messages
- [#11150](https://github.com/unslothai/unsloth/pull/11150) Studio: show disk space in the same GB as model sizes
- [#11155](https://github.com/unslothai/unsloth/pull/11155) Studio: make UNSLOTH_DISABLE_UPDATE_CHECK also stop the llama.cpp and whisper.cpp checks
- [#11151](https://github.com/unslothai/unsloth/pull/11151) Exit with code 130 when unsloth train is stopped with Ctrl+C
- [#11149](https://github.com/unslothai/unsloth/pull/11149) Studio: import ShareGPT chats with the right roles
- [#11014](https://github.com/unslothai/unsloth/pull/11014) Target unfused MoE expert parameters instead of dropping them
- [#10957](https://github.com/unslothai/unsloth/pull/10957) Studio: models.dev catalog for reasoning and image options on other API providers
- [#11058](https://github.com/unslothai/unsloth/pull/11058) Run the formatter on the one file main left drifted
- [#11182](https://github.com/unslothai/unsloth/pull/11182) Clear every GPU visibility mask the ROCm probe test drives production with
- [#11181](https://github.com/unslothai/unsloth/pull/11181) Check the MLX audit cleaned up its own temp file, not the shared temp dir
- [#11178](https://github.com/unslothai/unsloth/pull/11178) Stop a shared embedder setup stranding its model in the next test
- [#11185](https://github.com/unslothai/unsloth/pull/11185) Studio: report a model reply that finished with nothing in it
- [#11179](https://github.com/unslothai/unsloth/pull/11179) Studio: shrink the resume glyph, trim the queueing hint and round the scroll corner
- [#11000](https://github.com/unslothai/unsloth/pull/11000) Studio: keep the Hub token off redirect targets and clear a blank HF_ENDPOINT
- [#11164](https://github.com/unslothai/unsloth/pull/11164) Stop two CI guards failing for the machine they ran on
- [#11159](https://github.com/unslothai/unsloth/pull/11159) Read the resident tensor names only where they are used
- [#11138](https://github.com/unslothai/unsloth/pull/11138) Read every uv and pip resolver flag through one boolish reader
- [#11145](https://github.com/unslothai/unsloth/pull/11145) Let the formatter fixed-point guard start on Windows
- [#11158](https://github.com/unslothai/unsloth/pull/11158) Stop the scripts that rewrite tracked files turning them CRLF on Windows
- [#11139](https://github.com/unslothai/unsloth/pull/11139) Repair the six CI checks that are red on main itself

#### 🐛 New Issues
- [#11221](https://github.com/unslothai/unsloth/issues/11221) [Studio Regression] GGUF inference throughput is slower after v0.1.810-beta update
- [#11219](https://github.com/unslothai/unsloth/issues/11219) MTP drafter crashes with GGML_ASSERT(ggml_can_repeat(b, a)) during graph build (b11007-mix, RTX 5080) 💬1
- [#11187](https://github.com/unslothai/unsloth/issues/11187) [Bug] Studio not starting on 0.0.0.0 `feature request` `bug` 💬1
- [#11189](https://github.com/unslothai/unsloth/issues/11189) [Feature] Load model button in API board `feature request`
- [#11241](https://github.com/unslothai/unsloth/issues/11241) Backend CI (Python 3.13, l-r): a withheld model 500s instead of 404ing, from state a neighbouring test leaves behind
- [#11239](https://github.com/unslothai/unsloth/issues/11239) [Feature]Proxy Support `feature request`
- [#11235](https://github.com/unslothai/unsloth/issues/11235) [Feature] AMD: the ROCm Docker image has no JupyterLab, so the notebooks have no AMD on-ramp
- [#11186](https://github.com/unslothai/unsloth/issues/11186) [Bug] "Thread __LOCALID_s9k2Cx0 was not persisted" when uploaded documents. `feature request` `bug`
- [#11184](https://github.com/unslothai/unsloth/issues/11184) [Feature] Implement Vulkan Training/Fine-tuning `feature request`

#### 🔒 Closed Issues
- [#2491](https://github.com/unslothai/unsloth/issues/2491) [Bug] Unsupported conversion from f16 to f16 LLVM ERROR: Unsupported rounding mode for conversion.
- [#2587](https://github.com/unslothai/unsloth/issues/2587) [Bug]RuntimeError: 'Qwen3Attention' object has no attribute 'apply_qkv'
- [#8246](https://github.com/unslothai/unsloth/issues/8246) Can't load NVFP4 on 5060TI 16 GB
- [#3538](https://github.com/unslothai/unsloth/issues/3538) [Bug] Sampling inside TrainingCallback gives `ValueError: Invalid target device: None`
- [#4476](https://github.com/unslothai/unsloth/issues/4476) [Feature] Nemotron 30B support NemotronHTopkRouter for lora
- [#11017](https://github.com/unslothai/unsloth/issues/11017) [Feature]Add easy model favoriting
- [#9697](https://github.com/unslothai/unsloth/issues/9697) [Bug] KV cache quantization is not reflected in context length with TP enabled
- [#3605](https://github.com/unslothai/unsloth/issues/3605) [Bug] `ValueError: Invalid input type. Must be a single image, a list of images, or a list of batches of images.` while doing GRPO on Gemma3-4B with multiple images
- [#9653](https://github.com/unslothai/unsloth/issues/9653) [Bug] 256k context selected, loads only 4k
- [#5871](https://github.com/unslothai/unsloth/issues/5871) [Bug] Conflict Between Unsloth Studio Installation and Anaconda Base Environment [Windows 11]
- [#1713](https://github.com/unslothai/unsloth/issues/1713) Unsloth overwrites the forward call function of a model loaded by huggingface library
- [#7843](https://github.com/unslothai/unsloth/issues/7843) [Bug] Studio local Qwen3.5-2B QLoRA worker exits on first chat generation
- [#3130](https://github.com/unslothai/unsloth/issues/3130) NameError: merge_quantization_configs in patch_merge_quantization_configs on Kaggle P100
- [#11078](https://github.com/unslothai/unsloth/issues/11078) [Question] Model support
- [#4557](https://github.com/unslothai/unsloth/issues/4557) [Bug] .save_pretrained_gguf failing issue on databricks
- [#9094](https://github.com/unslothai/unsloth/issues/9094) [Studio Bug] Cached Qwen3.5-9B is re-downloaded, stalls on Xet, then fails after 14 minutes
- [#1792](https://github.com/unslothai/unsloth/issues/1792) Failure!! Saving to safetensors, not bin format in Colab
- [#10489](https://github.com/unslothai/unsloth/issues/10489) [Bug] Studio memory estimate conflicts with context warning and loader KV estimate
- [#10951](https://github.com/unslothai/unsloth/issues/10951) [Unsloth Desktop > API] Installed MLX model still fails auto-switch with 404 unless preloaded
- [#6960](https://github.com/unslothai/unsloth/issues/6960) GRPO: forward TRL 1.7 VLM kwargs (spatial_shapes / num_tiles / image_position_ids) in the logprob replacement
- [#10520](https://github.com/unslothai/unsloth/issues/10520) [Bug] Unsloth Desktop fails with "Unsloth isn't running" due to aggressive local loopback/health-check timeout with third-party firewalls (Sphinx WFC)
- [#8933](https://github.com/unslothai/unsloth/issues/8933) [Bug] Failed to import ML libraries: module 'torch' has no attribute 'float8_e8m0fnu'
- [#9756](https://github.com/unslothai/unsloth/issues/9756) [Bug][Studio/Windows] GUI never auto-spawns backend when health probe fails — hangs on "Getting things ready"
- [#9790](https://github.com/unslothai/unsloth/issues/9790) [Bug] llama-server.exe holds ~15GB mmap'd model memory (Shareable) after unloading model in Desktop app
- [#2076](https://github.com/unslothai/unsloth/issues/2076) Unsloth patched 40 layers with 0 QKV layers, 0 O layers and 0 MLP layers.
- [#4127](https://github.com/unslothai/unsloth/issues/4127) DoRA + Gemma3 crashes: temporary_patches/gemma.py forces fp16 on q_proj input, breaks DoRA
- [#7526](https://github.com/unslothai/unsloth/issues/7526) `--chat-template-kwargs` is deprecated, use instead `--reasoning`

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,096 · **Open issues:** 379 · **Last push:** 1h ago

On September 18, 2026, there were no new releases for AIBrix. However, significant progress was made with the merging of two important pull requests: one addressed a data race and stale snapshots issue in `utils.Registry`, while the other introduced Redis-backed session-key pinning to enhance cross-replica agentic routing. Additionally, two new issues emerged, including a feature request to check free GPU memory before activating ModelClaim, and a bug concerning PodArray's lazy indexing that could lead to concurrent mutations of shared snapshots.

#### ✅ Merged PRs
- [#2728](https://github.com/vllm-project/aibrix/pull/2728) [Bug] Fix data race and stale snapshots in utils.Registry
- [#2742](https://github.com/vllm-project/aibrix/pull/2742) [Feat] Add Redis-backed session-key pinning for cross-replica agentic routing

#### 🐛 New Issues
- [#2744](https://github.com/vllm-project/aibrix/issues/2744) [Feature] Check free GPU memory before ModelClaim activation `triage/needs-information` `kind/feature` `area/website` `area/runtime` 💬2
- [#2741](https://github.com/vllm-project/aibrix/issues/2741) [Bug] PodArray lazy indexing mutates shared snapshots concurrently `kind/bug` `area/website` 💬1

#### 🔒 Closed Issues
- [#2741](https://github.com/vllm-project/aibrix/issues/2741) [Bug] PodArray lazy indexing mutates shared snapshots concurrently
- [#2724](https://github.com/vllm-project/aibrix/issues/2724) [Bug] vLLM/TRT-LLM PD paths still re-serialize the request body via map[string]any, breaking prompt_token_ids stability and prefix-cache reuse

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 5,851 · **Open issues:** 521 · **Last push:** 4h ago

On September 18, 2026, there were no new releases for Semantic Router; however, several important updates were merged, including a bug fix to ensure that the DSL validation and compilation respects constraint diagnostics (#3878) and enhancements to suppress header mutations during body responses in full-duplex streaming (#3899). Notable features introduced include the addition of automatic output budgets and clarification of model inventory (#3893), as well as binding CK ROCm operating points to qualified execution (#3897). A significant new issue was raised regarding the rejection of ambiguous workflow step IDs before resolving access lists (#3881), highlighting ongoing concerns about workflow clarity. Overall, the day was largely routine in terms of maintenance, yet the discussed issues and features point to ongoing improvements and community engagement within the Semantic Router project.

#### ✅ Merged PRs
- [#3878](https://github.com/vllm-project/semantic-router/pull/3878) [Bug] Make dsl validate and compile honor constraint diagnostics
- [#3899](https://github.com/vllm-project/semantic-router/pull/3899) [Bug] Suppress header mutations on body response in full-duplex strea…
- [#3893](https://github.com/vllm-project/semantic-router/pull/3893) [Feature] Add automatic output budgets and clarify model inventory
- [#3900](https://github.com/vllm-project/semantic-router/pull/3900) [CI/Build] Keep skipped verification job names readable
- [#3897](https://github.com/vllm-project/semantic-router/pull/3897) [Feature] Bind CK ROCm operating points to qualified execution
- [#3896](https://github.com/vllm-project/semantic-router/pull/3896) [Bug] Separate windowed document budgets from model forward limits
- [#3895](https://github.com/vllm-project/semantic-router/pull/3895) [Bug] Reject ambiguous workflow access identities
- [#3852](https://github.com/vllm-project/semantic-router/pull/3852) [CI/Build] Unify product verification and qualify Vela CPU regressions
- [#3685](https://github.com/vllm-project/semantic-router/pull/3685) [Bug] Prefer better-covered intelligence evidence when scores tie and filter eligible candidates before scoring
- [#3841](https://github.com/vllm-project/semantic-router/pull/3841) [Bug] Search a long vector store query by every window
- [#3880](https://github.com/vllm-project/semantic-router/pull/3880) [Feature] Add a replica-local Router status contract
- [#3851](https://github.com/vllm-project/semantic-router/pull/3851) [Feature] Add offline Candle CPU compatibility receipts
- [#3443](https://github.com/vllm-project/semantic-router/pull/3443) [Feature] Accept --runtime podman as a first-class installer option

#### 🐛 New Issues
- [#3881](https://github.com/vllm-project/semantic-router/issues/3881) [Bug] Reject ambiguous workflow step IDs before resolving access_list `bug` `accepted` `wg/mom-routing` 💬3
- [#3892](https://github.com/vllm-project/semantic-router/issues/3892) [Bug] header mutations when responding to body in full-duplex-streamed mode is likely ignored by clients `bug` `accepted` `wg/data-plane-networking` 💬2
- [#3888](https://github.com/vllm-project/semantic-router/issues/3888) [Community] Promote six Committers, FAUST to Maintainer, and existing Workgroup Members to Leads `community` `accepted` `owner/maintainers` 💬2

#### 🔒 Closed Issues
- [#3441](https://github.com/vllm-project/semantic-router/issues/3441) [Feature] Add explicit Podman runtime selection to the installer
- [#3840](https://github.com/vllm-project/semantic-router/issues/3840) [Bug] Vector store search reads only the first window of a long query
- [#3567](https://github.com/vllm-project/semantic-router/issues/3567) [Bug] Prefer better-covered intelligence evidence when routing quality scores tie
- [#3291](https://github.com/vllm-project/semantic-router/issues/3291) [CI] Use one image catalog for docker-validate and docker-publish
- [#3881](https://github.com/vllm-project/semantic-router/issues/3881) [Bug] Reject ambiguous workflow step IDs before resolving access_list
- [#3862](https://github.com/vllm-project/semantic-router/issues/3862) [Feature] RISC-V support for the VSR router process and Candle CPU classifiers
- [#3799](https://github.com/vllm-project/semantic-router/issues/3799) [Feature] Allow disabling the unused rationale field of LLM classifier signals
- [#3892](https://github.com/vllm-project/semantic-router/issues/3892) [Bug] header mutations when responding to body in full-duplex-streamed mode is likely ignored by clients
- [#3888](https://github.com/vllm-project/semantic-router/issues/3888) [Community] Promote six Committers, FAUST to Maintainer, and existing Workgroup Members to Leads

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*