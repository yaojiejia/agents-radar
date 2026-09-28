# 📡 AI Ecosystem Digest — 2026-09-28

> Generated 2026-09-28 01:26 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 148,352 | 17 | 17 | 0 | 0 |
| [OpenAI Codex](https://github.com/openai/codex) | 126,778 | 15 | 2 | 34 | 5 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 107,166 | 0 | 0 | 0 | 0 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,216 | 1 | 28 | 0 | 1 |
| [OpenCode](https://github.com/anomalyco/opencode) | 210,431 | 29 | 8 | 0 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 28,170 | 30 | 12 | 3 | 0 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 390,662 | 89 | 25 | 106 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 249,510 | 22 | 9 | 3 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 92,807 | 20 | 19 | 21 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 36,491 | 12 | 12 | 52 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 129,719 | 7 | 15 | 18 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 181,818 | 6 | 2 | 0 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 59,734 | 28 | 19 | 35 | 0 |
| [Unsloth](https://github.com/unslothai/unsloth) | 76,880 | 5 | 12 | 78 | 1 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,115 | 4 | 0 | 3 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 5,930 | 13 | 8 | 2 | 1 |

---

## ✨ Highlights

- **Ollama** released version 0.34.4, addressing various issues in its llama-server backend.
- **OpenAI Codex** had multiple releases including rust-v0.159.0-alpha.9 and rust-v0.158.0-alpha.15.3, showcasing ongoing enhancements.
- **OpenClaw** merged PR [#160007](https://github.com/openclaw/openclaw/pull/160007), which fixes plugin SDK closure issues to improve stability.
- **Qwen Code** received three significant merged PRs, including [#12840](https://github.com/QwenLM/qwen-code/pull/12840) that implements event replay capabilities.
- **OpenClaw** faces a critical new issue with 25 comments regarding HTTP 500 errors when embedding child exits.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 148,352 · **Open issues:** 13,356 · **Last push:** 3h ago

On September 28, 2026, there were no new releases or merged pull requests in the Claude Code ecosystem, indicating a day of routine maintenance. The focus turned to several newly reported issues, with notable mentions including #97701, which highlights a regression in the claude-bin functionality affecting session management, and #97716, concerning the non-triggering of the working directory change hook. Additionally, issues related to GitHub integration, such as #97723 and #97721, raised concerns about repo connections and functionality in chats. Other reported bugs, including #97715 about copy/paste functionality and #97714 regarding tab management, suggest ongoing usability challenges within the platform.

#### 🐛 New Issues
- [#97716](https://github.com/anthropics/claude-code/issues/97716) [Bug] Working directory change hook not triggering `bug` `platform:windows` `area:hooks` `needs-repro` 💬1
- [#97701](https://github.com/anthropics/claude-code/issues/97701) claude-bin --channels churns sessions and repeatedly kills the plugin MCP server (2.1.283 regression) `bug` `has repro` `platform:macos` `area:mcp` 💬1
- [#97723](https://github.com/anthropics/claude-code/issues/97723) [GitHub integration] Can't add GitHub repo to claude.ai chats `invalid` `github-integration`
- [#97722](https://github.com/anthropics/claude-code/issues/97722) [BUG] /resume inside a running session keeps stale CLAUDE.md and auto-memory context (claude --resume and /clear reload it) `bug` `has repro` `platform:macos` `area:core`
- [#97721](https://github.com/anthropics/claude-code/issues/97721) [GitHub integration] Can't connect to repos in other orgs `duplicate` `enhancement` `github-integration`
- [#97720](https://github.com/anthropics/claude-code/issues/97720) [FEATURE] no-ncurses cli interface `enhancement` `area:tui` `area:cli`
- [#97719](https://github.com/anthropics/claude-code/issues/97719) [Bug] Anthropic API Error: False positive cyber safeguard flag on legitimate traffic management product spec `bug` `duplicate` `platform:windows` `area:model`
- [#97718](https://github.com/anthropics/claude-code/issues/97718) [BUG] Opened `.md` in formatted view: text is selectable but "copy" only copies the file/path, not the selection `bug` `platform:windows` `area:ui` `area:desktop`
- [#97717](https://github.com/anthropics/claude-code/issues/97717) [Bug] Anthropic API Error: Safeguards flagged message with Claude 3.5 Sonnet `bug` `duplicate` `platform:macos` `area:model`
- [#97715](https://github.com/anthropics/claude-code/issues/97715) [BUG] `/bug` opens modally and blocks copy/paste from the Claude app `bug` `platform:macos` `area:tui`
- [#97714](https://github.com/anthropics/claude-code/issues/97714) [BUG] Manually dragging a tab from one Claude group to another does nothing `bug` `platform:windows` `area:chrome`
- [#97713](https://github.com/anthropics/claude-code/issues/97713) [BUG] Using Chrome's **Ungroup** on a Claude-created tab group has no effect — the group and its tabs are unchanged. `bug` `platform:windows` `area:browser-extension` `area:chrome`
- [#97712](https://github.com/anthropics/claude-code/issues/97712) [GitHub integration] `invalid` `github-integration`
- [#97711](https://github.com/anthropics/claude-code/issues/97711) /simplify skill is undocumented and has no changelog/release-note entry `documentation` `enhancement` `area:skills`
- [#97710](https://github.com/anthropics/claude-code/issues/97710) I don't have enough information in your bug report to generate a meaningful GitHub issue title. The details provided only contain a request ID and message ID without describing the actual problem encountered. To help you create an issue, please provide: - `bug` `duplicate` `platform:linux` `area:tui`
- [#97709](https://github.com/anthropics/claude-code/issues/97709) [BUG] Resume labels an unanswered AskUserQuestion as "User declined to answer questions" `bug` `has repro` `platform:windows` `area:tui`
- [#97708](https://github.com/anthropics/claude-code/issues/97708) [BUG] VS Code extension: opening conversations repeatedly creates empty "Untitled" sessions `bug` `platform:macos` `area:ide` `platform:vscode`

#### 🔒 Closed Issues
- [#76238](https://github.com/anthropics/claude-code/issues/76238) [Bug] MCP allowlisted tools still trigger permission prompt on fresh session
- [#76606](https://github.com/anthropics/claude-code/issues/76606) [BUG] Prompt cache invalidated by rewrites of messages in long sessions
- [#76584](https://github.com/anthropics/claude-code/issues/76584) Compaction summary records partial stdout from timed-out commands as confirmed results
- [#76490](https://github.com/anthropics/claude-code/issues/76490) Bash permission allow-list rules fail to match Windows drive-letter paths
- [#76233](https://github.com/anthropics/claude-code/issues/76233) [BUG] Cowork "Add folder" rejects Google Drive Mirror root (~/My Drive) as a "protected location" — regression
- [#76185](https://github.com/anthropics/claude-code/issues/76185) Headless -p session leaks to 10-15GB RSS while idle on long-running background Bash tasks (v2.1.205, Linux)
- [#76510](https://github.com/anthropics/claude-code/issues/76510) [BUG] Claude Desktop installation fails - Administrator access required (Cowork) on Windows 11 Pro Build 26200
- [#76239](https://github.com/anthropics/claude-code/issues/76239) SDK headless: MCP tools silently missing on first turn when stdio server startup is slower than the (new) non-blocking pre-wait — regression for single-turn sessions since CLI 2.1.144
- [#76607](https://github.com/anthropics/claude-code/issues/76607) Task list shows parent session's model for subagents, misleading after automatic model fallback
- [#76535](https://github.com/anthropics/claude-code/issues/76535) [BUG] Message send aborts when installed_plugins.json is missing (LocalPluginsReader throws inside sendMessage)
- [#76495](https://github.com/anthropics/claude-code/issues/76495) [Bug] Checklist task progress indicators not updating during multi-task execution
- [#91699](https://github.com/anthropics/claude-code/issues/91699) CLAUDE.md @import cascades into plain relative-path mentions inside imported files, ignoring non-`@` syntax and "do not auto-load" notes
- [#88078](https://github.com/anthropics/claude-code/issues/88078) [BUG]
- [#88077](https://github.com/anthropics/claude-code/issues/88077) Rewind: disabling fileCheckpointingEnabled also removes both Summarize options
- [#76501](https://github.com/anthropics/claude-code/issues/76501) PreToolUse hook on mcp__ccd_session_mgmt__archive_session doesn't fire when archiving via the in-app session list
- [#76496](https://github.com/anthropics/claude-code/issues/76496) [BUG] preview_start" fails to find .claude/launch.json inside nested git worktree (.claude/worktrees/<name>/)
- [#76499](https://github.com/anthropics/claude-code/issues/76499) Custom sub-agents intermittently missing from 'Available agent types' despite valid .md files

### OpenAI Codex (`openai/codex`)

**Stars:** 126,778 · **Open issues:** 19,228 · **Last push:** <1h ago

On September 28, 2026, multiple releases of the Rust versions were made, with the notable release of rust-v0.159.0-alpha.11. Among the merged pull requests, significant updates include the addition of a history-aware prewarming feature for idle threads and enhancements to the TUI interface, such as showing short turn durations and preserving punctuation in Mermaid labels. Additionally, a fix was implemented to improve the SGR mouse reporting for Windows terminal capture. However, several new issues emerged, notably the inability to scroll while the "Implement this plan" question selector is open, which has already garnered attention from users.

#### 🚀 New Releases
- [rust-v0.159.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.159.0-alpha.9) 0.159.0-alpha.9
- [rust-v0.159.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.159.0-alpha.8) 0.159.0-alpha.8
- [rust-v0.159.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.159.0-alpha.11) 0.159.0-alpha.11
- [rust-v0.159.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.159.0-alpha.10) 0.159.0-alpha.10
- [rust-v0.158.0-alpha.15.3](https://github.com/openai/codex/releases/tag/rust-v0.158.0-alpha.15.3) 0.158.0-alpha.15.3

#### ✅ Merged PRs
- [#48830](https://github.com/openai/codex/pull/48830) Show a short, neutral TUI interruption notice
- [#48829](https://github.com/openai/codex/pull/48829) Wait briefly for the Windows sandbox provisioning service to start
- [#48828](https://github.com/openai/codex/pull/48828) Allow archiving threads before their first turn
- [#48827](https://github.com/openai/codex/pull/48827) Show a hand pointer over transcript links in Ghostty and Kitty
- [#48824](https://github.com/openai/codex/pull/48824) Keep voice RTP timestamps aligned to 20 ms packets
- [#48819](https://github.com/openai/codex/pull/48819) Use explicit histogram buckets for tool and skill context metrics
- [#48814](https://github.com/openai/codex/pull/48814) Preserve punctuation and semicolons in Mermaid labels
- [#48812](https://github.com/openai/codex/pull/48812) Add history-aware prewarming for idle threads
- [#48807](https://github.com/openai/codex/pull/48807) Show short turn durations in TUI completion footers
- [#48805](https://github.com/openai/codex/pull/48805) Allow transcript wheel scrolling while a modal is open
- [#48800](https://github.com/openai/codex/pull/48800) Use the terminal palette for ordered Markdown list markers
- [#48799](https://github.com/openai/codex/pull/48799) Fix SGR mouse reporting for Windows terminal capture
- [#48796](https://github.com/openai/codex/pull/48796) Add opt-in structured errors for Guardian circuit-breaker interruptions
- [#48783](https://github.com/openai/codex/pull/48783) Add single-server MCP status discovery with thread connection reuse
- [#48779](https://github.com/openai/codex/pull/48779) Preserve independent Guardian history across parent compaction
- [#48776](https://github.com/openai/codex/pull/48776) Remove the `current` badge from TUI task rows
- [#48775](https://github.com/openai/codex/pull/48775) Match pinned transcript headers to the original prompt style
- [#48772](https://github.com/openai/codex/pull/48772) Fix Unix socket connections through long symlink paths
- [#48764](https://github.com/openai/codex/pull/48764) Preserve MCP app resource URIs without defaulting display mode
- [#48761](https://github.com/openai/codex/pull/48761) Show hidden output line counts in compact terminal activity
- [#48757](https://github.com/openai/codex/pull/48757) Match TUI status shimmer timing to desktop headers
- [#48754](https://github.com/openai/codex/pull/48754) Render `/status` without borders and wrap long values
- [#48727](https://github.com/openai/codex/pull/48727) Centralize executable fixture creation to avoid Linux ETXTBSY races
- [#48725](https://github.com/openai/codex/pull/48725) Retain confirmed Code Mode messages for Guardian reviews
- [#48724](https://github.com/openai/codex/pull/48724) Prevent Linux ETXTBSY races in MCP stdio tests
- [#48686](https://github.com/openai/codex/pull/48686) Remove WebSocket headers and tool payloads from info logs
- [#48646](https://github.com/openai/codex/pull/48646) Fix the session-start helper call in the command center test
- [#48643](https://github.com/openai/codex/pull/48643) Set the provisioned macOS CLI bundle name to ChatGPT
- [#48628](https://github.com/openai/codex/pull/48628) Preserve blank TUI sessions when switching tasks
- [#48626](https://github.com/openai/codex/pull/48626) Stop showing previous-session summaries when switching TUI sessions
- [#48623](https://github.com/openai/codex/pull/48623) Preserve empty Markdown list markers in the TUI
- [#48621](https://github.com/openai/codex/pull/48621) Remove follow-up prompt suggestions from the TUI
- [#48611](https://github.com/openai/codex/pull/48611) Centralize persistent mode enablement checks
- [#48604](https://github.com/openai/codex/pull/48604) Remove the bundled `plugin-creator` skill

#### 🐛 New Issues
- [#48703](https://github.com/openai/codex/issues/48703) [Rider][Terminal] Plan mode choose block terminal scroll `bug` `TUI` `CLI` `plan` 💬3
- [#48794](https://github.com/openai/codex/issues/48794) Unable to scroll up / down while the "Implement this plan" question selector is opened. `bug` `TUI` `CLI` `plan` 💬2
- [#48826](https://github.com/openai/codex/issues/48826) [Windows] Console windows flash during shell execution in 0.157.1; does not occur in 0.155.1 `bug` `windows-os` `CLI` `tool-calls` 💬1
- [#48820](https://github.com/openai/codex/issues/48820) Unable to launch Windows app: failed to load workspace requirements `bug` `windows-os` `app` 💬2
- [#48832](https://github.com/openai/codex/issues/48832) [Windows] Codex desktop app stuck on endless loading spinner after update `bug` `windows-os` `app` 💬1
- [#48822](https://github.com/openai/codex/issues/48822) Codex won't load after latest upgrade `bug` `windows-os` `app` 💬1
- [#48823](https://github.com/openai/codex/issues/48823) [Bug] Table hover controls overlap and obscure table content `bug` `app` 💬1
- [#48818](https://github.com/openai/codex/issues/48818) Windows Desktop 26.924.2738.0: 'Unable to load organization settings' on clean install, ChatGPT Web works `bug` `windows-os` `app` `connectivity` 💬1
- [#48817](https://github.com/openai/codex/issues/48817) GPT-6 Sol/Luna/Astra falsely reject benign prompts with Invalid prompt safety error `bug` `model-behavior` `CLI` 💬1
- [#48816](https://github.com/openai/codex/issues/48816) Composer hard-disabled by ChatGPT subscription rate limit even when model traffic is routed to a custom provider (`openai_base_url`) `bug` `rate-limits` `custom-model` `app` 💬1
- [#48815](https://github.com/openai/codex/issues/48815) [Windows][Codex App] Computer Use - SOL and Luna still fails unlike Astra `bug` `model-behavior` `windows-os` `app` 💬1
- [#48831](https://github.com/openai/codex/issues/48831) CLI: automatically relaunch after accepting the startup update prompt `enhancement` `CLI`
- [#48825](https://github.com/openai/codex/issues/48825) [macOS] All previous Codex projects and conversations missing after ChatGPT app update and 401 errors `bug` `auth` `app` `connectivity`
- [#48685](https://github.com/openai/codex/issues/48685) Stream disconnected error. Possibly related to auto-compaction. `bug` `windows-os` `context` `app`
- [#48821](https://github.com/openai/codex/issues/48821) Requesting approval when on full access `bug` `windows-os` `sandbox` `app`

#### 🔒 Closed Issues
- [#48326](https://github.com/openai/codex/issues/48326) 4 warnings in the TUI that never clear
- [#41735](https://github.com/openai/codex/issues/41735) Codex Desktop finalizes ordinary task despite explicit unfinished-work gate and active required lanes

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,216 · **Open issues:** 2,203 · **Last push:** 21h ago

On September 28, 2026, GitHub Copilot CLI released version 1.0.89-5, introducing several enhancements including left-click support for `ask_user` and elicitation form inputs, improved focus and cursor placement, and the integration of Claude Code rule files as custom instructions in the `.claude/rules` directory. Additionally, sessions in the sidebar now indicate pending user interaction with a blue dot, enhancing usability. No pull requests were merged in the last 24 hours, but a notable new issue was opened: #4977, concerning bundled ripgrep aborts with jemalloc on 16KB-page ARM64 kernels running Asahi Linux, highlighting a compatibility concern for users on that platform.

#### 🚀 New Releases
- [v1.0.89-5](https://github.com/github/copilot-cli/releases/tag/v1.0.89-5) 1.0.89-5

#### 🐛 New Issues
- [#4977](https://github.com/github/copilot-cli/issues/4977) Bundled ripgrep aborts with jemalloc 'Unsupported system page size' on 16KB-page ARM64 kernels (Asahi Linux) `triage`

#### 🔒 Closed Issues
- [#1305](https://github.com/github/copilot-cli/issues/1305) Support CIMD for Remote OAuth MCP Servers
- [#1697](https://github.com/github/copilot-cli/issues/1697) Session forking — branch a conversation into parallel sessions with shared context
- [#2285](https://github.com/github/copilot-cli/issues/2285) [Bug] Copying commands from copilot cli includes invisible characters, causing "command not found" in external terminal
- [#2551](https://github.com/github/copilot-cli/issues/2551) copilot cli error while using opus 4.5 and sonnet 4.5
- [#2033](https://github.com/github/copilot-cli/issues/2033) Markdown links not converted to OSC 8 hyperlinks — trailing ) appended to URL on click
- [#3307](https://github.com/github/copilot-cli/issues/3307) runtime.node missing from prebuilds/win32-arm64 in 1.0.48-0
- [#3195](https://github.com/github/copilot-cli/issues/3195) AssistantMessageDeltaEvent and AssistantReasoningEvent not triggered due to unhandled reasoning field from BYOK providers (Copilot CLI)
- [#2075](https://github.com/github/copilot-cli/issues/2075) Agents able to make edits in plan mode
- [#3125](https://github.com/github/copilot-cli/issues/3125) MCP tools/list_changed notification: updated tools not visible to the model until the next user turn
- [#3055](https://github.com/github/copilot-cli/issues/3055) Execution timer for `shell` tool
- [#3027](https://github.com/github/copilot-cli/issues/3027) @files fails on directories with too many files
- [#2817](https://github.com/github/copilot-cli/issues/2817) MCP server processes not killed on CLI exit
- [#1977](https://github.com/github/copilot-cli/issues/1977) "Remaining reqs." shows negative number, after setting up budget for premium requests
- [#1879](https://github.com/github/copilot-cli/issues/1879) MCP SEP-986 tool name format specification not followed
- [#3335](https://github.com/github/copilot-cli/issues/3335) Some Copilot CLI base instructions issued to a subagent prevent it from writing output to a file
- [#2985](https://github.com/github/copilot-cli/issues/2985) grep tool times out on large repos before returning any results
- [#4707](https://github.com/github/copilot-cli/issues/4707) Add setting option to disable the scrollbar
- [#4623](https://github.com/github/copilot-cli/issues/4623) Gemini models fail with 400 for any MCP tool whose array `items` has a union type (e.g. ["object","null"]); GPT/Claude unaffected
- [#4455](https://github.com/github/copilot-cli/issues/4455) Session picker: selected-but-inactive row is indistinguishable from other inactive rows (low contrast)
- [#1319](https://github.com/github/copilot-cli/issues/1319) Add CTRL-K multiple line delete
- [#4147](https://github.com/github/copilot-cli/issues/4147) High priority: bare left/right arrow hijacks cursor key for session navigation, discarding in-progress input (data loss)
- [#3853](https://github.com/github/copilot-cli/issues/3853) /pr auto misses review threads
- [#3097](https://github.com/github/copilot-cli/issues/3097) Pasting long strings into chat inserts extra newline characters, corrupting the content
- [#2775](https://github.com/github/copilot-cli/issues/2775) Agent gets stuck when canceling sub-agent tasks
- [#2649](https://github.com/github/copilot-cli/issues/2649) Session resume fails when tool.execution_complete writes raw multiline content into events.jsonl
- [#2439](https://github.com/github/copilot-cli/issues/2439) Not possible to select a skill from the suggestion list
- [#2397](https://github.com/github/copilot-cli/issues/2397) Shell tool environment does not inherit user PATH - Nix-managed binaries unavailable in sessions
- [#1543](https://github.com/github/copilot-cli/issues/1543) Bug: Agent exits plan mode and modifies code without user permission

### OpenCode (`anomalyco/opencode`)

**Stars:** 210,431 · **Open issues:** 6,244 · **Last push:** 3h ago

There were no new releases or merged pull requests for OpenCode over the last 24 hours, indicating a routine maintenance day. However, several new issues were reported, including a request for a feature to "Reopen Closed Tab" (#51717) and a bug relating to the OpenCode Go subscription not functioning in the Desktop App, which generates errors about invalid credentials and insufficient account funds (#51689). Additionally, users flagged issues with LaTeX math not rendering in chat messages (#51725) and a malfunction in the Bug Tool when the assistant content is null (#51661). The community remains engaged with multiple discussions surrounding these concerns, highlighting the ongoing need for refinement and enhancement of the platform.

#### 🐛 New Issues
- [#51717](https://github.com/anomalyco/opencode/issues/51717) [FEATURE]: Small suggestion: Reopen Closed Tab `needs:compliance` 💬4
- [#51723](https://github.com/anomalyco/opencode/issues/51723) Inline code with a slash (e.g. `write/edit`) is treated as a clickable file path 💬3
- [#51689](https://github.com/anomalyco/opencode/issues/51689) OpenCode Go subscription not working in Desktop App: "Invalid credential" / "Insufficient account funds" and Go badges disappear 💬3
- [#51661](https://github.com/anomalyco/opencode/issues/51661) Bug Tool calls fail when assistant content is null 💬3
- [#51731](https://github.com/anomalyco/opencode/issues/51731) Location shutdown does not close its MCP servers, so reloads leave old stdio processes running 💬2
- [#51718](https://github.com/anomalyco/opencode/issues/51718) Fase 6: artifacts de primeira classe com comentários humanos 💬2
- [#51725](https://github.com/anomalyco/opencode/issues/51725) chat: LaTeX math ($...$) is not rendered in messages 💬1
- [#51702](https://github.com/anomalyco/opencode/issues/51702) Support Mermaid preview for Opencode Desktop 💬2
- [#51696](https://github.com/anomalyco/opencode/issues/51696) cli: unknown subcommand prints help with no error or did-you-mean suggestion 💬2
- [#51747](https://github.com/anomalyco/opencode/issues/51747) core/session: incomplete summary accepted as successful compaction and advances history boundary `needs:compliance` 💬1
- [#51748](https://github.com/anomalyco/opencode/issues/51748) desktop: per-window permission handler on a shared Electron session gets overwritten 💬1
- [#51746](https://github.com/anomalyco/opencode/issues/51746) core/session: input can stay unconsumed in inbox if the process exits between enqueue and claim `needs:compliance` 💬1
- [#51745](https://github.com/anomalyco/opencode/issues/51745) cli: retained-image hardlink failure silently disables install-replacement protection on Windows `needs:compliance` 💬1
- [#51744](https://github.com/anomalyco/opencode/issues/51744) cli: service stop can signal an unrelated process after PID reuse `needs:compliance` 💬1
- [#51742](https://github.com/anomalyco/opencode/issues/51742) auto-update: 2.0.6 shipped ad-hoc-signed binary; macOS 27 taskgate-kills it when SSH-launched 💬1
- [#51738](https://github.com/anomalyco/opencode/issues/51738) Tab preview popover opens after 2s, 5x slower than our own tooltips 💬1
- [#51740](https://github.com/anomalyco/opencode/issues/51740) Session tab preview shows the same project name for every tab, ignoring the session's directory 💬1
- [#51739](https://github.com/anomalyco/opencode/issues/51739) providers: models.dev catalog yields no models for any provider except built-in opencode `needs:compliance` 💬1
- [#51737](https://github.com/anomalyco/opencode/issues/51737) providers: env-authenticated google/groq/openrouter models never resolve — "Model unavailable" 💬1
- [#51735](https://github.com/anomalyco/opencode/issues/51735) V2 TUI: OSC 8 link support missing when using Zellij + Ghostty 💬1
- [#51728](https://github.com/anomalyco/opencode/issues/51728) [FEATURE]: OC2 - Steering or queueing should be per prompt decision, not global setting `needs:compliance` 💬1
- [#51727](https://github.com/anomalyco/opencode/issues/51727) tui: long bare URLs wrap across lines and are not clickable 💬1
- [#51726](https://github.com/anomalyco/opencode/issues/51726) openrouter: Anthropic models still get no prompt caching by default in `opencode run` (#39009 not fully fixed) 💬1
- [#51720](https://github.com/anomalyco/opencode/issues/51720) [FEATURE]: Add MiniMax Token Plan OAuth and simplify connection options 💬1
- [#51721](https://github.com/anomalyco/opencode/issues/51721) Stuck while window is minimized 💬1
- [#51672](https://github.com/anomalyco/opencode/issues/51672) Worktree created by a plugin strategy resolves to a new project when the project has no .git/.hg 💬1
- [#51716](https://github.com/anomalyco/opencode/issues/51716) ACP: `opencode acp` stays alive after its private server dies and every request fails with a generic -32603 💬1
- [#51715](https://github.com/anomalyco/opencode/issues/51715) [FEATURE]: Symbol-based operations for the `lsp` tool 💬1
- [#51724](https://github.com/anomalyco/opencode/issues/51724) [FEATURE]: Document local authentication for the V2 service API (service.json + auth scheme)

#### 🔒 Closed Issues
- [#51717](https://github.com/anomalyco/opencode/issues/51717) [FEATURE]: Small suggestion: Reopen Closed Tab
- [#51415](https://github.com/anomalyco/opencode/issues/51415) Attention sound plays once per open TUI window, overlapping into a chorus
- [#51731](https://github.com/anomalyco/opencode/issues/51731) Location shutdown does not close its MCP servers, so reloads leave old stdio processes running
- [#51718](https://github.com/anomalyco/opencode/issues/51718) Fase 6: artifacts de primeira classe com comentários humanos
- [#44447](https://github.com/anomalyco/opencode/issues/44447) Big Pickle Now Frustrating to Use
- [#51702](https://github.com/anomalyco/opencode/issues/51702) Support Mermaid preview for Opencode Desktop
- [#51696](https://github.com/anomalyco/opencode/issues/51696) cli: unknown subcommand prints help with no error or did-you-mean suggestion
- [#51728](https://github.com/anomalyco/opencode/issues/51728) [FEATURE]: OC2 - Steering or queueing should be per prompt decision, not global setting

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 28,170 · **Open issues:** 1,506 · **Last push:** <1h ago

On September 28, 2026, there were no new releases for Qwen Code. However, several significant pull requests were merged, including the implementation of event replay in the managed-agent under PR #12840 and efforts to address deferred follow-ups in PRs #12864 and #12863. A notably pressing new issue was reported as #12826, where Webview crashes with CodeMirror EditorView.update were caused by a race condition involving @file references in version 0.24.6 with Remote-SSH. Despite the routine nature of the day's updates, the persistent problems and breakthroughs in testing and feature development highlight ongoing improvements within the ecosystem.

#### ✅ Merged PRs
- [#12864](https://github.com/QwenLM/qwen-code/pull/12864) test(managed-agent): Close the deferred Hosted no-tool gate follow-ups
- [#12840](https://github.com/QwenLM/qwen-code/pull/12840) feat(managed-agent): Implement event replay (Stage D3)
- [#12863](https://github.com/QwenLM/qwen-code/pull/12863) test(managed-agent): Close deferred H0b record contract follow-ups

#### 🐛 New Issues
- [#12826](https://github.com/QwenLM/qwen-code/issues/12826) Webview crashes with CodeMirror EditorView.update race condition when using @file references (0.24.6, Remote-SSH) `priority/P1` `type/bug` `category/ui` `scope/web-shell` 💬7
- [#12856](https://github.com/QwenLM/qwen-code/issues/12856) Aux-model selectors persist a NUL-separated baseUrl that every public surface emits verbatim `priority/P2` `type/bug` `category/configuration` `category/security` 💬5
- [#12853](https://github.com/QwenLM/qwen-code/issues/12853) follow-up(memory): resolve non-blocking review debt after #10183 `priority/P3` `category/core` `scope/memory` `type/enhancement` 💬5
- [#12835](https://github.com/QwenLM/qwen-code/issues/12835) Skills listing is injected even when the Skill tool is excluded `priority/P2` `type/bug` `category/core` `roadmap/context-performance` 💬5
- [#12874](https://github.com/QwenLM/qwen-code/issues/12874) 右側擴展區面板開啟後無法關閉（toggle 按鈕失效） `priority/P2` `type/bug` `category/ui` `scope/macos` 💬4
- [#12859](https://github.com/QwenLM/qwen-code/issues/12859) runtime-broker: fastjson2 2.0.65 makes accepted negative-scale decimals unreadable after JDBC persistence `priority/P2` `type/bug` `category/core` `scope/sdk` 💬4
- [#12829](https://github.com/QwenLM/qwen-code/issues/12829) fix(cua-sdk): honor proxy configuration when downloading the native payload `priority/P2` `type/bug` `category/integration` `scope/installation` 💬4
- [#12844](https://github.com/QwenLM/qwen-code/issues/12844) fix(cli): `qwen mcp reconnect` sends a usage-statistics session_start even when usage statistics are disabled `priority/P2` `type/bug` `category/telemetry` `scope/mcp` 💬4
- [#12852](https://github.com/QwenLM/qwen-code/issues/12852) telemetry: isExcludedByNoProxy mirrors undici's NO_PROXY grammar with no parity coverage and no injectable env `priority/P3` `status/blocked` `category/telemetry` `scope/testing` 💬4
- [#12832](https://github.com/QwenLM/qwen-code/issues/12832) Add an optional ScreenContextAgent MCP tool example `status/need-information` `priority/P3` `type/feature-request` `category/integration` 💬4
- [#12825](https://github.com/QwenLM/qwen-code/issues/12825) Batch translations can omit sections under stop while collect reports delivered `priority/P2` `category/cli` `scope/commands` `type/enhancement` 💬4
- [#12860](https://github.com/QwenLM/qwen-code/issues/12860) Extension startup: surface exhaustion failures and evaluate retry concurrency `priority/P3` `status/blocked` `category/core` `scope/non-interactive` 💬3
- [#12823](https://github.com/QwenLM/qwen-code/issues/12823) test(managed-agent): Close deferred Hosted no-tool gate follow-ups `priority/P2` `category/development` `scope/windows` `scope/testing` 💬3
- [#12878](https://github.com/QwenLM/qwen-code/issues/12878) Ollama rejects zero-argument tools because the parameters field is omitted `priority/P2` `type/bug` `category/core` `scope/content-generation` 💬3
- [#12877](https://github.com/QwenLM/qwen-code/issues/12877) Desktop release matrix: the arm64 runner's glibc floor (ubuntu-22.04-arm) has no test witness `priority/P2` `type/bug` `category/development` `scope/github-actions` 💬3
- [#12872](https://github.com/QwenLM/qwen-code/issues/12872) test(managed-agent): Stage F fault gates FG6 for the Hosted tool turn `priority/P2` `type/feature-request` `category/integration` `scope/testing` 💬3
- [#12846](https://github.com/QwenLM/qwen-code/issues/12846) test(managed-agent): Close deferred H0b record contract follow-ups `priority/P2` `category/development` `scope/testing` `scope/documentation` 💬3
- [#12866](https://github.com/QwenLM/qwen-code/issues/12866) cross-session messaging: five surfaces still state the settings-only reachability rule after #9845 `priority/P3` `status/blocked` `type/documentation` `category/cli` 💬3
- [#12867](https://github.com/QwenLM/qwen-code/issues/12867) feat(managed-agent): Stage D follow-ups for durable lifecycle, Turns, Actions, durable admission and AgentDefinition `priority/P2` `type/feature-request` `category/core` `scope/session-management` 💬3
- [#12847](https://github.com/QwenLM/qwen-code/issues/12847) feat(managed-agent): Track the task contract gaps deferred from the H0a review `priority/P2` `type/feature-request` `category/core` `scope/testing` 💬3
- [#12849](https://github.com/QwenLM/qwen-code/issues/12849) Follow up on deferred task-output review suggestions from #10906 `priority/P3` `category/core` `scope/components` `scope/testing` 💬3
- [#12843](https://github.com/QwenLM/qwen-code/issues/12843) /cd 功能 无法正常使用 v0.24.6版本切换会话工作目录 `status/need-information` `priority/P1` `type/bug` `category/cli` 💬3
- [#12827](https://github.com/QwenLM/qwen-code/issues/12827) feat(managed-agent): Stage H extension runtime, starting with H0 shared records and the task contract `priority/P2` `type/feature-request` `category/core` `scope/session-management` 💬3
- [#12820](https://github.com/QwenLM/qwen-code/issues/12820) telemetry: QwenLogger RUM uploads ignore NO_PROXY, so extension lifecycle events are proxied through an explicitly excluded proxy `priority/P2` `type/bug` `category/telemetry` `scope/data-privacy` 💬3
- [#12880](https://github.com/QwenLM/qwen-code/issues/12880) Release Failed for v0.24.6-nightly.20260927.3f5ae3ffeb on 2026-09-27 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#12871](https://github.com/QwenLM/qwen-code/issues/12871) Main CI failed: E2E Tests — cli/acp-integration.test.ts > … > should work with new --acp flag without warnings `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#12845](https://github.com/QwenLM/qwen-code/issues/12845) Deferred review findings from PR #11071: fix(channels): clean up owned workers after config loss 💬2
- [#12814](https://github.com/QwenLM/qwen-code/issues/12814) Deferred review findings from PR #12773: fix(cli): pin fast model to the selected provider endpoint 💬2
- [#12882](https://github.com/QwenLM/qwen-code/issues/12882) Main CI failed: Qwen Code CI — src/kernel-manager.test.ts > … > recovers from 'a blocked event loop after an asynchr…' within a bounded canc… `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#12842](https://github.com/QwenLM/qwen-code/issues/12842) Deferred review findings from PR #8838: fix(cli): persist scheduled cron prompts 💬1

#### 🔒 Closed Issues
- [#12826](https://github.com/QwenLM/qwen-code/issues/12826) Webview crashes with CodeMirror EditorView.update race condition when using @file references (0.24.6, Remote-SSH)
- [#12793](https://github.com/QwenLM/qwen-code/issues/12793) feat(managed-agent): Stage D public API contract, generated DTOs, Session query and event replay
- [#12802](https://github.com/QwenLM/qwen-code/issues/12802) standalone-update: an aged .deferred marker blocks updates forever, and rollbackStandaloneUpdate's lock-liveness direction is unpinned
- [#12728](https://github.com/QwenLM/qwen-code/issues/12728) test(managed-agent): verify Hosted no-tool real processes and add a CI gate
- [#12823](https://github.com/QwenLM/qwen-code/issues/12823) test(managed-agent): Close deferred Hosted no-tool gate follow-ups
- [#12846](https://github.com/QwenLM/qwen-code/issues/12846) test(managed-agent): Close deferred H0b record contract follow-ups
- [#8909](https://github.com/QwenLM/qwen-code/issues/8909) bug(serve): cold load/resume can use the wrong runtime storage in multi-workspace mode
- [#12782](https://github.com/QwenLM/qwen-code/issues/12782) Runtime Broker: whole-second lease clock expires 1 s test leases at second boundaries (flaky ManagedContextRecoveryTest)
- [#4000](https://github.com/QwenLM/qwen-code/issues/4000) feat(cli): redesign /commit slash command to leverage AI for commit message drafting
- [#12762](https://github.com/QwenLM/qwen-code/issues/12762) managed-agent-server Flyway schema drifts from the Runtime Broker's JDBC schema; the Broker fails on MySQL once enabled
- [#10152](https://github.com/QwenLM/qwen-code/issues/10152) follow-up(web-shell): harden Skill settings toggle UX and coverage
- [#8271](https://github.com/QwenLM/qwen-code/issues/8271) Add session branching with optional Git worktree isolation

### Claude Code Skills (`anthropics/skills`)

Top open skill PRs by community engagement:
- [#1298](https://github.com/anthropics/skills/pull/1298) fix(skill-creator): isolate trigger evals and handle Windows and runtime failures
- [#1742](https://github.com/anthropics/skills/pull/1742) fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers
- [#1771](https://github.com/anthropics/skills/pull/1771) feat(skills): add proofcore-contract-auditor for smart contract notarization
- [#1734](https://github.com/anthropics/skills/pull/1734) Detect orphaned docx comments
- [#1703](https://github.com/anthropics/skills/pull/1703) Add md2video-audio skill

_Quiet today: Gemini CLI_

---

## 🦞 OpenClaw Ecosystem

### OpenClaw (`openclaw/openclaw`)

**Stars:** 390,662 · **Open issues:** 8,788 · **Last push:** <1h ago

On September 28, 2026, there were no new releases for OpenClaw, but several key updates were merged into the codebase. Notable fixes included isolating Doctor fixtures from retention maintenance in PR #159992, resolving frozen plugin SDK closure issues in PR #160007, and improving health reports to show configured plugin failures as per PR #118013. Additionally, issues with managed Gateways and SQLite sharing errors were addressed, ensuring a more robust performance for users. Among the new issues, a significant concern was raised regarding Gateway memory sawtooth behavior reported in #159596, which highlighted a critical memory-pressure problem affecting the 2026.9.6 version.

#### ✅ Merged PRs
- [#159992](https://github.com/openclaw/openclaw/pull/159992) fix(test): isolate Doctor fixtures from retention maintenance
- [#160007](https://github.com/openclaw/openclaw/pull/160007) fix(release): respect frozen plugin SDK closures
- [#118013](https://github.com/openclaw/openclaw/pull/118013) fix(cli): show configured plugin failures in health reports
- [#157966](https://github.com/openclaw/openclaw/pull/157966) chore(qa): cover private operator key handoff
- [#159577](https://github.com/openclaw/openclaw/pull/159577) fix: recover managed Gateways after updates and repairs
- [#159347](https://github.com/openclaw/openclaw/pull/159347) fix(windows): recover Gateway restarts from SQLite sharing errors
- [#160008](https://github.com/openclaw/openclaw/pull/160008) chore(i18n): refresh native locales
- [#159650](https://github.com/openclaw/openclaw/pull/159650) fix(plugins): prevent WhatsApp Doctor failures after updates
- [#159881](https://github.com/openclaw/openclaw/pull/159881) refactor(gateway): read placement recovery facts through the state read worker
- [#159885](https://github.com/openclaw/openclaw/pull/159885) test(update): join state worker retirement before raw schema downgrade
- [#159996](https://github.com/openclaw/openclaw/pull/159996) fix(ci): keep upgrade recipes compatible with frozen targets
- [#159997](https://github.com/openclaw/openclaw/pull/159997) fix(ui): work logs split when tasks resume automatically
- [#159944](https://github.com/openclaw/openclaw/pull/159944) fix(state): retire stale workers before replacement admission
- [#153922](https://github.com/openclaw/openclaw/pull/153922) fix(ui): keep GitHub reference chips readable across themes
- [#159481](https://github.com/openclaw/openclaw/pull/159481) refactor(mcp): bind idle cleanup to the lifecycle scheduler
- [#159546](https://github.com/openclaw/openclaw/pull/159546) fix(workers): one network reset during the worker runtime download fails a cloud provision
- [#159964](https://github.com/openclaw/openclaw/pull/159964) fix(android): align Play Store icon with the app
- [#159986](https://github.com/openclaw/openclaw/pull/159986) fix(codex): settlement tests fail intermittently when seeded sessions start background maintenance
- [#159193](https://github.com/openclaw/openclaw/pull/159193) fix(update): complete already-current updates before service membership guards
- [#159961](https://github.com/openclaw/openclaw/pull/159961) improve(android): align icons and separate work pages from settings
- [#159890](https://github.com/openclaw/openclaw/pull/159890) fix(ios): stabilize native release qualification
- [#159959](https://github.com/openclaw/openclaw/pull/159959) fix(ci): gate plugin lease contention after child setup
- [#159970](https://github.com/openclaw/openclaw/pull/159970) fix: allow HTML widgets up to 10 MiB
- [#159419](https://github.com/openclaw/openclaw/pull/159419) fix(reset): remove canonical SQLite session history
- [#159169](https://github.com/openclaw/openclaw/pull/159169) fix(gateway): keep paired diagnostics working across SSH routes
- [#159341](https://github.com/openclaw/openclaw/pull/159341) fix(ui): scope deleted-session draft cleanup to its Gateway
- [#159973](https://github.com/openclaw/openclaw/pull/159973) fix(release): keep frozen onboarding validation compatible
- [#159447](https://github.com/openclaw/openclaw/pull/159447) fix(terminal): terminals fail on OpenClaw's Bun build when Node is not installed
- [#159932](https://github.com/openclaw/openclaw/pull/159932) feat(ui): put the conversation header in the native titlebar row
- [#159585](https://github.com/openclaw/openclaw/pull/159585) perf(gateway): reduce main-thread allocation for large history pages
- [#159981](https://github.com/openclaw/openclaw/pull/159981) fix(test): include manifest-only plugins in extension test plans
- [#159960](https://github.com/openclaw/openclaw/pull/159960) fix(ui): allow oversized PNG attachments
- [#159362](https://github.com/openclaw/openclaw/pull/159362) refactor(scripts): deslop scripts/lib
- [#159851](https://github.com/openclaw/openclaw/pull/159851) fix(whatsapp): restore media uploads through proxies
- [#158877](https://github.com/openclaw/openclaw/pull/158877) refactor(infra): deslop infra fourth pass
- [#159943](https://github.com/openclaw/openclaw/pull/159943) fix(subagents): keep completion recovery with its original owner
- [#158578](https://github.com/openclaw/openclaw/pull/158578) fix: PR mentions appear as unrelated session banners
- [#159439](https://github.com/openclaw/openclaw/pull/159439) chore(ci): catch Node spawns in Bun-only installs
- [#159910](https://github.com/openclaw/openclaw/pull/159910) fix(ui): restore the :has() lint guard and keep rail ticks out of its invalidation
- [#159969](https://github.com/openclaw/openclaw/pull/159969) chore(i18n): refresh native locales
- [#159657](https://github.com/openclaw/openclaw/pull/159657) fix(slack): keep top-level turns quiet and finish progress without "Working"
- [#159967](https://github.com/openclaw/openclaw/pull/159967) chore(ui): refresh control ui locales
- [#159726](https://github.com/openclaw/openclaw/pull/159726) refactor(codex): deslop Codex plugin fifth pass
- [#159963](https://github.com/openclaw/openclaw/pull/159963) test(update,doctor): remove low-value tests (batch d078)
- [#159694](https://github.com/openclaw/openclaw/pull/159694) fix(slack): let verified linked admins assign sessions from Slack
- [#159889](https://github.com/openclaw/openclaw/pull/159889) feat(users): merge duplicate user profiles
- [#159924](https://github.com/openclaw/openclaw/pull/159924) improve(ui): move table controls below content
- [#159398](https://github.com/openclaw/openclaw/pull/159398) refactor(tool-search): retire tool_search_code in favor of structured search and Code Mode
- [#159412](https://github.com/openclaw/openclaw/pull/159412) fix: restore first-run provider styling and API-key choices
- [#159955](https://github.com/openclaw/openclaw/pull/159955) fix(ui): keep late-growing replies above the dock after scrolling to the end
- [#159939](https://github.com/openclaw/openclaw/pull/159939) fix: keep runs alive when another user's identity scopes change
- [#159751](https://github.com/openclaw/openclaw/pull/159751) fix(ci): distinguish survivor recovery failure boundaries
- [#159920](https://github.com/openclaw/openclaw/pull/159920) fix(openai): keep SIWC credentials out of unsupported media requests
- [#159952](https://github.com/openclaw/openclaw/pull/159952) test(update,backup,doctor): remove low-value tests (batch d077)
- [#159284](https://github.com/openclaw/openclaw/pull/159284) fix(qa): keep Telegram round-trip checks on the exercised route
- [#159954](https://github.com/openclaw/openclaw/pull/159954) chore(ui): refresh control ui locales
- [#159842](https://github.com/openclaw/openclaw/pull/159842) refactor(channels): deslop Discord and Slack fourth pass
- [#159898](https://github.com/openclaw/openclaw/pull/159898) perf(sessions): shorten guarded transcript write holds
- [#159915](https://github.com/openclaw/openclaw/pull/159915) fix(ui): soften clipped sidebar and conversation edges
- [#159780](https://github.com/openclaw/openclaw/pull/159780) perf(sessions): defer unused patch context copies
- [#159901](https://github.com/openclaw/openclaw/pull/159901) improve(ui): speed up searches in expanded automation lists
- [#159864](https://github.com/openclaw/openclaw/pull/159864) fix(code-mode): stop bookkeeping changes hiding repeated tool loops
- [#159936](https://github.com/openclaw/openclaw/pull/159936) fix(maintainer): resolve merge admin evidence relative to the caller
- [#159938](https://github.com/openclaw/openclaw/pull/159938) refactor(ui): colocate omitted media status rendering
- [#159934](https://github.com/openclaw/openclaw/pull/159934) chore(i18n): refresh native locales
- [#158136](https://github.com/openclaw/openclaw/pull/158136) fix(cli): avoid local startup validation for Gateway model runs
- [#159813](https://github.com/openclaw/openclaw/pull/159813) fix(release): preserve package artifact across failed-job retries
- [#159882](https://github.com/openclaw/openclaw/pull/159882) chore(deps): update fs-safe to 0.21.1
- [#159582](https://github.com/openclaw/openclaw/pull/159582) refactor(qa-lab): deslop QA Lab fourth pass
- [#159605](https://github.com/openclaw/openclaw/pull/159605) refactor(config): simplify guarded config writes
- [#159844](https://github.com/openclaw/openclaw/pull/159844) fix(telegram): preserve webhook delivery on 2026.9.6 hosts
- [#159700](https://github.com/openclaw/openclaw/pull/159700) fix(gateway): retry config hot reload after transient lifecycle refusal
- [#159855](https://github.com/openclaw/openclaw/pull/159855) fix(ci): keep ci.yml under GitHub's workflow size limit
- [#159723](https://github.com/openclaw/openclaw/pull/159723) fix(test): prepare runtime for root-directory test runs
- [#159905](https://github.com/openclaw/openclaw/pull/159905) fix(ui): reduce pauses when searching large model lists
- [#159753](https://github.com/openclaw/openclaw/pull/159753) perf(state): preserve database witnesses across managed restarts
- [#159937](https://github.com/openclaw/openclaw/pull/159937) fix(ui): align model picker search text with the reading direction
- [#159767](https://github.com/openclaw/openclaw/pull/159767) feat(android): control the agent browser inside chat
- [#159699](https://github.com/openclaw/openclaw/pull/159699) fix(gateway): stop run waits from blocking graceful shutdown
- [#159543](https://github.com/openclaw/openclaw/pull/159543) fix(openai): video generation fails with HTTP 404 after OpenAI retired Sora
- [#159802](https://github.com/openclaw/openclaw/pull/159802) test(agents,audit,auto-reply): remove low-value tests (batch d073)
- [#159838](https://github.com/openclaw/openclaw/pull/159838) test(worktrees,auto-reply,channels): remove low-value tests (batch d074)
- [#154462](https://github.com/openclaw/openclaw/pull/154462) fix(agents): keep active turns working through configuration reloads
- [#159829](https://github.com/openclaw/openclaw/pull/159829) test(core): remove low-value tests (batch d075)
- [#159597](https://github.com/openclaw/openclaw/pull/159597) refactor(agents): deslop embedded agent runner third pass
- [#159914](https://github.com/openclaw/openclaw/pull/159914) fix(ui): align close and dismiss controls with surrounding icons
- [#159917](https://github.com/openclaw/openclaw/pull/159917) fix(ui): reduce stalls opening large Skills menus
- [#159891](https://github.com/openclaw/openclaw/pull/159891) improve(browser): show only the current session's tabs in the chat Browser panel
- [#159667](https://github.com/openclaw/openclaw/pull/159667) feat(apple): attach files and audio in native chat
- [#159922](https://github.com/openclaw/openclaw/pull/159922) chore(ui): refresh control ui locales
- [#159810](https://github.com/openclaw/openclaw/pull/159810) fix(cli): explain how to reconnect when openclaw connect has no target on a paired node
- [#151822](https://github.com/openclaw/openclaw/pull/151822) fix: keep Logs filtering responsive with a full buffer
- [#159902](https://github.com/openclaw/openclaw/pull/159902) fix: keep large agent-file edits responsive with Preview closed
- [#159907](https://github.com/openclaw/openclaw/pull/159907) fix: keep unknown installation dates neutral
- [#156703](https://github.com/openclaw/openclaw/pull/156703) fix(cli): avoid writable session open during fallback
- [#159900](https://github.com/openclaw/openclaw/pull/159900) perf(sessions): reuse catalog planning across polls
- [#159899](https://github.com/openclaw/openclaw/pull/159899) fix(ui): keep long hostnames inside the sign-in card
- [#159593](https://github.com/openclaw/openclaw/pull/159593) fix: PDF analysis uses the active vision model
- [#159892](https://github.com/openclaw/openclaw/pull/159892) fix(diagnostics): attribute collected heap allocations
- [#159878](https://github.com/openclaw/openclaw/pull/159878) perf(ui): warm hovered sessions without waiting behind cooldown timers
- [#159465](https://github.com/openclaw/openclaw/pull/159465) fix(pairing): device join codes ignore gateway.publicOrigin behind public ingress
- [#159837](https://github.com/openclaw/openclaw/pull/159837) chore(ui): refresh control ui locales
- [#159745](https://github.com/openclaw/openclaw/pull/159745) fix: stop reporting invalid setup codes as expired
- [#159821](https://github.com/openclaw/openclaw/pull/159821) chore(ui): refresh control ui locales
- [#159754](https://github.com/openclaw/openclaw/pull/159754) fix(doctor): avoid SQLite cleanup races in promotion tests
- [#154051](https://github.com/openclaw/openclaw/pull/154051) feat(ui): navigate expanded videos within a chat turn

#### 🐛 New Issues
- [#159356](https://github.com/openclaw/openclaw/issues/159356) llama.cpp manager reports ready while embedding child exits; embedding requests return HTTP 500 Failed to read connection on OpenClaw 2026.9.6 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬25
- [#159596](https://github.com/openclaw/openclaw/issues/159596) [Bug]: Gateway memory sawtooth on 2026.9.6 — prepared-model-catalog worker grows to the full heap ceiling; ~200 critical memory-pressure events/day `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬5
- [#159514](https://github.com/openclaw/openclaw/issues/159514) [Bug]: 2026.9.6 / release/2026.9.7: catalog worker rebuilds its discovery registry on nearly every request (≈8 MB of unreleasable modules per request) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` `impact:crash-loop` 💬6
- [#159579](https://github.com/openclaw/openclaw/issues/159579) Update failure: global-install-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬4
- [#159862](https://github.com/openclaw/openclaw/issues/159862) [Bug]: Android Talk approval/retry flow leaves task unfinished and sessions_spawn fails cleanup `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:needs-live-repro` 💬5
- [#159985](https://github.com/openclaw/openclaw/issues/159985) [Bug]: Browser uploads fail with "DOM.setFileInputFiles: Not allowed" on driver "extension" profiles (Chrome Web Store extension) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#159662](https://github.com/openclaw/openclaw/issues/159662) prepared-model-catalog.worker.js: unbounded memory leak, ~4-5 GB/h, provider-agnostic (reproduced on cold reboot + provider bisect) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` `P0` 💬3
- [#159638](https://github.com/openclaw/openclaw/issues/159638) Gateway boots ~7 short-lived SQLite store/read workers per minute (512 MB each), keeping V8 threads at ~80% CPU `P1` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` `impact:other` 💬3
- [#159949](https://github.com/openclaw/openclaw/issues/159949) [Bug]: Strict dashboard schemas fabricate first-widget placement anchors `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#159977](https://github.com/openclaw/openclaw/issues/159977) [Bug]: Namespaced channel IDs throw while resolving inbound media attachment roots `bug` `no-stale` `bug:behavior` `P2` 💬3
- [#159322](https://github.com/openclaw/openclaw/issues/159322) Update failure: runtime-verification-failed (2026.9.5) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬3
- [#159515](https://github.com/openclaw/openclaw/issues/159515) Update failure: runtime-verification-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬3
- [#159686](https://github.com/openclaw/openclaw/issues/159686) Update failure: global-install-failed (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬3
- [#159740](https://github.com/openclaw/openclaw/issues/159740) [Bug]: Skill collection review monitor (wakeMode next-heartbeat) still fails with superseded prepared runtime generation on 2026.9.6 — residual case of #133692 `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬3
- [#159769](https://github.com/openclaw/openclaw/issues/159769) [Bug]: 2026.9.4 upgrade silently pauses vector memory search: index identity label flips openai-compatible ↔ ollama across releases (config unchanged) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:needs-live-repro` 💬3
- [#159913](https://github.com/openclaw/openclaw/issues/159913) Option to deliver only the final assistant message per request (suppress intermediate text turns) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬3
- [#159512](https://github.com/openclaw/openclaw/issues/159512) [Bug]: claude-cli: every subagent completion invalidates the requester CLI session twice (reason=mcp) because the resume hash includes the per-turn tool cap `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬3
- [#159906](https://github.com/openclaw/openclaw/issues/159906) Scoped plugin config hot-reload corrupts unrelated plugins' cached tool handles gateway-wide; not fixed by plugins reload 💬3
- [#159652](https://github.com/openclaw/openclaw/issues/159652) `/readyz` stays ready while an agent's database execution owner is sealed ("admission is closed") `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬3
- [#159857](https://github.com/openclaw/openclaw/issues/159857) WebUI: switching between chats restores a scroll position near the top instead of the latest messages `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬3
- [#159777](https://github.com/openclaw/openclaw/issues/159777) TUI PTY session-mode check can fail on a late redraw of the previous session `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#159499](https://github.com/openclaw/openclaw/issues/159499) [Bug]: 2026.9.6 Windows - `ready` ~220s: two sequential plugin-registry phases are 175s of it; `sidecars.control-ui-assets` (196s) blocks the event loop up to 60s after ready `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬3
- [#159313](https://github.com/openclaw/openclaw/issues/159313) [Bug]: Bun/macOS plugin capture fails with EBADF for valid /dev/fd copies over 128 KiB `bug` `clawsweeper-recovery-stuck` 💬3
- [#159993](https://github.com/openclaw/openclaw/issues/159993) Unchanged computer observations stay at warning level when references refresh `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#159591](https://github.com/openclaw/openclaw/issues/159591) Update failure: unexpected-error (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#159672](https://github.com/openclaw/openclaw/issues/159672) Update failure: runtime-verification-failed (2026.9.3) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#159485](https://github.com/openclaw/openclaw/issues/159485) Update failure: global-install-failed (2026.9.3) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#159909](https://github.com/openclaw/openclaw/issues/159909) Update failure: reconcile:abandoned (2026.9.6) `P2` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-friction` 💬2
- [#159701](https://github.com/openclaw/openclaw/issues/159701) [Feature]: Reversible per-user hiding of native Claude session catalog rows `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#159665](https://github.com/openclaw/openclaw/issues/159665) DeepSeek DSML tool-call markup with kind `calls` leaks into delivered messages (whitelist misses `calls`) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#159729](https://github.com/openclaw/openclaw/issues/159729) Windows service driver: hold activation authority through port inspection, /Run and successor preflight `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:needs-live-repro` 💬2
- [#159743](https://github.com/openclaw/openclaw/issues/159743) [Feature]: Installation-aware post-upgrade survey and monitored recovery window `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#159736](https://github.com/openclaw/openclaw/issues/159736) doctor config flow: unconditional overwrite of agents.ownership=explicit during roster migration `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#159698](https://github.com/openclaw/openclaw/issues/159698) Config hot reload blocks the gateway event loop 20-33s (synchronous capture of every non-bundled plugin); retired captures never cleaned up `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬2
- [#159912](https://github.com/openclaw/openclaw/issues/159912) [Bug]: Memory background callbacks retain retired plugin registry after reload; indexing fails while health stays green `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#159674](https://github.com/openclaw/openclaw/issues/159674) feat(whatsapp): Add group members listing to directory groups members `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#159765](https://github.com/openclaw/openclaw/issues/159765) [Bug]: [9.6] Gateway won't start + session-sqlite migration stack overflow (0xC00000FD) after 8.2 → 9.6 upgrade `bug` `regression` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬2
- [#159675](https://github.com/openclaw/openclaw/issues/159675) [Bug]: Cron spawn-only handoff delivers the job's payload.message as the reply after a late subagent completion `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬2
- [#159682](https://github.com/openclaw/openclaw/issues/159682) [Bug]: Memory Wiki search finds nothing for non-Latin queries and mismatches accented words `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#159918](https://github.com/openclaw/openclaw/issues/159918) test(pr): wrapper expectations omit inactive prior-CI admin arguments `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:linked-pr-open` 💬2
- [#159941](https://github.com/openclaw/openclaw/issues/159941) [Bug]: 2026.9.6 second gateway instance fights the first over state-lifecycle — silent write loss, stale-data UI, no fail-closed `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `impact:data-loss` 💬2
- [#159542](https://github.com/openclaw/openclaw/issues/159542) [Bug]: pdf tool resolves no model for an agent on OpenRouter although the agent's own model reads PDFs once named — the tool is exposed and fails "No PDF model configured." `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#159911](https://github.com/openclaw/openclaw/issues/159911) Close and dismiss glyphs are inconsistent with neighboring UI icons `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `clawsweeper:needs-live-repro` 💬2
- [#159606](https://github.com/openclaw/openclaw/issues/159606) 2026.9.6 on macOS with 20 agents: off-heap RSS growth to 6 GB, per-agent Codex app-servers on restart recovery, upgrade blocked by deferred plugin session index, no downgrade path `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` `impact:crash-loop` 💬2
- [#159872](https://github.com/openclaw/openclaw/issues/159872) memory.search: `sources: ["sessions"]` is a silent no-op unless `rememberAcrossConversations` is set, and `config get` echoes back the ignored value `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#159888](https://github.com/openclaw/openclaw/issues/159888) [Bug]: script export scan misses the prior-CI verifier entry `bug` `P2` `clawsweeper:not-repro-on-main` `issue-rating: 🦪 silver shellfish` 💬2
- [#159330](https://github.com/openclaw/openclaw/issues/159330) [Bug]: Concurrent first sends to an empty shared conversation are rejected as branch changes `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬2
- [#159679](https://github.com/openclaw/openclaw/issues/159679) test: plugin-frame session navigation can miss its sandbox readiness deadline `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬2
- [#159334](https://github.com/openclaw/openclaw/issues/159334) [Bug]: Runtime-bound Telegram conversations fail with AgentSelectionRequiredError on multi-agent installs `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:linked-pr-open` 💬2
- [#159612](https://github.com/openclaw/openclaw/issues/159612) Subagent completion settlement retries forever: "owner changed before settlement" re-injects result every turn `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` `impact:session-state` 💬2
- [#159342](https://github.com/openclaw/openclaw/issues/159342) [Bug]: one plugin failing on boot trips the crash-loop breaker and blacks out every channel; update proceeds with unavailable plugin targets `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#159610](https://github.com/openclaw/openclaw/issues/159610) [Feature]: Support page text extraction for existing-session browsers `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬2
- [#159858](https://github.com/openclaw/openclaw/issues/159858) [Feature]: Let idle worker isolates release memory on small hosts (~650 MB of worker heap resident at steady state, 2026.9.6) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#159373](https://github.com/openclaw/openclaw/issues/159373) 2026.9.6: main-thread heap grows ~0.35 GiB/h (session-accessor caches, prepared-runtime catalog forks, cron pricing contexts, Playwright client) — gateway needs a restart every 12–15 h `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#160010](https://github.com/openclaw/openclaw/issues/160010) Type-aware lint can exhaust host memory despite Go heap tuning `bug` `P2` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` 💬1
- [#160004](https://github.com/openclaw/openclaw/issues/160004) [Bug]: sessions.abort loses the typed state-contention Stop outcome `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#160006](https://github.com/openclaw/openclaw/issues/160006) Sidebar: page-row reorder grip takes space for pointer users `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#159968](https://github.com/openclaw/openclaw/issues/159968) [Feature]: Let coordinator agents maintain Markdown memory without general filesystem write access `P2` `impact:security` 💬1
- [#160003](https://github.com/openclaw/openclaw/issues/160003) [Bug]: A restart-safe terminal admission persists without an unread marker `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#159990](https://github.com/openclaw/openclaw/issues/159990) Severe state-lifecycle ownership and SQLite contention after upgrading to 2026.9.6 `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` `P0` 💬1
- [#159966](https://github.com/openclaw/openclaw/issues/159966) Update failure: global-install-foreign-destination (2026.9.6) `P0` `impact:ux-release-blocker` 💬1
- [#159976](https://github.com/openclaw/openclaw/issues/159976) [Bug]: Expired Streamable HTTP MCP session reconnects but does not retry the original tool call `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#159839](https://github.com/openclaw/openclaw/issues/159839) [Bug]: Telegram update leaves macOS Gateway offline when activation Doctor config promotion hits maintenance authority refusal `bug` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#159978](https://github.com/openclaw/openclaw/issues/159978) test(bun): candidate source assertions miss the extracted AI helper `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#159971](https://github.com/openclaw/openclaw/issues/159971) [Bug]: Telegram mini-app /dashboard command collides with core /dashboard built-in `P1` `impact:ux-friction` 💬1
- [#159691](https://github.com/openclaw/openclaw/issues/159691) Heartbeat wake marked `skipped: requests-in-flight` after the isolated heartbeat session already ran is retained and re-executed → duplicate heartbeat runs `P1` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` `impact:other` 💬1
- [#159958](https://github.com/openclaw/openclaw/issues/159958) Update failure: plugin-target-unavailable (2026.9.4) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#159953](https://github.com/openclaw/openclaw/issues/159953) [Bug]: `openclaw agent` runs the full state-migration preflight on every call (~5-7s CPU) because the legacy-input check matches the current state layout `P2` `impact:ux-friction` 💬1
- [#159950](https://github.com/openclaw/openclaw/issues/159950) [Bug]: doctor --fix skips cleanup while an unrelated `bun run --silent` process is running `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#159942](https://github.com/openclaw/openclaw/issues/159942) [Feature]: Progress-card handoff after `sessions_yield` for webchat / Control UI requesters (Discord/Telegram only today) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#159929](https://github.com/openclaw/openclaw/issues/159929) [Bug]: claude-cli: Edit/Write `tool_use_result` file echoes are charged against the 8 MiB stream-json output budget `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#159928](https://github.com/openclaw/openclaw/issues/159928) [Bug]: nested TTS Code Mode test returns failed under full-suite execution `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#159926](https://github.com/openclaw/openclaw/issues/159926) `openclaw doctor --fix` refuses maintenance mode when env and paths are all canonical (2026.9.6 regression) `clawsweeper:needs-info` `impact:auth-provider` `P0` `issue-rating: 🦐 gold shrimp` 💬1
- [#159927](https://github.com/openclaw/openclaw/issues/159927) 2026.9.6 requires a credential-store schema migration but only `doctor --fix` can apply it, with no fallback path `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#159916](https://github.com/openclaw/openclaw/issues/159916) [Bug]: 9.7 candidate retains stopped unused reclamation worker after SQLite contention `P2` `clawsweeper:needs-live-repro` `impact:session-state` `issue-rating: 🐚 platinum hermit` 💬1
- [#159904](https://github.com/openclaw/openclaw/issues/159904) Updates: unknown Installed date promises a timestamp after managed updates `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#159903](https://github.com/openclaw/openclaw/issues/159903) [Bug]: OpenRouter streaming usage never reaches observed Tokens — suspected early SSE termination before accounting chunk `bug` `bug:behavior` `P2` `impact:session-state` 💬1
- [#159884](https://github.com/openclaw/openclaw/issues/159884) [Feature]: Personal preference to open links in an external browser `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:linked-pr-open` 💬1
- [#159897](https://github.com/openclaw/openclaw/issues/159897) [Bug]: Stale managed-update handoff lease from a dead triage run blocks all updates; update repair does not clear it (Windows, 2026.9.5) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#159894](https://github.com/openclaw/openclaw/issues/159894) claude-cli runtime: before_tool_call fires but tool-result middleware never runs, so plugins cannot undo their own param changes `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#159886](https://github.com/openclaw/openclaw/issues/159886) [Feature]: Resume a conversation stopped at a subscription limit once capacity returns `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#159420](https://github.com/openclaw/openclaw/issues/159420) [Bug]: Misleading SQLite lock-wait diagnostics, unindexed scans on the 60s cron cleanup path, and a read-only worker that never self-exits (2026.9.6) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#159570](https://github.com/openclaw/openclaw/issues/159570) [Feature]: Opt-in Skill Workshop experience review for persistent agentTurn automations `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#159867](https://github.com/openclaw/openclaw/issues/159867) Control UI: switch OFF state ignores theme tokens `app: web-ui` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#159575](https://github.com/openclaw/openclaw/issues/159575) [Feature]: Add a host-owned quiet-period progress supervisor `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:linked-pr-open` 💬1
- [#159871](https://github.com/openclaw/openclaw/issues/159871) active-memory: HTTP 410 "model retired" from Ollama is classified as a transient `timeout`, retried 8×, and never fails over — recall silently dead since the model's retirement `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#159869](https://github.com/openclaw/openclaw/issues/159869) Embedded Responses drops completed native image generation output `P1` `clawsweeper:source-repro` `impact:message-loss` `issue-rating: 🦞 diamond lobster` 💬1
- [#159746](https://github.com/openclaw/openclaw/issues/159746) [Bug]: active-memory recall-intent patterns missing Russian (RU) — default mode=escalate never fires for Russian users `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#159861](https://github.com/openclaw/openclaw/issues/159861) Typecheck: media-generate-background-retention.test.ts calls .resolve() with wrong arity `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1

#### 🔒 Closed Issues
- [#157227](https://github.com/openclaw/openclaw/issues/157227) [Bug]: git-to-stable 2026.9.6 update migrates config, fails service revalidation after the package swap, and leaves the Gateway stopped
- [#157205](https://github.com/openclaw/openclaw/issues/157205) [Bug]: 2026.9.5 to 2026.9.6 update fails in Doctor; repair times out and leaves Gateway stopped
- [#159949](https://github.com/openclaw/openclaw/issues/159949) [Bug]: Strict dashboard schemas fabricate first-widget placement anchors
- [#159977](https://github.com/openclaw/openclaw/issues/159977) [Bug]: Namespaced channel IDs throw while resolving inbound media attachment roots
- [#154456](https://github.com/openclaw/openclaw/issues/154456) loadProviderScopedThinkingCatalog resolves the published catalog with the "exact" policy — a concurrent config write fails the whole turn
- [#159906](https://github.com/openclaw/openclaw/issues/159906) Scoped plugin config hot-reload corrupts unrelated plugins' cached tool handles gateway-wide; not fixed by plugins reload
- [#150387](https://github.com/openclaw/openclaw/issues/150387) Control UI: Logs repeats per-row localized time formatting during idle polling
- [#159777](https://github.com/openclaw/openclaw/issues/159777) TUI PTY session-mode check can fail on a late redraw of the previous session
- [#147357](https://github.com/openclaw/openclaw/issues/147357) [Feature]: gateway recover (start-if-unloaded) — doctor --fix leaves a stopped Gateway stopped, repair reports false repaired
- [#159222](https://github.com/openclaw/openclaw/issues/159222) [Bug]: Windows 2026.9.6: `gateway restart` / `gateway stop` fail with "disk I/O error" (SQLITE_IOERR_TRUNCATE) — owner lease is read right after `schtasks /End`
- [#159918](https://github.com/openclaw/openclaw/issues/159918) test(pr): wrapper expectations omit inactive prior-CI admin arguments
- [#159542](https://github.com/openclaw/openclaw/issues/159542) [Bug]: pdf tool resolves no model for an agent on OpenRouter although the agent's own model reads PDFs once named — the tool is exposed and fails "No PDF model configured."
- [#92401](https://github.com/openclaw/openclaw/issues/92401) tasks audit: 154 findings on a healthy system — false 'dead agent' signals for long-running subagents + timestamp noise flood
- [#159911](https://github.com/openclaw/openclaw/issues/159911) Close and dismiss glyphs are inconsistent with neighboring UI icons
- [#159888](https://github.com/openclaw/openclaw/issues/159888) [Bug]: script export scan misses the prior-CI verifier entry
- [#159966](https://github.com/openclaw/openclaw/issues/159966) Update failure: global-install-foreign-destination (2026.9.6)
- [#159121](https://github.com/openclaw/openclaw/issues/159121) [Bug]: gateway probe / security audit --deep on loopback looks up the cached device token in the legacy table, attaches no identity, and reports missing scope: operator.read
- [#150323](https://github.com/openclaw/openclaw/issues/150323) [Feature]: distinguish native runtime selection refusals in trusted diagnostics
- [#159971](https://github.com/openclaw/openclaw/issues/159971) [Bug]: Telegram mini-app /dashboard command collides with core /dashboard built-in
- [#159958](https://github.com/openclaw/openclaw/issues/159958) Update failure: plugin-target-unavailable (2026.9.4)
- [#159953](https://github.com/openclaw/openclaw/issues/159953) [Bug]: `openclaw agent` runs the full state-migration preflight on every call (~5-7s CPU) because the legacy-input check matches the current state layout
- [#159904](https://github.com/openclaw/openclaw/issues/159904) Updates: unknown Installed date promises a timestamp after managed updates
- [#159903](https://github.com/openclaw/openclaw/issues/159903) [Bug]: OpenRouter streaming usage never reaches observed Tokens — suspected early SSE termination before accounting chunk
- [#159867](https://github.com/openclaw/openclaw/issues/159867) Control UI: switch OFF state ignores theme tokens
- [#159746](https://github.com/openclaw/openclaw/issues/159746) [Bug]: active-memory recall-intent patterns missing Russian (RU) — default mode=escalate never fires for Russian users

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 249,510 · **Open issues:** 44,552 · **Last push:** <1h ago

Today saw no new releases for Hermes Agent, but several key pull requests were merged. Notably, PR #125878 introduced a feature that allows the "show-ignored" toggle to reveal hygiene directories like out/ and vendor/, enhancing directory visibility for users. Additionally, PR #125598 resolved an issue for fresh Windows 10 installations related to unpacking pinned Git, making the setup process smoother. However, the emergence of new issues is concerning, particularly issue #125657, which reports a recurring installation error at the "install python dependencies" step during Windows setup, affecting multiple attempts to resolve the error. This could significantly hinder user onboarding if not addressed promptly.

#### ✅ Merged PRs
- [#125878](https://github.com/NousResearch/hermes-agent/pull/125878) feat(desktop): let the show-ignored toggle reveal hygiene dirs like out/ and vendor/
- [#125870](https://github.com/NousResearch/hermes-agent/pull/125870) fmt(js): `npm run fix` auto-fix
- [#125598](https://github.com/NousResearch/hermes-agent/pull/125598) fix(install): fresh Windows 10 installs no longer die unpacking pinned Git (PortableGit, salvage #123094)

#### 🐛 New Issues
- [#125657](https://github.com/NousResearch/hermes-agent/issues/125657) [Setup]: 在windows安装过程中，到了instaall python dependencies 这一步时显示安装错误。多次重复重装均无法解决。 `type/bug` `comp/cli` `P2` `needs-repro` 💬16
- [#125350](https://github.com/NousResearch/hermes-agent/issues/125350) [Bug]: Fresh Windows install is impossible: pinned Git .tar.bz2 needs absent bzip2, ffmpeg pin 404s, mirror 403s, -SkipSetup rejected `type/bug` `comp/cli` `P2` `sweeper:risk-compatibility` 💬7
- [#125793](https://github.com/NousResearch/hermes-agent/issues/125793) [Bug]: Internal-event pins are in-memory: the first internal event after a gateway restart still flips the system prompt `type/bug` `comp/gateway` `P0` `sweeper:risk-session-state` 💬5
- [#124762](https://github.com/NousResearch/hermes-agent/issues/124762) Slack manifest generator clamps to 50 commands, real limit is 25 `type/bug` `comp/cli` `platform/slack` `P2` 💬3
- [#124731](https://github.com/NousResearch/hermes-agent/issues/124731) Persist override overwrites a merged user row, dropping the earlier unanswered message from the live list `type/bug` `comp/agent` `comp/gateway` `comp/acp` 💬2
- [#125576](https://github.com/NousResearch/hermes-agent/issues/125576) [security] npm audit shows 15 vulnerabilities (1 low, 3 moderate, 11 high) - Risk Assessment: Extreme! ⚠️ ⛔ `duplicate` `type/security` `comp/tui` `P3` 💬1
- [#125689](https://github.com/NousResearch/hermes-agent/issues/125689) cron: restart-safe worker crashes with ModuleNotFoundError under managed launcher (spawned without dependency activation) `type/bug` `duplicate` `comp/cron` `P1` 💬1
- [#125857](https://github.com/NousResearch/hermes-agent/issues/125857) [Bug]: Telegram document sends silently degrade to bare path text — 'native file send unavailable' fallback never attempts a native upload `type/bug` `comp/plugins` `platform/telegram` `P2` 💬1
- [#125852](https://github.com/NousResearch/hermes-agent/issues/125852) Breaking change to _desktop_launch_options() return signature breaks Omarchy's /usr/sbin/hermes-desktop wrapper `type/bug` `comp/cli` `P2` `comp/desktop` 💬1
- [#125722](https://github.com/NousResearch/hermes-agent/issues/125722) [Bug]: Desktop: Archive & retention list mixes in pinned sessions and the badge reflects list length, not the database count `type/bug` `P2` `sweeper:risk-session-state` `comp/desktop` 💬1
- [#125785](https://github.com/NousResearch/hermes-agent/issues/125785) [Bug]: skills created by delegated subagents are stamped user-owned (created_by='learn'), so the curator and background review can never manage them `type/bug` `comp/agent` `tool/delegate` `tool/skills` 💬1
- [#125885](https://github.com/NousResearch/hermes-agent/issues/125885) [Bug]: Telegram chunking splits a Markdown link after ordinary prose `type/bug` `comp/gateway` `comp/plugins` `platform/telegram`
- [#125886](https://github.com/NousResearch/hermes-agent/issues/125886) [Bug]: Desktop paste rewrites Markdown link destinations as @url context references `type/bug` `P3` `comp/desktop`
- [#125887](https://github.com/NousResearch/hermes-agent/issues/125887) [Feature]: Separate one-time progress acknowledgement from repeated status interval `type/feature` `comp/gateway` `platform/telegram` `area/config`
- [#125888](https://github.com/NousResearch/hermes-agent/issues/125888) [Bug]: Rotation compaction after durable-snapshot adoption writes the current user prompt into the compression child twice `type/bug` `comp/agent` `P1` `sweeper:risk-session-state`
- [#125873](https://github.com/NousResearch/hermes-agent/issues/125873) cron: executions.db retention is count-based (1000 rows) - a busy profile keeps ~27 hours, so 'no row' is indistinguishable from 'no run' `type/bug` `comp/cron` `P2`
- [#125872](https://github.com/NousResearch/hermes-agent/issues/125872) cron: an exhausted recurring job (finite repeat) cannot be revived - resume and --at/--run-now each refuse and point at the other `type/bug` `comp/cron` `P2`
- [#125841](https://github.com/NousResearch/hermes-agent/issues/125841) [Bug]: plugin-catalog pinned-source gate can validate files outside the pinned commit `type/security` `comp/plugins` `P2` `sweeper:risk-security-boundary`
- [#125830](https://github.com/NousResearch/hermes-agent/issues/125830) [Bug]: Agent doesn't know its own Bot Screen: "open chrome in screen 20" launches Chrome on the user's display via terminal and keeps asking what "screen 20" means `type/bug` `comp/tools` `tool/browser` `P3`
- [#125820](https://github.com/NousResearch/hermes-agent/issues/125820) [Bug]: cron external worker exits before ownership acknowledgement after update — env sanitizer drops runtime site-packages (ModuleNotFoundError: ruamel) `type/bug` `duplicate` `comp/cron` `P1`
- [#125825](https://github.com/NousResearch/hermes-agent/issues/125825) [Feature]: Bots and the learning loop: make reliability and learning visible (user feedback) `type/feature` `comp/agent` `tool/memory` `tool/skills`
- [#125826](https://github.com/NousResearch/hermes-agent/issues/125826) [Feature]: session_search needs a workspace/cwd filter parameter and browse results should include workspace `type/feature` `comp/agent` `tool/memory` `P3`

#### 🔒 Closed Issues
- [#110662](https://github.com/NousResearch/hermes-agent/issues/110662) [Feature]: Make Desktop attachment storage follow the configured profile workspace
- [#71627](https://github.com/NousResearch/hermes-agent/issues/71627) [Feature]: Add configurable reasoning level up/down shortcuts
- [#40010](https://github.com/NousResearch/hermes-agent/issues/40010) [Feature]: Stop TTS output while pressing PTT button in TUI?
- [#116511](https://github.com/NousResearch/hermes-agent/issues/116511) Expose the existing image_urls switch on history reads (inline_images=false)
- [#47168](https://github.com/NousResearch/hermes-agent/issues/47168) feat(tui_gateway): add session.archive RPC to match desktop parity
- [#119176](https://github.com/NousResearch/hermes-agent/issues/119176) [Feature]: /s and /i aliases for /steer and /interrupt (same pattern as /q)
- [#50557](https://github.com/NousResearch/hermes-agent/issues/50557) Desktop: split volcengine-agent-plan default_model comma list into individual model entries in dropdown
- [#55169](https://github.com/NousResearch/hermes-agent/issues/55169) [Feature]: File visibility
- [#62478](https://github.com/NousResearch/hermes-agent/issues/62478) Feature: double Esc cancels the active CLI/TUI task

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 92,807 · **Open issues:** 8,354 · **Last push:** <1h ago

On September 28, 2026, vLLM did not release any new versions, but several notable pull requests were merged. Key changes included enhancements to performance and bug fixes, such as the optimization of the per-layer QK RoPE in the KimiViT model, a health endpoint for the weight cache daemon, and improvements to ROCm builds, including a bump to AITER v0.1.23 and fixes for CPU tensor handling. Additionally, the bug fix addressing the `reset_prefix_cache` in the MooncakeStoreConnector appears to be significantly impactful. Among the newly opened issues, a notable concern was raised about a GPU memory fault in AITER MLA FP8 prefill under async scheduling, highlighting ongoing challenges in model performance and stability.

#### ✅ Merged PRs
- [#58239](https://github.com/vllm-project/vllm/pull/58239) [Mypy] Fix mypy typing for Ultravox and Unlimited-OCR models
- [#58651](https://github.com/vllm-project/vllm/pull/58651) [KimiViT][Perf] Fuse per-layer QK RoPE into one in-place kernel
- [#58927](https://github.com/vllm-project/vllm/pull/58927) [Bugfix][Frontend] Count Responses reasoning tokens per tool round
- [#58867](https://github.com/vllm-project/vllm/pull/58867) [ROCm] Bump AITER to v0.1.23
- [#55128](https://github.com/vllm-project/vllm/pull/55128) [Frontend] Switch Python Harmony dependency to oss-harmony
- [#58919](https://github.com/vllm-project/vllm/pull/58919) [Bugfix][KV Connector] Retry Mooncake bootstrap registration on timeout (reopens #55763)
- [#58923](https://github.com/vllm-project/vllm/pull/58923) [ROCm][Bugfix] Fall back to default GEMM for CPU tensors on ROCm builds
- [#58880](https://github.com/vllm-project/vllm/pull/58880) [Perf][MoE] Use fused MiniMax2 routing with non-unit routed scaling
- [#58552](https://github.com/vllm-project/vllm/pull/58552) [Fast Start] Add `/health` endpoint for the weight cache daemon
- [#56086](https://github.com/vllm-project/vllm/pull/56086) [Bugfix] Support repsonse_format + tool_choice=auto
- [#57214](https://github.com/vllm-project/vllm/pull/57214) [Perf][Pooling] Avoid blocking seq_lens GPU-to-CPU copy for pooling in FlashInfer metadata builder
- [#57407](https://github.com/vllm-project/vllm/pull/57407) [ROCm][Perf] Enable layer-aware CSA2 multi-stream overlap for DeepSeek-V4.1-Flash
- [#57237](https://github.com/vllm-project/vllm/pull/57237) [CI] Split (H200 MIG 35GB) Spec Decode Speculators + MTP into 4 named jobs
- [#58684](https://github.com/vllm-project/vllm/pull/58684) [Perf][Attention] Remove D2H sync from FlashInfer SM90 sparse MLA plan under async scheduling
- [#54967](https://github.com/vllm-project/vllm/pull/54967) [Attention][CPU] Use zentorch SDPA for CPU MLA prefill
- [#58634](https://github.com/vllm-project/vllm/pull/58634) [Perf][DSv4.1] Fuse small-batch WO-A with inverse RoPE and MXFP8 quant on SM100/SM103
- [#43931](https://github.com/vllm-project/vllm/pull/43931) [Bugfix] V1: clear stale allowed_token_ids mask in InputBatch.condense
- [#50047](https://github.com/vllm-project/vllm/pull/50047) [Bugfix][NIXL] Release a dead peer's NIXL state without waiting for TTL
- [#57105](https://github.com/vllm-project/vllm/pull/57105) [Qwen3.8-Flash-Next] Avoid memory fragmentation in QSA indexer logits workspace
- [#58201](https://github.com/vllm-project/vllm/pull/58201) [ROCm][Kimi-K3] Make VLLM_ROCM_USE_AITER_MOE_SITUV2 select a4w4/a8w4/a16w4
- [#56377](https://github.com/vllm-project/vllm/pull/56377) [Bugfix] Disable sequence parallelism / async TP under batch invariance and add a TP regression test

#### 🐛 New Issues
- [#58894](https://github.com/vllm-project/vllm/issues/58894) [Bug]: DFlash2 speculative decoding acceptance permanently collapses to 0% right after prefix cache hit rate goes positive (Qwen3.5 hybrid GDN) `bug` `speculative-decoding` `kv-cache-manager` 💬3
- [#58930](https://github.com/vllm-project/vllm/issues/58930) [Bug]: validate_xgrammar_grammar skips unsupported-feature checks for JSON schemas nested in structural tags `bug` `structured-output` 💬2
- [#58937](https://github.com/vllm-project/vllm/issues/58937) [Bug][ROCm]: ROCm nightly images not published since 2026-09-25 `rocm` 💬1
- [#58886](https://github.com/vllm-project/vllm/issues/58886) [Bug][ROCm]: GPU memory fault in AITER MLA FP8 prefill under async scheduling (race on persistent PS metadata) `rocm` `quantization` `kimi` `k3` 💬1
- [#58910](https://github.com/vllm-project/vllm/issues/58910) [Bug]: DeepSeek-V4.1-Flash on SM120 (RTX PRO 6000): Xid 31 illegal memory access during long prefill — deterministic with CUDA graphs enabled, flaky in eager mode (v0.30.0 + FlashInfer 0.7.0) `ci-failure` `deepseek` `DSv4.1` 💬1
- [#58882](https://github.com/vllm-project/vllm/issues/58882) [Feature]: Allow LBNHC/NHD for ROCM_AITER_UNIFIED_ATTN where supported `rocm` 💬1
- [#58870](https://github.com/vllm-project/vllm/issues/58870) [Bug]: MRotaryEmbedding + YaRN uses 4x original_max_position_embeddings for the YaRN correction range and cache size 💬1
- [#58943](https://github.com/vllm-project/vllm/issues/58943) [Bug]: Official MiniCPM-V-4.6 GPTQ/AWQ checkpoints fail to load (vision tower built quantized) `bug` `quantization`
- [#58934](https://github.com/vllm-project/vllm/issues/58934) [Bug]: MiMo-V2.6 omni declares no embedding_fields, so an EPD encoder/consumer pair rejects every image with 400
- [#58931](https://github.com/vllm-project/vllm/issues/58931) [Bug]: MooncakeStoreConnector crashes EngineCore when a request is preempted by `reset_prefix_cache(reset_running_requests=True)` and re-admitted in the next step `bug`
- [#58928](https://github.com/vllm-project/vllm/issues/58928) [Installation]: macOS CPU build fails with Apple Clang 16 (structured binding capture under OpenMP in fla.cpp) `installation`
- [#58922](https://github.com/vllm-project/vllm/issues/58922) [ROCm] rocm_unquantized_gemm crashes on CPU tensors (dispatch ignores tensor device) `bug` `rocm`
- [#58920](https://github.com/vllm-project/vllm/issues/58920) [Bug]: Any KV connector makes pipeline-parallel decode 50-90% slower on Model Runner V2 (all ranks reply, reply-ring writer spins holding the GIL)
- [#58913](https://github.com/vllm-project/vllm/issues/58913) XPU: get_attn_backend_cls never calls validate_configuration - all attention backend capability gates are dead on XPU `intel-gpu`
- [#58912](https://github.com/vllm-project/vllm/issues/58912) XPU: logits_soft_cap silently dropped in flash_attn_varlen_func - Gemma-2/4 run uncapped on Intel GPUs `intel-gpu`
- [#58909](https://github.com/vllm-project/vllm/issues/58909) [Feature]: [RFC] Dynamic Latent-Trajectory Consensus Governor for Reasoning Models (DeepSeek-R1 / QwQ) to Free KV-Cache 4.5x Faster `feature request` `tool-calling` `deepseek`
- [#58906](https://github.com/vllm-project/vllm/issues/58906) [RFC] RL Weight Update Roadmap `RFC` `rl`
- [#58902](https://github.com/vllm-project/vllm/issues/58902) [Bug]: Qwen3-Omni: M-RoPE positions silently misaligned for every multimodal request (offset double-counts the modality-start token) `bug` `multi-modality`
- [#58899](https://github.com/vllm-project/vllm/issues/58899) [Bug]: Greedy output changes between restarts, also with VLLM_BATCH_INVARIANT=1: the q/k-norm + RoPE combo kernel picks its reduction config by timing
- [#58893](https://github.com/vllm-project/vllm/issues/58893) [ROCm] AITER v0.1.23 bump: gfx950 a16w4 MXFP4 MoE Gluon backend crashes (AttributeError get_scaled_upcast_fp4_scale_layout) `bug` `rocm`

#### 🔒 Closed Issues
- [#56370](https://github.com/vllm-project/vllm/issues/56370) [Bug]: Batch invariance is broken when sequence parallelism / async TP is enabled (`VLLM_BATCH_INVARIANT=1` + `pass_config.enable_sp`)
- [#41027](https://github.com/vllm-project/vllm/issues/41027) [Bug]: can't run deepseek v4 flash
- [#42261](https://github.com/vllm-project/vllm/issues/42261) [Bug]: Frequent crashes with gemma4 MTP enabled
- [#56457](https://github.com/vllm-project/vllm/issues/56457) [Bug] Qwen4Exp QSA indexer: per-chunk logits buffer grows with max_seq_len, caching allocator keeps every size, device OOM/hang on unified-memory GB10 (SM121) during long prefill
- [#41682](https://github.com/vllm-project/vllm/issues/41682) [Bug]: Pipeline Parallelism scheduler does not split sequences into pipeline micro-batches
- [#39929](https://github.com/vllm-project/vllm/issues/39929) [Bug]: `response_format` suppresses tool calls when `tool_choice: "auto"` — constrained decoding prevents tool generation
- [#51305](https://github.com/vllm-project/vllm/issues/51305) [Bug]: DSL kernel only supports fp16/bf16 inputs when using torch.float32 dtype
- [#40674](https://github.com/vllm-project/vllm/issues/40674) [Feature]: Support NixlConnector with Pipeline Parallelism for disaggregated serving
- [#41804](https://github.com/vllm-project/vllm/issues/41804) [Performance]: RMSNorm op in v0.20 IR layer prevent further pytorch/triton op fusion
- [#42147](https://github.com/vllm-project/vllm/issues/42147) [Bug]: Qwen 3.6 awq can't load, always OOM error
- [#41685](https://github.com/vllm-project/vllm/issues/41685) [RFC]: Long-context-optimized Pipeline Parallelism, CPP + Async P2P + Dynamic Chunking
- [#42340](https://github.com/vllm-project/vllm/issues/42340) [Bug]: Gemma 4 31B random drops in performance on H200 and B200 with 2 GPUs
- [#37638](https://github.com/vllm-project/vllm/issues/37638) [Tracking Issue]: Mamba Heterogeneous TP for NIXL P/D Disaggregation
- [#39340](https://github.com/vllm-project/vllm/issues/39340) [Bug]: `block_size=8` triggers Triton CompilationError in FlexAttention kernel; other backends correctly reject
- [#39603](https://github.com/vllm-project/vllm/issues/39603) [Performance]: [Bug]: meet same thread as registerClien when start_profile
- [#45380](https://github.com/vllm-project/vllm/issues/45380) [Bug]: Out of bounds in gather_and_maybe_dequant_cache
- [#43894](https://github.com/vllm-project/vllm/issues/43894) [Bug] V1 InputBatch condense can leak stale allowed_token_ids mask to recycled row
- [#54615](https://github.com/vllm-project/vllm/issues/54615) [Feature]: Switch Python Harmony dependency to oss-harmony
- [#55729](https://github.com/vllm-project/vllm/issues/55729) [Bug][MooncakeConnector] Bootstrap registration timeout is fatal during slow rank-0 initialization

### SGLang (`sgl-project/sglang`)

**Stars:** 36,491 · **Open issues:** 5,375 · **Last push:** <1h ago

There were no new releases for SGLang on September 28, 2026; however, several significant changes were merged into the codebase. Key updates include the refactoring of multiple layers to optimize boundary handling and construction processes across stages, with improvements in MoE layers and the handling of residuals. Notably, there are fixes addressing server crashes caused by concurrent requests using the DisallowedTokensLogitsProcessor and debugs to ensure smooth operation under grammar constraints. Additionally, a critical bug was reported regarding DSpark and TP, where grammar-constrained requests batched with others may lead to deadlocks across ranks.

#### ✅ Merged PRs
- [#41075](https://github.com/sgl-project/sglang/pull/41075) [XPU] Disable test_ngram_corpus on XPU and detect XPU tests dynamically in CI filter
- [#41443](https://github.com/sgl-project/sglang/pull/41443) [Refactor] Replace LayerScatterModes with LayerFacts and remove ScatterMode
- [#41442](https://github.com/sgl-project/sglang/pull/41442) [Refactor] Give a layer its CuTe DSL kernels at construction instead of a subclass
- [#41441](https://github.com/sgl-project/sglang/pull/41441) [Refactor] Build the boundary into any stage with one construction
- [#41440](https://github.com/sgl-project/sglang/pull/41440) [Refactor] Declare each stage's residual read and update, and give each stage its own entry
- [#41425](https://github.com/sgl-project/sglang/pull/41425) [Refactor] Run MHC layers on the shared boundary steps with MHC's residual operations
- [#41439](https://github.com/sgl-project/sglang/pull/41439) [Refactor] Split the layer communicator into a package (move only)
- [#41438](https://github.com/sgl-project/sglang/pull/41438) [Refactor] Choose every layer's boundaries from declarations and remove the scatter-mode selection
- [#41437](https://github.com/sgl-project/sglang/pull/41437) [Refactor] Step-3.5: complete the dense MLP's sum through ffn_exit
- [#41436](https://github.com/sgl-project/sglang/pull/41436) [Fix] LongCat-Flash under attention DP: branch and merge the dense FFNs through the communicators
- [#41435](https://github.com/sgl-project/sglang/pull/41435) [Refactor] Choose MoE layers' boundaries from declarations when moe_dp_size equals attn_cp_size
- [#41434](https://github.com/sgl-project/sglang/pull/41434) [Refactor] Falcon-H1: complete the FFN's sum through ffn_exit
- [#41432](https://github.com/sgl-project/sglang/pull/41432) [Fix] Run MoE layers under attention DP and GQA prefill CP on the declared DP × CP gather
- [#41433](https://github.com/sgl-project/sglang/pull/41433) [Fix] Falcon-H1: count the Mamba mixer's output once under tensor parallelism
- [#41431](https://github.com/sgl-project/sglang/pull/41431) [Refactor] Move CuTe DSL-fused layers onto the declared boundaries and FFN-exit kernel entries
- [#41430](https://github.com/sgl-project/sglang/pull/41430) [Refactor] Nemotron-H: build each layer's boundaries from its stage and the previous one
- [#41429](https://github.com/sgl-project/sglang/pull/41429) [Refactor] Build each decoder boundary from the declarations of its two sides
- [#41428](https://github.com/sgl-project/sglang/pull/41428) [Refactor] Publish the LoRA token layout from the batch's FFN input rows
- [#41427](https://github.com/sgl-project/sglang/pull/41427) [Refactor] Let the MoE declare whether its skipped reduction is one TP all-reduce
- [#41426](https://github.com/sgl-project/sglang/pull/41426) [Refactor] Run two-batch-overlap layers on the declared boundaries
- [#41424](https://github.com/sgl-project/sglang/pull/41424) [Refactor] Choose fully-DP dense and DSA / MLA prefill CP layers' steps from declarations
- [#41422](https://github.com/sgl-project/sglang/pull/41422) [Fix] Keep one copy of CP-replicated rows in the DP gather
- [#41423](https://github.com/sgl-project/sglang/pull/41423) [Fix] Gather a dense FFN's input across attention DP and CP in one DP sum
- [#41421](https://github.com/sgl-project/sglang/pull/41421) [Refactor] Choose a GQA prefill CP extend's steps from declarations
- [#41420](https://github.com/sgl-project/sglang/pull/41420) [Refactor] Run every batch of a layer from one BoundarySteps
- [#41419](https://github.com/sgl-project/sglang/pull/41419) [Refactor] Choose the LayerNorm SP region's and input-scattered batches' steps from declarations
- [#41418](https://github.com/sgl-project/sglang/pull/41418) [Refactor] Give the fused prepare_mlp kernels an explicit contract
- [#41417](https://github.com/sgl-project/sglang/pull/41417) [Refactor] Choose the boundaries of plain-TP dense layers and MoE layers from declarations
- [#40477](https://github.com/sgl-project/sglang/pull/40477) Port chat_parsing core
- [#37462](https://github.com/sgl-project/sglang/pull/37462) [Spec] Add LiLiCorr: a candidate-lattice reranker for DFlash drafts
- [#41402](https://github.com/sgl-project/sglang/pull/41402) [PD] Fan drain abort ACKs out to every decode peer of the room
- [#41458](https://github.com/sgl-project/sglang/pull/41458) [AMD] Update v4 cookbook for megamoe, fp8 kv attn, BCG
- [#39726](https://github.com/sgl-project/sglang/pull/39726) [HiCache] Add the page-unified KV load-back JIT kernel
- [#40930](https://github.com/sgl-project/sglang/pull/40930) Add MiniMax arch fallback to auto parser resolution
- [#41272](https://github.com/sgl-project/sglang/pull/41272) [diffusion] fix: LoRA-wrapped linears crash Qwen-Image and MiniMax-H3 inference
- [#41266](https://github.com/sgl-project/sglang/pull/41266) [Diffusion] Reuse bit-exact packed SwiGLU for Ming-Image
- [#39889](https://github.com/sgl-project/sglang/pull/39889) [bench] Take each request's prompt length from the server
- [#41344](https://github.com/sgl-project/sglang/pull/41344) [VLM] Introduce FA4 into ViT for SM100/SM103
- [#41309](https://github.com/sgl-project/sglang/pull/41309) [diffusion] Run an all-valid attention mask on the backend's unmasked kernel
- [#34418](https://github.com/sgl-project/sglang/pull/34418) [Diffusion] Apply latent-ids and packing to caller-provided initial latents
- [#35990](https://github.com/sgl-project/sglang/pull/35990) [diffusion] Add MiniMax-H3 to ComfyUI integrated mode
- [#35684](https://github.com/sgl-project/sglang/pull/35684) [diffusion] MiniMax-H3 Spectrum skip-step + fused RMSNorm/AdaLN
- [#36192](https://github.com/sgl-project/sglang/pull/36192) [diffusion] In-place LoRA merge/unmerge under layerwise offload
- [#41281](https://github.com/sgl-project/sglang/pull/41281) [mem_cache] Replace `cache_finished_req` with `insert_req`; `release_kv_cache` frees and unpins
- [#41305](https://github.com/sgl-project/sglang/pull/41305) [KDA+Kimi K3] Speed up SANA-Video residual gate add on H200
- [#41166](https://github.com/sgl-project/sglang/pull/41166) [qwen 3.8 next] Fuse small CUDA graph input buffer copies
- [#39964](https://github.com/sgl-project/sglang/pull/39964) [kv-shard 3/4] Enable Control Plane B
- [#41345](https://github.com/sgl-project/sglang/pull/41345) [DSV4.1][HiCache] fix: wait for the layer transfer before reading low-ratio index-K
- [#34416](https://github.com/sgl-project/sglang/pull/34416) [Diffusion] Preserve per-sample rollout trajectories across multi-output merge
- [#41312](https://github.com/sgl-project/sglang/pull/41312) [mem_cache] Never free the protected prefix on request release
- [#41221](https://github.com/sgl-project/sglang/pull/41221) [sgl-router] Take SGLang's render defaults: --default-chat-template-kwargs and thinking/effort envs
- [#41019](https://github.com/sgl-project/sglang/pull/41019) dsv4.1-amd: KV cache layouts, FP4 indexer, compressor and router kernels

#### 🐛 New Issues
- [#41471](https://github.com/sgl-project/sglang/issues/41471) [Bug] Two concurrent requests using DisallowedTokensLogitsProcessor with different token_ids crash the server 💬2
- [#41490](https://github.com/sgl-project/sglang/issues/41490) [Feature] Support SANA-Video 2.0 (T2V and TI2V) 💬1
- [#41465](https://github.com/sgl-project/sglang/issues/41465) [Bug] Aborting a constrained request while its grammar compiles returns HTTP 400 `BadRequestError` 💬1
- [#41474](https://github.com/sgl-project/sglang/issues/41474) [Bug] `/abort_request` with a rid also aborts every request whose rid starts with it 💬1
- [#41449](https://github.com/sgl-project/sglang/issues/41449) [Bug] DSpark + TP: grammar-constrained request batched with any other request deadlocks all ranks (overlap and non-overlap), GPUs spin in a collective 💬1
- [#41494](https://github.com/sgl-project/sglang/issues/41494) [Bug] GLM-5.3-Flash DSA k-pool indexer corrupts long-context (16K) NIAH needle digits — vLLM/transformers read the same inputs correctly
- [#41482](https://github.com/sgl-project/sglang/issues/41482) [Bug] `top_k`, `logprobs` and `n` have no upper bound, one request can DoS the server
- [#41470](https://github.com/sgl-project/sglang/issues/41470) [Bug] A session turn with replace: true and no rid crashes the server ("dictionary changed size during iteration")
- [#41467](https://github.com/sgl-project/sglang/issues/41467) [Bug] wrong typed `session_params` field in one /generate request can crash server
- [#41466](https://github.com/sgl-project/sglang/issues/41466) [Bug] `/generate` does not type-check its fields: one wrong-typed field takes the server down
- [#41463](https://github.com/sgl-project/sglang/issues/41463) [Bug] Falcon-H1 with tied word embeddings cannot serve a single request, tied LM head's `.float()` upcasts the embedding in place
- [#41385](https://github.com/sgl-project/sglang/issues/41385) EvalPort: portable interchange for BenchmarkResult

#### 🔒 Closed Issues
- [#27898](https://github.com/sgl-project/sglang/issues/27898) [RFC] Beyond Passive Byte Stores: Scheduler-Aware Multi-Tier KV Caching for SGLang with MORI-UMBP
- [#30322](https://github.com/sgl-project/sglang/issues/30322) [Bug] PD disaggreate enable-decode-radix-cache and hicache
- [#31783](https://github.com/sgl-project/sglang/issues/31783) [Roadmap] Quantization 2026 H2
- [#25095](https://github.com/sgl-project/sglang/issues/25095) [Roadmap] Lora (2026 Q2)
- [#32806](https://github.com/sgl-project/sglang/issues/32806) [MoE] LFM2.5 (E=32, N=1792) has no tuned config for H200: 1.37-1.74x kernel headroom, +23.3% end-to-end
- [#32807](https://github.com/sgl-project/sglang/issues/32807) [Gemma-3] RMSNorm: higher-rank q_norm/k_norm skip the fused CUDA kernel, and mixed-dtype weights return NaNs
- [#32781](https://github.com/sgl-project/sglang/issues/32781) [Bug] DeepSeek-V4-Pro TP16 weight loading fails with out-of-range w2/w13 shard offsets in v0.5.16
- [#32777](https://github.com/sgl-project/sglang/issues/32777) TX PFC / NIC pause frames during Mooncake L3 cache prefetch — NIC→host-memory intra-node bottleneck
- [#32772](https://github.com/sgl-project/sglang/issues/32772) [Feature] Add optional admin auth for sgl-router /flush_cache
- [#32724](https://github.com/sgl-project/sglang/issues/32724) [Perf] HiCache storage prefetch finalization delay can cause long TTFT under load
- [#32728](https://github.com/sgl-project/sglang/issues/32728) [Feature] Add KV event gap replay for experimental sgl-router
- [#32712](https://github.com/sgl-project/sglang/issues/32712) [Feature] [RFC] SharedEP: a zerocopy execution model for MoE Expert Parallelism

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 129,719 · **Open issues:** 2,546 · **Last push:** 3h ago

On September 28, 2026, llama.cpp released several updates, including version b11223, which introduced enhancements for RANK pooling batch splitting for causal LLM rerankers like Qwen3 and Qwen3-VL. Other notable releases included b11222, which improved parameter parsing to avoid side effects, and b11221, which ensured errors were thrown for invalid values in the string_split function. Among the merged features was support for the dict built-in in jinja, while significant bug fixes addressed issues with SYCL and Vulkan backends, particularly for the A770 GPU, where long-running decode problems were reported. The new issue #29546 highlights a tokenization bug related to special tokens in user input, indicating ongoing challenges in model evaluation.

#### 🚀 New Releases
- [b11223](https://github.com/ggml-org/llama.cpp/releases/tag/b11223) b11223
- [b11222](https://github.com/ggml-org/llama.cpp/releases/tag/b11222) b11222
- [b11221](https://github.com/ggml-org/llama.cpp/releases/tag/b11221) b11221
- [b11218](https://github.com/ggml-org/llama.cpp/releases/tag/b11218) b11218
- [b11217](https://github.com/ggml-org/llama.cpp/releases/tag/b11217) b11217
- [b11216](https://github.com/ggml-org/llama.cpp/releases/tag/b11216) b11216
- [b11215](https://github.com/ggml-org/llama.cpp/releases/tag/b11215) b11215
- [b11214](https://github.com/ggml-org/llama.cpp/releases/tag/b11214) b11214
- [b11213](https://github.com/ggml-org/llama.cpp/releases/tag/b11213) b11213
- [b11212](https://github.com/ggml-org/llama.cpp/releases/tag/b11212) b11212

#### ✅ Merged PRs
- [#28876](https://github.com/ggml-org/llama.cpp/pull/28876) server : allow RANK pooling batch splitting for causal LLM rerankers (ie. Qwen3 and Qwen3-VL)
- [#29537](https://github.com/ggml-org/llama.cpp/pull/29537) common : avoid side effects around params parsing
- [#29518](https://github.com/ggml-org/llama.cpp/pull/29518) common : make string_split<T> throw on invalid values
- [#29528](https://github.com/ggml-org/llama.cpp/pull/29528) convert : export YaRN scaling parameters for PLaMo-3
- [#29529](https://github.com/ggml-org/llama.cpp/pull/29529) ci : bump ty to 0.0.84
- [#29477](https://github.com/ggml-org/llama.cpp/pull/29477) jinja : add support for dict builtin
- [#29503](https://github.com/ggml-org/llama.cpp/pull/29503) opencl: refine a8x bin kernel loading condition
- [#29243](https://github.com/ggml-org/llama.cpp/pull/29243) sycl: FWHT kernels for block widths above 512
- [#26289](https://github.com/ggml-org/llama.cpp/pull/26289) CUDA: tune fp16 tile FlashAttention configs for head sizes 40-112
- [#28907](https://github.com/ggml-org/llama.cpp/pull/28907) HIP: Enable fattn-mma kernel on cdna for dkq > 256 for large batch sizes
- [#29469](https://github.com/ggml-org/llama.cpp/pull/29469) vulkan: fix argsort kernel selection for Adreno
- [#29516](https://github.com/ggml-org/llama.cpp/pull/29516) common : throw instead of abort on grammar without llguidance
- [#29440](https://github.com/ggml-org/llama.cpp/pull/29440) RPC: use RDMA completion channel to not spin
- [#29514](https://github.com/ggml-org/llama.cpp/pull/29514) ci : enable GGML_SCHED_DEBUG_REALLOC=1 for ctest workflows
- [#29515](https://github.com/ggml-org/llama.cpp/pull/29515) llama-bench : fix OOB access of hf_file
- [#29512](https://github.com/ggml-org/llama.cpp/pull/29512) hrm : fix layer placement of `z_l_init` weight
- [#29511](https://github.com/ggml-org/llama.cpp/pull/29511) hexagon: support tiled Q4_0 and Q8_0 GET_ROWS
- [#29502](https://github.com/ggml-org/llama.cpp/pull/29502) hexagon: support for backend sampler

#### 🐛 New Issues
- [#29546](https://github.com/ggml-org/llama.cpp/issues/29546) Eval bug: Special tokens in user input should be tokenized as text `bug-unconfirmed` 💬1
- [#29519](https://github.com/ggml-org/llama.cpp/issues/29519) Misc. bug: YaRN configuration metadata is missing after converting PLaMo-3 models to GGUF `bug-unconfirmed`
- [#29527](https://github.com/ggml-org/llama.cpp/issues/29527) [Bug] SYCL/Level Zero backend: A770 long-running decode fence deadlock after ~18h 💬1
- [#29526](https://github.com/ggml-org/llama.cpp/issues/29526) [Bug] Vulkan backend: A770 long-running decode degradation (empty EOS replies) after ~7-8h 💬1
- [#29532](https://github.com/ggml-org/llama.cpp/issues/29532) Eval bug: Vulkan matmul dispatch exceeds maxComputeWorkGroupCount with a small m and large n `bug-unconfirmed`
- [#29521](https://github.com/ggml-org/llama.cpp/issues/29521) [Bug] macOS Metal OOM & Compute error (-3) on Gemma 4 31B after update: Insufficient Memory with large default n_ctx `bug-unconfirmed`
- [#29513](https://github.com/ggml-org/llama.cpp/issues/29513) Qwen3.5-4B: first request after load is extremely slow (CUDA backend), warm performance is fine (RTX 2060 / sm_75, b11206)

#### 🔒 Closed Issues
- [#26907](https://github.com/ggml-org/llama.cpp/issues/26907) Compile bug: llama-ui-assets.dir `tools/ui/ui-src/ui-src/ui-src/ui-src/...` infinite COPY loop
- [#29431](https://github.com/ggml-org/llama.cpp/issues/29431) Misc. bug: Vulkan ARGSORT ne=[2048,1,1,1] only sorts half of the array on some devices
- [#27086](https://github.com/ggml-org/llama.cpp/issues/27086) Flash attention default (-fa auto) costs ~2x prefill throughput on Arm Neoverse V-series CPUs
- [#29485](https://github.com/ggml-org/llama.cpp/issues/29485) Misc. bug: `llama-server` prints `llama_server: initializing ...` message with options such as `--completion-bash`
- [#29411](https://github.com/ggml-org/llama.cpp/issues/29411) Misc. bug: Hexagon ADD reads wrong rows when dim 1 broadcasts across dim 2 slices
- [#27045](https://github.com/ggml-org/llama.cpp/issues/27045) Eval bug: Near 0% CUDA Utilization With 75% CPU Offload and 25% GPU Layers
- [#27050](https://github.com/ggml-org/llama.cpp/issues/27050) Server: backend sampling (-bs) gives +48% throughput at 32 slots (706 -> 1046 tok/s) — should it be the default for multi-slot serving?
- [#27053](https://github.com/ggml-org/llama.cpp/issues/27053) Misc. bug: ggml_cont on transposed block-quantized tensor silently corrupts memory on CPU (should abort if unsupported)
- [#27055](https://github.com/ggml-org/llama.cpp/issues/27055) mp4 file input not possible
- [#27065](https://github.com/ggml-org/llama.cpp/issues/27065) Double-free crash in console::history_t::~history_t() on Termux (Android aarch64 bionic libc)
- [#27066](https://github.com/ggml-org/llama.cpp/issues/27066) Misc. bug: Adaptive P is broken on muse glimmer.
- [#27089](https://github.com/ggml-org/llama.cpp/issues/27089) Library (in-process) hosts cannot use speculative decoding / DSpark — no core C-API for draft/spec params
- [#29546](https://github.com/ggml-org/llama.cpp/issues/29546) Eval bug: Special tokens in user input should be tokenized as text
- [#29519](https://github.com/ggml-org/llama.cpp/issues/29519) Misc. bug: YaRN configuration metadata is missing after converting PLaMo-3 models to GGUF
- [#29484](https://github.com/ggml-org/llama.cpp/issues/29484) Eval bug: test-save-load-state aborts on hrm_text with GGML_SCHED_NO_REALLOC (input-layer tensor makes the backend assignment depend on batch size)

### Ollama (`ollama/ollama`)

**Stars:** 181,818 · **Open issues:** 4,117 · **Last push:** 1h ago

On September 28, 2026, there were no new releases or merged pull requests for Ollama, indicating a day of routine maintenance. However, several significant issues were reported, including a critical bug (#18683) related to accounts stuck in an automated Stripe loop with unresponsive support, raising concerns about user billing and support responsiveness. Additionally, issue #18685 highlighted a problem with the llama-server becoming unresponsive on full-cache-hit tasks on CUDA for Linux, which could severely impact model performance under specific conditions. Other noteworthy issues include the mismanagement of the OLLAMA_GPU_OVERHEAD environment variable and a glitch in the MacOS GUI where the window opens on the Apps tab, hiding the sidebar. These concerns point to both operational and user experience challenges that the team will need to address promptly.

#### 🐛 New Issues
- [#18685](https://github.com/ollama/ollama/issues/18685) 0.34.4: llama-server wedges on a full-cache-hit task; all later requests to that model hang until unload (CUDA, Linux) 💬1
- [#18679](https://github.com/ollama/ollama/issues/18679) OLLAMA_GPU_OVERHEAD is ignored by the llama-server backend (layer placement via --fit) `bug` 💬1
- [#18686](https://github.com/ollama/ollama/issues/18686) APP / GUI / MacOS : window opens on Apps tab, sidebar is hidden `feature request`
- [#18683](https://github.com/ollama/ollama/issues/18683) [CRITICAL BUG][Billing] Accounts stuck in automated Stripe loop with unresponsive support `bug`
- [#18681](https://github.com/ollama/ollama/issues/18681) parsers: tool-call opening tags can be lost across chunk boundaries `bug`
- [#18676](https://github.com/ollama/ollama/issues/18676) olmo3: tool call in terminal chunk bypasses parsing and is returned as content

#### 🔒 Closed Issues
- [#16946](https://github.com/ollama/ollama/issues/16946) llama-server core dumps when serving GPT-OSS with OLLAMA_KV_CACHE_TYPE=q8_0
- [#18669](https://github.com/ollama/ollama/issues/18669) Shared Model Weights for Concurrent MLX Inference on Apple Silicon

### LiteLLM (`BerriAI/litellm`)

**Stars:** 59,734 · **Open issues:** 5,347 · **Last push:** <1h ago

On September 28, 2026, LiteLLM experienced routine maintenance with no new releases. Significant merged pull requests included the addition of support for the HTTP Responses API in Rust (PR #43464) and several critical fixes to the cost map, such as updating prices from the models API (PR #43506) and setting deprecation dates for various models (PRs #43509 and #43507). Notably, PR #43486 addressed a bug where user_config routing erroneously discarded the Router before execution. Additionally, several new issues were reported, including a critical bug (issue #43487) where a partial generic streaming chunk causes a KeyError, indicating potential challenges ahead as the team works on enhancements.

#### ✅ Merged PRs
- [#43509](https://github.com/BerriAI/litellm/pull/43509) fix(cost-map): set together_ai gpt-oss-20b and gemma-4-31B-it deprecation_date to 2026-09-15
- [#43506](https://github.com/BerriAI/litellm/pull/43506) fix(cost-map): sync openrouter prices from the models API
- [#43464](https://github.com/BerriAI/litellm/pull/43464) feat(rust): support the HTTP Responses API
- [#43507](https://github.com/BerriAI/litellm/pull/43507) fix(cost-map): add deprecation_date to together_ai Salesforce/Llama-Rank-V1
- [#43463](https://github.com/BerriAI/litellm/pull/43463) refactor(rust): use shared execution in gateway inference
- [#43471](https://github.com/BerriAI/litellm/pull/43471) build(rust): package the gateway container
- [#43462](https://github.com/BerriAI/litellm/pull/43462) feat(rust): add the HTTP host driver
- [#43461](https://github.com/BerriAI/litellm/pull/43461) refactor(rust): share call lifecycle across route-owned inference
- [#43460](https://github.com/BerriAI/litellm/pull/43460) feat(rust): expand gateway configuration parsing
- [#43426](https://github.com/BerriAI/litellm/pull/43426) refactor(rust): share anthropic types, request helpers, and streaming contracts across crates
- [#43449](https://github.com/BerriAI/litellm/pull/43449) feat(rust): add the direct HTTP Responses API path
- [#43446](https://github.com/BerriAI/litellm/pull/43446) chore(cost-map): add azure_ai/MAI-Cyber-1-Flash
- [#43440](https://github.com/BerriAI/litellm/pull/43440) chore(cost-map): update azure_ai/grok-4.6 input price from Azure pricing page
- [#43304](https://github.com/BerriAI/litellm/pull/43304) refactor(types): replace Any with proven types in 5 files
- [#43429](https://github.com/BerriAI/litellm/pull/43429) fix(proxy): unregister logging callbacks removed from the stored config
- [#43432](https://github.com/BerriAI/litellm/pull/43432) fix(proxy): unregister logging callbacks removed from the stored config on rc/1.104.0
- [#43417](https://github.com/BerriAI/litellm/pull/43417) fix(token_counter): count Gemini function_declarations tools
- [#42274](https://github.com/BerriAI/litellm/pull/42274) fix(vertex_ai): stop importing the vertexai SDK in partner-model completion
- [#43416](https://github.com/BerriAI/litellm/pull/43416) fix(bedrock): keep the provider status code on unprocessable image errors
- [#43422](https://github.com/BerriAI/litellm/pull/43422) test(vertex_ai): assert the usage the Gemma responses stream actually reports
- [#43415](https://github.com/BerriAI/litellm/pull/43415) fix(anthropic): forward the per-turn-control beta to Azure AI Foundry
- [#43420](https://github.com/BerriAI/litellm/pull/43420) test(unit): stop test modules from putting their own directory on sys.path on rc/1.104.0
- [#43418](https://github.com/BerriAI/litellm/pull/43418) test(e2e): skip the LangSmith batch serialization e2e on rc/1.104.0 until CI has a LangSmith key
- [#43414](https://github.com/BerriAI/litellm/pull/43414) fix(responses): emit the reasoning item on streaming /v1/responses for signature-only thinking
- [#43147](https://github.com/BerriAI/litellm/pull/43147) fix(vertex_ai): make Gemma fake streams work with traced Responses
- [#43197](https://github.com/BerriAI/litellm/pull/43197) fix(gemini): forward seed to the Gemini API instead of rejecting it
- [#43260](https://github.com/BerriAI/litellm/pull/43260) fix(tools): salvage concatenated JSON tool call arguments
- [#43405](https://github.com/BerriAI/litellm/pull/43405) test(e2e): report batch cleanup leftovers as a plain UserWarning
- [#43406](https://github.com/BerriAI/litellm/pull/43406) test(e2e): report batch cleanup leftovers as a plain UserWarning on rc/1.104.0
- [#38049](https://github.com/BerriAI/litellm/pull/38049) fix(anthropic): drop thinking blocks with empty thinking text, not just missing signature
- [#43319](https://github.com/BerriAI/litellm/pull/43319) fix(vertex_ai): consider tools when validating context caching min tokens
- [#43400](https://github.com/BerriAI/litellm/pull/43400) fix(streaming): backport text-completion usage fix and e2e provider-flake tolerance to rc/1.103.0
- [#43402](https://github.com/BerriAI/litellm/pull/43402) fix(streaming): backport text-completion usage chunk fix (#43047) to rc/1.104.0
- [#43047](https://github.com/BerriAI/litellm/pull/43047) fix(streaming): keep litellm Usage on text-completion usage chunks
- [#43392](https://github.com/BerriAI/litellm/pull/43392) feat(cli): reuse saved agent setup and add reconfigure

#### 🐛 New Issues
- [#43487](https://github.com/BerriAI/litellm/issues/43487) [Bug]: A partial generic streaming chunk is accepted and then raises KeyError `llm translation` 💬3
- [#43450](https://github.com/BerriAI/litellm/issues/43450) [Bug]: A2A message/send drops an allowlisted x-litellm-api-key `bug` 💬1
- [#43495](https://github.com/BerriAI/litellm/issues/43495) [Bug]: Routing by deployment id reports no healthy deployments `llm translation` 💬1
- [#43444](https://github.com/BerriAI/litellm/issues/43444) [Bug]: Price data reload wipes DB deployments' cost-map registrations when config model_list is empty (router not in _live_routers) `llm translation` 💬1
- [#43508](https://github.com/BerriAI/litellm/issues/43508) Optional AgentCert / agent-trust verification via a custom auth hook — interested?
- [#43497](https://github.com/BerriAI/litellm/issues/43497) [Bug]: Async timeout decorator ignores the per-call request_timeout
- [#43496](https://github.com/BerriAI/litellm/issues/43496) [Bug]: Concurrent key-cache misses can write a stale auth object back
- [#43494](https://github.com/BerriAI/litellm/issues/43494) [Bug]: Async input callbacks are registered and never called
- [#43493](https://github.com/BerriAI/litellm/issues/43493) [Bug]: Responses id decryption raises IndexError when the team segment is missing
- [#43492](https://github.com/BerriAI/litellm/issues/43492) [Bug]: InMemoryCache returns the stored object, so callers share one mutable value
- [#43491](https://github.com/BerriAI/litellm/issues/43491) [Bug]: User, team, end-user, and tag spend caches lose concurrent increments
- [#43490](https://github.com/BerriAI/litellm/issues/43490) [Bug]: Dynamic rate limiter allows the request when the usage cache lookup fails
- [#43489](https://github.com/BerriAI/litellm/issues/43489) [Bug]: Cache reads fall back to ast.literal_eval when the stored value is not JSON
- [#43488](https://github.com/BerriAI/litellm/issues/43488) [Bug]: Pass-through chat parses the request body with ast.literal_eval before JSON `llm translation`
- [#43486](https://github.com/BerriAI/litellm/issues/43486) [Bug]: user_config routing discards the Router before the call runs `llm translation`
- [#43485](https://github.com/BerriAI/litellm/issues/43485) [Bug]: Audio health checks leak a file descriptor on every attempt `llm translation`
- [#43484](https://github.com/BerriAI/litellm/issues/43484) [Bug]: Health-check lock release can delete another pod's lock
- [#43483](https://github.com/BerriAI/litellm/issues/43483) [Bug]: Spend-log rows are dropped when the flush fails with a non-Prisma error
- [#43482](https://github.com/BerriAI/litellm/issues/43482) [Bug]: Budget reset commits key, user, and team spend in separate transactions `llm translation`
- [#43481](https://github.com/BerriAI/litellm/issues/43481) [Bug]: Pod lock release falls back to a non-atomic get-then-delete
- [#43480](https://github.com/BerriAI/litellm/issues/43480) [Bug]: Config include paths can leave the config directory
- [#43479](https://github.com/BerriAI/litellm/issues/43479) [Bug]: Streaming error frames send the raw exception text to the client `llm translation`
- [#43478](https://github.com/BerriAI/litellm/issues/43478) [Bug]: proxy_admin_viewer can call inference routes
- [#43476](https://github.com/BerriAI/litellm/issues/43476) [Feature]: Configurable proxy worker heartbeat interval (0 = off) so an idle proxy lets a scale-to-zero Postgres suspend `llm translation`
- [#43474](https://github.com/BerriAI/litellm/issues/43474) [Bug]: azure_ai cost map lists Muse Spark and other models Azure does not sell `llm translation`
- [#43473](https://github.com/BerriAI/litellm/issues/43473) [Bug]: Azure DeepSeek-V4.1-Flash cost map prices both Foundry paths from the Fireworks meter `llm translation`
- [#43456](https://github.com/BerriAI/litellm/issues/43456) [Bug]: websearch_interception short-circuit sends the whole user message as the search query (Claude Code's "Perform a web search for the query:" prefix included) `llm translation` `claude code`
- [#43431](https://github.com/BerriAI/litellm/issues/43431) Document ScreenContextAgent as an optional context tool

#### 🔒 Closed Issues
- [#23766](https://github.com/BerriAI/litellm/issues/23766) [Feature]: Support for mREP endpoint for vertex AI
- [#23990](https://github.com/BerriAI/litellm/issues/23990) [Bug]: OTEL callback never reports token usage breakdown (reasoning_tokens, cached_tokens) for Chat Completions API
- [#30705](https://github.com/BerriAI/litellm/issues/30705) [Bug]: Anthropic /v1/messages should normalize or reject messages[] entries with role=system
- [#30816](https://github.com/BerriAI/litellm/issues/30816) [Feature]: Report actual usage cost to SSE clients in streaming mode
- [#32628](https://github.com/BerriAI/litellm/issues/32628) [Feature]: Add support for Cohere Command A+ in Azure
- [#30822](https://github.com/BerriAI/litellm/issues/30822) [Bug]: websearch_interception doesn't convert tool_choice, so forced web_search fails on Bedrock (400 "Tool 'web_search' not found")
- [#32637](https://github.com/BerriAI/litellm/issues/32637) [Feature]: Add Support for Mistral Document AI OCR and Mistral 3.5 Medium in Azure
- [#30731](https://github.com/BerriAI/litellm/issues/30731) [Bug]: llm_as_a_judge guardrail fails open — missing overall_score defaults to 100 (pass)
- [#30956](https://github.com/BerriAI/litellm/issues/30956) [Bug]: OTel V2 missing message contents in traces and no events emitted when using span_and_event
- [#33323](https://github.com/BerriAI/litellm/issues/33323) [Bug]: max_budget_limiter fails open when the user spend lookup raises
- [#40582](https://github.com/BerriAI/litellm/issues/40582) [Bug]: parse_tool_call_arguments silently drops tool calls with concatenated JSON arguments — split_concatenated_json_objects exists but is not used on this path
- [#42804](https://github.com/BerriAI/litellm/issues/42804) [Bug]: Vertex/Gemini context caching skipped when marked messages < min tokens, though tools (moved into the cache) push it over the minimum
- [#30939](https://github.com/BerriAI/litellm/issues/30939) [Feature]: Ability to sample spans into DataDog LLM Observability
- [#30948](https://github.com/BerriAI/litellm/issues/30948) [Bug]: chat completion API is Vulnerable to Stack Trace & Internal Path Disclosure via Improper Error Handling
- [#30955](https://github.com/BerriAI/litellm/issues/30955) A2A completion-bridge agents: tool-using turns return empty answers, and agents can't use MCP tools, delegate, or apply a prompt
- [#30984](https://github.com/BerriAI/litellm/issues/30984) A2A Agents page always shows "Needs Setup": agents key-list uses size=500 but /key/list caps size at 100 (422)
- [#31030](https://github.com/BerriAI/litellm/issues/31030) [Bug]: Vertex AI Haiku fails with thinking:{"type":"adaptive"} on /v1/messages — drop_params not applied
- [#42959](https://github.com/BerriAI/litellm/issues/42959) [Bug]: per-turn-control-2026-07-01 filtered for azure_ai, but Azure AI Foundry supports it — Claude Code fails with "messages.1.output_config: Extra inputs are not permitted"
- [#42869](https://github.com/BerriAI/litellm/issues/42869) [Bug]: streaming /v1/responses emits no reasoning item for signature-only thinking (Claude Fable 5.1 / Opus 5.5 default, Bedrock adaptive), so reasoning cannot be replayed

### Unsloth (`unslothai/unsloth`)

**Stars:** 76,880 · **Open issues:** 1,264 · **Last push:** <1h ago

On September 28, 2026, Unsloth released prebuilt Linux x86_64 CUDA 13 wheels for Flash-Attention2 (version 2.8.4), Causal-Conv1D (version 1.7.0), and Mamba_SSM (version 2.3.2.post1), compatible with PyTorch 2.13 and 2.14 on Python 3.13. Key merged features included improvements in the Studio environment, such as creating, editing, and deleting skills from the Skills Menu (#11800), as well as enhancing checkpoint management with adjustments to tool disabling during compaction (#12119). A notable fix addressed an idle desktop app's disk caching behavior by marking API reads as no-store (#12148). Among the newly reported issues, a bug was highlighted where the terminal tool could freeze the app during dispatch if the command text contained two self-referential assignments (#12084).

#### 🚀 New Releases
- [prebuilt-wheels-cu13](https://github.com/unslothai/unsloth/releases/tag/prebuilt-wheels-cu13) Flash-Attention2, Causal-Conv1D, Mamba_SSM Binaries

#### ✅ Merged PRs
- [#12118](https://github.com/unslothai/unsloth/pull/12118) Studio: only offer Agent Skills when Code is on
- [#12119](https://github.com/unslothai/unsloth/pull/12119) Studio: keep checkpoint compaction under --disable-tools
- [#12120](https://github.com/unslothai/unsloth/pull/12120) Studio: move Managed accounts to the Accounts tab and drop Mark as unread from chat menus
- [#12149](https://github.com/unslothai/unsloth/pull/12149) Wait for every diffusion run a test started before undoing its runs dir
- [#12148](https://github.com/unslothai/unsloth/pull/12148) fix(studio): mark /api reads no-store so an idle desktop app stops rewriting its disk cache
- [#12145](https://github.com/unslothai/unsloth/pull/12145) Point dsh at Unsloth through a --patch overlay instead of settings.yaml
- [#10310](https://github.com/unslothai/unsloth/pull/10310) Batched serving on the MLX path: several replies decoding at once
- [#12143](https://github.com/unslothai/unsloth/pull/12143) Gate the Mllama CUDA forward test on has_real_cuda
- [#11083](https://github.com/unslothai/unsloth/pull/11083) Studio: keep the last full-attention layer unquantized in the MLX KV cache
- [#11585](https://github.com/unslothai/unsloth/pull/11585) Pass gradients through compressed-tensors activation quantization so W8A8 checkpoints train with LoRA
- [#12135](https://github.com/unslothai/unsloth/pull/12135) Count the MLX grammar engine slot in the Apple Silicon step totals
- [#12117](https://github.com/unslothai/unsloth/pull/12117) Studio: show the Hub error for an unreadable GGUF repo instead of routing it to Transformers
- [#11800](https://github.com/unslothai/unsloth/pull/11800) Unsloth Desktop: Create, Edit, and Delete Skills from the Skills Menu
- [#11379](https://github.com/unslothai/unsloth/pull/11379) Studio: read more chat attachment formats, and hand the rest to the python tool
- [#12114](https://github.com/unslothai/unsloth/pull/12114) Keep the Triton MoE grouped GEMM in compiled graphs and index weights past 2^31 elements
- [#12115](https://github.com/unslothai/unsloth/pull/12115) Keep ORPO / CPO rows within max_length on TRL 0.29+
- [#12089](https://github.com/unslothai/unsloth/pull/12089) Trim comments in the DeepSeek-V4 grouped LoRA, remote-code shims and Mistral-format loader code
- [#12107](https://github.com/unslothai/unsloth/pull/12107) Treat a reaped grandchild as dead in the formatter timeout test
- [#11651](https://github.com/unslothai/unsloth/pull/11651) Unsloth Studio installer (AMD/Linux): explain why a newer ROCm gets ROCm 7.2 PyTorch
- [#11995](https://github.com/unslothai/unsloth/pull/11995) Studio: cache and coalesce nvidia-smi reads in the backend
- [#11082](https://github.com/unslothai/unsloth/pull/11082) Studio: quantize the KV cache of sliding-window MLX models such as Gemma 4
- [#12097](https://github.com/unslothai/unsloth/pull/12097) Patch the TRL trainers that moved to trl.experimental (ORPO, CPO, Online DPO, GKD, ...)
- [#12088](https://github.com/unslothai/unsloth/pull/12088) GRPO: default to TRL's dapo loss with beta 0, cap CISPO weights at 5.0
- [#11659](https://github.com/unslothai/unsloth/pull/11659) Studio: share MLX VLM prompt-cache snapshot buffers and replay exact prompts
- [#12099](https://github.com/unslothai/unsloth/pull/12099) Carry the resolved attention implementation to nested configs a remote config baked flash attention into (Nemotron 3 Nano Omni)
- [#12101](https://github.com/unslothai/unsloth/pull/12101) Read settings.py as UTF-8 in the unknown-palette test
- [#12105](https://github.com/unslothai/unsloth/pull/12105) Read settings.py as utf-8 in the palette filter test
- [#11960](https://github.com/unslothai/unsloth/pull/11960) Studio: return an error when a model can't use the tools sent to it
- [#11857](https://github.com/unslothai/unsloth/pull/11857) Upload all GGUF files in one commit so create_pr opens one pull request
- [#11180](https://github.com/unslothai/unsloth/pull/11180) Studio: let full-scope keyless callers auto-switch models, and explain the refusal elsewhere
- [#11084](https://github.com/unslothai/unsloth/pull/11084) Studio: keep a pinned context as a request limit instead of refusing KV cache quantization
- [#10804](https://github.com/unslothai/unsloth/pull/10804) Studio: refuse a hand-set Metal context only past the GPU wired limit
- [#12039](https://github.com/unslothai/unsloth/pull/12039) Studio: regionally compile Lumina-2 and HiDream-I1, and re-decide their auto precision by measurement
- [#12015](https://github.com/unslothai/unsloth/pull/12015) Unsloth Studio / Desktop: let the GPUs picker say how much of the model each card gets
- [#12037](https://github.com/unslothai/unsloth/pull/12037) Load the repo AutoProcessor for AutoModel-only repo-code VLMs
- [#12033](https://github.com/unslothai/unsloth/pull/12033) Keep Llama 3.2 Vision off flash attention (vision and cross attention have no is_causal)
- [#12096](https://github.com/unslothai/unsloth/pull/12096) Studio: keep a chat's start date in the system prompt, note a new date on the latest user turn
- [#12040](https://github.com/unslothai/unsloth/pull/12040) Studio: skip the cuDNN benchmark search for the MiniMax-H3 audio VAE on A100 / B200 / RTX PRO 6000 (first render up to a minute faster, 25-29 GiB lower peak)
- [#12035](https://github.com/unslothai/unsloth/pull/12035) Studio: keep an eagerly decoded image VAE contiguous on NVIDIA
- [#12017](https://github.com/unslothai/unsloth/pull/12017) Studio: chat attachment cards, chips and the Library viewer
- [#12001](https://github.com/unslothai/unsloth/pull/12001) Studio: document viewer for PDF, Word, Excel and PowerPoint, with origin links in Library
- [#10180](https://github.com/unslothai/unsloth/pull/10180) Studio: honor response_format on the MLX backend with grammar-constrained decoding
- [#12036](https://github.com/unslothai/unsloth/pull/12036) Studio: decode the SDXL VAE in fp16 on fp16 GPUs
- [#11961](https://github.com/unslothai/unsloth/pull/11961) Studio: stop generating when the client disconnects on a non-streaming request
- [#12068](https://github.com/unslothai/unsloth/pull/12068) Fix the prebuilt wheel publish step and shorten its release notes
- [#11964](https://github.com/unslothai/unsloth/pull/11964) Studio: reject echo, suffix and best_of on /v1/completions
- [#11954](https://github.com/unslothai/unsloth/pull/11954) Studio: stop the dense-quant probes pinning a CUDA context on every card of a multi-GPU host
- [#11969](https://github.com/unslothai/unsloth/pull/11969) Studio: don't stop long running tool calls that print nothing
- [#11856](https://github.com/unslothai/unsloth/pull/11856) Studio: follow redirect pages when reading a web page
- [#11736](https://github.com/unslothai/unsloth/pull/11736) Unsloth Studio installer (AMD/Windows): don't mistake ZLUDA for an NVIDIA GPU
- [#11970](https://github.com/unslothai/unsloth/pull/11970) Studio: find models in a Hugging Face cache folder added as a location
- [#11858](https://github.com/unslothai/unsloth/pull/11858) Studio: tell Safari which account the Studio password belongs to
- [#11855](https://github.com/unslothai/unsloth/pull/11855) Stop unsloth chat and unsloth inference switching a loaded GGUF to a different quant
- [#10713](https://github.com/unslothai/unsloth/pull/10713) fix: handle strided cross entropy inputs
- [#11967](https://github.com/unslothai/unsloth/pull/11967) Studio: keep run duration on Mac when training with an eval set
- [#12079](https://github.com/unslothai/unsloth/pull/12079) Unsloth Studio / Desktop: keep the Images Cancel load pill off the model panel divider
- [#11974](https://github.com/unslothai/unsloth/pull/11974) Studio: put Reapply next to Generate on the image and video pages
- [#12082](https://github.com/unslothai/unsloth/pull/12082) Keep the padding-free column test off the datasets numpy formatter
- [#12064](https://github.com/unslothai/unsloth/pull/12064) Studio: quieter settings headings and one section gap on every page
- [#12030](https://github.com/unslothai/unsloth/pull/12030) Studio: rework Appearance settings and add flavor color themes
- [#12086](https://github.com/unslothai/unsloth/pull/12086) Give the killed formatter grandchild as long to die as it had to start
- [#11998](https://github.com/unslothai/unsloth/pull/11998) CI: CodeQL advanced setup that analyses only the languages a PR touches
- [#11871](https://github.com/unslothai/unsloth/pull/11871) Unsloth Studio (AMD/Windows): report an iGPU's used VRAM when a discrete card sits beside it
- [#12069](https://github.com/unslothai/unsloth/pull/12069) Keep TRL's own RL config defaults and clamp preference max_length
- [#12081](https://github.com/unslothai/unsloth/pull/12081) Back off and retry the update banner navigation on ERR_NO_BUFFER_SPACE
- [#12056](https://github.com/unslothai/unsloth/pull/12056) Studio: train a SQuAD answer's text, not the answers dict, when mapping columns to chat roles
- [#12071](https://github.com/unslothai/unsloth/pull/12071) Studio: read personalization only once a first sign-in has changed its password
- [#12077](https://github.com/unslothai/unsloth/pull/12077) Load #11526's text-core refusal in the save_method routing harness
- [#12074](https://github.com/unslothai/unsloth/pull/12074) Let the Projects section stand in for its row in the macOS tab walk
- [#12073](https://github.com/unslothai/unsloth/pull/12073) Reset the permission step's storage at the start of the next document
- [#12062](https://github.com/unslothai/unsloth/pull/12062) Studio: keep the sidebar menu shadow in light mode
- [#11951](https://github.com/unslothai/unsloth/pull/11951) Turn off Dr GRPO reward scaling under TRL's "group" default
- [#12066](https://github.com/unslothai/unsloth/pull/12066) Count #12016's section header among the sidebar's scaled 30px rows
- [#12065](https://github.com/unslothai/unsloth/pull/12065) Give the health wait's working-child tests room for the worker to start
- [#12063](https://github.com/unslothai/unsloth/pull/12063) Skip chordless menu items in the native chord collision check
- [#12032](https://github.com/unslothai/unsloth/pull/12032) Studio: open the user menu Help submenu upward
- [#12057](https://github.com/unslothai/unsloth/pull/12057) Studio: link folders when creating a project
- [#12016](https://github.com/unslothai/unsloth/pull/12016) Studio: custom sidebar sections, section menus and drag to reorder

#### 🐛 New Issues
- [#12084](https://github.com/unslothai/unsloth/issues/12084) [Bug] Terminal tool hard-freezes the app at dispatch when command text contains two self-referential assignments (`VAR=$VAR`) in one quoted string — unbounded recursion in pre-dispatch scan (tools.py:4012) `feature request` `bug` 💬1
- [#12058](https://github.com/unslothai/unsloth/issues/12058) [Bug] Randomly Getting "Invalid base64 value" When Valid MCP Image Returns `feature request` `bug` 💬1
- [#12140](https://github.com/unslothai/unsloth/issues/12140) [Blocked] Bitdefender Total Security detected an infected item when installing Unsloth Desktop for Windows (Unsloth-Desktop-Windows.exe) `bug` `windows` `antivirus-false-positive`
- [#12137](https://github.com/unslothai/unsloth/issues/12137) [Bug] macOS Pinyin input method prevents Enter key from sending chat messages `feature request` `bug`
- [#12072](https://github.com/unslothai/unsloth/issues/12072) [Feature] Support Gigatoken as a tokenizer backend `feature request`

#### 🔒 Closed Issues
- [#6542](https://github.com/unslothai/unsloth/issues/6542) [Feature] chat title fix
- [#12041](https://github.com/unslothai/unsloth/issues/12041) 可以添加中国的模型镜像站吗？
- [#11529](https://github.com/unslothai/unsloth/issues/11529) [Bug] Make Hugging Face search work for blocked countries
- [#12020](https://github.com/unslothai/unsloth/issues/12020) [Bug] Please fill in your issue title here.
- [#10215](https://github.com/unslothai/unsloth/issues/10215) Deep research fails when using MLx models but works with GGUF models of the same family
- [#11551](https://github.com/unslothai/unsloth/issues/11551) [Bug] Previously working models fail to load after recent updates (401 errors and invalid repository resolution)
- [#11742](https://github.com/unslothai/unsloth/issues/11742) [Feature] Unsloth Studio / Desktop: create and edit skills from the Skills dialog instead of only from files or chat
- [#11140](https://github.com/unslothai/unsloth/issues/11140) OpenAI API: auto-switch does not cold-load a downloaded GGUF, so `/v1/chat/completions` returns 400 "No model loaded" when nothing is loaded
- [#11474](https://github.com/unslothai/unsloth/issues/11474) [Feature] Unsloth Studio / Desktop: the GPUs picker orders devices but can't say how much each one gets
- [#11953](https://github.com/unslothai/unsloth/issues/11953) [Bug] Unsloth Studio / Desktop: the dense-quant capability probe pins a CUDA context on every GPU of a multi-GPU host, so an idle Studio holds ~360 MB on a 3090 + 3060
- [#11982](https://github.com/unslothai/unsloth/issues/11982) [Feature] Unsloth Studio / Desktop: Cancel load button is jammed against the model panel divider
- [#12055](https://github.com/unslothai/unsloth/issues/12055) [Unsloth Bug] Studio trains a SQuAD answers dict's repr instead of the answer text when mapping columns to chat roles

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,115 · **Open issues:** 391 · **Last push:** 3h ago

On September 28, 2026, there were no new releases for AIBrix, but several important pull requests were merged. Notably, PR #2833 fixed a bug by ensuring that the statistics update winner is awaited before the AddRequestCount function returns. Additionally, PR #2831 addressed an issue where the HTTPRoute for shared models would be inadvertently deleted with the removal of a workload, while PR #2828 improved the CI process by implementing retries for RoleSet updates in the event of conflicts in the topology policy specification. Among the new issues, RFC #2826 garnered attention for proposing support for external routing decisions within the Gateway plugin, reflecting a growing interest in enhancing routing flexibility.

#### ✅ Merged PRs
- [#2833](https://github.com/vllm-project/aibrix/pull/2833) [Bug] Wait for the stats update winner before AddRequestCount returns
- [#2831](https://github.com/vllm-project/aibrix/pull/2831) [Bug] Preserve shared model HTTPRoute on workload deletion
- [#2828](https://github.com/vllm-project/aibrix/pull/2828) [CI] Retry RoleSet updates on conflict in the topology policy spec

#### 🐛 New Issues
- [#2826](https://github.com/vllm-project/aibrix/issues/2826) [RFC]: Support external routing decisions in the Gateway plugin `area/gateway` `kind/feature` `area/website` `area/installation` 💬3
- [#2824](https://github.com/vllm-project/aibrix/issues/2824) [Bug] Deleting one workload removes the HTTPRoute for a model that other workloads still serve `kind/bug` `area/gateway` 💬2
- [#2830](https://github.com/vllm-project/aibrix/issues/2830) [Testing] Triage of tests that never run: disabled specs and suites that no CI job compiles `area/gateway` `area/testing` `kind/misc` `area/website` 💬1
- [#2825](https://github.com/vllm-project/aibrix/issues/2825) [RFC]: Autoscaler-driven elastic EP: observe-first staging, membership semantics, and failure rules `kind/feature` `area/orchestration` 💬1

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 5,930 · **Open issues:** 538 · **Last push:** <1h ago

Semantic Router has released version v0.4.0, marking a significant milestone with 982 commits contributed by 130 developers, including 107 first-time contributors. This update highlights improvements in models, runtime, and evaluation, along with enhanced user experience. Among the key changes, the documentation was updated to reflect the rebranding of the former Envoy AI Gateway to Agent Router. However, there are several urgent bugs to address, including issue #4296, which involves stale owner references in active tool-loop continuations and issue #4281 that causes the serve command to abort on WSL2 due to missing directories. This bustling day in development showcases both community growth and the ongoing challenges within the project.

#### 🚀 New Releases
- [v0.4.0](https://github.com/vllm-project/semantic-router/releases/tag/v0.4.0) Release v0.4.0

#### ✅ Merged PRs
- [#4291](https://github.com/vllm-project/semantic-router/pull/4291) [Bug] Compare pull request CI plans against the merged-into main
- [#4278](https://github.com/vllm-project/semantic-router/pull/4278) [Docs] Use the Agent Router name for the former Envoy AI Gateway

#### 🐛 New Issues
- [#4296](https://github.com/vllm-project/semantic-router/issues/4296) [Bug] Bypass dispatch leaves stale owner for active tool-loop continuation `bug` `accepted` `in-progress` `wg/agentic-context` 💬4
- [#4292](https://github.com/vllm-project/semantic-router/issues/4292) [Bug] Empty request bodies bypass ingress validation and reach the upstream `bug` `accepted` `in-progress` `wg/data-plane-networking` 💬2
- [#4283](https://github.com/vllm-project/semantic-router/issues/4283) [Bug] protocol-compatibility matrix overstates reasoning-content support `bug` `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬2
- [#4282](https://github.com/vllm-project/semantic-router/issues/4282) [Bug] Non-streaming Anthropic Messages requests fail with 502 when the OpenAI backend omits usage `bug` `accepted` `in-progress` `wg/data-plane-networking` 💬2
- [#4281](https://github.com/vllm-project/semantic-router/issues/4281) [Bug] v0.4.0 serve aborts on WSL2 when XDG_RUNTIME_DIR points at a missing directory `bug` `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬2
- [#4284](https://github.com/vllm-project/semantic-router/issues/4284) [Docs] New v0.4.0 CLI commands lack prose documentation `needs-acceptance` `wg/developer-experience-ecosystem` `documentation` 💬2
- [#4275](https://github.com/vllm-project/semantic-router/issues/4275) [CI/Build] Remove inherited throughput caps from release and development CI `accepted` `owner/maintainers` 💬2
- [#4273](https://github.com/vllm-project/semantic-router/issues/4273) [CI] Make stable release publication build-only `accepted` `release-blocker` `owner/maintainers` 💬2
- [#4293](https://github.com/vllm-project/semantic-router/issues/4293) [Docs] x-vsr header contract states two headers as unconditional that are emitted conditionally `needs-acceptance` `wg/developer-experience-ecosystem` `documentation` 💬1
- [#4279](https://github.com/vllm-project/semantic-router/issues/4279) [CI/Build] Attach nested Candle assets to GitHub Release `bug` `accepted` `owner/maintainers` 💬1
- [#4271](https://github.com/vllm-project/semantic-router/issues/4271) [Bug] multi-endpoint jailbreak-detection treats a no-match benign request as a contract error `bug` `accepted` `in-progress` `wg/evaluation-quality` 💬1
- [#4287](https://github.com/vllm-project/semantic-router/issues/4287) [Bug] CI plan counts main's newer commits as pull request changes `bug` `accepted` `owner/maintainers`
- [#4285](https://github.com/vllm-project/semantic-router/issues/4285) [Bug] Recipe conformance Results cannot find per-recipe image receipts `bug` `accepted` `in-progress` `owner/maintainers`

#### 🔒 Closed Issues
- [#4126](https://github.com/vllm-project/semantic-router/issues/4126) [Docs] Use the Agent Router name for the former Envoy AI Gateway
- [#4269](https://github.com/vllm-project/semantic-router/issues/4269) [CI] Qualify CLI package on first release tag push
- [#4275](https://github.com/vllm-project/semantic-router/issues/4275) [CI/Build] Remove inherited throughput caps from release and development CI
- [#4273](https://github.com/vllm-project/semantic-router/issues/4273) [CI] Make stable release publication build-only
- [#4263](https://github.com/vllm-project/semantic-router/issues/4263) [Bug] Trivy keeps two KSV-0049 alerts open for the scoped config-writer Role
- [#4267](https://github.com/vllm-project/semantic-router/issues/4267) [Bug] sr-bench reports a stopped ledger when its host port is taken
- [#4279](https://github.com/vllm-project/semantic-router/issues/4279) [CI/Build] Attach nested Candle assets to GitHub Release
- [#4287](https://github.com/vllm-project/semantic-router/issues/4287) [Bug] CI plan counts main's newer commits as pull request changes

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*