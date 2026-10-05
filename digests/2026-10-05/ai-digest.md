# 📡 AI Ecosystem Digest — 2026-10-05

> Generated 2026-10-05 01:40 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 149,427 | 23 | 16 | 0 | 0 |
| [OpenAI Codex](https://github.com/openai/codex) | 127,856 | 18 | 0 | 15 | 2 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 107,239 | 0 | 0 | 0 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,235 | 2 | 8 | 0 | 1 |
| [OpenCode](https://github.com/anomalyco/opencode) | 211,765 | 21 | 13 | 3 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 28,308 | 27 | 15 | 1 | 1 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 391,329 | 148 | 99 | 169 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 251,244 | 29 | 5 | 6 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 93,178 | 14 | 24 | 16 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 36,783 | 8 | 12 | 51 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 130,314 | 12 | 26 | 19 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 182,204 | 5 | 4 | 2 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 60,132 | 14 | 16 | 23 | 1 |
| [Unsloth](https://github.com/unslothai/unsloth) | 77,205 | 5 | 3 | 51 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,126 | 2 | 9 | 13 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,030 | 10 | 13 | 11 | 0 |

---

## ✨ Highlights

- **OpenAI Codex** released versions [rust-v0.162.0-alpha.13](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.13) and [rust-v0.162.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.12).
- **Gemini CLI** launched release [v0.64.0-nightly.20261005.gfb972b2f8](https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0-nightly.20261005.gfb972b2f8).
- **OpenClaw** merged a significant PR [#165243](https://github.com/openclaw/openclaw/pull/165243) that removed low-value tests to improve code quality.
- **Qwen Code** announced new issues related to [Kubernetes tool runtime](https://github.com/QwenLM/qwen-code/issues/13395) with 5 comments and a deferred review issue with 4 comments regarding permission rules.
- **OpenAI Codex** reported a hot new issue on [user authorization](https://github.com/openai/codex/issues/50769) that has gained attention with 7 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 149,427 · **Open issues:** 14,187 · **Last push:** <1h ago

On October 5, 2026, there were no new releases or merged pull requests for Claude Code, indicating a day of routine maintenance. Notably, the new issue #99525 calls for improved mobile support for VPS/headless servers in Dispatch, eliminating the need for an always-on desktop connection. Additionally, several significant bugs were reported, including #99539 relating to MCP OAuth refresh issues during session shutdown and #99538 concerning an out-of-memory crash loop in the desktop app when handling large cloud sessions. These issues suggest areas that may require immediate attention to enhance stability and user experience.

#### 🐛 New Issues
- [#99525](https://github.com/anthropics/claude-code/issues/99525) Feature request: Better Claude mobile support for VPS / headless servers in Dispatch (no always-on desktop needed) `enhancement` `area:cowork` 💬1
- [#99541](https://github.com/anthropics/claude-code/issues/99541) [Desktop] Sidebar session-to-group assignments lost after Windows reboot (groups remain, sessions become ungrouped) `bug` `has repro` `platform:windows` `data-loss` 💬1
- [#99495](https://github.com/anthropics/claude-code/issues/99495) [FEATURE] Sidebar groups: give sessions in a group shared context (group instructions + group awareness) `enhancement` `area:claude-code-web` `platform:web` 💬1
- [#99535](https://github.com/anthropics/claude-code/issues/99535) [Mods] Code with format: 'diff' draws as plain text in the Desktop app (terminal draws it correctly) `bug` `platform:macos` `area:plugins` `area:desktop` 💬1
- [#99513](https://github.com/anthropics/claude-code/issues/99513) [Bug] Stale claudeAiMcpEverConnected cache injects disconnected MCP tools into all sessions `bug` `platform:macos` `area:mcp` 💬1
- [#99366](https://github.com/anthropics/claude-code/issues/99366) Nonblocking PreToolUse hook failures repeat, truncate stderr, and never reach the agent `enhancement` `area:hooks` 💬1
- [#99542](https://github.com/anthropics/claude-code/issues/99542) WSL: text copied from Claude Code does not paste into an RDP session `bug` `has repro` `area:tui` `platform:wsl`
- [#99539](https://github.com/anthropics/claude-code/issues/99539) [BUG] MCP OAuth refresh started during session shutdown is abandoned, and the server ends up logged out `bug` `platform:macos` `area:auth` `area:mcp`
- [#99538](https://github.com/anthropics/claude-code/issues/99538) [BUG] Desktop app renderer OOM-crash loop when opening a large cloud session (600 MB → 5 GB in ~50 s) `bug` `has repro` `platform:windows` `area:desktop`
- [#99537](https://github.com/anthropics/claude-code/issues/99537) Problem report `bug` `needs-info`
- [#99536](https://github.com/anthropics/claude-code/issues/99536) I need more information to generate an appropriate GitHub issue title. "subagets" appears to be incomplete or unclear. Could you please provide: - The full bug report or description - What error mess `bug` `platform:windows` `area:agents` `needs-repro`
- [#99528](https://github.com/anthropics/claude-code/issues/99528) claude --cloud fails repository auth when a git url.insteadOf rule rewrites the GitHub remote `bug` `has repro` `platform:windows` `area:cli`
- [#99499](https://github.com/anthropics/claude-code/issues/99499) [BUG] claude.ai Gmail connector: "session expired" and tools vanish after /mcp Reconnect (VS Code, Windows) `bug` `platform:windows` `area:mcp` `platform:vscode`
- [#99529](https://github.com/anthropics/claude-code/issues/99529) [BUG] Scheduled tasks: 3 tools never auto-approved under Bypass permissions, the run hangs and holds a slot `bug` `platform:windows` `area:permissions` `area:routines`
- [#99534](https://github.com/anthropics/claude-code/issues/99534) Claude Code can't read the artboards of a Claude Design canvas artifact `enhancement` `area:tools`
- [#99523](https://github.com/anthropics/claude-code/issues/99523) Plan mode: ExitPlanMode has no way to request a narrow, scoped exception without triggering full-plan approval `enhancement` `area:tools`
- [#99533](https://github.com/anthropics/claude-code/issues/99533) [Bug] Compact progress UI missing during reactive compact operations `bug` `platform:macos` `area:tui` `area:core`
- [#99532](https://github.com/anthropics/claude-code/issues/99532) Many concurrent Claude Code processes refresh policy-limits / remote-settings in the same minute, causing hourly filesystem stalls in `~/.claude` `bug` `has repro` `platform:linux` `area:core`
- [#99531](https://github.com/anthropics/claude-code/issues/99531) [FEATURE] Option to hide the 'Browser connected' banner in VS Code; × currently disconnects instead of dismissing `enhancement` `platform:vscode` `area:ui` `area:chrome`
- [#99530](https://github.com/anthropics/claude-code/issues/99530) [FEATURE] Ability to minimize task chips + access them from the ellipsis menu in top right of a session in Claude Desktop app `invalid`
- [#99527](https://github.com/anthropics/claude-code/issues/99527) Scheduled routine in a private project never ran `bug` `platform:web` `area:routines`
- [#99524](https://github.com/anthropics/claude-code/issues/99524) [BUG] After a network change, the next request hangs 180s on a dead connection before retrying (Linux) `bug` `has repro` `platform:linux` `area:networking`
- [#99526](https://github.com/anthropics/claude-code/issues/99526) [BUG] Ctrl+O file viewer uses alternate screen buffer — content not scrollable in terminal scrollback `bug` `platform:linux` `area:tui` `platform:wsl`

#### 🔒 Closed Issues
- [#85114](https://github.com/anthropics/claude-code/issues/85114) Desktop app: worktree directory and branch names diverge, and the status bar does not follow mid-session branch changes
- [#85146](https://github.com/anthropics/claude-code/issues/85146) VS Code extension: input focus outline in red/terracotta reads as an error state
- [#85416](https://github.com/anthropics/claude-code/issues/85416) Subagent effort level is unobservable: cannot tell whether frontmatter `effort:` applies to background-dispatched subagents
- [#85073](https://github.com/anthropics/claude-code/issues/85073) Tool result mimicked assistant's own turn; scheduled-wakeup prompt replayed as a stale user message
- [#85084](https://github.com/anthropics/claude-code/issues/85084) Mid-turn message injection tells the model to "continue this turn", which produces bundled answers when the injected message raises a separate topic
- [#85089](https://github.com/anthropics/claude-code/issues/85089) [Bug] Subagent Task tool spawns terminate during setup phase with spurious "user interrupt" on Windows
- [#85097](https://github.com/anthropics/claude-code/issues/85097) [BUG] financial-analysis marketplace plugin ships invalid .mcp.json (SyntaxError) — all 12 of its MCP servers fail to load
- [#85100](https://github.com/anthropics/claude-code/issues/85100) Extended thinking no longer renders as a collapsible/clickable block
- [#85104](https://github.com/anthropics/claude-code/issues/85104) Claude Desktop (macOS): main process hard-wedges when free RAM is low; WarmLifecycle keeps spawning session children with no memory backpressure
- [#85110](https://github.com/anthropics/claude-code/issues/85110) Computer use: invisible / click-through overlay windows falsely block clicks (Bartender, menu-bar managers)
- [#85124](https://github.com/anthropics/claude-code/issues/85124) [Bug] advisor server-tool 'overloaded' kills workflow-spawned subagents with a generic 'Connection closed mid-response' instead of a recoverable tool error (main loop degrades correctly)
- [#85134](https://github.com/anthropics/claude-code/issues/85134) Spawned subagent session banner shows account default model, not the model the spawn actually resolved to
- [#85156](https://github.com/anthropics/claude-code/issues/85156) Bash tool: unrelated stale check.py/pytest output bleeds into tool_result for `for` loops with command substitution
- [#85402](https://github.com/anthropics/claude-code/issues/85402) Refusal-fallback retry re-executes already-executed background Agent dispatches (duplicate sub-agents)
- [#85411](https://github.com/anthropics/claude-code/issues/85411) Auto mode: safety classifier blocks read-only MCP tools when the conversation model is unavailable
- [#85431](https://github.com/anthropics/claude-code/issues/85431) [BUG] Desktop session list: untitled sessions are titled from the raw first prompt with no disambiguation — automated runs collapse into dozens of identical rows

### OpenAI Codex (`openai/codex`)

**Stars:** 127,856 · **Open issues:** 20,620 · **Last push:** <1h ago

On October 5, 2026, the OpenAI Codex ecosystem saw the release of Rust versions 0.162.0-alpha.13 and 0.162.0-alpha.12, continuing to enhance the framework's capabilities. Key updates included the isolation of tracing in third-party tool tests and a feature flag for stable environment tool exposure. Significant merged pull requests also focused on improving server interaction, including honoring server reasoning defaults in new TUI threads and addressing issues with the Windows daemon's file lock management. Notably, a new issue has emerged regarding Codex Cloud, where published environments are not applying to new tasks, highlighting ongoing challenges with cloud integration.

#### 🚀 New Releases
- [rust-v0.162.0-alpha.13](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.13) 0.162.0-alpha.13
- [rust-v0.162.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.12) 0.162.0-alpha.12

#### ✅ Merged PRs
- [#50977](https://github.com/openai/codex/pull/50977) Isolate tracing in the strict third-party tool deferral test
- [#50964](https://github.com/openai/codex/pull/50964) Track inference tool changes in turn analytics
- [#50962](https://github.com/openai/codex/pull/50962) Gate stable environment tool exposure behind a feature flag
- [#50940](https://github.com/openai/codex/pull/50940) Recover malformed Windows deny-read ACL state safely
- [#50913](https://github.com/openai/codex/pull/50913) Use server model defaults for connected TUI fresh starts
- [#50811](https://github.com/openai/codex/pull/50811) Honor server reasoning summary defaults in new TUI threads
- [#50808](https://github.com/openai/codex/pull/50808) Prune TUI snapshots and consolidate behavior tests
- [#50804](https://github.com/openai/codex/pull/50804) Preserve review lifecycle ordering on failure
- [#50803](https://github.com/openai/codex/pull/50803) Use the managed daemon for eligible remote-control launches
- [#50802](https://github.com/openai/codex/pull/50802) Fall back to mklink when Windows daemon junction updates are denied
- [#50788](https://github.com/openai/codex/pull/50788) Open slash commands from empty drafts in Vim Normal mode
- [#50786](https://github.com/openai/codex/pull/50786) Remember Command Center grouping across launches
- [#50782](https://github.com/openai/codex/pull/50782) Retry Windows daemon release publication on transient file locks
- [#50781](https://github.com/openai/codex/pull/50781) Restrict TUI MCP startup notifications to owned threads
- [#50764](https://github.com/openai/codex/pull/50764) Allow `/archive` while a turn is running

#### 🐛 New Issues
- [#50769](https://github.com/openai/codex/issues/50769) [Dots][GitHub tools] Later user authorization is not reliably recognized across development and read-only reporting tasks `bug` `sandbox` `tool-calls` `dots` 💬7
- [#50879](https://github.com/openai/codex/issues/50879) Published Codex Cloud Start skill is missing from new task context `bug` `codex-web` `app` `skills` 💬4
- [#50932](https://github.com/openai/codex/issues/50932) [Linux/WSL2] Managed app-server cannot accept new sessions after its Unix control socket is unlinked `bug` `CLI` `connectivity` `app-server` 💬2
- [#50815](https://github.com/openai/codex/issues/50815) [Codex Cloud] Published environment not applied to new Cloud tasks `bug` `codex-web` `sandbox` 💬2
- [#50914](https://github.com/openai/codex/issues/50914) VS Code: rapid queued follow-ups fail with "Queued follow-up changed before dispatch" `bug` `windows-os` `extension` `app-server` 💬2
- [#50991](https://github.com/openai/codex/issues/50991) [Linux desktop] Scrollbar is too narrow to grab; provide a wider scrollbar or width setting `enhancement` `app` 💬1
- [#50801](https://github.com/openai/codex/issues/50801) [macOS App] Open project picker shortcut fails on new chat and closes an already-open picker `bug` `app` 💬1
- [#50990](https://github.com/openai/codex/issues/50990) Cloud execution disabled in VS Code despite configured Codex Cloud environment `bug` `windows-os` `extension` `app` 💬1
- [#50989](https://github.com/openai/codex/issues/50989) [Windows/Web] Published Codex Cloud environment cannot start a normal task; desktop reports app-server unavailable `bug` `windows-os` `app` `connectivity` 💬1
- [#50988](https://github.com/openai/codex/issues/50988) Codex Cloud runtime cannot access outbound network: proxy unreachable and direct DNS fails `bug` `codex-web` `connectivity` 💬1
- [#50985](https://github.com/openai/codex/issues/50985) [Dots] Active cloud workspace files and test evidence became unavailable without a requested reset `bug` `dots` 💬1
- [#50984](https://github.com/openai/codex/issues/50984) [macOS][26.930.51102] Restored desktop window freezes after ~30 seconds; File → New Window works `bug` `app` `session` `performance` 💬1
- [#50983](https://github.com/openai/codex/issues/50983) [Desktop][Remote MCP] Connection succeeds, then Presence ACK / connection-pool failures leave device Offline `bug` `mcp` `connectivity` `remote` 💬1
- [#50982](https://github.com/openai/codex/issues/50982) Windows: codex_app tools unavailable in dot-created tasks; recover after SystemRoot launcher workaround `bug` `windows-os` `mcp` `app` 💬1
- [#50971](https://github.com/openai/codex/issues/50971) [WSL] Copy remains busy when Linux clipboard initialization stalls; Windows fallback is never reached `bug` `windows-os` `TUI` `CLI` 💬1
- [#50987](https://github.com/openai/codex/issues/50987) GitHub connector update_ref rejects advertised expected_sha argument with InvalidActionArgumentsError `bug` `tool-calls`
- [#50986](https://github.com/openai/codex/issues/50986) Codex Cloud runtime cannot access outbound network - proxy:8080 unreachable and direct DNS fails `bug` `codex-web` `connectivity`
- [#50981](https://github.com/openai/codex/issues/50981) Codex Desktop on Windows selects MXC and fails before shell start when filesystem grants are present (0x80070002) `bug` `windows-os` `sandbox` `app`

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 107,239 · **Open issues:** 795 · **Last push:** <1h ago

On October 5, 2026, the Gemini CLI saw the release of version v0.64.0-nightly.20261005.gfb972b2f8, which includes notable updates since the previous nightly release. There were no merged pull requests or new issues reported in the last 24 hours, indicating a day of routine maintenance for the project. The most interesting aspect remains the continuous development leading to the latest nightly release, showcasing ongoing enhancements in functionality and performance.

#### 🚀 New Releases
- [v0.64.0-nightly.20261005.gfb972b2f8](https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0-nightly.20261005.gfb972b2f8) Release v0.64.0-nightly.20261005.gfb972b2f8

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,235 · **Open issues:** 2,170 · **Last push:** 6h ago

On October 5, 2026, GitHub Copilot CLI saw the release of version 1.0.92-4, which introduced new `copilot config` subcommands that allow users to list, read, set, and remove settings. The update also improved the first-run startup process by extracting the bundled CLI package in a child process, enhanced responsiveness when connecting to multiple MCP servers, and added the capability for canvas actions to return images to the model via invoke_canvas_action. Additionally, it resolved an issue where legacy HTTP+SSE MCP connections could hang indefinitely. Notably, two new issues were reported: #5051 regarding timeouts after approximately 20 minutes and #5052 concerning preflight failures on Ubuntu 26.04 despite successful tests.

#### 🚀 New Releases
- [v1.0.92-4](https://github.com/github/copilot-cli/releases/tag/v1.0.92-4) 1.0.92-4

#### 🐛 New Issues
- [#5051](https://github.com/github/copilot-cli/issues/5051) Copilot CLI timeouts after about 20min `triage` 💬1
- [#5052](https://github.com/github/copilot-cli/issues/5052) [Linux][Ubuntu 26.04] Tool sandbox preflight fails although bubblewrap namespace test succeeds `triage`

#### 🔒 Closed Issues
- [#640](https://github.com/github/copilot-cli/issues/640) copilot cli : Invalid session ID: read_sql_files. Please supply a valid session ID to read output from.
- [#5008](https://github.com/github/copilot-cli/issues/5008) Startup error "Failed to read model provider attribution: Error: Not authenticated" in 1.0.89
- [#3496](https://github.com/github/copilot-cli/issues/3496) Copy/Paste not working properly when selecting text from the Timeline
- [#2950](https://github.com/github/copilot-cli/issues/2950) Calling custom agent via prompt ignores configured model in agent.md
- [#4966](https://github.com/github/copilot-cli/issues/4966) 1.0.88 regression: joinSession() stalls during extension startup, causing repeated 30s timeouts and delaying -i
- [#4532](https://github.com/github/copilot-cli/issues/4532) Pending chat lines duplicate and won't go away, eventually filling up the screen
- [#1634](https://github.com/github/copilot-cli/issues/1634) `/agent` & `/model` should auto complete the avialable agents/models
- [#3412](https://github.com/github/copilot-cli/issues/3412) UI shows background agents as 'running' after they have completed

### OpenCode (`anomalyco/opencode`)

**Stars:** 211,765 · **Open issues:** 6,304 · **Last push:** <1h ago

On October 5, 2026, there were no new releases for OpenCode; however, several significant pull requests were merged. Notably, PR #53250 introduced the feature to show read ranges after file paths in the TUI, while PR #53249 fixed an issue in gui-extensions that retained agent previews for off-screen sessions. A refactor in PR #53232 improved the handling of stream event handlers and inner protocol helpers. Among the new issues, #53159 raised concerns about the "Revert" action not functioning during active turns, which has garnered attention from the community. Additionally, automated issues #53248 and #53245 were mistakenly filed and should be ignored.

#### ✅ Merged PRs
- [#53250](https://github.com/anomalyco/opencode/pull/53250) feat(tui): show read ranges after file paths
- [#53249](https://github.com/anomalyco/opencode/pull/53249) fix(gui-extensions): hold agent previews for sessions that are not on screen
- [#53232](https://github.com/anomalyco/opencode/pull/53232) refactor(ai): untrace stream event handlers and inner protocol helpers

#### 🐛 New Issues
- [#53248](https://github.com/anomalyco/opencode/issues/53248) Opened by mistake by an automation, please ignore `needs:compliance` 💬2
- [#53245](https://github.com/anomalyco/opencode/issues/53245) Opened by mistake by an automation, please ignore `needs:compliance` 💬2
- [#53159](https://github.com/anomalyco/opencode/issues/53159) Message actions Revert does nothing while a turn is running 💬2
- [#53235](https://github.com/anomalyco/opencode/issues/53235) [FEATURE]: Fill context limits for OpenAI-compatible providers from their /models advertisement 💬2
- [#53176](https://github.com/anomalyco/opencode/issues/53176) ECONNRESET: `needs:compliance` 💬2
- [#53146](https://github.com/anomalyco/opencode/issues/53146) session: two server processes sharing one opencode.db allocate session_message.seq independently - UNIQUE(seq) collisions fail sessions 💬2
- [#53184](https://github.com/anomalyco/opencode/issues/53184) session: failed turns replay already-executed side-effectful tool calls (duplicate external writes per retry) 💬2
- [#53252](https://github.com/anomalyco/opencode/issues/53252) [FEATURE]: Show reset time on free usage limit like Go 💬1
- [#53251](https://github.com/anomalyco/opencode/issues/53251) Zen models take forever to respond now and a prompt keeps popping up 💬1
- [#53243](https://github.com/anomalyco/opencode/issues/53243) zen gateway: upstream 400 validation errors lose the upstream message (response body is only the model id) 💬1
- [#53246](https://github.com/anomalyco/opencode/issues/53246) Error: Your organization does not have access to this model. With Chat-GPT models on Zen 💬1
- [#53239](https://github.com/anomalyco/opencode/issues/53239) [FEATURE]: Optional sticky last user prompt in V2 Desktop/Web 💬1
- [#53230](https://github.com/anomalyco/opencode/issues/53230) [Bug]: Byte-capped Read reports prefix count as whole-file total 💬1
- [#53226](https://github.com/anomalyco/opencode/issues/53226) mcp: local server not restarted after transport error 💬1
- [#53225](https://github.com/anomalyco/opencode/issues/53225) feat(tui): let plugins decorate and click the rendered text of a transcript part `needs:compliance` 💬1
- [#53224](https://github.com/anomalyco/opencode/issues/53224) Agent ingress HTML-escapes message bodies and silently truncates long bodies `needs:compliance` 💬1
- [#53221](https://github.com/anomalyco/opencode/issues/53221) desktop: renderer crashes with "Database is not empty and has no session table" when shared DB is migrated by v2 CLI 💬1
- [#53220](https://github.com/anomalyco/opencode/issues/53220) Feature request: opt-in exclusive worktree ownership for session families (v2) `needs:compliance` 💬1
- [#53242](https://github.com/anomalyco/opencode/issues/53242) Compaction produced no summary when the conversation ends on a tool result
- [#53228](https://github.com/anomalyco/opencode/issues/53228) Desktop: Cannot find package 'ws' when building under Bun without Node.js
- [#53222](https://github.com/anomalyco/opencode/issues/53222) [FEATURE]: List brethof-brain-opencode (memory plugin) on the ecosystem page

#### 🔒 Closed Issues
- [#52595](https://github.com/anomalyco/opencode/issues/52595) Where's GO subscription???
- [#52592](https://github.com/anomalyco/opencode/issues/52592) Had to pay twice for usage?
- [#52596](https://github.com/anomalyco/opencode/issues/52596) Why my subscription is gone? I paid 10d yesterday now say 403
- [#52605](https://github.com/anomalyco/opencode/issues/52605) OpenCode Go subscription charged twice
- [#52613](https://github.com/anomalyco/opencode/issues/52613) web: inline code containing a slash always renders as a dead local-file link
- [#53248](https://github.com/anomalyco/opencode/issues/53248) Opened by mistake by an automation, please ignore
- [#53245](https://github.com/anomalyco/opencode/issues/53245) Opened by mistake by an automation, please ignore
- [#53159](https://github.com/anomalyco/opencode/issues/53159) Message actions Revert does nothing while a turn is running
- [#52589](https://github.com/anomalyco/opencode/issues/52589) Suscripción Go
- [#52579](https://github.com/anomalyco/opencode/issues/52579) billing: Zen (opencode) DeepSeek usage counted against OpenCode Go plan quota
- [#53184](https://github.com/anomalyco/opencode/issues/53184) session: failed turns replay already-executed side-effectful tool calls (duplicate external writes per retry)
- [#50313](https://github.com/anomalyco/opencode/issues/50313) [BUG]: Plugin tool context.metadata() is never executed, so live updates are dropped
- [#53243](https://github.com/anomalyco/opencode/issues/53243) zen gateway: upstream 400 validation errors lose the upstream message (response body is only the model id)

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 28,308 · **Open issues:** 1,674 · **Last push:** <1h ago

On October 5, 2026, Qwen Code released version v0.24.7-nightly.20261004.9915c7ff8f, which included critical fixes such as aligning Code Mode text with lazy tool discovery and ensuring approved cross-directory tool calls are honored. Notably, merged PR #13411 enhanced the CLI by adding an explicit timeout for settled file tool outcomes. Among new issues, #13395 raised significant concern about the Kubernetes tool runtime progress in relation to cross-platform delivery access controls. Overall, today's updates showcase ongoing refinements and enhancements to the platform's functionality.

#### 🚀 New Releases
- [v0.24.7-nightly.20261004.9915c7ff8f](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.7-nightly.20261004.9915c7ff8f) Release v0.24.7-nightly.20261004.9915c7ff8f

#### ✅ Merged PRs
- [#13411](https://github.com/QwenLM/qwen-code/pull/13411) test(cli): give the settled file tool outcome waitFor an explicit timeout (#13408)

#### 🐛 New Issues
- [#13395](https://github.com/QwenLM/qwen-code/issues/13395) tracking(runtime): Kubernetes tool runtime 进度与跨平台交付门禁 `priority/P2` `type/feature-request` `category/core` `scope/session-management` 💬5
- [#13412](https://github.com/QwenLM/qwen-code/issues/13412) Deferred review finding from PR #12531: attribute an MCP permission rule to its server from producer identity `priority/P3` `status/blocked` `category/core` `scope/mcp` 💬4
- [#13392](https://github.com/QwenLM/qwen-code/issues/13392) PreToolUse updatedInput is ignored in Desktop/ACP 0.24.7 (follow-up to #12922) `priority/P2` `type/bug` `category/core` `roadmap/hooks-events` 💬4
- [#13387](https://github.com/QwenLM/qwen-code/issues/13387) Custom commands reinterpret @{...} file content as template syntax `priority/P2` `type/bug` `category/cli` `scope/commands` 💬4
- [#13386](https://github.com/QwenLM/qwen-code/issues/13386) test(managed-agent): HarnessCoordinatorTest 'retry' case asserts an exact cancel count on a path with no mutual exclusion, so this required job flakes red on unrelated PRs `priority/P2` `type/bug` `category/development` `scope/testing` 💬4
- [#13374](https://github.com/QwenLM/qwen-code/issues/13374) fix(managed-agent): residual admission gap-lock deadlock on the shared command index (mutation-admission siblings) `priority/P2` `type/bug` `category/core` `scope/session-management` 💬4
- [#13415](https://github.com/QwenLM/qwen-code/issues/13415) Local Qwen3.x models via OpenAI-compatible endpoint are assumed to have a 1M context window, so auto-compaction never runs before the server's limit `priority/P2` `model/long-context` `type/bug` `category/core` 💬3
- [#13414](https://github.com/QwenLM/qwen-code/issues/13414) models.dev catalog: versionSpellingAlias refuses ids whose minor version carries a variant letter (glm-4-5v misses glm-4.5v), and the limit-less alias branch is untested `priority/P2` `type/bug` `category/core` `scope/token-management` 💬3
- [#13413](https://github.com/QwenLM/qwen-code/issues/13413) bug(hosted): a transient Managed Session Store outage permanently stops Session log writes, wedging the running Turn `priority/P1` `type/bug` `category/core` `scope/session-management` 💬3
- [#13396](https://github.com/QwenLM/qwen-code/issues/13396) Web Shell /memory panel: browse managed auto-memory and expose auto-memory/auto-dream toggles `priority/P3` `type/feature-request` `category/ui` `scope/memory` 💬3
- [#13370](https://github.com/QwenLM/qwen-code/issues/13370) Main CI failed: SDK Java — HostedProcessCrashIT.processCrashesNeverReplayHostedToolsOnMySql `type/bug` `status/ready-for-agent` `autofix/skip` 💬3
- [#13393](https://github.com/QwenLM/qwen-code/issues/13393) Reasoning effort tiers are still hardcoded / manually declared — expose them from the models.dev catalog like limits and modalities (#11959 follow-up) `priority/P2` `type/feature-request` `category/core` `scope/content-generation` 💬3
- [#13394](https://github.com/QwenLM/qwen-code/issues/13394) refactor(transcript): give the internal Code Mode tool-result subtype a single owner `priority/P3` `status/blocked` `type/feature-request` `category/core` 💬3
- [#13391](https://github.com/QwenLM/qwen-code/issues/13391) Web Shell: ru locale for Goal card labels + Goal verdict should inherit user output language `priority/P3` `category/ui` `type/enhancement` `scope/web-shell` 💬3
- [#13389](https://github.com/QwenLM/qwen-code/issues/13389) /context detail lists more MCP tokens than the MCP tools row `priority/P3` `type/bug` `category/cli` `scope/commands` 💬3
- [#13383](https://github.com/QwenLM/qwen-code/issues/13383) LSP diagnostics: relevance is decided by two hand-listed case sets, so a queried file outside seven extensions gets no relevance decision at all `priority/P2` `type/bug` `category/core` `status/ready-for-human` 💬3
- [#13384](https://github.com/QwenLM/qwen-code/issues/13384) ci(flaky): Test lane fails on vitest-worker onTaskUpdate RPC timeout under runner load `priority/P2` `type/bug` `category/development` `scope/testing` 💬3
- [#13377](https://github.com/QwenLM/qwen-code/issues/13377) decide(managed-agent): H0b logical vs physical start — tighten the admitted/running_attached task view `priority/P3` `category/core` `scope/session-management` `type/enhancement` 💬3
- [#13378](https://github.com/QwenLM/qwen-code/issues/13378) ACP Code Mode writes unmarked nested results and loses completed-turn branch checkpoints `priority/P2` `type/bug` `category/cli` `scope/session-management` 💬3
- [#13417](https://github.com/QwenLM/qwen-code/issues/13417) Main CI failed: E2E Tests — cli/qwen-serve-routes.test.ts > … > honors and reserves a normalized caller-supplied session ID `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#13373](https://github.com/QwenLM/qwen-code/issues/13373) Main CI failed: SDK Java — HostedWorkspaceToolTurnIT.packagedHarnessUsesSavedWorkspacesThroughRealBrokerWorkerAndSqlStore `type/bug` `status/ready-for-agent` `autofix/skip` `autofix/approved` 💬2
- [#13397](https://github.com/QwenLM/qwen-code/issues/13397) Main CI failed: Qwen Code CI — src/serve/hosted-workspace-tool-turn.test.ts > reports an answer that loses the race to the expiry as expired `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#13408](https://github.com/QwenLM/qwen-code/issues/13408) Main CI failed: Qwen Code CI — src/serve/hosted-harness-session.test.ts > … > refuses a cold load when a settled file tool outcome is missin… `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#13409](https://github.com/QwenLM/qwen-code/issues/13409) Deferred review findings from PR #13343: docs(managed-agent): repair the R2 review's doc findings on #12692 💬1
- [#13410](https://github.com/QwenLM/qwen-code/issues/13410) Deferred review findings from PR #13342: fix(web-shell): managed session UI correctness from the #12692 R2 review 💬1
- [#13405](https://github.com/QwenLM/qwen-code/issues/13405) Deferred review findings from PR #13219: fix(managed-agent): bound retry loops with terminal states 💬1
- [#13372](https://github.com/QwenLM/qwen-code/issues/13372) Main CI failed: Qwen Code CI — src/managed-runtime/managed-session-authority.hook-scale.test.ts > admits a Hook execution without validating… `type/bug` `status/ready-for-agent` `autofix/approved` 💬1

#### 🔒 Closed Issues
- [#13238](https://github.com/QwenLM/qwen-code/issues/13238) agent hosts: late result after terminal settlement is acknowledged as already applied and drops incurred usage
- [#13130](https://github.com/QwenLM/qwen-code/issues/13130) Qwen Code Desktop became unusable for me because every workspace suddenly turned untrusted
- [#13044](https://github.com/QwenLM/qwen-code/issues/13044) docs(cli): correct Hosted Runtime Broker option help
- [#13328](https://github.com/QwenLM/qwen-code/issues/13328) feat(managed-agent): a second concurrent Session on the same Workspace mount should queue, not fail the Turn terminally
- [#13319](https://github.com/QwenLM/qwen-code/issues/13319) fix(managed-agent): a model retry landing after the first published chunk glues the orphaned prefix into the public transcript
- [#13181](https://github.com/QwenLM/qwen-code/issues/13181) fix(managed-agent): database amplification on session hot paths (snapshot rewrite, SSE, lists, publication)
- [#13370](https://github.com/QwenLM/qwen-code/issues/13370) Main CI failed: SDK Java — HostedProcessCrashIT.processCrashesNeverReplayHostedToolsOnMySql
- [#13043](https://github.com/QwenLM/qwen-code/issues/13043) test(core): pin the executionStatus of a cancelled Shell result that also carries an error
- [#13239](https://github.com/QwenLM/qwen-code/issues/13239) /context estimate can account for more tokens than the context window
- [#13316](https://github.com/QwenLM/qwen-code/issues/13316) Main CI failed: Qwen Code CI — src/serve/hosted-harness-session.test.ts > … > reports and clears the unknown Hook fence (reload: true)
- [#13051](https://github.com/QwenLM/qwen-code/issues/13051) test(core): remove the redundant Skill registry override in the resume matrix
- [#13408](https://github.com/QwenLM/qwen-code/issues/13408) Main CI failed: Qwen Code CI — src/serve/hosted-harness-session.test.ts > … > refuses a cold load when a settled file tool outcome is missin…
- [#758](https://github.com/QwenLM/qwen-code/issues/758) freezing, contracting
- [#13372](https://github.com/QwenLM/qwen-code/issues/13372) Main CI failed: Qwen Code CI — src/managed-runtime/managed-session-authority.hook-scale.test.ts > admits a Hook execution without validating…
- [#1070](https://github.com/QwenLM/qwen-code/issues/1070) request error

### Claude Code Skills (`anthropics/skills`)

Top open skill PRs by community engagement:
- [#1298](https://github.com/anthropics/skills/pull/1298) fix(skill-creator): isolate trigger evals and handle Windows and runtime failures
- [#1742](https://github.com/anthropics/skills/pull/1742) fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers
- [#1771](https://github.com/anthropics/skills/pull/1771) feat(skills): add proofcore-contract-auditor for smart contract notarization
- [#1734](https://github.com/anthropics/skills/pull/1734) Detect orphaned docx comments
- [#1703](https://github.com/anthropics/skills/pull/1703) Add md2video-audio skill

---

## 🦞 OpenClaw Ecosystem

### OpenClaw (`openclaw/openclaw`)

**Stars:** 391,329 · **Open issues:** 9,341 · **Last push:** <1h ago

On October 5, 2026, there were no new releases for OpenClaw, but several significant updates were made through merged pull requests. Notable fixes included addressing a failure in Windows Bun packaging (#165241), resolving sessions that remained active post-restart (#165174), and improving media handling during automated replies (#165066). Additionally, refinements to the CI process were introduced to enhance the readiness of tests (#165145) and streamline script management (#165202). Among new issues, a critical bug was reported regarding dashboard image attachments failing due to missing staged folders, which has drawn attention from the community (#165047).

#### ✅ Merged PRs
- [#165243](https://github.com/openclaw/openclaw/pull/165243) test(core,plugins,ui): remove low-value tests (batch d208)
- [#165223](https://github.com/openclaw/openclaw/pull/165223) fix: accept detailed web-search schema rejection
- [#165169](https://github.com/openclaw/openclaw/pull/165169) fix(plugins): reclaim Windows Jiti generation caches
- [#165145](https://github.com/openclaw/openclaw/pull/165145) fix: stabilize CI details browser test readiness
- [#165103](https://github.com/openclaw/openclaw/pull/165103) chore(skills): sync autoreview from openclaw/agent-skills 3d3034a
- [#165110](https://github.com/openclaw/openclaw/pull/165110) refactor(runtime): deslop unused option plumbing
- [#165241](https://github.com/openclaw/openclaw/pull/165241) fix: Windows Bun packaging fails to find npm
- [#165248](https://github.com/openclaw/openclaw/pull/165248) chore(ui): refresh control ui locales
- [#165134](https://github.com/openclaw/openclaw/pull/165134) refactor(sessions): compose history and SessionManager reads on the incognito actor (P7f1, inactive)
- [#165183](https://github.com/openclaw/openclaw/pull/165183) refactor(infra): remove redundant calendar date finite guard
- [#165174](https://github.com/openclaw/openclaw/pull/165174) fix(sessions): settle sessions left running after restart
- [#165066](https://github.com/openclaw/openclaw/pull/165066) fix(auto-reply): surface silent inbound media staging failures
- [#165190](https://github.com/openclaw/openclaw/pull/165190) perf(gateway): omit duplicate model catalogs from chat metadata
- [#165240](https://github.com/openclaw/openclaw/pull/165240) fix: await managed-worktree cleanup in lifecycle E2E
- [#165239](https://github.com/openclaw/openclaw/pull/165239) refactor(gateway): deslop worker session hosting
- [#165202](https://github.com/openclaw/openclaw/pull/165202) refactor(scripts): deslop scripts
- [#165219](https://github.com/openclaw/openclaw/pull/165219) fix: stuck publication error after worktree cleanup; compact Publish PR card
- [#165228](https://github.com/openclaw/openclaw/pull/165228) fix: reduce UI startup download for Talk settings
- [#165237](https://github.com/openclaw/openclaw/pull/165237) chore(ui): refresh control ui locales
- [#165231](https://github.com/openclaw/openclaw/pull/165231) chore(ci): defer heavy PR jobs to later validation tiers
- [#150587](https://github.com/openclaw/openclaw/pull/150587) fix(ui): clarify sidebar agent selection and roster actions
- [#165220](https://github.com/openclaw/openclaw/pull/165220) fix: restore standalone installer ShellCheck
- [#165165](https://github.com/openclaw/openclaw/pull/165165) perf(test): scope operator authority database closes
- [#165196](https://github.com/openclaw/openclaw/pull/165196) fix(sessions): chat turns fail when unrelated sessions change maintenance protection mid-commit
- [#165204](https://github.com/openclaw/openclaw/pull/165204) fix(worktrees): stop repeated Git maintenance failures
- [#165213](https://github.com/openclaw/openclaw/pull/165213) chore(ui): refresh control ui locales
- [#165177](https://github.com/openclaw/openclaw/pull/165177) test(agents,gateway,browser,scripts): remove low-value tests (batch d207)
- [#165200](https://github.com/openclaw/openclaw/pull/165200) fix: private QA builds omit CLI diagnostic companions
- [#164444](https://github.com/openclaw/openclaw/pull/164444) feat(sessions): allow directed sends without transcript access
- [#165116](https://github.com/openclaw/openclaw/pull/165116) fix(node-host): report commands terminated by a signal
- [#165088](https://github.com/openclaw/openclaw/pull/165088) fix(macos): stop Rosetta segfaults in APFS worktree and process checks
- [#165124](https://github.com/openclaw/openclaw/pull/165124) refactor(core): deslop single-use core abstractions
- [#165032](https://github.com/openclaw/openclaw/pull/165032) fix(cron): keep automations available after Doctor repair
- [#165099](https://github.com/openclaw/openclaw/pull/165099) fix(release): candidate qualification starts reliably
- [#165184](https://github.com/openclaw/openclaw/pull/165184) fix: resume tasks after deferred startup recovery
- [#165138](https://github.com/openclaw/openclaw/pull/165138) feat(x): add the X (Twitter) mentions channel plugin
- [#159448](https://github.com/openclaw/openclaw/pull/159448) fix(plugins): reclaim registry memory after catalog scope changes
- [#165141](https://github.com/openclaw/openclaw/pull/165141) perf(workboard): avoid redundant Sessions board reloads
- [#165181](https://github.com/openclaw/openclaw/pull/165181) perf(sessions): hydrate only requested entry snapshots
- [#165166](https://github.com/openclaw/openclaw/pull/165166) fix(gateway): refresh placement reads after concurrent publication
- [#165160](https://github.com/openclaw/openclaw/pull/165160) fix: sidebar child badges include archived sessions after refresh
- [#165168](https://github.com/openclaw/openclaw/pull/165168) fix: canceling a queued WebChat turn makes the next queued turn fail and retry
- [#165148](https://github.com/openclaw/openclaw/pull/165148) fix(update): complete deferred model repair when plugins are unchanged
- [#165173](https://github.com/openclaw/openclaw/pull/165173) perf(skills): share body search indexes across runs
- [#163833](https://github.com/openclaw/openclaw/pull/163833) fix(sessions): session cleanup leaves GitHub publication receipts behind for workspace-free sessions
- [#165167](https://github.com/openclaw/openclaw/pull/165167) fix(exec): stop stalled sandbox finalization and polling loops
- [#165107](https://github.com/openclaw/openclaw/pull/165107) fix(gateway): small agents stay unavailable until larger agents finish startup preparation
- [#165137](https://github.com/openclaw/openclaw/pull/165137) fix: Telegram sends fail after channel-routed chat handoffs
- [#165095](https://github.com/openclaw/openclaw/pull/165095) improve: native tool rows show Tool Search calls and every client shares tool icons
- [#161609](https://github.com/openclaw/openclaw/pull/161609) feat(agentsapi): select plugin-owned self-hosted executors
- [#165068](https://github.com/openclaw/openclaw/pull/165068) test(chat): await outbox owners instead of wall-clock polling in session action tests
- [#165120](https://github.com/openclaw/openclaw/pull/165120) fix(discord): keep source formatting in streaming block previews
- [#165142](https://github.com/openclaw/openclaw/pull/165142) perf(ai): release completed runs held by continuation timers
- [#164689](https://github.com/openclaw/openclaw/pull/164689) fix(media): accept public IPv6 literal MEDIA URLs
- [#165143](https://github.com/openclaw/openclaw/pull/165143) fix(release): keep lineage arguments nonempty
- [#165140](https://github.com/openclaw/openclaw/pull/165140) fix: avoid catalog hovercard test startup timeouts
- [#165127](https://github.com/openclaw/openclaw/pull/165127) fix(docs): preserve indentation in nested code examples
- [#165139](https://github.com/openclaw/openclaw/pull/165139) fix(ci): restore worker-backed runner test coverage
- [#165133](https://github.com/openclaw/openclaw/pull/165133) fix: await Google Meet talk-back completion in CI
- [#165126](https://github.com/openclaw/openclaw/pull/165126) fix(ui): use available space for Review branch names
- [#165079](https://github.com/openclaw/openclaw/pull/165079) fix(infra): fail closed when the process census cannot prove a temp root is unused
- [#165125](https://github.com/openclaw/openclaw/pull/165125) perf(gateway): prewarm sandbox dependency templates after ready
- [#165071](https://github.com/openclaw/openclaw/pull/165071) fix(code-mode): guest code can forge bridge failure code and phase
- [#165121](https://github.com/openclaw/openclaw/pull/165121) fix(release): bind candidate publication evidence
- [#165075](https://github.com/openclaw/openclaw/pull/165075) perf(memory): retire the redundant path-only chunk index from both schema publishers
- [#165109](https://github.com/openclaw/openclaw/pull/165109) refactor(runtime): deslop single-use adapters
- [#165111](https://github.com/openclaw/openclaw/pull/165111) perf(transcripts): serve public meeting-library pages from the transcript read worker
- [#165098](https://github.com/openclaw/openclaw/pull/165098) perf(subagents): read and write registry cohorts in batches inside the existing writer hold
- [#165108](https://github.com/openclaw/openclaw/pull/165108) fix: reconcile completed chat runs without navigation
- [#165100](https://github.com/openclaw/openclaw/pull/165100) fix(ui): keep Escape within its owner in settings and plugin pages
- [#165042](https://github.com/openclaw/openclaw/pull/165042) perf(diagnostics): calibrate memory pressure to runtime limits
- [#152396](https://github.com/openclaw/openclaw/pull/152396) fix: report usage for silent replies
- [#165010](https://github.com/openclaw/openclaw/pull/165010) chore(ui): refresh control ui locales
- [#165001](https://github.com/openclaw/openclaw/pull/165001) chore(ui): refresh control ui locales
- [#164985](https://github.com/openclaw/openclaw/pull/164985) perf(test): reuse read workers in startup update tests
- [#165027](https://github.com/openclaw/openclaw/pull/165027) perf(sessions): prepare cold projection admission through the projection worker
- [#165106](https://github.com/openclaw/openclaw/pull/165106) perf(skills): project the skill library once per catalog instead of four reads per entry
- [#165085](https://github.com/openclaw/openclaw/pull/165085) perf(state): maintain planner statistics for the shared state database
- [#165096](https://github.com/openclaw/openclaw/pull/165096) perf(sessions): decode each refreshed session row once per cohort
- [#165089](https://github.com/openclaw/openclaw/pull/165089) perf(sessions): prefilter transcript matches from stored navigation before decoding event bodies
- [#165074](https://github.com/openclaw/openclaw/pull/165074) perf(trajectory): sweep retention from a covering index instead of regrouping every event
- [#165090](https://github.com/openclaw/openclaw/pull/165090) perf(sessions): find orphan transcript owners by set difference instead of per-row membership checks
- [#165086](https://github.com/openclaw/openclaw/pull/165086) perf(sessions): read the selected context payload role from navigation instead of decompressing it again
- [#165101](https://github.com/openclaw/openclaw/pull/165101) perf(ui): retry scroll restoration without re-rendering the pane
- [#165080](https://github.com/openclaw/openclaw/pull/165080) perf(sessions): scope transcript search to selected sessions before reading content and snippets
- [#165097](https://github.com/openclaw/openclaw/pull/165097) test(core,plugins,scripts): remove low-value tests (batch d206)
- [#165093](https://github.com/openclaw/openclaw/pull/165093) perf(state): check local workspace projections without reading their multi-megabyte rows
- [#165029](https://github.com/openclaw/openclaw/pull/165029) perf(plugins): read install records asynchronously during retained cleanup
- [#165082](https://github.com/openclaw/openclaw/pull/165082) perf(sessions): plan lifecycle artifact cleanup from the scoped inventory instead of hydrating every session
- [#165081](https://github.com/openclaw/openclaw/pull/165081) perf(sessions): stop re-running progress-card DDL on every write
- [#165072](https://github.com/openclaw/openclaw/pull/165072) fix(telegram): retry preview edits after transient server errors
- [#165077](https://github.com/openclaw/openclaw/pull/165077) improve: reduce worker task scheduling overhead
- [#165083](https://github.com/openclaw/openclaw/pull/165083) chore(ui): keep text-chip browser admission test within budget
- [#165076](https://github.com/openclaw/openclaw/pull/165076) fix(workboard): keep automation and home sessions off Sessions boards
- [#165012](https://github.com/openclaw/openclaw/pull/165012) perf(agents): carry prepared exec policy into delegate tool construction
- [#165073](https://github.com/openclaw/openclaw/pull/165073) perf(sessions): avoid history-reader stalls in metadata patches
- [#159265](https://github.com/openclaw/openclaw/pull/159265) fix(discord): let newer messages pass deferred ingress
- [#165069](https://github.com/openclaw/openclaw/pull/165069) fix(gateway): write restart handoff receipts under active load
- [#165063](https://github.com/openclaw/openclaw/pull/165063) fix(plugins): allow every loaded plugin to use its own state and ingress queues
- [#165064](https://github.com/openclaw/openclaw/pull/165064) fix(cron): keep migrated secondary-agent tasks editable
- [#165060](https://github.com/openclaw/openclaw/pull/165060) fix(update): skip unnecessary fetches for cached commit targets
- [#160695](https://github.com/openclaw/openclaw/pull/160695) feat(release): qualify frozen candidates with their own harness
- [#165051](https://github.com/openclaw/openclaw/pull/165051) fix(ui): new session tabs show Disconnected while loading
- [#165058](https://github.com/openclaw/openclaw/pull/165058) perf(workboard): skip unchanged card reloads
- [#164864](https://github.com/openclaw/openclaw/pull/164864) refactor(cron): consume standing grants through the Gateway owner (cron 3/3)
- [#165033](https://github.com/openclaw/openclaw/pull/165033) refactor(cli): remove unused private process overrides
- [#165052](https://github.com/openclaw/openclaw/pull/165052) fix(gateway): stop slow requests from accumulating start listeners
- [#165044](https://github.com/openclaw/openclaw/pull/165044) fix(macos): fence Gateway recovery installs with the observed runtime pin
- [#164719](https://github.com/openclaw/openclaw/pull/164719) fix(heartbeat): answer a conversation's own background command completion in that conversation
- [#165037](https://github.com/openclaw/openclaw/pull/165037) test(update): prove incognito restart loss and no export in the published-driver cell
- [#164922](https://github.com/openclaw/openclaw/pull/164922) refactor(sessions): run lifecycle and deletion transactions in the agent executor (compound 3b)
- [#165034](https://github.com/openclaw/openclaw/pull/165034) perf(model-catalog): write remote catalog refreshes through the state writer
- [#165057](https://github.com/openclaw/openclaw/pull/165057) fix(release): extend Docker package pack timeout
- [#165050](https://github.com/openclaw/openclaw/pull/165050) fix(release): allow slow Docker package creation
- [#165048](https://github.com/openclaw/openclaw/pull/165048) fix(release): split restart auth validation
- [#165049](https://github.com/openclaw/openclaw/pull/165049) fix(plugins): load Doctor contracts from the inventory-owned package loader after an in-place plugin replacement
- [#164992](https://github.com/openclaw/openclaw/pull/164992) perf(auth-profiles): detect auth sources through the auth readers
- [#164873](https://github.com/openclaw/openclaw/pull/164873) fix(agents): working timer restarts when reopening a claude-cli session
- [#164989](https://github.com/openclaw/openclaw/pull/164989) perf(sessions): read model context and watermarks through the history reader
- [#165024](https://github.com/openclaw/openclaw/pull/165024) fix(gateway): deliver activity-summary updates after compaction
- [#155885](https://github.com/openclaw/openclaw/pull/155885) fix(firecrawl): parse source-specific search results
- [#165022](https://github.com/openclaw/openclaw/pull/165022) fix: Kimi K3 sends malformed exec calls because a tool argument is named required
- [#165030](https://github.com/openclaw/openclaw/pull/165030) perf(gateway): keep artifact downloads scoped to their message
- [#165014](https://github.com/openclaw/openclaw/pull/165014) refactor(config): retire Doctor-only agents.defaults keys from the authored config type
- [#165020](https://github.com/openclaw/openclaw/pull/165020) feat(workboard): pin, unpin, and delete boards from the sidebar
- [#165008](https://github.com/openclaw/openclaw/pull/165008) fix(code-mode): invalid tool arguments fail as internal_error instead of invalid_input
- [#164962](https://github.com/openclaw/openclaw/pull/164962) perf(state): avoid repeated worker admission during Gateway shutdown
- [#165023](https://github.com/openclaw/openclaw/pull/165023) docs(plugins): state that the npm and git install roots are durable, not caches
- [#164943](https://github.com/openclaw/openclaw/pull/164943) perf(gateway): prepare placement preservation keys from the placement reader
- [#164801](https://github.com/openclaw/openclaw/pull/164801) fix: avoid SQLite worker churn in forked Vitest tests
- [#164940](https://github.com/openclaw/openclaw/pull/164940) test(agents,gateway): remove low-value tests (batch d201)
- [#164512](https://github.com/openclaw/openclaw/pull/164512) fix(history): keep canonical transcript owners distinct
- [#164925](https://github.com/openclaw/openclaw/pull/164925) fix: recognize current schema errors in web-search checks
- [#164246](https://github.com/openclaw/openclaw/pull/164246) fix(compaction): commit a deterministic reduction after a summary timeout
- [#164920](https://github.com/openclaw/openclaw/pull/164920) fix(sessions): preserve dot-prefixed checkpoint references
- [#164905](https://github.com/openclaw/openclaw/pull/164905) improve(tests): speed up node authority checks
- [#164835](https://github.com/openclaw/openclaw/pull/164835) fix(typesafe): report rejected Jev requests as input errors
- [#164747](https://github.com/openclaw/openclaw/pull/164747) perf(sessions): read transcript anchors and readiness through the history reader
- [#165017](https://github.com/openclaw/openclaw/pull/165017) fix: preserve WhatsApp media proxy uploads on Bun
- [#164883](https://github.com/openclaw/openclaw/pull/164883) refactor(sessions): compose board, ACP, outbox and lifecycle on the incognito actor (P7b, inactive)
- [#153580](https://github.com/openclaw/openclaw/pull/153580) fix: browser panel freezes during continuous input
- [#165015](https://github.com/openclaw/openclaw/pull/165015) perf(gateway): speed up worker bundle preparation on source checkouts
- [#165013](https://github.com/openclaw/openclaw/pull/165013) fix(update): cover WAL activation during candidate snapshots
- [#164975](https://github.com/openclaw/openclaw/pull/164975) fix(gateway): stop treating restarts as plugin removal
- [#165009](https://github.com/openclaw/openclaw/pull/165009) test(release): expect isolated survivor scenarios
- [#165007](https://github.com/openclaw/openclaw/pull/165007) fix(release): isolate upgrade survivor scenarios
- [#164263](https://github.com/openclaw/openclaw/pull/164263) fix: compaction aborts a slow summary request that is still streaming
- [#164984](https://github.com/openclaw/openclaw/pull/164984) perf(gateway): share update status preparation across reconnects
- [#164997](https://github.com/openclaw/openclaw/pull/164997) fix(update): keep retained service authority after a stopped-free inspection and let repair retire untouched preparations
- [#164998](https://github.com/openclaw/openclaw/pull/164998) fix(cli): pin prepared child invocations to the launcher's resolved release
- [#164772](https://github.com/openclaw/openclaw/pull/164772) fix(gateway): keep slow ws response logs once 2000 requests are unanswered
- [#164981](https://github.com/openclaw/openclaw/pull/164981) test: stabilize flaky fixtures (batch f204)
- [#164987](https://github.com/openclaw/openclaw/pull/164987) fix(ci): run SDK alias boundary tests with native loaders
- [#164990](https://github.com/openclaw/openclaw/pull/164990) fix(config): keep foreign-owned state roots writable instead of failing publication
- [#164431](https://github.com/openclaw/openclaw/pull/164431) feat(ui): copy file paths from chat tooltips
- [#164608](https://github.com/openclaw/openclaw/pull/164608) fix(ui): remove duplicate person-group filter buttons
- [#164963](https://github.com/openclaw/openclaw/pull/164963) fix(chat): model picker spins on every message
- [#164970](https://github.com/openclaw/openclaw/pull/164970) test(ui,tui,gateway,tooling): remove low-value tests (batch d205)
- [#164976](https://github.com/openclaw/openclaw/pull/164976) test(gateway,outbound,scripts): remove low-value tests (batch d203)
- [#164597](https://github.com/openclaw/openclaw/pull/164597) fix: Daybreak chats fail with unsupported Ultrafast settings
- [#164936](https://github.com/openclaw/openclaw/pull/164936) fix(web-fetch): preserve code literals in text extraction
- [#164919](https://github.com/openclaw/openclaw/pull/164919) refactor(mattermost): remove unused pagination size override
- [#164938](https://github.com/openclaw/openclaw/pull/164938) perf(sessions): archive without waiting for worktree cleanup
- [#164956](https://github.com/openclaw/openclaw/pull/164956) fix(qa): remove unavailable Telegram emoji fixture
- [#164929](https://github.com/openclaw/openclaw/pull/164929) fix(gateway): skip registered agent stores no configured agent owns
- [#164455](https://github.com/openclaw/openclaw/pull/164455) fix(cli): preserve backslashes in Fish completion descriptions
- [#164682](https://github.com/openclaw/openclaw/pull/164682) fix(gateway): keep chat admission responsive and bound to current authority
- [#164680](https://github.com/openclaw/openclaw/pull/164680) fix: reduce Windows startup delays with installed plugins
- [#164891](https://github.com/openclaw/openclaw/pull/164891) refactor(sessions): run fork transactions in the agent executor (compound 3a)

#### 🐛 New Issues
- [#165047](https://github.com/openclaw/openclaw/issues/165047) [Bug]: Dashboard image attachments fail with "Sandbox media reference is not staged"; no staged folder created since 2 October 23:45, no log line at debug level `bug` `bug:behavior` `P2` `issue-rating: 🦪 silver shellfish` 💬7
- [#164972](https://github.com/openclaw/openclaw/issues/164972) [Bug]: claude-cli multi-agent teams: end-to-end matrix under visibility agent/tree/all (clarification, follow-up and parent context all break; failures look like success) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬6
- [#164923](https://github.com/openclaw/openclaw/issues/164923) [Investigating] Short-term promotion: one workspace promotes 0/512 while sibling workspaces promote 50-90% (raw conversation-turn snippets structurally rejected) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬5
- [#165041](https://github.com/openclaw/openclaw/issues/165041) Session resume context injections visible to user in UI `P2` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` `impact:ux-friction` 💬4
- [#164947](https://github.com/openclaw/openclaw/issues/164947) Agent and child session model patches still persist defaults under explicit global scope `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬4
- [#165114](https://github.com/openclaw/openclaw/issues/165114) Docs: Slack app manifests lose JSON indentation in nested code groups `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#164960](https://github.com/openclaw/openclaw/issues/164960) [Bug]: claude-cli: resuming a paused subagent (sessions_yield waitFor:"message" → parent sessions_send) starts a fresh CLI session without history, child loses its task `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬4
- [#165006](https://github.com/openclaw/openclaw/issues/165006) [Bug]: claws remove times out on cron-authority lock with a live Gateway `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬4
- [#164847](https://github.com/openclaw/openclaw/issues/164847) sessions_search fails with "Unknown agent id" for acp.allowedAgents entries missing from agents.entries `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#164870](https://github.com/openclaw/openclaw/issues/164870) [Feature]: Configurable plain-text abort triggers (session.abortTriggers) instead of a hardcoded multilingual list `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬4
- [#165215](https://github.com/openclaw/openclaw/issues/165215) Corrupt system-agent deletion journal blocks `openclaw update` to 2026.9.8 `bug` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬3
- [#164907](https://github.com/openclaw/openclaw/issues/164907) [Bug]: Detached cron agentTurn runs fail with "attempt disposed before transcript write" / writer-claim rebound on 2026.9.7 despite #140399 `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬3
- [#165035](https://github.com/openclaw/openclaw/issues/165035) [Bug]: 2026.9.8 legacy temp cleanup can unlink live files when /proc census fails closed `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬3
- [#165061](https://github.com/openclaw/openclaw/issues/165061) Chat keeps its working timer and Stop button after a resumed run completes `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#164958](https://github.com/openclaw/openclaw/issues/164958) Telegram: a sibling bot's streamed reasoning preview stays in the other bot's chat-window history and causes reasoning_extraction refusals `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#164800](https://github.com/openclaw/openclaw/issues/164800) [Bug]: 2026.9.7 to 2026.9.8 managed update leaves activation driver dead until host reboot `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` `P0` 💬3
- [#164762](https://github.com/openclaw/openclaw/issues/164762) [Bug]: 2026.9.8 (fc23bc8) on Windows still fails sessions.create with "Session creation publication owner is no longer current" - guard compares extended-length path against plain path `impact:session-state` `P0` `impact:ux-release-blocker` 💬3
- [#164948](https://github.com/openclaw/openclaw/issues/164948) doctor --fix self-deadlocks on state/openclaw.sqlite: own read connection blocks exclusive maintenance lease (busyTimeoutMs=0) `P2` `clawsweeper:needs-info` `issue-rating: 🦐 gold shrimp` `impact:other` 💬3
- [#164937](https://github.com/openclaw/openclaw/issues/164937) [Bug]: CLI child invocation can switch releases after its launcher symlink changes `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#164941](https://github.com/openclaw/openclaw/issues/164941) Agent database maintenance lease lost WITHOUT SQLite contention blocks Doctor on 2026.9.5 — the uncontended variant #160702 leaves open `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` `P0` 💬3
- [#164882](https://github.com/openclaw/openclaw/issues/164882) [Bug]: 2026.9.8 Control UI regression — Tasks page missing, no replacement found for cancelling running automations `bug` `regression` `P2` `impact:ux-friction` 💬3
- [#164875](https://github.com/openclaw/openclaw/issues/164875) [Feature]: Make session-title identity hiding configurable (follow-up to #145992, still present in 2026.9.8) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬3
- [#164791](https://github.com/openclaw/openclaw/issues/164791) Runtime context is still delivered as a raw `<<<BEGIN_OPENCLAW_INTERNAL_CONTEXT>>>` user turn in 2026.9.8 (follow-up to #142754) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬3
- [#164731](https://github.com/openclaw/openclaw/issues/164731) [Bug]: doctor --fix fails: legacy-cron-run-logs migration queries task_runs.detail_json which doesn't exist in pre-2026.9.8 state DBs `bug` `regression` `P0` `issue-rating: 🦪 silver shellfish` 💬3
- [#164699](https://github.com/openclaw/openclaw/issues/164699) [Bug]: openclaw update rolls back with EXDEV at package-swap when the npm package was installed in a Docker image layer (overlayfs) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` `P0` 💬3
- [#164790](https://github.com/openclaw/openclaw/issues/164790) UI test types fail after the MCP App capability helper signature changed `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#165232](https://github.com/openclaw/openclaw/issues/165232) [Bug]: managed-worktree lifecycle E2E rejects queued GC receipts `bug` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬2
- [#165229](https://github.com/openclaw/openclaw/issues/165229) [Bug]: identical-package update rejects admitted legacy config `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#165216](https://github.com/openclaw/openclaw/issues/165216) Standalone CLI installer fails ShellCheck after shared error handling `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#165208](https://github.com/openclaw/openclaw/issues/165208) feat(memory): durable recovery for asynchronous embedding batches `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#165195](https://github.com/openclaw/openclaw/issues/165195) Plugin capture: native-namespace member lookup scans every member on each miss; a directory of `.node` prebuilds in a plugin root adds ~200 s (2026.9.7+) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#165159](https://github.com/openclaw/openclaw/issues/165159) [Bug]: Private-QA builds omit CLI diagnostic CommonJS companions from dist `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#165162](https://github.com/openclaw/openclaw/issues/165162) [Bug]: Session-bound cron advances lifecycleRevision before acquiring the session lane, causing host compaction persistence to fail repeatedly `bug` `no-stale` `bug:behavior` `P1` 💬2
- [#165149](https://github.com/openclaw/openclaw/issues/165149) [Bug]: Embedded settled-turn finalization auto-compacts, then rejects its result `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#165135](https://github.com/openclaw/openclaw/issues/165135) [Bug]: Fallback OAuth timeout hides primary local-runtime failure in Discord error reply `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#165115](https://github.com/openclaw/openclaw/issues/165115) Docs: Slack manifest code groups have no visible copy button `P2` `impact:ux-friction` 💬2
- [#164986](https://github.com/openclaw/openclaw/issues/164986) [Bug]: 2026.9.8 update repair fails at finalize:plugins after Doctor offline maintenance `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `P0` `issue-rating: 🦪 silver shellfish` 💬2
- [#165002](https://github.com/openclaw/openclaw/issues/165002) Update failure: gateway-recovery-verification (2026.9.7) `clawsweeper:needs-info` `P0` `issue-rating: 🦐 gold shrimp` `maturity:stable` 💬2
- [#164967](https://github.com/openclaw/openclaw/issues/164967) [Bug]: doctor --fix exits 1 with EPERM fchmod when the state dir root is owned by another user (tightenPrivateDirChain chmod not best-effort) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#164964](https://github.com/openclaw/openclaw/issues/164964) [Bug]: Crabbox: a configured settings.binary is silently replaced by a managed copy when its --version probe is not "supported"; the reason is never logged `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#164890](https://github.com/openclaw/openclaw/issues/164890) Update failure: reconcile:abandoned (2026.9.6) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#164954](https://github.com/openclaw/openclaw/issues/164954) [Feature]: voice-call: scoped tool allowlist for phone calls (consult + classic replies), and caller identity for toolsBySender `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#164946](https://github.com/openclaw/openclaw/issues/164946) [Bug]: Discord reply-ping from another bot forces a visible answer (NO_REPLY rejected), causing endless bot-to-bot loops `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#164854](https://github.com/openclaw/openclaw/issues/164854) Windows 2026.9.8: prepared model runtime publication (workspace plugins; agent main) timed out - all models unavailable, very slow startup `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `impact:auth-provider` 💬2
- [#164917](https://github.com/openclaw/openclaw/issues/164917) Built Doctor CI proof still expects a removed legacy-directory alias `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#164799](https://github.com/openclaw/openclaw/issues/164799) [Bug]: After a version change, agents admit one by one for minutes past ready and the unconfigured system-agent DB is refused (readyz 503 until restart) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:crash-loop` 💬2
- [#164910](https://github.com/openclaw/openclaw/issues/164910) [Feature]: Add "Cancel current run" action to Automations page without changing job enabled state `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#164887](https://github.com/openclaw/openclaw/issues/164887) Optional-silent cron turn fails incomplete after successful collected profile result (2026.9.8) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#164832](https://github.com/openclaw/openclaw/issues/164832) [Bug]: TypeSafe HTTP 400 input rejection is reported as unreachable Jev provider `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#164880](https://github.com/openclaw/openclaw/issues/164880) [Feature]: Let a sender stop the run in their own DM session without owner/commands.allowFrom (abort-only authorization) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#164842](https://github.com/openclaw/openclaw/issues/164842) [Bug]: 2026.9.8 upgrade blocked by V2 migration receipt without artifact identity `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬2
- [#164856](https://github.com/openclaw/openclaw/issues/164856) Session SQLite migration recovery report (session-sqlite-1791100498662-b6d9780d) `P2` `impact:session-state` 💬2
- [#164826](https://github.com/openclaw/openclaw/issues/164826) Update failure: requested (2026.9.7) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#164837](https://github.com/openclaw/openclaw/issues/164837) Update failure: managed-service-update-handoff (2026.9.7) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#164809](https://github.com/openclaw/openclaw/issues/164809) Update failure: unexpected-error (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#164811](https://github.com/openclaw/openclaw/issues/164811) Valid community ClawHub installs report provenance-invalid and suggest a futile reinstall `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#164787](https://github.com/openclaw/openclaw/issues/164787) [Bug]: doctor reports Claude CLI "not found on PATH" while the claude-cli runtime resolves ~/.local/bin/claude and works `P2` `clawsweeper:needs-info` `issue-rating: 🦐 gold shrimp` `impact:ux-friction` 💬2
- [#164786](https://github.com/openclaw/openclaw/issues/164786) [Bug]: Workboard re-dispatch reuses the card worktree at its old base even when workspace.branch requests a newer commit `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#164693](https://github.com/openclaw/openclaw/issues/164693) fix(update): managed handoff hides early refusal reason and details `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#164784](https://github.com/openclaw/openclaw/issues/164784) Tlon: bare URLs and Markdown images lose rich formatting after text `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#164733](https://github.com/openclaw/openclaw/issues/164733) [Bug]: Saved-draft recovery appears in view-only subagent panels `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#165222](https://github.com/openclaw/openclaw/issues/165222) Web-search rejection check rejects detailed Gateway schema errors `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#165214](https://github.com/openclaw/openclaw/issues/165214) [Bug]: Doctor refuses maintenance on a stale Gateway lock left by an exited container instead of waiting and reclaiming like Gateway startup `bug` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#165246](https://github.com/openclaw/openclaw/issues/165246) [Bug]: queued followup idle-bound E2E test fails before terminal work settles `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#165245](https://github.com/openclaw/openclaw/issues/165245) memory.promotion.applied event should record droppedDates/budgetChars (budget compaction is unobservable) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#165234](https://github.com/openclaw/openclaw/issues/165234) [Feature]: Stop committing Control UI translation memory (*.tm.jsonl) to main history `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#165226](https://github.com/openclaw/openclaw/issues/165226) Bug: isolated scheduled agent turns fail on extended-stable 2026.8.35 `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#165227](https://github.com/openclaw/openclaw/issues/165227) update cannot complete: doctor holds an auto-generated reindex-lock sidecar (unverified-agent-databases) `P0` `impact:ux-release-blocker` 💬1
- [#165206](https://github.com/openclaw/openclaw/issues/165206) FaceTime plugin: two blockers on macOS 27 (driver build fails with Xcode 27; helper dlopen rejected by FaceTime) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#165118](https://github.com/openclaw/openclaw/issues/165118) Sidebar child-count badge counts archived children after bulk archive (2026.9.8, follow-up to #157068) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#165182](https://github.com/openclaw/openclaw/issues/165182) [Bug]: Home chat messages rejected after reconnect: __controlUiReconnectResume `bug` `bug:behavior` `P1` `impact:message-loss` 💬1
- [#165176](https://github.com/openclaw/openclaw/issues/165176) [Bug]: 2026.9.8 — Telegram-started turns fail all gateway tool calls with "Gateway caller authority is no longer active" (claude-cli runtime); replies lost under visibleReplies=message_tool `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `impact:security` 💬1
- [#165154](https://github.com/openclaw/openclaw/issues/165154) [Bug]: Cron command announcements repeat after a transient channel send failure `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#165152](https://github.com/openclaw/openclaw/issues/165152) Plugin version drift after OpenClaw 2026.9.8 update: Brave and Meta remain 2026.9.7 `P2` `impact:ux-friction` 💬1
- [#165144](https://github.com/openclaw/openclaw/issues/165144) CI-details browser fixture races popup readiness and keyboard ownership `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#165146](https://github.com/openclaw/openclaw/issues/165146) Support expanded panel presentation and unrestricted local browser previews `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `impact:security` 💬1
- [#165128](https://github.com/openclaw/openclaw/issues/165128) Google Meet talk-back test asserts before its asynchronous consult completes `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#165132](https://github.com/openclaw/openclaw/issues/165132) IMAGE Prompt : A confident middle-aged man sitting on a folding camping chair in the middle of a vast golden desert at sunset. He is wearing a brown suede jacket, black pants, and brown leather boots. He has short s `P3` 💬1
- [#165131](https://github.com/openclaw/openclaw/issues/165131) Mdnoyon `P3` 💬1
- [#165130](https://github.com/openclaw/openclaw/issues/165130) Mdnoyon `P3` 💬1
- [#165119](https://github.com/openclaw/openclaw/issues/165119) Thinking profile: declared compat.supportedReasoningEfforts shadowed by live-catalog derivation — binary profile despite declared efforts (2026.9.8) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#165117](https://github.com/openclaw/openclaw/issues/165117) [Bug]: macOS app — Cmd+V image paste does nothing in the chat composer (works in Chrome) `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#165113](https://github.com/openclaw/openclaw/issues/165113) [Feature]: SecretRef for A2A peer tokens (and an optional sha256 verifier for inbound peers) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#165104](https://github.com/openclaw/openclaw/issues/165104) [Bug]: Control UI /steer and /redirect discard attached files on successful send `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#165102](https://github.com/openclaw/openclaw/issues/165102) [Feature]: Android: let the assistant gesture (ACTION_ASSIST) start realtime Talk `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#165067](https://github.com/openclaw/openclaw/issues/165067) Ingress: preserve same-channel admission order across debounce keys when the lane is released on deferral `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#165065](https://github.com/openclaw/openclaw/issues/165065) [Feature]: Map MS Teams message edits into routed system events like Slack `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#165062](https://github.com/openclaw/openclaw/issues/165062) [Bug]: 2026.9.8 fails on Synology: unstable birthtime breaks SQLite migration and agent execution `bug` `bug:crash` `P0` `impact:ux-release-blocker` 💬1
- [#165059](https://github.com/openclaw/openclaw/issues/165059) [Bug]: [2026.9.8] Codex plugin reload times out with retained work; prepared runtime generation superseded `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#165053](https://github.com/openclaw/openclaw/issues/165053) [Bug]: Verified test preparation cannot establish artifact separation for immutable Gateway launchers `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#165056](https://github.com/openclaw/openclaw/issues/165056) [Bug]: openclaw delivery dead-letters list|drain|resubmit — add outbound dead-letter CLI to match channels dead-letters `bug` `bug:behavior` `P2` `impact:ux-friction` 💬1
- [#165055](https://github.com/openclaw/openclaw/issues/165055) macOS app rewrites openclaw.json with all keys sorted, reordering agents.entries `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#165045](https://github.com/openclaw/openclaw/issues/165045) [e2e] Avatar-anchor assertion passes without avatar (:is avatar/slot, session-suggestions) `P3` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` 💬1
- [#165043](https://github.com/openclaw/openclaw/issues/165043) [e2e] Negated @agent-octocat visibility check stays green (agent-github-device-authorization) `P3` 💬1
- [#165038](https://github.com/openclaw/openclaw/issues/165038) [Bug]: iOS chat shows the previous turn's final answer again; the new answer is folded into "Worked for Xs" `P1` `clawsweeper:needs-live-repro` `impact:session-state` `issue-rating: 🐚 platinum hermit` 💬1
- [#165025](https://github.com/openclaw/openclaw/issues/165025) [Bug]: Reasoning-prefixed NO_REPLY not detected when closing line isn't an exact "silent intent" phrase `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#165036](https://github.com/openclaw/openclaw/issues/165036) [Feature]: Let the selected memory plugin own operational instructions, not AGENTS.md `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#165005](https://github.com/openclaw/openclaw/issues/165005) [Bug]: Subagent requester-settle completion still hits `<runId>:terminal-error` transcript conflict on 2026.9.8 (non-cron path of #144627/#146315) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#165003](https://github.com/openclaw/openclaw/issues/165003) [Feature]: Force human approval for mutating (write/delete) exec commands under tools.exec.mode=auto `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#165000](https://github.com/openclaw/openclaw/issues/165000) [Data correction] #164923 — the representative row I posted was reconstructed, not a real row; here is the actual store contents (answers to nnegi88's 7 questions) `P2` `impact:session-state` 💬1
- [#164999](https://github.com/openclaw/openclaw/issues/164999) [Correction] #164923 — my root-cause analysis was wrong; withdrawing the structural-exclusion claim `P3` 💬1
- [#164996](https://github.com/openclaw/openclaw/issues/164996) All import input install setup `P3` 💬1
- [#164995](https://github.com/openclaw/openclaw/issues/164995) [Feature]: Per-agent Talk settings (speech provider/voice, realtime voice) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#164991](https://github.com/openclaw/openclaw/issues/164991) [Bug] TypeSafe decision provider remains credentialReady=false with valid store and env SecretRefs on 2026.9.8 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` 💬1
- [#164983](https://github.com/openclaw/openclaw/issues/164983) macOS app 2026.9.8: node worker package is missing dist/plugins/runtime/index.js, plugins fail to register (Unable to resolve plugin runtime module) `P1` `impact:other` 💬1
- [#164979](https://github.com/openclaw/openclaw/issues/164979) [voice-call] GPT-Live outbound calls: the callee's "hello" reaches the model before the opening line (double or invented greetings) — #85846 fixed for OpenAI Realtime only `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#164977](https://github.com/openclaw/openclaw/issues/164977) [Bug]: aborted claude-cli completion turn persists raw tool-protocol text that the normal path refuses (2026.9.7) `bug` `no-stale` `bug:behavior` `P1` 💬1
- [#164978](https://github.com/openclaw/openclaw/issues/164978) [Bug]: Plugin generation capture blocks the Gateway event loop for minutes (synchronous, per-file, multi-pass; not reusable across processes) `bug` `bug:behavior` `impact:crash-loop` `P0` 💬1
- [#164980](https://github.com/openclaw/openclaw/issues/164980) [voice-call] Option for realtime outbound calls to let the callee speak first before the opening line `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#164974](https://github.com/openclaw/openclaw/issues/164974) [Bug]: CLI in separate PID namespace reclaims live gateway state-owner locks (2026.9.7) `bug` `bug:behavior` `P1` `impact:crash-loop` 💬1
- [#164973](https://github.com/openclaw/openclaw/issues/164973) [Feature]: Control UI settings lack clear global vs. per-agent scope labeling `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#164971](https://github.com/openclaw/openclaw/issues/164971) Feature: Make bundled stock skills and default plugins opt-in (slim/core install) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#164968](https://github.com/openclaw/openclaw/issues/164968) [Feature]: let inline API keys recover during a billing disable window (or let custom providers opt into provider-managed cooldowns) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#164957](https://github.com/openclaw/openclaw/issues/164957) [Bug]: hidden person mentions retain work after a pending hover is rejected `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#164965](https://github.com/openclaw/openclaw/issues/164965) [Feature]: voice-call: call language setting (classic calls always use en-US speech recognition and <Say>) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#164966](https://github.com/openclaw/openclaw/issues/164966) [Bug]: voice-call: inboundPolicy "pairing" is accepted but behaves as allowlist (unknown callers rejected, no pairing request) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#164961](https://github.com/openclaw/openclaw/issues/164961) [Feature]: Foreground-by-default policy with explicit opt-in for background tasks `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#164953](https://github.com/openclaw/openclaw/issues/164953) [Bug]: gateway.multi.e2e scheduler-disabled edit test fails with a cron-authority file lock timeout `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#164952](https://github.com/openclaw/openclaw/issues/164952) [Feature]: Skill Workshop pending suggestions need a current-installed → proposed diff before Apply `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#164950](https://github.com/openclaw/openclaw/issues/164950) Update failure: package-permissions (2026.9.6) `P0` `impact:ux-release-blocker` 💬1
- [#164945](https://github.com/openclaw/openclaw/issues/164945) Control UI dashboard: sessions.create fails with 'Session creation publication owner is no longer current' (v2026.9.8, Windows) `P0` `impact:ux-release-blocker` 💬1
- [#164939](https://github.com/openclaw/openclaw/issues/164939) [Bug]: provider transport: reused DNS-pinned dispatcher hangs requests with zero bytes until the 300s LLM idle timeout; retry loop keeps reusing the same dead connection until gateway restart `bug` `regression` `P1` `clawsweeper:needs-info` 💬1
- [#164740](https://github.com/openclaw/openclaw/issues/164740) [Bug]: apply_patch rejects context containing en quad or em quad spaces `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#164930](https://github.com/openclaw/openclaw/issues/164930) [Bug]: Gateway startup blocks its main thread on per-call snapshot children while validating the device identity `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#164924](https://github.com/openclaw/openclaw/issues/164924) Docker web-search rejection check rejects current Gateway error guidance `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#164921](https://github.com/openclaw/openclaw/issues/164921) [Investigating] Short-term promotion: one workspace promotes 0/512 while sibling workspaces promote 50-90% (raw conversation-turn snippets structurally rejected) `P2` `impact:session-state` 💬1
- [#164912](https://github.com/openclaw/openclaw/issues/164912) CI timing refit ignores scheduled main test results `no-stale` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` 💬1
- [#164913](https://github.com/openclaw/openclaw/issues/164913) Workspace path test still expects retired legacy state precedence `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#164911](https://github.com/openclaw/openclaw/issues/164911) In-process Gateway dispatch from channel-originated agent runs fails with "Gateway client authority closed before dispatching <method>" `P1` `impact:auth-provider` 💬1
- [#164908](https://github.com/openclaw/openclaw/issues/164908) [Bug]: Android app Dashboard keeps sending a rejected Gateway secret after setup-code pairing `P2` `impact:auth-provider` `maturity:stable` `impact:ux-friction` 💬1
- [#164903](https://github.com/openclaw/openclaw/issues/164903) [Bug]: Apple Watch voice asks for an agent on every new call instead of using a default `bug` `bug:behavior` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#164904](https://github.com/openclaw/openclaw/issues/164904) [Feature]: Add a poll message action to the Mattermost channel `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#164895](https://github.com/openclaw/openclaw/issues/164895) Control UI renders one assistant message three times (server stores a single copy) `P2` `clawsweeper:needs-info` `impact:session-state` `issue-rating: 🦐 gold shrimp` 💬1
- [#164889](https://github.com/openclaw/openclaw/issues/164889) [Bug]: Plugin tool adoption separates hook-bound call identity from tool owner (2026.9.8) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#164886](https://github.com/openclaw/openclaw/issues/164886) Plugin tool execute has no gateway context: api.runtime.gateway.request throws 'requires a gateway request scope or instance binding' on a fresh process (no in-process restart) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-info` `impact:session-state` 💬1
- [#164876](https://github.com/openclaw/openclaw/issues/164876) [Bug]: 2026.9.8 startup migration aborts with "SQLite snapshot staging file changed during transfer" / "shared-state database generation changed" — false positive on Synology DSM / overlay FS, reproducible on an empty volume `bug` `regression` `P0` `impact:ux-release-blocker` 💬1
- [#164866](https://github.com/openclaw/openclaw/issues/164866) [Bug]: Native promotion leaves MEMORY.md provenance hash stale, causing the next tracked edit to mark it untrusted `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#164862](https://github.com/openclaw/openclaw/issues/164862) [Bug]: Open command menus retain stale choices after chat catalog refresh `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#164865](https://github.com/openclaw/openclaw/issues/164865) [Bug]: Chrome extension profile screenshot times out on Windows/Chrome 154 while tabs and snapshots work `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#164859](https://github.com/openclaw/openclaw/issues/164859) Session SQLite migration recovery report (session-sqlite-1791108283122-b8f979f7) `P2` `impact:session-state` 💬1
- [#164817](https://github.com/openclaw/openclaw/issues/164817) Update failure: managed-service-update-handoff (2026.9.7) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `P0` 💬1
- [#164840](https://github.com/openclaw/openclaw/issues/164840) [Bug]: Auto-discovered Python Whisper omits the configured language `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#164838](https://github.com/openclaw/openclaw/issues/164838) [Bug]: Later slash completions disappear when a draft starts with a command `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#164831](https://github.com/openclaw/openclaw/issues/164831) [Bug]: 2026.9.7+ plugin load fails ("Retained native directory does not resolve the selected OpenClaw host") when npm hoists a plugin's native deps `P1` `impact:auth-provider` 💬1
- [#164812](https://github.com/openclaw/openclaw/issues/164812) [Bug]: Codex harness drops thinking level max (effort null) on cron jobs and /hooks agent turns (isolated cron runner) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:auth-provider` 💬1
- [#164765](https://github.com/openclaw/openclaw/issues/164765) [Feature]: Add a search message action to the Mattermost channel `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#164879](https://github.com/openclaw/openclaw/issues/164879) [Bug]: 2026.9.8 Control UI regression — Tasks page missing, no replacement found for cancelling running automations `bug` `regression`
- [#164932](https://github.com/openclaw/openclaw/issues/164932) [Feature]: Reuse a same-process integrity proof for the shared state database during Gateway startup

#### 🔒 Closed Issues
- [#164188](https://github.com/openclaw/openclaw/issues/164188) [Bug]: package-swap permission failure does not identify rejected recovery object
- [#164066](https://github.com/openclaw/openclaw/issues/164066) [Bug]: 2026.9.8 managed update still rolls back: activation Doctor refuses with "undergoing offline maintenance" (#160671 and #163803 are on main, not in 9.8)
- [#142754](https://github.com/openclaw/openclaw/issues/142754) Runtime context delivered as raw <<<BEGIN_OPENCLAW_INTERNAL_CONTEXT>>> text in a synthetic user turn — visible to the agent instead of staying in the structured carrier
- [#120422](https://github.com/openclaw/openclaw/issues/120422) Dead-lettered channel ingress events are unrecoverable, unconfigurable, and silent (follow-up to #120419)
- [#165114](https://github.com/openclaw/openclaw/issues/165114) Docs: Slack app manifests lose JSON indentation in nested code groups
- [#164629](https://github.com/openclaw/openclaw/issues/164629) [Bug]: Gateway start prunes the ACTIVE npm plugin generations after plugins update ("cleaned N retained npm plugin generation(s)")
- [#164847](https://github.com/openclaw/openclaw/issues/164847) sessions_search fails with "Unknown agent id" for acp.allowedAgents entries missing from agents.entries
- [#165215](https://github.com/openclaw/openclaw/issues/165215) Corrupt system-agent deletion journal blocks `openclaw update` to 2026.9.8
- [#164267](https://github.com/openclaw/openclaw/issues/164267) Update failure: global-install-failed (2026.9.4)
- [#165035](https://github.com/openclaw/openclaw/issues/165035) [Bug]: 2026.9.8 legacy temp cleanup can unlink live files when /proc census fails closed
- [#165061](https://github.com/openclaw/openclaw/issues/165061) Chat keeps its working timer and Stop button after a resumed run completes
- [#150918](https://github.com/openclaw/openclaw/issues/150918) Telegram DM messages sent during a running turn are held in ingress for the whole turn (~15 min), then arrive late as a new turn — looks like message loss
- [#143701](https://github.com/openclaw/openclaw/issues/143701) 2026.9.2: background exec completion receives silent-delivery instructions while user task remains unfinished
- [#164762](https://github.com/openclaw/openclaw/issues/164762) [Bug]: 2026.9.8 (fc23bc8) on Windows still fails sessions.create with "Session creation publication owner is no longer current" - guard compares extended-length path against plain path
- [#152185](https://github.com/openclaw/openclaw/issues/152185) [Bug]: openclaw_cost_usd_total / openclaw_tokens_total omit non-delivering (NO_REPLY) turns — cost telemetry undercounts real spend
- [#164937](https://github.com/openclaw/openclaw/issues/164937) [Bug]: CLI child invocation can switch releases after its launcher symlink changes
- [#164882](https://github.com/openclaw/openclaw/issues/164882) [Bug]: 2026.9.8 Control UI regression — Tasks page missing, no replacement found for cancelling running automations
- [#148443](https://github.com/openclaw/openclaw/issues/148443) CI preflight fails on multiple PRs: split timing generation repeats files for core-runtime-infra-storage-state
- [#164699](https://github.com/openclaw/openclaw/issues/164699) [Bug]: openclaw update rolls back with EXDEV at package-swap when the npm package was installed in a Docker image layer (overlayfs)
- [#164672](https://github.com/openclaw/openclaw/issues/164672) [Bug]: npm update aborts at package-swap with "Package publication object has an unsafe identity" when the Node prefix bin/ and lib/node_modules are owned by another uid (nvm installed as root)
- [#164790](https://github.com/openclaw/openclaw/issues/164790) UI test types fail after the MCP App capability helper signature changed
- [#165232](https://github.com/openclaw/openclaw/issues/165232) [Bug]: managed-worktree lifecycle E2E rejects queued GC receipts
- [#165216](https://github.com/openclaw/openclaw/issues/165216) Standalone CLI installer fails ShellCheck after shared error handling
- [#165159](https://github.com/openclaw/openclaw/issues/165159) [Bug]: Private-QA builds omit CLI diagnostic CommonJS companions from dist
- [#164255](https://github.com/openclaw/openclaw/issues/164255) Update failure: activating (2026.9.8)
- [#143008](https://github.com/openclaw/openclaw/issues/143008) Update failure: verifying (2026.9.3)
- [#163166](https://github.com/openclaw/openclaw/issues/163166) Update failure: gateway-recovery-verification (2026.9.7)
- [#164090](https://github.com/openclaw/openclaw/issues/164090) Update failure: global-install-failed (2026.9.4)
- [#164176](https://github.com/openclaw/openclaw/issues/164176) Update failure: reconcile:abandoned (2026.9.6)
- [#164179](https://github.com/openclaw/openclaw/issues/164179) Update failure: candidate-doctor (2026.9.7)
- [#164273](https://github.com/openclaw/openclaw/issues/164273) Update failure: gateway-recovery-verification (2026.9.7)
- [#163796](https://github.com/openclaw/openclaw/issues/163796) 2026.9.7 agent DB schema v23→v24 blocks gateway start (exit 78) with no pre-upgrade warning
- [#160731](https://github.com/openclaw/openclaw/issues/160731) [Bug]: Discord /models picker omits the `anthropic` provider and offers `claude-cli`, whose submission fails with "Unknown provider"
- [#165115](https://github.com/openclaw/openclaw/issues/165115) Docs: Slack manifest code groups have no visible copy button
- [#143703](https://github.com/openclaw/openclaw/issues/143703) Update failure: verifying (2026.9.3)
- [#143825](https://github.com/openclaw/openclaw/issues/143825) Update failure: preflight-no-good-commit (2026.9.3)
- [#144052](https://github.com/openclaw/openclaw/issues/144052) Update failure: managed-service-handoff-failed (2026.9.3)
- [#164453](https://github.com/openclaw/openclaw/issues/164453) Update failure: gateway-recovery-verification (2026.9.7)
- [#143672](https://github.com/openclaw/openclaw/issues/143672) [Bug]: @openclaw/feishu 2026.9.3: all feishu_* tools unregistered in multi-account config (overlayMapPath credential check fails with ${VAR} SecretRefs)
- [#143623](https://github.com/openclaw/openclaw/issues/143623) Telegram transport broken in 2026.9.3 — approval delivery fails
- [#165002](https://github.com/openclaw/openclaw/issues/165002) Update failure: gateway-recovery-verification (2026.9.7)
- [#164967](https://github.com/openclaw/openclaw/issues/164967) [Bug]: doctor --fix exits 1 with EPERM fchmod when the state dir root is owned by another user (tightenPrivateDirChain chmod not best-effort)
- [#164890](https://github.com/openclaw/openclaw/issues/164890) Update failure: reconcile:abandoned (2026.9.6)
- [#143277](https://github.com/openclaw/openclaw/issues/143277) Update failure: reconcile:abandoned (2026.9.3)
- [#164917](https://github.com/openclaw/openclaw/issues/164917) Built Doctor CI proof still expects a removed legacy-directory alias
- [#164832](https://github.com/openclaw/openclaw/issues/164832) [Bug]: TypeSafe HTTP 400 input rejection is reported as unreachable Jev provider
- [#164842](https://github.com/openclaw/openclaw/issues/164842) [Bug]: 2026.9.8 upgrade blocked by V2 migration receipt without artifact identity
- [#164856](https://github.com/openclaw/openclaw/issues/164856) Session SQLite migration recovery report (session-sqlite-1791100498662-b6d9780d)
- [#164826](https://github.com/openclaw/openclaw/issues/164826) Update failure: requested (2026.9.7)
- [#164837](https://github.com/openclaw/openclaw/issues/164837) Update failure: managed-service-update-handoff (2026.9.7)
- [#164809](https://github.com/openclaw/openclaw/issues/164809) Update failure: unexpected-error (2026.9.4)
- [#164693](https://github.com/openclaw/openclaw/issues/164693) fix(update): managed handoff hides early refusal reason and details
- [#164733](https://github.com/openclaw/openclaw/issues/164733) [Bug]: Saved-draft recovery appears in view-only subagent panels
- [#165222](https://github.com/openclaw/openclaw/issues/165222) Web-search rejection check rejects detailed Gateway schema errors
- [#165227](https://github.com/openclaw/openclaw/issues/165227) update cannot complete: doctor holds an auto-generated reindex-lock sidecar (unverified-agent-databases)
- [#150469](https://github.com/openclaw/openclaw/issues/150469) Sidebar all-agents mode: remove the duplicated Help submenu from the identity menu
- [#150466](https://github.com/openclaw/openclaw/issues/150466) Sidebar all-agents mode: drop the redundant Main Session row, hide the chevron without sessions, and square the row highlight
- [#150463](https://github.com/openclaw/openclaw/issues/150463) Sidebar all-agents mode: agent row overflow menu does not use the standard menu style
- [#150461](https://github.com/openclaw/openclaw/issues/150461) Sidebar all-agents mode: the menu cannot pick an agent and the OpenClaw identity row breaks the header geometry
- [#150458](https://github.com/openclaw/openclaw/issues/150458) Sidebar identity menu confuses agent navigation and display preferences
- [#165118](https://github.com/openclaw/openclaw/issues/165118) Sidebar child-count badge counts archived children after bulk archive (2026.9.8, follow-up to #157068)
- [#165182](https://github.com/openclaw/openclaw/issues/165182) [Bug]: Home chat messages rejected after reconnect: __controlUiReconnectResume
- [#165152](https://github.com/openclaw/openclaw/issues/165152) Plugin version drift after OpenClaw 2026.9.8 update: Brave and Meta remain 2026.9.7
- [#144134](https://github.com/openclaw/openclaw/issues/144134) [Feature]: Expose WebExtensions tab IDs alongside stable browser handles
- [#165144](https://github.com/openclaw/openclaw/issues/165144) CI-details browser fixture races popup readiness and keyboard ownership
- [#165128](https://github.com/openclaw/openclaw/issues/165128) Google Meet talk-back test asserts before its asynchronous consult completes
- [#165132](https://github.com/openclaw/openclaw/issues/165132) IMAGE Prompt : A confident middle-aged man sitting on a folding camping chair in the middle of a vast golden desert at sunset. He is wearing a brown suede jacket, black pants, and brown leather boots. He has short s
- [#165131](https://github.com/openclaw/openclaw/issues/165131) Mdnoyon
- [#165130](https://github.com/openclaw/openclaw/issues/165130) Mdnoyon
- [#148730](https://github.com/openclaw/openclaw/issues/148730) [Bug]: Discord durable ingress holds the channel lane after deferral, blocking live corrections before steering
- [#143900](https://github.com/openclaw/openclaw/issues/143900) Control UI auto-opens "Ask OpenClaw" update-failure triage on every load; no durable dismiss/acknowledge
- [#165062](https://github.com/openclaw/openclaw/issues/165062) [Bug]: 2026.9.8 fails on Synology: unstable birthtime breaks SQLite migration and agent execution
- [#165056](https://github.com/openclaw/openclaw/issues/165056) [Bug]: openclaw delivery dead-letters list|drain|resubmit — add outbound dead-letter CLI to match channels dead-letters
- [#165043](https://github.com/openclaw/openclaw/issues/165043) [e2e] Negated @agent-octocat visibility check stays green (agent-github-device-authorization)
- [#165000](https://github.com/openclaw/openclaw/issues/165000) [Data correction] #164923 — the representative row I posted was reconstructed, not a real row; here is the actual store contents (answers to nnegi88's 7 questions)
- [#164999](https://github.com/openclaw/openclaw/issues/164999) [Correction] #164923 — my root-cause analysis was wrong; withdrawing the structural-exclusion claim
- [#164996](https://github.com/openclaw/openclaw/issues/164996) All import input install setup
- [#164429](https://github.com/openclaw/openclaw/issues/164429) Control UI: copy file paths directly from chat file links
- [#164983](https://github.com/openclaw/openclaw/issues/164983) macOS app 2026.9.8: node worker package is missing dist/plugins/runtime/index.js, plugins fail to register (Unable to resolve plugin runtime module)
- [#164978](https://github.com/openclaw/openclaw/issues/164978) [Bug]: Plugin generation capture blocks the Gateway event loop for minutes (synchronous, per-file, multi-pass; not reusable across processes)
- [#164974](https://github.com/openclaw/openclaw/issues/164974) [Bug]: CLI in separate PID namespace reclaims live gateway state-owner locks (2026.9.7)
- [#164950](https://github.com/openclaw/openclaw/issues/164950) Update failure: package-permissions (2026.9.6)
- [#164945](https://github.com/openclaw/openclaw/issues/164945) Control UI dashboard: sessions.create fails with 'Session creation publication owner is no longer current' (v2026.9.8, Windows)
- [#164740](https://github.com/openclaw/openclaw/issues/164740) [Bug]: apply_patch rejects context containing en quad or em quad spaces
- [#164924](https://github.com/openclaw/openclaw/issues/164924) Docker web-search rejection check rejects current Gateway error guidance
- [#143187](https://github.com/openclaw/openclaw/issues/143187) [Bug]: Codex stale cleanup can clear a successor physical-client binding
- [#164921](https://github.com/openclaw/openclaw/issues/164921) [Investigating] Short-term promotion: one workspace promotes 0/512 while sibling workspaces promote 50-90% (raw conversation-turn snippets structurally rejected)
- [#164912](https://github.com/openclaw/openclaw/issues/164912) CI timing refit ignores scheduled main test results
- [#164913](https://github.com/openclaw/openclaw/issues/164913) Workspace path test still expects retired legacy state precedence
- [#164911](https://github.com/openclaw/openclaw/issues/164911) In-process Gateway dispatch from channel-originated agent runs fails with "Gateway client authority closed before dispatching <method>"
- [#164908](https://github.com/openclaw/openclaw/issues/164908) [Bug]: Android app Dashboard keeps sending a rejected Gateway secret after setup-code pairing
- [#143050](https://github.com/openclaw/openclaw/issues/143050) Chat-docked browser panel sends no Authorization header on device-token sessions (Screenshot fetch failed 401)
- [#164886](https://github.com/openclaw/openclaw/issues/164886) Plugin tool execute has no gateway context: api.runtime.gateway.request throws 'requires a gateway request scope or instance binding' on a fresh process (no in-process restart)
- [#164876](https://github.com/openclaw/openclaw/issues/164876) [Bug]: 2026.9.8 startup migration aborts with "SQLite snapshot staging file changed during transfer" / "shared-state database generation changed" — false positive on Synology DSM / overlay FS, reproducible on an empty volume
- [#164859](https://github.com/openclaw/openclaw/issues/164859) Session SQLite migration recovery report (session-sqlite-1791108283122-b8f979f7)
- [#164817](https://github.com/openclaw/openclaw/issues/164817) Update failure: managed-service-update-handoff (2026.9.7)
- [#164831](https://github.com/openclaw/openclaw/issues/164831) [Bug]: 2026.9.7+ plugin load fails ("Retained native directory does not resolve the selected OpenClaw host") when npm hoists a plugin's native deps
- [#164426](https://github.com/openclaw/openclaw/issues/164426) [Bug]: A failed startup's diagnosable cause is replaced by the cleanup AggregateError ('Gateway startup failed and cleanup did not complete')
- [#164879](https://github.com/openclaw/openclaw/issues/164879) [Bug]: 2026.9.8 Control UI regression — Tasks page missing, no replacement found for cancelling running automations

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 251,244 · **Open issues:** 47,981 · **Last push:** <1h ago

On October 5, 2026, there were no new releases for the Hermes Agent, but several important updates were merged, including fixes for the Anthropic Opus 5.5's persistent thinking issue and improved handling of user-installed model providers. Additionally, the desktop version now avoids duplicating replies after using a housekeeping tool, and documentation was updated to reflect recent changes in provider support. Notably, a new issue emerged regarding the `/model --provider openai-codex` command, which reports success but fails to rebind the live client, causing a 403 error on subsequent messages. Other significant bug reports include a race condition during disk cleanup and a crash with the Linux desktop app when attempting to update files while running.

#### ✅ Merged PRs
- [#132922](https://github.com/NousResearch/hermes-agent/pull/132922) fix(anthropic): Opus 5.5 keeps thinking on, Sonnet 5.5 turns it off with between_tools
- [#133012](https://github.com/NousResearch/hermes-agent/pull/133012) fix(plugins): a user-installed model provider reports enabled, as the loader treats it
- [#132773](https://github.com/NousResearch/hermes-agent/pull/132773) Desktop no longer paints the same reply twice in one bubble after a housekeeping tool
- [#132995](https://github.com/NousResearch/hermes-agent/pull/132995) docs(image-routing): stop claiming the reverted provider-wide supports_vision probe
- [#132996](https://github.com/NousResearch/hermes-agent/pull/132996) fix(plugins): desktop admission lint must scan repo-root plugin.js too
- [#133004](https://github.com/NousResearch/hermes-agent/pull/133004) fix(auth): find the Claude CLI outside PATH in external-process and setup-token checks

#### 🐛 New Issues
- [#132935](https://github.com/NousResearch/hermes-agent/issues/132935) /model --provider openai-codex mid-session switch reports success but silently fails to rebind the live client (403 on next message) `type/bug` `comp/cli` `provider/openai` `P2` 💬3
- [#132934](https://github.com/NousResearch/hermes-agent/issues/132934) Compaction handoff republished as an assistant reply, with a paraphrased opener that defeats summary classification `type/bug` `comp/agent` `P1` `sweeper:risk-session-state` 💬2
- [#132963](https://github.com/NousResearch/hermes-agent/issues/132963) hermes config set cannot address named entries inside list-type config keys (e.g. custom_providers) `type/feature` `comp/cli` `area/config` `P3` 💬2
- [#132943](https://github.com/NousResearch/hermes-agent/issues/132943) disk-cleanup: parallel tool calls race on tracked.json — shared .tmp name plus unlocked read-modify-write silently drops tracked entries `type/bug` `comp/plugins` `P3` 💬2
- [#133013](https://github.com/NousResearch/hermes-agent/issues/133013) [Feature]: sessions CLI: show the values you filter on (preview + list columns, sort, absolute date) `type/feature` `comp/cli` `P3` `sweeper:risk-session-state` 💬1
- [#132814](https://github.com/NousResearch/hermes-agent/issues/132814) [Bug]: Home Assistant migration installs the plugin into profiles that never used Home Assistant (the example config's platform_toolsets row counts as use) `type/bug` `comp/cli` `comp/plugins` `area/config` 💬1
- [#133010](https://github.com/NousResearch/hermes-agent/issues/133010) [Feature]: Run browser_exec’s Python harness inside the configured Docker sandbox `type/feature` `tool/browser` `backend/docker` `P3` 💬1
- [#133008](https://github.com/NousResearch/hermes-agent/issues/133008) [Bug]: kanban: decomposing a triage task that has a parent dispatches its children before that parent is done `type/bug` `comp/cron` `P3` 💬1
- [#132998](https://github.com/NousResearch/hermes-agent/issues/132998) `hermes prompt-size` fetches OpenRouter's model list despite being documented as offline `type/bug` `comp/agent` `comp/cli` `provider/openrouter` 💬1
- [#132968](https://github.com/NousResearch/hermes-agent/issues/132968) [Bug][Desktop/SSH]: Bots roster does not discover new remote profiles after successful inventory until connection Test `type/bug` `backend/ssh` `P2` `comp/desktop` 💬1
- [#132999](https://github.com/NousResearch/hermes-agent/issues/132999) [Bug]: Infinite WebSocket reconnect loop in ChatSidebar pegs CPU at 100% when socket drops shortly after 'open' (regression around #95951) `type/bug` `duplicate` `P2` `sweeper:risk-session-state` 💬1
- [#132986](https://github.com/NousResearch/hermes-agent/issues/132986) reset_codex_reasoning_replay clears a replay verdict the route already earned `type/bug` `comp/agent` `provider/openai` `P2` 💬1
- [#132985](https://github.com/NousResearch/hermes-agent/issues/132985) test `invalid` `comp/agent` `P3` 💬1
- [#132970](https://github.com/NousResearch/hermes-agent/issues/132970) [Bug][Desktop/SSH]: Bots roster does not discover new remote profiles after successful inventory until connection Test 💬1
- [#132670](https://github.com/NousResearch/hermes-agent/issues/132670) Linux desktop app crashes with SIGTRAP (IMMEDIATE_CRASH) when `hermes update` rewrites app files under the running process `type/bug` `comp/cli` `P2` `sweeper:risk-compatibility` 💬1
- [#132962](https://github.com/NousResearch/hermes-agent/issues/132962) [Bug]: Dashboard side-panel connection flaps: WS reconnect loop (~4/s), session reaped on every disconnect, status cycles live → disconnecting → closed → connecting `type/bug` `duplicate` `P2` `sweeper:risk-session-state` 💬1
- [#133017](https://github.com/NousResearch/hermes-agent/issues/133017) [Bug]: one out-of-contract counter row aborts shared-metrics packaging for every metric in the period `type/bug` `comp/cli` `comp/plugins` `P3`
- [#133006](https://github.com/NousResearch/hermes-agent/issues/133006) [Bug]: macOS Desktop form-filling failure: stale/empty browser targets and unverified agent recovery loops `type/bug` `tool/browser` `P3` `needs-repro`
- [#133000](https://github.com/NousResearch/hermes-agent/issues/133000) [Bug]: prompt vol `type/bug` `comp/agent` `P3` `needs-repro`
- [#132989](https://github.com/NousResearch/hermes-agent/issues/132989) Upstream Hermes bug report - gateway stop drain kills api_server runs `type/bug` `comp/gateway` `P1` `sweeper:risk-session-state`
- [#132992](https://github.com/NousResearch/hermes-agent/issues/132992) [Bug]: Copilot `gh auth token` fallback ignores `auth.adopt_external_logins` and cannot be disabled per profile `type/bug` `comp/cli` `provider/copilot` `area/auth`
- [#132993](https://github.com/NousResearch/hermes-agent/issues/132993) [Bug]: Multiplex gateway does not re-scan a profile when shell-hook consent changes, so a hook configured before its consent was recorded stays unregistered until restart `type/bug` `comp/agent` `comp/gateway` `area/config`
- [#132981](https://github.com/NousResearch/hermes-agent/issues/132981) Desktop (macOS): composer ships spellCheck:false — suggestion UI dead code; persisted zoom breaks context-menu coordinates `type/bug` `P3` `comp/desktop`
- [#132973](https://github.com/NousResearch/hermes-agent/issues/132973) [Doc Bug] Slash commands for /queue are incorrect `type/docs` `comp/tui` `P3`
- [#132964](https://github.com/NousResearch/hermes-agent/issues/132964) feat(tools): additive `defer` syntax + deferral reachability for memory-provider tool families `type/feature` `comp/agent` `comp/tools` `tool/memory`
- [#132965](https://github.com/NousResearch/hermes-agent/issues/132965) feat(skills): config-gated category-header compaction in <available_skills> (~500 tok/request, zero capability loss) `type/perf` `comp/agent` `tool/skills` `area/config`
- [#132971](https://github.com/NousResearch/hermes-agent/issues/132971) [Bug]: Discord: triggering-message note persisted in transcript for native-image turns (persist override skipped for multimodal content) `type/bug` `comp/gateway` `tool/vision` `platform/discord`
- [#132949](https://github.com/NousResearch/hermes-agent/issues/132949) Ordinary instruction answered with only the "[response interrupted]" placeholder `type/bug` `comp/agent` `P1` `sweeper:risk-session-state`
- [#132958](https://github.com/NousResearch/hermes-agent/issues/132958) terminal tool: timeout leaves the command process tree running on Windows `type/bug` `comp/tools` `tool/terminal` `backend/local`

#### 🔒 Closed Issues
- [#131711](https://github.com/NousResearch/hermes-agent/issues/131711) fix(google-workspace): empty Gmail searches return non-JSON in the Python backend
- [#130396](https://github.com/NousResearch/hermes-agent/issues/130396) Desktop chat: assistant reply with markdown table renders twice after a tool call
- [#128870](https://github.com/NousResearch/hermes-agent/issues/128870) Desktop: duplicate assistant reply — frame-level evidence (single socket, one message.complete) points at the streaming bubble not being replaced
- [#132985](https://github.com/NousResearch/hermes-agent/issues/132985) test
- [#132970](https://github.com/NousResearch/hermes-agent/issues/132970) [Bug][Desktop/SSH]: Bots roster does not discover new remote profiles after successful inventory until connection Test

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 93,178 · **Open issues:** 8,461 · **Last push:** 2h ago

On October 5, 2026, there were no new releases for vLLM; however, several important updates were merged, notably including the addition of a deterministic split-K=8 LoRA shrink for improved batch invariance in PR #59377 and enhancements to the model-not-found 404 response in PR #59889. Bug fixes also focused on critical areas like preserving output dtype in the batch-invariant mean (PR #59106) and normalizing single-channel audio (PR #56691), addressing notable issues in the software’s functionality. A significant new issue was reported regarding the RecoverSSM align mode that mismanages the final SSM state, prompting discussions within the community. Overall, the day was characterized by routine maintenance with specific enhancements that aim to improve overall performance and user experience.

#### ✅ Merged PRs
- [#59377](https://github.com/vllm-project/vllm/pull/59377) [Kernel][LoRA] Add deterministic split-K=8 LoRA shrink for batch invariance
- [#59521](https://github.com/vllm-project/vllm/pull/59521) [CI] Stop requiring both API servers to record weight sync metrics
- [#59889](https://github.com/vllm-project/vllm/pull/59889) [Frontend] Name the served models in the model-not-found 404
- [#59913](https://github.com/vllm-project/vllm/pull/59913) [CI] Auto-label pooling PRs and issues
- [#58457](https://github.com/vllm-project/vllm/pull/58457) [Misc][Platform] Check aligned KV block sizes against every attention backend
- [#59106](https://github.com/vllm-project/vllm/pull/59106) [Bugfix][Determinism] Preserve output dtype in batch-invariant mean
- [#40986](https://github.com/vllm-project/vllm/pull/40986) [Bugfix][Frontend] Return streaming errors before the first token
- [#53692](https://github.com/vllm-project/vllm/pull/53692) [CI][Docs] Fix decode/prefill consistency test prefix construction; add GLM-4-9B and Phi-4 to batch-invariant tested models
- [#59550](https://github.com/vllm-project/vllm/pull/59550) [ROCm][Bugfix] Fix ROCM_ATTN sliding-window boundary
- [#59932](https://github.com/vllm-project/vllm/pull/59932) [CI] Bump peft to satisfy transformers 5.18 minimum
- [#59159](https://github.com/vllm-project/vllm/pull/59159) [Bugfix][XPU] Make DeepSeek V4 FP8 sparse decode graph-capturable
- [#56691](https://github.com/vllm-project/vllm/pull/56691) [Bugfix][Multimodal] Normalize single-channel audio to 1D
- [#59862](https://github.com/vllm-project/vllm/pull/59862) [Bugfix][KV Offload] Release pending CPU lookup pins on cache reset
- [#59859](https://github.com/vllm-project/vllm/pull/59859) [Bugfix][Responses API] Reuse streamed item ids in final harmony response
- [#47933](https://github.com/vllm-project/vllm/pull/47933) [Bugfix][Frontend] Preserve abort finish_reason for scale-out token streams
- [#56891](https://github.com/vllm-project/vllm/pull/56891) [Bugfix] Fix FlashInfer all_reduce backend selection

#### 🐛 New Issues
- [#59933](https://github.com/vllm-project/vllm/issues/59933) [Bug]: RecoverSSM align mode commits the final SSM state to an unwritten block at exact block boundaries (floor vs ceil-1) `kimi` 💬2
- [#59988](https://github.com/vllm-project/vllm/issues/59988) [Bug]: With --api-server-count > 1, gauges such as vllm:num_requests_running have no samples until the first request 💬1
- [#59956](https://github.com/vllm-project/vllm/issues/59956) [Bug]: NIXL: `remove_remote_agent` does not release UCX endpoints, so each `engine_ttl` eviction + re-handshake leaks until handshakes fail `bug` `kv-connector` 💬1
- [#59946](https://github.com/vllm-project/vllm/issues/59946) [Bug]: gemma4 loader requires k_proj/v_proj/k_norm for KV-shared layers that transformers 5.5.4 never saves; any transformers-saved gemma4 checkpoint is refused `quantization` 💬1
- [#59926](https://github.com/vllm-project/vllm/issues/59926) [Bug] DeepSeek-V4-Flash tool-call format failures associated with prefix-cache reuse; worst for short cached head + long uncached suffix; `cache_salt` reduces failures but is confounded with hit shape (v0.27.1, fp8 KV, MTP) `rocm` `tool-calling` `deepseek` `DSv4` 💬1
- [#59991](https://github.com/vllm-project/vllm/issues/59991) [Bug]: CPU attention rejects DiffusionGemma int32 causal mask since #51994 `bug`
- [#59987](https://github.com/vllm-project/vllm/issues/59987) [Bug]: --disable-custom-all-reduce says it falls back to NCCL, but FlashInfer and symm-mem all-reduce stay enabled
- [#59971](https://github.com/vllm-project/vllm/issues/59971) [Bug]: NIXL pull: one wedged connection repeatedly strands decode KV blocks (production log analysis) `bug` `kv-connector`
- [#59970](https://github.com/vllm-project/vllm/issues/59970) [Bug]: DeepSeek-V4.1 DSpark adaptive verification + FULL_AND_PIECEWISE: illegal memory access under concurrent prefill (FlashInfer sparse DSV41 builders declare ALWAYS) `deepseek` `DSv4.1`
- [#59964](https://github.com/vllm-project/vllm/issues/59964) [Bug]: Split top-p pipeline (_topp_sb_*) over-keeps tokens near the boundary, same stall class as #59804
- [#59954](https://github.com/vllm-project/vllm/issues/59954) [Bug]: FlashInfer sampler runs JIT after has_flashinfer() disables FlashInfer, crashing startup without ninja
- [#59940](https://github.com/vllm-project/vllm/issues/59940) [Bug]: `VLLM_BATCH_INVARIANT=1` silently produces wrong tokens on a cold model-info cache (`eager_break_during_capture` is resolved at import time)
- [#59920](https://github.com/vllm-project/vllm/issues/59920) [Bug] Legacy fused_moe_lora kernel silently casts fp16 LoRA operands to bfloat16 `quantization`
- [#59919](https://github.com/vllm-project/vllm/issues/59919) [Bug]: prompt_embeds decode limit is per-part, allowing request-level memory amplification

#### 🔒 Closed Issues
- [#32732](https://github.com/vllm-project/vllm/issues/32732) [Bug]: Regression in v0.14.0: "No valid attention backend found" for nvidia/DeepSeek-R1-0528-NVFP4 on RTX Pro 6000 (Blackwell)
- [#36960](https://github.com/vllm-project/vllm/issues/36960) [Feature]: Add /health/ready endpoint for GPU health verification
- [#40807](https://github.com/vllm-project/vllm/issues/40807) [Bug]: TurboQuant KV + spec-decode + chunked-prefill crashes CUDA graph capture at query_start_loc.tolist() in continuation-prefill path (Qwen3-Next hybrid dense)
- [#32962](https://github.com/vllm-project/vllm/issues/32962) [Performance]: Custom Helion Kernels
- [#27178](https://github.com/vllm-project/vllm/issues/27178) [Bug]: torch._dynamo hit recompile_limit using FlexAttention backend
- [#39919](https://github.com/vllm-project/vllm/issues/39919) [Bug]: DeepSeek OCR doesn't work on vllm 0.19
- [#34518](https://github.com/vllm-project/vllm/issues/34518) [Feature]: [Whisper] Support for decoder prefix and custom task tokens in transcription API
- [#37581](https://github.com/vllm-project/vllm/issues/37581) [Bug]: /v1/chat/completions/render` crashes for Qwen/Qwen3-ASR-0.6B multimodal audio, and chat audio returns empty/junk
- [#37967](https://github.com/vllm-project/vllm/issues/37967) [Bug]: TypeError: transformers.tokenization_utils_tokenizers.TokenizersBackend._patch_mistral_regex() got multiple values for keyword argument 'fix_mistral_regex'
- [#38041](https://github.com/vllm-project/vllm/issues/38041) V2 model runner crashes on Qwen3.5 mixed attention (linear + full)
- [#41849](https://github.com/vllm-project/vllm/issues/41849) [Bug]: Engine crashes on startup with 'DeepGEMM backend not available' for standard bf16 models on H100
- [#41969](https://github.com/vllm-project/vllm/issues/41969) [Bug]: AsyncLLM silent-hangs on multimodal pooling requests when default max_num_batched_tokens too small (L4); sync LLM works on same hardware
- [#57713](https://github.com/vllm-project/vllm/issues/57713) [Bug]: GLM5.3-Flash does not support fp8 kv cache dtype on hopper
- [#34351](https://github.com/vllm-project/vllm/issues/34351) [Installation]: MAC M1 installation fails because of bits-and-bytes
- [#41961](https://github.com/vllm-project/vllm/issues/41961) [ROCm/MI325X] DeepSeek-V4-Flash: NotImplementedError: mul_cuda not implemented for Float8_e8m0fnu in normalize_e4m3fn_to_e4m3fnuz
- [#42084](https://github.com/vllm-project/vllm/issues/42084) [Bug]: GDN attention `mamba_get_block_table_tensor` torch.gather index out of bounds when prefix caching + num_speculative_tokens>=10 (DFlash, DGX Spark sm_121a, Qwen3.6 hybrid)
- [#59876](https://github.com/vllm-project/vllm/issues/59876) [Bug]: Multimodal chat requests silently drop all images when request-level chat_template_kwargs is present (v0.30.0, Gemma-4-26B-A4B)
- [#37551](https://github.com/vllm-project/vllm/issues/37551) [Bug] vLLM 0.17.1: `zai-org/GLM-OCR` has `mtp_graph < no_mtp_graph` despite high acceptance
- [#39039](https://github.com/vllm-project/vllm/issues/39039) [Bug]: vLLM attempts to download Hugging Face cache file during inference despite local model path (Gemma 4)
- [#40740](https://github.com/vllm-project/vllm/issues/40740) [Bug]: assert is_mixture_of_experts fails on vllm serve with --enable-eplb
- [#41862](https://github.com/vllm-project/vllm/issues/41862) [Bug]: EP Deadlock with Hybrid GDN/Mamba Architecture (Qwen3.5)
- [#44732](https://github.com/vllm-project/vllm/issues/44732) 💥 RTX 5090 + WSL2: V1 Engine hangs at startup — EngineCore spawns but never connects via ZMQ, ALL models fail (v0.21-0.22), raw spawn+Pytorch works fine
- [#45742](https://github.com/vllm-project/vllm/issues/45742) [Bug]: Responses API streaming for GPT-OSS Harmony crashes OpenAI SDK with `IndexError` due to incorrect `content_index` logic
- [#59078](https://github.com/vllm-project/vllm/issues/59078) [Bug]: VLLM_BATCH_INVARIANT=1 breaks DeepEncoder models (DeepSeek-OCR family): mean_batch_invariant returns float32, LayerNorm2d then feeds fp32 into a bf16 conv2d

### SGLang (`sgl-project/sglang`)

**Stars:** 36,783 · **Open issues:** 5,502 · **Last push:** <1h ago

On October 5, 2026, there were no new releases for SGLang, but several notable pull requests were merged, including a significant refactor simplifying the GDN, vision RoPE, and MLA kernel dispatch (#42506), and a fix for GigaChat 3.5 that ensures stage boundaries are built only once (#42480). Additional improvements included a change to the Apple Silicon support for the standard Torch model runner (#36780) and a fix addressing unified HiCache physical transfers (#39479). Among new issues, a particularly concerning bug was reported regarding DeepSeek-V4 alongside HiCache, where TP ranks deadlock under concurrent long prefills (#42465), highlighting a critical point of failure.

#### ✅ Merged PRs
- [#42506](https://github.com/sgl-project/sglang/pull/42506) [Refactor] Simplify GDN, vision RoPE and MLA kernel dispatch
- [#41691](https://github.com/sgl-project/sglang/pull/41691) [PD] Reload NIXL peer metadata after the peer is invalidated
- [#42481](https://github.com/sgl-project/sglang/pull/42481) [Refactor] Build layer stacks in order with append_stages
- [#42273](https://github.com/sgl-project/sglang/pull/42273) [Dsv4.1] Bounded replay with sparse mla path
- [#39931](https://github.com/sgl-project/sglang/pull/39931) [ROCm] topk v2: split one long row across blocks, the CDNA cluster-path equivalent
- [#42480](https://github.com/sgl-project/sglang/pull/42480) [Fix] GigaChat 3.5: build the stage boundaries once
- [#42479](https://github.com/sgl-project/sglang/pull/42479) [Fix] Offer the fused MoE finalize all-reduce only to a block that owes the sum
- [#42478](https://github.com/sgl-project/sglang/pull/42478) [Refactor] Build the Qwen4 experimental decoders from stage boundaries
- [#42477](https://github.com/sgl-project/sglang/pull/42477) [Refactor] Build the Hunyuan V4 decoder from stage boundaries
- [#39479](https://github.com/sgl-project/sglang/pull/39479) Fix unified HiCache physical transfers
- [#38229](https://github.com/sgl-project/sglang/pull/38229) fix(inkling): translate unified-memory checkpoint destinations to physical slots
- [#42486](https://github.com/sgl-project/sglang/pull/42486) [Kernel] Use explicit reciprocal scaling for recurrent Q/K normalization
- [#38828](https://github.com/sgl-project/sglang/pull/38828) [weight_cache] Coordinate daemon readiness across ranks
- [#36780](https://github.com/sgl-project/sglang/pull/36780) [Apple Silicon] Add an Apple Silicon (MPS) platform to the standard Torch model runner
- [#42436](https://github.com/sgl-project/sglang/pull/42436) [sglang-miles] [diffusion] fix: give the scheduler its own host
- [#42470](https://github.com/sgl-project/sglang/pull/42470) [sglang-miles] [diffusion] fix: report the port each scheduler actually bound to its clients
- [#42072](https://github.com/sgl-project/sglang/pull/42072) fix(unified-memory): propagate unified-memory lazy checkpoint policy and handle unallocated session slots
- [#42463](https://github.com/sgl-project/sglang/pull/42463) [CI] Temporarily disable GB300
- [#41725](https://github.com/sgl-project/sglang/pull/41725) [ROCm] GLM-5.2 decode path: decode-shaped MoE/MLA tiles, split speculative softmax, and bf16 GEMM routing
- [#42512](https://github.com/sgl-project/sglang/pull/42512) [AMD][Docs] fix mori io and umbp playground
- [#42494](https://github.com/sgl-project/sglang/pull/42494) [AMD] Fix RoPE cache dtype and diffusion CI failures
- [#41453](https://github.com/sgl-project/sglang/pull/41453) [HiCache] refactor: retire in-flight storage prefetches through one helper
- [#42171](https://github.com/sgl-project/sglang/pull/42171) [Diffusion] FLUX 3 Action: CUDA graphs for observation encoding and denoising steps
- [#42174](https://github.com/sgl-project/sglang/pull/42174) [diffusion] Qwen-Image 2.1: load ComfyUI/ai-toolkit fused `gate_up` LoRAs and diffusers metadata alpha
- [#41895](https://github.com/sgl-project/sglang/pull/41895) [Diffusion] Action API: decode JSON pixel lists to numpy at the entrypoint
- [#41405](https://github.com/sgl-project/sglang/pull/41405) [AMD][DI][CI] mi355x spur: skip RDMA ports that are not PORT_ACTIVE; dump driver log on failure
- [#42487](https://github.com/sgl-project/sglang/pull/42487) [CI] Fix bootstrap sender registration test on main
- [#42391](https://github.com/sgl-project/sglang/pull/42391) [diffusion] move kernel validation into launchers and simplify dispatch
- [#42051](https://github.com/sgl-project/sglang/pull/42051) [PD] Validate decode state layout once at registration
- [#42461](https://github.com/sgl-project/sglang/pull/42461) [AMD][CI] Fix ROCm kernel wheel sources: drop eagle_utils, add DSV4 kernels
- [#39982](https://github.com/sgl-project/sglang/pull/39982) [Bugfix] Fix unified-memory compaction gates and pending page reuse
- [#42471](https://github.com/sgl-project/sglang/pull/42471) [diffusion] fix: pin the JoyAI-Echo overlay's source revision
- [#41797](https://github.com/sgl-project/sglang/pull/41797) [diffusion] video: let requests choose the libx264 preset
- [#42121](https://github.com/sgl-project/sglang/pull/42121) fix(diffusion): load serialized H3 INT8 in ComfyUI integrated mode
- [#38641](https://github.com/sgl-project/sglang/pull/38641) [Deps] Upgrade the CUDA PyTorch stack to 2.14
- [#40190](https://github.com/sgl-project/sglang/pull/40190) [XPU] Enable fused QK-norm + RoPE for Qwen3-MoE
- [#42460](https://github.com/sgl-project/sglang/pull/42460) [Fix] Publish the parallel config the CLIP attention test reads
- [#42041](https://github.com/sgl-project/sglang/pull/42041) [CP] Support scattered interleave CP inputs with expert parallelism
- [#34438](https://github.com/sgl-project/sglang/pull/34438) [AMD][DCP 2/N] Enable aiter asm ps for kimi k3 prefill
- [#42330](https://github.com/sgl-project/sglang/pull/42330) [Session] Release aborted streaming turns through the normal release path
- [#42329](https://github.com/sgl-project/sglang/pull/42329) [Diffusion][CI] Add missing B200 Cirrascale runner E2E baselines
- [#39818](https://github.com/sgl-project/sglang/pull/39818) [MoE] Use FlashInfer A2A for prefill instead of AG+RS
- [#42233](https://github.com/sgl-project/sglang/pull/42233) [CI] Install only userspace libgdrapi for GDRCopy
- [#42331](https://github.com/sgl-project/sglang/pull/42331) [Fix] Count attention-DP ranks in one-batch bench running cap
- [#42038](https://github.com/sgl-project/sglang/pull/42038) [CP] Support DP x TP x CP for attention with interleave CP strategy
- [#41786](https://github.com/sgl-project/sglang/pull/41786) [PD] Publish prefill DP rank whenever forced lookup is enabled
- [#42454](https://github.com/sgl-project/sglang/pull/42454) [PD] Drop the removed MooncakeKVSender args from test_prefill_complete_integration
- [#38480](https://github.com/sgl-project/sglang/pull/38480) [HiCache]: Fix host lock ownership across radix splits
- [#35357](https://github.com/sgl-project/sglang/pull/35357) [AMD] MiniMax-M3: fuse sparse QK norm, RoPE and cache writes with AITER
- [#41296](https://github.com/sgl-project/sglang/pull/41296) docs: sync LMSYS SGLang blog cards
- [#39862](https://github.com/sgl-project/sglang/pull/39862) [Fix] HiCache: carry registered Mamba slot side states (Qwen4-Exp PLE) through the host tier

#### 🐛 New Issues
- [#42511](https://github.com/sgl-project/sglang/issues/42511) [Feature] server-level control over GPU image decoding 💬4
- [#42465](https://github.com/sgl-project/sglang/issues/42465) [Bug] DeepSeek-V4 + HiCache write_through: TP ranks deadlock under concurrent long prefills (scheduler and detokenizer go silent, /health 503) 💬1
- [#42473](https://github.com/sgl-project/sglang/issues/42473) Test issue (deprecated)
- [#42530](https://github.com/sgl-project/sglang/issues/42530) [Bug] big prefill blocks other requests on 2xRTX3090 for qwen3.8 27b
- [#42528](https://github.com/sgl-project/sglang/issues/42528) [Bug] `tree_speculative_sampling_target_only` rejects the only token with target mass when the coin equals the largest float32 below 1 and emits token id `vocab_size - 1`
- [#42510](https://github.com/sgl-project/sglang/issues/42510) [Bug] EAGLE/MTP same-checkpoint draft keeps redundant embed_tokens/lm_head copies resident during KV pool sizing → under-sized pool, startup OOM
- [#42508](https://github.com/sgl-project/sglang/issues/42508) [Bug] Scheduler aborts with `double free or corruption` inside the idle-loop invariant check (`session_held_tokens` walk); server hangs permanently afterwards
- [#42459](https://github.com/sgl-project/sglang/issues/42459) [Feature] Upgrade Nsight Compute bundled by the CUDA devel base image

#### 🔒 Closed Issues
- [#33501](https://github.com/sgl-project/sglang/issues/33501) [Bug] MiniMax H3 failed to run。
- [#29149](https://github.com/sgl-project/sglang/issues/29149) [Bug] `--enable-deterministic-inference` crashes during startup on NVIDIA L40S with Triton shared-memory OutOfResources
- [#42511](https://github.com/sgl-project/sglang/issues/42511) [Feature] server-level control over GPU image decoding
- [#42392](https://github.com/sgl-project/sglang/issues/42392) [Feature] File-backed PLE table: concurrent host reads for cold rows (6.8x lower cold-prefill TTFT on GB10)
- [#33657](https://github.com/sgl-project/sglang/issues/33657) [BUG] sunset Gemini Code Assist referenced in CI
- [#33771](https://github.com/sgl-project/sglang/issues/33771) Question: content-based LoRA adapter selection (routing from the query, not the request)
- [#33740](https://github.com/sgl-project/sglang/issues/33740) [Bug] With PD Disaggregation, the router reports being healthy when the first prefill worker is still initializing
- [#33708](https://github.com/sgl-project/sglang/issues/33708) [Feature] [Diffusion] Overlap Ulysses A2A with attention compute for Wan2.2-TI2V-5B
- [#33698](https://github.com/sgl-project/sglang/issues/33698) [Bug] Concurrent paused weight updates share completion state
- [#33696](https://github.com/sgl-project/sglang/issues/33696) [Bug] Concurrent pause and continue requests can orphan a tokenizer worker waiter
- [#33695](https://github.com/sgl-project/sglang/issues/33695) [Bug] Deterministic sampling rejects min-p requests with a seed
- [#33687](https://github.com/sgl-project/sglang/issues/33687) [Bug] Multimodal cuda_ipc transport crashes with PermissionError on shared hosts due to hardcoded /tmp/shm_wr_lock.lock

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 130,314 · **Open issues:** 2,530 · **Last push:** 1h ago

Today's update for llama.cpp includes the release of five new versions, with b11400 introducing support for both embedded and raw tokens in batch processing, and b11398 adding support for BF16, FP16, and FP32 K tails in tinyBLAS on x86. Key merged features today included improvements to CUDA with a refactor of swizzling code and fixes for memory faults, especially in scenarios involving multiple experts. Additionally, a significant issue was reported regarding Qwen3.8-27B that pertains to a bug in a plugin opencode-tool-search, where a CallExpression error occurs during execution. Overall, it has been a productive day with crucial enhancements and a few critical evaluations to address.

#### 🚀 New Releases
- [b11401](https://github.com/ggml-org/llama.cpp/releases/tag/b11401) b11401
- [b11400](https://github.com/ggml-org/llama.cpp/releases/tag/b11400) b11400
- [b11399](https://github.com/ggml-org/llama.cpp/releases/tag/b11399) b11399
- [b11398](https://github.com/ggml-org/llama.cpp/releases/tag/b11398) b11398
- [b11397](https://github.com/ggml-org/llama.cpp/releases/tag/b11397) b11397
- [b11396](https://github.com/ggml-org/llama.cpp/releases/tag/b11396) b11396
- [b11393](https://github.com/ggml-org/llama.cpp/releases/tag/b11393) b11393
- [b11392](https://github.com/ggml-org/llama.cpp/releases/tag/b11392) b11392
- [b11391](https://github.com/ggml-org/llama.cpp/releases/tag/b11391) b11391
- [b11390](https://github.com/ggml-org/llama.cpp/releases/tag/b11390) b11390

#### ✅ Merged PRs
- [#29622](https://github.com/ggml-org/llama.cpp/pull/29622) llama: support both embd + raw tokens in batch
- [#29895](https://github.com/ggml-org/llama.cpp/pull/29895) log, server: self contained colors, split child commands from logs in router mode
- [#29612](https://github.com/ggml-org/llama.cpp/pull/29612) CUDA: refactor swizzling code
- [#29806](https://github.com/ggml-org/llama.cpp/pull/29806) ggml-cpu: support BF16/FP16/FP32 K tails in tinyBLAS on x86
- [#29940](https://github.com/ggml-org/llama.cpp/pull/29940) cuda : move neu_padded to where it is used
- [#29942](https://github.com/ggml-org/llama.cpp/pull/29942) chat-peg-parser : fix use-after-free / double-free in common_chat_peg_mapper
- [#29959](https://github.com/ggml-org/llama.cpp/pull/29959) ci : windows llvm build requires ninja multi-config
- [#29954](https://github.com/ggml-org/llama.cpp/pull/29954) ci : add windows arm64 vulkan release
- [#29656](https://github.com/ggml-org/llama.cpp/pull/29656) AGENTS.md : revamp
- [#29945](https://github.com/ggml-org/llama.cpp/pull/29945) ci : set default permissions
- [#29939](https://github.com/ggml-org/llama.cpp/pull/29939) cuda : move blocks_per_col to where it is used
- [#14891](https://github.com/ggml-org/llama.cpp/pull/14891) imatrix: calculate activation-based statistics for new format (GGUF) imatrices
- [#29941](https://github.com/ggml-org/llama.cpp/pull/29941) CUDA: fix MMQ memory fault if n_expert >> n_ubatch
- [#29934](https://github.com/ggml-org/llama.cpp/pull/29934) vulkan: fix rdna4 mat_vec tuning
- [#29924](https://github.com/ggml-org/llama.cpp/pull/29924) spec : fix n-gram drafts rejected at temp > 0 after truncation
- [#29674](https://github.com/ggml-org/llama.cpp/pull/29674) common : prepare load_from_models_dir() for path conversion
- [#29938](https://github.com/ggml-org/llama.cpp/pull/29938) server : fix dead LLAMA_ARG_HF_REPO_FILE key in preset allow-list
- [#29937](https://github.com/ggml-org/llama.cpp/pull/29937) ci : pushing tag needs deploy key
- [#29913](https://github.com/ggml-org/llama.cpp/pull/29913) ci : improve release flow

#### 🐛 New Issues
- [#29947](https://github.com/ggml-org/llama.cpp/issues/29947) Eval bug: Qwen3.8-27B, opencode, plugin opencode-tool-search: While executing CallExpression at line 106, column 32 in source:\n...first %} `bug-unconfirmed` 💬3
- [#29932](https://github.com/ggml-org/llama.cpp/issues/29932) qwen4exp: per_layer_token_embd is CPU-pinned — Q8 model cannot load on 2×96 GiB Vulkan+RPC (needs ~50.7 GiB host RAM) 💬2
- [#29951](https://github.com/ggml-org/llama.cpp/issues/29951) Feature Request: HTTP MCP server support `enhancement` 💬1
- [#29935](https://github.com/ggml-org/llama.cpp/issues/29935) perf (CUDA): fattn KV streaming on Ampere (sm86) is ~2x off physics at long context; quantized-KV + batch>1 always pays an f16-conversion pass 💬1
- [#29933](https://github.com/ggml-org/llama.cpp/issues/29933) llama-server (RPC client) occasionally ignores SIGTERM after long sessions — requires SIGKILL, holding a half-open RPC connection 💬1
- [#29970](https://github.com/ggml-org/llama.cpp/issues/29970) Eval bug: Qwen3.6-35B-A3B (qwen35moe) cannot read text in images — sees shapes/colors, misreads letters/digits; same on CPU, all quants, all projectors, latest master `bug-unconfirmed`
- [#29967](https://github.com/ggml-org/llama.cpp/issues/29967) Eval bug: Segmentation fault if a tool named "call" is called on llama-server `bug-unconfirmed`
- [#29965](https://github.com/ggml-org/llama.cpp/issues/29965) Feature Request: vulkan: group heads in flash attention when they don't fit in a tile `enhancement`
- [#29952](https://github.com/ggml-org/llama.cpp/issues/29952) [Vulkan] Adreno driver SIGSEGV for KHR cooperative matrix with an fp16 accumulator after spirv-opt --ssa-rewrite
- [#29950](https://github.com/ggml-org/llama.cpp/issues/29950) Eval bug: GLM-5.3-Flash increased VRAM usage after specific commit in PR#27773 `bug-unconfirmed`
- [#29949](https://github.com/ggml-org/llama.cpp/issues/29949) Feature Request: MoE expert cache with GPU-resident LRU - cache decisions and copies run on the GPU inside the compute graph `enhancement`
- [#29931](https://github.com/ggml-org/llama.cpp/issues/29931) Tool-call JSON corruption at long context (MiMo-V2.6 + RPC): repeated "Failed to parse tool call arguments as JSON" 500s

#### 🔒 Closed Issues
- [#25030](https://github.com/ggml-org/llama.cpp/issues/25030) Feature Request: add builds for arm64 windows with CUDA
- [#24303](https://github.com/ggml-org/llama.cpp/issues/24303) [BUG] Qwen3.6-35B-A3B / llama-server merges consecutive images into 2 frames, causing incorrect image count and partial image understanding
- [#26583](https://github.com/ggml-org/llama.cpp/issues/26583) RPC: GLM-5.2 crashes on multi-node CUDA RPC - invalid data ptr / graph_compute failed
- [#17798](https://github.com/ggml-org/llama.cpp/issues/17798) Feature Request: Add support for Multilple Responses in WebUI
- [#26031](https://github.com/ggml-org/llama.cpp/issues/26031) Eval bug: Qwen3.6-35B-A3B-Q8_0.gguf multiple clients concurrently produce garbled output b9922 above（b9918 is ok）
- [#27264](https://github.com/ggml-org/llama.cpp/issues/27264) Misc. bug: [Vulkan] -ngl not working as intended. Model loads entirely in VRAM
- [#27467](https://github.com/ggml-org/llama.cpp/issues/27467) Bug: --split-mode tensor on CUDA dual-GPU does not fully offload model weights + sampling falls back to CPU (regression between 9ee9fc04 and a302733)
- [#27367](https://github.com/ggml-org/llama.cpp/issues/27367) Bug: HTTP 500 when a system message appears mid-conversation (strict chat templates, e.g. Qwen3.x)
- [#26238](https://github.com/ggml-org/llama.cpp/issues/26238) Eval bug: Hy3 Performance is very poor
- [#29878](https://github.com/ggml-org/llama.cpp/issues/29878) Misc. bug: blank log lines in router mode
- [#25518](https://github.com/ggml-org/llama.cpp/issues/25518) Eval bug: Garbage output for model Qwen2.5-0.5B-Instruct-GGUF when -ngl > 0
- [#25437](https://github.com/ggml-org/llama.cpp/issues/25437) prompt_clear() doesn't free checkpoints
- [#27201](https://github.com/ggml-org/llama.cpp/issues/27201) Misc. bug: Quantization suffix in -hf-repo does not work as expected
- [#27456](https://github.com/ggml-org/llama.cpp/issues/27456) llama-server (router mode) crashes with 0xC0000409 when request hits busy slot during long xhigh generation
- [#29847](https://github.com/ggml-org/llama.cpp/issues/29847) Eval bug: CUDA MoE MMQ illegal memory access at ubatch 512 (src1 padding uses ne11 instead of gathered columns)
- [#27436](https://github.com/ggml-org/llama.cpp/issues/27436) Metrics gauges prompt_tokens_seconds / predicted_tokens_seconds are almost always 0, making live dashboards unusable
- [#27460](https://github.com/ggml-org/llama.cpp/issues/27460) Eval bug: draft-mtp (self-speculative) models crash on Vulkan/RADV after Linux kernel bump 7.1.3 → 7.1.7 — same class as #24492, different GPU/model
- [#27180](https://github.com/ggml-org/llama.cpp/issues/27180) ggml-openvino: frontend compiled-model cache import loads but cannot compute — exported port names embed pointer-derived hash suffix (map::at on first inference)
- [#27481](https://github.com/ggml-org/llama.cpp/issues/27481) server: DELETE resumable stream can abort child or fail to cancel before first token
- [#29229](https://github.com/ggml-org/llama.cpp/issues/29229) ggml-sycl : remove the dpct (SYCLomatic) emulation layer, switch to out-of-order queues with native sycl::event dependencies
- [#27425](https://github.com/ggml-org/llama.cpp/issues/27425) Feature Request: Autotune tool to determine best configuration for op offload min batch size
- [#27427](https://github.com/ggml-org/llama.cpp/issues/27427) Eval bug: A ~50 KB request causes a crash on llama-server, exit 139, OOMKilled=false, restart count 0 -> 1
- [#27431](https://github.com/ggml-org/llama.cpp/issues/27431) Eval bug: llama-cli and llama-server both crash when running unsloth/Qwen3.8-27B-UD-Q4_K_M.gguf on Vulkan (AMD R9700) on Windows
- [#27439](https://github.com/ggml-org/llama.cpp/issues/27439) Misc. bug: llama_state_seq_set_data_ext: invalid ON_DEVICE state can throw across the C API or abort
- [#27445](https://github.com/ggml-org/llama.cpp/issues/27445) qwen35 embedding models: llama_get_embeddings_seq returns NULL → fallback to ith limited to 512 tokens
- [#27463](https://github.com/ggml-org/llama.cpp/issues/27463) cant force stop localhost:8080 (llama-ui) no matter what i try

### Ollama (`ollama/ollama`)

**Stars:** 182,204 · **Open issues:** 4,167 · **Last push:** 2h ago

On October 5, 2026, there were no new releases for Ollama, but significant progress was made with the merging of pull requests. Notably, PR #18790 allows Release Candidates (RCs) to pull matching min_version, enhancing version management. Additionally, PR #18779 aligns the publisher tokenizer semantics in the MLX module for more consistent output. Among new issues, #18785 raises a concern regarding the "python" token decoding, which omits text without a leading space, potentially leading to silent errors in outputs. Another issue, #18788, highlights a connectivity problem with ChatGPT Desktop integration, where native OpenAI models repeatedly reconnect when Ollama stops.

#### ✅ Merged PRs
- [#18790](https://github.com/ollama/ollama/pull/18790) pull: allow RCs to pull matching min_version
- [#18779](https://github.com/ollama/ollama/pull/18779) mlx: match publisher tokenizer semantics

#### 🐛 New Issues
- [#18785](https://github.com/ollama/ollama/issues/18785) lfm2:24b: "python" token without a leading space is decoded as an empty string (text silently missing from output) `bug` 💬1
- [#18784](https://github.com/ollama/ollama/issues/18784) add cli mode for decision models `feature request` 💬1
- [#18791](https://github.com/ollama/ollama/issues/18791) Ollama home page issue `bug`
- [#18789](https://github.com/ollama/ollama/issues/18789) mlx: per-layer quantization overrides ignored on import — model fails to load with quantized_matmul shape mismatch
- [#18788](https://github.com/ollama/ollama/issues/18788) ChatGPT Desktop integration: native OpenAI models keep reconnecting when Ollama stops

#### 🔒 Closed Issues
- [#4684](https://github.com/ollama/ollama/issues/4684) Model download finally fails behind company firewall
- [#16049](https://github.com/ollama/ollama/issues/16049) generate completion API hangs with certain models but not with others
- [#18672](https://github.com/ollama/ollama/issues/18672) Intel UHD 0x4626 not detected by Vulkan backend on Windows — Ollama 0.34.4
- [#18791](https://github.com/ollama/ollama/issues/18791) Ollama home page issue

### LiteLLM (`BerriAI/litellm`)

**Stars:** 60,132 · **Open issues:** 5,171 · **Last push:** <1h ago

On October 5, 2026, LiteLLM released version v1.105.0-rc.1, which now includes Docker images that are digitally signed for enhanced security. Significant merged changes involved improved functionality and fixes, including synchronization of prices in the cost-map (#44533), enhancements to the dashboard API routing (#44528), and addressing various CI issues with test reliability (#44529). The user interface also saw updates, specifically the sharing of components between Lens traces and logs (#44513) and a more streamlined Lens settings tab (#44479). Notably, a new bug was reported regarding an HTTP 500 error when utilizing A2A 1.0-only upstream agents, which highlights potential issues in task management (#44531).

#### 🚀 New Releases
- [v1.105.0-rc.1](https://github.com/BerriAI/litellm/releases/tag/v1.105.0-rc.1) v1.105.0-rc.1

#### ✅ Merged PRs
- [#44533](https://github.com/BerriAI/litellm/pull/44533) chore(cost-map): sync openrouter prices from the models API
- [#44528](https://github.com/BerriAI/litellm/pull/44528) fix(dashboard): route dev API calls on Accept and fail fast on non-JSON 2xx
- [#44529](https://github.com/BerriAI/litellm/pull/44529) fix(ci): repair the security sweep and Lens billing integration tests for ROI, JWKS, and release identity changes
- [#44526](https://github.com/BerriAI/litellm/pull/44526) fix(azure): set gpt-realtime-2.1 retirement dates from the retirement schedule
- [#44525](https://github.com/BerriAI/litellm/pull/44525) fix(ci): send the Lens preview body as selection in the tracing endpoint tests
- [#44422](https://github.com/BerriAI/litellm/pull/44422) refactor(lens): storage-independent trace reads, shared keyset pager, typed read failures
- [#44513](https://github.com/BerriAI/litellm/pull/44513) refactor(ui): share CopyButton between Lens traces and logs
- [#44505](https://github.com/BerriAI/litellm/pull/44505) refactor(ui): rename view_logs to logs and split request, audit and detail
- [#44501](https://github.com/BerriAI/litellm/pull/44501) refactor(ui): move TraceView into components/lens/traces
- [#44499](https://github.com/BerriAI/litellm/pull/44499) test(ci): pin the ROI estimator flag and the prompt-cache counter in two drifted tests
- [#44494](https://github.com/BerriAI/litellm/pull/44494) test(mcp): keep the SSO assertion round trip from matching its refresh token inside random ciphertext
- [#44485](https://github.com/BerriAI/litellm/pull/44485) fix(otel): read the registered v2 logger without importing the proxy
- [#44488](https://github.com/BerriAI/litellm/pull/44488) fix(otel): repair Arize OTel v2 regressions from #43698 (linear fit, metadata slot, repr tool args)
- [#44486](https://github.com/BerriAI/litellm/pull/44486) fix(batches): skip batch line-item events in ClickHouse spend sink and router quota counters
- [#44484](https://github.com/BerriAI/litellm/pull/44484) refactor: clean up fresh tech debt from 2026-10-03
- [#41162](https://github.com/BerriAI/litellm/pull/41162) feat(mcp): hand listed-tool description and input schema to pre-call hooks per caller
- [#44479](https://github.com/BerriAI/litellm/pull/44479) feat(ui): inline Lens settings tab and investigation editor
- [#44202](https://github.com/BerriAI/litellm/pull/44202) fix(proxy-extras): log v1 migration failures at ERROR so LITELLM_LOG=ERROR shows them
- [#44429](https://github.com/BerriAI/litellm/pull/44429) test(ci): fix six CircleCI test regressions on main
- [#44381](https://github.com/BerriAI/litellm/pull/44381) feat(sdk): add run_tool_loop and arun_tool_loop helpers
- [#44475](https://github.com/BerriAI/litellm/pull/44475) feat(lens): guide setup through the first investigation
- [#44476](https://github.com/BerriAI/litellm/pull/44476) fix(lens): align source setup with available worker images
- [#44473](https://github.com/BerriAI/litellm/pull/44473) feat(ui): share trace drawer as a closable SidePanel and polish Lens

#### 🐛 New Issues
- [#44531](https://github.com/BerriAI/litellm/issues/44531) [Bug]: GetTask to A2A 1.0-only upstream agents is downgraded to 0.3 and fails with HTTP 500 💬1
- [#44527](https://github.com/BerriAI/litellm/issues/44527) complexity_router heuristic_v2: reasoning_override_min_score=0 does not promote to REASONING despite 2+ exact keyword matches `llm translation` 💬1
- [#44520](https://github.com/BerriAI/litellm/issues/44520) [Feature]: langfuse_otel should include reasoning_content / thinking_blocks in the observation output `llm translation` 💬1
- [#44504](https://github.com/BerriAI/litellm/issues/44504) [Bug]: Per-request message redaction does not reach the raw_gen_ai_request OTel span 💬1
- [#44503](https://github.com/BerriAI/litellm/issues/44503) [Bug]: `no-log: true` skips the proxy's own spend tracking (_ProxyDBLogger) on successful requests 💬1
- [#44516](https://github.com/BerriAI/litellm/issues/44516) [Feature]: ECS (Elastic Common Schema) log output via LITELLM_ECS_LOGS
- [#44535](https://github.com/BerriAI/litellm/issues/44535) [Bug]: Anthropic response without a usage object leads to a retry and HTTP 500 on /chat/completions `bug` `llm translation`
- [#44519](https://github.com/BerriAI/litellm/issues/44519) probe-write-access
- [#44517](https://github.com/BerriAI/litellm/issues/44517) [Bug]: UI breaks after any proxy restart when SERVER_ROOT_PATH ends in /litellm (/foo/foo/litellm/.well-known/litellm-ui-config 404)
- [#44510](https://github.com/BerriAI/litellm/issues/44510) docs: contributing link in terraform/provider/README.md points at a non-existent path
- [#44509](https://github.com/BerriAI/litellm/issues/44509) docs: contributing link in litellm/proxy/client/README.md points at a non-existent path
- [#44500](https://github.com/BerriAI/litellm/issues/44500) [Bug]: Chat→Responses bridge double-logs non-streaming requests whose messages reach 256 KiB of text (race in async success dedup), double-charging key/team budgets since v1.102.0 `llm translation`
- [#44496](https://github.com/BerriAI/litellm/issues/44496) [Bug]: RouterRateLimitError in litellm/router.py `bug` `llm translation`
- [#44495](https://github.com/BerriAI/litellm/issues/44495) [Feature]: `enhancement`

#### 🔒 Closed Issues
- [#25738](https://github.com/BerriAI/litellm/issues/25738) WebRTC (gpt-realtime) cost tracking not working in LiteLLM v1.82.3
- [#24709](https://github.com/BerriAI/litellm/issues/24709) MCP: health check skipped for OAuth2 M2M servers — always shows 'unknown'
- [#44197](https://github.com/BerriAI/litellm/issues/44197) [Bug]: ChatOpenAI + LiteLLM not forwarding thinking parameter to Anthropic Models
- [#26151](https://github.com/BerriAI/litellm/issues/26151) [Bug]: Secret Manager Not called during Invoke in 1.83.7-latest-stable
- [#30515](https://github.com/BerriAI/litellm/issues/30515) [Bug]: Mistral exception. InvalidFunctionCallException
- [#30918](https://github.com/BerriAI/litellm/issues/30918) [Feature]: Native Eco-Score & Capital Expenditure (CapEx) Hardware Amortization Tracker per Token
- [#31310](https://github.com/BerriAI/litellm/issues/31310) [Feature]: Stable public ID for rotating virtual keys
- [#31343](https://github.com/BerriAI/litellm/issues/31343) [Bug]: Falling back to OpenAI models from Gemini fails
- [#31569](https://github.com/BerriAI/litellm/issues/31569) [Bug]: WebSearch Interception emits web_search_tool_result with non-srvtoolu_ tool_use_id → multi-turn 400 on Bedrock Claude
- [#31408](https://github.com/BerriAI/litellm/issues/31408) Add "dashscope/deepseek-v4-pro", "dashscope/deepseek-v4-flash" and "dashscope/deepseek-v3.2" in "model_prices_and_context_window.json"
- [#31594](https://github.com/BerriAI/litellm/issues/31594) [Bug]: cost_breakdown missing cache_read_cost/cache_creation_cost for DeepSeek / OpenAI-compatible
- [#31609](https://github.com/BerriAI/litellm/issues/31609) MCP egress: tool listing drops the caller subject token, so ID-JAG / token_exchange OBO servers list no tools
- [#31616](https://github.com/BerriAI/litellm/issues/31616) 211
- [#31619](https://github.com/BerriAI/litellm/issues/31619) [Bug]: LangGraph streaming leaks the httpx connection — LangGraphSSEStreamIterator has no close()/aclose()
- [#31643](https://github.com/BerriAI/litellm/issues/31643) feat(mcp): support wildcard/prefix matching in extra_headers for MCP servers
- [#44519](https://github.com/BerriAI/litellm/issues/44519) probe-write-access

### Unsloth (`unslothai/unsloth`)

**Stars:** 77,205 · **Open issues:** 1,062 · **Last push:** <1h ago

On October 5, 2026, there were no new releases for Unsloth, but a significant number of pull requests were merged, enhancing the Studio with features such as splitting the Audio workspace into Speak, Music, and Transcribe modes, as well as adding a Convert audio page for voice comparison. Further improvements included the addition of timestamps to the Transcribe page and the introduction of a Music studio with multiple editing modes. Notably, a new bug was reported regarding Vulkan GGUF inference failing with an "OutOfDeviceMemory" error on the Radeon 780M, drawing attention to potential memory management issues within the system. Overall, while there were no major releases, the enhancements in the Studio indicate continued progress in feature development.

#### ✅ Merged PRs
- [#12704](https://github.com/unslothai/unsloth/pull/12704) Bump Desktop crates, Docker JupyterLab, setuptools and CI pins for advisories
- [#12600](https://github.com/unslothai/unsloth/pull/12600) Studio: split Audio into Speak, Music and Transcribe workspaces
- [#12611](https://github.com/unslothai/unsloth/pull/12611) Studio: add a Convert audio page for voice conversion with A/B compare
- [#12610](https://github.com/unslothai/unsloth/pull/12610) Studio: add the Separate audio workflow with a synced stem mixer
- [#12609](https://github.com/unslothai/unsloth/pull/12609) Studio: add the Music studio with song, sound effect and edit modes
- [#12607](https://github.com/unslothai/unsloth/pull/12607) Studio: add timestamps, speakers and exports to the Transcribe page
- [#12606](https://github.com/unslothai/unsloth/pull/12606) Studio: add the Edit speech page
- [#12602](https://github.com/unslothai/unsloth/pull/12602) Studio: add the Clone page, audio inputs and saved voices
- [#12700](https://github.com/unslothai/unsloth/pull/12700) MLX inference test stub: accept any arguments a zoo helper is called with
- [#12458](https://github.com/unslothai/unsloth/pull/12458) Keep embedding optimizer state 32-bit when embedding_learning_rate is set
- [#12681](https://github.com/unslothai/unsloth/pull/12681) Studio: bf16 Wan VAE decode on ROCm (gfx11 / gfx12)
- [#12683](https://github.com/unslothai/unsloth/pull/12683) Studio: async block prefetch for MiniMax-H3's streamed denoiser
- [#11832](https://github.com/unslothai/unsloth/pull/11832) Block Swap: Stream frozen transformer blocks from host RAM so a dense model can train past the card's VRAM
- [#12677](https://github.com/unslothai/unsloth/pull/12677) Studio: fused int8 GEMM for block-streamed image denoisers
- [#12674](https://github.com/unslothai/unsloth/pull/12674) Studio: deterministic FLUX.1, Z-Image and Qwen-Image renders on sm80, sm89 and sm120
- [#10394](https://github.com/unslothai/unsloth/pull/10394) docs(save): correct save_method values in docstrings (16bit/4bit -> merged_16bit/merged_4bit)
- [#12460](https://github.com/unslothai/unsloth/pull/12460) fix(studio): discover On Device GGUFs from disk before Hub
- [#12676](https://github.com/unslothai/unsloth/pull/12676) Studio: run fp16 on ROCm GPUs without native bf16 (RDNA2 and older, Vega)
- [#12538](https://github.com/unslothai/unsloth/pull/12538) Studio: deterministically load explicitly mentioned skills before generation
- [#12652](https://github.com/unslothai/unsloth/pull/12652) Studio: per-model automatic step skip at each model's measured step count (1.44 to 1.81x, MiniMax-H3 on max)
- [#12535](https://github.com/unslothai/unsloth/pull/12535) [XPU] Enable FP8 training on XPU
- [#12672](https://github.com/unslothai/unsloth/pull/12672) Studio: channels_last for 3D-conv VAEs and untiled A14B decode
- [#12685](https://github.com/unslothai/unsloth/pull/12685) Studio projects: folder-plus icon for sources
- [#12667](https://github.com/unslothai/unsloth/pull/12667) Studio: honour an explicit flash attention request on ROCm (gfx1151 8 to 12% faster per step)
- [#12675](https://github.com/unslothai/unsloth/pull/12675) Studio: do not reserve the OS share twice on Linux ROCm APUs
- [#12666](https://github.com/unslothai/unsloth/pull/12666) Studio: faster first start for image loads (VAE kernel prebuild, early quant probe, one FLUX.1 single-block graph)
- [#12642](https://github.com/unslothai/unsloth/pull/12642) Apply the DoRA magnitude in fast_linear_forward
- [#12662](https://github.com/unslothai/unsloth/pull/12662) Studio: give the MiniMax-H3 sd.cpp engine a CUDA-12 cuDNN for fused attention on sm80+ Linux
- [#12645](https://github.com/unslothai/unsloth/pull/12645) Studio: read pre-quantized diffusion checkpoints from safetensors on torchao 0.17, 0.18 and main
- [#12682](https://github.com/unslothai/unsloth/pull/12682) Installers: resolve studio from the venv, never from the caller's directory
- [#12558](https://github.com/unslothai/unsloth/pull/12558) fix: preserve activation QAT in LoRA MLPs
- [#12670](https://github.com/unslothai/unsloth/pull/12670) Studio (AMD, Windows): pin the multi-arch ROCm torch to rocm7.14.0, whose fused attention works
- [#12450](https://github.com/unslothai/unsloth/pull/12450) Studio: clarify image preview loading and retry failed downloads
- [#12679](https://github.com/unslothai/unsloth/pull/12679) Studio frontend: bump hono, ip-address, qs, dompurify and @babel/core for security advisories
- [#12668](https://github.com/unslothai/unsloth/pull/12668) Studio: set the ROCm AOTriton opt-in from the inference package so every entry point gets fused attention
- [#12651](https://github.com/unslothai/unsloth/pull/12651) Studio: pin inductor's reduction configs for LTX-2 compiles so renders match across servers
- [#12660](https://github.com/unslothai/unsloth/pull/12660) Harden npm and yarn installs against supply-chain attacks
- [#12664](https://github.com/unslothai/unsloth/pull/12664) Studio: stream offloaded denoiser blocks without host waits (B200 FLUX.1 16 GB 0.59x, L4 0.90x per step)
- [#12649](https://github.com/unslothai/unsloth/pull/12649) Studio: load the hosted FP8 checkpoints for FLUX.1-dev, FLUX.2-klein-4B, FLUX.2-dev and Qwen-Image-2512, and seed Krea 2
- [#12654](https://github.com/unslothai/unsloth/pull/12654) Studio: SageAttention 2 from the kernels hub, and FlashAttention 4 dependencies that load on a fresh install
- [#12641](https://github.com/unslothai/unsloth/pull/12641) Studio: never fail, slow down or render noise on an explicit SageAttention or FlashAttention 4 request
- [#12549](https://github.com/unslothai/unsloth/pull/12549) Unsloth Studio: managed accounts keep their model settings and pins across an account switch
- [#12669](https://github.com/unslothai/unsloth/pull/12669) Studio: skip the unused Qwen-Image-2.1 text-encoder lm_head (0.6 to 1.3 GiB less VRAM, bit-identical images)
- [#12665](https://github.com/unslothai/unsloth/pull/12665) Studio: stop the Windows event loop spinning when its self-pipe is closed
- [#12661](https://github.com/unslothai/unsloth/pull/12661) Studio: keep managed accounts off owner files and device nodes
- [#12648](https://github.com/unslothai/unsloth/pull/12648) Studio: encode video mp4 with x264 frame threads (export 1.25 to 2.5x faster, same settings)
- [#12659](https://github.com/unslothai/unsloth/pull/12659) Studio: gate repo-hosted embedder modules, MLX model_file, and _socket
- [#12656](https://github.com/unslothai/unsloth/pull/12656) Studio: bump PyJWT, urllib3, Pillow and frontend overrides for security advisories
- [#12658](https://github.com/unslothai/unsloth/pull/12658) Guard against transformers config and chat template CVEs on older versions
- [#12657](https://github.com/unslothai/unsloth/pull/12657) Harden torch.export .pt2 loading against CVE-2026-4538
- [#12653](https://github.com/unslothai/unsloth/pull/12653) Follow the multi-model refactor in two guards that went red on main

#### 🐛 New Issues
- [#12708](https://github.com/unslothai/unsloth/issues/12708) [Bug] Think Toggle Fails to Suppress Internal Reasoning for gemma-4-E4B-it-qat-GGUF · UD-Q4_K_XL (Only Thought Process is Outputted) `feature request` `bug`
- [#12695](https://github.com/unslothai/unsloth/issues/12695) [Unsloth Bug] Vulkan GGUF inference fails with ErrorOutOfDeviceMemory on Radeon 780M `feature request` `bug`
- [#12680](https://github.com/unslothai/unsloth/issues/12680) [Bug] Release Package for ARM64 is MacOs build not Linux as intended from the download links on website `feature request` `bug`
- [#12678](https://github.com/unslothai/unsloth/issues/12678) [Bug] Starting unsloth desktop clears bash history `feature request` `bug`
- [#12673](https://github.com/unslothai/unsloth/issues/12673) Chat context bar never populates for llama.cpp/custom connections `feature request` `bug`

#### 🔒 Closed Issues
- [#12415](https://github.com/unslothai/unsloth/issues/12415) [Bug] Desktop: Hugging Face quant discovery blocks loading On Device models offline
- [#3997](https://github.com/unslothai/unsloth/issues/3997) [Feature] Transformer Block Swap
- [#8902](https://github.com/unslothai/unsloth/issues/8902) [Docs] Correct the root license map and unsloth_cli installation status

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,126 · **Open issues:** 383 · **Last push:** <1h ago

On October 5, 2026, there were no new releases for AIBrix, but several significant pull requests were merged, enhancing the platform's functionality and stability. Notable features include the addition of a Jev-compatible external router sample, improved token_load decode ledger sharing among gateway replicas, and the implementation of model management with the capability to wake sleeping models and relocate non-responsive ones. Bug fixes addressed issues related to handling non-responsive runtime with the ModelClaim controller and ensured cancellation integrity in acquired remote text tokenizers. A notable new issue was reported regarding external routing's lack of support for prefill and decode in disaggregated Pods, indicating an area that may require immediate attention.

#### ✅ Merged PRs
- [#2910](https://github.com/vllm-project/aibrix/pull/2910) [Feat][Docs] Add Jev-compatible external router sample
- [#2868](https://github.com/vllm-project/aibrix/pull/2868) [Feat] Share the token_load decode ledger across gateway replicas
- [#2903](https://github.com/vllm-project/aibrix/pull/2903) [Feat] Wake a sleeping model through the controller, and move one that cannot wake
- [#2818](https://github.com/vllm-project/aibrix/pull/2818) [Bug] Keep a runtime that does not answer from holding the ModelClaim controller
- [#2845](https://github.com/vllm-project/aibrix/pull/2845) [Feat] Route a new engine within seconds of being ready
- [#2844](https://github.com/vllm-project/aibrix/pull/2844) [Feat] Back off from claims that cannot be placed, and say when one can never fit
- [#2843](https://github.com/vllm-project/aibrix/pull/2843) [Feat] Divide a card's KV again as its engines and their load change
- [#2891](https://github.com/vllm-project/aibrix/pull/2891) [Bug] Respect cancellation in acquired remote text tokenizers
- [#2893](https://github.com/vllm-project/aibrix/pull/2893) [Bug] Use the full selector and owner check in RayClusterReplicaSet
- [#2890](https://github.com/vllm-project/aibrix/pull/2890) [API][Feat] Add custom actions to ModelWarmup
- [#2859](https://github.com/vllm-project/aibrix/pull/2859) [Gateway] Fail PD requests whose decode pod never starts responding
- [#2899](https://github.com/vllm-project/aibrix/pull/2899) [Bug] Validate ModelAdapter spec.podSelector in the webhook
- [#2908](https://github.com/vllm-project/aibrix/pull/2908) [CI] Skip code workflows for documentation-only changes

#### 🐛 New Issues
- [#2909](https://github.com/vllm-project/aibrix/issues/2909) External routing does not support prefill/decode disaggregated Pods `area/gateway` `kind/feature` 💬3
- [#2906](https://github.com/vllm-project/aibrix/issues/2906) [Bug] KV event replay never applies the replayed batches `kind/bug` `area/gateway` 💬1

#### 🔒 Closed Issues
- [#2795](https://github.com/vllm-project/aibrix/issues/2795) [Feature][ModelClaim] Divide a card's KV again as its engines and their load change
- [#2880](https://github.com/vllm-project/aibrix/issues/2880) [Feature][ModelClaim] Wake a sleeping model through the controller, and move one that cannot wake
- [#2807](https://github.com/vllm-project/aibrix/issues/2807) [Feature][ModelClaim] Route a new engine within seconds of being ready
- [#2806](https://github.com/vllm-project/aibrix/issues/2806) [Feature][ModelClaim] Back off from claims that cannot be placed, and say when one can never fit
- [#2902](https://github.com/vllm-project/aibrix/issues/2902) [Bug] 100% doc change triggers full CI pipeline
- [#1529](https://github.com/vllm-project/aibrix/issues/1529) [RFC]: inject model download init + ConfigMap config
- [#2892](https://github.com/vllm-project/aibrix/issues/2892) [Bug] RayClusterReplicaSet ignores matchExpressions and counts RayClusters it doesn't own
- [#2817](https://github.com/vllm-project/aibrix/issues/2817) [Bug][ModelClaim] One runtime that does not answer holds the controller for up to 60 seconds per read
- [#2898](https://github.com/vllm-project/aibrix/issues/2898) [Bug] ModelAdapter webhook does not validate spec.podSelector

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,030 · **Open issues:** 613 · **Last push:** <1h ago

On October 5, 2026, there were no new releases for Semantic Router. However, several important changes were merged, including a feature to report the first false step and context seen per trajectory step (#4248) and enhancements in error reporting, such as the backend failure reason on the Config page (#4459). Additionally, the router's caching mechanism was improved to account for cache-write tokens (#4495). Noteworthy new issues include #4556, which discusses the introduction of Vela 2.0 and its alignment with open foundation routing models. Overall, the day was characterized by significant bug fixes and feature enhancements.

#### ✅ Merged PRs
- [#4346](https://github.com/vllm-project/semantic-router/pull/4346) [Bug] Remove unused internal symbols and orphan IP tests
- [#4248](https://github.com/vllm-project/semantic-router/pull/4248) [Feature] Report first false step and context seen per trajectory step
- [#4495](https://github.com/vllm-project/semantic-router/pull/4495) [Bug] Account for router cache-write tokens in sr-bench
- [#4420](https://github.com/vllm-project/semantic-router/pull/4420) [CI/Build] Report e2e failure and retry rates from recent runs
- [#4497](https://github.com/vllm-project/semantic-router/pull/4497) [Feature] Add stage-2 distillation for KV mapper artifacts
- [#4459](https://github.com/vllm-project/semantic-router/pull/4459) [Bug] Report the backend failure reason when the Config page reads fail
- [#4531](https://github.com/vllm-project/semantic-router/pull/4531) [Feature] Return runtime meta only when a client asks for it
- [#4458](https://github.com/vllm-project/semantic-router/pull/4458) [Bug] Name the output-total omission beside a known reasoning count
- [#4494](https://github.com/vllm-project/semantic-router/pull/4494) [Docs] Use a shields.io badge for DeepWiki
- [#4493](https://github.com/vllm-project/semantic-router/pull/4493) [Bug] Avoid oversized decimal conversion in Python config loader
- [#4436](https://github.com/vllm-project/semantic-router/pull/4436) [Bug] Read nested memory and tool_selection plugin settings in the Router

#### 🐛 New Issues
- [#4556](https://github.com/vllm-project/semantic-router/issues/4556) [Blog] Vela 2.0: Towards Open Foundation Routing Models `accepted` `wg/router-models-inference-runtime` `documentation` 💬2
- [#4537](https://github.com/vllm-project/semantic-router/issues/4537) [Feature] Close the runtime lifecycle and release gaps carried from #4472 `enhancement` `accepted` `wg/router-models-inference-runtime` 💬2
- [#4554](https://github.com/vllm-project/semantic-router/issues/4554) [Feature] Add batch combined classification for intent, PII and security `needs-acceptance` 💬1
- [#4543](https://github.com/vllm-project/semantic-router/issues/4543) [Bug] Fast-response and cache-hit Responses use IDs derived from x-request-id `bug` `accepted` `in-progress` `wg/data-plane-networking` 💬1
- [#4555](https://github.com/vllm-project/semantic-router/issues/4555) [Bug] Chat response decoding puts vLLM reasoning after the answer, so streamed Messages fail mid-reply `bug` `needs-acceptance` `wg/data-plane-networking`
- [#4553](https://github.com/vllm-project/semantic-router/issues/4553) [Feature] Add batch combined classification for intent, PII and security
- [#4552](https://github.com/vllm-project/semantic-router/issues/4552) [Feature] Add batch combined classification for intent, PII and security
- [#4548](https://github.com/vllm-project/semantic-router/issues/4548) [Bug] Re-running install with a different runtime silently discards the persisted runtime preference `bug` `needs-acceptance` `wg/developer-experience-ecosystem`
- [#4547](https://github.com/vllm-project/semantic-router/issues/4547) [Bug] Looper construction failures leak the internal error chain to the client `bug` `needs-acceptance` `wg/data-plane-networking`
- [#4545](https://github.com/vllm-project/semantic-router/issues/4545) [Bug] Dashboard serves `listeners[].api_keys` in plaintext to the `read` role `bug` `accepted` `in-progress` `wg/enterprise-environment`

#### 🔒 Closed Issues
- [#4306](https://github.com/vllm-project/semantic-router/issues/4306) [Research] One fine-tuned Decision model vs per-signal encoders on the same data
- [#4384](https://github.com/vllm-project/semantic-router/issues/4384) [Bug] Anthropic usage projection silently zero-fills an absent output total
- [#3662](https://github.com/vllm-project/semantic-router/issues/3662) [Feature] Plan trainer, architecture, hardware, and runtime capabilities
- [#4206](https://github.com/vllm-project/semantic-router/issues/4206) [Feature] Measure streamed body arrival before adding incremental preprocessing
- [#4229](https://github.com/vllm-project/semantic-router/issues/4229) [Bug] `hybrid_mode: rerank` and `algorithm: recency_semantic` in the reference config don't exist, and memory runs the defaults
- [#3554](https://github.com/vllm-project/semantic-router/issues/3554) [CI] Add retry and flaky-test handling for network-bound jobs
- [#4434](https://github.com/vllm-project/semantic-router/issues/4434) [Bug] Memory and tool_selection plugin settings are dropped by the DSL compiler and partly ignored by the router
- [#4476](https://github.com/vllm-project/semantic-router/issues/4476) [Docs] Use shields.io badge for a stable documentation badge image
- [#4247](https://github.com/vllm-project/semantic-router/issues/4247) [Feature] Report first false step and context seen in the trajectory bench
- [#4453](https://github.com/vllm-project/semantic-router/issues/4453) [Bug] Config page drops the backend failure reason when reads fail
- [#4305](https://github.com/vllm-project/semantic-router/issues/4305) [Research] Corpus-matched train and test data for the router signal classifiers
- [#4553](https://github.com/vllm-project/semantic-router/issues/4553) [Feature] Add batch combined classification for intent, PII and security
- [#4552](https://github.com/vllm-project/semantic-router/issues/4552) [Feature] Add batch combined classification for intent, PII and security

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*