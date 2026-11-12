# 📡 AI Ecosystem Digest — 2026-11-12

> Generated 2026-11-12 03:38 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 155,366 | 29 | 1 | 0 | 0 |
| [OpenAI Codex](https://github.com/openai/codex) | 134,942 | 29 | 0 | 43 | 6 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 108,783 | 0 | 0 | 5 | 0 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,403 | 16 | 10 | 0 | 2 |
| [OpenCode](https://github.com/anomalyco/opencode) | 226,209 | 28 | 21 | 10 | 1 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 29,472 | 25 | 12 | 9 | 1 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 394,371 | 115 | 215 | 119 | 1 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 262,769 | 15 | 4 | 1 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 96,779 | 25 | 24 | 45 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 38,769 | 21 | 13 | 52 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 134,170 | 13 | 19 | 33 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 186,717 | 2 | 1 | 0 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 63,131 | 19 | 22 | 96 | 4 |
| [Unsloth](https://github.com/unslothai/unsloth) | 79,345 | 5 | 7 | 47 | 1 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,186 | 4 | 4 | 1 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,454 | 27 | 9 | 5 | 0 |

---

## ✨ Highlights

- **OpenAI Codex** released multiple versions, including [rust-v0.170.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.170.0-alpha.2) and [rust-v0.167.2](https://github.com/openai/codex/releases/tag/rust-v0.167.2).
- **LiteLLM** unveiled [v1.110.0-rc.2](https://github.com/BerriAI/litellm/releases/tag/v1.110.0-rc.2) as part of its ongoing updates.
- **Qwen Code** launched its [v1.0.0-preview](https://github.com/QwenLM/qwen-code/releases/tag/v1.0.0-preview) version.
- **OpenClaw** addressed several issues with the merged PRs, notably [fixing delivery loss](https://github.com/openclaw/openclaw/pull/197427) during RPC claims.
- **OpenCode** received significant attention with three new issues, particularly [accumulating background shell completion notices](https://github.com/anomalyco/opencode/issues/63345), which garnered 7 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 155,366 · **Open issues:** 16,956 · **Last push:** 4h ago

There were no new releases or merged pull requests for Claude Code in the last 24 hours, indicating a routine maintenance period. However, several notable issues were raised, including a significant bug report (#109103) related to Windows hook commands, which consumers have pointed out can exit with errors without visible notifications. Additionally, the feature request (#109151) to show local command output as a popup rather than a permanent entry gained attention, suggesting a growing interest in improving user interaction. The issue regarding false positives in safeguard filters (#109168) also highlights ongoing concerns about the system's ability to handle benign requests effectively.

#### 🐛 New Issues
- [#109103](https://github.com/anthropics/claude-code/issues/109103) [BUG] Windows: a hook command bash can't parse (backslash path, or unquoted path with a space) exits 127 and the prompt proceeds with no visible error `bug` `has repro` `platform:windows` `area:hooks` 💬1
- [#108990](https://github.com/anthropics/claude-code/issues/108990) Newly spawned desktop sessions (Sonnet 5.5) ignore the task on turn 1 and emit runaway, system-prompt-like text (6 of 6) `bug` `platform:macos` `area:model` `area:permissions` 💬1
- [#109155](https://github.com/anthropics/claude-code/issues/109155) [BUG] Personal Pro org blocked: "Your organization has disabled Claude subscription access for Claude Code" `duplicate` `platform:macos` `area:auth` `regression` 💬1
- [#109151](https://github.com/anthropics/claude-code/issues/109151) [FEATURE] Show local command output (e.g. /context) as a popup or deletable message instead of a permanent entry in the conversation `enhancement` `area:claude-code-web` `platform:web` 💬1
- [#109174](https://github.com/anthropics/claude-code/issues/109174) [Bug] Legitimate bug bounty security question incorrectly flagged by safety filter `bug` `platform:macos` `area:model`
- [#109177](https://github.com/anthropics/claude-code/issues/109177) [Bug] False positive safeguard flag on Python bytecode/exe packaging for distribution `bug` `platform:macos` `area:model` `area:security`
- [#109176](https://github.com/anthropics/claude-code/issues/109176) Claude filled the system drive (~1 TB in Temp) and saturated the CPU with parallel subagents, then took further unauthorized actions `bug` `platform:windows` `area:tools` `platform:vscode`
- [#109175](https://github.com/anthropics/claude-code/issues/109175) Feature request (Claude desktop app, Code tab) `enhancement` `area:desktop`
- [#109173](https://github.com/anthropics/claude-code/issues/109173) [FEATURE] Connect Claude Code cloud sessions to local Claude in Chrome `enhancement` `area:claude-code-web` `platform:web` `area:chrome`
- [#109171](https://github.com/anthropics/claude-code/issues/109171) Opus 5.5 `duplicate` `platform:macos` `area:model`
- [#109172](https://github.com/anthropics/claude-code/issues/109172) macOS: a message from a session's own descendant is held when the machine is busy `bug` `has repro` `platform:macos` `area:core`
- [#109170](https://github.com/anthropics/claude-code/issues/109170) [BUG] Requests over ~200K tokens fail with ECONNRESET since 2026-11-11 ~22:50 UTC; /compact hangs, so sessions can't be recovered `bug` `has repro` `platform:windows` `area:api`
- [#109169](https://github.com/anthropics/claude-code/issues/109169) [Bug] False-Positive Safeguard Stop on Benign Request, Auto-Switched Model `bug` `platform:windows` `area:model`
- [#109168](https://github.com/anthropics/claude-code/issues/109168) [Bug] Safeguards refuse pen-test request on user-owned personal website `bug` `platform:macos` `area:model`
- [#109167](https://github.com/anthropics/claude-code/issues/109167) [Bug] Unable to Access REA Repository `bug` `platform:windows` `needs-info`
- [#109166](https://github.com/anthropics/claude-code/issues/109166) [Bug] Unable to run projects `bug` `platform:macos` `needs-info` `needs-repro`
- [#109165](https://github.com/anthropics/claude-code/issues/109165) [BUG] `bug` `area:mcp` `needs-info` `needs-repro`
- [#109164](https://github.com/anthropics/claude-code/issues/109164) [Bug] Bug Report: Unspecified false positive, insufficient detail `bug` `platform:macos` `needs-info`
- [#109163](https://github.com/anthropics/claude-code/issues/109163) [Bug] Excessive False Positives When Compiling Python to Binaries `bug` `platform:macos` `area:model` `needs-info`
- [#109162](https://github.com/anthropics/claude-code/issues/109162) [Request] In Claude Code on the web (Anthropic-hosted cloud environment), `comp… `enhancement` `area:claude-code-web` `platform:web` `area:networking`
- [#109161](https://github.com/anthropics/claude-code/issues/109161) [MODEL] Opus 4.6 Max. `bug` `platform:macos` `area:model` `model`
- [#109160](https://github.com/anthropics/claude-code/issues/109160) [BUG] API Error: Usage credits required for 1M context `bug` `duplicate` `platform:windows` `area:cost`
- [#109157](https://github.com/anthropics/claude-code/issues/109157) The project chat should be able to post clickable cards taken from the threads.… `enhancement`
- [#109159](https://github.com/anthropics/claude-code/issues/109159) Cloud sessions: every PR a session creates gets subscribed to PR activity, and … `enhancement` `area:claude-code-web` `platform:web`
- [#109158](https://github.com/anthropics/claude-code/issues/109158) [FEATURE] Desktop sidebar: auto-file new chats into custom sections by topic `enhancement` `platform:windows` `area:desktop`
- [#109156](https://github.com/anthropics/claude-code/issues/109156) [Bug] Ctrl+click on OSC 8 link opens it twice in fullscreen TUI on GNOME Terminal `bug` `has repro` `platform:linux` `area:tui`
- [#109154](https://github.com/anthropics/claude-code/issues/109154) [Desktop] Deleted artifacts still show as normal in chat cards and the session Outputs list `bug` `platform:macos` `area:desktop`
- [#109153](https://github.com/anthropics/claude-code/issues/109153) [BUG] tools.N.custom.ownership_metadata: Extra inputs are not permitted when using LLM gateway `bug` `has repro` `platform:macos` `area:api`
- [#109152](https://github.com/anthropics/claude-code/issues/109152) [BUG] --tools "" still primes agent actions, causing fabricated Write/Bash calls and execution claims `bug` `has repro` `platform:macos` `area:tools`

#### 🔒 Closed Issues
- [#109171](https://github.com/anthropics/claude-code/issues/109171) Opus 5.5

### OpenAI Codex (`openai/codex`)

**Stars:** 134,942 · **Open issues:** 27,314 · **Last push:** <1h ago

On November 12, 2026, OpenAI Codex released version rust-v0.167.2, introducing a new feature that enables Codex to send tool updates incrementally by default on Google Cloud Vertex AI, with an option to opt out through configuration. Additionally, several key merged pull requests included enhancements such as making reactive MCP OAuth refreshes cancellation-safe, preserving allocated response item IDs in requests, and reconnecting idle Cloud conversations after transient stream loss. Notably, the day saw new issue #60984 reported, highlighting a problem where Appshots captures the wrong window on Windows systems. The updates reflect ongoing efforts to refine functionality and address user concerns within the Codex ecosystem.

#### 🚀 New Releases
- [rust-v0.170.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.170.0-alpha.2) 0.170.0-alpha.2
- [rust-v0.167.2](https://github.com/openai/codex/releases/tag/rust-v0.167.2) 0.167.2
- [rust-v0.170.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.170.0-alpha.1) 0.170.0-alpha.1
- [rust-v0.169.0-alpha.11.1](https://github.com/openai/codex/releases/tag/rust-v0.169.0-alpha.11.1) 0.169.0-alpha.11.1
- [rust-v0.169.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.169.0-alpha.11) 0.169.0-alpha.11
- [rust-v0.167.0-alpha.4.3](https://github.com/openai/codex/releases/tag/rust-v0.167.0-alpha.4.3) 0.167.0-alpha.4.3

#### ✅ Merged PRs
- [#60981](https://github.com/openai/codex/pull/60981) Make reactive MCP OAuth refreshes cancellation-safe
- [#60977](https://github.com/openai/codex/pull/60977) Preserve allocated response item IDs in requests
- [#60972](https://github.com/openai/codex/pull/60972) Lowercase service tier names in the model status line
- [#60969](https://github.com/openai/codex/pull/60969) Reconnect idle Cloud conversations after transient stream loss
- [#60964](https://github.com/openai/codex/pull/60964) Validate the issue labeler's API key before sending requests
- [#60962](https://github.com/openai/codex/pull/60962) Refactor shortcut overlay binding construction
- [#60948](https://github.com/openai/codex/pull/60948) Report biometric type in user verification responses
- [#60944](https://github.com/openai/codex/pull/60944) Reconcile Windows runtime registration after service privilege errors
- [#60943](https://github.com/openai/codex/pull/60943) Preserve file permissions during repeated Windows sandbox setup
- [#60942](https://github.com/openai/codex/pull/60942) Preserve thread-local model ID state across replay and compaction
- [#60936](https://github.com/openai/codex/pull/60936) Preserve legacy sandbox templates in TUI permission conversions
- [#60929](https://github.com/openai/codex/pull/60929) Preserve Command Center task ownership across backend switches
- [#60914](https://github.com/openai/codex/pull/60914) Reserve Guardian context budget for selected Code Mode exec results
- [#60905](https://github.com/openai/codex/pull/60905) Keep same-named MCP servers separate across environments
- [#60904](https://github.com/openai/codex/pull/60904) Version answer display instructions and restrict unsupported payloads
- [#60898](https://github.com/openai/codex/pull/60898) Include bundled bubblewrap in the root metadata test fixture
- [#60897](https://github.com/openai/codex/pull/60897) Use the Responses API for issue label suggestions
- [#60882](https://github.com/openai/codex/pull/60882) Stabilize tracing in the cancellation timing test
- [#60872](https://github.com/openai/codex/pull/60872) Fix Windows atomic writes and refresh build maintenance
- [#60871](https://github.com/openai/codex/pull/60871) Wait for the in-process initialization handshake to finish
- [#60849](https://github.com/openai/codex/pull/60849) Protect MCP OAuth persistence from stale credential writes
- [#60848](https://github.com/openai/codex/pull/60848) Enable incremental tool declarations by default for GCP
- [#60846](https://github.com/openai/codex/pull/60846) Fix thread search snippets for whitespace-containing queries
- [#60845](https://github.com/openai/codex/pull/60845) Deduplicate file search results from overlapping roots
- [#60842](https://github.com/openai/codex/pull/60842) Make TUI thread titles resilient to generation failures
- [#60841](https://github.com/openai/codex/pull/60841) Honor advertised WebSocket message size limits
- [#60840](https://github.com/openai/codex/pull/60840) Fall back to HTTP immediately for oversized WebSocket requests
- [#60839](https://github.com/openai/codex/pull/60839) Preserve retained assistant revisions across rollout replay
- [#60784](https://github.com/openai/codex/pull/60784) Centralize synchronous Guardian reviewer selection
- [#60773](https://github.com/openai/codex/pull/60773) Resolve saved Daybreak choices for each subagent turn
- [#60771](https://github.com/openai/codex/pull/60771) Preserve model-facing ID allocations in saved history
- [#60770](https://github.com/openai/codex/pull/60770) Derive history and notes tool schemas from typed requests
- [#60763](https://github.com/openai/codex/pull/60763) Hand off approved plans through attachments in fresh sessions
- [#60759](https://github.com/openai/codex/pull/60759) Fix Unicode caseless matching in thread search
- [#60757](https://github.com/openai/codex/pull/60757) Use typed context window IDs throughout thread persistence
- [#60753](https://github.com/openai/codex/pull/60753) Add snapshot coverage for history and notes tool contracts
- [#60749](https://github.com/openai/codex/pull/60749) Capture saved Daybreak preferences for native helpers
- [#60748](https://github.com/openai/codex/pull/60748) Label seed arguments in the model-facing ID recovery test
- [#60746](https://github.com/openai/codex/pull/60746) Add a Git credential helper for existing Codex logins
- [#60735](https://github.com/openai/codex/pull/60735) Preserve file-backed audio in tool outputs
- [#60732](https://github.com/openai/codex/pull/60732) Allow model-facing ID sequences to resume from allocated IDs
- [#60730](https://github.com/openai/codex/pull/60730) Apply session app overrides during MCP config refresh
- [#60721](https://github.com/openai/codex/pull/60721) Gate plugin recommendation cache warming on feature flags

#### 🐛 New Issues
- [#60984](https://github.com/openai/codex/issues/60984) Appshots captures the wrong window on Windows `bug` `windows-os` `app` 💬2
- [#60967](https://github.com/openai/codex/issues/60967) gitDiffToRemote inherits display settings that make patches non-applicable `bug` `CLI` `app-server` 💬1
- [#60959](https://github.com/openai/codex/issues/60959) Buffered command/exec responses do not indicate truncated output 💬1
- [#60989](https://github.com/openai/codex/issues/60989) I just asked about the weather in London, and it took me 33 minutes! `bug` `app` `performance` 💬1
- [#60812](https://github.com/openai/codex/issues/60812) Windows Desktop 26.1106.6628.0 omits attached secondary project folders from writable roots `bug` `windows-os` `sandbox` `app` 💬1
- [#60965](https://github.com/openai/codex/issues/60965) gitDiffToRemote returns a non-applicable patch for tracked binary changes `bug` `CLI` `app-server` 💬1
- [#60913](https://github.com/openai/codex/issues/60913) fs/readDirectory silently omits dangling symbolic links 💬1
- [#60997](https://github.com/openai/codex/issues/60997) Python SDK leaves child process running when async context initialization is cancelled `bug` `app-server`
- [#60996](https://github.com/openai/codex/issues/60996) TypeScript SDK rejects image-only turn input before sending the image `bug` `exec` `CLI` `app-server`
- [#60995](https://github.com/openai/codex/issues/60995) TypeScript SDK silently starts a new thread when resumeThread receives an empty ID `bug` `CLI` `app-server`
- [#60994](https://github.com/openai/codex/issues/60994) TypeScript SDK resolves relative images against host cwd instead of workingDirectory `bug` `windows-os` `CLI` `app-server`
- [#60993](https://github.com/openai/codex/issues/60993) codex exec --json reports a recoverable retry as an unrecoverable error `bug` `exec` `CLI` `connectivity`
- [#60992](https://github.com/openai/codex/issues/60992) codex exec --json emits duplicate id keys for web-search items `bug` `exec` `CLI`
- [#60991](https://github.com/openai/codex/issues/60991) TypeScript SDK rejects local image filenames beginning with a hyphen `bug` `windows-os` `exec` `CLI`
- [#60990](https://github.com/openai/codex/issues/60990) TypeScript SDK web search items omit the emitted action type `bug` `app-server`
- [#60988](https://github.com/openai/codex/issues/60988) TypeScript SDK command exit_code type excludes emitted null `bug` `exec` `CLI` `app-server`
- [#60987](https://github.com/openai/codex/issues/60987) Daybreak fix generation fails for single and bulk requests `bug` `codex-web` `agent`
- [#60986](https://github.com/openai/codex/issues/60986) TypeScript SDK ThreadItem union omits collab_tool_call events `bug` `CLI` `subagent` `app-server`
- [#60985](https://github.com/openai/codex/issues/60985) TypeScript SDK rejects valid none and model-defined reasoning efforts `bug` `app-server`
- [#60983](https://github.com/openai/codex/issues/60983) Literal memory-citation tags inside code blocks disappear from assistant output `bug` `CLI` `app-server`
- [#60982](https://github.com/openai/codex/issues/60982) Plan mode interprets proposed_plan tags inside fenced code as a plan `bug` `CLI` `plan` `app-server`
- [#60980](https://github.com/openai/codex/issues/60980) fs/watch returns a non-canonical path despite its response contract `bug` `windows-os` `CLI` `app-server`
- [#60979](https://github.com/openai/codex/issues/60979) Python model-selection examples fail on custom reasoning effort names `bug` `app-server`
- [#60978](https://github.com/openai/codex/issues/60978) Standalone installer writes PATH setup to .profile for Fish users `bug` `windows-os` `CLI`
- [#60976](https://github.com/openai/codex/issues/60976) Python SDK overload retry can exceed max_delay_s after jitter `bug` `app-server`
- [#60975](https://github.com/openai/codex/issues/60975) Suspected false positive blocks DSP/OSD debugging `bug` `CLI` `safety-check`
- [#60974](https://github.com/openai/codex/issues/60974) [Windows][WSL] Startup policy check skips CLI relocation and executes non-executable WindowsApps binary `bug` `windows-os` `app` `app-server`
- [#60973](https://github.com/openai/codex/issues/60973) [Windows][CUA] Junction workspace cwd falsely triggers TOML symlink rejection with regular CODEX_HOME `bug` `windows-os` `app` `config`
- [#60971](https://github.com/openai/codex/issues/60971) macOS Codex composer drops the final asterisk in a dotted wildcard `bug` `app`

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 108,783 · **Open issues:** 724 · **Last push:** 2h ago

On November 12, 2026, there were no new releases for Gemini CLI. However, several important fixes were merged, including improvements to variable default application in the CLI when variables are set but empty (PR #30250) and ensuring that interrupted placeholders are preserved after empty model responses during tool turns (PR #30228). Additional enhancements included the preservation of selected worktree across authentication restarts (PR #30176) and the ability to maintain Unicode prompts while stripping ANSI fragments in session previews (PR #30220). There were no new issues reported, indicating a smooth operational day for the Gemini CLI team.

#### ✅ Merged PRs
- [#30250](https://github.com/google-gemini/gemini-cli/pull/30250) fix(cli): apply default in ${VAR:-default} when variable is set but empty
- [#30228](https://github.com/google-gemini/gemini-cli/pull/30228) fix(core): preserve interrupted placeholder after empty model responses to tool turns
- [#30176](https://github.com/google-gemini/gemini-cli/pull/30176) fix(cli): preserve selected worktree across authentication restarts (#30078)
- [#30220](https://github.com/google-gemini/gemini-cli/pull/30220) fix(cli): preserve Unicode prompts and strip ANSI fragments in session previews (#29915)
- [#30221](https://github.com/google-gemini/gemini-cli/pull/30221) test(cli): remove redundant lowercase restart test in AdminSettingsChangedDialog

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,403 · **Open issues:** 2,205 · **Last push:** 2h ago

On November 12, 2026, GitHub Copilot CLI released two new versions: v1.0.110-3, which addressed unnecessary error popups during Microsoft Entra sign-in, improved screen reader functionality for session status, and adjusted the command picker behavior, and v1.0.110-2, which introduced clearer handling of incomplete responses and improved error messaging for deleted directories. No pull requests were merged today, but the team is addressing multiple new issues, including #5419 regarding model access after an upgrade and #5424, which reports an ENOEXEC error on the linux-arm64 binary. Overall, the day was characterized by fine-tuning efforts to enhance user experience and address reported bugs.

#### 🚀 New Releases
- [v1.0.110-3](https://github.com/github/copilot-cli/releases/tag/v1.0.110-3) 1.0.110-3
- [v1.0.110-2](https://github.com/github/copilot-cli/releases/tag/v1.0.110-2) 1.0.110-2

#### 🐛 New Issues
- [#5419](https://github.com/github/copilot-cli/issues/5419) no model after upgrade and paying old bill `triage` 💬1
- [#5418](https://github.com/github/copilot-cli/issues/5418) mac os 12.7.6 error occured when copilot run `triage`
- [#5429](https://github.com/github/copilot-cli/issues/5429) API paths at the beginning of a natural-language prompt are interpreted as slash commands `triage`
- [#5427](https://github.com/github/copilot-cli/issues/5427) Concise transcript "N commands" groups render full untruncated command text when collapsed `triage`
- [#5426](https://github.com/github/copilot-cli/issues/5426) Concise transcript mode drops reasoning rows regardless of showReasoning / ctrl+t `triage`
- [#5425](https://github.com/github/copilot-cli/issues/5425) Repo instruction files symlinked to targets outside the repo are not loaded
- [#5424](https://github.com/github/copilot-cli/issues/5424) Copilot CLI linux-arm64 binary: ENOEXEC on Linux 6.12 (aarch64, 4K pages); runs via ld.so `triage`
- [#5423](https://github.com/github/copilot-cli/issues/5423) File links do not open in VS Code when connected to the IDE `triage`
- [#5421](https://github.com/github/copilot-cli/issues/5421) Windows sandbox: dotnet build of a multi-project .NET solution `triage`
- [#5420](https://github.com/github/copilot-cli/issues/5420) Long-running build coordinator stopped without user approval; misleading stop provenance and orphaned Docker child `triage`
- [#5417](https://github.com/github/copilot-cli/issues/5417) Approved assisted permission still triggers `notification` events of type `permission_prompt` `triage`
- [#5416](https://github.com/github/copilot-cli/issues/5416) Session doesn't resume after the /restart command and shows session is underway `triage`
- [#5415](https://github.com/github/copilot-cli/issues/5415) Add first class GitHub Spec Kit support `triage`
- [#5414](https://github.com/github/copilot-cli/issues/5414) Serve the local JSON-RPC server in every interactive session `triage`
- [#5413](https://github.com/github/copilot-cli/issues/5413) Sub-agents cannot run `hydrafusion` or `hydrafusion-max`, both offered by the `task` tool `triage`
- [#5412](https://github.com/github/copilot-cli/issues/5412) Every extension slash command reports "No client found for command" even though its handler runs `area:plugins`

#### 🔒 Closed Issues
- [#3534](https://github.com/github/copilot-cli/issues/3534) WSL2 (ARM64): `/copy` fails with `clip.exe exited with code 1` due to cmd.exe quoting in 1.0.55
- [#5312](https://github.com/github/copilot-cli/issues/5312) Context window rollover still fails after #5205 closed as completed: checkpoint.md absent recurs on 1.0.105
- [#5088](https://github.com/github/copilot-cli/issues/5088) Windows: CLI crashes (0xc0000005 in msalruntime.dll) on first Entra account-broker sign-in for MCP server - interactive WAM called with no parent window
- [#2330](https://github.com/github/copilot-cli/issues/2330) /session picker should show session summary (name, recency, intent) inline
- [#5256](https://github.com/github/copilot-cli/issues/5256) High CPU and repeated "gh auth token" failures when not signed in (worse without gh)
- [#4570](https://github.com/github/copilot-cli/issues/4570) Windows: plugin install/update fails with "Access is denied. (os error 5)" while VS Code is running
- [#5284](https://github.com/github/copilot-cli/issues/5284) MCP OAuth: expired dynamic client registration is reused forever (invalid_client), no re-registration
- [#5018](https://github.com/github/copilot-cli/issues/5018) Permission prompts auto-cancelled with "Session host did not acknowledge 'permission.requested' delivery within 5 seconds"; session gets stuck until exit and resume
- [#3422](https://github.com/github/copilot-cli/issues/3422) `Control-j` remapped in `.inputrc` causes bash commands to hang (all except possibly the first)
- [#3352](https://github.com/github/copilot-cli/issues/3352) Feature request: /config slash command — interactive editor for all writable settings (Claude Code parity)

### OpenCode (`anomalyco/opencode`)

**Stars:** 226,209 · **Open issues:** 4,237 · **Last push:** <1h ago

On November 12, 2026, OpenCode released process-daemon v0.5.2, which included updates to opencode-pty version 0.5.2, published to npm under the tag @opencode/pty@0.5.2. Key merged pull requests featured enhancements such as running local Windows shell commands within the process daemon and a fix to accept System One refusals and send PDFs in the OpenRouter state. Notable documentation updates included the addition of GPT 6 Luna Decision and Gemini Decision 1. Among the new issues, the most prominent is #63417, concerning a reconnect splash feature that prompts users every 10 seconds when a connection is lost, highlighting ongoing user experience concerns.

#### 🚀 New Releases
- [process-daemon-v0.5.2](https://github.com/anomalyco/opencode/releases/tag/process-daemon-v0.5.2) process-daemon v0.5.2

#### ✅ Merged PRs
- [#63441](https://github.com/anomalyco/opencode/pull/63441) chore(perf): bench with strobe 0.29.0
- [#63443](https://github.com/anomalyco/opencode/pull/63443) fix(ai): accept System One refusals and send PDFs in the OpenRouter state
- [#63440](https://github.com/anomalyco/opencode/pull/63440) docs(console): add GPT 6 Luna Decision and Gemini Decision 1
- [#63427](https://github.com/anomalyco/opencode/pull/63427) feat(app): hide and mute sessions in Recent sidebar
- [#63423](https://github.com/anomalyco/opencode/pull/63423) fix(legacy): keep github app secrets in production
- [#63413](https://github.com/anomalyco/opencode/pull/63413) refactor(core): remove the subagent notify option
- [#63409](https://github.com/anomalyco/opencode/pull/63409) feat(core): run local Windows shell commands in the process daemon
- [#63030](https://github.com/anomalyco/opencode/pull/63030) fix(core): stop keeping the whole file in memory for tail reads
- [#63403](https://github.com/anomalyco/opencode/pull/63403) fix(core): use the localhost redirect when an MCP OAuth server rewrites 127.0.0.1
- [#63397](https://github.com/anomalyco/opencode/pull/63397) ci: run macos build jobs on blacksmith

#### 🐛 New Issues
- [#63345](https://github.com/anomalyco/opencode/issues/63345) tui: background shell completion notices can accumulate below the active turn `type/bug` `area/tui` `version/v2` `platform/wsl` 💬7
- [#63417](https://github.com/anomalyco/opencode/issues/63417) client: reconnect splash ("press <enter> to reconnect") every <=10s (HA add-on) `triaging` `type/bug` `area/network` `version/v2` 💬7
- [#63433](https://github.com/anomalyco/opencode/issues/63433) Fix: Switched, dropdown menu. `pending close` `triaging` `type/bug` `area/desktop` 💬5
- [#63253](https://github.com/anomalyco/opencode/issues/63253) desktop: browser attach returns 400 once on cold start and is never retried `reproduced` 💬3
- [#63387](https://github.com/anomalyco/opencode/issues/63387) [FEEDBACK]: Heartfelt thanks & appreciation to the OpenCode & MiniMax team! `triaging` `inference/free-tier` 💬3
- [#63383](https://github.com/anomalyco/opencode/issues/63383) desktop: goal Resume ignores selected agent and keeps Plan mode `type/bug` `area/desktop` `version/v2` `platform/macos` 💬3
- [#63352](https://github.com/anomalyco/opencode/issues/63352) Install script doesn't work on windows 11 `pending close` `triaging` 💬3
- [#63388](https://github.com/anomalyco/opencode/issues/63388) Scroll issue in v 2.2.7 `triaging` `type/bug` `area/tui` `version/v2` 💬2
- [#63426](https://github.com/anomalyco/opencode/issues/63426) cloud/mobile: stuck 'Answering' on remote-server sessions; idle/completion events not delivered after event-stream gap, no resync `type/bug` `area/web` `version/v2` `platform/linux` 💬2
- [#63376](https://github.com/anomalyco/opencode/issues/63376) core: session_inbox queue items never drained after interrupted run; orphaned question tool call suspends resumed run forever `type/bug` `area/sessions-storage` `version/v2` `platform/macos` 💬2
- [#63373](https://github.com/anomalyco/opencode/issues/63373) core: compaction request repacks transcript and misses provider prompt cache `type/bug` `area/core` `version/v2` `platform/wsl` 💬2
- [#63357](https://github.com/anomalyco/opencode/issues/63357) tui: shared service is killed after 45s of SSE silence, causing cross-session restart loops `type/bug` `area/service` `inference/go` `version/v2` 💬2
- [#63374](https://github.com/anomalyco/opencode/issues/63374) permissions: denying execute lists every MCP tool on the native tool list `type/bug` `status/repro-simulated` `area/core` `version/v2` 💬2
- [#63404](https://github.com/anomalyco/opencode/issues/63404) [FEATURE]: Desktop PR panel: send a failing check or an unresolved review thread to the session `type/feature` `area/desktop` `version/v2` 💬2
- [#63447](https://github.com/anomalyco/opencode/issues/63447) feature request: interactive/PTY shell tool for human-in-the-loop commands `type/feature` `area/core` `version/v2` `platform/macos` 💬1
- [#63446](https://github.com/anomalyco/opencode/issues/63446) feature request: interactive/PTY shell tool for human-in-the-loop commands `type/feature` `area/core` `version/v2` `platform/macos` 💬1
- [#63445](https://github.com/anomalyco/opencode/issues/63445) Project Folder Escape `triaging` `type/bug` `area/core` `platform/windows` 💬1
- [#63439](https://github.com/anomalyco/opencode/issues/63439) Compaction summary may keep commentary phase text from Responses models `type/bug` `status/repro-simulated` `area/core` `version/v2` 💬1
- [#63442](https://github.com/anomalyco/opencode/issues/63442) tui: allow pinning sessions in session list `type/feature` `area/tui` `version/v2` `platform/windows` 💬1
- [#63438](https://github.com/anomalyco/opencode/issues/63438) [FEATURE]: expose skill source and scope in skills.list() `type/feature` `area/sdk-api` `version/v2` 💬1
- [#63435](https://github.com/anomalyco/opencode/issues/63435) tui: agent catalog never recovers when the completing agent.updated has no location `type/bug` `status/repro-simulated` `area/tui` `version/v2` 💬1
- [#63434](https://github.com/anomalyco/opencode/issues/63434) Native compaction rejects retained developer messages from live instruction updates `type/bug` `status/repro-simulated` `area/providers` `version/v2` 💬1
- [#63431](https://github.com/anomalyco/opencode/issues/63431) Copilot GPT: 401 'input item does not belong to this connection' after switching Copilot account is back in v2 (regression of #31236) `type/bug` `area/providers` `version/v2` `platform/windows` 💬1
- [#63429](https://github.com/anomalyco/opencode/issues/63429) desktop: switching agent after undo drops the Plan→Build reminder `type/bug` `area/desktop` `version/v2` `platform/windows` 💬1
- [#63425](https://github.com/anomalyco/opencode/issues/63425) app: model picker for remote-server sessions lists the viewing device's models, not the session server's `type/bug` `area/web` `version/v2` `platform/linux` 💬1
- [#63422](https://github.com/anomalyco/opencode/issues/63422) Interleaved shell/grep tool calls dropped from transcript mid-turn; assistant then writes phantom/garbled file blocks `triaging` `type/bug` `area/core` `platform/windows` 💬1
- [#63351](https://github.com/anomalyco/opencode/issues/63351) Limit Reach Error `triaging` 💬1
- [#63419](https://github.com/anomalyco/opencode/issues/63419) desktop: second macOS user account can't start service — port 49374 held by other account's opencode-cli `type/bug` `area/service` `version/v2` `platform/macos` 💬1

#### 🔒 Closed Issues
- [#62797](https://github.com/anomalyco/opencode/issues/62797) tui: Plan mode reminder persists after switching agents
- [#63345](https://github.com/anomalyco/opencode/issues/63345) tui: background shell completion notices can accumulate below the active turn
- [#51755](https://github.com/anomalyco/opencode/issues/51755) cli: v2 Windows PowerShell install cannot be upgraded in place
- [#63387](https://github.com/anomalyco/opencode/issues/63387) [FEEDBACK]: Heartfelt thanks & appreciation to the OpenCode & MiniMax team!
- [#63352](https://github.com/anomalyco/opencode/issues/63352) Install script doesn't work on windows 11
- [#60362](https://github.com/anomalyco/opencode/issues/60362) [Feature Request]: Connect session lifecycle to GitHub PRs (PR awareness & auto-archive on merge)
- [#63388](https://github.com/anomalyco/opencode/issues/63388) Scroll issue in v 2.2.7
- [#63233](https://github.com/anomalyco/opencode/issues/63233) bar issue
- [#63232](https://github.com/anomalyco/opencode/issues/63232) feature request: native scheduled tasks (recurring automations)
- [#63231](https://github.com/anomalyco/opencode/issues/63231) desktop: group sessions by project in the sidebar
- [#63426](https://github.com/anomalyco/opencode/issues/63426) cloud/mobile: stuck 'Answering' on remote-server sessions; idle/completion events not delivered after event-stream gap, no resync
- [#63376](https://github.com/anomalyco/opencode/issues/63376) core: session_inbox queue items never drained after interrupted run; orphaned question tool call suspends resumed run forever
- [#63373](https://github.com/anomalyco/opencode/issues/63373) core: compaction request repacks transcript and misses provider prompt cache
- [#63357](https://github.com/anomalyco/opencode/issues/63357) tui: shared service is killed after 45s of SSE silence, causing cross-session restart loops
- [#63404](https://github.com/anomalyco/opencode/issues/63404) [FEATURE]: Desktop PR panel: send a failing check or an unresolved review thread to the session
- [#63219](https://github.com/anomalyco/opencode/issues/63219) no responde
- [#63447](https://github.com/anomalyco/opencode/issues/63447) feature request: interactive/PTY shell tool for human-in-the-loop commands
- [#63446](https://github.com/anomalyco/opencode/issues/63446) feature request: interactive/PTY shell tool for human-in-the-loop commands
- [#63442](https://github.com/anomalyco/opencode/issues/63442) tui: allow pinning sessions in session list
- [#63351](https://github.com/anomalyco/opencode/issues/63351) Limit Reach Error
- [#63419](https://github.com/anomalyco/opencode/issues/63419) desktop: second macOS user account can't start service — port 49374 held by other account's opencode-cli

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 29,472 · **Open issues:** 2,202 · **Last push:** <1h ago

Today marked the release of Qwen Code v1.0.0-preview, which integrates the agent capabilities of Qoder and Qwen Code for enhanced code understanding, implementation, debugging, and testing. This preview version supports multiple model providers and offers new native packages for macOS and Linux, although users should anticipate potential changes during the preview period. Significant merged features include a fix to center the session timeline vertically in the web shell and a refactor of the subscription provider for improved parallel tool calls. A notable new issue has arisen (#16915), reporting failures in the qwen code task, which has sparked conversation and may impact ongoing development efforts.

#### 🚀 New Releases
- [v1.0.0-preview](https://github.com/QwenLM/qwen-code/releases/tag/v1.0.0-preview) Release v1.0.0-preview

#### ✅ Merged PRs
- [#16990](https://github.com/QwenLM/qwen-code/pull/16990) docs: 补充 Qwen Code 1.0.0-preview.1 发布说明
- [#16912](https://github.com/QwenLM/qwen-code/pull/16912) fix(web-shell): center the session timeline vertically
- [#16985](https://github.com/QwenLM/qwen-code/pull/16985) refactor(qwen-subscription): 订阅 provider 改为账号型实现并恢复并行工具调用
- [#16981](https://github.com/QwenLM/qwen-code/pull/16981) chore(managed-agent): finish the CSI bound conversion and name it once
- [#16804](https://github.com/QwenLM/qwen-code/pull/16804) feat(web): configure DingTalk webhooks and scheduled delivery targets
- [#16949](https://github.com/QwenLM/qwen-code/pull/16949) docs(core): evaluate streaming tool dispatch (event-bus slice 3)
- [#16983](https://github.com/QwenLM/qwen-code/pull/16983) fix(managed-agent): fence concurrent journal pack publication with a builder lease
- [#16957](https://github.com/QwenLM/qwen-code/pull/16957) refactor(managed-agent): remove unused CSI checkpoint snapshot and log readers
- [#16917](https://github.com/QwenLM/qwen-code/pull/16917) ci: route web shell PR jobs to ephemeral runners

#### 🐛 New Issues
- [#16915](https://github.com/QwenLM/qwen-code/issues/16915) The qwen code task reports two errors and cannot continue. `status/need-information` `priority/P2` `type/bug` `category/core` 💬7
- [#16899](https://github.com/QwenLM/qwen-code/issues/16899) ci: github_ci_only PRs skip Prettier — the post-merge lint gap (#16872 class) remains for test-free Markdown and workflow YAML `priority/P2` `type/bug` `category/development` `scope/github-actions` 💬4
- [#16893](https://github.com/QwenLM/qwen-code/issues/16893) feat(web-shell): support host content slots in the model picker `priority/P3` `type/feature-request` `category/ui` `scope/components` 💬4
- [#16958](https://github.com/QwenLM/qwen-code/issues/16958) ci: verified follow-ups from the lint-gate and pool hardening cluster (heap-cap value, `|| true` pin gap, ESLint github_ci_only gap, four lint-slice test pins) `priority/P2` `type/bug` `category/development` `scope/github-actions` 💬3
- [#16975](https://github.com/QwenLM/qwen-code/issues/16975) deflake: packages/cli/src/serve/managed-runtime-bootstrap.process.test.ts › SSH bootstrap real processes › launches once under concurrent requests, survives its launcher, and cleanly retires `priority/P2` `type/bug` `category/development` `scope/testing` 💬3
- [#16959](https://github.com/QwenLM/qwen-code/issues/16959) deflake: integration-tests/interactive/tui-agent-loop-parity.test.ts › Ink TUI agent loop parity (experimental.unifiedAgentLoop) › 'one tool' `priority/P3` `type/bug` `category/development` `scope/testing` 💬3
- [#16954](https://github.com/QwenLM/qwen-code/issues/16954) scripts/lint.js: entry guard silently no-ops when argv[1] traverses a symlink (macOS tmpdir) — lint exits 0 without running, and the lint-scope isolation test fails on macOS `priority/P2` `type/bug` `category/development` `scope/macos` 💬3
- [#16931](https://github.com/QwenLM/qwen-code/issues/16931) feat(web-shell): pick channel allowlist entries from observed contacts instead of typing platform IDs `priority/P3` `type/feature-request` `category/ui` `need-discussion` 💬3
- [#16944](https://github.com/QwenLM/qwen-code/issues/16944) feat(core): programmatic tool calling — let the agent orchestrate tools as code in the sandbox and return only the result `priority/P3` `status/waiting-for-feedback` `type/feature-request` `category/tools` 💬3
- [#16941](https://github.com/QwenLM/qwen-code/issues/16941) feat(core): a verify-then-repair loop with a clean-context verifier — make post-edit verification a core mechanism, not a skill `priority/P2` `type/feature-request` `category/core` `need-discussion` 💬3
- [#16925](https://github.com/QwenLM/qwen-code/issues/16925) docs(mcp): "restart Qwen Code after adding a server" is outdated — mcpServers hot-reload without a restart `priority/P2` `type/documentation` `category/configuration` `scope/mcp` 💬3
- [#16982](https://github.com/QwenLM/qwen-code/issues/16982) core: /rewind after /cd can restore a checkpoint into the wrong working directory `priority/P1` `type/bug` `category/core` `scope/session-management` 💬2
- [#16980](https://github.com/QwenLM/qwen-code/issues/16980) Web Shell: focus the prompt composer after selecting a workspace in the workspace picker `priority/P3` `type/feature-request` `category/ui` `scope/web-shell` 💬2
- [#16970](https://github.com/QwenLM/qwen-code/issues/16970) Web Shell: TodoPanel hover tooltip clipped in narrow chat columns (Split View) — status icons and line ends cut off `priority/P3` `type/bug` `category/ui` `scope/web-shell` 💬2
- [#16964](https://github.com/QwenLM/qwen-code/issues/16964) Web Shell: add "Ask in side task" to the message selection menu `priority/P3` `type/feature-request` `category/ui` `need-discussion` 💬2
- [#16962](https://github.com/QwenLM/qwen-code/issues/16962) "Ask for details": the side task's HTML file is never registered as a session artifact, so the turn-output card and preview never appear `priority/P2` `type/bug` `category/ui` `scope/web-shell` 💬2
- [#16963](https://github.com/QwenLM/qwen-code/issues/16963) Follow-up suggestion filter: Tibetan/Dzongkha still dropped, and the evaluative/AI-voice checks match English only (deferred from #16341) `priority/P2` `type/bug` `category/core` `scope/content-generation` 💬2
- [#16918](https://github.com/QwenLM/qwen-code/issues/16918) test: pin the docs_only lint guard widenings `priority/P3` `category/development` `scope/testing` `scope/ci-cd` 💬2
- [#16942](https://github.com/QwenLM/qwen-code/issues/16942) managed-agent Java CI never runs for feature-branch-base PRs `priority/P2` `type/bug` `category/development` `scope/github-actions` 💬2
- [#16927](https://github.com/QwenLM/qwen-code/issues/16927) ci: built-tree download timeouts redden PR checks with no tests run (all 58 jobs on the hz fleet) `priority/P1` `type/bug` `category/development` `scope/ci-cd` 💬2
- [#16977](https://github.com/QwenLM/qwen-code/issues/16977) Release Failed for v0.27.2-nightly.20261111.befc947ee5 on 2026-11-11 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#16969](https://github.com/QwenLM/qwen-code/issues/16969) Split View: pane for an archived session lingers with 'Session closed' until the next catalog refresh
- [#16971](https://github.com/QwenLM/qwen-code/issues/16971) Main CI failed: tui-parity `status/needs-triage` `scope/ci-cd`
- [#16947](https://github.com/QwenLM/qwen-code/issues/16947) Main CI failed: E2E Tests — interactive/tui-agent-loop-parity.test.ts > … > 'a retry after a model error' `status/needs-triage` `type/bug`
- [#16937](https://github.com/QwenLM/qwen-code/issues/16937) Main CI failed: Qwen Code CI — src/managed-runtime/managed-session-inbox.test.ts > … > compacts repeated processing fences and restores only… `status/needs-triage` `type/bug`

#### 🔒 Closed Issues
- [#16425](https://github.com/QwenLM/qwen-code/issues/16425) Workflow agent permission approval never renders — the run hangs indefinitely while the status bar shows it needs approval (observed 0.26.6; reproduced 0.26.8)
- [#16751](https://github.com/QwenLM/qwen-code/issues/16751) feat(channels): support outbound platform webhooks through Channel delivery
- [#16899](https://github.com/QwenLM/qwen-code/issues/16899) ci: github_ci_only PRs skip Prettier — the post-merge lint gap (#16872 class) remains for test-free Markdown and workflow YAML
- [#16959](https://github.com/QwenLM/qwen-code/issues/16959) deflake: integration-tests/interactive/tui-agent-loop-parity.test.ts › Ink TUI agent loop parity (experimental.unifiedAgentLoop) › 'one tool'
- [#16753](https://github.com/QwenLM/qwen-code/issues/16753) feat(web-shell): configure outbound webhook Channels and select their destinations
- [#15298](https://github.com/QwenLM/qwen-code/issues/15298) feat(serve): allow configuring the Conversations working-directory root
- [#16918](https://github.com/QwenLM/qwen-code/issues/16918) test: pin the docs_only lint guard widenings
- [#16795](https://github.com/QwenLM/qwen-code/issues/16795) auto-edit approval mode auto-approves tool calls that match a permissions.ask rule, including in subagents of a default-mode session
- [#16752](https://github.com/QwenLM/qwen-code/issues/16752) feat(channels): add configured delivery targets and DingTalk webhook sending
- [#16775](https://github.com/QwenLM/qwen-code/issues/16775) Improve sidebar session sort placement next to multi-select
- [#16977](https://github.com/QwenLM/qwen-code/issues/16977) Release Failed for v0.27.2-nightly.20261111.befc947ee5 on 2026-11-11
- [#16859](https://github.com/QwenLM/qwen-code/issues/16859) VSCode IDE Companion Release Failed for 0.27.2 on 2026-11-10

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

**Stars:** 394,371 · **Open issues:** 8,078 · **Last push:** <1h ago

On November 12, 2026, OpenClaw released version 2026.11.5-beta.2, which introduced significant improvements including paged history for large conversations and better handling of secret preservation on configuration failures in the macOS app. Notable merged fixes addressed issues such as memory allocation during native context preparation and improved state reporting during CI processes. Important new issues were raised, including a bug (#197083) linked to post-install verification for WAL publication that leaves updates partially finalized. Additionally, a feature request was submitted (#197297) for a per-user secret vault with session opt-in, indicating ongoing interest in enhancing user security and flexibility.

#### 🚀 New Releases
- [v2026.11.5-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.11.5-beta.2) openclaw 2026.11.5-beta.2

#### ✅ Merged PRs
- [#197427](https://github.com/openclaw/openclaw/pull/197427) fix: final delivery loses recovery custody after an RPC writer claim
- [#197482](https://github.com/openclaw/openclaw/pull/197482) fix: stop usage summaries from scanning entire agent databases
- [#197496](https://github.com/openclaw/openclaw/pull/197496) Keep mid-task status out of permanent chat replies
- [#194545](https://github.com/openclaw/openclaw/pull/194545) fix: reduce transcript allocation when preparing native context seeds
- [#197490](https://github.com/openclaw/openclaw/pull/197490) test: bring test lines back under the ceiling after catalog fixes
- [#197029](https://github.com/openclaw/openclaw/pull/197029) feat(advisor): move Advisor out of Labs (still off by default)
- [#197488](https://github.com/openclaw/openclaw/pull/197488) fix(ci): main push test-lines ratchet fails after hosted pricing tests
- [#197431](https://github.com/openclaw/openclaw/pull/197431) fix(ci): report state-worker timing when the SIGUSR2 shutdown proof stalls
- [#196513](https://github.com/openclaw/openclaw/pull/196513) fix(ui): stored pins override Last updated conversation order
- [#197478](https://github.com/openclaw/openclaw/pull/197478) fix(ui): stop missing completed device dialog animations
- [#197448](https://github.com/openclaw/openclaw/pull/197448) fix: batch content searches across shared Git history
- [#193311](https://github.com/openclaw/openclaw/pull/193311) fix(whatsapp): judge group metadata cache expiry on elapsed time
- [#197326](https://github.com/openclaw/openclaw/pull/197326) fix(models): keep typed-only models out of chat pickers
- [#197321](https://github.com/openclaw/openclaw/pull/197321) fix(usage): bill calls at the hosted catalog price when the bundled row already has one
- [#197459](https://github.com/openclaw/openclaw/pull/197459) fix(infra): time state-worker open phases in sqlite worker diagnostics
- [#197457](https://github.com/openclaw/openclaw/pull/197457) fix: shorten Gateway restart when active commands need cleanup
- [#197458](https://github.com/openclaw/openclaw/pull/197458) fix(ui): keep macOS font smoothing for chat text in sans-serif themes
- [#197428](https://github.com/openclaw/openclaw/pull/197428) refactor(update): reuse canonical path resolution
- [#197447](https://github.com/openclaw/openclaw/pull/197447) fix(ui): prevent cold-render chat activity test flakes
- [#197315](https://github.com/openclaw/openclaw/pull/197315) fix(cron): cancel interrupted status and history reads
- [#195782](https://github.com/openclaw/openclaw/pull/195782) fix(android): session catalog stays disabled after cancelling continuation
- [#192614](https://github.com/openclaw/openclaw/pull/192614) refactor(gateway): isolate agent text pacing
- [#196952](https://github.com/openclaw/openclaw/pull/196952) fix(ui): skip cache policy reads for private requests
- [#196927](https://github.com/openclaw/openclaw/pull/196927) fix(agents): collect process results at suspended-run capacity
- [#196787](https://github.com/openclaw/openclaw/pull/196787) fix: make incoming audio recordings playable inline
- [#192612](https://github.com/openclaw/openclaw/pull/192612) refactor(perf): reuse transcript latency statistics
- [#195489](https://github.com/openclaw/openclaw/pull/195489) fix(cli): agents list no longer blames the Matrix plugin for core deprecation warnings
- [#192611](https://github.com/openclaw/openclaw/pull/192611) refactor(bench): share control UI stylesheet collection
- [#197420](https://github.com/openclaw/openclaw/pull/197420) fix(gateway): surface refused service management on preserved-definition restart
- [#197412](https://github.com/openclaw/openclaw/pull/197412) fix(doctor): keep CLI-runtime model pins in replace mode
- [#195622](https://github.com/openclaw/openclaw/pull/195622) fix(android): expand compact chat composer icon buttons to 48dp touch targets
- [#197411](https://github.com/openclaw/openclaw/pull/197411) fix(macos): preserve spacing between traffic lights and navigation
- [#197323](https://github.com/openclaw/openclaw/pull/197323) fix(subagents): suspended descendants no longer hold a completion
- [#197415](https://github.com/openclaw/openclaw/pull/197415) fix: show why steering falls back to queued input
- [#197379](https://github.com/openclaw/openclaw/pull/197379) fix(plugins): prevent Gateway-thread SQL during prepared worker turns
- [#197310](https://github.com/openclaw/openclaw/pull/197310) fix: legacy HTML exports show answers without their questions
- [#197408](https://github.com/openclaw/openclaw/pull/197408) fix(browser): bound memory while managed browsers stay attached
- [#197308](https://github.com/openclaw/openclaw/pull/197308) fix(knowledge): reject missing chat export timestamps before sorting
- [#197392](https://github.com/openclaw/openclaw/pull/197392) fix(ci): expose which phase stalls in the SIGUSR2 shutdown proof
- [#197212](https://github.com/openclaw/openclaw/pull/197212) refactor(ios): one phase per gateway session with a sticky shared pause
- [#197057](https://github.com/openclaw/openclaw/pull/197057) fix(tlon): inbound messages lose their list contents
- [#197398](https://github.com/openclaw/openclaw/pull/197398) fix(oc-path): resolve dotfiles and consecutive-dot filenames
- [#197396](https://github.com/openclaw/openclaw/pull/197396) improve(gateway): reduce allocations during presence broadcasts
- [#196225](https://github.com/openclaw/openclaw/pull/196225) fix(cli): restore missing Bash completions after output redirection
- [#197397](https://github.com/openclaw/openclaw/pull/197397) chore(ui): refresh control ui locales
- [#197370](https://github.com/openclaw/openclaw/pull/197370) fix(gateway): keep worker admission tests on the selected runtime
- [#197382](https://github.com/openclaw/openclaw/pull/197382) chore: identify slow database shutdown owners
- [#197358](https://github.com/openclaw/openclaw/pull/197358) fix(ci): unblock delegated profile dead-export checks
- [#197319](https://github.com/openclaw/openclaw/pull/197319) fix(ui): Skills page Save key replaces a SecretRef API key with plaintext
- [#197385](https://github.com/openclaw/openclaw/pull/197385) improve: reduce copying during agent turns
- [#197371](https://github.com/openclaw/openclaw/pull/197371) docs(update): manual source update leaves the checkout on old source
- [#197336](https://github.com/openclaw/openclaw/pull/197336) fix: recovery-backed npm authorization exhausts request budget
- [#197363](https://github.com/openclaw/openclaw/pull/197363) fix(ci): keep Boat planner checks stable as test inventory grows
- [#179944](https://github.com/openclaw/openclaw/pull/179944) fix(xai): xAI OAuth calls fail with HTTP 426 on the Grok proxy
- [#197359](https://github.com/openclaw/openclaw/pull/197359) fix(compaction): shorten older tool results in sampled summary input
- [#197349](https://github.com/openclaw/openclaw/pull/197349) fix(compaction): redact credentials in quoted summary sections
- [#197322](https://github.com/openclaw/openclaw/pull/197322) fix(users): stop interrupted profile list requests
- [#197355](https://github.com/openclaw/openclaw/pull/197355) fix: reduce CPU cost of large agent session lists
- [#197345](https://github.com/openclaw/openclaw/pull/197345) fix: keep active turns running across automatic session rollover
- [#197347](https://github.com/openclaw/openclaw/pull/197347) fix(sandbox): expose freeze phases and prepare writers before pausing
- [#197291](https://github.com/openclaw/openclaw/pull/197291) feat(claude-cli): managed turns can search the web by default with Claude Code's native WebSearch
- [#195402](https://github.com/openclaw/openclaw/pull/195402) fix(android): preserve pre-ack steer ownership across idle recovery snapshots
- [#194484](https://github.com/openclaw/openclaw/pull/194484) fix: avoid agent database stalls after worker retirement
- [#197339](https://github.com/openclaw/openclaw/pull/197339) fix(ci): wait for cold transcript speech controls
- [#197299](https://github.com/openclaw/openclaw/pull/197299) fix: stop reconnect loops after Gateway access is revoked
- [#197344](https://github.com/openclaw/openclaw/pull/197344) chore(ui): refresh control ui locales
- [#184821](https://github.com/openclaw/openclaw/pull/184821) fix(telegram): name DM topics from the first real message, not commands
- [#195784](https://github.com/openclaw/openclaw/pull/195784) fix(android): close command suggestions when typing arguments
- [#196687](https://github.com/openclaw/openclaw/pull/196687) improve(ui): polish the device approval and Your devices dialogs
- [#197285](https://github.com/openclaw/openclaw/pull/197285) fix(compaction): record failed compaction attempts; commit the floor when preflight requires it
- [#197329](https://github.com/openclaw/openclaw/pull/197329) fix(compaction): budget the summary floor with the tools the session sends
- [#196856](https://github.com/openclaw/openclaw/pull/196856) feat(auth): preserve delegated OCE user profiles and permissions
- [#197332](https://github.com/openclaw/openclaw/pull/197332) chore(ui): refresh control ui locales
- [#197318](https://github.com/openclaw/openclaw/pull/197318) fix(test): wait for the stable connecting state during warm reload
- [#197314](https://github.com/openclaw/openclaw/pull/197314) fix(gateway): device-worker turns fail with "plugin generation was superseded" for plugin-provider models
- [#197265](https://github.com/openclaw/openclaw/pull/197265) fix(plugin-sdk): surface feature operation errors to callers
- [#197290](https://github.com/openclaw/openclaw/pull/197290) fix(control-ui): audio and video replies show a download card when playback metadata is missing
- [#197325](https://github.com/openclaw/openclaw/pull/197325) docs(update): name the header-probe string-length failure and its stable fix
- [#196684](https://github.com/openclaw/openclaw/pull/196684) improve(ui): polish the remote access setup dialog
- [#196688](https://github.com/openclaw/openclaw/pull/196688) improve(ui): tidy the account menu
- [#197274](https://github.com/openclaw/openclaw/pull/197274) fix: claude-cli turns never list audience-gated memory plugin tools
- [#196686](https://github.com/openclaw/openclaw/pull/196686) improve(ui): polish the Remote access people page
- [#196427](https://github.com/openclaw/openclaw/pull/196427) feat: review template packages inline before publishing
- [#197303](https://github.com/openclaw/openclaw/pull/197303) fix(ci): prepare Git Bash workers before test admission
- [#195448](https://github.com/openclaw/openclaw/pull/195448) fix(templates): templates add and dev put a new agent's workspace under ~/.openclaw even with --profile or OPENCLAW_STATE_DIR
- [#197302](https://github.com/openclaw/openclaw/pull/197302) fix(ci): stabilize session row fingerprint checks across garbage collection
- [#197292](https://github.com/openclaw/openclaw/pull/197292) fix(gateway): gateway start, stop and uninstall print only "The CLI command failed." when service management is refused
- [#197295](https://github.com/openclaw/openclaw/pull/197295) fix(sessions): claude-cli fallback fails with "different transcript store" on a session's first turn
- [#197248](https://github.com/openclaw/openclaw/pull/197248) fix(workspace): keep sandbox-written files out of Gateway readiness
- [#196690](https://github.com/openclaw/openclaw/pull/196690) fix(normalization): keep code spans with embedded backticks whole in plain-text previews
- [#196487](https://github.com/openclaw/openclaw/pull/196487) fix(gateway): preserve selected context for recorder-owned worker turns
- [#197256](https://github.com/openclaw/openclaw/pull/197256) fix(ui): keep Firefox reply footers above the composer
- [#197287](https://github.com/openclaw/openclaw/pull/197287) fix(worktrees): keep pack maintenance running during cleanup
- [#197277](https://github.com/openclaw/openclaw/pull/197277) improve(doctor): stop copying each database twice to classify its engine
- [#197226](https://github.com/openclaw/openclaw/pull/197226) fix(agents): OpenAI session forks reuse the parent's prompt cache
- [#196862](https://github.com/openclaw/openclaw/pull/196862) fix: remove stale internal export paths
- [#197271](https://github.com/openclaw/openclaw/pull/197271) fix(ci): remove unused implementation exports
- [#197188](https://github.com/openclaw/openclaw/pull/197188) fix(memory): cancel interrupted deep embedding probes
- [#197232](https://github.com/openclaw/openclaw/pull/197232) fix(test): isolate synthetic Linux PTY executable discovery
- [#197165](https://github.com/openclaw/openclaw/pull/197165) improve: separate conversation behavior and tool bindings in generated instructions
- [#197172](https://github.com/openclaw/openclaw/pull/197172) fix(ios): drop the unexposed unattended deep-link key
- [#197261](https://github.com/openclaw/openclaw/pull/197261) fix(test): keep startup refusal checks scoped to the refused agent
- [#197276](https://github.com/openclaw/openclaw/pull/197276) refactor(agents): share one Gateway inventory rule between admission and catalog reads
- [#187742](https://github.com/openclaw/openclaw/pull/187742) fix(macos): preserve MLX model config cache reuse
- [#197257](https://github.com/openclaw/openclaw/pull/197257) fix(approvals): approvals get prints literal "\n" inside the Effective Policy table
- [#197264](https://github.com/openclaw/openclaw/pull/197264) fix(ci): recognize host tools and native build artifacts
- [#197259](https://github.com/openclaw/openclaw/pull/197259) fix: prevent tiny-pack storms during agent history reads
- [#197269](https://github.com/openclaw/openclaw/pull/197269) ci(update): fail main when the installed package exceeds the updater entry budget
- [#189525](https://github.com/openclaw/openclaw/pull/189525) improve(codex): clarify installed skill discovery and reading
- [#197260](https://github.com/openclaw/openclaw/pull/197260) fix(ci): remove Knowledge unused-export failures
- [#197225](https://github.com/openclaw/openclaw/pull/197225) fix(test): honor Mythos 5.1 prefix-bound replay contract
- [#197243](https://github.com/openclaw/openclaw/pull/197243) fix(sandbox): keep guests running during GitHub source fetches
- [#195997](https://github.com/openclaw/openclaw/pull/195997) fix(android): disclose target device identity in pairing confirmation dialogs
- [#197255](https://github.com/openclaw/openclaw/pull/197255) fix(sessions): sessions import prints literal "\n" in multi-line Gateway failures
- [#197258](https://github.com/openclaw/openclaw/pull/197258) fix(state): avoid host SQL during worker-owned database close
- [#197251](https://github.com/openclaw/openclaw/pull/197251) fix: stop downloading completed workspace content batches again
- [#197246](https://github.com/openclaw/openclaw/pull/197246) fix(usage): chat and session costs show $0 for new Claude models and Claude CLI turns
- [#197222](https://github.com/openclaw/openclaw/pull/197222) fix(test): expect compact JSON from declared tool plugins
- [#197249](https://github.com/openclaw/openclaw/pull/197249) fix(plugins): model fallback reuses the failed model's prompt enrichment; Codex reports rotated threads as fresh

#### 🐛 New Issues
- [#197083](https://github.com/openclaw/openclaw/issues/197083) [Bug]: Post-install Doctor WAL publication verification leaves 11.3 update partially finalized `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬4
- [#197374](https://github.com/openclaw/openclaw/issues/197374) Compaction silently degrades on long sessions: 120s idle timeout caps the configured compaction budget, quality guard gives no reason `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬4
- [#197338](https://github.com/openclaw/openclaw/issues/197338) [Bug]: Linked Microsoft Teams members lose role authority during sessions_send delegation `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬4
- [#197361](https://github.com/openclaw/openclaw/issues/197361) Update failure: package-update (2026.11.2) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬3
- [#197416](https://github.com/openclaw/openclaw/issues/197416) Background skill review loops on context overflow when the reviewed session's inherited context exceeds the hydration cap `P2` `impact:other` 💬3
- [#197305](https://github.com/openclaw/openclaw/issues/197305) [Bug]: Subagent completion expires after 30 min (retries=0) when its session has an old child with suspended delivery; announce gate still counts suspended descendants `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#197127](https://github.com/openclaw/openclaw/issues/197127) Update failure: git-update (2026.10.10) `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬3
- [#197241](https://github.com/openclaw/openclaw/issues/197241) Device-worker turns always fail: "prepared model runtime plugin generation was superseded" (2026.10.10) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬3
- [#197418](https://github.com/openclaw/openclaw/issues/197418) Feature: Agent ability to reveal/open files in macOS Finder from background service `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#197403](https://github.com/openclaw/openclaw/issues/197403) [Bug]: doctor removes anthropic/* (claude-cli runtime) model entries as "provider unavailable" when models.mode is "replace" `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#197297](https://github.com/openclaw/openclaw/issues/197297) [Feature]: Per-user secret vault with per-session opt-in `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬2
- [#197399](https://github.com/openclaw/openclaw/issues/197399) Update failure: activating (2026.11.3) `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#197381](https://github.com/openclaw/openclaw/issues/197381) [Bug]: Requested strict tool mode is silently turned off for all tools when one schema has `oneOf` `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#197377](https://github.com/openclaw/openclaw/issues/197377) [Bug]: gateway install fails on first install when the unit's own systemd drop-ins already exist ("Managed service artifacts changed during publication") `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `maturity:stable` 💬2
- [#197312](https://github.com/openclaw/openclaw/issues/197312) [Feature]: Workboard: expected-exit-tool contract + auto-retry for worker runs that end without completing `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬2
- [#197337](https://github.com/openclaw/openclaw/issues/197337) Gateway shutdown hangs with an isolated recurring cron job (2026.11.2 / 2026.11.3) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#197092](https://github.com/openclaw/openclaw/issues/197092) Telegram drops recent bot notifications from unquoted follow-up context `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#197253](https://github.com/openclaw/openclaw/issues/197253) [Feature]: Per-model system prompt append (e.g. enable tool-call preambles for DeepSeek with thinking) `enhancement` `P2` `impact:ux-friction` 💬2
- [#197231](https://github.com/openclaw/openclaw/issues/197231) [Bug]: Trajectory context.compiled loses the tool list: the diagnostic sanitizer's 64-object budget turns tools into "[Truncated]" `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#197186](https://github.com/openclaw/openclaw/issues/197186) telegram: pass sessionKey to message_sending in deliverReplies `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#197181](https://github.com/openclaw/openclaw/issues/197181) [Bug]: 2026.11.5-beta.1 `message` tool always fails with "turn capability is no longer active" in scheduled heartbeat runs bound to the main session `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬2
- [#197180](https://github.com/openclaw/openclaw/issues/197180) Feature: group workboard board links under the Workboard nav item instead of flat top-level Pages entries `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#197090](https://github.com/openclaw/openclaw/issues/197090) [Bug]: sherpa-onnx-tts silently rewrites the default tts.wav when --output has no value, and swallows the next option as that value `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#197498](https://github.com/openclaw/openclaw/issues/197498) [Bug]: Published Feishu 2026.11.3 still skips captioned media blocks; merged fix #191585 is absent `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#197493](https://github.com/openclaw/openclaw/issues/197493) Feature Request: Add explicit toggle to show message timestamps in Control UI chat `P3` `impact:ux-friction` 💬1
- [#197132](https://github.com/openclaw/openclaw/issues/197132) Update failure: package-install (2026.10.10-beta.2) `P2` `impact:ux-friction` 💬1
- [#197465](https://github.com/openclaw/openclaw/issues/197465) Make a guided first run part of the default experience `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#197473](https://github.com/openclaw/openclaw/issues/197473) [Bug]: Escaped backtick makes the TTS stream cleaner retain audio-only text and directive markers `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#197463](https://github.com/openclaw/openclaw/issues/197463) [Feature]: Optional inline command trail in the Control UI `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#197454](https://github.com/openclaw/openclaw/issues/197454) [Bug]: a delayed question answer can resolve a recreated question with the same ID `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#197452](https://github.com/openclaw/openclaw/issues/197452) [Feature]: Explicit, bounded Deep Research selection in chat `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#197450](https://github.com/openclaw/openclaw/issues/197450) Add optional claim, execution-observation, and verification records to Workboard results `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#197442](https://github.com/openclaw/openclaw/issues/197442) Allow `sessions_spawn` to target a named paired device `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#197443](https://github.com/openclaw/openclaw/issues/197443) Support restart-surviving durable exec and owning-session completion wakeups on macOS `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#197444](https://github.com/openclaw/openclaw/issues/197444) [Bug]: Update rehearsal strips OPENCLAW_GATEWAY_TOKEN but keeps gateway.remote, so an env SecretRef in gateway.remote.token fails candidate-gateway-startup ("required secrets are unavailable") `P1` `impact:auth-provider` 💬1
- [#197437](https://github.com/openclaw/openclaw/issues/197437) [Bug]:Windows: managed GitHub identity blocks every exec ("credential is unavailable or insecure") `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#197430](https://github.com/openclaw/openclaw/issues/197430) [Bug]: 2026.11.3 usage-cost refresh still exhausts worker heap with bounded SQLite reader already present `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#197426](https://github.com/openclaw/openclaw/issues/197426) Share the plugin cohort recovery owner-test fixture `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#197423](https://github.com/openclaw/openclaw/issues/197423) [Feature]: Select ordinary-turn host-tool mediation by a CLI backend's declared `hostOwnedTools`, not by the id `claude-cli` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#197422](https://github.com/openclaw/openclaw/issues/197422) [Bug]: Talk keeps delegating after the Control UI Gateway socket drops; Gateway tools then fail with 'operator run authority requires its admitted Gateway' `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#197417](https://github.com/openclaw/openclaw/issues/197417) New Session: make project sources discoverable with explicit remote search `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#197304](https://github.com/openclaw/openclaw/issues/197304) HTML session export loses visible ancestry for parentless legacy rows `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#197414](https://github.com/openclaw/openclaw/issues/197414) [Bug]: 2026.11.2 rejects gateway.controlUi.experimental.templates and skips reload `P2` `impact:ux-friction` 💬1
- [#197056](https://github.com/openclaw/openclaw/issues/197056) [Bug]: Tlon drops inbound native list content `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#197406](https://github.com/openclaw/openclaw/issues/197406) [Bug]: iOS Talk: changing talk.realtime.mode to realtime mid-session leaves the native silence monitor running — realtime utterances are also sent as chat turns (two voices) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#197404](https://github.com/openclaw/openclaw/issues/197404) [Bug]: Heartbeat monitors lose their hashed stagger after downtime — startup catch-up fires all agents' heartbeats together `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#197400](https://github.com/openclaw/openclaw/issues/197400) [Feature]: Public atomic channel-pairing reconciliation API for plugins `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `impact:security` 💬1
- [#197401](https://github.com/openclaw/openclaw/issues/197401) [Feature]: Fail-closed reply payload transform before managed TTS `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#197390](https://github.com/openclaw/openclaw/issues/197390) Update failure: package-update (2026.11.1) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#197375](https://github.com/openclaw/openclaw/issues/197375) Plugin hooks get no `memoryAudience` when the memory slot owner is a legacy provider (memory-core) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#197368](https://github.com/openclaw/openclaw/issues/197368) agents.update moves an agent to another billing route without the billingRouteWarnings that config.patch returns `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#197367](https://github.com/openclaw/openclaw/issues/197367) [Bug]: Mattermost model picker and button callbacks derive a new thread session from their own post when reply threading is on `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#197380](https://github.com/openclaw/openclaw/issues/197380) before_tool_call does not fire for sessions_spawn (delegation tools bypass wrapToolWithBeforeToolCallHook) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `impact:security` 💬1
- [#197376](https://github.com/openclaw/openclaw/issues/197376) [Feature]: Opt-in wildcard tool allowlist for native Codex children, including plugin and MCP tools `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#197324](https://github.com/openclaw/openclaw/issues/197324) [Bug]: automatic idle/daily session rollover aborts a run already executing on that session (clearReplyRunForResetBySessionId on the unchanged sessionId) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#197354](https://github.com/openclaw/openclaw/issues/197354) [Bug]: Assistant reasoning is persisted in the transcript but dropped on replay after a model/provider switch, so the new model re-derives settled work `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#197356](https://github.com/openclaw/openclaw/issues/197356) [Bug]: openclaw mcp login prints an unusable authorization URL when the client ID is a JWT `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#197353](https://github.com/openclaw/openclaw/issues/197353) [Feature]: Android chat image viewer: Save/Share for assistant-sent PNG/JPG `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#197352](https://github.com/openclaw/openclaw/issues/197352) [Bug]: Codex trajectories still truncate native tool output at 10,000 characters after full-output history restoration `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#197351](https://github.com/openclaw/openclaw/issues/197351) [tools] browser: agent call via extension relay has no effective timeout — turn and lane held indefinitely `bug` `bug:crash` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#197348](https://github.com/openclaw/openclaw/issues/197348) [inter-session] announce delivery emits empty envelopes as separate events + bidirectional echo-leak (final replies queue into source session) `P2` `impact:message-loss` 💬1
- [#197341](https://github.com/openclaw/openclaw/issues/197341) [Feature]: `openclaw sessions suggestions` to read the pending composer suggestion queue from the CLI `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#197343](https://github.com/openclaw/openclaw/issues/197343) [Feature]: Per-agent scope for bundled session-memory and pre-compaction memory flush `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#197333](https://github.com/openclaw/openclaw/issues/197333) [Bug]: GPT-5/6 answer only the newest message when two messages are steered into one turn `P1` `impact:message-loss` `issue-rating: 🦪 silver shellfish` 💬1
- [#197331](https://github.com/openclaw/openclaw/issues/197331) 2026.10.10: each sessions.delete can leave a ~150 MB SQLite reclamation worker alive for 30 min; bulk deletes exhaust host memory `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#197289](https://github.com/openclaw/openclaw/issues/197289) Control UI shows a download card for assistant audio/video published without playback metadata `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#197320](https://github.com/openclaw/openclaw/issues/197320) [Bug]: `openclaw update` from 2026.11.3 to main fails: PostgreSQL Workboard install refuses an engine switch, SQLite Workboard install fails the second Doctor ("expected schema 41, found 0") `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#197313](https://github.com/openclaw/openclaw/issues/197313) [Feature]: chat.history on PostgreSQL opens up to seven read-only transactions for one history page `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `clawsweeper:needs-live-repro` 💬1
- [#197306](https://github.com/openclaw/openclaw/issues/197306) [Feature]: openclaw sessions reactions <key> (expose session.reactions.list) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#197273](https://github.com/openclaw/openclaw/issues/197273) [Bug]: claude-cli turns never list audience-gated memory plugin tools `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#197309](https://github.com/openclaw/openclaw/issues/197309) Update failure: package-update (2026.11.1) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#197296](https://github.com/openclaw/openclaw/issues/197296) Control UI: stale service worker hides a newly enabled session catalog (Codex group missing until private window) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#197294](https://github.com/openclaw/openclaw/issues/197294) [Bug]: BytePlus Seed Speech sends speed and emotion outside v3 audio parameters `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#197293](https://github.com/openclaw/openclaw/issues/197293) Feature: warn and guide migration of paired nodes when Gateway bind changes to loopback `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#197266](https://github.com/openclaw/openclaw/issues/197266) [Feature]: Support isolated utility completions through the Muse Code subscription runtime `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#197280](https://github.com/openclaw/openclaw/issues/197280) [Feature]: Support MiniMax /v1/images/generations so image_generate can use MiniMax-H3-Image `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#197270](https://github.com/openclaw/openclaw/issues/197270) Control UI: cannot save a new model because "name" is hidden `P2` `impact:ux-friction` 💬1
- [#197216](https://github.com/openclaw/openclaw/issues/197216) memory-core: Gateway keeps a descriptor on every unlinked memory-reindex shadow DB — 36.6 GB of deleted-but-open files in 53 h (2026.11.1) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#197247](https://github.com/openclaw/openclaw/issues/197247) [Feature]: Group agents into named, collapsible teams in the Control UI agent switcher, Agents home and team mode `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#197205](https://github.com/openclaw/openclaw/issues/197205) [Bug]: voicecall tail and policy watch do not stop cleanly when the reader of their output closes `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#197228](https://github.com/openclaw/openclaw/issues/197228) Windows login item: gateway stop is undone by the task supervisor within seconds `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#197221](https://github.com/openclaw/openclaw/issues/197221) [Bug]: Android: tapping a system-assistant (Settings → OpenClaw) notification opens an empty ordinary Chat instead of its conversation `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#197214](https://github.com/openclaw/openclaw/issues/197214) Feature: session book with auto-generated chapters (periodic topic segmentation, reopen-on-continuation) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#197211](https://github.com/openclaw/openclaw/issues/197211) Feature: skill lifecycle — semantic discovery, dedup-on-create, usage ratings, scheduled curation audit `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#197199](https://github.com/openclaw/openclaw/issues/197199) [Feature]: Hide redundant aliases in model picker and selected-model button `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#197195](https://github.com/openclaw/openclaw/issues/197195) Report on 78 days of automated upgrades on the dev branch using Codex `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#197192](https://github.com/openclaw/openclaw/issues/197192) Feature: dashboard tabs, configurable widget-style front page, optional background widgets `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#197134](https://github.com/openclaw/openclaw/issues/197134) Telegram streaming: ambiguous failure of the initial preview send silently drops the entire final reply `P1` `clawsweeper:source-repro` `impact:message-loss` `issue-rating: 🦞 diamond lobster` 💬1
- [#197184](https://github.com/openclaw/openclaw/issues/197184) [Feature]: Browser-only authorization path for browser.proxy without broad operator.admin `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#197182](https://github.com/openclaw/openclaw/issues/197182) Update failure: unexpected-error (2026.9.4) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#197170](https://github.com/openclaw/openclaw/issues/197170) Update failure: update (2026.11.3) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#197168](https://github.com/openclaw/openclaw/issues/197168) [Bug]: claude-cli sessions auto-pinned to an expired token profile keep failing with "login reached its time limit" while the CLI login is valid `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#197169](https://github.com/openclaw/openclaw/issues/197169) [Bug]: Claude OAuth tokens stored as api-key profiles make every claude-cli turn fail with "Invalid API key" `P1` `clawsweeper:needs-live-repro` `impact:auth-provider` `issue-rating: 🐚 platinum hermit` 💬1
- [#197166](https://github.com/openclaw/openclaw/issues/197166) [Bug]: claude-cli turns run under Claude Code's default system prompt and identity because OpenClaw's prompt is sent as appendSystemPrompt `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `clawsweeper:needs-live-repro` 💬1
- [#197161](https://github.com/openclaw/openclaw/issues/197161) iMessage: messages synced when Messages.app starts are suppressed as stale backlog if the Gateway didn't restart `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#197154](https://github.com/openclaw/openclaw/issues/197154) [Bug]: User prompt disappears from UI (marked display:false) and breaks conversation tree due to memory flush branch orphan `bug` `bug:behavior` `P2` `impact:session-state` 💬1
- [#197155](https://github.com/openclaw/openclaw/issues/197155) [Bug]: google-vertex: timed-out assistant turn rewrites history, so retries hit a cold 200K+ prompt and loop into 120s idle timeouts and failover `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#197152](https://github.com/openclaw/openclaw/issues/197152) iOS app never publishes push.apns.register (relay push unusable, failure is silent) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#197150](https://github.com/openclaw/openclaw/issues/197150) [Feature]: Define forgotten-session exclusion handling for external memory providers `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `impact:security` 💬1
- [#197141](https://github.com/openclaw/openclaw/issues/197141) [Docs Bug]: Claude CLI re-login troubleshooting still asks for a Gateway restart `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#197144](https://github.com/openclaw/openclaw/issues/197144) [Docs Bug]: daemon restart reference omits --preserve-definition `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#197143](https://github.com/openclaw/openclaw/issues/197143) [Docs Bug]: Gateway query reference describes offline diagnostics as WebSocket RPC `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#197139](https://github.com/openclaw/openclaw/issues/197139) [Docs Bug]: ACP setup guide renders a duplicate section anchor `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#197066](https://github.com/openclaw/openclaw/issues/197066) [Bug]: Documented /think extra high alias is not parsed `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#197129](https://github.com/openclaw/openclaw/issues/197129) [Bug]: iOS Talk saves the assistant's reply above the user's spoken turn when transcription finishes late `bug` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬1
- [#197109](https://github.com/openclaw/openclaw/issues/197109) Update failure: gateway-recovery-verification (2026.11.5-beta.1) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#197073](https://github.com/openclaw/openclaw/issues/197073) [Bug]: Long Nostr replies expose emphasis markers across message splits `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#197107](https://github.com/openclaw/openclaw/issues/197107) Update failure: package-update (2026.11.1) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#197089](https://github.com/openclaw/openclaw/issues/197089) [Feature]: Wake policy for subagent batches (quorum, settle window, deadline) instead of per-completion or all-settled `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#197086](https://github.com/openclaw/openclaw/issues/197086) [Feature]: `hooks list/info/check` should show whether a hook is selected by `hooks.internal.entries` (ready ≠ loaded) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#197087](https://github.com/openclaw/openclaw/issues/197087) [Feature]: `hooks enable/disable` with a running Gateway (or name `config set` in the refusal), docs promise hot reload `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#197079](https://github.com/openclaw/openclaw/issues/197079) [Feature]: Configure the SQLite header-probe deadline for managed updates `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#197060](https://github.com/openclaw/openclaw/issues/197060) [Bug]: WhatsApp labels Ogg Vorbis audio as Opus and skips conversion `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#197042](https://github.com/openclaw/openclaw/issues/197042) Google Chat replies repeat a URL or email address as "label (url)" when the link label is the address itself `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#197149](https://github.com/openclaw/openclaw/issues/197149) [Bug]: Model fallback fails with transcript idempotency key conflict `clawsweeper:intake:bug` `clawsweeper:intake:needs-repro`

#### 🔒 Closed Issues
- [#166634](https://github.com/openclaw/openclaw/issues/166634) [Bug]: Late reclamation commit checkpoint failure leaves agent unavailable after crash recovery
- [#145309](https://github.com/openclaw/openclaw/issues/145309) [Bug]: claude-cli backend looks for transcripts under $HOME/.claude and ignores CLAUDE_CONFIG_DIR — missing-transcript resets and cli_live_session_changed failover
- [#179481](https://github.com/openclaw/openclaw/issues/179481) [Bug]: doctor --fix refuses `transcript-directives` while the gateway is running and blocks every later migration step — no online repair path
- [#182712](https://github.com/openclaw/openclaw/issues/182712) [Feature]: Limit-aware model fallback — skip candidates on an exhausted provider account and prefer a different provider
- [#159638](https://github.com/openclaw/openclaw/issues/159638) Gateway boots ~7 short-lived SQLite store/read workers per minute (512 MB each), keeping V8 threads at ~80% CPU
- [#173095](https://github.com/openclaw/openclaw/issues/173095) Control UI: session sidebar stays empty on cold start that restores the last chat route (sessions.list never requested)
- [#181958](https://github.com/openclaw/openclaw/issues/181958) Update failure: package-doctor (2026.10.3)
- [#57278](https://github.com/openclaw/openclaw/issues/57278) telegram: verify bot-photo attribution in reply context before changing hydration
- [#179676](https://github.com/openclaw/openclaw/issues/179676) [Bug]: Control UI pasted text (>1,000 chars) only reaches the model on the turn it is sent; later turns lose it
- [#169079](https://github.com/openclaw/openclaw/issues/169079) Compaction checkpoints should let the agent distinguish compaction from restart without external process checks
- [#177742](https://github.com/openclaw/openclaw/issues/177742) [Bug]: Codex app-server 0.163.0 warns against the managed runtime pin 0.160.0
- [#180667](https://github.com/openclaw/openclaw/issues/180667) Update failure: candidate-gateway-startup (2026.10.4)
- [#166612](https://github.com/openclaw/openclaw/issues/166612) Telegram: quoted voice audio sends a second transcript echo under the follow-up message ID
- [#177519](https://github.com/openclaw/openclaw/issues/177519) [Feature]: Audit trail for automation (cron) job changes — record actor/origin on enable, disable, edit, add, remove
- [#182699](https://github.com/openclaw/openclaw/issues/182699) [Feature]: Opt-in zstd compression for openclaw backup archives
- [#182604](https://github.com/openclaw/openclaw/issues/182604) [Regression]: Discord ack reaction fires after session record instead of on receipt (~3s delay since 2026.10.x)
- [#182567](https://github.com/openclaw/openclaw/issues/182567) Explicit package update checks should discover a fresh release
- [#181165](https://github.com/openclaw/openclaw/issues/181165) [Bug]: tools.github.configure swallows the real failure cause and always reports "GitHub identity setup failed"
- [#182228](https://github.com/openclaw/openclaw/issues/182228) Update failure: candidate-doctor-lint (2026.10.5-beta.3)
- [#181694](https://github.com/openclaw/openclaw/issues/181694) Update failure: invalid-config (2026.10.6)
- [#181539](https://github.com/openclaw/openclaw/issues/181539) Update failure: runtime-artifact-publication (2026.10.5)
- [#181107](https://github.com/openclaw/openclaw/issues/181107) 2026.10.6 (macOS): skills skipped with "resolved path escapes skill root" when the configured workspace path's case differs from the on-disk case
- [#180550](https://github.com/openclaw/openclaw/issues/180550) [Feature]: Umbrella: video format and codec compatibility, starting with iPhone/iPad
- [#180070](https://github.com/openclaw/openclaw/issues/180070) Update failure: finalize:doctor (2026.9.5)
- [#179761](https://github.com/openclaw/openclaw/issues/179761) [Feature]: Keep a text trace of images that age out of the 3-turn history window (or make the window configurable)
- [#179474](https://github.com/openclaw/openclaw/issues/179474) Update failure: candidate-doctor (2026.10.4)
- [#179045](https://github.com/openclaw/openclaw/issues/179045) docs: clarify retained native completion recovery ownership after process loss
- [#178976](https://github.com/openclaw/openclaw/issues/178976) Update failure: reconcile:abandoned (2026.10.5)
- [#178637](https://github.com/openclaw/openclaw/issues/178637) Update failure: finalize:doctor (2026.9.5)
- [#178611](https://github.com/openclaw/openclaw/issues/178611) Codex harness cancels a 20-second task after roughly 12–14 seconds
- [#178409](https://github.com/openclaw/openclaw/issues/178409) [Bug]: plugin-sdk/browser-config lost resolveBrowserConfig/resolveBrowserControlAuth in 2026.10.5 without notice; no supported way for a plugin to reach the managed browser
- [#178384](https://github.com/openclaw/openclaw/issues/178384) Env-var budget exceeded on the beta tag (455 vs 454) — check:max-lines-ratchet exits 1 and the max-lines CI job fails; the line-cap ratchet still passes vacuously when origin/main is missing
- [#178244](https://github.com/openclaw/openclaw/issues/178244) Update failure: invalid-config (2026.10.5)
- [#158353](https://github.com/openclaw/openclaw/issues/158353) [Bug]: /status "Compactions" never counts Claude CLI auto-compactions on claude-cli live sessions
- [#178094](https://github.com/openclaw/openclaw/issues/178094) Update failure: candidate-gateway-startup (2026.9.9)
- [#177634](https://github.com/openclaw/openclaw/issues/177634) [Feature]: Let plugins send referenced image evidence to hosted TypeSafe Jev
- [#177627](https://github.com/openclaw/openclaw/issues/177627) `gateway restart --safe` on a busy macOS Gateway ends as a forced restart with a 5 s drain (launchd ExitTimeOut=20); active runs are cancelled and the requester is not logged
- [#177295](https://github.com/openclaw/openclaw/issues/177295) [Feature]: Microsoft Teams native extended Markdown opt-in
- [#144137](https://github.com/openclaw/openclaw/issues/144137) [Bug]: Orphan claude-cli process spawned without --resume after CLI timeout, producing disconnected/contextless replies (2026.7.1-2, Telegram, claude-cli backend)
- [#183173](https://github.com/openclaw/openclaw/issues/183173) [Feature]: Resize oversized JPEG camera photos before Control UI upload (Android Chrome)
- [#183141](https://github.com/openclaw/openclaw/issues/183141) [Feature]: Use existing edit masks with the bundled OpenAI image provider
- [#183098](https://github.com/openclaw/openclaw/issues/183098) Feature: openclaw channels start|stop for non-destructive per-account recovery
- [#182966](https://github.com/openclaw/openclaw/issues/182966) [Feature]: Apply existing pronunciation dictionaries in ElevenLabs TTS
- [#182920](https://github.com/openclaw/openclaw/issues/182920) [Bug] `decision_evaluate` rejects a manifest-conformant call pre-dispatch (`unavailable / unsupported-input`) on 2026.10.7 — OpenRouter Jev route
- [#182869](https://github.com/openclaw/openclaw/issues/182869) [Feature]: Wrap-up reserve before timeoutSeconds, and expose the run deadline to plugins
- [#182833](https://github.com/openclaw/openclaw/issues/182833) computer tool: Gateway desktop provider can never register (commandAllowlist suppresses computerUse)
- [#182758](https://github.com/openclaw/openclaw/issues/182758) Feature: openclaw presence query (people/devices via presence.query)
- [#182718](https://github.com/openclaw/openclaw/issues/182718) Allow operators to enable <final>-tag enforcement for native-reasoning providers
- [#182691](https://github.com/openclaw/openclaw/issues/182691) before_dispatch hook context lacks the originating gateway connId
- [#182659](https://github.com/openclaw/openclaw/issues/182659) [Performance regression][2026.10.5] agent exec stalls before inference: slow database admission and ACP session reads (Ubuntu 24.04 WSL2)
- [#182654](https://github.com/openclaw/openclaw/issues/182654) Anthropic-compatible stop_reason "sensitive" becomes unknown error instead of provider refusal
- [#182642](https://github.com/openclaw/openclaw/issues/182642) Feature: `openclaw sessions processes list|stop` (expose sessions.processes.*)
- [#182640](https://github.com/openclaw/openclaw/issues/182640) Feature: `openclaw backup status` (ledger + schedules + storage locations)
- [#182614](https://github.com/openclaw/openclaw/issues/182614) Bug: openclaw pairing approve via docker compose exec times out (ETIMEDOUT) despite healthy gateway, then fails silently
- [#182568](https://github.com/openclaw/openclaw/issues/182568) Expose truthful companion app update status and capabilities in the Dashboard
- [#182559](https://github.com/openclaw/openclaw/issues/182559) [Feature]: Keyboard shortcut to jump to the next session waiting for me
- [#182558](https://github.com/openclaw/openclaw/issues/182558) Updates settings: coordinated Gateway and companion app experience
- [#182541](https://github.com/openclaw/openclaw/issues/182541) fix(diagnostics): tool error spans don't say whether a tool failed, was cancelled or timed out
- [#182414](https://github.com/openclaw/openclaw/issues/182414) [Feature]: compare chat images with a local reference by exact pixels
- [#182410](https://github.com/openclaw/openclaw/issues/182410) [Feature]: draw a freehand sketch from the Control UI composer
- [#182409](https://github.com/openclaw/openclaw/issues/182409) [Feature]: redact selected image pixels before sending in Control UI
- [#182395](https://github.com/openclaw/openclaw/issues/182395) Add DemonRoute as a custom provider option
- [#182389](https://github.com/openclaw/openclaw/issues/182389) Native Codex workers need isolated between-turn Fast routing
- [#182382](https://github.com/openclaw/openclaw/issues/182382) [Feature]: Expose documented K3.1 effort levels on the direct Moonshot route
- [#183112](https://github.com/openclaw/openclaw/issues/183112) [Bug]: Background exec completion is relayed again after the agent already read it with process log
- [#143714](https://github.com/openclaw/openclaw/issues/143714) Heartbeat HEARTBEAT_OK triggers empty-response retry and bogus “resend request” message
- [#197416](https://github.com/openclaw/openclaw/issues/197416) Background skill review loops on context overflow when the reviewed session's inherited context exceeds the hydration cap
- [#197305](https://github.com/openclaw/openclaw/issues/197305) [Bug]: Subagent completion expires after 30 min (retries=0) when its session has an old child with suspended delivery; announce gate still counts suspended descendants
- [#181981](https://github.com/openclaw/openclaw/issues/181981) Strict user-pinned session (/model -s) disables imageModel fallback, not just reachability fallback
- [#181954](https://github.com/openclaw/openclaw/issues/181954) [Feature]: decision-model rerank provider for memory_search (and optionally wiki_search)
- [#181744](https://github.com/openclaw/openclaw/issues/181744) [Feature] no completion signal for deferred followup turns — channel plugins cannot tell that the framework is still busy
- [#181738](https://github.com/openclaw/openclaw/issues/181738) [Bug]: Active Memory always skips with policy-disabled when Code Mode catalogs memory tools (Codex runtime)
- [#181704](https://github.com/openclaw/openclaw/issues/181704) [Feature]: Per-agent setting to let agents speak alongside tool calls (for voice clients), also available to plugins
- [#181670](https://github.com/openclaw/openclaw/issues/181670) Investigate absent-store probing in async cross-agent session-ID lookup
- [#181590](https://github.com/openclaw/openclaw/issues/181590) [Feature]: Control UI: let plugins extend the New session page (affordances, draft, starting parameters)
- [#181489](https://github.com/openclaw/openclaw/issues/181489) Let an MCP server be required: retry its start within a run attempt instead of running without its tools
- [#181368](https://github.com/openclaw/openclaw/issues/181368) Feature: openclaw gateway lanes
- [#181354](https://github.com/openclaw/openclaw/issues/181354) Feature: openclaw gateway suspend status (expose existing gateway.suspend.status)
- [#181283](https://github.com/openclaw/openclaw/issues/181283) Feature: `openclaw hooks test <name>` (load/smoke without enabling)
- [#181281](https://github.com/openclaw/openclaw/issues/181281) Feature: `openclaw config explain <path>` (authored vs default, include/SecretRef provenance)
- [#181280](https://github.com/openclaw/openclaw/issues/181280) Feature: `openclaw sessions storage status|run` (expose existing cold-transcript Gateway RPCs)
- [#181262](https://github.com/openclaw/openclaw/issues/181262) [Bug]: xAI OAuth refresh is not retried on transport/proxy errors; one transient failure leaves the profile unusable until manual re-login
- [#181222](https://github.com/openclaw/openclaw/issues/181222) [Bug]: Benign equipment-loan text triggers Alibaba output inspection during streamed DeepSeek replies
- [#181086](https://github.com/openclaw/openclaw/issues/181086) Google media understanding ignores providerOptions: no way to set Gemini thinking level for audio transcription
- [#180799](https://github.com/openclaw/openclaw/issues/180799) [Feature]: Per-provider transport-level retry for model calls (router backends drop connections)
- [#180756](https://github.com/openclaw/openclaw/issues/180756) [Feature]: Find text in retained Web terminal output
- [#180709](https://github.com/openclaw/openclaw/issues/180709) [Bug]: Document-heavy sessions remain in context overflow because compaction only sees captions
- [#180680](https://github.com/openclaw/openclaw/issues/180680) [Feature]: Add DeepSeek Fetch as an optional web_fetch fallback provider
- [#180556](https://github.com/openclaw/openclaw/issues/180556) [Bug]: Telegram block streaming drops a MEDIA: line that has text after it
- [#180518](https://github.com/openclaw/openclaw/issues/180518) [Feature]: Add offline Claw packages from local build archives
- [#180472](https://github.com/openclaw/openclaw/issues/180472) [Feature]: Save the current rendered browser page as an offline MHTML archive
- [#180240](https://github.com/openclaw/openclaw/issues/180240) [Bug]: Follow-up sent with sessions_send into a channel-bound session composes a reply targeted at the channel but never delivers it (nested turn has no message tool either)
- [#180194](https://github.com/openclaw/openclaw/issues/180194) [Bug]: Gateway-hosted CLI health returns AUTH_TOKEN_MISMATCH after successful service reinstall (2026.10.4, macOS)
- [#180177](https://github.com/openclaw/openclaw/issues/180177) [Feature]: Expose native Talk consult run targets for exact client cancellation
- [#180140](https://github.com/openclaw/openclaw/issues/180140) [Feature]: let agent-to-agent channel plugins offer ask_user, with questions going to the owner
- [#180126](https://github.com/openclaw/openclaw/issues/180126) [Feature]: Shared model defaults in configure for explicit multi-agent fleets
- [#180113](https://github.com/openclaw/openclaw/issues/180113) [Feature]: doctor --rebuild — a preserve-and-rebuild repair path for installs beyond targeted repairs
- [#180060](https://github.com/openclaw/openclaw/issues/180060) channels add: positional channel is silently ignored when --channel names a different channel, writing its credentials to the wrong channel
- [#180018](https://github.com/openclaw/openclaw/issues/180018) [Feature]: Let remote clients select all TTS auto modes
- [#197127](https://github.com/openclaw/openclaw/issues/197127) Update failure: git-update (2026.10.10)
- [#196798](https://github.com/openclaw/openclaw/issues/196798) Git-source update from 2026.11.1 fails at activation: schema edits retire every derived catalog hash, cross-generation asset read crashes the updater
- [#196811](https://github.com/openclaw/openclaw/issues/196811) Managed update fails validation with SQLite-classification error and Invalid string length
- [#197241](https://github.com/openclaw/openclaw/issues/197241) Device-worker turns always fail: "prepared model runtime plugin generation was superseded" (2026.10.10)
- [#179892](https://github.com/openclaw/openclaw/issues/179892) Codex harness reports an admitted user turn as a failed write when prompt annotation is refused
- [#179890](https://github.com/openclaw/openclaw/issues/179890) Agents corrupt dollar amounts in messages when exec commands contain $<digit> in double quotes
- [#179867](https://github.com/openclaw/openclaw/issues/179867) [Bug]: Retained Telegram progress card keeps the yielding turn's checklist after sessions_yield
- [#179862](https://github.com/openclaw/openclaw/issues/179862) [Bug]: Splitting a long Telegram or Slack reply re-parses Markdown for candidate chunks whose fit cannot change
- [#179740](https://github.com/openclaw/openclaw/issues/179740) [Feature]: Preview a configured TTS persona without changing the active persona
- [#179739](https://github.com/openclaw/openclaw/issues/179739) [Feature]: Mirror session reactions onto delivered assistant replies in chat channels
- [#179310](https://github.com/openclaw/openclaw/issues/179310) Provider prompt serialization silently falls back to the Gateway event loop when the payload contains a toJSON member
- [#179304](https://github.com/openclaw/openclaw/issues/179304) memory-core: dreaming deep.limit=0 early-returns before light/REM sweep (kills whole sweep), and deep.recovery config is dead
- [#179294](https://github.com/openclaw/openclaw/issues/179294) [Feature]: Pre-upgrade personalized impact report (installation manifest × release changes)
- [#179291](https://github.com/openclaw/openclaw/issues/179291) [Feature]: Session-reset observability: expose native session drift reasons, counts, and re-seeding overhead
- [#179236](https://github.com/openclaw/openclaw/issues/179236) [Bug]: Talk realtime consults rewrite session history, so every voice consult re-writes the whole prompt cache
- [#178995](https://github.com/openclaw/openclaw/issues/178995) Quiet heartbeat history filtering stops at adjacent trusted runtime-context carrier; stale child completion state compounds retained context
- [#178971](https://github.com/openclaw/openclaw/issues/178971) Proposal: local Gateway checkpoints with PostgreSQL agent stores
- [#178934](https://github.com/openclaw/openclaw/issues/178934) 10.5 production latency: accept ticket, context cap, and streaming passthrough (WeCom/WeChat)
- [#178882](https://github.com/openclaw/openclaw/issues/178882) [Feature]: Group Android chat reply notifications under one expandable summary
- [#178834](https://github.com/openclaw/openclaw/issues/178834) [Feature]: Option to deliver commentary text on the live `chat` event stream
- [#178748](https://github.com/openclaw/openclaw/issues/178748) [Feature]: Support non-destructive agent handoff between Gateways
- [#178619](https://github.com/openclaw/openclaw/issues/178619) [Bug]: Japanese CP932 CSV attachments rejected by host-read validation
- [#178608](https://github.com/openclaw/openclaw/issues/178608) [Bug]: Commentary media display rewrite invalidates the active context-engine generation (2026.10.5)
- [#178576](https://github.com/openclaw/openclaw/issues/178576) [Feature]: Global repair target for cron failures (repair requests for jobs without an owner conversation)
- [#178571](https://github.com/openclaw/openclaw/issues/178571) [Feature]: Option to exclude automation (cron) runs from Web Push "Agent finished" notifications
- [#178562](https://github.com/openclaw/openclaw/issues/178562) [Feature]: Cloud-worker machine inventory, cost ledger and per-profile spend caps
- [#178559](https://github.com/openclaw/openclaw/issues/178559) [Feature]: Presence and device-state triggers for agent runs
- [#178540](https://github.com/openclaw/openclaw/issues/178540) [Feature]: Share Extension destination picker — send to pinned chats or main chat
- [#178506](https://github.com/openclaw/openclaw/issues/178506) memory_get: oversized first line drops nextFrom, hiding all following lines
- [#178484](https://github.com/openclaw/openclaw/issues/178484) [Feature]: Opt-in cross-turn outage recovery with conservative failback and schedule-preserving task recovery
- [#178468](https://github.com/openclaw/openclaw/issues/178468) [Feature]: Smoother sign-in handoff for Website dashboards
- [#178467](https://github.com/openclaw/openclaw/issues/178467) [Feature]: Recognizable gallery previews for Website dashboards
- [#178383](https://github.com/openclaw/openclaw/issues/178383) The logging test shard fails 8 tests on v2026.10.10-beta.2 (console capture and subsystem logger enablement)
- [#178382](https://github.com/openclaw/openclaw/issues/178382) test:changed and the CLI startup budget check require origin/main to be present in the checkout
- [#178381](https://github.com/openclaw/openclaw/issues/178381) Fast unit shard: 3 failures on v2026.10.10-beta.2 in session owner / state retention tests
- [#178375](https://github.com/openclaw/openclaw/issues/178375) check:max-lines-ratchet only counts grandfathered suppressions; it never measures a file against the cap
- [#178374](https://github.com/openclaw/openclaw/issues/178374) No attempt or size budget on the model-facing surface: one compaction can bill 18-24 summarizer calls, and tool descriptions, images and utility completions are sized far above their output contract
- [#178355](https://github.com/openclaw/openclaw/issues/178355) [Feature]: Shared desktop ownership across native MCP computer-use and Browser
- [#178349](https://github.com/openclaw/openclaw/issues/178349) [Feature]: Pin persistent, on-demand Portal apps to dashboards
- [#178120](https://github.com/openclaw/openclaw/issues/178120) Telegram answers to steered inputs can quote the wrong source message
- [#162785](https://github.com/openclaw/openclaw/issues/162785) [Bug]: Windows Gateway service never starts - CLI respawn layer breaks the wscript->cmd->node task-supervisor lineage (Windows task supervisor lost its original CMD launcher)
- [#196027](https://github.com/openclaw/openclaw/issues/196027) [Bug]: Telegram consecutive tool-run compaction splits on invisible events (repeated Exec ×2 instead of Exec ×6)
- [#181559](https://github.com/openclaw/openclaw/issues/181559) claude-cli compaction event: include Claude Code's pre/post token counts
- [#178091](https://github.com/openclaw/openclaw/issues/178091) Plugins: add a ready-side lifecycle hook (gateway_ready) so work deferred by a safe restart can be retried once
- [#178016](https://github.com/openclaw/openclaw/issues/178016) Feature: `openclaw config diff` (authored disk vs effective resolved, include/env)
- [#178015](https://github.com/openclaw/openclaw/issues/178015) Feature: `openclaw system heartbeat status` (cadence, next fire, activeHours window)
- [#177960](https://github.com/openclaw/openclaw/issues/177960) MCP OAuth: make the dynamic client registration name (client_name, client_uri, logo_uri) configurable
- [#177896](https://github.com/openclaw/openclaw/issues/177896) Update failure: invalid-config (2026.10.5)
- [#177884](https://github.com/openclaw/openclaw/issues/177884) [Bug]: Matrix: two-member room DM promotion follows a stale cached name; user-target sends map rooms regardless of name
- [#177859](https://github.com/openclaw/openclaw/issues/177859) [Feature]: Opt in to private Proxmox Crabbox workers
- [#177852](https://github.com/openclaw/openclaw/issues/177852) [Bug]: 2026.10.5 regression hides Discord progress for accepted unmentioned requests
- [#177766](https://github.com/openclaw/openclaw/issues/177766) Private subagent completion turn (completionTarget: "parent") renders its internal reply in Control UI; NO_REPLY there fails as "CLI backend returned an empty response" on claude-cli
- [#177755](https://github.com/openclaw/openclaw/issues/177755) [Feature]: Per-agent opt-out from shared/ambient API keys for inference
- [#177732](https://github.com/openclaw/openclaw/issues/177732) memory search: let a note's frontmatter status (e.g. superseded) lower the rank of all its chunks
- [#177604](https://github.com/openclaw/openclaw/issues/177604) OpenClaw Windows Gateway: gog with secret egress proxy enabled fails TLS — `x509: certificate signed by unknown authority`
- [#177552](https://github.com/openclaw/openclaw/issues/177552) [Bug]: saved session settings revert after chat /new, /reset, or an automatic session reset
- [#177498](https://github.com/openclaw/openclaw/issues/177498) [UX] 2026.10.5 Dashboard sidebar session filter default view causes historical conversations to appear missing
- [#177495](https://github.com/openclaw/openclaw/issues/177495) [Bug]: `openclaw directory` rewrites openclaw.json and enables the bundled `codex` plugin
- [#177447](https://github.com/openclaw/openclaw/issues/177447) [Bug]: Responses (ChatGPT route): tool turns fail with "changed output item identity" and "completed with unresolved tool calls"
- [#177441](https://github.com/openclaw/openclaw/issues/177441) forced close with in-flight writes logs "completed cleanly" before the checkpoint completes; WAL frames land after the banner
- [#177431](https://github.com/openclaw/openclaw/issues/177431) Update failure: candidate-gateway-startup (2026.10.3)
- [#177405](https://github.com/openclaw/openclaw/issues/177405) Update failure: package-doctor (2026.10.4)
- [#177299](https://github.com/openclaw/openclaw/issues/177299) [Feature]: Define structured CUA result provenance for failures and observation targets
- [#177298](https://github.com/openclaw/openclaw/issues/177298) [Bug]: Ordinary Codex runs discard dynamic-tool cleanup failures
- [#177269](https://github.com/openclaw/openclaw/issues/177269) Failover: in-stream "Provider returned error" from Cloudflare Workers AI (openai-completions provider) does not trigger configured fallbacks
- [#177222](https://github.com/openclaw/openclaw/issues/177222) [Feature]: Preserve live caller attribution when a plugin tool dispatches an agent run
- [#177220](https://github.com/openclaw/openclaw/issues/177220) Update failure: candidate-gateway-startup (2026.10.4)
- [#177196](https://github.com/openclaw/openclaw/issues/177196) [Bug]: tool_choice from OpenAI-compatible endpoints never reaches Anthropic
- [#177180](https://github.com/openclaw/openclaw/issues/177180) [Bug]: Scheduled Codex turn times out after a final defer response, with delivery unknown
- [#177176](https://github.com/openclaw/openclaw/issues/177176) [Feature]: Opt-in verified-and-delivered handoff contract on top of Workboard
- [#177172](https://github.com/openclaw/openclaw/issues/177172) [Feature]: Mobile app UX inspired by Meta Muse / OpenAI Dots — Goals, Feed, live browser preview (self-hosted, BYOK)
- [#177164](https://github.com/openclaw/openclaw/issues/177164) [Bug] Provider transport model-fetch (GET /models) missing Authorization header for OpenRouter
- [#176991](https://github.com/openclaw/openclaw/issues/176991) Update failure: update-executor-settlement (2026.10.5)
- [#176947](https://github.com/openclaw/openclaw/issues/176947) docs: add Abstract provider guide
- [#176932](https://github.com/openclaw/openclaw/issues/176932) Copilot provider: support selecting the default (shorter) context tier, not just long_context
- [#176671](https://github.com/openclaw/openclaw/issues/176671) [Feature]: Expose the resolved completionMode on the subagent_spawned hook payload
- [#176553](https://github.com/openclaw/openclaw/issues/176553) [Feature]: Supported SQLite snapshot-helper lifecycle supervision for bounded macOS memory diagnostics
- [#176443](https://github.com/openclaw/openclaw/issues/176443) Update failure: finalize-doctor (2026.9.7)
- [#176372](https://github.com/openclaw/openclaw/issues/176372) Desktop view on phone browser stays on "connecting to desktop" for macOS Screen Sharing (ARD); password prompt never completes
- [#196968](https://github.com/openclaw/openclaw/issues/196968) [Bug]: After #196570, an inbound photo can be described instead of attached when the first catalog read is slow ("Plugin invocation scope is closed")
- [#197403](https://github.com/openclaw/openclaw/issues/197403) [Bug]: doctor removes anthropic/* (claude-cli runtime) model entries as "provider unavailable" when models.mode is "replace"
- [#192347](https://github.com/openclaw/openclaw/issues/192347) [Bug]: tts.auto "inbound" answers a text-only reply to a voice note with a voice note
- [#197253](https://github.com/openclaw/openclaw/issues/197253) [Feature]: Per-model system prompt append (e.g. enable tool-call preambles for DeepSeek with thinking)
- [#186358](https://github.com/openclaw/openclaw/issues/186358) [Bug]: Control UI shows "No provider credential" and rejects Claude CLI model selection with native-only Claude login
- [#193877](https://github.com/openclaw/openclaw/issues/193877) before_tool_call: ctx.requester empty for CLI-backend (claude-cli) tool calls
- [#195257](https://github.com/openclaw/openclaw/issues/195257) claude-cli: managed turns disable Claude Code hooks since 2026.10.7, and authorized before_prompt_build phase never runs
- [#197090](https://github.com/openclaw/openclaw/issues/197090) [Bug]: sherpa-onnx-tts silently rewrites the default tts.wav when --output has no value, and swallows the next option as that value
- [#197493](https://github.com/openclaw/openclaw/issues/197493) Feature Request: Add explicit toggle to show message timestamps in Control UI chat
- [#195759](https://github.com/openclaw/openclaw/issues/195759) Android: NodeRuntime.continueSessionCatalogEntryFromGateway leaves continuingEntryId busy state set when caller is cancelled
- [#197444](https://github.com/openclaw/openclaw/issues/197444) [Bug]: Update rehearsal strips OPENCLAW_GATEWAY_TOKEN but keeps gateway.remote, so an env SecretRef in gateway.remote.token fails candidate-gateway-startup ("required secrets are unavailable")
- [#197304](https://github.com/openclaw/openclaw/issues/197304) HTML session export loses visible ancestry for parentless legacy rows
- [#197414](https://github.com/openclaw/openclaw/issues/197414) [Bug]: 2026.11.2 rejects gateway.controlUi.experimental.templates and skips reload
- [#197056](https://github.com/openclaw/openclaw/issues/197056) [Bug]: Tlon drops inbound native list content
- [#197324](https://github.com/openclaw/openclaw/issues/197324) [Bug]: automatic idle/daily session rollover aborts a run already executing on that session (clearReplyRunForResetBySessionId on the unchanged sessionId)
- [#197348](https://github.com/openclaw/openclaw/issues/197348) [inter-session] announce delivery emits empty envelopes as separate events + bidirectional echo-leak (final replies queue into source session)
- [#195769](https://github.com/openclaw/openclaw/issues/195769) Android: Slash-command name suggestions remain open after argument whitespace and overwrite typed arguments
- [#197289](https://github.com/openclaw/openclaw/issues/197289) Control UI shows a download card for assistant audio/video published without playback metadata
- [#197273](https://github.com/openclaw/openclaw/issues/197273) [Bug]: claude-cli turns never list audience-gated memory plugin tools
- [#197270](https://github.com/openclaw/openclaw/issues/197270) Control UI: cannot save a new model because "name" is hidden
- [#195975](https://github.com/openclaw/openclaw/issues/195975) fix(android): show target device name and ID in Reject and Remove pairing dialogs
- [#197216](https://github.com/openclaw/openclaw/issues/197216) memory-core: Gateway keeps a descriptor on every unlinked memory-reindex shadow DB — 36.6 GB of deleted-but-open files in 53 h (2026.11.1)
- [#196613](https://github.com/openclaw/openclaw/issues/196613) Update failure: invalid-config (2026.11.2)
- [#197205](https://github.com/openclaw/openclaw/issues/197205) [Bug]: voicecall tail and policy watch do not stop cleanly when the reader of their output closes
- [#194878](https://github.com/openclaw/openclaw/issues/194878) before_prompt_build cannot observe a claude-cli session reset in the same turn
- [#197199](https://github.com/openclaw/openclaw/issues/197199) [Feature]: Hide redundant aliases in model picker and selected-model button
- [#194383](https://github.com/openclaw/openclaw/issues/194383) [Docs Bug]: Plugin reload recovery is described too narrowly
- [#197134](https://github.com/openclaw/openclaw/issues/197134) Telegram streaming: ambiguous failure of the initial preview send silently drops the entire final reply
- [#196809](https://github.com/openclaw/openclaw/issues/196809) [Bug]: claude-cli run that fails after a message-tool delivery logs no cause (the only `cli terminal failure` warning is skipped)
- [#196879](https://github.com/openclaw/openclaw/issues/196879) Gateway logs full /v1/chat/completions reply text to stdout (opts.json falsy on openai-http path)
- [#197154](https://github.com/openclaw/openclaw/issues/197154) [Bug]: User prompt disappears from UI (marked display:false) and breaks conversation tree due to memory flush branch orphan
- [#197152](https://github.com/openclaw/openclaw/issues/197152) iOS app never publishes push.apns.register (relay push unusable, failure is silent)
- [#197066](https://github.com/openclaw/openclaw/issues/197066) [Bug]: Documented /think extra high alias is not parsed
- [#197073](https://github.com/openclaw/openclaw/issues/197073) [Bug]: Long Nostr replies expose emphasis markers across message splits
- [#197060](https://github.com/openclaw/openclaw/issues/197060) [Bug]: WhatsApp labels Ogg Vorbis audio as Opus and skips conversion
- [#197042](https://github.com/openclaw/openclaw/issues/197042) Google Chat replies repeat a URL or email address as "label (url)" when the link label is the address itself
- [#197149](https://github.com/openclaw/openclaw/issues/197149) [Bug]: Model fallback fails with transcript idempotency key conflict

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 262,769 · **Open issues:** 54,149 · **Last push:** <1h ago

On November 12, 2026, there were no new releases for Hermes Agent. However, a significant merged pull request addressed the issue with media handling on macOS by fixing screenshot paths to open correctly within vision, video, and image generation functionalities. Among the new issues reported, the most notable was #153683, which highlighted a bug where the `hermes pause` command longer than two minutes deletes one-time cron jobs, raising concerns about task management during extended periods of inactivity. Additional noteworthy issues include the Telegram adapter's inadequate support for the clarify tool's multi-select feature and a persistent group chat issue causing automation failures.

#### ✅ Merged PRs
- [#154046](https://github.com/NousResearch/hermes-agent/pull/154046) fix(media): Mac screenshot paths open in vision, video and image generation (#76334, salvage #62126)

#### 🐛 New Issues
- [#153683](https://github.com/NousResearch/hermes-agent/issues/153683) [Bug]: `hermes pause` longer than 2 minutes deletes one-time cron jobs due during it, or run by hand just before it, without running them `type/bug` `comp/cron` `P2` 💬2
- [#154195](https://github.com/NousResearch/hermes-agent/issues/154195) [Bug]: Telegram adapter does not support clarify tool's multi_select (resolves on first button tap) `type/bug` `comp/plugins` `platform/telegram` `P2` 💬1
- [#153816](https://github.com/NousResearch/hermes-agent/issues/153816) Group Chat (Bot Mode room) wedges permanently after a normal round: `turn.settled references no matching user discussion` / `prepare_failed` `type/bug` `comp/gateway` `P2` 💬1
- [#154223](https://github.com/NousResearch/hermes-agent/issues/154223) [Feature]: let a prompt.btw caller allow tools for a side question `type/security` `comp/gateway` `P3` `comp/tui-gateway`
- [#154222](https://github.com/NousResearch/hermes-agent/issues/154222) test-issue-delete-me `P3`
- [#154220](https://github.com/NousResearch/hermes-agent/issues/154220) fix(dashboard): _spawn_gateway_restart omits --detach, losing macOS Local Network access (Errno 65 EHOSTUNREACH) on unmanaged gateways `type/bug` `comp/cli` `P3` `os/macos`
- [#154216](https://github.com/NousResearch/hermes-agent/issues/154216) tui_gateway: Desktop sessions connected to a remote backend fall back to source='tui' (and user_id=None) on reconnect/resume `type/bug` `comp/gateway` `tool/file` `P2`
- [#154217](https://github.com/NousResearch/hermes-agent/issues/154217) [Bug]: Secondary-profile plugin WebSocket refusal breaks Hermes HQ Watch Browser `type/bug` `comp/cli` `tool/browser` `P2`
- [#154214](https://github.com/NousResearch/hermes-agent/issues/154214) [Bug]: Wake-word listener hard-crashes gateway (heap corruption) on Linux USB audio interface — malloc/SEGV in [wake-word] thread ~20s after arming `type/bug` `comp/tools` `tool/tts` `P2`
- [#154213](https://github.com/NousResearch/hermes-agent/issues/154213) Desktop: file preview loses the extension when the path contains # or ? (HTML/images/PDFs open as text) `type/bug` `P2` `comp/desktop` `desktop/files`
- [#154196](https://github.com/NousResearch/hermes-agent/issues/154196) [Feature]: /new in long-lived gateway chats: "Conversation started" should reflect the reset boundary (opt-in flag) `type/feature` `comp/agent` `P3` `area/sessions`
- [#154192](https://github.com/NousResearch/hermes-agent/issues/154192) Sessions moved from a Windows install to macOS/Linux fail every Desktop control with "storage unavailable" (restore_policy rejects C:\ cwd) `type/bug` `comp/gateway` `P2` `area/sessions`
- [#153697](https://github.com/NousResearch/hermes-agent/issues/153697) [Bug]: • Found 17 undefined name / runtime errors across plugins (e.g., Feishu adapter) `type/bug` `comp/plugins` `platform/feishu` `P2`
- [#154187](https://github.com/NousResearch/hermes-agent/issues/154187) fix(cli): config startup warnings write ANSI SGR into a non-TTY stderr `type/bug` `comp/cli` `P3`
- [#154180](https://github.com/NousResearch/hermes-agent/issues/154180) [Bug]: Telegram group replay moves an addressed turn into passive observations `type/bug` `comp/gateway` `P2` `area/sessions`

#### 🔒 Closed Issues
- [#139347](https://github.com/NousResearch/hermes-agent/issues/139347) [Bug]: bounded hosted-room transcript drops source users still referenced by settlements
- [#76334](https://github.com/NousResearch/hermes-agent/issues/76334) vision_analyze fails on macOS screenshots when U+202F is rewritten to ASCII space
- [#153816](https://github.com/NousResearch/hermes-agent/issues/153816) Group Chat (Bot Mode room) wedges permanently after a normal round: `turn.settled references no matching user discussion` / `prepare_failed`
- [#154222](https://github.com/NousResearch/hermes-agent/issues/154222) test-issue-delete-me

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 96,779 · **Open issues:** 10,254 · **Last push:** <1h ago

Today's developments in vLLM included several key merged pull requests but no new releases. Notable updates featured improvements for the GLM-5.3 model, such as the DeepGEMM BF16 MegaMoE for unquantized checkpoints and tuning of the Flash block-FP8 MoE for H20. Additionally, significant bug fixes were implemented, including resolving issues with the extensible KV cache and addressing inefficiencies in the ROCm performance with `wvSplitK` skinny GEMM operations. A hot new issue emerged regarding the encoder cache not being invalidated consistently during weight reloads, leading to potential crashes when stale embeddings are served. The continuous enhancements and active issue reporting reflect ongoing diligence in maintaining and advancing the framework.

#### ✅ Merged PRs
- [#66978](https://github.com/vllm-project/vllm/pull/66978) [XPU][UT] Increase the prompt length in the late chunking test to allow prefix cache hits on XPU
- [#54899](https://github.com/vllm-project/vllm/pull/54899) [ROCm][MLA][DCP] Pad the AITER MLA decode head count to a native tile
- [#66036](https://github.com/vllm-project/vllm/pull/66036) [ROCm][DSv4/4.1] Enable Tensor scale FP8 KV Cache for Sparse MLA
- [#66523](https://github.com/vllm-project/vllm/pull/66523) [Bugfix] Extensible KV cache: release warmup's blocks before CUDA graph capture
- [#67040](https://github.com/vllm-project/vllm/pull/67040) [Perf][GLM-5.3] DeepGEMM BF16 MegaMoE for unquantized checkpoints
- [#58986](https://github.com/vllm-project/vllm/pull/58986) [Perf] Tune GLM-5.3-Flash block-FP8 MoE for H20
- [#57796](https://github.com/vllm-project/vllm/pull/57796) [Frontend][Multimodal] Accept features together with content_parts in /generate
- [#63392](https://github.com/vllm-project/vllm/pull/63392) [ROCm][Perf] AITER FA: trim the sliding-window decode table with fewer ops
- [#66495](https://github.com/vllm-project/vllm/pull/66495) [Bugfix][XPU] Remove CUDA-only dependencies from Unlimited-OCR-2 DASH attention
- [#64883](https://github.com/vllm-project/vllm/pull/64883) [ROCm][Perf][DSv4.1] Mono: tuned K2 FFN seam at TP4 / TP8
- [#66197](https://github.com/vllm-project/vllm/pull/66197) [Bugfix] Exclude FlashInfer autotune peak from KV cache sizing
- [#66018](https://github.com/vllm-project/vllm/pull/66018) [Attention][MiniMax-M3] Add FlashInfer MSA backend for SM90 and SM120/SM121
- [#66704](https://github.com/vllm-project/vllm/pull/66704) [Misc] Warn when gpu_memory_utilization withholds memory from the extensible KV cache
- [#62309](https://github.com/vllm-project/vllm/pull/62309) [XPU] support adaptive verification for deepseek-v4
- [#59384](https://github.com/vllm-project/vllm/pull/59384) [Kernel] Fuse native BF16 ReLU2 with NVFP4 quantization
- [#67073](https://github.com/vllm-project/vllm/pull/67073) [CI][ROCm] Move the AMD monokernel steps into a Monokernels test area
- [#66973](https://github.com/vllm-project/vllm/pull/66973) [XPU][CI]Update working_dir from /workspace/vllm to /vllm-workspace/
- [#66274](https://github.com/vllm-project/vllm/pull/66274) [Bugfix] Broadcast scalar block scales in Triton fused MoE
- [#64560](https://github.com/vllm-project/vllm/pull/64560) [ROCm][Perf][MLA] Fuse the decode W_UK absorb, q concat + fp8 quant and head pad via AITER
- [#64061](https://github.com/vllm-project/vllm/pull/64061) [Kernel][Perf] Run DeepGEMM Mega MoE on SM90 with MXFP4 experts
- [#60035](https://github.com/vllm-project/vllm/pull/60035) [Bugfix][Pooling] Make MEAN pooling batch invariant when the flag asks for it
- [#66731](https://github.com/vllm-project/vllm/pull/66731) [Bugfix] Size extensible KV cache reserve on the full token budget
- [#64165](https://github.com/vllm-project/vllm/pull/64165) [Bugfix] Fix FlashInfer plan buffer race causing illegal memory access with PP
- [#54820](https://github.com/vllm-project/vllm/pull/54820) [ROCm] Avoid DSpark placeholder shared vocab allocations
- [#66604](https://github.com/vllm-project/vllm/pull/66604) [Core][Kimi K3.1] Write draft KV at block-stride slots instead of translating slot mappings
- [#64767](https://github.com/vllm-project/vllm/pull/64767) [Quantization] Load ModelOpt NVFP4 W4A16 token embeddings in mixed-precision checkpoints
- [#65765](https://github.com/vllm-project/vllm/pull/65765) [CI/Build][NVIDIA] Move Rubin nightly images to CUDA 13.5
- [#65077](https://github.com/vllm-project/vllm/pull/65077) [Perf][Quantization] Honor FP8 activations for Humming linear on SM100/SM110
- [#63627](https://github.com/vllm-project/vllm/pull/63627) [Perf] Tuned batch-invariant fused MoE configs on Blackwell
- [#63721](https://github.com/vllm-project/vllm/pull/63721) [ROCm][Perf][MoE] Fuse SiLU-and-mul with per-token FP8 quant in TritonExperts and skip remote EP routes
- [#61869](https://github.com/vllm-project/vllm/pull/61869) [Perf][DSv4.1] DSpark draft on the specialized decode
- [#64324](https://github.com/vllm-project/vllm/pull/64324) [Bugfix] Forward shutdown() in LMCacheConnectorV1 so EngineCore is not force-killed
- [#65479](https://github.com/vllm-project/vllm/pull/65479) [ROCm][MiniMax-M3.1] MXFP8 linear on AITER's tuned FlyDSL GEMM
- [#56451](https://github.com/vllm-project/vllm/pull/56451) [ROCm][Spec Decode] Enable adaptive DSpark verification for MiniMax M3
- [#63636](https://github.com/vllm-project/vllm/pull/63636) [Bugfix][Transformers] Infer mm encoder dynamic_arg_dims from forward signature
- [#66465](https://github.com/vllm-project/vllm/pull/66465) [MRV2][PP] Support different CUDA graph padding across pipeline stages
- [#66419](https://github.com/vllm-project/vllm/pull/66419) [Bugfix][Offload] Apply --cpu-offload-gb to models served by the Transformers modeling backend
- [#63878](https://github.com/vllm-project/vllm/pull/63878) [ROCm][Perf][DSA] Honor skip_kv_gather in the ROCm sparse-indexer prefill loop
- [#64329](https://github.com/vllm-project/vllm/pull/64329) [Bugfix] Apply the layer q_scale only to FP8 queries in FlashInfer
- [#66625](https://github.com/vllm-project/vllm/pull/66625) [Docs][ROCm] Add AMD verified autotrust/JEV-27B-VL recipe
- [#63357](https://github.com/vllm-project/vllm/pull/63357) [Bugfix][Frontend] Honor --response-role and echo in chat derender
- [#67038](https://github.com/vllm-project/vllm/pull/67038) [CI][ROCm] Pin the AMD monokernel steps to explicit test files
- [#66721](https://github.com/vllm-project/vllm/pull/66721) [Docs][ROCm] Add AMD verified ricursiveAI/Ripple-65B-Preview recipe
- [#66292](https://github.com/vllm-project/vllm/pull/66292) [GLM 5.3 Perf] enable fp8 kv cache for glm 5.3 flash draft model, 790MB GPU memory saved each rank
- [#66689](https://github.com/vllm-project/vllm/pull/66689) [Docs][ROCm] Add AMD verified inclusionAI/Ming-3.0-asr-tiny recipe

#### 🐛 New Issues
- [#66974](https://github.com/vllm-project/vllm/issues/66974) [RFC]: Shared stream conformance cases for `vllm bench serve` and `vllm-bench` 💬4
- [#67088](https://github.com/vllm-project/vllm/issues/67088) [Bug]: Encoder cache not invalidated consistently on weight reload: `reload_weights` crashes (`Encoder cache miss`), `finish_weight_update` serves stale embeddings 💬1
- [#67147](https://github.com/vllm-project/vllm/issues/67147) [Bug][MRV2] thinking_token_budget silently overrides allowed_token_ids and bad_words `tool-calling` 💬1
- [#67121](https://github.com/vllm-project/vllm/issues/67121) [CI Failure]: V1 KV Connectors Shard 2/4 - test_lmcache_connector.py::test_engine_shutdown_stops_lmcache_threads `ci-failure` 💬1
- [#67110](https://github.com/vllm-project/vllm/issues/67110) [ROCm][Performance] `wvSplitK` skinny GEMM is 3 to 8x slower than hipBLASLt at 3 and 5 activation rows on gfx90a (MI250X); decode at 5 concurrent requests is 14% slower than with `VLLM_ROCM_USE_SKINNY_GEMM=0` `rocm` 💬1
- [#67007](https://github.com/vllm-project/vllm/issues/67007) [Bug]: Scale-out `/render` endpoints and `/inference/v1/generate` ignore the `X-Vllm-Priority` header `bug` 💬1
- [#67033](https://github.com/vllm-project/vllm/issues/67033) [Bug][CPU]: VLLM_CPU_KVCACHE_SPACE=0 gives a 0-byte KV cache and the env var silently overrides --kv-cache-memory-bytes 💬1
- [#66991](https://github.com/vllm-project/vllm/issues/66991) [Feature]: EC events: publish encoder cache presence and eviction from the EC connector `feature request` 💬1
- [#67029](https://github.com/vllm-project/vllm/issues/67029) [Bug]: Structured output tool-call grammar admits unbounded whitespace — generation runs away until max_tokens `structured-output` `tool-calling` 💬1
- [#66989](https://github.com/vllm-project/vllm/issues/66989) [Bug][Rust Frontend] gpt-oss can't be served through `vllm serve` with any tool/reasoning-parser flags `tool-calling` `gpt-oss` `rust` 💬1
- [#66990](https://github.com/vllm-project/vllm/issues/66990) [Feature]: EC events: publish encoder cache presence and eviction from the EC connector `feature request`
- [#67137](https://github.com/vllm-project/vllm/issues/67137) [Bug]: `vllm launch render` accepts `--lora-modules` but returns 404 for the adapter name on `/render` and `/derender` `bug`
- [#67103](https://github.com/vllm-project/vllm/issues/67103) [RFC]: int8-key / int4-value per-token-head KV cache dtype (between int8 and int4)
- [#67065](https://github.com/vllm-project/vllm/issues/67065) [Bug]: NixlConnector: with n > 1, prefill releases KV blocks after the first decode child's read, later children can decode from reused blocks
- [#67054](https://github.com/vllm-project/vllm/issues/67054) [Bug]: Redundant EPLB experts are never loaded from stacked expert checkpoints (e.g. Qwen3.5-MoE) `bug`
- [#67003](https://github.com/vllm-project/vllm/issues/67003) [Tracking]: Llama and Qwen2 on the Transformers modeling backend `llama`
- [#67028](https://github.com/vllm-project/vllm/issues/67028) [Bug][KV Offload]: canonical_layout refuses to start with FlashInfer on pre-Blackwell GPUs: kernel-split blocks fail the canonical shape check
- [#67024](https://github.com/vllm-project/vllm/issues/67024) [Feature]: Super Prefill: keep generating on the prefill instance while the KV cache transfers (P/D, opt-in)
- [#67019](https://github.com/vllm-project/vllm/issues/67019) [RFC]: Async EPLB: one owner for all state, worker runs self-contained jobs
- [#67017](https://github.com/vllm-project/vllm/issues/67017) [Bug]: The hard judgment of IMAGE_PLACEHOLDER is not elegant enough in Deepseekv4.1-flash on version of 0.33.0 `bug` `deepseek`
- [#67012](https://github.com/vllm-project/vllm/issues/67012) Weight loading: warn (optionally fail) when a single-file checkpoint coexists with an index/shard set in a local directory `feature request`
- [#66949](https://github.com/vllm-project/vllm/issues/66949) [RFC]: DWDP: Distributed Weight Data Parallelism for MoE Prefill `kimi`
- [#66960](https://github.com/vllm-project/vllm/issues/66960) [Feature]: Sparse-MLA (DSA) attention on SM80/Ampere (A100): no selectable backend since the Triton fallback removal — SM80 DSA models hard-fail at engine init
- [#66955](https://github.com/vllm-project/vllm/issues/66955) [Bug]: MooncakeStoreConnector closes the store while transfer threads are still active
- [#66947](https://github.com/vllm-project/vllm/issues/66947) [Feature]: [KV Connector] Configure Mooncake Mamba snapshot write intervals `kimi`

#### 🔒 Closed Issues
- [#49529](https://github.com/vllm-project/vllm/issues/49529) [Perf][Kernel] Adopt PTX 9.4 `ldmatrix.s8.s4` (hardware INT4→INT8 expanding load) in W4A8-INT8 paths
- [#63505](https://github.com/vllm-project/vllm/issues/63505) [Bug]: Qwen3.8-27B (GDN hybrid) with PP=3 on sm_86: illegal memory access (Xid 31) with prefix caching, gibberish output without it; regression since v0.28.0 (v0.31.0, v0.32.0, both model runners)
- [#54775](https://github.com/vllm-project/vllm/issues/54775) [Bug]: KDA/gated-delta-rule chunked-scan buffers are outside memory profiling — runtime OOM at large --max-num-batched-tokens
- [#48503](https://github.com/vllm-project/vllm/issues/48503) [Bug]: Gemma 4 MTP speculative decoding crashes during CUDA graph capture (`_suppress_token_ids` is a Python list, not a device tensor)
- [#63598](https://github.com/vllm-project/vllm/issues/63598) [Bug]: Qwen3.5/3.6 MoE GPTQ checkpoint with BF16 fused MTP experts: `mtp.layers.0.mlp.experts has no parameter 'w2_weight'` (plain `gptq` path, related to #36954)
- [#51465](https://github.com/vllm-project/vllm/issues/51465) [Bug]: Kimi K3 usage.prompt_tokens over-counts trailing channel-open stub (+3)
- [#59988](https://github.com/vllm-project/vllm/issues/59988) [Bug]: With --api-server-count > 1, gauges such as vllm:num_requests_running have no samples until the first request
- [#48465](https://github.com/vllm-project/vllm/issues/48465) [Bug]: deepseek-v4-pro-dspark --max-num-batched-tokens 16384 no use
- [#48489](https://github.com/vllm-project/vllm/issues/48489) [Bug]: Deferred block-free path loses per-group eviction ordering for hybrid KV cache configs
- [#48492](https://github.com/vllm-project/vllm/issues/48492) [Bug]: Missing quant_config in MTP eh_proj causes severe silent precision loss during W8A8 quantization
- [#48401](https://github.com/vllm-project/vllm/issues/48401) [Bug]: Prefix caching silently inert on hybrid Mamba2 models when max_model_len < auto-selected block size
- [#48455](https://github.com/vllm-project/vllm/issues/48455) HybridKVCacheCoordinator: DSpark draft-model KV-cache group's ephemeral content incorrectly vetoes GPU-tier prefix cache reuse
- [#48486](https://github.com/vllm-project/vllm/issues/48486) [Bug]: Hang in CUDA Graph replay with PyTorch symmetric-memory all-reduce when profiling with Nsight Systems
- [#52051](https://github.com/vllm-project/vllm/issues/52051) [Bug]: gpt-oss-120b MXFP4 + --enable-expert-parallel crashes at startup: modular MoE finalize allocates padded (3072) output for an unpadded (2880) expert result
- [#62808](https://github.com/vllm-project/vllm/issues/62808) [Bug]: Built-in LMCacheConnectorV1 does not forward shutdown(), so LMCache never stops and EngineCore is force-killed
- [#65105](https://github.com/vllm-project/vllm/issues/65105) [Bug]: [ROCm] AITER MLA `paged_kv_indices` sized max_num_seqs x max_model_len (4 GiB per builder) pins a cached segment, Kimi-K3 DBO OOMs at startup
- [#65952](https://github.com/vllm-project/vllm/issues/65952) [Bug]: [ROCm] GLM-5.3 TP8 hangs with MTP and CPU KV offload
- [#66195](https://github.com/vllm-project/vllm/issues/66195) [Bug]: Block-FP8 Triton fused_moe_kernel fails to compile with Triton 3.9 since #64760 (`too many indices for tensor of rank 0` at `b_scale[None, :]`)
- [#50961](https://github.com/vllm-project/vllm/issues/50961) [Bug]: GraniteMoeHybrid fails to load with pipeline_parallel_size > 1 (KeyError on another rank's layer)
- [#65934](https://github.com/vllm-project/vllm/issues/65934) [Bug]: [InferHunt] olmo3 tool parser silently drops HTML-like plain text in streaming responses
- [#63356](https://github.com/vllm-project/vllm/issues/63356) [Bug]: Chat derender ignores `--response-role`, `add_generation_prompt: false` and `echo`
- [#65868](https://github.com/vllm-project/vllm/issues/65868) [Bug]: MRV2 extensible KV cache commits all KV before encoder CUDA graph capture, so cudagraph_mm_encoder OOMs at startup
- [#66810](https://github.com/vllm-project/vllm/issues/66810) [Bug]: --cpu-offload-gb is silently ignored with --model-impl transformers
- [#63043](https://github.com/vllm-project/vllm/issues/63043) [Bug]: Native FlashInfer produces garbage output with BF16 Q and non-unit q_scale

### SGLang (`sgl-project/sglang`)

**Stars:** 38,769 · **Open issues:** 6,651 · **Last push:** <1h ago

On November 12, 2026, there were no new releases for SGLang, but several significant pull requests were merged, enhancing performance and fixing issues. Notably, the merged PR #49391 focuses on reusing the FP32 residual gate for large image updates on NVIDIA's SM103 hardware, while #49195 introduces a new disk tier for experts that do not fit in host memory. Additionally, the fixes related to the diffusion module, specifically #48228 and #49268, addressed context-length wording and output handling for image and video requests, respectively. Among new issues, #49903 highlights a critical bug involving a cross-client token leak in multi-tokenizer mode, which may require immediate attention.

#### ✅ Merged PRs
- [#49391](https://github.com/sgl-project/sglang/pull/49391) [Perf] [NVIDIA] diffusion/joy: Reuse FP32 residual gate for large image updates on SM103
- [#49908](https://github.com/sgl-project/sglang/pull/49908) [CI] profiling: Check stage-profiler sync against the kernel's measured time
- [#49664](https://github.com/sgl-project/sglang/pull/49664) [Perf] dflash: Keep a sliding-window MLA draft's KV in a per-request ring
- [#49980](https://github.com/sgl-project/sglang/pull/49980) [Perf] dsa: Native-head FlashMLA and a precomputed schedule for DCP decode
- [#49308](https://github.com/sgl-project/sglang/pull/49308) [Perf] [NVIDIA] diffusion/nomas: Fuse exact head-128 mean-square reduction
- [#50003](https://github.com/sgl-project/sglang/pull/50003) [Chore] hicache: Remove request-end-only Mamba storage backups from the Kimi-K3.1 Day-0 branch
- [#49987](https://github.com/sgl-project/sglang/pull/49987) [Test] mem_cache: Set sparse_prefill_small_heads on the page-sharded DSA test backend
- [#47934](https://github.com/sgl-project/sglang/pull/47934) [Fix] [NPU] dsv4: transfer A3 C4 state using peer-local rows
- [#49434](https://github.com/sgl-project/sglang/pull/49434) [Feat] linker: Describe the direct linker's Mooncake objects in the L3 layout
- [#49943](https://github.com/sgl-project/sglang/pull/49943) [Perf] dcp: Replay prefix hits under breakable prefill graphs
- [#49102](https://github.com/sgl-project/sglang/pull/49102) [Perf] dsa: bf16 MQA logits for the prefill indexer
- [#49195](https://github.com/sgl-project/sglang/pull/49195) [Feat] paged-experts: a disk tier for experts that do not fit host memory
- [#47468](https://github.com/sgl-project/sglang/pull/47468) [Fix] diffusion: Align Pika H3 Flex inference numerics
- [#49268](https://github.com/sgl-project/sglang/pull/49268) [Fix] diffusion: Fix Cosmos 3 ignoring number of output per request for image and video requests
- [#49707](https://github.com/sgl-project/sglang/pull/49707) [Feat] [AMD] diffusion: Run MiniMax-H3-Image on ROCm and add MI300X/MI325X/MI350X/MI355X cookbook recipes
- [#49793](https://github.com/sgl-project/sglang/pull/49793) [CI] [NPU] accuracy: Add 8-NPU suite for MiniMax-M2.5 W8A8 4p GPQA
- [#44017](https://github.com/sgl-project/sglang/pull/44017) [Feat] [XPU] GDN: support speculative decoding
- [#43517](https://github.com/sgl-project/sglang/pull/43517) [Feat] [NPU] sampling: Add sampling-mask support for Ascend
- [#47765](https://github.com/sgl-project/sglang/pull/47765) [Perf] dflash: Fuse the simulated-acceptance overwrite into one kernel
- [#48228](https://github.com/sgl-project/sglang/pull/48228) [Fix] scheduler: use OpenAI's context-length wording when a prompt exceeds the KV pool
- [#48271](https://github.com/sgl-project/sglang/pull/48271) [Perf] qsa: drop the per-layer RoPE cache length check in the indexer
- [#48272](https://github.com/sgl-project/sglang/pull/48272) [Fix] mem_cache: report the CUDA error when host registration fails
- [#48295](https://github.com/sgl-project/sglang/pull/48295) [Feat] modelopt: Quantize block-FP8 MTP draft experts to NVFP4 for MIXED_PRECISION checkpoints
- [#48367](https://github.com/sgl-project/sglang/pull/48367) [Perf] speculative: Fuse the draft proposal's Gumbel-max sample into one pass
- [#48949](https://github.com/sgl-project/sglang/pull/48949) [Perf] reject_sampling: Vocabulary-tiled final-token pass at small batch
- [#48263](https://github.com/sgl-project/sglang/pull/48263) [Perf] [NVIDIA] nvfp4: Fuse SiLU-and-mul with the next linear layer's NVFP4 activation quant
- [#49601](https://github.com/sgl-project/sglang/pull/49601) [Fix] [NVIDIA] moe: Stop DeepGEMM's MLOPart helper once MegaMoE creates its buffer
- [#49929](https://github.com/sgl-project/sglang/pull/49929) [Fix] [AMD] kimi-k3: Skip the CuTe DSL TGV tactic registration on ROCm
- [#49851](https://github.com/sgl-project/sglang/pull/49851) [Feat] kimi_k3: Support ModelOpt MXFP8 KDA for Kimi-K3.1-Pro
- [#49948](https://github.com/sgl-project/sglang/pull/49948) [Test] mem_cache: Use a 16-slot GDN spec ring in the row-state reset test
- [#49967](https://github.com/sgl-project/sglang/pull/49967) [CI] deepgemm: pin apache-tvm-ffi for the release test jobs
- [#49931](https://github.com/sgl-project/sglang/pull/49931) [Fix] [NVIDIA] unquant: restore eager low-M BF16 performance
- [#49922](https://github.com/sgl-project/sglang/pull/49922) [Perf] dsa: Stage the DCP top-k merge push in smem and fall back in registers for up to two ranks
- [#49499](https://github.com/sgl-project/sglang/pull/49499) [Perf] dsv4: Size expand_prefill_causally's token block by batch size
- [#48456](https://github.com/sgl-project/sglang/pull/48456) [Perf] [NVIDIA] dsv41: Run the side-stream mHC mix in BF16x3 for Blackwell decode batches
- [#49478](https://github.com/sgl-project/sglang/pull/49478) [Perf] kimi-k3.1: Per-M decode GEMM tactics and side-stream attention GEMMs
- [#43583](https://github.com/sgl-project/sglang/pull/43583) [Feat] comfyui: Run LTX-2.5 / LTX-2.3 in SGLD integrated mode
- [#46185](https://github.com/sgl-project/sglang/pull/46185) [Feat] gdn: run DFLASH and DSPARK verify on the ReplaySSM spec ring
- [#46186](https://github.com/sgl-project/sglang/pull/46186) [Perf] spec: radix top-k for speculative verify target probabilities
- [#49646](https://github.com/sgl-project/sglang/pull/49646) [Fix] sgl-router: Skip the worker handoff for small request bodies
- [#49715](https://github.com/sgl-project/sglang/pull/49715) [Refactor] mm: import MM_PAD_SHIFT_VALUE instead of re-declaring it
- [#47921](https://github.com/sgl-project/sglang/pull/47921) [Feat] [Apple] mps: Serve Unlimited-OCR v2 BF16 on the Torch MPS runtime
- [#49564](https://github.com/sgl-project/sglang/pull/49564) [CI] diffusion: Stabilize test execution and resource usage
- [#48410](https://github.com/sgl-project/sglang/pull/48410) [CI] arm64: Publish Arm CPU Docker images
- [#49476](https://github.com/sgl-project/sglang/pull/49476) [Fix] dsv4/topk_v2: Move the cluster kernels' top-k buffer to dynamic shared memory
- [#49497](https://github.com/sgl-project/sglang/pull/49497) [Perf] flashinfer-autotune: Tune MoE with varied warm-up tokens
- [#49614](https://github.com/sgl-project/sglang/pull/49614) [CI] [AMD] nightly-benchmark: Run InferenceX's AgentX GLM-5.2 MXFP4 MTP curve on MI35x
- [#47469](https://github.com/sgl-project/sglang/pull/47469) [Perf] [NVIDIA] attention: Add opt-in LiteTopK prefill indexer top-k for DSA (FP8) and DeepSeek-V4.1 (FP4) on SM100
- [#49475](https://github.com/sgl-project/sglang/pull/49475) [Fix] openai: Reject assistant tool calls without a function name (HTTP 500 -> 400)
- [#49868](https://github.com/sgl-project/sglang/pull/49868) [Fix] test: Seed the retracted queue through move() in test_prealloc_token_usage
- [#49825](https://github.com/sgl-project/sglang/pull/49825) [Fix] simulator: Keep the replaced HiCache storage workers alive
- [#49877](https://github.com/sgl-project/sglang/pull/49877) [Feat] diffusion: [sglang-miles] Put a training rollout's generated output in the output store

#### 🐛 New Issues
- [#49903](https://github.com/sgl-project/sglang/issues/49903) [Bug] Cross-Client Token Leak in Multi-Tokenizer Mode via Duplicate rid State Merging 💬4
- [#49796](https://github.com/sgl-project/sglang/issues/49796) [Bug] Qwen-VL image preprocessing OOMs on GPU: 2.87x peak from torch.cat(processed_images) plus a cache that never returns memory 💬1
- [#49901](https://github.com/sgl-project/sglang/issues/49901) [Bug] Cross-Tenant MCP Session Reuse via Incomplete Connection Pool Keys 💬1
- [#49881](https://github.com/sgl-project/sglang/issues/49881) [Bug][GLM-5.3-Flash][EAGLE] NaN logits latched for all later requests after a decode step whose batch is padded to the next CUDA-graph size (9 running -> bs-10 graph) 💬1
- [#49986](https://github.com/sgl-project/sglang/issues/49986) [CI] test_page_sharded_dsa_attention fails on main: stub backend lacks sparse_prefill_small_heads
- [#49968](https://github.com/sgl-project/sglang/issues/49968) [Roadmap] Q4 2026 MultiHardware Roadmap
- [#49985](https://github.com/sgl-project/sglang/issues/49985) [Feature] Steering vector support: applying activation vectors, not just reading them
- [#49947](https://github.com/sgl-project/sglang/issues/49947) [CI] test_unified_row_state_reset fails on main: GDN speculative ring length 8 < 16
- [#49953](https://github.com/sgl-project/sglang/issues/49953) [Feature] Support jina-ocr-v1 with FastMTP speculative decoding
- [#49944](https://github.com/sgl-project/sglang/issues/49944) [Tracking] Unified Memory Roadmap
- [#49916](https://github.com/sgl-project/sglang/issues/49916) [Feature] Extend SGLang Simulator for Dynamo-compatible PD and low-memory hardware simulation
- [#49900](https://github.com/sgl-project/sglang/issues/49900) [Bug][Performance][DeepSeek-V4.1] Decode step with one running request is ~12 ms slower than with two: _w8a8_block_fp8_matmul is ~1.7x slower per call in the bs-1 CUDA graph
- [#49897](https://github.com/sgl-project/sglang/issues/49897) [Docs] Clarify streaming tool argument guarantees when a Chat Completions response ends with length
- [#49871](https://github.com/sgl-project/sglang/issues/49871) [Bug] Decode HiCache reports host and storage cache hits as device hits
- [#49874](https://github.com/sgl-project/sglang/issues/49874) [Feature] Accept `reasoning_content` and `join` in response templates
- [#49865](https://github.com/sgl-project/sglang/issues/49865) [Bug] sgl-kernel: FA3 kernels are compiled and linked twice (hdimdiff sm90 and softcapall sm80 files)
- [#49820](https://github.com/sgl-project/sglang/issues/49820) [CI] test_dsa_eager_metadata_no_host_sync fails on main: stub backend lacks _dcp_topk_length_buffer
- [#49801](https://github.com/sgl-project/sglang/issues/49801) [Bug] dsv4: Eager SWA bounded replay masks valid TP-to-EP tail rows
- [#49799](https://github.com/sgl-project/sglang/issues/49799) [Feature] [Intel] weight-cache: Support the weight cache daemon on Intel XPU
- [#49789](https://github.com/sgl-project/sglang/issues/49789) [Bug] SM12x: block-fp8-as-MXFP8 gate (k%32) is looser than b12x dispatch (K%128); K%128!=0 layers regress silently
- [#49779](https://github.com/sgl-project/sglang/issues/49779) [Bug][DeepSeek-V4.1][SM120] candidate_topk_blocks: 0 does not disable the candidate scheme: layers 24-39 silently lose all top-k candidates

#### 🔒 Closed Issues
- [#34815](https://github.com/sgl-project/sglang/issues/34815) PP8 disaggregated prefill has a load-independent ~30 s TTFT floor on Kimi-K3
- [#49369](https://github.com/sgl-project/sglang/issues/49369) [Bug] GLM-4.7-Flash compressed-tensors W4A16: MLA post-load step reads kv_b_proj.weight, which a packed layer does not have
- [#39087](https://github.com/sgl-project/sglang/issues/39087) [Bug] Quantized DFlash2 draft silently yields ~0% acceptance — no error, no warning (the quiet counterpart to #36599)
- [#38980](https://github.com/sgl-project/sglang/issues/38980) [Bug] sgl_kernel flash_attn: is_fa3_supported() accepts sm_89 but no sm_89 cubin ships, and `ver` is ignored
- [#39192](https://github.com/sgl-project/sglang/issues/39192) [RFC] Contention-aware batching for dynamic EPLB expert migration
- [#43409](https://github.com/sgl-project/sglang/issues/43409) [Bug] [diffusion] /v1/images/edits accepts a mask upload but silently ignores it
- [#39235](https://github.com/sgl-project/sglang/issues/39235) [Bug] DeepSeek-V4 SM120 decode pads q to 64 heads for an SM90 constraint; removing the pad changes greedy output despite the kernel being bit-identical
- [#39226](https://github.com/sgl-project/sglang/issues/39226) [Bug] --moe-runner-backend deep_gemm accepted for DSV4.1 MXFP4 experts, then fails in CUDA graph capture (layout.hpp:108, sm_121)
- [#39193](https://github.com/sgl-project/sglang/issues/39193) [Bug] DeepSeek-V4.1 fp8 wo_a absorb GEMM is silently ~25% wrong when DEEPGEMM_SCALE_UE8M0 is false (SM121)
- [#49986](https://github.com/sgl-project/sglang/issues/49986) [CI] test_page_sharded_dsa_attention fails on main: stub backend lacks sparse_prefill_small_heads
- [#49947](https://github.com/sgl-project/sglang/issues/49947) [CI] test_unified_row_state_reset fails on main: GDN speculative ring length 8 < 16
- [#49820](https://github.com/sgl-project/sglang/issues/49820) [CI] test_dsa_eager_metadata_no_host_sync fails on main: stub backend lacks _dcp_topk_length_buffer
- [#48260](https://github.com/sgl-project/sglang/issues/48260) [Bug] DSA models crash on first prefill with --cpu-offload-gb: breakable prefill CUDA graph replays the DSA indexer eager break with CPU-offloaded weights (mat2 is on cpu)

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 134,170 · **Open issues:** 2,585 · **Last push:** <1h ago

On November 12, 2026, llama.cpp released several versions, including b12304, which enhances the reuse of graph result instances across scheduler reserves, and b12303, introducing support for chained comparisons and argument unpacking in jinja. Key merged features include the addition of a custom text normalizer for TTS models in chat (#32053) and improved PAD_REFLECT_1D support for webgpu (#31877). However, the day also saw notable issues, particularly #32122, where scheduling a GGML_OP_LIGHTNING_INDEXER on a remote Metal device aborts if the indexer head count does not equal 64, highlighting potential compatibility concerns that may need addressing. Overall, it was a productive day with significant feature enhancements alongside emerging challenges.

#### 🚀 New Releases
- [b12304](https://github.com/ggml-org/llama.cpp/releases/tag/b12304) b12304
- [b12303](https://github.com/ggml-org/llama.cpp/releases/tag/b12303) b12303
- [b12302](https://github.com/ggml-org/llama.cpp/releases/tag/b12302) b12302
- [b12292](https://github.com/ggml-org/llama.cpp/releases/tag/b12292) b12292
- [b12291](https://github.com/ggml-org/llama.cpp/releases/tag/b12291) b12291
- [b12290](https://github.com/ggml-org/llama.cpp/releases/tag/b12290) b12290
- [b12289](https://github.com/ggml-org/llama.cpp/releases/tag/b12289) b12289
- [b12287](https://github.com/ggml-org/llama.cpp/releases/tag/b12287) b12287
- [b12284](https://github.com/ggml-org/llama.cpp/releases/tag/b12284) b12284
- [b12283](https://github.com/ggml-org/llama.cpp/releases/tag/b12283) b12283

#### ✅ Merged PRs
- [#32117](https://github.com/ggml-org/llama.cpp/pull/32117) server: use the moved test model in the router CORS test
- [#32046](https://github.com/ggml-org/llama.cpp/pull/32046) opencl: add decomposed FA for Adreno
- [#32039](https://github.com/ggml-org/llama.cpp/pull/32039) ui: take the logo and favicons from the llama-brand package
- [#32054](https://github.com/ggml-org/llama.cpp/pull/32054) ui: move js sandbox setting out of "developer"
- [#32038](https://github.com/ggml-org/llama.cpp/pull/32038) docs: update image link in README.md
- [#31467](https://github.com/ggml-org/llama.cpp/pull/31467) ui: keep downloads in Discover during search and fix their progress with a draft
- [#32098](https://github.com/ggml-org/llama.cpp/pull/32098) server: fix --cors-origins handling + protect against DNS rebinding
- [#32096](https://github.com/ggml-org/llama.cpp/pull/32096) ci: move test models to ggml-org-dev
- [#32103](https://github.com/ggml-org/llama.cpp/pull/32103) metal : prevent out-of-bounds reads in SOLVE_TRI kernel
- [#31418](https://github.com/ggml-org/llama.cpp/pull/31418) vulkan: support batched tensor copy API
- [#32106](https://github.com/ggml-org/llama.cpp/pull/32106) vendor : update LibreSSL to 4.4.1
- [#32089](https://github.com/ggml-org/llama.cpp/pull/32089) llama : reuse graph result instances across scheduler reserves
- [#32072](https://github.com/ggml-org/llama.cpp/pull/32072) jinja : support chained comparisons and argument unpacking
- [#32053](https://github.com/ggml-org/llama.cpp/pull/32053) chat: allow TTS model to provide custom text normalizer via jinja
- [#32084](https://github.com/ggml-org/llama.cpp/pull/32084) ci : remove dead snakes
- [#31877](https://github.com/ggml-org/llama.cpp/pull/31877) webgpu: add PAD_REFLECT_1D support
- [#32078](https://github.com/ggml-org/llama.cpp/pull/32078) llama : remove non-fused GDN and ubatch-dependent graph nodes
- [#32005](https://github.com/ggml-org/llama.cpp/pull/32005) devops : add missing MKL runtime DLLs to the Windows SYCL release package
- [#32049](https://github.com/ggml-org/llama.cpp/pull/32049) vendor : update cpp-httplib-0.66.0
- [#31284](https://github.com/ggml-org/llama.cpp/pull/31284) backend : re-instantiate CUDA graphs when the cluster dims of a kernel change
- [#32083](https://github.com/ggml-org/llama.cpp/pull/32083) test-fp8.cpp: Use ggml API only to enable Dynamic Loading
- [#31838](https://github.com/ggml-org/llama.cpp/pull/31838) ROCm/HIP: fixed BLAS workspace instead of rocBLAS allocating one per call
- [#32077](https://github.com/ggml-org/llama.cpp/pull/32077) test-kv-cache.cpp: Use only the public ggml API to support GGML_BACKEND_DL=ON
- [#32000](https://github.com/ggml-org/llama.cpp/pull/32000) quantize: fix imatrix GGUF filepath metadata leak
- [#29810](https://github.com/ggml-org/llama.cpp/pull/29810) cpu: accumulate flash attention V in F32
- [#32008](https://github.com/ggml-org/llama.cpp/pull/32008) Vulkan: Allocate the device fault vendor binary buffer
- [#31526](https://github.com/ggml-org/llama.cpp/pull/31526) vulkan: allow dequantized KV optimization with CM2
- [#32060](https://github.com/ggml-org/llama.cpp/pull/32060) ui: open the virtual keyboard in the chat editor on Android
- [#28413](https://github.com/ggml-org/llama.cpp/pull/28413) CUDA: Add OCP FP8 support
- [#31959](https://github.com/ggml-org/llama.cpp/pull/31959) cuda : use MMVF for BF16 matrices of few rows at small batch sizes
- [#27997](https://github.com/ggml-org/llama.cpp/pull/27997) Add sm70 FlashAttention config case for DKQ=256, DV=256, ncols=64
- [#30285](https://github.com/ggml-org/llama.cpp/pull/30285) Cuda fattn mma head sizes 40 72
- [#31784](https://github.com/ggml-org/llama.cpp/pull/31784) sycl : fixed sycl CLAMP to actually support strided view

#### 🐛 New Issues
- [#32123](https://github.com/ggml-org/llama.cpp/issues/32123) Misc. bug: server slot discards the restored prompt if the LoRA is different for another call/model `bug-unconfirmed` 💬1
- [#32099](https://github.com/ggml-org/llama.cpp/issues/32099) Misc. bug: Metal SOLVE_TRI reads out of bounds under shader validation `bug-unconfirmed` 💬1
- [#32104](https://github.com/ggml-org/llama.cpp/issues/32104) Misc. bug: hf downloader mode not router aware `bug-unconfirmed` 💬1
- [#32075](https://github.com/ggml-org/llama.cpp/issues/32075) Misc. bug: Tool call allow/deny buttons disappear on reload `bug-unconfirmed` 💬1
- [#32062](https://github.com/ggml-org/llama.cpp/issues/32062) CUDA backend: fatal CUDA error + NVIDIA driver reset (nvlddmkm Event 153) during sustained batched prompt processing while an NVENC encoder shares the GPU — Vulkan build is stable at the same VRAM footprint (depth-dependent) 💬1
- [#32122](https://github.com/ggml-org/llama.cpp/issues/32122) RPC: GGML_OP_LIGHTNING_INDEXER scheduled on remote Metal device aborts when indexer head_count != 64 (GLM-5.3)
- [#32105](https://github.com/ggml-org/llama.cpp/issues/32105) Misc. bug: HIP: CU_CHECK(err) in the VMM pool lets cuMemAddressReserve spin forever `bug-unconfirmed`
- [#32101](https://github.com/ggml-org/llama.cpp/issues/32101) Eval bug: qwen2vl graph ignores NVFP4 FFN scales (NULL ffn_*_s), NVIDIA Qwen2.5-VL-7B-Instruct-NVFP4 gives NaN / PPL ~1e6 `bug-unconfirmed`
- [#32092](https://github.com/ggml-org/llama.cpp/issues/32092) Misc. bug: llama-server stops after first token when a stop string is empty `bug-unconfirmed`
- [#32074](https://github.com/ggml-org/llama.cpp/issues/32074) Misc. bug: Skip reasoning button disappears if the page is reloaded `bug-unconfirmed`
- [#32073](https://github.com/ggml-org/llama.cpp/issues/32073) Misc. bug: Skip reasoning doesn't work after tool calls `bug-unconfirmed`
- [#32070](https://github.com/ggml-org/llama.cpp/issues/32070) Eval bug: LFM2-VL-1.6B: Slow image processing and image context retention on Android (Galaxy S24) `bug-unconfirmed`
- [#32069](https://github.com/ggml-org/llama.cpp/issues/32069) Feature Request: Support Zaya1 -8B Model `enhancement`

#### 🔒 Closed Issues
- [#29092](https://github.com/ggml-org/llama.cpp/issues/29092) HIP/ROCm — fused Gated Delta Net op carries recurrent state across requests on a reused server slot (qwen35 / qwen35moe); earlier prompts' text is emitted verbatim in later completions
- [#28295](https://github.com/ggml-org/llama.cpp/issues/28295) performance: MSVC compilation doesn't detect AVX-VNNI
- [#25646](https://github.com/ggml-org/llama.cpp/issues/25646) Misc. bug: Model weight gets evicted from idle Intel dGPU memory causing perf drop on Vulkan
- [#29774](https://github.com/ggml-org/llama.cpp/issues/29774) Eval bug: Flash attention on CPU (one-chunk) overflows to inf/NaN, has F16 accumulator instead of F32.
- [#28433](https://github.com/ggml-org/llama.cpp/issues/28433) Eval bug: draft-mtp draft context is sized from llama_n_ctx() (total) rather than llama_n_ctx_seq(), killing the server at decode entry on large --ctx-size
- [#29457](https://github.com/ggml-org/llama.cpp/issues/29457) Misc. bug: a large `enum` in a json_schema makes grammar construction take superlinear time on the serving slot, a small request pins a core for tens of seconds (DoS)
- [#31734](https://github.com/ggml-org/llama.cpp/issues/31734) Eval bug: CPU F16 dot product accumulates in F16 on ARM (FP16 arithmetic, no SVE), overflows to inf
- [#29345](https://github.com/ggml-org/llama.cpp/issues/29345) MiMo-V2.6-Flash-RL: sidecar MTP draft (-md mtp-*.gguf --spec-type draft-mtp) fails with "blk.0.attn_q not found" — draft should reuse main model weights
- [#29391](https://github.com/ggml-org/llama.cpp/issues/29391) Eval bug: llama-server aborts on GGML_ASSERT(batch.slot_batched || batch.size() == 0) after "got exception: bad allocation" in a slot (b11159, Gemma 4 31B, prefix reuse)
- [#29494](https://github.com/ggml-org/llama.cpp/issues/29494) Misc. bug: repeat_last_n / dry_penalty_last_n are not bounded, causing penalties/DRY sampler allocate multi-GB zero-filled buffer and server OOM
- [#29499](https://github.com/ggml-org/llama.cpp/issues/29499) server: llama-server hangs before serving any request on Jetson Orin NX (aarch64, L4T 36.4.7) after the b8638->b9016 server rewrite
- [#31979](https://github.com/ggml-org/llama.cpp/issues/31979) Misc. bug: llama-server should validate Content-Type
- [#31987](https://github.com/ggml-org/llama.cpp/issues/31987) Misc. bug: auto_fgdn hardcoded false so the fused GDN probe never runs
- [#28582](https://github.com/ggml-org/llama.cpp/issues/28582) Eval bug: mixed tensor & layer split with ROCM
- [#29221](https://github.com/ggml-org/llama.cpp/issues/29221) Eval bug: Gemma 4 (26B-A4B MoE) crashes the server on the 2nd request with -np 4 on Vulkan (GGML_ASSERT "tensor not allocated"); -np 3 is fine, CPU backend is fine
- [#29527](https://github.com/ggml-org/llama.cpp/issues/29527) [Bug] SYCL/Level Zero backend: A770 long-running decode fence deadlock after ~18h
- [#31108](https://github.com/ggml-org/llama.cpp/issues/31108) Misc. bug: SOLVE_TRI, memory fault, gfx1200 HIP/ROCm
- [#29579](https://github.com/ggml-org/llama.cpp/issues/29579) Eval bug: 0xc0000409 exit
- [#32099](https://github.com/ggml-org/llama.cpp/issues/32099) Misc. bug: Metal SOLVE_TRI reads out of bounds under shader validation

### Ollama (`ollama/ollama`)

**Stars:** 186,717 · **Open issues:** 4,624 · **Last push:** <1h ago

On November 12, 2026, there were no new releases or merged pull requests for Ollama, indicating a routine maintenance day. However, a noteworthy new issue arose, highlighting a request for the Windows installer to allow a custom installation directory, which could enhance user flexibility. Additionally, another issue was reported regarding the mimo-v2.6 model, where the qwen3.5 parser returns an empty `arguments: {}` when JSON arguments are written inside the `<function=...>` tag, suggesting potential bugs in JSON handling that may need urgent attention.

#### 🐛 New Issues
- [#19661](https://github.com/ollama/ollama/issues/19661) Windows installer should allow custom installation directory `feature request` 💬1
- [#19650](https://github.com/ollama/ollama/issues/19650) mimo-v2.6: qwen3.5 parser returns `arguments: {}` when the model writes JSON arguments inside `<function=...>`

#### 🔒 Closed Issues
- [#19518](https://github.com/ollama/ollama/issues/19518) Can an older library manifest still be pulled by digest after its tag is updated?

### LiteLLM (`BerriAI/litellm`)

**Stars:** 63,131 · **Open issues:** 5,130 · **Last push:** <1h ago

Today, LiteLLM released version v1.110.0-rc.2, alongside v1.109.1, v1.108.6, and v1.106.9, all signed with cosign for enhanced security. Key features from recent merged pull requests include the addition of admin-only version restore capabilities and the enhancement of alerts with default monitoring settings, as well as support for a new Gemini Decisions API model priced at $0.10 per 1M input tokens. Notably, a bug concerning the admin UI header search bar rendering overlapping elements has been reported, highlighting ongoing challenges in the user interface. Other critical fixes included improvements to budget handling post-exhaustion to better manage video retrievals and the resolution of several issues impacting the stability and performance of the API.

#### 🚀 New Releases
- [v1.110.0-rc.2](https://github.com/BerriAI/litellm/releases/tag/v1.110.0-rc.2) v1.110.0-rc.2
- [v1.109.1](https://github.com/BerriAI/litellm/releases/tag/v1.109.1) v1.109.1
- [v1.108.6](https://github.com/BerriAI/litellm/releases/tag/v1.108.6) v1.108.6
- [v1.106.9](https://github.com/BerriAI/litellm/releases/tag/v1.106.9) v1.106.9

#### ✅ Merged PRs
- [#51080](https://github.com/BerriAI/litellm/pull/51080) fix(proxy): reject unknown guardrail names on key, user, team and project writes
- [#51220](https://github.com/BerriAI/litellm/pull/51220) feat(gemini): support gemini-decision-1 on /v1/decisions and /v1/systemone
- [#50966](https://github.com/BerriAI/litellm/pull/50966) chore: move config and docs off the repo root
- [#51309](https://github.com/BerriAI/litellm/pull/51309) feat(skills): add admin-only version restore
- [#51123](https://github.com/BerriAI/litellm/pull/51123) feat(alerts): enable monitoring by default with a five-alert free allowance
- [#51104](https://github.com/BerriAI/litellm/pull/51104) feat(ui): show performance alerts in the Alerts page
- [#50666](https://github.com/BerriAI/litellm/pull/50666) feat(alerts): detect daily changes in recorded usage
- [#50658](https://github.com/BerriAI/litellm/pull/50658) feat(alerts): add persisted alerts and status APIs
- [#50630](https://github.com/BerriAI/litellm/pull/50630) feat(ui): add Activity tabs to resource details
- [#50131](https://github.com/BerriAI/litellm/pull/50131) feat(proxy): run spend log cleanup from a DB-backed scheduled job table
- [#51215](https://github.com/BerriAI/litellm/pull/51215) feat(gemini): add gemini-decision-1, the Decisions API model priced at $0.10 per 1M input tokens
- [#51300](https://github.com/BerriAI/litellm/pull/51300) test(integration): remove the openapi docs gate detached worktree test that cannot run offline
- [#51324](https://github.com/BerriAI/litellm/pull/51324) ci(unit): deselect test_unit_test_proxy_hooks from the q-z shard it matches, pin the dead proxy-infra-root codecov flag
- [#51316](https://github.com/BerriAI/litellm/pull/51316) ci(unit): split proxy-infra-root in two, isolate the child-python tests, make its file exclusions take effect
- [#51279](https://github.com/BerriAI/litellm/pull/51279) fix(gemini): attribute /gemini batchGenerateContent batches to the calling key
- [#51262](https://github.com/BerriAI/litellm/pull/51262) test(e2e): backport removal of the secret manager suite (#51241) to lts/1.108.x
- [#51267](https://github.com/BerriAI/litellm/pull/51267) fix(proxy): bill anthropic pass-through calls at the deployment's custom price
- [#51298](https://github.com/BerriAI/litellm/pull/51298) chore: bump litellm 1.109.0 -> 1.109.1
- [#51227](https://github.com/BerriAI/litellm/pull/51227) fix(auth): allow video retrieval after budget exhaustion
- [#51268](https://github.com/BerriAI/litellm/pull/51268) fix(anthropic_messages): bound the detached pump so it cannot outlive its stream
- [#49224](https://github.com/BerriAI/litellm/pull/49224) feat(guardrails): add the CollieAi guardrail integration
- [#50749](https://github.com/BerriAI/litellm/pull/50749) perf(router): list a group's deployments once per registry change on the acompletion path
- [#51280](https://github.com/BerriAI/litellm/pull/51280) fix(llms-types): drop the duplicate compact-2026-09-04 arm that fails rust-lint on main
- [#51281](https://github.com/BerriAI/litellm/pull/51281) test(guardrails): expect the content_filter finish on a blocked chat stream
- [#51273](https://github.com/BerriAI/litellm/pull/51273) fix(proxy): keep a cost settings update from being undone by an in-flight config reload
- [#51285](https://github.com/BerriAI/litellm/pull/51285) chore(cost-map): source the fireworks deepseek v4 flash deprecation and name its replacement
- [#51263](https://github.com/BerriAI/litellm/pull/51263) security(proxy): backport #51254 to rc/1.110.0
- [#51271](https://github.com/BerriAI/litellm/pull/51271) feat(azure_ai): backport gpt-image edits on Azure AI Foundry to lts/1.108.x (#49650)
- [#49650](https://github.com/BerriAI/litellm/pull/49650) feat(azure_ai): support gpt-image edits on Azure AI Foundry
- [#51232](https://github.com/BerriAI/litellm/pull/51232) chore(databricks): price claude-fable-5-2 from the proprietary pricing page
- [#51264](https://github.com/BerriAI/litellm/pull/51264) security(proxy): backport #51254 to stable/1.109.x
- [#51266](https://github.com/BerriAI/litellm/pull/51266) fix(responses): backport seven Responses, decisions and Baseten fixes to lts/1.108.x
- [#51249](https://github.com/BerriAI/litellm/pull/51249) test(proxy): await background spend counters before asserting
- [#51165](https://github.com/BerriAI/litellm/pull/51165) fix(fips): hash MCP advisory-lock keys with SHA-256 in fips_mode and compute the OCI body digest as a security hash
- [#51062](https://github.com/BerriAI/litellm/pull/51062) feat(bedrock): search knowledge bases by image and return image hits
- [#51063](https://github.com/BerriAI/litellm/pull/51063) feat(bedrock): search knowledge bases by image and return image hits
- [#51119](https://github.com/BerriAI/litellm/pull/51119) feat(messages): serve anthropic messages on rust only
- [#51272](https://github.com/BerriAI/litellm/pull/51272) fix(llms-types): let the compact-2026-09-04 beta through on bedrock to match the headers config
- [#50987](https://github.com/BerriAI/litellm/pull/50987) fix(health): log Test Connection spend with the mode's call type and model id
- [#51118](https://github.com/BerriAI/litellm/pull/51118) feat(guardrails): write guardrail changes to the audit log
- [#51270](https://github.com/BerriAI/litellm/pull/51270) chore(release): bump version to 1.106.9
- [#51243](https://github.com/BerriAI/litellm/pull/51243) fix(responses): keep reasoning item IDs consistent across streaming events
- [#51258](https://github.com/BerriAI/litellm/pull/51258) test(proxy): make the cancelled supervisor test deterministic
- [#51261](https://github.com/BerriAI/litellm/pull/51261) security(proxy): backport #51254 to stable/1.106.x
- [#51254](https://github.com/BerriAI/litellm/pull/51254) security(proxy): stop request body fields from conflicting with admin-set deployment fields
- [#50950](https://github.com/BerriAI/litellm/pull/50950) ci: remove CircleCI
- [#50944](https://github.com/BerriAI/litellm/pull/50944) chore: remove cookbook and preserve live assets
- [#50936](https://github.com/BerriAI/litellm/pull/50936) chore: remove dead files from the repo root
- [#51260](https://github.com/BerriAI/litellm/pull/51260) security(proxy): backport #51254 to lts/1.108.x
- [#51245](https://github.com/BerriAI/litellm/pull/51245) fix(fallback): preserve concurrent writes and serve saved configuration
- [#51223](https://github.com/BerriAI/litellm/pull/51223) fix(bedrock): forward the compact-2026-09-04 compaction param on Invoke /v1/messages
- [#51241](https://github.com/BerriAI/litellm/pull/51241) test(e2e): remove the secret manager suite
- [#51246](https://github.com/BerriAI/litellm/pull/51246) refactor(ui): remove the deprecated API Reference page
- [#51034](https://github.com/BerriAI/litellm/pull/51034) fix(proxy): name the deployment in stream error alerts on chat, completions, responses and messages
- [#50759](https://github.com/BerriAI/litellm/pull/50759) feat(helm): add scheme and tlsConfig to the gateway ServiceMonitor
- [#51251](https://github.com/BerriAI/litellm/pull/51251) refactor(ui): remove the deprecated Learning Resources sidebar link
- [#51228](https://github.com/BerriAI/litellm/pull/51228) feat(rate-limit): name the limit that rejected a request in a rate_limited_by header on the 429
- [#51037](https://github.com/BerriAI/litellm/pull/51037) fix(proxy): answer x-litellm-call-id on every token count response
- [#51224](https://github.com/BerriAI/litellm/pull/51224) fix(proxy): reset a deleted customer's admission spend counter so a re-created one is not refused
- [#50711](https://github.com/BerriAI/litellm/pull/50711) refactor(typing): clear 1141 basedpyright Any errors across 182 files
- [#51009](https://github.com/BerriAI/litellm/pull/51009) fix(proxy-extras): exit the 1.103 migration job by the migrations and fix three index build failures
- [#51240](https://github.com/BerriAI/litellm/pull/51240) fix(ci): backport the tzdata CI dependency (#51057) to lts/1.108.x
- [#50813](https://github.com/BerriAI/litellm/pull/50813) feat(otel): let a team or key OTel v2 destination add its own request metadata keys
- [#49606](https://github.com/BerriAI/litellm/pull/49606) feat(proxy): supervise the opt-in Rust forwarding server
- [#51114](https://github.com/BerriAI/litellm/pull/51114) fix(proxy): stream the guardrail block response when the block comes after an SSE keepalive ping
- [#51124](https://github.com/BerriAI/litellm/pull/51124) fix(completion)!: answer 400 for a chat message without a role
- [#51099](https://github.com/BerriAI/litellm/pull/51099) fix(proxy): let /team/delete transactions wait for a pooled connection
- [#51096](https://github.com/BerriAI/litellm/pull/51096) test(integration): fix the baseline accounting and series cap flakes
- [#51229](https://github.com/BerriAI/litellm/pull/51229) fix(usage): backport #50253 to lts/1.108.x
- [#49888](https://github.com/BerriAI/litellm/pull/49888) feat(chatgpt): backport #41522 client subscription forwarding to stable/1.106.x for v1.106.8
- [#51226](https://github.com/BerriAI/litellm/pull/51226) fix(auth): enforce model access on Google and image URL routes
- [#51218](https://github.com/BerriAI/litellm/pull/51218) fix(router): map Gemini stream-opening errors
- [#51032](https://github.com/BerriAI/litellm/pull/51032) feat(gemini): file-backed batch jobs on /v1/batches with output download and spend tracking
- [#51093](https://github.com/BerriAI/litellm/pull/51093) fix(streaming): report zero cost for explicitly free calls
- [#50871](https://github.com/BerriAI/litellm/pull/50871) refactor(proxy): let the gunicorn server take a private listener
- [#51138](https://github.com/BerriAI/litellm/pull/51138) feat(proxy): count a rate-limit fallback in x-litellm-attempted-fallbacks and name it in x-litellm-fallback-reason
- [#51216](https://github.com/BerriAI/litellm/pull/51216) chore(cost-map): add 24 runwayml models and correct seedance2 and eleven_multilingual_v2 rates
- [#51116](https://github.com/BerriAI/litellm/pull/51116) fix(azure): use supported API versions for Responses requests
- [#51217](https://github.com/BerriAI/litellm/pull/51217) chore: bump litellm to 1.108.6 on lts/1.108.x
- [#51111](https://github.com/BerriAI/litellm/pull/51111) fix(management): keep classifier deployments serving during reloads
- [#51045](https://github.com/BerriAI/litellm/pull/51045) fix(mcp): backport #50717 and #51065 to lts/1.108.x
- [#51122](https://github.com/BerriAI/litellm/pull/51122) fix(responses): backport #50968 and #51038 to lts/1.108.x
- [#51043](https://github.com/BerriAI/litellm/pull/51043) fix(usage): restore per-user spend breakdown on the user aggregated route (#49464) [lts/1.108.x]
- [#50435](https://github.com/BerriAI/litellm/pull/50435) fix(zscaler_ai_guard)!: backport #50139 to lts/1.108.x
- [#51213](https://github.com/BerriAI/litellm/pull/51213) test(security): expect the async release check on offline mode
- [#51163](https://github.com/BerriAI/litellm/pull/51163) refactor: clean up fresh tech debt in rubrik, passthrough headers and plugin mode comments
- [#51176](https://github.com/BerriAI/litellm/pull/51176) fix(router): preserve held tiers for OpenCode subagent results
- [#51193](https://github.com/BerriAI/litellm/pull/51193) chore(cost-map): rolling registry PR, fal_ai rows, databricks gemini-4-carbon, deepinfra and bedrock tier prices
- [#51199](https://github.com/BerriAI/litellm/pull/51199) docs(security): updated mailinglist and vdp in security.md
- [#51180](https://github.com/BerriAI/litellm/pull/51180) fix(vertex): drop floor-only retirement dates, veo 3.1 successor and gemini token limits from the Vertex model pages
- [#50671](https://github.com/BerriAI/litellm/pull/50671) fix(tls)!: exclude RSA key exchange and ChaCha20 from the outbound cipher list in FIPS mode
- [#49914](https://github.com/BerriAI/litellm/pull/49914) fix(proxy): add tzdata to the proxy extra so a legacy TZ doesn't stop startup
- [#51110](https://github.com/BerriAI/litellm/pull/51110) fix(spend): keep free response reads and cancels off the creation spend row
- [#51150](https://github.com/BerriAI/litellm/pull/51150) fix(gemini): batch and flex tier fields the -latest alias rows were missing
- [#51148](https://github.com/BerriAI/litellm/pull/51148) test(spend): expect token billing for Vertex image edits
- [#51149](https://github.com/BerriAI/litellm/pull/51149) test(providers): preserve unspecified Gemini image output modality

#### 🐛 New Issues
- [#51177](https://github.com/BerriAI/litellm/issues/51177) [Bug]: Admin UI header search bar renders overlapping text and icons `bug` 💬3
- [#51230](https://github.com/BerriAI/litellm/issues/51230) [Bug]: `function.strict: true` is dropped when an OpenAI-format tool is sent to Anthropic `bug` `llm translation` 💬2
- [#51221](https://github.com/BerriAI/litellm/issues/51221) [Bug]: OTel span has no gen_ai.usage when a request times out after the backend processed the prompt 💬2
- [#51182](https://github.com/BerriAI/litellm/issues/51182) [Feature]: Setting to stop forwarding provider response headers (llm_provider-*) to clients `llm translation` 💬2
- [#51288](https://github.com/BerriAI/litellm/issues/51288) [Bug]: team model_aliases are not applied on /v1beta/interactions (endpoint model overrides the aliased body model) `llm translation` 💬1
- [#51277](https://github.com/BerriAI/litellm/issues/51277) [Bug]: Every streamed /v1/messages request stays in memory until a full GC, because the detached failure hook forms a reference cycle `bug` `llm translation` `claude code` 💬1
- [#51147](https://github.com/BerriAI/litellm/issues/51147) [Bug]: Exhausted key budget blocks video status/content retrieval for videos already paid for (follow-up to #48809) `llm translation` 💬1
- [#51297](https://github.com/BerriAI/litellm/issues/51297) [Bug]: token_counter rejects server tool blocks in assistant history, so the router skips its context-window check `llm translation` 💬1
- [#51212](https://github.com/BerriAI/litellm/issues/51212) [Feature]: Include the original request envelope in the cold storage log object 💬1
- [#51210](https://github.com/BerriAI/litellm/issues/51210) [Feature]: Mark proxied Claude subscription usage as Included in subscription `llm translation` `claude code` 💬1
- [#51200](https://github.com/BerriAI/litellm/issues/51200) [Bug]: Messages-to-Responses strict JSON skips recursive object closure performed by Messages-to-Chat `llm translation` 💬1
- [#51202](https://github.com/BerriAI/litellm/issues/51202) [Bug]: UI/API pass-through routes fail on forward headers, subpaths, and auth: false together `llm translation` 💬1
- [#51197](https://github.com/BerriAI/litellm/issues/51197) [Bug]: /v1/rerank ignores general_settings.cancel_on_disconnect, so abandoned reranks hold upstream calls until timeout and retry `llm translation` 💬1
- [#51187](https://github.com/BerriAI/litellm/issues/51187) [Bug]: A2A gateway forwards tasks/* with 0.3 method names to agents served as A2A 1.0 💬1
- [#51185](https://github.com/BerriAI/litellm/issues/51185) [Bug]: aws_region_name and base_model in the request body override the deployment's region and price `llm translation`
- [#51265](https://github.com/BerriAI/litellm/issues/51265) [Bug]: Streamed /v1/messages on Bedrock leaks a background pump task, and its buffered request and response, per stuck stream `bug` `llm translation` `claude code`
- [#51207](https://github.com/BerriAI/litellm/issues/51207) [Bug]: redis-semantic cache can't start with a Redis user that excludes dangerous commands, because the Docker image ships redisvl 0.4.1 `llm translation`
- [#51171](https://github.com/BerriAI/litellm/issues/51171) [Feature]: Add an option to forward request params._meta from client to upstream MCP servers on tools/call `enhancement`
- [#51142](https://github.com/BerriAI/litellm/issues/51142) [Bug]: async stream failure accounting tokenizes the whole prompt on the event loop (no offload, unlike the success path) `llm translation`

#### 🔒 Closed Issues
- [#27767](https://github.com/BerriAI/litellm/issues/27767) [Bug]: litellm.BadRequestError when using llm_as_a_judge guardrail with self-hosted vllm model
- [#31439](https://github.com/BerriAI/litellm/issues/31439) [Bug] DeepSeek anthropic-compatible /v1/messages: assistant messages missing reasoning_content cause 400 in thinking mode
- [#35781](https://github.com/BerriAI/litellm/issues/35781) Feature request: add an OpenAI-compatible Fusion model on top of Auto Router
- [#49813](https://github.com/BerriAI/litellm/issues/49813) [Bug]: Proxy exits at startup when TZ is Asia/Calcutta on a pip install, tzdata isn't installed
- [#43946](https://github.com/BerriAI/litellm/issues/43946) [Bug]: Streamed usage.cost is omitted when the computed cost is 0, while the non-streamed call reports 0.0
- [#51177](https://github.com/BerriAI/litellm/issues/51177) [Bug]: Admin UI header search bar renders overlapping text and icons
- [#33086](https://github.com/BerriAI/litellm/issues/33086) [Bug]: Bedrock guardrail native hooks don't scan Anthropic tool_result content blocks
- [#35842](https://github.com/BerriAI/litellm/issues/35842) [Bug]: /model/update silently drops drop_params (and other extra-only litellm_params fields) on partial PATCH
- [#36085](https://github.com/BerriAI/litellm/issues/36085) [Bug]: Model-level guardrails not applied on /v1/messages (anthropic_messages) — applied_guardrails is empty
- [#47881](https://github.com/BerriAI/litellm/issues/47881) [Bug]: encrypted_content_affinity gives one streamed Responses item two IDs, so clients replay duplicate reasoning items
- [#50908](https://github.com/BerriAI/litellm/issues/50908) [Bug]: `/customer/delete` leaves `spend:end_user:<id>` in Redis, so a re-created end user stays over budget
- [#46038](https://github.com/BerriAI/litellm/issues/46038) [Bug] Azure Responses bridge inherits chat-era api-version, rejected by Azure (needs >= 2025-03-01-preview)
- [#46646](https://github.com/BerriAI/litellm/issues/46646) complexity_router: OpenCode subagent injections count as fresh human asks
- [#49596](https://github.com/BerriAI/litellm/issues/49596) Question: should custom pricing in model_list apply to the Anthropic pass-through route?
- [#51147](https://github.com/BerriAI/litellm/issues/51147) [Bug]: Exhausted key budget blocks video status/content retrieval for videos already paid for (follow-up to #48809)
- [#32892](https://github.com/BerriAI/litellm/issues/32892) Operator opt-in to pin AWS credential params to config (ignore caller-supplied aws_* overrides)
- [#36043](https://github.com/BerriAI/litellm/issues/36043) [Bug]: google_genai streaming raises ImportError: backoff is not installed on a plain SDK install
- [#36123](https://github.com/BerriAI/litellm/issues/36123) [Bug]: upstream LLM stream not closed on client disconnect for /v1/responses and /v1/messages
- [#48760](https://github.com/BerriAI/litellm/issues/48760) key model allowlist is enforced per-route, so generateContent, streamGenerateContent and image routes still serve a denied model (gap left by #41852)
- [#51187](https://github.com/BerriAI/litellm/issues/51187) [Bug]: A2A gateway forwards tasks/* with 0.3 method names to agents served as A2A 1.0
- [#47888](https://github.com/BerriAI/litellm/issues/47888) [Bug]: provider: litellm_fallback create fails with "Root object was present, but now absent" with multiple proxy replicas
- [#49933](https://github.com/BerriAI/litellm/issues/49933) [Bug]: Router stream=True with a Gemini deployment raises the raw VertexAIError (async) or a TypeError (sync) when the stream fails to open

### Unsloth (`unslothai/unsloth`)

**Stars:** 79,345 · **Open issues:** 532 · **Last push:** <1h ago

On November 12, 2026, Unsloth released version v0.1.917-beta, introducing the new Qwen3.8-27B with Dynamic v3.1 GGUFs, which enhances local performance with major improvements, smoother Glass rendering, HTML/PDF chat exports, and new image generation and coding agent features. Significant merged pull requests include improvements in the Studio such as a prompt cache and pinned streaming for H3-Image, as well as fixes that ensure efficient model selections and processes. Notably, a bug was reported regarding the DiffusionGemma load in the Studio, which is said to ignore selected context and parallelism settings, potentially impacting user experience.

#### 🚀 New Releases
- [v0.1.917-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.917-beta) Dynamic v3.1 GGUFs + Performance Fixes

#### ✅ Merged PRs
- [#17504](https://github.com/unslothai/unsloth/pull/17504) Studio: mount only the messages near the reader in long chats
- [#17547](https://github.com/unslothai/unsloth/pull/17547) Tests: skip the installer's transient filtered copies in the sentence-transformers pin scan
- [#17495](https://github.com/unslothai/unsloth/pull/17495) Studio H3-Image: prompt cache, pinned streaming and the H3 attention levers
- [#17503](https://github.com/unslothai/unsloth/pull/17503) Studio: only resolve int8 text encoder files that are published
- [#17486](https://github.com/unslothai/unsloth/pull/17486) Studio: prebuilt CUTLASS int8 GEMM with the dequant epilogue fused, raced per arch (FLUX.3 klein INT8 -19.8% on L4)
- [#17524](https://github.com/unslothai/unsloth/pull/17524) Bump install.sh / install.ps1 pin to unsloth>=2026.11.4
- [#17502](https://github.com/unslothai/unsloth/pull/17502) Studio: pin MiniMax-H3-Image (Fast FP8) at the top of the image picker
- [#17516](https://github.com/unslothai/unsloth/pull/17516) Studio: no RAM fallback mark in the model picker when there is no GPU
- [#16648](https://github.com/unslothai/unsloth/pull/16648) Multi-LoRA: refuse 8-bit bitsandbytes base layers
- [#17424](https://github.com/unslothai/unsloth/pull/17424) Studio: MLX chats with a picture keep going when the context fills
- [#16647](https://github.com/unslothai/unsloth/pull/16647) Multi-LoRA: keep the backward dH buffer in fp32
- [#16653](https://github.com/unslothai/unsloth/pull/16653) Studio: train jobs targeting embed_tokens or lm_head alone, not batched
- [#16182](https://github.com/unslothai/unsloth/pull/16182) RoPE: compile stock positions without full-context caches
- [#17435](https://github.com/unslothai/unsloth/pull/17435) Studio desktop: serve the web UI behind an allowlisted reverse proxy (fixes #17420)
- [#17051](https://github.com/unslothai/unsloth/pull/17051) Ulysses: dynamic and longrope RoPE see the whole sequence's positions
- [#17072](https://github.com/unslothai/unsloth/pull/17072) Pipeline parallel on the CPU backend: weight the MoE router aux loss as TRL's SFTTrainer does
- [#16650](https://github.com/unslothai/unsloth/pull/16650) Mask GRPO completions cut by the vLLM server's context limit
- [#17049](https://github.com/unslothai/unsloth/pull/17049) Context parallel: eval loss is the sequence's token mean, not cp_size times it
- [#17400](https://github.com/unslothai/unsloth/pull/17400) Studio: accept chat videos up to 256 MB
- [#15510](https://github.com/unslothai/unsloth/pull/15510) TP / FSDP2 saves: pass results between ranks as JSON, not pickle
- [#17489](https://github.com/unslothai/unsloth/pull/17489) Studio sd.cpp: pin the prebuilt with the aarch64 K-quant GEMM and macOS Accelerate routing
- [#17497](https://github.com/unslothai/unsloth/pull/17497) Gemma 3 generate test: find the non-flex scope by call, not by its exact text
- [#17448](https://github.com/unslothai/unsloth/pull/17448) Studio: edit images through an external connection's /images/edits endpoint
- [#17479](https://github.com/unslothai/unsloth/pull/17479) Studio MiniMax-H3: opt-in 4-bit GGUF text encoder for hosts that cannot keep int8 resident
- [#17449](https://github.com/unslothai/unsloth/pull/17449) Studio: always show loaded GGUF weight placement
- [#17416](https://github.com/unslothai/unsloth/pull/17416) Studio: reconnect a chat reply whose connection died silently
- [#17457](https://github.com/unslothai/unsloth/pull/17457) Studio: compact long chats on an Ollama connection to its loaded window
- [#17423](https://github.com/unslothai/unsloth/pull/17423) Studio: keep built-in tools on when an MLX chat has several images
- [#17172](https://github.com/unslothai/unsloth/pull/17172) Studio: let managed accounts use gated models with their own HF token
- [#17433](https://github.com/unslothai/unsloth/pull/17433) Studio: keep the LoRA on in Chat after a Base vs LoRA compare
- [#17426](https://github.com/unslothai/unsloth/pull/17426) Studio: fit max_tokens to the window on vLLM and SGLang tool requests
- [#17455](https://github.com/unslothai/unsloth/pull/17455) Studio: stop showing a stray </think> after an OpenAI model calls a tool
- [#17454](https://github.com/unslothai/unsloth/pull/17454) Studio: keep the seeded admin password out of pages relayed by a proxy
- [#17432](https://github.com/unslothai/unsloth/pull/17432) Studio: make Gemma 4 call a forced tool
- [#17425](https://github.com/unslothai/unsloth/pull/17425) Studio: wrap long unbroken text in PDF chat exports
- [#17434](https://github.com/unslothai/unsloth/pull/17434) Studio: stop web results crowding attached files out of Deep Research
- [#17427](https://github.com/unslothai/unsloth/pull/17427) Studio: let MCP run_recipe set a row count
- [#17456](https://github.com/unslothai/unsloth/pull/17456) Studio: ask before Python runs a shell command passed by reference
- [#17429](https://github.com/unslothai/unsloth/pull/17429) Studio: keep chat text out of the header with Glass or a background
- [#17488](https://github.com/unslothai/unsloth/pull/17488) Studio tests: give the llama-server owner tests a wait cap a loaded runner can meet
- [#17329](https://github.com/unslothai/unsloth/pull/17329) Flex attention decode steps for Gemma 4 and Qwen3.5 / Qwen3.6 under decode CUDA graphs
- [#17453](https://github.com/unslothai/unsloth/pull/17453) Studio: MiniMax-H3-Image text to image and reference edits
- [#17472](https://github.com/unslothai/unsloth/pull/17472) Tests: clear the cached tensor parallel layout before every test
- [#17468](https://github.com/unslothai/unsloth/pull/17468) Studio NVFP4: 4over6 block scales at load and in the prequant builder
- [#17469](https://github.com/unslothai/unsloth/pull/17469) Studio: neutral NVFP4 gate field names and refreshed checkpoint hashes
- [#17467](https://github.com/unslothai/unsloth/pull/17467) Studio NVFP4: tune mm_fp4 once per M bucket and keep the tactics on disk
- [#17466](https://github.com/unslothai/unsloth/pull/17466) Studio: stop Reduce motion turning on a transition for every element

#### 🐛 New Issues
- [#17558](https://github.com/unslothai/unsloth/issues/17558) [Bug] DiffusionGemma load by Studio ignores selected context and parallelism settings 💬1
- [#17552](https://github.com/unslothai/unsloth/issues/17552) [Feature] kromoss support in studio `feature request`
- [#17548](https://github.com/unslothai/unsloth/issues/17548) [Bug] ROCm 7.14 / MI300X (gfx942): stride assertion in _scaled_dot_product_flash_attention_backward – MATH fallback required `feature request` `bug`
- [#17473](https://github.com/unslothai/unsloth/issues/17473) [Bug] Studio: YuE2 can sing with Instrumental enabled
- [#17470](https://github.com/unslothai/unsloth/issues/17470) [Bug] unsloth docker image tags are incorrect `feature request` `bug`

#### 🔒 Closed Issues
- [#17458](https://github.com/unslothai/unsloth/issues/17458) [Bug] Unsloth hub does not show all models
- [#17420](https://github.com/unslothai/unsloth/issues/17420) [Bug / Feature Request] Support secure custom domains and reverse proxies in Unsloth Desktop
- [#17054](https://github.com/unslothai/unsloth/issues/17054) Pipeline parallel on the CPU backend: MoE router aux loss diverges from one process at gradient accumulation > 1
- [#17062](https://github.com/unslothai/unsloth/issues/17062) [Feature] Upload video limited at 64MB, make it bigger please
- [#15116](https://github.com/unslothai/unsloth/issues/15116) Inquiry about quantization evaluation datasets and imatrix calibration data
- [#17126](https://github.com/unslothai/unsloth/issues/17126) [Feature] be able to edit images with connected models
- [#17156](https://github.com/unslothai/unsloth/issues/17156) [Bug] Managed account doesn't use a valid HF token

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,186 · **Open issues:** 408 · **Last push:** 3h ago

On November 12, 2026, there were no new releases for AIBrix. However, a significant merge was completed, addressing a bug related to the throughput of SGLang DP-attention generation across multiple ranks in PR #3446. Additionally, several new issues were reported, with #3451 highlighting a problem where configuration profiles share a single requestsPerSecond counter, leading to traffic limitations across profiles. Another critical issue, #3450, described how auto-blended load-balancing can lock traffic onto a single replica after a rollout, while #3453 noted that the gateway fails to register KV event sync metrics. Lastly, issue #3456 brought attention to a misconfiguration in the Helm chart's controller-manager ServiceMonitor that does not match any service, complicating metrics scraping.

#### ✅ Merged PRs
- [#3446](https://github.com/vllm-project/aibrix/pull/3446) [Bug] Sum SGLang DP-attention generation throughput across ranks

#### 🐛 New Issues
- [#3451](https://github.com/vllm-project/aibrix/issues/3451) [Bug] Config profiles share one requestsPerSecond counter, so one profile's traffic uses up another's limit `kind/bug` `area/gateway` `triage/accepted` `bug` 💬3
- [#3450](https://github.com/vllm-project/aibrix/issues/3450) [Bug] Auto-blended load-balance locks traffic onto one replica after a rollout: its capacity estimate follows the routed traffic share `kind/bug` `area/gateway` `triage/accepted` 💬3
- [#3453](https://github.com/vllm-project/aibrix/issues/3453) [Bug] The gateway never registers the KV event sync metrics `kind/bug` `area/gateway` 💬2
- [#3456](https://github.com/vllm-project/aibrix/issues/3456) [Bug] Helm chart's controller-manager ServiceMonitor matches no Service and scrapes a port the Service doesn't have `kind/bug` `area/installation` 💬2

#### 🔒 Closed Issues
- [#3434](https://github.com/vllm-project/aibrix/issues/3434) [Bug] PodArray still sorts the shared pod snapshot in place: #2741 was closed without a fix
- [#3372](https://github.com/vllm-project/aibrix/issues/3372) [Bug] Client can get an empty body for a non-2xx upstream response whose body arrives in more than one chunk
- [#3371](https://github.com/vllm-project/aibrix/issues/3371) [Bug] PD prefill leg never receives x-aibrix-mock-delay-ms, so TestPDFailureVLLMSynchronousPrefillRejected passes on the decode's 400
- [#3427](https://github.com/vllm-project/aibrix/issues/3427) [Bug] make verify-crd passes on macOS without comparing any CRD

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,454 · **Open issues:** 661 · **Last push:** <1h ago

On November 12, 2026, there were no new releases for Semantic Router, but several significant changes were merged. Notably, a feature was introduced that enhances the vSR by drawing every kept decision in the /vsr pane (PR #6117), alongside several important bug fixes aimed at improving functionality, such as preserving custom tool inputs in stored responses (PR #6083) and maintaining distinct signal selection across signal types (PR #5193). Additionally, a couple of critical new issues were reported, including a vulnerability in the model-runtime lock related to filelock (issue #6311) and the need for supporting Vela 3.1-fast request semantics (issue #6310). Overall, the day was marked by routine maintenance with a focus on enhancing the robustness and usability of current features.

#### ✅ Merged PRs
- [#5193](https://github.com/vllm-project/semantic-router/pull/5193) [Bug] Keep Builder signal selection distinct across signal types
- [#5444](https://github.com/vllm-project/semantic-router/pull/5444) [Bug] Bypass the Envoy image entrypoint in smoke checks
- [#6294](https://github.com/vllm-project/semantic-router/pull/6294) [Test] Expect the opt-in hint in the tool-result refusal E2E case
- [#6117](https://github.com/vllm-project/semantic-router/pull/6117) [Feature] vSR: draw every kept decision in the /vsr pane
- [#6083](https://github.com/vllm-project/semantic-router/pull/6083) [Bug] Preserve custom tool inputs in stored Responses

#### 🐛 New Issues
- [#6310](https://github.com/vllm-project/semantic-router/issues/6310) [Feature] Model runtime: support Vela 3.1-fast request semantics `enhancement` `accepted` `in-progress` `wg/router-models-inference-runtime` 💬2
- [#6277](https://github.com/vllm-project/semantic-router/issues/6277) [Test] The response-api E2E still expects the lossy-translation refusal from before #6230 `accepted` `in-progress` `wg/evaluation-quality` 💬2
- [#6311](https://github.com/vllm-project/semantic-router/issues/6311) [Bug] filelock stays in the vulnerable range in the model-runtime lock and the Python 3.10 training locks `bug` `needs-acceptance` 💬1
- [#6315](https://github.com/vllm-project/semantic-router/issues/6315) [Bug] A model whose vLLM backend runs speculative decoding fails requests that carry min_p or logit_bias `bug` `wg/data-plane-networking` 💬1
- [#6309](https://github.com/vllm-project/semantic-router/issues/6309) [Bug] A tool call cut by max_tokens fails buffered replies and vLLM's last stream chunk `bug` `accepted` `wg/data-plane-networking` 💬1
- [#6305](https://github.com/vllm-project/semantic-router/issues/6305) [Test] Two Router tests fail when a short readiness wait runs out on a busy runner `accepted` `in-progress` `wg/evaluation-quality` 💬1
- [#6297](https://github.com/vllm-project/semantic-router/issues/6297) [Bug] A guard reads a long message's windows in one call, so a deadline leaves none read and best_effort never applies `bug` `wg/router-models-inference-runtime` 💬1
- [#6298](https://github.com/vllm-project/semantic-router/issues/6298) [Bug] The vela3_d3 sizes answer the jailbreak and harm guards on their trained adapters, which lose attacks the base model refuses `bug` `accepted` `wg/router-models-inference-runtime` 💬1
- [#6295](https://github.com/vllm-project/semantic-router/issues/6295) [Bug] Mobile navbar sidebar clipped below header on homepage `bug` `accepted` `wg/developer-experience-ecosystem` 💬1
- [#6291](https://github.com/vllm-project/semantic-router/issues/6291) [Bug] A streamed request with stream_options never falls back behind Envoy `bug` `accepted` `wg/mom-routing` 💬1
- [#6285](https://github.com/vllm-project/semantic-router/issues/6285) [CI/Build] A Router request-path change runs no E2E `accepted` `in-progress` `wg/evaluation-quality` 💬1
- [#6284](https://github.com/vllm-project/semantic-router/issues/6284) [Test] Coding-agent tool-output guards are checked on buffered Chat only `accepted` `in-progress` `wg/evaluation-quality` 💬1
- [#6283](https://github.com/vllm-project/semantic-router/issues/6283) [Bug] A tool result the Router cannot read as text passes guards that read tool results `accepted` `in-progress` `wg/data-plane-networking` 💬1
- [#6282](https://github.com/vllm-project/semantic-router/issues/6282) [Test] E2E profiles download real models for cases that test none `accepted` `in-progress` `wg/evaluation-quality` 💬1
- [#6281](https://github.com/vllm-project/semantic-router/issues/6281) [Test] The pii-remote-backend E2E still relies on the old on_unscanned default `accepted` `in-progress` `wg/evaluation-quality` 💬1
- [#6246](https://github.com/vllm-project/semantic-router/issues/6246) [Bug] Reclaim explicitly expiring entries when the default cache TTL is disabled `needs-acceptance` `wg/data-plane-networking` 💬1
- [#6252](https://github.com/vllm-project/semantic-router/issues/6252) [Bug] Preserve non-retryable status policy when reading error bodies fails `needs-acceptance` `wg/router-models-inference-runtime` 💬1
- [#6258](https://github.com/vllm-project/semantic-router/issues/6258) [Bug] Keep draining managed runtime logs after oversized lines `needs-acceptance` 💬1
- [#6273](https://github.com/vllm-project/semantic-router/issues/6273) [Feature] Trust a private CA for https chat backends, in Envoy and the Router `enhancement` `accepted` `wg/data-plane-networking` 💬1
- [#6274](https://github.com/vllm-project/semantic-router/issues/6274) [Feature] Forward allowlisted client request headers on fallback attempts and remote deployment calls `enhancement` `accepted` `wg/mom-routing` 💬1
- [#6312](https://github.com/vllm-project/semantic-router/issues/6312) [Maintenance] Bug-fix PR and bug issue cleanup (status 2026-11-12) `owner/maintainers`
- [#6314](https://github.com/vllm-project/semantic-router/issues/6314) [Bug] Multi-turn litellm clients get HTTP 400 at turn 2: messages.provider_specific_fields is not supported
- [#6301](https://github.com/vllm-project/semantic-router/issues/6301) [Bug] Playground returns 403 HTTP error for non-localhost origins despite DASHBOARD_ALLOWED_ORIGINS variable set `bug` `needs-acceptance`
- [#6303](https://github.com/vllm-project/semantic-router/issues/6303) [Bug] vSR redact lets real secrets through and hides values that are not secrets `bug` `needs-acceptance` `wg/developer-experience-ecosystem`
- [#6302](https://github.com/vllm-project/semantic-router/issues/6302) [Feature] Model runtime: serve the Vela 3.1 pico packages (vela3-pico/1) `enhancement` `needs-acceptance` `wg/router-models-inference-runtime`
- [#6293](https://github.com/vllm-project/semantic-router/issues/6293) [Bug] Literal keyword rules do not match Thai, Lao, Khmer or Myanmar words inside running text `bug` `needs-acceptance` `wg/mom-routing`
- [#6279](https://github.com/vllm-project/semantic-router/issues/6279) [Bug] vLLM's serving metadata fails Chat replies and every vLLM-Omni stream (metrics, weight_versions, modality) `bug` `accepted` `wg/data-plane-networking`

#### 🔒 Closed Issues
- [#5192](https://github.com/vllm-project/semantic-router/issues/5192) [Bug] Builder opens and deletes the wrong signal when two signal types share a name
- [#5434](https://github.com/vllm-project/semantic-router/issues/5434) [Bug] Envoy image smoke checks fail on Podman with stdio chown permission errors
- [#6049](https://github.com/vllm-project/semantic-router/issues/6049) [Feature] vSR: let the /vsr pane scroll through every decision it keeps
- [#6297](https://github.com/vllm-project/semantic-router/issues/6297) [Bug] A guard reads a long message's windows in one call, so a deadline leaves none read and best_effort never applies
- [#6298](https://github.com/vllm-project/semantic-router/issues/6298) [Bug] The vela3_d3 sizes answer the jailbreak and harm guards on their trained adapters, which lose attacks the base model refuses
- [#6291](https://github.com/vllm-project/semantic-router/issues/6291) [Bug] A streamed request with stream_options never falls back behind Envoy
- [#6273](https://github.com/vllm-project/semantic-router/issues/6273) [Feature] Trust a private CA for https chat backends, in Envoy and the Router
- [#6274](https://github.com/vllm-project/semantic-router/issues/6274) [Feature] Forward allowlisted client request headers on fallback attempts and remote deployment calls
- [#6279](https://github.com/vllm-project/semantic-router/issues/6279) [Bug] vLLM's serving metadata fails Chat replies and every vLLM-Omni stream (metrics, weight_versions, modality)

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*