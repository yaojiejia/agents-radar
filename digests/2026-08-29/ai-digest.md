# 📡 AI Ecosystem Digest — 2026-08-29

> Generated 2026-08-29 04:02 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 143,318 | 20 | 0 | 0 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 119,607 | 20 | 5 | 45 | 6 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 106,735 | 0 | 0 | 1 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,122 | 11 | 2 | 1 | 1 |
| [OpenCode](https://github.com/anomalyco/opencode) | 202,234 | 11 | 42 | 16 | 2 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 27,466 | 36 | 8 | 0 | 3 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 387,942 | 59 | 44 | 156 | 1 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 237,795 | 30 | 5 | 2 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 90,354 | 34 | 55 | 39 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 32,641 | 26 | 24 | 75 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 126,129 | 26 | 10 | 15 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 179,673 | 12 | 4 | 0 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 57,505 | 18 | 14 | 55 | 1 |
| [Unsloth](https://github.com/unslothai/unsloth) | 75,083 | 16 | 13 | 24 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,043 | 1 | 0 | 0 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 5,390 | 5 | 7 | 5 | 0 |

---

## ✨ Highlights

- **Claude Code** released version [v2.1.251](https://github.com/anthropics/claude-code/releases/tag/v2.1.251), addressing various bugs in the desktop application.  
- **OpenAI Codex** introduced multiple releases including [rust-v0.151.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.12) and merged key PRs such as [#41464](https://github.com/openai/codex/pull/41464) to preserve permissions in session metadata.  
- **Gemini CLI** made its release with [v0.59.0-nightly.20260829.g0bd1d4397](https://github.com/google-gemini/gemini-cli/releases/tag/v0.59.0-nightly.20260829.g0bd1d4397), enhancing core functionalities.  
- A critical new issue in **vLLM** has gained traction, reporting a bug where an [installed-but-unusable dependency](https://github.com/vllm-project/vllm/issues/54153) prevents model architecture resolution, garnering 7 comments.  
- **Hermes Agent** is facing issues with a new report about a [cron warning](https://github.com/NousResearch/hermes-agent/issues/97120) that leads to service crash loops, accumulating 4 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 143,318 · **Open issues:** 15,348 · **Last push:** 9h ago

On August 29, 2026, Claude Code released version 2.1.251, which introduced significant enhancements such as the `PreModelSwitch` and `PostModelSwitch` hook events for better model switch management, and the ability for Remote Control clients to stream a foreground subagent's tool calls and results live. Notably, new session resume hooks now provide session staleness and estimated re-cache cost details. Although there were no merged pull requests, several critical issues were reported, including a hard crash of the Claude Desktop app on Windows 11 related to the browser/preview pane, designated as #90478. Other emerging bugs pertain to permission requests being ignored in certain contexts, and a resource leak in the Windows version that blocks application relaunch.

#### 🚀 New Releases
- [v2.1.251](https://github.com/anthropics/claude-code/releases/tag/v2.1.251) v2.1.251

#### 🐛 New Issues
- [#90478](https://github.com/anthropics/claude-code/issues/90478) Browser/preview pane hard-crashes the entire Claude Desktop app on Windows 11 — conhost.exe AppHang, hang type `Quiesce` (correlates with KB5120998) `bug` `has repro` `platform:windows` `area:desktop` 💬1
- [#90361](https://github.com/anthropics/claude-code/issues/90361) [BUG] `invalid` 💬1
- [#90498](https://github.com/anthropics/claude-code/issues/90498) [BUG] PermissionRequest hook allow is silently ignored for ExitPlanMode unless updatedInput is provided (2.1.246) `duplicate` `platform:macos` `area:hooks`
- [#90497](https://github.com/anthropics/claude-code/issues/90497) MCP OAuth client does not send RFC 8707 `resource` (2.1.251) — strict MCP servers reject the token (401) `bug` `has repro` `area:auth` `area:mcp`
- [#90376](https://github.com/anthropics/claude-code/issues/90376) [BUG] Inscrutable copy shown in the UI `bug` `platform:macos` `area:tui` `user-experience`
- [#90496](https://github.com/anthropics/claude-code/issues/90496) [BUG] Task list panel does not repaint on returning to a session; still present in 2.1.251 (re-report of #50656) `bug` `has repro` `platform:macos` `area:tui`
- [#90494](https://github.com/anthropics/claude-code/issues/90494) MCP server that starts after Claude Code is never connected — no retry, and /mcp reconnect fails with "No token data found" `bug` `has repro` `platform:macos` `area:mcp`
- [#90495](https://github.com/anthropics/claude-code/issues/90495) Windows: exec-form hook args dropped, still routed through bash.exe, causing eval_stdin crash `bug` `has repro` `platform:windows` `area:hooks`
- [#90493](https://github.com/anthropics/claude-code/issues/90493) Claude desktop (Windows) leaks resources (RADAR_PRE_LEAK_64) and blocks relaunch until reboot `invalid`
- [#90492](https://github.com/anthropics/claude-code/issues/90492) [BUG] Navigating between subagent views is deeply busted `bug` `has repro` `platform:macos` `area:tui`
- [#90491](https://github.com/anthropics/claude-code/issues/90491) [FEATURE] Cowork scheduled tasks: per-routine connector scoping to cut cold-start cost `enhancement` `area:cowork` `platform:web` `area:routines`
- [#90490](https://github.com/anthropics/claude-code/issues/90490) [BUG] Remote Control session: background Bash tasks killed ~5-7 min after launch while CLI host in tmux stays alive `bug` `platform:linux` `area:bash`
- [#90489](https://github.com/anthropics/claude-code/issues/90489) [Bug] Claude Code fabricates user responses in auto mode without user confirmation `bug` `platform:macos` `area:model`
- [#90488](https://github.com/anthropics/claude-code/issues/90488) Message sent before session start silently disappears, no response (Claude Code Remote Control via Android app) — recurring, ~10 occurrences `bug` `has repro` `platform:android`
- [#90487](https://github.com/anthropics/claude-code/issues/90487) [MODEL] Claude self-assigns unrequested full test-suite runs, then block-polls the background task instead of awaiting its completion notification `bug` `area:cost` `area:tools` `area:model`
- [#90486](https://github.com/anthropics/claude-code/issues/90486) [FEATURE] Native OS file-picker dialog to attach files from the terminal (/attach) - like Claude Desktop's upload button `enhancement` `platform:windows` `area:tui`
- [#90484](https://github.com/anthropics/claude-code/issues/90484) [Bug] Claude generates incomplete REVOKE statements for SECURITY DEFINER functions, leaving PUBLIC grants intact `bug` `platform:macos` `area:model`
- [#90485](https://github.com/anthropics/claude-code/issues/90485) Scheduled tasks dispatch ahead of their configured fire time (3 confirmed instances) `bug` `platform:macos` `area:routines`
- [#90483](https://github.com/anthropics/claude-code/issues/90483) Workflow concurrency derives from CPU count, throttling I/O-bound fan-out to 2 agents in a cloud container (2 vCPUs observed vs 4 documented) `enhancement` `area:agents` `area:cowork`
- [#90482](https://github.com/anthropics/claude-code/issues/90482) Native binary 2.1.242 segfaults deterministically on startup (linux-surface kernel, x86_64) — 2.1.239-2.1.241 work fine `bug` `duplicate` `has repro` `platform:linux`

### OpenAI Codex (`openai/codex`)

**Stars:** 119,607 · **Open issues:** 14,298 · **Last push:** <1h ago

On August 29, 2026, the Rust library saw multiple releases, with notable versions including rust-v0.151.0-alpha.12 and rust-v0.151.0-alpha.11, focusing on various enhancements and fixes. Among the significant merged pull requests, the preservation of permissions when updating session metadata and sourcing proactive multi-agent instructions from the model catalog were key improvements aimed at enhancing user interaction and system reliability. Additionally, new issues emerged, with #41450 highlighting a concerning reproducible token amplification bug in Code Mode, which drastically reduced cumulative input efficiency. Overall, the day included both important version updates and critical maintenance for the ongoing development of OpenAI Codex.

#### 🚀 New Releases
- [rust-v0.151.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.12) 0.151.0-alpha.12
- [rust-v0.151.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.9) 0.151.0-alpha.9
- [rust-v0.151.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.8) 0.151.0-alpha.8
- [rust-v0.151.0-alpha.7.1](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.7.1) 0.151.0-alpha.7.1
- [rust-v0.151.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.11) 0.151.0-alpha.11
- [rust-v0.151.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.10) 0.151.0-alpha.10

#### ✅ Merged PRs
- [#41464](https://github.com/openai/codex/pull/41464) Preserve permissions when updating session metadata
- [#41461](https://github.com/openai/codex/pull/41461) Source async user message descriptions from the model catalog
- [#41457](https://github.com/openai/codex/pull/41457) Source proactive multi-agent instructions from the model catalog
- [#41456](https://github.com/openai/codex/pull/41456) Support app targets in executor plugin hooks
- [#41454](https://github.com/openai/codex/pull/41454) Block goals after repeated execution host failures
- [#41452](https://github.com/openai/codex/pull/41452) Report code mode host request durations
- [#41449](https://github.com/openai/codex/pull/41449) Rename the read-only Seatbelt platform defaults policy
- [#41448](https://github.com/openai/codex/pull/41448) Clarify question handling in Default collaboration mode
- [#41447](https://github.com/openai/codex/pull/41447) Support `openai/elicitation` form requests
- [#41436](https://github.com/openai/codex/pull/41436) Respond to terminal queries from TTY subprocesses
- [#41435](https://github.com/openai/codex/pull/41435) Allow bundled browser cleanup hooks on subagent stop
- [#41432](https://github.com/openai/codex/pull/41432) Run executor hooks for interrupted turns
- [#41429](https://github.com/openai/codex/pull/41429) Retain the last selected step context for each turn
- [#41427](https://github.com/openai/codex/pull/41427) Filter media from function call output notifications
- [#41424](https://github.com/openai/codex/pull/41424) Preserve context baselines across nested agent forks
- [#41422](https://github.com/openai/codex/pull/41422) Add shared Guardian transcript collection
- [#41421](https://github.com/openai/codex/pull/41421) Support per-tool MCP output limits
- [#41416](https://github.com/openai/codex/pull/41416) Add app-server notification media filtering
- [#41413](https://github.com/openai/codex/pull/41413) Optimize history item lookups
- [#41403](https://github.com/openai/codex/pull/41403) Restrict cloud task credentials to trusted origins
- [#41400](https://github.com/openai/codex/pull/41400) Refresh MCP HTTP helper headers after authorization failures
- [#41396](https://github.com/openai/codex/pull/41396) Refresh runtimes for remote plugin state changes
- [#41393](https://github.com/openai/codex/pull/41393) Preserve one-shot exec when unified exec is disabled
- [#41392](https://github.com/openai/codex/pull/41392) Add shared Guardian context primitives
- [#41385](https://github.com/openai/codex/pull/41385) Give Guardian classifications distinct turn identities
- [#41384](https://github.com/openai/codex/pull/41384) Support configurable timeouts for thread shell commands
- [#41380](https://github.com/openai/codex/pull/41380) Clarify proactive multi-agent delegation guidance
- [#41375](https://github.com/openai/codex/pull/41375) Preload plugin recommendations during session startup
- [#41368](https://github.com/openai/codex/pull/41368) Match Windows shell guidance to the executor platform
- [#41365](https://github.com/openai/codex/pull/41365) Restrict async user messages to questions
- [#41364](https://github.com/openai/codex/pull/41364) Test resuming compressed shared rollouts
- [#41360](https://github.com/openai/codex/pull/41360) Measure Codex home usage at app-server startup
- [#41357](https://github.com/openai/codex/pull/41357) Support compression for shared rollout lineages
- [#41354](https://github.com/openai/codex/pull/41354) Reject NUL bytes in reviewed terminal input
- [#41349](https://github.com/openai/codex/pull/41349) Assign stable IDs to generated Responses input items
- [#41344](https://github.com/openai/codex/pull/41344) Use refreshed MCP tool caches during binding capture
- [#41336](https://github.com/openai/codex/pull/41336) Preserve cached MCP tools during binding capture
- [#41331](https://github.com/openai/codex/pull/41331) Classify clock tools as built-in control tools
- [#41328](https://github.com/openai/codex/pull/41328) Review terminal input against retained permissions
- [#41322](https://github.com/openai/codex/pull/41322) Isolate required-model Guardian approval coverage
- [#41313](https://github.com/openai/codex/pull/41313) Decouple HTTP retry backoff from overload integration testing
- [#41309](https://github.com/openai/codex/pull/41309) Honor required reviews when reusing Guardian scores
- [#41308](https://github.com/openai/codex/pull/41308) Make subagents follow the root service tier
- [#41292](https://github.com/openai/codex/pull/41292) Forward history note images to the model
- [#41285](https://github.com/openai/codex/pull/41285) Drive keymap conflict checks from the action registry

#### 🐛 New Issues
- [#41326](https://github.com/openai/codex/issues/41326) Computer Use helper SIGTRAPs on every click after get_app_state succeeds `bug` `app` `computer-use` 💬8
- [#41289](https://github.com/openai/codex/issues/41289) [Windows] App starts background processes but does not show a GUI window `bug` `windows-os` `app` 💬4
- [#41281](https://github.com/openai/codex/issues/41281) Windows desktop: official Computer Use plugin missing from plugin directory `bug` `windows-os` `app` `skills` 💬3
- [#41450](https://github.com/openai/codex/issues/41450) [Code Mode] Reproducible token amplification: one AGENTS.md rule cut cumulative input by 81.6% `bug` `windows-os` `tool-calls` `app` 💬3
- [#41327](https://github.com/openai/codex/issues/41327) Computer Use helper SIGTRAPs on every click after get_app_state succeeds `bug` `app` `computer-use` 💬3
- [#41356](https://github.com/openai/codex/issues/41356) Computer Use helper crashes on every click on macOS 27 `bug` `app` `computer-use` 💬3
- [#41369](https://github.com/openai/codex/issues/41369) Single Terra Medium task reprocessed 10.1M input tokens (98% cached) across 76 exec turns and consumed 33% of 5-hour quota `bug` `windows-os` `rate-limits` `CLI` 💬3
- [#41282](https://github.com/openai/codex/issues/41282) [macOS] thread/turns/list stops at an interrupted turn while later completed turns remain in rollout JSONL `bug` `app` `app-server` 💬2
- [#41463](https://github.com/openai/codex/issues/41463) [Windows + WSL] Cannot create projects – AbsolutePathBuf deserialized without a base path `bug` `windows-os` `app` `app-server` 💬1
- [#41462](https://github.com/openai/codex/issues/41462) [Desktop][Auto-review UX] Denial provides no human approval path and forces exact "magic sentence" authorization `enhancement` `windows-os` `sandbox` `app` 💬1
- [#41459](https://github.com/openai/codex/issues/41459) Banked usage reset was consumed but weekly allowance remained at 7% for hours `bug` `rate-limits` `app` 💬1
- [#41458](https://github.com/openai/codex/issues/41458) Chrome extension reads tabs but interactive control is unavailable `bug` `windows-os` `app` `computer-use` 💬1
- [#41455](https://github.com/openai/codex/issues/41455) Codex Desktop for Windows: long pasted-text attachment remains stuck `bug` `windows-os` `app` 💬1
- [#41451](https://github.com/openai/codex/issues/41451) [IDE Extension] Add plain-text modes for messages and the composer `enhancement` `extension` 💬1
- [#41446](https://github.com/openai/codex/issues/41446) [Windows][ChatGPT Desktop] Missing scroll-to-bottom control and viewport jumps leave large blank area `bug` `windows-os` `app` 💬1
- [#41445](https://github.com/openai/codex/issues/41445) Re-reading the same skills over and over again `bug` `CLI` `context` `skills` 💬1
- [#41444](https://github.com/openai/codex/issues/41444) [Windows][ChatGPT Desktop][Cloud Projects] Chats stay out of last-active order `bug` `windows-os` `app` `session` 💬1
- [#41465](https://github.com/openai/codex/issues/41465) Windows floating pet remains click-through and cannot be dragged
- [#41460](https://github.com/openai/codex/issues/41460) Crash when selecting a version `bug` `TUI` `CLI`
- [#41453](https://github.com/openai/codex/issues/41453) [Windows] Computer Use retains a rotated native-pipe UUID and never reconnects `bug` `windows-os` `extension` `connectivity`

#### 🔒 Closed Issues
- [#31868](https://github.com/openai/codex/issues/31868) Support Optional 1M Context for GPT-5.6 in Codex (Follow-up to #19464)
- [#41289](https://github.com/openai/codex/issues/41289) [Windows] App starts background processes but does not show a GUI window
- [#39562](https://github.com/openai/codex/issues/39562) Codex receives in-app browser ambient state but browser control tools are not exposed to the agent
- [#41458](https://github.com/openai/codex/issues/41458) Chrome extension reads tabs but interactive control is unavailable
- [#41455](https://github.com/openai/codex/issues/41455) Codex Desktop for Windows: long pasted-text attachment remains stuck

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 106,735 · **Open issues:** 867 · **Last push:** 2h ago

On August 29, 2026, Gemini CLI released version v0.59.0-nightly.20260829.g0bd1d4397, introducing a significant fix that enforces fail-closed workspace trust and filters mcpServers in restricted mode, as confirmed in merged PR #29099. The update enhances security and restricts access, reflecting the ongoing commitment to improving core functionalities. No new issues were reported in the last 24 hours, indicating a stable development environment.

#### 🚀 New Releases
- [v0.59.0-nightly.20260829.g0bd1d4397](https://github.com/google-gemini/gemini-cli/releases/tag/v0.59.0-nightly.20260829.g0bd1d4397) Release v0.59.0-nightly.20260829.g0bd1d4397

#### ✅ Merged PRs
- [#29099](https://github.com/google-gemini/gemini-cli/pull/29099) fix(core): enforce fail-closed workspace trust and filter mcpServers in restricted mode

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,122 · **Open issues:** 2,242 · **Last push:** 1h ago

On August 29, 2026, GitHub Copilot CLI released version 1.0.82-1, which improved user experience by displaying specific authentication failures, such as a 401 Bad Credentials error, instead of the generic login prompt. Among the merged pull requests, notable progress was made with PR #4497, enhancing the handling of fork PR associations in the invalid-label writer. However, the day also saw the emergence of a significant issue (#4652), where users reported that the CLI displays a 'Sandboxing is enabled but is not supported on this host' error on the latest Windows 25H2 build, indicating compatibility concerns that may affect functionality for those users.

#### 🚀 New Releases
- [v1.0.82-1](https://github.com/github/copilot-cli/releases/tag/v1.0.82-1) 1.0.82-1

#### ✅ Merged PRs
- [#4497](https://github.com/github/copilot-cli/pull/4497) Handle fork PR associations in invalid-label writer

#### 🐛 New Issues
- [#4652](https://github.com/github/copilot-cli/issues/4652) Copilot CLI Reports 'Sandboxing is enabled but is not supported on this host' for latest Windows 25H2 build `triage` 💬1
- [#4648](https://github.com/github/copilot-cli/issues/4648) Input field background renders black with near-invisible text (low contrast) mid-session `triage` 💬1
- [#4647](https://github.com/github/copilot-cli/issues/4647) v1.0.81 broke compatibility with chroma-mcp `triage` 💬1
- [#4658](https://github.com/github/copilot-cli/issues/4658) Shell completions are reinstalled on every launch, including headless `--server` sessions where `copilot` is not on PATH `triage`
- [#4657](https://github.com/github/copilot-cli/issues/4657) /delegate fails with 403 during UncommittedChangesCheck pre-flight ("Request forbidden by administrative rules") despite valid auth and repo access `triage`
- [#4655](https://github.com/github/copilot-cli/issues/4655) Agent Plugins 1.0: custom agents under com.github.copilot/agents are not discovered `triage`
- [#4654](https://github.com/github/copilot-cli/issues/4654) List models uses incorrect URL for GitHub Enterprise. `triage`
- [#4653](https://github.com/github/copilot-cli/issues/4653) AltGr key combinations (Polish national characters) are swallowed on Windows `triage`
- [#4651](https://github.com/github/copilot-cli/issues/4651) /model is not appear in cli v1.0.81 `triage`
- [#4650](https://github.com/github/copilot-cli/issues/4650) Blocked as auth fails whenever -p or --agent used (enterprise login) `triage`
- [#4649](https://github.com/github/copilot-cli/issues/4649) Tool search reports enabled on Grok but defers nothing (57.7k vs 21.0k tokens); Gemini never enables it — follow-up to #4588 `triage`

#### 🔒 Closed Issues
- [#4480](https://github.com/github/copilot-cli/issues/4480) Atlassian MCP OAuth fails with "Incompatible authorization server (RFC 8414 §3.3)" on 1.0.79 — regression from 1.0.71
- [#4189](https://github.com/github/copilot-cli/issues/4189) `/context` "MCP Tools" reports the un-deferred tool-schema footprint, not the actual (deferred) cost sent to the model

### OpenCode (`anomalyco/opencode`)

**Stars:** 202,234 · **Open issues:** 5,589 · **Last push:** <1h ago

On August 29, 2026, OpenCode released version 1.18.25, which included a fix for Azure authentication, allowing Azure CLI sign-in to work without requiring Bun. Version 1.18.24 featured important bug fixes and improvements, such as resolving issues with cached Bedrock reasoning responses and enabling Azure providers to sign in using Microsoft Entra ID. Several significant merged pull requests included a refactor to isolate session admission controls and improvements to session-switch latency. Notably, the new issue #46059 reported that the AI model gets stuck in a text-only reasoning loop, preventing it from executing tools effectively.

#### 🚀 New Releases
- [v1.18.25](https://github.com/anomalyco/opencode/releases/tag/v1.18.25) v1.18.25
- [v1.18.24](https://github.com/anomalyco/opencode/releases/tag/v1.18.24) v1.18.24

#### ✅ Merged PRs
- [#46072](https://github.com/anomalyco/opencode/pull/46072) refactor(core): merge defaults for selected MCP servers
- [#46071](https://github.com/anomalyco/opencode/pull/46071) refactor(core): reuse catalog response digest
- [#46073](https://github.com/anomalyco/opencode/pull/46073) refactor(core): avoid encoding rejected image candidates
- [#46019](https://github.com/anomalyco/opencode/pull/46019) refactor(core): isolate Session admission and controls
- [#46070](https://github.com/anomalyco/opencode/pull/46070) refactor(tui): share app lifecycle test fixture
- [#46063](https://github.com/anomalyco/opencode/pull/46063) refactor(core): isolate shell tool preparation
- [#46044](https://github.com/anomalyco/opencode/pull/46044) fix(app): reduce session-switch latency
- [#46058](https://github.com/anomalyco/opencode/pull/46058) fix(core): release exited shell execution state
- [#46031](https://github.com/anomalyco/opencode/pull/46031) feat(tui): add branch review scopes
- [#46053](https://github.com/anomalyco/opencode/pull/46053) fix(session): run user shells immediately in the background
- [#46055](https://github.com/anomalyco/opencode/pull/46055) feat(console): animate Go usage allowances and bonuses
- [#45658](https://github.com/anomalyco/opencode/pull/45658) fix(core): preserve Responses tool identities
- [#45544](https://github.com/anomalyco/opencode/pull/45544) feat(cli): configure server CORS origins
- [#46052](https://github.com/anomalyco/opencode/pull/46052) fix(app): keep workspace submit buttons neutral
- [#46054](https://github.com/anomalyco/opencode/pull/46054) refactor(core): share subagent completion delivery
- [#46050](https://github.com/anomalyco/opencode/pull/46050) fix(core): reuse permission policy for pending approvals

#### 🐛 New Issues
- [#46033](https://github.com/anomalyco/opencode/issues/46033) النموزج من امس يكرر عبارات غير مفهومة 💬3
- [#46059](https://github.com/anomalyco/opencode/issues/46059) AI model gets stuck in a text-only reasoning loop outputting plain text tool intents (e.g. "Let me grep...") instead of executing tools 💬2
- [#46046](https://github.com/anomalyco/opencode/issues/46046) nvidia models does not work 💬2
- [#46042](https://github.com/anomalyco/opencode/issues/46042) Ability to change branch before starting a session. 💬2
- [#46043](https://github.com/anomalyco/opencode/issues/46043) Add a Create PR button and watch for CI events option. 💬2
- [#46045](https://github.com/anomalyco/opencode/issues/46045) Console provider returns model_not_found for 'anomaly/qwen3.8-27b-r1' when creating agents 💬2
- [#46024](https://github.com/anomalyco/opencode/issues/46024) i need help please 💬2
- [#46061](https://github.com/anomalyco/opencode/issues/46061) Ollama reasoning is dropped: responses render empty with gemma4 💬1
- [#45832](https://github.com/anomalyco/opencode/issues/45832) [FEATURE]: docs example for PZERO OpenAI-compatible custom provider 💬1
- [#46057](https://github.com/anomalyco/opencode/issues/46057) reapeated upstream errors hapening 💬1
- [#46041](https://github.com/anomalyco/opencode/issues/46041) [FEATURE]: Add opencode-cost-details to ecosystem plugins

#### 🔒 Closed Issues
- [#29079](https://github.com/anomalyco/opencode/issues/29079) GPT Models takes too long to respond
- [#5750](https://github.com/anomalyco/opencode/issues/5750) Tool use id bug
- [#29397](https://github.com/anomalyco/opencode/issues/29397) Opencode Zen - Unexplained slowness on all models and Esc to interrupt does not work consistently
- [#22792](https://github.com/anomalyco/opencode/issues/22792) OpenCode repeatedly loops compaction-style summaries when using local vLLM (`@ai-sdk/openai-compatible`) with Qwen3-Coder
- [#15680](https://github.com/anomalyco/opencode/issues/15680) [FEATURE]: Expose worktree lifecycle events (created, removed, reset) to plugins
- [#17427](https://github.com/anomalyco/opencode/issues/17427) [FEATURE]: Workspace delete script
- [#34223](https://github.com/anomalyco/opencode/issues/34223) [BUG] Web UI: File tree toggle hidden by desktop() gate in settings, and panel not open by default
- [#34507](https://github.com/anomalyco/opencode/issues/34507) Cannot open Settings in Opencode Desktop v1.17.11 on Mac
- [#34532](https://github.com/anomalyco/opencode/issues/34532) Persistent red status dot in OpenCode Desktop after tool-loader failure; only clean reinstall cleared it
- [#34471](https://github.com/anomalyco/opencode/issues/34471) Desktop loses access to existing sessions after profile reset; opencode.db still contains sessions/messages but Desktop & Web show no history
- [#34426](https://github.com/anomalyco/opencode/issues/34426) OpenCode Desktop v.1.17.11 = GUI is broken in some menus.
- [#34402](https://github.com/anomalyco/opencode/issues/34402) 1 Prompt took 21 USD in 2 minutes with no output
- [#32492](https://github.com/anomalyco/opencode/issues/32492) 最新Windows 客户端 删除当前会话，顶部会话不会消失点击后会报错
- [#33976](https://github.com/anomalyco/opencode/issues/33976) [BUG] [CORE] : Can't mention hidden file even it's not in .gitignore
- [#46033](https://github.com/anomalyco/opencode/issues/46033) النموزج من امس يكرر عبارات غير مفهومة
- [#46059](https://github.com/anomalyco/opencode/issues/46059) AI model gets stuck in a text-only reasoning loop outputting plain text tool intents (e.g. "Let me grep...") instead of executing tools
- [#46046](https://github.com/anomalyco/opencode/issues/46046) nvidia models does not work
- [#25755](https://github.com/anomalyco/opencode/issues/25755) temperature not sent in request body for custom OpenAI-compatible provider
- [#34510](https://github.com/anomalyco/opencode/issues/34510) [FEATURE]: Feature Request / Bug: Per-agent compaction control breaks local model workflows
- [#34463](https://github.com/anomalyco/opencode/issues/34463) [FEATURE]: Support Grok image/video models, or remove them from the xAI dropdown
- [#30933](https://github.com/anomalyco/opencode/issues/30933) [FEATURE]: Explicitly add MCP server config to project level opencode.json
- [#34457](https://github.com/anomalyco/opencode/issues/34457) UX Regression: Can't View Session Details of Incomplete Task Call
- [#34445](https://github.com/anomalyco/opencode/issues/34445) Data loss: update recreated ~/.local/share/opencode and did not migrate legacy sessions
- [#34443](https://github.com/anomalyco/opencode/issues/34443) Skill file changes (add/remove/edit) not picked up until app restart due to never-evict in-memory cache
- [#34437](https://github.com/anomalyco/opencode/issues/34437) Desktop renderer freezes on large file diffs (synchronous diff parsing on UI thread)
- [#34427](https://github.com/anomalyco/opencode/issues/34427) Plan mode breaks cli
- [#34421](https://github.com/anomalyco/opencode/issues/34421) [bug] Renderer hangs with infinite Solid.js signal loop in `ListCollection.registerItem` (v1.17.11, macOS arm64)
- [#34382](https://github.com/anomalyco/opencode/issues/34382) Renderer（UI 渲染进程）卡死
- [#34399](https://github.com/anomalyco/opencode/issues/34399) Running a shell command via !cmd resets thinking effort setting in the TUI
- [#34408](https://github.com/anomalyco/opencode/issues/34408) Skills not hot-reloaded: must restart opencode after creating a new skill
- [#34403](https://github.com/anomalyco/opencode/issues/34403) Bug: server-side project name cache issue in opencode
- [#28249](https://github.com/anomalyco/opencode/issues/28249) Parallel terminal sessions overlap when running in the same project directory
- [#34400](https://github.com/anomalyco/opencode/issues/34400) 项目路径错误
- [#46042](https://github.com/anomalyco/opencode/issues/46042) Ability to change branch before starting a session.
- [#46043](https://github.com/anomalyco/opencode/issues/46043) Add a Create PR button and watch for CI events option.
- [#46024](https://github.com/anomalyco/opencode/issues/46024) i need help please
- [#34535](https://github.com/anomalyco/opencode/issues/34535) Bug: Warp with file changes copy does not transfer files when source is local (no workspace)
- [#34480](https://github.com/anomalyco/opencode/issues/34480) [FEATURE]: Show provider name in assistant message headers
- [#34476](https://github.com/anomalyco/opencode/issues/34476) [FEATURE]: Auto-enter edit mode when typing on 'Type your own answer' in question prompt
- [#34472](https://github.com/anomalyco/opencode/issues/34472) Embedding modules produce schema error
- [#34460](https://github.com/anomalyco/opencode/issues/34460) Thread freezes after switching to Go model — requires Escape key to unstick
- [#36904](https://github.com/anomalyco/opencode/issues/36904) tui: opening an existing session crashes in dialog-select

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 27,466 · **Open issues:** 1,314 · **Last push:** <1h ago

On August 29, 2026, Qwen Code rolled out v0.22.3 and its nightly build v0.22.3-nightly.20260829.e5cb60ad48, introducing key features like owner-scoped named sessions in Channels, allowing management of up to eight persistent tasks per chat, and enhancements to the web shell that provide git state hints alongside branch picker actions. Notably, the nightly release also improved review processes by emitting Step 3A fan-out as a generated workflow script. Among the new issues, #10435 raised concerns about a version causing crashes during inference on a local llama-server, highlighting a significant API error related to sampler initialization. Overall, the day was marked by noteworthy advancements in functionality and usability.

#### 🚀 New Releases
- [v0.22.3-nightly.20260829.e5cb60ad48](https://github.com/QwenLM/qwen-code/releases/tag/v0.22.3-nightly.20260829.e5cb60ad48) Release v0.22.3-nightly.20260829.e5cb60ad48
- [v0.22.3](https://github.com/QwenLM/qwen-code/releases/tag/v0.22.3) Release v0.22.3
- [cua-driver-rs-v0.20.2](https://github.com/QwenLM/qwen-code/releases/tag/cua-driver-rs-v0.20.2) cua-driver-rs v0.20.2

#### 🐛 New Issues
- [#10372](https://github.com/QwenLM/qwen-code/issues/10372) fix(vscode-ide-companion): closeDiff skips the workspace-relative path resolution showDiff performs `priority/P2` `type/bug` `category/integration` `scope/vscode` 💬4
- [#10406](https://github.com/QwenLM/qwen-code/issues/10406) fix(web-shell): infinite re-render loop via persistent connection.error and inline onError (from PR #9811 JHV) `priority/P2` `type/bug` `category/ui` `scope/vscode` 💬3
- [#10441](https://github.com/QwenLM/qwen-code/issues/10441) review: resolve filter-screen hits by origin file so include directives cannot hide a repo-local filter `priority/P2` `type/bug` `category/security` `status/ready-for-agent` 💬3
- [#10415](https://github.com/QwenLM/qwen-code/issues/10415) Deferred review findings from PR #10122 💬3
- [#10435](https://github.com/QwenLM/qwen-code/issues/10435) New version crashes inference on local llama-server (other harnesses dpn't): [API Error: 400 Failed to initialize samplers: failed to parse grammar] `priority/P2` `type/bug` `category/tools` `status/ready-for-human` 💬3
- [#10430](https://github.com/QwenLM/qwen-code/issues/10430) AppContainer tests can never reach the queued-submission drain: config init dies on the shared mock `priority/P3` `type/bug` `category/development` `scope/testing` 💬3
- [#10405](https://github.com/QwenLM/qwen-code/issues/10405) fix(web-shell): session-switch overlay stays permanently locked while daemon is unreachable (from PR #9811 JHQ) `priority/P2` `type/bug` `category/ui` `scope/vscode` 💬3
- [#10385](https://github.com/QwenLM/qwen-code/issues/10385) fix(web-shell): message edit passes window-local turn index to session-global rewind snapshots `priority/P1` `type/bug` `category/ui` `scope/web-shell` 💬3
- [#10391](https://github.com/QwenLM/qwen-code/issues/10391) web-shell: pinned sessions are excluded from session group sections — group shows · 0 and appears to have lost its members `priority/P2` `type/bug` `category/ui` `scope/session-management` 💬3
- [#10380](https://github.com/QwenLM/qwen-code/issues/10380) Auto-compaction does not recover when an OpenAI-compatible gateway returns HTTP 413 `priority/P2` `type/bug` `category/core` `scope/token-management` 💬3
- [#10399](https://github.com/QwenLM/qwen-code/issues/10399) web-shell: sidebar shows nothing about a workspace beyond its name — add inline overview, a full workspace menu, and a per-workspace overview endpoint `priority/P2` `type/feature-request` `category/ui` `daemon` 💬3
- [#10369](https://github.com/QwenLM/qwen-code/issues/10369) MCP Apps inline UI never renders in v0.22.2 Web Shell (payload delivered, renderer present); silent fallback and stale stdio servers make debugging hard `priority/P2` `type/bug` `category/ui` `scope/mcp` 💬3
- [#10373](https://github.com/QwenLM/qwen-code/issues/10373) fix(vscode-ide-companion): webview hardcodes html lang="en", making readLanguage() unable to resolve zh-CN `priority/P2` `type/bug` `category/ui` `scope/vscode` 💬2
- [#10448](https://github.com/QwenLM/qwen-code/issues/10448) 没有.git则不进行任何git操作的限制是否合理 `status/need-information` `status/need-retesting` `priority/P3` `type/bug` 💬2
- [#10382](https://github.com/QwenLM/qwen-code/issues/10382) Deferred review findings from PR #9811 💬2
- [#10446](https://github.com/QwenLM/qwen-code/issues/10446) Converge the heredoc permission projection: one quote tracker, stop scanning inert bodies, pin the CRLF state-tracking case `priority/P2` `category/security` `scope/shell` `type/enhancement` 💬2
- [#10444](https://github.com/QwenLM/qwen-code/issues/10444) perf(dev): reduce worktree setup cost with pnpm and a fast bootstrap path `priority/P2` `type/feature-request` `category/performance` `scope/build-system` 💬2
- [#10433](https://github.com/QwenLM/qwen-code/issues/10433) Add Agent Sessions to README Ecosystem section `priority/P3` `type/feature-request` `category/integration` `scope/documentation` 💬2
- [#10422](https://github.com/QwenLM/qwen-code/issues/10422) ci: release pipeline slowing down — Quality Checks job ~44 min and on the critical path `priority/P2` `category/performance` `scope/ci-cd` `type/enhancement` 💬2
- [#10400](https://github.com/QwenLM/qwen-code/issues/10400) fix(core): `tools.eager` entry named after an Object.prototype key crashes PermissionManager.initialize (from #10098 round-4 rescan) `priority/P1` `status/blocked` `type/bug` `category/core` 💬2
- [#10401](https://github.com/QwenLM/qwen-code/issues/10401) proposal(serve): Trust tokenless loopback for full operator API access `priority/P2` `type/feature-request` `category/authentication` `need-discussion` 💬2
- [#10392](https://github.com/QwenLM/qwen-code/issues/10392) fix(ci): extend protected qwen leftover sweep to the review-pr job's base checkout `priority/P2` `type/bug` `scope/ci-cd` 💬2
- [#10389](https://github.com/QwenLM/qwen-code/issues/10389) feat(web-shell): expose assistant turn settlement lifecycle `priority/P2` `type/feature-request` `category/integration` `scope/web-shell` 💬2
- [#10388](https://github.com/QwenLM/qwen-code/issues/10388) feat(dingtalk): present tool permission requests with native interactive cards `priority/P2` `type/feature-request` `category/integration` `welcome-pr` 💬2
- [#10387](https://github.com/QwenLM/qwen-code/issues/10387) fix(channels): apply channel approvalMode to non-webhook sessions `priority/P1` `type/bug` `category/configuration` `status/ready-for-agent` 💬2
- [#10386](https://github.com/QwenLM/qwen-code/issues/10386) Follow up surviving-hook supervisor hardening after #10288 `priority/P3` `category/core` `type/enhancement` `roadmap/hooks-events` 💬2
- [#10375](https://github.com/QwenLM/qwen-code/issues/10375) Main CI failed: E2E Tests on 4b5396c69a35 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#10450](https://github.com/QwenLM/qwen-code/issues/10450) Main CI failed: E2E Tests on 045ae1fc2b69 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#10453](https://github.com/QwenLM/qwen-code/issues/10453) Main CI failed: E2E Tests on 48ec00834542 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#10447](https://github.com/QwenLM/qwen-code/issues/10447) Main CI failed: Qwen Code CI on c13aa351a0df `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#10438](https://github.com/QwenLM/qwen-code/issues/10438) Main CI failed: Qwen Code CI on 5ae363e2f906 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#10395](https://github.com/QwenLM/qwen-code/issues/10395) Main CI failed: E2E Tests on d853f09f520b `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#10437](https://github.com/QwenLM/qwen-code/issues/10437) Deferred review findings from PR #10423
- [#10434](https://github.com/QwenLM/qwen-code/issues/10434) Deferred review findings from PR #10283
- [#10413](https://github.com/QwenLM/qwen-code/issues/10413) Deferred review findings from PR #9970
- [#10409](https://github.com/QwenLM/qwen-code/issues/10409) Deferred review findings from PR #10116

#### 🔒 Closed Issues
- [#8897](https://github.com/QwenLM/qwen-code/issues/8897) --approval-mode and --auth-type are accepted but missing from `qwen --help`
- [#10075](https://github.com/QwenLM/qwen-code/issues/10075) 0.22.1: edit/write_file silently disappear when permissions.allow is configured — please smoke-test releases
- [#9656](https://github.com/QwenLM/qwen-code/issues/9656) bug(core): loop detection misses repetitive output in the thinking/reasoning stage (content repetition not halted)
- [#10314](https://github.com/QwenLM/qwen-code/issues/10314) fix(ci): treat API-error triage responses as failed runs in qwen-triage.yml
- [#10324](https://github.com/QwenLM/qwen-code/issues/10324) triage: silent-rerun notification should treat a bot-initiated close as a terminal action
- [#9404](https://github.com/QwenLM/qwen-code/issues/9404) Web Shell: hide the Add-workspace "Browse…" button when the daemon host has no desktop environment
- [#10291](https://github.com/QwenLM/qwen-code/issues/10291) review: Critical is one bit carrying three axes — add direction/baseline fields so the convergence floor can actually floor
- [#10375](https://github.com/QwenLM/qwen-code/issues/10375) Main CI failed: E2E Tests on 4b5396c69a35

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

**Stars:** 387,942 · **Open issues:** 5,726 · **Last push:** <1h ago

On August 29, 2026, OpenClaw released version 2026.9.1-beta.1, which includes significant improvements such as gateway restart recovery to preserve admitted turns during repeated restarts and enhanced config-write reliability during watcher handoffs. Noteworthy merged pull requests include fixes for maintaining chat context in commands, a resolution for desktop UI not following chat sessions, and ensuring that active turns are preserved during event-loop stalls. Among the newly reported issues, the native redo functionality in the WebChat textarea was highlighted as broken, stemming from controlled re-rendering that disrupts the undo/redo chain. Additionally, there are reports of sandboxed session creation rejecting canonical macOS workspace paths, indicating potential challenges with cross-platform compatibility.

#### 🚀 New Releases
- [v2026.9.1-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.9.1-beta.1) openclaw 2026.9.1-beta.1

#### ✅ Merged PRs
- [#132255](https://github.com/openclaw/openclaw/pull/132255) fix(ui): Desktop does not follow the chat session machine
- [#132330](https://github.com/openclaw/openclaw/pull/132330) docs: clarify when changed checks run Vitest
- [#130958](https://github.com/openclaw/openclaw/pull/130958) fix(auto-reply): preserve channel context in command prompts
- [#132302](https://github.com/openclaw/openclaw/pull/132302) chore(i18n): refresh native locales
- [#132308](https://github.com/openclaw/openclaw/pull/132308) refactor(test): share CI checkout fixture lifecycle
- [#132311](https://github.com/openclaw/openclaw/pull/132311) fix(plugin-sdk): registration leaves private declaration aliases stale
- [#132289](https://github.com/openclaw/openclaw/pull/132289) fix(release): prove landed FRV controller commits
- [#132119](https://github.com/openclaw/openclaw/pull/132119) fix(native): keep TLS tests out of operator storage
- [#132316](https://github.com/openclaw/openclaw/pull/132316) test(imap): shorten protocol fixture reconnect backoff
- [#132313](https://github.com/openclaw/openclaw/pull/132313) fix(doctor): renew compatibility review dates
- [#132218](https://github.com/openclaw/openclaw/pull/132218) docs: correct chat model selection examples
- [#132315](https://github.com/openclaw/openclaw/pull/132315) fix(discord): prevent REST fixture timers leaking into later tests
- [#132301](https://github.com/openclaw/openclaw/pull/132301) fix(test): release acquired state when wrapper setup fails
- [#132304](https://github.com/openclaw/openclaw/pull/132304) fix(release): ignore skipped attempt-evidence jobs
- [#132307](https://github.com/openclaw/openclaw/pull/132307) test(discord): fix component suite initialization order
- [#132299](https://github.com/openclaw/openclaw/pull/132299) fix(crabbox): show mapped cloud machine choices
- [#132297](https://github.com/openclaw/openclaw/pull/132297) chore(ui): refresh control ui locales
- [#132227](https://github.com/openclaw/openclaw/pull/132227) fix(sessions): preserve context and lifecycle when forking chats
- [#131966](https://github.com/openclaw/openclaw/pull/131966) fix(gateway): preserve active turns across event-loop stalls
- [#130465](https://github.com/openclaw/openclaw/pull/130465) fix(openshell): allow managed host gateway ranges in E2E
- [#127836](https://github.com/openclaw/openclaw/pull/127836) fix(agents): never drop or stall a steer accepted at the end of a turn
- [#132288](https://github.com/openclaw/openclaw/pull/132288) fix(macos): allow dragging the OpenClaw panel header
- [#132062](https://github.com/openclaw/openclaw/pull/132062) fix(macos): preserve status-less health probe errors
- [#132131](https://github.com/openclaw/openclaw/pull/132131) feat(ui): expand video attachments in the media overlay
- [#132108](https://github.com/openclaw/openclaw/pull/132108) fix(line): give the agent the names LINE knows, not raw ids
- [#132155](https://github.com/openclaw/openclaw/pull/132155) fix(cli): report failed local agent turns as unsuccessful
- [#132276](https://github.com/openclaw/openclaw/pull/132276) fix(codex): honor thinking off on supported Platform routes
- [#132298](https://github.com/openclaw/openclaw/pull/132298) fix(onboard): avoid unused plugin discovery in non-interactive setup
- [#132294](https://github.com/openclaw/openclaw/pull/132294) revert(ui): keep queued follow-ups attached to the composer
- [#132293](https://github.com/openclaw/openclaw/pull/132293) fix(release): preserve canonical candidate requests
- [#132271](https://github.com/openclaw/openclaw/pull/132271) fix(ci): avoid unnecessary release verification delays
- [#132223](https://github.com/openclaw/openclaw/pull/132223) chore: block restricted literals in local commits
- [#119326](https://github.com/openclaw/openclaw/pull/119326) fix(agents): honor account-scoped history limits instead of silently ignoring them
- [#132105](https://github.com/openclaw/openclaw/pull/132105) fix(ci): stop leftover Git processes before checkout retries
- [#132149](https://github.com/openclaw/openclaw/pull/132149) test(codex): cover model identity across native resume
- [#131788](https://github.com/openclaw/openclaw/pull/131788) fix(control-ui): re-scope credentials when editing Gateway URLs
- [#132279](https://github.com/openclaw/openclaw/pull/132279) fix(daemon): explain unsafe service publication failures
- [#131829](https://github.com/openclaw/openclaw/pull/131829) fix(ui): show Codex node approvals in the controlling chat
- [#132250](https://github.com/openclaw/openclaw/pull/132250) fix(presence): keep colliding profiles and raw viewers separate
- [#132269](https://github.com/openclaw/openclaw/pull/132269) fix(cli): accept Bun 1.4 module-miss diagnostics
- [#132286](https://github.com/openclaw/openclaw/pull/132286) fix(installer): pin NodeSource RPM repository
- [#132017](https://github.com/openclaw/openclaw/pull/132017) fix: prompt cache collapses in long sessions — aggregate tool-result truncation rewrites already-sent history
- [#132274](https://github.com/openclaw/openclaw/pull/132274) fix(maintainers): avoid redundant main fetches during PR prep
- [#131627](https://github.com/openclaw/openclaw/pull/131627) fix(gateway): restore rollback manual-stop regression checks
- [#131618](https://github.com/openclaw/openclaw/pull/131618) refactor(macos): reuse daily usage cost totals serialization
- [#117128](https://github.com/openclaw/openclaw/pull/117128) fix(secrets): preflight exec provider command paths before config acceptance
- [#131174](https://github.com/openclaw/openclaw/pull/131174) fix(ui): retry stale dashboard final history
- [#131593](https://github.com/openclaw/openclaw/pull/131593) fix(ui): preserve durable turn order after live finals
- [#118157](https://github.com/openclaw/openclaw/pull/118157) fix(channels): bundled channels reject the documented mediaMaxMb override
- [#131601](https://github.com/openclaw/openclaw/pull/131601) fix: cold inventories incorrectly quarantine provider-supported tools
- [#131596](https://github.com/openclaw/openclaw/pull/131596) fix(release): preserve frozen plugin harness compatibility
- [#131410](https://github.com/openclaw/openclaw/pull/131410) fix(gateway): admin-only roles reject valid scope upgrades
- [#131195](https://github.com/openclaw/openclaw/pull/131195) fix(line): /card splits an action, list item, or receipt entry at a comma inside its data
- [#131589](https://github.com/openclaw/openclaw/pull/131589) fix(doctor): keep auth repair in the selected installation
- [#131506](https://github.com/openclaw/openclaw/pull/131506) chore(ui): refresh control ui locales
- [#119388](https://github.com/openclaw/openclaw/pull/119388) fix(gateway): own standalone MCP App request lifetimes
- [#131587](https://github.com/openclaw/openclaw/pull/131587) test(ci): avoid repeated workflow parsing
- [#131586](https://github.com/openclaw/openclaw/pull/131586) fix(slack): stop leaking consumed media into card and text sends
- [#132097](https://github.com/openclaw/openclaw/pull/132097) fix(brave): bind preflight to request cancellation
- [#132045](https://github.com/openclaw/openclaw/pull/132045) fix(ios): refine Chat Actions and header controls
- [#129590](https://github.com/openclaw/openclaw/pull/129590) fix(onboard): preserve manifest-equivalent alias validation
- [#132197](https://github.com/openclaw/openclaw/pull/132197) fix(ui): show final replies after interim output
- [#131715](https://github.com/openclaw/openclaw/pull/131715) feat(qa): add Convex-leased Telegram userbot proof
- [#107721](https://github.com/openclaw/openclaw/pull/107721) fix: gateway kill leaves Codex tool processes running
- [#131285](https://github.com/openclaw/openclaw/pull/131285) fix(line): a permanently refused message is replayed instead of settling
- [#132272](https://github.com/openclaw/openclaw/pull/132272) refactor(gateway): remove unreachable health collection state
- [#67946](https://github.com/openclaw/openclaw/pull/67946) Clear stale subagent lineage on top-level sessions
- [#131423](https://github.com/openclaw/openclaw/pull/131423) fix(ui): tighten settings title spacing
- [#132257](https://github.com/openclaw/openclaw/pull/132257) fix(test): roll back failed test-home acquisition
- [#132265](https://github.com/openclaw/openclaw/pull/132265) fix: accept canonical workspace paths for sandboxed sessions
- [#132210](https://github.com/openclaw/openclaw/pull/132210) fix(build): reject native declaration compiler failures
- [#132189](https://github.com/openclaw/openclaw/pull/132189) fix(codex): explicitly selected hidden models fail bounded turns
- [#132190](https://github.com/openclaw/openclaw/pull/132190) fix(compaction): preserve headroom for local chat follow-up turns
- [#131750](https://github.com/openclaw/openclaw/pull/131750) fix(ui): keep composer textarea native undo and redo working
- [#132268](https://github.com/openclaw/openclaw/pull/132268) fix(e2e): retain readable plugin update handoff evidence
- [#132169](https://github.com/openclaw/openclaw/pull/132169) fix(ci): stop Git descendants before standalone checkout reuse
- [#132267](https://github.com/openclaw/openclaw/pull/132267) test: select workspace mode for worker wire permission proof
- [#132252](https://github.com/openclaw/openclaw/pull/132252) fix: package inventory is skipped for symlinked source paths
- [#132198](https://github.com/openclaw/openclaw/pull/132198) chore(ui): refresh control ui locales
- [#132264](https://github.com/openclaw/openclaw/pull/132264) test: bind release assertions to explicit version contexts
- [#115702](https://github.com/openclaw/openclaw/pull/115702) docs(line): document inbound durability, retry policy, and dead-letter recovery
- [#132244](https://github.com/openclaw/openclaw/pull/132244) fix(agents): retain prepared catalog ownership through refresh
- [#132249](https://github.com/openclaw/openclaw/pull/132249) fix(deps): update tar security patch for extended stable
- [#132139](https://github.com/openclaw/openclaw/pull/132139) refactor: share the sealed-service busctl fixture
- [#131272](https://github.com/openclaw/openclaw/pull/131272) fix(ui): allow Fast Mode when creating sessions
- [#132159](https://github.com/openclaw/openclaw/pull/132159) fix(browser): keep the panel on the session browser profile
- [#131872](https://github.com/openclaw/openclaw/pull/131872) fix(line): describe inbound stickers from what LINE actually sends
- [#132219](https://github.com/openclaw/openclaw/pull/132219) refactor(shared): remove unused store writer running state
- [#129276](https://github.com/openclaw/openclaw/pull/129276) fix(doctor): run health checks for the installed Codex plugin
- [#132203](https://github.com/openclaw/openclaw/pull/132203) fix(ci): keep slow startup from failing cancellation tests
- [#110058](https://github.com/openclaw/openclaw/pull/110058) fix(line): migrate pre-drain spool rows to the canonical queue contract on upgrade
- [#132237](https://github.com/openclaw/openclaw/pull/132237) fix(exec): automation exec-approval denials no longer point at the TUI
- [#132201](https://github.com/openclaw/openclaw/pull/132201) fix(plugins): keep development runs on checkout plugins
- [#132232](https://github.com/openclaw/openclaw/pull/132232) fix(browser): restore MCP page creation through the extension relay
- [#132090](https://github.com/openclaw/openclaw/pull/132090) fix(gateway): retain rejecting resolver ownership across dispatch
- [#131838](https://github.com/openclaw/openclaw/pull/131838) fix(line): run group slash commands sent with the bot's mention
- [#132221](https://github.com/openclaw/openclaw/pull/132221) ci: avoid redundant full release preparation
- [#132241](https://github.com/openclaw/openclaw/pull/132241) test: overlap independent CI watcher rejection cases
- [#132235](https://github.com/openclaw/openclaw/pull/132235) fix(hovercard): restore link styling on session PR rows
- [#131909](https://github.com/openclaw/openclaw/pull/131909) feat(ui): render queued follow-ups as transcript bubbles
- [#132238](https://github.com/openclaw/openclaw/pull/132238) fix(ui): stop the history sentinel from painting skeletons over transcript rows
- [#127002](https://github.com/openclaw/openclaw/pull/127002) fix(ci): support frozen target tooling
- [#132248](https://github.com/openclaw/openclaw/pull/132248) fix: report Code Mode failures without false success
- [#132222](https://github.com/openclaw/openclaw/pull/132222) fix(cli): accurately preview suppressed telemetry requests
- [#132225](https://github.com/openclaw/openclaw/pull/132225) fix(github): classify new skills before Barnacle close
- [#132246](https://github.com/openclaw/openclaw/pull/132246) docs: correct numeric model selection guidance
- [#132135](https://github.com/openclaw/openclaw/pull/132135) feat(gateway): auto-apply safe doctor config migrations at startup
- [#132212](https://github.com/openclaw/openclaw/pull/132212) fix(browser): native bootstrap stalls before replying
- [#132096](https://github.com/openclaw/openclaw/pull/132096) fix(macos): MCP Apps stay inside the dashboard
- [#132094](https://github.com/openclaw/openclaw/pull/132094) fix(pr): stop review workflows after failed worktree prerequisites
- [#127023](https://github.com/openclaw/openclaw/pull/127023) fix(release): preserve frozen ClawHub request contracts
- [#132214](https://github.com/openclaw/openclaw/pull/132214) fix(test): keep plugin update observer resilient to transient proc access
- [#132206](https://github.com/openclaw/openclaw/pull/132206) fix: avoid cold SecretRef validation stalls in daemon install
- [#131043](https://github.com/openclaw/openclaw/pull/131043) chore: migrate tooling and source installs to pnpm 12
- [#132234](https://github.com/openclaw/openclaw/pull/132234) fix(test): release inventory fixture times out under filesystem load
- [#132213](https://github.com/openclaw/openclaw/pull/132213) refactor(channels): remove duplicate setup return assertions
- [#132230](https://github.com/openclaw/openclaw/pull/132230) fix(qa): recognize process groups reaped during cleanup
- [#132112](https://github.com/openclaw/openclaw/pull/132112) fix: allow large forks when child model supports them
- [#132173](https://github.com/openclaw/openclaw/pull/132173) fix(maintainers): prevent duplicate merges after ambiguous responses
- [#132204](https://github.com/openclaw/openclaw/pull/132204) fix(ci): avoid false checkout cleanup failures on macOS
- [#132216](https://github.com/openclaw/openclaw/pull/132216) fix(release): distinguish Anthropic validation jobs
- [#132100](https://github.com/openclaw/openclaw/pull/132100) fix(exec): inherit configured host for per-call auto
- [#132202](https://github.com/openclaw/openclaw/pull/132202) chore(i18n): refresh native locales
- [#132093](https://github.com/openclaw/openclaw/pull/132093) fix(plugins): retire loader cache with runtime registrations
- [#132205](https://github.com/openclaw/openclaw/pull/132205) fix(sessions): honor per-agent model policies and aliases
- [#132208](https://github.com/openclaw/openclaw/pull/132208) fix(test): clean isolated homes across managed test runners
- [#132175](https://github.com/openclaw/openclaw/pull/132175) fix: allow off-catalog chat models under unrestricted policy
- [#131006](https://github.com/openclaw/openclaw/pull/131006) fix(discord): avoid empty warning after successful steer
- [#132086](https://github.com/openclaw/openclaw/pull/132086) fix(ios): simplify sidebar navigation
- [#132040](https://github.com/openclaw/openclaw/pull/132040) fix: preserve ACP model switches and reply completion
- [#132015](https://github.com/openclaw/openclaw/pull/132015) fix(ui): use full width for settings on mobile
- [#131352](https://github.com/openclaw/openclaw/pull/131352) fix(doctor): ignore disabled MCP servers in warnings
- [#132193](https://github.com/openclaw/openclaw/pull/132193) fix: share fs-safe native assets across package graphs
- [#132124](https://github.com/openclaw/openclaw/pull/132124) fix(ui): restore the Control UI startup JavaScript budget
- [#131831](https://github.com/openclaw/openclaw/pull/131831) fix(webchat): restore playback for delivered audio and video
- [#131859](https://github.com/openclaw/openclaw/pull/131859) fix(webchat): strip reply directives during media transcript rewrites
- [#132014](https://github.com/openclaw/openclaw/pull/132014) fix(line): give the agent the selection a postback carries
- [#132056](https://github.com/openclaw/openclaw/pull/132056) fix(daemon): preserve recovery after Startup entry removal
- [#132067](https://github.com/openclaw/openclaw/pull/132067) docs: friendlier security and first-touch pages
- [#132016](https://github.com/openclaw/openclaw/pull/132016) fix(android): stop offering obsolete ClawHub acknowledgement retries
- [#131883](https://github.com/openclaw/openclaw/pull/131883) fix(qa): prevent early Discord bot reuse and implicit transcript rooms
- [#132035](https://github.com/openclaw/openclaw/pull/132035) fix(qa): restore macOS Crabline artifact publication
- [#131866](https://github.com/openclaw/openclaw/pull/131866) fix(ci): unblock macOS Swift test discovery
- [#131943](https://github.com/openclaw/openclaw/pull/131943) fix(codex): hide managed Code Mode compatibility warning
- [#131962](https://github.com/openclaw/openclaw/pull/131962) fix(channels): preserve ingress retry facts after shutdown
- [#131811](https://github.com/openclaw/openclaw/pull/131811) improve(ui): refine chat image presentation and controls
- [#132012](https://github.com/openclaw/openclaw/pull/132012) docs: reframe docs for teams and soften group-chat guidance
- [#131942](https://github.com/openclaw/openclaw/pull/131942) docs: prohibit publishing unreleased model identifiers
- [#131869](https://github.com/openclaw/openclaw/pull/131869) fix: worker reply corrections repeat stale live text
- [#131915](https://github.com/openclaw/openclaw/pull/131915) fix(release): resume partial plugin npm publication
- [#126909](https://github.com/openclaw/openclaw/pull/126909) fix(acp): recover terminal reply and surface run errors on reconnect reconcile
- [#131865](https://github.com/openclaw/openclaw/pull/131865) refactor: reuse SQLite WAL test directory cleanup
- [#120658](https://github.com/openclaw/openclaw/pull/120658) fix(active-memory): keep recall errors out of prompt context
- [#131885](https://github.com/openclaw/openclaw/pull/131885) fix(build): share heap budgets with CI artifact children
- [#131884](https://github.com/openclaw/openclaw/pull/131884) fix(plugins): resolve CLI plugin metadata once per invocation
- [#131849](https://github.com/openclaw/openclaw/pull/131849) feat(macos): bring native chat layout and controls closer to web

#### 🐛 New Issues
- [#131708](https://github.com/openclaw/openclaw/issues/131708) WebChat textarea: native redo (Shift+Cmd+Z) broken — controlled re-rendering breaks the undo/redo chain `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#132263](https://github.com/openclaw/openclaw/issues/132263) [Bug]: Control UI renders the commentary portion of an assistant message three times (stored once) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#131954](https://github.com/openclaw/openclaw/issues/131954) Fork from here returns an unreadable child for incognito sessions `bug` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬3
- [#132152](https://github.com/openclaw/openclaw/issues/132152) [Bug]: Native PR preparation repeats main refreshes and can accept failed fetches `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬3
- [#132095](https://github.com/openclaw/openclaw/issues/132095) [Bug]: Brave searches delay cancellation while endpoint DNS is pending `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬3
- [#132245](https://github.com/openclaw/openclaw/issues/132245) [Bug]: sandboxed session creation rejects canonical macOS workspace paths `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬3
- [#131687](https://github.com/openclaw/openclaw/issues/131687) ClawHub skill installs require audit overview absent from the live API contract `maintainer` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` 💬3
- [#131743](https://github.com/openclaw/openclaw/issues/131743) [Bug]: memory-core embeds/reindexes in the background even when the memory plugin slot points elsewhere, wasting embedding-provider spend `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#132305](https://github.com/openclaw/openclaw/issues/132305) Doctor reports schema-only agent database upgrades as media migrations `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#132306](https://github.com/openclaw/openclaw/issues/132306) [Bug]: native PR cleanup removes legacy merge evidence before admission `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#132303](https://github.com/openclaw/openclaw/issues/132303) agents.list[].tools.deny is not enforced for the claude-cli backend (native tools stay always-on) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-security-review` 💬2
- [#132253](https://github.com/openclaw/openclaw/issues/132253) [Bug]: Codex Platform turns use default reasoning when thinking is off `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬2
- [#131553](https://github.com/openclaw/openclaw/issues/131553) Stopping an exact parent run leaves Swarm collectors running and queued `bug` `maintainer` `P1` `clawsweeper:source-repro` 💬2
- [#132278](https://github.com/openclaw/openclaw/issues/132278) [Bug]: gateway install hides unsafe service directory permissions `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#132247](https://github.com/openclaw/openclaw/issues/132247) Live presence merges qualified profiles with colliding unqualified IDs `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#132281](https://github.com/openclaw/openclaw/issues/132281) Filed in error 💬2
- [#132280](https://github.com/openclaw/openclaw/issues/132280) Filed in error 💬2
- [#132187](https://github.com/openclaw/openclaw/issues/132187) [Bug]: Explicit hidden Codex models fail bounded turns `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#131762](https://github.com/openclaw/openclaw/issues/131762) [Bug]: Local 32K chat fails its second turn at the compaction safeguard `bug` `maintainer` `P1` `clawsweeper:source-repro` 💬2
- [#132156](https://github.com/openclaw/openclaw/issues/132156) [Bug]: Prepared model catalogs lose ownership after environment changes `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬2
- [#132141](https://github.com/openclaw/openclaw/issues/132141) [Bug]: Browser panel follows default profile instead of the session browser `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬2
- [#132127](https://github.com/openclaw/openclaw/issues/132127) [Bug]: Extension relay rejects MCP new_page and leaves grouped blank tabs `bug` `maintainer` `P1` `clawsweeper:source-repro` 💬2
- [#132211](https://github.com/openclaw/openclaw/issues/132211) [Bug]: Telemetry inspection shows a request suppressed in CI `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬2
- [#132192](https://github.com/openclaw/openclaw/issues/132192) [Bug]: openclaw update --dry-run status silently ignores --dry-run instead of rejecting it `bug` `no-stale` `bug:behavior` `P2` 💬2
- [#132209](https://github.com/openclaw/openclaw/issues/132209) [Bug]: Compiled Browser native host can time out before its first frame `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#131976](https://github.com/openclaw/openclaw/issues/131976) [Bug]: Completed nested Code Mode tool calls disappear from Control UI after reload `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#132142](https://github.com/openclaw/openclaw/issues/132142) [Bug]: daemon-install SecretRef validation loads heavy runtime for channel metadata `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬2
- [#132138](https://github.com/openclaw/openclaw/issues/132138) [Bug]: Native merge retry can create an empty duplicate squash after HTTP 502 `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#132239](https://github.com/openclaw/openclaw/issues/132239) Desktop panels should follow the session execution machine `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#132334](https://github.com/openclaw/openclaw/issues/132334) [Feature]: voice-call: agent cannot end its own call in classic conversation mode `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#132333](https://github.com/openclaw/openclaw/issues/132333) [Bug]: Concurrent builds delete declarations used by active checks `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#132319](https://github.com/openclaw/openclaw/issues/132319) [Bug]: tools.deny does not block Codex native subagent tools `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-security-review` 💬1
- [#132325](https://github.com/openclaw/openclaw/issues/132325) [Bug]: macOS packaging hides Peekaboo snapshot failure diagnostics `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#132323](https://github.com/openclaw/openclaw/issues/132323) [Bug]: Matrix rejects valid env SecretRefs when a default provider alias is shared `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#131780](https://github.com/openclaw/openclaw/issues/131780) [Bug]: Setup probes reject model-only staged configs without a runtime roster `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#132317](https://github.com/openclaw/openclaw/issues/132317) [Bug]: SIGTERM during Gateway startup strands the plugin lifecycle lease `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#132320](https://github.com/openclaw/openclaw/issues/132320) [Bug]: Local plugin checks regenerate packaged SDK declarations and reuse stale artifacts `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#131692](https://github.com/openclaw/openclaw/issues/131692) Cloud-worker enrollment misreports umask-restricted installs as missing (crabbox setup umask 077) `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#132291](https://github.com/openclaw/openclaw/issues/132291) Bug: cloud picker omits mapped Machine0 machine classes `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#132243](https://github.com/openclaw/openclaw/issues/132243) Creator-based sharing confuses actor namespaces and loses merged profiles `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#132287](https://github.com/openclaw/openclaw/issues/132287) [Bug]: macOS dashboard OpenClaw panel header cannot drag the window `bug` `maintainer` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#131729](https://github.com/openclaw/openclaw/issues/131729) [Bug]: remote apply_patch fails to resolve leading-@ file shorthand `maintainer` `P1` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#132292](https://github.com/openclaw/openclaw/issues/132292) [Bug]: Cold Anthropic discovery eagerly initializes the Claude CLI runtime `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#132290](https://github.com/openclaw/openclaw/issues/132290) [Bug]: memory search reports incorrect embedding model mismatch 💬1
- [#132008](https://github.com/openclaw/openclaw/issues/132008) [Bug]: Aggregate tool-result truncation re-elides older tool results on later turns, walking the prompt-cache break point backwards (~4% cache hit rate in long sessions) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#132258](https://github.com/openclaw/openclaw/issues/132258) fix(acp): user approval decisions made during a gateway disconnect are silently dropped `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#132285](https://github.com/openclaw/openclaw/issues/132285) Periodically sweep idle auto-fallback sessions and re-probe primary model (revert before next channel activity) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#132284](https://github.com/openclaw/openclaw/issues/132284) discord skill is unsatisfiable and hidden from all agents on account-only configs (#66088's fix PR #66442 closed unmerged) `P2` `impact:other` `maturity:stable` 💬1
- [#132270](https://github.com/openclaw/openclaw/issues/132270) [Feature]: State DB: fail-stop barriers against concurrent schema migration wiping operator data `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#132283](https://github.com/openclaw/openclaw/issues/132283) [Bug]: package-to-Git dev update rejects intentional source link `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#132262](https://github.com/openclaw/openclaw/issues/132262) fix(acp): abort cause (errorMessage) is silently dropped, IDE shows a bare cancel `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#132259](https://github.com/openclaw/openclaw/issues/132259) [Bug]: browser tool never appears in a spawned sub-agent's resolved tool list, even when explicitly granted `P2` `impact:other` 💬1
- [#131871](https://github.com/openclaw/openclaw/issues/131871) Inbound LINE stickers reach the agent named after the wrong sticker package `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#132228](https://github.com/openclaw/openclaw/issues/132228) [Feature]: Meta muse-image image generation (and editing) for the bundled meta provider `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#132171](https://github.com/openclaw/openclaw/issues/132171) [Bug]: Dev plugin builds and source aliases lose bundled provenance `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#131836](https://github.com/openclaw/openclaw/issues/131836) LINE group slash commands never run: the bot's own mention stays in the command body `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#132231](https://github.com/openclaw/openclaw/issues/132231) fix(channels): setup credential rotation leaves the replaced source active (telegram, zalo, googlechat) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#131925](https://github.com/openclaw/openclaw/issues/131925) [Bug]: Operator session fork rejects model-safe parent at fixed non-configurable 100K cap `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#131947](https://github.com/openclaw/openclaw/issues/131947) Control UI permission changes do not restart the active turn `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1

#### 🔒 Closed Issues
- [#80178](https://github.com/openclaw/openclaw/issues/80178) resolveCliAuthEpoch invalidates every live CLI session when local credential source-of-storage flips, even though identity is unchanged
- [#128826](https://github.com/openclaw/openclaw/issues/128826) [Bug]: doctor --lint and --json abort with MissingPublicSurfaceError for externalised codex plugin
- [#68187](https://github.com/openclaw/openclaw/issues/68187) SSE-backed MCP sessions can stay stale after server restart and fail with 'Session not found'
- [#20837](https://github.com/openclaw/openclaw/issues/20837) [Feature]: make agent aware of communication channel
- [#131708](https://github.com/openclaw/openclaw/issues/131708) WebChat textarea: native redo (Shift+Cmd+Z) broken — controlled re-rendering breaks the undo/redo chain
- [#110057](https://github.com/openclaw/openclaw/issues/110057) Upgrading a gateway that ran a #109655-era build dead-letters pending LINE webhook events
- [#132263](https://github.com/openclaw/openclaw/issues/132263) [Bug]: Control UI renders the commentary portion of an assistant message three times (stored once)
- [#131954](https://github.com/openclaw/openclaw/issues/131954) Fork from here returns an unreadable child for incognito sessions
- [#132152](https://github.com/openclaw/openclaw/issues/132152) [Bug]: Native PR preparation repeats main refreshes and can accept failed fetches
- [#132095](https://github.com/openclaw/openclaw/issues/132095) [Bug]: Brave searches delay cancellation while endpoint DNS is pending
- [#132245](https://github.com/openclaw/openclaw/issues/132245) [Bug]: sandboxed session creation rejects canonical macOS workspace paths
- [#131687](https://github.com/openclaw/openclaw/issues/131687) ClawHub skill installs require audit overview absent from the live API contract
- [#129643](https://github.com/openclaw/openclaw/issues/129643) perf: add missing database indexes for capture_events and memory chunk queries
- [#130825](https://github.com/openclaw/openclaw/issues/130825) Bug: cloud machine choices stay empty after a failed Crabbox catalog probe
- [#130457](https://github.com/openclaw/openclaw/issues/130457) [Bug]: OpenShell allow-policy E2E rejects managed host gateway
- [#132253](https://github.com/openclaw/openclaw/issues/132253) [Bug]: Codex Platform turns use default reasoning when thinking is off
- [#132278](https://github.com/openclaw/openclaw/issues/132278) [Bug]: gateway install hides unsafe service directory permissions
- [#132247](https://github.com/openclaw/openclaw/issues/132247) Live presence merges qualified profiles with colliding unqualified IDs
- [#131494](https://github.com/openclaw/openclaw/issues/131494) [Bug]: Config writes fail when a watcher echo takes over channel reload
- [#132281](https://github.com/openclaw/openclaw/issues/132281) Filed in error
- [#132280](https://github.com/openclaw/openclaw/issues/132280) Filed in error
- [#132187](https://github.com/openclaw/openclaw/issues/132187) [Bug]: Explicit hidden Codex models fail bounded turns
- [#131762](https://github.com/openclaw/openclaw/issues/131762) [Bug]: Local 32K chat fails its second turn at the compaction safeguard
- [#132156](https://github.com/openclaw/openclaw/issues/132156) [Bug]: Prepared model catalogs lose ownership after environment changes
- [#131270](https://github.com/openclaw/openclaw/issues/131270) [Bug]: New-session composer hides Fast Mode from non-admin operators
- [#132141](https://github.com/openclaw/openclaw/issues/132141) [Bug]: Browser panel follows default profile instead of the session browser
- [#132127](https://github.com/openclaw/openclaw/issues/132127) [Bug]: Extension relay rejects MCP new_page and leaves grouped blank tabs
- [#132211](https://github.com/openclaw/openclaw/issues/132211) [Bug]: Telemetry inspection shows a request suppressed in CI
- [#132209](https://github.com/openclaw/openclaw/issues/132209) [Bug]: Compiled Browser native host can time out before its first frame
- [#132142](https://github.com/openclaw/openclaw/issues/132142) [Bug]: daemon-install SecretRef validation loads heavy runtime for channel metadata
- [#132138](https://github.com/openclaw/openclaw/issues/132138) [Bug]: Native merge retry can create an empty duplicate squash after HTTP 502
- [#132239](https://github.com/openclaw/openclaw/issues/132239) Desktop panels should follow the session execution machine
- [#132291](https://github.com/openclaw/openclaw/issues/132291) Bug: cloud picker omits mapped Machine0 machine classes
- [#131046](https://github.com/openclaw/openclaw/issues/131046) [Bug]: host-thaw detector treats event-loop stalls as suspension and restarts channels during active turns
- [#132287](https://github.com/openclaw/openclaw/issues/132287) [Bug]: macOS dashboard OpenClaw panel header cannot drag the window
- [#131729](https://github.com/openclaw/openclaw/issues/131729) [Bug]: remote apply_patch fails to resolve leading-@ file shorthand
- [#132290](https://github.com/openclaw/openclaw/issues/132290) [Bug]: memory search reports incorrect embedding model mismatch
- [#132008](https://github.com/openclaw/openclaw/issues/132008) [Bug]: Aggregate tool-result truncation re-elides older tool results on later turns, walking the prompt-cache break point backwards (~4% cache hit rate in long sessions)
- [#132284](https://github.com/openclaw/openclaw/issues/132284) discord skill is unsatisfiable and hidden from all agents on account-only configs (#66088's fix PR #66442 closed unmerged)
- [#132259](https://github.com/openclaw/openclaw/issues/132259) [Bug]: browser tool never appears in a spawned sub-agent's resolved tool list, even when explicitly granted
- [#131871](https://github.com/openclaw/openclaw/issues/131871) Inbound LINE stickers reach the agent named after the wrong sticker package
- [#132171](https://github.com/openclaw/openclaw/issues/132171) [Bug]: Dev plugin builds and source aliases lose bundled provenance
- [#131836](https://github.com/openclaw/openclaw/issues/131836) LINE group slash commands never run: the bot's own mention stays in the command body
- [#131925](https://github.com/openclaw/openclaw/issues/131925) [Bug]: Operator session fork rejects model-safe parent at fixed non-configurable 100K cap

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 237,795 · **Open issues:** 37,180 · **Last push:** <1h ago

On August 29, 2026, there were no new releases for Hermes Agent, but several important issues were addressed. The merged pull requests included a fix for a crashing issue with the board switcher on desktop (PR #97640) and an auto-fix for JavaScript formatting (PR #97642). Among the new issues, a notable concern is the Cron warning that recommends running `hermes gateway install` under multiplex, which subsequently causes the gateway to refuse to start and results in a crash-loop (Issue #97120). Additionally, a Bug related to WebSocket disconnects on every message due to a `UnicodeEncodeError` was reported (Issue #97288), highlighting ongoing challenges with the desktop gateway's stability.

#### ✅ Merged PRs
- [#97640](https://github.com/NousResearch/hermes-agent/pull/97640) fix(desktop): board switcher crashed on every render
- [#97642](https://github.com/NousResearch/hermes-agent/pull/97642) fmt(js): `npm run fix` auto-fix

#### 🐛 New Issues
- [#97120](https://github.com/NousResearch/hermes-agent/issues/97120) Cron warning recommends `hermes gateway install` under multiplex; the gateway then refuses to start and the service crash-loops `type/bug` `comp/gateway` `comp/cron` `area/config` 💬4
- [#97321](https://github.com/NousResearch/hermes-agent/issues/97321) [Bug]: compression summary message can be inserted twice in a single cycle (race between preflight and tool-loop tail paths) `type/bug` `comp/agent` `P2` `sweeper:risk-session-state` 💬3
- [#97288](https://github.com/NousResearch/hermes-agent/issues/97288) [Bug]: Desktop gateway WebSocket disconnects on every message — UnicodeEncodeError on surrogate '\ud83d' (fresh install, before any model configured) `type/bug` `duplicate` `comp/tui` `P2` 💬3
- [#97639](https://github.com/NousResearch/hermes-agent/issues/97639) [Bug]: Honcho Session Summary can persist model reasoning and stale cache reinjects it `type/bug` `comp/plugins` `tool/memory` `P3` 💬2
- [#97382](https://github.com/NousResearch/hermes-agent/issues/97382) [Bug] AttributeError: 'int' object has no attribute 'lstrip' in _provider_stream_text_may_be_sse during streaming `type/bug` `comp/agent` `provider/openai` `P2` 💬2
- [#97544](https://github.com/NousResearch/hermes-agent/issues/97544) Bug: hermes model prepends custom: to built-in provider IDs, breaking upstream auth `type/bug` `comp/cli` `provider/ollama` `area/config` 💬2
- [#97635](https://github.com/NousResearch/hermes-agent/issues/97635) Bug: /background results silently not delivered on desktop-originated sessions (response generated+persisted, no error) `type/bug` `comp/gateway` `P2` `sweeper:risk-session-state` 💬1
- [#97595](https://github.com/NousResearch/hermes-agent/issues/97595) [Bug] _STATIC_CONTEXT_LENGTHS missing glm-5.3 — falls back to generic 202K, premature compaction on a 1M-context model `type/bug` `comp/agent` `provider/zai` `P2` 💬1
- [#97596](https://github.com/NousResearch/hermes-agent/issues/97596) [Bug/Feature] BWS secret injection uses hardcoded _EXTRA_ENV_KEYS whitelist — API keys for custom providers defined in config.yaml are never injected `type/bug` `comp/cli` `area/auth` `area/config` 💬1
- [#97602](https://github.com/NousResearch/hermes-agent/issues/97602) [Bug]: Mid-turn Pre-API compression bypasses native checkpoint-pruned estimate after #96155 `type/bug` `duplicate` `comp/agent` `provider/openai` 💬1
- [#97597](https://github.com/NousResearch/hermes-agent/issues/97597) [Bug] Feishu adapter passes extra_ua_tags unconditionally — hard crash (TypeError) when lark-oapi < 1.6.8; feishu extra is not enforced or checked `type/bug` `duplicate` `comp/plugins` `platform/feishu` 💬1
- [#97498](https://github.com/NousResearch/hermes-agent/issues/97498) Telegram DM topic recovery is skipped for /background dispatch `type/bug` `comp/gateway` `platform/telegram` `P2` 💬1
- [#97329](https://github.com/NousResearch/hermes-agent/issues/97329) [Bug]: state.db repair misses holders on deleted WAL generation `type/bug` `comp/agent` `P2` `sweeper:risk-session-state` 💬1
- [#97515](https://github.com/NousResearch/hermes-agent/issues/97515) [Bug]: Desktop Settings → Model "Apply" reaches the backend with no profile scope — main model always written to the launch profile (packet capture included) `type/bug` `area/config` `P2` `sweeper:risk-session-state` 💬1
- [#97529](https://github.com/NousResearch/hermes-agent/issues/97529) Desktop: SSH remotes never migrated into the v2 connection registry, so remote (SSH) sessions fail to load `type/bug` `duplicate` `backend/ssh` `area/config` 💬1
- [#97648](https://github.com/NousResearch/hermes-agent/issues/97648) [Bug]: Lean compression lacks an attempt call budget; oversized session reached 877 Luna calls
- [#97647](https://github.com/NousResearch/hermes-agent/issues/97647) [desktop] Consciousness UI calls unimplemented 'tools/call' RPC -> React render dead-loop (380x)
- [#97633](https://github.com/NousResearch/hermes-agent/issues/97633) refactor(update): decompose update_cmd.py without changing behavior `type/refactor` `comp/cli` `P3` `sweeper:risk-compatibility`
- [#97630](https://github.com/NousResearch/hermes-agent/issues/97630) [Feature]: Add bounded recovery retry for reasoning-stream repetition loops `type/feature` `comp/agent` `comp/cron` `P3`
- [#97616](https://github.com/NousResearch/hermes-agent/issues/97616) Desktop: GPU process crash on AMD/Mesa — disableHardwareAcceleration() insufficient + intermittent launcher race `type/bug` `P2` `needs-repro` `comp/desktop`
- [#97579](https://github.com/NousResearch/hermes-agent/issues/97579) [Bug]: `hermes config set` silently persists the session's model selection over the `model:` block on ANY config write (bricks profile if provider unresolvable) `type/bug` `comp/cli` `area/config` `P2`
- [#97611](https://github.com/NousResearch/hermes-agent/issues/97611) [Feature]: Prefer non-visual information sources before launching a browser `type/feature` `comp/tools` `tool/browser` `tool/web`
- [#97586](https://github.com/NousResearch/hermes-agent/issues/97586) [Bug]: Multiple Gateway support. `type/bug` `comp/cli` `comp/gateway` `area/config`
- [#97568](https://github.com/NousResearch/hermes-agent/issues/97568) is_zeroed_state_db() returns False for a 0-byte file, so total data loss is silent `type/bug` `comp/agent` `P1` `sweeper:risk-session-state`
- [#97569](https://github.com/NousResearch/hermes-agent/issues/97569) Mid-turn messages bypass sender labelling when busy_input_mode is interrupt or steer `type/bug` `comp/gateway` `platform/telegram` `P2`
- [#97575](https://github.com/NousResearch/hermes-agent/issues/97575) Native crash (0xc0000005 in MSVCP140.dll) on Windows when processing incoming Telegram voice messages `type/bug` `comp/gateway` `tool/tts` `platform/telegram`
- [#97557](https://github.com/NousResearch/hermes-agent/issues/97557) [Bug]: Explicit deliver: "telegram:<chat_id>:<thread_id>" cron target ignored — output lands in a different, unrelated session in the same chat `type/bug` `comp/gateway` `comp/cron` `platform/telegram`
- [#97548](https://github.com/NousResearch/hermes-agent/issues/97548) [Bug]: Same provider and model work smoothly in Codex but intermittently stall in Hermes `type/bug` `comp/agent` `provider/openai` `P2`
- [#97474](https://github.com/NousResearch/hermes-agent/issues/97474) Feature: Native Google AI Studio (Gemini/Nano Banana) image-generation backend using GOOGLE_API_KEY directly `type/feature` `comp/plugins` `tool/vision` `provider/gemini`
- [#97488](https://github.com/NousResearch/hermes-agent/issues/97488) [Bug]: Lean compaction ceiling timeout leaves detached workers and can falsely auto-reset sessions `type/bug` `comp/agent` `comp/gateway` `P2`

#### 🔒 Closed Issues
- [#38193](https://github.com/NousResearch/hermes-agent/issues/38193) [Bug]: OAuth-backed MCP server permanently deadlocks after keepalive reconnect: auth-flow generator's lock is released cross-task.
- [#81051](https://github.com/NousResearch/hermes-agent/issues/81051) OAuth-backed MCP connections get permanently stuck ("parked") after a teardown lock race in mcp SDK 1.26.0 — only a full gateway restart recovers
- [#49543](https://github.com/NousResearch/hermes-agent/issues/49543) OAuth MCP servers (e.g. Honeycomb) drop from active toolset mid-session — RuntimeError: The current task is not holding this lock + 120s call hangs
- [#93562](https://github.com/NousResearch/hermes-agent/issues/93562) MCP OAuth servers: 'hermes mcp test'/'login' fail with empty error (SDK lock deadlock); patches/50-mcp-oauth-lock-fix.sh not applied
- [#84132](https://github.com/NousResearch/hermes-agent/issues/84132) OAuth HTTP MCP server parks forever after auth-flow lock corruption — cached provider reused across reconnects never recovers

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 90,354 · **Open issues:** 7,153 · **Last push:** <1h ago

Today, there were no new releases for vLLM. Significant developments included the merging of several critical pull requests, notably the bug fix addressing the binding of RayExecutorV2 TCPStore before publishing its port, and enhancements to improve performance by pinning CPU tensors before non-blocking H2D in three matrix multiplication paths. Additionally, improvements were made in supporting hybrid DCP prefix caching for MooncakeStore. However, there were notable new issues reported, including a regression in version 0.28 leading to crashes with the GlmMoeDsa model and an alarming bug where version 0.28.0 consumes all host memory at startup, a problem not observed in version 0.27.1.

#### ✅ Merged PRs
- [#52367](https://github.com/vllm-project/vllm/pull/52367) [CI/Build] Use file rendezvous for UniProc loader fixtures
- [#50969](https://github.com/vllm-project/vllm/pull/50969) [BugFix] Bind RayExecutorV2 TCPStore before publishing its port
- [#50858](https://github.com/vllm-project/vllm/pull/50858) [BugFix] Disable TP for Qwen3-Omni audio encoder when heads % TP != 0
- [#54292](https://github.com/vllm-project/vllm/pull/54292) [Perf] Pin CPU tensors before non_blocking H2D in three MM paths
- [#52047](https://github.com/vllm-project/vllm/pull/52047) [Bugfix][AMD] Annotate draft KV cache groups on the hybrid grouping path
- [#51358](https://github.com/vllm-project/vllm/pull/51358) [Bugfix][Mooncake] Save exact Mamba boundary states
- [#53507](https://github.com/vllm-project/vllm/pull/53507) [Bugfix][Models] Register sleep-managed runtime buffers
- [#53324](https://github.com/vllm-project/vllm/pull/53324) [KV Connector] Support MooncakeStore with hybrid DCP prefix caching
- [#54295](https://github.com/vllm-project/vllm/pull/54295) [Perf][MLA Sparse] Pin req_id_per_token before non_blocking H2D on XPU and ROCm
- [#53528](https://github.com/vllm-project/vllm/pull/53528) [Rust Frontend] Take the raw buffer in mm tensor lowering when possible
- [#53253](https://github.com/vllm-project/vllm/pull/53253) [Bugfix][Distributed] Gate cross-node MNNVL custom all-reduce by group capability
- [#53008](https://github.com/vllm-project/vllm/pull/53008) [Bugfix] Fix ncclCommQueryProperties heap overflow with NCCL >= 2.31
- [#36255](https://github.com/vllm-project/vllm/pull/36255) fix: improve token_ids_cpu swap to copy only valid indices
- [#48584](https://github.com/vllm-project/vllm/pull/48584) [Rust Frontend] Add support for `truncate_prompt_tokens` and `truncation_side`
- [#54271](https://github.com/vllm-project/vllm/pull/54271) [CI][Test] Deflake the rms_norm scaling-property assertions
- [#53293](https://github.com/vllm-project/vllm/pull/53293) [Bugfix] Set breakable graph env before Ray actor import
- [#52849](https://github.com/vllm-project/vllm/pull/52849) [ROCm][PERF] Enable AITER PA gluon decode for MiniMax-M3 MTP and dense layers
- [#54263](https://github.com/vllm-project/vllm/pull/54263) [CI/Build] Add advisory PR title format check
- [#54239](https://github.com/vllm-project/vllm/pull/54239) [Model] Support speculative decoding method for PLaMo3
- [#54249](https://github.com/vllm-project/vllm/pull/54249) [ROCm][CI] Fix test_ray_v2_executor
- [#54152](https://github.com/vllm-project/vllm/pull/54152) [Bugfix] Keep the Moondream3 MoE all-reduce out of the fused-path try
- [#53333](https://github.com/vllm-project/vllm/pull/53333) [Core][KV Connector] Start async KV loads after the forward launch when no sync loads are scheduled
- [#54246](https://github.com/vllm-project/vllm/pull/54246) [Bugfix][MRV2] Release layer-bound KV cache memory in shutdown()
- [#54247](https://github.com/vllm-project/vllm/pull/54247) [Bugfix][ROCm] Pre-allocate `wvSplitKrc` static workspaces before KV init
- [#54079](https://github.com/vllm-project/vllm/pull/54079) [Mypy] Fix mypy typing for model interfaces and H/I models
- [#51321](https://github.com/vllm-project/vllm/pull/51321) [Rust Frontend] Optimize SSE streaming hot path
- [#53409](https://github.com/vllm-project/vllm/pull/53409) [Bugfix] Fix int32 token offset overflow in fused SiLU block quant
- [#53141](https://github.com/vllm-project/vllm/pull/53141) [ROCm] remove VLLM_ROCM_USE_AITER_FP4_ASM_GEMM environment variable; make w4a4 use the preshuffle triton+asm by default
- [#52736](https://github.com/vllm-project/vllm/pull/52736) update quark docs to include online quantization
- [#54168](https://github.com/vllm-project/vllm/pull/54168) [Kimi-K3][Kernel] Optimize the low-M fused latent MoE tail
- [#53412](https://github.com/vllm-project/vllm/pull/53412) [Perf] Split xdrope_positions H2D copy into per-row transfers
- [#47625](https://github.com/vllm-project/vllm/pull/47625) [MM][CG] Support ViT full CUDA graph for Idefics3 and SmolVLM
- [#53097](https://github.com/vllm-project/vllm/pull/53097) [ROCm][Quantization][MOE] Enable fused shared experts for block-quantized FP8
- [#54148](https://github.com/vllm-project/vllm/pull/54148) [Rust Frontend] Reduce copy in auxiliary frame resolution
- [#54203](https://github.com/vllm-project/vllm/pull/54203) [XPU]bump up vllm_xpu_kernels to 0.1.14.1
- [#54167](https://github.com/vllm-project/vllm/pull/54167) [Kimi-K3][Bugfix] Fix low-latency GEMM fallback initialization
- [#52168](https://github.com/vllm-project/vllm/pull/52168) [Bugfix] Restore multimodal support on the plain "vllm" throughput backend
- [#53594](https://github.com/vllm-project/vllm/pull/53594) [ROCm][CI] Warm up the RLHF dev server before the pause/resume timing checks
- [#52545](https://github.com/vllm-project/vllm/pull/52545) [Bugfix][CI/Build] Fail closed when selected precompiled CUDA variant is unavailable

#### 🐛 New Issues
- [#54153](https://github.com/vllm-project/vllm/issues/54153) [Bug]: an installed-but-unusable optional dependency (boto3) aborts model architecture resolution for every model `bug` 💬7
- [#54300](https://github.com/vllm-project/vllm/issues/54300) [Bug]: [Regression 0.27→0.28]: GlmMoeDsa (GLM-5.3) + decode-context-parallel crashes: 'FlashInferMLASparseMetadata' object has no attribute 'decode' — with or without spec decode, both runners, both cudagraph modes `bug` `quantization` `glm` 💬5
- [#54215](https://github.com/vllm-project/vllm/issues/54215) [Bug]: AsyncLLM streaming session appends later chunk tokens to the caller's prompt list in place `bug` 💬5
- [#54237](https://github.com/vllm-project/vllm/issues/54237) [Bug]: 0.28.0 consume all host memory at start and freeze (OK with 0.27.1) `bug` `quantization` 💬4
- [#54252](https://github.com/vllm-project/vllm/issues/54252) compressed-tensors config collapses GDN linear-attention token distinctness (qwen4exp/hybrid MoE models produce garbage; identical weights clean under fp8 config) `rocm` `quantization` 💬3
- [#54259](https://github.com/vllm-project/vllm/issues/54259) [Bug]: intermittent ShmRingBuffer race on cold boot with TP=2 over Ray (sm_121 / unified memory) 💬2
- [#54225](https://github.com/vllm-project/vllm/issues/54225) [Bug]: FlashInfer attention backend causes CUDA illegal memory access on sm_120 with NVFP4 + fp8 KV cache; crashes on a 16-token request; TRITON_ATTN unaffected `quantization` 💬2
- [#54206](https://github.com/vllm-project/vllm/issues/54206) [Bug]: Quark FSE compatibility check matches `shared_expert_gate`, silently disabling fused shared experts on Qwen MoE MXFP4 `rocm` `qwen` `quantization` 💬2
- [#54173](https://github.com/vllm-project/vllm/issues/54173) [Bug] Qwen3.8-Flash-Next: CUBLAS_STATUS_INTERNAL_ERROR / illegal memory access in GDN path with prefix caching on GB10 (sm_121); --no-async-scheduling does not help `quantization` `kv-cache-manager` 💬2
- [#54150](https://github.com/vllm-project/vllm/issues/54150) [Bug]: GLM-5.3-Flash — ModelOpt NVFP4 checkpoints emit invalid UTF-8 byte tokens on SM120, while a compressed-tensors NVFP4 of the same model is clean `glm` 💬1
- [#54308](https://github.com/vllm-project/vllm/issues/54308) GDN / Qwen3-Next decode degenerates to a single repeated token on non-Blackwell GPUs with an fp32 SSM cache `rocm` 💬1
- [#54197](https://github.com/vllm-project/vllm/issues/54197) [Bug] GlmMoeDsa (V2 model runner) cannot use torch.compile — silent fallback, then fullgraph failures when force-enabled `torch.compile` 💬1
- [#54304](https://github.com/vllm-project/vllm/issues/54304) [Bug]: Quantized embeddings fail on many model types `bug` `quantization` 💬1
- [#54193](https://github.com/vllm-project/vllm/issues/54193) [Bug]: KV offloading connector: finished-request store watermark includes a KV slot never written by any forward pass (silent cross-request poisoning with offload_prompt_only=False) 💬1
- [#54243](https://github.com/vllm-project/vllm/issues/54243) [Bug]: batch-invariant M buckets collapse under `torch.compile` (0.28.0) `bug` `torch.compile` 💬1
- [#54219](https://github.com/vllm-project/vllm/issues/54219) [Bug]: fp8e4nv data type error on A100 `bug` `quantization` 💬1
- [#54184](https://github.com/vllm-project/vllm/issues/54184) [Bug]: Engine liveness monitor can SIGTERM a healthy EngineCore after spurious sentinel readiness `bug` `quantization` 💬1
- [#54170](https://github.com/vllm-project/vllm/issues/54170) [Bug]: Video pruning crashes during inference on Qwen3.5 9B AWQ with `AttributeError: video_pruning_method` on v0.27.1 `bug` `quantization` 💬1
- [#54305](https://github.com/vllm-project/vllm/issues/54305) [Bug]: Direct DCP A2A crashes on GLM sparse-MLA strided output `glm`
- [#54273](https://github.com/vllm-project/vllm/issues/54273) [Bug]: Kimi-K3 parsers miss channel terminators - tool calls silently dropped, message terminator leaked into streamed content `kimi` `k3`
- [#54281](https://github.com/vllm-project/vllm/issues/54281) [Bug]: VLLM_DEEPEP_V2_ALLOW_HYBRID_MODE declares a default of True but resolves to False `bug`
- [#54260](https://github.com/vllm-project/vllm/issues/54260) [Bug]: PP + async scheduling + spec decode: output_token_ids trim only runs on the last PP rank, desynchronizing the ranks until NCCL deadlocks
- [#54256](https://github.com/vllm-project/vllm/issues/54256) [Bug]: Gemma4 parser drops tool calls when transitioning out of reasoning channel (<channel|>call:...)
- [#54229](https://github.com/vllm-project/vllm/issues/54229) [RFC]: Privacy-safe runtime incident snapshots for fatal EngineCore failures `quantization`
- [#54227](https://github.com/vllm-project/vllm/issues/54227) vllm bench serve with a fixed --seed against a default server can end up benchmarking the prefix cache (measured: TPOT -34%, TTFT 49x, throughput 2.32x on one cell) `kv-cache-manager`
- [#54224](https://github.com/vllm-project/vllm/issues/54224) Responses API input_item_parsing only backfills id when the key is absent, not when it is explicitly null
- [#54207](https://github.com/vllm-project/vllm/issues/54207) [Feature]: Add explicit cache IDs for reusable multimodal and inference state `feature request` `multi-modality`
- [#54200](https://github.com/vllm-project/vllm/issues/54200) vLLM lacks Blackwell unified-memory paging telemetry — reference mapping exists in dgx-spark-monitoring
- [#54199](https://github.com/vllm-project/vllm/issues/54199) [Bug]: Illegal memory access in precopy_mamba_align_fused_kernel when a prefix-cache-hit request is admitted while the donor request's lifecycle overlaps (hybrid GDN, align mode, equal block sizes — not the #53142 divisor mismatch)
- [#54178](https://github.com/vllm-project/vllm/issues/54178) [Bug]: Qwen3.8-Flash-Next-FP8 checkpoint cannot load with tp_size=2/4/8 — MoE gate+up weight output_size (80) not divisible by FP8 block_n=128 `bug` `quantization`
- [#54195](https://github.com/vllm-project/vllm/issues/54195) [Bug]: Out-of-vocab stop_token_ids crashes the whole engine on backends with bounds-checked index kernels (single-request DoS)
- [#54189](https://github.com/vllm-project/vllm/issues/54189) NVFP4 MoE silently folds an uninitialised activation scale for weight-only checkpoints (zeroes every expert) `quantization`
- [#54187](https://github.com/vllm-project/vllm/issues/54187) Use `dtype` instead of deprecated `torch_dtype` for transformers >= 4.56
- [#54179](https://github.com/vllm-project/vllm/issues/54179) [Bug]: FlashMLA sparse prefill assertion failed on H20 with DeepSeek-V4-Flash + DSpark + long context (v0.26.0 regression) `bug` `deepseek` `quantization` `DSv4`

#### 🔒 Closed Issues
- [#44280](https://github.com/vllm-project/vllm/issues/44280) [Roadmap] Rust Frontend Feature Parity
- [#35848](https://github.com/vllm-project/vllm/issues/35848) [RFC]: Revamp Ray Distributed Executor Backend (from Ray team)
- [#35104](https://github.com/vllm-project/vllm/issues/35104) [Bug]: V1 engine workers die after idle period (SystemError: PyCFunction / EngineDeadError) — TP=2, multiprocessing
- [#39010](https://github.com/vllm-project/vllm/issues/39010) [Bug]: Hang During CUDA Graph Capture on ROCM in 0.19
- [#39573](https://github.com/vllm-project/vllm/issues/39573) [Bug]: Thinking token budget not enforced with MTP speculative decoding (works without MTP)
- [#37167](https://github.com/vllm-project/vllm/issues/37167) [Bug]: responses API, combining of message and tool call
- [#38077](https://github.com/vllm-project/vllm/issues/38077) [Bug]: Qwen3.5-9B answer !!!!!!!!!
- [#39884](https://github.com/vllm-project/vllm/issues/39884) [RFC]: Automatic test target determination for CI
- [#52907](https://github.com/vllm-project/vllm/issues/52907) Multi-node startup deadlock in in_the_same_node_as() gloo barrier at 2 nodes x TP-16 with the Ray executor (regression between 0.26.1rc1.dev78 and 0.26.1rc1.dev148)
- [#39231](https://github.com/vllm-project/vllm/issues/39231) [Bug]: Qwen3.5 Text Only Model (Qwen3_5ForCausalLM)
- [#40182](https://github.com/vllm-project/vllm/issues/40182) [RFC]: Unified ModelOpt Quantization in vLLM
- [#40781](https://github.com/vllm-project/vllm/issues/40781) [Feature]: vllm support audio otel tracing?
- [#35920](https://github.com/vllm-project/vllm/issues/35920) [Bug]: UMA Memory Profiling Misattributes OS Page Cache and Fails in Concurrent Deployments
- [#40587](https://github.com/vllm-project/vllm/issues/40587) [Bug]: `+rotary_embedding` error with DeepSeek-V3.2-NVFP4
- [#40953](https://github.com/vllm-project/vllm/issues/40953) [RFC]: Refactor PassManager infrastructure
- [#35767](https://github.com/vllm-project/vllm/issues/35767) [Enhancement]: Qwen3-ASR realtime endpoint produces degraded output — stateless segments, no cross-segment context, raw format leaks
- [#35992](https://github.com/vllm-project/vllm/issues/35992) [Doc]: Inconsistent hash notation in Prefix Caching "Time 5" diagram
- [#36880](https://github.com/vllm-project/vllm/issues/36880) [Bug]: Qwen1 use_logn_attn may be unsupported in vLLM
- [#37242](https://github.com/vllm-project/vllm/issues/37242) [Community] RTX 5090 (Blackwell sm_120) + WSL2 2.7.0: CUDA graphs work — benchmarks + full config
- [#39678](https://github.com/vllm-project/vllm/issues/39678) [RFC]: Async parallel startup for EngineCore processes in DP/TP scenarios
- [#40318](https://github.com/vllm-project/vllm/issues/40318) [Bug]: Mistral3 text-only startup fails when text_config.architectures is None
- [#40617](https://github.com/vllm-project/vllm/issues/40617) [vllm IR]: Remove `QuantFP8` in favour of direct `ir.ops` calls
- [#40937](https://github.com/vllm-project/vllm/issues/40937) [Bug]: profile_cudagraph_memory() ignores GPU memory clamp on sliced GPUs (HAMi/MIG/MPS) — --gpu-memory-utilization is inert with AutoRound INT4 + fp8_e5m2 KV + FlashInfer + CUDA graphs
- [#40954](https://github.com/vllm-project/vllm/issues/40954) [Usage]: We are using vLLM version 0.19.1. When attempting to run DeepSeek-V4-Flash with a 32k context window across eight RTX 4090 GPUs, we encountered an error indicating that the `transformers` library needed to be updated. We then updated the library using the command `uv pip install --no-cache-dir git+https://github.com/huggingface/transformers.git`, but the error persisted as shown below:
- [#53912](https://github.com/vllm-project/vllm/issues/53912) [Bug]: prefix caching + MTP still corrupts output on hybrid Mamba/GDN models in v0.28.0 (#43559 closed but unfixed)
- [#41022](https://github.com/vllm-project/vllm/issues/41022) [Bug] Online FP8 quantization ignores logical_widths on MergedColumnParallelLinear
- [#41081](https://github.com/vllm-project/vllm/issues/41081) [Bug]: vLLM only prints access logs, not performance statistics logs (v0.1.dev15830+g8d599d76a with deepseek-V4-flash)
- [#41172](https://github.com/vllm-project/vllm/issues/41172) [Bug]: Mimo v2.5 model loading fails from s3/remote locations
- [#41291](https://github.com/vllm-project/vllm/issues/41291) [Refactor] Merge `select_gpt_oss_mxfp4_moe_backend` and `select_mxfp4_moe_backend`
- [#54252](https://github.com/vllm-project/vllm/issues/54252) compressed-tensors config collapses GDN linear-attention token distinctness (qwen4exp/hybrid MoE models produce garbage; identical weights clean under fp8 config)
- [#38898](https://github.com/vllm-project/vllm/issues/38898) [Feature]: Mamba `DS` conv state layout | Support speculative decoding with `mamba_cache_mode=align`
- [#40765](https://github.com/vllm-project/vllm/issues/40765) [Bug]: runai_streamer loads both Ministral consolidated and HF sharded safetensors
- [#40919](https://github.com/vllm-project/vllm/issues/40919) [Bug]: RMSNormGated input_guard breaks torch.compile dynamo tracing
- [#41073](https://github.com/vllm-project/vllm/issues/41073) [Bug]: Failed to apply MiniCPMVProcessor
- [#41117](https://github.com/vllm-project/vllm/issues/41117) [Feature]: unsupported architecture
- [#41146](https://github.com/vllm-project/vllm/issues/41146) [Feature]: aiohttp tracing leaks image urls and cannot be disabled
- [#41204](https://github.com/vllm-project/vllm/issues/41204) [RFC]: Expert Weight Backup for Elastic EP
- [#41211](https://github.com/vllm-project/vllm/issues/41211) [Bug]: MoRIIO does not support heterogenous TP
- [#40978](https://github.com/vllm-project/vllm/issues/40978) [Bug]: Enhance KV cache load error handling with detailed error codes / information
- [#40988](https://github.com/vllm-project/vllm/issues/40988) [bug/perf] V4-Pro hangs ~60 min in post-shard-load weight materialization without --safetensors-load-strategy prefetch on EXT4
- [#40999](https://github.com/vllm-project/vllm/issues/40999) [Feature][FP8] Opt-in `ParallelLMHead` quantization in legacy `Fp8Config` (parity with AWQ-Marlin / GPTQ-Marlin / cpu_wna16)
- [#53390](https://github.com/vllm-project/vllm/issues/53390) [Bug]: int32 token-offset overflow in silu_and_mul_per_block_quant (act_quant fusion) — illegal memory access above ~2^31/(2*intermediate_size) batched tokens
- [#40748](https://github.com/vllm-project/vllm/issues/40748) [Feature]: Support per-deployment leader election ID and pod-level scoping for LoRA adapters in multi-deployment namespace setups
- [#40791](https://github.com/vllm-project/vllm/issues/40791) [Bug]: Workspace allocation failure when combining Decode Context Parallelism (DCP) with EAGLE3 speculative decoding
- [#40822](https://github.com/vllm-project/vllm/issues/40822) [RFC]: [RL - WIP] Checkpoint -> Kernel Format transition graph
- [#40885](https://github.com/vllm-project/vllm/issues/40885) [Bug]: Qwen3-VL-MoE NVFP4 checkpoint (un-BMM'd per-expert format) fails load with IndexError: Dimension out of range
- [#41001](https://github.com/vllm-project/vllm/issues/41001) [Doc]: Embed Agent Friendly Code Score Badge
- [#41014](https://github.com/vllm-project/vllm/issues/41014) [Feature]: FP8 inference fails on Ampere GPUs (RTX A6000, SM 8.6) due to unsupported default fp8e4nv (E4M3FN) format
- [#41112](https://github.com/vllm-project/vllm/issues/41112) [Bug]: Qwen3_next a/b are not contiguous
- [#41174](https://github.com/vllm-project/vllm/issues/41174) [Bug]: `sharded_state` load fails for FP8 models: `_filter_subtensors` drops `q_scale/k_scale/v_scale/prob_scale` parameters
- [#41264](https://github.com/vllm-project/vllm/issues/41264) [Feature]: Update default Python version in pre-built docker images
- [#41267](https://github.com/vllm-project/vllm/issues/41267) [Performance]: Encode performance of vLLM
- [#41287](https://github.com/vllm-project/vllm/issues/41287) [Bug]: V1 + Ray multi-node pipeline parallel `KeyError` at KV-cache init due to missing `global_rank` update
- [#52544](https://github.com/vllm-project/vllm/issues/52544) [Bug]: VLLM_USE_PRECOMPILED can fall back across CUDA variants without compatibility validation
- [#54178](https://github.com/vllm-project/vllm/issues/54178) [Bug]: Qwen3.8-Flash-Next-FP8 checkpoint cannot load with tp_size=2/4/8 — MoE gate+up weight output_size (80) not divisible by FP8 block_n=128

### SGLang (`sgl-project/sglang`)

**Stars:** 32,641 · **Open issues:** 4,992 · **Last push:** <1h ago

On August 29, 2026, there were no new releases for SGLang, but several significant pull requests were merged, notably the rebase for qwen 3.8 and enhancements including a causal convolution layer for the ascend kda backend. Other key updates included a fix for wrongly causal-masked bidirectional attention and documentation improvements related to supported features on NPU. Notable new issues include a bug report indicating that the fast_topk_v2 function can silently return incorrect top-k sets under specific conditions, raising concerns about its reliability. Additionally, a critical bug was reported related to long prefill operations exhausting unified memory, leading to silent worker failures without tracebacks.

#### ✅ Merged PRs
- [#35758](https://github.com/sgl-project/sglang/pull/35758) qwen 3.8 rebase
- [#35021](https://github.com/sgl-project/sglang/pull/35021) [NPU] add causal conv1d for ascend kda backend
- [#36950](https://github.com/sgl-project/sglang/pull/36950) [Docs] Restore the AIME25 label so GLM-5.3 FP8 and BF16 scores render again
- [#36940](https://github.com/sgl-project/sglang/pull/36940) [NPU] [DOC] udpate supported features on NPU
- [#35434](https://github.com/sgl-project/sglang/pull/35434) [CPU] Fix wrongly causal-masked bidirectional attention
- [#36778](https://github.com/sgl-project/sglang/pull/36778) fix: report the real backend for non-CUDA CI registrations in /rerun-test
- [#36476](https://github.com/sgl-project/sglang/pull/36476) [NPU] [DOC] update npu best practice
- [#36934](https://github.com/sgl-project/sglang/pull/36934) [Fix] Drop the duplicated DSpark draft sample_block call
- [#35453](https://github.com/sgl-project/sglang/pull/35453) [Fix] Support LSE on the RadixAttention extra-kwargs graph path
- [#36929](https://github.com/sgl-project/sglang/pull/36929) Update CUDA 13.4 image to flashinfer 0.6.18rc10, cutedsl 4.8. Fix sgl- wheel unpinning
- [#36828](https://github.com/sgl-project/sglang/pull/36828) [AMD] Update v4 amd cookbook 0828
- [#36852](https://github.com/sgl-project/sglang/pull/36852) [ROCm][Bugfix] Use token-level KV indices in the aiter ASM context-prefill gather
- [#33576](https://github.com/sgl-project/sglang/pull/33576) [AMD] Add Work-Centric (Lean) Attention: a persistent-CTA decode kernel for long-context serving
- [#36704](https://github.com/sgl-project/sglang/pull/36704) Refactor JIT kernel and expert-pack directory layout
- [#36641](https://github.com/sgl-project/sglang/pull/36641) [diffusion] Keep Cosmos3 Nano resident on 96 GB GPUs
- [#34318](https://github.com/sgl-project/sglang/pull/34318) [Kernel] Route large SM90 row/column-scaled FP8 GEMMs to Torch
- [#36887](https://github.com/sgl-project/sglang/pull/36887) [CI] Slim JIT kernel unit tests
- [#36885](https://github.com/sgl-project/sglang/pull/36885) fix(kda): stop remapping the -1 padding sentinel onto a live mamba slot
- [#36921](https://github.com/sgl-project/sglang/pull/36921) fix: KT's last MoE layer stops deferring experts again
- [#36912](https://github.com/sgl-project/sglang/pull/36912) Use kernel build node for cu134 image
- [#36909](https://github.com/sgl-project/sglang/pull/36909) [mem_cache] Carry `swa_evicted_seqlen` into `SWARadixCache.cache_unfinished_req`
- [#29718](https://github.com/sgl-project/sglang/pull/29718) [MoE] Make simulated expert routing support DP>1, and fuse into one triton kernel
- [#36914](https://github.com/sgl-project/sglang/pull/36914) [Fix] Lazy-import aiter in DSv4 paged_decode to unbreak CPU CI
- [#36754](https://github.com/sgl-project/sglang/pull/36754) [Diffusion] Rollout API: off-loop serialization, spliced msgpack, timing headers, opt-in uint8 video
- [#36094](https://github.com/sgl-project/sglang/pull/36094) [AMD][DSV4] perf: retune decode split-K heuristic for MI355X
- [#36657](https://github.com/sgl-project/sglang/pull/36657) [Blackwell] Reserve SMs for DeepGEMM MegaMoE grid barriers
- [#36884](https://github.com/sgl-project/sglang/pull/36884) fix(glm): mirror should_use_dp_reduce_scatterv() into the MHC communicator
- [#36638](https://github.com/sgl-project/sglang/pull/36638) Fix KeyError on batch requests whose state is freed before it is read
- [#36892](https://github.com/sgl-project/sglang/pull/36892) [AMD] release rocm10 image for gfx1250 from amd_helios
- [#36738](https://github.com/sgl-project/sglang/pull/36738) [HiCache] Fence load-back behind the forward stream
- [#36382](https://github.com/sgl-project/sglang/pull/36382) [HiCache] Key storage prefetch by the request namespace
- [#36792](https://github.com/sgl-project/sglang/pull/36792) config: the forwarding slots go; the dispatcher calls the family directly
- [#36791](https://github.com/sgl-project/sglang/pull/36791) config: three cache and pool readers take the bags
- [#36790](https://github.com/sgl-project/sglang/pull/36790) config: the derived parallel widths are computed from the leaves
- [#36789](https://github.com/sgl-project/sglang/pull/36789) config: the resolution pipeline moves out of the record
- [#36673](https://github.com/sgl-project/sglang/pull/36673) [CI] Read subprocess stdout on a background thread to avoid EOF deadlock
- [#34702](https://github.com/sgl-project/sglang/pull/34702) fix(lora): build the MoE LoRA align JIT kernel on ROCm
- [#36379](https://github.com/sgl-project/sglang/pull/36379) fix(lora): build the MoE LoRA align JIT kernel on ROCm
- [#36425](https://github.com/sgl-project/sglang/pull/36425) HiCache: avoid unnecessary all-reduce in check_prefetch_progress
- [#36583](https://github.com/sgl-project/sglang/pull/36583) Fix KV cache pool sized far too small when weight-loading memory is still referenced
- [#36433](https://github.com/sgl-project/sglang/pull/36433) [NPU] Update sgl-kernel-npu version
- [#36775](https://github.com/sgl-project/sglang/pull/36775) CI: split JIT kernel unit tests into two partitions
- [#36434](https://github.com/sgl-project/sglang/pull/36434) [AMD] Add ROCm 10 (gfx942 / gfx950) release images
- [#36827](https://github.com/sgl-project/sglang/pull/36827) [Docs] Add GLM-5.3 cookbook
- [#36862](https://github.com/sgl-project/sglang/pull/36862) [Fix] Route the Mooncake MoE A2A backend through Kimi K3's EP-A2A / SP-MoE fast path
- [#31320](https://github.com/sgl-project/sglang/pull/31320) [NPU] [Diffusion] support distributed inference pipeline for GLM-Image
- [#35613](https://github.com/sgl-project/sglang/pull/35613) [diffusion] refactor: scope model-specific API parameters
- [#36849](https://github.com/sgl-project/sglang/pull/36849) cp multi bs
- [#36806](https://github.com/sgl-project/sglang/pull/36806) fix(qsa): route exact SM120 to FlashInfer sparse decode
- [#35677](https://github.com/sgl-project/sglang/pull/35677) fix(cpu): skip GPU JIT MoE top-k on CPU
- [#36759](https://github.com/sgl-project/sglang/pull/36759) bugfix for index_fill_ on NPU
- [#35290](https://github.com/sgl-project/sglang/pull/35290) [XPU] Lazily import tvm_ffi-dependent all_reduce kernel in minimax_m2
- [#36603](https://github.com/sgl-project/sglang/pull/36603) fix(kimi-k3): preserve dense ModelSlim MLA weights
- [#34690](https://github.com/sgl-project/sglang/pull/34690) [BugFix][VLM] keep Qwen3-VL MoE inference deepstack order
- [#35931](https://github.com/sgl-project/sglang/pull/35931) [HiCache] Reject load-back specs that claim nodes pinned by an in-flight load-back
- [#36521](https://github.com/sgl-project/sglang/pull/36521) [diffusion][kernel] avoid 4D scale-shift autotuning
- [#36504](https://github.com/sgl-project/sglang/pull/36504) [diffusion][kernel] support transposed residual-gate add
- [#36227](https://github.com/sgl-project/sglang/pull/36227) [HiCache] Retry L3 storage prefetch after a missed attempt
- [#36386](https://github.com/sgl-project/sglang/pull/36386) [HiCache] Heal the storage existence cache on a hybrid prefetch discard
- [#36667](https://github.com/sgl-project/sglang/pull/36667) chore: make qwen4-main-squashed pre-commit clean
- [#36823](https://github.com/sgl-project/sglang/pull/36823) [Docs] Rename Tencent cookbook page titles to "Hy4 preview" / "Hy3 preview"
- [#35341](https://github.com/sgl-project/sglang/pull/35341) [AMD][Fix] Qwen3.5: make empty-batch guard tuple-aware on fused AR+quant path
- [#36308](https://github.com/sgl-project/sglang/pull/36308) [AMD][CI] Limit HiCache MGSM eval concurrency on ROCm
- [#36808](https://github.com/sgl-project/sglang/pull/36808) [Cookbook] Hy4-Preview follow-ups: runtime-accurate recipes + released-model info
- [#36758](https://github.com/sgl-project/sglang/pull/36758) [AMD] Qwen3.5 ASM FMHA chunked-prefill context attention
- [#36804](https://github.com/sgl-project/sglang/pull/36804) [Cookbook] Add the Hy4-Preview model page (Tencent)
- [#29133](https://github.com/sgl-project/sglang/pull/29133) [PD] Fix MORI-IO ABORT bootstrap message handling
- [#36794](https://github.com/sgl-project/sglang/pull/36794) fix(deps): pin compressed-tensors to 0.18.0
- [#36684](https://github.com/sgl-project/sglang/pull/36684) [AMD] Enable deepseek-v4 topk_transform v2 kernel
- [#35628](https://github.com/sgl-project/sglang/pull/35628) [AMD] Increase gfx950 DSA model indexer topk_transform kernel occupancy
- [#36784](https://github.com/sgl-project/sglang/pull/36784) [Docs] Feature GLM-5.3-Flash in the popular-models banner
- [#36626](https://github.com/sgl-project/sglang/pull/36626) [Fix] Resolve tool argument types through top-level anyOf/oneOf/allOf
- [#36658](https://github.com/sgl-project/sglang/pull/36658) [multimodal_gen] fix: make tail_attn_meta CUDA-graph capturable
- [#36772](https://github.com/sgl-project/sglang/pull/36772) fix(qwen4): accept qwen_sparse_attention layer type alias
- [#36726](https://github.com/sgl-project/sglang/pull/36726) [Diffusion] Fix the five unit tests failing on main

#### 🐛 New Issues
- [#36807](https://github.com/sgl-project/sglang/issues/36807) [Bug] fast_topk_v2 can silently return wrong top-k sets when a radix threshold bucket exceeds its 4096-entry candidate buffer (k=2048, long rows) 💬4
- [#36941](https://github.com/sgl-project/sglang/issues/36941) [GB10] Long prefill (>40k tokens) exhausts unified memory and silently kills the worker rank — no traceback, no OOM record; cross-stack control passes at 54k 💬2
- [#36889](https://github.com/sgl-project/sglang/issues/36889) [DFLASH] Mamba state cache silently caps effective concurrency on hybrid-KDA models — 5 state slots/request, info-level log only (+75% throughput hidden behind one flag) 💬2
- [#36830](https://github.com/sgl-project/sglang/issues/36830) [Bug] GLM-5.3-Flash cannot use FP8 KV cache: `index_kpool > 1` excludes `flashmla_kv`, and no CUDA DSA backend supports bf16-query x fp8-KV 💬2
- [#36820](https://github.com/sgl-project/sglang/issues/36820) [Feature] Sparse destination-aware MoE dispatch to skip inactive EP ranks 💬2
- [#36840](https://github.com/sgl-project/sglang/issues/36840) TBO unreachable for GLM-5.3-Flash (DSA+mamba hybrid): silent --enable-dp-attention reset + missing Glm5NextDecoderLayer strategy 💬2
- [#36802](https://github.com/sgl-project/sglang/issues/36802) [Bug] GLM-5.3-Flash: server hangs during warmup when `--enable-dp-attention` is on (idle forward blocks in dsv4 gemm, requests never scheduled) 💬2
- [#36938](https://github.com/sgl-project/sglang/issues/36938) [Bug] Prefill input logprobs are served from the wrong request when a batch member is retracted or finished 💬1
- [#36935](https://github.com/sgl-project/sglang/issues/36935) [Prefix Cache / Hybrid] Branch reuse silently collapses under LRU pressure when (kv_pool_tokens / chunked_prefill_size) > max_mamba_cache_size 💬1
- [#36880](https://github.com/sgl-project/sglang/issues/36880) [Bug] KDA Triton backend remaps padding slot -1 to the last mamba pool slot, which is allocatable — padded rows can read and write a live request's SSM state (GLM-5.3-Flash, PR #36507) 💬1
- [#36879](https://github.com/sgl-project/sglang/issues/36879) [Bug] GLM-5.3-Flash --enable-dp-attention: MHC communicator is missing two should_use_dp_reduce_scatterv() branches — MoE partials are never combined, and fixing only that arms a dense-MLP double reduction (PR #36507) 💬1
- [#36876](https://github.com/sgl-project/sglang/issues/36876) Zombie requests after client disconnect: abort_request fails to set to_finish during batch-transition window 💬1
- [#36858](https://github.com/sgl-project/sglang/issues/36858) [Feature] Optimize the configuration and server startup of sgl-model-gateway 💬1
- [#36796](https://github.com/sgl-project/sglang/issues/36796) [Performance] Qwen4Exp decode on DGX Spark (SM121): QSA/PLE/GDN kernel time dominates; requests for SM121 tuning (QSA gather, GDN KDA backends, torch.compile+CUDA graph) 💬1
- [#36943](https://github.com/sgl-project/sglang/issues/36943) [Bug] --enable-symm-mem: all TP schedulers deadlock silently in ncclCommWindowRegister (blocking UDS recvmsg, no timeout) when the symmetric-memory pool grows at runtime
- [#36886](https://github.com/sgl-project/sglang/issues/36886) [Bug] DCP on GLM-5.3-Flash (norope MLA): virtual locs used raw against per-rank KV buffers — index-K OOB crash + state-dependent quality corruption past max_total_num_tokens
- [#36906](https://github.com/sgl-project/sglang/issues/36906) [Bug] GLM-5.3-Flash crashes at startup under pipeline parallelism — KeyError: 'residual'
- [#36894](https://github.com/sgl-project/sglang/issues/36894) [Bug] /unload_lora_adapter permanently deadlocks the scheduler after parallel-sampling traffic (n > 1)
- [#36877](https://github.com/sgl-project/sglang/issues/36877) [Bug] Anthropic /v1/messages: rolling cache_control breakpoints (Claude Code default behavior) invalidate prefix cache every few turns
- [#36859](https://github.com/sgl-project/sglang/issues/36859) [Bug] Kimi-K3 output abnormal when high pressure
- [#36855](https://github.com/sgl-project/sglang/issues/36855) [Bug] skip_radix_cache_insert livelocks and OOM-kills the scheduler on chunked prefill (reachable from any client via bootstrap_host="2.2.2.2")
- [#36853](https://github.com/sgl-project/sglang/issues/36853) [Bug][Diffusion] Qwen-Image native SP=4 is killed by host OOM while loading DiT on 4×48GB GPUs
- [#36841](https://github.com/sgl-project/sglang/issues/36841) Use `dtype` instead of deprecated `torch_dtype` for transformers >= 4.56
- [#36829](https://github.com/sgl-project/sglang/issues/36829) GLM-5.3-Flash (glm5_next, mHC) EAGLE3/MTP: fused_eh_norm width mismatch with mHC-flattened aux hidden; acceptance ~1.0 after workarounds
- [#36822](https://github.com/sgl-project/sglang/issues/36822) [Bug] GPTQ Marlin MoE fails or produces NaNs with BF16 and tensor parallelism
- [#36797](https://github.com/sgl-project/sglang/issues/36797) [Performance] NVFP4 KV cache regresses Qwen4Exp decode ~29% on DGX Spark (SM121) vs fp8_e4m3 — consider arch-gating the default

#### 🔒 Closed Issues
- [#21703](https://github.com/sgl-project/sglang/issues/21703) [Roadmap] Prefill-Decode Disaggregation Roadmap (2026 Q2)
- [#30158](https://github.com/sgl-project/sglang/issues/30158) [Bug] Compatibility issues with PP and Hicache causing errors
- [#29524](https://github.com/sgl-project/sglang/issues/29524) [Feature] JetSpec Speculative Decoding
- [#29372](https://github.com/sgl-project/sglang/issues/29372) [Bug] sglang open cp metric 1->8 hard to see
- [#32331](https://github.com/sgl-project/sglang/issues/32331) [Bug] UnifiedRadixCache prefill crash: TypeError: object of type 'NoneType' has no len() in full_component.commit_hicache_transfer (LOAD_BACK), high concurrency on B200
- [#29597](https://github.com/sgl-project/sglang/issues/29597) [Bug] Integer overflow in merge_state_v2
- [#32176](https://github.com/sgl-project/sglang/issues/32176) [Bug] HiCache loadback 后 GLM-5.2 EAGLE acceptance 静默坍塌
- [#29301](https://github.com/sgl-project/sglang/issues/29301) Redundant `cu_seqlens_k_new` argument in FA3 backend — unused when `k_new`/`v_new` are not passed
- [#27206](https://github.com/sgl-project/sglang/issues/27206) [Bug] cached_tokens in prompt_tokens_details is off-by-one on Ascend NPU when page_size=128 and speculative decoding is disabled
- [#22092](https://github.com/sgl-project/sglang/issues/22092) [Feature] Parity with CUDA - AMD when will it support DWDP based parallelism too
- [#35779](https://github.com/sgl-project/sglang/issues/35779) [Bug] MiniMax-M2 CPU inference fails when processing requests
- [#31600](https://github.com/sgl-project/sglang/issues/31600) [Bug] glm-5.2-w4afp8 +l2(hicache)+l3(mooncake) kvcache dram cluster ,cache hit is slower than prefill+ decoder
- [#36480](https://github.com/sgl-project/sglang/issues/36480) [Bug] Qwen3.5 greedy outputs differ A LOT between v0.5.12 and v0.5.17.dev for the same multimodal request; v0.5.17.dev36 not self-consistent behind router
- [#29683](https://github.com/sgl-project/sglang/issues/29683) [AMD] Qwen3-30B-A3B BF16 MoE on MI355X (gfx950): unstable/low GSM8K accuracy + intermittent decode GPU mem fault (TP=8)
- [#29573](https://github.com/sgl-project/sglang/issues/29573) [Feature] RFC: Paper Reproduction of LMetric Multiplication Scheduling in SGLang Gateway
- [#29650](https://github.com/sgl-project/sglang/issues/29650) [Bug] latest-runtime image still missing 'distro' dependency after #25817
- [#29604](https://github.com/sgl-project/sglang/issues/29604) [Feature] Why SGLang doesn't check the input requests' model
- [#29605](https://github.com/sgl-project/sglang/issues/29605) [Bug] Integer overflow in topk_sigmoid and topk_softmax
- [#29606](https://github.com/sgl-project/sglang/issues/29606) [Bug] Integer overflow in concat_mla_absorb_q
- [#29602](https://github.com/sgl-project/sglang/issues/29602) [Bug] Integer overflow in causal_conv1d_fwd
- [#29603](https://github.com/sgl-project/sglang/issues/29603) [Bug] Integer overflow in fused_qk_norm_rope
- [#30399](https://github.com/sgl-project/sglang/issues/30399) [Bug] PD disaggregation: GB200 Deepseek v4 Pro DeepGEMM grid sync timeout
- [#36377](https://github.com/sgl-project/sglang/issues/36377) [Bug] Crash in hicache
- [#30057](https://github.com/sgl-project/sglang/issues/30057) [Bug] HiCache L3 partial prefetch can restore DSA/NSA KV pages without matching INDEXER sidecar pages

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 126,129 · **Open issues:** 2,272 · **Last push:** 5h ago

On August 29, 2026, the llama.cpp project released several new versions including b10679, which added a `--tensor-read-lazy` option to the benchmarking tool, and b10678, which reduced the number of graph splits for the Qwen4exp model. Noteworthy merged features included Vulkan optimizations to address missing view-alias dependencies and the addition of hoisting support in shaders. However, the day was marked by a significant new issue: the Qwen4exp model is experiencing severe decode slowdowns beyond a 1,000 context length on specific hardware, raising concerns among users.

#### 🚀 New Releases
- [b10679](https://github.com/ggml-org/llama.cpp/releases/tag/b10679) b10679
- [b10678](https://github.com/ggml-org/llama.cpp/releases/tag/b10678) b10678
- [b10677](https://github.com/ggml-org/llama.cpp/releases/tag/b10677) b10677
- [b10676](https://github.com/ggml-org/llama.cpp/releases/tag/b10676) b10676
- [b10675](https://github.com/ggml-org/llama.cpp/releases/tag/b10675) b10675
- [b10673](https://github.com/ggml-org/llama.cpp/releases/tag/b10673) b10673
- [b10672](https://github.com/ggml-org/llama.cpp/releases/tag/b10672) b10672
- [b10670](https://github.com/ggml-org/llama.cpp/releases/tag/b10670) b10670
- [b10669](https://github.com/ggml-org/llama.cpp/releases/tag/b10669) b10669
- [b10668](https://github.com/ggml-org/llama.cpp/releases/tag/b10668) b10668

#### ✅ Merged PRs
- [#27880](https://github.com/ggml-org/llama.cpp/pull/27880) model: qwen4exp: reduce number of graph splits
- [#27824](https://github.com/ggml-org/llama.cpp/pull/27824) metal : add fa-vec tunings for M4 Pro
- [#27903](https://github.com/ggml-org/llama.cpp/pull/27903) snapdragon: python SDK setup (Windows)
- [#26689](https://github.com/ggml-org/llama.cpp/pull/26689) SYCL: TILE for quantized KV decode
- [#27881](https://github.com/ggml-org/llama.cpp/pull/27881) bench: add --tensor-read-lazy
- [#27812](https://github.com/ggml-org/llama.cpp/pull/27812) vulkan: fix missing view-alias dependencies in ggml_vk_graph_optimize
- [#26132](https://github.com/ggml-org/llama.cpp/pull/26132) ggml-cpu : fix conv_transpose_2d for multiple batches
- [#26686](https://github.com/ggml-org/llama.cpp/pull/26686) Vulkan: add hoisting support for row IDs and expert count in shaders
- [#27877](https://github.com/ggml-org/llama.cpp/pull/27877) context : disable non-fused GDN and LID ops
- [#27875](https://github.com/ggml-org/llama.cpp/pull/27875) metal : add fa-vec tunings for M4
- [#27843](https://github.com/ggml-org/llama.cpp/pull/27843) OpenVINO: Update OV to 2026.3.1, whisper.cpp support, Qwen3.5 on NPU, and new ops
- [#27869](https://github.com/ggml-org/llama.cpp/pull/27869) convert: prevent ndarray conversion in LazyChunkedTensor
- [#27863](https://github.com/ggml-org/llama.cpp/pull/27863) metal : add fa-vec tunings for M3 Max, M5 and M5 Pro
- [#27468](https://github.com/ggml-org/llama.cpp/pull/27468) sycl: bind the f16 KV cache in place for the oneDNN SDPA path
- [#27755](https://github.com/ggml-org/llama.cpp/pull/27755) tests : run test-save-load-state across all architectures

#### 🐛 New Issues
- [#27856](https://github.com/ggml-org/llama.cpp/issues/27856) qwen4exp (Qwen3.8-Flash-Next): severe decode slowdown beyond ~1K context on HIP / gfx1151 (Strix Halo) 💬4
- [#27865](https://github.com/ggml-org/llama.cpp/issues/27865) ROCm RPC server crashes on TOP_K with "invalid configuration argument" during distributed Qwen3.8-Flash-Next inference `bug-unconfirmed` 💬4
- [#27886](https://github.com/ggml-org/llama.cpp/issues/27886) Eval bug: Qwen3.8-Flash-Next vision issue `bug-unconfirmed` 💬3
- [#27894](https://github.com/ggml-org/llama.cpp/issues/27894) Hybrid SSM/attention models (qwen35moe) leak a fixed ~126 MiB RSS per request `bug-unconfirmed` 💬3
- [#27862](https://github.com/ggml-org/llama.cpp/issues/27862) Eval bug: Dflash2: vision support is still broken `bug-unconfirmed` 💬1
- [#27888](https://github.com/ggml-org/llama.cpp/issues/27888) Eval bug: SYCL multi-GPU crash with Intel Arc Pro B50 + Arc A770 `bug-unconfirmed` 💬1
- [#27910](https://github.com/ggml-org/llama.cpp/issues/27910) CUDA inference on Qwen3.8-27B Q6_K causes RTX 5090 display loss and NVIDIA GSP/full-chip reset on Linux 💬1
- [#27893](https://github.com/ggml-org/llama.cpp/issues/27893) Feature Request: Ignore sampling CLI arg for Anthropic endpoint (local Claude Code) `enhancement` 💬1
- [#27871](https://github.com/ggml-org/llama.cpp/issues/27871) Eval bug: qwen4exp (Qwen3.8-Flash-Next) aborts with CUDA `invalid argument` at the native 262144 depth on GB10 (sm_121) 💬1
- [#27873](https://github.com/ggml-org/llama.cpp/issues/27873) Misc. bug: excessive padding of multiplied tensors in vulkan causes "Requested preallocation size is too large" errors `bug-unconfirmed` 💬1
- [#27859](https://github.com/ggml-org/llama.cpp/issues/27859) Eval bug: grammar parse fail on array length test on exactly 2000 chars `bug-unconfirmed` 💬1
- [#27852](https://github.com/ggml-org/llama.cpp/issues/27852) Eval bug: ngram-cache speculative decoding keeps per-slot context cache across requests (begin() is a no-op) — acceptance 86% → 11%, slower than no speculation 💬1
- [#27854](https://github.com/ggml-org/llama.cpp/issues/27854) Research: TRUE REAL SPEED IN LAYER ACCESS PARALELISM `research 🔬` 💬1
- [#27923](https://github.com/ggml-org/llama.cpp/issues/27923) Misc. bug: ggml_cuda_init at boot races nvidia-uvm readiness — silent CPU fallback for systemd services (no retry, /health stays OK, --ngl silently ignored)
- [#27922](https://github.com/ggml-org/llama.cpp/issues/27922) Feature Request: Support GLM5.3 (flash) `enhancement`
- [#27918](https://github.com/ggml-org/llama.cpp/issues/27918) CUDA: VMM pool 32 GB VA cap blocks full offload of >32 GB models on unified-memory GPUs (GB10/GH200) — hangs instead of failing
- [#27911](https://github.com/ggml-org/llama.cpp/issues/27911) CUDA error "invalid configuration argument" in ggml_cuda_op_rms_norm_fused under concurrent batching (qwen4_exp / Qwen3.8-Flash-Next, sm_70, np=10)
- [#27905](https://github.com/ggml-org/llama.cpp/issues/27905) Eval bug: Flash-attention fatal error (fattn.cu) over RPC with certain KV cache quant types `bug-unconfirmed`
- [#27904](https://github.com/ggml-org/llama.cpp/issues/27904) Make test-backend-ops perf --output csv usefull
- [#27901](https://github.com/ggml-org/llama.cpp/issues/27901) Eval bug: rms_norm_f32 exceeds the CUDA gridDim.y limit (65535) at n_ctx 262144
- [#27899](https://github.com/ggml-org/llama.cpp/issues/27899) Eval bug: NaN logits on CUDA for specific k-quant mixes of a Laguna (118B MoE) model; CPU clean; test-backend-ops MUL_MAT_ID passes
- [#27892](https://github.com/ggml-org/llama.cpp/issues/27892) Eval bug: CLIP graph uses unsupported operators by the backend ( IM2COL: type = f32, ne = [4096 16 16 1]) `bug-unconfirmed`
- [#27876](https://github.com/ggml-org/llama.cpp/issues/27876) Eval bug: ling 3 tiny (BailingMoeV3 architecture) repeating slashes `bug-unconfirmed`
- [#27872](https://github.com/ggml-org/llama.cpp/issues/27872) Compile bug: --fit silently aborts when --cpu-moe/--n-cpu-moe sets tensor_buft_overrides, leading to OOM on compute buffer allocation `bug-unconfirmed`
- [#27857](https://github.com/ggml-org/llama.cpp/issues/27857) Misc. bug: Remote preset.ini fetched by -hf is rendered into child argv unfiltered (mcp-servers-json → command execution) `bug-unconfirmed`
- [#27853](https://github.com/ggml-org/llama.cpp/issues/27853) SUPER SPEED REAL TRUE RAM PARALELISM FOR LAYER ACCESS

#### 🔒 Closed Issues
- [#26558](https://github.com/ggml-org/llama.cpp/issues/26558) Eval bug: llama-server hard crash (cublasSgemm INVALID_VALUE) with --spec-type draft-mtp under KV-cache saturation
- [#27850](https://github.com/ggml-org/llama.cpp/issues/27850) speculative: combined --spec-type draft-mtp + external draft (-md) crashes at init — shared cparams forces LLAMA_CONTEXT_TYPE_MTP onto the draft-model context
- [#26108](https://github.com/ggml-org/llama.cpp/issues/26108) Eval bug: Failed to read image when using DFlash (Qwen3.6 27B)
- [#27894](https://github.com/ggml-org/llama.cpp/issues/27894) Hybrid SSM/attention models (qwen35moe) leak a fixed ~126 MiB RSS per request
- [#27862](https://github.com/ggml-org/llama.cpp/issues/27862) Eval bug: Dflash2: vision support is still broken
- [#27844](https://github.com/ggml-org/llama.cpp/issues/27844) Misc. bug: Virus alert (Trojan:Win32/Wacatac.C!ml) from llama-batched-bench-impl.dll in llama-b10665-bin-win-cuda-13.3-x64.zip
- [#27805](https://github.com/ggml-org/llama.cpp/issues/27805) Eval bug: Vulkan graph optimizer silently corrupts output for models with view-aliased state
- [#27553](https://github.com/ggml-org/llama.cpp/issues/27553) Vulkan dense prefill on gfx1151 (RDNA3 iGPU): ~1.8x from a larger K-quant int-mmq tile
- [#27854](https://github.com/ggml-org/llama.cpp/issues/27854) Research: TRUE REAL SPEED IN LAYER ACCESS PARALELISM
- [#27853](https://github.com/ggml-org/llama.cpp/issues/27853) SUPER SPEED REAL TRUE RAM PARALELISM FOR LAYER ACCESS

### Ollama (`ollama/ollama`)

**Stars:** 179,673 · **Open issues:** 3,828 · **Last push:** <1h ago

Today was relatively quiet for Ollama, with no new releases or merged pull requests reported. However, the team acknowledged several emerging issues, including concerns that the Ollama Qwen3.8-27B model may not utilize reasoning capabilities effectively (#18091) and a significant memory leak issue in the llama-server's operation on macOS, where memory usage increases linearly with request count (#18106). Additionally, users have raised concerns regarding the GPU detection malfunction in Ollama version 0.33.1 (#18095) and performance slowdowns when executing models using the Ollama Python library (#18090). These discussions suggest an active user community seeking improvements and troubleshooting for current limitations.

#### 🐛 New Issues
- [#18091](https://github.com/ollama/ollama/issues/18091) Does Ollama Qwen3.8-27B uses reasoning "xhigh"? `feature request` 💬7
- [#18099](https://github.com/ollama/ollama/issues/18099) llama-server malloc heap grows with request volume on macOS/Metal: 6.5 GB paged to swap while KV cache stays resident (0.32.15, Apple Silicon) 💬4
- [#18095](https://github.com/ollama/ollama/issues/18095) Ollama 0.33.1: --load-mode none forced on all models, GPU detection broken 💬4
- [#18090](https://github.com/ollama/ollama/issues/18090) Ollama model execution while using the ollama python library slowing down even when separate GPU memory allocations are ther `bug` 💬2
- [#18085](https://github.com/ollama/ollama/issues/18085) "Vulkan + R7 M440, full offload → gibberish" `bug` 💬1
- [#18106](https://github.com/ollama/ollama/issues/18106) llama-server runner leaks host memory linearly with request count (~5-12 MiB/req, invisible in RSS)
- [#18103](https://github.com/ollama/ollama/issues/18103) Claude Desktop toggle in Ollama's Apps screen doesn't persist
- [#18102](https://github.com/ollama/ollama/issues/18102) support .litertlm models in windows `feature request`
- [#18100](https://github.com/ollama/ollama/issues/18100) [FR] Adding LlamaCPP parameters GUI `feature request`
- [#18097](https://github.com/ollama/ollama/issues/18097) Support inference architectures with persistent learned/recurrent memory state (TITAN, ATLAS, etc) `feature request`
- [#18096](https://github.com/ollama/ollama/issues/18096) Qwen3.8 Flash-Next CUDA/NVIDIA support for DGX Spark
- [#18094](https://github.com/ollama/ollama/issues/18094) gemma3:12b: structured output (`format`) truncates prematurely on double-quoted terms in input `bug`

#### 🔒 Closed Issues
- [#18095](https://github.com/ollama/ollama/issues/18095) Ollama 0.33.1: --load-mode none forced on all models, GPU detection broken
- [#18007](https://github.com/ollama/ollama/issues/18007) Qwen3.8 truncates when generating Solana mint address (So1111...11112)
- [#18076](https://github.com/ollama/ollama/issues/18076) v0.33.1 Broke vision supoort on MLX
- [#18096](https://github.com/ollama/ollama/issues/18096) Qwen3.8 Flash-Next CUDA/NVIDIA support for DGX Spark

### LiteLLM (`BerriAI/litellm`)

**Stars:** 57,505 · **Open issues:** 4,854 · **Last push:** 1h ago

Today, LiteLLM released version v1.100.0-dev.2, which is signed with a cryptographic key for enhanced security, allowing users to verify Docker images effectively. Among the significant merged pull requests, the team raised the RestrictedPython floor to version 8.5, added a new resource for litellm_jwt_key_mapping in Terraform, and introduced a coverage-enforcing CI gate against the latest OpenAPI spec. Notably, a bug was reported regarding the generation of team model access at request time, drawing attention to the need for improved consistency in access validation across related API endpoints. Additionally, various fixes were implemented to enhance the functionality of streaming, routing, and UI components, making today's updates particularly impactful for the LiteLLM community.

#### 🚀 New Releases
- [v1.100.0-dev.2](https://github.com/BerriAI/litellm/releases/tag/v1.100.0-dev.2) v1.100.0-dev.2

#### ✅ Merged PRs
- [#38715](https://github.com/BerriAI/litellm/pull/38715) chore(deps): raise RestrictedPython floor to 8.5
- [#38713](https://github.com/BerriAI/litellm/pull/38713) fix(guardrails): record post_call scans on native /v1/messages streams
- [#38714](https://github.com/BerriAI/litellm/pull/38714) feat(terraform): add litellm_jwt_key_mapping resource
- [#38720](https://github.com/BerriAI/litellm/pull/38720) fix(terraform): refresh jwt key mapping allowlist entries now that the resource is merged
- [#38710](https://github.com/BerriAI/litellm/pull/38710) feat(terraform): coverage-enforcing CI gate against the latest OpenAPI spec
- [#38695](https://github.com/BerriAI/litellm/pull/38695) fix(ci): fall back to github.token when the GH_TOKEN secret is unset in the Together sync workflow
- [#38717](https://github.com/BerriAI/litellm/pull/38717) test(shadow_eval): configure the anthropic sdk judge in the funnel-seed test
- [#38158](https://github.com/BerriAI/litellm/pull/38158) feat(terraform): resource and data source parity with the community provider
- [#38553](https://github.com/BerriAI/litellm/pull/38553) test: add guardrail e2e coverage (presidio masking, bedrock post and during call, moderation on messages)
- [#38588](https://github.com/BerriAI/litellm/pull/38588) feat(ui): make provider logos readable in dark mode
- [#38696](https://github.com/BerriAI/litellm/pull/38696) fix(streaming): report response_cost and Anthropic citations from stream_chunk_builder
- [#38698](https://github.com/BerriAI/litellm/pull/38698) fix(router): tier-pinned reasoning_effort supersedes client effort carriers
- [#38593](https://github.com/BerriAI/litellm/pull/38593) fix(gpt-5): stop forwarding temperature and top_p to reasoning models that reject them
- [#38631](https://github.com/BerriAI/litellm/pull/38631) feat(shadow_eval): measure both arms' cost so a job reports what the router would have saved
- [#38686](https://github.com/BerriAI/litellm/pull/38686) fix(proxy): reset a key's budget-window counters on spend reset
- [#38701](https://github.com/BerriAI/litellm/pull/38701) fix(shadow-eval): validate Anthropic SDK judge credentials
- [#38700](https://github.com/BerriAI/litellm/pull/38700) fix(spend): remove the proxy-wide autorouter savings baseline override
- [#38704](https://github.com/BerriAI/litellm/pull/38704) chore: drop stray learnings.md workflow note from CLAUDE.md
- [#38482](https://github.com/BerriAI/litellm/pull/38482) feat(ui): run the Lite preset's medium and complex tiers at their documented efforts
- [#38690](https://github.com/BerriAI/litellm/pull/38690) fix(router): scrub fallback stamp keys in place and strip them at the proxy boundary
- [#38622](https://github.com/BerriAI/litellm/pull/38622) fix(router): drop a tier param the routed target cannot take
- [#34940](https://github.com/BerriAI/litellm/pull/34940) feat(guardrails): add Lakera v2 skip-message honoring and advisory (inject_system_message) mode
- [#38687](https://github.com/BerriAI/litellm/pull/38687) fix(proxy): use default_factory for _BudgetCascade.rollover_caps
- [#38066](https://github.com/BerriAI/litellm/pull/38066) test(litellm_utils_tests): give the aiohttp transport tests teeth
- [#38692](https://github.com/BerriAI/litellm/pull/38692) fix(model_info): map supports_parallel_function_calling into ModelInfo
- [#38697](https://github.com/BerriAI/litellm/pull/38697) test(e2e): cover Together reasoning_effort=none, json_schema, and cache-read pricing
- [#38694](https://github.com/BerriAI/litellm/pull/38694) feat(models): sync together_ai model registry
- [#38656](https://github.com/BerriAI/litellm/pull/38656) fix(streaming): preserve provider model for cost calculation
- [#38605](https://github.com/BerriAI/litellm/pull/38605) feat(auto_router): write and preview the classifier prompt an edited tier set sends
- [#38691](https://github.com/BerriAI/litellm/pull/38691) fix(proxy): price the /v1/messages cost header by the deployment model, not the client alias
- [#38644](https://github.com/BerriAI/litellm/pull/38644) chore(techdebt): type new signatures and drop slop comments from the last 24h
- [#38653](https://github.com/BerriAI/litellm/pull/38653) fix(tests): drain the global logging worker in RAG aquery billing tests
- [#38488](https://github.com/BerriAI/litellm/pull/38488) fix: enforce MCP toolsets attached to a team, org, or internal user
- [#38677](https://github.com/BerriAI/litellm/pull/38677) test: close mutation-testing gaps in container, skills and openai-like config factories
- [#38642](https://github.com/BerriAI/litellm/pull/38642) fix(logging): preserve null end user in callbacks
- [#38560](https://github.com/BerriAI/litellm/pull/38560) fix(registry): add Gemini Omni 1.1 Flash, xAI grok-imagine image models, Mistral cache-read pricing, GLM 5.3 Flash + Kimi K2.7 Code entries
- [#38581](https://github.com/BerriAI/litellm/pull/38581) fix(ui): keep the usage filter visible when the caller's scope is empty
- [#38615](https://github.com/BerriAI/litellm/pull/38615) fix(model_prices): add bedrock_mantle gpt-5.5/5.4 272K tiers, align sol with AWS invoice
- [#38609](https://github.com/BerriAI/litellm/pull/38609) feat(a2a): semantic search over the agent registry via GET /v1/agents?query and an agent_search MCP tool
- [#38633](https://github.com/BerriAI/litellm/pull/38633) refactor(ui): type search tool params from the generated schema
- [#38636](https://github.com/BerriAI/litellm/pull/38636) feat(proxy): add paginated GET /public/v1/model_hub
- [#38640](https://github.com/BerriAI/litellm/pull/38640) test(e2e): unskip four tests whose blockers no longer hold
- [#38637](https://github.com/BerriAI/litellm/pull/38637) test: refresh the suites that drifted from langfuse and OpenAI's retired Assistants API
- [#38657](https://github.com/BerriAI/litellm/pull/38657) fix(proxy): count tools, system, and Anthropic image and document blocks in the count_tokens fallback (internal copy of #36671)
- [#38603](https://github.com/BerriAI/litellm/pull/38603) feat(ui): edit the auto-router tier set with custom classifier-defined tiers
- [#38662](https://github.com/BerriAI/litellm/pull/38662) fix(proxy): let llm_api virtual keys read /model_group/info
- [#38134](https://github.com/BerriAI/litellm/pull/38134) feat(spend): report prompt caching savings as total and gateway-attributed
- [#38304](https://github.com/BerriAI/litellm/pull/38304) test: fix staging CI regressions from #38182, #38144, #38265, #37962, and #37969
- [#38598](https://github.com/BerriAI/litellm/pull/38598) fix(complexity_router): route client housekeeping calls to the cheapest tier
- [#38618](https://github.com/BerriAI/litellm/pull/38618) fix(anthropic): handle per-level reasoning_effort flags without supports_reasoning
- [#38616](https://github.com/BerriAI/litellm/pull/38616) chore(ci): promote internal staging to main
- [#38624](https://github.com/BerriAI/litellm/pull/38624) fix(exceptions): keep a refused connection an APIConnectionError
- [#38625](https://github.com/BerriAI/litellm/pull/38625) fix(anthropic): drop and self-heal empty thinking blocks on /v1/messages
- [#36514](https://github.com/BerriAI/litellm/pull/36514) feat(proxy): opt-in flags to require rpm/tpm on model and project create
- [#38601](https://github.com/BerriAI/litellm/pull/38601) fix(ui): one-click theme toggle and matching Docs/Blog styling in the top bar

#### 🐛 New Issues
- [#38629](https://github.com/BerriAI/litellm/issues/38629) [Bug]: team model access is enforced at request time but not at /key/generate, and /key/update validates the pre-update model list 💬2
- [#38689](https://github.com/BerriAI/litellm/issues/38689) [Bug]: Intermittent ~16.7s time-to-first-byte (TTFB) on streaming Anthropic /v1/messages requests, not reproducible against Bedrock directly `bug` `proxy` `llm translation` `claude code` 💬1
- [#38666](https://github.com/BerriAI/litellm/issues/38666) supports_openai_prompt_cache_breakpoint's provider gate excludes bedrock_mantle, which genuinely supports the same dialect `llm translation` 💬1
- [#38659](https://github.com/BerriAI/litellm/issues/38659) [Bug]: cohere.embed-english-v3 missing from Bedrock embedding param-support dispatch `bug` `proxy` `llm translation` 💬1
- [#38634](https://github.com/BerriAI/litellm/issues/38634) [Bug]: Editing max_budget/budget_duration (UI or /key/update) leaves existing budget_limits window stale — auth still enforces the old limit (429) 💬1
- [#38718](https://github.com/BerriAI/litellm/issues/38718) cache_control_injection_points on /v1/messages lands as a stray top-level field instead of on a message, for long multi-turn tool-calling conversations (regression/gap in #31778) `llm translation`
- [#38709](https://github.com/BerriAI/litellm/issues/38709) numbers not showing
- [#38679](https://github.com/BerriAI/litellm/issues/38679) cache_control breakpoint census ignores `tools` on the chat/completions path, so injection can exceed Anthropic's 4-block cap `llm translation` `claude code`
- [#38674](https://github.com/BerriAI/litellm/issues/38674) [Bug]: Token usage logged as 0 for Responses API WebSocket mode (_aresponses_websocket), breaking cost tracking for Agent CLI traffic
- [#38667](https://github.com/BerriAI/litellm/issues/38667) [Bug]: Key regenerate/update/delete fail with "cannot execute UPDATE in a read-only transaction" when DATABASE_URL_READ_REPLICA is set (access-group sync runs UPDATE via query_raw) `proxy`
- [#38663](https://github.com/BerriAI/litellm/issues/38663) fix(gemini): do not inject temperature for Gemini 3 models when omitted `llm translation`
- [#38661](https://github.com/BerriAI/litellm/issues/38661) [Bug]: `encoding_format` cannot be suppressed when proxying embeddings through `custom_llm_provider="openai"`, breaking any 2-hop LiteLLM→LiteLLM chain `bug` `proxy` `llm translation`
- [#38660](https://github.com/BerriAI/litellm/issues/38660) [Bug]: custom_prometheus_metadata_labels are never populated on the failure and fallback metrics `proxy`
- [#38649](https://github.com/BerriAI/litellm/issues/38649) [Feature]: Pass-through background parameter for gpt-image-2 (OpenAI & Azure) `enhancement` `proxy` `llm translation`
- [#38648](https://github.com/BerriAI/litellm/issues/38648) [Bug]: Vertex AI / Gemini 3+ silently drops google_search grounding when request contains function tool `bug` `proxy` `llm translation`
- [#38635](https://github.com/BerriAI/litellm/issues/38635) [Bug]: gpt-live-transcribe is not accessible through lite llm `bug` `llm translation`
- [#38632](https://github.com/BerriAI/litellm/issues/38632) [Feature]: add PZERO as a JSON-configured OpenAI-compatible provider `llm translation` `SDK`
- [#38628](https://github.com/BerriAI/litellm/issues/38628) [Bug]: SearXNG search adapter turns HTTP 429/503 into a successful empty result

#### 🔒 Closed Issues
- [#11929](https://github.com/BerriAI/litellm/issues/11929) [Bug]: Usage Dashboard: Two Issues with Spend Reporting and Failed Request Attribution
- [#27944](https://github.com/BerriAI/litellm/issues/27944) [Bug]: Anthropic batch costs always 0 — transform_file_content_request routes msgbatch_* IDs to wrong endpoint
- [#34301](https://github.com/BerriAI/litellm/issues/34301) [Bug]: Openai 5.x reasoning models don't validate temperature
- [#34396](https://github.com/BerriAI/litellm/issues/34396) fix(guardrails): Lakera v2 guardrail ignores skip_system_message_in_guardrail / skip_tool_message_in_guardrail
- [#26184](https://github.com/BerriAI/litellm/issues/26184) [Bug]: xAI image model `grok-imagine-image` not supported via /images endpoints (no healthy deployments)
- [#26879](https://github.com/BerriAI/litellm/issues/26879) [Bug] Multiple system messages sent to non-OpenAI providers when using Responses API with developer role messages
- [#27821](https://github.com/BerriAI/litellm/issues/27821) [Bug]: Fireworks AI rejects tool schemas with "default": null and "title" in JSON Schema properties — drop_params doesn't sanitize nested schemas
- [#28391](https://github.com/BerriAI/litellm/issues/28391) MCP Gateway: tools/list crashes with cancel-scope RuntimeError + schema columns drop on restart
- [#38608](https://github.com/BerriAI/litellm/issues/38608) Add "GLM-5.3-Flash" in "model_prices_and_context_window.json"
- [#33171](https://github.com/BerriAI/litellm/issues/33171) [Bug]: Azure gpt-5.5 / gpt-5.6 reject any non-default temperature; litellm forwards it and drop_params cannot strip it
- [#36552](https://github.com/BerriAI/litellm/issues/36552) [Feature]: Lakera v2 guardrail: advisory mode (inject_system_message) instead of block/monitor on flagged content
- [#38578](https://github.com/BerriAI/litellm/issues/38578) [Bug]: /v1/messages prices Together deployments by their alias, so a size marker in the alias bills the size bucket
- [#36604](https://github.com/BerriAI/litellm/issues/36604) [Bug]: token_counter rejects Anthropic-native `image` content blocks — /v1/messages/count_tokens 500s and the context-window pre-call check is silently skipped
- [#37829](https://github.com/BerriAI/litellm/issues/37829) [Feature] Semantic Agent Discovery — Search API + MCP Tool

### Unsloth (`unslothai/unsloth`)

**Stars:** 75,083 · **Open issues:** 1,385 · **Last push:** <1h ago

On August 29, 2026, Unsloth did not release any new versions, but several significant updates were merged, enhancing various aspects of the Studio and agent functionalities. Noteworthy changes include the addition of ordered arguments to MCP server settings and the repair of custom TTS endpoint tests, alongside improvements for managing long chats with media attachments. A few new features were introduced, such as the request for a Korean translation of documentation and a feature to support setting directories for studio files. Among the newly reported issues, a critical bug was highlighted regarding checkpoint compaction, which triggers unnecessarily and affects agent threads. Overall, the day focused on feature enhancements and critical bug fixes rather than new releases.

#### ✅ Merged PRs
- [#9796](https://github.com/unslothai/unsloth/pull/9796) Studio: render escaped inline math in lists
- [#9905](https://github.com/unslothai/unsloth/pull/9905) fix(studio): repair custom TTS endpoint test and playback
- [#9892](https://github.com/unslothai/unsloth/pull/9892) studio: list route-aware models through the openai api
- [#9943](https://github.com/unslothai/unsloth/pull/9943) studio: add ordered arguments to mcp server settings
- [#8794](https://github.com/unslothai/unsloth/pull/8794) Studio: add Higgs, MOSS, and MiniMax audio models
- [#9476](https://github.com/unslothai/unsloth/pull/9476) Studio: compact long chats with media attachments
- [#9881](https://github.com/unslothai/unsloth/pull/9881) Studio: accept the loadConfig keys a saved system-prompt preset already sends
- [#8844](https://github.com/unslothai/unsloth/pull/8844) Fix shell selection for remote Agents commands
- [#9923](https://github.com/unslothai/unsloth/pull/9923) studio: drop the schema bounds llama.cpp's grammar engine cannot compile
- [#9940](https://github.com/unslothai/unsloth/pull/9940) Pin Claude Code to the loaded model's real context window
- [#8738](https://github.com/unslothai/unsloth/pull/8738) Clarify tool approval copy
- [#9891](https://github.com/unslothai/unsloth/pull/9891) Studio: add the OpenAI videos API on /v1/videos
- [#9911](https://github.com/unslothai/unsloth/pull/9911) fix(studio): coalesce concurrent keyless-settings reads to stop SQLite thundering herd
- [#9913](https://github.com/unslothai/unsloth/pull/9913) rag: avoid re-hashing linked-folder snapshots in start_ingestion
- [#9170](https://github.com/unslothai/unsloth/pull/9170) studio: fix lan address actions and launch bind reporting
- [#8879](https://github.com/unslothai/unsloth/pull/8879) add a setting that tells the model the current date
- [#9642](https://github.com/unslothai/unsloth/pull/9642) fix model hub recent sorting for on-device models
- [#9893](https://github.com/unslothai/unsloth/pull/9893) studio: honor a cancelled load inside the llama-server health wait
- [#9871](https://github.com/unslothai/unsloth/pull/9871) strip inherited claude provider routing from local agent launches
- [#9918](https://github.com/unslothai/unsloth/pull/9918) Fix sidebar footer width and context menu radius
- [#8768](https://github.com/unslothai/unsloth/pull/8768) studio: serve installed mlx models through the openai-compatible api
- [#9896](https://github.com/unslothai/unsloth/pull/9896) studio: fix streamed tool calls in studio api monitor
- [#9894](https://github.com/unslothai/unsloth/pull/9894) studio: tell users when a canvas is blocked by the network access setting
- [#9903](https://github.com/unslothai/unsloth/pull/9903) studio: accept shared youtube clipboard links

#### 🐛 New Issues
- [#9930](https://github.com/unslothai/unsloth/issues/9930) [Feature] Add Korean translation for Unsloth documentation `feature request` 💬4
- [#9926](https://github.com/unslothai/unsloth/issues/9926) [Bug] Error when trying to train a model using an AMD RX 7600 `feature request` `bug` 💬3
- [#9934](https://github.com/unslothai/unsloth/issues/9934) a lot of writes to studio.db `feature request` `bug` 💬1
- [#9915](https://github.com/unslothai/unsloth/issues/9915) [Unsloth Bug] Checkpoint compaction fires EVERY turn on agent threads: sticky boundary clamped by a wire/row unit mismatch in anchor re-derivation (1.804) `feature request` `bug` 💬2
- [#9948](https://github.com/unslothai/unsloth/issues/9948) [Bug] Settings are not saved properly `feature request` `bug`
- [#9947](https://github.com/unslothai/unsloth/issues/9947) [Bug] Search toggle appears to couple Project Sources RAG with web search `feature request` `bug`
- [#9933](https://github.com/unslothai/unsloth/issues/9933) [Feature] TPS/Context Size in sidebar/widget `feature request`
- [#9932](https://github.com/unslothai/unsloth/issues/9932) [Feature] ROCm 10 implementation + version selector (not extensive) `feature request`
- [#9942](https://github.com/unslothai/unsloth/issues/9942) [Bug] Metal Memory Guard Blocks Working Qwen3.8-27B Config, Add Persistent 'Load anyway' Setting `feature request` `bug`
- [#9935](https://github.com/unslothai/unsloth/issues/9935) [Feature] Set dir for studio files `feature request`
- [#9928](https://github.com/unslothai/unsloth/issues/9928) [Bug] Windows: desktop auto-repair deadlocks on its own runtime lock; setup deps (uv) cannot replace pydantic-core loaded by the setup interpreter
- [#9925](https://github.com/unslothai/unsloth/issues/9925) [Feature] Support MCP Resources (resources/list, resources/read) `feature request`
- [#9916](https://github.com/unslothai/unsloth/issues/9916) [Bug] Tensor Parallelism fails to enable/persist for Qwen3.8-27B-GGUF on Multi-L4 setup. `feature request` `bug`
- [#9919](https://github.com/unslothai/unsloth/issues/9919) [Bug] Image generation issue on DGX Spark `feature request` `bug`
- [#9917](https://github.com/unslothai/unsloth/issues/9917) feat: Add Magma (Momentum-aligned Gradient Masking) optimizer integration `feature request`
- [#9910](https://github.com/unslothai/unsloth/issues/9910) [Feature] Unsloth studio installer shoud show current version and version installing `feature request`

#### 🔒 Closed Issues
- [#9500](https://github.com/unslothai/unsloth/issues/9500) [Studio Bug] Presets won't save - 'Chat settings could not be persisted' (400 on PUT /api/chat/settings)
- [#8444](https://github.com/unslothai/unsloth/issues/8444) Exported tokenizer_config.json contains "tokenizer_class": "TokenizersBackend", which transformers cannot load
- [#8859](https://github.com/unslothai/unsloth/issues/8859) [Feature] check Box for including current date in prompt, whether for system or deep research / search
- [#9888](https://github.com/unslothai/unsloth/issues/9888) [Bug] The model couldn't compile a tool-calling grammar for this request.
- [#9617](https://github.com/unslothai/unsloth/issues/9617) [Bug] Model Hub: On Device: List by date non functional
- [#9900](https://github.com/unslothai/unsloth/issues/9900) [BUG] GLM-5.3-Flash Q4_K_M
- [#9895](https://github.com/unslothai/unsloth/issues/9895) [Bug] TTS custom endpoint failures
- [#9737](https://github.com/unslothai/unsloth/issues/9737) [Feature] Unsloth Desktop - Add arguments field in MCP servers Settings
- [#9879](https://github.com/unslothai/unsloth/issues/9879) Custom saved system prompts silently fail to persist ("Chat settings could not be persisted") and disappear from dropdown after restart"
- [#9901](https://github.com/unslothai/unsloth/issues/9901) [Bug] Studio API hangs after sustained concurrent inference while llama-server remains healthy; AnyIO workers blocked in SQLite/keyless API path
- [#9916](https://github.com/unslothai/unsloth/issues/9916) [Bug] Tensor Parallelism fails to enable/persist for Qwen3.8-27B-GGUF on Multi-L4 setup.
- [#9864](https://github.com/unslothai/unsloth/issues/9864) [Unsloth Bug] Claude subagent bridge: inherited CLAUDE_CODE_USE_FOUNDRY / ANTHROPIC_FOUNDRY_BASE_URL env vars silently route local-agent traffic to Azure AI Foundry gateway (unrecognized_model 404)
- [#8748](https://github.com/unslothai/unsloth/issues/8748) [Bug] Installed MLX models are missing from /v1/models and cannot be loaded by API model auto-switch

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,043 · **Open issues:** 382 · **Last push:** 1d ago

August 29, 2026, was a routine day for AIBrix, with no new releases or merged pull requests. However, a notable new issue was opened regarding the improvement of StormService's Volcano gang scheduling integration, identified as issue #2631. This request aims to enhance the operational efficiency of scheduling within the StormService framework, highlighting ongoing efforts to optimize performance within the ecosystem.

#### 🐛 New Issues
- [#2631](https://github.com/vllm-project/aibrix/issues/2631) Improve StormService Volcano gang scheduling integration `area/scheduling`

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 5,390 · **Open issues:** 374 · **Last push:** 1h ago

On August 29, 2026, there were no new releases for Semantic Router, but several significant updates were merged. Notable enhancements include the implementation of caching and batching for tool embeddings at request-time with PR #3072, and a bug fix ensuring that the prompt guard mapping default is preserved as seen in PR #3085. Additional improvements addressed decision-making processes, notably ranking decisions by confidence only when the entire pool reports scores (PR #3080) and normalizing decision rule-tree operators at configuration load (PR #3047). Among the newly reported issues, PR #3094 highlights a bug where merged and closed pull requests retain their pr/* state label indefinitely, which could impact workflow clarity.

#### ✅ Merged PRs
- [#3072](https://github.com/vllm-project/semantic-router/pull/3072) [Feature] Cache and batch tool embeddings during request-time tool selection
- [#3085](https://github.com/vllm-project/semantic-router/pull/3085) [Bug] Preserve the prompt guard mapping default
- [#3092](https://github.com/vllm-project/semantic-router/pull/3092) [Docs] Add fleet capacity planning roadmap
- [#3080](https://github.com/vllm-project/semantic-router/pull/3080) [Bug] Rank decisions by confidence only when the whole pool reports scores
- [#3047](https://github.com/vllm-project/semantic-router/pull/3047) [Bug] Normalize decision rule-tree operators at config load

#### 🐛 New Issues
- [#3094](https://github.com/vllm-project/semantic-router/issues/3094) [Bug] Merged and closed pull requests keep their pr/* state label forever `accepted` `wg/developer-experience-ecosystem` 💬2
- [#3079](https://github.com/vllm-project/semantic-router/issues/3079) [Bug] Signals with no reported confidence default to 1.0 and override priority in tiered selection `accepted` `wg/router-models-inference-runtime` 💬1
- [#3091](https://github.com/vllm-project/semantic-router/issues/3091) [Epic] Build workload-driven capacity planning for inference fleets `roadmap` `accepted` `proposal` `wg/enterprise-environment` 💬1
- [#3097](https://github.com/vllm-project/semantic-router/issues/3097) [Bug] Request-path connectors read upstream responses without a byte ceiling `bug` `needs-acceptance` `wg/data-plane-networking`
- [#3088](https://github.com/vllm-project/semantic-router/issues/3088) [Feature] Export Router Learning experience as versioned, read-only snapshots `needs-acceptance`

#### 🔒 Closed Issues
- [#2200](https://github.com/vllm-project/semantic-router/issues/2200) [Feature] Redesign VSR response header contract for v0.4
- [#2465](https://github.com/vllm-project/semantic-router/issues/2465) [Security] Remove reusable browser session tokens from Dashboard URLs
- [#3077](https://github.com/vllm-project/semantic-router/issues/3077) [Bug] operator-managed prompt_guard silently disables jailbreak detection by blanking jailbreak_mapping_path
- [#2937](https://github.com/vllm-project/semantic-router/issues/2937) [Bug] Decision rule-tree operators are not normalized consistently across producers
- [#3048](https://github.com/vllm-project/semantic-router/issues/3048) [Bug] reask makes one embedding for each earlier user message
- [#3079](https://github.com/vllm-project/semantic-router/issues/3079) [Bug] Signals with no reported confidence default to 1.0 and override priority in tiered selection
- [#3053](https://github.com/vllm-project/semantic-router/issues/3053) [Performance] Cache and batch tool embeddings during request-time tool selection

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*