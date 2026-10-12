# 📡 AI Ecosystem Digest — 2026-10-12

> Generated 2026-10-12 02:07 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 150,243 | 32 | 6 | 0 | 0 |
| [OpenAI Codex](https://github.com/openai/codex) | 128,685 | 8 | 20 | 11 | 0 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 107,286 | 0 | 1 | 0 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,250 | 5 | 6 | 0 | 0 |
| [OpenCode](https://github.com/anomalyco/opencode) | 212,751 | 26 | 19 | 1 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 28,426 | 21 | 14 | 4 | 4 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 391,704 | 169 | 95 | 120 | 1 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 252,822 | 22 | 2 | 0 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 93,588 | 17 | 11 | 22 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 37,006 | 15 | 29 | 48 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 130,869 | 9 | 13 | 7 | 7 |
| [Ollama](https://github.com/ollama/ollama) | 182,792 | 8 | 9 | 0 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 60,983 | 8 | 21 | 44 | 3 |
| [Unsloth](https://github.com/unslothai/unsloth) | 77,809 | 5 | 91 | 75 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,130 | 9 | 9 | 11 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,093 | 20 | 17 | 6 | 0 |

---

## ✨ Highlights

- **Gemini CLI** released [v0.65.0-nightly.20261012.g9b6e0265d](https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0-nightly.20261012.g9b6e0265d).
- **OpenClaw** had a major release with [v2026.10.5-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.10.5-beta.1).
- **Qwen Code** completed multiple releases including [desktop-v0.25.1](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.25.1).
- Significant new issue in **OpenClaw**: [#168955](https://github.com/openclaw/openclaw/issues/168955) regarding startup regression received high engagement with 10 comments.
- **OpenAI Codex** faces multiple bugs, particularly [#53098](https://github.com/openai/codex/issues/53098) concerning window display issues that has attracted attention with 8 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 150,243 · **Open issues:** 14,690 · **Last push:** 7h ago

On October 12, 2026, there were no new releases or merged pull requests for Claude Code, indicating a routine maintenance day. However, several new issues were reported, with #101188 highlighting a critical bug where the Rewind feature failed to restore previous edits, resulting in significant data loss across a project. Additionally, various cyber-related bugs were raised, including issues with drone flight telemetry parsing (#101410) and mobile application debugging (#101406). Another notable report was #101415, which involves inspecting dynamic instrumentation tooling for local mobile binary analysis, reflecting ongoing concerns in cybersecurity features.

#### 🐛 New Issues
- [#101188](https://github.com/anthropics/claude-code/issues/101188) [BUG] Rewind said it couldn't restore, but still overwrote ~20h of edits across the project and deleted files created since (conversation not rewound) `bug` `has repro` `platform:windows` `area:core` 💬2
- [#101410](https://github.com/anthropics/claude-code/issues/101410) [Bug][cyber] Parsing drone flight telemetry frames and mobile app logs (req_011CfqWVYxKdQs8pvDBhLfTz) 💬1
- [#101409](https://github.com/anthropics/claude-code/issues/101409) [Bug][cyber] Analyzing local drone flight telemetry and binary OSD logs (req_011CfqWPPA4AcHVj4Mu9pTxR) 💬1
- [#101406](https://github.com/anthropics/claude-code/issues/101406) [Bug][cyber] Mobile application debug build and installation on a connected test device (req_011CfqJ6PpsTYyhrmnE1vUjL) 💬1
- [#101405](https://github.com/anthropics/claude-code/issues/101405) [Bug][cyber] False positive on flight controller takeoff altitude debugging (req_011CfqEt8HnQ51obCQnex74d) 💬1
- [#101421](https://github.com/anthropics/claude-code/issues/101421) [FEATURE] Make the Claude Agents view so we can create new sessions in it. `enhancement` `area:agent-view`
- [#101422](https://github.com/anthropics/claude-code/issues/101422) [FEATURE] Configurable location for account-synced skills (~/.claude/skills/synced)
- [#101420](https://github.com/anthropics/claude-code/issues/101420) [BUG] StopFailure command hooks are killed ~10-50ms after the event fires (2.1.246+, still present in 2.1.296) `bug` `has repro` `platform:macos` `area:hooks`
- [#101418](https://github.com/anthropics/claude-code/issues/101418) [BUG] Remote Control: AskUserQuestion answered from the web reaches PostToolUse hooks without the call's `metadata` `bug` `has repro` `platform:linux` `area:hooks`
- [#101419](https://github.com/anthropics/claude-code/issues/101419) [BUG] Artifact delete approval prompt never shown in Projects threads (iOS); thread blocks forever `bug` `has repro` `platform:ios` `area:permissions`
- [#101415](https://github.com/anthropics/claude-code/issues/101415) [Bug][cyber] Inspecting dynamic instrumentation tooling for local mobile binary analysis (req_011CfquQmyCZpkngKuyvumh4) `bug` `duplicate` `platform:linux` `area:model`
- [#101414](https://github.com/anthropics/claude-code/issues/101414) [Bug][cyber] Inspecting local dynamic instrumentation scripts for mobile library analysis (req_011CfquDsayjK5QTzsXp2TPi) `bug` `duplicate` `platform:linux` `area:model`
- [#101417](https://github.com/anthropics/claude-code/issues/101417) Desktop: scheduled task permission mode doesn't persist (reverts to default), so unattended routines stall on approval prompts `bug` `has repro` `platform:macos` `area:permissions`
- [#101413](https://github.com/anthropics/claude-code/issues/101413) [Bug][cyber] Dynamic memory instrumentation and protocol analysis on local test device (req_011CfqorYR9zjCnEqXJWBxDv) `bug` `duplicate` `platform:linux` `area:model`
- [#101411](https://github.com/anthropics/claude-code/issues/101411) [Bug] Opus 5.5 Self-Blocks After Flagging Security Issue, Forcing New Session `bug` `platform:macos` `area:model` `needs-info`
- [#101416](https://github.com/anthropics/claude-code/issues/101416) [Bug][cyber] Recovering or resetting local development Android device via authorized ADB (req_011CfqueFo91rfm6yNrXBvgy)
- [#101408](https://github.com/anthropics/claude-code/issues/101408) [Bug][cyber] Workstation migration script blocked during local package and dotfile inventory (req_011CfqJphk3ruZKgLzDTzHmh) `bug` `platform:linux` `area:model` `api:anthropic`
- [#101407](https://github.com/anthropics/claude-code/issues/101407) [FEATURE] Mods: play $.audio.play clips on the attached desktop app, for remote sessions `enhancement` `area:plugins` `area:desktop`
- [#101412](https://github.com/anthropics/claude-code/issues/101412) [Bug][cyber] Server load inspection via SSH blocked after web management console login failure (req_011Cfr5kgoNkBKxQPwR2s429)
- [#101404](https://github.com/anthropics/claude-code/issues/101404) [BUG] Linux: sandbox denyRead glob (~/**/.env) now freezes the TUI on every Bash command (regression) `bug` `has repro` `platform:linux` `regression`
- [#101403](https://github.com/anthropics/claude-code/issues/101403) [BUG] VS Code extension: mod Pane never draws, but $.ui.open resolves { isPlaced: true } `bug` `platform:vscode` `area:plugins`
- [#101402](https://github.com/anthropics/claude-code/issues/101402) [Bug] Memory leak grows to 28-30GB on Mac M4 with 16GB RAM `bug` `platform:macos` `perf:memory` `needs-repro`
- [#101401](https://github.com/anthropics/claude-code/issues/101401) Bug Report: Missing issue details, only API request ID provided `bug` `platform:windows` `needs-info`
- [#101400](https://github.com/anthropics/claude-code/issues/101400) [BUG] “Change project” shows “No projects yet” even though projects exist `invalid`
- [#101212](https://github.com/anthropics/claude-code/issues/101212) [FEATURE] Add per-request billing classification (subscription vs extra usage) to OTel api_request events `enhancement` `area:cost` `area:api`
- [#101249](https://github.com/anthropics/claude-code/issues/101249) [FEATURE] Show which actions /rewind cannot undo `enhancement` `area:tui` `user-experience`
- [#101279](https://github.com/anthropics/claude-code/issues/101279) [BUG] Windows/Git Bash: if the 10-second login-shell PATH probe times out, the Bash tool loses PATH for the whole session `bug` `has repro` `platform:windows` `area:bash`
- [#101376](https://github.com/anthropics/claude-code/issues/101376) [BUG] Windows Desktop: idle/closed Code sessions keep their MCP servers alive — 121 node processes, ~10 GB RAM (regression of #58915?) `bug` `has repro` `platform:windows` `area:mcp`
- [#101399](https://github.com/anthropics/claude-code/issues/101399) Bash tool `grep` (bundled ugrep) silently misses `^` alternatives: `(a|b|^)x` and `(^|[^0-9])x` match nothing that GNU grep matches `duplicate` `has repro` `platform:linux` `area:bash`
- [#101398](https://github.com/anthropics/claude-code/issues/101398) Projects: project instructions silently truncated at 8,192 bytes for threads run on your computer (Work locally / Remote Control) `bug` `has repro` `platform:windows` `area:cowork`
- [#101397](https://github.com/anthropics/claude-code/issues/101397) [Bug] Claude ignores explicit instructions and second-guesses firmware update requests `bug` `platform:linux` `area:model`
- [#101396](https://github.com/anthropics/claude-code/issues/101396) Auto-mode permission check blocks subagent launch ("Modify Shared Resources") despite explicit, broad user authorization for the exact work `bug` `platform:windows` `area:agents` `area:permissions`

#### 🔒 Closed Issues
- [#82395](https://github.com/anthropics/claude-code/issues/82395) [Feature request] Sort the completed background-job list by last activity, not creation time
- [#88282](https://github.com/anthropics/claude-code/issues/88282) [BUG] KIE.ai MCP connector: prepare_media_generation always returns "Host declined the approval request" on Desktop app
- [#89665](https://github.com/anthropics/claude-code/issues/89665) [BUG] Slack connector shows "Connected" in Settings but is invisible to routines/MCP authorization
- [#88713](https://github.com/anthropics/claude-code/issues/88713) [BUG] GitHub connector authorized but write operations fail with "403 Resource not accessible by integration
- [#89880](https://github.com/anthropics/claude-code/issues/89880) Snowflake MCP connector shows stale 'requires authentication' status when actually working
- [#98978](https://github.com/anthropics/claude-code/issues/98978) [BUG] VS Code extension still auto-declines MCP form elicitation (onElicitation not wired) — 2.1.287

### OpenAI Codex (`openai/codex`)

**Stars:** 128,685 · **Open issues:** 22,224 · **Last push:** 2h ago

On October 12, 2026, there were no new releases, but several important features and fixes were merged into the codebase. Notable improvements include support for Windows clipboard text paste shortcuts in the TUI (#53224), the ability to restart managed background servers from the TUI (#53173), and enhanced navigation options for agents after thread archiving (#53201). Other improvements include simplified terminal drawing APIs and fixes for thread permissions and draft recovery issues. A significant new issue has been reported concerning a dead zone in the mouse wheel functionality on HiDPI displays while using Windows Terminal and SSH (#53098), which has garnered attention from users experiencing disruptions.

#### ✅ Merged PRs
- [#53224](https://github.com/openai/codex/pull/53224) Support Windows clipboard text paste shortcuts in the TUI
- [#53201](https://github.com/openai/codex/pull/53201) Keep agents navigation available after a thread is archived
- [#53173](https://github.com/openai/codex/pull/53173) Allow restarting managed background servers from the TUI
- [#53156](https://github.com/openai/codex/pull/53156) Simplify the custom terminal drawing API
- [#53155](https://github.com/openai/codex/pull/53155) Keep remote app-server events deliverable during shutdown
- [#53153](https://github.com/openai/codex/pull/53153) Show subagent navigation shortcuts in TUI help
- [#53152](https://github.com/openai/codex/pull/53152) Allow selecting and copying TUI turn tips
- [#53150](https://github.com/openai/codex/pull/53150) Restore thread-owned permissions on cold resume
- [#53148](https://github.com/openai/codex/pull/53148) Fix startup draft recovery for pending Vim Replace keys
- [#53109](https://github.com/openai/codex/pull/53109) Handle broken pipes gracefully in plugin list output
- [#53049](https://github.com/openai/codex/pull/53049) Add connection-bound reply handles for app-server requests

#### 🐛 New Issues
- [#53098](https://github.com/openai/codex/issues/53098) [BUG] Fullscreen: mouse wheel dead zone below top ~1/3 of viewport — only on 225% HiDPI display (Windows Terminal → SSH) `bug` `windows-os` `TUI` `CLI` 💬8
- [#53188](https://github.com/openai/codex/issues/53188) [Windows] Browser tools fail to initialize: MXC launcher HRESULT 0x80070003 `bug` `windows-os` `tool-calls` `app` 💬4
- [#53203](https://github.com/openai/codex/issues/53203) Responses and compaction fail in Windows version 26.1007.2314.0, blocking work in long-running conversations `bug` `windows-os` `context` `app` 💬3
- [#53239](https://github.com/openai/codex/issues/53239) Cloud environment settings save, but publication fails `bug` `codex-web` `connectivity` 💬2
- [#53238](https://github.com/openai/codex/issues/53238) Repeated “possible cybersecurity risk” blocks during local NVIDIA PhysX simulation debugging `bug` `CLI` `safety-check` 💬1
- [#53237](https://github.com/openai/codex/issues/53237) Previous chat panel remains visible when switching back to the Ai Todos plugin `bug` `app` `skills` 💬1
- [#53236](https://github.com/openai/codex/issues/53236) [Windows] Daily re-login after update to 26.1007: workspace routing discovery times out at startup `bug` `windows-os` `auth` `app` 💬1
- [#53235](https://github.com/openai/codex/issues/53235) Codex App cannot read existing Astra thread: unsupported placement region 5 `bug` `app` `app-server` 💬1

#### 🔒 Closed Issues
- [#9257](https://github.com/openai/codex/issues/9257) "edit prev" makes session dead: 0% context left and cannot response any message nor /compact command
- [#6608](https://github.com/openai/codex/issues/6608) Difficult time with Copy and Paste within Codex via CLI
- [#52840](https://github.com/openai/codex/issues/52840) TUI converts an unsupported service_tier to default before core can emit its warning
- [#10891](https://github.com/openai/codex/issues/10891) Missing time counter in latest CLI version
- [#13716](https://github.com/openai/codex/issues/13716) Clipboard image paste failure in Codex CLI on Arch Linux despite text content
- [#17619](https://github.com/openai/codex/issues/17619) Conversation interrupted mid plan implementation.
- [#37545](https://github.com/openai/codex/issues/37545) [Linux] Interactive Codex TUI freezes entire desktop; `codex exec` works normally (0.146.1 and 0.147.0)
- [#46395](https://github.com/openai/codex/issues/46395) Slash command `/fast status` is not handled by the CLI and is sent to the model as a plain text message
- [#37839](https://github.com/openai/codex/issues/37839) TUI composer: Backspace deletes the whole Thai syllable instead of one combining mark
- [#37586](https://github.com/openai/codex/issues/37586) TUI renders an empty row when a separator space lands at the wrap boundary
- [#14909](https://github.com/openai/codex/issues/14909) Modifier keys behave incorrectly in VS Code + WSL terminal when chatting with Codex
- [#39636](https://github.com/openai/codex/issues/39636) `/fast` is a toggle, this is terrible.
- [#38964](https://github.com/openai/codex/issues/38964) Ctrl+g with Sublime Text fails
- [#38210](https://github.com/openai/codex/issues/38210) TUI: quick-cancelled optimistic prompt remains selectable but has no persisted UserMessage
- [#37298](https://github.com/openai/codex/issues/37298) TUI: one failed color requery permanently disables OSC 10/11 re-detection (poisoned cache in requery_default_colors)
- [#36003](https://github.com/openai/codex/issues/36003) Incorrect error message trying to paste text into Codex CLI
- [#35309](https://github.com/openai/codex/issues/35309) Codex CLI composer background intermittently missing over SSH due to 100 ms OSC 10/11 probe timeout
- [#33897](https://github.com/openai/codex/issues/33897) /status command returns stale rate limit data on the first execution
- [#44371](https://github.com/openai/codex/issues/44371) Copying text adds leading spaces
- [#40756](https://github.com/openai/codex/issues/40756) "% context left" divides by a hardcoded 12,000-token baseline, so it's wrong in both directions

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 107,286 · **Open issues:** 761 · **Last push:** <1h ago

On October 12, 2026, Gemini CLI released version v0.65.0-nightly.20261012.g9b6e0265d, continuing its evolution with enhancements detailed in the full changelog. There were no merged pull requests or new issues reported in the last 24 hours, indicating a routine maintenance day for the project. The release reflects ongoing development efforts, but no significant changes or community discussions emerged during this period.

#### 🚀 New Releases
- [v0.65.0-nightly.20261012.g9b6e0265d](https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0-nightly.20261012.g9b6e0265d) Release v0.65.0-nightly.20261012.g9b6e0265d

#### 🔒 Closed Issues
- [#29524](https://github.com/google-gemini/gemini-cli/issues/29524) Paid Google AI account showing “not eligible” in Antigravity

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,250 · **Open issues:** 2,185 · **Last push:** 1d ago

On October 12, 2026, there were no new releases or merged pull requests for GitHub Copilot CLI, indicating a day of routine maintenance. However, several notable new issues were raised, including issue #5115, which highlights a problem where the /rename command reports success without actually renaming the session. Additionally, issue #5114 points out that the Copilot CLI does not continue operations when prompted after reaching the session limit, even after waiting for five hours. Other issues address concerns regarding file attachments in remote CLI sessions and intermittent server errors during response continuations.

#### 🐛 New Issues
- [#5115](https://github.com/github/copilot-cli/issues/5115) ACP: /rename reports success but doesn't rename the session `triage` 💬1
- [#5117](https://github.com/github/copilot-cli/issues/5117) No way to attach files or images to a message from the GitHub Mobile app in a remote CLI session `triage`
- [#5116](https://github.com/github/copilot-cli/issues/5116) Intermittent 400 internal server error on response continuation after tool output `triage`
- [#5114](https://github.com/github/copilot-cli/issues/5114) Copilot CLI doesn't continue when prompted to 'continue' after hitting the session limit and waiting for 5 hours `triage`
- [#5113](https://github.com/github/copilot-cli/issues/5113) Home/End in ask_user answer input also scroll the timeline to top/bottom `triage`

#### 🔒 Closed Issues
- [#3755](https://github.com/github/copilot-cli/issues/3755) Reasoning/thinking display garbles streamed text with duplicated overlapping chunks
- [#4287](https://github.com/github/copilot-cli/issues/4287) general-purpose subagent uses gpt-5.4-mini even when configured to inherit model
- [#3573](https://github.com/github/copilot-cli/issues/3573) Bell does not work anymore even with `"bell": true` in the settings
- [#4469](https://github.com/github/copilot-cli/issues/4469) Orphaned permission.requested event replays on every session resume, causing repeated directory-access prompts that can't be dismissed
- [#4889](https://github.com/github/copilot-cli/issues/4889) Resume session with session id fails with "no session matched"
- [#3167](https://github.com/github/copilot-cli/issues/3167) preToolUse silently dropped after mid-loop extensions_reload (snapshot staleness in runAgenticLoop)

### OpenCode (`anomalyco/opencode`)

**Stars:** 212,751 · **Open issues:** 4,001 · **Last push:** <1h ago

On October 12, 2026, there were no new releases for OpenCode, although the merged pull request #54622 focused on enhancing the CLI by prioritizing the path-matched package manager and extending the probe timeout. Among new issues, the most notable concern is #54513, which reports that OpenCode continuously polls /dev/snd/timer after the suspension of a finished session, leading to potential resource management issues. Additionally, users reported a failure to update to version 2.0 in issue #54469 and problems with the web terminal toggling functionality in #54559. Overall, the day was marked by incremental improvements and user-reported challenges as the community continues to refine the platform.

#### ✅ Merged PRs
- [#54622](https://github.com/anomalyco/opencode/pull/54622) fix(cli): prioritize path-matched package manager and extend probe timeout

#### 🐛 New Issues
- [#54513](https://github.com/anomalyco/opencode/issues/54513) opencode continuously polls /dev/snd/timer after suspension of a finished session that notifies via sound 💬8
- [#54657](https://github.com/anomalyco/opencode/issues/54657) BUG abonnement GO `pending close` `triaging` 💬3
- [#54471](https://github.com/anomalyco/opencode/issues/54471) desktop: nested markdown blocks (li, td, blockquote p) render LTR when message dir=auto resolves LTR `reproduced` 💬3
- [#54559](https://github.com/anomalyco/opencode/issues/54559) web (v2): ctrl+backtick does not toggle the terminal, but the command palette does `reproduced` 💬3
- [#54626](https://github.com/anomalyco/opencode/issues/54626) Web directory picker anchored at OS home instead of server directory (V2 follow-up of #43173) 💬3
- [#54469](https://github.com/anomalyco/opencode/issues/54469) OpenCode update to version 2.0 fail `pending close` `triaging` 💬3
- [#54645](https://github.com/anomalyco/opencode/issues/54645) providers: stale wellknown API-key wiring in the shared service sends an empty key after auth login/logout `reproduced` 💬2
- [#54654](https://github.com/anomalyco/opencode/issues/54654) cli: `opencode plugin list` prints "No plugins found" on the first call per cold location `reproduced` 💬2
- [#54595](https://github.com/anomalyco/opencode/issues/54595) the execute tool should inherit webfetch permissions `reproduced` `severity:high` 💬2
- [#54634](https://github.com/anomalyco/opencode/issues/54634) [FEATURE]: Close terminal command in the web UI 💬2
- [#54665](https://github.com/anomalyco/opencode/issues/54665) ACP error `pending close` `triaging` 💬1
- [#54664](https://github.com/anomalyco/opencode/issues/54664) OpenAI gateway 503 on uncompressed bodies over ~1 MiB `reproduced` `severity:high` 💬1
- [#54663](https://github.com/anomalyco/opencode/issues/54663) Directory picker appends forward slash to Windows paths on complete/suggest `reproduced` 💬1
- [#54661](https://github.com/anomalyco/opencode/issues/54661) run --format json: final step_finish is missing `pending close` `triaging` 💬1
- [#54658](https://github.com/anomalyco/opencode/issues/54658) subagent: parent gets `cancelled` when an interrupt with `resume=true` continues a background subagent `reproduced` 💬1
- [#54655](https://github.com/anomalyco/opencode/issues/54655) desktop: "Open in → PowerShell" fails on Windows (v2) — project directory passed as a command `2.0` 💬1
- [#54652](https://github.com/anomalyco/opencode/issues/54652) bug(session-ui): V2 still hides streaming assistant content from screen readers `reproduced` 💬1
- [#54653](https://github.com/anomalyco/opencode/issues/54653) bug(ui): V2 AnimatedNumber exposes animation digits and reversed reading order to screen readers `reproduced` 💬1
- [#54651](https://github.com/anomalyco/opencode/issues/54651) chrome_crashpad_handler SIGBUS (BUS_ADRERR) in desktop app 2.0.26 (Electron 44.4.5) `triaging` 💬1
- [#54648](https://github.com/anomalyco/opencode/issues/54648) Compaction keeps a whole long exchange verbatim when the last user message is far behind the cut `pending close` `triaging` 💬1
- [#54647](https://github.com/anomalyco/opencode/issues/54647) web: starting from a Git repository subdirectory opens sessions at repository root `pending close` `triaging` 💬1
- [#54646](https://github.com/anomalyco/opencode/issues/54646) web: starting from a Git repository subdirectory opens sessions at repository root `pending close` `triaging` 💬1
- [#54644](https://github.com/anomalyco/opencode/issues/54644) An error occurred in Effect.tryPromise `pending close` `triaging` 💬1
- [#54640](https://github.com/anomalyco/opencode/issues/54640) sessions: V1-migrated sessions are orphaned in the global project and hidden after upgrading to V2 `pending close` `triaging` 💬1
- [#54631](https://github.com/anomalyco/opencode/issues/54631) Location invalidation duplicates a directory's fff engine; on v2 releases the old engine is never destroyed `reproduced` 💬1
- [#54632](https://github.com/anomalyco/opencode/issues/54632) SECURITY: plan mode is advisory, not enforced on V2 - writes, out-of-workspace writes, and shell execute unprompted and unrecorded `pending close` `triaging` 💬1

#### 🔒 Closed Issues
- [#32747](https://github.com/anomalyco/opencode/issues/32747) @ file mentions do not include files created after startup
- [#49050](https://github.com/anomalyco/opencode/issues/49050) ai aborts after writing </｜DSML｜tool_calls>
- [#52269](https://github.com/anomalyco/opencode/issues/52269) Intermittent OpenAI Service Unavailable: upstream connection failure across models and sessions
- [#54513](https://github.com/anomalyco/opencode/issues/54513) opencode continuously polls /dev/snd/timer after suspension of a finished session that notifies via sound
- [#33137](https://github.com/anomalyco/opencode/issues/33137) Screen readers cannot access streaming assistant content while a response is generating
- [#45249](https://github.com/anomalyco/opencode/issues/45249) Native context auto-compaction never fires (session_context_epoch always 0), causing runaway token/credit consumption on GitHub Copilot
- [#48676](https://github.com/anomalyco/opencode/issues/48676) 改动AI写的代码后，后续AI会将其恢复
- [#50297](https://github.com/anomalyco/opencode/issues/50297) Console Go (Meta Muse Spark): MCP tool schemas deeper than 10 levels are rejected, no Meta/Muse sanitizer
- [#41408](https://github.com/anomalyco/opencode/issues/41408) NVDA cannot read streaming assistant replies or counter numbers (desktop app)
- [#46396](https://github.com/anomalyco/opencode/issues/46396) [Accessibility] Desktop App: Screen reader cannot access AI thinking and tool call process during response generation
- [#54413](https://github.com/anomalyco/opencode/issues/54413) Copy failures are silently swallowed — TUI shows "Copied to clipboard" even when nothing is copied
- [#54025](https://github.com/anomalyco/opencode/issues/54025) [bug] openai-compatible (custom provider): intermittent 400 "Assistant tool call function.arguments must be a JSON object" — freshest tool-call arguments sent non-object right after tool result (self-heals on retry)
- [#50966](https://github.com/anomalyco/opencode/issues/50966) Multiple fff engines per process watch the same base path, multiplying inotify watches 2-3x
- [#54421](https://github.com/anomalyco/opencode/issues/54421) mcp: CIMD client.json redirect_uris don't match the loopback callback, breaking Turso MCP OAuth
- [#54042](https://github.com/anomalyco/opencode/issues/54042) [FEATURE]: Support for XPIA sampling
- [#54041](https://github.com/anomalyco/opencode/issues/54041) mcp: habilitar dev tools falla - paquete @modelcontextprotocol/server-chrome-devtools no existe (404 npm)
- [#54404](https://github.com/anomalyco/opencode/issues/54404) session: location inactivity interrupt aborts pending question with "Tool execution interrupted"
- [#54661](https://github.com/anomalyco/opencode/issues/54661) run --format json: final step_finish is missing
- [#54646](https://github.com/anomalyco/opencode/issues/54646) web: starting from a Git repository subdirectory opens sessions at repository root

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 28,426 · **Open issues:** 1,802 · **Last push:** <1h ago

On October 12, 2026, Qwen Code released version 0.25.1, which notably restores the selected text-only connection and validated session or workspace route after Android Activity recreation, retaining explicit retry screens after failures. The nightly build, v0.25.1-nightly.20261011.01d3e6d81a, included improvements for connector and broker robustness, along with enhancements in managed-agent features. Among the merged pull requests, key updates were made to the documentation regarding EventTransport routing and LiteTopic verification, while critical fixes were implemented for the CLI and session handling. Additionally, several new issues emerged, with the most attention being drawn to issue #13888, which requests workspace pinning functionality in the sidebar.

#### 🚀 New Releases
- [v0.25.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.1) Release v0.25.1
- [v0.25.1-nightly.20261011.01d3e6d81a](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.1-nightly.20261011.01d3e6d81a) Release v0.25.1-nightly.20261011.01d3e6d81a
- [sdk-typescript-v0.1.19](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.19) SDK TypeScript Release v0.1.19
- [desktop-v0.25.1](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.25.1) Qwen Code Desktop v0.25.1

#### ✅ Merged PRs
- [#13933](https://github.com/QwenLM/qwen-code/pull/13933) docs(managed-agent): Resolve the EventTransport §11 routing and wake-carrier questions
- [#13927](https://github.com/QwenLM/qwen-code/pull/13927) docs(managed-agent): Resolve the EventTransport §5.1 LiteTopic verification ledger
- [#13243](https://github.com/QwenLM/qwen-code/pull/13243) fix(cli): bound managed function-hook module evaluation and keep hold-fenced owners recoverable
- [#13276](https://github.com/QwenLM/qwen-code/pull/13276) fix(serve): name Hosted recovery-refusal branches in cold-load 409s

#### 🐛 New Issues
- [#13888](https://github.com/QwenLM/qwen-code/issues/13888) feat(web-shell): add workspace pinning functionality to sidebar `priority/P3` `type/feature-request` `category/ui` `need-discussion` 💬5
- [#13924](https://github.com/QwenLM/qwen-code/issues/13924) feat(distribution): publish Qwen Code Desktop on Flathub so Linux app stores (e.g. Linux Mint Software Manager) can list it — with a working update channel `priority/P3` `type/feature-request` `category/platform` `scope/linux` 💬4
- [#13930](https://github.com/QwenLM/qwen-code/issues/13930) H3 enablement follow-ups: restart-proof the held-Runtime drain (PR #13889 R1-2) + the review-wave suggestions `priority/P2` `type/bug` `category/core` `scope/session-management` 💬3
- [#13926](https://github.com/QwenLM/qwen-code/issues/13926) Deferred review findings from PR #13601: feat(core): add a convergence reminder for read-only exploration `priority/P2` `status/blocked` `type/bug` `category/core` 💬3
- [#13925](https://github.com/QwenLM/qwen-code/issues/13925) Release notes duplicates PRs released in previous releases `priority/P2` `type/bug` `scope/ci-cd` 💬3
- [#13922](https://github.com/QwenLM/qwen-code/issues/13922) ci(sdk-java): a Flyway migration numbered below main's newest passes both version checks, then upgraded databases refuse to start `priority/P2` `type/bug` `category/development` `scope/ci-cd` 💬3
- [#13920](https://github.com/QwenLM/qwen-code/issues/13920) fix(core): CJK teammate names collapse in sanitizeName (Agent Teams spawn) `priority/P2` `type/bug` `category/core` `need-discussion` 💬3
- [#13911](https://github.com/QwenLM/qwen-code/issues/13911) Web Shell auto-recap ignores the "Show Session Recap" setting `priority/P2` `type/bug` `category/configuration` `scope/settings` 💬3
- [#13910](https://github.com/QwenLM/qwen-code/issues/13910) memory: MAX_INDEX_LINE_CHARS is not enforced on the title, so index lines can exceed the 150-char cap `priority/P3` `type/bug` `category/core` `scope/memory` 💬3
- [#13908](https://github.com/QwenLM/qwen-code/issues/13908) Web Shell: 4-5 split panes exhaust the per-origin HTTP/1.1 connection pool (6) - "Connection lost: Fetch is aborted" in every pane `priority/P2` `type/bug` `category/platform` `need-discussion` 💬3
- [#13905](https://github.com/QwenLM/qwen-code/issues/13905) fix(managed-agent): Close child Workspace follow-ups deferred in #13781, #13841 and #13872 `priority/P2` `category/core` `scope/git` `scope/testing` 💬3
- [#13901](https://github.com/QwenLM/qwen-code/issues/13901) [H4e-b2 follow-up] Align the lead's answers for stopping, unconfirmed and repeated sends, and thread one chain index per call `priority/P3` `category/core` `scope/session-management` `type/enhancement` 💬3
- [#13898](https://github.com/QwenLM/qwen-code/issues/13898) Web Shell: show live status of background subagents (running/done, elapsed, N remaining) in the session window `priority/P2` `type/feature-request` `category/ui` `roadmap/subagents-tools` 💬3
- [#13895](https://github.com/QwenLM/qwen-code/issues/13895) modelFallbacks chain is skipped when the provider's 429 body carries an error.code not in RATE_LIMIT_ERROR_CODES (classified as fail-fast client-error) `priority/P2` `type/bug` `category/core` `scope/model-switching` 💬3
- [#13896](https://github.com/QwenLM/qwen-code/issues/13896) feat(managed-agent): give a Monitor auto-stop its remote exit evidence `priority/P2` `type/feature-request` `category/core` `scope/session-management` 💬3
- [#13884](https://github.com/QwenLM/qwen-code/issues/13884) feat(managed-agent): O4 retention and collection for media and shared output (#13534 P3) `priority/P2` `type/feature-request` `category/core` `scope/session-management` 💬3
- [#13883](https://github.com/QwenLM/qwen-code/issues/13883) feat(managed-agent): O4 retention and collection for MCP tool results (#13534 P2) `priority/P2` `type/feature-request` `category/core` `scope/session-management` 💬3
- [#13907](https://github.com/QwenLM/qwen-code/issues/13907) Main CI failed: SDK Java — HttpRuntimeTransportTest.boundsToolResponsesAtOneMiB `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#13891](https://github.com/QwenLM/qwen-code/issues/13891) Check out "Binance: Buy Bitcoin & Crypto" 💬2
- [#13913](https://github.com/QwenLM/qwen-code/issues/13913) Deferred review findings from PR #13748: fix(acp-bridge): display declared Channel submissions 💬1
- [#13906](https://github.com/QwenLM/qwen-code/issues/13906) Deferred review findings from PR #13816: fix(managed-agent): hand back the Workspace mount when a tool turn goes recovery 💬1

#### 🔒 Closed Issues
- [#13888](https://github.com/QwenLM/qwen-code/issues/13888) feat(web-shell): add workspace pinning functionality to sidebar
- [#13709](https://github.com/QwenLM/qwen-code/issues/13709) [H4b follow-up] Count PostToolUse known-future mounts at child admission
- [#13271](https://github.com/QwenLM/qwen-code/issues/13271) feat(managed-agent): admit the foreground Shell profile for public Workspace Sessions
- [#13597](https://github.com/QwenLM/qwen-code/issues/13597) Subagent tool doesn't report error message to the main agent
- [#13563](https://github.com/QwenLM/qwen-code/issues/13563) fix(managed-agent): tool-publication reads of an unknown publication answer 500 to an authenticated writer
- [#13710](https://github.com/QwenLM/qwen-code/issues/13710) MCP import from Claude configs (.claude.json / claude_desktop_config.json) with a UTF-8 BOM fails to parse
- [#13432](https://github.com/QwenLM/qwen-code/issues/13432) compaction: the server-reported context ceiling is parsed then dropped, so reactive recovery sizes against the inferred window
- [#13595](https://github.com/QwenLM/qwen-code/issues/13595) MCP config files (.mcp.json and --mcp-config) with a UTF-8 BOM fail to load
- [#13802](https://github.com/QwenLM/qwen-code/issues/13802) test(managed-agent): Stage F fault gates FG7 for the enabled channel domains
- [#11418](https://github.com/QwenLM/qwen-code/issues/11418) docs: update outdated LSP guide to match current implementation
- [#13849](https://github.com/QwenLM/qwen-code/issues/13849) Main CI failed: E2E Tests — cli/tool-hook-updated-input.test.ts > … > interactive: a PreToolUse ask confirms and writes the replacement
- [#13623](https://github.com/QwenLM/qwen-code/issues/13623) Main CI failed: SDK Java on 57e347fae44d
- [#13842](https://github.com/QwenLM/qwen-code/issues/13842) Main CI failed: SDK Java — ChildWorktreeGitTest.aLinkWhereGitWritesRefsLogsOrObjectsIsRefused
- [#13891](https://github.com/QwenLM/qwen-code/issues/13891) Check out "Binance: Buy Bitcoin & Crypto"

### Claude Code Skills (`anthropics/skills`)

Top open skill PRs by community engagement:
- [#1742](https://github.com/anthropics/skills/pull/1742) fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers
- [#1298](https://github.com/anthropics/skills/pull/1298) fix(skill-creator): isolate trigger evals and handle Windows and runtime failures
- [#1771](https://github.com/anthropics/skills/pull/1771) feat(skills): add proofcore-contract-auditor for smart contract notarization
- [#1734](https://github.com/anthropics/skills/pull/1734) Detect orphaned docx comments
- [#1703](https://github.com/anthropics/skills/pull/1703) Add md2video-audio skill

---

## 🦞 OpenClaw Ecosystem

### OpenClaw (`openclaw/openclaw`)

**Stars:** 391,704 · **Open issues:** 9,532 · **Last push:** <1h ago

On October 12, 2026, OpenClaw released version v2026.10.5-beta.1, which enhances update safety by ensuring that installations can recover from stale leases and interrupted activations, thus avoiding issues that have previously stranded installations. Key merged features in this release include the implementation of server-side compact ChatGPT sign-in sessions (#168401) and a refactor to simplify session bookkeeping (#169458). Additionally, several crucial fixes were addressed, such as resolving issues with SQLite worker blocking (#169448) and addressing a macOS publishing journal problem that hindered updates (#169050). A significant new issue reported today involves a startup regression in version 2026.10.1, where the system's readiness increased dramatically from 410 seconds to 1030 seconds, prompting urgent investigation.

#### 🚀 New Releases
- [v2026.10.5-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.10.5-beta.1) openclaw 2026.10.5-beta.1

#### ✅ Merged PRs
- [#168401](https://github.com/openclaw/openclaw/pull/168401) feat(agents): compact ChatGPT sign-in sessions server-side (remote compaction V2)
- [#169458](https://github.com/openclaw/openclaw/pull/169458) refactor: simplify session bookkeeping and transcript workers
- [#169511](https://github.com/openclaw/openclaw/pull/169511) fix: disclose hidden model fallbacks before clearing them
- [#169247](https://github.com/openclaw/openclaw/pull/169247) build(ui): upgrade Solid to 2.0.0-rc.14
- [#169482](https://github.com/openclaw/openclaw/pull/169482) fix(gateway): Windows Bun plugins load duplicate plugin SDK instances
- [#169265](https://github.com/openclaw/openclaw/pull/169265) fix(codex): Ultrafast drops to Fast after the first turn with ChatGPT sign-in
- [#169466](https://github.com/openclaw/openclaw/pull/169466) chore(ui): support native popover tests
- [#169288](https://github.com/openclaw/openclaw/pull/169288) perf(control-ui): reduce forced layout during cold reloads
- [#169497](https://github.com/openclaw/openclaw/pull/169497) fix(release): npm postpublish verification fails for releases published from repaired tooling
- [#169321](https://github.com/openclaw/openclaw/pull/169321) fix: recover catalog config after failed native ESM refresh
- [#169397](https://github.com/openclaw/openclaw/pull/169397) fix: honor Windows permissions for SQLite recovery snapshots
- [#169311](https://github.com/openclaw/openclaw/pull/169311) refactor(sessions): move gateway discovery reads into workers
- [#169407](https://github.com/openclaw/openclaw/pull/169407) perf(agents): skip title readers for unwatched sessions
- [#169122](https://github.com/openclaw/openclaw/pull/169122) refactor(sdk): await session and preference preparation
- [#169510](https://github.com/openclaw/openclaw/pull/169510) refactor(ci): remove Security Review comment forwarding support
- [#169402](https://github.com/openclaw/openclaw/pull/169402) fix(ui): new session shows "runner isn't ready" while the page loads
- [#169326](https://github.com/openclaw/openclaw/pull/169326) fix(control-ui): restore rail snapshots for large rosters and Pages
- [#168199](https://github.com/openclaw/openclaw/pull/168199) fix(agents): drain active runs before durable agent deletion
- [#153032](https://github.com/openclaw/openclaw/pull/153032) fix(anthropic): guide Claude CLI to registered OpenClaw tools
- [#169489](https://github.com/openclaw/openclaw/pull/169489) fix: preserve watched child results across Gateway restarts
- [#168745](https://github.com/openclaw/openclaw/pull/168745) fix(context): qualify saved capacity by runtime and account
- [#169457](https://github.com/openclaw/openclaw/pull/169457) fix(gateway): Control UI turns stop after unrelated pairing activity
- [#168810](https://github.com/openclaw/openclaw/pull/168810) fix(cron): retain winning account context capacity
- [#168730](https://github.com/openclaw/openclaw/pull/168730) fix(context): preserve capacity source in embedded run results
- [#169500](https://github.com/openclaw/openclaw/pull/169500) fix(release): full release validation helper fails when main advances before admission dispatch
- [#159396](https://github.com/openclaw/openclaw/pull/159396) fix(gateway): channel tools fail with stale caller authority after a config write restarts the account
- [#169471](https://github.com/openclaw/openclaw/pull/169471) fix(test): bound Windows declaration fixture work
- [#169481](https://github.com/openclaw/openclaw/pull/169481) fix(windows): updates leave the Gateway stopped when the task logon account is machine-qualified
- [#169496](https://github.com/openclaw/openclaw/pull/169496) fix(release): release:candidate --workflow-sha error doesn't say it must be trusted-main tooling, not the candidate
- [#169495](https://github.com/openclaw/openclaw/pull/169495) docs(release): changelog is regenerated after every validation-recovery backport
- [#169490](https://github.com/openclaw/openclaw/pull/169490) fix(ci): handle security approval comments directly
- [#169453](https://github.com/openclaw/openclaw/pull/169453) fix: keep stopped yielded tasks from restarting after a child finishes
- [#169480](https://github.com/openclaw/openclaw/pull/169480) fix: restore process notification E2E coverage
- [#169460](https://github.com/openclaw/openclaw/pull/169460) fix(macos): keep named profiles and scratch launches out of shell profiles
- [#169315](https://github.com/openclaw/openclaw/pull/169315) perf(state): promote hot session JSON predicates to columns
- [#169368](https://github.com/openclaw/openclaw/pull/169368) refactor: remove unused reactive and incognito adapters
- [#169472](https://github.com/openclaw/openclaw/pull/169472) fix(onboarding): Connect your AI page is slow to list options on first run
- [#169345](https://github.com/openclaw/openclaw/pull/169345) chore: refresh dependencies with a seven-day cutoff
- [#169449](https://github.com/openclaw/openclaw/pull/169449) refactor(gateway): consolidate read and presentation paths
- [#169478](https://github.com/openclaw/openclaw/pull/169478) fix(models): model picker retries callbacks during catalog replacement
- [#169476](https://github.com/openclaw/openclaw/pull/169476) fix(qa): Telegram picker fixture rejects native model discovery
- [#169475](https://github.com/openclaw/openclaw/pull/169475) fix(qa): WebChat media proof counts message revisions as duplicate turns
- [#169424](https://github.com/openclaw/openclaw/pull/169424) perf(state): reuse retained database admission identity
- [#169429](https://github.com/openclaw/openclaw/pull/169429) fix(test): drain Windows startup refusal diagnostics
- [#169437](https://github.com/openclaw/openclaw/pull/169437) fix(ci): stop Security Review starting a run for every PR comment
- [#169327](https://github.com/openclaw/openclaw/pull/169327) refactor(sessions): prepare incognito consumers for actor memory storage
- [#169467](https://github.com/openclaw/openclaw/pull/169467) fix(sessions): keep transcript backlog traversal moving when the writer revision is unknown
- [#169367](https://github.com/openclaw/openclaw/pull/169367) refactor(ui): consolidate presentation and preference recovery
- [#169454](https://github.com/openclaw/openclaw/pull/169454) fix(update): preserve failures when cleanup reporting is unavailable
- [#169468](https://github.com/openclaw/openclaw/pull/169468) fix(ui): restore chat disclosure and media lifecycles
- [#168671](https://github.com/openclaw/openclaw/pull/168671) fix(models): allow provider login while the local Gateway is running
- [#169451](https://github.com/openclaw/openclaw/pull/169451) fix(qa): vision offload proof expects retired runtime context role
- [#169450](https://github.com/openclaw/openclaw/pull/169450) fix(qa): memory provenance proof fails after offline admission enforcement
- [#169381](https://github.com/openclaw/openclaw/pull/169381) fix(ci): skip irrelevant branch completions for docs automation
- [#169434](https://github.com/openclaw/openclaw/pull/169434) fix(gateway): return one chat history entry per user turn
- [#169413](https://github.com/openclaw/openclaw/pull/169413) fix(tui): tui asks for a Gateway token when no Gateway is running
- [#169412](https://github.com/openclaw/openclaw/pull/169412) fix: switching back to an OpenAI model fails when the Codex plugin is not enabled
- [#169430](https://github.com/openclaw/openclaw/pull/169430) refactor(plugins): consolidate state and transport paths
- [#169436](https://github.com/openclaw/openclaw/pull/169436) fix(doctor): recovery copies miss Canvas and Memory Core files before migrations move them
- [#169364](https://github.com/openclaw/openclaw/pull/169364) refactor(cron): centralize durable run queue and launch ownership
- [#169433](https://github.com/openclaw/openclaw/pull/169433) fix(test): observe native Windows registration transactions
- [#169441](https://github.com/openclaw/openclaw/pull/169441) fix(ui): preserve app input when reopening dashboard panel
- [#169439](https://github.com/openclaw/openclaw/pull/169439) fix(ui): restore MCP App test typechecks
- [#169361](https://github.com/openclaw/openclaw/pull/169361) fix(memory): reject unresolved embedding headers before requests
- [#169340](https://github.com/openclaw/openclaw/pull/169340) refactor(sessions): move target preparation callers into workers
- [#169427](https://github.com/openclaw/openclaw/pull/169427) fix: prepare declarations through Windows short paths
- [#169403](https://github.com/openclaw/openclaw/pull/169403) fix(macos): authenticate app-hosted first run and speed up setup
- [#169325](https://github.com/openclaw/openclaw/pull/169325) perf(nodes): reuse installed bundle status during retention
- [#169144](https://github.com/openclaw/openclaw/pull/169144) fix(agents): preserve subagent work across gateway restarts
- [#169026](https://github.com/openclaw/openclaw/pull/169026) fix: retain delivered slash commands in conversation history
- [#169343](https://github.com/openclaw/openclaw/pull/169343) fix(codex): prepare mirror write authority before reserving the transcript writer
- [#169379](https://github.com/openclaw/openclaw/pull/169379) refactor: simplify private state and process transports
- [#169411](https://github.com/openclaw/openclaw/pull/169411) fix(test): close update fixture workers before cleanup
- [#169395](https://github.com/openclaw/openclaw/pull/169395) test(infra): respect Windows SQLite file identity semantics
- [#169396](https://github.com/openclaw/openclaw/pull/169396) test: fix managed handoff identity diagnostics on Windows
- [#169404](https://github.com/openclaw/openclaw/pull/169404) fix(update): coordinate Windows handoff publication
- [#169417](https://github.com/openclaw/openclaw/pull/169417) improve(sessions): reduce redundant history hydration reads
- [#169415](https://github.com/openclaw/openclaw/pull/169415) fix(ui): refresh board text when the locale changes
- [#168640](https://github.com/openclaw/openclaw/pull/168640) perf(control-ui): avoid repeated missing avatar requests
- [#169337](https://github.com/openclaw/openclaw/pull/169337) fix(gateway): tolerate deferred Bun discovery snapshot cleanup
- [#169387](https://github.com/openclaw/openclaw/pull/169387) test(ui): remove Lit fixtures from Solid component tests
- [#169111](https://github.com/openclaw/openclaw/pull/169111) refactor(auth): await stored credential preparation
- [#169263](https://github.com/openclaw/openclaw/pull/169263) perf(sessions): reuse config-owned roster and projection facts
- [#169316](https://github.com/openclaw/openclaw/pull/169316) fix(ui): show reported model discovery errors in settings
- [#169398](https://github.com/openclaw/openclaw/pull/169398) chore(ui): refresh control ui locales
- [#169310](https://github.com/openclaw/openclaw/pull/169310) perf(state): reuse filesystem checks within database admissions
- [#169302](https://github.com/openclaw/openclaw/pull/169302) fix(agents): retain completed exec process owner
- [#169286](https://github.com/openclaw/openclaw/pull/169286) fix: Windows Bun service install tolerates deferred snapshot cleanup
- [#169271](https://github.com/openclaw/openclaw/pull/169271) chore(ui): refresh control ui locales
- [#169378](https://github.com/openclaw/openclaw/pull/169378) perf(state): avoid duplicate synchronous owner checks
- [#169371](https://github.com/openclaw/openclaw/pull/169371) perf(nodes): retain workspaces on availability edges
- [#169336](https://github.com/openclaw/openclaw/pull/169336) refactor(apps): simplify native lifecycle and read paths
- [#169257](https://github.com/openclaw/openclaw/pull/169257) fix(release): release:candidate refuses to resume after a release-tooling repair on main
- [#156636](https://github.com/openclaw/openclaw/pull/156636) fix(copilot): honor reported context capacity when native limits are missing
- [#169307](https://github.com/openclaw/openclaw/pull/169307) perf(reply): attribute startup and avoid redundant workspace scans
- [#169333](https://github.com/openclaw/openclaw/pull/169333) refactor(ui): migrate Markdown presentation to Solid
- [#168805](https://github.com/openclaw/openclaw/pull/168805) refactor(ui): move meetings, memory import, profile, and debug to Solid
- [#168871](https://github.com/openclaw/openclaw/pull/168871) refactor(ui): port board and system pages to Solid 2
- [#169347](https://github.com/openclaw/openclaw/pull/169347) fix(ui): keep experimental chat bubbles readable and opt-in
- [#169356](https://github.com/openclaw/openclaw/pull/169356) chore(macos): update Peekaboo to 4.9.1
- [#169344](https://github.com/openclaw/openclaw/pull/169344) fix(ci): run Bun UI unit shards when the test runtime policy changes
- [#169354](https://github.com/openclaw/openclaw/pull/169354) fix(cli): reduce startup delay for model inference probes
- [#168834](https://github.com/openclaw/openclaw/pull/168834) refactor(ai): type the streamed tool-call argument buffer once
- [#169291](https://github.com/openclaw/openclaw/pull/169291) refactor(scripts): remove dormant diagnostic entrypoints
- [#169285](https://github.com/openclaw/openclaw/pull/169285) chore(ui): refresh control ui locales
- [#164836](https://github.com/openclaw/openclaw/pull/164836) fix(tools): keep deeply nested tool schemas callable
- [#169338](https://github.com/openclaw/openclaw/pull/169338) fix(process): keep Windows ARM64 commands working with replacement environments
- [#169372](https://github.com/openclaw/openclaw/pull/169372) test(config, plugins, ui): remove low-value tests (batch d055)
- [#169369](https://github.com/openclaw/openclaw/pull/169369) fix: keep repeated automation results in model context
- [#169085](https://github.com/openclaw/openclaw/pull/169085) fix: compact before compatible tool output is starved
- [#169348](https://github.com/openclaw/openclaw/pull/169348) fix(ui): Web Awesome unit tests fail after file-preview tests share a worker
- [#169331](https://github.com/openclaw/openclaw/pull/169331) fix: reserve reasoning tokens for utility model answers
- [#169246](https://github.com/openclaw/openclaw/pull/169246) refactor(ui): port time labels and small controls to Solid
- [#169069](https://github.com/openclaw/openclaw/pull/169069) refactor: assemble worker SSH fallback ports in TypeScript
- [#169359](https://github.com/openclaw/openclaw/pull/169359) perf(worktrees): reuse templates after sibling sparse checkout
- [#169253](https://github.com/openclaw/openclaw/pull/169253) perf(config): retain model catalogs across preference writes
- [#169341](https://github.com/openclaw/openclaw/pull/169341) fix(ui): keep unknown session context capacity unknown
- [#169350](https://github.com/openclaw/openclaw/pull/169350) fix(codex): authenticate environment-key model discovery
- [#169349](https://github.com/openclaw/openclaw/pull/169349) fix(ui): keep Ask OpenClaw answer focus during background updates
- [#169355](https://github.com/openclaw/openclaw/pull/169355) chore(ci): run Barnacle auto-response in the shared ClawSweeper listener

#### 🐛 New Issues
- [#168955](https://github.com/openclaw/openclaw/issues/168955) [Bug]: Startup regression in 2026.10.1: ready ~1030s vs ~410s on 2026.9.9 (Windows); sidecars.control-ui-assets blocks 477s `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬10
- [#168895](https://github.com/openclaw/openclaw/issues/168895) Update failure: retired-state-format (2026.9.9) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬5
- [#168960](https://github.com/openclaw/openclaw/issues/168960) Update failure: package-swap (2026.9.9) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬5
- [#169448](https://github.com/openclaw/openclaw/issues/169448) [Bug]: SQLite worker broker: a long job on one database blocks other databases sharing its worker `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬3
- [#169050](https://github.com/openclaw/openclaw/issues/169050) [Bug]: macOS publishing journal blocks update after recorded device IDs diverge from live identities `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬3
- [#169059](https://github.com/openclaw/openclaw/issues/169059) [Bug]: Linux pnpm 12 Gateway unit records versioned .pnpm entrypoint; every update leaves the Gateway stopped `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#169098](https://github.com/openclaw/openclaw/issues/169098) Model switch back to IONOS Qwen causes 400 UPSTREAM_REJECTED "System message must be at the beginning" (regression since 2026.9.10, survives /new and reboot) `P1` `impact:auth-provider` 💬3
- [#169077](https://github.com/openclaw/openclaw/issues/169077) [Bug]: sessions tool stop on a yielded parent with running subagents times out (sessions.abort, 10 s) and the children keep running (2026.9.9) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬3
- [#168856](https://github.com/openclaw/openclaw/issues/168856) [Bug]: 'aborted' package-activation record is unsettleable — its own rollback refreshes ctime, so repair refuses (disarmed) and retire refuses (publication object changed), blocking every update (2026.9.8, macOS) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` `P0` 💬3
- [#169002](https://github.com/openclaw/openclaw/issues/169002) [Bug]: Windows Control UI tests hang in Chromium --version probe `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#168872](https://github.com/openclaw/openclaw/issues/168872) Updating to 2026.10.1 blocked before activation: webhookListeners config migration can only be written by the candidate (same class as #165299) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#168945](https://github.com/openclaw/openclaw/issues/168945) [Bug]: Windows changelog checker rejects docs mirrors and skips frozen records `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#168838](https://github.com/openclaw/openclaw/issues/168838) [Bug]: Doctor marks canonical one-shot schedules mutated and enters SQLite backup repair `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#169428](https://github.com/openclaw/openclaw/issues/169428) Usage footer template: expose the auth profile (model.auth_label) that /status already shows `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#169463](https://github.com/openclaw/openclaw/issues/169463) [Bug]: Update recovery blocked: activation database hard-linked into retained updater runtime `bug` `no-stale` `regression` `clawsweeper:fix-shape-clear` 💬2
- [#169391](https://github.com/openclaw/openclaw/issues/169391) [Bug]: Managed Linux host desktop never starts when another X server holds the first display only through its abstract socket `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬2
- [#169366](https://github.com/openclaw/openclaw/issues/169366) Update failure: package-swap (2026.9.8) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#169352](https://github.com/openclaw/openclaw/issues/169352) [Bug]: npm package-publication recovery stuck after an interrupted update — `retire`/`repair` refuse ("previous changed", then "journal does not match its installation"), blocking all future `openclaw update` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬2
- [#169042](https://github.com/openclaw/openclaw/issues/169042) tools.loopDetection never blocks memory_search loops: outcome hash includes debug timings and time-decayed scores `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#169261](https://github.com/openclaw/openclaw/issues/169261) [Bug]: Beta update candidate config read fails after successful canary config validation `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#169260](https://github.com/openclaw/openclaw/issues/169260) [Bug]: Beta update validation holds shared SQLite writer for 14s while cron and cleanup fail `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬2
- [#169259](https://github.com/openclaw/openclaw/issues/169259) [Bug]: Beta update original-state capture fails with an unsealed database generation `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬2
- [#169229](https://github.com/openclaw/openclaw/issues/169229) [Bug]: Successful Codex final replaced by generic Telegram failure without diagnostic cause `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#169245](https://github.com/openclaw/openclaw/issues/169245) [Bug]: macOS 2026.10.1 fresh DMG onboarding leaves Gateway token unconfigured and reports healthy Gateway as failed `bug` `bug:behavior` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬2
- [#169209](https://github.com/openclaw/openclaw/issues/169209) [Bug]: Orphan workspace-result cleanup reports completion after a workspace-resolution failure `bug` `no-stale` `bug:behavior` `P2` 💬2
- [#169181](https://github.com/openclaw/openclaw/issues/169181) [Bug]: Discord final reply fails with "Session actor changed while hydrating" `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#169184](https://github.com/openclaw/openclaw/issues/169184) [Bug]: Chat-header Delete for adopted paired-node Codex sessions fails with model-selection lock (2026.10.1) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#169076](https://github.com/openclaw/openclaw/issues/169076) [Bug]: Discord message to a session waiting in sessions_yield fails admission 8 times and is dead-lettered without notice (2026.9.9) `P1` `clawsweeper:needs-live-repro` `impact:session-state` `impact:message-loss` 💬2
- [#169152](https://github.com/openclaw/openclaw/issues/169152) [Bug]: 2026.10.1 Windows multi-agent Gateway: delayed Telegram replies, high CPU and SQLite maintenance contention `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬2
- [#169142](https://github.com/openclaw/openclaw/issues/169142) plugin-captures: per-boot session trees accumulate under <state>/tmp with no steady-state GC (Windows, v2026.10.1) `P2` `impact:other` 💬2
- [#169001](https://github.com/openclaw/openclaw/issues/169001) [Bug]: Feishu streaming feels stepped after the card-update rewrite (flush-controller -> FeishuStreamingSession) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬2
- [#169120](https://github.com/openclaw/openclaw/issues/169120) [Bug]: litellm image provider always sends `n` on edits; LiteLLM rejects it for Gemini image models (UnsupportedParamsError) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#168959](https://github.com/openclaw/openclaw/issues/168959) [Bug]: doctor --fix deletes a sidecar-backed OAuth profile when the legacy auth store is unreadable `bug` `no-stale` `bug:behavior` `P2` 💬2
- [#168835](https://github.com/openclaw/openclaw/issues/168835) [Bug]: update repair retains ACPX "unfinished" warning after canonical migration completion `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#168969](https://github.com/openclaw/openclaw/issues/168969) [Bug]: Subagent announce delivery classifies the same writer-claim-rebound error as both retryable and permanent `bug` `no-stale` `bug:behavior` `P2` 💬2
- [#168870](https://github.com/openclaw/openclaw/issues/168870) Update failure: requested (2026.9.9) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#168920](https://github.com/openclaw/openclaw/issues/168920) Update failure: runtime-verification-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#168935](https://github.com/openclaw/openclaw/issues/168935) [Bug]: SQLite worker ratchet reports growth on an unchanged Windows checkout `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#168896](https://github.com/openclaw/openclaw/issues/168896) [Docs Bug]: system event session-key reference promises a fallback for rejected targets `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#168843](https://github.com/openclaw/openclaw/issues/168843) Three Gateway e2e tests fail on main: fixtures still match the old runtime-context envelope `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#169264](https://github.com/openclaw/openclaw/issues/169264) [Bug]: Codex Ultrafast drops to Fast after the first turn with ChatGPT sign-in `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#169134](https://github.com/openclaw/openclaw/issues/169134) [Bug]: Control UI turns revoked by unrelated pairing publications `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#169501](https://github.com/openclaw/openclaw/issues/169501) [Bug] Settled-turn finalization retry does not engage when stopReason=toolUse and all tools are settled — payloadCount counts toolUse message as payload `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬1
- [#169492](https://github.com/openclaw/openclaw/issues/169492) tool_call results render both content and details to the model — duplicate JSON doubles tool-result tokens and eats truncation budget `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#169491](https://github.com/openclaw/openclaw/issues/169491) [Bug]: Control UI rejects /workspace/... file links generated by sandboxed agents (path translation gap) `bug` `no-stale` `bug:behavior` `P2` 💬1
- [#169487](https://github.com/openclaw/openclaw/issues/169487) Windows Gateway restart fails after Codex plugin cleanup error; no automatic relaunch `P1` `impact:crash-loop` 💬1
- [#169477](https://github.com/openclaw/openclaw/issues/169477) Update failure: package-doctor (2026.9.9) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#169464](https://github.com/openclaw/openclaw/issues/169464) [Bug]: Opening /chat/main on a Gateway without a main agent polls board.get with agent "main" every 30s `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#169473](https://github.com/openclaw/openclaw/issues/169473) Doctor rewrites model choices the provider still serves `P2` `clawsweeper:source-repro` `impact:data-loss` `impact:auth-provider` 💬1
- [#169462](https://github.com/openclaw/openclaw/issues/169462) Updater: blocked receipt is known before validation but only fails after ~30 min at package-swap; `update repair` exits 0 when it did nothing `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#169459](https://github.com/openclaw/openclaw/issues/169459) Local TUI model catalog omits availability and service tiers `P2` `impact:auth-provider` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#169455](https://github.com/openclaw/openclaw/issues/169455) Withdrawn: submitted from an unauthorized account 💬1
- [#169446](https://github.com/openclaw/openclaw/issues/169446) [Bug]: Git update cleanup masks post-stop failure; Gateway remains offline and run stays activating `bug` `clawsweeper:source-repro` `impact:crash-loop` `P0` 💬1
- [#169445](https://github.com/openclaw/openclaw/issues/169445) Discord voice ingress throws "cannot admit authenticated owner authority" ~40 min after a clean gateway restart (stale plugin-registry generation, no config/plugin-reload event logged) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬1
- [#169443](https://github.com/openclaw/openclaw/issues/169443) [Bug]: Telegram threaded mode: first DM message lands in root chat when the client creates the topic separately `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#169423](https://github.com/openclaw/openclaw/issues/169423) codex plugin migration stays 'unfinished' after 10.1: completed native Codex children with missing requester session cannot be retired `P2` `clawsweeper:needs-info` `impact:session-state` `issue-rating: 🦐 gold shrimp` 💬1
- [#169422](https://github.com/openclaw/openclaw/issues/169422) 2026.10.1: updating with the Gateway running records a false post-install-verify failure ("cannot open your existing data") and leaves "restart remains unsafe / state-migrated-no-rollback" although the new Gateway serves `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#169421](https://github.com/openclaw/openclaw/issues/169421) 2026.10.1: cron runs --id <job> returns no history for a disabled job although its run receipts are in the state DB `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#169420](https://github.com/openclaw/openclaw/issues/169420) 2026.9.9 update: candidate-state-snapshot fails with "SQLite journal state changed while copying" on the shared state DB while the Gateway is stopped (Linux, npm) `clawsweeper:not-repro-on-main` `issue-rating: 🦪 silver shellfish` 💬1
- [#169416](https://github.com/openclaw/openclaw/issues/169416) iOS/iPad: allow sending follow-ups while a run is active (queue/steer like Control UI) `P2` `impact:ux-friction` 💬1
- [#169408](https://github.com/openclaw/openclaw/issues/169408) Update failure: not-git-install (2026.9.3) `P0` `impact:ux-release-blocker` 💬1
- [#169401](https://github.com/openclaw/openclaw/issues/169401) [Feature]: Let owned automations keep their explicit failure alert without owner-conversation repair `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#169406](https://github.com/openclaw/openclaw/issues/169406) Gateway startup: ~65-72 s per boot in a no-op legacy webhookListeners migration that never records completion (Windows, 2026.10.1) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#169383](https://github.com/openclaw/openclaw/issues/169383) [Bug]: Updates settings: the app's "Check for Updates…" looks like plain text while "Update now" (Gateway update + restart) is the only accent button `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#169389](https://github.com/openclaw/openclaw/issues/169389) A new agent's first cron runs can fail "Session metadata unavailable (schema-missing)" when they start together `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#169390](https://github.com/openclaw/openclaw/issues/169390) The repair hint for a corrupt agent database says `openclaw doctor --fix`, which refuses that database; `doctor --session-sqlite recover` is the command that repairs it `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#169386](https://github.com/openclaw/openclaw/issues/169386) Update failure: candidate-doctor (2026.9.9) `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#169382](https://github.com/openclaw/openclaw/issues/169382) [Bug]: Managed update lease lives in shared /tmp/openclaw; another local user owning it moves the lease path and blocks package-swap and update repair `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#169384](https://github.com/openclaw/openclaw/issues/169384) Update failure: managed-service-update-handoff (2026.9.9) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `P0` `issue-rating: 🦪 silver shellfish` 💬1
- [#169380](https://github.com/openclaw/openclaw/issues/169380) [Bug]: Codex OAuth profile rotation stops tool-using turns instead of continuing safely `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#169377](https://github.com/openclaw/openclaw/issues/169377) [Bug]: github_publish fails with "publication requester is no longer authorized" when the Control UI profile attaches after connect `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#169376](https://github.com/openclaw/openclaw/issues/169376) Talk Gateway relay needs loss-detectable audio completion for buffered playback `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#169374](https://github.com/openclaw/openclaw/issues/169374) [Feature]: Restore an operator-controlled opt-in for intentional silence in direct chats `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#169373](https://github.com/openclaw/openclaw/issues/169373) [Bug]: npm-global update retains the whole global node_modules (all unrelated packages) in the updater runtime tree `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#169362](https://github.com/openclaw/openclaw/issues/169362) Field report: unattended updates need doctor-migration recovery and startup-not-ready classification `P2` `impact:crash-loop` 💬1
- [#169357](https://github.com/openclaw/openclaw/issues/169357) [Bug]: History replay re-encodes stored photos on every model request `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#169353](https://github.com/openclaw/openclaw/issues/169353) [Bug]: cua-computer retains expired trusted sessions after 5 minutes idle (DriverError.Tool) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#169342](https://github.com/openclaw/openclaw/issues/169342) [Bug]: Codex context preparation takes 43–67 seconds and fails with worker task timed out in 2026.9.9 `bug` `regression` `P1` `impact:ux-friction` 💬1
- [#169335](https://github.com/openclaw/openclaw/issues/169335) [Bug]: Documented completed-receipt recovery cannot run on released builds (helper identity check lacks the completed-receipt exception) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#169187](https://github.com/openclaw/openclaw/issues/169187) [Bug]: Older LM Studio servers' context overflow error is not recognized, so compaction recovery never runs `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#169332](https://github.com/openclaw/openclaw/issues/169332) Tool Search `tool_call` drops network provenance: MCP results reached through Tool Search never taint the turn `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#169317](https://github.com/openclaw/openclaw/issues/169317) Update failure: package-swap (2026.9.8) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#169308](https://github.com/openclaw/openclaw/issues/169308) [Feature]: Subagent spawn envelope: let a child own its part (peer framing) or make the role lines configurable `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#169121](https://github.com/openclaw/openclaw/issues/169121) [Bug]: MCP structuredContent projection duplicates payload when server's text mirror is compact JSON `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#169298](https://github.com/openclaw/openclaw/issues/169298) [Bug]: memory_search decays extraPaths files by mtime (fixed 30-day half-life); docs say only dated notes decay `P2` `impact:session-state` 💬1
- [#169297](https://github.com/openclaw/openclaw/issues/169297) Channel-owned native payload projection for model-visible conversation results `P2` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬1
- [#169287](https://github.com/openclaw/openclaw/issues/169287) Update failure: unexpected-error (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#169276](https://github.com/openclaw/openclaw/issues/169276) Doctor plugin-doctor-state refuses on empty retired Active Memory session-toggles.json; suggested 9.5 path unusable after 9.6+ migration `bug` `bug:behavior` `P2` `impact:ux-friction` 💬1
- [#169274](https://github.com/openclaw/openclaw/issues/169274) [Bug] Legacy 2026.5.7 → 2026.10.1 Docker upgrade blocked: 9.5 ownership, 9.7 SQLite identity, 10.1 retired plugin index — supported bridge? `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#169258](https://github.com/openclaw/openclaw/issues/169258) Cron: resetting the creating chat silently stops implicitly routed automation results `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#169256](https://github.com/openclaw/openclaw/issues/169256) [Bug]: Pinned scheduled exec silently rewrites host=node calls to the Gateway `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#169254](https://github.com/openclaw/openclaw/issues/169254) Design record: promote JSON filter/delete fields to columns (PostgreSQL portability) `P3` `issue-rating: 🌊 off-meta tidepool` `impact:other` 💬1
- [#169244](https://github.com/openclaw/openclaw/issues/169244) [Bug]: pnpm 12 native update leaves the `openclaw` bin shim pointing at the deleted `.openclaw-update-native-*` staging dir `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#169234](https://github.com/openclaw/openclaw/issues/169234) [Bug]: Talk spoken confirmation can never be satisfied — the pending confirmation is recreated on each attempt, so the affirmation is never "later" than it `bug` `bug:crash` `P1` `impact:ux-friction` 💬1
- [#169222](https://github.com/openclaw/openclaw/issues/169222) Run abandoned by a gateway restart (CLI embedded fallback → `EmbeddedAttemptSessionTakeoverError`) never gets an `agent.run.finished` audit event `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:data-loss` 💬1
- [#169216](https://github.com/openclaw/openclaw/issues/169216) Update failure: package-swap (2026.9.9) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#169213](https://github.com/openclaw/openclaw/issues/169213) [Bug]: Discord /status falsely rejects unchanged auth selection because the session entry is cloned `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#169211](https://github.com/openclaw/openclaw/issues/169211) Control UI link preview: no opt-in allowlist for trusted private-network hosts (recurring security WARNs in intranet/dev setups) `security` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#169208](https://github.com/openclaw/openclaw/issues/169208) [Bug]: Hook-pack fallback silently discards the reason a package-kind probe failed `bug` `no-stale` `bug:behavior` `P2` 💬1
- [#169205](https://github.com/openclaw/openclaw/issues/169205) [Bug]: Sessions created with a cwd outside the agent workspace fail model resolution for plugin-discovered providers (zai, opencode-go) - "This model was not found", no fallback on user overrides `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#169203](https://github.com/openclaw/openclaw/issues/169203) [Bug]: macOS app hangs during Option + Space messaging workflow (2026.9.8) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬1
- [#169196](https://github.com/openclaw/openclaw/issues/169196) [Bug]: 2026.10.1 on Windows — shared-state WAL checkpoint permanently blocked by a read mark pinned near frame 2 (`nBackfill` never advances) `P2` `impact:other` 💬1
- [#169193](https://github.com/openclaw/openclaw/issues/169193) [Bug]: Managed updates blocked: orphaned package-activation receipt after /tmp cleared by reboot `bug` `bug:behavior` `P0` `maturity:stable` 💬1
- [#169195](https://github.com/openclaw/openclaw/issues/169195) iOS sidebar repeats lookup and font work while rendering sessions `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#169191](https://github.com/openclaw/openclaw/issues/169191) macOS node: selecting Computer control provider = CUA drops computer.act/screen.snapshot from the node (driver logs 'service connect' WARN); Peekaboo works `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#169192](https://github.com/openclaw/openclaw/issues/169192) fs.listDir (macOS node) returns directories only — document the folder-picker contract where agents can see it (or add includeFiles) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#169190](https://github.com/openclaw/openclaw/issues/169190) [bug] feishu config hot-reload orphans conversation binding and permanently wedges the session lane (SessionWorkStartChangedError); `openclaw` delegation tool fails with "requires an active run authority" `bug` `no-stale` `bug:behavior` `P1` 💬1
- [#169186](https://github.com/openclaw/openclaw/issues/169186) [Bug]: Provider "deadline expired" timeouts are classified as auth failures `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#169185](https://github.com/openclaw/openclaw/issues/169185) [Bug]: Chat-header Delete removes only adopted Claude wrapper; native transcripts remain (2026.10.1) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#169183](https://github.com/openclaw/openclaw/issues/169183) [Bug] Control UI restricted role (sessions.others:"none") — Home composer blocked because the canonical main session cannot be claimed by the restricted profile `P1` `impact:ux-friction` 💬1
- [#169147](https://github.com/openclaw/openclaw/issues/169147) [Bug]: Discord fallback acknowledgement edits Components V2 source after deferred-update `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `maturity:stable` 💬1
- [#169176](https://github.com/openclaw/openclaw/issues/169176) Telegram callback queries fail with 'Gateway requester authority changed'; non-retriable spooled callback retried every ~3 min for 24 h `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#169171](https://github.com/openclaw/openclaw/issues/169171) Update failure: gateway-recovery-verification (2026.10.1) `P2` `clawsweeper:needs-info` `issue-rating: 🦐 gold shrimp` `impact:other` 💬1
- [#169165](https://github.com/openclaw/openclaw/issues/169165) Update failure: post-update-verification (2026.10.1) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#169160](https://github.com/openclaw/openclaw/issues/169160) [Bug]: OpenRouter and xAI media generation ignore models.providers.<id>.request.allowPrivateNetwork `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#169161](https://github.com/openclaw/openclaw/issues/169161) [Bug]: plain-text tool call text leaks into visible output when provider chunks split a call marker `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#169158](https://github.com/openclaw/openclaw/issues/169158) [Bug]: openclaw system/custodian agent turns (agent:openclaw:openclaw-*) emit no post-resolve telemetry at all — no model_call_started, tool spans, model.usage, or agent_end `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#169156](https://github.com/openclaw/openclaw/issues/169156) [Bug]: model.usage diagnostic event (cost tracking) never fires for internal/background agent-turn sessions (internal-session-effects:*) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#169157](https://github.com/openclaw/openclaw/issues/169157) [Bug]: SQLite snapshot publication fails with false EXDEV on Windows EFS-encrypted profile directories (doctor aborts) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#169149](https://github.com/openclaw/openclaw/issues/169149) [Bug]: v2026.10.1 regression: skill discovery guidance sends duplicate system messages to openai-completions (breaks vLLM/Qwen with 400) `bug` `regression` `P1` `impact:auth-provider` 💬1
- [#169150](https://github.com/openclaw/openclaw/issues/169150) Detached heartbeat/cron wakes inherit the arming turn's prepared model runtime plugin generation and fail with "prepared model runtime plugin generation was superseded" `P2` `impact:other` 💬1
- [#169133](https://github.com/openclaw/openclaw/issues/169133) [Bug]: OpenRouter cache-TTL context pruning never arms for x-ai/ (Grok) and google/ (Gemini) model families `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#169132](https://github.com/openclaw/openclaw/issues/169132) [Bug]: Isolated cron Codex turns silently drop configured max effort to medium (2026.10.1) `P2` `impact:auth-provider` 💬1
- [#169118](https://github.com/openclaw/openclaw/issues/169118) [Bug]: claude-cli queued generated-media completion turn keeps the message tool despite disableMessageTool; evaluator dead-letters a delivered image `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#168929](https://github.com/openclaw/openclaw/issues/168929) [Feature]: Mini Me — owner-named personal agent with scoped learning and decisions `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#169115](https://github.com/openclaw/openclaw/issues/169115) Update failure: global-install-foreign-destination (2026.9.6) `P2` `impact:ux-friction` 💬1
- [#169112](https://github.com/openclaw/openclaw/issues/169112) [Feature]: Slack: allow agent-posted interactive blocks (checkboxes/buttons) to stay interactive after a click `P3` `impact:ux-friction` 💬1
- [#169109](https://github.com/openclaw/openclaw/issues/169109) [Feature]: Add automatic archival / retention policy for session transcript DB `P2` `impact:session-state` 💬1
- [#169108](https://github.com/openclaw/openclaw/issues/169108) [Bug]: Stranded-reply recovery prompts for the message tool while setting the retry tool policy to deny all `bug` `bug:behavior` 💬1
- [#169106](https://github.com/openclaw/openclaw/issues/169106) [Bug]: A rejecting host retry callback aborts the model retry loop instead of returning a retry decision `bug` `no-stale` `bug:behavior` `P2` 💬1
- [#169104](https://github.com/openclaw/openclaw/issues/169104) [Bug]: telegram-model-picker-prepared-gateway e2e fails on main `P2` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` `impact:other` 💬1
- [#169105](https://github.com/openclaw/openclaw/issues/169105) [Bug]: codex run-attempt.steering tests fail on main (hook timeouts) `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#169103](https://github.com/openclaw/openclaw/issues/169103) [Bug]: discord subagent-hooks tests time out on main `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#169095](https://github.com/openclaw/openclaw/issues/169095) [Bug]: node-worker-launch-wire e2e fails on main: transcript persistence rejected with SessionActorStaleVersionError `P2` `clawsweeper:needs-live-repro` `impact:session-state` `issue-rating: 🐚 platinum hermit` 💬1
- [#169096](https://github.com/openclaw/openclaw/issues/169096) [Bug]: memory-core tools.local-fallback test fails on main (keyword fallback returned where disabled result expected) `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#169094](https://github.com/openclaw/openclaw/issues/169094) Update failure: managed-service-update-handoff (2026.10.1) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `P0` `issue-rating: 🦪 silver shellfish` 💬1
- [#169087](https://github.com/openclaw/openclaw/issues/169087) Session SQLite migration recovery report (session-sqlite-1791719772645-d19ce33d) `P2` `clawsweeper:needs-info` `impact:session-state` `issue-rating: 🦪 silver shellfish` 💬1
- [#169083](https://github.com/openclaw/openclaw/issues/169083) Update failure: runtime-verification-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#169080](https://github.com/openclaw/openclaw/issues/169080) Update failure: package-swap (2026.9.8) `P2` `impact:ux-friction` 💬1
- [#169079](https://github.com/openclaw/openclaw/issues/169079) Compaction checkpoints should let the agent distinguish compaction from restart without external process checks `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#169072](https://github.com/openclaw/openclaw/issues/169072) [Bug]: kimi web_search still uses legacy $web_search builtin — Moonshot deprecates it 2026-10-20; migrate to /v1/tools/search `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#169071](https://github.com/openclaw/openclaw/issues/169071) [Bug]: Gateway fails to start / doctor fails with "native file copy failed (code=EIO)" on ZFS (FICLONE/reflink) — no fallback to JS copy `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#169067](https://github.com/openclaw/openclaw/issues/169067) [Bug]: Usage Started by shows raw Slack IDs and splits verified linked identities `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#169066](https://github.com/openclaw/openclaw/issues/169066) Regression: Settings → Models “Test connection” is slow and reports incorrect latency after 2026.9 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#169065](https://github.com/openclaw/openclaw/issues/169065) secrets agent tool promises metadata-only list but emits full env-kind credential values into tool transcripts `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#169054](https://github.com/openclaw/openclaw/issues/169054) [Bug]: config hot reload drops session events queued behind an active turn ("Session event configuration changed"), never retried `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:session-state` 💬1
- [#169057](https://github.com/openclaw/openclaw/issues/169057) Update failure: package-swap (2026.9.9) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#169051](https://github.com/openclaw/openclaw/issues/169051) [Feature]: Review path for MERRICK Companion as an official external plugin `P3` 💬1
- [#169049](https://github.com/openclaw/openclaw/issues/169049) [Bug]: 2026.10.1 stable removed plugin-sdk/command-auth export — @larksuite/openclaw-lark fails to load, Feishu channel unusable with no migration path `P1` `impact:message-loss` 💬1
- [#169041](https://github.com/openclaw/openclaw/issues/169041) Update failure: candidate-state-snapshot (2026.9.6) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#169014](https://github.com/openclaw/openclaw/issues/169014) [Feature]: iOS chat toolbar layering over a continuous transcript `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#169016](https://github.com/openclaw/openclaw/issues/169016) [Bug]: sessions_spawn intermittently refused "changed before expected work could start" for an unchanged fresh child (persist guard reads no row) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#169011](https://github.com/openclaw/openclaw/issues/169011) State dir is chmodded to 0700 during normal operation (exec approvals, config, atomic writer default), breaking group-shared state roots `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#169008](https://github.com/openclaw/openclaw/issues/169008) compaction (mode=safeguard) truncates the finalized summary (loss=summary-tail) although the request budget reports "fits" (contextWindow=1M, input~69k) `bug` `bug:behavior` 💬1
- [#168990](https://github.com/openclaw/openclaw/issues/168990) [Feature]: Localize/configurable PENDING_DELIVERY_NOTICE (hardcoded English restart-recovery text leaks into non-English chats) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#168978](https://github.com/openclaw/openclaw/issues/168978) [Bug]: claude-cli history guard rejects valid turn across an owned transcript append `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:session-state` 💬1
- [#168970](https://github.com/openclaw/openclaw/issues/168970) [Bug]: LCM compaction progresses after foreground preemption, but host byte-preflight fails on no_compaction_progress `bug` `bug:behavior` `P2` `impact:session-state` 💬1
- [#168967](https://github.com/openclaw/openclaw/issues/168967) [Bug]: A corrupt newest config backup aborts command-owner recovery before older backups are checked `bug` `bug:behavior` 💬1
- [#168963](https://github.com/openclaw/openclaw/issues/168963) Update failure: updater-runtime-retention (2026.9.9) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#168936](https://github.com/openclaw/openclaw/issues/168936) [Bug]: Restart recovery fails to mark startup-orphaned subagent sessions on every start (SQLite session entry changed before replacement) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#168937](https://github.com/openclaw/openclaw/issues/168937) [Feature]: memory-wiki bridge agent allowlist for global vault scope `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#168934](https://github.com/openclaw/openclaw/issues/168934) [Bug]: Cloud worker silently falls back to anonymous Git access when a configured GitHub identity is unavailable `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#168932](https://github.com/openclaw/openclaw/issues/168932) Native Codex image-edit route returns HTTP 503 through OpenClaw proxy; upstream trace requested 💬1
- [#168918](https://github.com/openclaw/openclaw/issues/168918) Native chat performs redundant transcript updates during active runs `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#168909](https://github.com/openclaw/openclaw/issues/168909) [Docs Bug]: Automation CLI docs imply omitted --agent always selects main `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#168897](https://github.com/openclaw/openclaw/issues/168897) Update failure: managed-service-handoff-unavailable (2026.9.4) `P2` `impact:ux-friction` 💬1
- [#168866](https://github.com/openclaw/openclaw/issues/168866) [Docs Bug]: Bonjour guide conflates LAN and wide-area TXT hints `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#168865](https://github.com/openclaw/openclaw/issues/168865) [Bug]: Bun CPU profiling intermittently reports zero duration `P2` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` `impact:other` 💬1
- [#169154](https://github.com/openclaw/openclaw/issues/169154) [Bug]: a channel message containing `Authorization: Bearer <token>` fails its turn with "Transcript idempotency key ... conflicts with the admitted message"

#### 🔒 Closed Issues
- [#157630](https://github.com/openclaw/openclaw/issues/157630) An explicit --max-old-space-size silently defeats a worker's resourceLimits (managed heap policy adds one)
- [#167771](https://github.com/openclaw/openclaw/issues/167771) [Bug]: OpenClaw updates are permanently blocked by update-recovery-pending / managed handoff lease database identity changed, with no repair path (triage: no resolution predicate)
- [#157575](https://github.com/openclaw/openclaw/issues/157575) [Bug]: Managed Gateway heap flag overrides per-worker old-space limits
- [#158126](https://github.com/openclaw/openclaw/issues/158126) Gateway shutdown step gateway-server-close fails: "Worker environment inventory has closed" -> exit 1, unit left failed
- [#167506](https://github.com/openclaw/openclaw/issues/167506) OpenClaw 2026.9.8: deleted temporary handoff database blocks package recovery and all future updates
- [#87763](https://github.com/openclaw/openclaw/issues/87763) SSRF guard pinned DNS dispatcher causes model fetch timeouts when autoSelectFamily is enabled
- [#147420](https://github.com/openclaw/openclaw/issues/147420) [Bug]: computer execution is never released on the MCP computer tool path, leaving COMPUTER_HOST_BUSY with no timeout
- [#120449](https://github.com/openclaw/openclaw/issues/120449) tools.loopDetection WARNING-tier detections are silently logged server-side only — never surfaced to the model, session transcript, or CLI response
- [#75040](https://github.com/openclaw/openclaw/issues/75040) [Bug]: extra_body overwriting request payload keys: thinking — framework-level thinking field collision affecting all providers
- [#95866](https://github.com/openclaw/openclaw/issues/95866) Forced gateway restart discards in-flight replies (reply drain timeout 0ms)
- [#154180](https://github.com/openclaw/openclaw/issues/154180) [Bug]: Telegram polling ingress worker Cannot find module in source-checkout/capture mode
- [#168960](https://github.com/openclaw/openclaw/issues/168960) Update failure: package-swap (2026.9.9)
- [#168691](https://github.com/openclaw/openclaw/issues/168691) Update failure: unexpected-error (2026.9.3)
- [#105503](https://github.com/openclaw/openclaw/issues/105503) Feature request: opt-in (or disable-able) agent-to-agent "announce step"
- [#150167](https://github.com/openclaw/openclaw/issues/150167) [Bug]: collector structured_output rejects valid object payload with '<root>: must be object' (openai-completions runtime passes args as string)
- [#131330](https://github.com/openclaw/openclaw/issues/131330) [Bug]: Skill Workshop Web UI can report "Applied" while proposal stays pending and no SKILL.md is written
- [#153391](https://github.com/openclaw/openclaw/issues/153391) [Bug]: Reasoning models cannot be used as `utilityModel` — isolated completions drop configured `params`, and the observer's token budget is hardcoded
- [#141668](https://github.com/openclaw/openclaw/issues/141668) [Bug]: WhatsApp group context replay breaks append-only session context for local models
- [#118946](https://github.com/openclaw/openclaw/issues/118946) `before_model_resolve` cannot suppress the configured fallback chain — expose `fallbacksOverride`
- [#169098](https://github.com/openclaw/openclaw/issues/169098) Model switch back to IONOS Qwen causes 400 UPSTREAM_REJECTED "System message must be at the beginning" (regression since 2026.9.10, survives /new and reboot)
- [#134354](https://github.com/openclaw/openclaw/issues/134354) [Bug]: node-host exec discards the node service PATH by running `/bin/sh -lc` on Linux; the documented remediation (systemd `Environment=PATH`) is a no-op
- [#168856](https://github.com/openclaw/openclaw/issues/168856) [Bug]: 'aborted' package-activation record is unsettleable — its own rollback refreshes ctime, so repair refuses (disarmed) and retire refuses (publication object changed), blocking every update (2026.9.8, macOS)
- [#168872](https://github.com/openclaw/openclaw/issues/168872) Updating to 2026.10.1 blocked before activation: webhookListeners config migration can only be written by the candidate (same class as #165299)
- [#168498](https://github.com/openclaw/openclaw/issues/168498) [Bug] Codex 2026.9.9 native session fails: plugin capture imports missing agent-harness-task-runtime export
- [#168749](https://github.com/openclaw/openclaw/issues/168749) [Bug]: `openclaw plugins update` fails with only "The CLI command failed." (no reason) while an unfinished update run holds plugin install records
- [#168838](https://github.com/openclaw/openclaw/issues/168838) [Bug]: Doctor marks canonical one-shot schedules mutated and enters SQLite backup repair
- [#168662](https://github.com/openclaw/openclaw/issues/168662) [Feature]: Large-state 2026.9.4 installation cannot upgrade: candidate validation killed near 299 seconds
- [#142847](https://github.com/openclaw/openclaw/issues/142847) [Bug]: Windows node host mangles quoted arguments in native exec — runCommand never sets windowsVerbatimArguments
- [#151901](https://github.com/openclaw/openclaw/issues/151901) [Feature]: Supported plugin-owned one-shot ACP runtime
- [#167924](https://github.com/openclaw/openclaw/issues/167924) Control UI history-recovery fixture waits for prefetch without navigation intent
- [#128536](https://github.com/openclaw/openclaw/issues/128536) [Bug]: Memory remote embedding credential handling fails open on Google/LM Studio paths where SDK and openai-compatible providers fail closed
- [#169042](https://github.com/openclaw/openclaw/issues/169042) tools.loopDetection never blocks memory_search loops: outcome hash includes debug timings and time-decayed scores
- [#139961](https://github.com/openclaw/openclaw/issues/139961) [Bug]: Context-overflow precheck is skipped when a context engine owns compaction, so a prompt already over the attempt budget is shipped and billed before failing
- [#166768](https://github.com/openclaw/openclaw/issues/166768) [Bug]: Token-auth owners get 'Conversation unavailable' + Log in on every reload of a private /chat URL since #166049
- [#169181](https://github.com/openclaw/openclaw/issues/169181) [Bug]: Discord final reply fails with "Session actor changed while hydrating"
- [#103697](https://github.com/openclaw/openclaw/issues/103697) [Bug]: Generic stuck-session recovery loses phase-safe abort semantics
- [#168808](https://github.com/openclaw/openclaw/issues/168808) [Bug]: main fails the memory-core extension lint stripe with an unbound method reference
- [#169142](https://github.com/openclaw/openclaw/issues/169142) plugin-captures: per-boot session trees accumulate under <state>/tmp with no steady-state GC (Windows, v2026.10.1)
- [#155333](https://github.com/openclaw/openclaw/issues/155333) Cloud-worker dispatch aborts an active session before the replacement worker is ready
- [#168567](https://github.com/openclaw/openclaw/issues/168567) doctor --fix: malformed UTF-8 in root memory pair is silently merged into MEMORY.md with replacement characters
- [#168362](https://github.com/openclaw/openclaw/issues/168362) [Bug]: Doctor conflates system Node SQLite risk with a Gateway running a different Node executable
- [#168835](https://github.com/openclaw/openclaw/issues/168835) [Bug]: update repair retains ACPX "unfinished" warning after canonical migration completion
- [#168870](https://github.com/openclaw/openclaw/issues/168870) Update failure: requested (2026.9.9)
- [#149758](https://github.com/openclaw/openclaw/issues/149758) memory: header-only chunks act as vector-rank attractors; no min-chunk-length or heading-merge option at index time
- [#168748](https://github.com/openclaw/openclaw/issues/168748) [Bug]: Failed 2026.9.5→2026.10.1 update leaves @openclaw/codex on 2026.9.5; gateway serves with it and every turn fails (agent-harness-task-runtime not exported)
- [#168920](https://github.com/openclaw/openclaw/issues/168920) Update failure: runtime-verification-failed (2026.9.3)
- [#168817](https://github.com/openclaw/openclaw/issues/168817) Update failure: updater-runtime-retention (2026.9.8)
- [#168088](https://github.com/openclaw/openclaw/issues/168088) Default ChatGPT-login compaction to Codex-style remote compaction V2, built as the next normal turn
- [#169264](https://github.com/openclaw/openclaw/issues/169264) [Bug]: Codex Ultrafast drops to Fast after the first turn with ChatGPT sign-in
- [#169134](https://github.com/openclaw/openclaw/issues/169134) [Bug]: Control UI turns revoked by unrelated pairing publications
- [#169487](https://github.com/openclaw/openclaw/issues/169487) Windows Gateway restart fails after Codex plugin cleanup error; no automatic relaunch
- [#169455](https://github.com/openclaw/openclaw/issues/169455) Withdrawn: submitted from an unauthorized account
- [#169416](https://github.com/openclaw/openclaw/issues/169416) iOS/iPad: allow sending follow-ups while a run is active (queue/steer like Control UI)
- [#169408](https://github.com/openclaw/openclaw/issues/169408) Update failure: not-git-install (2026.9.3)
- [#126598](https://github.com/openclaw/openclaw/issues/126598) [Bug]: Safeguard never sees overflow because max_completion_tokens clamp uses configured contextTokens, not the model's real window
- [#169362](https://github.com/openclaw/openclaw/issues/169362) Field report: unattended updates need doctor-migration recovery and startup-not-ready classification
- [#169342](https://github.com/openclaw/openclaw/issues/169342) [Bug]: Codex context preparation takes 43–67 seconds and fails with worker task timed out in 2026.9.9
- [#160389](https://github.com/openclaw/openclaw/issues/160389) [Bug]: llama.cpp provider discovery blocks rootless Podman host gateway despite allowPrivateNetwork
- [#169187](https://github.com/openclaw/openclaw/issues/169187) [Bug]: Older LM Studio servers' context overflow error is not recognized, so compaction recovery never runs
- [#168026](https://github.com/openclaw/openclaw/issues/168026) Cron: a job blocked by the local-provider preflight is skipped silently forever
- [#169121](https://github.com/openclaw/openclaw/issues/169121) [Bug]: MCP structuredContent projection duplicates payload when server's text mirror is compact JSON
- [#169298](https://github.com/openclaw/openclaw/issues/169298) [Bug]: memory_search decays extraPaths files by mtime (fixed 30-day half-life); docs say only dated notes decay
- [#169276](https://github.com/openclaw/openclaw/issues/169276) Doctor plugin-doctor-state refuses on empty retired Active Memory session-toggles.json; suggested 9.5 path unusable after 9.6+ migration
- [#141306](https://github.com/openclaw/openclaw/issues/141306) [Bug]: Deeply nested external tool schema crashes normalization with RangeError (no depth budget)
- [#169234](https://github.com/openclaw/openclaw/issues/169234) [Bug]: Talk spoken confirmation can never be satisfied — the pending confirmation is recreated on each attempt, so the affirmation is never "later" than it
- [#168415](https://github.com/openclaw/openclaw/issues/168415) iOS realtime Talk over the Gateway relay crashes on the first reply and is silent on the iPhone speaker
- [#169196](https://github.com/openclaw/openclaw/issues/169196) [Bug]: 2026.10.1 on Windows — shared-state WAL checkpoint permanently blocked by a read mark pinned near frame 2 (`nBackfill` never advances)
- [#169193](https://github.com/openclaw/openclaw/issues/169193) [Bug]: Managed updates blocked: orphaned package-activation receipt after /tmp cleared by reboot
- [#169183](https://github.com/openclaw/openclaw/issues/169183) [Bug] Control UI restricted role (sessions.others:"none") — Home composer blocked because the canonical main session cannot be claimed by the restricted profile
- [#167663](https://github.com/openclaw/openclaw/issues/167663) [Bug]: Rosetta can crash native pipe creation through Koffi
- [#169149](https://github.com/openclaw/openclaw/issues/169149) [Bug]: v2026.10.1 regression: skill discovery guidance sends duplicate system messages to openai-completions (breaks vLLM/Qwen with 400)
- [#169150](https://github.com/openclaw/openclaw/issues/169150) Detached heartbeat/cron wakes inherit the arming turn's prepared model runtime plugin generation and fail with "prepared model runtime plugin generation was superseded"
- [#169132](https://github.com/openclaw/openclaw/issues/169132) [Bug]: Isolated cron Codex turns silently drop configured max effort to medium (2026.10.1)
- [#159196](https://github.com/openclaw/openclaw/issues/159196) Anthropic preserved thinking: replayed thinking blocks dropped on (nearly) every turn with Fable 5.1 — prefix invalidated by per-turn system prompt rebuild / transcript edits
- [#167354](https://github.com/openclaw/openclaw/issues/167354) Session controller: sessions_yield on Codex ignores native children from earlier turns
- [#169115](https://github.com/openclaw/openclaw/issues/169115) Update failure: global-install-foreign-destination (2026.9.6)
- [#157338](https://github.com/openclaw/openclaw/issues/157338) [Bug]: Updater treats pacman-managed installation as npm and fails with EACCES
- [#169112](https://github.com/openclaw/openclaw/issues/169112) [Feature]: Slack: allow agent-posted interactive blocks (checkboxes/buttons) to stay interactive after a click
- [#169109](https://github.com/openclaw/openclaw/issues/169109) [Feature]: Add automatic archival / retention policy for session transcript DB
- [#169108](https://github.com/openclaw/openclaw/issues/169108) [Bug]: Stranded-reply recovery prompts for the message tool while setting the retry tool policy to deny all
- [#161901](https://github.com/openclaw/openclaw/issues/161901) Make the Deep diversity-gate boundary observable: report recurrence without diversity
- [#169080](https://github.com/openclaw/openclaw/issues/169080) Update failure: package-swap (2026.9.8)
- [#169051](https://github.com/openclaw/openclaw/issues/169051) [Feature]: Review path for MERRICK Companion as an official external plugin
- [#169049](https://github.com/openclaw/openclaw/issues/169049) [Bug]: 2026.10.1 stable removed plugin-sdk/command-auth export — @larksuite/openclaw-lark fails to load, Feishu channel unusable with no migration path
- [#168257](https://github.com/openclaw/openclaw/issues/168257) [Bug]: Release inventory admits upgrade sources with unsupported schema versions
- [#169008](https://github.com/openclaw/openclaw/issues/169008) compaction (mode=safeguard) truncates the finalized summary (loss=summary-tail) although the request budget reports "fits" (contextWindow=1M, input~69k)
- [#159801](https://github.com/openclaw/openclaw/issues/159801) 2026.9.6: sessions_send into a paired-device (worker-turn) session completes on the device, then fails Gateway-side with SessionTranscriptWriterClaimReboundError and marks the session failed
- [#168970](https://github.com/openclaw/openclaw/issues/168970) [Bug]: LCM compaction progresses after foreground preemption, but host byte-preflight fails on no_compaction_progress
- [#168967](https://github.com/openclaw/openclaw/issues/168967) [Bug]: A corrupt newest config backup aborts command-owner recovery before older backups are checked
- [#151622](https://github.com/openclaw/openclaw/issues/151622) [Bug]: exec host=node always fails with "approval id does not match request" (sessionKey lost in runtime approval context)
- [#156026](https://github.com/openclaw/openclaw/issues/156026) [Bug]: runtime.llm.complete inherits retired plugin inventory after hot reload
- [#168932](https://github.com/openclaw/openclaw/issues/168932) Native Codex image-edit route returns HTTP 503 through OpenClaw proxy; upstream trace requested
- [#168729](https://github.com/openclaw/openclaw/issues/168729) Update to 2026.9.9 fails with V8 heap OOM in the candidate doctor and activation doctor: updater ignores the Gateway service heap setting (large agent DB)
- [#168897](https://github.com/openclaw/openclaw/issues/168897) Update failure: managed-service-handoff-unavailable (2026.9.4)
- [#167847](https://github.com/openclaw/openclaw/issues/167847) [Feature]: Decide registry diagnostic invalidation after removing the last configured plugin path

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 252,822 · **Open issues:** 48,025 · **Last push:** <1h ago

On October 12, 2026, there were no new releases or merged pull requests for the Hermes Agent. However, the day saw several noteworthy issues raised, including #136567, which highlights a misrouting problem with thread-less messages in newly created Telegram DM topics, and #136801, reporting that the Telegram gateway fails with an "Insufficient Balance" error despite confirmed funding. Notably, the bug in #136842 regarding the `write_file` function, which incorrectly resolves paths, could lead to files being misplaced in the launched shell's HOME directory instead of the intended project directory. Other significant concerns involve session management errors and performance issues, emphasizing ongoing stability challenges as user feedback continues to shape future developments.

#### 🐛 New Issues
- [#136567](https://github.com/NousResearch/hermes-agent/issues/136567) Telegram DM topics: opening message of a newly created topic is delivered thread-less → lobby recovery misroutes it to the previous topic `type/bug` `comp/gateway` `comp/plugins` `platform/telegram` 💬10
- [#136801](https://github.com/NousResearch/hermes-agent/issues/136801) Telegram gateway fails with "Insufficient Balance" despite confirmed funded providers (Nous Portal OAuth and DeepSeek API key) `type/bug` `comp/gateway` `platform/telegram` `provider/nous` 💬4
- [#136842](https://github.com/NousResearch/hermes-agent/issues/136842) [Bug]: write_file resolves a relative path against an inherited TERMINAL_CWD, so the file lands in the launch shell's HOME while sessions.cwd reports the project directory `type/bug` `comp/cli` `tool/file` `P2` 💬3
- [#136713](https://github.com/NousResearch/hermes-agent/issues/136713) [Bug]: Dashboard chat page re-attach (PTY/WS client disconnect) hard-interrupts the in-flight turn — work is destroyed, sessions close with end_reason=tui_shutdown `type/bug` `comp/cli` `comp/tui` `P2` 💬2
- [#136878](https://github.com/NousResearch/hermes-agent/issues/136878) Bug: expired claim_lock never reclaimed — task stuck in ready forever, dispatcher skips locked cards without liveness check `type/bug` `comp/cron` `P3` 💬1
- [#136877](https://github.com/NousResearch/hermes-agent/issues/136877) start_chat rejected from Desktop/Bot chats: _sync_bot_capabilities clears HERMES_UI_SESSION_ID `type/bug` `comp/tui` `P2` `sweeper:risk-session-state` 💬1
- [#136850](https://github.com/NousResearch/hermes-agent/issues/136850) [Bug]: proactive tool-result prune is stranded on compaction's elif branch, so its 48K trigger is unreachable on a healthy session and the pass never fires `type/bug` `comp/agent` `P2` `sweeper:risk-session-state` 💬1
- [#136885](https://github.com/NousResearch/hermes-agent/issues/136885) [Skills] subagent-driven-development: remove the 70% context abort and unconditional review/delegation rituals `type/bug` `tool/delegate` `tool/skills` `P3`
- [#136882](https://github.com/NousResearch/hermes-agent/issues/136882) [Feature]: Warn (or allow combining) when `display.personality` silently disables a user-written `agent.system_prompt` `type/feature` `comp/cli` `comp/gateway` `area/config`
- [#136883](https://github.com/NousResearch/hermes-agent/issues/136883) [Feature]: Persistent desktop-style Bot sidebar on iPad/tablet for one-tap chat switching `type/feature` `P3` `needs-decision` `comp/dashboard`
- [#136880](https://github.com/NousResearch/hermes-agent/issues/136880) [Feature]: Embedding Hermes with host-owned policy: a few hooks `type/feature` `comp/agent` `comp/plugins` `tool/skills`
- [#136870](https://github.com/NousResearch/hermes-agent/issues/136870) [Bug]: Nous Portal cost estimate ignores /models pricing.overrides[] tier — undercounts real billing ~2x above 272K prompt tokens `type/bug` `comp/agent` `provider/nous` `P2`
- [#136868](https://github.com/NousResearch/hermes-agent/issues/136868) Fresh-checkout bootstrap fails to resolve [silk] extra: rolling exclude-newer ("14 days") vs locked pins older than the cutoff (pilk==0.2.4, published 2023) `type/bug` `comp/cli` `P2` `python:uv`
- [#136856](https://github.com/NousResearch/hermes-agent/issues/136856) Desktop: SimpleX sessions invisible in sidebar - 'simplex' missing from MESSAGING_SESSION_SOURCE_IDS `type/bug` `duplicate` `P3` `sweeper:risk-session-state`
- [#136849](https://github.com/NousResearch/hermes-agent/issues/136849) [Bug]: auxiliary fallback gate stays closed for unrecognised errors — a configured fallback_chain is never consulted, so the task retries the same dead backend `type/bug` `comp/agent` `area/config` `P2`
- [#136851](https://github.com/NousResearch/hermes-agent/issues/136851) [Bug]: messages.token_count is never written — the column is NULL for every row in every session, though both the writer and the reader are implemented `type/bug` `comp/agent` `P3` `sweeper:risk-session-state`
- [#136808](https://github.com/NousResearch/hermes-agent/issues/136808) [Bug]: Telegram private-topic retries discard selected routing for media, overflow, and control messages `type/bug` `comp/plugins` `platform/telegram` `P3`
- [#136843](https://github.com/NousResearch/hermes-agent/issues/136843) [Bug]: a REJECTED kanban_complete counts as a terminal handoff, silently disabling the worker stop-nudge for the rest of the session `type/bug` `comp/agent` `comp/cron` `P3`
- [#136835](https://github.com/NousResearch/hermes-agent/issues/136835) write_file guard refusals are not logged (refused write is invisible in agent.log/errors.log) `type/bug` `comp/tools` `tool/file` `P3`
- [#136834](https://github.com/NousResearch/hermes-agent/issues/136834) execute_code hermes_tools stubs swallow tool errors (failures returned as dicts, never raised) `type/bug` `comp/tools` `tool/code-exec` `P2`
- [#136825](https://github.com/NousResearch/hermes-agent/issues/136825) Plugin API: let ctx.inject_message start a quiet turn (same display suppression as a scheduled heartbeat) `type/feature` `comp/cli` `comp/gateway` `comp/plugins`
- [#136826](https://github.com/NousResearch/hermes-agent/issues/136826) [Bug]: Desktop never refreshes a bot avatar that was replaced outside this window `type/bug` `comp/tui` `P3` `comp/desktop`

#### 🔒 Closed Issues
- [#66393](https://github.com/NousResearch/hermes-agent/issues/66393) [Feature]: gate the browser tool (or return an install hint) in non-interactive sessions when agent-browser isn't installed
- [#69776](https://github.com/NousResearch/hermes-agent/issues/69776) [Bug]: Async delegation dispatch note tells the model to "just continue," so weak models fabricate the result

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 93,588 · **Open issues:** 8,699 · **Last push:** <1h ago

On October 12, 2026, there were no new releases for vLLM, but several important changes were merged. Notable bug fixes included improvements to the CUDA IPC handle exchange for MiniMax (PR #60917), and enhancements to the MRV2 functionality, which addressed issues in attention mechanisms and warmups (PR #61013). Additionally, security enhancements were made to mitigate P2P ZMQ socket exhaustion (PR #51504) and restrict default CORS origins (PR #61009). Among the newly reported issues, a significant bug was identified regarding the Gemma 4 encoder's CUDA graph capture, which led to out-of-memory errors when handling large batch sizes (issue #61045). Overall, the day focused on essential bug fixes and performance improvements.

#### ✅ Merged PRs
- [#59026](https://github.com/vllm-project/vllm/pull/59026) [Bugfix] Read Ling quantization_config from top-level config for Bailing V3 VL
- [#60917](https://github.com/vllm-project/vllm/pull/60917) [Fix] MiniMax: fix CUDA IPC handle exchange on cuda-bindings >= 13.4
- [#61014](https://github.com/vllm-project/vllm/pull/61014) [MRV2] Switch CI tests still running on MRV1 unnecessarily
- [#61013](https://github.com/vllm-project/vllm/pull/61013) [Bugfix][MRV2] Fix FlashInfer attention and ReplaySSM warmups on MRV2
- [#59147](https://github.com/vllm-project/vllm/pull/59147) [Bugfix][GLM-5.3-Flash] Honor `--mamba-ssm-cache-dtype` for the KDA recurrent state
- [#61061](https://github.com/vllm-project/vllm/pull/61061) [Bugfix] Respect the configured offline chat template
- [#51504](https://github.com/vllm-project/vllm/pull/51504) [Security] Fix P2P ZMQ socket exhaustion via unbounded peer sessions
- [#61046](https://github.com/vllm-project/vllm/pull/61046) [Sleep] Retain draft-private weights with existing parameter selector
- [#54951](https://github.com/vllm-project/vllm/pull/54951) [Perf][GLM-5.3-Flash] Shard long-context indexer prefill rows across TP
- [#61060](https://github.com/vllm-project/vllm/pull/61060) [RL] Release weight-transfer communicators without stopping inference
- [#58674](https://github.com/vllm-project/vllm/pull/58674) [Model] Support MiniCPM-V 4.7
- [#57243](https://github.com/vllm-project/vllm/pull/57243) [Bugfix][Frontend] Support scalar priority and wire priority into LLM.chat()
- [#61012](https://github.com/vllm-project/vllm/pull/61012) [Bugfix][Mooncake] Use the EAGLE replay boundary when retaining sliding-window tails
- [#61042](https://github.com/vllm-project/vllm/pull/61042) [Frontend] Explain disabled scale-out endpoints with opt-in hints
- [#61009](https://github.com/vllm-project/vllm/pull/61009) [Security] Restrict default CORS origins
- [#60966](https://github.com/vllm-project/vllm/pull/60966) [Fast Start][Bugfix] Snapshot GPU memory after external weights are ready
- [#57516](https://github.com/vllm-project/vllm/pull/57516) [Bugfix] Reclaim cached GPU memory during weight loading
- [#55203](https://github.com/vllm-project/vllm/pull/55203) [Bugfix][Multimodal] Fix per-video cache option reuse
- [#60684](https://github.com/vllm-project/vllm/pull/60684) [Perf][MiniMax-M3] MSA prefill attends with the E4M3 query; bump fmha_sm100 to 968061a
- [#60937](https://github.com/vllm-project/vllm/pull/60937) [MRV2] Detatch weight-reload logic from MRV1
- [#59880](https://github.com/vllm-project/vllm/pull/59880) [Bugfix][KV Connector] Fix speculative block reservations across KV cache groups
- [#59582](https://github.com/vllm-project/vllm/pull/59582) [RL][Frontend] Return token-level weight-version spans on final outputs

#### 🐛 New Issues
- [#61045](https://github.com/vllm-project/vllm/issues/61045) [Bug]: Gemma 4 encoder CUDA graph capture allocates `max_frames_per_batch` full-image rows per budget (38.5 GiB with `--max-num-batched-tokens 4096`) and OOMs 💬3
- [#61053](https://github.com/vllm-project/vllm/issues/61053) [Bug]: TP ranks can route the same token to different MoE experts because Inductor autotunes the fused add+RMSNorm reduction per rank 💬2
- [#61072](https://github.com/vllm-project/vllm/issues/61072) [Spec Decode][DFlash2] Every public 27B draft pairing we could construct is a net regression vs full-vocab MTP — pairing validation + last-stage memory asks `quantization` 💬2
- [#61057](https://github.com/vllm-project/vllm/issues/61057) [Bug]: Rust frontend can't start with the official Qwen3-ASR checkpoints (no tokenizer.json, nested vocab_size) `rust` 💬1
- [#61078](https://github.com/vllm-project/vllm/issues/61078) docs(security): API Key Limitations list is missing /metrics, /kv_event_sources, and /fault_tolerance/* (all unauthenticated) 💬1
- [#61055](https://github.com/vllm-project/vllm/issues/61055) [Bug][ROCm]: `ENV HSA_ENABLE_IPC_MODE_LEGACY=1` in the ROCm Dockerfiles makes `hipIpcGetMemHandle` fail on in-tree amdgpu kernels `rocm` 💬1
- [#61052](https://github.com/vllm-project/vllm/issues/61052) [Bug]: CPU KV offload crashes with Xid 31 on NVIDIA vGPU — cuMemcpyBatchAsync faults even with a single valid descriptor `bug` `nvidia` 💬1
- [#61117](https://github.com/vllm-project/vllm/issues/61117) [Bug]: CPU backend: C++ rejection_random_sample kernel accepts -1 placeholder drafts, so structured-output requests can sample from an unmasked row `structured-output` `cpu`
- [#61116](https://github.com/vllm-project/vllm/issues/61116) [Bug]: thinking_token_budget forces a second </think> when the natural </think> is inside accepted drafts (spec decode, V1 runner) `tool-calling`
- [#61115](https://github.com/vllm-project/vllm/issues/61115) [Bug]: min_tokens keeps EOS masked on the bonus token under speculative decoding (V1 runner), changes greedy output `speculative-decoding`
- [#61114](https://github.com/vllm-project/vllm/issues/61114) [Bug]: V2 block verification (rejection_sample_method="block") reuses position-keyed uniforms across rounds, so sampled output is biased
- [#61112](https://github.com/vllm-project/vllm/issues/61112) [Bug]: V2 rejection_sample drops target tokens with ids >= draft vocab width (probabilistic drafts from a narrower draft head)
- [#61113](https://github.com/vllm-project/vllm/issues/61113) [Bug]: V1 rejection sampler reads draft_probs with the target's vocab width when the draft head is narrower (out-of-bounds reads, stray token ids)
- [#61100](https://github.com/vllm-project/vllm/issues/61100) [Bug]: Severe output degeneration on SM120 with Apertus-70B FP8 in vLLM 0.25.1; v0.22.1 works after rollback `bug` `quantization`
- [#61095](https://github.com/vllm-project/vllm/issues/61095) [Perf][Attention] DiffKV prefill tiling on SM80: BLOCK_M=128 + KV tile 64 gives 3.0x on 200K-context chunks
- [#61069](https://github.com/vllm-project/vllm/issues/61069) [Bug]: GB10 (sm_121), NVFP4 + Marlin MoE + MTP: engine dies daily ~2k sequential short requests into a batch job (Xid 13+31 write to VA 0x0; Xid 13+43 at a fixed address on all SMs) `quantization`
- [#61049](https://github.com/vllm-project/vllm/issues/61049) Stateless DP group formation (port-pool path): leader silently rebinds the pooled rendezvous port after EADDRINUSE while members retry the stale port for the full timeout

#### 🔒 Closed Issues
- [#42484](https://github.com/vllm-project/vllm/issues/42484) [RFC] Production-boundary measurement on H100 + vLLM 0.19.1: throughput plateau at c=4→16, methodology critique invited
- [#43643](https://github.com/vllm-project/vllm/issues/43643) [RFC]: Streaming API for Real-Time Server State and Metrics
- [#45469](https://github.com/vllm-project/vllm/issues/45469) [Bug]: Integer overflow in permute_cols
- [#45493](https://github.com/vllm-project/vllm/issues/45493) [Bug]: Gemma 4 Finetune won't think
- [#45500](https://github.com/vllm-project/vllm/issues/45500) [Bug]: Integer overflows in merge_attn_states.cu
- [#57610](https://github.com/vllm-project/vllm/issues/57610) [Bug]: Sliding-window prefix cache misses entirely when a request diverges inside the last alignment block of a cached prompt (sparse retention keeps a tail exactly `need` blocks long)
- [#45492](https://github.com/vllm-project/vllm/issues/45492) [Bug]: Out of bounds in moe_permute
- [#45507](https://github.com/vllm-project/vllm/issues/45507) serving: MM warmup background overlap needs real serialization via _mm_executor (design review needed)
- [#58599](https://github.com/vllm-project/vllm/issues/58599) [Bug]: MiniMax fused allreduce+RMSNorm Lamport workspace silently disabled on cuda-bindings 13.4 — cudaIpcMemHandle_t.reserved removed
- [#57440](https://github.com/vllm-project/vllm/issues/57440) [Bug]: Weight-loading/repacking memory is not reclaimed on discrete GPUs, forcing lower max-num-seqs / max-num-batched-tokens (Kimi K3, B200, fastsafetensors + DeepEP v2)
- [#59904](https://github.com/vllm-project/vllm/issues/59904) [Bug]: flashinfer_moe_ep_mega_deep_gemm: 'ImportError: generic_type: type "Runtime" is already registered!' with vendored DeepGEMM

### SGLang (`sgl-project/sglang`)

**Stars:** 37,006 · **Open issues:** 5,605 · **Last push:** <1h ago

There were no new releases for SGLang on October 12, 2026. Significant merged pull requests included enhancements to the LTX-2.3 and LTX-2.5 guidance systems, such as the batching of LTX-2.3 guidance passes under CFG parallel and layerwise offload improvements for the text encoder. Other notable contributions involved updates to the DSpark module, including the introduction of a `MarkovSampleStep` for streamlined token selection and various optimizations for handling draft configurations. A particularly concerning new issue was raised regarding the DeepSeek-V4.1-Flash, where the multi-turn prefix cache performance was reported to degrade significantly, affecting conversations in the associated environment. Overall, the day focused on integration and refinement within existing functionalities rather than new releases.

#### ✅ Merged PRs
- [#43684](https://github.com/sgl-project/sglang/pull/43684) [diffusion] split and batch LTX-2.3 one-stage guidance passes under CFG parallel
- [#43683](https://github.com/sgl-project/sglang/pull/43683) [diffusion] perf: layerwise offload for the LTX-2.5 Gemma-4 text encoder
- [#43691](https://github.com/sgl-project/sglang/pull/43691) [diffusion] fix: shard Qwen-Image adaLN modulation and text FFN under TP
- [#43623](https://github.com/sgl-project/sglang/pull/43623) [DSpark] Apply `SGLANG_SIMULATE_ACC_LEN` inside the accept instead of switching paths
- [#43669](https://github.com/sgl-project/sglang/pull/43669) [DSpark] Merge the draft TP sync sites into `dspark-draft`
- [#43670](https://github.com/sgl-project/sglang/pull/43670) [DSpark] Add `SGLANG_DSPARK_USE_GREEDY_DRAFT`, an argmax draft accepted as one-hot
- [#43668](https://github.com/sgl-project/sglang/pull/43668) [DSpark] Run the same markov block in the draft graph tail; drop `SGLANG_DSPARK_FOLDED_SAMPLING`
- [#43622](https://github.com/sgl-project/sglang/pull/43622) [DSpark] Draft the eager markov block through `MarkovSampleStep`
- [#43621](https://github.com/sgl-project/sglang/pull/43621) [DSpark] Add `MarkovSampleStep`, one op for a markov draft step's add and token pick
- [#43620](https://github.com/sgl-project/sglang/pull/43620) [DSpark] Run every markov head through one step interface
- [#42455](https://github.com/sgl-project/sglang/pull/42455) [KV Events] Publish LoRA adapter names and namespaced block hashes
- [#35292](https://github.com/sgl-project/sglang/pull/35292) fix: default Inkling to fa4 on Hopper
- [#43567](https://github.com/sgl-project/sglang/pull/43567) [Unified Radix] Invalidate lazy Mamba checkpoints before in-place tracking
- [#43550](https://github.com/sgl-project/sglang/pull/43550) [HiCache] Keep storage workers alive on backend exceptions
- [#43690](https://github.com/sgl-project/sglang/pull/43690) [diffusion] fix: select VSA-H3 for FastH3 when no transformer backend is given
- [#43593](https://github.com/sgl-project/sglang/pull/43593) Preserve serialized page dtype in NIXL copy fallback
- [#43595](https://github.com/sgl-project/sglang/pull/43595) Share MLA host capacity initialization
- [#43596](https://github.com/sgl-project/sglang/pull/43596) Build Mamba host pools from device buffer infos
- [#43386](https://github.com/sgl-project/sglang/pull/43386) [kvevents] fix missing topics in replayed kv events
- [#43656](https://github.com/sgl-project/sglang/pull/43656) [diffusion] Encode LTX video/audio through the shared bounded MP4 path
- [#35721](https://github.com/sgl-project/sglang/pull/35721) [BugFix][DP] Prevent health checks from perturbing user request routing
- [#43062](https://github.com/sgl-project/sglang/pull/43062) [Diffusion] Add ModelOpt FP8 checkpoint quantization for Pi0.5
- [#43475](https://github.com/sgl-project/sglang/pull/43475) [Fix] Repair multimodal VMM lease cleanup and source-stream ordering
- [#43070](https://github.com/sgl-project/sglang/pull/43070) [DeepSeek-V4.1] Use num_stages=1 for the hc_mix stats partial kernel
- [#43283](https://github.com/sgl-project/sglang/pull/43283) [Scheduler] Keep a DP-converted decode batch as the running batch
- [#43346](https://github.com/sgl-project/sglang/pull/43346) [Sampler] Sort only the max(top_k) leading columns in the torch sampler
- [#43290](https://github.com/sgl-project/sglang/pull/43290) [Scheduler] Hold back decode rows on a mixed step when they do not fit the KV pool
- [#43286](https://github.com/sgl-project/sglang/pull/43286) [KV canary] Expect sweep counters on the target runner only
- [#43285](https://github.com/sgl-project/sglang/pull/43285) [Test] Do not hang scripted-runtime teardown when the server died
- [#43237](https://github.com/sgl-project/sglang/pull/43237) [Perf] Fuse BF16 writes to native HND KV cache storage
- [#43298](https://github.com/sgl-project/sglang/pull/43298) [Scheduler] Requeue preempted requests when admission admits nothing
- [#41933](https://github.com/sgl-project/sglang/pull/41933) [qwen 3.8 next] Fuse QSA prefill KV gathering and dtype conversion
- [#43037](https://github.com/sgl-project/sglang/pull/43037) [Spec] Allow Qwen3.5 backends to opt into packed target verification
- [#43479](https://github.com/sgl-project/sglang/pull/43479) [Scheduler] Keep waiting-prefix LRU refresh consistent across TP ranks
- [#43383](https://github.com/sgl-project/sglang/pull/43383) [AMD]Qwen add Sparse attention to capturing hip graphs
- [#42857](https://github.com/sgl-project/sglang/pull/42857) [KDA] Support Helion MTP verification and harden prefill, decode
- [#43332](https://github.com/sgl-project/sglang/pull/43332) [GDN] Fix CuTe DSL decode to read the [N, HV, V, K] state layout
- [#43084](https://github.com/sgl-project/sglang/pull/43084) [diffusion] Don't report video jobs completed after their outputs are deleted
- [#43492](https://github.com/sgl-project/sglang/pull/43492) [diffusion] comfyui: consolidate executor conditioning-cache fixes
- [#43490](https://github.com/sgl-project/sglang/pull/43490) [diffusion] comfyui: consolidate FluxAdapter correctness fixes
- [#43228](https://github.com/sgl-project/sglang/pull/43228) [1/N][DSv41] Enable DP attention with MegaMoE
- [#43634](https://github.com/sgl-project/sglang/pull/43634) [diffusion] MiniMax-H3: run the attention section eager under torch.compile
- [#43633](https://github.com/sgl-project/sglang/pull/43633) [diffusion] fix: replay Qwen-Image-2.1 BCG graphs across prompt lengths
- [#43632](https://github.com/sgl-project/sglang/pull/43632) [diffusion] fix: Qwen-Image BCG prompt padding misses every graph and attends the pad
- [#43577](https://github.com/sgl-project/sglang/pull/43577) [diffusion] torch.compile: keep Cosmos3's fused kernels in the graph
- [#43586](https://github.com/sgl-project/sglang/pull/43586) [diffusion] torch.compile: keep Qwen-Image-2.1 and Ulysses graphs whole
- [#43562](https://github.com/sgl-project/sglang/pull/43562) [PD][HiCache] Fold the decode restore outcome into the MIN-reduced KV poll
- [#37907](https://github.com/sgl-project/sglang/pull/37907) [diffusion] Support LLaDA-Image BF16 generation and editing

#### 🐛 New Issues
- [#43741](https://github.com/sgl-project/sglang/issues/43741) fp8 KV cache crashes QSA sparse attention kernels (tl.dot rejects bf16 query x fp8 key) 💬1
- [#43738](https://github.com/sgl-project/sglang/issues/43738) [Bug] DeepSeek-V4.1-Flash (dsv4 + DSPARK): multi-turn prefix cache degrades to a constant ~11.5K-token hit — 60–80K conversation prefix re-prefilled every turn (GLM-5.3-Flash unaffected in the same environment) 💬1
- [#43709](https://github.com/sgl-project/sglang/issues/43709) [Bug] Transcription multipart upload has no application-level size limit 💬1
- [#43707](https://github.com/sgl-project/sglang/issues/43707) [Bug] NanoNemotron globally disables PIL MAX_IMAGE_PIXELS and removes decompression-bomb protection 💬1
- [#43743](https://github.com/sgl-project/sglang/issues/43743) mhc_fused_post_pre crashes at graph capture: DeepGemm tf32_hc_prenorm_gemm API mismatch (n_splits-shaped output no longer accepted)
- [#43731](https://github.com/sgl-project/sglang/issues/43731) [Bug] [Diffusion] Concurrent instances: scheduler silently rebinds to port+42 and requests reach the other instance
- [#43730](https://github.com/sgl-project/sglang/issues/43730) [Bug][ROCm] NGRAM speculative decoding on a DSA model (GLM-5.3, gfx942): HSA 0x1016 on every rank after the first ~50k-token prompt
- [#43725](https://github.com/sgl-project/sglang/issues/43725) [Bug] NGRAM speculative decoding over-samples token id 0 at temperature > 0 (zero-padded draft tree)
- [#43710](https://github.com/sgl-project/sglang/issues/43710) [Bug] Qwen-VL decodes full-resolution video frames before applying the final pixel budget
- [#43708](https://github.com/sgl-project/sglang/issues/43708) [Bug] Decoded audio duration and sample count are unbounded during multimodal preprocessing
- [#43706](https://github.com/sgl-project/sglang/issues/43706) [Bug] Ordinary --api-key authorizes ADMIN_OPTIONAL management endpoints when --admin-api-key is unset
- [#43705](https://github.com/sgl-project/sglang/issues/43705) [Bug] Request-controlled GLM-V video budgets can bypass deployment limits before decoding
- [#43699](https://github.com/sgl-project/sglang/issues/43699) [Roadmap] Prefill-Decode Disaggregation Roadmap (2026 Q4) `PD Disaggregation`
- [#43671](https://github.com/sgl-project/sglang/issues/43671) [Feature][Diffusion] Add native SANA-Sprint 0.6B support
- [#43649](https://github.com/sgl-project/sglang/issues/43649) [Roadmap] PD Disaggregation Layerwise KV Transfer

#### 🔒 Closed Issues
- [#19637](https://github.com/sgl-project/sglang/issues/19637) SM120 Performance Optimization Plan
- [#35241](https://github.com/sgl-project/sglang/issues/35241) [Bug] Generation health checks can perturb DP user routing state and collapse long-prefill throughput
- [#28194](https://github.com/sgl-project/sglang/issues/28194) [Feature] Disable multimodal weights loading to free GPU memory
- [#29942](https://github.com/sgl-project/sglang/issues/29942) [Bug] DeepEP low_latency buffer lazy init fails during CUDA graph capture with PP=2, TP=8, DP-attention, EP=8 on Kimi K2.6 W4A8
- [#34522](https://github.com/sgl-project/sglang/issues/34522) [Bug] DSpark CUDA launch failure when concurrency=1 for Kimi-K3 (v0.5.17)
- [#34155](https://github.com/sgl-project/sglang/issues/34155) [Bug] 1M-token prefill kills the engine with CUDA OOM in DSV4 indexer fp8_mqa_logits (nonpaged path) under --tp 8 + MegaMoE on 8x B200 (v0.5.17); equivalent request serves under tp8/dp8 dp-attention
- [#33709](https://github.com/sgl-project/sglang/issues/33709) [Feature] Finish the B12X FlashInfer NVFP4 MoE integration for SM120 (#29190)
- [#33943](https://github.com/sgl-project/sglang/issues/33943) [Bug] DeepSeek-V4 DSpark draft crashes on SM120 because topk=192 misses FlashInfer decode dispatch
- [#34562](https://github.com/sgl-project/sglang/issues/34562) [RFC] HIP/ROCm - Provide a bit-exact SWA prefix reuse for DeepSeek-V4 with unified_kv atten backend
- [#42560](https://github.com/sgl-project/sglang/issues/42560) [Bug] Deprecated --dp-size N --enable-dp-attention resolves to dp_size=1 (attn_dp_size=N), so embedding integrations (NVIDIA Dynamo) register only DP rank 0; still present after #42348
- [#41892](https://github.com/sgl-project/sglang/issues/41892) [diffusion] LTX-2: overlap MP4 encode with VAE decode (follow-up to #41819)
- [#43395](https://github.com/sgl-project/sglang/issues/43395) ComfyUI-mode cannot load FLUX.1-schnell single-file checkpoints
- [#43489](https://github.com/sgl-project/sglang/issues/43489) [Bug] [diffusion] FluxAdapter crashes on latent sizes not divisible by patch size
- [#43488](https://github.com/sgl-project/sglang/issues/43488) [Bug] [diffusion] FluxAdapter silently drops Kontext ref_latents and ControlNet control
- [#43115](https://github.com/sgl-project/sglang/issues/43115) [Bug] [diffusion] ComfyUI Flux executor crashes when y (pooled_output) is None
- [#43741](https://github.com/sgl-project/sglang/issues/43741) fp8 KV cache crashes QSA sparse attention kernels (tl.dot rejects bf16 query x fp8 key)
- [#34631](https://github.com/sgl-project/sglang/issues/34631) [Bug] Guided decoding resumes one token too early for channel-framed reasoning formats (Muse Glimmer / ATEM)
- [#34594](https://github.com/sgl-project/sglang/issues/34594) [Bug] Erratic/poor mi325 issues on realistic agentic workloads qwen3.5 with prod inference optimizations like mtp enabled
- [#34593](https://github.com/sgl-project/sglang/issues/34593) [Bug] Erratic/poor mi300 issues on realistic agentic workloads qwen3.5 with prod inference optimizations like mtp enabled
- [#34582](https://github.com/sgl-project/sglang/issues/34582) [Bug] GLM-5.2 in DP-attention deadlock at first scheduled batch — all ranks wedge in prepare_mlp_sync_batch all-gather (2-node, TP=16, dp-size=2)
- [#29154](https://github.com/sgl-project/sglang/issues/29154) [Roadmap] SGLang CI Pipeline Planning for NPU（2026 Q3）
- [#34539](https://github.com/sgl-project/sglang/issues/34539) [Bug] LMCache and FlexKV ignore the effective committed KV length when storing finished requests
- [#31995](https://github.com/sgl-project/sglang/issues/31995) [Bug] DWDP unconditionally imports cuda.bindings → ModuleNotFoundError: No module named 'cuda' on non-CUDA platforms (XPU/CPU) during ModelRunner init
- [#34482](https://github.com/sgl-project/sglang/issues/34482) [Bug][Diffusion] --vae-tiling silently ignored for Sana: AutoencoderDC wrapper lacks enable_tiling, causing fatal OOM on 8GB GPUs
- [#43331](https://github.com/sgl-project/sglang/issues/43331) [Bug] CuTe DSL GDN decode reads the state pool transposed, producing garbage output
- [#43080](https://github.com/sgl-project/sglang/issues/43080) [Bug] Video jobs can complete after temporary outputs are deleted
- [#43111](https://github.com/sgl-project/sglang/issues/43111) [Bug] [diffusion] ComfyUI executor crashes when ComfyUI batches a DiT call (cfg > 1 or batch_size > 1)
- [#43107](https://github.com/sgl-project/sglang/issues/43107) [Bug] [diffusion] ComfyUI executor cond key collision reuses another prompt's conditioning
- [#43487](https://github.com/sgl-project/sglang/issues/43487) [Bug] [diffusion] Multiple FluxAdapter correctness issues in ComfyUI SGLDiffusion

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 130,869 · **Open issues:** 2,520 · **Last push:** 4h ago

In the last 24 hours, llama.cpp released versions b11559, b11558, b11557, b11556, and b11555, with key updates including OpenCL improvements for Gemma-4 GPU decode and fixes for AVX2 CPU compatibility with F16C. Noteworthy merged pull requests involved enhancing the OpenCL workflow for dense bin kernels, refining RPC debug verbosity, and adding runtime support for Prism Bonsai 2 27B. Notably, a new issue was raised regarding an evaluation bug in the server's handling of whitespace for Qwen3.5+ chat templates, which could impact prefix-cache invalidation. Overall, updates focused on enhancing performance and compatibility across various platforms while addressing critical bugs.

#### 🚀 New Releases
- [b11559](https://github.com/ggml-org/llama.cpp/releases/tag/b11559) b11559
- [b11558](https://github.com/ggml-org/llama.cpp/releases/tag/b11558) b11558
- [b11557](https://github.com/ggml-org/llama.cpp/releases/tag/b11557) b11557
- [b11556](https://github.com/ggml-org/llama.cpp/releases/tag/b11556) b11556
- [b11555](https://github.com/ggml-org/llama.cpp/releases/tag/b11555) b11555
- [b11554](https://github.com/ggml-org/llama.cpp/releases/tag/b11554) b11554
- [b11553](https://github.com/ggml-org/llama.cpp/releases/tag/b11553) b11553

#### ✅ Merged PRs
- [#30266](https://github.com/ggml-org/llama.cpp/pull/30266) opencl: improve fa, allow dk512 for gemma-4, improve dk64
- [#30310](https://github.com/ggml-org/llama.cpp/pull/30310) opencl: fix image limit for q4_k dense bin kernels, q4_0 bcast and rms_norm
- [#29544](https://github.com/ggml-org/llama.cpp/pull/29544) rpc : turn GGML_RPC_DEBUG into a verbosity level and add logs
- [#29998](https://github.com/ggml-org/llama.cpp/pull/29998) vulkan: handle mul_mat_id duplicates in the prepass rather than looping
- [#29600](https://github.com/ggml-org/llama.cpp/pull/29600) Runtime support for Prism Bonsai 2 27B
- [#30270](https://github.com/ggml-org/llama.cpp/pull/30270) cpu: fix AVX2 CPUs not using F16C when available
- [#30312](https://github.com/ggml-org/llama.cpp/pull/30312) server: add component tests

#### 🐛 New Issues
- [#30357](https://github.com/ggml-org/llama.cpp/issues/30357) Eval bug: server: reasoning/content whitespace is not round-trippable for Qwen3.5+ chat templates → prefix-cache invalidation (full re-prefill on hybrid models) when the model emits non-canonical whitespace `bug-unconfirmed`
- [#30349](https://github.com/ggml-org/llama.cpp/issues/30349) Misc. bug: communcation between llama-server router and instances should be authenticated `bug-unconfirmed`
- [#30342](https://github.com/ggml-org/llama.cpp/issues/30342) Misc. bug: ~7% slower CPU-side MoE decode on AVX2+F16C since #30270 (Clang vpinsrw merge on the accumulator)
- [#30334](https://github.com/ggml-org/llama.cpp/issues/30334) Misc. bug: CUDA: P40 and the MMVQ fusion check for pascal. the fusion check misses 6.1, so it stays on for P40 `bug-unconfirmed`
- [#30332](https://github.com/ggml-org/llama.cpp/issues/30332) Feature Request: ROCm prefill, Vulkan generation `enhancement`
- [#30323](https://github.com/ggml-org/llama.cpp/issues/30323) perf: pooled embeddings context copies full-vocab logits to host on every decode (1.55x slower GPU embedding with Qwen3-Embedding)
- [#30322](https://github.com/ggml-org/llama.cpp/issues/30322) Misc. bug: uloading model to a GH200 takes ages `bug-unconfirmed`
- [#30321](https://github.com/ggml-org/llama.cpp/issues/30321) json-schema-to-grammar: optional field listed before a required one gets dropped
- [#30317](https://github.com/ggml-org/llama.cpp/issues/30317) Feature Request: compute buffers are over-allocated ~N× under -sm tensor (N devices) `enhancement`

#### 🔒 Closed Issues
- [#27109](https://github.com/ggml-org/llama.cpp/issues/27109) CUDA: 4-bit KV cache (q4_1/q4_0) collapses prefill to ~34 t/s on qwen35 hybrid (RTX 3090, MMQ guard passes)
- [#27845](https://github.com/ggml-org/llama.cpp/issues/27845) Eval bug: potential memory leak with using `-sm tensor` during token generation with dual Intel B70 SYCL backend
- [#27761](https://github.com/ggml-org/llama.cpp/issues/27761) Misc. bug: ROCm FA: only q8_0/q8_0 and q4_0/q4_0 KV cache works, all other types cause 34 graph splits (pp512 drops ~68%)
- [#27829](https://github.com/ggml-org/llama.cpp/issues/27829) Eval bug: DFlash2: --split-mode tensor aborts with SPLIT_AXIS_UNKNOWN on ROCm (Qwen3.8-27B, 2x RX 7900 XTX)
- [#27886](https://github.com/ggml-org/llama.cpp/issues/27886) Eval bug: Qwen3.8-Flash-Next vision issue
- [#27839](https://github.com/ggml-org/llama.cpp/issues/27839) Combined --spec-type draft-dflash,draft-mtp,ngram-mod with -md draft fails at init: MTP context requested from non-MTP draft model
- [#27840](https://github.com/ggml-org/llama.cpp/issues/27840) Eval bug: mmap and tensor-read-lazy lead to constant disk writing on Windows
- [#27527](https://github.com/ggml-org/llama.cpp/issues/27527) Misc. bug: Checkpoints not happening consistently
- [#27872](https://github.com/ggml-org/llama.cpp/issues/27872) Compile bug: --fit silently aborts when --cpu-moe/--n-cpu-moe sets tensor_buft_overrides, leading to OOM on compute buffer allocation
- [#27876](https://github.com/ggml-org/llama.cpp/issues/27876) Eval bug: ling 3 tiny (BailingMoeV3 architecture) repeating slashes
- [#27899](https://github.com/ggml-org/llama.cpp/issues/27899) Eval bug: NaN logits on CUDA for specific k-quant mixes of a Laguna (118B MoE) model; CPU clean; test-backend-ops MUL_MAT_ID passes
- [#27905](https://github.com/ggml-org/llama.cpp/issues/27905) Eval bug: Flash-attention fatal error (fattn.cu) over RPC with certain KV cache quant types
- [#27918](https://github.com/ggml-org/llama.cpp/issues/27918) CUDA: VMM pool 32 GB VA cap blocks full offload of >32 GB models on unified-memory GPUs (GB10/GH200) — hangs instead of failing

### Ollama (`ollama/ollama`)

**Stars:** 182,792 · **Open issues:** 4,257 · **Last push:** 5h ago

On October 12, 2026, there were no new releases or merged pull requests for Ollama, indicating a routine maintenance day. Among the new issues logged, the most significant is #18944, which reports problems with models being unable to utilize tool-calls when the format is set to JSON. Additionally, issue #18926 raises concerns about the glm-5.3 model hanging on exit with the client, highlighting a critical functionality problem. Other issues include precision loss in tool-call arguments for the Go API (#18942) and a problem with prompt timings in the OpenAI implementation (#18948).

#### 🐛 New Issues
- [#18944](https://github.com/ollama/ollama/issues/18944) Models can't use tool-calls when format is set to json `bug` 💬3
- [#18926](https://github.com/ollama/ollama/issues/18926) [Cloud] glm-5.3-flash / glm-5.3 hang the client on exit — stream never terminates `bug` 💬2
- [#18950](https://github.com/ollama/ollama/issues/18950) Scheduler reloads the model when a request's `shift` differs from the loaded runner's; launch shift-capable and enforce `shift:false` per request instead 💬1
- [#18942](https://github.com/ollama/ollama/issues/18942) Go API: tool-call arguments silently lose numeric precision 💬1
- [#18948](https://github.com/ollama/ollama/issues/18948) openai: timings.prompt_per_second divides the total prompt by the uncached-only time (inflated by the cache hit ratio)
- [#18943](https://github.com/ollama/ollama/issues/18943) openai: reasoning_effort "xhigh" is rewritten to "max", breaking Qwen3.8 chat templates (HTTP 500)
- [#18940](https://github.com/ollama/ollama/issues/18940) [macOS/Metal] MLX SDPA kernel panic on M2 Max: Maximum threads per threadgroup is 896 but requested 960 (Qwen 3.8 / Gemma 4) `bug` `mlx`
- [#18938](https://github.com/ollama/ollama/issues/18938) OLLAMA_NUM_PARALLEL is silently forced to 1 for hybrid architectures (qwen35moe and others); one slot means one prompt cache for every client

#### 🔒 Closed Issues
- [#7288](https://github.com/ollama/ollama/issues/7288) embedding generation failed. wsarecv: An existing connection was forcibly closed by the remote host.
- [#12940](https://github.com/ollama/ollama/issues/12940) Ollama Runner Fails with “Exit Status 2” and Random Non-Responsive Behavior on Windows
- [#13037](https://github.com/ollama/ollama/issues/13037) `ollama run` in Windows 0.12.4+ doesn't start the server.
- [#17341](https://github.com/ollama/ollama/issues/17341) Paid for API access but cannot access the service — no support response
- [#8329](https://github.com/ollama/ollama/issues/8329) dolphin3 template doesn't support tools
- [#6887](https://github.com/ollama/ollama/issues/6887) `temperature` for reader-lm should be 0
- [#8431](https://github.com/ollama/ollama/issues/8431) Embedding with bge-large:latest fails with "GGML_ASSERT(i01 >= 0 && i01 < ne01) failed"
- [#18943](https://github.com/ollama/ollama/issues/18943) openai: reasoning_effort "xhigh" is rewritten to "max", breaking Qwen3.8 chat templates (HTTP 500)
- [#18938](https://github.com/ollama/ollama/issues/18938) OLLAMA_NUM_PARALLEL is silently forced to 1 for hybrid architectures (qwen35moe and others); one slot means one prompt cache for every client

### LiteLLM (`BerriAI/litellm`)

**Stars:** 60,983 · **Open issues:** 5,429 · **Last push:** <1h ago

On October 12, 2026, LiteLLM released version v1.106.0-rc.1, alongside the stable v1.105.0 and v1.104.3, all of which are now signed with cosign for enhanced security verification. Significant merged features include the addition of native Bedrock Claude and OpenRouter messages in Rust, as well as support for Tencent Messages API. Fixes were implemented to ensure that context and output limits are properly sourced from the Bedrock model cards and to correct deprecation dates in Azure AI model documentation. A notable new issue reported is a bug (#45944) regarding the A2AConfig that incorrectly declares support for temperature, max_tokens, and top_p, only to drop them without notice.

#### 🚀 New Releases
- [v1.106.0-rc.1](https://github.com/BerriAI/litellm/releases/tag/v1.106.0-rc.1) v1.106.0-rc.1
- [v1.105.0](https://github.com/BerriAI/litellm/releases/tag/v1.105.0) v1.105.0
- [v1.104.3](https://github.com/BerriAI/litellm/releases/tag/v1.104.3) v1.104.3

#### ✅ Merged PRs
- [#45937](https://github.com/BerriAI/litellm/pull/45937) test: migrate proxy security, schema migration and MCP legacy tests
- [#45908](https://github.com/BerriAI/litellm/pull/45908) feat(rust): add native Bedrock Claude Platform and Mantle Messages
- [#45910](https://github.com/BerriAI/litellm/pull/45910) feat(rust): add native OpenRouter Messages
- [#45899](https://github.com/BerriAI/litellm/pull/45899) feat(rust): support Tencent Messages API
- [#45980](https://github.com/BerriAI/litellm/pull/45980) fix(bedrock): take context, output limits and EOL dates from the Bedrock model cards
- [#45896](https://github.com/BerriAI/litellm/pull/45896) feat(rust): support MiniMax Messages API
- [#45969](https://github.com/BerriAI/litellm/pull/45969) test: remove pass-through and user_api_key_auth coverage scripts that no CI job runs
- [#45976](https://github.com/BerriAI/litellm/pull/45976) fix(bedrock): take the GLM 4.7 max output tokens from the Bedrock model cards
- [#45689](https://github.com/BerriAI/litellm/pull/45689) refactor(rust_bridge): route Python state reads through host modules
- [#43982](https://github.com/BerriAI/litellm/pull/43982) fix(bedrock_mantle): send max_completion_tokens for gpt-5.6 and gpt-6 chat completions
- [#45955](https://github.com/BerriAI/litellm/pull/45955) test(migrations): assert lock-timeout retry and exhaustion instead of an unbounded wait
- [#45958](https://github.com/BerriAI/litellm/pull/45958) ci: trigger the gateway-dev deploy on every main push
- [#45939](https://github.com/BerriAI/litellm/pull/45939) test: migrate tests/proxy_behavior into integration and unit tiers
- [#45914](https://github.com/BerriAI/litellm/pull/45914) feat(ui): backport decision auto-router setup to 1.104
- [#45938](https://github.com/BerriAI/litellm/pull/45938) ci: run every CircleCI check from the integration workflow
- [#45943](https://github.com/BerriAI/litellm/pull/45943) refactor(types): replace Any with proven types in 12 files
- [#45940](https://github.com/BerriAI/litellm/pull/45940) test: migrate legacy unit dirs and unrun folders into tests/unit, tests/integration and tests/e2e
- [#45945](https://github.com/BerriAI/litellm/pull/45945) fix(azure): move azure_ai/kimi-k2.7-code deprecation_date to the Models API date
- [#45934](https://github.com/BerriAI/litellm/pull/45934) fix(home): serve the bundled whats_new.json by default so a build shows only its own launches
- [#45863](https://github.com/BerriAI/litellm/pull/45863) fix(ci): isolate integration workers and repair test fixtures
- [#45935](https://github.com/BerriAI/litellm/pull/45935) fix(guardrails): restore supported_decisions_providers on stable/1.104.x so Add Guardrail settings load
- [#45936](https://github.com/BerriAI/litellm/pull/45936) fix(guardrails): import the decisions provider list from litellm.decisions.call on stable/1.104.x
- [#45759](https://github.com/BerriAI/litellm/pull/45759) test: migrate tests/llm_translation into unit, integration and e2e tiers
- [#45925](https://github.com/BerriAI/litellm/pull/45925) test(security): pin the What's new catalog local in the canary egress rig
- [#45758](https://github.com/BerriAI/litellm/pull/45758) test: migrate SDK and proxy-booting legacy CircleCI tests to their tiers
- [#45933](https://github.com/BerriAI/litellm/pull/45933) fix(ui): backport Decisions yes / no answer type label to rc/1.106.0 (#45931)
- [#45931](https://github.com/BerriAI/litellm/pull/45931) fix(ui): label the Decisions yes / no answer type instead of noul
- [#45722](https://github.com/BerriAI/litellm/pull/45722) fix(databricks): call the ai_decide AI Function route for decisions and the auto-router
- [#45930](https://github.com/BerriAI/litellm/pull/45930) chore: rebuild Admin UI bundle for rc/1.106.0
- [#45903](https://github.com/BerriAI/litellm/pull/45903) feat(ui): restyle the Decisions playground, form first with a read-only cURL tab
- [#45929](https://github.com/BerriAI/litellm/pull/45929) feat(ui): backport the form-first Decisions playground restyle to rc/1.106.0
- [#45927](https://github.com/BerriAI/litellm/pull/45927) chore: rebuild Admin UI bundle for rc/1.105.0
- [#45924](https://github.com/BerriAI/litellm/pull/45924) chore: rebuild Admin UI bundle for stable/1.104.x
- [#45911](https://github.com/BerriAI/litellm/pull/45911) feat(ui): backport the Home page dashboard root to rc/1.106.0
- [#45922](https://github.com/BerriAI/litellm/pull/45922) fix(home): serve the bundled whats_new.json by default on rc/1.106.0
- [#45915](https://github.com/BerriAI/litellm/pull/45915) feat(ui): backport decision auto-router setup to 1.105
- [#45916](https://github.com/BerriAI/litellm/pull/45916) feat(ui): backport decision auto-router setup to 1.106
- [#45891](https://github.com/BerriAI/litellm/pull/45891) feat(decisions): backport the rest of the decisions and System One launch to rc/1.106.0
- [#45905](https://github.com/BerriAI/litellm/pull/45905) feat(decisions): backport the decisions and Jev follow-ups to rc/1.105.0 without the playground
- [#45917](https://github.com/BerriAI/litellm/pull/45917) test: model the team membership lookup in MCP DCR admission fixtures and assert decisions call types per route
- [#45906](https://github.com/BerriAI/litellm/pull/45906) feat(decisions): backport the decisions and Jev follow-ups to stable/1.104.x and bump to 1.104.3
- [#45913](https://github.com/BerriAI/litellm/pull/45913) feat(ui): streamline auto-router setup with deployed decision models
- [#45912](https://github.com/BerriAI/litellm/pull/45912) feat(ui): load Home page What's new launches from /public/whats_new at runtime
- [#45474](https://github.com/BerriAI/litellm/pull/45474) feat(decisions): accept decisions as a model mode alongside evaluation

#### 🐛 New Issues
- [#45944](https://github.com/BerriAI/litellm/issues/45944) [Bug]: A2AConfig declares temperature, max_tokens and top_p as supported then silently drops all three `llm translation` 💬4
- [#45975](https://github.com/BerriAI/litellm/issues/45975) [Bug]: rerank on the huggingface provider (TEI) always costs $0, configured input_cost_per_query is ignored `llm translation` 💬1
- [#45948](https://github.com/BerriAI/litellm/issues/45948) [Bug]: Per-request `fallbacks` in a multipart /v1/images/edits request is iterated one character at a time `bug` 💬1
- [#45991](https://github.com/BerriAI/litellm/issues/45991) [Bug]: Gemini tool-use prompt tokens are added to prompt_tokens but not billed `llm translation`
- [#45988](https://github.com/BerriAI/litellm/issues/45988) [Bug]: Startup schema check suggests an invalid primary-key rewrite for partitioned SpendLogs
- [#45987](https://github.com/BerriAI/litellm/issues/45987) [Bug]: router_settings.enable_pre_call_checks: true does not enforce deployment rpm on /v1/messages `llm translation`
- [#45964](https://github.com/BerriAI/litellm/issues/45964) [Bug]: MCP REST OpenAPI loader rejects YAML documents
- [#45949](https://github.com/BerriAI/litellm/issues/45949) [Bug]: RouterRateLimitError in litellm/router.py `bug` `llm translation`

#### 🔒 Closed Issues
- [#27550](https://github.com/BerriAI/litellm/issues/27550) [Feature]: Add an LLM as an orchestrator to choose which LLM to call in the gateway
- [#27655](https://github.com/BerriAI/litellm/issues/27655) Responses API → Chat Completions transformation silently passes through unsupported built-in tool types
- [#32229](https://github.com/BerriAI/litellm/issues/32229) [Bug]: MCP Gateway mcp-rest/tools/list silently caps at 100 tools and fails to follow pagination
- [#31882](https://github.com/BerriAI/litellm/issues/31882) feat(bedrock-invoke): enable native structured output for supported Claude models
- [#31862](https://github.com/BerriAI/litellm/issues/31862) bug(spend-tracking): get_cache_key called for call types not in supported_call_types, polluting spend log cache_key column
- [#31871](https://github.com/BerriAI/litellm/issues/31871) fix(anthropic): use model capability flag for response_format routing + eager_input_streaming + citation offsets
- [#31879](https://github.com/BerriAI/litellm/issues/31879) fix(vertex): accumulate JSON list buffer across stream chunks
- [#31881](https://github.com/BerriAI/litellm/issues/31881) feat(akto): add during_call support, streaming end-of-stream mode, and model-group scoping
- [#32140](https://github.com/BerriAI/litellm/issues/32140) [Bug]: Router fallback between vertex_ai and gemini replays endpoint-bound thought signatures -> 400 "Corrupted thought signature" (Gemini 3.x)
- [#32206](https://github.com/BerriAI/litellm/issues/32206) [Bug]: Compliance checks (GDPR / EU AI Act) report NON-COMPLIANT when guardrail_mode is a list (e.g. Presidio with output_parse_pii)
- [#32217](https://github.com/BerriAI/litellm/issues/32217) [Bug]: Check Duplicate Issues workflow crashes with JSONDecodeError in close_duplicate_issues.py
- [#32232](https://github.com/BerriAI/litellm/issues/32232) [Bug]: Redis Lua rate limiter breaks behind SCRIPT-blocking proxies (Codis, Twemproxy), silently dropping to per-pod in-memory limits
- [#32201](https://github.com/BerriAI/litellm/issues/32201) [Bug]: `post_call` guardrails attached to a pass-through endpoint are consulted but never enforce (e.g. `tool_permission` does not block)
- [#32211](https://github.com/BerriAI/litellm/issues/32211) 不支持 deepseek v4 flash？
- [#32216](https://github.com/BerriAI/litellm/issues/32216) [Feature]: Auto-route Vertex AI Interactions passthrough by project and location
- [#32220](https://github.com/BerriAI/litellm/issues/32220) [Feature]: Per-User MCP Credential Providers with Automatic Header Injection
- [#32223](https://github.com/BerriAI/litellm/issues/32223) [Question] dynamic_rate_limiter_v3: recommended default_priority config, over-allocation behavior, and per-model priority reservation
- [#32245](https://github.com/BerriAI/litellm/issues/32245) [Bug]: After the Teams setup, the api-key not reset automatically
- [#32247](https://github.com/BerriAI/litellm/issues/32247) Proxy spend update can repopulate stale virtual-key auth cache
- [#32249](https://github.com/BerriAI/litellm/issues/32249) [Bug]: The token path in cookie is not aligned with SERVER_ROOT_PATH.
- [#32250](https://github.com/BerriAI/litellm/issues/32250) [Bug]: Tuple dict keys in `metadata` crash `spend_tracking_utils.py` and cause unbounded memory growth

### Unsloth (`unslothai/unsloth`)

**Stars:** 77,809 · **Open issues:** 531 · **Last push:** <1h ago

On October 12, 2026, there were no new releases for Unsloth, but several significant pull requests were merged, including enhancements to GPU compatibility with the addition of Vulkan support for AMD GPUs and optimizations for DiffusionGemma GGUF files. Noteworthy fixes include preventing the display of certain files as models in Bonsai and resolving image and video load errors related to various torch versions. The new issues released included a bug concerning idle Python CPU spin linked to the OpenBLAS cap and a problem with downloaded GGUF files not being listed correctly when sharing a quant label. Overall, the day focused on improving existing features and addressing various bugs within the system.

#### ✅ Merged PRs
- [#13312](https://github.com/unslothai/unsloth/pull/13312) Studio: fit an oversized DiffusionGemma GGUF to the GPU in Auto mode
- [#13330](https://github.com/unslothai/unsloth/pull/13330) Studio: launch q4_0 instead of iq4_nl KV cache on CUDA/HIP GPUs
- [#13297](https://github.com/unslothai/unsloth/pull/13297) Studio: skip the SNAC detokenize probe when the ids are past the vocab
- [#13298](https://github.com/unslothai/unsloth/pull/13298) Studio: install the Vulkan audio.cpp build on AMD GPUs
- [#13296](https://github.com/unslothai/unsloth/pull/13296) Studio: let a text Expression column in Data Recipes render empty
- [#13300](https://github.com/unslothai/unsloth/pull/13300) Studio: list Kimi K3 for Kimi API keys
- [#13320](https://github.com/unslothai/unsloth/pull/13320) Keep offloaded embeddings in host RAM when Trainer and accelerate place the model
- [#13304](https://github.com/unslothai/unsloth/pull/13304) Studio: explain GGUFs the bundled llama.cpp cannot read, and default Ternary Bonsai to its loadable pack
- [#13323](https://github.com/unslothai/unsloth/pull/13323) Studio (AMD/ROCm): use MIOpen immediate mode for image and video convs
- [#11265](https://github.com/unslothai/unsloth/pull/11265) Studio: stop listing Bonsai DSpark drafter files as models
- [#11367](https://github.com/unslothai/unsloth/pull/11367) Studio: keep loop notes ahead of the MCP image envelope
- [#13307](https://github.com/unslothai/unsloth/pull/13307) Studio: gate auth.db and rag.db opens and closes against the SQLite 3.51.0-3.51.1 deadlock
- [#13329](https://github.com/unslothai/unsloth/pull/13329) Studio: pair torch <= 2.8 with torchao 0.15 and gate torchao export on 0.15
- [#13336](https://github.com/unslothai/unsloth/pull/13336) torchao alias tests: stop leaving a fake diffusers in sys.modules
- [#13308](https://github.com/unslothai/unsloth/pull/13308) Studio: fix image and video loads on torchao 0.14 (FqnToConfig import error with diffusers 0.41)
- [#13223](https://github.com/unslothai/unsloth/pull/13223) Studio: remember Max Tokens on Max as Max, not as the old context length
- [#13315](https://github.com/unslothai/unsloth/pull/13315) Apply an explicit rope_scaling to the model and to vLLM
- [#13309](https://github.com/unslothai/unsloth/pull/13309) Intel XPU: 4bit loads without a C compiler by falling back to bitsandbytes' PyTorch quantize
- [#13319](https://github.com/unslothai/unsloth/pull/13319) Studio: keep llama.cpp's Metal fit inside the GPU wired headroom
- [#13316](https://github.com/unslothai/unsloth/pull/13316) Studio: reload without MTP when llama-server dies mid-generation on any MTP launch
- [#13227](https://github.com/unslothai/unsloth/pull/13227) Studio: fix torch.compile for image generation on AMD (training config leak, Windows without Visual Studio, max tier)
- [#13306](https://github.com/unslothai/unsloth/pull/13306) Studio: price the int8 ConvRot text encoder on Apple Silicon when the dense one is still cached
- [#13289](https://github.com/unslothai/unsloth/pull/13289) Unsloth Studio: export a trained image LoRA from the Train tab, list exported copies once
- [#13301](https://github.com/unslothai/unsloth/pull/13301) Studio (Windows): read a runtime lock held by an elevated Unsloth process as busy, not a broken install
- [#13263](https://github.com/unslothai/unsloth/pull/13263) Studio: torch 2.13 for new Windows x64 cu130 Python 3.13 installs, existing installs keep their torch
- [#13262](https://github.com/unslothai/unsloth/pull/13262) Studio: install prebuilt flash-attn, causal-conv1d and mamba-ssm wheels on Windows and ARM
- [#13261](https://github.com/unslothai/unsloth/pull/13261) Build the prebuilt CUDA 13 kernel wheels for Windows and ARM (win_amd64, linux_aarch64, win_arm64)
- [#13305](https://github.com/unslothai/unsloth/pull/13305) Studio installer (macOS): start the Unsloth Studio.app shortcut natively on Apple Silicon
- [#13156](https://github.com/unslothai/unsloth/pull/13156) Run GRPO under FSDP2: no inference mode around FSDP, and an optimizer that steps DTensors
- [#13122](https://github.com/unslothai/unsloth/pull/13122) Studio: draw browser menus, tooltips and toasts over a live native page
- [#10679](https://github.com/unslothai/unsloth/pull/10679) Studio: keep export status polling single-flight
- [#13241](https://github.com/unslothai/unsloth/pull/13241) Studio: shared media bar, Open with apps, steady image lightbox
- [#13142](https://github.com/unslothai/unsloth/pull/13142) Studio: keep the export Save folder input as typed
- [#13288](https://github.com/unslothai/unsloth/pull/13288) Studio: pair Qwen3.5 / 3.6 vision projectors from another quantizer
- [#13238](https://github.com/unslothai/unsloth/pull/13238) Studio: stop dropdowns jumping on open under Reduce Motion
- [#13078](https://github.com/unslothai/unsloth/pull/13078) Studio: move chat with files into a panel above the composer
- [#13293](https://github.com/unslothai/unsloth/pull/13293) Studio: bound the ChatGPT subscription and NPU disconnect watcher teardown
- [#12785](https://github.com/unslothai/unsloth/pull/12785) Studio: install and run vLLM on AMD GPUs, on Linux and through WSL on Windows
- [#13282](https://github.com/unslothai/unsloth/pull/13282) Studio: name an MLX or managed-engine token count by the id status publishes
- [#13234](https://github.com/unslothai/unsloth/pull/13234) Run packed rows on the transformers modeling path through varlen flash attention
- [#13290](https://github.com/unslothai/unsloth/pull/13290) Studio: resolve the FLUX.2-klein 9B base for a local ComfyUI file
- [#13287](https://github.com/unslothai/unsloth/pull/13287) Studio: let an MCP call run again after other work changed state
- [#13281](https://github.com/unslothai/unsloth/pull/13281) Studio: keep a media chat's context usage after a local model switch
- [#13286](https://github.com/unslothai/unsloth/pull/13286) Studio (Jetson): size llama-server context from system RAM when nvidia-smi reports [N/A]
- [#13229](https://github.com/unslothai/unsloth/pull/13229) Studio: keep auto-load and compare panes off the default engine for compressed-tensors, AWQ and GPTQ checkpoints
- [#13235](https://github.com/unslothai/unsloth/pull/13235) Studio: start vLLM on hybrid models whose Mamba state outruns max_num_seqs
- [#13284](https://github.com/unslothai/unsloth/pull/13284) Installer: name the missing tools, not Debian packages, on non-apt Linux
- [#13285](https://github.com/unslothai/unsloth/pull/13285) Studio: name a missing GGUF metadata key instead of blaming the file or memory
- [#12767](https://github.com/unslothai/unsloth/pull/12767) [Bug] Images tab only show Reference/Edit, etc sections if its pinned to the sidebar
- [#11634](https://github.com/unslothai/unsloth/pull/11634) Studio: check loopback for an existing listener before taking the port
- [#10378](https://github.com/unslothai/unsloth/pull/10378) feat(api-monitor): add Load button to API page toolbar
- [#13242](https://github.com/unslothai/unsloth/pull/13242) Studio: stop charging SWA context checkpoints against VRAM on discrete GPUs
- [#13153](https://github.com/unslothai/unsloth/pull/13153) Run the RoPE and NF4 Triton kernels on GPUs older than Volta
- [#13259](https://github.com/unslothai/unsloth/pull/13259) Treat Docker on WSL2 as WSL when deciding embedding offload
- [#13190](https://github.com/unslothai/unsloth/pull/13190) Pass GradScaler to GKD chunked JSD with an older-Zoo fallback
- [#13254](https://github.com/unslothai/unsloth/pull/13254) Skip the fused LoRA kernels when a DoRA adapter is active
- [#13154](https://github.com/unslothai/unsloth/pull/13154) Keep the padding mask for left-padded label-less training forwards
- [#13264](https://github.com/unslothai/unsloth/pull/13264) Studio vLLM: allow Triton non-constexpr globals so DeepSeek-OCR loads
- [#13221](https://github.com/unslothai/unsloth/pull/13221) Packed SDPA rows: one torch varlen_attn call instead of one SDPA call per segment
- [#13152](https://github.com/unslothai/unsloth/pull/13152) Fix fp16 LoRA training with plain transformers.Trainer (fused CE gradients underflowed)
- [#13232](https://github.com/unslothai/unsloth/pull/13232) Studio: pick up a GPU whose driver loads after Studio starts
- [#13249](https://github.com/unslothai/unsloth/pull/13249) Fix steering follow-ups disappearing when a response is cancelled
- [#13274](https://github.com/unslothai/unsloth/pull/13274) Studio: title refresh follows the connection that answered the chat
- [#13273](https://github.com/unslothai/unsloth/pull/13273) Studio: confine native dataset drops to the account workspace; cap child API key expiry
- [#13275](https://github.com/unslothai/unsloth/pull/13275) Docs: secure-mode Docker comment also binds JupyterLab to 127.0.0.1
- [#13250](https://github.com/unslothai/unsloth/pull/13250) Studio: select all and shift-click ranges in the Library
- [#13148](https://github.com/unslothai/unsloth/pull/13148) chore(deps): apply six validated Studio dependency bumps
- [#13266](https://github.com/unslothai/unsloth/pull/13266) OpenClaw 2026.10.1: define the CI agent under keyed agents.entries
- [#13247](https://github.com/unslothai/unsloth/pull/13247) Studio installer: drop a flash-attn built for a torch that is gone, and pair torch 2.9 with torchao 0.15.0
- [#13272](https://github.com/unslothai/unsloth/pull/13272) Disconnect tests: give the hanging client seconds, not 0.2 s, to be reached
- [#13228](https://github.com/unslothai/unsloth/pull/13228) Studio: add a tool output length setting to Settings > Chat
- [#13265](https://github.com/unslothai/unsloth/pull/13265) Tests: fix three checks that fail for reasons other than a regression
- [#13231](https://github.com/unslothai/unsloth/pull/13231) Unsloth Studio (AMD, Windows): don't treat a GPU whose multi-arch kernel pack is missing as covered
- [#13237](https://github.com/unslothai/unsloth/pull/13237) Studio: keep the sidebar More flyout shut when a modal opens during its hover delay
- [#13258](https://github.com/unslothai/unsloth/pull/13258) README: point notebook-only Docker users at the core tag again

#### 🐛 New Issues
- [#13338](https://github.com/unslothai/unsloth/issues/13338) [Desktop] Idle Python CPU spin: OpenBLAS cap merged after latest release; wake-up cause unresolved 💬1
- [#13328](https://github.com/unslothai/unsloth/issues/13328) [Bug] Diffusion GGUF with general.architecture=qwen_image21 is filed as text-generation and hidden from the Images page 💬1
- [#13327](https://github.com/unslothai/unsloth/issues/13327) [Bug] Downloaded GGUF never listed: sibling files sharing a quant label are dropped from the variant list (huihui-ai abliterated Swift-1.5) 💬1
- [#13337](https://github.com/unslothai/unsloth/issues/13337) [Bug] Music generation cuts off at exact length instead of finishing song `feature request` `bug`
- [#13321](https://github.com/unslothai/unsloth/issues/13321) [Feature] `feature request`

#### 🔒 Closed Issues
- [#4037](https://github.com/unslothai/unsloth/issues/4037) [Bug] JambaAttention has no attribute `feed_forward`
- [#11792](https://github.com/unslothai/unsloth/issues/11792) [Bug]? Unable to run Qwen Image 2.1 Q4_K_M on an M5 Max with 48 gb?
- [#4644](https://github.com/unslothai/unsloth/issues/4644) [Bug] Unsloth Studio: models run on CPU instead of the NVIDIA GPU (RTX 3090 on Windows, also Linux)
- [#9008](https://github.com/unslothai/unsloth/issues/9008) Studio: server deadlocks with every thread blocked in `sqlite3.connect()` / `close()` and stops accepting connections
- [#6305](https://github.com/unslothai/unsloth/issues/6305) [Bug] Failing to attach images in the chat of vision-capable models
- [#5941](https://github.com/unslothai/unsloth/issues/5941) Unsloth keeps using my CPU for inference. and I found the reason and solution!
- [#7306](https://github.com/unslothai/unsloth/issues/7306) [Bug] Error on Fine Tuning LFM2.5 230M
- [#3226](https://github.com/unslothai/unsloth/issues/3226) [Bug] OOM-ing with Gemma 3N but not Gemma 3
- [#5344](https://github.com/unslothai/unsloth/issues/5344) [Bug] Unsloth Studio: Local safetensors model loads in full precision (high VRAM) instead of 4-bit QLoRA, but loading via GGUF ID works correctly
- [#12836](https://github.com/unslothai/unsloth/issues/12836) [Feature] Unsloth docs: Document Intel GPU pin for Unsloth Studio install
- [#7125](https://github.com/unslothai/unsloth/issues/7125) [Bug] The model does not work correctly when calling the tools.
- [#3375](https://github.com/unslothai/unsloth/issues/3375) [Question] How to finetune and do GPRO for LLada MoE model with Open R1 Math
- [#4867](https://github.com/unslothai/unsloth/issues/4867) DGX Spark (GB10 Blackwell, aarch64): transformers patches required for inference and Studio
- [#4675](https://github.com/unslothai/unsloth/issues/4675) [Feature] [Studio Beta] Streamlining Recipe to Training workflow and data format flexibility
- [#11259](https://github.com/unslothai/unsloth/issues/11259) [Bug] Bonsai models suddenly do not load at all.
- [#5752](https://github.com/unslothai/unsloth/issues/5752) [Bug] Studio: Unusually high? VRAM usage when QLoRA training
- [#9279](https://github.com/unslothai/unsloth/issues/9279) Incompatible with Unsloth Qwen 3.8 27B
- [#5230](https://github.com/unslothai/unsloth/issues/5230) [Bug] Gemma 4 26B-A4B-it: fused-loss kernel produces zero gradients with last-assistant-only label mask
- [#7877](https://github.com/unslothai/unsloth/issues/7877) [Bug] August updates issues: (1). No longer see/re-used Ollama-download models, (2). Setting too small context size ( about 50%)
- [#6930](https://github.com/unslothai/unsloth/issues/6930) MoE-LoRA (target_parameters) checkpoints: lora_B is packed block-wise per expert — undocumented, silently breaks downstream converters
- [#3003](https://github.com/unslothai/unsloth/issues/3003) [Bug] Error when I run the Qwen3_(4B)-GRPO.ipynd, I do not know why the batch size will change during training, and I get an error.
- [#12737](https://github.com/unslothai/unsloth/issues/12737) Qwen3.5 SFT: loss goes NaN at a deterministic step (any LR/optimizer/seed) — Qwen3 trains clean on same data
- [#3529](https://github.com/unslothai/unsloth/issues/3529) [Bug] Orpheus_tts espanish finetune ,cannot generate valid voice
- [#9130](https://github.com/unslothai/unsloth/issues/9130) [Bug] AMD: a GPU crash during image generation takes down the whole Unsloth Studio server
- [#8861](https://github.com/unslothai/unsloth/issues/8861) [Studio Bug] Qwen3.8-27B-NVFP4 extremely slow inference on RTX 5090 / Windows
- [#7045](https://github.com/unslothai/unsloth/issues/7045) [Bug] При вызове инструментов некорректно работает модель
- [#3528](https://github.com/unslothai/unsloth/issues/3528) Openenv with tool calling notebook unsloth ?
- [#2971](https://github.com/unslothai/unsloth/issues/2971) [Bug] AttributeError: 'Qwen2ForCausalLM' object has no attribute 'load_lora'
- [#3113](https://github.com/unslothai/unsloth/issues/3113) [Feature] Out of memory (OOM) error occurs on the Jetson AGX Orin during inference with Gemma-3n.
- [#5290](https://github.com/unslothai/unsloth/issues/5290) [Bug] Export failed: Unsloth: Saving LoRA finetune failed since # of LoRAs = 348 does not match # of saved modules = 0. Please file a bug report!
- [#7506](https://github.com/unslothai/unsloth/issues/7506) [Bug] Crash on T4 Kraggle enviroment qwen 3.5 0.8b bf16 training
- [#3705](https://github.com/unslothai/unsloth/issues/3705) [Bug] Gradient explosion (NaN) when training Qwen 3 Reranker with Unsloth backend on A100
- [#10135](https://github.com/unslothai/unsloth/issues/10135) [Feature] Add Ability to Specify Custom Tool Response Truncation Limit
- [#3690](https://github.com/unslothai/unsloth/issues/3690) [Feature] Sanitize inf/NaN value in LoRA for consistent `model.save_pretrained_merged()`
- [#8847](https://github.com/unslothai/unsloth/issues/8847) [Bug] AMD: Unsloth Desktop picks the Ryzen iGPU as GPU 0 and adds its memory to an RX 7800 XT's VRAM
- [#13253](https://github.com/unslothai/unsloth/issues/13253) [Bug] Internal error due to MTP set on by default on Apple Silicon
- [#6489](https://github.com/unslothai/unsloth/issues/6489) UnicodeEncodeError (charmap codec) on Windows in Unsloth Studio / DiffusionGemma
- [#9897](https://github.com/unslothai/unsloth/issues/9897) [Bug] AMD: image and video generation fails with an internal error (RX 7600 on Windows, Radeon 8060S)
- [#8327](https://github.com/unslothai/unsloth/issues/8327) [Feature] add manual pairing of a text encoder and model
- [#4862](https://github.com/unslothai/unsloth/issues/4862) llama-server crashes on Jetson Orin: pip NVIDIA libs in LD_LIBRARY_PATH override system CUDA
- [#3018](https://github.com/unslothai/unsloth/issues/3018) [Bug] I encountered a problem when installing the 5090 graphics card according to the official documentation.
- [#7124](https://github.com/unslothai/unsloth/issues/7124) [Bug] Qwen3.5 4B notebook doesn't work
- [#7922](https://github.com/unslothai/unsloth/issues/7922) [Bug] fine-tuning with AMD gfx1032 crashes
- [#8988](https://github.com/unslothai/unsloth/issues/8988) Studio: the ctx_checkpoints term in the KV estimator is unused, and models host RAM as VRAM
- [#7423](https://github.com/unslothai/unsloth/issues/7423) add gigatoken
- [#10775](https://github.com/unslothai/unsloth/issues/10775) [Feature] Persistent Project and Agent Memory with explicit local controls
- [#2733](https://github.com/unslothai/unsloth/issues/2733) [Bug] RuntimeError: Error(s) in loading state_dict for PeftModelForCausalLM:
- [#4270](https://github.com/unslothai/unsloth/issues/4270) [Bug] GPU power is low during Qwen3-4B training
- [#10349](https://github.com/unslothai/unsloth/issues/10349) [Bug] Tool responses are truncated to arbitrary 16000 chars
- [#12366](https://github.com/unslothai/unsloth/issues/12366) Add capability to swap between multiple System Prompts
- [#6347](https://github.com/unslothai/unsloth/issues/6347) [Bug] DiffusionGemma: multi-GPU inference + training blocked on transformers 4.57.6
- [#6456](https://github.com/unslothai/unsloth/issues/6456) BUG: DiffusionGemma 26B-A4B exhibits Initialization Memory Saturation / Leak in Unsloth Studio
- [#10336](https://github.com/unslothai/unsloth/issues/10336) [Bug] Laguna iq4_nl not loading anymore
- [#13042](https://github.com/unslothai/unsloth/issues/13042) [Studio] audio.cpp runs on CPU on AMD GPUs: ship ROCm/HIP bundles in unslothai/audio.cpp and fall back to Vulkan
- [#13245](https://github.com/unslothai/unsloth/issues/13245) [Bug] unsloth_compiled_module_gemma4 fails to load: name 'transformers' is not defined (zoo 2026.10.3, transformers 5.5.0)
- [#10844](https://github.com/unslothai/unsloth/issues/10844) [Bug] Fix for XPU replacement still fails.
- [#3551](https://github.com/unslothai/unsloth/issues/3551) [Bug] bug in GRPO with FSDP2
- [#9942](https://github.com/unslothai/unsloth/issues/9942) [Bug] Metal Memory Guard Blocks Working Qwen3.8-27B Config, Add Persistent 'Load anyway' Setting
- [#8632](https://github.com/unslothai/unsloth/issues/8632) [Bug] Installation failing on Windows with Intel ARC 140T Laptop GPU
- [#9393](https://github.com/unslothai/unsloth/issues/9393) Studio on Linux: WEBKIT_DISABLE_DMABUF_RENDERER=1 is full software rendering on WebKitGTK 2.44+, and we set it for AppImage on Wayland
- [#10348](https://github.com/unslothai/unsloth/issues/10348) [Bug] Unsloth sends opaque calls to the model
- [#4986](https://github.com/unslothai/unsloth/issues/4986) The installer should list actual binaries instead of build-essential
- [#3868](https://github.com/unslothai/unsloth/issues/3868) [Bug] Support for Tesla P4 (Pascal sm_61) requires legacy stack and manual pinning
- [#9486](https://github.com/unslothai/unsloth/issues/9486) [Feature] Memory System
- [#5223](https://github.com/unslothai/unsloth/issues/5223) [Bug] Context Length Calculator defaults to 4096 and forces manual override on every model load
- [#8556](https://github.com/unslothai/unsloth/issues/8556) [Bug] Unsloth studio doesn't detect intel arc b580 gpu
- [#7127](https://github.com/unslothai/unsloth/issues/7127) [Feature Request] Support GTX 10x GPUs
- [#2118](https://github.com/unslothai/unsloth/issues/2118) NPU
- [#13217](https://github.com/unslothai/unsloth/issues/13217) [Bug] llama-server rejected the value for '--api-key-file'
- [#6056](https://github.com/unslothai/unsloth/issues/6056) [BUG] Rebuilt (post-June-5) Gemma-4 GGUFs still carry broken text-tower weights — verified at the tensor level, engine-independent. PPL 192.9 vs true 4.68
- [#13338](https://github.com/unslothai/unsloth/issues/13338) [Desktop] Idle Python CPU spin: OpenBLAS cap merged after latest release; wake-up cause unresolved
- [#12768](https://github.com/unslothai/unsloth/issues/12768) [Feature] AirLLM low memory mode
- [#12553](https://github.com/unslothai/unsloth/issues/12553) [Feature] Request: Dynamic GGUF quants for Index-Translate family (2B / 9B / 35B-A3B translation models)
- [#13327](https://github.com/unslothai/unsloth/issues/13327) [Bug] Downloaded GGUF never listed: sibling files sharing a quant label are dropped from the variant list (huihui-ai abliterated Swift-1.5)
- [#8735](https://github.com/unslothai/unsloth/issues/8735) [Bug] kimi k3 not available on api with api key
- [#7055](https://github.com/unslothai/unsloth/issues/7055) Gemma4e2b cannot be executed or fine-tuned.
- [#11358](https://github.com/unslothai/unsloth/issues/11358) [Bug] Full Data of MCP Image Got Output, Not Parsed
- [#3083](https://github.com/unslothai/unsloth/issues/3083) [Bug] Rope Scaling not supported on Qwen 2.5 for long context GRPO
- [#8126](https://github.com/unslothai/unsloth/issues/8126) [Bug] Four unsloth mirrors ship a config.json missing a key mlx-lm requires, so they cannot load on Apple Silicon
- [#9928](https://github.com/unslothai/unsloth/issues/9928) [Bug] Windows: desktop auto-repair deadlocks on its own runtime lock; setup deps (uv) cannot replace pydantic-core loaded by the setup interpreter
- [#9467](https://github.com/unslothai/unsloth/issues/9467) [Bug] Installation failed in Mac Mini
- [#8415](https://github.com/unslothai/unsloth/issues/8415) Eight hosted prequant checkpoints are stale and silently fall back to the dense download
- [#10661](https://github.com/unslothai/unsloth/issues/10661) [Bug] Massive Spam in console when reloading Unsloth Studio while having Tabs open in browsers
- [#13139](https://github.com/unslothai/unsloth/issues/13139) [Bug] Studio Export destination field resets to default while entering a custom path
- [#3105](https://github.com/unslothai/unsloth/issues/3105) MoE Expert Key Naming Mismatch in Unsloth Dynamic 4-bit Checkpoint
- [#9510](https://github.com/unslothai/unsloth/issues/9510) [Bug] API feedback
- [#12072](https://github.com/unslothai/unsloth/issues/12072) [Feature] Support Gigatoken as a tokenizer backend
- [#9244](https://github.com/unslothai/unsloth/issues/9244) Studio: the sidebar "More" menu can be opened while a modal dialog is up
- [#8900](https://github.com/unslothai/unsloth/issues/8900) [Privacy] Model loading reports usage despite no-telemetry documentation
- [#8901](https://github.com/unslothai/unsloth/issues/8901) [Packaging] PyPI Apache-2.0 metadata omits bundled AGPL/LGPL components
- [#13244](https://github.com/unslothai/unsloth/issues/13244) [Bug] Studio update channel installs a CUDA-13 / torch-2.10 flash-attn wheel into a CUDA-12 (driver-locked) venv; diffusers image generation then fails: libcudart.so.13 → torchao FqnToConfig

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,130 · **Open issues:** 383 · **Last push:** <1h ago

On October 12, 2026, there were no new releases for AIBrix. Significant developments included the merging of several key pull requests, notably #3002, which enhances the APA by incorporating external and domain totals, and #2999, which routes SGLang /v1/score requests through the gateway. Fixes such as #2988, which raises a ModelNotFoundError for S3/TOS model sources lacking objects, and #3000, which addresses a timezone-dependent test issue, were also noteworthy. In terms of new issues, #3001 stands out as it reports a bug where the APA incorrectly multiplies an external or domain metric total by the replica count.

#### ✅ Merged PRs
- [#3002](https://github.com/vllm-project/aibrix/pull/3002) [Bug] Use external and domain totals in APA
- [#2999](https://github.com/vllm-project/aibrix/pull/2999) [Feat] Route SGLang /v1/score requests through the gateway
- [#2998](https://github.com/vllm-project/aibrix/pull/2998) [Bug] Keep request bodies and prompts out of normal gateway logs
- [#2997](https://github.com/vllm-project/aibrix/pull/2997) [Bug] Add the Messages and Audio paths to the shared reserved route
- [#2996](https://github.com/vllm-project/aibrix/pull/2996) [Bug] Count the deprecated function_call in the chat routing text
- [#2995](https://github.com/vllm-project/aibrix/pull/2995) [Gateway] Reject PD routing for unsupported inference endpoints
- [#2988](https://github.com/vllm-project/aibrix/pull/2988) [Bug] Raise ModelNotFoundError when an S3/TOS model source has no objects
- [#2969](https://github.com/vllm-project/aibrix/pull/2969) [Bug] Accept array prompts for completions
- [#3000](https://github.com/vllm-project/aibrix/pull/3000) [Bug] Fix timezone-dependent overdue-job expiry test
- [#2984](https://github.com/vllm-project/aibrix/pull/2984) [Bug] Validate RoleSet update budgets before running role syncers
- [#2986](https://github.com/vllm-project/aibrix/pull/2986) [Bug] Disable the HPA scaling direction whose max rate is 1

#### 🐛 New Issues
- [#3001](https://github.com/vllm-project/aibrix/issues/3001) [Bug] APA multiplies an External or Domain metric total by the replica count `kind/bug` `area/testing` `area/website` `area/orchestration` 💬2
- [#2987](https://github.com/vllm-project/aibrix/issues/2987) [Bug] An S3 or TOS model URI with no objects downloads nothing and reports success `kind/bug` `area/runtime` 💬2
- [#2993](https://github.com/vllm-project/aibrix/issues/2993) [Gateway] Add routing support for the SGLang /v1/score API `help wanted` `area/gateway` `kind/misc` `area/website` 💬2
- [#2991](https://github.com/vllm-project/aibrix/issues/2991) [Gateway] Gate raw request body logging behind verbose log levels `kind/enhancement` `help wanted` `area/gateway` `kind/misc` 💬2
- [#2990](https://github.com/vllm-project/aibrix/issues/2990) [Bug][Gateway] Add missing reserved routes for supported Messages and Audio APIs `kind/bug` `help wanted` `area/gateway` `area/installation` 💬2
- [#2994](https://github.com/vllm-project/aibrix/issues/2994) [Gateway] Add routing support for the /v1/audio/speech API `help wanted` `area/gateway` `kind/misc` `area/website` 💬2
- [#2989](https://github.com/vllm-project/aibrix/issues/2989) [Gateway] Close endpoint routing, logging, and API compatibility gaps for latest SGLang and vLLM `area/gateway` `triage/needs-information` `kind/feature` `area/website` 💬1
- [#2992](https://github.com/vllm-project/aibrix/issues/2992) [Gateway] Reject PD routing for unsupported inference endpoints `help wanted` `area/gateway` `kind/misc` 💬1
- [#3003](https://github.com/vllm-project/aibrix/issues/3003) [Bug] The APA samples use annotation keys the controller ignores `kind/bug` `area/website` `area/orchestration`

#### 🔒 Closed Issues
- [#2958](https://github.com/vllm-project/aibrix/issues/2958) [Bug] /v1/completions returns 400 when prompt is an array of strings or token ids
- [#3001](https://github.com/vllm-project/aibrix/issues/3001) [Bug] APA multiplies an External or Domain metric total by the replica count
- [#2987](https://github.com/vllm-project/aibrix/issues/2987) [Bug] An S3 or TOS model URI with no objects downloads nothing and reports success
- [#2957](https://github.com/vllm-project/aibrix/issues/2957) [Bug] chat completions routing text ignores assistant tool_calls and writes the literal `null` for null content
- [#2985](https://github.com/vllm-project/aibrix/issues/2985) [Bug] An HPA max-scale-up-rate or max-scale-down-rate of 1 generates an HPA that the API server rejects
- [#2983](https://github.com/vllm-project/aibrix/issues/2983) [Bug] Unparseable RoleSet update budgets can stall rollout while pod sync returns nil
- [#2941](https://github.com/vllm-project/aibrix/issues/2941) [Bug] A zero prefix-cache eviction interval panics at startup
- [#2973](https://github.com/vllm-project/aibrix/issues/2973) [Bug] PendingLoadProvider.GetConsumption returns success when the profile has no latency data
- [#2974](https://github.com/vllm-project/aibrix/issues/2974) [Bug] PodArray groups pods by bare pod name, so same-named pods in different namespaces are merged

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,093 · **Open issues:** 580 · **Last push:** <1h ago

On October 12, 2026, there were no new releases for Semantic Router, but several important developments occurred. Key merged PRs included the addition of durable training management APIs and the introduction of a write path for the KV address registry. Additionally, a bug fix was implemented to prevent the Router Memory cache from re-serving deleted memories, enhancing reliability. Notably, the ongoing discourse around the merge-queue was highlighted by newly reported issues, particularly the documentation gaps regarding the conversation-resolution gate and merge-queue freeze rules. The request for the Router to handle images and videos for Decision 3.0 also gained attention as a potential feature enhancement, indicating an evolving interaction capability.

#### ✅ Merged PRs
- [#4905](https://github.com/vllm-project/semantic-router/pull/4905) [Docs] Add Decision 3.0 on Apple Silicon blog post
- [#4490](https://github.com/vllm-project/semantic-router/pull/4490) [CI/Build] Fail refresh workflows when PR publication fails
- [#4626](https://github.com/vllm-project/semantic-router/pull/4626) [Docs] Translate twenty more pages: the model-runtime section and its links
- [#4510](https://github.com/vllm-project/semantic-router/pull/4510) [Feature] Add durable training management APIs and run lifecycle
- [#3792](https://github.com/vllm-project/semantic-router/pull/3792) [Router] add KV address registry write path (#2976)
- [#4840](https://github.com/vllm-project/semantic-router/pull/4840) [Bug] Stop the Router Memory cache from re-serving deleted memories

#### 🐛 New Issues
- [#4890](https://github.com/vllm-project/semantic-router/issues/4890) [Docs] Document the conversation-resolution gate in the merge-queue troubleshooting list `accepted` `in-progress` `wg/developer-experience-ecosystem` `documentation` 💬7
- [#4881](https://github.com/vllm-project/semantic-router/issues/4881) [Docs] Document the merge-queue freeze rule in AGENTS.md `accepted` `in-progress` `wg/developer-experience-ecosystem` `documentation` 💬5
- [#4879](https://github.com/vllm-project/semantic-router/issues/4879) [Feature] Router: pass chat images and videos to Decision 3.0 decision signals `enhancement` `needs-acceptance` `wg/router-models-inference-runtime` 💬5
- [#4877](https://github.com/vllm-project/semantic-router/issues/4877) [Bug] Router Memory Update semantics differ across backends `bug` `accepted` `in-progress` `wg/agentic-context` 💬4
- [#4875](https://github.com/vllm-project/semantic-router/issues/4875) [Feature] Recover Router Memory when its backend becomes reachable after startup or reload `enhancement` `accepted` `in-progress` `wg/agentic-context` 💬4
- [#4892](https://github.com/vllm-project/semantic-router/issues/4892) [Bug] An Anthropic reply that ends on a stop sequence fails for Chat clients with unsupported_capability `bug` `needs-acceptance` `wg/data-plane-networking` 💬4
- [#4893](https://github.com/vllm-project/semantic-router/issues/4893) [Bug] Chat to Anthropic request translation writes empty text blocks for empty string content `bug` `accepted` `in-progress` `wg/data-plane-networking` 💬3
- [#4887](https://github.com/vllm-project/semantic-router/issues/4887) [Bug] router_latency run loses the whole measurement when a request fails at the connection level `bug` `accepted` `wg/router-models-inference-runtime` 💬2
- [#4886](https://github.com/vllm-project/semantic-router/issues/4886) [Bug] router_latency.py `rounds` subcommand crashes with KeyError on 11+ paired rounds `bug` `accepted` `wg/router-models-inference-runtime` 💬2
- [#4883](https://github.com/vllm-project/semantic-router/issues/4883) [Bug] The model_eval inventory ignores decision_model deployment bindings `bug` `accepted` `in-progress` `wg/evaluation-quality` 💬2
- [#4882](https://github.com/vllm-project/semantic-router/issues/4882) [Bug] Dashboard config update handlers return internal read errors to the client `bug` `accepted` `in-progress` `wg/enterprise-environment` 💬2
- [#4903](https://github.com/vllm-project/semantic-router/issues/4903) [Bug] The model-deployment readiness reload test can outrun its 20s polling windows on loaded CI runners `bug` `accepted` `wg/router-models-inference-runtime` 💬2
- [#4874](https://github.com/vllm-project/semantic-router/issues/4874) [Bug] Router Memory API reports "not configured" when its backend was unreachable `bug` `accepted` `in-progress` `wg/agentic-context` 💬2
- [#4906](https://github.com/vllm-project/semantic-router/issues/4906) [Bug] macOS: eight tests fail on unmodified main in three unrelated classes `bug` `needs-acceptance` `needs-info` `wg/developer-experience-ecosystem` 💬1
- [#4904](https://github.com/vllm-project/semantic-router/issues/4904) [Bug] modelservice client test cannot bind its unix socket on macOS `bug` `accepted` `wg/developer-experience-ecosystem` 💬1
- [#4919](https://github.com/vllm-project/semantic-router/issues/4919) [Bug] Redis cache entries lose their TTL silently when the expire call fails `bug` `needs-acceptance` `wg/router-models-inference-runtime`
- [#4918](https://github.com/vllm-project/semantic-router/issues/4918) [Bug] Random model selection fails the benchmark call-limit precondition `bug` `needs-acceptance` `wg/router-models-inference-runtime`
- [#4912](https://github.com/vllm-project/semantic-router/issues/4912) [Blog] Decision 3.0 on Apple Silicon: Core ML ports and demos `wg/router-models-inference-runtime`
- [#4911](https://github.com/vllm-project/semantic-router/issues/4911) [Bug] Chat decoding holds a Chat client's opening delta, so a failed stream sends it twice `needs-acceptance` `wg/data-plane-networking`
- [#4909](https://github.com/vllm-project/semantic-router/issues/4909) [Bug] Stream provider validation rejects whitespace-only matched stop sequences that buffered validation accepts `needs-acceptance` `wg/data-plane-networking`

#### 🔒 Closed Issues
- [#2440](https://github.com/vllm-project/semantic-router/issues/2440) [Bug] Fix macOS arm64 hang during unified mmBERT classifier initialization
- [#3217](https://github.com/vllm-project/semantic-router/issues/3217) [Feature] Generate and validate reviewable Router configuration and recipe proposals
- [#3342](https://github.com/vllm-project/semantic-router/issues/3342) [Feature] Add bounded topic-continuity signals for context policy
- [#4835](https://github.com/vllm-project/semantic-router/issues/4835) [Bug] Router Memory Redis cache can keep serving a deleted memory until TTL
- [#4572](https://github.com/vllm-project/semantic-router/issues/4572) [Bug] The decision signal routes on answers that contradict the question asked
- [#4632](https://github.com/vllm-project/semantic-router/issues/4632) [Bug] Mistral's p field is rejected by json validator
- [#3560](https://github.com/vllm-project/semantic-router/issues/3560) [Feature] Route safely on PII detected in tool results
- [#4774](https://github.com/vllm-project/semantic-router/issues/4774) [Bug] Anthropic encoding rejects tool_choice=none with explicit parallel_tool_calls
- [#4769](https://github.com/vllm-project/semantic-router/issues/4769) [Bug] /metrics/router redirects unauthenticated users to the internal metrics URL and /health always answers 200
- [#4822](https://github.com/vllm-project/semantic-router/issues/4822) [Bug] The agent-routing-protection benchmarking page is missing from sidebars.ts
- [#4836](https://github.com/vllm-project/semantic-router/issues/4836) [Bug] Milvus Router Memory access tracking can recreate a forgotten memory
- [#4782](https://github.com/vllm-project/semantic-router/issues/4782) [Bug] Runtime recovery reuses stale capabilities when model discovery fails
- [#4854](https://github.com/vllm-project/semantic-router/issues/4854) [Bug] The baseline result records scored rows but not the labels it dropped
- [#4804](https://github.com/vllm-project/semantic-router/issues/4804) [Bug] A language rule's explicit threshold overrides other rules' default threshold
- [#4591](https://github.com/vllm-project/semantic-router/issues/4591) [Bug] Router Memory Retrieve ignores ProjectID on Milvus and Valkey
- [#4773](https://github.com/vllm-project/semantic-router/issues/4773) [Bug] Semantic response cache ignores authorized max-age request control
- [#4912](https://github.com/vllm-project/semantic-router/issues/4912) [Blog] Decision 3.0 on Apple Silicon: Core ML ports and demos

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*