# 📡 AI Ecosystem Digest — 2026-10-15

> Generated 2026-10-15 01:15 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 150,889 | 37 | 2 | 0 | 2 |
| [OpenAI Codex](https://github.com/openai/codex) | 129,239 | 25 | 2 | 50 | 2 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 107,371 | 1 | 0 | 6 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,254 | 10 | 2 | 0 | 3 |
| [OpenCode](https://github.com/anomalyco/opencode) | 213,542 | 20 | 22 | 10 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 28,485 | 31 | 9 | 0 | 0 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 392,029 | 174 | 150 | 134 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 253,806 | 33 | 2 | 5 | 2 |
| [vLLM](https://github.com/vllm-project/vllm) | 93,801 | 26 | 17 | 57 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 37,147 | 20 | 18 | 41 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 131,189 | 12 | 12 | 30 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 183,183 | 7 | 6 | 4 | 1 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 61,264 | 47 | 31 | 115 | 3 |
| [Unsloth](https://github.com/unslothai/unsloth) | 78,010 | 12 | 23 | 104 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,136 | 8 | 6 | 13 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,168 | 9 | 8 | 6 | 0 |

---

## ✨ Highlights

- **Claude Code** released versions [v2.1.300](https://github.com/anthropics/claude-code/releases/tag/v2.1.300) and [v2.1.299](https://github.com/anthropics/claude-code/releases/tag/v2.1.299).
- **Hermes Agent** introduced version [v0.22.1](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.1) as part of the Threshold Release.
- **GitHub Copilot CLI** launched several releases including [v1.0.99-0](https://github.com/github/copilot-cli/releases/tag/v1.0.99-0) and [v1.0.98](https://github.com/github/copilot-cli/releases/tag/v1.0.98).
- **OpenClaw** saw significant activity with merged PRs addressing various bugs and issues, including fixes for visible child completion and Linux builder admissions, alongside several new issues attracting attention, specifically [Update failure: package-swap](https://github.com/openclaw/openclaw/issues/172395) (💬7).
- **Ollama** reported a notable new issue regarding upgrade errors that garnered discussion, specifically [Error message after upgrading to 0.40.4](https://github.com/ollama/ollama/issues/18998) (💬13).

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 150,889 · **Open issues:** 14,976 · **Last push:** 6h ago

On October 15, 2026, Claude Code released version 2.1.300, which introduced the `virtualText` feature for mod prompt decorations, added new metrics for caching in OpenTelemetry events, and provided a way to view an agent's transcript in the main view using `$.ui.view({ agentId })`. The previous version, 2.1.299, featured the addition of the `CLAUDE_CODE_DISABLE_FILE_MENTIONS` environment variable for better file management and introduced idle compaction to optimize token usage during extended conversations. A notable new issue reported was #102136, highlighting a dangerous UX regression where the permission prompt defaults to "Always allow" instead of "Allow once," raising concerns about user privacy and security. Other significant bugs reported included issues with sidebar displays and file mention handling, indicating that users faced ongoing challenges with the latest desktop version.

#### 🚀 New Releases
- [v2.1.300](https://github.com/anthropics/claude-code/releases/tag/v2.1.300) v2.1.300
- [v2.1.299](https://github.com/anthropics/claude-code/releases/tag/v2.1.299) v2.1.299

#### 🐛 New Issues
- [#102088](https://github.com/anthropics/claude-code/issues/102088) [BUG] Desktop 2.37337.1: “Group by” option removed from Code tab sidebar — sessions now only grouped by environment `bug` `platform:windows` `regression` `area:ui` 💬13
- [#102129](https://github.com/anthropics/claude-code/issues/102129) [Desktop 2.37337.1] Sidebar structure changed to nested sessions without any notice or reason 💬6
- [#102158](https://github.com/anthropics/claude-code/issues/102158) [BUG] Desktop 2.37337.1 (macOS): Routines sidebar section hidden with no toggle — scheduled task results no longer in sidebar `duplicate` `has repro` `platform:macos` `regression` 💬2
- [#102136](https://github.com/anthropics/claude-code/issues/102136) [BUG] Permission prompt defaults to "Always allow" instead of "Allow once" - dangerous UX regression `bug` `platform:macos` `user-experience` `regression` 💬2
- [#102134](https://github.com/anthropics/claude-code/issues/102134) [BUG] session.compact mod hook no longer raised in 2.1.299 (manual and automatic compaction) `bug` `has repro` `platform:macos` `area:hooks` 💬3
- [#102233](https://github.com/anthropics/claude-code/issues/102233) [Desktop] Session info panel (Environment card) can't be hidden and wastes width in split view (2.37337.1) `enhancement` `platform:windows` `area:ui` `area:desktop` 💬1
- [#102236](https://github.com/anthropics/claude-code/issues/102236) [Bug] Background classification agents consume ~10% of 5h token usage per minute `bug` `platform:macos` `area:cost` `area:agents` 💬2
- [#102217](https://github.com/anthropics/claude-code/issues/102217) [BUG] Claude Science Linux sandbox: "inode number out of range" on NFS inodes above 2^63; one grant blocks all sandboxes `invalid` 💬2
- [#102204](https://github.com/anthropics/claude-code/issues/102204) [BUG] Desktop 2.37337.1: usage ring popover no longer shows the session's context window usage `bug` `duplicate` `platform:macos` `area:ui` 💬1
- [#102150](https://github.com/anthropics/claude-code/issues/102150) [BUG] Desktop 2.37337.1 (Windows, Store/MSIX): built-in "Routines" sidebar section is forced hidden on every launch, and there is no UI toggle to show it `bug` `has repro` `platform:windows` `regression` 💬1
- [#102221](https://github.com/anthropics/claude-code/issues/102221) [Desktop] Default worktree OFF for suggested-task chips; choosable base branch for Changes panel PR button `enhancement` `platform:macos` `area:desktop` 💬1
- [#102240](https://github.com/anthropics/claude-code/issues/102240) Seeded plugins need a manual /reload-plugins in every fresh session
- [#102239](https://github.com/anthropics/claude-code/issues/102239) [Feature Request] Raise 5-hour usage limit or allow weekly pool carryover for business-hours use `enhancement` `platform:windows` `area:cost`
- [#102237](https://github.com/anthropics/claude-code/issues/102237) [Question] Desktop 2.37337.1: "</>" glyph before pinned session names in sidebar — intended? `invalid`
- [#102238](https://github.com/anthropics/claude-code/issues/102238) [Bug] /diff reports "current directory isn't in a git repository" after update
- [#102235](https://github.com/anthropics/claude-code/issues/102235) [BUG] Jobs moved to different categories with latest update `bug` `platform:windows` `area:agent-view`
- [#102234](https://github.com/anthropics/claude-code/issues/102234) [Bug] Excessive 5h usage limit consumption after 6-subagent plan review `bug` `platform:macos` `area:cost` `area:agents`
- [#102227](https://github.com/anthropics/claude-code/issues/102227) [BUG] Desktop redesign: missing prompt suggestions, boxed transcript and other pain points `enhancement` `area:desktop`
- [#102232](https://github.com/anthropics/claude-code/issues/102232) [BUG] AI-powered artifact on claude.ai: claude.use("sample") resolves to null on Team plan `invalid`
- [#102231](https://github.com/anthropics/claude-code/issues/102231) [FEATURE] Desktop Browser pane: password manager support (Apple Passwords / 1Password) `enhancement` `area:security` `area:desktop`
- [#102230](https://github.com/anthropics/claude-code/issues/102230) [BUG] Session Rail context progress bar does not update `bug` `area:ui` `area:desktop`
- [#102229](https://github.com/anthropics/claude-code/issues/102229) [GitHub integration] `bug` `platform:web` `needs-info` `github-integration`
- [#102228](https://github.com/anthropics/claude-code/issues/102228) [Bug] Cyber safeguards block benign prompts in sandboxed lab work `bug` `platform:linux` `area:model`
- [#102226](https://github.com/anthropics/claude-code/issues/102226) Plugin install from github-source marketplace entry builds clone URL without slash (github.comowner/repo) `bug` `has repro` `platform:windows` `area:plugins`
- [#102225](https://github.com/anthropics/claude-code/issues/102225) Supported native same-session handoff preserving effective controls and foreground completion identity `enhancement` `area:agent-sdk`
- [#102224](https://github.com/anthropics/claude-code/issues/102224) [BUG] Desktop 2.37337.1: no way to sort sidebar groups alphabetically after the new sidebar (group order no longer follows group name) `bug` `platform:macos` `regression` `area:ui`
- [#102223](https://github.com/anthropics/claude-code/issues/102223) [Desktop] Choose base branch for Changes panel diff and 'Create PR manually' `enhancement` `platform:macos` `area:desktop`
- [#102222](https://github.com/anthropics/claude-code/issues/102222) [Desktop] Option to default the worktree switch to OFF for suggested-task chips `duplicate` `enhancement` `platform:macos` `area:desktop`
- [#102220](https://github.com/anthropics/claude-code/issues/102220) [BUG] Headless (-p / stream-json): mid-turn task notifications and hook attachments never reach the model `bug` `has repro` `platform:linux` `area:core`
- [#102219](https://github.com/anthropics/claude-code/issues/102219) [FEATURE] Let mods add a row to the desktop Session Rail `enhancement` `area:plugins` `area:desktop`
- [#102218](https://github.com/anthropics/claude-code/issues/102218) [FEATURE] Desktop: add a description and usage warning to Ultracode in the Effort menu `enhancement` `platform:windows` `area:ui` `area:desktop`
- [#102216](https://github.com/anthropics/claude-code/issues/102216) [BUG] Mods: a click on a pane Button leaves the keys with the prompt, so a field it opens can't take them while the prompt has text `bug` `has repro` `platform:macos` `area:tui`
- [#102201](https://github.com/anthropics/claude-code/issues/102201) [BUG] Spurious "Claude can't use thinking from another organization" when Desktop Code tab and CLI share ~/.claude.json with different logins `bug` `has repro` `platform:windows` `area:auth`
- [#102122](https://github.com/anthropics/claude-code/issues/102122) Claude-in-Chrome bridge won't connect to a second Chrome profile (matching account + org, fresh reinstall, correct launch order) `bug` `has repro` `platform:macos` `area:mcp`
- [#102215](https://github.com/anthropics/claude-code/issues/102215) [FEATURE] Mod API: let mods draw smaller text (a size prop on Text, or custom CSS) `enhancement` `area:plugins` `area:ui`
- [#102214](https://github.com/anthropics/claude-code/issues/102214) [FEATURE] Show Remote Control sessions from other machines in agent view `enhancement` `platform:macos` `area:agent-view`
- [#102213](https://github.com/anthropics/claude-code/issues/102213) [GitHub integration] ddd `bug` `needs-info` `github-integration`

#### 🔒 Closed Issues
- [#102221](https://github.com/anthropics/claude-code/issues/102221) [Desktop] Default worktree OFF for suggested-task chips; choosable base branch for Changes panel PR button
- [#91426](https://github.com/anthropics/claude-code/issues/91426) [BUG] NODE_OPTIONS=--use-system-ca replaces instead of augments the bundled CA store — confirmed regression #72066 was auto-closed as not_planned

### OpenAI Codex (`openai/codex`)

**Stars:** 129,239 · **Open issues:** 22,581 · **Last push:** 1h ago

On October 15, 2026, OpenAI Codex released two new versions: rust-v0.163.0-alpha.11 and rust-v0.163.0-alpha.10.1, continuing its alpha development cycle. Significant merged pull requests included the addition of large file write capabilities over WebSockets (#54135), per-tool incremental update metrics recording (#54133), and improvements to terminal state reporting (#54114). Notably, there are new issues reported, including a concerning issue (#54142) where Windows users experience "Model not found" errors for chat and image generation requests after a retry storm, which persists even after rebooting. Additionally, the chat mode in macOS experiences a regression (#54143) that prevents users from switching back after transitioning to ChatGPT Work.

#### 🚀 New Releases
- [rust-v0.163.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.11) 0.163.0-alpha.11
- [rust-v0.163.0-alpha.10.1](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.10.1) 0.163.0-alpha.10.1

#### ✅ Merged PRs
- [#54135](https://github.com/openai/codex/pull/54135) Allow large file writes over direct exec-server WebSockets
- [#54133](https://github.com/openai/codex/pull/54133) Record per-tool incremental update and description size metrics
- [#54119](https://github.com/openai/codex/pull/54119) Allow stdin review under active grants with sandbox prompts disabled
- [#54114](https://github.com/openai/codex/pull/54114) Report terminal completion states and blocking reasons
- [#54113](https://github.com/openai/codex/pull/54113) Embed generated app-server schema bundles in Bazel builds
- [#54099](https://github.com/openai/codex/pull/54099) Wait for readiness in the SIGTERM cancellation test
- [#54098](https://github.com/openai/codex/pull/54098) Keep environment tools stable across readiness changes
- [#54097](https://github.com/openai/codex/pull/54097) Show Daybreak notices after the session header
- [#54096](https://github.com/openai/codex/pull/54096) Add Bazel targets for on-demand schemas and Python SDK generation
- [#54094](https://github.com/openai/codex/pull/54094) Preserve specific MCP failure codes in metrics and spans
- [#54087](https://github.com/openai/codex/pull/54087) Upgrade Bazel's `rules_python` to 2.4.2
- [#54082](https://github.com/openai/codex/pull/54082) Stabilize the Guardian network review timeout test
- [#54081](https://github.com/openai/codex/pull/54081) Centralize vertical navigation in TUI list views
- [#54080](https://github.com/openai/codex/pull/54080) Extract TUI user-turn submission into a dedicated module
- [#54079](https://github.com/openai/codex/pull/54079) Retire rejected MCP OAuth refresh tokens
- [#54078](https://github.com/openai/codex/pull/54078) Update `gix` to 0.89.0 and `gix-url` to 0.40.0
- [#54076](https://github.com/openai/codex/pull/54076) Avoid false URL-launch detections in literal PowerShell commands
- [#54070](https://github.com/openai/codex/pull/54070) Expose gateway authentication as a reusable OAuth session API
- [#54069](https://github.com/openai/codex/pull/54069) Fix Windows environment handling for remote MCP servers
- [#54060](https://github.com/openai/codex/pull/54060) Limit unarchive scans to the requested thread's archived rollouts
- [#54059](https://github.com/openai/codex/pull/54059) Support store-owned preparation when resuming threads
- [#54058](https://github.com/openai/codex/pull/54058) Forward turn metadata to image generation and edit requests
- [#54057](https://github.com/openai/codex/pull/54057) Distinguish unsupported evidence in Decisions comparison metrics
- [#54056](https://github.com/openai/codex/pull/54056) Coalesce overlapping native TLS root certificate loads
- [#54053](https://github.com/openai/codex/pull/54053) Add Responses API client metadata patches for turn start and steer
- [#54050](https://github.com/openai/codex/pull/54050) Scope TUI skill refreshes and workspace commands to explicit directories
- [#54048](https://github.com/openai/codex/pull/54048) Defer folder trust checks until starting a task from agents overview
- [#54047](https://github.com/openai/codex/pull/54047) Restore elapsed time for replayed in-progress turns
- [#54046](https://github.com/openai/codex/pull/54046) Track approval cancellation sources and Guardian context changes
- [#54044](https://github.com/openai/codex/pull/54044) Keep fork lineage ahead of paginated transcript history
- [#54039](https://github.com/openai/codex/pull/54039) Return async Guardian approvals before review cleanup finishes
- [#54033](https://github.com/openai/codex/pull/54033) Extend memory extension resource retention to 14 days
- [#54032](https://github.com/openai/codex/pull/54032) Bound concurrent Git diffs for untracked files
- [#54027](https://github.com/openai/codex/pull/54027) Preserve Windows startup variables and MXC child environment defaults
- [#54008](https://github.com/openai/codex/pull/54008) Fix session lookup and resume after rollout compression
- [#54003](https://github.com/openai/codex/pull/54003) Include compressed rollouts in doctor storage statistics
- [#53997](https://github.com/openai/codex/pull/53997) Filter rollout filenames before checking compressed siblings
- [#53996](https://github.com/openai/codex/pull/53996) Bump `rustls` to `0.23.46`
- [#53991](https://github.com/openai/codex/pull/53991) Report the reason for ChatGPT token refresh requests
- [#53990](https://github.com/openai/codex/pull/53990) Keep host MCP and plugin configuration local with remote environments
- [#53987](https://github.com/openai/codex/pull/53987) Skip service backoff for stale Guardian authorization retries
- [#53969](https://github.com/openai/codex/pull/53969) Avoid reconnect races in the daemon restart test
- [#53963](https://github.com/openai/codex/pull/53963) Test memory extraction budgets with excluded items and ciphertext
- [#53947](https://github.com/openai/codex/pull/53947) Stop rollout reads when the calling task is cancelled
- [#53940](https://github.com/openai/codex/pull/53940) Bound rollout input for memory extraction
- [#53932](https://github.com/openai/codex/pull/53932) Preserve conversation history when compaction fails
- [#53908](https://github.com/openai/codex/pull/53908) Keep the agent dashboard browsable during task removal
- [#53897](https://github.com/openai/codex/pull/53897) Isolate daemon package tests to reduce disk contention
- [#53895](https://github.com/openai/codex/pull/53895) Resume unloaded subagent threads when selected in the TUI
- [#53879](https://github.com/openai/codex/pull/53879) Preserve running turn recovery across thread settings updates

#### 🐛 New Issues
- [#54147](https://github.com/openai/codex/issues/54147) [Work][Windows] Uploaded images unavailable as visual input; Library reads expose garbled OCR only `bug` `windows-os` `tool-calls` 💬1
- [#54083](https://github.com/openai/codex/issues/54083) [Windows Chat] "Model not found" for 5.6 and 6 at all three thinking levels; web succeeds `bug` `windows-os` `app` 💬1
- [#54144](https://github.com/openai/codex/issues/54144) [macOS 27.0.1] Update check fails with server error 520 on 26.1007.30912 `bug` `app` `connectivity` 💬1
- [#54120](https://github.com/openai/codex/issues/54120) Hangs after a while `bug` `CLI` `performance` 💬1
- [#54136](https://github.com/openai/codex/issues/54136) CLI/TUI: async question controls disappear on new events during an active Goal `bug` `TUI` `CLI` 💬1
- [#54143](https://github.com/openai/codex/issues/54143) [macOS][Regression] Chat mode disappears after switching to ChatGPT Work; cannot switch back `bug` `app` 💬1
- [#54142](https://github.com/openai/codex/issues/54142) [Windows] All Chat and image-generation requests return "Model not found" after a 429 retry storm; survives full reboot, web image generation also fails `bug` `windows-os` `rate-limits` `app` 💬1
- [#54139](https://github.com/openai/codex/issues/54139) Windows 10: Computer Use capture times out on 26.1007.71326 (build 20398), including fresh Paint `bug` `windows-os` `app` `computer-use` 💬1
- [#54138](https://github.com/openai/codex/issues/54138) Windows elevated sandbox: every command exits -1 when node_repl.exe is running (os error 32 during setup refresh) `bug` `windows-os` `mcp` `sandbox` 💬1
- [#54132](https://github.com/openai/codex/issues/54132) ERROR WHEN MAKING A REQUEST `bug` `windows-os` `rate-limits` `app` 💬1
- [#54131](https://github.com/openai/codex/issues/54131) Windows Computer Use: sky.click returns without error but pointer does not reach target in dual-monitor setup `bug` `windows-os` `app` `computer-use` 💬1
- [#54126](https://github.com/openai/codex/issues/54126) Windows Codex app 26.1007.71326, build 20398. An explicitly authorized Test-only deployment coordination command is rejected `bug` `windows-os` `sandbox` `app` 💬1
- [#54091](https://github.com/openai/codex/issues/54091) Codex Desktop GPT-6 Astra repeatedly loses most cached input within a turn despite unchanged recorded settings `bug` `rate-limits` `app` 💬1
- [#54123](https://github.com/openai/codex/issues/54123) [Dots][Voice][Android] Main dot misses live conversation updates while voice model continues speaking `bug` `dots` 💬1
- [#54146](https://github.com/openai/codex/issues/54146) [Dots][Pets] Suggested pet-avatar prompt produces artwork but no usable animated pet `bug` `pets` `dots`
- [#54145](https://github.com/openai/codex/issues/54145) [Dots][Cloud computer] Add dark mode for the Orbit new-tab page `enhancement` `dots`
- [#54141](https://github.com/openai/codex/issues/54141) [Windows][26.1007.9446.0] Payment-card autofill save/manage popup in the in-app Browser exits the entire desktop app `bug` `windows-os` `app` `browser`
- [#54140](https://github.com/openai/codex/issues/54140) [Windows][Voice] Mouse cursor flickers when floating Voice widget is on the same monitor as the app `bug` `windows-os` `app` `browser`
- [#54137](https://github.com/openai/codex/issues/54137) Android remote pairing blocked by hardware key attestation failure (-10003) on POCO F4 `bug` `auth` `app` `remote`
- [#54134](https://github.com/openai/codex/issues/54134) [macOS][ChatGPT] Regression: Native editable Writing Blocks fail to generate from desktop-originated prompts; identical web prompts succeed `bug` `app`
- [#54130](https://github.com/openai/codex/issues/54130) codex-cli doctor: accept reverted rollout revision lineage in state.rollout_db_parity `bug` `CLI` `session`
- [#54129](https://github.com/openai/codex/issues/54129) codex-core / codex-protocol: preserve default and clamped reasoning effort in TurnContext::with_model `bug` `CLI` `config`
- [#54128](https://github.com/openai/codex/issues/54128) codex-skills-extension: pass ModelInfo context window in SkillsExtension::contribute_thread_context `bug` `CLI` `context` `skills`
- [#54127](https://github.com/openai/codex/issues/54127) codex-arg0: reuse inherited PATH aliases when CODEX_HOME is read-only inside sandboxed sub-processes `bug` `sandbox` `CLI`
- [#54125](https://github.com/openai/codex/issues/54125) Codex IDE extension chat history now includes unrelated ChatGPT desktop conversations, with no way to filter them out `bug` `extension` `session`

#### 🔒 Closed Issues
- [#54120](https://github.com/openai/codex/issues/54120) Hangs after a while
- [#53461](https://github.com/openai/codex/issues/53461) Backend ends HTTP Responses streams at ~900 s and closes websocket turns (1000/1012) before response.completed on long gpt-6.1-sol reasoning turns

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 107,371 · **Open issues:** 749 · **Last push:** 5h ago

On October 15, 2026, Gemini CLI released version v0.65.0-nightly.20261014.g42c518220, which includes important fixes such as correcting the reverse search highlight index for expanding unicode characters and treating whitespace-only UTF-16 and UTF-32 files as empty. Significant merged pull requests include #29736, which refactors the core and CLI to emit tool call groups from the scheduler, and #29742, which prevents right-hand border bleed in scrollable tool containers. Additionally, #29758 was opened to address a failure in the nightly release process. Overall, the day saw several enhancements aimed at improving CLI functionality and stability.

#### 🚀 New Releases
- [v0.65.0-nightly.20261014.g42c518220](https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0-nightly.20261014.g42c518220) Release v0.65.0-nightly.20261014.g42c518220

#### ✅ Merged PRs
- [#29736](https://github.com/google-gemini/gemini-cli/pull/29736) refactor(core,cli): emit tool call groups from the scheduler and drop the UI lookahead
- [#29742](https://github.com/google-gemini/gemini-cli/pull/29742) fix(cli): prevent right-hand border bleed in scrollable tool containers
- [#29695](https://github.com/google-gemini/gemini-cli/pull/29695) fix(ui): fix debug console height calculation and terminalBuffer flickering
- [#29725](https://github.com/google-gemini/gemini-cli/pull/29725) fix(ui): implement synchronized output and isolate spinner rendering
- [#29741](https://github.com/google-gemini/gemini-cli/pull/29741) Changelog for v0.64.0
- [#29740](https://github.com/google-gemini/gemini-cli/pull/29740) chore(release): bump version to 0.66.0-nightly.20261013.g204db94ae

#### 🐛 New Issues
- [#29758](https://github.com/google-gemini/gemini-cli/issues/29758) Nightly Release Failed for on 2026-10-15 `priority/p0` `release-failure`

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,254 · **Open issues:** 2,193 · **Last push:** <1h ago

On October 15, 2026, GitHub Copilot CLI released version 1.0.99-0, introducing a full-screen action menu for sharing sessions with the new Open /share command, and enabling the /sandbox command to keep sandboxing active for the current session without global changes. Improvements also included automatic installation and updates for trusted repository plugins before chat sessions, as well as a rename of the built-in browser plugin to browser-use while maintaining existing preferences. In version 1.0.98-2, enhancements were made to expand /ask answers with Ctrl+E and re-open past answers efficiently, alongside fixing issues with command hooks losing signals. Notably, new issues reported included #5138, which addresses a lack of usage records when a call is killed mid-stream, emphasizing potential gaps in accountability within the command execution process.

#### 🚀 New Releases
- [v1.0.99-0](https://github.com/github/copilot-cli/releases/tag/v1.0.99-0) 1.0.99-0
- [v1.0.98](https://github.com/github/copilot-cli/releases/tag/v1.0.98) 1.0.98
- [v1.0.98-2](https://github.com/github/copilot-cli/releases/tag/v1.0.98-2) 1.0.98-2

#### 🐛 New Issues
- [#5137](https://github.com/github/copilot-cli/issues/5137) Expand thoughts by default `area:configuration` `area:terminal-rendering` 💬2
- [#5146](https://github.com/github/copilot-cli/issues/5146) Local operations create dozens of permission requests, repeatedly, drowning the user in noise `triage`
- [#5145](https://github.com/github/copilot-cli/issues/5145) 400 `reasoning_text` in thinking mode must be passed back — triggered by runtime-synthesized assistant turn after a background shell exits `triage`
- [#5144](https://github.com/github/copilot-cli/issues/5144) Allow subagents to inherit main agent's permissions `triage`
- [#5143](https://github.com/github/copilot-cli/issues/5143) CLI: follow-up to an idle background agent is delayed by minutes to hours while its status shows "running" `triage`
- [#5142](https://github.com/github/copilot-cli/issues/5142) Remote HTTP MCP servers fail behind Kerberos/Negotiate proxy ( proxy_auth_required ) while main fetch stack works `triage`
- [#5141](https://github.com/github/copilot-cli/issues/5141) Allow default agent selection with /agent without interactive list `triage`
- [#5140](https://github.com/github/copilot-cli/issues/5140) Headless mode exits 0 mid-task when a model response has `finish_reason: "tool_calls"` but no tool calls `triage`
- [#5139](https://github.com/github/copilot-cli/issues/5139) Claude models (and Gemini Argon) fail with HTTP 400 “request body is not valid JSON”; other models work `triage`
- [#5138](https://github.com/github/copilot-cli/issues/5138) A call killed mid-stream leaves no usage record and no accounting.sequence gap `triage`

#### 🔒 Closed Issues
- [#5137](https://github.com/github/copilot-cli/issues/5137) Expand thoughts by default
- [#4516](https://github.com/github/copilot-cli/issues/4516) Sandbox RW path grants not honored by JVM processes spawned from Copilot CLI

### OpenCode (`anomalyco/opencode`)

**Stars:** 213,542 · **Open issues:** 4,278 · **Last push:** <1h ago

On October 15, 2026, there were no new releases for OpenCode, but several important pull requests were merged. Noteworthy changes included fixes to ensure that the project settings remain accessible when the project folder is missing (#55553) and to address loading issues for configured instructions (#55539). Additionally, the config schema was updated to accept both V1 and V2 shapes (#55524), enhancing compatibility across versions. Among the new issues reported, a significant concern was raised about absolute paths resulting in truncated path errors (#55571), indicating a potential disruption for users leveraging file paths extensively.

#### ✅ Merged PRs
- [#51062](https://github.com/anomalyco/opencode/pull/51062) fix(mcp): pass tool input as permission metadata
- [#55568](https://github.com/anomalyco/opencode/pull/55568) test(core): run MCP lifecycle tests against an in-process server
- [#55553](https://github.com/anomalyco/opencode/pull/55553) fix(app): keep project settings open when the project folder is missing
- [#55564](https://github.com/anomalyco/opencode/pull/55564) promote dev -> prod
- [#55524](https://github.com/anomalyco/opencode/pull/55524) fix(schema): publish config schema that accepts V1 and V2 shapes
- [#55526](https://github.com/anomalyco/opencode/pull/55526) docs(plugin): document permission assert and fix session rules example
- [#55547](https://github.com/anomalyco/opencode/pull/55547) fix(cli): default the Windows service to port 45278
- [#55539](https://github.com/anomalyco/opencode/pull/55539) fix(core): load configured instructions
- [#55546](https://github.com/anomalyco/opencode/pull/55546) promote dev -> prod
- [#55541](https://github.com/anomalyco/opencode/pull/55541) fix(console): keep API route handlers out of route modules

#### 🐛 New Issues
- [#55571](https://github.com/anomalyco/opencode/issues/55571) read: absolute paths fail with truncated path error `triaging` 💬4
- [#55565](https://github.com/anomalyco/opencode/issues/55565) I don't have any credits. `pending close` `triaging` 💬4
- [#55575](https://github.com/anomalyco/opencode/issues/55575) cli: compaction rejected as out-of-origin free-tier request while inside opencode `2.0` `triaging` 💬3
- [#55336](https://github.com/anomalyco/opencode/issues/55336) mcp: ?codemode=false is appended to remote MCP URLs; Google's Workspace MCP servers return 404 for it `reproduced` 💬2
- [#55533](https://github.com/anomalyco/opencode/issues/55533) tui: NumPad End/Home ignored under kitty keyboard protocol (Windows Terminal reports KP_END 57424) `reproduced` 💬2
- [#55551](https://github.com/anomalyco/opencode/issues/55551) Desktop: side preview pane SVG "fit" behavior incorrect 💬2
- [#55530](https://github.com/anomalyco/opencode/issues/55530) SMB shares in Windows are not supported as attachment in OpenCode Desktop `reproduced` 💬2
- [#55345](https://github.com/anomalyco/opencode/issues/55345) `instructions` array in opencode.json not injected in v2.0.28 — worked in v1.19.0 `pending close` `triaging` 💬2
- [#55577](https://github.com/anomalyco/opencode/issues/55577) Desktop: Show reasoning summaries toggle ignored when new layout enabled (v1.19.0) `pending close` `triaging` 💬1
- [#55572](https://github.com/anomalyco/opencode/issues/55572) run: sub-agent (child session) output is not shown in non-interactive mode `pending close` `triaging` 💬1
- [#55569](https://github.com/anomalyco/opencode/issues/55569) subagent: free-tier restriction triggers incorrectly when spawning from within OpenCode `pending close` `triaging` 💬1
- [#55567](https://github.com/anomalyco/opencode/issues/55567) It is not possible to select a model or agent mode for older conversations created before version 2.0. `triaging` 💬1
- [#55561](https://github.com/anomalyco/opencode/issues/55561) Kimi K3 on OpenCode Go repeatedly stalls during reasoning and ends with incomplete streams `triaging` 💬1
- [#55558](https://github.com/anomalyco/opencode/issues/55558) [docs] Container/server deployment: TUI entrypoint, rotating password, and a 404 health check 💬1
- [#55557](https://github.com/anomalyco/opencode/issues/55557) Open Responses parser rejects `"namespace": null` on function_call items ("Invalid … stream event") `reproduced` 💬1
- [#55556](https://github.com/anomalyco/opencode/issues/55556) macOS permission prompts repeat even after "Always Allow" `triaging` 💬1
- [#55555](https://github.com/anomalyco/opencode/issues/55555) Downgrade v2 → 1.19.0 also breaks: "no such column: project_id" on migrated DB makes all v1 sessions return 500 (still in release, not just dev) `pending close` `triaging` 💬1
- [#55549](https://github.com/anomalyco/opencode/issues/55549) web: on mobile, Enter submits the prompt and no newline can be inserted `reproduced` 💬1
- [#55550](https://github.com/anomalyco/opencode/issues/55550) [FEATURE]: Re-run AWS SSO login automatically (or via configurable command) when the Bedrock SSO token expires 💬1
- [#55542](https://github.com/anomalyco/opencode/issues/55542) desktop: /export offers only JSON — expose the Markdown format the TUI already has 💬1

#### 🔒 Closed Issues
- [#43748](https://github.com/anomalyco/opencode/issues/43748) config: published schema at opencode.ai/config.json rejects documented V2 fields (skills, mcp.*, permissions)
- [#51341](https://github.com/anomalyco/opencode/issues/51341) config: instructions field does not load instruction files (v2.0.16)
- [#37164](https://github.com/anomalyco/opencode/issues/37164) feat(plugin): let tool.execute.before request native permission approval
- [#55571](https://github.com/anomalyco/opencode/issues/55571) read: absolute paths fail with truncated path error
- [#55253](https://github.com/anomalyco/opencode/issues/55253) migrate-v1: sessions invisible after upgrade (left on 'global' project)
- [#50724](https://github.com/anomalyco/opencode/issues/50724) Configuration schema is not in sync with the v2 configuration
- [#55575](https://github.com/anomalyco/opencode/issues/55575) cli: compaction rejected as out-of-origin free-tier request while inside opencode
- [#50584](https://github.com/anomalyco/opencode/issues/50584) OpenCode V2: bash operation refused because host does not provide a permission request endpoint
- [#48812](https://github.com/anomalyco/opencode/issues/48812) schema: published config.json uses permission (singular), should be permissions (plural) for V2
- [#55266](https://github.com/anomalyco/opencode/issues/55266) tui: free-tier model rejected for custom primary agent while build works
- [#54651](https://github.com/anomalyco/opencode/issues/54651) chrome_crashpad_handler SIGBUS (BUS_ADRERR) in desktop app 2.0.26 (Electron 44.4.5)
- [#51061](https://github.com/anomalyco/opencode/issues/51061) MCP tool permission requests carry no arguments (metadata: {})
- [#52540](https://github.com/anomalyco/opencode/issues/52540) [FEATURE]: Plugins cannot raise a permission request in-process on v2
- [#46248](https://github.com/anomalyco/opencode/issues/46248) schema rejects valid custom provider model in top-level model field
- [#41014](https://github.com/anomalyco/opencode/issues/41014) opencode.ai/config.json schema uses top-level $ref/$defs, which breaks autocomplete/validation in the standard JSON LSP (neovim jsonls / VS Code)
- [#53351](https://github.com/anomalyco/opencode/issues/53351) Windows: managed service fails when default port 49374 is in an excluded TCP range
- [#55345](https://github.com/anomalyco/opencode/issues/55345) `instructions` array in opencode.json not injected in v2.0.28 — worked in v1.19.0
- [#55242](https://github.com/anomalyco/opencode/issues/55242) [FEATURE]: Sync selected model across all agents (build/plan/subagents)
- [#55241](https://github.com/anomalyco/opencode/issues/55241) snapshot: leaked git index.lock permanently breaks file snapshots until manual cleanup
- [#55577](https://github.com/anomalyco/opencode/issues/55577) Desktop: Show reasoning summaries toggle ignored when new layout enabled (v1.19.0)
- [#34957](https://github.com/anomalyco/opencode/issues/34957) v2: internal tool plugins expose gaps in the public plugin API
- [#53398](https://github.com/anomalyco/opencode/issues/53398) config: published JSON schema at opencode.ai/config.json describes V1, flags valid V2 fields

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 28,485 · **Open issues:** 1,893 · **Last push:** <1h ago

On October 15, 2026, there were no new releases or merged pull requests for Qwen Code, indicating a routine maintenance day. Among the new issues, the most significant highlighted the potential limitations in plugin usage, specifically issue #14182, which notes that the `${CLAUDE_PLUGIN_ROOT}` variable is only replaced when the plugin contains a hooks directory. Additionally, issue #14215 proposed improvements for context immutability in self-hosted models, prompting discussions around how this impacts model performance and usability. Other notable mentions include issue #14184 regarding the Web Shell's Workspace dialog, which is reportedly unusable on phone viewports, affecting user accessibility.

#### 🐛 New Issues
- [#14182](https://github.com/QwenLM/qwen-code/issues/14182) Claude plugins: ${CLAUDE_PLUGIN_ROOT} in .md files is only replaced when the plugin has a hooks/ directory `priority/P2` `type/bug` `category/core` `scope/extensions` 💬7
- [#14215](https://github.com/QwenLM/qwen-code/issues/14215) Context immutability for self-hosted models `priority/P2` `type/feature-request` `category/performance` `scope/memory` 💬6
- [#14198](https://github.com/QwenLM/qwen-code/issues/14198) record_artifact tells the model to use the Artifact tool when that tool is not registered `priority/P3` `type/bug` `category/tools` `scope/core` 💬5
- [#14148](https://github.com/QwenLM/qwen-code/issues/14148) test(managed-agent): Hosted fork budget guard still assumes 650 s healthy runtime; the fork measures ~1310 s, so five unchecked 600 s ceilings exceed the ~490 s left `priority/P2` `type/bug` `category/development` `scope/testing` 💬4
- [#14184](https://github.com/QwenLM/qwen-code/issues/14184) Web Shell: Add Workspace dialog unusable on phone viewports — folder browser collapses to one line, action buttons below the fold `priority/P2` `type/bug` `category/ui` `scope/web-shell` 💬4
- [#14127](https://github.com/QwenLM/qwen-code/issues/14127) Deferred review findings from PR #13902: feat: project agent identity and Agent Team delivery onto the client surface `priority/P3` `category/ui` `scope/components` `type/enhancement` 💬3
- [#14226](https://github.com/QwenLM/qwen-code/issues/14226) Web Shell: render live tokens/sec indicator (ui.showResponseTokensPerSecond) `priority/P3` `type/feature-request` `category/ui` `scope/web-shell` 💬3
- [#14225](https://github.com/QwenLM/qwen-code/issues/14225) ci: main is deterministically red — main-ci-failure-issue-workflow.test.js still asserts the pre-#14205 inline 4-entry workflows list `priority/P1` `type/bug` `category/development` `scope/testing` 💬3
- [#14219](https://github.com/QwenLM/qwen-code/issues/14219) ci: post-merge Classify PR is pinned to a congested hosted runner and gates every job — 4s of work behind a 49-64min queue `priority/P2` `type/bug` `category/development` `scope/github-actions` 💬3
- [#14216](https://github.com/QwenLM/qwen-code/issues/14216) `tool_call` bridge refusals for envelope-level validation are unlabeled, so the model reads them as a target-schema error and gives up `priority/P2` `type/bug` `category/tools` `scope/core` 💬3
- [#14212](https://github.com/QwenLM/qwen-code/issues/14212) ci: the PR stage has no budget gate — 60 jobs / 36.4 h declared timeout, and a failure known at 12 min reports at 103 min `priority/P2` `category/development` `scope/github-actions` `scope/ci-cd` 💬3
- [#14203](https://github.com/QwenLM/qwen-code/issues/14203) Request-tail memory catalog (#13521) forces a full prompt re-process on every step with hybrid models on llama.cpp / Ollama `priority/P2` `type/bug` `category/performance` `scope/memory` 💬3
- [#14168](https://github.com/QwenLM/qwen-code/issues/14168) feat(managed-agent): D7-1 durable command delivery for general input and cancel `priority/P2` `type/feature-request` `category/core` `scope/session-management` 💬3
- [#14167](https://github.com/QwenLM/qwen-code/issues/14167) feat(managed-agent): D7-3 the opt-in java_durable admission profile and its switch `priority/P2` `status/blocked` `type/feature-request` `category/core` 💬3
- [#14166](https://github.com/QwenLM/qwen-code/issues/14166) feat(managed-agent): D7-2 original-command reconciliation for java_durable operations `priority/P2` `type/feature-request` `category/core` `scope/session-management` 💬3
- [#14223](https://github.com/QwenLM/qwen-code/issues/14223) Main CI failed: Qwen Code CI — scripts/tests/event-transport-broker-ci.test.js > … > triggers on the provisioning script on both events (+2 more) `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#14229](https://github.com/QwenLM/qwen-code/issues/14229) Release Failed for v0.25.1-nightly.20261014.9dacfdbe1a on 2026-10-14 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#14224](https://github.com/QwenLM/qwen-code/issues/14224) Main CI failed: SDK Java — ManagedExtensionRecordStoreTest.aChildAgentTaskCarriesItsCancelAndItsEventsThroughTheStop (+3 more) `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#14211](https://github.com/QwenLM/qwen-code/issues/14211) tracking(runtime-broker): 按 Workspace 常驻的 Tool Runtime（复用、预热、空闲回收） `priority/P2` `type/feature-request` `category/core` `roadmap/multi-agent` 💬2
- [#14195](https://github.com/QwenLM/qwen-code/issues/14195) Main CI failed: SDK Java — EventTransportBrokerGate.thePostCommitPathDoesNotRegress `type/bug` `status/ready-for-agent` `autofix/skip` `autofix/approved` 💬2
- [#14196](https://github.com/QwenLM/qwen-code/issues/14196) Main CI failed: SDK Java — JdbcRuntimeRetentionMySqlIT.placementKeepsExactIdentitiesWithoutDecryptingHistoricalRowsOnMySql (+72 more) `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#14197](https://github.com/QwenLM/qwen-code/issues/14197) Main CI failed: SDK Java — EventTransportBrokerGate.thePostCommitPathDoesNotRegress `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#14201](https://github.com/QwenLM/qwen-code/issues/14201) Main CI failed: SDK Java — EventTransportBrokerGate.thePostCommitPathDoesNotRegress (+73 more) `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#14200](https://github.com/QwenLM/qwen-code/issues/14200) Main CI failed: SDK Java on ce75a117a5b4 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#14199](https://github.com/QwenLM/qwen-code/issues/14199) Main CI failed: SDK Java — BackfillWitnessesTest.brokerAndServerInitializeTheSameBaselineAndReplayWithoutAddingTables (+72 more) `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#14189](https://github.com/QwenLM/qwen-code/issues/14189) Main CI failed: SDK Java — ChildWorktreeGitTest.applyResumesFromAHalfWrittenTree `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#14191](https://github.com/QwenLM/qwen-code/issues/14191) Main CI failed: E2E Tests — interactive/workflow-completion.test.ts > … > delivers 'WORKFLOW_LARGE_RESULT_12176' once `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#14190](https://github.com/QwenLM/qwen-code/issues/14190) Main CI failed: SDK Java — HostedRecoveryWedgeGate.recoveryBlockedSessionMustNotWedgeOtherSessionTurns (+1 more) `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#14188](https://github.com/QwenLM/qwen-code/issues/14188) Main CI failed: SDK Java — HostedTeamLeadMySqlIT.leadRunsATeamThroughTwoNamedMembers `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#14183](https://github.com/QwenLM/qwen-code/issues/14183) Main CI failed: Qwen Code CI on 97fb4a547dc5 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#14192](https://github.com/QwenLM/qwen-code/issues/14192) Main CI failed: SDK Java — HostedRecoveryWedgeGate.recoveryBlockedSessionMustNotWedgeOtherSessionTurns (+1 more) `type/bug` `status/ready-for-agent` `autofix/skip` 💬1

#### 🔒 Closed Issues
- [#14182](https://github.com/QwenLM/qwen-code/issues/14182) Claude plugins: ${CLAUDE_PLUGIN_ROOT} in .md files is only replaced when the plugin has a hooks/ directory
- [#14125](https://github.com/QwenLM/qwen-code/issues/14125) Main CI failed: SDK Java on 163e4686191d
- [#13863](https://github.com/QwenLM/qwen-code/issues/13863) AutoReconnectTransport can retain a replacement and retry requests after disposal
- [#13861](https://github.com/QwenLM/qwen-code/issues/13861) Python SDK cannot start npm's Windows qwen.cmd shim through the default qwen command
- [#13865](https://github.com/QwenLM/qwen-code/issues/13865) @ file completion corrupts the search query when the prompt or filename contains supplementary Unicode characters
- [#13483](https://github.com/QwenLM/qwen-code/issues/13483) Fuzzy edits ending in a newline can delete the following blank line
- [#13608](https://github.com/QwenLM/qwen-code/issues/13608) refactor(core): give the Code Mode tool-result subtype stamp a single writer-side owner
- [#13634](https://github.com/QwenLM/qwen-code/issues/13634) Inconsistent /update behavior with general.enableAutoUpdate: false — interactive is gated, non-interactive installs
- [#14223](https://github.com/QwenLM/qwen-code/issues/14223) Main CI failed: Qwen Code CI — scripts/tests/event-transport-broker-ci.test.js > … > triggers on the provisioning script on both events (+2 more)

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

**Stars:** 392,029 · **Open issues:** 9,598 · **Last push:** <1h ago

On October 15, 2026, there were no new releases for OpenClaw. However, several notable pull requests were merged, including enhancements to the user interface with the introduction of plugin themes that support both light and dark backgrounds (#172627) and a feature that allows agents to remember native runtime consent per agent (#172607). Significant fixes were made to improve the stability of the Models page (#172608) and to speed up cold session lists for large inventories (#172650). Among the new issues reported, a critical bug (#172053) has been identified causing gateway startup failures with a vague error message, hindering diagnosis due to a systemd crash loop.

#### ✅ Merged PRs
- [#170297](https://github.com/openclaw/openclaw/pull/170297) fix(release): expose Linux builder admission and retain failed bundles
- [#172654](https://github.com/openclaw/openclaw/pull/172654) fix(mcp): restore recovered tools on the first due retry turn
- [#172608](https://github.com/openclaw/openclaw/pull/172608) fix(ui): keep the Models page stable while it loads
- [#172607](https://github.com/openclaw/openclaw/pull/172607) feat(agents): remember native runtime consent per agent
- [#172627](https://github.com/openclaw/openclaw/pull/172627) feat(ui): plugin themes can ship light and dark backgrounds
- [#172650](https://github.com/openclaw/openclaw/pull/172650) fix: speed up cold session lists with large inventories
- [#172559](https://github.com/openclaw/openclaw/pull/172559) fix(ui): keep modal completion actions below content
- [#172661](https://github.com/openclaw/openclaw/pull/172661) fix: distinguish workflow approval and exception capabilities
- [#172656](https://github.com/openclaw/openclaw/pull/172656) docs: remove ad hoc release live smoke requirement
- [#172435](https://github.com/openclaw/openclaw/pull/172435) fix(pr): accept committed renamed conflict resolutions
- [#172557](https://github.com/openclaw/openclaw/pull/172557) perf(sessions): reuse committed owner facts for warm reads
- [#172674](https://github.com/openclaw/openclaw/pull/172674) improve: skip no-op session maintenance after delivery settlement
- [#172666](https://github.com/openclaw/openclaw/pull/172666) test: Codex steer live test fails when the model truncates a long hex marker
- [#172655](https://github.com/openclaw/openclaw/pull/172655) fix(browser): preserve shared windows when previewing tabs
- [#171572](https://github.com/openclaw/openclaw/pull/171572) improve(sessions): reuse retained transcript residency charges
- [#172657](https://github.com/openclaw/openclaw/pull/172657) fix(ui): keep private workspace paths out of session Details
- [#170028](https://github.com/openclaw/openclaw/pull/170028) refactor(active-memory): remove redundant setup-grace test override
- [#172632](https://github.com/openclaw/openclaw/pull/172632) fix(gateway): recover agent admission after runtime supersession
- [#172630](https://github.com/openclaw/openclaw/pull/172630) fix(memory): accept limit as the memory_search result cap
- [#172527](https://github.com/openclaw/openclaw/pull/172527) fix(cron): restore owner app reauthorization on October
- [#172659](https://github.com/openclaw/openclaw/pull/172659) fix(novita): send max_tokens on chat completions
- [#172590](https://github.com/openclaw/openclaw/pull/172590) fix: automations switch accounts when interactive defaults change
- [#172546](https://github.com/openclaw/openclaw/pull/172546) fix(ui): side chat shows text instead of the working indicator while answering
- [#172596](https://github.com/openclaw/openclaw/pull/172596) test(qa-lab): clarify node_exec live arguments and report cases that never start
- [#172543](https://github.com/openclaw/openclaw/pull/172543) feat: suggest follow-up drafts in the chat composer
- [#171733](https://github.com/openclaw/openclaw/pull/171733) refactor(ui): simplify session roster projections
- [#172371](https://github.com/openclaw/openclaw/pull/172371) perf(state): reuse retained agent writer admission
- [#172624](https://github.com/openclaw/openclaw/pull/172624) fix: stabilize Slack authorization, plugin discovery, and run recovery
- [#172584](https://github.com/openclaw/openclaw/pull/172584) refactor(channels): colocate bundled detail presentation policies
- [#172647](https://github.com/openclaw/openclaw/pull/172647) refactor(test): share OpenAI Responses model fixtures
- [#172646](https://github.com/openclaw/openclaw/pull/172646) fix(macos): restore failed dashboard after reconnect
- [#172587](https://github.com/openclaw/openclaw/pull/172587) refactor: deslop gateway, codex, providers and packages (wave-4 bundle)
- [#172637](https://github.com/openclaw/openclaw/pull/172637) fix(media): avoid false delivery warnings while the chat is busy
- [#172582](https://github.com/openclaw/openclaw/pull/172582) refactor(ui): deslop pages and components (wave-4 bundle)
- [#171541](https://github.com/openclaw/openclaw/pull/171541) fix(codex): unblock sessions after native child interruption
- [#172638](https://github.com/openclaw/openclaw/pull/172638) test(gateway): expect runtime context after the user prompt in long-context replay
- [#172513](https://github.com/openclaw/openclaw/pull/172513) fix: warn when plugin cleanup fails during session reset or deletion
- [#168703](https://github.com/openclaw/openclaw/pull/168703) improve: simplify Settings and configuration help
- [#172620](https://github.com/openclaw/openclaw/pull/172620) fix(ui): stop showing reply icons on progress lines before tool calls
- [#172544](https://github.com/openclaw/openclaw/pull/172544) fix(ui): make release updates discoverable from the account menu
- [#172641](https://github.com/openclaw/openclaw/pull/172641) fix(release): retry FRV job listings with smaller pages on 2026.9.33
- [#172622](https://github.com/openclaw/openclaw/pull/172622) fix(models): keep recommended picker models after upgrades
- [#172634](https://github.com/openclaw/openclaw/pull/172634) test(live): run Ollama Cloud models in the direct live suite
- [#172390](https://github.com/openclaw/openclaw/pull/172390) fix(state): avoid unrelated repairs during schema upgrades
- [#172615](https://github.com/openclaw/openclaw/pull/172615) refactor: simplify Workboard and MCP relay internals
- [#172556](https://github.com/openclaw/openclaw/pull/172556) perf(talk): serve catalog snapshots while refreshing readiness
- [#172640](https://github.com/openclaw/openclaw/pull/172640) fix(update): allow macOS updates from login shells
- [#172383](https://github.com/openclaw/openclaw/pull/172383) test(ui): migrate copy payload lifetime coverage to Solid
- [#172633](https://github.com/openclaw/openclaw/pull/172633) fix: keep unavailable native-runtime heartbeats quiet
- [#171783](https://github.com/openclaw/openclaw/pull/171783) fix: keep speed selectable with configured defaults
- [#170274](https://github.com/openclaw/openclaw/pull/170274) fix(release): publication status omits release and Windows source identities
- [#172511](https://github.com/openclaw/openclaw/pull/172511) fix(agents): deletion hangs when embedded runs do not stop
- [#172574](https://github.com/openclaw/openclaw/pull/172574) fix(ci): clear stale dependency exports after owner migrations
- [#171817](https://github.com/openclaw/openclaw/pull/171817) refactor(ui): render native toast content
- [#172621](https://github.com/openclaw/openclaw/pull/172621) test(live): replace BYOK-only OpenRouter gpt-5.2-chat ref with gpt-5.6-luna
- [#171688](https://github.com/openclaw/openclaw/pull/171688) feat: restore saved questions before serving question reads
- [#172588](https://github.com/openclaw/openclaw/pull/172588) test(scripts,codex): remove low-value tests (batch d086)
- [#172458](https://github.com/openclaw/openclaw/pull/172458) fix: keep follow-up replies from failing during local turn settlement
- [#172592](https://github.com/openclaw/openclaw/pull/172592) fix(macos): keep Codex catalog available with valid plugin options
- [#172619](https://github.com/openclaw/openclaw/pull/172619) fix: valid hook requests fail during provider credential refresh
- [#172370](https://github.com/openclaw/openclaw/pull/172370) perf(storage): remove WAL and session event readbacks
- [#172388](https://github.com/openclaw/openclaw/pull/172388) perf: narrow exact device pairing reads
- [#172585](https://github.com/openclaw/openclaw/pull/172585) fix: Control UI hides progress messages during tool runs
- [#172616](https://github.com/openclaw/openclaw/pull/172616) fix(memory): stabilize system-only cron catch-up test
- [#172618](https://github.com/openclaw/openclaw/pull/172618) fix(ui): keep approval-waiting sidebar sessions on one line
- [#172008](https://github.com/openclaw/openclaw/pull/172008) refactor(ui): render approval rows and countdowns directly in Solid
- [#172356](https://github.com/openclaw/openclaw/pull/172356) fix: preserve operator tasks across repeated restarts
- [#172593](https://github.com/openclaw/openclaw/pull/172593) fix: renew expired Sign in with ChatGPT credentials before fallback
- [#172613](https://github.com/openclaw/openclaw/pull/172613) fix(mcp): release event request callbacks after completion
- [#172554](https://github.com/openclaw/openclaw/pull/172554) fix: avoid redundant PR head fetching during preparation
- [#172436](https://github.com/openclaw/openclaw/pull/172436) improve(ui): clarify session details inspector
- [#167388](https://github.com/openclaw/openclaw/pull/167388) fix(ui): keep tab titles clear during disconnects
- [#172575](https://github.com/openclaw/openclaw/pull/172575) fix(ui): stop sidebar refresh loops with legacy session participants
- [#172612](https://github.com/openclaw/openclaw/pull/172612) fix(sessions): avoid rescanning every agent during catalog delivery
- [#172600](https://github.com/openclaw/openclaw/pull/172600) ci: run unit-src tests on Bun
- [#169202](https://github.com/openclaw/openclaw/pull/169202) fix(telegram): keep messages queued after handler timeouts
- [#171574](https://github.com/openclaw/openclaw/pull/171574) improve(sessions): omit storage-only data before cloning model context
- [#172542](https://github.com/openclaw/openclaw/pull/172542) fix: select an available checkout for new project sessions
- [#172580](https://github.com/openclaw/openclaw/pull/172580) fix(agents): custom GLM providers' session titles fail with thinking-off 400
- [#172573](https://github.com/openclaw/openclaw/pull/172573) fix(ui): activity rows shift and hide their source link when toggled
- [#172599](https://github.com/openclaw/openclaw/pull/172599) fix(plugins): remove provider ownership sort suppression
- [#172577](https://github.com/openclaw/openclaw/pull/172577) improve(ui): search emoji by name in the reaction picker
- [#172595](https://github.com/openclaw/openclaw/pull/172595) fix: prevent Doctor memory checks from inheriting Bun
- [#172565](https://github.com/openclaw/openclaw/pull/172565) perf(agents): share immutable request bytes with fork replay
- [#172589](https://github.com/openclaw/openclaw/pull/172589) fix(ios): release qualification rejects visible chat replies
- [#172449](https://github.com/openclaw/openclaw/pull/172449) feat(nvidia): replace Nemotron 3 Super with 3.5 Super VL
- [#172558](https://github.com/openclaw/openclaw/pull/172558) fix(ui): session links outside the sidebar show raw URLs instead of titles
- [#172499](https://github.com/openclaw/openclaw/pull/172499) fix: make saved web fetch output readable in local sandboxes
- [#172564](https://github.com/openclaw/openclaw/pull/172564) perf(agents): hydrate compaction maintenance transcripts on demand
- [#172586](https://github.com/openclaw/openclaw/pull/172586) fix: restore assistant-only bounded continuity fixture
- [#172579](https://github.com/openclaw/openclaw/pull/172579) fix: worktree session files fail to open with "Session workspace changed during file read"
- [#172277](https://github.com/openclaw/openclaw/pull/172277) refactor: derive session placement catalog state
- [#172373](https://github.com/openclaw/openclaw/pull/172373) refactor(state): reduce agent database admission queries
- [#172460](https://github.com/openclaw/openclaw/pull/172460) fix(ui): hide archived sessions from the Pages sidebar
- [#172487](https://github.com/openclaw/openclaw/pull/172487) ci: run process and unit-fast tests on Bun; fix jsdom listener retirement on Bun
- [#172549](https://github.com/openclaw/openclaw/pull/172549) improve(ui): drop startup ellipsis and show elapsed time last
- [#169951](https://github.com/openclaw/openclaw/pull/169951) refactor(moonshot): remove retired streaming usage test seam
- [#172550](https://github.com/openclaw/openclaw/pull/172550) fix(ui): chat timestamp shows lowercase "just now"
- [#172568](https://github.com/openclaw/openclaw/pull/172568) test(state): restore the historical outbox before migration
- [#172566](https://github.com/openclaw/openclaw/pull/172566) perf(gateway): skip marker projection for visible history runs
- [#172471](https://github.com/openclaw/openclaw/pull/172471) fix: recover Claude native login without Gateway restart
- [#172452](https://github.com/openclaw/openclaw/pull/172452) fix(android): drain Wear fixtures before speech shutdown
- [#172560](https://github.com/openclaw/openclaw/pull/172560) test(agents): align pinned rate-limit reply-entry test with exhaustion copy
- [#172545](https://github.com/openclaw/openclaw/pull/172545) fix: retain useful Android release failure diagnostics
- [#172509](https://github.com/openclaw/openclaw/pull/172509) fix: stop retrying optional completion updates
- [#172307](https://github.com/openclaw/openclaw/pull/172307) refactor(ui): remove Lit types from gateway controller
- [#172552](https://github.com/openclaw/openclaw/pull/172552) fix(code-mode): stop cheap near-limit GC storms
- [#171643](https://github.com/openclaw/openclaw/pull/171643) refactor(ui): remove unused bridges from Solid pages
- [#172524](https://github.com/openclaw/openclaw/pull/172524) fix(ci): combine ordinary Security Review evaluation
- [#168693](https://github.com/openclaw/openclaw/pull/168693) docs: simplify getting started and provider setup
- [#157948](https://github.com/openclaw/openclaw/pull/157948) fix: Mac node reports app update when bundled worker cannot read newer state
- [#172376](https://github.com/openclaw/openclaw/pull/172376) refactor(ui): render connection commands with Solid
- [#172081](https://github.com/openclaw/openclaw/pull/172081) test(ui): cover person links and isolate sidebar keyboard checks
- [#172510](https://github.com/openclaw/openclaw/pull/172510) fix(mcp): preserve quiet HTTP calls through their request timeout
- [#172478](https://github.com/openclaw/openclaw/pull/172478) fix(moonshot): type untyped anyOf branches so MCP tool schemas are accepted
- [#172500](https://github.com/openclaw/openclaw/pull/172500) fix(daemon): avoid full state copies during service updates
- [#172470](https://github.com/openclaw/openclaw/pull/172470) fix: avoid repeated scans while streaming citation replies
- [#172548](https://github.com/openclaw/openclaw/pull/172548) fix: restore bounded continuity regression expectations
- [#171491](https://github.com/openclaw/openclaw/pull/171491) fix(ci): backport settled composer Stop assertion to 2026.10.5
- [#172531](https://github.com/openclaw/openclaw/pull/172531) perf(gateway): remove global async hooks from stall monitoring
- [#172540](https://github.com/openclaw/openclaw/pull/172540) perf(agents): release prepared fork payloads after capture
- [#172505](https://github.com/openclaw/openclaw/pull/172505) fix(workboard): reconcile archived sessions without attempt id collisions
- [#169978](https://github.com/openclaw/openclaw/pull/169978) refactor(qwen): remove retired streaming usage wrapper
- [#172384](https://github.com/openclaw/openclaw/pull/172384) feat: build standalone OpenClaw executables with Bun
- [#168702](https://github.com/openclaw/openclaw/pull/168702) docs: simplify reference and CI guides
- [#172520](https://github.com/openclaw/openclaw/pull/172520) fix(ci): share main failure evidence within PR reports
- [#172504](https://github.com/openclaw/openclaw/pull/172504) fix(workboard): return actionable claim refusals to tool callers
- [#172512](https://github.com/openclaw/openclaw/pull/172512) fix(ci): reduce CodeQL API usage on larger pull requests
- [#172516](https://github.com/openclaw/openclaw/pull/172516) fix(ci): reuse Security Review notice inventories
- [#172438](https://github.com/openclaw/openclaw/pull/172438) fix: keep chat images beside their authored headings
- [#172374](https://github.com/openclaw/openclaw/pull/172374) perf(auth): reuse published personal credentials and prepare session pins
- [#172506](https://github.com/openclaw/openclaw/pull/172506) fix(sessions): release foreground readers during database cleanup
- [#172442](https://github.com/openclaw/openclaw/pull/172442) fix: honor Crabbox lease lifetimes and require 0.77.0
- [#172536](https://github.com/openclaw/openclaw/pull/172536) perf(sqlite): retain scoped write revision views

#### 🐛 New Issues
- [#172395](https://github.com/openclaw/openclaw/issues/172395) Update failure: package-swap (2026.9.9) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬7
- [#171933](https://github.com/openclaw/openclaw/issues/171933) doctor NOCOW repair: refusal on Linux < 4.7 (no RENAME_EXCHANGE, fuser cannot stat) arrives only after a full per-file inventory `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬7
- [#171647](https://github.com/openclaw/openclaw/issues/171647) [Bug]: Visible child completion cannot resume a yielded guest session 💬7
- [#172053](https://github.com/openclaw/openclaw/issues/172053) [Bug]: Gateway startup failure prints only "[openclaw] The CLI command failed." with no Reason — a systemd crash loop is undiagnosable `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬6
- [#172213](https://github.com/openclaw/openclaw/issues/172213) [Bug]: 2026.10.3 on Windows - update rolls back after a SUCCESSFUL package swap (post-activation Doctor cannot read process ancestry) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬5
- [#172091](https://github.com/openclaw/openclaw/issues/172091) [Bug]: A worker SQLite transaction stays open forever behind an unanswered cross-thread admission wait, permanently blocking shared-state WAL checkpoints `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬5
- [#172246](https://github.com/openclaw/openclaw/issues/172246) Update failure: retired-state-format (2026.9.8) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬4
- [#171550](https://github.com/openclaw/openclaw/issues/171550) Update failure: package-swap (2026.9.9) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬4
- [#172241](https://github.com/openclaw/openclaw/issues/172241) [Bug]: Anthropic 400 "role 'system' must follow a 'user' message" after long Control UI pastes (Sonnet 5.5, direct API key) `bug` `bug:behavior` `P1` `impact:session-state` 💬4
- [#172473](https://github.com/openclaw/openclaw/issues/172473) [Bug]: Claude/Codex sidebar reports failures during healthy catalog refresh `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬4
- [#172109](https://github.com/openclaw/openclaw/issues/172109) [Bug]: Doctor refuses session migration when a JSONL has two session headers with the same id `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#172048](https://github.com/openclaw/openclaw/issues/172048) After /compact, webchat renders a stale pre-compact assistant reply stitched into the newest reply (2026.10.2) 💬4
- [#171918](https://github.com/openclaw/openclaw/issues/171918) [Bug]: Safari 27.0.1 intermittently rejects the Control UI entry graph (42 KB synthetic module repro) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `P0` `issue-rating: 🦪 silver shellfish` 💬4
- [#172591](https://github.com/openclaw/openclaw/issues/172591) Update failure: managed-service-preflight (2026.10.2) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#172203](https://github.com/openclaw/openclaw/issues/172203) [Bug]: Workboard completion commits proof/DONE before rejecting a 164-character notification run ID `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#172186](https://github.com/openclaw/openclaw/issues/172186) [Bug]: session-activity-summary: stale churn loop re-summarizes sessions in rapid bursts (~660 utility-model calls/day, no new activity) `bug` `regression` `P2` `clawsweeper:no-new-fix-pr` 💬3
- [#172258](https://github.com/openclaw/openclaw/issues/172258) [Bug]: bundle-mcp: when an MCP server refuses initialize with 401, the reason is redacted and the agent is never told `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬3
- [#172297](https://github.com/openclaw/openclaw/issues/172297) [Bug]: Tool validation errors should include received type/value to help models correct invalid arguments `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#172368](https://github.com/openclaw/openclaw/issues/172368) [Bug]: Windows onboarding aborts with EBUSY in setup-credential staging cleanup (finally doesn't await SQLite closers) `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` `P0` 💬3
- [#172083](https://github.com/openclaw/openclaw/issues/172083) [Bug]: Guest project choices fail to save in New Session 💬3
- [#171797](https://github.com/openclaw/openclaw/issues/171797) [Bug]: openclaw update always fails on macOS pnpm installs: pnpm-isolated-install-preflight spawns pnpm under service PATH (ENOENT)[Bug]: `bug` `no-stale` `bug:behavior` `P1` 💬3
- [#171636](https://github.com/openclaw/openclaw/issues/171636) Update failure: package-swap (2026.10.2) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬3
- [#172576](https://github.com/openclaw/openclaw/issues/172576) Background ChatGPT V2 compaction after settled turns (hide the compaction wait) `enhancement` 💬2
- [#172526](https://github.com/openclaw/openclaw/issues/172526) Gateway: `sessions.list` RPC blocks 6–8s behind active agent runs; parallel UI connections cause 85–90% CPU death spiral + WS handshake timeout storm `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#172547](https://github.com/openclaw/openclaw/issues/172547) [Feature]: Exclude fenced dreaming ranges from memory-search indexing and recall signal `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#172496](https://github.com/openclaw/openclaw/issues/172496) [Bug]: Windows 2026.9.8 → 2026.10.3 managed update abandoned during activation after successful candidate rehearsal `bug` `bug:crash` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬2
- [#171831](https://github.com/openclaw/openclaw/issues/171831) Windows: 2026.10.2 performance regression vs 2026.9.4 (startup 320s vs 55s, event loop blocked 112s per turn, pluginState.register 173s transaction) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#172507](https://github.com/openclaw/openclaw/issues/172507) [Bug]: Gateway 2026.10.3 regression: Control UI disconnects — WS upgrade failures `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#172464](https://github.com/openclaw/openclaw/issues/172464) Reduce local full-suite startup and retained-worker costs 💬2
- [#172260](https://github.com/openclaw/openclaw/issues/172260) exec: node= silently ignored for routing without host="node" — gateway fallback exits 0 with no warning `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#172326](https://github.com/openclaw/openclaw/issues/172326) Release FRV flakes under load (2026.9.33 FRV 38580943081) 💬2
- [#172228](https://github.com/openclaw/openclaw/issues/172228) Document vendor admission for principal-bound Control UI ingress plugins `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#172183](https://github.com/openclaw/openclaw/issues/172183) Recovery authority regression expects stale continuation error text 💬2
- [#172180](https://github.com/openclaw/openclaw/issues/172180) [Bug]: Slack rich-text dates disappear when fallback is omitted `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#172165](https://github.com/openclaw/openclaw/issues/172165) [Bug] Chinese long-window rate-limit messages not recognized — exhausted quota retries 10x instead of failing over directly `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#172098](https://github.com/openclaw/openclaw/issues/172098) [Bug]: Foreign memory-provider CLI/doctor probes bypass SecretRef resolution (Hindsight Invalid API key) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#172100](https://github.com/openclaw/openclaw/issues/172100) Update failure: global-install-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#172104](https://github.com/openclaw/openclaw/issues/172104) [Bug]: macOS x64 2026.10.1 -> 2026.10.3 update fails snapshot cleanup; repair does not converge `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#172063](https://github.com/openclaw/openclaw/issues/172063) Update failure: managed-service-update-handoff (2026.9.8) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#172000](https://github.com/openclaw/openclaw/issues/172000) [Bug]: Unstarted restart recovery becomes terminal on shutdown and never resumes `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#171971](https://github.com/openclaw/openclaw/issues/171971) [Feature]: Let the system agent read gateway health `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#171974](https://github.com/openclaw/openclaw/issues/171974) Update failure: requested (2026.9.9) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#171980](https://github.com/openclaw/openclaw/issues/171980) Update failure: update (2026.10.1) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#171997](https://github.com/openclaw/openclaw/issues/171997) Update failure: package-swap (2026.10.2) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#171955](https://github.com/openclaw/openclaw/issues/171955) `openclaw update` blocked by stale `update-recovery-pending` after a completed update (phase: publication-complete) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` `P0` 💬2
- [#171896](https://github.com/openclaw/openclaw/issues/171896) [Bug]: cron job pinned forever when its scheduled slot request is cancelled at gateway stop (already-requested on every tick after restart) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#171954](https://github.com/openclaw/openclaw/issues/171954) Bug: changing prompt-hook context blocks Codex replies while a background listener runs `no-stale` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` 💬2
- [#171917](https://github.com/openclaw/openclaw/issues/171917) Update failure: gateway-recovery-verification (2026.9.8) `P2` `clawsweeper:needs-info` `impact:crash-loop` `issue-rating: 🦪 silver shellfish` 💬2
- [#171930](https://github.com/openclaw/openclaw/issues/171930) Docker image: doctor's SQLite NOCOW repair is always skipped because bookworm's GNU mv lacks --exchange `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬2
- [#171864](https://github.com/openclaw/openclaw/issues/171864) [Bug]: subagent completion findings unbounded — large settle cohort becomes one oversize prompt (Prompt is too long) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#171569](https://github.com/openclaw/openclaw/issues/171569) Update failure: runtime-verification-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#171830](https://github.com/openclaw/openclaw/issues/171830) Windows: agent DB schema migration hangs forever when an enabled plugin (legacyDefaultEnabled, e.g. codex) is no longer bundled `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#172614](https://github.com/openclaw/openclaw/issues/172614) bundle-mcp: a server that failed to start is answered from its failed catalog on the first turn after its retry is due, so its tools are missing for one more turn (e.g. right after mcp login) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#172675](https://github.com/openclaw/openclaw/issues/172675) [Docs Bug]: BUG OPENCLAW 2026.10.3 `bug` `docs` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#172628](https://github.com/openclaw/openclaw/issues/172628) [Bug]: Fresh 2026.10.3 Gateway start can leave main-agent admission superseded until restart `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#172603](https://github.com/openclaw/openclaw/issues/172603) [Bug]: memory_search rejects `limit` — alias normalizer covers min_score/max_results but not limit `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#172663](https://github.com/openclaw/openclaw/issues/172663) [Bug]: streamed replies that contain a code block re-parse the whole reply on every delta (quadratic Gateway CPU, 422 s for a 31 KB reply) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#172581](https://github.com/openclaw/openclaw/issues/172581) Control UI: move bundled channel detail policies beside their plugins 💬1
- [#172651](https://github.com/openclaw/openclaw/issues/172651) [Bug]: exec completions from announce-delivery cron runs still wake the agent main session after #167113 `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#172658](https://github.com/openclaw/openclaw/issues/172658) Bug: follow-up disappears after Stop during turn preparation 💬1
- [#172648](https://github.com/openclaw/openclaw/issues/172648) Discord voice: other members' VOICE_STATE_UPDATEs are fed to the bot's voice adapter, breaking joins (abort after connectTimeoutMs, bot comes back self-muted) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#172446](https://github.com/openclaw/openclaw/issues/172446) [Bug]: Plugin host cleanup failures during session reset/delete are only logged at verbose level and never reported `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#172643](https://github.com/openclaw/openclaw/issues/172643) [Feature]: Android native Talk should accept the user-selected default SpeechRecognizer (de-Googled / GrapheneOS, e.g. Transcribro) `P2` `impact:auth-provider` `impact:ux-friction` 💬1
- [#172642](https://github.com/openclaw/openclaw/issues/172642) [Bug]: OpenRouter ~anthropic/*-latest model refs get no prompt-cache markers (cacheRead stays 0, ~8× input cost) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#172416](https://github.com/openclaw/openclaw/issues/172416) [Bug]: agents.delete can hang forever when an embedded run does not end after abort `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#172629](https://github.com/openclaw/openclaw/issues/172629) [Bug]: streaming a reply that mentions a tool call in prose blocks the Gateway event loop for seconds (quadratic per-delta trace scrub) `no-stale` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` 💬1
- [#172562](https://github.com/openclaw/openclaw/issues/172562) [Bug]: SIWC OAuth expiry can exceed access JWT exp after delayed response handling `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#172563](https://github.com/openclaw/openclaw/issues/172563) [Bug]: SIWC token_expired skips renewable OAuth recovery and falls back immediately `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#172429](https://github.com/openclaw/openclaw/issues/172429) [Feature]: Make chat Details a clearer session inspector 💬1
- [#172490](https://github.com/openclaw/openclaw/issues/172490) New Session defaults to an unavailable current checkout for sandboxed projects 💬1
- [#172605](https://github.com/openclaw/openclaw/issues/172605) [Bug]: [Bug]: 2026.10.3 Gateway becomes unresponsive during agent runs, recovers afterward; worse with concurrent agents `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#172604](https://github.com/openclaw/openclaw/issues/172604) [Bug]: Plugin group allowances are lost during browser session access 💬1
- [#172430](https://github.com/openclaw/openclaw/issues/172430) Bug: sandboxed web_fetch advertises an unreadable saved response 💬1
- [#172594](https://github.com/openclaw/openclaw/issues/172594) iOS: Cloudflare Access sign-in stays on the first account when adding another Gateway `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#172583](https://github.com/openclaw/openclaw/issues/172583) [Feature]: harness-bridge — orchestrate coding-agent harnesses from your OpenClaw assistant `P3` 💬1
- [#172488](https://github.com/openclaw/openclaw/issues/172488) [Bug]: Streamable HTTP MCP calls silent for >300s are cut by undici's default body timeout, regardless of requestTimeoutMs `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#172355](https://github.com/openclaw/openclaw/issues/172355) [Bug]: Kubernetes recipe Gateway cannot start on images newer than the pinned 2026.7.1-2: SQLite snapshot staging needs a writable ~/.cache (XDG_CACHE_HOME) under readOnlyRootFilesystem `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#172529](https://github.com/openclaw/openclaw/issues/172529) Shared jsdom workers retain resources from completed test modules 💬1
- [#172391](https://github.com/openclaw/openclaw/issues/172391) Update failure: package-backup-retention (2026.10.2) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#172501](https://github.com/openclaw/openclaw/issues/172501) Native audio input for audio-capable models (voice notes bypass STT) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#172483](https://github.com/openclaw/openclaw/issues/172483) [Bug]: Browser panel stays zoomed with an empty band below the page after a viewport resize fails `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#172308](https://github.com/openclaw/openclaw/issues/172308) Enable matching packaged Workboard assets from the Control UI origin 💬1
- [#172475](https://github.com/openclaw/openclaw/issues/172475) [Feature]: add `workboard edit` / `comment` / `proof` CLI verbs (Gateway methods already exist) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#172233](https://github.com/openclaw/openclaw/issues/172233) [Bug]: Discord voice call closure cancels in-flight requests before text fallback can deliver results `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#172434](https://github.com/openclaw/openclaw/issues/172434) [Bug]: session-send recovery swallows fatal configuration-change errors as per-input "delivery admission was unavailable" `bug` `bug:behavior` `clawsweeper:bulk-filed` 💬1
- [#172400](https://github.com/openclaw/openclaw/issues/172400) [Bug]: path set corrupts untouched JSONL numbers and source text `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#172419](https://github.com/openclaw/openclaw/issues/172419) bug: video generate CLI accepts non-positive --duration and silently clamps to 1s `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#172403](https://github.com/openclaw/openclaw/issues/172403) [Bug]: Mobile Talk shows Realtime WebRTC setup failed (401) and repeats the gateway password prompt `P2` `impact:ux-friction` 💬1
- [#172142](https://github.com/openclaw/openclaw/issues/172142) Conditional local skill installation with preserved recovery content `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#172394](https://github.com/openclaw/openclaw/issues/172394) [Bug]: Assistant can assert task success ('watch armed') with no tool call or successful tool result (replay data) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#172259](https://github.com/openclaw/openclaw/issues/172259) [Bug]: Doctor legacy-main scan opens retained agent DBs skipped by schema repair `bug` `bug:behavior` 💬1
- [#172387](https://github.com/openclaw/openclaw/issues/172387) [Bug]: second plain-text tool call after prose leaks raw call text into visible output and never executes (chunk-dependent) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#172375](https://github.com/openclaw/openclaw/issues/172375) path set changes the wrong key for quoted $first/$last paths `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#172236](https://github.com/openclaw/openclaw/issues/172236) [Feature]: Inspect attached automations from session hovercards 💬1
- [#172348](https://github.com/openclaw/openclaw/issues/172348) Update failure: plugin-target-unavailable (2026.9.3) `P2` `impact:ux-friction` 💬1
- [#172340](https://github.com/openclaw/openclaw/issues/172340) [Bug]: streamed citation-style replies re-parse the whole reply per delta (quadratic CPU in the streaming sanitizer) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#172346](https://github.com/openclaw/openclaw/issues/172346) [Bug]: Control UI displays two assistant replies after a successful Talk request `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#172343](https://github.com/openclaw/openclaw/issues/172343) [Feature]: transcripts: make the meeting-notes language configurable (summary-model hard-codes "in the transcript's language") `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#172336](https://github.com/openclaw/openclaw/issues/172336) Sandbox sessions need native structured review without guest reviewer credentials `extensions: autoreview` 💬1
- [#172319](https://github.com/openclaw/openclaw/issues/172319) [Feature]: Supported Claws manual reconciliation/re-consent preserving intentional agent drift `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#172323](https://github.com/openclaw/openclaw/issues/172323) Discord exec-approval tap returns "no longer pending" for an approval created by a separate CLI-run session while it is still pending (2026.10.1) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#172242](https://github.com/openclaw/openclaw/issues/172242) Worktree checksum fixture can corrupt the wrong pack and fail strict counts 💬1
- [#172156](https://github.com/openclaw/openclaw/issues/172156) memory: OpenAI embedding client keeps a stale OAuth bearer after re-login; 401 token_expired until Gateway restart (2026.10.3) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#172130](https://github.com/openclaw/openclaw/issues/172130) Guest readers cannot open attachments on readable messages 💬1
- [#172279](https://github.com/openclaw/openclaw/issues/172279) Codex failed-thread recovery remains blocked while a sibling thread is active `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#172106](https://github.com/openclaw/openclaw/issues/172106) Guest commands can fail while the previous workspace checkpoint pauses the sandbox 💬1
- [#172275](https://github.com/openclaw/openclaw/issues/172275) Android relay Talk aborts the accepted agent consult when Talk fails (for example on audio focus loss) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#172272](https://github.com/openclaw/openclaw/issues/172272) [Bug]: Chrome extension reported as missing when macOS blocks Chrome profile reads `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#172263](https://github.com/openclaw/openclaw/issues/172263) [Feature]: Report MCP App sandbox timeout back to the agent `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#171700](https://github.com/openclaw/openclaw/issues/171700) After #171371: on an 810-agent fleet the Gateway main thread is still mostly busy; the 256-entry agent-dir cache misses on every walk, and each miss rescans every directory observer `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#172251](https://github.com/openclaw/openclaw/issues/172251) [Bug]: Microsoft Edge TTS fails with HTTP 403 using node-edge-tts@1.2.10; fixed in 1.2.11 `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#172230](https://github.com/openclaw/openclaw/issues/172230) [Bug]: z.ai quota reports drop numeric reset times and weekly periods `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#172227](https://github.com/openclaw/openclaw/issues/172227) Session migration: supported reconciliation for historical archive receipts pointing to different paths (2026.10.3) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#172229](https://github.com/openclaw/openclaw/issues/172229) Support external challenge proof for Gateway-origin Control UI device pairing `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#172224](https://github.com/openclaw/openclaw/issues/172224) [Bug]: Slow cold boot (~4.5 min) on large deployments: filesystem metadata storm from per-operation fs-safe admission + event-loop-blocking spawnSync `P2` `impact:other` 💬1
- [#171837](https://github.com/openclaw/openclaw/issues/171837) Inbound message is silently lost when the session lane task fails after ingress is marked completed `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬1
- [#172225](https://github.com/openclaw/openclaw/issues/172225) [Feature]: Keep dreaming phase reports out of memory_search results (or rank them below notes) `P2` `impact:session-state` 💬1
- [#172222](https://github.com/openclaw/openclaw/issues/172222) [Bug]: Doctor's missing-key memory warning does not say that memory sync has stopped `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#172218](https://github.com/openclaw/openclaw/issues/172218) android: WearRealtimeChannelRegistryTest uses a real 1s withTimeout and flakes under load 💬1
- [#172217](https://github.com/openclaw/openclaw/issues/172217) ios-release-e2e: setup-code does not retry a handshake close after a post-boot host stall 💬1
- [#172211](https://github.com/openclaw/openclaw/issues/172211) Skills with os: macos appear ready but are omitted from agent prompts `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#172209](https://github.com/openclaw/openclaw/issues/172209) [Bug]: Slack reply under a bot-started thread that @mentions another user is reply-required despite silentReply.group: allow → claude-cli rejects NO_REPLY as empty response `P2` `impact:ux-friction` 💬1
- [#172206](https://github.com/openclaw/openclaw/issues/172206) Slack status misreports user identities and mixed transport credentials `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#172204](https://github.com/openclaw/openclaw/issues/172204) Update failure: global-install-foreign-destination (2026.10.2) `P2` `impact:ux-friction` 💬1
- [#172200](https://github.com/openclaw/openclaw/issues/172200) [Bug]: OpenAI Admin usage double-counts audio and omits cache writes `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#172198](https://github.com/openclaw/openclaw/issues/172198) Plugin approvals can't be raised in subagent-announce or resumed turns ("missing scope: operator.approvals") `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#172188](https://github.com/openclaw/openclaw/issues/172188) [Bug]: Discord known mentions are not resolved before sentence-ending periods `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#172174](https://github.com/openclaw/openclaw/issues/172174) Automations action bar floats above the bottom edge of the form `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#172170](https://github.com/openclaw/openclaw/issues/172170) [Feature]: Reset sidebar width by double-clicking the divider `no-stale` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` 💬1
- [#172157](https://github.com/openclaw/openclaw/issues/172157) [Bug]: Split browser Talk cancels the agent's answer when it takes longer than two minutes `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#172162](https://github.com/openclaw/openclaw/issues/172162) [Bug]: M4V attachments skip codec-aware playback and conversion `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#172161](https://github.com/openclaw/openclaw/issues/172161) [Bug]: path find fails on a JSON mapping with a literal wildcard key `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#172154](https://github.com/openclaw/openclaw/issues/172154) [Bug]: Control UI default-model change only writes agents.defaults.model; agent-scoped agents.entries.<agent>.model silently overrides it `P2` `impact:ux-friction` 💬1
- [#172150](https://github.com/openclaw/openclaw/issues/172150) Custom endpoint setup: blank API key produces a broken provider for auth-less servers outside loopback/RFC1918 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#171985](https://github.com/openclaw/openclaw/issues/171985) [Bug]: A2A queued followup sends host notices (status, run-failure) to the peer as messages → agent↔agent ack loop `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#172123](https://github.com/openclaw/openclaw/issues/172123) path set discards unrelated Markdown frontmatter during body edits `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#172118](https://github.com/openclaw/openclaw/issues/172118) [Bug]: WAL maintenance warns on expected single-pass checkpoint contention `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#172119](https://github.com/openclaw/openclaw/issues/172119) [Bug]: background subsystem logs overwrite the remote TUI screen `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#171913](https://github.com/openclaw/openclaw/issues/171913) [Bug]: isolated cron run rows copy the base usageFamilySessionIds (O(n²) agent DB) → cron maintenance worker ERR_WORKER_OUT_OF_MEMORY every minute `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:session-state` 💬1
- [#172093](https://github.com/openclaw/openclaw/issues/172093) feat(memory): add FTS5 trigram fallback and CamelCase/snake_case sub-tokenization for code identifier search `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#172097](https://github.com/openclaw/openclaw/issues/172097) Update failure: plugin-target-unavailable (2026.9.4) `P2` `impact:ux-friction` 💬1
- [#172096](https://github.com/openclaw/openclaw/issues/172096) feat(doctor): add interactive one-key autofix and guided local/API model fallback in openclaw onboard `P3` `impact:ux-friction` 💬1
- [#172090](https://github.com/openclaw/openclaw/issues/172090) feat(security): add lightweight native OS process sandboxing (macOS Seatbelt and Linux Landlock/Bubblewrap) for local exec `security` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#172094](https://github.com/openclaw/openclaw/issues/172094) feat(skills): support dynamic Top-K per-turn skill routing and lazy reference loading for large skill catalogs `P3` 💬1
- [#172095](https://github.com/openclaw/openclaw/issues/172095) perf(macos): debounce Accessibility tree traversal and bound AX recursion depth in ScreenRecordService and MenuContext 💬1
- [#172092](https://github.com/openclaw/openclaw/issues/172092) perf(memory): evaluate vector distance inside SQLite via sqlite-vec instead of loading all embeddings into V8 heap 💬1
- [#172085](https://github.com/openclaw/openclaw/issues/172085) [Bug]: active-memory lane-1 quick recall times out on almost every turn on a 2-core host (1500 ms preflight is shorter than the memory search worker's ~5 s cold start) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#172055](https://github.com/openclaw/openclaw/issues/172055) Hardcoded 256 cap with no admin path to clear it; Disposed cached MCP runtimes. Active agents use new MCP config on their next runtime build. does not reset the cap `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#172045](https://github.com/openclaw/openclaw/issues/172045) [Feature]: Allow named shared API-key profiles through the Gateway API `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#172031](https://github.com/openclaw/openclaw/issues/172031) [Bug]: Late modelPromptProjection invalidates custom context-engine admission after before_agent_run `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#172027](https://github.com/openclaw/openclaw/issues/172027) Feature: sessions_spawn child as sessions.fork branch from a chosen start point `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#172030](https://github.com/openclaw/openclaw/issues/172030) Image-only first message in a new dashboard session makes every later turn fail with 400 (messages.0) `P1` `impact:auth-provider` 💬1
- [#172018](https://github.com/openclaw/openclaw/issues/172018) [Bug]: inline chat A2UI (show_widget kind a2ui) button clicks never reach the conversation `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:message-loss` 💬1
- [#171854](https://github.com/openclaw/openclaw/issues/171854) [Bug]: Codex chats without a per-model context config give the context engine no budget, so it compacts at 128k and replaces the thread `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#172007](https://github.com/openclaw/openclaw/issues/172007) [Bug]: Image preview drifts offscreen during trackpad pinch zoom `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#171782](https://github.com/openclaw/openclaw/issues/171782) Bug: new managed children lose permitted GitHub publication from a non-repository parent 💬1
- [#171994](https://github.com/openclaw/openclaw/issues/171994) Consolidate duplicated test setup and internal code while preserving contracts 💬1
- [#171986](https://github.com/openclaw/openclaw/issues/171986) [Bug]: backup creation blocks when a regular source becomes a FIFO before open `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#171975](https://github.com/openclaw/openclaw/issues/171975) [Bug]: iOS parallel tool calls show no result after their outputs arrive `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#171959](https://github.com/openclaw/openclaw/issues/171959) [Bug]: Git backup restore leaks its private staging directory when the SQLite open fails `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#171958](https://github.com/openclaw/openclaw/issues/171958) [Bug]: ACP startup identity reconcile abandons the scan on one list failure and the failed count is dropped by the checked===0 early return `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#171966](https://github.com/openclaw/openclaw/issues/171966) [Feature Request] iOS HealthKit: opt-in granular read permissions, historical data, and personal-agent access `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#171956](https://github.com/openclaw/openclaw/issues/171956) [Bug]: Public Control UI session reads queued behind leaked read slots have no deadline and never resolve `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#171673](https://github.com/openclaw/openclaw/issues/171673) [Bug]: DashScope/Qwen "Range of input length should be [1, N]" overflow is classified as format and skips compaction recovery `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#171754](https://github.com/openclaw/openclaw/issues/171754) Telegram ingress retries an archived root-DM native command instead of settling its lifecycle rejection `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#171792](https://github.com/openclaw/openclaw/issues/171792) [Bug]: Guests cannot select managed worktrees for registered projects 💬1
- [#171836](https://github.com/openclaw/openclaw/issues/171836) [Bug]: Per-turn tool-surface variation (permission-scoped tool descriptions/schemas) silently invalidates the local prefix cache on every flip `P2` `impact:other` 💬1
- [#171670](https://github.com/openclaw/openclaw/issues/171670) daemon: gateway restart truncates multi-line LaunchAgent env values to their first line `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#171793](https://github.com/openclaw/openclaw/issues/171793) [Bug] 2026.10.3 (Windows): shared-state DB WAL grows unbounded - cached read connection leaks a read mark pinned at an early frame; PASSIVE checkpoint can't advance (blockingOwner unknown, operation label rotates) `P2` `impact:other` 💬1
- [#171672](https://github.com/openclaw/openclaw/issues/171672) hooks: workspace hook can borrow a bundled/plugin/managed hookKey and load without its own opt-in `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#171669](https://github.com/openclaw/openclaw/issues/171669) openshell: mirror sync copies and deletes nested .git despite documented .git exclusion `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#172688](https://github.com/openclaw/openclaw/issues/172688) memory-core: prune short-term recall entries atomically when source files move or archive
- [#172465](https://github.com/openclaw/openclaw/issues/172465) Update failure: package-swap (2026.10.3)
- [#171853](https://github.com/openclaw/openclaw/issues/171853) Qwen: custom providers on DashScope endpoints miss cold activation and thinking-payload translation

#### 🔒 Closed Issues
- [#170331](https://github.com/openclaw/openclaw/issues/170331) [Bug]: beta.2 update candidate config read exits 1 and leaves the systemd unit unchanged
- [#170332](https://github.com/openclaw/openclaw/issues/170332) [Bug]: beta update continues after the live state database changes during original-state capture
- [#172395](https://github.com/openclaw/openclaw/issues/172395) Update failure: package-swap (2026.9.9)
- [#171933](https://github.com/openclaw/openclaw/issues/171933) doctor NOCOW repair: refusal on Linux < 4.7 (no RENAME_EXCHANGE, fuser cannot stat) arrives only after a full per-file inventory
- [#171647](https://github.com/openclaw/openclaw/issues/171647) [Bug]: Visible child completion cannot resume a yielded guest session
- [#172053](https://github.com/openclaw/openclaw/issues/172053) [Bug]: Gateway startup failure prints only "[openclaw] The CLI command failed." with no Reason — a systemd crash loop is undiagnosable
- [#164960](https://github.com/openclaw/openclaw/issues/164960) [Bug]: claude-cli: resuming a paused subagent (sessions_yield waitFor:"message" → parent sessions_send) starts a fresh CLI session without history, child loses its task
- [#172213](https://github.com/openclaw/openclaw/issues/172213) [Bug]: 2026.10.3 on Windows - update rolls back after a SUCCESSFUL package swap (post-activation Doctor cannot read process ancestry)
- [#170866](https://github.com/openclaw/openclaw/issues/170866) [Bug]: Telegram requester continuation has no final reply after model-runtime replacement refusal
- [#120968](https://github.com/openclaw/openclaw/issues/120968) [Bug]: memory-core mandatory recall can duplicate active-memory context on person queries
- [#168553](https://github.com/openclaw/openclaw/issues/168553) [Bug]: macOS Companion Codex setup-inference probe fails with Gateway caller authority no longer active (2026.9.9)
- [#172246](https://github.com/openclaw/openclaw/issues/172246) Update failure: retired-state-format (2026.9.8)
- [#172241](https://github.com/openclaw/openclaw/issues/172241) [Bug]: Anthropic 400 "role 'system' must follow a 'user' message" after long Control UI pastes (Sonnet 5.5, direct API key)
- [#145589](https://github.com/openclaw/openclaw/issues/145589) fs-safe: O_NONBLOCK read truncates files >65512 B on WSL2 9p mounts, causing false "Memory source changed while indexing" that aborts every memory reindex
- [#157326](https://github.com/openclaw/openclaw/issues/157326) Update failure: global-install-failed (2026.9.4)
- [#172109](https://github.com/openclaw/openclaw/issues/172109) [Bug]: Doctor refuses session migration when a JSONL has two session headers with the same id
- [#172048](https://github.com/openclaw/openclaw/issues/172048) After /compact, webchat renders a stale pre-compact assistant reply stitched into the newest reply (2026.10.2)
- [#122583](https://github.com/openclaw/openclaw/issues/122583) [Bug]: Reasoning-only responses via OpenRouter discarded with 'No text output returned' (kimi-k2.6, minimax-m2.5)
- [#171191](https://github.com/openclaw/openclaw/issues/171191) [Bug]: Non-interactive `openclaw update` auto-launches an autonomous AI repair agent with no opt-out (consent flow only exists in interactive mode)
- [#128859](https://github.com/openclaw/openclaw/issues/128859) [Bug]: Code Mode `wait` dead-ends when given a backgrounded shell sessionId
- [#169929](https://github.com/openclaw/openclaw/issues/169929) [Bug]: SVG document sent on Telegram fails the whole turn on every model
- [#119490](https://github.com/openclaw/openclaw/issues/119490) channels: a channel account ingress queue stops draining permanently once its pending backlog exceeds 32,763 events on Node 22 and 24
- [#158675](https://github.com/openclaw/openclaw/issues/158675) [Bug]: Code Mode rejects require()/module access with no guidance on replacement tools, causing repeated agent failures
- [#172591](https://github.com/openclaw/openclaw/issues/172591) Update failure: managed-service-preflight (2026.10.2)
- [#113130](https://github.com/openclaw/openclaw/issues/113130) Moonshot/Kimi rejects tool schemas with parent-level anyOf (openai-completions path does not normalize like Google/Responses)
- [#168783](https://github.com/openclaw/openclaw/issues/168783) [Bug]: memory-wiki: `openclaw wiki compile` compiles the vault twice when its source-sync step compiles, and reports the second compile's result
- [#172203](https://github.com/openclaw/openclaw/issues/172203) [Bug]: Workboard completion commits proof/DONE before rejecting a 164-character notification run ID
- [#167038](https://github.com/openclaw/openclaw/issues/167038) CI: commands owner exceeds the qualification deadline on Node 24
- [#172186](https://github.com/openclaw/openclaw/issues/172186) [Bug]: session-activity-summary: stale churn loop re-summarizes sessions in rapid bursts (~660 utility-model calls/day, no new activity)
- [#172258](https://github.com/openclaw/openclaw/issues/172258) [Bug]: bundle-mcp: when an MCP server refuses initialize with 401, the reason is redacted and the agent is never told
- [#127119](https://github.com/openclaw/openclaw/issues/127119) [Bug]: Model Studio (Qwen/DashScope) requests send max_completion_tokens, but the vendor documents max_tokens
- [#128984](https://github.com/openclaw/openclaw/issues/128984) Docs feedback: /platforms/macos
- [#172083](https://github.com/openclaw/openclaw/issues/172083) [Bug]: Guest project choices fail to save in New Session
- [#160278](https://github.com/openclaw/openclaw/issues/160278) openclaw status crashes with DataCloneError (exitCode 1) on Windows / Node 24 — human-readable render path only
- [#166497](https://github.com/openclaw/openclaw/issues/166497) repeated_model_requests_without_progress aborts a streaming fallback model: retry/fallback attempts share one no-progress window
- [#171797](https://github.com/openclaw/openclaw/issues/171797) [Bug]: openclaw update always fails on macOS pnpm installs: pnpm-isolated-install-preflight spawns pnpm under service PATH (ENOENT)[Bug]:
- [#157469](https://github.com/openclaw/openclaw/issues/157469) [Bug]: xiaomi/mimo-v2.6-pro tool calls fail 100% under code mode - "Provider returned an incomplete or malformed tool call"
- [#162085](https://github.com/openclaw/openclaw/issues/162085) State DB read admission stays sealed forever after a failed resource drainage (STATE_DATABASE_READ_ADMISSION_INVALIDATED until restart)
- [#152604](https://github.com/openclaw/openclaw/issues/152604) config: recovery overwrites live bytes when the forensic copy cannot be written
- [#141547](https://github.com/openclaw/openclaw/issues/141547) [Bug] xAI plugin catalog missing grok-imagine-image-2.0; video 1.5 T2V skipped; unknown image slugs silently fall back to 1.0
- [#164328](https://github.com/openclaw/openclaw/issues/164328) [Bug]: thinking=off sends thinking disabled to always-reasoning GLM-5.x (400); zai/-prefixed ids defeat the plugin's reasoning-effort resolver
- [#172464](https://github.com/openclaw/openclaw/issues/172464) Reduce local full-suite startup and retained-worker costs
- [#172260](https://github.com/openclaw/openclaw/issues/172260) exec: node= silently ignored for routing without host="node" — gateway fallback exits 0 with no warning
- [#168174](https://github.com/openclaw/openclaw/issues/168174) OpenCode Zen Kimi K3: Thinking Off still reasons and Low/High are missing
- [#153145](https://github.com/openclaw/openclaw/issues/153145) [Bug]: macOS Talk Mode abandons local-model responses after 30 seconds
- [#172183](https://github.com/openclaw/openclaw/issues/172183) Recovery authority regression expects stale continuation error text
- [#172098](https://github.com/openclaw/openclaw/issues/172098) [Bug]: Foreign memory-provider CLI/doctor probes bypass SecretRef resolution (Hindsight Invalid API key)
- [#172100](https://github.com/openclaw/openclaw/issues/172100) Update failure: global-install-failed (2026.9.4)
- [#172063](https://github.com/openclaw/openclaw/issues/172063) Update failure: managed-service-update-handoff (2026.9.8)
- [#172000](https://github.com/openclaw/openclaw/issues/172000) [Bug]: Unstarted restart recovery becomes terminal on shutdown and never resumes
- [#171035](https://github.com/openclaw/openclaw/issues/171035) [Bug]: GitHub profile cleanup aborts the whole sweep on a single non-ENOENT directory read error
- [#160284](https://github.com/openclaw/openclaw/issues/160284) Windows: fail spawns with a clear error inside an AppContainer when libuv is below 1.53, instead of spinning
- [#160287](https://github.com/openclaw/openclaw/issues/160287) Windows: private folders omit the process's own AppContainer SID, so a contained process cannot reopen them (doctor: "SQLite errcode=14")
- [#171974](https://github.com/openclaw/openclaw/issues/171974) Update failure: requested (2026.9.9)
- [#171955](https://github.com/openclaw/openclaw/issues/171955) `openclaw update` blocked by stale `update-recovery-pending` after a completed update (phase: publication-complete)
- [#168969](https://github.com/openclaw/openclaw/issues/168969) [Bug]: Subagent announce delivery classifies the same writer-claim-rebound error as both retryable and permanent
- [#171896](https://github.com/openclaw/openclaw/issues/171896) [Bug]: cron job pinned forever when its scheduled slot request is cancelled at gateway stop (already-requested on every tick after restart)
- [#171917](https://github.com/openclaw/openclaw/issues/171917) Update failure: gateway-recovery-verification (2026.9.8)
- [#168676](https://github.com/openclaw/openclaw/issues/168676) [Bug]: claude-cli still delivers a Stop-hook-rejected draft when a tool call precedes the rewrite
- [#168585](https://github.com/openclaw/openclaw/issues/168585) main (23cf1bc3): at startup every agent past the 128th fails background preparation with "worker task capacity reached" and stays degraded (645 of 773 agents)
- [#171569](https://github.com/openclaw/openclaw/issues/171569) Update failure: runtime-verification-failed (2026.9.4)
- [#171830](https://github.com/openclaw/openclaw/issues/171830) Windows: agent DB schema migration hangs forever when an enabled plugin (legacyDefaultEnabled, e.g. codex) is no longer bundled
- [#171513](https://github.com/openclaw/openclaw/issues/171513) [Bug]: Gateway lock has no holder-health check: frozen-but-alive owner (S0 standby mid-startup) blocks all starts until manual lock deletion — pid-liveness alone cannot fix this (#160061 escalation)
- [#169389](https://github.com/openclaw/openclaw/issues/169389) A new agent's first cron runs can fail "Session metadata unavailable (schema-missing)" when they start together
- [#171376](https://github.com/openclaw/openclaw/issues/171376) [Bug]: Control UI 2026.10.1 → 2026.10.3 fails post-update settlement on offline maintenance, leaving macOS Gateway stopped
- [#149867](https://github.com/openclaw/openclaw/issues/149867) contextInjection: "continuation-skip" never skips on a completed workspace (completion marker can never be written)
- [#171098](https://github.com/openclaw/openclaw/issues/171098) [Bug]: Non-previewable chat attachments (e.g. .zip) have no visible download action; side panel fallback hides it too
- [#171395](https://github.com/openclaw/openclaw/issues/171395) [Bug]: ACP-only agent ids (acp.allowedAgents) stay degraded after a slow startup: "secrets preparation has not published its auth store", cron maintenance fails every minute
- [#144149](https://github.com/openclaw/openclaw/issues/144149) image_generate, video_generate and music_generate ignore tools.fs.workspaceOnly when loading local media references
- [#164641](https://github.com/openclaw/openclaw/issues/164641) [Bug]: Code Mode browser snapshot/text return only stats, no page body
- [#170291](https://github.com/openclaw/openclaw/issues/170291) [Bug]: publication observations omit downstream Linux builder admission
- [#172614](https://github.com/openclaw/openclaw/issues/172614) bundle-mcp: a server that failed to start is answered from its failed catalog on the first turn after its retry is due, so its tools are missing for one more turn (e.g. right after mcp login)
- [#172628](https://github.com/openclaw/openclaw/issues/172628) [Bug]: Fresh 2026.10.3 Gateway start can leave main-agent admission superseded until restart
- [#172603](https://github.com/openclaw/openclaw/issues/172603) [Bug]: memory_search rejects `limit` — alias normalizer covers min_score/max_results but not limit
- [#172581](https://github.com/openclaw/openclaw/issues/172581) Control UI: move bundled channel detail policies beside their plugins
- [#172446](https://github.com/openclaw/openclaw/issues/172446) [Bug]: Plugin host cleanup failures during session reset/delete are only logged at verbose level and never reported
- [#172643](https://github.com/openclaw/openclaw/issues/172643) [Feature]: Android native Talk should accept the user-selected default SpeechRecognizer (de-Googled / GrapheneOS, e.g. Transcribro)
- [#172416](https://github.com/openclaw/openclaw/issues/172416) [Bug]: agents.delete can hang forever when an embedded run does not end after abort
- [#172562](https://github.com/openclaw/openclaw/issues/172562) [Bug]: SIWC OAuth expiry can exceed access JWT exp after delayed response handling
- [#172563](https://github.com/openclaw/openclaw/issues/172563) [Bug]: SIWC token_expired skips renewable OAuth recovery and falls back immediately
- [#172429](https://github.com/openclaw/openclaw/issues/172429) [Feature]: Make chat Details a clearer session inspector
- [#172490](https://github.com/openclaw/openclaw/issues/172490) New Session defaults to an unavailable current checkout for sandboxed projects
- [#171068](https://github.com/openclaw/openclaw/issues/171068) [Bug]: Zhipu (GLM) via openai-completions: session auto-title call rejected (thinking off -> 400 err 1210), failure silently swallowed, new sessions left unnamed
- [#172430](https://github.com/openclaw/openclaw/issues/172430) Bug: sandboxed web_fetch advertises an unreadable saved response
- [#172583](https://github.com/openclaw/openclaw/issues/172583) [Feature]: harness-bridge — orchestrate coding-agent harnesses from your OpenClaw assistant
- [#172488](https://github.com/openclaw/openclaw/issues/172488) [Bug]: Streamable HTTP MCP calls silent for >300s are cut by undici's default body timeout, regardless of requestTimeoutMs
- [#172355](https://github.com/openclaw/openclaw/issues/172355) [Bug]: Kubernetes recipe Gateway cannot start on images newer than the pinned 2026.7.1-2: SQLite snapshot staging needs a writable ~/.cache (XDG_CACHE_HOME) under readOnlyRootFilesystem
- [#172529](https://github.com/openclaw/openclaw/issues/172529) Shared jsdom workers retain resources from completed test modules
- [#172391](https://github.com/openclaw/openclaw/issues/172391) Update failure: package-backup-retention (2026.10.2)
- [#171369](https://github.com/openclaw/openclaw/issues/171369) [Bug]: active-memory recall-intent patterns missing French (FR) — default `mode: "escalate"` never fires for French users
- [#172308](https://github.com/openclaw/openclaw/issues/172308) Enable matching packaged Workboard assets from the Control UI origin
- [#172233](https://github.com/openclaw/openclaw/issues/172233) [Bug]: Discord voice call closure cancels in-flight requests before text fallback can deliver results
- [#172434](https://github.com/openclaw/openclaw/issues/172434) [Bug]: session-send recovery swallows fatal configuration-change errors as per-input "delivery admission was unavailable"
- [#172403](https://github.com/openclaw/openclaw/issues/172403) [Bug]: Mobile Talk shows Realtime WebRTC setup failed (401) and repeats the gateway password prompt
- [#172259](https://github.com/openclaw/openclaw/issues/172259) [Bug]: Doctor legacy-main scan opens retained agent DBs skipped by schema repair
- [#169377](https://github.com/openclaw/openclaw/issues/169377) [Bug]: github_publish fails with "publication requester is no longer authorized" when the Control UI profile attaches after connect
- [#169999](https://github.com/openclaw/openclaw/issues/169999) [Bug]: Repair worker exits on error without emitting a stopped event or result message
- [#172236](https://github.com/openclaw/openclaw/issues/172236) [Feature]: Inspect attached automations from session hovercards
- [#172348](https://github.com/openclaw/openclaw/issues/172348) Update failure: plugin-target-unavailable (2026.9.3)
- [#172242](https://github.com/openclaw/openclaw/issues/172242) Worktree checksum fixture can corrupt the wrong pack and fail strict counts
- [#172156](https://github.com/openclaw/openclaw/issues/172156) memory: OpenAI embedding client keeps a stale OAuth bearer after re-login; 401 token_expired until Gateway restart (2026.10.3)
- [#172130](https://github.com/openclaw/openclaw/issues/172130) Guest readers cannot open attachments on readable messages
- [#172106](https://github.com/openclaw/openclaw/issues/172106) Guest commands can fail while the previous workspace checkpoint pauses the sandbox
- [#171700](https://github.com/openclaw/openclaw/issues/171700) After #171371: on an 810-agent fleet the Gateway main thread is still mostly busy; the 256-entry agent-dir cache misses on every walk, and each miss rescans every directory observer
- [#172224](https://github.com/openclaw/openclaw/issues/172224) [Bug]: Slow cold boot (~4.5 min) on large deployments: filesystem metadata storm from per-operation fs-safe admission + event-loop-blocking spawnSync
- [#171837](https://github.com/openclaw/openclaw/issues/171837) Inbound message is silently lost when the session lane task fails after ingress is marked completed
- [#172225](https://github.com/openclaw/openclaw/issues/172225) [Feature]: Keep dreaming phase reports out of memory_search results (or rank them below notes)
- [#166296](https://github.com/openclaw/openclaw/issues/166296) [Feature]: Add Mistral Large 4 to the Mistral provider catalog
- [#172209](https://github.com/openclaw/openclaw/issues/172209) [Bug]: Slack reply under a bot-started thread that @mentions another user is reply-required despite silentReply.group: allow → claude-cli rejects NO_REPLY as empty response
- [#172204](https://github.com/openclaw/openclaw/issues/172204) Update failure: global-install-foreign-destination (2026.10.2)
- [#172154](https://github.com/openclaw/openclaw/issues/172154) [Bug]: Control UI default-model change only writes agents.defaults.model; agent-scoped agents.entries.<agent>.model silently overrides it
- [#171985](https://github.com/openclaw/openclaw/issues/171985) [Bug]: A2A queued followup sends host notices (status, run-failure) to the peer as messages → agent↔agent ack loop
- [#169917](https://github.com/openclaw/openclaw/issues/169917) MS Teams: pasted (inline) images in DMs always time out: the 10 s inbound media budget is shorter than Bot Framework attachment downloads
- [#171173](https://github.com/openclaw/openclaw/issues/171173) chat.send: after a gateway restart, resending the same idempotency key with edited plain-text input is admitted instead of returning `chat-request-conflict`
- [#171913](https://github.com/openclaw/openclaw/issues/171913) [Bug]: isolated cron run rows copy the base usageFamilySessionIds (O(n²) agent DB) → cron maintenance worker ERR_WORKER_OUT_OF_MEMORY every minute
- [#172097](https://github.com/openclaw/openclaw/issues/172097) Update failure: plugin-target-unavailable (2026.9.4)
- [#171512](https://github.com/openclaw/openclaw/issues/171512) Silent audio is reported as a failed transcription ("response missing text") instead of an empty transcript
- [#172096](https://github.com/openclaw/openclaw/issues/172096) feat(doctor): add interactive one-key autofix and guided local/API model fallback in openclaw onboard
- [#172094](https://github.com/openclaw/openclaw/issues/172094) feat(skills): support dynamic Top-K per-turn skill routing and lazy reference loading for large skill catalogs
- [#172095](https://github.com/openclaw/openclaw/issues/172095) perf(macos): debounce Accessibility tree traversal and bound AX recursion depth in ScreenRecordService and MenuContext
- [#172092](https://github.com/openclaw/openclaw/issues/172092) perf(memory): evaluate vector distance inside SQLite via sqlite-vec instead of loading all embeddings into V8 heap
- [#170881](https://github.com/openclaw/openclaw/issues/170881) [Bug]: Agent-initiated plugin reload through CLI/RPC waits on its own turn
- [#172030](https://github.com/openclaw/openclaw/issues/172030) Image-only first message in a new dashboard session makes every later turn fail with 400 (messages.0)
- [#169353](https://github.com/openclaw/openclaw/issues/169353) [Bug]: cua-computer retains expired trusted sessions after 5 minutes idle (DriverError.Tool)
- [#171782](https://github.com/openclaw/openclaw/issues/171782) Bug: new managed children lose permitted GitHub publication from a non-repository parent
- [#128834](https://github.com/openclaw/openclaw/issues/128834) [Docs Bug]: Turkish docs navigation mixes English labels and loses Turkish diacritics
- [#28965](https://github.com/openclaw/openclaw/issues/28965) [Proposal] Simplify Model Configuration: Single-Source Reconcile + Session Override Reset
- [#166290](https://github.com/openclaw/openclaw/issues/166290) refactor(gateway): remove workspace manifest assertion debt
- [#169072](https://github.com/openclaw/openclaw/issues/169072) [Bug]: kimi web_search still uses legacy $web_search builtin — Moonshot deprecates it 2026-10-20; migrate to /v1/tools/search
- [#171416](https://github.com/openclaw/openclaw/issues/171416) [Bug]: Telegram streaming re-sanitizes the whole reply on every model delta once a preview is visible
- [#171673](https://github.com/openclaw/openclaw/issues/171673) [Bug]: DashScope/Qwen "Range of input length should be [1, N]" overflow is classified as format and skips compaction recovery
- [#169205](https://github.com/openclaw/openclaw/issues/169205) [Bug]: Sessions created with a cwd outside the agent workspace fail model resolution for plugin-discovered providers (zai, opencode-go) - "This model was not found", no fallback on user overrides
- [#171367](https://github.com/openclaw/openclaw/issues/171367) Telegram hot channel restart fails on a disabled account SecretRef and escalates to a full gateway restart
- [#171754](https://github.com/openclaw/openclaw/issues/171754) Telegram ingress retries an archived root-DM native command instead of settling its lifecycle rejection
- [#171792](https://github.com/openclaw/openclaw/issues/171792) [Bug]: Guests cannot select managed worktrees for registered projects
- [#171469](https://github.com/openclaw/openclaw/issues/171469) mcp doctor flags env-backed ${VAR} headers as literal sensitive values (checks the substituted config)
- [#170921](https://github.com/openclaw/openclaw/issues/170921) Clarify VISION.md deployment and contribution direction
- [#171836](https://github.com/openclaw/openclaw/issues/171836) [Bug]: Per-turn tool-surface variation (permission-scoped tool descriptions/schemas) silently invalidates the local prefix cache on every flip
- [#171670](https://github.com/openclaw/openclaw/issues/171670) daemon: gateway restart truncates multi-line LaunchAgent env values to their first line
- [#171793](https://github.com/openclaw/openclaw/issues/171793) [Bug] 2026.10.3 (Windows): shared-state DB WAL grows unbounded - cached read connection leaks a read mark pinned at an early frame; PASSIVE checkpoint can't advance (blockingOwner unknown, operation label rotates)
- [#171360](https://github.com/openclaw/openclaw/issues/171360) [Bug]: Gateway rescans the whole run's streamed text on every assistant delta
- [#169882](https://github.com/openclaw/openclaw/issues/169882) [Bug]: macOS app node system.run uses launchd's bare PATH when OpenClaw.app is opened from Finder/Dock
- [#141340](https://github.com/openclaw/openclaw/issues/141340) [Bug]: Server compaction understates context with sizeable tool definitions
- [#171438](https://github.com/openclaw/openclaw/issues/171438) Telegram outbound sends intermittently fail on dual-stack hosts: --dns-result-order=ipv4first alone is insufficient (add --no-network-family-autoselection)
- [#169161](https://github.com/openclaw/openclaw/issues/169161) [Bug]: plain-text tool call text leaks into visible output when provider chunks split a call marker
- [#171472](https://github.com/openclaw/openclaw/issues/171472) CI flake: provider-local-service shutdown 'retired lease releases late' process tree did not stop (checks-windows-node-test)
- [#171363](https://github.com/openclaw/openclaw/issues/171363) [Bug]: Replies that quote tool-call XML make the Gateway re-parse the whole reply on every streamed delta
- [#171505](https://github.com/openclaw/openclaw/issues/171505) [Bug]: Browser Talk on Gemini 3.8 Live drops spoken user turns from chat history
- [#168134](https://github.com/openclaw/openclaw/issues/168134) matrix: room display name can select another room's tools policy and requireMention
- [#172465](https://github.com/openclaw/openclaw/issues/172465) Update failure: package-swap (2026.10.3)

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 253,806 · **Open issues:** 48,861 · **Last push:** <1h ago

On October 14, 2026, Hermes Agent released version v0.22.1, a patch focused on improvements for the Windows Store and updates to various plugins, including the addition of nemotron super 3.5 default parameters. Following the recent v0.22.0 "Threshold Release," which brought substantial changes and closed over 7,180 issues, this latest release streamlines functionality further. Key merged pull requests include crucial fixes for the CLI and gateway interactions, addressing issues like the restoration of session metadata and routing requests effectively. However, a notable new issue has arisen regarding the hosted room driver that omits member IDs in submissions, preventing group member turns from functioning correctly. This bug, along with others, signals ongoing challenges as the platform evolves.

#### 🚀 New Releases
- [v0.22.1](https://github.com/nousresearch/hermes-agent/releases/tag/v0.22.1) Hermes Agent v0.22.1
- [v0.22.0](https://github.com/nousresearch/hermes-agent/releases/tag/v0.22.0) Hermes Agent v0.22.0 — The Threshold Release

#### ✅ Merged PRs
- [#138668](https://github.com/NousResearch/hermes-agent/pull/138668) fix(cli): answer gateway-owned state from the gateway in classic CLI commands
- [#138667](https://github.com/NousResearch/hermes-agent/pull/138667) fix(gateway): route the Ink and Desktop requests the shared gateway refused
- [#138666](https://github.com/NousResearch/hermes-agent/pull/138666) fix(acp): restore session metadata, commands and usage on GatewayACPAgent
- [#138665](https://github.com/NousResearch/hermes-agent/pull/138665) fix(gateway): resolve local paths against the session's folder, not the daemon's
- [#138664](https://github.com/NousResearch/hermes-agent/pull/138664) fix(security): honour allowlist removals and the plugin gate on the shared gateway

#### 🐛 New Issues
- [#138660](https://github.com/NousResearch/hermes-agent/issues/138660) [Bug]: Hosted room driver omits member_id in submit, so group member turns never run (since eb75627) `type/bug` `comp/gateway` `comp/tui` `P2` 💬3
- [#138644](https://github.com/NousResearch/hermes-agent/issues/138644) pre_tool_call hook: one timeout can fail-closed skip ALL later tool calls for hours (abandoned-worker cap never drains) `type/bug` `comp/cli` `comp/plugins` `P2` 💬3
- [#138404](https://github.com/NousResearch/hermes-agent/issues/138404) Update channel resolution times out on git <2.44: merge-base probe lazy-fetches history in partial clones `type/bug` `comp/cli` `P2` `sweeper:risk-compatibility` 💬3
- [#138220](https://github.com/NousResearch/hermes-agent/issues/138220) v0.22.0 docker image: venv out of sync with uv.lock, breaks plugins requiring PyYAML (e.g. hermes-telemetry) `type/bug` `area/docker` `P2` 💬2
- [#138663](https://github.com/NousResearch/hermes-agent/issues/138663) [Bug]: HUD mode renders the home dashboard widget grid instead of the floating chat composer `type/bug` `comp/plugins` `P3` `comp/desktop` 💬2
- [#138575](https://github.com/NousResearch/hermes-agent/issues/138575) [Feature] /sessions and /resume on messaging platforms are hardcoded to 10 entries — no pagination, no config `type/feature` `comp/gateway` `P3` `area/sessions` 💬1
- [#138649](https://github.com/NousResearch/hermes-agent/issues/138649) [Bug]: Telegram init hangs pre-socket inside gateway (no SYN, healthy loop, standalone 0.3s) — recurring #63309-family variant `type/bug` `comp/gateway` `comp/plugins` `platform/telegram` 💬2
- [#138716](https://github.com/NousResearch/hermes-agent/issues/138716) [Bug]: update failed, must new install `type/bug` `comp/cli` `P2` `sweeper:risk-compatibility` 💬1
- [#138702](https://github.com/NousResearch/hermes-agent/issues/138702) PM workspace: two same-named BUILDABLE plugins across profile homes collide in uv lock (virtual members dedupe, buildable don't) `type/bug` `duplicate` `comp/plugins` `P3` 💬1
- [#138689](https://github.com/NousResearch/hermes-agent/issues/138689) [Bug]: Desktop wipes bundled tools-Python site-packages on every app launch — plugin third-party deps silently lost `type/bug` `P2` `sweeper:risk-compatibility` `comp/desktop` 💬1
- [#138676](https://github.com/NousResearch/hermes-agent/issues/138676) [Bug]: Bot-authored Slack message text is dropped before the model sees it, while the sender label is built correctly `type/bug` `comp/plugins` `platform/slack` `P3` 💬1
- [#138671](https://github.com/NousResearch/hermes-agent/issues/138671) Desktop: hover cards / tooltips anchored at top-left (0,0) instead of the trigger `type/bug` `P3` `comp/desktop` 💬1
- [#138627](https://github.com/NousResearch/hermes-agent/issues/138627) [Bug]: WhatsApp Baileys bridge: 0-byte creds.json corruption causes headless timeout loop + Windows file lock contention on re-pair `type/bug` `comp/gateway` `comp/plugins` `P3` 💬1
- [#138643](https://github.com/NousResearch/hermes-agent/issues/138643) PROBE `invalid` `comp/agent` `P3` 💬1
- [#138606](https://github.com/NousResearch/hermes-agent/issues/138606) [Bug]: OAuth MCP login on Stytch-backed servers (Descript): CIMD client_id fails with connected_app_not_found; DCR fallback verified `type/bug` `comp/tools` `tool/mcp` `area/auth` 💬1
- [#138709](https://github.com/NousResearch/hermes-agent/issues/138709) Signal: Messaging page shows permanent "Restart needed" — SignalAdapter.connect() never calls _mark_connected() `type/bug` `comp/cli` `comp/gateway` `P2`
- [#138695](https://github.com/NousResearch/hermes-agent/issues/138695) [Bug] `delegation.inherit_mcp_toolsets: false` is a silent no-op on the `delegate_task` path — children always inherit every `mcp-*` toolset `type/bug` `tool/delegate` `tool/mcp` `area/config`
- [#138690](https://github.com/NousResearch/hermes-agent/issues/138690) [Bug]: Windows Desktop update hand-off refuses its own custodian's claim (exit 2) after launch preparation drops the delegate line — windows.ps1 never exports HERMES_UPDATE_HANDOFF_PID `type/bug` `comp/cli` `P2` `sweeper:risk-compatibility`
- [#138684](https://github.com/NousResearch/hermes-agent/issues/138684) [Bug]: Hosted room driver forwards an `attachments` kwarg the in-process and peer transports never declared, so a member turn carrying a bound file dies as an ambiguous attempt `type/bug` `comp/gateway` `comp/tui` `P2`
- [#138677](https://github.com/NousResearch/hermes-agent/issues/138677) [Bug]: Repetition guard trips on simple repeated tool-call patterns (back-to-back near-identical greps). `type/bug` `comp/agent` `P2` `needs-repro`
- [#138670](https://github.com/NousResearch/hermes-agent/issues/138670) CLI: stale platform_toolsets entry hard-fails agent init with invalid_params after v0.22.0 update (eb75627f) `type/bug` `comp/agent` `comp/cli` `comp/tools`
- [#138672](https://github.com/NousResearch/hermes-agent/issues/138672) hermes update hangs forever on macOS after "Fetching updates...": pipe deadlock with `git cat-file --batch` (timeout never fires) `type/bug` `comp/cli` `P2` `area/install-update`
- [#138661](https://github.com/NousResearch/hermes-agent/issues/138661) [Bug] Markdown file rendering in telegram 95% broken, issues with `rich` text and MarkdownV2 confusion - missing documentation and config `type/feature` `comp/gateway` `platform/telegram` `area/config`
- [#138659](https://github.com/NousResearch/hermes-agent/issues/138659) [Bug]: macOS desktop update never installs: Squirrel.Mac aborts on the read-only .pyc files bytecode.py bakes `type/bug` `P2` `sweeper:risk-compatibility` `comp/desktop`
- [#138651](https://github.com/NousResearch/hermes-agent/issues/138651) kanban worker stop/recovery nudges hard-code built-in board tools (break plugin-provided board tools) `type/bug` `comp/agent` `comp/tools` `comp/cron`
- [#138653](https://github.com/NousResearch/hermes-agent/issues/138653) Curator selects skills by usage, not outcome: no signal for whether a loaded skill helped `type/feature` `comp/agent` `tool/skills` `P3`
- [#138657](https://github.com/NousResearch/hermes-agent/issues/138657) [Bug]: Desktop: ::preview widget buttons (data-hermes-send / hermes.send) silently do nothing in Bot Mode group chats `type/bug` `P2` `sweeper:risk-session-state` `comp/desktop`
- [#138658](https://github.com/NousResearch/hermes-agent/issues/138658) [Feature][Desktop]: Right-click context menu on images in chat ("Add to chat") + drag-and-drop image to composer or another session in sidebar `type/feature` `P3` `comp/desktop`
- [#138632](https://github.com/NousResearch/hermes-agent/issues/138632) [Bug]: Desktop gateway file download passes a bare filename as save-dialog defaultPath; on macOS the save can land on read-only / (EROFS) `type/bug` `P2` `comp/desktop`
- [#138646](https://github.com/NousResearch/hermes-agent/issues/138646) feat(compression): skip/defer summarization when the new message is unrelated to the thread `type/feature` `comp/agent` `P3` `needs-decision`
- [#138640](https://github.com/NousResearch/hermes-agent/issues/138640) [Bug]: Plugin install treats a build-only package.json as Node dependencies and npm-installs the dev toolchain `type/bug` `comp/cli` `comp/plugins` `P3`
- [#138637](https://github.com/NousResearch/hermes-agent/issues/138637) [Bug]: Indeed MCP sign-in succeeds, then the resource returns invalid_client / Client not allowed — and login reports a registration 403 `type/bug` `comp/tools` `tool/mcp` `area/auth`
- [#138630](https://github.com/NousResearch/hermes-agent/issues/138630) Desktop sidebar: session-less project selection dead-ends (blank single-folder drill-in; auto projects never open) `type/bug` `P3` `sweeper:risk-session-state` `comp/desktop`

#### 🔒 Closed Issues
- [#138643](https://github.com/NousResearch/hermes-agent/issues/138643) PROBE
- [#138632](https://github.com/NousResearch/hermes-agent/issues/138632) [Bug]: Desktop gateway file download passes a bare filename as save-dialog defaultPath; on macOS the save can land on read-only / (EROFS)

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 93,801 · **Open issues:** 8,875 · **Last push:** <1h ago

On October 15, 2026, vLLM had a routine maintenance day with no new releases; however, several important merged pull requests included the removal of legacy components such as the Ray compiled-graph executor and Medusa support, alongside enhancements for ROCm that involved bumping AITER to version 0.1.25 and enabling FP8 query for Triton attention. Noteworthy bug fixes addressed issues such as aligning MoE routing padding with gathered tokens, as well as ensuring that NIXL failed KV transfers are properly reported. A significant new issue has surfaced regarding the NIXL handshake, where crashes can occur with Mamba-only models, reflecting ongoing challenges in ensuring stable performance across configurations.

#### ✅ Merged PRs
- [#61712](https://github.com/vllm-project/vllm/pull/61712) [Core] Remove the legacy Ray compiled-graph executor
- [#60946](https://github.com/vllm-project/vllm/pull/60946) [Bugfix][PCP] Align MoE routing padding with gathered tokens
- [#61701](https://github.com/vllm-project/vllm/pull/61701) [Spec Decode] Remove Medusa and MLP speculator support
- [#61697](https://github.com/vllm-project/vllm/pull/61697) [ROCm] Bump AITER to v0.1.25 and relax the DSv4.1 mono MoE tolerance
- [#59678](https://github.com/vllm-project/vllm/pull/59678) [ROCm][CI] Add AMD jobs for test groups that only exist in tes…
- [#61684](https://github.com/vllm-project/vllm/pull/61684) [CI] Fix /ci run reporting a failed merge on fork PRs
- [#61491](https://github.com/vllm-project/vllm/pull/61491) [Build] Update deep_gemm git tag for locality_domain update
- [#61703](https://github.com/vllm-project/vllm/pull/61703) Revert "[Build] Update deep_gemm git tag for locality_domain update"
- [#61654](https://github.com/vllm-project/vllm/pull/61654) [ROCm][Kimi-K3] Don't read W_UK_T before weight loading in the MLA wrapper
- [#61494](https://github.com/vllm-project/vllm/pull/61494) [Bugfix][Parser] Stream Gemma4 string tool arguments incrementally
- [#59815](https://github.com/vllm-project/vllm/pull/59815) [Quantization] Support compressed-tensors MXFP4 MoE with FP8 activations via Mxfp4MoEMethod
- [#61556](https://github.com/vllm-project/vllm/pull/61556) [Dependency] Update Humming and remove NVFP4 scale workaround
- [#61676](https://github.com/vllm-project/vllm/pull/61676) [Benchmark] Remove the temporary bench forward dummy loader
- [#60296](https://github.com/vllm-project/vllm/pull/60296) [ROCm] Enable fp8 query for Triton attention
- [#61039](https://github.com/vllm-project/vllm/pull/61039) [Perf][DSv4.1] Length-aware candidate block selection in the decode indexer
- [#59290](https://github.com/vllm-project/vllm/pull/59290) [ROCm][BugFix] Don't use AITER rms_norm as an IR OP on gfx90a when AITER always on.
- [#60586](https://github.com/vllm-project/vllm/pull/60586) [Bugfix][Frontend] Apply the JSON schema in Cohere Chat v2 response_format
- [#59511](https://github.com/vllm-project/vllm/pull/59511) [Perf][DFlash] Capture context combine and anchor in the draft CUDA graph
- [#60948](https://github.com/vllm-project/vllm/pull/60948) [Dependency] Upgrade FlashInfer to 0.7.1
- [#61496](https://github.com/vllm-project/vllm/pull/61496) [Bugfix][MRV2] Capture DCP FULL cudagraphs with KV context
- [#61678](https://github.com/vllm-project/vllm/pull/61678) [CI/Build] Fix test_deepseek_v41_mxfp8_scale_loading after #57797
- [#60990](https://github.com/vllm-project/vllm/pull/60990) [Bugfix][ROCm][MiniMax-M3] Reject unbuilt index-head counts in the AITER indexer
- [#61563](https://github.com/vllm-project/vllm/pull/61563) [Bugfix][MRV2][Spec Decode] Honor EAGLE3 single-state draft configuration
- [#61640](https://github.com/vllm-project/vllm/pull/61640) [Perf][MRV2] Skip empty draft-token resets on request admission
- [#59260](https://github.com/vllm-project/vllm/pull/59260) [Spec Decode][MRV2] Warm up top-k/top-p and greedy rejection kernels for speculative decoding
- [#61657](https://github.com/vllm-project/vllm/pull/61657) [Bugfix] Don't crash DeepGEMM MegaMoE warmup when get_bf16_mega_gate_config is missing
- [#60753](https://github.com/vllm-project/vllm/pull/60753) [Perf][ROCm][GLM-5.3-Flash] AITER prefill indexer topk
- [#60907](https://github.com/vllm-project/vllm/pull/60907) [ROCm][Bugfix][MLA] Fix FP8 MLA prefill unpad for interleave-padded heads
- [#60500](https://github.com/vllm-project/vllm/pull/60500) [Perf][Nemotron-Parse] Do image rescale/normalize on the device
- [#56595](https://github.com/vllm-project/vllm/pull/56595) [CI/Build] Use FileStore for DeepEP test rendezvous
- [#58043](https://github.com/vllm-project/vllm/pull/58043) [Frontend] Clean Client Facing 500 Report
- [#61652](https://github.com/vllm-project/vllm/pull/61652) [Bugfix][CI] Fix renderers tests broken by tool name removal from warn logs
- [#61650](https://github.com/vllm-project/vllm/pull/61650) [ROCm][CI] Add dtype to the KDA metadata test's fake model config
- [#61339](https://github.com/vllm-project/vllm/pull/61339) [Benchmark] Add vllm bench forward: exact-shape forward timing
- [#61257](https://github.com/vllm-project/vllm/pull/61257) [Model Runner V2] Enable batch-sharded sampling for GPT-OSS
- [#61565](https://github.com/vllm-project/vllm/pull/61565) [Model] Support Decision 3.0 decision models (vllm-sr/d3)
- [#61642](https://github.com/vllm-project/vllm/pull/61642) [Bugfix] Fix TP loading of small block-FP8 MLA gates in BailingMoeV3
- [#61416](https://github.com/vllm-project/vllm/pull/61416) [CI] Use an ungated model in the DGX Spark XQA test
- [#61634](https://github.com/vllm-project/vllm/pull/61634) [Bugfix][Attention] Make the query contiguous for TRTLLM ragged MLA prefill
- [#61032](https://github.com/vllm-project/vllm/pull/61032) [NIXL] Prepare KV transfer descriptors as NIXL 1.5 strided lists
- [#58354](https://github.com/vllm-project/vllm/pull/58354) [ROCm][Perf] Drop two dead per-step ops from the AITER sparse MLA metadata build
- [#61167](https://github.com/vllm-project/vllm/pull/61167) [Model Loader] Apply EP weight filtering in InstantTensor
- [#61110](https://github.com/vllm-project/vllm/pull/61110) [Model] Support EAGLE3/DFlash aux hidden states for GraniteMoe and GraniteMoeShared
- [#59790](https://github.com/vllm-project/vllm/pull/59790) [Bugfix][KV Offload][P2P] Keep store pins and AbortAck until NIXL transfers stop
- [#61587](https://github.com/vllm-project/vllm/pull/61587) [Security] Reject local verifier references in Speculators metadata
- [#59294](https://github.com/vllm-project/vllm/pull/59294) [Misc] Remove tool name from warn logs
- [#60869](https://github.com/vllm-project/vllm/pull/60869) [HiSparse] Prefault the shared host pool in parallel
- [#61569](https://github.com/vllm-project/vllm/pull/61569) [Perf][GDN] Skip FLA chunk metadata when FlashInfer GDN prefill is active
- [#59140](https://github.com/vllm-project/vllm/pull/59140) [Bugfix][KV Offload] Fix inaccurate proportional store dropping
- [#58032](https://github.com/vllm-project/vllm/pull/58032) [Bugfix][Quantization] Clamp FP8 scales before UE8M0 rounding
- [#59329](https://github.com/vllm-project/vllm/pull/59329) [Bugfix][KV Offload][P2P] Drop a timed-out store job's blocks from the round's parked supply
- [#61274](https://github.com/vllm-project/vllm/pull/61274) [Quantization] Auto-disable DeepGEMM for Kolibri 1 on SM12x
- [#58064](https://github.com/vllm-project/vllm/pull/58064) [Bugfix][Transformers backend] Fix CUDA graph capture for dynamic-rope models
- [#57378](https://github.com/vllm-project/vllm/pull/57378) [Bugfix][Platform] Fall back to torch when device-level NVML memory is unsupported (GB10)
- [#57500](https://github.com/vllm-project/vllm/pull/57500) [Bugfix][KV Offload] Retain offload mappings after unsafe KVCR startup failure
- [#56867](https://github.com/vllm-project/vllm/pull/56867) [Metrics][KV Offload] Add vllm:kv_offload_config_info - generic info metrics for offloading the offloading connector
- [#61458](https://github.com/vllm-project/vllm/pull/61458) [Perf][Model] Batch PaddleOCR-VL vision encoder and projector

#### 🐛 New Issues
- [#61617](https://github.com/vllm-project/vllm/issues/61617) [Bug]: NIXL handshake crashes with StopIteration for Mamba-only models (no FullAttention KV group) `kv-connector` 💬3
- [#61658](https://github.com/vllm-project/vllm/issues/61658) [Bug]: tiering async lookup serves stale absent verdicts across instances sharing a secondary tier `bug` 💬2
- [#61698](https://github.com/vllm-project/vllm/issues/61698) [RFC]: Bring-Your-Own-GPU (BYOG) reproducible evals and benchmarks for PRs `rocm` `RFC` `quantization` 💬2
- [#61546](https://github.com/vllm-project/vllm/issues/61546) [Bug]: CPU expert parallelism uses global expert IDs with local expert weights 💬2
- [#61608](https://github.com/vllm-project/vllm/issues/61608) [Bug]: enable_tower_connector_lora: get_mm_lora_token_counts() under-sizes punica wrappers in 8 models (startup/runtime token_lora_mapping asserts) 💬1
- [#61665](https://github.com/vllm-project/vllm/issues/61665) [Performance]: MoE-LoRA one-shot kernel: rank offsets defeat load vectorization (w2 at 14% DRAM, 92% excess sectors); ~2x with bit-identical output 💬1
- [#61603](https://github.com/vllm-project/vllm/issues/61603) [Bug]: NemotronH/Mamba2: _chunk_scan_fwd_kernel nondeterministically emits NaN rows on sm90 (H20) for 8 of 23 autotune configs (warps=4, stages>=2, M/N>=64) `bug` 💬1
- [#61616](https://github.com/vllm-project/vllm/issues/61616) [Bug]: NIXL failed KV transfers are silently treated as loaded for HMA models (invalid blocks never reported) `kv-connector` 💬1
- [#61561](https://github.com/vllm-project/vllm/issues/61561) [Bug]: `--shutdown-timeout` never drains in-flight requests when `--api-server-count > 1`: the launcher stops the API servers before the engines, so every in-flight request fails with EngineDeadError and the engines then drain for nobody `bug` 💬1
- [#61626](https://github.com/vllm-project/vllm/issues/61626) [RFC]: Eager-mode Sequence Parallelism (SP) with Collective+GEMM Overlap (Async-TP) `RFC` `quantization`
- [#61709](https://github.com/vllm-project/vllm/issues/61709) [Bug]: --enable-prompt-embeds sizes OPT-350m embeds at hidden_size 1024, but OPT embeds at word_embed_proj_dim 512
- [#61702](https://github.com/vllm-project/vllm/issues/61702) [Bug]: v0.25.0 picks FlashInfer mnnvl allreduce when multicast bind fails, then crashes with illegal memory access (2x H100) `bug`
- [#61597](https://github.com/vllm-project/vllm/issues/61597) test
- [#61696](https://github.com/vllm-project/vllm/issues/61696) [Bug]: NixlConnector P/D: first handshake per remote engine stalls all DP decode ranks (THP compaction in `_build_fa_remote`); late reads after lease expiry return HTTP 200
- [#61681](https://github.com/vllm-project/vllm/issues/61681) [Bug]: GLM-5.3-Flash with --mm-encoder-tp-mode data gives wrong image and video answers (images look mixed up), TP=2 on B200, v0.31.0 `glm`
- [#61673](https://github.com/vllm-project/vllm/issues/61673) [Bug]: with Cascade attention + `SimpleCPUOffloadConnector`, a request is decoded against another request's KV prefix! `bug`
- [#61635](https://github.com/vllm-project/vllm/issues/61635) [Bug]: 3D MoE LoRA gate_up is pinned twice, and EP warmup dummy LoRA is sized by local experts
- [#61632](https://github.com/vllm-project/vllm/issues/61632) [Bug]: Olmo3 tool parser (non-streaming) drops the tool call when a string argument contains "</function_calls>" `bug` `tool-calling`
- [#61631](https://github.com/vllm-project/vllm/issues/61631) [Feature]: Gated contributor PRs show as failed checks, and offloader paths have no CODEOWNERS `tool-calling`
- [#61629](https://github.com/vllm-project/vllm/issues/61629) [Feature]: Support logprobs / top_logprobs for gpt-oss (Harmony) models in /v1/responses `feature request` `tool-calling` `gpt-oss`
- [#61624](https://github.com/vllm-project/vllm/issues/61624) test
- [#61621](https://github.com/vllm-project/vllm/issues/61621) [Bug]: Step-start synchronous .cpu() in attention metadata builders holds the CUDA driver context lock and stalls other threads' CUDA calls
- [#61604](https://github.com/vllm-project/vllm/issues/61604) [Performance]: Waiting requests re-walk their whole prefix-cache hit on every scheduling step
- [#61596](https://github.com/vllm-project/vllm/issues/61596) test issue
- [#61567](https://github.com/vllm-project/vllm/issues/61567) [RFC]: Early KV transfer for direct Mooncake P/D `kv-connector`
- [#61539](https://github.com/vllm-project/vllm/issues/61539) [RFC]: Explicit row layouts for routed-expert capture

#### 🔒 Closed Issues
- [#9129](https://github.com/vllm-project/vllm/issues/9129) [Misc]: CMake Clean-up / Refactor Tasks
- [#31414](https://github.com/vllm-project/vllm/issues/31414) [Feature][Cleanup]: Unify `vllm.utils.flashinfer` and `vllm.model_executor.layers.quantization.utils.flashinfer_utils`
- [#54764](https://github.com/vllm-project/vllm/issues/54764) [Bug]: PLE short-conv batched prefill pads all requests to batch-max query length, causing transient activation OOM on mixed-length workloads(Qwen3.8-Flash-Next)
- [#54455](https://github.com/vllm-project/vllm/issues/54455) [Bug]: sampler warmup misses the plain-greedy path — spec-decode rejection kernels JIT on the first request
- [#60660](https://github.com/vllm-project/vllm/issues/60660) FlashInfer MNNVL allreduce: runtime CUDA ILLEGAL_ADDRESS (700) surfacing at signal_pads cuMemFree during multi-block long prefill — persists after disabling MTP / comm fusion / fp8 custom ops / norm+act fusion
- [#57890](https://github.com/vllm-project/vllm/issues/57890) [Bug]: HunYuan Dense V1 fails CUDA graph capture on v0.29 — HF dynamic RoPE does a host-side sync during capture
- [#58227](https://github.com/vllm-project/vllm/issues/58227) [Bug]: an unclosed <tool_call> opener written in prose holds the Qwen3 parser in tool state and swallows a later genuine tool call
- [#59381](https://github.com/vllm-project/vllm/issues/59381) [Bug]: Qwen3.5-35B-A3B merged SFT BF16 intermittently produces NaN logits and exclamation-only output on H20 (v0.19.1; HF control finite)
- [#60664](https://github.com/vllm-project/vllm/issues/60664) [Bug]: GPT-OSS Harmony json_schema/json_object constraints apply from token 0 and drop reasoning
- [#46951](https://github.com/vllm-project/vllm/issues/46951) [Bug]: Offloading connector possibly offloading stale KV data
- [#61616](https://github.com/vllm-project/vllm/issues/61616) [Bug]: NIXL failed KV transfers are silently treated as loaded for HMA models (invalid blocks never reported)
- [#61597](https://github.com/vllm-project/vllm/issues/61597) test
- [#61256](https://github.com/vllm-project/vllm/issues/61256) [Feature]: Enable batch-sharded sampling for GPT-OSS
- [#61624](https://github.com/vllm-project/vllm/issues/61624) test
- [#59905](https://github.com/vllm-project/vllm/issues/59905) [Bug]: Gemma 4 E4B AutoRound-GPTQ fails to load on 0.24.0 — audio_tower expects unquantized .weight
- [#61596](https://github.com/vllm-project/vllm/issues/61596) test issue
- [#58902](https://github.com/vllm-project/vllm/issues/58902) [Bug]: Qwen3-Omni: M-RoPE positions silently misaligned for every multimodal request (offset double-counts the modality-start token)

### SGLang (`sgl-project/sglang`)

**Stars:** 37,147 · **Open issues:** 5,747 · **Last push:** <1h ago

No new releases occurred in SGLang on October 15, 2026. Significant merged pull requests included enhancements for DeepSelect cluster top-k capabilities in DeepSeek-V4.1 and performance improvements with the AMD DSA prefill under breakable CUDA graphs. Key fixes addressed detokenizer routing issues and synchronization problems with the HiCache mechanism. Notably, a new bug was reported (#44219) regarding the Mistral streaming feature deleting closing brackets from ordinary text, indicating ongoing challenges in ensuring robustness within the system.

#### ✅ Merged PRs
- [#44051](https://github.com/sgl-project/sglang/pull/44051) [DeepSeek-V4.1] DeepSelect cluster top-k for long rows and bf16 index logits
- [#43642](https://github.com/sgl-project/sglang/pull/43642) [Perf] [AMD] dsa: Run DSA prefill under breakable CUDA graphs on HIP
- [#33715](https://github.com/sgl-project/sglang/pull/33715) [Fix] detokenizer router: Route by rid without tokenizer worker ipcs and broadcast logging config
- [#43770](https://github.com/sgl-project/sglang/pull/43770) [Fix] [AMD] diffusion: Compare ReduceOp by identity so the compiled TP all-reduce stays one graph
- [#44326](https://github.com/sgl-project/sglang/pull/44326) [DSv4.1] Support TRT-LLM decoder bounded replay with BCG
- [#43166](https://github.com/sgl-project/sglang/pull/43166) [DSv4.1] Fold encoder-SWA replay into the extend forward
- [#43108](https://github.com/sgl-project/sglang/pull/43108) [Fix] hicache: Defer query beliefs until the rank-synchronized hit drain
- [#43323](https://github.com/sgl-project/sglang/pull/43323) [Feat] metrics: Expose multi-detokenizer router CPU usage
- [#31892](https://github.com/sgl-project/sglang/pull/31892) [Bug] Fix multi-tokenizer BatchEmbeddingOutput repack dropping fields
- [#44207](https://github.com/sgl-project/sglang/pull/44207) [Fix] sglang-server: Honour extra_key on the Rust frontend's /generate
- [#43932](https://github.com/sgl-project/sglang/pull/43932) [HiCache] Buffer-only L3 for an auxiliary SWA window; load back only missing window rows
- [#43942](https://github.com/sgl-project/sglang/pull/43942) [Rust] Serve scheduler metrics on the Rust frontend's /metrics
- [#44113](https://github.com/sgl-project/sglang/pull/44113) [Core] Add subclass hooks for the generation request class and optimistic prefill eligibility
- [#44112](https://github.com/sgl-project/sglang/pull/44112) [Perf] session: Cache multimodal prompt token counts across turns
- [#43926](https://github.com/sgl-project/sglang/pull/43926) [Rust] Serve /weights_checker from the Rust frontend
- [#43520](https://github.com/sgl-project/sglang/pull/43520) [Perf] Cache msgspec struct fields in the batch splitter
- [#44288](https://github.com/sgl-project/sglang/pull/44288) [Perf] detokenizer: Group return IPC sends by tokenizer worker
- [#40857](https://github.com/sgl-project/sglang/pull/40857) [mem_cache][PD] Fix decode radix cache ownership and allow EAGLE/EAGLE3 with decode radix cache
- [#42838](https://github.com/sgl-project/sglang/pull/42838) [cherrypick from #42890] [Feature] Return output top logprobs as flat base64 arrays on request
- [#42834](https://github.com/sgl-project/sglang/pull/42834) [cherrypick from #42889] [Perf] Serialize OpenAI chat/completion responses in one pass
- [#43451](https://github.com/sgl-project/sglang/pull/43451) [Chore] rust: Remove the sglang-renderer crate
- [#44303](https://github.com/sgl-project/sglang/pull/44303) [Fix] glm5.2: Align HiSparse warmup backends and move test to nightly
- [#33728](https://github.com/sgl-project/sglang/pull/33728) [4/N] elastic-ep: Scale at DP-attention replica granularity
- [#42818](https://github.com/sgl-project/sglang/pull/42818) [Feat] sgl-router: Separate LoRA block IDs from prompt lookup keys
- [#44177](https://github.com/sgl-project/sglang/pull/44177) [Doc] [NPU] docs: Update NPU CANN version to 9.1.0
- [#44096](https://github.com/sgl-project/sglang/pull/44096) [Test] [AMD] diffusion: Run the IPC all-to-all transport tests only on CUDA
- [#42817](https://github.com/sgl-project/sglang/pull/42817) [KV events] Publish opaque LoRA block IDs and adapter names
- [#44301](https://github.com/sgl-project/sglang/pull/44301) [Doc] cookbook: add Ling-3.1-flash
- [#44252](https://github.com/sgl-project/sglang/pull/44252) [Feat] sgl-router: Fix cache-aware routing for MTP/EAGLE on hybrid (Mamba/KDA) models
- [#44256](https://github.com/sgl-project/sglang/pull/44256) [Fix] glm5.2: Align PD HiSparse prefill KV layout
- [#44243](https://github.com/sgl-project/sglang/pull/44243) [Fix] sglang-processor: Follow Python's OpenAI layer through #43027, #37577, #43006, #43026, #43005
- [#44022](https://github.com/sgl-project/sglang/pull/44022) [CP] Automatically enable BCG for supported prefill CP configurations
- [#41340](https://github.com/sgl-project/sglang/pull/41340) [diffusion] Qwen-Image 2.1 VAE decoder fast paths: bit-exact norm/bias fusions by default, channels_last decode under quality=extra-high
- [#44269](https://github.com/sgl-project/sglang/pull/44269) [Fix] sglang-processor: Send watermark only when the request sets it
- [#35757](https://github.com/sgl-project/sglang/pull/35757) fix: FA4 paged-KV zero-size page-table registers on SM90
- [#44235](https://github.com/sgl-project/sglang/pull/44235) [CI] vlm: Pin baidu/Unlimited-OCR revision in test_unlimited_ocr_server
- [#44210](https://github.com/sgl-project/sglang/pull/44210) [Fix] DeepSeek-V4.1: Align paged indexer score rows for DeepSelect decode
- [#43054](https://github.com/sgl-project/sglang/pull/43054) [Spec] Fix DFLASH verify mask policy for wrapped attention backends
- [#43689](https://github.com/sgl-project/sglang/pull/43689) [Feat] sgl-router: Render Qwen3.8 (Max, 27B, Flash-Next) through sglang-processor
- [#44228](https://github.com/sgl-project/sglang/pull/44228) [Doc] cookbook: Mirror SA cluster NCCL_CUMEM_ENABLE in AgentX launches, fix GPU counts
- [#43639](https://github.com/sgl-project/sglang/pull/43639) [Perf] Enable native MXFP4 routing and CuTeDSL fusion for MiMo

#### 🐛 New Issues
- [#44219](https://github.com/sgl-project/sglang/issues/44219) [Bug] Mistral streaming deletes closing brackets from ordinary text 💬2
- [#44188](https://github.com/sgl-project/sglang/issues/44188) [Bug] Dumper filter eval() enables scheduler-process RCE 💬2
- [#44284](https://github.com/sgl-project/sglang/issues/44284) Breakable prefill CUDA graph backend trips torch CachingHostAllocator assert (`use_count > 0`) when graphs are re-captured after destruction 💬1
- [#44172](https://github.com/sgl-project/sglang/issues/44172) [Feature] Could you include the sgl-model-gateway container image alongside each version release? 💬1
- [#44244](https://github.com/sgl-project/sglang/issues/44244) [Bug] deepep_v2 crashes at startup on a cold DeepGEMM cache: rank-0-only precompile exceeds ElasticBuffer's 100 s GPU timeout 💬1
- [#44183](https://github.com/sgl-project/sglang/issues/44183) [CI] test_fp4_indexer.py::test_hopper_indexer_backends_replay fails on main: AttributeError 'SimpleNamespace' has no attribute 'page_table' 💬1
- [#44189](https://github.com/sgl-project/sglang/issues/44189) [Bug] Profiler filename components escape output_dir 💬1
- [#44186](https://github.com/sgl-project/sglang/issues/44186) ADR: releasing decode KV pages after a failed PD transfer
- [#44355](https://github.com/sgl-project/sglang/issues/44355) [Bug] Hybrid attention models can fail to start with speculative decoding and --disable-radix-cache
- [#44221](https://github.com/sgl-project/sglang/issues/44221) [RFC][Simulator] Support Closed-Loop Agentic Workloads
- [#44304](https://github.com/sgl-project/sglang/issues/44304) [ROCm][AMD] Qwen3.8-Flash-Next gfx950 / MI355X Performance Optimization
- [#44291](https://github.com/sgl-project/sglang/issues/44291) [Bug] EP2 (tp=2 + ep=2) crashes with illegal memory access on Qwen3.8-Flash-Next-NVFP4 (RTX PRO 6000, sm_120)
- [#44278](https://github.com/sgl-project/sglang/issues/44278) [Bug] benchmark peak concurrency counts sequential requests as overlapping
- [#44234](https://github.com/sgl-project/sglang/issues/44234) [CI] test_unlimited_ocr_server fails on main: HF model_type rename requires trust_remote_code
- [#44206](https://github.com/sgl-project/sglang/issues/44206) [Tracking][Mori] PRs for Community Review
- [#44191](https://github.com/sgl-project/sglang/issues/44191) [Bug] Ordinary API key can clear persistent HiCache storage
- [#44187](https://github.com/sgl-project/sglang/issues/44187) [Bug] Ordinary API key can trigger remote-instance weight export
- [#44178](https://github.com/sgl-project/sglang/issues/44178) [Bug] DeepSeek-V4.1-Flash on SM120: historical report of NCCL initialization failure with DSPARK
- [#44171](https://github.com/sgl-project/sglang/issues/44171) [RFC] Preserve multimodal identity end to end: precomputed inputs, collision-safe KV reuse, and KV-event parity
- [#44159](https://github.com/sgl-project/sglang/issues/44159) [Feature] Accept per-item precomputed media with explicit offsets and hashes

#### 🔒 Closed Issues
- [#24488](https://github.com/sgl-project/sglang/issues/24488) [Help] [Performance] PD disaggregation on H200 shows no throughput gain over single-node traditional deployment with 32k input / 512 output
- [#33861](https://github.com/sgl-project/sglang/issues/33861) [RFC] PD disaggregation: single protocol layer, per-backend transport
- [#34947](https://github.com/sgl-project/sglang/issues/34947) [Bug] DSA sparse-MLA prefill silently computes no attention at all for a single extend > 65535 tokens (trtllm-gen `gridDim.z` limit is still unguarded on the non-DP path)
- [#42217](https://github.com/sgl-project/sglang/issues/42217) MultiDetokenizerRouter splits each batch into per-request IPC sends
- [#42684](https://github.com/sgl-project/sglang/issues/42684) [Bug] NIXL backend crashes at startup with TypeError when SGLANG_DISAGG_STAGING_BUFFER=1
- [#41227](https://github.com/sgl-project/sglang/issues/41227) [Bug] `--json-model-override-args '{"rope_scaling": ...}'` drops `rope_theta` for models without a per-model fallback: Llama-3.2-3B-Instruct GSM8K 161 → 106 (first 200)
- [#34972](https://github.com/sgl-project/sglang/issues/34972) [Bug] HiCache host-pool memory check (psutil.virtual_memory().available) does not account for reserved HugePages, causing false "Not enough host memory" failures
- [#34943](https://github.com/sgl-project/sglang/issues/34943) [Bug] Stopping the by-stage profiler under speculative decoding freezes the scheduler for ~25 s (synchronous trace export on the scheduler thread), and the stop condition leaks into later requests
- [#34927](https://github.com/sgl-project/sglang/issues/34927) [Bug] [Responses API] input_image parts in function_call_output are not converted to image_url: 400 ChatCompletionRequest validation error (post-#25881 builds), silently dropped on current main
- [#34918](https://github.com/sgl-project/sglang/issues/34918) [Playground] Verified cell: rtx6000 / default / nvfp4 / balanced / single
- [#43873](https://github.com/sgl-project/sglang/issues/43873) [Bug] [diffusion] ComfyUI integrated mode: SGLD worker crashes at startup on ComfyUI v0.39.2
- [#44183](https://github.com/sgl-project/sglang/issues/44183) [CI] test_fp4_indexer.py::test_hopper_indexer_backends_replay fails on main: AttributeError 'SimpleNamespace' has no attribute 'page_table'
- [#43096](https://github.com/sgl-project/sglang/issues/43096) Detokenizer return-path fanout performs one IPC send per request
- [#44234](https://github.com/sgl-project/sglang/issues/44234) [CI] test_unlimited_ocr_server fails on main: HF model_type rename requires trust_remote_code
- [#43189](https://github.com/sgl-project/sglang/issues/43189) [Bug] [diffusion] ComfyUI executor drops conditioning after rebuilding a dead worker mid-run
- [#43116](https://github.com/sgl-project/sglang/issues/43116) [Bug] [diffusion] ComfyUI Qwen-Image-Edit executor drops every reference image after the first
- [#43190](https://github.com/sgl-project/sglang/issues/43190) [Bug] [diffusion] ComfyUI server-mode video nodes fail on current ComfyUI and need a local output file
- [#43876](https://github.com/sgl-project/sglang/issues/43876) [Bug] [diffusion] RIFE: unbounded frame_interpolation_exp and crash at scale 0.5

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 131,189 · **Open issues:** 2,562 · **Last push:** <1h ago

On October 15, 2026, llama.cpp saw the release of multiple versions, including b11630, which fixed the conv_1d result layout for batched input, and b11624, which improved RPC tensor transfer logging by adding detailed byte count outputs. Additionally, b11623 implemented the use of SIMT implicit GEMM convolution on AMD without WMMA, enhancing performance for that architecture. Significant merged features included the introduction of support for CLAMP on non-contiguous views in OpenCL and the drop of the redundant embedding graph expansion in models. However, several notable issues emerged, particularly #30502, which reported that running multiple sequential sessions with Qwen3.8 was excessively memory-intensive, leaving developers to seek solutions to improve resource management.

#### 🚀 New Releases
- [b11630](https://github.com/ggml-org/llama.cpp/releases/tag/b11630) b11630
- [b11627](https://github.com/ggml-org/llama.cpp/releases/tag/b11627) b11627
- [b11624](https://github.com/ggml-org/llama.cpp/releases/tag/b11624) b11624
- [b11623](https://github.com/ggml-org/llama.cpp/releases/tag/b11623) b11623
- [b11622](https://github.com/ggml-org/llama.cpp/releases/tag/b11622) b11622
- [b11621](https://github.com/ggml-org/llama.cpp/releases/tag/b11621) b11621
- [b11620](https://github.com/ggml-org/llama.cpp/releases/tag/b11620) b11620
- [b11619](https://github.com/ggml-org/llama.cpp/releases/tag/b11619) b11619
- [b11617](https://github.com/ggml-org/llama.cpp/releases/tag/b11617) b11617
- [b11612](https://github.com/ggml-org/llama.cpp/releases/tag/b11612) b11612

#### ✅ Merged PRs
- [#30186](https://github.com/ggml-org/llama.cpp/pull/30186) opencl: support CLAMP on non-contiguous views
- [#30529](https://github.com/ggml-org/llama.cpp/pull/30529) fix: incorrect COPY instruction in dockerfiles
- [#30540](https://github.com/ggml-org/llama.cpp/pull/30540) gguf-py : detect nfc normalization
- [#29107](https://github.com/ggml-org/llama.cpp/pull/29107) sycl: IQ3 code reorder
- [#30527](https://github.com/ggml-org/llama.cpp/pull/30527) docs: update IBM zDNN backend docs
- [#30343](https://github.com/ggml-org/llama.cpp/pull/30343) ggml-cpu : keep the FP16->FP32 lookup table on x86 with F16C (#30342)
- [#30454](https://github.com/ggml-org/llama.cpp/pull/30454) ggml-cpu : size set_rows conversion buffer for all threads
- [#30461](https://github.com/ggml-org/llama.cpp/pull/30461) models: drop the t_embd expand of the embedding graphs
- [#29353](https://github.com/ggml-org/llama.cpp/pull/29353) cuda, hip: GDN chunked kernel
- [#30509](https://github.com/ggml-org/llama.cpp/pull/30509) skill: Update `code-review` skill for UI development
- [#28738](https://github.com/ggml-org/llama.cpp/pull/28738) ggml: fix conv_1d result layout for batched input
- [#30459](https://github.com/ggml-org/llama.cpp/pull/30459) common : add --spec-draft-n-ubatch
- [#30325](https://github.com/ggml-org/llama.cpp/pull/30325) cuda : use SIMT implicit GEMM conv2d on AMD without WMMA
- [#30407](https://github.com/ggml-org/llama.cpp/pull/30407) Clarify that the intel oneapi toolkit already has all necessary dependencies for sycl
- [#30501](https://github.com/ggml-org/llama.cpp/pull/30501) ggml : add note about mul_mat_id + disable mul_mat_id_dup tests
- [#30495](https://github.com/ggml-org/llama.cpp/pull/30495) vulkan: fix compile error
- [#29835](https://github.com/ggml-org/llama.cpp/pull/29835) vulkan: Add workaround for device free memory > total memory on Intel Windows
- [#29677](https://github.com/ggml-org/llama.cpp/pull/29677) model: fix "invalid vector subscript" when loading on a full GPU
- [#30494](https://github.com/ggml-org/llama.cpp/pull/30494) vendor : update cpp-httplib to 0.61.0
- [#30481](https://github.com/ggml-org/llama.cpp/pull/30481) ggml : improve RPC tensor transfer logs
- [#30362](https://github.com/ggml-org/llama.cpp/pull/30362) jinja : write floats in tojson as Python does
- [#30418](https://github.com/ggml-org/llama.cpp/pull/30418) opencl: use buf+offset instead of subbuffer for adreno moe expert sort
- [#30365](https://github.com/ggml-org/llama.cpp/pull/30365) opencl: fix q8_0 dp4a mul_mat_id and mark PREC_F32 mul_mat_id unsupported for adreno
- [#28195](https://github.com/ggml-org/llama.cpp/pull/28195) HIP: use 64-row MMQ tiles for some quant types on RDNA3.5
- [#29069](https://github.com/ggml-org/llama.cpp/pull/29069) vulkan: support mulmat bf16 activations
- [#30480](https://github.com/ggml-org/llama.cpp/pull/30480) llama : build the k-pool selection in the causal mask layout
- [#30431](https://github.com/ggml-org/llama.cpp/pull/30431) vulkan: Define the shader count for Intel Arc Pro B65+B70
- [#30390](https://github.com/ggml-org/llama.cpp/pull/30390) unicode : add opt-in NFC normalization for Unigram tokenizers
- [#30288](https://github.com/ggml-org/llama.cpp/pull/30288) convert : export YaRN truncation config
- [#30330](https://github.com/ggml-org/llama.cpp/pull/30330) Enable OpenSSL in FP32/FP16 SYCL builds to restore HF HTTPS downloads

#### 🐛 New Issues
- [#30507](https://github.com/ggml-org/llama.cpp/issues/30507) Compile bug: `bug-unconfirmed` 💬6
- [#30552](https://github.com/ggml-org/llama.cpp/issues/30552) Misc. bug: generation started to crawl after update `bug-unconfirmed` 💬1
- [#30502](https://github.com/ggml-org/llama.cpp/issues/30502) Eval bug: running several sequential sessions with Qwen3.8 is impossible with MTP without insane amounts of host RAM for cache (262k context at 32 checkpoints requires 37 GiB) `bug-unconfirmed` 💬1
- [#30556](https://github.com/ggml-org/llama.cpp/issues/30556) Misc. bug: Freed model memory leaves process footprint elevated on iOS `bug-unconfirmed`
- [#30554](https://github.com/ggml-org/llama.cpp/issues/30554) Eval bug: Vulkan] Poor Flash Attention performance on AMD RDNA2 (RX 6600 XT) under Windows `bug-unconfirmed`
- [#30547](https://github.com/ggml-org/llama.cpp/issues/30547) Eval bug: vulkan: slower prompt processing with multi-device + cpu-moe MoE after #29741 (e0bcaccb) `bug-unconfirmed`
- [#30524](https://github.com/ggml-org/llama.cpp/issues/30524) Eval bug: CUDA: MUL_MAT_ID via MMVQ fails with "invalid argument" on Turing when device code is compiled for an older arch (e.g. 61-virtual) `bug-unconfirmed`
- [#30521](https://github.com/ggml-org/llama.cpp/issues/30521) Misc. bug: the assert aborting the app when a batch exceeds n_batch `bug-unconfirmed`
- [#30518](https://github.com/ggml-org/llama.cpp/issues/30518) Eval bug: NemotronForCausalLM with decoupled head_dim (head_dim != n_embd / n_head) fails to load ("error loading model: check_tensor_dims: tensor ... has wrong shape") `bug-unconfirmed`
- [#30508](https://github.com/ggml-org/llama.cpp/issues/30508) Eval bug: MiniCPM-V 4.7 places answers too low when asked where something is in an image
- [#30503](https://github.com/ggml-org/llama.cpp/issues/30503) vulkan: coopmat FA silently falls back to scalar on Intel Xe2 (driver advertises only 8x16x16)
- [#30490](https://github.com/ggml-org/llama.cpp/issues/30490) Eval bug: LFM2.5-24B-A2B emits Qwen3-Coder-style <tool_call> XML as content — calls silently lost (lfm2moe)

#### 🔒 Closed Issues
- [#25356](https://github.com/ggml-org/llama.cpp/issues/25356) Vulkan: batched decode throughput cliff at n_tokens=9 on many-expert MoE (fixed 8-token thresholds in MMV dispatch)
- [#26676](https://github.com/ggml-org/llama.cpp/issues/26676) llama-server slot KV state restore is a no-op (restore reads file, slot stays empty, cache_n=0)
- [#28964](https://github.com/ggml-org/llama.cpp/issues/28964) Eval bug: "Invalid vector subscript" when loading model if all devices with VRAM report zero free VRAM
- [#30507](https://github.com/ggml-org/llama.cpp/issues/30507) Compile bug:
- [#29277](https://github.com/ggml-org/llama.cpp/issues/29277) Misc. bug: Vulkan: ggml_backend_vk_get_device_memory reports free > total when the driver's heapBudget exceeds heap size (Intel iGPU, Windows); downstream consumers underflow
- [#29093](https://github.com/ggml-org/llama.cpp/issues/29093) Eval bug: Vulkan qwen4exp Image Multimodality Seems Broken
- [#27275](https://github.com/ggml-org/llama.cpp/issues/27275) ROCm 7.x comgr segfault on gfx1030 (RDNA2) — side-by-side ROCm 6.3.1 workaround restores full MTP throughput
- [#28051](https://github.com/ggml-org/llama.cpp/issues/28051) Support Qwen3.x MTP (Multi-Token Prediction) for speculative decoding
- [#27454](https://github.com/ggml-org/llama.cpp/issues/27454) Eval bug: Loading a draft model crashes with "invalid vector subscript" when the target model has filled the GPU (NaN in `splits` → `devices.at()` out of range)
- [#28018](https://github.com/ggml-org/llama.cpp/issues/28018) Eval bug: CUDA
- [#27440](https://github.com/ggml-org/llama.cpp/issues/27440) Eval bug: std::out_of_range in load_tensors when a device reports 0 free bytes (NaN tensor split)
- [#30342](https://github.com/ggml-org/llama.cpp/issues/30342) Misc. bug: ~7% slower CPU-side MoE decode on AVX2+F16C since #30270 (Clang vpinsrw merge on the accumulator)

### Ollama (`ollama/ollama`)

**Stars:** 183,183 · **Open issues:** 4,277 · **Last push:** <1h ago

On October 15, 2026, Ollama released version 0.40.5, which includes key changes such as the porting of Metal custom kernels to CUDA and enhancements for model recommendations and language standardization. Notable merged features include the introduction of clef and clef flash on cloud, as well as improvements to OpenAI's tool call functionalities in response history. The app also clarified cloud payment errors, improving user experience. A significant new issue surfaced regarding an unsupported format error after upgrading to version 0.40.4, generating considerable discussion among users.

#### 🚀 New Releases
- [v0.40.5-rc0](https://github.com/ollama/ollama/releases/tag/v0.40.5-rc0) v0.40.5

#### ✅ Merged PRs
- [#18969](https://github.com/ollama/ollama/pull/18969) Introduce clef and clef flash on cloud
- [#18993](https://github.com/ollama/ollama/pull/18993) MLX: version bump
- [#18986](https://github.com/ollama/ollama/pull/18986) app: clarify cloud payment errors
- [#18911](https://github.com/ollama/ollama/pull/18911) openai: accept custom tool calls in Responses history

#### 🐛 New Issues
- [#18998](https://github.com/ollama/ollama/issues/18998) Error message after upgrading to 0.40.4: 'nimble:latest' was downloaded in a format that is no longer supported. " `bug` 💬13
- [#19002](https://github.com/ollama/ollama/issues/19002) Ollama Text Classifier modles slower under version 0.40.4 ? `bug` 💬4
- [#18995](https://github.com/ollama/ollama/issues/18995) OLLAMA_CONTEXT_LENGTH is not honored when reporting context length via `/api/show` or `/api/tags` `bug` 💬2
- [#19000](https://github.com/ollama/ollama/issues/19000) [Feature Request] Integrated Hugging Face model browser with one-click GGUF download and run `feature request` 💬2
- [#18994](https://github.com/ollama/ollama/issues/18994) 更新ollma和codex后就不能用了 `bug` 💬1
- [#19006](https://github.com/ollama/ollama/issues/19006) bug(cuda): A100 Qwen35 warm-up faults on 0.35.0; 0.34.4 rollback passes
- [#18996](https://github.com/ollama/ollama/issues/18996) OpenAI-compatible responses use `chatcmpl-<rand.Intn(999)>` as id: 1000 possible values, collisions break clients that key on it

#### 🔒 Closed Issues
- [#18698](https://github.com/ollama/ollama/issues/18698) Support for K2 Horizon models (architecture "k2-horizon")
- [#18998](https://github.com/ollama/ollama/issues/18998) Error message after upgrading to 0.40.4: 'nimble:latest' was downloaded in a format that is no longer supported. "
- [#16833](https://github.com/ollama/ollama/issues/16833) Add a way to filter only local models
- [#18890](https://github.com/ollama/ollama/issues/18890) Request to add d1-3B and d1-omni-600M
- [#18898](https://github.com/ollama/ollama/issues/18898) Gemma4:12b throws: "Gemma4Assistant requires ctx_other to be set"
- [#18996](https://github.com/ollama/ollama/issues/18996) OpenAI-compatible responses use `chatcmpl-<rand.Intn(999)>` as id: 1000 possible values, collisions break clients that key on it

### LiteLLM (`BerriAI/litellm`)

**Stars:** 61,264 · **Open issues:** 5,600 · **Last push:** <1h ago

LiteLLM released three new versions today: v1.107.0-dev.1, v1.106.0-rc.3, and v1.105.1, all of which include Docker image signatures verified through cosign to enhance security. Significant merged pull requests included updates to proxy features, such as the addition of the W3C traceresponse header in #42079, enhancements to search tool cost management in #46560, and refactoring work to streamline execution protocols in #46282 and #46235. Fixes addressed multiple issues, notably ensuring proper memory management in #46435 and improving response error handling in #46438. A particularly pressing new issue surfaced, as #46407 highlights a bug affecting GPT-image costs that overlooks data residency uplifts, potentially impacting budget management for users.

#### 🚀 New Releases
- [v1.107.0-dev.1](https://github.com/BerriAI/litellm/releases/tag/v1.107.0-dev.1) v1.107.0-dev.1
- [v1.106.0-rc.3](https://github.com/BerriAI/litellm/releases/tag/v1.106.0-rc.3) v1.106.0-rc.3
- [v1.105.1](https://github.com/BerriAI/litellm/releases/tag/v1.105.1) v1.105.1

#### ✅ Merged PRs
- [#42079](https://github.com/BerriAI/litellm/pull/42079) feat(proxy): return the W3C traceresponse header on traced responses
- [#46560](https://github.com/BerriAI/litellm/pull/46560) feat(search): honor input_cost_per_query set on a search tool
- [#46562](https://github.com/BerriAI/litellm/pull/46562) feat(ui): add the Airia guardrail to the Guardrail Garden with its logo
- [#45176](https://github.com/BerriAI/litellm/pull/45176) test(integration): add claude-haiku-5-5 basic translation cases
- [#46368](https://github.com/BerriAI/litellm/pull/46368) fix(proxy-extras): run prisma migrate deploy under the pinned coordinator lock instead of Prisma's session advisory lock
- [#46299](https://github.com/BerriAI/litellm/pull/46299) refactor(rust-bridge): return an unstarted Execution from native entrypoints and drive it in Python
- [#46546](https://github.com/BerriAI/litellm/pull/46546) test(translation): share rich request and response templates
- [#46282](https://github.com/BerriAI/litellm/pull/46282) refactor(rust-bridge): generator-style execution protocol with stream step names
- [#46235](https://github.com/BerriAI/litellm/pull/46235) refactor(host-python): run the Python driver as one async body
- [#46361](https://github.com/BerriAI/litellm/pull/46361) refactor(host-python): collect host failures in a thiserror Error enum
- [#46325](https://github.com/BerriAI/litellm/pull/46325) test(host-python): move driver tests out of the inline module
- [#46443](https://github.com/BerriAI/litellm/pull/46443) test(rust-bridge): pin Messages and Responses callback contracts on the native path
- [#46320](https://github.com/BerriAI/litellm/pull/46320) fix(cost): split xai spend rows across input and output instead of booking the total as output
- [#46508](https://github.com/BerriAI/litellm/pull/46508) fix(responses): return the first message item as content for structured output on the chat bridge
- [#46506](https://github.com/BerriAI/litellm/pull/46506) feat(proxy): let proxy admins open team metadata to team admins, keeping proxy settings with proxy admins
- [#46512](https://github.com/BerriAI/litellm/pull/46512) fix(vertex-ai): add flex prices to gemini-nano-banana-2.1
- [#46541](https://github.com/BerriAI/litellm/pull/46541) test(integration): delete flaky team model TPM concurrency test
- [#46341](https://github.com/BerriAI/litellm/pull/46341) fix(config): treat blank env values as unset so the proxy neither crash-loops nor silently drops a guardrail
- [#46294](https://github.com/BerriAI/litellm/pull/46294) feat(access-groups): grant Claude Code skills through access groups
- [#46438](https://github.com/BerriAI/litellm/pull/46438) fix(responses): keep the provider code and message on top-level stream error events
- [#46274](https://github.com/BerriAI/litellm/pull/46274) feat(terraform): add team_member_model_max_budget to litellm_team
- [#40784](https://github.com/BerriAI/litellm/pull/40784) feat(guardrails): add Airia guardrail integration
- [#32511](https://github.com/BerriAI/litellm/pull/32511) fix(responses): propagate cache_control through responses->chat completion bridge
- [#46531](https://github.com/BerriAI/litellm/pull/46531) test(rust): assert native serving via the x-litellm-rust response marker
- [#46488](https://github.com/BerriAI/litellm/pull/46488) fix(caching): make Redis Cluster commands wait for a pool slot instead of tripping the circuit breaker
- [#46510](https://github.com/BerriAI/litellm/pull/46510) test(integration): fix three more CircleCI integration reds from test setup
- [#46104](https://github.com/BerriAI/litellm/pull/46104) fix(anthropic): keep refusal stop_reason and stop_details on the logged response
- [#46503](https://github.com/BerriAI/litellm/pull/46503) fix(proxy): finish prisma engine requests when their caller is cancelled
- [#46291](https://github.com/BerriAI/litellm/pull/46291) fix(router): report fallbacks skipped for access or budget instead of calling them failed
- [#46501](https://github.com/BerriAI/litellm/pull/46501) fix(redis): default every Redis client to a 5s socket timeout when none is set
- [#46360](https://github.com/BerriAI/litellm/pull/46360) feat(helm): support a separate hostname per component in the componentized deploy
- [#46412](https://github.com/BerriAI/litellm/pull/46412) perf(scim): batch group member identity lookups into one query per push
- [#43554](https://github.com/BerriAI/litellm/pull/43554) fix(mcp): leave out tool texts too long to embed instead of failing tool search
- [#46410](https://github.com/BerriAI/litellm/pull/46410) feat(helm): read database and Redis host or URL from a Kubernetes Secret
- [#46300](https://github.com/BerriAI/litellm/pull/46300) feat(access-groups): per-server MCP tool permissions on access groups
- [#46350](https://github.com/BerriAI/litellm/pull/46350) fix(router): add fallback_on_unsupported_params so param rejections can raise instead of falling back
- [#46484](https://github.com/BerriAI/litellm/pull/46484) fix(caching): report Redis circuit-breaker metrics through the Prometheus services logger
- [#46493](https://github.com/BerriAI/litellm/pull/46493) fix(router): read the first stream chunk before returning so a failure before any token runs through the retry and fallback budget
- [#46370](https://github.com/BerriAI/litellm/pull/46370) fix(anthropic): forward service_tier on /v1/messages for anthropic, azure_ai and bedrock_mantle
- [#46353](https://github.com/BerriAI/litellm/pull/46353) feat(proxy): let proxy admins open team member defaults to team admins
- [#46500](https://github.com/BerriAI/litellm/pull/46500) fix(proxy): evict the cached user on every proxy for every /user/update and /user/bulk_update
- [#45733](https://github.com/BerriAI/litellm/pull/45733) fix(vllm): write spend log rows for /vllm passthrough calls to router models
- [#46485](https://github.com/BerriAI/litellm/pull/46485) feat(proxy): let proxy admins open soft_budget to team admins
- [#46297](https://github.com/BerriAI/litellm/pull/46297) fix(proxy): accept every known logging callback on /health/services
- [#46394](https://github.com/BerriAI/litellm/pull/46394) test(proxy): cover the OTel V2 otel callback on /health/services
- [#46354](https://github.com/BerriAI/litellm/pull/46354) fix(streaming): add CustomStreamWrapper.close() and release the connection when a sync stream ends
- [#46491](https://github.com/BerriAI/litellm/pull/46491) fix(prometheus): backport #46267 to rc/1.106.0
- [#46340](https://github.com/BerriAI/litellm/pull/46340) fix(s3_v2): bound each upload attempt, add jitter, retry 429 and transport errors in the call
- [#46490](https://github.com/BerriAI/litellm/pull/46490) test(integration): remove six setup causes of CircleCI integration reds
- [#46489](https://github.com/BerriAI/litellm/pull/46489) fix(gemini): add the changelog shutdown date to gemini-2.0-flash-exp-image-generation
- [#46357](https://github.com/BerriAI/litellm/pull/46357) fix(caching): collect the Redis circuit-breaker state gauge as one series per state across worker processes
- [#46331](https://github.com/BerriAI/litellm/pull/46331) fix(anthropic): stream json_schema answers as content on Bedrock Mantle and Claude Platform, and join split answers
- [#46474](https://github.com/BerriAI/litellm/pull/46474) refactor(router): name the pre-content stream retry helpers for both stream paths and let the retry loop take its attempt function
- [#46408](https://github.com/BerriAI/litellm/pull/46408) fix(proxy): check previous_response_id ownership on /v1/responses/compact
- [#46347](https://github.com/BerriAI/litellm/pull/46347) feat(proxy): add deployment warning endpoints with instance-wide ignore and snooze
- [#46349](https://github.com/BerriAI/litellm/pull/46349) fix(vertex_ai): pass the per-request timeout to Gemini streaming calls
- [#46355](https://github.com/BerriAI/litellm/pull/46355) fix(http): restore the 15s aiohttp keep-alive default in the Python and Rust clients
- [#46145](https://github.com/BerriAI/litellm/pull/46145) fix(ui): label Decisions playground issues by question key and fix the Response header row
- [#46461](https://github.com/BerriAI/litellm/pull/46461) fix(anthropic): forward service_tier on chat completions to Anthropic and Azure
- [#43706](https://github.com/BerriAI/litellm/pull/43706) feat(dashscope): add Wan 3.0, Wan 2.7 and HappyHorse video generation via /v1/videos
- [#46378](https://github.com/BerriAI/litellm/pull/46378) fix(proxy): build configured logging callbacks at boot so a broken callback fails startup instead of the first request
- [#46452](https://github.com/BerriAI/litellm/pull/46452) chore(codeowners): replace kerrylu-berri with kerry-berri
- [#46428](https://github.com/BerriAI/litellm/pull/46428) fix(cost-map): registry audit 2026-10-14, remove azure_ai/claude-fable-5-5
- [#44098](https://github.com/BerriAI/litellm/pull/44098) fix(sso)!: reject empty identities before session creation
- [#46337](https://github.com/BerriAI/litellm/pull/46337) fix(anthropic): check Vertex forced-tool support on the real model, skip non-string user ids, drop speed where unsupported
- [#46359](https://github.com/BerriAI/litellm/pull/46359) fix(cache): keep cache hits free of unset fields, and follow intentional behavior changes in CircleCI suites
- [#46446](https://github.com/BerriAI/litellm/pull/46446) fix(ui): widen the LiteAdmin home model selector
- [#45260](https://github.com/BerriAI/litellm/pull/45260) feat(decisions): add Laya and Bespoke providers to the Add Model form
- [#46336](https://github.com/BerriAI/litellm/pull/46336) fix(http_handler): only replay POST and PATCH when the request never reached the upstream
- [#46211](https://github.com/BerriAI/litellm/pull/46211) feat(mcp): separate confidential client for ID-JAG leg 2
- [#45600](https://github.com/BerriAI/litellm/pull/45600) feat(anthropic): generate auto mode safeguard_results with a classifier model on the /v1/messages chat bridge
- [#45734](https://github.com/BerriAI/litellm/pull/45734) feat(decisions)!: send images to Cloudflare Clef through its images field
- [#45965](https://github.com/BerriAI/litellm/pull/45965) feat(ui): show decision models as decisions and list the supported ones in the AI Hub
- [#45686](https://github.com/BerriAI/litellm/pull/45686) fix(databricks): send a single plain text block as a string for non-Claude models
- [#44697](https://github.com/BerriAI/litellm/pull/44697) test(integration): cover fine_tuning endpoint contracts
- [#46324](https://github.com/BerriAI/litellm/pull/46324) fix(anthropic): cache tool result screenshots on the /v1/messages to Responses bridge
- [#46210](https://github.com/BerriAI/litellm/pull/46210) fix(proxy): scope /global/activity/cache_hits analytics to the caller's own and permitted-team logs
- [#41430](https://github.com/BerriAI/litellm/pull/41430) feat(claude-code): emit installationPreference in marketplace.json entries
- [#44690](https://github.com/BerriAI/litellm/pull/44690) test(integration): cover pass_through endpoint contracts
- [#44725](https://github.com/BerriAI/litellm/pull/44725) test(integration): cover orgs_users_customers endpoint contracts
- [#44674](https://github.com/BerriAI/litellm/pull/44674) test(integration): cover keys_auth endpoint contracts
- [#44734](https://github.com/BerriAI/litellm/pull/44734) test(integration): pin assistants and evals endpoint contracts
- [#44671](https://github.com/BerriAI/litellm/pull/44671) test(integration): cover mcp_runtime endpoint contracts
- [#44737](https://github.com/BerriAI/litellm/pull/44737) test(integration): cover config_utils endpoint contracts
- [#44733](https://github.com/BerriAI/litellm/pull/44733) test(integration): cover responses endpoint contracts
- [#44736](https://github.com/BerriAI/litellm/pull/44736) test(integration): cover budgets_spend endpoint contracts
- [#44704](https://github.com/BerriAI/litellm/pull/44704) test(integration): cover anthropic_messages endpoint contracts
- [#44703](https://github.com/BerriAI/litellm/pull/44703) test(integration): cover files_batches endpoint contracts
- [#44744](https://github.com/BerriAI/litellm/pull/44744) test(integration): cover health_routing endpoint contracts
- [#44705](https://github.com/BerriAI/litellm/pull/44705) test(integration): cover teams endpoint contracts
- [#45870](https://github.com/BerriAI/litellm/pull/45870) feat(proxy): let team admins create keys for team members behind an opt-in setting
- [#46334](https://github.com/BerriAI/litellm/pull/46334) feat(ui): move the upgrade notice into the notifications bell
- [#46386](https://github.com/BerriAI/litellm/pull/46386) fix(proxy-extras): bound telemetry_reports migration lock waits with SET LOCAL lock_timeout
- [#45777](https://github.com/BerriAI/litellm/pull/45777) build(deps): bump mlflow to 3.17.0 and drop GHSA-h7x2-h6g9-p789 suppression
- [#46383](https://github.com/BerriAI/litellm/pull/46383) fix(guardrails): backport #46086 to rc/1.106.0
- [#44686](https://github.com/BerriAI/litellm/pull/44686) test(integration): cover prompts_tags_caching endpoint contracts
- [#44722](https://github.com/BerriAI/litellm/pull/44722) test(integration): cover guardrails_policies endpoint contracts
- [#44654](https://github.com/BerriAI/litellm/pull/44654) test(integration): cover small_inference endpoint contracts
- [#44680](https://github.com/BerriAI/litellm/pull/44680) test(integration): cover google_genai endpoint contracts
- [#44739](https://github.com/BerriAI/litellm/pull/44739) test(integration): cover vector_stores endpoint contracts
- [#44687](https://github.com/BerriAI/litellm/pull/44687) test(integration): cover mcp_management endpoint contracts
- [#46329](https://github.com/BerriAI/litellm/pull/46329) fix(proxy-extras): bound migration lock waits with SET LOCAL lock_timeout in the migration SQL
- [#44689](https://github.com/BerriAI/litellm/pull/44689) test(integration): cover realtime endpoint contracts
- [#44691](https://github.com/BerriAI/litellm/pull/44691) test(integration): cover videos_containers endpoint contracts
- [#44688](https://github.com/BerriAI/litellm/pull/44688) test(integration): cover chat_completions endpoint contracts
- [#44656](https://github.com/BerriAI/litellm/pull/44656) test(integration): cover scim endpoint contracts
- [#44699](https://github.com/BerriAI/litellm/pull/44699) test(integration): cover audio endpoint contracts
- [#44653](https://github.com/BerriAI/litellm/pull/44653) test(integration): cover images endpoint contracts
- [#44650](https://github.com/BerriAI/litellm/pull/44650) test(integration): cover agents_a2a endpoint contracts
- [#44660](https://github.com/BerriAI/litellm/pull/44660) test(integration): cover embeddings endpoint contracts
- [#44684](https://github.com/BerriAI/litellm/pull/44684) test(integration): cover model_management endpoint contracts
- [#45494](https://github.com/BerriAI/litellm/pull/45494) feat(telemetry): add the Admin UI telemetry settings page and gated page navigation events
- [#45490](https://github.com/BerriAI/litellm/pull/45490) feat(telemetry): keep reports in a local table with a persistent instance id and an admin export route
- [#45489](https://github.com/BerriAI/litellm/pull/45489) feat(telemetry): record proxy requests and provider attempts into the telemetry sink
- [#46187](https://github.com/BerriAI/litellm/pull/46187) fix(sso): fall back to id_token claims when the generic userinfo response is not JSON

#### 🐛 New Issues
- [#46407](https://github.com/BerriAI/litellm/issues/46407) [Bug]: gpt-image cost ignores data_residency uplift and deployment-level output_cost_per_image_token `bug` `llm translation` 💬4
- [#46465](https://github.com/BerriAI/litellm/issues/46465) [Bug]: GoogleAIStudioTokenCounter.count_tokens passes contents=None for /v1/messages/count_tokens (missed in #36981) `llm translation` `claude code` 💬3
- [#46404](https://github.com/BerriAI/litellm/issues/46404) [Bug]: Budget reset never commits once `LiteLLM_EndUserTable` is large `bug` `llm translation` 💬3
- [#46398](https://github.com/BerriAI/litellm/issues/46398) [Bug]: Bridged /v1/responses stores the encoded resp_ id in SpendLogs.request_id, so previous_response_id session lookup never matches `bug` `llm translation` 💬2
- [#46369](https://github.com/BerriAI/litellm/issues/46369) [Bug]: `/v1/messages` exposes Gemini thought_signature only via non-standard `tool_use.provider_specific_fields` — standard Anthropic clients (Claude Code) always lose it, every turn falls back to the dummy signature `bug` `llm translation` `claude code` 💬3
- [#46467](https://github.com/BerriAI/litellm/issues/46467) [Bug]: Gemini convert_to_gemini_tool_call_result raises unhandled 500 on orphaned tool_result messages after history truncation `llm translation` `claude code` 💬2
- [#46403](https://github.com/BerriAI/litellm/issues/46403) [Bug]: SpendLogs rows silently dropped when the provider reuses response ids (Ollama: `chatcmpl-<0..999>`) `llm translation` 💬2
- [#46435](https://github.com/BerriAI/litellm/issues/46435) [Bug]: Spend-log writes collapse and proxy memory grows unbounded under sustained concurrency (reproduces with no OTel/callbacks) `bug` 💬2
- [#46384](https://github.com/BerriAI/litellm/issues/46384) [Bug]: Partial wildcards (e.g. cloudflare/@cf/*) list uncallable ids in /v1/models and /model/info `llm translation` 💬2
- [#46405](https://github.com/BerriAI/litellm/issues/46405) [Bug]: SAP provider crashes on streaming tool calls — FunctionObj.arguments has no default `bug` `llm translation` 💬2
- [#46364](https://github.com/BerriAI/litellm/issues/46364) [Bug]: streamed chat with a fixed cost margin returns x-litellm-response-cost of only the fixed amount `bug` `llm translation` 💬2
- [#46557](https://github.com/BerriAI/litellm/issues/46557) [Bug]: Mid-stream failure on a responses-mode deployment via chat completions fires failure callbacks twice (duplicate misattributed to fallback on proxy) `llm translation` 💬1
- [#46542](https://github.com/BerriAI/litellm/issues/46542) Streaming completion reports finish_reason "stop" when the stream ends without any finish reason `llm translation` 💬1
- [#46535](https://github.com/BerriAI/litellm/issues/46535) [Bug]: allowed_model_region is not applied to OCR, rerank and other calls without messages or input `llm translation` 💬1
- [#46518](https://github.com/BerriAI/litellm/issues/46518) [Bug]: JWKS key refresh blocks every JWT-authenticated request on the worker until the fetch returns 💬1
- [#46499](https://github.com/BerriAI/litellm/issues/46499) [Bug]: Interrupted streaming /chat/completions logs partial spend instead of full provider-billed usage `bug` `llm translation` 💬1
- [#46495](https://github.com/BerriAI/litellm/issues/46495) [Bug]: /v1/messages to vertex_ai Claude fetches the Google access token synchronously on the event loop (freezes the worker) `llm translation` 💬1
- [#46470](https://github.com/BerriAI/litellm/issues/46470) [Bug]: gemini-4-argon has supports_prompt_caching: true in model map and ContextCachingEndpoints ignores supports_prompt_caching: false `llm translation` `claude code` 💬1
- [#46477](https://github.com/BerriAI/litellm/issues/46477) [Bug] Auth-guard login redirect drops SERVER_ROOT_PATH prefix (single-segment) → /ui/login 404s behind a reverse proxy 💬1
- [#46483](https://github.com/BerriAI/litellm/issues/46483) [Bug]: Responses bridge drops assistant message phase on output and on replayed input `llm translation` 💬1
- [#46450](https://github.com/BerriAI/litellm/issues/46450) [Bug]: Response-cache hit reports the full price in x-litellm-response-cost / _hidden_params.response_cost, while spend logs record $0 `bug` 💬1
- [#46455](https://github.com/BerriAI/litellm/issues/46455) [Bug]: A guardrail scan that never ran is logged as `success` `llm translation` 💬1
- [#46432](https://github.com/BerriAI/litellm/issues/46432) [Bug]: chat completions to a custom anthropic/<model> deployment go upstream with max_tokens=4096 despite model_info.max_output_tokens `llm translation` 💬1
- [#46431](https://github.com/BerriAI/litellm/issues/46431) fix(proxy): /tag/info returns 500 for missing tags and /tag/update wipes unset fields 💬1
- [#46419](https://github.com/BerriAI/litellm/issues/46419) [Bug]: Azure Responses API with enable_azure_ad_token_refresh fetches a new Entra token on every request, blocking the event loop `llm translation` 💬1
- [#46367](https://github.com/BerriAI/litellm/issues/46367) [Bug]: proxy has no POST /v1/images/variations route `bug` `llm translation` 💬1
- [#46414](https://github.com/BerriAI/litellm/issues/46414) [Bug]: MCP gateway OAuth rejects Gemini (web) — `state must be at most 1024 characters` `llm translation` 💬1
- [#46363](https://github.com/BerriAI/litellm/issues/46363) [Bug]: /global/spend/reset zeroes DB spend but an exhausted key stays refused with budget_exceeded `bug` 💬1
- [#46365](https://github.com/BerriAI/litellm/issues/46365) [Bug]: Streamed usage.cost leaves out the Claude web search fee (server_tool_use dropped) `llm translation` 💬1
- [#46335](https://github.com/BerriAI/litellm/issues/46335) [Bug]: Admin UI settings cannot be edited if STORE_MODEL_IN_DB is false `bug` 💬1
- [#46564](https://github.com/BerriAI/litellm/issues/46564) [Bug]: OCR fallback resolution ignores model capability — retries waste time on non-OCR fallback models `bug` `llm translation`
- [#46543](https://github.com/BerriAI/litellm/issues/46543) ollama_chat streaming replaces the tool call ids Ollama sends with random UUIDs `llm translation`
- [#46526](https://github.com/BerriAI/litellm/issues/46526) [Feature]: Configure message redaction for Ramp and generic API logging through YAML
- [#46519](https://github.com/BerriAI/litellm/issues/46519) [Bug]: Bedrock Converse deep-copies request params on the event loop (large requests trigger long GC pauses) `llm translation`
- [#46517](https://github.com/BerriAI/litellm/issues/46517) [Feature]: Call gc.freeze() after proxy startup to shorten stop-the-world GC pauses `llm translation`
- [#46516](https://github.com/BerriAI/litellm/issues/46516) [Bug]: Long streamed responses freeze the proxy event loop: async_data_generator never yields while chunks are buffered `llm translation`
- [#46520](https://github.com/BerriAI/litellm/issues/46520) [Bug]: Per-input embedding caching can fill a shared Redis and evict rate-limit/spend keys
- [#46473](https://github.com/BerriAI/litellm/issues/46473) [Bug]: Image-generation prompt is not redacted by a pre-call PII guardrail `bug` `llm translation`
- [#46469](https://github.com/BerriAI/litellm/issues/46469) [Bug]: complexity_router LLM classifier cost is not attributed to spend or budgets (only in routing_decision.classifier_cost)
- [#46468](https://github.com/BerriAI/litellm/issues/46468) [Bug]: VertexGeminiConfig.map_openai_params rejects reasoning_effort=xhigh/max instead of clamping or honoring drop_params=True `llm translation`
- [#46466](https://github.com/BerriAI/litellm/issues/46466) [Feature]: Add a way to stop the proxy from calling remote LiteLLM / GitHub services, for deployments that are air-gapped, egress-restricted, or simply don't want the proxy phoning out. `enhancement` `llm translation`
- [#46454](https://github.com/BerriAI/litellm/issues/46454) [Feature]: Let the Bedrock guardrail screen tool-call arguments `llm translation`
- [#46422](https://github.com/BerriAI/litellm/issues/46422) [Bug]: Discussion: Reliability of Jev-Based Decisions with External Context `bug`
- [#46418](https://github.com/BerriAI/litellm/issues/46418) include_team_models=true returns no metadata for a team service-account key with working inference access
- [#46413](https://github.com/BerriAI/litellm/issues/46413) Lens worker claims job but never progresses, fails after ~15 min with "Worker disconnected repeatedly"
- [#46401](https://github.com/BerriAI/litellm/issues/46401) [Bug]: It frequently runs out of memory—how could I possibly charge for this? `bug`
- [#46339](https://github.com/BerriAI/litellm/issues/46339) [Bug]: gzip response middleware compresses up to 1 MiB on the event loop: an 824 KB embeddings response stalls the worker ~165 ms `llm translation`

#### 🔒 Closed Issues
- [#13419](https://github.com/BerriAI/litellm/issues/13419) [Bug]: OpenAI gpt-5 not showing thinking outputs when using OpenWebUI
- [#15230](https://github.com/BerriAI/litellm/issues/15230) [Bug]: `This feature is only available for LiteLLM Enterprise users` error while trying to update a virtual key
- [#7275](https://github.com/BerriAI/litellm/issues/7275) Unable to use any Azure AI models with `services.ai.azure.com` url
- [#30365](https://github.com/BerriAI/litellm/issues/30365) [Bug]: Auto-mode Bash classifier returns 429 via OAuth-passthrough proxy, causing hard Bash block
- [#33687](https://github.com/BerriAI/litellm/issues/33687) [Bug]: cache_control silently dropped when Responses API requests route through the litellm_completion bridge
- [#31887](https://github.com/BerriAI/litellm/issues/31887) [Bug]: Toggeling on Cache Control Injection Points for anthropic break litellm for anthropic
- [#32620](https://github.com/BerriAI/litellm/issues/32620) [Feature]: Rate Limits for provider
- [#32660](https://github.com/BerriAI/litellm/issues/32660) [Bug]: xai-oauth Unsupported provider - xai-oauth in router.py
- [#27950](https://github.com/BerriAI/litellm/issues/27950) bug: Responses API drops cache_control on input_text content blocks (inconsistent with tool cache_control)
- [#45618](https://github.com/BerriAI/litellm/issues/45618) [Bug]: chat->Responses->chat bridge converts string user content to text blocks, which breaks Databricks json_object ("must contain the word json" even when present)
- [#26939](https://github.com/BerriAI/litellm/issues/26939) Title: Vertex AI Gemini streaming silently drops per-request timeout, falling back to litellm.request_timeout (6000s)
- [#32557](https://github.com/BerriAI/litellm/issues/32557) [Feature]: Can we have a stealth model to avoid sending client metadata?
- [#32564](https://github.com/BerriAI/litellm/issues/32564) [Bug]: UI shows 'enable prompt storage' hint for missing request/response payload even when store_prompts_in_spend_logs is enabled
- [#32574](https://github.com/BerriAI/litellm/issues/32574) [Bug]: Router cooldown can be skipped across retries/fallbacks because failure logging is deduplicated on the shared Logging object
- [#32575](https://github.com/BerriAI/litellm/issues/32575) [Bug]: [v1.91.1] DB-backed MCP servers disappear from /v1/mcp/server after LiteLLM restart until any MCP write operation triggers reload
- [#32581](https://github.com/BerriAI/litellm/issues/32581) [Bug]: daily_with_models export overcounts tokens/spend vs daily and daily_with_keys
- [#32582](https://github.com/BerriAI/litellm/issues/32582) [Feature]: add new model default to blocked
- [#32588](https://github.com/BerriAI/litellm/issues/32588) Policy Attachment behind Enterprise ??
- [#32592](https://github.com/BerriAI/litellm/issues/32592) [Bug]: LiteLLM proxy imports `redis.asyncio` during startup even when Redis transaction buffer is not enabled
- [#32594](https://github.com/BerriAI/litellm/issues/32594) Add "xiaomi/xiaomi/mimo-v-2.5" in "model_prices_and_context_window.json"
- [#32608](https://github.com/BerriAI/litellm/issues/32608) [Bug]: A2A agent static_headers are not applied when invoking agents via /chat/completions bridge (a2a/ model prefix)
- [#32609](https://github.com/BerriAI/litellm/issues/32609) [Bug]: A2A /chat/completions bridge hardcodes legacy 0.3 "message/send" — agents pinned to protocolVersion "1.0" fail with "Method not found"
- [#32621](https://github.com/BerriAI/litellm/issues/32621) [Bug]: Cache Settings UI — "Semantic" listed as a Redis Type alongside Node/Cluster/Sentinel which are network topologies, causing user confusion
- [#32677](https://github.com/BerriAI/litellm/issues/32677) [Bug]: DB/API-registered MCP servers don't resolve os.environ/ in stdio env (same root cause as #31050, different field)
- [#32695](https://github.com/BerriAI/litellm/issues/32695) [Bug]: Minor - OpenAPI documentation shows incorrect keys for budget_limits
- [#45122](https://github.com/BerriAI/litellm/issues/45122) [Bug]: Responses in-stream error event in OpenAI's top-level shape loses its code and becomes a fallback-eligible 500
- [#43752](https://github.com/BerriAI/litellm/issues/43752) [Feature]: Preserve Anthropic-native refusal metadata (stop_reason, stop_details) through streaming aggregation
- [#45082](https://github.com/BerriAI/litellm/issues/45082) [Bug]: Anthropic streaming with response_format and tools reports finish_reason "stop" when a user tool is called
- [#46103](https://github.com/BerriAI/litellm/issues/46103) [Bug]: Vertex AI claude-sonnet-5-5 response_format gets a 400 for forced tool_choice because a claude-3-sonnet stub model bypasses supports_forced_tool_use
- [#42078](https://github.com/BerriAI/litellm/issues/42078) [Feature]: Expose OpenTelemetry trace IDs on LiteLLM Proxy responses
- [#44938](https://github.com/BerriAI/litellm/issues/44938) [Bug]: Scope /global/activity/cache_hits to the authenticated internal user

### Unsloth (`unslothai/unsloth`)

**Stars:** 78,010 · **Open issues:** 367 · **Last push:** <1h ago

On October 15, 2026, there were no new releases for Unsloth, but several important pull requests were merged, enhancing the Studio's functionality and performance. Notably, #13702 introduced the capability to re-embed documents after switching the embedding model, while #13769 improved the backend's identity access in the cut scope. Additionally, fixes such as #13621 ensured that chat tool selections remain preserved across model unloads, and #13730 addressed sliding-window boundary issues with Gemma2 across attention backends. Among new issues, #13696 highlights a critical problem where users are unable to generate output with the Gemma4 e2b model on Windows despite successful execution and training, indicating a potential need for urgent investigation.

#### ✅ Merged PRs
- [#13702](https://github.com/unslothai/unsloth/pull/13702) Studio: re-embed documents after switching the embedding model
- [#13769](https://github.com/unslothai/unsloth/pull/13769) Studio passthrough: read the backend's identity through getattr in the cut scope
- [#13589](https://github.com/unslothai/unsloth/pull/13589) Studio: install the newest audio.cpp release and offer it in updates
- [#13621](https://github.com/unslothai/unsloth/pull/13621) fix(studio): preserve chat tool selections across model unloads
- [#13765](https://github.com/unslothai/unsloth/pull/13765) Format studio/backend/routes/inference.py back to the hook's fixed point
- [#13368](https://github.com/unslothai/unsloth/pull/13368) Studio: deleting a GGUF row no longer deletes other builds at the same quant
- [#13649](https://github.com/unslothai/unsloth/pull/13649) Studio: render numbers wrapped in dollar signs as math, not prices
- [#13620](https://github.com/unslothai/unsloth/pull/13620) Studio: keep the start of an attached file larger than the context window
- [#13637](https://github.com/unslothai/unsloth/pull/13637) Studio: seed the LoRA init with the Random Seed setting
- [#13752](https://github.com/unslothai/unsloth/pull/13752) Studio frontend: raise the startup bundle budget by the measured growth since the last raise
- [#13650](https://github.com/unslothai/unsloth/pull/13650) Studio: ask before a desktop Update stops downloads in progress
- [#13730](https://github.com/unslothai/unsloth/pull/13730) Fix Gemma2 sliding-window boundaries across attention backends
- [#13664](https://github.com/unslothai/unsloth/pull/13664) Studio: let browser panel pages call their own site's API
- [#13622](https://github.com/unslothai/unsloth/pull/13622) Studio: give a killed llama-server time to exit before a reload fails
- [#13743](https://github.com/unslothai/unsloth/pull/13743) Studio: keep a threadless conversation's cut between requests so the prompt cache is reused
- [#13572](https://github.com/unslothai/unsloth/pull/13572) Fix installer warning colors on light backgrounds
- [#13741](https://github.com/unslothai/unsloth/pull/13741) Studio: report prompt cache hits on the Messages and Responses APIs, and ask vLLM and SGLang for them
- [#13630](https://github.com/unslothai/unsloth/pull/13630) Studio: forget deleted audio models once the Hub cache listing updates
- [#13739](https://github.com/unslothai/unsloth/pull/13739) Studio: move the RAG embedder to CPU when its GPU llama-server keeps crashing
- [#12821](https://github.com/unslothai/unsloth/pull/12821) Studio: add an Audio API card to Settings and open it from Audio pages
- [#13727](https://github.com/unslothai/unsloth/pull/13727) Studio: keep mid-conversation Anthropic system messages in place so new sessions reuse the prompt cache
- [#13651](https://github.com/unslothai/unsloth/pull/13651) Studio: keep Start Export off for a Hub push until the repo is named
- [#13660](https://github.com/unslothai/unsloth/pull/13660) Keep the Docker notebooks and the models they save after docker rm
- [#13643](https://github.com/unslothai/unsloth/pull/13643) Keep the residual in Gemma and Gemma2 float32 fast decode
- [#13731](https://github.com/unslothai/unsloth/pull/13731) Studio: open the Images and Audio workflows from the collapsed sidebar rail
- [#13661](https://github.com/unslothai/unsloth/pull/13661) Studio: search for llama.cpp and other file names in the address bar
- [#13652](https://github.com/unslothai/unsloth/pull/13652) Studio: keep a Claude session working after an image on text-only GGUFs
- [#13642](https://github.com/unslothai/unsloth/pull/13642) Decode small 4bit batches with the NF4 GEMV instead of dequantizing every token
- [#13732](https://github.com/unslothai/unsloth/pull/13732) Studio: say why Sandbox High is unavailable when there is nothing to install
- [#13614](https://github.com/unslothai/unsloth/pull/13614) Studio: prevent tooltips from hidden run settings
- [#13636](https://github.com/unslothai/unsloth/pull/13636) Studio: send Gemini the image just attached in a chat full of images
- [#13594](https://github.com/unslothai/unsloth/pull/13594) Compute RMSNorm weight gradient when the norm weight is trainable
- [#13750](https://github.com/unslothai/unsloth/pull/13750) Nudge-retry cancel test: bound the hang, not the runner's speed
- [#13697](https://github.com/unslothai/unsloth/pull/13697) Studio: run native image generation on Vulkan when torch is CPU-only on an AMD or Arc GPU
- [#13698](https://github.com/unslothai/unsloth/pull/13698) Pick the attention backend per device on mixed-generation multi-GPU hosts
- [#13721](https://github.com/unslothai/unsloth/pull/13721) Hybrid packing: keep the varlen forward working after accelerate's unwrap_model (Qwen3.5 / 3.6 GRPO)
- [#13745](https://github.com/unslothai/unsloth/pull/13745) Composer browser simulations: log the browser process on the retry
- [#13538](https://github.com/unslothai/unsloth/pull/13538) MLX: Clef Omni in Unsloth Studio, with audio in the Decision API and decision training
- [#13720](https://github.com/unslothai/unsloth/pull/13720) Studio: default export load to offload_layers=auto
- [#13601](https://github.com/unslothai/unsloth/pull/13601) Studio: search and load large MCP tool catalogs on demand
- [#13744](https://github.com/unslothai/unsloth/pull/13744) Revert "Studio Hub: Newest and Recently updated list more than Unsloth models under Recommended"
- [#13736](https://github.com/unslothai/unsloth/pull/13736) Lint CI: skip .lanes in the whole-tree scans
- [#13695](https://github.com/unslothai/unsloth/pull/13695) Studio (macOS): read the Metal working set from torch when MLX is missing
- [#13694](https://github.com/unslothai/unsloth/pull/13694) Studio installer (AMD, Linux): Vulkan llama.cpp for RDNA 1 and Polaris when ROCm is installed
- [#13740](https://github.com/unslothai/unsloth/pull/13740) Prebuilt CUDA wheels: torch 2.10 for Windows x64
- [#13735](https://github.com/unslothai/unsloth/pull/13735) Studio: show the hovered icon's tooltip when moving between adjacent icons
- [#13665](https://github.com/unslothai/unsloth/pull/13665) Studio: stop Expand thinking from restyling the whole trace
- [#13728](https://github.com/unslothai/unsloth/pull/13728) Lint CI: scan committed files, not the tree the background lanes write into
- [#13722](https://github.com/unslothai/unsloth/pull/13722) Studio: keep the composer draft across chats, pages and tabs
- [#13579](https://github.com/unslothai/unsloth/pull/13579) feat: add compact conversation to the chat menu
- [#13699](https://github.com/unslothai/unsloth/pull/13699) Move the Unsloth Studio MLX pins to mlx-vlm 0.7.8
- [#13632](https://github.com/unslothai/unsloth/pull/13632) Studio Hub: Newest and Recently updated list more than Unsloth models under Recommended
- [#13706](https://github.com/unslothai/unsloth/pull/13706) CI: run the 34 mocked GPU-selection tests, drop dead zoo deselects, print skip reasons
- [#13700](https://github.com/unslothai/unsloth/pull/13700) Studio: use browser Always allow rules during composer Full access
- [#13723](https://github.com/unslothai/unsloth/pull/13723) Studio: keep the browser page background when widening the panel
- [#13645](https://github.com/unslothai/unsloth/pull/13645) Studio: keep the prompt cache for API clients and coding agents
- [#13718](https://github.com/unslothai/unsloth/pull/13718) Studio frontend: raise the startup bundle budget by the measured growth since the last raise
- [#13606](https://github.com/unslothai/unsloth/pull/13606) fix(studio): anchor relative PATH entries during setup
- [#13712](https://github.com/unslothai/unsloth/pull/13712) CI: wait on events instead of fixed sleeps in Playwright smokes, backend tests and Stop Unsloth steps
- [#13711](https://github.com/unslothai/unsloth/pull/13711) CI: let staging repos save dependency caches on upstream-main
- [#13647](https://github.com/unslothai/unsloth/pull/13647) Studio Desktop: keep a maximized window above the Windows taskbar
- [#13708](https://github.com/unslothai/unsloth/pull/13708) Chat UI test: close the stale page browser-side instead of waiting on its renderer
- [#13710](https://github.com/unslothai/unsloth/pull/13710) CI: run lint checks in parallel and overlap independent setup in Windows smoke and Backend CI
- [#13707](https://github.com/unslothai/unsloth/pull/13707) CI: overlap browser installs and cache restores with Install Unsloth in the UI smoke jobs
- [#13709](https://github.com/unslothai/unsloth/pull/13709) CI: cancel a pull request's leftover queued and running runs when it closes
- [#13587](https://github.com/unslothai/unsloth/pull/13587) Train with DeepSpeed ZeRO-2 and ZeRO-3
- [#13609](https://github.com/unslothai/unsloth/pull/13609) Skip the per-layer RoPE stream sync unless the model spans several devices
- [#13619](https://github.com/unslothai/unsloth/pull/13619) Skip xformers FA3 on H100 when the build has no sm_90a kernels
- [#12647](https://github.com/unslothai/unsloth/pull/12647) Fix Voxtral processor saving and Voxtral Realtime training
- [#13628](https://github.com/unslothai/unsloth/pull/13628) Keep the pad embedding row when the tokenizer emits the pad token
- [#13641](https://github.com/unslothai/unsloth/pull/13641) Fix DPO on models split across GPUs with TRL 1.15's fused LM head
- [#13499](https://github.com/unslothai/unsloth/pull/13499) Unsloth Studio: redact the credential after an Authorization scheme in research queries
- [#13704](https://github.com/unslothai/unsloth/pull/13704) CI: bound CodeQL overlay-base cache churn, unstarve the cache janitor
- [#13626](https://github.com/unslothai/unsloth/pull/13626) Studio: add early stopping patience on eval loss
- [#13705](https://github.com/unslothai/unsloth/pull/13705) CI: coalesce main-push runs per workflow so merge bursts stop outrunning the runner pool
- [#13701](https://github.com/unslothai/unsloth/pull/13701) Fix main CI: rewind and Skills strings, token count harness, deep research contract, zoo 2026.10.5 scan baseline
- [#13624](https://github.com/unslothai/unsloth/pull/13624) Pack Qwen3.5 text SFT with the processor, and fix eval_loss on packed text runs
- [#13703](https://github.com/unslothai/unsloth/pull/13703) Studio: Settings dropdowns glow in the pane colour in dark mode
- [#13658](https://github.com/unslothai/unsloth/pull/13658) Studio: let JSON-reply API requests still call their tools on MLX models
- [#13679](https://github.com/unslothai/unsloth/pull/13679) Studio: reorder the chat + menu, with Deep research and Browser use
- [#13659](https://github.com/unslothai/unsloth/pull/13659) Studio: keep SSE MCP servers as SSE when importing a data recipe
- [#13648](https://github.com/unslothai/unsloth/pull/13648) Studio: let read aloud go past 2048 tokens and warn when cut short
- [#13691](https://github.com/unslothai/unsloth/pull/13691) Studio: chat with files citation chips open a PDF at the cited page
- [#13693](https://github.com/unslothai/unsloth/pull/13693) Studio: text #0f1114 in light mode and #fcfcfc in dark, thinking text easier to read
- [#13677](https://github.com/unslothai/unsloth/pull/13677) Studio: removing a composer attachment no longer reloads the others
- [#13676](https://github.com/unslothai/unsloth/pull/13676) Studio: simpler Rewind confirm, skipped for conversation-only rewinds
- [#13692](https://github.com/unslothai/unsloth/pull/13692) Studio: drop the stray divider above a tool's created-files row
- [#13686](https://github.com/unslothai/unsloth/pull/13686) Studio: collapse Chat with files to a row of pills, with Show all
- [#13690](https://github.com/unslothai/unsloth/pull/13690) Declared-polls probe: count only requests this Studio serves
- [#13631](https://github.com/unslothai/unsloth/pull/13631) Keep torch's bundled flash on Blackwell for short documents under UNSLOTH_FLASH_ATTENTION_IMPL=auto
- [#13687](https://github.com/unslothai/unsloth/pull/13687) Studio: Skills pill stays with every skill unticked; its X or the + menu turns Skills off
- [#13635](https://github.com/unslothai/unsloth/pull/13635) Studio: train structured recipe columns as JSON, not as Python dicts
- [#13678](https://github.com/unslothai/unsloth/pull/13678) Studio: one scrolling attachment row in a chat, even spacing above the input
- [#13681](https://github.com/unslothai/unsloth/pull/13681) Studio: Chat with files search row lists its documents, which open in the attachment viewer
- [#13564](https://github.com/unslothai/unsloth/pull/13564) Studio: Windows torch 2.11 kernels from our prebuilt wheels
- [#13689](https://github.com/unslothai/unsloth/pull/13689) Model-config UI test: treat a /validate that never reports its end as a lost event
- [#13390](https://github.com/unslothai/unsloth/pull/13390) Studio: make the first-token waiting limit configurable
- [#13675](https://github.com/unslothai/unsloth/pull/13675) Studio: size the composer to the message column at every width and zoom, and stop clipping thinking text
- [#13669](https://github.com/unslothai/unsloth/pull/13669) Studio: Collapse thinking's chevron points up
- [#13682](https://github.com/unslothai/unsloth/pull/13682) Studio: declare the Hub's /api/engines retry in the log budget
- [#13654](https://github.com/unslothai/unsloth/pull/13654) Studio: Wan2.2-TI2V-5B LoRA training
- [#13618](https://github.com/unslothai/unsloth/pull/13618) Studio: LTX-2.5 defaults follow ComfyUI (hosted INT8-ConvRot DiT, opt-in int8 text encoder)
- [#13657](https://github.com/unslothai/unsloth/pull/13657) End the last gpt-oss training turn with <|return|>, not <|end|>
- [#13672](https://github.com/unslothai/unsloth/pull/13672) Studio UI test: wait for the chat shell to settle, not just the composer

#### 🐛 New Issues
- [#13696](https://github.com/unslothai/unsloth/issues/13696) Unable to generate output with Gemma4 e2b on Windows, despite successful execution and training `feature request` `bug` 💬6
- [#13737](https://github.com/unslothai/unsloth/issues/13737) [Bug] Installer hard-codes PyPI.org instead of respecting PIP_INDEX_URL / UV_INDEX_URL
- [#13788](https://github.com/unslothai/unsloth/issues/13788) [Feature] Add a way to see the exact text snippets or chunks that were loaded into context with RAG `feature request`
- [#13784](https://github.com/unslothai/unsloth/issues/13784) [Bug] Automatic context compaction partially triggers even when it is disabled. `feature request` `bug`
- [#13781](https://github.com/unslothai/unsloth/issues/13781) [Bug] Images: slow generate request is re-sent, producing 4 duplicate images
- [#13775](https://github.com/unslothai/unsloth/issues/13775) [Bug] Audio models arn't showing in the lists. `feature request` `bug`
- [#13766](https://github.com/unslothai/unsloth/issues/13766) [Bug] API call to unload model registers as successful, shows in the log but doesn't actually unload the model `feature request` `bug`
- [#13747](https://github.com/unslothai/unsloth/issues/13747) error using opencode2 `feature request` `bug`
- [#13746](https://github.com/unslothai/unsloth/issues/13746) [Feature] Let chat models generate images and videos with Studio's own diffusion models (built-in tool)
- [#13685](https://github.com/unslothai/unsloth/issues/13685) [Feature] Support external connections for images `feature request`
- [#13688](https://github.com/unslothai/unsloth/issues/13688) Linux tool sandbox rejects bubblewrap on NixOS and under user-namespace launchers
- [#13684](https://github.com/unslothai/unsloth/issues/13684) [Feature] Stream chat responses from external connections `feature request`

#### 🔒 Closed Issues
- [#3013](https://github.com/unslothai/unsloth/issues/3013) [Feature] Voxtral support
- [#4120](https://github.com/unslothai/unsloth/issues/4120) [Feature] Support sample packing with processor-based models
- [#13696](https://github.com/unslothai/unsloth/issues/13696) Unable to generate output with Gemma4 e2b on Windows, despite successful execution and training
- [#9519](https://github.com/unslothai/unsloth/issues/9519) [Bug] Duplicated remote access and lan access on API + Remote & LAN under Settings (bloat)
- [#13655](https://github.com/unslothai/unsloth/issues/13655) [Bug] UI did not transfer from Image Gen mode into Edit Mode (Qwen2.1)
- [#3014](https://github.com/unslothai/unsloth/issues/3014) [Bug] Query Regarding Unsloth Full Finetuning Behavior and Observed Performance/Training Speed Differences
- [#225](https://github.com/unslothai/unsloth/issues/225) Deepspeed Zero3 support
- [#4030](https://github.com/unslothai/unsloth/issues/4030) [Bug] Uneven GPU memory when using DPO on MultiGPU
- [#5133](https://github.com/unslothai/unsloth/issues/5133) [Feature] SCAO-INT8: A low-VRAM 2nd-order optimizer. Potential fit for Unsloth's custom kernels?
- [#4984](https://github.com/unslothai/unsloth/issues/4984) [Model Support] Microsoft's harrier-oss-v1 multilingual text embedding models family
- [#13663](https://github.com/unslothai/unsloth/issues/13663) [Bug] File embedding failure with unsloth/embeddinggemma-2 at indexing text stage
- [#13656](https://github.com/unslothai/unsloth/issues/13656) [Bug] Failure to enable Windows MXC Sandbox, unclear instructions
- [#2798](https://github.com/unslothai/unsloth/issues/2798) Slow inference
- [#2276](https://github.com/unslothai/unsloth/issues/2276) unsloth是否支持类似deepseepd zero的方式
- [#3963](https://github.com/unslothai/unsloth/issues/3963) CUDA error: CUBLAS_STATUS_EXECUTION_FAILED when calling cublasGemmEx (NVIDIA H100 NVL)
- [#4974](https://github.com/unslothai/unsloth/issues/4974) [Feature] Early stopping
- [#3227](https://github.com/unslothai/unsloth/issues/3227) [Doc] Reference vLLM inference known issue in the Troubleshooting section of the documentation
- [#13666](https://github.com/unslothai/unsloth/issues/13666) [Feature] Vulkan fallback for ROCm-unsupported AMD cards in stable-diffusion.cpp
- [#10997](https://github.com/unslothai/unsloth/issues/10997) [Feature] MCP tools lazy loading
- [#13644](https://github.com/unslothai/unsloth/issues/13644) [Bug] wrong text on mouse over after prompt response
- [#13613](https://github.com/unslothai/unsloth/issues/13613) [Bug] New Model Hub filters do not work as expected + suggested improvements
- [#13607](https://github.com/unslothai/unsloth/issues/13607) [Bug] Studio backend update fails after Bash caches relative ./bin/rm
- [#13616](https://github.com/unslothai/unsloth/issues/13616) [Windows] Input box hidden behind taskbar — layout uses full screen height instead of work area

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,136 · **Open issues:** 406 · **Last push:** 5h ago

On October 15, 2026, there were no new releases for AIBrix, but several significant pull requests were merged. Notable updates include the routing of the /v1/images/edits and /v1/chat/completions/batch endpoints through the gateway, alongside critical bug fixes such as maintaining a model's state during pod updates and ensuring accurate scale computation reporting on ScalingActive. Additionally, improvements in CI practices were made by adjusting the smoke test protocol to better handle Envoy data plane readiness. A particularly hot new bug issue was reported regarding default Helm values inadvertently enabling gateway tracing without a collector, which has raised concerns among users.

#### ✅ Merged PRs
- [#3086](https://github.com/vllm-project/aibrix/pull/3086) [Feature] Route /v1/images/edits through the gateway
- [#3085](https://github.com/vllm-project/aibrix/pull/3085) [Bug] Report a failed scale computation on ScalingActive
- [#3084](https://github.com/vllm-project/aibrix/pull/3084) [CI] Wait for the Envoy data plane before port-forwarding in smoke tests
- [#3083](https://github.com/vllm-project/aibrix/pull/3083) [Docs] Remove published gateway discovery proposal
- [#3073](https://github.com/vllm-project/aibrix/pull/3073) [Bug] Keep a model's state when its only pod is updated
- [#2978](https://github.com/vllm-project/aibrix/pull/2978) [API][Feat] Add Continuous ModelWarmup lifecycle
- [#3080](https://github.com/vllm-project/aibrix/pull/3080) [Bug] Keep chart tracing off by default
- [#3070](https://github.com/vllm-project/aibrix/pull/3070) [Feature] Route /v1/chat/completions/batch through the gateway
- [#3066](https://github.com/vllm-project/aibrix/pull/3066) [Bug] Requeue RayClusterFleet reconciles for the progress deadline check
- [#3068](https://github.com/vllm-project/aibrix/pull/3068) [Bug] Record a Batch cancellation accepted before the runtime session starts
- [#3023](https://github.com/vllm-project/aibrix/pull/3023) [Bug] Stop rewriting PodAutoscaler status on every reconcile
- [#3064](https://github.com/vllm-project/aibrix/pull/3064) [Misc] Split gateway routing algorithms into least, prefixcache and pd/router packages
- [#3063](https://github.com/vllm-project/aibrix/pull/3063) [Docs] Split the vLLM-Omni page into multi-modal serving guides

#### 🐛 New Issues
- [#3079](https://github.com/vllm-project/aibrix/issues/3079) [Bug] Default Helm values enable gateway tracing without a collector `kind/bug` `area/gateway` `area/website` `area/installation` 💬3
- [#3067](https://github.com/vllm-project/aibrix/issues/3067) [Bug] A Batch cancellation accepted before the runtime session starts finishes the job as completed `kind/bug` `area/website` `area/runtime` `area/batch` 💬3
- [#3081](https://github.com/vllm-project/aibrix/issues/3081) [Docs] Remove the gateway model-list discovery proposal from published documentation `area/gateway` `kind/feature` `area/website` 💬2
- [#3075](https://github.com/vllm-project/aibrix/issues/3075) [Bug] A Batch cancellation during live input validation is rejected with HTTP 409 `kind/bug` `area/website` `area/batch` 💬2
- [#3087](https://github.com/vllm-project/aibrix/issues/3087) [Bug] Gateway swallows ext_proc Send error when model is empty `kind/bug` `area/gateway` 💬1
- [#3082](https://github.com/vllm-project/aibrix/issues/3082) [Bug] KPA panic mode never holds replicas and reports idle workloads as panic `kind/bug` `area/orchestration` 💬1
- [#3074](https://github.com/vllm-project/aibrix/issues/3074) [Bug] A recovered Batch job past its window with no execution metadata never finishes expiring `kind/bug` `area/batch` 💬1
- [#3071](https://github.com/vllm-project/aibrix/issues/3071) [Bug] KV event sync never matches engine-reported prefixes with the default block size `area/gateway` `kind/misc` 💬1

#### 🔒 Closed Issues
- [#3079](https://github.com/vllm-project/aibrix/issues/3079) [Bug] Default Helm values enable gateway tracing without a collector
- [#2992](https://github.com/vllm-project/aibrix/issues/2992) [Gateway] Reject PD routing for unsupported inference endpoints
- [#3067](https://github.com/vllm-project/aibrix/issues/3067) [Bug] A Batch cancellation accepted before the runtime session starts finishes the job as completed
- [#3065](https://github.com/vllm-project/aibrix/issues/3065) [Bug] RayClusterFleet never requeues for its progress deadline, so stalled rollouts are not marked failed on time
- [#3081](https://github.com/vllm-project/aibrix/issues/3081) [Docs] Remove the gateway model-list discovery proposal from published documentation
- [#3053](https://github.com/vllm-project/aibrix/issues/3053) [Bug] Batch jobs in a local metastore are unreachable after upgrading from v0.7.0 to v0.8.0

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,168 · **Open issues:** 654 · **Last push:** 2h ago

On October 15, 2026, there were no new releases for the Semantic Router. However, several important issues were addressed through merged pull requests, including improvements to end-to-end coverage for the complexity signal, a fix for accepting vLLM's integer error code in chat stream decoding, and enhancements to memory handling in Qdrant write metrics. Notably, a new bug was reported regarding the vllm-sr CLI's unconditional import of `fcntl`, which prevents it from starting on Windows. Other significant issues raised include a feature request for a more efficient model runtime with packed variable-length forwards and device-class batch limits, along with a bug affecting the router's handling of client's gzip preferences.

#### ✅ Merged PRs
- [#4379](https://github.com/vllm-project/semantic-router/pull/4379) [Test] Add E2E coverage for the complexity signal
- [#4901](https://github.com/vllm-project/semantic-router/pull/4901) [Bug] Accept vLLM's integer error code in Chat stream decoding
- [#5029](https://github.com/vllm-project/semantic-router/pull/5029) [Bug] Escape Milvus memory IDs and harden Qdrant write metrics
- [#5009](https://github.com/vllm-project/semantic-router/pull/5009) [Bug] Charge the graph budget only with memory captures take
- [#4889](https://github.com/vllm-project/semantic-router/pull/4889) Fix/3430 pr4421 review fixes
- [#4900](https://github.com/vllm-project/semantic-router/pull/4900) [Test] Prove the dashboard status and diagnostics journeys as behavior

#### 🐛 New Issues
- [#5093](https://github.com/vllm-project/semantic-router/issues/5093) [Bug] The vllm-sr CLI imports fcntl unconditionally, so it cannot start on Windows `needs-acceptance` `wg/developer-experience-ecosystem` 💬1
- [#5079](https://github.com/vllm-project/semantic-router/issues/5079) [Feature] Model runtime: lanes, packed variable-length forwards, faster images and device-class batch limits for Decision 3.0 `enhancement` `accepted` `in-progress` `wg/router-models-inference-runtime` 💬1
- [#5105](https://github.com/vllm-project/semantic-router/issues/5105) [Feature] Validate wire JSON in one pass instead of re-reading each body three times `needs-acceptance` `wg/data-plane-networking`
- [#5099](https://github.com/vllm-project/semantic-router/issues/5099) [Bug] Router overrides the client's gzip preference with accept-encoding: identity `needs-acceptance` `wg/data-plane-networking`
- [#5097](https://github.com/vllm-project/semantic-router/issues/5097) [Bug] A provider field repeated on every stream chunk is diagnosed once per chunk, inflating the lossiness metric and crowding out late diagnostics `needs-acceptance` `wg/data-plane-networking`
- [#5090](https://github.com/vllm-project/semantic-router/issues/5090) [Feature] Router: accept only a same-release model runtime and check public System One options `enhancement` `wg/router-models-inference-runtime`
- [#5095](https://github.com/vllm-project/semantic-router/issues/5095) [CI/Build] pkg/inflight declares an RWMutex it never reads with, the convoy shape #4682 removed elsewhere `needs-acceptance` `wg/data-plane-networking`
- [#5081](https://github.com/vllm-project/semantic-router/issues/5081) [Bug] Local rate limiter burns quota from earlier buckets when a later bucket denies the request `needs-acceptance` `wg/data-plane-networking`
- [#5080](https://github.com/vllm-project/semantic-router/issues/5080) [Bug] Responses store: in-memory conversation chain traversal loops forever on cyclic previous_response_id `needs-acceptance` `wg/data-plane-networking`

#### 🔒 Closed Issues
- [#3430](https://github.com/vllm-project/semantic-router/issues/3430) [Bug] Remove unused in-repo functions, constants, and orphan tests
- [#5047](https://github.com/vllm-project/semantic-router/issues/5047) [CI/Build] valkey-glide has no Windows library, so the Windows build cannot complete
- [#4992](https://github.com/vllm-project/semantic-router/issues/4992) [Bug] router_latency parity counts inputs that failed on both sides as agreement
- [#4860](https://github.com/vllm-project/semantic-router/issues/4860) [Bug] Chat stream decoding rejects vLLM's integer error code, so clients never see vLLM's error
- [#4984](https://github.com/vllm-project/semantic-router/issues/4984) [Bug] Strict recipe validation accepts decision signal references with surrounding whitespace
- [#4887](https://github.com/vllm-project/semantic-router/issues/4887) [Bug] router_latency run loses the whole measurement when a request fails at the connection level
- [#4991](https://github.com/vllm-project/semantic-router/issues/4991) [Bug] router_latency run crashes on portless URLs and empty corpora
- [#5090](https://github.com/vllm-project/semantic-router/issues/5090) [Feature] Router: accept only a same-release model runtime and check public System One options

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*