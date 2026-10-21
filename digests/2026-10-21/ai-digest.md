# 📡 AI Ecosystem Digest — 2026-10-21

> Generated 2026-10-21 01:21 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 152,651 | 25 | 2 | 0 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 130,170 | 21 | 1 | 46 | 2 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 107,477 | 0 | 0 | 6 | 3 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,283 | 18 | 4 | 0 | 2 |
| [OpenCode](https://github.com/anomalyco/opencode) | 218,948 | 24 | 11 | 19 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 28,606 | 34 | 22 | 2 | 3 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 392,683 | 191 | 112 | 165 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 255,599 | 23 | 3 | 3 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 94,444 | 30 | 13 | 54 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 37,517 | 18 | 17 | 51 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 131,857 | 12 | 14 | 35 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 184,073 | 5 | 4 | 4 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 61,673 | 22 | 54 | 152 | 5 |
| [Unsloth](https://github.com/unslothai/unsloth) | 78,328 | 17 | 22 | 103 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,154 | 16 | 1 | 12 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,230 | 18 | 10 | 8 | 0 |

---

## ✨ Highlights

- **Claude Code** released version [v2.1.305](https://github.com/anthropics/claude-code/releases/tag/v2.1.305) today.
- **OpenAI Codex** published two releases: [rust-v0.164.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.164.0-alpha.8) and [rust-v0.164.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.164.0-alpha.7).
- **OpenClaw** merged a significant fix with PR [#178895](https://github.com/openclaw/openclaw/pull/178895), addressing tool completion retention during slow progress delivery.
- **Hermes Agent** resolved multiple issues with merged PRs, including adding features and fixing terminal command outputs.
- **OpenAI Codex** experienced unusually high engagement with two hot new issues: [#55634](https://github.com/openai/codex/issues/55634) and [#55530](https://github.com/openai/codex/issues/55530), each garnering 6 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 152,651 · **Open issues:** 15,451 · **Last push:** 4h ago

On October 21, 2026, Claude Code released version v2.1.305, which introduced the feature `sandbox.allowNestedUserNamespaces`, enabling sandboxed commands on Linux to create user namespaces, improving flexibility by circumventing certain file protections. Additionally, the update included a new environment variable, `CLAUDE_CODE_RETRY_WATCHDOG_USAGE_LIMIT_RECHECK_MS`, enhancing the unattended retry mode's ability to recognize lifted usage limits before resets. While no pull requests were merged today, the platform saw several new issues, with notable concerns including a bug where Claude Code ignored user instructions and produced incorrect output (#103870) and another bug related to insufficient report details on an AOSP/macOS compatibility-layer project (#103883).

#### 🚀 New Releases
- [v2.1.305](https://github.com/anthropics/claude-code/releases/tag/v2.1.305) v2.1.305

#### 🐛 New Issues
- [#103851](https://github.com/anthropics/claude-code/issues/103851) [BUG] Cloud routine runs and Project threads: repo-committed .claude/skills/ not loaded, while the same repo's hooks and settings.json are `bug` `has repro` `area:claude-code-web` `area:cowork` 💬2
- [#103870](https://github.com/anthropics/claude-code/issues/103870) [Bug] Claude Code ignores user instructions and hooks, produces reversed/incorrect output `bug` `platform:windows` `area:hooks` 💬1
- [#103864](https://github.com/anthropics/claude-code/issues/103864) "Require trusted devices" silently blocks agent-to-session actions, with no approve-on-device override `enhancement` `area:security` `area:permissions` 💬1
- [#103863](https://github.com/anthropics/claude-code/issues/103863) Let users send feedback with no session context (/feedback and thumbs up/down) `enhancement` `area:cli` 💬1
- [#103883](https://github.com/anthropics/claude-code/issues/103883) [Bug] Insufficient details in report: AOSP/macOS compatibility-layer project
- [#103882](https://github.com/anthropics/claude-code/issues/103882) [FEATURE] Let me see everything Claude did for me in one place `enhancement` `area:permissions` `area:integrations` `area:routines`
- [#103881](https://github.com/anthropics/claude-code/issues/103881) /resume picker: list wraps to top before the next lazy batch loads; search misses unloaded sessions; SDK/plugin sessions dominate the scan `bug` `platform:linux` `area:tui` `area:cli`
- [#103880](https://github.com/anthropics/claude-code/issues/103880) [GitHub integration] `bug` `platform:web` `github-integration`
- [#103879](https://github.com/anthropics/claude-code/issues/103879) [Bug] Model Refuses to Generate Full Bug Report for VPN Issue `bug` `platform:linux` `area:model`
- [#103878](https://github.com/anthropics/claude-code/issues/103878) [FEATURE] Purchasable usage-limit resets (weekly and 5-hour) as an alternative to API-rate extra usage `enhancement` `area:cost`
- [#103877](https://github.com/anthropics/claude-code/issues/103877) [BUG] Desktop app: mod pane content shifts under the reader when content above the viewport changes `bug` `platform:macos` `area:plugins` `area:desktop`
- [#103876](https://github.com/anthropics/claude-code/issues/103876) [MODEL] Created a GitHub PR despite 'draft locally' instruction and skill's explicit wait-for-confirmation step `invalid`
- [#103875](https://github.com/anthropics/claude-code/issues/103875) [BUG] Claude Code for VS Code `bug` `platform:windows` `area:ide` `platform:vscode`
- [#103874](https://github.com/anthropics/claude-code/issues/103874) [Bug] Claude ignores explicit instructions to write highly decoupled code `bug` `platform:linux` `area:model` `needs-repro`
- [#103873](https://github.com/anthropics/claude-code/issues/103873) [FEATURE] Voice: pass along how something was said, not just the words `enhancement` `area:tui`
- [#103872](https://github.com/anthropics/claude-code/issues/103872) [BUG] macOS desktop: Remote Control not restored when a Code-tab session goes idle — session vanishes from iOS app until a message is sent on the Mac `bug` `platform:macos` `platform:ios` `area:desktop`
- [#103871](https://github.com/anthropics/claude-code/issues/103871) Desktop app: session-connector proxy (MCP CLI Proxy) re-authorizes on every session start and runs two OAuth flows per connection `bug` `has repro` `platform:windows` `area:auth`
- [#103869](https://github.com/anthropics/claude-code/issues/103869) [BUG] Cloud session stop hook (~/.claude/stop-hook-git-check.sh) nags inappropriately about legitimately-uncommitted untracked files, and cannot be disabled `bug` `area:hooks` `area:claude-code-web` `platform:web`
- [#103868](https://github.com/anthropics/claude-code/issues/103868) [Bug] Claude Code ignores explicit instructions, reinterprets tasks, and loops on clarifying questions `bug` `platform:macos` `area:model` `needs-repro`
- [#103867](https://github.com/anthropics/claude-code/issues/103867) [FEATURE] Desktop Browser pane: reuse one tab across Claude Code sessions (keeping the element picker) `enhancement` `area:desktop`
- [#103866](https://github.com/anthropics/claude-code/issues/103866) [FEATURE] Idle compaction for local background sessions (--bg / claude agents / respawn) `enhancement` `platform:linux` `area:core` `area:agent-view`
- [#103865](https://github.com/anthropics/claude-code/issues/103865) Headless --permission-mode bypassPermissions --permission-prompts none session still hangs on an unanswerable permission prompt (intermittent, many tools) `bug` `platform:macos` `area:mcp` `area:permissions`
- [#103862](https://github.com/anthropics/claude-code/issues/103862) [Bug] Claude not following its directives and assuming confirmations from nonconfirming statements. `bug` `platform:windows` `area:model`
- [#103861](https://github.com/anthropics/claude-code/issues/103861) Bash tool silently returns no output on Windows when session-env hook output grows past ~8 KB `bug` `has repro` `platform:windows` `area:bash`
- [#103860](https://github.com/anthropics/claude-code/issues/103860) [Desktop/Windows] 3.1623.0 moves app data from the MSIX LocalCache to `%LOCALAPPDATA%\Claude-Data\`, with no release note or docs `invalid`

#### 🔒 Closed Issues
- [#102567](https://github.com/anthropics/claude-code/issues/102567) security-guidance plugin: git diff baseline gets confused across worktree switches, re-reports already-fixed findings
- [#103876](https://github.com/anthropics/claude-code/issues/103876) [MODEL] Created a GitHub PR despite 'draft locally' instruction and skill's explicit wait-for-confirmation step

### OpenAI Codex (`openai/codex`)

**Stars:** 130,170 · **Open issues:** 23,779 · **Last push:** <1h ago

Today, OpenAI Codex released versions 0.164.0-alpha.8 and 0.164.0-alpha.7, with notable upgrades to the Rust toolchain to version 1.99.1. Among the significant merged pull requests, enhancements include centralized cloud skill cache management under the catalog lock and the resolution of MCP backend identity from runtime events in rollout traces. Other key updates improve OAuth refresh coordination and the preservation of enterprise MCP authorization across runtime refreshes. A particularly hot new issue has emerged regarding a temporary unavailability of some tools, reflecting ongoing user frustrations with connectivity and access challenges.

#### 🚀 New Releases
- [rust-v0.164.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.164.0-alpha.8) 0.164.0-alpha.8
- [rust-v0.164.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.164.0-alpha.7) 0.164.0-alpha.7

#### ✅ Merged PRs
- [#55710](https://github.com/openai/codex/pull/55710) Resolve MCP backend identity from runtime events in rollout traces
- [#55705](https://github.com/openai/codex/pull/55705) Centralize cloud skill cache state under the catalog lock
- [#55701](https://github.com/openai/codex/pull/55701) Enable MCP OAuth refresh coordination by default
- [#55698](https://github.com/openai/codex/pull/55698) Reuse Codex account grants for enterprise MCP authentication
- [#55696](https://github.com/openai/codex/pull/55696) Preserve enterprise MCP authorization across runtime refreshes
- [#55693](https://github.com/openai/codex/pull/55693) Use hermetic dsymutil for macOS Bazel builds
- [#55692](https://github.com/openai/codex/pull/55692) Tag tool registration metrics with effective incremental tools mode
- [#55691](https://github.com/openai/codex/pull/55691) Refine enterprise MCP auth errors and request authority checks
- [#55690](https://github.com/openai/codex/pull/55690) Reclaim aged legacy marketplace staging directories
- [#55689](https://github.com/openai/codex/pull/55689) Clean up failed and abandoned marketplace staging directories
- [#55685](https://github.com/openai/codex/pull/55685) Add account credential support to EMA token exchange helpers
- [#55682](https://github.com/openai/codex/pull/55682) Fix TUI permission selection and session state handling
- [#55680](https://github.com/openai/codex/pull/55680) Recheck account login ownership for enterprise MCP
- [#55677](https://github.com/openai/codex/pull/55677) Upgrade the Rust toolchain to 1.99.1
- [#55667](https://github.com/openai/codex/pull/55667) Enable app routing for remote curated Agent Plugins
- [#55666](https://github.com/openai/codex/pull/55666) Omit reasoning and compaction from Decisions snapshot comparisons
- [#55657](https://github.com/openai/codex/pull/55657) Add lifecycle hooks for inter-agent messages
- [#55653](https://github.com/openai/codex/pull/55653) Track code-mode cell lifecycle and result buffering time
- [#55652](https://github.com/openai/codex/pull/55652) Search compressed rollouts concurrently
- [#55646](https://github.com/openai/codex/pull/55646) Guard auth persistence and reloads against concurrent login changes
- [#55645](https://github.com/openai/codex/pull/55645) Fix in-process app-server shutdown with full queues
- [#55644](https://github.com/openai/codex/pull/55644) Make pending injections interrupt agent waits and sleep
- [#55636](https://github.com/openai/codex/pull/55636) Add runtime assertion authentication modes and an auth provider
- [#55635](https://github.com/openai/codex/pull/55635) Enable Decisions comparisons for Guardian V2 conversation mode
- [#55633](https://github.com/openai/codex/pull/55633) Treat code-mode collaboration messages as plaintext
- [#55631](https://github.com/openai/codex/pull/55631) Add frozen cloud skill snapshots to the app server
- [#55627](https://github.com/openai/codex/pull/55627) Reserve a sibling rollout candidate slot for the first ancestor
- [#55623](https://github.com/openai/codex/pull/55623) Refactor Guardian v2 Decisions snapshot comparison
- [#55620](https://github.com/openai/codex/pull/55620) Move Linux sandbox unit tests into separate files
- [#55616](https://github.com/openai/codex/pull/55616) Update `rustls-webpki` and `webpki-roots` lockfile versions
- [#55607](https://github.com/openai/codex/pull/55607) Propagate authentication header failures before sending requests
- [#55597](https://github.com/openai/codex/pull/55597) Extract shared TUI user prompt helpers from IDE context
- [#55596](https://github.com/openai/codex/pull/55596) Rank `$` mentions by recent selection frequency
- [#55593](https://github.com/openai/codex/pull/55593) Reject unpackaged Windows sandbox provisioning clients
- [#55591](https://github.com/openai/codex/pull/55591) Measure Guardian approval blocking time per turn
- [#55587](https://github.com/openai/codex/pull/55587) Allow callers to control prompt cache keys independently of session IDs
- [#55581](https://github.com/openai/codex/pull/55581) Avoid panics after background compaction fails before a checkpoint
- [#55548](https://github.com/openai/codex/pull/55548) Preserve parent history by default in full agent forks
- [#55547](https://github.com/openai/codex/pull/55547) Ignore the basic-toml advisory in dependency audits
- [#55546](https://github.com/openai/codex/pull/55546) Add scoped leases for persisted account OAuth grants
- [#55545](https://github.com/openai/codex/pull/55545) Improve diagnostics for compressed rollout read failures
- [#55533](https://github.com/openai/codex/pull/55533) Separate Guardian conversation preparation from execution
- [#55524](https://github.com/openai/codex/pull/55524) Make the startup migration contention test deterministic
- [#55498](https://github.com/openai/codex/pull/55498) Add correlated diagnostics for Noise relay handshakes
- [#55463](https://github.com/openai/codex/pull/55463) Add optional MCP disablement for prediction forks and samples
- [#55456](https://github.com/openai/codex/pull/55456) Support Windows registry overrides for `requirements.toml`

#### 🐛 New Issues
- [#55634](https://github.com/openai/codex/issues/55634) Some tools are temporarily unavailable error. `bug` `mcp` `app` `connectivity` 💬6
- [#55530](https://github.com/openai/codex/issues/55530) [Work cloud][Library] Official prepared-upload helper blocked by HTTP 403 / Cloudflare 1010 during tools/list `bug` `codex-web` `mcp` `connectivity` 💬6
- [#55507](https://github.com/openai/codex/issues/55507) exceeded retry limit, last status: 429 Too Many Requests `bug` `rate-limits` `app` 💬4
- [#55699](https://github.com/openai/codex/issues/55699) FUCK OFF WITH THESE BULLSHIT CYBERSECURITY REQUEST BLOCKERS `bug` `safety-check` 💬3
- [#55650](https://github.com/openai/codex/issues/55650) [macOS][Browser Control] MCP App first launch stalls; deployed render acknowledgment remains absent `bug` `mcp` `app` `browser` 💬2
- [#55716](https://github.com/openai/codex/issues/55716) Support simultaneous multi-device input to one Codex session with a shared request queue and single executor `enhancement` `app` `session` `remote` 💬1
- [#55715](https://github.com/openai/codex/issues/55715) Native assistant-output admission before rendering across loaded desktop chats `enhancement` `app` `app-server` 💬1
- [#55714](https://github.com/openai/codex/issues/55714) [macOS][ChatGPT Desktop] “Show more” in sidebar history loops without loading older conversations `bug` `app` `session` 💬1
- [#55704](https://github.com/openai/codex/issues/55704) [macOS][Desktop][Dot] Stopped dot-created task remains in “Thinking” with an endless spinner and broken previews `bug` `rate-limits` `app` `dots` 💬1
- [#55712](https://github.com/openai/codex/issues/55712) [Windows][Chrome] Exact-origin navigation denied as saved permission despite Always allow UI (26.1013.4894.0) `bug` `windows-os` `app` `browser` 💬1
- [#55709](https://github.com/openai/codex/issues/55709) [macOS][Pro $200] ~20 minutes of one Codex task consumed ~15% of the weekly allowance `bug` `rate-limits` `app` `subagent` 💬1
- [#55707](https://github.com/openai/codex/issues/55707) Windows Computer Use repeatedly stops at Chrome URL verification (bundle 26.1013.40934) `bug` `windows-os` `app` `computer-use` 💬1
- [#55706](https://github.com/openai/codex/issues/55706) Browser Use URL policy rejects HTTP/HTTPS URLs as unsupported protocols on Windows `bug` `windows-os` `app` `browser` 💬1
- [#55700](https://github.com/openai/codex/issues/55700) [macOS Desktop][Dots] Opening a dot after app launch fails until “Try again” is clicked `bug` `app` `dots` 💬1
- [#55717](https://github.com/openai/codex/issues/55717) codex queue --model is accepted but ignored for existing threads `bug` `CLI` `app-server`
- [#55713](https://github.com/openai/codex/issues/55713) [ChatGPT macOS] Conversation titles contain unrelated garbled characters and gambling/adult-site terms `bug` `session`
- [#55711](https://github.com/openai/codex/issues/55711) [macOS][Chat] Multiple phantom “New chat” entries appear in sidebar with no renderable messages `bug` `app` `session`
- [#55708](https://github.com/openai/codex/issues/55708) [macOS][Dot/Codex] Dot-created sidebar tasks cannot resume after their cloud builds are deleted `bug` `app` `session` `dots`
- [#55703](https://github.com/openai/codex/issues/55703) [Windows App] Background in-app browser history reads disturb the user's visible chat position despite visibility=false `bug` `windows-os` `app` `browser`
- [#55702](https://github.com/openai/codex/issues/55702) Codex App assistant misreports effective Daybreak state for its own turn `bug` `model-behavior` `app` `safety-check`
- [#55697](https://github.com/openai/codex/issues/55697) New Chat button doesn't work on Cursor extension `bug` `extension` `session`

#### 🔒 Closed Issues
- [#55634](https://github.com/openai/codex/issues/55634) Some tools are temporarily unavailable error.

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 107,477 · **Open issues:** 756 · **Last push:** 2h ago

On October 21, 2026, Gemini CLI released several new versions, including v0.66.0-preview.0, which updated the ROADMAP document, and v0.66.0-nightly.20261020.g76e4d7c04, introducing fixes to preserve terminal scrollback during viewport refreshes and properly decode streamed Node HTTP activity chunks. Additionally, v0.65.0 was released, addressing read-only workspace settings in untrusted folders and preventing the deletion of resumed session history on quick exit. Key merged features included enhancements to the core functionality, such as preventing false positive matches in authentication error detection and supporting opt-in private network endpoints for MCP OAuth flows. No new issues were reported today, indicating a routine maintenance day with solid updates.

#### 🚀 New Releases
- [v0.66.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.66.0-preview.0) Release v0.66.0-preview.0
- [v0.66.0-nightly.20261020.g76e4d7c04](https://github.com/google-gemini/gemini-cli/releases/tag/v0.66.0-nightly.20261020.g76e4d7c04) Release v0.66.0-nightly.20261020.g76e4d7c04
- [v0.65.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0) Release v0.65.0

#### ✅ Merged PRs
- [#29854](https://github.com/google-gemini/gemini-cli/pull/29854) chore(release): bump version to 0.67.0-nightly.20261020.gb041de017
- [#29853](https://github.com/google-gemini/gemini-cli/pull/29853) Changelog for v0.65.0
- [#29835](https://github.com/google-gemini/gemini-cli/pull/29835) fix(core): prevent false positive matches in isAuthenticationError
- [#29844](https://github.com/google-gemini/gemini-cli/pull/29844) fix(core): support opt-in private network endpoints for MCP OAuth flows
- [#29832](https://github.com/google-gemini/gemini-cli/pull/29832) fix(core): preserve user-level ~/.gitconfig in shell and git environments
- [#29839](https://github.com/google-gemini/gemini-cli/pull/29839) chore: migrate gsutil usage to gcloud storage

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,283 · **Open issues:** 2,239 · **Last push:** 6h ago

On October 20, 2026, GitHub Copilot CLI released version 1.0.101, introducing native structured output for dynamic workflow subagents on supported models and adding the assistedApprovalInstructions setting to aid in permission confirmations. The update also refined session resumption, allowing faster visibility of conversations, and improved interaction with sandboxed MCP servers, avoiding unnecessary restarts. Additionally, users can now request path approval for shell commands that create and enter directories, enhancing usability. New issues reported include concerns about the Linux sandbox egress proxy (#5199) and a request for a stable release channel (#5203), indicating ongoing interest in stability and feature governance within the user community.

#### 🚀 New Releases
- [v1.0.101](https://github.com/github/copilot-cli/releases/tag/v1.0.101) 1.0.101
- [v1.0.101-1](https://github.com/github/copilot-cli/releases/tag/v1.0.101-1) 1.0.101-1

#### 🐛 New Issues
- [#5199](https://github.com/github/copilot-cli/issues/5199) Linux sandbox egress proxy ignores NO_PROXY when chaining to a corporate upstream proxy 💬1
- [#5203](https://github.com/github/copilot-cli/issues/5203) Feature Request: Stable Release Channel for Copilot CLI `triage` 💬1
- [#5212](https://github.com/github/copilot-cli/issues/5212) 2923933 `invalid` 💬1
- [#5207](https://github.com/github/copilot-cli/issues/5207) Windows: with --sandbox, shell commands can't list or stat directories when the working directory is on a non-system drive `triage` 💬1
- [#5201](https://github.com/github/copilot-cli/issues/5201) Prompt-budget rejection is not machine-identifiable (errorType "query", no errorCode, no remediation) `triage` 💬1
- [#5200](https://github.com/github/copilot-cli/issues/5200) https://github.com/github/copilot-cli/issues/new/choose `invalid` 💬1
- [#5215](https://github.com/github/copilot-cli/issues/5215) /ask follow up `triage`
- [#5214](https://github.com/github/copilot-cli/issues/5214) Shell guard refuses `kill $VAR`, `kill $!` and `kill %1`, and blocks a whole command line when `kill $(...)` matches nothing `triage`
- [#5213](https://github.com/github/copilot-cli/issues/5213) Honor explicit startup model selection like /model after initialization `triage`
- [#5211](https://github.com/github/copilot-cli/issues/5211) key bindings are inconsistent and delete work: make them fully configurable `triage`
- [#5210](https://github.com/github/copilot-cli/issues/5210) Autopilot repeatedly retries write_agent for completed non-resumable agent with conflicting selectors `triage`
- [#5209](https://github.com/github/copilot-cli/issues/5209) Unnecessarily short timeout for MCP server/discover endpoint `triage`
- [#5208](https://github.com/github/copilot-cli/issues/5208) MCP Server not available in Copilot Session `triage`
- [#5206](https://github.com/github/copilot-cli/issues/5206) Explicit-approval requests silently denied in resumed sessions: 'could not request permission from user' / orchestrator 'permission request denied: unusable session working directory' `triage`
- [#5205](https://github.com/github/copilot-cli/issues/5205) Context window rollover fails: "checkpoint.md is absent for this agent; write it before requesting rollover" `triage`
- [#5204](https://github.com/github/copilot-cli/issues/5204) when doing --resume, it no longers opens last session `triage`
- [#5202](https://github.com/github/copilot-cli/issues/5202) GitHub Copilot CLI remote control session list misses recent sessions and shows stale session details `triage`
- [#5198](https://github.com/github/copilot-cli/issues/5198) [ACP] Support mid-turn steering in --acp mode (parity with interactive CLI and SDK mode: "immediate") `triage`

#### 🔒 Closed Issues
- [#5199](https://github.com/github/copilot-cli/issues/5199) Linux sandbox egress proxy ignores NO_PROXY when chaining to a corporate upstream proxy
- [#5212](https://github.com/github/copilot-cli/issues/5212) 2923933
- [#5176](https://github.com/github/copilot-cli/issues/5176) Linux sandbox: shell commands are killed after ~10 s (bwrap parent-death signal bound to an exited thread)
- [#5200](https://github.com/github/copilot-cli/issues/5200) https://github.com/github/copilot-cli/issues/new/choose

### OpenCode (`anomalyco/opencode`)

**Stars:** 218,948 · **Open issues:** 3,815 · **Last push:** <1h ago

In today's updates for OpenCode, there were no new releases, but several important changes were merged, enhancing both functionality and performance. Key fixes include the separation of timeline details from rows below (#57577), improved session management with a new session details menu (#57528), and adjustments for better usability on desktop platforms, such as opening media URLs in the browser pane (#57562) and allowing quick reloads of tabs with ⌘R (#57550). Notably, a new issue was raised regarding non-responsive controls in the web UI (#57491), highlighting accessibility challenges that need attention. Overall, the day consisted of routine maintenance with significant enhancements that aim to improve user experience.

#### ✅ Merged PRs
- [#57577](https://github.com/anomalyco/opencode/pull/57577) fix(app): separate timeline detail from rows below with a divider
- [#57575](https://github.com/anomalyco/opencode/pull/57575) feat(app): hide the new session pin board behind a pull-the-pin easter egg
- [#57562](https://github.com/anomalyco/opencode/pull/57562) fix(desktop): open video and image URLs in the browser pane
- [#57527](https://github.com/anomalyco/opencode/pull/57527) fix(app): show untracked folders as one review row
- [#57507](https://github.com/anomalyco/opencode/pull/57507) fix(desktop): faster side-panel tabs with a much shorter flash
- [#57531](https://github.com/anomalyco/opencode/pull/57531) feat(ui): keep branch search results on screen while a query is pending
- [#57560](https://github.com/anomalyco/opencode/pull/57560) test(app): update e2e tests for the session details menu
- [#57537](https://github.com/anomalyco/opencode/pull/57537) fix(app): show generated forms as submitted and send them once
- [#57466](https://github.com/anomalyco/opencode/pull/57466) fix(app): restore free-tier usage limit dialog, timeline line, and prompt recall
- [#57551](https://github.com/anomalyco/opencode/pull/57551) fix(session-ui): reuse Pierre file views, window medium files, cache parsed diffs
- [#57539](https://github.com/anomalyco/opencode/pull/57539) refactor(app): retire the legacy side-panel file tree
- [#57557](https://github.com/anomalyco/opencode/pull/57557) perf(app): let the folder picker scroll on the compositor
- [#57550](https://github.com/anomalyco/opencode/pull/57550) fix(desktop): ⌘R reloads the focused browser tab
- [#57521](https://github.com/anomalyco/opencode/pull/57521) fix(app): align the new session location row and its branch control
- [#57467](https://github.com/anomalyco/opencode/pull/57467) feat(tui): show free-limit notice, recall prompt, and skip failure toast
- [#57545](https://github.com/anomalyco/opencode/pull/57545) fix(app): paste into the composer from the session view
- [#57499](https://github.com/anomalyco/opencode/pull/57499) fix(ui): show the OpenCode icon for the current project ID
- [#57548](https://github.com/anomalyco/opencode/pull/57548) chore(infra): delete legacy share storage
- [#57528](https://github.com/anomalyco/opencode/pull/57528) feat(app): session details menu in the header

#### 🐛 New Issues
- [#57491](https://github.com/anomalyco/opencode/issues/57491) web ui: several controls do not expose their state to assistive technology `reproduced` 💬4
- [#57518](https://github.com/anomalyco/opencode/issues/57518) fs: /cd and file pickers fail on FreeBSD/ZFS — `stat` throws "dev exceeds the safe integer range" (fixed in @effect/platform-node-shared 4.0.5) `reproduced` 💬2
- [#57487](https://github.com/anomalyco/opencode/issues/57487) tui: ctrl+x leader stops working after switching OS focus 💬3
- [#57403](https://github.com/anomalyco/opencode/issues/57403) OpenCode go unusable: TTFT extremely long `triaging` 💬3
- [#57496](https://github.com/anomalyco/opencode/issues/57496) Native subtask can be skipped when automatic compaction advances the finished-message boundary `pending close` `triaging` 💬2
- [#57495](https://github.com/anomalyco/opencode/issues/57495) provider: slow plugin setup disables all github-copilot models `reproduced` 💬2
- [#57538](https://github.com/anomalyco/opencode/issues/57538) Subagent tasks silently cancelled on network interface change (Wi-Fi → Ethernet) `pending close` `triaging` 💬2
- [#57492](https://github.com/anomalyco/opencode/issues/57492) [FEATURE]: Support non-interactive API-key login via auth login 💬2
- [#57484](https://github.com/anomalyco/opencode/issues/57484) Code Mode execute: function expression (async () => {...}) silently returns null 💬2
- [#57536](https://github.com/anomalyco/opencode/issues/57536) desktop: toggle-terminal shortcut opens the terminal but leaves focus in the prompt box 💬1
- [#57580](https://github.com/anomalyco/opencode/issues/57580) Bug: catalog refresh is scoped to the first workspace, leaving other workspaces stale `pending close` `triaging` 💬1
- [#57579](https://github.com/anomalyco/opencode/issues/57579) cli: upgrade cannot detect npm installs on Windows (spawns .cmd shims without a shell) 💬1
- [#57578](https://github.com/anomalyco/opencode/issues/57578) [Bug] OpenCode steals foreground focus and disrupts user workflow when testing/running apps (Window Activation / Focus Stealing) `triaging` 💬1
- [#57558](https://github.com/anomalyco/opencode/issues/57558) Error al instalar v2 `triaging` 💬1
- [#57554](https://github.com/anomalyco/opencode/issues/57554) core: env escaping fallback corrupts valid JSONC substitutions `reproduced` 💬1
- [#57553](https://github.com/anomalyco/opencode/issues/57553) core: rejected compaction truncates history and clears staged undo `reproduced` 💬1
- [#57541](https://github.com/anomalyco/opencode/issues/57541) tool dispatch: shell tool silently removed mid-session; assistant emits tool-call XML as chat text and cannot build or verify `triaging` 💬1
- [#57540](https://github.com/anomalyco/opencode/issues/57540) [FEATURE]: Document free-tier accounting for free models (idle time, pool scope, remaining allowance) 💬1
- [#57529](https://github.com/anomalyco/opencode/issues/57529) Wrapped sidebar todos overlap and consume the next section gap `reproduced` 💬1
- [#57526](https://github.com/anomalyco/opencode/issues/57526) desktop: review panel line comments never suggest files for @ mentions 💬1
- [#57524](https://github.com/anomalyco/opencode/issues/57524) Windows: GET /api/skill returns an empty array with skill roots configured (2.0.32) `reproduced` 💬1
- [#57517](https://github.com/anomalyco/opencode/issues/57517) tui: OSC 4 palette replies leak into the prompt input as text `reproduced` 💬1
- [#57571](https://github.com/anomalyco/opencode/issues/57571) [Action Required] PlanetScale Database Migration - Re-authorization Needed
- [#57567](https://github.com/anomalyco/opencode/issues/57567) [BUG]: CI environment configuration error in GitHub Actions

#### 🔒 Closed Issues
- [#55305](https://github.com/anomalyco/opencode/issues/55305) [FEATURE]: make the 60m location inactivity TTL configurable (or opt-out)
- [#56526](https://github.com/anomalyco/opencode/issues/56526) oauth
- [#45147](https://github.com/anomalyco/opencode/issues/45147) feat(core): add cache-safe Code Mode namespace instructions
- [#57230](https://github.com/anomalyco/opencode/issues/57230) provider: openai-compatible always injects stream_options and store, breaking non-OpenAI-compatible APIs
- [#57226](https://github.com/anomalyco/opencode/issues/57226) core: v1→v2 session migration skips v1 sessions created after the first v2 launch
- [#57225](https://github.com/anomalyco/opencode/issues/57225) [suggest]: how can i delete api keys ?
- [#57538](https://github.com/anomalyco/opencode/issues/57538) Subagent tasks silently cancelled on network interface change (Wi-Fi → Ethernet)
- [#55068](https://github.com/anomalyco/opencode/issues/55068) opencode on clean macos zsh .export path not working because it append and it fails because no ~/.zshrc file
- [#57209](https://github.com/anomalyco/opencode/issues/57209) desktop: permission dialog expands to full command length instead of scrolling
- [#57571](https://github.com/anomalyco/opencode/issues/57571) [Action Required] PlanetScale Database Migration - Re-authorization Needed
- [#57567](https://github.com/anomalyco/opencode/issues/57567) [BUG]: CI environment configuration error in GitHub Actions

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 28,606 · **Open issues:** 1,936 · **Last push:** <1h ago

On October 21, 2026, Qwen Code released v0.25.4-preview.1, featuring session-targeted skill and extension refresh support and a fix for the initial publication guard wait times. This version followed closely after v0.25.4-preview.0 and v0.25.3-nightly.20261020.82bd240ad0, both of which included similar updates. Notable merged features included support for approval changes during a turn in managed agents, alongside tests that skip closed session automation slots. Among the new issues raised, #14911 drew attention as it called for a merge decision on a previously approved pull request that had been pending for three days.

#### 🚀 New Releases
- [v0.25.4-preview.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.4-preview.1) Release v0.25.4-preview.1
- [v0.25.4-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.4-preview.0) Release v0.25.4-preview.0
- [v0.25.3-nightly.20261020.82bd240ad0](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.3-nightly.20261020.82bd240ad0) Release v0.25.3-nightly.20261020.82bd240ad0

#### ✅ Merged PRs
- [#14920](https://github.com/QwenLM/qwen-code/pull/14920) feat(managed-agent): Support approval changes during a turn
- [#14931](https://github.com/QwenLM/qwen-code/pull/14931) test(managed-agent): skip a closed Session's automation slots (FG11d)

#### 🐛 New Issues
- [#14911](https://github.com/QwenLM/qwen-code/issues/14911) Approved, MERGEABLE, four verification rounds: #13882 has waited three days for a merge decision `priority/P2` `type/question` `category/development` `status/ready-for-human` 💬5
- [#14918](https://github.com/QwenLM/qwen-code/issues/14918) bug(web-shell): a failed Managed Agent request becomes raw text at the top of the pane, with no context or request id `priority/P2` `type/bug` `category/ui` `scope/web-shell` 💬5
- [#14850](https://github.com/QwenLM/qwen-code/issues/14850) ci(hosted): one shared schema and tenant-unscoped recovery scans let hosted IT classes drive each other's operations `priority/P2` `type/bug` `category/development` `scope/testing` 💬3
- [#14948](https://github.com/QwenLM/qwen-code/issues/14948) test(hosted): follow up isolation guard coverage and fixture cleanup `priority/P3` `category/development` `scope/testing` `scope/ci-cd` 💬3
- [#14947](https://github.com/QwenLM/qwen-code/issues/14947) feat(desktop, web-shell): persist saved daemon connections and allow remembering tokens `priority/P2` `type/feature-request` `category/authentication` `scope/token-storage` 💬3
- [#14939](https://github.com/QwenLM/qwen-code/issues/14939) Desktop client cannot reach a remote `qwen serve` daemon without `--allow-origin '*'` (its own origin port is ephemeral) `priority/P2` `type/bug` `category/authentication` `scope/documentation` 💬3
- [#14877](https://github.com/QwenLM/qwen-code/issues/14877) memory: the writer drops over-budget index entries silently and the stamped notice should name them `priority/P2` `type/bug` `category/core` `scope/memory` 💬3
- [#14971](https://github.com/QwenLM/qwen-code/issues/14971) ci(sdk-java): follow-ups from #14936 — MariaDB coverage is now unfalsifiable, and stale lane references `priority/P2` `type/bug` `category/development` `scope/testing` 💬2
- [#14961](https://github.com/QwenLM/qwen-code/issues/14961) Main CI failed: Qwen Code CI — scripts/tests/workflow-size.test.js > … > .github/workflows/sdk-java.yml is within its baseline allowance `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#14921](https://github.com/QwenLM/qwen-code/issues/14921) test(managed-agent): extract the ledger and stream helpers shared by the Hosted gate drivers `priority/P3` `status/blocked` `category/development` `scope/testing` 💬2
- [#14958](https://github.com/QwenLM/qwen-code/issues/14958) Main CI failed: Managed Agent gate on 848111433baf `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#14956](https://github.com/QwenLM/qwen-code/issues/14956) Main CI failed: Managed Agent gate on a416f6cf44f3 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#14955](https://github.com/QwenLM/qwen-code/issues/14955) Main CI failed: Managed Agent gate on 5cab49743008 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#14954](https://github.com/QwenLM/qwen-code/issues/14954) Main CI failed: Managed Agent gate on 8fcdcc4d62bb `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#14949](https://github.com/QwenLM/qwen-code/issues/14949) Main CI failed: Managed Agent gate on 670a382f2041 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#14950](https://github.com/QwenLM/qwen-code/issues/14950) Main CI failed: Managed Agent gate on 26eb1fb1dc58 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#14942](https://github.com/QwenLM/qwen-code/issues/14942) Main CI failed: Managed Agent gate on a3f2ced094be `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#14940](https://github.com/QwenLM/qwen-code/issues/14940) Main CI failed: Managed Agent gate on 9345c4ed1df4 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#14945](https://github.com/QwenLM/qwen-code/issues/14945) Main CI failed: Managed Agent gate on dc8b523d3966 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#14943](https://github.com/QwenLM/qwen-code/issues/14943) Main CI failed: Managed Agent gate on acbf21ed7fef `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#14941](https://github.com/QwenLM/qwen-code/issues/14941) Main CI failed: Managed Agent gate on 016c7f7edf48 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#14938](https://github.com/QwenLM/qwen-code/issues/14938) Main CI failed: Managed Agent gate on fc84ced8a512 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#14932](https://github.com/QwenLM/qwen-code/issues/14932) Main CI failed: Managed Agent gate on bc17d8639a10 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#14880](https://github.com/QwenLM/qwen-code/issues/14880) test(managed-agent): FG12 residuals — late reply after outcome_unknown, pre-dispatch cancel, post-drained R1-1 `priority/P2` `type/feature-request` `category/integration` `scope/mcp` 💬2
- [#14865](https://github.com/QwenLM/qwen-code/issues/14865) Main CI failed: Managed Agent gate — JdbcRuntimeRetentionMySqlIT.placementKeepsExactIdentitiesWithoutDecryptingHistoricalRowsOnMySql (+996 more) `type/bug` `status/ready-for-agent` `autofix/approved` 💬2
- [#14919](https://github.com/QwenLM/qwen-code/issues/14919) Main CI failed: Managed Agent gate on 9af5e6476c4e `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#14925](https://github.com/QwenLM/qwen-code/issues/14925) cli: clipboard paste follow-ups deferred from #14172 `priority/P2` `status/blocked` `type/bug` `category/ui` 💬2
- [#14968](https://github.com/QwenLM/qwen-code/issues/14968) Main CI failed: E2E Tests — cli/qwen-serve-client-mcp.test.ts [ cli/qwen-serve-client-mcp.test.ts ] (+74 more) `type/bug` `status/ready-for-agent` `autofix/in-progress` `autofix/approved` 💬1
- [#14957](https://github.com/QwenLM/qwen-code/issues/14957) Main CI failed: E2E Tests on e0d97c5569d3 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#14962](https://github.com/QwenLM/qwen-code/issues/14962) Main CI failed: Managed Agent gate on f60d10e01687 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#14863](https://github.com/QwenLM/qwen-code/issues/14863) Main CI failed: Managed Agent gate — JdbcRuntimeRetentionMySqlIT.placementKeepsExactIdentitiesWithoutDecryptingHistoricalRowsOnMySql (+993 more) `type/bug` `status/ready-for-agent` `autofix/skip` `autofix/approved` 💬1
- [#14862](https://github.com/QwenLM/qwen-code/issues/14862) Main CI failed: Managed Agent gate on 35214581c53a `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#14896](https://github.com/QwenLM/qwen-code/issues/14896) Main CI failed: SDK Java on 8d37c8704308 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#14922](https://github.com/QwenLM/qwen-code/issues/14922) Main CI failed: Qwen Code CI — src/serve/hosted-harness-session.test.ts > … > preserves the named store failure when resident model recovery… `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1

#### 🔒 Closed Issues
- [#14850](https://github.com/QwenLM/qwen-code/issues/14850) ci(hosted): one shared schema and tenant-unscoped recovery scans let hosted IT classes drive each other's operations
- [#14961](https://github.com/QwenLM/qwen-code/issues/14961) Main CI failed: Qwen Code CI — scripts/tests/workflow-size.test.js > … > .github/workflows/sdk-java.yml is within its baseline allowance
- [#14958](https://github.com/QwenLM/qwen-code/issues/14958) Main CI failed: Managed Agent gate on 848111433baf
- [#14956](https://github.com/QwenLM/qwen-code/issues/14956) Main CI failed: Managed Agent gate on a416f6cf44f3
- [#14955](https://github.com/QwenLM/qwen-code/issues/14955) Main CI failed: Managed Agent gate on 5cab49743008
- [#14954](https://github.com/QwenLM/qwen-code/issues/14954) Main CI failed: Managed Agent gate on 8fcdcc4d62bb
- [#14949](https://github.com/QwenLM/qwen-code/issues/14949) Main CI failed: Managed Agent gate on 670a382f2041
- [#14950](https://github.com/QwenLM/qwen-code/issues/14950) Main CI failed: Managed Agent gate on 26eb1fb1dc58
- [#14942](https://github.com/QwenLM/qwen-code/issues/14942) Main CI failed: Managed Agent gate on a3f2ced094be
- [#14940](https://github.com/QwenLM/qwen-code/issues/14940) Main CI failed: Managed Agent gate on 9345c4ed1df4
- [#14945](https://github.com/QwenLM/qwen-code/issues/14945) Main CI failed: Managed Agent gate on dc8b523d3966
- [#14943](https://github.com/QwenLM/qwen-code/issues/14943) Main CI failed: Managed Agent gate on acbf21ed7fef
- [#14941](https://github.com/QwenLM/qwen-code/issues/14941) Main CI failed: Managed Agent gate on 016c7f7edf48
- [#14938](https://github.com/QwenLM/qwen-code/issues/14938) Main CI failed: Managed Agent gate on fc84ced8a512
- [#14932](https://github.com/QwenLM/qwen-code/issues/14932) Main CI failed: Managed Agent gate on bc17d8639a10
- [#14865](https://github.com/QwenLM/qwen-code/issues/14865) Main CI failed: Managed Agent gate — JdbcRuntimeRetentionMySqlIT.placementKeepsExactIdentitiesWithoutDecryptingHistoricalRowsOnMySql (+996 more)
- [#14919](https://github.com/QwenLM/qwen-code/issues/14919) Main CI failed: Managed Agent gate on 9af5e6476c4e
- [#14476](https://github.com/QwenLM/qwen-code/issues/14476) Main CI failed: Managed Agent gate — ManagedActionsTest.approvalLeaseRenewsWhileDeliveryIsHeldPastItsInitialDeadline
- [#14957](https://github.com/QwenLM/qwen-code/issues/14957) Main CI failed: E2E Tests on e0d97c5569d3
- [#14862](https://github.com/QwenLM/qwen-code/issues/14862) Main CI failed: Managed Agent gate on 35214581c53a
- [#14896](https://github.com/QwenLM/qwen-code/issues/14896) Main CI failed: SDK Java on 8d37c8704308
- [#14922](https://github.com/QwenLM/qwen-code/issues/14922) Main CI failed: Qwen Code CI — src/serve/hosted-harness-session.test.ts > … > preserves the named store failure when resident model recovery…

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

**Stars:** 392,683 · **Open issues:** 9,691 · **Last push:** <1h ago

Today was a routine maintenance day for OpenClaw, with no new releases. Significant progress was made with the merging of key pull requests, including a fix for tool completion retention during slow progress delivery in clickclack (PR #178895) and the refactoring of private execution helpers to stay aligned with their owners (PR #178884). Additional fixes addressed issues with speech API security (PR #178877) and improved session handling to avoid long writer stalls (PR #178845). Among the new issues raised, the potential regression in the Kimi Code causing tool call repetitions and polling problems (issue #177989) has garnered considerable attention from the community.

#### ✅ Merged PRs
- [#178885](https://github.com/openclaw/openclaw/pull/178885) refactor(runtime): retire private native-owner adapters
- [#178832](https://github.com/openclaw/openclaw/pull/178832) test(agents,plugins,state,ui): remove low-value tests (batch d343)
- [#178895](https://github.com/openclaw/openclaw/pull/178895) fix(clickclack): retain tool completions during slow progress delivery
- [#178845](https://github.com/openclaw/openclaw/pull/178845) fix(sessions): avoid long writer stalls during age retention
- [#178866](https://github.com/openclaw/openclaw/pull/178866) test(runtime): remove low-value tests (batch d346)
- [#178754](https://github.com/openclaw/openclaw/pull/178754) improve(ui): use the shared page header on every built-in page
- [#178877](https://github.com/openclaw/openclaw/pull/178877) fix(speech): Fish Audio and Gradium errors can expose API keys
- [#178712](https://github.com/openclaw/openclaw/pull/178712) test(agents,gateway,plugins,ui): remove low-value tests (batch d338)
- [#178884](https://github.com/openclaw/openclaw/pull/178884) refactor: keep private execution helpers with their owners
- [#178793](https://github.com/openclaw/openclaw/pull/178793) test(runtime,ui): remove low-value tests (batch d342)
- [#178887](https://github.com/openclaw/openclaw/pull/178887) test(ui): avoid chat page imports in state fixtures
- [#178793](https://github.com/openclaw/openclaw/pull/178793) test(runtime,ui): remove low-value tests (batch d342)
- [#178887](https://github.com/openclaw/openclaw/pull/178887) test(ui): avoid chat page imports in state fixtures
- [#178807](https://github.com/openclaw/openclaw/pull/178807) refactor(core): remove vestigial private controls and test seams
- [#164796](https://github.com/openclaw/openclaw/pull/164796) fix(agents): restore saved history for fresh Claude CLI sessions on a native login
- [#178787](https://github.com/openclaw/openclaw/pull/178787) refactor(runtime): retire private construction and reset seams
- [#178835](https://github.com/openclaw/openclaw/pull/178835) refactor: reuse plugin parsing and scenario owners
- [#178493](https://github.com/openclaw/openclaw/pull/178493) feat: attribute delegated work to the initiating human
- [#178761](https://github.com/openclaw/openclaw/pull/178761) improve: keep typing responsive during streamed replies
- [#178843](https://github.com/openclaw/openclaw/pull/178843) refactor(plugins): remove redundant delivery and private bookkeeping
- [#169151](https://github.com/openclaw/openclaw/pull/169151) fix(update): keep the operation deadline on the monotonic clock
- [#178239](https://github.com/openclaw/openclaw/pull/178239) fix(release): backport retrospective batch 1 to 2026.10.6
- [#178855](https://github.com/openclaw/openclaw/pull/178855) fix: expose official support in installer help and failures
- [#172869](https://github.com/openclaw/openclaw/pull/172869) fix(cron): preserve whitespace in command cwd CLI options
- [#178850](https://github.com/openclaw/openclaw/pull/178850) test(core,ui): remove low-value tests (batch d344)
- [#178861](https://github.com/openclaw/openclaw/pull/178861) fix(x): recheck administrator authority before paid lookups
- [#178652](https://github.com/openclaw/openclaw/pull/178652) test(core,plugins,ui): remove low-value tests (batch d334)
- [#178880](https://github.com/openclaw/openclaw/pull/178880) docs(ui): clarify allowed wave-zero survivors
- [#178864](https://github.com/openclaw/openclaw/pull/178864) fix: avoid false failure logs during Gateway shutdown
- [#178831](https://github.com/openclaw/openclaw/pull/178831) test(ui): revert slower shared usage fixture
- [#178883](https://github.com/openclaw/openclaw/pull/178883) fix: keep Linux worker cleanup working as processes exit
- [#178683](https://github.com/openclaw/openclaw/pull/178683) test(agents,ui): remove low-value tests (batch d336)
- [#178691](https://github.com/openclaw/openclaw/pull/178691) test: remove low-value tests (batch d337)
- [#178164](https://github.com/openclaw/openclaw/pull/178164) fix: hide unavailable browser notification setup for guests
- [#178760](https://github.com/openclaw/openclaw/pull/178760) test: remove low-value tests (batch d339)
- [#178695](https://github.com/openclaw/openclaw/pull/178695) feat(openai): opt into 12-hour prompt caching
- [#178746](https://github.com/openclaw/openclaw/pull/178746) refactor(runtime): retire private native test seams
- [#178810](https://github.com/openclaw/openclaw/pull/178810) fix: reuse clean SQLite proof after runtime upgrades
- [#178645](https://github.com/openclaw/openclaw/pull/178645) test(ui): make widget touch velocity deterministic
- [#178836](https://github.com/openclaw/openclaw/pull/178836) refactor: simplify private plugin status and lifecycle state
- [#178863](https://github.com/openclaw/openclaw/pull/178863) improve(ios): reduce resource diagnostic process polling
- [#178856](https://github.com/openclaw/openclaw/pull/178856) test(ui): await observed native touch release
- [#178862](https://github.com/openclaw/openclaw/pull/178862) test(e2e): tolerate Kitchen Sink 0.4.1 registrar probe diagnostics
- [#178613](https://github.com/openclaw/openclaw/pull/178613) refactor(ui): derive model picker search presentation
- [#178648](https://github.com/openclaw/openclaw/pull/178648) fix: interactive widgets missing from public conversation links
- [#178854](https://github.com/openclaw/openclaw/pull/178854) test(ui): advance logs lifecycle polling clock
- [#178852](https://github.com/openclaw/openclaw/pull/178852) fix(google): video errors can expose the request API key
- [#178325](https://github.com/openclaw/openclaw/pull/178325) fix(cli): sanitize terminal controls in marketplace list output
- [#178847](https://github.com/openclaw/openclaw/pull/178847) test(ui): restore independent worker update builds
- [#178231](https://github.com/openclaw/openclaw/pull/178231) fix(release): backport retrospective batch 1 to 2026.10.10
- [#174207](https://github.com/openclaw/openclaw/pull/174207) fix(copilot): use monotonic clock for isolated completion deadline
- [#178830](https://github.com/openclaw/openclaw/pull/178830) refactor: keep private plugin and request frames with owners
- [#174871](https://github.com/openclaw/openclaw/pull/174871) fix(codex): preserve whitespace in /codex bind --cwd paths
- [#175204](https://github.com/openclaw/openclaw/pull/175204) fix(daemon): seed launchd bootstrap teardown retry deadline from a monotonic clock
- [#178747](https://github.com/openclaw/openclaw/pull/178747) fix: recover plugin updates when files are held
- [#178851](https://github.com/openclaw/openclaw/pull/178851) test(ui): advance filtered roster recovery clocks
- [#178751](https://github.com/openclaw/openclaw/pull/178751) perf(usage): batch session cost publication statements
- [#178752](https://github.com/openclaw/openclaw/pull/178752) test(ui): shorten sessions page fixture polling
- [#178722](https://github.com/openclaw/openclaw/pull/178722) fix(doctor): preserve model choices without retirement evidence
- [#178179](https://github.com/openclaw/openclaw/pull/178179) fix(release): recover every failed artifact producer
- [#178833](https://github.com/openclaw/openclaw/pull/178833) refactor(extensions): remove private helper controls
- [#178188](https://github.com/openclaw/openclaw/pull/178188) fix(release): audit backport companion closure
- [#178202](https://github.com/openclaw/openclaw/pull/178202) fix(release): gate integrated branch pushes
- [#178218](https://github.com/openclaw/openclaw/pull/178218) fix(release): recover FRV before plan seal
- [#178791](https://github.com/openclaw/openclaw/pull/178791) fix(subagents): unblock startup while interrupted runs recover
- [#178644](https://github.com/openclaw/openclaw/pull/178644) fix(ui): prepare mascot inputs before drawing
- [#178614](https://github.com/openclaw/openclaw/pull/178614) refactor(ui): keep chat question disclosure with its pane
- [#178759](https://github.com/openclaw/openclaw/pull/178759) fix(doctor): recognize standard systemd unit and drop-in settings
- [#178785](https://github.com/openclaw/openclaw/pull/178785) refactor(plugins): retire unused private state and result paths
- [#178838](https://github.com/openclaw/openclaw/pull/178838) fix(ui): long picker menus jump while scrolling under the pointer
- [#178676](https://github.com/openclaw/openclaw/pull/178676) perf(agents): compact retained prompt-cache diagnostics
- [#178152](https://github.com/openclaw/openclaw/pull/178152) fix(release): reuse admitted changelog descendants
- [#178757](https://github.com/openclaw/openclaw/pull/178757) fix(providers): polling loses proxy policy and media errors expose keys
- [#178806](https://github.com/openclaw/openclaw/pull/178806) test(ui): reuse compiled assets for worker update fixture
- [#178819](https://github.com/openclaw/openclaw/pull/178819) test(ui): narrow Workboard deferred imports
- [#178818](https://github.com/openclaw/openclaw/pull/178818) fix(ios): recover Watch screenshots when the runtime becomes unavailable
- [#178634](https://github.com/openclaw/openclaw/pull/178634) improve(postgres): reduce model-context navigation read work
- [#178588](https://github.com/openclaw/openclaw/pull/178588) refactor(canvas): render the A2UI v0.9 catalog with Solid
- [#178802](https://github.com/openclaw/openclaw/pull/178802) perf(agents): coalesce unchanged workspace attestations
- [#178779](https://github.com/openclaw/openclaw/pull/178779) fix(doctor): finish plugin repair with missing historical archives
- [#174547](https://github.com/openclaw/openclaw/pull/174547) feat(gateway): add deployment-scoped tool and action policy
- [#178767](https://github.com/openclaw/openclaw/pull/178767) fix(doctor): show progress while checks and repairs run
- [#178778](https://github.com/openclaw/openclaw/pull/178778) refactor: keep private runtime composition with callers
- [#178723](https://github.com/openclaw/openclaw/pull/178723) fix: avoid duplicate Claude MCP servers with node execution
- [#178745](https://github.com/openclaw/openclaw/pull/178745) fix(exa): redact reflected search credentials
- [#178798](https://github.com/openclaw/openclaw/pull/178798) fix(cron): keep retention running after database startup
- [#178749](https://github.com/openclaw/openclaw/pull/178749) refactor(plugins): trust concrete setup and replay owners
- [#178796](https://github.com/openclaw/openclaw/pull/178796) perf(ui): narrow MCP view error imports
- [#178753](https://github.com/openclaw/openclaw/pull/178753) perf(sessions): fuse prepared PostgreSQL entry writes
- [#178640](https://github.com/openclaw/openclaw/pull/178640) fix: refresh notification settings after Web Push updates
- [#178786](https://github.com/openclaw/openclaw/pull/178786) fix(gateway): reap adopted children during supervised shutdown
- [#178647](https://github.com/openclaw/openclaw/pull/178647) test: reuse Gateway for usage range checks
- [#178666](https://github.com/openclaw/openclaw/pull/178666) refactor(core): remove unused private helper arguments
- [#178655](https://github.com/openclaw/openclaw/pull/178655) fix: warn when utility models disable session assessments
- [#178786](https://github.com/openclaw/openclaw/pull/178786) fix(gateway): reap adopted children during supervised shutdown
- [#178647](https://github.com/openclaw/openclaw/pull/178647) test: reuse Gateway for usage range checks
- [#178666](https://github.com/openclaw/openclaw/pull/178666) refactor(core): remove unused private helper arguments
- [#178655](https://github.com/openclaw/openclaw/pull/178655) fix: warn when utility models disable session assessments
- [#178800](https://github.com/openclaw/openclaw/pull/178800) test(ui): avoid repeated Vite config compilation
- [#178736](https://github.com/openclaw/openclaw/pull/178736) fix(doctor): stop duplicating reappeared auth-profile archives
- [#178737](https://github.com/openclaw/openclaw/pull/178737) test(ui): restore phone recordings after timing comparison
- [#178735](https://github.com/openclaw/openclaw/pull/178735) fix(ui): settle all catalog owners before picker measurements
- [#178727](https://github.com/openclaw/openclaw/pull/178727) perf(sessions): remove repeated export session predicate
- [#178733](https://github.com/openclaw/openclaw/pull/178733) fix: keep patch release changelog fixes in a compact list
- [#178781](https://github.com/openclaw/openclaw/pull/178781) fix(database): report PostgreSQL agent closes accurately
- [#167456](https://github.com/openclaw/openclaw/pull/167456) feat(plugins): identify retained references blocking reload
- [#178738](https://github.com/openclaw/openclaw/pull/178738) improve(ui): tighten plugin install progress rows
- [#178707](https://github.com/openclaw/openclaw/pull/178707) fix(macos): stop re-running update repair on every launch
- [#178774](https://github.com/openclaw/openclaw/pull/178774) fix(database): first chat fails after PostgreSQL admission reuse
- [#178689](https://github.com/openclaw/openclaw/pull/178689) fix: preserve safe migration causes in update failure reports
- [#178703](https://github.com/openclaw/openclaw/pull/178703) fix(doctor): release legacy agent leases proven older than boot
- [#178765](https://github.com/openclaw/openclaw/pull/178765) fix(ios): avoid blocking screenshot phases on resource diagnostics
- [#178693](https://github.com/openclaw/openclaw/pull/178693) fix(gateway): retain continuation authority for every child run
- [#158682](https://github.com/openclaw/openclaw/pull/158682) fix: package Mac apps without unused SDK declarations
- [#178583](https://github.com/openclaw/openclaw/pull/178583) refactor(canvas): render the A2UI v0.8 catalog with Solid
- [#178711](https://github.com/openclaw/openclaw/pull/178711) perf(agents): retain workspace snapshots after owner writes
- [#178794](https://github.com/openclaw/openclaw/pull/178794) docs: clarify container SQLite storage and safe upgrades
- [#178724](https://github.com/openclaw/openclaw/pull/178724) fix(plugins): keep official installs trusted when Doctor runs from home
- [#178788](https://github.com/openclaw/openclaw/pull/178788) chore(ui): refresh control ui locales
- [#178172](https://github.com/openclaw/openclaw/pull/178172) fix(release): report FRV plan sealing state
- [#178158](https://github.com/openclaw/openclaw/pull/178158) fix(release): show readable SDK acknowledgement diff
- [#139030](https://github.com/openclaw/openclaw/pull/139030) fix: show access guidance when New Session Git discovery is denied
- [#178616](https://github.com/openclaw/openclaw/pull/178616) test(runtime): exercise native fixtures and exact singleton policy
- [#166090](https://github.com/openclaw/openclaw/pull/166090) fix(ios): chat text is too large for a dense transcript and cannot be set below the web's default size
- [#178718](https://github.com/openclaw/openclaw/pull/178718) fix: reduce PostgreSQL round trips for long session hydration
- [#178617](https://github.com/openclaw/openclaw/pull/178617) test(codex): wait for catalog refresh instead of shared idle
- [#178697](https://github.com/openclaw/openclaw/pull/178697) refactor(plugins): use native runtime and Discord error owners
- [#178072](https://github.com/openclaw/openclaw/pull/178072) fix(claws): scheduled Add fails before the new agent is available
- [#178071](https://github.com/openclaw/openclaw/pull/178071) chore: refresh dependencies after seven-day cutoff
- [#178716](https://github.com/openclaw/openclaw/pull/178716) test(ui): observe managed-media run before fixture completes
- [#178734](https://github.com/openclaw/openclaw/pull/178734) test(ui): provide fixed metadata for Vite build fixtures
- [#178534](https://github.com/openclaw/openclaw/pull/178534) feat(ios): isolate simulator startup resource activity
- [#178728](https://github.com/openclaw/openclaw/pull/178728) test(ui): avoid packaged bootstrap in automation fixtures
- [#178725](https://github.com/openclaw/openclaw/pull/178725) test(ui): restore waits after inconclusive speed experiments
- [#178709](https://github.com/openclaw/openclaw/pull/178709) test(ui): avoid app boot in MCP surface fixture
- [#175509](https://github.com/openclaw/openclaw/pull/175509) feat: add Bifrost gateway setup and model discovery
- [#178678](https://github.com/openclaw/openclaw/pull/178678) fix(agents): stop off-catalog discovery after model authority is revoked
- [#178687](https://github.com/openclaw/openclaw/pull/178687) fix: import retained node identities during Doctor repair
- [#178686](https://github.com/openclaw/openclaw/pull/178686) fix: keep 10.4 updater verification compatible with client credentials
- [#178710](https://github.com/openclaw/openclaw/pull/178710) refactor(ui): share native icon and settings owners
- [#178714](https://github.com/openclaw/openclaw/pull/178714) fix(memory): restore PostgreSQL keyword influence in hybrid search
- [#178626](https://github.com/openclaw/openclaw/pull/178626) refactor(runtime): collapse private native implementation seams
- [#178671](https://github.com/openclaw/openclaw/pull/178671) fix: hide sandbox-only github_publish actions from direct sessions
- [#178668](https://github.com/openclaw/openclaw/pull/178668) fix(doctor): recover copied session registries
- [#178694](https://github.com/openclaw/openclaw/pull/178694) fix(agents): recover parent before restoring child completions
- [#178701](https://github.com/openclaw/openclaw/pull/178701) fix: reduce PostgreSQL transcript append round trips
- [#178696](https://github.com/openclaw/openclaw/pull/178696) fix(windows): explain rejected Gateway launcher lines
- [#178720](https://github.com/openclaw/openclaw/pull/178720) refactor(plugins): trust prepared runtime owners
- [#178650](https://github.com/openclaw/openclaw/pull/178650) fix(cron): preserve pending reminder outcomes across restarts
- [#178672](https://github.com/openclaw/openclaw/pull/178672) fix(doctor): warn about network-backed SQLite storage
- [#178489](https://github.com/openclaw/openclaw/pull/178489) fix(ui): remove redundant agent name hover tooltip in sidebar header
- [#178566](https://github.com/openclaw/openclaw/pull/178566) fix(ci): remove unused session view teardown helper
- [#178704](https://github.com/openclaw/openclaw/pull/178704) test(ui): keep shell Gateway fixture imports narrow
- [#178593](https://github.com/openclaw/openclaw/pull/178593) refactor(ui): audit Solid survivors and reuse input and focus primitives
- [#178642](https://github.com/openclaw/openclaw/pull/178642) refactor(ui): retire completed platform listeners
- [#178706](https://github.com/openclaw/openclaw/pull/178706) fix(doctor): repair stale refs with commented model catalogs
- [#178657](https://github.com/openclaw/openclaw/pull/178657) fix: complete 2026.10.6 release qualification repairs
- [#178698](https://github.com/openclaw/openclaw/pull/178698) test(ui): make phone recovery recordings opt-in
- [#178705](https://github.com/openclaw/openclaw/pull/178705) fix(update): don't abort the process census on one unparseable process environment
- [#178702](https://github.com/openclaw/openclaw/pull/178702) fix(update): warn when short deadlines reduce validation time
- [#178690](https://github.com/openclaw/openclaw/pull/178690) refactor(plugins): remove unused private helper modes
- [#178713](https://github.com/openclaw/openclaw/pull/178713) fix(test): preserve Windows cancelled-updater custody coverage
- [#178633](https://github.com/openclaw/openclaw/pull/178633) test: avoid duplicate native settings readiness waits
- [#178673](https://github.com/openclaw/openclaw/pull/178673) fix: stop reopening PostgreSQL connections for usage reports
- [#178688](https://github.com/openclaw/openclaw/pull/178688) fix: migrate approval sockets despite stale legacy projections

#### 🐛 New Issues
- [#177989](https://github.com/openclaw/openclaw/issues/177989) [Bug]: Possible Regression] Kimi Code frequently repeats tool calls, over-polls background processes, and struggles to complete long coding tasks in OpenClaw 2026.10.4/10.5 Summary/ `bug` `regression` `P2` `clawsweeper:no-new-fix-pr` 💬7
- [#178717](https://github.com/openclaw/openclaw/issues/178717) [Bug]: Telegram 2026.10.5 intentional group silence triggers visible-answer retries and public error loops `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:not-repro-on-main` 💬4
- [#178069](https://github.com/openclaw/openclaw/issues/178069) [Bug]: Claw record keeps stale absolute state-dir paths after install relocation; no supported way to relink (2026.10.5) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬4
- [#178000](https://github.com/openclaw/openclaw/issues/178000) [Bug]: Session-state races ('Persisted user turn changed before replay admission', 'Session reader operation is no longer current') trigger cross-provider model fallback as reason=unknown (2026.10.5) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬3
- [#178441](https://github.com/openclaw/openclaw/issues/178441) [Bug]: Owner Telegram conversation held by providerReview with no continuation or recovery action `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬3
- [#178844](https://github.com/openclaw/openclaw/issues/178844) [Feature]: Post-Quantum P2P Channel Adapter via Montana Protocol Core `enhancement` `P3` 💬2
- [#178772](https://github.com/openclaw/openclaw/issues/178772) [Bug]: retry.provider.maxRetries is applied only after the first built-in provider attempt 💬2
- [#178828](https://github.com/openclaw/openclaw/issues/178828) Voice Call (2026.10.5 shipped): voicecall tail cannot access persisted realtime transcripts — store-backed call-log unreachable in release build `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#178804](https://github.com/openclaw/openclaw/issues/178804) [Bug]: Codex plugin: app-server processes accumulate until container hits pids limit (pthread_create EAGAIN), gateway becomes unusable; plugin is auto-re-enabled by OpenAI ChatGPT route `bug` `bug:crash` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#178803](https://github.com/openclaw/openclaw/issues/178803) [Bug]: Control UI / CLI: no way to delete a saved personal model account (Settings → Profile → Connected `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#178589](https://github.com/openclaw/openclaw/issues/178589) [Bug]: doctor run from $HOME scans ~/.openclaw/extensions as a workspace plugin root, so official Codex install is reported unverified `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#178555](https://github.com/openclaw/openclaw/issues/178555) [Bug]: Doctor skips legacy node identity required by the client credential startup gate `bug` `P1` `clawsweeper:source-repro` `impact:crash-loop` 💬2
- [#178546](https://github.com/openclaw/openclaw/issues/178546) doctor: an mtime-preserving bulk copy/restore changes archive inodes → `historical_transcript_deferred` persists indefinitely, and `recover` is a no-op `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#178300](https://github.com/openclaw/openclaw/issues/178300) Settled-turn finalization after a 1-token `length` stop delivers a false success (no task in view, terminal error overwritten with ok) `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#178584](https://github.com/openclaw/openclaw/issues/178584) [Bug]: Client credential cutover skips full-backup fallback for legacy sqlite_stat4 under Node `bug` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#178008](https://github.com/openclaw/openclaw/issues/178008) Discord message abandoned with 'changed while starting work' while the restart-recovery turn holds the session `P2` `impact:message-loss` 💬2
- [#178611](https://github.com/openclaw/openclaw/issues/178611) Codex harness cancels a 20-second task after roughly 12–14 seconds `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` 💬2
- [#178470](https://github.com/openclaw/openclaw/issues/178470) [Bug]: Control UI briefly resets an already restored title during warm reconnect `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#178409](https://github.com/openclaw/openclaw/issues/178409) [Bug]: plugin-sdk/browser-config lost resolveBrowserConfig/resolveBrowserControlAuth in 2026.10.5 without notice; no supported way for a plugin to reach the managed browser `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#178471](https://github.com/openclaw/openclaw/issues/178471) agent exec 缺省临时目录导致容器无法复用 `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#178416](https://github.com/openclaw/openclaw/issues/178416) google-meet: selected microphone menu button is not recognized, leaving talk-back muted `P1` `impact:other` 💬2
- [#178392](https://github.com/openclaw/openclaw/issues/178392) Voice Call: expose persisted realtime call transcripts via CLI/RPC for post-call reporting `P3` 💬2
- [#178408](https://github.com/openclaw/openclaw/issues/178408) Slack: message edit refused after sessions_yield resume — resumed turn loses current conversation/account context `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:needs-live-repro` 💬2
- [#178384](https://github.com/openclaw/openclaw/issues/178384) Env-var budget exceeded on the beta tag (455 vs 454) — check:max-lines-ratchet exits 1 and the max-lines CI job fails; the line-cap ratchet still passes vacuously when origin/main is missing `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬2
- [#178378](https://github.com/openclaw/openclaw/issues/178378) The deprecation-deadline gate covers only the doctor inventory; 8 plugin-compat records are past their removeAfter with CI green 💬2
- [#178367](https://github.com/openclaw/openclaw/issues/178367) safe-regex accepts quantified groups with overlapping alternatives (ReDoS class not fully covered) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬2
- [#178380](https://github.com/openclaw/openclaw/issues/178380) pendingVoiceTranscriptReservations: a voice turn that never settles strands the queue head and every later transcript for that session `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#178359](https://github.com/openclaw/openclaw/issues/178359) [Bug] doctor --fix --non-interactive idles for 15+ min in plugin-capture stage with no output and never reaches agent DB repair (2026.10.3, macOS) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#178351](https://github.com/openclaw/openclaw/issues/178351) Feature request: agent-scoped automations for sandboxed non-owner users (multi-user, one Gateway) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#178177](https://github.com/openclaw/openclaw/issues/178177) [Bug]: Unattended upgrade 2026.9.9 -> 2026.10.5 needs three manual interventions (removed config key, agent DB schema 24->25, zombie update_runs blocking plugin convergence) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬2
- [#178122](https://github.com/openclaw/openclaw/issues/178122) [Bug]: Voice Call migration recovery coverage warning on every update: SQLite schema migration declares no backup resources `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#178121](https://github.com/openclaw/openclaw/issues/178121) [Bug]: Codex migration recovery coverage warning on every update: app-server sidecar migration declares no backup resources `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#178244](https://github.com/openclaw/openclaw/issues/178244) Update failure: invalid-config (2026.10.5) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#178094](https://github.com/openclaw/openclaw/issues/178094) Update failure: candidate-gateway-startup (2026.9.9) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#177987](https://github.com/openclaw/openclaw/issues/177987) [Bug]: Session SQLite migration fails: transcript header filename mismatch `bug` `bug:behavior` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬2
- [#178914](https://github.com/openclaw/openclaw/issues/178914) [Feature]: builtin memory search ranking is not configurable (fixed 30-day decay, no hybrid weights/MMR) — recall regressed on large corpora `clawsweeper:intake:feature` 💬1
- [#178908](https://github.com/openclaw/openclaw/issues/178908) [Bug]: Shared OAuth refresh reopens a completed-deletion agent database while fencing historical peers `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#178912](https://github.com/openclaw/openclaw/issues/178912) [Bug]: Telegram block streaming drops [[tts:text]] voice notes (tts.auto: "tagged") `bug` `bug:behavior` `clawsweeper:intake:bug` 💬1
- [#178913](https://github.com/openclaw/openclaw/issues/178913) Session maintenance cleanup fails every pass: harness deletion hook trips its own owner scope check ("Session mutation harness owner changed: codex") `clawsweeper:intake:bug` `clawsweeper:intake:needs-environment` `clawsweeper:intake:needs-repro` 💬1
- [#178907](https://github.com/openclaw/openclaw/issues/178907) Bug: MiniMax M3.1 Flash (Ollama Pro) tool calls fail 100% — "Provider returned an incomplete or malformed tool call" `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#178906](https://github.com/openclaw/openclaw/issues/178906) Update failure: managed-service-handoff-unavailable (2026.9.4) `P0` `impact:ux-release-blocker` 💬1
- [#178898](https://github.com/openclaw/openclaw/issues/178898) Flaky tests seen during 2026.10.10-beta.3 release validation `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#178890](https://github.com/openclaw/openclaw/issues/178890) Improve iOS release screenshot startup time `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#178085](https://github.com/openclaw/openclaw/issues/178085) [Bug]: Guest notification settings offer setup without required Gateway access `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#178882](https://github.com/openclaw/openclaw/issues/178882) [Feature]: Group Android chat reply notifications under one expandable summary `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#178872](https://github.com/openclaw/openclaw/issues/178872) Control UI plan-usage popup displays 0% despite nonzero OpenAI usage `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#178873](https://github.com/openclaw/openclaw/issues/178873) [Bug]: claude-cli channel turn completes (outBytes>0) but final reply is never committed or delivered; no error logged `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:data-loss` 💬1
- [#178868](https://github.com/openclaw/openclaw/issues/178868) Doctor repair methods lose their check receiver in progress callbacks `clawsweeper:not-repro-on-main` `issue-rating: 🦪 silver shellfish` 💬1
- [#178834](https://github.com/openclaw/openclaw/issues/178834) [Feature]: Option to deliver commentary text on the live `chat` event stream `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#178631](https://github.com/openclaw/openclaw/issues/178631) [Bug]: Settings keeps stale notification status after Web Push updates `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#178829](https://github.com/openclaw/openclaw/issues/178829) Heartbeat final replies are never voiced: `[[tts:text]]` is stripped with `tts.auto: "tagged"` `P2` `impact:message-loss` 💬1
- [#178822](https://github.com/openclaw/openclaw/issues/178822) [Bug]: Coordinator cannot steer its own running child: `sessions_send` returns "Active run has a different requester" (Claude CLI child) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#178823](https://github.com/openclaw/openclaw/issues/178823) [Bug]: updater retention can accept replaced runtime bytes `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#178820](https://github.com/openclaw/openclaw/issues/178820) [Feature]: Opt-in per-agent subuid mapping for rootless Podman sandboxes, so a breakout does not run as the Gateway user `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#178814](https://github.com/openclaw/openclaw/issues/178814) [Bug]: sessionTarget "current" runs in a detached cron session since #98236 `bug` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#178813](https://github.com/openclaw/openclaw/issues/178813) [Bug]: Scheduled agent turns get different owner-only tools on embedded and CLI runtimes `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#178817](https://github.com/openclaw/openclaw/issues/178817) Update failure: invalid-config (2026.9.8) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#178811](https://github.com/openclaw/openclaw/issues/178811) [Feature]: Run scheduled automations as children of the conversation that creates them (tracking) `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#178815](https://github.com/openclaw/openclaw/issues/178815) [Feature]: Consolidate authority inheritance for spawned child sessions `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#178812](https://github.com/openclaw/openclaw/issues/178812) [Feature]: Resolve scheduled-run authority into one per-occurrence execution context `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#178809](https://github.com/openclaw/openclaw/issues/178809) [Bug]: Telegram ingress Worker loses plugin runtime context on Bun; offset persistence retries with "Telegram runtime not initialized" `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#178808](https://github.com/openclaw/openclaw/issues/178808) Voice call (Telnyx realtime): end_call fires before final TTS audio finishes — mid-sentence hangups `P2` `impact:other` 💬1
- [#178805](https://github.com/openclaw/openclaw/issues/178805) [Bug]: Compaction fails on ollama/minimax-m3.1-flash:cloud — summary output budget (6553 tokens) exhausted without visible text (thinking eats the budget) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#178550](https://github.com/openclaw/openclaw/issues/178550) [Bug]: Update report redacts the shared-state migration cause together with the database path `bug` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#178797](https://github.com/openclaw/openclaw/issues/178797) [Feature]: Expose an evaluation-provider type (explicit-evaluation / TypeSafe · Vercel AI Gateway) in Connect-provider so the Decision Model slot is usable `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#178790](https://github.com/openclaw/openclaw/issues/178790) Withdrawn `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#178792](https://github.com/openclaw/openclaw/issues/178792) [Bug]: quarantine.integrity.consume commits a DELETE-journal, synchronous=FULL DB inside the openclaw.sqlite writer admission; a 15.9s commit aborts Gateway startup `P1` `impact:crash-loop` 💬1
- [#178775](https://github.com/openclaw/openclaw/issues/178775) [Bug]: agent model outside modelPolicy.allow is silently replaced by the first allowed catalog model `P1` `impact:auth-provider` 💬1
- [#178771](https://github.com/openclaw/openclaw/issues/178771) memory_search loses scoped ownership when run session key is global `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#178766](https://github.com/openclaw/openclaw/issues/178766) [Bug]: Codex plugin native capture fails with EXDEV across Docker overlay and bind-mounted state directory (2026.10.5) `P2` `impact:auth-provider` 💬1
- [#178551](https://github.com/openclaw/openclaw/issues/178551) [Bug]: 2026.10.4 updater misclassifies the new client credential store as an agent DB during 2026.10.5 activation `bug` `P1` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#178748](https://github.com/openclaw/openclaw/issues/178748) [Feature]: Support non-destructive agent handoff between Gateways `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#178741](https://github.com/openclaw/openclaw/issues/178741) [Bug]: Claw agent refused (consent provenance) after state-dir relocation; no supported way to rebase install record or accept reviewed live config `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#178539](https://github.com/openclaw/openclaw/issues/178539) [Bug]: Windows launcher-content parse failures collapse into one generic "service command could not be inspected" — no line, no reason, and in-app update stays permanently disabled `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#178739](https://github.com/openclaw/openclaw/issues/178739) [Feature]: Personal coordination hub for explicitly linked independent sessions `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#178731](https://github.com/openclaw/openclaw/issues/178731) [Bug]: beta.2 native child completion resumes parent, then authority/hook failure and local 502 leave no final reply (patched installation) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#178719](https://github.com/openclaw/openclaw/issues/178719) [Bug]: 2026.10.4 app-managed Gateway moved to per-build bun path; macOS Automation grant lost, iMessage sends fail with AppleScript -1712 `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` `impact:message-loss` 💬1
- [#178547](https://github.com/openclaw/openclaw/issues/178547) [Bug]: Client credential cutover blocks update on legacy exec socket path/projection mismatch without repair guidance `bug` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#178190](https://github.com/openclaw/openclaw/issues/178190) [Bug]: doctor --fix disables skills whose required binaries exist on a paired node (2026.10.5) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#178681](https://github.com/openclaw/openclaw/issues/178681) Google Meet WebAudio playback is missed by DOM-only native input capture `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#178682](https://github.com/openclaw/openclaw/issues/178682) bug(session-sqlite): foreign key check failure and quarantine caused by session pruning without active foreign_keys pragma `P1` `impact:session-state` 💬1
- [#178656](https://github.com/openclaw/openclaw/issues/178656) [Bug]: Native Git update passes candidate checks then fails Git status and cleanup before activation `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#178637](https://github.com/openclaw/openclaw/issues/178637) Update failure: finalize:doctor (2026.9.5) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#178591](https://github.com/openclaw/openclaw/issues/178591) Expose V8 heap headroom and retained-memory alert metrics `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#178625](https://github.com/openclaw/openclaw/issues/178625) [Bug]: opencode-go: gpt-6-luna missing from bundled static catalog → "Unknown model" in isolated completions (session observer) `P2` `impact:auth-provider` 💬1
- [#178619](https://github.com/openclaw/openclaw/issues/178619) [Bug]: Japanese CP932 CSV attachments rejected by host-read validation `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#178491](https://github.com/openclaw/openclaw/issues/178491) [Bug]: backup record --bytes silently coerces hex/octal/binary/exponent values `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#178310](https://github.com/openclaw/openclaw/issues/178310) Files saves can overwrite a replacement workspace after a same-chat reset `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#178609](https://github.com/openclaw/openclaw/issues/178609) Update failure: gateway-recovery-verification (2026.10.5) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `P0` 💬1
- [#178597](https://github.com/openclaw/openclaw/issues/178597) [Bug]: Windows doctor --fix cannot enter maintenance after Discord plugin installation failure `bug` `bug:behavior` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#178608](https://github.com/openclaw/openclaw/issues/178608) [Bug]: Commentary media display rewrite invalidates the active context-engine generation (2026.10.5) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#178604](https://github.com/openclaw/openclaw/issues/178604) computer tool: models pick `target: "gateway"` on hosts where only a paired node has a screen `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#178605](https://github.com/openclaw/openclaw/issues/178605) Cloud workers: the node-side runtime `npm install` re-resolves every dependency from the registry (~2 min of a Windows start) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#178576](https://github.com/openclaw/openclaw/issues/178576) [Feature]: Global repair target for cron failures (repair requests for jobs without an owner conversation) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#178565](https://github.com/openclaw/openclaw/issues/178565) [Bug]: Cancelled child receipts prevent replacement-child handoff at sessions_yield (2026.10.5) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#178571](https://github.com/openclaw/openclaw/issues/178571) [Feature]: Option to exclude automation (cron) runs from Web Push "Agent finished" notifications `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#178561](https://github.com/openclaw/openclaw/issues/178561) [Feature]: Non-UI route to connect the system GitHub identity (CLI/device flow) `P3` `impact:ux-friction` `clawsweeper:bulk-filed` 💬1
- [#178562](https://github.com/openclaw/openclaw/issues/178562) [Feature]: Cloud-worker machine inventory, cost ledger and per-profile spend caps `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#178560](https://github.com/openclaw/openclaw/issues/178560) [Bug]: Cloud-worker exec with tools.exec.mode=auto dials ws://127.0.0.1:18789 on the worker and fails `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#178559](https://github.com/openclaw/openclaw/issues/178559) [Feature]: Presence and device-state triggers for agent runs `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#178558](https://github.com/openclaw/openclaw/issues/178558) [Feature]: Paired-node Gateway liveness watchdog with out-of-band alert and optional safe restart `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#178554](https://github.com/openclaw/openclaw/issues/178554) [Bug]: Gateway drops agent turn for immediate-dispatch channel messages with released http request root ("Gateway is temporarily unavailable") `P2` `clawsweeper:needs-info` `impact:message-loss` `issue-rating: 🦐 gold shrimp` 💬1
- [#178557](https://github.com/openclaw/openclaw/issues/178557) [Bug]: Codex harness drops currentChannelProvider, so plugin tools in internal chat.send turns with a channel reply route get a webchat delivery context `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#178549](https://github.com/openclaw/openclaw/issues/178549) [Bug]: Claude CLI models report missing-auth when the subscription is a stored setup-token profile, though claude-cli turns run `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#178548](https://github.com/openclaw/openclaw/issues/178548) [Bug]: Multi-agent Gateways leak ~10 MiB main heap per cold tools.effective: workspace-mismatched lending re-imports npm plugin (codex) graphs `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#178540](https://github.com/openclaw/openclaw/issues/178540) [Feature]: Share Extension destination picker — send to pinned chats or main chat `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#178532](https://github.com/openclaw/openclaw/issues/178532) [Feature]: Record the provider-reported response model (gen_ai.response.model) on diagnostics-otel model.call / model.usage spans `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#178514](https://github.com/openclaw/openclaw/issues/178514) hooks: /hooks/wake and /hooks/agent silently turn unknown or misspelled wake modes into an immediate wake `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#178513](https://github.com/openclaw/openclaw/issues/178513) Gateway startup: "Agent schema admission changed before publication; retry the operation" leaves agents degraded until restart `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#178507](https://github.com/openclaw/openclaw/issues/178507) mattermost: slash commands and model-picker buttons show an empty pairing code when the pending pairing queue is full `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#178506](https://github.com/openclaw/openclaw/issues/178506) memory_get: oversized first line drops nextFrom, hiding all following lines `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#178504](https://github.com/openclaw/openclaw/issues/178504) [Bug]: Workboard and other plugin-state SQLite stores fail with "unable to open database file" after the first post-start plugin generation swap (2026.10.5, macOS) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#178502](https://github.com/openclaw/openclaw/issues/178502) [Bug]: claude-cli models report missing-auth in models.list when the agent model is pinned to a token profile and the native Claude login is absent (Android app then blocks sending) `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬1
- [#178499](https://github.com/openclaw/openclaw/issues/178499) web_fetch: extractMode text glues headings, paragraphs and list items together when Readability handles minified HTML `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#178490](https://github.com/openclaw/openclaw/issues/178490) feishu: card footer usage metrics (tokens/cache/context/model) missing since 2026.9.x — official plugin has no footer implementation in 10.4/10.5 `P2` `impact:ux-friction` 💬1
- [#178484](https://github.com/openclaw/openclaw/issues/178484) [Feature]: Opt-in cross-turn outage recovery with conservative failback and schedule-preserving task recovery `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#178209](https://github.com/openclaw/openclaw/issues/178209) [Bug]: Control UI: Ask OpenClaw question card choices are announced as radio buttons but arrow keys do nothing and every choice is a Tab stop `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#178481](https://github.com/openclaw/openclaw/issues/178481) [Bug]: Dreaming REM repeatedly identifies German pronoun "ich" as a theme (25/27 reports) `bug` `no-stale` `bug:behavior` `P2` 💬1
- [#178397](https://github.com/openclaw/openclaw/issues/178397) [Bug]: Combined MCP catalog serves stale sibling tools when invalidation lands during discovery `bug` `bug:behavior` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#178468](https://github.com/openclaw/openclaw/issues/178468) [Feature]: Smoother sign-in handoff for Website dashboards `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#178472](https://github.com/openclaw/openclaw/issues/178472) : [Bug]: Windows OpenClaw 2026.10.5 update blocked by Codex EEXIST symlink failure and migration-order refusal `bug` `bug:crash` `P1` `impact:crash-loop` 💬1
- [#178467](https://github.com/openclaw/openclaw/issues/178467) [Feature]: Recognizable gallery previews for Website dashboards `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#178454](https://github.com/openclaw/openclaw/issues/178454) macOS: node exec fails with GatewayStateOwnerContentionError before command execution `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#178430](https://github.com/openclaw/openclaw/issues/178430) Skill Workshop: option to suppress 'Learned:' chat announcements while keeping autonomous learning `P3` `impact:ux-friction` 💬1
- [#178421](https://github.com/openclaw/openclaw/issues/178421) [Bug]: Shared-store cutover can bypass a configured non-main auth inheritance owner `bug` `no-stale` `bug:behavior` `P1` 💬1
- [#178418](https://github.com/openclaw/openclaw/issues/178418) Update failure: package-swap (2026.9.9) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#178413](https://github.com/openclaw/openclaw/issues/178413) [Bug]: Meeting transcripts stop saving captions once a CLI join returns: every periodic capture fails with "Gateway requester authority changed" `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#178410](https://github.com/openclaw/openclaw/issues/178410) [Feature] Show approval scopes on pending node pairing requests `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#178411](https://github.com/openclaw/openclaw/issues/178411) [Feature] Show plugin trust status in plugins list output `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#178404](https://github.com/openclaw/openclaw/issues/178404) [Bug]: /usage full footer missing in Telegram direct messages using message-tool-only source delivery `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#178394](https://github.com/openclaw/openclaw/issues/178394) [Bug]: Native hook relay disposes the predecessor before successor registration, losing reentrant same-id registrations `bug` `bug:behavior` `clawsweeper:bulk-filed` 💬1
- [#178402](https://github.com/openclaw/openclaw/issues/178402) `HTTP_PROXY` in the gateway environment silently downgrades the SSRF guard for provider asset downloads `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#178396](https://github.com/openclaw/openclaw/issues/178396) [Bug]: Remote model catalog is published while a plugin replacement drain is pending `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#178398](https://github.com/openclaw/openclaw/issues/178398) [Bug]: macOS app sidebar pins main thread at ~100% CPU and lags typing with ~600 sessions `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#178395](https://github.com/openclaw/openclaw/issues/178395) Codex native: a grandchild's completion is dropped as "history owner contradictory" and its assignment replays on every restart `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#178355](https://github.com/openclaw/openclaw/issues/178355) [Feature]: Shared desktop ownership across native MCP computer-use and Browser `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#178391](https://github.com/openclaw/openclaw/issues/178391) Behavior bug (incorrect output/state without crash) `P1` `impact:message-loss` `impact:auth-provider` 💬1
- [#178387](https://github.com/openclaw/openclaw/issues/178387) [2026.10.10-beta.1] pdf tool: native Anthropic path sends setup-token/OAuth credential as x-api-key → 401 "invalid x-api-key" `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#178383](https://github.com/openclaw/openclaw/issues/178383) The logging test shard fails 8 tests on v2026.10.10-beta.2 (console capture and subsystem logger enablement) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#178379](https://github.com/openclaw/openclaw/issues/178379) MEDIA: reply directive: a relative source is read relative to the Gateway cwd because localRoots "any" skips the containment check `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `impact:security` 💬1
- [#178382](https://github.com/openclaw/openclaw/issues/178382) test:changed and the CLI startup budget check require origin/main to be present in the checkout `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#178381](https://github.com/openclaw/openclaw/issues/178381) Fast unit shard: 3 failures on v2026.10.10-beta.2 in session owner / state retention tests `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#178374](https://github.com/openclaw/openclaw/issues/178374) No attempt or size budget on the model-facing surface: one compaction can bill 18-24 summarizer calls, and tool descriptions, images and utility completions are sized far above their output contract `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🦪 silver shellfish` 💬1
- [#178368](https://github.com/openclaw/openclaw/issues/178368) Host exec children inherit provider credentials (OPENAI_API_KEY, ANTHROPIC_API_KEY, ...) and the gateway admin bearer token from the gateway environment `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#178364](https://github.com/openclaw/openclaw/issues/178364) [Bug]: doctor --fix drains and stops the Gateway, then exits on unappliable config fixes and leaves it stopped (2026.9.6, systemd) `P1` `impact:crash-loop` 💬1
- [#178370](https://github.com/openclaw/openclaw/issues/178370) Plugin discovery activates plugins without an install record or allowlist entry; plugins run in-process with full gateway privileges `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#178372](https://github.com/openclaw/openclaw/issues/178372) Plugin installs run with npm_config_allow_git=all and npm_config_allow_remote=all, so a transitive git dependency is fetched outside registry integrity guarantees `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#178371](https://github.com/openclaw/openclaw/issues/178371) File log transport persists raw secret values while every other log surface redacts `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#178365](https://github.com/openclaw/openclaw/issues/178365) [Bug]: model fallback records OpenRouter finish_reason=content_filter (isError run) as candidate_succeeded; chain stops after a refusal `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#178373](https://github.com/openclaw/openclaw/issues/178373) Agent loop has no run-level turn/token budget, tool-loop detection is opt-in, and retained history is re-billed every turn `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-live-repro` 💬1
- [#178375](https://github.com/openclaw/openclaw/issues/178375) check:max-lines-ratchet only counts grandfathered suppressions; it never measures a file against the cap `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:not-repro-on-main` 💬1
- [#178357](https://github.com/openclaw/openclaw/issues/178357) [Bug]: Tlon stops answering for minutes after a silent network drop `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#178353](https://github.com/openclaw/openclaw/issues/178353) Make candidate migration rehearsal budget configurable and report doctor failure cause `P2` `impact:ux-friction` 💬1
- [#178350](https://github.com/openclaw/openclaw/issues/178350) Update failure: gateway-recovery-verification (2026.10.3) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#178349](https://github.com/openclaw/openclaw/issues/178349) [Feature]: Pin persistent, on-demand Portal apps to dashboards `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#178346](https://github.com/openclaw/openclaw/issues/178346) [Feature]: systemd installs have no pre-start Doctor step, so a package replaced outside openclaw update leaves the Gateway down `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#178322](https://github.com/openclaw/openclaw/issues/178322) Doctor on read-only Docker root: writable path requirements and fatal openat2 EROFS `P2` `clawsweeper:needs-info` `impact:crash-loop` `issue-rating: 🦪 silver shellfish` 💬1
- [#178031](https://github.com/openclaw/openclaw/issues/178031) [Bug]: Session-only guests cannot select people in existing conversations `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#178255](https://github.com/openclaw/openclaw/issues/178255) [Bug]: 2026.10.5 Gateway failed to start: database is locked during startup recovery `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#178334](https://github.com/openclaw/openclaw/issues/178334) [Bug]: parent session tool surface reports "Tool <name> not found" after ACP subagent completion event delivery; recovers only on turn boundary `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#178264](https://github.com/openclaw/openclaw/issues/178264) Human mentions can commit without reaching the recipient Inbox `P2` `clawsweeper:source-repro` `impact:message-loss` `issue-rating: 🦞 diamond lobster` 💬1
- [#178330](https://github.com/openclaw/openclaw/issues/178330) [Bug]: Discord: /codex detach and rebind are not saved, so the binding returns after a Gateway restart `bug` `bug:behavior` `P1` `clawsweeper:source-repro` 💬1
- [#178315](https://github.com/openclaw/openclaw/issues/178315) [Bug]: requester settle wake fails with "This turn has ended" after resuming a child spawned from a profile-less turn `P2` `impact:session-state` `impact:message-loss` 💬1
- [#178275](https://github.com/openclaw/openclaw/issues/178275) [Bug]: Long talk-back replies lose most of their audio: the 2 s output cap treats normal faster-than-real-time streaming as stuck playback `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#178291](https://github.com/openclaw/openclaw/issues/178291) [Bug]: 2026.10.4→10.5 chat update fails post-activation Doctor on offline-maintenance authority `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `P0` 💬1
- [#178189](https://github.com/openclaw/openclaw/issues/178189) [Bug]: doctor keeps updater runtimes when an unrelated user process has an unreadable cwd (gpg-agent, fusermount3) (2026.10.5) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#178283](https://github.com/openclaw/openclaw/issues/178283) iOS release: identify resource contention with bounded diagnostics `P2` `issue-rating: 🌊 off-meta tidepool` `impact:other` 💬1
- [#178274](https://github.com/openclaw/openclaw/issues/178274) [Bug]: Control UI provider sign-in ended by the Gateway shows the bare word "cancelled" `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#178265](https://github.com/openclaw/openclaw/issues/178265) [Bug]: Control UI: chat file "Open in editor" button stays English in every language `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#178261](https://github.com/openclaw/openclaw/issues/178261) [Bug]: Control UI: model provider card buttons (Connect provider, Test connection, Set API key, Remove key) do not say which provider they act on `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#178272](https://github.com/openclaw/openclaw/issues/178272) Internal completion-event turns (media generation / subagent settle) always run with the restart-safe tool surface, with no notice and no config override `P2` `impact:ux-friction` 💬1
- [#178257](https://github.com/openclaw/openclaw/issues/178257) [Bug]: Control UI: "Create PR" links are named "Create a pull request for {branch}", so voice control cannot click them by their visible label `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#178240](https://github.com/openclaw/openclaw/issues/178240) [Bug]: Control UI: starting a session from the command palette drops keyboard focus, and a failed start leaves it lost `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#178235](https://github.com/openclaw/openclaw/issues/178235) [Bug]: Gateway-relay Talk: the user's finalized utterance is branched off the visible history when the agent consult starts `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#178003](https://github.com/openclaw/openclaw/issues/178003) Cron jobs created from a Codex turn silently drop Codex app tools (e.g. Notion) from toolsAllow `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:needs-live-repro` 💬1
- [#178206](https://github.com/openclaw/openclaw/issues/178206) [Bug]: Qwen/vLLM partial tool markers leak into text events before native tool calls (2026.10.5) `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#178032](https://github.com/openclaw/openclaw/issues/178032) [Bug]: `openclaw acp` turns a failed turn into a successful, empty `end_turn`; the Gateway's error text (e.g. "The model reached its output token limit…") never reaches the ACP client `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#178199](https://github.com/openclaw/openclaw/issues/178199) [Feature]: Per-agent ACP (acpx) permissionMode (supersedes #40332) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#178196](https://github.com/openclaw/openclaw/issues/178196) [Bug]: Control UI: Dreaming toggle in the agent Memory panel is a plain button with no on/off state `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#178191](https://github.com/openclaw/openclaw/issues/178191) [Feature]: allow retention flags (--keep-daily/weekly/monthly) for local `openclaw backup create --output` `P3` `impact:ux-friction` `clawsweeper:bulk-filed` 💬1
- [#178182](https://github.com/openclaw/openclaw/issues/178182) [Bug]: Responses status-only events reset the no-progress timeout without producing output `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#178180](https://github.com/openclaw/openclaw/issues/178180) [Bug]: sessions_send refused forever for sessions spawned by an isolated cron run once the 7-day cron registry pass prunes the run row `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#178174](https://github.com/openclaw/openclaw/issues/178174) [Bug]: Control UI: Settings switches and choices go natively disabled while busy and drop keyboard focus to the page `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#178166](https://github.com/openclaw/openclaw/issues/178166) [Bug]: Docker sandbox cleanup deletes a container that a concurrent run is starting `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#178161](https://github.com/openclaw/openclaw/issues/178161) [Bug]: Control UI: MCP server Disable/Enable/Sign in buttons do not say which server they act on `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#178059](https://github.com/openclaw/openclaw/issues/178059) [Bug]: 2026.10.4 → 2026.10.5 candidate snapshot aborts with SQLite worker queue capacity reached `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#178138](https://github.com/openclaw/openclaw/issues/178138) [Bug]: Control UI: table, Copy ID, usage session and GitHub code copy results are not announced to screen readers `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#178137](https://github.com/openclaw/openclaw/issues/178137) [Bug]: Control UI: repeated row buttons all have the same screen reader name (session menus, worktree Delete/Restore, App settings) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#178136](https://github.com/openclaw/openclaw/issues/178136) [Bug]: Control UI: Pair device dialog does not announce pending device requests to screen readers `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#178133](https://github.com/openclaw/openclaw/issues/178133) status --usage: OpenRouter usage always "Usage unavailable" on Node 24 — wrapped fetch handed a bundled-undici dispatcher (UND_ERR_INVALID_ARG swallowed) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#178120](https://github.com/openclaw/openclaw/issues/178120) Telegram answers to steered inputs can quote the wrong source message `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1

#### 🔒 Closed Issues
- [#169586](https://github.com/openclaw/openclaw/issues/169586) [Bug]: Windows LINE Doctor contract capture fails with EEXIST on an undici-types alias
- [#173764](https://github.com/openclaw/openclaw/issues/173764) [Bug]: openclaw update hangs forever in post-activation doctor step — no step-level timeout, gateway down during entire hang (2026.10.10-beta.1)
- [#167385](https://github.com/openclaw/openclaw/issues/167385) [Bug]: hand-deleted sessions-delete archive (.jsonl.deleted.*.zst) permanently blocks plugin session repair, codex data upgrade and update verification
- [#175646](https://github.com/openclaw/openclaw/issues/175646) [Bug]: agents.defaults.utilityModel accepts routes that cannot run session-observer work; no config-time validation and the observer shutdown is log-only
- [#125640](https://github.com/openclaw/openclaw/issues/125640) [Bug][Regression] Memory index still fails on item-count batch limits (千帆 16, 火山 10) — #80226 never actually fixed
- [#162899](https://github.com/openclaw/openclaw/issues/162899) [Bug][Windows] Control UI managed update repeatedly freezes in validating before package activation
- [#160214](https://github.com/openclaw/openclaw/issues/160214) Doctor reports missing native plugin captures under a retired read-only snapshot after upgrade
- [#177707](https://github.com/openclaw/openclaw/issues/177707) [Bug]: Update with TMPDIR set still fills the home disk and stops on update-recovery-pending
- [#147251](https://github.com/openclaw/openclaw/issues/147251) Web Console Realtime Talk output terminates early, sometimes truncating both audio and transcript
- [#168534](https://github.com/openclaw/openclaw/issues/168534) [Bug]: macOS app runs `openclaw update repair` on every launch and stops the Gateway for ~2 minutes
- [#171980](https://github.com/openclaw/openclaw/issues/171980) Update failure: update (2026.10.1)
- [#169477](https://github.com/openclaw/openclaw/issues/169477) Update failure: package-doctor (2026.9.9)
- [#171122](https://github.com/openclaw/openclaw/issues/171122) [Bug]: update-runtime retention path still aborts process census on PID 1 ("Could not classify PID 1: working directory is unavailable") on 2026.10.3 stable
- [#145290](https://github.com/openclaw/openclaw/issues/145290) Update failure: runtime-verification-failed (2026.9.3)
- [#123557](https://github.com/openclaw/openclaw/issues/123557) [Bug]: ACP session/new cwd is not propagated to Gateway chat.send; agent runs in default workspace
- [#83354](https://github.com/openclaw/openclaw/issues/83354) Helper commands can silently resurrect stopped user-level openclaw-gateway units
- [#178069](https://github.com/openclaw/openclaw/issues/178069) [Bug]: Claw record keeps stale absolute state-dir paths after install relocation; no supported way to relink (2026.10.5)
- [#145723](https://github.com/openclaw/openclaw/issues/145723) Skill Workshop: stale proposals hidden in UI with no cleanup action
- [#146946](https://github.com/openclaw/openclaw/issues/146946) Bug: recovered tool-finalizer answer is dropped after a message progress reply
- [#161977](https://github.com/openclaw/openclaw/issues/161977) doctor/update status report standard systemd directives in drop-ins as "unrecognized setting", and the unit-PATH check contradicts itself
- [#154636](https://github.com/openclaw/openclaw/issues/154636) Bug: openclaw doctor --fix takes too long with no progress indication
- [#137925](https://github.com/openclaw/openclaw/issues/137925) [Bug]: Windows legacy agent DB leases survive PID reuse and block Doctor
- [#127245](https://github.com/openclaw/openclaw/issues/127245) webui: duplicate 3.4 MB sessions.usage responses starve Gateway HTTP after SQLite fix
- [#163152](https://github.com/openclaw/openclaw/issues/163152) [Feature]: Keep more than one idle agent-DB native owner warm on multi-agent gateways (single process-wide idle slot forces reopens)
- [#175644](https://github.com/openclaw/openclaw/issues/175644) [Bug]: LM Studio native /api/v1 calls lose their Authorization header with a store-backed SecretRef - preload 401, JIT 8192 context, every run dies on context overflow
- [#130144](https://github.com/openclaw/openclaw/issues/130144) [Feature]: Boundary-aware, configurable Telegram progress-line clipping (Slack/Matrix parity)
- [#162769](https://github.com/openclaw/openclaw/issues/162769) [Feature]: Give message-tool sends the destination channel's delivery-format contract the default route already gets
- [#145842](https://github.com/openclaw/openclaw/issues/145842) [Bug]: No Linux .deb/.AppImage attached to any release since v2026.8.2 (4 releases and counting), while macOS/Windows ship every time
- [#145871](https://github.com/openclaw/openclaw/issues/145871) Update failure: global-install-failed (2026.9.3)
- [#96334](https://github.com/openclaw/openclaw/issues/96334) lightContext causes missing tools/rules in isolated sessions
- [#176889](https://github.com/openclaw/openclaw/issues/176889) [Bug]: Workboard dispatch cannot start a card whose fixed worker session is archived; each rejection consumes the retry budget
- [#169842](https://github.com/openclaw/openclaw/issues/169842) [Bug]: plugins update on Windows cannot upgrade in place — pinned-spec "already at" resolution or EPERM rename over existing install dir
- [#178772](https://github.com/openclaw/openclaw/issues/178772) [Bug]: retry.provider.maxRetries is applied only after the first built-in provider attempt
- [#178828](https://github.com/openclaw/openclaw/issues/178828) Voice Call (2026.10.5 shipped): voicecall tail cannot access persisted realtime transcripts — store-backed call-log unreachable in release build
- [#178589](https://github.com/openclaw/openclaw/issues/178589) [Bug]: doctor run from $HOME scans ~/.openclaw/extensions as a workspace plugin root, so official Codex install is reported unverified
- [#175543](https://github.com/openclaw/openclaw/issues/175543) [Feature]: Add Bifrost as a bundled provider
- [#178555](https://github.com/openclaw/openclaw/issues/178555) [Bug]: Doctor skips legacy node identity required by the client credential startup gate
- [#178546](https://github.com/openclaw/openclaw/issues/178546) doctor: an mtime-preserving bulk copy/restore changes archive inodes → `historical_transcript_deferred` persists indefinitely, and `recover` is a no-op
- [#163172](https://github.com/openclaw/openclaw/issues/163172) [Bug]: `openclaw update --timeout` replaces the size-scaled candidate validation budget, so a generous-looking timeout can shorten it on large state
- [#177712](https://github.com/openclaw/openclaw/issues/177712) Model configured `reasoning: false` that actually emits reasoning gets its reasoning channel discarded, producing malformed structured output with no warning
- [#170301](https://github.com/openclaw/openclaw/issues/170301) [Bug]: CI: managed handoff "revoked requester" test fails on Linux
- [#178008](https://github.com/openclaw/openclaw/issues/178008) Discord message abandoned with 'changed while starting work' while the restart-recovery turn holds the session
- [#166304](https://github.com/openclaw/openclaw/issues/166304) [Feature]: Run memory-wiki whole-vault page reads and scoring off the gateway main thread (remaining after #152487)
- [#178470](https://github.com/openclaw/openclaw/issues/178470) [Bug]: Control UI briefly resets an already restored title during warm reconnect
- [#146187](https://github.com/openclaw/openclaw/issues/146187) [Bug]: A PATH directory named like a required binary makes `skills check` report the skill as ready
- [#163190](https://github.com/openclaw/openclaw/issues/163190) [Feature]: Give /btw side answers the channel delivery format contract that replies, cron announces, and subagent announces already get
- [#178416](https://github.com/openclaw/openclaw/issues/178416) google-meet: selected microphone menu button is not recognized, leaving talk-back muted
- [#178392](https://github.com/openclaw/openclaw/issues/178392) Voice Call: expose persisted realtime call transcripts via CLI/RPC for post-call reporting
- [#178378](https://github.com/openclaw/openclaw/issues/178378) The deprecation-deadline gate covers only the doctor inventory; 8 plugin-compat records are past their removeAfter with CI green
- [#178122](https://github.com/openclaw/openclaw/issues/178122) [Bug]: Voice Call migration recovery coverage warning on every update: SQLite schema migration declares no backup resources
- [#178121](https://github.com/openclaw/openclaw/issues/178121) [Bug]: Codex migration recovery coverage warning on every update: app-server sidecar migration declares no backup resources
- [#174368](https://github.com/openclaw/openclaw/issues/174368) [Bug]: Chat Desktop panel offers Retry instead of guiding users through missing desktop setup
- [#177697](https://github.com/openclaw/openclaw/issues/177697) [Bug]: Update canary lint tells a lan gateway it is loopback-only
- [#177987](https://github.com/openclaw/openclaw/issues/177987) [Bug]: Session SQLite migration fails: transcript header filename mismatch
- [#177876](https://github.com/openclaw/openclaw/issues/177876) [Bug]: 2026.10.5 Doctor runtime cleanup blocked by sd-pam with systemd --user --deserialize
- [#176649](https://github.com/openclaw/openclaw/issues/176649) [Docs Bug]: llama.cpp plugin docs not up to date
- [#178906](https://github.com/openclaw/openclaw/issues/178906) Update failure: managed-service-handoff-unavailable (2026.9.4)
- [#178085](https://github.com/openclaw/openclaw/issues/178085) [Bug]: Guest notification settings offer setup without required Gateway access
- [#178868](https://github.com/openclaw/openclaw/issues/178868) Doctor repair methods lose their check receiver in progress callbacks
- [#169473](https://github.com/openclaw/openclaw/issues/169473) Doctor rewrites model choices the provider still serves
- [#178631](https://github.com/openclaw/openclaw/issues/178631) [Bug]: Settings keeps stale notification status after Web Push updates
- [#178829](https://github.com/openclaw/openclaw/issues/178829) Heartbeat final replies are never voiced: `[[tts:text]]` is stripped with `tts.auto: "tagged"`
- [#176062](https://github.com/openclaw/openclaw/issues/176062) doctor: reappeared identical auth profile sources are re-archived on every run (unbounded .migrated-* litter)
- [#178808](https://github.com/openclaw/openclaw/issues/178808) Voice call (Telnyx realtime): end_call fires before final TTS audio finishes — mid-sentence hangups
- [#178550](https://github.com/openclaw/openclaw/issues/178550) [Bug]: Update report redacts the shared-state migration cause together with the database path
- [#178790](https://github.com/openclaw/openclaw/issues/178790) Withdrawn
- [#178792](https://github.com/openclaw/openclaw/issues/178792) [Bug]: quarantine.integrity.consume commits a DELETE-journal, synchronous=FULL DB inside the openclaw.sqlite writer admission; a 15.9s commit aborts Gateway startup
- [#177288](https://github.com/openclaw/openclaw/issues/177288) [Feature]: Containerized deployment docs — upgrade sequencing and SQLite storage requirements
- [#178775](https://github.com/openclaw/openclaw/issues/178775) [Bug]: agent model outside modelPolicy.allow is silently replaced by the first allowed catalog model
- [#178766](https://github.com/openclaw/openclaw/issues/178766) [Bug]: Codex plugin native capture fails with EXDEV across Docker overlay and bind-mounted state directory (2026.10.5)
- [#178551](https://github.com/openclaw/openclaw/issues/178551) [Bug]: 2026.10.4 updater misclassifies the new client credential store as an agent DB during 2026.10.5 activation
- [#178539](https://github.com/openclaw/openclaw/issues/178539) [Bug]: Windows launcher-content parse failures collapse into one generic "service command could not be inspected" — no line, no reason, and in-app update stays permanently disabled
- [#177286](https://github.com/openclaw/openclaw/issues/177286) [Feature]: openclaw doctor checks state on NAS/network storage for SQLite WAL risk
- [#177860](https://github.com/openclaw/openclaw/issues/177860) [Bug]: `openclaw doctor --fix` calls a models.json with comments "invalid JSON" and skips the stale model reference repair
- [#178547](https://github.com/openclaw/openclaw/issues/178547) [Bug]: Client credential cutover blocks update on legacy exec socket path/projection mismatch without repair guidance
- [#178190](https://github.com/openclaw/openclaw/issues/178190) [Bug]: doctor --fix disables skills whose required binaries exist on a paired node (2026.10.5)
- [#178682](https://github.com/openclaw/openclaw/issues/178682) bug(session-sqlite): foreign key check failure and quarantine caused by session pruning without active foreign_keys pragma
- [#178591](https://github.com/openclaw/openclaw/issues/178591) Expose V8 heap headroom and retained-memory alert metrics
- [#175338](https://github.com/openclaw/openclaw/issues/175338) [Bug]: /models and models status name a saved profile while inference uses the provider's configured api-key
- [#178625](https://github.com/openclaw/openclaw/issues/178625) [Bug]: opencode-go: gpt-6-luna missing from bundled static catalog → "Unknown model" in isolated completions (session observer)
- [#178310](https://github.com/openclaw/openclaw/issues/178310) Files saves can overwrite a replacement workspace after a same-chat reset
- [#177311](https://github.com/openclaw/openclaw/issues/177311) sessions list shows the raw model alias under the default provider (openai/opus) for sessions with no persisted model: resolveSessionDisplayDefaults skips alias resolution
- [#177684](https://github.com/openclaw/openclaw/issues/177684) [Bug]: repaired updater cancellation lineage still blocks subsequent updates
- [#178561](https://github.com/openclaw/openclaw/issues/178561) [Feature]: Non-UI route to connect the system GitHub identity (CLI/device flow)
- [#176239](https://github.com/openclaw/openclaw/issues/176239) signal: streaming.chunkMode newline is ignored for formatted outbound text (message send, final replies)
- [#176661](https://github.com/openclaw/openclaw/issues/176661) [Bug]: Auto-detected whisper.cpp ignores the configured audio language and transcribes as English
- [#178490](https://github.com/openclaw/openclaw/issues/178490) feishu: card footer usage metrics (tokens/cache/context/model) missing since 2026.9.x — official plugin has no footer implementation in 10.4/10.5
- [#178209](https://github.com/openclaw/openclaw/issues/178209) [Bug]: Control UI: Ask OpenClaw question card choices are announced as radio buttons but arrow keys do nothing and every choice is a Tab stop
- [#178472](https://github.com/openclaw/openclaw/issues/178472) : [Bug]: Windows OpenClaw 2026.10.5 update blocked by Codex EEXIST symlink failure and migration-order refusal
- [#174336](https://github.com/openclaw/openclaw/issues/174336) [Bug]: Embedded runtime drops MCP server instructions; the MCP catalog never reads them
- [#178430](https://github.com/openclaw/openclaw/issues/178430) Skill Workshop: option to suppress 'Learned:' chat announcements while keeping autonomous learning
- [#178394](https://github.com/openclaw/openclaw/issues/178394) [Bug]: Native hook relay disposes the predecessor before successor registration, losing reentrant same-id registrations
- [#138320](https://github.com/openclaw/openclaw/issues/138320) [Bug]: Control UI clips ordered-list numbers at enlarged text sizes
- [#178391](https://github.com/openclaw/openclaw/issues/178391) Behavior bug (incorrect output/state without crash)
- [#178364](https://github.com/openclaw/openclaw/issues/178364) [Bug]: doctor --fix drains and stops the Gateway, then exits on unappliable config fixes and leaves it stopped (2026.9.6, systemd)
- [#178353](https://github.com/openclaw/openclaw/issues/178353) Make candidate migration rehearsal budget configurable and report doctor failure cause
- [#178031](https://github.com/openclaw/openclaw/issues/178031) [Bug]: Session-only guests cannot select people in existing conversations
- [#178255](https://github.com/openclaw/openclaw/issues/178255) [Bug]: 2026.10.5 Gateway failed to start: database is locked during startup recovery
- [#178264](https://github.com/openclaw/openclaw/issues/178264) Human mentions can commit without reaching the recipient Inbox
- [#178315](https://github.com/openclaw/openclaw/issues/178315) [Bug]: requester settle wake fails with "This turn has ended" after resuming a child spawned from a profile-less turn
- [#178189](https://github.com/openclaw/openclaw/issues/178189) [Bug]: doctor keeps updater runtimes when an unrelated user process has an unreadable cwd (gpg-agent, fusermount3) (2026.10.5)
- [#178272](https://github.com/openclaw/openclaw/issues/178272) Internal completion-event turns (media generation / subagent settle) always run with the restart-safe tool surface, with no notice and no config override
- [#178003](https://github.com/openclaw/openclaw/issues/178003) Cron jobs created from a Codex turn silently drop Codex app tools (e.g. Notion) from toolsAllow
- [#177849](https://github.com/openclaw/openclaw/issues/177849) [Bug]: openai-completions replay drops vLLM `reasoning` (sanitizer deletes it; rename only for opencode-go)
- [#178032](https://github.com/openclaw/openclaw/issues/178032) [Bug]: `openclaw acp` turns a failed turn into a successful, empty `end_turn`; the Gateway's error text (e.g. "The model reached its output token limit…") never reaches the ACP client
- [#178191](https://github.com/openclaw/openclaw/issues/178191) [Feature]: allow retention flags (--keep-daily/weekly/monthly) for local `openclaw backup create --output`
- [#173381](https://github.com/openclaw/openclaw/issues/173381) Same-model rate_limit retry never records a failure on the auth profile, so every concurrent run re-hits the limited profile and sleeps the full Retry-After
- [#169828](https://github.com/openclaw/openclaw/issues/169828) [Bug]: sessions_send to children of a rotated parent session is refused for every sender ("communication policy's parent session is no longer current")
- [#178059](https://github.com/openclaw/openclaw/issues/178059) [Bug]: 2026.10.4 → 2026.10.5 candidate snapshot aborts with SQLite worker queue capacity reached
- [#177739](https://github.com/openclaw/openclaw/issues/177739) [Bug]: CLI Node runtime recovery rejects every runtime when launched from / (launchd jobs exit 1)
- [#170145](https://github.com/openclaw/openclaw/issues/170145) [Bug]: Secret egress proxy ignores the Gateway's HTTPS_PROXY for upstream connections
- [#175736](https://github.com/openclaw/openclaw/issues/175736) [Bug]: Self-hosted base-URL prompt prefills the default, so typed URLs append to it

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 255,599 · **Open issues:** 50,192 · **Last push:** <1h ago

In the latest updates for Hermes Agent, there were no new releases, but several important pull requests were merged, including the addition of the hermetic plugin and the greyridge-token-safety skill for enhanced token pre-trade safety. A fix was also implemented to address command output visibility in the terminal, resolving an issue with command outputs vanishing when over 1024 open file descriptors are present. Among the new issues, a notable concern is #142136, which reports that the skill directory exists on disk but fails to register the slash command after a reload, indicating potential challenges in functionality for users. Other issues related to background process actions and Docker setup also emerged, underscoring ongoing challenges in system stability.

#### ✅ Merged PRs
- [#142076](https://github.com/NousResearch/hermes-agent/pull/142076) feat(plugin-catalog): add hermetic
- [#141825](https://github.com/NousResearch/hermes-agent/pull/141825) feat(plugin-catalog): add greyridge-token-safety (Base token pre-trade safety skill)
- [#142299](https://github.com/NousResearch/hermes-agent/pull/142299) fix(terminal): command output no longer vanishes above 1024 open fds (#94928, salvage #142125)

#### 🐛 New Issues
- [#142136](https://github.com/NousResearch/hermes-agent/issues/142136) Skill directory exists on disk but slash command not registered after reload `type/bug` `comp/cli` `tool/skills` `P2` 💬8
- [#142286](https://github.com/NousResearch/hermes-agent/issues/142286) [Bug]: Godmode dry run ignores model.default and gives opaque API-key errors on Codex OAuth profiles `type/bug` `comp/cli` `tool/skills` `provider/openai` 💬5
- [#142301](https://github.com/NousResearch/hermes-agent/issues/142301) reclaim_task releases a live worker's claim (duplicate worker spawn beside a surviving worker) `type/bug` `comp/cron` `P2` 💬4
- [#142203](https://github.com/NousResearch/hermes-agent/issues/142203) 402 "covers at most N output tokens" is not parsed, so the affordable-cap clamp never fires `type/bug` `comp/agent` `P2` `area/billing` 💬3
- [#142271](https://github.com/NousResearch/hermes-agent/issues/142271) Windows kanban managed_worker deadlocks importing numpy in memory-provider plugin (loader-lock race) `type/bug` `comp/agent` `comp/plugins` `tool/memory` 💬3
- [#142111](https://github.com/NousResearch/hermes-agent/issues/142111) Native Windows: regex patterns containing backslash-quote silently miss (uniform argv backslash compensation) `type/bug` `comp/tools` `tool/file` `backend/local` 💬3
- [#142264](https://github.com/NousResearch/hermes-agent/issues/142264) terminal: background spawns ($SHELL -lic) never source terminal.shell_init_files, so a PATH set there applies to foreground calls only `type/bug` `comp/tools` `tool/terminal` `backend/local` 💬3
- [#142250](https://github.com/NousResearch/hermes-agent/issues/142250) [Bug]: docs say `memory.write_approval: false` lets the background review write freely, but it stages patch/remove regardless `type/docs` `comp/plugins` `tool/memory` `P3` 💬3
- [#141822](https://github.com/NousResearch/hermes-agent/issues/141822) [Bug]: Human messages starve behind internal background-process wakes; depth-cap requeue and the shared queue cap can drop them `type/bug` `comp/gateway` `P2` 💬2
- [#142256](https://github.com/NousResearch/hermes-agent/issues/142256) [Bug]: Docker setup guide can’t satisfy the sandboxed terminal backend the api_server warning recommends `type/docs` `comp/tools` `backend/docker` `area/config` 💬2
- [#142281](https://github.com/NousResearch/hermes-agent/issues/142281) [Bug]: Gateway-mounted dashboard auth refusal exits 1 instead of 78, causing systemd restart loop after update `type/bug` `comp/cli` `comp/gateway` `area/auth` 💬2
- [#142311](https://github.com/NousResearch/hermes-agent/issues/142311) [Bug]: cross-host session lease never expires and the refused machine has no release path `type/bug` `P2` `comp/desktop` `area/sessions` 💬1
- [#142288](https://github.com/NousResearch/hermes-agent/issues/142288) Gateway: native vision images are dropped from history after one turn; persisted text says 'you can see it natively now' with only a [screenshot] placeholder `type/bug` `comp/gateway` `tool/file` `tool/vision` 💬1
- [#142298](https://github.com/NousResearch/hermes-agent/issues/142298) [Bug]: platform=local gateway turns advertise desktop-only tools but never wire the desktop_ui emitter (v0.22.2, Windows) `type/bug` `comp/gateway` `comp/tools` `P2` 💬1
- [#142296](https://github.com/NousResearch/hermes-agent/issues/142296) [Bug]: Windows Desktop gives up on multiplexed gateway cold start — fixed 60 s `gateway ensure` deadline while READY waits for every serially-connected secondary profile `type/perf` `comp/gateway` `area/config` `P2` 💬1
- [#142278](https://github.com/NousResearch/hermes-agent/issues/142278) pm/workspace.py copies plugin runtime data (db/, trace.jsonl) into every sandbox workspace `type/perf` `tool/file` `P2` 💬1
- [#142258](https://github.com/NousResearch/hermes-agent/issues/142258) Kanban dispatcher: duplicate worker spawn on auto-promote races an in-flight agent session (lock enforced only at completion) `type/bug` `comp/cli` `comp/cron` `P2` 💬1
- [#142254](https://github.com/NousResearch/hermes-agent/issues/142254) Desktop re-ensures a gracefully-draining gateway via `gateway run --replace` (SIGKILL), amputating in-flight turns `type/bug` `P2` `comp/desktop` `area/sessions` 💬1
- [#142251](https://github.com/NousResearch/hermes-agent/issues/142251) [Bug]: Queued /v1/runs on a shared session are processed out of submission order `type/bug` `comp/gateway` `P2` `area/sessions` 💬1
- [#142307](https://github.com/NousResearch/hermes-agent/issues/142307) [Bug]: pinned certifi 2026.5.20 still trusts the compromised eMudhra intermediates `type/security` `comp/agent` `P3`
- [#142305](https://github.com/NousResearch/hermes-agent/issues/142305) Kanban review replies should target an exact Run and requeue once `type/feature` `comp/cron` `comp/plugins` `P3`
- [#142302](https://github.com/NousResearch/hermes-agent/issues/142302) Desktop app: video attachment ⋮ 'more options' menu is clipped inline (works only in fullscreen) `type/bug` `P2` `comp/desktop` `desktop/files`
- [#142279](https://github.com/NousResearch/hermes-agent/issues/142279) Agent replies with voice note to plain-text messages (medium mismatch) `type/bug` `comp/agent` `tool/tts` `platform/whatsapp`

#### 🔒 Closed Issues
- [#94928](https://github.com/NousResearch/hermes-agent/issues/94928) [Bug]: Desktop: terminal/read_file return empty output when pipe fds exceed FD_SETSIZE
- [#142136](https://github.com/NousResearch/hermes-agent/issues/142136) Skill directory exists on disk but slash command not registered after reload
- [#142279](https://github.com/NousResearch/hermes-agent/issues/142279) Agent replies with voice note to plain-text messages (medium mismatch)

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 94,444 · **Open issues:** 9,155 · **Last push:** <1h ago

On October 21, 2026, there were no new releases for vLLM, but several important updates were merged, including fixes to CI build configurations and MyPy error resolutions in key test directories. Noteworthy bugfixes addressed issues with mixed structured output backends during validation and made cooperative TopK functions more precise in candidate overflow scenarios. Among the new issues, a significant concern was raised regarding the Qwen3.8-Flash-Next model, where prompt content beyond 2048 tokens is not processed correctly, affecting response generation. Overall, the day primarily focused on maintenance with critical fixes aimed at enhancing model stability and performance.

#### ✅ Merged PRs
- [#61058](https://github.com/vllm-project/vllm/pull/61058) [CI] Fix Buildkite path filters that point at moved or deleted files
- [#55901](https://github.com/vllm-project/vllm/pull/55901) [MyPy] Fix mypy errors in KV connector tests (kv-B)
- [#49625](https://github.com/vllm-project/vllm/pull/49625) [Bugfix] Reject mixed structured output backends during validation
- [#62437](https://github.com/vllm-project/vllm/pull/62437) [Frontend] DiffusionGemma joint reads on /v1/systemone and /v1/decisions, images on /v1/systemone
- [#62735](https://github.com/vllm-project/vllm/pull/62735) [ROCm][CI][Bug] Remove padding from AITER output for quantization/tes…
- [#62486](https://github.com/vllm-project/vllm/pull/62486) [ROCm] Bump AITER to v0.1.26
- [#62142](https://github.com/vllm-project/vllm/pull/62142) [MyPy][5/N] Fix mypy errors in hard tests/ dirs and enforce follow-imports=silent
- [#55542](https://github.com/vllm-project/vllm/pull/55542) [MyPy] Fix mypy errors in easy tests/v1/kv_connector files (kv-A)
- [#62521](https://github.com/vllm-project/vllm/pull/62521) [Core] Don't apply spec decode async scheduling fallbacks with MRV2
- [#59645](https://github.com/vllm-project/vllm/pull/59645) [Bugfix] Make cooperative TopK exact on candidate overflow
- [#61415](https://github.com/vllm-project/vllm/pull/61415) [CI] Release the previous checkpoint's page cache between LM Eval models
- [#62032](https://github.com/vllm-project/vllm/pull/62032) [CI][ROCm] Use AITER prebuilt fp8 MoE modules when inter dim is 256 aligned
- [#59898](https://github.com/vllm-project/vllm/pull/59898) [Distributed] Include NCCL's last error in pynccl error messages
- [#62761](https://github.com/vllm-project/vllm/pull/62761) [Doc] Sync Kimi-K3 GB200 AgentX profiles with InferenceX #4322
- [#59611](https://github.com/vllm-project/vllm/pull/59611) [Bugfix][DeepSeek V4] Load redundant EPLB expert slots
- [#61186](https://github.com/vllm-project/vllm/pull/61186) [CI] Add Nightly to optional Buildkite step labels
- [#60250](https://github.com/vllm-project/vllm/pull/60250) [ROCm] Enable the rms_norm_gated custom op by default (Qwen3.8-27B)
- [#59634](https://github.com/vllm-project/vllm/pull/59634) [ROCm][Perf][Kimi-K3] Fuse the GLA gate GEMM and the MLA FP8 prefill q/k/v prep
- [#62543](https://github.com/vllm-project/vllm/pull/62543) [Doc] Document MiniMax-M3 GB200 Dynamo AgentX profile
- [#62541](https://github.com/vllm-project/vllm/pull/62541) [Doc] Document the DeepSeek-V4.1-Flash B200 AgentX profile in the guide and command builder
- [#62731](https://github.com/vllm-project/vllm/pull/62731) [CI][ROCm] Remove MI300 Model Runner V2 steps
- [#62029](https://github.com/vllm-project/vllm/pull/62029) [Attention] Use trtllm-gen for the FlashInfer DCP prefill context pass
- [#58154](https://github.com/vllm-project/vllm/pull/58154) [Bugfix][Distributed] Preserve symmetric collective outputs
- [#62709](https://github.com/vllm-project/vllm/pull/62709) [Docs] Use release tags for documentation source links
- [#61838](https://github.com/vllm-project/vllm/pull/61838) [Perf][Model] Support torch.compile for the PaddleOCR-VL vision encoder
- [#62714](https://github.com/vllm-project/vllm/pull/62714) [Bugfix] Read ColPali hidden size from vlm_config
- [#62710](https://github.com/vllm-project/vllm/pull/62710) [Doc] Fix Kimi-K3 GB300 disaggregated selector and guide gaps
- [#62663](https://github.com/vllm-project/vllm/pull/62663) [Rust Frontend] Report error type and code like Python
- [#41197](https://github.com/vllm-project/vllm/pull/41197) [ROCm][benchmark][perf] fix moe tuning script for RDNA
- [#62627](https://github.com/vllm-project/vllm/pull/62627) [CI][Bugfix] ColPali miss hidden_size
- [#61790](https://github.com/vllm-project/vllm/pull/61790) [Test][UMBP][2/10] Add shared connector contract coverage
- [#62680](https://github.com/vllm-project/vllm/pull/62680) [CI][AMD] Deselect distributed tests in the MI300 Model Executor step
- [#62681](https://github.com/vllm-project/vllm/pull/62681) [Model] Support updated Ling FP8 quantization exclusions and MLA gates
- [#62644](https://github.com/vllm-project/vllm/pull/62644) [Rust Frontend] Cap request token histogram buckets at max_model_len
- [#62432](https://github.com/vllm-project/vllm/pull/62432) [Rust Frontend] Return 501 instead of 404 for Python-only routes
- [#62429](https://github.com/vllm-project/vllm/pull/62429) [Rust Frontend] Emit transfer params at the top level of render output
- [#62662](https://github.com/vllm-project/vllm/pull/62662) [Rust Frontend] Accept null for nullable request booleans
- [#62661](https://github.com/vllm-project/vllm/pull/62661) [Rust Frontend] Cap structured-output JSON nesting at 64 levels
- [#62643](https://github.com/vllm-project/vllm/pull/62643) [Rust Frontend] Accept empty stream_options without streaming
- [#62642](https://github.com/vllm-project/vllm/pull/62642) [Rust Frontend] Truncate prompts against max_model_len like Python
- [#62428](https://github.com/vllm-project/vllm/pull/62428) [Rust Frontend] Accept top_logprobs=0 without logprobs
- [#62427](https://github.com/vllm-project/vllm/pull/62427) [Rust Frontend] Validate cache_salt like Python
- [#62426](https://github.com/vllm-project/vllm/pull/62426) [Rust Frontend] Inherit presence and frequency penalties from generation_config
- [#62425](https://github.com/vllm-project/vllm/pull/62425) [Rust Frontend] Clamp logit_bias to [-100, 100]
- [#62434](https://github.com/vllm-project/vllm/pull/62434) [Rust Frontend] Reject silently dropped request fields on chat, completions, and generate
- [#62673](https://github.com/vllm-project/vllm/pull/62673) [Rust Frontend] Support --trust-request-chat-template
- [#62431](https://github.com/vllm-project/vllm/pull/62431) [Rust Frontend] Make unhandled `vllm serve` frontend flags explicit
- [#55226](https://github.com/vllm-project/vllm/pull/55226) [Bugfix][Pooling] Ignore token stream intervals for pooling
- [#62686](https://github.com/vllm-project/vllm/pull/62686) [CI][AMD] Shard the MI300 V1 Spec Decode step
- [#62648](https://github.com/vllm-project/vllm/pull/62648) [Bugfix][Model] Build Pixtral vision position ids on device
- [#58184](https://github.com/vllm-project/vllm/pull/58184) [Bugfix][Model] MiMo-V2: skip fused fp8 qkv_proj tensors for layers the model does not have
- [#62469](https://github.com/vllm-project/vllm/pull/62469) [Perf][Multimodal] Keep audio encoder padding masks broadcastable
- [#55485](https://github.com/vllm-project/vllm/pull/55485) [MyPy][4/N] Fix mypy errors in medium-hard tests/ dirs
- [#62672](https://github.com/vllm-project/vllm/pull/62672) [CI][LoRA] Release punica test GPU memory before later engine tests

#### 🐛 New Issues
- [#62776](https://github.com/vllm-project/vllm/issues/62776) [Bug] Qwen3.8-Flash-Next on GB10 (v0.32 nightly): prompt content beyond ~indexer_budget (2048) tokens is invisible — model answers as if the prompt ended at 2K 💬2
- [#62768](https://github.com/vllm-project/vllm/issues/62768) [Performance]: RoutedExperts.load_weights rebuilds and re-indexes the expert mapping on every call (~50 s on Qwen3.5-35B-A3B with runai_streamer) 💬2
- [#62639](https://github.com/vllm-project/vllm/issues/62639) [Bug]: Responses API: tool_choice=allowed_tools does not work `bug` `tool-calling` 💬2
- [#62645](https://github.com/vllm-project/vllm/issues/62645) [Bug]: Loading another config alias changes a previously loaded config's serialized model_type 💬2
- [#62598](https://github.com/vllm-project/vllm/issues/62598) [Bug][Rust Frontend] Long conversations fail with HTTP 500 (chat template fuel limit) `rust` 💬2
- [#62752](https://github.com/vllm-project/vllm/issues/62752) [Performance]: Avoidable preemption at hybrid Attention/Mamba decode block transitions 💬1
- [#62697](https://github.com/vllm-project/vllm/issues/62697) [Bug][ROCm] `ROCM_ATTN` returns wrong attention (and can fault the GPU) on RDNA for head size ≥ 96 with KV block size ≠ 16, and for MHA with head size 192/256 `rocm` 💬1
- [#62626](https://github.com/vllm-project/vllm/issues/62626) [Bug]: `cudagraph_mode=FULL` + FA3 split-KV returns wrong logits: the combine kernel's tile scheduler is chosen from the capture-time dummy batch `bug` `scheduler` 💬1
- [#62640](https://github.com/vllm-project/vllm/issues/62640) [RFC]: Improve MTP configuration warning `RFC`
- [#62606](https://github.com/vllm-project/vllm/issues/62606) [Bug][ROCm]: ROCM_AITER_UNIFIED_ATTN gives wrong output on gfx950 when a layer's KV cache is 2–4 GiB `rocm` 💬1
- [#62588](https://github.com/vllm-project/vllm/issues/62588) [Bug][ROCm] Two or more vLLM processes on one MI300X (SR-IOV VF) hang within minutes: queue head dispatch accepted, no waves, GFX 100% `rocm` 💬1
- [#62781](https://github.com/vllm-project/vllm/issues/62781) [Bug][XPU] GDN fp16 overflow reproduces on Intel XPU (Qwen3.5-family): long-context needle 0/9, and the pending #54146/#62119 fixes do not reach the XPU path `intel-gpu`
- [#62762](https://github.com/vllm-project/vllm/issues/62762) [Performance]: XPU block FP8: W8A16 instead of W8A8 took B70 TP4 single-stream decode from 35.27 to 57.87 tok/s `intel-gpu` `quantization`
- [#62743](https://github.com/vllm-project/vllm/issues/62743) [Bug]: K2 Horizon reasoning parser only accepts the end tag of the requested effort, but the model closes medium/low thinking with </ifm|think>, so reasoning leaks into content or the answer ends up in reasoning `tool-calling` `quantization`
- [#62740](https://github.com/vllm-project/vllm/issues/62740) [Feature]: Measure the Dynamic SD table instead of writing it by hand
- [#62669](https://github.com/vllm-project/vllm/issues/62669) [Doc][Bug]: Documentation references to repository links should use permalinks `documentation`
- [#62724](https://github.com/vllm-project/vllm/issues/62724) [Feature]: Token-aware control-token sanitization for DeepSeek renderers `deepseek`
- [#62707](https://github.com/vllm-project/vllm/issues/62707) [Bug]: v0.25.1 streaming input beyond max_model_len produces negative scheduled token counts and crashes V2 runner `quantization`
- [#62705](https://github.com/vllm-project/vllm/issues/62705) [Bug]: DiffusionGemma prefills image tokens causally, although its config asks for bidirectional attention over them
- [#62703](https://github.com/vllm-project/vllm/issues/62703) [Bug]: Corrupt PNG image in request returns HTTP 500 "broken PNG file (chunk ...)" instead of a client error `bug`
- [#62694](https://github.com/vllm-project/vllm/issues/62694) [Feature]: [Spec Decode] Support model-based drafters (target hidden states) via custom_class `feature request`
- [#62689](https://github.com/vllm-project/vllm/issues/62689) [RFC]: Layered prefill: split prefill across decoder layer groups
- [#62687](https://github.com/vllm-project/vllm/issues/62687) [Bug]: CPU backend: a seeded request whose prompt is split by chunked prefill kills the engine ("CPU Generator does not use offset") `cpu`
- [#62677](https://github.com/vllm-project/vllm/issues/62677) [Bug]: v0.32.0 official image: deepep_v2 fails with ZeroDivisionError after ibstat bandwidth detection fails `bug` `quantization`
- [#62664](https://github.com/vllm-project/vllm/issues/62664) [Bug]: CPU backend accepts unsupported --kv-cache-dtype and silently produces garbage `cpu`
- [#62651](https://github.com/vllm-project/vllm/issues/62651) [Bug]: DeepSeek-V4.1 decoder replay can return incorrect target-token scores `deepseek` `DSv4.1`
- [#62641](https://github.com/vllm-project/vllm/issues/62641) [Usage]: Attempts to avoid full promt processing when changing the tool set `usage` `tool-calling`
- [#62609](https://github.com/vllm-project/vllm/issues/62609) [Bug]: A100 run Bolt (nv-community/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB) throw :B12X NVFP4 kernels require a Blackwell 12x device `bug` `nvidia` `quantization`
- [#62595](https://github.com/vllm-project/vllm/issues/62595) [Bug]: Misleading `--quantization gptq` suggestion in Marlin shape check (AWQ/GPTQ TP failures) `quantization`
- [#62586](https://github.com/vllm-project/vllm/issues/62586) [Usage]: cu129-nightly `usage`

#### 🔒 Closed Issues
- [#43920](https://github.com/vllm-project/vllm/issues/43920) [Bug]: V1 structured outputs: a malformed grammar request after a valid one crashes EngineCore
- [#59086](https://github.com/vllm-project/vllm/issues/59086) [Bug]: VLLM_BATCH_INVARIANT=1 is not batch-invariant for AWQ models on sm8x in the default mode
- [#56397](https://github.com/vllm-project/vllm/issues/56397) [CI Failure]: Multimodal Processor shards - test_tensor_schema[naver-hyperclovax/HyperCLOVAX-SEED-Think-32B] - upstream model_type hyperclovax_vision_v2 unknown to CI transformers
- [#56144](https://github.com/vllm-project/vllm/issues/56144) [CI Failure]: (MI300) Entrypoints Integration (Speech to Text) failing because of PR#54917
- [#48510](https://github.com/vllm-project/vllm/issues/48510) [CI Failure]: `AMD: Language Models Test (Extended Pooling)` Workspace growth allocation after lock
- [#61806](https://github.com/vllm-project/vllm/issues/61806) [Bug]: DSpark draft token count inflated by reusing target DP sync state with adaptive verification
- [#61738](https://github.com/vllm-project/vllm/issues/61738) [Bug]: Wide speculative decoding verify (num_speculative_tokens ≥ 7) samples EOS at `prompt_len+8` on hybrid GDN models (Qwen3.5): silent early stop, byte-clean until the EOS row — reproduced on both model runners (`ngram_gpu` V1, stock MTP V2)
- [#50165](https://github.com/vllm-project/vllm/issues/50165) [Doc]: Update Quickstart documentation with Apple Silicon / Metal execution requirements and compatibility note
- [#61314](https://github.com/vllm-project/vllm/issues/61314) [Bug]: quantization="fp8" + kv_cache_dtype="float16" on a bf16 model crashes at startup — same flash-attn dtype assert as #60859, now on the online-quant path
- [#58134](https://github.com/vllm-project/vllm/issues/58134) [CI Failure]: (MI355) Core Operation Kernels Shard 1: kernels/test_concat_mla_q.py::test_concat_mla_q_fp8_nope_and_rope
- [#60722](https://github.com/vllm-project/vllm/issues/60722) [RFC]: Strcutured Outputs Not Respected When Reasoning Implicitly Ends
- [#59609](https://github.com/vllm-project/vllm/issues/59609) [Bug]: DeepSeek V4/V4.1 with --enable-eplb never loads the redundant expert slots
- [#62669](https://github.com/vllm-project/vllm/issues/62669) [Doc][Bug]: Documentation references to repository links should use permalinks

### SGLang (`sgl-project/sglang`)

**Stars:** 37,517 · **Open issues:** 5,985 · **Last push:** <1h ago

On October 21, 2026, SGLang experienced a routine maintenance day with no new releases. Among the significant developments, several key pull requests were merged, including performance optimizations for the AMD dsv41 with a faster mHC boundary Triton tile and the introduction of a TPU7x recipe for GLM-5.3-Flash in the documentation. Additionally, important fixes were implemented to address issues with the Model Optimization Engine and to improve attention launch on NVIDIA hardware. Among the newly reported issues, a critical bug (#45345) was raised concerning out-of-memory errors at startup when using 32 tokenizer workers with auto-selected CUDA VMM transport on multi-node GB300 systems, highlighting ongoing challenges in memory management.

#### ✅ Merged PRs
- [#40399](https://github.com/sgl-project/sglang/pull/40399) [Fix] [NPU] dspark: Fix attn_tp > 1 draft wo_b all_reduce group
- [#43063](https://github.com/sgl-project/sglang/pull/43063) [CI] [NPU] tests: Replace DeepSeek-V2-Lite-W8A8 cases with Moonlight
- [#45326](https://github.com/sgl-project/sglang/pull/45326) [Doc] cookbook: add TPU7x recipe for GLM-5.3-Flash
- [#45213](https://github.com/sgl-project/sglang/pull/45213) [Perf] mamba: Copy tracked decode states at HBM bandwidth in one persistent launch
- [#45289](https://github.com/sgl-project/sglang/pull/45289) [Fix] [NVIDIA] modelopt-nvfp4: Keep MoE global scales in gate/up order
- [#45124](https://github.com/sgl-project/sglang/pull/45124) [Perf] [AMD] dsv41: faster mHC boundary Triton tile for 96+ rows, bitwise unchanged
- [#44994](https://github.com/sgl-project/sglang/pull/44994) [Refactor] moe: Derive routing inputs from the layer and active forward
- [#44993](https://github.com/sgl-project/sglang/pull/44993) [Refactor] moe: Derive layer contracts from the selected quant method
- [#44991](https://github.com/sgl-project/sglang/pull/44991) [Fix] config: Preserve ServerArgs positional constructor slots
- [#44480](https://github.com/sgl-project/sglang/pull/44480) [Fix] moe: Map expert ids for layers whose runner needs local ids under EP
- [#44896](https://github.com/sgl-project/sglang/pull/44896) [Doc] layer-boundary/moe: Correct guides and comments that drifted from the code
- [#45123](https://github.com/sgl-project/sglang/pull/45123) [Perf] [AMD] dsv41: run gfx950 MXFP8 dense GEMMs on aiter's preshuffled FlyDSL kernel
- [#43666](https://github.com/sgl-project/sglang/pull/43666) [Doc] agent-skills: Fix stale paths and deleted guard tests in skills and rules
- [#37958](https://github.com/sgl-project/sglang/pull/37958) [Perf] prefill-cuda-graph: Make prefill shared-read completion explicit and default-on
- [#45098](https://github.com/sgl-project/sglang/pull/45098) [Perf] [AMD] deterministic: Faster extend attention launch on gfx950
- [#45455](https://github.com/sgl-project/sglang/pull/45455) [Doc] cookbook: Add DeepReinforce Ornith-1.5
- [#45454](https://github.com/sgl-project/sglang/pull/45454) [CI] muse_spark: Move unified memory test to B300
- [#45448](https://github.com/sgl-project/sglang/pull/45448) [Fix] moe: Run the shared-slot routing test without a published server config
- [#45428](https://github.com/sgl-project/sglang/pull/45428) [CI] muse_spark: Use complete local checkpoints in model tests
- [#45433](https://github.com/sgl-project/sglang/pull/45433) [Fix] DSpark: Disable simulated acceptance shortcuts by default
- [#44596](https://github.com/sgl-project/sglang/pull/44596) [Test] [AMD] diffusion: Skip MOSS-Image mismatched-operand test on ROCm
- [#45421](https://github.com/sgl-project/sglang/pull/45421) [Perf] [NVIDIA] DSpark: Enable the simulated-acceptance fast paths on CUDA
- [#45242](https://github.com/sgl-project/sglang/pull/45242) [Refactor] radix-cache: Route pending-backup split bookkeeping through one component action
- [#45280](https://github.com/sgl-project/sglang/pull/45280) [Perf] detokenizer: Add SGLANG_BATCH_TOKENIZER_OUTPUTS to opt out of grouped return sends
- [#45238](https://github.com/sgl-project/sglang/pull/45238) [Fix] radix-cache: Separate logical and reclaimable value lengths in tree components
- [#45222](https://github.com/sgl-project/sglang/pull/45222) [Perf] unified-memory: Allocate free pages from each sub-pool's own end first
- [#45158](https://github.com/sgl-project/sglang/pull/45158) [Fix] scheduler: Exclude accepted storage-tier hits from the waiting prefill load
- [#45241](https://github.com/sgl-project/sglang/pull/45241) [Feat] radix-tree: Report each path node's child count in collect_path_info
- [#45250](https://github.com/sgl-project/sglang/pull/45250) [Fix] srt: Admit only allowlisted peers on TCP-bound ZMQ IPC sockets
- [#45427](https://github.com/sgl-project/sglang/pull/45427) [Fix] DSpark: Restore weight-loading CPU tests
- [#45253](https://github.com/sgl-project/sglang/pull/45253) [Chore] docker: Add Beam CUDA image (1/8)
- [#45356](https://github.com/sgl-project/sglang/pull/45356) [Fix] muse_spark: support unified KV memory with TRT-LLM
- [#44198](https://github.com/sgl-project/sglang/pull/44198) [Fix] [AMD] activation: Run ReLU2 natively on ROCm
- [#45339](https://github.com/sgl-project/sglang/pull/45339) [Perf] [AMD] dsv41: Skip unneeded layer 20 computation under decoder-bounded-replay
- [#44599](https://github.com/sgl-project/sglang/pull/44599) [Test] [AMD] diffusion: Make multimodal_gen unit tests ROCm-aware
- [#45260](https://github.com/sgl-project/sglang/pull/45260) [Perf] deepseek-v4: DSpark draft stages take the TF32 mHC statistics path from 32 rows on SM100
- [#45365](https://github.com/sgl-project/sglang/pull/45365) [Fix] [AMD] gpt-oss: support EP for gfx1250 W4A8 MXFP4 MoE
- [#45217](https://github.com/sgl-project/sglang/pull/45217) [Fix] [AMD] grok: accept allow_patterns_overrides in presharded _prepare_weights patch
- [#44514](https://github.com/sgl-project/sglang/pull/44514) [Fix] runtime: Version FlashInfer caches for default-tactic tuning.
- [#38473](https://github.com/sgl-project/sglang/pull/38473) [Feat] KVShard: PD transfer and e2e test
- [#43826](https://github.com/sgl-project/sglang/pull/43826) [Feat] platform: Add initial T-HEAD SAIL platform support [2/N]
- [#45383](https://github.com/sgl-project/sglang/pull/45383) [CI] sgl-router: Gate on live run-ci label so /tag-and-rerun-ci can start the tiers
- [#43469](https://github.com/sgl-project/sglang/pull/43469) [Perf] [NPU] glm5.2: Support dynamic INT8 MLAProlog for attention
- [#44436](https://github.com/sgl-project/sglang/pull/44436) [Perf] [NPU] mem_cache: Increase GLM-5.2-W4A8C8 KV cache capacity with compact DSA indexer allocation
- [#40165](https://github.com/sgl-project/sglang/pull/40165) [Fix] [NPU] glm5.2: support pcp v2 with interleave & zigzag
- [#41642](https://github.com/sgl-project/sglang/pull/41642) [Fix] [NPU] glm5.2-mtp: L2 cache adaptation
- [#45103](https://github.com/sgl-project/sglang/pull/45103) [Feat] sgl-router: Route prefill buckets by uncached tokens
- [#45368](https://github.com/sgl-project/sglang/pull/45368) [Test] kernels: Import silu_and_mul_contig_post_quant from its new home
- [#38461](https://github.com/sgl-project/sglang/pull/38461) [Perf] [NPU] attn: add not needs_cpu_seq_lens for dsa modules
- [#45154](https://github.com/sgl-project/sglang/pull/45154) [Feat] glm-5.3: Render GLM-5.3 and GLM-5.3-Flash chat prompts with a Python chat template
- [#45376](https://github.com/sgl-project/sglang/pull/45376) [Fix] moe: Publish a server config in the CUTLASS runner dispatch-format and placement tests

#### 🐛 New Issues
- [#45345](https://github.com/sgl-project/sglang/issues/45345) [Bug] Startup OOM with 32 tokenizer workers and auto-selected CUDA VMM transport on multi-node GB300 💬4
- [#45373](https://github.com/sgl-project/sglang/issues/45373) [Tracking] GLM-5.3-Flash performance optimization on Hopper (SM90) 💬2
- [#45426](https://github.com/sgl-project/sglang/issues/45426) [Bug] FLA kernels fail to compile on nightly-cu134-20261020: Triton removed tl.make_block_ptr 💬2
- [#45415](https://github.com/sgl-project/sglang/issues/45415) [RFC] Time-budgeted prefill admission for colocated TP serving 💬2
- [#45467](https://github.com/sgl-project/sglang/issues/45467) [Bug] linker: Failed layer short-circuits the full completion barrier
- [#45392](https://github.com/sgl-project/sglang/issues/45392) [CI] test_muse_spark_12_b300_pd fails on fork PRs: GatedRepoError 403 (HF_MUSE_SPARK_TOKEN unset)
- [#45416](https://github.com/sgl-project/sglang/issues/45416) [RFC] pd: Prefill short requests on the decode worker that caches their prefix (PPD)
- [#45418](https://github.com/sgl-project/sglang/issues/45418) observability: use underscores instead of colons in sglang_* Prometheus metric names
- [#45400](https://github.com/sgl-project/sglang/issues/45400) [Bug] HiCache on hybrid GDN model: host-tier hits drop to zero once evicted working set exceeds ~3 long prefixes (host mamba pool exhausted while KV stays on host)
- [#45366](https://github.com/sgl-project/sglang/issues/45366) [CI] test_per_token_group_quant.py fails on main: ImportError silu_and_mul_contig_post_quant from moe.dsv4
- [#45370](https://github.com/sgl-project/sglang/issues/45370) [Roadmap] Beam Development & Optimization
- [#45367](https://github.com/sgl-project/sglang/issues/45367) [Bug] Kimi-K3 DCP a2a produces garbled decode output on 2-node GB300; NCCL_GRAPH_REGISTER=0 restores smoke-test output
- [#45355](https://github.com/sgl-project/sglang/issues/45355) [Bug] sgl-router: /v1/messages rejects inline role "system" messages, so Claude Code cannot use the router
- [#45357](https://github.com/sgl-project/sglang/issues/45357) [Bug] PD prefill PP8 + HiCache cache mode hangs: PP0–PP3 blocked in the HiCache PP-sync drain
- [#45351](https://github.com/sgl-project/sglang/issues/45351) [Perf] HiCache PP-sync drain makes the PP prefill scheduler lock-step across ranks
- [#45342](https://github.com/sgl-project/sglang/issues/45342) [Bug] --log-requests-target <dir> loses request logs when --tokenizer-worker-num > 1 (workers share one hourly-rotated file)
- [#45317](https://github.com/sgl-project/sglang/issues/45317) [Bug] Forward hooks never run when CUDA graphs are on (docs say they run on every forward pass)
- [#45310](https://github.com/sgl-project/sglang/issues/45310) [Bug] `--tokenizer-backend fastokens` deadlocks the HTTP server when a multimodal request arrives while a text request is being tokenized

#### 🔒 Closed Issues
- [#26693](https://github.com/sgl-project/sglang/issues/26693) [Roadmap] Hicache NIXL backend
- [#35345](https://github.com/sgl-project/sglang/issues/35345) [Bug] Qwen3.6/Qwen3.8 multimodal mRoPE positions are passed to a 1D fused QK RMSNorm+RoPE CUDA kernel
- [#37554](https://github.com/sgl-project/sglang/issues/37554) Gateway: a worker whose metadata discovery failed is permanently registered as model_id "unknown" under IGW
- [#35705](https://github.com/sgl-project/sglang/issues/35705) [Bug] AttributeError: 'list' object has no attribute 'tolist' in move_logprobs_to_cpu
- [#35777](https://github.com/sgl-project/sglang/issues/35777) Qwen3.8-27B NVFP4 on RTX 5090: cookbook mem-fraction OOMs at decode-graph capture (~5GB) and torch.compile + decode graph is a 6x regression
- [#35912](https://github.com/sgl-project/sglang/issues/35912) [Bug] `uv pip install sglang` with uv < 0.12 silently installs 0.5.9 (6 months old)
- [#35891](https://github.com/sgl-project/sglang/issues/35891) EncoderScheduler dispatches requests after request timeout
- [#35789](https://github.com/sgl-project/sglang/issues/35789) RFC: Re-layer Draft SWA into Committed Sidecar KV and Verify Scratch
- [#35752](https://github.com/sgl-project/sglang/issues/35752) [Feature] Support Prometheus name[] filtering for multiprocess metrics
- [#45155](https://github.com/sgl-project/sglang/issues/45155) [Perf] KV sharding overpads all-gather for shared prefixes
- [#39063](https://github.com/sgl-project/sglang/issues/39063) [Bug] SM120 grouped FP8 DeepGEMM weight preparation skips UE8M0 requantization
- [#45392](https://github.com/sgl-project/sglang/issues/45392) [CI] test_muse_spark_12_b300_pd fails on fork PRs: GatedRepoError 403 (HF_MUSE_SPARK_TOKEN unset)
- [#45209](https://github.com/sgl-project/sglang/issues/45209) [Test] PD: Cover cancellation through KV page reuse in CPU CI
- [#45366](https://github.com/sgl-project/sglang/issues/45366) [CI] test_per_token_group_quant.py fails on main: ImportError silu_and_mul_contig_post_quant from moe.dsv4
- [#38210](https://github.com/sgl-project/sglang/issues/38210) [Bug] OTel tracing loses Scheduler spans when using --tokenizer-worker-num>1
- [#45355](https://github.com/sgl-project/sglang/issues/45355) [Bug] sgl-router: /v1/messages rejects inline role "system" messages, so Claude Code cannot use the router
- [#39355](https://github.com/sgl-project/sglang/issues/39355) [Feature] [NPU] Add ScatterPaKvCache as an optional KV-cache write backend

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 131,857 · **Open issues:** 2,556 · **Last push:** <1h ago

In the last 24 hours, several new versions of llama.cpp were released, including b11769, which fixed issues with client disconnect propagation in the server, and b11768, which addressed a compatibility issue with the Responses API by incorporating missing output indices in SSE events. Additionally, b11767 introduced enhancements for reading LFM2 tiling parameters from GGUF metadata, while b11765 streamlined the Kolibri-1 router by dropping redundant precision overrides. Among the newly merged features, the addition of a realtime transcription API and support for logging probabilities with speculative decoding were key highlights. On the issue front, a notable bug was reported (#30869) concerning compilation errors, pointing to ongoing challenges as the project evolves.

#### 🚀 New Releases
- [b11769](https://github.com/ggml-org/llama.cpp/releases/tag/b11769) b11769
- [b11768](https://github.com/ggml-org/llama.cpp/releases/tag/b11768) b11768
- [b11767](https://github.com/ggml-org/llama.cpp/releases/tag/b11767) b11767
- [b11765](https://github.com/ggml-org/llama.cpp/releases/tag/b11765) b11765
- [b11763](https://github.com/ggml-org/llama.cpp/releases/tag/b11763) b11763
- [b11761](https://github.com/ggml-org/llama.cpp/releases/tag/b11761) b11761
- [b11760](https://github.com/ggml-org/llama.cpp/releases/tag/b11760) b11760
- [b11759](https://github.com/ggml-org/llama.cpp/releases/tag/b11759) b11759
- [b11757](https://github.com/ggml-org/llama.cpp/releases/tag/b11757) b11757
- [b11756](https://github.com/ggml-org/llama.cpp/releases/tag/b11756) b11756

#### ✅ Merged PRs
- [#30893](https://github.com/ggml-org/llama.cpp/pull/30893) opencl: fix rope program build error with newer Clang
- [#29486](https://github.com/ggml-org/llama.cpp/pull/29486) server : fix usage.completion_tokens undercount with n > 1
- [#26603](https://github.com/ggml-org/llama.cpp/pull/26603) server : add POST /tts endpoint for TTS models
- [#30636](https://github.com/ggml-org/llama.cpp/pull/30636) server: add realtime transcription API
- [#30874](https://github.com/ggml-org/llama.cpp/pull/30874) refactor : move LFM2 shortconv and FFN blocks into a shared LFM base
- [#30877](https://github.com/ggml-org/llama.cpp/pull/30877) model : support Nemotron-3(.5)-Embed
- [#30655](https://github.com/ggml-org/llama.cpp/pull/30655) hexagon: fix VTCM size query on images that need layout out-params
- [#30823](https://github.com/ggml-org/llama.cpp/pull/30823) qwen: reshape output to 2d instead of 3d
- [#27196](https://github.com/ggml-org/llama.cpp/pull/27196) server: Support logprobs with speculative decoding
- [#30261](https://github.com/ggml-org/llama.cpp/pull/30261) mtmd : lfm2 tiles and layout match transformers
- [#30361](https://github.com/ggml-org/llama.cpp/pull/30361) model : add H2O-Lightning-4B decision model
- [#30882](https://github.com/ggml-org/llama.cpp/pull/30882) mtmd: fix gemma 4 ffn act
- [#28233](https://github.com/ggml-org/llama.cpp/pull/28233) server : avoid repeated mmproj memory margin addition on sleep/resume
- [#30873](https://github.com/ggml-org/llama.cpp/pull/30873) ggml-cuda : support ssm_conv kernel size 7
- [#29707](https://github.com/ggml-org/llama.cpp/pull/29707) Router wasn't propagating the client disconnects fully to the child, the response wait could cause a delayed cancellation
- [#30863](https://github.com/ggml-org/llama.cpp/pull/30863) server: fix missing output_index in Responses API SSE events for compatibility
- [#30840](https://github.com/ggml-org/llama.cpp/pull/30840) mtmd : read LFM2 tiling params from GGUF metadata
- [#30862](https://github.com/ggml-org/llama.cpp/pull/30862) metal : optimize argmax and pool_1d
- [#22055](https://github.com/ggml-org/llama.cpp/pull/22055) spec : save the dynamic ngram cache file
- [#30865](https://github.com/ggml-org/llama.cpp/pull/30865) model : drop the redundant precision overrides in the Kolibri-1 router
- [#30868](https://github.com/ggml-org/llama.cpp/pull/30868) ci : remove superfluous webgpu jobs
- [#30505](https://github.com/ggml-org/llama.cpp/pull/30505) ggml-cpu : select the NEON fp32->fp16 conversion
- [#30850](https://github.com/ggml-org/llama.cpp/pull/30850) opencl: add several gemm variants for small batches and some fixes
- [#30812](https://github.com/ggml-org/llama.cpp/pull/30812) [SYCL] replace memset due to not always ordered
- [#30836](https://github.com/ggml-org/llama.cpp/pull/30836) HIP/CUDA: Fix reduction in mmf getting tile widths not devisiable by 64 in mul_mat_id on wave64 devices
- [#30512](https://github.com/ggml-org/llama.cpp/pull/30512) ggml-zdnn: introduce flash attention op
- [#26771](https://github.com/ggml-org/llama.cpp/pull/26771) CUDA: Recapture graph after memory pool flush
- [#28554](https://github.com/ggml-org/llama.cpp/pull/28554) server : pass id_slot through the Anthropic /v1/messages conversion
- [#30699](https://github.com/ggml-org/llama.cpp/pull/30699) metal: fix missing MoE kernel variant for 9 experts per token
- [#30623](https://github.com/ggml-org/llama.cpp/pull/30623) ci: Fix --strict mode for API check
- [#30845](https://github.com/ggml-org/llama.cpp/pull/30845) vocab : add \p{M} to lookaheads in Tekken and GPT-4o pre-tokenizer regexes
- [#30818](https://github.com/ggml-org/llama.cpp/pull/30818) tests : make MoE router selection independent of the backend noise
- [#30854](https://github.com/ggml-org/llama.cpp/pull/30854) hexagon: update to snapdragon-toolchain v0.8 and enable hexagon v85
- [#30271](https://github.com/ggml-org/llama.cpp/pull/30271) sycl: fix compiler warnings - missing prototypes, dead code, extra semicolons
- [#30719](https://github.com/ggml-org/llama.cpp/pull/30719) Fix/search input clear button

#### 🐛 New Issues
- [#30869](https://github.com/ggml-org/llama.cpp/issues/30869) Compile bug: `bug-unconfirmed` 💬4
- [#30884](https://github.com/ggml-org/llama.cpp/issues/30884) Flash attention (CUDA/HIP): garbage output at long context on gfx1201 (RDNA4) - immediate EOS, head_dim 256 💬2
- [#30892](https://github.com/ggml-org/llama.cpp/issues/30892) Eval bug: SYCL F16: NaN output on dense Qwen3.8-27B Q4_K_M since #29107 (IQ3 code reorder); fused GEMM off fixes it (Arc Pro B70) 💬1
- [#30888](https://github.com/ggml-org/llama.cpp/issues/30888) Vulkan (AMD, Windows, no ReBAR): DEVICE_LOCAL|HOST_VISIBLE buffers are backed by system memory and exhaust the WDDM shared budget -> vkQueueSubmit returns ErrorOutOfDeviceMemory 💬1
- [#30896](https://github.com/ggml-org/llama.cpp/issues/30896) Eval bug: Laguna repeats <assistant> on Metal for ubatches >= 32 tokens (ffn_moe_down input exceeds F16 range)
- [#30894](https://github.com/ggml-org/llama.cpp/issues/30894) Misc. bug: Nemotron 3 / 3.5 GGUFs are tagged "pixtral" and get the wrong pre-tokenizer `bug-unconfirmed`
- [#30887](https://github.com/ggml-org/llama.cpp/issues/30887) Qwen3.8-Flash-Next + DFlash2 crashes on first prompt in extract_layer_inputs()
- [#30879](https://github.com/ggml-org/llama.cpp/issues/30879) Misc. bug: Sarvam 30B MoE converter labels byte-fallback tokens <0x00>–<0xFF> NORMAL instead of BYTE `bug-unconfirmed`
- [#30875](https://github.com/ggml-org/llama.cpp/issues/30875) GGML_ASSERT(prev != ggml_uncaught_exception) on dynamic library reload — community reopen of #15752 (still crashes on master)
- [#30860](https://github.com/ggml-org/llama.cpp/issues/30860) Eval bug: qwen4exp + --spec-type draft-mtp aborts with GGML_ASSERT(buffer) in llm_graph_input_kpool::set_input on server start
- [#30859](https://github.com/ggml-org/llama.cpp/issues/30859) Responses API: unrecognized input item type (e.g. Codex CLI's additional_tools) aborts the whole request instead of being skipped
- [#30855](https://github.com/ggml-org/llama.cpp/issues/30855) Misc. bug: SYCL: SWIGLU_OAI aborts on f16 tensors `bug-unconfirmed`

#### 🔒 Closed Issues
- [#30610](https://github.com/ggml-org/llama.cpp/issues/30610) Eval bug: Nemotron 3.5 Bolt 74B-A9B segfaults on Metal in ggml_metal_op_mul_mat_id
- [#25187](https://github.com/ggml-org/llama.cpp/issues/25187) Research: FR-Spec-style draft-vocab trimming for native MTP speculative decoding
- [#27865](https://github.com/ggml-org/llama.cpp/issues/27865) ROCm RPC server crashes on TOP_K with "invalid configuration argument" during distributed Qwen3.8-Flash-Next inference
- [#27797](https://github.com/ggml-org/llama.cpp/issues/27797) qwen4exp (PR #27742): multi-segment prompts degrade to '//////' on gfx1151 — deterministic repro
- [#26401](https://github.com/ggml-org/llama.cpp/issues/26401) Misc. bug: mmproj memory margin is added twice on resume from sleep, causing CPU offload
- [#25923](https://github.com/ggml-org/llama.cpp/issues/25923) json-schema-to-grammar: empty-object schema and large maxLength both produce invalid/rejected GBNF, breaking the whole tool-call grammar
- [#28252](https://github.com/ggml-org/llama.cpp/issues/28252) Whole-host hard lock during MTP draft catch-up prefill on multi-GPU tensor-split (b9745+)
- [#28338](https://github.com/ggml-org/llama.cpp/issues/28338) CUDA OOM hard-abort in ggml_cuda_op_top_k (argsort_f32_i32_cuda_cub temp alloc via ggml_cuda_pool_vmm / cuMemCreate) after long-running llama-server decode
- [#28416](https://github.com/ggml-org/llama.cpp/issues/28416) CUDA: sm_70 (V100) builds with toolkit 12.9.x fail weight-buffer allocation on an empty 32GB GPU; identical source built with 12.8.x loads fine
- [#30787](https://github.com/ggml-org/llama.cpp/issues/30787) Misc. bug: Tokenizer (GPT-4o and Tekken pre-tokenizers): token IDs differ from HF because combining marks are split off their letters (Hindi, Thai)
- [#29888](https://github.com/ggml-org/llama.cpp/issues/29888) Misc. bug: sycl: fix memory errors in mul_mat, split buffer, host pool
- [#29451](https://github.com/ggml-org/llama.cpp/issues/29451) Misc. bug: `usage.completion_tokens` counts only one choice, so it undercounts by a factor of `n` when `n > 1`
- [#30269](https://github.com/ggml-org/llama.cpp/issues/30269) Feature Request: SYCL build: file-local functions missing static, unreachable code after abort, extra semicolons
- [#28627](https://github.com/ggml-org/llama.cpp/issues/28627) Misc. bug: [WebUI] Duplicate clear ("×") buttons shown in sidebar search input when typing text

### Ollama (`ollama/ollama`)

**Stars:** 184,073 · **Open issues:** 4,371 · **Last push:** 3h ago

On October 21, 2026, Ollama updates included a version bump to llama.cpp at b11738, enhancing performance and stability. Noteworthy merged pull requests featured improvements to CUDA runtime payload deduplication and adjustments within the server to read loaded runner models without utilizing refMu. Additionally, a significant fix was implemented to ensure that reasoning is completed before client tool calls are made. Among new issues, a critical concern was raised regarding the presence of Go CVEs in current binaries, highlighting potential security vulnerabilities in the software.

#### ✅ Merged PRs
- [#17956](https://github.com/ollama/ollama/pull/17956) mlx: deduplicate CUDA runtime payloads
- [#19070](https://github.com/ollama/ollama/pull/19070) server: read loaded runner models without refMu
- [#19143](https://github.com/ollama/ollama/pull/19143) llama.cpp: version bump b11738
- [#19146](https://github.com/ollama/ollama/pull/19146) openai: finish reasoning before client tool calls

#### 🐛 New Issues
- [#19165](https://github.com/ollama/ollama/issues/19165) Windows: NVIDIA GPUs run via Vulkan instead of CUDA on 0.40.6 with default OLLAMA_VULKAN (~6% decode regression) `bug` 💬3
- [#19172](https://github.com/ollama/ollama/issues/19172) ollama launch opencode not using actual context window size `bug` 💬1
- [#19162](https://github.com/ollama/ollama/issues/19162) Critical Go CVEs present in current binaries `bug` 💬1
- [#19160](https://github.com/ollama/ollama/issues/19160) /v1/systemone rejects an empty state for vllm-d3 pairwise questions
- [#19158](https://github.com/ollama/ollama/issues/19158) gemma4:12b crashes with `ggml_vulkan: device lost` on Intel Arc 130V (Lunar Lake iGPU) with any GPU offload since 0.40.x; worked on 0.34.4

#### 🔒 Closed Issues
- [#15051](https://github.com/ollama/ollama/issues/15051) native ollama-go-engine: TurboQuant+RotorQuant implementation
- [#10956](https://github.com/ollama/ollama/issues/10956) Garbage output when running llama3.2-vision:11b
- [#14233](https://github.com/ollama/ollama/issues/14233) Released binaries have High severity CVEs due to Go version 1.24.1
- [#19165](https://github.com/ollama/ollama/issues/19165) Windows: NVIDIA GPUs run via Vulkan instead of CUDA on 0.40.6 with default OLLAMA_VULKAN (~6% decode regression)

### LiteLLM (`BerriAI/litellm`)

**Stars:** 61,673 · **Open issues:** 5,526 · **Last push:** <1h ago

On October 21, 2026, LiteLLM released several new versions, including v1.106.1, v1.105.2, v1.104.4, v1.103.6, and v1.107.0-rc.2, all signed with cosign for enhanced security. Noteworthy merged PRs include the fix for count_tokens in v1.104.x and the introduction of admin-defined custom tags and metadata in the model hub. Additionally, a new feature was added to support Foundry Local SDK 2.2.0. The most significant new issue reported was #47579, which addresses a bug in the Presidio guardrail that serializes all analyzer and anonymizer calls per process, causing potential lock issues during HTTP requests.

#### 🚀 New Releases
- [v1.106.1](https://github.com/BerriAI/litellm/releases/tag/v1.106.1) v1.106.1
- [v1.105.2](https://github.com/BerriAI/litellm/releases/tag/v1.105.2) v1.105.2
- [v1.104.4](https://github.com/BerriAI/litellm/releases/tag/v1.104.4) v1.104.4
- [v1.103.6](https://github.com/BerriAI/litellm/releases/tag/v1.103.6) v1.103.6
- [v1.107.0-rc.2](https://github.com/BerriAI/litellm/releases/tag/v1.107.0-rc.2) v1.107.0-rc.2

#### ✅ Merged PRs
- [#47706](https://github.com/BerriAI/litellm/pull/47706) test(perf): emit event_loop_stalls hold counts as perf_ JUnit properties
- [#47634](https://github.com/BerriAI/litellm/pull/47634) fix(count_tokens): backport Bedrock Mantle count_tokens fallback to stable/1.104.x
- [#47544](https://github.com/BerriAI/litellm/pull/47544) fix(scim)!: delete a group through the team delete's bulk path instead of one member at a time
- [#47662](https://github.com/BerriAI/litellm/pull/47662) fix(ui): show the budget spend limit and rate limits without a collapsed section
- [#47696](https://github.com/BerriAI/litellm/pull/47696) test(perf): emit the database upgrade run's perf rows and upgrade timings as JUnit properties
- [#46064](https://github.com/BerriAI/litellm/pull/46064) feat(model hub): show admin-defined custom tags and metadata from model_info
- [#47690](https://github.com/BerriAI/litellm/pull/47690) feat(wandb): add Beam 1.0 and GLM-5.3 to the cost map
- [#47639](https://github.com/BerriAI/litellm/pull/47639) fix(proxy): strip caller base_model from spend pricing and reject lone surrogates in multipart metadata
- [#46714](https://github.com/BerriAI/litellm/pull/46714) refactor(rust-bridge): detect Python-only features in the catalog instead of Rust declines
- [#46750](https://github.com/BerriAI/litellm/pull/46750) refactor(rust-bridge): decide native routing in the catalog, drop the bypass predicates
- [#47671](https://github.com/BerriAI/litellm/pull/47671) fix(ui): show a failed state with Retry on the Logs table, Usage totals and Caching chart when their fetch errors
- [#47683](https://github.com/BerriAI/litellm/pull/47683) test(perf): record the row count and size of each table the Admin UI journeys query
- [#47627](https://github.com/BerriAI/litellm/pull/47627) chore(deps-dev): bump vite from 8.3.0 to 8.3.4 in /vscode-extension
- [#47640](https://github.com/BerriAI/litellm/pull/47640) feat(gateway): serve /v1/models
- [#47677](https://github.com/BerriAI/litellm/pull/47677) fix(mcp): list per-user auth MCP tools without a shared token
- [#47645](https://github.com/BerriAI/litellm/pull/47645) fix(gemini)!: honor supports_sampling_params on the Gemini and Vertex path and flag Gemini 3.6 Flash, 3.5 Flash-Lite and later
- [#47552](https://github.com/BerriAI/litellm/pull/47552) fix(proxy): show the newest health check per model group on the model hub
- [#47658](https://github.com/BerriAI/litellm/pull/47658) fix(proxy): attribute retry attempt spend rows to their deployment and keep them out of daily request counts
- [#40868](https://github.com/BerriAI/litellm/pull/40868) fix(vertex_ai): log Gemini 3 sampling deprecation once per model per worker
- [#47506](https://github.com/BerriAI/litellm/pull/47506) fix(responses): send the billed background response cost to the creating key's and team's loggers
- [#47678](https://github.com/BerriAI/litellm/pull/47678) build(deps): bump pillow and dashboard vite, defer certifi to clear osv-scan
- [#47653](https://github.com/BerriAI/litellm/pull/47653) fix(proxy): flush tool discovery queue when use_redis_transaction_buffer is enabled
- [#41021](https://github.com/BerriAI/litellm/pull/41021) feat(nvidia_riva)!: add riva_offline mode for offline-only ASR models
- [#47034](https://github.com/BerriAI/litellm/pull/47034) fix(mcp): upgrade to MCP SDK 2.3.0 and raise the per-event SSE size cap
- [#47473](https://github.com/BerriAI/litellm/pull/47473) feat(extraction): add /v1/extraction with Cloudflare Clairic support
- [#47668](https://github.com/BerriAI/litellm/pull/47668) chore: bump litellm-enterprise 0.1.78 -> 0.1.79, litellm-proxy-extras 0.4.110 -> 0.4.111, litellm 1.107.0 -> 1.108.0
- [#47667](https://github.com/BerriAI/litellm/pull/47667) feat(cost-map): add fireworks deepseek v4.1 flash 1017 us at the us-only premium
- [#47648](https://github.com/BerriAI/litellm/pull/47648) fix(proxy): price earlier timed-out retry attempts at their own deployment's model rate
- [#47666](https://github.com/BerriAI/litellm/pull/47666) fix(vertex-ai): drop flex prices from gemini-nano-banana-2.1
- [#47655](https://github.com/BerriAI/litellm/pull/47655) fix(logging): spilled over PTU requests without base_model log the served model's rates
- [#47637](https://github.com/BerriAI/litellm/pull/47637) fix(gateway): reject malformed messages with 400
- [#47617](https://github.com/BerriAI/litellm/pull/47617) fix(router): price cost-based routing through model_info.base_model
- [#47124](https://github.com/BerriAI/litellm/pull/47124) fix(logging)!: fire one CustomLogger failure hook per async call outside the async flag list
- [#47642](https://github.com/BerriAI/litellm/pull/47642) feat(gateway): serve /v1/messages for chat-completions providers
- [#47652](https://github.com/BerriAI/litellm/pull/47652) fix(proxy): price a 499 spend row only for the proxy's own disconnect, and never after the call already completed
- [#47635](https://github.com/BerriAI/litellm/pull/47635) chore(cost-map): add search_free_requests to the model prices schema
- [#47611](https://github.com/BerriAI/litellm/pull/47611) fix(proxy): bill partial Responses API streams when the client disconnects
- [#47630](https://github.com/BerriAI/litellm/pull/47630) fix(ui): offer access-group models in team per-model rate limit and budget pickers
- [#47646](https://github.com/BerriAI/litellm/pull/47646) fix(proxy): scope the search free-tier counter to the request's provider
- [#47650](https://github.com/BerriAI/litellm/pull/47650) test(perf): tag a UI journey sample with its API response, not a Next.js prefetch under /ui/
- [#47647](https://github.com/BerriAI/litellm/pull/47647) fix(proxy): price a billed failure row at the deployment's long-context tier like the success path
- [#47429](https://github.com/BerriAI/litellm/pull/47429) fix(bedrock)!: apply the deployment guardrailConfig on /bedrock pass-through routes
- [#47569](https://github.com/BerriAI/litellm/pull/47569) fix(mcp): surface upstream HTTP status when a failed POST closes the session
- [#47307](https://github.com/BerriAI/litellm/pull/47307) fix(proxy): restore daily tag spend to the in-memory queue when the Redis RPUSH fails
- [#46932](https://github.com/BerriAI/litellm/pull/46932) fix(mcp)!: never forward the admission LiteLLM key upstream for any auth type
- [#47595](https://github.com/BerriAI/litellm/pull/47595) fix(ui_sso): seal the litellm_cp_return_to cookie so edge firewalls stop blocking the MCP OAuth sign-in
- [#47610](https://github.com/BerriAI/litellm/pull/47610) feat(github_copilot): support a GHE.com host on per-user Copilot credentials
- [#47434](https://github.com/BerriAI/litellm/pull/47434) fix(anthropic): keep tool names over 64 chars when a guardrail rewrites a /v1/messages request
- [#47625](https://github.com/BerriAI/litellm/pull/47625) fix(batches): retry confirmed pre-accounting failures
- [#47632](https://github.com/BerriAI/litellm/pull/47632) test(perf): emit a top-contributors breakdown property per perf metric
- [#47620](https://github.com/BerriAI/litellm/pull/47620) feat(cost): add model_info.pricing_provider for cost-map lookups
- [#43315](https://github.com/BerriAI/litellm/pull/43315) fix(logging)!: redact Responses instructions and callback output
- [#47631](https://github.com/BerriAI/litellm/pull/47631) chore: remove description heading from PR template
- [#47591](https://github.com/BerriAI/litellm/pull/47591) chore(cost-map): add fireworks glm 5.3 flash us deprecation date from the changelog
- [#47530](https://github.com/BerriAI/litellm/pull/47530) fix(harness): set PWD to the working directory of local sandbox commands
- [#47612](https://github.com/BerriAI/litellm/pull/47612) fix(ui): rebuild the dashboard bundle and cover it in the example master key check
- [#47628](https://github.com/BerriAI/litellm/pull/47628) test(perf): let the UI journey fixture run on a restore upgraded by a released migrations image
- [#47508](https://github.com/BerriAI/litellm/pull/47508) fix(decisions): bill unpriced returned TypeSafe versions at the requested model and name a missing answers field
- [#47622](https://github.com/BerriAI/litellm/pull/47622) test(perf): record the data request status per UI journey sample and bound each journey with a wall clock
- [#47260](https://github.com/BerriAI/litellm/pull/47260) fix(bedrock): send batch jobs to a configured control-plane endpoint
- [#47501](https://github.com/BerriAI/litellm/pull/47501) fix(proxy): size pass rebuilds reset row statistics with ANALYZE and keeps its reclaimable count
- [#47614](https://github.com/BerriAI/litellm/pull/47614) fix(proxy): flush the spend-log queue only for Responses turns the bridge reads back
- [#47616](https://github.com/BerriAI/litellm/pull/47616) test(perf): set the small case's postgres_max_background_statement_per_request ceiling to 0.9
- [#45992](https://github.com/BerriAI/litellm/pull/45992) fix(bedrock): return a 400 for malformed batch JSONL lines
- [#47509](https://github.com/BerriAI/litellm/pull/47509) refactor(types): replace Any with proven types in 15 files
- [#47559](https://github.com/BerriAI/litellm/pull/47559) test: isolate model cost maps in runtime registration tests
- [#47500](https://github.com/BerriAI/litellm/pull/47500) fix(proxy): one spend log cleanup pass at a time per pod, with or without Redis
- [#47604](https://github.com/BerriAI/litellm/pull/47604) docs: clarify unit test clock rule
- [#47600](https://github.com/BerriAI/litellm/pull/47600) test(integration): repair seven stale integration tests on main
- [#47451](https://github.com/BerriAI/litellm/pull/47451) feat(proxy): size pass drops the oldest spend log partitions first
- [#47603](https://github.com/BerriAI/litellm/pull/47603) test(integration): remove BUG skip for 1 test that passes on main
- [#47135](https://github.com/BerriAI/litellm/pull/47135) test: fix flaky team delete, refusal sink, loop-blocking, Moyai tamper and model-cost leak tests
- [#47494](https://github.com/BerriAI/litellm/pull/47494) feat(proxy): opt-in free-tier allowance for Google Search grounding spend
- [#47450](https://github.com/BerriAI/litellm/pull/47450) feat(proxy): size-triggered spend log cleanup with maximum_spend_logs_size, oldest rows first
- [#47597](https://github.com/BerriAI/litellm/pull/47597) test(bedrock): remove the Vault probe timing dependency
- [#44908](https://github.com/BerriAI/litellm/pull/44908) fix(vertex_ai)!: send integer enums to Gemini instead of dropping them
- [#47416](https://github.com/BerriAI/litellm/pull/47416) feat(proxy): write one spend row per billed timed-out retry attempt
- [#47592](https://github.com/BerriAI/litellm/pull/47592) test(integration): build the Mantle count_tokens wire test deployments with _metadata_deployment
- [#47590](https://github.com/BerriAI/litellm/pull/47590) test(perf): set every perf ceiling to 1.2x the lane median
- [#47582](https://github.com/BerriAI/litellm/pull/47582) test(cost): run azure_ai claude bridge pairs, add anthropic usage speed and vertex gemini audio priority price
- [#47331](https://github.com/BerriAI/litellm/pull/47331) fix(bedrock): resolve AWS region and secret lookups off the event loop
- [#46997](https://github.com/BerriAI/litellm/pull/46997) fix(proxy)!: stop update_cache from resurrecting evicted auth cache entries
- [#47333](https://github.com/BerriAI/litellm/pull/47333) fix(tests): read owned proxy rows from the owned proxy's database
- [#47593](https://github.com/BerriAI/litellm/pull/47593) test(integration): call _fallback_deployment in the count_tokens wire tests #47363 added
- [#47594](https://github.com/BerriAI/litellm/pull/47594) chore: lead the PR template with a short plain description and collapse the rest
- [#47480](https://github.com/BerriAI/litellm/pull/47480) fix(completion): send prompt_cache_retention to OpenAI instead of silently dropping it
- [#47497](https://github.com/BerriAI/litellm/pull/47497) fix(cost): price base_model deployments past rule-only cost map entries
- [#47486](https://github.com/BerriAI/litellm/pull/47486) test(perf): measure Admin UI journey latency in a browser on the 1TB SpendLogs restore
- [#47517](https://github.com/BerriAI/litellm/pull/47517) chore(release): v1.106.1 patch
- [#47519](https://github.com/BerriAI/litellm/pull/47519) chore(release): v1.105.2 patch
- [#47522](https://github.com/BerriAI/litellm/pull/47522) chore(release): v1.103.6 patch
- [#47568](https://github.com/BerriAI/litellm/pull/47568) fix(proxy): fall back to the deployment model when a billed failure row's base_model is not in the cost map
- [#47571](https://github.com/BerriAI/litellm/pull/47571) fix(proxy): requeue spend logs when a Postgres restart tears down the prisma engine mid-write
- [#47490](https://github.com/BerriAI/litellm/pull/47490) feat(proxy): lift every earlier billed timed-out retry attempt onto the failed request
- [#47572](https://github.com/BerriAI/litellm/pull/47572) test(integration): expect the Exa search envelope's provider_metadata after #47423
- [#47190](https://github.com/BerriAI/litellm/pull/47190) fix(batch): preserve recoverable costs and prevent poll starvation
- [#47564](https://github.com/BerriAI/litellm/pull/47564) fix(decisions): log non-UTF-8 bytes as base64 so the request reaches validation and gets a 400
- [#47510](https://github.com/BerriAI/litellm/pull/47510) fix(proxy): share the billing logger across callback registries
- [#47363](https://github.com/BerriAI/litellm/pull/47363) fix(responses)!: count input tokens the way inference sends the request
- [#47570](https://github.com/BerriAI/litellm/pull/47570) fix(litellm_proxy): forward tool_config cache_control_injection_points to the downstream proxy
- [#47565](https://github.com/BerriAI/litellm/pull/47565) fix(router): skip non-dict tool entries in the prompt caching affinity key instead of raising
- [#47567](https://github.com/BerriAI/litellm/pull/47567) fix(logging): report the pay-as-you-go entry billing used on Azure PTU spillover
- [#47489](https://github.com/BerriAI/litellm/pull/47489) fix(anthropic, bedrock)!: keep a redacted_thinking content item on every Claude route
- [#47566](https://github.com/BerriAI/litellm/pull/47566) test(translation): add sonnet 5.5 anthropic direct cross-model mid row
- [#47268](https://github.com/BerriAI/litellm/pull/47268) refactor(types): replace Any with proven types in 6 files
- [#45597](https://github.com/BerriAI/litellm/pull/45597) fix(langfuse_otel)!: send the completion start time
- [#47527](https://github.com/BerriAI/litellm/pull/47527) test(perf): set the seven new perf ceilings from 124 lane runs across v1.103.0 to v1.106.0
- [#47561](https://github.com/BerriAI/litellm/pull/47561) fix(cost-map): registry audit 2026-10-20, add volcengine doubao-seed-2-1 260915 rows and undated azure data zone rows
- [#43875](https://github.com/BerriAI/litellm/pull/43875) fix(bedrock): apply the 16 maxTokens floor to Kimi K3 on Converse
- [#47504](https://github.com/BerriAI/litellm/pull/47504) fix(responses): count billed background responses toward the creator's project and per-model budgets
- [#47419](https://github.com/BerriAI/litellm/pull/47419) fix(bedrock): resolve profile pricing before applying custom rates
- [#46857](https://github.com/BerriAI/litellm/pull/46857) fix(vertex_ai): reuse known context caches instead of listing on every request
- [#44574](https://github.com/BerriAI/litellm/pull/44574) feat(embeddings): enforce per-request input batch limit
- [#40621](https://github.com/BerriAI/litellm/pull/40621) fix(proxy)!: let proxy admin keys read raw cloud storage file ids on GET /files/{id}/content
- [#47525](https://github.com/BerriAI/litellm/pull/47525) test(integration): follow #47441 metadata-routed counting in count_tokens wire tests
- [#44187](https://github.com/BerriAI/litellm/pull/44187) fix(otel)!: leave out span cost when the price lookup failed
- [#47495](https://github.com/BerriAI/litellm/pull/47495) fix(sagemaker)!: parse every streamed record however SageMaker cuts the payload parts
- [#31074](https://github.com/BerriAI/litellm/pull/31074) fix(responses): keep strong refs to stream and websocket logging tasks (GC race)
- [#47358](https://github.com/BerriAI/litellm/pull/47358) feat(proxy): map baggage values to budget tags
- [#45467](https://github.com/BerriAI/litellm/pull/45467) feat(harness): add pi harness for litellm.agent()
- [#44230](https://github.com/BerriAI/litellm/pull/44230) fix(streaming): restore the token estimate for streams that send no usage
- [#47478](https://github.com/BerriAI/litellm/pull/47478) fix(anthropic): json_schema envelope edge cases on the Anthropic json tool path
- [#47257](https://github.com/BerriAI/litellm/pull/47257) fix(proxy)!: drop router_settings_override before routing and apply it on every branch
- [#47518](https://github.com/BerriAI/litellm/pull/47518) chore(cost-map): add fireworks 2026-11-07 deprecation dates from the prices api
- [#47498](https://github.com/BerriAI/litellm/pull/47498) fix(router)!: schedule default_priority requests once and reject a malformed priority
- [#47428](https://github.com/BerriAI/litellm/pull/47428) fix(router)!: only prefixed caller tags route once tag_routing_prefix is set
- [#47123](https://github.com/BerriAI/litellm/pull/47123) feat(context_management)!: honor clear_at_least, exclude_tools and clear_tool_inputs in the clear_tool_uses polyfill
- [#47376](https://github.com/BerriAI/litellm/pull/47376) feat(router): route batch creates to mode batch deployments and expose supported_endpoints on /model_group/info
- [#45555](https://github.com/BerriAI/litellm/pull/45555) fix(prometheus): preserve requested model after fallback
- [#44185](https://github.com/BerriAI/litellm/pull/44185) fix(otel): put the error message on every failed span status
- [#47411](https://github.com/BerriAI/litellm/pull/47411) fix(search): price Tavily advanced and Linkup deep searches at their own cost map entries
- [#44614](https://github.com/BerriAI/litellm/pull/44614) fix(videos)!: keep model_id in proxy video ids so per-model keys resolve on status/content
- [#47441](https://github.com/BerriAI/litellm/pull/47441) feat(bedrock): route token counts from model metadata
- [#44349](https://github.com/BerriAI/litellm/pull/44349) fix(streaming): keep finish_reason and provider usage when rebuilding streamed text completions
- [#47418](https://github.com/BerriAI/litellm/pull/47418) fix(proxy): decode zstd and gzip request bodies before auth reads them
- [#47492](https://github.com/BerriAI/litellm/pull/47492) chore(pricing): add github_copilot gpt-4.1 deprecation dates
- [#45567](https://github.com/BerriAI/litellm/pull/45567) feat(dashscope): add separate explicit and implicit cache pricing
- [#46411](https://github.com/BerriAI/litellm/pull/46411) fix(router): key prompt caching affinity on tools and the /v1/messages system prompt
- [#47328](https://github.com/BerriAI/litellm/pull/47328) test(translation): add sonnet 5.5 converse and gemini direct cross-model mid rows
- [#47364](https://github.com/BerriAI/litellm/pull/47364) test(integration): remove BUG skips for 3 tests that pass on main
- [#47422](https://github.com/BerriAI/litellm/pull/47422) fix(mcp)!: bill both model calls of a chat completions MCP auto-execute on one spend row
- [#46601](https://github.com/BerriAI/litellm/pull/46601) feat(router)!: apply each deployment's reasoning_effort_levels on every provider and route
- [#47352](https://github.com/BerriAI/litellm/pull/47352) fix(proxy): build the OpenAPI schema off the event loop so a cold /openapi.json no longer stalls the worker
- [#47449](https://github.com/BerriAI/litellm/pull/47449) feat(proxy): spend log storage probe and the reclaimable-bytes count
- [#47487](https://github.com/BerriAI/litellm/pull/47487) chore(pricing): add github_copilot deprecation dates for models retired on 2026-10-19
- [#43313](https://github.com/BerriAI/litellm/pull/43313) fix(proxy): resync configuration after Redis reconnect
- [#47353](https://github.com/BerriAI/litellm/pull/47353) fix(token_counter): count DeepSeek V4 text with DeepSeek's own tokenizer
- [#46390](https://github.com/BerriAI/litellm/pull/46390) fix(proxy): match partial wildcards against prefix-stripped model ids
- [#47437](https://github.com/BerriAI/litellm/pull/47437) fix(proxy): price a billed failure row at the deployment's own rate like the success path
- [#47030](https://github.com/BerriAI/litellm/pull/47030) perf(streaming): cut per-chunk pydantic round trips on openai-compatible streams
- [#47424](https://github.com/BerriAI/litellm/pull/47424) fix(databricks): stream Claude json_schema answers as text on every streaming path
- [#47472](https://github.com/BerriAI/litellm/pull/47472) test(perf): gate the gateway's own overhead header, redis latency and postgres load in the perf cases

#### 🐛 New Issues
- [#47579](https://github.com/BerriAI/litellm/issues/47579) [Bug]: Presidio guardrail serializes all analyzer/anonymizer calls per process (lock held across the HTTP request) `bug` 💬3
- [#47605](https://github.com/BerriAI/litellm/issues/47605) [Bug]: Presidio guardrail in logging_only mode masks the response returned to the client (streaming and non-streaming) `bug` `llm translation` 💬2
- [#47675](https://github.com/BerriAI/litellm/issues/47675) [Bug]: response_cost is null and spend stays $0 when custom_llm_provider=anthropic and the priced row lives under a different provider `llm translation` 💬1
- [#47607](https://github.com/BerriAI/litellm/issues/47607) [Bug]: encrypted_content_affinity traps follow-ups on a failing deployment: retries return to it, order fallback gives 'No deployments available' `llm translation` 💬1
- [#47577](https://github.com/BerriAI/litellm/issues/47577) [Bug]: Gemini _build_vertex_schema leaves schemaless type='object' child properties intact and streaming drops native_finish_reason on mid-stream MALFORMED_FUNCTION_CALL `llm translation` `claude code` 💬1
- [#47563](https://github.com/BerriAI/litellm/issues/47563) [Bug]: Vertex AI claude-opus-5-5 rejects response_format json_schema: LiteLLM sends the deprecated `output_format` instead of `output_config.format` `llm translation` 💬1
- [#47536](https://github.com/BerriAI/litellm/issues/47536) [Bug]: Decisions API should not hardcode an arbitrary 128-question limit `bug` 💬1
- [#47533](https://github.com/BerriAI/litellm/issues/47533) [Bug]: provider-reported usage.cost is ignored on non-streaming calls for OpenAI-compatible upstreams (spend/budget reads $0) `llm translation` 💬1
- [#47531](https://github.com/BerriAI/litellm/issues/47531) [Bug]: /v1/messages to a non-Anthropic model silently drops Claude Code's mid-conversation tool_addition blocks (tool never reaches the model) `llm translation` `claude code` 💬1
- [#47482](https://github.com/BerriAI/litellm/issues/47482) [Bug]: session_affinity retries go back to the failed pinned deployment, so num_retries never fails over until it is cooled down 💬1
- [#47710](https://github.com/BerriAI/litellm/issues/47710) [Feature]: Support Foundry Local SDK 2.2.0 `llm translation`
- [#47687](https://github.com/BerriAI/litellm/issues/47687) [Bug]: Bedrock Claude 5 json_schema without thinking: the json tool path returns empty content_filtered replies (Opus/Sonnet 5.5) `llm translation`
- [#47529](https://github.com/BerriAI/litellm/issues/47529) [Bug]: 1.105.1 upgrade breaks MCP tool discovery for per-user-auth servers: /mcp-rest/tools/list returns 200 but omits tools `bug`
- [#47674](https://github.com/BerriAI/litellm/issues/47674) __probe_do_not_use__
- [#47644](https://github.com/BerriAI/litellm/issues/47644) [Bug]: v1.106.0 Docker Admin UI shows API key fields for GitHub Copilot instead of documented per-user OAuth
- [#47638](https://github.com/BerriAI/litellm/issues/47638) [Feature]: Declare encryption-boundary peers for encrypted_content_affinity (model_info.encrypted_content_boundary) `llm translation`
- [#47633](https://github.com/BerriAI/litellm/issues/47633) [Feature]: Opt-in session model repinning after a successful content-policy fallback `llm translation`
- [#47576](https://github.com/BerriAI/litellm/issues/47576) [Bug]: /v1/messages streaming emits synthetic empty text block with stop_reason='end_turn' on 0-output / thinking-only / aborted streams (follow-up to #21744 & #40477) `llm translation` `claude code`
- [#47524](https://github.com/BerriAI/litellm/issues/47524) [Feature]: Allow define variables iwth schedule `enhancement`
- [#47520](https://github.com/BerriAI/litellm/issues/47520) [Bug]: an inconvenient button in the interface `bug`
- [#47502](https://github.com/BerriAI/litellm/issues/47502) [Bug]: Gemini 4 Argon (gemini-4-argon) sends unsupported candidate_count/penalty params and omits grounding toolUsePromptTokenCount from billable input tokens `llm translation`
- [#47481](https://github.com/BerriAI/litellm/issues/47481) [Bug]: aiohttp transport hangs 40-137 s on a stopped upstream: stale DNS cache, and request_timeout replaces the 5 s connect timeout `llm translation`

#### 🔒 Closed Issues
- [#37359](https://github.com/BerriAI/litellm/issues/37359) [Bug]: Unable to configure LiteLLM to allow Qwen3.8-27B-FP8 to support reasoning_effort
- [#46045](https://github.com/BerriAI/litellm/issues/46045) [Bug]: "ModuleNotFoundError: No module named 'mcp'"
- [#29407](https://github.com/BerriAI/litellm/issues/29407) [Feature]: Bump pinned OpenTelemetry SDK from 1.28.0 to the 1.40 line (or relax to a range)
- [#31866](https://github.com/BerriAI/litellm/issues/31866) feat(spend-tracking): add disable_entity_spend_updates flag to suppress entity counter UPDATEs while preserving spend logs
- [#25281](https://github.com/BerriAI/litellm/issues/25281) [Bug]: Model alias not working with team/virtual key access (permission denied before alias resolution)
- [#27704](https://github.com/BerriAI/litellm/issues/27704) Prisma Query Engine startup race condition causes spend data loss during rolling deployments
- [#25611](https://github.com/BerriAI/litellm/issues/25611) [Feature]: run proxy as a I tool, no containers
- [#30725](https://github.com/BerriAI/litellm/issues/30725) [Bug]: Bedrock pass-through endpoint - sometimes do no send the cost and `cost_breakdown` is all zero's
- [#47014](https://github.com/BerriAI/litellm/issues/47014) [Bug]: streamed response cache stores finish_reason "stop" for truncated streams; replay also drops completion_tokens_details
- [#35124](https://github.com/BerriAI/litellm/issues/35124) [Bug]: Streamed /v1/messages to an openai/ backend never emits a logging callback (AnthropicStreamWrapper / AnthropicResponsesStreamWrapper never thread litellm_logging_obj)
- [#43491](https://github.com/BerriAI/litellm/issues/43491) [Bug]: User, team, end-user, and tag spend caches lose concurrent increments
- [#31875](https://github.com/BerriAI/litellm/issues/31875) feat(litellm_proxy): forward tags and session_id to downstream LiteLLM proxy in cascaded topology
- [#30603](https://github.com/BerriAI/litellm/issues/30603) [Bug]: Responses API tool-call state is not closed correctly for Codex CLI through LiteLLM prox
- [#31284](https://github.com/BerriAI/litellm/issues/31284) SSE error codes outside HTTP range (100-599) silently dropped - router fallback/cooldown never triggers
- [#47397](https://github.com/BerriAI/litellm/issues/47397) [Bug]: /v1/messages forwards messages[].output_config to Bedrock/Vertex models that reject it; no fallback to strip it
- [#37629](https://github.com/BerriAI/litellm/issues/37629) [Bug]: DeepSeek thinking-mode warnings scale with replayed history and obscure useful logs
- [#44835](https://github.com/BerriAI/litellm/issues/44835) [Bug]: /v1/messages streaming + tools via azure/responses/ bridge duplicates tool-call arguments (invalid JSON)
- [#33150](https://github.com/BerriAI/litellm/issues/33150) [Bug]: Authentication error for master key should show IP to allow banning via log #5220
- [#33365](https://github.com/BerriAI/litellm/issues/33365) [Bug]: LiteLLM cannot be installed in air-gapped environment
- [#33405](https://github.com/BerriAI/litellm/issues/33405) Upgrade gunicorn to 26 for proxy security fix
- [#33421](https://github.com/BerriAI/litellm/issues/33421) I've hit a rate limit with the Gemini API an explanation would be nice as I am new
- [#45243](https://github.com/BerriAI/litellm/issues/45243) [Bug]: Responses instructions and reasoning/tool content survive callback message redaction
- [#35567](https://github.com/BerriAI/litellm/issues/35567) [Bug]: Global proxy spend cache loses concurrent increments
- [#45065](https://github.com/BerriAI/litellm/issues/45065) [Bug]: Unrecoverable batch cost failures are retried indefinitely
- [#47414](https://github.com/BerriAI/litellm/issues/47414) Custom batch threshold prices are dropped by get_model_info
- [#46876](https://github.com/BerriAI/litellm/issues/46876) [Bug]: SageMaker streaming breaks when a UTF-8 character is split across two PayloadPart events
- [#44049](https://github.com/BerriAI/litellm/issues/44049) /health/liveliness doesn't exercise the registry-load locks, so a stuck pod never self-heals
- [#36774](https://github.com/BerriAI/litellm/issues/36774) [Bug]: default_priority not being used when no priority provided
- [#36970](https://github.com/BerriAI/litellm/issues/36970) [Bug]: bedrock_mantle rejects max_tokens for Gemma models (google.gemma-4-*)
- [#46384](https://github.com/BerriAI/litellm/issues/46384) [Bug]: Partial wildcards (e.g. cloudflare/@cf/*) list uncallable ids in /v1/models and /model/info
- [#33148](https://github.com/BerriAI/litellm/issues/33148) Non-OpenAI-shaped provider error response raises bare Exception, which leads to (fabricated) `status_code=500`
- [#33155](https://github.com/BerriAI/litellm/issues/33155) error 500?
- [#33368](https://github.com/BerriAI/litellm/issues/33368) `extra_headers` silently dropped in SAP GenAI Hub Orchestration provider
- [#33374](https://github.com/BerriAI/litellm/issues/33374) [Bug]: Latency issues in global mcp endpoint /mcp/
- [#33397](https://github.com/BerriAI/litellm/issues/33397) [Bug]: mcp_tool_permissions implicitly grants MCP server access, so keys cannot opt out of servers (side effect of #22311)
- [#33447](https://github.com/BerriAI/litellm/issues/33447) MCP gateway does not surface downstream MCP server response headers to the caller
- [#47015](https://github.com/BerriAI/litellm/issues/47015) Gemini/Vertex path ignores `supports_sampling_params: false`; temperature/top_p/top_k are sent to Gemini 3.6+ models that silently ignore them
- [#45237](https://github.com/BerriAI/litellm/issues/45237) [Bug]: A Redis subscriber reconnects but misses a model created during disconnection
- [#36395](https://github.com/BerriAI/litellm/issues/36395) [Bug]: Gemini/Vertex cache_control performs cachedContents discovery on every repeated request
- [#43582](https://github.com/BerriAI/litellm/issues/43582) [Bug]: key/team router_settings leak to the provider as "router_settings_override" when the request carries api_key
- [#33423](https://github.com/BerriAI/litellm/issues/33423) [Bug]: POST /v1/videos encodes empty model_id → status/content fail with invalid_api_key for STORE_MODEL_IN_DB per-model keys (OpenAI)
- [#47529](https://github.com/BerriAI/litellm/issues/47529) [Bug]: 1.105.1 upgrade breaks MCP tool discovery for per-user-auth servers: /mcp-rest/tools/list returns 200 but omits tools
- [#47674](https://github.com/BerriAI/litellm/issues/47674) __probe_do_not_use__
- [#45056](https://github.com/BerriAI/litellm/issues/45056) [Bug]: Bedrock batch requests ignore the configured control-plane endpoint
- [#45060](https://github.com/BerriAI/litellm/issues/45060) [Bug]: Malformed Bedrock batch JSONL returns a server error instead of a client error
- [#46195](https://github.com/BerriAI/litellm/issues/46195) [Feature]: Apply Google's free grounding quota when costing Gemini / Vertex AI grounding
- [#44589](https://github.com/BerriAI/litellm/issues/44589) [Feature]: Size-based spend-log cleanup with resumable runs and physical storage reclamation
- [#45066](https://github.com/BerriAI/litellm/issues/45066) [Bug]: Unprocessable old batch rows prevent newer batches from being costed
- [#45596](https://github.com/BerriAI/litellm/issues/45596) [Bug]: langfuse_otel never sends the completion start time, so Langfuse shows no time to first token
- [#44186](https://github.com/BerriAI/litellm/issues/44186) [Bug]: OTel spans report llm.cost.total = 0 for a model LiteLLM could not price
- [#39901](https://github.com/BerriAI/litellm/issues/39901) Unprefixed request tag breaks routing once tag_routing_prefix is configured
- [#44184](https://github.com/BerriAI/litellm/issues/44184) [Bug]: OTel error spans have no status description, the error is only in error.message
- [#44348](https://github.com/BerriAI/litellm/issues/44348) stream_chunk_builder loses finish_reason and prompt_tokens for streamed text completions with include_usage
- [#45067](https://github.com/BerriAI/litellm/issues/45067) [Bug]: Support operator-configured default route allowlists for generated keys

### Unsloth (`unslothai/unsloth`)

**Stars:** 78,328 · **Open issues:** 305 · **Last push:** <1h ago

On October 21, 2026, Unsloth did not release any new versions but saw significant activity with several merged pull requests enhancing its functionality. Key developments include the addition of gradient_as_bucket_view for full finetuning and support for bf16 / fp16 gradient all-reduce in PR #14399, as well as improved streaming and encoding features in Studio, such as enhancing video stream encoding to handle flush failures gracefully (PR #14413). Notably, several bugs were reported, including a significant issue (#14327) involving a hardcoded random state in FastLanguageModel that leads to collisions in LoRA runs, highlighting an area that needs urgent attention. Other reported bugs include the TTI API minor issue (#14335) and settings pane scrolling problems (#14337).

#### ✅ Merged PRs
- [#14418](https://github.com/unslothai/unsloth/pull/14418) Studio no-torch runtime: pin certifi 2026.10.19, the floor fastmcp-slim now requires
- [#14399](https://github.com/unslothai/unsloth/pull/14399) DDP: gradient_as_bucket_view for full finetuning, opt-in bf16 / fp16 gradient all-reduce
- [#14419](https://github.com/unslothai/unsloth/pull/14419) Studio: decode the Rosetta sysctl probe as UTF-8
- [#14416](https://github.com/unslothai/unsloth/pull/14416) FP8 byte dequant: pass enable_fp_fusion at the launch
- [#14395](https://github.com/unslothai/unsloth/pull/14395) GRPO under DeepSpeed ZeRO-3: score with the gathered head, no_grad instead of inference_mode
- [#14413](https://github.com/unslothai/unsloth/pull/14413) Studio video stream encode: a failed final flush falls back instead of hanging the render
- [#13987](https://github.com/unslothai/unsloth/pull/13987) Studio: show the retrieved passages behind a document search
- [#14415](https://github.com/unslothai/unsloth/pull/14415) QAT test: spoof CUDA in the unpickling child on GPU-less runners
- [#14414](https://github.com/unslothai/unsloth/pull/14414) Tests: read checked-in sources as UTF-8 in three new test files
- [#14382](https://github.com/unslothai/unsloth/pull/14382) Fuse the decode residual add into RMSNorm (one Triton launch per norm)
- [#14394](https://github.com/unslothai/unsloth/pull/14394) DeepSpeed ZeRO-2 / ZeRO-3: stage detection at load, MoE and fused LoRA leaves, precision resync, reentrant checkpointing
- [#14410](https://github.com/unslothai/unsloth/pull/14410) Studio: run MiniMax-H3 PDD checkpoints with their 32-head output bank, refuse the ones that cannot run
- [#14398](https://github.com/unslothai/unsloth/pull/14398) FastLanguageModel LoRA / QLoRA: compile each decoder block as one region
- [#14405](https://github.com/unslothai/unsloth/pull/14405) Studio: encode Wan clips while the VAE decodes
- [#13792](https://github.com/unslothai/unsloth/pull/13792) Studio: pick ROCm flash attention by a whole-block timing probe instead of a model table
- [#14384](https://github.com/unslothai/unsloth/pull/14384) Native FSDP2: keep blocks that share parameters in the root unit (Zamba2)
- [#14397](https://github.com/unslothai/unsloth/pull/14397) Block compile: find decoder layers structurally and wrap mixed stacks per class
- [#14385](https://github.com/unslothai/unsloth/pull/14385) int4 packed: trace the training dequantize inside torch.compile
- [#14408](https://github.com/unslothai/unsloth/pull/14408) FP8 block dequant below sm89: decode e4m3fn bytes in one Triton pass
- [#13802](https://github.com/unslothai/unsloth/pull/13802) Studio: offload-first retry for an OOM VAE decode, fuse GroupNorm+SiLU on uncovered VAEs by structure
- [#14401](https://github.com/unslothai/unsloth/pull/14401) Studio: fix First Block Cache on FLUX.2 (dual-stream head, single-stream tail)
- [#11813](https://github.com/unslothai/unsloth/pull/11813) Studio: retry json_object as json_schema when a custom provider (LM Studio) refuses it
- [#13019](https://github.com/unslothai/unsloth/pull/13019) Refuse load_in_8bit with fast_inference instead of silently loading vLLM in 16-bit
- [#14372](https://github.com/unslothai/unsloth/pull/14372) Studio: prefer discrete GPUs over unified-memory APUs in automatic GGUF placement; clamp Vulkan free to total
- [#14396](https://github.com/unslothai/unsloth/pull/14396) Block compile: keep the stock forward under DeepSpeed ZeRO-3
- [#14407](https://github.com/unslothai/unsloth/pull/14407) Raise the startup bundle budget for the Rosetta chat-only messages (#14374)
- [#14371](https://github.com/unslothai/unsloth/pull/14371) Gate XPU bf16 on native support, hint CUDA_DEVICE_ORDER on mixed NVIDIA hosts, read the Metal GPU family for MLX bf16
- [#14373](https://github.com/unslothai/unsloth/pull/14373) llama.cpp prebuilt: accept upstream win-rocm bundles, run native arm64 under Rosetta, source-build on Jetson
- [#14374](https://github.com/unslothai/unsloth/pull/14374) Studio/CLI: report Rosetta, skip audio.cpp CUDA on pre-Turing GPUs, pass doctor on MPS/XPU, hide XPU from token preview
- [#14244](https://github.com/unslothai/unsloth/pull/14244) fix(studio): align Whisper training labels with decoder prefix
- [#14379](https://github.com/unslothai/unsloth/pull/14379) Studio: Load anyway for the unified-memory diffusion refusal, and a capacity fix for its pre-download check
- [#14387](https://github.com/unslothai/unsloth/pull/14387) Studio diffusion: record a prompt length's CUDA graph on the first render only
- [#14386](https://github.com/unslothai/unsloth/pull/14386) NF4 decode on T4: use the bitsandbytes 4-bit GEMM above the GEMV row cap
- [#14356](https://github.com/unslothai/unsloth/pull/14356) Studio: pin the FLUX.3 prompt upsampler to the image model's card under HIP masks and on Vulkan builds
- [#13793](https://github.com/unslothai/unsloth/pull/13793) Studio: run Ada FP8 precise accumulate through a unit-scale GEMM plus a fused scale epilogue
- [#14376](https://github.com/unslothai/unsloth/pull/14376) Fix phone-deployment QAT for Gemma3 and LoRA, and write the matching ExecuTorch export config
- [#13438](https://github.com/unslothai/unsloth/pull/13438) fix: release the device cache through the active accelerator on the vLLM resume/teardown paths
- [#14383](https://github.com/unslothai/unsloth/pull/14383) Tests: keep gloo FSDP2 test ranks on the CPU on GPU hosts
- [#14375](https://github.com/unslothai/unsloth/pull/14375) Stop fix_executorch from hiding an installed torchtune
- [#14363](https://github.com/unslothai/unsloth/pull/14363) Installers: do not install generic aarch64 CUDA torch on Jetson before CUDA 13
- [#14076](https://github.com/unslothai/unsloth/pull/14076) Fix chat context counts and token usage details
- [#14367](https://github.com/unslothai/unsloth/pull/14367) Studio diffusion: run FLUX.3 base conditioning blocks once per render
- [#14358](https://github.com/unslothai/unsloth/pull/14358) MoE grouped GEMM: require sm90 on every visible card for TMA and launch on the operands' device
- [#13714](https://github.com/unslothai/unsloth/pull/13714) Studio sd.cpp: explicit VRAM budget for MiniMax-H3 and a CUDA capability fallback
- [#14095](https://github.com/unslothai/unsloth/pull/14095) save_pretrained_gguf: stop rewriting a reused local checkpoint's tokenizer with a BOS-stripped template
- [#14096](https://github.com/unslothai/unsloth/pull/14096) check_tokenizer: repair out-of-vocab added tokens on transformers 5.x, and raise when one can't be repaired
- [#14093](https://github.com/unslothai/unsloth/pull/14093) load_in_fp8=True quantizes a model with no FP8 repo instead of silently loading it in bf16
- [#13715](https://github.com/unslothai/unsloth/pull/13715) Studio diffusion: cache runtime-quantized denoisers as local pre-quant checkpoints
- [#14246](https://github.com/unslothai/unsloth/pull/14246) fix: preserve sentence encoder adapters and export dense 16bit weights
- [#14341](https://github.com/unslothai/unsloth/pull/14341) Studio compile cache: keep every graph across re-saves, and save under torch's compile lock
- [#14317](https://github.com/unslothai/unsloth/pull/14317) Unsloth Studio (AMD/Windows): show an iGPU's own memory on Settings > About, not the system RAM it can borrow
- [#14094](https://github.com/unslothai/unsloth/pull/14094) Keep SFT kwargs passed beside a plain TrainingArguments instead of falling back to trl's defaults
- [#14160](https://github.com/unslothai/unsloth/pull/14160) Studio: Mamba-2 hybrids use the extension-free mamba-ssm wheel when unsloth-zoo runs their conv on Triton
- [#13787](https://github.com/unslothai/unsloth/pull/13787) Studio diffusion: single-card CFG batching for a DiT streamed from host memory
- [#14301](https://github.com/unslothai/unsloth/pull/14301) Studio: prune dead startup records and preserve process identity
- [#13349](https://github.com/unslothai/unsloth/pull/13349) Studio: size sd.cpp's thread pool from the Apple fast cores
- [#13668](https://github.com/unslothai/unsloth/pull/13668) Studio: stop recipe dialogs opening a hint tooltip on open
- [#13713](https://github.com/unslothai/unsloth/pull/13713) Studio diffusion: pin Triton libdevice before the first compile so restarts hit the FX graph cache
- [#14097](https://github.com/unslothai/unsloth/pull/14097) Unsloth Studio: a JSONL reply that quotes <tool_call> no longer stalls the tool parser and fails the turn with RecursionError
- [#14251](https://github.com/unslothai/unsloth/pull/14251) fix: preserve padding-free DPO sample boundaries in fast Llama/Qwen2
- [#14345](https://github.com/unslothai/unsloth/pull/14345) Studio: API keys run tools in the sandbox; Full access needs the Unsloth UI
- [#14351](https://github.com/unslothai/unsloth/pull/14351) Studio: honor width, height, steps, guidance, seed and negative_prompt on /v1/images/generations
- [#14051](https://github.com/unslothai/unsloth/pull/14051) Studio: download prebuilt kernel wheels once
- [#14286](https://github.com/unslothai/unsloth/pull/14286) Studio: keep the page open when saving a bookmark
- [#14353](https://github.com/unslothai/unsloth/pull/14353) Studio: open each Settings tab at the top instead of the previous tab's scroll offset
- [#14300](https://github.com/unslothai/unsloth/pull/14300) unsloth start (Windows): pass the sub-agent task over stdin so non-npm .cmd shims don't mangle it
- [#14278](https://github.com/unslothai/unsloth/pull/14278) Studio: warn before downloading a program sent without an extension
- [#14148](https://github.com/unslothai/unsloth/pull/14148) Studio: skip causal-conv1d for Qwen3.5 / 3.6 / Qwen3-Next when unsloth-zoo covers decode
- [#14304](https://github.com/unslothai/unsloth/pull/14304) Normalize role names when converting ChatML to Alpaca
- [#14280](https://github.com/unslothai/unsloth/pull/14280) Studio: keep text typed into a browser panel page when switching tabs
- [#14287](https://github.com/unslothai/unsloth/pull/14287) Studio: keep runtime flash-attn installs wheel-only
- [#14325](https://github.com/unslothai/unsloth/pull/14325) fix(studio): MLX memory estimate no longer allocates the model, and sizes DeepSeek V4 / V4.1
- [#14284](https://github.com/unslothai/unsloth/pull/14284) Studio: make copy buttons on web pages work in the browser panel
- [#14293](https://github.com/unslothai/unsloth/pull/14293) Studio: honor UNSLOTH_HOME in installers
- [#13725](https://github.com/unslothai/unsloth/pull/13725) Studio diffusion: multi-GPU component placement and CFG-parallel
- [#14346](https://github.com/unslothai/unsloth/pull/14346) OpenAPI loop test: build the real schema outside the measured window
- [#14344](https://github.com/unslothai/unsloth/pull/14344) PEFT MoE conversion snapshot: add the Qwen3-Omni MoE text type and thinker aliases
- [#14336](https://github.com/unslothai/unsloth/pull/14336) Prebuilt wheels: build causal-conv1d and mamba-ssm for Linux torch 2.10 to 2.12
- [#14307](https://github.com/unslothai/unsloth/pull/14307) Move the Unsloth Studio MLX pins to mlx-vlm 0.7.9
- [#14243](https://github.com/unslothai/unsloth/pull/14243) Studio: let the model read MCP server resources
- [#14245](https://github.com/unslothai/unsloth/pull/14245) Desktop: offer a chat-only (GGUF) install and keep it through repairs
- [#14255](https://github.com/unslothai/unsloth/pull/14255) Studio: keep project sources when a knowledge base is picked
- [#14334](https://github.com/unslothai/unsloth/pull/14334) Distributed tests: pick MASTER_PORT outside the ephemeral range, write vision results atomically
- [#14333](https://github.com/unslothai/unsloth/pull/14333) Point Unsloth docs links at unsloth.ai/docs instead of docs.unsloth.ai
- [#14331](https://github.com/unslothai/unsloth/pull/14331) Raise the startup bundle budget for the modern toggles (#14322)
- [#14322](https://github.com/unslothai/unsloth/pull/14322) Studio: modern toggles, 34 x 20 with a flat centred thumb
- [#14329](https://github.com/unslothai/unsloth/pull/14329) Studio Hub: rank Latest by trending against creation date, not last modified
- [#14324](https://github.com/unslothai/unsloth/pull/14324) Studio: suggest Unsloth Docs in the web UI browser panel
- [#14273](https://github.com/unslothai/unsloth/pull/14273) Native FSDP2: fully_shard per block and root for every model, LoRA, QLoRA and full finetuning (UNSLOTH_FSDP2=1)
- [#14282](https://github.com/unslothai/unsloth/pull/14282) Studio: let the browser agent tick radios and checkboxes by their label
- [#14323](https://github.com/unslothai/unsloth/pull/14323) Studio: fix Claude API reference pages in the browser panel
- [#14321](https://github.com/unslothai/unsloth/pull/14321) Studio: load ComfyUI fp8mixed text encoders (nvfp4 / mxfp8 layers)
- [#14279](https://github.com/unslothai/unsloth/pull/14279) Studio: open the Unsloth docs and Next.js sites in the browser panel
- [#14319](https://github.com/unslothai/unsloth/pull/14319) Raise the startup bundle budget for the FLUX.3 controls (#14312)
- [#14318](https://github.com/unslothai/unsloth/pull/14318) SAM 3 skeleton test: compare against a float32 load and find the RoPE tables by any spelling
- [#14316](https://github.com/unslothai/unsloth/pull/14316) Model catalog network check: judge FLUX.3 Klein by the mirror the backend fetches
- [#14228](https://github.com/unslothai/unsloth/pull/14228) Add a vLLM backend to unsloth eval
- [#14312](https://github.com/unslothai/unsloth/pull/14312) Studio: fix FLUX.3 workflows, controls, LoRAs and download progress
- [#14229](https://github.com/unslothai/unsloth/pull/14229) Studio: logprobs on /v1/completions and /tokenize for MLX models
- [#14227](https://github.com/unslothai/unsloth/pull/14227) Studio: serve /v1/completions from managed vLLM and SGLang engines
- [#14310](https://github.com/unslothai/unsloth/pull/14310) Studio: SAM 3.1 for Mask from text, with pre-quantized INT8 / FP8 files
- [#14311](https://github.com/unslothai/unsloth/pull/14311) Baseline the unsloth-zoo 2026.10.7 scan findings after review
- [#14305](https://github.com/unslothai/unsloth/pull/14305) Studio: Library chat cards keep their column width and equal padding

#### 🐛 New Issues
- [#14327](https://github.com/unslothai/unsloth/issues/14327) Bug: FastLanguageModel.get_peft_model hardcoded random_state = 3407 causes 99.9% lora_A subspace collision across sequential LoRA -> Merge -> LoRA runs 💬3
- [#14335](https://github.com/unslothai/unsloth/issues/14335) [Bug] Minor bug with TTI API. `feature request` `bug` 💬3
- [#14337](https://github.com/unslothai/unsloth/issues/14337) [Bug] Settings pane keeps scroll offset when switching between tabs `feature request` `bug` 💬1
- [#14306](https://github.com/unslothai/unsloth/issues/14306) False positive scan `feature request` `bug` 💬1
- [#14411](https://github.com/unslothai/unsloth/issues/14411) [Bug] Since the updates in the last 2 weeks it core bumps `feature request` `bug`
- [#14381](https://github.com/unslothai/unsloth/issues/14381) DFlash2 crashes on first prompt with Qwen3.8-Flash-Next in Unsloth build
- [#14362](https://github.com/unslothai/unsloth/issues/14362) [Feature] API loads a preferred quant for a given model `feature request`
- [#14377](https://github.com/unslothai/unsloth/issues/14377) [Feature]Native Support for EPUB and MOBI File Formats in Unsloth `feature request`
- [#14370](https://github.com/unslothai/unsloth/issues/14370) [Feature] Unsloth issue draft — `has_internet()` leaks a global 3 s socket timeout into the process `feature request`
- [#14366](https://github.com/unslothai/unsloth/issues/14366) [Feature] Unsloth issue draft — `get_statistics()` blocks `from_pretrained` for ~76s `feature request`
- [#14339](https://github.com/unslothai/unsloth/issues/14339) [Bug] Please fill in your issue title here. `feature request` `bug`
- [#14330](https://github.com/unslothai/unsloth/issues/14330) Floating windows repositioning `feature request` `bug`
- [#14320](https://github.com/unslothai/unsloth/issues/14320) [Bug] Loading TTS model unloads the chat model `feature request` `bug`
- [#14315](https://github.com/unslothai/unsloth/issues/14315) [Bug] Mythos outputs 1 token in DSH and stops `feature request` `bug`
- [#14314](https://github.com/unslothai/unsloth/issues/14314) [Bug] Unsloth Browser tabs can't be clicked easily and cant be closed at all due to this. `feature request` `bug`
- [#14313](https://github.com/unslothai/unsloth/issues/14313) [Desktop] v0.1.909-beta: persistent CPU saturation during background RAG embedding after #13048
- [#14309](https://github.com/unslothai/unsloth/issues/14309) [Feature] Automatically adapt to the context window if the input is too large for embedding `feature request`

#### 🔒 Closed Issues
- [#10800](https://github.com/unslothai/unsloth/issues/10800) [Feature] Native Browser Use / Browser Automation tool for Unsloth Studio agents
- [#4269](https://github.com/unslothai/unsloth/issues/4269) [Bug] Unable to get unsloth/GLM-OCR loaded
- [#14174](https://github.com/unslothai/unsloth/issues/14174) [Bug] repo adds significant stress to pre-commit.ci
- [#7703](https://github.com/unslothai/unsloth/issues/7703) [Feature] Studio API: /v1/completions support + logprobs for non-GGUF models (MLX/Transformers)
- [#4474](https://github.com/unslothai/unsloth/issues/4474) [Feature] A plugin system would be useful.
- [#4739](https://github.com/unslothai/unsloth/issues/4739) `fast_inference=True` fails with `full_finetuning=True` on A100 during `FastLanguageModel.from_pretrained(...)`
- [#10838](https://github.com/unslothai/unsloth/issues/10838) [Feature] Deepseek v4.1 flash gguf and support in llamacpp
- [#9584](https://github.com/unslothai/unsloth/issues/9584) [Feature] Native Inline Media/Image Rendering for MCP Tool Call Output
- [#13788](https://github.com/unslothai/unsloth/issues/13788) [Feature] Add a way to see the exact text snippets or chunks that were loaded into context with RAG
- [#8842](https://github.com/unslothai/unsloth/issues/8842) [Feature] Automations with scheduler
- [#4861](https://github.com/unslothai/unsloth/issues/4861) [Docs] Korean documentation translation contribution
- [#14327](https://github.com/unslothai/unsloth/issues/14327) Bug: FastLanguageModel.get_peft_model hardcoded random_state = 3407 causes 99.9% lora_A subspace collision across sequential LoRA -> Merge -> LoRA runs
- [#14335](https://github.com/unslothai/unsloth/issues/14335) [Bug] Minor bug with TTI API.
- [#3255](https://github.com/unslothai/unsloth/issues/3255) [Feature] Support for Diffusers, specifically Wan2.2
- [#9954](https://github.com/unslothai/unsloth/issues/9954) [Feature] Selective Installation to reduce installation size (currently 8.2 GB, python taking 6.4 GB)
- [#8138](https://github.com/unslothai/unsloth/issues/8138) [Bug] unsloth-zoo MLX test suite is not isolation-clean on Apple Silicon: 24-34 failures depending only on how it is invoked
- [#13595](https://github.com/unslothai/unsloth/issues/13595) [Feature] allow 'new chat' window to save text when switching windows
- [#14337](https://github.com/unslothai/unsloth/issues/14337) [Bug] Settings pane keeps scroll offset when switching between tabs
- [#8235](https://github.com/unslothai/unsloth/issues/8235) Studio: diffusion budgets against one GPU, so a multi-GPU host offloads to RAM instead of using the second card
- [#9925](https://github.com/unslothai/unsloth/issues/9925) [Feature] Support MCP Resources (resources/list, resources/read)
- [#9485](https://github.com/unslothai/unsloth/issues/9485) [Feature] Multiple RAG support
- [#14303](https://github.com/unslothai/unsloth/issues/14303) [Bug] ChatML to Alpaca conversion drops all turns when role names are capitalized

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,154 · **Open issues:** 398 · **Last push:** 2h ago

On October 21, 2026, there were no new releases for AIBrix, but several key updates were made through merged pull requests. Notable additions include the implementation of the ModelClaims pages in the console (#3195) and the integration of a custom audio voices API routed through the gateway (#3219). Bug fixes addressed various issues such as ensuring that the pod autoscaler counts only the appropriate pods when sizing metrics (#3167) and improving the reliability of requests related to the KV cache and ModelAdapters. A significant new issue was raised regarding hybrid-model KV offloading with incremental state/span records (#3220), which may have implications for future development and performance optimization. Overall, the day showcased a focus on enhancing the user interface and fixing critical bugs while maintaining the general stability of the platform.

#### ✅ Merged PRs
- [#3199](https://github.com/vllm-project/aibrix/pull/3199) [UI] Chat with ModelClaims in the Playground
- [#3174](https://github.com/vllm-project/aibrix/pull/3174) [API] Make PodAutoscaler scalingStrategy immutable
- [#3167](https://github.com/vllm-project/aibrix/pull/3167) [Bug] Count only the pods carrying load when KPA sizes a per-pod metric
- [#3173](https://github.com/vllm-project/aibrix/pull/3173) [Bug] Accept gs:// artifact URLs for ModelAdapters
- [#3177](https://github.com/vllm-project/aibrix/pull/3177) [Misc] Pin the TPM failure counter's amount and its absence on success
- [#3219](https://github.com/vllm-project/aibrix/pull/3219) [Feat] Route the custom audio voices API through the gateway
- [#3192](https://github.com/vllm-project/aibrix/pull/3192) [Bug] Report a failed rate-limit read as an outage, not as over the limit
- [#3201](https://github.com/vllm-project/aibrix/pull/3201) [Bug] Time and meter a weighted pd routing strategy as pd
- [#3196](https://github.com/vllm-project/aibrix/pull/3196) [CI] Narrow Volcano E2E utility path filter
- [#3195](https://github.com/vllm-project/aibrix/pull/3195) [UI] Add ModelClaim pages to the console
- [#3194](https://github.com/vllm-project/aibrix/pull/3194) [Feat] Add a ModelClaim BFF to the console API
- [#3163](https://github.com/vllm-project/aibrix/pull/3163) [Bug] Retry and report a failed RayCluster create in RayClusterReplicaSet

#### 🐛 New Issues
- [#3220](https://github.com/vllm-project/aibrix/issues/3220) [RFC]: Hybrid-model KV offloading with incremental state/span records `kind/feature` `area/kv-cache` 💬2
- [#3198](https://github.com/vllm-project/aibrix/issues/3198) [Bug] E+PD requests skip the encode stage when requestsInflight is set `kind/bug` `area/gateway` `area/website` 💬2
- [#3227](https://github.com/vllm-project/aibrix/issues/3227) [Bug] KPA holds the replica count when an External/Domain total is within tolerance of one pod's target `kind/bug` 💬1
- [#3226](https://github.com/vllm-project/aibrix/issues/3226) [Bug] vtc-basic never charges a user's tokens under the default auto-blend `kind/bug` `area/gateway` 💬1
- [#3225](https://github.com/vllm-project/aibrix/issues/3225) [Bug] Setting an AIBRIX_ROUTING_AUTO_BLEND_*_WEIGHT env var to 0 does not disable the blend `kind/bug` `area/gateway` 💬1
- [#3223](https://github.com/vllm-project/aibrix/issues/3223) [Bug] Prefill overload filter can never skip a hot pod with 5 or fewer prefill pods `kind/bug` `area/gateway` `area/installation` 💬1
- [#3222](https://github.com/vllm-project/aibrix/issues/3222) [Bug] PD router keeps sending requests to a prefill pod that fails every prefill `kind/bug` `area/gateway` 💬1
- [#3217](https://github.com/vllm-project/aibrix/issues/3217) KV cache Redis meta service raises AttributeError on a missing cluster meta key, which kills the placement refresh thread `kind/bug` `area/kv-cache` `area/orchestration` 💬1
- [#3212](https://github.com/vllm-project/aibrix/issues/3212) [Feature] Add DeepInfer as a supported inference engine `kind/feature` `area/runtime` 💬1
- [#3210](https://github.com/vllm-project/aibrix/issues/3210) GPU optimizer: reloading a regenerated profile raises KeyError, and the new profile is never applied `kind/bug` 💬1
- [#3208](https://github.com/vllm-project/aibrix/issues/3208) KV cache token validation rejects every L2 block that has a prefix: unpack_tokens() decodes the wrong bytes `kind/bug` `area/testing` `area/kv-cache` 💬1
- [#3206](https://github.com/vllm-project/aibrix/issues/3206) KV cache L1 S3FIFO policy never trims its ghost fifo, so evicted keys accumulate without bound `kind/bug` `area/kv-cache` 💬1
- [#3204](https://github.com/vllm-project/aibrix/issues/3204) Batch requests ignore the job's client.request_timeout_seconds and always use a 30 s read timeout `kind/bug` `area/runtime` `area/batch` 💬1
- [#3202](https://github.com/vllm-project/aibrix/issues/3202) [Bug] KV event replay recovery stops behind a second sequence gap `kind/bug` `area/gateway` `area/kv-cache` `area/batch` 💬1
- [#3193](https://github.com/vllm-project/aibrix/issues/3193) [Feature][Console]: Manage ModelClaims in the AIBrix Console (frontend + backend) `area/gateway` `kind/feature` `area/website` `area/runtime` 💬1
- [#3215](https://github.com/vllm-project/aibrix/issues/3215) [Feature] Add Moore Threads MTT S5000 (MUSA) deployment samples `kind/feature` `area/runtime`

#### 🔒 Closed Issues
- [#3155](https://github.com/vllm-project/aibrix/issues/3155) [Bug] SGLang DP-attention gauges retain one rank instead of pod-level values

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,230 · **Open issues:** 671 · **Last push:** <1h ago

On October 21, 2026, there were no new releases for Semantic Router, but several significant developments occurred in merged pull requests. Notable features included improvements to the decision model with recipes that handle knowledge routes and multi-objective tasks, alongside the introduction of a Read Dashboard feature for API capabilities. Bug fixes addressed issues with model runtime, ensuring requests adhere to budget constraints and improving compatibility with device memory management. Among the newly reported issues, a critical bug was raised concerning SR-Bench's bounded-memory test, which may cause CI failures when counting host-dependent memory during reader streams.

#### ✅ Merged PRs
- [#5329](https://github.com/vllm-project/semantic-router/pull/5329) [Feature] Model runtime: graph captures multiply NVFP4 in FlashInfer's FP4 GEMM
- [#5328](https://github.com/vllm-project/semantic-router/pull/5328) [Test] SR-Bench: the bounded-memory test subtracts a small-selection baseline
- [#5321](https://github.com/vllm-project/semantic-router/pull/5321) [Feature] Recipes: Knowledge routes on a subject question; Multi-Objective asks the decision model
- [#5320](https://github.com/vllm-project/semantic-router/pull/5320) [Feature] Recipes: Accuracy, Feedback, Privacy and Agent route on named decision-model questions
- [#5317](https://github.com/vllm-project/semantic-router/pull/5317) [Feature] Recipes: MoM V1 Balance runs the Decision Balance policy
- [#5316](https://github.com/vllm-project/semantic-router/pull/5316) [Bug] Model runtime: requests that wait for the device share forwards up to the budget
- [#5137](https://github.com/vllm-project/semantic-router/pull/5137) [Feature] Read Dashboard feature availability from /api/v1/capabilities
- [#4800](https://github.com/vllm-project/semantic-router/pull/4800) [Bug] Enforce translation review metadata for current docs

#### 🐛 New Issues
- [#5326](https://github.com/vllm-project/semantic-router/issues/5326) [Bug] SR-Bench's bounded-memory test counts host-dependent memory, so it can fail CI while the reader streams `bug` `accepted` `wg/evaluation-quality` 💬6
- [#5298](https://github.com/vllm-project/semantic-router/issues/5298) [Bug] Model runtime: placement refuses integrated GPUs whose memory is held as page cache `bug` `accepted` `wg/router-models-inference-runtime` 💬3
- [#5307](https://github.com/vllm-project/semantic-router/issues/5307) [Bug] Engine mode silently keeps a revision an older vllm-sr saved after an upgrade `bug` `accepted` `wg/developer-experience-ecosystem` 💬3
- [#5296](https://github.com/vllm-project/semantic-router/issues/5296) [Bug] vllm-sr-rocm image rocBLAS has no gfx1151 kernels `accepted` `wg/enterprise-environment` 💬1
- [#5301](https://github.com/vllm-project/semantic-router/issues/5301) [Feature] Build and publish ARM64 CUDA router images for GB10 `enhancement` `accepted` `wg/enterprise-environment` 💬2
- [#5312](https://github.com/vllm-project/semantic-router/issues/5312) [Bug] Model runtime: concurrent requests keep the small batches their arrival formed `bug` `accepted` `wg/router-models-inference-runtime` 💬1
- [#5290](https://github.com/vllm-project/semantic-router/issues/5290) [Feature] Model runtime: NVFP4 products through FlashInfer's autotuned FP4 GEMM `enhancement` `accepted` `in-progress` `wg/router-models-inference-runtime` 💬1
- [#5323](https://github.com/vllm-project/semantic-router/issues/5323) [Bug] A /ci run rerun can record PR Gate's success on a superseded check, so branch protection still blocks the merge `bug` `needs-acceptance` `wg/evaluation-quality` 💬1
- [#5302](https://github.com/vllm-project/semantic-router/issues/5302) [Feature] Add a reproducible GB10 deployment qualification profile `enhancement` `needs-acceptance` `wg/enterprise-environment` 💬1
- [#5306](https://github.com/vllm-project/semantic-router/issues/5306) [Bug] Long-context System One requests time out after 30 s unless the client sets deadline_ms `bug` `accepted` `wg/router-models-inference-runtime` 💬1
- [#5309](https://github.com/vllm-project/semantic-router/issues/5309) [Bug] Platform auto-detection fails when the GPU visibility mask uses UUIDs `bug` `accepted` `wg/developer-experience-ecosystem` 💬1
- [#5295](https://github.com/vllm-project/semantic-router/issues/5295) [Bug] Window options accept invalid integer values `bug` `needs-acceptance` `wg/router-models-inference-runtime` 💬1
- [#5299](https://github.com/vllm-project/semantic-router/issues/5299) [Bug] Standalone root requests return misleading upstream errors `needs-acceptance` `wg/data-plane-networking` 💬1
- [#5287](https://github.com/vllm-project/semantic-router/issues/5287) [Bug] PR CI status publisher includes its own check in qualification verdict `bug` `accepted` `wg/evaluation-quality` 💬1
- [#5324](https://github.com/vllm-project/semantic-router/issues/5324) [Bug] Specify explicit UTF-8 encoding for config file operations in CLI `bug` `needs-acceptance` `wg/developer-experience-ecosystem`
- [#5318](https://github.com/vllm-project/semantic-router/issues/5318) [Bug] The installer's first run leaves a background serve that blocks vllm-sr serve and vllm-sr stop `bug` `needs-acceptance` `wg/developer-experience-ecosystem`
- [#5310](https://github.com/vllm-project/semantic-router/issues/5310) [Feature] Native Linux/RISC-V64 support for the standalone Router `needs-acceptance`
- [#5297](https://github.com/vllm-project/semantic-router/issues/5297) [Feature] Model runtime: quantized d3-turbo (state-once) packages, NVFP4 first `accepted` `in-progress` `wg/router-models-inference-runtime`

#### 🔒 Closed Issues
- [#5326](https://github.com/vllm-project/semantic-router/issues/5326) [Bug] SR-Bench's bounded-memory test counts host-dependent memory, so it can fail CI while the reader streams
- [#4318](https://github.com/vllm-project/semantic-router/issues/4318) [Feature] Warn when a context band escalates to a model with no larger window
- [#4301](https://github.com/vllm-project/semantic-router/issues/4301) [Bug] Quality baseline fact-check and feedback splits can be solved without reading the text
- [#4792](https://github.com/vllm-project/semantic-router/issues/4792) [Bug] Translation banner suppression is an unenforced per-page is_mtpe opt-in
- [#5296](https://github.com/vllm-project/semantic-router/issues/5296) [Bug] vllm-sr-rocm image rocBLAS has no gfx1151 kernels
- [#5312](https://github.com/vllm-project/semantic-router/issues/5312) [Bug] Model runtime: concurrent requests keep the small batches their arrival formed
- [#5306](https://github.com/vllm-project/semantic-router/issues/5306) [Bug] Long-context System One requests time out after 30 s unless the client sets deadline_ms
- [#5309](https://github.com/vllm-project/semantic-router/issues/5309) [Bug] Platform auto-detection fails when the GPU visibility mask uses UUIDs
- [#5232](https://github.com/vllm-project/semantic-router/issues/5232) [Feature] Model runtime: merge NVFP4 projections of one input into one product
- [#5287](https://github.com/vllm-project/semantic-router/issues/5287) [Bug] PR CI status publisher includes its own check in qualification verdict

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*