# 📡 AI Ecosystem Digest — 2026-10-26

> Generated 2026-10-26 01:00 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 153,357 | 14 | 24 | 0 | 0 |
| [OpenAI Codex](https://github.com/openai/codex) | 130,881 | 25 | 3 | 0 | 0 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 108,382 | 0 | 0 | 0 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,295 | 5 | 4 | 0 | 0 |
| [OpenCode](https://github.com/anomalyco/opencode) | 221,522 | 24 | 16 | 21 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 28,715 | 27 | 8 | 20 | 1 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 393,052 | 137 | 68 | 253 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 257,060 | 37 | 2 | 3 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 95,494 | 21 | 19 | 34 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 38,158 | 11 | 16 | 45 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 132,354 | 10 | 19 | 20 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 184,757 | 9 | 1 | 0 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 62,029 | 5 | 17 | 13 | 4 |
| [Unsloth](https://github.com/unslothai/unsloth) | 78,561 | 11 | 9 | 142 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,161 | 6 | 7 | 3 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,256 | 13 | 6 | 4 | 0 |

---

## ✨ Highlights

- **Gemini CLI** released [v0.67.0-nightly.20261025.gcd1b45c2d](https://github.com/google-gemini/gemini-cli/releases/tag/v0.67.0-nightly.20261025.gcd1b45c2d).
- **Qwen Code** released [v0.26.1-nightly.20261025.8e28d5380c](https://github.com/QwenLM/qwen-code/releases/tag/v0.26.1-nightly.20261025.8e28d5380c).
- **OpenCode** merged [PR #58743](https://github.com/anomalyco/opencode/pull/58743) to opt into experimental media URI capabilities.
- The issue [#15498](https://github.com/QwenLM/qwen-code/issues/15498) regarding SDK 0.1.23 publication block due to integration timeouts received significant attention with 11 comments on **Qwen Code**.
- **Ollama** saw high engagement with the issue [#19276](https://github.com/ollama/ollama/issues/19276) about installation failures garnering 12 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 153,357 · **Open issues:** 15,663 · **Last push:** 4h ago

On October 26, 2026, there were no new releases or merged pull requests for Claude Code. However, several issues were reported, including a significant bug (#104954) where the MCP tool call with an empty-string argument produces invalid JSON. Additionally, there are enhancements requested, such as the need for the IDE to always display the current folder (#105100) and a feature to report ignored fields in the --agents option (#105097). Other notable issues include a bug with the desktop app that causes permission settings to be ignored when starting sessions (#105102) and a problem where large text pastes lead to session failures (#105096). Overall, the day was predominantly filled with new issues rather than updates or merges.

#### 🐛 New Issues
- [#104954](https://github.com/anthropics/claude-code/issues/104954) [BUG] MCP tool call with an empty-string argument produces invalid JSON ("key": ,) — #89313 still reproduces `bug` `has repro` `platform:linux` `area:tools` 💬1
- [#105102](https://github.com/anthropics/claude-code/issues/105102) Claude Code desktop (Windows): sessions started via /clear ignore permissions.deny and disabled browser tools; handoff session loads full claude-code-remote MCP tools (~20k extra tokens) `bug`
- [#105101](https://github.com/anthropics/claude-code/issues/105101) [GitHub integration] `invalid` `github-integration`
- [#105100](https://github.com/anthropics/claude-code/issues/105100) [FEATURE] Need to always show the current folder in the IDE `enhancement` `area:ide`
- [#105099](https://github.com/anthropics/claude-code/issues/105099) Desktop app: setting to let start_session start nested child sessions with no Allow dialog and on automated turns `enhancement` `platform:macos` `area:permissions` `area:desktop`
- [#105098](https://github.com/anthropics/claude-code/issues/105098) [GitHub integration] `bug` `platform:web` `needs-info` `github-integration`
- [#105097](https://github.com/anthropics/claude-code/issues/105097) [FEATURE] --agents: report fields that are ignored instead of dropping them silently `enhancement` `area:agents` `area:cli`
- [#105096](https://github.com/anthropics/claude-code/issues/105096) [Bug] Huge paste (~4.8M chars) makes compaction fail and bricks session `bug` `platform:macos` `area:core`
- [#105095](https://github.com/anthropics/claude-code/issues/105095) [GitHub integration] `bug` `platform:web` `needs-info` `github-integration`
- [#105094](https://github.com/anthropics/claude-code/issues/105094) [GitHub integration] private repo unable to access. `invalid` `github-integration`
- [#105093](https://github.com/anthropics/claude-code/issues/105093) `claude auth status` is not read-only: it creates `.claude.json`, a lock directory and `backups/` in the config directory it is pointed at `bug` `has repro` `platform:macos` `area:auth`
- [#105092](https://github.com/anthropics/claude-code/issues/105092) [FEATURE] Per-turn protocol blocks to reduce /compact's token cost `enhancement` `area:cost` `area:core`
- [#105091](https://github.com/anthropics/claude-code/issues/105091) [Bug] Design System artifact: cannot delete project files via editor or Artifact tool `bug` `area:tools`
- [#105090](https://github.com/anthropics/claude-code/issues/105090) Built-in browser pane: Microsoft Entra device-based Conditional Access fails (no persistent sign-in) `enhancement` `platform:macos` `area:auth` `area:desktop`

#### 🔒 Closed Issues
- [#84981](https://github.com/anthropics/claude-code/issues/84981) Background tasks SIGTERMed on an exact 30-minute internal timer (macOS CLI, long-lived session) — undocumented kill path, exit 144
- [#89120](https://github.com/anthropics/claude-code/issues/89120) [BUG] Cowork: create_artifact / update_artifact / list_artifacts selectively removed from an otherwise fully healthy remote-devices bridge
- [#75334](https://github.com/anthropics/claude-code/issues/75334) Auto-memory system is ineffective: memories not reliably read or acted on across sessions
- [#81899](https://github.com/anthropics/claude-code/issues/81899) [BUG] Resume/attach silently overwrites background agent session titles with another session's name
- [#89951](https://github.com/anthropics/claude-code/issues/89951) Auto-mode permission classifier denies read-only MCP tools on servers named "production"
- [#82282](https://github.com/anthropics/claude-code/issues/82282) [FEATURE] Show which model each background agent is running on, in the agents view and `claude agents --json`
- [#82216](https://github.com/anthropics/claude-code/issues/82216) Agent/Fleet view: submitted message does not appear after navigating with left-arrow
- [#81141](https://github.com/anthropics/claude-code/issues/81141) [BUG] Session created with `template: claude` is hosted as a daemon job and gets background/unattended treatment, with no way to see or change it
- [#84075](https://github.com/anthropics/claude-code/issues/84075) [Feature Request] Add timestamp and elapsed time display to background session history
- [#89962](https://github.com/anthropics/claude-code/issues/89962) [Feature Request] Add view tracking and visibility for shared artifacts
- [#89961](https://github.com/anthropics/claude-code/issues/89961) [Feature Request] Improve safety classifier to distinguish legitimate smart home debugging from malicious cyber activities
- [#89959](https://github.com/anthropics/claude-code/issues/89959) [Bug] Anthropic API Error: Request Rejected - Air-gapped Lab Operations
- [#89958](https://github.com/anthropics/claude-code/issues/89958) [FEATURE] Routines list: run a routine from its row without opening it
- [#89957](https://github.com/anthropics/claude-code/issues/89957) [Feature Request] Add option to disable or customize safety guardrails for educational/technical analysis
- [#89955](https://github.com/anthropics/claude-code/issues/89955) I don't have a bug report to analyze in your message. Please provide the bug report details so I can generate an appropriate GitHub issue title for Claude Code.
- [#82052](https://github.com/anthropics/claude-code/issues/82052) [FEATURE] Agents view: can the PR status colour stay on for unfocused rows?
- [#89952](https://github.com/anthropics/claude-code/issues/89952) [Bug] Fullscreen terminal render mode doesn't support Ctrl+Scroll wheel zoom
- [#89949](https://github.com/anthropics/claude-code/issues/89949) [Bug] Fable 5 safeguards incorrectly flagging user-created system analysis as policy violation
- [#89950](https://github.com/anthropics/claude-code/issues/89950) [Feature Request] Agent ignores explicit user directives and pursues autonomous actions instead
- [#89948](https://github.com/anthropics/claude-code/issues/89948) Add keyboard shortcut for deleting a session
- [#89801](https://github.com/anthropics/claude-code/issues/89801) TUI /login reports success but never persists credentials — Keychain timeout classified as transient skips the file fallback
- [#104447](https://github.com/anthropics/claude-code/issues/104447) Hello world is not printed in the terminal
- [#105095](https://github.com/anthropics/claude-code/issues/105095) [GitHub integration]
- [#105093](https://github.com/anthropics/claude-code/issues/105093) `claude auth status` is not read-only: it creates `.claude.json`, a lock directory and `backups/` in the config directory it is pointed at

### OpenAI Codex (`openai/codex`)

**Stars:** 130,881 · **Open issues:** 24,769 · **Last push:** 2d ago

Today was relatively uneventful for OpenAI Codex, with no new releases or merged pull requests reported. However, a number of issues were raised, highlighting ongoing challenges for users. Notably, issue #56873 addresses the unavailability of the Chrome browser route on Windows after a reinstall, which has sparked significant discussion. Additionally, issue #56874 points out a restriction in the desktop app where the `write_stdin` function is being rejected by granular sandbox approval, hindering the publication of sites. Other points of concern include troubles with the macOS desktop app related to installation options (issue #56987) and metadata omissions in child tasks for Windows (issue #56977).

#### 🐛 New Issues
- [#56873](https://github.com/openai/codex/issues/56873) [Windows] Chrome and IAB unavailable: no browser route on 26.1021.31345 after reinstall and fresh chat `bug` `windows-os` `app` `browser` 💬5
- [#56874](https://github.com/openai/codex/issues/56874) Codex desktop: write_stdin rejected by granular sandbox approval policy, blocking Sites publication `bug` `sandbox` `tool-calls` `app` 💬4
- [#56951](https://github.com/openai/codex/issues/56951) Codex ends turns after review/checkpoint milestones while explicitly acknowledging unfinished work (Windows, 0.164.0) `bug` `model-behavior` `windows-os` `CLI` 💬4
- [#56822](https://github.com/openai/codex/issues/56822) The built-in browser opens, but the agent cannot control it `bug` `app` `browser` 💬3
- [#56987](https://github.com/openai/codex/issues/56987) macOS desktop app offers Finances／Health installation options, but plugin details return 404 `bug` `app` `skills` 💬2
- [#56969](https://github.com/openai/codex/issues/56969) Windows: ChatGPT Work exposes codex_app tools but callerSource=chatgpt is rejected with MCP -32000 `bug` `windows-os` `mcp` `app` 💬2
- [#56988](https://github.com/openai/codex/issues/56988) Cybersecurity block on app development `bug` `CLI` `safety-check` 💬1
- [#56985](https://github.com/openai/codex/issues/56985) Local MCP initializes then cancels; tools absent in existing desktop conversation `bug` `mcp` `app` `app-server` 💬1
- [#56981](https://github.com/openai/codex/issues/56981) Spreadsheet preview renders right-to-left text in the wrong order `bug` `app`
- [#56979](https://github.com/openai/codex/issues/56979) [macOS Codex] Existing Mac mini chats cannot move between projects across desktop clients; source-project validation fails `bug` `app` `session` 💬1
- [#56978](https://github.com/openai/codex/issues/56978) [Windows][Computer Use] @oai/sky cannot launch Codex app-server ("program not found") despite installed native helper `bug` `windows-os` `app` `app-server` 💬1
- [#56977](https://github.com/openai/codex/issues/56977) [Dots][Windows] Child-task metadata omits resolved model and reasoning effort `enhancement` `windows-os` `app` `subagent` 💬1
- [#56991](https://github.com/openai/codex/issues/56991) codex `bug` `windows-os` `CLI`
- [#56990](https://github.com/openai/codex/issues/56990) Windows desktop: existing ChatGPT conversation readback returns systemError / old turn; host thread/read reports -32600 `bug` `windows-os` `app` `app-server`
- [#56989](https://github.com/openai/codex/issues/56989) using my work email `bug` `auth` `skills`
- [#56986](https://github.com/openai/codex/issues/56986) Codex desktop: repeated image output moderation blocks with category "other" and no actionable explanation `bug` `app` `imagen`
- [#56982](https://github.com/openai/codex/issues/56982) Windows CLI: queued paste + Enter can leave text unsubmitted `bug` `windows-os` `TUI` `CLI`
- [#56984](https://github.com/openai/codex/issues/56984) Fresh Windows voice chat lacks native chat creation and coordination tools after app update `bug` `windows-os` `app` `app-server`
- [#56983](https://github.com/openai/codex/issues/56983) [macOS][Work Cloud] @ picker offers plugins but omits conversation and built-in browser tab references `bug` `app` `browser`
- [#56980](https://github.com/openai/codex/issues/56980) [Windows] Run as administrator exits with code 15: CO_E_NOTINITIALIZED in packaged auto-de-elevation (26.1021.31345) `bug` `windows-os` `app`
- [#56976](https://github.com/openai/codex/issues/56976) [Dots][Live voice] Cancellation acknowledged without stopping delegated work `bug` `model-behavior` `dots`
- [#56975](https://github.com/openai/codex/issues/56975) app-server: inspect retained hook snapshots and safely refresh a single loaded Desktop thread `enhancement` `app` `hooks` `app-server`
- [#56974](https://github.com/openai/codex/issues/56974) [Feature Request] Unused Quota Analytics — show allowance left unused before Full Resets `enhancement` `rate-limits` `app`
- [#56973](https://github.com/openai/codex/issues/56973) tool_search returns nothing for the full MCP tool name mcp__<server>__<tool> `bug` `mcp` `CLI` `tool-calls`
- [#56972](https://github.com/openai/codex/issues/56972) Standalone installer cleanup uses host-dependent device identity on shared NERSC GPFS home `bug` `CLI`

#### 🔒 Closed Issues
- [#56969](https://github.com/openai/codex/issues/56969) Windows: ChatGPT Work exposes codex_app tools but callerSource=chatgpt is rejected with MCP -32000
- [#50532](https://github.com/openai/codex/issues/50532) macOS: “Any App” and @Computer missing despite Computer Use plugin being enabled
- [#56982](https://github.com/openai/codex/issues/56982) Windows CLI: queued paste + Enter can leave text unsubmitted

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 108,382 · **Open issues:** 782 · **Last push:** <1h ago

On October 26, 2026, the Gemini CLI team released version v0.67.0-nightly.20261025.gcd1b45c2d, which includes updates from the prior nightly version. There were no merged pull requests, new issues, or notable incidents reported within the last 24 hours, indicating a period of routine maintenance. The full changelog can provide additional context for the changes introduced in the latest release.

#### 🚀 New Releases
- [v0.67.0-nightly.20261025.gcd1b45c2d](https://github.com/google-gemini/gemini-cli/releases/tag/v0.67.0-nightly.20261025.gcd1b45c2d) Release v0.67.0-nightly.20261025.gcd1b45c2d

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,295 · **Open issues:** 2,259 · **Last push:** 1d ago

On October 26, 2026, there were no new releases or merged pull requests for GitHub Copilot CLI. However, five new issues were reported, highlighting several significant concerns. Notably, issue #5253 addresses persistent session-lock timeouts and unresponsive tasks related to host event acknowledgement failures. Additionally, issue #5254 raises concerns about the main process's memory usage, which grows to 37 GiB with extensive malloc allocations during prolonged parallel-agent sessions. Users also reported issues with startup failures of Entra-broker MCP servers on macOS, as indicated in issue #5250, where concurrent sign-ins were rejected.

#### 🐛 New Issues
- [#5253](https://github.com/github/copilot-cli/issues/5253) CLI 1.0.103: persistent session-lock timeouts and unresponsive tasks amid host event acknowledgement failures `triage` 💬2
- [#5254](https://github.com/github/copilot-cli/issues/5254) 1.0.103: main process grows to 37 GiB; 133M malloc allocations and 10.7 GiB fragmentation during long parallel-agent session `triage`
- [#5252](https://github.com/github/copilot-cli/issues/5252) Reduce fixed injected context per session: adaptive, non-duplicative tool/prompt loading
- [#5251](https://github.com/github/copilot-cli/issues/5251) Reduce fixed injected context per session: adaptive, non-duplicative tool/prompt loading `triage`
- [#5250](https://github.com/github/copilot-cli/issues/5250) macOS: Entra-broker MCP servers fail at startup: concurrent sign-ins rejected ("sign-in is already in progress") and rejected cached token not recovered `area:authentication` `area:mcp`

#### 🔒 Closed Issues
- [#1935](https://github.com/github/copilot-cli/issues/1935) URL argument in "az rest" command is getting incorrectly flagged as directory access
- [#717](https://github.com/github/copilot-cli/issues/717) Web Search Tool Calls Fail for BMAD-Method Agents
- [#5252](https://github.com/github/copilot-cli/issues/5252) Reduce fixed injected context per session: adaptive, non-duplicative tool/prompt loading
- [#4493](https://github.com/github/copilot-cli/issues/4493) bug: /restart fails in sessions created with -w

### OpenCode (`anomalyco/opencode`)

**Stars:** 221,522 · **Open issues:** 3,806 · **Last push:** <1h ago

In a quiet day for OpenCode, no new releases were announced; however, several significant features and fixes were merged. Notable additions include the implementation of the experimental-media-uri capabilities in both the app and server with PRs #58743 and #58657, and a new feature to list the OpenCode Console before OpenCode Go in PR #59107. Critical fixes addressed issues with the client, including renaming service files on Windows, resolving catalog refetches, and preventing unnecessary polling during server idle times. A particularly concerning new issue emerged regarding "Free usage exceeded" errors for users on Windows 11, raising questions about resource allocation under certain conditions.

#### ✅ Merged PRs
- [#58743](https://github.com/anomalyco/opencode/pull/58743) feat(app): opt into experimental-media-uri and keep draft media bytes local
- [#58657](https://github.com/anomalyco/opencode/pull/58657) feat(server): add experimental GET /api/experimental/media/:hash and opt-in experimental-media-uri capability
- [#59107](https://github.com/anomalyco/opencode/pull/59107) feat(tui): list OpenCode Console before OpenCode Go
- [#59105](https://github.com/anomalyco/opencode/pull/59105) fix(cli): retry service file renames on Windows
- [#59101](https://github.com/anomalyco/opencode/pull/59101) fix(client): let clients drop tool-result image payloads from the store
- [#59100](https://github.com/anomalyco/opencode/pull/59100) ci: point turbo and docs at check-test.yml
- [#59099](https://github.com/anomalyco/opencode/pull/59099) fix(client): skip catalog refetches for unloaded locations
- [#59098](https://github.com/anomalyco/opencode/pull/59098) fix(core): stop running tools from keeping the request hook event alive
- [#59097](https://github.com/anomalyco/opencode/pull/59097) fix(core): send unchanged hooked requests without copying the body
- [#59092](https://github.com/anomalyco/opencode/pull/59092) feat(app): show todowrite todos as a pill above the composer
- [#59096](https://github.com/anomalyco/opencode/pull/59096) refactor(app): remove the experimental inbox Home page
- [#59093](https://github.com/anomalyco/opencode/pull/59093) feat(core): show detected project icons
- [#59090](https://github.com/anomalyco/opencode/pull/59090) feat(server): report the machine's hostname in /api/info
- [#59086](https://github.com/anomalyco/opencode/pull/59086) fix(core): reload compatibility skills only for their own sources
- [#59088](https://github.com/anomalyco/opencode/pull/59088) fix(core): use the index when loading turn diffs
- [#59087](https://github.com/anomalyco/opencode/pull/59087) fix(core): canonicalize location in activity tracking
- [#59084](https://github.com/anomalyco/opencode/pull/59084) fix(core): publish catalog updates only when they change
- [#59083](https://github.com/anomalyco/opencode/pull/59083) fix(server): stop form polling from booting idle locations
- [#59082](https://github.com/anomalyco/opencode/pull/59082) fix(server): let agent and provider lists wait for plugins
- [#53012](https://github.com/anomalyco/opencode/pull/53012) fix(client): register running sessions missed while disconnected
- [#59081](https://github.com/anomalyco/opencode/pull/59081) feat(core): watch files open in the side panel

#### 🐛 New Issues
- [#58933](https://github.com/anomalyco/opencode/issues/58933) Free usage exceeded with a 59,769-second cooldown on Windows 11 `pending close` `triaging` 💬5
- [#58952](https://github.com/anomalyco/opencode/issues/58952) Free usage exceeded, subscribe to Go - [Bug] False "free usage exceeded" error on unlimited models (e.g. BigPickle) `pending close` `triaging` 💬3
- [#59066](https://github.com/anomalyco/opencode/issues/59066) invalide URL `triaging` 💬3
- [#59051](https://github.com/anomalyco/opencode/issues/59051) subagent: completed child returns an empty result to the parent (v2, idle_outcome=succeeded with real token usage) `triaging` 💬3
- [#58873](https://github.com/anomalyco/opencode/issues/58873) no carga `triaging` 💬2
- [#59052](https://github.com/anomalyco/opencode/issues/59052) Local copy writes the clipboard natively and via OSC 52 at once, racing the terminal (macOS) 💬2
- [#59047](https://github.com/anomalyco/opencode/issues/59047) desktop: file tree toggle is disabled and the tree can't be opened from the UI `pending close` `triaging` 💬2
- [#59053](https://github.com/anomalyco/opencode/issues/59053) Free usage exceeded and i havent even used opencode. `pending close` `triaging` 💬1
- [#59115](https://github.com/anomalyco/opencode/issues/59115) config: `codemode: false` is silently dropped from legacy `mcp.<name>` entries `reproduced` 💬1
- [#59113](https://github.com/anomalyco/opencode/issues/59113) Container 'latest' tag and docs references 💬1
- [#59110](https://github.com/anomalyco/opencode/issues/59110) compaction: reasoning tokens consume the summary budget, so compaction fails with "reached the output token limit" `reproduced` 💬1
- [#59112](https://github.com/anomalyco/opencode/issues/59112) Free tier limit hit immediately on Desktop App (works via CLI) `pending close` `triaging` 💬1
- [#59111](https://github.com/anomalyco/opencode/issues/59111) Free usage exceeded en OpenCode Desktop desde hace varios días `pending close` `triaging` 💬1
- [#59109](https://github.com/anomalyco/opencode/issues/59109) mcp: concurrent OAuth refreshes ignore individual caller cancellation `reproduced` 💬1
- [#59106](https://github.com/anomalyco/opencode/issues/59106) desktop: chat link previews consume one-time pairing links before they can be opened `reproduced` 💬1
- [#59080](https://github.com/anomalyco/opencode/issues/59080) policies: provider.use deny is not enforced (provider stays selectable and usable) 💬1
- [#59079](https://github.com/anomalyco/opencode/issues/59079) [FEATURE]: Awaited plugin hook before session revert commit 💬1
- [#59078](https://github.com/anomalyco/opencode/issues/59078) [FEATURE]: grep tool: opt-in pcre2 for look-around and backreference patterns 💬1
- [#59049](https://github.com/anomalyco/opencode/issues/59049) [FEATURE]: Move sessions between projects by dragging them on Home 💬1
- [#59068](https://github.com/anomalyco/opencode/issues/59068) Asunto: Cobro de $10 USD activo pero cuenta sigue en plan Free - Solicito aclaración y corrección `pending close` `triaging` 💬1
- [#59069](https://github.com/anomalyco/opencode/issues/59069) [FEATURE]: First-class mobile shell for the web app 💬1
- [#59067](https://github.com/anomalyco/opencode/issues/59067) provider: 413 payload-too-large surfaces as Upstream response was not valid JSON and never triggers compaction `pending close` `triaging` 💬1
- [#59062](https://github.com/anomalyco/opencode/issues/59062) tui: plan usage footer is not synced across TUI instances sharing one service 💬1
- [#59054](https://github.com/anomalyco/opencode/issues/59054) Free usage limit error `pending close` `triaging` 💬1

#### 🔒 Closed Issues
- [#58831](https://github.com/anomalyco/opencode/issues/58831) Free quota time out never recoves, sawtooths on 86400s to go
- [#58814](https://github.com/anomalyco/opencode/issues/58814) Free usage limit doesn't reset for 2+ days ("Free usage limit reached" on a free OpenCode model)
- [#58828](https://github.com/anomalyco/opencode/issues/58828) Opencode is geniunely broken and HAS to be fixed IMMEDIATELY.
- [#58829](https://github.com/anomalyco/opencode/issues/58829) حدود استخدامي اليومية غير موجودة
- [#58835](https://github.com/anomalyco/opencode/issues/58835) desktop: free models report 'Free usage limit reached' while CLI v2 succeeds with same account
- [#58834](https://github.com/anomalyco/opencode/issues/58834) After my OpenCode activated the GO membership, the free quota kept resetting and I couldn't use it.
- [#58826](https://github.com/anomalyco/opencode/issues/58826) [FEATURE]: Please add USDC as a payment method for Go payments
- [#51282](https://github.com/anomalyco/opencode/issues/51282) [Bug]`agent.list` returns only built-in agents right after server start because it does not wait for plugin activation
- [#58241](https://github.com/anomalyco/opencode/issues/58241) [FEATURE]: Workspace Lock
- [#58789](https://github.com/anomalyco/opencode/issues/58789) 429 rate limit after few request/ 429 rate limit persist even after a day reset on free models
- [#58830](https://github.com/anomalyco/opencode/issues/58830) The free usage limit for the free OpenCode (Zen & Console) plan has not reset for two consecutive days in v1 and v2
- [#58827](https://github.com/anomalyco/opencode/issues/58827) Usage limit hit before any prompts were submitted.
- [#58805](https://github.com/anomalyco/opencode/issues/58805) Free usage limit / 429 rate limit on home fiber (Kenya) but not on mobile data, suspected per-IP limiting
- [#58797](https://github.com/anomalyco/opencode/issues/58797) [FEATURE]:
- [#59047](https://github.com/anomalyco/opencode/issues/59047) desktop: file tree toggle is disabled and the tree can't be opened from the UI
- [#58219](https://github.com/anomalyco/opencode/issues/58219) copilot: connected OAuth provider syncs no models — silent failure, models never become available

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 28,715 · **Open issues:** 2,046 · **Last push:** <1h ago

On October 26, 2026, Qwen Code released version v0.26.1-nightly.20261025.8e28d5380c, which includes significant updates such as session permission rules management and enhanced token resolution to prevent project environment injection. Among the notable merged pull requests is the addition of pinned extension package management and the ability to create workspaces from a Git URL. Key fixes were also introduced, including improved session persistence for task lists and enhancements to the management of external workspace storage ownership. A particularly urgent issue emerged regarding the SDK 0.1.23 publication being blocked due to integration timeouts following the CLI update.

#### 🚀 New Releases
- [v0.26.1-nightly.20261025.8e28d5380c](https://github.com/QwenLM/qwen-code/releases/tag/v0.26.1-nightly.20261025.8e28d5380c) Release v0.26.1-nightly.20261025.8e28d5380c

#### ✅ Merged PRs
- [#15490](https://github.com/QwenLM/qwen-code/pull/15490) feat(managed-agent): add pinned extension package management
- [#15543](https://github.com/QwenLM/qwen-code/pull/15543) feat(managed-agent): let the bootstrap set the service account and MySQL up
- [#15393](https://github.com/QwenLM/qwen-code/pull/15393) feat(web-shell): manage extra workspace directories from settings
- [#15551](https://github.com/QwenLM/qwen-code/pull/15551) test(cli): budget the flaky hosted-harness waits through the settle policy
- [#15516](https://github.com/QwenLM/qwen-code/pull/15516) feat(managed-agent): register external Workspace storage ownership
- [#15155](https://github.com/QwenLM/qwen-code/pull/15155) fix(managed): persist session Todo and project committed task lists
- [#15536](https://github.com/QwenLM/qwen-code/pull/15536) test(cli): pin the lifecycle-protocol refusal on the load route
- [#15361](https://github.com/QwenLM/qwen-code/pull/15361) feat(web-shell): create workspaces from a Git URL
- [#15244](https://github.com/QwenLM/qwen-code/pull/15244) feat(managed-agent): give the Hosted Harness its Broker through the environment
- [#15519](https://github.com/QwenLM/qwen-code/pull/15519) test(managed-agent): Add shared Harness Kubernetes qualification tools
- [#15231](https://github.com/QwenLM/qwen-code/pull/15231) fix(managed-agent): guard lifecycle renewal scheduling during shutdown (#15208)
- [#13606](https://github.com/QwenLM/qwen-code/pull/13606) fix(runtime): deliver bounded provider images and PDFs
- [#15528](https://github.com/QwenLM/qwen-code/pull/15528) test(managed-agent): pin the row pool's fan-out, correct its design claims
- [#15449](https://github.com/QwenLM/qwen-code/pull/15449) feat(managed): add durable mid-turn user message queue
- [#15254](https://github.com/QwenLM/qwen-code/pull/15254) fix(ci): run the sdk-java suite before taking the host lock
- [#15457](https://github.com/QwenLM/qwen-code/pull/15457) fix(runtime): unblock independent resident workspaces and tool admission
- [#15246](https://github.com/QwenLM/qwen-code/pull/15246) perf(memory): retain unchanged legacy catalog snapshots
- [#15497](https://github.com/QwenLM/qwen-code/pull/15497) fix(cli): Hide unavailable Managed background tools
- [#15261](https://github.com/QwenLM/qwen-code/pull/15261) feat(runtime-broker): add HTTP-backed external scratch workers
- [#15503](https://github.com/QwenLM/qwen-code/pull/15503) test(managed-agent): wait for worker exit visibility

#### 🐛 New Issues
- [#15498](https://github.com/QwenLM/qwen-code/issues/15498) release: SDK 0.1.23 publication blocked by integration timeouts after CLI v0.26.1 `priority/P1` `type/bug` `category/development` `scope/testing` 💬11
- [#15527](https://github.com/QwenLM/qwen-code/issues/15527) managed-agent: follow-ups recorded after the automation scanner row pool merged (#15442) `priority/P3` `category/development` `scope/testing` `type/enhancement` 💬6
- [#15545](https://github.com/QwenLM/qwen-code/issues/15545) feat(context): threshold-triggered handover continuation — write a handover report at a configurable fill level, then continue in a fresh context `priority/P3` `type/feature-request` `category/core` `scope/session-management` 💬5
- [#15552](https://github.com/QwenLM/qwen-code/issues/15552) bug(hooks/memory): retained catalog snapshot can displace UserPromptSubmit dedup receipt after #14129 `priority/P2` `type/bug` `category/core` `scope/memory` 💬5
- [#15513](https://github.com/QwenLM/qwen-code/issues/15513) cli: surface provider retry classification in headless mode `priority/P2` `type/feature-request` `category/cli` `scope/non-interactive` 💬5
- [#15567](https://github.com/QwenLM/qwen-code/issues/15567) MCP startup failure omits child stderr from normal diagnostics `priority/P2` `type/bug` `category/tools` `scope/mcp` 💬4
- [#15499](https://github.com/QwenLM/qwen-code/issues/15499) release: managed runtime v0.26.1 stops at immutable-publication preflight `priority/P2` `type/bug` `category/development` `scope/ci-cd` 💬4
- [#15542](https://github.com/QwenLM/qwen-code/issues/15542) Anthropic provider: JSON side queries fail with 400 on Claude Sonnet 5.5 / Opus 5.5 (forced tool_choice not supported) `priority/P1` `type/bug` `category/core` `scope/content-generation` 💬3
- [#15546](https://github.com/QwenLM/qwen-code/issues/15546) ci: preinstall Maven on the ecs-qwen pool hosts `priority/P2` `category/development` `scope/ci-cd` `type/enhancement` 💬3
- [#15541](https://github.com/QwenLM/qwen-code/issues/15541) External Context Profile v1: a local, no-network reference provider `priority/P3` `status/waiting-for-feedback` `type/documentation` `category/integration` 💬3
- [#15537](https://github.com/QwenLM/qwen-code/issues/15537) bug(core): drained loop warning can be lost before model send while telemetry records delivery `priority/P3` `type/bug` `category/core` `scope/core` 💬3
- [#15526](https://github.com/QwenLM/qwen-code/issues/15526) bug(core): in warn mode the loop reminder is sent once, then a 59-call identical loop runs unguarded `priority/P2` `type/bug` `category/core` `need-discussion` 💬3
- [#15577](https://github.com/QwenLM/qwen-code/issues/15577) Deferred review findings from PR #15556: fix(core): preserve hook context deduplication after catalog snapshots `priority/P3` `status/blocked` `category/cli` `scope/ide` 💬2
- [#15576](https://github.com/QwenLM/qwen-code/issues/15576) bug(loop): loop_wakeup one-shot silently missed — no turn, no error, session waits indefinitely (0.26.0) `status/need-information` `priority/P2` `type/bug` `category/core` 💬2
- [#15573](https://github.com/QwenLM/qwen-code/issues/15573) Web Shell @-mention picker: long subtitle overlaps the row name `priority/P2` `type/bug` `category/ui` `scope/web-shell` 💬2
- [#15553](https://github.com/QwenLM/qwen-code/issues/15553) chore(ci): sdk-java cache-lock follow-ups deferred from #15284 `priority/P3` `type/bug` `scope/github-actions` `status/ready-for-human` 💬2
- [#15549](https://github.com/QwenLM/qwen-code/issues/15549) Web Shell: move Archived out of the persistent sidebar — three interaction options `priority/P3` `type/feature-request` `category/ui` `scope/session-management` 💬2
- [#15524](https://github.com/QwenLM/qwen-code/issues/15524) tracking(ci): deferred review findings from PR #15381 — incremental lint history window, Prettier grouping `status/in-progress` `priority/P2` `category/development` `scope/github-actions` 💬2
- [#15579](https://github.com/QwenLM/qwen-code/issues/15579) Main CI failed: Qwen Code CI — src/serve/hosted-harness-session.test.ts > … > recovers a large manual Skill call whose assistant committed b… (+2 more) `status/needs-triage` `type/bug` 💬1
- [#15584](https://github.com/QwenLM/qwen-code/issues/15584) Main CI failed: Managed Agent gate — HostedMcpStoreFaultGatesIT.storeRejectConfigureDispatchKeepsTheAcquiredOwnerOnMySql `status/needs-triage` `type/bug`
- [#15583](https://github.com/QwenLM/qwen-code/issues/15583) Main CI failed: Managed Agent gate — WorkspaceCsiApplicationInventoryMySqlIT.referencedReaderSharesNativeInputArrayContract `status/needs-triage` `type/bug`
- [#15582](https://github.com/QwenLM/qwen-code/issues/15582) Main CI failed: Managed Agent gate — Issue13181QueryBudgetTest.asynchronousVerificationHeartbeatsAndStatusAvoidJournalBodyReads `status/needs-triage` `type/bug`
- [#15581](https://github.com/QwenLM/qwen-code/issues/15581) Main CI failed: Qwen Code CI — src/ipc/peer-controllers.test.ts > … > serializes concurrent additions `status/needs-triage` `type/bug`
- [#15580](https://github.com/QwenLM/qwen-code/issues/15580) Main CI failed: E2E Tests — interactive/protocol-tags-interactive.test.ts > … > retries protocol leaks across SSE disconnect and complete… `status/needs-triage` `type/bug`
- [#15574](https://github.com/QwenLM/qwen-code/issues/15574) Main CI failed: Qwen Code CI — src/managed-runtime/managed-activation-store.test.ts > … > compacts repeated renewals and restores the latest… `status/needs-triage` `type/bug`
- [#15565](https://github.com/QwenLM/qwen-code/issues/15565) Main CI failed: Managed Agent gate — HostedMonitorRunFaultGatesIT.fg8aLostRepliesResolveThroughTheOriginalIdentityOnMySql `status/needs-triage` `type/bug`
- [#15550](https://github.com/QwenLM/qwen-code/issues/15550) Main CI failed: Managed Agent gate — TakeoverReconciliationTest.unavailableAndInvalidEvidenceStaysBlockedWithoutReplay(boolean)[2] `status/needs-triage` `type/bug`

#### 🔒 Closed Issues
- [#15301](https://github.com/QwenLM/qwen-code/issues/15301) Deferred follow-ups from PR #15246: perf(memory): retain unchanged legacy catalog snapshots
- [#14515](https://github.com/QwenLM/qwen-code/issues/14515) Follow-up: private CSI Hosted validation and diagnostics (#14487)
- [#14062](https://github.com/QwenLM/qwen-code/issues/14062) Hosted send_message inside its size bound can fail the sender's whole Turn: the encodeToolInput overflow is thrown, not refused
- [#15477](https://github.com/QwenLM/qwen-code/issues/15477) Main CI failed: Qwen Code CI — src/serve/hosted-harness-session.test.ts > … > settles the parked runtime after a broker fault, releasing its… (+6 more)
- [#15341](https://github.com/QwenLM/qwen-code/issues/15341) test(cli): hosted-harness-session hasActivePrompt assertion flips under extreme ECS host contention (1/44,637)
- [#15478](https://github.com/QwenLM/qwen-code/issues/15478) Privacy notice says no extra data is collected with your own API key, but usage statistics are on by default for all auth types
- [#15253](https://github.com/QwenLM/qwen-code/issues/15253) Main CI failed: Managed Agent gate — WorkspaceCsiSqlWorkerMySqlIT.hostedProducerConsumesCommittedFinalOutputWithoutAnotherModelRequest
- [#15269](https://github.com/QwenLM/qwen-code/issues/15269) Memory: a failed queued extraction escapes as an unhandled rejection and fails Core CI after a drain timeout

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

**Stars:** 393,052 · **Open issues:** 7,889 · **Last push:** <1h ago

On October 26, 2026, there were no new releases for OpenClaw; however, several important pull requests were merged, enhancing performance and fixing critical bugs. Notable updates included performance improvements in the agents and gateway components to reduce CPU overhead and avoid unnecessary array copying, along with fixes that ensure persistence of service update deadlines on the monotonic clock and address issues with integration plugins for messaging platforms. Among the new issues reported, a significant bug was identified whereby the Gateway hangs on startup after an update from version 2026.9.6 to 2026.10.7, raising concerns about system stability. Other reported bugs included lost text in the Composer due to third-party voice input tools and installation failures on Windows due to NodeVersion validation errors.

#### ✅ Merged PRs
- [#182775](https://github.com/openclaw/openclaw/pull/182775) fix(macos): keep the latest Browser toggle when clicks overlap
- [#184004](https://github.com/openclaw/openclaw/pull/184004) perf(agents): avoid copying private arrays before sorting
- [#183997](https://github.com/openclaw/openclaw/pull/183997) perf(gateway): reduce Linux host CPU sampling overhead
- [#183995](https://github.com/openclaw/openclaw/pull/183995) fix(plugins): show acquisition owners in reload timeout logs
- [#183968](https://github.com/openclaw/openclaw/pull/183968) perf(agents): avoid repeated Code Mode result serialization
- [#184000](https://github.com/openclaw/openclaw/pull/184000) fix(e2e): validate plugin peers against explicit host roots
- [#183104](https://github.com/openclaw/openclaw/pull/183104) fix(daemon): keep service update authority deadline on the monotonic clock
- [#183438](https://github.com/openclaw/openclaw/pull/183438) fix(msteams): crafted message HTML stalls the Gateway before sender checks
- [#183359](https://github.com/openclaw/openclaw/pull/183359) fix(storage): escape terminal controls in location reports
- [#183996](https://github.com/openclaw/openclaw/pull/183996) perf(agents): avoid plugin reloads during subagent cleanup
- [#183394](https://github.com/openclaw/openclaw/pull/183394) fix(whatsapp): keep QR login wait deadline monotonic across clock skew
- [#183618](https://github.com/openclaw/openclaw/pull/183618) fix(telegram): default bot stops starting once a named account overrides its token
- [#183994](https://github.com/openclaw/openclaw/pull/183994) perf(chat): reduce allocation when opening history
- [#183985](https://github.com/openclaw/openclaw/pull/183985) test(ui,providers): remove low-value tests (batch d577)
- [#183992](https://github.com/openclaw/openclaw/pull/183992) perf(gateway): reuse configured session inventory paths
- [#179781](https://github.com/openclaw/openclaw/pull/179781) fix(plugins): start enabled search owners for auto web search
- [#183475](https://github.com/openclaw/openclaw/pull/183475) fix(memory-core): report all-zero query embeddings instead of silently skipping vector recall
- [#183991](https://github.com/openclaw/openclaw/pull/183991) perf(plugins): reuse immutable inventory alias normalizers
- [#183990](https://github.com/openclaw/openclaw/pull/183990) perf(secrets): reuse auth lookup maps for scoped environments
- [#183986](https://github.com/openclaw/openclaw/pull/183986) perf(core): avoid copying fresh arrays before sorting
- [#183988](https://github.com/openclaw/openclaw/pull/183988) perf(plugins): reuse unchanged Prometheus family headers
- [#182919](https://github.com/openclaw/openclaw/pull/182919) fix(talk): GPT-Live relay closes when output arrives before mic input
- [#183354](https://github.com/openclaw/openclaw/pull/183354) fix(backup): escape terminal controls in archive reports
- [#183979](https://github.com/openclaw/openclaw/pull/183979) perf(gateway): eliminate redundant PR watcher source checks
- [#183977](https://github.com/openclaw/openclaw/pull/183977) perf(gateway): skip canonical delivery index rebuilds
- [#183989](https://github.com/openclaw/openclaw/pull/183989) perf(gateway): avoid copying private arrays twice
- [#183980](https://github.com/openclaw/openclaw/pull/183980) test: remove low-value tests (batch d576)
- [#183635](https://github.com/openclaw/openclaw/pull/183635) fix(tui): use monotonic clock for gateway startup admission and history retry deadlines
- [#183958](https://github.com/openclaw/openclaw/pull/183958) improve(cron): shorten Telegram and Discord inspection links
- [#183981](https://github.com/openclaw/openclaw/pull/183981) fix(test): restore Access discovery in real-Gateway e2e
- [#183960](https://github.com/openclaw/openclaw/pull/183960) perf(plugins): avoid copying private memory ranking arrays
- [#183832](https://github.com/openclaw/openclaw/pull/183832) fix(control-ui): align reload fixtures with subscribed history
- [#183970](https://github.com/openclaw/openclaw/pull/183970) perf(worker): count transcript batch bytes incrementally
- [#183148](https://github.com/openclaw/openclaw/pull/183148) fix(gateway): accept short-session navigation hints
- [#183974](https://github.com/openclaw/openclaw/pull/183974) perf(sessions): reuse placement facts during maintenance
- [#183963](https://github.com/openclaw/openclaw/pull/183963) refactor: deslop gateway, approval and config test fixtures
- [#172765](https://github.com/openclaw/openclaw/pull/172765) fix(docker): honor OPENCLAW_GATEWAY_PORT when healthcheck config load fails
- [#141326](https://github.com/openclaw/openclaw/pull/141326) fix(tlon): honor Content-Disposition filenames on outbound image upload
- [#183971](https://github.com/openclaw/openclaw/pull/183971) perf(gateway): avoid repeated identifier normalization
- [#183982](https://github.com/openclaw/openclaw/pull/183982) perf(gateway): reuse owned native control transfer lists
- [#183959](https://github.com/openclaw/openclaw/pull/183959) perf(providers): remove redundant request preparation copies
- [#183952](https://github.com/openclaw/openclaw/pull/183952) test(core,plugins,ui): remove low-value tests (batch d574)
- [#183975](https://github.com/openclaw/openclaw/pull/183975) perf(gateway): reduce repeated sampling, proxy and signing work
- [#183765](https://github.com/openclaw/openclaw/pull/183765) fix(claude-cli): let operators keep native Agent/Workflow on managed turns
- [#183292](https://github.com/openclaw/openclaw/pull/183292) refactor: trust native timer methods in runtime helpers
- [#183973](https://github.com/openclaw/openclaw/pull/183973) perf(agents): reuse catalog identity groups in status replies
- [#183969](https://github.com/openclaw/openclaw/pull/183969) test: remove low-value tests (batch d575)
- [#183967](https://github.com/openclaw/openclaw/pull/183967) perf(gateway): avoid repeated session pin checks while sorting
- [#183954](https://github.com/openclaw/openclaw/pull/183954) perf(agents): avoid redundant media selection array copies
- [#183972](https://github.com/openclaw/openclaw/pull/183972) fix(ci): preserve catalog visibility checks after icon styling changes
- [#178077](https://github.com/openclaw/openclaw/pull/178077) feat(nextcloud-talk): preserve quoted message context
- [#183948](https://github.com/openclaw/openclaw/pull/183948) test(providers): remove low-value tests (batch d573)
- [#178521](https://github.com/openclaw/openclaw/pull/178521) feat(nextcloud-talk): send native voice replies
- [#183807](https://github.com/openclaw/openclaw/pull/183807) fix(agents): continue rejected tool calls after visible progress text
- [#183965](https://github.com/openclaw/openclaw/pull/183965) perf(gateway): defer and directly encode shared list arrays
- [#183961](https://github.com/openclaw/openclaw/pull/183961) docs: align PostgreSQL operator guidance with current migrations
- [#183898](https://github.com/openclaw/openclaw/pull/183898) fix(agents): internal session turns keep the pinned system prompt and prompt cache
- [#183951](https://github.com/openclaw/openclaw/pull/183951) perf(channels): avoid redundant Telegram entity sort copies
- [#183945](https://github.com/openclaw/openclaw/pull/183945) perf(plugin-sdk): avoid duplicate schema scans and replay copies
- [#183934](https://github.com/openclaw/openclaw/pull/183934) perf(gateway): avoid copying private handler arrays
- [#183955](https://github.com/openclaw/openclaw/pull/183955) perf(core): remove redundant board layout copies and normalization
- [#183944](https://github.com/openclaw/openclaw/pull/183944) perf(agents): avoid intermediate runner array copies
- [#183907](https://github.com/openclaw/openclaw/pull/183907) test(core,ui): remove low-value tests (batch d571)
- [#183962](https://github.com/openclaw/openclaw/pull/183962) perf(sqlite): publish imported receipt scopes without rescanning
- [#183847](https://github.com/openclaw/openclaw/pull/183847) test(gateway): repair automation startup and heartbeat fixtures
- [#183943](https://github.com/openclaw/openclaw/pull/183943) perf(config): avoid freezing private async context frames
- [#183936](https://github.com/openclaw/openclaw/pull/183936) perf(state): reuse validated GitHub connection replies
- [#183939](https://github.com/openclaw/openclaw/pull/183939) perf(shared): avoid copying fresh usage aggregate arrays
- [#183949](https://github.com/openclaw/openclaw/pull/183949) perf(core): avoid serializing source kinds and progress counters
- [#183953](https://github.com/openclaw/openclaw/pull/183953) perf(cron): reuse public job projections across list variants
- [#183913](https://github.com/openclaw/openclaw/pull/183913) fix(automations): webhook and join-introduction turns take their automations scope from the execution context
- [#183931](https://github.com/openclaw/openclaw/pull/183931) perf(gateway): skip unused node event session parsing
- [#183909](https://github.com/openclaw/openclaw/pull/183909) fix: keep Control UI CSS within the asset budget
- [#183838](https://github.com/openclaw/openclaw/pull/183838) feat(gateway): run managed services from standalone artifacts
- [#183841](https://github.com/openclaw/openclaw/pull/183841) fix(tauri): prevent startup crashes before a dashboard is ready
- [#183920](https://github.com/openclaw/openclaw/pull/183920) perf(gateway): avoid discarded event and history copies
- [#183941](https://github.com/openclaw/openclaw/pull/183941) perf(channels): stop sorting blocked ingress lane sets
- [#183940](https://github.com/openclaw/openclaw/pull/183940) perf(worker): reuse privately owned transcript batches
- [#183938](https://github.com/openclaw/openclaw/pull/183938) perf(agents): skip redundant route and choice validation
- [#183937](https://github.com/openclaw/openclaw/pull/183937) perf(cron): reuse history maintenance decisions
- [#183922](https://github.com/openclaw/openclaw/pull/183922) perf(workboard): speed up linked-card interactions
- [#183921](https://github.com/openclaw/openclaw/pull/183921) fix: prevent duplicate attachments during model failover
- [#183903](https://github.com/openclaw/openclaw/pull/183903) test(agents,plugins,ui): remove low-value tests (batch d570)
- [#183888](https://github.com/openclaw/openclaw/pull/183888) fix(memory): avoid full-source scans in PostgreSQL keyword search
- [#183915](https://github.com/openclaw/openclaw/pull/183915) refactor: deslop DOM, settlement and SQL test fixtures
- [#183919](https://github.com/openclaw/openclaw/pull/183919) perf(agents): avoid rechecking owned tool-result projections
- [#183899](https://github.com/openclaw/openclaw/pull/183899) fix(desktop): stop mislabeled keep-awake alerts
- [#183933](https://github.com/openclaw/openclaw/pull/183933) fix(ui): keep internal helpers private
- [#183930](https://github.com/openclaw/openclaw/pull/183930) perf(agents): avoid serializing Tool Search allowlists
- [#183886](https://github.com/openclaw/openclaw/pull/183886) test(core, ui, plugins): remove low-value tests (batch d568)
- [#183914](https://github.com/openclaw/openclaw/pull/183914) perf(gateway): skip redundant owned snapshot inspection
- [#183879](https://github.com/openclaw/openclaw/pull/183879) test(core,plugins,ui): remove low-value tests (batch d567)
- [#183918](https://github.com/openclaw/openclaw/pull/183918) perf(sessions): reduce participant admission work
- [#183896](https://github.com/openclaw/openclaw/pull/183896) test(plugins,ui,agents): remove low-value tests (batch d569)
- [#183905](https://github.com/openclaw/openclaw/pull/183905) refactor: deslop text, record and HTTP test fixtures
- [#183923](https://github.com/openclaw/openclaw/pull/183923) perf(plugins): reuse validated trusted-policy matchers
- [#183917](https://github.com/openclaw/openclaw/pull/183917) perf(codex): skip repeated event projection work
- [#183916](https://github.com/openclaw/openclaw/pull/183916) perf(auto-reply): remove private admission freezes
- [#183072](https://github.com/openclaw/openclaw/pull/183072) fix: keep chat reload geometry stable
- [#183902](https://github.com/openclaw/openclaw/pull/183902) fix(plugins): allow inference setup with embedded standalone runtimes
- [#183912](https://github.com/openclaw/openclaw/pull/183912) perf(agents): avoid cloning immutable subagent payloads
- [#183248](https://github.com/openclaw/openclaw/pull/183248) improve: reduce retained code in session read workers
- [#183908](https://github.com/openclaw/openclaw/pull/183908) perf(gateway): reduce handshake work when no link readers are visible
- [#183910](https://github.com/openclaw/openclaw/pull/183910) perf(cron): reduce continuation sync allocations
- [#183405](https://github.com/openclaw/openclaw/pull/183405) improve(ui): refine Absolutely theme contrast and surfaces
- [#183911](https://github.com/openclaw/openclaw/pull/183911) perf(gateway): avoid revalidating admitted chat history params
- [#183401](https://github.com/openclaw/openclaw/pull/183401) fix(ui): use semantic foregrounds for secondary and selected controls
- [#183906](https://github.com/openclaw/openclaw/pull/183906) perf(diagnostics): reuse dispatcher-owned metadata
- [#183818](https://github.com/openclaw/openclaw/pull/183818) perf(infra): avoid copying directory listeners per event
- [#183846](https://github.com/openclaw/openclaw/pull/183846) perf(gateway): reuse config and cron response snapshots
- [#183799](https://github.com/openclaw/openclaw/pull/183799) perf(github): avoid repeated publication commit fetches
- [#183885](https://github.com/openclaw/openclaw/pull/183885) fix(plugins): identify Gateway preparation lease owners
- [#183884](https://github.com/openclaw/openclaw/pull/183884) fix(agents): release completed attempt callbacks
- [#183852](https://github.com/openclaw/openclaw/pull/183852) test(ui,plugins,core): remove low-value tests (batch d565)
- [#183897](https://github.com/openclaw/openclaw/pull/183897) docs(gateway): clarify activity recap service authority
- [#183833](https://github.com/openclaw/openclaw/pull/183833) perf(ui): trim plugin loads and Workboard card work
- [#183890](https://github.com/openclaw/openclaw/pull/183890) perf(state): avoid schema admission during cached lease lookups
- [#183822](https://github.com/openclaw/openclaw/pull/183822) fix(standalone): resolve fetched plugins in TypeScript AOT builds
- [#183338](https://github.com/openclaw/openclaw/pull/183338) fix(ui): preserve theme colors in filled actions
- [#183816](https://github.com/openclaw/openclaw/pull/183816) perf(chat): keep large code blocks responsive while highlighting
- [#183855](https://github.com/openclaw/openclaw/pull/183855) test(plugins,core,ui): remove low-value tests (batch d566)
- [#183861](https://github.com/openclaw/openclaw/pull/183861) refactor: deslop auth, voice gates and UI fixtures
- [#182585](https://github.com/openclaw/openclaw/pull/182585) fix(cron): scheduled automations get the same owner-only tools on every runtime
- [#183812](https://github.com/openclaw/openclaw/pull/183812) test(core,plugins,ui): remove low-value tests (batch d561)
- [#183843](https://github.com/openclaw/openclaw/pull/183843) perf(gateway): reuse viewer fields during session presentation
- [#183881](https://github.com/openclaw/openclaw/pull/183881) perf(onboarding): trust validated recommendation reads
- [#183869](https://github.com/openclaw/openclaw/pull/183869) perf(sessions): avoid allocations in replica byte accounting
- [#183883](https://github.com/openclaw/openclaw/pull/183883) perf(config): reuse utility backend lookups across the agent roster
- [#183877](https://github.com/openclaw/openclaw/pull/183877) perf(gateway): prepare session event field order once per audience
- [#183872](https://github.com/openclaw/openclaw/pull/183872) perf(codex): skip unused local catalog deletion snapshots
- [#183875](https://github.com/openclaw/openclaw/pull/183875) perf(plugins): reuse bound model stream iterator methods
- [#183866](https://github.com/openclaw/openclaw/pull/183866) perf(agents): reuse published schema facts when pinning tools
- [#183878](https://github.com/openclaw/openclaw/pull/183878) perf(plugins): normalize captured plugin policy once
- [#183865](https://github.com/openclaw/openclaw/pull/183865) fix(ui): prepare Security before opening it
- [#183868](https://github.com/openclaw/openclaw/pull/183868) perf(plugins): reuse runtime metadata policy in snapshot frames
- [#183880](https://github.com/openclaw/openclaw/pull/183880) perf(runtime): avoid redundant recovery and MCP config copies
- [#183876](https://github.com/openclaw/openclaw/pull/183876) perf(models): reuse suppression policy during route validation
- [#183873](https://github.com/openclaw/openclaw/pull/183873) perf(gateway): skip equal presence field encodings
- [#183874](https://github.com/openclaw/openclaw/pull/183874) perf(gateway): retain prepared session run progress
- [#183853](https://github.com/openclaw/openclaw/pull/183853) perf(agents): reuse roster ids per config generation
- [#183851](https://github.com/openclaw/openclaw/pull/183851) refactor: deslop UI frames, async gates and reply fixtures
- [#183871](https://github.com/openclaw/openclaw/pull/183871) perf(models): skip unused source projection for known route overrides
- [#183860](https://github.com/openclaw/openclaw/pull/183860) perf(models): reuse published provider route projections
- [#183870](https://github.com/openclaw/openclaw/pull/183870) perf(gateway): reuse session PR watcher currency
- [#183849](https://github.com/openclaw/openclaw/pull/183849) test(channels,skills,qa): remove low-value tests (batch d564)
- [#183793](https://github.com/openclaw/openclaw/pull/183793) perf(agents): reuse operator model policies across row recipients
- [#183857](https://github.com/openclaw/openclaw/pull/183857) chore(ui): refresh control ui locales
- [#183836](https://github.com/openclaw/openclaw/pull/183836) perf(process): retain spawn broker during placement reconciliation
- [#183842](https://github.com/openclaw/openclaw/pull/183842) fix(agents): prompt-cache drop warnings name the system-prompt section that changed
- [#183795](https://github.com/openclaw/openclaw/pull/183795) test(core,plugins): remove low-value tests (batch d558)
- [#183781](https://github.com/openclaw/openclaw/pull/183781) fix: stale plugin types after copying declaration caches
- [#183763](https://github.com/openclaw/openclaw/pull/183763) perf(workboard): reduce per-card observer and listener overhead
- [#183826](https://github.com/openclaw/openclaw/pull/183826) test(core,plugins,ui): remove low-value tests (batch d563)
- [#177812](https://github.com/openclaw/openclaw/pull/177812) fix: make Daybreak independent of retiring model aliases
- [#183772](https://github.com/openclaw/openclaw/pull/183772) perf(sessions): share tool payloads across checkpoint stamping
- [#183840](https://github.com/openclaw/openclaw/pull/183840) test(ui): wait for the activated service worker build
- [#183379](https://github.com/openclaw/openclaw/pull/183379) perf(state): trust a live Gateway owner of the shared-state file
- [#183828](https://github.com/openclaw/openclaw/pull/183828) perf(cron): retain list revisions across no-op operations
- [#183811](https://github.com/openclaw/openclaw/pull/183811) refactor: deslop agent assertions, worker gates and supervisor fixtures
- [#183788](https://github.com/openclaw/openclaw/pull/183788) improve: avoid repeated GitHub startup inventory reads
- [#183806](https://github.com/openclaw/openclaw/pull/183806) test(runtime): remove low-value tests (batch d559)
- [#182716](https://github.com/openclaw/openclaw/pull/182716) fix(ui): keep task progress steps aligned as status changes
- [#183815](https://github.com/openclaw/openclaw/pull/183815) test: reduce config smoke assertion overhead
- [#183808](https://github.com/openclaw/openclaw/pull/183808) test(status,plugins,ui,agents): remove low-value tests (batch d560)
- [#172959](https://github.com/openclaw/openclaw/pull/172959) fix: keep parent agents waiting for active collectors
- [#183829](https://github.com/openclaw/openclaw/pull/183829) fix(gateway): resume goal continuations after restart
- [#183837](https://github.com/openclaw/openclaw/pull/183837) chore(ui): refresh control ui locales
- [#183819](https://github.com/openclaw/openclaw/pull/183819) refactor: deslop sidebar session fixtures
- [#183797](https://github.com/openclaw/openclaw/pull/183797) refactor: deslop provider policy, Gateway frames and internal owners
- [#183792](https://github.com/openclaw/openclaw/pull/183792) perf(ui): reduce per-card observers and subscriptions
- [#183823](https://github.com/openclaw/openclaw/pull/183823) test(gateway): make PR reader deletion fixture source-aware
- [#183754](https://github.com/openclaw/openclaw/pull/183754) refactor: deslop CLI fixtures, outbound and scheduler
- [#183756](https://github.com/openclaw/openclaw/pull/183756) fix(standalone): load fetched plugins in typed AOT builds
- [#183821](https://github.com/openclaw/openclaw/pull/183821) ci: lower test-lines ceiling to 6,337,000
- [#182392](https://github.com/openclaw/openclaw/pull/182392) perf(plugins): reuse setup registrations across caller-supplied manifest views
- [#183813](https://github.com/openclaw/openclaw/pull/183813) test: remove low-value tests (batch d562)
- [#183325](https://github.com/openclaw/openclaw/pull/183325) fix(ui): honor chat theme overrides and correct the header fade
- [#183284](https://github.com/openclaw/openclaw/pull/183284) improve(ui): give sidebar scrollbars a quieter resting state
- [#183274](https://github.com/openclaw/openclaw/pull/183274) fix(ui): remove intrusive warnings from the agent menu
- [#183762](https://github.com/openclaw/openclaw/pull/183762) fix(doctor): report why the shared state schema migration refused
- [#183244](https://github.com/openclaw/openclaw/pull/183244) test(agents): inline child follow-up cases fail intermittently when the registry wait lands during teardown
- [#183779](https://github.com/openclaw/openclaw/pull/183779) fix(clawrouter): allow granted Luna utility chat routes
- [#183794](https://github.com/openclaw/openclaw/pull/183794) refactor: deslop Gateway dispatch, events and recovery assertions
- [#183774](https://github.com/openclaw/openclaw/pull/183774) test(channels,ui,runtime): remove low-value tests (batch d555)
- [#183809](https://github.com/openclaw/openclaw/pull/183809) fix(ui): keep sidebar resize targets clear of content controls
- [#183351](https://github.com/openclaw/openclaw/pull/183351) improve(ui): unify side-panel launcher typography and spacing
- [#183796](https://github.com/openclaw/openclaw/pull/183796) perf(trajectory): reuse redacted skills metadata across runs
- [#183789](https://github.com/openclaw/openclaw/pull/183789) test(channels,providers): remove low-value tests (batch d556)
- [#183768](https://github.com/openclaw/openclaw/pull/183768) test(agents,gateway,plugins,ui): remove low-value tests (batch d553)
- [#183385](https://github.com/openclaw/openclaw/pull/183385) fix(ui): refine chat header typography, spacing, and icons
- [#183745](https://github.com/openclaw/openclaw/pull/183745) perf(sessions): release redundant search selection fields
- [#183738](https://github.com/openclaw/openclaw/pull/183738) improve(ui): show selected fonts sooner on cold loads
- [#183730](https://github.com/openclaw/openclaw/pull/183730) refactor: deslop CLI, agent-loop and UI fixtures
- [#183732](https://github.com/openclaw/openclaw/pull/183732) perf(ui): keep unrelated code out of cold route loads
- [#183678](https://github.com/openclaw/openclaw/pull/183678) perf(ui): defer optional styles from cold routes
- [#183606](https://github.com/openclaw/openclaw/pull/183606) fix(auto-reply): commands in group chats lose their line breaks and indentation
- [#183652](https://github.com/openclaw/openclaw/pull/183652) fix(gateway): back off failed environment reconciliation
- [#183801](https://github.com/openclaw/openclaw/pull/183801) chore(ui): refresh control ui locales
- [#183783](https://github.com/openclaw/openclaw/pull/183783) perf(llm): detach rate-limit observers and recovery timers
- [#183775](https://github.com/openclaw/openclaw/pull/183775) perf(ui): trim dead CSS and defer the Settings shortcut hint
- [#183766](https://github.com/openclaw/openclaw/pull/183766) perf(chat): avoid rendering hidden tool details
- [#183369](https://github.com/openclaw/openclaw/pull/183369) fix(ui): keep avatars circular through loading and fallback
- [#183335](https://github.com/openclaw/openclaw/pull/183335) fix(ui): keep chat layout stable during reload
- [#183752](https://github.com/openclaw/openclaw/pull/183752) test(core,plugins): remove low-value tests (batch d552)
- [#183751](https://github.com/openclaw/openclaw/pull/183751) chore: avoid unrelated test selection on logging changes
- [#183298](https://github.com/openclaw/openclaw/pull/183298) fix: keep empty dashboard previews inside gallery cards
- [#183364](https://github.com/openclaw/openclaw/pull/183364) fix(ui): keep floating surfaces consistent with their theme
- [#183776](https://github.com/openclaw/openclaw/pull/183776) refactor: deslop CLI, updates and command assertions
- [#183350](https://github.com/openclaw/openclaw/pull/183350) improve(ui): simplify command approval cards
- [#183319](https://github.com/openclaw/openclaw/pull/183319) fix(ui): distinguish hover and selection surfaces
- [#183771](https://github.com/openclaw/openclaw/pull/183771) fix(knowledge): start workers on Bun and standalone builds
- [#183773](https://github.com/openclaw/openclaw/pull/183773) test(providers,agents,runtime): remove low-value tests (batch d554)
- [#183767](https://github.com/openclaw/openclaw/pull/183767) refactor: deslop AI, CLI and plugin fixtures
- [#179212](https://github.com/openclaw/openclaw/pull/179212) fix: keep shell dividers consistent and resize feedback off scrollbars
- [#183749](https://github.com/openclaw/openclaw/pull/183749) refactor: deslop transcript owners, plugin callbacks and UI frames
- [#183630](https://github.com/openclaw/openclaw/pull/183630) improve: show Appearance settings before full config loads
- [#183621](https://github.com/openclaw/openclaw/pull/183621) fix(onnx): reject pipe-backed model files without blocking
- [#183746](https://github.com/openclaw/openclaw/pull/183746) test(ui,cli,agents,plugins,gateway): remove low-value tests (batch d550)
- [#183760](https://github.com/openclaw/openclaw/pull/183760) perf(ui): share Browser panel observers and listeners
- [#183750](https://github.com/openclaw/openclaw/pull/183750) test(agents,gateway,infra): remove low-value tests (batch d551)
- [#183734](https://github.com/openclaw/openclaw/pull/183734) test(core,plugins,ui): remove low-value tests (batch d549)
- [#183614](https://github.com/openclaw/openclaw/pull/183614) fix(team-reports): reject pipe-backed rosters without blocking
- [#183704](https://github.com/openclaw/openclaw/pull/183704) perf(sessions): reuse startup contract and inventory reads
- [#183677](https://github.com/openclaw/openclaw/pull/183677) refactor: deslop route, goal and agent-roster fixtures
- [#183671](https://github.com/openclaw/openclaw/pull/183671) refactor: deslop channel adapters, gateway clients and runtime owners
- [#179899](https://github.com/openclaw/openclaw/pull/179899) feat(acpx): let operators keep Gateway env out of ACP agents
- [#183603](https://github.com/openclaw/openclaw/pull/183603) fix(browser): return JSON for invalid tab indexes
- [#183667](https://github.com/openclaw/openclaw/pull/183667) improve: avoid empty transactions during PostgreSQL memory search
- [#183567](https://github.com/openclaw/openclaw/pull/183567) fix(memory-core): split batches Mistral rejects for too many tokens overall
- [#183644](https://github.com/openclaw/openclaw/pull/183644) perf(gateway): avoid redundant worker probes for workspace additions
- [#183733](https://github.com/openclaw/openclaw/pull/183733) fix(ui): release retired progress rosters and expired prefetch keys
- [#183707](https://github.com/openclaw/openclaw/pull/183707) test(core,plugins,ui): remove low-value tests (batch d548)
- [#183725](https://github.com/openclaw/openclaw/pull/183725) test: wait for asynchronous pool expiry in PostgreSQL reuse test
- [#183741](https://github.com/openclaw/openclaw/pull/183741) refactor: deslop UI, provider and runtime fixtures
- [#183684](https://github.com/openclaw/openclaw/pull/183684) test(core,ui,plugins): remove low-value tests (batch d545)
- [#183665](https://github.com/openclaw/openclaw/pull/183665) perf(sessions): batch spawned child transcript initialization
- [#183685](https://github.com/openclaw/openclaw/pull/183685) test(gateway,agents,ui): remove low-value tests (batch d546)
- [#180139](https://github.com/openclaw/openclaw/pull/180139) feat(knowledge): bundle the Knowledge memory plugin
- [#183736](https://github.com/openclaw/openclaw/pull/183736) fix(qa): restore native stop targeting for Telegram DMs
- [#183721](https://github.com/openclaw/openclaw/pull/183721) perf(github): keep workspace base refresh responsive
- [#183726](https://github.com/openclaw/openclaw/pull/183726) fix(qa): preserve Telegram snapshots and valid fixtures
- [#183714](https://github.com/openclaw/openclaw/pull/183714) test: scope prepared runtime warning mocks to their consumers
- [#183634](https://github.com/openclaw/openclaw/pull/183634) docs(postgres): qualify native Windows service lifecycle
- [#182561](https://github.com/openclaw/openclaw/pull/182561) feat(cron): bind older automations to the conversation that created them
- [#183724](https://github.com/openclaw/openclaw/pull/183724) fix(standalone): relink only source AOT bundles
- [#183689](https://github.com/openclaw/openclaw/pull/183689) fix(standalone): make source AOT type boundaries explicit
- [#183622](https://github.com/openclaw/openclaw/pull/183622) fix(windows): prevent managed update self-lock on TEMP aliases
- [#183632](https://github.com/openclaw/openclaw/pull/183632) fix(windows): request graceful stop for PostgreSQL Gateway services
- [#183695](https://github.com/openclaw/openclaw/pull/183695) fix(database): share pool with partial-index conformance worker
- [#183686](https://github.com/openclaw/openclaw/pull/183686) test(core,ui): remove low-value tests (batch d547)
- [#183716](https://github.com/openclaw/openclaw/pull/183716) refactor: deslop native-resource, agent and UI fixtures
- [#183701](https://github.com/openclaw/openclaw/pull/183701) refactor: deslop update, gateway CLI and doctor fixtures
- [#183703](https://github.com/openclaw/openclaw/pull/183703) fix(doctor): keep a valid reseeded config that lacks meta

#### 🐛 New Issues
- [#183786](https://github.com/openclaw/openclaw/issues/183786) [Bug]: Windows beta upgrade repeatedly queries stopped foreground Gateway PID after successful npm staging `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬8
- [#183638](https://github.com/openclaw/openclaw/issues/183638) [Bug]: 2026.10.7 removes Claude Code's Agent and Workflow tools from claude-cli turns, so /think ultra can only delegate through sessions_spawn (no opt-in, no changelog note) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬5
- [#183592](https://github.com/openclaw/openclaw/issues/183592) [Bug]: Composer intermittently loses text inserted by third-party voice input tools `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬4
- [#183599](https://github.com/openclaw/openclaw/issues/183599) [Bug]: Gateway hangs on startup after 2026.9.6→2026.10.7 update; WS health check and message handling both fail; persists across service restart, doctor repair, and full OS reboot `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬3
- [#183731](https://github.com/openclaw/openclaw/issues/183731) Docker update 2026.7.2 → v2026.10.3: doctor stops at "state-schema (step-refused)" with no reason shown `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬3
- [#183682](https://github.com/openclaw/openclaw/issues/183682) [Bug]: Windows onboarding abandons dashboard handoff after 2-second fetch timeout despite Gateway ready `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#183449](https://github.com/openclaw/openclaw/issues/183449) [Bug]: Two processes making the first write for the same new agent: one fails with "Agent database target changed before creating open" (SQLite and PostgreSQL) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬3
- [#183656](https://github.com/openclaw/openclaw/issues/183656) [Bug]: Linux companion AppImage: SSH tunnel to a saved remote Gateway fails when the SSH config's ProxyCommand loads the system OpenSSL `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬3
- [#183597](https://github.com/openclaw/openclaw/issues/183597) [Bug]: Control UI Talk acknowledges requests but backing-agent admission waits indefinitely `P2` `clawsweeper:needs-live-repro` `impact:message-loss` `issue-rating: 🐚 platinum hermit` 💬3
- [#183497](https://github.com/openclaw/openclaw/issues/183497) OpenAI-compatible API: session lifecycle controls (session key echo, ephemeral mode, per-request TTL) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬3
- [#183129](https://github.com/openclaw/openclaw/issues/183129) [Bug]: Linux subreaper kills intentionally detached exec children `bug` `regression` `P2` `clawsweeper:no-new-fix-pr` 💬3
- [#183088](https://github.com/openclaw/openclaw/issues/183088) [Bug]: Windows PowerShell installer fails with NodeVersion validation error `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬3
- [#183966](https://github.com/openclaw/openclaw/issues/183966) [Feature]: Workboard: restore Add to Workboard in session menus and open the linked card from the session chip `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#183863](https://github.com/openclaw/openclaw/issues/183863) Heartbeat runner reports "Worker placement inventory changed" on the first placement change, even though the turn usually proceeds; error status and backoff are applied anyway `P2` `impact:other` 💬2
- [#183805](https://github.com/openclaw/openclaw/issues/183805) [Bug]: foreign launchd job scan aborts above 64 ai.openclaw.* labels (doctor/status lose the check) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#183757](https://github.com/openclaw/openclaw/issues/183757) [Bug]: ClawRouter Luna utility calls rejected as chat-unsupported despite granted working Responses route `bug` `P2` `clawsweeper:source-repro` `impact:auth-provider` 💬2
- [#183657](https://github.com/openclaw/openclaw/issues/183657) [Bug]: Discord progress mode suppresses enabled compaction notices `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#183747](https://github.com/openclaw/openclaw/issues/183747) [Bug]: Session PR facts only read the `origin` remote, so a branch pushed to a fork under another remote name shows no pull request `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#183446](https://github.com/openclaw/openclaw/issues/183446) /new via WhatsApp fails instantly without reaching the agent (generic 'temporary model failure' reply) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` `P0` 💬2
- [#183679](https://github.com/openclaw/openclaw/issues/183679) [Bug]: /new in Telegram topics replies "New session started" but silently skips the reset (claude-cli session resumed, no reset boundary) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬2
- [#183740](https://github.com/openclaw/openclaw/issues/183740) [Feature]: Memory continuity for realtime Talk: bring Voice Call's fast memory context (and/or Active Memory) to Talk consults `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬2
- [#183700](https://github.com/openclaw/openclaw/issues/183700) [Bug]: rememberAcrossConversations is on by default, but its required Active Memory plugin is disabled by default, so cross-conversation recall silently does nothing `bug` `no-stale` `bug:behavior` `P2` 💬2
- [#183625](https://github.com/openclaw/openclaw/issues/183625) tools.elevated: allowFrom gate denies all senders on webchat - even ["*"] (config matches docs) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬2
- [#183709](https://github.com/openclaw/openclaw/issues/183709) [Bug]: Doctor treats allowed non-default child model overrides as stale routing `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#183479](https://github.com/openclaw/openclaw/issues/183479) [Bug]: [extended-stable 2026.9.34] update repair remains blocked by retained package recovery `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬2
- [#183332](https://github.com/openclaw/openclaw/issues/183332) Plugin model-call hooks never fire for one-shot completions (pdf tool, TTS, image understanding, conversation labels) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#183642](https://github.com/openclaw/openclaw/issues/183642) Control UI silently loses unsaved agent core-file edits after Settings navigation `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#183569](https://github.com/openclaw/openclaw/issues/183569) [Bug]: Isolated cron message send intermittently fails with "Cron receipt authority is unavailable" (2026.10.6) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#183537](https://github.com/openclaw/openclaw/issues/183537) Request: consider ShieldCortex and multi-clawd for the official plugin catalog or a verified-publisher listing `P3` 💬2
- [#183363](https://github.com/openclaw/openclaw/issues/183363) [Bug]: PostgreSQL model-context reads never reuse the navigation cache (read-only snapshot counted as uncommitted writes) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#183425](https://github.com/openclaw/openclaw/issues/183425) memory-core: embedding provider failure is cached permanently and degrades to FTS-only **silently** (no log, no retry, no self-heal until gateway restart) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#183164](https://github.com/openclaw/openclaw/issues/183164) Update failure: post-update-verification (2026.9.33) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#184007](https://github.com/openclaw/openclaw/issues/184007) [Feature]: bound the processes host exec (exec.host: gateway) may start, so one session's fan-out cannot exhaust the container pids cap `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#183978](https://github.com/openclaw/openclaw/issues/183978) Cron condition triggers fail (plugin_reload_failed) while an unrelated plugin is retired, even with toolsAllow ["exec"] `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#183957](https://github.com/openclaw/openclaw/issues/183957) [Bug]: macOS 27: proc-safe throws "unterminated Darwin environment" for most processes, so the process census fails and Doctor/update can't finish maintenance `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#183946](https://github.com/openclaw/openclaw/issues/183946) [Bug]: Discord replies/progress appear stuck after input during delegated work; completion-wake commit timeouts (2026.10.7) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#183927](https://github.com/openclaw/openclaw/issues/183927) [Bug]: macOS Mac tab shows a blank white page with no error when a load fails `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#183926](https://github.com/openclaw/openclaw/issues/183926) [Bug]: macOS dashboard shows stale Mac tab state after switching experience back `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#183928](https://github.com/openclaw/openclaw/issues/183928) [Bug]: macOS Mac tab reloads with no limit after its web content process crashes `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#183929](https://github.com/openclaw/openclaw/issues/183929) [Bug]: macOS Mac tab element inspection runs in the page's script world and can be spoofed `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#183925](https://github.com/openclaw/openclaw/issues/183925) [Bug]: macOS Mac tab loses its favicon after an in-page anchor click or a failed navigation `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#183904](https://github.com/openclaw/openclaw/issues/183904) [Bug]: A2A replies still complete the oldest pending task on stable 2026.10.5–2026.10.7 (#170469 not backported) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#183892](https://github.com/openclaw/openclaw/issues/183892) [Feature]: Allow authored alt text on Slack image uploads `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#183894](https://github.com/openclaw/openclaw/issues/183894) google-meet: one media element rejecting setSinkId aborts speaker routing for the whole call `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#183858](https://github.com/openclaw/openclaw/issues/183858) [Bug]: Ordinary plugin-capture sweep in a short-lived CLI process reclaims the live Gateway's capture instance when POSIX locks aren't honored (Docker Desktop macOS bind mount) → Codex harness ENOENT until restart `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#183856](https://github.com/openclaw/openclaw/issues/183856) [Bug]: /status as the first message after /new writes a retired top-level `channel` session field (doctor: legacy delivery fields) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#183850](https://github.com/openclaw/openclaw/issues/183850) Update failure: node-runtime-preflight (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#183848](https://github.com/openclaw/openclaw/issues/183848) SQLite model-context navigation cache thrashes across alternating sessions on one connection `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#183835](https://github.com/openclaw/openclaw/issues/183835) Tauri: support an explicit JIT or prebuilt AOT runtime flavor `P2` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#183830](https://github.com/openclaw/openclaw/issues/183830) [Bug]: DeepSeek web search and usage balance send a chat proxy's key to api.deepseek.com `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#183824](https://github.com/openclaw/openclaw/issues/183824) Update failure: package-install-omit-optional (2026.10.5) `P2` `impact:ux-friction` 💬1
- [#183802](https://github.com/openclaw/openclaw/issues/183802) Agent SQLite transaction completion stalls 35–61s with short callbacks and admission waits `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#183790](https://github.com/openclaw/openclaw/issues/183790) Plugin state authority unavailable aborts accepted Telegram turn before reply `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#183791](https://github.com/openclaw/openclaw/issues/183791) Update failure: package-install-omit-optional (2026.10.4) `P2` `impact:ux-friction` 💬1
- [#183780](https://github.com/openclaw/openclaw/issues/183780) Update failure: package-install-omit-optional (2026.10.4) `P2` `impact:ux-friction` 💬1
- [#183759](https://github.com/openclaw/openclaw/issues/183759) [Feature]: Create subscriber-only Telegram channel polls `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#183758](https://github.com/openclaw/openclaw/issues/183758) [Feature]: Hide Telegram poll results until voting closes `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#183753](https://github.com/openclaw/openclaw/issues/183753) Companion Talk: small always-on-top window for the current chat `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#183556](https://github.com/openclaw/openclaw/issues/183556) memory.search: no way to cap embedding batch size/tokens for openai-compatible providers (Mistral rejects with 3210) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#183744](https://github.com/openclaw/openclaw/issues/183744) [Bug]: OpenClaw update fails at candidate-state-snapshot — SQLite worker queue capacity reached with >63 agents `bug` `regression` `P2` `impact:ux-friction` 💬1
- [#183743](https://github.com/openclaw/openclaw/issues/183743) [Bug]: iMessage TTS replies are dropped entirely (audio and text) when the private API bridge is unavailable (SIP enabled) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#183739](https://github.com/openclaw/openclaw/issues/183739) [Bug]: google-vertex adapter regression in 2026.10.7 - "empty-error-retry non-visible-output" despite valid Vertex AI API response `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#183727](https://github.com/openclaw/openclaw/issues/183727) Discord: heartbeat/system turns cannot edit same-bot messages across sessions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#183723](https://github.com/openclaw/openclaw/issues/183723) [Docs]: Windows token-recovery instructions omit .cmd workaround for Restricted PowerShell policy `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#183722](https://github.com/openclaw/openclaw/issues/183722) [Bug]: Connection check always fails for reasoning models: 8-token probe budget is consumed by reasoning tokens `bug` `bug:behavior` `P2` `impact:auth-provider` 💬1
- [#183717](https://github.com/openclaw/openclaw/issues/183717) [Bug]: @openclaw/codex 2026.10.6/2026.10.7 bundle @openai/codex 0.160.0, which predates the eMudhra certificate fixes in 0.164.0 `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#183711](https://github.com/openclaw/openclaw/issues/183711) [Bug]: Outbound recovery loses its wake before an active send lease expires `P2` `clawsweeper:source-repro` `impact:message-loss` `issue-rating: 🦞 diamond lobster` 💬1
- [#183710](https://github.com/openclaw/openclaw/issues/183710) Update failure: package-install-omit-optional (2026.10.5) `P2` `impact:ux-friction` 💬1
- [#183705](https://github.com/openclaw/openclaw/issues/183705) [Bug]: Goals created during a chat stop after delegated work returns `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#183699](https://github.com/openclaw/openclaw/issues/183699) [Bug]: Broker workers >2 stall writers ~10–15 s: idle-executor eviction terminates emptied workers and reopens pile onto cold ones `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#183698](https://github.com/openclaw/openclaw/issues/183698) [Feature]: PostgreSQL bridge re-parses and re-plans every statement; reuse named statements per connection `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#183697](https://github.com/openclaw/openclaw/issues/183697) [Bug]: Memory temporal decay skips keyword-only hits on SQLite but applies them on PostgreSQL, so the two engines rank the same index differently 💬1
- [#183411](https://github.com/openclaw/openclaw/issues/183411) Hybrid memory search repeats token comparisons after duplicate similarity saturates `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#183687](https://github.com/openclaw/openclaw/issues/183687) [Bug]: restart recovery notice appears without a gateway restart, and only in some sessions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#183680](https://github.com/openclaw/openclaw/issues/183680) [Bug]: Windows PowerShell installer completes npm install without automatic setup handoff `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `P0` 💬1
- [#183673](https://github.com/openclaw/openclaw/issues/183673) [Bug]: dashboard attribution is inconsistent: agent-created dashboards split between owner and agent authorship in the gallery `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#183672](https://github.com/openclaw/openclaw/issues/183672) Muse status requests time out after resuming native background work `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#183670](https://github.com/openclaw/openclaw/issues/183670) Update failure: package-install-omit-optional (2026.10.5) `P2` `impact:ux-friction` 💬1
- [#183669](https://github.com/openclaw/openclaw/issues/183669) Update failure: package-install-omit-optional (2026.10.3) `P2` `impact:ux-friction` 💬1
- [#183641](https://github.com/openclaw/openclaw/issues/183641) doctor --fix restores the old config after a documented Kubernetes reseed (missing-meta-vs-last-good) `P1` `impact:data-loss` `maturity:stable` 💬1
- [#183639](https://github.com/openclaw/openclaw/issues/183639) [Feature]: Pass neighboring text context to ElevenLabs TTS requests `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#183610](https://github.com/openclaw/openclaw/issues/183610) Docs: note that Go-based CLIs on macOS ignore SSL_CERT_FILE behind the secret egress proxy `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#183608](https://github.com/openclaw/openclaw/issues/183608) Upgrades and migrations are a minefield: two full outage-days in October, silent auth loss, doctor repair loops, and no rollback path - this is pushing users to alternatives (e.g. Hermes) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#183590](https://github.com/openclaw/openclaw/issues/183590) Talk / gpt-live-1-codex: are private model-authored observations supported in delegation input_text? `P3` 💬1
- [#183589](https://github.com/openclaw/openclaw/issues/183589) Exec completion wake turns lose bundle MCP tools (event-source toolsAllow omits MCP tool names) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#183154](https://github.com/openclaw/openclaw/issues/183154) [Bug]: OPENCLAW_STATE_LEASE_LOST hides the persisted loss reason `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#183574](https://github.com/openclaw/openclaw/issues/183574) [Feature]: memory-core dreaming admission cannot select sessions by session key `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#183564](https://github.com/openclaw/openclaw/issues/183564) [Bug]: Published Codex 2026.10.7 still lacks recovery declarations fixed in #178286 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#183562](https://github.com/openclaw/openclaw/issues/183562) [Bug]: Control UI config save fails with redacted SecretRef on Google OAuth plugin (regression of #150240, 2026.10.7) `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬1
- [#183555](https://github.com/openclaw/openclaw/issues/183555) iOS completed-work folds omit tool counts `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#183541](https://github.com/openclaw/openclaw/issues/183541) [Bug]: security audit treats unset exec security as "deny", so agents that run with full host exec by default (or with only ask: "off") are never reported `security` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` 💬1
- [#183529](https://github.com/openclaw/openclaw/issues/183529) Control UI repeats assistant answers and narration in Claude CLI sessions `P2` `impact:session-state` `impact:ux-friction` `clawsweeper:bulk-filed` 💬1
- [#183523](https://github.com/openclaw/openclaw/issues/183523) Skill Workshop: make autonomous self-learning opt-in (default skills.workshop.autonomous.mode to "off") `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#183515](https://github.com/openclaw/openclaw/issues/183515) [Feature]: Select a supported Azure Neural speaking style in the bundled speech provider `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#183505](https://github.com/openclaw/openclaw/issues/183505) [Bug]: Control UI displays raw async exec completion events after the assistant’s final response `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#183499](https://github.com/openclaw/openclaw/issues/183499) memory_search corpus=sessions times out on every call (large session store): pre-embedding hang, doomed catch-up churn, misleading provider-error diagnostic `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#183487](https://github.com/openclaw/openclaw/issues/183487) [Bug]: Doctor lint flags explicit browser import opt-out as a warning and exits 1 `P2` `impact:ux-friction` 💬1
- [#183482](https://github.com/openclaw/openclaw/issues/183482) [Feature]: Configurable reconnect/backoff for lost managed Tailscale Serve claims `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#183307](https://github.com/openclaw/openclaw/issues/183307) [Bug]: `database port --to postgres` hands back PostgreSQL schemas with no planner statistics (no ANALYZE), so first queries plan on default estimates `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#183460](https://github.com/openclaw/openclaw/issues/183460) [Bug]: X verifiedFromGitHub sync or the X channel's token refresh fails when the account key has capitals `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#183455](https://github.com/openclaw/openclaw/issues/183455) [Bug]: Codex thread/resume rejects a persisted history item; changing model does not recover the affected thread `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#183452](https://github.com/openclaw/openclaw/issues/183452) Update failure: package-install-omit-optional (2026.10.4) `P2` `impact:ux-friction` 💬1
- [#183334](https://github.com/openclaw/openclaw/issues/183334) CI: let a fork run every job on its own self-hosted runners and cache, with no hosted fallback `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#183439](https://github.com/openclaw/openclaw/issues/183439) [Bug]: PostgreSQL memory keyword search misses tokens SQLite FTS matches (dates, paths, file names), so hybrid relevance regresses `P2` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬1
- [#183434](https://github.com/openclaw/openclaw/issues/183434) Update failure: package-install-omit-optional (2026.10.5) `P2` `impact:ux-friction` 💬1
- [#183416](https://github.com/openclaw/openclaw/issues/183416) Subagent batch results silently dropped when the requester-settle runId exceeds 256 chars ("execution identity admission token violates its bounded contract") `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#183409](https://github.com/openclaw/openclaw/issues/183409) [BUG] Rules in NOW.md / CHECKS.md are never loaded automatically — no config option for additional bootstrap files `P3` `impact:ux-friction` 💬1
- [#183389](https://github.com/openclaw/openclaw/issues/183389) [Bug]: Promoted conversation leaves its former parent showing a 21h 57m working indicator `bug` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬1
- [#183371](https://github.com/openclaw/openclaw/issues/183371) [Docs Bug]: Chat guide omits desktop send shortcuts and IME confirmation guidance `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#183228](https://github.com/openclaw/openclaw/issues/183228) [Bug]: Memory rebuild after `database port --family agent` re-embeds chunks whose vectors are already stored in the source index `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#183304](https://github.com/openclaw/openclaw/issues/183304) [Bug]: Android realtime Talk ignores selected chat and saves transcripts to device-scoped session `P2` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬1
- [#183288](https://github.com/openclaw/openclaw/issues/183288) Bug: infer image describe rejects plugin-discovered vision model as text-only while Gateway model.run succeeds `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` 💬1
- [#183287](https://github.com/openclaw/openclaw/issues/183287) Idle watchdog: let a provider declare a loopback baseUrl as remote (local relay in front of a hosted API) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#183277](https://github.com/openclaw/openclaw/issues/183277) [Feature]: Leave Doctor's retained `*.pre-startup-migration-*.bak` originals out of `openclaw backup create` archives (or make it optional) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#183275](https://github.com/openclaw/openclaw/issues/183275) [Bug]: Native notification test outcomes in Notification settings are not announced to screen readers `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#183273](https://github.com/openclaw/openclaw/issues/183273) Compaction fallback inherits the primary native harness and rejects its model `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#183264](https://github.com/openclaw/openclaw/issues/183264) [Bug]: Image-output models used as the chat model: the generated image is dropped (OpenRouter `images` field ignored by the chat transport) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#183262](https://github.com/openclaw/openclaw/issues/183262) [Bug]: X Control UI cannot manage an account whose config key has capitals `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#183260](https://github.com/openclaw/openclaw/issues/183260) [Bug]: Nextcloud Talk sends a pairing code for its own API user when OpenClaw shares a file in a DM `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#183238](https://github.com/openclaw/openclaw/issues/183238) [Bug]: Windows update repair always defers Doctor — 2 s PROCESS_INSPECTION_TIMEOUT_MS too short for ancestry snapshot; Gateway won't start after upgrade (10.6/10.7) `P1` `impact:ux-friction` 💬1
- [#183237](https://github.com/openclaw/openclaw/issues/183237) [Feature]: Mattermost bot-to-bot loop protection and allowBots `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#183138](https://github.com/openclaw/openclaw/issues/183138) macOS 2026.10.7: remote post-update recovery can label node-service inspection failure as a Gateway failure `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#183219](https://github.com/openclaw/openclaw/issues/183219) [Bug]: IMAP plugin DMARC always fails under Bun: resolveTxt splits multi-string TXT records, truncating 2048-bit DKIM keys `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#183091](https://github.com/openclaw/openclaw/issues/183091) [Bug]: Update disk preflight passes with a 9.3 GiB estimate, then activation needs 22.7 GiB and fails after 15 minutes of validation `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#183213](https://github.com/openclaw/openclaw/issues/183213) [Bug]: Progress indicator collapses assistant responses on v2026.10.7 `P2` `impact:ux-friction` 💬1
- [#183207](https://github.com/openclaw/openclaw/issues/183207) [Bug]: Web Push error messages in Notification settings are not announced to screen readers `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#183173](https://github.com/openclaw/openclaw/issues/183173) [Feature]: Resize oversized JPEG camera photos before Control UI upload (Android Chrome) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#183169](https://github.com/openclaw/openclaw/issues/183169) `before_agent_run`: let a plugin-declared block advance the run's model fallback chain `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#183149](https://github.com/openclaw/openclaw/issues/183149) Update admits candidate with unsatisfied engines.node (warn only), restarts Gateway on unsupported Node and crash-loops (2026.10.5 -> 2026.10.7, install-cli layout) `impact:crash-loop` `P0` 💬1
- [#183141](https://github.com/openclaw/openclaw/issues/183141) [Feature]: Use existing edit masks with the bundled OpenAI image provider `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#183090](https://github.com/openclaw/openclaw/issues/183090) [Feature]: Docs page for using OpenLLM (local OpenAI-compatible endpoint) as a custom provider `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#183112](https://github.com/openclaw/openclaw/issues/183112) [Bug]: Background exec completion is relayed again after the agent already read it with process log `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#183098](https://github.com/openclaw/openclaw/issues/183098) Feature: openclaw channels start|stop for non-destructive per-account recovery `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#183096](https://github.com/openclaw/openclaw/issues/183096) [Bug]: `scripts/bench-memory-search.mjs` still measures the exact PostgreSQL vector path, not the binary-sketch prefilter from #182164 `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#183094](https://github.com/openclaw/openclaw/issues/183094) [Feature]: Make `openclaw backup create --verify` faster for large state (about 25 min for a 16 GB archive, Gateway stopped on PostgreSQL installs) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#183085](https://github.com/openclaw/openclaw/issues/183085) [Bug]: Raw <tool_call> text ends the turn when the model calls a deferred Tool Search tool by name `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#183893](https://github.com/openclaw/openclaw/issues/183893) google-meet: durable meeting transcripts stay empty because the 5 s capture timer inherits the join caller's expired authority `clawsweeper:intake:bug`

#### 🔒 Closed Issues
- [#83342](https://github.com/openclaw/openclaw/issues/83342) 5.16-beta.5: /models browse picker duplicates models under both canonical provider and CLI runtime alias provider
- [#89430](https://github.com/openclaw/openclaw/issues/89430) Google Chat: agents can't deliver images/files under app authentication (media upload → 403)
- [#183638](https://github.com/openclaw/openclaw/issues/183638) [Bug]: 2026.10.7 removes Claude Code's Agent and Workflow tools from claude-cli turns, so /think ultra can only delegate through sessions_spawn (no opt-in, no changelog note)
- [#84486](https://github.com/openclaw/openclaw/issues/84486) Bug: Text before tool calls is lost in Feishu streaming card reply mode
- [#108216](https://github.com/openclaw/openclaw/issues/108216) [Bug]: Bedrock Mantle discovers GPT-5.6 models but no supported transport can invoke them
- [#134798](https://github.com/openclaw/openclaw/issues/134798) [Bug]: macOS GPT-Live relay hits owner failure despite existing v2026.8.1 clear guard
- [#150769](https://github.com/openclaw/openclaw/issues/150769) blocked_tool_call session stalls (approval-gated tool waits) never recover — no timeout, requires manual gateway restart (2026.9.4)
- [#134887](https://github.com/openclaw/openclaw/issues/134887) [Bug]: No discard control for interrupted/cancelled pending inputs in webchat (2026.8.1)
- [#157783](https://github.com/openclaw/openclaw/issues/157783) [Bug]: native TypeScript 7 declaration emit peaks at ~13.5GB per tsgo child during pnpm build
- [#179665](https://github.com/openclaw/openclaw/issues/179665) [Bug]: web_search never uses Brave: a search-only provider plugin is never loaded in the agent runtime
- [#145681](https://github.com/openclaw/openclaw/issues/145681) [Bug]: Session stuck in 'running' after model idle-timeout; user messages silently dropped during the stall
- [#166496](https://github.com/openclaw/openclaw/issues/166496) Killed sub-agent strands its yield batch: settle wake gives up after 10 deferrals and drops successful siblings' results
- [#183021](https://github.com/openclaw/openclaw/issues/183021) macOS app terminates itself ~15-30s after connecting to a remote Gateway (2026.10.7, macOS 26) — related to #89162
- [#148796](https://github.com/openclaw/openclaw/issues/148796) backup create --verify accepts raw SQLite .db WAL/SHM families
- [#183088](https://github.com/openclaw/openclaw/issues/183088) [Bug]: Windows PowerShell installer fails with NodeVersion validation error
- [#159978](https://github.com/openclaw/openclaw/issues/159978) test(bun): candidate source assertions miss the extracted AI helper
- [#183056](https://github.com/openclaw/openclaw/issues/183056) [Bug]: Reloading a Control UI session address carrying __openclawSessionKey returns a bare 404 "Not found"
- [#183863](https://github.com/openclaw/openclaw/issues/183863) Heartbeat runner reports "Worker placement inventory changed" on the first placement change, even though the turn usually proceeds; error status and backoff are applied anyway
- [#183757](https://github.com/openclaw/openclaw/issues/183757) [Bug]: ClawRouter Luna utility calls rejected as chat-unsupported despite granted working Responses route
- [#143609](https://github.com/openclaw/openclaw/issues/143609) macOS LaunchAgent service-env does not refresh durable env changes on gateway restart
- [#163939](https://github.com/openclaw/openclaw/issues/163939) Windows health checks time out when a healthy Gateway listener cannot be attributed
- [#98229](https://github.com/openclaw/openclaw/issues/98229) renderHistoryMessage hardcodes "User" label — group chat senders indistinguishable in history
- [#164004](https://github.com/openclaw/openclaw/issues/164004) Bound ACP /new and /reset can abort their own acknowledgement during cleanup
- [#161522](https://github.com/openclaw/openclaw/issues/161522) [Bug]: Bun WebSocket proxy path imports undeclared proxy-from-env dependency
- [#99645](https://github.com/openclaw/openclaw/issues/99645) Declined native exec approval silently kills user-addressed turns — assistantTexts: [] can close as success (turn finalized 9–37 ms after the blocked tool result, no model continuation)
- [#168865](https://github.com/openclaw/openclaw/issues/168865) [Bug]: Bun CPU profiling intermittently reports zero duration
- [#127616](https://github.com/openclaw/openclaw/issues/127616) Rapid macOS Browser Control toggles race independent CAS transactions and lose the latest intent
- [#179369](https://github.com/openclaw/openclaw/issues/179369) [Bug]: Telegram and Mattermost default bot stops starting once a named account is added (SecretRef token)
- [#170058](https://github.com/openclaw/openclaw/issues/170058) [Feature]: Select which tools are deferred behind Tool Search
- [#183824](https://github.com/openclaw/openclaw/issues/183824) Update failure: package-install-omit-optional (2026.10.5)
- [#183791](https://github.com/openclaw/openclaw/issues/183791) Update failure: package-install-omit-optional (2026.10.4)
- [#183780](https://github.com/openclaw/openclaw/issues/183780) Update failure: package-install-omit-optional (2026.10.4)
- [#183556](https://github.com/openclaw/openclaw/issues/183556) memory.search: no way to cap embedding batch size/tokens for openai-compatible providers (Mistral rejects with 3210)
- [#183744](https://github.com/openclaw/openclaw/issues/183744) [Bug]: OpenClaw update fails at candidate-state-snapshot — SQLite worker queue capacity reached with >63 agents
- [#183722](https://github.com/openclaw/openclaw/issues/183722) [Bug]: Connection check always fails for reasoning models: 8-token probe budget is consumed by reasoning tokens
- [#183710](https://github.com/openclaw/openclaw/issues/183710) Update failure: package-install-omit-optional (2026.10.5)
- [#183697](https://github.com/openclaw/openclaw/issues/183697) [Bug]: Memory temporal decay skips keyword-only hits on SQLite but applies them on PostgreSQL, so the two engines rank the same index differently
- [#183670](https://github.com/openclaw/openclaw/issues/183670) Update failure: package-install-omit-optional (2026.10.5)
- [#183669](https://github.com/openclaw/openclaw/issues/183669) Update failure: package-install-omit-optional (2026.10.3)
- [#183641](https://github.com/openclaw/openclaw/issues/183641) doctor --fix restores the old config after a documented Kubernetes reseed (missing-meta-vs-last-good)
- [#183154](https://github.com/openclaw/openclaw/issues/183154) [Bug]: OPENCLAW_STATE_LEASE_LOST hides the persisted loss reason
- [#183529](https://github.com/openclaw/openclaw/issues/183529) Control UI repeats assistant answers and narration in Claude CLI sessions
- [#182950](https://github.com/openclaw/openclaw/issues/182950) [Bug]: Codex persistence suppression omits the real user request from agent_end observers
- [#183487](https://github.com/openclaw/openclaw/issues/183487) [Bug]: Doctor lint flags explicit browser import opt-out as a warning and exits 1
- [#183307](https://github.com/openclaw/openclaw/issues/183307) [Bug]: `database port --to postgres` hands back PostgreSQL schemas with no planner statistics (no ANALYZE), so first queries plan on default estimates
- [#180814](https://github.com/openclaw/openclaw/issues/180814) [Bug]: Control UI chat: focusable transcript region (role="log") has no accessible name
- [#183452](https://github.com/openclaw/openclaw/issues/183452) Update failure: package-install-omit-optional (2026.10.4)
- [#183434](https://github.com/openclaw/openclaw/issues/183434) Update failure: package-install-omit-optional (2026.10.5)
- [#137432](https://github.com/openclaw/openclaw/issues/137432) [Feature]: Use task schemas during Codex-backed llm-task generation
- [#183409](https://github.com/openclaw/openclaw/issues/183409) [BUG] Rules in NOW.md / CHECKS.md are never loaded automatically — no config option for additional bootstrap files
- [#180940](https://github.com/openclaw/openclaw/issues/180940) [Bug]: External Codex session browsing loses structured tool presentation
- [#178410](https://github.com/openclaw/openclaw/issues/178410) [Feature]: Show approval scopes on pending node pairing requests
- [#178532](https://github.com/openclaw/openclaw/issues/178532) [Feature]: Record the provider-reported response model (gen_ai.response.model) on diagnostics-otel model.call / model.usage spans
- [#150695](https://github.com/openclaw/openclaw/issues/150695) [Bug]: iOS composer disables Send for typed drafts during active runs
- [#183228](https://github.com/openclaw/openclaw/issues/183228) [Bug]: Memory rebuild after `database port --family agent` re-embeds chunks whose vectors are already stored in the source index
- [#165500](https://github.com/openclaw/openclaw/issues/165500) [Bug]: Same-session announcements can consume another active request's accepted chat input
- [#178411](https://github.com/openclaw/openclaw/issues/178411) [Feature]: Show plugin trust status in plugins list output
- [#127569](https://github.com/openclaw/openclaw/issues/127569) macOS camera clips and screen recordings can exceed the Gateway frame budget
- [#175540](https://github.com/openclaw/openclaw/issues/175540) [Docs Bug]: Fresh macOS DMG installation triggers undocumented Git/Command Line Tools and Bun network permission prompts
- [#180719](https://github.com/openclaw/openclaw/issues/180719) [Bug]: Codex plugin rejects managed proxy NO_PROXY defaults
- [#183238](https://github.com/openclaw/openclaw/issues/183238) [Bug]: Windows update repair always defers Doctor — 2 s PROCESS_INSPECTION_TIMEOUT_MS too short for ancestry snapshot; Gateway won't start after upgrade (10.6/10.7)
- [#183138](https://github.com/openclaw/openclaw/issues/183138) macOS 2026.10.7: remote post-update recovery can label node-service inspection failure as a Gateway failure
- [#183091](https://github.com/openclaw/openclaw/issues/183091) [Bug]: Update disk preflight passes with a 9.3 GiB estimate, then activation needs 22.7 GiB and fails after 15 minutes of validation
- [#183213](https://github.com/openclaw/openclaw/issues/183213) [Bug]: Progress indicator collapses assistant responses on v2026.10.7
- [#182711](https://github.com/openclaw/openclaw/issues/182711) Talk (realtime voice) consult turns never reach the Claude CLI backend session: the agent acts on stale context
- [#182649](https://github.com/openclaw/openclaw/issues/182649) Current-session cron completions are invisible to CLI runtimes (claude-cli)
- [#183149](https://github.com/openclaw/openclaw/issues/183149) Update admits candidate with unsatisfied engines.node (warn only), restarts Gateway on unsupported Node and crash-loops (2026.10.5 -> 2026.10.7, install-cli layout)
- [#183090](https://github.com/openclaw/openclaw/issues/183090) [Feature]: Docs page for using OpenLLM (local OpenAI-compatible endpoint) as a custom provider

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 257,060 · **Open issues:** 51,093 · **Last push:** <1h ago

On October 26, 2026, there were no new releases for Hermes Agent, but several important updates were merged, including improvements to startup speed and performance. Notably, merged pull request #144647 ensures that Git version lookups remain efficient by keeping the commit graph fresh, while #144640 allows Hermes to start approximately one second faster by eliminating the git version walk during startup. Additionally, #144625 fixes an issue where startup no longer waits for scratch directory pruning, addressing previous concerns. Among the new issues raised, the bug #144336 highlights a significant flaw where the command `hermes -p <profile> gateway restart` fails to re-run plugin discovery, meaning newly added user platform-plugin overrides are not applied until a full restart occurs.

#### ✅ Merged PRs
- [#144647](https://github.com/NousResearch/hermes-agent/pull/144647) Git version lookups stay fast: Hermes keeps the commit graph fresh and clears stale commit-graph locks
- [#144640](https://github.com/NousResearch/hermes-agent/pull/144640) Hermes starts ~1 s faster from a git checkout: provider plugins and the restart check no longer run the git version walk
- [#144625](https://github.com/NousResearch/hermes-agent/pull/144625) Startup no longer waits for the scratch-dir prune (fixes #143397, salvage #143398)

#### 🐛 New Issues
- [#144336](https://github.com/NousResearch/hermes-agent/issues/144336) [Bug]: `hermes -p <profile> gateway restart` does not re-run plugin discovery, so a newly placed user platform-plugin override is not applied until a full gateway restart `type/bug` `comp/gateway` `P2` `area/profiles` 💬3
- [#144437](https://github.com/NousResearch/hermes-agent/issues/144437) Bare "custom" provider not healed to its named provider on the per-turn (gateway/desktop) path — local model falls through to OpenRouter and 400s `type/bug` `comp/cli` `area/config` `P2` 💬3
- [#144736](https://github.com/NousResearch/hermes-agent/issues/144736) [Bug]: Desktop — bare URL followed by full-width CJK punctuation swallows the punctuation and the following text into the href `type/bug` `P2` `comp/desktop` `desktop/chat` 💬2
- [#144547](https://github.com/NousResearch/hermes-agent/issues/144547) [Bug]: lifecycle guard blocks `hermes gateway restart` but not `hermes update` — the in-tree command that drains, SIGKILLs and re-codes the gateway is unguarded `type/security` `comp/cron` `tool/file` `P3` 💬2
- [#144703](https://github.com/NousResearch/hermes-agent/issues/144703) profile delete: warns "Gateway is running — it will be stopped" for a profile served by the multiplexer, then stops nothing `type/bug` `comp/cli` `P3` `area/profiles` 💬2
- [#144711](https://github.com/NousResearch/hermes-agent/issues/144711) hermes profile list warns that profiles share a push credential, but the push adapter works per profile `type/bug` `comp/cli` `area/auth` `P2` 💬2
- [#144694](https://github.com/NousResearch/hermes-agent/issues/144694) no_agent cron jobs delivering to bot-chat stay `delivery_queued` forever: the settle path only reads the delivery_queue ledger, which is never written for them `type/bug` `comp/cron` `tool/file` `P3` 💬2
- [#144669](https://github.com/NousResearch/hermes-agent/issues/144669) [Bug]: SSH workspace file routes return 500 when the host is down at the first connection `type/bug` `comp/cli` `tool/file` `P2` 💬1
- [#144749](https://github.com/NousResearch/hermes-agent/issues/144749) anthropic_messages wire dies at worker boot after a re-seed drops the anthropic extra; error names 'the Anthropic provider' on non-Anthropic routes `type/bug` `comp/agent` `P2` `area/install-update` 💬1
- [#144729](https://github.com/NousResearch/hermes-agent/issues/144729) [Bug]: Canonical group stuck in stopping after lost approval lease — queued admissions prevent recovery `type/bug` `comp/agent` `P2` `area/sessions` 💬1
- [#144735](https://github.com/NousResearch/hermes-agent/issues/144735) launchd gateway keeps running on the old pm-managed Node after a Node update; staleness check ignores the Hermes-owned PATH entries `type/security` `comp/cli` `P3` `area/install-update` 💬1
- [#144648](https://github.com/NousResearch/hermes-agent/issues/144648) Tracking: Webapp (browser-hosted Desktop, #141864) post-merge follow-ups `type/security` `comp/gateway` `platform/telegram` `backend/local` 💬1
- [#144675](https://github.com/NousResearch/hermes-agent/issues/144675) [Bug]: Bot Mode hide toast points to a nonexistent 'eye button in the Bots header' `type/bug` `tool/file` `P3` `comp/desktop` 💬1
- [#144728](https://github.com/NousResearch/hermes-agent/issues/144728) session.resume of a live, not-yet-persisted session omits running/status (Conduit locks composer after reconnect) `type/bug` `comp/gateway` `P2` `area/sessions` 💬1
- [#144716](https://github.com/NousResearch/hermes-agent/issues/144716) Bot Mode: opening a local lane chat toasts profile_mismatch and PATCH retry loop `type/bug` `P2` `comp/desktop` `area/sessions` 💬1
- [#144668](https://github.com/NousResearch/hermes-agent/issues/144668) [Bug]: hermes webapp --sign-out leaves native apps signed in on the Webapp's listener `type/security` `comp/cli` `area/auth` `P3` 💬1
- [#144673](https://github.com/NousResearch/hermes-agent/issues/144673) [Bug]: A browser-blocked Webapp pop-out shows no error behind the sign-in gate and a late one on a launch-link tab `type/bug` `tool/browser` `P2` `comp/desktop` 💬1
- [#144702](https://github.com/NousResearch/hermes-agent/issues/144702) Desktop: switching gateway connection silently deletes queued prompts (and drafts/pins) of the other connection's sessions — dead-session-prune probes the wrong backend `type/bug` `P2` `comp/desktop` `desktop/sessions` 💬1
- [#144672](https://github.com/NousResearch/hermes-agent/issues/144672) [Bug]: Plain-HTTP Webapp tabs can share one slash-command retry record `type/bug` `P2` `comp/desktop` `comp/dashboard` 💬1
- [#144679](https://github.com/NousResearch/hermes-agent/issues/144679) [Bug]: A Webapp new chat or tab can start in another profile's default folder `type/bug` `P2` `comp/dashboard` `area/sessions` 💬1
- [#144681](https://github.com/NousResearch/hermes-agent/issues/144681) [Bug]: The Webapp treats every installed profile as served by its gateway `type/bug` `P2` `comp/desktop` `area/profiles` 💬1
- [#144666](https://github.com/NousResearch/hermes-agent/issues/144666) [Bug]: Host terminal stays attached when its tab closes behind a full input queue `type/bug` `comp/cli` `backend/local` `P2` 💬1
- [#144670](https://github.com/NousResearch/hermes-agent/issues/144670) [Bug]: Webapp frame naming a profile that is still starting gets "internal error" (AttributeError) `type/bug` `comp/gateway` `P2` `area/sessions` 💬1
- [#144619](https://github.com/NousResearch/hermes-agent/issues/144619) fix(pets): render_mode:auto can never reach native pixels on a gateway-connected client — detect_terminal_graphics() runs in the gateway daemon, which has no TERM `type/bug` `comp/gateway` `tool/file` `P2` 💬1
- [#144691](https://github.com/NousResearch/hermes-agent/issues/144691) [Bug]: Desktop installer (v0.22.5/v0.22.4) fails on Windows at python-deps: No solution found when resolving: setuptools==83.0.0, wheel `type/bug` `P2` `comp/desktop` `area/install-update` 💬1
- [#144754](https://github.com/NousResearch/hermes-agent/issues/144754) Update-restart obligation undischargeable on launchd hosts: one PID recorded as both mapped and stopped_unmapped; fails closed even when restarted.sha == HEAD
- [#144753](https://github.com/NousResearch/hermes-agent/issues/144753) gateway stop --yes crashes with TypeError: ManagedWorker.interrupt() takes 1 positional argument but 2 were given (v0.22.5)
- [#144750](https://github.com/NousResearch/hermes-agent/issues/144750) checkout_lock_held() probe is observable: parallel readers turn each other's probe into 'Gateway draining: update_paused'
- [#144748](https://github.com/NousResearch/hermes-agent/issues/144748) `hermes update` pre-update sibling snapshots adopt a deleted (tombstoned) profile dir — `_sibling_profile_homes` is tombstone-unaware `type/bug` `comp/cli` `tool/file` `P3`
- [#144743](https://github.com/NousResearch/hermes-agent/issues/144743) browser_vault: can't fill saved cards from 1Password or into hosted payment iframes `type/bug` `comp/tools` `tool/browser` `P2`
- [#144734](https://github.com/NousResearch/hermes-agent/issues/144734) Linux: desktop window renders ~94% translucent after update; Window Translucency setting hidden, no way to disable `type/bug` `area/config` `P2` `comp/desktop`
- [#144725](https://github.com/NousResearch/hermes-agent/issues/144725) [Feature]: (cron) Recreate a deleted named Telegram DM topic and redeliver, instead of falling back to the root DM `type/feature` `comp/plugins` `platform/telegram` `P3`
- [#144709](https://github.com/NousResearch/hermes-agent/issues/144709) Gateway: final reply of a queued (busy_input_mode: queue) chain is anchored to the first message of the chain, not to the message it answers `type/bug` `comp/gateway` `platform/matrix` `P2`
- [#144698](https://github.com/NousResearch/hermes-agent/issues/144698) Queued mid-turn user message silently answers a confirmation question asked later `type/security` `comp/agent` `comp/gateway` `P3`
- [#144704](https://github.com/NousResearch/hermes-agent/issues/144704) Webapp fixes (#144648), package 1: files, previews and the browser terminal `type/bug` `tool/browser` `tool/delegate` `P2`
- [#144705](https://github.com/NousResearch/hermes-agent/issues/144705) Webapp fixes (#144648), package 2: profiles, sign-in, plain HTTP and serving `type/bug` `type/security` `comp/gateway` `tool/delegate`
- [#144706](https://github.com/NousResearch/hermes-agent/issues/144706) Windows desktop build fails on v0.22.5: Could not resolve "./windows-remote-lifecycle" `type/bug` `P2` `comp/desktop` `area/install-update`

#### 🔒 Closed Issues
- [#143397](https://github.com/NousResearch/hermes-agent/issues/143397) First system-prompt build runs the scratch prune synchronously and can stall a user turn for tens of seconds (macOS launchd / Windows)
- [#144743](https://github.com/NousResearch/hermes-agent/issues/144743) browser_vault: can't fill saved cards from 1Password or into hosted payment iframes

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 95,494 · **Open issues:** 9,436 · **Last push:** <1h ago

On October 26, 2026, vLLM had a routine maintenance day with no new releases. The merged pull requests brought significant improvements, including enhancements to benchmark capabilities with the addition of steady-state PP support and PCP support to vllm bench forward. Bug fixes addressed various issues, such as preserving FP8 indexer WK pairs across load_weights calls and resetting the store cursor for KV offload requests. Notably, a new issue was raised regarding a drop in DFlash draft acceptance for version 0.32.0 with FULL CUDA graphs, drawing attention from the community.

#### ✅ Merged PRs
- [#63616](https://github.com/vllm-project/vllm/pull/63616) [Benchmark] Add steady-state PP support to bench forward
- [#63538](https://github.com/vllm-project/vllm/pull/63538) [Bugfix][Model] Borrow Gemma4 _get_max_soft_tokens in EmbeddingGemma2 and DiffusionGemma
- [#63537](https://github.com/vllm-project/vllm/pull/63537) [CI] Fix the Qwen2 embed memory leak and HfRunner no-cache logprobs
- [#63613](https://github.com/vllm-project/vllm/pull/63613) [Benchmark] Add PCP support to vllm bench forward
- [#59223](https://github.com/vllm-project/vllm/pull/59223) [Bugfix] Preserve FP8 indexer WK pairs across load_weights calls
- [#63609](https://github.com/vllm-project/vllm/pull/63609) [CI] Disable jobs with unpinned runtime installs
- [#63608](https://github.com/vllm-project/vllm/pull/63608) [CI] Disable jobs with unlocked transitive dependencies
- [#63010](https://github.com/vllm-project/vllm/pull/63010) [Bugfix][KV Offload] Reset the store cursor when a request restarts from token 0
- [#63495](https://github.com/vllm-project/vllm/pull/63495) [Pooling] Reduce Clef metadata overhead
- [#61976](https://github.com/vllm-project/vllm/pull/61976) [Bugfix][Core] Keep scheduling running requests after a priority self-preemption
- [#60513](https://github.com/vllm-project/vllm/pull/60513) [Bugfix][Spec Decode] Keep speculator limits in sync after auto-fit
- [#61390](https://github.com/vllm-project/vllm/pull/61390) [Bugfix][KV Offload] Treat an already-published fs block as stored
- [#63177](https://github.com/vllm-project/vllm/pull/63177) [CI][Benchmarks] Fix attention smoke test backend names and failure exit status
- [#63451](https://github.com/vllm-project/vllm/pull/63451) [Bugfix] Release cached cuBLAS workspaces after daemon warmup
- [#63088](https://github.com/vllm-project/vllm/pull/63088) [Fast Start] Add daemon-to-daemon warmup cache seeding for Preload
- [#63126](https://github.com/vllm-project/vllm/pull/63126) [Bugfix][KV Offload] Catch async lookup iterator errors
- [#55576](https://github.com/vllm-project/vllm/pull/55576) [Bugfix][KV Offload] Enable NIXL telemetry for the OBJ tier
- [#60149](https://github.com/vllm-project/vllm/pull/60149) [Model] Add Dory support
- [#61780](https://github.com/vllm-project/vllm/pull/61780) [Bugfix][KV Offload] Treat failed secondary-tier stores as back-pressure
- [#63552](https://github.com/vllm-project/vllm/pull/63552) [Doc] Kimi-K3: InferenceX AgentX lanes as tuned presets; DCP only in presets
- [#60810](https://github.com/vllm-project/vllm/pull/60810) [Bugfix][KV Offload] Reset a resumed streaming session's block table in OffloadingConnector and SimpleCPUOffloadConnector
- [#60084](https://github.com/vllm-project/vllm/pull/60084) [ROCm][Perf] Restore 32-bit buffer addressing for TRITON_ATTN KV cache views
- [#61019](https://github.com/vllm-project/vllm/pull/61019) [Bugfix][KV Connector] Serve and store OffloadingConnector partial tails with EAGLE/MTP groups
- [#63476](https://github.com/vllm-project/vllm/pull/63476) [Bugfix][MRV2] Report the first failed DBO microbatch
- [#63520](https://github.com/vllm-project/vllm/pull/63520) [Doc][ROCm] Align Kimi-K3 MI355X AgentX recipe with InferenceX #4393
- [#63534](https://github.com/vllm-project/vllm/pull/63534) [Doc] MiniMax-M3: InferenceX AgentX lanes as tuned presets
- [#63372](https://github.com/vllm-project/vllm/pull/63372) [Bugfix][MRV2] Keep routed-expert rows of every DBO microbatch
- [#63266](https://github.com/vllm-project/vllm/pull/63266) [Bugfix][KV Offload] Reject misaligned chunked-local CPU suffix hits
- [#63460](https://github.com/vllm-project/vllm/pull/63460) [Refactor][RL] Share NCCL trainer rendezvous initialization
- [#63457](https://github.com/vllm-project/vllm/pull/63457) [Hardware] Use accelerator APIs in weight transfer
- [#63253](https://github.com/vllm-project/vllm/pull/63253) [Kernel] Update DeepGEMM commit
- [#63496](https://github.com/vllm-project/vllm/pull/63496) [LoRA] Reject incompatible MegaMoE backends during config validation
- [#62698](https://github.com/vllm-project/vllm/pull/62698) [Perf][MRV2] Parallelize staged writes across 1024-element chunks
- [#63259](https://github.com/vllm-project/vllm/pull/63259) [CI] Trigger recipe previews and the recipes.vllm.ai sync on push

#### 🐛 New Issues
- [#63587](https://github.com/vllm-project/vllm/issues/63587) [Bug]: DFlash draft acceptance drops to ~0 on 0.32.0 with FULL CUDA graphs (in-graph draft metadata, #60692) 💬2
- [#63597](https://github.com/vllm-project/vllm/issues/63597) [Bug]: [ROCm][RDNA4] `RDNAHybridW4A16LinearKernel` is still auto-selected for GPTQ and fails with `zp shape mismatch` (follow-up to #51971) `rocm` `quantization` 💬2
- [#63584](https://github.com/vllm-project/vllm/issues/63584) [Bug][Rust Frontend] Tool requests return 500 on every request when the `auto` tool parser cannot resolve a parser for the model `tool-calling` `rust` 💬2
- [#63573](https://github.com/vllm-project/vllm/issues/63573) [Bug][Anthropic API] /v1/messages/count_tokens requires --tool-call-parser when tools are present `tool-calling` 💬2
- [#63615](https://github.com/vllm-project/vllm/issues/63615) allocate_kv_cache raises StopIteration when a PP rank owns none of a KV group's layers 💬1
- [#63602](https://github.com/vllm-project/vllm/issues/63602) [Bug]: P2P KV offload tier does not fail fast on peer faults 💬1
- [#63598](https://github.com/vllm-project/vllm/issues/63598) [Bug]: Qwen3.5/3.6 MoE GPTQ checkpoint with BF16 fused MTP experts: `mtp.layers.0.mlp.experts has no parameter 'w2_weight'` (plain `gptq` path, related to #36954) `rocm` `quantization` 💬1
- [#63593](https://github.com/vllm-project/vllm/issues/63593) [Bug]: MTP speculative decoding with forced-reject diverges from target-only with confident margins on Qwen3.8-27B (GDN hybrid) at K>=5, n>=8, L>=192 `speculative-decoding` 💬1
- [#63570](https://github.com/vllm-project/vllm/issues/63570) [Feature] KV events: snapshot dump handshake for lossless cold-start recovery of replay consumers 💬1
- [#63549](https://github.com/vllm-project/vllm/issues/63549) [Bug]: Async scheduling + preemption crashes Model Runner V1 with KeyError all_token_ids[req_id] in _update_states 💬1
- [#63626](https://github.com/vllm-project/vllm/issues/63626) [RFC]: Lossless 12-bit storage for BF16 dense weights to speed up memory-bound decode `quantization`
- [#63624](https://github.com/vllm-project/vllm/issues/63624) [RFC]: Bring vLLM's development cost back to linear: a small core with owned, independently tested components `quantization`
- [#63621](https://github.com/vllm-project/vllm/issues/63621) [Bug][XPU][KV Offload] The `/dev/shm` offload region is `usm::alloc::unknown` after `xpu_host_register`, so every CPU→GPU load is staged `intel-gpu`
- [#63620](https://github.com/vllm-project/vllm/issues/63620) [Bug][Hybrid models] Padding rows of graph-replayed decode batches point recurrent state at `NULL_BLOCK_ID`, which aliases the shared null page `intel-gpu`
- [#63605](https://github.com/vllm-project/vllm/issues/63605) [Feature]: NVFP4 KV cache with attention sinks on SM12x (FlashInfer) — is anyone working on this?
- [#63595](https://github.com/vllm-project/vllm/issues/63595) [Feature]: Publish macOS wheels to PyPI. `feature request`
- [#63591](https://github.com/vllm-project/vllm/issues/63591) [Bug]: Logprobs include the EOS token that the returned text omits (chat and completions)
- [#63581](https://github.com/vllm-project/vllm/issues/63581) [Bug]: Streamed tool_call `index` skips calls the parser rejects; the OpenAI SDK stream helper raises IndexError (GLM-4.7, MiniMax-M2, Kimi-K2) `tool-calling` `kimi` `glm` `minimax`
- [#63565](https://github.com/vllm-project/vllm/issues/63565) [Bug]: [KV Offload] Hybrid models: a revisit that diverges before the stored Mamba state never reuses the offloaded prefix `intel-gpu`
- [#63563](https://github.com/vllm-project/vllm/issues/63563) [Bug]: [MRV2] Prompt-logprobs transient memory is not covered by profile_run `intel-gpu`
- [#63536](https://github.com/vllm-project/vllm/issues/63536) [Bug]: [Usage]: RTX PRO 5000 (SM120) deadlocks at 3-4W during vLLM 0.32.0 startup with 70B NVFP4 model, even with --enforce-eager `bug` `quantization`

#### 🔒 Closed Issues
- [#46493](https://github.com/vllm-project/vllm/issues/46493) [Bug]: different behavior between 0.22/0.23 about --tool-call-parser qwen3_coder
- [#44911](https://github.com/vllm-project/vllm/issues/44911) [Bug]:mistralai/Devstral-Small-2-24B-Instruct-2512 no longer working in 0.22.1
- [#46596](https://github.com/vllm-project/vllm/issues/46596) [ROCm][Perf] ROCM_ATTN selected over ROCM_AITER_FA for MHA decode despite VLLM_ROCM_USE_AITER=1 (CDNA)
- [#46721](https://github.com/vllm-project/vllm/issues/46721) [Bug]: Out of Resource / block size error Kimi K2.7 on SM120 Blackwell with kv_cache_dtype fp8
- [#46043](https://github.com/vllm-project/vllm/issues/46043) [New Model]: tencent/Hy-MT2-30B-A3B
- [#47174](https://github.com/vllm-project/vllm/issues/47174) [Usage]: DeepSeek-V4: --kv-cache-dtype auto fails silently on Blackwell SM120 — should auto-resolve to fp8_ds_mla
- [#45333](https://github.com/vllm-project/vllm/issues/45333) [Feature][ModelOpt]: Support NVFP4_AWQ checkpoints with native NVFP4 linear kernels
- [#45904](https://github.com/vllm-project/vllm/issues/45904) [Bug]: Qwen3-VL shows inconsistent accuracy between enabled and disabled graph modes on VLLM0.20.2
- [#46830](https://github.com/vllm-project/vllm/issues/46830) MTP + MLA: slot_mapping assert fails with list[dict] from ubatch slicing
- [#46497](https://github.com/vllm-project/vllm/issues/46497) [Bug]: "No model archiectures are specified" when running mistral small 4
- [#46502](https://github.com/vllm-project/vllm/issues/46502) [Bug]: persistent KV Cache memory not released after benchmark completion
- [#46591](https://github.com/vllm-project/vllm/issues/46591) [Bug]: test_tp_language_generation[Llama-3.2-1B-...parallel_setup{9,10}] times out (480s) on Hopper — server actually starts but exceeds the test deadline
- [#46787](https://github.com/vllm-project/vllm/issues/46787) [Bug]: MLA indexer block_table shape mismatch when max_model_len is auto-reduced after InputBatch creation
- [#45353](https://github.com/vllm-project/vllm/issues/45353) [Bug]: vllm 0.22.1 metric monitor no display
- [#46693](https://github.com/vllm-project/vllm/issues/46693) [Bug]: Qwen3.5 CPU backend crashes in mamba_utils.batch_memcpy when Triton is unavailable
- [#46738](https://github.com/vllm-project/vllm/issues/46738) [RFC]: Compact candidate-set renormalization for native top-k/top-p sampling
- [#63570](https://github.com/vllm-project/vllm/issues/63570) [Feature] KV events: snapshot dump handshake for lossless cold-start recovery of replay consumers
- [#62096](https://github.com/vllm-project/vllm/issues/62096) [Feature]: Default to NextTokenPrediction Read strategy for text generation models for /v1/systemone and /v1/decisions
- [#61775](https://github.com/vllm-project/vllm/issues/61775) [Bug]: KV offload back-pressure ignores failed secondary-tier stores, so a full filesystem tier keeps receiving every cascade

### SGLang (`sgl-project/sglang`)

**Stars:** 38,158 · **Open issues:** 6,186 · **Last push:** <1h ago

On October 26, 2026, there were no new releases for SGLang, but several important pull requests were merged that enhanced various aspects of the project. Notably, feature additions included the Beam model and runtime support, advancements in FP32 warp split-K GEMM for NVIDIA's MoE front projection, and the introduction of MSA-v1 sparse backend. Key fixes addressed issues with DeepSeek-V4 eager backups and KV checksum optimizations in the disaggregation functionality. Among the new issues raised, a critical bug was reported regarding the DSpark draft query width being incorrect when `sample_from_anchor=False`, drawing attention to potential alignment issues in upcoming developments.

#### ✅ Merged PRs
- [#41701](https://github.com/sgl-project/sglang/pull/41701) [Fix] [AMD] mamba: Keep a chunked prefill cut on the mamba chunk grid so DCP can donate checkpoints
- [#46464](https://github.com/sgl-project/sglang/pull/46464) [Perf] [NVIDIA] kimi-k3: FP32 warp split-K GEMM for the MoE front projection on SM107
- [#45256](https://github.com/sgl-project/sglang/pull/45256) [Feat] beam: Add Beam model, runtime support and checkpoints (4/7)
- [#46463](https://github.com/sgl-project/sglang/pull/46463) [Fix] [NVIDIA] dist: Detect MNNVL fabric devices by NVML fabric state, not only by GB200/GB300 name
- [#46465](https://github.com/sgl-project/sglang/pull/46465) [Perf] [NVIDIA] kda: Narrower V tiles for the KDA spec-verify recurrence on SM107
- [#46359](https://github.com/sgl-project/sglang/pull/46359) [Feat] dcp: Replicate a block-FP8 q_b_proj under --dcp-replicate-q-proj
- [#46423](https://github.com/sgl-project/sglang/pull/46423) [Feat] disaggregation: Verify the KV checksum under a decode-side radix cache
- [#46441](https://github.com/sgl-project/sglang/pull/46441) [Fix] mlx: Accept draft_parallel_layout in the stub's alloc_memory_pool
- [#46442](https://github.com/sgl-project/sglang/pull/46442) [Fix] unified-memory: Name the draft KV dtype flag in the fused-region mismatch error
- [#46243](https://github.com/sgl-project/sglang/pull/46243) [Feat] rust: Render DeepSeek-V4/V4.1 prompts with deepseek-recipe in sglang-processor and sgl-router
- [#46085](https://github.com/sgl-project/sglang/pull/46085) [CI] [AMD] pr-test: Move large-model and perf tests from AMD PR CI to nightly
- [#43727](https://github.com/sgl-project/sglang/pull/43727) [Feat] hicache: Export host Mamba pool occupancy next to host KV
- [#45787](https://github.com/sgl-project/sglang/pull/45787) [Feat] paged-experts: AWQ, compressed-tensors, MXFP4, NVFP4, W8A8 and block-INT8 experts
- [#45104](https://github.com/sgl-project/sglang/pull/45104) [Fix] hisparse: Copy DeepSeek-V4 eager backups token by token
- [#46388](https://github.com/sgl-project/sglang/pull/46388) [Refactor] linker: Use dedicated configuration throughout linker setup
- [#46154](https://github.com/sgl-project/sglang/pull/46154) [Fix] diffusion/serving: Reclaim abandoned shared-memory replies
- [#46173](https://github.com/sgl-project/sglang/pull/46173) [Perf] diffusion: Run Cosmos3's multi-GPU VAE decode on the lossless fast path
- [#46141](https://github.com/sgl-project/sglang/pull/46141) [Feat] attention: Add the MSA-v1 sparse backend and NVFP4 KV pool
- [#46140](https://github.com/sgl-project/sglang/pull/46140) [Feat] quantization: Add the MiniMax-M3.1 NVFP4 MoE method
- [#46124](https://github.com/sgl-project/sglang/pull/46124) [Feat] diffusion: add Hy-Nomas offline and realtime support
- [#46031](https://github.com/sgl-project/sglang/pull/46031) [Chore] processor: use typed api output
- [#46365](https://github.com/sgl-project/sglang/pull/46365) [Fix] deepseek-v4: Complete the MoE output locally when the transport declares no sum group
- [#39729](https://github.com/sgl-project/sglang/pull/39729) [Fix] disaggregation: Clean-up and optimize the KV checksum implementation
- [#46139](https://github.com/sgl-project/sglang/pull/46139) [Feat] msa: Add MSA-v1 decode and NVFP4 KV cache kernels
- [#46138](https://github.com/sgl-project/sglang/pull/46138) [Fix] dp-attention: Align prefill graph buckets and decode padding across DP ranks
- [#45733](https://github.com/sgl-project/sglang/pull/45733) [Perf] diffusion/preprocess: Extend exact GPU input processing across pipelines
- [#46111](https://github.com/sgl-project/sglang/pull/46111) [Perf] diffusion: Vectorize the LTX-2 Q/K RMSNorm + split-RoPE kernel
- [#46120](https://github.com/sgl-project/sglang/pull/46120) [Fix] diffusion/disaggregation: Isolate malformed request and result messages
- [#45752](https://github.com/sgl-project/sglang/pull/45752) [Perf] QSA: Optimize the prefill indexer gather
- [#45257](https://github.com/sgl-project/sglang/pull/45257) [Feat] parser: Add Beam reasoning, tool calls and response templates (5/7)
- [#46179](https://github.com/sgl-project/sglang/pull/46179) [Perf] dsa: Overlap CP KV gather with indexer computation
- [#46330](https://github.com/sgl-project/sglang/pull/46330) [Feat] spec: Support CUDA attention DP for DFlash and DFlash2
- [#46290](https://github.com/sgl-project/sglang/pull/46290) [Refactor] spec: Resolve draft parallel placement from model declarations
- [#46137](https://github.com/sgl-project/sglang/pull/46137) [Feat] layer-boundary: Fuse TP all-reduce, residual add and RMSNorm on the push plane
- [#46135](https://github.com/sgl-project/sglang/pull/46135) [Perf] minimax-sparse: Speed up MiniMax-M3 sparse attention on Hopper
- [#46260](https://github.com/sgl-project/sglang/pull/46260) [Fix] sgl-router: Bump tokio for RUSTSEC-2026-0386
- [#40595](https://github.com/sgl-project/sglang/pull/40595) [Feat] unified-cache: Support out-of-tree external linkers
- [#44020](https://github.com/sgl-project/sglang/pull/44020) [Fix] chat-template: Pass return_dict=False to apply_chat_template(tokenize=True) for transformers 5
- [#45076](https://github.com/sgl-project/sglang/pull/45076) [Fix] hicache: Count the EAGLE bigram boundary token in PD decode restores
- [#45110](https://github.com/sgl-project/sglang/pull/45110) [Fix] kimi-k3: Avoid vision attention child-name collisions
- [#46044](https://github.com/sgl-project/sglang/pull/46044) [Fix] diffusion/zimage: Stop serving a previous request's RoPE tables
- [#46025](https://github.com/sgl-project/sglang/pull/46025) [Fix] diffusion: Fail closed after local worker loss or multi-rank OOM
- [#46047](https://github.com/sgl-project/sglang/pull/46047) [Perf] diffusion: Remove per-step host syncs and uploads in video models
- [#46156](https://github.com/sgl-project/sglang/pull/46156) [Fix] diffusion/openai: Bound job lists and complete cursor pagination
- [#46264](https://github.com/sgl-project/sglang/pull/46264) [Refactor] diffusion/linear: Share segmented row-parallel weight loading

#### 🐛 New Issues
- [#46476](https://github.com/sgl-project/sglang/issues/46476) [Bug] DSpark draft query width is incorrect on FA3/FA4 when `sample_from_anchor=False` 💬4
- [#46455](https://github.com/sgl-project/sglang/issues/46455) [PD] Per-backend transport interface
- [#46462](https://github.com/sgl-project/sglang/issues/46462) AMD Development Roadmap (2026 Q4)
- [#46461](https://github.com/sgl-project/sglang/issues/46461) [Bug] HunyuanImage-3 generates a noise texture on CUDA (shared MLP reads in-place FusedMoE output)
- [#46447](https://github.com/sgl-project/sglang/issues/46447) [Bug] Kimi-K3 AR fusion: prefill rows exceed symmetric-buffer capacity on 2-node GB300 (TP8/attn-DP2/DCP4)
- [#46446](https://github.com/sgl-project/sglang/issues/46446) [Bug] Qwen3.5-9B deterministic greedy output differs with mixed-chunk scheduling
- [#46444](https://github.com/sgl-project/sglang/issues/46444) [Bug] diffusion: Rollout conditioning misalignment and scalar weight checksum failure
- [#46429](https://github.com/sgl-project/sglang/issues/46429) [Bug] FLUX.3 Image: TP/SP ranks pick packed or sequential CFG independently and can hang
- [#46418](https://github.com/sgl-project/sglang/issues/46418) [Bug] JIT link fails with the pip CUDA toolkit: -L$CUDA_HOME/lib64 -lcudart doesn't match its lib/libcudart.so.13 layout
- [#46390](https://github.com/sgl-project/sglang/issues/46390) [Bug] multimodal_gen: cross-node pure-Ulysses H3 serve (1 GPU/node x 4 nodes) freezes at the first distributed generation - /health never binds with --warmup-mode off, 0% GPU on all ranks, zero errors
- [#46348](https://github.com/sgl-project/sglang/issues/46348) [Bug] dsv41: deepseek-recipe rendering differs from the checkpoint's encoding.py (tool namespaces, current-turn reasoning before tool results, action)

#### 🔒 Closed Issues
- [#25371](https://github.com/sgl-project/sglang/issues/25371) [RFC][Refactor] `mem_cache` pool / allocator restructure
- [#36475](https://github.com/sgl-project/sglang/issues/36475) [Bug] Streaming session client disconnect can silently drop session context and crash the scheduler
- [#33268](https://github.com/sgl-project/sglang/issues/33268) [Bug] HiCache storage keys omit kv_cache_dtype — silent cross-run cache collisions
- [#36528](https://github.com/sgl-project/sglang/issues/36528) [Bug] EAGLE3 without `--speculative-draft-model-path` loads the target as draft and crashes on normal Qwen/Llama targets
- [#36500](https://github.com/sgl-project/sglang/issues/36500) [Bug] [NGRAM] Removing a corpus during asynchronous loading returns success without cancelling the load
- [#36207](https://github.com/sgl-project/sglang/issues/36207) [Bug] MLA KV writers can overwrite reserved padding slot 0
- [#36447](https://github.com/sgl-project/sglang/issues/36447) [Feature] Support GLM-5.2 MXFP4 with DSA/NSA and Mega-MoE
- [#34895](https://github.com/sgl-project/sglang/issues/34895) [Bug] compressed-tensors FP8 lm_head weight_scale silently dropped → degenerate repetition with unsloth/Qwen3.8-27B-NVFP4
- [#36536](https://github.com/sgl-project/sglang/issues/36536) [Bug] `--enable-multi-layer-eagle` crashes on `LlamaForCausalLM` during startup
- [#36533](https://github.com/sgl-project/sglang/issues/36533) [Bug] `--enable-memory-saver` crashes scheduler startup on CUDA 13 pip env: preload hook cannot resolve `libcudart.so.13`
- [#36514](https://github.com/sgl-project/sglang/issues/36514) [Feature] GPU offload target for Qwen3.8-Flash-Next N-gram / PLE embeddings
- [#36481](https://github.com/sgl-project/sglang/issues/36481) [Bug] SGLANG_RAGGED_VERIFY_MODE=compact crashes decode CUDA-graph capture on Qwen3.5 hybrid linear attention: IMA in extend_attention_fwd (triton_backend)
- [#36460](https://github.com/sgl-project/sglang/issues/36460) [Feature] Support expert-wise FP8/W4A16_AWQ mixed precision for ModelOpt MoE checkpoints
- [#36431](https://github.com/sgl-project/sglang/issues/36431) [RFC] Resumable raw token stream for /v1/chat/completions
- [#36427](https://github.com/sgl-project/sglang/issues/36427) [Bug] Several ambiguous points in the installation documentation, please check
- [#46316](https://github.com/sgl-project/sglang/issues/46316) [Bug] DeepSeek-V4-Flash NVFP4 with flashinfer_megamoe + dp-attention fails in decode CUDA graph capture: transport finalize owes an undeclared sum group

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 132,354 · **Open issues:** 2,592 · **Last push:** <1h ago

Today, llama.cpp released several new versions, including b11889, which modernizes the CUDA code by replacing variable length arrays with `std::string`, and b11884, which fixes CPU and memory exhaustion issues caused by the dry sequence breaker. Notable merged features include adding a recursive depth limit in grammar to prevent stack overflows and improvements in 4D tensor quantization with llama-quant. There were also enhancements in memory management and tools for rejecting truncated GGUF tensor data. On the issue front, a significant problem was reported regarding llama-server, which accumulates excessive shared memory leading to out-of-memory (OOM) issues under specific configurations.

#### 🚀 New Releases
- [b11889](https://github.com/ggml-org/llama.cpp/releases/tag/b11889) b11889
- [b11888](https://github.com/ggml-org/llama.cpp/releases/tag/b11888) b11888
- [b11887](https://github.com/ggml-org/llama.cpp/releases/tag/b11887) b11887
- [b11886](https://github.com/ggml-org/llama.cpp/releases/tag/b11886) b11886
- [b11884](https://github.com/ggml-org/llama.cpp/releases/tag/b11884) b11884
- [b11883](https://github.com/ggml-org/llama.cpp/releases/tag/b11883) b11883
- [b11882](https://github.com/ggml-org/llama.cpp/releases/tag/b11882) b11882
- [b11881](https://github.com/ggml-org/llama.cpp/releases/tag/b11881) b11881
- [b11880](https://github.com/ggml-org/llama.cpp/releases/tag/b11880) b11880
- [b11879](https://github.com/ggml-org/llama.cpp/releases/tag/b11879) b11879

#### ✅ Merged PRs
- [#30463](https://github.com/ggml-org/llama.cpp/pull/30463) cuda : use std::string instead of VLA for archName
- [#31153](https://github.com/ggml-org/llama.cpp/pull/31153) common, grammar: add recursive depth limit, make it a requirement
- [#31157](https://github.com/ggml-org/llama.cpp/pull/31157) tests : adjust default threads for test-llama-context
- [#31086](https://github.com/ggml-org/llama.cpp/pull/31086) model: DSV4.1 flash
- [#30977](https://github.com/ggml-org/llama.cpp/pull/30977) ci : re-enable test-llama-context with FA on for WebGPU
- [#30820](https://github.com/ggml-org/llama.cpp/pull/30820) llama-quant : fix 4D tensor quantization using ggml_nrows() and name-based expert detection
- [#31028](https://github.com/ggml-org/llama.cpp/pull/31028) qwen: merge tensors on convert
- [#31035](https://github.com/ggml-org/llama.cpp/pull/31035) fix exhausting CPU and MEM caused by dry sequence breaker
- [#29755](https://github.com/ggml-org/llama.cpp/pull/29755) grammar: bound recursion depth to prevent parser stack overflow (#29495)
- [#31087](https://github.com/ggml-org/llama.cpp/pull/31087) llama : respect no_alloc in all memory caches
- [#31044](https://github.com/ggml-org/llama.cpp/pull/31044) tools : reject truncated GGUF tensor data in merge
- [#29948](https://github.com/ggml-org/llama.cpp/pull/29948) CUDA: fuse FFN gate/up matmuls and GLU in MMQ with interleaved gate/up rows
- [#31025](https://github.com/ggml-org/llama.cpp/pull/31025) ggml-cuda: fuse qwen MRoPE + set-rows
- [#29920](https://github.com/ggml-org/llama.cpp/pull/29920) vulkan: Add a larger tile size for conv3d (coopmat2 only)
- [#30106](https://github.com/ggml-org/llama.cpp/pull/30106) vulkan : one warp tile per subgroup in the small matmul tiles
- [#31071](https://github.com/ggml-org/llama.cpp/pull/31071) hexagon: generic dims collapse/reshape for unary, binary and matmul ops
- [#31026](https://github.com/ggml-org/llama.cpp/pull/31026) opencl: add topk and lightning indexer
- [#30999](https://github.com/ggml-org/llama.cpp/pull/30999) opencl: add initial q2_k support
- [#31136](https://github.com/ggml-org/llama.cpp/pull/31136) ci : update CPU job assignments
- [#30242](https://github.com/ggml-org/llama.cpp/pull/30242) chat : reject JSON nested more than 128 levels before walking it

#### 🐛 New Issues
- [#31164](https://github.com/ggml-org/llama.cpp/issues/31164) Misc. bug: Images don't get re-tagged properly `bug-unconfirmed`
- [#31163](https://github.com/ggml-org/llama.cpp/issues/31163) Eval bug: Vulkan: count_experts.comp zero_skipped_rows() loops over every id in every thread
- [#31160](https://github.com/ggml-org/llama.cpp/issues/31160) Eval bug: Corrupted output when mixing draft-mtp and ngram-mod `bug-unconfirmed`
- [#31158](https://github.com/ggml-org/llama.cpp/issues/31158) Misc. bug: llama_get_logits_ith() reorders outputs in place, so concurrent reads race (recurrent/hybrid models)
- [#31155](https://github.com/ggml-org/llama.cpp/issues/31155) Eval bug: mtmd-cli reuses a stale mtmd batch after /clear: previous image's embeddings returned, or GGML_ASSERT(offset <= batch->output_embd.size())
- [#31150](https://github.com/ggml-org/llama.cpp/issues/31150) Misc. bug: /v1/systemone in router mode — concurrent requests kill the decision model instance (exit 1, no error line)
- [#31140](https://github.com/ggml-org/llama.cpp/issues/31140) Misc. bug: SYCL CPY to q4_1/q5_1/q8_0 doesn't match CPU reference `bug-unconfirmed`
- [#31131](https://github.com/ggml-org/llama.cpp/issues/31131) Eval bug: mtmd: server crash: `GGML_ASSERT` when encoding large images (`--image-max-tokens` not respected) `bug-unconfirmed`
- [#31129](https://github.com/ggml-org/llama.cpp/issues/31129) Eval bug: OpenVINO backend (GPU, Windows): process memory grows ~35 MB per request and never levels off. Reproduces on b11869 `bug-unconfirmed`
- [#31127](https://github.com/ggml-org/llama.cpp/issues/31127) [OOM] llama-server (2xV100 tensor-parallel, GGML_CUDA_NCCL) accumulates ~93GB shmem-rss; kernel OOM-kill under numactl membind

#### 🔒 Closed Issues
- [#27953](https://github.com/ggml-org/llama.cpp/issues/27953) Compile bug: qwen next flash cumpute buffer size issues
- [#28659](https://github.com/ggml-org/llama.cpp/issues/28659) Update vulkan CI runners to NVIDIA r615 driver
- [#27112](https://github.com/ggml-org/llama.cpp/issues/27112) Proposal: public API for hidden-state extraction (residual stream) + tools
- [#27835](https://github.com/ggml-org/llama.cpp/issues/27835) Eval bug: llama-server crashes with CUDA under concurrent connections
- [#27911](https://github.com/ggml-org/llama.cpp/issues/27911) CUDA error "invalid configuration argument" in ggml_cuda_op_rms_norm_fused under concurrent batching (qwen4_exp / Qwen3.8-Flash-Next, sm_70, np=10)
- [#27155](https://github.com/ggml-org/llama.cpp/issues/27155) Eval bug: VRAM leak with DeepSeek V4 Flash + DSpark: Draft KV cache grows ~10MB per PP+TG cycle until OOM
- [#27784](https://github.com/ggml-org/llama.cpp/issues/27784) Metal: --embeddings with pooling still builds and computes the LM head, producing a multi-GiB discarded tensor and returning all-NaN embeddings on long inputs
- [#28614](https://github.com/ggml-org/llama.cpp/issues/28614) Eval bug: DSpark + LFM2.5-8B-A1B (MoE) crashes at graph_reserve — dense LFM2.5 models unaffected
- [#26207](https://github.com/ggml-org/llama.cpp/issues/26207) server: prompt cache is reused across requests with different per-request `lora` — output silently contaminated by the previous adapter
- [#28637](https://github.com/ggml-org/llama.cpp/issues/28637) Vulkan: small matmul warptile mis-tiles at subgroup size 16, giving non-deterministic wrong results
- [#28009](https://github.com/ggml-org/llama.cpp/issues/28009) Misc. bug: Windows backend load fails with error 126 when dependency DLLs are next to the backend DLL
- [#28624](https://github.com/ggml-org/llama.cpp/issues/28624) Eval bug: 4.20.760.357 E CUDA error: an illegal memory access was encountered t0 D:\a\llama.cpp\llama.cpp\ggml\src\ggml-cuda\ggml-cuda.cu:1e8: cuDA error
- [#28652](https://github.com/ggml-org/llama.cpp/issues/28652) Misc. bug: CUDA: alternating variants sharing one graph cache key cause warmup/replay interference
- [#28656](https://github.com/ggml-org/llama.cpp/issues/28656) server: multimodal /embeddings are not deterministic within a batch under the default unified KV cache (CUDA builds)
- [#28665](https://github.com/ggml-org/llama.cpp/issues/28665) Misc. bug:
- [#28674](https://github.com/ggml-org/llama.cpp/issues/28674) Misc. bug: server: --lora-init-without-apply leaves adapters at scale 1.0, and per-request "lora": [] does not zero unlisted adapters
- [#30833](https://github.com/ggml-org/llama.cpp/issues/30833) Misc. bug: llama-server: Unbounded dry_sequence_breakers causes CPU and memory exhaustion
- [#29916](https://github.com/ggml-org/llama.cpp/issues/29916) llama-quantize: GGML_ASSERT(size mismatch) when quantizing mmproj files containing 3D conv tensors (gemma4v audio conv1d)
- [#29495](https://github.com/ggml-org/llama.cpp/issues/29495) bug: the GBNF grammar-text parser recurses without a depth limit, can cause stack-overflows and crash server (SIGSEGV)

### Ollama (`ollama/ollama`)

**Stars:** 184,757 · **Open issues:** 4,429 · **Last push:** 4h ago

On October 26, 2026, Ollama saw routine maintenance with no new releases or merged pull requests reported. However, the community has been active with several new issues, the most notable being issue #19276, where users reported that Ollama fails to work even after a fresh installation, attracting significant discussion with 12 comments. Additionally, issue #19281 raised interest as it pertains to the Claude Code with cloud model, and performance concerns regarding Qwen3.5 were highlighted in issue #19282. Other issues include a variety of performance and compatibility challenges, particularly with ROCm and macOS Metal.

#### 🐛 New Issues
- [#19276](https://github.com/ollama/ollama/issues/19276) Ollama does not work even after a fresh install `bug` 💬12
- [#19277](https://github.com/ollama/ollama/issues/19277) HuggingFace to Ollama `feature request` 💬4
- [#19281](https://github.com/ollama/ollama/issues/19281) Claude Code with cloud model `bug` 💬3
- [#19282](https://github.com/ollama/ollama/issues/19282) Performance guidance: Qwen3.5 4B GGUF prompt processing on 16GB M4 (100% GPU, llama.cpp) 💬2
- [#19290](https://github.com/ollama/ollama/issues/19290) ROCm on Radeon 890M (gfx1150, iGPU): garbage output and "Memory access fault by GPU" on 0.40.6 and 0.40.7; 0.33.3 works
- [#19289](https://github.com/ollama/ollama/issues/19289) /v1/completions applies the chat template to raw prompts
- [#19279](https://github.com/ollama/ollama/issues/19279) Free-memory refresh (3 s deadline) times out on a 6-GPU host around model loads → stale VRAM → spurious eviction (incl. a CPU-only model)
- [#19278](https://github.com/ollama/ollama/issues/19278) macOS Metal crashes `bug`
- [#19273](https://github.com/ollama/ollama/issues/19273) gemma4: a tool call with an unclosed list is dropped silently (repair adds a missing `}` but never a `]`)

#### 🔒 Closed Issues
- [#19289](https://github.com/ollama/ollama/issues/19289) /v1/completions applies the chat template to raw prompts

### LiteLLM (`BerriAI/litellm`)

**Stars:** 62,029 · **Open issues:** 5,702 · **Last push:** <1h ago

Today, LiteLLM released version v1.106.4, which included 3 merged pull requests, resulting in two fixes, predominantly resolving proxy-related issues. The earlier versions, v1.105.5, v1.104.7, and v1.103.9, also saw minor updates with similar fixes and improvements but no significant actions required for users to upgrade. Notably, the development team implemented a more efficient approach to manage base images and runtime files in docker components across several versions. However, a critical new issue emerged regarding the proxy startup, which is reportedly experiencing loops and out-of-memory (OOM) errors during the Daylight Saving Time fall-back hour.

#### 🚀 New Releases
- [v1.106.4](https://github.com/BerriAI/litellm/releases/tag/v1.106.4) v1.106.4
- [v1.105.5](https://github.com/BerriAI/litellm/releases/tag/v1.105.5) v1.105.5
- [v1.104.7](https://github.com/BerriAI/litellm/releases/tag/v1.104.7) v1.104.7
- [v1.103.9](https://github.com/BerriAI/litellm/releases/tag/v1.103.9) v1.103.9

#### ✅ Merged PRs
- [#48300](https://github.com/BerriAI/litellm/pull/48300) build(lens): move to the newer wolfi-base and webpki-roots 1.0.11
- [#48294](https://github.com/BerriAI/litellm/pull/48294) chore(release): backport #46711 to stable/1.106.x and cut 1.106.4
- [#48283](https://github.com/BerriAI/litellm/pull/48283) build(docker): refresh base images and ship only runtime files in component images (1.106.x)
- [#48292](https://github.com/BerriAI/litellm/pull/48292) chore(release): backport #46711 to stable/1.105.x and cut 1.105.5
- [#48282](https://github.com/BerriAI/litellm/pull/48282) build(docker): refresh base images and ship only runtime files in component images (1.105.x)
- [#48293](https://github.com/BerriAI/litellm/pull/48293) chore(release): backport #46711 to stable/1.104.x and cut 1.104.7
- [#48280](https://github.com/BerriAI/litellm/pull/48280) build(docker): refresh base images and ship only runtime files in component images (1.104.x)
- [#48281](https://github.com/BerriAI/litellm/pull/48281) build(docker): refresh base images and ship only runtime files in component images, cut 1.103.9 (1.103.x)
- [#48279](https://github.com/BerriAI/litellm/pull/48279) build(docker): refresh base images and ship only runtime files in component images
- [#48289](https://github.com/BerriAI/litellm/pull/48289) revert(proxy): revert large-integer request parsing
- [#48213](https://github.com/BerriAI/litellm/pull/48213) fix(proxy): keep JSON integers outside the 64-bit range exact when parsing request bodies
- [#48270](https://github.com/BerriAI/litellm/pull/48270) feat(mistral): add zai-glm-5-3-flash to the cost map
- [#38736](https://github.com/BerriAI/litellm/pull/38736) fix(deepseek): pass reasoning_effort through to the API

#### 🐛 New Issues
- [#48286](https://github.com/BerriAI/litellm/issues/48286) [Bug]: Proxy startup loops forever and gets OOM-killed during the DST fall-back hour (scheduled_job_stagger) 💬3
- [#48304](https://github.com/BerriAI/litellm/issues/48304) auth failure handler 500s on any non-object JSON body (AttributeError: 'list' object has no attribute 'get') 💬2
- [#48299](https://github.com/BerriAI/litellm/issues/48299) [Bug]: Docker Node is below the Oct 21 2026 security releases
- [#48313](https://github.com/BerriAI/litellm/issues/48313) [Bug]: Dashboard search fails looking up the internal litellm-dashboard team
- [#48285](https://github.com/BerriAI/litellm/issues/48285) [Bug]: Proxy scheduler (timezone=None) spins at 100% CPU with unbounded memory growth during the DST fall-back hour

#### 🔒 Closed Issues
- [#13901](https://github.com/BerriAI/litellm/issues/13901) [Bug]: Langfuse HTTP headers never reach Langfuse API
- [#27439](https://github.com/BerriAI/litellm/issues/27439) DeepSeek V4 reasoning_effort ("high"/"max") not passed through to API — stripped to `thinking: {"type": "enabled"}`
- [#29367](https://github.com/BerriAI/litellm/issues/29367) Feature Request: Add FunASR as audio/transcriptions provider
- [#33893](https://github.com/BerriAI/litellm/issues/33893) [Feature]: add support GPT-5.6 on GitHub Copilot
- [#48226](https://github.com/BerriAI/litellm/issues/48226) [Bug]: completion_cost() raises ModelNotMappedError for groq/openai/gpt-oss-* responses, even when model="groq/..." is passed
- [#33777](https://github.com/BerriAI/litellm/issues/33777) error
- [#34005](https://github.com/BerriAI/litellm/issues/34005) [Bug]: Editing model json cant remove keys on UI
- [#25149](https://github.com/BerriAI/litellm/issues/25149) self signed ssl does not work on /v1/completions
- [#33919](https://github.com/BerriAI/litellm/issues/33919) supports_web_search flag missing across the current Claude model family, not just claude-sonnet-5
- [#33925](https://github.com/BerriAI/litellm/issues/33925) [Feature]: support for v1/responses endpoint via create_batch
- [#33927](https://github.com/BerriAI/litellm/issues/33927) к
- [#33932](https://github.com/BerriAI/litellm/issues/33932) [Bug]: Playground sends the message when Enter confirms an IME candidate (CJK input methods)
- [#33944](https://github.com/BerriAI/litellm/issues/33944) [Bug]: per-request metadata.guardrails override silently disables every guardrail not explicitly named, including default_on ones
- [#33955](https://github.com/BerriAI/litellm/issues/33955) [Bug]: CheckBatchCost fully buffers batch output (incl. base64 images) in memory, unlocked across workers — OOM on image-generation batches
- [#33959](https://github.com/BerriAI/litellm/issues/33959) Feature: export LITELLM_DETAILED_TIMING pre/post-processing timings as Prometheus metrics
- [#34027](https://github.com/BerriAI/litellm/issues/34027) [Bug]: Fallbacks are not configurable at the team level since the internal name is not visible
- [#34028](https://github.com/BerriAI/litellm/issues/34028) Permission-scope test — expected to fail

### Unsloth (`unslothai/unsloth`)

**Stars:** 78,561 · **Open issues:** 343 · **Last push:** <1h ago

On October 26, 2026, Unsloth did not release any new versions but saw significant activity with multiple merged pull requests that enhance both the Studio and backend capabilities. Key updates include the introduction of new action gameplay mechanics in 3D worlds (PR #15251), improved NPC interactions (PR #15220), and a newly developed scene editor for 3D world properties (PR #15187). Additionally, the backend CI enhancements (PR #15291) and adjustments to how studio flows utilize models (PR #15253) are notable improvements. Among the new issues, a bug in image editing on macOS (issue #15241) has garnered attention, indicating ongoing challenges in cross-platform compatibility.

#### ✅ Merged PRs
- [#15297](https://github.com/unslothai/unsloth/pull/15297) Studio video: pin MiniMax-H3's lazily streamed blocks with the background pinner
- [#15263](https://github.com/unslothai/unsloth/pull/15263) Studio: let FLUX.3 Klein edit through the Edit workflow
- [#15296](https://github.com/unslothai/unsloth/pull/15296) Tests: load the helpers ORPO rewriter constants are built with
- [#15251](https://github.com/unslothai/unsloth/pull/15251) Studio Flows: action gameplay in 3D worlds (jump, sprint, crouch, collisions, opt-in shooter)
- [#15291](https://github.com/unslothai/unsloth/pull/15291) Backend CI: run the multi-rank gloo suites in their own Repo tests shard
- [#15289](https://github.com/unslothai/unsloth/pull/15289) Studio: build native int8 image transformers per tensor on a cache miss
- [#15287](https://github.com/unslothai/unsloth/pull/15287) Studio backend tests: forget MCP discovery state between tests
- [#15283](https://github.com/unslothai/unsloth/pull/15283) Studio: cache image native int8 builds in the local prequant cache
- [#15286](https://github.com/unslothai/unsloth/pull/15286) PP gloo parity test: size gemma3's grad bounds to its noise on AVX2 kernels
- [#15253](https://github.com/unslothai/unsloth/pull/15253) Studio Flows: use Studio's multiple loaded models instead of swapping chat models
- [#15252](https://github.com/unslothai/unsloth/pull/15252) Studio Flows: NPC replies and live scenes reuse llama-server's prompt cache
- [#15220](https://github.com/unslothai/unsloth/pull/15220) Studio Flows: villagers trade, find homes, race you for quests and can be hostile
- [#15219](https://github.com/unslothai/unsloth/pull/15219) Studio Flows: the player's reply no longer waits behind background generation
- [#15277](https://github.com/unslothai/unsloth/pull/15277) DPO: UNSLOTH_FUSED_PREFERENCE_LOSS on TRL 1.x DPOTrainer._compute_loss
- [#15197](https://github.com/unslothai/unsloth/pull/15197) Studio Flows: worlds keep generating quests, items and villagers while they are played
- [#15271](https://github.com/unslothai/unsloth/pull/15271) Flex attention: fitting tiles for Gemma 3 on sm86 / sm89 (L4, A10, RTX 4090) instead of eager
- [#15191](https://github.com/unslothai/unsloth/pull/15191) Studio Flows: villagers with needs and a fixed set of actions (follow me, errands, daily routines)
- [#15187](https://github.com/unslothai/unsloth/pull/15187) Studio Flows: scene editor for 3D worlds (props, gizmos, glTF import and export)
- [#15273](https://github.com/unslothai/unsloth/pull/15273) PP gloo parity test: give gemma3 its own per-element grad tolerance
- [#15190](https://github.com/unslothai/unsloth/pull/15190) Studio Flows: villagers summarise long conversations instead of forgetting them
- [#15127](https://github.com/unslothai/unsloth/pull/15127) Studio Flows: gallery filters, ask before downloading models, name the failed block
- [#15268](https://github.com/unslothai/unsloth/pull/15268) SDPA on cuDNN: bucket masked and prefill calls, keep decode off cuDNN where torch would pick it
- [#15270](https://github.com/unslothai/unsloth/pull/15270) Decode graph KV growth test: gate its CUDA skips on has_real_cuda()
- [#15161](https://github.com/unslothai/unsloth/pull/15161) Studio: give web search engines a connect timeout so a blocked network fails fast (#15143)
- [#15269](https://github.com/unslothai/unsloth/pull/15269) Fused preference loss test: take TRL's own trainer as the reference
- [#15126](https://github.com/unslothai/unsloth/pull/15126) Studio Flows: replication pins on export, and clearer offline play for shared flows
- [#15125](https://github.com/unslothai/unsloth/pull/15125) Studio Flows: start from loaded models, load the next model while CPU steps run, optional unload
- [#15087](https://github.com/unslothai/unsloth/pull/15087) Studio: allow editing a refreshed reply when the tab Date disagrees
- [#15170](https://github.com/unslothai/unsloth/pull/15170) Studio: let --no-reasoning-preserve and a custom chat template turn off the Qwen3.8 preserve_thinking default
- [#15034](https://github.com/unslothai/unsloth/pull/15034) Studio: stop refusing our own llama-server on Windows when psutil misreports its listener (#15022)
- [#15267](https://github.com/unslothai/unsloth/pull/15267) GRPO truncated-support gate test: lift the block that binds _support_kwargs
- [#15264](https://github.com/unslothai/unsloth/pull/15264) TP x FSDP2 parity test: keep AdamW out of its eps cliff on the lm_head copy
- [#15186](https://github.com/unslothai/unsloth/pull/15186) Studio Flows: live stories write the next scenes while you read
- [#15130](https://github.com/unslothai/unsloth/pull/15130) Studio Flows: first-person 3D view for world games
- [#15261](https://github.com/unslothai/unsloth/pull/15261) Define _recover_vulkan_stall below the CPU fallback it calls
- [#15128](https://github.com/unslothai/unsloth/pull/15128) Studio Flows: faster live villager replies (stop dropped calls, cache-friendly memory prompt, bounded recall)
- [#15256](https://github.com/unslothai/unsloth/pull/15256) Studio: keep a Settings-picked embedder visible in the Hub
- [#15254](https://github.com/unslothai/unsloth/pull/15254) MoE dW accumulate test: compare in-place against grad + dW, check the exact 1 on CUDA only
- [#15244](https://github.com/unslothai/unsloth/pull/15244) Route PPO, RLOO, BCO, Online DPO, XPO, Nash-MD and GKD to the zoo fused linear kernels
- [#15213](https://github.com/unslothai/unsloth/pull/15213) SFT: compute loss_type="dft" on TRL's fused LM head instead of silently training NLL
- [#15229](https://github.com/unslothai/unsloth/pull/15229) Refuse transformers / accelerate cp_size under Unsloth DPO and GRPO
- [#15212](https://github.com/unslothai/unsloth/pull/15212) Refuse accelerate config cp_size under Unsloth SFT, not only TrainingArguments
- [#15243](https://github.com/unslothai/unsloth/pull/15243) RoPE: constexpr the strides and head counts fixed per model
- [#15248](https://github.com/unslothai/unsloth/pull/15248) Studio: show one composer button while a reply streams
- [#15246](https://github.com/unslothai/unsloth/pull/15246) Studio: make Keep multiple models loaded unload idle models before spilling a load to the CPU
- [#15238](https://github.com/unslothai/unsloth/pull/15238) MoE dW: fall back to the legacy kernel when a per-expert tile overflows and no smaller tile is known
- [#15237](https://github.com/unslothai/unsloth/pull/15237) Decode graphs: grow the KV cache instead of reserving max_new_tokens, and capture on the model's GPU
- [#14808](https://github.com/unslothai/unsloth/pull/14808) Compiled blocks: packed rows run varlen attention outside the graph
- [#15250](https://github.com/unslothai/unsloth/pull/15250) Train the float8 FSDP2 reference in a fresh process like the sharded ranks
- [#15242](https://github.com/unslothai/unsloth/pull/15242) Studio: read diffusion.py as utf-8 in the encoder pin structural test
- [#15204](https://github.com/unslothai/unsloth/pull/15204) Pipeline parallel x native FSDP2 data parallel x tensor parallel for dense decoders
- [#15236](https://github.com/unslothai/unsloth/pull/15236) Studio diffusion: price a released pipeline from its bf16 table while its cache is incomplete
- [#14981](https://github.com/unslothai/unsloth/pull/14981) Studio: offer, size and pin every MIG GPU instance CUDA enumerates on R570+ drivers
- [#15195](https://github.com/unslothai/unsloth/pull/15195) Studio diffusion: read a pipeline's .fp16 weight files on fp16 loads (SDXL reads 6.5 GB, not 12.9 GB)
- [#15208](https://github.com/unslothai/unsloth/pull/15208) Inductor readback barrier: key the compile cache when a user pass is already set
- [#15140](https://github.com/unslothai/unsloth/pull/15140) Cross entropy: keep the loss and label gradient of confident tokens
- [#14835](https://github.com/unslothai/unsloth/pull/14835) Studio: keep loading a downloaded retired FLUX.3 full copy from disk
- [#14185](https://github.com/unslothai/unsloth/pull/14185) Route ORPO, CPO, KTO, DPO and TRL 1.15's fused head to the zoo fused linear kernel
- [#15239](https://github.com/unslothai/unsloth/pull/15239) Drop the duplicate has_real_cuda import in the torchao route test
- [#15228](https://github.com/unslothai/unsloth/pull/15228) Flex tuned backward: leave caller tiles and small sparse blocks to Inductor
- [#15207](https://github.com/unslothai/unsloth/pull/15207) Block CUDA graphs: copy parameter gradients out of the graph pool
- [#14622](https://github.com/unslothai/unsloth/pull/14622) Mixed NVIDIA hosts: bf16 and compile follow the current device; check where the weights landed after loading
- [#14761](https://github.com/unslothai/unsloth/pull/14761) Native FSDP2: write sub-mesh saves from the mesh's own first rank
- [#15223](https://github.com/unslothai/unsloth/pull/15223) Studio diffusion: streamed offload copies outside inference mode, so each compiled block traces once
- [#14760](https://github.com/unslothai/unsloth/pull/14760) Native FSDP2: keep accelerate's FSDP2 for UNSLOTH_FSDP2=1 on XPU / NPU / other non-CUDA installs
- [#14762](https://github.com/unslothai/unsloth/pull/14762) Native FSDP2: restore the exact reshard-after-forward setting after generate
- [#15231](https://github.com/unslothai/unsloth/pull/15231) Context parallel gather: correct gradients under torch.compile, and a guard for in-place edits of returned tensors
- [#14728](https://github.com/unslothai/unsloth/pull/14728) RoPE cache: a cold build inside a compiled block traces again (no is_inference_mode_enabled under compile)
- [#14748](https://github.com/unslothai/unsloth/pull/14748) Fused LoRA: run PEFT for a partially merged block whose input needs no grad
- [#14662](https://github.com/unslothai/unsloth/pull/14662) Installer: Vulkan llama.cpp for ROCm GPUs without a bundle or hipcc; keep Strix wheels below ROCm 7.13
- [#14521](https://github.com/unslothai/unsloth/pull/14521) Studio: load GGUF on CPU when the auto-selected Vulkan driver hangs or has no device
- [#14747](https://github.com/unslothai/unsloth/pull/14747) FSDP2: restore the checkpoint's 4-bit QuantState on a full DCP load
- [#14803](https://github.com/unslothai/unsloth/pull/14803) Stamp no bitsandbytes config on a dequantized fp8 load, and read a quantization_config object before stamping
- [#15202](https://github.com/unslothai/unsloth/pull/15202) Studio diffusion: write the runtime int8 / fp8 prequant cache after the load, off the first image
- [#14738](https://github.com/unslothai/unsloth/pull/14738) Studio: keep a local folder's own text encoder when the text encoder setting is unset
- [#14732](https://github.com/unslothai/unsloth/pull/14732) Studio: read MiniMax-H3 card VRAM on ROCm without a torch context
- [#14801](https://github.com/unslothai/unsloth/pull/14801) FSDP2 merged_4bit: keep the base bias on the GPU when lora_bias merges into it
- [#14780](https://github.com/unslothai/unsloth/pull/14780) NVFP4 QAT: accept fp16 autocast and non-contiguous activations
- [#14606](https://github.com/unslothai/unsloth/pull/14606) XPU: train an explicit bf16 load in bf16 under the fp16 idiom, and match vLLM's dtype when it refuses bf16
- [#14714](https://github.com/unslothai/unsloth/pull/14714) RoPE: 64-bit cos / sin row offsets for tables past 2**31 elements
- [#14758](https://github.com/unslothai/unsloth/pull/14758) Studio diffusion: cap the single-file host RAM refusal reserve at the fp8-storage reserve
- [#14733](https://github.com/unslothai/unsloth/pull/14733) Studio: keep one GGUF row per build in repos whose model name contains NVFP4
- [#15200](https://github.com/unslothai/unsloth/pull/15200) Honour gradient_checkpointing assigned on the config after construction
- [#14737](https://github.com/unslothai/unsloth/pull/14737) Studio: keep LTX-2.5's bf16 text encoder on an unset request
- [#14848](https://github.com/unslothai/unsloth/pull/14848) Studio: keep MiniMax-H3 PDD float64 math on the host on a device without float64
- [#14727](https://github.com/unslothai/unsloth/pull/14727) RMSNorm / LayerNorm: do not hash a symbolic width in the launch settings cache
- [#14673](https://github.com/unslothai/unsloth/pull/14673) Generation keeps inference_mode on DeepSpeed ZeRO-1/2; only ZeRO-3 needs no_grad
- [#15206](https://github.com/unslothai/unsloth/pull/15206) Studio diffusion: pin streamed image text encoders with the background pinner, and the prefix that fits
- [#14736](https://github.com/unslothai/unsloth/pull/14736) Studio: Mask from text runs SAM 3.1 in bf16 unless the card is short of memory
- [#14719](https://github.com/unslothai/unsloth/pull/14719) MoE grouped GEMM autotune: key, tune and fit tiles on the experts' own GPU
- [#14610](https://github.com/unslothai/unsloth/pull/14610) Studio sd.cpp: a lost Vulkan device is not a strike; Arc / ROCm keep Vulkan; a UHD iGPU beside a card no longer vetoes Vulkan
- [#15184](https://github.com/unslothai/unsloth/pull/15184) Prefetch: keep subfolder weights that a root safetensors index maps to
- [#14763](https://github.com/unslothai/unsloth/pull/14763) gpt-oss: fix the unreadable lone .bin advice and pin the layout probe order to transformers' resolver
- [#14690](https://github.com/unslothai/unsloth/pull/14690) Linear input-cast hook: skip float8-weight Linears
- [#14800](https://github.com/unslothai/unsloth/pull/14800) Studio: judge a weight name's .. where the filesystem sends it, not by its text
- [#14970](https://github.com/unslothai/unsloth/pull/14970) Studio: keep the AMD gfx target and HIP id map until hardware re-detection
- [#14691](https://github.com/unslothai/unsloth/pull/14691) head_dim 512 attention: leave mask plus is_causal to SDPA, fall back on mask-scan OOM
- [#15198](https://github.com/unslothai/unsloth/pull/15198) Studio diffusion: price the compiled tier's requests from its own learned peak (offloaded bf16 keeps its residency after compile)
- [#14713](https://github.com/unslothai/unsloth/pull/14713) Cross entropy: an all -inf vocab chunk no longer turns the loss into NaN
- [#14984](https://github.com/unslothai/unsloth/pull/14984) Installers: read lspci and the audio.cpp driver version once per run, one WMI query for both AMD scans
- [#15216](https://github.com/unslothai/unsloth/pull/15216) Padding choice: per compute capability thresholds, RTX PRO 6000 / RTX 5090 peaks
- [#14615](https://github.com/unslothai/unsloth/pull/14615) Studio GGUF placement: the dGPU wins Auto only without losing context; explicit picks keep host-only bytes off the dGPU
- [#14712](https://github.com/unslothai/unsloth/pull/14712) Cross entropy: correct gradients under torch.compile for vocabs above 65536
- [#14818](https://github.com/unslothai/unsloth/pull/14818) Studio: trim masked padding from pre-tokenized rows and range-check labels
- [#14838](https://github.com/unslothai/unsloth/pull/14838) DeepSeek-V4.1 context scratch: charge the dense KQ scores when flash attention is off
- [#14711](https://github.com/unslothai/unsloth/pull/14711) Tests: run the DDP no_sync accumulation steps' forward inside no_sync
- [#14753](https://github.com/unslothai/unsloth/pull/14753) Studio: trust forwarded headers only behind an opted-in proxy or the managed tunnel
- [#14755](https://github.com/unslothai/unsloth/pull/14755) Studio: refuse playlists at the entry of the remaining upload decoders
- [#15002](https://github.com/unslothai/unsloth/pull/15002) Studio installer (AMD, Linux): CPU torch for a lone gfx90c instead of kernel-less ROCm wheels
- [#14911](https://github.com/unslothai/unsloth/pull/14911) Studio drafter: split TRL packed rows at seq_lengths, reattach a Hub full fine-tune's MTP head on export
- [#14836](https://github.com/unslothai/unsloth/pull/14836) Studio: keep enhancing prompts from an already downloaded FLUX.3 upsampler quant
- [#14709](https://github.com/unslothai/unsloth/pull/14709) llama.cpp installer: keep Qualcomm Adreno on the CPU prebuilt unless Vulkan is requested
- [#14749](https://github.com/unslothai/unsloth/pull/14749) adamw_flash: keep the unquantized bf16 Adam variance in fp32 so it can decay
- [#14757](https://github.com/unslothai/unsloth/pull/14757) Studio: API keys cannot approve host-path tool calls out of the sandbox
- [#14785](https://github.com/unslothai/unsloth/pull/14785) Tests: skip the QAT MX and FP8 block GEMM GPU cases on the recorded real CUDA, not the spoofable probe
- [#14829](https://github.com/unslothai/unsloth/pull/14829) Studio: an offline audio.cpp listing checks the account grant on the disk pool
- [#15211](https://github.com/unslothai/unsloth/pull/15211) Skip the torchao blockwise GEMM CUDA case on a real CUDA probe
- [#15199](https://github.com/unslothai/unsloth/pull/15199) Packed metadata: keep the tensor path under torch.compile, fall back to pageable copies
- [#15209](https://github.com/unslothai/unsloth/pull/15209) Name the encoding on the tensor parallel index reads; give the PPO unwrap test _decode_graphs
- [#15192](https://github.com/unslothai/unsloth/pull/15192) Studio diffusion: an int8 prequant read-back hits the compile bundle the runtime quantize saved
- [#15205](https://github.com/unslothai/unsloth/pull/15205) FP8 block GEMM: route empty inputs to the Triton kernel
- [#13871](https://github.com/unslothai/unsloth/pull/13871) Studio: scheduled tasks that run a prompt on a schedule and save each answer as a new chat
- [#14482](https://github.com/unslothai/unsloth/pull/14482) Clef: keep fp16 loss scaling on the float32 path (fixes Gemma 3 not training on T4)
- [#15193](https://github.com/unslothai/unsloth/pull/15193) Flex attention: tuned backward tiles on A100 for head_dim 256 (Gemma 3 LoRA 1.9-2.7x faster)
- [#14670](https://github.com/unslothai/unsloth/pull/14670) Gemma 3: keep flex attention only where its head_dim 256 template fits the card
- [#15194](https://github.com/unslothai/unsloth/pull/15194) Skip the norm warps CUDA case on a real CUDA probe
- [#15174](https://github.com/unslothai/unsloth/pull/15174) Tensor parallelism v2: sharded loading, data parallel x tensor parallel, and the Trainer
- [#15189](https://github.com/unslothai/unsloth/pull/15189) Fused Qwen3 QK norm + RoPE: on by default on NVIDIA CUDA
- [#15188](https://github.com/unslothai/unsloth/pull/15188) Decode graphs on by default for RL trainer generation, released on return to training
- [#15185](https://github.com/unslothai/unsloth/pull/15185) SFT: pick padded batches + block compile over padding-free when micro batches are host bound
- [#15183](https://github.com/unslothai/unsloth/pull/15183) Studio diffusion: run an eager native int8 W8A8 linear as one compiled function (bit-identical, 1.33x streamed)
- [#15180](https://github.com/unslothai/unsloth/pull/15180) LayerNorm / RMSNorm: per-GPU num_warps tables
- [#15122](https://github.com/unslothai/unsloth/pull/15122) Studio: one padding for every main button
- [#15053](https://github.com/unslothai/unsloth/pull/15053) Bump the pip group across 1 directory with 2 updates
- [#15179](https://github.com/unslothai/unsloth/pull/15179) Studio video: pin offloaded weights at their size, not a power of two
- [#15123](https://github.com/unslothai/unsloth/pull/15123) Studio: 20px for the xl corner radius
- [#15182](https://github.com/unslothai/unsloth/pull/15182) Give the single-row decode harness the real _decode_graphs helpers
- [#15178](https://github.com/unslothai/unsloth/pull/15178) Studio diffusion: skip the offload cost probe's pinned buffer on an integrated GPU
- [#15175](https://github.com/unslothai/unsloth/pull/15175) Pipeline parallelism v1: apply_pipeline_parallel for dense decoders (GPipe, 1F1B)
- [#14932](https://github.com/unslothai/unsloth/pull/14932) Bump dompurify from 3.4.16 to 3.4.17 in /docker/jupyter/unsloth_labext in the npm_and_yarn group across 1 directory
- [#15181](https://github.com/unslothai/unsloth/pull/15181) Find the Run settings footer by its rule, not by div count
- [#15177](https://github.com/unslothai/unsloth/pull/15177) Studio: Sampling footer waits for the saved-sampling read before Remember and Save

#### 🐛 New Issues
- [#15221](https://github.com/unslothai/unsloth/issues/15221) [Bug] Edit image: typing in the Instructions box is extremely slow during image generation `feature request` `bug` 💬2
- [#15274](https://github.com/unslothai/unsloth/issues/15274) [Feature] Native HF-Mirror Support with Parallel Model Downloads `feature request` 💬1
- [#15241](https://github.com/unslothai/unsloth/issues/15241) [Bug] [macOS] [Desktop] Image edit unavailable with unsloth/flux-3-image-klein-GGUF `feature request` `bug` 💬1
- [#15292](https://github.com/unslothai/unsloth/issues/15292) [Feature] Import Entire Unsloth Automatically - Settings, Conversations, Model Configs, Temp, Files, RAG, and more `feature request` 💬1
- [#15285](https://github.com/unslothai/unsloth/issues/15285) [Bug] DeepSeek V4.1 Flash GGUF template rejects ordinary discussion of the image marker, breaking conversation history 💬1
- [#15280](https://github.com/unslothai/unsloth/issues/15280) [Bug] "Load into" setting ignored when STT model is loaded from API `feature request` `bug` 💬1
- [#15281](https://github.com/unslothai/unsloth/issues/15281) [Feature] Support 24-hour time format `feature request`
- [#15272](https://github.com/unslothai/unsloth/issues/15272) [Bug] "Open image in new window" and "Copy image" context menu items from the Edit gallery strip do nothing `feature request` `bug` 💬1
- [#15260](https://github.com/unslothai/unsloth/issues/15260) [Linux][Desktop] WebKitWebProcess crashes with SIGABRT when AT-SPI / atk-bridge is active (KDE Plasma) `feature request` `bug` 💬1
- [#15201](https://github.com/unslothai/unsloth/issues/15201) [Feature] Studio: system-wide voice typing
- [#15278](https://github.com/unslothai/unsloth/issues/15278) [Feature] Support and optimize Nanbeige4.3-33B `feature request`

#### 🔒 Closed Issues
- [#15004](https://github.com/unslothai/unsloth/issues/15004) [Bug] Assistant messages can not be edited after refresh
- [#15022](https://github.com/unslothai/unsloth/issues/15022) Unsloth Studio (Windows): every GGUF load is killed by a false "our child is not listening" port-ownership check
- [#15143](https://github.com/unslothai/unsloth/issues/15143) [Bug] 在中国大陆AI无法使用联网搜索功能
- [#14439](https://github.com/unslothai/unsloth/issues/14439) [Bug] FastDecisionModel (Clef head): Gemma-3 doesn't train — flat loss, chance-level accuracy
- [#15142](https://github.com/unslothai/unsloth/issues/15142) [Bug] [Desktop][Windows] All tested models fail to load after updating to v0.1.910-beta
- [#15115](https://github.com/unslothai/unsloth/issues/15115) [Bug] Studio forces preserve_thinking=true at llama-server launch, which overrides a user-supplied chat template and makes --no-reasoning-preserve a no-op
- [#15241](https://github.com/unslothai/unsloth/issues/15241) [Bug] [macOS] [Desktop] Image edit unavailable with unsloth/flux-3-image-klein-GGUF
- [#15110](https://github.com/unslothai/unsloth/issues/15110) [Bug] Embedding model disapires from api
- [#15172](https://github.com/unslothai/unsloth/issues/15172) [Bug] studio fails to generate image. core dumped

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,161 · **Open issues:** 373 · **Last push:** 2h ago

On October 26, 2026, there were no new releases for AIBrix. However, several important merged pull requests included a bug fix for downloading model artifacts from GCS, the addition of an issue-first contribution policy in the documentation, and a new simulation feature comparing candidate selection with full scoring. Notably, new issues raised include a request for comments on deploying vLLM-Omni multi-stage pipelines with StormService and a critical bug regarding the metrics being wiped after restarting the ModelClaim runtime agent. Other significant bugs identified include issues with KV-sync chat tokenization and scheduling with the leastThroughput adapter.

#### ✅ Merged PRs
- [#3270](https://github.com/vllm-project/aibrix/pull/3270) [Bug] Download gcs:// and gs:// model artifacts in the runtime
- [#3304](https://github.com/vllm-project/aibrix/pull/3304) [Docs] Add issue-first contribution policy
- [#3300](https://github.com/vllm-project/aibrix/pull/3300) [Misc] Add the simulation that compares candidate selection with full scoring

#### 🐛 New Issues
- [#3305](https://github.com/vllm-project/aibrix/issues/3305) [RFC] Deploy vLLM-Omni multi-stage pipelines with StormService `kind/feature` `area/orchestration` 💬3
- [#3301](https://github.com/vllm-project/aibrix/issues/3301) [Bug]: Restarting the ModelClaim runtime agent wipes the metrics of the engines it re-adopts `kind/bug` `triage/accepted` `area/runtime` `area/modelclaim` 💬2
- [#3307](https://github.com/vllm-project/aibrix/issues/3307) [Bug] KV-sync chat tokenization drops tool-call history and falls back on null content `kind/bug` `area/gateway` `area/website` 💬1
- [#3298](https://github.com/vllm-project/aibrix/issues/3298) [Bug] leastThroughput adapter scheduler looks up pod-scoped metrics per model, so it never schedules `kind/bug` `triage/accepted` `area/orchestration` 💬1
- [#3302](https://github.com/vllm-project/aibrix/issues/3302) [Bug]: After SleepLowerPriority preemption, waking the victim puts a higher-priority model to sleep `kind/bug` `triage/accepted` `area/orchestration` `area/modelclaim` 💬1
- [#3297](https://github.com/vllm-project/aibrix/issues/3297) least-latency scores pods by lifetime-average latency, so it keeps routing to a pod that has become slow `kind/bug` `area/gateway` `area/website` `area/orchestration` 💬1

#### 🔒 Closed Issues
- [#3123](https://github.com/vllm-project/aibrix/issues/3123) ModelWarmup target stays Running until the job timeout when Pod Security rejects its Pods
- [#3259](https://github.com/vllm-project/aibrix/issues/3259) Model runtime cannot download gcs:// artifact URLs that the ModelClaim API lists as supported
- [#3293](https://github.com/vllm-project/aibrix/issues/3293) [Bug] throughput and least-latency read PromQL token averages as 0
- [#3180](https://github.com/vllm-project/aibrix/issues/3180) AIBRIX_PREFIX_CACHE_REMOTE_TOKENIZER_ENDPOINT is never consumed; remote tokenize calls all land on one pod
- [#3277](https://github.com/vllm-project/aibrix/issues/3277) [Bug] Multi-strategy routing ties the least-loaded pod with a busier one, then picks by pod name
- [#3235](https://github.com/vllm-project/aibrix/issues/3235) [Bug] KPA asks for one extra pod when the exact replica count is a whole number
- [#3190](https://github.com/vllm-project/aibrix/issues/3190) [RFC]: Correct batch engine argument mappings and reject removed vLLM settings

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,256 · **Open issues:** 752 · **Last push:** 1h ago

On October 26, 2026, there were no new releases for Semantic Router, but several key pull requests were merged. Notably, PR #5415 updated the pillow dependency from version 11.3.0 to 13.0.0, and PR #5124 bumped fsspec from 2026.2.0 to 2026.6.0. Additionally, PR #5449 introduced a feature for the model runtime to serve d3-ultra with specific prompt layout headers and temperature settings. Among new issues, #5456 emerged as a significant bug, highlighting that the InMemoryStore.Update method was dropping provenance fields. Overall, it was a day focused on updates and bug fixes with no major releases.

#### ✅ Merged PRs
- [#5415](https://github.com/vllm-project/semantic-router/pull/5415) Bump pillow from 11.3.0 to 13.0.0 in /tools/models/vela_omni in the pip group across 1 directory
- [#5124](https://github.com/vllm-project/semantic-router/pull/5124) build(deps): bump fsspec from 2026.2.0 to 2026.6.0 in /src/vllm-sr in the cli-python-security group across 1 directory
- [#5368](https://github.com/vllm-project/semantic-router/pull/5368) [Bug] Send budgetless enabled reasoning to Messages backends as adaptive
- [#5449](https://github.com/vllm-project/semantic-router/pull/5449) [Feature] Model runtime: serve d3-ultra (prompt layout header-v1, temperature per request size)

#### 🐛 New Issues
- [#5456](https://github.com/vllm-project/semantic-router/issues/5456) [Bug] InMemoryStore.Update drops the provenance fields `bug` `accepted` `wg/agentic-context` 💬2
- [#5468](https://github.com/vllm-project/semantic-router/issues/5468) [Bug] Local rate-limit rules with duplicate or empty names share one bucket, making enforcement order-dependent `needs-acceptance` 💬1
- [#5455](https://github.com/vllm-project/semantic-router/issues/5455) [CI/Build] Approved PRs sit without a PR Gate check until the branch is pushed again `enhancement` `accepted` `in-progress` `wg/evaluation-quality` 💬1
- [#5445](https://github.com/vllm-project/semantic-router/issues/5445) [Bug] Config history tests leave a history write running after the test ends `bug` `accepted` `wg/evaluation-quality` 💬1
- [#5447](https://github.com/vllm-project/semantic-router/issues/5447) [Feature] Model runtime: serve d3-ultra (prompt layout header-v1, temperature per request size) `accepted` `wg/router-models-inference-runtime` 💬1
- [#5470](https://github.com/vllm-project/semantic-router/issues/5470) [Feature] Model runtime: FlashAttention-3 for state-once branched attention on Hopper `needs-acceptance` `wg/router-models-inference-runtime`
- [#5460](https://github.com/vllm-project/semantic-router/issues/5460) [Bug] Tools DB read error renders as a static badge without the backend reason `bug` `needs-acceptance` `wg/developer-experience-ecosystem`
- [#5462](https://github.com/vllm-project/semantic-router/issues/5462) [Bug] OpenClaw error state still invites create actions that cannot succeed `bug` `wg/developer-experience-ecosystem`
- [#5461](https://github.com/vllm-project/semantic-router/issues/5461) [Bug] OpenClaw worker tab shows the page-level error banner and its own error notice simultaneously `bug` `wg/developer-experience-ecosystem`
- [#5459](https://github.com/vllm-project/semantic-router/issues/5459) [Bug] ClawRoomChat drops the 503 body and surfaces only the HTTP status `bug` `wg/developer-experience-ecosystem`
- [#5463](https://github.com/vllm-project/semantic-router/issues/5463) [Bug] InMemoryStore.Get hands out the store's live pointer `bug` `needs-acceptance` `wg/agentic-context`
- [#5458](https://github.com/vllm-project/semantic-router/issues/5458) [CI/Build] Community checks do not re-run when a PR head changes `enhancement` `needs-acceptance` `wg/evaluation-quality`
- [#5452](https://github.com/vllm-project/semantic-router/issues/5452) Bug: Milvus vector search uses inner product for similarity threshold filtering `bug` `needs-acceptance` `wg/agentic-context`

#### 🔒 Closed Issues
- [#5396](https://github.com/vllm-project/semantic-router/issues/5396) [Bug] Streamed cache hits and fast responses collapse newlines and whitespace
- [#5353](https://github.com/vllm-project/semantic-router/issues/5353) [Bug] Routed reasoning with an enabled mode fails every request to a Messages backend
- [#5447](https://github.com/vllm-project/semantic-router/issues/5447) [Feature] Model runtime: serve d3-ultra (prompt layout header-v1, temperature per request size)
- [#5462](https://github.com/vllm-project/semantic-router/issues/5462) [Bug] OpenClaw error state still invites create actions that cannot succeed
- [#5461](https://github.com/vllm-project/semantic-router/issues/5461) [Bug] OpenClaw worker tab shows the page-level error banner and its own error notice simultaneously
- [#5459](https://github.com/vllm-project/semantic-router/issues/5459) [Bug] ClawRoomChat drops the 503 body and surfaces only the HTTP status

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*