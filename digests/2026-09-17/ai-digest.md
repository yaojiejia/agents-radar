# 📡 AI Ecosystem Digest — 2026-09-17

> Generated 2026-09-17 01:06 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 145,508 | 33 | 2 | 2 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 124,744 | 28 | 3 | 50 | 9 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 107,020 | 0 | 0 | 0 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,175 | 20 | 21 | 0 | 4 |
| [OpenCode](https://github.com/anomalyco/opencode) | 207,919 | 25 | 8 | 7 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 27,903 | 30 | 13 | 4 | 3 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 389,904 | 206 | 116 | 192 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 246,203 | 35 | 37 | 15 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 91,946 | 34 | 18 | 41 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 36,068 | 24 | 11 | 49 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 128,476 | 8 | 13 | 20 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 181,196 | 8 | 1 | 3 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 58,920 | 41 | 18 | 89 | 2 |
| [Unsloth](https://github.com/unslothai/unsloth) | 76,255 | 9 | 13 | 60 | 1 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,094 | 1 | 2 | 6 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 5,848 | 8 | 11 | 12 | 0 |

---

## ✨ Highlights

- **OpenAI Codex** released multiple alpha versions, including [rust-v0.155.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.9) and [rusty-v8-v152.2.0](https://github.com/openai/codex/releases/tag/rusty-v8-v152.2.0).
- **GitHub Copilot CLI** has updated its version to [v1.0.86-2](https://github.com/github/copilot-cli/releases/tag/v1.0.86-2) among others.
- In **OpenClaw**, the [issue #150201](https://github.com/openclaw/openclaw/issues/150201) regarding a snapshot update failure on Windows garnered significant attention with 14 comments.
- A notable issue in **Qwen Code**, [#11976](https://github.com/QwenLM/qwen-code/issues/11976), related to Webview failing to reach the workspace daemon, received 6 comments.
- **vLLM** opened a critical bug issue [#57227](https://github.com/vllm-project/vllm/issues/57227) involving GPU memory-access faults that attracted 5 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 145,508 · **Open issues:** 12,469 · **Last push:** <1h ago

On September 17, 2026, Claude Code released version 2.1.274, introducing a visible warning for critical memory usage and the new `CLAUDE_CODE_MCP_STARTUP_WAIT_MS` parameter to control connection timing for MCP servers. Enhancements also included the addition of an `effort` attribute to the OpenTelemetry trace span for `claude_code.llm_request`, aligning it with the `api_request` event. Notable merged pull requests addressed layout handling issues and improved user experience during editing. A significant new issue emerged regarding the "phantom unpushed commit(s)" report after squash merges, which has garnered attention among users.

#### 🚀 New Releases
- [v2.1.274](https://github.com/anthropics/claude-code/releases/tag/v2.1.274) v2.1.274

#### ✅ Merged PRs
- [#94843](https://github.com/anthropics/claude-code/pull/94843) diff: the prompt hint reads the viewport's layout through a type that may lack it
- [#94653](https://github.com/anthropics/claude-code/pull/94653) diff: the first edit opens the pane only where the layout docks it

#### 🐛 New Issues
- [#94771](https://github.com/anthropics/claude-code/issues/94771) Stop hook reports phantom "unpushed commit(s)" after a squash merge deletes the remote branch `duplicate` `area:hooks` `area:claude-code-web` `platform:web` 💬1
- [#94893](https://github.com/anthropics/claude-code/issues/94893) effortLevel setting cannot persist the "Max" effort tier the UI offers `bug` `area:tui` `area:core` 💬1
- [#94908](https://github.com/anthropics/claude-code/issues/94908) [Feature Request] Add setting to disable automatic selection attachment in terminal mode `enhancement` `platform:windows` `area:ide` `platform:vscode`
- [#94907](https://github.com/anthropics/claude-code/issues/94907) [FEATURE] No setting to disable unused beta tool schemas (Workflow/Artifact/DesignSync/Cron/worktrees) inflating context `enhancement` `area:core`
- [#94906](https://github.com/anthropics/claude-code/issues/94906) [BUG] Scheduled session git clone fails with 401 — proxy git credential auto-injection (gitConfigInjection) not working `bug` `area:auth` `platform:web` `area:routines`
- [#94905](https://github.com/anthropics/claude-code/issues/94905) [Agent incident] 2026-08-05 19:50 - dokola przněná logika „nových uživatelů" místo odpovědi na otázku `bug` `area:model` `platform:intellij` `area:agent`
- [#94904](https://github.com/anthropics/claude-code/issues/94904) [Agent incident] 2026-08-05 19:45 - do Přijatých alb se ukládala alba jen otevřená na profilu `bug` `area:model` `platform:intellij`
- [#94903](https://github.com/anthropics/claude-code/issues/94903) [Agent incident] 2026-08-05 19:20 - všichni v mřížce se označili jako NOVÍ `bug` `area:model` `platform:intellij`
- [#94902](https://github.com/anthropics/claude-code/issues/94902) [Agent incident] 2026-08-05 19:05 - „Certifikát role" jsem přeložil místo vysvětlení, co to je `bug` `area:model` `platform:intellij`
- [#94901](https://github.com/anthropics/claude-code/issues/94901) [Agent incident] 2026-08-05 18:00 - přepsané menu ve Spamu, které nikdo nezadal `bug` `area:model` `platform:intellij`
- [#94900](https://github.com/anthropics/claude-code/issues/94900) [Agent incident] 2026-08-05 17:45 - rozbité mezery mezi dlaždicemi widgetu `bug` `area:model` `platform:intellij`
- [#94899](https://github.com/anthropics/claude-code/issues/94899) [Agent incident] 2026-08-05 17:30 - push do zrcadla skillů bez příkazu a bez jména repa `bug` `area:model` `platform:intellij` `area:permissions`
- [#94897](https://github.com/anthropics/claude-code/issues/94897) [Bug] MFA verification fails with "Could not verify the account security policy" error `bug` `platform:macos` `area:auth`
- [#94898](https://github.com/anthropics/claude-code/issues/94898) [FEATURE] Desktop Code sidebar: show project folder next to session title when Group by: None `enhancement` `platform:macos` `area:ui` `area:desktop`
- [#94896](https://github.com/anthropics/claude-code/issues/94896) DiviOps MCP server subprocess fails all outbound fetch calls in the desktop app's Code tab specifically ("Connection failed: fetch failed") — works fine from the standalone terminal CLI `bug` `platform:macos` `area:mcp` `area:desktop`
- [#94895](https://github.com/anthropics/claude-code/issues/94895) Claude in Chrome extension never connects (tabs_context_mcp always returns "not connected") despite reinstall + full browser restart `bug` `platform:windows` `area:chrome`
- [#94894](https://github.com/anthropics/claude-code/issues/94894) [FEATURE] Desktop app: add /branch and /resume equivalents for managing conversation branches `enhancement` `area:desktop`
- [#94866](https://github.com/anthropics/claude-code/issues/94866) [BUG] No environment scoping on the shared ~/.claude state root: consent, config schema, transcript retention and permission defaults couple CLI and desktop sessions `bug` `platform:windows` `area:core` `area:security`
- [#94875](https://github.com/anthropics/claude-code/issues/94875) [MODEL] Sonnet 5 (Claude Code returns "Sonnet 5 can't help with this" when reading or receiving a valid USPTO API key credential) `bug` `external` `area:model` `model`
- [#94878](https://github.com/anthropics/claude-code/issues/94878) [Bug] macOS TCC permissions lost on auto-update due to versioned binary paths `bug` `duplicate` `has repro` `platform:macos`
- [#94892](https://github.com/anthropics/claude-code/issues/94892) [FEATURE] Let /branch register the new session in agent view without a separate /bg `enhancement` `area:tui` `area:agent-view`
- [#94886](https://github.com/anthropics/claude-code/issues/94886) For three blissful hours I actually believed the Claude app had evolved into something that gets shit done — the board was green, the code had never run `bug` `enhancement` `area:cost` `area:model`
- [#94891](https://github.com/anthropics/claude-code/issues/94891) [FEATURE] Vim mode: change cursor appearance based on insert/normal mode `duplicate` `enhancement` `area:tui`
- [#94890](https://github.com/anthropics/claude-code/issues/94890) MCP tool schema loses type/validation info between server and Claude's tool-calling path `bug` `platform:windows` `area:mcp`
- [#94889](https://github.com/anthropics/claude-code/issues/94889) [FEATURE] Agent view: /new panel to set model, effort, name, permission mode and isolation before dispatching a session `enhancement` `area:tui` `area:agent-view`
- [#94888](https://github.com/anthropics/claude-code/issues/94888) [BUG] Chat tab strip (multi-session view) missing in VS Code extension after update to 2.1.273 `bug` `platform:macos` `area:ide` `platform:vscode`
- [#94887](https://github.com/anthropics/claude-code/issues/94887) [BUG] Desktop SSH session + Remote Control: while the laptop sleeps, claude.ai connectors are unusable from the phone because they execute inside the sleeping Desktop app — answering the PreToolUse permission hook is not enough `bug` `has repro` `platform:macos` `area:mcp`
- [#94885](https://github.com/anthropics/claude-code/issues/94885) I don't have a bug report to analyze in your message. Could you please provide the actual bug report or issue description you'd like me to create a GitHub issue title for? Please share: - What error or problem occurred - What you were trying to do - Any e `question`
- [#94884](https://github.com/anthropics/claude-code/issues/94884) [BUG] Linux: login dead-ends at "Finish sign-in in the Claude app" `bug` `platform:linux` `area:auth`
- [#94883](https://github.com/anthropics/claude-code/issues/94883) [Bug] Excel file reconstruction from screenshots triggers false security flags `bug` `platform:macos` `area:model` `needs-repro`
- [#94882](https://github.com/anthropics/claude-code/issues/94882) [Bug] Repeated macOS file access permission prompts on each invocation `bug` `platform:macos` `area:permissions`
- [#94881](https://github.com/anthropics/claude-code/issues/94881) Three days, most of a week's Claude usage, zero trades through Step 4: reviewed code never assembled or run, agents spun on data perfection, and the PM escalated to the top model tier against written instructions `bug` `enhancement` `area:cost` `area:model`
- [#94880](https://github.com/anthropics/claude-code/issues/94880) Claude for Chrome: site-level permissions unavailable for some domains, with no way to grant them `bug` `has repro` `platform:macos` `area:mcp`

#### 🔒 Closed Issues
- [#94893](https://github.com/anthropics/claude-code/issues/94893) effortLevel setting cannot persist the "Max" effort tier the UI offers
- [#94897](https://github.com/anthropics/claude-code/issues/94897) [Bug] MFA verification fails with "Could not verify the account security policy" error

### OpenAI Codex (`openai/codex`)

**Stars:** 124,744 · **Open issues:** 17,468 · **Last push:** <1h ago

On September 17, 2026, multiple alpha releases of Rust were noted, including versions 0.155.0-alpha.9 and 0.155.0-alpha.14, showcasing incremental improvements. Significant merged pull requests included the enhancement of the TUI with Mermaid code block rendering and adjustments to the Guardian policy approval tests for tighter request handling. Additionally, the Codex App faces a recurring issue where users encounter a "Selected model is at capacity" message despite healthy connectivity, with the problem highlighted in issue #45835, which has gained traction among users.

#### 🚀 New Releases
- [rusty-v8-v152.2.0](https://github.com/openai/codex/releases/tag/rusty-v8-v152.2.0) rusty-v8-v152.2.0
- [rust-v0.155.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.9) 0.155.0-alpha.9
- [rust-v0.155.0-alpha.2.6](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.2.6) 0.155.0-alpha.2.6
- [rust-v0.155.0-alpha.2.5](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.2.5) 0.155.0-alpha.2.5
- [rust-v0.155.0-alpha.14](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.14) 0.155.0-alpha.14
- [rust-v0.155.0-alpha.13](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.13) 0.155.0-alpha.13
- [rust-v0.155.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.12) 0.155.0-alpha.12
- [rust-v0.155.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.11) 0.155.0-alpha.11
- [rust-v0.155.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.10) 0.155.0-alpha.10

#### ✅ Merged PRs
- [#46065](https://github.com/openai/codex/pull/46065) Route prepared images through the attachment store
- [#46064](https://github.com/openai/codex/pull/46064) Consolidate Guardian tests at shared policy and context boundaries
- [#46063](https://github.com/openai/codex/pull/46063) Trim Guardian tests and tighten request layout assertions
- [#46058](https://github.com/openai/codex/pull/46058) Attribute analytics events to realtime voice sessions
- [#46054](https://github.com/openai/codex/pull/46054) Render Mermaid code blocks as diagrams in the TUI
- [#46051](https://github.com/openai/codex/pull/46051) Track WebSocket continuation modes and full-input send reasons
- [#46047](https://github.com/openai/codex/pull/46047) Tag rollout compression metrics by trigger
- [#46044](https://github.com/openai/codex/pull/46044) Include Code Mode tool metadata in compaction prompts
- [#46043](https://github.com/openai/codex/pull/46043) Repair expired Windows sandbox account passwords during setup
- [#46042](https://github.com/openai/codex/pull/46042) Add read-only policy support to MCP tool requests
- [#46041](https://github.com/openai/codex/pull/46041) Tighten request handling in Guardian approval tests
- [#46040](https://github.com/openai/codex/pull/46040) Default TUI animations off when a screen reader is detected
- [#46038](https://github.com/openai/codex/pull/46038) Test Windows sandbox bin DACL modification permissions
- [#46036](https://github.com/openai/codex/pull/46036) Preserve config error causes when saving the approvals reviewer
- [#46035](https://github.com/openai/codex/pull/46035) Add per-app tool exposure configuration
- [#46033](https://github.com/openai/codex/pull/46033) Preserve orchestrator skill caches across MCP runtime updates
- [#46032](https://github.com/openai/codex/pull/46032) Require forced macOS preferences for managed configuration
- [#46031](https://github.com/openai/codex/pull/46031) Keep Noise relay streams alive after repeated handshake failures
- [#46029](https://github.com/openai/codex/pull/46029) Allow browser app cleanup hooks on interrupt
- [#46027](https://github.com/openai/codex/pull/46027) Document and test `?` wildcards in network proxy domain patterns
- [#46026](https://github.com/openai/codex/pull/46026) Centralize model-message resolution and rendering in `codex-prompts`
- [#46020](https://github.com/openai/codex/pull/46020) Add an experimental rollout compression endpoint
- [#46019](https://github.com/openai/codex/pull/46019) Allow hosted Apps MCP contributions to override the protocol mode
- [#46015](https://github.com/openai/codex/pull/46015) Allow callers to disable executor skills per environment
- [#46013](https://github.com/openai/codex/pull/46013) Route permission shortcuts through the shared selection flow
- [#46011](https://github.com/openai/codex/pull/46011) Enforce managed residency when constructing API providers
- [#46010](https://github.com/openai/codex/pull/46010) Enable app tool result metadata with analytics controls
- [#46009](https://github.com/openai/codex/pull/46009) Centralize compaction checkpoint selection and validation
- [#46008](https://github.com/openai/codex/pull/46008) Route built-in permission selections through the app server
- [#46006](https://github.com/openai/codex/pull/46006) Report clock failures again after recovery
- [#46004](https://github.com/openai/codex/pull/46004) Preserve attachment Unix socket grants when controller policy is omitted
- [#46002](https://github.com/openai/codex/pull/46002) Extract route-aware HTTP request execution into a separate module
- [#45987](https://github.com/openai/codex/pull/45987) Centralize Guardian action preparation for review
- [#45985](https://github.com/openai/codex/pull/45985) Replace guardian review result tuples with named structs
- [#45984](https://github.com/openai/codex/pull/45984) Isolate app-server Unix sockets from filesystem-restricted commands
- [#45983](https://github.com/openai/codex/pull/45983) Show a loading message when opening tasks from the agents overview
- [#45982](https://github.com/openai/codex/pull/45982) Use native DNS resolution for the network proxy on macOS
- [#45981](https://github.com/openai/codex/pull/45981) Preserve session config when switching thread permission profiles
- [#45980](https://github.com/openai/codex/pull/45980) Fall back to summary history for read-only conversations
- [#45978](https://github.com/openai/codex/pull/45978) Keep selection adjacent when hiding tasks in the agents overview
- [#45966](https://github.com/openai/codex/pull/45966) Measure rollout read and materialization durations
- [#45964](https://github.com/openai/codex/pull/45964) Expose partial completion in rollout compression metrics
- [#45960](https://github.com/openai/codex/pull/45960) Tag memory usage telemetry with the memory version
- [#45957](https://github.com/openai/codex/pull/45957) Centralize Guardian policy resolution in config and protocol
- [#45956](https://github.com/openai/codex/pull/45956) Record memory storage size after successful consolidation
- [#45933](https://github.com/openai/codex/pull/45933) Avoid redundant model catalog lookups in reused Guardian reviewers
- [#45928](https://github.com/openai/codex/pull/45928) Bound model catalog decode errors and classify request timeouts
- [#45915](https://github.com/openai/codex/pull/45915) Make Code Mode wrappers transparent to Guardian model policies
- [#45900](https://github.com/openai/codex/pull/45900) Add a hidden HTTP/3 TCP tunnel command
- [#45865](https://github.com/openai/codex/pull/45865) Reject paths in project documentation fallback filenames

#### 🐛 New Issues
- [#45835](https://github.com/openai/codex/issues/45835) Codex App repeatedly shows "Selected model is at capacity" despite healthy connectivity `bug` `rate-limits` `app` 💬12
- [#45832](https://github.com/openai/codex/issues/45832) Selected model is at capacity. Please try a different model. `bug` `windows-os` `rate-limits` `CLI` 💬8
- [#45925](https://github.com/openai/codex/issues/45925) `stream disconnected before completion` is account-scoped — switching ChatGPT accounts changes the failure rate ~7× `bug` `app` `connectivity` 💬6
- [#45841](https://github.com/openai/codex/issues/45841) Swarm Intelligence for Codex: From One Agent to a Network of Specialist Models `enhancement` `codex-web` `subagent` 💬6
- [#45886](https://github.com/openai/codex/issues/45886) [Windows Desktop][26.908.40834] Second prompt cannot be sent after first successful turn, send button becomes disabled while CLI works normally `bug` `windows-os` `app` 💬6
- [#46052](https://github.com/openai/codex/issues/46052) Spark allowance shows 100% remaining but prolite account receives model-not-supported HTTP 400 `bug` `windows-os` `rate-limits` `CLI` 💬3
- [#45934](https://github.com/openai/codex/issues/45934) Cloud task stuck running with no response; new messages not saved; persists after PC restart `bug` `codex-web` `session` 💬4
- [#45974](https://github.com/openai/codex/issues/45974) Codex CLI repeatedly wakes xhigh to poll deterministic long-running jobs, exhausting finite weekly usage before task completion `bug` `model-behavior` `rate-limits` `CLI` 💬3
- [#45949](https://github.com/openai/codex/issues/45949) Codex CLI (ChatGPT login, Pro 20x): frequent ‘stream disconnected before completion’ + repeated ‘Selected model is at capacity’ (Request ID 68f16728-07bb-4a24-b7ca-500757169524) `bug` `rate-limits` `CLI` `connectivity` 💬3
- [#46005](https://github.com/openai/codex/issues/46005) [Windows] Previously working Chrome control disappears; disabled organization/region message prevents task recovery `bug` `windows-os` `app` `browser` 💬2
- [#45970](https://github.com/openai/codex/issues/45970) Codex CLI 0.154.0: false-positive content_filter interrupts benign coding tasks in fresh sessions `bug` `model-behavior` `azure` `CLI` 💬2
- [#46062](https://github.com/openai/codex/issues/46062) Windows sandbox setup fails applying deny ACE to E: repository .agents directory. `bug` `windows-os` `sandbox` `app` 💬1
- [#45945](https://github.com/openai/codex/issues/45945) Code Mode dispatch worker stops at sampling end while yielded cells still need subsequent tools `bug` `CLI` `tool-calls` 💬1
- [#46025](https://github.com/openai/codex/issues/46025) Blocker: Windows desktop 26.908 — every tool call after a >30s idle gap stalls ~30s; disabling code_mode does not help `bug` `windows-os` `tool-calls` `app` 💬1
- [#46053](https://github.com/openai/codex/issues/46053) ChatGPT (GPT-6 Astra): Japanese chats get auto-titles mixed with Chinese/Russian `bug` `model-behavior` `session` 💬1
- [#46048](https://github.com/openai/codex/issues/46048) Codex CLI subagent completes, but main thread reports “No agents completed yet” `bug` `CLI` `subagent` 💬1
- [#46046](https://github.com/openai/codex/issues/46046) CLI Agents view: default composer focus disrupts session navigation and causes accidental tasks `enhancement` `TUI` `CLI` 💬1
- [#46045](https://github.com/openai/codex/issues/46045) [Windows][26.908.9136.0] Document tabs change visibly but persisted right-pane state remains stale `bug` `windows-os` `app` `session` 💬1
- [#46037](https://github.com/openai/codex/issues/46037) [Windows desktop] Copy as path escapes underscores as \_ and breaks file resolution `bug` `windows-os` `app` 💬1
- [#46034](https://github.com/openai/codex/issues/46034) [macOS desktop] Chrome native-host manifest missing; Computer use settings cannot open repair controls `bug` `app` `computer-use` `browser` 💬1
- [#46061](https://github.com/openai/codex/issues/46061) multi_agent_v1__spawn_agent can deliver work into an existing durable task and change its model `bug` `app` `subagent`
- [#46060](https://github.com/openai/codex/issues/46060) Windows hook timeout can leave alias descendants alive and async hook lifecycle events are not published `bug` `windows-os` `hooks`
- [#46059](https://github.com/openai/codex/issues/46059) Codex app queues terminal invisibly and duplicates composer keystrokes `bug` `tool-calls` `app`
- [#46057](https://github.com/openai/codex/issues/46057) Codex App: allow dismissing the out-of-quota/credits prompt so users can still read conversation history `enhancement` `rate-limits` `app`
- [#46055](https://github.com/openai/codex/issues/46055) [Desktop][Pets] Add a configurable keyboard shortcut to quickly hide the pet `enhancement` `app` `pets`
- [#46050](https://github.com/openai/codex/issues/46050) [Windows Desktop] Move the "read aloud" button `enhancement` `windows-os` `app`
- [#46049](https://github.com/openai/codex/issues/46049) Allow users to set a default model and reasoning level for new Work chats `enhancement` `app` `config`
- [#46039](https://github.com/openai/codex/issues/46039) Voice chat stops or disconnects during cooking questions from The New York Times `bug` `connectivity`

#### 🔒 Closed Issues
- [#45349](https://github.com/openai/codex/issues/45349) Browser tools fail on macOS: “sandbox-exec: unbound variable: TIOCSTI”
- [#45934](https://github.com/openai/codex/issues/45934) Cloud task stuck running with no response; new messages not saved; persists after PC restart
- [#46025](https://github.com/openai/codex/issues/46025) Blocker: Windows desktop 26.908 — every tool call after a >30s idle gap stalls ~30s; disabling code_mode does not help

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 107,020 · **Open issues:** 851 · **Last push:** 23h ago

On September 17, 2026, the Gemini CLI team released version v0.62.0-nightly.20260916.g6a466a7e2, which includes important updates such as a fix that ensures AgentLoopContext properties are properly preserved across object spreads and an early return for unsupported store requests in the tasks metadata endpoint. There were no merged pull requests or new issues reported in the last 24 hours, marking a routine day for the project. Overall, the updates improve stability and performance in the latest nightly build.

#### 🚀 New Releases
- [v0.62.0-nightly.20260916.g6a466a7e2](https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0-nightly.20260916.g6a466a7e2) Release v0.62.0-nightly.20260916.g6a466a7e2

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,175 · **Open issues:** 2,395 · **Last push:** <1h ago

On September 17, 2026, GitHub Copilot CLI released three new versions: v1.0.86-2, which included several fixes and changes; v1.0.86-1, where custom agents can now opt into repository instruction files by setting `include-custom-instructions: true` in their frontmatter, and session resumption improvements were made to preserve marketplace plugins; and v1.0.86-0, which addressed issues related to transcript file corruption and made Autopilot behavior more predictable. No new features were merged today, but several notable issues were reported, including #4870, which highlights a failure in loading the Figma remote server, and #4886, concerning plugins that load but are omitted from the `/skills` and `/env` commands. Overall, the day was marked by incremental updates to enhance user experience and functionality within the Copilot CLI ecosystem.

#### 🚀 New Releases
- [v1.0.86-2](https://github.com/github/copilot-cli/releases/tag/v1.0.86-2) 1.0.86-2
- [v1.0.86-1](https://github.com/github/copilot-cli/releases/tag/v1.0.86-1) 1.0.86-1
- [v1.0.86-0](https://github.com/github/copilot-cli/releases/tag/v1.0.86-0) 1.0.86-0
- [v1.0.85](https://github.com/github/copilot-cli/releases/tag/v1.0.85) 1.0.85

#### 🐛 New Issues
- [#4870](https://github.com/github/copilot-cli/issues/4870) MCP: Figma remote server (mcp.figma.com) fails to load — `-32601` on `server/discover` treated as fatal (works in VS Code) `triage` 💬1
- [#4886](https://github.com/github/copilot-cli/issues/4886) `--plugin-dir` skills load but are omitted from `/skills` and `/env` `triage` 💬1
- [#4875](https://github.com/github/copilot-cli/issues/4875) ز `invalid` 💬1
- [#4867](https://github.com/github/copilot-cli/issues/4867) It's a bug on the `/sandbox policy` command, but the option is being applied otherwise. `triage` 💬1
- [#4885](https://github.com/github/copilot-cli/issues/4885) Windows local-file Markdown links fail on Ctrl+click when the assistant emits drive-letter paths `triage`
- [#4884](https://github.com/github/copilot-cli/issues/4884) BYOK (Mistral): 422 Unprocessable Entity on the request after a tool call — assistant message sends both `content` and `tool_calls` `triage`
- [#4882](https://github.com/github/copilot-cli/issues/4882) local plugin passed to Copilot CLI with `--plugin-dir` does not work
- [#4883](https://github.com/github/copilot-cli/issues/4883) [Bug] --plugin-dir skills discovered at startup but unavailable in the active session (Windows, 1.0.86-0)
- [#4881](https://github.com/github/copilot-cli/issues/4881) macOS local sandbox: expose an exact Mach/XPC lookup allowlist `triage`
- [#4880](https://github.com/github/copilot-cli/issues/4880) ACP: expose the model list as a category:model config option (session/new returns only mode and allow_all) `triage`
- [#4879](https://github.com/github/copilot-cli/issues/4879) Add a non-blocking, async `ask_user` tool in addition to the blocking `ask_user` `triage`
- [#4878](https://github.com/github/copilot-cli/issues/4878) Add a CLI flag to temporarily trust a workspace in non-interactive sessions (e.g. --temporarily-trust-workspace) `triage`
- [#4877](https://github.com/github/copilot-cli/issues/4877) AHP 0.7: native resume uses a derived /chat URI instead of advertised defaultChat `triage`
- [#4876](https://github.com/github/copilot-cli/issues/4876) Copilot App: Adding internal Github hosted marketplace opens GitHub device page without displaying authentication code `triage`
- [#4874](https://github.com/github/copilot-cli/issues/4874) Add a method to /exit from Copilot CLI regardless of nested sessions `triage`
- [#4873](https://github.com/github/copilot-cli/issues/4873) Model picker: no visual contrast between selected/unselected context-window value (e.g. "264K 1M") `triage`
- [#4872](https://github.com/github/copilot-cli/issues/4872) Desktop app: UI thread hangs (AppHangB1) and Windows force-closes github.exe after repeated browser canvas use `triage`
- [#4871](https://github.com/github/copilot-cli/issues/4871) Content exclusion incorrectly blocks commands when a child process loads .env `triage`
- [#4869](https://github.com/github/copilot-cli/issues/4869) Add support to prompts `triage`
- [#4868](https://github.com/github/copilot-cli/issues/4868) Execution failed: 421 Misdirected Request listing models `triage`

#### 🔒 Closed Issues
- [#2904](https://github.com/github/copilot-cli/issues/2904) Custom Agent YAML Frontmatter Should Support Reasoning Effort
- [#1322](https://github.com/github/copilot-cli/issues/1322) Feature request: Show subagent tool call details
- [#2050](https://github.com/github/copilot-cli/issues/2050) *Claude Sonnet 4.6 - Execution failed: Error: Failed to get response from the AI model; retried 5 times (total retry wait time: 84.70107509705375 seconds) Last error: CAPIError: 503 {"error":{"message":"HTTP/2 GOAWAY connection terminated","type":"connection_error"}}
- [#1392](https://github.com/github/copilot-cli/issues/1392) OmniSharp LSP server fails to fully load a large project in the default timeout -- LSP servers need a configurable `initializeTimeout`
- [#2652](https://github.com/github/copilot-cli/issues/2652) additionalContext silently dropped for userPromptSubmitted and postToolUse extension hooks
- [#1882](https://github.com/github/copilot-cli/issues/1882) Support $env:EDITOR being a .bat/.cmd script on Windows
- [#3170](https://github.com/github/copilot-cli/issues/3170) Chinese input cursor position is wrong
- [#2778](https://github.com/github/copilot-cli/issues/2778) When is /btw from claude code coming to copilot?
- [#4854](https://github.com/github/copilot-cli/issues/4854) Local sandbox setting 'Allow local network' not works
- [#4220](https://github.com/github/copilot-cli/issues/4220) Plan mode blocks read-only gh api GET/GraphQL queries (and read commands piped to python/jq) as "may modify the workspace"
- [#2848](https://github.com/github/copilot-cli/issues/2848) Copilot CLI enters on recoverable state after : Execution failed CAPI Error
- [#2890](https://github.com/github/copilot-cli/issues/2890) Extensions fail to load — SEA cache directory path mismatch (universal/ vs darwin-arm64/)
- [#1812](https://github.com/github/copilot-cli/issues/1812) LSP client causing tsgo LSP server to crash due to malformed file path
- [#4875](https://github.com/github/copilot-cli/issues/4875) ز
- [#3674](https://github.com/github/copilot-cli/issues/3674) /undo adds/resets files that were previously deleted
- [#3016](https://github.com/github/copilot-cli/issues/3016) @github/copilot 1.0.38.0 crashes silently on Windows 11 Insider Preview Canary Build 26200 when installed via npm
- [#2876](https://github.com/github/copilot-cli/issues/2876) Paths with "-" handled inconsistently on permission checks.
- [#4654](https://github.com/github/copilot-cli/issues/4654) List models uses incorrect URL for GitHub Enterprise.
- [#4626](https://github.com/github/copilot-cli/issues/4626) create file tool returns invalid response when file content is too large
- [#4882](https://github.com/github/copilot-cli/issues/4882) local plugin passed to Copilot CLI with `--plugin-dir` does not work
- [#4883](https://github.com/github/copilot-cli/issues/4883) [Bug] --plugin-dir skills discovered at startup but unavailable in the active session (Windows, 1.0.86-0)

### OpenCode (`anomalyco/opencode`)

**Stars:** 207,919 · **Open issues:** 5,823 · **Last push:** <1h ago

On September 17, 2026, OpenCode saw no new releases, but several critical pull requests were merged, enhancing the platform's functionality. Notable features included improvements to project settings and actions (#49423), the introduction of an animated loading screen for first launches on desktop (#49408), and the capability to carry error context across boundaries in code mode (#49390). Fixes were implemented to address transport errors (#49426), ensure the preservation of native clipboard paste (#49424), and refine the classification of gateway account limits (#49195). The day also brought attention to a significant issue (#49416) questioning the necessity of payment for a free model, highlighting ongoing concerns within the community.

#### ✅ Merged PRs
- [#49423](https://github.com/anomalyco/opencode/pull/49423) feat(app): improve project settings and actions
- [#49426](https://github.com/anomalyco/opencode/pull/49426) fix(app): retry transport errors wrapped by the client
- [#49408](https://github.com/anomalyco/opencode/pull/49408) feat(desktop): add animated first-launch loading screen
- [#49424](https://github.com/anomalyco/opencode/pull/49424) fix(app): preserve native clipboard paste
- [#49195](https://github.com/anomalyco/opencode/pull/49195) fix(ai): classify gateway account limits as quota and keep 4xx non-retryable
- [#49390](https://github.com/anomalyco/opencode/pull/49390) feat(codemode): carry cause and own data across the error boundary
- [#49407](https://github.com/anomalyco/opencode/pull/49407) feat(tui): reload all locations

#### 🐛 New Issues
- [#49416](https://github.com/anomalyco/opencode/issues/49416) Pay for a free model? 💬3
- [#49410](https://github.com/anomalyco/opencode/issues/49410) screenshot_url: views stuck on spinner, then black image; no backend errors logged 💬3
- [#49365](https://github.com/anomalyco/opencode/issues/49365) TypeError: undefined is not an object (evaluating 'a.name') - Only happening after upgrade 💬3
- [#49415](https://github.com/anomalyco/opencode/issues/49415) Reasoning blocks from prior assistant turns are replayed into context on every agent-loop step, enabling self-reinforcing confabulations 💬2
- [#49316](https://github.com/anomalyco/opencode/issues/49316) [FEATURE]:apk availability 💬2
- [#49414](https://github.com/anomalyco/opencode/issues/49414) Agent step loop never terminates on "unknown" finish reason with no tool calls — unbounded request storm 💬2
- [#49401](https://github.com/anomalyco/opencode/issues/49401) bug(app): active sessions missing from sidebar in new UI 💬2
- [#49413](https://github.com/anomalyco/opencode/issues/49413) OpenCode Go: union-alpha fails with 503 'Upstream request failed: Endpoint is unavailable' on tool calls 💬2
- [#49384](https://github.com/anomalyco/opencode/issues/49384) No active credentials for provider: kiro.For omniroute api key. 💬2
- [#49405](https://github.com/anomalyco/opencode/issues/49405) Question tool: allow attaching screenshots/images to answers (paste or + button) 💬2
- [#49372](https://github.com/anomalyco/opencode/issues/49372) Feature request: assignable keyboard shortcut for the reasoning summaries toggle 💬2
- [#49435](https://github.com/anomalyco/opencode/issues/49435) error message `needs:compliance` 💬1
- [#49433](https://github.com/anomalyco/opencode/issues/49433) Error from provider (Console): OpenCode's free tier can only be used from within OpenCode 💬1
- [#49431](https://github.com/anomalyco/opencode/issues/49431) Error from provider (Console): OpenCode 1.17.0 or newer is required to use the free tier `needs:compliance` 💬1
- [#49430](https://github.com/anomalyco/opencode/issues/49430) Error from provider (Console): OpenCode 1.17.0 or newer is required to use the free tier `needs:compliance` 💬1
- [#49428](https://github.com/anomalyco/opencode/issues/49428) desktop(win): fresh service start registers user home and drive root as ghost projects (no sessions, deletion does not stick) 💬1
- [#49427](https://github.com/anomalyco/opencode/issues/49427) cli: TUI fails to connect to password-protected explicit server via --server 💬1
- [#49422](https://github.com/anomalyco/opencode/issues/49422) [FEATURE]:You have to be stupid to prevent the history of one's thoughts from being sent to the models, because that is exactly what this shit does. 💬1
- [#49421](https://github.com/anomalyco/opencode/issues/49421) لا توجد استجابة `needs:compliance` 💬1
- [#49412](https://github.com/anomalyco/opencode/issues/49412) server: pre-update sessions missing from session list after update to v2.0.5 💬1
- [#49347](https://github.com/anomalyco/opencode/issues/49347) Windows: `permission.bash` deny rules are skipped and built-in `bash` executes denied commands 💬1
- [#49434](https://github.com/anomalyco/opencode/issues/49434) Zen (union-alpha) bypasses sanitizeOpenAISchema: MCP email pattern with lookaround 400s the request
- [#49419](https://github.com/anomalyco/opencode/issues/49419) web: deleted session still appears in home list after browser back navigation
- [#49417](https://github.com/anomalyco/opencode/issues/49417) Conflicting Instructions: git(hub) interaction messages
- [#49411](https://github.com/anomalyco/opencode/issues/49411) TUI renders incorrectly after some time - truncated lines, resize temporarily fixes

#### 🔒 Closed Issues
- [#46651](https://github.com/anomalyco/opencode/issues/46651) TypeError: Failed to fetch - OpenCode Desktop v1.18.25-v1.18.27 / Windows
- [#34078](https://github.com/anomalyco/opencode/issues/34078) Pasting a snippet in embedded terminal of neovim (or any flavours) pastes it twice overall
- [#49416](https://github.com/anomalyco/opencode/issues/49416) Pay for a free model?
- [#49410](https://github.com/anomalyco/opencode/issues/49410) screenshot_url: views stuck on spinner, then black image; no backend errors logged
- [#47620](https://github.com/anomalyco/opencode/issues/47620) Qwen 3.8 flash on go crashes
- [#49415](https://github.com/anomalyco/opencode/issues/49415) Reasoning blocks from prior assistant turns are replayed into context on every agent-loop step, enabling self-reinforcing confabulations
- [#49384](https://github.com/anomalyco/opencode/issues/49384) No active credentials for provider: kiro.For omniroute api key.
- [#49372](https://github.com/anomalyco/opencode/issues/49372) Feature request: assignable keyboard shortcut for the reasoning summaries toggle

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 27,903 · **Open issues:** 1,458 · **Last push:** <1h ago

On September 17, 2026, Qwen Code released version v0.24.0, which includes a significant breaking change allowing bash to expand project directory variables in command hooks and a new feature that caps web_search calls per session. Additionally, the nightly build v0.24.0-nightly.20260916.b8def02aad addressed various issues, including a fix for the CI process to ensure the correct export renderer is packaged. Among recent merged pull requests, #12011 fixed an issue in the web-shell to prevent dropping daemon credentials during navigation, while #12036 improved the CI process. Notably, new issues have emerged, including #11976, which reports a webview failure to connect with the workspace daemon in VS Code Remote due to dynamic port binding issues.

#### 🚀 New Releases
- [v0.24.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.0) Release v0.24.0
- [v0.24.0-nightly.20260916.b8def02aad](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.0-nightly.20260916.b8def02aad) Release v0.24.0-nightly.20260916.b8def02aad
- [v0.23.5-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.5-preview.0) Release v0.23.5-preview.0

#### ✅ Merged PRs
- [#12011](https://github.com/QwenLM/qwen-code/pull/12011) fix(web-shell): stop dropping the daemon credential on two navigation paths
- [#12018](https://github.com/QwenLM/qwen-code/pull/12018) fix(acp): restore managed auto-memory extraction
- [#12036](https://github.com/QwenLM/qwen-code/pull/12036) fix(ci): wait for the published export renderer before packaging the VSIX
- [#12024](https://github.com/QwenLM/qwen-code/pull/12024) docs(serve): record merged ACP boundary acceptance

#### 🐛 New Issues
- [#11976](https://github.com/QwenLM/qwen-code/issues/11976) Webview fails to reach workspace daemon in VS Code Remote (Container) due to dynamic port binding without asExternalUri `priority/P1` `type/bug` `category/integration` `scope/vscode` 💬6
- [#12023](https://github.com/QwenLM/qwen-code/issues/12023) vscode插件最新版本在ssh远程开发的时候无法使用 `status/need-information` `priority/P1` `type/bug` `category/integration` 💬5
- [#12040](https://github.com/QwenLM/qwen-code/issues/12040) web-shell: a rejected `?daemon=` override files the URL fragment credential under the page origin's key `priority/P2` `type/bug` `category/security` `scope/token-storage` 💬4
- [#12028](https://github.com/QwenLM/qwen-code/issues/12028) tracking(core): non-conversation context token governance `priority/P2` `model/long-context` `category/core` `scope/token-management` 💬4
- [#12027](https://github.com/QwenLM/qwen-code/issues/12027) [Bug] Uncaught RangeError: Invalid array length in Ink getMaxWidth / yoga getComputedBorder crashes CLI to terminal `status/need-information` `status/need-retesting` `priority/P2` `type/bug` 💬4
- [#12014](https://github.com/QwenLM/qwen-code/issues/12014) Misleading --system-prompt flag `priority/P3` `type/bug` `category/cli` `scope/documentation` 💬4
- [#11995](https://github.com/QwenLM/qwen-code/issues/11995) Web Shell session-recovery banner false positive: it can show for turns that completed normally `priority/P2` `type/bug` `category/core` `scope/session-management` 💬4
- [#11987](https://github.com/QwenLM/qwen-code/issues/11987) bug(web-shell): first-prompt attach aborted by a controlled session switch leaves the new session on Connection lost `priority/P2` `type/bug` `category/ui` `daemon` 💬4
- [#12044](https://github.com/QwenLM/qwen-code/issues/12044) review run: --timeout-minutes does not propagate to the review plan deadline `priority/P2` `type/bug` `category/cli` `scope/commands` 💬3
- [#12042](https://github.com/QwenLM/qwen-code/issues/12042) core/cli: record provenance does not survive the api-history projection, so two notification shapes are still mis-classified after PR #12007 `priority/P2` `type/bug` `category/core` `scope/session-management` 💬3
- [#12041](https://github.com/QwenLM/qwen-code/issues/12041) web_fetch flattens every table on a page into loose paragraphs `status/in-review` `priority/P2` `type/bug` `category/tools` 💬3
- [#12012](https://github.com/QwenLM/qwen-code/issues/12012) ACP auto-memory extraction fails after successful turns with no cache-safe params `priority/P1` `type/bug` `category/core` `scope/memory` 💬3
- [#12010](https://github.com/QwenLM/qwen-code/issues/12010) web-shell: two navigation paths drop a working daemon credential and report success `priority/P1` `type/bug` `category/authentication` `scope/token-storage` 💬3
- [#12038](https://github.com/QwenLM/qwen-code/issues/12038) core: the <task-notification> envelope has 7 unsynchronized emitter copies and 3 matcher copies, with no test tied to a real emitter `priority/P3` `category/core` `scope/testing` `type/enhancement` 💬3
- [#12037](https://github.com/QwenLM/qwen-code/issues/12037) ask_user_question: a one-option question is rejected before execution, costing a full model round-trip — is the minItems floor of 2 load-bearing when an "Other" choice is auto-appended? `priority/P3` `category/tools` `scope/interactive` `type/enhancement` 💬3
- [#12032](https://github.com/QwenLM/qwen-code/issues/12032) feat(core): assemble the tool-policy and example sections of the system prompt from the resident tool set `priority/P3` `type/feature-request` `category/core` `scope/token-management` 💬3
- [#12026](https://github.com/QwenLM/qwen-code/issues/12026) core: export the tool-queue rejection message so CLI cancellation classification cannot silently drift `priority/P3` `status/blocked` `category/core` `scope/testing` 💬3
- [#12030](https://github.com/QwenLM/qwen-code/issues/12030) feat(extensions): an extension's context file is unconditionally resident, with no path gating, budget, or attribution `priority/P2` `type/feature-request` `category/core` `scope/token-management` 💬3
- [#12025](https://github.com/QwenLM/qwen-code/issues/12025) ci(desktop): four real gaps in the already-published skip gate shipped by #12013 (fix exists as orphan commit 686614d72d) `priority/P2` `type/bug` `category/development` `scope/github-actions` 💬3
- [#12029](https://github.com/QwenLM/qwen-code/issues/12029) Percentage-of-context-window budgets scale the wrong way: ToolSearch preload never engages, and the always-on context warning never fires, on large windows `priority/P2` `model/long-context` `type/bug` `category/core` 💬3
- [#12033](https://github.com/QwenLM/qwen-code/issues/12033) /context accounting does not close: two estimators, a documented CJK undercount, and skill bodies silently attributed to messages `priority/P2` `type/bug` `category/cli` `scope/commands` 💬3
- [#12020](https://github.com/QwenLM/qwen-code/issues/12020) bug(acp): retry progress is invisible in VS Code, the daemon HTTP API and Web Shell (core retries, nothing tells the user) `priority/P2` `type/bug` `category/integration` `scope/vscode` 💬3
- [#12021](https://github.com/QwenLM/qwen-code/issues/12021) bug(daemon/web-shell): existing-session open still POSTs /session/:id/load; channel.initialize 10s timeout SIGKILLs ACP child `priority/P1` `type/bug` `category/core` `category/performance` 💬3
- [#11985](https://github.com/QwenLM/qwen-code/issues/11985) feat(channels): carry sender identity in DingTalk direct messages `priority/P3` `type/feature-request` `category/integration` `status/ready-for-human` 💬3
- [#12002](https://github.com/QwenLM/qwen-code/issues/12002) [security] Tool-call function_args with inline secrets are recorded verbatim in chat-recording JSONL / ui-telemetry (off-device exposure) `priority/P1` `type/bug` `category/security` `scope/session-management` 💬3
- [#11997](https://github.com/QwenLM/qwen-code/issues/11997) bug(web-shell): label-only composer / user-message tags have zero padding-right `priority/P2` `type/bug` `category/ui` `scope/web-shell` 💬3
- [#11993](https://github.com/QwenLM/qwen-code/issues/11993) bug(cli): extension workflow Skills are unavailable on the first headless turn `priority/P2` `type/bug` `category/cli` `scope/commands` 💬3
- [#12043](https://github.com/QwenLM/qwen-code/issues/12043) Main CI failed: Qwen Code CI on b8def02aadfc `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#12006](https://github.com/QwenLM/qwen-code/issues/12006) Main CI failed: E2E Tests on aff26a8f36df `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#12045](https://github.com/QwenLM/qwen-code/issues/12045) Deferred review findings from PR #11658: fix(cli): keep expanded OpenTUI confirmations inside the viewport (#11654) 💬1

#### 🔒 Closed Issues
- [#5883](https://github.com/QwenLM/qwen-code/issues/5883) Proposal: Consolidate the chat panel (input + conversation flow) onto web-shell across web-shell, VSCode webview, and desktop
- [#11955](https://github.com/QwenLM/qwen-code/issues/11955) Desktop app ignores ui.theme and general.language settings
- [#11976](https://github.com/QwenLM/qwen-code/issues/11976) Webview fails to reach workspace daemon in VS Code Remote (Container) due to dynamic port binding without asExternalUri
- [#11866](https://github.com/QwenLM/qwen-code/issues/11866) feat(serve): split bridge.ts along the control-plane / harness boundary
- [#11953](https://github.com/QwenLM/qwen-code/issues/11953) ci(desktop): skip the build matrix when the desktop version is already fully published
- [#11905](https://github.com/QwenLM/qwen-code/issues/11905) [Bug] MiniMax rejects parameterless built-in tools with error 2013
- [#12012](https://github.com/QwenLM/qwen-code/issues/12012) ACP auto-memory extraction fails after successful turns with no cache-safe params
- [#12010](https://github.com/QwenLM/qwen-code/issues/12010) web-shell: two navigation paths drop a working daemon credential and report success
- [#11427](https://github.com/QwenLM/qwen-code/issues/11427) docs(daemon): integration guide — which daemon path to take, and what each one requires
- [#11985](https://github.com/QwenLM/qwen-code/issues/11985) feat(channels): carry sender identity in DingTalk direct messages
- [#9115](https://github.com/QwenLM/qwen-code/issues/9115) feat(core): Distinguish compression API failures from empty summaries with a distinct CompressionStatus
- [#11993](https://github.com/QwenLM/qwen-code/issues/11993) bug(cli): extension workflow Skills are unavailable on the first headless turn
- [#11867](https://github.com/QwenLM/qwen-code/issues/11867) feat(serve): make the daemon protocol a normative spec with a conformance merge gate

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

**Stars:** 389,904 · **Open issues:** 7,540 · **Last push:** <1h ago

On September 17, 2026, there were no new releases for OpenClaw, but several significant updates were merged into the codebase. Notably, issue #150368 addressed the retention of worker failure classification post-cleanup, and #117781 enforced a unified deadline during DashScope generation. Other important merges included #150392, which fixed false update cleanup failures when the host is under load, and #150321, refining Control UI configuration to reject SecretRef account passwords. Among the new issues, #150201 emerged as a critical concern, detailing that the Windows update candidate snapshot fails on version 2026.9.3, coupled with a Gateway SQLite check timeout, highlighting potential impacts on user experience.

#### ✅ Merged PRs
- [#150368](https://github.com/openclaw/openclaw/pull/150368) fix(sqlite): retain worker failure classification after cleanup errors
- [#117781](https://github.com/openclaw/openclaw/pull/117781) fix(video): enforce one deadline across DashScope generation
- [#150411](https://github.com/openclaw/openclaw/pull/150411) refactor(qa-lab): derive token efficiency contracts
- [#150412](https://github.com/openclaw/openclaw/pull/150412) refactor(openai): derive realtime session contracts
- [#150409](https://github.com/openclaw/openclaw/pull/150409) refactor(deepinfra): remove duplicate video container test
- [#148907](https://github.com/openclaw/openclaw/pull/148907) fix(build): avoid duplicate asset copies during merge conflict resolution
- [#117849](https://github.com/openclaw/openclaw/pull/117849) fix(google): reject malformed embeddings before memory indexing
- [#129659](https://github.com/openclaw/openclaw/pull/129659) fix(openrouter): unsupported models incorrectly receive tool definitions
- [#129301](https://github.com/openclaw/openclaw/pull/129301) fix(daemon): discover supported versioned Node runtimes
- [#150389](https://github.com/openclaw/openclaw/pull/150389) refactor(sessions): move Goal state events to the shared worker
- [#150321](https://github.com/openclaw/openclaw/pull/150321) fix(matrix): Control UI config save rejects SecretRef account passwords
- [#150103](https://github.com/openclaw/openclaw/pull/150103) refactor: reduce allocations while listing sessions
- [#146104](https://github.com/openclaw/openclaw/pull/146104) fix(test): serve release artifacts with special filenames
- [#150392](https://github.com/openclaw/openclaw/pull/150392) fix: avoid false update cleanup failures when the host is busy
- [#150263](https://github.com/openclaw/openclaw/pull/150263) fix: preserve file operations with fs-safe 0.13.1
- [#149585](https://github.com/openclaw/openclaw/pull/149585) improve(pr): reuse managed source clones for cold worktrees
- [#150377](https://github.com/openclaw/openclaw/pull/150377) refactor(sdk): remove unused graceful package-test cleanup
- [#149287](https://github.com/openclaw/openclaw/pull/149287) feat: browse complete plugin skill bundles
- [#149913](https://github.com/openclaw/openclaw/pull/149913) fix(update): finish deferred migrations from older updaters
- [#150092](https://github.com/openclaw/openclaw/pull/150092) fix: agent switching leaves the session list waiting
- [#150384](https://github.com/openclaw/openclaw/pull/150384) chore(ui): refresh control ui locales
- [#150183](https://github.com/openclaw/openclaw/pull/150183) refactor(irc): narrow inbound runtime to logging capability
- [#80921](https://github.com/openclaw/openclaw/pull/80921) fix(gateway): bound advisory bind probes and close late listeners
- [#150385](https://github.com/openclaw/openclaw/pull/150385) fix(release): hydrate frozen scenario catalog admission
- [#150312](https://github.com/openclaw/openclaw/pull/150312) fix(update): preserve config when plugin load paths are unavailable
- [#92223](https://github.com/openclaw/openclaw/pull/92223) fix(chat): restore large attachments without losing queued sends
- [#150314](https://github.com/openclaw/openclaw/pull/150314) fix(memory): reduce index publication startup latency
- [#150181](https://github.com/openclaw/openclaw/pull/150181) fix(ui): keep delayed attachments out of rewound drafts
- [#150177](https://github.com/openclaw/openclaw/pull/150177) fix(browser): keep async CDP errors from terminating the Gateway
- [#149286](https://github.com/openclaw/openclaw/pull/149286) feat: inspect and edit plugin credentials in settings
- [#149647](https://github.com/openclaw/openclaw/pull/149647) fix(codex): resume remote conversations after instruction changes
- [#150356](https://github.com/openclaw/openclaw/pull/150356) test(qa): narrow Telegram startup credential imports
- [#150357](https://github.com/openclaw/openclaw/pull/150357) test(qa): serialize heavyweight TUI PTY scenarios
- [#150358](https://github.com/openclaw/openclaw/pull/150358) test(qa): bound Slack disabled warning observation
- [#150362](https://github.com/openclaw/openclaw/pull/150362) test(qa): tolerate repeated Codex discovery RPCs
- [#117319](https://github.com/openclaw/openclaw/pull/117319) fix(deepinfra): validate inline video before decoding
- [#150333](https://github.com/openclaw/openclaw/pull/150333) fix: release inventory checks fail after publication deferral
- [#150360](https://github.com/openclaw/openclaw/pull/150360) fix(test): prevent native worker startup timeouts in extension batches
- [#150116](https://github.com/openclaw/openclaw/pull/150116) test: reuse task maintenance runtime fixture
- [#150236](https://github.com/openclaw/openclaw/pull/150236) fix: prevent plugin state open failures after read-only inspection
- [#150339](https://github.com/openclaw/openclaw/pull/150339) fix(gateway): keep CLI tools working after caller scope closes
- [#149518](https://github.com/openclaw/openclaw/pull/149518) fix(agents): halt model fallback on closed session placement turn settlement aborts (#149239)
- [#149642](https://github.com/openclaw/openclaw/pull/149642) fix(agents): Don't show an error message if the agent returns NO_REPLY
- [#111051](https://github.com/openclaw/openclaw/pull/111051) fix(qa): Mantis before-after exits when a lane command stalls
- [#117232](https://github.com/openclaw/openclaw/pull/117232) fix(plugins): canonicalize service registration identity
- [#150352](https://github.com/openclaw/openclaw/pull/150352) chore(ci): cover warning-only lint exits
- [#150303](https://github.com/openclaw/openclaw/pull/150303) chore(ui): refresh control ui locales
- [#150096](https://github.com/openclaw/openclaw/pull/150096) fix(control-ui): new conversations nest under Home when it has child sessions
- [#150342](https://github.com/openclaw/openclaw/pull/150342) improve(ci): shorten serial Linux plugin lint
- [#150340](https://github.com/openclaw/openclaw/pull/150340) fix(test): reduce doctor import memory fixture work
- [#149626](https://github.com/openclaw/openclaw/pull/149626) refactor(config): derive audit records from producers
- [#149144](https://github.com/openclaw/openclaw/pull/149144) refactor(channels): consolidate message proof verification
- [#149146](https://github.com/openclaw/openclaw/pull/149146) refactor(resources): share directory traversal
- [#149147](https://github.com/openclaw/openclaw/pull/149147) refactor(codex): share JSON schema normalization
- [#150327](https://github.com/openclaw/openclaw/pull/150327) refactor(test): remove retired GitHub jq fixture branches
- [#137052](https://github.com/openclaw/openclaw/pull/137052) fix: prevent macOS crashes when cookie sync is enabled
- [#150338](https://github.com/openclaw/openclaw/pull/150338) fix(ios): avoid voice stalls when diagnostic output blocks
- [#147903](https://github.com/openclaw/openclaw/pull/147903) fix(codex): recover admitted native completions after restart
- [#148683](https://github.com/openclaw/openclaw/pull/148683) fix(gateway-client): reconcile toolUse-persisted final answers with live projection
- [#150341](https://github.com/openclaw/openclaw/pull/150341) test(release): align publisher inventory with deferred plugins
- [#150330](https://github.com/openclaw/openclaw/pull/150330) style(ci): format ci-changed-scope test
- [#150010](https://github.com/openclaw/openclaw/pull/150010) fix(projects): preserve Windows environment snapshots
- [#110657](https://github.com/openclaw/openclaw/pull/110657) fix(install): honor shared timeout during curl connection setup
- [#150304](https://github.com/openclaw/openclaw/pull/150304) fix(ci): preserve release ancestry hydration across changed shallow cuts
- [#150292](https://github.com/openclaw/openclaw/pull/150292) fix(macos): restore strict-concurrency chat handoff builds
- [#120881](https://github.com/openclaw/openclaw/pull/120881) fix(models): stop discovery from rewriting saved catalogs
- [#150318](https://github.com/openclaw/openclaw/pull/150318) fix(plugins): catalog newly publishable plugins
- [#149587](https://github.com/openclaw/openclaw/pull/149587) fix: keep source-only sessions free of dependency installs
- [#150316](https://github.com/openclaw/openclaw/pull/150316) fix(plugins): keep unpublished packages bundled until release
- [#135276](https://github.com/openclaw/openclaw/pull/135276) fix(ci): run Android tests for shared Talk config changes
- [#150175](https://github.com/openclaw/openclaw/pull/150175) fix(android): Talk keeps beeping without replying and ignores the stt-tts voice mode
- [#111349](https://github.com/openclaw/openclaw/pull/111349) fix(plugins): pretag pack checks stop hanging on stalled commands
- [#149869](https://github.com/openclaw/openclaw/pull/149869) fix: preserve sender provenance through compaction
- [#150282](https://github.com/openclaw/openclaw/pull/150282) refactor(test): remove unused Rust lifecycle test inputs
- [#142678](https://github.com/openclaw/openclaw/pull/142678) fix: HTML-only email stalls packaged IMAP delivery
- [#149757](https://github.com/openclaw/openclaw/pull/149757) fix(onboard): preserve discovery for explicit proxy URLs
- [#150218](https://github.com/openclaw/openclaw/pull/150218) feat(ui): control task progress with drag and scroll gestures
- [#149237](https://github.com/openclaw/openclaw/pull/149237) docs: distinguish Android setup code from gateway join URL (#141698)
- [#150284](https://github.com/openclaw/openclaw/pull/150284) fix(test): keep process ownership case names stable across runs
- [#150288](https://github.com/openclaw/openclaw/pull/150288) fix(test): capture child diagnostics before CLI deadlock cleanup
- [#150291](https://github.com/openclaw/openclaw/pull/150291) feat(plugins): prepare three bundled plugins for catalog publication
- [#150269](https://github.com/openclaw/openclaw/pull/150269) fix(status): make online JSON status responsive on large fleets
- [#150285](https://github.com/openclaw/openclaw/pull/150285) chore(ui): refresh control ui locales
- [#149130](https://github.com/openclaw/openclaw/pull/149130) fix(agents): preserve CLI timeout budgets across process freezes
- [#147807](https://github.com/openclaw/openclaw/pull/147807) fix: hyphenated per-day/week/month rate-limit messages retried as transient instead of failing over
- [#149246](https://github.com/openclaw/openclaw/pull/149246) feat: edit plugin settings in author-defined groups
- [#149897](https://github.com/openclaw/openclaw/pull/149897) fix(cli): honor unset home values in path displays
- [#150276](https://github.com/openclaw/openclaw/pull/150276) fix(test): retain desktop Gateway readiness failure details
- [#117328](https://github.com/openclaw/openclaw/pull/117328) fix(agents): preserve history when context assembly fails
- [#150273](https://github.com/openclaw/openclaw/pull/150273) fix(release): keep complete SDK reports within artifact limits
- [#149951](https://github.com/openclaw/openclaw/pull/149951) improve(doctor): keep CLI responsive during database-size checks
- [#149776](https://github.com/openclaw/openclaw/pull/149776) fix: PR review cannot initialize inside the macOS sandbox
- [#148960](https://github.com/openclaw/openclaw/pull/148960) fix(auth): keep credential updates consistent during contention
- [#150260](https://github.com/openclaw/openclaw/pull/150260) fix(memory): avoid false annotation indexing failures under load
- [#137831](https://github.com/openclaw/openclaw/pull/137831) fix: preserve literal paths in Linux service units
- [#149216](https://github.com/openclaw/openclaw/pull/149216) feat: unify installed and catalog plugin overviews
- [#150095](https://github.com/openclaw/openclaw/pull/150095) fix(ui): stop sidebar children jumping during cached refreshes
- [#150258](https://github.com/openclaw/openclaw/pull/150258) chore(ui): refresh control ui locales
- [#150226](https://github.com/openclaw/openclaw/pull/150226) ci: refresh compact timing weights and split oversized groups
- [#149870](https://github.com/openclaw/openclaw/pull/149870) fix(system-agent): allow approved config writes and return validation errors
- [#150158](https://github.com/openclaw/openclaw/pull/150158) fix(ui-test): avoid false off-frame stream budget failures
- [#150233](https://github.com/openclaw/openclaw/pull/150233) fix(browser): keep new tabs accessible during their first navigation
- [#150136](https://github.com/openclaw/openclaw/pull/150136) fix(agents): prepare capabilities before local selection
- [#150188](https://github.com/openclaw/openclaw/pull/150188) fix(gateway): reduce long fleet startup maintenance waits
- [#149924](https://github.com/openclaw/openclaw/pull/149924) chore(ui): refresh control ui locales
- [#150216](https://github.com/openclaw/openclaw/pull/150216) fix: allow unlocked Discord thread reopening
- [#150221](https://github.com/openclaw/openclaw/pull/150221) fix: preserve cron authority across payload changes
- [#150232](https://github.com/openclaw/openclaw/pull/150232) refactor(test): remove duplicate transcript formatting case
- [#150186](https://github.com/openclaw/openclaw/pull/150186) improve: load session history with less repeated work
- [#148929](https://github.com/openclaw/openclaw/pull/148929) refactor(agents): defer unused MCP mirror serialization
- [#150015](https://github.com/openclaw/openclaw/pull/150015) fix(doctor): archive orphan transcripts after deferred imports
- [#149711](https://github.com/openclaw/openclaw/pull/149711) improve: reduce Git work for session diffs before the first commit
- [#149392](https://github.com/openclaw/openclaw/pull/149392) refactor(projects): resolve refresh ownership in state worker
- [#149989](https://github.com/openclaw/openclaw/pull/149989) fix: name the focused chat header after closing a split
- [#149908](https://github.com/openclaw/openclaw/pull/149908) chore(deps): refresh dependencies with seven-day cutoff
- [#149162](https://github.com/openclaw/openclaw/pull/149162) refactor: use authored configuration metadata without field badges
- [#150016](https://github.com/openclaw/openclaw/pull/150016) fix: keep unavailable configured plugins from rolling back updates
- [#150195](https://github.com/openclaw/openclaw/pull/150195) improve(process): identify unfinished service cleanup joins
- [#116863](https://github.com/openclaw/openclaw/pull/116863) feat(rust): add authenticated node sidecar bridge
- [#150208](https://github.com/openclaw/openclaw/pull/150208) test(setup): remove eager assertion diagnostics
- [#149547](https://github.com/openclaw/openclaw/pull/149547) fix(usage): preserve tool calls and count loaded interval messages
- [#116450](https://github.com/openclaw/openclaw/pull/116450) feat(rust): add the embeddable node runtime lifecycle
- [#149615](https://github.com/openclaw/openclaw/pull/149615) fix(ai): inject session-affinity headers for managed openai-completions transport
- [#150213](https://github.com/openclaw/openclaw/pull/150213) improve(telegram): speed up formatting long replies
- [#150199](https://github.com/openclaw/openclaw/pull/150199) improve(workers): reuse verified archives after Gateway restart
- [#150207](https://github.com/openclaw/openclaw/pull/150207) refactor(test): remove unused web output fixture modes
- [#150206](https://github.com/openclaw/openclaw/pull/150206) fix: await MCP component imports before message test teardown
- [#116050](https://github.com/openclaw/openclaw/pull/116050) feat(rust): add shared gateway client and node host
- [#150194](https://github.com/openclaw/openclaw/pull/150194) perf(ui): avoid repeated session field reconciliation
- [#150197](https://github.com/openclaw/openclaw/pull/150197) test(doctor): avoid repeated bootstrap in backup matching cases
- [#150106](https://github.com/openclaw/openclaw/pull/150106) fix: preserve thinking choices across models and runtimes
- [#149000](https://github.com/openclaw/openclaw/pull/149000) fix(codex): resume settled failures on a fresh client
- [#150184](https://github.com/openclaw/openclaw/pull/150184) fix(doctor): keep SQLite worker debug logs out of JSON output
- [#150185](https://github.com/openclaw/openclaw/pull/150185) fix(ui): show steering skips without blaming queued user messages
- [#150154](https://github.com/openclaw/openclaw/pull/150154) fix(plugins): resolve Bun native generation targets
- [#150176](https://github.com/openclaw/openclaw/pull/150176) refactor(ui): remove redundant quota group count check
- [#150137](https://github.com/openclaw/openclaw/pull/150137) fix(ci): restore planned capacity for compact and real-Gateway tests
- [#150163](https://github.com/openclaw/openclaw/pull/150163) fix(ui): reveal quoted messages inside folded work
- [#150004](https://github.com/openclaw/openclaw/pull/150004) fix(codex): avoid fleet startup stalls during catalog registration
- [#150006](https://github.com/openclaw/openclaw/pull/150006) fix(ui): make settings search reach typography controls
- [#150040](https://github.com/openclaw/openclaw/pull/150040) fix(auto-reply): keep preflight compaction alive under the ingress adoption watchdog
- [#150162](https://github.com/openclaw/openclaw/pull/150162) fix(cloud): reduce session and desktop readiness delays
- [#150151](https://github.com/openclaw/openclaw/pull/150151) fix: reject malformed Discord message IDs
- [#150110](https://github.com/openclaw/openclaw/pull/150110) fix: keep legacy session repair out of startup
- [#150065](https://github.com/openclaw/openclaw/pull/150065) fix(subagents): preserve private completion follow-through and cancellation
- [#150090](https://github.com/openclaw/openclaw/pull/150090) fix(memory): keep forget payload guard accurate on newer Node
- [#150082](https://github.com/openclaw/openclaw/pull/150082) feat: show matches for ambiguous automation names
- [#150100](https://github.com/openclaw/openclaw/pull/150100) test(audit-infra-scripts): remove low-value and duplicative tests
- [#150074](https://github.com/openclaw/openclaw/pull/150074) fix(ui): cancel delayed copies from closed file previews
- [#150170](https://github.com/openclaw/openclaw/pull/150170) fix(test): avoid unused plugins in placement abandonment
- [#150061](https://github.com/openclaw/openclaw/pull/150061) fix(update): keep migrated update JSON output parseable
- [#150164](https://github.com/openclaw/openclaw/pull/150164) fix(ui): preserve command palette text composition
- [#149891](https://github.com/openclaw/openclaw/pull/149891) chore(i18n): refresh native locales
- [#148950](https://github.com/openclaw/openclaw/pull/148950) improve: reduce work when archiving old session history
- [#150168](https://github.com/openclaw/openclaw/pull/150168) fix(ui-test): keep Activity catch-up snapshots current
- [#150028](https://github.com/openclaw/openclaw/pull/150028) fix(telegram): typed slash commands lose the replied-to message and its photo
- [#149963](https://github.com/openclaw/openclaw/pull/149963) fix(gateway): recover workspace sync from slow process probes
- [#150089](https://github.com/openclaw/openclaw/pull/150089) fix: keep Claude automations on their captured execution host
- [#150086](https://github.com/openclaw/openclaw/pull/150086) fix(ui): keep Usage results tied to their selected query
- [#150160](https://github.com/openclaw/openclaw/pull/150160) chore: report declaration test phases on failure
- [#150039](https://github.com/openclaw/openclaw/pull/150039) fix(ui): retain Home command recovery across composer handoffs
- [#148598](https://github.com/openclaw/openclaw/pull/148598) refactor(tests): reuse agent-exec runtime fixtures
- [#149973](https://github.com/openclaw/openclaw/pull/149973) fix(ui): preserve incognito drafts across route navigation
- [#149316](https://github.com/openclaw/openclaw/pull/149316) improve: reduce canonical schema validation reads
- [#150146](https://github.com/openclaw/openclaw/pull/150146) fix(sessions): preserve Windows roots during entry writes
- [#150066](https://github.com/openclaw/openclaw/pull/150066) fix(ui): return to queued edits while another page loads
- [#150077](https://github.com/openclaw/openclaw/pull/150077) improve(upgrade): cover project workspace startup migration
- [#150155](https://github.com/openclaw/openclaw/pull/150155) refactor(oc-path): remove duplicate fixture round-trip check
- [#150157](https://github.com/openclaw/openclaw/pull/150157) docs: explain cross-provider messaging defaults and upgrade impact
- [#149678](https://github.com/openclaw/openclaw/pull/149678) fix(cli): stop Bash flag completion after the option terminator
- [#150101](https://github.com/openclaw/openclaw/pull/150101) fix(ui): retain confirmed model selection after refresh failure
- [#150145](https://github.com/openclaw/openclaw/pull/150145) fix: quota recovery CI observes auxiliary replies too early
- [#150108](https://github.com/openclaw/openclaw/pull/150108) fix(ui): retain archive confirmation after leaving Sessions
- [#150125](https://github.com/openclaw/openclaw/pull/150125) fix(ui): keep sidebar pagination after switching agents during deletion
- [#150134](https://github.com/openclaw/openclaw/pull/150134) fix(test): preserve module caches when merging reports
- [#150020](https://github.com/openclaw/openclaw/pull/150020) fix(btw): side questions ignore the image attached to the message
- [#150133](https://github.com/openclaw/openclaw/pull/150133) fix(ui): preserve Back navigation through moved settings links
- [#149925](https://github.com/openclaw/openclaw/pull/149925) fix(agents): deliver one answer per steered user input
- [#150127](https://github.com/openclaw/openclaw/pull/150127) refactor(sessions): isolate session entry mutations
- [#150129](https://github.com/openclaw/openclaw/pull/150129) fix(ui): preserve automation selection when an earlier save finishes
- [#150080](https://github.com/openclaw/openclaw/pull/150080) fix(telegram): wait for accepted work during account shutdown
- [#150118](https://github.com/openclaw/openclaw/pull/150118) fix(ui): keep parent navigation when a folder is unavailable
- [#149914](https://github.com/openclaw/openclaw/pull/149914) fix(worktrees): preserve work during creation and cleanup races
- [#149826](https://github.com/openclaw/openclaw/pull/149826) fix(ui): move queued-edit expressions to the session-controls owner (chat pane lint cap)
- [#150131](https://github.com/openclaw/openclaw/pull/150131) refactor(test): remove unused mock HTTP repeat option
- [#149386](https://github.com/openclaw/openclaw/pull/149386) refactor(projects): move registration to shared state worker
- [#149964](https://github.com/openclaw/openclaw/pull/149964) fix(doctor): avoid stale migration checks when archiving retained sessions
- [#149177](https://github.com/openclaw/openclaw/pull/149177) test: retain compaction and retry boundary coverage
- [#150121](https://github.com/openclaw/openclaw/pull/150121) fix(update): warn when canary cleanup remains unconfirmed
- [#149849](https://github.com/openclaw/openclaw/pull/149849) refactor(reef): move replay persistence to SQLite workers
- [#150112](https://github.com/openclaw/openclaw/pull/150112) fix(codex): bound session catalog memory and preserve tied rows
- [#149837](https://github.com/openclaw/openclaw/pull/149837) fix(plugins): retain CLI backend capabilities when inspecting disabled plugins

#### 🐛 New Issues
- [#150201](https://github.com/openclaw/openclaw/issues/150201) Windows: update candidate snapshot fails on 2026.9.3; Gateway SQLite check times out `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬14
- [#149985](https://github.com/openclaw/openclaw/issues/149985) [Bug]: before_agent_reply claimed replies are delivered but missing from conversation history `bug` `no-stale` `bug:behavior` `P2` 💬5
- [#149569](https://github.com/openclaw/openclaw/issues/149569) [Bug]: logs --plain still emits ANSI colors in diagnostics `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#149797](https://github.com/openclaw/openclaw/issues/149797) [Bug]: sessions_send announce step wakes the target with an empty transcript message, so a relayed reply is indistinguishable from a spurious wake `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬3
- [#149727](https://github.com/openclaw/openclaw/issues/149727) WebUI: measurement scroll compensation can trigger extra history loads `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬3
- [#150204](https://github.com/openclaw/openclaw/issues/150204) [Bug]: Talk on gemini-3.8-live: agent consult fails with "Session transcript keyed user is outside the current turn" (voice transcript lands before run adoption) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#149912](https://github.com/openclaw/openclaw/issues/149912) [Bug]: Control UI renders the pre-tool text twice and the isolated-finalization answer three times on 2026.9.2 (variant of #85771) `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬3
- [#149886](https://github.com/openclaw/openclaw/issues/149886) [Bug]: session_status shows global thinking instead of model default `no-stale` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` 💬3
- [#150165](https://github.com/openclaw/openclaw/issues/150165) [Bug]: Feishu merge_forward expansion drops sender and timestamp for every sub-message `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#150123](https://github.com/openclaw/openclaw/issues/150123) [Bug]: Package update stops managed Gateway while scheduled run is active `P1` `impact:session-state` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬3
- [#149994](https://github.com/openclaw/openclaw/issues/149994) [Bug]: the /approve page's Allow button is white text on a near-white background — it looks like an empty button `bug` `no-stale` `bug:behavior` `P2` 💬3
- [#149672](https://github.com/openclaw/openclaw/issues/149672) [Bug]: Control UI channel setup for SMS keeps asking to install @openclaw/sms (already installed and loaded); each click reinstalls, changes installPath, restarts the gateway under the page `bug` `no-stale` `bug:behavior` `clawsweeper:fix-shape-clear` 💬3
- [#149618](https://github.com/openclaw/openclaw/issues/149618) WebUI: Show earlier loses keyboard focus while loading older messages `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬3
- [#149940](https://github.com/openclaw/openclaw/issues/149940) [Bug]: scheduled-task and cron/exec heartbeat prompts lack heartbeat_respond tool-absent fallback, quiet checks still deliver prose `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#149887](https://github.com/openclaw/openclaw/issues/149887) Control UI: cached rejected IndexedDB open permanently disables attachment staging `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#149619](https://github.com/openclaw/openclaw/issues/149619) WebUI: older-history loading briefly shifts retained messages by 82.5 px `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬3
- [#149684](https://github.com/openclaw/openclaw/issues/149684) [Feature]: Restore points for rolling an install back to a retained state capture `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬3
- [#149631](https://github.com/openclaw/openclaw/issues/149631) [Bug]: PR preflight throws at 121 jobs against the 120 Node matrix cap `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#150240](https://github.com/openclaw/openclaw/issues/150240) [Bug]: Control UI config save fails: SecretRef at channels.matrix.accounts.<account>.password changed source/provider while id is redacted (2026.9.x) `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬2
- [#150322](https://github.com/openclaw/openclaw/issues/150322) [Bug]: Inbound media://inbound attachment cannot be opened from the Control UI file panel — sessions.files.get returns 'session file not found' `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#150386](https://github.com/openclaw/openclaw/issues/150386) Update failure: runtime-verification-failed (2026.9.3) `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#150126](https://github.com/openclaw/openclaw/issues/150126) Browser target crash causes unhandled Playwright rejection that exits the entire Gateway (kills all in-flight agent runs and crons) `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬2
- [#150378](https://github.com/openclaw/openclaw/issues/150378) Update failure: runtime-verification-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#150369](https://github.com/openclaw/openclaw/issues/150369) Update failure: unexpected-error (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#150366](https://github.com/openclaw/openclaw/issues/150366) Update failure: not-git-install (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#150332](https://github.com/openclaw/openclaw/issues/150332) Update failure: database-schema-preflight (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#150328](https://github.com/openclaw/openclaw/issues/150328) Loopback mcp__openclaw__* MCP bridge rejects its own freshly-issued auth token (401) mid-session, on CLI-dispatch backend `P1` `impact:session-state` `impact:auth-provider` 💬2
- [#150298](https://github.com/openclaw/openclaw/issues/150298) [Bug]: Control UI Browser panel drops the Space key when typing into a page (regression in 2026.9.4) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#150254](https://github.com/openclaw/openclaw/issues/150254) Update failure: runtime-verification-failed (2026.9.3) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#150253](https://github.com/openclaw/openclaw/issues/150253) Plugin control-ui panels unavailable behind a reverse proxy (render fine over a direct loopback connection) `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#150247](https://github.com/openclaw/openclaw/issues/150247) OAuth: publish a Client ID Metadata Document so CIMD-only MCP servers work without a manual URL `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#150142](https://github.com/openclaw/openclaw/issues/150142) google-meet: progressive captions stored as duplicate utterances, and Meet notices/UI labels stored as speech `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#150215](https://github.com/openclaw/openclaw/issues/150215) [Bug]:Desktop app update always fails with "update parent owns Gateway activation" after macOS upgrade, even after clean reinstall `bug` `regression` `P0` `impact:ux-release-blocker` 💬2
- [#150210](https://github.com/openclaw/openclaw/issues/150210) [Feature]: let session-bound plugin views stage text context in the composer `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#150132](https://github.com/openclaw/openclaw/issues/150132) claude-cli: `--include-partial-messages` deltas are metered against the frozen 8 MiB per-turn stdout cap, so long tool-heavy turns (~100–130k chars of written code) lose their final reply; the cap has been non-configurable since #111382 `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬2
- [#150173](https://github.com/openclaw/openclaw/issues/150173) [Bug]: OpenRouter usage provider omits exec SecretRef credentials `bug` `no-stale` `bug:behavior` `P2` 💬2
- [#150117](https://github.com/openclaw/openclaw/issues/150117) message(action=thread-create) returns stale message_count:0 / last_message_id:null while actually posting — causes duplicate replies `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#149689](https://github.com/openclaw/openclaw/issues/149689) [Bug]: Codex turn performs 38 compactions while real input stays above its effective context window `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬2
- [#149943](https://github.com/openclaw/openclaw/issues/149943) [Bug]: answering a pending ask_user question from a channel still fails CLI-runner-hosted waiting runs `P2` `impact:session-state` `issue-rating: 🦪 silver shellfish` 💬2
- [#150102](https://github.com/openclaw/openclaw/issues/150102) macOS: installed OpenClaw.app can still run under AppTranslocation when quarantine xattrs remain (breaks Peekaboo bridge TCC) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#150081](https://github.com/openclaw/openclaw/issues/150081) [Bug]: Possible prompt-cache regression on sessions_yield/announce: Ollama cached prefix drops from ~25.4k to ~14.3k tokens `bug` `no-stale` `bug:behavior` `P2` 💬2
- [#150087](https://github.com/openclaw/openclaw/issues/150087) [Bug]: A2A Agent Card advertises an http:// URL behind a TLS-terminating trusted proxy that sends X-Forwarded-Proto: https (advertisedUrl unset) `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#149978](https://github.com/openclaw/openclaw/issues/149978) Gateway startup can retain GiB-sized SQLite staging copies after interruption `maintainer` `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬2
- [#149566](https://github.com/openclaw/openclaw/issues/149566) WebUI: narrow sidebar hovercards can intercept conversation clicks `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#149935](https://github.com/openclaw/openclaw/issues/149935) 主会话重启恢复逐 store 同步读，导致开机冻结 63.6s `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#149949](https://github.com/openclaw/openclaw/issues/149949) sessions.create with an agent-prefixed parentSessionKey fails with 'session key "main" has no explicit owner' under agents.ownership explicit (2026.9.4) - breaks Windows Companion /new `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#149620](https://github.com/openclaw/openclaw/issues/149620) Update failure: unexpected-error (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#149988](https://github.com/openclaw/openclaw/issues/149988) Update failure: global-install-failed (2026.9.3) `P0` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#149979](https://github.com/openclaw/openclaw/issues/149979) [Bug]: IDENTITY.md template incorrectly says set-identity writes values back to the file `bug` `no-stale` `bug:behavior` `P3` 💬2
- [#149931](https://github.com/openclaw/openclaw/issues/149931) health 快照逐 agent 同步读取会话存储，导致事件循环每 60s 冻结 ~22.5s `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#149944](https://github.com/openclaw/openclaw/issues/149944) [Bug]: skills.entries.*.enabled 配置修改在运行中的网关上永远不会热生效（pinned 运行时配置快照过期） `bug` `regression` `P2` `impact:session-state` 💬2
- [#149960](https://github.com/openclaw/openclaw/issues/149960) Codex installed from ClawHub blocks version-bound core update with no declared remote source `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬2
- [#149933](https://github.com/openclaw/openclaw/issues/149933) secrets 运行时快照逐 agent 同步读 auth store，热重载阻塞 ~47s `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#149941](https://github.com/openclaw/openclaw/issues/149941) [Bug]: exec workdir is rejected under sandbox.docker.binds targets while file tools accept them `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#149923](https://github.com/openclaw/openclaw/issues/149923) [Bug]: NVIDIA model catalog omits current chat models present in /v1/models `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#149867](https://github.com/openclaw/openclaw/issues/149867) contextInjection: "continuation-skip" never skips on a completed workspace (completion marker can never be written) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#149804](https://github.com/openclaw/openclaw/issues/149804) [Bug]: macOS app never resolves a node-role token after the v2 token-key migration (role=node loops token_missing forever) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:needs-live-repro` `impact:auth-provider` 💬2
- [#149759](https://github.com/openclaw/openclaw/issues/149759) Update failure: runtime-verification-failed (2026.9.3) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#149694](https://github.com/openclaw/openclaw/issues/149694) Update failure: post-update-failed (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#149564](https://github.com/openclaw/openclaw/issues/149564) cron lane: scheduledToolPolicy.mode="account" resolves to denyAllToolPolicy → scheduled jobs fail with "No callable tools remain" `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#149573](https://github.com/openclaw/openclaw/issues/149573) Update failure: requested (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#150436](https://github.com/openclaw/openclaw/issues/150436) Chat transcript lost its vertical rhythm: tool summaries, attachments and user messages are spaced too far apart `maintainer` 💬1
- [#150432](https://github.com/openclaw/openclaw/issues/150432) Cron runs leak UUIDs into the chat: prompt shows as a user turn and forwarded sender shows the raw run key `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#150430](https://github.com/openclaw/openclaw/issues/150430) Remove the Node execution test-only global bridge `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#150437](https://github.com/openclaw/openclaw/issues/150437) Settings sidebar: add a Community block with the official social channels `maintainer` 💬1
- [#150422](https://github.com/openclaw/openclaw/issues/150422) Mobile web UI: chat bubbles should keep a side margin instead of going full width `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` `impact:ux-friction` 💬1
- [#150418](https://github.com/openclaw/openclaw/issues/150418) Chat: forwarded messages from an unresolved sender should not show the arrow avatar `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#150410](https://github.com/openclaw/openclaw/issues/150410) [Bug]: Settled-tool recovery repeats an already visible answer after NO_REPLY `maintainer` `P2` `clawsweeper:source-repro` `impact:session-state` 💬1
- [#150402](https://github.com/openclaw/openclaw/issues/150402) Control UI shows one ACP task twice as Subagent and ACP `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#150401](https://github.com/openclaw/openclaw/issues/150401) Provider errors with no HTTP status are not failover-eligible, so configured fallbacks are never attempted `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#150403](https://github.com/openclaw/openclaw/issues/150403) Chat: collapsed messages should keep more of their last visible line `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#150387](https://github.com/openclaw/openclaw/issues/150387) Control UI: Logs repeats per-row localized time formatting during idle polling `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#150398](https://github.com/openclaw/openclaw/issues/150398) Control UI: Activity Live header clips actions on narrow screens `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#150390](https://github.com/openclaw/openclaw/issues/150390) Control UI: lazy Logs CSS overrides mobile scrolling and clips the last log entry `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#149583](https://github.com/openclaw/openclaw/issues/149583) [Feature]: Reuse managed source clones for native PR worktrees `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#150391](https://github.com/openclaw/openclaw/issues/150391) Docs: install page for litwindow (managed EU Paperclip + OpenClaw host) `P3` 💬1
- [#150388](https://github.com/openclaw/openclaw/issues/150388) [Bug]: channel messages stay unanswered when compaction auth preparation fails `maintainer` `P1` `clawsweeper:source-repro` `impact:message-loss` 💬1
- [#150383](https://github.com/openclaw/openclaw/issues/150383) Control UI: Devices reloads successfully empty node inventories during initialization `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#150382](https://github.com/openclaw/openclaw/issues/150382) [Bug]: Control UI sidebar Home opens /dashboard/main (empty board) instead of /chat/main after visiting Dashboards `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#150374](https://github.com/openclaw/openclaw/issues/150374) Control UI: long code lines widen the entire Skill Card reader and move its tabs out of view `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#150372](https://github.com/openclaw/openclaw/issues/150372) Failed turns lose their "ended before a reply" notice when another session's turn is active `P2` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬1
- [#150370](https://github.com/openclaw/openclaw/issues/150370) Control UI: Skills Refresh keeps an outdated Skill Card after a same-size edit `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#150367](https://github.com/openclaw/openclaw/issues/150367) Control UI: workspace skill editor omits support-file path requirements `bug` `maintainer` `P3` `clawsweeper:source-repro` 💬1
- [#150363](https://github.com/openclaw/openclaw/issues/150363) Chat: collapse forwarded session messages by default and flatten their attribution row `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` `impact:ux-friction` 💬1
- [#150359](https://github.com/openclaw/openclaw/issues/150359) Control UI: Skills editor uses browser-native confirmations instead of the shared dialog `bug` `maintainer` `P3` `clawsweeper:source-repro` 💬1
- [#150353](https://github.com/openclaw/openclaw/issues/150353) [Bug]: Mixed config writes flatten-refuse include-owned provider catalogs `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#150351](https://github.com/openclaw/openclaw/issues/150351) Control UI: Skills refresh wraps the loading button and shifts inventory by 40 px `bug` `maintainer` `P3` `clawsweeper:source-repro` 💬1
- [#150345](https://github.com/openclaw/openclaw/issues/150345) Control UI: Skills search inherits another group’s collapsed state `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#150323](https://github.com/openclaw/openclaw/issues/150323) [Feature]: distinguish native runtime selection refusals in trusted diagnostics `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#150334](https://github.com/openclaw/openclaw/issues/150334) [Bug]: Google Chat replies land in channel root instead of thread on second message in a thread (regression since 2026.8.1) `P1` `impact:message-loss` 💬1
- [#150030](https://github.com/openclaw/openclaw/issues/150030) [Bug]: Settings search targets remain off-screen after shell focus restoration `maintainer` `P2` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` 💬1
- [#150335](https://github.com/openclaw/openclaw/issues/150335) [Bug]: Workspace migration requires Doctor repair that also performs unwanted housekeeping (2026.9.4) `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#150336](https://github.com/openclaw/openclaw/issues/150336) Release validation fails in trusted harness/bootstrap or optional Swift cache work `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#150326](https://github.com/openclaw/openclaw/issues/150326) Tool-search compaction intermittently defers ALL plugin tools, including catalogMode: "direct-only" (cataloged 4 → 17), leaving none callable `P2` `impact:other` 💬1
- [#150319](https://github.com/openclaw/openclaw/issues/150319) Control UI: transcript search repeats message normalization on query changes `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#150293](https://github.com/openclaw/openclaw/issues/150293) Control UI: leaving Automations silently loses creation drafts `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#149575](https://github.com/openclaw/openclaw/issues/149575) Claude source-review sessions eagerly install the workspace `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#150320](https://github.com/openclaw/openclaw/issues/150320) [Bug]: renaming an agent id leaves the old agent dir; next cold start fails ("agent database … belongs to agent <old>; requested agent <new>") and the crash-loop breaker suppresses channel autostart `clawsweeper:needs-info` `impact:session-state` `impact:message-loss` `impact:crash-loop` 💬1
- [#149868](https://github.com/openclaw/openclaw/issues/149868) Compaction loses persisted group sender provenance, allowing summaries to misattribute history `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#150104](https://github.com/openclaw/openclaw/issues/150104) [Bug]: Android Talk ignores `talk.realtime.mode`, always requests `mode: "realtime"`, so `stt-tts` (custom TTS voice) is unreachable `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#150105](https://github.com/openclaw/openclaw/issues/150105) [Bug]: Android native Talk (non-relay) receives a final speech result but never sends `chat.send`; it loops "Listening" with repeated beeps `P1` `clawsweeper:needs-live-repro` `impact:message-loss` `issue-rating: 🐚 platinum hermit` 💬1
- [#150310](https://github.com/openclaw/openclaw/issues/150310) claude-cli: `--include-partial-messages` deltas are metered against the frozen 8 MiB per-turn stdout cap, so long tool-heavy turns (~100–130k chars of written code) lose their final reply; the cap has been non-configurable since #111382 💬1
- [#150266](https://github.com/openclaw/openclaw/issues/150266) Control UI: Usage replaces its empty state with a full dashboard during refresh `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#150289](https://github.com/openclaw/openclaw/issues/150289) Control UI: Usage empty-state hint is clipped on narrow screens `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#150286](https://github.com/openclaw/openclaw/issues/150286) [Bug]: Runtime facts sections emit a literal "none", so the tail runtime-context carrier is attached to every request and defeats prefix caches on local engines `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#149809](https://github.com/openclaw/openclaw/issues/149809) WebUI: repeated builds with unchanged sources vary eight cached initializer calls and 224 JavaScript fingerprints `maintainer` `P3` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#150275](https://github.com/openclaw/openclaw/issues/150275) Portals fail to load through an HTTPS remote Gateway `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#150264](https://github.com/openclaw/openclaw/issues/150264) [Feature]: Configurable plugin approval timeout (with bounded maximum) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `impact:security` 💬1
- [#150267](https://github.com/openclaw/openclaw/issues/150267) [Feature]: Add Mistral-hosted Z.ai GLM 5.2 to the Mistral provider catalog `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#150262](https://github.com/openclaw/openclaw/issues/150262) [Feature]: Add option to sync LM Studio's available models with OpenClaw after install `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#150229](https://github.com/openclaw/openclaw/issues/150229) Control UI: no-change startup revalidation rebuilds coalesced tool activity groups `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#150261](https://github.com/openclaw/openclaw/issues/150261) Control UI: local image settlement invalidates otherwise unchanged transcript rows `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#150252](https://github.com/openclaw/openclaw/issues/150252) Control UI: agent-roster refresh invalidates chat rows with unchanged identity metadata `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#150251](https://github.com/openclaw/openclaw/issues/150251) Feature: agent-scoped secret audiences and assignment enforcement `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#150250](https://github.com/openclaw/openclaw/issues/150250) [Feature]: Skill Workshop — verify learning coverage and behavioral reuse `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#150248](https://github.com/openclaw/openclaw/issues/150248) [Bug]: image_generate tool description doesn't surface multi-image (images array) support — agents default to single-image edits `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#150239](https://github.com/openclaw/openclaw/issues/150239) Audit writer repeatedly compiles fixed SQLite queries `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#150238](https://github.com/openclaw/openclaw/issues/150238) [Feature]: Add a supported context budget / skip policy for Skill Workshop Experience Review on oversized sessions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#150231](https://github.com/openclaw/openclaw/issues/150231) e2e iteration speed: source-mode fixtures transpile every bundled plugin via Jiti (~340s/case) `P2` `issue-rating: 🌊 off-meta tidepool` `impact:other` 💬1
- [#150202](https://github.com/openclaw/openclaw/issues/150202) Control UI rebuilds cached transcripts when an empty outbox is republished `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#150219](https://github.com/openclaw/openclaw/issues/150219) [Feature]: Support multiple paired extension browsers (per device) and easy switching `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#150211](https://github.com/openclaw/openclaw/issues/150211) Reduce CPU used to format long Telegram replies `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#150205](https://github.com/openclaw/openclaw/issues/150205) [Bug]: Talk gateway-relay with Google Live: any output cancellation closes the whole realtime session after 1 s `P1` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬1
- [#150193](https://github.com/openclaw/openclaw/issues/150193) [Bug]: Slack member-info for the current DM's own participant is rejected by the delegated conversation-read gate on 2026.9.2 (targetless react in the same DM passes) `P2` `impact:security` 💬1
- [#149894](https://github.com/openclaw/openclaw/issues/149894) WebUI: Home can end at the bottom after a staged older-history prepend `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#150189](https://github.com/openclaw/openclaw/issues/150189) [Feature]: Configurable Talk reply timeout shared by all clients (Android native Talk hard-codes 30 s) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#150156](https://github.com/openclaw/openclaw/issues/150156) Reduce delays in cloud session and desktop readiness `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#150180](https://github.com/openclaw/openclaw/issues/150180) [Feature]: Expose the mid-turn prompt-size estimate to plugin tool hooks `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#150179](https://github.com/openclaw/openclaw/issues/150179) [Bug]: Android native Talk beeps every ~3 s while the user is silent (recognizer restarted on each no-speech timeout) `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#150178](https://github.com/openclaw/openclaw/issues/150178) [Bug]: Talk prepends fixed instructions, including a stale ElevenLabs voice hint, to the user's visible chat message `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#150174](https://github.com/openclaw/openclaw/issues/150174) Feature request: grok-CLI agentRuntime harness (parity with google-gemini-cli) `P3` `impact:auth-provider` 💬1
- [#150167](https://github.com/openclaw/openclaw/issues/150167) [Bug]: collector structured_output rejects valid object payload with '<root>: must be object' (openai-completions runtime passes args as string) `P2` `impact:session-state` `issue-rating: 🦪 silver shellfish` 💬1
- [#150161](https://github.com/openclaw/openclaw/issues/150161) [automation] announce-delivery cron turns that answer NO_REPLY log an "isolated finalization" WARN pair and burn an extra model call (2026.8.1) `P2` `impact:other` 💬1
- [#149788](https://github.com/openclaw/openclaw/issues/149788) [Bug]: Bash completion suggests options after the -- terminator `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#150152](https://github.com/openclaw/openclaw/issues/150152) [Bug]: macOS remote gateway pin prevents reconnect after normal TLS certificate renewal `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#150147](https://github.com/openclaw/openclaw/issues/150147) WebUI: Scroll to latest loses transcript keyboard focus `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#150140](https://github.com/openclaw/openclaw/issues/150140) Meeting transcripts: title is always "${providerName} meeting" and is overwritten on stop; no supported rename `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#150143](https://github.com/openclaw/openclaw/issues/150143) Meeting transcripts: gateway restart during a Meet capture loses the session; transcript never finalized (stopped_at NULL, no summary) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#150138](https://github.com/openclaw/openclaw/issues/150138) Gateway startup spends ~1.4 s (of ~3.8 s) spawning four node children for read-only state-DB snapshots `P2` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` `impact:ux-friction` 💬1
- [#150139](https://github.com/openclaw/openclaw/issues/150139) google-meet: no way to set the caption (spoken) language; forced hl=en leaves captions in English `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#150141](https://github.com/openclaw/openclaw/issues/150141) google-meet: transcribe (observe-only) mode can stay in the call with camera on, and sometimes microphone on `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#149855](https://github.com/openclaw/openclaw/issues/149855) [Bug]: inspecting disabled plugins omits declared CLI backend capabilities `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#150119](https://github.com/openclaw/openclaw/issues/150119) Paired computer tool never published despite eligible node + vision model (computerAllowed / embeddedMode gate) `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#150113](https://github.com/openclaw/openclaw/issues/150113) Expose native agent schema validation for an existing SQLite connection `enhancement` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#150021](https://github.com/openclaw/openclaw/issues/150021) [Bug]: Control UI Session Sources collapse and re-expand when returning to Appearance `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#150085](https://github.com/openclaw/openclaw/issues/150085) [Bug]: Control UI model picker cuts model names to one line, so OpenRouter models of the same provider are indistinguishable ("DeepSeek: DeepSeek…") `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#150083](https://github.com/openclaw/openclaw/issues/150083) [Bug]: re-running openclaw onboard switches an existing trusted-proxy gateway to token auth without asking (only token and password modes carry over) `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#150054](https://github.com/openclaw/openclaw/issues/150054) Control UI: /new creates a session nested under the current one `maintainer` `P2` `clawsweeper:source-repro` `impact:session-state` 💬1
- [#149854](https://github.com/openclaw/openclaw/issues/149854) [Bug]: Anthropic-compatible premature EOF silently completes partial replies or skips tools `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#150069](https://github.com/openclaw/openclaw/issues/150069) [Feature]: Search automation inventories from the CLI `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#150068](https://github.com/openclaw/openclaw/issues/150068) Update failure: runtime-verification-failed (2026.9.3) `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#149947](https://github.com/openclaw/openclaw/issues/149947) [Feature]: Managed multi-repository tasks with unified review, recovery, and linked PRs `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#150060](https://github.com/openclaw/openclaw/issues/150060) Server-side Anthropic context clearing has no bootstrap protection and no re-injection after a clearing event `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#150053](https://github.com/openclaw/openclaw/issues/150053) Update failure: runtime-verification-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#150024](https://github.com/openclaw/openclaw/issues/150024) Collapsed user prompt: soften the clipped edge and center the Show more toggle `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#150049](https://github.com/openclaw/openclaw/issues/150049) [Bug]: Sidebar Pin/Unpin menu actions lose keyboard focus after Enter `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#150032](https://github.com/openclaw/openclaw/issues/150032) Complete OpenClaw Prime 1.0 cleanup and consolidation `P3` 💬1
- [#150033](https://github.com/openclaw/openclaw/issues/150033) sessions_yield emits a stale tool-failure warning while delegated work is still running `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#150029](https://github.com/openclaw/openclaw/issues/150029) [Feature]: Make the automation announce Inspect link configurable (always | errors | never) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#150012](https://github.com/openclaw/openclaw/issues/150012) [Bug]: `openclaw sessions export-trajectory` changes agent and state SQLite files from 0640 to 0600 and opens the agent database writable `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#149630](https://github.com/openclaw/openclaw/issues/149630) [Bug]: config file imports trim whitespace and read the wrong file `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#149909](https://github.com/openclaw/openclaw/issues/149909) Support multiple plugin targets across lifecycle CLI commands `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#149999](https://github.com/openclaw/openclaw/issues/149999) [Bug]: SMS plugin sends MMS to Twilio instead of rejecting media whose Content-Type is constructor or __proto__ `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#149993](https://github.com/openclaw/openclaw/issues/149993) [Bug]:models auth logout fails with “auth store lock may be busy” even with Gateway and Node stopped `bug` `regression` `P2` `impact:auth-provider` 💬1
- [#149984](https://github.com/openclaw/openclaw/issues/149984) Gateway startup: investigate repeated agent SQLite snapshot waves across admission stages `maintainer` `P2` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` 💬1
- [#149982](https://github.com/openclaw/openclaw/issues/149982) [Bug]: Remote Codex Control UI turns miss their webchat binding `P1` `impact:session-state` 💬1
- [#149980](https://github.com/openclaw/openclaw/issues/149980) macOS app: stale postAppUpdateReceipt causes a permanent "Gateway update needs attention" loop `P0` `impact:ux-release-blocker` 💬1
- [#149966](https://github.com/openclaw/openclaw/issues/149966) Claude CLI backend ends the run when a Bash call is backgrounded, so the notification turn loses its tools `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#149954](https://github.com/openclaw/openclaw/issues/149954) Isolated cron sessions reuse the same session id across runs, contradicting documented "fresh session per run" behavior `P2` `impact:session-state` 💬1
- [#149950](https://github.com/openclaw/openclaw/issues/149950) [BUG] NemoClaw/OpenShell Installation Failure on macOS arm64 `P2` `impact:ux-friction` 💬1
- [#149688](https://github.com/openclaw/openclaw/issues/149688) Context engine bootstrap reads the pending user turn, duplicating it and busting the prompt cache every run `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#149942](https://github.com/openclaw/openclaw/issues/149942) [Bug]: Telegram provider startup blocks the gateway event loop on synchronous persisted thread-binding reads `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#149937](https://github.com/openclaw/openclaw/issues/149937) control-ui 打包产物中图片 URL 正则的转义丢失 `P2` `impact:ux-friction` 💬1
- [#149934](https://github.com/openclaw/openclaw/issues/149934) 插件元数据快照在持久化注册表缺失/失效时被反复全量派生扫描 `P2` `impact:other` 💬1
- [#149936](https://github.com/openclaw/openclaw/issues/149936) `agents.list` 仅翻转 default 也触发全量 provider-auth warm + secrets 重建 `P2` `impact:crash-loop` 💬1
- [#149932](https://github.com/openclaw/openclaw/issues/149932) provider auth warm 逐 agent 同步读 auth store，启动期事件循环阻塞 45–65s `P2` `impact:auth-provider` `impact:crash-loop` 💬1
- [#149927](https://github.com/openclaw/openclaw/issues/149927) [Bug]: Configured retired NVIDIA models remain listed without an unavailable status after refresh `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#149922](https://github.com/openclaw/openclaw/issues/149922) Session keeps answering from a fallback model after the turn-local fallback; Control UI chip follows it `P2` `clawsweeper:needs-info` `impact:session-state` `impact:auth-provider` 💬1
- [#149921](https://github.com/openclaw/openclaw/issues/149921) Windows: gateway self-restart shuts down but never relaunches (scheduled-task handoff short-circuits) `impact:crash-loop` `P0` `impact:ux-release-blocker` 💬1
- [#149682](https://github.com/openclaw/openclaw/issues/149682) Native sidebar previews for pending questions and approvals `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` `impact:ux-friction` 💬1
- [#149904](https://github.com/openclaw/openclaw/issues/149904) WebUI: reconnect briefly grows the composer and shrinks history by 45 px `maintainer` `P3` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` 💬1
- [#149874](https://github.com/openclaw/openclaw/issues/149874) Control UI: sidebar menu updates rebuild unchanged session projections `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#149812](https://github.com/openclaw/openclaw/issues/149812) [Bug]: Mantis candidate-ref test can miss a broken workflow assignment `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#149795](https://github.com/openclaw/openclaw/issues/149795) Browser runtime: consolidate attachment, retirement, and request handling `maintainer` `P2` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` 💬1
- [#149822](https://github.com/openclaw/openclaw/issues/149822) [Bug]: Gateway-initiated update stalls for 5 seconds every 30 seconds while the activation Doctor repairs state `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#149834](https://github.com/openclaw/openclaw/issues/149834) How to manage local adaptations to third-party Skills that get overwritten on every update? `P3` `impact:ux-friction` 💬1
- [#149657](https://github.com/openclaw/openclaw/issues/149657) [Bug]: supported Crabbox binary is blocked by eager installer imports `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#149768](https://github.com/openclaw/openclaw/issues/149768) [Bug]: Template updates can prematurely complete pending workspace onboarding `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#149772](https://github.com/openclaw/openclaw/issues/149772) WebUI: investigate row measurement after history arrives in an inactive retained conversation `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#149806](https://github.com/openclaw/openclaw/issues/149806) run_stalled takeover: message hides the cause, takeover is absent from gateway.log, thresholds unconfigurable `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#149800](https://github.com/openclaw/openclaw/issues/149800) [Bug]: Workboard card disappears from board and later reappears with same ID after gateway restarts `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#149796](https://github.com/openclaw/openclaw/issues/149796) [Bug]: Fresh sessions on 4 independently-configured agents all initialize on a non-primary, non-fallback-configured model (session.started already wrong, no override present) `bug` `bug:behavior` `P1` `clawsweeper:needs-info` 💬1
- [#149785](https://github.com/openclaw/openclaw/issues/149785) [Bug]: Provider usage-limit error surfaces to user without mid-run fallback on first occurrence; fallback engages only on the next run via auth-profile cooldown `P1` `impact:auth-provider` `issue-rating: 🦪 silver shellfish` 💬1
- [#149782](https://github.com/openclaw/openclaw/issues/149782) Browser tool throws "Async work scope is closed" after host reboot, until gateway is manually restarted a second time `P1` `impact:other` 💬1
- [#149744](https://github.com/openclaw/openclaw/issues/149744) [Bug]: agent runtime selection picks the wrong model row when one provider publishes two ids that share a display key `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#149758](https://github.com/openclaw/openclaw/issues/149758) memory: header-only chunks act as vector-rank attractors; no min-chunk-length or heading-merge option at index time `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#149580](https://github.com/openclaw/openclaw/issues/149580) [Feature]: Repository-defined source profiles for managed worktrees `enhancement` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#149683](https://github.com/openclaw/openclaw/issues/149683) Control UI: page-level navigation never updates the URL, and /settings + /dashboard render the chat shell on direct load `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#149628](https://github.com/openclaw/openclaw/issues/149628) Simplify browser internals after readiness and lifecycle fixes `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#149671](https://github.com/openclaw/openclaw/issues/149671) [Bug]: session stranded in `livenessState=blocked` when compaction safeguard rejects summary while user ask is marked pending `bug` `regression` `P2` `impact:session-state` 💬1
- [#149640](https://github.com/openclaw/openclaw/issues/149640) [Bug]: Discord progress draft is left behind (never deleted) when a message is queued as a follow-up behind an active turn (2026.9.4) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#149612](https://github.com/openclaw/openclaw/issues/149612) Provider plugin reload can leave session lane stuck after aborting an in-flight run `bug` `gateway` `maintainer` `P1` 💬1
- [#149611](https://github.com/openclaw/openclaw/issues/149611) memory sync (watch) fires embed storm after 2026.9.4 upgrade - 100+ embed calls, 38 failures, no backoff `P2` `clawsweeper:needs-info` `impact:session-state` `issue-rating: 🦐 gold shrimp` 💬1
- [#149602](https://github.com/openclaw/openclaw/issues/149602) [Bug]: Slack native Stop rejects channel-admitted users with command authorization error `bug` `bug:behavior` `P2` `clawsweeper:needs-info` 💬1
- [#150441](https://github.com/openclaw/openclaw/issues/150441) Feature request: official non-model HDS worker for bounded development-review holds
- [#150438](https://github.com/openclaw/openclaw/issues/150438) Unavailable image attachment card keeps its preview height and loses its border at the corners `maintainer`

#### 🔒 Closed Issues
- [#90098](https://github.com/openclaw/openclaw/issues/90098) Stack-safe large attachment handling for Control UI and gateway
- [#146265](https://github.com/openclaw/openclaw/issues/146265) [Bug]: After gateway restart, shared AsyncWorkScope stays closed process-wide — all DB/Fleet agent tools fail "Async work scope is closed" while gateway health reports OK
- [#87407](https://github.com/openclaw/openclaw/issues/87407) [Bug]: Anthropic provider: UND_ERR_SOCKET keep-alive failures trigger silent mid-turn fallback to OpenAI/Codex
- [#99925](https://github.com/openclaw/openclaw/issues/99925) [Bug] WebChat: new session loses all prior conversation context - AI 'blind' on session start
- [#145929](https://github.com/openclaw/openclaw/issues/145929) Auth profile logout/write permanently fails with lock-may-be-busy after interrupted self-update, even with zero competing processes
- [#111578](https://github.com/openclaw/openclaw/issues/111578) [Bug]: Gateway auth token dropped from service-env on update (recurs despite 2026.7.1 fix) + CLI can't auth locally
- [#118018](https://github.com/openclaw/openclaw/issues/118018) [Bug]: Stale subagent completion can be delivered into a replaced requester lifecycle
- [#149198](https://github.com/openclaw/openclaw/issues/149198) [Bug]: Premature stale_lane_task release fails long cursor-cli cron
- [#119125](https://github.com/openclaw/openclaw/issues/119125) Codex sandboxExecServer passes non-absolute cwd to Docker exec
- [#148898](https://github.com/openclaw/openclaw/issues/148898) [Bug]: 2026.9.4 claude-cli no-output watchdog counts host-suspend time as CLI silence — laptop sleep kills in-flight turns (regression since 2026.8.2)
- [#148837](https://github.com/openclaw/openclaw/issues/148837) [Bug]: Codex configuration refresh cannot recover a settled systemError thread
- [#88077](https://github.com/openclaw/openclaw/issues/88077) [Bug]: Active Memory recall context uses full OpenClaw prompt envelope
- [#134616](https://github.com/openclaw/openclaw/issues/134616) [Bug]: The upgrade of OpenClaw from 2026.7.1 to 2026.8.1 has been unsuccessful.
- [#119074](https://github.com/openclaw/openclaw/issues/119074) [Feature]: A credential should be eligible only where config names it
- [#149569](https://github.com/openclaw/openclaw/issues/149569) [Bug]: logs --plain still emits ANSI colors in diagnostics
- [#145126](https://github.com/openclaw/openclaw/issues/145126) [Bug]: ask_user answer that misses one of several questions is dropped with no reply
- [#116251](https://github.com/openclaw/openclaw/issues/116251) [Feature]: Skip hatch BOOTSTRAP/generic SOUL when agent persona is preconfigured
- [#149312](https://github.com/openclaw/openclaw/issues/149312) [Bug]: memory search can exceed deadline when SQLite reorders KNN join
- [#134430](https://github.com/openclaw/openclaw/issues/134430) [Bug]: macOS app crash-loops with Cookie sync enabled — MainActor isolation check traps in CookieSyncManager.installReadSources
- [#142574](https://github.com/openclaw/openclaw/issues/142574) imap: "sweep failed=Failed to parse HTML" on single-part HTML-only emails (entities@8 vs htmlparser2@10 fromCodePoint mismatch)
- [#149886](https://github.com/openclaw/openclaw/issues/149886) [Bug]: session_status shows global thinking instead of model default
- [#150123](https://github.com/openclaw/openclaw/issues/150123) [Bug]: Package update stops managed Gateway while scheduled run is active
- [#147983](https://github.com/openclaw/openclaw/issues/147983) Update failure: plugin-target-unavailable (2026.9.3)
- [#133564](https://github.com/openclaw/openclaw/issues/133564) feat: improved attachment parsing for iMessage and WhatsApp (images, PDFs, files)
- [#128669](https://github.com/openclaw/openclaw/issues/128669) [Bug]: Control UI loading and reflow motion exceed duration budget
- [#149034](https://github.com/openclaw/openclaw/issues/149034) Control UI Secrets: long secret names overlap the Access column
- [#150240](https://github.com/openclaw/openclaw/issues/150240) [Bug]: Control UI config save fails: SecretRef at channels.matrix.accounts.<account>.password changed source/provider while id is redacted (2026.9.x)
- [#150126](https://github.com/openclaw/openclaw/issues/150126) Browser target crash causes unhandled Playwright rejection that exits the entire Gateway (kills all in-flight agent runs and crons)
- [#150328](https://github.com/openclaw/openclaw/issues/150328) Loopback mcp__openclaw__* MCP bridge rejects its own freshly-issued auth token (401) mid-session, on CLI-dispatch backend
- [#147546](https://github.com/openclaw/openclaw/issues/147546) Rate-limit classifier treats OpenRouter 'free-models-per-day' daily cap as transient (retries instead of failing over)
- [#141698](https://github.com/openclaw/openclaw/issues/141698) [Docs/UX]: Android "setup code" is a different artifact from the gateway join URL — `openclaw qr` is undiscoverable
- [#150215](https://github.com/openclaw/openclaw/issues/150215) [Bug]:Desktop app update always fails with "update parent owns Gateway activation" after macOS upgrade, even after clean reinstall
- [#150210](https://github.com/openclaw/openclaw/issues/150210) [Feature]: let session-bound plugin views stage text context in the composer
- [#127323](https://github.com/openclaw/openclaw/issues/127323) [Bug]: closing a chat split pane strands keyboard focus
- [#149172](https://github.com/openclaw/openclaw/issues/149172) Compaction instruction tests bypass the summary entry point
- [#149988](https://github.com/openclaw/openclaw/issues/149988) Update failure: global-install-failed (2026.9.3)
- [#149944](https://github.com/openclaw/openclaw/issues/149944) [Bug]: skills.entries.*.enabled 配置修改在运行中的网关上永远不会热生效（pinned 运行时配置快照过期）
- [#149960](https://github.com/openclaw/openclaw/issues/149960) Codex installed from ClawHub blocks version-bound core update with no declared remote source
- [#149302](https://github.com/openclaw/openclaw/issues/149302) [Bug]: Runtime selects disabled context-engine plugin from retained slot
- [#140279](https://github.com/openclaw/openclaw/issues/140279) [Bug]: Isolated group heartbeat reports incomplete MCP from a generic policy warning
- [#127414](https://github.com/openclaw/openclaw/issues/127414) openclaw update --dry-run skips package runtime compatibility preflight
- [#141242](https://github.com/openclaw/openclaw/issues/141242) [Bug]: yielded running main session is treated as terminal and rotated during sibling completion
- [#139105](https://github.com/openclaw/openclaw/issues/139105) [Bug]: In-place upgrade 2026.7.1-2 → 2026.8.2 silently drops/rewrites config the new runtime cannot use (Anthropic auth 401, memorySearch, Gmail hook 400, workshop jobs) — no warning from doctor/validate
- [#149332](https://github.com/openclaw/openclaw/issues/149332) Bug: Bedrock rejects tool-returned images on GPT-5.6 Sol
- [#139119](https://github.com/openclaw/openclaw/issues/139119) `message(action="react")` (and all `conversation-read` actions) are unreachable from agent turns on 2026.9.1 — external channel plugins can never satisfy `enforceMessageActionConversationReadGate`
- [#146590](https://github.com/openclaw/openclaw/issues/146590) [Feature]: Emoji shortcode autocomplete and conversion in Control UI
- [#142377](https://github.com/openclaw/openclaw/issues/142377) [Bug]: ChatGPT OAuth omits strict=false and makes optional tool parameters required
- [#144358](https://github.com/openclaw/openclaw/issues/144358) [Bug]: Multi-account channel schemas erase catchall input/output types
- [#146169](https://github.com/openclaw/openclaw/issues/146169) doctor --fix widens LINE group access because LINE declares no group-allowlist contract
- [#149471](https://github.com/openclaw/openclaw/issues/149471) LiteLLM model discovery requests /v1/v1/models and fails when baseUrl ends in /v1
- [#149081](https://github.com/openclaw/openclaw/issues/149081) [Bug]: SSH/remote-shell sandbox upload treats a signal-killed transfer as success, publishing a partial workspace
- [#149583](https://github.com/openclaw/openclaw/issues/149583) [Feature]: Reuse managed source clones for native PR worktrees
- [#150391](https://github.com/openclaw/openclaw/issues/150391) Docs: install page for litwindow (managed EU Paperclip + OpenClaw host)
- [#150334](https://github.com/openclaw/openclaw/issues/150334) [Bug]: Google Chat replies land in channel root instead of thread on second message in a thread (regression since 2026.8.1)
- [#150326](https://github.com/openclaw/openclaw/issues/150326) Tool-search compaction intermittently defers ALL plugin tools, including catalogMode: "direct-only" (cataloged 4 → 17), leaving none callable
- [#149575](https://github.com/openclaw/openclaw/issues/149575) Claude source-review sessions eagerly install the workspace
- [#149868](https://github.com/openclaw/openclaw/issues/149868) Compaction loses persisted group sender provenance, allowing summaries to misattribute history
- [#150104](https://github.com/openclaw/openclaw/issues/150104) [Bug]: Android Talk ignores `talk.realtime.mode`, always requests `mode: "realtime"`, so `stt-tts` (custom TTS voice) is unreachable
- [#150105](https://github.com/openclaw/openclaw/issues/150105) [Bug]: Android native Talk (non-relay) receives a final speech result but never sends `chat.send`; it loops "Listening" with repeated beeps
- [#150310](https://github.com/openclaw/openclaw/issues/150310) claude-cli: `--include-partial-messages` deltas are metered against the frozen 8 MiB per-turn stdout cap, so long tool-heavy turns (~100–130k chars of written code) lose their final reply; the cap has been non-configurable since #111382
- [#148297](https://github.com/openclaw/openclaw/issues/148297) Control UI duplicates selected final answers stored with toolUse stopReason
- [#137747](https://github.com/openclaw/openclaw/issues/137747) [Bug]: Generated systemd scalar paths break on spaces
- [#148957](https://github.com/openclaw/openclaw/issues/148957) [Bug]: openai-completions omits session-affinity headers when sendSessionAffinityHeaders is enabled
- [#150211](https://github.com/openclaw/openclaw/issues/150211) Reduce CPU used to format long Telegram replies
- [#149324](https://github.com/openclaw/openclaw/issues/149324) [Feature]: Reuse verified cloud-node runtime archives after Gateway restart
- [#150156](https://github.com/openclaw/openclaw/issues/150156) Reduce delays in cloud session and desktop readiness
- [#150174](https://github.com/openclaw/openclaw/issues/150174) Feature request: grok-CLI agentRuntime harness (parity with google-gemini-cli)
- [#150161](https://github.com/openclaw/openclaw/issues/150161) [automation] announce-delivery cron turns that answer NO_REPLY log an "isolated finalization" WARN pair and burn an extra model call (2026.8.1)
- [#149788](https://github.com/openclaw/openclaw/issues/149788) [Bug]: Bash completion suggests options after the -- terminator
- [#149855](https://github.com/openclaw/openclaw/issues/149855) [Bug]: inspecting disabled plugins omits declared CLI backend capabilities
- [#149854](https://github.com/openclaw/openclaw/issues/149854) [Bug]: Anthropic-compatible premature EOF silently completes partial replies or skips tools
- [#150024](https://github.com/openclaw/openclaw/issues/150024) Collapsed user prompt: soften the clipped edge and center the Show more toggle
- [#150032](https://github.com/openclaw/openclaw/issues/150032) Complete OpenClaw Prime 1.0 cleanup and consolidation
- [#149630](https://github.com/openclaw/openclaw/issues/149630) [Bug]: config file imports trim whitespace and read the wrong file
- [#149909](https://github.com/openclaw/openclaw/issues/149909) Support multiple plugin targets across lifecycle CLI commands
- [#149993](https://github.com/openclaw/openclaw/issues/149993) [Bug]:models auth logout fails with “auth store lock may be busy” even with Gateway and Node stopped
- [#149139](https://github.com/openclaw/openclaw/issues/149139) [Bug]: MiniMax OAuth chat /login keeps polling and obtains tokens after the sender's login authority is revoked
- [#149486](https://github.com/openclaw/openclaw/issues/149486) Retire the Feishu comment-link test adapter
- [#149982](https://github.com/openclaw/openclaw/issues/149982) [Bug]: Remote Codex Control UI turns miss their webchat binding
- [#149980](https://github.com/openclaw/openclaw/issues/149980) macOS app: stale postAppUpdateReceipt causes a permanent "Gateway update needs attention" loop
- [#149954](https://github.com/openclaw/openclaw/issues/149954) Isolated cron sessions reuse the same session id across runs, contradicting documented "fresh session per run" behavior
- [#149950](https://github.com/openclaw/openclaw/issues/149950) [BUG] NemoClaw/OpenShell Installation Failure on macOS arm64
- [#149688](https://github.com/openclaw/openclaw/issues/149688) Context engine bootstrap reads the pending user turn, duplicating it and busting the prompt cache every run
- [#149326](https://github.com/openclaw/openclaw/issues/149326) Retire obsolete session-memory file-recovery test policy
- [#149937](https://github.com/openclaw/openclaw/issues/149937) control-ui 打包产物中图片 URL 正则的转义丢失
- [#149934](https://github.com/openclaw/openclaw/issues/149934) 插件元数据快照在持久化注册表缺失/失效时被反复全量派生扫描
- [#149936](https://github.com/openclaw/openclaw/issues/149936) `agents.list` 仅翻转 default 也触发全量 provider-auth warm + secrets 重建
- [#149932](https://github.com/openclaw/openclaw/issues/149932) provider auth warm 逐 agent 同步读 auth store，启动期事件循环阻塞 45–65s
- [#149921](https://github.com/openclaw/openclaw/issues/149921) Windows: gateway self-restart shuts down but never relaunches (scheduled-task handoff short-circuits)
- [#149682](https://github.com/openclaw/openclaw/issues/149682) Native sidebar previews for pending questions and approvals
- [#143778](https://github.com/openclaw/openclaw/issues/143778) [Bug]: Telegram-topic cron jobs can persist duplicate topic routing
- [#127502](https://github.com/openclaw/openclaw/issues/127502) Doctor JSON runtime failures bypass exit-2 ownership and look like CLI startup failures
- [#149812](https://github.com/openclaw/openclaw/issues/149812) [Bug]: Mantis candidate-ref test can miss a broken workflow assignment
- [#149795](https://github.com/openclaw/openclaw/issues/149795) Browser runtime: consolidate attachment, retirement, and request handling
- [#149822](https://github.com/openclaw/openclaw/issues/149822) [Bug]: Gateway-initiated update stalls for 5 seconds every 30 seconds while the activation Doctor repairs state
- [#149834](https://github.com/openclaw/openclaw/issues/149834) How to manage local adaptations to third-party Skills that get overwritten on every update?
- [#149657](https://github.com/openclaw/openclaw/issues/149657) [Bug]: supported Crabbox binary is blocked by eager installer imports
- [#143073](https://github.com/openclaw/openclaw/issues/143073) [Bug]: fleet stops and force-removes containers it did not verify
- [#147092](https://github.com/openclaw/openclaw/issues/147092) [Bug]: Heartbeat leaks prose to the channel after Codex -> claude-cli model fallback: prompt demands heartbeat_respond, which CLI backends cannot see (2026.9.4)
- [#149782](https://github.com/openclaw/openclaw/issues/149782) Browser tool throws "Async work scope is closed" after host reboot, until gateway is manually restarted a second time
- [#149580](https://github.com/openclaw/openclaw/issues/149580) [Feature]: Repository-defined source profiles for managed worktrees
- [#149628](https://github.com/openclaw/openclaw/issues/149628) Simplify browser internals after readiness and lifecycle fixes
- [#149293](https://github.com/openclaw/openclaw/issues/149293) Control UI: Task progress card reopens automatically after collapsing on history scroll
- [#149323](https://github.com/openclaw/openclaw/issues/149323) Make canonical session validation incremental across database reopens
- [#149671](https://github.com/openclaw/openclaw/issues/149671) [Bug]: session stranded in `livenessState=blocked` when compaction safeguard rejects summary while user ask is marked pending
- [#148727](https://github.com/openclaw/openclaw/issues/148727) Qualify a maintained live fixture for ClawHub skill-install E2E
- [#149306](https://github.com/openclaw/openclaw/issues/149306) Control UI: polish inline annotations (user bubble contrast, oversized hovercard, comment editor)
- [#145551](https://github.com/openclaw/openclaw/issues/145551) [Bug]: Answering a pending ask_user question crashes the run - SQLite transcript changed while preparing rewrite
- [#149425](https://github.com/openclaw/openclaw/issues/149425) Long Responses sessions can fail with premature context overflow
- [#118437](https://github.com/openclaw/openclaw/issues/118437) [Bug]: usage and cost totals are empty when session.store is configured
- [#148205](https://github.com/openclaw/openclaw/issues/148205) [Feature]: Switch saved Gateways from the Android sidebar
- [#148975](https://github.com/openclaw/openclaw/issues/148975) [Bug]: Docker tooling changes trigger full-suite CI fallback
- [#149431](https://github.com/openclaw/openclaw/issues/149431) [Bug]: Codex Computer Use hard-codes legacy list_apps readiness probe
- [#147976](https://github.com/openclaw/openclaw/issues/147976) [Bug]: Session rows with three or more owners hide the "+N" counter behind the avatar
- [#148197](https://github.com/openclaw/openclaw/issues/148197) Avoid repeated sequence scans while paging chat history
- [#149395](https://github.com/openclaw/openclaw/issues/149395) [Bug]: doctor gateway-restart readiness poll (10s) still under-budgets very slow hardware — #142452 fix undershoots

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 246,203 · **Open issues:** 43,567 · **Last push:** <1h ago

On September 17, 2026, there were no new releases for Hermes Agent. However, a series of important merged pull requests included fixes to the approval system's plugin sandbox that now properly handles skip_container_guards, as well as improvements to the desktop model settings that ensure accurate backend interactions. Other notable fixes addressed issues with SSH wizards resetting saved ports, preventing echoing of sensitive vault information in the browser, and handling in-flight prompts in the TUI gateway. A significant new issue was raised regarding the Weixin integration, where the send_voice() and send_video() functions are reportedly dropping arguments and failing to send audio attachments silently.

#### ✅ Merged PRs
- [#113257](https://github.com/NousResearch/hermes-agent/pull/113257) fix(approval): plugin sandbox backends that declare skip_container_guards skip dangerous-command prompts like built-in sandboxes (#112706, salvage #112711)
- [#113493](https://github.com/NousResearch/hermes-agent/pull/113493) test(code-kernel): remote eviction test no longer races its own worker thread
- [#113266](https://github.com/NousResearch/hermes-agent/pull/113266) fix(desktop): Model settings reads for an "Applies to" profile dial the backend foreground (#111651)
- [#113262](https://github.com/NousResearch/hermes-agent/pull/113262) fix(setup): SSH wizard resets a saved custom port back to the default (#112518, salvage #112519)
- [#113261](https://github.com/NousResearch/hermes-agent/pull/113261) fix(browser): browser_exec no longer echoes vault-filled passwords back to the model (#112693, salvage #112699)
- [#113254](https://github.com/NousResearch/hermes-agent/pull/113254) fix(desktop): cold boot against an unreachable remote gateway shows the recovery screen instead of looping behind CONNECTING (#112899, salvage #73442)
- [#113250](https://github.com/NousResearch/hermes-agent/pull/113250) fix(terminal): singularity, daytona and vercel_sandbox backends create environments again instead of a TypeError (#112715, salvage #112723)
- [#113228](https://github.com/NousResearch/hermes-agent/pull/113228) fix(tools): self-repo guard blocks git mutations in heredoc bodies piped to a shell (#112441, supersedes #112442)
- [#113227](https://github.com/NousResearch/hermes-agent/pull/113227) fix(tui_gateway): prompt answers survive a racing cancel or a last-second deadline (#112548, salvage #112559)
- [#113226](https://github.com/NousResearch/hermes-agent/pull/113226) fix(tui,desktop): reconnect keeps a synthetic in-flight prompt typed like its history row (#112144, salvage #112162)
- [#113224](https://github.com/NousResearch/hermes-agent/pull/113224) fix(tui_gateway): launch state.db home resolves at first use and the test harness sandboxes the Windows production root (#112692, salvage #112799)
- [#113223](https://github.com/NousResearch/hermes-agent/pull/113223) fix(tui): stdio gateway keeps its RPC stdin away from child processes and survives inline handler crashes (#112818, #112816, salvage #112823, #112822)
- [#113220](https://github.com/NousResearch/hermes-agent/pull/113220) fix(cron): the MCP zero-tools preflight block says it clears itself once the server reconnects (#112871)
- [#113219](https://github.com/NousResearch/hermes-agent/pull/113219) fix(cron): a restart-safe worker that dies before its ack reports its own stderr instead of a bare exit 1 (#112729)
- [#113213](https://github.com/NousResearch/hermes-agent/pull/113213) fix(installer): Setup app and desktop install logs no longer show ANSI escape garbage (#112675, salvage #112697)

#### 🐛 New Issues
- [#113640](https://github.com/NousResearch/hermes-agent/issues/113640) [Bug] Weixin: send_voice()/send_video() drop **kwargs, audio attachments silently fail `type/bug` `duplicate` `comp/gateway` `platform/wecom` 💬3
- [#112816](https://github.com/NousResearch/hermes-agent/issues/112816) [Bug]: Unhandled exception in an inline stdio RPC handler kills the TUI gateway child and loses in-flight replies `type/bug` `comp/tui` `P2` 💬2
- [#113610](https://github.com/NousResearch/hermes-agent/issues/113610) [Bug]: kanban run row stays 'running' after a worker exits rc=0 with no terminal transition — classification is inconsistent across runs `type/bug` `comp/cron` `P3` 💬2
- [#113611](https://github.com/NousResearch/hermes-agent/issues/113611) [Bug]: kanban respawn guard does not cover repeated clean-exit-without-transition — 16 consecutive respawns on one card `type/bug` `comp/cron` `P3` 💬2
- [#113029](https://github.com/NousResearch/hermes-agent/issues/113029) [Bug]: Desktop session turns green while the turn is still running `type/bug` `P2` `needs-repro` `comp/desktop` 💬2
- [#113618](https://github.com/NousResearch/hermes-agent/issues/113618) Telegram stall watchdog rebuilds the poller but never recovers; gateway stays connected and deaf until process restart `type/bug` `comp/gateway` `platform/telegram` `P1` 💬2
- [#112909](https://github.com/NousResearch/hermes-agent/issues/112909) [Bug]: Codex non-stream watchdogs kill healthy high-effort reasoning on small prompts (12s/90s fuses vs 100-170s silent thinking) `type/bug` `comp/agent` `provider/openai` `P2` 💬1
- [#112486](https://github.com/NousResearch/hermes-agent/issues/112486) KANBAN_GUIDANCE leaks into interactive sessions when profile enables kanban toolset `type/bug` `comp/agent` `comp/cron` `P3` 💬1
- [#112692](https://github.com/NousResearch/hermes-agent/issues/112692) tui_gateway tests fail locally: server.py pins HERMES_HOME at import time, before the conftest sandbox `type/bug` `comp/tui` `P3` 💬1
- [#112899](https://github.com/NousResearch/hermes-agent/issues/112899) Desktop cold boot loops forever when primary remote is unreachable; recovery settings never appear (regression of #76722) `type/bug` `P2` `comp/desktop` 💬1
- [#112518](https://github.com/NousResearch/hermes-agent/issues/112518) [Bug]: SSH setup wizard cannot reset a saved port back to the default (stale TERMINAL_SSH_PORT survives) `type/bug` `backend/ssh` `comp/cli` `area/config` 💬1
- [#113631](https://github.com/NousResearch/hermes-agent/issues/113631) [Bug]: Discord missed-message backfill re-dispatches the same message on every reconnect — completion gate needs a reply anchor that reply_to_mode:off suppresses `type/bug` `comp/gateway` `platform/discord` `area/config` 💬1
- [#113017](https://github.com/NousResearch/hermes-agent/issues/113017) [Bug]: setting only web.extract_backend silently changes the web_search backend `type/bug` `comp/tools` `tool/web` `area/config` 💬1
- [#112582](https://github.com/NousResearch/hermes-agent/issues/112582) STT process failures can be masked by None stderr/stdout handling `type/bug` `tool/tts` `P3` 💬1
- [#112763](https://github.com/NousResearch/hermes-agent/issues/112763) Proactive prune replaces skill_view results with a [SKILL_PRUNED] marker but never clears the repeat-view dedup cache → skill content becomes unretrievable `type/bug` `comp/agent` `tool/skills` `P2` 💬1
- [#113608](https://github.com/NousResearch/hermes-agent/issues/113608) cron: bot-chat delivery books a completed turn as a 600s timeout (linger bound == delivery cap, so the cap always loses) `type/bug` `comp/cron` `P3` 💬1
- [#112571](https://github.com/NousResearch/hermes-agent/issues/112571) SQLite runtime repair on an up-to-date checkout drops lazily-installed backends (telegram / hindsight / edge-tts / bedrock) `type/bug` `comp/cli` `P2` `sweeper:risk-compatibility`
- [#112935](https://github.com/NousResearch/hermes-agent/issues/112935) [Bug]: hermes desktop message editing difficulty `type/bug` `P3` `needs-repro` `comp/desktop`
- [#112479](https://github.com/NousResearch/hermes-agent/issues/112479) [Bug]: Desktop composer swallows a pasted GitHub PR-comment deep link instead of inserting it as text `type/bug` `P3` `comp/desktop`
- [#112647](https://github.com/NousResearch/hermes-agent/issues/112647) Every interrupt is reported as "interrupted_by_user": the actual issuer (inactivity watchdog, turn-liveness watchdog, stale-stream kill, fence loss) is never recorded `type/bug` `comp/agent` `comp/cron` `P3`
- [#112675](https://github.com/NousResearch/hermes-agent/issues/112675) [Bug]: Garbled Characters in Real-Time Installation Logs `type/bug` `P3` `needs-repro` `comp/desktop`
- [#112818](https://github.com/NousResearch/hermes-agent/issues/112818) [Bug]: Auto-launched child processes can inherit the TUI gateway's RPC stdin socketpair and silently eat JSON-RPC bytes `type/bug` `comp/tui` `tool/browser` `P2`
- [#113637](https://github.com/NousResearch/hermes-agent/issues/113637) [Bug]: SessionDB duplicate-writer warning counts read-only and closed handles `type/bug` `comp/agent` `P3` `sweeper:risk-session-state`
- [#112715](https://github.com/NousResearch/hermes-agent/issues/112715) TypeError: _build_sandbox_env() got multiple values for argument 'env_type' — every tool fails when terminal.backend is a sandbox backend `type/bug` `duplicate` `backend/daytona` `comp/tools`
- [#112706](https://github.com/NousResearch/hermes-agent/issues/112706) [Bug]: plugin backends' skip_container_guards is ignored — approval guards fire in disposable plugin sandboxes (regression from #94400) `type/bug` `comp/tools` `comp/plugins` `tool/terminal`
- [#112693](https://github.com/NousResearch/hermes-agent/issues/112693) [Bug]: Vault egress redaction never reaches browser_exec — vault-filled password echoed in plaintext and persisted to state.db `type/security` `comp/tools` `tool/browser` `P2`
- [#113644](https://github.com/NousResearch/hermes-agent/issues/113644) Agent should use the sudo-style masked prompt for API keys and vault secrets
- [#113628](https://github.com/NousResearch/hermes-agent/issues/113628) security: file write guards anchor on process HOME — real-home credentials unguarded under profile-home deployments `type/security` `comp/agent` `tool/file` `P3`
- [#112503](https://github.com/NousResearch/hermes-agent/issues/112503) Skills Hub search returns no results when skill exists on skills.sh but not in centralized index `type/bug` `comp/cli` `tool/skills` `P3`
- [#112918](https://github.com/NousResearch/hermes-agent/issues/112918) Matrix: `attach_to_session` / session handoff silently no-ops (missing `create_handoff_thread` + wrong in-thread `chat_type`) `type/bug` `comp/gateway` `platform/matrix` `P2`
- [#113620](https://github.com/NousResearch/hermes-agent/issues/113620) [Bug]: kanban.dispatch_profiles fails OPEN when the key is blank/null or the config read raises (shared-board homes silently claim every profile) `type/bug` `comp/cron` `P3`
- [#112800](https://github.com/NousResearch/hermes-agent/issues/112800) HERMES_DEBUG_INTERRUPT=0 still enables verbose logging `type/bug` `comp/tools` `P3`
- [#112717](https://github.com/NousResearch/hermes-agent/issues/112717) Auxiliary calls omit OpenCode session header outside turn context `type/bug` `comp/agent` `P2`
- [#112634](https://github.com/NousResearch/hermes-agent/issues/112634) [Bug]: `hermes update` prints a false "version unknown (gateway predates version stamping; restart to enable)" row for the gateway it just restarted (Windows, v0.21.3) `type/bug` `comp/cli` `P3` `area/install-update`
- [#112690](https://github.com/NousResearch/hermes-agent/issues/112690) Session-chat endpoints consume the concurrent-run budget but are exempt from the cap `type/bug` `comp/gateway` `P2`

#### 🔒 Closed Issues
- [#110912](https://github.com/NousResearch/hermes-agent/issues/110912) Nous Portal: full/list price charged on some model routes (glm/glm-flash/kimi) while subscription credits active — likely a discount-route bug, not credit exhaustion
- [#112816](https://github.com/NousResearch/hermes-agent/issues/112816) [Bug]: Unhandled exception in an inline stdio RPC handler kills the TUI gateway child and loses in-flight replies
- [#113029](https://github.com/NousResearch/hermes-agent/issues/113029) [Bug]: Desktop session turns green while the turn is still running
- [#112909](https://github.com/NousResearch/hermes-agent/issues/112909) [Bug]: Codex non-stream watchdogs kill healthy high-effort reasoning on small prompts (12s/90s fuses vs 100-170s silent thinking)
- [#112486](https://github.com/NousResearch/hermes-agent/issues/112486) KANBAN_GUIDANCE leaks into interactive sessions when profile enables kanban toolset
- [#112692](https://github.com/NousResearch/hermes-agent/issues/112692) tui_gateway tests fail locally: server.py pins HERMES_HOME at import time, before the conftest sandbox
- [#112899](https://github.com/NousResearch/hermes-agent/issues/112899) Desktop cold boot loops forever when primary remote is unreachable; recovery settings never appear (regression of #76722)
- [#112518](https://github.com/NousResearch/hermes-agent/issues/112518) [Bug]: SSH setup wizard cannot reset a saved port back to the default (stale TERMINAL_SSH_PORT survives)
- [#112367](https://github.com/NousResearch/hermes-agent/issues/112367) test_delegate_timeout_cleanup is red on main: the test's 2s window expires inside the ~3.6s post-timeout teardown
- [#112319](https://github.com/NousResearch/hermes-agent/issues/112319) [Bug]: 'Gateway Inference unavailable' alert in Default Profile in Hermes Desktop App and alert that HERMES_HOME is unset
- [#112378](https://github.com/NousResearch/hermes-agent/issues/112378) [Bug]: `_discard_lockfile_churn` reverts the ROOT package-lock.json when only a workspace manifest is dirty — desyncing specs from the lock and making `hermes update` Node-deps refresh fail forever (npm 10 `edgesOut` crash)
- [#113017](https://github.com/NousResearch/hermes-agent/issues/113017) [Bug]: setting only web.extract_backend silently changes the web_search backend
- [#112348](https://github.com/NousResearch/hermes-agent/issues/112348) `hermes config get` cannot tell a live value from a value nothing reads (phantom config keys)
- [#112582](https://github.com/NousResearch/hermes-agent/issues/112582) STT process failures can be masked by None stderr/stdout handling
- [#112763](https://github.com/NousResearch/hermes-agent/issues/112763) Proactive prune replaces skill_view results with a [SKILL_PRUNED] marker but never clears the repeat-view dedup cache → skill content becomes unretrievable
- [#112571](https://github.com/NousResearch/hermes-agent/issues/112571) SQLite runtime repair on an up-to-date checkout drops lazily-installed backends (telegram / hindsight / edge-tts / bedrock)
- [#112935](https://github.com/NousResearch/hermes-agent/issues/112935) [Bug]: hermes desktop message editing difficulty
- [#112366](https://github.com/NousResearch/hermes-agent/issues/112366) [Bug]: Desktop runtime plugins leak gateway-event listeners on every hot reload — one relay marker opens N duplicate sessions
- [#112479](https://github.com/NousResearch/hermes-agent/issues/112479) [Bug]: Desktop composer swallows a pasted GitHub PR-comment deep link instead of inserting it as text
- [#112647](https://github.com/NousResearch/hermes-agent/issues/112647) Every interrupt is reported as "interrupted_by_user": the actual issuer (inactivity watchdog, turn-liveness watchdog, stale-stream kill, fence loss) is never recorded
- [#112675](https://github.com/NousResearch/hermes-agent/issues/112675) [Bug]: Garbled Characters in Real-Time Installation Logs
- [#112818](https://github.com/NousResearch/hermes-agent/issues/112818) [Bug]: Auto-launched child processes can inherit the TUI gateway's RPC stdin socketpair and silently eat JSON-RPC bytes
- [#112441](https://github.com/NousResearch/hermes-agent/issues/112441) self_repo_guard misses heredoc bodies piped to a shell (cat <<EOF | bash)
- [#112715](https://github.com/NousResearch/hermes-agent/issues/112715) TypeError: _build_sandbox_env() got multiple values for argument 'env_type' — every tool fails when terminal.backend is a sandbox backend
- [#112706](https://github.com/NousResearch/hermes-agent/issues/112706) [Bug]: plugin backends' skip_container_guards is ignored — approval guards fire in disposable plugin sandboxes (regression from #94400)
- [#112693](https://github.com/NousResearch/hermes-agent/issues/112693) [Bug]: Vault egress redaction never reaches browser_exec — vault-filled password echoed in plaintext and persisted to state.db
- [#112144](https://github.com/NousResearch/hermes-agent/issues/112144) [Bug]: session.resume inflight projection drops synthetic-turn display metadata after #110273
- [#112503](https://github.com/NousResearch/hermes-agent/issues/112503) Skills Hub search returns no results when skill exists on skills.sh but not in centralized index
- [#112137](https://github.com/NousResearch/hermes-agent/issues/112137) /branch mid-turn races the in-flight agent run: remaining messages flush onto the branched session
- [#112918](https://github.com/NousResearch/hermes-agent/issues/112918) Matrix: `attach_to_session` / session handoff silently no-ops (missing `create_handoff_thread` + wrong in-thread `chat_type`)
- [#112424](https://github.com/NousResearch/hermes-agent/issues/112424) `search_files` with an empty or whitespace `path` returns "Path not found" instead of the documented default `.`
- [#112800](https://github.com/NousResearch/hermes-agent/issues/112800) HERMES_DEBUG_INTERRUPT=0 still enables verbose logging
- [#112717](https://github.com/NousResearch/hermes-agent/issues/112717) Auxiliary calls omit OpenCode session header outside turn context
- [#112406](https://github.com/NousResearch/hermes-agent/issues/112406) Desktop sidebar: project-grouped view caps at 3 sessions with no scroll or 'show more' affordance
- [#112466](https://github.com/NousResearch/hermes-agent/issues/112466) `_restarted_units_gone()` ends the 120s fleet settle poll on a scope-mismatched unit name (user unit read as inactive in the system scope)
- [#112634](https://github.com/NousResearch/hermes-agent/issues/112634) [Bug]: `hermes update` prints a false "version unknown (gateway predates version stamping; restart to enable)" row for the gateway it just restarted (Windows, v0.21.3)
- [#112690](https://github.com/NousResearch/hermes-agent/issues/112690) Session-chat endpoints consume the concurrent-run budget but are exempt from the cap

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 91,946 · **Open issues:** 8,059 · **Last push:** <1h ago

On September 17, 2026, there were no new releases for vLLM; however, several significant pull requests were merged, enhancing the system's capabilities. Notably, PR #55934 introduced mxfp4 MoE support for the Triton framework with gpt-oss and DeepSeek-V4, while PR #57074 enabled FP8/unquantized cases in the modular-kernel sweep, addressing key performance optimizations. Several bug fixes, such as #57104, resolved deadlocks with the KVConnector under pressure, and #57218 bumped the DeepGEMM pin for improved stability. Among the newly reported issues, ticket #57227 highlights a GPU memory-access fault related to GLM-5.3-Flash, which is drawing attention for its potential impact on performance.

#### ✅ Merged PRs
- [#55934](https://github.com/vllm-project/vllm/pull/55934) [ROCm] triton+triton_kernels 3.8 mxfp4 MoE support (gpt-oss + DeepSeek-V4)
- [#57074](https://github.com/vllm-project/vllm/pull/57074) [ROCm][CI] Enable AITER FP8/unquantized cases in modular-kernel sweep + fix MoRI per-tensor FP8 dispatch
- [#57070](https://github.com/vllm-project/vllm/pull/57070) [Bugfix][Metrics][MFU] Size activation traffic from the model dtype
- [#56930](https://github.com/vllm-project/vllm/pull/56930) [Bugfix][Spec Decode] Fix EAGLE and dense draft startup with EP
- [#57056](https://github.com/vllm-project/vllm/pull/57056) [ROCm][CI] Shard MI300 Multimodal Processor
- [#52956](https://github.com/vllm-project/vllm/pull/52956) [Tests] Delete deprecate torchao tests for v1 configs
- [#53187](https://github.com/vllm-project/vllm/pull/53187) [Frontend] Return prompt metadata from /inference/v1/generate
- [#56872](https://github.com/vllm-project/vllm/pull/56872) [MM] Keep raw pixels through dp-sharded ViT path
- [#55084](https://github.com/vllm-project/vllm/pull/55084) [Frontend] Add per-request metrics to Responses API
- [#57104](https://github.com/vllm-project/vllm/pull/57104) [BugFix][KV Connector] Fix Deadlock with KVConnector + MTP under KV Pressure
- [#57222](https://github.com/vllm-project/vllm/pull/57222) [Bugfix] Add Responses cache_write_tokens for API compat and CC parity
- [#57218](https://github.com/vllm-project/vllm/pull/57218) [Build] Bump DeepGEMM pin to a6bbb80
- [#57211](https://github.com/vllm-project/vllm/pull/57211) [CI][Bugfix] Initialize _transfer_layer_group_ids in region_pull_worker fixture
- [#57194](https://github.com/vllm-project/vllm/pull/57194) [Refactor] Remove unused interface methods
- [#56576](https://github.com/vllm-project/vllm/pull/56576) [Bugfix] tolerate malformed EXIF metadata during hashing (#56527)
- [#55884](https://github.com/vllm-project/vllm/pull/55884) [BugFix] Fix is_supported of cutlass FP8 linear (selected and fails on A100)
- [#57204](https://github.com/vllm-project/vllm/pull/57204) [Perf][DSV4.1] Remove MegaMoE padding and shared padding workaround
- [#57132](https://github.com/vllm-project/vllm/pull/57132) [ROCm][Bugfix] Revert #56433 + #51692 to fix accuracy breakdown for DeepSeek-V4
- [#55702](https://github.com/vllm-project/vllm/pull/55702) [Bugfix] Remove unsupported comma-separated detailed trace values
- [#57116](https://github.com/vllm-project/vllm/pull/57116) [Rust Frontend] Expose local DP size in gRPC Control metadata
- [#57068](https://github.com/vllm-project/vllm/pull/57068) [Bugfix] Fix np.float64 leaking into the KV transfer metrics log
- [#57152](https://github.com/vllm-project/vllm/pull/57152) [Bugfix][Model] Restore causal image SWA for DeepSeek V4.1
- [#57212](https://github.com/vllm-project/vllm/pull/57212) [CI] Ignore ruff D209, rejoin the docstrings it split, and silence incompatible-rule warnings
- [#56935](https://github.com/vllm-project/vllm/pull/56935) [Model][DSv4.1] FlashMLA mega attention and the NVFP4 compressed KV cache
- [#57083](https://github.com/vllm-project/vllm/pull/57083) [Benchmark] Retire stale benchmarks and consolidate RMSNorm
- [#53610](https://github.com/vllm-project/vllm/pull/53610) [MM] Further cleanup _apply_hf_processor_main
- [#54248](https://github.com/vllm-project/vllm/pull/54248) [ROCm] Expose kFp8DynamicTokenSym on AITER PTPC linears
- [#52136](https://github.com/vllm-project/vllm/pull/52136) [Docs] Add `pydocstyle` to the `ruff` rules
- [#57077](https://github.com/vllm-project/vllm/pull/57077) [Bugfix][HiSparse][PD] Align region-mapped pulls across logical block sizes
- [#54222](https://github.com/vllm-project/vllm/pull/54222) [P/D] Report prefill worker cache hits in prompt_tokens_details
- [#55557](https://github.com/vllm-project/vllm/pull/55557) [Model] Qwen4Exp: fp8_e4m3 main KV cache on the QSA path
- [#57140](https://github.com/vllm-project/vllm/pull/57140) [Perf][GDN] Scatter mixed speculative outputs into the caller buffer
- [#54016](https://github.com/vllm-project/vllm/pull/54016) [BugFix][PCP] Handle missing DP metadata in one-sided EP
- [#57148](https://github.com/vllm-project/vllm/pull/57148) [Model][LoRA] Enable LoRA support for ModernBertModel
- [#53555](https://github.com/vllm-project/vllm/pull/53555) [LoRA] Support modules_to_save for sequence classification
- [#56108](https://github.com/vllm-project/vllm/pull/56108) [CI] Bump Transformers version to 5.17.0
- [#51483](https://github.com/vllm-project/vllm/pull/51483) [Bugfix][Kimi-K3] Do not classify a stateless first chunk as a decode
- [#56855](https://github.com/vllm-project/vllm/pull/56855) [Bugfix][Mooncake] Report request-level KV load failures under HMA
- [#52370](https://github.com/vllm-project/vllm/pull/52370) [Bugfix] Let an optional Literal flag accept the None it advertises
- [#56034](https://github.com/vllm-project/vllm/pull/56034) [Model] Optimize Sarvam MLA routing and preserve FP32 router logits
- [#51787](https://github.com/vllm-project/vllm/pull/51787) [Bugfix][KV Offload] Track cache recency once per request

#### 🐛 New Issues
- [#57227](https://github.com/vllm-project/vllm/issues/57227) [Bug][ROCm/gfx950] GLM-5.3-Flash 16K-chunk prefill: GPU memory-access fault when indexer triton kernels JIT during lazy CUDA-graph capture — clean under --enforce-eager `rocm` `glm` 💬5
- [#57223](https://github.com/vllm-project/vllm/issues/57223) [Bug]: assistant_tokens_mask misaligned after multimodal placeholder expansion `bug` `multi-modality` 💬4
- [#57117](https://github.com/vllm-project/vllm/issues/57117) [Doc]: security.md miscategorizes dev-only endpoints as production and omits /fault_tolerance/*, /metrics 💬4
- [#57203](https://github.com/vllm-project/vllm/issues/57203) Allow selecting uvicorn's HTTP protocol implementation 💬3
- [#57138](https://github.com/vllm-project/vllm/issues/57138) [Bug]: ValueError: Invalid layer_type qwen_sparse_attention raised in vllm/models/qwen4_exp/amd/model.py `bug` `rocm` 💬3
- [#57232](https://github.com/vllm-project/vllm/issues/57232) [Bug] gemma4 tool parser, no reasoning parser, request without tools: streamed content ends with stripped `<|channel>`/`<channel|>` since #47562 `tool-calling` 💬2
- [#57230](https://github.com/vllm-project/vllm/issues/57230) [ROCm][AMD] GLM5.2 Performance Optimization on gfx950 / MI355X `feature request` `rocm` `quantization` 💬2
- [#57149](https://github.com/vllm-project/vllm/issues/57149) [ROCm][AMD] Qwen3.8-2.4T-A95B gfx950 / MI355X Performance Optimization `performance` `rocm` `quantization` 💬2
- [#57099](https://github.com/vllm-project/vllm/issues/57099) [Bug]: Encountered `openai_harmony.HarmonyError` when using GPT-OSS-120B. `bug` `gpt-oss` 💬2
- [#57259](https://github.com/vllm-project/vllm/issues/57259) [Bug]: nvidia/audio-flamingo-next-hf fails to load — get_audio_features() missing required argument 'input_ids' `bug` `nvidia` 💬1
- [#57248](https://github.com/vllm-project/vllm/issues/57248) [Bug][ROCm] Nightly af1c01499: GLM-5.3-Flash cannot boot — ROCMAiterMLASparseImpl missing record_logical_topk_ready + jit-warmup tilelang crash `rocm` `glm` 💬1
- [#57228](https://github.com/vllm-project/vllm/issues/57228) [RFC][ROCm]: Decode Context Parallelism (DCP) for DeepSeek-V4 hybrid SWA + compressed KV cache `rocm` `RFC` `deepseek` `DSv4` 💬1
- [#57166](https://github.com/vllm-project/vllm/issues/57166) [Feature]: lora support for deepseek v4.1 flash `feature request` `deepseek` `DSv4.1` 💬1
- [#57187](https://github.com/vllm-project/vllm/issues/57187) [RFC]: Scheduler-Aware Multi-Tier KV Caching for vLLM with MORI-UMBP `rocm` `scheduler` 💬1
- [#57188](https://github.com/vllm-project/vllm/issues/57188) Bug: Laguna global RoPE validator mutates later flat rope_parameters 💬1
- [#57177](https://github.com/vllm-project/vllm/issues/57177) [RFC]: Retain MRV2 DBO CUDA Graph replay under DP imbalance through real-token staging `RFC` 💬1
- [#57173](https://github.com/vllm-project/vllm/issues/57173) [Bug]: Multi-turn benchmark drops unfinished active conversations when the task queue is exhausted 💬1
- [#57144](https://github.com/vllm-project/vllm/issues/57144) [Feature]: SM8x (Ampere A100/A800) support for DeepSeek-V4.1-Flash `rocm` `deepseek` `DSv4.1` 💬1
- [#57136](https://github.com/vllm-project/vllm/issues/57136) [Bug]: NaN vision embeddings with multi-budget encoder CUDA graphs sharing a pool 💬1
- [#57125](https://github.com/vllm-project/vllm/issues/57125) [Bug]: Qwen3.8-Flash-Next-NVFP4 service cannot start normally. `bug` `quantization` 💬1
- [#57130](https://github.com/vllm-project/vllm/issues/57130) [Bug]: Sparse NCCL corrupts non-contiguous patch indices and values
- [#57231](https://github.com/vllm-project/vllm/issues/57231) [Bug] gemma4 tool parser with no reasoning parser: `_preprocess_feed`'s synthetic `<|channel>` leaks into content since #47562 `tool-calling`
- [#57224](https://github.com/vllm-project/vllm/issues/57224) [Bug]: Silent garbage output on GPUs in Confidential Computing mode: V2 model runner's UVA views of pinned host memory are stale under CC (works with VLLM_USE_V2_MODEL_RUNNER=0)
- [#57219](https://github.com/vllm-project/vllm/issues/57219) Multimodal content-part uuid has no length bound and reaches the EngineCore block-hash pickle+SHA-256 path (uncapped sibling of the cache_salt fix) `multi-modality`
- [#57200](https://github.com/vllm-project/vllm/issues/57200) [RFC] Model console logging configuration as CLI/serve configuration
- [#57175](https://github.com/vllm-project/vllm/issues/57175) [RFC]: Retain MRV2 DBO CUDA graph replay under DP imbalance through real-token staging `RFC`
- [#57157](https://github.com/vllm-project/vllm/issues/57157) [Security]: remote media URLs allow SSRF to internal/link-local addresses by default
- [#57159](https://github.com/vllm-project/vllm/issues/57159) [Bug]: OffloadingConnector KV events advertise block hashes that are not independently retrievable
- [#57156](https://github.com/vllm-project/vllm/issues/57156) [Bug]: DeepSeek-V4.1 produces NaN with CUDA graphs on SM120/121 — dummy capture batches poison the null KV block `deepseek` `DSv4.1`
- [#57133](https://github.com/vllm-project/vllm/issues/57133) [Bug] First dummy batch on a DP rank compiles MTP/EP Triton kernels at request time (wide-EP + MTP)
- [#57114](https://github.com/vllm-project/vllm/issues/57114) test issue - please ignore
- [#57111](https://github.com/vllm-project/vllm/issues/57111) [RFC]: Checkpoint-aware cache eviction and segmented recomputation for hybrid models `RFC`
- [#57106](https://github.com/vllm-project/vllm/issues/57106) [RFC]: [FS Offloading][ThreadPool] Updates to Thread Pool `RFC`
- [#57103](https://github.com/vllm-project/vllm/issues/57103) [RFC]: Programmable KV Cache: Composable Policies for Agentic Serving `RFC` `kimi`

#### 🔒 Closed Issues
- [#46654](https://github.com/vllm-project/vllm/issues/46654) [Feature]: GLM 5.2 Performance Optimization
- [#12829](https://github.com/vllm-project/vllm/issues/12829) [Feature]: Add support for multi-lora using classification
- [#57002](https://github.com/vllm-project/vllm/issues/57002) [Feature]: ModernBert LoRa support
- [#56443](https://github.com/vllm-project/vllm/issues/56443) [Bug]: DeepSeek-V4.1-Flash + DSpark spec decode hits CUDA device-side assert in `map_draft_to_target` at draft warmup on SM90 (H200) with Marlin MXFP4 MoE backend
- [#50895](https://github.com/vllm-project/vllm/issues/50895) [Feature]: Populate completion_tokens_details in streaming and non-streaming usage responses
- [#14335](https://github.com/vllm-project/vllm/issues/14335) [Feature]: `reasoning_tokens` in Chat Completion Response `usage`
- [#54828](https://github.com/vllm-project/vllm/issues/54828) [Feature][Frontend] Add per-request timing metrics to the Responses API
- [#50098](https://github.com/vllm-project/vllm/issues/50098) [Feature]: Kimi K3 DSpark Pipeline Parallelism
- [#57138](https://github.com/vllm-project/vllm/issues/57138) [Bug]: ValueError: Invalid layer_type qwen_sparse_attention raised in vllm/models/qwen4_exp/amd/model.py
- [#52947](https://github.com/vllm-project/vllm/issues/52947) [Bug]: torchao 0.18.0 cannot load version-1 int8wo checkpoints; surfaces as an opaque VllmConfig ValidationError
- [#52238](https://github.com/vllm-project/vllm/issues/52238) [Bug]: CPU platform silently falls back to UnspecifiedPlatform when zentorch import fails with non-ImportError
- [#55925](https://github.com/vllm-project/vllm/issues/55925) [CI Failure]: XPU Quantization Test
- [#56980](https://github.com/vllm-project/vllm/issues/56980) [Bug]: MiniMax-M3 MSA crashes with quack-kernels 0.6.5 on the standard SM100 CUDA path
- [#57013](https://github.com/vllm-project/vllm/issues/57013) [Feature][Spec Decode] Support MiniCPM5-2B-DSpark
- [#57175](https://github.com/vllm-project/vllm/issues/57175) [RFC]: Retain MRV2 DBO CUDA graph replay under DP imbalance through real-token staging
- [#56527](https://github.com/vllm-project/vllm/issues/56527) [Bug]: malformed EXIF in an image fails the request with a 500 from `MultiModalHasher.serialize_item`
- [#57114](https://github.com/vllm-project/vllm/issues/57114) test issue - please ignore
- [#53668](https://github.com/vllm-project/vllm/issues/53668) [Bug]: MiniMax-M3 fused SwiGLU MXFP8 kernel still uses the pre-#53110 block scale formula

### SGLang (`sgl-project/sglang`)

**Stars:** 36,068 · **Open issues:** 5,427 · **Last push:** <1h ago

On September 17, 2026, there were no new releases for SGLang, but several important developments occurred with the merging of various pull requests. Notable updates included the addition of new computation and projection features in the dsv4.1 version, such as mHC computation and compensated projections, along with Hopper FP8 matmul kernels and tuning. The merged PRs also addressed a critical fix for allowing closed object schemas in Outlines prevalidation and enhancements to the CI for missing elfutils headers in the CUDA 13.4 DeepGEMM build. Among the new issues reported, a particularly concerning bug was identified where the hierarchical cache returns incorrect outputs for hybrid models, signaling a need for urgent attention.

#### ✅ Merged PRs
- [#39664](https://github.com/sgl-project/sglang/pull/39664) dsv4.1: mHC computation and compensated projections
- [#39657](https://github.com/sgl-project/sglang/pull/39657) dsv4.1: Hopper FP8 matmul kernels and tuning
- [#39869](https://github.com/sgl-project/sglang/pull/39869) [Fix] Allow closed object schemas in Outlines prevalidation
- [#39855](https://github.com/sgl-project/sglang/pull/39855) [CI] Fix missing elfutils headers in CUDA 13.4 DeepGEMM build
- [#39656](https://github.com/sgl-project/sglang/pull/39656) dsv4.1: RoPE and FP4 packing kernels
- [#39863](https://github.com/sgl-project/sglang/pull/39863) [cherry-pick][gRPC] Expose native pause status (#37488)
- [#37488](https://github.com/sgl-project/sglang/pull/37488) [gRPC] Expose native pause status
- [#39671](https://github.com/sgl-project/sglang/pull/39671) dsv4.1: candidate indexer library
- [#39652](https://github.com/sgl-project/sglang/pull/39652) dsv4.1: compression, KV I/O, and metadata kernels
- [#37839](https://github.com/sgl-project/sglang/pull/37839) [Fix] Prevalidate JSON Schema support per grammar backend
- [#39662](https://github.com/sgl-project/sglang/pull/39662) [qwen 3.8 next] change the testing model in test_qwen4_exp_models.py
- [#39002](https://github.com/sgl-project/sglang/pull/39002) [Router] Fleet-wide sampling contract 3/3: splice injection without re-serializing
- [#39016](https://github.com/sgl-project/sglang/pull/39016) [Router] Drain readiness before SIGTERM shutdown so k8s deregisters the pod first
- [#39485](https://github.com/sgl-project/sglang/pull/39485) [sgl-router] Share model-file discovery for chat formatters
- [#38526](https://github.com/sgl-project/sglang/pull/38526) Add Ling-3.0-flash-VL model support
- [#39500](https://github.com/sgl-project/sglang/pull/39500) [PD] Add optional KV transfer checksums
- [#37810](https://github.com/sgl-project/sglang/pull/37810) [ROCm][DSV4] Enable breakable CUDA graph prefill
- [#39459](https://github.com/sgl-project/sglang/pull/39459) [sgl-router] Rename chat encoder to chat formatter
- [#39828](https://github.com/sgl-project/sglang/pull/39828) Revert "[CI] Add e2e test for dp-attention local control broadcast"
- [#39458](https://github.com/sgl-project/sglang/pull/39458) [sgl-router] Forward input_ids only for string content; count tokenize errors only when forwardable
- [#35802](https://github.com/sgl-project/sglang/pull/35802) feat: support custom OTLP trace service name
- [#39813](https://github.com/sgl-project/sglang/pull/39813) [NPU][CI] Fail fast and speed up long-running qwen3.6 accuracy cases
- [#37615](https://github.com/sgl-project/sglang/pull/37615) [kv-shard 2/4] Sharded pools
- [#39437](https://github.com/sgl-project/sglang/pull/39437) [CI] Add e2e test for dp-attention local control broadcast
- [#38774](https://github.com/sgl-project/sglang/pull/38774) Fix device context during NIXL backend initialization
- [#39763](https://github.com/sgl-project/sglang/pull/39763) [AMD] Clamp MORI intranode grid GPUs
- [#39653](https://github.com/sgl-project/sglang/pull/39653) dsv4.1: communication kernels and wrappers
- [#37740](https://github.com/sgl-project/sglang/pull/37740) [AMD] Preserve deterministic inference when Lean Attention is enabled
- [#38453](https://github.com/sgl-project/sglang/pull/38453) [AMD] Avoid the FP8 wo_a path when the weight is BF16
- [#39732](https://github.com/sgl-project/sglang/pull/39732) [NPU] fix npu docker workspace directory
- [#39678](https://github.com/sgl-project/sglang/pull/39678) [misc] Merge FlashInfer autotune caches across spec workers, pad MXFP4 TP shards, drop dead ngram attrs
- [#39426](https://github.com/sgl-project/sglang/pull/39426) bugfix:fix unifiedcache c128 radix cache management
- [#39169](https://github.com/sgl-project/sglang/pull/39169) [Router] Pin to the prefix owner when the whole fleet is queueing (--saturation-queue-floor)
- [#39697](https://github.com/sgl-project/sglang/pull/39697) ci: fix always-failing coverage job, add by-GPU-count view
- [#39720](https://github.com/sgl-project/sglang/pull/39720) [Fix] Fix GLM5 mHC PP forward
- [#39001](https://github.com/sgl-project/sglang/pull/39001) [Router] Fleet-wide sampling contract 2/3: enforce and inject per request
- [#39015](https://github.com/sgl-project/sglang/pull/39015) [Router] Add the shutdown-drain configuration surface
- [#39404](https://github.com/sgl-project/sglang/pull/39404) [NPU] Avoid device synchronization in Ascend sampling
- [#39713](https://github.com/sgl-project/sglang/pull/39713) [Router] Bound the e2e worker memory budget so prefill graph capture stops OOMing
- [#39567](https://github.com/sgl-project/sglang/pull/39567) [HiCache] Forward prefix metadata to v2 storage calls
- [#39014](https://github.com/sgl-project/sglang/pull/39014) [Router] Count open HTTP exchanges until their response body finishes
- [#39648](https://github.com/sgl-project/sglang/pull/39648) dsv4.1: Top-k kernels and candidate selection
- [#38913](https://github.com/sgl-project/sglang/pull/38913) [Kernel] Add H20 block-FP8 MoE configs for GLM-5.3-Flash EP4/EP8
- [#39646](https://github.com/sgl-project/sglang/pull/39646) dsv4.1: standalone kernels and Python wrappers
- [#39006](https://github.com/sgl-project/sglang/pull/39006) [router] Speak cleartext h2c on both edges: serve it inbound, forward it outbound
- [#39168](https://github.com/sgl-project/sglang/pull/39168) [Router] Add --worker-queue-limit: stop sending cache-affinity traffic to a queueing worker
- [#38935](https://github.com/sgl-project/sglang/pull/38935) [PD] Do not admit intake-rejected requests to a PD handoff
- [#34712](https://github.com/sgl-project/sglang/pull/34712) [Fix] Spawn, don't fork, the benchmark server process
- [#39000](https://github.com/sgl-project/sglang/pull/39000) [Router] Fleet-wide sampling contract 1/3: the config surface

#### 🐛 New Issues
- [#39692](https://github.com/sgl-project/sglang/issues/39692) [Bug] Indexer cache offload is missed for GLM-5.3-Flash 💬3
- [#39830](https://github.com/sgl-project/sglang/issues/39830) [Bug] Hierarchical cache returns wrong output on a hybrid (GDN/Mamba) model: a full-length host-tier hit answers in a different pass's voice, 20/20, on main 💬2
- [#39836](https://github.com/sgl-project/sglang/issues/39836) [Bug] Qwen3CoderDetector: a duplicated `<parameter=NAME>` tag mid-value truncates array/object arguments and silently overwrites the earlier match 💬2
- [#39843](https://github.com/sgl-project/sglang/issues/39843) [Bug] OpenAI-compatible API: Python and Rust render different prompts for identical POST /v1/chat/completions requests 💬1
- [#39762](https://github.com/sgl-project/sglang/issues/39762) [weight-cache] DeepSeek-V4-Flash MXFP4 bypasses the IPC quant gate 💬1
- [#39831](https://github.com/sgl-project/sglang/issues/39831) [Bug] GLM-5.3-Flash vision silently broken on main: pinned transformers==5.12.1 lacks glm5_next, AutoProcessor degrades to TokenizersBackend 💬1
- [#39838](https://github.com/sgl-project/sglang/issues/39838) Session traffic (streaming/tree sessions + aborts + close_session) trips 'pool memory leak detected' (session_held) on dev head 741f05e6, lease pool OFF 💬1
- [#39752](https://github.com/sgl-project/sglang/issues/39752) [Bug] /v1/messages streaming thinking blocks can end without a signature 💬1
- [#39826](https://github.com/sgl-project/sglang/issues/39826) [Bug] Speculative decoding counts reasoning tokens past EOS, exceeding completion_tokens 💬1
- [#39782](https://github.com/sgl-project/sglang/issues/39782) [Bug] Anthropic streaming merges multiple tool-call arguments into one tool_use block 💬1
- [#39864](https://github.com/sgl-project/sglang/issues/39864) [Bug] OpenAI Chat Completions: Python SSE chunks have inconsistent id and created
- [#39850](https://github.com/sgl-project/sglang/issues/39850) [Bug] GLM-5.3-Flash (glm5_next): image requests render a no-multimodal reminder instead of the image placeholder — model never sees the image
- [#39841](https://github.com/sgl-project/sglang/issues/39841) [Bug] --ple-offload-embedding is unreachable when the PLE table exceeds single-device VRAM (embedding is materialised on device before being offloaded)
- [#39846](https://github.com/sgl-project/sglang/issues/39846) [Bug] [PD][NIXL] Receiver declares multi-component state transfer complete after first component
- [#39842](https://github.com/sgl-project/sglang/issues/39842) [Bug] Python OpenAI Chat loses logprob candidates and streaming token records
- [#39800](https://github.com/sgl-project/sglang/issues/39800) HellaSwag accuracy test cannot run: rowanz/hellaswag is blocked (HTTP 451), breaking base-a and stage-a-amd on every PR
- [#39797](https://github.com/sgl-project/sglang/issues/39797) [Question] GLM-5.3-Flash on 4x GB200: `--moe-runner-backend flashinfer_trtllm` scores ~1.3 gsm8k points below `deep_gemm` in repeated runs (6 vs 3 runs); one `triton` run agrees with deep_gemm
- [#39700](https://github.com/sgl-project/sglang/issues/39700) DSV4.1 PD Road Map
- [#39764](https://github.com/sgl-project/sglang/issues/39764) [Bug] Unbounded chunk_idx in PD disaggregation staging path causes Decode scheduler OOM
- [#39740](https://github.com/sgl-project/sglang/issues/39740) [RFC] Pluggable KV Compression for Disaggregated Serving
- [#39708](https://github.com/sgl-project/sglang/issues/39708) [Bug] Janus-Pro CLIPVisionTower image normalization cannot run: Normalize is shadowed, and the transform calls torch.nn.functional.normalize
- [#39689](https://github.com/sgl-project/sglang/issues/39689) [Bug] Cold TokenizerWorker can hang on pause/continue because its receive loop is not initialized
- [#39685](https://github.com/sgl-project/sglang/issues/39685) Regression on main — DFLASH speculative decoding with Qwen4-Exp crashes in decode CUDA-graph capture; the fix is the Qwen4-Exp capture guard in #38642
- [#39684](https://github.com/sgl-project/sglang/issues/39684) [Bug] sgl-deep-gemm 0.2.0: SM90 weight-scale transform returns a non-owning alias (follow-up to #32188)

#### 🔒 Closed Issues
- [#39692](https://github.com/sgl-project/sglang/issues/39692) [Bug] Indexer cache offload is missed for GLM-5.3-Flash
- [#28887](https://github.com/sgl-project/sglang/issues/28887) [Bug] FastAPI >=0.137 breaks Prometheus metrics middleware: '_IncludedRouter' object has no attribute 'path'
- [#31224](https://github.com/sgl-project/sglang/issues/31224) Misleading "FP8 KV cache but no scaling factors provided" warning fires even when per-layer ModelOpt/compressed-tensors KV scales are present and loaded
- [#31384](https://github.com/sgl-project/sglang/issues/31384) [Bug] glm5.2 tep dp=2 cause speculative eagle error
- [#31588](https://github.com/sgl-project/sglang/issues/31588) [Bug] Inkling multi-layer EAGLE auto KV sizing OOMs while allocating draft pools
- [#31632](https://github.com/sgl-project/sglang/issues/31632) [Bug] TP subprocess SIGSEGV in dsa_indexer._get_k_bf16 (JIT bf16 kernel) under PD disaggregation with Mooncake — GLM-5.1 NVFP4, B300
- [#31640](https://github.com/sgl-project/sglang/issues/31640) [Bug] FA4 decode passes unsupported descale tensors on FP8 nemotron_h; forward_decode lacks the FA4 guard used by forward_extend
- [#39826](https://github.com/sgl-project/sglang/issues/39826) [Bug] Speculative decoding counts reasoning tokens past EOS, exceeding completion_tokens
- [#39782](https://github.com/sgl-project/sglang/issues/39782) [Bug] Anthropic streaming merges multiple tool-call arguments into one tool_use block
- [#37993](https://github.com/sgl-project/sglang/issues/37993) [Playground] Verified cell: h200 / flash-official / fp4 / low-latency / single
- [#34709](https://github.com/sgl-project/sglang/issues/34709) [Bug] benchmark/endpoint.py forks the server process after the parent initializes the accelerator (breaks XPU, latent on CUDA)

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 128,476 · **Open issues:** 2,487 · **Last push:** 1h ago

The latest release, version b11010, addresses a workaround for an NVIDIA bug with the argsort_large computation in Vulkan, enhancing overall stability. This follows the previous versions b11009 and b11007, which include crucial fixes for attention mechanisms in transformer models and improvements in CUDA graph usage, respectively. Significant merged pull requests include the addition of support for K-Quantization kernels in hexagon (b11006) and a fix for a dangerous use-after-free issue in the RPC module (b11000). Additionally, a new issue has been raised regarding a segfault in the llama-server when loading models, marking it as a notable concern for developers.

#### 🚀 New Releases
- [b11010](https://github.com/ggml-org/llama.cpp/releases/tag/b11010) b11010
- [b11009](https://github.com/ggml-org/llama.cpp/releases/tag/b11009) b11009
- [b11007](https://github.com/ggml-org/llama.cpp/releases/tag/b11007) b11007
- [b11006](https://github.com/ggml-org/llama.cpp/releases/tag/b11006) b11006
- [b11005](https://github.com/ggml-org/llama.cpp/releases/tag/b11005) b11005
- [b11003](https://github.com/ggml-org/llama.cpp/releases/tag/b11003) b11003
- [b11002](https://github.com/ggml-org/llama.cpp/releases/tag/b11002) b11002
- [b11001](https://github.com/ggml-org/llama.cpp/releases/tag/b11001) b11001
- [b11000](https://github.com/ggml-org/llama.cpp/releases/tag/b11000) b11000
- [b10999](https://github.com/ggml-org/llama.cpp/releases/tag/b10999) b10999

#### ✅ Merged PRs
- [#28975](https://github.com/ggml-org/llama.cpp/pull/28975) vulkan: work around NV bug with argsort_large.comp
- [#28965](https://github.com/ggml-org/llama.cpp/pull/28965) TP: fix split state and granularity for fused QKV gemma4, qwen35
- [#28959](https://github.com/ggml-org/llama.cpp/pull/28959) ci: switch fast jobs back to github
- [#28549](https://github.com/ggml-org/llama.cpp/pull/28549) Enable CUDA graph for MTP draft
- [#28994](https://github.com/ggml-org/llama.cpp/pull/28994) hexagon: Support for K-Quants Q4_K and Q6_K
- [#28995](https://github.com/ggml-org/llama.cpp/pull/28995) hexagon: accept the zeroed rope probe in supports_op
- [#28989](https://github.com/ggml-org/llama.cpp/pull/28989) convert : allow Nemotron models to only define layer_norm_epsilon
- [#27625](https://github.com/ggml-org/llama.cpp/pull/27625) model : add support for HrmTextForCausalLM (DFM Mimir 1B)
- [#26223](https://github.com/ggml-org/llama.cpp/pull/26223) metal: fix NaN in mul_mm_id when activations exceed f16 range
- [#28013](https://github.com/ggml-org/llama.cpp/pull/28013) CUDA/HIP: improve access patterns in im2col
- [#25161](https://github.com/ggml-org/llama.cpp/pull/25161) ggml : fix wrong transpose function for int16 data
- [#24292](https://github.com/ggml-org/llama.cpp/pull/24292) rpc : fix UAF in graph_recompute leading to remote code execution
- [#28849](https://github.com/ggml-org/llama.cpp/pull/28849) Change max context length for auto-fitting with unified KV
- [#28440](https://github.com/ggml-org/llama.cpp/pull/28440) vulkan: optimize IQ4_XS matmul kernels
- [#28901](https://github.com/ggml-org/llama.cpp/pull/28901) qwen4exp: add hc ops
- [#28935](https://github.com/ggml-org/llama.cpp/pull/28935) HIP: broaden MoE ncols_opt tile heuristic on RDNA3.5 architecture
- [#28869](https://github.com/ggml-org/llama.cpp/pull/28869) chat : force `\n</think>` on reasoning budget end for qwen3-coder
- [#28923](https://github.com/ggml-org/llama.cpp/pull/28923) vulkan : use BN/2 tail for MMID coopmat2 s tile
- [#28712](https://github.com/ggml-org/llama.cpp/pull/28712) ci : add self-hosted webgpu to hf-jobs
- [#28971](https://github.com/ggml-org/llama.cpp/pull/28971) llama-bench: support --version to print build info

#### 🐛 New Issues
- [#28990](https://github.com/ggml-org/llama.cpp/issues/28990) Feature Request: Performance Improvements on SYCL `enhancement` 💬1
- [#28980](https://github.com/ggml-org/llama.cpp/issues/28980) Misc. bug: [SYCL] incorrect func sig for `ggml_backend_sycl_split_buffer_type` `bug-unconfirmed` 💬1
- [#29006](https://github.com/ggml-org/llama.cpp/issues/29006) JSON Schema grammar fails on chat-template control tokens while equivalent GBNF succeeds (Granite 3.1 / Qwen3) `bug-unconfirmed`
- [#29002](https://github.com/ggml-org/llama.cpp/issues/29002) hybrid (LFM2) models: co-batching sequences corrupts the recurrent/short-conv state — greedy output diverges and can stop mid-sentence
- [#28998](https://github.com/ggml-org/llama.cpp/issues/28998) Feature Request: Keep KV cache when a model auto-unloads in router mode due to the --max-models setting `enhancement`
- [#28997](https://github.com/ggml-org/llama.cpp/issues/28997) Eval bug: llama-server segfaults (null function pointer) loading Gemma 4 E4B with Vulkan backend `bug-unconfirmed`
- [#28986](https://github.com/ggml-org/llama.cpp/issues/28986) Compile bug: RISC-V type 'vfloat32m8_t' requires the 'zve32f' extension `bug-unconfirmed`
- [#28974](https://github.com/ggml-org/llama.cpp/issues/28974) Feature Request: GGML_OP_UNIFORM_RANDOM, or another way to generate random numbers on-device `enhancement`

#### 🔒 Closed Issues
- [#25727](https://github.com/ggml-org/llama.cpp/issues/25727) Eval bug: Ternary Bonsai 27B don't run
- [#25722](https://github.com/ggml-org/llama.cpp/issues/25722) Eval bug: mistral4 empty output on Metal for prompts over ~300 tokens (clean GGUF, with and without flash attention)
- [#25668](https://github.com/ggml-org/llama.cpp/issues/25668) Eval bug: Can't run gemma4-style model
- [#26152](https://github.com/ggml-org/llama.cpp/issues/26152) [MoE] Scheduler crash during partial offload (GGML_SCHED_MAX_SPLIT_INPUTS)
- [#26429](https://github.com/ggml-org/llama.cpp/issues/26429) Feature Request: Support Inline Image Rendering in Chat Messages (including MCP tool outputs)
- [#25335](https://github.com/ggml-org/llama.cpp/issues/25335) Misc. bug: No "Final estimate PPL" when running llama-perplexity with stride option
- [#25612](https://github.com/ggml-org/llama.cpp/issues/25612) Eval bug: split-mode causes garbled output on dual Intel dGPU setup.
- [#26346](https://github.com/ggml-org/llama.cpp/issues/26346) Vulkan: ~6-8% MoE prompt-processing regression on 64-CU RDNA4 (RX 9070 XT) since #25005 (flops-based submission heuristic)
- [#26443](https://github.com/ggml-org/llama.cpp/issues/26443) Regression: Cannot spawn subprocess in non-ASCII path on Windows
- [#26416](https://github.com/ggml-org/llama.cpp/issues/26416) Misc. bug: Windows: common_params_parse discards the caller's argv
- [#26417](https://github.com/ggml-org/llama.cpp/issues/26417) Eval bug: Incoherent output for BF16 gemma-4 MoE models on devices without VK_KHR_shader_bfloat16
- [#26456](https://github.com/ggml-org/llama.cpp/issues/26456) Misc. bug: Cannot load models in Termux (on device built)
- [#26481](https://github.com/ggml-org/llama.cpp/issues/26481) Qwen3-Coder-Next (Gated Delta Net) load crash on RTX 5090 CUDA: shared object initialization failed - fixed by downgrading llama.cpp CUDA build

### Ollama (`ollama/ollama`)

**Stars:** 181,196 · **Open issues:** 4,027 · **Last push:** <1h ago

On September 17, 2026, there were no new releases in the Ollama ecosystem, but several noteworthy developments occurred in merged pull requests. The team clarified the Claude connection dialog in PR #18498 and fixed the link to cloud retirements settings in PR #18496, while PR #18489 relocated the MLX engine out of the x/ directory. Among the new issues raised, a notable feature request (#18490) proposes restoring the built-in agent as an opt-in CLI command or launcher option, indicating ongoing interest in enhancing user control. Other issues include a parsing problem with minicpm5-2b native tool calls (#18483) and a failure to load the llama3.2-vision model due to unknown architecture (#18486).

#### ✅ Merged PRs
- [#18498](https://github.com/ollama/ollama/pull/18498) app: clarify Claude connection dialog
- [#18496](https://github.com/ollama/ollama/pull/18496) docs: fix cloud retirements settings link
- [#18489](https://github.com/ollama/ollama/pull/18489) Move the MLX engine out of x/

#### 🐛 New Issues
- [#18490](https://github.com/ollama/ollama/issues/18490) Feature Request: Restore built-in agent as an opt-in CLI command / launcher option `feature request` 💬2
- [#18483](https://github.com/ollama/ollama/issues/18483) minicpm5-2b native tool calls never parse `bug` 💬2
- [#18494](https://github.com/ollama/ollama/issues/18494) qwen3-vl:8b-instruct 0xc0000005 on Vulkan AMD RX 6750 XT after multi-model load (Windows 0.34.1)
- [#18491](https://github.com/ollama/ollama/issues/18491) Connect to Claude Desktop forks into a new anonymous account instead of the signed-in session, and Disconnect intermittently fails to restore it
- [#18487](https://github.com/ollama/ollama/issues/18487) Feature request: optional external resource lock for shared GPU coordination `feature request`
- [#18486](https://github.com/ollama/ollama/issues/18486) llama3.2-vision fails to load: "unknown model architecture: 'mllama'" `bug`
- [#18484](https://github.com/ollama/ollama/issues/18484) `deepseek-v4.1-flash:cloud` default reasoning level is not in its supported levels
- [#18482](https://github.com/ollama/ollama/issues/18482) Vulkan iGPU (Intel Iris Xe) not detected at startup - total_vram 0 B sticky until restart

#### 🔒 Closed Issues
- [#18486](https://github.com/ollama/ollama/issues/18486) llama3.2-vision fails to load: "unknown model architecture: 'mllama'"

### LiteLLM (`BerriAI/litellm`)

**Stars:** 58,920 · **Open issues:** 5,116 · **Last push:** <1h ago

On September 17, 2026, LiteLLM released version v1.103.0-dev.1 and v1.102.0-rc.2, both ensuring that Docker images are signed with cosign for enhanced security. Significant merged PRs included a fix for logging efficiency with #40934 and improvements to the proxy's handling of rate limits in #40596. Notably, #41486 emerged as a feature request for returning costs in non-streaming response bodies, highlighting ongoing user interest in cost transparency. Other critical issues reported included a bug where the usage page inaccurately displayed the Max Budget for filtered users, as noted in #41450.

#### 🚀 New Releases
- [v1.103.0-dev.1](https://github.com/BerriAI/litellm/releases/tag/v1.103.0-dev.1) v1.103.0-dev.1
- [v1.102.0-rc.2](https://github.com/BerriAI/litellm/releases/tag/v1.102.0-rc.2) v1.102.0-rc.2

#### ✅ Merged PRs
- [#40934](https://github.com/BerriAI/litellm/pull/40934) fix(logging): scan each log record once and collapse base64 payloads before the secret regex
- [#41379](https://github.com/BerriAI/litellm/pull/41379) fix!: re-check budget on router fallback targets
- [#41078](https://github.com/BerriAI/litellm/pull/41078) test: add extension and browser integration contracts
- [#41520](https://github.com/BerriAI/litellm/pull/41520) fix(e2e): bind provider-cache recordings to the deployment's test, not the serving process
- [#41495](https://github.com/BerriAI/litellm/pull/41495) fix(utils): run post-call deployment hook on converted chat streams
- [#40842](https://github.com/BerriAI/litellm/pull/40842) fix(proxy): enforce tag budgets for tags added by guardrails
- [#41500](https://github.com/BerriAI/litellm/pull/41500) feat(rust): add standalone framing crate
- [#41494](https://github.com/BerriAI/litellm/pull/41494) ci: auto-merge provider-info-sync PRs when CI, Greptile and Bugbot are clean
- [#41514](https://github.com/BerriAI/litellm/pull/41514) fix(mcp): count admin static headers as api_key credential slots
- [#41075](https://github.com/BerriAI/litellm/pull/41075) test: provider wire contracts, streaming and recovery
- [#41073](https://github.com/BerriAI/litellm/pull/41073) test: cover database transactions and persisted accounting
- [#41509](https://github.com/BerriAI/litellm/pull/41509) fix(bedrock_mantle): accept and forward verbosity on gpt-5.x chat completions
- [#41445](https://github.com/BerriAI/litellm/pull/41445) feat(ui): persist organizations and projects list, detail tab and key table state in the URL
- [#41513](https://github.com/BerriAI/litellm/pull/41513) fix(bedrock): neutralize orphaned tool blocks instead of raising or injecting a dummy tool (internal copy of #31400)
- [#39996](https://github.com/BerriAI/litellm/pull/39996) feat(proxy): let proxy admins choose which team fields team admins may edit
- [#41094](https://github.com/BerriAI/litellm/pull/41094) fix(proxy): show all model groups to proxy admins in /model_group/info
- [#33856](https://github.com/BerriAI/litellm/pull/33856) fix(azure_ai): route Responses API to native /openai/v1/responses for Foundry Models
- [#41503](https://github.com/BerriAI/litellm/pull/41503) fix(streaming): estimate interrupted Anthropic stream usage from reasoning_content
- [#41504](https://github.com/BerriAI/litellm/pull/41504) fix(proxy): stop forwarding LiteLLM credential headers on Bedrock agent-runtime passthrough
- [#41201](https://github.com/BerriAI/litellm/pull/41201) fix(gemini): map minimal thinking to low for Gemini 3.7 and 3.8 Flash
- [#40596](https://github.com/BerriAI/litellm/pull/40596) fix(proxy): retry rate-limit fallbacks from a pristine request snapshot
- [#41356](https://github.com/BerriAI/litellm/pull/41356) fix(proxy): carry litellm_call_id through endpoint specific error logs and failure responses
- [#37506](https://github.com/BerriAI/litellm/pull/37506) fix(dashscope): forward reasoning_effort to the provider
- [#41501](https://github.com/BerriAI/litellm/pull/41501) feat(rust): scaffold Redis cache crate
- [#41364](https://github.com/BerriAI/litellm/pull/41364) fix(mcp): fail closed on missing upstream credentials
- [#41402](https://github.com/BerriAI/litellm/pull/41402) feat(e2e): make the provider cache reusable across builds and mount Bedrock behind it
- [#41331](https://github.com/BerriAI/litellm/pull/41331) feat(ui): shared URL-state layer for tables and tabs
- [#41360](https://github.com/BerriAI/litellm/pull/41360) test(together_ai): move request-shape checks to the mapped file, drop the live ones
- [#41487](https://github.com/BerriAI/litellm/pull/41487) test(logging): pick this test's own records out of the shared log batch
- [#41345](https://github.com/BerriAI/litellm/pull/41345) fix(proxy): remove duplicate user budget hook that 429'd zero-cost models
- [#40669](https://github.com/BerriAI/litellm/pull/40669) fix(otel): propagate W3C trace context on HTTP and WebSocket passthrough
- [#41496](https://github.com/BerriAI/litellm/pull/41496) fix(prices): dedupe Nova cache_read_input_token_cost keys left by a text merge
- [#35418](https://github.com/BerriAI/litellm/pull/35418) feat(ui): accept ssh clone urls when registering a skill
- [#40843](https://github.com/BerriAI/litellm/pull/40843) fix(proxy): release completed max-parallel slots promptly
- [#41403](https://github.com/BerriAI/litellm/pull/41403) feat(proxy): expose lifetime total_spend on virtual keys
- [#41311](https://github.com/BerriAI/litellm/pull/41311) feat(keys): filter /key/list by active, expired, revoked or deleted status and serve deleted keys from /key/info
- [#41330](https://github.com/BerriAI/litellm/pull/41330) feat(team): team-level model_max_budget with key-level overrides
- [#41327](https://github.com/BerriAI/litellm/pull/41327) feat(s3): add s3_log_prompts_only option to log prompts without responses
- [#41489](https://github.com/BerriAI/litellm/pull/41489) refactor(ocr): move file preparation from the python bridge into litellm-core
- [#41425](https://github.com/BerriAI/litellm/pull/41425) feat(guardrails): release buffered stream chunks after each passing scan
- [#41474](https://github.com/BerriAI/litellm/pull/41474) fix(router): count TPM/RPM usage before building rate-limit headers
- [#41112](https://github.com/BerriAI/litellm/pull/41112) fix(models): rolling registry audit: Gemini latest aliases, Nova cache pricing, OpenRouter/Together sync, Mistral GLM 5.3, Azure snapshots, Grok caching
- [#41446](https://github.com/BerriAI/litellm/pull/41446) fix(anthropic): carry the served model from message_start onto stream chunks
- [#36815](https://github.com/BerriAI/litellm/pull/36815) fix(otel): drop None metric and event attributes before OTLP export
- [#41472](https://github.com/BerriAI/litellm/pull/41472) feat(prometheus): add customer (end_user) budget gauges
- [#41460](https://github.com/BerriAI/litellm/pull/41460) ci(migrations): flag defaulted ADD COLUMN on request-log tables
- [#41343](https://github.com/BerriAI/litellm/pull/41343) fix(bedrock): make prompt caching work on the Nova InvokeModel route
- [#34829](https://github.com/BerriAI/litellm/pull/34829) fix(http_handler): keep a handler alive while a response it issued is still reading
- [#41458](https://github.com/BerriAI/litellm/pull/41458) fix(proxy): sync AWS Secrets Manager on body-less key regenerate and key alias changes
- [#41462](https://github.com/BerriAI/litellm/pull/41462) feat(otel): promote nested request metadata keys to litellm.metadata.* span attributes
- [#41468](https://github.com/BerriAI/litellm/pull/41468) fix(proxy): rename AWS Secrets Manager secret when key alias changes
- [#41340](https://github.com/BerriAI/litellm/pull/41340) fix(proxy): never forward the LiteLLM virtual key to Anthropic on the /anthropic passthrough
- [#41335](https://github.com/BerriAI/litellm/pull/41335) fix(fireworks_ai): flatten dict-form reasoning_effort to its effort string
- [#41480](https://github.com/BerriAI/litellm/pull/41480) ci(rust): split rust jobs, use nextest and Swatinem/rust-cache
- [#41475](https://github.com/BerriAI/litellm/pull/41475) fix(bedrock): forward userContext in Knowledge Base Retrieve requests
- [#41457](https://github.com/BerriAI/litellm/pull/41457) chore(prices): sync Google Gemini prices: 22 models
- [#34455](https://github.com/BerriAI/litellm/pull/34455) fix(responses): guard empty-choices chunks in the Responses API streaming bridge
- [#41333](https://github.com/BerriAI/litellm/pull/41333) chore(codeowners): add ryan and kerry as owners of the cost map
- [#41386](https://github.com/BerriAI/litellm/pull/41386) fix(proxy): default litellm_trace_id to the OTel server span trace id
- [#41464](https://github.com/BerriAI/litellm/pull/41464) refactor(rust): extract auth and cache crates
- [#34427](https://github.com/BerriAI/litellm/pull/34427) fix(rag): forward retrieval_filter from retrieval_config to vector store search
- [#41154](https://github.com/BerriAI/litellm/pull/41154) chore(prices): sync Azure, Azure AI, Gemini, OpenAI, Bedrock, Together AI, Fireworks and Vertex prices: 278 models, 59 new, 30 deprecated
- [#40571](https://github.com/BerriAI/litellm/pull/40571) fix(guardrails): don't add post_call output scan for MCP-only Presidio modes
- [#41432](https://github.com/BerriAI/litellm/pull/41432) refactor(rust): remove gateway, config, router, realtime, and Rust trace-parity instrumentation
- [#41268](https://github.com/BerriAI/litellm/pull/41268) feat(http): opt-in outbound HTTP/2 for httpx clients
- [#41310](https://github.com/BerriAI/litellm/pull/41310) fix(proxy): hide model allowlist from client-facing model access denied errors
- [#41407](https://github.com/BerriAI/litellm/pull/41407) perf(content_filter): scan a bounded window per streamed chunk
- [#41368](https://github.com/BerriAI/litellm/pull/41368) feat(router): stream shadow traffic and fan out silent_model to multiple targets
- [#41314](https://github.com/BerriAI/litellm/pull/41314) fix(mcp): authorize JWT OAuth credential persistence
- [#41366](https://github.com/BerriAI/litellm/pull/41366) fix(e2e): record cookie-setting provider responses and keep prompt-caching tests live
- [#41329](https://github.com/BerriAI/litellm/pull/41329) feat(guardrails): singulr v2 API contract with logging_only, pre_mcp_call and post_mcp_call
- [#41371](https://github.com/BerriAI/litellm/pull/41371) fix(ui): simplify Capability and Fuse advanced routing options
- [#41337](https://github.com/BerriAI/litellm/pull/41337) fix(responses): recount tokens when a streamed response completes without usage
- [#41348](https://github.com/BerriAI/litellm/pull/41348) fix(e2e): expect models filters to persist after reload
- [#41359](https://github.com/BerriAI/litellm/pull/41359) test(proxy): assert budget resets decrement the cleared spend
- [#41358](https://github.com/BerriAI/litellm/pull/41358) test(router): ignore deployment-selection logs in the fallback log assertion
- [#41336](https://github.com/BerriAI/litellm/pull/41336) fix(anthropic): tolerate message_delta events without usage when streaming
- [#41315](https://github.com/BerriAI/litellm/pull/41315) feat(ui): configure capability and Fuse v2 classifiers
- [#38254](https://github.com/BerriAI/litellm/pull/38254) fix(xai): keep 'instructions' on the xAI Responses API so system messages survive web search
- [#41346](https://github.com/BerriAI/litellm/pull/41346) feat(e2e): reuse exact provider responses for 24 hours
- [#41128](https://github.com/BerriAI/litellm/pull/41128) feat(guardrails): support pre_call and during_call modes for llm_as_a_judge
- [#41353](https://github.com/BerriAI/litellm/pull/41353) ci(image-scan): ignore zlib CVE-2026-85091 until Wolfi ships the fix
- [#41339](https://github.com/BerriAI/litellm/pull/41339) fix(fireworks-ai): bill cache-write, reasoning and audio tokens via the shared cost calculator
- [#41338](https://github.com/BerriAI/litellm/pull/41338) fix(gemini): propagate the provider's modelVersion to the response model
- [#41341](https://github.com/BerriAI/litellm/pull/41341) fix(proxy): preserve Anthropic pricing modifiers in router savings
- [#41313](https://github.com/BerriAI/litellm/pull/41313) feat(ui): show average response time per model in usage model activity
- [#41298](https://github.com/BerriAI/litellm/pull/41298) test: drop remaining tests that pin cost-map vendor facts
- [#38241](https://github.com/BerriAI/litellm/pull/38241) feat(guardrails): add Microsoft Agent 365 MCP tool-call guardrail
- [#41319](https://github.com/BerriAI/litellm/pull/41319) fix(e2e): onboard dashboard users through invitations

#### 🐛 New Issues
- [#41486](https://github.com/BerriAI/litellm/issues/41486) [Feature]: return cost in non-streaming response bodies, matching include_cost_in_streaming_usage `llm translation` 💬2
- [#41450](https://github.com/BerriAI/litellm/issues/41450) [Bug] Usage page shows the logged-in admin's Max Budget for every filtered user (global "$3,000.0000 limit"), hides unlimited, and omits the budget period 💬2
- [#41392](https://github.com/BerriAI/litellm/issues/41392) [Bug]: hosted_vllm drops reasoning_content from replayed assistant messages since 1.100.0 `bug` `SDK` `potential-duplicate` 💬2
- [#41357](https://github.com/BerriAI/litellm/issues/41357) [Bug]: Proxy leaks one SlackAlerting.periodic_flush task every 30s when general_settings.alerting is set (grows until restart) `bug` `proxy` `llm translation` 💬2
- [#41435](https://github.com/BerriAI/litellm/issues/41435) [Bug]: Fix "vertex_ai/xai/grok-4.6" entry in "model_prices_and_context_window.json" — missing supports_prompt_caching `bug` `llm translation` `SDK` 💬1
- [#41517](https://github.com/BerriAI/litellm/issues/41517) regression: TestTeamScopedToAccessGroup broken by #41310 `llm translation` `potential-duplicate` `regression` `ci-cadence` 💬1
- [#41395](https://github.com/BerriAI/litellm/issues/41395) [Bug]: context-management summary subrequests bypass a project's ITPM/OTPM quotas (v3 rate limiter) `proxy` `llm translation` 💬1
- [#41529](https://github.com/BerriAI/litellm/issues/41529) [Bug]: Bedrock Converse silently caps Anthropic output at 4096 when max_tokens is omitted `llm translation`
- [#41394](https://github.com/BerriAI/litellm/issues/41394) [Bug]: All chatgpt/* models missing reasoning annotations present on their openai/ and azure/ twins `llm translation`
- [#41492](https://github.com/BerriAI/litellm/issues/41492) [Bug]: Gemini grounding metadata (annotations/url_citation) intermittently dropped on streaming responses for Gemini 3.x models, present every time on non-streaming `proxy` `llm translation`
- [#41521](https://github.com/BerriAI/litellm/issues/41521) [Bug]: failed /v1/audio/speech calls write no LiteLLM_SpendLogs row (success rows and other routes' failure rows are written) `proxy` `llm translation`
- [#41519](https://github.com/BerriAI/litellm/issues/41519) CI cadence heartbeat `ci-cadence`
- [#41518](https://github.com/BerriAI/litellm/issues/41518) cadence 4e99640: 3 new red `ci-cadence`
- [#41516](https://github.com/BerriAI/litellm/issues/41516) regression: test_outbound_http2_e2e broken by #41268 `regression` `ci-cadence`
- [#41387](https://github.com/BerriAI/litellm/issues/41387) [Bug]: Azure Responses API leaks the azure_ai/ prefix into the request model (DeploymentNotFound) when azure_ai/<openai-model> is reclassified to azure `proxy` `llm translation`
- [#41502](https://github.com/BerriAI/litellm/issues/41502) ProxyConfig._delete_deployment permanently evicts config-file-defined models on a single transient/incomplete config read (no debounce, unlike the DB-fetch path) `llm translation`
- [#41499](https://github.com/BerriAI/litellm/issues/41499) [Feature]: Make model_map_information in SpendLogs metadata optional — it is ~65% of every row
- [#41467](https://github.com/BerriAI/litellm/issues/41467) Watsonx pass-through route bypasses virtual-key model allowlists: the request body's model_id is never resolved, so models[] scope is not checked while the relay uses the gateway's IAM token `llm translation`
- [#41456](https://github.com/BerriAI/litellm/issues/41456) [Bug]: /v1/responses -> Anthropic bridge drops compaction output item and ignores compaction input items (context_management is request-side only) `proxy` `llm translation`
- [#41452](https://github.com/BerriAI/litellm/issues/41452) [Feature] Deeplink Internal Users → Usage for a single user (establishing a URL-state pattern for Usage views)
- [#41453](https://github.com/BerriAI/litellm/issues/41453) [Feature] Sort the Internal Users list by Budget, and filter users by a budget comparator (above / below / equals) for tiering
- [#41454](https://github.com/BerriAI/litellm/issues/41454) [Feature] Adjust a user's budget from a modal / slide-out (quick action on Internal Users and Usage)
- [#41431](https://github.com/BerriAI/litellm/issues/41431) [Bug] Key-level `opted_out_global_guardrails` is ignored when the key belongs to a team `llm translation`
- [#41427](https://github.com/BerriAI/litellm/issues/41427) [Bug]: interactions.create() silently drops image content when bridged to responses API via litellm_proxy (Gemini) `proxy` `llm translation`
- [#41424](https://github.com/BerriAI/litellm/issues/41424) [Bug]: Anthropic /v1/messages → Responses bridge drops cache_control, so Claude Code gets zero prompt-cache reads on bedrock_mantle gpt-5.6 `llm translation` `claude code`
- [#41422](https://github.com/BerriAI/litellm/issues/41422) [Feature]: Opt-in root-span I/O propagation for generic OpenTelemetry export `enhancement` `proxy` `llm translation`
- [#41421](https://github.com/BerriAI/litellm/issues/41421) [Bug]: LiteLLM Proxy 1.100.0 serializes image-edit uploads as strings for OpenAI GPT Image models `bug` `proxy` `llm translation`
- [#41420](https://github.com/BerriAI/litellm/issues/41420) [Bug]: LiteLLM Proxy (Prisma) does not close idle connections during low traffic `bug` `proxy`
- [#41417](https://github.com/BerriAI/litellm/issues/41417) [Bug]: end users identified via `user_header_name` are never created as customers on a shared virtual key (resolved by `user_api_key_cache_ttl: 0`) `bug` `proxy` `llm translation`
- [#41411](https://github.com/BerriAI/litellm/issues/41411) [Bug]: `websearch_interception` with `stream=true` crashes: `ModelResponse` is not async iterable `bug` `proxy` `llm translation`
- [#41409](https://github.com/BerriAI/litellm/issues/41409) [Bug]: Gemini tool results using function_response fail with HTTP 400 on custom native endpoints `llm translation`
- [#41406](https://github.com/BerriAI/litellm/issues/41406) [Bug]: /v1/messages Responses bridge emits message_start with usage.input_tokens 0; the real count arrives only in the final message_delta `llm translation` `claude code`
- [#41405](https://github.com/BerriAI/litellm/issues/41405) [Feature]: support logging_only mode on litellm_content_filter
- [#41400](https://github.com/BerriAI/litellm/issues/41400) [Bug]: Responses tool namespaces missing from Langfuse OTEL output `proxy` `llm translation`
- [#41391](https://github.com/BerriAI/litellm/issues/41391) [Bug]: AsyncHTTPHandler.get() never checks the status, so every GET-based search adapter turns a rejected API key into a successful empty result
- [#41385](https://github.com/BerriAI/litellm/issues/41385) [Bug]: /v1/responses fallback to OpenAI-compatible deployment that only supports chat completions fails with masked AuthenticationError `llm translation`
- [#41382](https://github.com/BerriAI/litellm/issues/41382) [Bug]: Anthropic input_transformations (preserved-thinking drop report) is dropped from the logged response — s3_v2 / spend logs never record thinking_dropped `proxy` `llm translation`
- [#41370](https://github.com/BerriAI/litellm/issues/41370) Fix "xai/grok-4" entry in "model_prices_and_context_window.json"
- [#41365](https://github.com/BerriAI/litellm/issues/41365) [Feature]: Routing Strategy I need an tokens/s(avg users) `enhancement` `ui-dashboard`
- [#41361](https://github.com/BerriAI/litellm/issues/41361) [Bug]: /v1/messages drops signature-only thinking blocks (Claude Opus 4.8 / Fable 5 / Fable 5.1 default shape), losing reasoning and defeating preserved-thinking checks `proxy` `llm translation`
- [#41352](https://github.com/BerriAI/litellm/issues/41352) [Feature]: Small-team managed configuration — local proxy instances with a shared config authority

#### 🔒 Closed Issues
- [#24158](https://github.com/BerriAI/litellm/issues/24158) [Bug]: Bedrock rejects requests without tools= parameter, even for non-tool-use completions
- [#36759](https://github.com/BerriAI/litellm/issues/36759) [Bug]: gen_ai.system still reaches OTel exporter as 'None' in metrics/events paths — PR #26713 only fixed the span-attribute call site
- [#23102](https://github.com/BerriAI/litellm/issues/23102) [Feature]: add support for vLLM realtime endpoint
- [#30053](https://github.com/BerriAI/litellm/issues/30053) bug(streaming): fast_path in async_streaming_data_generator breaks tool-call continuation — client receives XML instead of text (introduced v1.87.0, PR #28289)
- [#30065](https://github.com/BerriAI/litellm/issues/30065) [Bug]: _group_keys_by_hash_tag() skips slot grouping for non-OSS-Cluster Redis, causing CROSSSLOT errors on Azure Redis Enterprise
- [#41344](https://github.com/BerriAI/litellm/issues/41344) [Bug]: Zero-cost budget bypass leaks unbounded spend when the free model has a paid fallback
- [#40735](https://github.com/BerriAI/litellm/issues/40735) [Bug]: bedrock_converse rejects agent follow-up turns that carry tool-call history without a tools array
- [#30217](https://github.com/BerriAI/litellm/issues/30217) [Bug] Anthropic `/v1/messages/count_tokens` ignores `api_base` and hardcodes `api.anthropic.com`, breaking self-hosted backends
- [#30228](https://github.com/BerriAI/litellm/issues/30228) [Bug]: api_key_alias is None on Prometheus metrics for BudgetExceededError 429s
- [#24929](https://github.com/BerriAI/litellm/issues/24929) [Bug]: Streaming responses fail in bursts aligned with httpx client ttl
- [#30195](https://github.com/BerriAI/litellm/issues/30195) [Feature]: Using libjemalloc2 for efficient memory management and garbage collection
- [#30251](https://github.com/BerriAI/litellm/issues/30251) [Bug]: Managed files - UniqueViolationError on model_object_id when the same provider object is re-registered under a new unified_object_id
- [#37314](https://github.com/BerriAI/litellm/issues/37314) [Bug]: vertex_ai/gemini-3.7-flash returns 400 for reasoning_effort minimal/none/disable — THINKING_LEVEL_MINIMAL is not supported by this model
- [#35649](https://github.com/BerriAI/litellm/issues/35649) [Bug]: Fireworks AI transformer passes dict-form reasoning_effort to API, causing 400
- [#30972](https://github.com/BerriAI/litellm/issues/30972) [Bug]: /tag/list (and tool-policy endpoints) return HTTP 500 — find_many/find_unique(select=...) is incompatible with prisma-client-py ("unexpected keyword argument 'select'")
- [#41387](https://github.com/BerriAI/litellm/issues/41387) [Bug]: Azure Responses API leaks the azure_ai/ prefix into the request model (DeploymentNotFound) when azure_ai/<openai-model> is reclassified to azure
- [#40846](https://github.com/BerriAI/litellm/issues/40846) [Bug]: Completed /v1/responses requests retain max_parallel_requests slots during deferred logging
- [#37127](https://github.com/BerriAI/litellm/issues/37127) [Bug]: xAI web_search_options + a system message raises UnsupportedParamsError on 'instructions' — which xAI does support

### Unsloth (`unslothai/unsloth`)

**Stars:** 76,255 · **Open issues:** 1,280 · **Last push:** <1h ago

On September 17, 2026, Unsloth released Windows ARM64 binaries to enhance its compatibility with ARM devices. Significant merged features include improvements in SSH restrictions for the studio environment and the introduction of a minimal OS sandbox for Python and Terminal tools on Linux and macOS. Additionally, changes were made to the Studio interface, including better GPU device ordering and enhancements in the queue display for a more user-friendly experience. Several bug fixes were also addressed, such as repairing CPU torch compatibility on NVIDIA hosts and ensuring scikit-learn is pinned to prevent security audit issues. A notable new issue raised today concerns auto-reloading models when connecting or reconnecting to llama.cpp, which could impact user experience in model management.

#### 🚀 New Releases
- [Windows-ARM64](https://github.com/unslothai/unsloth/releases/tag/Windows-ARM64) Windows ARM64 Binaries

#### ✅ Merged PRs
- [#11163](https://github.com/unslothai/unsloth/pull/11163) Revert "feat(studio): consistent SSH restrictions with approved-server allowlist"
- [#10642](https://github.com/unslothai/unsloth/pull/10642) feat(studio): consistent SSH restrictions with approved-server allowlist
- [#10526](https://github.com/unslothai/unsloth/pull/10526) Studio: minimal OS sandbox for Python and Terminal tools on Linux and macOS
- [#11042](https://github.com/unslothai/unsloth/pull/11042) Keep an exported config's MTP declaration in agreement with the weights
- [#11127](https://github.com/unslothai/unsloth/pull/11127) Studio: repair CPU torch on an NVIDIA host from the Linux fast path
- [#11112](https://github.com/unslothai/unsloth/pull/11112) Pin the win_arm64 scikit-learn to one version so the security audit cannot go red on its own
- [#11069](https://github.com/unslothai/unsloth/pull/11069) Release: sign every shipped PowerShell script and publish digests for the rest
- [#11117](https://github.com/unslothai/unsloth/pull/11117) Studio: localize the prompt queue view and align its editor shortcut
- [#11118](https://github.com/unslothai/unsloth/pull/11118) Studio: print the first-boot password when nothing else will show it
- [#11041](https://github.com/unslothai/unsloth/pull/11041) Studio: let the GPUs picker set device order, not just membership
- [#11048](https://github.com/unslothai/unsloth/pull/11048) Studio: make Thinking and repetition penalty work on messages with an image
- [#11044](https://github.com/unslothai/unsloth/pull/11044) Studio: save a training checkpoint when the container is stopped
- [#11114](https://github.com/unslothai/unsloth/pull/11114) Studio: clarify queue options and refine queue styling
- [#11108](https://github.com/unslothai/unsloth/pull/11108) Windows on ARM: take the wheelhouse from our own signed release
- [#11113](https://github.com/unslothai/unsloth/pull/11113) Studio: refine queue drag handles and resume icons
- [#11045](https://github.com/unslothai/unsloth/pull/11045) Docker: let UNSLOTH_STUDIO_PORT change Studio's port inside the container
- [#11105](https://github.com/unslothai/unsloth/pull/11105) Studio: rewrite the guided tour and give every page one
- [#11109](https://github.com/unslothai/unsloth/pull/11109) docker: let the quickstart generate the passwords and print them
- [#11050](https://github.com/unslothai/unsloth/pull/11050) Studio: stop merging the model twice when pushing a merged export to the Hub
- [#11111](https://github.com/unslothai/unsloth/pull/11111) Fix the three Backend CI failures on main
- [#11043](https://github.com/unslothai/unsloth/pull/11043) Studio: make the GGUF memory estimate match the compute buffers llama.cpp allocates
- [#10931](https://github.com/unslothai/unsloth/pull/10931) Apply Q-GaLore weight decay before the projected update
- [#11039](https://github.com/unslothai/unsloth/pull/11039) Match stopping criteria separately for each generated sequence
- [#11053](https://github.com/unslothai/unsloth/pull/11053) Studio: keep every turn when training a chat dataset with Alpaca format
- [#11106](https://github.com/unslothai/unsloth/pull/11106) docker: stop the toolkit installer reporting a healthy driver as missing
- [#10282](https://github.com/unslothai/unsloth/pull/10282) Windows on ARM: install the native ARM64 CUDA stack on NVIDIA hosts
- [#10993](https://github.com/unslothai/unsloth/pull/10993) studio: preserve transcripts and recall audio and image models
- [#11034](https://github.com/unslothai/unsloth/pull/11034) Studio: keep the GPU order the user asked for instead of re-emitting it ascending
- [#11047](https://github.com/unslothai/unsloth/pull/11047) Studio: fix Base vs LoRA compare for messages with an image
- [#11051](https://github.com/unslothai/unsloth/pull/11051) Studio: stop hiding MCP tools that have a dot or a long name
- [#11073](https://github.com/unslothai/unsloth/pull/11073) Studio: stop context checkpoints from filling host RAM on hybrid recurrent models
- [#11100](https://github.com/unslothai/unsloth/pull/11100) Redact hf_token and wandb_token in `unsloth train --dry-run` output
- [#11093](https://github.com/unslothai/unsloth/pull/11093) Studio: simplify and prioritize chat settings
- [#11090](https://github.com/unslothai/unsloth/pull/11090) Keep an abandoned zoom call out of the next test's stub
- [#11099](https://github.com/unslothai/unsloth/pull/11099) docker: correct four stale claims on the Hub page
- [#11095](https://github.com/unslothai/unsloth/pull/11095) Studio: soften authentication cards and update password setup copy
- [#11091](https://github.com/unslothai/unsloth/pull/11091) tests: route the uv requirements-path pwsh call through the shared runner
- [#11061](https://github.com/unslothai/unsloth/pull/11061) Studio: send a download over Xet when HTTPS cannot fetch its largest file
- [#11060](https://github.com/unslothai/unsloth/pull/11060) Studio: stop charging CPU-mapped input embeddings to the Metal context budget
- [#11088](https://github.com/unslothai/unsloth/pull/11088) Studio: organize chat settings and simplify descriptions
- [#11052](https://github.com/unslothai/unsloth/pull/11052) Studio: on low disk, load the largest GGUF quant that fits and show which one loaded
- [#11015](https://github.com/unslothai/unsloth/pull/11015) Recognise a partially initialised torchvision and fix the studiobench ab_plan row
- [#11059](https://github.com/unslothai/unsloth/pull/11059) docker: give unsloth/unsloth-rocm a Hub page and keep it in sync
- [#11066](https://github.com/unslothai/unsloth/pull/11066) README: point AMD users at the ROCm image
- [#11049](https://github.com/unslothai/unsloth/pull/11049) Studio: fix structured columns in Data Recipes on non-GGUF models
- [#11087](https://github.com/unslothai/unsloth/pull/11087) Studio: move composer settings into More
- [#11055](https://github.com/unslothai/unsloth/pull/11055) Studio: keep waiting on a llama-server load that is still reading its model
- [#11065](https://github.com/unslothai/unsloth/pull/11065) Assert the preset sheet subscribes, not how the subscription is spelled
- [#11086](https://github.com/unslothai/unsloth/pull/11086) Re-draw a port the OS handed to another test
- [#11085](https://github.com/unslothai/unsloth/pull/11085) Give the launcher signal tests a worker to themselves
- [#11076](https://github.com/unslothai/unsloth/pull/11076) Answer /status the runtime fields a backend double cannot invent
- [#11071](https://github.com/unslothai/unsloth/pull/11071) Docker publish: verify the Studio image env, and stop telling latest users to opt in to CPU
- [#11064](https://github.com/unslothai/unsloth/pull/11064) Windows installer: stop uv splitting a requirements path, and keep the error position in diagnostics
- [#11063](https://github.com/unslothai/unsloth/pull/11063) Stop the deps CLI fixture racing another worker for the requirements tree
- [#11062](https://github.com/unslothai/unsloth/pull/11062) README: mount the Hugging Face cache in the Docker quickstart
- [#11036](https://github.com/unslothai/unsloth/pull/11036) docs: clarify Docker shell and Windows setup instructions
- [#8762](https://github.com/unslothai/unsloth/pull/8762) Unsloth Studio Installer: improve GPU print details (NVIDIA, Intel, AMD)
- [#11013](https://github.com/unslothai/unsloth/pull/11013) Studio: re-measure the startup bundle budget, which main is red on by itself
- [#8642](https://github.com/unslothai/unsloth/pull/8642) fix(amd:audio): decode audio through PyAV when torchcodec installs but cannot load
- [#11028](https://github.com/unslothai/unsloth/pull/11028) Studio backend tests: settle the real loggers package in conftest for repo-root pytest runs

#### 🐛 New Issues
- [#11092](https://github.com/unslothai/unsloth/issues/11092) [Feature] Auto reload models when llama.cpp first connect or reconnects `feature request` 💬2
- [#11143](https://github.com/unslothai/unsloth/issues/11143) [Bug] b10995-mix-3e83366: Qwen3.8-Flash-Next MTP aborts at load (nextn.hc_head_norm still [hc_dim] after rebase)
- [#11140](https://github.com/unslothai/unsloth/issues/11140) OpenAI API: auto-switch does not cold-load a downloaded GGUF, so `/v1/chat/completions` returns 400 "No model loaded" when nothing is loaded
- [#11141](https://github.com/unslothai/unsloth/issues/11141) Studio: expose prefill progress over the API so clients can show the wait before the first token
- [#11135](https://github.com/unslothai/unsloth/issues/11135) Unsloth Desktop packaged for Nixpkgs
- [#11103](https://github.com/unslothai/unsloth/issues/11103) Studio: token-carrying requests that still follow redirects without the auth-safe policy
- [#11098](https://github.com/unslothai/unsloth/issues/11098) Qwen3.8-Next MTP guide (RTX 6000 PRO): which memory tier carried the PLE table behind the 170 tok/s chart?
- [#11096](https://github.com/unslothai/unsloth/issues/11096) [Feature] Upload/download files in the sandbox `feature request`
- [#11078](https://github.com/unslothai/unsloth/issues/11078) [Question] Model support

#### 🔒 Closed Issues
- [#10923](https://github.com/unslothai/unsloth/issues/10923) Unsloth studio docker instructions don't save downloaded models.
- [#2953](https://github.com/unslothai/unsloth/issues/2953) 'list' object has no attribute 'map'
- [#1793](https://github.com/unslothai/unsloth/issues/1793) partially initialized module 'torchvision' has no attribute 'extension'
- [#9333](https://github.com/unslothai/unsloth/issues/9333) [Feature] Change GPU Order / Priority / Enabling in Unsloth Desktop
- [#2401](https://github.com/unslothai/unsloth/issues/2401) Jetson finetune load model out of memory
- [#1766](https://github.com/unslothai/unsloth/issues/1766) Unexpected error when calling standardize_sharegpt
- [#11012](https://github.com/unslothai/unsloth/issues/11012) [Bug] Windows setup fails: Unexpected '[' (exit code 2)
- [#10921](https://github.com/unslothai/unsloth/issues/10921) [Bug] Memory usage growth since last llamacpp update
- [#7681](https://github.com/unslothai/unsloth/issues/7681) [Bug] Qwen3.5 finetune cannot use vllm serve to inference
- [#10995](https://github.com/unslothai/unsloth/issues/10995) Studio backend tests: the non-package loggers stub breaks collection when pytest runs from the repo root
- [#7676](https://github.com/unslothai/unsloth/issues/7676) [Bug] Local model not being displayed in list of local models, but can be loaded through Search Hub
- [#10894](https://github.com/unslothai/unsloth/issues/10894) [Feature] UX Improvements for Audio Transcription & Image Generation Workflows
- [#9580](https://github.com/unslothai/unsloth/issues/9580) studiobench: ab_plan rows are silently dropped by the header section collapse in assemble_rows

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,094 · **Open issues:** 376 · **Last push:** 5h ago

On September 17, 2026, there were no new releases for AIBrix. However, several significant pull requests were merged, including the addition of unit tests for the SLOQueue rank path and SLO branch precedence (#2734) and the routing of vLLM /tokenize requests through the gateway (#2732). Other noteworthy merges included enabling scheduled bounds and RoleSet drain end-to-end tests (#2736) and adding an explicit Area field to Issue Forms (#2729). Additionally, a new issue was raised regarding the expansion of integration and end-to-end coverage for core controller and gateway workflows, tagged as #2737, highlighting ongoing efforts to improve testing in the project.

#### ✅ Merged PRs
- [#2734](https://github.com/vllm-project/aibrix/pull/2734) [Misc] Add unit tests for SLOQueue rank path and SLO branch precedence
- [#2736](https://github.com/vllm-project/aibrix/pull/2736) [CI] Enable scheduled bounds and RoleSet drain E2E
- [#2732](https://github.com/vllm-project/aibrix/pull/2732) [Feat] Route vLLM /tokenize requests through the gateway
- [#2733](https://github.com/vllm-project/aibrix/pull/2733) [CI][Misc] Add StormService and Volcano gang E2E coverage
- [#2729](https://github.com/vllm-project/aibrix/pull/2729) feat(bot): add explicit Area field to Issue Forms, use as primary source
- [#2730](https://github.com/vllm-project/aibrix/pull/2730) [CI] Add installation smoke pipeline

#### 🐛 New Issues
- [#2737](https://github.com/vllm-project/aibrix/issues/2737) [Testing] Expand integration and E2E coverage for core controller and gateway workflows `area/gateway` `priority/important-longterm` `triage/needs-information` `kind/feature` 💬2

#### 🔒 Closed Issues
- [#2637](https://github.com/vllm-project/aibrix/issues/2637) Add missing integration/e2e test coverage for controllers and routing paths
- [#2714](https://github.com/vllm-project/aibrix/issues/2714) Improve issue and PR label automation

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 5,848 · **Open issues:** 539 · **Last push:** <1h ago

On September 17, 2026, there were no new releases for the Semantic Router, but several significant updates were made with merged pull requests. Key enhancements include the clarification of shared models and context limits in the documentation (#3871), a fix to resolve shared model consumers through global owners (#3872), and adjustments to keep the dashboard sessions operational during temporary verification failures (#3870). Additionally, a new feature was introduced to enhance the CLI tooling with the ability to read decision-unresolved 503 errors (#3251). Among the newly reported issues, the bug regarding router memory Redis cache conflating hybrid and adaptive retrieval policies (#3846) has garnered notable attention.

#### ✅ Merged PRs
- [#3874](https://github.com/vllm-project/semantic-router/pull/3874) [Test] Make admission queue timeout coverage deterministic
- [#3873](https://github.com/vllm-project/semantic-router/pull/3873) [Bug] Make Insights flags and long Playground messages clearer
- [#3872](https://github.com/vllm-project/semantic-router/pull/3872) [Bug] Resolve shared model consumers through global owners
- [#3871](https://github.com/vllm-project/semantic-router/pull/3871) [Docs] Clarify shared models, Replay, and context limits
- [#3870](https://github.com/vllm-project/semantic-router/pull/3870) [Bug] Keep Dashboard sessions during temporary verification failures
- [#3519](https://github.com/vllm-project/semantic-router/pull/3519) [Fix] Recalibrate image-routing thresholds against the corrected encoder (#2165)
- [#3251](https://github.com/vllm-project/semantic-router/pull/3251) [Feature] Teach CLI tooling to read the decision-unresolved 503
- [#3855](https://github.com/vllm-project/semantic-router/pull/3855) [Bug] Keep the PII block refusal from passing as a partial scan
- [#3839](https://github.com/vllm-project/semantic-router/pull/3839) [Test] Cover single-shadow failure isolation end to end
- [#3813](https://github.com/vllm-project/semantic-router/pull/3813) [Bug] Accept xAI and Groq reply fields in the chat codec
- [#3803](https://github.com/vllm-project/semantic-router/pull/3803) [Operator] Align sample probes with ProbeSpec.
- [#3654](https://github.com/vllm-project/semantic-router/pull/3654) [Bug] Keep JSON scalars valid through tool-output compression

#### 🐛 New Issues
- [#3846](https://github.com/vllm-project/semantic-router/issues/3846) [Bug] Router Memory Redis cache conflates distinct hybrid and adaptive retrieval policies `bug` `accepted` `in-progress` `wg/agentic-context` 💬4
- [#3862](https://github.com/vllm-project/semantic-router/issues/3862) [Feature] RISC-V support for the VSR router process and Candle CPU classifiers `enhancement` `needs-acceptance` `wg/router-models-inference-runtime` 💬3
- [#3857](https://github.com/vllm-project/semantic-router/issues/3857) [Research] Fixed-policy controls for the first router-native candidate experiment `accepted` `in-progress` `research` `wg/router-models-inference-runtime` 💬2
- [#3840](https://github.com/vllm-project/semantic-router/issues/3840) [Bug] Vector store search reads only the first window of a long query `bug` `accepted` `wg/router-models-inference-runtime` 💬2
- [#3864](https://github.com/vllm-project/semantic-router/issues/3864) [Bug] LLM Classifier does not enforce a specific json_schema `bug` `accepted` `wg/router-models-inference-runtime` 💬1
- [#3856](https://github.com/vllm-project/semantic-router/issues/3856) [Research] Same-run evaluation harness for router-native model candidates `accepted` `research` `wg/router-models-inference-runtime` 💬1
- [#3849](https://github.com/vllm-project/semantic-router/issues/3849) [Bug] Vector store search reports a whitespace query as an internal error `bug` `accepted` `wg/router-models-inference-runtime` 💬1
- [#3845](https://github.com/vllm-project/semantic-router/issues/3845) [Feature] Parallelize independent model artifact fingerprinting during runtime preparation `enhancement` `needs-acceptance` `wg/router-models-inference-runtime`

#### 🔒 Closed Issues
- [#2586](https://github.com/vllm-project/semantic-router/issues/2586) [CI/Build] Unassign inactive issue participants
- [#3758](https://github.com/vllm-project/semantic-router/issues/3758) [Bug] Kubernetes startup skips global config validation
- [#2928](https://github.com/vllm-project/semantic-router/issues/2928) [Feature] Hallucination detector adopts the shared TokenClassifierBackend span contract
- [#2165](https://github.com/vllm-project/semantic-router/issues/2165) [Bug] Recalibrate image-routing thresholds after encoder correctness fixes
- [#3625](https://github.com/vllm-project/semantic-router/issues/3625) [Bug] Tool-output compression corrupts JSON scalars: valid JSON in, invalid JSON out
- [#3797](https://github.com/vllm-project/semantic-router/issues/3797) [Bug] ProbeSpec sample/implementation mismatch
- [#3804](https://github.com/vllm-project/semantic-router/issues/3804) [Bug] Insights lifecycle badges use no success color for successful requests
- [#3370](https://github.com/vllm-project/semantic-router/issues/3370) [Bug] CLI ignores the persisted CONTAINER_RUNTIME from runtime.env
- [#3351](https://github.com/vllm-project/semantic-router/issues/3351) [CI/Build] Ratchet Evaluation architecture dependencies
- [#3209](https://github.com/vllm-project/semantic-router/issues/3209) [Feature] Teach CLI tooling to read the decision-unresolved 503
- [#3812](https://github.com/vllm-project/semantic-router/issues/3812) [Bug] xAI and Groq replies fail with 502 through the router

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*