# 📡 AI Ecosystem Digest — 2026-11-01

> Generated 2026-11-01 01:55 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 154,080 | 20 | 15 | 0 | 0 |
| [OpenAI Codex](https://github.com/openai/codex) | 132,517 | 20 | 4 | 0 | 0 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 108,634 | 0 | 1 | 0 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,317 | 2 | 11 | 0 | 1 |
| [OpenCode](https://github.com/anomalyco/opencode) | 223,617 | 18 | 23 | 11 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 28,853 | 16 | 13 | 1 | 0 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 393,563 | 116 | 97 | 178 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 259,197 | 38 | 3 | 0 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 96,006 | 10 | 11 | 28 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 38,328 | 7 | 12 | 59 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 132,994 | 15 | 10 | 12 | 7 |
| [Ollama](https://github.com/ollama/ollama) | 185,484 | 9 | 3 | 1 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 62,455 | 18 | 43 | 87 | 0 |
| [Unsloth](https://github.com/unslothai/unsloth) | 78,882 | 15 | 2 | 29 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,171 | 5 | 0 | 1 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,356 | 9 | 15 | 1 | 0 |

---

## ✨ Highlights

- **Gemini CLI** released version [v0.67.0-nightly.20261101.g6814e00d6](https://github.com/google-gemini/gemini-cli/releases/tag/v0.67.0-nightly.20261101.g6814e00d6).
- **GitHub Copilot CLI** released version [v1.0.106-1](https://github.com/github/copilot-cli/releases/tag/v1.0.106-1).
- **OpenClaw** merged PR [#189893](https://github.com/openclaw/openclaw/pull/189893) to refactor runtime by deferring unused model pricing lookups.
- **Hermes Agent** has a high-impact new issue [#147269](https://github.com/NousResearch/hermes-agent/issues/147269) indicating the Android beta has hit the Firebase tester limit, with 6 comments expressing concern.
- **OpenCode** reports an urgent issue [#60990](https://github.com/anomalyco/opencode/issues/60990) about the Free-tier BigPickle quota being exhausted rapidly, gathering 3 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 154,080 · **Open issues:** 16,173 · **Last push:** 1d ago

On November 1, 2026, there were no new releases or merged pull requests for Claude Code. However, several notable issues were opened, including a bug report (#106338) where Claude disregards the CLAUDE.md safety and style rules even in context, and a major concern (#106460) about the Ultra plan in which sessions lose context and report unfinished work as completed. Additionally, a critical bug (#106436) was raised regarding the claude_install.sh script that inadvertently re-downloads the executable, causing timeouts on slower internet connections. Another issue (#106467) pointed out that Claude Code improperly edits files via shell commands, leading to code corruption. Overall, the day was marked by a focus on addressing several significant bugs and usability issues.

#### 🐛 New Issues
- [#106338](https://github.com/anthropics/claude-code/issues/106338) [Bug] Claude ignores CLAUDE.md safety and style rules, even when they are in context `bug` `platform:windows` `area:model` `needs-repro` 💬1
- [#106460](https://github.com/anthropics/claude-code/issues/106460) [MODEL] Ultra plan: sessions lose context, ignore CLAUDE.md and report unfinished work as done `bug` `platform:windows` `area:model` `model` 💬1
- [#106466](https://github.com/anthropics/claude-code/issues/106466) [BUG] Session files in ~/.claude/sessions are named by process ID, which collides across PID namespaces `bug` `platform:linux` `area:core` 💬1
- [#106436](https://github.com/anthropics/claude-code/issues/106436) [BUG] After downloading executable, claude_install.sh runs install from it, which inexplicably re-downloads the entire executable and fails with timeout on slow Internet connections. `bug` `has repro` `platform:linux` `area:installation` 💬1
- [#106473](https://github.com/anthropics/claude-code/issues/106473) [MODEL] Cross-session transcript reads after /clear and incomplete investigations reported as finished `bug` `platform:macos` `area:model` `area:security`
- [#106472](https://github.com/anthropics/claude-code/issues/106472) /rewind still unavailable from claude.ai/code and the mobile app over Remote Control (2.1.316) `enhancement` `area:core` `platform:ios` `area:claude-code-web`
- [#106471](https://github.com/anthropics/claude-code/issues/106471) [Bug] Model loses task context and requires repeated user corrections `bug` `platform:windows` `area:model` `needs-repro`
- [#106470](https://github.com/anthropics/claude-code/issues/106470) Can we make more improvements to the coordination to the orchestrator and threa… `enhancement` `area:agents`
- [#106469](https://github.com/anthropics/claude-code/issues/106469) Claude Opus 5.5 - Claude Code agent repeatedly evaded a PreToolUse gate with base64 encoding then re-wrote its own instructions `bug` `area:security` `area:hooks` `model`
- [#106468](https://github.com/anthropics/claude-code/issues/106468) Bug Report: Unclear issue, only placeholder text provided `bug` `platform:macos` `platform:vscode` `needs-info`
- [#106467](https://github.com/anthropics/claude-code/issues/106467) [Bug] Claude Code edits files via shell (node -e, heredoc, sed) instead of Edit/Write, corrupting code `bug` `platform:windows` `area:tools` `area:model`
- [#106465](https://github.com/anthropics/claude-code/issues/106465) [BUG] Plugin language servers don't go through CLAUDE_CODE_SHELL_PREFIX `bug` `platform:linux` `area:security` `area:lsp`
- [#106464](https://github.com/anthropics/claude-code/issues/106464) [Desktop][macOS] Voice dictation captures audio but returns no text — "Socket is not connected" on speech_to_text websocket (works on claude.ai in browser) `invalid` `area:desktop`
- [#106463](https://github.com/anthropics/claude-code/issues/106463) [Bug] Unclear Documentation on Task Organization Policy Guidelines `bug` `platform:windows` `area:permissions` `needs-repro`
- [#106462](https://github.com/anthropics/claude-code/issues/106462) [BUG] Spinner 'Running SessionStart hooks…' stays until end of turn after a plugin-replaced compaction `bug` `has repro` `platform:windows` `area:tui`
- [#106461](https://github.com/anthropics/claude-code/issues/106461) [BUG] CLAUDE_CODE_GLOB_NO_IGNORE=false no longer makes Glob respect .gitignore (2.1.316) `bug` `has repro` `platform:linux` `area:tools`
- [#106459](https://github.com/anthropics/claude-code/issues/106459) [FEATURE] Desktop: Activity inbox (bell) listing every chat, session and scheduled run that needs my attention `enhancement` `platform:windows` `area:desktop`
- [#106458](https://github.com/anthropics/claude-code/issues/106458) [BUG] Individual API plan: interactive Claude Code returns "Credit balance too low" despite $199 credit; claude -p works `duplicate` `platform:linux` `area:cost` `area:auth`
- [#106457](https://github.com/anthropics/claude-code/issues/106457) remote-control: session processes are not terminated after routine finishes or session is archived; server hits --capacity 32 and new sessions stay pending `bug` `has repro` `platform:linux` `area:agent-view`
- [#106456](https://github.com/anthropics/claude-code/issues/106456) [BUG] Desktop app shows usage reset times 1 hour early on Windows "British Columbia Standard Time" (falls back to fixed UTC-8) `bug` `platform:windows` `area:desktop`

#### 🔒 Closed Issues
- [#87419](https://github.com/anthropics/claude-code/issues/87419) [BUG] Weekly + Fable scoped meters deplete 1.7-5x faster since Aug 17 reset on Max 20x; OAuth token carried rateLimitTier default_claude_max_5x
- [#90680](https://github.com/anthropics/claude-code/issues/90680) Fable 5 safeguard false-positive [cyber] blocks writing a regression test for our OWN security fix — and the recovery UI causes silent model downgrades
- [#83699](https://github.com/anthropics/claude-code/issues/83699) [FEATURE] Desktop: collapsed sidebar project groups should still show active sessions, not just the current one
- [#90682](https://github.com/anthropics/claude-code/issues/90682) [FEATURE] Desktop sidebar: show a session count on collapsed custom groups
- [#90670](https://github.com/anthropics/claude-code/issues/90670) Remote Control: mobile new-session model chip (Fable 5) ignored — spawned session silently runs host default (Opus)
- [#90607](https://github.com/anthropics/claude-code/issues/90607) Inline plugins (zoom-plugin, pdf-viewer, prisma) reconnect after Disable; zoom-plugin has an Authorization header the account never set
- [#90615](https://github.com/anthropics/claude-code/issues/90615) [BUG] Notion MCP connector toggle doesn't persist — reverts to enabledInChat:false repeatedly
- [#81885](https://github.com/anthropics/claude-code/issues/81885) [BUG] TUI visual artifacts during diff view in PyCharm integrated terminal
- [#90681](https://github.com/anthropics/claude-code/issues/90681) [Bug] Claude Code should prevent or warn against pasting sensitive credentials in chat
- [#90676](https://github.com/anthropics/claude-code/issues/90676) PowerShell tool: pwsh.exe fails with "Permission denied" (exit 126) inside sandboxed session, while powershell.exe works fine
- [#90673](https://github.com/anthropics/claude-code/issues/90673) [Bug] System Prompt/Skill Instructions Not Persisted Across Messages
- [#90671](https://github.com/anthropics/claude-code/issues/90671) [Bug] Persistent false-positive [bio] flag blocking COBOL/JCL code analysis
- [#90668](https://github.com/anthropics/claude-code/issues/90668) spawn_task chip runs in the spawning session's working tree, not an isolated worktree — while that session is still editing it
- [#90663](https://github.com/anthropics/claude-code/issues/90663) [BUG] Model skips explicitly-provided reference files to save context, and drops self-announced follow-ups
- [#90662](https://github.com/anthropics/claude-code/issues/90662) [BUG] PreToolUse/PostToolUse inside a running subagent are sometimes reported under a different agent_id that has no SubagentStart, no agent_type, and never gets a SubagentStop

### OpenAI Codex (`openai/codex`)

**Stars:** 132,517 · **Open issues:** 25,871 · **Last push:** 1d ago

On November 1, 2026, there were no new releases or merged pull requests for OpenAI Codex, indicating a day of routine maintenance. Among the new issues, a notable concern was raised in issue #58551 regarding a missing Sparkle appcast for macOS, which returned a 404 error during update checks. Additionally, issue #58630 highlighted a request to preserve separate usage allowances for ChatGPT and Codex on the Plus plan, reflecting users' feedback on shared limits. There were also several bug reports, including persistent crashes and various application errors related to both macOS and Windows environments.

#### 🐛 New Issues
- [#58551](https://github.com/openai/codex/issues/58551) [macOS] Update check redirects to a missing Sparkle appcast (HTTP 404) `bug` `app` `connectivity` 💬9
- [#58530](https://github.com/openai/codex/issues/58530) Please preserve separate ChatGPT and Codex usage allowances on Plus (feedback on reported shared limits) `enhancement` `rate-limits` 💬1
- [#58624](https://github.com/openai/codex/issues/58624) [macOS 26.1027.30824] Opening Dot hits AppRoutes error boundary: Messaging account changed; Retry recovers `bug` `app` `dots` 💬1
- [#58621](https://github.com/openai/codex/issues/58621) Improve pet visual quality and compact activity bubbles `enhancement` `app` `pets` 💬1
- [#58617](https://github.com/openai/codex/issues/58617) time `bug` `rate-limits` `app` 💬1
- [#58616](https://github.com/openai/codex/issues/58616) One-time Codex automation triggered on three consecutive days despite COUNT=1 `bug` `windows-os` `app` `automations` 💬1
- [#58615](https://github.com/openai/codex/issues/58615) Windows: Python and FFmpeg fail with Access is denied in desktop chats `bug` `windows-os` `sandbox` `tool-calls` 💬1
- [#58613](https://github.com/openai/codex/issues/58613) macOS desktop request fails to launch with no visible generation `bug` `app` 💬1
- [#58612](https://github.com/openai/codex/issues/58612) [macOS / Work] Retired monitoring read-only scope still cited when rejecting newly authorized private Space edits `bug` `codex-web` `sandbox` `safety-check` 💬1
- [#58609](https://github.com/openai/codex/issues/58609) [macOS remote] send_message_to_thread appears to reset receiving chat’s automatic approval mode `bug` `sandbox` `app` `app-server` 💬1
- [#58610](https://github.com/openai/codex/issues/58610) Persistant codex crashes `bug` `windows-os` `extension` 💬1
- [#58605](https://github.com/openai/codex/issues/58605) Codex automation incident report `bug` `model-behavior` `windows-os` `app` 💬1
- [#58623](https://github.com/openai/codex/issues/58623) codex typescript sdk: supporting for Multi-Thread / Multi-Session create\run\resume? `enhancement` `CLI` `app-server`
- [#58622](https://github.com/openai/codex/issues/58622) macOS Computer Use resolves an existing scrollbar ID by traversing a 10,000-item AX tree (~10 seconds) `bug` `app` `computer-use` `performance`
- [#58620](https://github.com/openai/codex/issues/58620) Pet activity bubble is too wide and obstructs the workspace `enhancement` `app` `pets`
- [#58619](https://github.com/openai/codex/issues/58619) Refresh tools updates MCP schemas in new chats but leaves existing Dot conversations using outdated definitions `bug` `mcp` `dots`
- [#58614](https://github.com/openai/codex/issues/58614) [Dots] Cloud computer filesystem changed ~32→64 GiB and prior working directories disappeared `bug` `dots`
- [#58611](https://github.com/openai/codex/issues/58611) Cloud task intermittently lacks its existing workspace; supported runtime reattachment is unclear `bug` `codex-web` `app-server`
- [#58608](https://github.com/openai/codex/issues/58608) Mobile Remote replaces a chat’s saved gateway provider with OpenAI, breaking resume `bug` `custom-model` `app` `app-server`
- [#58607](https://github.com/openai/codex/issues/58607) HeyGen tools advertised by codex_apps return MCP Unknown tool after reconnect/reinstall `bug` `mcp` `tool-calls` `skills`

#### 🔒 Closed Issues
- [#58098](https://github.com/openai/codex/issues/58098) : Pro 200 – 82% weekly usage consumed in one day
- [#58605](https://github.com/openai/codex/issues/58605) Codex automation incident report
- [#34104](https://github.com/openai/codex/issues/34104) Explicit Microsoft Excel mentions create local spreadsheet files, while restricted permission modes route tasks through Node_Repl_JS instead of Shell
- [#30828](https://github.com/openai/codex/issues/30828) Add an option to require manual approval before running the next queued task in the VS Code extension

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 108,634 · **Open issues:** 760 · **Last push:** <1h ago

On November 1, 2026, Gemini CLI released version v0.67.0-nightly.20261101.g6814e00d6, marking the latest in their nightly builds with updates detailed in the full changelog. There were no merged pull requests or new issues reported in the last 24 hours, indicating a quiet day for the project. Overall, the update appears to be routine maintenance without significant new features or urgent issues emerging.

#### 🚀 New Releases
- [v0.67.0-nightly.20261101.g6814e00d6](https://github.com/google-gemini/gemini-cli/releases/tag/v0.67.0-nightly.20261101.g6814e00d6) Release v0.67.0-nightly.20261101.g6814e00d6

#### 🔒 Closed Issues
- [#23382](https://github.com/google-gemini/gemini-cli/issues/23382) fix(core): MCP tool schemas with missing type:'object' cause provider rejection

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,317 · **Open issues:** 2,182 · **Last push:** 5h ago

On November 1, 2026, GitHub Copilot CLI released version 1.0.106-1, which includes a fix for the `apply_patch` function, ensuring that it preserves line endings in files with mixed LF and CRLF endings without rewriting the entire file. Additionally, the `COPILOT_PROVIDER_GHES_HOST` variable now correctly accepts the browser address of the instance, resolving previous issues with malformed URLs. There were no merged pull requests in the last 24 hours, but two new issues were opened, with #5312 reporting a lingering problem with context window rollover following a prior fix, and #5311 noting that Copilot incorrectly requests approval for absolute paths that point to the repo root. Overall, while today's updates were moderate, the fixes implemented in the new version promise to enhance user experience.

#### 🚀 New Releases
- [v1.0.106-1](https://github.com/github/copilot-cli/releases/tag/v1.0.106-1) 1.0.106-1

#### 🐛 New Issues
- [#5312](https://github.com/github/copilot-cli/issues/5312) Context window rollover still fails after #5205 closed as completed: checkpoint.md absent recurs on 1.0.105 `triage` 💬2
- [#5311](https://github.com/github/copilot-cli/issues/5311) Copilot asks for aproval of absoloute path that point into the repo root `triage`

#### 🔒 Closed Issues
- [#4994](https://github.com/github/copilot-cli/issues/4994) Regression (1.0.88 → 1.0.89): MCP OAuth authorization page opens on every ACP session instead of the challenge being resolved silently
- [#4097](https://github.com/github/copilot-cli/issues/4097) apply_patch stores deleted binary in session history, permanently exceeding CAPI 5 MB limit
- [#4537](https://github.com/github/copilot-cli/issues/4537) ACP mode auto-approves tool calls again — session/request_permission not sent since 1.0.81-1 (regression of #845)
- [#4880](https://github.com/github/copilot-cli/issues/4880) ACP: expose the model list as a category:model config option (session/new returns only mode and allow_all)
- [#2044](https://github.com/github/copilot-cli/issues/2044) ACP: session/new response reports incorrect currentModelId
- [#4419](https://github.com/github/copilot-cli/issues/4419) Managed-settings interim fail-closed uses an empty allow list ([[]]) and permanently drops user MCP servers that register inside the window — reproduces via the desktop app, on an account with no managed policy
- [#79](https://github.com/github/copilot-cli/issues/79) Replicate auggie's prompt enhancer feature
- [#5007](https://github.com/github/copilot-cli/issues/5007) Node/libuv terminal detection clears the native runtime’s SIGCHLD handler, delaying userPromptSubmitted hooks until their full timeout
- [#4601](https://github.com/github/copilot-cli/issues/4601) Copilot constantly nags about "parent directory" access when it's clearly in a subfolder of the project directory
- [#2361](https://github.com/github/copilot-cli/issues/2361) Copilot CLI SEA binary hangs when IPv6 is unroutable — no fallback to IPv4
- [#5271](https://github.com/github/copilot-cli/issues/5271) WSL: clipboard write via clip.exe fails (quoted path in cmd /c), mouse selection copies nothing

### OpenCode (`anomalyco/opencode`)

**Stars:** 223,617 · **Open issues:** 3,752 · **Last push:** <1h ago

On November 1, 2026, OpenCode did not release any new versions, but several significant updates were merged. Notable changes included the new tracing feature for requests and session turns (#60974), as well as improvements in session warming based on the model's cache TTL (#60969). Additionally, fixes were implemented to prevent session interruptions caused by empty input (#60977) and to enhance error reporting related to token limits (#60795). One of the most pressing issues raised was the concern that the free-tier BigPickle quota was exhausted almost instantly, leading to a frustrating 24-hour cooldown for users (#60990).

#### ✅ Merged PRs
- [#60977](https://github.com/anomalyco/opencode/pull/60977) fix(app): don't interrupt the session on empty Enter
- [#60974](https://github.com/anomalyco/opencode/pull/60974) feat(core): trace each request and session turn on its own, with session, tool and model details
- [#60969](https://github.com/anomalyco/opencode/pull/60969) feat(core): time session warming from the model's cache TTL
- [#60795](https://github.com/anomalyco/opencode/pull/60795) fix(ai): report the token limit instead of a schema decode error
- [#60964](https://github.com/anomalyco/opencode/pull/60964) refactor(ai): require prompt or messages, not both
- [#60965](https://github.com/anomalyco/opencode/pull/60965) refactor(ai): rename tool parameters to input
- [#60249](https://github.com/anomalyco/opencode/pull/60249) fix(tui): hide terminal cursor behind toast notifications
- [#60952](https://github.com/anomalyco/opencode/pull/60952) fix(core): skip saving or unarchiving deleted project directories
- [#60955](https://github.com/anomalyco/opencode/pull/60955) fix(core): stop logging errors when optional watched folders are missing
- [#60954](https://github.com/anomalyco/opencode/pull/60954) fix(core): avoid redundant file reads and error spans when writing files
- [#60953](https://github.com/anomalyco/opencode/pull/60953) fix(core): stop failing model catalog fetch spans on 304 cache hits

#### 🐛 New Issues
- [#60990](https://github.com/anomalyco/opencode/issues/60990) Free-tier BigPickle quota is exhausted almost instantly (1–5 min / ~5 messages), forcing a 24-hour cooldown `pending close` `triaging` 💬3
- [#60982](https://github.com/anomalyco/opencode/issues/60982) Feature Request: Provide Node.js fallback or compatibility mode for older non-SSE4.2 CPUs `pending close` `triaging` 💬3
- [#60979](https://github.com/anomalyco/opencode/issues/60979) mini: every resize re-fetches and reprints the whole transcript, even when only the height changes 💬2
- [#60994](https://github.com/anomalyco/opencode/issues/60994) [FEATURE]: `triaging` 💬2
- [#60992](https://github.com/anomalyco/opencode/issues/60992) perf: measure Part proof-trigger write amplification `triaging` 💬2
- [#60991](https://github.com/anomalyco/opencode/issues/60991) Free-tier quota is IP-bucketed, not account-bucketed: pre-exhausted shared IPs block users on their very first request `pending close` `triaging` 💬2
- [#60983](https://github.com/anomalyco/opencode/issues/60983) OpenCode Desktop remains running in background after closing the window `triaging` 💬2
- [#60869](https://github.com/anomalyco/opencode/issues/60869) ECONNREFUSED when using another machine in local network `triaging` 💬2
- [#60960](https://github.com/anomalyco/opencode/issues/60960) OpenAPI: `location` query parameter loses `style: deepObject` on the artifacts endpoints (and `experimental.mcp.client`) `reproduced` 💬2
- [#60993](https://github.com/anomalyco/opencode/issues/60993) ## OpenCode Zen free-model quota exhausted after 1–2 prompts on v2 `pending close` `triaging` 💬1
- [#60989](https://github.com/anomalyco/opencode/issues/60989) plugin: ReleaseError (metadata missing) aborts plugin load when multiple clients start together 💬1
- [#60988](https://github.com/anomalyco/opencode/issues/60988) [FEATURE]: `triaging` 💬1
- [#60981](https://github.com/anomalyco/opencode/issues/60981) [FEATURE]: Surface Meta Model API usage quota 💬1
- [#60975](https://github.com/anomalyco/opencode/issues/60975) Claude Agent: session hangs after a tool call when Claude Code falls back to non-streaming `reproduced` 💬1
- [#60976](https://github.com/anomalyco/opencode/issues/60976) [FEATURE]: Load configured ./gui-experimental plugins in the web app (window setup only) 💬1
- [#60962](https://github.com/anomalyco/opencode/issues/60962) Issue you have used todays free messages. `pending close` `triaging` 💬1
- [#60961](https://github.com/anomalyco/opencode/issues/60961) General's built-in subagent deny makes experimental.subagent_depth ineffective for General 💬1
- [#60959](https://github.com/anomalyco/opencode/issues/60959) serve: skills file-watcher re-subscribes endlessly (~10/s for hours, 180% CPU, 479 CPU-hours) `pending close` `triaging` 💬1

#### 🔒 Closed Issues
- [#41746](https://github.com/anomalyco/opencode/issues/41746) [v2 Windows] opencode2 hangs at "Starting background server..." after reinstall
- [#37239](https://github.com/anomalyco/opencode/issues/37239) service (v2): restart spawns serve --service in a silent retry loop, forcing manual process kill
- [#41477](https://github.com/anomalyco/opencode/issues/41477) Slow startup / long loading time every time the OpenCode desktop app is launched (30+ seconds before the UI becomes usable)
- [#41739](https://github.com/anomalyco/opencode/issues/41739) opencode2 service startup fails while V1 migration scans a large SQLite database
- [#41365](https://github.com/anomalyco/opencode/issues/41365) [BUG] Desktop: conversation freezes mid-"thinking", no error, must abort and resend — missing watchdog/retry UX
- [#40560](https://github.com/anomalyco/opencode/issues/40560) [FEATURE/BUG] OpenCode Zen disabled models still appear in TUI picker (config drift risk)
- [#41092](https://github.com/anomalyco/opencode/issues/41092) Desktop: chat input disappears after first model response — unable to continue conversation (Windows)
- [#49640](https://github.com/anomalyco/opencode/issues/49640) "Edit Project" fails to do anything noticable if the Project's folder is not in git.
- [#37007](https://github.com/anomalyco/opencode/issues/37007) Cannot interrupt/stop long-running commands executed via the bash tool
- [#36037](https://github.com/anomalyco/opencode/issues/36037) Reasoning/thinking content renders one token per line in TUI during streaming
- [#38567](https://github.com/anomalyco/opencode/issues/38567) service: concurrent launch stalls after background auto-update
- [#60215](https://github.com/anomalyco/opencode/issues/60215) tui: terminal cursor draws over clipboard notification
- [#41360](https://github.com/anomalyco/opencode/issues/41360) v2: config-declared custom-provider models silently become 0 in catalog when models.opencode.ai fetch fails at boot (provider survives, resolution-by-ID still works)
- [#60493](https://github.com/anomalyco/opencode/issues/60493) core: subagent session resume fails — sessionID truncated to 'ses'
- [#60992](https://github.com/anomalyco/opencode/issues/60992) perf: measure Part proof-trigger write amplification
- [#60758](https://github.com/anomalyco/opencode/issues/60758) 【BUG】】opencode桌面端 显示额度用完
- [#60756](https://github.com/anomalyco/opencode/issues/60756) `Agent not found` for prompts sent without switching agents after the session's agent is removed
- [#60738](https://github.com/anomalyco/opencode/issues/60738) Windows: Tool detection spawns visible cmd.exe windows on startup (CREATE_NO_WINDOW needed)
- [#60729](https://github.com/anomalyco/opencode/issues/60729) desktop: stale background-service registration causes Desktop IPC handler failed and breaks attachment picker
- [#60021](https://github.com/anomalyco/opencode/issues/60021) plugins: session request hooks (context) do not fire for subagent (child) sessions
- [#54555](https://github.com/anomalyco/opencode/issues/54555) V2: Unrelated sessions share one outbound trace ID until the server restarts
- [#57988](https://github.com/anomalyco/opencode/issues/57988) A folder that no longer exists gets turned into a new project
- [#60959](https://github.com/anomalyco/opencode/issues/60959) serve: skills file-watcher re-subscribes endlessly (~10/s for hours, 180% CPU, 479 CPU-hours)

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 28,853 · **Open issues:** 2,051 · **Last push:** <1h ago

On November 1, 2026, there were no new releases for Qwen Code. However, a notable development included the merged pull request #16013, which fixes the verification process by counting test suites separately from round assertions. Several new issues were opened, with #16005 highlighting a lack of Node.js on the CI path, causing linting and static check failures. Additionally, #16020 proposed adding a ChatGPT-inspired activity view to the Web Shell for conversations that require user attention, suggesting a focus on improving user interaction. The day primarily consisted of routine maintenance and bug reporting, although the introduction of the activity view reflects ongoing enhancements in user experience.

#### ✅ Merged PRs
- [#16013](https://github.com/QwenLM/qwen-code/pull/16013) fix(verify-pr): count test suites apart from the round's assertions

#### 🐛 New Issues
- [#16005](https://github.com/QwenLM/qwen-code/issues/16005) ci: ecs-qwen-hz6-18 has no Node.js on PATH, so the required Lint & Static check fails for whichever commit lands there `priority/P2` `type/bug` `category/development` `scope/ci-cd` 💬5
- [#15975](https://github.com/QwenLM/qwen-code/issues/15975) test(managed-agent): assert per-member action-call binding at the A3 sibling-approval crash barrier `priority/P3` `category/integration` `scope/testing` `scope/ci-cd` 💬3
- [#16020](https://github.com/QwenLM/qwen-code/issues/16020) Web Shell: add a ChatGPT-inspired activity view for conversations needing attention `priority/P2` `type/feature-request` `category/ui` `roadmap/session-management` 💬2
- [#16003](https://github.com/QwenLM/qwen-code/issues/16003) CI runners run out of disk: the RocketMQ broker refuses writes and Java lanes cannot create temp directories `priority/P2` `type/bug` `category/development` `scope/ci-cd` 💬2
- [#16006](https://github.com/QwenLM/qwen-code/issues/16006) feat(core): let managed installs disable the models.dev catalog refresh from settings (and honor the privacy opt-out) `priority/P2` `type/feature-request` `category/configuration` `scope/settings` 💬2
- [#15996](https://github.com/QwenLM/qwen-code/issues/15996) Web Shell on touch devices: the composer is re-focused after switching sessions and leaving a panel, so the phone keyboard keeps opening `priority/P2` `type/bug` `category/ui` `scope/web-shell` 💬2
- [#15991](https://github.com/QwenLM/qwen-code/issues/15991) peer-controllers: cross-process lock wait (~1 s) gives up before a crashed holder's lock goes stale (5 s) `priority/P3` `type/bug` `category/core` `scope/session-management` 💬2
- [#15972](https://github.com/QwenLM/qwen-code/issues/15972) Managed Agent Hosted gates error out: the shared attachment lookup reflects on the harness connector decorator `status/in-review` `priority/P2` `type/bug` `category/development` 💬2
- [#15976](https://github.com/QwenLM/qwen-code/issues/15976) test(managed-agent): add a behavioral unit test for the A3 pending-sibling approval hold hook `priority/P3` `category/development` `scope/testing` `type/enhancement` 💬2
- [#15973](https://github.com/QwenLM/qwen-code/issues/15973) test(ci): harden the TUI parity workspace reconciliation (deferred from #15937) `priority/P3` `category/development` `scope/testing` `scope/ci-cd` 💬2
- [#15969](https://github.com/QwenLM/qwen-code/issues/15969) ci: converge Qwen Triage Finalize run inflation from non-PR Autofix completions `priority/P3` `category/development` `scope/github-actions` `scope/ci-cd` 💬2
- [#15970](https://github.com/QwenLM/qwen-code/issues/15970) ci: qwen-autofix.yml is at 458KB of the 500KB silent-failure limit `priority/P2` `category/development` `scope/github-actions` `scope/ci-cd` 💬2
- [#15968](https://github.com/QwenLM/qwen-code/issues/15968) ci: route the hardcoded hosted review auxiliary jobs to the ECS pool `priority/P3` `category/development` `scope/github-actions` `scope/ci-cd` 💬2
- [#15967](https://github.com/QwenLM/qwen-code/issues/15967) ci: give web-shell browser smoke a dedicated network-isolated self-hosted pool `priority/P2` `category/development` `scope/github-actions` `scope/ci-cd` 💬2
- [#16025](https://github.com/QwenLM/qwen-code/issues/16025) Main CI failed: Qwen Code CI — src/config/settings.test.ts > … > ignores the workspace approval mode list [ 'default' ] in favor of the user… (+118 more) `status/needs-triage` `type/bug` 💬1
- [#16026](https://github.com/QwenLM/qwen-code/issues/16026) Local web_fetch does not check the resolved address, so a public-looking hostname can fetch private/metadata addresses 💬1

#### 🔒 Closed Issues
- [#14793](https://github.com/QwenLM/qwen-code/issues/14793) Main CI failed: Desktop Checks — Desktop Checks > … > Prepare bundled runtime (+1 more)
- [#15795](https://github.com/QwenLM/qwen-code/issues/15795) managed-agent: in a Harness pool, a fire on a Session the draining Harness has released can answer 404 and retire the automation for good
- [#15741](https://github.com/QwenLM/qwen-code/issues/15741) MCP: duplicate tool names discard the entire server and emit a misleading 'no tools' error
- [#12511](https://github.com/QwenLM/qwen-code/issues/12511) feat(serve): batch workspace session live-state snapshots
- [#15919](https://github.com/QwenLM/qwen-code/issues/15919) qwen-code bundles fast-uri 3.1.0 via @modelcontextprotocol/client 2.0.0
- [#15892](https://github.com/QwenLM/qwen-code/issues/15892) Main CI failed: SDK Java — EventTransportMultiNodeGate.theFleetRollsTheFlagBackAndForth (+50 more)
- [#15646](https://github.com/QwenLM/qwen-code/issues/15646) bug(web-shell): Plugins has no visible way back to chat in compact/narrow layout
- [#15653](https://github.com/QwenLM/qwen-code/issues/15653) OAuth: non-owner SharedTokenManager exit deletes active refresh lock
- [#11484](https://github.com/QwenLM/qwen-code/issues/11484) feat(cli): allow explicit-version updates without npm registry discovery
- [#15991](https://github.com/QwenLM/qwen-code/issues/15991) peer-controllers: cross-process lock wait (~1 s) gives up before a crashed holder's lock goes stale (5 s)
- [#15972](https://github.com/QwenLM/qwen-code/issues/15972) Managed Agent Hosted gates error out: the shared attachment lookup reflects on the harness connector decorator
- [#15581](https://github.com/QwenLM/qwen-code/issues/15581) Main CI failed: Qwen Code CI — src/ipc/peer-controllers.test.ts > … > serializes concurrent additions
- [#15727](https://github.com/QwenLM/qwen-code/issues/15727) Release Failed for v0.26.2 on 2026-10-27

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

**Stars:** 393,563 · **Open issues:** 7,901 · **Last push:** <1h ago

On November 1, 2026, there were no new releases for OpenClaw. Key developments included the merging of several important pull requests, such as the addition of a publication watcher (#187994) and enhancements to improve control UI performance (#189912, #189843). Notable fixes addressed issues like the preservation of explicit web search preferences during sessions (#189889) and the identification of native main-thread stalls on Linux (#189916). A significant new issue reported is a bug (#189676) related to the failure of the `openclaw update`, which can leave a gateway in an unstable state that interferes with systemd unit operations.

#### ✅ Merged PRs
- [#189893](https://github.com/openclaw/openclaw/pull/189893) refactor(runtime): defer unused model pricing lookup
- [#189748](https://github.com/openclaw/openclaw/pull/189748) fix(release): unify plugin OIDC recovery preflight
- [#187994](https://github.com/openclaw/openclaw/pull/187994) feat(release): add publication watcher
- [#189782](https://github.com/openclaw/openclaw/pull/189782) refactor(test): reuse compact fixture writers
- [#189941](https://github.com/openclaw/openclaw/pull/189941) fix(oc-path): refuse JSON values on unsupported formats
- [#189933](https://github.com/openclaw/openclaw/pull/189933) fix(ci): account for the worker receipt SDK export
- [#189924](https://github.com/openclaw/openclaw/pull/189924) fix: allow plugin gateway handlers to return payloads
- [#189865](https://github.com/openclaw/openclaw/pull/189865) refactor(embeddings): decouple usage decoding from memory transport
- [#189916](https://github.com/openclaw/openclaw/pull/189916) fix(diagnostics): identify native main-thread stalls on Linux
- [#189919](https://github.com/openclaw/openclaw/pull/189919) fix(tests): bind read-worker tasks before starting sibling reads
- [#189889](https://github.com/openclaw/openclaw/pull/189889) fix(sessions): preserve explicit web search preferences
- [#189106](https://github.com/openclaw/openclaw/pull/189106) feat: retain repository disk authority through recovery
- [#189729](https://github.com/openclaw/openclaw/pull/189729) fix(control-ui): retire deleted sessions once without wiping cached sidebars
- [#189913](https://github.com/openclaw/openclaw/pull/189913) perf(control-ui): overlap Sessions and Cron route readiness
- [#189843](https://github.com/openclaw/openclaw/pull/189843) perf(ui): reduce shared agent selector setup and focus work
- [#189395](https://github.com/openclaw/openclaw/pull/189395) feat(google): use the Interactions API for Gemini Flash models
- [#189906](https://github.com/openclaw/openclaw/pull/189906) fix(ui): prevent archives after sidebar child removal
- [#189912](https://github.com/openclaw/openclaw/pull/189912) chore(ui): refresh control ui locales
- [#189897](https://github.com/openclaw/openclaw/pull/189897) fix(ci): remove unused internal identity types
- [#189868](https://github.com/openclaw/openclaw/pull/189868) fix(oc-path): avoid reading and editing a different Unicode key
- [#189762](https://github.com/openclaw/openclaw/pull/189762) perf(control-ui): admit dashboard reloads through the early Gateway handoff
- [#189903](https://github.com/openclaw/openclaw/pull/189903) improve(canvas): keep large widget validation responsive
- [#189388](https://github.com/openclaw/openclaw/pull/189388) feat(skills): bundle Skill Workshop as a plugin that owns learned skill folders
- [#189805](https://github.com/openclaw/openclaw/pull/189805) fix(exec): keep Windows POSIX shell approvals one-shot
- [#189894](https://github.com/openclaw/openclaw/pull/189894) fix(ci): keep backup and chat search internals private
- [#189900](https://github.com/openclaw/openclaw/pull/189900) fix(codex): recover unused native threads without dropping history
- [#189855](https://github.com/openclaw/openclaw/pull/189855) fix(oc-path): use last duplicate JSON key to match runtime parsing
- [#189801](https://github.com/openclaw/openclaw/pull/189801) perf(test): parse the Mantis resolver workflow once
- [#189638](https://github.com/openclaw/openclaw/pull/189638) feat(backup): preserve source artifacts for internal captures
- [#189564](https://github.com/openclaw/openclaw/pull/189564) fix(boards): publish widgets with PostgreSQL storage
- [#189532](https://github.com/openclaw/openclaw/pull/189532) fix: keep PostgreSQL credentials out of child environments
- [#189802](https://github.com/openclaw/openclaw/pull/189802) feat(database): capture externally quiesced SQLite migrations
- [#189685](https://github.com/openclaw/openclaw/pull/189685) feat(backup): add PostgreSQL local companion checkpoints
- [#189800](https://github.com/openclaw/openclaw/pull/189800) refactor(test): use canonical tracked temp paths
- [#189891](https://github.com/openclaw/openclaw/pull/189891) revert: default hard context admission (#189810)
- [#189898](https://github.com/openclaw/openclaw/pull/189898) chore(ui): refresh control ui locales
- [#188717](https://github.com/openclaw/openclaw/pull/188717) improve: show gateway commit and build time on About
- [#189799](https://github.com/openclaw/openclaw/pull/189799) refactor(test): share SDK export fixture JSON writes
- [#189879](https://github.com/openclaw/openclaw/pull/189879) fix: restore Files navigation from unavailable previews
- [#189798](https://github.com/openclaw/openclaw/pull/189798) refactor(test): share raw ratchet fixture writes
- [#189870](https://github.com/openclaw/openclaw/pull/189870) fix(ai): honor Model Studio compatible-mode output limits
- [#189851](https://github.com/openclaw/openclaw/pull/189851) test(embeddings): consolidate retry rejection proof
- [#189869](https://github.com/openclaw/openclaw/pull/189869) fix: hold queued messages through inline edits
- [#189790](https://github.com/openclaw/openclaw/pull/189790) perf(test): reuse the baseline fixture Node resolver
- [#189883](https://github.com/openclaw/openclaw/pull/189883) fix(ui): explain blank pages in browsers without module scripts
- [#189885](https://github.com/openclaw/openclaw/pull/189885) test(qa): correlate handoff replies by run identity
- [#189874](https://github.com/openclaw/openclaw/pull/189874) fix(ui): normalize canonical Unicode in local search comparisons
- [#189789](https://github.com/openclaw/openclaw/pull/189789) perf(test): avoid redundant explicit Bun version probes
- [#189875](https://github.com/openclaw/openclaw/pull/189875) fix(bench): mobile log scrolling fails before anchor checks
- [#189749](https://github.com/openclaw/openclaw/pull/189749) feat(cron): let human owners manage and transfer automations
- [#189882](https://github.com/openclaw/openclaw/pull/189882) fix(daemon): avoid repeated Windows scheduler engine drift warnings
- [#188910](https://github.com/openclaw/openclaw/pull/188910) feat: link Discord accounts from personal profiles
- [#189788](https://github.com/openclaw/openclaw/pull/189788) perf(test): reuse candidate dispatch parser output
- [#189863](https://github.com/openclaw/openclaw/pull/189863) fix(update): restore legacy Doctor CLI regression coverage
- [#189803](https://github.com/openclaw/openclaw/pull/189803) refactor(levanto): load decision execution on demand
- [#189787](https://github.com/openclaw/openclaw/pull/189787) refactor(ci): share ClawHub bootstrap steps
- [#189850](https://github.com/openclaw/openclaw/pull/189850) fix(ui): avoid forbidden requests from restricted operator roles
- [#189819](https://github.com/openclaw/openclaw/pull/189819) fix(update): preserve config edits during plugin finalization
- [#189861](https://github.com/openclaw/openclaw/pull/189861) fix(cron): reject empty Code Mode fallback catalogs
- [#189784](https://github.com/openclaw/openclaw/pull/189784) fix(oc-path): follow YAML aliases in path resolve, find and set
- [#189793](https://github.com/openclaw/openclaw/pull/189793) feat(database): capture exact SQLite migration capsules
- [#189718](https://github.com/openclaw/openclaw/pull/189718) feat(release): add FRV job log reader
- [#189645](https://github.com/openclaw/openclaw/pull/189645) fix(control-ui): show reconnect feedback only for real connection delays
- [#189852](https://github.com/openclaw/openclaw/pull/189852) fix: avoid duplicated replies from divergent final text resends
- [#189854](https://github.com/openclaw/openclaw/pull/189854) fix(exec): explain unresolved Gateway executables in denials
- [#189837](https://github.com/openclaw/openclaw/pull/189837) fix(slack): keep progress editable after native stream failures
- [#189818](https://github.com/openclaw/openclaw/pull/189818) fix(update): recover repeated Git download interruptions
- [#189751](https://github.com/openclaw/openclaw/pull/189751) refactor(provider-http): prepare request redactors once
- [#189842](https://github.com/openclaw/openclaw/pull/189842) chore(ui): refresh control ui locales
- [#189831](https://github.com/openclaw/openclaw/pull/189831) test(plugins): declare module types for sidecar fixtures
- [#189780](https://github.com/openclaw/openclaw/pull/189780) improve(ui): truncate session hovercard commentary with an ellipsis
- [#189810](https://github.com/openclaw/openclaw/pull/189810) fix: prevent context overflow during long tool turns
- [#189830](https://github.com/openclaw/openclaw/pull/189830) fix(images): report returned settings separately from requests
- [#189695](https://github.com/openclaw/openclaw/pull/189695) improve(ui): consistent corner radii across the Control UI
- [#171537](https://github.com/openclaw/openclaw/pull/171537) fix(ui): questions from visible child sessions never reach the parent chat
- [#189824](https://github.com/openclaw/openclaw/pull/189824) test(ui): align Memory overview CSS checks with shared rows
- [#189817](https://github.com/openclaw/openclaw/pull/189817) test(agents): complete embedded auth controller mock
- [#189812](https://github.com/openclaw/openclaw/pull/189812) test(ui): wait for boot composer focus before draft handoff checks
- [#189820](https://github.com/openclaw/openclaw/pull/189820) fix: preserve exact catalog hovercard breadcrumb checks
- [#184433](https://github.com/openclaw/openclaw/pull/184433) fix(auto-reply): long punctuation runs stall abort-trigger detection
- [#189661](https://github.com/openclaw/openclaw/pull/189661) improve(ui): fit row inner elements to the shared list row fills
- [#184432](https://github.com/openclaw/openclaw/pull/184432) fix(matrix): crafted formatted_body stalls the Gateway in the mention check
- [#170434](https://github.com/openclaw/openclaw/pull/170434) fix(ui): chat search misses formatted text and never marks matches
- [#189775](https://github.com/openclaw/openclaw/pull/189775) refactor(ci): consolidate Linux release bootstrap mappings
- [#189813](https://github.com/openclaw/openclaw/pull/189813) fix(daemon): preserve trailing backslashes in Windows launcher arguments
- [#189811](https://github.com/openclaw/openclaw/pull/189811) docs(linux): explain Pi companion rendering and memory options
- [#189724](https://github.com/openclaw/openclaw/pull/189724) refactor(ci): share mobile Gateway preparation
- [#189804](https://github.com/openclaw/openclaw/pull/189804) fix(chat): bound Markdown parsing for large previews
- [#189766](https://github.com/openclaw/openclaw/pull/189766) perf(scripts): avoid duplicate generated output reads
- [#189796](https://github.com/openclaw/openclaw/pull/189796) fix: reduce repeated history hashing in Responses requests
- [#188896](https://github.com/openclaw/openclaw/pull/188896) perf(ui): retain mobile Settings presentation and defer gallery tooltips
- [#189763](https://github.com/openclaw/openclaw/pull/189763) perf(test): reuse isolated workflow binding seed
- [#189795](https://github.com/openclaw/openclaw/pull/189795) test(ui): accept combined catalog hovercard context
- [#189779](https://github.com/openclaw/openclaw/pull/189779) fix(diagnostics): avoid per-task stall monitor allocations
- [#189757](https://github.com/openclaw/openclaw/pull/189757) refactor(test): share assertion fixture JSON writers
- [#189785](https://github.com/openclaw/openclaw/pull/189785) chore(ui): refresh control ui locales
- [#189640](https://github.com/openclaw/openclaw/pull/189640) improve(ui): standardize dialog, sheet, toast and banner surfaces
- [#189794](https://github.com/openclaw/openclaw/pull/189794) fix(ci): align sidebar stress geometry with compact rows
- [#189721](https://github.com/openclaw/openclaw/pull/189721) fix(control-ui): keep resolved session-link titles in cached transcripts
- [#189698](https://github.com/openclaw/openclaw/pull/189698) refactor(pdf): reuse selected pages during extraction
- [#189627](https://github.com/openclaw/openclaw/pull/189627) improve(ui): standardize list rows on shared tokens
- [#189725](https://github.com/openclaw/openclaw/pull/189725) perf(ui): defer closed agent selector work
- [#189773](https://github.com/openclaw/openclaw/pull/189773) test(i18n): include Catalan in finalizer request proof
- [#189750](https://github.com/openclaw/openclaw/pull/189750) refactor(ci): centralize joined worker invocations
- [#179799](https://github.com/openclaw/openclaw/pull/179799) fix(control-ui): recover settings-held messages after a reconnect interrupts Send
- [#189783](https://github.com/openclaw/openclaw/pull/189783) fix(feishu): avoid repeated card replies after Gateway restarts
- [#189019](https://github.com/openclaw/openclaw/pull/189019) feat(workers): bind cleanup to recorded cloud resources
- [#189781](https://github.com/openclaw/openclaw/pull/189781) fix(fal): reject generated media downloads containing error documents
- [#189772](https://github.com/openclaw/openclaw/pull/189772) test(update): complete recovery disk usage capture fixtures
- [#189739](https://github.com/openclaw/openclaw/pull/189739) refactor(test): share Windows lookup environment scopes
- [#189743](https://github.com/openclaw/openclaw/pull/189743) test(skills): consolidate project skill picker test fixtures
- [#189745](https://github.com/openclaw/openclaw/pull/189745) refactor(vydra): check speech readiness from credentials
- [#189686](https://github.com/openclaw/openclaw/pull/189686) docs(openai): explain existing safety identifier passthrough
- [#189770](https://github.com/openclaw/openclaw/pull/189770) fix(plugins): remove test-only snapshot publisher
- [#189755](https://github.com/openclaw/openclaw/pull/189755) refactor(ci): share QA workflow bootstrap mappings
- [#189768](https://github.com/openclaw/openclaw/pull/189768) fix(state): isolate readonly operation lifecycle policy
- [#189738](https://github.com/openclaw/openclaw/pull/189738) fix(ui): preserve warm-start catalog write deadlines
- [#189747](https://github.com/openclaw/openclaw/pull/189747) fix(ui): phone account menu truncates Help, blanks the avatar and scrolls
- [#189255](https://github.com/openclaw/openclaw/pull/189255) fix: user code blocks now get syntax colors like assistant messages
- [#189704](https://github.com/openclaw/openclaw/pull/189704) fix(update): hand foreground Gateway recovery back to systemd
- [#180200](https://github.com/openclaw/openclaw/pull/180200) fix(github): open reconnect flow from active sessions
- [#188616](https://github.com/openclaw/openclaw/pull/188616) fix(browser): first browser call fails when an attachOnly CDP browser starts on demand
- [#189696](https://github.com/openclaw/openclaw/pull/189696) fix(test): unblock offline reload and retain automation row contract
- [#189758](https://github.com/openclaw/openclaw/pull/189758) fix(scripts): explain recovery when boundary preparation fails
- [#189741](https://github.com/openclaw/openclaw/pull/189741) fix(agents): avoid Gateway stalls during repository discovery
- [#189761](https://github.com/openclaw/openclaw/pull/189761) feat(cli): accept bounded stdin model prompts
- [#189706](https://github.com/openclaw/openclaw/pull/189706) perf(ci): skip standalone helper tests in Darwin wrapper job
- [#189630](https://github.com/openclaw/openclaw/pull/189630) improve(ui): simplify the session hovercard
- [#189744](https://github.com/openclaw/openclaw/pull/189744) fix: finish embedded Gateway cleanup after Talk timeout
- [#189699](https://github.com/openclaw/openclaw/pull/189699) refactor(test): share fixture readiness settlement policy
- [#189714](https://github.com/openclaw/openclaw/pull/189714) fix(web-fetch): article links stay relative on pages with a <base> tag
- [#189742](https://github.com/openclaw/openclaw/pull/189742) fix(process): use measured agent exec IO ceiling
- [#189670](https://github.com/openclaw/openclaw/pull/189670) perf(ui): retain model catalogs across UI-only config changes
- [#180183](https://github.com/openclaw/openclaw/pull/180183) fix(ci): mark pending security reviews
- [#189713](https://github.com/openclaw/openclaw/pull/189713) fix(update): failed updates from 10.7–10.9 crash in automatic migration recovery
- [#189552](https://github.com/openclaw/openclaw/pull/189552) refactor(video): classify polling responses once
- [#189677](https://github.com/openclaw/openclaw/pull/189677) refactor(openrouter): prepare image batch inputs once
- [#189660](https://github.com/openclaw/openclaw/pull/189660) improve(ui): show only the icon for session row pull requests
- [#189691](https://github.com/openclaw/openclaw/pull/189691) fix(bench): measure pre-rename catalog navigation
- [#189674](https://github.com/openclaw/openclaw/pull/189674) fix(test): keep fixture archives free of native metadata
- [#189717](https://github.com/openclaw/openclaw/pull/189717) fix(memory-wiki): wiki reads report a continuation page past the last line
- [#189549](https://github.com/openclaw/openclaw/pull/189549) improve(ui): quiet the mobile Details sheet rows and groups
- [#189736](https://github.com/openclaw/openclaw/pull/189736) test(ui): measure visible rich content in wire benchmarks
- [#188708](https://github.com/openclaw/openclaw/pull/188708) fix: gateway auth-token --show is slow and creates state on a fresh install
- [#188817](https://github.com/openclaw/openclaw/pull/188817) fix: stop GitHub publication from delaying cloud workspace settlement
- [#189737](https://github.com/openclaw/openclaw/pull/189737) fix(openai): narrow Decision runtime imports
- [#187991](https://github.com/openclaw/openclaw/pull/187991) fix(release): enable OIDC recovery preflight
- [#186619](https://github.com/openclaw/openclaw/pull/186619) fix(sessions): recover proven withdrawn steers as followups
- [#189731](https://github.com/openclaw/openclaw/pull/189731) fix(test): isolate newline declaration loading
- [#189722](https://github.com/openclaw/openclaw/pull/189722) fix(state): retire startup metadata readers before gateway admission
- [#189621](https://github.com/openclaw/openclaw/pull/189621) perf(agents): avoid saved snapshots in prompt preparation
- [#189611](https://github.com/openclaw/openclaw/pull/189611) perf(agents): reduce Responses SSE forwarding allocations
- [#189708](https://github.com/openclaw/openclaw/pull/189708) feat(i18n): add Catalan Control UI locale
- [#189720](https://github.com/openclaw/openclaw/pull/189720) docs(release): tighten deterministic failure triage
- [#189679](https://github.com/openclaw/openclaw/pull/189679) fix(ui): update sidebar route labels when the language changes
- [#189689](https://github.com/openclaw/openclaw/pull/189689) refactor(test): share mobile version fixture writers
- [#189730](https://github.com/openclaw/openclaw/pull/189730) fix: align Details e2e with separate Review patch reads
- [#189705](https://github.com/openclaw/openclaw/pull/189705) feat(diagnostics): attribute slow waits to their holders
- [#189560](https://github.com/openclaw/openclaw/pull/189560) fix(workspace): interrupted refresh_base permanently wedges the session sandbox workspace
- [#189629](https://github.com/openclaw/openclaw/pull/189629) improve: reduce memory-monitoring overhead for concurrent commands
- [#189573](https://github.com/openclaw/openclaw/pull/189573) improve(ui): move card search into the header
- [#189712](https://github.com/openclaw/openclaw/pull/189712) fix(release): retry compatibility tarball downloads
- [#189566](https://github.com/openclaw/openclaw/pull/189566) perf(test): batch initial extension selection staging
- [#189624](https://github.com/openclaw/openclaw/pull/189624) feat(plugins): publish installed source snapshots
- [#189723](https://github.com/openclaw/openclaw/pull/189723) fix: align cloud disk badge checks with native tooltip
- [#189657](https://github.com/openclaw/openclaw/pull/189657) fix(update): stale recovery captures have no cleanup path
- [#189709](https://github.com/openclaw/openclaw/pull/189709) fix(whatsapp): resume reconnect when last-route writes stall
- [#189716](https://github.com/openclaw/openclaw/pull/189716) fix(agents): skip credential retries for missing models
- [#189707](https://github.com/openclaw/openclaw/pull/189707) fix(test): isolate CLI exit fixture state
- [#188677](https://github.com/openclaw/openclaw/pull/188677) fix(models): show CLI sign-in scope note only on shared Gateways
- [#189690](https://github.com/openclaw/openclaw/pull/189690) fix(oc-path): frontmatter union queries return no matches
- [#189682](https://github.com/openclaw/openclaw/pull/189682) perf(ui): avoid redundant Current Work fallback lists
- [#189684](https://github.com/openclaw/openclaw/pull/189684) fix: bound Talk cleanup during Gateway shutdown
- [#189719](https://github.com/openclaw/openclaw/pull/189719) chore(ui): refresh control ui locales
- [#189561](https://github.com/openclaw/openclaw/pull/189561) perf(test): bound UI execution fixture copies
- [#189700](https://github.com/openclaw/openclaw/pull/189700) test(update): isolate denied native handoff identity
- [#172571](https://github.com/openclaw/openclaw/pull/172571) fix(ui): keep earlier runs' replies visible after subagent completions
- [#189654](https://github.com/openclaw/openclaw/pull/189654) refactor(microsoft): use scoped speech workspace cleanup

#### 🐛 New Issues
- [#189676](https://github.com/openclaw/openclaw/issues/189676) [Bug]: a failed `openclaw update` can leave a gateway running outside its systemd unit, so the unit exits 78 ("Another gateway … already owns this state directory") while recovery reports restart-unhealthy `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬4
- [#189462](https://github.com/openclaw/openclaw/issues/189462) [Bug]: Browser Talk cannot recover later typed messages, including after restarting voice `bug` `P2` `clawsweeper:needs-live-repro` `impact:session-state` 💬4
- [#189778](https://github.com/openclaw/openclaw/issues/189778) Update failure: gateway-recovery-verification (2026.10.9) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬3
- [#189643](https://github.com/openclaw/openclaw/issues/189643) Update failure: git-clone (2026.10.4) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬3
- [#189642](https://github.com/openclaw/openclaw/issues/189642) [Bug]: update status lists stale recovery sets as "ambiguous" with no way to resolve them, and `update cleanup` does not see them `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬3
- [#189620](https://github.com/openclaw/openclaw/issues/189620) Update failure: gateway-recovery-verification (2026.10.9) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬3
- [#189519](https://github.com/openclaw/openclaw/issues/189519) Inter-session message delivery: bodies lost on re-projection, empty duplicate envelopes, occasional misrouting to the wrong session `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬3
- [#189414](https://github.com/openclaw/openclaw/issues/189414) Update failure: reconcile:abandoned (2026.10.9) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬3
- [#189923](https://github.com/openclaw/openclaw/issues/189923) [Bug]: `openclaw path set --value-json` is silently ignored for YAML and Markdown files, writing the JSON text as a string `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#189921](https://github.com/openclaw/openclaw/issues/189921) Update failure: requested (2026.9.5) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#189814](https://github.com/openclaw/openclaw/issues/189814) Update failure: package-install-omit-optional (2026.10.5) `P2` `impact:ux-friction` 💬2
- [#189752](https://github.com/openclaw/openclaw/issues/189752) [Bug]: In-flight attempt keeps its captured tool allow/deny policy after hot reload (tool-name counterpart of #103900) `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#189735](https://github.com/openclaw/openclaw/issues/189735) `skills.status` (and cron turns) fail with "Skills discovery was retired before publication" when a config write commits mid-read `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#189615](https://github.com/openclaw/openclaw/issues/189615) Update failure: gateway-recovery-verification (2026.10.7) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬2
- [#189579](https://github.com/openclaw/openclaw/issues/189579) [Bug]: Failed plugin replacement leaves reply dispatch runtime unpublished — Telegram updates dead-lettered, Talk Mode dead until restart `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬2
- [#189577](https://github.com/openclaw/openclaw/issues/189577) [Bug]: Legacy tool results without an id are replayed as failures after the pairing repair `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#189380](https://github.com/openclaw/openclaw/issues/189380) [Bug]: claude-cli backend drops node-hosted skills (node:// locator fails existsSync) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#189505](https://github.com/openclaw/openclaw/issues/189505) Update failure: node-runtime-preflight (2026.9.4) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#189440](https://github.com/openclaw/openclaw/issues/189440) [Bug]: read rejects `optional: false` ("optional: must be equal to constant") `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#189432](https://github.com/openclaw/openclaw/issues/189432) iOS new conversation unexpectedly nested under unrelated session; PWA disclosure hides it and no detach action `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#189225](https://github.com/openclaw/openclaw/issues/189225) doctor --fix: plugin lifecycle lease expires during Codex "native pending assignment repair" on 2026.10.9, all later checks fail `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬2
- [#189048](https://github.com/openclaw/openclaw/issues/189048) [Bug]: Update preflight fails on Homebrew Node 26.8.2 even when Gateway runs on valid Node 24.22.1 `bug` `regression` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬2
- [#189947](https://github.com/openclaw/openclaw/issues/189947) [Bug]: Failure alerts for delivery.target "owner" automations resolve the session's last route instead of the owner DM `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#189332](https://github.com/openclaw/openclaw/issues/189332) [Bug]: exec (zsh) — heredoc on non-first pipeline stage receives upstream pipe output ⊕ heredoc body instead of overriding the pipe → false "Exec failed" NameError alerts `P3` `impact:ux-friction` 💬1
- [#189354](https://github.com/openclaw/openclaw/issues/189354) [Feature]: Search and send native Zalo stickers through the existing zalouser channel `P3` `clawsweeper:bulk-filed` 💬1
- [#189914](https://github.com/openclaw/openclaw/issues/189914) fix(memory): configured extraPaths roots are trimmed, collapsing distinct literal directories `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#189911](https://github.com/openclaw/openclaw/issues/189911) [Feature]: Let config set model order within a provider in the model pickers `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#189908](https://github.com/openclaw/openclaw/issues/189908) [Bug]: Migrated heartbeat automation on an explicitly set codex runtime is refused with "no recorded inference account"; the suggested openclaw doctor --fix leaves it unchanged `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#189866](https://github.com/openclaw/openclaw/issues/189866) [Bug]: oc-path normalizes Unicode addresses and can edit the wrong key `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#189835](https://github.com/openclaw/openclaw/issues/189835) [Bug]: `openclaw path set` silently edits a shadowed duplicate key in JSON/JSONL, so the effective value never changes `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#189873](https://github.com/openclaw/openclaw/issues/189873) fix: provide Files navigation from unavailable desktop previews `bug` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#189890](https://github.com/openclaw/openclaw/issues/189890) [Bug] sessions delete leaves context_engine_turn_outbox rows that retry forever (no purge, no cap, log churn) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#189845](https://github.com/openclaw/openclaw/issues/189845) [Bug]: Queued messages can send while their inline edit is open `bug` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬1
- [#189886](https://github.com/openclaw/openclaw/issues/189886) Support plugin input rewrites for Codex-native tools `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#189878](https://github.com/openclaw/openclaw/issues/189878) [Feature]: Telegram live preview for non-inbound turns (automations, sessions_send, agent --deliver) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#189774](https://github.com/openclaw/openclaw/issues/189774) [Bug]: oc-path YAML resolve/find/set report "not found" for values reached through aliases (*anchor) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#189839](https://github.com/openclaw/openclaw/issues/189839) Control UI/ClawHub page: icon proxying + fetch timeouts block gateway event-loop, UI disconnects `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬1
- [#189823](https://github.com/openclaw/openclaw/issues/189823) [Bug]: Parent sessions miss child approvals when session.store is customized `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#189815](https://github.com/openclaw/openclaw/issues/189815) [Feature]: WhatsApp progress drafts, starting with an edit action for own messages `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#189806](https://github.com/openclaw/openclaw/issues/189806) [Bug]: macOS app-hosted Gateway (Bun) footprint grows ~0.5 GB/day until the host swaps (2026.10.8) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬1
- [#189254](https://github.com/openclaw/openclaw/issues/189254) Own code blocks render as plain text while assistant code blocks get syntax colors `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#189765](https://github.com/openclaw/openclaw/issues/189765) [Bug]: Telegram final/preview and native-command replies emit no 'outbound send ok' log line `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#189764](https://github.com/openclaw/openclaw/issues/189764) [Bug]: Control UI: after Stop (chat.abort) the session's send queue stays paused on an unconfirmed message — new sends never reach the gateway and reload does not recover `P1` `impact:message-loss` 💬1
- [#189759](https://github.com/openclaw/openclaw/issues/189759) [Bug]: 2026.10.9 - outbound media outside workspace rejected from claude-cli runtime although tools.fs.workspaceOnly is unset `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#189733](https://github.com/openclaw/openclaw/issues/189733) [Feature]: Setting to silence or digest Skill Workshop "Learned" chat notices without disabling learning `P3` `impact:ux-friction` 💬1
- [#189081](https://github.com/openclaw/openclaw/issues/189081) Decision contracts: separate portable data from host execution ownership `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#189649](https://github.com/openclaw/openclaw/issues/189649) [Bug]: Telegram slash commands typed by a linked operator never receive plugin runtime capabilities `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#189648](https://github.com/openclaw/openclaw/issues/189648) [Bug]: Configured context engine is silently dropped from Codex app-server attempts when the model is native-model-owned (2026.9.36) `P2` `impact:session-state` 💬1
- [#189637](https://github.com/openclaw/openclaw/issues/189637) Audit npm-to-Git plugin cohort successor identity after activation `P2` `issue-rating: 🦪 silver shellfish` 💬1
- [#189635](https://github.com/openclaw/openclaw/issues/189635) Parallels Windows packed install does not prepare fresh-shell CLI PATH `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#189636](https://github.com/openclaw/openclaw/issues/189636) Windows Parallels source-update phase caps can preempt the CLI timeout `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#189585](https://github.com/openclaw/openclaw/issues/189585) Interrupted package-to-Git updates cannot repair plugin cohort ownership `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#189456](https://github.com/openclaw/openclaw/issues/189456) Git updates run declaration builds despite runtime-only default `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `maturity:stable` 💬1
- [#189575](https://github.com/openclaw/openclaw/issues/189575) [Bug]: image quality is ignored when generating with xAI image 2.0 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#189567](https://github.com/openclaw/openclaw/issues/189567) [Bug]: Control UI session pin state is force-reverted by projection refresh - manual unpin does not stick `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#189551](https://github.com/openclaw/openclaw/issues/189551) Update failure: global-install-foreign-destination (2026.9.6) `P2` `impact:ux-friction` 💬1
- [#189501](https://github.com/openclaw/openclaw/issues/189501) Simplify duplicate core weak-owner allocation `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#189542](https://github.com/openclaw/openclaw/issues/189542) [Bug]: Android Talk shows the MEDIA: file path instead of the image when agent-consult returns media `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#189527](https://github.com/openclaw/openclaw/issues/189527) Supported interface for complete original ACP tool-result retrieval `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#189517](https://github.com/openclaw/openclaw/issues/189517) [Bug]: Search boxes outside Sessions and Files still miss Greek sigma variants `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#189508](https://github.com/openclaw/openclaw/issues/189508) Session observer assessments stop when Codex model discovery takes five seconds `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#189511](https://github.com/openclaw/openclaw/issues/189511) Update failure: node-runtime-preflight (2026.9.5) 💬1
- [#189490](https://github.com/openclaw/openclaw/issues/189490) Talk realtime consults ignore `agentRuntime: claude-cli` and require an Anthropic API key `P1` `impact:auth-provider` 💬1
- [#189488](https://github.com/openclaw/openclaw/issues/189488) [Bug]: Tool Search replaces host-gated refusals with a schema-mismatch error `P2` `impact:ux-friction` 💬1
- [#189479](https://github.com/openclaw/openclaw/issues/189479) [Bug]: macOS gateway discovery truncates TXT values containing spaces (displayName shows "Peter’s\") `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#189459](https://github.com/openclaw/openclaw/issues/189459) Simplify duplicated Gateway weak-owner map allocation `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#189368](https://github.com/openclaw/openclaw/issues/189368) [Bug]: Plugin command suppressReply is ignored outside Telegram and Discord native commands `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#189464](https://github.com/openclaw/openclaw/issues/189464) Slack exec approvals fail on non-Enterprise workspaces: missing_enterprise_slack_write_client `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#189447](https://github.com/openclaw/openclaw/issues/189447) Memory search: first search after a chunking-version bump rebuilds inline and times out instead of serving keyword results `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#189442](https://github.com/openclaw/openclaw/issues/189442) Google Chat: Drive-link attachments reach the agent without file name or Drive file ID `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#189433](https://github.com/openclaw/openclaw/issues/189433) Android/Termux: transcript archive publish fails on `link()` (EACCES), and pending exports block every inbound message to the agent `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#189434](https://github.com/openclaw/openclaw/issues/189434) Setting to remove "allow-always" from exec approvals while keeping allowlist auto-approval and `ask: "on-miss"` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#189367](https://github.com/openclaw/openclaw/issues/189367) [Bug]: A plugin command that returns continueAgent runs three times on a native command turn `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#189410](https://github.com/openclaw/openclaw/issues/189410) Ingress pre-adoption abandonment ignores retry exhaustion; fix needs cancellation propagation through reply binding `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#189387](https://github.com/openclaw/openclaw/issues/189387) fix: explain sandbox file-read denials with attachment handoff guidance `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#189398](https://github.com/openclaw/openclaw/issues/189398) [Bug]: Failed runs on legacy sessions hide the provider safety-precaution notice `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#189396](https://github.com/openclaw/openclaw/issues/189396) [Feature]: Cover the legacy session recovery contracts with tests `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#189376](https://github.com/openclaw/openclaw/issues/189376) Subagent Stop from a source's own cleanup waits out the 15s drain deadline and reports success `P2` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬1
- [#189317](https://github.com/openclaw/openclaw/issues/189317) fix: spawn boundary fixture lacks Gateway SDK resource hosts `bug` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#189181](https://github.com/openclaw/openclaw/issues/189181) claude-cli: turns answered by a fallback model or another runtime (or aborted) are invisible to the resumed Claude session, and Claude Code's synthetic resume rows render as replies `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#189309](https://github.com/openclaw/openclaw/issues/189309) [Feature]: iOS app: allow zoom of inline images in chat `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#189292](https://github.com/openclaw/openclaw/issues/189292) Update failure: package-install-omit-optional (2026.9.7) `P2` `impact:ux-friction` 💬1
- [#189282](https://github.com/openclaw/openclaw/issues/189282) docs: Public access guidance incorrectly excludes images and widgets `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#189286](https://github.com/openclaw/openclaw/issues/189286) Inbound messages in the debounce buffer are lost on in-process reload (SIGUSR2) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬1
- [#189221](https://github.com/openclaw/openclaw/issues/189221) [Bug]: Review cannot open a known changed file omitted by the file limit `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#189145](https://github.com/openclaw/openclaw/issues/189145) [Bug]: Cron script sessions_send requester receives a detached peer reply in :trigger `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#189219](https://github.com/openclaw/openclaw/issues/189219) Remote Control UI ingress: let an operator allow person grants on a non-Cloudflare trusted proxy `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#189216](https://github.com/openclaw/openclaw/issues/189216) [Bug]: agents.defaults.timeoutSeconds default of 300s truncates long tool-running turns `bug` `bug:behavior` `P2` `impact:ux-friction` 💬1
- [#189214](https://github.com/openclaw/openclaw/issues/189214) claude-cli: availability probe kills `claude auth status` mid token refresh, orphaning Claude Code's OAuth refresh lock (first turn after idle fails) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` 💬1
- [#189201](https://github.com/openclaw/openclaw/issues/189201) Refactor duplicate live runtime config selectors `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#189174](https://github.com/openclaw/openclaw/issues/189174) Share lifecycle conflict classification for session cleanup `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#189206](https://github.com/openclaw/openclaw/issues/189206) [Bug]: Stale CLI device token cannot be cleared — self-rotation returns withheld-cross-device, revoke/remove/doctor --fix all fail to break the loop `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#189178](https://github.com/openclaw/openclaw/issues/189178) Session SQLite migration recovery report (session-sqlite-1793347595202-896c14d0) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#189126](https://github.com/openclaw/openclaw/issues/189126) refactor(diagnostics): consolidate trace context normalization `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#189159](https://github.com/openclaw/openclaw/issues/189159) Collector group sweep races agent startup: sessions.delete fails with 'Agent main has not completed startup inspection and preparation' `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#189084](https://github.com/openclaw/openclaw/issues/189084) fix: Sessions search misses Greek sigma variants in saved titles `bug` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#189120](https://github.com/openclaw/openclaw/issues/189120) [Bug]: Labeler writes an already-correct size label `bug` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#189139](https://github.com/openclaw/openclaw/issues/189139) [Bug]: models.dev merge keeps cost in snake_case (cache_read/cache_write) → catalog schema rejects models.dev-sourced entries (zai: 18/18 invalid) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` 💬1
- [#189136](https://github.com/openclaw/openclaw/issues/189136) Support Qoder models in native chat `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#189134](https://github.com/openclaw/openclaw/issues/189134) Support Grok Build models in native chat `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#189085](https://github.com/openclaw/openclaw/issues/189085) [Bug]: Files search misses Greek final sigma in saved paths `bug` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#189086](https://github.com/openclaw/openclaw/issues/189086) refactor(media): flatten Markdown image output projection `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#189087](https://github.com/openclaw/openclaw/issues/189087) [Bug]: Knowledge cannot provision stores on Windows (directory fsync EPERM) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#189070](https://github.com/openclaw/openclaw/issues/189070) [Bug]: Android realtime Talk claims task completion after agent-consult runs are cancelled `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#189067](https://github.com/openclaw/openclaw/issues/189067) [Feature]: List ClawHub provider plugins under "Community tools" in the provider directory `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#189041](https://github.com/openclaw/openclaw/issues/189041) TTS results discard structured provider failure details `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#189042](https://github.com/openclaw/openclaw/issues/189042) Realtime STT failures lose provider and connection close codes `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#188954](https://github.com/openclaw/openclaw/issues/188954) [Bug]: sessions.search on PostgreSQL falls back to scanning every transcript row after the 5th search on a connection (prepared-statement generic plan) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#189012](https://github.com/openclaw/openclaw/issues/189012) [Bug]: GPT-Live phone replies retain startup audio delay `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#188993](https://github.com/openclaw/openclaw/issues/188993) [Feature]: preserve original recording dates on transcript imports `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#188992](https://github.com/openclaw/openclaw/issues/188992) Update failure: managed-service-update-handoff (2026.9.9) `P0` `impact:ux-release-blocker` 💬1
- [#188984](https://github.com/openclaw/openclaw/issues/188984) Intentional NO_REPLY on an unmentioned group turn surfaces "Agent couldn't generate a response" because the reply expectation resolves to "required" (2026.10.5/2026.10.9) `P2` `impact:ux-friction` 💬1
- [#188956](https://github.com/openclaw/openclaw/issues/188956) [Feature]: chat.history on PostgreSQL holds one of two history workers blocked on ~13 synchronous round trips per call, which drives the tail under concurrency `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` 💬1
- [#188953](https://github.com/openclaw/openclaw/issues/188953) [Bug]: `openclaw wiki` commands ignore agents.defaults.systemAgent and fail without --agent on explicit-ownership multi-agent configs `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#189957](https://github.com/openclaw/openclaw/issues/189957) [Bug]: `openclaw path find 'oc://x.jsonl/**/key'` returns no matches for keys nested inside JSONL line values
- [#189955](https://github.com/openclaw/openclaw/issues/189955) [Bug]: memory-lancedb auto-capture stores OpenClaw's own [System] retry turn as a user memory

#### 🔒 Closed Issues
- [#184658](https://github.com/openclaw/openclaw/issues/184658) [Bug]: Windows npm update reports missing-module cleanup failures after successful package swap
- [#154252](https://github.com/openclaw/openclaw/issues/154252) [Bug]: requester settle-wake attempt exhaustion is unreachable for a batch stuck in dispatching
- [#136284](https://github.com/openclaw/openclaw/issues/136284) [Bug]: legacy .tmp-<uuid> memory-core shadow reindex files leak forever, invisible to the age-gated cleanup sweep
- [#166482](https://github.com/openclaw/openclaw/issues/166482) [Bug]: Telegram agent repeats completed task close-outs across subsequent turns
- [#164585](https://github.com/openclaw/openclaw/issues/164585) [Bug]: Web Push "Agent finished" fires while the same conversation is open and visible on the device
- [#116360](https://github.com/openclaw/openclaw/issues/116360) [Feature]: no event for workboard card status changes - hook bus has no workboard events, notification kinds limited to completed|failed|stale
- [#167415](https://github.com/openclaw/openclaw/issues/167415) [Bug]: sidebar rows: expand/open and one-click Archive swap the same spot across hover states; overclick archives the session
- [#129327](https://github.com/openclaw/openclaw/issues/129327) [Feature]: Proactive quota/usage threshold alerts at 80/85/90/95% before exhaustion
- [#133956](https://github.com/openclaw/openclaw/issues/133956) session.members.add accepts channel-scoped actor ids that can never match a viewer
- [#183036](https://github.com/openclaw/openclaw/issues/183036) Gateway startup: ~40 s main-thread agent-DB reservations (1 direct + 3 worker) per boot since 2026.10.5 (ready 105 s → 150 s), still on 2026.10.7
- [#138247](https://github.com/openclaw/openclaw/issues/138247) [Feature]: search tool results in session transcripts
- [#161226](https://github.com/openclaw/openclaw/issues/161226) Control UI model picker drops active context budget without session metadata (272k vs 872k)
- [#138251](https://github.com/openclaw/openclaw/issues/138251) [Bug]: Channel /reset drops custom session icon despite #126575
- [#139031](https://github.com/openclaw/openclaw/issues/139031) [Feature]: Add Catalan (ca) language support to Control UI
- [#188741](https://github.com/openclaw/openclaw/issues/188741) [Bug]: Matrix final reply is dropped after a 60s send stall, with no retry and no user-visible feedback
- [#184480](https://github.com/openclaw/openclaw/issues/184480) [Bug]: Windows: `openclaw update` freezes in `validating` (2026.10.5 → 2026.10.7) and leaves the run `running`, blocking later updates and `doctor --fix`
- [#128719](https://github.com/openclaw/openclaw/issues/128719) [Bug]: /codex bind self-blocks on the current session's active command run
- [#131558](https://github.com/openclaw/openclaw/issues/131558) [Feature]: Add title and URL filters to browser tabs
- [#167778](https://github.com/openclaw/openclaw/issues/167778) Service-definition reconciliation reports permanent `unknown-edit` drift for fields that Windows Task Scheduler itself forces/canonicalizes (`UseUnifiedSchedulingEngine`, `LogonTrigger/UserId`)
- [#180179](https://github.com/openclaw/openclaw/issues/180179) [Feature]: Give Mattermost a dedicated channel-detail presentation in the Control UI
- [#180178](https://github.com/openclaw/openclaw/issues/180178) [Feature]: Give Matrix a dedicated channel-detail presentation in the Control UI
- [#180244](https://github.com/openclaw/openclaw/issues/180244) [Feature]: Show approval scope (blast radius) in approval history
- [#181158](https://github.com/openclaw/openclaw/issues/181158) [Feature]: Add a bundled-only skill filter to openclaw skills list
- [#189642](https://github.com/openclaw/openclaw/issues/189642) [Bug]: update status lists stale recovery sets as "ambiguous" with no way to resolve them, and `update cleanup` does not see them
- [#189620](https://github.com/openclaw/openclaw/issues/189620) Update failure: gateway-recovery-verification (2026.10.9)
- [#173412](https://github.com/openclaw/openclaw/issues/173412) Restart recovery archives the agent main session and its rollover; /reset, sessions.reset and "Resume in new session" all fail
- [#185272](https://github.com/openclaw/openclaw/issues/185272) [Bug]: TypeSafe transport normalizer redirects OpenRouter requests to api.typesafe.ai, causing 404
- [#136358](https://github.com/openclaw/openclaw/issues/136358) [Feature]: honor sessions_spawn runTimeoutSeconds above 295s in the gateway launch budget
- [#176472](https://github.com/openclaw/openclaw/issues/176472) [Bug]: Windows task script parser drops empty quoted arguments that quoteCmdScriptArg writes
- [#162072](https://github.com/openclaw/openclaw/issues/162072) [Bug]: ACP runtime sessions show no live streaming in webchat; "Terminal write owner changed before commit" logged on every ACP turn completion
- [#189923](https://github.com/openclaw/openclaw/issues/189923) [Bug]: `openclaw path set --value-json` is silently ignored for YAML and Markdown files, writing the JSON text as a string
- [#142718](https://github.com/openclaw/openclaw/issues/142718) [Bug]: registerGatewayMethod return-value support is still rejected by the exported handler type
- [#189814](https://github.com/openclaw/openclaw/issues/189814) Update failure: package-install-omit-optional (2026.10.5)
- [#189577](https://github.com/openclaw/openclaw/issues/189577) [Bug]: Legacy tool results without an id are replayed as failures after the pairing repair
- [#189380](https://github.com/openclaw/openclaw/issues/189380) [Bug]: claude-cli backend drops node-hosted skills (node:// locator fails existsSync)
- [#188845](https://github.com/openclaw/openclaw/issues/188845) doctor --fix re-enables a plugin with a mixed-case id after `openclaw plugins disable`
- [#181950](https://github.com/openclaw/openclaw/issues/181950) [Bug]: onepassword SecretRef resolver cannot import `openclaw/plugin-sdk` in the official Docker image (ERR_MODULE_NOT_FOUND)
- [#182058](https://github.com/openclaw/openclaw/issues/182058) chat.history reports the global verboseDefault instead of the session agent's own verboseDefault
- [#189225](https://github.com/openclaw/openclaw/issues/189225) doctor --fix: plugin lifecycle lease expires during Codex "native pending assignment repair" on 2026.10.9, all later checks fail
- [#176224](https://github.com/openclaw/openclaw/issues/176224) Matrix: new thread sessions inherit the room conversation; no thread.inheritParent like Discord/Slack
- [#189048](https://github.com/openclaw/openclaw/issues/189048) [Bug]: Update preflight fails on Homebrew Node 26.8.2 even when Gateway runs on valid Node 24.22.1
- [#120558](https://github.com/openclaw/openclaw/issues/120558) Bug: /stop does not cancel detached Skill Workshop experience review
- [#133231](https://github.com/openclaw/openclaw/issues/133231) fix(normalization-core): stableStringify collapses Date, RegExp, Set, and Map instances to empty objects
- [#189866](https://github.com/openclaw/openclaw/issues/189866) [Bug]: oc-path normalizes Unicode addresses and can edit the wrong key
- [#189835](https://github.com/openclaw/openclaw/issues/189835) [Bug]: `openclaw path set` silently edits a shadowed duplicate key in JSON/JSONL, so the effective value never changes
- [#189873](https://github.com/openclaw/openclaw/issues/189873) fix: provide Files navigation from unavailable desktop previews
- [#189845](https://github.com/openclaw/openclaw/issues/189845) [Bug]: Queued messages can send while their inline edit is open
- [#189774](https://github.com/openclaw/openclaw/issues/189774) [Bug]: oc-path YAML resolve/find/set report "not found" for values reached through aliases (*anchor)
- [#189254](https://github.com/openclaw/openclaw/issues/189254) Own code blocks render as plain text while assistant code blocks get syntax colors
- [#187814](https://github.com/openclaw/openclaw/issues/187814) Browser attachOnly fails on first call when the CDP browser starts on demand
- [#189764](https://github.com/openclaw/openclaw/issues/189764) [Bug]: Control UI: after Stop (chat.abort) the session's send queue stays paused on an unconfirmed message — new sends never reach the gateway and reload does not recover
- [#188707](https://github.com/openclaw/openclaw/issues/188707) [Bug]: openclaw gateway auth-token --show takes 16–19 s on a loaded host
- [#184909](https://github.com/openclaw/openclaw/issues/184909) [Bug]: Interactive same-model retry after in-flight input ends in SQLite transcript rewrite conflict
- [#189733](https://github.com/openclaw/openclaw/issues/189733) [Feature]: Setting to silence or digest Skill Workshop "Learned" chat notices without disabling learning
- [#186921](https://github.com/openclaw/openclaw/issues/186921) [Feature]: Show the CLI provider sign-in scope note only on multi-user Gateways
- [#186949](https://github.com/openclaw/openclaw/issues/186949) [Bug]: Nix-mode config rejection skips Gateway refresh after credentials are saved
- [#187114](https://github.com/openclaw/openclaw/issues/187114) [Bug]: claude-cli conversations reset with reason=mcp after ToolSearch deferral (#186776)
- [#189648](https://github.com/openclaw/openclaw/issues/189648) [Bug]: Configured context engine is silently dropped from Codex app-server attempts when the model is native-model-owned (2026.9.36)
- [#189585](https://github.com/openclaw/openclaw/issues/189585) Interrupted package-to-Git updates cannot repair plugin cohort ownership
- [#189456](https://github.com/openclaw/openclaw/issues/189456) Git updates run declaration builds despite runtime-only default
- [#189551](https://github.com/openclaw/openclaw/issues/189551) Update failure: global-install-foreign-destination (2026.9.6)
- [#127268](https://github.com/openclaw/openclaw/issues/127268) [Bug]: OAuth callback pages claim completion before token exchange
- [#189501](https://github.com/openclaw/openclaw/issues/189501) Simplify duplicate core weak-owner allocation
- [#189511](https://github.com/openclaw/openclaw/issues/189511) Update failure: node-runtime-preflight (2026.9.5)
- [#189490](https://github.com/openclaw/openclaw/issues/189490) Talk realtime consults ignore `agentRuntime: claude-cli` and require an Anthropic API key
- [#189488](https://github.com/openclaw/openclaw/issues/189488) [Bug]: Tool Search replaces host-gated refusals with a schema-mismatch error
- [#189459](https://github.com/openclaw/openclaw/issues/189459) Simplify duplicated Gateway weak-owner map allocation
- [#189368](https://github.com/openclaw/openclaw/issues/189368) [Bug]: Plugin command suppressReply is ignored outside Telegram and Discord native commands
- [#189367](https://github.com/openclaw/openclaw/issues/189367) [Bug]: A plugin command that returns continueAgent runs three times on a native command turn
- [#189387](https://github.com/openclaw/openclaw/issues/189387) fix: explain sandbox file-read denials with attachment handoff guidance
- [#189317](https://github.com/openclaw/openclaw/issues/189317) fix: spawn boundary fixture lacks Gateway SDK resource hosts
- [#189181](https://github.com/openclaw/openclaw/issues/189181) claude-cli: turns answered by a fallback model or another runtime (or aborted) are invisible to the resumed Claude session, and Claude Code's synthetic resume rows render as replies
- [#189292](https://github.com/openclaw/openclaw/issues/189292) Update failure: package-install-omit-optional (2026.9.7)
- [#189282](https://github.com/openclaw/openclaw/issues/189282) docs: Public access guidance incorrectly excludes images and widgets
- [#185431](https://github.com/openclaw/openclaw/issues/185431) [Bug]: tools.exec.pathPrepend warning is missing from detached host=node exec results
- [#147815](https://github.com/openclaw/openclaw/issues/147815) [Bug]: Agent Skills: "No skills found" appears while skills are loading or the request has failed
- [#189145](https://github.com/openclaw/openclaw/issues/189145) [Bug]: Cron script sessions_send requester receives a detached peer reply in :trigger
- [#189216](https://github.com/openclaw/openclaw/issues/189216) [Bug]: agents.defaults.timeoutSeconds default of 300s truncates long tool-running turns
- [#189201](https://github.com/openclaw/openclaw/issues/189201) Refactor duplicate live runtime config selectors
- [#189174](https://github.com/openclaw/openclaw/issues/189174) Share lifecycle conflict classification for session cleanup
- [#181269](https://github.com/openclaw/openclaw/issues/181269) [Bug]: Discord realtime: every agent consult fails with "Gateway is temporarily unavailable" after talk_voice set changes the voice
- [#189126](https://github.com/openclaw/openclaw/issues/189126) refactor(diagnostics): consolidate trace context normalization
- [#189084](https://github.com/openclaw/openclaw/issues/189084) fix: Sessions search misses Greek sigma variants in saved titles
- [#189120](https://github.com/openclaw/openclaw/issues/189120) [Bug]: Labeler writes an already-correct size label
- [#189085](https://github.com/openclaw/openclaw/issues/189085) [Bug]: Files search misses Greek final sigma in saved paths
- [#188771](https://github.com/openclaw/openclaw/issues/188771) [Bug]: Cancelled workspace binding waits for unrelated session writes
- [#189086](https://github.com/openclaw/openclaw/issues/189086) refactor(media): flatten Markdown image output projection
- [#188923](https://github.com/openclaw/openclaw/issues/188923) Cancelling guest workspace preparation waits for reconciliation holder release
- [#188929](https://github.com/openclaw/openclaw/issues/188929) [Bug]: Codex trajectory omits conversation instructions injected by the inference relay
- [#180960](https://github.com/openclaw/openclaw/issues/180960) [Bug]: Discord disposable cache migration omits recovery inventory declaration
- [#188954](https://github.com/openclaw/openclaw/issues/188954) [Bug]: sessions.search on PostgreSQL falls back to scanning every transcript row after the 5th search on a connection (prepared-statement generic plan)
- [#188803](https://github.com/openclaw/openclaw/issues/188803) Code Mode: warnings from exec commands that finish quickly never reach the program
- [#188992](https://github.com/openclaw/openclaw/issues/188992) Update failure: managed-service-update-handoff (2026.9.9)
- [#188984](https://github.com/openclaw/openclaw/issues/188984) Intentional NO_REPLY on an unmentioned group turn surfaces "Agent couldn't generate a response" because the reply expectation resolves to "required" (2026.10.5/2026.10.9)
- [#129411](https://github.com/openclaw/openclaw/issues/129411) [Bug]: worktree sessions inject shared AGENTS.md bootstrap instead of worktree files
- [#188776](https://github.com/openclaw/openclaw/issues/188776) PR preparation hides native Git fetch timeout reasons
- [#188897](https://github.com/openclaw/openclaw/issues/188897) [Bug]: Update capture never seals on large state dirs — metadata inventory result exceeds the 1 MiB stdout cap

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 259,197 · **Open issues:** 52,224 · **Last push:** 1h ago

On November 1, 2026, there were no new releases or merged pull requests for Hermes Agent. However, the day saw the creation of several pressing issues, most notably the report of a significant incident tagged as Masked Destruction, where an auto-approval feature led to the removal of 188,303 files, freeing up 21.4 GiB of user data. Additionally, users raised concerns about the Android beta experiencing conversation scrolling stutters and issues with notifications not showing upon the completion of replies. Bugs related to mobile app functionality and configuration file handling were also reported, highlighting ongoing challenges in performance and user experience.

#### 🐛 New Issues
- [#147269](https://github.com/NousResearch/hermes-agent/issues/147269) Hermes Mobile Android beta is at the Firebase tester limit 💬6
- [#147321](https://github.com/NousResearch/hermes-agent/issues/147321) [Bug]: Android beta: conversation scrolling stutters and long streamed replies can't be scrolled into view 💬4
- [#147345](https://github.com/NousResearch/hermes-agent/issues/147345) [Bug]: Android beta shows thinking notification but no notification when final reply completes 💬2
- [#147373](https://github.com/NousResearch/hermes-agent/issues/147373) Masked Destruction: Hermes Agent’s Smart Approval Auto-Approved a PowerShell Command That Removed 188,303 Files and Freed 21.4 GiB of User Data `bug` 💬1
- [#147371](https://github.com/NousResearch/hermes-agent/issues/147371) [Bug][Mobile iOS beta] Filter options intermittently missing on startup (Webhook runs, Project) 💬1
- [#147366](https://github.com/NousResearch/hermes-agent/issues/147366) Kanban gateway shutdown consumes a task's failure budget 💬1
- [#147339](https://github.com/NousResearch/hermes-agent/issues/147339) [Bug]: Compaction can replay a completed request after an internal notification 💬1
- [#147346](https://github.com/NousResearch/hermes-agent/issues/147346) [Bug]: Telegram adapter fallback walk drops SEED_FALLBACK_IPS when DoH returns single IP; blackholed IP leaves no alternate route 💬1
- [#147342](https://github.com/NousResearch/hermes-agent/issues/147342) [Gateway] Duplicate Slack event → double admission: phantom "Queued for the next turn" ack + duplicate turn execution 💬1
- [#147361](https://github.com/NousResearch/hermes-agent/issues/147361) [Bug]: Mobile app chat WebSocket always 403 on a remote gateway Webapp (Origin-less subprotocol ticket rejected in run_api.py before the ticket gate) 💬1
- [#147350](https://github.com/NousResearch/hermes-agent/issues/147350) [Bug]: an empty or non-mapping config.yaml reads as {} — raw write-back overwrites the user's whole config with a stub 💬1
- [#147367](https://github.com/NousResearch/hermes-agent/issues/147367) Dashboard as launch profile: session delete (any mutation) on a non-launch profile returns 404 not_found 💬1
- [#147330](https://github.com/NousResearch/hermes-agent/issues/147330) tools: `handle_function_call` forwards `skip_pre_tool_call_hook=True` when unwrapping `tool_call` bridge invocations 💬1
- [#147323](https://github.com/NousResearch/hermes-agent/issues/147323) [Bug]: Android beta: app freezes, then crashes with OutOfMemoryError after about an hour of mixed use 💬1
- [#147387](https://github.com/NousResearch/hermes-agent/issues/147387) Gated dashboard middleware rejects Desktop token-mode credentials (X-Hermes-Session-Token header / ?token=) — Remote gateway connections fail on any auth-gated dashboard
- [#147385](https://github.com/NousResearch/hermes-agent/issues/147385) [Feature]: Desktop sidebar: make bot status clear at a glance
- [#147386](https://github.com/NousResearch/hermes-agent/issues/147386) [Bug]: Desktop: the divider line between a bot's processing and its response doesn't render (it shows on iOS) `bug`
- [#147384](https://github.com/NousResearch/hermes-agent/issues/147384) Memory plugin config_schema.py loaded standalone breaks relative imports (ModuleNotFoundError: _hermes_memory_config_schema)
- [#147383](https://github.com/NousResearch/hermes-agent/issues/147383) Memory provider stays 'activated' after initialize() fails — half-built provider crashes every hook for the process lifetime
- [#147379](https://github.com/NousResearch/hermes-agent/issues/147379) [Bug] Gateway delivery ledger: a failed mark_attempting leaves a delivered reply 'pending', so the next restart resends it with no duplicate marker
- [#147377](https://github.com/NousResearch/hermes-agent/issues/147377) [Bug]: Login-stamped legacy Bot Chat row (source 'tui') can't be adopted by any actor or displaced; message_agent gets not_found permanently `bug`
- [#147374](https://github.com/NousResearch/hermes-agent/issues/147374) ctx.register_skill() accepts a directory and only fails later, at skill_view() read time
- [#147368](https://github.com/NousResearch/hermes-agent/issues/147368) Desktop queued-busy-input admissions re-deliver after later turns; delivered messages sometimes never render
- [#147364](https://github.com/NousResearch/hermes-agent/issues/147364) Subdirectory AGENTS.md hint is re-sent on every turn after the agent is rebuilt
- [#147354](https://github.com/NousResearch/hermes-agent/issues/147354) [Bug][Desktop] Read-aloud stutters with command/file TTS providers — per-sentence speak-stream relay costs ~5.5 s dead air per sentence (Qwen3-TTS) `bug`
- [#147351](https://github.com/NousResearch/hermes-agent/issues/147351) [Feature]: file-browser rail should follow the session's working directory (web vs Desktop find the same file in different places)
- [#147344](https://github.com/NousResearch/hermes-agent/issues/147344) [Feature]: Better color contrast for the context usage toast
- [#147343](https://github.com/NousResearch/hermes-agent/issues/147343) [Desktop] Discarding a "Turn lost during restart" leaves the session silently idle — no visible unpaused state
- [#147340](https://github.com/NousResearch/hermes-agent/issues/147340) [Feature]: skill lifecycle model for multi-profile installs — scope, ownership, name collisions, dedupe, size
- [#147338](https://github.com/NousResearch/hermes-agent/issues/147338) [Bug]: Mobile app (iOS beta): bullets in Arabic/RTL messages render on the left instead of the right
- [#147337](https://github.com/NousResearch/hermes-agent/issues/147337) TUI prompt drops lone spaces from live display (buffer intact at submit)
- [#147336](https://github.com/NousResearch/hermes-agent/issues/147336) browser_vault cannot fill non-card voucher/gift-code fields (Cinema tickets checkout)
- [#147334](https://github.com/NousResearch/hermes-agent/issues/147334) Tool-loop guard: "same result 5 times" hard-stop kills unattended cron runs when context compression forces identical re-reads
- [#147333](https://github.com/NousResearch/hermes-agent/issues/147333) [Bug]: Desktop dictation's live finalize has no deadline — a stalled transcribe-stream leaves the composer stuck in "Transcribing"
- [#147331](https://github.com/NousResearch/hermes-agent/issues/147331) codex: `-900k` extended-context selector stays capped at `500,000` when the Codex catalog advertises a `500,000` default `context_window`
- [#147329](https://github.com/NousResearch/hermes-agent/issues/147329) Custom-provider credentials are persisted in plaintext into the terminal session snapshot
- [#147322](https://github.com/NousResearch/hermes-agent/issues/147322) [Bug]: Android beta: live voice can't be started in a new chat unless Collapsed Voice Button is set to live voice
- [#147319](https://github.com/NousResearch/hermes-agent/issues/147319) Mobile app (Android beta): model variants collapse to the same label in the picker, and sent message text is clipped in the conversation

#### 🔒 Closed Issues
- [#145162](https://github.com/NousResearch/hermes-agent/issues/145162) drive_preview / desktop_preview read: viewer requests never answered (events reach the window, requests don't)
- [#147345](https://github.com/NousResearch/hermes-agent/issues/147345) [Bug]: Android beta shows thinking notification but no notification when final reply completes
- [#147367](https://github.com/NousResearch/hermes-agent/issues/147367) Dashboard as launch profile: session delete (any mutation) on a non-launch profile returns 404 not_found

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 96,006 · **Open issues:** 9,652 · **Last push:** 1h ago

On November 1, 2026, there were no new releases for vLLM, but several noteworthy changes were made in merged pull requests. Key updates included the addition of TP4 and lowest-latency presets for the Mistral Large 4 recipe, as well as the introduction of new AgentX presets for MiniMax-M3.1-Flash and DeepSeek-V4.1-Flash. Significant bug fixes improved the preservation of whitespace in HYV4 argument names and addressed issues related to prompt token reporting in batched chat completions. Additionally, a new bug was reported regarding the Multimodal video loaders, which ignore parameters for the number of frames specified in the media input options. Overall, the day reflected routine maintenance with iterative improvements across various functionalities.

#### ✅ Merged PRs
- [#64910](https://github.com/vllm-project/vllm/pull/64910) [Doc] MiniMax-M3.1-Flash: update the GB300 AgentX presets
- [#64909](https://github.com/vllm-project/vllm/pull/64909) [Doc] MiniMax-M3.1-Flash: update the GB200 AgentX presets
- [#64792](https://github.com/vllm-project/vllm/pull/64792) [Docs][ROCm] Mistral Large 4 recipe: adds TP4 and lowest-latency presets
- [#64805](https://github.com/vllm-project/vllm/pull/64805) [Docs][ROCm] Add MiniMax-M3.1-Flash MI355X TP4 AgentX preset
- [#64804](https://github.com/vllm-project/vllm/pull/64804) [Docs][ROCm] Add DeepSeek-V4.1-Flash MI355X TP8 concurrency-1 AgentX preset
- [#61542](https://github.com/vllm-project/vllm/pull/61542) [Bugfix][Tool Parser] Preserve whitespace in HYV4 argument names
- [#64751](https://github.com/vllm-project/vllm/pull/64751) [Bugfix][Spec Decode] Honor draft moe/attention backend overrides for MRV2 standalone draft model
- [#63842](https://github.com/vllm-project/vllm/pull/63842) [Perf][Frontend] Compute prompt block hashes in the Rust frontend
- [#60618](https://github.com/vllm-project/vllm/pull/60618) [Perf][Kernel] Single-launch fused scoring+top-k kernel for sparse-indexer prefill, without materializing logits
- [#64841](https://github.com/vllm-project/vllm/pull/64841) [ModelRunner V2] Reduce peak memory of chunked prompt logprobs
- [#64757](https://github.com/vllm-project/vllm/pull/64757) [Bugfix][Frontend] Report prompt_tokens_details in batched chat completions
- [#63174](https://github.com/vllm-project/vllm/pull/63174) [Bugfix] Skip redundant weight tensor clones for loaders that yield owned tensors
- [#54399](https://github.com/vllm-project/vllm/pull/54399) [Bugfix][Model] Fix CohereASR FP16 attention bias dtype
- [#62192](https://github.com/vllm-project/vllm/pull/62192) [Kernel] Batch invariance: pin FlashInfer FP8 bmm and W4A16 NVFP4 kernels
- [#64338](https://github.com/vllm-project/vllm/pull/64338) [Bugfix] Flashinfer attention warmup deadlock under PP>1
- [#64869](https://github.com/vllm-project/vllm/pull/64869) [Misc] Allow weights mapper to transform weights
- [#62956](https://github.com/vllm-project/vllm/pull/62956) [Perf][glm5next] Add SM121 TP=2 skinny-GEMM plans for GLM-5.3-Flash
- [#64733](https://github.com/vllm-project/vllm/pull/64733) [MiniMax-M3.1][PP] m31-pp-opt: NIXL pull from PP prefill stages and the Q8KV4 prefill workspace on SM10x
- [#64368](https://github.com/vllm-project/vllm/pull/64368) [Spec Decode][ROCm] draft_lm_head_quantization for DSpark drafters
- [#61361](https://github.com/vllm-project/vllm/pull/61361) [MORI] Add MORI EP V2 support
- [#63415](https://github.com/vllm-project/vllm/pull/63415) [Bugfix][Model] Make compile_mm_encoder work for RADIO/NaViT encoders
- [#64650](https://github.com/vllm-project/vllm/pull/64650) [Perf][Qwen3.8] Add SM103 skinny GEMM plans for TP=1
- [#64336](https://github.com/vllm-project/vllm/pull/64336) [RL][Model Loader] Direct weight reload: write checkpoint tensors into the live model
- [#64215](https://github.com/vllm-project/vllm/pull/64215) [Model] Add NVIDIA Canary (nvidia/canary-1b-v2) speech-to-text support
- [#63416](https://github.com/vllm-project/vllm/pull/63416) [KV Connector][NIXL] Pair KV regions by layer for every transfer
- [#62967](https://github.com/vllm-project/vllm/pull/62967) [Bugfix][gRPC] Drain in-flight RPCs and engine work within --shutdown-timeout
- [#63098](https://github.com/vllm-project/vllm/pull/63098) [Feature][DSv4.1] Enable PCP with PP or DP
- [#61614](https://github.com/vllm-project/vllm/pull/61614) [Perf][GLM-5.3-Flash] Update FlashKDA pin, consume row-strided QKV directly

#### 🐛 New Issues
- [#64882](https://github.com/vllm-project/vllm/issues/64882) [Bug]: Multimodal video loaders ignore --media-io-kwargs num_frames `bug` `multi-modality` 💬3
- [#64874](https://github.com/vllm-project/vllm/issues/64874) [Bug]: [ROCm][GLM-5.3-Flash]: "Workspace is locked" AssertionError in rocm_fp8_paged_mqa_logits under high decode concurrency (glm5next AMD indexer reserves decode logits via torch.empty, not the workspace) `bug` `rocm` `glm` 💬3
- [#64853](https://github.com/vllm-project/vllm/issues/64853) [Feature]: Allow `reset_prefix_cache` to clear cached prefixes without preempting running requests `feature request` 💬2
- [#64907](https://github.com/vllm-project/vllm/issues/64907) [Feature]: Batch-invariant Qwen GDN with prefix caching and MTP `feature request` `qwen` `kv-cache-manager` 💬1
- [#64845](https://github.com/vllm-project/vllm/issues/64845) [Bug]: EmbeddingGemma 2 rejects `dimensions` by default although the model supports Matryoshka (128/256/512/768) 💬1
- [#64855](https://github.com/vllm-project/vllm/issues/64855) [Bug] Sparse-attention indexer: native padded decode (`requires_padding`) gives wrong logits/top-k on ragged spec-decode steps `rocm` 💬1
- [#64938](https://github.com/vllm-project/vllm/issues/64938) [Bug]: [RFE] Decode context parallelism: fail-fast with the valid DCP set, or support `--decode-context-parallel-size auto` `bug`
- [#64936](https://github.com/vllm-project/vllm/issues/64936) [Bug]: NCCL weight sync: packed transfer fails to unpack misaligned tensors (pack_tensors has no alignment) `bug`
- [#64859](https://github.com/vllm-project/vllm/issues/64859) [Bug]: Bidirectional NIXL: prefill-side request hangs in WAITING_FOR_REMOTE_KVS after its first D->P pull `kv-connector`
- [#64866](https://github.com/vllm-project/vllm/issues/64866) [Feature]: [CI] Restore Ascend interface compatibility checks with locked test dependencies

#### 🔒 Closed Issues
- [#50682](https://github.com/vllm-project/vllm/issues/50682) [ROCm][AMD] Kimi-K3 Gap and Roadmap Tracking
- [#31856](https://github.com/vllm-project/vllm/issues/31856) [Bug]: Text degeneration / repetition loops with MiniMax-M2.1-NVFP4 on v0.14.0rc1.dev308
- [#41565](https://github.com/vllm-project/vllm/issues/41565) [Bug]: TurboQuant _continuation_prefill workspace allocation fails at long context — v0.20.0 regression
- [#37261](https://github.com/vllm-project/vllm/issues/37261) [Bug]: KeyError when use lmcache layerwise mode in vllm 0.14.0
- [#46358](https://github.com/vllm-project/vllm/issues/46358) [RFC]: Unify Context Parallelism in vLLM (PCP ⊥ DCP)
- [#37162](https://github.com/vllm-project/vllm/issues/37162) [Feature] Fuse per-group FP8 dynamic quant onto Triton attention kernel
- [#37185](https://github.com/vllm-project/vllm/issues/37185) [Bug]: The 2-bit model repeatedly outputs !!!!, while Transformers works correctly.
- [#57684](https://github.com/vllm-project/vllm/issues/57684) [Question] Support path for platform plugins that cannot install Triton (MRV2 requires it)
- [#47326](https://github.com/vllm-project/vllm/issues/47326) [Bug]: Incoherent output depending on tensor-parallel-size during inference on Leanstral (Mistral Small 4 family)
- [#54377](https://github.com/vllm-project/vllm/issues/54377) [Model] Cohere Transcribe fails to initialize on Turing (fp16): expected scalar type Float but found Half in RelPositionMultiHeadAttention
- [#63414](https://github.com/vllm-project/vllm/issues/63414) [Bug]: compile_mm_encoder is engine-fatal for RADIO/NaViT encoders (Nemotron Parse 3.5)

### SGLang (`sgl-project/sglang`)

**Stars:** 38,328 · **Open issues:** 6,285 · **Last push:** <1h ago

On November 1, 2026, there were no new releases for SGLang, but several notable changes were merged. Among these, #47699 introduced documentation updates for the MiniMax-M3.1-Flash GB300 PD AgentX, and #47545 fixed issues with client watermark keys in request logs. Performance improvements were made in #47452, allowing residual bank shards with NCCL on the kimi-k3, while #47582 adjusted LTX-2.5 configurations for better canvas defaults. Additionally, the new issue #47613 highlights a bug in the PP disaggregated decode process, producing incorrect outputs under certain asynchronous batch depths.

#### ✅ Merged PRs
- [#47699](https://github.com/sgl-project/sglang/pull/47699) [Doc] cookbook: Add MiniMax-M3.1-Flash GB300 PD AgentX points
- [#47586](https://github.com/sgl-project/sglang/pull/47586) [Perf] diffusion: keep GQA and MOSS-Image attention on cuDNN SDPA on Blackwell
- [#47691](https://github.com/sgl-project/sglang/pull/47691) [Fix] rust-server: Validate gathered listener ranks and address families
- [#46373](https://github.com/sgl-project/sglang/pull/46373) [Fix] disaggregation: Send decode transfer destinations to prefill only after the in-flight forward
- [#47452](https://github.com/sgl-project/sglang/pull/47452) [Perf] kimi-k3: Allow residual bank shards with NCCL
- [#47545](https://github.com/sgl-project/sglang/pull/47545) [Fix] request_logger: Redact client watermark keys in request logs when watermarking is off
- [#47557](https://github.com/sgl-project/sglang/pull/47557) [Fix] hicache: Withhold only protected bytes from page-cache credit
- [#47551](https://github.com/sgl-project/sglang/pull/47551) [CI] tests: Rendezvous the tile-sharding gloo test through a file store
- [#47321](https://github.com/sgl-project/sglang/pull/47321) [Fix] rust-server: End an /abort_request-ed request on the scheduler's abort finish reason, as Python does
- [#47150](https://github.com/sgl-project/sglang/pull/47150) [CI] [AMD] pr-test: Move test_quark_mxfp4 from the MI35x 1-GPU PR stage to nightly
- [#47652](https://github.com/sgl-project/sglang/pull/47652) [Fix] disaggregation: Ignore a late STAGING_REQ for an already-scattered staging chunk
- [#46827](https://github.com/sgl-project/sglang/pull/46827) [Feat] unified-memory: Evict Full and SWA KV from one shared LRU order (joint_lru)
- [#47532](https://github.com/sgl-project/sglang/pull/47532) [Feat] rust-server: Reach every attention-DP rank with aborts and publish the listener map
- [#44990](https://github.com/sgl-project/sglang/pull/44990) [Refactor] memory-pool: Describe DeepSeek V4 device pools with buffer info
- [#47159](https://github.com/sgl-project/sglang/pull/47159) [Feat] observability: Report a TTFT phase breakdown in response meta_info
- [#47546](https://github.com/sgl-project/sglang/pull/47546) [Fix] tokenizer_manager: Do not dispatch a request whose abort was already sent
- [#47550](https://github.com/sgl-project/sglang/pull/47550) [Perf] model_executor: Write small forward metadata with fill kernels behind SGLANG_ENABLE_MLP_SYNC_METADATA_FILL
- [#47638](https://github.com/sgl-project/sglang/pull/47638) [Fix] disaggregation: Send aux_item_lens next to aux_ptrs in PD registration
- [#46936](https://github.com/sgl-project/sglang/pull/46936) [Feat] hicache: Store MXFP8 KV pages in L3 as payload + scales objects
- [#47662](https://github.com/sgl-project/sglang/pull/47662) [Fix] reasoning: Reject reasoning_effort outside the enum for M3
- [#47583](https://github.com/sgl-project/sglang/pull/47583) [Fix] diffusion: MiniMax-H3 warms up at the short edge --warmup-resolutions names
- [#47582](https://github.com/sgl-project/sglang/pull/47582) [Fix] diffusion: LTX-2.5 two-stage defaults to its 1920x1088 canvas
- [#47568](https://github.com/sgl-project/sglang/pull/47568) [Perf] [ROCM] diffusion: Encode the MP4 while the VAE decodes on ROCm too
- [#47569](https://github.com/sgl-project/sglang/pull/47569) [Perf] [ROCM] diffusion: Bit-exact fast QK RMSNorm and fused RoPE for MiniMax-H3
- [#45020](https://github.com/sgl-project/sglang/pull/45020) [Refactor] memory-pool: Build unified page-envelope host pools from buffer info
- [#46908](https://github.com/sgl-project/sglang/pull/46908) [Perf] [NVIDIA] qwen3: Reuse fused QK-norm/RoPE kernel for decode
- [#45019](https://github.com/sgl-project/sglang/pull/45019) [Refactor] memory-pool: Build DSA indexer host pools from buffer info
- [#47301](https://github.com/sgl-project/sglang/pull/47301) [Fix] diffusion: select Blackwell subtile attention by execution mode and quality
- [#47567](https://github.com/sgl-project/sglang/pull/47567) [Perf] [ROCM] diffusion: Pipeline MiniMax-H3's Ulysses exchange over head groups on RCCL
- [#44168](https://github.com/sgl-project/sglang/pull/44168) [Perf] [NVIDIA] sampling: Enable Cake softmax on SM100
- [#47378](https://github.com/sgl-project/sglang/pull/47378) [Feat] diffusion: Support Pika-Labs/Pika-H3-Flex (MiniMax-H3 + 6-step LoRA)
- [#47565](https://github.com/sgl-project/sglang/pull/47565) [Perf] diffusion: Pipeline Ulysses attention over head groups down to three waves
- [#47570](https://github.com/sgl-project/sglang/pull/47570) [Perf] [ROCM] diffusion: Skip dead math-SDPA work in the MiniMax-H3 VAE decoder on gfx950
- [#47571](https://github.com/sgl-project/sglang/pull/47571) [Fix] diffusion: Server warmup reaches every data-parallel replica
- [#47646](https://github.com/sgl-project/sglang/pull/47646) [Fix] kernels/jit: Correct the PDLTriggerSecondary comment on what griddepcontrol.wait covers
- [#45293](https://github.com/sgl-project/sglang/pull/45293) [CI] [NPU] tests: Add GSM8K PR gate for DSV4-Flash W8A8 8P GPQA
- [#47630](https://github.com/sgl-project/sglang/pull/47630) [Fix] hicache: Set host_only_checkpoint in the sidecar restore test
- [#40107](https://github.com/sgl-project/sglang/pull/40107) [Fix] disaggregation: Preserve sampler customized_info across PD
- [#46028](https://github.com/sgl-project/sglang/pull/46028) [Perf] cosmos3: Accelerate conditioning hashing with GPU BLAKE3
- [#47625](https://github.com/sgl-project/sglang/pull/47625) [CI] diffusion: Fix image preprocessing test dependency environment
- [#47516](https://github.com/sgl-project/sglang/pull/47516) [Fix] diffusion: Nomas KV budget counts freed cached memory, reject SP-indivisible segments up front
- [#46724](https://github.com/sgl-project/sglang/pull/46724) [Perf] [NVIDIA] muse-spark-open: Fuse MoE finalize with the 2shot_push all-reduce
- [#37367](https://github.com/sgl-project/sglang/pull/37367) [Perf] [AMD] moe: Resolve MoRI dispatch from the AITER activation contract
- [#47615](https://github.com/sgl-project/sglang/pull/47615) [Doc] [AMD] cookbook: Add GLM-5.2 MI355X AgentX recipe
- [#47623](https://github.com/sgl-project/sglang/pull/47623) [Doc] cookbook: Update MiniMax-M3.1-Flash AgentX launches
- [#43110](https://github.com/sgl-project/sglang/pull/43110) [Fix] hicache: Resolve derived sidecars over every source transfer
- [#47577](https://github.com/sgl-project/sglang/pull/47577) [Fix] megamoe: Allocate the symmetric buffers before KV cache sizing
- [#47603](https://github.com/sgl-project/sglang/pull/47603) [CI] test: Drop tests that never run in CI
- [#43899](https://github.com/sgl-project/sglang/pull/43899) [Refactor] scheduler: Track running requests in an owner list
- [#44718](https://github.com/sgl-project/sglang/pull/44718) [Feat] [AMD] mamba: Store hicache checkpoints without a GPU slot
- [#47489](https://github.com/sgl-project/sglang/pull/47489) [Feat] rust-server: Drain on SIGTERM like the Python server
- [#46898](https://github.com/sgl-project/sglang/pull/46898) [Perf] disaggregation: Stop device admission in a decode transfer pass at the first refusal
- [#45876](https://github.com/sgl-project/sglang/pull/45876) [Perf] DFLASH: route draft bf16 GEMMs through tuned dispatch on GB300
- [#47592](https://github.com/sgl-project/sglang/pull/47592) [CI] ci: Preload `sglang.test.test_utils` in CPU fork workers
- [#47387](https://github.com/sgl-project/sglang/pull/47387) [Perf] [NVIDIA] dsv41: Balance the SM90 paged decode indexer's tiles across the GPU so one long context no longer sets the step time
- [#47337](https://github.com/sgl-project/sglang/pull/47337) [Fix] model_loader: Neutral UE8M0 block scales for dummy weights
- [#47542](https://github.com/sgl-project/sglang/pull/47542) [Perf] unified-memory: Bind the SWA tail's new pages without a host sync in alloc_extend_swa_tail
- [#47543](https://github.com/sgl-project/sglang/pull/47543) [Fix] hicache: mlock pinned host buffers so page aging never scans them
- [#47408](https://github.com/sgl-project/sglang/pull/47408) [Fix] [AMD] quark: Fix the EP>1 crash in the Quark MXFP4 W4A16 MoE path and restrict it to gfx1151

#### 🐛 New Issues
- [#47613](https://github.com/sgl-project/sglang/issues/47613) [Bug] PP disaggregated decode produces garbage (runs of token 0) when pp_async_batch_depth > pp_size / 2 💬1
- [#47657](https://github.com/sgl-project/sglang/issues/47657) [Feature] Per-node HTTP frontend for data-parallel groups spanning nodes, addressed by global `X-Data-Parallel-Rank`
- [#47598](https://github.com/sgl-project/sglang/issues/47598) [Bug] rust-server: attention-DP listeners on one CPU mask pin their frontends to the same cores
- [#47624](https://github.com/sgl-project/sglang/issues/47624) [RFC] NPU RL Test Consolidation: File Ownership, Coverage Docstrings, and CI Integration (Ascend)
- [#47607](https://github.com/sgl-project/sglang/issues/47607) [Test] Cover model-loader extra config validation
- [#47602](https://github.com/sgl-project/sglang/issues/47602) [Test] Cover unindexed Mistral safetensors filtering
- [#47594](https://github.com/sgl-project/sglang/issues/47594) [Test] Add CPU unit coverage for MTP weight filtering

#### 🔒 Closed Issues
- [#35772](https://github.com/sgl-project/sglang/issues/35772) [Bug] Qwen3-VL vision features diverge from Transformers/vLLM in v0.5.17 on fine-grained grounding
- [#37478](https://github.com/sgl-project/sglang/issues/37478) [ROCm] IndexerKPool calls aiter fp8_mqa_logits unbounded; >2 GiB logits abort every TP rank (#36960 does not cover this class)
- [#37419](https://github.com/sgl-project/sglang/issues/37419) [Feature] Avoid raw media input prefixes in multimodal error logs
- [#37421](https://github.com/sgl-project/sglang/issues/37421) CI: tests flaking on ubuntu-latest
- [#36829](https://github.com/sgl-project/sglang/issues/36829) GLM-5.3-Flash (glm5_next, mHC) EAGLE3/MTP: fused_eh_norm width mismatch with mHC-flattened aux hidden; acceptance ~1.0 after workarounds
- [#37389](https://github.com/sgl-project/sglang/issues/37389) [RFC][Feature] Extract an In-Process Route Planner from experimental/sgl-router's PD Workflow
- [#37349](https://github.com/sgl-project/sglang/issues/37349) [Guide] Setup and Troubleshooting for SGLang on V100
- [#37342](https://github.com/sgl-project/sglang/issues/37342) [Bug] DeepSeek-V4-Flash-0731 fails to load on v0.5.17/v0.5.18: AssertionError: Hidden size mismatch in the mxfp4 MoE path (works on main)
- [#37405](https://github.com/sgl-project/sglang/issues/37405) [RFC] Incremental test cleanup, CI taxonomy, and shared diffusion dispatch
- [#37475](https://github.com/sgl-project/sglang/issues/37475) [Bug] DFlash target_layer_ids fallback guesses wrong tap layers; count collision fails silently
- [#37457](https://github.com/sgl-project/sglang/issues/37457) [Bug] Startup logs and server_info expose API keys in resolved server arguments
- [#47515](https://github.com/sgl-project/sglang/issues/47515) [Bug] diffusion: Nomas KV budget ignores freed cached memory, and SP divisibility is checked too late

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 132,994 · **Open issues:** 2,596 · **Last push:** 1h ago

On November 1, 2026, the llama.cpp project released several new versions, including b12024 and b12023, which introduced key enhancements such as reshaping to utilize 2D instead of 3D tensors for LFM shared decision prefixes and adjustments to the server's endpoint to accept additional parameters, respectively. Noteworthy merged features included a fix for attention tensor rotation in shared key-value layers and the enablement of tensor split for LFM3 in #31431. Additionally, a significant new issue was raised regarding a bug in the llama-server that causes it to abort at startup due to an assertion failure when using specific configurations (#31482), highlighting ongoing challenges in maintaining compatibility across different operational states. Overall, the day was marked by meaningful upgrades and the emergence of pressing issues that could impact user experience.

#### 🚀 New Releases
- [b12024](https://github.com/ggml-org/llama.cpp/releases/tag/b12024) b12024
- [b12023](https://github.com/ggml-org/llama.cpp/releases/tag/b12023) b12023
- [b12022](https://github.com/ggml-org/llama.cpp/releases/tag/b12022) b12022
- [b12021](https://github.com/ggml-org/llama.cpp/releases/tag/b12021) b12021
- [b12020](https://github.com/ggml-org/llama.cpp/releases/tag/b12020) b12020
- [b12019](https://github.com/ggml-org/llama.cpp/releases/tag/b12019) b12019
- [b12018](https://github.com/ggml-org/llama.cpp/releases/tag/b12018) b12018

#### ✅ Merged PRs
- [#31442](https://github.com/ggml-org/llama.cpp/pull/31442) hexagon : fix DMA transfers with strides > 24 bits
- [#30886](https://github.com/ggml-org/llama.cpp/pull/30886) mtmd : fix InternVL CLS token order
- [#31401](https://github.com/ggml-org/llama.cpp/pull/31401) tests : enable Gemma 4 in `test-llama-archs`
- [#31431](https://github.com/ggml-org/llama.cpp/pull/31431) model : enable tensor split for LFM3
- [#31459](https://github.com/ggml-org/llama.cpp/pull/31459) vendor : update miniaudio to 0.11.26
- [#31406](https://github.com/ggml-org/llama.cpp/pull/31406) llama : fix rotation of attention tensors in layers with shared KV
- [#30831](https://github.com/ggml-org/llama.cpp/pull/30831) model(lfm2): reorder short conv reshaping to avoid multiple gemv launches
- [#30710](https://github.com/ggml-org/llama.cpp/pull/30710) server: cap shared decision prefixes at the first output
- [#30959](https://github.com/ggml-org/llama.cpp/pull/30959) server : fix /v1/responses endpoint to accept extra_params
- [#30922](https://github.com/ggml-org/llama.cpp/pull/30922) mtmd : resize Gemma 4 images without letterbox padding
- [#31434](https://github.com/ggml-org/llama.cpp/pull/31434) opencl: add initial fwht support
- [#31380](https://github.com/ggml-org/llama.cpp/pull/31380) chat : strip the think block in the qwen3-coder with reasoning_format none

#### 🐛 New Issues
- [#31472](https://github.com/ggml-org/llama.cpp/issues/31472) spec: draft-dflash/dspark breaks temp-0 output identity on qwen35moe targets, backend-independent (divergence at 100% acceptance) 💬4
- [#31466](https://github.com/ggml-org/llama.cpp/issues/31466) [SYCL] run Q4_0 prompt matmul in oneDNN without converting weights to f16 `enhancement` 💬2
- [#31456](https://github.com/ggml-org/llama.cpp/issues/31456) gptneox: FFN uses tanh GELU (LLM_FFN_GELU) but GPT-NeoX/Pythia are trained with exact erf GELU 💬2
- [#31457](https://github.com/ggml-org/llama.cpp/issues/31457) iSWA: llama_memory_seq_rm returns true after a cut into overwritten SWA rows (swa_full=false), next decode silently wrong 💬2
- [#31482](https://github.com/ggml-org/llama.cpp/issues/31482) [Bug] llama-server aborts at startup: GGML_ASSERT(ubatch->embd_state) in common_context_can_seq_rm() probe decode when MTP draft + --kv-unified are used together (Gemma 4 E4B)
- [#31461](https://github.com/ggml-org/llama.cpp/issues/31461) Feature Request: one-token FLASH_ATTN_EXT path for GQA `enhancement`
- [#31480](https://github.com/ggml-org/llama.cpp/issues/31480) Eval bug: DeepSeek-V4.1-Flash (deepseek41) outputs gibberish on Vulkan with flash attention enabled (correct with -fa off) `bug-unconfirmed`
- [#31479](https://github.com/ggml-org/llama.cpp/issues/31479) Misc. bug: CUDA backend silently not registered in a shared-library build without GGML_BACKEND_DL
- [#31477](https://github.com/ggml-org/llama.cpp/issues/31477) Eval bug: draft-mtp token generation ~35% slower with -np 1 than with -np 2/4 (Vulkan, single request) `bug-unconfirmed`
- [#31476](https://github.com/ggml-org/llama.cpp/issues/31476) Misc. bug: Hexagon: test-backend-ops GET_ROWS fails for q4_K and q5_K on HTP0 (v81)
- [#31475](https://github.com/ggml-org/llama.cpp/issues/31475) systemone reads shared prefix again for each question group `bug-unconfirmed`
- [#31452](https://github.com/ggml-org/llama.cpp/issues/31452) [RFC] Deterministic Layer & MoE Streaming: Run 70B/141B on 16GB RAM with Standard GGUF (Zero-OOM mmap Alternative)
- [#31462](https://github.com/ggml-org/llama.cpp/issues/31462) Feature Request: Use Huawei Ascend in the NPU support section `enhancement`
- [#31458](https://github.com/ggml-org/llama.cpp/issues/31458) Compile bug: tools/server/server-context.cpp fails to compile with Intel icx/icpx: std::setw missing <iomanip> include `bug-unconfirmed`
- [#31451](https://github.com/ggml-org/llama.cpp/issues/31451) Eval bug: llama-server silently drops recorded logprobs and token IDs for multi-token UTF-8 characters `bug-unconfirmed`

#### 🔒 Closed Issues
- [#22648](https://github.com/ggml-org/llama.cpp/issues/22648) vulkan tensor parallelism support
- [#27459](https://github.com/ggml-org/llama.cpp/issues/27459) Compile bug: Assembly error on build with Cuda 12.8
- [#27562](https://github.com/ggml-org/llama.cpp/issues/27562) Feature Request: Just-in-time MoE expert streaming from storage
- [#28034](https://github.com/ggml-org/llama.cpp/issues/28034) gguf-py quantization time grows quadratically with tensor size at certain row widths
- [#30678](https://github.com/ggml-org/llama.cpp/issues/30678) Eval bug: mellum2/vulkan: token generation performance dropped from 44t/s to 7.8t/s
- [#28963](https://github.com/ggml-org/llama.cpp/issues/28963) Misc. bug: CPU backend: llama_batch.embd (embedding input) decoding is non-deterministic, while the token path is bitwise deterministic
- [#28970](https://github.com/ggml-org/llama.cpp/issues/28970) Misc. bug: `llama-batched-bench` ignores the `-fit` option
- [#28998](https://github.com/ggml-org/llama.cpp/issues/28998) Feature Request: Keep KV cache when a model auto-unloads in router mode due to the --max-models setting
- [#28997](https://github.com/ggml-org/llama.cpp/issues/28997) Eval bug: llama-server segfaults (null function pointer) loading Gemma 4 E4B with Vulkan backend
- [#30482](https://github.com/ggml-org/llama.cpp/issues/30482) Misc. bug: /v1/systemone returns 500 "the question and its options must fit in one batch" when two questions in a request share a prefix (-np >= 2)

### Ollama (`ollama/ollama`)

**Stars:** 185,484 · **Open issues:** 4,521 · **Last push:** 3h ago

On November 1, 2026, Ollama did not release any new versions but merged a key pull request (#19432) that prevents the override of model sampler defaults for OpenAI models. The team is also addressing several new issues, with #19427 highlighting a problem where Gemma3:4b returns an empty JSON object with lengthy prompts. Additionally, issue #19439 reports that the Ollama runner disconnects during tool calling on Windows RTX 5090, which raises concerns about reliability. Other notable issues include problems with Qwen models ending chats prematurely (#19424) and a request for the new VirbiusGuard model aimed at enhancing agent safety (#19428).

#### ✅ Merged PRs
- [#19432](https://github.com/ollama/ollama/pull/19432) openai: don't override model sampler defaults

#### 🐛 New Issues
- [#19427](https://github.com/ollama/ollama/issues/19427) Gemma3:4b returns an empty JSON object with a long extraction prompt and structured output `bug` 💬4
- [#19439](https://github.com/ollama/ollama/issues/19439) Windows RTX 5090 — Ollama runner disconnects during tool calling, HTTP 500 /tokenize `bug` 💬2
- [#19424](https://github.com/ollama/ollama/issues/19424) Qwen models end the entire chat when thinking ends `bug` 💬1
- [#19425](https://github.com/ollama/ollama/issues/19425) Generic tool parser mistakes argument strings for function names 💬1
- [#19430](https://github.com/ollama/ollama/issues/19430) [AI] ollama pull: TLS handshake timeout on networks that drop the post-quantum (X25519MLKEM768) ClientHello `networking`
- [#19437](https://github.com/ollama/ollama/issues/19437) LFM3-Omni speech memory grows after repeated requests on macOS `bug`
- [#19436](https://github.com/ollama/ollama/issues/19436) Make Qwen3.5 0.8B Q4_K_M quantization available (`qwen3.5:0.8b-q4_K_M`)
- [#19435](https://github.com/ollama/ollama/issues/19435) Models sharing a server can't have different prompt cache budgets
- [#19428](https://github.com/ollama/ollama/issues/19428) Model request: VirbiusGuard (0.6B agent-safety & prompt-injection guard, Apache-2.0) `model`

#### 🔒 Closed Issues
- [#15887](https://github.com/ollama/ollama/issues/15887) I suggest adding the MIMO v2.5 LLM to Ollama Cloud.
- [#18690](https://github.com/ollama/ollama/issues/18690) `/v1/chat/completions` forces `top_p: 1.0` when omitted, silently overriding Modelfile `PARAMETER top_p`
- [#17744](https://github.com/ollama/ollama/issues/17744) PARAMETER temperature from the Modelfile is ignored on /v1/chat/completions but honoured on /api/chat

### LiteLLM (`BerriAI/litellm`)

**Stars:** 62,455 · **Open issues:** 5,572 · **Last push:** <1h ago

On November 1, 2026, there were no new releases for LiteLLM; however, several important changes were merged, including a fix to support reload with multiple workers (#45909) and enhancements to the Llama 3 model card, raising the maximum output to 8K tokens in GovCloud West (#49543). Additionally, the integration of files and tool results came with the new feature in Ovalix (#49309), while the Guardrails configuration was strengthened to invoke specified assessments (#49469). Among new issues, a notable bug was reported regarding the parsing of transport chunks in Anthropic streaming guardrails, leading to warning spam and unscanned output text (#49449).

#### ✅ Merged PRs
- [#49533](https://github.com/BerriAI/litellm/pull/49533) test: move Sail, Weave and Presidio e2e tests to integration tests
- [#45909](https://github.com/BerriAI/litellm/pull/45909) fix(proxy)!: support reload with multiple workers
- [#49543](https://github.com/BerriAI/litellm/pull/49543) fix(bedrock): raise GovCloud West Llama 3 max output to the model card 8K
- [#49542](https://github.com/BerriAI/litellm/pull/49542) fix(cost-map): add 2026-11-04 deprecation_date to together_ai Qwen3.8-2.4T-A95B
- [#49538](https://github.com/BerriAI/litellm/pull/49538) chore(e2e): remove the unused arize_phoenix callback from the stage mirror config
- [#49534](https://github.com/BerriAI/litellm/pull/49534) fix(bedrock): backport the count_tokens routing and stale integration test fixes to rc/1.108.0
- [#49309](https://github.com/BerriAI/litellm/pull/49309) feat(ovalix)!: scan files, tool calls and tool results
- [#49436](https://github.com/BerriAI/litellm/pull/49436) test(mcp): cancel disconnected HTTP tool handlers
- [#49470](https://github.com/BerriAI/litellm/pull/49470) feat(bedrock): configure full guardrail assessments (#49217)
- [#49531](https://github.com/BerriAI/litellm/pull/49531) fix(chat): describe general chat and deep research on the chat home
- [#49520](https://github.com/BerriAI/litellm/pull/49520) test(router): trace the deployment index lock in the file that owns it
- [#49491](https://github.com/BerriAI/litellm/pull/49491) fix(docs): replace stale docs/proxy/enterprise links with the current docs pages
- [#49469](https://github.com/BerriAI/litellm/pull/49469) feat(sdk): invoke configured guardrails (#49217)
- [#49460](https://github.com/BerriAI/litellm/pull/49460) feat(guardrails): return native findings on request (#49217)
- [#49483](https://github.com/BerriAI/litellm/pull/49483) fix(agents): show non-admin callers the proxy URL in agent cards
- [#49508](https://github.com/BerriAI/litellm/pull/49508) feat(chat): add deep research with persistent citations
- [#49498](https://github.com/BerriAI/litellm/pull/49498) fix(streaming): preserve served models in OpenRouter streams
- [#49499](https://github.com/BerriAI/litellm/pull/49499) fix(http): diagnose aiohttp connection pool saturation
- [#49471](https://github.com/BerriAI/litellm/pull/49471) fix(proxy): serve /a2a/{agent_id}/message/stream routes
- [#49521](https://github.com/BerriAI/litellm/pull/49521) test(translation): expect the EOF error frame when an Anthropic json_schema stream is cut
- [#49395](https://github.com/BerriAI/litellm/pull/49395) fix(router): restore four base behaviors the RoutingContext refactor changed
- [#49482](https://github.com/BerriAI/litellm/pull/49482) fix(guardrails): backport #49262 and #49264 to rc/1.108.0, name only the pipeline steps that ran in x-litellm-applied-guardrails
- [#49492](https://github.com/BerriAI/litellm/pull/49492) fix(a2a): log authenticated pre-dispatch agent rejections
- [#49502](https://github.com/BerriAI/litellm/pull/49502) fix(passthrough): fit the Deepgram listen unpriced refusal in a WebSocket close frame
- [#49485](https://github.com/BerriAI/litellm/pull/49485) fix(proxy): treat empty agent and skill search embedding model as not configured
- [#49506](https://github.com/BerriAI/litellm/pull/49506) ci: backport the GitHub Actions integration workflow to rc/1.108.0
- [#49505](https://github.com/BerriAI/litellm/pull/49505) test: deflake the json accumulator drain test and the armed routing prefetch test
- [#49507](https://github.com/BerriAI/litellm/pull/49507) refactor(ui): remove dead API calls from networking.tsx
- [#49167](https://github.com/BerriAI/litellm/pull/49167) fix(mcp)!: backport #48939 to rc/1.108.0, restore upstream-token admission for legacy delegate servers
- [#49494](https://github.com/BerriAI/litellm/pull/49494) docs(pr-template): wrap the agent-drafted summary in make-me-human-readable tags
- [#49461](https://github.com/BerriAI/litellm/pull/49461) feat(chat): resume replies after browser disconnects
- [#47794](https://github.com/BerriAI/litellm/pull/47794) fix(cohere): emit streamed tool calls from v2 tool-call-start and tool-call-delta chunks
- [#49237](https://github.com/BerriAI/litellm/pull/49237) fix(anthropic): answer 400 naming a non-string role or tool call id instead of 500
- [#49119](https://github.com/BerriAI/litellm/pull/49119) refactor(router): extract PythonCore behind RouterCore and pass the router its config
- [#49486](https://github.com/BerriAI/litellm/pull/49486) test: backport three test fixes from main to rc/1.108.0
- [#47665](https://github.com/BerriAI/litellm/pull/47665) fix(streaming)!: fail a stream that ends without a finish reason
- [#49476](https://github.com/BerriAI/litellm/pull/49476) fix(a2a): answer proxy refusals on /a2a POST routes as JSON-RPC errors
- [#49282](https://github.com/BerriAI/litellm/pull/49282) feat(passthrough): add Deepgram streaming text-to-speech WebSocket route
- [#47541](https://github.com/BerriAI/litellm/pull/47541) fix(logging): drop a first-token time left over from a previous attempt
- [#49472](https://github.com/BerriAI/litellm/pull/49472) ci: cut the weekly rc branch on Monday 3am PT instead of Friday
- [#49475](https://github.com/BerriAI/litellm/pull/49475) docs(pr-template): add a handwritten 1-3 sentence description section
- [#49468](https://github.com/BerriAI/litellm/pull/49468) fix(caching): stop counting an unrun server tool call mark, and follow #49192 and #35602 in their integration tests
- [#49406](https://github.com/BerriAI/litellm/pull/49406) test(integration): wait for the stalled-tenant root span and accept a bare POST name
- [#49474](https://github.com/BerriAI/litellm/pull/49474) fix(a2a): send agent litellm_params.api_key as bearer auth on the A2A hop
- [#49454](https://github.com/BerriAI/litellm/pull/49454) fix(moderations): stop the router image check from 500ing on a list input
- [#49463](https://github.com/BerriAI/litellm/pull/49463) fix(proxy): preserve discovery after budget exhaustion (#48809)
- [#49465](https://github.com/BerriAI/litellm/pull/49465) fix(a2a): drop wrong 10 minutes comment on DEFAULT_A2A_AGENT_TIMEOUT
- [#49462](https://github.com/BerriAI/litellm/pull/49462) fix(watsonx): read pass-through credentials from use_in_pass_through deployments
- [#49387](https://github.com/BerriAI/litellm/pull/49387) fix(scheduler): read shared queue from Redis so expired dead-replica entries stop blocking waiters
- [#49455](https://github.com/BerriAI/litellm/pull/49455) test(cost): expect cohere rerank-v4 prompt_tokens from billed_units.total_tokens
- [#49458](https://github.com/BerriAI/litellm/pull/49458) fix(oci): preserve Gemini system messages (#48813)
- [#49371](https://github.com/BerriAI/litellm/pull/49371) fix(router): inspect image content without translating routed requests
- [#49388](https://github.com/BerriAI/litellm/pull/49388) fix(streaming): normalize stop after OpenAI-compatible tool calls
- [#49376](https://github.com/BerriAI/litellm/pull/49376) test(integration): size restart-mid-burst timeouts from the proxy boot budget
- [#49356](https://github.com/BerriAI/litellm/pull/49356) fix(messages): price a native /v1/messages body as served unless its provider reports its own cost
- [#49365](https://github.com/BerriAI/litellm/pull/49365) fix(cost): keep upstream_usage_cost on the Responses stream logging copy so bridged /v1/messages rows price their tokens
- [#49447](https://github.com/BerriAI/litellm/pull/49447) docs(model-catalog): explain meter, band, channel and When
- [#49357](https://github.com/BerriAI/litellm/pull/49357) fix(cost): split a provider-reported total between input and output by the cost map rate ratio
- [#49444](https://github.com/BerriAI/litellm/pull/49444) chore(cost-map): add openai gpt-6-astra-law from the pricing page
- [#49392](https://github.com/BerriAI/litellm/pull/49392) fix(proxy): price OpenAI pass-through /v1/decisions calls like native Decisions
- [#49133](https://github.com/BerriAI/litellm/pull/49133) feat(accounting): capture request usage through the durable meter
- [#47692](https://github.com/BerriAI/litellm/pull/47692) fix(gemini): add thought_signature_in_tool_call_id to keep tool call ids short for clients that cap them
- [#49088](https://github.com/BerriAI/litellm/pull/49088) fix(guardrails)!: keep the upstream error when a /v1/messages stream ends in one
- [#49192](https://github.com/BerriAI/litellm/pull/49192) fix(anthropic): map pause_turn and return refusal explanations on chat and responses
- [#49394](https://github.com/BerriAI/litellm/pull/49394) ci(circleci): clone the public repo over HTTPS so main jobs stop failing at checkout
- [#49257](https://github.com/BerriAI/litellm/pull/49257) fix(proxy): count native Responses WebSocket turn tokens toward key and tag TPM limits
- [#49141](https://github.com/BerriAI/litellm/pull/49141) fix(proxy): trace model list requests with the caller's traceparent
- [#49207](https://github.com/BerriAI/litellm/pull/49207) fix(decisions)!: honor a deployment's own supports_audio_input and supports_video_input flags
- [#49228](https://github.com/BerriAI/litellm/pull/49228) perf(logging): skip the base64 regex on plain text and copy a few large strings inline
- [#44863](https://github.com/BerriAI/litellm/pull/44863) feat!: add Hostinger Router as an OpenAI-compatible provider
- [#35602](https://github.com/BerriAI/litellm/pull/35602) fix(openai): stop stripping cache_control from the caller's own messages and tools
- [#49333](https://github.com/BerriAI/litellm/pull/49333) fix(proxy): forward a valid metadata.user_id to Anthropic Messages on pass-through routes
- [#49362](https://github.com/BerriAI/litellm/pull/49362) build(deps): bump pyasn1, pypdf and minimatch to clear osv-scan
- [#49160](https://github.com/BerriAI/litellm/pull/49160) fix(vertex_ai): bill Claude web search per request on deployments priced in model_info
- [#49068](https://github.com/BerriAI/litellm/pull/49068) fix(hosted_vllm): accept the vLLM production-stack router's file and batch objects
- [#49281](https://github.com/BerriAI/litellm/pull/49281) feat(passthrough): let a WebSocket relay bill a session from its client text
- [#49161](https://github.com/BerriAI/litellm/pull/49161) fix(proxy)!: bind admin-owned team keys to their team's MCP servers
- [#49331](https://github.com/BerriAI/litellm/pull/49331) fix(ui): resolve auto router templates through ids a * catch-all lists over a partial wildcard
- [#49049](https://github.com/BerriAI/litellm/pull/49049) fix(responses): preserve text verbosity when bridging to chat completions
- [#47838](https://github.com/BerriAI/litellm/pull/47838) fix(aiohttp): bill the usage a stream sent before its connection dropped, and deflake the CyberArk override test
- [#49190](https://github.com/BerriAI/litellm/pull/49190) feat(accounting): add bounded transactional usage persistence
- [#49375](https://github.com/BerriAI/litellm/pull/49375) fix(bedrock): restore the eu.anthropic.claude-haiku-4-5-20251001-v1:0 model map row
- [#49382](https://github.com/BerriAI/litellm/pull/49382) test(integration): match Databricks classifier budget telemetry
- [#49184](https://github.com/BerriAI/litellm/pull/49184) fix(mcp): log SDK request rejections
- [#49150](https://github.com/BerriAI/litellm/pull/49150) fix(a2a)!: bill completion-bridge agents at their own prices on /a2a send and stream
- [#49118](https://github.com/BerriAI/litellm/pull/49118) refactor(router): route the router family through RoutingContext and close the outside surface
- [#49372](https://github.com/BerriAI/litellm/pull/49372) test(budgets): age the monthly window past any calendar month so the reset test passes on the 31st

#### 🐛 New Issues
- [#49449](https://github.com/BerriAI/litellm/issues/49449) [Bug]: Anthropic streaming guardrails parse transport chunks as complete SSE frames — warning spam and silently unscanned output text `llm translation` 💬3
- [#49419](https://github.com/BerriAI/litellm/issues/49419) [Bug]: TransportError in litellm/llms/vertex_ai/vertex_llm_base.py `bug` `llm translation` 💬3
- [#49432](https://github.com/BerriAI/litellm/issues/49432) [Bug]: agent_search_embedding_model: "" makes every /v1/agents?query= return 503 instead of "not configured" 💬2
- [#49424](https://github.com/BerriAI/litellm/issues/49424) [Bug]: A2A calls are logged under the client's JSON-RPC id, so SpendLogs drops calls that reuse an id 💬2
- [#49411](https://github.com/BerriAI/litellm/issues/49411) [Bug]: voyage/ embeddings ignore VOYAGE_API_BASE `bug` 💬2
- [#49433](https://github.com/BerriAI/litellm/issues/49433) [Bug]: /a2a/{agent_id}/message/stream is in agent_inference_routes but returns 404 💬1
- [#49479](https://github.com/BerriAI/litellm/issues/49479) pass_through_endpoints strips `id` from JSON-RPC request bodies (breaks JSON-RPC 2.0, name collision with internal param list) 💬1
- [#49451](https://github.com/BerriAI/litellm/issues/49451) [Feature]: Bridge A2A contextId to Vertex AI Agent Engine sessions (like Bedrock AgentCore / LangFlow) `llm translation` 💬1
- [#49434](https://github.com/BerriAI/litellm/issues/49434) [Bug]: DEFAULT_A2A_AGENT_TIMEOUT defaults to 6000 s (100 min) while its comment says 10 minutes 💬1
- [#49418](https://github.com/BerriAI/litellm/issues/49418) [Bug]: TransportError in litellm/llms/vertex_ai/vertex_llm_base.py `bug` `llm translation` 💬1
- [#49429](https://github.com/BerriAI/litellm/issues/49429) [Bug]: GET /v1/agents shows non-admin keys the backend agent URL that the proxied agent card hides
- [#49425](https://github.com/BerriAI/litellm/issues/49425) [Bug]: A2A agent-permission 403 is not logged (no failure callback, no SpendLogs row), unlike the model-access 403 `llm translation`
- [#49489](https://github.com/BerriAI/litellm/issues/49489) MCP Registry entry `io.github.BerriAI/litellm-mcp` points to a repository that does not exist
- [#49426](https://github.com/BerriAI/litellm/issues/49426) [Bug]: Budget refusal on /a2a/{agent} is an OpenAI error with string code "422", not a JSON-RPC error `llm translation`
- [#49428](https://github.com/BerriAI/litellm/issues/49428) [Bug]: litellm_params.api_key on an A2A agent is stored but never sent to the agent `llm translation`
- [#49431](https://github.com/BerriAI/litellm/issues/49431) [Feature]: Scope the A2A contextId to the calling key for all A2A agents, as already done for Bedrock AgentCore `llm translation`
- [#49430](https://github.com/BerriAI/litellm/issues/49430) [Bug]: GET /v1/agents returns static_headers unmasked to proxy admins, unlike litellm_params secrets
- [#49427](https://github.com/BerriAI/litellm/issues/49427) [Bug]: X-A2A-{agent}-{header} forwarding lets any caller set Authorization and Cookie on the agent request

#### 🔒 Closed Issues
- [#14398](https://github.com/BerriAI/litellm/issues/14398) [Feature]: Requests/tokens per day rate limit
- [#14052](https://github.com/BerriAI/litellm/issues/14052) [Bug]: x-litellm-tags not routing requests to correct model
- [#24152](https://github.com/BerriAI/litellm/issues/24152) [Bug]: Key-level per-model rate limits (model_rpm_limit/model_tpm_limit) don't trigger fallbacks
- [#26413](https://github.com/BerriAI/litellm/issues/26413) [Bug]: `"think": false` is ignored; reasoning_content and thinking_blocks still returned
- [#22747](https://github.com/BerriAI/litellm/issues/22747) azure_api_type: responses uses aiohttp transport which has ~60s socket idle timeout, ignoring timeout parameter -GPT-5-PRO
- [#46095](https://github.com/BerriAI/litellm/issues/46095) [Bug]: OpenRouter streaming chunks report the requested router name instead of the model OpenRouter served
- [#48809](https://github.com/BerriAI/litellm/issues/48809) [Bug]: Team-member budget exhaustion still blocks model discovery and self-service info routes in 1.104.4 (follow-up to #27923)
- [#40260](https://github.com/BerriAI/litellm/issues/40260) [Bug]: OpenAI/Azure clean stream EOF without finish_reason is reported as successful completion
- [#33960](https://github.com/BerriAI/litellm/issues/33960) Per-group allowed_fails / cooldown_time / enable_health_check_routing via routing_groups
- [#34636](https://github.com/BerriAI/litellm/issues/34636) [Bug]: Redis cache test fails when using `url` field
- [#34662](https://github.com/BerriAI/litellm/issues/34662) [Feature]: Add recurring availability schedules for provider credentials
- [#26070](https://github.com/BerriAI/litellm/issues/26070) [Feature]: Expose retry_after on RateLimitError
- [#26163](https://github.com/BerriAI/litellm/issues/26163) [Bug]: `websearch_interception` Anthropic follow-up call passes duplicate Claude Code params (`context_management`, `output_config`) and breaks server-side web search
- [#26376](https://github.com/BerriAI/litellm/issues/26376) [Bug]: langfuse_otel callback drops OTEL spans under asyncio.gather() concurrency
- [#26387](https://github.com/BerriAI/litellm/issues/26387) [Bug]: BedrockGuardrail streaming hook drops HTTPException after HTTP 200, producing broken SSE stream
- [#26411](https://github.com/BerriAI/litellm/issues/26411) [Bug]: litellm can’t handle long running tasks via a2a
- [#32903](https://github.com/BerriAI/litellm/issues/32903) [Bug]: GET /v1/models reports owned_by: "openai" for every model regardless of actual provider
- [#34501](https://github.com/BerriAI/litellm/issues/34501) [Feature]: Please support GCP Managed MCP Servers
- [#48813](https://github.com/BerriAI/litellm/issues/48813) [Bug]: OCI Gemini ignores every system message except the last one
- [#30532](https://github.com/BerriAI/litellm/issues/30532) [Feature]: Add config to enable all metrics but limit which labels are sent
- [#34612](https://github.com/BerriAI/litellm/issues/34612) [Bug]: LiteLLM SAP provider fails to parse `gemini-3.5-flash` responses due to `reasoning_content` type mismatch
- [#34624](https://github.com/BerriAI/litellm/issues/34624) [Bug]: guardrail_information not persisted for anthropic_messages route (/v1/messages) on successful requests — UI Logs tab blank
- [#34659](https://github.com/BerriAI/litellm/issues/34659) [Bug]: User onboarding fails with "Missing onboarding session for invitation link"
- [#34661](https://github.com/BerriAI/litellm/issues/34661) [Feature]: Add recurring access schedules for virtual keys
- [#49432](https://github.com/BerriAI/litellm/issues/49432) [Bug]: agent_search_embedding_model: "" makes every /v1/agents?query= return 503 instead of "not configured"
- [#48543](https://github.com/BerriAI/litellm/issues/48543) OpenAI pass-through `POST /v1/decisions` is logged with $0 spend and no token usage
- [#49107](https://github.com/BerriAI/litellm/issues/49107) [Bug]: Gemini 4 Argon: CONTINUATION finish reason is mapped to "stop", so truncated output looks complete
- [#34616](https://github.com/BerriAI/litellm/issues/34616) Voxtral models not visible in Mistral API model list — only available as audio_transcription
- [#34618](https://github.com/BerriAI/litellm/issues/34618) Feature Request: Add WaveSpeed.ai as a supported inference provider (LLM API + Media Generation)
- [#34648](https://github.com/BerriAI/litellm/issues/34648) [Feature]:
- [#49217](https://github.com/BerriAI/litellm/issues/49217) [Feature]: return a guardrail's structured output from /guardrails/apply_guardrail
- [#46864](https://github.com/BerriAI/litellm/issues/46864) [Bug]: aiohttp per-host pool exhaustion is silent, requests just time out with no diagnostic
- [#49433](https://github.com/BerriAI/litellm/issues/49433) [Bug]: /a2a/{agent_id}/message/stream is in agent_inference_routes but returns 404
- [#49434](https://github.com/BerriAI/litellm/issues/49434) [Bug]: DEFAULT_A2A_AGENT_TIMEOUT defaults to 6000 s (100 min) while its comment says 10 minutes
- [#48716](https://github.com/BerriAI/litellm/issues/48716) [Bug]: OpenAI-compatible streaming keeps finish_reason "stop" when the response has tool calls, non-streaming reports "tool_calls"
- [#49418](https://github.com/BerriAI/litellm/issues/49418) [Bug]: TransportError in litellm/llms/vertex_ai/vertex_llm_base.py
- [#49312](https://github.com/BerriAI/litellm/issues/49312) [Bug]: eu.anthropic.claude-haiku-4-5-20251001-v1:0 removed from the model map in #49113, but AWS still serves this EU inference profile
- [#49429](https://github.com/BerriAI/litellm/issues/49429) [Bug]: GET /v1/agents shows non-admin keys the backend agent URL that the proxied agent card hides
- [#49425](https://github.com/BerriAI/litellm/issues/49425) [Bug]: A2A agent-permission 403 is not logged (no failure callback, no SpendLogs row), unlike the model-access 403
- [#49426](https://github.com/BerriAI/litellm/issues/49426) [Bug]: Budget refusal on /a2a/{agent} is an OpenAI error with string code "422", not a JSON-RPC error
- [#49428](https://github.com/BerriAI/litellm/issues/49428) [Bug]: litellm_params.api_key on an A2A agent is stored but never sent to the agent
- [#48571](https://github.com/BerriAI/litellm/issues/48571) [Bug]: missing azure foundry price entries for GPT-6.1-terra
- [#48996](https://github.com/BerriAI/litellm/issues/48996) [Bug]: text.verbosity is dropped when /v1/responses is bridged to chat completions

### Unsloth (`unslothai/unsloth`)

**Stars:** 78,882 · **Open issues:** 575 · **Last push:** <1h ago

On November 1, 2026, Unsloth saw significant development activity despite no new releases. Key merged pull requests included enhancements to the training and inference processes, such as allowing larger audio inputs on models like audio.cpp (#15952) and improvements to video decoding efficiency with MiniMax-H3 (#16314). Notable fixes addressed critical issues like the flickering on Linux, flagged as a possible seizure risk (#16318), and challenges loading models from certain sources (#16263). The current focus also includes optimizing memory handling during diffusion tasks and enhancing operational efficiency across Studio functions. Several new issues were logged, with #16317 highlighting a bug causing stream interruptions due to Bearer Token usage.

#### ✅ Merged PRs
- [#16357](https://github.com/unslothai/unsloth/pull/16357) Tests: flush each DDP rank's result before teardown in the plain Trainer test
- [#15952](https://github.com/unslothai/unsloth/pull/15952) Studio: let Transcribe take larger and longer audio on audio.cpp models
- [#16325](https://github.com/unslothai/unsloth/pull/16325) Studio video: keep the share of MiniMax-H3's streamed conditioner that fits in host RAM
- [#16328](https://github.com/unslothai/unsloth/pull/16328) Studio tests: count an exiting Clef worker as dead while init reaps it
- [#16312](https://github.com/unslothai/unsloth/pull/16312) Studio: the SDXL background compile runs only while no render runs
- [#16326](https://github.com/unslothai/unsloth/pull/16326) Studio: skip the MPS cache clear when torch has no usable Metal device
- [#16314](https://github.com/unslothai/unsloth/pull/16314) Studio video: run the MiniMax-H3 int8 video decoder on the fused ConvRot act quant and int8 GEMM
- [#16315](https://github.com/unslothai/unsloth/pull/16315) Studio tests: count the work in the prose-call amortization test instead of timing it
- [#16304](https://github.com/unslothai/unsloth/pull/16304) Studio diffusion: keep the streamed text encoder in host RAM on the small-host route when it fits
- [#16308](https://github.com/unslothai/unsloth/pull/16308) RAG ANN test: build the recall check index on one thread
- [#16290](https://github.com/unslothai/unsloth/pull/16290) Studio: build offloaded video int8 denoisers per shard when the dense load does not fit host RAM
- [#16295](https://github.com/unslothai/unsloth/pull/16295) Studio: stream the SDXL UNet leaf by leaf when whole-module offload cannot fit it
- [#16305](https://github.com/unslothai/unsloth/pull/16305) Slot resume tests: fake the disk in every test that calls save_slots_for_resume
- [#16291](https://github.com/unslothai/unsloth/pull/16291) Studio video: cache the resident runtime-quantized int8 DiT so returning loads skip the requantize
- [#16282](https://github.com/unslothai/unsloth/pull/16282) LoRA: decide the fused order once per call
- [#16284](https://github.com/unslothai/unsloth/pull/16284) Pin usearch for the document upload harness, and guard its CI-only RAG imports
- [#16276](https://github.com/unslothai/unsloth/pull/16276) Studio: an offline diffusion load reads the mirror the earlier online load staged
- [#16275](https://github.com/unslothai/unsloth/pull/16275) Studio: a streamed Qwen-Image load from the hosted int8 checkpoint gets the int8 text stream and modulations
- [#16264](https://github.com/unslothai/unsloth/pull/16264) Scan baseline: re-review the twelve unsloth-zoo sites 2026.10.11 moved
- [#16261](https://github.com/unslothai/unsloth/pull/16261) Studio: offloaded diffusion runs both guidance branches in one batched call whenever memory allows
- [#16260](https://github.com/unslothai/unsloth/pull/16260) CI: raise the Core zoo job cap from 35 to 50 minutes
- [#16255](https://github.com/unslothai/unsloth/pull/16255) Studio: MOSS-Image GGUF path follows the per-checkpoint negative-branch skip
- [#15722](https://github.com/unslothai/unsloth/pull/15722) Tensor parallel: support few KV heads, full finetuning, weight-only QAT, eval, MoE and dropout instead of refusing
- [#15656](https://github.com/unslothai/unsloth/pull/15656) Pipeline parallel: per-stage sharded loading (load models larger than one GPU)
- [#16249](https://github.com/unslothai/unsloth/pull/16249) Keep tensor subclass types through the fused LoRA accumulates
- [#16256](https://github.com/unslothai/unsloth/pull/16256) Run the dynamic-rank LoRA compile test on hosts without Triton
- [#16257](https://github.com/unslothai/unsloth/pull/16257) Give the WMI deadline check headroom for Windows PowerShell job startup
- [#15655](https://github.com/unslothai/unsloth/pull/15655) Pipeline parallel: every torch.distributed.pipelining schedule (Interleaved1F1B, LoopedBFS, zero bubble, ZBV, DualPipeV)
- [#16252](https://github.com/unslothai/unsloth/pull/16252) Tests: compare the disabled 4-bit fused LoRA forward with dequantize + linear, not bitsandbytes' fused GEMM

#### 🐛 New Issues
- [#16317](https://github.com/unslothai/unsloth/issues/16317) [Bug] Unsloth North Mini Code giving Stream interrupted error when using Bearer Token and OpenAIAPI with OpenCode `feature request` `bug` 💬2
- [#16318](https://github.com/unslothai/unsloth/issues/16318) [Bug] Flickering on Linux (EPILEPSY WARNING) `feature request` `bug` 💬2
- [#16340](https://github.com/unslothai/unsloth/issues/16340) CLI: inference and chat cannot take an image, so a VLM can be trained but not used 💬1
- [#16313](https://github.com/unslothai/unsloth/issues/16313) [Feature] Studio search results should be re-used after clicking `feature request` 💬1
- [#16294](https://github.com/unslothai/unsloth/issues/16294) [Bug] Studio video: MiniMax-H3 on Auto attention crashes with "No available kernel" on Windows (torch without flash attention) `feature request` `bug` 💬1
- [#16263](https://github.com/unslothai/unsloth/issues/16263) [Bug] Decision API GGUF model fails to load when the model source is ModelScope: pinned HF revision 404s and _native_files has no default-branch fallback 💬1
- [#16273](https://github.com/unslothai/unsloth/issues/16273) [Bug] Can't load models `feature request` `bug` 💬1
- [#16267](https://github.com/unslothai/unsloth/issues/16267) [Bug] Studio: On Device model picker stalls ~20 min and times out — every cached GGUF is re-probed against Hugging Face on open 💬1
- [#16274](https://github.com/unslothai/unsloth/issues/16274) [Feature] Unsloth Desktop: Browser Improvements `feature request`
- [#16359](https://github.com/unslothai/unsloth/issues/16359) Prebuilt llama-server: compile q8_0-q4_0 FlashAttention vector kernel into signed Windows builds
- [#16342](https://github.com/unslothai/unsloth/issues/16342) Current guidance for DGX Spark?
- [#16330](https://github.com/unslothai/unsloth/issues/16330) CLI: unsloth inference logs a shutdown warning and waits 10-18s after a successful answer
- [#16331](https://github.com/unslothai/unsloth/issues/16331) CLI: no way to pass trust_remote_code, so models with custom code cannot load
- [#16309](https://github.com/unslothai/unsloth/issues/16309) [Feature] Some Settings (Appearance / System / Security / Browser) are stored only in browser `localStorage` and silently reset per origin/browser `feature request`
- [#16303](https://github.com/unslothai/unsloth/issues/16303) My custom background disappears as soon as I open the chat `feature request`

#### 🔒 Closed Issues
- [#15840](https://github.com/unslothai/unsloth/issues/15840) [Feature] limited to a maximum of 200 MB.
- [#14582](https://github.com/unslothai/unsloth/issues/14582) [Feature] Verbose UI

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,171 · **Open issues:** 386 · **Last push:** 18h ago

On November 1, 2026, there were no new releases for AIBrix. However, a significant PR was merged (#3361), which enhances the documentation by explaining how the ModelClaim make-room feature handles priority. Among the new issues, #3367 proposes refreshing the OpenAI frontend schemas to align with OpenAI, vLLM, and SGLang, while #3370 introduces a feature for a Proxy Engine to enable source-agnostic input and output for unmodified inference engines. Additionally, there are several bug reports, including #3369, which addresses a delay in session-key Redis lookups, and #3368, which deals with the collision of batch result IDs due to truncated UUIDs.

#### ✅ Merged PRs
- [#3361](https://github.com/vllm-project/aibrix/pull/3361) [Docs] Describe how ModelClaim make-room treats priority

#### 🐛 New Issues
- [#3367](https://github.com/vllm-project/aibrix/issues/3367) Feature: refresh openai_frontend schemas to track OpenAI, vLLM and SGLang `triage/accepted` `kind/feature` `area/runtime` 💬2
- [#3370](https://github.com/vllm-project/aibrix/issues/3370) [Feature] Proxy Engine — Source-Agnostic Input/Output for Unmodified Inference Engines `kind/feature` `area/batch` 💬1
- [#3369](https://github.com/vllm-project/aibrix/issues/3369) [Bug] Session-key Redis lookup waits three seconds despite its 500 ms budget `kind/bug` `area/gateway` 💬1
- [#3368](https://github.com/vllm-project/aibrix/issues/3368) [Bug] Batch result IDs collide because UUIDs are truncated to five hex digits `kind/bug` `area/batch` 💬1
- [#3363](https://github.com/vllm-project/aibrix/issues/3363) [Bug] Don't block pod events on KV event replay, and fail open when the replay socket is gone `kind/bug` `area/gateway` 💬1

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,356 · **Open issues:** 855 · **Last push:** <1h ago

On November 1, 2026, there were no new releases for Semantic Router. However, a significant development occurred with the merging of PR #5175, which adds end-to-end coverage for the preference signal's external path, enhancing the testing framework. The project also saw the emergence of several new issues, with #5659 highlighting a bug where the `vela3-fast` decoder incorrectly processes text states containing JSON, leading its PII preset scans to misinterpret data. Additionally, issue #5664 calls for an update to the contributor documentation regarding the limit on open pull requests, pointing to ongoing efforts for better project management practices.

#### ✅ Merged PRs
- [#5175](https://github.com/vllm-project/semantic-router/pull/5175) [Test] Add E2E coverage for the preference signal's external path

#### 🐛 New Issues
- [#5664](https://github.com/vllm-project/semantic-router/issues/5664) [Docs] Update contributor docs with the open pull request limit `accepted` `wg/developer-experience-ecosystem` 💬2
- [#5668](https://github.com/vllm-project/semantic-router/issues/5668) zz permission probe 💬1
- [#5659](https://github.com/vllm-project/semantic-router/issues/5659) [Bug] vela3-fast decodes a text state that holds JSON, so its PII preset scans the wrong text `accepted` `wg/router-models-inference-runtime` 💬1
- [#5667](https://github.com/vllm-project/semantic-router/issues/5667) [Bug] HTTP embedding binding fails when llm_endpoint.address is a full URL and port is set `bug` `needs-acceptance` `wg/router-models-inference-runtime`
- [#5666](https://github.com/vllm-project/semantic-router/issues/5666) [Bug] Remote embedding provider construction errors panic the binding pool instead of returning an error `bug` `needs-acceptance` `wg/router-models-inference-runtime`
- [#5665](https://github.com/vllm-project/semantic-router/issues/5665) [Bug] Operator resets explicit false/0 spec fields to their CRD defaults `bug` `needs-acceptance` `wg/enterprise-environment`
- [#5661](https://github.com/vllm-project/semantic-router/issues/5661) [CI/Build] A queued pull request can stay BLOCKED with a green PR Gate, and re-running the cancelled run dequeues it `bug` `needs-acceptance` `wg/evaluation-quality`
- [#5662](https://github.com/vllm-project/semantic-router/issues/5662) [Bug] Preserve local config apply behavior on custom management endpoints `needs-acceptance` `wg/developer-experience-ecosystem`
- [#5655](https://github.com/vllm-project/semantic-router/issues/5655) [Bug] Chat stream fails at EOF even after receiving a valid finish_reason `needs-acceptance`

#### 🔒 Closed Issues
- [#5389](https://github.com/vllm-project/semantic-router/issues/5389) [Bug] CLI tests fail to collect on Python 3.10 because test_router_dockerfile.py imports tomllib
- [#5441](https://github.com/vllm-project/semantic-router/issues/5441) [Bug] Model runtime: the packed oneDNN linear is assumed batch-invariant by construction, but is not on torch 2.11, nor at every thread count on the pinned 2.10
- [#5507](https://github.com/vllm-project/semantic-router/issues/5507) [Bug] OpenRouter reasoning_details on message and delta fail strict decoding
- [#5026](https://github.com/vllm-project/semantic-router/issues/5026) [Feature] Document one torch build policy (CPU, CUDA, ROCm) for the training uv projects
- [#5611](https://github.com/vllm-project/semantic-router/issues/5611) [Feature] Model runtime: fold encoder LoRA scaling into the B factor
- [#5324](https://github.com/vllm-project/semantic-router/issues/5324) [Bug] Specify explicit UTF-8 encoding for config file operations in CLI
- [#5283](https://github.com/vllm-project/semantic-router/issues/5283) [Bug] vllm-sr advertises a Grafana URL whose application assets return 404
- [#5585](https://github.com/vllm-project/semantic-router/issues/5585) [Bug] Vela 3 package validation does not reject duplicate router question IDs
- [#5664](https://github.com/vllm-project/semantic-router/issues/5664) [Docs] Update contributor docs with the open pull request limit
- [#5506](https://github.com/vllm-project/semantic-router/issues/5506) [Bug] Perplexity Chat responses fail strict decoding on citations and search_results
- [#5594](https://github.com/vllm-project/semantic-router/issues/5594) [Bug] Two CPU E2E lanes fail since vela3-fast became the default model
- [#5605](https://github.com/vllm-project/semantic-router/issues/5605) [Bug] vela3-fast ignores Noul false and true descriptions
- [#5597](https://github.com/vllm-project/semantic-router/issues/5597) [Bug] CI controllers fail on the first rate-limited or 5xx API call and report it as a permissions problem
- [#5095](https://github.com/vllm-project/semantic-router/issues/5095) [Feature] pkg/inflight declares an RWMutex it never reads with, the convoy shape #4682 removed elsewhere
- [#5668](https://github.com/vllm-project/semantic-router/issues/5668) zz permission probe

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*