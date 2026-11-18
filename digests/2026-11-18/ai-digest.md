# 📡 AI Ecosystem Digest — 2026-11-18

> Generated 2026-11-18 04:02 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 156,060 | 31 | 4 | 0 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 135,683 | 14 | 2 | 48 | 5 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 108,909 | 0 | 0 | 6 | 0 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,428 | 12 | 12 | 0 | 2 |
| [OpenCode](https://github.com/anomalyco/opencode) | 227,647 | 40 | 22 | 13 | 3 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 30,734 | 33 | 2 | 5 | 4 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 394,695 | 151 | 111 | 220 | 1 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 264,261 | 29 | 0 | 3 | 1 |
| [vLLM](https://github.com/vllm-project/vllm) | 97,121 | 31 | 18 | 43 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 38,995 | 27 | 15 | 37 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 135,691 | 13 | 22 | 35 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 187,451 | 5 | 3 | 1 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 63,452 | 28 | 39 | 106 | 3 |
| [Unsloth](https://github.com/unslothai/unsloth) | 79,711 | 19 | 11 | 156 | 1 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,191 | 1 | 7 | 3 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,500 | 19 | 14 | 2 | 0 |

---

## ✨ Highlights

- **Claude Code** released version [v2.1.327](https://github.com/anthropics/claude-code/releases/tag/v2.1.327).
- **OpenAI Codex** had multiple releases including [rust-v0.171.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.171.0-alpha.12).
- **OpenClaw** released [v2026.11.5](https://github.com/openclaw/openclaw/releases/tag/v2026.11.5).
- A highly active issue in **OpenCode**, [#64543](https://github.com/anomalyco/opencode/issues/64543), regarding Chinese text display errors garnered **10 comments**.
- **Semantic Router** issue [#6811](https://github.com/vllm-project/semantic-router/issues/6811) on response guard features sparked considerable interest with **7 comments**.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 156,060 · **Open issues:** 17,104 · **Last push:** 1h ago

On November 18, 2026, Claude Code released version v2.1.327, which introduced important features such as a confirmation step before executing the `/install-github-app` command, the ability to read server JSON from standard input using `claude mcp add-json <name> -`, and enhancements to the session status report. No pull requests were merged in the last 24 hours, but several new issues were raised, including #110853 regarding false positives in the biology safety classifier, and #110856, which reports a bug affecting the iOS app's integration with Mac sessions. Other notable issues include #110861, highlighting unexpected archiving of sessions without user action, and #110852, a feature request for trackpad zoom functionality in Claude for Mac. Overall, the day was marked by the significant version update and several emerging bugs that require attention.

#### 🚀 New Releases
- [v2.1.327](https://github.com/anthropics/claude-code/releases/tag/v2.1.327) v2.1.327

#### 🐛 New Issues
- [#110853](https://github.com/anthropics/claude-code/issues/110853) Biology safety classifier false positives on routine cancer research (Fable 5.x, Opus 5.5), ongoing for months `bug` `area:model` 💬1
- [#110856](https://github.com/anthropics/claude-code/issues/110856) [BUG] iOS app never attaches a `mobile` surface for a Mac session, so plugin backdrops and UI don't draw `bug` `platform:macos` `platform:ios` `area:plugins` 💬1
- [#110627](https://github.com/anthropics/claude-code/issues/110627) **Feature Request: Shared Claude Code Projects for Team Collaboration** `enhancement` 💬1
- [#110845](https://github.com/anthropics/claude-code/issues/110845) [BUG] Desktop: plugin `$.ui.toast` shows in the main window, not the window holding the session `bug` `has repro` `platform:macos` `area:plugins` 💬1
- [#110833](https://github.com/anthropics/claude-code/issues/110833) todo bien `invalid` 💬1
- [#110862](https://github.com/anthropics/claude-code/issues/110862) [Bug] Repeated Refusal Blocking Legitimate Business Interface Development `bug` `platform:windows` `area:model` `needs-info`
- [#110861](https://github.com/anthropics/claude-code/issues/110861) [BUG] Sessions (including pinned ones) archived automatically without user action; unarchived Remote Control sessions cannot reconnect `bug` `platform:macos` `area:core`
- [#110860](https://github.com/anthropics/claude-code/issues/110860) [Bug] Model rationalizes moving public route to blueprint against instructions `bug` `platform:macos` `area:model` `needs-repro`
- [#110859](https://github.com/anthropics/claude-code/issues/110859) Edit diffs collapsed by default since a recent change; no notice, no setting to restore `enhancement` `platform:macos` `area:tui`
- [#110858](https://github.com/anthropics/claude-code/issues/110858) [Desktop] Prompt suggestions missing again in Code tab (regression after 5.1231.0 fix) `bug` `has repro` `platform:macos` `regression`
- [#110857](https://github.com/anthropics/claude-code/issues/110857) [BUG] CLAUDE.md @import is silently skipped when it follows an HTML/XML tag line without a blank line in between `bug` `has repro` `platform:macos` `area:core`
- [#110855](https://github.com/anthropics/claude-code/issues/110855) [FEATURE] VS Code extension: open and continue Remote Control sessions started on another machine `enhancement` `platform:linux` `area:ide` `platform:vscode`
- [#110854](https://github.com/anthropics/claude-code/issues/110854) [BUG] Claude Desktop (Windows/MSIX): startup hangs with hidden/blank main window when boot-time proxy resolution returns "proxied" (WPAD) `invalid`
- [#110852](https://github.com/anthropics/claude-code/issues/110852) [FEATURE] Claude for Mac: trackpad pinch-out / pinch-in to zoom text size `enhancement` `platform:macos` `area:desktop`
- [#110851](https://github.com/anthropics/claude-code/issues/110851) Claude in Chrome: chrome.tabs.group() never settles in Arc, so tabs_context_mcp(createIfEmpty) hangs and all browser tools time out `bug` `has repro` `platform:macos` `area:chrome`
- [#110850](https://github.com/anthropics/claude-code/issues/110850) [Bug] Claude Code deleted local repository via rmdir /s /q without request `bug` `platform:windows` `area:permissions` `data-loss`
- [#110723](https://github.com/anthropics/claude-code/issues/110723) [GitHub integration] `bug` `platform:web` `needs-info` `github-integration`
- [#110849](https://github.com/anthropics/claude-code/issues/110849) [BUG] Bash tool: commands containing a heredoc get an open, never-closed stdin, so any stray stdin reader hangs until the timeout `bug` `has repro` `platform:macos` `platform:vscode`
- [#110848](https://github.com/anthropics/claude-code/issues/110848) Mod themes not drawn when viewing a Remote Control session from the desktop app `bug` `area:desktop`
- [#110847](https://github.com/anthropics/claude-code/issues/110847) [BUG] Auto mode refuses Agent calls changed by a PreToolUse hook (updatedInput) instead of re-checking them (2.1.326+) `bug` `has repro` `platform:linux` `area:hooks`
- [#110846](https://github.com/anthropics/claude-code/issues/110846) [BUG] Desktop macOS 6.6395.0: no effort control or indicator in a Cowork cloud session - model menu shows only the model and "More models" `bug` `platform:macos` `area:cowork` `regression`
- [#110844](https://github.com/anthropics/claude-code/issues/110844) [GitHub integration] - Cannot find github repo on claude `bug` `area:claude-code-web` `platform:web` `github-integration`
- [#110843](https://github.com/anthropics/claude-code/issues/110843) [Bug] False-positive refusal for recruiting automation agent request `bug` `platform:windows` `area:model`
- [#110842](https://github.com/anthropics/claude-code/issues/110842) Project-level .claude/.agents directories lose files unpredictably, independent of container restarts (partial & full loss observed) `bug` `platform:linux` `area:core` `data-loss`
- [#110841](https://github.com/anthropics/claude-code/issues/110841) [BUG] Bash cd leaves a stale "Is a git repository" flag in the environment block and in forked agents `bug` `has repro` `platform:linux` `area:core`
- [#110840](https://github.com/anthropics/claude-code/issues/110840) [BUG] Mods: $.model.fork from a final-step turn.step hook doesn't see the turn's tool call `bug` `has repro` `platform:macos` `area:hooks`
- [#110839](https://github.com/anthropics/claude-code/issues/110839) [BUG] Mods: the model doesn't see a turn.step text rewrite with tether on in interactive sessions `bug` `has repro` `platform:macos` `area:hooks`
- [#110838](https://github.com/anthropics/claude-code/issues/110838) [Bug] Safeguards incorrectly blocking legitimate cybersecurity work `bug` `platform:linux` `area:model` `needs-info`
- [#110837](https://github.com/anthropics/claude-code/issues/110837) Bug: computer-use permission prompt is invisible in Project threads `bug` `platform:macos` `area:permissions` `area:desktop`
- [#110836](https://github.com/anthropics/claude-code/issues/110836) Hey guys, I'm back again with another feature request. So this is kind of diffe… `enhancement`
- [#110835](https://github.com/anthropics/claude-code/issues/110835) [BUG] Desktop: plan approval card buttons wrap into a staircase `bug` `platform:macos` `area:ui` `area:desktop`

#### 🔒 Closed Issues
- [#110856](https://github.com/anthropics/claude-code/issues/110856) [BUG] iOS app never attaches a `mobile` surface for a Mac session, so plugin backdrops and UI don't draw
- [#110860](https://github.com/anthropics/claude-code/issues/110860) [Bug] Model rationalizes moving public route to blueprint against instructions
- [#110723](https://github.com/anthropics/claude-code/issues/110723) [GitHub integration]
- [#110836](https://github.com/anthropics/claude-code/issues/110836) Hey guys, I'm back again with another feature request. So this is kind of diffe…

### OpenAI Codex (`openai/codex`)

**Stars:** 135,683 · **Open issues:** 27,708 · **Last push:** <1h ago

On November 18, 2026, the major release of rust-v0.170.0 introduced several key features, including WebRTC negotiation for real-time voice calls in the TUI and automatically refreshed authentication headers for OpenTelemetry HTTP exporters. Noteworthy merged pull requests included the enhancement of TUI user experience with anchors for the composer caret and fixes for stale terminal dimensions, along with improved integration tests for the app-server. Additionally, a significant new issue was reported (#62178), which relates to text disappearing or failing to appear in response fields, highlighting a potential user interface glitch that may impact user experience.

#### 🚀 New Releases
- [rust-v0.170.0](https://github.com/openai/codex/releases/tag/rust-v0.170.0) 0.170.0
- [rust-v0.170.0-alpha.4.2](https://github.com/openai/codex/releases/tag/rust-v0.170.0-alpha.4.2) 0.170.0-alpha.4.2
- [rust-v0.169.1](https://github.com/openai/codex/releases/tag/rust-v0.169.1) 0.169.1
- [rust-v0.171.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.171.0-alpha.12) 0.171.0-alpha.12
- [rust-v0.171.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.171.0-alpha.11) 0.171.0-alpha.11

#### ✅ Merged PRs
- [#62183](https://github.com/openai/codex/pull/62183) Select process sandboxes during launch preparation
- [#62176](https://github.com/openai/codex/pull/62176) Expose `bioPolicy` errors in app-server v2
- [#62175](https://github.com/openai/codex/pull/62175) Fix stale terminal dimensions in immediate TUI redraws
- [#62174](https://github.com/openai/codex/pull/62174) Keep the TUI composer caret anchored while typing
- [#62172](https://github.com/openai/codex/pull/62172) Remove Python from MCP permission request hook tests
- [#62171](https://github.com/openai/codex/pull/62171) Extract TUI thread resume finalization
- [#62165](https://github.com/openai/codex/pull/62165) Wait for the search connector in hosted web search tests
- [#62163](https://github.com/openai/codex/pull/62163) Move the app-server socket relay into the Codex CLI
- [#62162](https://github.com/openai/codex/pull/62162) Stabilize app-server `app/list` integration tests
- [#62160](https://github.com/openai/codex/pull/62160) Wait for the system `bwrap` probe with a pidfd
- [#62159](https://github.com/openai/codex/pull/62159) Open subagent transcripts from activity links in the TUI
- [#62157](https://github.com/openai/codex/pull/62157) Open subagent transcripts in the TUI sidebar
- [#62153](https://github.com/openai/codex/pull/62153) Reduce overhead in CLI integration tests
- [#62151](https://github.com/openai/codex/pull/62151) Limit recovery after repeated cloud reply stream disconnects
- [#62150](https://github.com/openai/codex/pull/62150) Cancel Cloud overview refreshes that block TUI navigation
- [#62149](https://github.com/openai/codex/pull/62149) Show subagents and their status in the TUI sidebar chooser
- [#62146](https://github.com/openai/codex/pull/62146) Batch mouse wheel scrolling in the TUI
- [#62145](https://github.com/openai/codex/pull/62145) Signal workspace routing readiness in account updates
- [#62144](https://github.com/openai/codex/pull/62144) Preserve web search provider ownership across thread resumes
- [#62142](https://github.com/openai/codex/pull/62142) Add audio transcription to the backend client
- [#62141](https://github.com/openai/codex/pull/62141) Repair missing or stale Windows sandbox Core registration
- [#62140](https://github.com/openai/codex/pull/62140) Hold Cloud reply streams until history can be refreshed
- [#62139](https://github.com/openai/codex/pull/62139) Update `crossterm` to fix stray input when scrolling
- [#62138](https://github.com/openai/codex/pull/62138) Use the state database first for TUI analytics thread lists
- [#62137](https://github.com/openai/codex/pull/62137) Remove fixed message-board views and bulk subscriptions
- [#62136](https://github.com/openai/codex/pull/62136) Deliver subscribed evidence to idle Guardian reviewers
- [#62135](https://github.com/openai/codex/pull/62135) Use live evidence retrieval and subscriber inboxes in Guardian
- [#62134](https://github.com/openai/codex/pull/62134) Add reusable per-agent reviewer conversations to Guardian v3
- [#62133](https://github.com/openai/codex/pull/62133) Add live evidence retrieval for Guardian v3 reviewers
- [#62132](https://github.com/openai/codex/pull/62132) Stream partial thread search results and support cancellation
- [#62131](https://github.com/openai/codex/pull/62131) Isolate auth storage attribution tests from account switches
- [#62129](https://github.com/openai/codex/pull/62129) Support enterprise MCP sign-in without refresh tokens
- [#62128](https://github.com/openai/codex/pull/62128) Preserve base and developer instructions in host child preparation
- [#62127](https://github.com/openai/codex/pull/62127) Use the local session index in the multi-backend resume picker
- [#62126](https://github.com/openai/codex/pull/62126) Share picker setup for the TUI status line and terminal title
- [#62125](https://github.com/openai/codex/pull/62125) Include classifier turn IDs in Guardian v2 analytics
- [#62124](https://github.com/openai/codex/pull/62124) Refresh tool hashes in core scenario snapshots
- [#62122](https://github.com/openai/codex/pull/62122) Restrict control of the Windows sandbox service
- [#62121](https://github.com/openai/codex/pull/62121) Add `/rc` to manage remote control from the TUI
- [#62120](https://github.com/openai/codex/pull/62120) Fix Node launcher detection in the standalone installer
- [#62116](https://github.com/openai/codex/pull/62116) Stabilize TUI startup tests and strengthen daemon recovery coverage
- [#62114](https://github.com/openai/codex/pull/62114) Add external header auth for existing realtime calls
- [#62112](https://github.com/openai/codex/pull/62112) Trust the bundled Memory session hook without saved hashes
- [#62110](https://github.com/openai/codex/pull/62110) Support OTel header helpers in local managed requirements
- [#62107](https://github.com/openai/codex/pull/62107) Log macOS user verification enrollment failure diagnostics
- [#62106](https://github.com/openai/codex/pull/62106) Add GPT-6.2 Sol and Astra to model catalogs
- [#62105](https://github.com/openai/codex/pull/62105) Preserve plugin runtimes across catalog metadata updates
- [#62103](https://github.com/openai/codex/pull/62103) Preserve trace context during WebSocket startup prewarm

#### 🐛 New Issues
- [#62178](https://github.com/openai/codex/issues/62178) Text disappears or fails to appear when typing into the in-prompt response fields `bug` `windows-os` `app` 💬1
- [#62170](https://github.com/openai/codex/issues/62170) [macOS][26.1111.21308] Runtime UI stuck on loading logo after 512 MiB RPC budget rejection and MessagePort closure `bug` `app` `app-server` 💬1
- [#62169](https://github.com/openai/codex/issues/62169) stream disconnected before completion: stream closed before response.completed `bug` `app` `connectivity` 💬1
- [#62182](https://github.com/openai/codex/issues/62182) [Windows desktop] OpenAI logo returns seconds after Home loads, even after reinstall (26.1111.2228.0) `bug` `windows-os` `app` `app-server`
- [#62181](https://github.com/openai/codex/issues/62181) Daybreak Blue toggle is missing in new chats but available in existing chats `bug` `windows-os` `app` `session`
- [#62180](https://github.com/openai/codex/issues/62180) Windows desktop: switching chats drops an unsent image attachment from a new chat draft `bug` `windows-os` `app` `session`
- [#62179](https://github.com/openai/codex/issues/62179) Windows desktop regression: elapsed time is missing while a Codex task is running `bug` `windows-os` `app`
- [#62177](https://github.com/openai/codex/issues/62177) [Enhancement] Remote compaction v2 error should surface when a proxy/relay dropped the compaction trigger `enhancement` `context` `app` `connectivity`
- [#62173](https://github.com/openai/codex/issues/62173) Side chat drops its current user instruction when a Notes write fails before new_context `bug` `context` `app` `memory`
- [#62168](https://github.com/openai/codex/issues/62168) Allow --oss / --local-provider to use user-defined [model_providers] entries `enhancement` `CLI` `custom-model` `config`
- [#62167](https://github.com/openai/codex/issues/62167) [Bug] Codex Remote: Cannot terminate running commands after usage limit is reached `bug` `rate-limits` `tool-calls` `remote`
- [#62166](https://github.com/openai/codex/issues/62166) PreToolUse: supported decision provenance and maintenance path after a denied exec_command `documentation` `app` `hooks`
- [#62164](https://github.com/openai/codex/issues/62164) Queued-messages rail stays collapsed after switching away and back (bundled Motion lacks exit re-entry fix) `bug` `app`
- [#62161](https://github.com/openai/codex/issues/62161) repeated approvals `bug` `sandbox` `TUI` `CLI`

#### 🔒 Closed Issues
- [#54979](https://github.com/openai/codex/issues/54979) TUI panics with "index outside of buffer" when the terminal shrinks before SIGWINCH is handled
- [#61554](https://github.com/openai/codex/issues/61554) CLI 0.169.0: input area jumps when shortcut hints disappear while typing

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 108,909 · **Open issues:** 736 · **Last push:** 2h ago

On November 18, 2026, there were no new releases for Gemini CLI. However, several significant pull requests were merged, including important fixes such as #30315, which enhances the CLI to detect local git clones from specified paths instead of the current working directory, and #30289, which modifies the CLI to disclose the canonical link path while setting the default consent prompt to 'no'. Additionally, the core was refactored in #30282 to utilize re2js for more efficient linear-time policy argument pattern evaluation. Routine maintenance was performed, highlighted by the dependency updates in #30321, ensuring the workspace and sandbox runtime packages are current. No new issues were reported today.

#### ✅ Merged PRs
- [#30342](https://github.com/google-gemini/gemini-cli/pull/30342) ci: pre-pull triage image and clear Docker login in dedup workflows
- [#30340](https://github.com/google-gemini/gemini-cli/pull/30340) fix(ide): use per-user discovery directory and atomic port file writes
- [#30315](https://github.com/google-gemini/gemini-cli/pull/30315) fix(cli): detect local git clone from CLI path instead of cwd
- [#30289](https://github.com/google-gemini/gemini-cli/pull/30289) fix(cli): disclose canonical link path and default consent prompt to no
- [#30321](https://github.com/google-gemini/gemini-cli/pull/30321) chore(deps): update workspace dependencies and sandbox runtime packages
- [#30282](https://github.com/google-gemini/gemini-cli/pull/30282) refactor(core): use re2js for linear-time policy argsPattern evaluation

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,428 · **Open issues:** 2,208 · **Last push:** 5h ago

On November 18, 2026, GitHub Copilot CLI saw the release of version 1.0.114-0, which includes several bug fixes, alongside version 1.0.113, which introduced a feature allowing administrators to disable the built-in Browser Use in managed settings, even during active sessions. There were no merged pull requests in the last 24 hours, but the team faced a notable influx of new issues, including a significant problem (#5497) where nested or scoped instructions are only recognized after invoking a `view`, causing subsequent edits and shell changes to be overlooked. Additionally, issue #5495 highlighted a conflict with the ChatGPT desktop app being blocked on Windows due to the built-in safety policy, while the Claude app remains unaffected.

#### 🚀 New Releases
- [v1.0.114-0](https://github.com/github/copilot-cli/releases/tag/v1.0.114-0) 1.0.114-0
- [v1.0.113](https://github.com/github/copilot-cli/releases/tag/v1.0.113) 1.0.113

#### 🐛 New Issues
- [#5497](https://github.com/github/copilot-cli/issues/5497) Nested/scoped instructions are only discovered after `view`, so edits, new files and shell changes skip them `triage`
- [#5496](https://github.com/github/copilot-cli/issues/5496) Repo instruction files are skipped on Windows when the repo is on a volume with no drive letter ("customization path changed to a reparse point") `triage`
- [#5495](https://github.com/github/copilot-cli/issues/5495) Computer Use: ChatGPT desktop app (OpenAI.Codex) blocked by built-in safety policy on Windows, Claude app allowed `triage`
- [#5494](https://github.com/github/copilot-cli/issues/5494) Fusion judge rejects completed cross-session actions after failing to find their evidence `triage`
- [#5493](https://github.com/github/copilot-cli/issues/5493) Fusion Cascade judges an empty solver result when new_context requests continuation `triage`
- [#5492](https://github.com/github/copilot-cli/issues/5492) 1.0.113: extensions importing @github/copilot-sdk fail with ERR_MODULE_NOT_FOUND; SDK renamed to @microsoft/copilot-sdk with no alias or release note `triage`
- [#5491](https://github.com/github/copilot-cli/issues/5491) `plugins.marketplaces.add`: large marketplaces download the whole repository with no progress, ignore cancellation, orphan git on exit and leave staging folders behind `triage`
- [#5490](https://github.com/github/copilot-cli/issues/5490) extensions_reload leaves an extension failed with "External tool name clash ... already registered by another connection" `triage`
- [#5489](https://github.com/github/copilot-cli/issues/5489) Docs Update - contributing instructions needs to be updated `triage`
- [#5488](https://github.com/github/copilot-cli/issues/5488) Emit structured warning/session event when <available_skills> is truncated by SKILL_CHAR_BUDGET `triage`
- [#5487](https://github.com/github/copilot-cli/issues/5487) Expose stable runtime turn IDs to built-in plugins `triage`
- [#5486](https://github.com/github/copilot-cli/issues/5486) Number the choices in ask_user single-select forms so a number key picks one `triage`

#### 🔒 Closed Issues
- [#4576](https://github.com/github/copilot-cli/issues/4576) includeCoAuthoredBy: false is not inherited by task subagents; their commits still get the Co-authored-by trailer
- [#5290](https://github.com/github/copilot-cli/issues/5290) missing --fusion-tier argument
- [#4674](https://github.com/github/copilot-cli/issues/4674) Resuming a session does not restore the custom agent (regression of #917)
- [#3106](https://github.com/github/copilot-cli/issues/3106) Task tool does not recognize new agents added after conversation start (hot-reload gap)
- [#2882](https://github.com/github/copilot-cli/issues/2882) MCP Sampling is Always Declined in Non-Interactive Mode
- [#4848](https://github.com/github/copilot-cli/issues/4848) /feedback: “Save feedback bundle” is easily mistaken for submitting feedback
- [#5165](https://github.com/github/copilot-cli/issues/5165) 1.0.98: Copilot Enterprise account routed to api.business.githubcopilot.com — 401 on model catalog, 'Authentication failed' despite valid token
- [#4804](https://github.com/github/copilot-cli/issues/4804) Local sandbox 'Authenticate gh' silently uses an unrelated cached fine-grained PAT instead of active gh OAuth session, with no visibility into which credential is chosen
- [#5318](https://github.com/github/copilot-cli/issues/5318) Copilot CLI grep compaction corrupts filenames and line numbers, and merges distinct files
- [#5180](https://github.com/github/copilot-cli/issues/5180) web_fetch rejects public domains resolved to Surge Fake-IP addresses on macOS (CLI 1.0.98)
- [#5122](https://github.com/github/copilot-cli/issues/5122) userPromptSubmitted: only the last plugin's additionalContext reaches the model (sessionStart was fixed in #3589)
- [#5365](https://github.com/github/copilot-cli/issues/5365) Sandbox: report the extra temp-storage read-write rule in sandbox.decision, and allow opting out

### OpenCode (`anomalyco/opencode`)

**Stars:** 227,647 · **Open issues:** 4,048 · **Last push:** <1h ago

On November 18, 2026, OpenCode released version 2.3.2, which introduced a significant update for GPT-6.2 prompt caching, allowing for efficient re-billing by caching system prompts on every Responses route. Version 2.3.1 also made notable improvements by enabling long-running shell commands to continue executing in the background after timing out, along with compacting sessions without additional wait time. Among the merged pull requests, features such as durable video jobs and command shortcut dispatching via keymap were added, while several critical fixes addressed system prompts and UI issues. A notable new issue reported is that Chinese text in session titles displays incorrectly when the UI locale is set to English, which is raising some user concerns.

#### 🚀 New Releases
- [v2.3.2](https://github.com/anomalyco/opencode/releases/tag/v2.3.2) v2.3.2
- [v2.3.1](https://github.com/anomalyco/opencode/releases/tag/v2.3.1) v2.3.1
- [v1.19.6](https://github.com/anomalyco/opencode/releases/tag/v1.19.6) v1.19.6

#### ✅ Merged PRs
- [#64555](https://github.com/anomalyco/opencode/pull/64555) feat(core): read Console artifacts
- [#64576](https://github.com/anomalyco/opencode/pull/64576) fix(app): keep code block borders under the action fill
- [#64394](https://github.com/anomalyco/opencode/pull/64394) feat(app): dispatch command shortcuts through @opentui/keymap
- [#64546](https://github.com/anomalyco/opencode/pull/64546) feat(core): durable video jobs
- [#64407](https://github.com/anomalyco/opencode/pull/64407) feat(app): add experimental tab groups to side tabs
- [#64565](https://github.com/anomalyco/opencode/pull/64565) fix(app): stop the timeline crashing when a row leaves mid-update
- [#64545](https://github.com/anomalyco/opencode/pull/64545) feat(app): wrap long lines in timeline code blocks
- [#64518](https://github.com/anomalyco/opencode/pull/64518) feat(core): add Bun.file, Bun.write and Bun.Glob to Code Mode behind full_codemode
- [#64544](https://github.com/anomalyco/opencode/pull/64544) fix(ai): send the system prompt as a developer message on every Responses route
- [#64542](https://github.com/anomalyco/opencode/pull/64542) fix(ai): send the OpenAI system prompt as a developer message
- [#64516](https://github.com/anomalyco/opencode/pull/64516) feat(codemode): let an extension name the modules that load its globals
- [#64534](https://github.com/anomalyco/opencode/pull/64534) refactor(core): drop url and format from webfetch output
- [#64533](https://github.com/anomalyco/opencode/pull/64533) fix(core): let either Claude Code flag disable every CLAUDE.md

#### 🐛 New Issues
- [#64543](https://github.com/anomalyco/opencode/issues/64543) Chinese text (session titles) shows wrong characters when the UI locale is English `type/bug` `area/desktop` `version/v2` `platform/macos` 💬10
- [#64481](https://github.com/anomalyco/opencode/issues/64481) Failed provider response (response.failed) is persisted as a tool call with empty arguments, then the session loops on "Invalid arguments ... {}" `type/bug` `area/core` `inference/go` `version/v2` 💬6
- [#64539](https://github.com/anomalyco/opencode/issues/64539) bug test `pending close` `triaging` 💬5
- [#64558](https://github.com/anomalyco/opencode/issues/64558) Subagent completion silently skipped when assistant message spans execution-period boundary `type/bug` `area/core` `version/v2` `platform/linux` 💬3
- [#64416](https://github.com/anomalyco/opencode/issues/64416) [Bug][V2.3.0] OVHcloud Qwen3.8-27B fails with missing finish_reason - working workaround `type/bug` `area/providers` `version/v2` `platform/linux` 💬3
- [#64538](https://github.com/anomalyco/opencode/issues/64538) [TUI] Inconsistent text width calculation may cause incorrect truncation `pending close` `triaging` `type/bug` `area/tui` 💬3
- [#64537](https://github.com/anomalyco/opencode/issues/64537) [FEATURE]:feature_later `pending close` `triaging` `type/feature` 💬3
- [#64500](https://github.com/anomalyco/opencode/issues/64500) Compaction crash: TypeError "p.content.flatMap is not a function" when auto-compaction triggers while a tool call is still in-flight `type/bug` `area/core` `version/v2` `platform/macos` 💬2
- [#64495](https://github.com/anomalyco/opencode/issues/64495) web: new session can't target a git worktree; location chips are not clickable `type/bug` `area/web` `version/v2` `platform/macos` 💬2
- [#64494](https://github.com/anomalyco/opencode/issues/64494) sessions: pre-upgrade sessions invisible after upgrade - imported projects unresolvable, duplicate projects minted `type/bug` `area/sessions-storage` `version/v2` `platform/windows` 💬2
- [#64551](https://github.com/anomalyco/opencode/issues/64551) [FEATURE]:a `triaging` 💬2
- [#64550](https://github.com/anomalyco/opencode/issues/64550) GPT-6.2: system prompt in top-level `instructions` is excluded from prompt caching `type/bug` `area/providers` `version/v2` 💬2
- [#64489](https://github.com/anomalyco/opencode/issues/64489) models: catalog cache does not refresh; stale registry hides newly released models until the service is restarted `type/bug` `area/providers` `version/v2` `platform/macos` 💬2
- [#64488](https://github.com/anomalyco/opencode/issues/64488) Context percentage in UI can exceed 100% — appears to use cumulative session tokens instead of live context window `triaging` `type/bug` 💬2
- [#64479](https://github.com/anomalyco/opencode/issues/64479) server: Code Mode catalog system-update re-injected after every message following service restart `type/bug` `area/core` `version/v2` `platform/windows` 💬2
- [#64480](https://github.com/anomalyco/opencode/issues/64480) Keep getting this error when lauching opencode `triaging` `type/bug` `area/sessions-storage` 💬2
- [#64419](https://github.com/anomalyco/opencode/issues/64419) [FEATURE]: a 60-second way for opencode to prove "done" `type/feature` `area/mcp` 💬2
- [#64507](https://github.com/anomalyco/opencode/issues/64507) models: Jev 1.13 enabled in Console is missing from OpenCode Go/Zen model list 💬2
- [#64581](https://github.com/anomalyco/opencode/issues/64581) Что с лимитами, или я что то делаю не так? `type/support` `area/desktop` `inference/free-tier` 💬1
- [#64578](https://github.com/anomalyco/opencode/issues/64578) [FEATURE]:[FEATURE]: desktop: setting to stop the timeline following streamed output `type/feature` `area/desktop` `version/v2` `platform/windows` 💬1
- [#64573](https://github.com/anomalyco/opencode/issues/64573) shell: cmd on Windows escapes embedded double quotes in every command `type/bug` `status/repro-plausible` `area/core` `version/v2` 💬1
- [#64570](https://github.com/anomalyco/opencode/issues/64570) desktop: model picker stutters on hover and scroll `type/bug` `area/desktop` `version/v2` `platform/macos` 💬1
- [#64569](https://github.com/anomalyco/opencode/issues/64569) desktop: project panel loses pre-update projects after migration (empty project_directory, NULL names) `type/bug` `area/sessions-storage` `version/v2` `platform/windows` 💬1
- [#64566](https://github.com/anomalyco/opencode/issues/64566) desktop: New timeline collapses completed thinking even when detail is "expanded" `type/feature` `area/desktop` `version/v2` `platform/windows` 💬1
- [#64563](https://github.com/anomalyco/opencode/issues/64563) 我还没用，刚开始用，就提示我今天的免费额度用完了 `type/bug` `area/providers` `inference/free-tier` 💬1
- [#64560](https://github.com/anomalyco/opencode/issues/64560) config: allow an explicit model whitelist, with OpenRouter presets as first-class model definitions `type/feature` `area/providers` `version/v2` `platform/windows` 💬1
- [#64562](https://github.com/anomalyco/opencode/issues/64562) cli: unsigned helper binary is downloaded and executed at runtime, blocked by Application Control on managed Windows `type/bug` `area/core` `version/v2` `platform/windows` 💬1
- [#64561](https://github.com/anomalyco/opencode/issues/64561) desktop: no discoverable path to add or replace an API key, and no way to manage preset model entries `type/feature` `area/desktop` `version/v2` `platform/windows` 💬1
- [#64557](https://github.com/anomalyco/opencode/issues/64557) zen/go: Gemini 4 Argon returns upstream 403 "Request rejected in accordance with our terms of use and policies" `type/bug` `status/repro-simulated` `area/providers` `inference/go` 💬1
- [#64553](https://github.com/anomalyco/opencode/issues/64553) compaction: an unreachable agents.compaction.model fails every summary instead of using the session model `type/feature` `area/core` `version/v2` `platform/windows` 💬1
- [#64541](https://github.com/anomalyco/opencode/issues/64541) [FEATURE]:t `type/feature` `area/providers` 💬1
- [#64549](https://github.com/anomalyco/opencode/issues/64549) [FEATURE]: tabs.unread_fallback setting for next/previous unread tab + toast `type/feature` `area/tui` `version/v2` 💬1
- [#64540](https://github.com/anomalyco/opencode/issues/64540) [i18n]: missing English keys in every locale cause mixed-language UI `type/bug` `status/repro-plausible` `area/web` `version/v2` 💬1
- [#64536](https://github.com/anomalyco/opencode/issues/64536) [FEATURE]:opencode `type/feature` `area/providers` `version/v2` 💬1
- [#64535](https://github.com/anomalyco/opencode/issues/64535) [FEATURE]:test request `triaging` 💬1
- [#64531](https://github.com/anomalyco/opencode/issues/64531) Menu Overlap `type/bug` `area/desktop` 💬1
- [#64529](https://github.com/anomalyco/opencode/issues/64529) tui: <leader>q is bound to both app.exit and session.queued_prompts `type/bug` `area/tui` `version/v2` `platform/windows` 💬1
- [#64526](https://github.com/anomalyco/opencode/issues/64526) desktop: "Loaded <skill> skill" tool row cannot be expanded to show skill contents `type/feature` `area/desktop` `version/v2` `platform/macos` 💬1
- [#64522](https://github.com/anomalyco/opencode/issues/64522) Opening mini-tabs `type/bug` `status/repro-plausible` `area/desktop` `version/v2` 💬1
- [#64519](https://github.com/anomalyco/opencode/issues/64519) The check for updates from the web UI doesn't work `reproduced` `type/bug` `area/web` `version/v2` 💬1

#### 🔒 Closed Issues
- [#63944](https://github.com/anomalyco/opencode/issues/63944) desktop: renderer Match/exhaustive absurd in renderRow during generation (FR, 2.3.0)
- [#64481](https://github.com/anomalyco/opencode/issues/64481) Failed provider response (response.failed) is persisted as a tool call with empty arguments, then the session loops on "Invalid arguments ... {}"
- [#60143](https://github.com/anomalyco/opencode/issues/60143) desktop: code blocks hide horizontal scrollbars and cannot wrap long lines
- [#64539](https://github.com/anomalyco/opencode/issues/64539) bug test
- [#62800](https://github.com/anomalyco/opencode/issues/62800) desktop: fatal 'Expected a user-message timeline row' when a virtualized row changes type
- [#64537](https://github.com/anomalyco/opencode/issues/64537) [FEATURE]:feature_later
- [#64500](https://github.com/anomalyco/opencode/issues/64500) Compaction crash: TypeError "p.content.flatMap is not a function" when auto-compaction triggers while a tool call is still in-flight
- [#64495](https://github.com/anomalyco/opencode/issues/64495) web: new session can't target a git worktree; location chips are not clickable
- [#64494](https://github.com/anomalyco/opencode/issues/64494) sessions: pre-upgrade sessions invisible after upgrade - imported projects unresolvable, duplicate projects minted
- [#64551](https://github.com/anomalyco/opencode/issues/64551) [FEATURE]:a
- [#64550](https://github.com/anomalyco/opencode/issues/64550) GPT-6.2: system prompt in top-level `instructions` is excluded from prompt caching
- [#64489](https://github.com/anomalyco/opencode/issues/64489) models: catalog cache does not refresh; stale registry hides newly released models until the service is restarted
- [#64488](https://github.com/anomalyco/opencode/issues/64488) Context percentage in UI can exceed 100% — appears to use cumulative session tokens instead of live context window
- [#64479](https://github.com/anomalyco/opencode/issues/64479) server: Code Mode catalog system-update re-injected after every message following service restart
- [#64480](https://github.com/anomalyco/opencode/issues/64480) Keep getting this error when lauching opencode
- [#64581](https://github.com/anomalyco/opencode/issues/64581) Что с лимитами, или я что то делаю не так?
- [#64563](https://github.com/anomalyco/opencode/issues/64563) 我还没用，刚开始用，就提示我今天的免费额度用完了
- [#64562](https://github.com/anomalyco/opencode/issues/64562) cli: unsigned helper binary is downloaded and executed at runtime, blocked by Application Control on managed Windows
- [#64541](https://github.com/anomalyco/opencode/issues/64541) [FEATURE]:t
- [#64536](https://github.com/anomalyco/opencode/issues/64536) [FEATURE]:opencode
- [#64535](https://github.com/anomalyco/opencode/issues/64535) [FEATURE]:test request
- [#64531](https://github.com/anomalyco/opencode/issues/64531) Menu Overlap

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 30,734 · **Open issues:** 2,440 · **Last push:** <1h ago

On November 18, 2026, Qwen Code released version v0.28.1-preview.0, which included enhancements to the managed agent's testing to observe real scheduled loop fires and improvements to the verification process for pull requests. Version v0.28.0 was also released, adding a sidebar workspace filter for the web shell and a DingTalk adapter for managed channels. Significant merged pull requests included fixes for the Grep fallback strategies within the core, enhancements to outbound webhook delivery in the channels, and improvements to deep linking in the web shell prior to authentication. Among the newly reported issues, a notable concern was raised regarding non-UTF8 corpus paths affecting Grep fallback strategies, highlighting potential performance anomalies.

#### 🚀 New Releases
- [v0.28.1-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.28.1-preview.0) Release v0.28.1-preview.0
- [v0.28.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.28.0) Release v0.28.0
- [sdk-typescript-v0.1.35](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.35) SDK TypeScript Release v0.1.35
- [desktop-v0.28.0](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.28.0) Qwen Code Desktop v0.28.0

#### ✅ Merged PRs
- [#17530](https://github.com/QwenLM/qwen-code/pull/17530) fix(core): scope Grep fallback strategies to the git-aware corpus
- [#17610](https://github.com/QwenLM/qwen-code/pull/17610) feat(channels): add generic outbound webhook delivery
- [#17119](https://github.com/QwenLM/qwen-code/pull/17119) fix(web-shell): serve PR watch deep links before authentication
- [#17401](https://github.com/QwenLM/qwen-code/pull/17401) fix(web-shell): bottom-sheet model picker on touch screens
- [#17465](https://github.com/QwenLM/qwen-code/pull/17465) fix(core): converge Read unchanged-dedup with the preview lineage

#### 🐛 New Issues
- [#17682](https://github.com/QwenLM/qwen-code/issues/17682) Grep fallback follow-ups: non-UTF8 corpus paths and vendored ripgrep performance anomaly `priority/P2` `type/bug` `category/core` `scope/core` 💬5
- [#17517](https://github.com/QwenLM/qwen-code/issues/17517) Aone channel: follow-up on deferred non-blocking review suggestions from #17442 (R4) `priority/P3` `category/integration` `type/enhancement` 💬5
- [#17678](https://github.com/QwenLM/qwen-code/issues/17678) [managed-agent] shell Workspace 会话在 external 绑定上必被 409 workspace_unavailable 拒认（三处准入缺陷） `status/need-information` `area: managed` `managed-agent-server` 💬3
- [#17666](https://github.com/QwenLM/qwen-code/issues/17666) Feature request: make the built-in image_gen tool work with Qwen subscription auth `priority/P2` `type/feature-request` `category/tools` `scope/content-generation` 💬3
- [#17673](https://github.com/QwenLM/qwen-code/issues/17673) Follow-up hardening of the managed /loop guards deferred from #17594 `priority/P3` `type/feature-request` `category/development` `scope/testing` 💬3
- [#17559](https://github.com/QwenLM/qwen-code/issues/17559) Web Shell: user prompt sent while a turn is in flight is not recorded in the session transcript (mid-turn drain path) `status/need-information` `priority/P2` `type/bug` `category/core` 💬3
- [#17640](https://github.com/QwenLM/qwen-code/issues/17640) bug(sdk-java): failed client initialization leaves child processes alive `priority/P2` `type/bug` `category/integration` `scope/sdk` 💬3
- [#17641](https://github.com/QwenLM/qwen-code/issues/17641) bug(sdk-java): simpleQuery discards assistant tool-use input `priority/P2` `type/bug` `category/integration` `scope/sdk` 💬3
- [#17642](https://github.com/QwenLM/qwen-code/issues/17642) bug(sdk-java): file read responses join text lines with path separators `priority/P2` `type/bug` `category/integration` `scope/file-operations` 💬3
- [#17656](https://github.com/QwenLM/qwen-code/issues/17656) fix(java): assistant content callbacks lose received message UUIDs `priority/P2` `type/bug` `category/integration` `scope/sdk` 💬3
- [#17558](https://github.com/QwenLM/qwen-code/issues/17558) deflake: packages/channels/dingtalk/src/managed-dingtalk-adapter.test.ts › managed DingTalk adapter inbound > a webhook-less frame admitted on the cache refreshes recency (R3-4) `priority/P2` `type/bug` `category/development` `scope/testing` 💬3
- [#17600](https://github.com/QwenLM/qwen-code/issues/17600) fix(sdk-java): closing a quiet process transport blocks on reader locks `priority/P2` `type/bug` `category/integration` `scope/sdk` 💬3
- [#17601](https://github.com/QwenLM/qwen-code/issues/17601) fix(sdk-java): process transports corrupt UTF-8 under a non-UTF-8 JVM default `priority/P2` `type/bug` `category/development` `scope/sdk` 💬3
- [#17602](https://github.com/QwenLM/qwen-code/issues/17602) fix(sdk-java): Session.cancel sends an unscoped JSON-RPC request `priority/P2` `type/bug` `category/integration` `scope/sdk` 💬3
- [#17625](https://github.com/QwenLM/qwen-code/issues/17625) fix(sdk-java): ACP load and prompt silently accept JSON-RPC errors `priority/P2` `type/bug` `category/integration` `scope/sdk` 💬3
- [#17679](https://github.com/QwenLM/qwen-code/issues/17679) Grep: define fallback scope when the Git corpus is unavailable or filenames are not UTF-8 `priority/P2` `status/blocked` `type/bug` `category/tools` 💬2
- [#17683](https://github.com/QwenLM/qwen-code/issues/17683) feat(cli): middle-click PRIMARY selection paste in OpenTUI on Linux `priority/P3` `type/feature-request` `category/cli` `scope/interactive` 💬2
- [#17674](https://github.com/QwenLM/qwen-code/issues/17674) A settings.json without $version that sets general.disableAutoUpdate is ignored and auto-update stays on `priority/P2` `type/bug` `category/configuration` `scope/settings` 💬2
- [#17669](https://github.com/QwenLM/qwen-code/issues/17669) run_shell_command loses stdout/stderr attribution and exposes ambiguous Error: (none) `priority/P2` `type/bug` `category/tools` `scope/shell` 💬2
- [#17670](https://github.com/QwenLM/qwen-code/issues/17670) ask_user_question: a multi-select answer can still change during the 150 ms pause after Enter `status/in-progress` `priority/P2` `type/bug` `category/cli` 💬2
- [#17668](https://github.com/QwenLM/qwen-code/issues/17668) read_file reports nonexistent range 'Showing lines 6-6 of 5' at EOF `priority/P3` `type/bug` `category/core` `scope/file-operations` 💬2
- [#17667](https://github.com/QwenLM/qwen-code/issues/17667) Persistent user rules stored in memory are advisory-only — no enforcement, no violation detection `priority/P3` `type/feature-request` `category/core` `scope/memory` 💬2
- [#17659](https://github.com/QwenLM/qwen-code/issues/17659) custom provider api key env refs never resolve at startup, providers get built from raw settings text `priority/P1` `type/bug` `category/cli` `scope/api-keys` 💬2
- [#17635](https://github.com/QwenLM/qwen-code/issues/17635) bug(core): Git worktrees ignore repository info/exclude rules `priority/P2` `type/bug` `category/core` `scope/git` 💬2
- [#17639](https://github.com/QwenLM/qwen-code/issues/17639) bug(sdk): transcript renderers drop user-executed shell output `priority/P2` `type/bug` `category/core` `daemon` 💬2
- [#17645](https://github.com/QwenLM/qwen-code/issues/17645) fix(cli): shell commands submitted during history loading can lose saved history `priority/P2` `type/bug` `category/ui` `scope/interactive` 💬2
- [#17646](https://github.com/QwenLM/qwen-code/issues/17646) fix(sdk): unused event iterator cleanup releases another active subscription `priority/P2` `type/bug` `category/integration` `scope/session-management` 💬2
- [#17647](https://github.com/QwenLM/qwen-code/issues/17647) fix(sdk): clean connection SSE EOF leaves ACP requests pending `priority/P2` `type/bug` `category/integration` `scope/sdk` 💬2
- [#17648](https://github.com/QwenLM/qwen-code/issues/17648) bug(web-shell): Worktree restore can deadlock behind cron questions `priority/P1` `type/bug` `category/cli` `scope/session-management` 💬2
- [#17650](https://github.com/QwenLM/qwen-code/issues/17650) fix(cli): reverse history search reuses matches from a replaced history source `priority/P2` `type/bug` `category/cli` `scope/interactive` 💬2
- [#17657](https://github.com/QwenLM/qwen-code/issues/17657) fix(web-shell): cancelled image batches keep starting queued file reads `priority/P3` `type/bug` `category/ui` `scope/web-shell` 💬2
- [#17658](https://github.com/QwenLM/qwen-code/issues/17658) fix(sdk): asynchronous child stdin errors can crash the host process `priority/P2` `type/bug` `category/integration` `scope/sdk` 💬2
- [#17671](https://github.com/QwenLM/qwen-code/issues/17671) Release Failed for v0.28.0-nightly.20261117.b9da38c7bd on 2026-11-17 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1

#### 🔒 Closed Issues
- [#16718](https://github.com/QwenLM/qwen-code/issues/16718) docs(providers): Standard Compute in the OpenAI-compatible providers section
- [#17558](https://github.com/QwenLM/qwen-code/issues/17558) deflake: packages/channels/dingtalk/src/managed-dingtalk-adapter.test.ts › managed DingTalk adapter inbound > a webhook-less frame admitted on the cache refreshes recency (R3-4)

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

**Stars:** 394,695 · **Open issues:** 8,290 · **Last push:** <1h ago

On November 18, 2026, OpenClaw released version 2026.11.5, which introduced notable enhancements including restart-safe conversations that retain queued messages and permissions across Gateway restarts, as well as safer updates that rollback activated updates in case of failures. Key merged contributions included a feature to allow plugins to add metric families to the diagnostics Prometheus route and fixes ensuring the Gateway remains responsive during web page extraction. Additionally, users reported significant issues with the new version, particularly concerning update failures due to plugin migration conflicts and difficulties encountered when installing on Windows, highlighting ongoing challenges with compatibility and functionality.

#### 🚀 New Releases
- [v2026.11.5](https://github.com/openclaw/openclaw/releases/tag/v2026.11.5) openclaw 2026.11.5

#### ✅ Merged PRs
- [#200969](https://github.com/openclaw/openclaw/pull/200969) test(ui): park the pointer outside the rail between titlebar trial clicks
- [#200925](https://github.com/openclaw/openclaw/pull/200925) fix: keep the Gateway responsive while extracting web pages
- [#200952](https://github.com/openclaw/openclaw/pull/200952) fix: assign requested sessions and automations to the person who asked
- [#200968](https://github.com/openclaw/openclaw/pull/200968) chore(release): update appcast for 2026.11.5
- [#200896](https://github.com/openclaw/openclaw/pull/200896) fix(ci): distinguish PR acceptance scans from prehashing
- [#200963](https://github.com/openclaw/openclaw/pull/200963) fix: replace superseded model recommendations
- [#200817](https://github.com/openclaw/openclaw/pull/200817) feat(ui): describe automation schedules as a sentence
- [#200960](https://github.com/openclaw/openclaw/pull/200960) docs: show a temporary notice for the 2026.11.5 release notes
- [#200866](https://github.com/openclaw/openclaw/pull/200866) fix: let the next update finish a killed update that had already installed the new version
- [#198455](https://github.com/openclaw/openclaw/pull/198455) feat(diagnostics-prometheus): let plugins add metric families to the scrape route
- [#200951](https://github.com/openclaw/openclaw/pull/200951) fix(ui): scroll Activity from the side margins
- [#200533](https://github.com/openclaw/openclaw/pull/200533) fix(sessions): record queued input end causes and recover them across crashes
- [#200950](https://github.com/openclaw/openclaw/pull/200950) fix(codex): reduce CPU and allocation while streaming long answers
- [#200957](https://github.com/openclaw/openclaw/pull/200957) fix: keep background completion attempts out of Activity recency
- [#200941](https://github.com/openclaw/openclaw/pull/200941) fix: reduce sandbox preparation and resume delays
- [#200883](https://github.com/openclaw/openclaw/pull/200883) fix: dismiss old questions after sending a new prompt
- [#200948](https://github.com/openclaw/openclaw/pull/200948) fix(test): complete automation inspection history fixture
- [#200943](https://github.com/openclaw/openclaw/pull/200943) test(agents): cover spawn billing through its public owner
- [#197777](https://github.com/openclaw/openclaw/pull/197777) improve(backup): faster PostgreSQL export hashing for blob-heavy stores
- [#200935](https://github.com/openclaw/openclaw/pull/200935) fix(ci): keep cron advanced fields private
- [#200945](https://github.com/openclaw/openclaw/pull/200945) feat: recommend GPT-6.2 and Qwen4 successors
- [#200924](https://github.com/openclaw/openclaw/pull/200924) fix: finish replies to subagent results after a Gateway restart
- [#200897](https://github.com/openclaw/openclaw/pull/200897) test(ui): expect the action summary label on heartbeat rollups
- [#200917](https://github.com/openclaw/openclaw/pull/200917) fix: explain failed local workspace reconciliation
- [#200918](https://github.com/openclaw/openclaw/pull/200918) fix: stop completion retries into removed worktrees
- [#200927](https://github.com/openclaw/openclaw/pull/200927) fix: stop stalled GitHub requests from hanging Code Mode turns
- [#191324](https://github.com/openclaw/openclaw/pull/191324) improve(agents): name the child's runtime and credential on spawn receipts
- [#200870](https://github.com/openclaw/openclaw/pull/200870) Revert "fix(openai): show newer subscription models in the picker"
- [#200860](https://github.com/openclaw/openclaw/pull/200860) fix(ci): keep requester wake progress error private
- [#200915](https://github.com/openclaw/openclaw/pull/200915) fix(agents): preserve caller cleanup context while streaming
- [#200899](https://github.com/openclaw/openclaw/pull/200899) perf(gateway): avoid repeated session-list invalidation scans
- [#200919](https://github.com/openclaw/openclaw/pull/200919) chore(ui): refresh control ui locales
- [#200900](https://github.com/openclaw/openclaw/pull/200900) fix(codex): preserve native launch errors on Node 24
- [#200903](https://github.com/openclaw/openclaw/pull/200903) fix: preserve QA evidence when runtime fixtures fail
- [#197402](https://github.com/openclaw/openclaw/pull/197402) feat: customize agent welcome prompts
- [#200808](https://github.com/openclaw/openclaw/pull/200808) improve(ui): redesign the automation page around its prompt and results
- [#200853](https://github.com/openclaw/openclaw/pull/200853) fix: keep expanded sidebar sessions from overlapping
- [#200809](https://github.com/openclaw/openclaw/pull/200809) fix: let agents repair config when the setup helper cannot run
- [#200769](https://github.com/openclaw/openclaw/pull/200769) fix: allow uninstall on Linux hosts without a service manager
- [#200898](https://github.com/openclaw/openclaw/pull/200898) fix: explain when policy skips an advisor review
- [#200847](https://github.com/openclaw/openclaw/pull/200847) test(ui): load the sidebar Pages stylesheet in the Pages layout case
- [#200807](https://github.com/openclaw/openclaw/pull/200807) fix(subagents): fail children interrupted by a Gateway crash
- [#200888](https://github.com/openclaw/openclaw/pull/200888) improve: reduce allocation when preparing long conversations
- [#200889](https://github.com/openclaw/openclaw/pull/200889) improve: reduce allocation while streaming model replies
- [#200873](https://github.com/openclaw/openclaw/pull/200873) fix: preserve subagent results under each requester turn
- [#200887](https://github.com/openclaw/openclaw/pull/200887) fix: show distinct shared icons for chat panels
- [#200894](https://github.com/openclaw/openclaw/pull/200894) chore(ui): refresh control ui locales
- [#200842](https://github.com/openclaw/openclaw/pull/200842) fix: keep owner device approval working when the Gateway connection drops
- [#199343](https://github.com/openclaw/openclaw/pull/199343) fix: message from a scheduled run to a busy Claude CLI session fails once the run ends
- [#200628](https://github.com/openclaw/openclaw/pull/200628) fix(templates): allow re-adding a deleted template agent (#198475)
- [#200818](https://github.com/openclaw/openclaw/pull/200818) fix(ci): provision Bun for native filesystem tests
- [#200872](https://github.com/openclaw/openclaw/pull/200872) fix(ui): summarize chat activity by action instead of tool name
- [#200783](https://github.com/openclaw/openclaw/pull/200783) fix(path): read and edit Markdown with carriage-return line endings
- [#200846](https://github.com/openclaw/openclaw/pull/200846) fix: finish A2A tasks for messages sent while the agent is still answering
- [#200841](https://github.com/openclaw/openclaw/pull/200841) docs: publish release notes for v2026.11.5
- [#200874](https://github.com/openclaw/openclaw/pull/200874) fix: preserve pending tools in watchdog stop diagnostics
- [#200458](https://github.com/openclaw/openclaw/pull/200458) fix: keep slash commands in ordinary prose from executing
- [#200828](https://github.com/openclaw/openclaw/pull/200828) fix: shorten pauses after workspace-changing commands
- [#200742](https://github.com/openclaw/openclaw/pull/200742) fix: stop updates failing with "database is locked" when another OpenClaw process is writing
- [#200801](https://github.com/openclaw/openclaw/pull/200801) fix: stop a long Claude CLI turn from redoing its tool work on the fallback model
- [#200844](https://github.com/openclaw/openclaw/pull/200844) fix: keep model favorite hover icon-only
- [#200868](https://github.com/openclaw/openclaw/pull/200868) fix(test): isolate source history benchmark transform cache
- [#200845](https://github.com/openclaw/openclaw/pull/200845) fix(worktrees): report when provisioning falls back from reflinks
- [#200864](https://github.com/openclaw/openclaw/pull/200864) fix: start fresh catalog discovery after publication
- [#200865](https://github.com/openclaw/openclaw/pull/200865) test: wait for Buzz cold-start publications
- [#200856](https://github.com/openclaw/openclaw/pull/200856) fix(release): recover failed plugin artifact preparation
- [#200378](https://github.com/openclaw/openclaw/pull/200378) fix(ui): keep lazy panel menu actions ready for selection
- [#200843](https://github.com/openclaw/openclaw/pull/200843) fix: give the sidebar browser address more breathing room
- [#200465](https://github.com/openclaw/openclaw/pull/200465) fix: avoid false identity errors when unlinked channel users create sessions
- [#200559](https://github.com/openclaw/openclaw/pull/200559) chore: retire June upgrade baselines from release validation
- [#200839](https://github.com/openclaw/openclaw/pull/200839) fix: name paused Code Mode waits in stall diagnostics
- [#200784](https://github.com/openclaw/openclaw/pull/200784) fix: update bundled Codex for newer ChatGPT models
- [#200834](https://github.com/openclaw/openclaw/pull/200834) fix: avoid reinstalling unchanged ClawHub plugins
- [#200827](https://github.com/openclaw/openclaw/pull/200827) fix: keep chat backgrounds visible when switching sessions
- [#200741](https://github.com/openclaw/openclaw/pull/200741) fix: let agents ignore phone notifications without falling back to a paid model
- [#200226](https://github.com/openclaw/openclaw/pull/200226) fix(claude-cli): completion turns lose child results above 10,000 characters
- [#200838](https://github.com/openclaw/openclaw/pull/200838) fix(qa): select maintained Automations scenarios
- [#200823](https://github.com/openclaw/openclaw/pull/200823) fix: keep subagent results owed after a Gateway restart
- [#200577](https://github.com/openclaw/openclaw/pull/200577) chore(release): close out 2026.11.5 on main
- [#199712](https://github.com/openclaw/openclaw/pull/199712) improve(backup): use spare cores for gzip on larger hosts
- [#197768](https://github.com/openclaw/openclaw/pull/197768) fix(codex): model catalog requests fail through the inference relay
- [#200829](https://github.com/openclaw/openclaw/pull/200829) fix: use canonical Windows paths for release upgrade checks
- [#199666](https://github.com/openclaw/openclaw/pull/199666) fix(backup): release disk space when deleting staging databases
- [#200819](https://github.com/openclaw/openclaw/pull/200819) fix(test): seed upgrade survivors with supported config
- [#200831](https://github.com/openclaw/openclaw/pull/200831) chore(ui): refresh control ui locales
- [#200805](https://github.com/openclaw/openclaw/pull/200805) fix(matrix): keep explicit recovery available during deferred migration
- [#192165](https://github.com/openclaw/openclaw/pull/192165) fix(codex): stop misreporting API quota as subscription exhaustion
- [#196797](https://github.com/openclaw/openclaw/pull/196797) fix: improve scrolling in touch dashboard panels
- [#200013](https://github.com/openclaw/openclaw/pull/200013) improve(ui): seat the open sidebar on the rail with rounded corners
- [#200814](https://github.com/openclaw/openclaw/pull/200814) fix(ui): align empty model setup beside Dictate
- [#200821](https://github.com/openclaw/openclaw/pull/200821) chore(i18n): refresh native locales
- [#200012](https://github.com/openclaw/openclaw/pull/200012) feat(ui): list a plugin section's pages in its own sidebar
- [#200076](https://github.com/openclaw/openclaw/pull/200076) perf(sessions): shorten cold transcript writer holds
- [#200011](https://github.com/openclaw/openclaw/pull/200011) improve(ui): polish rail and sidebar navigation
- [#200813](https://github.com/openclaw/openclaw/pull/200813) fix: let nightly validation admit its bundle client
- [#200010](https://github.com/openclaw/openclaw/pull/200010) feat(ui): replace the Automations table with its sidebar and Run history
- [#200425](https://github.com/openclaw/openclaw/pull/200425) fix: make a newly installed Gateway available in the terminal
- [#199833](https://github.com/openclaw/openclaw/pull/199833) fix(ui): give Systems its own sidebar header
- [#200811](https://github.com/openclaw/openclaw/pull/200811) fix(openai): show newer subscription models in the picker
- [#199832](https://github.com/openclaw/openclaw/pull/199832) improve(ui): keep the Customize sidebar to its pages
- [#199831](https://github.com/openclaw/openclaw/pull/199831) fix(ui): let each page decide its sidebar
- [#194443](https://github.com/openclaw/openclaw/pull/194443) fix: preserve gateway administrator permissions across native UI clients
- [#199830](https://github.com/openclaw/openclaw/pull/199830) feat(ui): name the Users section People and add remote access
- [#199829](https://github.com/openclaw/openclaw/pull/199829) improve(ui): read Automations sidebar rows like Sessions
- [#199828](https://github.com/openclaw/openclaw/pull/199828) fix(ui): open the Automations filter as a positioned sidebar menu, like Users
- [#199827](https://github.com/openclaw/openclaw/pull/199827) feat(ui): list automations in the Automations sidebar
- [#199826](https://github.com/openclaw/openclaw/pull/199826) feat(ui): peek a section's sidebar from the closed rail
- [#200810](https://github.com/openclaw/openclaw/pull/200810) test(ui): wait for owner approval mailbox processing
- [#200802](https://github.com/openclaw/openclaw/pull/200802) improve: explain package baseline drift during updates
- [#151100](https://github.com/openclaw/openclaw/pull/151100) fix: stop listing chat attachments the Files panel can't open
- [#198438](https://github.com/openclaw/openclaw/pull/198438) fix(active-memory): warning repeats on every turn when the memory provider lacks private transcript recall
- [#199377](https://github.com/openclaw/openclaw/pull/199377) fix(acp): configured Claude binding goes offline when thinking is adaptive
- [#200236](https://github.com/openclaw/openclaw/pull/200236) fix(github): let PR contributors continue work across sessions
- [#199825](https://github.com/openclaw/openclaw/pull/199825) feat(ui): give each rail section its own sidebar
- [#200776](https://github.com/openclaw/openclaw/pull/200776) fix(e2e): run update repair before the next update in the installed-recovery lane
- [#200797](https://github.com/openclaw/openclaw/pull/200797) fix(tests): keep tunnel redial deadlines pending
- [#200800](https://github.com/openclaw/openclaw/pull/200800) fix: let sandboxed worktree chats run background reviews
- [#200799](https://github.com/openclaw/openclaw/pull/200799) fix(ui): keep landscape drafts steady when chat opens
- [#200766](https://github.com/openclaw/openclaw/pull/200766) feat: support GPT-6.2 Astra and Sol with OpenAI and ClawRouter
- [#200754](https://github.com/openclaw/openclaw/pull/200754) fix(ci): keep context maintenance state query private
- [#200794](https://github.com/openclaw/openclaw/pull/200794) fix: keep transcript backfill probes from blocking conversation appends
- [#200793](https://github.com/openclaw/openclaw/pull/200793) fix(sessions): load chats with sparse transcripts on the embedded runtime
- [#200732](https://github.com/openclaw/openclaw/pull/200732) fix: let Doctor reclaim updater runtimes on Macs running node hosts or the app
- [#200644](https://github.com/openclaw/openclaw/pull/200644) fix: keep the permissions popover content-sized
- [#200785](https://github.com/openclaw/openclaw/pull/200785) fix(test): isolate alternative SQLite backup scratch
- [#200640](https://github.com/openclaw/openclaw/pull/200640) fix: open model setup directly when no models are available
- [#200771](https://github.com/openclaw/openclaw/pull/200771) fix(test): preserve legacy build memory exports
- [#199824](https://github.com/openclaw/openclaw/pull/199824) feat(ui): rework the side rail around the agent avatar
- [#200780](https://github.com/openclaw/openclaw/pull/200780) test: await scheduled message boundaries without clock races
- [#200787](https://github.com/openclaw/openclaw/pull/200787) fix(sandbox): reduce filesystem stalls after commands
- [#200748](https://github.com/openclaw/openclaw/pull/200748) fix(github): reduce disk writes during workspace base refresh
- [#200772](https://github.com/openclaw/openclaw/pull/200772) fix(test): keep plugin catalog checks in the contract suite
- [#200706](https://github.com/openclaw/openclaw/pull/200706) docs: explain when Windows Hub recommends a native or WSL Gateway
- [#200734](https://github.com/openclaw/openclaw/pull/200734) fix(release): backport extended-stable updater targeting repairs
- [#200786](https://github.com/openclaw/openclaw/pull/200786) fix: prevent EALLOWSCRIPTS failures during plugin repair
- [#200788](https://github.com/openclaw/openclaw/pull/200788) chore(ui): refresh control ui locales
- [#199823](https://github.com/openclaw/openclaw/pull/199823) feat(ui): rename Plugins to Customize and move Templates into it
- [#200767](https://github.com/openclaw/openclaw/pull/200767) test(ios): report held probe wait state
- [#200743](https://github.com/openclaw/openclaw/pull/200743) fix: keep quiet Auto Review calls alive
- [#200737](https://github.com/openclaw/openclaw/pull/200737) fix: keep mobile chat drafts above composer actions
- [#200770](https://github.com/openclaw/openclaw/pull/200770) fix: keep the dictation border visible in new sessions
- [#199822](https://github.com/openclaw/openclaw/pull/199822) improve(ui): fill the current navigation item's icon
- [#200762](https://github.com/openclaw/openclaw/pull/200762) fix(daemon): recognize completed runtime-pin source aliases
- [#200763](https://github.com/openclaw/openclaw/pull/200763) chore(ui): capture missing Dashboard menu click evidence
- [#200758](https://github.com/openclaw/openclaw/pull/200758) fix: highlight the message box when dropping images into a new session
- [#200733](https://github.com/openclaw/openclaw/pull/200733) fix: keep one missing archived transcript from blocking every update
- [#200735](https://github.com/openclaw/openclaw/pull/200735) fix(codex): attach a request over the turn cap instead of losing its middle
- [#200752](https://github.com/openclaw/openclaw/pull/200752) fix(ci): complete GBrain plugin integration metadata
- [#200690](https://github.com/openclaw/openclaw/pull/200690) fix(codex): keep the instruction when an oversized request is fitted
- [#200262](https://github.com/openclaw/openclaw/pull/200262) fix(gateway): channel setup stays busy after a disconnect
- [#200751](https://github.com/openclaw/openclaw/pull/200751) fix: use the release predecessor in staged upgrade checks
- [#200636](https://github.com/openclaw/openclaw/pull/200636) feat(plugins): let plugin forks read, ls and run owner exec under the session's policy
- [#200736](https://github.com/openclaw/openclaw/pull/200736) chore(build): report memory on admission refusal
- [#200750](https://github.com/openclaw/openclaw/pull/200750) chore(ui): refresh control ui locales
- [#199835](https://github.com/openclaw/openclaw/pull/199835) improve(ui): read Portals in the standard page column
- [#200740](https://github.com/openclaw/openclaw/pull/200740) fix(macos): unblock release audits of direct sleep continuations
- [#199834](https://github.com/openclaw/openclaw/pull/199834) improve(ui): read Activity in the standard page column
- [#198399](https://github.com/openclaw/openclaw/pull/198399) feat(ui): edit an agent's thinking default from its Overview
- [#200014](https://github.com/openclaw/openclaw/pull/200014) improve(ui): read Apps in the standard page column
- [#200721](https://github.com/openclaw/openclaw/pull/200721) fix: tell include users how to update without deleting their disabled heartbeat
- [#199887](https://github.com/openclaw/openclaw/pull/199887) fix(ui): a connection that died during an app switch recovers late after switching back
- [#200729](https://github.com/openclaw/openclaw/pull/200729) fix: stop blank messages appearing in the chat queue
- [#200731](https://github.com/openclaw/openclaw/pull/200731) fix(ci): provision Bun for retained-runtime process tests
- [#200714](https://github.com/openclaw/openclaw/pull/200714) fix(agents): only a request that cannot fit may fail a turn
- [#200725](https://github.com/openclaw/openclaw/pull/200725) improve: reduce memory used by limited file reads
- [#200625](https://github.com/openclaw/openclaw/pull/200625) feat: connect OpenClaw to GBrain with one plugin install
- [#200674](https://github.com/openclaw/openclaw/pull/200674) fix(ci): install pnpm shims in writable job directories
- [#200730](https://github.com/openclaw/openclaw/pull/200730) fix(ui): fill the model picker Favorites star
- [#200723](https://github.com/openclaw/openclaw/pull/200723) fix(ci): target swarm lifecycle disclosure toggles
- [#200726](https://github.com/openclaw/openclaw/pull/200726) fix(update): allow explicit targets on extended-stable
- [#177296](https://github.com/openclaw/openclaw/pull/177296) fix: prevent queued agent failures after the sending turn ends
- [#200727](https://github.com/openclaw/openclaw/pull/200727) fix(tests): keep catalog directory checks stable across logger initialization
- [#200718](https://github.com/openclaw/openclaw/pull/200718) fix: stop long Bun session transcripts from stalling and crash-looping the Gateway
- [#200715](https://github.com/openclaw/openclaw/pull/200715) improve: reduce per-turn work after Responses compaction
- [#200677](https://github.com/openclaw/openclaw/pull/200677) fix(ios): open and close the sidebar drawer without a pause or chat scrolling
- [#200708](https://github.com/openclaw/openclaw/pull/200708) fix(release): qualify published extended-stable updates through selector
- [#200687](https://github.com/openclaw/openclaw/pull/200687) fix: keep openclaw update status fast and from copying the state database repeatedly
- [#200702](https://github.com/openclaw/openclaw/pull/200702) chore: diagnose model picker icon alignment failures in WebKit
- [#200554](https://github.com/openclaw/openclaw/pull/200554) fix: avoid Gateway stalls during GitHub session actions
- [#200686](https://github.com/openclaw/openclaw/pull/200686) fix: Windows cleanup commands from updates and Doctor now remove long paths
- [#200596](https://github.com/openclaw/openclaw/pull/200596) fix: start gateway after upgrading provider configuration
- [#200709](https://github.com/openclaw/openclaw/pull/200709) chore(ui): refresh control ui locales
- [#200659](https://github.com/openclaw/openclaw/pull/200659) fix(update): keep valid cold archives from blocking updates
- [#200691](https://github.com/openclaw/openclaw/pull/200691) fix: explain how to recover removed session worktrees
- [#200680](https://github.com/openclaw/openclaw/pull/200680) fix: let the next update continue after a killed update when nothing is left to repair
- [#200658](https://github.com/openclaw/openclaw/pull/200658) fix: let Doctor publish unchanged plugin migrations in any order
- [#195974](https://github.com/openclaw/openclaw/pull/195974) fix(android): respect allowed choices in notification replies
- [#200682](https://github.com/openclaw/openclaw/pull/200682) fix(telegram): answer messages whose attachment fails to download instead of silencing the chat behind them
- [#200683](https://github.com/openclaw/openclaw/pull/200683) fix(ui): group child-chat openings and answered questions with activity
- [#200566](https://github.com/openclaw/openclaw/pull/200566) docs: backport release tooling and validation across all channels
- [#200514](https://github.com/openclaw/openclaw/pull/200514) fix(hooks): raise the hook body limit to 1 MiB and log rejected bodies
- [#200669](https://github.com/openclaw/openclaw/pull/200669) fix: recover sandbox file tools after stopping a run
- [#200684](https://github.com/openclaw/openclaw/pull/200684) fix(test): keep Codex validation error fixture invalid
- [#200685](https://github.com/openclaw/openclaw/pull/200685) test: fix dangling underscore lint in subagent expiry test
- [#200032](https://github.com/openclaw/openclaw/pull/200032) fix(cron): webhook automations POST skip text when a run skips before it starts
- [#200679](https://github.com/openclaw/openclaw/pull/200679) fix: preserve Code Mode collector replay during argument coercion
- [#200613](https://github.com/openclaw/openclaw/pull/200613) fix: keep an update when its old package link cannot be removed
- [#200235](https://github.com/openclaw/openclaw/pull/200235) fix(ui): show dictation progress and preserve pending transcripts
- [#200623](https://github.com/openclaw/openclaw/pull/200623) fix: keep large workspace recovery packs off the Gateway thread
- [#193200](https://github.com/openclaw/openclaw/pull/193200) fix: coerce quoted tool arguments on tool_call, Code Mode and Codex dynamic tools
- [#200662](https://github.com/openclaw/openclaw/pull/200662) fix(update): bridge 2026.11.5 updaters
- [#200670](https://github.com/openclaw/openclaw/pull/200670) fix: let silent Code Mode commands reach their own timeout
- [#200660](https://github.com/openclaw/openclaw/pull/200660) chore(test): capture chat layout menu failure chronology
- [#200624](https://github.com/openclaw/openclaw/pull/200624) fix(ci): recover Git setup after stale package indexes
- [#200649](https://github.com/openclaw/openclaw/pull/200649) fix: stop losing finished subagent results during access-policy outages, steer races and expiry
- [#200657](https://github.com/openclaw/openclaw/pull/200657) fix: reclaim updater runtimes blocked by unrelated Linux processes
- [#200630](https://github.com/openclaw/openclaw/pull/200630) fix: reduce Gateway work during pull request preparation
- [#200608](https://github.com/openclaw/openclaw/pull/200608) fix(test): isolate mac node reconnect identity storage
- [#200656](https://github.com/openclaw/openclaw/pull/200656) fix(state): retire successor readers before upgrade swap
- [#200654](https://github.com/openclaw/openclaw/pull/200654) fix: validate frozen releases with their recorded updater baseline
- [#200650](https://github.com/openclaw/openclaw/pull/200650) fix(test): wait for widget inner-frame resize
- [#200643](https://github.com/openclaw/openclaw/pull/200643) fix: keep sandbox tools from starving behind checkpoints
- [#200641](https://github.com/openclaw/openclaw/pull/200641) fix(ci): preserve permission tests on hourly Boat runners
- [#200648](https://github.com/openclaw/openclaw/pull/200648) fix(ci): keep runtime helpers private
- [#200647](https://github.com/openclaw/openclaw/pull/200647) fix: stop remote tools when Code Mode abandons their response
- [#196300](https://github.com/openclaw/openclaw/pull/196300) fix(android): prevent sidebar edge taps from toggling neighboring controls
- [#200632](https://github.com/openclaw/openclaw/pull/200632) fix(ci): retry interrupted Node archive downloads
- [#185186](https://github.com/openclaw/openclaw/pull/185186) fix(codex): settled-turn recovery rejects sessions containing a media-only user turn
- [#200620](https://github.com/openclaw/openclaw/pull/200620) fix(ci): restore worker loader package artifacts
- [#200626](https://github.com/openclaw/openclaw/pull/200626) fix(test): verify fresh accounting for empty child sessions

#### 🐛 New Issues
- [#200756](https://github.com/openclaw/openclaw/issues/200756) [fw5] Windows beta.2 → beta.4 update fails at package-swap: baseline package scan failed / rollback tree changed `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬13
- [#200606](https://github.com/openclaw/openclaw/issues/200606) [Bug]: 2026.11.5 candidate Doctor blocks update with plugin migration conflict and changed=[] `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬6
- [#200692](https://github.com/openclaw/openclaw/issues/200692) [fw5] Home Assistant OS: install works in SSH add-on but state is ephemeral; add supported path/docs `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬6
- [#200540](https://github.com/openclaw/openclaw/issues/200540) Update failure: repairing (2026.9.4) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `P0` 💬5
- [#200610](https://github.com/openclaw/openclaw/issues/200610) [Bug]: [fw5] Windows retained updater runtime cannot be deleted with standard tools (paths exceed MAX_PATH); uninstall leaves it behind `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬5
- [#200672](https://github.com/openclaw/openclaw/issues/200672) [fw5] Headless onboarding gateway readiness timeout is too short for slow hosts `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬5
- [#200573](https://github.com/openclaw/openclaw/issues/200573) [Windows][npm-global] candidate-doctor rejects bundled typebox in the temporary update copy - openclaw update unusable on 11.2/11.4/11.5 `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬4
- [#200671](https://github.com/openclaw/openclaw/issues/200671) [fw5] Gateway startup failure exits 0 and restart-loops under systemd (1GB Raspberry Pi) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬4
- [#200594](https://github.com/openclaw/openclaw/issues/200594) [Bug]: 2026.11.5 update: candidate-doctor reports a valid file-stored cold transcript archive as 'missing or unreadable', blocking the update `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#200822](https://github.com/openclaw/openclaw/issues/200822) [Docs/Website]: Windows Hub 2026.11.3 bundles Gateway 2026.11.1 while the homepage shows macOS 2026.11.4 and Linux 2026.11.5 `P2` `impact:ux-friction` `clawsweeper:bulk-filed` 💬3
- [#200773](https://github.com/openclaw/openclaw/issues/200773) [Bug]: Plugin installs fail with npm EALLOWSCRIPTS "--allow-scripts is not allowed in project-scoped installs" (2026.11.5, macOS) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#200747](https://github.com/openclaw/openclaw/issues/200747) [fw5] npm install EIDLETIMEOUT: default fetch timeout/retry budget too low for large installs `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬3
- [#200447](https://github.com/openclaw/openclaw/issues/200447) [Bug]: Custom TUI theme accepts malformed hex colors (e.g. #1z2y3x, #-1-2-3) instead of rejecting them `bug` `no-stale` `bug:behavior` `P3` 💬3
- [#200926](https://github.com/openclaw/openclaw/issues/200926) Update failure: package-doctor (2026.11.4) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#200904](https://github.com/openclaw/openclaw/issues/200904) Pairing-required hint tells a remote client to run openclaw devices approve itself, which fails the same way `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬2
- [#200695](https://github.com/openclaw/openclaw/issues/200695) [fw5] openclaw uninstall blocks state/workspace cleanup when no service manager exists (HAOS) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#200849](https://github.com/openclaw/openclaw/issues/200849) [Bug]: One invalid session_nodes row blocks all session admission in agent main; error names a foreign session key and doctor --fix does not clear it `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬2
- [#200710](https://github.com/openclaw/openclaw/issues/200710) [Bug]: 2026.11.5: authored NO_REPLY on device session events in a WebChat session fails as empty_response and falls back to the paid model `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#200543](https://github.com/openclaw/openclaw/issues/200543) [Bug]: Extension browser stops working when Chrome's Memory Saver discards an attached tab `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `clawsweeper:needs-info` 💬2
- [#200790](https://github.com/openclaw/openclaw/issues/200790) [matrix] Crypto-store recovery is unreachable when the plugin is withheld for a pending deferred migration (deadlock) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬2
- [#200590](https://github.com/openclaw/openclaw/issues/200590) [Bug]: service-child-group-anchor never drains on kernels without CONFIG_PROC_CHILDREN (Synology) — leaked anchors + zombie esbuild until OOM `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#200792](https://github.com/openclaw/openclaw/issues/200792) Update failure: package-update (2026.10.10) `P2` `impact:ux-friction` 💬2
- [#200693](https://github.com/openclaw/openclaw/issues/200693) [fw5] Onboarding fails under setgid home on HAOS: "created directory admission failed" `P2` `clawsweeper:not-repro-on-main` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#200676](https://github.com/openclaw/openclaw/issues/200676) Update failure: gateway-recovery-verification (2026.11.5-beta.4) `P1` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#200666](https://github.com/openclaw/openclaw/issues/200666) [Bug]: security.installPolicy refuses every exec command on a default Windows system drive `security` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` 💬2
- [#200637](https://github.com/openclaw/openclaw/issues/200637) [Bug]: Docker container root process (unverifiable via EACCES) permanently blocks updater runtime cleanup on Linux `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬2
- [#200667](https://github.com/openclaw/openclaw/issues/200667) [Bug]: claude-cli turn aborts with "Native tool authority capture is no longer active" when an unrelated (policy-excluded) MCP server fails to start on warm-session reuse `P1` `impact:session-state` 💬2
- [#200598](https://github.com/openclaw/openclaw/issues/200598) [Bug]: Usage error count cannot see turns that fail before committing a message `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#200439](https://github.com/openclaw/openclaw/issues/200439) warnings log `{error={}}` (empty error object), so the failure cause is lost (event dispatch and collector sweep) `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬2
- [#200556](https://github.com/openclaw/openclaw/issues/200556) Update failure: package-backup-retention (2026.11.4) `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#200558](https://github.com/openclaw/openclaw/issues/200558) [Bug]: local TUI /auth fails with a state-ownership conflict `bug` `no-stale` `regression` `P1` 💬2
- [#200547](https://github.com/openclaw/openclaw/issues/200547) Update failure: package-install (2026.11.3) `P2` `impact:ux-friction` 💬2
- [#200548](https://github.com/openclaw/openclaw/issues/200548) Usage page hides turn latency: session rows show only wall-clock duration `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#200508](https://github.com/openclaw/openclaw/issues/200508) [Bug]: 2026.11.4 update repair misses legacy triage custody when package recovery pins a different lease store `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#200469](https://github.com/openclaw/openclaw/issues/200469) Update failure: package-update (2026.11.2) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#200471](https://github.com/openclaw/openclaw/issues/200471) [Feature]: agent_end hooks cannot tell which attempts a durable context engine already owns `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬2
- [#200404](https://github.com/openclaw/openclaw/issues/200404) Update failure: package-update (2026.10.10) `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#200408](https://github.com/openclaw/openclaw/issues/200408) [Bug]: TUI shows replies over 8,000 characters cut with "...(truncated)..." after reopening a session `bug` `no-stale` `bug:behavior` `P2` 💬2
- [#200973](https://github.com/openclaw/openclaw/issues/200973) Claude CLI resume fails with "Native tool authority capture is no longer active", then every retry fails with "Plugin invocation scope is closed" `P1` `impact:message-loss` 💬1
- [#200972](https://github.com/openclaw/openclaw/issues/200972) [Docs Bug]: Refresh bundled Codex versions and explain model upgrade requirements `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#200970](https://github.com/openclaw/openclaw/issues/200970) Control UI e2e: dashboard-website pinned-session click times out intermittently `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#200955](https://github.com/openclaw/openclaw/issues/200955) Qualify first simple-completion acquisition with PostgreSQL stores `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#200949](https://github.com/openclaw/openclaw/issues/200949) [Bug] memory-core dreaming: light phase fails with ENOENT fstat for 13/25 workspaces, no path in error `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#200939](https://github.com/openclaw/openclaw/issues/200939) Update failure: gateway-recovery-verification (2026.11.5) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#200933](https://github.com/openclaw/openclaw/issues/200933) [Bug]: session_status capabilities says "messaging profile" without the config path or the alsoAllow fix `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#200937](https://github.com/openclaw/openclaw/issues/200937) [Bug]: openclaw status masks and cuts the OPENCLAW_GATEWAY_TOKEN conflict hint `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `maturity:stable` 💬1
- [#200934](https://github.com/openclaw/openclaw/issues/200934) ChatGPT model list sends the Codex version even when OpenClaw runs the turn, so newer models are hidden `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#200928](https://github.com/openclaw/openclaw/issues/200928) [Bug]: @openclaw/atlassian 1.0.1 uses Atlassian's deprecated /v1/mcp/authv2 endpoint (removed 2027-03-01) `P2` `impact:ux-friction` 💬1
- [#200920](https://github.com/openclaw/openclaw/issues/200920) [Bug]: Setup says a small-context local model is ready, then the first message fails with Context overflow `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#200906](https://github.com/openclaw/openclaw/issues/200906) [Feature]: Add opt-in origin identifiers to OpenTelemetry traces without capturing content `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#200922](https://github.com/openclaw/openclaw/issues/200922) Startup FTS rebuild leaves an index that quick_check flags, and a full database copy per rebuild that is never removed `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#200921](https://github.com/openclaw/openclaw/issues/200921) Update failure: package-doctor (2026.11.5) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#200907](https://github.com/openclaw/openclaw/issues/200907) Self-learning background review advertises foreground-only tools (skills_search) it cannot execute `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#200779](https://github.com/openclaw/openclaw/issues/200779) [Bug]: Mandatory setup-helper routing blocks authorized config recovery when helper inference fails `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#200892](https://github.com/openclaw/openclaw/issues/200892) [Bug]: Codex native completion retirement retries every 15 s indefinitely when the parent's captured session authority is no longer current (2026.11.1) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#200886](https://github.com/openclaw/openclaw/issues/200886) [Bug]: Newer-schema refusal suggests `openclaw doctor --fix` when a source build with a lower version label wrote the database `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#200881](https://github.com/openclaw/openclaw/issues/200881) [Bug]: Control UI chat composer falls below the viewport on iPad (Safari/Firefox, WebKit) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#200757](https://github.com/openclaw/openclaw/issues/200757) [Bug]: path cannot read or edit Markdown with carriage-return line endings `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#200646](https://github.com/openclaw/openclaw/issues/200646) [Bug]: A2A task of a message steered into an active turn stays TASK_STATE_WORKING forever (#183803 covers only followup) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#200880](https://github.com/openclaw/openclaw/issues/200880) Update failure: package-doctor (2026.11.4) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#200744](https://github.com/openclaw/openclaw/issues/200744) claude-cli: local JSONL output-budget overflow is classified as reason=format/400 and triggers model fallback that replays an hour-long, side-effecting turn from scratch `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#200833](https://github.com/openclaw/openclaw/issues/200833) [Bug]: macOS dashboard update leaves the old Gateway running when switching a Git install to the release launcher `bug` `P1` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#200861](https://github.com/openclaw/openclaw/issues/200861) [Bug]: claude-cli turns without a persisted assistant reply contribute zero usage to Usage / usage.cost `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#200862](https://github.com/openclaw/openclaw/issues/200862) [Bug]: Telegram forgets the draft preview ID after a failed delete, so cleanup cannot retry `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#200852](https://github.com/openclaw/openclaw/issues/200852) Update failure: invalid-config (2026.10.10) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#200850](https://github.com/openclaw/openclaw/issues/200850) [Feature]: Code Mode catalog.search: weight tool-name matches above description text `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🦪 silver shellfish` 💬1
- [#200851](https://github.com/openclaw/openclaw/issues/200851) [Feature]: Code Mode: allow a few pinned, always-visible tools `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#200826](https://github.com/openclaw/openclaw/issues/200826) [Bug]: Quick start prints “Everything’s in place.” twice after skipping AI setup `bug` `no-stale` `P3` `clawsweeper:fix-shape-clear` 💬1
- [#200830](https://github.com/openclaw/openclaw/issues/200830) [Bug]: Cold-storage maintenance fails every minute when resetArchiveRetention is set and a configured agent has no database yet `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#200825](https://github.com/openclaw/openclaw/issues/200825) [Bug]: Database diagnostic appears inside the Quick start progress line `bug` `no-stale` `P3` `clawsweeper:fix-shape-clear` 💬1
- [#200824](https://github.com/openclaw/openclaw/issues/200824) [Bug]: Sessions created before 2026.11.x are no longer returned by sessions.list `bug` `regression` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#200815](https://github.com/openclaw/openclaw/issues/200815) Update failure: package-update (2026.11.2) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#200804](https://github.com/openclaw/openclaw/issues/200804) sms: inbound MMS fails, Twilio media redirects to mms.twiliocdn.com which the SSRF allowlist blocks `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#200803](https://github.com/openclaw/openclaw/issues/200803) [Bug]: OpenAI device-code re-auth points remote Control UI users to Terminal `bug` `P2` `impact:auth-provider` `issue-rating: 🦪 silver shellfish` 💬1
- [#200635](https://github.com/openclaw/openclaw/issues/200635) macOS: Full access permissions options stretch almost the full window height `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#200612](https://github.com/openclaw/openclaw/issues/200612) Open model setup directly when no models are available `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#200798](https://github.com/openclaw/openclaw/issues/200798) Browser: route.continue assertion in resumeRouteSafely escapes as unhandled rejection and shuts down the Gateway (2026.11.3) `P1` `impact:crash-loop` 💬1
- [#200795](https://github.com/openclaw/openclaw/issues/200795) 2026.11.5: migrated Claw/Template install records still enforce consent provenance, but there's no supported way to manage or retire them 💬1
- [#200791](https://github.com/openclaw/openclaw/issues/200791) [update] update.run from a live Gateway is refused while the system heartbeat runs; an immediate retry fails on wal-copy-unstable `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#200789](https://github.com/openclaw/openclaw/issues/200789) OpenResponses /v1/responses drops reply media (MEDIA: directives, image_generate output) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#200781](https://github.com/openclaw/openclaw/issues/200781) [Bug]: Control UI 2026.11.5 Sessions sidebar renders only agent headers - grouping defaults to 'category' with no exposed control `P2` `impact:ux-friction` 💬1
- [#200782](https://github.com/openclaw/openclaw/issues/200782) release: 49e8b5d (safe-restart preflight session counts) is on main but not in any release — backport request `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#200777](https://github.com/openclaw/openclaw/issues/200777) Update failure: candidate-doctor (2026.11.4) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#200774](https://github.com/openclaw/openclaw/issues/200774) [Bug]: `npx openclaw@<new> update repair` migrates state/agent DBs forward under the installed old version, so rollback needs DB restores (warn or guard) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#200775](https://github.com/openclaw/openclaw/issues/200775) [Bug]: 2026.11.5 unbound claude-cli automations refused with "no recorded inference account"; doctor --fix doesn't detect or bind them, native CLI login ignored `P1` `impact:auth-provider` 💬1
- [#200768](https://github.com/openclaw/openclaw/issues/200768) WhatsApp: inbound media download is attempted once; a transient network error drops the attachment `P1` `impact:message-loss` 💬1
- [#200761](https://github.com/openclaw/openclaw/issues/200761) [Bug]: Telegram show_widget gives no fallback guidance on INPUT_MEDIA_WIDGET_NOT_ALLOWED `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#200753](https://github.com/openclaw/openclaw/issues/200753) [Feature]: Opt-in WhatsApp direct-chat media batching in the inbound debounce window `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#200749](https://github.com/openclaw/openclaw/issues/200749) models auth login: Gateway-backed login renders multi-line steps with literal \n (device-code box unreadable) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#200739](https://github.com/openclaw/openclaw/issues/200739) [Bug]: Recovery holds on auxiliary SQLite files hide active main agent from agents.list / Control UI `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#200728](https://github.com/openclaw/openclaw/issues/200728) Control UI: composer actions overlap the editor at short mobile viewport heights `P2` `impact:ux-friction` 💬1
- [#200720](https://github.com/openclaw/openclaw/issues/200720) Update failure: package-update (2026.11.1) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#200724](https://github.com/openclaw/openclaw/issues/200724) [Bug]: macOS 2026.11.5 publication recovery fences its own identity-bound legacy lease store `P2` `impact:ux-friction` 💬1
- [#200722](https://github.com/openclaw/openclaw/issues/200722) Empty cron-authority lock file permanently disables cron ("Cron receipt authority is unavailable") `P2` `impact:other` 💬1
- [#200712](https://github.com/openclaw/openclaw/issues/200712) [Docs Bug]: Context-engine docs lack a capture-only example and the transcript-fencing / commitTurn contract (2026.11.3, claude-cli) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#200711](https://github.com/openclaw/openclaw/issues/200711) [Feature]: Document or provide runtime-llm-complete for plugins on CLI-runtime hosts (claude-cli, 2026.11.3) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#200701](https://github.com/openclaw/openclaw/issues/200701) [Bug]: pre-compaction memory flush fails with "No callable tools remain" for agents with an MCP-only tools.allow, and there is no per-agent memoryFlush override (2026.11.2) `P2` `impact:session-state` 💬1
- [#200703](https://github.com/openclaw/openclaw/issues/200703) fix: keep memory capture scoped to the current sender after delayed turns `P2` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬1
- [#200583](https://github.com/openclaw/openclaw/issues/200583) First Gateway start after upgrading from 2026.11.4 fails with SQLite I/O error; restart recovers `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#200694](https://github.com/openclaw/openclaw/issues/200694) [Feature]: Control UI: show dictation status in the composer's button row `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#200678](https://github.com/openclaw/openclaw/issues/200678) [Bug]: bundled internal hooks rejected as "no readable handler" when pnpm store or updater runtime hard-links them; config hot reload fails `P2` `impact:other` 💬1
- [#200673](https://github.com/openclaw/openclaw/issues/200673) Bug: concurrent worker portal requests fail during attachment activity updates `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#200661](https://github.com/openclaw/openclaw/issues/200661) Owner WebChat reply media are read under the toolsBySender wildcard: a restrictive "*" (no read) blocks the owner's own MEDIA attachments `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#200663](https://github.com/openclaw/openclaw/issues/200663) Control UI: remove the circling border around the composer while dictating `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#200651](https://github.com/openclaw/openclaw/issues/200651) [Bug]: Deferred restart resume fails with "Session database target changed outside captured discovery custody" when one agent's preparation is deferred (multi-agent, per-agent session stores) `P2` `impact:session-state` 💬1
- [#200645](https://github.com/openclaw/openclaw/issues/200645) doctor --fix can report a change under "Doctor changes" that was never actually persisted `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#200642](https://github.com/openclaw/openclaw/issues/200642) web_fetch returns a PDF as raw bytes instead of its text `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#200639](https://github.com/openclaw/openclaw/issues/200639) [Bug]: Exec shell snapshot runs process.execPath -e without ELECTRON_RUN_AS_NODE, so it breaks when the Gateway runs under Electron `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#200638](https://github.com/openclaw/openclaw/issues/200638) [Feature]: Let several MCP servers share one OAuth grant when they use the same authorization server `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#200629](https://github.com/openclaw/openclaw/issues/200629) [Bug]: Cron recovery fix #194048 is missing from 2026.11.x releases; scheduler still stops after shared-state worker loss `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#200633](https://github.com/openclaw/openclaw/issues/200633) [Bug]: Exec completion from an isolated cron run wakes the owner's main session (docs say originating session) `P2` `impact:message-loss` 💬1
- [#200627](https://github.com/openclaw/openclaw/issues/200627) [Bug]: Usage throughput divides by wall-clock session span, while the label promises active time `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#200617](https://github.com/openclaw/openclaw/issues/200617) First Gateway start after a SIGKILL'd 2026.11.4 fails with a secrets disk I/O error `P1` `impact:crash-loop` `issue-rating: 🦪 silver shellfish` 💬1
- [#200619](https://github.com/openclaw/openclaw/issues/200619) [Bug]: view_image under Codex code mode returns base64 text, not an image `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#200618](https://github.com/openclaw/openclaw/issues/200618) Startup Doctor builds Control UI assets when gateway.controlUi.enabled is false `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#200614](https://github.com/openclaw/openclaw/issues/200614) [Bug]: Docked Web Inspector flickers in the macOS Dashboard `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#200604](https://github.com/openclaw/openclaw/issues/200604) [Bug]: Doctor recommends database restore for temporary snapshot ENOSPC `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#200607](https://github.com/openclaw/openclaw/issues/200607) [Bug]: Session watchdog aborts the turn during a provider-error model-fallback handover, killing the next candidate before it runs `bug` `bug:behavior` `P1` `impact:auth-provider` 💬1
- [#200602](https://github.com/openclaw/openclaw/issues/200602) Channel account wedged by un-reaped lifecycle task: channels.start returns task-owned forever, account never polls but health reports connected `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#200600](https://github.com/openclaw/openclaw/issues/200600) Cron jobs created on 2026.11.4 are refused after updating to main: "runs on account ..., which was signed in again or replaced since the job recorded it" `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` 💬1
- [#200597](https://github.com/openclaw/openclaw/issues/200597) [Bug]: Backport #197238 to 2026.11.x: sessions_spawn from a project session refuses every claude-cli model ("native runtime is unavailable") `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#200587](https://github.com/openclaw/openclaw/issues/200587) Folder-access E2E flakes when autocomplete runs before Enter `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#200599](https://github.com/openclaw/openclaw/issues/200599) Codex harness: allow removing web_search from one agent without forcing a restricted turn `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#200591](https://github.com/openclaw/openclaw/issues/200591) workflow-sanity.yml: cancel-in-progress also cancels push-to-main runs `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#200593](https://github.com/openclaw/openclaw/issues/200593) Make push-to-talk key and speech recognition engine configurable on macOS `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#200528](https://github.com/openclaw/openclaw/issues/200528) [Bug]: stable owner dropdown resets to the top after scrolling `P2` `clawsweeper:not-repro-on-main` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#200584](https://github.com/openclaw/openclaw/issues/200584) Plugin hooks: expose invocation identity (toolCallId/runId) on the outbound delivery path `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#200576](https://github.com/openclaw/openclaw/issues/200576) [Bug]: Floating bot (overlay) does not accept Korean (Hangul) keyboard input `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#200572](https://github.com/openclaw/openclaw/issues/200572) Update failure: update (2026.11.5) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#200557](https://github.com/openclaw/openclaw/issues/200557) memory CLI (status/search/index) refuses to run while Gateway is up — 2026.11.4 removed the online read path 2026.10.8 had `P2` `impact:other` 💬1
- [#200552](https://github.com/openclaw/openclaw/issues/200552) [Feature]: Configurable approval timeout for OpenClaw system-agent (config change) requests `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#200537](https://github.com/openclaw/openclaw/issues/200537) [Bug]: plugins reload fails with EPERM symlink on Windows without Developer Mode; the Gateway start path uses a junction for the same link `P2` `impact:other` 💬1
- [#200487](https://github.com/openclaw/openclaw/issues/200487) Qualify watched-session prompt refresh with PostgreSQL `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#200513](https://github.com/openclaw/openclaw/issues/200513) Bug: reloadAndResume handoff fails with closed plugin invocation scope and no completion receipt `P2` `impact:message-loss` 💬1
- [#200475](https://github.com/openclaw/openclaw/issues/200475) [Bug]: Follow-up in the same chat reuses a closing claude-cli runtime, refuses the first tool as a user decline, then dies with a closed plugin scope `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#200443](https://github.com/openclaw/openclaw/issues/200443) managed update finalize logs one WARN JSON blob per doctor step, including "plugin data/settings upgrade is unfinished" for every plugin `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#200451](https://github.com/openclaw/openclaw/issues/200451) [Bug]: doctor SQLite migration failure report does not redact home paths on native Windows (HOME unset, USERPROFILE used) `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#200464](https://github.com/openclaw/openclaw/issues/200464) Session observer counts provider rate limits (429) as failures and disables itself for the run `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#200463](https://github.com/openclaw/openclaw/issues/200463) Cold storage: `Transcript remains in SQLite because its archive exceeds the 64 MiB limit` repeats every pass and cannot be tuned `P2` `impact:other` 💬1
- [#200462](https://github.com/openclaw/openclaw/issues/200462) `stalled session` WARN repeats every 30 s with no dedupe, backoff or config key `P3` `impact:other` 💬1
- [#200444](https://github.com/openclaw/openclaw/issues/200444) "retired main-agent session migration warnings" repeats at every start and its remedy is the full `doctor --fix` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#200438](https://github.com/openclaw/openclaw/issues/200438) routine diagnostics and no-op notices are logged at WARN or at high frequency (turn timings, heartbeat idle, skill precedence, worktree cleanup) `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#200442](https://github.com/openclaw/openclaw/issues/200442) "codex app-server is newer than OpenClaw's managed runtime" is a WARN repeated about 1,000 times in 6 days `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#200440](https://github.com/openclaw/openclaw/issues/200440) restart/drain notices are WARN or ERROR, and startup waits repeat (sweep skipped while draining, health refresh capacity, skill-collection lease waits) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#200441](https://github.com/openclaw/openclaw/issues/200441) `session.maintenance.plan` write aborts with "SQLite automatic maintenance activity changed before age consumption" (about 2,500 times in 31 days) `P2` `impact:session-state` 💬1
- [#200445](https://github.com/openclaw/openclaw/issues/200445) "user profile resolution failed ... Gateway profile acquisition authority expired" logs the caller's account identifier in a WARN `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#200429](https://github.com/openclaw/openclaw/issues/200429) session_status shows "Activation: mention" for groups that answer without a mention `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#200424](https://github.com/openclaw/openclaw/issues/200424) [Feature]: Clamp Gateway CLI/RPC calls from an agent's exec shell to the calling session's visibility `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#200423](https://github.com/openclaw/openclaw/issues/200423) [Feature]: Per-session opt-outs for the session-memory hook, session observation headlines, and notifications `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#200422](https://github.com/openclaw/openclaw/issues/200422) [Feature]: Make tool-result middleware a documented policy hook (block with reason, requester context, ordering, failure mode, harness coverage) `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#200420](https://github.com/openclaw/openclaw/issues/200420) [Feature]: Durable private sessions (incognito's cross-session exclusions for a persistent session) `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1

#### 🔒 Closed Issues
- [#151962](https://github.com/openclaw/openclaw/issues/151962) Phantom user messages: internal runtime strings (heartbeat poll / async command completion / queued user message) submitted as user prompts, not persisted to transcript_events
- [#192667](https://github.com/openclaw/openclaw/issues/192667) [Bug]: macOS Settings slowness and dark-theme input visibility (reporter: both resolved after updates)
- [#138561](https://github.com/openclaw/openclaw/issues/138561) [Bug]: active-memory plugin stops recalling after 2026.8.2 upgrade, with no signal at info log level
- [#158592](https://github.com/openclaw/openclaw/issues/158592) After host sleep/wake, prepared model runtime publication for one agent times out and never recovers — every inbound message fails with "runtime owner was not published" until gateway restart
- [#164279](https://github.com/openclaw/openclaw/issues/164279) Self-learning: background experience review has 0% completion (50 consecutive failures since 2026-09-27)
- [#185578](https://github.com/openclaw/openclaw/issues/185578) [Bug]: Gateway heap floor only ratchets up - per-run system prompt/skills strings stay reachable after runs (~25 MiB/h until the V8 cap aborts)
- [#155396](https://github.com/openclaw/openclaw/issues/155396) [Bug]: Ordinary Codex tool turns can fail closed on provenance_rejected during final-answer recovery
- [#144594](https://github.com/openclaw/openclaw/issues/144594) Inter-session messages accepted into `pendingInputs` can be silently retained in `interrupted` state with no automatic replay and no bilateral warning
- [#191818](https://github.com/openclaw/openclaw/issues/191818) [Bug]: 2026.10.10 still ships the claude-cli "no recorded inference account" automation failure — please backport #180492
- [#158070](https://github.com/openclaw/openclaw/issues/158070) [Bug]: Preflight compaction fails with "agent tool caller authority is no longer active" when the run waits in a lane queue — voids the in-flight delivery
- [#137265](https://github.com/openclaw/openclaw/issues/137265) [Bug]: Memory Search does not index/retrieve conversation session content with sessions source enabled
- [#153417](https://github.com/openclaw/openclaw/issues/153417) Subagent completion announce retries indefinitely when requester yields no visible reply (2026.9.5)
- [#192201](https://github.com/openclaw/openclaw/issues/192201) [Bug]: MiniMax M3.1 GA id fix (#176955) still unreleased in v2026.10.10 — shipped build keeps the Preview-only id check, so MiniMax-M3.1-Flash resolves to adaptive-only and output_config.effort never reaches the wire
- [#138918](https://github.com/openclaw/openclaw/issues/138918) macOS: visible OpenClaw chat tab drives sustained WindowServer CPU in Safari and Chrome
- [#200606](https://github.com/openclaw/openclaw/issues/200606) [Bug]: 2026.11.5 candidate Doctor blocks update with plugin migration conflict and changed=[]
- [#200022](https://github.com/openclaw/openclaw/issues/200022) Update failure: package-backup-retention (2026.11.4)
- [#167472](https://github.com/openclaw/openclaw/issues/167472) Subagent sessions cannot register exec approvals: 'missing scope: operator.approvals' (no approval card, fail-closed)
- [#149290](https://github.com/openclaw/openclaw/issues/149290) [Bug]: iMessage inbound envelope sets `reply_to_id` on every message, not only genuine reply gestures
- [#198475](https://github.com/openclaw/openclaw/issues/198475) [Bug]: Control UI Template Add fails on a completed agent deletion tombstone
- [#191627](https://github.com/openclaw/openclaw/issues/191627) Discord GPT-Live authentication failure on 2026.10.9; previously worked on 2026.9.9
- [#135631](https://github.com/openclaw/openclaw/issues/135631) [Bug]: Session list ignores explicit membership, leaving no way to scope visibility to invited sessions
- [#178804](https://github.com/openclaw/openclaw/issues/178804) [Bug]: Codex plugin: app-server processes accumulate until container hits pids limit (pthread_create EAGAIN), gateway becomes unusable; plugin is auto-re-enabled by OpenAI ChatGPT route
- [#198402](https://github.com/openclaw/openclaw/issues/198402) Claude sessions reset when CLAUDE_CONFIG_DIR is set only for the Claude child process
- [#195279](https://github.com/openclaw/openclaw/issues/195279) Background exec completion wake fails with "operator execution authority is no longer active" after a sessions_send-started turn ends
- [#143952](https://github.com/openclaw/openclaw/issues/143952) [Bug] apply_patch/write silent no-op when tool-result round-trip drops (2026.9.3)
- [#196845](https://github.com/openclaw/openclaw/issues/196845) [Feature]: Git co-author credit from trusted-proxy identity headers
- [#152954](https://github.com/openclaw/openclaw/issues/152954) [Bug]: Subagent announce produces no visible reply for Signal group requesters; healthy child completions never delivered
- [#144500](https://github.com/openclaw/openclaw/issues/144500) web_search: document and preflight Perplexity freshness/date-range conflict
- [#200573](https://github.com/openclaw/openclaw/issues/200573) [Windows][npm-global] candidate-doctor rejects bundled typebox in the temporary update copy - openclaw update unusable on 11.2/11.4/11.5
- [#200594](https://github.com/openclaw/openclaw/issues/200594) [Bug]: 2026.11.5 update: candidate-doctor reports a valid file-stored cold transcript archive as 'missing or unreadable', blocking the update
- [#185228](https://github.com/openclaw/openclaw/issues/185228) [Bug]: 2026.10.7 starts one Codex app-server per configured agent after Gateway ready, with no Codex turns (follow-up to #163026)
- [#193627](https://github.com/openclaw/openclaw/issues/193627) proc-safe: 'incomplete: unterminated Darwin environment' on macOS 15.x when reading environment keys (process census fails, blocks doctor/update maintenance)
- [#198072](https://github.com/openclaw/openclaw/issues/198072) Update failure: package-backup-retention (2026.11.3)
- [#186967](https://github.com/openclaw/openclaw/issues/186967) claude-cli: 20,000-line per-turn budget still drops finished replies of long tool-heavy subagent turns (2026.10.6), no open tracker after #150132
- [#173975](https://github.com/openclaw/openclaw/issues/173975) [Bug]: Control UI auto-links bare filenames that fail to open for nested workspace files
- [#164903](https://github.com/openclaw/openclaw/issues/164903) [Bug]: Apple Watch voice asks for an agent on every new call instead of using a default
- [#200773](https://github.com/openclaw/openclaw/issues/200773) [Bug]: Plugin installs fail with npm EALLOWSCRIPTS "--allow-scripts is not allowed in project-scoped installs" (2026.11.5, macOS)
- [#165731](https://github.com/openclaw/openclaw/issues/165731) [Bug]: ACP Claude binding fails when thinking level is "adaptive" (forwarded verbatim as adapter effort)
- [#164526](https://github.com/openclaw/openclaw/issues/164526) [Bug]: "Keep current restrictions" added an unrequested model declaration after OAuth login
- [#159929](https://github.com/openclaw/openclaw/issues/159929) [Bug]: claude-cli: Edit/Write `tool_use_result` file echoes are charged against the 8 MiB stream-json output budget
- [#195311](https://github.com/openclaw/openclaw/issues/195311) [Bug]: Generated-media completion retries terminal results beyond dedupe-cache lifetime
- [#162230](https://github.com/openclaw/openclaw/issues/162230) [Bug]: model-catalog worker rebuild loop — exact-match registry reuse discards incrementally-loaded plugins on scope growth
- [#200695](https://github.com/openclaw/openclaw/issues/200695) [fw5] openclaw uninstall blocks state/workspace cleanup when no service manager exists (HAOS)
- [#200710](https://github.com/openclaw/openclaw/issues/200710) [Bug]: 2026.11.5: authored NO_REPLY on device session events in a WebChat session fails as empty_response and falls back to the paid model
- [#200543](https://github.com/openclaw/openclaw/issues/200543) [Bug]: Extension browser stops working when Chrome's Memory Saver discards an attached tab
- [#200790](https://github.com/openclaw/openclaw/issues/200790) [matrix] Crypto-store recovery is unreachable when the plugin is withheld for a pending deferred migration (deadlock)
- [#200792](https://github.com/openclaw/openclaw/issues/200792) Update failure: package-update (2026.10.10)
- [#190963](https://github.com/openclaw/openclaw/issues/190963) [Bug]: 2026.10.9 claude-cli: every turn in a large main session fails with "worker task timed out"; /new and sessions.reset reset in place and don't help
- [#200248](https://github.com/openclaw/openclaw/issues/200248) [Bug]: 2026.11.3 and 2026.11.4 lack the merged fix #180692 — Dreaming light phase fails nightly with 'worker task timed out'
- [#196682](https://github.com/openclaw/openclaw/issues/196682) [Bug]: prompt-cache prefix test fails for anthropic-messages on main since #196471
- [#160302](https://github.com/openclaw/openclaw/issues/160302) [Bug]: cron agentTurn into a busy CLI-backed session aborts with "isolated agent setup timed out before runner start" (session-lane wait not reported to setup watchdog)
- [#200637](https://github.com/openclaw/openclaw/issues/200637) [Bug]: Docker container root process (unverifiable via EACCES) permanently blocks updater runtime cleanup on Linux
- [#200667](https://github.com/openclaw/openclaw/issues/200667) [Bug]: claude-cli turn aborts with "Native tool authority capture is no longer active" when an unrelated (policy-excluded) MCP server fails to start on warm-session reuse
- [#173896](https://github.com/openclaw/openclaw/issues/173896) [Bug]: Google Meet bidi audio stops right after the join call returns with managed browser capture
- [#200508](https://github.com/openclaw/openclaw/issues/200508) [Bug]: 2026.11.4 update repair misses legacy triage custody when package recovery pins a different lease store
- [#188043](https://github.com/openclaw/openclaw/issues/188043) [Bug]: Failed media understanding drops the provider's HTTP status/code (auth, quota, rate limit) from the agent marker and the log
- [#200182](https://github.com/openclaw/openclaw/issues/200182) [Bug]: Native paste from the session transcript can duplicate text in the composer
- [#187435](https://github.com/openclaw/openclaw/issues/187435) Telegram sendMessage regression — high failure rate after 2026.10.7 update
- [#177576](https://github.com/openclaw/openclaw/issues/177576) synology-chat: outbound sends never report a message identity, causing false delivery failures
- [#197855](https://github.com/openclaw/openclaw/issues/197855) Outbound media loader doesn't apply tools.web.fetch.ssrfPolicy (blockedHostnames)
- [#182688](https://github.com/openclaw/openclaw/issues/182688) [Bug]: Agent avatars stored as data URLs 404 in session owner/participant avatars (bare /avatar/<id> URL)
- [#200122](https://github.com/openclaw/openclaw/issues/200122) fix(cli): progress reporting prints literal NaN% and a malformed OSC sequence on NaN percentage
- [#200973](https://github.com/openclaw/openclaw/issues/200973) Claude CLI resume fails with "Native tool authority capture is no longer active", then every retry fails with "Plugin invocation scope is closed"
- [#197880](https://github.com/openclaw/openclaw/issues/197880) [Feature]: diagnostics-prometheus: let plugins contribute their own metric families
- [#200779](https://github.com/openclaw/openclaw/issues/200779) [Bug]: Mandatory setup-helper routing blocks authorized config recovery when helper inference fails
- [#199278](https://github.com/openclaw/openclaw/issues/199278) [Bug]: A turn sent from a scheduled run to a busy Claude CLI session fails with "Cron occurrence source authority is no longer active"
- [#200757](https://github.com/openclaw/openclaw/issues/200757) [Bug]: path cannot read or edit Markdown with carriage-return line endings
- [#200646](https://github.com/openclaw/openclaw/issues/200646) [Bug]: A2A task of a message steered into an active turn stays TASK_STATE_WORKING forever (#183803 covers only followup)
- [#200744](https://github.com/openclaw/openclaw/issues/200744) claude-cli: local JSONL output-budget overflow is classified as reason=format/400 and triggers model fallback that replays an hour-long, side-effecting turn from scratch
- [#199633](https://github.com/openclaw/openclaw/issues/199633) [Bug]: Claude CLI completion turn cannot read a child result above ~7,000 characters: hook context is capped at 10,000 characters and the message-only turn has no tool to open the spilled file
- [#200635](https://github.com/openclaw/openclaw/issues/200635) macOS: Full access permissions options stretch almost the full window height
- [#200612](https://github.com/openclaw/openclaw/issues/200612) Open model setup directly when no models are available
- [#200798](https://github.com/openclaw/openclaw/issues/200798) Browser: route.continue assertion in resumeRouteSafely escapes as unhandled rejection and shuts down the Gateway (2026.11.3)
- [#200795](https://github.com/openclaw/openclaw/issues/200795) 2026.11.5: migrated Claw/Template install records still enforce consent provenance, but there's no supported way to manage or retire them
- [#200775](https://github.com/openclaw/openclaw/issues/200775) [Bug]: 2026.11.5 unbound claude-cli automations refused with "no recorded inference account"; doctor --fix doesn't detect or bind them, native CLI login ignored
- [#198437](https://github.com/openclaw/openclaw/issues/198437) [Bug]: Active Memory logs "does not support protected private transcript recall" on every turn
- [#200768](https://github.com/openclaw/openclaw/issues/200768) WhatsApp: inbound media download is attempted once; a transient network error drops the attachment
- [#198371](https://github.com/openclaw/openclaw/issues/198371) Control UI: make “Thinking default” editable per agent in Agents Overview
- [#199875](https://github.com/openclaw/openclaw/issues/199875) Control UI: a connection that died while you were in another app is replaced late after you switch back
- [#200728](https://github.com/openclaw/openclaw/issues/200728) Control UI: composer actions overlap the editor at short mobile viewport heights
- [#200724](https://github.com/openclaw/openclaw/issues/200724) [Bug]: macOS 2026.11.5 publication recovery fences its own identity-bound legacy lease store
- [#200722](https://github.com/openclaw/openclaw/issues/200722) Empty cron-authority lock file permanently disables cron ("Cron receipt authority is unavailable")
- [#200701](https://github.com/openclaw/openclaw/issues/200701) [Bug]: pre-compaction memory flush fails with "No callable tools remain" for agents with an MCP-only tools.allow, and there is no per-agent memoryFlush override (2026.11.2)
- [#200583](https://github.com/openclaw/openclaw/issues/200583) First Gateway start after upgrading from 2026.11.4 fails with SQLite I/O error; restart recovers
- [#195949](https://github.com/openclaw/openclaw/issues/195949) fix(android): enforce RemoteInput choices and allowFreeFormInput in notification reply
- [#200030](https://github.com/openclaw/openclaw/issues/200030) Automation webhook POSTs skip text as output when a run skips before it starts
- [#200678](https://github.com/openclaw/openclaw/issues/200678) [Bug]: bundled internal hooks rejected as "no readable handler" when pnpm store or updater runtime hard-links them; config hot reload fails
- [#200651](https://github.com/openclaw/openclaw/issues/200651) [Bug]: Deferred restart resume fails with "Session database target changed outside captured discovery custody" when one agent's preparation is deferred (multi-agent, per-agent session stores)
- [#185079](https://github.com/openclaw/openclaw/issues/185079) [Bug]: Codex settled-turn projection rejects valid image-only Telegram history as invalid_content
- [#200633](https://github.com/openclaw/openclaw/issues/200633) [Bug]: Exec completion from an isolated cron run wakes the owner's main session (docs say originating session)
- [#200607](https://github.com/openclaw/openclaw/issues/200607) [Bug]: Session watchdog aborts the turn during a provider-error model-fallback handover, killing the next candidate before it runs
- [#200587](https://github.com/openclaw/openclaw/issues/200587) Folder-access E2E flakes when autocomplete runs before Enter
- [#200557](https://github.com/openclaw/openclaw/issues/200557) memory CLI (status/search/index) refuses to run while Gateway is up — 2026.11.4 removed the online read path 2026.10.8 had
- [#193149](https://github.com/openclaw/openclaw/issues/193149) Skills "Save key" (`skills.update`) replaces a SecretRef `apiKey` with a plaintext string in openclaw.json
- [#192735](https://github.com/openclaw/openclaw/issues/192735) claude-cli: same-model retry after a first-turn failure starts a new Claude session and loses the child's context
- [#200340](https://github.com/openclaw/openclaw/issues/200340) [Bug]: macOS app's first message fails with false "host is low on memory" because Bun's process.availableMemory() is free pages only
- [#200537](https://github.com/openclaw/openclaw/issues/200537) [Bug]: plugins reload fails with EPERM symlink on Windows without Developer Mode; the Gateway start path uses a junction for the same link
- [#200487](https://github.com/openclaw/openclaw/issues/200487) Qualify watched-session prompt refresh with PostgreSQL
- [#198970](https://github.com/openclaw/openclaw/issues/198970) [Bug]: Codex model catalog timeout can abort replies before model fallback
- [#197552](https://github.com/openclaw/openclaw/issues/197552) [Bug]: Every isolated cron `agentTurn` gets zero tools since 2026.10.10 ("No callable tools remain … runtime toolsAllow: *"), masked by fallback as "incompatible with its recorded inference account and route" (still on 2026.11.3)
- [#200513](https://github.com/openclaw/openclaw/issues/200513) Bug: reloadAndResume handoff fails with closed plugin invocation scope and no completion receipt
- [#199454](https://github.com/openclaw/openclaw/issues/199454) [Feature]: Add a Colombian lobster, the Clawlombian, to the Lobsterdex
- [#200228](https://github.com/openclaw/openclaw/issues/200228) CI fails before testing when Boat sandbox starts are exhausted
- [#200443](https://github.com/openclaw/openclaw/issues/200443) managed update finalize logs one WARN JSON blob per doctor step, including "plugin data/settings upgrade is unfinished" for every plugin
- [#200451](https://github.com/openclaw/openclaw/issues/200451) [Bug]: doctor SQLite migration failure report does not redact home paths on native Windows (HOME unset, USERPROFILE used)
- [#200463](https://github.com/openclaw/openclaw/issues/200463) Cold storage: `Transcript remains in SQLite because its archive exceeds the 64 MiB limit` repeats every pass and cannot be tuned
- [#200462](https://github.com/openclaw/openclaw/issues/200462) `stalled session` WARN repeats every 30 s with no dedupe, backoff or config key
- [#199442](https://github.com/openclaw/openclaw/issues/199442) [Feature]: add the Clawnadian to the Lobsterdex
- [#200441](https://github.com/openclaw/openclaw/issues/200441) `session.maintenance.plan` write aborts with "SQLite automatic maintenance activity changed before age consumption" (about 2,500 times in 31 days)
- [#199466](https://github.com/openclaw/openclaw/issues/199466) [Feature]: add Santa Claws to the Lobsterdex
- [#200356](https://github.com/openclaw/openclaw/issues/200356) [Bug]: Agent port back to SQLite is refused after an update ("observed changed canonical rows or allocations")

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 264,261 · **Open issues:** 53,586 · **Last push:** <1h ago

On November 17, 2026, Hermes Agent released the v0.23.2+canary version, which includes the latest build enhancements. Among the notable merged pull requests, the addition of support for GPT-6.2 Astra and Sol stands out, alongside a fix that relocates the scope-recall feature to its new repository. Additionally, a significant bug was identified regarding encrypted reasoning in v0.23.2, causing failures on a custom chat completions route, which has drawn attention. Other emergent issues include session FIFO malfunctioning post-gateway restart and recurrent stalls in the Windows Desktop version during active use.

#### 🚀 New Releases
- [v0.23.2+canary.20261117T064624Z](https://github.com/nousresearch/hermes-agent/releases/tag/v0.23.2%2Bcanary.20261117T064624Z) Hermes Agent canary v0.23.2+canary.20261117T064624Z

#### ✅ Merged PRs
- [#157141](https://github.com/NousResearch/hermes-agent/pull/157141) feat(models): support GPT-6.2 Astra and Sol
- [#154909](https://github.com/NousResearch/hermes-agent/pull/154909) fix(plugin-catalog): move scope-recall to its new repository
- [#157206](https://github.com/NousResearch/hermes-agent/pull/157206) Pushes pass the repo's no-/tmp check again: memtomem catalog entry rewords its temp-dir mention

#### 🐛 New Issues
- [#156814](https://github.com/NousResearch/hermes-agent/issues/156814) [Mobile] Markdown images and MEDIA attachments render at the end of the message instead of in place `type/bug` `P2` 💬2
- [#157057](https://github.com/NousResearch/hermes-agent/issues/157057) kanban: terminal-worker reap anchors on run ended_at (stamped at review_requested), kills still-finalizing workers, and poisons owner admissions for the owner's lifetime `type/bug` `comp/cli` `P2` 💬1
- [#157169](https://github.com/NousResearch/hermes-agent/issues/157169) Session FIFO permanently wedged after gateway restart: a stale 'unknown' admission makes _claim_next raise unknown_execution forever `type/bug` `comp/gateway` `P2` `area/sessions` 💬1
- [#157167](https://github.com/NousResearch/hermes-agent/issues/157167) [Bug]: Cron jobs lose the tools of a stdio MCP server stopped by idle_timeout_seconds `type/bug` `comp/tools` `tool/mcp` `P2` 💬1
- [#157091](https://github.com/NousResearch/hermes-agent/issues/157091) [Bug]: v0.23.2 replays encrypted reasoning in reasoning_content truncated on a custom chat completions route; every tool turn fails with HTTP 400 `type/bug` `comp/agent` `P2` `provider/other` 💬1
- [#157142](https://github.com/NousResearch/hermes-agent/issues/157142) [Bug]: Desktop branch row with origin_json but no chat_id is unresumable — validate_legacy_row returns not_found `type/bug` `comp/gateway` `P3` `area/sessions` 💬1
- [#156951](https://github.com/NousResearch/hermes-agent/issues/156951) perf(state): compressed turn results keep their full snapshot in state_meta until the session is pruned (90 days), long past the 7-day retry horizon `type/perf` `comp/gateway` `P2` `area/sessions` 💬1
- [#156888](https://github.com/NousResearch/hermes-agent/issues/156888) [Bug][Windows Desktop]: recurrent 2–4 s Electron main-process stalls during active use; low-CPU blocking not yet attributed `type/bug` `P2` `comp/desktop` `desktop/chat` 💬1
- [#157231](https://github.com/NousResearch/hermes-agent/issues/157231) A pm sync receipt overwrites the update's latest.json within minutes, erasing its evidence and its receipt-side gateway-restart obligation `type/bug` `comp/cli` `P2`
- [#157230](https://github.com/NousResearch/hermes-agent/issues/157230) hermes update drops committed local patches with no re-apply and nothing in the receipt — only an expiring rescue ref and one mid-log line `type/bug` `comp/cli` `P2` `area/install-update`
- [#157224](https://github.com/NousResearch/hermes-agent/issues/157224) [Bug]: "runtime_coordination_required" is shown to users for a dozen unrelated failures and tells them nothing `type/bug` `comp/gateway` `P2` `area/sessions`
- [#157223](https://github.com/NousResearch/hermes-agent/issues/157223) feat(gateway,updater,desktop): add gateway.client_only mode so remote-primary Desktop hosts skip local gateway auto-spawn and update resume `type/feature` `comp/cli` `comp/gateway` `area/config`
- [#157222](https://github.com/NousResearch/hermes-agent/issues/157222) fix(desktop): prevent storage-seeded pins from re-PATCHing server-unpinned sessions after resetSessionPinMirror `type/bug` `P2` `comp/desktop` `desktop/sessions`
- [#157221](https://github.com/NousResearch/hermes-agent/issues/157221) Config MCP servers vanish from ACP (T3 Code) threads under a multiplexed gateway, from the 2nd turn and sometimes the 1st (`_make_check_fn ... returned False`) `type/bug` `comp/tools` `tool/mcp` `P3`
- [#157212](https://github.com/NousResearch/hermes-agent/issues/157212) post_api_request/post_tool_call never dispatched to lazily-loaded plugins: has_hook gate skips discovery join (oneshot ephemeral gateway) `type/bug` `comp/agent` `comp/cli` `P2`
- [#157213](https://github.com/NousResearch/hermes-agent/issues/157213) delegate_task: `tasks` given as a single object (or a JSON string of one) is rejected instead of wrapped into a list `type/bug` `comp/tools` `tool/delegate` `P2`
- [#157209](https://github.com/NousResearch/hermes-agent/issues/157209) kanban transition tools reject metadata sent as a JSON string; worker's fallback 'test call' commits a placeholder hand-off `type/bug` `comp/tools` `comp/cron` `comp/plugins`
- [#157199](https://github.com/NousResearch/hermes-agent/issues/157199) [Feature]: Add fail-closed MoA fan-out verdict and auxiliary fallback policy plugin hooks `type/feature` `comp/agent` `P2`
- [#157197](https://github.com/NousResearch/hermes-agent/issues/157197) [Bug]: Memory Keeper / Memory Palace only count tools whose names contain "memory": memory-provider tools score by naming accident `type/bug` `comp/plugins` `tool/memory` `P2`
- [#157196](https://github.com/NousResearch/hermes-agent/issues/157196) [Bug]: hermes update holds no power request — S0 modern standby suspends a Windows install mid-flow, leaving a paused gateway and an indeterminate update `type/bug` `comp/cli` `P2` `area/install-update`
- [#157194](https://github.com/NousResearch/hermes-agent/issues/157194) Teams adapter drops hyperlink targets: linked file names reach the agent as plain text `type/bug` `comp/plugins` `P2`
- [#157180](https://github.com/NousResearch/hermes-agent/issues/157180) pm: uv sync fails with EPERM on Android/f2fs — seed payload's .l2s symlink entries can't be hardlinked `type/bug` `comp/cli` `P2` `area/install-update`
- [#157176](https://github.com/NousResearch/hermes-agent/issues/157176) [Feature]: ACP provider clients should forward image parts as ACP image content blocks `type/feature` `comp/agent` `comp/acp` `tool/file`
- [#157172](https://github.com/NousResearch/hermes-agent/issues/157172) feat(secrets): opt-in encrypted disk cache for the 1Password source; approval receipts for machine-proposed changes `type/security` `comp/agent` `area/config` `P3`
- [#157165](https://github.com/NousResearch/hermes-agent/issues/157165) Restart-when-idle sees idle while a session FIFO still holds a queued input; it runs only after the restart `type/bug` `comp/gateway` `P2` `area/sessions`
- [#157163](https://github.com/NousResearch/hermes-agent/issues/157163) Desktop app: protected-file approval gates have no transport, and fire only intermittently `type/security` `comp/tools` `area/config` `P3`
- [#157164](https://github.com/NousResearch/hermes-agent/issues/157164) TUI: Ctrl+C is a no-op when the gateway already settled the turn, leaving the pane stuck busy `type/bug` `comp/tui` `P2` `area/streaming`
- [#157161](https://github.com/NousResearch/hermes-agent/issues/157161) [Bug]: Desktop file preview/download 404s for bot-sandbox files: resolve_session_id matches only sessions.id, not session_key `type/bug` `P2` `area/sessions` `area/profiles`
- [#157155](https://github.com/NousResearch/hermes-agent/issues/157155) execute_code compiles a trailing markdown/HTML fence line as Python source (SyntaxError at </code>) `type/bug` `comp/tools` `tool/code-exec` `P2`

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 97,121 · **Open issues:** 10,534 · **Last push:** <1h ago

Today was a routine maintenance day for vLLM, with no new releases. Notable merged pull requests include bug fixes to enhance system stability, such as #66409, which removes failure mechanisms from flaky tests, and #68090, addressing a guard granule issue after sleep-mode in ROCm. Significant performance improvements were also made, demonstrated by #67302, which serves the ModelOpt INT8_PB_WO on ROCm using an optimized Triton WNA16 kernel. One of the more pressing new issues reported is #68218, which highlights a bug in AsyncLLM regarding the incorrect serving of LoRA when reusing identifiers, potentially impacting model performance.

#### ✅ Merged PRs
- [#66409](https://github.com/vllm-project/vllm/pull/66409) [CI][Test] Remove the failure mechanisms of two flaky tests
- [#66099](https://github.com/vllm-project/vllm/pull/66099) [Kernel][MiniMax-M3] Drop tl.make_block_ptr from the Hopper sparse prefill
- [#67087](https://github.com/vllm-project/vllm/pull/67087) [CI] Add the CPU image's toolchain PPA without the Launchpad API
- [#65771](https://github.com/vllm-project/vllm/pull/65771) [Bugfix][Frontend] Encode special-token text as plain text in gpt-oss legacy tool-call headers
- [#68266](https://github.com/vllm-project/vllm/pull/68266) [CI][XPU] Compare inactive default mm LoRA runs via top-k logprobs
- [#67302](https://github.com/vllm-project/vllm/pull/67302) [ROCm][Quantization] Serve ModelOpt INT8_PB_WO on ROCm with an 8-bit Triton WNA16 kernel
- [#65595](https://github.com/vllm-project/vllm/pull/65595) [ROCm][DSv4.1] Share Engram host tables across DP ranks with HIP VMM
- [#68091](https://github.com/vllm-project/vllm/pull/68091) [Bugfix][Ray] Keep the DP frontend's SIGTERM handler across ray.init()
- [#68089](https://github.com/vllm-project/vllm/pull/68089) [ROCm][Bugfix] Refresh AITER env flags in forked processes
- [#68154](https://github.com/vllm-project/vllm/pull/68154) [Perf][Qwen4Exp] Raster the fused HC up+gate mix tiles N-fastest
- [#67818](https://github.com/vllm-project/vllm/pull/67818) [CI][KV Connector] Wait for vLLM processes and GPU memory between NIXL PD runs
- [#67787](https://github.com/vllm-project/vllm/pull/67787) [Bugfix][LoRA] Count base requests in the specialized CUDA graph LoRA key
- [#67864](https://github.com/vllm-project/vllm/pull/67864) [XPU] Remove VLLM_XPU_FORCE_N_CONTIG_WEIGHT
- [#67896](https://github.com/vllm-project/vllm/pull/67896) [Bugfix] Avoid read-only NumPy warnings in DeepSeek-V4.1/v41 image prepro
- [#66679](https://github.com/vllm-project/vllm/pull/66679) [Bugfix][Multimodal] Kimi-VL encoder CUDA graph: size max_seqlen in patches
- [#66067](https://github.com/vllm-project/vllm/pull/66067) [Refactor][Multimodal] Share encoder CUDA graph code: Qwen2-VL-style mixin + default budget range
- [#50118](https://github.com/vllm-project/vllm/pull/50118) [Bug][KVEvents]: Use effective block size in DCP full KV cache report
- [#66487](https://github.com/vllm-project/vllm/pull/66487) [Bugfix][RL] Don't re-tie word embeddings on direct reload
- [#67053](https://github.com/vllm-project/vllm/pull/67053) [Core][Mamba] Retain decode-crossed Mamba boundary states under sparse retention
- [#67563](https://github.com/vllm-project/vllm/pull/67563) [Direct reload] Flag padded params with fill_on_reload at construction
- [#66682](https://github.com/vllm-project/vllm/pull/66682) [CI][AMD] Run every AMD step when the ROCm image or AMD CI changes
- [#66670](https://github.com/vllm-project/vllm/pull/66670) [CI][ROCm] Skip the memory-settle stability wait when the GPU is idle
- [#68026](https://github.com/vllm-project/vllm/pull/68026) [Bugfix][Ray] Keep EngineCore's SIGTERM handler across ray.init()
- [#68256](https://github.com/vllm-project/vllm/pull/68256) [ROCm][CI] Lock every render node for multi-GPU DPX jobs
- [#68090](https://github.com/vllm-project/vllm/pull/68090) [ROCm][Bugfix] Keep a guard granule after each sleep-mode cuMem reservation
- [#68010](https://github.com/vllm-project/vllm/pull/68010) [Refactor] Remove multiple dead code in models
- [#68099](https://github.com/vllm-project/vllm/pull/68099) [Bugfix][Multimodal] Skip the Omni audio-in-video host read without audio and video
- [#68093](https://github.com/vllm-project/vllm/pull/68093) [Recipe] Kimi-K3.1-Pro: B300 PD preset serves the released DSpark draft, align with InferenceX#5108
- [#67338](https://github.com/vllm-project/vllm/pull/67338) [Attention] Decide the sparse MLA prefill route once in the metadata builder
- [#68148](https://github.com/vllm-project/vllm/pull/68148) [CI] Remove CODEOWNERS entries for users without write access
- [#67659](https://github.com/vllm-project/vllm/pull/67659) [Perf][Hy4] Sequence parallelism for iHC
- [#68220](https://github.com/vllm-project/vllm/pull/68220) [Recipe] Kimi-K3.1-Pro: document the GB300 DEP lanes' frontend session affinity and weight load format, align with InferenceX#5069
- [#64027](https://github.com/vllm-project/vllm/pull/64027) [Frontend] Support output logprobs for gpt-oss in the Responses API
- [#66677](https://github.com/vllm-project/vllm/pull/66677) [Perf][PP] Copy-engine PP transport: TP > 1, PCP > 1 and multi-node NVLink
- [#68047](https://github.com/vllm-project/vllm/pull/68047) [Bugfix][NIXL] Re-handshake a pull peer whose connection NIXL reports lost
- [#58387](https://github.com/vllm-project/vllm/pull/58387) [Model] Add NemotronLabsDiffusion support with tri-mode inference
- [#65215](https://github.com/vllm-project/vllm/pull/65215) [Docs] Generate quantization method, scheme, and linear backend tables
- [#68213](https://github.com/vllm-project/vllm/pull/68213) [Recipe] Kimi-K3.1-Pro: serve the preview DSpark draft in the GB300 AgentX presets, align with InferenceX#5069
- [#60255](https://github.com/vllm-project/vllm/pull/60255) [Bugfix][NIXL] Apply DCP config checks to NixlPullConnector
- [#66547](https://github.com/vllm-project/vllm/pull/66547) [Transformers backend] Serve Llama with the Transformers modeling backend
- [#64109](https://github.com/vllm-project/vllm/pull/64109) [Core][Spec Decode] Back only the tail of DFlash/DSpark sliding-window drafter KV
- [#67719](https://github.com/vllm-project/vllm/pull/67719) [Recipe] Kimi-K3.1-Pro: update GB300 AgentX presets, align with InferenceX#5069
- [#65706](https://github.com/vllm-project/vllm/pull/65706) [Perf][GLM-5.3] Add FlashInfer warp split-K GEMMs to the SM107 low-latency table and fix q_b's M=1 fallback

#### 🐛 New Issues
- [#68218](https://github.com/vllm-project/vllm/issues/68218) [Bug]: AsyncLLM still serves the wrong LoRA when a lora_int_id is reused for a different adapter (#67970 only guards LLMEngine) `bug` 💬2
- [#68137](https://github.com/vllm-project/vllm/issues/68137) [Bug]: Qwen3 Python parser treats trailing reasoning whitespace as answer text `bug` `tool-calling` 💬2
- [#68209](https://github.com/vllm-project/vllm/issues/68209) [Bug]: Without the extensible KV cache, CUDA graph memory profiling allocates one KV block per request and OOMs at startup 💬2
- [#68081](https://github.com/vllm-project/vllm/issues/68081) [Bug]: MTP speculative decoding is a net performance negative on Qwen3.5/3.8 hybrid (GDN/mamba) models `speculative-decoding` 💬2
- [#68282](https://github.com/vllm-project/vllm/issues/68282) [Bug][Spec Decode] DSpark initialization fails with EPLB under PCP-only expert parallelism 💬1
- [#68264](https://github.com/vllm-project/vllm/issues/68264) [Bug]: gpt-oss strict json_schema can end with a character-spelled "<|end|>" because the Harmony final-channel end tag is matched as a string `structured-output` `tool-calling` `gpt-oss` 💬1
- [#68242](https://github.com/vllm-project/vllm/issues/68242) [Installation]: ROCm 0.34.x Invalid Wheel-Version in WHEEL file: None `installation` `rocm` 💬1
- [#68194](https://github.com/vllm-project/vllm/issues/68194) [Bug]: --quantization humming crashes at load when a layer falls back to unquantized ('UnquantizedLinearMethod' object has no attribute '_gemm_impl') `quantization` 💬1
- [#68173](https://github.com/vllm-project/vllm/issues/68173) [Performance][ROCm][MoE] __amd_rocclr_copyBuffer fires after every moe_sum call — ~98k times/rank on MI350X, not observed on B200 `rocm` 💬1
- [#68165](https://github.com/vllm-project/vllm/issues/68165) [Bug]: DeepSeek V4.1 eager image span assembly triggers GPU sync guard on SM80 `deepseek` 💬1
- [#68156](https://github.com/vllm-project/vllm/issues/68156) [Feature]: Add a synchronization hook for indexer cache loading before sparse top-k execution `feature request` 💬1
- [#68123](https://github.com/vllm-project/vllm/issues/68123) [Discussion] Separate Mamba state pool from the paged KV pool for hybrid models (directional proposal) 💬1
- [#68104](https://github.com/vllm-project/vllm/issues/68104) [ROCm][AMD] MiniMax-M3.1-Flash gfx950 / MI355X Performance Optimization (vLLM) `rocm` `minimax` 💬1
- [#68277](https://github.com/vllm-project/vllm/issues/68277) [Bug]: Kimi close-then-reopen speculative drafts can bypass required JSON masks `structured-output` `kimi`
- [#68273](https://github.com/vllm-project/vllm/issues/68273) [Feature][Rust Frontend]: Support mm_payload "metadata" in render and metadata-only features in generate `rust`
- [#68269](https://github.com/vllm-project/vllm/issues/68269) [Bug]: Qwen3-VL video pruning: text and decode positions after a video are wrong when the video is a prefix-cache hit
- [#68268](https://github.com/vllm-project/vllm/issues/68268) [Bug]: Video pruning (EVS / VidCom2) on Qwen3-VL: M-RoPE positions above 256 are rounded because they travel inside the bfloat16 embedding tensor
- [#68265](https://github.com/vllm-project/vllm/issues/68265) [Feature]: Skip unused last-layer FFN computation during prefill while preserving mathematical equivalence `feature request`
- [#68258](https://github.com/vllm-project/vllm/issues/68258) [Bug] Sync scheduler loses decode-filled blocks in Mamba align mode with spec decode (K ≥ 2) `scheduler`
- [#68259](https://github.com/vllm-project/vllm/issues/68259) [Feature] Track an explicit mamba_block_size like user_specified_block_size
- [#68216](https://github.com/vllm-project/vllm/issues/68216) [Bug]: kv_hints block_hashes lose precision on the vllm.Inference gRPC API, so KVCR rejects them
- [#68212](https://github.com/vllm-project/vllm/issues/68212) [Bug]: max_tokens_per_query / max_tokens_per_doc are ignored for multimodal content in embedding and late-interaction scoring `multi-modality` `pooling`
- [#68205](https://github.com/vllm-project/vllm/issues/68205) [Bug]: DFlash2 drafter trained with speculators fails draft warmup (model_output tuple assert) while shape-identical z-lab drafter serves
- [#68203](https://github.com/vllm-project/vllm/issues/68203) [Bug]: Request hangs forever when --encoder-cache-size exceeds the encoder compute budget and an image is larger than that budget
- [#68195](https://github.com/vllm-project/vllm/issues/68195) [Bug]: --quantization humming keeps each quantized layer's checkpoint qweight storage alive next to the converted weight (~2x weight memory) `quantization`
- [#68192](https://github.com/vllm-project/vllm/issues/68192) [Performance]: FP8 KV cache on SM89 auto-selects FlashInfer, which leaves far less KV cache than Triton at the same speed `quantization`
- [#68184](https://github.com/vllm-project/vllm/issues/68184) [Bug]: Extensible KV cache keeps ~2.7 GiB free on an 8 GB GPU, so a 4B model no longer starts at 4096 context
- [#68152](https://github.com/vllm-project/vllm/issues/68152) [Bug]: NemotronH MTP drafts multimodal prompts from text only `multi-modality`
- [#68107](https://github.com/vllm-project/vllm/issues/68107) [Bug]: LoRA-enabled server dies when adapter generations mix with base-model prompt logprobs: suspected out-of-bounds in the punica shrink/expand path of LogitsProcessorWithLoRA under prompt-logprob chunking
- [#68075](https://github.com/vllm-project/vllm/issues/68075) [RFC]: Keep agent KV in the CPU offload tier across tool calls, using client hints `feature request` `tool-calling`
- [#68079](https://github.com/vllm-project/vllm/issues/68079) [RFC]: Keep agent KV in the CPU offload tier across tool calls, using client hints `RFC` `tool-calling`

#### 🔒 Closed Issues
- [#65569](https://github.com/vllm-project/vllm/issues/65569) [Performance]: Batch-invariant mode on Hopper/Blackwell routes Linear layers to Triton although cuBLAS is already batch-invariant under the mode's settings
- [#65770](https://github.com/vllm-project/vllm/issues/65770) [Bug]: gpt-oss chat completions return 500 when a prior tool call name contains special-token text
- [#67307](https://github.com/vllm-project/vllm/issues/67307) [CI Failure]: NVIDIA nightly failures
- [#49338](https://github.com/vllm-project/vllm/issues/49338) [CI Failure]: LM Eval Humming Act fp8/int8
- [#59415](https://github.com/vllm-project/vllm/issues/59415) [Bug]: Qwen3.6-35B-A3B-FP8 model with TP 4 gives gibberish output !!!!!!!!!!!! on Intel B70 cards
- [#64427](https://github.com/vllm-project/vllm/issues/64427) [Bug][Spec Decode] Qwen3.8-27B on Ascend: num_speculative_tokens >= 8 produces garbled output, k <= 7 clean
- [#68218](https://github.com/vllm-project/vllm/issues/68218) [Bug]: AsyncLLM still serves the wrong LoRA when a lora_int_id is reused for a different adapter (#67970 only guards LLMEngine)
- [#67911](https://github.com/vllm-project/vllm/issues/67911) [Bug]: MiniMax-M3.1-Flash fails on nightly with transformers 5.23.0: 'MiniMaxM3VLTextConfig' object has no attribute 'sparse_attention_config'
- [#59551](https://github.com/vllm-project/vllm/issues/59551) [Bug]: Qwen3.6-35B-A3B model with TP 2 and DP 2 returns gibberish output on Intel B70 cards
- [#60871](https://github.com/vllm-project/vllm/issues/60871) [Bug]: Multi-backend block-size selection skips get_preferred_block_size
- [#68034](https://github.com/vllm-project/vllm/issues/68034) [RFC]: Shared boundary helpers for sequence-parallel residual streams
- [#60189](https://github.com/vllm-project/vllm/issues/60189) [Bug]: NIXL DCP config checks don't apply to NixlPullConnector
- [#67595](https://github.com/vllm-project/vllm/issues/67595) [Bug]: pip install vllm==0.33.0 resolves mismatched CUDA toolchain (nvcc 13.5.x + cuda-toolkit 13.0.x), breaking FlashInfer JIT
- [#67786](https://github.com/vllm-project/vllm/issues/67786) [Bug]: LoRA adapter not applied in batches mixed with base requests under specialize_active_lora and CUDA graphs
- [#61629](https://github.com/vllm-project/vllm/issues/61629) [Feature]: Support logprobs / top_logprobs for gpt-oss (Harmony) models in /v1/responses
- [#67003](https://github.com/vllm-project/vllm/issues/67003) [Tracking]: Llama and Qwen2 on the Transformers modeling backend
- [#65360](https://github.com/vllm-project/vllm/issues/65360) [Bug]: /inference/v1/generate usage omits reasoning_tokens in derender mode
- [#68075](https://github.com/vllm-project/vllm/issues/68075) [RFC]: Keep agent KV in the CPU offload tier across tool calls, using client hints

### SGLang (`sgl-project/sglang`)

**Stars:** 38,995 · **Open issues:** 6,843 · **Last push:** <1h ago

On November 18, 2026, SGLang did not release any new versions but saw several significant developments with merged pull requests. Notably, PR #51118 improved the documentation for PyPI and container installs, while #50820 fixed a pipeline crash for TileLang FlashMLA on gfx942 and #50783 enhanced support for enabling dspark & dp attention during prefill. Additionally, critical fixes were made in the encoder with PR #51114 addressing scalar hashes and media payload handling. Unfortunately, the day also opened up several new issues, with #51095 highlighting a bug in `decode_attention_fwd` where MHA decode can return NaN in fp16 for certain conditions, raising concerns about numerical stability in critical operations.

#### ✅ Merged PRs
- [#50820](https://github.com/sgl-project/sglang/pull/50820) [Fix] [AMD] dsv4: fix TileLang FlashMLA on gfx942 (pipeline crash + fnuz KV decode)
- [#50783](https://github.com/sgl-project/sglang/pull/50783) [Fix] [NPU] dspark: Support enabling dspark&dp attention during prefill while also enabling pp or cp
- [#51149](https://github.com/sgl-project/sglang/pull/51149) [Chore] CODEOWNERS: Add Shunkangz as a weight_cache owner
- [#49749](https://github.com/sgl-project/sglang/pull/49749) [CI] [AMD] muse-spark: Add a MI35x nightly MMMU accuracy gate
- [#49930](https://github.com/sgl-project/sglang/pull/49930) [CI] [AMD] diffusion: Fix two layerwise-offload unit tests on ROCm
- [#51124](https://github.com/sgl-project/sglang/pull/51124) [Fix] [Intel] cpu: Pin Outlines to compatible version
- [#51133](https://github.com/sgl-project/sglang/pull/51133) [CI] cpu: Register test_quant_ops to the renamed extra-test-cpu-intel suite
- [#41329](https://github.com/sgl-project/sglang/pull/41329) [Feat] [CPU] quantization: Add CPU FP8/INT8 quant ops and compressed-tensors support
- [#51114](https://github.com/sgl-project/sglang/pull/51114) [Fix] encoder: Reject scalar hashes, accept an empty feature list, and keep media payloads out of load errors
- [#51123](https://github.com/sgl-project/sglang/pull/51123) [Fix] encoder: Keep a result reached in the timeout tick and format the gRPC receive URL IPv6-safe
- [#50895](https://github.com/sgl-project/sglang/pull/50895) [Perf] disaggregation: Stream a PD decode request's first token with its first decode output
- [#50023](https://github.com/sgl-project/sglang/pull/50023) [Feat] [NPU] hicache: Support modelslim MLA fp8 kv and GQA mxfp8 kv for L2 Hicache
- [#51116](https://github.com/sgl-project/sglang/pull/51116) [Refactor] muse-spark: Delete unreachable kernels and dispatch modes
- [#44769](https://github.com/sgl-project/sglang/pull/44769) [Feat] [Intel] lora: Add intel_xpu LoRA backend
- [#51118](https://github.com/sgl-project/sglang/pull/51118) [Doc] sgl-router: Document the PyPI and container installs in one place
- [#51111](https://github.com/sgl-project/sglang/pull/51111) [Fix] disaggregation: Count a prefill rank once in the bootstrap server however often it registers
- [#50008](https://github.com/sgl-project/sglang/pull/50008) [Fix] moe: Pad NVFP4 trtllm hidden size to a multiple of 256
- [#51077](https://github.com/sgl-project/sglang/pull/51077) [Fix] mooncake: Snapshot a room's transfer infos in the worker and blacklist the session on an aux write failure
- [#50076](https://github.com/sgl-project/sglang/pull/50076) [CI] sgl-router: Release the router image and PyPI wheel from router-v* tags
- [#51101](https://github.com/sgl-project/sglang/pull/51101) [Test] rust-server: Decouple the request-log fixture from the request classes' fields
- [#49290](https://github.com/sgl-project/sglang/pull/49290) [Fix] diffusion/security: Use safe_pickle_loads for DiffusionServer inbound requests (#49290)
- [#50196](https://github.com/sgl-project/sglang/pull/50196) [Perf] [AMD] mhc: Enable AITER mHC kernels on gfx942
- [#50740](https://github.com/sgl-project/sglang/pull/50740) [Feat] spec/dflash: Per-request draft KV ring for all-sliding-window MHA drafts (trtllm_mha, fa4)
- [#50712](https://github.com/sgl-project/sglang/pull/50712) [Fix] disaggregation: Poll the decode transfer queue while retracted requests wait
- [#38344](https://github.com/sgl-project/sglang/pull/38344) [Feat] CP: Prefill context parallelism for Kimi K3
- [#38766](https://github.com/sgl-project/sglang/pull/38766) [Feat] diffusion: Enable rank-local TP checkpoint loading for MiniMax-H3
- [#50748](https://github.com/sgl-project/sglang/pull/50748) [Fix] [AMD] monokernels: Keep a draft's forward when it does not meet the spec's hf_config
- [#46190](https://github.com/sgl-project/sglang/pull/46190) [Feat] spec: confidence-scheduled compact verify for DFLASH
- [#50126](https://github.com/sgl-project/sglang/pull/50126) [Perf] tokenizer: Return output sampling masks as flat arrays on request
- [#48097](https://github.com/sgl-project/sglang/pull/48097) [Feat] [AMD] moe: Run AITER MegaMoEGfx1250 with the mori dispatch
- [#51044](https://github.com/sgl-project/sglang/pull/51044) [CI] tests: Register the qknorm rope AMD tests under the renamed JIT stage and cap ml-dtypes on AMD
- [#50874](https://github.com/sgl-project/sglang/pull/50874) [CI] suites: Unify CI suite and command names, skip instead of fail without run-ci, and share one finish-job check
- [#44349](https://github.com/sgl-project/sglang/pull/44349) [Feat] beam-search: Add trie head and shared-context attention
- [#50983](https://github.com/sgl-project/sglang/pull/50983) [Fix] gc: Warn on frozen garbage instead of reporting a leak
- [#50059](https://github.com/sgl-project/sglang/pull/50059) [Fix] mem_cache: Insert the prompt end in the same checkpoint as an SWA branch point
- [#46029](https://github.com/sgl-project/sglang/pull/46029) [Feat] [NPU] diffusion: Integrate MindIE-SD quantized attention into Ascend FA
- [#47293](https://github.com/sgl-project/sglang/pull/47293) [Fix] unified_cache: Restore Inkling MTP draft state in the direct external linker

#### 🐛 New Issues
- [#51095](https://github.com/sgl-project/sglang/issues/51095) [Bug] `decode_attention_fwd`: MHA decode returns NaN in fp16 when one q*k product exceeds 65504 💬2
- [#51029](https://github.com/sgl-project/sglang/issues/51029) [Bug] rust-server: generated text drops the first token’s leading space for Llama-2-style (SentencePiece) tokenizers 💬2
- [#50989](https://github.com/sgl-project/sglang/issues/50989) [Bug] Dockerfile Pillow upgrade allows 13.x despite sglang requiring pillow<13 💬2
- [#51098](https://github.com/sgl-project/sglang/issues/51098) [Bug] `w8a8_block_fp8_matmul_triton`: row offset wraps for inputs with >= 2^31 elements 💬1
- [#50943](https://github.com/sgl-project/sglang/issues/50943) [Roadmap] Unified weight snapshot loading: weight cache, R-Fork and stores
- [#51103](https://github.com/sgl-project/sglang/issues/51103) [Bug] `fused_moe_router_shim`: softcapped router weights are NaN for large finite logits 💬1
- [#51097](https://github.com/sgl-project/sglang/issues/51097) [Bug] `launch_reshape_and_cache_flash`: `k_scale` and `v_scale` do not work independently 💬1
- [#51094](https://github.com/sgl-project/sglang/issues/51094) [Bug] MoE LoRA applies the router weight to the wrong projection when `apply_router_weight_on_input=True` (Llama 4) 💬1
- [#51096](https://github.com/sgl-project/sglang/issues/51096) [Bug] `extend_attention_fwd_unified` reads the wrong tree-mask bits on sliding-window layers 💬1
- [#51011](https://github.com/sgl-project/sglang/issues/51011) [Bug] [NPU] Seeded sampling produces incorrect MurmurHash32 integers 💬1
- [#51119](https://github.com/sgl-project/sglang/issues/51119) [Bug] [AMD] NIXL disaggregation test aborts on MI35x: LLVM option 'spirv-expand-step' registered more than once `amd`
- [#51110](https://github.com/sgl-project/sglang/issues/51110) [Bug] Mamba2 target verify with `--speculative-adaptive` writes intermediate SSM states with the wrong row stride
- [#51109](https://github.com/sgl-project/sglang/issues/51109) [Bug] `mamba_chunk_scan_combined`: token offsets wrap in `_chunk_state_varlen_kernel` and `_chunk_scan_fwd_kernel` for >= 2^31 elements
- [#51108](https://github.com/sgl-project/sglang/issues/51108) [Bug] `mamba_chunk_scan_combined` varlen: a non-finite value in one sequence makes the other sequences in the same chunk NaN
- [#51107](https://github.com/sgl-project/sglang/issues/51107) [Bug] PP speculative decoding: Mamba2, LFM2 and fused Qwen4 short-conv verify write intermediate states to batch rows, but the commit reads `req_pool_indices` rows
- [#51106](https://github.com/sgl-project/sglang/issues/51106) [Bug] `fused_hc_head`: wrong result when `hc_mult` is not a power of 2
- [#51105](https://github.com/sgl-project/sglang/issues/51105) [Bug] `FusedPostNormResidualPreNorm.forward_triton` reads the scalar residual alpha as a per-channel vector when `use_stream_gate=False`
- [#51104](https://github.com/sgl-project/sglang/issues/51104) [Bug] `per_token_quant_int8`: row offset wraps for inputs with >= 2^31 elements
- [#51102](https://github.com/sgl-project/sglang/issues/51102) [Bug] `sigmoid_gate_topk_renorm`: routing weights are NaN when all selected sigmoid scores underflow
- [#51100](https://github.com/sgl-project/sglang/issues/51100) [Bug] `--lora-use-virtual-experts`: MoE LoRA fails with "arange's range must be a power of 2" for max LoRA rank 12, 24, 40 or 48
- [#51099](https://github.com/sgl-project/sglang/issues/51099) [Bug] `chunked_sgmv_lora_shrink_forward` / `chunked_sgmv_lora_expand_forward`: token row offset wraps for >= 2^31 elements
- [#51045](https://github.com/sgl-project/sglang/issues/51045) [Bug] HiCache file storage reuses KV across --dtype changes (fp16 KV served to bf16)
- [#51036](https://github.com/sgl-project/sglang/issues/51036) [Bug] openai: /v1/tokenize returns 500 with --skip-tokenizer-init
- [#51018](https://github.com/sgl-project/sglang/issues/51018) [RFC] [NPU] MoE expert offloading through Paged Experts
- [#51009](https://github.com/sgl-project/sglang/issues/51009) [Bug] Qwen3.8-Flash-Next QSA: a verify window crossing a 4-token group overwrites the pending index-key ring (MTP 1-3 affected)
- [#51007](https://github.com/sgl-project/sglang/issues/51007) [CI] NPU base CI was disabled
- [#50945](https://github.com/sgl-project/sglang/issues/50945) [Bug] GLM streaming parsing corrupts string argument boundaries

#### 🔒 Closed Issues
- [#36452](https://github.com/sgl-project/sglang/issues/36452) [Perf] NEXTN/EAGLE: draft embed_tokens/lm_head copies are released after KV pool sizing, significantly shrinking max_total_num_tokens
- [#38821](https://github.com/sgl-project/sglang/issues/38821) [Bug] GLM-5.3-Flash vision: single JPEG data URL is misidentified as an unrelated bird on 8x H20
- [#39836](https://github.com/sgl-project/sglang/issues/39836) [Bug] Qwen3CoderDetector: a duplicated `<parameter=NAME>` tag mid-value truncates array/object arguments and silently overwrites the earlier match
- [#39843](https://github.com/sgl-project/sglang/issues/39843) [Bug] OpenAI-compatible API: Python and Rust render different prompts for identical POST /v1/chat/completions requests
- [#40236](https://github.com/sgl-project/sglang/issues/40236) [Bug] DeepSeek V4/V3.2: DSML tool calls returned as content with no tool_calls (bare invoke, unterminated section, malformed sibling)
- [#40083](https://github.com/sgl-project/sglang/issues/40083) [Bug] json_schema accepts uniqueItems and multipleOf but does not enforce them
- [#40084](https://github.com/sgl-project/sglang/issues/40084) [ROCm][QuickReduce] Q8 BF16→FP16 low-amplitude scale saturation attenuates all-reduce output
- [#40125](https://github.com/sgl-project/sglang/issues/40125) [PD disaggregation] Duplicate client-supplied `bootstrap_room` crashes prefill and decode schedulers (uncaught `KeyError` / `ValueError`) # Checklist
- [#39262](https://github.com/sgl-project/sglang/issues/39262) [Bug] DSparkWorkerV2.forward_batch_generation is missing pp_proxy_tensors — every non-overlap step crashes (always hit for lfm2 + DSpark)
- [#40076](https://github.com/sgl-project/sglang/issues/40076) [Bug] A single /v1/chat/completions request with top_logprobs > vocab size kills the scheduler
- [#39850](https://github.com/sgl-project/sglang/issues/39850) [Bug] GLM-5.3-Flash (glm5_next): image requests render a no-multimodal reminder instead of the image placeholder — model never sees the image
- [#40072](https://github.com/sgl-project/sglang/issues/40072) [Bug] Tokenizer workers open CUDA contexts on the base GPU despite --mm-feature-transport cpu
- [#50722](https://github.com/sgl-project/sglang/issues/50722) [Bug] Streaming throughput down ~22% at high concurrency since c81230bffe (per-chunk is_disconnected() poll)
- [#50711](https://github.com/sgl-project/sglang/issues/50711) [Bug] PD decode stops making progress after a retraction: arrived transfers are never polled while the retracted request waits
- [#50716](https://github.com/sgl-project/sglang/issues/50716) [Bug] After an in_place pause, a weight update can overwrite weights the last launched step is still reading

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 135,691 · **Open issues:** 2,612 · **Last push:** <1h ago

Today, llama.cpp saw a series of important updates with the release of versions b12496 through b12490, including enhancements such as improved stream_k algorithm tuning for AMD GCN in b12496 and new kokoro TTS support in b12494. The CUDA updates in b12493 introduced the use of an implicit GEMM conv2d path for F32 kernels, significantly boosting performance. Among the merged features, the addition of support for Qwen3-TTS' ICL/reference mode in PR #32438 and fixes for grammar handling in the server were notable. However, new issues emerged, particularly #32511, which raises follow-up questions regarding configuration after previous changes, indicating continued challenges in optimizing hardware interactions.

#### 🚀 New Releases
- [b12496](https://github.com/ggml-org/llama.cpp/releases/tag/b12496) b12496
- [b12494](https://github.com/ggml-org/llama.cpp/releases/tag/b12494) b12494
- [b12493](https://github.com/ggml-org/llama.cpp/releases/tag/b12493) b12493
- [b12492](https://github.com/ggml-org/llama.cpp/releases/tag/b12492) b12492
- [b12491](https://github.com/ggml-org/llama.cpp/releases/tag/b12491) b12491
- [b12490](https://github.com/ggml-org/llama.cpp/releases/tag/b12490) b12490
- [b12489](https://github.com/ggml-org/llama.cpp/releases/tag/b12489) b12489
- [b12488](https://github.com/ggml-org/llama.cpp/releases/tag/b12488) b12488
- [b12487](https://github.com/ggml-org/llama.cpp/releases/tag/b12487) b12487
- [b12485](https://github.com/ggml-org/llama.cpp/releases/tag/b12485) b12485

#### ✅ Merged PRs
- [#32415](https://github.com/ggml-org/llama.cpp/pull/32415) vulkan: disable flip Flash Attention shader on AMD Windows due to a driver bug
- [#32434](https://github.com/ggml-org/llama.cpp/pull/32434) server: slot_sched: fix lora and recurrent
- [#32427](https://github.com/ggml-org/llama.cpp/pull/32427) mtmd: support tiny-voca
- [#30022](https://github.com/ggml-org/llama.cpp/pull/30022) ggml-cuda: hip: Tune stream_k algo and mmq configs to use stream_k on AMD GCN
- [#32480](https://github.com/ggml-org/llama.cpp/pull/32480) ui: publish @ggml-org/llama-ui from CI, and release 0.4.0
- [#32413](https://github.com/ggml-org/llama.cpp/pull/32413) mtmd: add kokoro tts support
- [#32482](https://github.com/ggml-org/llama.cpp/pull/32482) cuda: use the implicit GEMM conv2d path for F32 kernels
- [#31002](https://github.com/ggml-org/llama.cpp/pull/31002) opencl: add bin kernel `kernel_gemm_noshuffle_q5_k_f32_32b_trans_ila_a7_bin`
- [#32438](https://github.com/ggml-org/llama.cpp/pull/32438) mtmd: Add support for Qwen3-TTS' ICL/reference mode
- [#32483](https://github.com/ggml-org/llama.cpp/pull/32483) qwen4exp : fix graph reallocation from the n-gram table scale
- [#32377](https://github.com/ggml-org/llama.cpp/pull/32377) server : return 400 when grammar and ignore_eos are on
- [#32239](https://github.com/ggml-org/llama.cpp/pull/32239) ggml-cuda: disable quantized matvec fusion on all Pascal GPUs
- [#32065](https://github.com/ggml-org/llama.cpp/pull/32065) Title: CUDA: few-row MMQ for MUL_MAT_ID
- [#32469](https://github.com/ggml-org/llama.cpp/pull/32469) ui: turn the live markdown preview off by default
- [#32477](https://github.com/ggml-org/llama.cpp/pull/32477) ggml : decode F8_E4M3 to fp32 without ldexpf
- [#31855](https://github.com/ggml-org/llama.cpp/pull/31855) CUDA: use block reductions for whole-row pool_1d
- [#32476](https://github.com/ggml-org/llama.cpp/pull/32476) convert : fix FP8 qwen4exp checkpoints (n-gram table scale, block-scaled FP8)
- [#32137](https://github.com/ggml-org/llama.cpp/pull/32137) llama : keep the k-pool layout prefix on sequence edits
- [#32249](https://github.com/ggml-org/llama.cpp/pull/32249) vocab : speed up PLaMo-2/3 tokenizer table build
- [#32468](https://github.com/ggml-org/llama.cpp/pull/32468) ui: Llama UI design system: tokens, surfaces and fonts
- [#32392](https://github.com/ggml-org/llama.cpp/pull/32392) cuda : raise shared mem limit only for the launched kernel
- [#32435](https://github.com/ggml-org/llama.cpp/pull/32435) mtmd: support Minimax-Music3
- [#32397](https://github.com/ggml-org/llama.cpp/pull/32397) chat: add tts_dict for kokoro G2P template
- [#32213](https://github.com/ggml-org/llama.cpp/pull/32213) sycl: use fast division in bin-bcast kernels
- [#32407](https://github.com/ggml-org/llama.cpp/pull/32407) Rotate K/V read order for better L2 cache hit rates
- [#32402](https://github.com/ggml-org/llama.cpp/pull/32402) ui: turn conversation tabs off by default
- [#32463](https://github.com/ggml-org/llama.cpp/pull/32463) ui: move Llama Chat to SvelteKit 3 and its built-in service worker
- [#32393](https://github.com/ggml-org/llama.cpp/pull/32393) qwen3next : apply output projection weight scale
- [#28069](https://github.com/ggml-org/llama.cpp/pull/28069) [Performance] [metal] : Up to 18x speedup on CONV_2D
- [#31066](https://github.com/ggml-org/llama.cpp/pull/31066) nix: expose a SYCL package
- [#31536](https://github.com/ggml-org/llama.cpp/pull/31536) [SYCL] Fix FA mkl issue: a mask broadcast over heads or batches
- [#31695](https://github.com/ggml-org/llama.cpp/pull/31695) [WebGPU] Implement timestep embedding
- [#32140](https://github.com/ggml-org/llama.cpp/pull/32140) webgpu : use f32 while dequantizing to avoid FTZ
- [#32319](https://github.com/ggml-org/llama.cpp/pull/32319) opencl: support f16 and non-contig f32 silu
- [#31003](https://github.com/ggml-org/llama.cpp/pull/31003) opencl: add bin kernel `kernel_gemm_noshuffle_q8_0_f32_32b_trans_ila_a7_bin`

#### 🐛 New Issues
- [#32511](https://github.com/ggml-org/llama.cpp/issues/32511) Volta (SM72) follow-up: prefill numbers + open question on the FA config table after #27997 💬2
- [#32503](https://github.com/ggml-org/llama.cpp/issues/32503) Misc. bug: llama-cvector-generator`: direction.N is measured one block upstream of its injection point, and the final layer's residual is rejected so the deepest steering depth is unmeasurable `bug-unconfirmed` 💬2
- [#32493](https://github.com/ggml-org/llama.cpp/issues/32493) Misc. bug: server: realtime transcription sessions drop the ASR instruction, so Gemma answers the audio instead of transcribing it `bug-unconfirmed` 💬2
- [#32509](https://github.com/ggml-org/llama.cpp/issues/32509) dflash/DSpine: lattice crash (ggml_reshape_3d assert) at any draft n_max >= 1 — root cause, fix and verification 💬1
- [#32479](https://github.com/ggml-org/llama.cpp/issues/32479) Misc. bug: jinja: trim / strip() only strip ASCII whitespace and match custom chars bytewise, diverging from Python Jinja2 `bug-unconfirmed` 💬1
- [#32460](https://github.com/ggml-org/llama.cpp/issues/32460) Feature Request: CPU tensor parallelism over NUMA nodes as devices using the existing meta backend `enhancement` 💬1
- [#32512](https://github.com/ggml-org/llama.cpp/issues/32512) Misc. bug: The UI does not display the javascript code that gets executed. `bug-unconfirmed`
- [#32496](https://github.com/ggml-org/llama.cpp/issues/32496) Misc. bug: no grammar for Llama 3.x tool calls with tool_choice=auto
- [#32494](https://github.com/ggml-org/llama.cpp/issues/32494) Misc. bug: gguf-py GGUFReader reads incorrect tensor data after offset overflow `bug-unconfirmed`
- [#32487](https://github.com/ggml-org/llama.cpp/issues/32487) Feature Request: please provide a way to keep laptop GPU in D3cold when idle `enhancement`
- [#32478](https://github.com/ggml-org/llama.cpp/issues/32478) Feature Request: server should use huge pages for checkpoint/prompt cache buffers `enhancement`
- [#32475](https://github.com/ggml-org/llama.cpp/issues/32475) Eval bug: --spec-type draft-mtp + --split-mode tensor still freezes generation on b12441 (Qwen3.8-27B, 2x RTX 5060 Ti, Windows); LLAMA_GRAPH_REUSE_DISABLE=1 does not prevent it
- [#32465](https://github.com/ggml-org/llama.cpp/issues/32465) Llama chat webui. bug: scrollbar disappears when the mouse hovers near the top of the code block `bug-unconfirmed`

#### 🔒 Closed Issues
- [#32353](https://github.com/ggml-org/llama.cpp/issues/32353) Eval bug: Vulkan FA prefill crashes in amdvlk64.dll on RDNA3/Windows (flip-direct path from #31323)
- [#29893](https://github.com/ggml-org/llama.cpp/issues/29893) Feature Request: multi_logit_bias
- [#28037](https://github.com/ggml-org/llama.cpp/issues/28037) Analysis: Volta (SM70/SM72) Flash Attention Optimization Paths
- [#28774](https://github.com/ggml-org/llama.cpp/issues/28774) Misc. bug: Race condition in router scheduler during concurrent cold-start with --models-max 1
- [#29854](https://github.com/ggml-org/llama.cpp/issues/29854) Misc. bug: llama serve -hf rejects the token returned by the current Hugging Face CLI authentication flow.
- [#29875](https://github.com/ggml-org/llama.cpp/issues/29875) Feature Request: Early-exit speculative drafting via Shannon entropy (comparison with p_min)
- [#30556](https://github.com/ggml-org/llama.cpp/issues/30556) Misc. bug: Freed model memory leaves process footprint elevated on iOS
- [#29006](https://github.com/ggml-org/llama.cpp/issues/29006) JSON Schema grammar fails on chat-template control tokens while equivalent GBNF succeeds (Granite 3.1 / Qwen3)
- [#32104](https://github.com/ggml-org/llama.cpp/issues/32104) Misc. bug: hf downloader mode not router aware
- [#30749](https://github.com/ggml-org/llama.cpp/issues/30749) json-schema-to-grammar: `minLength`/`maxLength` silently dropped when the string also has a `pattern`
- [#29935](https://github.com/ggml-org/llama.cpp/issues/29935) perf (CUDA): fattn KV streaming on Ampere (sm86) is ~2x off physics at long context; quantized-KV + batch>1 always pays an f16-conversion pass
- [#29931](https://github.com/ggml-org/llama.cpp/issues/29931) Tool-call JSON corruption at long context (MiMo-V2.6 + RPC): repeated "Failed to parse tool call arguments as JSON" 500s
- [#29950](https://github.com/ggml-org/llama.cpp/issues/29950) Eval bug: GLM-5.3-Flash increased VRAM usage after specific commit in PR#27773
- [#29952](https://github.com/ggml-org/llama.cpp/issues/29952) [Vulkan] Adreno driver SIGSEGV for KHR cooperative matrix with an fp16 accumulator after spirv-opt --ssa-rewrite
- [#29965](https://github.com/ggml-org/llama.cpp/issues/29965) Feature Request: vulkan: group heads in flash attention when they don't fit in a tile
- [#32509](https://github.com/ggml-org/llama.cpp/issues/32509) dflash/DSpine: lattice crash (ggml_reshape_3d assert) at any draft n_max >= 1 — root cause, fix and verification
- [#30129](https://github.com/ggml-org/llama.cpp/issues/30129) Misc. bug: server: RAM prompt cache restores KV computed under a different LoRA configuration
- [#32260](https://github.com/ggml-org/llama.cpp/issues/32260) Misc. bug: llama-server: 500 "Unexpected empty grammar stack after accepting piece" when server-side grammar is combined with ignore-eos
- [#32339](https://github.com/ggml-org/llama.cpp/issues/32339) Eval bug: LFM3 does not restore context checkpoints within 256 of the prompt end
- [#32437](https://github.com/ggml-org/llama.cpp/issues/32437) Feature Request: Support Qwen3-TTS' reference/ICL mode
- [#32229](https://github.com/ggml-org/llama.cpp/issues/32229) Eval bug: CUDA mmvq fusion makes token generation 20-36% slower on Pascal (sm_61, MX230); GGML_CUDA_DISABLE_FUSION=1 is faster with identical output
- [#32447](https://github.com/ggml-org/llama.cpp/issues/32447) Eval bug: Vulkan + KHR_coopmat on RX 9070 XT (RDNA4, Windows): access violation in amdvlk64.dll for any ubatch >= 64

### Ollama (`ollama/ollama`)

**Stars:** 187,451 · **Open issues:** 4,674 · **Last push:** 3h ago

On November 18, 2026, there were no new releases for Ollama, but the notable development was the merging of PR #19677, which enhances the mlxrunner to reuse saved prefixes across request slots. A few new issues emerged, including #19747, which highlights performance concerns with Vulkan on the RX 5700 XT, showing prompt processing speeds around 13 times slower than the upstream llama.cpp Vulkan. Additionally, issue #19741 addresses the need to harden GitHub Actions workflows, while #19740 reports a misleading "context length" error due to a specific batch run on the /v1/systemone endpoint. Overall, the day was largely routine with a focus on stability and performance improvements.

#### ✅ Merged PRs
- [#19677](https://github.com/ollama/ollama/pull/19677) mlxrunner: reuse saved prefixes across request slots

#### 🐛 New Issues
- [#19747](https://github.com/ollama/ollama/issues/19747) Vulkan on RX 5700 XT (RDNA1): prompt processing ~13x slower than upstream llama.cpp Vulkan (40 vs ~540 t/s) 💬1
- [#19741](https://github.com/ollama/ollama/issues/19741) CI: harden GitHub Actions workflows (permissions, timeouts, pinning, duplicated installers) 💬1
- [#19740](https://github.com/ollama/ollama/issues/19740) /v1/systemone: d1-2B runs with a 512 batch, so multi-image requests fail with a misleading "context length" error and images are downscaled
- [#19738](https://github.com/ollama/ollama/issues/19738) glm-ocr never stops generating on 0.40.15 / 0.40.16 `bug`
- [#19735](https://github.com/ollama/ollama/issues/19735) Proposal: CANN build and device discovery for Ascend NPUs `feature request`

#### 🔒 Closed Issues
- [#19714](https://github.com/ollama/ollama/issues/19714) Build failure with GCC 15: missing #include <cstdint> in llama-mmap.h leading to uint32_t errors
- [#18750](https://github.com/ollama/ollama/issues/18750) /v1/systemone with Nimble serializes all questions: qwen35 is forced to numParallel=1
- [#19738](https://github.com/ollama/ollama/issues/19738) glm-ocr never stops generating on 0.40.15 / 0.40.16

### LiteLLM (`BerriAI/litellm`)

**Stars:** 63,452 · **Open issues:** 5,211 · **Last push:** <1h ago

On November 18, 2026, LiteLLM released version 1.111.0-rc.1, enhancing integration tests by updating the handling of cached prepared statements. Version 1.110.0 was also deployed, which fixed an issue with unsupported chat audio formats returning a 400 error. Notable merged features today include a new authentication feature for reading virtual keys and JWT key mappings, and improvements to manage congestion queues using Redis. Several crucial bug fixes addressed issues like the unintended hanging of the MCP Toolset endpoint and problems with budget reservations during streamed requests. Among the newly reported issues, a particularly critical bug was identified regarding the connection timeout leading to a persistent dead state of the reader Prisma engine when using a read replica.

#### 🚀 New Releases
- [v1.111.0-rc.1](https://github.com/BerriAI/litellm/releases/tag/v1.111.0-rc.1) v1.111.0-rc.1
- [v1.110.0](https://github.com/BerriAI/litellm/releases/tag/v1.110.0) v1.110.0
- [v1.108.11](https://github.com/BerriAI/litellm/releases/tag/v1.108.11) 1.108.11 (LTS)

#### ✅ Merged PRs
- [#52173](https://github.com/BerriAI/litellm/pull/52173) feat(auth): read virtual keys, jwt key mappings and model access groups through rust repositories
- [#51139](https://github.com/BerriAI/litellm/pull/51139) fix(google_genai): honor snake_case generation_config on generateContent
- [#50701](https://github.com/BerriAI/litellm/pull/50701) fix(bedrock): stop the prefill 400 when the last user message is empty
- [#52397](https://github.com/BerriAI/litellm/pull/52397) fix(auth): check a mapped JWT's end-user claim and keep the error classes of refused keys and JWTs
- [#52367](https://github.com/BerriAI/litellm/pull/52367) feat(router): coordinate congestion queues through Redis
- [#51457](https://github.com/BerriAI/litellm/pull/51457) fix(decisions): forward OpenAI prompt cache fields
- [#51429](https://github.com/BerriAI/litellm/pull/51429) feat(fips): encrypt stored secrets with the FIPS provider's AES-256-GCM in fips_mode
- [#52424](https://github.com/BerriAI/litellm/pull/52424) test: backport the tzdata and rc version unit fixes to stable/1.109.x
- [#52421](https://github.com/BerriAI/litellm/pull/52421) test(database): expect the restricted end-user index build
- [#52422](https://github.com/BerriAI/litellm/pull/52422) test(spend): snapshot logs after the denied request is recorded
- [#52420](https://github.com/BerriAI/litellm/pull/52420) chore(deps): bump next, soupsieve and msal-node on stable/1.109.x to match main
- [#52352](https://github.com/BerriAI/litellm/pull/52352) fix(github_copilot): explain why a Copilot call failed and how to fix it
- [#50439](https://github.com/BerriAI/litellm/pull/50439) feat(nvidia_nim): refresh the catalog and discover upstream models
- [#52365](https://github.com/BerriAI/litellm/pull/52365) test(mcp): give the startup-failure child process the rig's readiness budget
- [#52363](https://github.com/BerriAI/litellm/pull/52363) test(providers): cover the prompt-management marker and vispark in the internal params wire walk
- [#52418](https://github.com/BerriAI/litellm/pull/52418) fix(usage): backport #50253 to stable/1.109.x
- [#51788](https://github.com/BerriAI/litellm/pull/51788) fix(mcp): decide connected from the provider's scope refusal, not from scope names
- [#49422](https://github.com/BerriAI/litellm/pull/49422) fix(cli): carry configured service tiers and display names into the lite codex catalog
- [#51044](https://github.com/BerriAI/litellm/pull/51044) fix(usage): restore per-user spend breakdown on the user aggregated route (#49464) [rc/1.109.0]
- [#51392](https://github.com/BerriAI/litellm/pull/51392) fix(guardrails): stop the alice guardrail sending each prompt four times
- [#52310](https://github.com/BerriAI/litellm/pull/52310) fix(auth): backport current team limits in the pre-body rate limit check to stable/1.109.x (#52169)
- [#52389](https://github.com/BerriAI/litellm/pull/52389) feat(ui): take projects out of beta in the nav
- [#51720](https://github.com/BerriAI/litellm/pull/51720) fix(tokenizer): match tiktoken on lone surrogates and out-of-u32 tokens
- [#52386](https://github.com/BerriAI/litellm/pull/52386) fix(github_copilot): send the Copilot CLI integration id for a custom GitHub App
- [#52259](https://github.com/BerriAI/litellm/pull/52259) fix(responses): prevent duplicate authorization headers
- [#52266](https://github.com/BerriAI/litellm/pull/52266) fix(aiohttp_transport): close sessions of evicted Azure and base64 embedding clients
- [#51883](https://github.com/BerriAI/litellm/pull/51883) feat(router): add congestion-triggered priority queue controller
- [#52395](https://github.com/BerriAI/litellm/pull/52395) chore(cost-map): add github_copilot gpt-6.2-astra and gpt-6.2-sol
- [#52232](https://github.com/BerriAI/litellm/pull/52232) fix(proxy): never wait on a tokenizer download when estimating a failed request's input tokens
- [#52385](https://github.com/BerriAI/litellm/pull/52385) fix(proxy): model_max_budget entry on a model group covers its global aliases
- [#51885](https://github.com/BerriAI/litellm/pull/51885) feat(proxy): page team members and stop loading full rosters for /team/info callers
- [#52392](https://github.com/BerriAI/litellm/pull/52392) test(authorization): expect the sse stream_format the proxy now sends for speech billing
- [#52222](https://github.com/BerriAI/litellm/pull/52222) feat(gateway): resolve Redis and the database in their own crates and hand them to routes as axum state
- [#52242](https://github.com/BerriAI/litellm/pull/52242) fix(gemini): keep Google's reason on streamed chunks and the assembled response
- [#52267](https://github.com/BerriAI/litellm/pull/52267) perf(caching): hash response cache keys piece by piece and store under the looked-up key
- [#52215](https://github.com/BerriAI/litellm/pull/52215) fix(router): free streamed Responses API requests without waiting for a full gc
- [#52012](https://github.com/BerriAI/litellm/pull/52012) feat(sarvam): send a litellm User-Agent on chat requests
- [#52318](https://github.com/BerriAI/litellm/pull/52318) test(management): isolate global policy tests from the shared peer proxy
- [#52381](https://github.com/BerriAI/litellm/pull/52381) refactor(ui): polish customer management portal
- [#51772](https://github.com/BerriAI/litellm/pull/51772) fix(auth): index restricted end-user registry refreshes
- [#52191](https://github.com/BerriAI/litellm/pull/52191) fix(grayswan): honor failure policy for invalid monitor decisions
- [#52358](https://github.com/BerriAI/litellm/pull/52358) test(cost): mark anthropic cases for the cost tracking reconciliation automation
- [#52339](https://github.com/BerriAI/litellm/pull/52339) fix(sdk): keep proxy-only imports off Messages streaming and cache-hit paths
- [#52350](https://github.com/BerriAI/litellm/pull/52350) fix(proxy): apply a JWT key mapping without jwt_issuer right away when issuers are configured
- [#50310](https://github.com/BerriAI/litellm/pull/50310) fix(otel): emit a span for every failed retry and fallback attempt
- [#52221](https://github.com/BerriAI/litellm/pull/52221) refactor(rust): remove unused MCP, UI and management rust routes
- [#51540](https://github.com/BerriAI/litellm/pull/51540) feat(model_capacity): replace the python dynamic rate limiter v3 with a rust callback
- [#52359](https://github.com/BerriAI/litellm/pull/52359) chore(cost-map): add bedrock_mantle GPT-6.2 Sol and Astra rows
- [#52349](https://github.com/BerriAI/litellm/pull/52349) fix(proxy/auth): return 401 for a non-master key when no database is configured
- [#52144](https://github.com/BerriAI/litellm/pull/52144) fix(anthropic): close the Responses upstream when a bridged /v1/messages stream is closed for lts/1.108.x
- [#51274](https://github.com/BerriAI/litellm/pull/51274) fix(anthropic): close the Responses upstream when a bridged /v1/messages stream is closed
- [#44061](https://github.com/BerriAI/litellm/pull/44061) feat(helm): allow labels and annotations on the gateway ConfigMap
- [#52369](https://github.com/BerriAI/litellm/pull/52369) fix(auth): apply current team limits in the pre-body rate limit check (rc/1.110.0)
- [#52370](https://github.com/BerriAI/litellm/pull/52370) bump: litellm-proxy-extras 0.4.117 -> 0.4.118 (rc/1.111.0)
- [#51059](https://github.com/BerriAI/litellm/pull/51059) fix(responses): replay phase on the azure route and tag streamed text deltas with phase
- [#52364](https://github.com/BerriAI/litellm/pull/52364) test(database): give the autorouter baseline Prisma client the rig's startup budget
- [#52319](https://github.com/BerriAI/litellm/pull/52319) fix(mcp): use the saved description and server name in registry.json
- [#52264](https://github.com/BerriAI/litellm/pull/52264) fix(proxy): reject comma-separated models with stream=true as 400
- [#50634](https://github.com/BerriAI/litellm/pull/50634) test(cost): add azure gpt flex service tier cost tracking cases
- [#52341](https://github.com/BerriAI/litellm/pull/52341) fix(anthropic): accept temperature=1 on Claude models that removed sampling params
- [#52338](https://github.com/BerriAI/litellm/pull/52338) chore(cost-map): add github_copilot mai-code-2 and mai-code-2-flash
- [#52344](https://github.com/BerriAI/litellm/pull/52344) fix(redis): drop ssl_ kwargs from the async pool when ssl is off
- [#52337](https://github.com/BerriAI/litellm/pull/52337) ci(osv): ignore picomatch GHSA-fc5q-39xc-vjpf for 7 days
- [#52099](https://github.com/BerriAI/litellm/pull/52099) feat(proxy)!: require a LITELLM_SALT_KEY of at least 112 bits to start in fips_mode
- [#52340](https://github.com/BerriAI/litellm/pull/52340) chore(cost-map): add fal_ai HeyGen Avatar 6 and Microsoft MAI-Image-2.7 rows
- [#52306](https://github.com/BerriAI/litellm/pull/52306) fix(auth): backport current team limits in the pre-body rate limit check to lts/1.108.x (#52169)
- [#52305](https://github.com/BerriAI/litellm/pull/52305) fix(proxy): make credential reload sync linear in the number of credentials
- [#52332](https://github.com/BerriAI/litellm/pull/52332) feat(cost-map): add bedrock bare, global and us rows for openai gpt-6.2-astra and gpt-6.2-sol
- [#52334](https://github.com/BerriAI/litellm/pull/52334) fix(dashscope): add cache read and write prices for qwen4-max
- [#52331](https://github.com/BerriAI/litellm/pull/52331) fix(dashscope): bill 1h cache writes at the 1h rate
- [#49410](https://github.com/BerriAI/litellm/pull/49410) fix(gateway): accept x-api-key on inference routes for Anthropic SDK clients
- [#52321](https://github.com/BerriAI/litellm/pull/52321) feat(shadow-eval): add optional rubric grades
- [#52336](https://github.com/BerriAI/litellm/pull/52336) chore: bump litellm to 1.108.11 on lts/1.108.x
- [#52303](https://github.com/BerriAI/litellm/pull/52303) fix(cost-map): bill gpt-4o-transcribe audio input at the rate OpenAI charges
- [#52329](https://github.com/BerriAI/litellm/pull/52329) test(integration): stop requiring safeguards calls to wait for the anthropic beta map
- [#52299](https://github.com/BerriAI/litellm/pull/52299) chore(cost-map): rolling registry update, fal_ai kling v4, azure gpt-6-luna flex, snowflake, bedrock/mantle claude 5.5
- [#52317](https://github.com/BerriAI/litellm/pull/52317) fix(openai): bill the audio output tokens OpenAI reports for gpt-4o-mini-tts speech
- [#52209](https://github.com/BerriAI/litellm/pull/52209) fix(proxy): leave cache-read tokens out of the priority limiter's token count
- [#52330](https://github.com/BerriAI/litellm/pull/52330) test(integration): stop requiring safeguards calls to wait for the anthropic beta map (rc/1.111.0)
- [#52313](https://github.com/BerriAI/litellm/pull/52313) fix(cost): price forwarded-credential clones by their source deployment
- [#50879](https://github.com/BerriAI/litellm/pull/50879) fix(logging): reuse the cached GenericAPILogger so config reloads stop leaking flush tasks
- [#52198](https://github.com/BerriAI/litellm/pull/52198) test(spend): compare FOCUS RequesterDetails alias exactly after dropped-connection recovery
- [#51322](https://github.com/BerriAI/litellm/pull/51322) fix(scim): answer every /scim/v2 error with the RFC 7644 SCIM Error schema
- [#51836](https://github.com/BerriAI/litellm/pull/51836) fix(prompt_management): apply a prompt manager once per request on acompletion and SDK fallbacks
- [#52316](https://github.com/BerriAI/litellm/pull/52316) feat(cost-map): add openai gpt-6.2-astra, gpt-6.2-sol and gpt-6.2-astra-law
- [#52200](https://github.com/BerriAI/litellm/pull/52200) fix(openrouter): suppress empty post-finish choice before usage trailer on lts/1.108.x
- [#52322](https://github.com/BerriAI/litellm/pull/52322) chore(deps): lock filelock 4.2.1 on Python 3.11+ on stable/1.109.x
- [#52293](https://github.com/BerriAI/litellm/pull/52293) feat(cost-map): add azure gpt-6.2-astra, gpt-6.2-sol and azure_ai/Microsoft-Decision-1.1
- [#51982](https://github.com/BerriAI/litellm/pull/51982) fix(proxy): backport #51874 to lts/1.108.x
- [#52211](https://github.com/BerriAI/litellm/pull/52211) fix(gateway): map OpenAI chat params to provider names before the Rust core checks them
- [#51016](https://github.com/BerriAI/litellm/pull/51016) feat(guardrails): scan an image on /apply_guardrail with a Bedrock guardrail
- [#52243](https://github.com/BerriAI/litellm/pull/52243) fix: backport 16 merged fixes to stable/1.109.x and bump to 1.109.2
- [#52312](https://github.com/BerriAI/litellm/pull/52312) chore(deps): backport next 16.4.5 (#52102) to lts/1.108.x
- [#50834](https://github.com/BerriAI/litellm/pull/50834) fix(cohere)!: map tool_choice, reasoning_effort and json_schema response_format on the v2 chat route
- [#52311](https://github.com/BerriAI/litellm/pull/52311) test(providers): use a valid base64 Gemini signature fixture in replay tests
- [#52248](https://github.com/BerriAI/litellm/pull/52248) fix: backport 6 merged fixes to lts/1.108.x
- [#52244](https://github.com/BerriAI/litellm/pull/52244) fix: backport 22 merged fixes to rc/1.110.0
- [#52298](https://github.com/BerriAI/litellm/pull/52298) build(ui): run the UI image on slim nginx so it no longer ships curl [lts/1.108.x]
- [#52300](https://github.com/BerriAI/litellm/pull/52300) fix(interactions): retain async stream success logging task through GC and shutdown drain
- [#52304](https://github.com/BerriAI/litellm/pull/52304) fix(cost-map): add the 1080p rate to the base fal_ai seedance 2.5 rows
- [#52132](https://github.com/BerriAI/litellm/pull/52132) fix(router)!: let an unmatched content_policy_fallbacks list fall through like context_window_fallbacks
- [#52216](https://github.com/BerriAI/litellm/pull/52216) fix(anthropic, bedrock): split concatenated tool call arguments and answer every split tool use
- [#52294](https://github.com/BerriAI/litellm/pull/52294) fix(together_ai): declare reasoning_effort_levels on Kimi-K3.1-Pro so max is not sent as high
- [#52162](https://github.com/BerriAI/litellm/pull/52162) chore(cost-map): rolling registry audit 2026-11-17, Databricks gemini-4-hydrogen, fal_ai iris-z and H3 Max, Bedrock EU embed-v4, Vertex multimodalembedding
- [#46222](https://github.com/BerriAI/litellm/pull/46222) feat(tts)!: stream audio from the provider as it arrives on /v1/audio/speech
- [#41192](https://github.com/BerriAI/litellm/pull/41192) feat(litellm): add Vispark provider with Vision Small/Medium/Large

#### 🐛 New Issues
- [#52284](https://github.com/BerriAI/litellm/issues/52284) [Bug]: With DATABASE_URL_READ_REPLICA set, a reconnect cancelled by its 2 s timeout leaves the reader Prisma engine dead forever; reads never fall back to the writer and the proxy never self-heals `bug` `llm translation` 💬5
- [#52247](https://github.com/BerriAI/litellm/issues/52247) Proxy start crashes with ValueError in find_blockers when the database encoding is SQL_ASCII 💬3
- [#52362](https://github.com/BerriAI/litellm/issues/52362) [Bug]: Budget reservation is never released when a streamed request is abandoned before any output text, so the key spend counter drifts above DB spend and keys get false `budget_exceeded` `llm translation` 💬2
- [#52220](https://github.com/BerriAI/litellm/issues/52220) Vertex Gemini image edits discard usageMetadata and misprice token usage `llm translation` 💬2
- [#52275](https://github.com/BerriAI/litellm/issues/52275) [Bug]: Default User Settings shows Default Role as "applied" when STORE_MODEL_IN_DB is off, but it is not applied `bug` 💬2
- [#52235](https://github.com/BerriAI/litellm/issues/52235) [Bug]: MCP Toolset endpoint hangs on tools/list after successful session initialization (LiteLLM 1.109.1) `bug` 💬2
- [#52301](https://github.com/BerriAI/litellm/issues/52301) [Bug]: model_max_budget entry on a model group doesn't cover its global model_group_alias names `llm translation` 💬1
- [#52335](https://github.com/BerriAI/litellm/issues/52335) [Bug]: completion(num_retries=N) runs two retry loops: N SDK retries, then N more through tenacity, including on 4xx `bug` `llm translation` 💬1
- [#52261](https://github.com/BerriAI/litellm/issues/52261) [Bug]: DashScope 1h cache writes are billed at the 5m rate (cache_creation_input_token_cost_above_1hr ignored, ephemeral_1h_input_tokens not mapped) `llm translation` 💬1
- [#52290](https://github.com/BerriAI/litellm/issues/52290) [Feature]: Add WildEdge as an OpenTelemetry v2 observability preset `enhancement`
- [#52278](https://github.com/BerriAI/litellm/issues/52278) [Bug]: Failed proxy calls keep the whole request body in memory until a full GC (exception, traceback and frame cycle in the proxy) `llm translation` 💬1
- [#52252](https://github.com/BerriAI/litellm/issues/52252) [Bug]: Silent rerank fallback gives me unexpected configuration `bug` `llm translation` 💬1
- [#52423](https://github.com/BerriAI/litellm/issues/52423) `POST /config/callback/delete` reports success while a config.yaml-owned copy of the callback stays active
- [#52366](https://github.com/BerriAI/litellm/issues/52366) [Bug]: Vertex AI Imagen image edit raises raw ValueError on missing image or prompt instead of HTTP 400 BadRequestError `bug` `llm translation`
- [#52346](https://github.com/BerriAI/litellm/issues/52346) [Bug]: Vertex/Gemini embeddings on `:embedContent` turn upstream 429 and 503 into a 500 `APIConnectionError` `llm translation`
- [#52271](https://github.com/BerriAI/litellm/issues/52271) [Bug]: Users with user_role = null act as internal_user, ignoring the configured Default Role and LiteLLM's own internal_user_viewer default `bug`
- [#52292](https://github.com/BerriAI/litellm/issues/52292) Rust branch inventory: 43 complete and waiting, 7 partial, 3 not started, 109 dead `llm translation`
- [#52291](https://github.com/BerriAI/litellm/issues/52291) Filed in error
- [#52282](https://github.com/BerriAI/litellm/issues/52282) [Feature]: Self-service "Forgot password?" flow on the Admin UI login page
- [#52280](https://github.com/BerriAI/litellm/issues/52280) [Feature]: Budget-only team member role, or custom team roles with route and field permissions
- [#52279](https://github.com/BerriAI/litellm/issues/52279) [Feature]: Per-team ceiling for team admin max_budget raises
- [#52277](https://github.com/BerriAI/litellm/issues/52277) [Feature]: Add SI-API as a native OpenAI-compatible provider `llm translation`
- [#52276](https://github.com/BerriAI/litellm/issues/52276) Vertex image models receive unsupported thinking and sampling controls `llm translation`
- [#52272](https://github.com/BerriAI/litellm/issues/52272) [Bug]: Docker image ships litellm-proxy-extras/dist (179 old wheels and sdists): .dockerignore `dist/` only matches the root
- [#52265](https://github.com/BerriAI/litellm/issues/52265) Installer scripts pipe Astral’s `uv` bootstrap without checksum; Petals loader omits Hugging Face revision pin
- [#52255](https://github.com/BerriAI/litellm/issues/52255) [Feature]: decision_model guardrail: screen only the new messages of a request, so latency does not grow with the conversation `enhancement` `llm translation`
- [#52253](https://github.com/BerriAI/litellm/issues/52253) [Bug]: Foundry Responses requests silently discard top-level conversation IDs `llm translation`
- [#52251](https://github.com/BerriAI/litellm/issues/52251) [Feature]: Recurring per-team budget schedules with separate daytime and overnight caps

#### 🔒 Closed Issues
- [#32357](https://github.com/BerriAI/litellm/issues/32357) [Bug] /v1/messages adapter mis-encodes reasoning models: thinking_delta streamed inside a text block (+ duplicate message_start) → empty content in Anthropic SDK / Claude Code
- [#12273](https://github.com/BerriAI/litellm/issues/12273) [Bug]: Wrong error message when using an incorrect master key in a request to the proxy
- [#34614](https://github.com/BerriAI/litellm/issues/34614) Redis cache fails with unexpected ssl_check_hostname in v1.93.0
- [#30301](https://github.com/BerriAI/litellm/issues/30301) [Feature]: Harden provider transforms against LiteLLM-internal optional_params leaking into request bodies
- [#52284](https://github.com/BerriAI/litellm/issues/52284) [Bug]: With DATABASE_URL_READ_REPLICA set, a reconnect cancelled by its 2 s timeout leaves the reader Prisma engine dead forever; reads never fall back to the writer and the proxy never self-heals
- [#30371](https://github.com/BerriAI/litellm/issues/30371) [Bug]: Bedrock invoke path leaks LiteLLM-internal params into the request body (Converse already filters them)
- [#43922](https://github.com/BerriAI/litellm/issues/43922) [Bug]: store_model_in_db credential sync is O(n²) and blocks the event loop for 10s+ per reload with thousands of credentials
- [#36524](https://github.com/BerriAI/litellm/issues/36524) Guardrail write-back on /v1/messages collapses Anthropic `document` blocks into `image` (400 for PDFs)
- [#51935](https://github.com/BerriAI/litellm/issues/51935) [Bug]: Response cache key is built from the stringified full request, computed twice per request; 200+ MB image requests spend seconds on the event loop
- [#51936](https://github.com/BerriAI/litellm/issues/51936) [Bug]: Streamed chat completions stay in memory until a full GC: Router defines a FallbackStreamWrapper class per call
- [#48554](https://github.com/BerriAI/litellm/issues/48554) [Feature]: Multi-currency settlement support (non-USD cost tracking)
- [#51954](https://github.com/BerriAI/litellm/issues/51954) [Bug]: Anthropic translation rejects concatenated JSON tool call arguments that Bedrock already splits
- [#52220](https://github.com/BerriAI/litellm/issues/52220) Vertex Gemini image edits discard usageMetadata and misprice token usage
- [#18402](https://github.com/BerriAI/litellm/issues/18402) [Feature]: UI for File Uploads
- [#35950](https://github.com/BerriAI/litellm/issues/35950) [Feature]: Filter Request Logs by MCP server and namespaced tool
- [#36682](https://github.com/BerriAI/litellm/issues/36682) [Bug]: Cohere Embed v4 mixed text/image inputs are sent in the texts field
- [#51970](https://github.com/BerriAI/litellm/issues/51970) [Bug]: dynamic_rate_limiter_v3 counts cache-read tokens that parallel_request_limiter_v3 leaves out
- [#50661](https://github.com/BerriAI/litellm/issues/50661) Partial end-user budget reset is skipped and the tier advances
- [#51955](https://github.com/BerriAI/litellm/issues/51955) [Bug]: credit card and IBAN guardrail redacts random numbers that just look like card numbers
- [#52014](https://github.com/BerriAI/litellm/issues/52014) [Bug]: app_config raises BadRequestError on valid github_copilot_app_private_key_ref when github_copilot_app_private_key is empty string
- [#51391](https://github.com/BerriAI/litellm/issues/51391) [Feature]: Cursor CLI subscription passthrough
- [#51601](https://github.com/BerriAI/litellm/issues/51601) [Bug]: OpenAIEncoding differs from tiktoken.Encoding in encode_with_unstable (lone surrogates) and is_special_token (ids outside u32)
- [#52301](https://github.com/BerriAI/litellm/issues/52301) [Bug]: model_max_budget entry on a model group doesn't cover its global model_group_alias names
- [#47413](https://github.com/BerriAI/litellm/issues/47413) [Bug]: End-user restricted registry lookup scans large EndUser tables on cache reload
- [#51394](https://github.com/BerriAI/litellm/issues/51394) [Bug]: temperature=1 rejected for fixed-sampling Claude models in 1.110.0rc2 (works in 1.109.1)
- [#52261](https://github.com/BerriAI/litellm/issues/52261) [Bug]: DashScope 1h cache writes are billed at the 5m rate (cache_creation_input_token_cost_above_1hr ignored, ephemeral_1h_input_tokens not mapped)
- [#52038](https://github.com/BerriAI/litellm/issues/52038) [Bug]: Deployment custom pricing is ignored for forwarded client credentials (anthropic /v1/messages)
- [#50878](https://github.com/BerriAI/litellm/issues/50878) [Bug]: generic_api callback cache never hits, so every re-resolution leaks a periodic flush loop
- [#52015](https://github.com/BerriAI/litellm/issues/52015) [Bug]: litellm-helm is retired but the new litellm Helm chart isn't published to any registry
- [#51613](https://github.com/BerriAI/litellm/issues/51613) [Bug]: Gemini non-streamed content_filter choices do not say why Google filtered them
- [#52017](https://github.com/BerriAI/litellm/issues/52017) [Bug]: Evicted Azure clients, and OpenAI clients used with encoding_format, still log "Unclosed client session" after #48650
- [#51115](https://github.com/BerriAI/litellm/issues/51115) Restricted end-user registry does a full-table seq scan of LiteLLM_EndUserTable on every refresh
- [#47119](https://github.com/BerriAI/litellm/issues/47119) [Bug]: With no database configured, allow_requests_on_db_unavailable accepts any API key
- [#51597](https://github.com/BerriAI/litellm/issues/51597) [Bug]: Streaming chat completions with comma-separated models return 500 (AttributeError: 'list' object has no attribute '__aiter__')
- [#50894](https://github.com/BerriAI/litellm/issues/50894) [Bug]: Interactions API streaming spend logs can be lost because the success logging task is never referenced
- [#52292](https://github.com/BerriAI/litellm/issues/52292) Rust branch inventory: 43 complete and waiting, 7 partial, 3 not started, 109 dead
- [#52291](https://github.com/BerriAI/litellm/issues/52291) Filed in error
- [#50986](https://github.com/BerriAI/litellm/issues/50986) [Feature]: Store prefix block IDs in LiteLLM SpendLogs to track shared prefixes across requests without storing raw prompts
- [#52001](https://github.com/BerriAI/litellm/issues/52001) [Bug]: Corrupted/truncated Gemini thought_signature in tool_call.id causes persistent 400 INVALID_ARGUMENT on Vertex AI

### Unsloth (`unslothai/unsloth`)

**Stars:** 79,711 · **Open issues:** 485 · **Last push:** <1h ago

On November 18, 2026, Unsloth released version v0.1.919-beta, introducing a **computer use (beta)** feature that allows local models to interact with applications by seeing the user's screen, alongside enhancements in the MiniMax-H3-Image model that now supports GGUF, FP8, and INT8 with LoRA training. The update also includes a new model picker and improvements to project folders and connections, as well as a translation page for text. Significant merged pull requests include improvements to the chat UI and adjustments ensuring the model picker meets usability standards. Additionally, several bugs were reported, with a critical issue regarding API connections losing compaction policy, raising concerns among users.

#### 🚀 New Releases
- [v0.1.919-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.919-beta) Computer Use + Translate + MiniMax-H3-Image + New Model Picker

#### ✅ Merged PRs
- [#18243](https://github.com/unslothai/unsloth/pull/18243) Studio: chat title dropdown with the chat's options
- [#18242](https://github.com/unslothai/unsloth/pull/18242) Studio: make custom-folder GGUF builds read like standard quants
- [#18241](https://github.com/unslothai/unsloth/pull/18241) Studio: give the glass header strip the same wash as the chat
- [#18240](https://github.com/unslothai/unsloth/pull/18240) Studio: raise the model picker's short-window minimum height to 400px
- [#18239](https://github.com/unslothai/unsloth/pull/18239) Studio: open the composer model picker at its resting position
- [#18174](https://github.com/unslothai/unsloth/pull/18174) Mask credentials in nested JSON log messages
- [#18238](https://github.com/unslothai/unsloth/pull/18238) Skip interpreter teardown in the DDP trainable-embeddings worker
- [#18007](https://github.com/unslothai/unsloth/pull/18007) Studio: finish unclosed links before their blocks close
- [#18237](https://github.com/unslothai/unsloth/pull/18237) Stop pinning the gc freeze count in test_external_freeze_is_left_alone
- [#18186](https://github.com/unslothai/unsloth/pull/18186) Desktop: Auto GPU rendering on NVIDIA Wayland no longer reports CPU painting
- [#18173](https://github.com/unslothai/unsloth/pull/18173) Keep retrieval query text out of Unsloth server logs
- [#18230](https://github.com/unslothai/unsloth/pull/18230) SFT: keep the MoE router aux loss on TRL >= 1.18
- [#18224](https://github.com/unslothai/unsloth/pull/18224) Gate the masked SDPA compiled backward test on a real CUDA device
- [#18223](https://github.com/unslothai/unsloth/pull/18223) Fix the offload device test that stands in meta for the accelerator
- [#18216](https://github.com/unslothai/unsloth/pull/18216) FSDP2: decode without CUDA graphs while generate streams blocks
- [#18219](https://github.com/unslothai/unsloth/pull/18219) Eager flex_attention: build the score_mod backward graph outside checkpoint saved-tensor hooks
- [#18215](https://github.com/unslothai/unsloth/pull/18215) Forced float32 under tensor and pipeline parallel: use the native parallel GradScaler
- [#18208](https://github.com/unslothai/unsloth/pull/18208) Forced float32 GradScaler: start at 2**8, divided by the data parallel loss multiplier
- [#17636](https://github.com/unslothai/unsloth/pull/17636) [Feature] AMD NPU: load Q4NX models converted in Unsloth Studio from the NPU model list
- [#18193](https://github.com/unslothai/unsloth/pull/18193) Tensor parallel: shard MoE routed experts across the tp group
- [#18202](https://github.com/unslothai/unsloth/pull/18202) Training forward: keep the padding mask for left and interior padded batches
- [#18199](https://github.com/unslothai/unsloth/pull/18199) Studio ROCm: FLUX.3 Klein explicit int8 shares one W8A8 activation quant per block on RDNA (3.7% faster per step, now equal to bf16)
- [#18181](https://github.com/unslothai/unsloth/pull/18181) Sharded loading: keep a host-served input embedding off the GPU, read whole tables in slices
- [#18204](https://github.com/unslothai/unsloth/pull/18204) bf16 stochastic rounding test: gate the bitsandbytes case on has_real_cuda (skip-guard lint red since #18192)
- [#18200](https://github.com/unslothai/unsloth/pull/18200) Studio INT8 attention: race the Triton kernel by default on gfx1151 for the DiTs measured to win (Qwen-Image-2.1, Wan)
- [#18194](https://github.com/unslothai/unsloth/pull/18194) Studio MiniMax-H3-Image: race INT8 attention on a fully streamed DiT too (A100 0-resident renders matched the whole card again)
- [#18192](https://github.com/unslothai/unsloth/pull/18192) bfloat16 full fine-tuning: stochastic rounding of the optimizer's weight writes by default
- [#18147](https://github.com/unslothai/unsloth/pull/18147) [Feature] Unsloth Studio / Desktop: the API accepts the NPU model name the app shows
- [#18190](https://github.com/unslothai/unsloth/pull/18190) GRPO: default the vLLM importance sampling mode to token_truncate when the correction is on
- [#18197](https://github.com/unslothai/unsloth/pull/18197) Multi-model serving tests: use the real NpuModel instead of a stub (m-r red since #18147)
- [#18183](https://github.com/unslothai/unsloth/pull/18183) Studio MiniMax-H3-Image: 8 GB cards render, and the stream layout prices the host link (8-19% faster at 12-24 GB on A100)
- [#18182](https://github.com/unslothai/unsloth/pull/18182) Warm restarts: keep NF4 block graphs in the AOT autograd cache
- [#18191](https://github.com/unslothai/unsloth/pull/18191) Studio tests: close WAL keepers at teardown under the real os.name (WindowsPath teardown errors)
- [#18154](https://github.com/unslothai/unsloth/pull/18154) Native FSDP2 full fine-tuning: reduce-scatter every micro-batch on the sharded layout, and AdamWBF16 on DTensor shards
- [#18184](https://github.com/unslothai/unsloth/pull/18184) PP refusal tests: an uncarried MoE now splits with its router aux loss off (gloo-pp red since #18165)
- [#17717](https://github.com/unslothai/unsloth/pull/17717) [Feature] Unsloth Studio / Desktop: Export page splits LLM, Diffusion LoRA and Q4NX into tabs
- [#18178](https://github.com/unslothai/unsloth/pull/18178) GRPO: skip the old-policy forward under vLLM IS when generation is aligned
- [#18169](https://github.com/unslothai/unsloth/pull/18169) DPO / ORPO / CPO / SimPO: run each pair's shared prompt once (prefix-shared preference forward)
- [#18059](https://github.com/unslothai/unsloth/pull/18059) Unsloth Studio: name and order the composer picker's NPU models like the Hub
- [#18064](https://github.com/unslothai/unsloth/pull/18064) [Bug] AMD NPU: Q4NX export packs Q4_0, Q4_1 or Q8_0 blocks as is into models that read another layout, so Qwen3.5 from a Q4_0 GGUF answers with repeated slashes
- [#18144](https://github.com/unslothai/unsloth/pull/18144) [Bug] AMD NPU: deep research fails with "Local model never started producing output" while the NPU is still finishing the chat's reply
- [#18042](https://github.com/unslothai/unsloth/pull/18042) Unsloth Studio: let deep research fall back to prompt-only JSON on AMD NPU models instead of failing with HTTP 400
- [#18121](https://github.com/unslothai/unsloth/pull/18121) Studio: apply saved load settings when unsloth start loads a model
- [#18180](https://github.com/unslothai/unsloth/pull/18180) DDP tests: drop leaked rank env for the child runs, fail a hung child with its output (rest-2 timeouts)
- [#18047](https://github.com/unslothai/unsloth/pull/18047) [Bug] Unsloth Studio CLI: unsloth chat reloads an NPU model already loaded by unsloth run at 65536 and drops its --context-length
- [#18175](https://github.com/unslothai/unsloth/pull/18175) AsyncGRPO fast_inference: run on TRL 1.17 / 1.18, and overwrite one LoRA slot per sync
- [#18165](https://github.com/unslothai/unsloth/pull/18165) gpt-oss on multiple GPUs: FSDP2 keeps frozen untied IO tables out of the root unit, PP trains MoE models with the router aux loss off
- [#18167](https://github.com/unslothai/unsloth/pull/18167) Pipeline parallel sharded loading: let the split decide text-only for vision / audio checkpoints
- [#18172](https://github.com/unslothai/unsloth/pull/18172) Studio: replay a stalled Vulkan start on CPU when the device probe failed
- [#18166](https://github.com/unslothai/unsloth/pull/18166) Trainer: never train a target predicted from a pad position (left / interior padding with FlashAttention-2 / SDPA / eager disagree)
- [#18157](https://github.com/unslothai/unsloth/pull/18157) Studio: a diffusion component that cannot be downloaded fails the load with the cause, not the first render
- [#18152](https://github.com/unslothai/unsloth/pull/18152) Studio: read a browser page again when its router rewrites the address mid-read
- [#18170](https://github.com/unslothai/unsloth/pull/18170) PP tests: put the module table back after an in-process import unsloth (gloo-pp KeyError since #18151)
- [#18156](https://github.com/unslothai/unsloth/pull/18156) Studio INT8 attention: keep per-card verdicts and races across restarts (no re-probe on every start)
- [#18162](https://github.com/unslothai/unsloth/pull/18162) Bump install.sh / install.ps1 pin to unsloth>=2026.11.6
- [#18159](https://github.com/unslothai/unsloth/pull/18159) Studio: do not tell users to update llama.cpp when an MTP drafter runs out of memory
- [#18161](https://github.com/unslothai/unsloth/pull/18161) Studio: fix Translate typecheck on optional max_tokens
- [#18158](https://github.com/unslothai/unsloth/pull/18158) Studio: do not nudge a connected-model turn that stopped at its output limit
- [#18131](https://github.com/unslothai/unsloth/pull/18131) GRPO: recheck packed scores after a verification outlier
- [#18151](https://github.com/unslothai/unsloth/pull/18151) Pipeline parallel: default schedule 1F1B
- [#18150](https://github.com/unslothai/unsloth/pull/18150) Studio diffusion: Low VRAM keeps the denoiser streamed for every request (Wan 14B 23.0 to 10.5 GB, LTX-2.5 36.7 to 13.1 GB peak)
- [#17941](https://github.com/unslothai/unsloth/pull/17941) Studio: add a Translate page that runs a local translation model
- [#18139](https://github.com/unslothai/unsloth/pull/18139) Studio: stop the pinned-chat sync toast after updates for good
- [#18149](https://github.com/unslothai/unsloth/pull/18149) Studio int8 GEMM: CUTLASS race uses sustained timings when the clock moves (Z-Image-Turbo on L4 no longer slower with the wheel)
- [#18155](https://github.com/unslothai/unsloth/pull/18155) Log budget: declare and quiet the 4s /api/chat/revision poll (Chat UI extra red since #18143)
- [#18153](https://github.com/unslothai/unsloth/pull/18153) Wide-head SDPA compile test: seeded inputs, fp32 assert_close instead of a 1e-6 atol (intermittent m-r failure)
- [#18148](https://github.com/unslothai/unsloth/pull/18148) Studio: send no max_tokens to llama.cpp and vLLM connections at Max
- [#18143](https://github.com/unslothai/unsloth/pull/18143) Studio: keep a chat in sync across devices, and survive a phone lock at send time
- [#18140](https://github.com/unslothai/unsloth/pull/18140) Studio INT8 attention and GEMM: CFG replicas keep the sink mode, strided cuDNN admits only the probed dtype, fused int8 takes plain SYMMETRIC only, `_int_mm` fallback stays on the operand's card
- [#18136](https://github.com/unslothai/unsloth/pull/18136) Studio MOSS-Image: load INT8 on a T4 through the low-RAM route instead of an fp32 host build
- [#18141](https://github.com/unslothai/unsloth/pull/18141) Studio kernels: cold probes check capture on the operand's card, MOSS q/k RoPE int64 offsets, Gemma-4 band route int32 guard
- [#18146](https://github.com/unslothai/unsloth/pull/18146) Studio: guide memory tools to skip routine chat
- [#18145](https://github.com/unslothai/unsloth/pull/18145) Parallel isolation lint: record the images load-swap batch poll deadline as benign (red since #18135)
- [#18130](https://github.com/unslothai/unsloth/pull/18130) Studio: keep a known vLLM model's reasoning rules when the reasoning flag is on
- [#16906](https://github.com/unslothai/unsloth/pull/16906) Studio: add bounded personal and project memory
- [#18133](https://github.com/unslothai/unsloth/pull/18133) Studio video: pin HunyuanVideo-1.5 reduction kernels so a seed gives the same clip in every process
- [#18106](https://github.com/unslothai/unsloth/pull/18106) Studio: keep the last used model when its auto-load fails, and say why another model loaded
- [#18135](https://github.com/unslothai/unsloth/pull/18135) Studio /v1 images: pin the load's LoRA set so a reload cannot swap it mid-request
- [#18134](https://github.com/unslothai/unsloth/pull/18134) Studio LoRA: a baked LoRA at weight 0 matches no LoRA under compile; Z-Image keeps fused QKV
- [#18124](https://github.com/unslothai/unsloth/pull/18124) DeepSeek-V4.1: build configs without a compressor on transformers 4.x; fix two long-red tests
- [#18138](https://github.com/unslothai/unsloth/pull/18138) Picker collapsed-row test: allow more reasons to open expanded (red since #18128)
- [#18044](https://github.com/unslothai/unsloth/pull/18044) Studio: keep <think> text in a thinking model's answer as written
- [#18132](https://github.com/unslothai/unsloth/pull/18132) Cosmos3 / Restyle follow-up: record the guardrail import site and name utf-8 for text I/O (lints red since #18116)
- [#18123](https://github.com/unslothai/unsloth/pull/18123) Studio diffusion training: stream text encoders through the GPU when they do not fit (54-66% lower peak)
- [#18129](https://github.com/unslothai/unsloth/pull/18129) Studio: shorter local tools note, and point vLLM / SGLang connections at Unsloth's own engines
- [#18128](https://github.com/unslothai/unsloth/pull/18128) Studio: skip the collapsed model picker view for models with no thinking
- [#18127](https://github.com/unslothai/unsloth/pull/18127) Studio: keep the composer model picker on screen at wide chat widths
- [#18113](https://github.com/unslothai/unsloth/pull/18113) run_attention: opt-in keep the attention output for the checkpoint replay (UNSLOTH_GC_SAVE_ATTENTION)
- [#18122](https://github.com/unslothai/unsloth/pull/18122) Studio ROCm: Windows wide-head SDPA guard and TunableOp tune hooks compile without a graph break
- [#18116](https://github.com/unslothai/unsloth/pull/18116) Studio video: Cosmos3 safety checker off by default, Restyle setup, Low VRAM streaming, trained start sizes
- [#18120](https://github.com/unslothai/unsloth/pull/18120) GRPO packing self-verify: keep verified packing after one narrow bf16 outlier
- [#18125](https://github.com/unslothai/unsloth/pull/18125) Keep awake test: read keep_awake.rs as UTF-8 (encoding lint red since #17659)
- [#18119](https://github.com/unslothai/unsloth/pull/18119) cuDNN SDPA head_dim 256 masked backward guard: also cover SM90 (H100 / H200)
- [#18076](https://github.com/unslothai/unsloth/pull/18076) fix(macos): separate launcher bundle identity from desktop
- [#17659](https://github.com/unslothai/unsloth/pull/17659) Studio: add a Keep computer awake setting to the desktop app
- [#18087](https://github.com/unslothai/unsloth/pull/18087) fix(studio): quiet transient pinned-chat sync failures
- [#18074](https://github.com/unslothai/unsloth/pull/18074) Studio: size the composer and model picker to the window and zoom
- [#18118](https://github.com/unslothai/unsloth/pull/18118) Compiled attention test: DoRA downcast under autocast, fp32 model stays fp32 (red since #18099)
- [#18117](https://github.com/unslothai/unsloth/pull/18117) CPU backend: sync the compile cache tag only on the GPU backend (unsloth.kernels loaded on CPU since #18111)
- [#18073](https://github.com/unslothai/unsloth/pull/18073) fix(desktop): do not report clean backend exits as crashes
- [#18077](https://github.com/unslothai/unsloth/pull/18077) Studio ROCm: half-math VAE attention for bf16 only; fp16 takes the fp32 upcast (#18016)
- [#18105](https://github.com/unslothai/unsloth/pull/18105) Studio int8 GEMM: race CUTLASS tiles at video row counts on sustained timings (MiniMax-H3 L4 regression)
- [#18084](https://github.com/unslothai/unsloth/pull/18084) fix(api): accept bash as a terminal tool alias
- [#18115](https://github.com/unslothai/unsloth/pull/18115) TP host embedding gloo test: barrier before rank 0 tears down the store (intermittent Broken pipe)
- [#18090](https://github.com/unslothai/unsloth/pull/18090) Studio MOSS-Image: INT8 attention route, shared Q/K/V quant, bf16 compiled from the first render (11-35% faster)
- [#18011](https://github.com/unslothai/unsloth/pull/18011) Studio: keep each model's recommended sampling after a system prompt edit
- [#18082](https://github.com/unslothai/unsloth/pull/18082) Studio Ideogram 4: load musubi-tuner LoRAs (transformer. fused qkv and kohya keys)
- [#18111](https://github.com/unslothai/unsloth/pull/18111) Warm restarts: hand the compile cache key tag to Inductor's compile workers (no autotune re-benchmark every run)
- [#18099](https://github.com/unslothai/unsloth/pull/18099) Keep attention in fp32 for fp32 models instead of downcasting to bf16
- [#18114](https://github.com/unslothai/unsloth/pull/18114) Parallel isolation lint: record the admission tests queue poll deadline as benign (red since #18103)
- [#17997](https://github.com/unslothai/unsloth/pull/17997) Studio ROCm: withhold AOTriton's experimental SDPA kernels from unverified archs (#17985)
- [#18112](https://github.com/unslothai/unsloth/pull/18112) Research guard test: watch the provider_credentials module the probe imports (order-dependent m-r failure)
- [#18069](https://github.com/unslothai/unsloth/pull/18069) MLX: keep GRPO/KTO/CPO loss_type defaults and export helpers notebooks import
- [#18003](https://github.com/unslothai/unsloth/pull/18003) Allow curl, chmod, kill and source in Terminal when the OS sandbox is active
- [#18110](https://github.com/unslothai/unsloth/pull/18110) Loader resolution test: run mapper.bf16_repo_loads_16bit and find the -bf16 check by its new call (10 failures since #18061)
- [#18103](https://github.com/unslothai/unsloth/pull/18103) Anthropic admission tests: wait for the request to queue instead of a fixed 0.1 s sleep
- [#18101](https://github.com/unslothai/unsloth/pull/18101) TP oracle test: read Phi3 head_dim from the config (tiny repo now sets head_dim 8)
- [#18046](https://github.com/unslothai/unsloth/pull/18046) Studio: do not keep a chat summary that was cut off at its token limit
- [#18043](https://github.com/unslothai/unsloth/pull/18043) Studio: read every tab of a tabbed docs page when the model fetches it
- [#18100](https://github.com/unslothai/unsloth/pull/18100) Diffusion backend tests: give the fake torch an nn.Module (16 failures since #18081)
- [#18039](https://github.com/unslothai/unsloth/pull/18039) Studio: do not create a skill from a create_skill call quoted in text
- [#18095](https://github.com/unslothai/unsloth/pull/18095) GRPO PrefixGrouper: also run under vLLM, and keep a verified signature after one verify outlier
- [#18094](https://github.com/unslothai/unsloth/pull/18094) DeepSeek-V4.1: score the indexer one query chunk at a time; remove leaked bnb4 test checkpoints
- [#18022](https://github.com/unslothai/unsloth/pull/18022) Studio: save each Compare pane under the model that answered it
- [#18052](https://github.com/unslothai/unsloth/pull/18052) Reuse identical dataset uploads and allow deleting them
- [#18097](https://github.com/unslothai/unsloth/pull/18097) Studio tests: the dynamo knob reset must not read the cache_size_limit alias (teardown errors since #18080)
- [#18012](https://github.com/unslothai/unsloth/pull/18012) Studio: normalize OOXML namespaces without rewriting document text
- [#18009](https://github.com/unslothai/unsloth/pull/18009) Studio: keep inline forwarded emails in RAG indexing
- [#18045](https://github.com/unslothai/unsloth/pull/18045) Studio: keep the SYSTEM prompt of an Ollama model made from a Modelfile
- [#18024](https://github.com/unslothai/unsloth/pull/18024) Studio: fix Gemini chats that combine Code with files, search or MCP
- [#18041](https://github.com/unslothai/unsloth/pull/18041) Studio: train chat datasets whose messages are lists of text parts
- [#18006](https://github.com/unslothai/unsloth/pull/18006) Studio: load the selected GGUF quant, not a cached sibling (Q6_K loaded UD-Q6_K_XL)
- [#18096](https://github.com/unslothai/unsloth/pull/18096) Precision conflict test: lift mapper.py helpers (red since #18061)
- [#18017](https://github.com/unslothai/unsloth/pull/18017) Studio: keep the server running when several PDFs are indexed at once
- [#18081](https://github.com/unslothai/unsloth/pull/18081) Studio diffusion LoRA: restore requires_grad when adapters are unloaded (HiDream renders change after a detach)
- [#18014](https://github.com/unslothai/unsloth/pull/18014) Studio: sign the RAG auto-inject call for Gemini 3, so chats with attached files work
- [#18033](https://github.com/unslothai/unsloth/pull/18033) Studio: keep spinning icons steady in the Linux desktop app
- [#17995](https://github.com/unslothai/unsloth/pull/17995) Studio: fix Run settings title overlap on Glass
- [#18053](https://github.com/unslothai/unsloth/pull/18053) Studio: show eval loss for embedding fine-tunes
- [#18040](https://github.com/unslothai/unsloth/pull/18040) Studio: keep the chat's pictures in HTML and PDF exports
- [#18085](https://github.com/unslothai/unsloth/pull/18085) Studio: INT8 attention by default for FLUX.1, FLUX.2 and HunyuanVideo-1.5 where it wins per card
- [#18019](https://github.com/unslothai/unsloth/pull/18019) Studio: keep chat presets saved in another window
- [#18066](https://github.com/unslothai/unsloth/pull/18066) Studio: block Linux shutdown, log-out and console-switch keys in computer use
- [#18021](https://github.com/unslothai/unsloth/pull/18021) Studio: keep hidden slides when a PowerPoint file is attached in chat
- [#18091](https://github.com/unslothai/unsloth/pull/18091) Forced float32 grad scaler test: gate on has_real_cuda (CPU studio red since #18065)
- [#18018](https://github.com/unslothai/unsloth/pull/18018) Studio: keep footnotes when an RTF file is attached to a chat
- [#18020](https://github.com/unslothai/unsloth/pull/18020) Studio: keep pasted and attached images in imported Codex chats
- [#18083](https://github.com/unslothai/unsloth/pull/18083) Studio Qwen-Image-2.1: pass cuDNN attention the strided Q/K/V instead of contiguous copies
- [#18088](https://github.com/unslothai/unsloth/pull/18088) TRL discovery shim: check AsyncGRPOTrainer as patched in place (Core latest red on TRL 1.18)
- [#18086](https://github.com/unslothai/unsloth/pull/18086) Risky loader baseline: record the TRL async GRPO import_module site (source lint red since #18070)
- [#18061](https://github.com/unslothai/unsloth/pull/18061) UNSLOTH_PARALLEL=auto: DDP when the model and its training state fit on every GPU, else native FSDP2
- [#18080](https://github.com/unslothai/unsloth/pull/18080) Studio tests: reset the diffusers attention backend and dynamo's error knobs between tests
- [#18078](https://github.com/unslothai/unsloth/pull/18078) Gemma 2 decode scratch test: record torch.empty too (rest-2 red since #18038)
- [#18068](https://github.com/unslothai/unsloth/pull/18068) Tensor parallel: serve a large frozen input embedding from CPU memory (Qwen3.8-27B 4-bit on 2x T4)
- [#18072](https://github.com/unslothai/unsloth/pull/18072) DDP trainable-embeddings test: name utf-8 on the result file (rest-2 red since #18036)
- [#18070](https://github.com/unslothai/unsloth/pull/18070) AsyncGRPOTrainer: patch it at its TRL 1.18 location, and unroll prefix-trie rows for Unsloth's attention (TRL 1.17+)

#### 🐛 New Issues
- [#18189](https://github.com/unslothai/unsloth/issues/18189) [Bug] API/provider connections have lost the same compaction policy as local models (evict whole turns + searchable archive) `feature request` `bug` 💬3
- [#18093](https://github.com/unslothai/unsloth/issues/18093) [Feature] Improve the Toast notification UI / Design `feature request` 💬2
- [#18187](https://github.com/unslothai/unsloth/issues/18187) [Bug] use more space!!! `feature request` `bug` 💬2
- [#18126](https://github.com/unslothai/unsloth/issues/18126) [Bug] Run settings clipping `feature request` `bug` 💬2
- [#18233](https://github.com/unslothai/unsloth/issues/18233) [Feature] Benchmark Tab `feature request` 💬1
- [#18221](https://github.com/unslothai/unsloth/issues/18221) [Feature] Computer use on Wayland (KDE Plasma, GNOME) `feature request` 💬1
- [#18164](https://github.com/unslothai/unsloth/issues/18164) [Bug] MCP OAuth: consent prompt shown on every connection instead of reusing stored token. `feature request` `bug` 💬2
- [#18234](https://github.com/unslothai/unsloth/issues/18234) [Feature] Support for Zonos3-Mini `feature request`
- [#18232](https://github.com/unslothai/unsloth/issues/18232) [Bug] fast_qk_norm_rope fallback path does not broadcast position_ids [1, seq_len] (wrong rows, out-of-bounds read) 💬1
- [#18246](https://github.com/unslothai/unsloth/issues/18246) [Bug] `unsloth eval` mis-scores JSON array strings in local JSONL datasets
- [#18236](https://github.com/unslothai/unsloth/issues/18236) [Feature] Automatic max_seq_length setter for Easier Unsloth Model Fine-tuning `feature request`
- [#18231](https://github.com/unslothai/unsloth/issues/18231) [Bug] KV cache invalidation after ~8 computer use calls — MAX_TOTAL_MODEL_IMAGES = 8 in mcp_images.py `feature request` `bug`
- [#18218](https://github.com/unslothai/unsloth/issues/18218) [Bug] After upgrading drivers to version 620.70.06-1 unsloth doesn't use the GPU anymore `feature request` `bug`
- [#18209](https://github.com/unslothai/unsloth/issues/18209) [Feature] Loading skills from project directory `feature request`
- [#18198](https://github.com/unslothai/unsloth/issues/18198) [Feature] Unsloth Desktop Translation Mode Improvements Part 1 `feature request`
- [#18185](https://github.com/unslothai/unsloth/issues/18185) [Bug] API/provider connections: oversized tool results (search_conversation, web_search) dropped as "(output omitted … no context room left)" → infinite retry loop / no usable answer; same task on a local model works `feature request` `bug`
- [#18160](https://github.com/unslothai/unsloth/issues/18160) [Bug] fast_qk_norm_rope fallback path does not broadcast position_ids [1, seq_len] (wrong rows, out-of-bounds read)
- [#18137](https://github.com/unslothai/unsloth/issues/18137) [Reddit Issue] Computer use mouse inaccuracies
- [#18092](https://github.com/unslothai/unsloth/issues/18092) Optional seperators between batches of generated images `feature request`

#### 🔒 Closed Issues
- [#18093](https://github.com/unslothai/unsloth/issues/18093) [Feature] Improve the Toast notification UI / Design
- [#18002](https://github.com/unslothai/unsloth/issues/18002) [Bug] Unsloth v0.1.918 Beta has model loading issues immediately after update and is sluggish
- [#18063](https://github.com/unslothai/unsloth/issues/18063) [Bug] Weird Notice that states "Could not sync pinned chats. Try again when connected." + Laggy Interface
- [#17985](https://github.com/unslothai/unsloth/issues/17985) [Bug] Image generation fails on AMD with black screen
- [#18232](https://github.com/unslothai/unsloth/issues/18232) [Bug] fast_qk_norm_rope fallback path does not broadcast position_ids [1, seq_len] (wrong rows, out-of-bounds read)
- [#18054](https://github.com/unslothai/unsloth/issues/18054) fix(macos): shell launcher duplicates Desktop's bundle identifier
- [#18057](https://github.com/unslothai/unsloth/issues/18057) fix(desktop): graceful CLI-requested backend exit is logged as a crash
- [#18016](https://github.com/unslothai/unsloth/issues/18016) ROCm Linux image gen fails at final VAE decode with NaN (head dims 384/512, half-math default) — v0.1.917+; UNSLOTH_VAE_ATTN_HALF_MATH=0 works around it
- [#18056](https://github.com/unslothai/unsloth/issues/18056) fix(docs): curl guide lists bash as a built-in tool name but the API selects terminal
- [#18027](https://github.com/unslothai/unsloth/issues/18027) [Bug] datasets cache files in upload folder
- [#17981](https://github.com/unslothai/unsloth/issues/17981) [Bug] After last lama.cpp update unsloth desktop crashes

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,191 · **Open issues:** 405 · **Last push:** 3h ago

On November 18, 2026, AIBrix had a routine day with no new releases. Significant progress was made with the merging of pull requests #3470, which introduces a probe-driven per-pod blacklist to the gateway, enhancing the security and management capabilities of the service. Additionally, #3493 resolved a failure in the ModelWarmup testing by fixing the missingTarget signature, while #3449 improved the clarity of ModelWarmup target failures by categorizing them by kind. A new issue, #3494, was raised to request support for per-model engine environment variables in ModelClaim, highlighting a growing interest in environment-specific configurations.

#### ✅ Merged PRs
- [#3470](https://github.com/vllm-project/aibrix/pull/3470) Feat] Add a probe-driven per-pod blacklist to the gateway
- [#3493](https://github.com/vllm-project/aibrix/pull/3493) [CI] Fix ModelWarmup failure-kind test for the missingTarget signature
- [#3449](https://github.com/vllm-project/aibrix/pull/3449) [Bug] Describe ModelWarmup target failures by kind

#### 🐛 New Issues
- [#3494](https://github.com/vllm-project/aibrix/issues/3494) Support per-model engine environment variables in ModelClaim `triage/accepted` `kind/misc` `area/runtime` `area/kv-cache` 💬4

#### 🔒 Closed Issues
- [#3488](https://github.com/vllm-project/aibrix/issues/3488) flaky test: TestTRTAsyncPrefillFailures/transport reads the token load before prefillDone has released it
- [#3413](https://github.com/vllm-project/aibrix/issues/3413) [Bug] LoadEnvFloat accepts NaN and positive infinity, bypassing the KV threshold
- [#3408](https://github.com/vllm-project/aibrix/issues/3408) [Bug] Request admission exceeds its 100 ms budget when Redis stops replying
- [#3420](https://github.com/vllm-project/aibrix/issues/3420) flaky test SleepLowerPriority preemption
- [#3445](https://github.com/vllm-project/aibrix/issues/3445) [Bug] ModelWarmup Once reports "one or more warmup jobs failed" when no Job was created
- [#3428](https://github.com/vllm-project/aibrix/issues/3428) [Bug] ModelWarmup reports control-plane exclusion as namespace authorization failure
- [#3461](https://github.com/vllm-project/aibrix/issues/3461) openai_frontend: support vLLM-Omni POST /v1/videos/sync

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,500 · **Open issues:** 646 · **Last push:** <1h ago

On November 18, 2026, there were no new releases for Semantic Router; however, two significant bugs were addressed in merged pull requests. Pull request #6859 resolves an issue where developer messages were not sent as system messages to models lacking the developer role, while #6851 addresses the problem of dropping cache boundaries that the Chat feature cannot carry, which allows Claude Code's compaction to proceed. Among the new issues opened, #6811 introduces a feature request to let annotate-only response guards hold streams so that warnings can be communicated effectively, highlighting a growing focus on enhancing response validation capabilities. Overall, the day was primarily routine maintenance, punctuated by these critical bug fixes and an intriguing feature request.

#### ✅ Merged PRs
- [#6859](https://github.com/vllm-project/semantic-router/pull/6859) [Bug] Send developer messages as system to a model that lacks the developer role
- [#6851](https://github.com/vllm-project/semantic-router/pull/6851) [Bug] Drop the cache boundaries Chat cannot carry instead of rejecting Claude Code's compaction

#### 🐛 New Issues
- [#6811](https://github.com/vllm-project/semantic-router/issues/6811) [Feature] Let annotate-only response guards hold streams so codes reach x-vsr-warnings `enhancement` `needs-acceptance` `wg/mom-routing` 💬7
- [#6808](https://github.com/vllm-project/semantic-router/issues/6808) [Bug] Response guard checks only the primary answer and misses unsafe alternate choices `bug` `accepted` `wg/router-models-inference-runtime` 💬6
- [#6830](https://github.com/vllm-project/semantic-router/issues/6830) [Bug] Model runtime: Vela 3.0, Vela 3.0 d3 and Decision 3.0 tokenize a long state whole before refusing it `bug` `needs-acceptance` `wg/router-models-inference-runtime` 💬3
- [#6857](https://github.com/vllm-project/semantic-router/issues/6857) [Bug] Weekly leaderboard refresh still cannot publish its PR after the November snapshot `bug` `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬3
- [#6793](https://github.com/vllm-project/semantic-router/issues/6793) [Feature] Model runtime: compute Decision 3.0 in BF16 on CPUs that compute BF16 natively `enhancement` `accepted` `wg/router-models-inference-runtime` 💬3
- [#6809](https://github.com/vllm-project/semantic-router/issues/6809) [Bug] Response guard silently ignores non-text assistant output without reporting incomplete coverage `bug` `accepted` `wg/router-models-inference-runtime` 💬3
- [#6810](https://github.com/vllm-project/semantic-router/issues/6810) [Bug] Response-stage context rules can treat partially unreadable tool results as fully inspected `bug` `accepted` `wg/router-models-inference-runtime` 💬3
- [#6812](https://github.com/vllm-project/semantic-router/issues/6812) [Bug] Response guard omits assistant tool-call arguments from its answer inspection `bug` `accepted` `wg/router-models-inference-runtime` 💬3
- [#6873](https://github.com/vllm-project/semantic-router/issues/6873) [withdrawn] `wg/mom-routing` 💬1
- [#6829](https://github.com/vllm-project/semantic-router/issues/6829) [Bug] Stored Responses lose incomplete_details on GET `bug` `accepted` `wg/data-plane-networking` 💬1
- [#6855](https://github.com/vllm-project/semantic-router/issues/6855) [Bug] First-run setup integration test fails when it activates before serve starts waiting `bug` `accepted` `wg/developer-experience-ecosystem` 💬1
- [#6837](https://github.com/vllm-project/semantic-router/issues/6837) [Feature] Redesign the Dashboard around a design system, a sidebar shell and task-first pages `enhancement` `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬1
- [#6828](https://github.com/vllm-project/semantic-router/issues/6828) [Bug] Validate resolved MCP configurations before testing or saving `bug` `accepted` `in-progress` `wg/enterprise-environment` 💬1
- [#6874](https://github.com/vllm-project/semantic-router/issues/6874) [Bug] Return 404 for missing Dashboard MCP servers `bug` `needs-acceptance` `wg/enterprise-environment`
- [#6872](https://github.com/vllm-project/semantic-router/issues/6872) [Feature] Let clients with a single base URL override reach the router with models it does not serve `enhancement` `needs-acceptance` `wg/mom-routing`
- [#6871](https://github.com/vllm-project/semantic-router/issues/6871) [Research] Measure the Router's load_aware balancing against least_request on live vLLM replicas `enhancement` `needs-acceptance` `research` `wg/data-plane-networking`
- [#6850](https://github.com/vllm-project/semantic-router/issues/6850) [Bug] Claude Code's compaction fails on a Chat backend: cache_control on tool_use is rejected `bug` `accepted` `wg/data-plane-networking`
- [#6858](https://github.com/vllm-project/semantic-router/issues/6858) [Bug] Developer-role instructions never reach DeepSeek V4 on a vLLM Chat backend without tools `bug` `accepted` `wg/data-plane-networking`
- [#6865](https://github.com/vllm-project/semantic-router/issues/6865) [Bug] After #6603, mixed Thai/Latin literal keywords lose their Latin word edge, and Thai/Lao matches can end before a following vowel `needs-acceptance` `wg/mom-routing`

#### 🔒 Closed Issues
- [#6017](https://github.com/vllm-project/semantic-router/issues/6017) [Bug] Reject remote embedding values that overflow float32 during conversion
- [#5712](https://github.com/vllm-project/semantic-router/issues/5712) [Bug] Model runtime: CUDA varlen detection misses the ATen kernel on PyTorch 2.9
- [#6018](https://github.com/vllm-project/semantic-router/issues/6018) [Bug] Reject trailing data after OpenAI-compatible embedding responses
- [#6341](https://github.com/vllm-project/semantic-router/issues/6341) [Bug] Windowed guard scans accept answers without complete input coverage
- [#6161](https://github.com/vllm-project/semantic-router/issues/6161) [Bug] ci second verification on a non-matrix executor blocks all PR merges
- [#6595](https://github.com/vllm-project/semantic-router/issues/6595) [Bug] d3-ultra-NVFP4 / d3-turbo-NVFP4: `d3q.load.split_on_oom` wrapper takes 2 arguments, the runtime passes 3, so `load_d3()` + `warmup()` raises TypeError
- [#6302](https://github.com/vllm-project/semantic-router/issues/6302) [Feature] Model runtime: serve the Vela 3.1 pico packages (vela3-pico/1)
- [#6310](https://github.com/vllm-project/semantic-router/issues/6310) [Feature] Model runtime: support Vela 3.1-fast request semantics
- [#6873](https://github.com/vllm-project/semantic-router/issues/6873) [withdrawn]
- [#6829](https://github.com/vllm-project/semantic-router/issues/6829) [Bug] Stored Responses lose incomplete_details on GET
- [#6850](https://github.com/vllm-project/semantic-router/issues/6850) [Bug] Claude Code's compaction fails on a Chat backend: cache_control on tool_use is rejected
- [#6858](https://github.com/vllm-project/semantic-router/issues/6858) [Bug] Developer-role instructions never reach DeepSeek V4 on a vLLM Chat backend without tools
- [#5383](https://github.com/vllm-project/semantic-router/issues/5383) [Bug] classifyTurnOutcome never emits TurnToolError for structured tool-result failures
- [#5382](https://github.com/vllm-project/semantic-router/issues/5382) [Bug] Looper session and replay accounting drop cache tokens and treat incomplete usage as complete

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*