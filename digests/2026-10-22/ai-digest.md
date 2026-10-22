# 📡 AI Ecosystem Digest — 2026-10-22

> Generated 2026-10-22 01:17 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 152,757 | 15 | 1 | 0 | 2 |
| [OpenAI Codex](https://github.com/openai/codex) | 130,318 | 19 | 2 | 45 | 3 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 107,493 | 0 | 0 | 8 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,287 | 8 | 5 | 0 | 3 |
| [OpenCode](https://github.com/anomalyco/opencode) | 219,693 | 26 | 11 | 8 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 28,636 | 41 | 6 | 5 | 5 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 392,702 | 132 | 175 | 34 | 1 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 255,941 | 16 | 14 | 2 | 2 |
| [vLLM](https://github.com/vllm-project/vllm) | 94,885 | 32 | 6 | 25 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 37,577 | 17 | 4 | 61 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 131,948 | 13 | 14 | 21 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 184,214 | 5 | 3 | 3 | 1 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 61,753 | 27 | 17 | 46 | 4 |
| [Unsloth](https://github.com/unslothai/unsloth) | 78,378 | 17 | 19 | 128 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,157 | 7 | 4 | 10 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,242 | 26 | 4 | 3 | 0 |

---

## ✨ Highlights

- **Claude Code** released versions [v2.1.307](https://github.com/anthropics/claude-code/releases/tag/v2.1.307) and [v2.1.306](https://github.com/anthropics/claude-code/releases/tag/v2.1.306).
- **OpenAI Codex** released version [rust-v0.164.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.164.0-alpha.10).
- **LiteLLM** released version [v1.106.2](https://github.com/BerriAI/litellm/releases/tag/v1.106.2).
- **OpenAI Codex** had a significant new issue reported: [macOS app 26.1016.51333: new chats fail on first message](https://github.com/openai/codex/issues/55744) with 62 comments.
- **OpenClaw** reported a high-impact new issue: [Update failure: gateway-recovery-verification (2026.10.5)](https://github.com/openclaw/openclaw/issues/179183) which generated 6 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 152,757 · **Open issues:** 15,560 · **Last push:** 3h ago

On October 22, 2026, Claude Code released version 2.1.307, adding the `/claude-api api-version` command to move the API to version 2026-10-21 and introducing the `claude_code.safety_event` OpenTelemetry event for tracking safety-related occurrences during tool calls. Additionally, it addressed model-not-found errors linked to the `CLAUDE_CODE_DISABLE_1M_CONTEXT` setting and fixed session reporting issues from version 2.1.306. Among the new issues, the bug report #104089 stands out, highlighting that a yellow “needs input” dot incorrectly appears in all sessions where Claude spoke, including those that finished. Overall, today's updates focused on enhancing functionality and addressing user-reported errors, reflecting ongoing improvements in the AI framework.

#### 🚀 New Releases
- [v2.1.307](https://github.com/anthropics/claude-code/releases/tag/v2.1.307) v2.1.307
- [v2.1.306](https://github.com/anthropics/claude-code/releases/tag/v2.1.306) v2.1.306

#### 🐛 New Issues
- [#104089](https://github.com/anthropics/claude-code/issues/104089) [BUG] Desktop: yellow “needs input” dot now shows on every session where Claude spoke last, including finished ones `bug` 💬1
- [#104158](https://github.com/anthropics/claude-code/issues/104158) [BUG] Unable to close the git diff window `bug` `duplicate` `api:bedrock` `platform:macos` 💬1
- [#104165](https://github.com/anthropics/claude-code/issues/104165) [MODEL] Edited a schedule after reading that the owner had given it to another session, guessing the words meant any session `bug` `area:model`
- [#104164](https://github.com/anthropics/claude-code/issues/104164) Artifact publish through a symlinked path wedges unattended sessions on an unanswerable consent dialog `bug` `platform:macos` `area:permissions`
- [#104163](https://github.com/anthropics/claude-code/issues/104163) [FEATURE] Sidebar: group projects into custom color-coded areas `enhancement` `platform:macos` `area:ui` `area:desktop`
- [#104162](https://github.com/anthropics/claude-code/issues/104162) [Bug] Claude Code ignores scope limits and "stay in scope" instructions saved to memory `bug` `platform:macos` `area:model` `memory`
- [#104161](https://github.com/anthropics/claude-code/issues/104161) [BUG] ScheduleWakeup in a headless run reports a scheduled wakeup, ends the turn, and the wakeup never fires (still present in 2.1.307) `bug` `has repro` `area:core` `area:agent-sdk`
- [#104159](https://github.com/anthropics/claude-code/issues/104159) Safety classifier blocks the final report of a long, authorized defensive security audit, and the agent keeps using tokens without warning `bug` `area:cost` `area:model` `area:security`
- [#104160](https://github.com/anthropics/claude-code/issues/104160) [BUG] Desktop sessions get nothing back from cloud sessions they start: no completion note, no reply channel `enhancement` `platform:windows` `area:agents` `area:desktop`
- [#104157](https://github.com/anthropics/claude-code/issues/104157) [BUG] Cmd+Click on file paths and links does nothing in Ghostty; Shift+Cmd+Click works `bug` `platform:macos` `area:tui`
- [#104155](https://github.com/anthropics/claude-code/issues/104155) [BUG] macOS Keychain credential never prunes mcpOAuth entries for disabled/removed plugin MCP servers; 16 KB payload exceeds `security` stdin limit and is passed via argv `bug` `has repro` `platform:macos` `area:auth`
- [#104156](https://github.com/anthropics/claude-code/issues/104156) [BUG] Bash tool commands can signal every user process: subagent script's kill(-1, SIGKILL) wiped out tmux, all other Claude sessions and the desktop `bug` `has repro` `platform:linux` `area:bash`
- [#104154](https://github.com/anthropics/claude-code/issues/104154) Remote Control (spawn mode): a session's title changes never reach claude.ai — hook sessionTitle and /rename are dropped `bug` `has repro` `area:core`
- [#104153](https://github.com/anthropics/claude-code/issues/104153) [Feature Request] Restore compaction progress/ETA indicator (optional setting) `enhancement` `platform:macos` `area:tui`
- [#104152](https://github.com/anthropics/claude-code/issues/104152) [FEATURE] Desktop: let users change the color of the "done" session dot `enhancement` `area:ui` `area:desktop`

#### 🔒 Closed Issues
- [#93336](https://github.com/anthropics/claude-code/issues/93336) [Bug] Scan terminates prematurely during file system traversal

### OpenAI Codex (`openai/codex`)

**Stars:** 130,318 · **Open issues:** 24,022 · **Last push:** <1h ago

On October 22, 2026, OpenAI Codex saw the release of several new Rust versions, including rust-v0.164.0-alpha.10 and rust-v0.163.0-alpha.11.1, which likely addressed various improvements and bug fixes. Key merged pull requests included the addition of a channel-backed cloud app-server client (#56037) and enhancements to request-scoped OAuth credentials (#56036), which could improve security and user session management. Notably, a persistent issue was reported with the macOS app version 26.1016.51333, where new chats fail on the first message due to a serialization error (#55744), highlighting ongoing challenges in the user experience.

#### 🚀 New Releases
- [rust-v0.164.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.164.0-alpha.9) 0.164.0-alpha.9
- [rust-v0.164.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.164.0-alpha.10) 0.164.0-alpha.10
- [rust-v0.163.0-alpha.11.1](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.11.1) 0.163.0-alpha.11.1

#### ✅ Merged PRs
- [#56037](https://github.com/openai/codex/pull/56037) Add a channel-backed cloud app-server client
- [#56036](https://github.com/openai/codex/pull/56036) Add request-scoped OAuth credentials and session lifecycle APIs
- [#56033](https://github.com/openai/codex/pull/56033) Enable the Bedrock setup wizard by default
- [#56032](https://github.com/openai/codex/pull/56032) Fix entrypoint lookup in package debug-symbol smoke tests
- [#56031](https://github.com/openai/codex/pull/56031) Support client Responses API metadata in `thread/sample`
- [#56024](https://github.com/openai/codex/pull/56024) Limit decoded HTTP/3 response headers in the TCP tunnel
- [#56023](https://github.com/openai/codex/pull/56023) Group Bedrock API key entry with other AWS sign-in methods
- [#56022](https://github.com/openai/codex/pull/56022) Preserve config overrides across CLI subcommand boundaries
- [#56021](https://github.com/openai/codex/pull/56021) Keep slash command prefixes in editable composer text
- [#56020](https://github.com/openai/codex/pull/56020) Allow thread sampling after failed or interrupted turns
- [#56018](https://github.com/openai/codex/pull/56018) Avoid nested CLI startup in the MCP OAuth persistence test
- [#56011](https://github.com/openai/codex/pull/56011) Keep rollout trace terminal sessions distinct when process IDs are reused
- [#56008](https://github.com/openai/codex/pull/56008) Add a critical-path timing recorder for direct tool calls
- [#56007](https://github.com/openai/codex/pull/56007) Pause Tokio time in the reused Guardian session test
- [#56006](https://github.com/openai/codex/pull/56006) Assert shell tool overlap directly in the parallelism test
- [#56003](https://github.com/openai/codex/pull/56003) Scope MITM credential substitution to trusted origins and placeholders
- [#56001](https://github.com/openai/codex/pull/56001) Support confidential OAuth clients for enterprise-managed MCP auth
- [#56000](https://github.com/openai/codex/pull/56000) Retry proxy CONNECT challenges with Windows authentication
- [#55994](https://github.com/openai/codex/pull/55994) Add a Windows proxy authentication tunnel helper
- [#55993](https://github.com/openai/codex/pull/55993) Preserve per-execution trace context in code-mode stdio callbacks
- [#55991](https://github.com/openai/codex/pull/55991) Avoid double-counting retained reasoning in token usage
- [#55987](https://github.com/openai/codex/pull/55987) Refresh remote exec-server credentials after unauthorized responses
- [#55978](https://github.com/openai/codex/pull/55978) Route SQLite logs to an explicitly configured `log_dir`
- [#55975](https://github.com/openai/codex/pull/55975) Add an experimental command to migrate NFS databases to DELETE mode
- [#55973](https://github.com/openai/codex/pull/55973) Allow consumers to select message-board tools
- [#55971](https://github.com/openai/codex/pull/55971) Add storage namespaces for local message boards
- [#55970](https://github.com/openai/codex/pull/55970) Extract shared message-board code into `codex-message-board`
- [#55969](https://github.com/openai/codex/pull/55969) Drain WebSocket responses on mailbox preemption
- [#55968](https://github.com/openai/codex/pull/55968) Back off failed cloud skill and plugin catalog refreshes
- [#55965](https://github.com/openai/codex/pull/55965) Add managed Desktop workspace storage requirements
- [#55958](https://github.com/openai/codex/pull/55958) Preserve provider model catalogs when refreshes fail
- [#55957](https://github.com/openai/codex/pull/55957) Refresh cloud plugin and skill catalogs after mid-turn auth changes
- [#55954](https://github.com/openai/codex/pull/55954) Separate retained instruction collection from budget policy
- [#55946](https://github.com/openai/codex/pull/55946) Bound remote installed-plugin inventory pagination
- [#55940](https://github.com/openai/codex/pull/55940) Add local diagnostic ZIP exports to the app server
- [#55923](https://github.com/openai/codex/pull/55923) Preserve thread model settings across resume and revert
- [#55913](https://github.com/openai/codex/pull/55913) Skip conversation scoring superseded by newer scores and history
- [#55883](https://github.com/openai/codex/pull/55883) Expand enterprise MCP authorization lifecycle test coverage
- [#55859](https://github.com/openai/codex/pull/55859) Fix enterprise MCP credential selection and reauthentication
- [#55856](https://github.com/openai/codex/pull/55856) Bound managed app-server and updater stderr logging
- [#55848](https://github.com/openai/codex/pull/55848) Pause relay test time while inspecting handshake diagnostics
- [#55847](https://github.com/openai/codex/pull/55847) Bound retained turn analytics and clean up closed threads
- [#55846](https://github.com/openai/codex/pull/55846) Measure Guardian review latency once with a monotonic clock
- [#55804](https://github.com/openai/codex/pull/55804) Add a critical-path utility for exclusive duration attribution
- [#55733](https://github.com/openai/codex/pull/55733) Box session metadata and compaction payloads in `RolloutItem`

#### 🐛 New Issues
- [#55744](https://github.com/openai/codex/issues/55744) macOS app 26.1016.51333: new chats fail on first message with Cannot serialize value (couldn't stringify value) `bug` `app` `session` 💬62
- [#55795](https://github.com/openai/codex/issues/55795) [Windows] Dots entry disappears after updating to 26.1016.51333; reinstall and Ctrl+. do not restore it `bug` `windows-os` `app` `dots` 💬11
- [#55827](https://github.com/openai/codex/issues/55827) [Windows] New Worktree chats fail with Cannot serialize value; Local mode works `bug` `windows-os` `app` 💬7
- [#55805](https://github.com/openai/codex/issues/55805) Intermittent Codex Desktop HTTP 429s with 88-90% weekly allowance remaining and 155-288 second retry waits `bug` `windows-os` `rate-limits` `app` 💬3
- [#55900](https://github.com/openai/codex/issues/55900) Persistent intermittent "Selected model is at capacity" (server_overloaded) for ~1 month — model-agnostic, Pro 20x with usage remaining `bug` `app` `connectivity` 💬2
- [#56030](https://github.com/openai/codex/issues/56030) ‘’This response couldn’t load‘’ in ChatGPT model `bug` `app` 💬2
- [#56034](https://github.com/openai/codex/issues/56034) Browser auto-review rejects explicitly authorized access and treats restoring Chrome as a bypass `bug` `app` `safety-check` `browser` 💬1
- [#56029](https://github.com/openai/codex/issues/56029) Environment publishing hangs on startup `bug` `windows-os` `app` 💬1
- [#56028](https://github.com/openai/codex/issues/56028) Windows Browser Use: per-session origin denial persists despite Always allow and full app restart `bug` `windows-os` `app` `session` 💬1
- [#56027](https://github.com/openai/codex/issues/56027) Codex/Work blocked after 7m17s despite refreshed 100% 5-hour allowance; context indicator missing in one thread `bug` `rate-limits` `context` 💬1
- [#56026](https://github.com/openai/codex/issues/56026) [macOS Intel / 26.1013] Fantastical MCP helpers accumulate; new helpers launch after runtime disable `bug` `mcp` `app` `config` 💬1
- [#56025](https://github.com/openai/codex/issues/56025) Some tools are temporarily unavailable / The immediate blocker is workbook editing `bug` `tool-calls` `app` 💬1
- [#56017](https://github.com/openai/codex/issues/56017) Codex Desktop: new chats persist GPT-5.5-derived CLI base instructions before the first GPT-6.1 Sol turn `bug` `app` `session` 💬1
- [#56019](https://github.com/openai/codex/issues/56019) Dots can create cloud tasks and receive completion notifications, but reading and continuing them consistently returns TaskComputerNotAuthorizedError `bug` `codex-web` `safety-check` `dots` 💬1
- [#56035](https://github.com/openai/codex/issues/56035) macOS: dictation unavailable after update with a custom provider forwarding requests to OpenAI `bug` `custom-model` `app`
- [#56016](https://github.com/openai/codex/issues/56016) [macOS][Fast mode] Codex remains very slow and repeatedly disconnects with 503 errors `bug` `app` `connectivity` `performance`
- [#56014](https://github.com/openai/codex/issues/56014) [Dots][Voice] Completed result updates to an active call fail with TaskComputerNotAuthorizedError `bug` `dots`
- [#56013](https://github.com/openai/codex/issues/56013) Code Mode loses nested MCP input types above the schema budget, and expanded budgets still omit examples and constraints `bug` `extension` `mcp`
- [#56012](https://github.com/openai/codex/issues/56012) [macOS] Connected task Library upload fails: "Library prepare_uploads is not available" `bug` `tool-calls` `app`

#### 🔒 Closed Issues
- [#54923](https://github.com/openai/codex/issues/54923) [macOS][26.1013.40934] Your dot missing and workspace settings blocked; DeviceCheck fails with UCRT unavailable
- [#33227](https://github.com/openai/codex/issues/33227) Explicitly allowlisted loopback target still requires allow_local_binding

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 107,493 · **Open issues:** 747 · **Last push:** <1h ago

On October 21, 2026, Gemini CLI released version v0.67.0-nightly.20261021.gd00859d6b, featuring significant updates such as migrating gsutil usage to gcloud storage, preserving user-level ~/.gitconfig in shell and git environments, and preventing false positive matches in authentication error handling. Key merged pull requests included fixes for respecting read-only files in the atomic `writeTextFile` function, adhering to RFC 9110 token rules for custom headers, and improvements to the A2A SDK route registration by mounting express.json() early. Additionally, a new feature was introduced that allows the IDE companion to bridge into container sandboxes over exec stdio. There were no new issues reported within the last 24 hours, indicating a stable day for the project.

#### 🚀 New Releases
- [v0.67.0-nightly.20261021.gd00859d6b](https://github.com/google-gemini/gemini-cli/releases/tag/v0.67.0-nightly.20261021.gd00859d6b) Release v0.67.0-nightly.20261021.gd00859d6b

#### ✅ Merged PRs
- [#29749](https://github.com/google-gemini/gemini-cli/pull/29749) fix(core): respect read-only files and hard links in atomic writeTextFile
- [#29865](https://github.com/google-gemini/gemini-cli/pull/29865) fix(core): adhere to RFC 9110 token rules when splitting custom headers
- [#29850](https://github.com/google-gemini/gemini-cli/pull/29850) fix(a2a-server): mount express.json() before A2A SDK route registration
- [#29833](https://github.com/google-gemini/gemini-cli/pull/29833) fix(core): scope untrusted flag checks to external output and remember approved flags
- [#29847](https://github.com/google-gemini/gemini-cli/pull/29847) fix(core): prevent duplicate agent loading when workspace is home directory (#27692)
- [#29848](https://github.com/google-gemini/gemini-cli/pull/29848) fix(ide): exclude IDE settings and GEMINI.md files from open file con text
- [#29858](https://github.com/google-gemini/gemini-cli/pull/29858) feat(cli): bridge the IDE companion into container sandboxes over exec stdio
- [#29852](https://github.com/google-gemini/gemini-cli/pull/29852) Changelog for v0.66.0-preview.0

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,287 · **Open issues:** 2,242 · **Last push:** 7h ago

On October 21, 2026, GitHub Copilot CLI released versions 1.0.102 and 1.0.102-1, introducing key changes such as improved management for Auto model selection during prompt mode operations and refined handling of subagent permissions, which now honors custom approvals and eliminates redundant prompts. Additionally, version 1.0.102-0 enhanced network proxy configurations and resolved issues related to plugin sources and terminal command completions. No significant pull requests were merged, but several new issues were reported, including issue #5219, which describes a session-wedged problem due to a task subagent defaulting to limited model capabilities, leading to failures in processing user requests.

#### 🚀 New Releases
- [v1.0.102](https://github.com/github/copilot-cli/releases/tag/v1.0.102) 1.0.102
- [v1.0.102-1](https://github.com/github/copilot-cli/releases/tag/v1.0.102-1) 1.0.102-1
- [v1.0.102-0](https://github.com/github/copilot-cli/releases/tag/v1.0.102-0) 1.0.102-0

#### 🐛 New Issues
- [#5219](https://github.com/github/copilot-cli/issues/5219) Session wedged: task subagent with unknown model id falls back to 128k default caps and fails the whole turn with 'Request exceeds the model's prompt budget' `triage` 💬1
- [#5216](https://github.com/github/copilot-cli/issues/5216) https://github.com/google/private-compute-services.git `triage` `invalid` 💬1
- [#5224](https://github.com/github/copilot-cli/issues/5224) Non-PTY interactive build spins indefinitely and WSL process tree survives editor restart `triage`
- [#5223](https://github.com/github/copilot-cli/issues/5223) Interactive autopilot stops after 600s while a background subagent is still running (regression in 1.0.102) `triage`
- [#5222](https://github.com/github/copilot-cli/issues/5222) Startup reports disabled MCP servers as “blocked by policy” and repeats the warnings `triage`
- [#5221](https://github.com/github/copilot-cli/issues/5221) Accessibility Issue & Regression: Home & End keys on the Numpad do not work. `triage`
- [#5220](https://github.com/github/copilot-cli/issues/5220) Option for 1-hour prompt cache TTL for Claude models (5-minute cache expires during normal interactive use) `triage`
- [#5218](https://github.com/github/copilot-cli/issues/5218) Strange "Somebody else is owning the clipboard" message, reopen #3172 `triage`

#### 🔒 Closed Issues
- [#4941](https://github.com/github/copilot-cli/issues/4941) reasoning_effort binding to claude-haiku-4.5 model fails on sub-agent invocation
- [#1301](https://github.com/github/copilot-cli/issues/1301) Permission denied error on worktree index.lock when committing from VS Code (Electron sandbox issue with git)
- [#5216](https://github.com/github/copilot-cli/issues/5216) https://github.com/google/private-compute-services.git
- [#5089](https://github.com/github/copilot-cli/issues/5089) `copilot --acp` ignores `--sandbox` and `sandbox.enabled`; shell commands run unsandboxed
- [#4776](https://github.com/github/copilot-cli/issues/4776) Browser canvas WebView closes when loading a JavaScript-heavy localhost page

### OpenCode (`anomalyco/opencode`)

**Stars:** 219,693 · **Open issues:** 3,700 · **Last push:** <1h ago

In a routine maintenance day for OpenCode, no new releases were recorded; however, several important merges included a refactor to streamline RPC and project reconstructions (#57948) and improvements in session inbox decoding (#57946). Notably, fixes were made to prevent issues with tab shortcuts and enhance the side tab drop indicator (#57972, #57935). A significant new issue reported involved the "Delegated subagent write silently denied on 'ask' permission," which affects the transition from v1 to v2 (#57603), highlighting a critical area needing attention as users migrate to the latest version.

#### ✅ Merged PRs
- [#57948](https://github.com/anomalyco/opencode/pull/57948) refactor(core): drop redundant reconstructions in rpc and project
- [#57961](https://github.com/anomalyco/opencode/pull/57961) refactor(core): replace unused runtime input schemas with types in filesystem and permission
- [#57945](https://github.com/anomalyco/opencode/pull/57945) fix(core): validate compaction keepID with SessionMessage.ID schema
- [#57946](https://github.com/anomalyco/opencode/pull/57946) refactor(core): avoid redundant payload decoding in session inbox and prompt
- [#57972](https://github.com/anomalyco/opencode/pull/57972) fix(app): keep the side tab drop indicator inside the strip
- [#57935](https://github.com/anomalyco/opencode/pull/57935) fix(app): scope tab shortcuts to the focused panel and calm the side tab strip
- [#57963](https://github.com/anomalyco/opencode/pull/57963) fix(app): list only files under Recently closed
- [#57893](https://github.com/anomalyco/opencode/pull/57893) feat(app): try the CSS orb activity chip behind an experiment

#### 🐛 New Issues
- [#57603](https://github.com/anomalyco/opencode/issues/57603) Delegated subagent write silently denied on "ask" permission (works on v1, broken on v2) 💬3
- [#57851](https://github.com/anomalyco/opencode/issues/57851) Go: `gemini-4-argon-contributor` returns 429 "Endpoint is unavailable" on every request, while other Go models succeed `pending close` `triaging` 💬3
- [#57859](https://github.com/anomalyco/opencode/issues/57859) HTTP 429 "Policy budget exceeded" from POST /zen/v1/systemone (jev-1.13-free) `pending close` `triaging` 💬3
- [#57975](https://github.com/anomalyco/opencode/issues/57975) Unified Real-Time Usage Dashboard for All AI Models `pending close` `triaging` 💬2
- [#57971](https://github.com/anomalyco/opencode/issues/57971) Markdown renderer externalizes in-document anchors (`target="_blank"`) and emits headings without ids, so TOC links never scroll 💬2
- [#57955](https://github.com/anomalyco/opencode/issues/57955) core: github-copilot shows zero models on auto-only accounts (model_picker_enabled false for every model) `pending close` `triaging` 💬2
- [#57931](https://github.com/anomalyco/opencode/issues/57931) Expired free model (GLM) breaks client catalog and blocks access to other active free models (Mimo) `triaging` 💬2
- [#57911](https://github.com/anomalyco/opencode/issues/57911) Opencde Github Actions Bot Cannot Install `reproduced` 💬2
- [#57907](https://github.com/anomalyco/opencode/issues/57907) win32: console window appears for every child process spawned by background service `pending close` `triaging` 💬2
- [#57974](https://github.com/anomalyco/opencode/issues/57974) [FEATURE]: Please show double-confirm dialog for undo button in mobile 💬1
- [#57973](https://github.com/anomalyco/opencode/issues/57973) Unable to switch agent (plan<->build) in webpage in mobile `pending close` `triaging` 💬1
- [#57970](https://github.com/anomalyco/opencode/issues/57970) tui: subagent task row does not show agent name or model 💬1
- [#57968](https://github.com/anomalyco/opencode/issues/57968) مشكلة كبيرة `triaging` 💬1
- [#57967](https://github.com/anomalyco/opencode/issues/57967) provider: opencode-go/gemini-4-argon-contributor always fails with "Upstream request failed: Endpoint is unavailable" `pending close` `triaging` 💬1
- [#57964](https://github.com/anomalyco/opencode/issues/57964) FYI: 6 public opencode tool-call failure cases packaged as free regression tests 💬1
- [#57957](https://github.com/anomalyco/opencode/issues/57957) docs: the /docs page still documents seven v1 commands that do not exist in v2 `reproduced` 💬1
- [#57954](https://github.com/anomalyco/opencode/issues/57954) test `triaging` 💬1
- [#57941](https://github.com/anomalyco/opencode/issues/57941) MONITOREO MULTIVIEW `triaging` 💬1
- [#57939](https://github.com/anomalyco/opencode/issues/57939) [BUG]: /thinking command changes model reasoning variant instead of toggling visibility `pending close` `triaging` 💬1
- [#57938](https://github.com/anomalyco/opencode/issues/57938) [FEATURE]: Allow TUI plugins to extend built-in dialogs and search 💬1
- [#57936](https://github.com/anomalyco/opencode/issues/57936) models: OpenRouter GPT Sol alias falls back to 200k context limit in V2 `reproduced` 💬1
- [#57932](https://github.com/anomalyco/opencode/issues/57932) config: share and enterprise are accepted, normalised, and read by nothing `reproduced` 💬1
- [#57929](https://github.com/anomalyco/opencode/issues/57929) tui: option to show per-message timestamps in the session transcript `pending close` `triaging` 💬1
- [#57920](https://github.com/anomalyco/opencode/issues/57920) web: session review pane never refreshes documents written by the assistant `pending close` `triaging` 💬1
- [#57914](https://github.com/anomalyco/opencode/issues/57914) Feature request: Add environment variable validation on startup 💬1
- [#57902](https://github.com/anomalyco/opencode/issues/57902) ACP: MCP servers from session/new are lost after a location idle eviction `reproduced` 💬1

#### 🔒 Closed Issues
- [#52227](https://github.com/anomalyco/opencode/issues/52227) Go API key is not available in the new v2 Console
- [#56005](https://github.com/anomalyco/opencode/issues/56005) Failed to launch after updated to 2.0.30
- [#55918](https://github.com/anomalyco/opencode/issues/55918) Windows CLI: WSL2 镜像网络预留范围内的 45278 导致服务启动失败，端口查询无占用记录
- [#52022](https://github.com/anomalyco/opencode/issues/52022) [FEATURE]: AGENTS.md: state the linked-issue rule for fix/chore/test PRs; scope the import rules
- [#57580](https://github.com/anomalyco/opencode/issues/57580) Bug: catalog refresh is scoped to the first workspace, leaving other workspaces stale
- [#56902](https://github.com/anomalyco/opencode/issues/56902) cli: models added to a provider's config are not listed by `opencode models` until the service is restarted
- [#56835](https://github.com/anomalyco/opencode/issues/56835) Config: deprecated `autoupdate: true` migrates to `update: "auto"` (auto-install), but the schema documents `true` as equivalent to `notify`
- [#56885](https://github.com/anomalyco/opencode/issues/56885) [Bug] TUI startup can hang ~6 min on "Loading plugins...": client-side plugin stage=setup stalls on an external connection; reconciliation frozen ~360 s
- [#57954](https://github.com/anomalyco/opencode/issues/57954) test
- [#57914](https://github.com/anomalyco/opencode/issues/57914) Feature request: Add environment variable validation on startup
- [#50183](https://github.com/anomalyco/opencode/issues/50183) Legacy apply_patch permission rules stop matching after config migration

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 28,636 · **Open issues:** 1,982 · **Last push:** <1h ago

On October 22, 2026, Qwen Code released several updates, including the SDK TypeScript v0.1.22 and desktop v0.26.0, which both feature support for session-targeted Skill and Extension refreshes. The new CLI version 0.26.0 also rolled out without any known breaking changes. Notable merged features included the addition of durable manual context compression in the managed-agent and improvements to the web-shell's navigation. A significant hot new issue reported is the memory leak in the VS Code companion, which causes the daemon heap to grow indefinitely and eventually lead to an out-of-memory error.

#### 🚀 New Releases
- [sdk-typescript-v0.1.22](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.22) SDK TypeScript Release v0.1.22
- [v0.26.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.26.0) Release v0.26.0
- [v0.25.3-nightly.20261021.79242671bb](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.3-nightly.20261021.79242671bb) Release v0.25.3-nightly.20261021.79242671bb
- [desktop-v0.26.0](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.26.0) Qwen Code Desktop v0.26.0
- [cua-driver-rs-v0.26.0](https://github.com/QwenLM/qwen-code/releases/tag/cua-driver-rs-v0.26.0) cua-driver-rs v0.26.0

#### ✅ Merged PRs
- [#15133](https://github.com/QwenLM/qwen-code/pull/15133) test(cli): canonicalize the review git fixture so R32-2 holds under a symlinked tmpdir
- [#14964](https://github.com/QwenLM/qwen-code/pull/14964) feat(cli): align OpenTUI input, editing and status lines with Ink
- [#15104](https://github.com/QwenLM/qwen-code/pull/15104) feat(managed-agent): Add durable manual context compression
- [#15062](https://github.com/QwenLM/qwen-code/pull/15062) fix(core): pluralize the Goal token budget stop reason
- [#15061](https://github.com/QwenLM/qwen-code/pull/15061) feat(web-shell): unify daemon and managed workspace navigation

#### 🐛 New Issues
- [#14979](https://github.com/QwenLM/qwen-code/issues/14979) Improve the edit tool `priority/P2` `type/feature-request` `category/tools` `scope/file-operations` 💬4
- [#15076](https://github.com/QwenLM/qwen-code/issues/15076) Managed Agent: provide web_fetch and todo_write in Workspace Sessions `priority/P2` `type/feature-request` `category/tools` `roadmap/subagents-tools` 💬4
- [#15083](https://github.com/QwenLM/qwen-code/issues/15083) User prompt during a running background subagent executes in the subagent's context; deferred tool_call refused `priority/P2` `type/bug` `category/core` `scope/session-management` 💬4
- [#15135](https://github.com/QwenLM/qwen-code/issues/15135) web-shell E2E Smoke deterministically red after #15061: managed workspace label gained " · Managed" but managed-ssh-workspace-registration.spec.ts:130 still pins the bare text `priority/P1` `type/bug` `category/development` `scope/ci-cd` 💬3
- [#15130](https://github.com/QwenLM/qwen-code/issues/15130) Deferred finding from PR #13902: qwen/notify/session/teammate-exited retires pending approvals by name only, while PendingTeammatePermission.bindingId is populated but unused at the match site `priority/P3` `status/blocked` `category/integration` `scope/session-management` 💬3
- [#15129](https://github.com/QwenLM/qwen-code/issues/15129) permissions.deny Read(...) blocks read_file but grep_search and glob still return the denied file's content and name `priority/P1` `type/bug` `category/security` `scope/file-operations` 💬3
- [#15027](https://github.com/QwenLM/qwen-code/issues/15027) perf(memory): measure and reduce repeated legacy catalog input after stable-prefix fixes `priority/P2` `type/feature-request` `category/performance` `scope/memory` 💬3
- [#15071](https://github.com/QwenLM/qwen-code/issues/15071) VS Code companion: qwen serve daemon heap grows without bound and dies with OOM at the ~4 GB runtime cap `priority/P1` `type/bug` `category/performance` `scope/session-management` 💬3
- [#15080](https://github.com/QwenLM/qwen-code/issues/15080) Managed Agent: add a manual context compression action `priority/P2` `type/feature-request` `category/core` `scope/session-management` 💬2
- [#15134](https://github.com/QwenLM/qwen-code/issues/15134) FYI: 1 public Qwen Code tool-call failure case packaged as a free regression test `priority/P3` `category/tools` `scope/testing` 💬2
- [#15125](https://github.com/QwenLM/qwen-code/issues/15125) read_file advertises images to models that cannot read them `status/in-review` `priority/P2` `type/bug` `category/tools` 💬2
- [#15120](https://github.com/QwenLM/qwen-code/issues/15120) Deferred review findings from PR #15003: feat(ci): restore a MariaDB leg for the non-Hosted IT family `priority/P3` `type/documentation` `category/development` `scope/ci-cd` 💬2
- [#15109](https://github.com/QwenLM/qwen-code/issues/15109) Desktop client: task notifications cannot be enabled — the WebView denies notification permission for the ephemeral loopback origin `priority/P2` `type/bug` `category/ui` `need-discussion` 💬2
- [#15107](https://github.com/QwenLM/qwen-code/issues/15107) Deferred review findings from PR #15041: feat(core): attribute 千问AI平台 / QwenCloud requests with the source-config header `priority/P3` `status/blocked` `category/core` `scope/metrics` 💬2
- [#15096](https://github.com/QwenLM/qwen-code/issues/15096) Main CI failed: E2E Tests — cli/daemon-workflow-intent.test.ts > … > consumes the declaration once in primary and private-child workspace… (+4 more) `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#15088](https://github.com/QwenLM/qwen-code/issues/15088) Hosted lifecycle ITs can lose a just-admitted close claim to SessionLifecycleCoordinator's scan `priority/P3` `type/bug` `category/integration` `scope/testing` 💬2
- [#15079](https://github.com/QwenLM/qwen-code/issues/15079) Managed Agent: manage MCP servers at runtime without recreating a Session `priority/P2` `type/feature-request` `category/tools` `scope/session-management` 💬2
- [#15084](https://github.com/QwenLM/qwen-code/issues/15084) tracking(managed-agent): close user-facing gaps against the legacy daemon `priority/P2` `type/feature-request` `category/core` `scope/session-management` 💬2
- [#15075](https://github.com/QwenLM/qwen-code/issues/15075) Managed Agent: add a capability parity matrix against the legacy daemon `priority/P3` `type/feature-request` `category/development` `scope/ci-cd` 💬2
- [#15082](https://github.com/QwenLM/qwen-code/issues/15082) Managed Agent: define a capacity and idle-reclamation model `priority/P2` `type/feature-request` `category/core` `scope/memory-usage` 💬2
- [#15077](https://github.com/QwenLM/qwen-code/issues/15077) Managed Agent: list archived Sessions and search by title `priority/P2` `type/feature-request` `category/core` `scope/session-management` 💬2
- [#15078](https://github.com/QwenLM/qwen-code/issues/15078) Managed Agent: support closing, archiving and deleting public Shell Sessions `priority/P2` `type/feature-request` `category/core` `scope/session-management` 💬2
- [#15081](https://github.com/QwenLM/qwen-code/issues/15081) Managed Agent: confine Workspace file and process access `priority/P2` `type/feature-request` `category/security` `scope/shell` 💬2
- [#15074](https://github.com/QwenLM/qwen-code/issues/15074) test(managed-agent): #15046 follow-ups — sync the D7-2 acceptance criterion bilingually, and pin the runtime park's retry_after by value `priority/P3` `type/documentation` `category/development` `scope/testing` 💬2
- [#15132](https://github.com/QwenLM/qwen-code/issues/15132) Main CI failed: SDK Java — HostedShellLifecycleRecoveryIT.publicDeletionRecoversOriginalResources(String)[2] `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#15117](https://github.com/QwenLM/qwen-code/issues/15117) Main CI failed: Managed Agent gate on e00767c8e3cb `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#15112](https://github.com/QwenLM/qwen-code/issues/15112) Main CI failed: Managed Agent gate on 9efdca76d39a `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#15114](https://github.com/QwenLM/qwen-code/issues/15114) Main CI failed: Managed Agent gate on 9c94ae1687f1 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#15111](https://github.com/QwenLM/qwen-code/issues/15111) Main CI failed: Managed Agent gate on 76bdc7190d2e `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#15115](https://github.com/QwenLM/qwen-code/issues/15115) Main CI failed: Managed Agent gate on e63a0bfc23d2 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#15113](https://github.com/QwenLM/qwen-code/issues/15113) Main CI failed: Managed Agent gate on 699104d448b7 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#15110](https://github.com/QwenLM/qwen-code/issues/15110) Main CI failed: Managed Agent gate on 3a8dcfa9855b `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#15108](https://github.com/QwenLM/qwen-code/issues/15108) Main CI failed: Managed Agent gate on 86875ee18b9d `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#15098](https://github.com/QwenLM/qwen-code/issues/15098) Main CI failed: Managed Agent gate on 6942c394fd15 `type/bug` `status/ready-for-agent` `autofix/skip` `autofix/approved` 💬1
- [#15106](https://github.com/QwenLM/qwen-code/issues/15106) Main CI failed: Managed Agent gate on abb75ee3f346 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#15099](https://github.com/QwenLM/qwen-code/issues/15099) Main CI failed: Managed Agent gate on f04ff0a2dc33 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#15097](https://github.com/QwenLM/qwen-code/issues/15097) Main CI failed: Managed Agent gate — HostedHarnessClientTest.anIdleAbortLandsInsideThePublishedWindow `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#15092](https://github.com/QwenLM/qwen-code/issues/15092) Main CI failed: Managed Agent gate on 3fd6d083fb03 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#15093](https://github.com/QwenLM/qwen-code/issues/15093) Main CI failed: Qwen Code CI — src/serve/hosted-workspace-tool-turn.test.ts > keeps who is asked in 'default' mode for call 1 (PreToolUse 'a… `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#15091](https://github.com/QwenLM/qwen-code/issues/15091) Release Failed for v0.26.0 on 2026-10-21 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#15087](https://github.com/QwenLM/qwen-code/issues/15087) Release Failed for v0.26.0 on 2026-10-21 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1

#### 🔒 Closed Issues
- [#13085](https://github.com/QwenLM/qwen-code/issues/13085) Deferred review findings from PR #13013: test(integration): disable managed auto-memory by default in E2E harnesses (#130
- [#15080](https://github.com/QwenLM/qwen-code/issues/15080) Managed Agent: add a manual context compression action
- [#14807](https://github.com/QwenLM/qwen-code/issues/14807) test(ci): fail-closed no-AK gate membership and collection-resolution guard
- [#15096](https://github.com/QwenLM/qwen-code/issues/15096) Main CI failed: E2E Tests — cli/daemon-workflow-intent.test.ts > … > consumes the declaration once in primary and private-child workspace… (+4 more)
- [#11136](https://github.com/QwenLM/qwen-code/issues/11136) Deferred review findings from PR #11127
- [#11125](https://github.com/QwenLM/qwen-code/issues/11125) Deferred review findings from PR #10906

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

**Stars:** 392,702 · **Open issues:** 9,503 · **Last push:** <1h ago

On October 22, 2026, OpenClaw released version 2026.10.10-beta.3, which focused on improving Windows reliability through fresh state initialization and better handling of Gateway startup processes, along with enhancements to app update notifications. Key merged pull requests included a fix to address CI issues with plan changes (#180097), a feature to prepare existing PRs from chats (#178756), and an important fix for ensuring main GC metrics are retained under series saturation (#180103). Notably, several bugs were reported, including a significant issue where the control UI failed to handle pasted text longer than 1,000 characters effectively (#179676), which could hinder user experience during interactions.

#### 🚀 New Releases
- [v2026.10.10-beta.3](https://github.com/openclaw/openclaw/releases/tag/v2026.10.10-beta.3) openclaw 2026.10.10-beta.3

#### ✅ Merged PRs
- [#180097](https://github.com/openclaw/openclaw/pull/180097) fix: changed-plan CI fails after serial row coalescing
- [#178756](https://github.com/openclaw/openclaw/pull/178756) feat: prepare existing PRs from ordinary chats
- [#179918](https://github.com/openclaw/openclaw/pull/179918) refactor: give agent skills reset optimistic feedback
- [#180103](https://github.com/openclaw/openclaw/pull/180103) fix(prometheus): retain main GC metrics under series saturation
- [#180076](https://github.com/openclaw/openclaw/pull/180076) test(agents,plugins,channels): remove low-value tests (batch d417)
- [#179903](https://github.com/openclaw/openclaw/pull/179903) ClawRouter: use OpenAI hosted web search when the catalog admits it, and keep its source links
- [#179922](https://github.com/openclaw/openclaw/pull/179922) fix(ui): Gateway settings row misaligned in the Gateway switcher
- [#179914](https://github.com/openclaw/openclaw/pull/179914) fix(doctor): preserve Codex host compaction model settings
- [#179835](https://github.com/openclaw/openclaw/pull/179835) refactor(channels): trust canonical private plugin facts
- [#179949](https://github.com/openclaw/openclaw/pull/179949) fix(plugins): tolerate ctime-only stat drift in native companion admission
- [#180104](https://github.com/openclaw/openclaw/pull/180104) chore(ui): refresh control ui locales
- [#180048](https://github.com/openclaw/openclaw/pull/180048) feat(ui): expand Mermaid diagrams with a click
- [#180068](https://github.com/openclaw/openclaw/pull/180068) test(gateway,agents,ui,plugins): remove low-value tests (batch d416)
- [#180019](https://github.com/openclaw/openclaw/pull/180019) fix: keep earlier file links readable after transcript rewrites
- [#179958](https://github.com/openclaw/openclaw/pull/179958) refactor(ui): derive palette search readiness from its admitted read
- [#180079](https://github.com/openclaw/openclaw/pull/180079) refactor(automations): route plugin follow-ups through session receipts
- [#180095](https://github.com/openclaw/openclaw/pull/180095) fix: keep ACP auth fixtures within import boundary
- [#180072](https://github.com/openclaw/openclaw/pull/180072) refactor: keep single-consumer preparation with its owners
- [#180087](https://github.com/openclaw/openclaw/pull/180087) fix(ui): link menu shortcuts sit too far from the right edge
- [#178816](https://github.com/openclaw/openclaw/pull/178816) improve: make official support discoverable across OpenClaw
- [#180089](https://github.com/openclaw/openclaw/pull/180089) test: remove orphan session profile helper
- [#180002](https://github.com/openclaw/openclaw/pull/180002) test(core,plugins): remove low-value tests (batch d413)
- [#179969](https://github.com/openclaw/openclaw/pull/179969) fix(update): preserve full backup fallback for legacy STAT4
- [#180047](https://github.com/openclaw/openclaw/pull/180047) fix(update): retain SQLite wait allowance through finalization
- [#179983](https://github.com/openclaw/openclaw/pull/179983) fix(update): accept unchanged Termux plugins after hard-link capture
- [#179787](https://github.com/openclaw/openclaw/pull/179787) fix(ui): Claw card names break one word per line on narrow cards
- [#180082](https://github.com/openclaw/openclaw/pull/180082) fix: verify replay-safe transcript conflict errors
- [#179109](https://github.com/openclaw/openclaw/pull/179109) fix(release): namespace candidate state by target
- [#177855](https://github.com/openclaw/openclaw/pull/177855) feat: restrict Gateway-local terminals and automation host execution
- [#180044](https://github.com/openclaw/openclaw/pull/180044) test(agents,gateway,plugins): remove low-value tests (batch d415)
- [#180067](https://github.com/openclaw/openclaw/pull/180067) perf(sessions): filter archived rows in the list pass
- [#180080](https://github.com/openclaw/openclaw/pull/180080) fix: keep documented benchmarks in dead-code checks
- [#169921](https://github.com/openclaw/openclaw/pull/169921) fix(agents): Control UI reports a failed turn when a plugin silently claims it with before_agent_reply
- [#179792](https://github.com/openclaw/openclaw/pull/179792) fix(ui): put modal primary actions on the right, Cancel on the left

#### 🐛 New Issues
- [#179183](https://github.com/openclaw/openclaw/issues/179183) Update failure: gateway-recovery-verification (2026.10.5) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `P0` 💬6
- [#179676](https://github.com/openclaw/openclaw/issues/179676) [Bug]: Control UI pasted text (>1,000 chars) only reaches the model on the turn it is sent; later turns lose it `P2` `clawsweeper:needs-info` `impact:session-state` `issue-rating: 🦐 gold shrimp` 💬5
- [#179481](https://github.com/openclaw/openclaw/issues/179481) [Bug]: doctor --fix refuses `transcript-directives` while the gateway is running and blocks every later migration step — no online repair path `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬4
- [#179769](https://github.com/openclaw/openclaw/issues/179769) Update failure: git-runtime-backup-retention (2026.10.5) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬4
- [#179665](https://github.com/openclaw/openclaw/issues/179665) [Bug]: web_search never uses Brave: a search-only provider plugin is never loaded in the agent runtime `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬3
- [#179411](https://github.com/openclaw/openclaw/issues/179411) [Bug]: `models list --refresh` without a Gateway ignores SecretRef credentials that `infer model run --local` resolves `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#179923](https://github.com/openclaw/openclaw/issues/179923) [Bug]: Plugins with native binaries fail to load on Windows devices with Endpoint DLP ("Native plugin companion changed before admission completed") `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#179813](https://github.com/openclaw/openclaw/issues/179813) [Bug]: Windows Store migration rejects Inno DisplayVersion 2026.7.1-2 `bug` `bug:behavior` `P0` `impact:ux-release-blocker` 💬2
- [#179761](https://github.com/openclaw/openclaw/issues/179761) [Feature]: Keep a text trace of images that age out of the 3-turn history window (or make the window configurable) `P2` `impact:session-state` `issue-rating: 🦪 silver shellfish` 💬2
- [#179824](https://github.com/openclaw/openclaw/issues/179824) Gateway state lock records a container-internal PID on a persistent volume, so a hard kill deadlocks startup permanently `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#179516](https://github.com/openclaw/openclaw/issues/179516) Update failure: candidate-state-snapshot (2026.10.4) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#178927](https://github.com/openclaw/openclaw/issues/178927) [Bug]: App Store iOS app never exposes native notification setup in Dashboard settings; no push.apns.register, push.test fails `impact:message-loss` `P0` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#179480](https://github.com/openclaw/openclaw/issues/179480) [Bug]: SQLite store worker OOMs at startup — cron run maintenance loads all runs into memory before pruning (512 MB hardcoded cap) `impact:crash-loop` `P0` 💬1
- [#179474](https://github.com/openclaw/openclaw/issues/179474) Update failure: candidate-doctor (2026.10.4) `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#178953](https://github.com/openclaw/openclaw/issues/178953) [Bug]: claude-cli sessions reset with reason=prompt-tools on every subagent completion, losing context `bug` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬2
- [#179441](https://github.com/openclaw/openclaw/issues/179441) [Bug]: Matrix tags every inbound message as CommandSource "text", so authorized senders' plain room messages become required command turns (NO_REPLY → error notice, visibleReplies ignored) `bug` `no-stale` `bug:behavior` `P1` 💬2
- [#179396](https://github.com/openclaw/openclaw/issues/179396) [Bug]: Never-executed unknown tool calls falsely veto configured model fallback after provider failure `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#179297](https://github.com/openclaw/openclaw/issues/179297) Subagent-Abschluss: State-Event-Buchung und Registry-Persistenz schlagen fehl `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#179382](https://github.com/openclaw/openclaw/issues/179382) A2A channel plugin: full A2A protocol v1.0 conformance (validated with a2a-tck) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬2
- [#179318](https://github.com/openclaw/openclaw/issues/179318) MCP tool results with isError: true are validated against outputSchema, hiding the server's error reason `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#179003](https://github.com/openclaw/openclaw/issues/179003) [Bug]: Reasoning-only turn retry reports "no visible answer" for an already-delivered reply, so the agent resends it (duplicate messages) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#178982](https://github.com/openclaw/openclaw/issues/178982) [Bug]: claude-cli sessions reset whenever turn-dependent tools such as codex_plugins appear or disappear, losing context `bug` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` 💬2
- [#178960](https://github.com/openclaw/openclaw/issues/178960) [Bug]: Windows SQLite migration blocked by normalized transcript metadata and mismatched historical headers `bug` `no-stale` `bug:crash` `P1` 💬2
- [#178937](https://github.com/openclaw/openclaw/issues/178937) [Regression 2026.10.5] Cron-wake heartbeat turn is superseded by its own exec-completion turn; systemEvent reminders are never consumed and the heartbeat re-runs every 30-80 s `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#178923](https://github.com/openclaw/openclaw/issues/178923) [Bug]: Provider-review acknowledgment replaces native thread on tool-catalog drift, then fails same-thread validation `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#179075](https://github.com/openclaw/openclaw/issues/179075) [Bug]: Android app polls models.list ~2/sec on connect, shows 'can't refresh models' despite every response succeeding (no backoff) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#179045](https://github.com/openclaw/openclaw/issues/179045) docs: clarify retained native completion recovery ownership after process loss `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:not-repro-on-main` 💬2
- [#178976](https://github.com/openclaw/openclaw/issues/178976) Update failure: reconcile:abandoned (2026.10.5) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#180086](https://github.com/openclaw/openclaw/issues/180086) DeepSeek V4.1 thinking: reasoning_content is not replayed after tool calls, causing 400 invalid_request_error `bug` `bug:behavior` `P2` `impact:auth-provider` 💬1
- [#180083](https://github.com/openclaw/openclaw/issues/180083) [Bug]: boot-md completes startup work but temporary-session cleanup fails SQLite lifecycle guard `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#180071](https://github.com/openclaw/openclaw/issues/180071) plugins: reinstalling a mixed-case plugin id ignores its lowercase-keyed settings and leaves it disabled `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#180066](https://github.com/openclaw/openclaw/issues/180066) telegram: mixed-case account keys ignore per-account groups and mentionPatterns `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#180062](https://github.com/openclaw/openclaw/issues/180062) web_search: Tavily, Firecrawl and DuckDuckGo ignore tools.web.search maxResults and timeoutSeconds `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#180070](https://github.com/openclaw/openclaw/issues/180070) Update failure: finalize:doctor (2026.9.5) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#180060](https://github.com/openclaw/openclaw/issues/180060) channels add: positional channel is silently ignored when --channel names a different channel, writing its credentials to the wrong channel `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#180054](https://github.com/openclaw/openclaw/issues/180054) dotenv: project .env can set VAULT_ADDR, VAULT_NAMESPACE, and CLAW_1PASSWORD_OP, overriding the global Vault and 1Password SecretRef settings `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#180029](https://github.com/openclaw/openclaw/issues/180029) Read-only connected-app tools for Codex plugins `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#180018](https://github.com/openclaw/openclaw/issues/180018) [Feature]: Let remote clients select all TTS auto modes `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#179999](https://github.com/openclaw/openclaw/issues/179999) [Feature]: Opt-in early concurrency admission for external message CLI invocations `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#179994](https://github.com/openclaw/openclaw/issues/179994) Bug: Dreaming settings lose uncommitted input drafts on unrelated config refresh `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#179989](https://github.com/openclaw/openclaw/issues/179989) [Bug]: Managed llama.cpp embeddings stop after Ubuntu 26.10 upgrade: llama-server needs libssl.so.3 `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#179990](https://github.com/openclaw/openclaw/issues/179990) [Bug]: Workboard store stays failed after its SQLite worker hits the 512 MB heap limit; every operation fails until gateway restart (2026.10.5) `P1` `impact:other` 💬1
- [#179006](https://github.com/openclaw/openclaw/issues/179006) Compression offer enlarges attachment cards in the chat composer `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#179979](https://github.com/openclaw/openclaw/issues/179979) [Bug]: internal claude-cli runtime faults are classified reason=unknown and trigger cross-provider model fallback `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#179968](https://github.com/openclaw/openclaw/issues/179968) [Bug]: Numeric prefixes choose the wrong Control UI chat text direction `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#179980](https://github.com/openclaw/openclaw/issues/179980) [Bug]: shared MCP OAuth credential: concurrent agents fail tool calls with a state-lease error (exclusive lease on every token read, 30 s wait) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#179964](https://github.com/openclaw/openclaw/issues/179964) [Bug]: ask_user questions from another agent's turn go back to that agent instead of the owner `clawsweeper:intake:bug` 💬1
- [#179962](https://github.com/openclaw/openclaw/issues/179962) [Bug] Usage-limit 429 is slept out in full when its message embeds a Python-style dict: the long-window check reads the redacted text `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#179957](https://github.com/openclaw/openclaw/issues/179957) [Bug] Session SQLite recover cannot coalesce missing archive paths with SHA-256-verified retained survivors (2026.10.5) `P2` `impact:session-state` 💬1
- [#179954](https://github.com/openclaw/openclaw/issues/179954) [Feature]: memory: configurable per-entry chunking paths `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#179927](https://github.com/openclaw/openclaw/issues/179927) Cron jobs with a stale future nextRunAtMs stay stuck until Gateway restart (missed slots not recovered on normal ticks) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#179910](https://github.com/openclaw/openclaw/issues/179910) [Feature]: Talk: let the voice model end the call or switch to listen-only mode by voice `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-live-repro` 💬1
- [#179888](https://github.com/openclaw/openclaw/issues/179888) [Bug]: Secret egress proxy returns 502 for hostnames longer than 64 chars (leaf cert CN exceeds X.509 limit) `P2` `impact:other` 💬1
- [#179890](https://github.com/openclaw/openclaw/issues/179890) Agents corrupt dollar amounts in messages when exec commands contain $<digit> in double quotes `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#179886](https://github.com/openclaw/openclaw/issues/179886) [Bug]: Android Talk asks for a realtime provider even with talk.realtime.mode "stt-tts"? `P1` `impact:auth-provider` `maturity:stable` `impact:ux-friction` 💬1
- [#179892](https://github.com/openclaw/openclaw/issues/179892) Codex harness reports an admitted user turn as a failed write when prompt annotation is refused `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#179822](https://github.com/openclaw/openclaw/issues/179822) diagnostics-otel: add channel, trigger, lane and fallback state to openclaw.model.call; add result size to openclaw.tool.execution `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#179870](https://github.com/openclaw/openclaw/issues/179870) [Bug]: Background exec completion in a Discord auto-thread is posted to the parent channel `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#179809](https://github.com/openclaw/openclaw/issues/179809) Update failure: package-swap (2026.9.7) `P2` `impact:ux-friction` 💬1
- [#179867](https://github.com/openclaw/openclaw/issues/179867) [Bug]: Retained Telegram progress card keeps the yielding turn's checklist after sessions_yield `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#179862](https://github.com/openclaw/openclaw/issues/179862) [Bug]: Splitting a long Telegram or Slack reply re-parses Markdown for candidate chunks whose fit cannot change `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#179562](https://github.com/openclaw/openclaw/issues/179562) [Bug]: Persisted-but-unadmitted user turn is dropped, not replayed, after a transcript-change admission race `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#179823](https://github.com/openclaw/openclaw/issues/179823) Code Mode: native call to a catalog tool (read, write, edit, process) returns a bare "Tool <name> not found" with no hint `P2` `impact:ux-friction` 💬1
- [#179498](https://github.com/openclaw/openclaw/issues/179498) [Bug]: message-only completion still changes managed Claude tool catalog after #172026 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#179764](https://github.com/openclaw/openclaw/issues/179764) [Bug]: Android Talk hides GPT-Live usage_check_failed behind generic Realtime provider error `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#179678](https://github.com/openclaw/openclaw/issues/179678) [Bug]: PixVerse and Kie video status polls skip the private-network policy without a proxy override `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#179739](https://github.com/openclaw/openclaw/issues/179739) [Feature]: Mirror session reactions onto delivered assistant replies in chat channels `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#179685](https://github.com/openclaw/openclaw/issues/179685) [Feature]: IMAP durable processing handoff and inspectable per-message outcomes `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#179698](https://github.com/openclaw/openclaw/issues/179698) [Bug]: Since 2026.10.1, isolated cron rollovers are pinned by usageFamilySessionIds, so maxDiskBytes can never reclaim cron history `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#179628](https://github.com/openclaw/openclaw/issues/179628) [Feature]: Buzz channel — support reactions natively, starting with ack reactions (messages.ackReaction) `P3` 💬1
- [#179555](https://github.com/openclaw/openclaw/issues/179555) [Bug]: A failed mcp.json write leaks a temp directory containing the resolved header credential `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#179529](https://github.com/openclaw/openclaw/issues/179529) [Feature]: Telegram per-group/topic transcript echo override without disabling audio understanding `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#179740](https://github.com/openclaw/openclaw/issues/179740) [Feature]: Preview a configured TTS persona without changing the active persona `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#179709](https://github.com/openclaw/openclaw/issues/179709) [Feature]: Attach plugin-prepared presentation to the selected ordinary final reply `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#179721](https://github.com/openclaw/openclaw/issues/179721) Plugin generation capture: junction dedup can throw EEXIST past its existsSync guard (TOCTOU), blocking doctor contract loads and state migrations `P1` `impact:ux-friction` 💬1
- [#179563](https://github.com/openclaw/openclaw/issues/179563) [Bug]: npm git-source pack leaks its temp directory when the step runner throws `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#179557](https://github.com/openclaw/openclaw/issues/179557) [Bug]: Claude CLI skills plugin leaks its temp directory when mkdir or the manifest write fails `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#179601](https://github.com/openclaw/openclaw/issues/179601) [Bug]: Ollama, LM Studio, oMLX, llama.cpp and Copilot Proxy setup appends a typed base URL to the prefilled default `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#179404](https://github.com/openclaw/openclaw/issues/179404) Windows: plugin capture linkDependency fails with EEXIST on a dangling junction, refusing all plugin migrations `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `clawsweeper:needs-info` 💬1
- [#179493](https://github.com/openclaw/openclaw/issues/179493) [Bug]: Linux desktop fresh install blocked — ~/.openclaw created 0775 under umask 0002 fails the service definition check `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` `P0` 💬1
- [#179509](https://github.com/openclaw/openclaw/issues/179509) Support report final-child-false 💬1
- [#179515](https://github.com/openclaw/openclaw/issues/179515) Backport request: extended-stable 2026.9.33 still ships the worker-isolate memory regression (3 OOM kills in 48h on a host with 4x the common deployment RAM) — please backport #174718 / #179119 / #171354 `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `impact:crash-loop` 💬1
- [#179486](https://github.com/openclaw/openclaw/issues/179486) [Bug]: claude-cli sessions_yield interrupt is recorded as "[Request interrupted by user]" and read back as a user stop `bug` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` 💬1
- [#179484](https://github.com/openclaw/openclaw/issues/179484) Support report final-child-false 💬1
- [#179472](https://github.com/openclaw/openclaw/issues/179472) [Bug]: Nextcloud Talk and Zalo default account stops starting once a named account is added (SecretRef credential) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#179436](https://github.com/openclaw/openclaw/issues/179436) Standalone recovery rejects lease-only identity loss with intact installation journal identities `P2` `impact:ux-friction` 💬1
- [#179432](https://github.com/openclaw/openclaw/issues/179432) [Bug]: A session stops using its person-linked model account after /new, /reset or an idle/daily reset `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#179295](https://github.com/openclaw/openclaw/issues/179295) [Bug]: Talk voice consults don't count as interaction for idle reset, and the reset then fails the next typed message `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#179242](https://github.com/openclaw/openclaw/issues/179242) [Bug]: Discord /model with a quoted model ID is forwarded as an agent prompt `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#179398](https://github.com/openclaw/openclaw/issues/179398) Discord voice: agent-proxy consults fail with "Discord runtime not initialized" (realtime callbacks run in the openai plugin instance) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#179310](https://github.com/openclaw/openclaw/issues/179310) Provider prompt serialization silently falls back to the Gateway event loop when the payload contains a toJSON member `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#179369](https://github.com/openclaw/openclaw/issues/179369) [Bug]: Telegram and Mattermost default bot stops starting once a named account is added (SecretRef token) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#179360](https://github.com/openclaw/openclaw/issues/179360) Browser page-blocker triage through the selected Decision model `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#179344](https://github.com/openclaw/openclaw/issues/179344) Docs: how an external channel plugin declares its SecretRef targets (secret-contract-api) is undocumented `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#179258](https://github.com/openclaw/openclaw/issues/179258) [Bug]: Telegram photos disappear from Docker sandbox model context on later turns (persisted media loses staged provenance) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#179153](https://github.com/openclaw/openclaw/issues/179153) config set/patch refusal blames auth, and gateway status reports connected_no_operator_scope for bind=custom, though loopback CLI has operator.admin `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#179331](https://github.com/openclaw/openclaw/issues/179331) [Bug]: concurrent automation starts reject an unchanged inference account `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#179328](https://github.com/openclaw/openclaw/issues/179328) [Feature]: Skill Workshop — configurable sedimentation rate (temperature dial) and a procedure-shaped content gate `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#179306](https://github.com/openclaw/openclaw/issues/179306) Skills catalog is re-injected in full into every turn and sits below the prompt-cache boundary (measured 15,369-16,512 chars, ~3,842-4,128 tokens per turn) `P2` `impact:other` `clawsweeper:bulk-filed` 💬1
- [#179304](https://github.com/openclaw/openclaw/issues/179304) memory-core: dreaming deep.limit=0 early-returns before light/REM sweep (kills whole sweep), and deep.recovery config is dead `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#179294](https://github.com/openclaw/openclaw/issues/179294) [Feature]: Pre-upgrade personalized impact report (installation manifest × release changes) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#179292](https://github.com/openclaw/openclaw/issues/179292) [Feature]: Opt-in usage budget contract with per-surface cost attribution (agent / channel / cron / subagent) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#179291](https://github.com/openclaw/openclaw/issues/179291) [Feature]: Session-reset observability: expose native session drift reasons, counts, and re-seeding overhead `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#179290](https://github.com/openclaw/openclaw/issues/179290) Model fallback tries every model for "Session capability metadata changed", a pre-provider coordination error `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#179289](https://github.com/openclaw/openclaw/issues/179289) Subagent completion announces fail with "Session capability metadata changed" in busy parent sessions `P1` `clawsweeper:needs-live-repro` `impact:message-loss` `issue-rating: 🐚 platinum hermit` 💬1
- [#179269](https://github.com/openclaw/openclaw/issues/179269) [Feature Request] SQLite configuration interface for performance tuning `P3` `impact:ux-friction` 💬1
- [#179012](https://github.com/openclaw/openclaw/issues/179012) Control UI header icons have uneven spacing and emphasis `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#178943](https://github.com/openclaw/openclaw/issues/178943) Control UI: inconsistent Details spinners and side-panel dividers `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#179229](https://github.com/openclaw/openclaw/issues/179229) Concurrent empty-workspace dispatches fail before worker provisioning `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#179017](https://github.com/openclaw/openclaw/issues/179017) Control UI: mobile Scroll to latest overlaps activity pills `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#179238](https://github.com/openclaw/openclaw/issues/179238) [Bug]: task-registry maintenance cannot list ACP sessions under explicit multi-agent ownership (owner-less key candidate throws AgentSelectionRequiredError) 💬1
- [#179231](https://github.com/openclaw/openclaw/issues/179231) Gateway main thread stalls 10–100 s in synchronous SQLite reads on a 10 GB per-agent store (macOS, 2026.9.2); no cache/mmap tuning and no transcript_events retention `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#179236](https://github.com/openclaw/openclaw/issues/179236) [Bug]: Talk realtime consults rewrite session history, so every voice consult re-writes the whole prompt cache `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#179158](https://github.com/openclaw/openclaw/issues/179158) [Bug]: Large streamed tool calls re-parse their whole argument buffer on almost every delta `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#179147](https://github.com/openclaw/openclaw/issues/179147) [Feature]: inspect session context in one side panel `enhancement` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#178952](https://github.com/openclaw/openclaw/issues/178952) Attachment failures leave unusable cards and duplicate errors in the composer `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#179107](https://github.com/openclaw/openclaw/issues/179107) Control UI: refine navigation rail surfaces, controls, and menu placement `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-live-repro` 💬1
- [#179111](https://github.com/openclaw/openclaw/issues/179111) [Bug]: Runtime publication blocks the Gateway event loop for ~671 s per boot/reload; a hardcoded 600 s budget IS the outage window, and readiness is indistinguishable from an outage `P1` `impact:crash-loop` 💬1
- [#178950](https://github.com/openclaw/openclaw/issues/178950) Show processes and contextual Stop controls in desktop Details `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#179030](https://github.com/openclaw/openclaw/issues/179030) Show inline hex color swatches in chat messages `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#179076](https://github.com/openclaw/openclaw/issues/179076) [Feature]: Make Decision assistance tool-prefilter timeout configurable `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#178961](https://github.com/openclaw/openclaw/issues/178961) Control UI light mode has inconsistent session controls and faint subagent icons `P3` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` `impact:ux-friction` 💬1
- [#179041](https://github.com/openclaw/openclaw/issues/179041) [Bug]: macOS gateway exec loses shared-state integrity admission on 2026.10.5; recurs after restart `P1` `impact:other` 💬1
- [#178963](https://github.com/openclaw/openclaw/issues/178963) Restore a dismissible Community card in the sidebar `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#179034](https://github.com/openclaw/openclaw/issues/179034) [Feature]: restart recovery system messages should carry a timestamp (when the turn was interrupted) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#179025](https://github.com/openclaw/openclaw/issues/179025) Session Details hides PR creation and publisher selection in nested menus `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#179018](https://github.com/openclaw/openclaw/issues/179018) Show pinned sessions at the top of the Sessions sidebar `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#178972](https://github.com/openclaw/openclaw/issues/178972) Control UI: status filters leave empty sidebar group headings `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#179004](https://github.com/openclaw/openclaw/issues/179004) Update failure: target-native-unsupported (2026.10.4) `P0` `impact:ux-release-blocker` 💬1
- [#178997](https://github.com/openclaw/openclaw/issues/178997) [Bug]: crabbox run timeout accepts non-decimal numeric forms `no-stale` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` 💬1
- [#178995](https://github.com/openclaw/openclaw/issues/178995) Quiet heartbeat history filtering stops at adjacent trusted runtime-context carrier; stale child completion state compounds retained context `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#179492](https://github.com/openclaw/openclaw/issues/179492) [Bug]: Message steered into a run that before_agent_run blocks waits the full 120 s transcript-commit timeout `clawsweeper:intake:bug`

#### 🔒 Closed Issues
- [#158332](https://github.com/openclaw/openclaw/issues/158332) [Bug]: Message-less inter-session deliveries force terminal output; reply-to-source delivery of contentless replies sustains politeness loops between sessions
- [#160770](https://github.com/openclaw/openclaw/issues/160770) 2026.9.6: gateway hangs at 100% CPU in media-persistence-detection startup migration after deleted transcript-archive folder (RangeError: Maximum call stack size exceeded)
- [#160470](https://github.com/openclaw/openclaw/issues/160470) boot-md startup hook silently stops running (no logs at any level) after multi-agent config + state migration (2026.8.1 / 2026.9.6)
- [#157389](https://github.com/openclaw/openclaw/issues/157389) feishu channel: replies lost under multi-lane load — private-final guard self-suppression, ingress claim→adoption stall, cross-lane session writer supersession
- [#179183](https://github.com/openclaw/openclaw/issues/179183) Update failure: gateway-recovery-verification (2026.10.5)
- [#159781](https://github.com/openclaw/openclaw/issues/159781) fix: Workboard "Move to" picker shows another column's status and selecting a status does nothing
- [#159579](https://github.com/openclaw/openclaw/issues/159579) Update failure: global-install-failed (2026.9.4)
- [#153179](https://github.com/openclaw/openclaw/issues/153179) Update failure: runtime-verification-failed (2026.9.4)
- [#178000](https://github.com/openclaw/openclaw/issues/178000) [Bug]: Session-state races ('Persisted user turn changed before replay admission', 'Session reader operation is no longer current') trigger cross-provider model fallback as reason=unknown (2026.10.5)
- [#136575](https://github.com/openclaw/openclaw/issues/136575) status --deep can repeatedly request pairing for a shared macOS CLI probe identity
- [#159342](https://github.com/openclaw/openclaw/issues/159342) [Bug]: one plugin failing on boot trips the crash-loop breaker and blacks out every channel; update proceeds with unavailable plugin targets
- [#142484](https://github.com/openclaw/openclaw/issues/142484) [Feature]: Explore scoped persistent-agent continuity across environments
- [#160317](https://github.com/openclaw/openclaw/issues/160317) Custom registerCliBackend plugin's static model catalog never appears in configured models.list view (picker/primary/fallbacks)
- [#159857](https://github.com/openclaw/openclaw/issues/159857) WebUI: switching between chats restores a scroll position near the top instead of the latest messages
- [#159672](https://github.com/openclaw/openclaw/issues/159672) Update failure: runtime-verification-failed (2026.9.3)
- [#159606](https://github.com/openclaw/openclaw/issues/159606) 2026.9.6 on macOS with 20 agents: off-heap RSS growth to 6 GB, per-agent Codex app-servers on restart recovery, upgrade blocked by deferred plugin session index, no downgrade path
- [#156456](https://github.com/openclaw/openclaw/issues/156456) Node-role connections hang (~1010ms) and drop (code 1006) when gateway.roles is active
- [#155410](https://github.com/openclaw/openclaw/issues/155410) Feature request: ability to reparent / move a session in the sidebar hierarchy
- [#39843](https://github.com/openclaw/openclaw/issues/39843) GChat: Typing indicator persists after NO_REPLY + emoji reaction
- [#172394](https://github.com/openclaw/openclaw/issues/172394) [Bug]: Assistant can assert task success ('watch armed') with no tool call or successful tool result (replay data)
- [#159334](https://github.com/openclaw/openclaw/issues/159334) [Bug]: Runtime-bound Telegram conversations fail with AgentSelectionRequiredError on multi-agent installs
- [#160566](https://github.com/openclaw/openclaw/issues/160566) [Bug]: `openclaw skills verify` intermittently never returns (no output, no error) while direct ClawHub HTTP calls succeed on the same host
- [#160120](https://github.com/openclaw/openclaw/issues/160120) [Bug]: Uncredentialed/expired auth profile causes perpetual prepared-model-catalog refresh loop (100% 1-core CPU, memory leak, tmp disk leak); openclaw doctor does not detect or fix it
- [#160076](https://github.com/openclaw/openclaw/issues/160076) [Bug/Regression] Gateway hang after 2026.9.4 -> 2026.9.6 upgrade on 2-core/3.5 GiB host: 424-task pile-up, heap at 116.6% of critical threshold, unresponsive until restart
- [#160058](https://github.com/openclaw/openclaw/issues/160058) Telegram: agent-runner-failure placeholder replaces successful reply and can permanently poison the session
- [#159928](https://github.com/openclaw/openclaw/issues/159928) [Bug]: nested TTS Code Mode test returns failed under full-suite execution
- [#159913](https://github.com/openclaw/openclaw/issues/159913) Option to deliver only the final assistant message per request (suppress intermediate text turns)
- [#159686](https://github.com/openclaw/openclaw/issues/159686) Update failure: global-install-failed (2026.9.4)
- [#159515](https://github.com/openclaw/openclaw/issues/159515) Update failure: runtime-verification-failed (2026.9.4)
- [#159324](https://github.com/openclaw/openclaw/issues/159324) [Tracking]: Control UI concurrency hardening for 30 simultaneous users
- [#159264](https://github.com/openclaw/openclaw/issues/159264) Agent-DB cold open runs a synchronous full integrity check (~0.25 s/MB), blocking the reply path past the per-chat cap
- [#158388](https://github.com/openclaw/openclaw/issues/158388) [Feature]: Support capturing multiple displays in Logbook
- [#158306](https://github.com/openclaw/openclaw/issues/158306) [Feature]: Per-message Steer / Queue choice in the composer (touch-friendly, works on mobile)
- [#158155](https://github.com/openclaw/openclaw/issues/158155) Linux desktop client: image clipboard paste hangs (screenshot paste fails)
- [#158055](https://github.com/openclaw/openclaw/issues/158055) sessions_spawn from a channel owner (Telegram) drops owner authority: child loses nodes/computer and browser gets missing scope operator.admin
- [#157668](https://github.com/openclaw/openclaw/issues/157668) Plugin SDK: supply deployment-specific external supervisor guidance
- [#157303](https://github.com/openclaw/openclaw/issues/157303) [gateway] Transcript projection rebuild can surface as generic 500 on OpenAI-compatible retry
- [#157056](https://github.com/openclaw/openclaw/issues/157056) Update failure: managed-service-preflight (2026.9.5)
- [#156826](https://github.com/openclaw/openclaw/issues/156826) Update failure: post-update-plugins (2026.9.5)
- [#156598](https://github.com/openclaw/openclaw/issues/156598) [Feature]: Allow configuring the model used by Codex Hosted Search
- [#156509](https://github.com/openclaw/openclaw/issues/156509) Feature request: sessions_reset tool (agent-callable session reset)
- [#155854](https://github.com/openclaw/openclaw/issues/155854) Update failure: repairing (2026.9.5)
- [#155329](https://github.com/openclaw/openclaw/issues/155329) Terminated exec loses run correlation after cgroup SIGKILL; finalizer infers the wrong task from session context
- [#157010](https://github.com/openclaw/openclaw/issues/157010) [Bug]: Doctor reports Google latest alias missing despite its presence in the published Gateway catalog
- [#176635](https://github.com/openclaw/openclaw/issues/176635) [Bug]: memory-wiki: CLI `wiki ingest` fails "vault changed while its compiled cache was being built" when a gateway wiki.bridge.import runs concurrently (in-process-only vault mutation lock)
- [#168540](https://github.com/openclaw/openclaw/issues/168540) [Bug]: Discord slash commands fail when their per-user session is archived
- [#150577](https://github.com/openclaw/openclaw/issues/150577) Compaction quality safeguard can repeat-block a session with a different reasonCode each retry, no fallback or operator-visible alert
- [#145920](https://github.com/openclaw/openclaw/issues/145920) [Flake] resolve-auth case with an explicit 1000 ms budget times out intermittently on loaded CI shards
- [#121446](https://github.com/openclaw/openclaw/issues/121446) [Bug]: Slack top-level botToken/appToken silently orphaned once channels.slack.accounts.* is configured (same class as Feishu #96929)
- [#160827](https://github.com/openclaw/openclaw/issues/160827) [Feature]: Support GitLab repositories in the new-session project picker
- [#160708](https://github.com/openclaw/openclaw/issues/160708) ACPX: enforce dispatch-scoped per-target authorization at the filesystem write boundary
- [#160601](https://github.com/openclaw/openclaw/issues/160601) [Feature]: active-memory: emit the escalation decision (no-recall-intent / no-strong-hit) at info when config.logging is true
- [#160598](https://github.com/openclaw/openclaw/issues/160598) sessions_spawn subagent completion delivery misroutes to Telegram from a WebChat session
- [#160554](https://github.com/openclaw/openclaw/issues/160554) claude-cli: agent runs list every discovered Claude Code skill (including claude.ai-synced plugins) instead of the agent's granted skills; send `initialize.skills` from the skills snapshot
- [#160514](https://github.com/openclaw/openclaw/issues/160514) Update failure: doctor-failed (2026.9.3)
- [#160504](https://github.com/openclaw/openclaw/issues/160504) update: candidate snapshot inventories agent workspace files; fails unless workspace is idle
- [#160461](https://github.com/openclaw/openclaw/issues/160461) test: chat-send synthetic-repair integration times out in CI
- [#160342](https://github.com/openclaw/openclaw/issues/160342) xiaomi-provider: classify content_filter finish_reason as failover-worthy (currently unclassified, whole agent run fails)
- [#160331](https://github.com/openclaw/openclaw/issues/160331) Update failure: doctor-failed (2026.9.4)
- [#160286](https://github.com/openclaw/openclaw/issues/160286) Windows job launcher: pass `--preserve-symlinks-main` and a required preload through execArgv (effect under a wrap not yet measured)
- [#160285](https://github.com/openclaw/openclaw/issues/160285) Raise the Node floor to the first releases carrying libuv 1.53 (Windows AppContainer)
- [#160269](https://github.com/openclaw/openclaw/issues/160269) [Feature]: Agent runs survive Gateway restart/upgrade (detach run execution from the Gateway process)
- [#160268](https://github.com/openclaw/openclaw/issues/160268) Update failure: global-install-failed (2026.9.4)
- [#160202](https://github.com/openclaw/openclaw/issues/160202) Update failure: global-install-failed (2026.9.3)
- [#160178](https://github.com/openclaw/openclaw/issues/160178) Gateway in-process MCP client bypasses the secret egress proxy; no plaintext-free token path for gateway-spawned stdio MCP servers
- [#160081](https://github.com/openclaw/openclaw/issues/160081) Feature: Lobster Packs and shared LobsterDex plugin rendering
- [#160053](https://github.com/openclaw/openclaw/issues/160053) memory-lancedb deep audit flags bundled Linux-only ldd fallback on macOS
- [#159729](https://github.com/openclaw/openclaw/issues/159729) Windows service driver: hold activation authority through port inspection, /Run and successor preflight
- [#159691](https://github.com/openclaw/openclaw/issues/159691) Heartbeat wake marked `skipped: requests-in-flight` after the isolated heartbeat session already ran is retained and re-executed → duplicate heartbeat runs
- [#159675](https://github.com/openclaw/openclaw/issues/159675) [Bug]: Cron spawn-only handoff delivers the job's payload.message as the reply after a late subagent completion
- [#159420](https://github.com/openclaw/openclaw/issues/159420) [Bug]: Misleading SQLite lock-wait diagnostics, unindexed scans on the 60s cron cleanup path, and a read-only worker that never self-exits (2026.9.6)
- [#159025](https://github.com/openclaw/openclaw/issues/159025) [Feature]: optional pluggable LLM noise gate on the promotion apply path (fail-open)
- [#159021](https://github.com/openclaw/openclaw/issues/159021) perf(agents): coalesce queued file writer line appends into a single append when no byte cap is configured
- [#159020](https://github.com/openclaw/openclaw/issues/159020) perf(infra): default PRAGMA synchronous to NORMAL for WAL databases (keep FULL for rollback journal)
- [#158242](https://github.com/openclaw/openclaw/issues/158242) docs: resolve QA channel discoverability under the hidden-docs contract
- [#158100](https://github.com/openclaw/openclaw/issues/158100) Update failure: gateway-recovery-verification (2026.9.6)
- [#158014](https://github.com/openclaw/openclaw/issues/158014) Workboard MCP: card.session_key never populated at creation → author stamps always empty
- [#157688](https://github.com/openclaw/openclaw/issues/157688) Update failure: finalize:doctor (2026.9.5)
- [#156675](https://github.com/openclaw/openclaw/issues/156675) Update failure: global-install-failed (2026.9.3)
- [#155958](https://github.com/openclaw/openclaw/issues/155958) [Feature]: Control UI polish — per-item colored sidebar nav icons, always-on context meter, complete zh-CN coverage
- [#155303](https://github.com/openclaw/openclaw/issues/155303) Update failure: global-install-failed (2026.9.4)
- [#155224](https://github.com/openclaw/openclaw/issues/155224) Provider API key not picked up by view_image tool after config update, keychain update, auth profile deletion, and gateway restart
- [#155143](https://github.com/openclaw/openclaw/issues/155143) Secret egress proxy breaks all Python HTTPS: proxy CA omits Subject Key Identifier
- [#179923](https://github.com/openclaw/openclaw/issues/179923) [Bug]: Plugins with native binaries fail to load on Windows devices with Endpoint DLP ("Native plugin companion changed before admission completed")
- [#178584](https://github.com/openclaw/openclaw/issues/178584) [Bug]: Client credential cutover skips full-backup fallback for legacy sqlite_stat4 under Node
- [#179813](https://github.com/openclaw/openclaw/issues/179813) [Bug]: Windows Store migration rejects Inno DisplayVersion 2026.7.1-2
- [#168626](https://github.com/openclaw/openclaw/issues/168626) `before_agent_reply` `{ handled: true }` (silence) on a Control UI chat turn is settled as "I finished the turn, but it did not produce a visible reply"
- [#161863](https://github.com/openclaw/openclaw/issues/161863) [Bug]: the self-update's completion notice is silently dropped — "update run notice append failed: Transcript idempotency key \"update-run-finished:<uuid>\" conflicts with the admitted message"
- [#132355](https://github.com/openclaw/openclaw/issues/132355) [Bug]: source updates rewrite the pnpm lockfile during version discovery
- [#178927](https://github.com/openclaw/openclaw/issues/178927) [Bug]: App Store iOS app never exposes native notification setup in Dashboard settings; no push.apns.register, push.test fails
- [#179480](https://github.com/openclaw/openclaw/issues/179480) [Bug]: SQLite store worker OOMs at startup — cron run maintenance loads all runs into memory before pruning (512 MB hardcoded cap)
- [#151853](https://github.com/openclaw/openclaw/issues/151853) Discord: replies to bot-posted notifications lose the quoted message text
- [#177065](https://github.com/openclaw/openclaw/issues/177065) [Bug]: No idle sessions.changed push after a run the Gateway starts itself (exec completion)
- [#136260](https://github.com/openclaw/openclaw/issues/136260) 2026.8.2 regression: inter-tool assistant text ("commentary") no longer streamed to channels — channel UI freezes during run, full text dumped at end
- [#179318](https://github.com/openclaw/openclaw/issues/179318) MCP tool results with isError: true are validated against outputSchema, hiding the server's error reason
- [#178908](https://github.com/openclaw/openclaw/issues/178908) [Bug]: Shared OAuth refresh reopens a completed-deletion agent database while fencing historical peers
- [#161186](https://github.com/openclaw/openclaw/issues/161186) [Docs Bug]: gateway-lock.md omits that RestrictSUIDSGID=true breaks the state lock (openat2 ENOSYS)
- [#178912](https://github.com/openclaw/openclaw/issues/178912) [Bug]: Telegram block streaming drops [[tts:text]] voice notes (tts.auto: "tagged")
- [#178380](https://github.com/openclaw/openclaw/issues/178380) pendingVoiceTranscriptReservations: a voice turn that never settles strands the queue head and every later transcript for that session
- [#178960](https://github.com/openclaw/openclaw/issues/178960) [Bug]: Windows SQLite migration blocked by normalized transcript metadata and mismatched historical headers
- [#178937](https://github.com/openclaw/openclaw/issues/178937) [Regression 2026.10.5] Cron-wake heartbeat turn is superseded by its own exec-completion turn; systemEvent reminders are never consumed and the heartbeat re-runs every 30-80 s
- [#178923](https://github.com/openclaw/openclaw/issues/178923) [Bug]: Provider-review acknowledgment replaces native thread on tool-catalog drift, then fails same-thread validation
- [#168452](https://github.com/openclaw/openclaw/issues/168452) Idle Linux Gateway shows ~60-second CPU bursts; placement maintenance is a timing match (2026.9.9)
- [#180086](https://github.com/openclaw/openclaw/issues/180086) DeepSeek V4.1 thinking: reasoning_content is not replayed after tool calls, causing 400 invalid_request_error
- [#172217](https://github.com/openclaw/openclaw/issues/172217) ios-release-e2e: setup-code does not retry a handshake close after a post-boot host stall
- [#178137](https://github.com/openclaw/openclaw/issues/178137) [Bug]: Control UI: repeated row buttons all have the same screen reader name (session menus, worktree Delete/Restore, App settings)
- [#177612](https://github.com/openclaw/openclaw/issues/177612) Per-agent verboseDefault is ignored at run time (replies, /verbose, /status, openclaw agent)
- [#179990](https://github.com/openclaw/openclaw/issues/179990) [Bug]: Workboard store stays failed after its SQLite worker hits the 512 MB heap limit; every operation fails until gateway restart (2026.10.5)
- [#178012](https://github.com/openclaw/openclaw/issues/178012) [Bug]: Control UI Logs, Debug, Devices, Memory, Apps and Activity pages have no heading naming the page
- [#179006](https://github.com/openclaw/openclaw/issues/179006) Compression offer enlarges attachment cards in the chat composer
- [#178027](https://github.com/openclaw/openclaw/issues/178027) [Bug]: Control UI: Automations editor field errors are not announced to screen readers
- [#177923](https://github.com/openclaw/openclaw/issues/177923) [Bug]: Control UI: Devices, Channels and Agents load errors are not announced to screen readers
- [#178196](https://github.com/openclaw/openclaw/issues/178196) [Bug]: Control UI: Dreaming toggle in the agent Memory panel is a plain button with no on/off state
- [#179957](https://github.com/openclaw/openclaw/issues/179957) [Bug] Session SQLite recover cannot coalesce missing archive paths with SHA-256-verified retained survivors (2026.10.5)
- [#127509](https://github.com/openclaw/openclaw/issues/127509) Failed multi-output node media operations orphan unpublished temp artifacts
- [#175439](https://github.com/openclaw/openclaw/issues/175439) [Bug]: every '<' in a streamed reply re-parses the whole answer's Markdown - HTML/JSX answers block the Gateway (0.9 s at 7 KB, 48 s at 60 KB)
- [#179888](https://github.com/openclaw/openclaw/issues/179888) [Bug]: Secret egress proxy returns 502 for hostnames longer than 64 chars (leaf cert CN exceeds X.509 limit)
- [#179886](https://github.com/openclaw/openclaw/issues/179886) [Bug]: Android Talk asks for a realtime provider even with talk.realtime.mode "stt-tts"?
- [#179809](https://github.com/openclaw/openclaw/issues/179809) Update failure: package-swap (2026.9.7)
- [#173828](https://github.com/openclaw/openclaw/issues/173828) [Bug]: Mattermost slash command typed in a thread replies at the channel root
- [#179823](https://github.com/openclaw/openclaw/issues/179823) Code Mode: native call to a catalog tool (read, write, edit, process) returns a bare "Tool <name> not found" with no hint
- [#171589](https://github.com/openclaw/openclaw/issues/171589) [Bug]: iOS chat shows no progress until the reply when a message is sent from another client
- [#162714](https://github.com/openclaw/openclaw/issues/162714) Discord and Mattermost ingress drains hold the channel lane through debounce deferral, so same-channel messages can never merge (Telegram/Slack/LINE/WhatsApp already release)
- [#127166](https://github.com/openclaw/openclaw/issues/127166) gateway probe overall timeout is multiplied by Darwin DNS-SD resolution
- [#179628](https://github.com/openclaw/openclaw/issues/179628) [Feature]: Buzz channel — support reactions natively, starting with ack reactions (messages.ackReaction)
- [#179721](https://github.com/openclaw/openclaw/issues/179721) Plugin generation capture: junction dedup can throw EEXIST past its existsSync guard (TOCTOU), blocking doctor contract loads and state migrations
- [#137437](https://github.com/openclaw/openclaw/issues/137437) [Bug]: Telegram approval card edits suppress results in another topic of the same chat
- [#179404](https://github.com/openclaw/openclaw/issues/179404) Windows: plugin capture linkDependency fails with EEXIST on a dangling junction, refusing all plugin migrations
- [#179493](https://github.com/openclaw/openclaw/issues/179493) [Bug]: Linux desktop fresh install blocked — ~/.openclaw created 0775 under umask 0002 fails the service definition check
- [#179509](https://github.com/openclaw/openclaw/issues/179509) Support report final-child-false
- [#179484](https://github.com/openclaw/openclaw/issues/179484) Support report final-child-false
- [#178565](https://github.com/openclaw/openclaw/issues/178565) [Bug]: Cancelled child receipts prevent replacement-child handoff at sessions_yield (2026.10.5)
- [#178548](https://github.com/openclaw/openclaw/issues/178548) [Bug]: Multi-agent Gateways leak ~10 MiB main heap per cold tools.effective: workspace-mismatched lending re-imports npm plugin (codex) graphs
- [#178387](https://github.com/openclaw/openclaw/issues/178387) [2026.10.10-beta.1] pdf tool: native Anthropic path sends setup-token/OAuth credential as x-api-key → 401 "invalid x-api-key"
- [#178513](https://github.com/openclaw/openclaw/issues/178513) Gateway startup: "Agent schema admission changed before publication; retry the operation" leaves agents degraded until restart
- [#178502](https://github.com/openclaw/openclaw/issues/178502) [Bug]: claude-cli models report missing-auth in models.list when the agent model is pinned to a token profile and the native Claude login is absent (Android app then blocks sending)
- [#179436](https://github.com/openclaw/openclaw/issues/179436) Standalone recovery rejects lease-only identity loss with intact installation journal identities
- [#178404](https://github.com/openclaw/openclaw/issues/178404) [Bug]: /usage full footer missing in Telegram direct messages using message-tool-only source delivery
- [#177993](https://github.com/openclaw/openclaw/issues/177993) [Bug]: Codex CLI sign-in import silently discarded: unsolicited account/updated at app-server startup trips the revision guard
- [#179295](https://github.com/openclaw/openclaw/issues/179295) [Bug]: Talk voice consults don't count as interaction for idle reset, and the reset then fails the next typed message
- [#179242](https://github.com/openclaw/openclaw/issues/179242) [Bug]: Discord /model with a quoted model ID is forwarded as an agent prompt
- [#176242](https://github.com/openclaw/openclaw/issues/176242) nextcloud-talk: senders listed by bare user ID in allowFrom/groupAllowFrom are dropped because the sender is compared as users/<id>
- [#177622](https://github.com/openclaw/openclaw/issues/177622) Manual /compact still launches Claude Code with bypassPermissions (fails on root-run gateways)
- [#177416](https://github.com/openclaw/openclaw/issues/177416) [Bug]: Bounded seed preparation aborts the turn when a host agent-event observer throws
- [#178133](https://github.com/openclaw/openclaw/issues/178133) status --usage: OpenRouter usage always "Usage unavailable" on Node 24 — wrapped fetch handed a bundled-undici dispatcher (UND_ERR_INVALID_ARG swallowed)
- [#178180](https://github.com/openclaw/openclaw/issues/178180) [Bug]: sessions_send refused forever for sessions spawned by an isolated cron run once the 7-day cron registry pass prunes the run row
- [#178235](https://github.com/openclaw/openclaw/issues/178235) [Bug]: Gateway-relay Talk: the user's finalized utterance is branched off the visible history when the agent consult starts
- [#179258](https://github.com/openclaw/openclaw/issues/179258) [Bug]: Telegram photos disappear from Docker sandbox model context on later turns (persisted media loses staged provenance)
- [#179153](https://github.com/openclaw/openclaw/issues/179153) config set/patch refusal blames auth, and gateway status reports connected_no_operator_scope for bind=custom, though loopback CLI has operator.admin
- [#175500](https://github.com/openclaw/openclaw/issues/175500) [Bug]: Telegram message-tool sends to another DM topic are not recorded in the destination session and create an empty account-qualified session
- [#179306](https://github.com/openclaw/openclaw/issues/179306) Skills catalog is re-injected in full into every turn and sits below the prompt-cache boundary (measured 15,369-16,512 chars, ~3,842-4,128 tokens per turn)
- [#178554](https://github.com/openclaw/openclaw/issues/178554) [Bug]: Gateway drops agent turn for immediate-dispatch channel messages with released http request root ("Gateway is temporarily unavailable")
- [#179269](https://github.com/openclaw/openclaw/issues/179269) [Feature Request] SQLite configuration interface for performance tuning
- [#178549](https://github.com/openclaw/openclaw/issues/178549) [Bug]: Claude CLI models report missing-auth when the subscription is a stored setup-token profile, though claude-cli turns run
- [#179012](https://github.com/openclaw/openclaw/issues/179012) Control UI header icons have uneven spacing and emphasis
- [#178943](https://github.com/openclaw/openclaw/issues/178943) Control UI: inconsistent Details spinners and side-panel dividers
- [#179229](https://github.com/openclaw/openclaw/issues/179229) Concurrent empty-workspace dispatches fail before worker provisioning
- [#179017](https://github.com/openclaw/openclaw/issues/179017) Control UI: mobile Scroll to latest overlaps activity pills
- [#179238](https://github.com/openclaw/openclaw/issues/179238) [Bug]: task-registry maintenance cannot list ACP sessions under explicit multi-agent ownership (owner-less key candidate throws AgentSelectionRequiredError)
- [#178398](https://github.com/openclaw/openclaw/issues/178398) [Bug]: macOS app sidebar pins main thread at ~100% CPU and lags typing with ~600 sessions
- [#175700](https://github.com/openclaw/openclaw/issues/175700) [Bug]: memory-wiki OKF re-import silently erases human notes on concept pages
- [#168396](https://github.com/openclaw/openclaw/issues/168396) macOS app crashes (SIGTRAP) on computer list_windows with Peekaboo provider: WebChatWindow.title read off main thread
- [#178395](https://github.com/openclaw/openclaw/issues/178395) Codex native: a grandchild's completion is dropped as "history owner contradictory" and its assignment replays on every restart
- [#178952](https://github.com/openclaw/openclaw/issues/178952) Attachment failures leave unusable cards and duplicate errors in the composer
- [#179111](https://github.com/openclaw/openclaw/issues/179111) [Bug]: Runtime publication blocks the Gateway event loop for ~671 s per boot/reload; a hardcoded 600 s budget IS the outage window, and readiness is indistinguishable from an outage
- [#175421](https://github.com/openclaw/openclaw/issues/175421) [Bug]: Zalo: inbound DMs containing a URL arrive as message.unsupported.received and are silently dropped
- [#178950](https://github.com/openclaw/openclaw/issues/178950) Show processes and contextual Stop controls in desktop Details
- [#179030](https://github.com/openclaw/openclaw/issues/179030) Show inline hex color swatches in chat messages
- [#178823](https://github.com/openclaw/openclaw/issues/178823) [Bug]: updater retention can accept replaced runtime bytes
- [#168440](https://github.com/openclaw/openclaw/issues/168440) macOS app appears under "Connected without pairing" in Devices
- [#178961](https://github.com/openclaw/openclaw/issues/178961) Control UI light mode has inconsistent session controls and faint subagent icons
- [#179041](https://github.com/openclaw/openclaw/issues/179041) [Bug]: macOS gateway exec loses shared-state integrity admission on 2026.10.5; recurs after restart
- [#178963](https://github.com/openclaw/openclaw/issues/178963) Restore a dismissible Community card in the sidebar
- [#178972](https://github.com/openclaw/openclaw/issues/178972) Control UI: status filters leave empty sidebar group headings
- [#179004](https://github.com/openclaw/openclaw/issues/179004) Update failure: target-native-unsupported (2026.10.4)

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 255,941 · **Open issues:** 50,403 · **Last push:** <1h ago

On October 21, 2026, Hermes Agent released two patch versions, v0.22.4 and v0.22.3, addressing several issues including the removal of suggestion pills from the desktop composer interface and consolidating approximately 620 pull requests into a stable release for various platforms. Notable merged features included the ability to drag sessions to pin or unpin them in the sidebar, and re-pinning agent-importers to facilitate updates. Among the newly reported issues, a significant concern is with the launchd component, where a failure in restarting a registered-but-not-running gateway job can prevent proper operations. Additionally, multiple bugs were reported affecting message handling in various communication apps, highlighting ongoing integration challenges.

#### 🚀 New Releases
- [v0.22.4](https://github.com/nousresearch/hermes-agent/releases/tag/v0.22.4) Hermes Agent v0.22.4
- [v0.22.3](https://github.com/nousresearch/hermes-agent/releases/tag/v0.22.3) Hermes Agent v0.22.3

#### ✅ Merged PRs
- [#142672](https://github.com/NousResearch/hermes-agent/pull/142672) feat(desktop): drag sessions to pin / unpin in the sidebar
- [#142810](https://github.com/NousResearch/hermes-agent/pull/142810) plugin-catalog: re-pin agent-importers (OpenClaw migration moved in)

#### 🐛 New Issues
- [#142741](https://github.com/NousResearch/hermes-agent/issues/142741) launchd: bootstrap retry never kickstarts a registered-but-not-running gateway job, so restart fails `type/bug` `comp/cli` `comp/gateway` `P2` 💬5
- [#142487](https://github.com/NousResearch/hermes-agent/issues/142487) [Bug]: ingress drops the whole inbound message when any media entry is not a local file (Matrix, WhatsApp bridge — same class as #141932) `type/bug` `comp/gateway` `platform/matrix` `platform/whatsapp` 💬4
- [#142779](https://github.com/NousResearch/hermes-agent/issues/142779) [Bug]: session.resume refuses chats last used under the DirectSDK provider — legacy adoption re-feeds billing_base_url (process://) into the v0.22.3 http(s)-only base_url check `type/bug` `comp/gateway` `P2` `area/sessions` 💬2
- [#142806](https://github.com/NousResearch/hermes-agent/issues/142806) [Bug]: WeCom AI-bot inbound video and voice messages are silently dropped as empty messages `type/bug` `comp/plugins` `tool/tts` `platform/wecom` 💬2
- [#142798](https://github.com/NousResearch/hermes-agent/issues/142798) [Bug]: Multiplexed gateway: a served profile's terminal commands inherit the environment of whatever started the host gateway `type/security` `comp/tools` `tool/terminal` `tool/file` 💬2
- [#142789](https://github.com/NousResearch/hermes-agent/issues/142789) TUI shows "compacting…" on turns where no compaction runs: compression feasibility notice re-tagged as compaction progress `type/bug` `comp/gateway` `P3` `area/compression` 💬2
- [#142811](https://github.com/NousResearch/hermes-agent/issues/142811) [Bug]: clarify tool answers disappear from visible chat log after submission `type/bug` `P2` `comp/desktop` `desktop/chat` 💬1
- [#142817](https://github.com/NousResearch/hermes-agent/issues/142817) [Feature]: Desktop SDK — expose status bar visibility through host.settings `type/feature` `area/config` `P3` `comp/desktop` 💬1
- [#142803](https://github.com/NousResearch/hermes-agent/issues/142803) MCP elicitation: "Always allow" is sent as a one-time accept and is not remembered `type/bug` `comp/tools` `tool/mcp` `P2` 💬1
- [#142804](https://github.com/NousResearch/hermes-agent/issues/142804) [Bug]: Slack rich_blocks renders <@U…>/<#C…> mentions as literal text inside lists, quotes and tables `type/bug` `comp/plugins` `platform/slack` `P3` 💬1
- [#142648](https://github.com/NousResearch/hermes-agent/issues/142648) MiniMax: new models never surface in the picker — stale static catalog + generic live fetch 404s on /anthropic/models `type/bug` `comp/plugins` `tool/file` `provider/minimax` 💬1
- [#142820](https://github.com/NousResearch/hermes-agent/issues/142820) hermes cron run should refuse while the global emergency stop is engaged
- [#142813](https://github.com/NousResearch/hermes-agent/issues/142813) [Feature]: Desktop — name the prompt and magnify the selected mark in the conversation timeline rail `type/feature` `P3` `comp/desktop` `desktop/chat`
- [#142511](https://github.com/NousResearch/hermes-agent/issues/142511) prompt-cache: mark system suffix + respect 4-breakpoint budget `type/bug` `comp/agent` `provider/anthropic` `P2`
- [#142796](https://github.com/NousResearch/hermes-agent/issues/142796) [Feature]: Prepare for Anthropic API version 2026-10-21 (Python SDK 2.0) `type/bug` `comp/agent` `provider/anthropic` `area/auth`
- [#142795](https://github.com/NousResearch/hermes-agent/issues/142795) [Feature]: Restore "Most Used" sorting on Skills page `type/feature` `tool/skills` `P3` `comp/dashboard`

#### 🔒 Closed Issues
- [#134889](https://github.com/NousResearch/hermes-agent/issues/134889) Tracking: one gateway owns every local session (#106742) — post-merge fixes
- [#122424](https://github.com/NousResearch/hermes-agent/issues/122424) package.json pins js-yaml@4.3.1 / yaml<2.9 to known CVE ranges (GHSA-2883-xcg3-v3hh, GHSA-48c2-rrv3-qjmp)
- [#87025](https://github.com/NousResearch/hermes-agent/issues/87025) doctor/npm audit on main reports web/ui-tui highs; minimal fix is nanoid override 3.3.18 + vite 8.2.1
- [#108219](https://github.com/NousResearch/hermes-agent/issues/108219) httpx2==2.7.0 / httpcore2==2.7.0 pinned in extras despite public GHSA findings and available patches
- [#134394](https://github.com/NousResearch/hermes-agent/issues/134394) Dependency pins carry open security advisories (PyJWT 2.13.0, httpx2 2.7.0, urllib3 2.7.0, oauthlib 3.3.1)
- [#142307](https://github.com/NousResearch/hermes-agent/issues/142307) [Bug]: pinned certifi 2026.5.20 still trusts the compromised eMudhra intermediates
- [#133711](https://github.com/NousResearch/hermes-agent/issues/133711) security(desktop): simple-git 3.36.0 has critical command-injection advisories
- [#61098](https://github.com/NousResearch/hermes-agent/issues/61098) Security: Remove pinned cryptography version 46.0.7
- [#135795](https://github.com/NousResearch/hermes-agent/issues/135795) uv.lock pins multidict 6.7.1 (CVE-2026-104874 / GHSA-54p9-h82j-f925, fixed in 6.9.1)
- [#41374](https://github.com/NousResearch/hermes-agent/issues/41374) Security: bump pinned deps to clear 12 CVEs (aiohttp, idna, PyNaCl, PyJWT, pip)
- [#47997](https://github.com/NousResearch/hermes-agent/issues/47997) security(deps): clear June 2026 Dependabot batch (starlette, tornado, cryptography, dompurify, opentelemetry)
- [#125668](https://github.com/NousResearch/hermes-agent/issues/125668) Security: httpx2==2.7.0 pin vulnerable to 6 advisories (GHSA-7mj9, GHSA-8xx6, GHSA-f2fp, GHSA-h4x7, GHSA-pf96)
- [#127922](https://github.com/NousResearch/hermes-agent/issues/127922) Follow-up: Axios upgrade was reverted before merge; #118940 remains unresolved
- [#118030](https://github.com/NousResearch/hermes-agent/issues/118030) Pinned httpx2==2.7.0 ships five known advisories, two of them high

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 94,885 · **Open issues:** 9,268 · **Last push:** <1h ago

Today, there were no new releases for vLLM; however, several significant pull requests were merged, including a critical bugfix in #62989 that resolves eager_break_during_capture at call time, which improves stability in operations. Additionally, performance enhancements were introduced with #62101, optimizing the Cohere2MoE model by implementing a dual stream and a single TP all-reduce per layer for more efficient processing. Documentation updates in #62624 enhanced clarity around routing for expert capture rows, while the compilation process for paged attention kernels was significantly accelerated in #62475. Among the newly reported issues, #62818 raised a request for comments regarding preserving output distribution under structured-output with speculative decoding, indicating evolving considerations for future developments.

#### ✅ Merged PRs
- [#52921](https://github.com/vllm-project/vllm/pull/52921) [Bugfix] Align CPU offload pool size across PP/spec-decode workers
- [#61868](https://github.com/vllm-project/vllm/pull/61868) [Perf][DSv4.1] DeepSeek-V4.1-Flash specialized decode on GB300
- [#62601](https://github.com/vllm-project/vllm/pull/62601) [Doc] Raise the bar for agent-written tests
- [#62989](https://github.com/vllm-project/vllm/pull/62989) [CI] Auto-apply the hisparse label
- [#59941](https://github.com/vllm-project/vllm/pull/59941) [Bugfix] Resolve eager_break_during_capture at call time, not import time
- [#62745](https://github.com/vllm-project/vllm/pull/62745) [Perf][Kernel] mHC TileLang: skip Sinkhorn on non-finite padding rows; single-pass fused post+pre for <=4 tokens
- [#60318](https://github.com/vllm-project/vllm/pull/60318) [Bugfix] Don't Eliminate Clones for graph I/O Aliases
- [#62101](https://github.com/vllm-project/vllm/pull/62101) [Perf][Model] Cohere2MoE: attention/MoE dual stream, single TP all-reduce per layer, fused add + RMSNorm
- [#62954](https://github.com/vllm-project/vllm/pull/62954) [Doc] DeepSeek-V4.1-Flash: document B200 AgentX router and drop removed c64 points
- [#62638](https://github.com/vllm-project/vllm/pull/62638) [XPU][Test] Relax streaming/non-streaming equality in mistral tool_choice=none test
- [#62624](https://github.com/vllm-project/vllm/pull/62624) [Feature][MoE] Add platform hook for routed-expert capture rows
- [#62475](https://github.com/vllm-project/vllm/pull/62475) [ROCm][Build] Compile paged attention kernels in parallel (7.6x faster attention build)
- [#62767](https://github.com/vllm-project/vllm/pull/62767) [Bugfix] Preserve image normalization constants during dummy loading
- [#59703](https://github.com/vllm-project/vllm/pull/59703) [KV Offload] Preserve group classification on placeholder events
- [#57393](https://github.com/vllm-project/vllm/pull/57393) [Bugfix][Model] Enable ModelOpt support for Cosmos3-Edge
- [#62884](https://github.com/vllm-project/vllm/pull/62884) [Bugfix][Core] Release libgomp workers before forking engine processes
- [#60082](https://github.com/vllm-project/vllm/pull/60082) [Frontend] Add derender output mode to generate
- [#60284](https://github.com/vllm-project/vllm/pull/60284) [Misc] Say when to use the IMA, microbenchmark, and Triton skills
- [#55700](https://github.com/vllm-project/vllm/pull/55700) [Feat][Frontend] Add Watchdog for Engine and Worker Monitoring
- [#62826](https://github.com/vllm-project/vllm/pull/62826) [Rust Frontend] Support --custom-histogram-buckets
- [#61489](https://github.com/vllm-project/vllm/pull/61489) [Docs] Point users at --disable-flashinfer-autotune
- [#62652](https://github.com/vllm-project/vllm/pull/62652) [Bugfix][Model] Preserve target-token scoring rows during DeepSeek-V4.1 replay
- [#62859](https://github.com/vllm-project/vllm/pull/62859) [Bugfix][Pooling] Reject multimodal inputs in chunked embeddings
- [#62712](https://github.com/vllm-project/vllm/pull/62712) [ROCm][Perf][MiniMax-M3] MonoKernel decode for M3 MXFP4 on MI355X
- [#58509](https://github.com/vllm-project/vllm/pull/58509) [ROCm][Perf] HY4 preview perf boost

#### 🐛 New Issues
- [#62818](https://github.com/vllm-project/vllm/issues/62818) [RFC]: Preserve output distribution under structured-output + speculative decoding `structured-output` `RFC` `speculative-decoding` 💬3
- [#62969](https://github.com/vllm-project/vllm/issues/62969) [Bug]: Video pruning (EVS / VidCom2): M-RoPE positions are wrong for chunks that start inside a Qwen3-VL video placeholder 💬2
- [#62808](https://github.com/vllm-project/vllm/issues/62808) [Bug]: Built-in LMCacheConnectorV1 does not forward shutdown(), so LMCache never stops and EngineCore is force-killed `kv-connector` 💬2
- [#62851](https://github.com/vllm-project/vllm/issues/62851) [Bug]: Qwen3.6 GDN greedy DFlash2 divergence from batch-dependent numerics and preemption/recompute (v0.31.0) `quantization` 💬2
- [#62844](https://github.com/vllm-project/vllm/issues/62844) [Installation]: [ROCm] Gemma4 multimodal model fails to start on vLLM 0.32.0 due to excessive video encoder memory reservation (negative KV cache) `installation` `rocm` `multi-modality` 💬2
- [#62984](https://github.com/vllm-project/vllm/issues/62984) [Bug]: [b12x] extra pins b12x 1.5.1 — unguarded `fake_mode` in the paged-priming compile crashes engine-core startup on b12x paged attention + chunked prefill 💬1
- [#63000](https://github.com/vllm-project/vllm/issues/63000) Question: long-context generation stops mid-sentence with finish_reason=stop (final token = <|im_end|>) on Qwen3.8-27B with fp8 KV cache `quantization` 💬1
- [#62935](https://github.com/vllm-project/vllm/issues/62935) [Bug]: DeepSeek-V4.1-Flash-1017 on GB300: long agent replies fall into repetition loops that another provider never shows on identical requests (persists with DSpark off, fp8 KV, FlashMLA, no decoder replay) `deepseek` `quantization` `DSv4.1` 💬1
- [#62939](https://github.com/vllm-project/vllm/issues/62939) [Bug]: [MRV2][Spec Decode] DSpark + enable_adaptive_verification fails at startup (device-side assert in drafter) when max_num_batched_tokens < max_num_seqs × draft query rows 💬1
- [#62820](https://github.com/vllm-project/vllm/issues/62820) [Bug]: FlashInfer fp4_gemm autotune changes temperature-0 tokens on Qwen3.8-27B NVFP4 (SM120) `quantization` 💬1
- [#62839](https://github.com/vllm-project/vllm/issues/62839) [RFC]: Fuse DSpark confidence-head GEMV into a single TileLang kernel 💬1
- [#62830](https://github.com/vllm-project/vllm/issues/62830) [Bug][Anthropic API] /v1/messages ignores assistant prefill: final assistant turn is closed and a new assistant turn is opened 💬1
- [#62828](https://github.com/vllm-project/vllm/issues/62828) [Bug][ROCm]: ROCM_ATTN sliding-window kernels output NaN when an out-of-window KV slot holds NaN/Inf `rocm` 💬1
- [#62803](https://github.com/vllm-project/vllm/issues/62803) [Bug]: Investigate uniform decision scores for a D3 checkpoint loaded as Qwen3.5 `bug` `quantization` 💬1
- [#62968](https://github.com/vllm-project/vllm/issues/62968) [Bug][PaliGemma] mm_prefix bidirectional ranges cover only the image tokens, not the instruction that follows
- [#62965](https://github.com/vllm-project/vllm/issues/62965) [Feature]: Capture the DeepSeek-V4.1 decoder replay graphs on the model graphs' stream so they share its graph pool `feature request` `deepseek` `DSv4.1`
- [#62866](https://github.com/vllm-project/vllm/issues/62866) [Doc]: MooncakeStoreConnector guide does not mention kv_load_failure_policy; with the default "fail" a failed load returns an empty response
- [#62945](https://github.com/vllm-project/vllm/issues/62945) [Bug]: nvidia/GLM-5.3-NVFP4: silent garbage output with expert parallelism + TP>1 + prefill context parallelism >1 `nvidia` `glm`
- [#62937](https://github.com/vllm-project/vllm/issues/62937) [Bug]: Qwen3-VL video pruning (EVS): M-RoPE recompute starts num_timestamp_tokens + 1 tokens too early when the prompt keeps the outer <|vision_start|> (transformers >= 5.10) `bug`
- [#62931](https://github.com/vllm-project/vllm/issues/62931) [Bug]: Tiered KV offload: a secondary-tier hit larger than the CPU tier loads nothing
- [#62919](https://github.com/vllm-project/vllm/issues/62919) [Performance]: Avoid dense initial-state materialization in Mamba2 continued prefill `performance`
- [#62865](https://github.com/vllm-project/vllm/issues/62865) [Bug]: Compile mode 2 leads to incorrect kernels when the Transformers backend is used `bug` `kimi`
- [#62862](https://github.com/vllm-project/vllm/issues/62862) [Performance]: MultiConnector([NixlConnector, OffloadingConnector]) disables divergent local hybrid cache hits on Decode
- [#62855](https://github.com/vllm-project/vllm/issues/62855) [Bug]: Responses API ignores `safety_identifier`, `prompt_cache_retention`, `prompt_cache_options` and doesn't echo `prompt_cache_key` `bug`
- [#62848](https://github.com/vllm-project/vllm/issues/62848) [Bug]: DeepSeek-OCR / Unlimited-OCR fail to start on v0.32.0 — Triton CompilationError "Cannot access global variable LOG2E" in DeepEncoder rel-pos attention kernel `bug` `deepseek`
- [#62842](https://github.com/vllm-project/vllm/issues/62842) [Installation]: cu129 `installation`
- [#62804](https://github.com/vllm-project/vllm/issues/62804) [Feature / Question]:: /v1/systemone rejects image inputs on standard multimodal VLMs with "this model does not take image inputs" `feature request` `multi-modality` `quantization`
- [#62815](https://github.com/vllm-project/vllm/issues/62815) [Feature]: Qwen4Exp PLE cpu_offload without UVA (NVIDIA Confidential Computing) `nvidia` `quantization`
- [#62811](https://github.com/vllm-project/vllm/issues/62811) [Bug]: DeepSeek-V4.1: wrong output when the last chunk of a chunked prefill runs as a piecewise CUDA graph `deepseek` `DSv4.1`
- [#62810](https://github.com/vllm-project/vllm/issues/62810) [RFC] Expose allocator-issued KV block generations to asynchronous connectors
- [#62801](https://github.com/vllm-project/vllm/issues/62801) [Bug]: MoE LoRA accepts incompatible round-robin expert placement with EP
- [#62793](https://github.com/vllm-project/vllm/issues/62793) [Bug]: MRV2 adaptive verification reduces Eagle3 acceptance due to mismatched draft-prefill CUDA graph padding `quantization`

#### 🔒 Closed Issues
- [#60174](https://github.com/vllm-project/vllm/issues/60174) [Bug] DFlash2/DSpark + prefix caching corrupt output after a cache hit on Qwen3.8-27B (TP=1) on 0.30/0.31; 0.29 and MTP are fine
- [#57572](https://github.com/vllm-project/vllm/issues/57572) [Feature]: Shared per choice `ChatStreamProcessor` for chat serving and streaming derender
- [#62598](https://github.com/vllm-project/vllm/issues/62598) [Bug][Rust Frontend] Long conversations fail with HTTP 500 (chat template fuel limit)
- [#59940](https://github.com/vllm-project/vllm/issues/59940) [Bug]: `VLLM_BATCH_INVARIANT=1` silently produces wrong tokens on a cold model-info cache (`eager_break_during_capture` is resolved at import time)
- [#62121](https://github.com/vllm-project/vllm/issues/62121) [Bug]: Race condition in multimodal drift recovery causes HTTP 500 (AssertionError: Expected a cached item)
- [#62651](https://github.com/vllm-project/vllm/issues/62651) [Bug]: DeepSeek-V4.1 decoder replay can return incorrect target-token scores

### SGLang (`sgl-project/sglang`)

**Stars:** 37,577 · **Open issues:** 6,055 · **Last push:** <1h ago

On October 22, 2026, SGLang had a routine maintenance day with no new releases. However, several important pull requests were merged, including enhancements to model optimization and performance, such as the fix for NVFP4 TRT-LLM clamps in pull request #45386 and performance tuning for dsv4, which improves the efficiency of the decoder tail and request-window history management. Additionally, critical fixes were made for issues related to the DeepSeek V4.1 system, including a resolution for the thinking block leaking into content under specific request conditions in pull request #45614. Among new issues, a notable bug was reported (#45512), which relates to a silent DP rank causing a blockage in the flush cache process without a deadline, highlighting potential operational challenges that could affect system performance.

#### ✅ Merged PRs
- [#45593](https://github.com/sgl-project/sglang/pull/45593) [Fix] [NPU] tests: Run the HiCache Mamba case with bfloat16 SSM kernels
- [#45521](https://github.com/sgl-project/sglang/pull/45521) [Fix] [NVIDIA] docker: Build sgl-deep-gemm 0.2.3 for cu134 to match the sglang pin
- [#45386](https://github.com/sgl-project/sglang/pull/45386) [Fix] modelopt: Correct NVFP4 TRT-LLM clamps for untied gate/up scales
- [#44862](https://github.com/sgl-project/sglang/pull/44862) [Feat] lora: serve GLM-5.3-Flash adapters on the KDA projections
- [#45469](https://github.com/sgl-project/sglang/pull/45469) [CI] [AMD] miles: Fix the ROCm 10 nightly suites that never finish
- [#40900](https://github.com/sgl-project/sglang/pull/40900) [Feat] bench: support --tokenize-prompt for generated-shared-prefix
- [#45633](https://github.com/sgl-project/sglang/pull/45633) [Perf] dsv41: Fuse the q_norm MXFP8 quantize for wq_b at every row count
- [#45582](https://github.com/sgl-project/sglang/pull/45582) [Perf] dsv4: Publish prefill read-done under the request window and on V4.1
- [#45672](https://github.com/sgl-project/sglang/pull/45672) [Test] cpu: prune mirror and tautology cases from the per-commit CPU suite
- [#40424](https://github.com/sgl-project/sglang/pull/40424) [Fix] dsv4: Skip DP-attention pad rows in the engram hasher and low-ratio sources
- [#45419](https://github.com/sgl-project/sglang/pull/45419) [Fix] [Apple] mlx: Give the stub model a shared-expert layout
- [#45460](https://github.com/sgl-project/sglang/pull/45460) [Fix] rust-server: Check only a client-sent max_new_tokens against the context window
- [#43182](https://github.com/sgl-project/sglang/pull/43182) [Feat] cp: Enable GLM-5.3 Flash interleave BCG with batched prefill and DFlash2
- [#42803](https://github.com/sgl-project/sglang/pull/42803) [Perf] speculative: Parallelize EAGLE spec-decode KV index building over token blocks (flashinfer draft decode; verify/draft-extend for flashinfer, flashinfer_mla, aiter)
- [#43448](https://github.com/sgl-project/sglang/pull/43448) [Fix] deepseek_v4: Fix mHC prewarm when chunked prefill is disabled
- [#45586](https://github.com/sgl-project/sglang/pull/45586) [Fix] dsv4: Write idle SWA stores to an idle request-window layout
- [#45662](https://github.com/sgl-project/sglang/pull/45662) [Fix] bailing: Renormalize top-k routing weights by default for Ling-2.5/2.6
- [#45408](https://github.com/sgl-project/sglang/pull/45408) [Test] [AMD] debug-utils: Opt TestCrashDump into expect_server_exit
- [#45581](https://github.com/sgl-project/sglang/pull/45581) [Perf] dsv4: Let the decoder tail leave the prefill graph under DP attention with MegaMoE
- [#45585](https://github.com/sgl-project/sglang/pull/45585) [Fix] [SM100] quantization: Honor `deep_gemm` for 32x32 block-FP8 linears
- [#45670](https://github.com/sgl-project/sglang/pull/45670) [Fix] test: Gather Mamba track indices from `track_position` in the mixed-batch track test
- [#42646](https://github.com/sgl-project/sglang/pull/42646) [cherrypick from #42349] [RL] Pass return_indexer_topk through chat completions and sessions
- [#45579](https://github.com/sgl-project/sglang/pull/45579) [Perf] dsv4: Compute request-window history rows once per batch
- [#45577](https://github.com/sgl-project/sglang/pull/45577) [Perf] dsv4: Gather V4.1 index-K slots once per forward and cache the prefill index plan
- [#45575](https://github.com/sgl-project/sglang/pull/45575) [Fix] moe: Keep the DeepSeek V4.1 vision router off the packed-ids path under routing simulation
- [#45559](https://github.com/sgl-project/sglang/pull/45559) [Fix] radix-cache: Order linker offloads behind the forward that writes the pages
- [#45573](https://github.com/sgl-project/sglang/pull/45573) [Perf] dsv4: Restore sparse prefill for request-window rows
- [#45630](https://github.com/sgl-project/sglang/pull/45630) [Perf] dsv41: Use tuned MXFP8 tactics at decode sizes
- [#43941](https://github.com/sgl-project/sglang/pull/43941) [Fix] parser: Accept whole-number floats for integer tool arguments
- [#45519](https://github.com/sgl-project/sglang/pull/45519) [CI] [AMD] disaggregation: Register Mooncake KV buffers without HIP dmabuf
- [#45409](https://github.com/sgl-project/sglang/pull/45409) [Test] [AMD] diffusion: Avoid Python 3.11-only enterContext in test_usp_ring_replicated
- [#45487](https://github.com/sgl-project/sglang/pull/45487) [Perf] srt: Record on the host whether an extend batch completes a prompt
- [#45482](https://github.com/sgl-project/sglang/pull/45482) [Feat] srt: Balance uvicorn tokenizer workers with per-worker SO_REUSEPORT listeners
- [#45473](https://github.com/sgl-project/sglang/pull/45473) [Perf] cuda-graph: Capture FlashInfer KDA prefill with context parallelism
- [#45472](https://github.com/sgl-project/sglang/pull/45472) [Perf] scheduler: Plan hybrid Mamba extend batches without host-device syncs
- [#45453](https://github.com/sgl-project/sglang/pull/45453) [Fix] disaggregation: Synchronize deferred decode KV release across TP ranks
- [#45439](https://github.com/sgl-project/sglang/pull/45439) [Refactor] radix-tree: Reuse the insert walk, component hooks and bindings for custom tree cores
- [#45628](https://github.com/sgl-project/sglang/pull/45628) [Fix] moe: Apply SGLANG_SIMULATE_* routing on DeepSeek-V4.1 vision-biased gates
- [#39598](https://github.com/sgl-project/sglang/pull/39598) [Perf] [AMD] quark: Add opt-in AITER ASM FP4 GEMM for Quark dense linear
- [#45625](https://github.com/sgl-project/sglang/pull/45625) [Doc] cookbook: Add Recursive Flint cookbook
- [#40120](https://github.com/sgl-project/sglang/pull/40120) [Doc] [NPU] cookbook: add tested A2 deployment and A3 reference for MiniMax-M2.5
- [#44215](https://github.com/sgl-project/sglang/pull/44215) [Fix] pd: Allow runtime role switching with DP and DP attention
- [#45597](https://github.com/sgl-project/sglang/pull/45597) [Doc] [NPU] GLM: Add Ascend cookbook deployment recipes
- [#40861](https://github.com/sgl-project/sglang/pull/40861) [Feat] [Intel] disaggregation: Support XPU for staging-buffer KV transfer
- [#45606](https://github.com/sgl-project/sglang/pull/45606) [Fix] rust: Format health probe handle setup
- [#45602](https://github.com/sgl-project/sglang/pull/45602) [Doc] [NPU] deepseek-v4: Add A3/950 single-node cookbook recipes
- [#45498](https://github.com/sgl-project/sglang/pull/45498) [AMD] aiter: Update ROCm AITER pin to 285579b62 (gfx942/gfx950 only)
- [#43039](https://github.com/sgl-project/sglang/pull/43039) [Fix] [NPU] pre_warm_nccl: init npu backend before the parallel runtime touches a device
- [#45574](https://github.com/sgl-project/sglang/pull/45574) [Doc] [NPU] docs: reference released Qwen3.8-Max W4A8 checkpoint in tutorial
- [#45557](https://github.com/sgl-project/sglang/pull/45557) [CI] cuda: Rebuild workspace crates when the shared Cargo target dir came from another rust/ tree
- [#43698](https://github.com/sgl-project/sglang/pull/43698) [Feat] comfyui: Apply ControlNet residuals in Flux integrated mode
- [#45475](https://github.com/sgl-project/sglang/pull/45475) [Fix] rust-server: Answer health probes a busy scheduler skipped on the response ring
- [#45502](https://github.com/sgl-project/sglang/pull/45502) [Fix] sgl-router: Wait for the detached PD prefill in routing tests
- [#40889](https://github.com/sgl-project/sglang/pull/40889) [Fix] [NPU] qwen3_6: Set accuracy cases to greedy decoding and tune retries
- [#45082](https://github.com/sgl-project/sglang/pull/45082) [Fix] nemotron: Correct weight-export failures and GEMV dispatch
- [#43482](https://github.com/sgl-project/sglang/pull/43482) [Feat] NIXL: Support per-GPU UCX device selection
- [#38678](https://github.com/sgl-project/sglang/pull/38678) [Doc] [NPU] cookbook: add NPU (A3 series) deployment scenarios for Qwen3.6
- [#45380](https://github.com/sgl-project/sglang/pull/45380) [AMD] Build ROCm AOT kernels with -std=c++20
- [#45564](https://github.com/sgl-project/sglang/pull/45564) [CI] codeowners: Add owners for the top-level sgl-router
- [#45338](https://github.com/sgl-project/sglang/pull/45338) [Feat] mooncake: Enable the failed-session probe by default with backoff and idle pruning
- [#45546](https://github.com/sgl-project/sglang/pull/45546) [Fix] [AMD] mono-kernel: Update sgl-amd-mono version

#### 🐛 New Issues
- [#45512](https://github.com/sgl-project/sglang/issues/45512) [Bug] A silent DP rank leaves /flush_cache waiting without a deadline and blocks subsequent flush calls 💬2
- [#45510](https://github.com/sgl-project/sglang/issues/45510) [Bug] --max-queued-requests 0 with priority scheduling crashes the scheduler on an empty queue 💬1
- [#45481](https://github.com/sgl-project/sglang/issues/45481) [Bug] Qwen3.5-35B-A3B TP1/PP2 + NEXTN produces different greedy tokens under concurrent arrivals with deterministic inference 💬1
- [#45622](https://github.com/sgl-project/sglang/issues/45622) [Bug] Context length is silently derived from model config when --context-length is unset (can silently truncate long inputs)
- [#45615](https://github.com/sgl-project/sglang/issues/45615) [Roadmap][Feature] Cambricon MLU Backend Support
- [#45614](https://github.com/sgl-project/sglang/issues/45614) [Bug] DeepSeek-V4.1 + SGLANG_DEFAULT_THINKING=1: thinking block leaks into content when the request carries no reasoning_effort
- [#45569](https://github.com/sgl-project/sglang/issues/45569) [Feature] Support symmetric static compressed-tensors W8A8 on Ascend
- [#45568](https://github.com/sgl-project/sglang/issues/45568) [Tracking] AFD integration and roadmap
- [#45563](https://github.com/sgl-project/sglang/issues/45563) [Bug] HiCache NIXL L3: under O_DIRECT the DSA indexer sidecar is never written, and the 0-byte objects are restored as hits, so restored prefixes get zero index-K (silent output change, EAGLE accept collapse)
- [#45547](https://github.com/sgl-project/sglang/issues/45547) [RFC] adapter hisparse to npu
- [#45535](https://github.com/sgl-project/sglang/issues/45535) [Performance][DCP] Prefix-hit prefill pays 4*batch_size device syncs per layer when gathering KV for MHA extend
- [#45515](https://github.com/sgl-project/sglang/issues/45515) [RFC][DSpark] Online latency correction for confidence-scheduled verification
- [#45527](https://github.com/sgl-project/sglang/issues/45527) [RFC] PD disaggregation: send the last KV chunk from later PP stages as soon as their forward finishes
- [#45525](https://github.com/sgl-project/sglang/issues/45525) [Bug] DeepSeek-V4-Flash: speculative and ordinary decoding produce different greedy outputs
- [#45517](https://github.com/sgl-project/sglang/issues/45517) [Bug] DSpark spec decode: FlashInfer softmax outputs q > 1.0, triggering unconditional rejection in the accept kernel
- [#45511](https://github.com/sgl-project/sglang/issues/45511) [Bug] /health_generate returns 200 when an idle server rejects every generation request with 503
- [#45493](https://github.com/sgl-project/sglang/issues/45493) [RFC] Expose allocator-issued page generations to external linkers

#### 🔒 Closed Issues
- [#33789](https://github.com/sgl-project/sglang/issues/33789) [Bug] NIXL P/D stops serving after one role is replaced
- [#35987](https://github.com/sgl-project/sglang/issues/35987) [Feature] Batch-wise Adaptive Pruning
- [#44832](https://github.com/sgl-project/sglang/issues/44832) [CI] Post-merge runs on main cancel each other in NPU/XPU/Xeon/MUSA/SMG workflows
- [#45511](https://github.com/sgl-project/sglang/issues/45511) [Bug] /health_generate returns 200 when an idle server rejects every generation request with 503

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 131,948 · **Open issues:** 2,563 · **Last push:** <1h ago

On October 22, 2026, the llama.cpp project released b11803, which introduced the Flint model (FlintForCausalLM) with the assistance of Codex, alongside a fix for shadowed namespace attributes in b11802. Key merged features included support for the SenseNova U1 model and optimizations for both vocabulary loading and QSA mask operations, while the recent b11800 version presented a new fused operation specific to QSA scoring. Notably, users are reporting multiple evaluation bugs, including significant regressions and NaN outputs in various configurations, highlighting a pervasive issue with prompt batching that continues to affect performance across multiple scenarios.

#### 🚀 New Releases
- [b11803](https://github.com/ggml-org/llama.cpp/releases/tag/b11803) b11803
- [b11802](https://github.com/ggml-org/llama.cpp/releases/tag/b11802) b11802
- [b11801](https://github.com/ggml-org/llama.cpp/releases/tag/b11801) b11801
- [b11800](https://github.com/ggml-org/llama.cpp/releases/tag/b11800) b11800
- [b11799](https://github.com/ggml-org/llama.cpp/releases/tag/b11799) b11799
- [b11798](https://github.com/ggml-org/llama.cpp/releases/tag/b11798) b11798
- [b11797](https://github.com/ggml-org/llama.cpp/releases/tag/b11797) b11797
- [b11796](https://github.com/ggml-org/llama.cpp/releases/tag/b11796) b11796
- [b11795](https://github.com/ggml-org/llama.cpp/releases/tag/b11795) b11795
- [b11793](https://github.com/ggml-org/llama.cpp/releases/tag/b11793) b11793

#### ✅ Merged PRs
- [#30897](https://github.com/ggml-org/llama.cpp/pull/30897) opencl: add F32-to-I32 ARGMAX
- [#28919](https://github.com/ggml-org/llama.cpp/pull/28919) model: Add support for SenseNova U1 model
- [#30928](https://github.com/ggml-org/llama.cpp/pull/30928) models: Add Flint model (FlintForCausalLM)
- [#30941](https://github.com/ggml-org/llama.cpp/pull/30941) jinja : fix namespace attributes shadowed by dict methods
- [#30775](https://github.com/ggml-org/llama.cpp/pull/30775) Sycl q8 fast dequant - prompt eval duration reduction - Intel Arc Pro B70 - kernel speeds (437.4 GB/s => 636.9 GB/s)
- [#30640](https://github.com/ggml-org/llama.cpp/pull/30640) llama: create new fused op for QSA mask
- [#30929](https://github.com/ggml-org/llama.cpp/pull/30929) jinja: support hexadecimal string escapes
- [#30895](https://github.com/ggml-org/llama.cpp/pull/30895) ggml-opencl : add IM2COL_3D support
- [#30902](https://github.com/ggml-org/llama.cpp/pull/30902) mtmd: refactor mtmd gen API, add state object
- [#30856](https://github.com/ggml-org/llama.cpp/pull/30856) server : forward llama.cpp sampling params on /v1/messages
- [#30861](https://github.com/ggml-org/llama.cpp/pull/30861) llama : scale moe down projection per expert token
- [#30889](https://github.com/ggml-org/llama.cpp/pull/30889) vendor: update BoringSSL to 0.20261020.0
- [#30679](https://github.com/ggml-org/llama.cpp/pull/30679) llama : optimize vocabulary loading
- [#30912](https://github.com/ggml-org/llama.cpp/pull/30912) llama : place d2t by its set_rows use so it can stay on the GPU
- [#30890](https://github.com/ggml-org/llama.cpp/pull/30890) metal : fix memory leaks and cleanup logic in GPU capture path
- [#30901](https://github.com/ggml-org/llama.cpp/pull/30901) hexagon: neon-vectorized and threaded repack (tiling)
- [#30753](https://github.com/ggml-org/llama.cpp/pull/30753) opencl: add dp4a GEMM variants to vector load activation
- [#30286](https://github.com/ggml-org/llama.cpp/pull/30286) [SYCL] fix fa crash for Query head dimension mismatch (neq0 != HSK / D=2048)
- [#30739](https://github.com/ggml-org/llama.cpp/pull/30739) sycl: collapse duplicate need_check launch bodies in mmq
- [#30737](https://github.com/ggml-org/llama.cpp/pull/30737) ggml-cpu : compute f32 gelu_quick and geglu_quick without the fp16 table
- [#30604](https://github.com/ggml-org/llama.cpp/pull/30604) Sycl iq3 crash fix

#### 🐛 New Issues
- [#30905](https://github.com/ggml-org/llama.cpp/issues/30905) Misc. bug: llama_detokenize removes the space preceding "!", "?", ".", ",", and prior to "'s", "'re" for Gemma 4 and other vocabs whose Hugging Face tokenizer does not, so `x != y` turns into `x!= y` `bug-unconfirmed` 💬3
- [#30954](https://github.com/ggml-org/llama.cpp/issues/30954) Eval bug: RPC + Vulkan tensor splitting crash: reproducible lifetime bug and one-line fix `bug-unconfirmed`
- [#30951](https://github.com/ggml-org/llama.cpp/issues/30951) Eval bug: CUDA gpt-oss-120b with IQ1_M (or TQ1_0/TQ2_0) experts produces NaN ("GGGG") at prompt batch > 8: fp16 accumulation and result in the dequantize + cuBLAS fallback overflow
- [#30950](https://github.com/ggml-org/llama.cpp/issues/30950) Eval bug: CUDA Q4_1/Q5_1 mat-vec kernels overflow fp16 when multiplying the block offset by the Q8_1 block sum (gpt-oss emits "G", NaN logits)
- [#30944](https://github.com/ggml-org/llama.cpp/issues/30944) DeepSeek-V4.1-Flash (PR #30817): single-token output corruption when a cached prompt prefix is reused (Engram n-gram history)
- [#30939](https://github.com/ggml-org/llama.cpp/issues/30939) prefill: ~7% pp512 regression on Arc B580 since #30160 (embeddings get_rows reorder), constant per-invocation cost
- [#30938](https://github.com/ggml-org/llama.cpp/issues/30938) Eval bug: terminate called after throwing an instance of 'common_json_error' `bug-unconfirmed`
- [#30937](https://github.com/ggml-org/llama.cpp/issues/30937) Misc. bug: "CommandLine Error: Option 'sanitizer-early-opt-ep' registered more than once!" `bug-unconfirmed`
- [#30935](https://github.com/ggml-org/llama.cpp/issues/30935) Windows bundled llama-server.exe is missing `longPathAware`: GGUF paths > 260 chars fail with "No such file or directory" even when the file exists and LongPathsEnabled=1 `bug-unconfirmed`
- [#30925](https://github.com/ggml-org/llama.cpp/issues/30925) Feature Request: EAGLE-4 support `enhancement`
- [#30920](https://github.com/ggml-org/llama.cpp/issues/30920) Vulkan: Mali-G710 (Android 16, VK 1.1) still crashes in QueueSubmit after applying #28593 null-pointer fixes
- [#30909](https://github.com/ggml-org/llama.cpp/issues/30909) Feature Request: LoRA adapters on prism.hadamard folded weights `enhancement`
- [#30906](https://github.com/ggml-org/llama.cpp/issues/30906) CPU backend: garbage output (repetition loops) for the qwen35 hybrid family (Qwen3.8-27B / Holo4), while the Vulkan backend serves the same binary and GGUF correctly

#### 🔒 Closed Issues
- [#24415](https://github.com/ggml-org/llama.cpp/issues/24415) Eval bug: can't load gemma-4-12B with OpenVINO (CPU, GPU and NPU)
- [#5040](https://github.com/ggml-org/llama.cpp/issues/5040) Include `eos_token` and `bos_token` from `tokenizer_config.json` for chat templating
- [#27772](https://github.com/ggml-org/llama.cpp/issues/27772) `common_peg_until_parser` returns SUCCESS instead of FAIL when its delimiter never appears in a final (non-lenient) parse
- [#27217](https://github.com/ggml-org/llama.cpp/issues/27217) server: tool_choice: "required" accepted but not enforced on templates with supports_preserve_reasoning=true
- [#27634](https://github.com/ggml-org/llama.cpp/issues/27634) Eval bug: Vulkan on Intel iGPU / i915: kernel request watchdog silently cancels queued submissions, embeddings collapse with no error
- [#26663](https://github.com/ggml-org/llama.cpp/issues/26663) [Vulkan] Pathological token-generation slowdown on RX 9070 XT (gfx1201) for models with hidden_size >= 4096 — 5-7x slower than HIP backend, ~100 GB/s effective bandwidth
- [#28502](https://github.com/ggml-org/llama.cpp/issues/28502) Eval bug: Vulkan produces garbled output (not a crash) on Imagination PowerVR DXT-48-1536 / Tensor G5
- [#29596](https://github.com/ggml-org/llama.cpp/issues/29596) Vulkan: Abysmal performance on FirePro D700 (Gentoo Linux 7.2.7, Mesa 26.2.3)
- [#28467](https://github.com/ggml-org/llama.cpp/issues/28467) mtmd warmup: "WARNING: the CLIP graph uses unsupported operators by the backend" IM2COL: type = f32, ne = [9216 16 16 1]
- [#28470](https://github.com/ggml-org/llama.cpp/issues/28470) Feature Request: BPOSIT8 tensor type for exact, order-independent accumulation
- [#28478](https://github.com/ggml-org/llama.cpp/issues/28478) Misc. bug: Streaming requests with tools reject logprobs but accept n_probs
- [#28486](https://github.com/ggml-org/llama.cpp/issues/28486) ARM: optimize ggml_vec_dot_bf16 with native BF16/SVE BF16 dot product
- [#28487](https://github.com/ggml-org/llama.cpp/issues/28487) Eval bug: llama.cpp RPC deadlocks with 3+ endpoints; 2 works reliably
- [#28505](https://github.com/ggml-org/llama.cpp/issues/28505) The problem of work director bothered me, which causes gpu is not used

### Ollama (`ollama/ollama`)

**Stars:** 184,214 · **Open issues:** 4,389 · **Last push:** <1h ago

On October 22, 2026, Ollama released version v0.40.8, featuring the new Recursive Flint model that enhances coding agents' abilities to navigate, debug, and test unfamiliar code within repositories. In addition to this release, several pull requests were merged, including updates to `llama.cpp` and a switch to the released WoA CTK. A notable new issue emerged concerning the Flint model, where users reported a 500 Internal Server Error, reflecting potential instability in the new functionality. Other issues raised included unexpected behavior with integer tool-call arguments and dropped function calls in requests lacking required tools.

#### 🚀 New Releases
- [v0.40.8](https://github.com/ollama/ollama/releases/tag/v0.40.8) v0.40.8

#### ✅ Merged PRs
- [#19194](https://github.com/ollama/ollama/pull/19194) llama.cpp update
- [#19185](https://github.com/ollama/ollama/pull/19185) ci: switch to released WoA CTK
- [#19181](https://github.com/ollama/ollama/pull/19181) New model

#### 🐛 New Issues
- [#19186](https://github.com/ollama/ollama/issues/19186) Error: 500 Internal Server Error with new model Flint `bug` 💬5
- [#19191](https://github.com/ollama/ollama/issues/19191) Flint: integer tool-call arguments in history are re-emitted as float strings (30000 -> "30000.0")
- [#19187](https://github.com/ollama/ollama/issues/19187) Calls to a function that isn't in the request's tools are dropped silently (empty response, eval_count > 0)
- [#19182](https://github.com/ollama/ollama/issues/19182) Pending eviction (OLLAMA_MAX_LOADED_MODELS=1) is cancelled when a request for the resident model carries keep_alive; waiting request stalls for the full keep_alive
- [#19177](https://github.com/ollama/ollama/issues/19177) /v1/messages: errors after the first streamed chunk are dropped

#### 🔒 Closed Issues
- [#19137](https://github.com/ollama/ollama/issues/19137) Ollama Generate node turns red when using (keep_context) and switching between models in current session
- [#19186](https://github.com/ollama/ollama/issues/19186) Error: 500 Internal Server Error with new model Flint
- [#19006](https://github.com/ollama/ollama/issues/19006) bug(cuda): A100 PCIe bus loss during Qwen35 warm-up/inference on 0.34.4 and 0.35.0

### LiteLLM (`BerriAI/litellm`)

**Stars:** 61,753 · **Open issues:** 5,562 · **Last push:** 2h ago

Today, LiteLLM released versions v1.106.2, v1.105.3, v1.104.5, and v1.103.7, all of which include cryptographic signing of Docker images with the cosign tool for enhanced security, as established in commit `0112e53`. Significant changes in merged pull requests included a refactor of error handling in inference with pull request #47771, various fixes to proxy behavior in pull requests #39542 and #47815, and a backport of critical batch-cost and pricing fixes across multiple stable versions. The day's most pressing issue emerged with the new issue #47826, which raised a security concern about a compromised version of LiteLLM (1.107.0) that was removed from PyPI. Overall, it was a busy day with important updates and a critical security alert.

#### 🚀 New Releases
- [v1.106.2](https://github.com/BerriAI/litellm/releases/tag/v1.106.2) v1.106.2
- [v1.105.3](https://github.com/BerriAI/litellm/releases/tag/v1.105.3) v1.105.3
- [v1.104.5](https://github.com/BerriAI/litellm/releases/tag/v1.104.5) v1.104.5
- [v1.103.7](https://github.com/BerriAI/litellm/releases/tag/v1.103.7) v1.103.7

#### ✅ Merged PRs
- [#47771](https://github.com/BerriAI/litellm/pull/47771) refactor(inference): rename RouteError to Error
- [#47581](https://github.com/BerriAI/litellm/pull/47581) docs: rename security.md to SECURITY.md, use security@berri.ai contact
- [#47818](https://github.com/BerriAI/litellm/pull/47818) refactor(types): replace Any with proven types in 50 files
- [#39542](https://github.com/BerriAI/litellm/pull/39542) fix(proxy): stop answering with the literal string "None" on the spend and management routes
- [#45795](https://github.com/BerriAI/litellm/pull/45795) fix(router): unregister strategy selectors from global callbacks on discard
- [#47815](https://github.com/BerriAI/litellm/pull/47815) fix(proxy): forward dispatched_call_type through _failure_usage_to_lift
- [#46754](https://github.com/BerriAI/litellm/pull/46754) fix(responses)!: round-trip Anthropic compaction blocks as compaction items
- [#47737](https://github.com/BerriAI/litellm/pull/47737) fix(batches)!: backport P0 batch-cost, pricing and translation fixes to stable/1.105.x for v1.105.3
- [#47695](https://github.com/BerriAI/litellm/pull/47695) fix(proxy): backport LIT-145 spend and cost fixes to stable/1.106.x for v1.106.2
- [#47732](https://github.com/BerriAI/litellm/pull/47732) fix(batches)!: backport P0 batch-cost, pricing and translation fixes to stable/1.103.x for v1.103.7
- [#47714](https://github.com/BerriAI/litellm/pull/47714) chore(backport): billing fixes for LIT-145 and aiohttp 3.14.4 onto stable/1.105.x (1.105.3)
- [#47744](https://github.com/BerriAI/litellm/pull/47744) fix(count_tokens): backport Bedrock Mantle count_tokens fallback to stable/1.105.x
- [#47736](https://github.com/BerriAI/litellm/pull/47736) fix(batches)!: backport P0 batch-cost, pricing and translation fixes to stable/1.106.x for v1.106.2
- [#47805](https://github.com/BerriAI/litellm/pull/47805) chore: rebuild Admin UI bundle for stable/1.104.x (v1.104.6)
- [#47804](https://github.com/BerriAI/litellm/pull/47804) fix(mcp): backport per-user auth MCP tool listing to stable/1.105.x
- [#47763](https://github.com/BerriAI/litellm/pull/47763) fix(proxy): backport the LIT-145 spend tracking fixes to stable/1.103.x and bump to 1.103.7
- [#47743](https://github.com/BerriAI/litellm/pull/47743) fix(count_tokens): backport Bedrock Mantle count_tokens fallback to stable/1.103.x
- [#47705](https://github.com/BerriAI/litellm/pull/47705) feat(count_tokens)!: reject known-wrong local estimates with HTTP 400 on stable/1.104.x
- [#47742](https://github.com/BerriAI/litellm/pull/47742) fix(count_tokens): backport Bedrock Mantle 404 fallback to stable/1.106.x
- [#47685](https://github.com/BerriAI/litellm/pull/47685) fix(count_tokens): backport #47173 and #47353 to stable/1.104.x for v1.104.5
- [#47802](https://github.com/BerriAI/litellm/pull/47802) fix: backport the 1.103.x parity fixes and #43600 to stable/1.104.x for v1.104.6
- [#47535](https://github.com/BerriAI/litellm/pull/47535) fix(llms): join api_base and route with one shared helper
- [#47726](https://github.com/BerriAI/litellm/pull/47726) fix(batches)!: backport P0 batch-cost, pricing and translation fixes to stable/1.104.x for v1.104.6
- [#47718](https://github.com/BerriAI/litellm/pull/47718) fix(proxy): backport the LIT-145 spend tracking fixes to stable/1.104.x for v1.104.6
- [#47727](https://github.com/BerriAI/litellm/pull/47727) fix(router): normalize native Responses latency per output token
- [#47790](https://github.com/BerriAI/litellm/pull/47790) fix(timing): carry litellm_received_at across to a planted litellm_metadata bucket so the overhead header stays anchored at receive time
- [#47758](https://github.com/BerriAI/litellm/pull/47758) test(perf): ramp the load cases until the pod stops keeping up and floor sustained_rps
- [#45194](https://github.com/BerriAI/litellm/pull/45194) fix(router): log each dropped /v1/messages attempt through its own logging copy and open the retry without its usage
- [#47785](https://github.com/BerriAI/litellm/pull/47785) chore(cost-map): add fireworks muse spark open priority prices from the pricing page
- [#47784](https://github.com/BerriAI/litellm/pull/47784) fix(pricing): update baseten reflection/Beam-1.0 prices from the models API
- [#31915](https://github.com/BerriAI/litellm/pull/31915) feat(vertex-ai)!: support gemini 3.1 flash tts
- [#45893](https://github.com/BerriAI/litellm/pull/45893) feat(ui): add Delete to the guardrail detail page and share one delete flow with the table row
- [#47779](https://github.com/BerriAI/litellm/pull/47779) feat(azure): add azure_ai/MAI-Code-1.1-Flash
- [#47700](https://github.com/BerriAI/litellm/pull/47700) fix(cli): send pi's session id from lite pi so sessions group and stick
- [#47651](https://github.com/BerriAI/litellm/pull/47651) ci(integration): keep the MCP SDK1 peer on mcp 1.x and autovacuum off the size cleanup test
- [#47757](https://github.com/BerriAI/litellm/pull/47757) test(perf): emit per-location seconds, offending locations and the ten longest holds as event_loop_stalls breakdowns
- [#47445](https://github.com/BerriAI/litellm/pull/47445) fix(responses): bill every round of a streamed MCP auto-execute on one spend row
- [#47542](https://github.com/BerriAI/litellm/pull/47542) feat(gemini): set the long decode budget for requests with no output limit from LITELLM_GEMINI_DEFAULT_MAX_OUTPUT_TOKENS
- [#47719](https://github.com/BerriAI/litellm/pull/47719) feat(loadtest): sustained-rate workloads at 100, 500 and 1,000 rps
- [#47752](https://github.com/BerriAI/litellm/pull/47752) test(perf): add chat_completions_2rps, responses_2rps and messages_2rps direct vs bridge cases
- [#47109](https://github.com/BerriAI/litellm/pull/47109) fix(streaming)!: send the include_usage chunk with an empty choices array
- [#47746](https://github.com/BerriAI/litellm/pull/47746) test(perf): allowlist anyio TaskHandle._run_coro in event_loop_stalls
- [#44995](https://github.com/BerriAI/litellm/pull/44995) test(fine_tuning): pin that api_version never reaches the OpenAI client
- [#47079](https://github.com/BerriAI/litellm/pull/47079) ci(cost map): delete the model prices JSON schema file
- [#47586](https://github.com/BerriAI/litellm/pull/47586) fix(token_counter): stop re-downloading a HuggingFace tokenizer after a failed download
- [#47706](https://github.com/BerriAI/litellm/pull/47706) test(perf): emit event_loop_stalls hold counts as perf_ JUnit properties

#### 🐛 New Issues
- [#47826](https://github.com/BerriAI/litellm/issues/47826) [SECURITY] litellm 1.107.0 compromised (PyPI removed; Docker latest/main-stable removed): cook.pth credential stealer + sitecustomize RCE loader, built from lookalike repo Berri-AI/litellm `llm translation` 💬13
- [#47825](https://github.com/BerriAI/litellm/issues/47825) [Bug]: Same-name deployments still load-balanced across access groups when the key's team has the other group (key-level access group restriction ignored) — follow-up to #18333 `bug` `llm translation` 💬2
- [#47777](https://github.com/BerriAI/litellm/issues/47777) [Bug]: key router_settings.fallbacks are ignored on /v1/images/generations (chat completions honors them) `llm translation` 💬2
- [#47723](https://github.com/BerriAI/litellm/issues/47723) [Bug]: Anthropic count_tokens local fallback rejects tool_addition and tool_removal blocks `llm translation` 💬2
- [#47841](https://github.com/BerriAI/litellm/issues/47841) [Bug]: spend_logs_metadata is never recorded for /v1beta/interactions `llm translation` 💬2
- [#47837](https://github.com/BerriAI/litellm/issues/47837) HTTPHandler query re-parse breaks S3/SigV4 presigned image URLs (403) `llm translation` 💬2
- [#47824](https://github.com/BerriAI/litellm/issues/47824) [Bug]: AsyncHTTPHandler.post resends the request after ConnectError/RemoteProtocolError even with max_retries=0 💬2
- [#47884](https://github.com/BerriAI/litellm/issues/47884) [Bug]: gpt-5.6-{sol,luna,terra} and azure gpt-6-astra missing supports_max_reasoning_effort in model map `llm translation` 💬1
- [#47797](https://github.com/BerriAI/litellm/issues/47797) [Feature]: no openrouter provider for rerank - litellm.rerank cannot reach OpenRouter's /api/v1/rerank `llm translation` 💬1
- [#47881](https://github.com/BerriAI/litellm/issues/47881) [Bug]: encrypted_content_affinity gives one streamed Responses item two IDs, so clients replay duplicate reasoning items `llm translation` 💬1
- [#47862](https://github.com/BerriAI/litellm/issues/47862) [Bug]: TypeError in litellm/proxy/utils.py `bug` `llm translation` `claude code` 💬1
- [#47842](https://github.com/BerriAI/litellm/issues/47842) [Bug]: v1.107.0 tag declares version 1.108.0 in pyproject.toml 💬1
- [#47839](https://github.com/BerriAI/litellm/issues/47839) DashScope request_id is missing from the final error message `llm translation` 💬1
- [#47831](https://github.com/BerriAI/litellm/issues/47831) [Bug]: RouterRateLimitError in litellm/router.py `bug` `llm translation` 💬1
- [#47796](https://github.com/BerriAI/litellm/issues/47796) [Bug]: rerank response transform drops the provider's usage block, so a provider-reported cost becomes a fake 0.0 `llm translation` 💬1
- [#47829](https://github.com/BerriAI/litellm/issues/47829) [Bug]: one deployment's max_input_tokens / max_output_tokens overwrite the shared cost-map entry for every deployment of the same provider model `llm translation` 💬1
- [#47828](https://github.com/BerriAI/litellm/issues/47828) [Bug]: Chat completions TPM reservation ignores image/audio content blocks (messages path counts text only) 💬1
- [#47822](https://github.com/BerriAI/litellm/issues/47822) [Bug]: httpx.Timeout connect timeout ignored for non-OpenAI providers (e.g. mistral): supports_httpx_timeout allowlist too narrow `bug` `llm translation` 💬1
- [#47814](https://github.com/BerriAI/litellm/issues/47814) [Bug]: Responses TPM reservation counts base64 in custom_tool_call_output images as text and doubles the estimate `bug` 💬1
- [#47808](https://github.com/BerriAI/litellm/issues/47808) [Bug]: LiteLLM UI Logs: unable to query logs when model request ID contains special characters `bug` 💬1
- [#47725](https://github.com/BerriAI/litellm/issues/47725) [Bug]: Unchanged custom pricing repeatedly invalidates model-info caches on the request path in v1.106.0 `llm translation` 💬1
- [#47888](https://github.com/BerriAI/litellm/issues/47888) [Bug]: provider: litellm_fallback create fails with "Root object was present, but now absent" with multiple proxy replicas
- [#47887](https://github.com/BerriAI/litellm/issues/47887) v1.83.14-stable arm64 image contains amd64 binaries (exec format error on ARM Linux)
- [#47856](https://github.com/BerriAI/litellm/issues/47856) [Bug]: /toolset/{name}/mcp tools/list loses URL scope after catalog authority refresh (1.106.x regression) `bug`
- [#47799](https://github.com/BerriAI/litellm/issues/47799) [Bug]: the per-call success callback is dispatched on a background executor, so post-call cost accounting races and loses figures `llm translation`
- [#47798](https://github.com/BerriAI/litellm/issues/47798) [Bug]: custom_pricing is ignored on the rerank and embedding cost paths, so unregistered models bill as $0 / None `llm translation`
- [#47775](https://github.com/BerriAI/litellm/issues/47775) [Bug]: Router.text_completion (sync) sends the model_name alias to the provider and skips retries/fallbacks

#### 🔒 Closed Issues
- [#17475](https://github.com/BerriAI/litellm/issues/17475) [Bug]: LiteLLMProxy no longer show the list of models to the users
- [#33410](https://github.com/BerriAI/litellm/issues/33410) Upgrade yarl for URL parser security fix
- [#33114](https://github.com/BerriAI/litellm/issues/33114) [Feature]: GPT-5 models should use /v1/responses endpoint instead of /v1/chat/completions
- [#32683](https://github.com/BerriAI/litellm/issues/32683) [Bug]: Bedrock count_tokens returns 400 for cross-region inference-profile models — prefix stripped before request
- [#20571](https://github.com/BerriAI/litellm/issues/20571) feat(helm): add Helm/ArgoCD hook annotations to ServiceAccount if using migration Job
- [#32962](https://github.com/BerriAI/litellm/issues/32962) [Bug]: validate_environment returns a false all-clear for zai models when ZAI_API_KEY is unset
- [#46173](https://github.com/BerriAI/litellm/issues/46173) [Bug]: Error 500 using Claude Code
- [#37358](https://github.com/BerriAI/litellm/issues/37358) [Bug]: Spend logs only record the first tool call and first LLM round for chained MCP calls on streaming /responses (require_approval="never")
- [#28539](https://github.com/BerriAI/litellm/issues/28539) Custom_openaiException - AsyncCompletions.create() got an unexpected keyword argument 'client_metadata'
- [#33511](https://github.com/BerriAI/litellm/issues/33511) [Bug]: raw_gen_ai_request is started after its litellm_request parent has ended
- [#33516](https://github.com/BerriAI/litellm/issues/33516) fix the problem
- [#33521](https://github.com/BerriAI/litellm/issues/33521) [Bug]: Vertex Veo video status/content fail with `vertex_project is required`; client params ignored; #18854 missing from main
- [#47563](https://github.com/BerriAI/litellm/issues/47563) [Bug]: Vertex AI claude-opus-5-5 rejects response_format json_schema: LiteLLM sends the deprecated `output_format` instead of `output_config.format`
- [#33200](https://github.com/BerriAI/litellm/issues/33200) [Feature]: Adding concurrency on the REST /v1/mcp/tools endpoint
- [#41456](https://github.com/BerriAI/litellm/issues/41456) [Bug]: /v1/responses -> Anthropic bridge drops compaction output item and ignores compaction input items (context_management is request-side only)
- [#44914](https://github.com/BerriAI/litellm/issues/44914) [Bug]: Router.discard leaves least-busy strategy handlers in global callback lists
- [#47710](https://github.com/BerriAI/litellm/issues/47710) [Feature]: Support Foundry Local SDK 2.2.0

### Unsloth (`unslothai/unsloth`)

**Stars:** 78,378 · **Open issues:** 312 · **Last push:** <1h ago

On October 22, 2026, there were no new releases for Unsloth, but several important changes were merged, including enhancements to the MoE (Mixture of Experts) fallback kernel configurations (#14576) and improvements in measuring block dequantization peak performance (#14579). Notable updates also included adjustments to the MoE autotune cache for better device capability comparisons (#14578) and refinements to the Studio that allow for clearer AMD NPU setup messages (#14524). Among new issues, the bug report #14439 highlights a training failure with the FastDecisionModel for Gemma-3, indicating flat loss and chance-level accuracy, which could impact user experience significantly. Overall, the day focused on optimization and resolving performance-related issues.

#### ✅ Merged PRs
- [#14576](https://github.com/unslothai/unsloth/pull/14576) MoE fallback kernel configs: fit the device shared memory for float32 operands
- [#14579](https://github.com/unslothai/unsloth/pull/14579) Measure the block dequant peak in a fresh process
- [#14578](https://github.com/unslothai/unsloth/pull/14578) MoE autotune cache: compare device capability as a tuple so saved configs are reused
- [#14577](https://github.com/unslothai/unsloth/pull/14577) Skip the compiled MoE autotune test on the recorded real CUDA, not the spoofable probe
- [#14571](https://github.com/unslothai/unsloth/pull/14571) Give the startup transfer budget headroom again after #14524 set it to its own build
- [#14565](https://github.com/unslothai/unsloth/pull/14565) Studio: pin the master-982 stable-diffusion.cpp prebuilt so MOSS-Image GGUFs load
- [#14567](https://github.com/unslothai/unsloth/pull/14567) Pin Lemonade 2026.43.3
- [#14563](https://github.com/unslothai/unsloth/pull/14563) Studio Images: per-generation Shift for flow-matching models and SDXL textual inversion embeddings
- [#14524](https://github.com/unslothai/unsloth/pull/14524) Studio: show the AMD NPU by default again, with a clearer setup notice
- [#14561](https://github.com/unslothai/unsloth/pull/14561) Take the least of three RssAnon peaks in the block dequant host RAM check test
- [#14551](https://github.com/unslothai/unsloth/pull/14551) Studio: Z-Image CFG split under static step skip and CFG-parallel
- [#14559](https://github.com/unslothai/unsloth/pull/14559) MoE autotune: run the kernel tuning eagerly when called from a compiled block
- [#14560](https://github.com/unslothai/unsloth/pull/14560) Count the context ceiling's per-device reserve gate from #14492 in the compute buffer wiring test
- [#14508](https://github.com/unslothai/unsloth/pull/14508) Studio Images: paste generation parameters, inpaint mask blur and only-masked area, seed buttons
- [#14550](https://github.com/unslothai/unsloth/pull/14550) MoE grouped GEMM: per-expert dW kernel
- [#14492](https://github.com/unslothai/unsloth/pull/14492) Studio: discrete-first GGUF placement keeps explicit device picks, matching context ceiling; in-process Rosetta check
- [#14491](https://github.com/unslothai/unsloth/pull/14491) Studio: FLUX.3 upsampler pin follows torch's vendor, single-GPU hosts launch as before, non-blocking Vulkan probe
- [#14545](https://github.com/unslothai/unsloth/pull/14545) Load the real loader_utils helpers into the precision conflict test harness
- [#14493](https://github.com/unslothai/unsloth/pull/14493) XPU bf16 on the current device, keep explicit bf16 on XPU, MLX full finetuning keeps its default dtype
- [#14510](https://github.com/unslothai/unsloth/pull/14510) Studio: refuse a single-file diffusion load that would exhaust host RAM instead of crashing
- [#14544](https://github.com/unslothai/unsloth/pull/14544) Format the grouped GEMM single-flight wrapper so pre-commit.ci passes again
- [#14535](https://github.com/unslothai/unsloth/pull/14535) Keep two Backend CI tests valid on uv 0.13 and on runners with no accelerator
- [#14541](https://github.com/unslothai/unsloth/pull/14541) Studio: Z-Image guided steps run at the guidance-off batch so turning CFG on recompiles nothing
- [#14542](https://github.com/unslothai/unsloth/pull/14542) Wait for the Unsloth-managed folder label in the project folders browser smoke
- [#14528](https://github.com/unslothai/unsloth/pull/14528) Studio diffusion: compile group-offloaded blocks below their hooks on the deferred profile and for planned-offload video
- [#14494](https://github.com/unslothai/unsloth/pull/14494) Jetson / Rosetta follow-ups: an explicit GPU index beats the Jetson CPU record, JetPack 7 off the CPU note
- [#14490](https://github.com/unslothai/unsloth/pull/14490) MoE grouped GEMM: share autotuners across identical cards; fix the TMA test on one-GPU hosts and macOS
- [#14536](https://github.com/unslothai/unsloth/pull/14536) NVFP4 fused dX: skip split K on sm89 when the output already fills the GPU
- [#14532](https://github.com/unslothai/unsloth/pull/14532) Cast float32 activations into the float16 projections of Falcon-H1 / Nemotron-H fp16 loads
- [#14531](https://github.com/unslothai/unsloth/pull/14531) Load FP8 checkpoints dequantized to 16-bit on GPUs below sm89
- [#13860](https://github.com/unslothai/unsloth/pull/13860) Studio diffusion: place bf16 and GGUF / int8 packed denoisers from their learned peak
- [#14516](https://github.com/unslothai/unsloth/pull/14516) Dequantize fine-grained fp8 checkpoints on a 16bit load in FastLanguageModel, and save them as 16bit
- [#13847](https://github.com/unslothai/unsloth/pull/13847) Studio diffusion: key learned peaks on the unsloth mirror a fresh install downloads
- [#14512](https://github.com/unslothai/unsloth/pull/14512) QAT: qat_scheme = "nvfp4", and strip NVFP4 / MX QAT linears before saving
- [#13862](https://github.com/unslothai/unsloth/pull/13862) Studio: whisper.cpp updates ride along with llama.cpp instead of opening the update card
- [#14343](https://github.com/unslothai/unsloth/pull/14343) unsloth start openclaw: stop writing the legacy exec-approvals.json that OpenClaw 2026.8.1+ refuses to run with
- [#14130](https://github.com/unslothai/unsloth/pull/14130) Studio: opt-in REAP expert pruning on the Export page
- [#14511](https://github.com/unslothai/unsloth/pull/14511) Studio: send the TTS language to Supertonic and add a Speak language picker
- [#13834](https://github.com/unslothai/unsloth/pull/13834) Add REAP expert pruning for MoE models
- [#14522](https://github.com/unslothai/unsloth/pull/14522) Tests: follow #14473's Unsloth wording in the sandbox, xformers and autoopt parity checks
- [#14520](https://github.com/unslothai/unsloth/pull/14520) Windows installer: restore the split-layout comment in setup.ps1 (Defender ML false positive)
- [#14518](https://github.com/unslothai/unsloth/pull/14518) FSDP2 gloo tests: stub every helper the trainer wrapper calls, not a fixed list
- [#14340](https://github.com/unslothai/unsloth/pull/14340) CLI: --parallel help describes the shared KV cache
- [#14517](https://github.com/unslothai/unsloth/pull/14517) Fix main's red CI after #14437, #14455 and #14473
- [#14507](https://github.com/unslothai/unsloth/pull/14507) Copy uv constraint files to a space-free path on Windows volumes without 8.3 names
- [#14477](https://github.com/unslothai/unsloth/pull/14477) Studio: route krea2 GGUFs to Images instead of opening them as chat models
- [#14497](https://github.com/unslothai/unsloth/pull/14497) Studio diffusion: keep a model-offloaded denoiser's step eager instead of re-recording its CUDA graph every render
- [#14489](https://github.com/unslothai/unsloth/pull/14489) GRPO: opt-in rollout logprobs as the old policy (UNSLOTH_GRPO_ROLLOUT_LOGPROBS_AS_OLD)
- [#14498](https://github.com/unslothai/unsloth/pull/14498) Cross entropy: 16384 / 8 warp chunked forward on T4 and A100
- [#14495](https://github.com/unslothai/unsloth/pull/14495) Dequantize FP8 weights in the activation dtype for fp16 LoRA
- [#14378](https://github.com/unslothai/unsloth/pull/14378) Keep has_internet from setting the process-wide socket timeout
- [#14065](https://github.com/unslothai/unsloth/pull/14065) Block compile: test that checkpoint early-stop does not demote the layer
- [#14504](https://github.com/unslothai/unsloth/pull/14504) Tests: real-accelerator skip guards and utf-8 read in the gpt-oss and gc-skip tests
- [#14389](https://github.com/unslothai/unsloth/pull/14389) Train vision and audio models from unsloth train
- [#14463](https://github.com/unslothai/unsloth/pull/14463) Studio: media decodes open no protocols, Data Recipe names stay inside their folder
- [#14354](https://github.com/unslothai/unsloth/pull/14354) Studio: make CPU RAG embedding fast on Windows ROCm torch and honour Windows CPU affinity
- [#14459](https://github.com/unslothai/unsloth/pull/14459) Studio: login limiter and keyless access behind a reverse proxy
- [#14357](https://github.com/unslothai/unsloth/pull/14357) Studio: view, edit and turn off chat memory in Settings > Chat
- [#14355](https://github.com/unslothai/unsloth/pull/14355) Unsloth Studio / Desktop: keep floating panels where they were left across resizes, minimize and restarts
- [#14458](https://github.com/unslothai/unsloth/pull/14458) Studio: MCP widget approval cards show the arguments being sent
- [#14461](https://github.com/unslothai/unsloth/pull/14461) Studio: per-user temp folders, tighter tool sandbox grants, no UNC paths for managed accounts
- [#14483](https://github.com/unslothai/unsloth/pull/14483) Studio: same diffusion pixels on every B200 server for FLUX.2 Klein and Z-Image
- [#14283](https://github.com/unslothai/unsloth/pull/14283) Studio: make Back in the browser panel work like a browser's
- [#14479](https://github.com/unslothai/unsloth/pull/14479) Studio diffusion: allow the multi-GPU layer split on discrete ROCm cards
- [#14365](https://github.com/unslothai/unsloth/pull/14365) Studio: let the owner share a connection with every account
- [#14450](https://github.com/unslothai/unsloth/pull/14450) FP8 block dequant: ragged / rectangular e4m3fn blocks take the byte decoder on every NVIDIA GPU (4-16x)
- [#14128](https://github.com/unslothai/unsloth/pull/14128) Studio: picking a preset no longer overwrites a model's remembered sampling
- [#14391](https://github.com/unslothai/unsloth/pull/14391) Studio: keep lone asterisks and backticks in finished chat replies
- [#14436](https://github.com/unslothai/unsloth/pull/14436) Studio: trim the runtime update card to one summary line and two actions
- [#14480](https://github.com/unslothai/unsloth/pull/14480) MoE grouped GEMM: accumulate expert dW into an existing param.grad
- [#14388](https://github.com/unslothai/unsloth/pull/14388) Sample Qwen3 models for the turn's thinking mode in unsloth chat
- [#14277](https://github.com/unslothai/unsloth/pull/14277) Studio: stop two Studio windows undoing each other's browser data
- [#14390](https://github.com/unslothai/unsloth/pull/14390) Studio: keep tools working after opening a chat file in its app
- [#14285](https://github.com/unslothai/unsloth/pull/14285) Studio: save files from download buttons inside browser panel pages
- [#14486](https://github.com/unslothai/unsloth/pull/14486) Studio: never walk init's descendants when stopping a server
- [#14402](https://github.com/unslothai/unsloth/pull/14402) Studio: honor completion-only training for audio VLMs
- [#14470](https://github.com/unslothai/unsloth/pull/14470) Dependabot: leave hand-kept pins to the version matrix and hold the GTK3 and deep-link crates
- [#13748](https://github.com/unslothai/unsloth/pull/13748) Fix: [Bug] Installer hard-codes PyPI.org instead of respecting PIP_INDEX_URL / UV_INDEX_URL
- [#14452](https://github.com/unslothai/unsloth/pull/14452) Studio: initialise the CUDA driver off the GIL so load-progress polls stay responsive
- [#14369](https://github.com/unslothai/unsloth/pull/14369) Studio: keep the chat model loaded when an API request loads a speech model
- [#14464](https://github.com/unslothai/unsloth/pull/14464) Desktop and Windows installer: browser-panel capture prompt, private ACL for a custom Studio home
- [#14460](https://github.com/unslothai/unsloth/pull/14460) Core: per-user fp8 cache, SyntheticDataKit binds vLLM to loopback
- [#14393](https://github.com/unslothai/unsloth/pull/14393) Studio: keep Insert > Symbol characters when reading Word files
- [#14478](https://github.com/unslothai/unsloth/pull/14478) Studio: Z-Image unload test works on diffusers without ROPE_PER_DEVICE
- [#14475](https://github.com/unslothai/unsloth/pull/14475) Studio: count reclaimable active file cache as available host RAM under a cgroup limit
- [#14438](https://github.com/unslothai/unsloth/pull/14438) Studio: point Desktop Chat only users at Repair installation on the Export page
- [#14392](https://github.com/unslothai/unsloth/pull/14392) Studio: train the system column of an Alpaca dataset
- [#14359](https://github.com/unslothai/unsloth/pull/14359) Studio Images: say why LoRAs vanish after Speed=Auto compiles, offer a reload
- [#14468](https://github.com/unslothai/unsloth/pull/14468) Bump the cargo-tauri group in /studio/src-tauri with 26 updates
- [#14360](https://github.com/unslothai/unsloth/pull/14360) Studio: let browser pages open target=_blank links and show alerts
- [#14455](https://github.com/unslothai/unsloth/pull/14455) Unsloth Studio: redesigned API page, multi-model support and a Run settings fix
- [#14471](https://github.com/unslothai/unsloth/pull/14471) Studio: one slider look everywhere, filled with the accent
- [#14462](https://github.com/unslothai/unsloth/pull/14462) Studio: managed accounts keep the configured Decision checkpoint; signed-out Hub relay hides upstream errors
- [#14364](https://github.com/unslothai/unsloth/pull/14364) Studio: truncate over-length /v1/embeddings inputs instead of failing
- [#14352](https://github.com/unslothai/unsloth/pull/14352) unsloth start dsh: warn when the loaded context leaves replies no room
- [#14473](https://github.com/unslothai/unsloth/pull/14473) Call the app Unsloth or Unsloth Studio, never a bare Studio
- [#14437](https://github.com/unslothai/unsloth/pull/14437) Studio and Core: close remote-code gate gaps in Sentence Transformers, GGUF export, scans and tokenizer paths
- [#14428](https://github.com/unslothai/unsloth/pull/14428) Studio: managed-account paths are checked as they are opened
- [#14467](https://github.com/unslothai/unsloth/pull/14467) Bump the npm-oxc-validator group in /studio/backend/core/data_recipe/oxc-validator with 3 updates
- [#14404](https://github.com/unslothai/unsloth/pull/14404) Gradient checkpointing: checkpoint_skip_layers = "auto" and UNSLOTH_GC_KEEP_LAYERS
- [#14403](https://github.com/unslothai/unsloth/pull/14403) Honour every_n_layers and drop redundant offload in gradient_checkpointing_enable
- [#14456](https://github.com/unslothai/unsloth/pull/14456) Studio: Projects new-chat button, Projects home in the sidebar menu, even menu padding
- [#14427](https://github.com/unslothai/unsloth/pull/14427) Studio: keep diagrams, redirect links and approval cards honest
- [#14454](https://github.com/unslothai/unsloth/pull/14454) Studio: show the Auto download reason only when it falls back to HTTPS
- [#14429](https://github.com/unslothai/unsloth/pull/14429) Studio: harden the tool sandbox around host launches, probes and workdir paths
- [#14451](https://github.com/unslothai/unsloth/pull/14451) Studio Train: clearer selected tabs, toggles and target modules in dark mode
- [#14448](https://github.com/unslothai/unsloth/pull/14448) Studio diffusion: hand compiled blocks the recorded tensor kind on graphless steps (no recompile on a new prompt length)
- [#14338](https://github.com/unslothai/unsloth/pull/14338) Studio: Linux torch 2.10 to 2.12 take our causal-conv1d and mamba-ssm wheels
- [#14449](https://github.com/unslothai/unsloth/pull/14449) Installers (ROCm on WSL): fetch the helper from the commit with the LD_LIBRARY_PATH fix
- [#14423](https://github.com/unslothai/unsloth/pull/14423) Studio: tighten managed-account tool confinement
- [#14434](https://github.com/unslothai/unsloth/pull/14434) Studio: approval waits free their slot, Deep Research honours --disable-tools, first-run shutdown survives a read error
- [#13835](https://github.com/unslothai/unsloth/pull/13835) Bump the actions group across 1 directory with 8 updates
- [#13832](https://github.com/unslothai/unsloth/pull/13832) Bump the npm-oxc-validator group in /studio/backend/core/data_recipe/oxc-validator with 3 updates
- [#14441](https://github.com/unslothai/unsloth/pull/14441) Dependabot: hold cairo-rs and windows-core with the GTK3 / WebView2 pins
- [#14440](https://github.com/unslothai/unsloth/pull/14440) ROCm: eager batch-1 NF4 decode takes the Triton GEMV (1.8x decode on gfx1151)
- [#14432](https://github.com/unslothai/unsloth/pull/14432) Studio: managed accounts cannot use another account's loaded model or export worker
- [#14430](https://github.com/unslothai/unsloth/pull/14430) Studio: managed dataset media decodes stay on readable files, and Arrow data files are validated
- [#14426](https://github.com/unslothai/unsloth/pull/14426) Studio: harden the server against stalled bodies, long login names, readable logs and managed-account fetches
- [#14424](https://github.com/unslothai/unsloth/pull/14424) Studio: harden Data Recipe engine inputs
- [#14422](https://github.com/unslothai/unsloth/pull/14422) Studio: retire the seeded password on Desktop and keep API callers on Sandbox High
- [#14433](https://github.com/unslothai/unsloth/pull/14433) Installers (ROCm on WSL): no empty LD_LIBRARY_PATH entry in the profile drop-in
- [#14412](https://github.com/unslothai/unsloth/pull/14412) Studio: split one diffusion denoiser across GPUs by block ranges
- [#14435](https://github.com/unslothai/unsloth/pull/14435) Studio diffusion: match family keywords only on a local model's own path, and undo the torch 2.13 slice patch in the speed tests
- [#14420](https://github.com/unslothai/unsloth/pull/14420) Studio diffusion: VAE OOM under a component split, expanded timesteps in the CFG routers, and test fixes
- [#14421](https://github.com/unslothai/unsloth/pull/14421) Studio Hub: list every image and video model under Recommended
- [#14400](https://github.com/unslothai/unsloth/pull/14400) gpt-oss: load_in_4bit from a BF16 checkpoint no longer loads random experts and router
- [#14417](https://github.com/unslothai/unsloth/pull/14417) RoPE: multi-head tiles, Q and K in one launch, no clones (2-2.7x per call)
- [#14425](https://github.com/unslothai/unsloth/pull/14425) Tests: run the precision template in one namespace, keep the block-compile packing test off leaked env

#### 🐛 New Issues
- [#14439](https://github.com/unslothai/unsloth/issues/14439) [Bug] FastDecisionModel (Clef head): Gemma-3 doesn't train — flat loss, chance-level accuracy `feature request` `bug` 💬3
- [#14519](https://github.com/unslothai/unsloth/issues/14519) [Bug] Long chats stall before inference in CPU conversation-archive embeddings; Stop does not cancel archiving 💬2
- [#14502](https://github.com/unslothai/unsloth/issues/14502) [Feature] Add sub-agents `feature request` 💬1
- [#14481](https://github.com/unslothai/unsloth/issues/14481) [Bug] Unsloth Studio does not expose or forward the TTS language setting (at least for Supertonic 3) `feature request` `bug` 💬1
- [#14509](https://github.com/unslothai/unsloth/issues/14509) [Feature] allow 'reply finish' notification to be clickable and take you to completed conversation `feature request` 💬1
- [#14487](https://github.com/unslothai/unsloth/issues/14487) [Bug] potential memory leak Drive C loses 200-400 mb after every use of unsloth with no way to clear residual data `feature request` `bug` 💬1
- [#14474](https://github.com/unslothai/unsloth/issues/14474) [Bug] Custom Krea2 models showing, but crashing the app or not loading `feature request` `bug` 💬1
- [#14582](https://github.com/unslothai/unsloth/issues/14582) [Feature] Verbose UI `feature request`
- [#14572](https://github.com/unslothai/unsloth/issues/14572) [Feature] Unsloth Studio / Desktop: offer flow-matching samplers on the Images page, and pass the sampler to stable-diffusion.cpp
- [#14553](https://github.com/unslothai/unsloth/issues/14553) [Feature] New 35b MoE beast, or cap ? `feature request`
- [#14547](https://github.com/unslothai/unsloth/issues/14547) [Bug] Studio Qwen3-ASR ignores the requested transcription language in the mtmd backend
- [#14523](https://github.com/unslothai/unsloth/issues/14523) [Feature] Agent Workspace tab for Multi-Agent Swarms, Sub-Agent `feature request`
- [#14513](https://github.com/unslothai/unsloth/issues/14513) Studio: GGUF loads can crash the server on Windows instead of taking the low-memory route
- [#14506](https://github.com/unslothai/unsloth/issues/14506) [Bug] Leave original model selected (by default) when multiple models + multiple conversations are loaded `feature request` `bug`
- [#14501](https://github.com/unslothai/unsloth/issues/14501) [Feature] add local inference hardness engine for automated, self-correcting executions `feature request`
- [#14485](https://github.com/unslothai/unsloth/issues/14485) [Feature] Support custom domains for Cloudflare Remote Access in Unsloth Studio `feature request`
- [#14484](https://github.com/unslothai/unsloth/issues/14484) [Feature] support automatic split hot/cold MoE experts on GPU and CPU `feature request`

#### 🔒 Closed Issues
- [#14063](https://github.com/unslothai/unsloth/issues/14063) Block compile breaks checkpoint recomputation on distributed runs: CheckpointError in the backward of step 1
- [#14306](https://github.com/unslothai/unsloth/issues/14306) False positive scan
- [#13737](https://github.com/unslothai/unsloth/issues/13737) [Bug] Installer hard-codes PyPI.org instead of respecting PIP_INDEX_URL / UV_INDEX_URL
- [#10699](https://github.com/unslothai/unsloth/issues/10699) [Bug] Studio CLI (Windows): unsloth start codex always fails with 'stdout is not a terminal' - agent TUI receives a piped stdout
- [#14502](https://github.com/unslothai/unsloth/issues/14502) [Feature] Add sub-agents
- [#14481](https://github.com/unslothai/unsloth/issues/14481) [Bug] Unsloth Studio does not expose or forward the TTS language setting (at least for Supertonic 3)
- [#13944](https://github.com/unslothai/unsloth/issues/13944) [Bug] Cold padding/packed mask cache fails FlexAttention capture with gb0067
- [#14068](https://github.com/unslothai/unsloth/issues/14068) [Bug] Sampling settings gets corrupted on preset save.
- [#14114](https://github.com/unslothai/unsloth/issues/14114) LORA support for t2i models
- [#14267](https://github.com/unslothai/unsloth/issues/14267) [Bug] Diffusion unified-memory guard blocks Qwen-Image; add persistent desktop "Load anyway" override
- [#14370](https://github.com/unslothai/unsloth/issues/14370) [Feature] Unsloth issue draft — `has_internet()` leaks a global 3 s socket timeout into the process
- [#14313](https://github.com/unslothai/unsloth/issues/14313) [Desktop] v0.1.909-beta: persistent CPU saturation during background RAG embedding after #13048
- [#14037](https://github.com/unslothai/unsloth/issues/14037) [Feature] allow long-term memory across separate conversations
- [#14330](https://github.com/unslothai/unsloth/issues/14330) Floating windows repositioning
- [#14339](https://github.com/unslothai/unsloth/issues/14339) [Bug] Some clicks in the integrated browser appear to do nothing.
- [#14196](https://github.com/unslothai/unsloth/issues/14196) [Feature] Add ability to share external connections
- [#14320](https://github.com/unslothai/unsloth/issues/14320) [Bug] Loading TTS model unloads the chat model
- [#14309](https://github.com/unslothai/unsloth/issues/14309) [Feature] Automatically adapt to the context window if the input is too large for embedding
- [#14315](https://github.com/unslothai/unsloth/issues/14315) [Bug] Mythos outputs 1 token in DSH and stops

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,157 · **Open issues:** 401 · **Last push:** 3h ago

On October 22, 2026, there were no new releases for AIBrix, but several critical bug fixes were merged, including enhancements to the kv cache management and the behavior of the ModelClaim engine. Notably, PR #3242 addressed an issue with republishing a KV cache pod's address upon changes, and PR #3214 ensured that input usage is preserved across Messages stream events. Additionally, PR #3213 enforced the default TPM for streamed requests, improving performance under specific conditions. Among newly reported issues, #3237 highlights a bug where ModelClaim console erroneously accepts launcher-owned engine flags formatted as `--flag=value`.

#### ✅ Merged PRs
- [#3242](https://github.com/vllm-project/aibrix/pull/3242) [Bug] Republish a KV cache pod's address when it changes under the same name
- [#3213](https://github.com/vllm-project/aibrix/pull/3213) [Bug] Enforce the default TPM for streamed requests
- [#3231](https://github.com/vllm-project/aibrix/pull/3231) [Bug] Charge vtc-basic user tokens when the route goes through the blend
- [#3200](https://github.com/vllm-project/aibrix/pull/3200) [Bug] Run the E+PD encode stage when a replica inflight cap is set
- [#3214](https://github.com/vllm-project/aibrix/pull/3214) [Bug] Preserve input usage across Messages stream events
- [#3230](https://github.com/vllm-project/aibrix/pull/3230) [Bug] Let the auto-blend weight env vars be set to 0
- [#3238](https://github.com/vllm-project/aibrix/pull/3238) [Bug] Handle other spellings of ModelClaim engine flags
- [#3171](https://github.com/vllm-project/aibrix/pull/3171) [Feat][API] Add ModelClaim SleepLowerPriority preemption policy
- [#3232](https://github.com/vllm-project/aibrix/pull/3232) [Bug] Judge KPA tolerance per pod for External and Domain totals
- [#3228](https://github.com/vllm-project/aibrix/pull/3228) [Bug] Do not call the runtime of a pod that is being deleted

#### 🐛 New Issues
- [#3237](https://github.com/vllm-project/aibrix/issues/3237) [Bug] ModelClaim console accepts launcher-owned engine flags written as --flag=value `kind/bug` `area/gateway` `area/website` `area/runtime` 💬4
- [#3236](https://github.com/vllm-project/aibrix/issues/3236) [Bug] vtc-basic maps users to pods by list index, but the gateway shuffles the list on every request `kind/bug` `area/gateway` 💬3
- [#3247](https://github.com/vllm-project/aibrix/issues/3247) [RFC]: Support asynchronous video generation in the Batch API `kind/feature` `area/batch` 💬1
- [#3243](https://github.com/vllm-project/aibrix/issues/3243) [Bug] A PodAutoscaler on a whole StormService ignores the pods of roles without pod groups `kind/bug` `area/orchestration` 💬1
- [#3241](https://github.com/vllm-project/aibrix/issues/3241) [Bug] kvcache-watcher keeps a cache pod's old address after the pod is recreated `kind/bug` `area/kv-cache` 💬1
- [#3239](https://github.com/vllm-project/aibrix/issues/3239) [Bug] kvcache-watcher drops a cache pod's slot ranges when the pod owns the first and last slot `kind/bug` `area/kv-cache` 💬1
- [#3235](https://github.com/vllm-project/aibrix/issues/3235) [Bug] KPA asks for one extra pod when the exact replica count is a whole number `kind/bug` 💬1

#### 🔒 Closed Issues
- [#3237](https://github.com/vllm-project/aibrix/issues/3237) [Bug] ModelClaim console accepts launcher-owned engine flags written as --flag=value
- [#3226](https://github.com/vllm-project/aibrix/issues/3226) [Bug] vtc-basic never charges a user's tokens under the default auto-blend
- [#3225](https://github.com/vllm-project/aibrix/issues/3225) [Bug] Setting an AIBRIX_ROUTING_AUTO_BLEND_*_WEIGHT env var to 0 does not disable the blend
- [#3227](https://github.com/vllm-project/aibrix/issues/3227) [Bug] KPA holds the replica count when an External/Domain total is within tolerance of one pod's target

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,242 · **Open issues:** 725 · **Last push:** <1h ago

On October 22, 2026, there were no new releases for the Semantic Router; however, several important pull requests were merged, including a fix in PR #5153 that discards model probes from exited process generations and PR #5253 which addresses input rejection for task-models during decision and System One deployments. Another notable enhancement was seen in PR #5257, which ensures tolerance for rounding in latency percentile assertions during tests. Among the newly reported issues, #5347 stands out, as it highlights a critical bug where the multi-model runtime accepts duplicate entries when names are omitted, leading to health status corruption.

#### ✅ Merged PRs
- [#5153](https://github.com/vllm-project/semantic-router/pull/5153) [Bug] Discard model probes from an exited process generation
- [#5253](https://github.com/vllm-project/semantic-router/pull/5253) [Bug] Reject task-model input on decision and System One deployments
- [#5257](https://github.com/vllm-project/semantic-router/pull/5257) [Test] Tolerate rounding in latency percentile assertions

#### 🐛 New Issues
- [#5347](https://github.com/vllm-project/semantic-router/issues/5347) [Bug] Multi-model runtime accepts duplicate and colliding model entries when name is omitted, causing silent shadowing and health status corruption `needs-acceptance` `wg/router-models-inference-runtime` 💬3
- [#5389](https://github.com/vllm-project/semantic-router/issues/5389) [Bug] CLI tests fail to collect on Python 3.10 because test_router_dockerfile.py imports tomllib `needs-acceptance` `wg/developer-experience-ecosystem` 💬1
- [#5341](https://github.com/vllm-project/semantic-router/issues/5341) [Bug] README agent harness guide link returns 404 `bug` `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬1
- [#5384](https://github.com/vllm-project/semantic-router/issues/5384) [Bug] Live agent-task benchmarks require debug-only x-vsr headers without sending x-vsr-debug `needs-acceptance` `wg/evaluation-quality`
- [#5396](https://github.com/vllm-project/semantic-router/issues/5396) [Bug] Streamed cache hits and fast responses collapse newlines and whitespace `needs-acceptance` `wg/data-plane-networking`
- [#5391](https://github.com/vllm-project/semantic-router/issues/5391) [Test] Validate Codex CLI subagent identity in Router Learning protection `needs-acceptance` `wg/mom-routing`
- [#5383](https://github.com/vllm-project/semantic-router/issues/5383) [Bug] classifyTurnOutcome never emits TurnToolError for structured tool-result failures `needs-acceptance` `wg/agentic-context`
- [#5382](https://github.com/vllm-project/semantic-router/issues/5382) [Bug] Looper session and replay accounting drop cache tokens and treat incomplete usage as complete `needs-acceptance` `wg/agentic-context`
- [#5381](https://github.com/vllm-project/semantic-router/issues/5381) [Bug] Session hydration bypasses the 50k router-memory cap and can overwrite newer local state `needs-acceptance` `wg/agentic-context`
- [#5378](https://github.com/vllm-project/semantic-router/issues/5378) [Epic] Serve coding-agent harnesses through the Router `needs-acceptance` `wg/agentic-context` `epic`
- [#5374](https://github.com/vllm-project/semantic-router/issues/5374) [Research] When does restarting a coding agent's task on a stronger model pay? `needs-acceptance` `research` `wg/router-models-inference-runtime`
- [#5362](https://github.com/vllm-project/semantic-router/issues/5362) [Research] Does a coding agent keep its success when its subagents run on a cheaper model? `needs-acceptance` `research` `wg/agentic-context`
- [#5361](https://github.com/vllm-project/semantic-router/issues/5361) [Feature] Replay recorded agent runs through the Router to see what it holds, switches and learns `enhancement` `needs-acceptance` `wg/evaluation-quality`
- [#5360](https://github.com/vllm-project/semantic-router/issues/5360) [Feature] Run Claude Code on Terminal-Bench tasks through the Router and report what happened per trial `enhancement` `needs-acceptance` `wg/evaluation-quality`
- [#5359](https://github.com/vllm-project/semantic-router/issues/5359) [Research] Score agent routing policies on recorded runs of several models `needs-acceptance` `research` `wg/evaluation-quality`
- [#5358](https://github.com/vllm-project/semantic-router/issues/5358) [Research] How much agent load a CPU KV tier and session-aware replica placement add `needs-acceptance` `research` `wg/data-plane-networking`
- [#5357](https://github.com/vllm-project/semantic-router/issues/5357) [Research] Measure prefix reuse and subagent boundaries in production coding-agent sessions `needs-acceptance` `research` `wg/agentic-context`
- [#5356](https://github.com/vllm-project/semantic-router/issues/5356) [Feature] Router Learning cost term on agent traffic: replay evidence for #3412 `enhancement` `needs-acceptance` `wg/mom-routing`
- [#5355](https://github.com/vllm-project/semantic-router/issues/5355) [Docs] Agent harness: keep agent runs on one model and on a warm prompt cache `needs-acceptance` `wg/developer-experience-ecosystem` `documentation`
- [#5354](https://github.com/vllm-project/semantic-router/issues/5354) [Feature] Recipe learning: choose a default model from agent-run outcomes `enhancement` `needs-acceptance` `wg/mom-routing`
- [#5353](https://github.com/vllm-project/semantic-router/issues/5353) [Bug] Routed reasoning with an enabled mode fails every request to a Messages backend `bug` `needs-acceptance` `wg/data-plane-networking`
- [#5352](https://github.com/vllm-project/semantic-router/issues/5352) [Bug] A vLLM backend cannot be declared for api_format anthropic `bug` `needs-acceptance` `wg/data-plane-networking`
- [#5351](https://github.com/vllm-project/semantic-router/issues/5351) [Bug] Claude Code's mid-conversation system messages break Chat backends whose template takes a system message only first `bug` `needs-acceptance` `wg/data-plane-networking`
- [#5350](https://github.com/vllm-project/semantic-router/issues/5350) [Feature] Let operators accept the tool-result failure loss so coding agents can use OpenAI-format backends `enhancement` `needs-acceptance` `wg/data-plane-networking`
- [#5349](https://github.com/vllm-project/semantic-router/issues/5349) [Bug] Anthropic ingress rejects two fields Claude Code sends, so every session starts with failed calls `bug` `needs-acceptance` `wg/data-plane-networking`
- [#5348](https://github.com/vllm-project/semantic-router/issues/5348) [Feature] Router Learning protection: hold each subagent on its own model `enhancement` `needs-acceptance` `wg/mom-routing`

#### 🔒 Closed Issues
- [#5256](https://github.com/vllm-project/semantic-router/issues/5256) [Bug] Exact percentile assertions fail with ARM64 floating-point rounding
- [#4969](https://github.com/vllm-project/semantic-router/issues/4969) [Bug] Milvus Router Memory ForgetByScope reports success when deletes fail
- [#5200](https://github.com/vllm-project/semantic-router/issues/5200) [Bug] Config: decision deployments accept a task-model `input` limit that nothing enforces
- [#5151](https://github.com/vllm-project/semantic-router/issues/5151) [Bug] In-flight model discovery can publish readiness from an exited process

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*