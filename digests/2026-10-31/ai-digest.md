# 📡 AI Ecosystem Digest — 2026-10-31

> Generated 2026-10-31 02:04 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 153,986 | 29 | 1 | 0 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 132,013 | 25 | 5 | 50 | 0 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 108,638 | 0 | 2 | 7 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,313 | 12 | 9 | 1 | 0 |
| [OpenCode](https://github.com/anomalyco/opencode) | 223,346 | 19 | 26 | 9 | 3 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 28,840 | 10 | 15 | 5 | 1 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 393,482 | 167 | 132 | 220 | 1 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 258,894 | 27 | 2 | 1 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 95,936 | 30 | 27 | 35 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 38,308 | 17 | 14 | 64 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 132,898 | 10 | 14 | 14 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 185,386 | 9 | 0 | 2 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 62,407 | 20 | 54 | 93 | 1 |
| [Unsloth](https://github.com/unslothai/unsloth) | 78,827 | 23 | 15 | 114 | 1 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,169 | 3 | 0 | 11 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,348 | 7 | 9 | 0 | 0 |

---

## ✨ Highlights

- **Gemini CLI** released [v0.67.0-nightly.20261031.g6814e00d6](https://github.com/google-gemini/gemini-cli/releases/tag/v0.67.0-nightly.20261031.g6814e00d6).
- **Claude Code** updated with release [v2.1.316](https://github.com/anthropics/claude-code/releases/tag/v2.1.316).
- **OpenCode** has released multiple versions: [v2.2.5](https://github.com/anomalyco/opencode/releases/tag/v2.2.5), [v2.2.4](https://github.com/anomalyco/opencode/releases/tag/v2.2.4), and [v2.2.3](https://github.com/anomalyco/opencode/releases/tag/v2.2.3).
- **Qwen Code** introduced new features in merged PR [#15932](https://github.com/QwenLM/qwen-code/pull/15932), enabling improved context memory file handling.
- **OpenClaw** reported a hot issue with [Feature](https://github.com/openclaw/openclaw/issues/188761) automation, receiving 5 comments, reflecting developer concern about preflight compatibility.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 153,986 · **Open issues:** 16,173 · **Last push:** 1h ago

On October 31, 2026, Claude Code released version v2.1.316, introducing key features such as the ability to disable the `ultrathink` keyword with `CLAUDE_CODE_DISABLE_ULTRATHINK` and the implementation of pooled group budgets in the Claude apps gateway, allowing shared monthly budgets among group members. No merge requests were completed in the last 24 hours, but the team is actively addressing several new issues, including a significant concern regarding server-delivered "games" instructions that block professional development work (#106167). Other emergent bugs involve various connectivity and functionality issues, such as failures in maintaining persistent connections in VS Code Remote-SSH sessions (#106159) and inconsistencies in custom connector permissions within the desktop chat (#106284).

#### 🚀 New Releases
- [v2.1.316](https://github.com/anthropics/claude-code/releases/tag/v2.1.316) v2.1.316

#### 🐛 New Issues
- [#106167](https://github.com/anthropics/claude-code/issues/106167) Server-delivered "games" instruction blocks professional development work `bug` `platform:macos` `area:model` 💬5
- [#106225](https://github.com/anthropics/claude-code/issues/106225) [FEATURE] Account-level setting to keep claude.ai connectors out of Claude Code on individual plans `enhancement` `area:mcp` `area:security` 💬1
- [#106159](https://github.com/anthropics/claude-code/issues/106159) [BUG] VS Code Remote-SSH: after a reconnect the Claude tab stays on "stopped responding" and the session list is empty `bug` `platform:linux` `area:ide` `platform:vscode` 💬1
- [#106284](https://github.com/anthropics/claude-code/issues/106284) [BUG] Desktop chat: saved "Always allow" for a custom connector's write tool is ignored; card offers only "Allow once" (claude.ai honours it) `invalid` 💬1
- [#106329](https://github.com/anthropics/claude-code/issues/106329) Intermittent "Unable to connect to API (EPROTO)": api.anthropic.com edge answers valid X25519MLKEM768 ClientHello with TLS decode_error (~0.5% of handshakes; 0 of 1000 without PQ key share) `bug`
- [#106328](https://github.com/anthropics/claude-code/issues/106328) AskUserQuestion: pressing Enter on an empty "Other" field in a multi-question form discards all answers and ends the turn `bug` `area:tui` `area:tools` `data-loss`
- [#106327](https://github.com/anthropics/claude-code/issues/106327) [Bug] Cloud sessions started from local session ignore selected Sonnet model and use Opus `bug` `platform:windows` `area:model` `area:agent-view`
- [#106326](https://github.com/anthropics/claude-code/issues/106326) [Bug] Claude Desktop Code tab permanently deletes CLI session transcripts during Desktop handoff `bug` `platform:macos` `data-loss` `area:desktop`
- [#106325](https://github.com/anthropics/claude-code/issues/106325) Scheduled task sessions can't reach the phone: Remote Control can't be enabled, and PushNotification is suppressed while the app is minimized to the tray `bug` `has repro` `platform:windows` `area:desktop`
- [#106324](https://github.com/anthropics/claude-code/issues/106324) [BUG] forceLoginOrgUUID is incompatible with setup-token OAuth tokens `bug` `has repro` `platform:macos` `area:auth`
- [#106323](https://github.com/anthropics/claude-code/issues/106323) [BUG] Desktop app Code tab never shows prompt suggestions (CLI does) `bug` `platform:macos` `area:desktop`
- [#106322](https://github.com/anthropics/claude-code/issues/106322) [BUG] Max 5x: weekly limit now reached every week since mid-October 2026 with an unchanged workload `bug` `duplicate` `platform:linux` `area:cost`
- [#106321](https://github.com/anthropics/claude-code/issues/106321) Artifact tool: an unattended agent cannot read a canvas made by a teammate - the "made by someone else" prompt has no allow rule, hook or bypass, cross-org link-shared artifacts 404, and -p has no Artifact tool `enhancement` `area:tools` `area:agents` `platform:wsl`
- [#106320](https://github.com/anthropics/claude-code/issues/106320) Cloud sessions in the Claude app attach no surface, so plugin hooks cannot draw AbovePrompt bands or Pane panels `bug` `platform:macos` `area:plugins`
- [#106319](https://github.com/anthropics/claude-code/issues/106319) [BUG] Desktop/Web: scheduled task runs flood the sidebar session list, and there is no filter to hide them `bug` `platform:macos` `platform:web` `regression`
- [#106318](https://github.com/anthropics/claude-code/issues/106318) [Desktop] Let one-time scheduled task runs appear as normal sidebar sessions `enhancement` `area:desktop` `area:routines`
- [#106317](https://github.com/anthropics/claude-code/issues/106317) [FEATURE] Claude Desktop (Linux): use AT-SPI accessibility trees in Computer Use `invalid`
- [#106316](https://github.com/anthropics/claude-code/issues/106316) [BUG] "update available", incorrect, again `bug` `duplicate` `platform:windows` `area:packaging`
- [#106315](https://github.com/anthropics/claude-code/issues/106315) [BUG] VS Code Remote-SSH: after a reconnect the Claude tab stays on "stopped responding" and the session list is empty `bug` `platform:linux` `area:ide` `platform:vscode`
- [#106314](https://github.com/anthropics/claude-code/issues/106314) Auto mode classifier blocks user-authorized actions relayed through cross-session messages `enhancement` `area:agents` `area:permissions`
- [#106313](https://github.com/anthropics/claude-code/issues/106313) [Bug] Opus fixes introduce regressions: repeated side effects on reprocessing `bug` `platform:windows` `area:model`
- [#106312](https://github.com/anthropics/claude-code/issues/106312) [FEATURE] Hook input: say whether the session is isolated in a worktree `enhancement` `area:hooks`
- [#106311](https://github.com/anthropics/claude-code/issues/106311) [BUG] VS Code extension: Cmd+C doesn't copy chat text when the session is in an editor tab (macOS, resolves to execCopy) `bug` `has repro` `platform:macos` `area:ide`
- [#106310](https://github.com/anthropics/claude-code/issues/106310) [BUG] VS Code: Claude tab restored after Reload Window takes keyboard focus until a mouse click `bug` `has repro` `platform:macos` `area:ide`
- [#106309](https://github.com/anthropics/claude-code/issues/106309) Claude False Positives: Legitimate Obfuscation Detection Prevents Compatibility With My Obfuscator `bug` `platform:windows` `area:model`
- [#106308](https://github.com/anthropics/claude-code/issues/106308) [Bug] Artifact read tool rejects file path argument: "read takes only url, path, paths, out_dir" `bug` `platform:macos` `area:tools`
- [#106307](https://github.com/anthropics/claude-code/issues/106307) [BUG] AI-generated terminal title no longer set when CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1 (regression in 2.1.314) `bug` `has repro` `api:bedrock` `area:tui`
- [#106306](https://github.com/anthropics/claude-code/issues/106306) [Bug] Safeguard false positive on production build hardening work `bug` `duplicate` `platform:macos` `area:model`
- [#106305](https://github.com/anthropics/claude-code/issues/106305) [Routines] GitHub webhook trigger with plain event names (issues, issue_comment) is accepted but never fires; action-qualified names work `bug` `has repro` `area:routines`

#### 🔒 Closed Issues
- [#106315](https://github.com/anthropics/claude-code/issues/106315) [BUG] VS Code Remote-SSH: after a reconnect the Claude tab stays on "stopped responding" and the session list is empty

### OpenAI Codex (`openai/codex`)

**Stars:** 132,013 · **Open issues:** 25,737 · **Last push:** 1h ago

Today saw no new releases, but several notable merged pull requests aimed at enhancing functionality and user experience. Key changes included the introduction of cross-backend session switching in the TUI (#58457), improvements to preserve incomplete response outputs in failed inference traces (#58456), and the addition of interactive controls for inline visualizations (#58436). Significant fixes were also made, such as treating audio validation failures as non-retryable input errors (#58434) and enabling deferred tool world state by default (#58410). Among the newly opened issues, #58302 highlights a troubling bug on macOS where XLSX attachments remain pending during sending, prompting further attention.

#### ✅ Merged PRs
- [#58459](https://github.com/openai/codex/pull/58459) Tighten Bazel CI snapshot handling and OTLP test cleanup
- [#58457](https://github.com/openai/codex/pull/58457) Enable cross-backend session switching in the TUI
- [#58456](https://github.com/openai/codex/pull/58456) Preserve incomplete response output in failed inference traces
- [#58454](https://github.com/openai/codex/pull/58454) Add elastic budgeting for Guardian context preparation
- [#58446](https://github.com/openai/codex/pull/58446) Make viewed image paths clickable in the TUI
- [#58444](https://github.com/openai/codex/pull/58444) Cap Guardian context entries before elastic allocation
- [#58441](https://github.com/openai/codex/pull/58441) Preserve Apps usage instructions in model catalog messages
- [#58436](https://github.com/openai/codex/pull/58436) Add interactive controls and refresh inline visualization styles
- [#58434](https://github.com/openai/codex/pull/58434) Treat audio validation failures as non-retryable input errors
- [#58430](https://github.com/openai/codex/pull/58430) Add audio file references with explicit runtime rejection
- [#58428](https://github.com/openai/codex/pull/58428) Support app settings in plugin configuration
- [#58427](https://github.com/openai/codex/pull/58427) Group alternative sign-in methods in a submenu
- [#58418](https://github.com/openai/codex/pull/58418) Simplify recorded exec command review
- [#58412](https://github.com/openai/codex/pull/58412) Keep exposed leading bangs literal in the chat composer
- [#58411](https://github.com/openai/codex/pull/58411) Expose non-consuming input activity waits to hosts
- [#58410](https://github.com/openai/codex/pull/58410) Enable deferred tool world state by default
- [#58406](https://github.com/openai/codex/pull/58406) Add host-inherited thread instructions and execution policies
- [#58405](https://github.com/openai/codex/pull/58405) Add an option to suppress incremental model change announcements
- [#58404](https://github.com/openai/codex/pull/58404) Fix context token estimates for responses without usable usage
- [#58403](https://github.com/openai/codex/pull/58403) Run package updates outside the project on non-Windows platforms
- [#58399](https://github.com/openai/codex/pull/58399) Reduce jemalloc arena count for Linux musl builds
- [#58395](https://github.com/openai/codex/pull/58395) Add scoped host metadata hooks for MCP tool requests
- [#58390](https://github.com/openai/codex/pull/58390) Expose parent context for host-managed child startup
- [#58388](https://github.com/openai/codex/pull/58388) Add whole-entry elastic allocation for Guardian context
- [#58385](https://github.com/openai/codex/pull/58385) Test V8 inline typed array storage limits
- [#58381](https://github.com/openai/codex/pull/58381) Fix unsettled refresh detection after workspace switching
- [#58380](https://github.com/openai/codex/pull/58380) Broadcast thread section changes to connected clients
- [#58378](https://github.com/openai/codex/pull/58378) Scope agent MCP metadata to a host-selected plugin registration
- [#58368](https://github.com/openai/codex/pull/58368) Apply PreToolUse hooks before direct Guardian review policy checks
- [#58361](https://github.com/openai/codex/pull/58361) Preserve model metadata origin through runtime resolution
- [#58357](https://github.com/openai/codex/pull/58357) Extract pre-tool-use hook handling into a helper
- [#58355](https://github.com/openai/codex/pull/58355) Fix remote executor authentication timeout recovery
- [#58352](https://github.com/openai/codex/pull/58352) Allow Apps catalog discovery before the initial tool inventory completes
- [#58351](https://github.com/openai/codex/pull/58351) Serialize manual network approval prompts per endpoint
- [#58350](https://github.com/openai/codex/pull/58350) Resolve network approval prompts when their requests end
- [#58343](https://github.com/openai/codex/pull/58343) Preserve fallback token refreshes when the keyring is unreadable
- [#58341](https://github.com/openai/codex/pull/58341) Add an MCP adapter for message-board tools
- [#58324](https://github.com/openai/codex/pull/58324) Treat auth reload failures as transient during token refresh
- [#58281](https://github.com/openai/codex/pull/58281) Allow inline patch review during approval prompts
- [#58280](https://github.com/openai/codex/pull/58280) Reuse connected backends in the in-app resume picker
- [#58270](https://github.com/openai/codex/pull/58270) Recognize Rex terminals and enable Kitty graphics for pets
- [#58266](https://github.com/openai/codex/pull/58266) Preserve transcript history when clearing the terminal with Ctrl+L
- [#58264](https://github.com/openai/codex/pull/58264) Show unread sessions and acknowledge viewed transcripts in the picker
- [#58263](https://github.com/openai/codex/pull/58263) Show unread results in the TUI command center
- [#58261](https://github.com/openai/codex/pull/58261) Add local image thumbnails to the TUI composer
- [#58260](https://github.com/openai/codex/pull/58260) Reuse `LocalImageAttachment` throughout the TUI composer
- [#58251](https://github.com/openai/codex/pull/58251) Reload remote executor credentials safely across token rotation
- [#58241](https://github.com/openai/codex/pull/58241) Update `mio` from 1.2.0 to 1.2.4
- [#58240](https://github.com/openai/codex/pull/58240) Enable TUI task tools for embedded app-server sessions
- [#58239](https://github.com/openai/codex/pull/58239) Enable the agent command center in embedded mode

#### 🐛 New Issues
- [#58302](https://github.com/openai/codex/issues/58302) macOS desktop: XLSX attachments stay pending with spinning send control on 26.1027.30824 `bug` `app` 💬3
- [#58439](https://github.com/openai/codex/issues/58439) Desktop browser origin remains denied for a chat after website permission is explicitly allowed `bug` `app` `browser` 💬3
- [#58306](https://github.com/openai/codex/issues/58306) [CLI/TUI] Follow-up questions are hidden and the advertised answer shortcut does not work on Deepin `bug` `TUI` `CLI` 💬2
- [#58421](https://github.com/openai/codex/issues/58421) app-server: queued input is not drained after an interrupted turn (thread stays idle with a pending queue item) `bug` `app-server` 💬2
- [#58331](https://github.com/openai/codex/issues/58331) CLI 0.166.0 cannot access Chrome extension: "The browser access host is unavailable" `bug` `CLI` `app-server` `browser` 💬1
- [#58468](https://github.com/openai/codex/issues/58468) macOS browser computer use: file selection rejected citing earlier read-only hold after explicit upload authorization `bug` `sandbox` `app` `computer-use` 💬1
- [#58467](https://github.com/openai/codex/issues/58467) [iOS Remote][Windows] Project names and chat grouping do not match desktop `bug` `windows-os` `iOS` `app` 💬1
- [#58465](https://github.com/openai/codex/issues/58465) Windows computer use cannot detect visible Lacerte 2025 windows `bug` `windows-os` `app` `computer-use` 💬1
- [#58463](https://github.com/openai/codex/issues/58463) Windows Computer Use repeatedly stops because Chrome URL cannot be verified `bug` `windows-os` `app` `computer-use` 💬1
- [#58458](https://github.com/openai/codex/issues/58458) approval_policy: Never `bug` `windows-os` `sandbox` `app` 💬1
- [#58365](https://github.com/openai/codex/issues/58365) [CLI][WSL2] Chat hyperlinks open Edge despite Chrome default; Windows Run and shell links open Chrome `bug` `windows-os` `TUI` `CLI` 💬1
- [#58268](https://github.com/openai/codex/issues/58268) CLI 0.166.0: WeChat screenshot paste fails on UKUI Wayland; unsetting WAYLAND_DISPLAY works `bug` `TUI` `CLI` 💬1
- [#58440](https://github.com/openai/codex/issues/58440) Prompt input becomes unreadable after switching appearance modes `bug` `TUI` `CLI` 💬1
- [#58394](https://github.com/openai/codex/issues/58394) can't copy the agent's message and everything it outputs `bug` `TUI` `CLI` 💬1
- [#58453](https://github.com/openai/codex/issues/58453) 97-second delay for a one-line response with no tool calls in a long conversation `bug` `CLI` `performance` 💬1
- [#58452](https://github.com/openai/codex/issues/58452) Remote control from Codex mobile fails with "computer is locked" despite locked use being enabled `bug` `app` `remote` 💬1
- [#58451](https://github.com/openai/codex/issues/58451) [Windows][IAB] Browser Use blocks AliExpress API documentation; review possible regional skew `bug` `windows-os` `app` `safety-check` 💬1
- [#58450](https://github.com/openai/codex/issues/58450) Codex App: agent-created threads start in workspace-write/on-request despite full-access default `bug` `sandbox` `app` `app-server` 💬1
- [#58449](https://github.com/openai/codex/issues/58449) Unify ChatGPT and Codex conversation lists and search across devices `enhancement` `app` `session` `remote` 💬1
- [#58447](https://github.com/openai/codex/issues/58447) macOS: dot native thread read returns DesktopThreadReadUnavailableError with connected, authorized desktop `bug` `app` `dots` 💬1
- [#58448](https://github.com/openai/codex/issues/58448) [macOS] Dictation loses opening words: ~600 ms input gap after dictation-ducking starts `bug` `app` 💬1
- [#58445](https://github.com/openai/codex/issues/58445) Android Remote repeatedly reconnects when opening chats on Omarchy `bug` `app` `connectivity` `remote` 💬1
- [#58464](https://github.com/openai/codex/issues/58464) Automatically resume interrupted tasks after usage quota refresh `enhancement` `rate-limits` `app`
- [#58461](https://github.com/openai/codex/issues/58461) CLA workflow ignores contributors beyond the first 100 PR commits `bug`
- [#58455](https://github.com/openai/codex/issues/58455) One-time Codex automation appears to have run again after completion `bug` `windows-os` `app` `automations`

#### 🔒 Closed Issues
- [#58421](https://github.com/openai/codex/issues/58421) app-server: queued input is not drained after an interrupted turn (thread stays idle with a pending queue item)
- [#58331](https://github.com/openai/codex/issues/58331) CLI 0.166.0 cannot access Chrome extension: "The browser access host is unavailable"
- [#58268](https://github.com/openai/codex/issues/58268) CLI 0.166.0: WeChat screenshot paste fails on UKUI Wayland; unsetting WAYLAND_DISPLAY works
- [#58440](https://github.com/openai/codex/issues/58440) Prompt input becomes unreadable after switching appearance modes
- [#56984](https://github.com/openai/codex/issues/56984) Fresh Windows voice chat lacks native chat creation and coordination tools after app update

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 108,638 · **Open issues:** 761 · **Last push:** <1h ago

On October 31, 2026, Gemini CLI released version v0.67.0-nightly.20261031.g6814e00d6, which introduced important fixes including compliance with .git/info/exclude in shadow repos and improved handling of SSE event buffers at stream EOF. Significant merged pull requests included enhancements to preserve the selected model during transient fallbacks, the addition of missing keys to the custom theme UI schema, and the canonical resolution of symlinked paths in GlobTool. Furthermore, the team addressed issues related to Windows libuv by refining stat reporting in both readSecureFile and readSecureFileBuffer. There were no new issues reported in the last 24 hours, indicating a period of stability for the project.

#### 🚀 New Releases
- [v0.67.0-nightly.20261031.g6814e00d6](https://github.com/google-gemini/gemini-cli/releases/tag/v0.67.0-nightly.20261031.g6814e00d6) Release v0.67.0-nightly.20261031.g6814e00d6

#### ✅ Merged PRs
- [#30059](https://github.com/google-gemini/gemini-cli/pull/30059) fix(core,cli): preserve selected model across transient fallback, cancel, and rewind
- [#30032](https://github.com/google-gemini/gemini-cli/pull/30032) fix(cli): add missing active and focus keys to custom theme ui schema
- [#30042](https://github.com/google-gemini/gemini-cli/pull/30042) fix(core): resolve symlinked paths canonically in GlobTool
- [#30039](https://github.com/google-gemini/gemini-cli/pull/30039) fix(cli): serialize concurrent extension installs with per-extension lock (#29036)
- [#30044](https://github.com/google-gemini/gemini-cli/pull/30044) fix(core): handle Windows libuv zero-device stat reporting in readSecureFileBuffer
- [#30034](https://github.com/google-gemini/gemini-cli/pull/30034) fix(core): honor .git/info/exclude and core.excludesFile in shadow repo
- [#30050](https://github.com/google-gemini/gemini-cli/pull/30050) fix(core): flush pending SSE event buffer at stream EOF in CodeAssistServer

#### 🔒 Closed Issues
- [#28845](https://github.com/google-gemini/gemini-cli/issues/28845) GeminiCLI.com Feedback: [ISSUE]
- [#28833](https://github.com/google-gemini/gemini-cli/issues/28833) Prevent Margin Leaks & Surprise LLM Bills: Add a Hybrid Spend Firewall

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,313 · **Open issues:** 2,190 · **Last push:** 4h ago

On October 31, 2026, there were no new releases for GitHub Copilot CLI; however, PR #5308 was merged, which introduces a Copilot CLI server container image for better deployment options. Among new issues, #5309 highlights a misleading `model_not_supported` error following a content-filter response, while #5304 reports a problem with the `/keep-alive` command in WSL2 not preventing the Windows host from sleeping. Additionally, #5306 raises concerns about the `--available-tools` flag exposing all tools when it should prevent output. The ongoing adjustments and improvements signal the team's proactive approach to user feedback and system reliability.

#### ✅ Merged PRs
- [#5308](https://github.com/github/copilot-cli/pull/5308) Publish a Copilot CLI server container image on release

#### 🐛 New Issues
- [#5309](https://github.com/github/copilot-cli/issues/5309) Misleading model_not_supported error after content-filter response `triage` 💬1
- [#5304](https://github.com/github/copilot-cli/issues/5304) `/keep-alive` in WSL2 does not prevent the Windows host from sleeping `triage` 💬1
- [#5306](https://github.com/github/copilot-cli/issues/5306) `--available-tools` with an empty value exposes all tools instead of none `triage`
- [#5305](https://github.com/github/copilot-cli/issues/5305) Hook event for slash-command / skill invocation (like Claude Code's UserPromptExpansion), and async command hooks `triage`
- [#5303](https://github.com/github/copilot-cli/issues/5303) Autopilot: assistant says its answer is "above", but no text was output before task_complete `triage`
- [#5302](https://github.com/github/copilot-cli/issues/5302) Agent writes invalid PowerShell on Windows (recurring patterns) `triage`
- [#5301](https://github.com/github/copilot-cli/issues/5301) web_search fails with HTTP 504 Gateway Timeout at ~120s (remote GitHub MCP server gateway timeout) `triage`
- [#5299](https://github.com/github/copilot-cli/issues/5299) Windows: 'Select an app to open' (OpenWith) dialog on every message when profile path contains a space `triage`
- [#5298](https://github.com/github/copilot-cli/issues/5298) --model fusion fails with "requires dynamic Auto tiers" unless undocumented DYNAMIC_AUTO_TIERS flag is set (1.0.105) `triage`
- [#5297](https://github.com/github/copilot-cli/issues/5297) Support repository-level, version-controlled command permissions (allow / ask / deny) `triage`
- [#5295](https://github.com/github/copilot-cli/issues/5295) Copilot should not pick one option randomly and go ahead when user presses Ctrl+D decline. `area:agents`
- [#5294](https://github.com/github/copilot-cli/issues/5294) Copilot needs to summarize issue/plan in detail before asking question to user. `area:tools`

#### 🔒 Closed Issues
- [#3760](https://github.com/github/copilot-cli/issues/3760) CLI shows "ctrl+enter enqueue" but "ctrl+enter" adds a line break to the prompt and "ctrl+q" is the enqueue command
- [#1996](https://github.com/github/copilot-cli/issues/1996) Unable to install anthropics/claude-plugins-official marketplace: Invalid marketplace.json: plugins.56.source
- [#2990](https://github.com/github/copilot-cli/issues/2990) /model silently hides Extra High for GPT-5.4 without explaining tier gating in Copilot CLI 1.0.36
- [#3060](https://github.com/github/copilot-cli/issues/3060) store_memory fails for repositories whose origin is not on github.com (e.g., Azure DevOps)
- [#4969](https://github.com/github/copilot-cli/issues/4969) plugin marketplace add fails entirely if any single plugin description exceeds 1024 chars
- [#5205](https://github.com/github/copilot-cli/issues/5205) Context window rollover fails: "checkpoint.md is absent for this agent; write it before requesting rollover"
- [#5286](https://github.com/github/copilot-cli/issues/5286) Unable to use gh in sandbox mode for enterprise setup
- [#2612](https://github.com/github/copilot-cli/issues/2612) Selected text doesn't contrast well with the background
- [#5108](https://github.com/github/copilot-cli/issues/5108) ACP session/list: every page rescans all sessions, so listing thousands takes minutes

### OpenCode (`anomalyco/opencode`)

**Stars:** 223,346 · **Open issues:** 3,825 · **Last push:** <1h ago

Today, OpenCode released version 2.2.5, introducing key features such as Worktree and Shell Mode Shortcuts, allowing users to easily select worktrees and toggle shell mode with convenient key combinations. Version 2.2.4 also remains notable for adding persistent desktop terminals that retain session attributes even through server restarts, alongside new functionality for publishing interactive artifacts. Among the merged pull requests, a fix was made to address issues with Gemini malformed tool calls and infinite reconnect loops due to 404 errors from Remote MCP servers. However, some users reported a significant bug (#60742) concerning OpenAI-compatible streams failing when errors lack messages, indicating an urgent area for improvement.

#### 🚀 New Releases
- [v2.2.5](https://github.com/anomalyco/opencode/releases/tag/v2.2.5) v2.2.5
- [v2.2.4](https://github.com/anomalyco/opencode/releases/tag/v2.2.4) v2.2.4
- [v2.2.3](https://github.com/anomalyco/opencode/releases/tag/v2.2.3) v2.2.3

#### ✅ Merged PRs
- [#60712](https://github.com/anomalyco/opencode/pull/60712) feat(cli): support flags with an optional value
- [#60755](https://github.com/anomalyco/opencode/pull/60755) fix(ui): mount tooltips on first hover and render buttons natively
- [#60764](https://github.com/anomalyco/opencode/pull/60764) fix(ai): recover Gemini malformed tool call and incomplete Interactions streams
- [#60703](https://github.com/anomalyco/opencode/pull/60703) feat(cli): add --worktree to opencode run
- [#60082](https://github.com/anomalyco/opencode/pull/60082) refactor(core): share provider discovery through a simple cache
- [#60757](https://github.com/anomalyco/opencode/pull/60757) fix(app): stop the browser pane jumping while resizing panels
- [#60746](https://github.com/anomalyco/opencode/pull/60746) fix(app): stop the composer dropzone flickering and showing for text drags
- [#60743](https://github.com/anomalyco/opencode/pull/60743) fix(app): scroll settings natively from the sidebar and gutters
- [#60744](https://github.com/anomalyco/opencode/pull/60744) release: v2.2.5

#### 🐛 New Issues
- [#60742](https://github.com/anomalyco/opencode/issues/60742) bug `triaging` 💬5
- [#60760](https://github.com/anomalyco/opencode/issues/60760) OpenAI-compatible stream fails when an error has no message `reproduced` 💬3
- [#60583](https://github.com/anomalyco/opencode/issues/60583) Remote MCP server sent HTTP 404 for resources/templates/list -> treated as dead session, infinite reconnect loop `reproduced` 💬3
- [#60721](https://github.com/anomalyco/opencode/issues/60721) Shell scanner backtracks exponentially on zsh q flags `reproduced` 💬3
- [#60581](https://github.com/anomalyco/opencode/issues/60581) [FEATURE]: Collapsible project groups and archive filter for the session sidebar 💬2
- [#60765](https://github.com/anomalyco/opencode/issues/60765) AI refuses to execute terminal commands it previously could run `triaging` 💬2
- [#60597](https://github.com/anomalyco/opencode/issues/60597) providers: overrides for built-in opencode-go models (limit, name) are ignored in desktop 2.2.3 💬2
- [#60684](https://github.com/anomalyco/opencode/issues/60684) Free usage limit persists on v2.2.1 after weeks of inactivity, even with VPN `pending close` `triaging` 💬2
- [#60511](https://github.com/anomalyco/opencode/issues/60511) compaction silently drops retained text attachment contents from model context `reproduced` 💬2
- [#60669](https://github.com/anomalyco/opencode/issues/60669) Plugin tool field descriptions are dropped when a tool input is a Zod schema `reproduced` 💬2
- [#60768](https://github.com/anomalyco/opencode/issues/60768) worktree_list: silent empty outside a repo, and its registry disagrees with git in both directions `reproduced` 💬1
- [#60769](https://github.com/anomalyco/opencode/issues/60769) model refuses to accept that he can see images even though model supports images `triaging` 💬1
- [#60766](https://github.com/anomalyco/opencode/issues/60766) [FEATURE]: Render markdown in question tool text in the TUI 💬1
- [#60763](https://github.com/anomalyco/opencode/issues/60763) 我在Debianxfce安装opencode（ARM64）后无法打开 `triaging` 💬1
- [#60762](https://github.com/anomalyco/opencode/issues/60762) [FEATURE]:Proposal for an Android version of opencode — via a lightweight Linux terminal wrapper 💬1
- [#60758](https://github.com/anomalyco/opencode/issues/60758) 【BUG】】opencode桌面端 显示额度用完 `pending close` `triaging` 💬1
- [#60756](https://github.com/anomalyco/opencode/issues/60756) `Agent not found` for prompts sent without switching agents after the session's agent is removed `pending close` `triaging` 💬1
- [#60753](https://github.com/anomalyco/opencode/issues/60753) provider: opencode-go gateway returns invalid-JSON upstream response, bricking sessions until rewind `triaging` 💬1
- [#60752](https://github.com/anomalyco/opencode/issues/60752) web: iOS Safari crashes after authentication with undefined e.type `reproduced` 💬1

#### 🔒 Closed Issues
- [#60422](https://github.com/anomalyco/opencode/issues/60422) ECONNRESET on built-in Zen provider — works with VPN, fails without (same network, no rate-limit JSON)
- [#52067](https://github.com/anomalyco/opencode/issues/52067) The `edit` tool intermittently reports "Could not find oldString" for text that is verifiably present in the target file
- [#52463](https://github.com/anomalyco/opencode/issues/52463) session: permanently stuck on HTTP 400 after a failed step; compaction also fails
- [#52196](https://github.com/anomalyco/opencode/issues/52196) TUI crash: undefined is not an object (evaluating 'i.message.location.directory')
- [#52291](https://github.com/anomalyco/opencode/issues/52291) Error: {"message":"a single path expansion cannot exceed 512 candidates trace_id: ***","type":"invalid_request_error"} when /compact
- [#52474](https://github.com/anomalyco/opencode/issues/52474) web: stale session list/messages after client clock shift, no skew warning
- [#52171](https://github.com/anomalyco/opencode/issues/52171) cli: unable to send message in a new workspace
- [#59788](https://github.com/anomalyco/opencode/issues/59788) OpenCode (2.1.4) will delete all files on the same dish of an active project without noticing user
- [#46168](https://github.com/anomalyco/opencode/issues/46168) Web UI features fail over non-localhost HTTP origins: crypto.randomUUID unavailable in insecure context (session delete, file attach)
- [#52492](https://github.com/anomalyco/opencode/issues/52492) tui: transcript images and image viewer render garbled, underscaled blocks (Termux, no graphics protocol)
- [#52563](https://github.com/anomalyco/opencode/issues/52563) cli: mcp list reports "Request timed out" for healthy, connected servers
- [#52523](https://github.com/anomalyco/opencode/issues/52523) ClientError: UnexpectedStatus: 500` crash loop on boot
- [#52028](https://github.com/anomalyco/opencode/issues/52028) desktop: user message bubbles regress in 2.0 — always blue, white-on-accent, unlike 1.18
- [#52047](https://github.com/anomalyco/opencode/issues/52047) update error——Transport: Failed to fetch
- [#60420](https://github.com/anomalyco/opencode/issues/60420) 2.2.2版本内置浏览器
- [#60419](https://github.com/anomalyco/opencode/issues/60419) Free usage limit reached despite zero usage shown (OpenCode 2.2.x)
- [#52189](https://github.com/anomalyco/opencode/issues/52189) Kaspersky false positive (PDM:Trojan.Win32.Generic) during agent-run git commit/push; files quarantined
- [#60412](https://github.com/anomalyco/opencode/issues/60412) reached free limit without agent build anything???
- [#60409](https://github.com/anomalyco/opencode/issues/60409) OpenCode falsely claiming no messages left when reset has literally just happened
- [#52313](https://github.com/anomalyco/opencode/issues/52313) web: agents and models never load in the served web UI (empty pickers, no /api/model or /api/agent calls)
- [#52477](https://github.com/anomalyco/opencode/issues/52477) Models not appearing when i do /models
- [#59775](https://github.com/anomalyco/opencode/issues/59775) [FEATURE]: You guys really need to add a close confirmation pop up or draft feature because I'm devastated
- [#60418](https://github.com/anomalyco/opencode/issues/60418) [FEATURE]:language
- [#60417](https://github.com/anomalyco/opencode/issues/60417) The usage limit is extremely broken or is extremely unreasonable.
- [#60597](https://github.com/anomalyco/opencode/issues/60597) providers: overrides for built-in opencode-go models (limit, name) are ignored in desktop 2.2.3
- [#60405](https://github.com/anomalyco/opencode/issues/60405) 没有免费额度

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 28,840 · **Open issues:** 2,059 · **Last push:** <1h ago

On October 31, 2026, Qwen Code released version 0.27.0 of the cua-driver-rs, featuring prebuilt binaries for macOS, Linux, and Windows, with notable enhancements including a codesigned and notarized universal binary for macOS and an unsigned UIAccess worker for Windows. Significant merged pull requests included features for the web-shell, such as the ability to keep skill argument hints visible while typing and enhancements to the usage panel for opening context memory files. Additionally, the deployment guide for the managed-agent was reorganized into three tiers for better clarity. Among new issues, #15898 was highlighted where hosted process fault gates were failing on the main branch, indicating a need for urgent attention on CI processes.

#### 🚀 New Releases
- [cua-driver-rs-v0.27.0](https://github.com/QwenLM/qwen-code/releases/tag/cua-driver-rs-v0.27.0) cua-driver-rs v0.27.0

#### ✅ Merged PRs
- [#15932](https://github.com/QwenLM/qwen-code/pull/15932) feat(web-shell): open context memory files from the usage panel
- [#15939](https://github.com/QwenLM/qwen-code/pull/15939) docs(managed-agent): generate the server configuration reference from its metadata
- [#15930](https://github.com/QwenLM/qwen-code/pull/15930) feat(web-shell): keep skill argument hints visible while typing arguments
- [#15929](https://github.com/QwenLM/qwen-code/pull/15929) feat(autofix-pr): add --in-place co-driving mode
- [#15944](https://github.com/QwenLM/qwen-code/pull/15944) docs(managed-agent): organize the deployment guide in three tiers

#### 🐛 New Issues
- [#15898](https://github.com/QwenLM/qwen-code/issues/15898) ci(managed-agent): Hosted process fault gates fail on main — postFailureLoads varies run to run `status/in-progress` `priority/P1` `type/bug` `category/development` 💬7
- [#15919](https://github.com/QwenLM/qwen-code/issues/15919) qwen-code bundles fast-uri 3.1.0 via @modelcontextprotocol/client 2.0.0 `priority/P2` `type/bug` `category/security` `scope/mcp` 💬3
- [#15954](https://github.com/QwenLM/qwen-code/issues/15954) Goal budget stop-reason messages are hardcoded in English (goalTokenBudgetReason, goalTurnBudgetReason, goalActiveTimeBudgetReason) `priority/P3` `category/core` `type/enhancement` `scope/web-shell` 💬2
- [#15949](https://github.com/QwenLM/qwen-code/issues/15949) [BUG] /btw response cannot be scrolled or selected/copied (Windows CLI) `priority/P3` `type/bug` `category/ui` `scope/interactive` 💬2
- [#15933](https://github.com/QwenLM/qwen-code/issues/15933) Desktop update from a build released before the runtime-stop fix still fails on Windows `priority/P2` `type/bug` `category/platform` `scope/installation` 💬2
- [#15920](https://github.com/QwenLM/qwen-code/issues/15920) Windows: /tmp written by the shell cannot be read by the file tools, because three components resolve it to three different folders `priority/P2` `type/bug` `category/platform` `scope/shell` 💬2
- [#15915](https://github.com/QwenLM/qwen-code/issues/15915) Web Shell: hide the No workspace sessions sidebar section when empty `priority/P3` `type/feature-request` `category/ui` `scope/web-shell` 💬2
- [#15909](https://github.com/QwenLM/qwen-code/issues/15909) test(managed-agent): crash fixture asserts 200 against the retryable message_projection_pending from #15870 `priority/P1` `type/bug` `category/development` `scope/testing` 💬2
- [#15907](https://github.com/QwenLM/qwen-code/issues/15907) Headless mode drops pipe input when its first bytes arrive after 500ms `priority/P2` `type/bug` `category/cli` `scope/non-interactive` 💬2
- [#15903](https://github.com/QwenLM/qwen-code/issues/15903) [Channels] QQ Bot silently drops bot-authored messages, so bot-to-bot group conversation cannot be enabled `priority/P3` `type/feature-request` `category/integration` `TBD` 💬2

#### 🔒 Closed Issues
- [#15050](https://github.com/QwenLM/qwen-code/issues/15050) Hosted gate: HostedExtensionsIT MCP replay check times out after Harness replacement
- [#14751](https://github.com/QwenLM/qwen-code/issues/14751) LSP: Config.shutdown() leaves language servers running
- [#14625](https://github.com/QwenLM/qwen-code/issues/14625) test(cli): settle budget clamp can equal the per-test ceiling and ignores reachable sums
- [#13232](https://github.com/QwenLM/qwen-code/issues/13232) /context shows a 1M context window as 1000.0k tokens
- [#13248](https://github.com/QwenLM/qwen-code/issues/13248) Web Shell: tool-card diff doesn't wrap long lines (per-line horizontal scrollbars)
- [#15869](https://github.com/QwenLM/qwen-code/issues/15869) Review request: #14348 (base) and #15450 (stacked outbound media) have had no maintainer activity for 3 days
- [#12866](https://github.com/QwenLM/qwen-code/issues/12866) cross-session messaging: five surfaces still state the settings-only reachability rule after #9845
- [#14576](https://github.com/QwenLM/qwen-code/issues/14576) Split View: archived session leaves a permanently empty pane
- [#15866](https://github.com/QwenLM/qwen-code/issues/15866) Web Shell: show Export and Restore inline on archived session rows
- [#15679](https://github.com/QwenLM/qwen-code/issues/15679) An `@AGENTS.md` import in CLAUDE.md loads AGENTS.md twice when both names are in `context.fileName`
- [#15678](https://github.com/QwenLM/qwen-code/issues/15678) Web Shell Split View: keep "+ Add session" clickable so the picker's refresh-on-open can pick up sessions created elsewhere
- [#15915](https://github.com/QwenLM/qwen-code/issues/15915) Web Shell: hide the No workspace sessions sidebar section when empty
- [#15909](https://github.com/QwenLM/qwen-code/issues/15909) test(managed-agent): crash fixture asserts 200 against the retryable message_projection_pending from #15870
- [#15867](https://github.com/QwenLM/qwen-code/issues/15867) bug(web-shell): align No-workspace sessions header with peer sidebar categories
- [#15721](https://github.com/QwenLM/qwen-code/issues/15721) Release Failed for v0.26.2 on 2026-10-27

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

**Stars:** 393,482 · **Open issues:** 7,936 · **Last push:** <1h ago

OpenClaw released version 2026.10.10-beta.5, which reestablishes installation and update compatibility for Node versions 24.16.0 to 25 and 26.1.0, while modifying security recommendations for certain Node versions and improving gateway streaming functionality for XML responses. Significant merged pull requests include fixes for stabilizing bounded context read counts (#188947), preserving session state during slow shutdowns (#188920), and preventing PostgreSQL connection exhaustion in multi-agent Gateways (#188614). A notably hot new issue addresses the control UI panel's failure following browser translation updates (#188052). Other emerging bugs revolve around automation inconsistencies, highlighting the need for continued attention to user experience.

#### 🚀 New Releases
- [v2026.10.10-beta.5](https://github.com/openclaw/openclaw/releases/tag/v2026.10.10-beta.5) openclaw 2026.10.10-beta.5

#### ✅ Merged PRs
- [#188947](https://github.com/openclaw/openclaw/pull/188947) fix(test): stabilize bounded context read counts after rewrites
- [#188903](https://github.com/openclaw/openclaw/pull/188903) improve: avoid minute-long worktree refusal test waits
- [#188941](https://github.com/openclaw/openclaw/pull/188941) improve(ui): align streaming trace timestamps
- [#188888](https://github.com/openclaw/openclaw/pull/188888) test(ui): guard repeated WebKit picker dismissal
- [#188920](https://github.com/openclaw/openclaw/pull/188920) fix(gateway): preserve session state during slow shutdown
- [#188614](https://github.com/openclaw/openclaw/pull/188614) fix: prevent PostgreSQL connection exhaustion in multi-agent Gateways
- [#188927](https://github.com/openclaw/openclaw/pull/188927) improve: reduce iOS screenshot preparation delays
- [#188936](https://github.com/openclaw/openclaw/pull/188936) fix(cron): repair removed one-shot history assertions
- [#188785](https://github.com/openclaw/openclaw/pull/188785) fix: avoid oversized downloads during cold PR preparation
- [#188937](https://github.com/openclaw/openclaw/pull/188937) docs(plugins): fix unsupported exec policy guide reference
- [#188924](https://github.com/openclaw/openclaw/pull/188924) fix(github-copilot): suggest refreshing unreadable usage data
- [#188090](https://github.com/openclaw/openclaw/pull/188090) feat: allow scoped operators to manage their automations
- [#188600](https://github.com/openclaw/openclaw/pull/188600) fix(ci): avoid reaction runners for unrelated comments
- [#188913](https://github.com/openclaw/openclaw/pull/188913) fix(process): keep Gateway work outside agent exec limits
- [#188886](https://github.com/openclaw/openclaw/pull/188886) improve(memory): remove 30-second wait from candidate repair test
- [#188918](https://github.com/openclaw/openclaw/pull/188918) fix(release): pin calibrated Kova evaluator
- [#188818](https://github.com/openclaw/openclaw/pull/188818) fix: prevent resize loops while chat responses stream
- [#188892](https://github.com/openclaw/openclaw/pull/188892) fix(update): dev updates hang on disconnected local main
- [#188588](https://github.com/openclaw/openclaw/pull/188588) perf(ci): reuse database worker compiler symbol queries
- [#188909](https://github.com/openclaw/openclaw/pull/188909) fix(usage): return stale session costs when refresh stays busy
- [#188915](https://github.com/openclaw/openclaw/pull/188915) chore(ui): refresh control ui locales
- [#188893](https://github.com/openclaw/openclaw/pull/188893) fix(test): avoid sampling a retired boot composer frame
- [#188891](https://github.com/openclaw/openclaw/pull/188891) fix(exec): preserve command outcomes during failed Gateway shutdown
- [#188877](https://github.com/openclaw/openclaw/pull/188877) perf(gateway): release unrelated session index snapshots
- [#188901](https://github.com/openclaw/openclaw/pull/188901) fix: start managed browsers with large macOS process listings
- [#188876](https://github.com/openclaw/openclaw/pull/188876) perf(gateway): keep migration preflight imports light
- [#188835](https://github.com/openclaw/openclaw/pull/188835) perf: reuse prepared context during Gateway restart verification
- [#187777](https://github.com/openclaw/openclaw/pull/187777) fix(openshell): resolve literal sandbox file paths without trimming
- [#188864](https://github.com/openclaw/openclaw/pull/188864) fix: show effective next runs for one-shot automations
- [#188860](https://github.com/openclaw/openclaw/pull/188860) improve: offer verified recovery guidance for permission blocks
- [#188894](https://github.com/openclaw/openclaw/pull/188894) fix(process): ease agent exec IO throttling on solid-state disks
- [#188884](https://github.com/openclaw/openclaw/pull/188884) improve: load full Settings copy only where Settings needs it
- [#188760](https://github.com/openclaw/openclaw/pull/188760) fix(plugins): prepare Doctor provider checks asynchronously
- [#188882](https://github.com/openclaw/openclaw/pull/188882) fix(whatsapp): answer recent messages missed during gateway downtime
- [#188865](https://github.com/openclaw/openclaw/pull/188865) chore(deps): update fs-safe to 0.27.0
- [#188678](https://github.com/openclaw/openclaw/pull/188678) improve: safely reuse qualified offline compositions
- [#188718](https://github.com/openclaw/openclaw/pull/188718) fix: align visible completion steering coverage
- [#188898](https://github.com/openclaw/openclaw/pull/188898) fix(gateway): publish readiness after startup span
- [#188873](https://github.com/openclaw/openclaw/pull/188873) fix(gateway): publish readiness after startup span
- [#188790](https://github.com/openclaw/openclaw/pull/188790) fix: prepare guest PRs from newer published project bases
- [#188870](https://github.com/openclaw/openclaw/pull/188870) fix(plugins): keep source inspection inside its worker boundary
- [#188880](https://github.com/openclaw/openclaw/pull/188880) fix(whatsapp): send pairing approval confirmations
- [#188778](https://github.com/openclaw/openclaw/pull/188778) fix(release): drain shared-state leases before retirement
- [#188765](https://github.com/openclaw/openclaw/pull/188765) fix(gateway): resume fallback after output-limited replies
- [#188750](https://github.com/openclaw/openclaw/pull/188750) fix(release): remove ACP backport import collision
- [#188723](https://github.com/openclaw/openclaw/pull/188723) improve(test): speed up native report ownership checks
- [#188871](https://github.com/openclaw/openclaw/pull/188871) test: observe child root settlement in public Stop proof
- [#188525](https://github.com/openclaw/openclaw/pull/188525) fix: partial-clone worktree snapshots fail on unfetched blobs
- [#188863](https://github.com/openclaw/openclaw/pull/188863) fix(plugins): restore preparation worker bootstrap isolation
- [#188874](https://github.com/openclaw/openclaw/pull/188874) improve(test): reduce large payload assertion time
- [#188878](https://github.com/openclaw/openclaw/pull/188878) fix(cron): expose receipt-backed history run IDs
- [#188848](https://github.com/openclaw/openclaw/pull/188848) fix(cron): expose receipt-backed history run IDs
- [#188808](https://github.com/openclaw/openclaw/pull/188808) fix(test): stabilize diff sidebar syntax color checks
- [#188862](https://github.com/openclaw/openclaw/pull/188862) fix(tts): restore the real summary selection test
- [#188872](https://github.com/openclaw/openclaw/pull/188872) fix(memory): preserve concurrent sandbox flush notes
- [#188869](https://github.com/openclaw/openclaw/pull/188869) improve(ui): reduce Usage model-filter tail latency
- [#188832](https://github.com/openclaw/openclaw/pull/188832) improve: keep unchanged sandbox workspaces warm between turns
- [#188847](https://github.com/openclaw/openclaw/pull/188847) fix(diagnostics): identify stalls during native child launches
- [#188719](https://github.com/openclaw/openclaw/pull/188719) fix(deps): align bundled plugin fs-safe pins with the root package
- [#188810](https://github.com/openclaw/openclaw/pull/188810) fix(ui): keep composer picker targets stable during mobile transitions
- [#188735](https://github.com/openclaw/openclaw/pull/188735) feat(plugins): expose source preparation work in startup diagnostics
- [#188852](https://github.com/openclaw/openclaw/pull/188852) test(release): preserve proxy lifecycle module exports
- [#188853](https://github.com/openclaw/openclaw/pull/188853) improve: speed up large-buffer test assertions
- [#188838](https://github.com/openclaw/openclaw/pull/188838) improve(doctor): reduce billing warning test setup
- [#188844](https://github.com/openclaw/openclaw/pull/188844) test(release): join reload shutdown fixture wake
- [#188855](https://github.com/openclaw/openclaw/pull/188855) test(release): retain live fixture owners after startup
- [#188854](https://github.com/openclaw/openclaw/pull/188854) fix(release): ignore SQLite sidecar timestamp churn
- [#188856](https://github.com/openclaw/openclaw/pull/188856) fix(release): use sanitizer-safe Particle activity mark
- [#188828](https://github.com/openclaw/openclaw/pull/188828) improve(gateway): speed up session download byte assertion
- [#188837](https://github.com/openclaw/openclaw/pull/188837) fix(feishu): recover transient sends without duplicate messages
- [#188849](https://github.com/openclaw/openclaw/pull/188849) test(release): declare isolated Codex catalog root
- [#188851](https://github.com/openclaw/openclaw/pull/188851) fix(release): retain relay transport after admission failure
- [#171950](https://github.com/openclaw/openclaw/pull/171950) fix(apple): cut full chat-history downloads from 13 to 1 across refreshes
- [#188839](https://github.com/openclaw/openclaw/pull/188839) fix: dependency checks fail on unused node capability export
- [#188841](https://github.com/openclaw/openclaw/pull/188841) fix(particle): use a sanitizer-safe activity mark
- [#188840](https://github.com/openclaw/openclaw/pull/188840) test(release): retain live fixture owners after startup
- [#188842](https://github.com/openclaw/openclaw/pull/188842) fix(auth): adopt databases created after discovery
- [#188728](https://github.com/openclaw/openclaw/pull/188728) fix(gateway): acknowledge uploads before workspace preparation
- [#188833](https://github.com/openclaw/openclaw/pull/188833) fix(anthropic): preserve global exec restrictions in partial agent overrides
- [#188836](https://github.com/openclaw/openclaw/pull/188836) test(codex): pin live catalog root
- [#188766](https://github.com/openclaw/openclaw/pull/188766) fix(link-understanding): non-UTF-8 pages reach the model as garbled text
- [#188823](https://github.com/openclaw/openclaw/pull/188823) improve(test): speed up large byte comparisons
- [#188831](https://github.com/openclaw/openclaw/pull/188831) test(release): stabilize cron owner settlement
- [#188617](https://github.com/openclaw/openclaw/pull/188617) fix(ui): keep logs following after row resize compensation
- [#188822](https://github.com/openclaw/openclaw/pull/188822) test(gateway): skip real xAI fallback retry waits
- [#188834](https://github.com/openclaw/openclaw/pull/188834) fix(release): pin candidate OpenCode smoke model
- [#188758](https://github.com/openclaw/openclaw/pull/188758) fix(llm-task): tool fails when agents configure their own models
- [#188661](https://github.com/openclaw/openclaw/pull/188661) feat: build Linux images from offline runtime packages
- [#188779](https://github.com/openclaw/openclaw/pull/188779) fix(sessions): avoid reparsing old history before agent turns
- [#188819](https://github.com/openclaw/openclaw/pull/188819) perf(gateway): reuse lifecycle envelopes across recipient histories
- [#188576](https://github.com/openclaw/openclaw/pull/188576) chore: update mature dependencies without breaking compatibility
- [#187778](https://github.com/openclaw/openclaw/pull/187778) fix(tlon): add opt-in to keep citations inside their source channel [AI]
- [#188687](https://github.com/openclaw/openclaw/pull/188687) improve(tests): reduce plugin manifest fixture setup time
- [#188830](https://github.com/openclaw/openclaw/pull/188830) chore(ui): refresh control ui locales
- [#188789](https://github.com/openclaw/openclaw/pull/188789) perf(doctor): batch first transcript header reads
- [#188786](https://github.com/openclaw/openclaw/pull/188786) perf(ci): cut full UI validation tail work
- [#156667](https://github.com/openclaw/openclaw/pull/156667) fix(cron): remove memory-core dreaming jobs left behind by its unloaded sidecar
- [#188757](https://github.com/openclaw/openclaw/pull/188757) fix: speed up Gateway startup with large state databases
- [#188788](https://github.com/openclaw/openclaw/pull/188788) fix: distinguish editable composer and visible live transcript readiness
- [#188727](https://github.com/openclaw/openclaw/pull/188727) fix(worktrees): settle completed disk debt on refused postchecks
- [#188731](https://github.com/openclaw/openclaw/pull/188731) fix: show the selected global chat's context breakdown
- [#188782](https://github.com/openclaw/openclaw/pull/188782) fix(workboard): attribute slow card-list waits
- [#177297](https://github.com/openclaw/openclaw/pull/177297) fix(feishu): reject synthetic reply anchors
- [#188815](https://github.com/openclaw/openclaw/pull/188815) docs: add focused Jetson installation guidance
- [#188745](https://github.com/openclaw/openclaw/pull/188745) fix(slack): avoid shutdown stalls during Socket Mode retries
- [#188781](https://github.com/openclaw/openclaw/pull/188781) fix: reduce managed session diff stalls after file stat changes
- [#188759](https://github.com/openclaw/openclaw/pull/188759) fix: keep session catalog discovery responsive during startup
- [#188814](https://github.com/openclaw/openclaw/pull/188814) fix(release): pin stable OpenCode Go smoke to reachable model
- [#188800](https://github.com/openclaw/openclaw/pull/188800) fix: speed up public plugin category browsing
- [#188806](https://github.com/openclaw/openclaw/pull/188806) fix(providers): normalize operation deadline timers
- [#188753](https://github.com/openclaw/openclaw/pull/188753) fix: time out stalled session branch reads
- [#188768](https://github.com/openclaw/openclaw/pull/188768) refactor(sessions): reduce incognito command allocations
- [#188792](https://github.com/openclaw/openclaw/pull/188792) improve(test): avoid repeated Doctor child source loading
- [#188787](https://github.com/openclaw/openclaw/pull/188787) fix(plugins): inspect installation sources asynchronously
- [#188672](https://github.com/openclaw/openclaw/pull/188672) fix: resume configured fallback after interrupted attempts
- [#188655](https://github.com/openclaw/openclaw/pull/188655) improve: avoid unnecessary transcript compression projections
- [#188693](https://github.com/openclaw/openclaw/pull/188693) fix(plugins): portable plugin-state keys for PostgreSQL
- [#188809](https://github.com/openclaw/openclaw/pull/188809) fix(release): seal FRV qualification baselines
- [#185951](https://github.com/openclaw/openclaw/pull/185951) fix(macos): report the real element when a page hooks Mac tab Inspect
- [#185141](https://github.com/openclaw/openclaw/pull/185141) fix(macos): Settings 404 with remote Control UI base path
- [#188769](https://github.com/openclaw/openclaw/pull/188769) fix(queue): keep system direct-command corrections as followups
- [#188797](https://github.com/openclaw/openclaw/pull/188797) docs: add a dedicated Google Vertex AI setup guide
- [#188780](https://github.com/openclaw/openclaw/pull/188780) chore: restore measured test-code headroom
- [#188763](https://github.com/openclaw/openclaw/pull/188763) feat(memory): configure shared workspace output modes
- [#188710](https://github.com/openclaw/openclaw/pull/188710) test(ui): profile mixed streaming responsiveness across engines
- [#188783](https://github.com/openclaw/openclaw/pull/188783) fix(test): prevent Usage snapshot reuse deadline flakes
- [#188743](https://github.com/openclaw/openclaw/pull/188743) fix(release): shorten branch push preflight
- [#160806](https://github.com/openclaw/openclaw/pull/160806) fix(outbound): failed media spool removals leave artifacts behind without a warning
- [#154125](https://github.com/openclaw/openclaw/pull/154125) fix(codex): show screenshots returned by native tools
- [#188609](https://github.com/openclaw/openclaw/pull/188609) fix(test): assert terminal readiness on one snapshot
- [#188734](https://github.com/openclaw/openclaw/pull/188734) fix(ui): preserve message context menu target during layout shifts
- [#188774](https://github.com/openclaw/openclaw/pull/188774) improve(infra): shrink rollback allocation history fixture
- [#186992](https://github.com/openclaw/openclaw/pull/186992) fix(agents): stop text reads after the requested page
- [#188716](https://github.com/openclaw/openclaw/pull/188716) fix: repair legacy config during same-version updates
- [#188762](https://github.com/openclaw/openclaw/pull/188762) fix(byteplus): report token usage for streamed responses
- [#188767](https://github.com/openclaw/openclaw/pull/188767) fix(state): retire fixture reader validation before removal
- [#188720](https://github.com/openclaw/openclaw/pull/188720) fix(codex): avoid missing native binaries during automatic selection
- [#185258](https://github.com/openclaw/openclaw/pull/185258) docs(release): define ledger-first hotfix routing
- [#188777](https://github.com/openclaw/openclaw/pull/188777) improve(commands): speed up schema guard byte comparisons
- [#188706](https://github.com/openclaw/openclaw/pull/188706) improve(ios): skip compiler indexes during screenshot capture
- [#188700](https://github.com/openclaw/openclaw/pull/188700) fix(cron): keep false-trigger automations quiet
- [#188772](https://github.com/openclaw/openclaw/pull/188772) fix(release): preserve Talk consult session key
- [#188773](https://github.com/openclaw/openclaw/pull/188773) fix(test): restore survivor recovery event checks
- [#188754](https://github.com/openclaw/openclaw/pull/188754) test(gateway): join connection work in shared chat fixture
- [#188709](https://github.com/openclaw/openclaw/pull/188709) perf(doctor): reuse completed raw-entry inspections
- [#188744](https://github.com/openclaw/openclaw/pull/188744) test(release): repair Windows and Codex FRV harnesses
- [#188746](https://github.com/openclaw/openclaw/pull/188746) fix(release): isolate native owners from startup hooks
- [#188673](https://github.com/openclaw/openclaw/pull/188673) perf(test): avoid repeated Control UI fixture work
- [#188685](https://github.com/openclaw/openclaw/pull/188685) perf(test): skip unused browser proof preparation
- [#176089](https://github.com/openclaw/openclaw/pull/176089) fix(hooks): ignore sub-second timeoutSeconds instead of disabling the timeout
- [#188756](https://github.com/openclaw/openclaw/pull/188756) docs: clarify memory-slot dreaming configuration
- [#188752](https://github.com/openclaw/openclaw/pull/188752) improve(tests): remove redundant catalog login wait
- [#188738](https://github.com/openclaw/openclaw/pull/188738) fix(ui): mobile session creation shows a different header and menu button
- [#188729](https://github.com/openclaw/openclaw/pull/188729) improve: reuse Config tiers during status updates and edits
- [#188699](https://github.com/openclaw/openclaw/pull/188699) perf(ui): speed up mobile Settings navigation
- [#173994](https://github.com/openclaw/openclaw/pull/173994) fix: retry temporary database capacity failures during agent startup
- [#188714](https://github.com/openclaw/openclaw/pull/188714) fix(memory-core): keep fallback diary entries out of context
- [#188689](https://github.com/openclaw/openclaw/pull/188689) fix: allow recovery from rejected workspace filenames
- [#188725](https://github.com/openclaw/openclaw/pull/188725) fix(ci): prevent mobile release output-cap test flakes
- [#188626](https://github.com/openclaw/openclaw/pull/188626) improve: reduce repeated Settings work while editing
- [#184243](https://github.com/openclaw/openclaw/pull/184243) fix(plugins): keep admitted turns running during opted-in reloads
- [#188736](https://github.com/openclaw/openclaw/pull/188736) test(gateway): align Talk parity with canonical sessions
- [#188468](https://github.com/openclaw/openclaw/pull/188468) fix: session previews leak code from longer backtick fences
- [#188594](https://github.com/openclaw/openclaw/pull/188594) fix(cron): keep quiet trigger checks out of chat
- [#188733](https://github.com/openclaw/openclaw/pull/188733) chore(ui): refresh control ui locales
- [#188730](https://github.com/openclaw/openclaw/pull/188730) fix(release): restore ACP live-delivery output
- [#188630](https://github.com/openclaw/openclaw/pull/188630) fix(ui): browser reload or tab close discards unsaved config edits without warning
- [#188703](https://github.com/openclaw/openclaw/pull/188703) fix(ui): bound progress timing across session churn
- [#188509](https://github.com/openclaw/openclaw/pull/188509) improve: speed up Usage model filters across long histories
- [#188643](https://github.com/openclaw/openclaw/pull/188643) fix(clickclack): discussion rooms fail to open when plugin state runs on PostgreSQL
- [#188651](https://github.com/openclaw/openclaw/pull/188651) feat: provision cloud worker runtimes without registry access
- [#175696](https://github.com/openclaw/openclaw/pull/175696) fix: status --json --all reports memory vectors as available after the vector probe fails
- [#188722](https://github.com/openclaw/openclaw/pull/188722) fix(release): preserve Particle thinking default
- [#188704](https://github.com/openclaw/openclaw/pull/188704) fix: align manual cron coverage with accepted after-turn runs
- [#188624](https://github.com/openclaw/openclaw/pull/188624) fix: preserve Windows startup errors and repair CI ownership checks
- [#188691](https://github.com/openclaw/openclaw/pull/188691) fix(ci): register performance drivers as Knip roots
- [#188648](https://github.com/openclaw/openclaw/pull/188648) feat: configure remote repository session branch prefixes
- [#188620](https://github.com/openclaw/openclaw/pull/188620) fix: restore the measured test-line ceiling
- [#188711](https://github.com/openclaw/openclaw/pull/188711) test(config): align 2026.10.10 steering tier snapshot
- [#188684](https://github.com/openclaw/openclaw/pull/188684) fix(ci): update-migration survivor lanes time out on hosted runners
- [#188653](https://github.com/openclaw/openclaw/pull/188653) fix(crabbox): recover from stale CLI paths using the current deployment
- [#188636](https://github.com/openclaw/openclaw/pull/188636) fix(oc-path): preserve CRLF when editing YAML files
- [#186524](https://github.com/openclaw/openclaw/pull/186524) fix: resume goals in existing local Codex sessions
- [#188705](https://github.com/openclaw/openclaw/pull/188705) fix(particle): backport bundled identity artwork for 2026.10.10
- [#188644](https://github.com/openclaw/openclaw/pull/188644) feat: prepare selected Linux Sandbox disks without snapshots
- [#188100](https://github.com/openclaw/openclaw/pull/188100) fix(feishu): acknowledge followups during active work
- [#188701](https://github.com/openclaw/openclaw/pull/188701) test(codex): align managed startup fixture for 2026.10.10
- [#188696](https://github.com/openclaw/openclaw/pull/188696) fix(particle): package plugin identity artwork
- [#188645](https://github.com/openclaw/openclaw/pull/188645) fix(workers): retain runtime chunks loaded through optional aliases
- [#188690](https://github.com/openclaw/openclaw/pull/188690) improve(test): reduce declaration resolution test setup
- [#188639](https://github.com/openclaw/openclaw/pull/188639) fix(plugins): point packaged exports to compiled runtime files
- [#188658](https://github.com/openclaw/openclaw/pull/188658) fix: keep older commentary before unrelated chat input
- [#188668](https://github.com/openclaw/openclaw/pull/188668) fix(ci): restore startup integrity and perf command scanner checks
- [#188551](https://github.com/openclaw/openclaw/pull/188551) fix(crabbox): refresh Sandbox activity without replacing idle policy
- [#188692](https://github.com/openclaw/openclaw/pull/188692) fix(release): backport exact FRV harness repairs
- [#188545](https://github.com/openclaw/openclaw/pull/188545) fix(build): preserve package integrity with SHA1-only mirrors
- [#188605](https://github.com/openclaw/openclaw/pull/188605) fix: keep the phone composer still as chat opens
- [#188680](https://github.com/openclaw/openclaw/pull/188680) improve(test): speed up release validation Git fixtures
- [#188580](https://github.com/openclaw/openclaw/pull/188580) fix(talk): realtime voice fails with PostgreSQL agent stores
- [#188560](https://github.com/openclaw/openclaw/pull/188560) fix(config): doctor cannot repair a broken config when the state directory is a symlink
- [#188675](https://github.com/openclaw/openclaw/pull/188675) fix: configure both stores for Session Share revocation tests
- [#188669](https://github.com/openclaw/openclaw/pull/188669) fix(test): isolate the MCP sign-in expiry clock
- [#186142](https://github.com/openclaw/openclaw/pull/186142) perf(ui): speed up large Board tab navigation
- [#188670](https://github.com/openclaw/openclaw/pull/188670) fix: restore authorized Context breakdown reads
- [#188674](https://github.com/openclaw/openclaw/pull/188674) fix(exec): launch durable processes without secret-egress grants
- [#188552](https://github.com/openclaw/openclaw/pull/188552) perf(agents): prepare generation authority off-thread for file writes
- [#188682](https://github.com/openclaw/openclaw/pull/188682) chore(i18n): refresh native locales
- [#188649](https://github.com/openclaw/openclaw/pull/188649) perf(audit): skip savepoints for plain SQLite batch inserts
- [#188625](https://github.com/openclaw/openclaw/pull/188625) fix: stop reporting live lineage writers as unused
- [#188637](https://github.com/openclaw/openclaw/pull/188637) perf(update): reuse target restart readiness during verification
- [#188589](https://github.com/openclaw/openclaw/pull/188589) improve(test): reuse incoming and successor baseline setup
- [#188621](https://github.com/openclaw/openclaw/pull/188621) fix(usage): unblock reports on large session stores
- [#188654](https://github.com/openclaw/openclaw/pull/188654) fix: recognize maintained proof commands in unused-file checks
- [#188638](https://github.com/openclaw/openclaw/pull/188638) fix: restore the memory host package boundary check
- [#188660](https://github.com/openclaw/openclaw/pull/188660) improve(test): avoid repeated CI build-selection discovery
- [#188612](https://github.com/openclaw/openclaw/pull/188612) fix: omit numeric continuation metadata from centered history
- [#188425](https://github.com/openclaw/openclaw/pull/188425) fix: recover systemd Gateway after external package replacement
- [#186271](https://github.com/openclaw/openclaw/pull/186271) fix(macos): prevent duplicate voice sends and false sent feedback
- [#188634](https://github.com/openclaw/openclaw/pull/188634) improve(test): speed up PR-exempt retention census
- [#188568](https://github.com/openclaw/openclaw/pull/188568) test(ui): synchronize composer picker and mobile menu checks

#### 🐛 New Issues
- [#188761](https://github.com/openclaw/openclaw/issues/188761) [Feature]: Preflight automation compatibility when changing the default agent model `P2` `clawsweeper:source-repro` `impact:auth-provider` `issue-rating: 🦞 diamond lobster` 💬5
- [#188052](https://github.com/openclaw/openclaw/issues/188052) [Bug]: Control UI panel fails after browser translation and background usage update `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬4
- [#188440](https://github.com/openclaw/openclaw/issues/188440) [Bug]: voice-call phone responder ignores claude-cli routing and fails with "No API key found for provider anthropic" `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬3
- [#188079](https://github.com/openclaw/openclaw/issues/188079) Heartbeat helper continuation converts successful NO_REPLY into settled-finalization fallback `P2` `impact:ux-friction` 💬3
- [#188858](https://github.com/openclaw/openclaw/issues/188858) [Bug]: Automations editor hides a rearmed one-shot’s effective next run `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬2
- [#188867](https://github.com/openclaw/openclaw/issues/188867) Telegram isolated polling re-fetches the same completed update in a tight loop (local Bot API, 2026.10.9), pegging CPU `P1` `impact:crash-loop` 💬2
- [#188829](https://github.com/openclaw/openclaw/issues/188829) Update failure: validating (2026.10.9) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#188694](https://github.com/openclaw/openclaw/issues/188694) Update failure: invalid-config (2026.10.9) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#188737](https://github.com/openclaw/openclaw/issues/188737) Scheduled pinned-only show_widget is unavailable when the target session uses an OpenAI model `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` 💬2
- [#188647](https://github.com/openclaw/openclaw/issues/188647) [Bug]: Model fallback can finish silently before dispatching the backup `P1` `impact:message-loss` `impact:auth-provider` `issue-rating: 🦪 silver shellfish` 💬2
- [#188112](https://github.com/openclaw/openclaw/issues/188112) [Bug]: Goal Resume button rejects local Codex while /goal resume supports automatic continuation `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬2
- [#188613](https://github.com/openclaw/openclaw/issues/188613) [Bug]: sessions.usage / usage-cost double-count rotated sessions that share a transcript prefix `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬2
- [#188550](https://github.com/openclaw/openclaw/issues/188550) [Bug]: active-memory recall-intent patterns missing Italian (IT) — default `mode: "escalate"` never fires for Italian users `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#188586](https://github.com/openclaw/openclaw/issues/188586) [Bug]: Main-thread session-sqlite maintenance/reclamation commits block the event loop up to 477 s and destroy cron failure alerts `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#188481](https://github.com/openclaw/openclaw/issues/188481) [Bug]: sessions_send mode:notify drops message body (empty envelope) and violates SessionsSendOutputSchema (2026.10.7) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬2
- [#188540](https://github.com/openclaw/openclaw/issues/188540) Update failure: plugin-target-unavailable (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#188504](https://github.com/openclaw/openclaw/issues/188504) [Bug]: Composer containment test mixes rectangles from different layouts `bug` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#188489](https://github.com/openclaw/openclaw/issues/188489) fix: positive browser fixtures omit required method advertisements `bug` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#188437](https://github.com/openclaw/openclaw/issues/188437) [Bug]: Post-turn compaction fails with "agent tool caller authority is no longer active" on 2026.10.x releases; #159353 is on main only, and its coverage of other tool-started turns is unconfirmed `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬2
- [#188422](https://github.com/openclaw/openclaw/issues/188422) [Bug]: Codex native child completion is retired undelivered while a sibling native child still holds the parent ("claimed by active work") `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#188424](https://github.com/openclaw/openclaw/issues/188424) [Bug]: Gateway 2026.10.8 rejects its own PID as “different PID namespace” under systemd user service on Ubuntu VM `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#188303](https://github.com/openclaw/openclaw/issues/188303) macOS launchd: managed Gateway disappears from launchd domain after auto-update (2026.10.8 -> 2026.10.9) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` `P0` 💬2
- [#188347](https://github.com/openclaw/openclaw/issues/188347) Update failure: gateway-recovery-verification (2026.10.8) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬2
- [#188346](https://github.com/openclaw/openclaw/issues/188346) Codex harness: native shell / apply_patch never exposed to spawned agent (Code Mode on) `P2` `impact:ux-friction` 💬2
- [#188206](https://github.com/openclaw/openclaw/issues/188206) doctor --fix copies allowFrom into an empty groupAllowFrom (silent group-access change) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬2
- [#188305](https://github.com/openclaw/openclaw/issues/188305) [Bug]: claude-cli runs never release configured MCP servers on 2026.10.7–10.9, so mcp.sessionIdleTtlMs never evicts them `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬2
- [#188160](https://github.com/openclaw/openclaw/issues/188160) fix: preserve guest own-conversation follow-up completion observation `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬2
- [#188171](https://github.com/openclaw/openclaw/issues/188171) ask_user card never shows buttons on Telegram; 'ask_user prompt delivery failed' hides its cause (2026.9.5) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬2
- [#188953](https://github.com/openclaw/openclaw/issues/188953) [Bug]: `openclaw wiki` commands ignore agents.defaults.systemAgent and fail without --agent on explicit-ownership multi-agent configs `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#188796](https://github.com/openclaw/openclaw/issues/188796) Extract cloud worker recovery and workspace settlement improvements into focused changes `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#188943](https://github.com/openclaw/openclaw/issues/188943) OpenAI Provider: configurable response header passthrough for resolved model metadata `P3` `impact:auth-provider` 💬1
- [#188764](https://github.com/openclaw/openclaw/issues/188764) Cold PR preparation downloads unrelated historical file contents `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#188939](https://github.com/openclaw/openclaw/issues/188939) [Bug]: zalouser stays stopped after 'auto-restart attempt 1/10 in 5s' on 2026.10.9 (watchdog exit), health monitor does not recover it for 3h+ `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#188929](https://github.com/openclaw/openclaw/issues/188929) [Bug]: Codex trajectory omits conversation instructions injected by the inference relay `bug` `no-stale` `bug:behavior` `P2` 💬1
- [#188935](https://github.com/openclaw/openclaw/issues/188935) [Bug]: handle-admission schema failure throws an untyped Error, so no retry/replay path classifies it and the turn is lost `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#188930](https://github.com/openclaw/openclaw/issues/188930) Matrix and Copilot plugins freeze the Linux Gateway for seconds when DNS is slow (diagnostic report for libc detection) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#188928](https://github.com/openclaw/openclaw/issues/188928) [Feature] Structurally separate injected untrusted-metadata decoration from the message body in the model-facing user turn (multi-agent false "metadata echo" alarms) `P2` `impact:ux-friction` 💬1
- [#188926](https://github.com/openclaw/openclaw/issues/188926) [Bug]: npm update still fails package-verify on UGREEN UGOS after #181141: files are created 0777 and the 2026.10.8+ comparator rejects group/other-write bits `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#188923](https://github.com/openclaw/openclaw/issues/188923) Cancelling guest workspace preparation waits for reconciliation holder release `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#188917](https://github.com/openclaw/openclaw/issues/188917) Update failure: gateway-recovery-verification (2026.10.8) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#188889](https://github.com/openclaw/openclaw/issues/188889) fix: managed browser startup fails on large macOS process listings `bug` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬1
- [#188897](https://github.com/openclaw/openclaw/issues/188897) [Bug]: Update capture never seals on large state dirs — metadata inventory result exceeds the 1 MiB stdout cap `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#188895](https://github.com/openclaw/openclaw/issues/188895) [Bug]: Native Windows local workspace preparation fails during Git initialization `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#188751](https://github.com/openclaw/openclaw/issues/188751) [Bug]: prepare_pr rejects a clean newer published project base `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#188875](https://github.com/openclaw/openclaw/issues/188875) [Bug]: plugin sessions.create with idempotencyKey via agent-runtime gateway call always fails "requires an authenticated principal or device identity" `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#188793](https://github.com/openclaw/openclaw/issues/188793) [Feature]: Support European Portuguese across interfaces and apps `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#188845](https://github.com/openclaw/openclaw/issues/188845) doctor --fix re-enables a plugin with a mixed-case id after `openclaw plugins disable` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#188821](https://github.com/openclaw/openclaw/issues/188821) [Bug] Self-learning background review re-bills full conversation per iteration (prompt-cache invalidation), retries permanent 429s — exhausted provider token plan `P2` `impact:other` 💬1
- [#188676](https://github.com/openclaw/openclaw/issues/188676) [Bug]: Context breakdown requests the literal sibling of a selected raw-global chat `bug` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#188811](https://github.com/openclaw/openclaw/issues/188811) [Feature]: TOTP secrets in the protected store (agent receives one-time codes, never the seed) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#188803](https://github.com/openclaw/openclaw/issues/188803) Code Mode: warnings from exec commands that finish quickly never reach the program `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#188799](https://github.com/openclaw/openclaw/issues/188799) [Bug]: Direct Talk voice transcripts leave interaction time unset and disappear from recent session pages `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#188795](https://github.com/openclaw/openclaw/issues/188795) [Feature]: Reuse accepted repository checkpoint blobs between worker turns `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#188776](https://github.com/openclaw/openclaw/issues/188776) PR preparation hides native Git fetch timeout reasons `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#188771](https://github.com/openclaw/openclaw/issues/188771) [Bug]: Cancelled workspace binding waits for unrelated session writes `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#188741](https://github.com/openclaw/openclaw/issues/188741) [Bug]: Matrix final reply is dropped after a 60s send stall, with no retry and no user-visible feedback `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#188740](https://github.com/openclaw/openclaw/issues/188740) Clarify prompt delivery equivalence, request modes, and delegation intent `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-info` 💬1
- [#188599](https://github.com/openclaw/openclaw/issues/188599) [Bug]: Unsupported guest filename blocks workspace finalization and later turns `bug` `clawsweeper:source-repro` `impact:session-state` `P0` 💬1
- [#188461](https://github.com/openclaw/openclaw/issues/188461) [Bug]: Longer backtick fences leak code into plain-text session previews `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#188732](https://github.com/openclaw/openclaw/issues/188732) voice-call: allow `realtime` overrides (instructions + speakerVoice) in per-number routes `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#188721](https://github.com/openclaw/openclaw/issues/188721) Proposal: revocable native invocation identity and current-source receipt for plugin tool hooks `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#188642](https://github.com/openclaw/openclaw/issues/188642) ClickClack discussion rooms fail to open with "PostgreSQL plugin state keys cannot contain NUL characters" when plugin state runs on PostgreSQL `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#188712](https://github.com/openclaw/openclaw/issues/188712) [Bug]: Codex app-server subprocess chains spawned via a plugin generation outlive that generation and are not covered by mcp.sessionIdleTtlMs `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#188707](https://github.com/openclaw/openclaw/issues/188707) [Bug]: openclaw gateway auth-token --show takes 16–19 s on a loaded host `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#188702](https://github.com/openclaw/openclaw/issues/188702) Update failure: package-install-omit-optional (2026.10.5) `P2` `impact:ux-friction` 💬1
- [#188697](https://github.com/openclaw/openclaw/issues/188697) Update failure: package-install-omit-optional (2026.9.8) `P0` `impact:ux-release-blocker` 💬1
- [#188641](https://github.com/openclaw/openclaw/issues/188641) [Bug]: Control UI moves older commentary below unrelated input when original prompt is paged out `bug` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬1
- [#188559](https://github.com/openclaw/openclaw/issues/188559) [Bug]: doctor --fix cannot repair a broken config when the state directory is a symlink `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#188662](https://github.com/openclaw/openclaw/issues/188662) Context breakdown denies an authorized operator when usage is unadvertised `bug` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#188664](https://github.com/openclaw/openclaw/issues/188664) Scheduled requester-command occurrences keep running after the requester is removed from `commands.allowFrom` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#188657](https://github.com/openclaw/openclaw/issues/188657) Custom openai-responses providers drop runtime-context carriers each turn (docs say they're retained), breaking prefix-cache reuse `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#188629](https://github.com/openclaw/openclaw/issues/188629) Control UI: a browser reload or tab close silently discards unsaved Raw config edits `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#188622](https://github.com/openclaw/openclaw/issues/188622) update status hangs while gateway state remains in startupPhase=starting `P2` `impact:ux-friction` 💬1
- [#188618](https://github.com/openclaw/openclaw/issues/188618) [Bug]: Paused Goal Resume stays unconfirmed while same-session work is active `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#188570](https://github.com/openclaw/openclaw/issues/188570) [Bug]: A sentence that mentions /queue loses the next word and gets an "Unrecognized queue mode" reply `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#188567](https://github.com/openclaw/openclaw/issues/188567) [Bug]: HTML Preview fragment links replace the document under unsupported resource CSP `bug` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#188602](https://github.com/openclaw/openclaw/issues/188602) [2026.9.36/Linux] Update journal locked after failed update + manual fallback install; repair refuses with "generation roles are ambiguous" `P2` `impact:ux-friction` 💬1
- [#188598](https://github.com/openclaw/openclaw/issues/188598) [Bug]: doctor --fix reports auth-profiles billing cooldowns but has no repair() — detect-only, never clears the persisted disabledUntil/disabledReason `bug` `bug:behavior` `impact:auth-provider` `P0` 💬1
- [#188593](https://github.com/openclaw/openclaw/issues/188593) [Bug]: SQLite snapshot reclamation never reclaims anything - "Unrecognized snapshot artifact" every ~15 min with an empty payload `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#188585](https://github.com/openclaw/openclaw/issues/188585) [Bug]: Custom OpenAI-compatible relay silently hangs /chat/completions when maxTokens exceeds the relay real limit — no per-request timeout and no clear error `bug` `bug:crash` `P2` `impact:auth-provider` 💬1
- [#188582](https://github.com/openclaw/openclaw/issues/188582) [Bug]: Chat images become unavailable after switching session stores `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#188186](https://github.com/openclaw/openclaw/issues/188186) [Bug]: Control UI development shell import failures require manual reload despite a reachable server `bug` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬1
- [#188562](https://github.com/openclaw/openclaw/issues/188562) [Bug]: ClawRouter catalog miss after rate limiting routes Claude through OpenAI Responses `bug` `P1` `clawsweeper:source-repro` `impact:auth-provider` 💬1
- [#188563](https://github.com/openclaw/openclaw/issues/188563) [Bug]: macOS app recovery unloads Gateway then fails moving LaunchAgent to Trash (EPERM, no FDA) `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬1
- [#188285](https://github.com/openclaw/openclaw/issues/188285) [Bug]: native /tools uses the default model instead of the saved session selection `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#188534](https://github.com/openclaw/openclaw/issues/188534) [Bug]: Stale apiKey in agent models.json silently overrides newer auth profile; provider usage panel shows HTTP 401 `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬1
- [#188523](https://github.com/openclaw/openclaw/issues/188523) [Feature]: Supported fail-closed final tool-surface policy for runEmbeddedAgent `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#188524](https://github.com/openclaw/openclaw/issues/188524) [Bug]: 10.10 release drops WebChat origin from native completion scopes `P2` `clawsweeper:source-repro` `impact:message-loss` `issue-rating: 🦞 diamond lobster` 💬1
- [#188363](https://github.com/openclaw/openclaw/issues/188363) [Bug]: Workshop SDK compatibility wrapper fails the architecture guard `bug` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#188519](https://github.com/openclaw/openclaw/issues/188519) [Bug]: Git backups containing Unicode separators fail to restore `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#188520](https://github.com/openclaw/openclaw/issues/188520) [Feature]: Make Telegram usage footer indicators easier to understand `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#188451](https://github.com/openclaw/openclaw/issues/188451) [Bug]: Signal and iMessage setup hide the Homebrew error when brew prints warnings first `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#188485](https://github.com/openclaw/openclaw/issues/188485) [Bug]: Native read exceeds its page line cap at a selected blank boundary `bug` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#188336](https://github.com/openclaw/openclaw/issues/188336) fix(plugin-sdk): pass admission callback into harness completion helper `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` 💬1
- [#188508](https://github.com/openclaw/openclaw/issues/188508) Control UI chat shows coding-run cards from other users' sessions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `impact:security` 💬1
- [#188475](https://github.com/openclaw/openclaw/issues/188475) [Feature]: Control UI image viewer: step through all chat images and show a thumbnail strip `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#188491](https://github.com/openclaw/openclaw/issues/188491) Idle reset drops delivery-mirrored posts from the carried-over context `P1` `impact:session-state` 💬1
- [#188469](https://github.com/openclaw/openclaw/issues/188469) [Bug]: Control UI model picker shows "All models (1)" instead of the single remaining model `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#188441](https://github.com/openclaw/openclaw/issues/188441) [Bug]: Subagents of isolated scheduled runs get the guest toolsBySender["*"] entry instead of their parent's snapshot `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#188449](https://github.com/openclaw/openclaw/issues/188449) [Bug]: Dashboards gallery only lists the currently selected agent's boards `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#188446](https://github.com/openclaw/openclaw/issues/188446) bug: 2026.10.8 git backup loses agent-scope resolution (--agent <id> fails with Unknown agent id) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#188360](https://github.com/openclaw/openclaw/issues/188360) Sessions omits raw unknown rows when their agent is selected `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#188432](https://github.com/openclaw/openclaw/issues/188432) [Bug]: Control UI hides the assistant reply inside the work panel when the final message contains a reasoning block `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#188302](https://github.com/openclaw/openclaw/issues/188302) Update failure: not-recorded (2026.10.8) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#188417](https://github.com/openclaw/openclaw/issues/188417) [Bug]: Code Mode: models call catalog tools like `read` directly instead of inside `exec` `P2` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` `impact:ux-friction` 💬1
- [#188415](https://github.com/openclaw/openclaw/issues/188415) [Bug]: replaceFileAtomic chmods existing parent directory to 0700 (dirMode default), breaks ACL-shared workspaces after memory dreaming writes DREAMS.md `bug` `bug:behavior` `P2` `impact:other` 💬1
- [#188399](https://github.com/openclaw/openclaw/issues/188399) [Bug]: QA cross-room history recall ends with a missing-answer notice `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#188362](https://github.com/openclaw/openclaw/issues/188362) New Chat quota regression passes without rejecting storage writes `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#188389](https://github.com/openclaw/openclaw/issues/188389) Memory full-reindex livelock: revision-validation abort followed by repeated full rebuilds under steady session writes 💬1
- [#188377](https://github.com/openclaw/openclaw/issues/188377) [Bug]: Orphaned 'running' session window persists for weeks with 13k active transcript events; no supported command can end or archive it `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#188181](https://github.com/openclaw/openclaw/issues/188181) [Bug]: Completed assistant filtering drops saved reasoning and commentary `bug` `P2` `clawsweeper:source-repro` `impact:session-state` 💬1
- [#188364](https://github.com/openclaw/openclaw/issues/188364) ask_user: partial answer to a multi-question card is rejected with a raw error, session blocks and context is lost `P2` `impact:ux-friction` 💬1
- [#188068](https://github.com/openclaw/openclaw/issues/188068) [Bug]: pnpm fallback store enters managed guest workspace synchronization `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#188353](https://github.com/openclaw/openclaw/issues/188353) [Bug]: Telegram albums whose members arrive ~1 s apart are split into separate turns (500 ms media-group window, no override) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#188300](https://github.com/openclaw/openclaw/issues/188300) fix: keep message Copy failure feedback visible after the footer fades `bug` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#188335](https://github.com/openclaw/openclaw/issues/188335) [Bug]: extended-stable updates roll back with OPENCLAW_STATE_LEASE_LOST when the main-thread integrity check outlasts the 300 s plugin lifecycle lease (please backport #165680) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#188337](https://github.com/openclaw/openclaw/issues/188337) feat(gateway): preserve a verified admission fence across SDK maintenance restart `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#188320](https://github.com/openclaw/openclaw/issues/188320) [Feature]: Let the gateway tool read update status before scheduling updates `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#188220](https://github.com/openclaw/openclaw/issues/188220) [Bug]: Global conversation automation list omits jobs targeting session:global `bug` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#188274](https://github.com/openclaw/openclaw/issues/188274) Diagnostics: slow SQLite hold async=false is misleading, worker log lines lack emit timestamps; integrity-admission diagnostics gaps (2026.10.9) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#188273](https://github.com/openclaw/openclaw/issues/188273) Context-engine turn outbox has no attempt cap or dead-letter: one deterministic plugin refusal blocks a session forever (2026.10.9) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#188272](https://github.com/openclaw/openclaw/issues/188272) memory-core re-exports the full session transcript on every update; delta thresholds unused and sync not configurable (2026.10.9) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#188275](https://github.com/openclaw/openclaw/issues/188275) Hot reload of agents.defaults.models.* re-registers every plugin and stalls the gateway ~19 s (2026.10.9) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬1
- [#188268](https://github.com/openclaw/openclaw/issues/188268) [Bug]: Control UI assistant images always 401 "Unavailable" for Tailscale-identity browsers: issuer-less device token rejected as legacy-browser-token `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#188222](https://github.com/openclaw/openclaw/issues/188222) [Bug]: Manual runs targeting session:global wait behind their own caller `bug` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#188149](https://github.com/openclaw/openclaw/issues/188149) [Bug]: Automatic update strands an admitted chat while its agent database prepares `bug` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#188252](https://github.com/openclaw/openclaw/issues/188252) Refactor inference contracts and remove duplicate integration glue `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#188247](https://github.com/openclaw/openclaw/issues/188247) Android: false "Could not refresh models" banner — chat.metadata transient "Session changed while preparing its metadata. Retry the request." is never retried or cleared `P2` `maturity:stable` `impact:ux-friction` 💬1
- [#188246](https://github.com/openclaw/openclaw/issues/188246) [Docs Bug]: Add JZSTOKEN OpenAI-compatible provider setup `bug` `docs` `P3` `clawsweeper:source-repro` 💬1
- [#188038](https://github.com/openclaw/openclaw/issues/188038) [Bug]: Matrix progress streaming splits an image reply into an edited text draft and an uncaptioned image `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#188234](https://github.com/openclaw/openclaw/issues/188234) Talk calls: a mirrored voice line appended after the user turn fails replay admission ("Persisted user turn changed before replay admission") `P1` `clawsweeper:source-repro` `impact:session-state` `impact:message-loss` 💬1
- [#188224](https://github.com/openclaw/openclaw/issues/188224) [Bug]: Native Codex follow-up handoff is not recognized after explicit yield `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#188218](https://github.com/openclaw/openclaw/issues/188218) [Bug]: Completed child result is re-delivered on every turn when its delivery was suspended as permanent_failure `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#188213](https://github.com/openclaw/openclaw/issues/188213) [Feature]: Opt-in OpenAI Flex processing with Flex-sized timeouts and retries `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:linked-pr-open` 💬1
- [#188197](https://github.com/openclaw/openclaw/issues/188197) Periphery reports can select the wrong producer artifact after a partial rerun `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `clawsweeper:needs-live-repro` 💬1
- [#188209](https://github.com/openclaw/openclaw/issues/188209) [Feature]: Search past transcript text from the CLI (sessions search) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:linked-pr-open` 💬1
- [#188204](https://github.com/openclaw/openclaw/issues/188204) nextcloud-talk: accessGroup entries in rooms.<token>.allowFrom never match when groupAllowFrom is set (all room senders dropped) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#188199](https://github.com/openclaw/openclaw/issues/188199) [Feature]: List recorded update runs from the CLI (update history) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#188201](https://github.com/openclaw/openclaw/issues/188201) Memory status: expose dirty reasons and per-source session freshness `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#188193](https://github.com/openclaw/openclaw/issues/188193) Update failure: node-runtime-preflight (2026.9.5) `P0` `impact:ux-release-blocker` 💬1
- [#188183](https://github.com/openclaw/openclaw/issues/188183) [Feature]: Show what a session changed from the CLI (sessions diff) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#188131](https://github.com/openclaw/openclaw/issues/188131) [Bug]: Same-conversation scheduled review reports failed delivery after its result is committed `bug` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#188165](https://github.com/openclaw/openclaw/issues/188165) [Bug]: Explicit global cron target creates a second conversation and fails settlement `bug` `P1` `clawsweeper:source-repro` `impact:session-state` 💬1
- [#188133](https://github.com/openclaw/openclaw/issues/188133) [Bug]: original guest cannot continue its public managed-publisher PR without personal linking `bug` `P1` `clawsweeper:source-repro` `impact:security` 💬1
- [#188151](https://github.com/openclaw/openclaw/issues/188151) Withdrawn: local startup latency investigation not yet attributed `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#188143](https://github.com/openclaw/openclaw/issues/188143) [Feature]: Support explicit native @all mentions in WhatsApp group sends `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#188132](https://github.com/openclaw/openclaw/issues/188132) Native command steer fallback tests fail before queue/reject assertions `bug` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#188142](https://github.com/openclaw/openclaw/issues/188142) Session SQLite migration recovery report (session-sqlite-1793304006022-4fa94334) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#188134](https://github.com/openclaw/openclaw/issues/188134) [Feature]: Android: End Talk should let accepted agent work finish (detach), with cancel as an explicit choice `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#188126](https://github.com/openclaw/openclaw/issues/188126) Discord: a channel configured by a non-Latin name resolves to a different channel `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#188124](https://github.com/openclaw/openclaw/issues/188124) Update failure: package-install-omit-optional (2026.10.5) `P0` `impact:ux-release-blocker` 💬1
- [#188120](https://github.com/openclaw/openclaw/issues/188120) [Bug]: A route binding's session.dmScope turns off the rememberAcrossConversations default for every agent `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#188118](https://github.com/openclaw/openclaw/issues/188118) Client turn fails with "database is locked" in <1 s (no busy wait), apparently racing session reclamation's zero-timeout writes — 2026.9.6 `P1` `impact:message-loss` 💬1
- [#188116](https://github.com/openclaw/openclaw/issues/188116) Agent turns end with SessionTranscriptWriterClaimReboundError ("session writer claim changed before transcript persistence") after about 80 s `P1` `impact:session-state` `impact:message-loss` 💬1
- [#188113](https://github.com/openclaw/openclaw/issues/188113) [Feature]: Discord per-channel option to ignore @everyone/@here for requireMention (fresh request after #91415) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#188101](https://github.com/openclaw/openclaw/issues/188101) [Bug]: Selected Linux service CI fixture retains an absent payload profile `bug` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#188064](https://github.com/openclaw/openclaw/issues/188064) Local session-read errors consume configured model fallbacks `P2` `clawsweeper:source-repro` `impact:auth-provider` `issue-rating: 🦞 diamond lobster` 💬1
- [#188043](https://github.com/openclaw/openclaw/issues/188043) [Bug]: Failed media understanding drops the provider's HTTP status/code (auth, quota, rate limit) from the agent marker and the log `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#188110](https://github.com/openclaw/openclaw/issues/188110) [P0][Bug]: Gateway restart disables actively running Discord sessions by dropping room-event recovery authority `P1` `impact:session-state` 💬1
- [#188067](https://github.com/openclaw/openclaw/issues/188067) fix: keep file-to-draft attachment alive across pane refreshes `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#188084](https://github.com/openclaw/openclaw/issues/188084) [Bug]: Attachment UI tests exit on native data-URL fetch abort in Node 24.22.1 `bug` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#188053](https://github.com/openclaw/openclaw/issues/188053) Expanded Markdown table header partly covers the Close control `bug` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#188077](https://github.com/openclaw/openclaw/issues/188077) Update failure: package-install-omit-optional (2026.10.5) `P2` `impact:ux-friction` 💬1
- [#188051](https://github.com/openclaw/openclaw/issues/188051) [Feature]: Customize spoken summary style `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#188954](https://github.com/openclaw/openclaw/issues/188954) [Bug]: sessions.search on PostgreSQL falls back to scanning every transcript row after the 5th search on a connection (prepared-statement generic plan) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro`
- [#188956](https://github.com/openclaw/openclaw/issues/188956) [Feature]: chat.history on PostgreSQL holds one of two history workers blocked on ~13 synchronous round trips per call, which drives the tail under concurrency `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit`
- [#188348](https://github.com/openclaw/openclaw/issues/188348) Update failure: package-doctor (2026.9.6)

#### 🔒 Closed Issues
- [#164948](https://github.com/openclaw/openclaw/issues/164948) doctor --fix self-deadlocks on state/openclaw.sqlite: own read connection blocks exclusive maintenance lease (busyTimeoutMs=0)
- [#167270](https://github.com/openclaw/openclaw/issues/167270) Feishu: cross-session send attaches internal reply anchor (UUID instead of om_ id), first send fails with 400
- [#176342](https://github.com/openclaw/openclaw/issues/176342) [state/agent-db] stale-lease integrity gates serialize agent startup after unclean shutdown — minutes-long agent unavailability
- [#149912](https://github.com/openclaw/openclaw/issues/149912) [Bug]: Control UI renders the pre-tool text twice and the isolated-finalization answer three times on 2026.9.2 (variant of #85771)
- [#53406](https://github.com/openclaw/openclaw/issues/53406) feat: Let users steer running ACP/sub-agent sessions from Discord (and other chat surfaces)
- [#169254](https://github.com/openclaw/openclaw/issues/169254) Design record: promote JSON filter/delete fields to columns (PostgreSQL portability)
- [#178291](https://github.com/openclaw/openclaw/issues/178291) [Bug]: 2026.10.4→10.5 chat update fails post-activation Doctor on offline-maintenance authority
- [#53107](https://github.com/openclaw/openclaw/issues/53107) feat: Cron job tags/categories for organization and filtering
- [#187248](https://github.com/openclaw/openclaw/issues/187248) [Bug]: the reply-failure banner's Refresh button does nothing ("Couldn't finish this reply" recovery affordance is dead)
- [#184893](https://github.com/openclaw/openclaw/issues/184893) [Bug]: Crashed or release-blocked updater retains custody and refuses all future updates until repair succeeds
- [#126813](https://github.com/openclaw/openclaw/issues/126813) Queued peer message re-invokes an agent with answer-expected delivery hint and no acknowledgment of its just-delivered reply, causing duplicate answers in multi-agent rooms
- [#90587](https://github.com/openclaw/openclaw/issues/90587) [Bug]: Openclaw returns "run error: codex app-server exited" for RISC-V64 System
- [#130570](https://github.com/openclaw/openclaw/issues/130570) [Bug]: ci: release artifact verification gh api request can hang indefinitely (no deadline)
- [#182810](https://github.com/openclaw/openclaw/issues/182810) [Bug]: PostgreSQL turn commit makes 24 blocking bridge round trips per two-message turn (about 6x slower than SQLite)
- [#183449](https://github.com/openclaw/openclaw/issues/183449) [Bug]: Two processes making the first write for the same new agent: one fails with "Agent database target changed before creating open" (SQLite and PostgreSQL)
- [#173542](https://github.com/openclaw/openclaw/issues/173542) Update failure: candidate-doctor (2026.9.9)
- [#171005](https://github.com/openclaw/openclaw/issues/171005) Update failure: reconcile:abandoned (2026.9.9)
- [#168669](https://github.com/openclaw/openclaw/issues/168669) Update failure: finalize-doctor (2026.9.9)
- [#188052](https://github.com/openclaw/openclaw/issues/188052) [Bug]: Control UI panel fails after browser translation and background usage update
- [#146290](https://github.com/openclaw/openclaw/issues/146290) A plugin's idle DB client connection error (PostgreSQL 57P01) exits the whole Gateway instead of degrading to a tool error
- [#185191](https://github.com/openclaw/openclaw/issues/185191) [Feature]: Let a shared agent workspace opt out of 0600 for new files
- [#163824](https://github.com/openclaw/openclaw/issues/163824) [Bug]: Applied Workshop skill stays invisible to its own agent when the agent has a skills allowlist
- [#183699](https://github.com/openclaw/openclaw/issues/183699) [Bug]: Broker workers >2 stall writers ~10–15 s: idle-executor eviction terminates emptied workers and reopens pile onto cold ones
- [#168625](https://github.com/openclaw/openclaw/issues/168625) [Bug]: show_widget called through Tool Search (tool_call) loses its inline widget from chat.history
- [#188004](https://github.com/openclaw/openclaw/issues/188004) [Bug]: macOS agent-CLI shim pins the version-pinned Homebrew node path - a Homebrew node upgrade breaks every bare openclaw command until the Gateway restarts
- [#171551](https://github.com/openclaw/openclaw/issues/171551) Update failure: candidate-state-snapshot (2026.9.8)
- [#158977](https://github.com/openclaw/openclaw/issues/158977) Update failure: reconcile:abandoned (2026.9.6)
- [#157640](https://github.com/openclaw/openclaw/issues/157640) Update failure: requested (2026.9.6)
- [#186752](https://github.com/openclaw/openclaw/issues/186752) Windows: fs-safe watchers rooted at user home (config + ~/.agents/skills fallback) saturate gateway main thread
- [#179297](https://github.com/openclaw/openclaw/issues/179297) Subagent-Abschluss: State-Event-Buchung und Registry-Persistenz schlagen fehl
- [#188079](https://github.com/openclaw/openclaw/issues/188079) Heartbeat helper continuation converts successful NO_REPLY into settled-finalization fallback
- [#185844](https://github.com/openclaw/openclaw/issues/185844) [Bug]: Discord recent history re-injects processed messages into persistent Codex threads
- [#188858](https://github.com/openclaw/openclaw/issues/188858) [Bug]: Automations editor hides a rearmed one-shot’s effective next run
- [#188867](https://github.com/openclaw/openclaw/issues/188867) Telegram isolated polling re-fetches the same completed update in a tight loop (local Bot API, 2026.10.9), pegging CPU
- [#156666](https://github.com/openclaw/openclaw/issues/156666) memory-core never removes its managed dreaming cron job once a third-party slot owner turns dreaming off
- [#153498](https://github.com/openclaw/openclaw/issues/153498) [Bug]: Delivery-queue media-spool removal failures swallowed, orphaned artifacts accumulate
- [#186565](https://github.com/openclaw/openclaw/issues/186565) [Bug]: read fails on files over ~512 MB with a V8 string-limit error after loading the whole file
- [#176027](https://github.com/openclaw/openclaw/issues/176027) [Bug]: `/hooks/agent` with a sub-second `timeoutSeconds` (e.g. 0.5) runs with no timeout at all
- [#153488](https://github.com/openclaw/openclaw/issues/153488) [Bug]: openclaw status swallows vector-probe failures, reports unprobed status as current
- [#188112](https://github.com/openclaw/openclaw/issues/188112) [Bug]: Goal Resume button rejects local Codex while /goal resume supports automatic continuation
- [#169186](https://github.com/openclaw/openclaw/issues/169186) [Bug]: Provider "deadline expired" timeouts are classified as auth failures
- [#168909](https://github.com/openclaw/openclaw/issues/168909) [Docs Bug]: Automation CLI docs imply omitted --agent always selects main
- [#171986](https://github.com/openclaw/openclaw/issues/171986) [Bug]: backup creation blocks when a regular source becomes a FIFO before open
- [#180778](https://github.com/openclaw/openclaw/issues/180778) [Bug]: Home retains opaque failure warning for historical background child session
- [#188504](https://github.com/openclaw/openclaw/issues/188504) [Bug]: Composer containment test mixes rectangles from different layouts
- [#188489](https://github.com/openclaw/openclaw/issues/188489) fix: positive browser fixtures omit required method advertisements
- [#188347](https://github.com/openclaw/openclaw/issues/188347) Update failure: gateway-recovery-verification (2026.10.8)
- [#188346](https://github.com/openclaw/openclaw/issues/188346) Codex harness: native shell / apply_patch never exposed to spawned agent (Code Mode on)
- [#187310](https://github.com/openclaw/openclaw/issues/187310) [Bug]: Config patch keeps waiting for stdin after an accepted interruption
- [#188206](https://github.com/openclaw/openclaw/issues/188206) doctor --fix copies allowFrom into an empty groupAllowFrom (silent group-access change)
- [#187356](https://github.com/openclaw/openclaw/issues/187356) [Bug]: False-positive schema validation warnings logged on every turn for built-in exec tool under Google Gemini
- [#183698](https://github.com/openclaw/openclaw/issues/183698) [Feature]: PostgreSQL bridge re-parses and re-plans every statement; reuse named statements per connection
- [#186843](https://github.com/openclaw/openclaw/issues/186843) [Bug]: `agent --local --session-id` with an uppercase letter deadlocks in session admission and exits 13 with no output (main)
- [#187812](https://github.com/openclaw/openclaw/issues/187812) [Feature]: Guard the PostgreSQL memory binary prefilter against an HNSW index on embedding_bits (plus real 4096-d recall data)
- [#188160](https://github.com/openclaw/openclaw/issues/188160) fix: preserve guest own-conversation follow-up completion observation
- [#140273](https://github.com/openclaw/openclaw/issues/140273) [Bug]: claude-cli-backed turns are tool-use-invisible in the OpenClaw transcript — cliSessionBindings doesn't reliably point at the CLI session that served the turn
- [#188943](https://github.com/openclaw/openclaw/issues/188943) OpenAI Provider: configurable response header passthrough for resolved model metadata
- [#188764](https://github.com/openclaw/openclaw/issues/188764) Cold PR preparation downloads unrelated historical file contents
- [#188928](https://github.com/openclaw/openclaw/issues/188928) [Feature] Structurally separate injected untrusted-metadata decoration from the message body in the model-facing user turn (multi-agent false "metadata echo" alarms)
- [#188889](https://github.com/openclaw/openclaw/issues/188889) fix: managed browser startup fails on large macOS process listings
- [#188751](https://github.com/openclaw/openclaw/issues/188751) [Bug]: prepare_pr rejects a clean newer published project base
- [#188821](https://github.com/openclaw/openclaw/issues/188821) [Bug] Self-learning background review re-bills full conversation per iteration (prompt-cache invalidation), retries permanent 429s — exhausted provider token plan
- [#188676](https://github.com/openclaw/openclaw/issues/188676) [Bug]: Context breakdown requests the literal sibling of a selected raw-global chat
- [#164596](https://github.com/openclaw/openclaw/issues/164596) [Bug]: macOS native Settings returns 404 with remote Control UI basePath (possible prefix omission)
- [#183929](https://github.com/openclaw/openclaw/issues/183929) [Bug]: macOS Mac tab element inspection runs in the page's script world and can be spoofed
- [#188599](https://github.com/openclaw/openclaw/issues/188599) [Bug]: Unsupported guest filename blocks workspace finalization and later turns
- [#188461](https://github.com/openclaw/openclaw/issues/188461) [Bug]: Longer backtick fences leak code into plain-text session previews
- [#188642](https://github.com/openclaw/openclaw/issues/188642) ClickClack discussion rooms fail to open with "PostgreSQL plugin state keys cannot contain NUL characters" when plugin state runs on PostgreSQL
- [#188702](https://github.com/openclaw/openclaw/issues/188702) Update failure: package-install-omit-optional (2026.10.5)
- [#188697](https://github.com/openclaw/openclaw/issues/188697) Update failure: package-install-omit-optional (2026.9.8)
- [#188641](https://github.com/openclaw/openclaw/issues/188641) [Bug]: Control UI moves older commentary below unrelated input when original prompt is paged out
- [#188559](https://github.com/openclaw/openclaw/issues/188559) [Bug]: doctor --fix cannot repair a broken config when the state directory is a symlink
- [#188662](https://github.com/openclaw/openclaw/issues/188662) Context breakdown denies an authorized operator when usage is unadvertised
- [#184027](https://github.com/openclaw/openclaw/issues/184027) [Bug]: PostgreSQL Gateway keeps a connection per worker thread per agent store (~11 per store), so 4 agents need 37+ and 13 agents exhaust a 40-connection role limit at startup
- [#188622](https://github.com/openclaw/openclaw/issues/188622) update status hangs while gateway state remains in startupPhase=starting
- [#188570](https://github.com/openclaw/openclaw/issues/188570) [Bug]: A sentence that mentions /queue loses the next word and gets an "Unrecognized queue mode" reply
- [#188567](https://github.com/openclaw/openclaw/issues/188567) [Bug]: HTML Preview fragment links replace the document under unsupported resource CSP
- [#188602](https://github.com/openclaw/openclaw/issues/188602) [2026.9.36/Linux] Update journal locked after failed update + manual fallback install; repair refuses with "generation roles are ambiguous"
- [#188598](https://github.com/openclaw/openclaw/issues/188598) [Bug]: doctor --fix reports auth-profiles billing cooldowns but has no repair() — detect-only, never clears the persisted disabledUntil/disabledReason
- [#187930](https://github.com/openclaw/openclaw/issues/187930) Context inspector E2E rejects intentional idle code warming
- [#188585](https://github.com/openclaw/openclaw/issues/188585) [Bug]: Custom OpenAI-compatible relay silently hangs /chat/completions when maxTokens exceeds the relay real limit — no per-request timeout and no clear error
- [#188186](https://github.com/openclaw/openclaw/issues/188186) [Bug]: Control UI development shell import failures require manual reload despite a reachable server
- [#188285](https://github.com/openclaw/openclaw/issues/188285) [Bug]: native /tools uses the default model instead of the saved session selection
- [#188363](https://github.com/openclaw/openclaw/issues/188363) [Bug]: Workshop SDK compatibility wrapper fails the architecture guard
- [#188451](https://github.com/openclaw/openclaw/issues/188451) [Bug]: Signal and iMessage setup hide the Homebrew error when brew prints warnings first
- [#188485](https://github.com/openclaw/openclaw/issues/188485) [Bug]: Native read exceeds its page line cap at a selected blank boundary
- [#188336](https://github.com/openclaw/openclaw/issues/188336) fix(plugin-sdk): pass admission callback into harness completion helper
- [#188491](https://github.com/openclaw/openclaw/issues/188491) Idle reset drops delivery-mirrored posts from the carried-over context
- [#188360](https://github.com/openclaw/openclaw/issues/188360) Sessions omits raw unknown rows when their agent is selected
- [#188302](https://github.com/openclaw/openclaw/issues/188302) Update failure: not-recorded (2026.10.8)
- [#184862](https://github.com/openclaw/openclaw/issues/184862) [Bug]: iMessage channel cannot start on PostgreSQL: recovery-cursor plugin-state key contains a NUL separator
- [#188415](https://github.com/openclaw/openclaw/issues/188415) [Bug]: replaceFileAtomic chmods existing parent directory to 0700 (dirMode default), breaks ACL-shared workspaces after memory dreaming writes DREAMS.md
- [#188399](https://github.com/openclaw/openclaw/issues/188399) [Bug]: QA cross-room history recall ends with a missing-answer notice
- [#188362](https://github.com/openclaw/openclaw/issues/188362) New Chat quota regression passes without rejecting storage writes
- [#188031](https://github.com/openclaw/openclaw/issues/188031) [Bug]: Plugin tool catalog discovery freezes the Gateway event loop
- [#188389](https://github.com/openclaw/openclaw/issues/188389) Memory full-reindex livelock: revision-validation abort followed by repeated full rebuilds under steady session writes
- [#188181](https://github.com/openclaw/openclaw/issues/188181) [Bug]: Completed assistant filtering drops saved reasoning and commentary
- [#188364](https://github.com/openclaw/openclaw/issues/188364) ask_user: partial answer to a multi-question card is rejected with a raw error, session blocks and context is lost
- [#188068](https://github.com/openclaw/openclaw/issues/188068) [Bug]: pnpm fallback store enters managed guest workspace synchronization
- [#188300](https://github.com/openclaw/openclaw/issues/188300) fix: keep message Copy failure feedback visible after the footer fades
- [#188220](https://github.com/openclaw/openclaw/issues/188220) [Bug]: Global conversation automation list omits jobs targeting session:global
- [#176138](https://github.com/openclaw/openclaw/issues/176138) [Bug]: claude-cli turn runs without OpenClaw tools when init reports the openclaw MCP server failed
- [#188222](https://github.com/openclaw/openclaw/issues/188222) [Bug]: Manual runs targeting session:global wait behind their own caller
- [#188149](https://github.com/openclaw/openclaw/issues/188149) [Bug]: Automatic update strands an admitted chat while its agent database prepares
- [#188247](https://github.com/openclaw/openclaw/issues/188247) Android: false "Could not refresh models" banner — chat.metadata transient "Session changed while preparing its metadata. Retry the request." is never retried or cleared
- [#188038](https://github.com/openclaw/openclaw/issues/188038) [Bug]: Matrix progress streaming splits an image reply into an edited text draft and an uncaptioned image
- [#188197](https://github.com/openclaw/openclaw/issues/188197) Periphery reports can select the wrong producer artifact after a partial rerun
- [#188193](https://github.com/openclaw/openclaw/issues/188193) Update failure: node-runtime-preflight (2026.9.5)
- [#188131](https://github.com/openclaw/openclaw/issues/188131) [Bug]: Same-conversation scheduled review reports failed delivery after its result is committed
- [#188133](https://github.com/openclaw/openclaw/issues/188133) [Bug]: original guest cannot continue its public managed-publisher PR without personal linking
- [#188151](https://github.com/openclaw/openclaw/issues/188151) Withdrawn: local startup latency investigation not yet attributed
- [#187112](https://github.com/openclaw/openclaw/issues/187112) Add Particle model provider support
- [#188132](https://github.com/openclaw/openclaw/issues/188132) Native command steer fallback tests fail before queue/reject assertions
- [#188124](https://github.com/openclaw/openclaw/issues/188124) Update failure: package-install-omit-optional (2026.10.5)
- [#188118](https://github.com/openclaw/openclaw/issues/188118) Client turn fails with "database is locked" in <1 s (no busy wait), apparently racing session reclamation's zero-timeout writes — 2026.9.6
- [#188116](https://github.com/openclaw/openclaw/issues/188116) Agent turns end with SessionTranscriptWriterClaimReboundError ("session writer claim changed before transcript persistence") after about 80 s
- [#188101](https://github.com/openclaw/openclaw/issues/188101) [Bug]: Selected Linux service CI fixture retains an absent payload profile
- [#188064](https://github.com/openclaw/openclaw/issues/188064) Local session-read errors consume configured model fallbacks
- [#188110](https://github.com/openclaw/openclaw/issues/188110) [P0][Bug]: Gateway restart disables actively running Discord sessions by dropping room-event recovery authority
- [#179290](https://github.com/openclaw/openclaw/issues/179290) Model fallback tries every model for "Session capability metadata changed", a pre-provider coordination error
- [#187905](https://github.com/openclaw/openclaw/issues/187905) [Bug]: HTML Files Preview blocks allowed relative CSS and scripts under authored CSP
- [#186014](https://github.com/openclaw/openclaw/issues/186014) Chat hover and focus reveal actions on adjacent messages
- [#186778](https://github.com/openclaw/openclaw/issues/186778) Human message code blocks lose formatting and horizontal scrolling
- [#187861](https://github.com/openclaw/openclaw/issues/187861) fix: session tool preview omits managed GitHub tools
- [#188067](https://github.com/openclaw/openclaw/issues/188067) fix: keep file-to-draft attachment alive across pane refreshes
- [#186006](https://github.com/openclaw/openclaw/issues/186006) Control UI reply attribution omits the original message excerpt
- [#188053](https://github.com/openclaw/openclaw/issues/188053) Expanded Markdown table header partly covers the Close control
- [#188077](https://github.com/openclaw/openclaw/issues/188077) Update failure: package-install-omit-optional (2026.10.5)
- [#188032](https://github.com/openclaw/openclaw/issues/188032) [Bug]: Tool previews advertise tools excluded by required sandbox policy
- [#188026](https://github.com/openclaw/openclaw/issues/188026) [Bug]: Plugins menu reports no servers when a guest cannot read configuration
- [#187985](https://github.com/openclaw/openclaw/issues/187985) iOS screenshot CI repeats reusable Watch RTC builds and Swift package downloads
- [#188348](https://github.com/openclaw/openclaw/issues/188348) Update failure: package-doctor (2026.9.6)

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 258,894 · **Open issues:** 52,113 · **Last push:** <1h ago

On October 31, 2026, Hermes Agent saw no new releases, but a significant update was merged with PR #145802, which pins the birkin-mnemosyne plugin to core version 0.8.0. Several new issues were opened, with #146973 highlighting a bug in the kanban iteration-budget settlement that incorrectly writes a `timed_out` event on cards that are already marked as `done`. Additionally, #147013 raises concerns about permission errors, where sessions from the hermes_browser are consistently denied access due to three admission gates refusing them. Overall, the day's activities centered around bug reporting and minor maintenance updates rather than substantial feature releases.

#### ✅ Merged PRs
- [#145802](https://github.com/NousResearch/hermes-agent/pull/145802) chore(plugins): pin birkin-mnemosyne to core 0.8.0

#### 🐛 New Issues
- [#146973](https://github.com/NousResearch/hermes-agent/issues/146973) kanban: iteration-budget settlement writes a false `timed_out` event on an already-`done` card `type/bug` `comp/cli` `comp/cron` `comp/plugins` 💬3
- [#147013](https://github.com/NousResearch/hermes-agent/issues/147013) api_server stamps sessions source=hermes_browser but three admission gates refuse it — every hermes-browser-extension turn fails with permission_denied 💬2
- [#146846](https://github.com/NousResearch/hermes-agent/issues/146846) [Bug]: Loop guardrails that key on result hashes go blind on tool-side BLOCKED refusals and hint lines carrying a rising counter `type/bug` `comp/agent` `comp/tools` `tool/file` 💬1
- [#146984](https://github.com/NousResearch/hermes-agent/issues/146984) [Bug]: Codex image availability resolves pool without image model scope 💬1
- [#146992](https://github.com/NousResearch/hermes-agent/issues/146992) [Bug]: kanban dispatcher keeps a PluginManager (and its plugins' threads) per profile in the gateway, never released 💬1
- [#147020](https://github.com/NousResearch/hermes-agent/issues/147020) [Bug]: lifecycle guard mistakes dotted Python .kill() members for shell kill commands in serialized source 💬1
- [#147037](https://github.com/NousResearch/hermes-agent/issues/147037) [Bug]: display.interim_assistant_messages has no effect when streaming.enabled is false `bug` 💬1
- [#147025](https://github.com/NousResearch/hermes-agent/issues/147025) [Bug]: platform_toolsets.<platform>: [] still loads every MCP server; no_mcp is undocumented `bug` 💬1
- [#147038](https://github.com/NousResearch/hermes-agent/issues/147038) Gateway lifecycle guard refuses read-only source inspection; request supported remediation 💬1
- [#146983](https://github.com/NousResearch/hermes-agent/issues/146983) [Bug]: auxiliary model 'auto' sentinel strips literal auto IDs on custom providers, and 404 'is not in the catalog' never advances fallback_chain (compression falls to deterministic fallback) 💬1
- [#146826](https://github.com/NousResearch/hermes-agent/issues/146826) [Bug]: test_user_providers_model_switch is not hermetic to a live Ollama on localhost:11434 — native /api/tags probe bypasses the fetch_api_models mock `type/bug` `comp/cli` `provider/ollama` `P2` 💬1
- [#146945](https://github.com/NousResearch/hermes-agent/issues/146945) custom provider route always dual-writes reasoning + reasoning_content, so strict OpenAI-compatible gateways 400 every turn `type/bug` `comp/agent` `P3` 💬1
- [#147026](https://github.com/NousResearch/hermes-agent/issues/147026) Reasoning replay double-stuffs `reasoning` + `reasoning_content` on bare-`custom` routes → multi-turn HTTP 400 on strict hosts (SenseNova) 💬1
- [#147035](https://github.com/NousResearch/hermes-agent/issues/147035) [Bug]: Memory-provider OAuth status/start routes 500 on a multiplexed gateway (UnscopedSecretError: HERMES_HONCHO_HOST) 💬1
- [#147049](https://github.com/NousResearch/hermes-agent/issues/147049) [Feature]: Nested Chat Folders Within Projects in Hermes Desktop
- [#147048](https://github.com/NousResearch/hermes-agent/issues/147048) Agent cannot create tracked goals and completion criteria (subgoals) when asked in natural language
- [#147039](https://github.com/NousResearch/hermes-agent/issues/147039) [Bug]: Busy/steer path bypasses _prefix_inbound_sender_context — same sender attributed differently depending on whether the session was busy `bug`
- [#147041](https://github.com/NousResearch/hermes-agent/issues/147041) [Bug]: Leftover steer loses reply_expected, so a bare [SILENT] is replaced with the "unexpected silence" message `bug`
- [#147036](https://github.com/NousResearch/hermes-agent/issues/147036) [Bug]: /api/config/schema builds the config schema on the event loop, freezing every other request (and /api/ws chat) for ~3 s
- [#147019](https://github.com/NousResearch/hermes-agent/issues/147019) [Feature]: Override for hardline checks
- [#147016](https://github.com/NousResearch/hermes-agent/issues/147016) [Bug]: Hermes desktop app has no taskbar icon on Windows 11 - generic Electron icon, grouped with unrelated apps
- [#147015](https://github.com/NousResearch/hermes-agent/issues/147015) [Bug]: Post-update banner claims "Another update in progress" although no second updater exists (long-lived gateway process)
- [#147014](https://github.com/NousResearch/hermes-agent/issues/147014) [Bug]: Update-completion banner permanently overlays TUI chat after hermes update; messages send but no replies render until restart
- [#147012](https://github.com/NousResearch/hermes-agent/issues/147012) [Feature]: Choose session or global scope after selecting a model in Telegram
- [#147011](https://github.com/NousResearch/hermes-agent/issues/147011) System interrupts are reported to child agents and tool hooks as user interrupts
- [#147010](https://github.com/NousResearch/hermes-agent/issues/147010) Spool recovery: a failed head on the session_resolver path lets later rows write first
- [#147008](https://github.com/NousResearch/hermes-agent/issues/147008) session_search: no setting stops a profile reading other profiles sessions

#### 🔒 Closed Issues
- [#147013](https://github.com/NousResearch/hermes-agent/issues/147013) api_server stamps sessions source=hermes_browser but three admission gates refuse it — every hermes-browser-extension turn fails with permission_denied
- [#142962](https://github.com/NousResearch/hermes-agent/issues/142962) chore(catalog): limbic entry @ 0.9.0

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 95,936 · **Open issues:** 9,642 · **Last push:** <1h ago

No new versions were released for vLLM in the past 24 hours. Significant merged pull requests include a bugfix for parsing closed Qwen3 tool parameters during streaming (#64675), performance improvements in front-end decoding of streamed custom-tool input (#64674), and enhancements for ROCm support, including a step-5-preview on ROCm hardware (#61837). A noteworthy new issue involves the Responses API rejecting `input_text` content for Mistral Large 4 under a specific tokenizer mode (#64789), which may indicate underlying challenges in handling different model configurations. Overall, the day consisted primarily of maintenance updates and bugfixes aimed at improving performance and stability.

#### ✅ Merged PRs
- [#64675](https://github.com/vllm-project/vllm/pull/64675) [Bugfix][Parser] Parse closed Qwen3 tool parameters once while streaming
- [#64673](https://github.com/vllm-project/vllm/pull/64673) [Perf][Parser] Skip tool-argument conversions after a replaced value
- [#64575](https://github.com/vllm-project/vllm/pull/64575) [Frontend] Reject Anthropic-defined tools by type in /v1/messages
- [#64674](https://github.com/vllm-project/vllm/pull/64674) [Perf][Frontend] Decode streamed custom-tool input incrementally
- [#30614](https://github.com/vllm-project/vllm/pull/30614) [Feature] Default EPLB num_redundant_experts to minimum valid value
- [#64830](https://github.com/vllm-project/vllm/pull/64830) [Config] Move V2-only checks into V1 model runner unsupported features
- [#61837](https://github.com/vllm-project/vllm/pull/61837) [ROCm][Model] Step-5-Preview support on ROCm
- [#64821](https://github.com/vllm-project/vllm/pull/64821) [Doc] MiniMax-M3.1-Flash: add GB300 InferenceX AgentX presets
- [#64740](https://github.com/vllm-project/vllm/pull/64740) [ROCm][CI] Run MI355 MoE Kernels on a full MI355 instead of DPX
- [#64577](https://github.com/vllm-project/vllm/pull/64577) [ROCm][CI] Prebuild mamba-ssm and causal-conv1d into the CI test image
- [#62111](https://github.com/vllm-project/vllm/pull/62111) [Bugfix] Fix multi-layer MTP module selection for Qwen3.5 and Qwen3-Next
- [#64457](https://github.com/vllm-project/vllm/pull/64457) [Bugfix][Core] Keep offline DP ranks' collectives aligned with async scheduling
- [#64509](https://github.com/vllm-project/vllm/pull/64509) [Perf][Qwen3.5] (NVIDIA-only) Fused norm+quant and gate+quant
- [#64602](https://github.com/vllm-project/vllm/pull/64602) [CI] Remove the retired A100 queue's steps; keep their live AMD mirrors standalone
- [#64357](https://github.com/vllm-project/vllm/pull/64357) [Model Loader] Run the model-level post-load hook once at the end of every load and reload
- [#61995](https://github.com/vllm-project/vllm/pull/61995) [CPU][MRv2] Enable MRv2 for non-triton CPU backends
- [#64138](https://github.com/vllm-project/vllm/pull/64138) [Perf][DSA] Read BF16 logits directly in persistent top-k
- [#64691](https://github.com/vllm-project/vllm/pull/64691) [RL] NCCL weight transfer: release cached memory after a weight update
- [#63774](https://github.com/vllm-project/vllm/pull/63774) [ROCm] Bump AITER to v0.1.27
- [#64779](https://github.com/vllm-project/vllm/pull/64779) [Deps] Upgrade to huggingface_hub 2
- [#63482](https://github.com/vllm-project/vllm/pull/63482) [Bugfix] [Tokenizer] Preserve Hub model identity when loading tokenizer snapshots
- [#63761](https://github.com/vllm-project/vllm/pull/63761) [Bugfix] Fix int32 token offset overflows in Qwen3.5 attention and GDN prefill kernels
- [#57770](https://github.com/vllm-project/vllm/pull/57770) [Perf][Spec Decode] Split-vocabulary Triton argmax for the DSpark greedy draft
- [#63922](https://github.com/vllm-project/vllm/pull/63922) [Bugfix] Skip more weight formats in the tokenizer/processor snapshot
- [#60873](https://github.com/vllm-project/vllm/pull/60873) [Bugfix] Fix depyf incompatibility with Inductor's set_sys_modules
- [#63886](https://github.com/vllm-project/vllm/pull/63886) [Spec Decode][DSpark] Batch-sharded sequential block
- [#61380](https://github.com/vllm-project/vllm/pull/61380) [Bugfix] Resolve HF paths when loading sharded state
- [#46370](https://github.com/vllm-project/vllm/pull/46370) [Feature] Initial support for fault tolerant ep using scale-down
- [#46335](https://github.com/vllm-project/vllm/pull/46335) [Doc] Fix %% rendering in CLI reference for --safetensors-load-strategy
- [#64188](https://github.com/vllm-project/vllm/pull/64188) [Doc] Fix Case 4 math rendering in hybrid KV cache manager
- [#64666](https://github.com/vllm-project/vllm/pull/64666) [Docs] Fix dead links to moved llm-d, Dynamo, TPU, Ray and Tensorizer pages
- [#63205](https://github.com/vllm-project/vllm/pull/63205) [Model Runner V2][Spec Decode] Speculator config classes and custom speculators
- [#64727](https://github.com/vllm-project/vllm/pull/64727) [ROCm][CI] Fix AITER MXFP4 padding tests failing instead of skipping on MI300
- [#62007](https://github.com/vllm-project/vllm/pull/62007) [ROCm][DI][CI] Add DeepSeek-V3 NIXL accuracy steps
- [#64638](https://github.com/vllm-project/vllm/pull/64638) [Perf] Fuse all-gather and norm for Muse Spark hybrid MoE

#### 🐛 New Issues
- [#64789](https://github.com/vllm-project/vllm/issues/64789) [Bug]: Responses API rejects `input_text` content for Mistral Large 4 with --tokenizer-mode mistral `bug` `mistral` 💬3
- [#64758](https://github.com/vllm-project/vllm/issues/64758) [Bug]: Kimi-K3 outputs turn into `!!!!` (token 0) streams under load (FlashKDA spreads one NaN across requests; FlashMLA SM90 decode PDL race) `kimi` `k3` 💬2
- [#64654](https://github.com/vllm-project/vllm/issues/64654) [Feature]: Add ID-only request logging while preserving lifecycle events 💬3
- [#64714](https://github.com/vllm-project/vllm/issues/64714) [Bug]: `MessageQueue.shutdown()` cannot wake a reader blocked on an overflow payload `bug` 💬1
- [#64824](https://github.com/vllm-project/vllm/issues/64824) [Feature]: Close the remaining DeepGEMM (and other kernel-library) runtime-JIT gaps in kernel warmup `kimi` 💬1
- [#64814](https://github.com/vllm-project/vllm/issues/64814) [Bug]: MooncakeStoreConnector: one TP rank stalls (its GPU idle, peers spinning) on Kimi-K3 under agentic load `kimi` `k3` 💬1
- [#64801](https://github.com/vllm-project/vllm/issues/64801) [Feature]: Accept the global DP rank in X-data-parallel-rank under hybrid/external LB
- [#64793](https://github.com/vllm-project/vllm/issues/64793) [Bug]: Responses API rejects `developer` role for Mistral Large 4 with --tokenizer-mode mistral `bug` `mistral` 💬1
- [#64791](https://github.com/vllm-project/vllm/issues/64791) [Performance][ROCm]: set HSA_SCRATCH_SINGLE_LIMIT in the ROCm image: per-dispatch scratch allocation costs ~130 us before large RCCL all-reduces on MI355X `rocm` 💬1
- [#64778](https://github.com/vllm-project/vllm/issues/64778) [Bug]: Non-streaming `/v1/chat/completions/derender` and `/v1/completions/derender` report `usage.prompt_tokens: 0` when the request omits `prompt_tokens`, ignoring `generate_response.usage` `bug` 💬1
- [#64652](https://github.com/vllm-project/vllm/issues/64652) [Bug]: EAGLE3 draft acceptance collapses after the first position with --block-size > 128 (MiniMax-M3, GB200) `minimax` 💬1
- [#64679](https://github.com/vllm-project/vllm/issues/64679) [Bug]: fuse_rope_kvcache breaks draft_model/EAGLE spec decode when the drafter's attention shape differs from the target's (ROCm) `rocm` `speculative-decoding` 💬1
- [#64704](https://github.com/vllm-project/vllm/issues/64704) [Bug]: PyTorch `.bin` checkpoints can silently lose a distinct `lm_head` when embeddings are configured as tied `bug` 💬1
- [#64648](https://github.com/vllm-project/vllm/issues/64648) [RFC]: Direct layerwise and chunk-wise KV WRITE with Mooncake
- [#64725](https://github.com/vllm-project/vllm/issues/64725) [RFC]: Integrating LeapQuant into vLLM — INT8 Quantization of GDN/KDA Linear Attention Recurrent States `rocm` `RFC` `quantization` `kimi` 💬1
- [#64680](https://github.com/vllm-project/vllm/issues/64680) [Bug]: ROCM_AITER_FA crashes with draft_model/EAGLE drafters in extend_forward (None prefix in merge_attn_states; cp_mha_gather_cache illegal address) `rocm` `speculative-decoding` 💬1
- [#64664](https://github.com/vllm-project/vllm/issues/64664) [Bug][ROCm] vLLM fails to detect AMD GPU in WSL when AMDSMI cannot initialize `rocm` 💬1
- [#64645](https://github.com/vllm-project/vllm/issues/64645) [Feature]: Support LiquidAI LFM3 models
- [#64632](https://github.com/vllm-project/vllm/issues/64632) [Tracking] Muse Spark Open Improvement `rocm` 💬1
- [#64808](https://github.com/vllm-project/vllm/issues/64808) [Bug]: Gemma-4 MTP halves prefix-cache hits with `--prefix-cache-retention-interval` `bug`
- [#64810](https://github.com/vllm-project/vllm/issues/64810) [Feature]: Anthropic-defined tools (web_search, bash, text_editor, ...) in /v1/messages `feature request` `tool-calling`
- [#64809](https://github.com/vllm-project/vllm/issues/64809) [Bug]: `raw_logprobs` are computed after the structured-output grammar mask `bug` `structured-output`
- [#64790](https://github.com/vllm-project/vllm/issues/64790) [Bug]: In-tree LMCache integration can't be imported with lmcache >= 0.5.6 `kv-connector`
- [#64780](https://github.com/vllm-project/vllm/issues/64780) [RFC]: DBO support for FlashInfer NVLink all-to-all backends (single-node H200/B200 first)
- [#64776](https://github.com/vllm-project/vllm/issues/64776) [RFC]: Single Batch Overlap (down GEMM ↔ combine) for DeepEP LL
- [#64761](https://github.com/vllm-project/vllm/issues/64761) [Bug]: cu134 nightly image has conflicting PyTorch/Triton dependency metadata (aarch64)
- [#64696](https://github.com/vllm-project/vllm/issues/64696) [Bug]: `npcache` silently serves stale weights after the source `.bin` checkpoint changes `bug`
- [#64713](https://github.com/vllm-project/vllm/issues/64713) [Feature]: Add an NVIDIA RTX PRO 6000 Blackwell deployment recipe for DeepSeek-V4-Flash-Vision-Exp `feature request` `deepseek` `nvidia` `DSv4`
- [#64669](https://github.com/vllm-project/vllm/issues/64669) [Bug]: Qwen GDN models fail to start with CPU weight offloading without UVA `qwen` `kimi`
- [#64639](https://github.com/vllm-project/vllm/issues/64639) [Bug]: 0.30.0 kimi-k3 PD分离 使用MLA-Block5草稿模型版本接收率基本为0 `bug` `kimi` `k3`

#### 🔒 Closed Issues
- [#30075](https://github.com/vllm-project/vllm/issues/30075) [Feature]: Default eplb num_redundant_experts to the lowest valid value if unspecified
- [#43750](https://github.com/vllm-project/vllm/issues/43750) [Bug]: [XPU] compressed-tensors WNA16 MoE selector ignores XPU platform, crashes on Marlin path
- [#44734](https://github.com/vllm-project/vllm/issues/44734) CUDA device-side assert with nvidia/Qwen3.6-35B-A3B-NVFP4 + MTP on nightly f91fb2f
- [#54437](https://github.com/vllm-project/vllm/issues/54437) [Bug]: structured output can sample unconstrained tokens when the draft hand-off goes stale (spec decode + async scheduling + PP)
- [#45661](https://github.com/vllm-project/vllm/issues/45661) [Bug]: NotImplementedError: No NvFp4 MoE backend supports the deployment configuration.
- [#46311](https://github.com/vllm-project/vllm/issues/46311) [Bug]: INCConfig doesn't support hybrid INT4+FP8 AutoRound checkpoints — weight_scale_inv params not loaded, model produces garbage output
- [#46707](https://github.com/vllm-project/vllm/issues/46707) [RFC]: Support for Domino speculative decoding in vLLM
- [#46726](https://github.com/vllm-project/vllm/issues/46726) [Bug]: sparse-MLA indexer error with GLM 5.2 NVFP4 on RTX 6000 Pro SM120
- [#47351](https://github.com/vllm-project/vllm/issues/47351) [RFC]: Sparse-attention-based self-speculative decoding (StreamingLLM, then Vegas)
- [#64391](https://github.com/vllm-project/vllm/issues/64391) [Bug]: Security concern: `/invocations` endpoint is enabled by default and bypasses API key authentication
- [#60258](https://github.com/vllm-project/vllm/issues/60258) [ROCm][CI] ci_base images built from ROCm 10.0 nightly wheels have a non-reproducible ~9.5 GiB top layer
- [#45154](https://github.com/vllm-project/vllm/issues/45154) [Rust Frontend][RFC]: Elastic Expert Parallel support
- [#46715](https://github.com/vllm-project/vllm/issues/46715) [Bug]: When the startup parameter "--max-model-len auto --enable-chunked-prefill -- enable-prefix-caching --max-num-batched-tokens 65536", garbled characters are displayed in the output of the GLM-5.1-NVFP4 model deployed using the VLLM Docker image.
- [#46743](https://github.com/vllm-project/vllm/issues/46743) [Feature]: migrate NVSHMEM patches for RoCE from llm-d to vllm image
- [#50699](https://github.com/vllm-project/vllm/issues/50699) [Bug]: DiffusionGemma: runtime CUDA OOM under concurrent decode (fp32 canvas×vocab temporaries)
- [#47020](https://github.com/vllm-project/vllm/issues/47020) Backport workflow-hardening fix (excessive-permissions) to 5 release branches
- [#47022](https://github.com/vllm-project/vllm/issues/47022) [New Model]: Couqi XTTS_v2 multilanguage text-to-speech
- [#47069](https://github.com/vllm-project/vllm/issues/47069) [Bug]: Concurrent temperature=0 non-determinism in vLLM, FLASH_ATTN batch-invariant path on Hopper
- [#47095](https://github.com/vllm-project/vllm/issues/47095) [RFC]: Extension points for backends whose physical layout isn't a permutation of the logical layout (weights, quant scales, KV-cache, MLA, EP)
- [#47223](https://github.com/vllm-project/vllm/issues/47223) [Installation]: old nccl version in docker container
- [#47275](https://github.com/vllm-project/vllm/issues/47275) [Bug]: Gemma4 MoE (26B-A4B) aborts with "nanobind::builtin_exception: Expected an MLIR object (got OpResultList)" during CUDA graph capture on H200 (SM90) with FA4
- [#47280](https://github.com/vllm-project/vllm/issues/47280) [RFC]: Implement return indexer topk for sparse attention.
- [#47339](https://github.com/vllm-project/vllm/issues/47339) Respect explicit VLLM_TARGET_DEVICE=tpu on macOS
- [#63925](https://github.com/vllm-project/vllm/issues/63925) [Bug]: Tokenizer/processor snapshot (#60825) downloads model weights it doesn't ignore (`*.ot`, `*.tflite`, ...): ~1.57 GB extra for gpt2
- [#63759](https://github.com/vllm-project/vllm/issues/63759) [Bug]: Qwen3.5: int32 token-offset overflows in three Triton kernels give wrong outputs or illegal memory access at large `--max-num-batched-tokens`
- [#64178](https://github.com/vllm-project/vllm/issues/64178) [Docs] Case 4 equations render as literal LaTeX on published Hybrid KV Cache Manager page
- [#62217](https://github.com/vllm-project/vllm/issues/62217) [Bug][HiSparse]: Two admitted async KV loads stall the scheduler on host blocks

### SGLang (`sgl-project/sglang`)

**Stars:** 38,308 · **Open issues:** 6,276 · **Last push:** <1h ago

On October 31, 2026, there were no new releases for SGLang, but several important changes were merged, including the addition of the Qwen3.8-Flash-Next B300 NVFP4 AgentX recipes as well as a recipe for the MI355X AgentX. Notable fixes included enhancements to the diffusion process by checking cancellation at stage boundaries and ensuring deterministic tie-breaking in the Minimax-M3 CUDA implementation. Performance improvements were also observed with updates to hold a Qwen-Image-2.1 norm in memory and restore TP decode fusion for GLM-5.3. Among new issues, the reported bug regarding slower decoding times on GB200 for the Qwen3.8-Flash-Next-FP8 has drawn particular attention.

#### ✅ Merged PRs
- [#47560](https://github.com/sgl-project/sglang/pull/47560) [Doc] cookbook: Add Qwen3.8-Flash-Next B300 NVFP4 AgentX recipes
- [#47549](https://github.com/sgl-project/sglang/pull/47549) [CI] chore: add CI permissions and diffusion CODEOWNERS for JackZeng0208
- [#47320](https://github.com/sgl-project/sglang/pull/47320) RL: Read byte ranges of output store fields into caller memory
- [#47240](https://github.com/sgl-project/sglang/pull/47240) [Fix] diffusion: Check cancellation at stage and sampling boundaries
- [#45174](https://github.com/sgl-project/sglang/pull/45174) [Fix] Minimax-M3: Deterministic tie-breaking in the CUDA radix decode top-k
- [#47465](https://github.com/sgl-project/sglang/pull/47465) [Perf] diffusion: Hold a Qwen-Image-2.1 Q/K norm + RoPE row with a half-warp
- [#47467](https://github.com/sgl-project/sglang/pull/47467) [Perf] diffusion: Replay Qwen-Image-2.1's text-only encoder from CUDA graphs
- [#40890](https://github.com/sgl-project/sglang/pull/40890) [Perf] [NPU] mimo: fold attention_value_scale into o_proj weights
- [#47380](https://github.com/sgl-project/sglang/pull/47380) [Doc] [NPU] docs: Rename NPU hardware to A2/A3 Series products
- [#44825](https://github.com/sgl-project/sglang/pull/44825) [Doc] blogs: Sync LMSYS SGLang blog cards
- [#47522](https://github.com/sgl-project/sglang/pull/47522) [CI] codespell: Ignore miniTE blog name
- [#47556](https://github.com/sgl-project/sglang/pull/47556) [Test] rust-server: Drop request-fake members the output streamer no longer reads
- [#47544](https://github.com/sgl-project/sglang/pull/47544) [Refactor] disaggregation: Commit the PD handoff token through the shared per-token commit
- [#47520](https://github.com/sgl-project/sglang/pull/47520) [Doc] [AMD] cookbook: Add Qwen3.8-Flash-Next MI355X AgentX recipe
- [#38565](https://github.com/sgl-project/sglang/pull/38565) [Fix] sampling: deterministic top-p / top-k renorm when tp_size > 1 (TP rank divergence in DFlash/DSpark)
- [#46857](https://github.com/sgl-project/sglang/pull/46857) [Perf] GLM-5.3: Restore TP decode fusion and graph sizing with CP prefill
- [#47177](https://github.com/sgl-project/sglang/pull/47177) [Perf] pd: Copy the last chunk's state page indices to the host without a scheduler sync
- [#47070](https://github.com/sgl-project/sglang/pull/47070) [Perf] [NVIDIA] moe: Add H20 block-FP8 Triton configs for Qwen3-30B-A3B
- [#45683](https://github.com/sgl-project/sglang/pull/45683) [Feat] muse-spark: Infer hardware launch defaults and simplify cookbook recipes
- [#47295](https://github.com/sgl-project/sglang/pull/47295) [Perf] cuda-graph: Upload each deduplicated executable on a private stream before its first launch
- [#45834](https://github.com/sgl-project/sglang/pull/45834) [Fix] diffusion: LoRA merge cache key identity and eviction
- [#43866](https://github.com/sgl-project/sglang/pull/43866) [Fix] multimodal: Return 400 for images Pillow refuses as decompression bombs
- [#47521](https://github.com/sgl-project/sglang/pull/47521) [Fix] scheduler: Abort retracted requests whose KV the recompute cannot rebuild
- [#46884](https://github.com/sgl-project/sglang/pull/46884) [Perf] hicache: Publish prefill read-done when offload copies are fenced on the forward stream
- [#47353](https://github.com/sgl-project/sglang/pull/47353) [Feat] fpm: Retain captured intervals and support multiple FpmTiming listeners
- [#45360](https://github.com/sgl-project/sglang/pull/45360) [Doc] cookbook: add Muse Spark unified memory control
- [#46721](https://github.com/sgl-project/sglang/pull/46721) [Test] cuda-graph: Add a standalone CUDA-graph lifetime validation tool and its skill
- [#43898](https://github.com/sgl-project/sglang/pull/43898) [Refactor] scheduler: Remove PD multiplexing
- [#47540](https://github.com/sgl-project/sglang/pull/47540) [Fix] spec: Seed the DSpark MLA draft weights in the verify-rows test
- [#47539](https://github.com/sgl-project/sglang/pull/47539) [Doc] cookbook: Use latest image for Muse Spark Open deployment
- [#42248](https://github.com/sgl-project/sglang/pull/42248) [Perf] srt: Native tensor output and prefill scoring optimizations
- [#47537](https://github.com/sgl-project/sglang/pull/47537) [Fix] rust-server: Give the mixed-logprob frame test's payload flat output ids with row offsets
- [#47106](https://github.com/sgl-project/sglang/pull/47106) [Perf] rust-server: Flatten egress logprob columns only for rows that carry them
- [#47160](https://github.com/sgl-project/sglang/pull/47160) [Fix] rust-server: Let an HTTP layer start a native /generate request's timing
- [#47130](https://github.com/sgl-project/sglang/pull/47130) [Fix] bench: Size the one-batch KV-capacity skip by the heaviest attention-DP rank for ragged batches
- [#43897](https://github.com/sgl-project/sglang/pull/43897) [Refactor] scheduler: Finish queue-popped aborts in place
- [#47112](https://github.com/sgl-project/sglang/pull/47112) [Feat] rust-server: Give the native /generate hook the request, its headers and its outcome
- [#46963](https://github.com/sgl-project/sglang/pull/46963) [Feat] rust-server: Report the scheduler's per-request stats in native /generate meta_info
- [#47445](https://github.com/sgl-project/sglang/pull/47445) [Fix] ipc: Make multimodal payloads, hidden states and weight-update dtypes round-trip under msgpack IPC
- [#46454](https://github.com/sgl-project/sglang/pull/46454) [Perf] diffusion: HunyuanImage-3 prefix K/V cache, opt-in FA3 attention and think-prompt support
- [#47333](https://github.com/sgl-project/sglang/pull/47333) [Fix] Spec: Fall back to eager when the ragged-verify tier exceeds the captured grid
- [#47331](https://github.com/sgl-project/sglang/pull/47331) [Doc] [AMD] cookbook: Add DCP4 to the GLM-5.2 MI355X MXFP4 high-throughput recipe
- [#46720](https://github.com/sgl-project/sglang/pull/46720) [Fix] cuda-graph: Keep attention metadata and SP workspaces alive across graph variants of a batch size
- [#47152](https://github.com/sgl-project/sglang/pull/47152) [CI] [AMD] pr-test: Move the Kimi-K2.5 MXFP4 BCG test to nightly
- [#47319](https://github.com/sgl-project/sglang/pull/47319) [Fix] rust-server: Serve /v1/loads from every listener under multi-node DP attention
- [#47113](https://github.com/sgl-project/sglang/pull/47113) [Fix] rust-server: Fix the metrics flush race and the default-priority label
- [#46937](https://github.com/sgl-project/sglang/pull/46937) [Fix] anthropic: Preserve cache_salt for Messages requests
- [#46277](https://github.com/sgl-project/sglang/pull/46277) [Perf] diffusion: Wan-Animate-2 decode clamp, LTX-2 Bongmath closed form, rollout log-prob/CPU-copy, validators NaN gate, in-place decode normalize
- [#47466](https://github.com/sgl-project/sglang/pull/47466) [Perf] diffusion: Skip the cross-request cache for Qwen3-VL vision features
- [#44750](https://github.com/sgl-project/sglang/pull/44750) [Fix] nemotron-h: Allow explicit CuTe DSL W4A16 MoE
- [#44268](https://github.com/sgl-project/sglang/pull/44268) [Fix] moe: Fix --enable-fused-moe-sum-all-reduce outside CUDA and with LoRA hooks
- [#45328](https://github.com/sgl-project/sglang/pull/45328) [Perf] pd: Publish decode KV destinations without host syncs under overlap
- [#47483](https://github.com/sgl-project/sglang/pull/47483) [Chore] [AMD] mono-kernel: Bump sgl-amd-mono for Qwen3.8-Flash-Next
- [#47087](https://github.com/sgl-project/sglang/pull/47087) [Feat] RL: Hash raw received weights by name in check_weights
- [#47086](https://github.com/sgl-project/sglang/pull/47086) [Feat] kv-canary: Pass through canary info when the KV-canary is enabled
- [#47085](https://github.com/sgl-project/sglang/pull/47085) [Feat] RL: Report prompt KV weight versions in generation metadata
- [#47084](https://github.com/sgl-project/sglang/pull/47084) [Fix] environ: Register the batch-invariant matmul fallback flag in Envs
- [#47411](https://github.com/sgl-project/sglang/pull/47411) [Feat] diffusion: Native Gemma-4-Unified text encoder for LTX-2.5
- [#47270](https://github.com/sgl-project/sglang/pull/47270) [Fix] diffusion: recover LTX eager performance without disabling fusion
- [#45496](https://github.com/sgl-project/sglang/pull/45496) [Fix] data_parallel_controller: Fix active ranks update and simplify round-robin dispatch
- [#46907](https://github.com/sgl-project/sglang/pull/46907) [Fix] minimax-h3: Swap the fc1 halves of the Acc LoRA in build_minimax_h3_pdd_weights
- [#44725](https://github.com/sgl-project/sglang/pull/44725) [Fix] minimax_h3: Support out-of-tree platforms
- [#47464](https://github.com/sgl-project/sglang/pull/47464) [Doc] cookbook: Refresh SemiAnalysis AgentX launches to InferenceX main ea8b3439
- [#44438](https://github.com/sgl-project/sglang/pull/44438) [Fix] deterministic: Validate the per-phase attention backends

#### 🐛 New Issues
- [#47397](https://github.com/sgl-project/sglang/issues/47397) SGLANG_JIT_DEEPGEMM_FAST_WARMUP on DeepSeek-V4.1: 3-5x faster cold start, no runtime degradation detectable at chunked-prefill 16384 💬2
- [#47562](https://github.com/sgl-project/sglang/issues/47562) [AITER-Upgrade] PR readiness gfx1250 (MI45x)
- [#47515](https://github.com/sgl-project/sglang/issues/47515) [Bug] diffusion: Nomas KV budget ignores freed cached memory, and SP divisibility is checked too late
- [#47511](https://github.com/sgl-project/sglang/issues/47511) [Bug] rust-server: /internal/peer serves a relayed control request without checking it was meant for this DP rank
- [#47509](https://github.com/sgl-project/sglang/issues/47509) [Bug] rust-server: gather_server_endpoints can advertise a loopback or unroutable address to other nodes, and only warns
- [#47508](https://github.com/sgl-project/sglang/issues/47508) [Bug][ROCm] Kimi-K3 fused KDA input-projection buffers are replaced on weight reload
- [#47505](https://github.com/sgl-project/sglang/issues/47505) [Bug] rust-server: gather_server_endpoints runs on elastic-EP joiners over a WORLD group the serving ranks never enter
- [#47501](https://github.com/sgl-project/sglang/issues/47501) [Bug] Qwen3.8-Flash-Next-FP8 TP4/EP4 decode ~5% slower on GB200 since #45917 (FP8 TRT-LLM MoE leaves in-kernel routing under EP)
- [#47490](https://github.com/sgl-project/sglang/issues/47490) [Bug] EAGLE draft extend crashes with negative dimension under DP attention + FlashInfer A2A + prefill CUDA graph
- [#47481](https://github.com/sgl-project/sglang/issues/47481) [Performance] Reproducible cache hit-rate dip during L2/L3 capacity pressure with HiCache + Mooncake
- [#47409](https://github.com/sgl-project/sglang/issues/47409) [Bug] Attention-DP ranks are indistinguishable to routers and dashboards: `KvMetrics.data_parallel_rank` is always 0 and Prometheus series omit `dp_rank`
- [#47428](https://github.com/sgl-project/sglang/issues/47428) [Bug] S3 model URI overrides explicit remote_instance + modelexpress with runai_streamer
- [#47399](https://github.com/sgl-project/sglang/issues/47399) [Bug] [NPU] 图模式下走Fia v2算子，torch_npu.npu_fused_infer_attention_score_v2函数入参错误
- [#47461](https://github.com/sgl-project/sglang/issues/47461) stop_regex: a non-literal match is left in the returned text, and no_stop_trim has no effect for regex stops
- [#47444](https://github.com/sgl-project/sglang/issues/47444) [Bug] NemotronHConfig rejects transformers 5 layer types `linear_attention` / `full_attention` in config.json
- [#47420](https://github.com/sgl-project/sglang/issues/47420) [Bug] benchmark: --dataset-name random silently requires the ShareGPT download; fails on offline/restricted networks
- [#47382](https://github.com/sgl-project/sglang/issues/47382) [Doc][NPU] Various missing clarifications, prerequisites and validation steps in Ascend NPU documentation

#### 🔒 Closed Issues
- [#34740](https://github.com/sgl-project/sglang/issues/34740) [Bug] SGLANG_SIMULATE_ACC_LEN silently degrades detokenization to O(n²) — `predict.fill_(100)` emits a byte-fallback token, and the `endswith("\ufffd")` commit gate then never advances the incremental-detokenization offsets
- [#30314](https://github.com/sgl-project/sglang/issues/30314) [Bug] Scheduler event loop blocks on Mamba eviction under large-context requests, causing server hang and process kill
- [#32286](https://github.com/sgl-project/sglang/issues/32286) [Bug] MiniMax-M3 tool-call parser: top-level `oneOf` parameters schema not resolved (numbers become strings, arrays leak raw tags)
- [#37183](https://github.com/sgl-project/sglang/issues/37183) AMD MI308X SGLang GLM-5.3-Flash ValueError: The checkpoint you are trying to load has model type `glm5_next` but Transformers does not recognize this architecture.
- [#37052](https://github.com/sgl-project/sglang/issues/37052) [Bug] Qwen3.8-Flash-Next + NEXTN full decode graph: repeated dual-rank invalid-probability asserts on GB10
- [#37263](https://github.com/sgl-project/sglang/issues/37263) [Bug] /v1/responses silently drops prompt_cache_key instead of applying it to radix-cache identity
- [#37097](https://github.com/sgl-project/sglang/issues/37097) [Bug] Pretokenized image requests can crash GLM MRoPE with a stale retokenized mask
- [#37283](https://github.com/sgl-project/sglang/issues/37283) [Bug] A non-object entry in a tool-call array discards the valid calls beside it
- [#37238](https://github.com/sgl-project/sglang/issues/37238) Does SGLang have a demo for running the VBench dataset accuracy evaluation on Wan2.2?
- [#37215](https://github.com/sgl-project/sglang/issues/37215) [Bug] --dp 8 intermittently fails with TCPStore EADDRINUSE on single-node 8×H800
- [#37186](https://github.com/sgl-project/sglang/issues/37186) [Bug] Qwen3.5 visual encoder weights dropped by PP layer-range filter in load_weights
- [#47289](https://github.com/sgl-project/sglang/issues/47289) [RFC] Add per-step TBO admission policy and fallback diagnostics
- [#46666](https://github.com/sgl-project/sglang/issues/46666) [Bug] DeepSeek-V4.1 DSpark with SGLANG_ENABLE_DP_SPEC_PREFILL_COORDINATION: decoder-tail run_idle cuts verify rows to 128 ("next_token_logits row count mismatch")
- [#43875](https://github.com/sgl-project/sglang/issues/43875) [Bug] [diffusion] OpenAI API hardening and runtime utils/pipeline bugs

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 132,898 · **Open issues:** 2,586 · **Last push:** <1h ago

In the latest update for llama.cpp, versions b12017, b12015, and b12014 were released, primarily featuring the removal of `fs_path_to_utf8()` in both the RPC and common modules, which is expected to streamline internal processing. Merged features also included critical updates such as adding initial support for `iq1` in OpenCL and enhancing the gemma modules by creating `token_embd` prior to the tied output, improving overall efficiency. Noteworthy among new issues, a significant concern was raised regarding the MoE cache hit rate dropping to 0.6% after recent changes, which could impact the model's performance. Additionally, users reported a compile bug related to the Vulkan backend, indicative of ongoing challenges with platform compatibility.

#### 🚀 New Releases
- [b12017](https://github.com/ggml-org/llama.cpp/releases/tag/b12017) b12017
- [b12015](https://github.com/ggml-org/llama.cpp/releases/tag/b12015) b12015
- [b12014](https://github.com/ggml-org/llama.cpp/releases/tag/b12014) b12014
- [b12012](https://github.com/ggml-org/llama.cpp/releases/tag/b12012) b12012
- [b12008](https://github.com/ggml-org/llama.cpp/releases/tag/b12008) b12008
- [b12007](https://github.com/ggml-org/llama.cpp/releases/tag/b12007) b12007
- [b12005](https://github.com/ggml-org/llama.cpp/releases/tag/b12005) b12005
- [b12004](https://github.com/ggml-org/llama.cpp/releases/tag/b12004) b12004
- [b12003](https://github.com/ggml-org/llama.cpp/releases/tag/b12003) b12003
- [b12002](https://github.com/ggml-org/llama.cpp/releases/tag/b12002) b12002

#### ✅ Merged PRs
- [#31120](https://github.com/ggml-org/llama.cpp/pull/31120) sycl: fix f32 to q2_0/q4_0/q5_0 rounding in CPY
- [#31386](https://github.com/ggml-org/llama.cpp/pull/31386) quant : allow quantization for LFM3-Audio codec decoder
- [#31424](https://github.com/ggml-org/llama.cpp/pull/31424) rpc : delete fs_path_to_utf8()
- [#31341](https://github.com/ggml-org/llama.cpp/pull/31341) opencl: add initial iq1 support
- [#31423](https://github.com/ggml-org/llama.cpp/pull/31423) common : delete fs_path_to_utf8()
- [#31417](https://github.com/ggml-org/llama.cpp/pull/31417) common : drop the Windows argv reconstruction
- [#31400](https://github.com/ggml-org/llama.cpp/pull/31400) vendor : update cpp-httplib to 0.64.0
- [#31413](https://github.com/ggml-org/llama.cpp/pull/31413) ci : add missing ccache-clear to windows behavior check
- [#31329](https://github.com/ggml-org/llama.cpp/pull/31329) cmake : embed an app manifest in all Windows exes
- [#31408](https://github.com/ggml-org/llama.cpp/pull/31408) ci : extract most apple jobs into daily workflow
- [#31394](https://github.com/ggml-org/llama.cpp/pull/31394) gemma3n, gemma4 : create token_embd before the tied output
- [#31073](https://github.com/ggml-org/llama.cpp/pull/31073) kv-cache : keep rotation constants on the GPU
- [#31368](https://github.com/ggml-org/llama.cpp/pull/31368) memory: refuse rollbacks past the snapshots of the last ubatch
- [#31340](https://github.com/ggml-org/llama.cpp/pull/31340) opencl: add initial q2_0 support

#### 🐛 New Issues
- [#31421](https://github.com/ggml-org/llama.cpp/issues/31421) MoE cache hit rate drops to 0.6% at one token of slots since #30637, still on master `bug-unconfirmed` 💬1
- [#31448](https://github.com/ggml-org/llama.cpp/issues/31448) Eval bug: granite: build_ffn() passes NULL for NVFP4 weight scales → garbage output `bug-unconfirmed` 💬1
- [#31433](https://github.com/ggml-org/llama.cpp/issues/31433) Misc. bug: install.ps1’s latest resolves to b11941 while v0.8.0 and b11985 `bug-unconfirmed` 💬1
- [#31410](https://github.com/ggml-org/llama.cpp/issues/31410) llama-server chat weird behavior not sure if model related. `bug-unconfirmed` 💬1
- [#31411](https://github.com/ggml-org/llama.cpp/issues/31411) Feature Request: add a compiled version that works on google colab T4 instance `enhancement` 💬1
- [#31445](https://github.com/ggml-org/llama.cpp/issues/31445) Compile bug: Vulkan backend fails to build since #27512 (`signbit`/`isnan`/`isinf` undeclared in `ggml_fp32_to_f8_e4m3`), GCC 16.2 and clang 22 with libstdc++ 16 `bug-unconfirmed`
- [#31436](https://github.com/ggml-org/llama.cpp/issues/31436) Eval bug: realtime output modalities audio glitch or is this expected? LFM3-Audio `bug-unconfirmed`
- [#31425](https://github.com/ggml-org/llama.cpp/issues/31425) --load-mode none - seems to me like is being ignored `bug-unconfirmed`
- [#31402](https://github.com/ggml-org/llama.cpp/issues/31402) Misc. bug: Vulkan DeviceLostError on AMD 8845HS (Radeon 780M) starting from b10369 `bug-unconfirmed`
- [#31404](https://github.com/ggml-org/llama.cpp/issues/31404) Misc. bug: Sub-heading levels are incorrect for the CUDA, MUSA, and SYCL sections in the Docker documentation `bug-unconfirmed`

#### 🔒 Closed Issues
- [#24066](https://github.com/ggml-org/llama.cpp/issues/24066) Eval bug: Vulkan: performance drop in recent builds
- [#27469](https://github.com/ggml-org/llama.cpp/issues/27469) Feature Request: Expose Speculative Decoding (MTP / Draft) in public C API (llama.h) for downstream bindings
- [#28648](https://github.com/ggml-org/llama.cpp/issues/28648) Eval bug: Vulkan on Intel Arc 140V (Windows) outputs garbage with layers on GPU, depends on batch settings
- [#28879](https://github.com/ggml-org/llama.cpp/issues/28879) llama-perplexity: perplexity is not precision-monotonic on hybrid GDN architectures (qwen3_5) — full F16 scores worse than Q4_K_M
- [#30199](https://github.com/ggml-org/llama.cpp/issues/30199) Misc. bug: Flaky test-recurrent-state-rollback results on Intel Linux Vulkan
- [#28675](https://github.com/ggml-org/llama.cpp/issues/28675) Eval bug: LFM2.5 1.2 Thinking - Think tags displayed in content
- [#27035](https://github.com/ggml-org/llama.cpp/issues/27035) Misc. bug: Remote server bug upper/lower case with args gpt-oss-20b-default
- [#28878](https://github.com/ggml-org/llama.cpp/issues/28878) Eval bug: SIGSEGV in CPU compute path, thread-count-dependent race (Android/aarch64, Tensor G5), not content-dependent
- [#28917](https://github.com/ggml-org/llama.cpp/issues/28917) gemma4:26b concurrent decode loses EOS (length at num_predict); qwen3.8-27b IDENTICAL dual on same GB10/Ollama harness is 3/3 clean
- [#28932](https://github.com/ggml-org/llama.cpp/issues/28932) [Proposal] reasoning budget: soft end-token wind-down instead of hard FORCING at the wall (+ sm_70 notes)
- [#28942](https://github.com/ggml-org/llama.cpp/issues/28942) Feature Request: KV snapshot for agent fan-out: use seq_cp at divergence points
- [#28974](https://github.com/ggml-org/llama.cpp/issues/28974) Feature Request: GGML_OP_UNIFORM_RANDOM, or another way to generate random numbers on-device
- [#31433](https://github.com/ggml-org/llama.cpp/issues/31433) Misc. bug: install.ps1’s latest resolves to b11941 while v0.8.0 and b11985
- [#31337](https://github.com/ggml-org/llama.cpp/issues/31337) Eval bug: Metal BF16 shader fails to compile on macOS 15.5: invalid constexpr

### Ollama (`ollama/ollama`)

**Stars:** 185,386 · **Open issues:** 4,508 · **Last push:** 4h ago

On October 31, 2026, Ollama did not release any new versions, but several significant improvements were made through merged pull requests. Notably, PR #19410 introduced model output limits for Claude Code, while PR #19336 enhanced the ChatGPT app by making disconnect failures retryable. Among the newly reported issues, #19418 stands out due to concerns regarding native TCP tables on Windows 11 returning non-LISTEN states for the Ollama loopback endpoint, indicating a potential platform compatibility challenge. This combination of enhancements and issues highlights ongoing development efforts and user engagement within the Ollama community.

#### ✅ Merged PRs
- [#19410](https://github.com/ollama/ollama/pull/19410) launch: use model output limits for Claude Code
- [#19336](https://github.com/ollama/ollama/pull/19336) app: make ChatGPT disconnect failures retryable

#### 🐛 New Issues
- [#19418](https://github.com/ollama/ollama/issues/19418) Windows 11 26H2: native TCP tables return non-LISTEN states for the Ollama loopback endpoint `bug` 💬2
- [#19420](https://github.com/ollama/ollama/issues/19420) Fresh install of Ollama and trying to use Gemma4 but getting errors. `bug` 💬1
- [#19415](https://github.com/ollama/ollama/issues/19415) Anthropic /v1/messages: only the last thinking block of an assistant message is kept 💬1
- [#19403](https://github.com/ollama/ollama/issues/19403) model/parsers: cogito with think and tools puts the reasoning and </think> in the content 💬1
- [#19407](https://github.com/ollama/ollama/issues/19407) [Feature Request] Make the fixed 1 GiB mmproj headroom configurable while preserving automatic --fit padding 💬1
- [#19417](https://github.com/ollama/ollama/issues/19417) MLX models skip the scheduler's memory pre-flight and are booked at their weights
- [#19414](https://github.com/ollama/ollama/issues/19414) POST /api/blobs/:digest keeps the uploaded data on disk even when it rejects the upload with "digest mismatch"
- [#19405](https://github.com/ollama/ollama/issues/19405) docs: Modelfile is documented as case insensitive, but parameter names and message roles are not
- [#19404](https://github.com/ollama/ollama/issues/19404) parser: CRLF Modelfiles keep \r inside triple-quoted values

### LiteLLM (`BerriAI/litellm`)

**Stars:** 62,407 · **Open issues:** 5,571 · **Last push:** <1h ago

On October 31, 2026, LiteLLM released version v1.109.0-dev.2, with all Docker images now signed for enhanced security. Key merges included fixes to the proxy logging of image generation requests and enhancements to the Gemini model outputs, along with crucial updates to the budget handling and search filters functionality. Additionally, a significant bug was reported regarding the /key/update command, which affects in-flight requests by dropping their associated costs from budget windows, drawing attention from the community. Overall, the day was marked by essential updates aimed at improving stability and maintaining security protocols.

#### 🚀 New Releases
- [v1.109.0-dev.2](https://github.com/BerriAI/litellm/releases/tag/v1.109.0-dev.2) v1.109.0-dev.2

#### ✅ Merged PRs
- [#49372](https://github.com/BerriAI/litellm/pull/49372) test(budgets): age the monthly window past any calendar month so the reset test passes on the 31st
- [#49349](https://github.com/BerriAI/litellm/pull/49349) fix(proxy): log router-refused image generation requests
- [#49358](https://github.com/BerriAI/litellm/pull/49358) fix(gemini): add the batch, flex and priority text output prices to gemini-2.5-flash-image
- [#49344](https://github.com/BerriAI/litellm/pull/49344) fix(search): forward Perplexity search filters
- [#49264](https://github.com/BerriAI/litellm/pull/49264) fix(guardrails): drop the response pipeline steps that never ran from x-litellm-applied-guardrails
- [#49116](https://github.com/BerriAI/litellm/pull/49116) refactor(proxy): inject gateway activity through a typed repository
- [#49343](https://github.com/BerriAI/litellm/pull/49343) refactor(ui): move policies, tool policies and guardrails monitor text onto i18n
- [#49262](https://github.com/BerriAI/litellm/pull/49262) fix(guardrails): name only the request pipeline steps that ran in x-litellm-applied-guardrails
- [#49350](https://github.com/BerriAI/litellm/pull/49350) fix(bedrock): align gpt-5.6-cyber Mantle limits and endpoints with its model card
- [#48507](https://github.com/BerriAI/litellm/pull/48507) refactor(proxy): inject database repositories through per-repository dependencies
- [#49263](https://github.com/BerriAI/litellm/pull/49263) fix(guardrails): name only the request pipeline steps that ran in x-litellm-applied-guardrails
- [#48592](https://github.com/BerriAI/litellm/pull/48592) refactor(proxy): inject deployment warning ignores through repositories
- [#48506](https://github.com/BerriAI/litellm/pull/48506) refactor(proxy): give database shutdown one lifespan owner
- [#49317](https://github.com/BerriAI/litellm/pull/49317) fix(gemini): add the batch image output price to gemini-nano-banana-2.1 and gemini-3.1-flash-lite-image
- [#49193](https://github.com/BerriAI/litellm/pull/49193) feat(proxy)!: use Bedrock request metadata as the session id on pass-through routes
- [#49301](https://github.com/BerriAI/litellm/pull/49301) fix(batches): cost an unmanaged gs:// batch through the deployment that created it
- [#49294](https://github.com/BerriAI/litellm/pull/49294) fix(cost): preserve zero prices across batch, speech and search
- [#49280](https://github.com/BerriAI/litellm/pull/49280) chore(cost-map): add Deepgram Aura-1 and Aura-2 text-to-speech rates
- [#49256](https://github.com/BerriAI/litellm/pull/49256) feat(sso): create the team_id_jwt_field team on UI SSO login when team_id_upsert is set
- [#49306](https://github.com/BerriAI/litellm/pull/49306) fix(router): budget classifier input by provider limits
- [#49316](https://github.com/BerriAI/litellm/pull/49316) fix(proxy): preserve access windows when editing models
- [#48725](https://github.com/BerriAI/litellm/pull/48725) fix(responses): run the guardrails a Responses WebSocket frame selects
- [#49325](https://github.com/BerriAI/litellm/pull/49325) fix(ui): restore Z.AI credential fields in provider catalog
- [#48837](https://github.com/BerriAI/litellm/pull/48837) fix(exceptions): classify SGLang context window overflow
- [#49308](https://github.com/BerriAI/litellm/pull/49308) fix(rerank): preserve token usage in spend logs
- [#49314](https://github.com/BerriAI/litellm/pull/49314) fix(ui): add Meta Model API to the Add Model provider dropdown
- [#49310](https://github.com/BerriAI/litellm/pull/49310) test: fix integration tests that fail on test order, races and intended changes
- [#49293](https://github.com/BerriAI/litellm/pull/49293) fix(router): recover streamed context window errors before output
- [#47741](https://github.com/BerriAI/litellm/pull/47741) fix(proxy): raise live budget counters for failure spend rows
- [#49287](https://github.com/BerriAI/litellm/pull/49287) feat(openrouter): record upstream provider in logging payload and spend logs
- [#49286](https://github.com/BerriAI/litellm/pull/49286) fix(proxy): apply key and team router_settings to /v1/images/generations
- [#49290](https://github.com/BerriAI/litellm/pull/49290) fix(proxy): don't send llm_exceptions alert for BudgetExceededError
- [#49255](https://github.com/BerriAI/litellm/pull/49255) fix(headroom): forward tenant-scoped session affinity
- [#49297](https://github.com/BerriAI/litellm/pull/49297) chore(cost-map): flag Vertex Gemini computer use and add Cohere Rerank 5
- [#49278](https://github.com/BerriAI/litellm/pull/49278) fix(ollama): forward assistant tool call ids in ollama_chat requests
- [#48820](https://github.com/BerriAI/litellm/pull/48820) fix(openrouter)!: list OpenRouter's live catalog for openrouter/* when check_provider_endpoint is on
- [#49117](https://github.com/BerriAI/litellm/pull/49117) ci: cache Rust compilation with sccache
- [#46902](https://github.com/BerriAI/litellm/pull/46902) fix(proxy)!: persist sent model_info fields on POST /model/update
- [#41700](https://github.com/BerriAI/litellm/pull/41700) feat(keys): allow assigning a project to an unassigned key on /key/update
- [#49284](https://github.com/BerriAI/litellm/pull/49284) refactor(ui): remove the deprecated Old Usage page
- [#49268](https://github.com/BerriAI/litellm/pull/49268) chore(cost-map): add openai gpt-6-rosalind from the pricing page and changelog
- [#49186](https://github.com/BerriAI/litellm/pull/49186) refactor(rust): extract SecretValue and use it for Redis credentials
- [#49254](https://github.com/BerriAI/litellm/pull/49254) fix(cost): bill the margin once on rebuilt streams and streamed Responses through the chat bridge
- [#49265](https://github.com/BerriAI/litellm/pull/49265) test: bedrock claude prompt caching on /v1/messages reports and charges cache tokens
- [#48845](https://github.com/BerriAI/litellm/pull/48845) fix(responses): normalize empty function_call_output to an empty tool result
- [#49236](https://github.com/BerriAI/litellm/pull/49236) docs(daily-activity): describe guardrail spend fields and reporting key IDs in OpenAPI
- [#49158](https://github.com/BerriAI/litellm/pull/49158) fix(aiand)!: show ai&'s name and logo, and sync ai&'s model list
- [#49258](https://github.com/BerriAI/litellm/pull/49258) fix(ui): preserve team model grants on unrelated settings saves
- [#47609](https://github.com/BerriAI/litellm/pull/47609) fix(proxy): evict a deleted key from every worker's auth cache
- [#49252](https://github.com/BerriAI/litellm/pull/49252) fix(gemini): flag computer use support on the four models the Gemini computer use docs list
- [#49166](https://github.com/BerriAI/litellm/pull/49166) perf(streaming): stop raising caught AttributeErrors inside pydantic on every streamed chunk
- [#49114](https://github.com/BerriAI/litellm/pull/49114) fix(model_prices): rolling registry audit, add Gemini batch and Azure Astra flex tiers
- [#49075](https://github.com/BerriAI/litellm/pull/49075) fix(passthrough): log the URL model and declared provider on Gemini and Vertex failures
- [#44747](https://github.com/BerriAI/litellm/pull/44747) fix(vertex_ai,azure_ai)!: auto-add the compaction, thinking display, and tool change betas on Claude routes
- [#46861](https://github.com/BerriAI/litellm/pull/46861) fix(vllm): send the pass-through key as a bearer on both /vllm routes
- [#48933](https://github.com/BerriAI/litellm/pull/48933) fix(logging): warn when drop_params drops a requested reasoning level on the remaining paths
- [#48829](https://github.com/BerriAI/litellm/pull/48829) fix(spend): keep a NaN or infinite cost from wedging daily spend writes
- [#49069](https://github.com/BerriAI/litellm/pull/49069) fix(router)!: check and count deployment itpm and otpm on every Responses WebSocket turn
- [#48899](https://github.com/BerriAI/litellm/pull/48899) fix(mcp): bill both calls of a streamed chat completions MCP auto-execute
- [#49155](https://github.com/BerriAI/litellm/pull/49155) fix(proxy)!: scope /health by wildcard keys and team model allowlists the way auth does
- [#39555](https://github.com/BerriAI/litellm/pull/39555) fix(proxy)!: label shared-handler errors the way the route catch-alls do
- [#43290](https://github.com/BerriAI/litellm/pull/43290) fix(bedrock): route a Bedrock model id with no Invoke provider to Converse
- [#45295](https://github.com/BerriAI/litellm/pull/45295) fix(cache_control): pick the chat-path dialect from the deployment's provider prefix
- [#49033](https://github.com/BerriAI/litellm/pull/49033) fix(sso): keep CLI SSO and Claude Code gateway team lists in the user record's order
- [#33549](https://github.com/BerriAI/litellm/pull/33549) fix(streaming): convert upstream logprobs so streams with logprobs end with their finish chunk
- [#45428](https://github.com/BerriAI/litellm/pull/45428) fix(router)!: apply content_policy_fallbacks when router settings update at runtime
- [#44772](https://github.com/BerriAI/litellm/pull/44772) feat(usage): show subscription-covered providers and account fees separately
- [#49082](https://github.com/BerriAI/litellm/pull/49082) fix(responses)!: send a dict reasoning_effort the same way on every Responses bridge
- [#49034](https://github.com/BerriAI/litellm/pull/49034) fix(proxy): apply new model rows on every worker as soon as they are written
- [#49045](https://github.com/BerriAI/litellm/pull/49045) fix(router)!: keep a deployment's own model_id over the request body's
- [#46984](https://github.com/BerriAI/litellm/pull/46984) fix(anthropic): send PDF image_url content to Claude as document blocks
- [#39864](https://github.com/BerriAI/litellm/pull/39864) fix(realtime)!: send the Gemini Live setup at the first content so session.update settings apply
- [#47432](https://github.com/BerriAI/litellm/pull/47432) fix(mistral): forward prompt_cache_key to the Mistral API
- [#30277](https://github.com/BerriAI/litellm/pull/30277) fix(proxy)!: log and bill Responses-style bodies sent to /cursor/chat/completions
- [#49152](https://github.com/BerriAI/litellm/pull/49152) fix(proxy): list only routable models for a wildcard alias over a provider org
- [#44784](https://github.com/BerriAI/litellm/pull/44784) fix(count_tokens): count a history that carries a compaction block
- [#40967](https://github.com/BerriAI/litellm/pull/40967) fix(websearch-interception)!: stream native server-tool blocks to clients
- [#45299](https://github.com/BerriAI/litellm/pull/45299) fix(azure_ai)!: keep OpenAI prompt cache breakpoints on the Foundry chat completions path
- [#49060](https://github.com/BerriAI/litellm/pull/49060) fix(health): probe only models a partial wildcard serves
- [#49079](https://github.com/BerriAI/litellm/pull/49079) fix(openai): keep the upstream error body on e.response for OpenAI and Azure errors
- [#49182](https://github.com/BerriAI/litellm/pull/49182) fix(azure): add batch prices to the unversioned o3, o4-mini, o3-mini, gpt-4o and gpt-4o-mini rows
- [#49172](https://github.com/BerriAI/litellm/pull/49172) refactor(helm)!: connect both charts to a separately deployed Lens on rc/1.108.0
- [#49054](https://github.com/BerriAI/litellm/pull/49054) fix(router): cap the default OTPM reservation and reconcile token counters after each call
- [#48335](https://github.com/BerriAI/litellm/pull/48335) feat(zai): support response_format and max_completion_tokens, add glm-5v-turbo pricing
- [#48953](https://github.com/BerriAI/litellm/pull/48953) fix(cost): bill a provider reported usage.cost on every path unless the deployment is priced
- [#49123](https://github.com/BerriAI/litellm/pull/49123) feat(cost-map): add baseten joey-1 decision model
- [#49173](https://github.com/BerriAI/litellm/pull/49173) chore(lens)!: stop bundling and building Lens on 1.106.x
- [#49171](https://github.com/BerriAI/litellm/pull/49171) chore(lens): stop building the bundled Lens worker image on 1.105.x
- [#49113](https://github.com/BerriAI/litellm/pull/49113) fix(bedrock): backfill published regional service tier prices
- [#49169](https://github.com/BerriAI/litellm/pull/49169) refactor(helm)!: connect both charts to a separately deployed Lens
- [#48900](https://github.com/BerriAI/litellm/pull/48900) fix(cost): bill the requested model's rates when the response names an unpriced model
- [#45715](https://github.com/BerriAI/litellm/pull/45715) fix(vertex_ai): batch Claude models in Anthropic's native row shape
- [#39324](https://github.com/BerriAI/litellm/pull/39324) feat(providers): add CLF AI Gateway as an OpenAI-compatible provider with ten models

#### 🐛 New Issues
- [#49179](https://github.com/BerriAI/litellm/issues/49179) [Bug]: /key/update during an in-flight request drops that request's cost from the key's budget window spend 💬6
- [#49213](https://github.com/BerriAI/litellm/issues/49213) [Bug]: API keys table is truncated `bug` 💬4
- [#49359](https://github.com/BerriAI/litellm/issues/49359) [Bug]: MCP tool execution failures drop is_error flag and do not propagate to Anthropic tool_result message `llm translation` 💬2
- [#49203](https://github.com/BerriAI/litellm/issues/49203) [Bug]: BudgetExceededError (422) fires llm_exceptions Slack alerts — slips past _is_client_error_exception `bug` 💬2
- [#49200](https://github.com/BerriAI/litellm/issues/49200) [Bug]: Image/lockfile ship dnspython 2.8.0 and ddtrace 4.11.0 with HIGH CVEs (fixes available) 💬1
- [#49223](https://github.com/BerriAI/litellm/issues/49223) [Bug]: MCP true_passthrough: expired upstream OAuth token returns 200 with empty tools/list instead of 401, so clients never refresh `bug` 💬1
- [#49202](https://github.com/BerriAI/litellm/issues/49202) [Bug]: End user budget/spend is not updated when a batch finishes `bug` `llm translation` 💬1
- [#49198](https://github.com/BerriAI/litellm/issues/49198) [Bug]: Responses API text.format json_schema fails on OpenAI-compatible providers that only support json_object `bug` `llm translation` 💬1
- [#49369](https://github.com/BerriAI/litellm/issues/49369) [Bug]: SDK stream wrapper response_cost stays at 0.0 after exhaustion despite priceable usage `llm translation`
- [#49366](https://github.com/BerriAI/litellm/issues/49366) [Bug]: Bedrock Converse sends temperature to Grok 4.6/4.7 and Kimi K3, which reject it `llm translation`
- [#49332](https://github.com/BerriAI/litellm/issues/49332) [Bug]: handle_nlp_cloud_chunk silently edits and truncates completions whose text contains "[DONE]" `llm translation`
- [#49312](https://github.com/BerriAI/litellm/issues/49312) [Bug]: eu.anthropic.claude-haiku-4-5-20251001-v1:0 removed from the model map in #49113, but AWS still serves this EU inference profile `llm translation`
- [#49313](https://github.com/BerriAI/litellm/issues/49313) [Bug]: Exact-match cache is shared across virtual keys and teams `claude code`
- [#49311](https://github.com/BerriAI/litellm/issues/49311) [Bug]: Exact-match response cache never hits when OTel is enabled and `enable_caching_on_provider_specific_optional_params` is true `claude code`
- [#49253](https://github.com/BerriAI/litellm/issues/49253) Anthropic messages guardrail translation drops tool fields `llm translation`
- [#49219](https://github.com/BerriAI/litellm/issues/49219) [Feature]: Retrieve model alias health or model alias mappings `enhancement`
- [#49217](https://github.com/BerriAI/litellm/issues/49217) [Feature]: return a guardrail's structured output from /guardrails/apply_guardrail
- [#49215](https://github.com/BerriAI/litellm/issues/49215) [Bug]: "Spend Per User Within Team" undercounts once spend logs are deleted by maximum_spend_logs_retention_period
- [#49211](https://github.com/BerriAI/litellm/issues/49211) [Feature]: Azure AI Content Safety guardrail for images (image:analyze) `enhancement` `llm translation`
- [#49209](https://github.com/BerriAI/litellm/issues/49209) [Feature]: semantic cache option to embed only the last user message and key the bucket on the rest of the conversation `llm translation`

#### 🔒 Closed Issues
- [#26252](https://github.com/BerriAI/litellm/issues/26252) websearch_interception does not fire for Claude Code + Bedrock pass-through; PR #25242 would fix the root cause but introduces a new Bedrock skip that re-breaks it
- [#36164](https://github.com/BerriAI/litellm/issues/36164) [Bug]: Meta Model API is missing from the Add Model provider dropdown
- [#30126](https://github.com/BerriAI/litellm/issues/30126) [Bug]: `/cursor/chat/completions` is not logged in LiteLLM 1.88.1
- [#19334](https://github.com/BerriAI/litellm/issues/19334) [Bug]: Calls to azure_ai FLUX-1.1-pro and FLUX.1-Kontext-pro fail after upgrade to 1.80.15
- [#26250](https://github.com/BerriAI/litellm/issues/26250) [Feature]: Add aclose() to ResponsesAPIStreamingIterator to prevent upstream connection leak on error
- [#39310](https://github.com/BerriAI/litellm/issues/39310) [Bug]: Z.AI (Zhipu AI) provider now shows in dropdown but its credential/model form fields don't render
- [#27091](https://github.com/BerriAI/litellm/issues/27091) [Bug]: Claude Code + Microsoft Foundry (Azure) - Unsupported 'reasoning.effort' and AnthropicResponse Pydantic Validation Error
- [#34031](https://github.com/BerriAI/litellm/issues/34031) Proxy ingests unbounded upstream error-response bodies -> event-loop stall / RSS blowup
- [#34399](https://github.com/BerriAI/litellm/issues/34399) [Bug]: Router ignores Retry-After (instant retry) for multi-deployment model groups sharing one rate-limited upstream
- [#34566](https://github.com/BerriAI/litellm/issues/34566) Publish complete employee-bound MCP DCR bridge flow after v1.93.0
- [#49213](https://github.com/BerriAI/litellm/issues/49213) [Bug]: API keys table is truncated
- [#45536](https://github.com/BerriAI/litellm/issues/45536) [Bug]: Perplexity search drops search_recency_filter / date / language / mode params — fix #30752 never reached main
- [#24720](https://github.com/BerriAI/litellm/issues/24720) [Bug]: latency-based-routing degrades to random selection due to lost-update race condition in async_log_success_event
- [#26224](https://github.com/BerriAI/litellm/issues/26224) [Bug]: `auto_router/complexity_router` rejects `thinking.type=adaptive` for Claude Code requests
- [#26231](https://github.com/BerriAI/litellm/issues/26231) [Bug]: Airgapped license verification fails when the license payload contains "." (e.g. a domain-like user_id)
- [#26237](https://github.com/BerriAI/litellm/issues/26237) [Bug]: Worker with transient Postgres/HAProxy outage causing valid models to fail with "Invalid model name"
- [#26241](https://github.com/BerriAI/litellm/issues/26241) [Bug]:Anthropic → Responses adapter ignores litellm.drop_params when mapping metadata.user_id to `user` (breaks strict /responses gateways)
- [#26334](https://github.com/BerriAI/litellm/issues/26334) [Bug]: Vertex Anthropic: response_format + thinking returns 400 on vertex_ai/claude-opus-4-7
- [#27513](https://github.com/BerriAI/litellm/issues/27513) Bedrock retry can replay stale SigV4 headers after signing
- [#34479](https://github.com/BerriAI/litellm/issues/34479) [Bug]: All user API keys fail when PostgreSQL max_connections is exhausted in multi-worker proxy deployment
- [#34499](https://github.com/BerriAI/litellm/issues/34499) [Feature]: Please add Nano-Gpt to the provider list inside the UI
- [#34513](https://github.com/BerriAI/litellm/issues/34513) [Feature]: Add `litellm doctor` CLI subcommand for SDK diagnostic checks
- [#46872](https://github.com/BerriAI/litellm/issues/46872) [Bug]: Cannot edit a model with configured access windows
- [#47777](https://github.com/BerriAI/litellm/issues/47777) [Bug]: key router_settings.fallbacks are ignored on /v1/images/generations (chat completions honors them)
- [#49094](https://github.com/BerriAI/litellm/issues/49094) [Bug]: Saving unrelated team settings in the UI rewrites an unrestricted team (models: []) to ["no-default-models"], blocking all its keys
- [#35333](https://github.com/BerriAI/litellm/issues/35333) [Bug]: websearch interception drops web_search_tool_result blocks when re-wrapping the stream
- [#37720](https://github.com/BerriAI/litellm/issues/37720) [Bug]: zai provider drops response_format, making structured output impossible for GLM models
- [#45671](https://github.com/BerriAI/litellm/issues/45671) [Bug]: Claude models on Vertex AI fail at batch creation (404 batchPredictionJobs) — OpenAI batch translation doesn't cover Anthropic's native schema
- [#33440](https://github.com/BerriAI/litellm/issues/33440) Configurable default top_k for mcp_tool_search virtual tool (default 5 silently drops correct tool)
- [#34461](https://github.com/BerriAI/litellm/issues/34461) [Feature]: `/v1/ocr` endpoint is not available in the Playground
- [#34490](https://github.com/BerriAI/litellm/issues/34490) [Bug]: s3_v2 logging drops records with 403 SignatureDoesNotMatch when an object key contains reserved characters (spaces, #, +, &, unicode)
- [#34502](https://github.com/BerriAI/litellm/issues/34502) [Bug]: Bedrock/boto3 streaming delivers chunks in bursts due to per-chunk asyncio.to_thread dispatch (regression from #24177)
- [#34522](https://github.com/BerriAI/litellm/issues/34522) [Bug]: Kimi K2 tool calls silently stop working on v1.91.3+ due to tool_use id normalization
- [#34555](https://github.com/BerriAI/litellm/issues/34555) [Bug]: Non-enterprise (legacy SMTP) invitation email links to bare PROXY_BASE_URL - no invitation_id, user cannot onboard
- [#49203](https://github.com/BerriAI/litellm/issues/49203) [Bug]: BudgetExceededError (422) fires llm_exceptions Slack alerts — slips past _is_client_error_exception
- [#44851](https://github.com/BerriAI/litellm/issues/44851) [Bug]: Headroom session affinity
- [#48832](https://github.com/BerriAI/litellm/issues/48832) [Bug]: responses() sends a function_call_output of empty text parts to the provider as the JSON text of the list
- [#35382](https://github.com/BerriAI/litellm/issues/35382) [Bug]: Fireworks Kimi K3 rejects tool_choice despite upstream support
- [#44825](https://github.com/BerriAI/litellm/issues/44825) [Bug]: session.update instructions silently ignored for vertex_ai/gemini-live — need gemini_live_defer_setup documented + confirmed behavior and turn_detection not working like in sdk
- [#46685](https://github.com/BerriAI/litellm/issues/46685) [Bug]: Gemini/Vertex Realtime silently drops client tools and instructions with eager setup
- [#47061](https://github.com/BerriAI/litellm/issues/47061) [Bug]: `/v1/images/generations` requests refused by the router never reach failure callbacks (chat ones do)
- [#48578](https://github.com/BerriAI/litellm/issues/48578) [Bug]: Batch cost poller mis-routes raw gs:// Vertex batches to the first model_list entry for that base model (same base model across projects/buckets is never costed)
- [#48390](https://github.com/BerriAI/litellm/issues/48390) model_prices: explicit 0.0 in cache_creation_input_token_cost (13 tencent/* rows) is a truthiness trap for or-fallback consumers
- [#49052](https://github.com/BerriAI/litellm/issues/49052) Commit that rotated the cosign key (e82a3c6, #48103) has an unverified signature; please anchor the new key
- [#48836](https://github.com/BerriAI/litellm/issues/48836) [Bug]: SGLang context overflow wording maps to plain BadRequestError
- [#48038](https://github.com/BerriAI/litellm/issues/48038) [Feature]: record which provider served an OpenRouter request, next to its reported cost
- [#36185](https://github.com/BerriAI/litellm/issues/36185) [Bug]: /ui/usage shows 0 tokens for rerank calls (hosted_vllm and other providers)
- [#40344](https://github.com/BerriAI/litellm/issues/40344) [Bug]: Tool array schema without items crashes token counting and skips context-window prechecks
- [#48530](https://github.com/BerriAI/litellm/issues/48530) [Bug]: jev classifier sends the current message and system prompt untrimmed, so the decision deployment returns 422 and routing falls back to the heuristic scorer
- [#48887](https://github.com/BerriAI/litellm/issues/48887) [Bug]: Context window errors reported inside a stream skip fallbacks (Responses API response.failed)
- [#35568](https://github.com/BerriAI/litellm/issues/35568) [Bug]: Recovered partial stream cost is released from live budget counters
- [#48457](https://github.com/BerriAI/litellm/issues/48457) [Bug]: ollama_chat drops assistant tool call IDs and MiniMax cannot read results
- [#41088](https://github.com/BerriAI/litellm/issues/41088) [Bug]: /key/update silently ignores project_id - a key's project can only be changed by rotating the key
- [#37642](https://github.com/BerriAI/litellm/issues/37642) [Bug]: native CLI login consent page lists teams in database order and preselects the first one

### Unsloth (`unslothai/unsloth`)

**Stars:** 78,827 · **Open issues:** 500 · **Last push:** <1h ago

On October 31, 2026, Unsloth released version v0.1.913-beta, introducing customizable backgrounds and significant UI/UX improvements, alongside enhancements that reduce app update times and boost performance on Linux and under limited VRAM conditions. Key features in this release include the new DeepSeek-V4.1-Flash-1017 GGUF, optimized for low-RAM machines, and improved chat experiences with batched MoE fine-tuning. Additionally, several notable merged pull requests were implemented, such as adding non-reentrant offloaders for each model and introducing a tiled MLP engine for easier model management. However, the day also saw the emergence of critical bugs, specifically the critical issue regarding isolated installs via UNSLOTH_STUDIO_HOME that inadvertently overwrite existing virtual environments, which has garnered significant attention from the community.

#### 🚀 New Releases
- [v0.1.913-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.913-beta) Customize + Performance + UI/UX improvements

#### ✅ Merged PRs
- [#16071](https://github.com/unslothai/unsloth/pull/16071) LoRA: add the rank-r term inside the base GEMM so small updates are not rounded away
- [#16194](https://github.com/unslothai/unsloth/pull/16194) Vision GC offload: each model gets its own non-reentrant offloader
- [#16196](https://github.com/unslothai/unsloth/pull/16196) Tests: follow the tiled MLP hooks from #16125 (encoding, loader stubs, trainer logger)
- [#16125](https://github.com/unslothai/unsloth/pull/16125) Tiled MLP: one flag or one line for any model, on the new sequence tiling engine
- [#16168](https://github.com/unslothai/unsloth/pull/16168) Studio Images: SDXL-Turbo opens at its native 512x512 canvas
- [#16176](https://github.com/unslothai/unsloth/pull/16176) Dependencies: the studio extra carries usearch like studio.txt
- [#16170](https://github.com/unslothai/unsloth/pull/16170) Tests: the skipped-menu linearity check times each size as the best of five
- [#16145](https://github.com/unslothai/unsloth/pull/16145) Studio: HNSW (usearch) tier for gigantic RAG scopes, kept consistent with SQLite
- [#16021](https://github.com/unslothai/unsloth/pull/16021) Studio MLX estimate: price attention scores where mlx really holds them, at the width it holds them
- [#16127](https://github.com/unslothai/unsloth/pull/16127) Studio: MOSS-Image negative-branch layer skip follows the reference workflows per checkpoint
- [#16160](https://github.com/unslothai/unsloth/pull/16160) Dependencies: pin pymupdf 1.28.2 on Windows ARM64, the only release with a win_arm64 wheel
- [#15994](https://github.com/unslothai/unsloth/pull/15994) Studio: download files over 50GB from ModelScope over HTTPS (#15989)
- [#16144](https://github.com/unslothai/unsloth/pull/16144) Tests: fused LoRA TP parity compares O and dX at each tensor fp32 scale
- [#16096](https://github.com/unslothai/unsloth/pull/16096) Studio: load LFM3 custom-code models (route by saving transformers version, fix generate, chat and export)
- [#16046](https://github.com/unslothai/unsloth/pull/16046) Studio: warn when a Windows GPU load leaves the system short of commit
- [#16074](https://github.com/unslothai/unsloth/pull/16074) Studio Windows AMD: pair triton-windows with torch after the dependency stack
- [#16092](https://github.com/unslothai/unsloth/pull/16092) Flex wrapper: send short no-grad queries to the main kernel where flex_decoding cannot compile
- [#16130](https://github.com/unslothai/unsloth/pull/16130) Tests: the titlebar smoke treats Vite outdated pre-bundle 504 as a reload
- [#16126](https://github.com/unslothai/unsloth/pull/16126) Tests: the supplied-component twins check runs where diffusers is not installed
- [#15970](https://github.com/unslothai/unsloth/pull/15970) Studio MLX estimate: ask the quantized-attention route about a cache longer than the chunk
- [#16042](https://github.com/unslothai/unsloth/pull/16042) Don't warn about loss_type = "nll" on a TRL whose SFTConfig predates it
- [#16131](https://github.com/unslothai/unsloth/pull/16131) Bump install.sh / install.ps1 pins to unsloth>=2026.10.11
- [#16119](https://github.com/unslothai/unsloth/pull/16119) Keep padding-free off for attention that mixes packed documents (DeepSeek V4, Zaya, RecurrentGemma)
- [#15798](https://github.com/unslothai/unsloth/pull/15798) Fix Images and Video header controls clipping in narrow windows
- [#16026](https://github.com/unslothai/unsloth/pull/16026) Studio: run a second tool call glued to the first in DeepSeek envelopes or one Hermes tag
- [#14457](https://github.com/unslothai/unsloth/pull/14457) fix(cli): make `unsloth doctor` MLX-aware on Apple Silicon
- [#16123](https://github.com/unslothai/unsloth/pull/16123) Tests: read the decision prefetch test's frontend source as UTF-8
- [#16009](https://github.com/unslothai/unsloth/pull/16009) Studio: decode Gemma quoted values in a tool call without its wrapper
- [#16005](https://github.com/unslothai/unsloth/pull/16005) Studio: heal tool-call arguments sampled as near-JSON instead of passing them whole as text
- [#16097](https://github.com/unslothai/unsloth/pull/16097) Studio: MOSS-Image, SDXL-Turbo and MiniMax-H3 default steps / guidance follow the reference workflows
- [#16114](https://github.com/unslothai/unsloth/pull/16114) Scan baseline: re-review torch 2.15.0, botocore 1.43.122 and unsloth-zoo 2026.10.10
- [#16117](https://github.com/unslothai/unsloth/pull/16117) Studio: mark the root when the chat wallpaper is ready instead of html:has()
- [#16116](https://github.com/unslothai/unsloth/pull/16116) Studio: follow the chat background from #15973 through three frontend guards
- [#16007](https://github.com/unslothai/unsloth/pull/16007) Studio: run a tool call whose name differs only in case or hyphens
- [#14665](https://github.com/unslothai/unsloth/pull/14665) Studio diffusion: Ada FP8 unit-scale dispatcher installs only where it engages, chunked eager scaling
- [#16106](https://github.com/unslothai/unsloth/pull/16106) Studio: prepare decision datasets faster, in less memory, with row progress
- [#16107](https://github.com/unslothai/unsloth/pull/16107) Studio: retire service workers other apps left on the Studio origin
- [#16035](https://github.com/unslothai/unsloth/pull/16035) Studio: do not hand agents a tool call cut off at the token limit
- [#16018](https://github.com/unslothai/unsloth/pull/16018) Studio: keep commands and modules from a second sandboxed pip install
- [#16022](https://github.com/unslothai/unsloth/pull/16022) Studio: place automatic native audio loads on one GPU instead of refusing a pooled pick
- [#16038](https://github.com/unslothai/unsloth/pull/16038) Studio: scheduled tasks use Memory and project instructions
- [#16108](https://github.com/unslothai/unsloth/pull/16108) AV lint: record the sd.cpp missing-DLL probe test's python.exe copy
- [#16017](https://github.com/unslothai/unsloth/pull/16017) Studio: rewind puts back files edit_file changed inside dot folders
- [#16080](https://github.com/unslothai/unsloth/pull/16080) Studio diffusion: download a partially cached snapshot before sizing it for small hosts
- [#16011](https://github.com/unslothai/unsloth/pull/16011) Studio: add MiniMax to Connections
- [#16006](https://github.com/unslothai/unsloth/pull/16006) Studio: recover a closed tool call whose single code argument has unescaped quotes
- [#16048](https://github.com/unslothai/unsloth/pull/16048) Studio: stop offering the VibeVoice q4-ios GGUF that audio.cpp cannot load
- [#16085](https://github.com/unslothai/unsloth/pull/16085) Studio: compile the SDXL U-Net per block so the 4th image no longer waits for the whole compile
- [#16020](https://github.com/unslothai/unsloth/pull/16020) Studio: honour speed on /v1/audio/speech
- [#16010](https://github.com/unslothai/unsloth/pull/16010) Studio: add OpenCode Zen and OpenCode Go to Connections
- [#16003](https://github.com/unslothai/unsloth/pull/16003) Studio: keep a bare-JSON tool call out of the final answer after the tool loop
- [#15973](https://github.com/unslothai/unsloth/pull/15973) Studio: add customizable chat background images and effects
- [#16093](https://github.com/unslothai/unsloth/pull/16093) Studio: vector cache in float32 unit rows with streamed builds, in-place appends and bounded block scans
- [#16047](https://github.com/unslothai/unsloth/pull/16047) Studio: download the commit the manifest was planned from
- [#16095](https://github.com/unslothai/unsloth/pull/16095) Studio diffusion: Qwen-Image text-to-image streamed placement uses its own activation figure under a VRAM budget
- [#16031](https://github.com/unslothai/unsloth/pull/16031) Studio diffusion: test-launch sd.cpp binaries without the Windows missing-DLL box
- [#16083](https://github.com/unslothai/unsloth/pull/16083) Studio: read streamed dataset slices in batches instead of row by row
- [#16053](https://github.com/unslothai/unsloth/pull/16053) Studio Images: enable GGUF LoRAs on MLX and diffusers, and explain when unavailable
- [#15799](https://github.com/unslothai/unsloth/pull/15799) Add custom hourly intervals for scheduled tasks
- [#16075](https://github.com/unslothai/unsloth/pull/16075) Studio: share one in-flight media model index build so the startup checks do not scan twice
- [#16016](https://github.com/unslothai/unsloth/pull/16016) Studio installer (Windows): avoid unavailable CUDA torchao wheels
- [#15983](https://github.com/unslothai/unsloth/pull/15983) Studio: default Deep Research to no time limit per model request
- [#16002](https://github.com/unslothai/unsloth/pull/16002) Studio: ask llama-server again with its tool parser off when it rejects a reply before streaming
- [#15788](https://github.com/unslothai/unsloth/pull/15788) Studio: recover Deep Research from provider JSON validation failures
- [#16040](https://github.com/unslothai/unsloth/pull/16040) Desktop: switch the theme without a view transition on Linux
- [#16019](https://github.com/unslothai/unsloth/pull/16019) Studio: keep attached documents in Deep Research reports
- [#16090](https://github.com/unslothai/unsloth/pull/16090) Tests: follow the localized update banners from #16069
- [#16094](https://github.com/unslothai/unsloth/pull/16094) Studio: offer video input only when llama-server can launch ffmpeg and ffprobe
- [#15984](https://github.com/unslothai/unsloth/pull/15984) fix(eval): reserve explicit YAML task names
- [#16086](https://github.com/unslothai/unsloth/pull/16086) Studio: keep a resident GGUF's repo identity for Hub shared-blob cache files
- [#15962](https://github.com/unslothai/unsloth/pull/15962) Bump the npm-oxc-validator group in /studio/backend/core/data_recipe/oxc-validator with 3 updates
- [#15963](https://github.com/unslothai/unsloth/pull/15963) Bump actions/setup-python in /
- [#15964](https://github.com/unslothai/unsloth/pull/15964) Bump github/codeql-action init and analyze to v4.39.1
- [#15966](https://github.com/unslothai/unsloth/pull/15966) Bump swatinem/rust-cache in /
- [#16079](https://github.com/unslothai/unsloth/pull/16079) fix(studio): keep a long MLX vision chat's prompt snapshot past the cache budget
- [#15968](https://github.com/unslothai/unsloth/pull/15968) Bump trufflesecurity/trufflehog in /
- [#15986](https://github.com/unslothai/unsloth/pull/15986) Studio: size a cached DFlash sidecar from disk instead of asking the Hub on every load
- [#16087](https://github.com/unslothai/unsloth/pull/16087) Studio: int8 Qwen-Image streamed modulations through a fused GEMV (1.23x under a 16 GiB budget)
- [#16044](https://github.com/unslothai/unsloth/pull/16044) Studio: let managed accounts use local MCP servers when allowed
- [#15536](https://github.com/unslothai/unsloth/pull/15536) Report measured model loading and 4-bit conversion during image training
- [#16088](https://github.com/unslothai/unsloth/pull/16088) Tests: run the MXFP4 operand device guard check on CPU-only torch too
- [#16008](https://github.com/unslothai/unsloth/pull/16008) Studio: read a JSON body inside <function=...> instead of running the call with no arguments
- [#15978](https://github.com/unslothai/unsloth/pull/15978) Studio: batch the raw text blank row filter and EOS append for map-style datasets
- [#16037](https://github.com/unslothai/unsloth/pull/16037) Studio: stop skipping scheduled runs right after Studio starts
- [#15998](https://github.com/unslothai/unsloth/pull/15998) Studio chat: publish held stream text on the next frame instead of waiting for the next chunk
- [#16004](https://github.com/unslothai/unsloth/pull/16004) Studio: strip only harmony protocol tokens from gpt-oss answers
- [#16039](https://github.com/unslothai/unsloth/pull/16039) Studio: include Schema transform output in recipe dataset downloads
- [#16089](https://github.com/unslothai/unsloth/pull/16089) Studio: add Spanish (Latin America) as a display language
- [#15503](https://github.com/unslothai/unsloth/pull/15503) Desktop: run the AppImage on the host's WebKitGTK 2.54+ when available
- [#16036](https://github.com/unslothai/unsloth/pull/16036) Studio: let conversation search return every earlier turn that fits
- [#16077](https://github.com/unslothai/unsloth/pull/16077) Studio: no text selection from the clicks that follow a dropdown dismissal
- [#16069](https://github.com/unslothai/unsloth/pull/16069) Studio: fill locale gaps and translate the sign-in, consent and Desktop startup screens
- [#16082](https://github.com/unslothai/unsloth/pull/16082) Tests: stub @/lib/folder-icons in the Hub GGUF card Metal budget test
- [#16081](https://github.com/unslothai/unsloth/pull/16081) Studio: align the Images and Video preset dropdown with the title's top
- [#16000](https://github.com/unslothai/unsloth/pull/16000) Studio: name a too-short context length when completion masking drops rows
- [#15876](https://github.com/unslothai/unsloth/pull/15876) Studio: drag an image from one slot to another
- [#15945](https://github.com/unslothai/unsloth/pull/15945) fix(studio): list approved custom-code models in /v1/models
- [#16070](https://github.com/unslothai/unsloth/pull/16070) float16: agree on GradScaler skips across pipeline stages, scale the CP start, probe the float16 FP8 GEMM
- [#15900](https://github.com/unslothai/unsloth/pull/15900) Studio: scale the token count timeout so long chats can compact
- [#15795](https://github.com/unslothai/unsloth/pull/15795) Studio: stop the chat composer draft mirroring into other open tabs
- [#16076](https://github.com/unslothai/unsloth/pull/16076) Studio: keep the composer still when switching chats in WebKit
- [#16072](https://github.com/unslothai/unsloth/pull/16072) Context parallel: allow text-only Qwen3.5 checkpoints that carry a vision_config
- [#16067](https://github.com/unslothai/unsloth/pull/16067) Studio video: batch the CFG pair into one call on a compiled resident Wan denoiser
- [#16068](https://github.com/unslothai/unsloth/pull/16068) Context parallelism: refuse it beside tensor parallelism instead of training the wrong loss
- [#16063](https://github.com/unslothai/unsloth/pull/16063) FP8 scaled_mm: keep native fp16 output on torch >= 2.14
- [#16062](https://github.com/unslothai/unsloth/pull/16062) MXFP4 torch decode fallback: run ldexp on the operands' GPU
- [#16061](https://github.com/unslothai/unsloth/pull/16061) gpt-oss: accept an absolute transformers_weights inside the local model dir
- [#16060](https://github.com/unslothai/unsloth/pull/16060) Scope WavLM's 4-bit attention skip to WavLM's own layers
- [#16059](https://github.com/unslothai/unsloth/pull/16059) Cross entropy: trace under torch.compile(dynamic=True)
- [#16058](https://github.com/unslothai/unsloth/pull/16058) Packed mRoPE flash attention: cover a padded tail, same decision when compiled
- [#16057](https://github.com/unslothai/unsloth/pull/16057) GRPO: keep masking completions cut by the vLLM context limit
- [#15482](https://github.com/unslothai/unsloth/pull/15482) Desktop: Add GPU rendering setting with a Linux launch-crash fallback
- [#15958](https://github.com/unslothai/unsloth/pull/15958) Studio: one set of sort and filter icons, shorter chat cards, toolbar tooltips
- [#16050](https://github.com/unslothai/unsloth/pull/16050) Studio: toast icons centred on one line, top-aligned on longer toasts

#### 🐛 New Issues
- [#16055](https://github.com/unslothai/unsloth/issues/16055) [Feature] Let me know how much memory/resource the loaded model is using! `feature request` 💬4
- [#16178](https://github.com/unslothai/unsloth/issues/16178) [Bug] Studio: image generation returns 404 after a managed account loads a cached gated model `feature request` `bug` 💬3
- [#16065](https://github.com/unslothai/unsloth/issues/16065) [Bug] LFM3-Omni Video Input Fails `feature request` `bug` 💬3
- [#16054](https://github.com/unslothai/unsloth/issues/16054) [Bug] LFM3-Omni Safetensors fails to load `feature request` `bug` 💬3
- [#16184](https://github.com/unslothai/unsloth/issues/16184) [Bug] Unsloth Desktop on Linux: spell check is dead `feature request` `bug` 💬1
- [#16186](https://github.com/unslothai/unsloth/issues/16186) [Bug] [Critical Regression / Severity: Incident-level bug] Isolated install via UNSLOTH_STUDIO_HOME silently overwrites existing baseline venv `feature request` `bug` 💬2
- [#16185](https://github.com/unslothai/unsloth/issues/16185) [Bug] [Critical Regression / Severity: Incident-level bug] Isolated install via UNSLOTH_STUDIO_HOME silently overwrites existing baseline venv `feature request` `bug` 💬1
- [#16201](https://github.com/unslothai/unsloth/issues/16201) RTL for some languages `feature request`
- [#16193](https://github.com/unslothai/unsloth/issues/16193) [Bug] Gallery -> Show in Folder doesn't do anything `feature request` `bug` 💬1
- [#16187](https://github.com/unslothai/unsloth/issues/16187) [Bug] `search_conversation` tool totally disappeared `feature request` `bug` 💬1
- [#16192](https://github.com/unslothai/unsloth/issues/16192) [Feature] Make exporting all images practical `feature request`
- [#16100](https://github.com/unslothai/unsloth/issues/16100) [Feature] Unsloth Desktop - Add configuration for HTTP Port `feature request`
- [#16248](https://github.com/unslothai/unsloth/issues/16248) Video attachments cannot be opened in a built app: the opener fetches a data URL, which the production CSP blocks
- [#16221](https://github.com/unslothai/unsloth/issues/16221) [Bug] ShareGPT image lists fail after passing dataset format checks
- [#16195](https://github.com/unslothai/unsloth/issues/16195) [Bug] `unsloth list-checkpoints --outputs-dir` prints a traceback for a folder outside Unsloth's outputs folder
- [#16177](https://github.com/unslothai/unsloth/issues/16177) [Bug] Lost connection to the model server. It may have crashed -- try reloading the model. `feature request` `bug`
- [#16169](https://github.com/unslothai/unsloth/issues/16169) [Bug] Sandbox error that ejects the model? `feature request` `bug`
- [#16164](https://github.com/unslothai/unsloth/issues/16164) [Feature] `feature request`
- [#16163](https://github.com/unslothai/unsloth/issues/16163) [Bug] Please fill in your issue title here. `feature request` `bug`
- [#16162](https://github.com/unslothai/unsloth/issues/16162) [Feature] `feature request`
- [#16161](https://github.com/unslothai/unsloth/issues/16161) [Feature] `feature request`
- [#16051](https://github.com/unslothai/unsloth/issues/16051) [Bug] Mixed ShareGPT chats lose native tool-call metadata
- [#16056](https://github.com/unslothai/unsloth/issues/16056) [Feature] Direct Microphone Input for Audio-Accepting Models `feature request`

#### 🔒 Closed Issues
- [#15858](https://github.com/unslothai/unsloth/issues/15858) [Bug] Dolphin Venice Edition LLM via MLX engine not being rendered properly in UI while working well in other apps
- [#15800](https://github.com/unslothai/unsloth/issues/15800) [Bug] Context does not compact when returning to long conversations, rendering them non-continuable
- [#16065](https://github.com/unslothai/unsloth/issues/16065) [Bug] LFM3-Omni Video Input Fails
- [#16054](https://github.com/unslothai/unsloth/issues/16054) [Bug] LFM3-Omni Safetensors fails to load
- [#16034](https://github.com/unslothai/unsloth/issues/16034) [Bug] Questionable trl version used in kaggle notebooks for muse glimmer
- [#15935](https://github.com/unslothai/unsloth/issues/15935) [Bug] MLX memory estimator reports 69.7 GiB for a model that loads on a 24 GB Mac
- [#15989](https://github.com/unslothai/unsloth/issues/15989) [Bug] Model files larger than 50GB was blocked when ModelScope as Model source.
- [#16015](https://github.com/unslothai/unsloth/issues/16015) [Bug] Windows + AMD: llama-server holds ~16 GB commit charge after loading GGUF, even with "Don't reserve system RAM" — commit limit gets exhausted
- [#15832](https://github.com/unslothai/unsloth/issues/15832) [Bug] LFM3 MLX models don't get displayed with curl v1/models
- [#16029](https://github.com/unslothai/unsloth/issues/16029) [Feature] Let the owner share MCP servers with managed accounts (private HTTP MCP not addable by managed accounts)
- [#16028](https://github.com/unslothai/unsloth/issues/16028) [Bug] Unsloth Desktop (Linux): changing the theme aborts WebKitWebProcess and freezes the window
- [#15982](https://github.com/unslothai/unsloth/issues/15982) [Bug] Eval dataset task names collide with later YAML tasks
- [#15782](https://github.com/unslothai/unsloth/issues/15782) [Bug] Text CRUD in "Ask anything" (chat) input textarea [textarea name="input"] duplicates across open tabs even when tabs have different chats open
- [#15895](https://github.com/unslothai/unsloth/issues/15895) [Bug] Train on completions drops 80%+ of an Alpaca dataset on any instruct model: the Alpaca template is never installed, but masking still looks for its markers
- [#15856](https://github.com/unslothai/unsloth/issues/15856) [Bug] Dragging an image from one position to another fails with Drop a JPEG, PNG, WebP or GIF image

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,169 · **Open issues:** 381 · **Last push:** <1h ago

On October 31, 2026, there were no new releases for AIBrix, but several important bug fixes and enhancements were merged. Notable changes included PR #3261, which addresses an issue with skipping blank lines during batch input resumption, and PR #3341, which introduces support for configuration profiles in the local-mode endpoints file. Additionally, PR #3357 ensures that errors from a prefill engine are properly forwarded to the pd client. Among the newly reported issues, #3360 highlights a flaky test related to request connection failures, indicating potential instability in that area. Overall, the day focused on improving system robustness and addressing critical bugs.

#### ✅ Merged PRs
- [#3269](https://github.com/vllm-project/aibrix/pull/3269) [Bug] Raise S3 multipart upload errors instead of storing only the tail of the data
- [#3263](https://github.com/vllm-project/aibrix/pull/3263) [Bug] Count manager get() results as tokens in hit and miss metrics
- [#3261](https://github.com/vllm-project/aibrix/pull/3261) [Bug] Skip blank lines when resuming batch input at a request index
- [#3357](https://github.com/vllm-project/aibrix/pull/3357) [Bug] Forward a prefill engine's error to the pd client
- [#3327](https://github.com/vllm-project/aibrix/pull/3327) [Bug] Score least-latency routing by recent latency instead of lifetime mean
- [#3341](https://github.com/vllm-project/aibrix/pull/3341) [Feat] Support config profiles in the local-mode endpoints file
- [#3352](https://github.com/vllm-project/aibrix/pull/3352) [Bug] Treat self gateway as live in running requests admit script
- [#3290](https://github.com/vllm-project/aibrix/pull/3290) [Bug] Export no percentile for a histogram with no observations
- [#3343](https://github.com/vllm-project/aibrix/pull/3343) [Misc] Reuse candidate prefix matches within a routing decision
- [#3349](https://github.com/vllm-project/aibrix/pull/3349) [Bug] Divide TPOT histogram sum by count in avg_tpot_pod_5m
- [#3355](https://github.com/vllm-project/aibrix/pull/3355) [Docs] Fix dead links in docs and READMEs

#### 🐛 New Issues
- [#3360](https://github.com/vllm-project/aibrix/issues/3360) Flaky TestPDPrefillRequestConnectionFailureIsPropagatedBeforeEnvoyRouting `good first issue` `help wanted` `area/gateway` `area/testing` 💬2
- [#3362](https://github.com/vllm-project/aibrix/issues/3362) Interleaved RoleSet rollout stalls at step 0 while an outdated pod is not ready, blocking every role `kind/bug` `area/testing` `area/runtime` `area/orchestration` 💬1
- [#3356](https://github.com/vllm-project/aibrix/issues/3356) pd` routing: prefill engine 4xx/5xx are masked as `503 error on selecting target pod` `kind/bug` `area/gateway` `triage/accepted` `area/testing` 💬1

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,348 · **Open issues:** 875 · **Last push:** 12h ago

On October 31, 2026, there were no new releases or merged pull requests for Semantic Router. However, several important bugs were reported, including issue #5643, which concerns the CLI status not using the active management port, and #5642, which involves a revision pinning issue with the built-in d3-ultra model runtime that is not available on the Hub. Additionally, bugs affecting CUDA image performance and Anthropic block processing were reported in issues #5640 and #5644, respectively. With no significant code updates today, the focus remains on addressing these emerging issues in future developments.

#### 🐛 New Issues
- [#5643](https://github.com/vllm-project/semantic-router/issues/5643) [Bug] Use the active management port in CLI status `bug` `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬3
- [#5649](https://github.com/vllm-project/semantic-router/issues/5649) [Docs] The legacy PR Gate notes read as a finished bootstrap, but a legacy-only PR cannot enter the merge queue `accepted` `wg/evaluation-quality` `documentation` 💬2
- [#5642](https://github.com/vllm-project/semantic-router/issues/5642) [Bug] Model runtime: the built-in d3-ultra pins a revision that is not on the Hub `bug` `accepted` `in-progress` `wg/router-models-inference-runtime` 💬2
- [#5640](https://github.com/vllm-project/semantic-router/issues/5640) [Bug] CUDA image: NVFP4 products fail on GB10 (sm_121) with the bundled cuBLAS 12.8 `bug` `needs-acceptance` `wg/router-models-inference-runtime` 💬1
- [#5648](https://github.com/vllm-project/semantic-router/issues/5648) [Bug] Vela 3.0 span threshold lookup raises uncaught StopIteration when no bucket matches `bug` `needs-acceptance` `wg/router-models-inference-runtime`
- [#5644](https://github.com/vllm-project/semantic-router/issues/5644) [Bug] Anthropic redacted_thinking blocks are rejected even for Anthropic-to-Anthropic traffic `needs-acceptance` `wg/data-plane-networking`
- [#5641](https://github.com/vllm-project/semantic-router/issues/5641) [Bug] Anthropic text blocks with "citations": null are rejected as unsupported citations `needs-acceptance` `wg/data-plane-networking`

#### 🔒 Closed Issues
- [#2587](https://github.com/vllm-project/semantic-router/issues/2587) [Research] Improve jailbreak detector recall and adversarial robustness
- [#4582](https://github.com/vllm-project/semantic-router/issues/4582) [Test] Wait for the asynchronous audit write in the WebSocket handshake test
- [#5419](https://github.com/vllm-project/semantic-router/issues/5419) [Bug] ROCm host-ID CLI test fails on macOS without a Linux host mock
- [#5018](https://github.com/vllm-project/semantic-router/issues/5018) [Feature] Add a locked uv environment for the multimodal large embedding trainer
- [#5649](https://github.com/vllm-project/semantic-router/issues/5649) [Docs] The legacy PR Gate notes read as a finished bootstrap, but a legacy-only PR cannot enter the merge queue
- [#5562](https://github.com/vllm-project/semantic-router/issues/5562) [Bug] Anthropic tool_result.is_error translation is always rejected with HTTP 400 and cannot be allowed
- [#5577](https://github.com/vllm-project/semantic-router/issues/5577) [Bug] vela-halu and hallucination E2E profiles run below the memory vela3-fast needs
- [#5592](https://github.com/vllm-project/semantic-router/issues/5592) [Bug] The balance recipe sends a legal-risk probe to medium_explainer since vela3-fast answers the built-in signals
- [#5509](https://github.com/vllm-project/semantic-router/issues/5509) [Bug] PR Gate publisher has no retry: one transient API failure leaves the required check unreported until the next qualifying event

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*