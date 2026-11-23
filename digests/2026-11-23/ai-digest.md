# 📡 AI Ecosystem Digest — 2026-11-23

> Generated 2026-11-23 03:32 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 156,718 | 23 | 0 | 0 | 0 |
| [OpenAI Codex](https://github.com/openai/codex) | 136,165 | 12 | 10 | 30 | 0 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 109,007 | 0 | 0 | 0 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,455 | 3 | 10 | 0 | 1 |
| [OpenCode](https://github.com/anomalyco/opencode) | 228,644 | 34 | 15 | 6 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 30,876 | 23 | 11 | 4 | 2 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 395,067 | 138 | 68 | 182 | 1 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 265,465 | 18 | 6 | 0 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 97,371 | 28 | 3 | 27 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 38,952 | 13 | 17 | 22 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 136,149 | 24 | 24 | 21 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 187,899 | 6 | 2 | 1 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 63,726 | 12 | 12 | 61 | 0 |
| [Unsloth](https://github.com/unslothai/unsloth) | 80,002 | 10 | 8 | 127 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,198 | 4 | 12 | 9 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,518 | 9 | 11 | 7 | 0 |

---

## ✨ Highlights

- **Gemini CLI** released [v0.71.0-nightly.20261123.geecccfcd5](https://github.com/google-gemini/gemini-cli/releases) with the latest updates.
- **Qwen Code** also had a notable release, [desktop-v0.28.4](https://github.com/QwenLM/qwen-code/releases), improving its desktop functionalities.
- A critical bug has been reported in **OpenClaw** as issue [#203876](https://github.com/openclaw/openclaw/issues/203876), detailing ongoing problems with the xAI Talk integration, drawing 11 comments.
- An issue with **OpenAI Codex**, [#63242](https://github.com/openai/codex/issues/63242), highlights a significant bug impacting Windows desktop tool availability during long threads, attracting 2 comments.
- **Ollama** is facing a potentially critical issue with its transfer process as detailed in [#19841](https://github.com/ollama/ollama/issues/19841), which has garnered attention with 2 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 156,718 · **Open issues:** 16,040 · **Last push:** 4h ago

On November 23, 2026, there were no new releases or merged pull requests for Claude Code, indicating a routine maintenance day. However, several significant new issues were reported, including a critical bug (#111755) where a destructive PowerShell command unintentionally deleted user profile directories due to an unvalidated read-only variable. Other notable issues include problems with the Desktop app on macOS (#111720) where the mod backdrop only appears behind non-active chats, and unresponsiveness of ESC and Ctrl+C in the CLI on Windows (#111754). Additionally, users have raised concerns about increased usage limits compounding faster than before (#111759), highlighting ongoing challenges in the platform's performance and stability.

#### 🐛 New Issues
- [#111720](https://github.com/anthropics/claude-code/issues/111720) [BUG] Desktop (macOS): mod backdrop draws only behind the non-active chat; a single chat never shows it `bug` `platform:macos` `area:desktop` 💬2
- [#111757](https://github.com/anthropics/claude-code/issues/111757) [BUG] UserPromptSubmit hooks don't receive current model state via environment `bug` 💬1
- [#111754](https://github.com/anthropics/claude-code/issues/111754) [Bug] ESC and Ctrl+C unresponsive in Claude Code CLI on Windows Terminal `bug` `platform:windows` `area:tui` 💬1
- [#111752](https://github.com/anthropics/claude-code/issues/111752) [BUG] VS Code Remote-SSH: session switch re-renders every tool row via engine_ui_render, one per round trip (since 2026-11-12) `bug` `platform:linux` `platform:vscode` `area:vscode` 💬1
- [#111761](https://github.com/anthropics/claude-code/issues/111761) [BUG] Desktop: worktree sessions start MCP servers in the main checkout and ignore the worktree's .mcp.json `bug` `has repro` `platform:windows` `area:mcp`
- [#111760](https://github.com/anthropics/claude-code/issues/111760) The new Create Project only creates projects in Threads `invalid`
- [#111759](https://github.com/anthropics/claude-code/issues/111759) [BUG] 5-hour usage limit fills about 2x faster than before for similar workloads `bug` `platform:windows` `platform:macos` `area:cost`
- [#111758](https://github.com/anthropics/claude-code/issues/111758) [BUG] Windows Desktop: every Code session hangs at initialization after a system crash (CLI works fine standalone) `bug` `platform:windows` `regression` `area:desktop`
- [#111756](https://github.com/anthropics/claude-code/issues/111756) the composer in the new project beta will not let you paste more then one image… `bug` `platform:windows` `area:desktop`
- [#111755](https://github.com/anthropics/claude-code/issues/111755) Destructive Remove-Item -Recurse -Force ran on $HOME via unvalidated read-only PowerShell variable, deleting user profile dirs `bug` `platform:windows` `area:tools` `area:permissions`
- [#111753](https://github.com/anthropics/claude-code/issues/111753) Opus 5.5 hallucinates limitations and states them as fact `bug` `area:model`
- [#111751](https://github.com/anthropics/claude-code/issues/111751) When a session reaches 200k tokens Opus 5.5 ignores the context `bug` `area:model`
- [#111750](https://github.com/anthropics/claude-code/issues/111750) Ctrl+C and Escape are overloaded, so clearing the prompt or closing a view interrupts a running turn and loses work `enhancement` `platform:linux` `area:tui` `keybindings`
- [#111749](https://github.com/anthropics/claude-code/issues/111749) Opus 5.5 loses quality after the context is compacted twice in one session `bug` `area:model`
- [#111748](https://github.com/anthropics/claude-code/issues/111748) Opus 5.5 states the cause of a bug without checking it `bug` `area:model`
- [#111747](https://github.com/anthropics/claude-code/issues/111747) Opus 5.5 leaves parts of a finished task undone and later lists the task as still missing `bug` `area:model`
- [#111746](https://github.com/anthropics/claude-code/issues/111746) Opus 5.5 delivers part of a task and lets it pass as complete `bug` `area:model`
- [#111745](https://github.com/anthropics/claude-code/issues/111745) [FEATURE] `invalid`
- [#111744](https://github.com/anthropics/claude-code/issues/111744) Opus 5.5 reports a fix as done while it still contradicts the reference captures it collected `bug` `area:model`
- [#111743](https://github.com/anthropics/claude-code/issues/111743) Max plan: unexpired limit resets (which cover Claude Code usage) removed without redemption — 3+ accounts affected, no support path `invalid`
- [#111742](https://github.com/anthropics/claude-code/issues/111742) [FEATURE] Warn when an env var is set in a settings file that ignores it (e.g. CLAUDE_CODE_EXPERIMENTAL_CODE_MODE in project/local settings) `enhancement` `area:core`
- [#111741](https://github.com/anthropics/claude-code/issues/111741) Claude refuses Shopify's published test payment values on a development store, because its checkout only runs hosted `enhancement` `area:model` `area:chrome`
- [#111740](https://github.com/anthropics/claude-code/issues/111740) [Bug] Safeguard blocks academic literature search on binding residue prediction `bug` `platform:windows` `area:model`

### OpenAI Codex (`openai/codex`)

**Stars:** 136,165 · **Open issues:** 28,298 · **Last push:** <1h ago

On November 23, 2026, there were no new releases for OpenAI Codex; however, several significant changes were merged into the codebase. Key improvements include update #63211, which enables automatic resumption of disconnected cloud conversations in the terminal user interface (TUI), and #63208, which adds creation-time sorting to the Command Center search. Additionally, MRs like #63192 introduce deferred numbered TUI questions during active input, enhancing user experience. Among new issues, #63222 highlights a critical bug with partial configuration overrides resulting in invalid transport errors during settings saves, drawing attention to potential data handling concerns.

#### ✅ Merged PRs
- [#63241](https://github.com/openai/codex/pull/63241) Avoid eager copies of plugin startup HTTP response bodies
- [#63237](https://github.com/openai/codex/pull/63237) Preserve mentions in cloud conversation transcripts
- [#63235](https://github.com/openai/codex/pull/63235) Simplify eviction in the log ring buffer
- [#63233](https://github.com/openai/codex/pull/63233) Render flushed TUI input in the same frame
- [#63219](https://github.com/openai/codex/pull/63219) Exclude per-item usage attribution by default
- [#63218](https://github.com/openai/codex/pull/63218) Keep turn diff updates out of the TUI replay buffer
- [#63211](https://github.com/openai/codex/pull/63211) Automatically resume disconnected cloud conversations in the TUI
- [#63208](https://github.com/openai/codex/pull/63208) Add creation-time sorting to Command Center search
- [#63196](https://github.com/openai/codex/pull/63196) Keep streamed output visible until inline history is repainted
- [#63195](https://github.com/openai/codex/pull/63195) Honor tmux mouse changes while the TUI is in alternate screen
- [#63194](https://github.com/openai/codex/pull/63194) Keep streamed TUI answers intact when notices interrupt them
- [#63193](https://github.com/openai/codex/pull/63193) Discard TUI typeahead after prompt rewind and fork
- [#63192](https://github.com/openai/codex/pull/63192) Defer numbered TUI questions during active input
- [#63191](https://github.com/openai/codex/pull/63191) Keep terminal background colors when foreground replies are missing
- [#63189](https://github.com/openai/codex/pull/63189) Widen sidebar tab close targets in the TUI
- [#63188](https://github.com/openai/codex/pull/63188) Extract TUI side conversation navigation hints
- [#63184](https://github.com/openai/codex/pull/63184) Let Codex open workspace files in the terminal sidebar
- [#63176](https://github.com/openai/codex/pull/63176) Refresh terminal tips and show configured leader and agent shortcuts
- [#63175](https://github.com/openai/codex/pull/63175) Reuse runtime-authenticated Responses WebSockets
- [#63174](https://github.com/openai/codex/pull/63174) Update `url` to 2.5.9 and `form_urlencoded` to 1.2.3
- [#63171](https://github.com/openai/codex/pull/63171) Fix account refresh for new cloud sessions
- [#63169](https://github.com/openai/codex/pull/63169) Increase Linux voice callback periods at 48 kHz
- [#63152](https://github.com/openai/codex/pull/63152) Preserve the host terminal's cursor shape in default TUI sessions
- [#63151](https://github.com/openai/codex/pull/63151) Count wide-character wraps when inserting TUI history
- [#63146](https://github.com/openai/codex/pull/63146) Show task loading progress in the docked agent command center
- [#63145](https://github.com/openai/codex/pull/63145) Keep task status visible and fix paging in the agent command center
- [#63102](https://github.com/openai/codex/pull/63102) Show a loading indicator while the resume picker starts
- [#63089](https://github.com/openai/codex/pull/63089) Prevent TUI startup hangs when a launcher restores blocking input
- [#63088](https://github.com/openai/codex/pull/63088) Fix linked worktree hook loading when the root `.codex` is a file
- [#63085](https://github.com/openai/codex/pull/63085) Preserve fenced code source in TUI transcript copy mode

#### 🐛 New Issues
- [#63222](https://github.com/openai/codex/issues/63222) Profile with a partial [mcp_servers.<name>] override loads, but every config save (trust, /model) fails with "invalid transport" `bug` `mcp` `CLI` `config` 💬2
- [#63242](https://github.com/openai/codex/issues/63242) [Windows Desktop] Long thread loses tool availability and ends turns prematurely `bug` `model-behavior` `windows-os` `context` 💬2
- [#63248](https://github.com/openai/codex/issues/63248) Move Codex chats and their context across projects and execution environments `enhancement` `app` `session` `remote` 💬1
- [#63246](https://github.com/openai/codex/issues/63246) Bug] macOS Codex Desktop — Model selector missing and Send permanently disabled `bug` `app` `app-server` 💬1
- [#63249](https://github.com/openai/codex/issues/63249) [macOS] ChatGPT Desktop crashes in CFUUIDCreateString around Screens virtual display changes `bug` `app`
- [#63247](https://github.com/openai/codex/issues/63247) [macOS + iOS Remote] Two desktop projects sharing a local folder are merged on iOS `bug` `iOS` `session` `remote`
- [#63245](https://github.com/openai/codex/issues/63245) Integrate the sidebar usage indicator into the profile avatar `enhancement` `rate-limits` `app`
- [#63243](https://github.com/openai/codex/issues/63243) [Windows] Codex secondary sidebar fails with renderer_ready_timeout in 26.1117.41037 `bug` `windows-os` `extension`
- [#63239](https://github.com/openai/codex/issues/63239) Preserve the existing session when /cd changes the working directory `bug` `CLI` `session` `remote`
- [#63240](https://github.com/openai/codex/issues/63240) macOS Desktop: thread switching is about 1.7× slower when the app is started with --remote-debugging-port, with no DevTools client attached `bug` `app` `performance`
- [#63229](https://github.com/openai/codex/issues/63229) [P1][Data loss] Archive and unarchive can overwrite existing rollout files with the same name `bug` `session`
- [#63238](https://github.com/openai/codex/issues/63238) [macOS desktop] New chat from a custom sidebar section appears under its local project `bug` `app` `session`

#### 🔒 Closed Issues
- [#37754](https://github.com/openai/codex/issues/37754) TUI resume fails: list_turns is not supported yet
- [#37769](https://github.com/openai/codex/issues/37769) Windows Terminal detection via WT_SESSION changes TUI background from white to black
- [#39970](https://github.com/openai/codex/issues/39970) TUI hangs indefinitely on Working with tui_app_server enabled, while --disable tui_app_server works normally on 0.149.0
- [#63059](https://github.com/openai/codex/issues/63059) [Windows Desktop] "Approve for me" selected, but sandbox_approval=false blocks Git writes and permission escalation
- [#38002](https://github.com/openai/codex/issues/38002) [Windows] Ctrl+T transcript view corrupts soft-wrapped CJK/Latin text after scrolling
- [#22109](https://github.com/openai/codex/issues/22109) TUI history and live assistant output can diverge from terminal wrapping at the right edge
- [#34424](https://github.com/openai/codex/issues/34424) CLI TUI: U+0040 in scoped npm package names can hide responses and appear to rewind transcript
- [#34480](https://github.com/openai/codex/issues/34480) CLI resume truncates tail of last assistant message while VS Code shows full response (0.144.6, macOS)
- [#34587](https://github.com/openai/codex/issues/34587) Windows: repository-specific TUI escape-sequence leakage persists (like [A [201) still happens in codex-cli 0.145.0
- [#33422](https://github.com/openai/codex/issues/33422) Apple Terminal + tmux: diff background blocks render as solid yellow instead of red/green

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 109,007 · **Open issues:** 728 · **Last push:** 2h ago

On November 23, 2026, the Gemini CLI saw the release of version v0.71.0-nightly.20261123.geecccfcd5, which includes several enhancements and fixes documented in the full changelog available on their GitHub repository. There were no merged pull requests or new issues reported in the last 24 hours, indicating a day of routine maintenance without significant updates or challenges. Overall, the focus was primarily on the latest nightly release, providing developers with incremental improvements for their ongoing projects.

#### 🚀 New Releases
- [v0.71.0-nightly.20261123.geecccfcd5](https://github.com/google-gemini/gemini-cli/releases/tag/v0.71.0-nightly.20261123.geecccfcd5) Release v0.71.0-nightly.20261123.geecccfcd5

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,455 · **Open issues:** 2,175 · **Last push:** <1h ago

On November 23, 2026, GitHub Copilot CLI updated to version 1.0.115-7, featuring a fix that allows clients using the `--ui-server` option to attach to resumed CLI sessions as soon as the server is ready, and addressing an issue where stopping an npm-installed Copilot CLI during startup would leave the process running in the background. No new pull requests were merged in the last 24 hours. However, three notable new issues emerged, including #5551, which reports that image generation is unavailable in `copilot --acp` sessions, and #5552, which highlights that the cloud sandbox session fails to reconnect after a tool call due to a "Live connection unavailable" error.

#### 🚀 New Releases
- [v1.0.115-7](https://github.com/github/copilot-cli/releases/tag/v1.0.115-7) 1.0.115-7

#### 🐛 New Issues
- [#5551](https://github.com/github/copilot-cli/issues/5551) Image generation is never available in `copilot --acp` sessions 💬1
- [#5553](https://github.com/github/copilot-cli/issues/5553) GitHub Mobile (Android): cloud session drops when app is backgrounded or idle 2-3 min; Retry often fails until app restart `triage`
- [#5552](https://github.com/github/copilot-cli/issues/5552) Cloud sandbox session never reconnects after a tool call: "Live connection unavailable", retry always fails `triage`

#### 🔒 Closed Issues
- [#1851](https://github.com/github/copilot-cli/issues/1851) Show context window size (tokens) in /model command alongside premium request multiplier
- [#4035](https://github.com/github/copilot-cli/issues/4035) Voice installer fails: tries private Azure Artifacts feed causing 401 for Microsoft.AI.Foundry.Local.Core 1.2.3
- [#4637](https://github.com/github/copilot-cli/issues/4637) Avoid duplicate skill lookup for slash-invoked skills with disable-model-invocation
- [#1963](https://github.com/github/copilot-cli/issues/1963) Choosing "Accept plan and build on default permissions" sometimes do not make the agent start implementing the plan
- [#5309](https://github.com/github/copilot-cli/issues/5309) Misleading model_not_supported error after content-filter response
- [#5551](https://github.com/github/copilot-cli/issues/5551) Image generation is never available in `copilot --acp` sessions
- [#5043](https://github.com/github/copilot-cli/issues/5043) Ask user attestation is cancel unwillingly when Ctrl+Shift+C to copy in Herdr
- [#4595](https://github.com/github/copilot-cli/issues/4595) fetch_copilot_cli_documentation fails with ENOENT: README.md is declared in files[] but absent from released platform tarballs
- [#4581](https://github.com/github/copilot-cli/issues/4581) Support image generation for developer assets (icons, favicons, logos, OG images)
- [#3601](https://github.com/github/copilot-cli/issues/3601) Bash tool drops non-ASCII characters due to LC_CTYPE=C in shell environment

### OpenCode (`anomalyco/opencode`)

**Stars:** 228,644 · **Open issues:** 4,087 · **Last push:** <1h ago

In a routine maintenance update from OpenCode, no new releases were made in the last 24 hours. Significant progress was achieved with several merged pull requests, including a fix for opening files in the server's home folder (#65689), a performance enhancement using strobe 0.44.1 (#65691), and a refactor of media tools to be more explicitly named as generate_image and generate_video (#65682). Additionally, video generation has been turned on by default (#65664), which could enhance user experience. However, a notably concerning new issue was reported regarding a crashing and limit problem (#65652), which has already garnered attention from the community.

#### ✅ Merged PRs
- [#65689](https://github.com/anomalyco/opencode/pull/65689) fix(app): open ~ file links in the server's home folder
- [#65691](https://github.com/anomalyco/opencode/pull/65691) chore(perf): bench with strobe 0.44.1
- [#65682](https://github.com/anomalyco/opencode/pull/65682) refactor(core): rename the media tools to generate_image and generate_video
- [#65687](https://github.com/anomalyco/opencode/pull/65687) fix(core): pin websearch in the Code Mode catalog
- [#65673](https://github.com/anomalyco/opencode/pull/65673) fix(core): skip an oversized MCP event instead of pausing its watch
- [#65664](https://github.com/anomalyco/opencode/pull/65664) feat(core): turn on video generation by default

#### 🐛 New Issues
- [#65652](https://github.com/anomalyco/opencode/issues/65652) crashing and limit problem `pending close` `triaging` `type/support` 💬9
- [#65590](https://github.com/anomalyco/opencode/issues/65590) mcp: remote servers with >61 tools are silently truncated `type/bug` `area/mcp` `version/v2` `platform/linux` 💬9
- [#65596](https://github.com/anomalyco/opencode/issues/65596) tui: OSC 7501 reports never reach herdr-core (Herdr app), even while a turn runs `type/bug` `area/tui` `version/v2` `platform/macos` 💬4
- [#65637](https://github.com/anomalyco/opencode/issues/65637) persistent-pty: repeated WS takeover connect/disconnect cycles degrade input delivery after ~25–30 cycles; replay buffer dies without a proper close frame `type/bug` `area/sdk-api` `version/v2` `platform/windows` 💬4
- [#65578](https://github.com/anomalyco/opencode/issues/65578) [FEATURE]:Please Bring Back the Custom Provider Option in OpenCode V2 Desktop `pending close` `triaging` `type/feature` `area/desktop` 💬4
- [#65645](https://github.com/anomalyco/opencode/issues/65645) what 's this `type/support` `inference/free-tier` `platform/windows` 💬3
- [#65643](https://github.com/anomalyco/opencode/issues/65643) 安排自动压缩上下文没办法实现 `triaging` `type/support` `area/core` 💬3
- [#65685](https://github.com/anomalyco/opencode/issues/65685) agent: ignored instructions, deleted registry keys, provider config, and launched apps without approval `type/feature` `area/core` `version/v2` `platform/windows` 💬2
- [#65681](https://github.com/anomalyco/opencode/issues/65681) mobile: prompt bar overlaps 3-button navigation when keyboard is closed `type/bug` `area/mobile` `platform/android` 💬2
- [#65587](https://github.com/anomalyco/opencode/issues/65587) app: four notification switches have no accessible name `reproduced` `type/bug` `area/web` `version/v2` 💬2
- [#65585](https://github.com/anomalyco/opencode/issues/65585) [FEATURE]: `triaging` `type/feature` 💬2
- [#65586](https://github.com/anomalyco/opencode/issues/65586) vcs: branch lists omit valid names ending in /HEAD `reproduced` `type/bug` `area/core` `version/v2` 💬2
- [#65568](https://github.com/anomalyco/opencode/issues/65568) Desktop: Plugins or features break after an in-place upgrade, especially from V1 to V2 `triaging` `type/bug` `area/desktop` `version/v2` 💬2
- [#65566](https://github.com/anomalyco/opencode/issues/65566) Desktop: OpenCode becomes unresponsive on a low-spec Windows 10 computer `triaging` `type/bug` `area/desktop` `version/v2` 💬2
- [#65688](https://github.com/anomalyco/opencode/issues/65688) 请开通 `type/support` 💬1
- [#65686](https://github.com/anomalyco/opencode/issues/65686) [FEATURE]: a right-click menu in the desktop terminal (Copy, Paste, Select All, Find) 💬1
- [#65677](https://github.com/anomalyco/opencode/issues/65677) Toasts cover the composer's Send button in a narrow window `reproduced` 💬1
- [#65680](https://github.com/anomalyco/opencode/issues/65680) tui: expandable background-activity panel showing per-child tool and elapsed time `type/feature` `area/tui` `version/v2` 💬1
- [#65672](https://github.com/anomalyco/opencode/issues/65672) Feature Request: Improve Transparency of Free Usage Limits and Recovery Problem `type/feature` `inference/free-tier` 💬1
- [#65668](https://github.com/anomalyco/opencode/issues/65668) Windows: terminal echo takes ~50 ms per key (opencode-pty polls every 25 ms) 💬1
- [#65666](https://github.com/anomalyco/opencode/issues/65666) Shift+PageUp / Shift+Home don't scroll the terminal back `status/repro-plausible` 💬1
- [#65662](https://github.com/anomalyco/opencode/issues/65662) Windows: Ctrl+C does not stop a program in a desktop terminal tab `status/repro-plausible` 💬1
- [#65659](https://github.com/anomalyco/opencode/issues/65659) Windows: an open file inside a folder never reloads when it changes on disk `status/repro-plausible` 💬1
- [#65655](https://github.com/anomalyco/opencode/issues/65655) Windows: a multi-line paste into the terminal sends CR LF for each line break `status/repro-plausible` 💬1
- [#65653](https://github.com/anomalyco/opencode/issues/65653) Ctrl+Shift+. (Cycle agent backwards) does nothing on a US keyboard `status/repro-plausible` 💬1
- [#65651](https://github.com/anomalyco/opencode/issues/65651) TUI plugin cannot replace the composer subagent picker; down overrides and a session panel both fall short `type/feature` `area/plugins` `version/v2` `platform/linux` 💬1
- [#65640](https://github.com/anomalyco/opencode/issues/65640) codemode: freeform stringParameter and inputProperties fail to resolve $ref schemas `type/bug` `status/repro-simulated` `area/core` `version/v2` 💬1
- [#65638](https://github.com/anomalyco/opencode/issues/65638) Windows: tool rows show absolute paths when the path uses / or another drive letter case `status/repro-plausible` 💬1
- [#65632](https://github.com/anomalyco/opencode/issues/65632) [FEATURE]: ACP: support session/options for pre-session model discovery `type/feature` `area/ide-acp` `version/v2` `platform/windows` 💬1
- [#65628](https://github.com/anomalyco/opencode/issues/65628) BUG: I have serious Local LLM Issues with Open Code connected to LM Studio! `type/support` `area/core` `version/v2` `platform/windows` 💬1
- [#65616](https://github.com/anomalyco/opencode/issues/65616) acp: usage_update cost leaves out subagent sessions `type/bug` `status/repro-simulated` `area/ide-acp` `version/v2` 💬1
- [#65614](https://github.com/anomalyco/opencode/issues/65614) Plugin RPC methods without an input or output schema crash the server `type/bug` `area/plugins` `version/v2` `platform/windows` 💬1
- [#65612](https://github.com/anomalyco/opencode/issues/65612) [FEATURE]: Login page CAPTCHA blocks legitimate users from authenticating `type/support` `area/auth` 💬1
- [#65605](https://github.com/anomalyco/opencode/issues/65605) fix(core): changed-context notice wording is ambiguous ("supersedes") `type/feature` `area/core` `version/v2` 💬1

#### 🔒 Closed Issues
- [#65590](https://github.com/anomalyco/opencode/issues/65590) mcp: remote servers with >61 tools are silently truncated
- [#65496](https://github.com/anomalyco/opencode/issues/65496) [BUG]: RAM Usage Through the Roof
- [#65596](https://github.com/anomalyco/opencode/issues/65596) tui: OSC 7501 reports never reach herdr-core (Herdr app), even while a turn runs
- [#65578](https://github.com/anomalyco/opencode/issues/65578) [FEATURE]:Please Bring Back the Custom Provider Option in OpenCode V2 Desktop
- [#65645](https://github.com/anomalyco/opencode/issues/65645) what 's this
- [#58428](https://github.com/anomalyco/opencode/issues/58428) [FEATURE]: Web Push notifications for paired browsers
- [#65585](https://github.com/anomalyco/opencode/issues/65585) [FEATURE]:
- [#65568](https://github.com/anomalyco/opencode/issues/65568) Desktop: Plugins or features break after an in-place upgrade, especially from V1 to V2
- [#65566](https://github.com/anomalyco/opencode/issues/65566) Desktop: OpenCode becomes unresponsive on a low-spec Windows 10 computer
- [#65688](https://github.com/anomalyco/opencode/issues/65688) 请开通
- [#65672](https://github.com/anomalyco/opencode/issues/65672) Feature Request: Improve Transparency of Free Usage Limits and Recovery Problem
- [#65638](https://github.com/anomalyco/opencode/issues/65638) Windows: tool rows show absolute paths when the path uses / or another drive letter case
- [#65628](https://github.com/anomalyco/opencode/issues/65628) BUG: I have serious Local LLM Issues with Open Code connected to LM Studio!
- [#65614](https://github.com/anomalyco/opencode/issues/65614) Plugin RPC methods without an input or output schema crash the server
- [#65612](https://github.com/anomalyco/opencode/issues/65612) [FEATURE]: Login page CAPTCHA blocks legitimate users from authenticating

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 30,876 · **Open issues:** 2,534 · **Last push:** <1h ago

On November 23, 2026, Qwen Code released version 0.28.4, introducing a new workspace artifact library page in Web Shell local daemon mode, alongside enhancements to the Web Shell chat with a shared ChatSurface and mobile layout fixes. Key merged changes included performance optimizations to compact inline memory prompts and a fix to prefer healthy system resources over bundled binaries. Notable new issues reported include a follow-up on syncing sidebar hover-status design documents and a deflake on the interactive TUI agent loop test, indicating ongoing challenges in robustness for the integration tests. Overall, the day reflects steady innovation amidst routine development efforts, underscored by a concerted focus on user interface refinement and reliability.

#### 🚀 New Releases
- [v0.28.4](https://github.com/QwenLM/qwen-code/releases/tag/v0.28.4) Release v0.28.4
- [desktop-v0.28.4](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.28.4) Qwen Code Desktop v0.28.4

#### ✅ Merged PRs
- [#17789](https://github.com/QwenLM/qwen-code/pull/17789) perf(core): compact the inline memory and first-request prompts
- [#17698](https://github.com/QwenLM/qwen-code/pull/17698) fix(core): prefer a healthy system rg over the bundled binary
- [#17922](https://github.com/QwenLM/qwen-code/pull/17922) feat(generated-ui): teach cards to keep their state with ui.state
- [#18101](https://github.com/QwenLM/qwen-code/pull/18101) fix(ci): clean up Maven seed helper downloads

#### 🐛 New Issues
- [#18088](https://github.com/QwenLM/qwen-code/issues/18088) follow-up: sync sidebar hover-status design doc and strengthen precedence tests (#18070 R2-1..R2-4) `priority/P3` `category/development` `scope/components` `scope/testing` 💬3
- [#18119](https://github.com/QwenLM/qwen-code/issues/18119) deflake: integration-tests/interactive/tui-agent-loop-parity.test.ts › Ink TUI agent loop parity (experimental.unifiedAgentLoop) › a teammate report that starts a teammate turn `priority/P3` `type/bug` `category/development` `scope/testing` 💬3
- [#18113](https://github.com/QwenLM/qwen-code/issues/18113) deflake: packages/cli/src/serve/run-qwen-serve.test.ts › runQwenServe runtime startup failures › keeps the remote same-origin exception alive during the bootstrap window `priority/P2` `type/bug` `category/cli` `scope/testing` 💬3
- [#18097](https://github.com/QwenLM/qwen-code/issues/18097) test: strengthen deferred transcript pagination coverage `priority/P3` `type/feature-request` `category/development` `scope/session-management` 💬3
- [#18141](https://github.com/QwenLM/qwen-code/issues/18141) Windows: @ autocomplete and drag-and-drop silently drop files with spaces or parentheses in their names `status/in-progress` `priority/P2` `type/bug` `category/cli` 💬2
- [#18135](https://github.com/QwenLM/qwen-code/issues/18135) SGLang's flat 400 error body is dropped, so its context overflow is never detected `priority/P2` `type/bug` `category/core` `scope/token-management` 💬2
- [#18136](https://github.com/QwenLM/qwen-code/issues/18136) Gemma 3 and Gemma 4 are treated as text-only, so images are never sent `priority/P2` `type/bug` `category/core` `scope/content-generation` 💬2
- [#18130](https://github.com/QwenLM/qwen-code/issues/18130) Managed Agent recovery checks an unadmitted cancelled turn as its Harness target `priority/P2` `type/bug` `managed-agent-server` 💬2
- [#18127](https://github.com/QwenLM/qwen-code/issues/18127) Managed Agent cancellation stalls on cleanup owed by a prior turn `priority/P2` `type/bug` `managed-agent-server` 💬2
- [#18079](https://github.com/QwenLM/qwen-code/issues/18079) Pin the active-work status color token in the sidebar CSS test `priority/P3` `category/development` `scope/testing` `type/enhancement` 💬2
- [#18078](https://github.com/QwenLM/qwen-code/issues/18078) Update the sidebar design docs for the active-work color contract `priority/P3` `type/documentation` `category/ui` `status/ready-for-agent` 💬2
- [#18107](https://github.com/QwenLM/qwen-code/issues/18107) [Bug] Streaming /btw answer tail counts source lines, not wrapped rows `priority/P2` `type/bug` `category/ui` `scope/rendering` 💬2
- [#18106](https://github.com/QwenLM/qwen-code/issues/18106) [Bug] Telemetry request attributes drop `top_k` on all three providers `priority/P3` `category/telemetry` `type/enhancement` `need-discussion` 💬2
- [#18098](https://github.com/QwenLM/qwen-code/issues/18098) Reuse one touch-caret layout fingerprint per arrow-key press `priority/P3` `type/feature-request` `category/performance` `scope/web-shell` 💬2
- [#18096](https://github.com/QwenLM/qwen-code/issues/18096) Keep compact Git status badges visible in the desktop toolbar `priority/P2` `type/bug` `category/ui` `scope/web-shell` 💬2
- [#18089](https://github.com/QwenLM/qwen-code/issues/18089) bug(core): the single-file diff shows a sibling's changes when the requested filename is also a pathspec glob `priority/P2` `type/bug` `category/core` `scope/git` 💬2
- [#18077](https://github.com/QwenLM/qwen-code/issues/18077) chore(managed-agent): ToolPublicationDataStore exceeds the class-size ratchet (2485 > 2483) `priority/P2` `type/bug` `scope/ci-cd` `managed-agent-server` 💬2
- [#18081](https://github.com/QwenLM/qwen-code/issues/18081) Harden transcript export compatibility checks and follow-up contract notes `priority/P3` `type/bug` `category/development` `scope/testing` 💬2
- [#18147](https://github.com/QwenLM/qwen-code/issues/18147) perf(core): dispatch eligible read-only tools before the model stream ends
- [#18148](https://github.com/QwenLM/qwen-code/issues/18148) Daily dependency CVE audit failed `status/needs-triage` `scope/ci-cd`
- [#18152](https://github.com/QwenLM/qwen-code/issues/18152) Windows: pasting double-quoted paths from Explorer "Copy as path" does not convert to `@` file references
- [#18149](https://github.com/QwenLM/qwen-code/issues/18149) proposal(managed-agent): Widen Action parking beyond the first increment (stateless Harness Phase 4 follow-up) `type/feature-request` `category/core` `scope/session-management` `need-discussion`
- [#18144](https://github.com/QwenLM/qwen-code/issues/18144) cli: `@` file references break next to Chinese/CJK text and fullwidth punctuation

#### 🔒 Closed Issues
- [#13078](https://github.com/QwenLM/qwen-code/issues/13078) Daily dependency CVE audit failed
- [#18088](https://github.com/QwenLM/qwen-code/issues/18088) follow-up: sync sidebar hover-status design doc and strengthen precedence tests (#18070 R2-1..R2-4)
- [#18053](https://github.com/QwenLM/qwen-code/issues/18053) deflake: packages/cli/src/serve/hosted-harness-session.test.ts › idle suspension > an admitted mutation resets the idle timer
- [#18055](https://github.com/QwenLM/qwen-code/issues/18055) deflake: integration-tests/cli/qwen-serve-restart-recovery.test.ts › qwen serve — restart recovery > lists and continues a session after the daemon is SIGKILLed
- [#18130](https://github.com/QwenLM/qwen-code/issues/18130) Managed Agent recovery checks an unadmitted cancelled turn as its Harness target
- [#17943](https://github.com/QwenLM/qwen-code/issues/17943) bug(managed-agent): Broker HTTP threads cannot discover nested external-workspace providers
- [#17427](https://github.com/QwenLM/qwen-code/issues/17427) chore(managed-agent): retire K8s harness deployment templates and clean up archived CSI remnants
- [#18079](https://github.com/QwenLM/qwen-code/issues/18079) Pin the active-work status color token in the sidebar CSS test
- [#18078](https://github.com/QwenLM/qwen-code/issues/18078) Update the sidebar design docs for the active-work color contract
- [#18077](https://github.com/QwenLM/qwen-code/issues/18077) chore(managed-agent): ToolPublicationDataStore exceeds the class-size ratchet (2485 > 2483)
- [#9780](https://github.com/QwenLM/qwen-code/issues/9780) Deferred review findings from PR #9657

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

**Stars:** 395,067 · **Open issues:** 8,893 · **Last push:** <1h ago

On November 23, 2026, OpenClaw released version 2026.11.7, introducing significant updates such as conversation recovery to manage interrupted replies and child results across Gateway restarts, as well as improvements for reliable automations that allow owners to repair failures in their workflows. Key merged features include a fix for session analysis and automation flows, with several enhancements focused on user interface improvements, such as keeping the Send option available during model switches and opting in for themed background artwork. Notably, a new issue was reported regarding the Browser xAI Talk repeatedly cutting off conversations, highlighting persistent challenges in maintaining smooth user interaction.

#### 🚀 New Releases
- [v2026.11.7](https://github.com/openclaw/openclaw/releases/tag/v2026.11.7) openclaw 2026.11.7

#### ✅ Merged PRs
- [#203895](https://github.com/openclaw/openclaw/pull/203895) fix(ci): let macOS 11.6 handoff package checks finish
- [#203896](https://github.com/openclaw/openclaw/pull/203896) fix(ci): give macOS handoff package inspection fifteen minutes
- [#198919](https://github.com/openclaw/openclaw/pull/198919) test: trim infrastructure state and cron diagnostics
- [#203888](https://github.com/openclaw/openclaw/pull/203888) fix(release): reuse original ClawHub bytes after partial publication
- [#203880](https://github.com/openclaw/openclaw/pull/203880) chore(release): close out 2026.11.7 on main
- [#203818](https://github.com/openclaw/openclaw/pull/203818) fix(ci): select a supported runtime for failure reporting
- [#203063](https://github.com/openclaw/openclaw/pull/203063) feat: filter shared sessions by owner or involvement
- [#203838](https://github.com/openclaw/openclaw/pull/203838) fix: keep Send available after switching models in Cmd+K
- [#203885](https://github.com/openclaw/openclaw/pull/203885) fix: reuse release evidence after orchestration-only repairs
- [#203879](https://github.com/openclaw/openclaw/pull/203879) test(ui): measure the Gateway heading grid track
- [#203878](https://github.com/openclaw/openclaw/pull/203878) test(ui): ignore the clipped phone heading in access layout
- [#203874](https://github.com/openclaw/openclaw/pull/203874) fix(test): restore Slack download revocation checks
- [#198961](https://github.com/openclaw/openclaw/pull/198961) test(plugins): trim redundant metadata test plumbing
- [#203308](https://github.com/openclaw/openclaw/pull/203308) improve(ui): make theme background artwork opt-in
- [#203871](https://github.com/openclaw/openclaw/pull/203871) fix(macos): backport critical 2026.11.6 app repairs
- [#203868](https://github.com/openclaw/openclaw/pull/203868) fix(test): restore cron result copy checks
- [#201865](https://github.com/openclaw/openclaw/pull/201865) fix(memory): keep scope hashes stable across locales
- [#203847](https://github.com/openclaw/openclaw/pull/203847) refactor(gateway): check runtime and HTTP authority once at request start
- [#203862](https://github.com/openclaw/openclaw/pull/203862) test(gateway): exercise pairing and worker Stop commit fences
- [#203867](https://github.com/openclaw/openclaw/pull/203867) docs: distinguish stall profiles from interrupt samples
- [#202775](https://github.com/openclaw/openclaw/pull/202775) fix(tlon): require approval before responding in group DMs
- [#164949](https://github.com/openclaw/openclaw/pull/164949) fix(cron): optional-silent cron run fails after the agent collects its collector child's result
- [#203853](https://github.com/openclaw/openclaw/pull/203853) test(ui): locate the model device-code option by its label
- [#203864](https://github.com/openclaw/openclaw/pull/203864) chore(ui): refresh control ui locales
- [#203852](https://github.com/openclaw/openclaw/pull/203852) fix: keep short branch names compact in New Session
- [#203856](https://github.com/openclaw/openclaw/pull/203856) fix(test): restore scheduled cron policy checks
- [#203859](https://github.com/openclaw/openclaw/pull/203859) test(gateway): exercise the onboarding transcript commit guard
- [#203850](https://github.com/openclaw/openclaw/pull/203850) fix: keep SQLite read receipts stable
- [#203698](https://github.com/openclaw/openclaw/pull/203698) fix: keep the compaction strip readable in narrow chats
- [#203849](https://github.com/openclaw/openclaw/pull/203849) fix(update): show migration warnings from the configured database
- [#203661](https://github.com/openclaw/openclaw/pull/203661) fix: keep Mac Browser tabs visible behind the command palette
- [#200301](https://github.com/openclaw/openclaw/pull/200301) improve(ui): Cmd+K lists named settings first and improves session search
- [#203836](https://github.com/openclaw/openclaw/pull/203836) chore(test): remove unused updater fixture helpers
- [#203701](https://github.com/openclaw/openclaw/pull/203701) fix: show session Details alongside the Home sidebar
- [#203857](https://github.com/openclaw/openclaw/pull/203857) fix(test): follow account menu keyboard order
- [#203213](https://github.com/openclaw/openclaw/pull/203213) fix: stop PR CI watchers blocking on superseded security checks
- [#202617](https://github.com/openclaw/openclaw/pull/202617) fix: keep Inbox update details readable
- [#203854](https://github.com/openclaw/openclaw/pull/203854) fix: seal release evidence with the admitted evaluator
- [#201458](https://github.com/openclaw/openclaw/pull/201458) fix: show earlier attachments in Session files
- [#201426](https://github.com/openclaw/openclaw/pull/201426) fix: name the agent when a followed-up child finishes
- [#203772](https://github.com/openclaw/openclaw/pull/203772) test(ui): select the clipped sidebar archive row by geometry
- [#203760](https://github.com/openclaw/openclaw/pull/203760) refactor(agents): delete the scheduled owner-only receipt re-check
- [#203694](https://github.com/openclaw/openclaw/pull/203694) fix: open new chats without a Home parent
- [#203642](https://github.com/openclaw/openclaw/pull/203642) fix: keep approval history in place while revoking a standing grant
- [#203667](https://github.com/openclaw/openclaw/pull/203667) fix: show the full focus outline on wrapped device help links
- [#203670](https://github.com/openclaw/openclaw/pull/203670) fix: keep keyboard focus visible on scrollable Settings tabs
- [#203650](https://github.com/openclaw/openclaw/pull/203650) fix: align Automation section help on tablets and restore its full phone tap target
- [#203711](https://github.com/openclaw/openclaw/pull/203711) fix(ui): keep chat attachment cards readable on phones
- [#203835](https://github.com/openclaw/openclaw/pull/203835) ci: inventory retained native worker lifecycles
- [#202491](https://github.com/openclaw/openclaw/pull/202491) fix: align nested rows in the desktop Subagents panel
- [#203639](https://github.com/openclaw/openclaw/pull/203639) fix: keep old and new values visible in pending settings changes
- [#203846](https://github.com/openclaw/openclaw/pull/203846) fix(test): restore installed-runtime composition checks
- [#203769](https://github.com/openclaw/openclaw/pull/203769) fix(update): convert package installs on hosts without a systemd user bus
- [#202689](https://github.com/openclaw/openclaw/pull/202689) fix: keep dismissed automation failures out of the Inbox
- [#203833](https://github.com/openclaw/openclaw/pull/203833) test(ui): align app card footers when actions wrap
- [#203671](https://github.com/openclaw/openclaw/pull/203671) fix: keep the Labs prediction model picker still when you change models
- [#203658](https://github.com/openclaw/openclaw/pull/203658) fix: keep language and font pickers aligned when you change selections
- [#201080](https://github.com/openclaw/openclaw/pull/201080) feat(release): release fast-track system
- [#203832](https://github.com/openclaw/openclaw/pull/203832) fix(release): honor explicit acceptance of cancelled validation steps
- [#203827](https://github.com/openclaw/openclaw/pull/203827) improve(ui): round the corners of chat messages
- [#203336](https://github.com/openclaw/openclaw/pull/203336) fix: show the whole dashboard gallery focus ring on phones
- [#199487](https://github.com/openclaw/openclaw/pull/199487) fix(ui): stop attaching removed app resources to another server
- [#203816](https://github.com/openclaw/openclaw/pull/203816) fix(ci): remove unused Mantis pnpm cache restore
- [#203640](https://github.com/openclaw/openclaw/pull/203640) fix: show full theme names in the Appearance picker
- [#203626](https://github.com/openclaw/openclaw/pull/203626) fix: make unassigned daily usage bars readable
- [#203808](https://github.com/openclaw/openclaw/pull/203808) test(e2e): retire package-installed-recovery cuts that target the retired in-place package path
- [#203826](https://github.com/openclaw/openclaw/pull/203826) docs: clarify receipt recovery before restarting release validation
- [#203622](https://github.com/openclaw/openclaw/pull/203622) fix: fit translated and enlarged size labels in the Systems viewer
- [#203620](https://github.com/openclaw/openclaw/pull/203620) fix: wrap long saved provider names in Talk settings
- [#203617](https://github.com/openclaw/openclaw/pull/203617) fix: keep dashboard preview errors readable at larger text sizes
- [#203636](https://github.com/openclaw/openclaw/pull/203636) fix: show the full Knowledge store name and sharing details on phones
- [#203695](https://github.com/openclaw/openclaw/pull/203695) fix: recover the Processes panel after session access changes
- [#203504](https://github.com/openclaw/openclaw/pull/203504) fix(update): preserve plugin consent and target the invoking installation
- [#203688](https://github.com/openclaw/openclaw/pull/203688) fix: start compatible MOV attachments faster in chat
- [#203672](https://github.com/openclaw/openclaw/pull/203672) fix: keep Lobsterdex cards in place when the visit count reaches ten
- [#199497](https://github.com/openclaw/openclaw/pull/199497) fix(ui): stop showing zero usage for pending session rows
- [#203668](https://github.com/openclaw/openclaw/pull/203668) fix: wrap long device names before the dialog’s Close button
- [#203674](https://github.com/openclaw/openclaw/pull/203674) fix: show keyboard focus around the log stream on tablets and desktops
- [#203663](https://github.com/openclaw/openclaw/pull/203663) fix: open widget options without closing the focused dashboard
- [#203788](https://github.com/openclaw/openclaw/pull/203788) refactor(agents): bind only the caller's session source into the run registry
- [#202295](https://github.com/openclaw/openclaw/pull/202295) fix(ui): match the dashboard icon to mobile chat controls
- [#203666](https://github.com/openclaw/openclaw/pull/203666) fix: keep command palette text as typed
- [#203660](https://github.com/openclaw/openclaw/pull/203660) fix: keep Send within reach when you expand long paths in Custodian history
- [#203800](https://github.com/openclaw/openclaw/pull/203800) chore(i18n): refresh native locales
- [#203659](https://github.com/openclaw/openclaw/pull/203659) fix: show Gateway uptime beside the machine name in Connection settings
- [#203656](https://github.com/openclaw/openclaw/pull/203656) fix: keep cloud snapshot menus within reach beside long profile names
- [#203795](https://github.com/openclaw/openclaw/pull/203795) chore(ui): refresh control ui locales
- [#203655](https://github.com/openclaw/openclaw/pull/203655) fix: show the full channel ID when an agent’s status refresh fails
- [#203643](https://github.com/openclaw/openclaw/pull/203643) improve(ui): make sidebar avatar spinners easier to see
- [#203646](https://github.com/openclaw/openclaw/pull/203646) fix: remove misleading Gateway switch shortcut hints
- [#203627](https://github.com/openclaw/openclaw/pull/203627) fix: keep a steered document's text in later runs
- [#203654](https://github.com/openclaw/openclaw/pull/203654) fix: show full account and destination IDs in channel connection warnings
- [#203653](https://github.com/openclaw/openclaw/pull/203653) fix: keep the search hint and delivery failures readable in automation run history
- [#203644](https://github.com/openclaw/openclaw/pull/203644) fix: keep plugin buttons beside their description in the Apps catalog
- [#203647](https://github.com/openclaw/openclaw/pull/203647) fix: show the full schedule, model and delivery details for saved automations
- [#202934](https://github.com/openclaw/openclaw/pull/202934) fix(update): explain missing macOS developer tools when Git is unavailable
- [#203638](https://github.com/openclaw/openclaw/pull/203638) fix: keep long workspace and file paths readable in Agents
- [#199495](https://github.com/openclaw/openclaw/pull/199495) fix(ui): keep wizard text after validation rejects an answer
- [#199485](https://github.com/openclaw/openclaw/pull/199485) fix(ui): keep Incognito draft permissions after navigation
- [#203634](https://github.com/openclaw/openclaw/pull/203634) fix: show bundled plugin page titles once on phones
- [#203615](https://github.com/openclaw/openclaw/pull/203615) fix: wrap Skills categories like Plugins
- [#203613](https://github.com/openclaw/openclaw/pull/203613) fix: keep empty space between chat messages out of text selections
- [#199462](https://github.com/openclaw/openclaw/pull/199462) fix(ui): restore Retry after saved terminal recovery fails
- [#203633](https://github.com/openclaw/openclaw/pull/203633) fix: label tied peaks once in the Activity chart
- [#202306](https://github.com/openclaw/openclaw/pull/202306) feat: move a conversation that has no project into one
- [#203756](https://github.com/openclaw/openclaw/pull/203756) test(ui): wait for initial configuration in provider usage tests
- [#203631](https://github.com/openclaw/openclaw/pull/203631) fix: keep About build rows in place when copying fails
- [#201453](https://github.com/openclaw/openclaw/pull/201453) feat: control individual plugin tools from Settings
- [#203679](https://github.com/openclaw/openclaw/pull/203679) fix: keep GitHub Checks compact in Link Reader on WebKit
- [#203610](https://github.com/openclaw/openclaw/pull/203610) fix: keep the chat working indicator quiet before tools run
- [#199494](https://github.com/openclaw/openclaw/pull/199494) fix(ui): allow retrying failed Worktrees refreshes
- [#203689](https://github.com/openclaw/openclaw/pull/203689) fix(webchat): keep GitHub publication receipts out of assistant replies
- [#199496](https://github.com/openclaw/openclaw/pull/199496) fix(ui): keep portal close errors on the failed preview
- [#203753](https://github.com/openclaw/openclaw/pull/203753) test(ui): exercise native discovery through current plugin settings
- [#203735](https://github.com/openclaw/openclaw/pull/203735) fix(update): let container installs update and official images start again
- [#203699](https://github.com/openclaw/openclaw/pull/203699) fix: remove legacy cards from the Home sidebar
- [#203740](https://github.com/openclaw/openclaw/pull/203740) test(ui): follow the Open Models recovery action
- [#200218](https://github.com/openclaw/openclaw/pull/200218) fix(ui): continue the flat Other session list on scroll
- [#203707](https://github.com/openclaw/openclaw/pull/203707) improve: show automation cards before archiving conversations
- [#203692](https://github.com/openclaw/openclaw/pull/203692) fix(ui): keep attachment Download buttons neutral
- [#203630](https://github.com/openclaw/openclaw/pull/203630) fix: keep short memory import values beside their labels on phones
- [#203618](https://github.com/openclaw/openclaw/pull/203618) fix: keep dashboard preview reload instructions readable
- [#203625](https://github.com/openclaw/openclaw/pull/203625) fix: align Debug snapshots to the same reading column
- [#203624](https://github.com/openclaw/openclaw/pull/203624) fix: show full session names in the terminal picker
- [#203623](https://github.com/openclaw/openclaw/pull/203623) fix: keep template names and publishers readable beside Add
- [#203676](https://github.com/openclaw/openclaw/pull/203676) improve(ui): make macOS titlebar sidebar toggles easier to scan
- [#203664](https://github.com/openclaw/openclaw/pull/203664) refactor(agents): drop authority reads from the admitted-run receipt body
- [#203616](https://github.com/openclaw/openclaw/pull/203616) fix: keep keyboard focus around the standalone approval heading
- [#203585](https://github.com/openclaw/openclaw/pull/203585) fix: show HEIC photos in Control UI chat previews
- [#203621](https://github.com/openclaw/openclaw/pull/203621) fix: keep chat replies going when a GitHub confirmation arrives
- [#203338](https://github.com/openclaw/openclaw/pull/203338) fix: align Select all with the session checkboxes below it
- [#203497](https://github.com/openclaw/openclaw/pull/203497) feat(update): keep the Gateway running while package updates prepare
- [#203334](https://github.com/openclaw/openclaw/pull/203334) fix: align storage totals on phones
- [#203652](https://github.com/openclaw/openclaw/pull/203652) fix: keep the desktop Details panel from scrolling sideways
- [#203651](https://github.com/openclaw/openclaw/pull/203651) fix: restore the previous macOS Dashboard spacing
- [#203649](https://github.com/openclaw/openclaw/pull/203649) fix: show background results to the model as labelled input, not its own replies
- [#203601](https://github.com/openclaw/openclaw/pull/203601) fix: let background reviews reuse their session's cached prompt
- [#203645](https://github.com/openclaw/openclaw/pull/203645) chore(ui): refresh control ui locales
- [#203580](https://github.com/openclaw/openclaw/pull/203580) fix: progress refresh stalls while a background command runs
- [#203574](https://github.com/openclaw/openclaw/pull/203574) fix: prioritize recommended models in picker search
- [#203612](https://github.com/openclaw/openclaw/pull/203612) fix(ui): show Details dividers only between blocks
- [#203379](https://github.com/openclaw/openclaw/pull/203379) feat: make provider sign-in easy to find in plugin settings
- [#203606](https://github.com/openclaw/openclaw/pull/203606) chore(i18n): refresh native locales
- [#202679](https://github.com/openclaw/openclaw/pull/202679) fix: keep the community invite out of the first Control UI visit
- [#203590](https://github.com/openclaw/openclaw/pull/203590) refactor(gateway): check HTTP request authority once at admission
- [#203194](https://github.com/openclaw/openclaw/pull/203194) feat(update): Git installs update through prepared releases and a resident launcher
- [#203564](https://github.com/openclaw/openclaw/pull/203564) fix: let Git installs without a global pnpm update again
- [#201051](https://github.com/openclaw/openclaw/pull/201051) fix(goals): allow Goals on OpenClaw cloud workers
- [#203561](https://github.com/openclaw/openclaw/pull/203561) refactor(agents): drop tool-caller re-checks from agent tool callers
- [#203588](https://github.com/openclaw/openclaw/pull/203588) fix: let a Windows reinstall replace the existing openclaw command
- [#203598](https://github.com/openclaw/openclaw/pull/203598) test(onboarding): expect no history choice in setup
- [#202622](https://github.com/openclaw/openclaw/pull/202622) fix: let people choose an AI connection while local discovery runs
- [#203599](https://github.com/openclaw/openclaw/pull/203599) chore(ui): refresh control ui locales
- [#202601](https://github.com/openclaw/openclaw/pull/202601) fix: connect AI without being asked about conversation history or memory
- [#202614](https://github.com/openclaw/openclaw/pull/202614) fix: stop asking for Local Network access when setting up OpenClaw on this Mac
- [#203578](https://github.com/openclaw/openclaw/pull/203578) fix: stop an update before it starts while a node service holds the state database
- [#202602](https://github.com/openclaw/openclaw/pull/202602) fix(cli): report host live-session refusals as host limits, not provider rate limits
- [#203486](https://github.com/openclaw/openclaw/pull/203486) fix: let a pnpm install update again after an update died after activating
- [#203538](https://github.com/openclaw/openclaw/pull/203538) fix: keep the Linux installer from hanging at the NodeSource step on Ubuntu 26.04
- [#203583](https://github.com/openclaw/openclaw/pull/203583) fix: stop status commands and the update self-check from calling configs without agent entries invalid
- [#203568](https://github.com/openclaw/openclaw/pull/203568) fix: keep a conversation's OpenAI Responses continuation across background runs
- [#203529](https://github.com/openclaw/openclaw/pull/203529) fix: let update repair finish after Homebrew cleanup removed retained launcher copies
- [#203555](https://github.com/openclaw/openclaw/pull/203555) fix: chat-requested updates no longer leave the Gateway stopped
- [#202599](https://github.com/openclaw/openclaw/pull/202599) fix: keep the first setup and chat free of automatic side panels
- [#203572](https://github.com/openclaw/openclaw/pull/203572) refactor(infra): check exec approvals once at commit
- [#203571](https://github.com/openclaw/openclaw/pull/203571) fix: progress refresh stalls while a background command runs
- [#203559](https://github.com/openclaw/openclaw/pull/203559) fix(agents): harness history moves only at compaction
- [#203554](https://github.com/openclaw/openclaw/pull/203554) fix: stop the false "yielded without a continuation source" notice when a background command will resume the chat
- [#203534](https://github.com/openclaw/openclaw/pull/203534) test(update): drop the OCM mid-request authority refusal retired by one-time admission
- [#203533](https://github.com/openclaw/openclaw/pull/203533) fix(update): load the release check only when check-release runs
- [#197395](https://github.com/openclaw/openclaw/pull/197395) feat(cron): back automation off when a provider pushes back
- [#203530](https://github.com/openclaw/openclaw/pull/203530) fix: keep a Gateway restart during startup from failing with a state database error
- [#203433](https://github.com/openclaw/openclaw/pull/203433) fix: bound the whole Auto Review call to its timeoutSeconds budget
- [#203551](https://github.com/openclaw/openclaw/pull/203551) fix: restore Stop for MCP loopback tool calls after turn abort
- [#203539](https://github.com/openclaw/openclaw/pull/203539) fix: memory LanceDB plugin loads on macOS, Linux arm64 and Windows again
- [#202495](https://github.com/openclaw/openclaw/pull/202495) feat: run lean core workers in one shared host to cut small-machine memory
- [#203528](https://github.com/openclaw/openclaw/pull/203528) fix(node-host): stop managed nodes looping on owner-only credential repair
- [#203536](https://github.com/openclaw/openclaw/pull/203536) fix(agents): move the model-context history window only at compaction
- [#203521](https://github.com/openclaw/openclaw/pull/203521) fix(gateway): every saved-requester start needs the grant that created it
- [#203520](https://github.com/openclaw/openclaw/pull/203520) fix(cli): validate the loaded agent roster in fast config checks
- [#203503](https://github.com/openclaw/openclaw/pull/203503) refactor: drop tool-caller re-checks from Gateway-side callers
- [#203516](https://github.com/openclaw/openclaw/pull/203516) refactor: drop tool-caller re-checks from session tools and subagent registry

#### 🐛 New Issues
- [#203876](https://github.com/openclaw/openclaw/issues/203876) [Bug]: Browser xAI Talk repeatedly cuts off and does not follow up `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬11
- [#203442](https://github.com/openclaw/openclaw/issues/203442) [Bug]: Update activation Doctor fails with "Plugin deepseek Doctor source must be prepared before loading" (2026.11.4 -> 2026.11.10-beta.1) `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬4
- [#203869](https://github.com/openclaw/openclaw/issues/203869) [Bug]:Tool execution fails: gRPC code-mode session closed / BrokenPipe `bug` `regression` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬3
- [#203737](https://github.com/openclaw/openclaw/issues/203737) [Feature]: Codename ClippyClaw: OpenClaw sets itself up, and every agent is born in a conversation `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬3
- [#203637](https://github.com/openclaw/openclaw/issues/203637) Agent DB: retained session actor hits 'execution admission is closed' (UNAVAILABLE) during compaction/turns `P1` `impact:session-state` `impact:message-loss` `issue-rating: 🦪 silver shellfish` 💬3
- [#203793](https://github.com/openclaw/openclaw/issues/203793) [Feature]: Hide picker models that fail with model_not_found or are not installed locally `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬3
- [#203457](https://github.com/openclaw/openclaw/issues/203457) [Bug]: activation Doctor fails with "database is locked" on 2026.11.5 → 2026.11.6, rollback refused (writer unknown) `P2` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-friction` 💬3
- [#203489](https://github.com/openclaw/openclaw/issues/203489) [Bug]: Headless node loops on "Shared-state schema repair is owned by the existing installation" after unclean shutdown; fix is Doctor, not an update `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#203473](https://github.com/openclaw/openclaw/issues/203473) [Bug]: Secrets egress proxy stalls chunked HTTP responses after 64 KiB `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬3
- [#203476](https://github.com/openclaw/openclaw/issues/203476) [Bug]: Browser extension creates a new saved "OpenClaw" tab group on every job (Brave/Chrome saved tab groups) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬3
- [#203465](https://github.com/openclaw/openclaw/issues/203465) [Bug]: 2026.11.6: sessions_spawn runTimeoutSeconds expiry on a claude-cli child is treated as a model failure, so the whole child task restarts on every fallback (60 s limit, timeout reported after 225 s) `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬3
- [#203886](https://github.com/openclaw/openclaw/issues/203886) [Bug]: New-session microphone starts dictation instead of voice conversation `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬2
- [#203776](https://github.com/openclaw/openclaw/issues/203776) [Bug]: Codex Doctor refuses sidecar migration when plugin state changes `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬2
- [#203540](https://github.com/openclaw/openclaw/issues/203540) [Bug]: Background memory-extraction runs fail fast with "prepared model runtime plugin generation was superseded" — persists on 2026.11.6 `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#203842](https://github.com/openclaw/openclaw/issues/203842) [Bug]: Downloads always cancel when the Gateway runs in WSL2 and attaches to Windows Chrome over CDP (Linux downloadPath) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#203884](https://github.com/openclaw/openclaw/issues/203884) Bug: configured Slack owner reply in bot-created thread is rejected as non-owner by privileged delegation `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:needs-info` 💬2
- [#203870](https://github.com/openclaw/openclaw/issues/203870) [Bug]: Authenticated Slack owner messages lose owner-only tool authority `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:needs-info` 💬2
- [#203632](https://github.com/openclaw/openclaw/issues/203632) test: investigate Node24 infra-shard lifecycle timing failures `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬2
- [#203594](https://github.com/openclaw/openclaw/issues/203594) [Bug]: `estimatedPromptTokens` inflates every turn and diverges >2x from provider-reported prompt size (local lmstudio / llama.cpp); context bar bounces between turns `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#203807](https://github.com/openclaw/openclaw/issues/203807) update: --tag/--no-restart from a second installation can take over the shared release slot before its first conversion `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬2
- [#203505](https://github.com/openclaw/openclaw/issues/203505) [Bug]: `gateway status` and `update status` report a config as invalid that `config validate` accepts (setups without `openclaw onboard`) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#203517](https://github.com/openclaw/openclaw/issues/203517) Gateway fails to start after an in-process restart during boot: state database still has active native borrowers `P1` `impact:crash-loop` `clawsweeper:not-repro-on-main` `issue-rating: 🦪 silver shellfish` 💬2
- [#203581](https://github.com/openclaw/openclaw/issues/203581) [Feature]: Deliver Claude CLI tool activity to opted-in context archives without replaying it `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#203562](https://github.com/openclaw/openclaw/issues/203562) [Bug]: Telegram posts two failure notices for one unconfirmed final reply `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#203460](https://github.com/openclaw/openclaw/issues/203460) [Bug]: Linux installer hangs indefinitely at “Downloading NodeSource setup script” when sudo apt is stopped by SIGTTOU `bug` `bug:crash` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬2
- [#203446](https://github.com/openclaw/openclaw/issues/203446) Update failure: candidate-doctor (2026.11.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#203495](https://github.com/openclaw/openclaw/issues/203495) [Bug] Gateway stuck at bootstrap on Android (Claw App): schema v24→v38 migration requires `doctor --fix`, but `doctor --fix` staging is blocked by temp-workspace ancestor check on `/data/user/0` `bug` `regression` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#203496](https://github.com/openclaw/openclaw/issues/203496) CI: ci-node-test-plan-hosted-tail 'bounds hosted groups (full)' fails on main `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#203445](https://github.com/openclaw/openclaw/issues/203445) Control UI: trim redesign CSS `P3` `issue-rating: 🦪 silver shellfish` `impact:other` 💬2
- [#203897](https://github.com/openclaw/openclaw/issues/203897) [Bug]: Gateway restarts into a half-written npm global tree during "npm i -g openclaw@latest" (ERR_MODULE_NOT_FOUND ×5, restart handoff write fails) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#203782](https://github.com/openclaw/openclaw/issues/203782) [Feature]: Focus Week 5: one birth for every new agent, and setup without dead ends `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `P0` `issue-rating: 🦪 silver shellfish` 💬1
- [#203893](https://github.com/openclaw/openclaw/issues/203893) [Bug]: show_widget inline widgets never reach native clients (iOS) on the claude-cli runtime — no `canvas` block live or in chat.history, tool row shows "Outcome unknown" `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#203890](https://github.com/openclaw/openclaw/issues/203890) Update failure: candidate-doctor (2026.9.8) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#203887](https://github.com/openclaw/openclaw/issues/203887) [Feature]: Queue manual compaction behind an active run instead of rejecting it `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#203882](https://github.com/openclaw/openclaw/issues/203882) [Feature] Render approval-card ask text + block approvals without explanation + fix webchat intermediate-message loss `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#203875](https://github.com/openclaw/openclaw/issues/203875) Support deployment-managed skill mutations and source selection `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#203863](https://github.com/openclaw/openclaw/issues/203863) Update failure: reconcile:abandoned (2026.11.6) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#203834](https://github.com/openclaw/openclaw/issues/203834) Remove orphaned updater test helpers `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#203785](https://github.com/openclaw/openclaw/issues/203785) [Feature]: Focus Week 5: verify and fix the open P0 issues on the first-run path `P2` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#203837](https://github.com/openclaw/openclaw/issues/203837) Update failure: package-doctor (2026.10.1) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#203840](https://github.com/openclaw/openclaw/issues/203840) Inter-session replies leak back into the source session queue (echo) and announce envelopes arrive empty — duplicate delivery in session messaging `P2` `impact:message-loss` 💬1
- [#203831](https://github.com/openclaw/openclaw/issues/203831) refactor(ios): give shared session presentation its own owner `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#203784](https://github.com/openclaw/openclaw/issues/203784) [Feature]: Focus Week 5: the built-in OpenClaw agent investigates and repairs OpenClaw `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` `impact:security` 💬1
- [#203829](https://github.com/openclaw/openclaw/issues/203829) CI: worker-github initial launch e2e original-operator-revoked times out instead of refusing `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#203828](https://github.com/openclaw/openclaw/issues/203828) main: models.authSetApiKey test asserts a retired mid-request authority recheck `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#203820](https://github.com/openclaw/openclaw/issues/203820) [Docs Bug]: memory docs do not say which sessions get no memory audience (agent --session-id, main session) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#203821](https://github.com/openclaw/openclaw/issues/203821) Isolated cron announce run posts collected subagents' raw results after parent ends with NO_REPLY (spawn-only handoff, 2026.11.6) `P1` `impact:message-loss` 💬1
- [#203813](https://github.com/openclaw/openclaw/issues/203813) main: Codex native-config lifecycle test asserts a retired mid-request policy recheck `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#203781](https://github.com/openclaw/openclaw/issues/203781) [Feature]: Focus Week 5: the built-in OpenClaw agent guides the first run in the Control UI `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#203803](https://github.com/openclaw/openclaw/issues/203803) main: GitHub publication tests assert retired mid-request authority rechecks `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#203801](https://github.com/openclaw/openclaw/issues/203801) [Bug]: Warm session reads lose the last inference model `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#203805](https://github.com/openclaw/openclaw/issues/203805) Update failure: package-update (2026.10.10) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#203798](https://github.com/openclaw/openclaw/issues/203798) main: device-pair-setup test asserts a retired mid-request authority recheck `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#203775](https://github.com/openclaw/openclaw/issues/203775) [Feature]: Focus Week 5: a desktop lobster on macOS that shows what your agents are doing `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#203783](https://github.com/openclaw/openclaw/issues/203783) [Feature]: Focus Week 5: OpenClaw's agents know OpenClaw `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#203757](https://github.com/openclaw/openclaw/issues/203757) update: a Control UI update interrupted by a Gateway kill stays "Updating…" until the CLI runs `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `P0` `issue-rating: 🦪 silver shellfish` 💬1
- [#203764](https://github.com/openclaw/openclaw/issues/203764) update: a candidate that hangs before listening keeps the Gateway down for 20 minutes before rollback `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#203758](https://github.com/openclaw/openclaw/issues/203758) [Bug]: macOS app 11.6: `node_exec` denied with `Exec policy unavailable: env: node: No such file or directory` when the CLI is the Homebrew/Node install `P1` `impact:other` 💬1
- [#203743](https://github.com/openclaw/openclaw/issues/203743) update: a clean first-hop update reports "19 warnings need attention", 11 of them deferred-inspection notices `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#203732](https://github.com/openclaw/openclaw/issues/203732) [Bug]: Managed update hangs indefinitely in "validating" instead of failing fast (2026.10.8, pnpm) `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#203518](https://github.com/openclaw/openclaw/issues/203518) [Bug]: Control UI HEIC previews fail ("Unavailable") when no WebP-capable converter is on PATH; fall back to JPEG `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#203683](https://github.com/openclaw/openclaw/issues/203683) Allow an authorized orchestrator to resume another session's blocked goal `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#203673](https://github.com/openclaw/openclaw/issues/203673) Add a request/wait-only capability for agent exec approvals `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#203662](https://github.com/openclaw/openclaw/issues/203662) test: investigate Telegram ingress first-media-call timing failure `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#203657](https://github.com/openclaw/openclaw/issues/203657) Steered attachments are described twice in the model request `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#203641](https://github.com/openclaw/openclaw/issues/203641) CLI stream JSONL output cap is not configurable, and a cap overflow falls through to the next fallback model as a retryable failure `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#203629](https://github.com/openclaw/openclaw/issues/203629) update: --full-integrity-check is silently ignored on the release update path `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#203628](https://github.com/openclaw/openclaw/issues/203628) update: release preparation validates the invoking runtime, not the service's `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `maturity:stable` 💬1
- [#203614](https://github.com/openclaw/openclaw/issues/203614) Update failure: gateway-recovery-verification (2026.9.36) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#203607](https://github.com/openclaw/openclaw/issues/203607) [Feature]: web_fetch returns the page's published and modified dates `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#203609](https://github.com/openclaw/openclaw/issues/203609) [Bug]: Windows: gateway close fails after the stdin lifeline closes (spawn broker never ready), so the gateway hangs to its ~325 s hard exit and plugins fail to load (regressed in 2026.11.5) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#203611](https://github.com/openclaw/openclaw/issues/203611) [Feature]: Edit assistant messages in the transcript (in-place, persist to active branch) `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#203604](https://github.com/openclaw/openclaw/issues/203604) [Bug] typesafe 2026.11.6 Doctor artifact blocks plugin update transaction `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#203605](https://github.com/openclaw/openclaw/issues/203605) [Bug] ClawHub official lossless-claw install reports provenance-invalid on 2026.11.6 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#203600](https://github.com/openclaw/openclaw/issues/203600) Update failure: managed-service-handoff-unavailable (2026.9.4) `P0` `impact:ux-release-blocker` 💬1
- [#203596](https://github.com/openclaw/openclaw/issues/203596) [Bug]: Failed cron command run announces the literal NO_REPLY sentinel `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#203591](https://github.com/openclaw/openclaw/issues/203591) Forking a large conversation exhausts the SQLite worker before native commit receipt `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#203589](https://github.com/openclaw/openclaw/issues/203589) path find matches the wrong JSON record for large integer IDs `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#203582](https://github.com/openclaw/openclaw/issues/203582) chat.inject notes never reach the model: an agent-opened conversation answers the first reply blind `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#203579](https://github.com/openclaw/openclaw/issues/203579) Matrix: after a gateway restart, an old thread's last message is replayed and refused ("Input completion retry conflicts with the committed input"), and the room gets a failure reply `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#203577](https://github.com/openclaw/openclaw/issues/203577) Intermittent plugin lifecycle lease handoff acquisition timeout `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#203575](https://github.com/openclaw/openclaw/issues/203575) [Bug]: 2026.11.6 refuses every scheduled agentTurn on anthropic-vertex (Claude on Vertex, gcloud ADC) — 'no recorded inference account', no doctor/model@profile path `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#203527](https://github.com/openclaw/openclaw/issues/203527) main: Linux-only talk replay test refused by queued follow-up write check since #203468 `clawsweeper:intake:bug` 💬1
- [#203566](https://github.com/openclaw/openclaw/issues/203566) Make the outbound media staging TTL configurable (allow keeping staged files) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#203567](https://github.com/openclaw/openclaw/issues/203567) [Bug]: Codex thread rotation fails with "claimed by active work" while a completed turn's background terminal is still running `P1` `impact:session-state` `impact:message-loss` 💬1
- [#203557](https://github.com/openclaw/openclaw/issues/203557) [Bug]: `openclaw dashboard` fails TLS check on a custom bind host because the local certificate pin is skipped for URL overrides `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#203556](https://github.com/openclaw/openclaw/issues/203556) [Bug]: Direct turns in a visible spawned session report to the requester and, after ~33 minutes, post a false "completion delivery is blocked" message there `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#203402](https://github.com/openclaw/openclaw/issues/203402) Auto Review hangs silently with no timeout when Git capture blocks in the sandbox `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#203512](https://github.com/openclaw/openclaw/issues/203512) main: cli-message-authority abort-retirement reaction case fails since #203487 `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#203552](https://github.com/openclaw/openclaw/issues/203552) Intermittent Bun successor-state test clears predecessor state `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#203547](https://github.com/openclaw/openclaw/issues/203547) [Bug]: error-disabled automation jobs invisible in default list, no tombstone after delete, fail-closed delivery swallows reports silently `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-live-repro` 💬1
- [#203545](https://github.com/openclaw/openclaw/issues/203545) [Bug]: cleanup=delete leaves the deliverable's final reply permanently unreachable from the requesting agent `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#203542](https://github.com/openclaw/openclaw/issues/203542) CI: server-cron-failure-repair.final-effect and cron.scheduled-policy-adoption tests fail on main `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#203546](https://github.com/openclaw/openclaw/issues/203546) [Bug]: automations accept invalid code-trigger signatures at add time and then fail evals silently and forever `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-live-repro` 💬1
- [#203549](https://github.com/openclaw/openclaw/issues/203549) [Bug]: automation fires use the stale pre-edit payload when a fire races an in-flight edit `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#203550](https://github.com/openclaw/openclaw/issues/203550) [Bug]: skill_workshop proposal_apply returns applied receipts describing a byte-state the deployed file never carried `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:data-loss` 💬1
- [#203543](https://github.com/openclaw/openclaw/issues/203543) [Feature]: Scope Active Memory to exact session keys `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#203544](https://github.com/openclaw/openclaw/issues/203544) Release validation: transient GitHub artifact and receipt collection failures `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#203548](https://github.com/openclaw/openclaw/issues/203548) [Bug]: compaction summarizer dies when thinking exhausts the summary output budget with no automatic retry `P1` `impact:session-state` 💬1
- [#203537](https://github.com/openclaw/openclaw/issues/203537) main: sessions-spawn lifecycle and doctor-health legacy-update tests fail `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#203535](https://github.com/openclaw/openclaw/issues/203535) [Bug]: iOS in-app dictation never selects Chinese — zh-Hans-* device locale is not matched to zh-CN in SFSpeechRecognizer selection `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#203532](https://github.com/openclaw/openclaw/issues/203532) Feature request: `openclaw memory trust <file>` to re-trust a workspace memory file that is marked untrusted (provenance record is sticky and there is no documented way out) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#203531](https://github.com/openclaw/openclaw/issues/203531) Cron jobs created through the agent cron tool get `scheduledToolPolicy.mode=account` and always fail before execution on the claude-cli runtime 💬1
- [#203526](https://github.com/openclaw/openclaw/issues/203526) update.run OCM path no longer refuses a revoked browser requester (update.ocm.test.ts fails on main) `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#203524](https://github.com/openclaw/openclaw/issues/203524) [Feature]: run every Claude CLI turn of an agent on one paired node (tools.exec.claudeCliHost) `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#203523](https://github.com/openclaw/openclaw/issues/203523) Plugin SDK: expose the original path of a reply's local media to channel plugins `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#203519](https://github.com/openclaw/openclaw/issues/203519) Bun 1.4.5: an exit-0 child loses the end of large piped stdout in runCommandWithTimeout `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#203511](https://github.com/openclaw/openclaw/issues/203511) test: diagnose runner-sensitive Doctor and managed handoff fixture timeouts `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#203506](https://github.com/openclaw/openclaw/issues/203506) [Bug]: macOS Gateway reports an ACL violation when the native ACL inspector cannot load `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#203507](https://github.com/openclaw/openclaw/issues/203507) server.talk-consult-history 'isolates registered Talk replay' red on main after #203468 `P2` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` `impact:other` 💬1
- [#203508](https://github.com/openclaw/openclaw/issues/203508) Cron one-shot is disabled as a permanent error when it fires during a channel health-monitor restart (SessionBindingError BINDING_ADAPTER_UNAVAILABLE not in TRANSIENT_PATTERNS) `P2` `impact:message-loss` 💬1
- [#203500](https://github.com/openclaw/openclaw/issues/203500) [Feature]: background exec on node hosts (fire-and-forget + completion wake) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#203498](https://github.com/openclaw/openclaw/issues/203498) Restore trusted local dist override replay in prepared release updates `P2` `clawsweeper:not-repro-on-main` `issue-rating: 🦪 silver shellfish` 💬1
- [#203494](https://github.com/openclaw/openclaw/issues/203494) [Feature]: Keyboard navigation between sessions in the desktop apps (Cmd+1–9, Ctrl+Tab) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#203492](https://github.com/openclaw/openclaw/issues/203492) CI: checks-ui-e2e red on main (native-nav-responsive-layout, openclaw-id-menu) `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#203484](https://github.com/openclaw/openclaw/issues/203484) [Bug]: Completion delivery to a Telegram-channel session fails because the session's stored `to` is its own session key `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#203483](https://github.com/openclaw/openclaw/issues/203483) memory-core: a hook to transform a memory file's text before it is chunked, embedded and indexed `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `impact:security` 💬1
- [#203480](https://github.com/openclaw/openclaw/issues/203480) [Feature]: Gateway heap recommendation should use the service cgroup limit (systemd MemoryMax), not the CLI process `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#203471](https://github.com/openclaw/openclaw/issues/203471) [Feature]: `doctor --lint` prints no progress while it snapshots databases, so a long run looks like a hang `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#203464](https://github.com/openclaw/openclaw/issues/203464) Queued channel messages are silently refused after a Gateway restart `P1` `clawsweeper:source-repro` `impact:message-loss` `issue-rating: 🦞 diamond lobster` 💬1
- [#203463](https://github.com/openclaw/openclaw/issues/203463) Collected group batch can run with the last sender's owner rights when one message lacks sender evidence `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `impact:security` 💬1
- [#203459](https://github.com/openclaw/openclaw/issues/203459) [Bug]: Native Codex prompt hooks lose the admitted WebChat input origin `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#203461](https://github.com/openclaw/openclaw/issues/203461) /new and /stop hang ~15s: reply-session rollover drain blocks on cleanup_pending settle gate, channel goes silent `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#203452](https://github.com/openclaw/openclaw/issues/203452) Heartbeat turn fails across prompt-cache boundary drop (heartbeat_respond rejected → incomplete turn → wake failed); same-day recurrence, one leading to an ~11h scheduler freeze `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬1
- [#203436](https://github.com/openclaw/openclaw/issues/203436) [Bug]: perf(acpx): pluginToolsMcpBridge cold-loads a standalone plugin registry per session (~26.5s, ~882 MB RSS), exceeding ACP MCP startup timeouts `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#203437](https://github.com/openclaw/openclaw/issues/203437) [Feature]: Keep native WebSearch on claude-cli when a model-provider key auto-selects a managed web_search provider `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#203424](https://github.com/openclaw/openclaw/issues/203424) [Bug]: Silent reply "NO_REPLY" after inline </think> reasoning is delivered as a visible message (cron announce sends the reasoning) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#203441](https://github.com/openclaw/openclaw/issues/203441) [Feature]: Opt-in Gateway-mediated `exec` (and core tools) in ACPX `openClawToolsMcpBridge` `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#203439](https://github.com/openclaw/openclaw/issues/203439) chat.history: one message over the 8 MiB page limit makes the whole session unreadable `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬1
- [#203434](https://github.com/openclaw/openclaw/issues/203434) [Bug]: claude-cli → embedded API fallback sends the uncompacted transcript over the contextTokens budget (no preflight compaction) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#203431](https://github.com/openclaw/openclaw/issues/203431) [Bug]: MP4 fails via local MLX-VLM on first turn; direct API works (video_grid_thw IndexError) `P2` `impact:other` 💬1
- [#203426](https://github.com/openclaw/openclaw/issues/203426) Finished subagent results expire before reaching the parent; yields end with no continuation `P1` `clawsweeper:needs-info` `impact:session-state` `impact:message-loss` 💬1
- [#203425](https://github.com/openclaw/openclaw/issues/203425) Delegated work stalls after a Gateway restart: parents lose child completions, subagents get no restart wake `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#203403](https://github.com/openclaw/openclaw/issues/203403) [Bug]: Nostr: automation announces with delivery target "owner" always fail ("Pubkey must be 64 hex characters or npub format") `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#203405](https://github.com/openclaw/openclaw/issues/203405) [Bug]: claude-cli: a turn queued behind a fresh session's first turn starts a second fresh native session instead of resuming it `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#203404](https://github.com/openclaw/openclaw/issues/203404) [Bug]: 2026.11.3 lacks the fix for #144608 — before_tool_call param rewrite blocks OpenClaw dynamic tools (message) on the Codex harness `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#203398](https://github.com/openclaw/openclaw/issues/203398) Browser tab cleanup never caps or sweeps subagent tabs while the subagent runs `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#203400](https://github.com/openclaw/openclaw/issues/203400) [Feature]: Secret store entries backed by a SecretRef (Vault/OpenBao/1Password) for the secret egress proxy `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1

#### 🔒 Closed Issues
- [#141474](https://github.com/openclaw/openclaw/issues/141474) [Bug]: Collector child calling sessions_yield strands agents_wait forever while status surfaces report done; outputSchema silently inert on claude-cli backends
- [#118793](https://github.com/openclaw/openclaw/issues/118793) Claude CLI "session limit" error dies with surface_error instead of triggering the model fallback chain
- [#180941](https://github.com/openclaw/openclaw/issues/180941) [Bug]: Agents repeatedly call sessions_yield after nothing_pending instead of discovering task tools (multiple models/releases)
- [#164887](https://github.com/openclaw/openclaw/issues/164887) Optional-silent cron turn fails incomplete after successful collected profile result (2026.9.8)
- [#185715](https://github.com/openclaw/openclaw/issues/185715) [Feature]: Let selected scheduled jobs use plugin-provided instructions with default fallback
- [#168777](https://github.com/openclaw/openclaw/issues/168777) [Feature]: memory-core: resolve cache misses from published chunk vectors and stop retaining a second copy in `memory_embedding_cache` (64% of a 50,000-row cache duplicates `memory_index_chunks`)
- [#142310](https://github.com/openclaw/openclaw/issues/142310) WebChat: text before tool calls rendered twice (session observer invalid JSON on every turn)
- [#175167](https://github.com/openclaw/openclaw/issues/175167) iOS voice notes silently fail transcription (hydrationSuppressed: true, never reaches STT provider)
- [#185713](https://github.com/openclaw/openclaw/issues/185713) [Feature]: Support per-profile CDP artifact directories for browsers running under a different Unix user
- [#184059](https://github.com/openclaw/openclaw/issues/184059) [Bug]: stale "Active exec sessions" runtime-context fact is never superseded (dead PIDs reported as running)
- [#183946](https://github.com/openclaw/openclaw/issues/183946) [Bug]: Discord replies/progress appear stuck after input during delegated work; completion-wake commit timeouts (2026.10.7)
- [#180083](https://github.com/openclaw/openclaw/issues/180083) [Bug]: boot-md completes startup work but temporary-session cleanup fails SQLite lifecycle guard
- [#159794](https://github.com/openclaw/openclaw/issues/159794) [Bug]: Downloading Markdown chat attachment replaces Control UI with raw file text
- [#186096](https://github.com/openclaw/openclaw/issues/186096) [Feature]: workboard.cards.list status filter (open cards only)
- [#186072](https://github.com/openclaw/openclaw/issues/186072) Update failure: git-clone (2026.10.8)
- [#186002](https://github.com/openclaw/openclaw/issues/186002) [Feature]: Format Markdown in place while composing in the Control UI
- [#202185](https://github.com/openclaw/openclaw/issues/202185) Update failure: requested (2026.11.10-beta.1)
- [#195203](https://github.com/openclaw/openclaw/issues/195203) [Bug]: `config set agents.entries.<id>.model` still logs "codex failed during register: Runtime config is not prepared" (defaults path fixed by #177680)
- [#203637](https://github.com/openclaw/openclaw/issues/203637) Agent DB: retained session actor hits 'execution admission is closed' (UNAVAILABLE) during compaction/turns
- [#191323](https://github.com/openclaw/openclaw/issues/191323) [Feature]: sessions_spawn receipts should name the child's runtime and credential
- [#203457](https://github.com/openclaw/openclaw/issues/203457) [Bug]: activation Doctor fails with "database is locked" on 2026.11.5 → 2026.11.6, rollback refused (writer unknown)
- [#186156](https://github.com/openclaw/openclaw/issues/186156) [Feature]: Upload existing audio to the current Discord server's Soundboard
- [#186154](https://github.com/openclaw/openclaw/issues/186154) [Feature]: Preserve speaker turns in ElevenLabs batch transcripts
- [#186093](https://github.com/openclaw/openclaw/issues/186093) [Bug]: Shared final-tag scanner still scans every tag-shaped span for reasoning-only text and direct callers
- [#186065](https://github.com/openclaw/openclaw/issues/186065) [Feature]: Retain an evidence-backed fact across Knowledge + LosslessClaw compaction and restart
- [#186050](https://github.com/openclaw/openclaw/issues/186050) [Feature]: Expand Knowledge for single-player and multiplayer with LosslessClaw compatibility
- [#185956](https://github.com/openclaw/openclaw/issues/185956) [Bug]: Android chat: double-tapping Send stops the message it just sent
- [#185937](https://github.com/openclaw/openclaw/issues/185937) [Feature]: after_tool_call should carry the host's terminal outcome (completed / error / blocked) on the embedded path
- [#185933](https://github.com/openclaw/openclaw/issues/185933) [Feature]: pass workspaceDir and cwd to before_tool_call / after_tool_call plugin hook contexts
- [#185864](https://github.com/openclaw/openclaw/issues/185864) [Feature]: GitLab connections and publication following the built-in GitHub workflow
- [#185814](https://github.com/openclaw/openclaw/issues/185814) [Feature] Show full names for truncated Appearance themes
- [#185734](https://github.com/openclaw/openclaw/issues/185734) Claude CLI: host text reaches native input as human-authored content (evidence for consolidated provenance fix)
- [#202652](https://github.com/openclaw/openclaw/issues/202652) Enabling a paused automation puts its already-dismissed failure back in the Inbox
- [#193832](https://github.com/openclaw/openclaw/issues/193832) [Feature]: Keep the IP address parser out of the Control UI chat boot bundle
- [#198447](https://github.com/openclaw/openclaw/issues/198447) [Feature]: Active Memory: include an approved memory sidecar's recall tools in the default tool list
- [#198445](https://github.com/openclaw/openclaw/issues/198445) [Feature]: Let an operator run a memory plugin beside the memory slot owner
- [#200357](https://github.com/openclaw/openclaw/issues/200357) [Bug]: Git install update refuses targets after #198661: "Declaration input escapes checkout" in preflight-build
- [#202365](https://github.com/openclaw/openclaw/issues/202365) [Feature]: Plugin session forks on a CLI runtime fork the native CLI session
- [#191325](https://github.com/openclaw/openclaw/issues/191325) [Bug]: config writes that move models from Claude CLI to API-key billing report no billing-route change
- [#185429](https://github.com/openclaw/openclaw/issues/185429) [Bug]: macOS app node: exec with timeoutSeconds 0 (no expiry) still ends after 20 s with "execution outcome is unknown"
- [#203505](https://github.com/openclaw/openclaw/issues/203505) [Bug]: `gateway status` and `update status` report a config as invalid that `config validate` accepts (setups without `openclaw onboard`)
- [#203517](https://github.com/openclaw/openclaw/issues/203517) Gateway fails to start after an in-process restart during boot: state database still has active native borrowers
- [#181643](https://github.com/openclaw/openclaw/issues/181643) [Bug]: Agent-deletion lease admission never finishes when the worker operation settlement rejects (handled only on fulfil)
- [#202772](https://github.com/openclaw/openclaw/issues/202772) [Bug]: Update rollback restores SQLite DBs in journal_mode=DELETE; next update's Doctor fails with maintenance lease sqlite-busy (2026.11.6)
- [#201808](https://github.com/openclaw/openclaw/issues/201808) [Bug]: memory index scopeHash uses localeCompare on extraPaths — reindex from a CJK-locale terminal permanently disables memory_search ("index scope changed"), byte-exact repro
- [#203834](https://github.com/openclaw/openclaw/issues/203834) Remove orphaned updater test helpers
- [#203840](https://github.com/openclaw/openclaw/issues/203840) Inter-session replies leak back into the source session queue (echo) and announce envelopes arrive empty — duplicate delivery in session messaging
- [#202661](https://github.com/openclaw/openclaw/issues/202661) Remember dismissed automation failures for the same operator across clients
- [#202653](https://github.com/openclaw/openclaw/issues/202653) Two Inbox tabs can overwrite each other's dismissals
- [#202650](https://github.com/openclaw/openclaw/issues/202650) Dismissing a second failed automation brings the first one back when browser storage is full
- [#203821](https://github.com/openclaw/openclaw/issues/203821) Isolated cron announce run posts collected subagents' raw results after parent ends with NO_REPLY (spawn-only handoff, 2026.11.6)
- [#202268](https://github.com/openclaw/openclaw/issues/202268) [Feature]: Move a conversation that has no project into one
- [#203758](https://github.com/openclaw/openclaw/issues/203758) [Bug]: macOS app 11.6: `node_exec` denied with `Exec policy unavailable: env: node: No such file or directory` when the CLI is the Homebrew/Node install
- [#203518](https://github.com/openclaw/openclaw/issues/203518) [Bug]: Control UI HEIC previews fail ("Unavailable") when no WebP-capable converter is on PATH; fall back to JPEG
- [#203371](https://github.com/openclaw/openclaw/issues/203371) Make provider sign-in easy to find in plugin settings
- [#203600](https://github.com/openclaw/openclaw/issues/203600) Update failure: managed-service-handoff-unavailable (2026.9.4)
- [#203527](https://github.com/openclaw/openclaw/issues/203527) main: Linux-only talk replay test refused by queued follow-up write check since #203468
- [#203567](https://github.com/openclaw/openclaw/issues/203567) [Bug]: Codex thread rotation fails with "claimed by active work" while a completed turn's background terminal is still running
- [#203402](https://github.com/openclaw/openclaw/issues/203402) Auto Review hangs silently with no timeout when Git capture blocks in the sandbox
- [#203512](https://github.com/openclaw/openclaw/issues/203512) main: cli-message-authority abort-retirement reaction case fails since #203487
- [#203548](https://github.com/openclaw/openclaw/issues/203548) [Bug]: compaction summarizer dies when thinking exhausts the summary output budget with no automatic retry
- [#203531](https://github.com/openclaw/openclaw/issues/203531) Cron jobs created through the agent cron tool get `scheduledToolPolicy.mode=account` and always fail before execution on the claude-cli runtime
- [#203508](https://github.com/openclaw/openclaw/issues/203508) Cron one-shot is disabled as a permanent error when it fires during a channel health-monitor restart (SessionBindingError BINDING_ADAPTER_UNAVAILABLE not in TRANSIENT_PATTERNS)
- [#202376](https://github.com/openclaw/openclaw/issues/202376) Lean: admit worker growth only within a memory budget, across every worker family
- [#203304](https://github.com/openclaw/openclaw/issues/203304) Chat commands do not run while no model is configured
- [#203424](https://github.com/openclaw/openclaw/issues/203424) [Bug]: Silent reply "NO_REPLY" after inline </think> reasoning is delivered as a visible message (cron announce sends the reasoning)
- [#202377](https://github.com/openclaw/openclaw/issues/202377) Lean: shared core worker host that shares code, not state
- [#203403](https://github.com/openclaw/openclaw/issues/203403) [Bug]: Nostr: automation announces with delivery target "owner" always fail ("Pubkey must be 64 hex characters or npub format")

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 265,465 · **Open issues:** 54,347 · **Last push:** <1h ago

Today's update for Hermes Agent was routine, with no new releases or merged pull requests to report. A range of new issues emerged, including a significant bug labeled #158976, which notes that settled admission results in state_meta are not being deleted, leading to substantial growth in the state.db size. Another critical issue, #159067, highlights a potential hang of the gateway restart when a stop command raises an exception, which currently fails to log the error. Additionally, a feature request under #159074 aims to expose the trusted messaging-turn context to extensions, indicating an ongoing interest in enhancing the system's extensibility.

#### 🐛 New Issues
- [#158976](https://github.com/NousResearch/hermes-agent/issues/158976) Gateway: settled admission results in state_meta are never deleted (state.db grows ~1 GB) `type/bug` `tool/file` `P2` `area/sessions` 💬2
- [#159067](https://github.com/NousResearch/hermes-agent/issues/159067) Gateway restart (SIGUSR1) hangs in draining when stop() raises: exception is never logged and the shutdown watchdog is disarmed `type/bug` `comp/gateway` `P2` 💬1
- [#159074](https://github.com/NousResearch/hermes-agent/issues/159074) [Feature]: Expose trusted messaging-turn context to extensions `type/feature` `comp/gateway` `comp/plugins` `P3` 💬1
- [#159039](https://github.com/NousResearch/hermes-agent/issues/159039) Boot home maintenance: state_db_guard's full integrity_check can block gateway startup for minutes on large state.db (non-deterministic, depends on lock race) `type/perf` `comp/cli` `P2` `area/sessions` 💬1
- [#159065](https://github.com/NousResearch/hermes-agent/issues/159065) [Bug]: test_kanban_cli_dispatch_passthrough leaks hermes_cli modules into sys.modules, failing ~130 unrelated tests with the real-home guard `type/bug` `comp/cli` `comp/cron` `P2` 💬1
- [#159047](https://github.com/NousResearch/hermes-agent/issues/159047) kanban: dir/worktree task with no workspace path is accepted, then spawn_failed twice → gave_up `type/bug` `comp/cli` `comp/cron` `comp/plugins` 💬1
- [#159043](https://github.com/NousResearch/hermes-agent/issues/159043) [Bug]: Removed credentials resurrect — stale processes re-upsert their full in-memory pool on every status transition, and rotation-revert re-selects deleted keys `type/bug` `comp/agent` `comp/cli` `area/auth` 💬1
- [#159027](https://github.com/NousResearch/hermes-agent/issues/159027) [Bug]: Classic CLI always renders 256 colours: custom Vt100_Output ignores COLORTERM and PROMPT_TOOLKIT_COLOR_DEPTH `type/bug` `comp/cli` `P2` 💬1
- [#159046](https://github.com/NousResearch/hermes-agent/issues/159046) Desktop (Windows): add opt-out for Start Menu / Desktop shortcut creation — installer and bootstrap/repair path currently re-create deleted shortcuts `type/feature` `area/config` `P3` `comp/desktop` 💬1
- [#159028](https://github.com/NousResearch/hermes-agent/issues/159028) [Bug]: foreground guard refuses "compose up -d && docker compose logs --tail N" — logs is missing from _DOCKER_REPORT_SUBCOMMANDS `type/bug` `backend/daytona` `comp/tools` `tool/terminal` 💬1
- [#159072](https://github.com/NousResearch/hermes-agent/issues/159072) clarify: no per-call timeout — 90s default expires before users can complete real-world checks `type/feature` `comp/tools` `area/config` `P3`
- [#159070](https://github.com/NousResearch/hermes-agent/issues/159070) Usage anchor fails on reload for multimodal image messages and freshly resumed sessions show 0/estimate before turn 1 `type/bug` `comp/agent` `P2` `area/billing`
- [#159068](https://github.com/NousResearch/hermes-agent/issues/159068) v0.23.3: Anthropic OAuth (Claude Max) requests return 429 rate_limit_error "Error"; v0.23.1 works `type/bug` `comp/agent` `provider/anthropic` `area/auth`
- [#159059](https://github.com/NousResearch/hermes-agent/issues/159059) [Bug]: Desktop — Archived view does not cover the messaging sections, so archived threads are unreachable there `type/bug` `P2` `comp/desktop` `area/sessions`
- [#159060](https://github.com/NousResearch/hermes-agent/issues/159060) [Bug]: Desktop — a failed session search renders as "No sessions match" with no re-auth prompt `type/bug` `area/auth` `P2` `comp/desktop`
- [#159061](https://github.com/NousResearch/hermes-agent/issues/159061) [Bug]: lefthook pre-commit template breaks on Windows — every commit needs --no-verify, skipping all lint `type/bug` `P3` `os/windows`
- [#159055](https://github.com/NousResearch/hermes-agent/issues/159055) [Bug][Desktop/SSH]: profile inventory lists marker-less and tombstoned dirs, spawning one isolated backend per leftover `type/perf` `P3` `comp/desktop` `area/profiles`
- [#159038](https://github.com/NousResearch/hermes-agent/issues/159038) A bare 403 defaults to auth advice, so provider policy refusals read as a bad API key `type/bug` `comp/agent` `tool/file` `area/auth`

#### 🔒 Closed Issues
- [#146345](https://github.com/NousResearch/hermes-agent/issues/146345) A Desktop or TUI model switch leaves `model_config.gateway_runtime` on the old provider, so a later resume runs on it
- [#154612](https://github.com/NousResearch/hermes-agent/issues/154612) Bot Mode relay: deliveries into a Hermes Cloud agent are claimed by the Desktop app but never delivered (no error either side)
- [#141661](https://github.com/NousResearch/hermes-agent/issues/141661) One-shot runs leave stopped Docker containers behind
- [#158253](https://github.com/NousResearch/hermes-agent/issues/158253) Add Gemini 4 Neon catalog/pricing/xhigh parity and native Nous Portal vision capability lookup
- [#139299](https://github.com/NousResearch/hermes-agent/issues/139299) Agent: an empty reply to a background-process notification is nudged, retried and can switch provider
- [#157463](https://github.com/NousResearch/hermes-agent/issues/157463) feat(models,pricing): register OpenAI GPT-6.2 Sol and GPT-6.2 Astra across static catalogs, usage pricing, and Codex -900k selector

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 97,371 · **Open issues:** 10,936 · **Last push:** <1h ago

On November 23, 2026, there were no new releases for vLLM. However, the team merged several noteworthy pull requests, including a bugfix to enhance the KV Offload process (#66719) by ensuring chunks are stored correctly when requests exceed the CPU tier. Documentations were improved as well, with updates reorganizing training materials and fixing relative links (#69248 and #69300). Additionally, significant bugfixes addressed issues such as async worker shutdown ordering (#67589) and the loading of model Audar ASR Turbo (#69217). A critical new issue was reported regarding the Ripple parser, which drops all text following tool calls that appear in plain prose (#69243), indicating ongoing challenges with tool integrations in the API.

#### ✅ Merged PRs
- [#66701](https://github.com/vllm-project/vllm/pull/66701) [Bugfix][Benchmark] Keep bench serve warmups and ready check out of the prefix cache
- [#69300](https://github.com/vllm-project/vllm/pull/69300) [Doc] Fix relative example links in docs/training/weight_updates/engines
- [#69248](https://github.com/vllm-project/vllm/pull/69248) [Doc] Reorganize docs/training/ into weight_updates and rollout_artifacts
- [#68108](https://github.com/vllm-project/vllm/pull/68108) [Bugfix][XPU] Honor user block size for sliding-window layers on XPU
- [#68684](https://github.com/vllm-project/vllm/pull/68684) [Qwen4Exp] Share FP8 PLE tables over NVLink and RDMA
- [#67589](https://github.com/vllm-project/vllm/pull/67589) [BUG] Fix async EPLB worker shutdown ordering
- [#69193](https://github.com/vllm-project/vllm/pull/69193) [Bugfix] Restore HY4 Flash CUDA platform checks
- [#69229](https://github.com/vllm-project/vllm/pull/69229) [LoRA] Add private worker-local tensor adapter loading
- [#63660](https://github.com/vllm-project/vllm/pull/63660) [XPU][CI] Add genai_perf to XPU test requirements
- [#66719](https://github.com/vllm-project/vllm/pull/66719) [Bugfix][KV Offload] Store the chunks that fit when a request exceeds the CPU tier
- [#64872](https://github.com/vllm-project/vllm/pull/64872) [Kernel] Let --linear-backend deep_gemm override the DeepGemm model a…
- [#69296](https://github.com/vllm-project/vllm/pull/69296) [Recipe] Inkling 2 Mini: use the nightly image
- [#69163](https://github.com/vllm-project/vllm/pull/69163) [Recipe] Kimi-K3.1-Pro: MI355X kimi-k31-712d9eb image and released DSpark draft, align with InferenceX#5119
- [#68198](https://github.com/vllm-project/vllm/pull/68198) [Model] Add Nemotron Shortcut (text, MTP, vision-language)
- [#69264](https://github.com/vllm-project/vllm/pull/69264) [Recipe] Kimi-K3.1-Pro: B300 PD preset on kimi-k31-mc-f4c9618, align with InferenceX#5175
- [#68827](https://github.com/vllm-project/vllm/pull/68827) [Spec Decode] Support anchor-first (sample_from_anchor) DFlash/DFlash2 drafts
- [#69182](https://github.com/vllm-project/vllm/pull/69182) [Recipe] Kimi-K3.1-Pro: move the GB300 AgentX presets to the released DSpark draft, align with InferenceX#5109
- [#68802](https://github.com/vllm-project/vllm/pull/68802) [Bugfix] Apply the video processor frame caps when loading videos
- [#68451](https://github.com/vllm-project/vllm/pull/68451) [Perf][KV Offload] Avoid waking idle FS workers on job completion
- [#69110](https://github.com/vllm-project/vllm/pull/69110) [Bugfix][KV Offload] Preserve reused ARC prefixes during running-request eviction
- [#68408](https://github.com/vllm-project/vllm/pull/68408) [Rust Frontend] Support allowed_tools tool_choice
- [#67961](https://github.com/vllm-project/vllm/pull/67961) [KV Offload] Add access_mode (read|write|readwrite)
- [#68317](https://github.com/vllm-project/vllm/pull/68317) [Bugfix][Multimodal] Pass image kwargs through the OpenCUA processor
- [#68667](https://github.com/vllm-project/vllm/pull/68667) [Frontend] Classify errors in offline LLM APIs
- [#69052](https://github.com/vllm-project/vllm/pull/69052) [Bugfix][Multimodal] Accept torch.Tensor videos in vLLM's own HF processors
- [#69099](https://github.com/vllm-project/vllm/pull/69099) [Bugfix][Multimodal] Accept NumPy images and PIL frame videos in Muse Spark Open
- [#68867](https://github.com/vllm-project/vllm/pull/68867) [CI] Decouple LoRA layer tests from GLM model imports

#### 🐛 New Issues
- [#69243](https://github.com/vllm-project/vllm/issues/69243) [Bug]: Ripple parser drops all text after a tool-call/think tag that appears in plain prose `tool-calling` 💬4
- [#69292](https://github.com/vllm-project/vllm/issues/69292) [v1] Lost worker-failure notification: race between register_failure_callback and the multiproc monitor thread 💬2
- [#69267](https://github.com/vllm-project/vllm/issues/69267) [Bug]: Inkling tool parser re-parses the whole argument on every streamed delta; long tool calls stall the API server and /health `bug` `tool-calling` `inkling` 💬2
- [#69257](https://github.com/vllm-project/vllm/issues/69257) [Bug]: bench serve omits probe counts when all probes fail `bug` 💬2
- [#69304](https://github.com/vllm-project/vllm/issues/69304) `TieringOffloadingSpec` creates a zero-length shared region and fails in `mmap` when `cpu_bytes_to_use` is smaller than one chunk 💬1
- [#69289](https://github.com/vllm-project/vllm/issues/69289) [Bug]: Engine fails to start on a multi-GPU node when any GPU, even one it does not use, cannot be queried by NVML 💬1
- [#69241](https://github.com/vllm-project/vllm/issues/69241) [Bug]: Parser engine tool parsers (granite, llama3_json, inkling): arguments sent as a JSON-encoded string stream as '' but are returned without streaming `tool-calling` `inkling` 💬1
- [#69209](https://github.com/vllm-project/vllm/issues/69209) [Bug]: Elastic EP: a failed scale-up leaves an uncancellable future that kills an EngineCore 30 minutes later `bug` 💬1
- [#69217](https://github.com/vllm-project/vllm/issues/69217) [Bug]: vllm 0.34 fails to load model: Audar ASR Turbo `bug` 💬1
- [#69213](https://github.com/vllm-project/vllm/issues/69213) [Bug]: jamba tool parser, stream=true: text before <tool_calls> is dropped when it arrives in the same delta as the opener (e.g. stream_interval > 1) `rocm` `tool-calling` 💬1
- [#69206](https://github.com/vllm-project/vllm/issues/69206) [Performance]: Mamba2 _chunk_scan_fwd_kernel slows down about 2x past 16k-24k tokens per call because its launch order defeats L2 reuse `performance` 💬1
- [#69204](https://github.com/vllm-project/vllm/issues/69204) [Performance]: Mamba2 SSD prefill cost grows with the number of short prompts in a step, not with tokens (about 20x for the same 2,048 tokens) `performance` 💬1
- [#69320](https://github.com/vllm-project/vllm/issues/69320) [Bug]: Transformers backend: OmniASR fails at startup because `padding_mask` is kept on CPU but forwarded to `get_audio_features` `bug`
- [#69306](https://github.com/vllm-project/vllm/issues/69306) [Performance]: Whisper steps that admit new audio run fully eager (est. +25–30% throughput on H100 at high concurrency)
- [#69303](https://github.com/vllm-project/vllm/issues/69303) `SharedOffloadRegion` leaks an extra segment's file descriptor when `ftruncate` fails
- [#69291](https://github.com/vllm-project/vllm/issues/69291) [Bug][KV Connector] kv_load_failure_policy="recompute": a failed sync-load block stays a prefix-cache hit after its owner finishes, so other requests decode from never-loaded KV
- [#69283](https://github.com/vllm-project/vllm/issues/69283) [RFC]: Fused NVFP4 MoE kernels for Muse Spark on Hopper (SM90) `RFC` `quantization`
- [#69281](https://github.com/vllm-project/vllm/issues/69281) [Feature] Inkling 2 Mini on Ampere (A100 / RTX 3090) using NVFP4 + FP8 Marlin weight-only paths `inkling`
- [#69280](https://github.com/vllm-project/vllm/issues/69280) [Inkling 2 Mini] Hybrid KV planner reserves ~1.7-2.7x the theoretical KV cache ("Add 7 padding layers, may waste at most 350%") `inkling`
- [#69279](https://github.com/vllm-project/vllm/issues/69279) [Bug]: --hf-overrides '{"rope_theta": N}' is accepted silently but has no effect on Qwen3 (the value lives under rope_parameters) `bug`
- [#69269](https://github.com/vllm-project/vllm/issues/69269) [Bug]: HF3FS connector can store another request's KV under a preempted request's block hashes
- [#69263](https://github.com/vllm-project/vllm/issues/69263) [Feature]: Inkling 2 mini on Intel XPU `feature request` `intel-gpu` `inkling`
- [#69258](https://github.com/vllm-project/vllm/issues/69258) [Bug]: Qwen3-Next-80B next-token top-10 set changes between default splitting and splitting_ops=[] under Inductor `bug`
- [#69238](https://github.com/vllm-project/vllm/issues/69238) [Bug]: prefix_repetition can generate a shorter shared token prefix than requested
- [#69237](https://github.com/vllm-project/vllm/issues/69237) [Feature]: Process checkpoint support for the native CPU KV offload connector (OffloadingConnector) `feature request`
- [#69228](https://github.com/vllm-project/vllm/issues/69228) [Bug]: Intermittent CUDA OOM in DCP a2a combine fallback (`_dcp_a2a_send_recv_buffers`) at high concurrency with short prompts — Kimi-K3.1-Pro, TP8 + DCP8, `gpu-memory-utilization 0.97` `kimi`
- [#69227](https://github.com/vllm-project/vllm/issues/69227) [Bug]: lfm2 / olmo3 / pythonic / llama4_pythonic tool parsers, stream=true: a call with an unbalanced quote is streamed as a tool call with non-JSON arguments, while non-streaming returns it as text `tool-calling`
- [#69210](https://github.com/vllm-project/vllm/issues/69210) [Bug]: Fused collective benchmark omits measured baselines when computing speedups `bug` `quantization`

#### 🔒 Closed Issues
- [#66698](https://github.com/vllm-project/vllm/issues/66698) [Bug]: `vllm bench serve --num-warmups` primes the prefix cache, so the first measured request is a cache hit
- [#66696](https://github.com/vllm-project/vllm/issues/66696) [Bug][KV Offload] A request with more unstored chunks than the CPU tier is never offloaded ("cannot store chunks" on every step)
- [#69289](https://github.com/vllm-project/vllm/issues/69289) [Bug]: Engine fails to start on a multi-GPU node when any GPU, even one it does not use, cannot be queried by NVML

### SGLang (`sgl-project/sglang`)

**Stars:** 38,952 · **Open issues:** 7,056 · **Last push:** <1h ago

Today was relatively routine for SGLang, with no new releases. Notable merged pull requests include a significant fix for the Qwen3.5 quantization rule failure, which addresses accuracy degradation, and performance improvements for the MiniMax-H3 model, including the building of vision-tower cuDNN attention kernels during warm-up. Additionally, enhancements were made to the diffusion's handling of various configurations and components, aiming to optimize both functionality and efficiency. A newly reported issue highlights a potential service degradation caused by an unbounded instances list in the vertex generation endpoint, leading to ZMQ socket exhaustion.

#### ✅ Merged PRs
- [#52373](https://github.com/sgl-project/sglang/pull/52373) [Fix] cookbook: Render AgentX linker options with --unified-cache-external-linker-config
- [#51747](https://github.com/sgl-project/sglang/pull/51747) [Fix] [NPU] hicache: Drop the MemFabric giant-page flag for AICPU
- [#36727](https://github.com/sgl-project/sglang/pull/36727) [Fix] diffusion: Preserve mapped component weights during low-memory offload
- [#51238](https://github.com/sgl-project/sglang/pull/51238) [CI] [Intel] ci/xpu: Use per-job container names so XPU runners can share a host
- [#52069](https://github.com/sgl-project/sglang/pull/52069) [CI] [Intel] ci/xpu: Add an Arc Pro B70 diffusion perf baseline and pick it per device
- [#46559](https://github.com/sgl-project/sglang/pull/46559) [Fix] [CPU] Fix: Qwen3.5-35B-A3B-GPTQ-Int4 quantization rule failure and accuracy degradation
- [#50968](https://github.com/sgl-project/sglang/pull/50968) [Feat] [NPU] DSA-TAIL: Support PD-transfer and decode-retraction
- [#47410](https://github.com/sgl-project/sglang/pull/47410) [Perf] deterministic: Launch a fixed number of Triton decode blocks for large split budgets
- [#51734](https://github.com/sgl-project/sglang/pull/51734) [Test] multimodal_gen: Fake the platform in the MiniMax-H3 video config
- [#52023](https://github.com/sgl-project/sglang/pull/52023) [Feat] diffusion: Serve MiniMax-H3 fl2va and ref2va from one server (--model-variant fl2va+ref2va)
- [#52216](https://github.com/sgl-project/sglang/pull/52216) [CI] [AMD] diffusion: Check the CUDA partition plan against its own registry
- [#52224](https://github.com/sgl-project/sglang/pull/52224) [Perf] diffusion: No request-path recompiles of the VSA-H3 kernels and the exact scaled residual add
- [#52225](https://github.com/sgl-project/sglang/pull/52225) [Perf] diffusion: Build MiniMax-H3's vision-tower cuDNN attention kernels in the warm-up
- [#50469](https://github.com/sgl-project/sglang/pull/50469) [Perf] hicache: Fence write_back eviction copies on the forward stream instead of blocking the scheduler
- [#46460](https://github.com/sgl-project/sglang/pull/46460) [Feat] pd: Extract MooncakeTransport behind a common Transport interface
- [#51632](https://github.com/sgl-project/sglang/pull/51632) [Fix] moe/tuning: Tune NemotronH's non-gated relu2 MoE with its real shape
- [#50906](https://github.com/sgl-project/sglang/pull/50906) [Feat] glm5_next: Support LayerNorm sequence parallelism
- [#51999](https://github.com/sgl-project/sglang/pull/51999) [Perf] diffusion/ltx-2.3: Reuse the cond pass's prefix blocks for the STG pass
- [#52220](https://github.com/sgl-project/sglang/pull/52220) [Perf] diffusion: replay launches for six more hot Triton wrappers
- [#52226](https://github.com/sgl-project/sglang/pull/52226) [Fix] diffusion/lora: Snapshot the offloaded weight when committing a merged LoRA as the base
- [#52074](https://github.com/sgl-project/sglang/pull/52074) [Fix] kernels: Guard zero-token launch in grouped_gemma_rmsnorm
- [#46784](https://github.com/sgl-project/sglang/pull/46784) [Perf] speculative: Fill the DSA MTP draft's prefill KV cache without attention for all but the last token

#### 🐛 New Issues
- [#52345](https://github.com/sgl-project/sglang/issues/52345) [Bug] Unbounded `instances` list in `POST /vertex_generate` causes ZMQ REQ socket / file-descriptor exhaustion (`Too many open files`) and service degradation 💬3
- [#52318](https://github.com/sgl-project/sglang/issues/52318) [Bug] Qwen3-Omni: vision and audio layers are built under names the quantization ignore list never matches, so cyankiwi/Qwen3-Omni-30B-A3B-Instruct-AWQ-4bit fails to start 💬2
- [#52423](https://github.com/sgl-project/sglang/issues/52423) [Bug] radix_eviction_policy=priority ignores --schedule-low-priority-values-first, evicting highest-priority prefixes first 💬1
- [#52215](https://github.com/sgl-project/sglang/issues/52215) [Bug][CP] DeepSeek-V4.1-Flash pre_from_prev + CP8: vision MoE router input_ids shape mismatch in moe_fused_gate (a2a=none) 💬1
- [#52274](https://github.com/sgl-project/sglang/issues/52274) [Bug] gemma4: Vision attention ignores the padding mask on fa3 / fa4 / triton_attn 💬1
- [#52432](https://github.com/sgl-project/sglang/issues/52432) [Bug] bench_serving crashes with IndexError when every request fails
- [#52408](https://github.com/sgl-project/sglang/issues/52408) [Fix] sse: Drop the complete remainder of oversized physical lines
- [#52389](https://github.com/sgl-project/sglang/issues/52389) [Feature] FP8 prefill attention on SM120 via FlashInfer cute-dsl-prims (2-2.35× vs FA2 with FP8 KV)
- [#52353](https://github.com/sgl-project/sglang/issues/52353) [Bug] multimodal_gen: Client-controlled `profile` parameters on `/v1/images/generations` allow unbounded profiler trace writes to disk
- [#52335](https://github.com/sgl-project/sglang/issues/52335) [Feature] Support microsoft/Aion-1.0-Instruct-2.3B
- [#52209](https://github.com/sgl-project/sglang/issues/52209) [Bug] compressed-tensors: models without `packed_modules_mapping` build ignored q/k/v and gate/up layers quantized, and the server answers garbage with no error (LFM2-MoE, GLM-4.5, DeepSeek-V3-style AWQ)
- [#52208](https://github.com/sgl-project/sglang/issues/52208) [Bug] AWQ: `modules_to_not_convert` never matches a fused layer, so Qwen3.5/3.6 AWQ attention is built quantized (load error on main, wrong output on v0.5.23)
- [#52213](https://github.com/sgl-project/sglang/issues/52213) [Perf] hicache: unconditional _all_reduce_attn_groups in the drain collective when the linker is idle

#### 🔒 Closed Issues
- [#36830](https://github.com/sgl-project/sglang/issues/36830) [Bug] GLM-5.3-Flash cannot use FP8 KV cache: `index_kpool > 1` excludes `flashmla_kv`, and no CUDA DSA backend supports bf16-query x fp8-KV
- [#39831](https://github.com/sgl-project/sglang/issues/39831) [Bug] GLM-5.3-Flash vision silently broken on main: pinned transformers==5.12.1 lacks glm5_next, AutoProcessor degrades to TokenizersBackend
- [#40751](https://github.com/sgl-project/sglang/issues/40751) [Bug] Kimi-K3 EP32: severe repetition and accuracy regression with MegaMoE, not observed with DeepEP
- [#34719](https://github.com/sgl-project/sglang/issues/34719) [Bug] Scheduler crashes with AttributeError ('list' object has no attribute 'tolist') on mixed batches with token_ids_logprob — prefill and decode paths, v0.5.14–v0.5.17
- [#40901](https://github.com/sgl-project/sglang/issues/40901) [Bug]: abort chunk re-sends the full accumulated text under --incremental-streaming-output
- [#39277](https://github.com/sgl-project/sglang/issues/39277) [Bug] b12x-vision dev-v4f-2dgx regresses DSV4 history argument encoding from #28035
- [#51627](https://github.com/sgl-project/sglang/issues/51627) [Bug] fused_moe_triton tuner: NemotronH is tuned with a gated SiLU shape, but its MoE is non-gated relu2
- [#40973](https://github.com/sgl-project/sglang/issues/40973) [Bug] Large HiCache UCX startup timeout on downstream build; not reproduced on v0.5.20
- [#40966](https://github.com/sgl-project/sglang/issues/40966) [Bug] Gemma 4 31B (attention_k_eq_v) PEFT LoRA adapter fails to load: missing v_proj, wrong per-layer buffer dims, vision-tower tensors collide
- [#40956](https://github.com/sgl-project/sglang/issues/40956) [RFC] Some details relates to SGLang renderer item 4
- [#40817](https://github.com/sgl-project/sglang/issues/40817) [Feature] Forward unknown tool calls by default; the parse-time drop kills agent loops
- [#40789](https://github.com/sgl-project/sglang/issues/40789) [Bug] /v1/responses: accepted `xhigh` reasoning effort aborts the stream inside ResponseCreatedEvent
- [#40809](https://github.com/sgl-project/sglang/issues/40809) [Bug] v0.5.19 tokenizer hang
- [#40808](https://github.com/sgl-project/sglang/issues/40808) [Bug] v0.5.19 can't decode image
- [#51099](https://github.com/sgl-project/sglang/issues/51099) [Bug] `chunked_sgmv_lora_shrink_forward` / `chunked_sgmv_lora_expand_forward`: token row offset wraps for >= 2^31 elements
- [#48462](https://github.com/sgl-project/sglang/issues/48462) Allow models outside sglang's architecture list to use the MLA KV cache (detect MLA from config, not architecture name)
- [#51110](https://github.com/sgl-project/sglang/issues/51110) [Bug] Mamba2 target verify with `--speculative-adaptive` writes intermediate SSM states with the wrong row stride

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 136,149 · **Open issues:** 2,644 · **Last push:** <1h ago

In the last 24 hours, llama.cpp released versions b12648, b12647, and b12646, with key updates including the addition of q4_k cooperative-k c8 GEMM for OpenCL verification, improvements in guaranteed GDN snapshot slot comparisons, and a new generic fallback in the ggml backend for tensor memory settings. Among the notable merged pull requests is the enhancement of shared audio FFT for faster processing and fixes for the Qwen3a audio tail issue, as well as implementing token-aware parsing in chat functionalities. However, the day also saw the emergence of significant new issues, including a crash in the Inkling tool-call grammar when thinking is disabled, raising concerns among users. These advancements and challenges illustrate both the rapid development and ongoing hurdles in the llama.cpp ecosystem.

#### 🚀 New Releases
- [b12648](https://github.com/ggml-org/llama.cpp/releases/tag/b12648) b12648
- [b12647](https://github.com/ggml-org/llama.cpp/releases/tag/b12647) b12647
- [b12646](https://github.com/ggml-org/llama.cpp/releases/tag/b12646) b12646
- [b12645](https://github.com/ggml-org/llama.cpp/releases/tag/b12645) b12645
- [b12644](https://github.com/ggml-org/llama.cpp/releases/tag/b12644) b12644
- [b12643](https://github.com/ggml-org/llama.cpp/releases/tag/b12643) b12643
- [b12642](https://github.com/ggml-org/llama.cpp/releases/tag/b12642) b12642
- [b12641](https://github.com/ggml-org/llama.cpp/releases/tag/b12641) b12641
- [b12640](https://github.com/ggml-org/llama.cpp/releases/tag/b12640) b12640
- [b12638](https://github.com/ggml-org/llama.cpp/releases/tag/b12638) b12638

#### ✅ Merged PRs
- [#32716](https://github.com/ggml-org/llama.cpp/pull/32716) opencl: add q4_k coop-k c8 GEMM for spec verify
- [#32820](https://github.com/ggml-org/llama.cpp/pull/32820) tests : compare only the guaranteed GDN snapshot slots
- [#32574](https://github.com/ggml-org/llama.cpp/pull/32574) ggml-backend : generic fallback in ggml_backend_tensor_memset
- [#32843](https://github.com/ggml-org/llama.cpp/pull/32843) chat: fix LFM2.5-VL template detection
- [#32815](https://github.com/ggml-org/llama.cpp/pull/32815) mtmd: speed up shared audio FFT
- [#32697](https://github.com/ggml-org/llama.cpp/pull/32697) mtmd: fix qwen3a audio tail
- [#32735](https://github.com/ggml-org/llama.cpp/pull/32735) vulkan : support non-contiguous src in SCALE
- [#32807](https://github.com/ggml-org/llama.cpp/pull/32807) llama : copy all experts of a host weight shared by several nodes
- [#32799](https://github.com/ggml-org/llama.cpp/pull/32799) Enable ignore_merges for Inkling 2
- [#32792](https://github.com/ggml-org/llama.cpp/pull/32792) server : add offset pagination to grep_search tool
- [#32819](https://github.com/ggml-org/llama.cpp/pull/32819) [skill] Pay attention to tokenizer flags
- [#29307](https://github.com/ggml-org/llama.cpp/pull/29307) chat : implement token aware parsing
- [#32398](https://github.com/ggml-org/llama.cpp/pull/32398) server: support /models/sse on single-model mode
- [#32790](https://github.com/ggml-org/llama.cpp/pull/32790) HIP: fix double halving of NVFP4 scales on CDNA3
- [#32641](https://github.com/ggml-org/llama.cpp/pull/32641) ggml/gguf : avoid creating invalid enum values from untrusted file data
- [#32126](https://github.com/ggml-org/llama.cpp/pull/32126) ggml : add SIGMOID backward pass
- [#32497](https://github.com/ggml-org/llama.cpp/pull/32497) chat : trigger lazy grammar on bare JSON tool calls
- [#32727](https://github.com/ggml-org/llama.cpp/pull/32727) ggml : fix nonzero clear on WebGPU and non-UMA devices
- [#32782](https://github.com/ggml-org/llama.cpp/pull/32782) webgpu : update GDN supports_op check
- [#32779](https://github.com/ggml-org/llama.cpp/pull/32779) ggml-webgpu : Update to a recent version of Dawn
- [#32686](https://github.com/ggml-org/llama.cpp/pull/32686) opencl: add coopmat GEMM for Adreno 850 (Q4_0, Q5_0, Q8_0, Q4_K, Q5_K, Q6_K)

#### 🐛 New Issues
- [#32818](https://github.com/ggml-org/llama.cpp/issues/32818) chat : inkling tool-call grammar crash with thinking off ("unexpected empty grammar stack") `bug-unconfirmed` 💬4
- [#32817](https://github.com/ggml-org/llama.cpp/issues/32817) Eval bug: Inkling 2 mini `bug-unconfirmed` 💬3
- [#32844](https://github.com/ggml-org/llama.cpp/issues/32844) Misc. bug: test-quant-type-selection fails due to tensor reorganization `bug-unconfirmed` 💬1
- [#32836](https://github.com/ggml-org/llama.cpp/issues/32836) Eval bug: --reasoning-budget re-arms on each new thinking block, Inkling 2 can think forever `bug-unconfirmed` 💬1
- [#32826](https://github.com/ggml-org/llama.cpp/issues/32826) inkling2: check_tensor_dims fails on looped GGUFs with block_count > physical layers (blk.24.attn_q.weight not found) 💬1
- [#32800](https://github.com/ggml-org/llama.cpp/issues/32800) Misc. bug: Inkling2 tool calls fail with HTTP 500 on Vulkan 💬1
- [#32810](https://github.com/ggml-org/llama.cpp/issues/32810) V100 (sm_70): prefill regression in 1.0 for hybrid (GDN) models — Volta FATTN config halves nbatch_V2 vs 0.4.1 💬1
- [#32853](https://github.com/ggml-org/llama.cpp/issues/32853) Qwen3-Coder: tool-call markup written inside answer text (a code example) starts the lazy tool grammar -> false tool call or HTTP 500 "Unexpected empty grammar stack"
- [#32852](https://github.com/ggml-org/llama.cpp/issues/32852) Eval bug: HIP MI300X: SOFT_MAX over wide rows drops partials; --backend-sampling never samples upper vocabulary ids `bug-unconfirmed`
- [#32849](https://github.com/ggml-org/llama.cpp/issues/32849) Feature Request: Support assistant message phases in the Responses API
- [#32847](https://github.com/ggml-org/llama.cpp/issues/32847) Compile bug: [CUDA 11.4 / Jetson] Build failures in ggml-cuda: missing nvml.h, missing nvmlBrandType_t/nvmlDeviceGetBrand, and constexpr evaluation in mmq-few.cu `bug-unconfirmed`
- [#32846](https://github.com/ggml-org/llama.cpp/issues/32846) inkling2_loop prefill: ~28% of GPU time in MoE gather + scalar copies (fused mul_mat_id request)
- [#32842](https://github.com/ggml-org/llama.cpp/issues/32842) Misc. bug: After updating stb_image in #32305, some valid progressive JPEGs fail to load with "bad huffman code" `bug-unconfirmed`
- [#32834](https://github.com/ggml-org/llama.cpp/issues/32834) Misc. bug: server: file_glob_search with path "~" fails under --tools-runtime isolate (docker/podman/ssh) `bug-unconfirmed`
- [#32830](https://github.com/ggml-org/llama.cpp/issues/32830) Eval bug: Garbled output when running ggml-org/Inkling-2-Mini-GGUF:IQ4_NL with cpu-moe = true and using moe-cache-mib for hybrid offloading `bug-unconfirmed`
- [#32823](https://github.com/ggml-org/llama.cpp/issues/32823) Misc. bug: Anthropic /v1/messages conversion puts a user message's text before its tool results
- [#32798](https://github.com/ggml-org/llama.cpp/issues/32798) Misc. bug: Tokenizer Inkling 2: token IDs differ from HF because `ignore_merges` is not enabled `bug-unconfirmed`
- [#32821](https://github.com/ggml-org/llama.cpp/issues/32821) Misc. bug: GGUF loader aborts when tensor data exceeds file size `bug-unconfirmed`
- [#32812](https://github.com/ggml-org/llama.cpp/issues/32812) Eval bug: -m Inkling-2-Mini-Uncensored-AD-Q4_K.gguf ----mmproj mmproj-Inkling-2-Mini-Uncensored-BF16.gguf `bug-unconfirmed`
- [#32804](https://github.com/ggml-org/llama.cpp/issues/32804) CUDA: GGML_ASSERT(s2 <= uint32_t::max()) abort in binbcast.cu:266 with ~79k+ token context (launch_bin_bcast_pack op_add)
- [#32803](https://github.com/ggml-org/llama.cpp/issues/32803) MoE cache: a requested cache with no cacheable layer is silently disabled instead of failing
- [#32802](https://github.com/ggml-org/llama.cpp/issues/32802) Eval bug: llama-server returns no tool call for ggml-org/TML-d24-varloop-research-GGUF `bug-unconfirmed`
- [#32789](https://github.com/ggml-org/llama.cpp/issues/32789) Eval bug: HIP gfx942 (MI300X): every NVFP4 matmul is wrong, the UE4M3 block scales are halved twice `bug-unconfirmed`
- [#32788](https://github.com/ggml-org/llama.cpp/issues/32788) Misc. bug: `bug-unconfirmed`

#### 🔒 Closed Issues
- [#24822](https://github.com/ggml-org/llama.cpp/issues/24822) Server: improve progress reporting
- [#24473](https://github.com/ggml-org/llama.cpp/issues/24473) Feature: Compact Conversation Action
- [#28090](https://github.com/ggml-org/llama.cpp/issues/28090) Feature Request: Add an sm_86 entry to the MMVQ cutoff table (Q4_0 crosses at 7 on A10, worth 9.1%)
- [#27733](https://github.com/ggml-org/llama.cpp/issues/27733) [server] final peg-native parse failure on trailing "<think>" tail discards an entire completed generation (Qwen3.8)
- [#32817](https://github.com/ggml-org/llama.cpp/issues/32817) Eval bug: Inkling 2 mini
- [#29366](https://github.com/ggml-org/llama.cpp/issues/29366) Compile bug: [SYCL] <unknown>:0: error: Undefined temporary symbol
- [#29455](https://github.com/ggml-org/llama.cpp/issues/29455) Eval bug: [Vulkan] startup crash after PR # 26081 (Confirmed regression via git bisect)
- [#32291](https://github.com/ggml-org/llama.cpp/issues/32291) Misc. bug: OpenVINO backend fails on Qwen3.5 models (mask shape mismatch on CPU device, SIGSEGV on GPU device)
- [#30251](https://github.com/ggml-org/llama.cpp/issues/30251) Windows/Vulkan/gfx1151: repeated failed allocations poison device memory until reboot (driver-side leak; reproducible)
- [#32755](https://github.com/ggml-org/llama.cpp/issues/32755) inkling2_loop: garbage output when loop-layer experts run on CPU (--n-cpu-moe) with long prompts; correct with --override-tensor offloading only non-loop layers
- [#30195](https://github.com/ggml-org/llama.cpp/issues/30195) Eval bug: EmbeddingGemma-2 vision is generating more tokens than set.
- [#30224](https://github.com/ggml-org/llama.cpp/issues/30224) Eval bug: Mistral Small 4 CUDA expert down-projections fall back to CPU despite 37/37 layers offloaded
- [#30230](https://github.com/ggml-org/llama.cpp/issues/30230) Eval bug: Vulkan + mmproj: ~250x slower generation with a UD-Q3_K_XL quant of Qwen3.5-35B-A3B (same projector is fine with the IQ3_XXS quant)
- [#30231](https://github.com/ggml-org/llama.cpp/issues/30231) Feature Request: Vectorize GEGLU and GELU
- [#32826](https://github.com/ggml-org/llama.cpp/issues/32826) inkling2: check_tensor_dims fails on looped GGUFs with block_count > physical layers (blk.24.attn_q.weight not found)
- [#32749](https://github.com/ggml-org/llama.cpp/issues/32749) Eval bug: RDNA1 token corruption on gpt-oss models with attention
- [#32742](https://github.com/ggml-org/llama.cpp/issues/32742) Misc. bug:
- [#32689](https://github.com/ggml-org/llama.cpp/issues/32689) Eval bug: Qwen3-Omni / Qwen3-ASR audio: extra tokens from zero-padding, mismatch with transformers
- [#32823](https://github.com/ggml-org/llama.cpp/issues/32823) Misc. bug: Anthropic /v1/messages conversion puts a user message's text before its tool results
- [#32798](https://github.com/ggml-org/llama.cpp/issues/32798) Misc. bug: Tokenizer Inkling 2: token IDs differ from HF because `ignore_merges` is not enabled
- [#32537](https://github.com/ggml-org/llama.cpp/issues/32537) Eval bug: grep_search cannot retrieve matches beyond the first 100 results
- [#32496](https://github.com/ggml-org/llama.cpp/issues/32496) Misc. bug: no grammar for Llama 3.x tool calls with tool_choice=auto
- [#32789](https://github.com/ggml-org/llama.cpp/issues/32789) Eval bug: HIP gfx942 (MI300X): every NVFP4 matmul is wrong, the UE4M3 block scales are halved twice
- [#32788](https://github.com/ggml-org/llama.cpp/issues/32788) Misc. bug:

### Ollama (`ollama/ollama`)

**Stars:** 187,899 · **Open issues:** 4,732 · **Last push:** 17h ago

On November 23, 2026, there were no new releases for Ollama, but a significant merged pull request (#19805) introduced shared tensor helpers and model setup across different architectures, enhancing code efficiency and reusability. Among new issues, a notable concern was raised in #19841 regarding the checkedDialer function, which currently only dials the first resolved address, risking blob pull failures if that address is unreachable. Additional reported issues included a persistent "Connect" button for the Claude Code feature after restarting and discrepancies in VRAM usage for the qwen3.8:27b-mtp_q8 model. Overall, today's developments reflect ongoing improvements and user-reported challenges in the system.

#### ✅ Merged PRs
- [#19805](https://github.com/ollama/ollama/pull/19805) mlxrunner: share tensor helpers and model setup across architectures

#### 🐛 New Issues
- [#19841](https://github.com/ollama/ollama/issues/19841) transfer: checkedDialer dials only the first resolved address, so blob pulls fail when it is unreachable 💬2
- [#19836](https://github.com/ollama/ollama/issues/19836) Claude Code button still says “Connect” after restart, and Settings has no Claude model selector. `bug` 💬1
- [#19833](https://github.com/ollama/ollama/issues/19833) the model (qwen3.8:27b-mtp_q8)uses 127g vram instead of 51g before `bug` 💬1
- [#19834](https://github.com/ollama/ollama/issues/19834) manifest: v2 host encoding does not round-trip when a host contains "%" `bug` 💬1
- [#19840](https://github.com/ollama/ollama/issues/19840) Windows auto-update: taskkill.exe/cmd.exe fail with 0xc0000142 and app is not relaunched (Restart Manager leaves installer attached to a dead console)
- [#19837](https://github.com/ollama/ollama/issues/19837) ollama

#### 🔒 Closed Issues
- [#14016](https://github.com/ollama/ollama/issues/14016) Docker 0.15.3 failed to initialize MLX
- [#19837](https://github.com/ollama/ollama/issues/19837) ollama

### LiteLLM (`BerriAI/litellm`)

**Stars:** 63,726 · **Open issues:** 5,462 · **Last push:** <1h ago

In a routine maintenance day for LiteLLM on November 23, 2026, no new releases were announced, but several significant updates were merged. Notably, the addition of native Prisma v2.5 and v3 REST transcription support was implemented in the lts/1.108.x branch, along with various enhancements to the Rust Gateway, including parallel request limiting and improved handling of virtual keys. Among the numerous fixes, issues such as the preservation of OAuth scope refusals during token refresh and the handling of empty AWS event streams received attention. However, the day also brought to light serious security concerns, including CORS misconfigurations and blind SSRF vulnerabilities in API endpoints, highlighting the need for prompt remediation.

#### ✅ Merged PRs
- [#53672](https://github.com/BerriAI/litellm/pull/53672) feat(gnani): add native Prisma v2.5 and v3 REST transcription support on lts/1.108.x
- [#52520](https://github.com/BerriAI/litellm/pull/52520) feat(gnani): add native Prisma v2.5 and v3 REST transcription support
- [#53015](https://github.com/BerriAI/litellm/pull/53015) feat(gateway): wire callbacks-model-capacity to Rust Gateway
- [#52839](https://github.com/BerriAI/litellm/pull/52839) feat(gateway): wire callbacks-parallel-request-limiter to Rust Gateway
- [#53333](https://github.com/BerriAI/litellm/pull/53333) feat(gateway): honor a virtual key's model list natively
- [#53332](https://github.com/BerriAI/litellm/pull/53332) feat(gateway): read a virtual key through the auth cache shared with the Python pods
- [#52813](https://github.com/BerriAI/litellm/pull/52813) feat(gateway): answer a virtual key that carries no limits natively, read from the database
- [#53342](https://github.com/BerriAI/litellm/pull/53342) refactor(gateway-auth): authenticate through the core and carry its caller
- [#53257](https://github.com/BerriAI/litellm/pull/53257) fix(proxy): count Vertex and Bedrock batch input tokens
- [#53454](https://github.com/BerriAI/litellm/pull/53454) fix(router): keep chat and other non-batch calls off Azure batch-only deployments in mixed groups
- [#53428](https://github.com/BerriAI/litellm/pull/53428) fix(vertex_ai): send service_tier to Vertex Gemini as tier headers (#34959) [lts/1.108.x]
- [#53200](https://github.com/BerriAI/litellm/pull/53200) fix(mcp): preserve OAuth scope refusals during token refresh
- [#34959](https://github.com/BerriAI/litellm/pull/34959) fix(vertex_ai): send service_tier to Vertex Gemini as tier headers
- [#53591](https://github.com/BerriAI/litellm/pull/53591) fix(bedrock): send tool_choice to Mistral Large 3 and Ministral 3 on Converse (#53589) [lts/1.108.x]
- [#53589](https://github.com/BerriAI/litellm/pull/53589) fix(bedrock): send tool_choice to Mistral Large 3 and Ministral 3 on Converse
- [#53670](https://github.com/BerriAI/litellm/pull/53670) chore(cost-map): switch fal_ai flux-3-max video rows to the regular rate after the promotion ended
- [#53483](https://github.com/BerriAI/litellm/pull/53483) fix(sagemaker,bedrock): backport 502 on empty or cut AWS event streams to lts/1.108.x
- [#53482](https://github.com/BerriAI/litellm/pull/53482) fix(sagemaker,bedrock): answer 502 when a 200 AWS event stream decodes to no events or ends mid-frame
- [#53446](https://github.com/BerriAI/litellm/pull/53446) fix(gemini): replay each assistant image's thought signature on its own part
- [#53435](https://github.com/BerriAI/litellm/pull/53435) fix(gemini): replay each assistant image's thought signature on its own part
- [#53412](https://github.com/BerriAI/litellm/pull/53412) fix(proxy): size the budget hold for Gemini native generateContent bodies
- [#53426](https://github.com/BerriAI/litellm/pull/53426) fix(mistral): map tool call ids to Mistral's 9-char shape on Vertex AI and Bedrock for lts/1.108.x
- [#53416](https://github.com/BerriAI/litellm/pull/53416) fix(mistral): map tool call ids to Mistral's 9-char shape on Vertex AI and Bedrock
- [#53393](https://github.com/BerriAI/litellm/pull/53393) fix(anthropic): skip a stream data line that is not a JSON object
- [#53590](https://github.com/BerriAI/litellm/pull/53590) fix(vertex_ai)!: send the caller's anthropic-version in the Vertex Claude /v1/messages body on lts/1.108.x
- [#53415](https://github.com/BerriAI/litellm/pull/53415) fix(vertex_ai): pin const values on Gemini tool and response schemas (lts/1.108.x)
- [#53462](https://github.com/BerriAI/litellm/pull/53462) fix(router): register a model_id Bedrock deployment after an ARN deployment for the same profile
- [#53461](https://github.com/BerriAI/litellm/pull/53461) fix(router): register a model_id Bedrock deployment after an ARN deployment for the same profile
- [#53584](https://github.com/BerriAI/litellm/pull/53584) fix(responses): backport #53410 tool call replay to lts/1.108.x
- [#53410](https://github.com/BerriAI/litellm/pull/53410) fix(responses): replay tool calls a client answers in managed WebSocket history
- [#53404](https://github.com/BerriAI/litellm/pull/53404) fix(auth): enforce key budgets on Google generateContent calls that leave the model out of the URL
- [#53425](https://github.com/BerriAI/litellm/pull/53425) fix(proxy): route token counts with the caller's team like inference
- [#53443](https://github.com/BerriAI/litellm/pull/53443) fix(cost-map): add count_tokens framing for grok-4.3 hosts and Azure grok-4-1-fast-non-reasoning
- [#53442](https://github.com/BerriAI/litellm/pull/53442) fix(openai_like): honor the deployment timeout and stream_timeout on async streams
- [#53409](https://github.com/BerriAI/litellm/pull/53409) fix(azure_ai)!: backport Foundry project and /openai/v1 chat routing to lts/1.108.x
- [#53420](https://github.com/BerriAI/litellm/pull/53420) fix(gemini): send video_url content parts to Gemini instead of dropping them
- [#53406](https://github.com/BerriAI/litellm/pull/53406) fix(gemini): send video_url content parts to Gemini instead of dropping them
- [#53418](https://github.com/BerriAI/litellm/pull/53418) fix(cost-map): add count_tokens framing for grok-4.3 hosts and Azure grok-4-1-fast-non-reasoning
- [#50354](https://github.com/BerriAI/litellm/pull/50354) fix(router): make the constructor stub work for mypy and guard it in CI
- [#53413](https://github.com/BerriAI/litellm/pull/53413) fix(vertex_ai): pin const values on Gemini tool and response schemas
- [#53575](https://github.com/BerriAI/litellm/pull/53575) test(proxy): expect the rollover guard in the budget update test
- [#53574](https://github.com/BerriAI/litellm/pull/53574) test(realtime): fix three unit tests left red by the GPT-Live attach routes
- [#53309](https://github.com/BerriAI/litellm/pull/53309) feat(proxy)!: carry unused budget into the next period with a cap
- [#53552](https://github.com/BerriAI/litellm/pull/53552) refactor: drop slop comments and string getattr from fresh code
- [#53548](https://github.com/BerriAI/litellm/pull/53548) feat(realtime): bill translation WebRTC calls by the time the call ran
- [#53277](https://github.com/BerriAI/litellm/pull/53277) fix(models): declare GPT-Live and translation endpoints
- [#53549](https://github.com/BerriAI/litellm/pull/53549) test(e2e): expect the Models refresh action in the page header above the tabs
- [#53279](https://github.com/BerriAI/litellm/pull/53279) fix(models): accept the Live sessions route in the Rust catalog
- [#53542](https://github.com/BerriAI/litellm/pull/53542) test(e2e): match the renamed Virtual Key and Admin labels in UI specs
- [#53545](https://github.com/BerriAI/litellm/pull/53545) test(e2e): expect the Admin Settings heading on the admin page
- [#53544](https://github.com/BerriAI/litellm/pull/53544) test(e2e): match the Skills Hub search placeholder
- [#53543](https://github.com/BerriAI/litellm/pull/53543) test(e2e): expect only key-creating teams in the Create Key team dropdown
- [#53536](https://github.com/BerriAI/litellm/pull/53536) refactor(ui): move seven full-height pages onto the layout frame
- [#53537](https://github.com/BerriAI/litellm/pull/53537) fix(ui): always show lifetime spend and top-align the key Spend card
- [#53534](https://github.com/BerriAI/litellm/pull/53534) fix(ui): restore Lens onboarding and configured launch links
- [#53282](https://github.com/BerriAI/litellm/pull/53282) feat(realtime)!: serve GPT-Live over WebRTC with sideband attach, and bill WebRTC calls from a proxy sideband
- [#53514](https://github.com/BerriAI/litellm/pull/53514) feat(ui): redesign the virtual key overview, header and loading state
- [#53532](https://github.com/BerriAI/litellm/pull/53532) test(proxy): wait for a team block to reach the peer proxy before expecting a new team key to be refused
- [#53477](https://github.com/BerriAI/litellm/pull/53477) refactor(ui): move seven more pages onto the layout frame
- [#53530](https://github.com/BerriAI/litellm/pull/53530) test(proxy): expect a keyless log upload to answer 401 like a keyless trace upload
- [#53529](https://github.com/BerriAI/litellm/pull/53529) revert(cli): stop exporting Claude Code model call bodies by default (#53520)

#### 🐛 New Issues
- [#53675](https://github.com/BerriAI/litellm/issues/53675) `/v1/videos/extensions` drops an uploaded video file and sends `video_id: ""` to the provider as `openai` `llm translation` 💬1
- [#53573](https://github.com/BerriAI/litellm/issues/53573) [Security] CORS wildcard (Access-Control-Allow-Origin: *) on all API routes enables cross-origin credential theft 💬1
- [#53698](https://github.com/BerriAI/litellm/issues/53698) [Bug]: Streaming drops provider_specific_fields (Gemini thought_signatures) on chunks that carry images `llm translation`
- [#53685](https://github.com/BerriAI/litellm/issues/53685) [Bug]: Gemini/Vertex tool schema with anyOf of required-only branches loses properties; Google 400 'required[0]: property is not defined' `llm translation`
- [#53684](https://github.com/BerriAI/litellm/issues/53684) [Bug]: Gemini/Vertex tool mapping crashes on boolean sub-schemas (add_object_type: argument of type 'bool' is not iterable) `llm translation`
- [#53677](https://github.com/BerriAI/litellm/issues/53677) A concurrent cache read can restore a removed team member's key while eviction is deleting it from Redis
- [#53676](https://github.com/BerriAI/litellm/issues/53676) Responses WebSocket leaks a parallel-request slot when pre-call processing fails after admission
- [#53572](https://github.com/BerriAI/litellm/issues/53572) [Security] Stored XSS / SSTI payload accepted in key_alias and metadata fields without sanitization
- [#53571](https://github.com/BerriAI/litellm/issues/53571) [Security] Blind SSRF via api_base in /model/new allows internal network scanning and cloud metadata access `llm translation`
- [#53557](https://github.com/BerriAI/litellm/issues/53557) [Security] Mass Assignment in /user/new and /key/generate allows arbitrary spend and budget manipulation
- [#53556](https://github.com/BerriAI/litellm/issues/53556) [Security] JSON Parameter Pollution allows Privilege Escalation to proxy_admin
- [#53540](https://github.com/BerriAI/litellm/issues/53540) Responses API usage drops `speed`, so fast-mode pricing is lost on the Responses bridge `llm translation`

#### 🔒 Closed Issues
- [#45348](https://github.com/BerriAI/litellm/issues/45348) [Bug]: Parallel tool-call arguments dropped when streaming `/v1/messages` for the `chatgpt` (Codex) provider
- [#36124](https://github.com/BerriAI/litellm/issues/36124) [Feature]: Adaptive similarity threshold for the valkey-semantic cache backend
- [#37152](https://github.com/BerriAI/litellm/issues/37152) [Bug]: Blank api_base on a deployment silently overrides its credential's api_base
- [#34914](https://github.com/BerriAI/litellm/issues/34914) [Bug]: service_tier parameter rejected by Vertex AI (v1 API) with 400 for all values
- [#37108](https://github.com/BerriAI/litellm/issues/37108) [Bug]: Admin-only route denials return 401 instead of 403, and are recorded in Prometheus with exception_status="None"
- [#37125](https://github.com/BerriAI/litellm/issues/37125) [Bug]: responses() accepts response_format and silently ignores it — no mapping to text.format, no UnsupportedParamsError
- [#37159](https://github.com/BerriAI/litellm/issues/37159) ResponsesAPIResponse.created_at should be Optional[int] - Azure returns null for in-progress/queued responses
- [#50030](https://github.com/BerriAI/litellm/issues/50030) [Bug]: False `BudgetExceededError` on `/vertex_ai` passthrough due to duplicate `user_api_key_auth` call leaking budget reservations and 1M-token fallback for Gemini `"contents"`
- [#37133](https://github.com/BerriAI/litellm/issues/37133) [Bug]: chat->responses bridge emits output_text input items without required 'annotations' field (strict providers like Azure reject with 400)
- [#37186](https://github.com/BerriAI/litellm/issues/37186) CustomStreamWrapper erases the remembered model when an Azure chunk carries model=None
- [#52543](https://github.com/BerriAI/litellm/issues/52543) Gemini assistant image history drops thought signatures during Chat Completions replay
- [#46009](https://github.com/BerriAI/litellm/issues/46009) [Feature]: Add native GPT-Live support for OpenAI and Azure OpenAI

### Unsloth (`unslothai/unsloth`)

**Stars:** 80,002 · **Open issues:** 581 · **Last push:** <1h ago

On November 23, 2026, there were no new releases for Unsloth. The day saw several significant developments with the merging of pull requests, including #18879, which addresses a 14 GiB memory leak under non-reentrant checkpointing, and #18738, which adds Amharic and other popular African languages to the Translate feature. Notable fixes included a resolution for Studio MLX's rendering issues on Macs (#18964) and the prevention of CUDA context creation on 16GB GPUs (#18734). The team also tackled new issues, notably #18948, which reports a crash of the Studio llama-server on ROCm when launched from within Studio.

#### ✅ Merged PRs
- [#18879](https://github.com/unslothai/unsloth/pull/18879) Free the block compile trial graph under non-reentrant checkpointing (14 GiB leak on MoE)
- [#18864](https://github.com/unslothai/unsloth/pull/18864) NVFP4 QAT: skip unrequested grads in the custom backward
- [#18956](https://github.com/unslothai/unsloth/pull/18956) SFT trainer: run _prepare_dataset on rank 0 first under DDP
- [#18967](https://github.com/unslothai/unsloth/pull/18967) Studio diffusion training: kernel-audit fixes for fp8 Auto, fp8 layout, ROCm budgets, DDP precision, block swap
- [#18969](https://github.com/unslothai/unsloth/pull/18969) CI: pass workflow_dispatch inputs to shell through env
- [#18964](https://github.com/unslothai/unsloth/pull/18964) Studio MLX: fix Z-Image base rendering black / a cyan grid on Macs
- [#18738](https://github.com/unslothai/unsloth/pull/18738) feat(studio): add Amharic and popular African languages to Translate (#18723)
- [#18984](https://github.com/unslothai/unsloth/pull/18984) Studio UI gate: retry the composer focus check briefly after the Hub Run settings close
- [#18976](https://github.com/unslothai/unsloth/pull/18976) Studio Translate: translate audio files
- [#18938](https://github.com/unslothai/unsloth/pull/18938) Restore training mode through train() after temporary mode switches
- [#18737](https://github.com/unslothai/unsloth/pull/18737) feat(studio): add Hmong language support and detection in Translate (#18674)
- [#18820](https://github.com/unslothai/unsloth/pull/18820) Studio: re-ask a call-only final answer without tools, else explain it
- [#18734](https://github.com/unslothai/unsloth/pull/18734) fix(studio): prevent /api/system/hardware from creating CUDA context on 16GB GPUs (#18732)
- [#18893](https://github.com/unslothai/unsloth/pull/18893) Studio: prevent false Windows ROCm APU host-shortfall mmap override
- [#18806](https://github.com/unslothai/unsloth/pull/18806) Studio NPU: read the FastFlowLM model list when flm prints more after it
- [#18899](https://github.com/unslothai/unsloth/pull/18899) Studio RAG: read xlsx formats with text between whole-number digits
- [#18290](https://github.com/unslothai/unsloth/pull/18290) Studio: remember MCP servers per project
- [#18733](https://github.com/unslothai/unsloth/pull/18733) fix(studio): omit presencePenalty and sync capabilities for Gemini 4 models (#18726)
- [#18929](https://github.com/unslothai/unsloth/pull/18929) AsyncGRPO fast_inference: hand the synced adapter to vLLM as tensors, not files (-29% to -40% step)
- [#18955](https://github.com/unslothai/unsloth/pull/18955) Gemma-2, Cohere and Falcon-H1 decode: allocate scratch buffers on the model's device, not cuda:0
- [#18958](https://github.com/unslothai/unsloth/pull/18958) Studio video: load explicit int8 LTX-2.5 on Windows ROCm from the hosted int8 DiT
- [#18946](https://github.com/unslothai/unsloth/pull/18946) Batched decode: read the KV heads in place past a per-card crossover (GRPO padded rollouts -40% step on L4)
- [#18620](https://github.com/unslothai/unsloth/pull/18620) GRPO: require verified packing boundaries for stateful mixers
- [#18934](https://github.com/unslothai/unsloth/pull/18934) Checkpoint-replay down_proj skip: add Gemma-1, make the skip call-scoped and hook-aware (also fixes the shipped Llama-family skip)
- [#18912](https://github.com/unslothai/unsloth/pull/18912) Free probe graphs whose backward never runs in packed attention and PrefixGrouper
- [#18843](https://github.com/unslothai/unsloth/pull/18843) FP8: a torchao stub class is not the blockwise GEMM
- [#18881](https://github.com/unslothai/unsloth/pull/18881) PrefixGrouper on ROCm: static flex compile for calls whose backward runs
- [#18952](https://github.com/unslothai/unsloth/pull/18952) Tests: check the mflux pin against the version the MLX engine expects, and read checked-in sources as UTF-8 (main reds)
- [#18941](https://github.com/unslothai/unsloth/pull/18941) Studio: keep Inkling 2 compute regrowth free under --fit on
- [#18880](https://github.com/unslothai/unsloth/pull/18880) Saved attention on ROCm: bind the route from the setting, route only inside a frame
- [#18936](https://github.com/unslothai/unsloth/pull/18936) TP / PP clip norms in bounded slices (PP peak -23% to -28% with modules_to_save), CP GRPO broadcast host copies on the root only
- [#18812](https://github.com/unslothai/unsloth/pull/18812) Inkling 2 (Mini and Small): LoRA / QLoRA training support
- [#18923](https://github.com/unslothai/unsloth/pull/18923) Loader: refuse a network-share base model named by a Hub adapter
- [#18933](https://github.com/unslothai/unsloth/pull/18933) Studio: bump mflux to 0.24.0 and decode Z-Image in strips instead of tiles
- [#18932](https://github.com/unslothai/unsloth/pull/18932) Studio: pad Wan causal convs into a zero buffer on Metal
- [#18944](https://github.com/unslothai/unsloth/pull/18944) Studio: draft 2 tokens by default for Inkling 2 DSpark
- [#18922](https://github.com/unslothai/unsloth/pull/18922) ROCm local test: per-user log folder, refuse one owned by someone else
- [#18930](https://github.com/unslothai/unsloth/pull/18930) Studio: run the video denoise in expandable allocator segments
- [#18852](https://github.com/unslothai/unsloth/pull/18852) GRPO: skip the hidden-state fallback wrapper on forwards that already return hidden states (-0.6 GiB scoring peak)
- [#18947](https://github.com/unslothai/unsloth/pull/18947) Studio tests: read the FLUX.2 reference gate sources as UTF-8 (encoding guard red on main)
- [#18945](https://github.com/unslothai/unsloth/pull/18945) Studio: Optional[...] in the Lanczos reference signature, and register the two-card Wan decode with the VAE seam guard (main reds)
- [#18928](https://github.com/unslothai/unsloth/pull/18928) Studio diffusion: price FLUX.3 Klein edits by sequence tokens on Ampere / Ada
- [#18926](https://github.com/unslothai/unsloth/pull/18926) Studio: run LFM2.5 tool calls instead of showing them as text
- [#18942](https://github.com/unslothai/unsloth/pull/18942) Studio tests: the ROCm xformers parity check pins both aiter outcomes since #18924
- [#18921](https://github.com/unslothai/unsloth/pull/18921) Native FSDP2 / TP resume: refuse pickled state on torch < 2.6
- [#18919](https://github.com/unslothai/unsloth/pull/18919) Studio: price Inkling 2 quantized KV by what the bundled llama.cpp runs
- [#18920](https://github.com/unslothai/unsloth/pull/18920) Studio: shrink and cap the context when respawning after a GPU OOM
- [#18829](https://github.com/unslothai/unsloth/pull/18829) Studio video: decode Wan VAE tiles on both cards when the decode is tiled and the second card has room
- [#18939](https://github.com/unslothai/unsloth/pull/18939) GRPO subclass test: compare rollout and gradient-pass scores within 1e-12, not bit for bit
- [#18917](https://github.com/unslothai/unsloth/pull/18917) Studio: prepare FLUX.2 edit references on the GPU, byte-identical to the CPU path
- [#18927](https://github.com/unslothai/unsloth/pull/18927) Studio diffusion: an offline load reads its local prequant build when the hosted file is not on disk
- [#18924](https://github.com/unslothai/unsloth/pull/18924) Studio: an aiter attention pick on ROCm runs the auto pick when diffusers has no local aiter backend
- [#18887](https://github.com/unslothai/unsloth/pull/18887) Studio diffusion: price FLUX.2 klein reference images at the denoise rate, not the untiled decode rate
- [#18935](https://github.com/unslothai/unsloth/pull/18935) Studio frontend tests: complete the message timing card fixture (typecheck red on main)
- [#18851](https://github.com/unslothai/unsloth/pull/18851) GRPO: honour a trainer subclass's own _compute_loss (GMPO trained plain GRPO)
- [#18756](https://github.com/unslothai/unsloth/pull/18756) Studio: infer MCP load kind and let chat load media models
- [#18903](https://github.com/unslothai/unsloth/pull/18903) Studio video: read the hosted int8 ConvRot DiT as W8A8 on ROCm for an explicit int8 pick
- [#18769](https://github.com/unslothai/unsloth/pull/18769) Studio: keep the reply stats card hoverable so its figures can be copied
- [#18650](https://github.com/unslothai/unsloth/pull/18650) Studio: score the VLM eval split on the training prompt
- [#18845](https://github.com/unslothai/unsloth/pull/18845) Tests: make the CPU suite deterministic on real ROCm hosts
- [#18872](https://github.com/unslothai/unsloth/pull/18872) Studio diffusion: fold a constant LoRA set when the denoiser is resident, even with other components offloaded
- [#18870](https://github.com/unslothai/unsloth/pull/18870) Studio diffusion: native probability round and pack in the INT8 attention kernel on sm89 / sm120
- [#18693](https://github.com/unslothai/unsloth/pull/18693) Studio: treat an audio.cpp subfolder model id as not cached in the HF cache lookup
- [#18727](https://github.com/unslothai/unsloth/pull/18727) Studio: install MLX on Chat only Macs so MLX models can chat
- [#18725](https://github.com/unslothai/unsloth/pull/18725) Studio: show the --fit placement search instead of counting its header reads as loaded weights
- [#18671](https://github.com/unslothai/unsloth/pull/18671) Studio: let Deep Research read the web page linked in the question
- [#18868](https://github.com/unslothai/unsloth/pull/18868) Studio video: decode Wan two latent frames per decoder call on NVIDIA sm80+
- [#18904](https://github.com/unslothai/unsloth/pull/18904) Raise the unsloth_zoo floor to 2026.11.9, the first release admitting trl 1.18.2
- [#18694](https://github.com/unslothai/unsloth/pull/18694) Studio: scale the sandbox memory limit with the machine, on every platform
- [#18668](https://github.com/unslothai/unsloth/pull/18668) Studio: keep saved load settings in unsloth chat and inference
- [#18762](https://github.com/unslothai/unsloth/pull/18762) Studio diffusion: AdaLN precompute keeps a GGUF time embedder, and a fallback restore rejoins the top-level offload group
- [#18908](https://github.com/unslothai/unsloth/pull/18908) Diffusion DDP tests: destroy the gloo group in each rank and dump a stuck rank stack (all-reduce timeout)
- [#18753](https://github.com/unslothai/unsloth/pull/18753) Improve chat PDF formatting and omit thinking from transcripts
- [#18646](https://github.com/unslothai/unsloth/pull/18646) Studio: make outline buttons visible in dark mode dialogs
- [#18869](https://github.com/unslothai/unsloth/pull/18869) Studio diffusion: block swap over a frozen fp8 or int8 W8A8 base
- [#18705](https://github.com/unslothai/unsloth/pull/18705) Studio: honor Max Tokens on ChatGPT connections
- [#18701](https://github.com/unslothai/unsloth/pull/18701) Studio: read Translate text files in the encoding they were saved in
- [#18643](https://github.com/unslothai/unsloth/pull/18643) Fix stale Retry button after a chat syncs across devices
- [#18888](https://github.com/unslothai/unsloth/pull/18888) Studio: move the highest transformers sidecar from 5.13.1 to 5.15.1 (macOS XProtect block)
- [#18885](https://github.com/unslothai/unsloth/pull/18885) Diffusion DDP tests: rendezvous through a FileStore, not a port picked up front (intermittent diffusion-shard timeout)
- [#18884](https://github.com/unslothai/unsloth/pull/18884) Tests: two reds from #18856 (exec-d _utils helper cannot do its relative import; guard test reads without an encoding)
- [#18700](https://github.com/unslothai/unsloth/pull/18700) Studio: keep accented and non-Latin text in pages saved from Chrome
- [#18857](https://github.com/unslothai/unsloth/pull/18857) Private push: refuse a public repo before writing dataset metadata
- [#18831](https://github.com/unslothai/unsloth/pull/18831) Studio FLUX.2 klein 9B-KV: run KV checkpoints on their own pipeline (cached reference K/V, 1.47-2.23x edits)
- [#18703](https://github.com/unslothai/unsloth/pull/18703) Studio: keep pasted screenshots in imported Cursor chats
- [#18669](https://github.com/unslothai/unsloth/pull/18669) Studio: keep the audio.cpp accelerator chosen at install across updates
- [#18858](https://github.com/unslothai/unsloth/pull/18858) ROCm SDPA check: run the probe children in a private directory
- [#18702](https://github.com/unslothai/unsloth/pull/18702) Studio: let the model see images read in imported Claude Code chats
- [#18670](https://github.com/unslothai/unsloth/pull/18670) Studio: keep the tool call cap picked with MCP on across reloads
- [#18859](https://github.com/unslothai/unsloth/pull/18859) Studio: cap declared Word table grid widths when extracting text
- [#18863](https://github.com/unslothai/unsloth/pull/18863) Studio sd.cpp: keep the offload path's VAE (and a roomy card's text encoder) on the GPU when it fits
- [#18867](https://github.com/unslothai/unsloth/pull/18867) Warm-window tests: reset the cached torch import failure around every test (order-dependent red)
- [#18672](https://github.com/unslothai/unsloth/pull/18672) Studio: keep code blocks as written when the model reads a web page
- [#18758](https://github.com/unslothai/unsloth/pull/18758) Desktop: stop treating every WebKitGTK before 2.54 as CPU painting
- [#18836](https://github.com/unslothai/unsloth/pull/18836) Studio diffusion: keep FLUX.3 klein's text encoder on the card at 12 / 16 GiB
- [#18842](https://github.com/unslothai/unsloth/pull/18842) ROCm: load fine-grained FP8 checkpoints instead of refusing them
- [#18856](https://github.com/unslothai/unsloth/pull/18856) Refuse pickled adapter_model.bin loads on torch older than 2.6
- [#18860](https://github.com/unslothai/unsloth/pull/18860) Studio diffusion: cache the W8A8 int8 backward's column-major weights
- [#18854](https://github.com/unslothai/unsloth/pull/18854) Studio diffusion: VAE upsample fold on by default on gfx1151
- [#18837](https://github.com/unslothai/unsloth/pull/18837) Studio diffusion: faster returning-user load for cached int8 FLUX.3 (one Hub call, persisted CUTLASS tile probe)
- [#18841](https://github.com/unslothai/unsloth/pull/18841) Studio diffusion: INT8 attention routes hold their modules weakly, so unload returns the card
- [#18844](https://github.com/unslothai/unsloth/pull/18844) Saved attention tests: run the CPU kernel path on ROCm builds too
- [#18861](https://github.com/unslothai/unsloth/pull/18861) Studio: stop the chat thread rubber-banding at its end on Windows
- [#18839](https://github.com/unslothai/unsloth/pull/18839) Studio sd.cpp: size the offload path's CPU VAE tile from spare host RAM instead of a bare 256 px --vae-tiling
- [#18663](https://github.com/unslothai/unsloth/pull/18663) Studio: stop asking a rate-limited Hub again until its window ends
- [#18850](https://github.com/unslothai/unsloth/pull/18850) Run report test: read _cpu_init.py as utf-8 (source read encoding guard red on main)
- [#18834](https://github.com/unslothai/unsloth/pull/18834) Studio diffusion: race the int8 GEMM tile at the real row count on first launch, sm89 sink-path attention orderings
- [#18846](https://github.com/unslothai/unsloth/pull/18846) Risky loader baseline: record the CPU run report import from #18807
- [#18840](https://github.com/unslothai/unsloth/pull/18840) VAE strip fold test: compare strips to the whole map within fp64 rounding, not bitwise
- [#18826](https://github.com/unslothai/unsloth/pull/18826) Studio static step skip: SDXL U-Net, max tier every 2 at 25 steps
- [#18822](https://github.com/unslothai/unsloth/pull/18822) Studio multi-GPU: Qwen-Image 2.1 layer split hands text-encoder states across cards, and a render-time replica fallback shows in status
- [#18838](https://github.com/unslothai/unsloth/pull/18838) Studio ROCm: ship the gfx1151 hipBLASLt GEMM table for the Windows ROCm 7.14 build
- [#18807](https://github.com/unslothai/unsloth/pull/18807) CPU backend: UNSLOTH_MEMORY_REPORT reports host RAM
- [#18835](https://github.com/unslothai/unsloth/pull/18835) GPU selection tests: reset the GPU count caches before each test (order-dependent g-l red)
- [#18825](https://github.com/unslothai/unsloth/pull/18825) Studio diffusion training: budgeted checkpointing and the nf4 dequant cache on ROCm too
- [#18821](https://github.com/unslothai/unsloth/pull/18821) Step CPU-resident FSDP2 / TP shards with the fused CPU AdamW kernel
- [#18813](https://github.com/unslothai/unsloth/pull/18813) Studio Krea 2: denoise on the valid text rows, not 512 padded ones
- [#18811](https://github.com/unslothai/unsloth/pull/18811) Block compile: keep gradient checkpointing on layers behind accelerate device-map hooks
- [#18832](https://github.com/unslothai/unsloth/pull/18832) fp16 T4 route test: use the real checkpoint identity (diffusion shard red on main)
- [#18830](https://github.com/unslothai/unsloth/pull/18830) Risky loader baseline: record the tree gated DeltaNet kernel import from #18817
- [#18782](https://github.com/unslothai/unsloth/pull/18782) Studio diffusion training: opt-in frozen int8 W8A8 base (UNSLOTH_DIFFUSION_INT8_TRAIN=w8a8)
- [#18765](https://github.com/unslothai/unsloth/pull/18765) Studio static step skip: a measured max-tier mask for Wan2.2 TI2V 5B
- [#18814](https://github.com/unslothai/unsloth/pull/18814) Decode CUDA graphs: clear the RNG capture flag after a failed capture
- [#18828](https://github.com/unslothai/unsloth/pull/18828) Backend CI: two test faults from #18778 (stale media adapter fake, unguarded diffusers import)
- [#18827](https://github.com/unslothai/unsloth/pull/18827) Run the SFT assistant-mask suite on PRs (version-compat bundle guard red on main)
- [#18823](https://github.com/unslothai/unsloth/pull/18823) QAT nvfp4 / mxfp8: fake quantize LoRA base layers whose bias is frozen
- [#18817](https://github.com/unslothai/unsloth/pull/18817) AsyncGRPO tree packing for Qwen3.5 / Qwen3.6 / Qwen3-Next (gated DeltaNet hybrids)

#### 🐛 New Issues
- [#18896](https://github.com/unslothai/unsloth/issues/18896) [Feature] Add option to have multiple paths for local models `feature request` 💬2
- [#18898](https://github.com/unslothai/unsloth/issues/18898) [Bug] Studio xlsx reader drops formats with text between digits (000-00-0000, 00000-0000) 💬1
- [#18948](https://github.com/unslothai/unsloth/issues/18948) [Bug] Studio llama-server crashes on ROCm when launched by Studio (system libamdhip64 gets loaded), works fine from shell `feature request` `bug` 💬1
- [#18833](https://github.com/unslothai/unsloth/issues/18833) [Bug] Inkling kv quant calculation is odd `feature request` `bug` 💬1
- [#18937](https://github.com/unslothai/unsloth/issues/18937) [Feature] OCR `feature request`
- [#18991](https://github.com/unslothai/unsloth/issues/18991) [Feature] Telegram Bot Integration `feature request`
- [#18972](https://github.com/unslothai/unsloth/issues/18972) [Bug] Model type inkling2_loop not supported. `feature request` `bug`
- [#18949](https://github.com/unslothai/unsloth/issues/18949) [Feature] Let the agent drive the system default browser (not only the built-in one) `feature request`
- [#18895](https://github.com/unslothai/unsloth/issues/18895) [Feature] Add Strata and other efficient engine support natively along with llama.cpp and allow custom mutilple engine supports instead of one default bundle. `feature request`
- [#18847](https://github.com/unslothai/unsloth/issues/18847) Gemma 4 string tool arguments are not rendered in the trained call syntax

#### 🔒 Closed Issues
- [#18622](https://github.com/unslothai/unsloth/issues/18622) [Bug] Dual RX 6700 XT ROCm crash
- [#18732](https://github.com/unslothai/unsloth/issues/18732) [Bug] GET to /api/system/hardware creates cuda context on gpu 0
- [#18802](https://github.com/unslothai/unsloth/issues/18802) LFM2.5-24B-A2B exposes raw tool-call syntax in Unsloth Studio
- [#18833](https://github.com/unslothai/unsloth/issues/18833) [Bug] Inkling kv quant calculation is odd
- [#18759](https://github.com/unslothai/unsloth/issues/18759) [Bug] [Studio 2026.11.9] Qwen-Image-Edit GGUF: every generation fails with device mismatch in _adaln_continuous_forward
- [#18637](https://github.com/unslothai/unsloth/issues/18637) [Bug] Crash on window minimize and during idle
- [#18722](https://github.com/unslothai/unsloth/issues/18722) Cannot load a fine-tuned Q5_K_M GGUF: "quantization type 36 ... this build does not have"
- [#18523](https://github.com/unslothai/unsloth/issues/18523) Webview? Microsoft lock-in?

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,198 · **Open issues:** 416 · **Last push:** 9h ago

On November 23, 2026, AIBrix saw no new releases, but several important merged pull requests improved the project. Notable features included enhancements in caching efficiency with the developments of PodArray KeySet/ByKey and a streamlined PodArray.Routable snapshot, both aimed at optimization (#3553, #3550). Bug fixes addressed critical issues such as the scraping of ModelClaim engine metrics from bound ports and ensuring webhooks register only when their API group is included in the scheme (#3533, #3540). Among new issues, the RFC #3552 drew attention for proposing a method to detect and safely remove stale gateway replicas from rotation.

#### ✅ Merged PRs
- [#3533](https://github.com/vllm-project/aibrix/pull/3533) [Bug] Scrape ModelClaim engine metrics from bound ports
- [#3540](https://github.com/vllm-project/aibrix/pull/3540) [Bug] Register a webhook only when its API group is in the scheme
- [#3553](https://github.com/vllm-project/aibrix/pull/3553) [Feat] Cache PodArray KeySet/ByKey and optimize prefix-cache FindCandidates to O(holders) (#3545)
- [#3550](https://github.com/vllm-project/aibrix/pull/3550) [Feat] Cache PodArray.Routable snapshot and guard slice aliasing (#3545)
- [#3549](https://github.com/vllm-project/aibrix/pull/3549) [CI] Use a local artifact path for the ModelAdapter e2e adapters
- [#3548](https://github.com/vllm-project/aibrix/pull/3548) [CI] Name the failed e2e tests at the end of the e2e runner's log
- [#3546](https://github.com/vllm-project/aibrix/pull/3546) [Feat] Avoid allocating in encode.SplitEncoders when no encoders are present (#3545)
- [#3534](https://github.com/vllm-project/aibrix/pull/3534) [Bug] Skip ext_proc on non-inference routes in the local and standalone Envoy configs
- [#3542](https://github.com/vllm-project/aibrix/pull/3542) [Docs] Add opt-in Dragonfly examples for ModelWarmup

#### 🐛 New Issues
- [#3552](https://github.com/vllm-project/aibrix/issues/3552) [RFC]: Detect a gateway replica's stale discovery, and take it out of rotation safely `area/gateway` `triage/accepted` `kind/feature` 💬4
- [#3551](https://github.com/vllm-project/aibrix/issues/3551) [bug] standalone docker compose: AIBRIX_ROUTING_ALGORITHM is never read, so --pd does not enable P/D routing `kind/bug` `area/gateway` `triage/accepted` 💬3
- [#3547](https://github.com/vllm-project/aibrix/issues/3547) flaky test: TestModelAdapterRetryAnnotations times out waiting for the adapter to reach Running or Bound `area/gateway` `area/testing` `kind/misc` `area/runtime` 💬3
- [#3554](https://github.com/vllm-project/aibrix/issues/3554) [Bug] The standalone autoscaler can't scale a StormService, because the orchestration group isn't in its scheme `kind/bug` `triage/accepted` `area/orchestration` 💬2

#### 🔒 Closed Issues
- [#3363](https://github.com/vllm-project/aibrix/issues/3363) [Bug] Don't block pod events on KV event replay, and fail open when the replay socket is gone
- [#3186](https://github.com/vllm-project/aibrix/issues/3186) [Bug] Batch templates emit arguments rejected by SGLang 0.5.22 and vLLM 0.32.0
- [#3524](https://github.com/vllm-project/aibrix/issues/3524) [Bug] Gateway caches an HTTPRoute with empty status.parents as ready
- [#3523](https://github.com/vllm-project/aibrix/issues/3523) [Bug] Pod blacklist keeps a quarantine for a recreated Pod that reuses the name
- [#3545](https://github.com/vllm-project/aibrix/issues/3545) [Feat] Eliminate remaining O(N) pod-filtering and prefix-cache FindCandidates allocations on the candidate-stage path
- [#3527](https://github.com/vllm-project/aibrix/issues/3527) [bug] local mode: ext_proc parses /v1/models and /metrics responses, so /v1/models returns 500 and /metrics gets an error appended
- [#3514](https://github.com/vllm-project/aibrix/issues/3514) [Bug][Gateway] Scrape ModelClaim metrics from each engine's bound port
- [#3547](https://github.com/vllm-project/aibrix/issues/3547) flaky test: TestModelAdapterRetryAnnotations times out waiting for the adapter to reach Running or Bound
- [#3498](https://github.com/vllm-project/aibrix/issues/3498) [Bug] `realtime_num_requests_running` is missing from gateway plugin metrics
- [#2989](https://github.com/vllm-project/aibrix/issues/2989) [Gateway] Close endpoint routing, logging, and API compatibility gaps for latest SGLang and vLLM
- [#3530](https://github.com/vllm-project/aibrix/issues/3530) [Bug] The controller manager crash-loops when --controllers leaves out every controller of an API group
- [#3537](https://github.com/vllm-project/aibrix/issues/3537) [RFC]: Document opt-in P2P distribution with ModelWarmup samples

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,518 · **Open issues:** 672 · **Last push:** 1h ago

On November 23, 2026, there were no new releases for Semantic Router, but several important pull requests were merged, addressing various bugs and improvements. Key fixes included the validation of Milvus collection dimensions at startup (#7235), the rejection of unknown fields in Dashboard config updates (#7243), and ensuring that unscanned policies are honored for non-text jailbreak inputs (#7224). Additionally, the contributor guide was published as the Community landing page (#7159), likely enhancing user engagement. Notably, a new issue was raised regarding the production benchmarks runners disconnecting during base revision measurement (#7280), which could impact performance assessments moving forward.

#### ✅ Merged PRs
- [#7274](https://github.com/vllm-project/semantic-router/pull/7274) [Bug] Model runtime: letterbox a d3 image Box on wide, short images (opt-in)
- [#7159](https://github.com/vllm-project/semantic-router/pull/7159) [Docs] Publish the contributor guide and make it the Community landing page
- [#7243](https://github.com/vllm-project/semantic-router/pull/7243) [Bug] Reject unknown fields in Dashboard config updates
- [#7235](https://github.com/vllm-project/semantic-router/pull/7235) [Bug] Validate existing Milvus collection dimensions at startup
- [#7224](https://github.com/vllm-project/semantic-router/pull/7224) [Bug] Honor unscanned policy for non-text jailbreak input
- [#7251](https://github.com/vllm-project/semantic-router/pull/7251) [Bug] Defer file-backed Router Replay retention until config activation
- [#7080](https://github.com/vllm-project/semantic-router/pull/7080) [Bug] Charge Looper calls at their price and say when to retry a budget

#### 🐛 New Issues
- [#7280](https://github.com/vllm-project/semantic-router/issues/7280) [Bug] Production Benchmarks runners repeatedly disconnect during base revision measurement `bug` `accepted` `wg/evaluation-quality` 💬2
- [#7292](https://github.com/vllm-project/semantic-router/issues/7292) [Bug] The context plugin's call ID changes on every request, so agent steps lose the cached prompt `bug` `accepted` `wg/agentic-context` 💬3
- [#7276](https://github.com/vllm-project/semantic-router/issues/7276) [Feature] Model runtime: calibrate letterboxed d3 Box confidence and decide the default `accepted` `wg/router-models-inference-runtime` 💬2
- [#7275](https://github.com/vllm-project/semantic-router/issues/7275) [Bug] CUDA image: FP8 products fail on GB10 (sm_121): row-wise scaled _scaled_mm needs PyTorch 2.11 cu130 `bug` `accepted` `wg/router-models-inference-runtime` 💬2
- [#7288](https://github.com/vllm-project/semantic-router/issues/7288) [Bug] Runtime.stop() can skip stopping a model during concurrent loading `bug` `accepted` `wg/router-models-inference-runtime` 💬2
- [#7279](https://github.com/vllm-project/semantic-router/issues/7279) [Feature] recipe-lab sub-issue 10: evaluate skill revisions and recipe search methods under matched budgets `enhancement` `accepted` `wg/evaluation-quality` 💬2
- [#7278](https://github.com/vllm-project/semantic-router/issues/7278) [Feature] recipe-lab sub-issue 9: plan and run evidence-guided recipe optimization `enhancement` `accepted` `wg/evaluation-quality` 💬2
- [#7302](https://github.com/vllm-project/semantic-router/issues/7302) [Bug] A rejected streamed tool call logs no evidence of the failure `bug` `accepted` `wg/data-plane-networking` 💬1
- [#7304](https://github.com/vllm-project/semantic-router/issues/7304) [Feature] Add a bilingual Windows and macOS desktop client for System Duo `needs-acceptance`

#### 🔒 Closed Issues
- [#3317](https://github.com/vllm-project/semantic-router/issues/3317) [Bug] Validate the vector-store collection dimension against the effective embedding dimension at startup
- [#6932](https://github.com/vllm-project/semantic-router/issues/6932) [Bug] Spend budgets miscount Looper runs and refuse in ways harnesses retry or hide
- [#6380](https://github.com/vllm-project/semantic-router/issues/6380) [Bug] Jailbreak classifier treats omitted non-text user/tool content as fully scanned
- [#7253](https://github.com/vllm-project/semantic-router/issues/7253) [Bug] Recipe conformance fails on main: blank-message probes still expect systemone_rejected
- [#7239](https://github.com/vllm-project/semantic-router/issues/7239) [Bug] Session memory drops the final assistant answer after a tool call
- [#6896](https://github.com/vllm-project/semantic-router/issues/6896) [Bug] Sync issue delivery labels after /assign and /unassign
- [#5665](https://github.com/vllm-project/semantic-router/issues/5665) [Bug] Operator resets explicit false/0 spec fields to their CRD defaults
- [#7157](https://github.com/vllm-project/semantic-router/issues/7157) [Docs] Publish the contributor guide on the website and make it the Community entry point
- [#7011](https://github.com/vllm-project/semantic-router/issues/7011) [Bug] Model runtime: d3 Box edges on wide, short images are wrong at high confidence
- [#7250](https://github.com/vllm-project/semantic-router/issues/7250) [Bug] A superseded config reload deletes file-backed Router Replay history
- [#7120](https://github.com/vllm-project/semantic-router/issues/7120) [Bug] `config apply` can save an unvalidated config for restart

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*