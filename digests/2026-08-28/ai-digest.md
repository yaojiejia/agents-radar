# 📡 AI Ecosystem Digest — 2026-08-28

> Generated 2026-08-28 03:05 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 143,213 | 15 | 5 | 0 | 2 |
| [OpenAI Codex](https://github.com/openai/codex) | 119,253 | 24 | 1 | 47 | 4 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 106,719 | 1 | 0 | 0 | 0 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,122 | 17 | 4 | 0 | 3 |
| [OpenCode](https://github.com/anomalyco/opencode) | 201,991 | 24 | 12 | 34 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 27,438 | 33 | 12 | 2 | 0 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 387,853 | 160 | 101 | 160 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 237,379 | 34 | 5 | 4 | 1 |
| [vLLM](https://github.com/vllm-project/vllm) | 90,255 | 33 | 17 | 48 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 32,588 | 18 | 19 | 63 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 125,987 | 25 | 2 | 23 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 179,590 | 12 | 3 | 4 | 1 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 57,431 | 28 | 23 | 81 | 0 |
| [Unsloth](https://github.com/unslothai/unsloth) | 75,000 | 22 | 49 | 42 | 1 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,042 | 1 | 0 | 1 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 5,357 | 17 | 10 | 11 | 0 |

---

## ✨ Highlights

- **Claude Code** released versions [v2.1.250](https://github.com/anthropics/claude-code/releases/tag/v2.1.250) and [v2.1.248](https://github.com/anthropics/claude-code/releases/tag/v2.1.248).
- **OpenAI Codex** had several releases, including [rust-v0.151.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.7), and merged a significant PR to include thread source in connection metadata [#41250](https://github.com/openai/codex/pull/41250).
- **OpenClaw** merged a PR to fix UI issues regarding session catalog refresh storms [#123535](https://github.com/openclaw/openclaw/pull/123535) and reported an unusual bug about silent DM drops after a gateway restart with [#131150](https://github.com/openclaw/openclaw/issues/131150) receiving 5 comments.
- **Ollama** released [v0.33.2-rc1](https://github.com/ollama/ollama/releases/tag/v0.33.2) and is dealing with a critical issue regarding context limits on Granite models with [#18074](https://github.com/ollama/ollama/issues/18074) garnering 9 comments.  
- **vLLM** merged PRs fixing rendering issues and addressing batch shape production in release [#54023](https://github.com/vllm-project/vllm/pull/54023) and reported a new bug on model performance impacting use cases in [#54046](https://github.com/vllm-project/vllm/issues/54046) which has also received 5 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 143,213 · **Open issues:** 15,256 · **Last push:** 2h ago

On August 28, 2026, Claude Code released v2.1.250, which includes bug fixes and reliability improvements. The earlier version, v2.1.248, introduced the `--restricted` option to enhance security by limiting tool availability and added the `experimental.cacheTtl` feature to manage per-agent prompt cache expiration. No pull requests were merged in the last 24 hours, but several critical new issues were reported, including a bug causing the code tab to write UI render metadata into transcript JSONL, resulting in a recurring API 400 error (#90002). Additionally, there are issues with the desktop application's Rewind function failing to undo modified code (#90253) and complaints about cloud sessions pushing unsigned commits, which could block repositories requiring signed commits (#90255).

#### 🚀 New Releases
- [v2.1.250](https://github.com/anthropics/claude-code/releases/tag/v2.1.250) v2.1.250
- [v2.1.248](https://github.com/anthropics/claude-code/releases/tag/v2.1.248) v2.1.248

#### 🐛 New Issues
- [#90002](https://github.com/anthropics/claude-code/issues/90002) [BUG] Code tab writes UI render metadata (start_timestamp/stop_timestamp/flags) into transcript JSONL, causing unrecoverable API 400 that recurs after full sanitization `bug` `has repro` `platform:windows` `area:core` 💬10
- [#90257](https://github.com/anthropics/claude-code/issues/90257) claude-in-chrome: one-way channel — extension live-renders the same session that gets [] from list_connected_browsers `bug` `has repro` `platform:macos` `area:browser-extension`
- [#90256](https://github.com/anthropics/claude-code/issues/90256) [BUG] Nested subagent (depth-2) completion notifications route to root session and are discarded on 2.1.250 — regression of #75043 item 2 `duplicate` `has repro` `area:agents` `regression`
- [#90255](https://github.com/anthropics/claude-code/issues/90255) Cloud/remote sessions push unsigned commits, blocking repos that require signed commits `enhancement` `area:security` `area:claude-code-web` `platform:web`
- [#90254](https://github.com/anthropics/claude-code/issues/90254) Claude in Chrome (v1.0.85): phantom blank tabs "http://native/", "http://host/", "http://wrapper/", "http://script/" open on every Chrome startup `bug` `platform:windows` `area:browser-extension` `area:chrome`
- [#90253](https://github.com/anthropics/claude-code/issues/90253) [BUG] In the desktop application's code feature, the Rewind function does not undo modified code. `bug` `platform:windows` `area:desktop`
- [#90252](https://github.com/anthropics/claude-code/issues/90252) [Feature Request] Add language/dialect consistency mode to prevent unintended English variant drift `enhancement` `platform:macos` `area:model`
- [#90251](https://github.com/anthropics/claude-code/issues/90251) Scheduled-task run sessions flood the session list - group, auto-archive, or bulk-archive them `enhancement` `platform:windows` `user-experience` `area:desktop`
- [#90250](https://github.com/anthropics/claude-code/issues/90250) GPU process crashes recurring since v2.1.237, still present in v2.1.246 (Windows, hybrid NVIDIA/Intel graphics laptop) `bug` `has repro` `platform:windows` `area:desktop`
- [#90249](https://github.com/anthropics/claude-code/issues/90249) [BUG] JSON file upload to claude code has broken claude code `bug` `platform:macos` `area:desktop`
- [#90248](https://github.com/anthropics/claude-code/issues/90248) Scheduled tasks fail silently when the app is closed; no signal distinguishing "running on schedule" from "only running while app is open" `bug` `has repro` `platform:macos` `area:desktop`
- [#90247](https://github.com/anthropics/claude-code/issues/90247) [Feature Request] Add graceful restart mechanism for agent teams without losing connections `enhancement` `platform:macos` `area:agents`
- [#90246](https://github.com/anthropics/claude-code/issues/90246) [Feature Request] Display model name in terminal CLI inline agent status view `enhancement` `platform:macos` `area:agent-view`
- [#90245](https://github.com/anthropics/claude-code/issues/90245) [BUG] CCD desktop app rejects MCP tools with draft-07 outputSchema that work fine in CLI `bug` `has repro` `platform:macos` `area:mcp`
- [#90244](https://github.com/anthropics/claude-code/issues/90244) Doesn't work anymore on VS Code version1.135 `bug` `platform:windows` `platform:vscode`

#### 🔒 Closed Issues
- [#72430](https://github.com/anthropics/claude-code/issues/72430) [BUG] Cloud routines / Claude Code on the web have no non-interactive way to trust a project-scoped `.mcp.json` MCP server - daily routine broke after the untrusted-workspace gate
- [#75652](https://github.com/anthropics/claude-code/issues/75652) [BUG] Code on the web: `apt-get update` in setup scripts fails with exit 100 — base image ships the retired ondrej/php PPA (upstream 'Label' change)
- [#75328](https://github.com/anthropics/claude-code/issues/75328) [BUG] Cloud routines fail with "An error occurred while executing Claude Code" every morning since July 4
- [#89043](https://github.com/anthropics/claude-code/issues/89043) [BUG] Subagents cannot reply to inter-agent messages: incoming from= is the agent type ('general-purpose'), which is unroutable
- [#84122](https://github.com/anthropics/claude-code/issues/84122) [BUG] Routine detail page renders blank (app shell loads, content area empty)

### OpenAI Codex (`openai/codex`)

**Stars:** 119,253 · **Open issues:** 14,148 · **Last push:** <1h ago

On August 28, 2026, OpenAI Codex released several new alpha versions of its Rust packages, including version 0.151.0-alpha.7. Key improvements in the merged pull requests include the addition of configurable gating for the sleep tool in PR #41243 and enhancements to recovery progress for model provider authentication in PR #41239. Additionally, significant work was done on instrumenting the loaded plugin cache and exposing the PowerShell version in environment contexts. Among the new issues, notable concern arose from #41049, where users reported that the code-mode host exited during handshake, leading to issues with the 5.6 model.

#### 🚀 New Releases
- [rust-v0.151.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.7) 0.151.0-alpha.7
- [rust-v0.151.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.6) 0.151.0-alpha.6
- [rust-v0.151.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.5) 0.151.0-alpha.5
- [rust-v0.150.0-alpha.12.2](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.12.2) 0.150.0-alpha.12.2

#### ✅ Merged PRs
- [#41250](https://github.com/openai/codex/pull/41250) Include thread source in realtime connection metadata
- [#41243](https://github.com/openai/codex/pull/41243) Add configurable gating for the sleep tool
- [#41239](https://github.com/openai/codex/pull/41239) Surface model provider authentication recovery progress
- [#41235](https://github.com/openai/codex/pull/41235) Sanitize history notes backend errors
- [#41232](https://github.com/openai/codex/pull/41232) Expose the PowerShell version in environment context
- [#41231](https://github.com/openai/codex/pull/41231) Instrument the loaded plugin cache
- [#41230](https://github.com/openai/codex/pull/41230) Apply app routing policy to unauthenticated plugin reads
- [#41227](https://github.com/openai/codex/pull/41227) Use compatible PowerShell for elevated Windows sandbox commands
- [#41226](https://github.com/openai/codex/pull/41226) Move Guardian review session tests to a separate file
- [#41223](https://github.com/openai/codex/pull/41223) Add recency sorting to `project/list`
- [#41221](https://github.com/openai/codex/pull/41221) Honor turn token budgets in Guardian review rollover
- [#41219](https://github.com/openai/codex/pull/41219) Retry confirmed remote registration conflicts
- [#41218](https://github.com/openai/codex/pull/41218) Share linked tool mention parsing in the TUI
- [#41215](https://github.com/openai/codex/pull/41215) Roll over Guardian context before follow-up reviews
- [#41210](https://github.com/openai/codex/pull/41210) Enable clock tools from model metadata
- [#41209](https://github.com/openai/codex/pull/41209) Align deny-read matching with executor path semantics
- [#41208](https://github.com/openai/codex/pull/41208) Honor per-repository plugin configuration in catalog requests
- [#41207](https://github.com/openai/codex/pull/41207) Propagate executor OS into turn environments
- [#41206](https://github.com/openai/codex/pull/41206) Make Ultra reasoning fallback model-aware
- [#41205](https://github.com/openai/codex/pull/41205) Track executor MCP discovery telemetry
- [#41204](https://github.com/openai/codex/pull/41204) Propagate executor home directories into sandbox contexts
- [#41202](https://github.com/openai/codex/pull/41202) Let extensions process MCP tool results
- [#41199](https://github.com/openai/codex/pull/41199) Make the optional MCP startup grace configurable
- [#41196](https://github.com/openai/codex/pull/41196) Improve sandboxing, MCP errors, and cached approvals
- [#41195](https://github.com/openai/codex/pull/41195) Finalize model-specific tool plans in `ToolRouter`
- [#41194](https://github.com/openai/codex/pull/41194) Harden core test fixture startup assertions
- [#41193](https://github.com/openai/codex/pull/41193) Report affected capabilities from remote plugin syncs
- [#41192](https://github.com/openai/codex/pull/41192) Preserve restored permission profiles in TUI sessions
- [#41191](https://github.com/openai/codex/pull/41191) Stabilize Guardian WebSocket tests
- [#41189](https://github.com/openai/codex/pull/41189) Instrument stdin review size checks
- [#41183](https://github.com/openai/codex/pull/41183) Account subagent token usage toward root goals
- [#41165](https://github.com/openai/codex/pull/41165) Require explicit requests for spawn model overrides
- [#41162](https://github.com/openai/codex/pull/41162) Resolve token budgets from each step's active model
- [#41159](https://github.com/openai/codex/pull/41159) Reject oversized reviewed terminal input
- [#41158](https://github.com/openai/codex/pull/41158) Reduce Guardian V2's default tool-call lag
- [#41152](https://github.com/openai/codex/pull/41152) Fail closed on unbounded Guardian parent compactions
- [#41151](https://github.com/openai/codex/pull/41151) Extract Guardian action rendering into its own module
- [#41150](https://github.com/openai/codex/pull/41150) Remove locking from trusted skill collection
- [#41146](https://github.com/openai/codex/pull/41146) Use typed outcomes for Guardian V2 classification
- [#41143](https://github.com/openai/codex/pull/41143) Limit inline diff previews in the TUI
- [#41118](https://github.com/openai/codex/pull/41118) Propagate trusted root skills to delegated workers
- [#41117](https://github.com/openai/codex/pull/41117) Freeze plugin roots in MCP tool attribution
- [#41108](https://github.com/openai/codex/pull/41108) Increase Guardian V2 async test timeouts
- [#41100](https://github.com/openai/codex/pull/41100) Add Guardian V2 decision metrics
- [#41094](https://github.com/openai/codex/pull/41094) Require synchronous review for sensitive MCP actions
- [#41087](https://github.com/openai/codex/pull/41087) Expose response usage metadata in completion events
- [#41072](https://github.com/openai/codex/pull/41072) Forward model confirmation policies to actor MCP tools

#### 🐛 New Issues
- [#41049](https://github.com/openai/codex/issues/41049) code-mode host exited during handshake; the 5.6 model is not working properly `bug` `windows-os` `tool-calls` `app` 💬26
- [#41088](https://github.com/openai/codex/issues/41088) [Windows][26.820.7780.0] Local execution fails to start after updating Codex Desktop `bug` `windows-os` `tool-calls` `app` 💬6
- [#41073](https://github.com/openai/codex/issues/41073) [Windows][26.820.9563.0] ChatGPT launches headless with MainWindowHandle=0; disabling updater fixes startup `bug` `windows-os` `app` 💬5
- [#41170](https://github.com/openai/codex/issues/41170) [Windows] First launch shows no window for about 15 minutes while extracting bundled cua_node runtime `bug` `windows-os` `app` `computer-use` 💬5
- [#41063](https://github.com/openai/codex/issues/41063) [IDE extension][Windows] Pasting paths escapes underscores as \_ `bug` `windows-os` `extension` 💬2
- [#41079](https://github.com/openai/codex/issues/41079) [Desktop][Windows] Paginated thread history stalls on duplicate ordinal while rollout remains complete `bug` `windows-os` `app` `session` 💬3
- [#41249](https://github.com/openai/codex/issues/41249) Codex Desktop task inventory stops at 50 and agents fallback requires standalone install `bug` `CLI` `app` `app-server` 💬2
- [#41179](https://github.com/openai/codex/issues/41179) [Windows][26.820.9563.0] ChatGPT Desktop launches headless after upgrade from Classic; no renderer/window created `bug` `windows-os` `app` 💬2
- [#41242](https://github.com/openai/codex/issues/41242) Windows 0.148+: light-theme composer is near-black (OSC 10/11 probe dropped; still broken in 0.150.1) `bug` `windows-os` `TUI` `CLI` 💬2
- [#41176](https://github.com/openai/codex/issues/41176) Codex agents incorrectly stop or declare completion while tasks are still incomplete `bug` `model-behavior` `CLI` 💬2
- [#41238](https://github.com/openai/codex/issues/41238) "Ran 5 commands" - Can we not do this? Or make it optional? `bug` `enhancement` `TUI` `CLI` 💬2
- [#41251](https://github.com/openai/codex/issues/41251) Conversation content frequently disappears in macOS ChatGPT when connected to remote Linux `bug` `app` `session` `remote` 💬1
- [#41248](https://github.com/openai/codex/issues/41248) [Desktop Remote SSH 26.825.31414] effectful task tools still missing with CLI 0.150.1 `bug` `tool-calls` `app` `app-server` 💬1
- [#41246](https://github.com/openai/codex/issues/41246) [Windows][IAB] Agent-created tab disappears from tabs.list while Browser instance remains active `bug` `windows-os` `app` `browser` 💬1
- [#41245](https://github.com/openai/codex/issues/41245) Windows Desktop 26.820.10647.0: fresh codex-dev.db repeatedly rejected as "file is not a database" `bug` `windows-os` `app` 💬1
- [#41123](https://github.com/openai/codex/issues/41123) Safety: avoid disabling macOS Wi-Fi network service during troubleshooting `bug` `model-behavior` `tool-calls` 💬1
- [#41241](https://github.com/openai/codex/issues/41241) Windows Codex local tool host exits during handshake after update `bug` `windows-os` `tool-calls` `app` 💬1
- [#41240](https://github.com/openai/codex/issues/41240) Windows desktop 26.820.10647.0: ChatGPT.exe memory grows to 5+ GB within minutes even in a new blank chat `bug` `windows-os` `app` `performance` 💬1
- [#41142](https://github.com/openai/codex/issues/41142) Docs: define nested subagent completion routing and completed-agent retention `documentation` `subagent` 💬1
- [#41236](https://github.com/openai/codex/issues/41236) [Windows] Codex Desktop app-server repeatedly restarts and loses tool call outputs `bug` `windows-os` `tool-calls` `app` 💬1
- [#41234](https://github.com/openai/codex/issues/41234) Remote Control remains disabled despite workspace permission being enabled `bug` `app` `remote` 💬1
- [#41247](https://github.com/openai/codex/issues/41247) Plugin-declared monitors for periodic background tasks `enhancement` `skills` `automations`
- [#41244](https://github.com/openai/codex/issues/41244) Codex CLI replays terminal capability queries from persisted tool output on session resume `bug` `TUI` `CLI` `session`
- [#41237](https://github.com/openai/codex/issues/41237) [Windows][26.820.10647.0] Sandboxed profile-directory reads return EPERM, blocking local esbuild after Desktop update `bug` `windows-os` `sandbox` `app`

#### 🔒 Closed Issues
- [#38939](https://github.com/openai/codex/issues/38939) CRITICAL / App-Unusable: Codex macOS Spawns Runaway computer-use Threads Until Dispatch Thread Exhaustion and Fatal V8 OOM Crash

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 106,719 · **Open issues:** 870 · **Last push:** 7h ago

On August 28, 2026, there were no new releases or merged pull requests in the Gemini CLI repository, indicating a day of routine maintenance. However, a notable new issue was raised regarding a feature request to enhance the functionality of the system prompt at launch with the ability to append to it using the proposed option `--append-system-prompt` or the environment variable `GEMINI_APPEND_SYSTEM_MD`. This request highlights user interest in improving how prompts are managed during the CLI's initialization process, which could potentially impact user experience significantly.

#### 🐛 New Issues
- [#29112](https://github.com/google-gemini/gemini-cli/issues/29112) Feature request: append to system prompt at launch (--append-system-prompt / GEMINI_APPEND_SYSTEM_MD) — GEMINI_SYSTEM_MD only replaces `priority/p3` `area/agent` `status/possible-duplicate` `status/bot-triaged` 💬4

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,122 · **Open issues:** 2,234 · **Last push:** 1h ago

On August 28, 2026, GitHub Copilot CLI released version 1.0.82-0, which includes various fixes and changes. The previous version, 1.0.81, introduced the plugins dashboard for all users, allowing the use of commands like `/plugin`, alongside enhancements to support MCP 2026-07-28 across multiple platforms and improved hooks for OpenTelemetry integration. Notably, version 1.0.81-14 improved session resumption speed by prioritizing recent history and addressed issues with the full turn history in repeated read_agent calls. Among the new issues logged today, #4639 regarding event-storage exhaustion resulting in a long-running session loop stands out as particularly concerning.

#### 🚀 New Releases
- [v1.0.82-0](https://github.com/github/copilot-cli/releases/tag/v1.0.82-0) 1.0.82-0
- [v1.0.81](https://github.com/github/copilot-cli/releases/tag/v1.0.81) 1.0.81
- [v1.0.81-14](https://github.com/github/copilot-cli/releases/tag/v1.0.81-14) 1.0.81-14

#### 🐛 New Issues
- [#4639](https://github.com/github/copilot-cli/issues/4639) v1.0.80: event-storage exhaustion retry storm drives long-running session into GC/compaction loop and Node OOM `triage` 💬1
- [#4629](https://github.com/github/copilot-cli/issues/4629) Plugin hooks are not loaded when a session is resumed via `--resume` `area:sessions` `area:plugins` 💬1
- [#4631](https://github.com/github/copilot-cli/issues/4631) 1000 `triage` `invalid` 💬1
- [#4646](https://github.com/github/copilot-cli/issues/4646) Compaction fails with "CAPIError: 400 Tool choice must be auto" on custom models `triage`
- [#4645](https://github.com/github/copilot-cli/issues/4645) `session.resume` silently ignores the `model` parameter; the persisted session model wins `` `triage`
- [#4643](https://github.com/github/copilot-cli/issues/4643) Compaction happens at low context usage (e.g. 20%) and don't get reported as an actual checkpoint? `triage`
- [#4642](https://github.com/github/copilot-cli/issues/4642) Make `--name` create or resume a session `triage`
- [#4641](https://github.com/github/copilot-cli/issues/4641) Publish official JSON Schema for settings.json `triage`
- [#4640](https://github.com/github/copilot-cli/issues/4640) userPromptTransformed hook is skipped for steering messages `triage`
- [#4638](https://github.com/github/copilot-cli/issues/4638) Do not derive model context from prompt and output token limits `triage`
- [#4637](https://github.com/github/copilot-cli/issues/4637) Avoid duplicate skill lookup for slash-invoked skills with disable-model-invocation `triage`
- [#4636](https://github.com/github/copilot-cli/issues/4636) MCP servers from --additional-mcp-config are removed during startup reconciliation in 1.0.81-11 `triage`
- [#4635](https://github.com/github/copilot-cli/issues/4635) `/diff` allows you to choose base branch for `branch diff` view `triage`
- [#4634](https://github.com/github/copilot-cli/issues/4634) Add support for an MCP server package type that resolves to a local executable `triage`
- [#4633](https://github.com/github/copilot-cli/issues/4633) view rejects a normal 8.6 KB file as too large to read at once `triage`
- [#4632](https://github.com/github/copilot-cli/issues/4632) WorkIQ OAuth callback returns 404 only when Copilot CLI runs in WSL `triage`
- [#4630](https://github.com/github/copilot-cli/issues/4630) Expose large_output_file_path on TaskShellProgress so clients can read complete shell-task output `area:tools`

#### 🔒 Closed Issues
- [#3576](https://github.com/github/copilot-cli/issues/3576) Windows: stdio MCP servers fail to spawn (spawn npx ENOENT / EINVAL) in 1.0.56-1
- [#4006](https://github.com/github/copilot-cli/issues/4006) MCP `tools/list` pagination (nextCursor) not followed
- [#4631](https://github.com/github/copilot-cli/issues/4631) 1000
- [#4239](https://github.com/github/copilot-cli/issues/4239) MCP server args templating corrupts values containing nested ${VAR:-${VAR2:-$(cmd)}} shell parameter expansion (silent auth/token corruption)

### OpenCode (`anomalyco/opencode`)

**Stars:** 201,991 · **Open issues:** 5,635 · **Last push:** <1h ago

On August 28, 2026, there were no new releases for OpenCode, but several significant pull requests were merged, including a refactor to support per-instance plugin input and improvements in session metadata durability upon creation. Fixes targeting core functionalities addressed issues related to plugin interrupt options, response tool strictness, and Windows tool path normalization. Among new issues, a notable concern reported was that OpenCode Ai had made unexpected changes that significantly impacted user workflows, prompting discussions on stability and control. Additionally, a feature request emerged to support multiple custom config directories through environment variables, indicating a growing demand for enhanced configurability.

#### ✅ Merged PRs
- [#45808](https://github.com/anomalyco/opencode/pull/45808) chore(deps): upgrade Solid and Router
- [#45632](https://github.com/anomalyco/opencode/pull/45632) fix(core): forward plugin interrupt options
- [#45663](https://github.com/anomalyco/opencode/pull/45663) fix(core): preserve Responses tool strictness
- [#45650](https://github.com/anomalyco/opencode/pull/45650) fix(core): preserve assistant text metadata
- [#45704](https://github.com/anomalyco/opencode/pull/45704) fix(core): keep vertex settings serializable
- [#45698](https://github.com/anomalyco/opencode/pull/45698) fix(core): correct compaction history direction
- [#45711](https://github.com/anomalyco/opencode/pull/45711) test(core): bind acquired test services
- [#45652](https://github.com/anomalyco/opencode/pull/45652) refactor(core): reuse Mercurial diff preparation
- [#45707](https://github.com/anomalyco/opencode/pull/45707) refactor(core): use environment driver namespace
- [#45687](https://github.com/anomalyco/opencode/pull/45687) refactor(tui): remove inert diff viewer setup
- [#45642](https://github.com/anomalyco/opencode/pull/45642) docs(core): align built-in prompt guidance
- [#45628](https://github.com/anomalyco/opencode/pull/45628) refactor(core): remove unreachable transport state
- [#45644](https://github.com/anomalyco/opencode/pull/45644) refactor(core): reuse tool name normalization
- [#45729](https://github.com/anomalyco/opencode/pull/45729) refactor(core): simplify skill discovery validation
- [#45440](https://github.com/anomalyco/opencode/pull/45440) test(core): simplify runner scenario fixtures
- [#45806](https://github.com/anomalyco/opencode/pull/45806) fix(core): normalize Windows tool paths
- [#45728](https://github.com/anomalyco/opencode/pull/45728) refactor(core): compare plugin generations directly
- [#45732](https://github.com/anomalyco/opencode/pull/45732) feat(core): per-instance plugin input
- [#45670](https://github.com/anomalyco/opencode/pull/45670) test(core): align session test vocabulary
- [#45669](https://github.com/anomalyco/opencode/pull/45669) test(core): remove dead test setup
- [#45730](https://github.com/anomalyco/opencode/pull/45730) refactor: normalize filesystem boundary imports
- [#45805](https://github.com/anomalyco/opencode/pull/45805) feat(core): durable session metadata at creation
- [#45667](https://github.com/anomalyco/opencode/pull/45667) test(core): exercise fsutil passthroughs
- [#45715](https://github.com/anomalyco/opencode/pull/45715) refactor(core): clarify PTY binary validation
- [#45710](https://github.com/anomalyco/opencode/pull/45710) refactor(core): type native PTY import explicitly
- [#45736](https://github.com/anomalyco/opencode/pull/45736) docs(core): correct newtype decoding guidance
- [#45706](https://github.com/anomalyco/opencode/pull/45706) test(core): make test sentinels effective
- [#45672](https://github.com/anomalyco/opencode/pull/45672) refactor(core): remove infallible layer conversion
- [#45804](https://github.com/anomalyco/opencode/pull/45804) chore(desktop): trim external dependency archives
- [#45778](https://github.com/anomalyco/opencode/pull/45778) fix(core): preserve typed config test-layer errors
- [#45793](https://github.com/anomalyco/opencode/pull/45793) chore(deps): refresh markdown dependencies
- [#45799](https://github.com/anomalyco/opencode/pull/45799) fix(core): treat project paths as internal
- [#45796](https://github.com/anomalyco/opencode/pull/45796) chore(deps): upgrade Sentry and verify reporting
- [#45794](https://github.com/anomalyco/opencode/pull/45794) chore(ui): refresh Kobalte and Solid primitives

#### 🐛 New Issues
- [#45580](https://github.com/anomalyco/opencode/issues/45580) OpenCode Ai decided to go rogue and make changes that cost me a ton of time and usage 💬4
- [#45812](https://github.com/anomalyco/opencode/issues/45812) [FEATURE]: Support multiple custom config directories via environment variable 💬3
- [#45568](https://github.com/anomalyco/opencode/issues/45568) ollama-cloud: glm-5.3-flash dropped from model cache due to unmapped family 'glm5_next' 💬3
- [#45802](https://github.com/anomalyco/opencode/issues/45802) crash in bun when launching on hyprland (linux window manager) small screen tile 💬2
- [#45755](https://github.com/anomalyco/opencode/issues/45755) Error from provider 💬2
- [#45797](https://github.com/anomalyco/opencode/issues/45797) [Bug] Raw `<parameter>` tool-call tags rendered literally in TUI above assistant message 💬2
- [#45791](https://github.com/anomalyco/opencode/issues/45791) session: reasoning parts duplicated per streamed chunk inflate context to 300k+ tokens and explode session storage `2.0` 💬2
- [#45602](https://github.com/anomalyco/opencode/issues/45602) Cobros dobles 💬2
- [#45764](https://github.com/anomalyco/opencode/issues/45764) [FEATURE]: Plugin hook to intercept and override LLM call parameters (llm.request.before) 💬2
- [#45723](https://github.com/anomalyco/opencode/issues/45723) TUI renders garbled/corrupted on native Windows, reproducing across multiple terminals and PTY layers (not a terminal/font issue) 💬2
- [#45803](https://github.com/anomalyco/opencode/issues/45803) Accidentally applied $5 OpenCode Go referral reward to the wrong account `needs:compliance` 💬1
- [#45798](https://github.com/anomalyco/opencode/issues/45798) Session service -32603 errors under concurrent batch load 💬1
- [#45795](https://github.com/anomalyco/opencode/issues/45795) Batch Import Failures in Version 1.18.23 - Context Explosion and Session Storage Issues `needs:compliance` 💬1
- [#45606](https://github.com/anomalyco/opencode/issues/45606) Zen Go /v1/chat/completions strips usage.completion_tokens_details for deepseek-v4-flash - official DeepSeek API sends it 💬1
- [#45757](https://github.com/anomalyco/opencode/issues/45757) Documentation to verify released artifacts ? 💬1
- [#45750](https://github.com/anomalyco/opencode/issues/45750) Bug: Anthropic prompt caching not applied when using custom provider name with Anthropic protocol via proxy 💬1
- [#45744](https://github.com/anomalyco/opencode/issues/45744) [Bug] Zen API: `muse-spark-1.2-contributor-free` returns HTTP 500 for every request via API key, while other free models work 💬1
- [#45811](https://github.com/anomalyco/opencode/issues/45811) [FEATURE]: allow specification of additional configuration directories via project-local configuration
- [#45801](https://github.com/anomalyco/opencode/issues/45801) [FEATURE]: Add server-side transcript search to the V2 message API
- [#45800](https://github.com/anomalyco/opencode/issues/45800) Recursive $ref in postgres tool schemas breaks Meta Muse Spark ("Recursive JSON schemas are not currently supported")
- [#45483](https://github.com/anomalyco/opencode/issues/45483) No usage/cost shown for DeepInfra provider (openai-compatible)
- [#45788](https://github.com/anomalyco/opencode/issues/45788) opencode serve from source silently serves the production web UI instead of local code
- [#45620](https://github.com/anomalyco/opencode/issues/45620) Bedrock: aborted thinking turn bricks the session — "There is nothing available to cache" / "content field is empty"
- [#45767](https://github.com/anomalyco/opencode/issues/45767) Add CLI system packages (DEB, RPM, macOS pkg) for amd64 and arm64

#### 🔒 Closed Issues
- [#44300](https://github.com/anomalyco/opencode/issues/44300) Zen API: x-preview-f-free / ox-alpha-free fails with "Endpoint is unavailable" for any request containing tools
- [#37399](https://github.com/anomalyco/opencode/issues/37399) xAI Grok 4.5 generating useless bash true tool calls
- [#45755](https://github.com/anomalyco/opencode/issues/45755) Error from provider
- [#45797](https://github.com/anomalyco/opencode/issues/45797) [Bug] Raw `<parameter>` tool-call tags rendered literally in TUI above assistant message
- [#45602](https://github.com/anomalyco/opencode/issues/45602) Cobros dobles
- [#43312](https://github.com/anomalyco/opencode/issues/43312) v2: Responses reasoning can abort with "reasoning start before end"
- [#45723](https://github.com/anomalyco/opencode/issues/45723) TUI renders garbled/corrupted on native Windows, reproducing across multiple terminals and PTY layers (not a terminal/font issue)
- [#45364](https://github.com/anomalyco/opencode/issues/45364) Subagent tool rejects self-referential session IDs
- [#43765](https://github.com/anomalyco/opencode/issues/43765) ai: ignore unknown Anthropic SSE events
- [#43759](https://github.com/anomalyco/opencode/issues/43759) ai: accept nullable Anthropic input usage
- [#36874](https://github.com/anomalyco/opencode/issues/36874) V2: distinguish interrupted streamed fragments from completed fragments
- [#45620](https://github.com/anomalyco/opencode/issues/45620) Bedrock: aborted thinking turn bricks the session — "There is nothing available to cache" / "content field is empty"

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 27,438 · **Open issues:** 1,287 · **Last push:** <1h ago

On August 28, 2026, there were no new releases for Qwen Code. Notably, two significant pull requests were merged: #10294 introduced standalone session APIs to enhance user interaction capabilities, while #10134 laid the groundwork for OpenTUI migration, emphasizing locked dependencies and a framework-neutral streaming model. Among new issues, #10272 reported an E2E test hanging on macOS, indicating potential platform-specific problems that may require urgent attention. Additionally, #10324 raised concerns regarding silent rerun notifications, specifically how they should handle bot-initiated actions. Overall, the day's developments reflect ongoing efforts to improve functionality and address emerging challenges.

#### ✅ Merged PRs
- [#10294](https://github.com/QwenLM/qwen-code/pull/10294) feat(sdk): Add standalone session APIs
- [#10134](https://github.com/QwenLM/qwen-code/pull/10134) feat(cli): OpenTUI migration infra batch — locked deps, dependency-direction arch check, framework-neutral streaming model

#### 🐛 New Issues
- [#10272](https://github.com/QwenLM/qwen-code/issues/10272) E2E: external-context mem0 tests hang at 'Connecting to MCP servers' on macOS and ecs-qwen pool (pass on ubuntu-hosted) `priority/P1` `type/bug` `scope/testing` `scope/ci-cd` 💬5
- [#10324](https://github.com/QwenLM/qwen-code/issues/10324) triage: silent-rerun notification should treat a bot-initiated close as a terminal action `priority/P2` `type/bug` `category/development` `scope/ci-cd` 💬3
- [#10314](https://github.com/QwenLM/qwen-code/issues/10314) fix(ci): treat API-error triage responses as failed runs in qwen-triage.yml `priority/P2` `type/bug` `category/development` `scope/ci-cd` 💬3
- [#10309](https://github.com/QwenLM/qwen-code/issues/10309) Feature: probe actual modality support at model setup (one-shot capability probe instead of static pattern guessing) `priority/P2` `type/feature-request` `category/core` `scope/model-switching` 💬3
- [#10342](https://github.com/QwenLM/qwen-code/issues/10342) Add an opt-in Parallel Search MCP setup shortcut `priority/P3` `type/feature-request` `category/integration` `scope/mcp` 💬2
- [#10339](https://github.com/QwenLM/qwen-code/issues/10339) docs: add ToolSearch-absent caveat to remaining tools.eager loadability promises (#10098 follow-up) `priority/P3` `status/blocked` `type/documentation` `category/tools` 💬2
- [#10336](https://github.com/QwenLM/qwen-code/issues/10336) Release provenance names the dispatch context, not the built tree — npm artifacts cannot be verified against tagged source `priority/P1` `type/bug` `category/security` `scope/packaging` 💬2
- [#10338](https://github.com/QwenLM/qwen-code/issues/10338) triage runbook: scope re-run suppression to terminal stage / exit `priority/P3` `category/development` `scope/ci-cd` `type/enhancement` 💬2
- [#10322](https://github.com/QwenLM/qwen-code/issues/10322) triage: Stage 1-pre subsumption check breaks silently at the contents-API size ceiling `priority/P2` `type/bug` `category/development` `scope/ci-cd` 💬2
- [#10332](https://github.com/QwenLM/qwen-code/issues/10332) Feature request: append to system prompt at launch (--append-system-prompt / QWEN_APPEND_SYSTEM_MD) — QWEN_SYSTEM_MD only replaces `priority/P3` `type/feature-request` `category/cli` `scope/cli` 💬2
- [#10323](https://github.com/QwenLM/qwen-code/issues/10323) triage: Stage 1-pre remaining-delta branch needs a disputed-premise exit `priority/P3` `status/blocked` `category/development` `scope/github-actions` 💬2
- [#10320](https://github.com/QwenLM/qwen-code/issues/10320) triage: harden Stage 1-pre close exit (idempotent comment, OPEN guard, head/issue re-read) `priority/P2` `status/blocked` `type/bug` `category/development` 💬2
- [#10321](https://github.com/QwenLM/qwen-code/issues/10321) triage: make Stage 1-pre closer tree total over closer shapes, with fixture tests `priority/P2` `category/development` `scope/ci-cd` `type/enhancement` 💬2
- [#10348](https://github.com/QwenLM/qwen-code/issues/10348) hooks 触发事件增强 `status/needs-triage` `type/feature-request` 💬1
- [#10341](https://github.com/QwenLM/qwen-code/issues/10341) Main CI failed: E2E Tests on 7357136dd168 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#10330](https://github.com/QwenLM/qwen-code/issues/10330) Main CI failed: E2E Tests on 1bd20d38ceae `type/bug` `status/ready-for-agent` `autofix/in-progress` `autofix/approved` 💬1
- [#10325](https://github.com/QwenLM/qwen-code/issues/10325) Main CI failed: E2E Tests on 1637aa968b3f `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#10328](https://github.com/QwenLM/qwen-code/issues/10328) Main CI failed: E2E Tests on b85d7c818555 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#10326](https://github.com/QwenLM/qwen-code/issues/10326) Release Failed for v0.22.3 on 2026-08-27 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#10312](https://github.com/QwenLM/qwen-code/issues/10312) Release Failed for v0.22.3 on 2026-08-27 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#10316](https://github.com/QwenLM/qwen-code/issues/10316) Main CI failed: E2E Tests on bbaba8b1f807 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#10313](https://github.com/QwenLM/qwen-code/issues/10313) Main CI failed: E2E Tests on b90c2f049e12 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#10308](https://github.com/QwenLM/qwen-code/issues/10308) Main CI failed: E2E Tests on b792dd12fd71 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#10306](https://github.com/QwenLM/qwen-code/issues/10306) Main CI failed: E2E Tests on 435199716b40 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#10299](https://github.com/QwenLM/qwen-code/issues/10299) Main CI failed: E2E Tests on a3ec41a2816f `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#10298](https://github.com/QwenLM/qwen-code/issues/10298) Main CI failed: E2E Tests on f9df4447f0cf `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#10293](https://github.com/QwenLM/qwen-code/issues/10293) Main CI failed: E2E Tests on 6652fdc9f600 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#10311](https://github.com/QwenLM/qwen-code/issues/10311) Main CI failed: E2E Tests on 5563a6c58035 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#10349](https://github.com/QwenLM/qwen-code/issues/10349) Main CI failed: E2E Tests on b91c281e3470 `type/bug` `status/ready-for-agent` `autofix/approved`
- [#10346](https://github.com/QwenLM/qwen-code/issues/10346) feat(core): auto-retry transient network errors (EOF) in channel/daemon paths where Ctrl+Y is unavailable
- [#10331](https://github.com/QwenLM/qwen-code/issues/10331) Deferred review findings from PR #10317
- [#10305](https://github.com/QwenLM/qwen-code/issues/10305) Deferred review findings from PR #10115
- [#10304](https://github.com/QwenLM/qwen-code/issues/10304) Deferred review findings from PR #10274

#### 🔒 Closed Issues
- [#10272](https://github.com/QwenLM/qwen-code/issues/10272) E2E: external-context mem0 tests hang at 'Connecting to MCP servers' on macOS and ecs-qwen pool (pass on ubuntu-hosted)
- [#9927](https://github.com/QwenLM/qwen-code/issues/9927) Artifact updatedAt stays stale; write_file intermediates linger as missing
- [#10211](https://github.com/QwenLM/qwen-code/issues/10211) Agent Team: initial teammate result may be lost before event bridge attachment
- [#10209](https://github.com/QwenLM/qwen-code/issues/10209) Agent Team: stale reclaim can delete a newer live team generation
- [#10069](https://github.com/QwenLM/qwen-code/issues/10069) Agent Team: a queued Agent View message disappears after switching teammate tabs
- [#10153](https://github.com/QwenLM/qwen-code/issues/10153) /review: carry the fix's premises, not just its claim — add an evidence-bounded Fix constraint field
- [#10325](https://github.com/QwenLM/qwen-code/issues/10325) Main CI failed: E2E Tests on 1637aa968b3f
- [#10308](https://github.com/QwenLM/qwen-code/issues/10308) Main CI failed: E2E Tests on b792dd12fd71
- [#10306](https://github.com/QwenLM/qwen-code/issues/10306) Main CI failed: E2E Tests on 435199716b40
- [#10299](https://github.com/QwenLM/qwen-code/issues/10299) Main CI failed: E2E Tests on a3ec41a2816f
- [#10298](https://github.com/QwenLM/qwen-code/issues/10298) Main CI failed: E2E Tests on f9df4447f0cf
- [#10293](https://github.com/QwenLM/qwen-code/issues/10293) Main CI failed: E2E Tests on 6652fdc9f600

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

**Stars:** 387,853 · **Open issues:** 5,730 · **Last push:** <1h ago

On August 28, 2026, there were no new releases for OpenClaw, but several important fixes and improvements were merged into the codebase. Key changes included a fix to the user interface that declutters channel refresh controls and the addition of font pickers in appearance settings, enhancing user experience. Additionally, significant backend improvements were made, such as the restoration of warnings for ignored agent settings and the verification of TLS pin before websocket upgrades. Among the newly reported issues, a notable bug (#130955) was identified regarding the openclaw memory index, which stalls permanently after processing two files or chunks, raising concerns about the stability of memory indexing.

#### ✅ Merged PRs
- [#123535](https://github.com/openclaw/openclaw/pull/123535) fix(ui): avoid session catalog refresh storms
- [#111251](https://github.com/openclaw/openclaw/pull/111251) fix(gateway): reject altered approval history cursors
- [#131425](https://github.com/openclaw/openclaw/pull/131425) fix(ui): hide historical metadata while assistant turns run
- [#128223](https://github.com/openclaw/openclaw/pull/128223) fix(cli): resolve alias targets from the write snapshot
- [#105887](https://github.com/openclaw/openclaw/pull/105887) fix(deepinfra): apply request policy to video generation requests
- [#131443](https://github.com/openclaw/openclaw/pull/131443) fix(doctor): restore warnings for ignored agent settings
- [#131435](https://github.com/openclaw/openclaw/pull/131435) fix(gateway-client): verify TLS pin before websocket upgrade
- [#131430](https://github.com/openclaw/openclaw/pull/131430) docs: fix circular pointer between AGENTS.md and the PR maintainer skill
- [#131438](https://github.com/openclaw/openclaw/pull/131438) chore(i18n): refresh native locales
- [#131424](https://github.com/openclaw/openclaw/pull/131424) fix(ui): use the regular cursor for sidebar navigation
- [#131275](https://github.com/openclaw/openclaw/pull/131275) feat(ui): interface and chat font pickers in appearance settings
- [#131360](https://github.com/openclaw/openclaw/pull/131360) fix(openshell): retain FIFOs and sockets after sandbox commands
- [#130987](https://github.com/openclaw/openclaw/pull/130987) fix(agents): skip implicit workspace scaffold for runtime-managed ACP agents
- [#131367](https://github.com/openclaw/openclaw/pull/131367) fix(ui): declutter Channels refresh controls
- [#131395](https://github.com/openclaw/openclaw/pull/131395) fix(ui): keep Continue visible with wizard spinner
- [#131427](https://github.com/openclaw/openclaw/pull/131427) fix(ui): render channel wizard output as plain text
- [#128799](https://github.com/openclaw/openclaw/pull/128799) fix(ai): preserve root properties when flattening root-level anyOf tool schemas
- [#131365](https://github.com/openclaw/openclaw/pull/131365) fix(workers): evict quiescent live-event windows instead of rejecting new sessions
- [#131412](https://github.com/openclaw/openclaw/pull/131412) refactor(gateway): consolidate node catalog projections
- [#131428](https://github.com/openclaw/openclaw/pull/131428) perf(cli): reclaim startup-memory headroom on status and validation paths
- [#131415](https://github.com/openclaw/openclaw/pull/131415) test(ui): hold replacement session loads
- [#131432](https://github.com/openclaw/openclaw/pull/131432) test(ui): await profile appearance refresh completion
- [#131411](https://github.com/openclaw/openclaw/pull/131411) fix(update): keep repair JSON stdout parseable
- [#131429](https://github.com/openclaw/openclaw/pull/131429) fix(imessage): preserve non-Homebrew imsg during setup
- [#131385](https://github.com/openclaw/openclaw/pull/131385) test: select manual approval in MCP App revocation fixture
- [#131403](https://github.com/openclaw/openclaw/pull/131403) fix(test): clean up relative-path SQLite fixtures
- [#131389](https://github.com/openclaw/openclaw/pull/131389) fix(test): restore managed plugin E2E after capability consent
- [#131413](https://github.com/openclaw/openclaw/pull/131413) fix(config): omit unauthored agents parent on writes
- [#131392](https://github.com/openclaw/openclaw/pull/131392) improve(ui): place DM access requests last
- [#131357](https://github.com/openclaw/openclaw/pull/131357) fix(tui): make terminal safety proof reliable over SSH
- [#131402](https://github.com/openclaw/openclaw/pull/131402) fix(ui): keep active picker subtext legible
- [#131398](https://github.com/openclaw/openclaw/pull/131398) refactor(infra): unify Unix listener inspection
- [#131267](https://github.com/openclaw/openclaw/pull/131267) fix(ios): complete QR pairing in one step
- [#131390](https://github.com/openclaw/openclaw/pull/131390) docs(test): include agent-plugin gateway in E2E aggregate
- [#131291](https://github.com/openclaw/openclaw/pull/131291) chore(ui): refresh control ui locales
- [#131381](https://github.com/openclaw/openclaw/pull/131381) fix(transcripts): report auto-start shutdown warnings
- [#131382](https://github.com/openclaw/openclaw/pull/131382) fix(test): avoid slow and incorrect test discovery in large checkouts
- [#131241](https://github.com/openclaw/openclaw/pull/131241) fix(ui): stop Talk camera preview flicker on rerenders
- [#128169](https://github.com/openclaw/openclaw/pull/128169) fix(acp): preserve configured thinking across session reuse
- [#131378](https://github.com/openclaw/openclaw/pull/131378) fix(ui): unselected channel picker shows prompt
- [#130196](https://github.com/openclaw/openclaw/pull/130196) fix(sessions): fence restart-recovery tombstones independently of archive state
- [#131377](https://github.com/openclaw/openclaw/pull/131377) fix(ui): replace channel setup Working text with spinner buttons
- [#131157](https://github.com/openclaw/openclaw/pull/131157) fix(ui): dismiss navigation and Inbox reliably during lazy loading
- [#131343](https://github.com/openclaw/openclaw/pull/131343) fix(test): prevent stale SQLite state after PID reuse
- [#131363](https://github.com/openclaw/openclaw/pull/131363) fix(git): keep worktree failure messages readable
- [#131372](https://github.com/openclaw/openclaw/pull/131372) fix: keep automatic titles from answering file requests
- [#131368](https://github.com/openclaw/openclaw/pull/131368) test(ui): await owner chip render completion
- [#131348](https://github.com/openclaw/openclaw/pull/131348) test: repair stale E2E fixtures
- [#131359](https://github.com/openclaw/openclaw/pull/131359) fix(test): avoid premature CUA proxy readiness failures
- [#131314](https://github.com/openclaw/openclaw/pull/131314) fix: open terminals block cooperative release updates
- [#131294](https://github.com/openclaw/openclaw/pull/131294) feat(models): refresh provider models and live discovery
- [#131349](https://github.com/openclaw/openclaw/pull/131349) fix(qa): node protocol proof fails before Gateway startup
- [#131339](https://github.com/openclaw/openclaw/pull/131339) fix(tests): avoid GNU shell assumptions on macOS
- [#131292](https://github.com/openclaw/openclaw/pull/131292) refactor(reef): drop hand-maintained manifest schema copies
- [#131180](https://github.com/openclaw/openclaw/pull/131180) fix: channel config updates no longer wait on themselves
- [#131318](https://github.com/openclaw/openclaw/pull/131318) refactor(memory): simplify provenance and dreaming flows
- [#131311](https://github.com/openclaw/openclaw/pull/131311) fix(code-mode): preserve cancellation diagnostics after catalog teardown
- [#131353](https://github.com/openclaw/openclaw/pull/131353) refactor: split two files off the max-lines cap
- [#131335](https://github.com/openclaw/openclaw/pull/131335) fix(ui): unify tooltip appearance and dismissal
- [#131336](https://github.com/openclaw/openclaw/pull/131336) feat(ui): open new-session plus controls in browser tabs
- [#131242](https://github.com/openclaw/openclaw/pull/131242) fix(agents): keep code mode off by default
- [#131325](https://github.com/openclaw/openclaw/pull/131325) refactor(codex): simplify conversation thread and lease ownership
- [#131224](https://github.com/openclaw/openclaw/pull/131224) fix(crabbox): avoid resending the full checkout for changed gates
- [#131341](https://github.com/openclaw/openclaw/pull/131341) perf(sessions): reduce CPU work when listing session previews
- [#131315](https://github.com/openclaw/openclaw/pull/131315) fix(openshell): prevent workspace races and unblock remote commands
- [#131338](https://github.com/openclaw/openclaw/pull/131338) fix(test): release mock fixtures between non-isolated files
- [#131304](https://github.com/openclaw/openclaw/pull/131304) fix(imap): stop reporting strength before mail authentication
- [#131334](https://github.com/openclaw/openclaw/pull/131334) fix(plugins): avoid duplicate manifest reads during status
- [#131321](https://github.com/openclaw/openclaw/pull/131321) fix(cron): avoid cold script timeouts during plugin preparation
- [#131310](https://github.com/openclaw/openclaw/pull/131310) fix(plugins): keep SecretRef configurations loadable
- [#131293](https://github.com/openclaw/openclaw/pull/131293) fix(telegram): preserve forum admission identity in audit
- [#131326](https://github.com/openclaw/openclaw/pull/131326) fix(ui): count tool invocations once across live and history
- [#131257](https://github.com/openclaw/openclaw/pull/131257) ci: split Control UI E2E into 13 shards so it stops setting the wall
- [#130775](https://github.com/openclaw/openclaw/pull/130775) fix(ui): remove context compact button
- [#130778](https://github.com/openclaw/openclaw/pull/130778) fix(discord): keep mention labels literal in text substitution
- [#131319](https://github.com/openclaw/openclaw/pull/131319) fix(scripts): speed up staged environment-variable checks
- [#130755](https://github.com/openclaw/openclaw/pull/130755) fix(apple): load chat media behind reverse-proxy paths
- [#130743](https://github.com/openclaw/openclaw/pull/130743) fix(plugins): report failed plugin slash commands instead of silently ignoring them
- [#130764](https://github.com/openclaw/openclaw/pull/130764) fix: filter watched-session presence by recipient visibility
- [#129617](https://github.com/openclaw/openclaw/pull/129617) fix(ui): chat file copy hides successful and failed outcomes
- [#130766](https://github.com/openclaw/openclaw/pull/130766) fix: hide unsupported cloud machine class overrides
- [#130698](https://github.com/openclaw/openclaw/pull/130698) fix(memory): keep indexing after memory folder replacement
- [#130760](https://github.com/openclaw/openclaw/pull/130760) fix(pr): avoid warnings for already-deleted source branches
- [#130737](https://github.com/openclaw/openclaw/pull/130737) fix(ui): stop repeated reply preview requests after temporary failures
- [#130448](https://github.com/openclaw/openclaw/pull/130448) fix(cli): reject --agent for global model refresh
- [#130688](https://github.com/openclaw/openclaw/pull/130688) fix(ci): stabilize Control UI startup gzip ratchet
- [#126856](https://github.com/openclaw/openclaw/pull/126856) fix(imessage): stop self-chat dedupe from tripping loop limiter
- [#130709](https://github.com/openclaw/openclaw/pull/130709) docs(start): add Why OpenClaw enterprise architecture page
- [#130704](https://github.com/openclaw/openclaw/pull/130704) fix(doctor): stop flagging lazily-created session dirs as missing
- [#130727](https://github.com/openclaw/openclaw/pull/130727) fix(portals): event streams stall before the first event
- [#130642](https://github.com/openclaw/openclaw/pull/130642) fix(sessions): keep archived actions inert
- [#130723](https://github.com/openclaw/openclaw/pull/130723) chore(ui): refresh control ui locales
- [#130524](https://github.com/openclaw/openclaw/pull/130524) fix(pr): release locks after linked worktree teardown
- [#130712](https://github.com/openclaw/openclaw/pull/130712) chore(i18n): refresh native locales
- [#130705](https://github.com/openclaw/openclaw/pull/130705) refactor: simplify channel config adapters
- [#130708](https://github.com/openclaw/openclaw/pull/130708) refactor(config): share TTS migration traversal
- [#130701](https://github.com/openclaw/openclaw/pull/130701) fix(codex): prevent stale resumes from disrupting shared sessions
- [#130095](https://github.com/openclaw/openclaw/pull/130095) fix(ci): keep release-gate workloads consistent on hosted runners
- [#130703](https://github.com/openclaw/openclaw/pull/130703) refactor(github-copilot): reuse prepared embedding credentials
- [#130645](https://github.com/openclaw/openclaw/pull/130645) fix: preserve Gateway error reasons in text logs
- [#130635](https://github.com/openclaw/openclaw/pull/130635) refactor(video): deduplicate generation contracts
- [#127054](https://github.com/openclaw/openclaw/pull/127054) fix(secrets): compare proxy bearer tokens directly
- [#130675](https://github.com/openclaw/openclaw/pull/130675) fix(agents): preserve silent reply after settled tools
- [#130687](https://github.com/openclaw/openclaw/pull/130687) fix(talk): preserve replacement speech when an old utterance is canceled
- [#130599](https://github.com/openclaw/openclaw/pull/130599) fix(browser): preserve literal names and formatter-owned snapshot refs
- [#130686](https://github.com/openclaw/openclaw/pull/130686) fix: session creation targets the wrong Gateway after admission
- [#130689](https://github.com/openclaw/openclaw/pull/130689) refactor(lmstudio): remove unreachable catalog merge
- [#130684](https://github.com/openclaw/openclaw/pull/130684) fix: cloud machine picker loses CPU and RAM with larger catalogs
- [#130651](https://github.com/openclaw/openclaw/pull/130651) fix(ios): restore approval settings navigation and remove duplicate shell state
- [#130419](https://github.com/openclaw/openclaw/pull/130419) refactor(qa-lab): share process tree metric reader
- [#130683](https://github.com/openclaw/openclaw/pull/130683) refactor(models): simplify prepared owner access
- [#130666](https://github.com/openclaw/openclaw/pull/130666) fix(ui): prevent encoded-path readiness timeouts
- [#130632](https://github.com/openclaw/openclaw/pull/130632) test(gateway): await runtime ownership before lifecycle events
- [#130286](https://github.com/openclaw/openclaw/pull/130286) fix(agents): serve skill instructions whole instead of rejecting read windows
- [#130669](https://github.com/openclaw/openclaw/pull/130669) fix(ui): show cloud session startup progress in chat
- [#130553](https://github.com/openclaw/openclaw/pull/130553) fix(doctor): migrate deprecated bindings match.peer.kind dm to direct
- [#107834](https://github.com/openclaw/openclaw/pull/107834) fix(github-copilot): preserve catalog thinking efforts in requests
- [#130406](https://github.com/openclaw/openclaw/pull/130406) refactor(google): share video capability metadata
- [#130103](https://github.com/openclaw/openclaw/pull/130103) feat(channels): post a grounded introduction when the bot joins a group room
- [#130655](https://github.com/openclaw/openclaw/pull/130655) refactor(memory): remove normalization of fixed search defaults
- [#131320](https://github.com/openclaw/openclaw/pull/131320) fix(ui): channel setup dialogs show duplicate links
- [#131302](https://github.com/openclaw/openclaw/pull/131302) fix(active-memory): restore interactive recall and preserve completed results
- [#131300](https://github.com/openclaw/openclaw/pull/131300) test(codex): await shared-client transport writes
- [#131316](https://github.com/openclaw/openclaw/pull/131316) fix(ui): show agent pictures in Activity and owner avatars
- [#131066](https://github.com/openclaw/openclaw/pull/131066) improve(ui): hide session previews by default
- [#131255](https://github.com/openclaw/openclaw/pull/131255) fix(auth): keep SecretRef models available with explicit auth order
- [#131297](https://github.com/openclaw/openclaw/pull/131297) fix(test): prevent shared build races across parallel projects
- [#131295](https://github.com/openclaw/openclaw/pull/131295) fix(ui): remove underlines from Settings Learn more links
- [#131126](https://github.com/openclaw/openclaw/pull/131126) fix(web-fetch): bound page metadata and preserve prose across sanitized truncation
- [#130206](https://github.com/openclaw/openclaw/pull/130206) fix(ai): carry the Responses system prompt via instructions, not input[0]
- [#131282](https://github.com/openclaw/openclaw/pull/131282) fix(code-mode): continue tasks after proven-safe wait failures
- [#131211](https://github.com/openclaw/openclaw/pull/131211) fix: admin access errors appear once in Inbox
- [#129637](https://github.com/openclaw/openclaw/pull/129637) fix(windows): ACP workers hang forever on permission prompts when the Gateway runs as a hidden-console service
- [#131280](https://github.com/openclaw/openclaw/pull/131280) fix(ui): shrink oversized Plugins trash icons
- [#131210](https://github.com/openclaw/openclaw/pull/131210) fix: admin access recovery works before read scope arrives
- [#131283](https://github.com/openclaw/openclaw/pull/131283) fix(ui): make modified Enter switch between queue and steer
- [#131273](https://github.com/openclaw/openclaw/pull/131273) fix(tui): avoid stalls for non-auth error messages
- [#131266](https://github.com/openclaw/openclaw/pull/131266) fix(ui): keep acknowledged sends pending on current connection
- [#130493](https://github.com/openclaw/openclaw/pull/130493) test(skills): seed experience review transcript owner
- [#131254](https://github.com/openclaw/openclaw/pull/131254) improve: skip re-hashing unchanged worker workspaces after every turn
- [#128685](https://github.com/openclaw/openclaw/pull/128685) fix(ui): align overlay entrances with their interaction
- [#131277](https://github.com/openclaw/openclaw/pull/131277) test(commands): reuse config snapshot fixtures
- [#131175](https://github.com/openclaw/openclaw/pull/131175) fix(plugins): refuse git installs onto an existing managed checkout
- [#131263](https://github.com/openclaw/openclaw/pull/131263) perf(ui): keep settings search responsive
- [#131268](https://github.com/openclaw/openclaw/pull/131268) fix(scripts): include mts files in typed lint project
- [#131215](https://github.com/openclaw/openclaw/pull/131215) feat(ui): rename automatic placement to Auto with a least-busy subtitle
- [#131244](https://github.com/openclaw/openclaw/pull/131244) fix(install): preserve Unicode in macOS JSON output
- [#131219](https://github.com/openclaw/openclaw/pull/131219) fix(cron): close restart-recovery identity gaps and stop silent heartbeat alert drops
- [#131167](https://github.com/openclaw/openclaw/pull/131167) feat(reef): operator-configurable sharing rules for the guard
- [#131269](https://github.com/openclaw/openclaw/pull/131269) chore(ui): refresh control ui locales
- [#131222](https://github.com/openclaw/openclaw/pull/131222) fix(ui): standardize settings guidance links as Learn more
- [#131187](https://github.com/openclaw/openclaw/pull/131187) fix(codex): repair auth ownership across private turns, custom commands, and shared clients
- [#125091](https://github.com/openclaw/openclaw/pull/125091) fix(sandbox): queue reads behind in-flight writes to the same file
- [#131252](https://github.com/openclaw/openclaw/pull/131252) docs: align gateway approval, web-tool limit, and search-provider docs with shipped behavior
- [#131256](https://github.com/openclaw/openclaw/pull/131256) chore: speed up update restart tests
- [#131248](https://github.com/openclaw/openclaw/pull/131248) fix(memory): forgotten facts survive in consolidation history
- [#131259](https://github.com/openclaw/openclaw/pull/131259) test(parallels): prevent timeout fixture PID races and leaks
- [#131239](https://github.com/openclaw/openclaw/pull/131239) fix(ui): align plugin hub header and tabs with content
- [#131249](https://github.com/openclaw/openclaw/pull/131249) perf(gateway): reuse human profiles within session catalogs
- [#131251](https://github.com/openclaw/openclaw/pull/131251) fix(control-ui): hide Retry for non-retryable scope denials

#### 🐛 New Issues
- [#130968](https://github.com/openclaw/openclaw/issues/130968) [Bug]: Update fresh doctor waits on the parent plugin lifecycle lease 💬6
- [#131150](https://github.com/openclaw/openclaw/issues/131150) Slack DMs silently dropped for all accounts after gateway restart: prepareSlackMessage returns null pre-gate; degraded installation identity (multi-account socket mode) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬5
- [#130954](https://github.com/openclaw/openclaw/issues/130954) [Bug]: post-core updater deadlocks its Doctor child on plugin lifecycle lease `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬5
- [#130977](https://github.com/openclaw/openclaw/issues/130977) [Bug]: Linux plugins-list startup-memory gate flakes at current runner variance `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬4
- [#131231](https://github.com/openclaw/openclaw/issues/131231) [Bug]: browser act fill silently no-ops on unsupported field keys (ok:true, value unchanged) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#131303](https://github.com/openclaw/openclaw/issues/131303) [Bug]: Automatic session titles answer file requests instead of naming them `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬3
- [#131299](https://github.com/openclaw/openclaw/issues/131299) [Bug]: Code Mode loses cancellation diagnostics when the tool catalog closes `bug` `maintainer` 💬3
- [#131104](https://github.com/openclaw/openclaw/issues/131104) [Bug]: Agent model picker refresh stays empty although full discovery succeeds `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#130919](https://github.com/openclaw/openclaw/issues/130919) [Bug]: Source installer restarts an already refreshed Gateway service twice `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#131074](https://github.com/openclaw/openclaw/issues/131074) [Bug]: update finalize --no-restart fails when Gateway is intentionally stopped `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬3
- [#130879](https://github.com/openclaw/openclaw/issues/130879) [Bug]: Browser role refs lose snapshot membership and ordering `bug` `maintainer` `P1` `clawsweeper:source-repro` 💬3
- [#131058](https://github.com/openclaw/openclaw/issues/131058) [Bug]: Control UI JSON disclosures rewrite numbers and duplicate keys `bug` `maintainer` 💬3
- [#130955](https://github.com/openclaw/openclaw/issues/130955) openclaw memory index stalls permanently after exactly 2 files/chunks (extraPaths and base memory dir both affected) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬3
- [#130892](https://github.com/openclaw/openclaw/issues/130892) [Bug]: Idle scroll notification cancels an unfinished Scroll to latest command `maintainer` `P1` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬3
- [#130742](https://github.com/openclaw/openclaw/issues/130742) doctor's State integrity (missing/orphan transcript) check only inspects the default agent's session store `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#131416](https://github.com/openclaw/openclaw/issues/131416) Running Control UI turns reveal misleading historical message metadata `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬2
- [#131209](https://github.com/openclaw/openclaw/issues/131209) [Bug]: OpenShell mirror deletes host FIFOs and Unix sockets after sandbox exec `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#131305](https://github.com/openclaw/openclaw/issues/131305) Gateway rejects all new cloud-worker turns after 128 lifetime sessions (live-event window leak) `bug` `maintainer` `P1` `clawsweeper:source-repro` 💬2
- [#131162](https://github.com/openclaw/openclaw/issues/131162) [Bug]: Explicit skill invocation does not satisfy foreground repair guard `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `clawsweeper:needs-live-repro` 💬2
- [#131374](https://github.com/openclaw/openclaw/issues/131374) [Bug]: Silent cron heartbeat fails when its transient base session has no durable node `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#131426](https://github.com/openclaw/openclaw/issues/131426) Codex-runtime sessions are cleared instead of compacted, and neither layer owns the compaction decision `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#131286](https://github.com/openclaw/openclaw/issues/131286) GLM cloud models leak inline reasoning into visible assistant content — visible-content sanitizer is Kimi-gated `P2` `impact:other` 💬2
- [#131401](https://github.com/openclaw/openclaw/issues/131401) fix(cron): scheduler-disabled CRUD can overwrite shared runtime state `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#131375](https://github.com/openclaw/openclaw/issues/131375) [Bug]: Transcript auto-start shutdown silently drops export and provider warnings `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#131322](https://github.com/openclaw/openclaw/issues/131322) Git-channel installs: generated agent-cli shim crashes from any cwd outside the checkout (undeclared workspace deps) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#131323](https://github.com/openclaw/openclaw/issues/131323) [Bug]: Git checkout progress floods worktree creation errors `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬2
- [#131355](https://github.com/openclaw/openclaw/issues/131355) Telegram threaded DM sessions inherit parent /model override across topics `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#131308](https://github.com/openclaw/openclaw/issues/131308) Open terminals prevent cooperative release-update drains `maintainer` 💬2
- [#131330](https://github.com/openclaw/openclaw/issues/131330) [Bug]: Skill Workshop Web UI can report "Applied" while proposal stays pending and no SKILL.md is written `bug` `no-stale` `bug:behavior` `P1` 💬2
- [#131271](https://github.com/openclaw/openclaw/issues/131271) [Bug]: Cold script automation preparation reloads plugin sources before guest entry `bug` `maintainer` `P1` `clawsweeper:source-repro` 💬2
- [#131324](https://github.com/openclaw/openclaw/issues/131324) [Bug]: Control UI double-counts completed tool invocations `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#130652](https://github.com/openclaw/openclaw/issues/130652) Cloud runner failure banners hide the full diagnostic `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬2
- [#130660](https://github.com/openclaw/openclaw/issues/130660) [Bug]: Cloud machine picker loses CPU and RAM with larger Crabbox catalogs `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬2
- [#131279](https://github.com/openclaw/openclaw/issues/131279) [Bug]: Code Mode ends tasks after proven-safe failed waits `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#131232](https://github.com/openclaw/openclaw/issues/131232) [Bug]: selector-scoped snapshot with no matching elements times out 30s and reports 'profile is external to OpenClaw' `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#131225](https://github.com/openclaw/openclaw/issues/131225) [Bug]: Wizard confirmation treats the string false as affirmative `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬2
- [#131221](https://github.com/openclaw/openclaw/issues/131221) [Bug]: sessions_spawn category error can cause invalid visible-session retry loops `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#131113](https://github.com/openclaw/openclaw/issues/131113) [Bug]: Exclusive store-writer queue admits a nested drain, so a write enqueued inside an active writer runs before it `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#130970](https://github.com/openclaw/openclaw/issues/130970) [Bug]: Package updates deadlock while fresh doctor waits for the plugin lifecycle lease `bug` `maintainer` `P1` `clawsweeper:source-repro` 💬2
- [#131114](https://github.com/openclaw/openclaw/issues/131114) [Bug]: startup-memory CI gate fails nondeterministically — same tree passes and fails, and plugins list --json sits on its 400 MB ceiling `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#131192](https://github.com/openclaw/openclaw/issues/131192) [Bug]: Remote-only sandbox attachments fail through message delivery `bug` `maintainer` `P1` `clawsweeper:source-repro` 💬2
- [#131189](https://github.com/openclaw/openclaw/issues/131189) [Bug]: Unsupported Codex service-tier diagnostics clutter chat `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬2
- [#131124](https://github.com/openclaw/openclaw/issues/131124) [Bug]: Aborting parked Code Mode cells exhausts shared execution slots `maintainer` `P1` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#131112](https://github.com/openclaw/openclaw/issues/131112) [Bug]: Code Mode automation scripts time out after clearTimeout across awaits `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#130728](https://github.com/openclaw/openclaw/issues/130728) [Bug]: Twitch replies lose native participant provenance in execution audits `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#131159](https://github.com/openclaw/openclaw/issues/131159) Copilot GPT-5.4 mini rejects minimal thinking with static model metadata `maintainer` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬2
- [#131073](https://github.com/openclaw/openclaw/issues/131073) [Bug]: Automatic Code Mode loses preferred OpenAI model capability `maintainer` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬2
- [#131142](https://github.com/openclaw/openclaw/issues/131142) [Bug]: Copilot Gemini requests fail when using the static model catalog `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#131018](https://github.com/openclaw/openclaw/issues/131018) [Bug]: Skill Workshop review blocks foreground admission and contaminates queued user turns `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#131111](https://github.com/openclaw/openclaw/issues/131111) [Bug]: OpenShell mirror sync deletes nested host symlinks `maintainer` `P1` `clawsweeper:source-repro` `impact:data-loss` 💬2
- [#131135](https://github.com/openclaw/openclaw/issues/131135) Copilot usage checks fail for OAuth profiles with domain metadata `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬2
- [#131047](https://github.com/openclaw/openclaw/issues/131047) ci: startup-memory 'plugins list --json' straddles the 400 MB ceiling, failing main and PR runs `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬2
- [#131061](https://github.com/openclaw/openclaw/issues/131061) Package upgrades can lose plugin convergence during restart `maintainer` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬2
- [#131092](https://github.com/openclaw/openclaw/issues/131092) [Bug]: Feishu ordinary Markdown cards bypass size limits and lose fanout receipt IDs `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬2
- [#131056](https://github.com/openclaw/openclaw/issues/131056) Trusted plugin hooks cannot start with HTTP hooks disabled `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#131050](https://github.com/openclaw/openclaw/issues/131050) [Bug]: Code Mode stops task recovery after read-only catalog discovery `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#131069](https://github.com/openclaw/openclaw/issues/131069) [Bug]: interrupted systemctl status skips disable and deletes legacy unit `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#131102](https://github.com/openclaw/openclaw/issues/131102) [Bug]: tools-policy implicit-grant warning ignores `tools.deny`, advising operators to `alsoAllow` a tool they explicitly denied `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#131103](https://github.com/openclaw/openclaw/issues/131103) [Bug]: `openclaw doctor` sandbox MCP allowlist warning counts `enabled: false` servers, diverging from the runtime resolver `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#130960](https://github.com/openclaw/openclaw/issues/130960) sessions_spawn rejects blank category for hidden and ACP sessions `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#130981](https://github.com/openclaw/openclaw/issues/130981) [Bug]: Discord /steer shows empty-reply warning after successful deferral `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#131065](https://github.com/openclaw/openclaw/issues/131065) [Bug]: Tavily plugin tools reject non-env SecretRefs and suppress the TAVILY_API_KEY fallback `P2` `clawsweeper:source-repro` `impact:auth-provider` `issue-rating: 🦞 diamond lobster` 💬2
- [#131044](https://github.com/openclaw/openclaw/issues/131044) [Bug]: Browser downloads keep transferring after the output cannot be saved `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#130966](https://github.com/openclaw/openclaw/issues/130966) [Feature]: Allow omitted Crabbox profile classes `enhancement` `maintainer` `P3` `clawsweeper:no-new-fix-pr` 💬2
- [#130923](https://github.com/openclaw/openclaw/issues/130923) [Bug]: HTTP hooks hide delivery failures after successful execution `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#130777](https://github.com/openclaw/openclaw/issues/130777) [Bug]: Cold Talk catalog discovery stalls the Gateway while loading source providers `bug` `maintainer` `P1` `clawsweeper:source-repro` 💬2
- [#130983](https://github.com/openclaw/openclaw/issues/130983) [Bug]: Telegram richMessages leaks details tags when body contains a Markdown list `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#130978](https://github.com/openclaw/openclaw/issues/130978) [Bug]: Slack edits and streamed final replies lose authored formatting `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#130700](https://github.com/openclaw/openclaw/issues/130700) [Bug]: channels list JSON omits configured accounts with setup metadata `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬2
- [#131454](https://github.com/openclaw/openclaw/issues/131454) [Feature]: Preserve alias-safe catalogs and native model readiness `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#131451](https://github.com/openclaw/openclaw/issues/131451) [Bug]: agent archive leaves the selected session in the active sidebar `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#131447](https://github.com/openclaw/openclaw/issues/131447) [Bug]: Control UI sidebar reports cron jobs overdue when scheduler is disabled `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#131446](https://github.com/openclaw/openclaw/issues/131446) [CI]: iOS Watch approval snapshot test flakes on fixed two-second polling window `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#131452](https://github.com/openclaw/openclaw/issues/131452) [Bug]: Cloud startup failures discard the submitted prompt and attachments `bug` `maintainer` `P1` `clawsweeper:source-repro` 💬1
- [#131445](https://github.com/openclaw/openclaw/issues/131445) [Bug]: gateway status --deep exposes untranslated Windows service-manager errors `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#131340](https://github.com/openclaw/openclaw/issues/131340) [Bug]: Code Mode mutation recovery lacks a canonical effect-provenance contract across tools `bug` `agents` `maintainer` `P2` 💬1
- [#131258](https://github.com/openclaw/openclaw/issues/131258) [Bug]: OpenShell overlapping roots remove the primary workspace before exec `bug` `maintainer` `P1` `clawsweeper:source-repro` 💬1
- [#131327](https://github.com/openclaw/openclaw/issues/131327) [Bug]: Plugin state read failures are misreported as invalid or missing records `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#131437](https://github.com/openclaw/openclaw/issues/131437) [Bug]: Gemini recovery diagnostics stop meeting realtime audio `bug` `maintainer` `P1` `clawsweeper:source-repro` 💬1
- [#131422](https://github.com/openclaw/openclaw/issues/131422) Guarded file tools reject macOS workspace aliases inside the session root `bug` `maintainer` `P1` `clawsweeper:source-repro` 💬1
- [#131406](https://github.com/openclaw/openclaw/issues/131406) [Bug]: Native macOS app — document attachment links (assistant-media, target="_blank") unresponsive on click; server confirmed healthy `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#131346](https://github.com/openclaw/openclaw/issues/131346) TUI safety PTY test merges Escape and Ctrl+U over SSH `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#131414](https://github.com/openclaw/openclaw/issues/131414) [Bug]: GitHub public profile names are not used for online people `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#131265](https://github.com/openclaw/openclaw/issues/131265) [Bug]: iOS QR pairing does not complete in one action `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#131405](https://github.com/openclaw/openclaw/issues/131405) [Bug]: config.patch fails during same-write watcher handoff `bug` `maintainer` `P1` `clawsweeper:source-repro` 💬1
- [#131404](https://github.com/openclaw/openclaw/issues/131404) [Bug]: Successful best-effort cron delivery retry retains failed delivery state `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#131399](https://github.com/openclaw/openclaw/issues/131399) cron runs: expose persisted per-run configRevision `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#131397](https://github.com/openclaw/openclaw/issues/131397) [Bug]: Discord realtime lifecycle stays stale after provider closure or recovery `bug` `maintainer` `P1` `clawsweeper:source-repro` 💬1
- [#131366](https://github.com/openclaw/openclaw/issues/131366) [Bug]: Explicit-root auth writes can use another store for inheritance and publication `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#131025](https://github.com/openclaw/openclaw/issues/131025) [Bug]: Inbox opens after navigation dismisses a pending lazy import `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#131022](https://github.com/openclaw/openclaw/issues/131022) [Bug]: Navigation dismissal fails before lazy sidebar components load `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#131354](https://github.com/openclaw/openclaw/issues/131354) [Bug]: Telegram SOCKS5 proxy requests and media downloads fail `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#131361](https://github.com/openclaw/openclaw/issues/131361) [Bug]: v2026.7.1-2 — inbound envelope (sender/channel/timestamp) never reaches the model; bodyForAgent overrides it, breaking group-chat attribution `P2` `impact:session-state` 💬1
- [#131138](https://github.com/openclaw/openclaw/issues/131138) config.patch self-deadlocks when hot apply requires channel reload `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#131317](https://github.com/openclaw/openclaw/issues/131317) New session plus controls should support native new-tab gestures `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` `impact:ux-friction` 💬1
- [#131309](https://github.com/openclaw/openclaw/issues/131309) [Bug]: Chrome extension navigation can lose load events during access revalidation `maintainer` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#131342](https://github.com/openclaw/openclaw/issues/131342) [Bug]: `cron status` surfaces a SQLite partition key as a file path, misleading operators about where jobs are stored `bug` `bug:behavior` `P2` `impact:ux-friction` 💬1
- [#131306](https://github.com/openclaw/openclaw/issues/131306) Secret requests lose native answers and outlive their requester `maintainer` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-security-review` 💬1
- [#131337](https://github.com/openclaw/openclaw/issues/131337) Codex harness: automatic compaction never requests native compaction; the thread is cleared instead, silently discarding the conversation `P1` `impact:session-state` `impact:message-loss` 💬1
- [#131332](https://github.com/openclaw/openclaw/issues/131332) Every Claude turn logs a false ERROR: CLAUDE_SDK_CAN_USE_TOOL_SHADOWED `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `clawsweeper:needs-live-repro` 💬1
- [#131240](https://github.com/openclaw/openclaw/issues/131240) [Bug]: Agent-owned sessions show initials instead of configured avatars `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#131307](https://github.com/openclaw/openclaw/issues/131307) [Bug]: Mobile transcript notices overlap the topbar `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#131270](https://github.com/openclaw/openclaw/issues/131270) [Bug]: New-session composer hides Fast Mode from non-admin operators `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#131278](https://github.com/openclaw/openclaw/issues/131278) fix: captured Mattermost and Teams responses delay cancellation `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#131287](https://github.com/openclaw/openclaw/issues/131287) [Bug]: Historical OpenShell runtimes cannot be recreated after switching backends `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#131274](https://github.com/openclaw/openclaw/issues/131274) Control UI: modified Enter does not invert steer and queue follow-ups `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#131264](https://github.com/openclaw/openclaw/issues/131264) TUI stalls on cold non-authentication error display `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#131261](https://github.com/openclaw/openclaw/issues/131261) Codex harness: expose providerIds as plugin config so custom providers (platform credential proxies) can opt in `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#131262](https://github.com/openclaw/openclaw/issues/131262) Settings search lags while scanning wildcard UI hints `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#131247](https://github.com/openclaw/openclaw/issues/131247) [Bug]: Control UI offers Retry for fixed operator-role denials `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#131236](https://github.com/openclaw/openclaw/issues/131236) [Bug]: Claude session discovery repeats project scans and misses the sidebar deadline `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#131260](https://github.com/openclaw/openclaw/issues/131260) [Bug]: Fabricated internal-context blocks appended to inbound messages, survives full clean reinstall `bug` `regression` 💬1
- [#131246](https://github.com/openclaw/openclaw/issues/131246) Per-run cleanup closes shared MCP loopback server singleton, breaking concurrent agents/subagents ("Unable to connect") `P1` `impact:other` 💬1
- [#131206](https://github.com/openclaw/openclaw/issues/131206) FRV plugin fixtures fail capability consent `maintainer` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#131204](https://github.com/openclaw/openclaw/issues/131204) [Bug]: focused live reruns reject valid provider and video shard selectors `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#131201](https://github.com/openclaw/openclaw/issues/131201) [Bug]: Control UI sets user-select: none on body, so automation ids, session keys, and log text cannot be copied `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#131166](https://github.com/openclaw/openclaw/issues/131166) Pending operator approvals can be reclaimed as stalled replies `bug` `maintainer` `P1` `clawsweeper:source-repro` 💬1
- [#131165](https://github.com/openclaw/openclaw/issues/131165) Mobile approval queue scrolls decision actions out of view `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#131149](https://github.com/openclaw/openclaw/issues/131149) [Bug]: Cron model-call-started timeout leaks a stale in-memory session work-admission lock — CronSessionLifecycleClaimError recurs on every subsequent run until gateway restart `P1` `impact:session-state` 💬1
- [#131148](https://github.com/openclaw/openclaw/issues/131148) Run-end full-summarization emits enable_thinking:false for z.ai glm-5.x, bypassing thinkingLevelMap `P1` `impact:session-state` 💬1
- [#131099](https://github.com/openclaw/openclaw/issues/131099) Sender auth strength stage 5: allowFrom lockout-preview finding + widened audit wording `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#131134](https://github.com/openclaw/openclaw/issues/131134) [Bug]: OpenShell E2E fallback conflicts with managed gateway and TLS bundle `maintainer` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#130720](https://github.com/openclaw/openclaw/issues/130720) Embedded runner abandons a turn after a transient transport drop even when every tool result is already persisted `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#131054](https://github.com/openclaw/openclaw/issues/131054) [Bug]: config mutations silently discard agents.list edits after keyed roster migration `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#131063](https://github.com/openclaw/openclaw/issues/131063) [Feature]: ADR: replay-safe session Goal protocol `enhancement` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#131088](https://github.com/openclaw/openclaw/issues/131088) [Bug]: QA coverage commands ignore required channel drivers `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#131075](https://github.com/openclaw/openclaw/issues/131075) [Bug]: Hook inspection chooses key matches over exact names `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#131041](https://github.com/openclaw/openclaw/issues/131041) [Bug]: IMAP retries can stall or skip mail after failed admission `maintainer` `P1` `clawsweeper:source-repro` `impact:message-loss` 💬1
- [#131096](https://github.com/openclaw/openclaw/issues/131096) openclaw cron add/edit requires undocumented `pairing required` scope `P3` 💬1
- [#131094](https://github.com/openclaw/openclaw/issues/131094) config reload triggers full process restart (SIGUSR1) instead of hot-reload `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#131097](https://github.com/openclaw/openclaw/issues/131097) feishu plugin npm install races with gateway restart, causing chunk module not found `P1` `impact:other` 💬1
- [#131093](https://github.com/openclaw/openclaw/issues/131093) system prompt digest changes on every file write, causing 100% prompt cache miss rate `P3` 💬1
- [#131095](https://github.com/openclaw/openclaw/issues/131095) exec tool mangles `$_` / `$var` in powershell -Command mode (Windows) 💬1
- [#131090](https://github.com/openclaw/openclaw/issues/131090) cron: agentTurn run can silently kill itself by removing its own job mid-run `maintainer` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#131089](https://github.com/openclaw/openclaw/issues/131089) memory_embedding_cache grows unbounded: the prune is unreachable and only runs on full reindex `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#131057](https://github.com/openclaw/openclaw/issues/131057) IMAP sender validation throws on DMARC none and temperror `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#131085](https://github.com/openclaw/openclaw/issues/131085) Memory index stores embeddings as full-precision decimal JSON, twice: the vector half is 90% of the database `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#131087](https://github.com/openclaw/openclaw/issues/131087) fix(config): account groupPolicy default shadows channel-level groupPolicy `maintainer` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#131040](https://github.com/openclaw/openclaw/issues/131040) [Bug]: Secret-store dry-run accepts invalid input and import partially writes it `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#131071](https://github.com/openclaw/openclaw/issues/131071) [Bug]: Labeled browser screenshots return mis-scaled annotation boxes on native high-DPI displays `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#131046](https://github.com/openclaw/openclaw/issues/131046) [Bug]: host-thaw detector treats event-loop stalls as suspension and restarts channels during active turns `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#131036](https://github.com/openclaw/openclaw/issues/131036) [Docs Bug]: Why OpenClaw overstates IMAP recovery and default tool restrictions `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#131016](https://github.com/openclaw/openclaw/issues/131016) Control UI retained session goes blank after a peer-tab deletion `maintainer` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#131012](https://github.com/openclaw/openclaw/issues/131012) [Feature]: Expose `queued` session-run status in the sessions_list agent tool `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#130982](https://github.com/openclaw/openclaw/issues/130982) perf: report production-shaped SQLite scenarios independently `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#131030](https://github.com/openclaw/openclaw/issues/131030) [Bug]: claude-mythos-5 catalog entry missing contextWindows picker that opus-5/sonnet-5/fable-5 expose `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:auth-provider` 💬1
- [#131033](https://github.com/openclaw/openclaw/issues/131033) [Feedback] imageModel points to an unregistered model ID, does not follow text-model switches, has no UI entry - image understanding is completely broken `P2` `impact:auth-provider` 💬1
- [#131031](https://github.com/openclaw/openclaw/issues/131031) [Feature]: Add gemini-3.1-flash-lite-image (Nano Banana 2 Lite) to Google image-generation catalog `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#131028](https://github.com/openclaw/openclaw/issues/131028) [Bug]: Groq reasoning models ignore /think levels — resolveGroqReasoningCompatPatch is never wired into the runtime `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#131029](https://github.com/openclaw/openclaw/issues/131029) [Feature]: Signal channel: support a UNIX domain socket transport (`socketPath`) alongside `httpUrl` `enhancement` `P3` 💬1
- [#130971](https://github.com/openclaw/openclaw/issues/130971) Compaction timeout kills summarization streams that are merely slow — bound stalls (no-progress), not total time `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#130998](https://github.com/openclaw/openclaw/issues/130998) Doctor media migration overflows on SUM(created_at) and exits 0 after skipping agent DB `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#131005](https://github.com/openclaw/openclaw/issues/131005) [Bug]: Nextcloud Talk acknowledges and drops file shares and empty messages with no recorded reason `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#131004](https://github.com/openclaw/openclaw/issues/131004) [Bug]: WhatsApp approval reactions are silently dropped on transient Gateway failures `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#131011](https://github.com/openclaw/openclaw/issues/131011) [Bug]: post-update LaunchAgent refresh re-inherits Gateway service identity `no-stale` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` 💬1
- [#131003](https://github.com/openclaw/openclaw/issues/131003) [Bug]: iMessage approval reactions are silently dropped on transient Gateway failures `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#130649](https://github.com/openclaw/openclaw/issues/130649) [Feature]: Show activity cards for online people in the Control UI `enhancement` `maintainer` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#131459](https://github.com/openclaw/openclaw/issues/131459) [Bug]: rebuilding the macOS app can leave its node worker stale `maintainer`
- [#131457](https://github.com/openclaw/openclaw/issues/131457) [Feature]: Add progress streaming mode to the Feishu (Lark) channel
- [#131234](https://github.com/openclaw/openclaw/issues/131234) Issue on docs

#### 🔒 Closed Issues
- [#81061](https://github.com/openclaw/openclaw/issues/81061) Hook: before_route_inbound_message — pre-routing interception for channel bridging/proxying
- [#112248](https://github.com/openclaw/openclaw/issues/112248) @openclaw/codex plugin fails to register on gateway boot — all /codex slash commands silently no-op (TypeError: Cannot read properties of undefined (reading 'openSyncKeyedStore'))
- [#130968](https://github.com/openclaw/openclaw/issues/130968) [Bug]: Update fresh doctor waits on the parent plugin lifecycle lease
- [#118489](https://github.com/openclaw/openclaw/issues/118489) [Bug]: Failed-tool finalization is still skipped after prior tool presentation or stale lifecycle state
- [#130954](https://github.com/openclaw/openclaw/issues/130954) [Bug]: post-core updater deadlocks its Doctor child on plugin lifecycle lease
- [#128657](https://github.com/openclaw/openclaw/issues/128657) [Bug]: Control UI loading shimmers repaint every frame
- [#121756](https://github.com/openclaw/openclaw/issues/121756) [Bug]: Control UI cannot recover channel-originated active run after reload
- [#130977](https://github.com/openclaw/openclaw/issues/130977) [Bug]: Linux plugins-list startup-memory gate flakes at current runner variance
- [#124343](https://github.com/openclaw/openclaw/issues/124343) [Bug]: yield-owned settle-wake parks a completed subagent forever — no delivery, no retry, no recorded reason
- [#92015](https://github.com/openclaw/openclaw/issues/92015) Hardening: Skip default workspace auto-scaffold & git init for runtime-managed (ACP) agents
- [#128743](https://github.com/openclaw/openclaw/issues/128743) MCP tool schemas with a root-level anyOf are normalised into an unsatisfiable schema
- [#131303](https://github.com/openclaw/openclaw/issues/131303) [Bug]: Automatic session titles answer file requests instead of naming them
- [#128145](https://github.com/openclaw/openclaw/issues/128145) acpx: thinkingLevel 'adaptive' default breaks ACP runs with ollama-cloud models
- [#131299](https://github.com/openclaw/openclaw/issues/131299) [Bug]: Code Mode loses cancellation diagnostics when the tool catalog closes
- [#128666](https://github.com/openclaw/openclaw/issues/128666) [Bug]: Overlay entrances use conflicting motion origins
- [#130919](https://github.com/openclaw/openclaw/issues/130919) [Bug]: Source installer restarts an already refreshed Gateway service twice
- [#124218](https://github.com/openclaw/openclaw/issues/124218) RFC: channel-agnostic sender authentication strength (implementation)
- [#131058](https://github.com/openclaw/openclaw/issues/131058) [Bug]: Control UI JSON disclosures rewrite numbers and duplicate keys
- [#129765](https://github.com/openclaw/openclaw/issues/129765) [Bug]: Agent SDK cutover changes Claude Max client identity to sdk-ts and intermittently triggers third-party Extra Usage 400/402
- [#130892](https://github.com/openclaw/openclaw/issues/130892) [Bug]: Idle scroll notification cancels an unfinished Scroll to latest command
- [#130742](https://github.com/openclaw/openclaw/issues/130742) doctor's State integrity (missing/orphan transcript) check only inspects the default agent's session store
- [#119922](https://github.com/openclaw/openclaw/issues/119922) cron.update: main-session chat delivery is silently dropped instead of rejected
- [#131416](https://github.com/openclaw/openclaw/issues/131416) Running Control UI turns reveal misleading historical message metadata
- [#131209](https://github.com/openclaw/openclaw/issues/131209) [Bug]: OpenShell mirror deletes host FIFOs and Unix sockets after sandbox exec
- [#131305](https://github.com/openclaw/openclaw/issues/131305) Gateway rejects all new cloud-worker turns after 128 lifetime sessions (live-event window leak)
- [#131286](https://github.com/openclaw/openclaw/issues/131286) GLM cloud models leak inline reasoning into visible assistant content — visible-content sanitizer is Kimi-gated
- [#131375](https://github.com/openclaw/openclaw/issues/131375) [Bug]: Transcript auto-start shutdown silently drops export and provider warnings
- [#130194](https://github.com/openclaw/openclaw/issues/130194) [Bug]: /new cannot reset a channel after restart recovery exhaustion
- [#131323](https://github.com/openclaw/openclaw/issues/131323) [Bug]: Git checkout progress floods worktree creation errors
- [#131308](https://github.com/openclaw/openclaw/issues/131308) Open terminals prevent cooperative release-update drains
- [#131271](https://github.com/openclaw/openclaw/issues/131271) [Bug]: Cold script automation preparation reloads plugin sources before guest entry
- [#131324](https://github.com/openclaw/openclaw/issues/131324) [Bug]: Control UI double-counts completed tool invocations
- [#130652](https://github.com/openclaw/openclaw/issues/130652) Cloud runner failure banners hide the full diagnostic
- [#123393](https://github.com/openclaw/openclaw/issues/123393) [Bug]: Control UI chat pane shows "You" instead of sender id/number for direct-message (1:1) inbound messages
- [#130660](https://github.com/openclaw/openclaw/issues/130660) [Bug]: Cloud machine picker loses CPU and RAM with larger Crabbox catalogs
- [#130266](https://github.com/openclaw/openclaw/issues/130266) SecretRef-backed OpenAI API key stays unavailable after successful Codex turns
- [#131279](https://github.com/openclaw/openclaw/issues/131279) [Bug]: Code Mode ends tasks after proven-safe failed waits
- [#112173](https://github.com/openclaw/openclaw/issues/112173) ACP workers hang forever on permission prompts when Gateway runs as a hidden-console Windows service (stdin.isTTY=true)
- [#131225](https://github.com/openclaw/openclaw/issues/131225) [Bug]: Wizard confirmation treats the string false as affirmative
- [#130970](https://github.com/openclaw/openclaw/issues/130970) [Bug]: Package updates deadlock while fresh doctor waits for the plugin lifecycle lease
- [#131189](https://github.com/openclaw/openclaw/issues/131189) [Bug]: Unsupported Codex service-tier diagnostics clutter chat
- [#131124](https://github.com/openclaw/openclaw/issues/131124) [Bug]: Aborting parked Code Mode cells exhausts shared execution slots
- [#131112](https://github.com/openclaw/openclaw/issues/131112) [Bug]: Code Mode automation scripts time out after clearTimeout across awaits
- [#130728](https://github.com/openclaw/openclaw/issues/130728) [Bug]: Twitch replies lose native participant provenance in execution audits
- [#131159](https://github.com/openclaw/openclaw/issues/131159) Copilot GPT-5.4 mini rejects minimal thinking with static model metadata
- [#131073](https://github.com/openclaw/openclaw/issues/131073) [Bug]: Automatic Code Mode loses preferred OpenAI model capability
- [#131142](https://github.com/openclaw/openclaw/issues/131142) [Bug]: Copilot Gemini requests fail when using the static model catalog
- [#131018](https://github.com/openclaw/openclaw/issues/131018) [Bug]: Skill Workshop review blocks foreground admission and contaminates queued user turns
- [#131111](https://github.com/openclaw/openclaw/issues/131111) [Bug]: OpenShell mirror sync deletes nested host symlinks
- [#131135](https://github.com/openclaw/openclaw/issues/131135) Copilot usage checks fail for OAuth profiles with domain metadata
- [#131061](https://github.com/openclaw/openclaw/issues/131061) Package upgrades can lose plugin convergence during restart
- [#131092](https://github.com/openclaw/openclaw/issues/131092) [Bug]: Feishu ordinary Markdown cards bypass size limits and lose fanout receipt IDs
- [#131056](https://github.com/openclaw/openclaw/issues/131056) Trusted plugin hooks cannot start with HTTP hooks disabled
- [#131050](https://github.com/openclaw/openclaw/issues/131050) [Bug]: Code Mode stops task recovery after read-only catalog discovery
- [#131069](https://github.com/openclaw/openclaw/issues/131069) [Bug]: interrupted systemctl status skips disable and deletes legacy unit
- [#131044](https://github.com/openclaw/openclaw/issues/131044) [Bug]: Browser downloads keep transferring after the output cannot be saved
- [#130070](https://github.com/openclaw/openclaw/issues/130070) [Bug]: Control UI cannot bootstrap a newly registered locale
- [#130923](https://github.com/openclaw/openclaw/issues/130923) [Bug]: HTTP hooks hide delivery failures after successful execution
- [#130777](https://github.com/openclaw/openclaw/issues/130777) [Bug]: Cold Talk catalog discovery stalls the Gateway while loading source providers
- [#130978](https://github.com/openclaw/openclaw/issues/130978) [Bug]: Slack edits and streamed final replies lose authored formatting
- [#130700](https://github.com/openclaw/openclaw/issues/130700) [Bug]: channels list JSON omits configured accounts with setup metadata
- [#131346](https://github.com/openclaw/openclaw/issues/131346) TUI safety PTY test merges Escape and Ctrl+U over SSH
- [#131265](https://github.com/openclaw/openclaw/issues/131265) [Bug]: iOS QR pairing does not complete in one action
- [#131025](https://github.com/openclaw/openclaw/issues/131025) [Bug]: Inbox opens after navigation dismisses a pending lazy import
- [#131022](https://github.com/openclaw/openclaw/issues/131022) [Bug]: Navigation dismissal fails before lazy sidebar components load
- [#131361](https://github.com/openclaw/openclaw/issues/131361) [Bug]: v2026.7.1-2 — inbound envelope (sender/channel/timestamp) never reaches the model; bodyForAgent overrides it, breaking group-chat attribution
- [#131138](https://github.com/openclaw/openclaw/issues/131138) config.patch self-deadlocks when hot apply requires channel reload
- [#131317](https://github.com/openclaw/openclaw/issues/131317) New session plus controls should support native new-tab gestures
- [#131342](https://github.com/openclaw/openclaw/issues/131342) [Bug]: `cron status` surfaces a SQLite partition key as a file path, misleading operators about where jobs are stored
- [#131337](https://github.com/openclaw/openclaw/issues/131337) Codex harness: automatic compaction never requests native compaction; the thread is cleared instead, silently discarding the conversation
- [#128700](https://github.com/openclaw/openclaw/issues/128700) [Bug]: Chat steering queue shows contradictory state while disconnected
- [#131240](https://github.com/openclaw/openclaw/issues/131240) [Bug]: Agent-owned sessions show initials instead of configured avatars
- [#131274](https://github.com/openclaw/openclaw/issues/131274) Control UI: modified Enter does not invert steer and queue follow-ups
- [#131264](https://github.com/openclaw/openclaw/issues/131264) TUI stalls on cold non-authentication error display
- [#131262](https://github.com/openclaw/openclaw/issues/131262) Settings search lags while scanning wildcard UI hints
- [#127234](https://github.com/openclaw/openclaw/issues/127234) Inbound media staging: no cross-turn dedupe, no GC — 168x duplication (3.0 GB) from thread-bound Slack attachments
- [#131247](https://github.com/openclaw/openclaw/issues/131247) [Bug]: Control UI offers Retry for fixed operator-role denials
- [#131236](https://github.com/openclaw/openclaw/issues/131236) [Bug]: Claude session discovery repeats project scans and misses the sidebar deadline
- [#131260](https://github.com/openclaw/openclaw/issues/131260) [Bug]: Fabricated internal-context blocks appended to inbound messages, survives full clean reinstall
- [#131246](https://github.com/openclaw/openclaw/issues/131246) Per-run cleanup closes shared MCP loopback server singleton, breaking concurrent agents/subagents ("Unable to connect")
- [#128899](https://github.com/openclaw/openclaw/issues/128899) [Bug]: Codex settled-turn finalization mutes replies when the turn used a dotted MCP/connector tool name
- [#131149](https://github.com/openclaw/openclaw/issues/131149) [Bug]: Cron model-call-started timeout leaks a stale in-memory session work-admission lock — CronSessionLifecycleClaimError recurs on every subsequent run until gateway restart
- [#131148](https://github.com/openclaw/openclaw/issues/131148) Run-end full-summarization emits enable_thinking:false for z.ai glm-5.x, bypassing thinkingLevelMap
- [#131099](https://github.com/openclaw/openclaw/issues/131099) Sender auth strength stage 5: allowFrom lockout-preview finding + widened audit wording
- [#130720](https://github.com/openclaw/openclaw/issues/130720) Embedded runner abandons a turn after a transient transport drop even when every tool result is already persisted
- [#131088](https://github.com/openclaw/openclaw/issues/131088) [Bug]: QA coverage commands ignore required channel drivers
- [#131075](https://github.com/openclaw/openclaw/issues/131075) [Bug]: Hook inspection chooses key matches over exact names
- [#131041](https://github.com/openclaw/openclaw/issues/131041) [Bug]: IMAP retries can stall or skip mail after failed admission
- [#131096](https://github.com/openclaw/openclaw/issues/131096) openclaw cron add/edit requires undocumented `pairing required` scope
- [#131097](https://github.com/openclaw/openclaw/issues/131097) feishu plugin npm install races with gateway restart, causing chunk module not found
- [#131093](https://github.com/openclaw/openclaw/issues/131093) system prompt digest changes on every file write, causing 100% prompt cache miss rate
- [#131095](https://github.com/openclaw/openclaw/issues/131095) exec tool mangles `$_` / `$var` in powershell -Command mode (Windows)
- [#131057](https://github.com/openclaw/openclaw/issues/131057) IMAP sender validation throws on DMARC none and temperror
- [#131040](https://github.com/openclaw/openclaw/issues/131040) [Bug]: Secret-store dry-run accepts invalid input and import partially writes it
- [#131036](https://github.com/openclaw/openclaw/issues/131036) [Docs Bug]: Why OpenClaw overstates IMAP recovery and default tool restrictions
- [#130982](https://github.com/openclaw/openclaw/issues/130982) perf: report production-shaped SQLite scenarios independently
- [#131033](https://github.com/openclaw/openclaw/issues/131033) [Feedback] imageModel points to an unregistered model ID, does not follow text-model switches, has no UI entry - image understanding is completely broken
- [#130164](https://github.com/openclaw/openclaw/issues/130164) sessions_spawn returns "Unable to connect" to the caller while the dispatch actually lands and runs (false-negative dispatch)
- [#131029](https://github.com/openclaw/openclaw/issues/131029) [Feature]: Signal channel: support a UNIX domain socket transport (`socketPath`) alongside `httpUrl`
- [#130649](https://github.com/openclaw/openclaw/issues/130649) [Feature]: Show activity cards for online people in the Control UI
- [#131234](https://github.com/openclaw/openclaw/issues/131234) Issue on docs

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 237,379 · **Open issues:** 36,651 · **Last push:** <1h ago

On August 27, 2026, Hermes Agent released v0.20.6, a patch release rolling up approximately 525 merged pull requests since the previous version, v0.20.5. Key fixes in this release include improvements to the desktop Bot Chat functionality, addressing issues where reopening chat sessions would refetch transcripts and preventing interface flashing during bot switches. Notably, new issues have emerged, such as a bug (#96183) where the Bot Chat panel displays stale messages after reopening, which may hinder user experience. Additionally, concerns were raised about memory write governance affecting agent autonomy and a timeout issue related to backend port announcements on macOS (#96792).

#### 🚀 New Releases
- [v2026.8.27](https://github.com/nousresearch/hermes-agent/releases/tag/v2026.8.27) Hermes Agent v0.20.6 (v2026.8.27)

#### ✅ Merged PRs
- [#96010](https://github.com/NousResearch/hermes-agent/pull/96010) fix(cron): manual run on relay-fronted targets — gateway forward + accurate error
- [#96815](https://github.com/NousResearch/hermes-agent/pull/96815) In-app tips
- [#96650](https://github.com/NousResearch/hermes-agent/pull/96650) fix(desktop): Bot Chat reopen refetches the transcript instead of the idle snapshot (#96183, salvage #96215)
- [#96648](https://github.com/NousResearch/hermes-agent/pull/96648) fix(desktop): Bots home no longer flashes over the chat during bot switches (salvage #95917)

#### 🐛 New Issues
- [#96183](https://github.com/NousResearch/hermes-agent/issues/96183) Desktop: Bot Chat panel shows stale messages after reopen — offline-delivered bot-chat messages don't appear until app restart `type/bug` `P2` `sweeper:risk-session-state` `comp/desktop` 💬5
- [#96155](https://github.com/NousResearch/hermes-agent/issues/96155) [Bug]: Native Responses preflight counts unpruned durable history and triggers compression at ~152K effective input `type/bug` `comp/agent` `provider/openai` `P2` 💬4
- [#96433](https://github.com/NousResearch/hermes-agent/issues/96433) Desktop boot fails: serve-path import of tui_gateway.server (6d4e851d80) rebinds sys.stdout, READY sentinel lands on stderr → 90s timeout kills healthy backend `type/bug` `duplicate` `comp/cli` `comp/tui` 💬4
- [#96348](https://github.com/NousResearch/hermes-agent/issues/96348) [Bug]: Studio bridge history rebuild skips empty-content assistant messages, dropping tool results → per-turn repair forces 0% prompt-cache hits on new user turns `type/bug` `comp/agent` `P0` `sweeper:risk-session-state` 💬3
- [#96570](https://github.com/NousResearch/hermes-agent/issues/96570) Group chat sessions: stored system prompt is null every turn — rebuilt from scratch, prefix cache always misses `type/bug` `comp/agent` `P0` `sweeper:risk-session-state` 💬3
- [#96780](https://github.com/NousResearch/hermes-agent/issues/96780) Preview pane "Browser" tab close button overlaps with tab label `type/bug` `P3` `comp/desktop` 💬2
- [#96767](https://github.com/NousResearch/hermes-agent/issues/96767) feat(config): add --quiet / scripting-friendly output to config set `duplicate` `type/feature` `comp/cli` `area/config` 💬2
- [#96603](https://github.com/NousResearch/hermes-agent/issues/96603) [Bug]: "Summarizing Thread" has become extremely slow after recent updates `type/perf` `comp/agent` `P2` `needs-repro` 💬2
- [#96795](https://github.com/NousResearch/hermes-agent/issues/96795) Memory write governance — the agent-autonomy loop breaks in practice, and our only workaround is a local hack. Please make explicit-only writes and capacity warnings native. `type/feature` `comp/agent` `tool/memory` `P3` 💬1
- [#96792](https://github.com/NousResearch/hermes-agent/issues/96792) [desktop, macOS] "Timed out waiting for Hermes backend port announcement (90000ms)" — stdout listener race in waitForDashboardPort causes false-positive backend death `type/bug` `duplicate` `backend/local` `P1` 💬1
- [#96778](https://github.com/NousResearch/hermes-agent/issues/96778) Photon health polling can exhaust macOS ephemeral ports with TIME_WAIT sockets `type/bug` `comp/gateway` `comp/plugins` `P3` 💬1
- [#96745](https://github.com/NousResearch/hermes-agent/issues/96745) feat: session model audit / bulk reset CLI (sessions pinned to outdated providers) `type/feature` `comp/cli` `P3` `needs-decision` 💬1
- [#96764](https://github.com/NousResearch/hermes-agent/issues/96764) fix(cli): no --quiet for `config set` — non-interactive writes fail with exit 2 and always print a confirmation line `type/feature` `comp/cli` `area/config` `P3` 💬1
- [#96806](https://github.com/NousResearch/hermes-agent/issues/96806) docs: add an interactive xyflow architecture explorer with accessible static fallbacks `type/docs` `P3` `needs-decision` `comp/dashboard`
- [#96811](https://github.com/NousResearch/hermes-agent/issues/96811) Per-response session ids churn every conversation-affinity key (prompt_cache_key, sticky session_id, x-grok-conv-id) `type/perf` `comp/agent` `comp/plugins` `provider/openrouter`
- [#96813](https://github.com/NousResearch/hermes-agent/issues/96813) Profiles dashboard conflates default, session override, and effective fallback model state `type/bug` `area/config` `P3` `sweeper:risk-session-state`
- [#96814](https://github.com/NousResearch/hermes-agent/issues/96814) feat(agent): implement `session_token_hard_stop` — accepted config keys are silently inert `type/feature` `comp/agent` `area/config` `P2`
- [#96816](https://github.com/NousResearch/hermes-agent/issues/96816) fix(codex): assistant-role image parts replay as `input_image` → Responses API 400, session bricked `type/bug` `comp/agent` `tool/vision` `provider/openai`
- [#96817](https://github.com/NousResearch/hermes-agent/issues/96817) fix(gateway): session.create accepts incoherent model×provider pairs, birthing sessions that 400 on message 1 `type/bug` `comp/agent` `comp/gateway` `provider/openai`
- [#96818](https://github.com/NousResearch/hermes-agent/issues/96818) [API Server] Expose persisted USER row ID in successful run.completed event `type/feature` `comp/agent` `comp/gateway` `P3`
- [#96800](https://github.com/NousResearch/hermes-agent/issues/96800) [Bug]: Desktop app UI renders sluggishly on AMD RDNA4 (gfx1200) + Wayland: no supported way to pass GPU flags - ELECTRON_EXTRA_LAUNCH_ARGS fixes it `type/bug` `P2` `needs-repro` `comp/desktop`
- [#96801](https://github.com/NousResearch/hermes-agent/issues/96801) [Bug]: Feishu planned restart can stall after disconnect cancellation skips local cleanup `type/bug` `comp/gateway` `platform/feishu` `P2`
- [#96793](https://github.com/NousResearch/hermes-agent/issues/96793) [Bug]: Desktop/TUI sessions become permanently unresumable if backend restarts before the first prompt `type/bug` `comp/tui` `P2` `sweeper:risk-session-state`
- [#96776](https://github.com/NousResearch/hermes-agent/issues/96776) approvals hardline block false-positive on grep bracket class containing a quote `type/bug` `comp/tools` `tool/terminal` `P2`
- [#96775](https://github.com/NousResearch/hermes-agent/issues/96775) [Bug] Stalled preflight compression interrupted with no durable backoff re-enters the same strategy `type/bug` `comp/agent` `P1` `sweeper:risk-session-state`
- [#96771](https://github.com/NousResearch/hermes-agent/issues/96771) clarify tool: Claude models intermittently garble/substitute Korean (Hangul) text in tool-call arguments `type/bug` `comp/agent` `provider/anthropic` `provider/bedrock`
- [#96610](https://github.com/NousResearch/hermes-agent/issues/96610) [Bug]: tool_call bridge arguments always arrive empty on schema-constrained backends — free-form object declares no additionalProperties `type/bug` `comp/tools` `tool/delegate` `provider/kimi`
- [#96734](https://github.com/NousResearch/hermes-agent/issues/96734) [Bug]: schema_sanitizer injects properties:{} into free-form object params on ALL backends — delegate_task output_schema silently arrives empty ({} + schema_valid:true) `type/bug` `comp/tools` `tool/delegate` `P2`
- [#96758](https://github.com/NousResearch/hermes-agent/issues/96758) whatsapp: reused (unmanaged) bridge death is invisible — gateway poll-loops forever, no respawn, no alert `type/bug` `comp/gateway` `comp/plugins` `platform/whatsapp`
- [#96759](https://github.com/NousResearch/hermes-agent/issues/96759) [Feature]: Support screenshot/image attachments in Desktop live-turn steering `type/feature` `comp/agent` `tool/vision` `P3`
- [#96747](https://github.com/NousResearch/hermes-agent/issues/96747) Platform config silently dropped when platform is registered via user plugin (ValueError swallowed in GatewayConfig.from_dict) `type/bug` `comp/gateway` `comp/plugins` `area/config`
- [#96739](https://github.com/NousResearch/hermes-agent/issues/96739) Free models on OpenRouter return HTTP 413 on capacity exhaustion instead of a meaningful error `type/bug` `comp/agent` `provider/openrouter` `P3`
- [#96742](https://github.com/NousResearch/hermes-agent/issues/96742) SSH-only connection.json is never reconciled into connections.json (v2 registry) — Desktop silently falls back to "This device" `type/bug` `backend/ssh` `area/config` `P2`
- [#96743](https://github.com/NousResearch/hermes-agent/issues/96743) Renderer stays on "Connecting…" after main logs "Remote Hermes backend is ready" with healthy tunnel (SSH remote, after one-click update) `type/bug` `backend/ssh` `P2` `sweeper:risk-compatibility`

#### 🔒 Closed Issues
- [#96183](https://github.com/NousResearch/hermes-agent/issues/96183) Desktop: Bot Chat panel shows stale messages after reopen — offline-delivered bot-chat messages don't appear until app restart
- [#96155](https://github.com/NousResearch/hermes-agent/issues/96155) [Bug]: Native Responses preflight counts unpruned durable history and triggers compression at ~152K effective input
- [#69060](https://github.com/NousResearch/hermes-agent/issues/69060) Telegram inbound reply context injects truncated raw Markdown into the user message
- [#96767](https://github.com/NousResearch/hermes-agent/issues/96767) feat(config): add --quiet / scripting-friendly output to config set
- [#72969](https://github.com/NousResearch/hermes-agent/issues/72969) Windows: computer-use status uses cua-driver 0.12.6 but doctor/tool session runs 0.8.3

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 90,255 · **Open issues:** 7,138 · **Last push:** <1h ago

On August 28, 2026, there were no new releases for vLLM, but several significant pull requests were merged. Notable updates include the upgrade of tpu-inference to version v0.28.0 and a bugfix that reverts renderer warmup overlap to prevent fork deadlocks. Moreover, improvements were made to the GLM-5 architecture, enabling dense and masked MHA functionality, while a performance boost for the Humming MoE was achieved through tuning a low latency GEMM kernel. Among the newly reported issues, a critical bug was raised regarding the GLM-5.3-Flash model lacking a sparse-MLA attention path on specific hardware, highlighting ongoing challenges in model compatibility.

#### ✅ Merged PRs
- [#54020](https://github.com/vllm-project/vllm/pull/54020) Upgrade tpu-inference to v0.28.0
- [#54023](https://github.com/vllm-project/vllm/pull/54023) [Bugfix] Revert renderer warmup overlap to avoid fork deadlock
- [#53109](https://github.com/vllm-project/vllm/pull/53109) [Bugfix] Allocate packed outputs in fused_q_kv_rmsnorm so q_b_proj keeps its low-latency GEMM path at decode
- [#54099](https://github.com/vllm-project/vllm/pull/54099) Remove wrongly added e2e test
- [#54108](https://github.com/vllm-project/vllm/pull/54108) [Misc] Separate adaptive verification config validation
- [#54111](https://github.com/vllm-project/vllm/pull/54111) [Bugfix] Remove race in fused groupwise RMSNorm quantization
- [#54015](https://github.com/vllm-project/vllm/pull/54015) [Kimi-K3] Merge MLA gate into QKV-A projection
- [#52743](https://github.com/vllm-project/vllm/pull/52743) fix(build): correct preprocessor guard for GDN decode to fix Ampere c…
- [#53508](https://github.com/vllm-project/vllm/pull/53508) [Bugfix][MRV2] Isolate sleep-mode KV allocations
- [#53756](https://github.com/vllm-project/vllm/pull/53756) [Rust Frontend][gRPC] Enforce LoRA path validation across transports
- [#54005](https://github.com/vllm-project/vllm/pull/54005) [Bugfix][Model] Fix K3 DSpark config for 96-head drafts
- [#50572](https://github.com/vllm-project/vllm/pull/50572) [kernel] Integrate FlashInfer BF16 CuTeDSL Low Latency GEMM
- [#53785](https://github.com/vllm-project/vllm/pull/53785) [Attention] Enable dense and masked MHA for GLM-5
- [#53797](https://github.com/vllm-project/vllm/pull/53797) Add support for loading dflash2 model in speculators format
- [#54089](https://github.com/vllm-project/vllm/pull/54089) [Bugfix][Parser] Scope reasoning-end detection to the current turn via turn-boundary tokens
- [#53685](https://github.com/vllm-project/vllm/pull/53685) [Perf][DSv4] Use native CUDA SwiGLU clamp kernel for Humming MoE (throughput +1.40%)
- [#54088](https://github.com/vllm-project/vllm/pull/54088) [Kimi Perf] Tune hopper low latency gemm kernel, 4%~97% performance improvement
- [#53666](https://github.com/vllm-project/vllm/pull/53666) [Bugfix] Avoid TCPStore port collision for co-located non-DP Ray engines
- [#53218](https://github.com/vllm-project/vllm/pull/53218) [Rust Frontend] Align OpenAI request and response edge cases
- [#53183](https://github.com/vllm-project/vllm/pull/53183) [Model Runner V2] Use MRV2 for all models by default
- [#53839](https://github.com/vllm-project/vllm/pull/53839) [Doc] Add EXAONE-4.0-1.2B to batch invariance tested models
- [#54056](https://github.com/vllm-project/vllm/pull/54056) Fix Humming MoE activation_output aliasing
- [#53763](https://github.com/vllm-project/vllm/pull/53763) [Bugfix] Handle malformed namespace tools
- [#54012](https://github.com/vllm-project/vllm/pull/54012) [Attention][DCP] Use FlashInfer native CP for MLA decode
- [#53540](https://github.com/vllm-project/vllm/pull/53540) [ROCm][Perf] Fuse SWA q/kv RMSNorm and q FP8 group quant for DeepSeek-V4
- [#53443](https://github.com/vllm-project/vllm/pull/53443) [CI/Build][Hardware][NVIDIA] Add opt-in Rubin Docker builds
- [#53878](https://github.com/vllm-project/vllm/pull/53878) [Perf][GLM5.2] Fuse sparse MLA Q concatenation with head padding
- [#53962](https://github.com/vllm-project/vllm/pull/53962) [Bugfix][Scheduler] Don't pad spec decode up to `max_model_len`
- [#53965](https://github.com/vllm-project/vllm/pull/53965) [Bugfix] Preserve parallel HY-V3 calls delivered in one streaming delta
- [#53779](https://github.com/vllm-project/vllm/pull/53779) [1/N][KV Connector] Identify externally transferable KV cache groups
- [#50932](https://github.com/vllm-project/vllm/pull/50932) buffer size insuffient Dspark sd for FlashInfer MNNVL allreduce
- [#53378](https://github.com/vllm-project/vllm/pull/53378) [Elastic EP] Preserve AOT cache reuse during scaling
- [#53755](https://github.com/vllm-project/vllm/pull/53755) [Bugfix] Update FlashMLA for sparse decode workspace fix
- [#51157](https://github.com/vllm-project/vllm/pull/51157) [Bugfix][Frontend] Let pooling requests set padding
- [#50536](https://github.com/vllm-project/vllm/pull/50536) fix(config): guard LlamaBidirectionalConfig against missing hf_config.pooling
- [#54021](https://github.com/vllm-project/vllm/pull/54021) [Bugfix][KV Offload] Handle padded GPU cache storage
- [#53946](https://github.com/vllm-project/vllm/pull/53946) [Tools][Recipes] Improve sweep recommendations and short-alias parsing
- [#53751](https://github.com/vllm-project/vllm/pull/53751) [RL] Support checkpoint-coordinate sparse NCCL weight updates
- [#47815](https://github.com/vllm-project/vllm/pull/47815) [Bugfix][OpenAI] Fix streamed completion logprob offsets with echo
- [#53999](https://github.com/vllm-project/vllm/pull/53999) [Bugfix] Raise clear error on interleaved multimodal placeholder overcount
- [#53949](https://github.com/vllm-project/vllm/pull/53949) [Rocm][CI] add dockerfile.xpu to rocm ci artifact
- [#53396](https://github.com/vllm-project/vllm/pull/53396) [Kimi K3][Kernel] Support DS conv-state layout in fused KDA decode kernel
- [#52764](https://github.com/vllm-project/vllm/pull/52764) [warmup] overlap renderer warmup and engine core initialization
- [#53920](https://github.com/vllm-project/vllm/pull/53920) [Benchmark] Warn on warm prefix cache for random serve runs
- [#53869](https://github.com/vllm-project/vllm/pull/53869) Bugfix: use PCP slot mappings for PIECEWISE capture
- [#53694](https://github.com/vllm-project/vllm/pull/53694) [Model Runner V2][Spec Decode] Skip DP sync before EAGLE/MTP draft prefill
- [#53817](https://github.com/vllm-project/vllm/pull/53817) [XPU][Dockerfile] Update UCX install
- [#49994](https://github.com/vllm-project/vllm/pull/49994) [EC Connector] EC Offloading Connector use events instead of StepTracker

#### 🐛 New Issues
- [#54059](https://github.com/vllm-project/vllm/issues/54059) [Model]: GLM-5.3-Flash (glm5_next): no sparse-MLA attention path on Ada (sm_89, RTX 4090) `glm` 💬5
- [#54046](https://github.com/vllm-project/vllm/issues/54046) [Bug]: [dspark] Adaptive verification profiles a batch shape the scheduler cannot produce `bug` `scheduler` 💬5
- [#54027](https://github.com/vllm-project/vllm/issues/54027) [Bug]: DFlash2 + YaRN identical 1.04M prompt gets zero prefix-cache reuse while target-only reuses ~1.039M tokens 💬4
- [#54087](https://github.com/vllm-project/vllm/issues/54087) [Bug]: torch profiler hangs on ROCm after rocprofiler-sdk 1.3.2 bump `bug` `rocm` 💬4
- [#54062](https://github.com/vllm-project/vllm/issues/54062) [Bug]: GLM-5.3-Flash - attention archiecture Glm5NextTextLinearAttention not supported `bug` `glm` 💬3
- [#54017](https://github.com/vllm-project/vllm/issues/54017) [Bug]: Unsupported `reasoning_effort` value causes 500 error when chat template rejects it `bug` `kimi` `k3` 💬3
- [#54114](https://github.com/vllm-project/vllm/issues/54114) [Bug]: Evaluating GLM-5.1-FP8 for reasoning over large contexts produces unexpectedly poor level of accuracy. `bug` `rocm` `glm` 💬2
- [#54002](https://github.com/vllm-project/vllm/issues/54002) [Bug]: crashed engine leaks /dev/shm/vllm_offload_*.mmap, making every in-place container restart fail at SharedOffloadRegion init 💬2
- [#54125](https://github.com/vllm-project/vllm/issues/54125) [Bug]: DeepGEMM is reported supported on sm_121 (GB10) but faults — support_deep_gemm() accepts the whole 120 capability family 💬1
- [#54082](https://github.com/vllm-project/vllm/issues/54082) [Feature]: Entropy-Gated Dynamic Speculative Decoding (Dynamic k in {0, K}) via Real-Time Shannon Hysteresis `feature request` `speculative-decoding` 💬1
- [#54080](https://github.com/vllm-project/vllm/issues/54080) [RFC]: TreeWY: Tree Speculative Decoding for hybrid (GDN) models `RFC` `speculative-decoding` 💬1
- [#54094](https://github.com/vllm-project/vllm/issues/54094) [Bug]: DFlash2 + YaRN identical 1.04M prompt gets zero prefix-cache reuse while target-only reuses ~1.039M tokens `bug` 💬1
- [#54084](https://github.com/vllm-project/vllm/issues/54084) [Bug]: Fused GDN decode kernel never built for sm_110 (Jetson Thor); enabling it exposes an ops.h guard mismatch 💬1
- [#54067](https://github.com/vllm-project/vllm/issues/54067) [Bug]: benchmark_moe.py quantizes weights with current_platform.fp8_dtype() but builds the quant config with a hardcoded float8_e4m3fn `rocm` `quantization` 💬1
- [#54003](https://github.com/vllm-project/vllm/issues/54003) [Bug]: JSON/GRAMMAR structured-output schema compilation has no timeout (regex does); deeply-nested schemas cause unbounded compile time 💬1
- [#54039](https://github.com/vllm-project/vllm/issues/54039) [Question] async scheduling defaults to on for ROCm + MTP speculative decoding, while vLLM's own ROCm CI disables that combination (#32275) — was the hang root-caused, and should the default resolution encode it? `rocm` `speculative-decoding` 💬1
- [#54035](https://github.com/vllm-project/vllm/issues/54035) [Bug]: FP8 KV cache causes systematic decode/prefill logprob mismatch on Hopper FA3 💬1
- [#53993](https://github.com/vllm-project/vllm/issues/53993) [Bug]: [XPU] V2 model runner fails under XPU graphs: grammar-bitmask copy_stream wait_stream inside SYCL graph recording (Gemma 4) `intel-gpu` 💬1
- [#54139](https://github.com/vllm-project/vllm/issues/54139) [Feature]: MORE VELOCITY TO INFERENCE `feature request`
- [#54126](https://github.com/vllm-project/vllm/issues/54126) [Bug]: ModelOpt FP8_PB_WO checkpoints using the weight_scale_inv / rank-2 export convention fail to load
- [#54122](https://github.com/vllm-project/vllm/issues/54122) [Bug]: Cold AOT compilation is charged as peak activation memory, shrinking KV cache until restart
- [#53998](https://github.com/vllm-project/vllm/issues/53998) [Bug]: MLA DSpark draft config rejected by inherited DeepseekV2Config.validate_architecture (MHA-only hidden_size % num_attention_heads check) `kimi`
- [#54116](https://github.com/vllm-project/vllm/issues/54116) [CI Failure]: Entrypoints Integration (API Server OpenAI - Part 1) - test_openai_schema.py::test_openapi_stateless[POST /inference/v1/generate] 500 on fuzzed ec_transfer_params `ci-failure`
- [#54106](https://github.com/vllm-project/vllm/issues/54106) [Feature]: KV cache group splitting assumes n:1 pattern between attention types `feature request`
- [#54104](https://github.com/vllm-project/vllm/issues/54104) [Enhancement] KV cache group splitting assumes n:1 pattern between attention types
- [#54101](https://github.com/vllm-project/vllm/issues/54101) [Bug]: bench serve latency metrics exclude client-side queueing under --max-concurrency
- [#54097](https://github.com/vllm-project/vllm/issues/54097) [Bug]: installed-but-unloadable torchcodec kills startup — OSError escapes the (ImportError, RuntimeError) guards
- [#54096](https://github.com/vllm-project/vllm/issues/54096) [Bug]: logger.warning_once with a live exception argument leaks the exception's entire traceback (pins the LLM instance on platforms without vllm._C)` `bug`
- [#54060](https://github.com/vllm-project/vllm/issues/54060) [Usage]: Qwen3-Omni-30B-A3B-Instruct input tokens doubled `usage`
- [#54047](https://github.com/vllm-project/vllm/issues/54047) [Bug]: GraniteMoeHybrid cannot load per-expert quantized checkpoints — KeyError: 'layers.0.block_sparse_moe.experts.w2_weight' `bug` `quantization`
- [#54018](https://github.com/vllm-project/vllm/issues/54018) [Bug][CPU] GLM-5.x (glm_moe_dsa) cannot run on CPU: sparse attention forced by config, no way to disable `glm`
- [#54011](https://github.com/vllm-project/vllm/issues/54011) [Bug][Spec Decode] DSpark adaptive verification on SM90 (H20): draft acceptance collapse + hang during batch drain (sample_tokens RPC timeout) `bug`
- [#53992](https://github.com/vllm-project/vllm/issues/53992) [Bug]: GPTQ fused-shard check rejects Gemma 4 qkv_proj (global-attention layers have no v_proj) when modules_in_block_to_quantize is derived from the checkpoint `intel-gpu` `quantization`

#### 🔒 Closed Issues
- [#35800](https://github.com/vllm-project/vllm/issues/35800) [Bug]: Enabling speculative coding causes malformed Tool Calls in Qwen 122B MXFP4
- [#46657](https://github.com/vllm-project/vllm/issues/46657) [Bug]: test_logprobs.py::test_spec_decode_logprobs not using eager mode even though comment says it is
- [#53137](https://github.com/vllm-project/vllm/issues/53137) [Bug]: tools/recipes/recipe_json_to_vllm_config.py silently mis-parses the -cc (compilation-config) short alias
- [#54027](https://github.com/vllm-project/vllm/issues/54027) [Bug]: DFlash2 + YaRN identical 1.04M prompt gets zero prefix-cache reuse while target-only reuses ~1.039M tokens
- [#53413](https://github.com/vllm-project/vllm/issues/53413) [Bug]: GLM-5.2 FP8 on 8×H200 dies with runtime CUDA OOM in sparse_decode_fwd
- [#41031](https://github.com/vllm-project/vllm/issues/41031) [Bug]: AssertionError in sampler.py:383
- [#41048](https://github.com/vllm-project/vllm/issues/41048) [Bug]: Incorrect Transport for NIXL in Docker image on cu129
- [#50877](https://github.com/vllm-project/vllm/issues/50877) [Bug]: DSpark speculative decoding triggers FlashInfer MNNVL allreduce "buffer size insufficient" via draft model's embed_input_ids (TP8, GB200 NVL72)
- [#44545](https://github.com/vllm-project/vllm/issues/44545) [Bug]: GLM-5 FP8 OOM for long inputs at `flash_mla_cuda.sparse_decode_fwd` on H200
- [#44862](https://github.com/vllm-project/vllm/issues/44862) [Bug]: EngineDeadError: RPC call to execute model timed out on CPU when running google/gemma-4-26B-A4B-it with large concurrent decode batch`
- [#54084](https://github.com/vllm-project/vllm/issues/54084) [Bug]: Fused GDN decode kernel never built for sm_110 (Jetson Thor); enabling it exposes an ops.h guard mismatch
- [#47249](https://github.com/vllm-project/vllm/issues/47249) [Bug]:DeepSeek-V4-Flash (TP=4) worker dies with no traceback during a ~8s runtime TileLang recompile of mhc_pre_big_fuse_with_norm_tilelang
- [#53993](https://github.com/vllm-project/vllm/issues/53993) [Bug]: [XPU] V2 model runner fails under XPU graphs: grammar-bitmask copy_stream wait_stream inside SYCL graph recording (Gemma 4)
- [#53998](https://github.com/vllm-project/vllm/issues/53998) [Bug]: MLA DSpark draft config rejected by inherited DeepseekV2Config.validate_architecture (MHA-only hidden_size % num_attention_heads check)
- [#54104](https://github.com/vllm-project/vllm/issues/54104) [Enhancement] KV cache group splitting assumes n:1 pattern between attention types
- [#53992](https://github.com/vllm-project/vllm/issues/53992) [Bug]: GPTQ fused-shard check rejects Gemma 4 qkv_proj (global-attention layers have no v_proj) when modules_in_block_to_quantize is derived from the checkpoint
- [#52884](https://github.com/vllm-project/vllm/issues/52884) [Feature]: warn from `vllm bench serve` when a repeated random-dataset run hits a warm prefix cache, which inflates throughput by up to 86%

### SGLang (`sgl-project/sglang`)

**Stars:** 32,588 · **Open issues:** 5,001 · **Last push:** <1h ago

Today was relatively routine for SGLang, with no new releases. Notable merged PRs include improvements such as enabling the aiter mla asm path through padding attention heads for the Kimi K3 model, adding `free_full` functionality to release tombstoned SWA nodes, and addressing multistream QKV buffer lifetime issues in DeepSeek V4. Significant bug reports were raised, including Qwen3.5-VL's grounding and bbox offset issues on CUDA and crashes on startup related to GLM-5.3-Flash. Ongoing concerns with the Kimi-K3 + DCP models also surfaced, particularly regarding performance when dealing with long chunked prefill tasks.

#### ✅ Merged PRs
- [#36568](https://github.com/sgl-project/sglang/pull/36568) perf: skip redundant scheduler metadata gather for DP1
- [#36356](https://github.com/sgl-project/sglang/pull/36356) [AMD] Enable aiter mla asm path through padding attn heads for Kimi K3
- [#36637](https://github.com/sgl-project/sglang/pull/36637) [mem_cache] Add `free_full` to release the full side of a tombstoned SWA node
- [#36211](https://github.com/sgl-project/sglang/pull/36211) [k3] declare packed_modules_mapping on `KimiK3ForConditionalGeneration`
- [#36547](https://github.com/sgl-project/sglang/pull/36547) Fix DeepSeek V4 multistream QKV buffer lifetime
- [#36672](https://github.com/sgl-project/sglang/pull/36672) [NPU] Chain PR test jobs and disable two DeepSeek-V4-Flash perf tests
- [#34747](https://github.com/sgl-project/sglang/pull/34747) [Cosmos3] Add cosmos3 transfer capability
- [#36760](https://github.com/sgl-project/sglang/pull/36760) [sglang-miles] Cherry pick #35708
- [#35727](https://github.com/sgl-project/sglang/pull/35727) [NPU][Bugfix] Fix OOB gather in decode KV allocation when free pool is tight
- [#36502](https://github.com/sgl-project/sglang/pull/36502) [diffusion] fuse Helios paired transposed RoPE
- [#35451](https://github.com/sgl-project/sglang/pull/35451) [Feature] Support PP in full prefill CUDA graphs
- [#36755](https://github.com/sgl-project/sglang/pull/36755) Fix DFLASH aux hidden-state capture on mHC models
- [#36529](https://github.com/sgl-project/sglang/pull/36529) [Fix][XPU/ROCm/NPU] Defer sgl_kernel.quantization import in expert_pack
- [#36747](https://github.com/sgl-project/sglang/pull/36747) Revert "[NPU] [bugfix] Fix import of ggml_moe_a8_vec and Fix NPU MLA HiCache backup accessing missing data_ptrs"
- [#36640](https://github.com/sgl-project/sglang/pull/36640) [NPU] [bugfix] Fix import of ggml_moe_a8_vec and Fix NPU MLA HiCache backup accessing missing data_ptrs
- [#36739](https://github.com/sgl-project/sglang/pull/36739) [misc] Fold the allocator free-group flag into `free_group`
- [#36740](https://github.com/sgl-project/sglang/pull/36740) cookbook: add a Speculative card to the GLM-5.3-Flash playground
- [#35374](https://github.com/sgl-project/sglang/pull/35374) [Kernel] Add H200 MoE configs for Qwen3.5 and Qwen3.6
- [#36736](https://github.com/sgl-project/sglang/pull/36736) [AMD][CI] Merge the four MI35x DeepSeek-V3.2 nightly jobs into two to save runtime
- [#36681](https://github.com/sgl-project/sglang/pull/36681) Move server args config parser under utils
- [#34842](https://github.com/sgl-project/sglang/pull/34842) Revert "[Fix] Disable --enable-symm-mem under CUDA graphs on Kimi hybrid models"
- [#36288](https://github.com/sgl-project/sglang/pull/36288) [1/N][Mix] Mixed Chunk Prefill Base
- [#36725](https://github.com/sgl-project/sglang/pull/36725) config: every handler declares its cuda-graph decisions
- [#36622](https://github.com/sgl-project/sglang/pull/36622) config: the record is not an object that gets passed around
- [#36621](https://github.com/sgl-project/sglang/pull/36621) config: a parallel size has one spelling; a patched scope declares its own
- [#36620](https://github.com/sgl-project/sglang/pull/36620) config: a parallel leaf with no live counterpart is read bare
- [#36618](https://github.com/sgl-project/sglang/pull/36618) config: resolution declares, and nothing writes a field
- [#36544](https://github.com/sgl-project/sglang/pull/36544) GLM-5.3-Flash cookbook: HiCache for LL, fusion-flag drop, EAGLE, default-cell numbers, DCP4 overlay
- [#36676](https://github.com/sgl-project/sglang/pull/36676) Refactor server_args constants and layout
- [#36719](https://github.com/sgl-project/sglang/pull/36719) [Docs] GLM-5.3-Flash: point at compute-mamba-ratio for the KDA/KV pool split
- [#36364](https://github.com/sgl-project/sglang/pull/36364) docs(cookbook): add GB10 (DGX Spark) MXFP4 cells for Ling-3.0-flash
- [#36708](https://github.com/sgl-project/sglang/pull/36708) [DFLASH] Support GLM-5.3-Flash hidden-state capture
- [#36595](https://github.com/sgl-project/sglang/pull/36595) [Fix] Re-encode multimodal embeddings after cache mismatch
- [#36542](https://github.com/sgl-project/sglang/pull/36542) [diffusion] Fix native LingBot-Video text encoding
- [#36160](https://github.com/sgl-project/sglang/pull/36160) [PD][mori] Align prefill transfer control plane for unified control plane
- [#36577](https://github.com/sgl-project/sglang/pull/36577) [Diffusion] Fuse LongCat residual gate updates
- [#36592](https://github.com/sgl-project/sglang/pull/36592) [Diffusion][Kernel] Fuse Wan FFN GELU epilogue
- [#36571](https://github.com/sgl-project/sglang/pull/36571) [diffusion] Fuse Cosmos3 Nano T2I attention on Hopper
- [#36553](https://github.com/sgl-project/sglang/pull/36553) [diffusion] Accept mesh benchmark artifacts
- [#36485](https://github.com/sgl-project/sglang/pull/36485) [diffusion] align video BCG warmup frame count
- [#34608](https://github.com/sgl-project/sglang/pull/34608) Publish per-scheduler load on a dedicated socket for load-aware routers
- [#35349](https://github.com/sgl-project/sglang/pull/35349) [VLM] Size the multimodal preprocessing pool by where preprocessing runs
- [#36611](https://github.com/sgl-project/sglang/pull/36611) docs(cookbook): fix Qwen3.8 Flash Next H200 MTP verify with BF16 SSM state
- [#36543](https://github.com/sgl-project/sglang/pull/36543) [kernel] Tune LingBot-Video MoE TMA configs for H100
- [#36649](https://github.com/sgl-project/sglang/pull/36649) fix(qsa): enable trtllm-gen sparse decode on sm_121 (GB10 / DGX Spark)
- [#34053](https://github.com/sgl-project/sglang/pull/34053) [Fix] Account resident weight memory in KV sizing
- [#34492](https://github.com/sgl-project/sglang/pull/34492) XPU: remove SGLANG_USE_SGL_XPU flag
- [#36589](https://github.com/sgl-project/sglang/pull/36589) fix: kill_process_tree waits for the reap by default
- [#35611](https://github.com/sgl-project/sglang/pull/35611) [AMD] Enable moe_a2a_backend=mori for DeepSeek-V4 prefill context parallelism
- [#36660](https://github.com/sgl-project/sglang/pull/36660) cookbook: fix GLM-5.3-Flash speculative flag, size Hopper memory, record GSM8K
- [#36586](https://github.com/sgl-project/sglang/pull/36586) [Core] Refactor server argument choices
- [#36605](https://github.com/sgl-project/sglang/pull/36605) [CI] Graceful teardown for the radix_cache server fixtures
- [#36639](https://github.com/sgl-project/sglang/pull/36639) [CI] Fix Q8KV8 sparse prefill test fixture
- [#35275](https://github.com/sgl-project/sglang/pull/35275) [Bug][Spec] fix startup crash and reduce CUDA graph memory usage for speculative adaptive
- [#35947](https://github.com/sgl-project/sglang/pull/35947) Publish gated DSV4 DFLASH-family target-prefill read completion
- [#35944](https://github.com/sgl-project/sglang/pull/35944) Pin scheduler metadata before asynchronous H2D copies
- [#36636](https://github.com/sgl-project/sglang/pull/36636) [AMD][CI] Add targeted Mori test labels
- [#36330](https://github.com/sgl-project/sglang/pull/36330) [AMD] Optimize Qwen3.5 MTP unified attention on gfx950
- [#36100](https://github.com/sgl-project/sglang/pull/36100) [ci] xpu: trigger pr-test-xpu on multimodal_gen changes
- [#36198](https://github.com/sgl-project/sglang/pull/36198) [Weight Cache] Enhance test and support EPLB
- [#36413](https://github.com/sgl-project/sglang/pull/36413) [CPU][CI]: fix a few issues that cause XEON CI failures
- [#36608](https://github.com/sgl-project/sglang/pull/36608) [AMD] Add GLM-5.3-Flash recipes for MI300X, MI325X, and MI355X
- [#36541](https://github.com/sgl-project/sglang/pull/36541) [AMD] Fix int32 seqused_k overflow in aiter draft-extend attention

#### 🐛 New Issues
- [#36762](https://github.com/sgl-project/sglang/issues/36762) [Bug] Qwen3.5-VL grounding/bbox offset ~90px on CUDA: fused_qk_gemma_rmsnorm_rope_gate mishandles partial + interleaved MRoPE 💬2
- [#36711](https://github.com/sgl-project/sglang/issues/36711) [Bug] GLM-5.3-Flash (glm5_next) crashes on startup with --moe-runner-backend flashinfer_trtllm: IndexError index 288 out of bounds in logical_to_all_physical 💬2
- [#36702](https://github.com/sgl-project/sglang/issues/36702) [Bug] Kimi-K3 + DCP: all TP ranks wedge in filter_dcp_local_kv_indices (nonzero → cudaStreamSynchronize) on long chunked prefill; 300s watchdog, memory free 💬2
- [#36701](https://github.com/sgl-project/sglang/issues/36701) [Bug] Qwen3.8-Flash-Next on sm_120 (RTX PRO 6000 Blackwell): QSA decode kernel gated to sm_100, plus contradictory SSM dtype checks 💬2
- [#36741](https://github.com/sgl-project/sglang/issues/36741) [Bug] Anthropic endpoint: output_config.effort forwarded unvalidated -> 500, and xhigh is made unreachable 💬1
- [#36616](https://github.com/sgl-project/sglang/issues/36616) [Bug] qwen3.8 flash next rocm bug `amd` 💬1
- [#36716](https://github.com/sgl-project/sglang/issues/36716) qwen38flashnext cookbook image: 4 bugs on single-device SM121 (GB10 Spark) — silent garbage decode (trtllm-gen), non-compacting _compact_kv, TMA-O varlen boot crash, fp8 tl.dot in sparse prefill 💬1
- [#36669](https://github.com/sgl-project/sglang/issues/36669) [Bug] GLM-5.3-Flash thinking output degenerates into repeated '!' under multi-tool agentic prompts 💬1
- [#36653](https://github.com/sgl-project/sglang/issues/36653) [Bug] NEXTN/MTP speculative decoding fails to load MTP MoE weights under TP>1 for Glm5NextForConditionalGeneration (GLM-5.3-Flash) 💬1
- [#36764](https://github.com/sgl-project/sglang/issues/36764) [Bug] 374 MB of every `lmsysorg/sglang:latest` pull is three directories the Dockerfile deletes one layer too late
- [#36734](https://github.com/sgl-project/sglang/issues/36734) [Bug] Models fail to produce non-empty answer while evaluated for reasoning on long context.
- [#36715](https://github.com/sgl-project/sglang/issues/36715) [Feature]: Entropy-Gated Dynamic Speculative Decoding (Dynamic k in {0, K}) via Real-Time Shannon Hysteresis
- [#36698](https://github.com/sgl-project/sglang/issues/36698) [Bug] DeepSeek-V4-Flash-0731 fails to stop at stop sequence when preceded by Chinese text
- [#36690](https://github.com/sgl-project/sglang/issues/36690) [Bug] gemma-3n-E2B-it/E4B-it: degenerate output (fa3/flashinfer) or crash (triton) in multimodal serving, 0% vision accuracy
- [#36678](https://github.com/sgl-project/sglang/issues/36678) [Feature] Expose opt-in per-request metrics in OpenAI-compatible responses
- [#36675](https://github.com/sgl-project/sglang/issues/36675) [Bug]
- [#36663](https://github.com/sgl-project/sglang/issues/36663) [Bug] FlashInfer prefill treats AttentionType.DECODER_BIDIRECTIONAL as causal
- [#36633](https://github.com/sgl-project/sglang/issues/36633) [CPU] FP8 KV store: keep fused decode path, stop using Python index_put `intel` `cpu`

#### 🔒 Closed Issues
- [#29099](https://github.com/sgl-project/sglang/issues/29099) [RFC] Agent-aware Session-level Cache Preemption for StreamingSession
- [#29548](https://github.com/sgl-project/sglang/issues/29548) [Bug] Qwen3.5-122B-A10B-FP8 hangs in cuGraphLaunch during full decode CUDA graph replay with 2-node TP
- [#28042](https://github.com/sgl-project/sglang/issues/28042) [Bug] qwen3.6-27b使用sglang=0.5.10.post1部署，结果content经常是none
- [#29010](https://github.com/sgl-project/sglang/issues/29010) [Bug] DP-attention + multimodal: scheduler crash on FileNotFoundError '/psm_*' (ShmPointerMMData shm unlink/open race in request broadcast)
- [#36762](https://github.com/sgl-project/sglang/issues/36762) [Bug] Qwen3.5-VL grounding/bbox offset ~90px on CUDA: fused_qk_gemma_rmsnorm_rope_gate mishandles partial + interleaved MRoPE
- [#29577](https://github.com/sgl-project/sglang/issues/29577) Qwen3.5 text-only ModelOpt FP4 reaches base AttentionBackend from RadixLinearAttention
- [#28479](https://github.com/sgl-project/sglang/issues/28479) Clarify maintenance status of legacy TensorDumper vs. new Dumper
- [#28992](https://github.com/sgl-project/sglang/issues/28992) [Bug] `intel_amx` backend can segfault non-deterministically during long-running CPU serving
- [#29179](https://github.com/sgl-project/sglang/issues/29179) [Bug] LoRA request cancellation `/abort_request` can hang original `/generate` HTTP responses under concurrency
- [#28615](https://github.com/sgl-project/sglang/issues/28615) [Bug] DP attention crashes at KV store for qwen2.py models (Qwen2.5): KV head count split by tp_size vs full DP KV pool
- [#28852](https://github.com/sgl-project/sglang/issues/28852) Support MiniMax-M3-MXFP8 on H200 with fallback/dequant path
- [#28792](https://github.com/sgl-project/sglang/issues/28792) [Bug] Antropic endpoint have wrong checks for the format of prompts - Claude Code not works.
- [#28999](https://github.com/sgl-project/sglang/issues/28999) [Bug] Hardcoded torch.cuda.memory import in pynccl_allocator.py breaks Ascend NPU compatibility
- [#29040](https://github.com/sgl-project/sglang/issues/29040) [Bug] --enable-return-routed-experts captures all zeros for HashTopK (hash-router) layers
- [#29277](https://github.com/sgl-project/sglang/issues/29277) [Bug]
- [#29357](https://github.com/sgl-project/sglang/issues/29357) [Bug] lama-4-Scout-17B-16E-Instruct model start service failed, when use Llama-4-Scout-17B-16E-Instruct-Medical-ChatBot lora
- [#29244](https://github.com/sgl-project/sglang/issues/29244) [DFlash][Performance] Speculative Decoding (DFlash) slowing down inference on Qwen3-30B-A3B (A800, BS=1)
- [#36702](https://github.com/sgl-project/sglang/issues/36702) [Bug] Kimi-K3 + DCP: all TP ranks wedge in filter_dcp_local_kv_indices (nonzero → cudaStreamSynchronize) on long chunked prefill; 300s watchdog, memory free
- [#36701](https://github.com/sgl-project/sglang/issues/36701) [Bug] Qwen3.8-Flash-Next on sm_120 (RTX PRO 6000 Blackwell): QSA decode kernel gated to sm_100, plus contradictory SSM dtype checks

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 125,987 · **Open issues:** 2,254 · **Last push:** 2h ago

On August 28, 2026, llama.cpp released several new versions, including b10665, which introduced DSpark support for the Nemotron3.5 model, and b10660, which added support for the Qwen3.8-Flash-Next model. Other notable updates included b10664, featuring HTP unary operations for ABS and LOG, and b10662, which implemented a new ctx-per-slot argument for unified KV cache management. Among the significant merged features was the addition of DFlash2 support for local convolution and candidate selection (PR #27342), alongside fixes for various bugs affecting grouped/broadcast weights and memory size caps. A pressing issue arose regarding context checkpoints not being persisted in hybrid/recurrent models (issue #27813), highlighting ongoing challenges in model memory management.

#### 🚀 New Releases
- [b10665](https://github.com/ggml-org/llama.cpp/releases/tag/b10665) b10665
- [b10664](https://github.com/ggml-org/llama.cpp/releases/tag/b10664) b10664
- [b10663](https://github.com/ggml-org/llama.cpp/releases/tag/b10663) b10663
- [b10662](https://github.com/ggml-org/llama.cpp/releases/tag/b10662) b10662
- [b10661](https://github.com/ggml-org/llama.cpp/releases/tag/b10661) b10661
- [b10660](https://github.com/ggml-org/llama.cpp/releases/tag/b10660) b10660
- [b10659](https://github.com/ggml-org/llama.cpp/releases/tag/b10659) b10659
- [b10658](https://github.com/ggml-org/llama.cpp/releases/tag/b10658) b10658
- [b10657](https://github.com/ggml-org/llama.cpp/releases/tag/b10657) b10657
- [b10656](https://github.com/ggml-org/llama.cpp/releases/tag/b10656) b10656

#### ✅ Merged PRs
- [#27804](https://github.com/ggml-org/llama.cpp/pull/27804) model: add DSpark support for Nemotron3.5
- [#27742](https://github.com/ggml-org/llama.cpp/pull/27742) model: add Qwen3.8-Flash-Next (qwen4exp)
- [#27786](https://github.com/ggml-org/llama.cpp/pull/27786) ggml-hexagon: add HTP unary ops for ABS and LOG
- [#27798](https://github.com/ggml-org/llama.cpp/pull/27798) hexagon: fix RMS_NORM_MUL grouped/broadcast weight bugs
- [#24124](https://github.com/ggml-org/llama.cpp/pull/24124) server: add ctx-per-slot (--kv-unified-per-slot)
- [#27753](https://github.com/ggml-org/llama.cpp/pull/27753) ci : build only the ggml-hip backend for windows-rocm release
- [#27342](https://github.com/ggml-org/llama.cpp/pull/27342) spec : add DFlash2 support (local convolution + candidate selector)
- [#26973](https://github.com/ggml-org/llama.cpp/pull/26973) ci : bundle HIP runtime DLLs with Windows ROCm release
- [#27816](https://github.com/ggml-org/llama.cpp/pull/27816) spec : add DFlash2 support (local convolution + candidate selector) (#27342)
- [#27768](https://github.com/ggml-org/llama.cpp/pull/27768) opencl: add bin kernels `kernel_gemm_moe_q4_0_q8_1_dp4a_bin`, `kernel_gemm_moe_mxfp4_q8_1_dp4a_bin`
- [#27795](https://github.com/ggml-org/llama.cpp/pull/27795) quantize: cap working memory size to avoid loading big tensors onto RAM
- [#27453](https://github.com/ggml-org/llama.cpp/pull/27453) Feature: Added LIGHTNING_INDEXER support for Deepseek V4 ops on Vulkan Backend
- [#27800](https://github.com/ggml-org/llama.cpp/pull/27800) pr2wt : use ssh/https remote in worktree depending on base
- [#26622](https://github.com/ggml-org/llama.cpp/pull/26622) llama : add --n-cpu-ffn option
- [#27794](https://github.com/ggml-org/llama.cpp/pull/27794) llama: model_loader: add TENSOR_READ_LAZY
- [#27746](https://github.com/ggml-org/llama.cpp/pull/27746) ui: Improve Chat Form Actions UI/UX (models selector, add panel)
- [#27356](https://github.com/ggml-org/llama.cpp/pull/27356) convert: fix Nemotron-H LoRA GGUF conversion
- [#27730](https://github.com/ggml-org/llama.cpp/pull/27730) [feat] support dspark (Nanbeige4.2-3B)
- [#27745](https://github.com/ggml-org/llama.cpp/pull/27745) ui: Replace per-conversation MCP overrides with per-conversation tool policy
- [#27711](https://github.com/ggml-org/llama.cpp/pull/27711) spec: Add benchmark-only synthetic speculative acceptance options
- [#27790](https://github.com/ggml-org/llama.cpp/pull/27790) model : remove optimized TG path in MiniMax 01 implementation
- [#24318](https://github.com/ggml-org/llama.cpp/pull/24318) args: add --video-* CLI arguments
- [#27758](https://github.com/ggml-org/llama.cpp/pull/27758) metal : fix memory leaks due to missing autoreleasepools

#### 🐛 New Issues
- [#27813](https://github.com/ggml-org/llama.cpp/issues/27813) server: slot restore gives no prefix reuse on hybrid/recurrent models (context checkpoints are not persisted) 💬5
- [#27831](https://github.com/ggml-org/llama.cpp/issues/27831) Misc. bug: [WEBUI]: Copy to clipboard fails to copy anything `bug-unconfirmed` 💬2
- [#27819](https://github.com/ggml-org/llama.cpp/issues/27819) DFlash2 is not working with `--split-mode tensor` 💬1
- [#27840](https://github.com/ggml-org/llama.cpp/issues/27840) Eval bug: mmap and tensor-read-lazy lead to constant disk writing on Windows `bug-unconfirmed` 💬1
- [#27845](https://github.com/ggml-org/llama.cpp/issues/27845) Eval bug: potential memory leak with using `-sm tensor` during token generation with dual Intel B70 SYCL backend `bug-unconfirmed` 💬1
- [#27822](https://github.com/ggml-org/llama.cpp/issues/27822) Hybrid CPU/Metal: Metal OOM leads to EXC_BAD_ACCESS in ggml_compute_forward_mul_mat_id instead of a clean failure 💬1
- [#27829](https://github.com/ggml-org/llama.cpp/issues/27829) Eval bug: DFlash2: --split-mode tensor aborts with SPLIT_AXIS_UNKNOWN on ROCm (Qwen3.8-27B, 2x RX 7900 XTX) `bug-unconfirmed`
- [#27797](https://github.com/ggml-org/llama.cpp/issues/27797) qwen4exp (PR #27742): multi-segment prompts degrade to '//////' on gfx1151 — deterministic repro 💬1
- [#27814](https://github.com/ggml-org/llama.cpp/issues/27814) Misc. bug: VRAM usage increased in msvc build vs clang on windows (+2gb) `bug-unconfirmed` 💬1
- [#27783](https://github.com/ggml-org/llama.cpp/issues/27783) server / tokenizer: SIGSEGV (stack overflow) in `unicode_regex_split_stl` — the o200k / GPT4O pre-tokenizer regex recurses once per character, so a ~26,000-character unbroken run of one character class kills the process 💬1
- [#27784](https://github.com/ggml-org/llama.cpp/issues/27784) Metal: --embeddings with pooling still builds and computes the LM head, producing a multi-GiB discarded tensor and returning all-NaN embeddings on long inputs 💬1
- [#27846](https://github.com/ggml-org/llama.cpp/issues/27846) Misc. bug: Draft models won't get deduplicated when using `dedup-cache-models` in models preset configuration `bug-unconfirmed`
- [#27844](https://github.com/ggml-org/llama.cpp/issues/27844) Misc. bug: Virus alert (Trojan:Win32/Wacatac.C!ml) from llama-batched-bench-impl.dll in llama-b10665-bin-win-cuda-13.3-x64.zip `bug-unconfirmed`
- [#27839](https://github.com/ggml-org/llama.cpp/issues/27839) Combined --spec-type draft-dflash,draft-mtp,ngram-mod with -md draft fails at init: MTP context requested from non-MTP draft model
- [#27827](https://github.com/ggml-org/llama.cpp/issues/27827) Eval bug: Unable to launch model to chat with `bug-unconfirmed`
- [#27835](https://github.com/ggml-org/llama.cpp/issues/27835) Eval bug: llama-server crashes with CUDA under concurrent connections `bug-unconfirmed`
- [#27834](https://github.com/ggml-org/llama.cpp/issues/27834) Build fails when GGML_CPU=OFF: tests, examples and POCs link against CPU-only symbols
- [#27833](https://github.com/ggml-org/llama.cpp/issues/27833) Eval bug: DFlash speculative decoding fails with --split-mode tensor (shared output.weight in Meta() buffer) `bug-unconfirmed`
- [#27821](https://github.com/ggml-org/llama.cpp/issues/27821) Research: Entropy-Gated Speculative Decoding with Schmitt-Trigger Hysteresis (Dynamic draft-k in {0, K}) `research 🔬`
- [#27817](https://github.com/ggml-org/llama.cpp/issues/27817) ggml-backend: discarded ggml_gallocr_reserve_n return value turns an allocation failure into a segfault
- [#27805](https://github.com/ggml-org/llama.cpp/issues/27805) Eval bug: Vulkan graph optimizer silently corrupts output for models with view-aliased state `bug-unconfirmed`
- [#27802](https://github.com/ggml-org/llama.cpp/issues/27802) Misc. bug: Qwen3.8 coverstaion/quantization issue? `bug-unconfirmed`
- [#27801](https://github.com/ggml-org/llama.cpp/issues/27801) Eval bug: crash on RPC server when using gemma-4-26B MTP head `bug-unconfirmed`
- [#27796](https://github.com/ggml-org/llama.cpp/issues/27796) ggml-hip: quantized KV cache decodes slower than f16 on RDNA4 (gfx1201), worse the more unpacking the type needs
- [#27792](https://github.com/ggml-org/llama.cpp/issues/27792) CUDA MMQ mul_mat_id: src1_q8_1 tail padding computed from ne11 (== 1 for MoE) -> out-of-bounds read, illegal memory access for some ubatch sizes

#### 🔒 Closed Issues
- [#27813](https://github.com/ggml-org/llama.cpp/issues/27813) server: slot restore gives no prefix reuse on hybrid/recurrent models (context checkpoints are not persisted)
- [#26921](https://github.com/ggml-org/llama.cpp/issues/26921) Eval bug: Vulkan (Mali-G925 / Immortalis MC12): Qwen3.5-0.8B multimodal prefill returns all-NaN logits, while the same build on CPU devices works

### Ollama (`ollama/ollama`)

**Stars:** 179,590 · **Open issues:** 3,810 · **Last push:** 3h ago

On August 28, 2026, Ollama released version v0.33.2, which restored system dark mode, enhanced proxy behavior to continue requests amid model catalog changes, and synchronized macOS app handoff functionality. Among the merged pull requests, notable changes include a lint fix, cleanup of dead code, and an update to list cloud models for Claude in the app. However, several new issues have emerged, with the most pressing being the report that Granite 4.2 models do not respect safe default context settings, leading to out-of-memory (OOM) kills.

#### 🚀 New Releases
- [v0.33.2-rc1](https://github.com/ollama/ollama/releases/tag/v0.33.2-rc1) v0.33.2

#### ✅ Merged PRs
- [#18081](https://github.com/ollama/ollama/pull/18081) lint fix
- [#17381](https://github.com/ollama/ollama/pull/17381) Clean up dead code
- [#18077](https://github.com/ollama/ollama/pull/18077) app: list account cloud models for Claude
- [#18056](https://github.com/ollama/ollama/pull/18056) app: synchronize macOS app handoff

#### 🐛 New Issues
- [#18074](https://github.com/ollama/ollama/issues/18074) Granite 4.2 models (8B/3B) do not respect safe default context ( eg. 4096) base on available VRAM and cause OOM kills `bug` 💬9
- [#18069](https://github.com/ollama/ollama/issues/18069) glm-5.3-flash:cloud — thinking trace degenerates into infinite single-token repetition ("lock"), never terminates `cloud` 💬4
- [#18067](https://github.com/ollama/ollama/issues/18067) GPU not detected on Jetpack 7.2 R39 on Nvidia Orin AGX 64GB `bug` 💬4
- [#18073](https://github.com/ollama/ollama/issues/18073) New Claude Desktop integration not working `bug` 💬2
- [#18082](https://github.com/ollama/ollama/issues/18082) GLM chat template emits orphaned closing think tag — reasoning leaks into message.content 💬1
- [#18076](https://github.com/ollama/ollama/issues/18076) v0.33.1 Broke vision supoort on MLX `bug` 💬1
- [#18063](https://github.com/ollama/ollama/issues/18063) mlx: Ling-3.0 (BailingMoeV3) support - split PR plan following #17643 feedback 💬1
- [#18068](https://github.com/ollama/ollama/issues/18068) Ollama UI App does not observe Dark Mode `bug` 💬1
- [#18075](https://github.com/ollama/ollama/issues/18075) Pls support qwen3.8 flash next for windows pc `model`
- [#18071](https://github.com/ollama/ollama/issues/18071) Need to have qwen3.8-flash-next on Ollama cloud. `model` `cloud`
- [#18072](https://github.com/ollama/ollama/issues/18072) server: make the prompt cache size configurable — it is hard-coded at 8192 MiB
- [#18061](https://github.com/ollama/ollama/issues/18061) [Bug][Windows] Desktop app 0.33.1 fails to launch built-in server silently (server.log empty, no listener), manual `ollama serve` works

#### 🔒 Closed Issues
- [#18063](https://github.com/ollama/ollama/issues/18063) mlx: Ling-3.0 (BailingMoeV3) support - split PR plan following #17643 feedback
- [#18068](https://github.com/ollama/ollama/issues/18068) Ollama UI App does not observe Dark Mode
- [#18072](https://github.com/ollama/ollama/issues/18072) server: make the prompt cache size configurable — it is hard-coded at 8192 MiB

### LiteLLM (`BerriAI/litellm`)

**Stars:** 57,431 · **Open issues:** 4,851 · **Last push:** <1h ago

On August 28, 2026, LiteLLM had no new releases but saw significant activity in merged pull requests. Key additions include a new sync script for the Together AI model registry (#38257) and improvements in error handling for the messaging router (#38606). Notable fixes address various issues, such as ensuring that the /v1/messages endpoint properly handles effort tiers and optimizing the behavior of UI elements (#38492, #38586). Among the newly reported issues, a bug causing streaming error handlers to crash with an AttributeError was flagged as particularly concerning (#38511). Overall, the day was primarily dedicated to enhancements and bug fixes, with a focus on improving model accessibility and reliability.

#### ✅ Merged PRs
- [#38257](https://github.com/BerriAI/litellm/pull/38257) feat(models): add daily Together AI model registry sync script and workflow
- [#38606](https://github.com/BerriAI/litellm/pull/38606) fix(router): fall over on raised mid-stream errors in /v1/messages streams
- [#38492](https://github.com/BerriAI/litellm/pull/38492) fix(anthropic): resolve /v1/messages effort tiers through the capability owner
- [#38590](https://github.com/BerriAI/litellm/pull/38590) feat(proxy): dry-run a real request body on /auto_router/test_routing
- [#38589](https://github.com/BerriAI/litellm/pull/38589) fix(shadow_eval): refuse a judge model that also serves one of the arms it grades
- [#36344](https://github.com/BerriAI/litellm/pull/36344) test-check-commits
- [#38100](https://github.com/BerriAI/litellm/pull/38100) fix(tencent): route thinking through extra_body in chat completions
- [#38572](https://github.com/BerriAI/litellm/pull/38572) feat(proxy): opt-in enforce_fallback_model_access authorizes router fallbacks against the calling key
- [#38568](https://github.com/BerriAI/litellm/pull/38568) fix(guardrails): add fail-open mode to CrowdStrike AIDR guardrail
- [#38582](https://github.com/BerriAI/litellm/pull/38582) fix(langfuse): warn and drop invalid LANGFUSE_TRACING_ENVIRONMENT instead of failing requests
- [#38586](https://github.com/BerriAI/litellm/pull/38586) fix(router): copy instead of mutating caller metadata when scrubbing fallback stamp keys
- [#38595](https://github.com/BerriAI/litellm/pull/38595) feat(ui): dry-run an auto-router config against the backend before saving it
- [#38592](https://github.com/BerriAI/litellm/pull/38592) fix(anthropic): carry the effort tier only where the target declares reasoning_effort
- [#38476](https://github.com/BerriAI/litellm/pull/38476) fix(logging): stop stream-based log collectors classifying INFO logs as errors
- [#38483](https://github.com/BerriAI/litellm/pull/38483) fix(presidio): chunk oversized text before /analyze so large content blocks do not fail
- [#38570](https://github.com/BerriAI/litellm/pull/38570) fix(router): reject complexity-router settings written outside complexity_router_config
- [#38596](https://github.com/BerriAI/litellm/pull/38596) fix(ui): link Virtual Keys hint through the migrated /ui route
- [#38442](https://github.com/BerriAI/litellm/pull/38442) feat(ui): session-level cache observability in request logs
- [#38587](https://github.com/BerriAI/litellm/pull/38587) chore(proxy): resync the generated API artifacts with the current models
- [#38367](https://github.com/BerriAI/litellm/pull/38367) feat(alerting): add native Microsoft Teams alerting destination
- [#38486](https://github.com/BerriAI/litellm/pull/38486) feat(together_ai): add zai-org/GLM-5.3-Flash to the model registry
- [#38533](https://github.com/BerriAI/litellm/pull/38533) fix(anthropic): carry the adaptive effort tier to every bridged Claude target
- [#38481](https://github.com/BerriAI/litellm/pull/38481) feat(model_prices): let a map entry declare its exact reasoning_effort levels
- [#38574](https://github.com/BerriAI/litellm/pull/38574) fix(ui): stop server-searched comboboxes from clobbering picks and queries
- [#38575](https://github.com/BerriAI/litellm/pull/38575) test(e2e): serve the vision image from our own fixture
- [#38431](https://github.com/BerriAI/litellm/pull/38431) fix(anthropic-adapter): pass provider-native and OpenAI-format tools through on /v1/messages
- [#38465](https://github.com/BerriAI/litellm/pull/38465) fix(anthropic): carry tool_reference tool results through the guardrail translation round trip
- [#38457](https://github.com/BerriAI/litellm/pull/38457) fix(realtime): bill Gemini Live native-audio output tokens at the audio rate
- [#38458](https://github.com/BerriAI/litellm/pull/38458) fix(streaming): preserve provider service-tier metadata so Vertex flex streams bill at flex rates
- [#38561](https://github.com/BerriAI/litellm/pull/38561) fix(transcription): synthesize srt/vtt output for adapters without native subtitle formats
- [#38376](https://github.com/BerriAI/litellm/pull/38376) fix(guardrails): forward aws_external_id when the bedrock guardrail assumes a role
- [#38280](https://github.com/BerriAI/litellm/pull/38280) fix(cost): apply Together AI cache read pricing and per-model registry rates
- [#38263](https://github.com/BerriAI/litellm/pull/38263) feat(together_ai): map reasoning_effort per model class
- [#38449](https://github.com/BerriAI/litellm/pull/38449) feat(dashscope): support qwen-image-3.0 and qwen-image-3.0-pro image generation
- [#38456](https://github.com/BerriAI/litellm/pull/38456) feat(mcp): let a resolved OAuth token target a custom upstream header
- [#38567](https://github.com/BerriAI/litellm/pull/38567) test(e2e): let the together tool tests accept parallel calls
- [#38487](https://github.com/BerriAI/litellm/pull/38487) test(together_ai): assert fail-open supported params for models missing from the registry
- [#38566](https://github.com/BerriAI/litellm/pull/38566) chore: bump litellm-enterprise 0.1.60 -> 0.1.61, litellm-proxy-extras 0.4.89 -> 0.4.90
- [#38207](https://github.com/BerriAI/litellm/pull/38207) fix(model_prices): rolling registry audit - verified models and rates for Novita, DeepInfra, W&B, Bedrock Sol, Gemini, Fireworks, Azure gpt-5.6, Mistral, Together
- [#37833](https://github.com/BerriAI/litellm/pull/37833) fix: roll up the open deflake fixes for the MCP logging queue, PTU rollup, license gate, and pricing test isolation
- [#38317](https://github.com/BerriAI/litellm/pull/38317) fix(otel): anchor MCP tool-call spans to the gateway's own trace, link the client's context
- [#38475](https://github.com/BerriAI/litellm/pull/38475) fix(ui): let the paginated search select keep what the user types
- [#38563](https://github.com/BerriAI/litellm/pull/38563) fix(realtime): bill trailing audio when a Gemini transcribe Live session closes
- [#38448](https://github.com/BerriAI/litellm/pull/38448) test(e2e): cover key generate and update on the Admin UI path
- [#38554](https://github.com/BerriAI/litellm/pull/38554) fix(ui): open select popups below the trigger instead of over it
- [#38555](https://github.com/BerriAI/litellm/pull/38555) fix(mcp): keep upstream OAuth Authorization when jwt signer hook injects one on tools/call
- [#38452](https://github.com/BerriAI/litellm/pull/38452) fix: keep schema reconciliation from fighting a partitioned LiteLLM_SpendLogs
- [#38463](https://github.com/BerriAI/litellm/pull/38463) fix(key_management): allow /key/update to keep or shrink MCP server grants the key already holds
- [#38471](https://github.com/BerriAI/litellm/pull/38471) fix(auth): skip guaranteed-miss team lookup for the litellm-dashboard sentinel
- [#38514](https://github.com/BerriAI/litellm/pull/38514) feat(proxy): opt-in budget rollover carrying overage into the next window
- [#38542](https://github.com/BerriAI/litellm/pull/38542) fix: suppress misleading register_model unresolved-cost warnings for entries without custom pricing
- [#38539](https://github.com/BerriAI/litellm/pull/38539) feat(health): opt-in model-group allowlist for background health checks and health-check routing
- [#38490](https://github.com/BerriAI/litellm/pull/38490) feat(ui): run the Anthropic Family preset's reasoning tier on Opus 5 at high thinking
- [#38540](https://github.com/BerriAI/litellm/pull/38540) feat(gemini): day-0 support for gemini-3.5-transcribe and transcribe-live
- [#38435](https://github.com/BerriAI/litellm/pull/38435) test(e2e): de-flake the cost-header cache read and the router fallback control
- [#38532](https://github.com/BerriAI/litellm/pull/38532) feat(otel): support per-team/per-key service.name for OTel v2 destinations
- [#38541](https://github.com/BerriAI/litellm/pull/38541) build(ui): bump nginx to 1.31-alpine
- [#38432](https://github.com/BerriAI/litellm/pull/38432) feat(ui): add cache hit/miss filter to Request Logs
- [#38545](https://github.com/BerriAI/litellm/pull/38545) fix(ui): order the auto-routers table newest first so a new router lands on page one
- [#38093](https://github.com/BerriAI/litellm/pull/38093) fix(bedrock): sign rerank requests with the shared header-filtered SigV4 helper (internal copy of #36462)
- [#36462](https://github.com/BerriAI/litellm/pull/36462) fix(bedrock): sign rerank requests with the shared, header-filtered SigV4 helper
- [#38410](https://github.com/BerriAI/litellm/pull/38410) fix(proxy): regenerate lazy OpenAPI snapshot and guard it in CI
- [#36728](https://github.com/BerriAI/litellm/pull/36728) fix(ui_sso): resolve highest privilege Entra app role, not first in claim
- [#38496](https://github.com/BerriAI/litellm/pull/38496) fix(exception_mapping_utils): map unmapped exceptions when model and provider are unset
- [#38484](https://github.com/BerriAI/litellm/pull/38484) refactor: clean up fresh tech debt from 2026-08-27 window
- [#38398](https://github.com/BerriAI/litellm/pull/38398) fix(mcp): canonicalize bearer scheme on bridge egress
- [#38391](https://github.com/BerriAI/litellm/pull/38391) feat(ui): toggle internal health check visibility in request logs
- [#38478](https://github.com/BerriAI/litellm/pull/38478) fix(bedrock): credit gateway caching where the tool cachePoint is placed
- [#38470](https://github.com/BerriAI/litellm/pull/38470) feat(ui): put the auto-router savings hero on a spend rail and a four-tile row
- [#37610](https://github.com/BerriAI/litellm/pull/37610) feat(newrelic): per-team cost and usage metrics via team callbacks
- [#38469](https://github.com/BerriAI/litellm/pull/38469) fix(e2e): disable thinking on the gemini chat cost test instead of racing its budget
- [#38468](https://github.com/BerriAI/litellm/pull/38468) fix(e2e): size the mid-conversation-system cache prefix above the minimum deterministically
- [#38453](https://github.com/BerriAI/litellm/pull/38453) fix(ui): carry a preset's per-tier litellm_params through the prefill
- [#38454](https://github.com/BerriAI/litellm/pull/38454) fix(e2e): move the vertex realtime suite off the retired Live preview model
- [#38451](https://github.com/BerriAI/litellm/pull/38451) fix(ui): show custom technical keywords on every router whose scorer runs
- [#38439](https://github.com/BerriAI/litellm/pull/38439) fix(anthropic_adapter): carry web search cost into /v1/messages breakdown headers
- [#38434](https://github.com/BerriAI/litellm/pull/38434) fix(prompts): propagate prompt deletes to every worker and pod
- [#38433](https://github.com/BerriAI/litellm/pull/38433) fix(scim): apply default_team_params (incl. models) to SCIM-created teams
- [#38420](https://github.com/BerriAI/litellm/pull/38420) fix: bound row count on GET /spend/logs to stop unbounded LiteLLM_SpendLogs scans
- [#38364](https://github.com/BerriAI/litellm/pull/38364) fix(mcp): accept raw x-litellm-api-key on streamable HTTP admission
- [#38436](https://github.com/BerriAI/litellm/pull/38436) feat(ui): add Teams list CSV export with budgets, model grants, and rate limits

#### 🐛 New Issues
- [#38511](https://github.com/BerriAI/litellm/issues/38511) [Bug]: Responses streaming error handler crashes with AttributeError on the completion-bridge iterator, masking the original error `llm translation` 💬3
- [#38608](https://github.com/BerriAI/litellm/issues/38608) Add "GLM-5.3-Flash" in "model_prices_and_context_window.json" 💬2
- [#38515](https://github.com/BerriAI/litellm/issues/38515) [Bug]: Zero-cost models are blocked once a user's personal `max_budget` is exhausted `bug` `proxy` `llm translation` 💬2
- [#38578](https://github.com/BerriAI/litellm/issues/38578) [Bug]: /v1/messages prices Together deployments by their alias, so a size marker in the alias bills the size bucket `bug` `proxy` 💬1
- [#38529](https://github.com/BerriAI/litellm/issues/38529) /v1/messages drops output_config.effort for Claude models served by openrouter or azure_ai `proxy` `llm translation` 💬1
- [#38556](https://github.com/BerriAI/litellm/issues/38556) [Bug]: `bug` `proxy` `llm translation` 💬1
- [#38537](https://github.com/BerriAI/litellm/issues/38537) [Bug]: Vertex Gemini 3.7 Flash rejects chat history ending in a text-only assistant message `proxy` `llm translation` 💬1
- [#38474](https://github.com/BerriAI/litellm/issues/38474) [Bug]: DashScope MaaS endpoints use different base URLs for Chat Completions vs Responses API — PR #30286 fix incomplete for workspace-specific URLs `proxy` `llm translation` 💬1
- [#38459](https://github.com/BerriAI/litellm/issues/38459) [Bug]: token_counter raises on OpenAI `input_audio` content blocks — context-window & prompt-caching pre-call checks silently skip, /utils/token_counter 500s `llm translation` 💬1
- [#38612](https://github.com/BerriAI/litellm/issues/38612) [Bug]: chatgpt provider strips parallel_tool_calls — Codex Responses-Lite (gpt-5.6-*) requests always 400 `llm translation`
- [#38610](https://github.com/BerriAI/litellm/issues/38610) [Bug]: /v1/messages stream answers 200 with message_start and an SSE error chunk when the fallback also fails before content `bug` `proxy` `llm translation`
- [#38579](https://github.com/BerriAI/litellm/issues/38579) [Bug]: Bedrock bearer-token-only deployments fail /v1/chat/completions and /v1/responses with 'NoneType' object has no attribute 'access_key' since #37241 `bug` `proxy` `llm translation`
- [#38571](https://github.com/BerriAI/litellm/issues/38571) [Bug]: Bedrock Realtime hides provider throttles as normal WebSocket closes and lacks disconnect cleanup `proxy` `llm translation`
- [#38569](https://github.com/BerriAI/litellm/issues/38569) [Bug]: Bedrock streaming is buffered for one deployment - all chunks arrive in a single burst at the end `llm translation`
- [#38558](https://github.com/BerriAI/litellm/issues/38558) [Bug]: CCR Loop Does not work for CLI Agents `bug` `llm translation` `SDK` `claude code`
- [#38549](https://github.com/BerriAI/litellm/issues/38549) [Bug]: Bedrock bearer-token auth resolves and discards AWS credentials, costing a full IMDS timeout per request `llm translation`
- [#38547](https://github.com/BerriAI/litellm/issues/38547) [Bug]: /v1/models never expands litellm_proxy/* wildcards — provider-endpoint discovery is gated on a static dict that excludes litellm_proxy `bug` `proxy` `llm translation`
- [#38546](https://github.com/BerriAI/litellm/issues/38546) ocr_cost() does not account for annotation_cost_per_page / pages_processed_annotation `llm translation`
- [#38543](https://github.com/BerriAI/litellm/issues/38543) [Bug]: model_info.mode is shared across deployments of the same provider model and cannot be cleared (v1.87.0+) `llm translation`
- [#38535](https://github.com/BerriAI/litellm/issues/38535) Router policy knob `treat_finish_reason_as_failure`: let a terminal stop_reason count as a deployment failure so allowed_fails, cooldown, and fallbacks engage `llm translation` `claude code`
- [#38534](https://github.com/BerriAI/litellm/issues/38534) [Bug]: Playground (Chat & Compare) model dropdown is empty for internal_user, even though /v1/models and the Models+Endpoints page both list all models `bug` `llm translation` `ui-dashboard`
- [#38531](https://github.com/BerriAI/litellm/issues/38531) [Bug]: litellm_deployment_failure_responses_total emits api_provider="None" when a resolved deployment fails without custom_llm_provider set
- [#38530](https://github.com/BerriAI/litellm/issues/38530) /v1/responses forwards a reasoning effort the model map marks unsupported `proxy` `llm translation`
- [#38520](https://github.com/BerriAI/litellm/issues/38520) [Feature]: Reset All Team Member Spend `enhancement` `ui-dashboard`
- [#38507](https://github.com/BerriAI/litellm/issues/38507) OpenRouter Responses API (aresponses) never tracks cost — spend logged as $0 despite real usage `llm translation`
- [#38505](https://github.com/BerriAI/litellm/issues/38505) [Feature]: Native Search API support for xAI's x_search (Live Search)
- [#38494](https://github.com/BerriAI/litellm/issues/38494) [Bug]: increment_deployment_cooled_down raises Incorrect label count with custom_prometheus_metadata_labels
- [#38467](https://github.com/BerriAI/litellm/issues/38467) [Feature]: Add Google-built OpenTelemetry Collector sidecars to GCP Terraform module

#### 🔒 Closed Issues
- [#15519](https://github.com/BerriAI/litellm/issues/15519) [Bug]: DB exception in update_spend job
- [#27671](https://github.com/BerriAI/litellm/issues/27671) Responses API streaming bridge: multi-step Anthropic tool calls emit text-delta with unregistered chatcmpl- ID
- [#19779](https://github.com/BerriAI/litellm/issues/19779) [Feature]: Generic guardrail - fail-open mode
- [#32484](https://github.com/BerriAI/litellm/issues/32484) [Bug]: Unexpected log messages about unresolved cost information with Docker image 1.90.0
- [#31977](https://github.com/BerriAI/litellm/issues/31977) [Bug]: MCP JWT signer overwrites OAuth Authorization header during tools/call
- [#28585](https://github.com/BerriAI/litellm/issues/28585) Agents page can hit 422 from /key/list page size limit
- [#27637](https://github.com/BerriAI/litellm/issues/27637) [Bug]: Admin UI stuck on loading spinner (v1.83.10) - Next.js hydration fails
- [#28624](https://github.com/BerriAI/litellm/issues/28624) [Bug]: AWS Bedrock model down - LiteLLM unresponsive
- [#29190](https://github.com/BerriAI/litellm/issues/29190) [Bug]: Claude Code 3P tab in Claude Desktop fails proxy auth — likely Authorization header (Anthropic OAuth token) takes precedence over user's x-api-key LiteLLM virtual key
- [#28527](https://github.com/BerriAI/litellm/issues/28527) [Bug]: BYOK for non-OpenAPI spec MCP missing in UI
- [#28530](https://github.com/BerriAI/litellm/issues/28530) [Bug]: Ollama Gemma 4 Infinite Tool Loop: Role mismatch ("tool" vs "tool_responses")
- [#28554](https://github.com/BerriAI/litellm/issues/28554) Responses API streaming fails: ContentPartDonePartOutputText.logprobs missing default value
- [#28562](https://github.com/BerriAI/litellm/issues/28562) [Bug]: Bug Report: Anthropic passthrough response `id` (`msg_...`) mismatches spend log `request_id`
- [#28577](https://github.com/BerriAI/litellm/issues/28577) [Bug]: OpenAI→A2A bridge breaks for spec-compliant A2A agents (fasta2a / Pydantic AI)
- [#28580](https://github.com/BerriAI/litellm/issues/28580) [Bug]: Anthropic /v1/messages → hosted_vllm silently drops assistant-message prefill (continue_final_message never reaches vLLM)
- [#28587](https://github.com/BerriAI/litellm/issues/28587) [Bug]: responses api: Session continuation only works after 10 secs
- [#28599](https://github.com/BerriAI/litellm/issues/28599) [Bug] Streaming requests bypass content_policy_fallbacks: 4xx filter in streaming_handler raises ContentPolicyViolationError directly
- [#28642](https://github.com/BerriAI/litellm/issues/28642) GET /v1/mcp/server returns delegate_auth_to_upstream: false when database row is true
- [#38529](https://github.com/BerriAI/litellm/issues/38529) /v1/messages drops output_config.effort for Claude models served by openrouter or azure_ai
- [#28775](https://github.com/BerriAI/litellm/issues/28775) [Bug]: Team doesn't exist in db. Team=litellm-dashboard
- [#37462](https://github.com/BerriAI/litellm/issues/37462) [Bug]: /v1/messages → vertex_ai/gemini drops tool_result blocks with no text (tool_reference, empty list) → Vertex 400 function-response part count
- [#34743](https://github.com/BerriAI/litellm/issues/34743) [Bug]: MCP DCR bridge forwards lowercase bearer token type and causes upstream 401
- [#30478](https://github.com/BerriAI/litellm/issues/30478) [Bug]: default_team_params.models is never applied when creating teams via API, SCIM, or UI

### Unsloth (`unslothai/unsloth`)

**Stars:** 75,000 · **Open issues:** 1,380 · **Last push:** <1h ago

On August 28, 2026, Unsloth released version v0.1.804-beta, introducing Qwen3.8-Flash-Next and GLM-5.3-Flash, both of which can now run locally with significant performance enhancements, including 5x faster inference for RAM offloading and over 100 reliability and performance improvements. Key merged pull requests include fixes to the Model Discovery Studio and enhancements to the functionality of synced GGUF files, alongside a critical modification to prevent conflicts during model loading. Notably, the new issue #9861 highlights that the smart offload planner is underperforming compared to the --fit option on a 6-core desktop, raising concerns about optimization in resource management.

#### 🚀 New Releases
- [v0.1.804-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.804-beta) Qwen3.8-Flash-Next + GLM-5.3-Flash

#### ✅ Merged PRs
- [#9876](https://github.com/unslothai/unsloth/pull/9876) fix(studio): accept trailing slash for model discovery
- [#9870](https://github.com/unslothai/unsloth/pull/9870) Fix Studio CPT overwriting LFM2 all-linear LoRA targets
- [#9878](https://github.com/unslothai/unsloth/pull/9878) fix(studio): stop offering a transformers upgrade where it cannot load anything
- [#9626](https://github.com/unslothai/unsloth/pull/9626) Fix datasets PyArrow registration after failed warm import
- [#9539](https://github.com/unslothai/unsloth/pull/9539) Fix Studio hydrating synced GGUF files before selection
- [#9868](https://github.com/unslothai/unsloth/pull/9868) Bump install.sh / install.ps1 pins to unsloth>=2026.8.22
- [#9865](https://github.com/unslothai/unsloth/pull/9865) Studio: stop the per-chunk autosave writing back messages the server owns
- [#9862](https://github.com/unslothai/unsloth/pull/9862) Put the smart offload planner back behind its flag
- [#9841](https://github.com/unslothai/unsloth/pull/9841) Keep the context length a load was given instead of resetting it to Auto
- [#9860](https://github.com/unslothai/unsloth/pull/9860) Apply the kwarg-spacing hook to the no-progress tool results test
- [#9822](https://github.com/unslothai/unsloth/pull/9822) Studio: warn instead of refusing to load a model bigger than VRAM plus RAM
- [#9768](https://github.com/unslothai/unsloth/pull/9768) Studio: stop a small context window ending a tool-using turn with nothing
- [#9791](https://github.com/unslothai/unsloth/pull/9791) Fix dill pickling whole modules by value on an off-prefix install
- [#9855](https://github.com/unslothai/unsloth/pull/9855) fix keyless access before desktop password setup
- [#9842](https://github.com/unslothai/unsloth/pull/9842) fix(studio): restore parallel vision chat slots
- [#9803](https://github.com/unslothai/unsloth/pull/9803) Add setting to collapse tool activity by default
- [#9810](https://github.com/unslothai/unsloth/pull/9810) Queue a parked send when a run started while it waited
- [#9854](https://github.com/unslothai/unsloth/pull/9854) Stop a recovery following a run this tab is already streaming
- [#9826](https://github.com/unslothai/unsloth/pull/9826) Fix the studio PEP 604 union ratchet and name what breaches it
- [#9853](https://github.com/unslothai/unsloth/pull/9853) Stop a generation recovery rewinding the reply it is following
- [#9828](https://github.com/unslothai/unsloth/pull/9828) Studio: stop the dense torchao quant probe from crashing the backend on AMD ROCm
- [#9851](https://github.com/unslothai/unsloth/pull/9851) Stop a resumed turn retracting text it already streamed
- [#9852](https://github.com/unslothai/unsloth/pull/9852) Fix the dev-server white screen from a two-barrel import cycle
- [#9843](https://github.com/unslothai/unsloth/pull/9843) Reject a macOS llama.cpp prebuilt that dyld will not load
- [#9848](https://github.com/unslothai/unsloth/pull/9848) Stop a left-padded row that attends to nothing returning NaN (#9708)
- [#9845](https://github.com/unslothai/unsloth/pull/9845) Stop the slot re-fit tests encoding the fit floor as a literal
- [#9774](https://github.com/unslothai/unsloth/pull/9774) Studio: add Chat settings to disable or ease GGUF auto-compaction
- [#8692](https://github.com/unslothai/unsloth/pull/8692) fix(prompt storage): rework prompt storage into a master-detail layout
- [#9830](https://github.com/unslothai/unsloth/pull/9830) Studio: consolidate the two memory-estimate stacks
- [#9835](https://github.com/unslothai/unsloth/pull/9835) Studio: persist model disclaimer across instances
- [#9831](https://github.com/unslothai/unsloth/pull/9831) Studio: read the memory row's captions past their line-breaking glue
- [#9770](https://github.com/unslothai/unsloth/pull/9770) route thinking controls to ollama
- [#9824](https://github.com/unslothai/unsloth/pull/9824) Studio: keep the memory row readable on a narrow panel
- [#9825](https://github.com/unslothai/unsloth/pull/9825) Studio: tighten the comments added by the memory estimate PR
- [#9821](https://github.com/unslothai/unsloth/pull/9821) Studio: fix the AttributeError that 500s every planned GGUF load
- [#7880](https://github.com/unslothai/unsloth/pull/7880) Studio: show a VRAM memory bar on downloaded models
- [#9772](https://github.com/unslothai/unsloth/pull/9772) Studio: restore menu focus after outside dismissal
- [#9815](https://github.com/unslothai/unsloth/pull/9815) Studio: Show the model's thinking on the preview page
- [#9187](https://github.com/unslothai/unsloth/pull/9187) Studio: resume local chat generation after disconnect
- [#9683](https://github.com/unslothai/unsloth/pull/9683) Studio: refuse keyless access to a cross-site browser request
- [#9757](https://github.com/unslothai/unsloth/pull/9757) Define "where local models live" once, so a BOM cannot split the answer in two
- [#9739](https://github.com/unslothai/unsloth/pull/9739) Studio: embedding model picker searches the Hub and downloads what you pick

#### 🐛 New Issues
- [#9861](https://github.com/unslothai/unsloth/issues/9861) Smart offload planner is slower than --fit on in 40 of 43 measured cells on a 6-core desktop 💬6
- [#9869](https://github.com/unslothai/unsloth/issues/9869) [Performance] Linked-folder RAG indexing is fully sequential and underutilizes CPU/GPU 💬1
- [#9832](https://github.com/unslothai/unsloth/issues/9832) [Feature] Show performance counters in chat, add developer options `feature request` 💬1
- [#9874](https://github.com/unslothai/unsloth/issues/9874) [Bug] macOS arm64 prebuilt b10639 links /usr/lib/librdma.dylib — unloadable on macOS < 26 `feature request` `bug` 💬1
- [#9840](https://github.com/unslothai/unsloth/issues/9840) [Bug] Vision blocks parallel slots `feature request` `bug` 💬1
- [#9838](https://github.com/unslothai/unsloth/issues/9838) [Feature] Why are model configuration parameters not the API page? We gotta start a new chat everytime we want to edit model param/config? `feature request`
- [#9900](https://github.com/unslothai/unsloth/issues/9900) [BUG] GLM-5.3-Flash Q4_K_M
- [#9866](https://github.com/unslothai/unsloth/issues/9866) [Studio Bug] CPT overrides LFM2 all-linear defaults with incompatible Llama target names `bug`
- [#9899](https://github.com/unslothai/unsloth/issues/9899) [Feature] Turn API Token into selectable text `feature request`
- [#9898](https://github.com/unslothai/unsloth/issues/9898) [Feature] Increase sizes. `feature request`
- [#9897](https://github.com/unslothai/unsloth/issues/9897) [Bug] Image/Video Generation on AMD does not work - Reposted `feature request` `bug`
- [#9895](https://github.com/unslothai/unsloth/issues/9895) [Bug] TTS custom endpoint failures `feature request` `bug`
- [#9889](https://github.com/unslothai/unsloth/issues/9889) [Bug] Issue with context limit on DGX Spark `feature request` `bug`
- [#9888](https://github.com/unslothai/unsloth/issues/9888) [Bug] The model couldn't compile a tool-calling grammar for this request. `feature request` `bug`
- [#9880](https://github.com/unslothai/unsloth/issues/9880) [Feature] Unsloth Desktop: add cors support or expose cors related options from llama.cpp `feature request`
- [#9879](https://github.com/unslothai/unsloth/issues/9879) Custom saved system prompts silently fail to persist ("Chat settings could not be persisted") and disappear from dropdown after restart" `feature request` `bug`
- [#9875](https://github.com/unslothai/unsloth/issues/9875) [Bug] Cannot copy out of meta tensor - flux2-klein-9b-uncensored `feature request` `bug`
- [#9867](https://github.com/unslothai/unsloth/issues/9867) [Bug] Qwen3.5 GatedDeltaNet + bnb-4bit: packed 4-bit weight passed undequantized to F.linear (mat1/mat2 shape error) — ROCm gfx1201, native Windows
- [#9864](https://github.com/unslothai/unsloth/issues/9864) [Unsloth Bug] Claude subagent bridge: inherited CLAUDE_CODE_USE_FOUNDRY / ANTHROPIC_FOUNDRY_BASE_URL env vars silently route local-agent traffic to Azure AI Foundry gateway (unrecognized_model 404)
- [#9846](https://github.com/unslothai/unsloth/issues/9846) [Bug] Keyless API access doesn't seem to work on Unsloth Desktop `feature request` `bug`
- [#9836](https://github.com/unslothai/unsloth/issues/9836) [Feature] CLI option to pick a model on device, e.g., list models on device then pick #, when running `unsloth start claude` (I will do this just reply) `feature request`
- [#9823](https://github.com/unslothai/unsloth/issues/9823) [Unsloth Bug] Compare panes render empty for a `model1`/`model2` pair; `LoraCompareContent` looks up `base`/`lora` thread types only

#### 🔒 Closed Issues
- [#685](https://github.com/unslothai/unsloth/issues/685) Unsloth On Mac
- [#6721](https://github.com/unslothai/unsloth/issues/6721) Add DeepReinforce Ornith-1.0 support / Unsloth variants
- [#9518](https://github.com/unslothai/unsloth/issues/9518) [Bug] the chat window's own send-and-persist path failing to write to its local IndexedDB store
- [#9480](https://github.com/unslothai/unsloth/issues/9480) [Studio Bug] Model Hub crashes WebKitWebProcess (SIGABRT) — Skia COLRv1 font assert, not #9393
- [#7588](https://github.com/unslothai/unsloth/issues/7588) [Feature]Support video upload in Unsloth Studio
- [#7477](https://github.com/unslothai/unsloth/issues/7477) [Bug] Unsloth Studio API inference: Custom model settings (context length, KV cache quantization) get ignored on model auto-load
- [#7307](https://github.com/unslothai/unsloth/issues/7307) RDNA4 (gfx1201 / Radeon AI PRO R9700): prebuilt `llama-server` segfaults on startup — plus an iGPU/HIP crash Studio doesn't guard against
- [#7022](https://github.com/unslothai/unsloth/issues/7022) [Bug] `--fit on` prevents loading large MoE models like DeepSeek-V4-Flash on consumer hardware; request for UI control over llama-server flags
- [#8502](https://github.com/unslothai/unsloth/issues/8502) [Feature] Allow for custom tools/skills/functions + Web search MCP for cloud models (e.g. Ollama API models)
- [#8483](https://github.com/unslothai/unsloth/issues/8483) [Bug] Unsloth Desktop's Deep Research Froze Up
- [#6855](https://github.com/unslothai/unsloth/issues/6855) [Bug] VRAM being ignored
- [#6841](https://github.com/unslothai/unsloth/issues/6841) [Feature] Add Codex-CLI Connection
- [#9671](https://github.com/unslothai/unsloth/issues/9671) [Bug/Feature] Auto Compaction triggers at a fixed ~75% of configured Context Length regardless of available VRAM/RAM — no UI control to adjust threshold or disable
- [#9071](https://github.com/unslothai/unsloth/issues/9071) [Feature]Could the API calls also be included in the token usage statistics for the model? Currently, only the usage of chat is being calculated. Perhaps a more comprehensive statistics page is needed.
- [#8998](https://github.com/unslothai/unsloth/issues/8998) [Bug] ROCm backend can't load any models
- [#8978](https://github.com/unslothai/unsloth/issues/8978) [Feature] Allow specifying a default model when launching Unsloth Studio
- [#8526](https://github.com/unslothai/unsloth/issues/8526) [Feature] Many chat features including compaction and compressed chat
- [#7275](https://github.com/unslothai/unsloth/issues/7275) [Bug] Windows AMD ROCm installer replaces ROCm PyTorch, then torch import fails
- [#9727](https://github.com/unslothai/unsloth/issues/9727) [Bug] Image/Video Generation on AMD does not work
- [#8925](https://github.com/unslothai/unsloth/issues/8925) [Bug] Phone cannot be idle issue
- [#9761](https://github.com/unslothai/unsloth/issues/9761) [Feature] Option to disable auto chat scroll
- [#9516](https://github.com/unslothai/unsloth/issues/9516) [Studio Bug] GGUF export to HF fails with Request failed (524), LoRA export works fine
- [#8858](https://github.com/unslothai/unsloth/issues/8858) [Bug] Attaching a PDF Causes Tool call issues and errors with generation
- [#8752](https://github.com/unslothai/unsloth/issues/8752) [Feature] Unsloth Studio APIs for audio, image, and video generation
- [#8636](https://github.com/unslothai/unsloth/issues/8636) [Bug] Studio GPU selection never reaches image/video generation (both pin to CUDA device 0); MiniMax-H3 OOMs without graph-cut flags
- [#8580](https://github.com/unslothai/unsloth/issues/8580) [Bug] xFormers can't load C++/CUDA extensions
- [#7950](https://github.com/unslothai/unsloth/issues/7950) [Bug] llama-server fails to start (exit 1, no output) — CUDA context + preexec_fn-forced fork() in Studio's own process (Docker/GPU deployment)
- [#9832](https://github.com/unslothai/unsloth/issues/9832) [Feature] Show performance counters in chat, add developer options
- [#9576](https://github.com/unslothai/unsloth/issues/9576) [Feature] Unsloth Studio supports MultiGPU Training
- [#9319](https://github.com/unslothai/unsloth/issues/9319) Allow STT/TTS to use an external OpenAI-compatible endpoint (like Connections does for LLMs)
- [#9195](https://github.com/unslothai/unsloth/issues/9195) Dismissing the chat action-bar More menu can delete a message without confirmation on main
- [#9183](https://github.com/unslothai/unsloth/issues/9183) macOS chat UI smoke: MLX self-heal pip install starves the reload past the 5s expect default
- [#8843](https://github.com/unslothai/unsloth/issues/8843) Restritive file attachment extensions
- [#8687](https://github.com/unslothai/unsloth/issues/8687) [Feature] Context handling needs dramatic improvement
- [#8535](https://github.com/unslothai/unsloth/issues/8535) [Feature] Allow embedding models to be accessible via localhost API
- [#8503](https://github.com/unslothai/unsloth/issues/8503) [Feature] System VRAM/RAM usage when loading a model with specific settings
- [#8443](https://github.com/unslothai/unsloth/issues/8443) GGUF export of Qwen3.5 fails on assert self.opt_num_mtp_layers != 0 when MTP config is nested under text_config
- [#8234](https://github.com/unslothai/unsloth/issues/8234) Studio: a diffusion GGUF pick advertises the GGUF size only, not the base companions it also downloads
- [#7226](https://github.com/unslothai/unsloth/issues/7226) TypeError: ufunc 'rfft_n_even' not supported
- [#7201](https://github.com/unslothai/unsloth/issues/7201) Studio: GGUF gpu_ids selection unsupported on torch-less Vulkan-only hosts
- [#9840](https://github.com/unslothai/unsloth/issues/9840) [Bug] Vision blocks parallel slots
- [#9245](https://github.com/unslothai/unsloth/issues/9245) Studio: dismissing a non-modal menu by pressing outside it drops focus to <body> instead of the trigger
- [#9680](https://github.com/unslothai/unsloth/issues/9680) [Feature Request] Allow generations to continue after client disconnect / add background generation mode
- [#9866](https://github.com/unslothai/unsloth/issues/9866) [Studio Bug] CPT overrides LFM2 all-linear defaults with incompatible Llama target names
- [#9537](https://github.com/unslothai/unsloth/issues/9537) [Studio Bug] Opening the app reads and downloads all model files from synced drives
- [#9846](https://github.com/unslothai/unsloth/issues/9846) [Bug] Keyless API access doesn't seem to work on Unsloth Desktop
- [#9396](https://github.com/unslothai/unsloth/issues/9396) [Bug] Image generation fails on AMD and crash on AppImage
- [#9708](https://github.com/unslothai/unsloth/issues/9708) [Bug] Batched greedy generation disagrees with one-at-a-time on Qwen3.5-2B and gemma-4-E2B-it (T4, left padding)
- [#9748](https://github.com/unslothai/unsloth/issues/9748) [Bug] Two diverging copies of the LM Studio / well-known model directory discovery; a BOM in `.lmstudio/settings.json` silently drops the custom downloads folder in one of them

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,042 · **Open issues:** 377 · **Last push:** 11h ago

On August 28, 2026, there were no new releases for AIBrix; however, the most notable development was the merging of pull request #2623, which introduced a new feature that adds a lora_adapter label to gateway request metrics, enhancing observability for users. Additionally, a new issue was raised, identified as #2626, regarding the Template and profile registry never being called, which may indicate a significant oversight that could impact functionality. Overall, it appears to be a day of routine maintenance with an important new feature added to improve metrics tracking and a potentially critical issue to address.

#### ✅ Merged PRs
- [#2623](https://github.com/vllm-project/aibrix/pull/2623) feat(metrics): add lora_adapter label to gateway request metrics

#### 🐛 New Issues
- [#2626](https://github.com/vllm-project/aibrix/issues/2626) [Batch] Template and profile registry never called

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 5,357 · **Open issues:** 383 · **Last push:** <1h ago

On August 28, 2026, there were no new versions released for Semantic Router, but several significant updates were merged into the codebase. Notable among these was the introduction of an optional Natural Language Inference (NLI) polarity tier for the in-memory semantic cache (PR #3075), along with a fix for PDF viewer rendering issues (PR #3022). Additionally, improvements were made to response handling on Anthropic backends, including the emission of SSE for response streams (PR #3045) and a rewrite of the outbound model referencing process (PR #3066). Among the new issues, the bug regarding Anthropic routing incorrectly sending router model names upstream (issue #3064) has garnered attention, indicating ongoing challenges in the system’s integration.

#### ✅ Merged PRs
- [#3075](https://github.com/vllm-project/semantic-router/pull/3075) [Feature] Optional NLI polarity tier for the in-memory semantic cache
- [#3069](https://github.com/vllm-project/semantic-router/pull/3069) [Docs] landing page: closing CTA and blog rail hierarchy
- [#3022](https://github.com/vllm-project/semantic-router/pull/3022) [Feature] Fix PDF viewer rendering all pages at once
- [#2986](https://github.com/vllm-project/semantic-router/pull/2986) [Bug] Honor the target layer for embedding routing
- [#3045](https://github.com/vllm-project/semantic-router/pull/3045) [Bug] Emit Response API SSE for /v1/responses streams on Anthropic backends
- [#3034](https://github.com/vllm-project/semantic-router/pull/3034) [Fix] Share agent harness tooling across linked worktrees
- [#3066](https://github.com/vllm-project/semantic-router/pull/3066) [Bug] Rewrite Anthropic outbound model to provider_model_id
- [#3061](https://github.com/vllm-project/semantic-router/pull/3061) [CI/Build] Require two approvals for merge queue
- [#3040](https://github.com/vllm-project/semantic-router/pull/3040) [Docs] landing page section lockup, install card, and video cards
- [#3049](https://github.com/vllm-project/semantic-router/pull/3049) [Bug] Require candle runtime files in qwen3/gemma/multimodal completeness checks
- [#3046](https://github.com/vllm-project/semantic-router/pull/3046) [Bug] fix nil pointer panic in category classification

#### 🐛 New Issues
- [#3064](https://github.com/vllm-project/semantic-router/issues/3064) [Bug] Anthropic routing ignores provider_model_id and sends router model name upstream `bug` `accepted` `wg/mom-routing` 💬3
- [#3060](https://github.com/vllm-project/semantic-router/issues/3060) [Community] Require two maintainer approvals before merge queue entry `enhancement` `accepted` `owner/maintainers` 💬3
- [#3063](https://github.com/vllm-project/semantic-router/issues/3063) [Bug] Mid-stream upstream errors never terminate /v1/responses streams `bug` `accepted` `wg/data-plane-networking` 💬2
- [#3051](https://github.com/vllm-project/semantic-router/issues/3051) [Bug] Run tool selection before Anthropic backend dispatch `bug` `area/core` `area/networking` `accepted` 💬2
- [#3074](https://github.com/vllm-project/semantic-router/issues/3074) [Bug] zh-Hans Latest docs render in English — 134 translations deleted in #2869 `bug` `needs-acceptance` `wg/developer-experience-ecosystem` 💬1
- [#3054](https://github.com/vllm-project/semantic-router/issues/3054) [Feature] Support open-ended context signal ranges and overflow-safe routing `enhancement` `area/core` `needs-acceptance` `wg/mom-routing` 💬1
- [#3068](https://github.com/vllm-project/semantic-router/issues/3068) [Bug] anthropic-shim e2e profile is unrunnable and invisible to CI `bug` `needs-acceptance` `wg/evaluation-quality` 💬1
- [#3053](https://github.com/vllm-project/semantic-router/issues/3053) [Performance] Cache and batch tool embeddings during request-time tool selection `enhancement` `area/core` `area/bench` `accepted` 💬1
- [#3067](https://github.com/vllm-project/semantic-router/issues/3067) [Bug] /v1/responses drops flat-shape tools and inline tool results `bug` `needs-acceptance` `wg/data-plane-networking` 💬1
- [#3052](https://github.com/vllm-project/semantic-router/issues/3052) [Bug] Treat omitted tool_choice as auto for configured tool selection `bug` `area/core` `area/networking` `accepted` 💬1
- [#3058](https://github.com/vllm-project/semantic-router/issues/3058) [Bug] OpenAI-format backend errors reach Anthropic clients as empty success messages `bug` `needs-acceptance` `wg/data-plane-networking` 💬1
- [#3077](https://github.com/vllm-project/semantic-router/issues/3077) [Bug] operator-managed prompt_guard silently disables jailbreak detection by blanking jailbreak_mapping_path `bug` `needs-acceptance` `wg/router-models-inference-runtime`
- [#3071](https://github.com/vllm-project/semantic-router/issues/3071) [Bug] Helm v4 silently sets image.pullPolicy to Never from a malformed values.yaml `bug` `needs-acceptance` `wg/developer-experience-ecosystem`
- [#3065](https://github.com/vllm-project/semantic-router/issues/3065) [Bug] `backend_refs.base_url` uses inconsistent API-root conventions for OpenAI and Anthropic backends `bug` `needs-acceptance` `wg/mom-routing`
- [#3056](https://github.com/vllm-project/semantic-router/issues/3056) [Bug] Preserve Anthropic thinking blocks on Anthropic-to-Anthropic responses `bug` `area/networking` `needs-acceptance` `wg/data-plane-networking`
- [#3055](https://github.com/vllm-project/semantic-router/issues/3055) [Bug] Preserve OpenAI cache_control content parts when routing to Anthropic `bug` `area/core` `area/networking` `needs-acceptance`
- [#3050](https://github.com/vllm-project/semantic-router/issues/3050) [Feature] Add model-tokenizer-aware context accounting for routing and budgets `enhancement` `area/core` `area/observability` `needs-acceptance`

#### 🔒 Closed Issues
- [#3013](https://github.com/vllm-project/semantic-router/issues/3013) [Bug] /v1/responses streaming emits Chat Completions SSE on Anthropic backends
- [#2914](https://github.com/vllm-project/semantic-router/issues/2914) [Bug] target_layer parameter does not work
- [#3064](https://github.com/vllm-project/semantic-router/issues/3064) [Bug] Anthropic routing ignores provider_model_id and sends router model name upstream
- [#3060](https://github.com/vllm-project/semantic-router/issues/3060) [Community] Require two maintainer approvals before merge queue entry
- [#3002](https://github.com/vllm-project/semantic-router/issues/3002) [Feature] Website UI/UX consistency across Docs, Blog, Research, and Community
- [#2751](https://github.com/vllm-project/semantic-router/issues/2751) [Router] Optional NLI polarity tier (L2) for in-memory semantic cache negation guard
- [#3012](https://github.com/vllm-project/semantic-router/issues/3012) [Feature] White Paper PDF viewer renders the whole PDF at once and takes too much time to load
- [#3032](https://github.com/vllm-project/semantic-router/issues/3032) [Bug] Share agent harness tooling across linked worktrees
- [#2531](https://github.com/vllm-project/semantic-router/issues/2531) [Router] Model-download completeness omits qwen3/gemma/multimodal candle runtime files, so partial downloads never heal
- [#2943](https://github.com/vllm-project/semantic-router/issues/2943) [Bug] ClassifyCategoryWithEntropy panics when embedding classifier is disabled

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*