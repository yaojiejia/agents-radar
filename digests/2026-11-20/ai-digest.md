# 📡 AI Ecosystem Digest — 2026-11-20

> Generated 2026-11-20 03:53 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 156,352 | 16 | 24 | 0 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 135,911 | 22 | 2 | 48 | 4 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 108,946 | 1 | 0 | 7 | 3 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,437 | 17 | 12 | 0 | 2 |
| [OpenCode](https://github.com/anomalyco/opencode) | 228,075 | 25 | 25 | 18 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 30,794 | 23 | 2 | 5 | 0 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 394,846 | 156 | 125 | 160 | 2 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 264,784 | 25 | 0 | 1 | 2 |
| [vLLM](https://github.com/vllm-project/vllm) | 97,238 | 37 | 17 | 56 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 38,862 | 23 | 13 | 45 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 135,781 | 9 | 17 | 26 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 187,682 | 7 | 4 | 1 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 63,572 | 22 | 31 | 127 | 5 |
| [Unsloth](https://github.com/unslothai/unsloth) | 79,802 | 7 | 8 | 127 | 1 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,194 | 4 | 0 | 1 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,511 | 19 | 11 | 0 | 0 |

---

## ✨ Highlights

- **OpenAI Codex** released multiple updates including [rust-v0.173.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.173.0-alpha.1) and [rust-v0.171.0](https://github.com/openai/codex/releases/tag/rust-v0.171.0).
- **Gemini CLI** launched three new versions: [v0.71.0-nightly.20261120.gd4cb1713f](https://github.com/google-gemini/gemini-cli/releases/tag/v0.71.0-nightly.20261120.gd4cb1713f), [v0.71.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.71.0-preview.0), and [v0.70.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.70.0).
- **OpenClaw** reported a significant bug with [#202001](https://github.com/openclaw/openclaw/issues/202001) regarding prompt cache invalidation, which has already accumulated 9 comments.
- **Hermes Agent** has a major issue reported with [#157667](https://github.com/NousResearch/hermes-agent/issues/157667), related to large paste functionality, drawing 5 comments.
- **Qwen Code** faced a critical CI failure illustrated by [#17874](https://github.com/QwenLM/qwen-code/issues/17874), which has garnered 6 comments, reflecting its urgency.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 156,352 · **Open issues:** 17,075 · **Last push:** 3h ago

On November 20, 2026, Claude Code released version v2.1.329, which introduced a trust dialog warning that clarifies where a folder's hooks are declared, alongside a new warning for failed hook loading in Claude Desktop and other non-interactive hosts. Additionally, the update added features to display scheduled tasks, including `/loop` wakeups and conversation forks, streamlining user interaction. No pull requests were merged in the last 24 hours; however, several notable new issues emerged, including a critical bug (#111270) where Claude Code drifts outside the project scope, resulting in unrequested changes and false information being reported.

#### 🚀 New Releases
- [v2.1.329](https://github.com/anthropics/claude-code/releases/tag/v2.1.329) v2.1.329

#### 🐛 New Issues
- [#111280](https://github.com/anthropics/claude-code/issues/111280) [BUG] Claude code never know what year it is, ignores system-provided date and outputs wrong year `bug` `platform:macos` `area:model` 💬1
- [#111278](https://github.com/anthropics/claude-code/issues/111278) [FEATURE] Claude Calendar: one view of every scheduled, running and finished Claude job `enhancement` `area:agent-view` 💬1
- [#111281](https://github.com/anthropics/claude-code/issues/111281) [GitHub integration] `bug` `needs-info` `github-integration`
- [#111282](https://github.com/anthropics/claude-code/issues/111282) [BUG] Desktop (managed/gateway config): changing a marketplace's source under the same name removes the marketplace and all its installed plugins, and does not restore them `bug` `platform:macos` `area:plugins` `area:desktop`
- [#111279](https://github.com/anthropics/claude-code/issues/111279) [BUG] Web (claude.ai/code): tapping the chat input with ChromeOS tap-to-click opens the page's context menu `bug` `area:claude-code-web` `platform:web`
- [#111277](https://github.com/anthropics/claude-code/issues/111277) [BUG] Backspace still deletes whole Thai grapheme cluster (v2.1.281) — follow-up to #83449 `bug` `has repro` `platform:macos` `area:tui`
- [#111276](https://github.com/anthropics/claude-code/issues/111276) [BUG] Claude in Chrome: "Authorization failed — This isn't working right now" on Authorize (macOS, Max plan) `bug` `platform:macos` `area:auth` `area:chrome`
- [#111275](https://github.com/anthropics/claude-code/issues/111275) [BUG] Claude for Microsoft 365 Office add-in vanishes seconds after install on macOS (possibly removed after Claude desktop/Cowork Office sessions, cf. #61756) `bug` `platform:macos` `regression` `area:integrations`
- [#111274](https://github.com/anthropics/claude-code/issues/111274) [BUG] VS Code extension 2.1.327 drops project/local settings for folders whose path contains U+3000 (ideographic space) `bug` `has repro` `platform:windows` `area:ide`
- [#111273](https://github.com/anthropics/claude-code/issues/111273) [BUG] Safety classifier stops design text for a fictional homing weapon in a game (Fable 5.2, then Opus 5.5); no category shown `bug` `platform:windows` `area:model`
- [#111272](https://github.com/anthropics/claude-code/issues/111272) Bug Report: Flagged session when asking for a guide to flashing OpenBeken onto Tuya smart plug `bug` `platform:linux` `area:model`
- [#111271](https://github.com/anthropics/claude-code/issues/111271) [Bug] /btw fork re-runs the query before continuing `bug` `platform:linux` `area:core`
- [#111270](https://github.com/anthropics/claude-code/issues/111270) [Bug] Claude Code drifts outside project scope, makes unrequested changes, and reports false information `bug` `platform:macos` `area:model` `needs-repro`
- [#111269](https://github.com/anthropics/claude-code/issues/111269) [Opus 5.5] AskUserQuestion calls per turn roughly tripled from 2026-11-18; client-side prompts unchanged between 2.1.325 and 2.1.326 `bug` `platform:windows` `area:model` `regression`
- [#111268](https://github.com/anthropics/claude-code/issues/111268) [Feature Request] Add setting to show only latest models (hide models before Opus/Sonnet/Haiku 5.5) `enhancement` `platform:windows` `area:tui`
- [#111267](https://github.com/anthropics/claude-code/issues/111267) Credit balance is too low `question` `platform:windows` `area:cost`

#### 🔒 Closed Issues
- [#105868](https://github.com/anthropics/claude-code/issues/105868) [BUG] Windows: mcp__claude-in-chrome__file_upload is missing from newly created chats while other Claude in Chrome tools are present
- [#94159](https://github.com/anthropics/claude-code/issues/94159) [Bug][cyber] Safeguard false positive during microcontroller board setup and firmware flashing (req_011Cevzha5SQCgv5wfAGfWRs)
- [#94157](https://github.com/anthropics/claude-code/issues/94157) [Bug][cyber] Safeguard block triggered when proceeding with defensive code fix commits (req_011CevwSkmrVfQrLBLcGQ8pK)
- [#94156](https://github.com/anthropics/claude-code/issues/94156) [Bug][cyber] Safeguard false positive while linting embedded firmware before hardware flashing (req_011CevwJMC3ng8DapcoMg19x)
- [#94146](https://github.com/anthropics/claude-code/issues/94146) [Bug][cyber] Safeguard false positive during multi-agent catalog integration and test execution (req_011Ceb2hTtXGBoc74Vj2JdJb)
- [#94155](https://github.com/anthropics/claude-code/issues/94155) [Bug][cyber] Safeguard blocks routine code linting and static checks following bug fixes (req_011CevwEvSSckweF2tYpVCQ2)
- [#94154](https://github.com/anthropics/claude-code/issues/94154) [Bug][cyber] Broad safety block triggers on frustrated prompt during wireless audit tool comparison (req_011CevcD4y8ejzWS1pFXtGCA)
- [#94153](https://github.com/anthropics/claude-code/issues/94153) [Bug][cyber] Safeguard blocks session when locating custom Wi-Fi audit firmware source files (req_011CevbyncmVid6NhDXAwkjM)
- [#94152](https://github.com/anthropics/claude-code/issues/94152) [Bug][cyber] Blocked while comparing local devboard firmware and app features to upstream (req_011CevbeTcjaWwXezrV81Jdj)
- [#94150](https://github.com/anthropics/claude-code/issues/94150) [Bug][cyber] Safeguard blocks comparing features between custom and vendor devboard firmware (req_011CevbaeoKqeg7N7VJHpnmx)
- [#94148](https://github.com/anthropics/claude-code/issues/94148) [Bug][cyber] Safeguard block triggered while monitoring multi-agent background task status (req_011Ceb2obJgLWGbKyryktvwg)
- [#94147](https://github.com/anthropics/claude-code/issues/94147) [Bug][cyber] Safeguard false positive during unit test execution and agent coordination (req_011Ceb2jXkW8aJKgqka1axbt)
- [#94144](https://github.com/anthropics/claude-code/issues/94144) [Bug][cyber] Block on UI element positioning and remote repository creation (req_011CeaxBREUkw85gXRU8ehUc)
- [#94143](https://github.com/anthropics/claude-code/issues/94143) [Bug][cyber] False positive during UI layout stabilization and repository code push (req_011Ceax8nT6V727pzG1RwfBE)
- [#94142](https://github.com/anthropics/claude-code/issues/94142) [Bug][cyber] Safeguard flagged embedded Linux image compilation and power wake verification (req_011CeuLZUipinBBsYf4Rrcj7)
- [#94139](https://github.com/anthropics/claude-code/issues/94139) [Bug][cyber] Safeguard falsely flags 3D printer filament slot configuration in desktop software (req_011CeuCqPN87K36F2U1sLBKT)
- [#94137](https://github.com/anthropics/claude-code/issues/94137) [Bug][cyber] Safeguards block Go build script review and cross-platform compilation setup (req_011Cee4NU8sNkTuk7ufxvAZ3)
- [#94136](https://github.com/anthropics/claude-code/issues/94136) [Bug][cyber] Safeguard blocks updating test files and mock data to compliant terminology (req_011Cee2gvVQWdHxV3xD6cfP3)
- [#94158](https://github.com/anthropics/claude-code/issues/94158) [Bug][cyber] False positive on request to resolve local DNS blocks during firmware setup (req_011CevzLiSPUQEffsN5N8GV9)
- [#94149](https://github.com/anthropics/claude-code/issues/94149) [Bug][cyber] Safeguard triggered during Active Directory Certificate Services lookup (req_011Ceb5gS2yXvBH1GAfhP99E)
- [#94145](https://github.com/anthropics/claude-code/issues/94145) [Bug][cyber] Safeguard flags request to lock UI layout elements and push code to Git repo (req_011CeaxCwqGZMEv3QejWvejY)
- [#94141](https://github.com/anthropics/claude-code/issues/94141) [Bug][cyber] Safeguard blocks key search in local backup files during server hardening (req_011Cee7AHGXtVQZiuJM3PVLb)
- [#94140](https://github.com/anthropics/claude-code/issues/94140) [Bug][cyber] Safeguard blocks local TLS certificate setup using DNS API credentials (req_011CeuEcqg2j7eowE52kqzVD)
- [#94138](https://github.com/anthropics/claude-code/issues/94138) [Bug][cyber] False positive on repository documentation and example deployment scripts (req_011Cee4NcsVKk3TReEc7ZbFP)

### OpenAI Codex (`openai/codex`)

**Stars:** 135,911 · **Open issues:** 27,999 · **Last push:** <1h ago

In the last 24 hours, OpenAI Codex released version 0.171.0, which introduced new features such as the addition of GPT-6.2 Sol and Astra to the model catalogs, with Sol set as the default, and enabled the TUI workspace by default, enhancing user experience with searchable document previews and image previews. Other notable updates included versions 0.173.0-alpha.1 and 0.172.0-alpha.2, alongside the recent alpha release 0.171.0-alpha.13.1. Key merged features included adding thread and child retention policies (#62654) and returning file sizes from `fs/getMetadata` (#62653), which improve overall functionality and usability. Among the new issues reported, #62666 stands out as critical, highlighting that Codex Desktop is freezing users' computers due to uncontrolled background Git operations.

#### 🚀 New Releases
- [rust-v0.173.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.173.0-alpha.1) 0.173.0-alpha.1
- [rust-v0.171.0](https://github.com/openai/codex/releases/tag/rust-v0.171.0) 0.171.0
- [rust-v0.172.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.172.0-alpha.2) 0.172.0-alpha.2
- [rust-v0.171.0-alpha.13.1](https://github.com/openai/codex/releases/tag/rust-v0.171.0-alpha.13.1) 0.171.0-alpha.13.1

#### ✅ Merged PRs
- [#62654](https://github.com/openai/codex/pull/62654) Add thread and child retention policies for injected items
- [#62653](https://github.com/openai/codex/pull/62653) Return file sizes from `fs/getMetadata`
- [#62648](https://github.com/openai/codex/pull/62648) Fix standalone release pruning on macOS with GNU coreutils
- [#62644](https://github.com/openai/codex/pull/62644) Pass inherited history visibility to the thread store
- [#62643](https://github.com/openai/codex/pull/62643) Shrink npm release tarballs with libdeflate
- [#62642](https://github.com/openai/codex/pull/62642) Hide the warning navigation hint for a single warning
- [#62641](https://github.com/openai/codex/pull/62641) Release persisted MCP tool results from active-turn memory
- [#62640](https://github.com/openai/codex/pull/62640) Reuse executor Discovery V2 inventories across turns
- [#62639](https://github.com/openai/codex/pull/62639) Defer queue-only mail after a retained final answer
- [#62637](https://github.com/openai/codex/pull/62637) Add center and end alignment to status line rows
- [#62636](https://github.com/openai/codex/pull/62636) Reduce rollout scanning overhead when listing threads
- [#62635](https://github.com/openai/codex/pull/62635) Centralize request and prefix ID handling in `ThreadContextIds`
- [#62633](https://github.com/openai/codex/pull/62633) Centralize thread context ID allocation
- [#62627](https://github.com/openai/codex/pull/62627) Retry Guardian model discovery in the background
- [#62624](https://github.com/openai/codex/pull/62624) Share slash command argument range mapping in the TUI
- [#62621](https://github.com/openai/codex/pull/62621) Handle rollout budget decisions in each accounting path
- [#62615](https://github.com/openai/codex/pull/62615) Split in-memory execution policy rules into a separate crate
- [#62614](https://github.com/openai/codex/pull/62614) Refresh Guardian policy on config reload and account changes
- [#62610](https://github.com/openai/codex/pull/62610) Refresh plugin recommendations after installed state changes
- [#62609](https://github.com/openai/codex/pull/62609) Apply backpressure to app-server request replay on thread resume
- [#62607](https://github.com/openai/codex/pull/62607) Enable Guardian V2 scoring with an explicit Guardian provider
- [#62604](https://github.com/openai/codex/pull/62604) Expose current turn admission state on `CodexThread`
- [#62602](https://github.com/openai/codex/pull/62602) Apply additional context when turn input is delivered
- [#62601](https://github.com/openai/codex/pull/62601) Retry transient exec-server connection failures
- [#62599](https://github.com/openai/codex/pull/62599) Stream app-server `fs/readFile` responses over stdio
- [#62593](https://github.com/openai/codex/pull/62593) Explain Windows sandbox logon policy failures
- [#62589](https://github.com/openai/codex/pull/62589) Remove cumulative MCP attribution from requests and rollouts
- [#62588](https://github.com/openai/codex/pull/62588) Support a host-selected inference provider for Guardian
- [#62587](https://github.com/openai/codex/pull/62587) Centralize schema selection for config diagnostics
- [#62585](https://github.com/openai/codex/pull/62585) Enforce refreshed Guardian policy on running threads
- [#62583](https://github.com/openai/codex/pull/62583) Refresh open sidebar file previews when files change
- [#62582](https://github.com/openai/codex/pull/62582) Allow macOS installer cleanup despite unrelated mount warnings
- [#62577](https://github.com/openai/codex/pull/62577) Render LaTeX underbraces in TUI display math
- [#62573](https://github.com/openai/codex/pull/62573) Use the cloud emoji for cloud thread labels
- [#62571](https://github.com/openai/codex/pull/62571) Keep async Guardian scoring active for serving probes
- [#62569](https://github.com/openai/codex/pull/62569) Add justification to custom statusline rows
- [#62568](https://github.com/openai/codex/pull/62568) Box the managed credential loading future
- [#62567](https://github.com/openai/codex/pull/62567) Add OpenTelemetry for subagent lifecycles
- [#62566](https://github.com/openai/codex/pull/62566) Remove the real-time wait from the OTLP headers helper timeout test
- [#62564](https://github.com/openai/codex/pull/62564) Fix timing races in core integration tests
- [#62560](https://github.com/openai/codex/pull/62560) Document how to render TUI shortcut labels
- [#62559](https://github.com/openai/codex/pull/62559) Reject overflowing rollout budget charges before posting
- [#62558](https://github.com/openai/codex/pull/62558) Stage ICU data for mksnapshot in rusty_v8 builds
- [#62557](https://github.com/openai/codex/pull/62557) Preserve process state across concurrent unified exec updates
- [#62554](https://github.com/openai/codex/pull/62554) Render `\widetilde` in terminal Markdown math
- [#62552](https://github.com/openai/codex/pull/62552) Enable MCP connection sharing by default
- [#62550](https://github.com/openai/codex/pull/62550) Render multiline Mermaid flowchart edge labels
- [#62547](https://github.com/openai/codex/pull/62547) Prevent remote app-server shutdown from hanging on a full queue

#### 🐛 New Issues
- [#62663](https://github.com/openai/codex/issues/62663) Windows 11 25H2: connected Dot cannot create a native local Codex task `bug` `windows-os` `app` `dots` 💬2
- [#62467](https://github.com/openai/codex/issues/62467) GPT-6.2 Sol cannot use GPT-6 Luna as a subagent model `bug` `subagent` 💬1
- [#62666](https://github.com/openai/codex/issues/62666) [Critical] Codex Desktop repeatedly freezes my computer with uncontrolled background Git operations — why is this still not fixed? `bug` `app` `session` `performance` 💬1
- [#62665](https://github.com/openai/codex/issues/62665) Goal mode sends `function_call_output` input item without required `call_id`, breaking custom Responses API providers `bug` `CLI` `custom-model` `tool-calls` 💬1
- [#62629](https://github.com/openai/codex/issues/62629) Custom MCP status line stops polling after a read timeout `bug` `windows-os` `mcp` `TUI` 💬1
- [#62646](https://github.com/openai/codex/issues/62646) [macOS][Dots] Delegated Codex task waits overnight for local approvals without an actionable status in Dot `bug` `sandbox` `app` `dots` 💬1
- [#62650](https://github.com/openai/codex/issues/62650) [macOS] Codex App 26.1117.31558 crashes on launch with Cindori Backdrop wallpaper `bug` `app`
- [#62645](https://github.com/openai/codex/issues/62645) Codex should assess feasibility before coding to prevent wasted tokens and misleading success reports `enhancement` `model-behavior` `app` 💬1
- [#62664](https://github.com/openai/codex/issues/62664) Voice call briefly switches to a different voice mid-sentence then returns `bug` `dots`
- [#62443](https://github.com/openai/codex/issues/62443) CLI 0.170.0 TUI duplicates a streamed assistant message when a non-command tool interleaves before item completion `bug` `TUI` `CLI`
- [#62662](https://github.com/openai/codex/issues/62662) [Windows Desktop] Worktree creation hangs forever at checking-out-files stage: AGENTS.override.md scan follows pnpm junction chains in git ls-files --ignored `bug` `windows-os` `app` `performance`
- [#62660](https://github.com/openai/codex/issues/62660) `list_cloud_environments` returns the desktop account’s environments in an SSH remote thread that uses a different account `bug` `auth` `tool-calls` `app`
- [#62659](https://github.com/openai/codex/issues/62659) HTTP/2 CONNECT relay drops client uploads after the peer half-closes `bug` `connectivity` `remote`
- [#62657](https://github.com/openai/codex/issues/62657) An empty realtime handoff can associate the next turn with an earlier voice session `bug` `session`
- [#62658](https://github.com/openai/codex/issues/62658) Codex Apps still shares tool definitions after `cacheable: false` `bug` `mcp`
- [#62656](https://github.com/openai/codex/issues/62656) A delayed Goal update can steer a turn after the Goal is complete `bug` `app-server`
- [#62655](https://github.com/openai/codex/issues/62655) Selected remote environment can miss a disconnect during thread startup `bug` `connectivity` `app-server` `remote`
- [#62652](https://github.com/openai/codex/issues/62652) [macOS/iOS] Existing Desktop pairing hides the CLI connection when pairing via /rc `bug` `CLI` `remote`
- [#62651](https://github.com/openai/codex/issues/62651) Proposal: an Agent Shield — a standing authority record and a PERMIT/PAUSE/BLOCK gate (arising from #59060) `enhancement` `agent`
- [#62649](https://github.com/openai/codex/issues/62649) TUI: side thread from thread/fork accepts turns, then cannot resume live because no rollout exists `bug` `TUI` `CLI` `app-server`
- [#62647](https://github.com/openai/codex/issues/62647) [Dots] Cloud workspace DNS resolution failure and no verified native callback from an existing local Codex session `bug` `connectivity` `dots`
- [#62638](https://github.com/openai/codex/issues/62638) [Windows] GPT-6.2 Astra and Sol cap at 828,400 effective tokens despite documented 1M context `bug` `windows-os` `context` `app`

#### 🔒 Closed Issues
- [#13671](https://github.com/openai/codex/issues/13671) Japanese localization swaps "Staged" and "Unstaged" labels in the diff scope selector
- [#13672](https://github.com/openai/codex/issues/13672) Japanese localization makes the "Revert all" and "Stage all" action buttons oversized

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 108,946 · **Open issues:** 725 · **Last push:** 2h ago

On November 20, 2026, Gemini CLI released v0.71.0-nightly.20261120.gd4cb1713f, which includes a fix for preserving literal `$` characters during template placeholder replacements, and a new `/stats heatmap` subcommand for tracking daily token usage. The release v0.71.0-preview.0 was also published, featuring updates such as changelogs for previous versions. Among the merged pull requests, significant fixes include handling nested `.gitignore` negations under `dir/**` patterns and asynchronously parsing PowerShell commands to avoid UI freezes. Additionally, a new issue was raised regarding the MCP server-level trust that silently approves all future tools from a trusted server, which lacks first-seen confirmation.

#### 🚀 New Releases
- [v0.71.0-nightly.20261120.gd4cb1713f](https://github.com/google-gemini/gemini-cli/releases/tag/v0.71.0-nightly.20261120.gd4cb1713f) Release v0.71.0-nightly.20261120.gd4cb1713f
- [v0.71.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.71.0-preview.0) Release v0.71.0-preview.0
- [v0.70.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.70.0) Release v0.70.0

#### ✅ Merged PRs
- [#30370](https://github.com/google-gemini/gemini-cli/pull/30370) fix(core): handle nested .gitignore negations under dir/** patterns
- [#30380](https://github.com/google-gemini/gemini-cli/pull/30380) Changelog for v0.70.0
- [#30319](https://github.com/google-gemini/gemini-cli/pull/30319) chore(gcp): push development worker to private artifact registry
- [#30334](https://github.com/google-gemini/gemini-cli/pull/30334) fix(core,cli): parse PowerShell commands asynchronously to prevent UI spinner freeze
- [#30365](https://github.com/google-gemini/gemini-cli/pull/30365) Changelog for v0.69.0
- [#30366](https://github.com/google-gemini/gemini-cli/pull/30366) chore(release): bump version to 0.71.0-nightly.20261118.g615d6bc8c
- [#30361](https://github.com/google-gemini/gemini-cli/pull/30361) Changelog for v0.70.0-preview.0

#### 🐛 New Issues
- [#30369](https://github.com/google-gemini/gemini-cli/issues/30369) MCP server-level trust silently approves all future tools from a trusted server (no first-seen confirmation) `status/need-triage` 💬2

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,437 · **Open issues:** 2,186 · **Last push:** 10h ago

On November 20, 2026, GitHub Copilot CLI released version 1.0.115-1, which addresses an issue where MCP sign-in could proceed without a crucial refresh-token scope and improves the execution process by ensuring direct workflow execution waits for project extension workflows to register. The previous version, 1.0.115-0, included general fixes and changes but did not introduce any significant new features or pull requests. Notably, several new issues were opened, with #5525 highlighting a problem where Windows MCP authentication fails for guest-tenant resources despite the correct tenant being discovered. Other emerging issues include #5527 regarding runtime inconsistencies and #5530, where device login flow leads to indefinite waiting. Overall, while the day involved more routine maintenance, these new issues indicate areas that could benefit from further attention and resolution.

#### 🚀 New Releases
- [v1.0.115-1](https://github.com/github/copilot-cli/releases/tag/v1.0.115-1) 1.0.115-1
- [v1.0.115-0](https://github.com/github/copilot-cli/releases/tag/v1.0.115-0) 1.0.115-0

#### 🐛 New Issues
- [#5527](https://github.com/github/copilot-cli/issues/5527) Gemini 4 Hydrogen / Neon: runtime strips xhigh from supportedReasoningEfforts despite CAPI advertising it `triage`
- [#5519](https://github.com/github/copilot-cli/issues/5519) Latest version / version higher than 1.0.107 breaks BYOK 💬1
- [#5534](https://github.com/github/copilot-cli/issues/5534) Multiline Comments on /diff `triage`
- [#5533](https://github.com/github/copilot-cli/issues/5533) Scrolled-up timeline jumps forward as output arrives `triage`
- [#5532](https://github.com/github/copilot-cli/issues/5532) showReasoning setting doesn't work for Gemini models `triage`
- [#5531](https://github.com/github/copilot-cli/issues/5531) Auto-collapse each "Thought for…" block when thinking finishes `triage`
- [#5530](https://github.com/github/copilot-cli/issues/5530) Hidden action on device login flow - the agent is waiting forever `triage`
- [#5529](https://github.com/github/copilot-cli/issues/5529) Surface 'user action needed' prompts outside collapsed tool-output blocks `triage`
- [#5528](https://github.com/github/copilot-cli/issues/5528) Remote control: sessions are read-only on GitHub Mobile/web since legacy remote steering was removed (1.0.110) `triage`
- [#5526](https://github.com/github/copilot-cli/issues/5526) Prompt cache expires during synchronous `task` sub-agent runs on `gemini-4-carbon` (94% miss rate / 20x input cost penalty on resume) `triage`
- [#5525](https://github.com/github/copilot-cli/issues/5525) Windows MCP authentication fails for guest-tenant resources despite discovering the correct tenant `triage`
- [#5524](https://github.com/github/copilot-cli/issues/5524) MCP: dynamic headers helper for remote MCP servers (parity with Claude Code `headersHelper`) `triage`
- [#5523](https://github.com/github/copilot-cli/issues/5523) Please verify the Github Copilot CLI Entra App `triage`
- [#5522](https://github.com/github/copilot-cli/issues/5522) Hook for user-invoked skills (slash commands), or a matcher on `userPromptTransformed` `triage`
- [#5521](https://github.com/github/copilot-cli/issues/5521) Linux: Perforce depot wildcards are misclassified as UNC paths and blocked by content exclusion `triage`
- [#5520](https://github.com/github/copilot-cli/issues/5520) Extension host hangs forever in `process.exit` after app quit (macOS): orphan keeps its listening port `triage`
- [#5518](https://github.com/github/copilot-cli/issues/5518) Gemini 4 Neon and Hydrogen: Usage records report medium for xhigh task requests `triage`

#### 🔒 Closed Issues
- [#4017](https://github.com/github/copilot-cli/issues/4017) MCP OAuth (Copilot Desktop app): non-first-party HTTP servers cancel host-token then never launch the "runtime browser flow" they deferred to — no auth, no error, no popup
- [#4298](https://github.com/github/copilot-cli/issues/4298) Bug/Feat: Sandbox config to selectively enable tools
- [#4972](https://github.com/github/copilot-cli/issues/4972) Windows: MCP worker survives exit when launched through a wrapper
- [#5350](https://github.com/github/copilot-cli/issues/5350) MCP OAuth (interactive): authorization code is received and the success page is served, but the code->token exchange never runs — server stuck "Connecting"
- [#4886](https://github.com/github/copilot-cli/issues/4886) `--plugin-dir` skills load but are omitted from `/skills` and `/env`
- [#3150](https://github.com/github/copilot-cli/issues/3150) Edit file diff panel covers previous assistant output, blocking review before approval
- [#4424](https://github.com/github/copilot-cli/issues/4424) /compact cannot recover a session after the CAPI Responses payload reaches the 5 MB limit`
- [#3374](https://github.com/github/copilot-cli/issues/3374) Windows: Backspace in $EDITOR=vim.exe launched via Ctrl+G inserts ⌂ (0x7F) instead of deleting
- [#4371](https://github.com/github/copilot-cli/issues/4371) MCP OAuth 3LO (Authorization Code) fails with MCP error -32042: This request requires more information.
- [#5519](https://github.com/github/copilot-cli/issues/5519) Latest version / version higher than 1.0.107 breaks BYOK
- [#4690](https://github.com/github/copilot-cli/issues/4690) Adding agentic marketplace fails when marketplace repo has files with long paths
- [#2646](https://github.com/github/copilot-cli/issues/2646) Display underlying LLM model used by custom agents in UI

### OpenCode (`anomalyco/opencode`)

**Stars:** 228,075 · **Open issues:** 3,960 · **Last push:** <1h ago

On November 20, 2026, OpenCode did not release any new versions, but several significant features and fixes were merged. Highlights include the addition of Claude Agent usage control, enhancements for session management under the `configDir` setting, and the incorporation of signed-in browser panes for desktop with extensions. Notably, a fix was made to ensure compatibility with Office documents in Google Interactions, while another resolved issues with model ID renaming. Among new issues, the report of "Beam Free is not smart" has emerged as a point of interest, attracting user attention.

#### ✅ Merged PRs
- [#64779](https://github.com/anomalyco/opencode/pull/64779) refactor(app): upload attachments through the generated client
- [#65055](https://github.com/anomalyco/opencode/pull/65055) chore(protocol): regenerate the OpenAPI document
- [#65034](https://github.com/anomalyco/opencode/pull/65034) fix(core): use <system-update> for instruction updates in every prompt
- [#65035](https://github.com/anomalyco/opencode/pull/65035) feat(core): add Claude Agent usage control
- [#62514](https://github.com/anomalyco/opencode/pull/62514) feat(core): add a `configDir` setting to the Claude Agent provider
- [#63002](https://github.com/anomalyco/opencode/pull/63002) feat(desktop): signed-in browser pane with extensions, previews, prompts and agent safeguards
- [#65033](https://github.com/anomalyco/opencode/pull/65033) refactor(core): drop the extra-usage hint from Claude Agent billing errors
- [#65032](https://github.com/anomalyco/opencode/pull/65032) fix(core): keep every listed Claude model ID working when Claude Code renames a model
- [#65003](https://github.com/anomalyco/opencode/pull/65003) feat(core): use models.dev's recommended API behind a flag
- [#65039](https://github.com/anomalyco/opencode/pull/65039) feat(core): write assistant parts as session_part rows by default
- [#65037](https://github.com/anomalyco/opencode/pull/65037) fix(ai): accept Office documents on Google Interactions
- [#65038](https://github.com/anomalyco/opencode/pull/65038) fix(core): build Gemma 4 thinking variants on Interactions
- [#65036](https://github.com/anomalyco/opencode/pull/65036) fix(ai): pass safety settings on Google Interactions
- [#65026](https://github.com/anomalyco/opencode/pull/65026) feat(core): a machine path can start at the machine's home
- [#65022](https://github.com/anomalyco/opencode/pull/65022) fix(core): recover a machine filename with POSIX rules on a Windows server
- [#65019](https://github.com/anomalyco/opencode/pull/65019) feat(core): tell the model which machines it can reach
- [#65013](https://github.com/anomalyco/opencode/pull/65013) feat(core): machine names in paths
- [#65016](https://github.com/anomalyco/opencode/pull/65016) fix(core): label Claude Agent entry point

#### 🐛 New Issues
- [#65027](https://github.com/anomalyco/opencode/issues/65027) Beam Free is not smart `type/feature` `area/model-behavior` `inference/zen` `inference/go` 💬4
- [#64835](https://github.com/anomalyco/opencode/issues/64835) UNABLE_TO_GET_ISSUER_CERT on macOS 27 with complete, publicly-trusted cert chains (WoTrus/Sectigo R46) `type/bug` `area/network` `version/v2` `platform/macos` 💬4
- [#65044](https://github.com/anomalyco/opencode/issues/65044) install: staging dir under /tmp is invisible to confined curl (snap), and the exit 23 message blames disk space `type/bug` `status/repro-simulated` `area/install-upgrade` `version/v2` 💬3
- [#64967](https://github.com/anomalyco/opencode/issues/64967) openrouter (google/gemini-4-argon): runaway closing braces '}}}}...' at end of responses and before tool calls `type/bug` `area/model-behavior` `version/v2` `platform/linux` 💬3
- [#65008](https://github.com/anomalyco/opencode/issues/65008) Shell permission ask is skipped for PowerShell script invocation on Windows (OpenCode 2.3.0) `pending close` `triaging` `type/bug` `area/core` 💬3
- [#65015](https://github.com/anomalyco/opencode/issues/65015) plugins: git plugin install waits forever on a credential prompt in the background service, so no models load `type/bug` `status/repro-simulated` `area/plugins` `version/v2` 💬2
- [#64996](https://github.com/anomalyco/opencode/issues/64996) [FEATURE]: Let the claude-agent provider use Claude Code's built-in WebSearch `type/feature` `area/providers` `version/v2` 💬2
- [#64977](https://github.com/anomalyco/opencode/issues/64977) models: selecting an OpenCode model fails without an error `triaging` `type/bug` `area/providers` `version/v2` 💬2
- [#65040](https://github.com/anomalyco/opencode/issues/65040) 为啥免费模型不能用了 `type/bug` `area/providers` `inference/free-tier` 💬2
- [#65017](https://github.com/anomalyco/opencode/issues/65017) feat(core): add interactive pty tool for retained REPL, debugger, and EOF-driven terminal sessions `type/feature` `area/core` `version/v2` 💬2
- [#65057](https://github.com/anomalyco/opencode/issues/65057) desktop: session looks idle and shows no working indicator while a subagent is still running `type/bug` `area/desktop` `version/v2` `platform/macos` 💬1
- [#65058](https://github.com/anomalyco/opencode/issues/65058) desktop 2.x: git repositories with no commits collapse into the legacy global project after V1→V2 upgrade `type/bug` `area/sessions-storage` `version/v2` `platform/windows` 💬1
- [#65050](https://github.com/anomalyco/opencode/issues/65050) mcp: Microsoft Work IQ OAuth fails on Entra issuer template mismatch `type/bug` `area/mcp` `version/v2` `platform/windows` 💬1
- [#65047](https://github.com/anomalyco/opencode/issues/65047) execute tool hangs at "Running code..." when JS code calls an MCP tool (completion callback lost) `type/bug` `area/core` `version/v2` `platform/windows` 💬1
- [#65041](https://github.com/anomalyco/opencode/issues/65041) desktop: UI freezes after an agent automatically previews a CSV `type/bug` `area/desktop` `version/v2` `platform/windows` 💬1
- [#65029](https://github.com/anomalyco/opencode/issues/65029) Incorrect Daily Free Message Limit – Messages Exhausted Without Usage `type/bug` `area/tui` `inference/free-tier` 💬1
- [#65023](https://github.com/anomalyco/opencode/issues/65023) [FEATURE]: find sessions by session ID in the picker and /sessions <id> `type/feature` `area/tui` `version/v2` 💬1
- [#65021](https://github.com/anomalyco/opencode/issues/65021) sqlite: malformed database schema when reading copied opencode.db `triaging` `type/bug` `area/sessions-storage` `version/v2` 💬1
- [#65020](https://github.com/anomalyco/opencode/issues/65020) Concurrent `opencode run` processes fail mid-session with "Failed to execute statement" (SQLITE_BUSY not retried, no error code) `type/bug` `area/sessions-storage` `version/v2` `platform/linux` 💬1
- [#65018](https://github.com/anomalyco/opencode/issues/65018) feat(core): expose structured truncation counts and output file path in shell tool metadata `type/feature` `area/core` `version/v2` `platform/linux` 💬1
- [#65014](https://github.com/anomalyco/opencode/issues/65014) shell: background tasks cancelled on server restart (regression) `triaging` `type/bug` `area/core` `version/v2` 💬1
- [#65010](https://github.com/anomalyco/opencode/issues/65010) tui: /btw status and dialog do not sync across clients viewing the same session `type/feature` `area/tui` `version/v2` `platform/windows` 💬1
- [#65005](https://github.com/anomalyco/opencode/issues/65005) [FEATURE]: Edit/annotate pasted image attachments before sending `type/feature` `area/tui` `version/v2` 💬1
- [#65004](https://github.com/anomalyco/opencode/issues/65004) [FEATURE]: Make leader keybind sequences work with non-Latin keyboard layouts `type/feature` `area/tui` `version/v1` `platform/windows` 💬1
- [#64999](https://github.com/anomalyco/opencode/issues/64999) docs: "If no rule matches, OpenCode uses ask" contradicts the default allow-all base policy `type/bug` `status/repro-simulated` `area/core` `version/v2` 💬1

#### 🔒 Closed Issues
- [#61072](https://github.com/anomalyco/opencode/issues/61072) Claude Agent: 5-hour plan limit drains ~1.8x faster because the SDK labels requests sdk-ts
- [#63871](https://github.com/anomalyco/opencode/issues/63871) claude-agent: catch-up sends one block per part and misses the prompt cache
- [#60793](https://github.com/anomalyco/opencode/issues/60793) [FEATURE]: Claude Agent: configDir setting to use another Claude Code login
- [#59787](https://github.com/anomalyco/opencode/issues/59787) browser: add an API operation to close tabs
- [#55920](https://github.com/anomalyco/opencode/issues/55920) desktop(browser): website logins lost after closing and reopening tabs in 2.0.30
- [#53580](https://github.com/anomalyco/opencode/issues/53580) [FEATURE]: Import Chrome cookies and signed-in sessions into the built-in desktop browser
- [#64746](https://github.com/anomalyco/opencode/issues/64746) claude-agent: model list flips between `fable` and `claude-fable-5-2`, so sessions on the dropped id fail
- [#64996](https://github.com/anomalyco/opencode/issues/64996) [FEATURE]: Let the claude-agent provider use Claude Code's built-in WebSearch
- [#64977](https://github.com/anomalyco/opencode/issues/64977) models: selecting an OpenCode model fails without an error
- [#65040](https://github.com/anomalyco/opencode/issues/65040) 为啥免费模型不能用了
- [#56263](https://github.com/anomalyco/opencode/issues/56263) Desktop: allow trusted custom URL protocols (e.g. `obsidian://`) for chat links
- [#60152](https://github.com/anomalyco/opencode/issues/60152) [FEATURE]: Is there a way to clear the browser cache and refresh the page in the desktop app's browser?
- [#61625](https://github.com/anomalyco/opencode/issues/61625) browser: preview returns success for paths that don't exist or resolve only against another repo
- [#61238](https://github.com/anomalyco/opencode/issues/61238) Subagents inherit the Desktop browser grant but can't use the parent's attachment
- [#55730](https://github.com/anomalyco/opencode/issues/55730) Remove Electron token from built-in browser user agent
- [#65058](https://github.com/anomalyco/opencode/issues/65058) desktop 2.x: git repositories with no commits collapse into the legacy global project after V1→V2 upgrade
- [#65050](https://github.com/anomalyco/opencode/issues/65050) mcp: Microsoft Work IQ OAuth fails on Entra issuer template mismatch
- [#65047](https://github.com/anomalyco/opencode/issues/65047) execute tool hangs at "Running code..." when JS code calls an MCP tool (completion callback lost)
- [#57708](https://github.com/anomalyco/opencode/issues/57708) [FEATURE]: Open local HTML previews in Chrome on macOS
- [#63278](https://github.com/anomalyco/opencode/issues/63278) desktop: the browser page paints over the chat column when the pane moves without resizing
- [#55795](https://github.com/anomalyco/opencode/issues/55795) browser: sessions with no current attachment get a 'will not help' error, and browser.tabs.list throws it too
- [#64217](https://github.com/anomalyco/opencode/issues/64217) desktop(browser): default snapshot depth 8 and find hide most element refs on real pages
- [#61609](https://github.com/anomalyco/opencode/issues/61609) browser tools stay listed after a hard restart leaves a stale session grant
- [#65029](https://github.com/anomalyco/opencode/issues/65029) Incorrect Daily Free Message Limit – Messages Exhausted Without Usage
- [#65004](https://github.com/anomalyco/opencode/issues/65004) [FEATURE]: Make leader keybind sequences work with non-Latin keyboard layouts

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 30,794 · **Open issues:** 2,492 · **Last push:** <1h ago

On November 20, 2026, there were no new releases for Qwen Code, but several important changes were made with merged pull requests. Notably, PR #17842 addressed session history loading by allowing drafting in the web shell, while PR #17869 updated the documentation for the managed agent, adding a Phase 3 seal-time wake stamp addendum. Significant fixes included PR #17803, which preserved tool-reported failure content, and PR #17824, which improved end-to-end testing for fixture ownership cases. Among new issues, #17874 highlighted a main CI failure related to workspace settings, reflecting ongoing challenges with code stability.

#### ✅ Merged PRs
- [#17842](https://github.com/QwenLM/qwen-code/pull/17842) fix(web-shell): allow drafting while session history loads
- [#17594](https://github.com/QwenLM/qwen-code/pull/17594) fix(managed-agent): close six deferred loop review pins
- [#17803](https://github.com/QwenLM/qwen-code/pull/17803) fix(core): preserve tool-reported failure content
- [#17824](https://github.com/QwenLM/qwen-code/pull/17824) test(web-shell): pin value and content in the e2e fixture-ownership cases
- [#17869](https://github.com/QwenLM/qwen-code/pull/17869) docs(managed-agent): add Phase 3 seal-time wake stamp addendum

#### 🐛 New Issues
- [#17874](https://github.com/QwenLM/qwen-code/issues/17874) Main CI failed: Qwen Code CI — src/serve/routes/workspace-settings-i18n.test.ts > … > every served setting has label and description entries `status/needs-triage` `type/bug` 💬6
- [#17834](https://github.com/QwenLM/qwen-code/issues/17834) deflake: packages/channels/dingtalk/src/managed-dingtalk-adapter.test.ts › managed DingTalk adapter outbox > keeps the recent window loadable at the shared cap (R2-1) `priority/P2` `type/bug` `category/development` `scope/testing` 💬4
- [#17884](https://github.com/QwenLM/qwen-code/issues/17884) deflake: packages/web-shell/client/e2e/chat-transcript-document.test.ts › ExportTranscriptDocument browser gate > opens, searches, copies, and prints the maximum document with its pinned npm runtime `priority/P3` `type/bug` `category/development` `scope/testing` 💬3
- [#17859](https://github.com/QwenLM/qwen-code/issues/17859) [Web Shell] iOS Safari keyboard covers Send on the welcome screen `priority/P2` `type/bug` `category/ui` `category/platform` 💬3
- [#17851](https://github.com/QwenLM/qwen-code/issues/17851) Main CI failed: Managed Agent full tier — Hosted failover E2E --big-output second-turn runtime_preparation_timeout (chronic since >=2026-11-11) `priority/P1` `type/bug` `scope/ci-cd` `area: managed` 💬3
- [#17813](https://github.com/QwenLM/qwen-code/issues/17813) feat(managed-agent): H5e card follow-ups — live-tenant smoke, other providers, read-model metadata, streaming, group cards `priority/P2` `type/feature-request` `category/core` `scope/session-management` 💬3
- [#17854](https://github.com/QwenLM/qwen-code/issues/17854) AUTO mode: server-level MCP trust bypasses the LLM classifier entirely — newly added tools from a trusted server execute with zero review `priority/P1` `type/bug` `category/security` `scope/mcp` 💬3
- [#17791](https://github.com/QwenLM/qwen-code/issues/17791) web-shell activity E2E: priority order and unread-clear cases fail intermittently at file scope, pass in isolation `priority/P2` `type/bug` `category/development` `scope/testing` 💬3
- [#17832](https://github.com/QwenLM/qwen-code/issues/17832) MCP: a server that is still connecting is reported as failed, and tools that arrive later never reach the model `priority/P2` `type/bug` `category/core` `scope/mcp` 💬3
- [#17889](https://github.com/QwenLM/qwen-code/issues/17889) bug(serve): transcript pagination reparses the full JSONL on every request — limit=1 costs the same as limit=500 and stalls the whole event loop `priority/P1` `type/bug` `category/performance` `scope/session-management` 💬2
- [#17885](https://github.com/QwenLM/qwen-code/issues/17885) windows-latest Java lane red since a27b12becf (#17478): a 32780-char capture payload goes through argv, over the Windows 32767 limit `priority/P2` `type/bug` `category/development` `scope/windows` 💬2
- [#17888](https://github.com/QwenLM/qwen-code/issues/17888) bug(serve): no memory metrics, and every workspace runtime stays resident — the daemon is always the OOM killer's first pick `priority/P2` `type/feature-request` `category/performance` `scope/memory-usage` 💬2
- [#17880](https://github.com/QwenLM/qwen-code/issues/17880) ci: replace remaining qwen-code-ci-bot references in precheck and release sync `priority/P3` `type/bug` `category/development` `scope/ci-cd` 💬2
- [#17872](https://github.com/QwenLM/qwen-code/issues/17872) Python SDK: preserve captured close errors across later control calls `priority/P3` `type/bug` `scope/sdk` 💬2
- [#17868](https://github.com/QwenLM/qwen-code/issues/17868) i18n(ru): align timeout spelling and vision-bridge terminology across the whole locale `priority/P3` `type/feature-request` `category/ui` `scope/web-shell` 💬2
- [#17870](https://github.com/QwenLM/qwen-code/issues/17870) Tool images arrive as text; @2x.png attach fails `priority/P2` `type/bug` `category/core` `scope/interactive` 💬2
- [#17861](https://github.com/QwenLM/qwen-code/issues/17861) docs/design: lint-static-ecs-routing design doc does not mention canonical_repo, trusted_author, or the ephemeral pool `priority/P3` `type/documentation` `category/development` `scope/ci-cd` 💬2
- [#17860](https://github.com/QwenLM/qwen-code/issues/17860) ci-runner-routing: pin fork push and merge_group routing in the suite `priority/P2` `category/development` `scope/testing` `scope/ci-cd` 💬2
- [#17852](https://github.com/QwenLM/qwen-code/issues/17852) Follow up on JSONL append diagnostics and platform coverage for #17771 `priority/P3` `type/feature-request` `category/core` `scope/session-management` 💬2
- [#17898](https://github.com/QwenLM/qwen-code/issues/17898) Release Failed for v0.28.0-nightly.20261119.f8d4f706ea on 2026-11-20 `type/bug` `status/ready-for-agent` `autofix/skip` `autofix/in-progress` 💬1
- [#17882](https://github.com/QwenLM/qwen-code/issues/17882) Release Failed for v0.28.0-nightly.20261119.f8d4f706ea on 2026-11-19 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#17877](https://github.com/QwenLM/qwen-code/issues/17877) Main CI failed: Qwen Code CI — src/i18n/mustTranslateKeys.test.ts > … > covers every English locale key in ru `status/needs-triage` `type/bug`
- [#17849](https://github.com/QwenLM/qwen-code/issues/17849) Main CI failed: Qwen Code CI — src/serve/managed-external-publication.test.ts > … > revives a lapsed channel on the owning dispatch's re-beg… `status/needs-triage` `type/bug`

#### 🔒 Closed Issues
- [#14507](https://github.com/QwenLM/qwen-code/issues/14507) Feature Request: a supported way to enable LSP in the Qwen Code Desktop client
- [#17452](https://github.com/QwenLM/qwen-code/issues/17452) Web Shell: markdown image with a local filesystem path renders as broken placeholder, no fallback

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

**Stars:** 394,846 · **Open issues:** 8,522 · **Last push:** <1h ago

On November 20, 2026, OpenClaw released version 2026.11.10-beta.1, which introduces major highlights such as the ability to add agents directly from ClawHub packages using a single CLAW.md manifest and an OpenClaw ID feature that enhances node connectivity through the ID tunnel. Additionally, version 2026.11.6 was released, offering smoother upgrades and more resilient conversation management during configuration edits. Among the significant merged pull requests, improvements include enhanced chat image presentation and the ability to preview templates without expanding their file structures. However, a notable new issue was reported regarding the prompt cache being invalidated during session churn, which could affect the overall user experience.

#### 🚀 New Releases
- [v2026.11.10-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.11.10-beta.1) openclaw 2026.11.10-beta.1
- [v2026.11.6](https://github.com/openclaw/openclaw/releases/tag/v2026.11.6) openclaw 2026.11.6

#### ✅ Merged PRs
- [#199743](https://github.com/openclaw/openclaw/pull/199743) fix(gateway): refresh native command channels when their registry is replaced
- [#202221](https://github.com/openclaw/openclaw/pull/202221) docs: update the verified 11.5 PR and contributor counts
- [#202204](https://github.com/openclaw/openclaw/pull/202204) fix(worktrees): keep completed chat sessions' worktrees for the idle window
- [#202207](https://github.com/openclaw/openclaw/pull/202207) fix(models): stop recommending superseded Kimi K3
- [#201435](https://github.com/openclaw/openclaw/pull/201435) improve: show viewed images together in chat
- [#202198](https://github.com/openclaw/openclaw/pull/202198) test: follow Template previews into the review dialog
- [#202200](https://github.com/openclaw/openclaw/pull/202200) fix(test): plan quiet automation before creating it
- [#202177](https://github.com/openclaw/openclaw/pull/202177) fix: preserve foreground exec output
- [#202139](https://github.com/openclaw/openclaw/pull/202139) fix: return a busy child's steering receipt at once
- [#201973](https://github.com/openclaw/openclaw/pull/201973) fix: Mattermost and Feishu render agent callback buttons, Mattermost taps arrive once
- [#202120](https://github.com/openclaw/openclaw/pull/202120) perf(templates): show the full category on View all without a second read
- [#202187](https://github.com/openclaw/openclaw/pull/202187) chore(i18n): refresh native locales
- [#202192](https://github.com/openclaw/openclaw/pull/202192) docs: remove the plus sign from the 11.5 release count
- [#202186](https://github.com/openclaw/openclaw/pull/202186) docs: add PR and contributor counts to the 11.5 release notes
- [#202174](https://github.com/openclaw/openclaw/pull/202174) fix: keep Doctor finding targets in upgrade failure reports
- [#202142](https://github.com/openclaw/openclaw/pull/202142) fix: stop automations posting a bare "Tool Call failed" after repeating their result
- [#202181](https://github.com/openclaw/openclaw/pull/202181) chore(ui): refresh control ui locales
- [#202131](https://github.com/openclaw/openclaw/pull/202131) test(ui): tolerate fractional chat card button geometry
- [#202145](https://github.com/openclaw/openclaw/pull/202145) fix: keep cold attachment preview loading from failing composer tests
- [#202168](https://github.com/openclaw/openclaw/pull/202168) fix: let Crabbox wrapper tests load native renderer assets
- [#202060](https://github.com/openclaw/openclaw/pull/202060) improve: preview a Template without expanding its files in chat
- [#202115](https://github.com/openclaw/openclaw/pull/202115) fix: show the right agent and live activity when adding a template
- [#202126](https://github.com/openclaw/openclaw/pull/202126) feat: show planned automations and their controls in chat
- [#200592](https://github.com/openclaw/openclaw/pull/200592) improve(ios): rebuild the chat transcript around the web reading model
- [#202018](https://github.com/openclaw/openclaw/pull/202018) fix: keep proxy-signed-in automations running after proxy settings change
- [#201913](https://github.com/openclaw/openclaw/pull/201913) docs: restore the OpenClaw 2026.11.5 release notes
- [#202106](https://github.com/openclaw/openclaw/pull/202106) fix(ci): match updater group build expectations
- [#202077](https://github.com/openclaw/openclaw/pull/202077) improve: show progress when creating a Template and keep the agent’s portrait
- [#202149](https://github.com/openclaw/openclaw/pull/202149) chore(ui): refresh control ui locales
- [#202019](https://github.com/openclaw/openclaw/pull/202019) fix: let setup use account models with a fresh catalog
- [#202144](https://github.com/openclaw/openclaw/pull/202144) fix(test): retain Doctor failure details in upgrade receipts
- [#201542](https://github.com/openclaw/openclaw/pull/201542) fix: show a plugin page that opens directly or after a reload
- [#202135](https://github.com/openclaw/openclaw/pull/202135) fix: reduce sidebar refresh work during session updates
- [#202136](https://github.com/openclaw/openclaw/pull/202136) improve(sessions): reduce stalls when reloading long chats
- [#201718](https://github.com/openclaw/openclaw/pull/201718) improve: browse Templates under Household and Entertainment instead of Personal
- [#202122](https://github.com/openclaw/openclaw/pull/202122) fix: reclaim stale scratch clones and Git repack leftovers
- [#202130](https://github.com/openclaw/openclaw/pull/202130) test: align prompt checks with owned scratch guidance
- [#202128](https://github.com/openclaw/openclaw/pull/202128) fix: stop worktree pack consolidation inflating delta storage
- [#202029](https://github.com/openclaw/openclaw/pull/202029) fix: preserve the real reason a worker failed
- [#202124](https://github.com/openclaw/openclaw/pull/202124) fix(android): nest child sessions under their parent in the sidebar
- [#202031](https://github.com/openclaw/openclaw/pull/202031) fix: prevent workspace Azure resource redirects
- [#202067](https://github.com/openclaw/openclaw/pull/202067) test(gateway): align approved writes with grant revocation
- [#202117](https://github.com/openclaw/openclaw/pull/202117) improve: reduce work when refreshing changed session rows
- [#190287](https://github.com/openclaw/openclaw/pull/190287) fix: send infer audio/video --model files only to the requested model
- [#202116](https://github.com/openclaw/openclaw/pull/202116) fix(test): retain rejected update step diagnostics
- [#202112](https://github.com/openclaw/openclaw/pull/202112) fix: greet new agent users in their selected language
- [#202113](https://github.com/openclaw/openclaw/pull/202113) Use Template icons for matching Plugin categories in Control UI
- [#201370](https://github.com/openclaw/openclaw/pull/201370) fix(setup): show why automatic setup could not activate a model
- [#202099](https://github.com/openclaw/openclaw/pull/202099) improve: reduce admission CPU for large shared-state reads
- [#202043](https://github.com/openclaw/openclaw/pull/202043) fix: show restore guidance for retired session worktree reviews
- [#202074](https://github.com/openclaw/openclaw/pull/202074) fix: keep agent temporary files in owned scratch
- [#202080](https://github.com/openclaw/openclaw/pull/202080) fix(gateway): record role assignments in change history
- [#199844](https://github.com/openclaw/openclaw/pull/199844) fix(state): name the state directory when it cannot be made private
- [#202082](https://github.com/openclaw/openclaw/pull/202082) fix: stop worktree maintenance duplicating shared Git packs
- [#202027](https://github.com/openclaw/openclaw/pull/202027) fix(test): mark packaged runtime compatibility fixtures
- [#202048](https://github.com/openclaw/openclaw/pull/202048) fix: ACP prompts that also deliver to a channel no longer hang without a reply
- [#201821](https://github.com/openclaw/openclaw/pull/201821) fix(cli): stop openclaw logs from printing raw JSON for blank lines
- [#201345](https://github.com/openclaw/openclaw/pull/201345) fix(doctor): heartbeat migration stuck after a full-disk archive write
- [#202011](https://github.com/openclaw/openclaw/pull/202011) feat: show what a template automation will do when you open its row
- [#202072](https://github.com/openclaw/openclaw/pull/202072) fix(approvals): record an approval route notice that could not be delivered
- [#202073](https://github.com/openclaw/openclaw/pull/202073) fix(ui): distinguish selected catalog filters from hover
- [#202014](https://github.com/openclaw/openclaw/pull/202014) fix(test): wait for queued heartbeat turns to settle
- [#201063](https://github.com/openclaw/openclaw/pull/201063) fix: let PostgreSQL Gateways start with plugin-backed secrets
- [#202061](https://github.com/openclaw/openclaw/pull/202061) improve: avoid scanning unrelated chats when refreshing session facts
- [#202050](https://github.com/openclaw/openclaw/pull/202050) fix: restore PostgreSQL model billing route warnings
- [#202068](https://github.com/openclaw/openclaw/pull/202068) fix(tests): stop waiting on removed workspace preparation
- [#201976](https://github.com/openclaw/openclaw/pull/201976) fix(plugins): Talk and plugin-loading requests fail with "must run in a worker" on PostgreSQL Gateways
- [#202063](https://github.com/openclaw/openclaw/pull/202063) improve: use less CPU when classifying session workspaces
- [#202064](https://github.com/openclaw/openclaw/pull/202064) fix(ci): retain failed update steps in survivor diagnostics
- [#202065](https://github.com/openclaw/openclaw/pull/202065) fix(android): let Back close the keyboard before leaving the screen
- [#202057](https://github.com/openclaw/openclaw/pull/202057) improve: make plugin and skill install cards more compact in chat
- [#202066](https://github.com/openclaw/openclaw/pull/202066) docs(gateway): describe restart wakes for background processes accurately
- [#202062](https://github.com/openclaw/openclaw/pull/202062) chore(ui): refresh control ui locales
- [#200521](https://github.com/openclaw/openclaw/pull/200521) fix(ios): show nested tool results in native chat
- [#202056](https://github.com/openclaw/openclaw/pull/202056) fix: keep Publish Template rows readable on hover
- [#189953](https://github.com/openclaw/openclaw/pull/189953) fix(cron): owner-targeted automation failure alerts go to the last chat, not the owner
- [#201901](https://github.com/openclaw/openclaw/pull/201901) fix: let source builds and Git updates finish on 8 GiB machines
- [#201972](https://github.com/openclaw/openclaw/pull/201972) fix: avoid rereading compacted history before replies
- [#202000](https://github.com/openclaw/openclaw/pull/202000) fix(gateway): settle a lost yielded child after restart so its parent wakes
- [#201970](https://github.com/openclaw/openclaw/pull/201970) fix(gateway): resume the true root after restart through visible spawned children
- [#202051](https://github.com/openclaw/openclaw/pull/202051) fix: link the Templates page to its guide
- [#202049](https://github.com/openclaw/openclaw/pull/202049) test(gateway): scope actor traces to active input staging
- [#202044](https://github.com/openclaw/openclaw/pull/202044) fix(gateway): resume a root whose yield source was lost instead of failing it
- [#201962](https://github.com/openclaw/openclaw/pull/201962) test(cron): separate activity recaps from ownership proof
- [#201952](https://github.com/openclaw/openclaw/pull/201952) fix(test): retain standalone declaration fixtures after cleanup failure
- [#196907](https://github.com/openclaw/openclaw/pull/196907) fix(agents): node tools with an unverified plugin owner can pass plugin-ID tool policy
- [#136506](https://github.com/openclaw/openclaw/pull/136506) fix(voice-call): bind realtime streams to signed calls
- [#202015](https://github.com/openclaw/openclaw/pull/202015) perf(agents): prepare skill read attribution per snapshot
- [#201956](https://github.com/openclaw/openclaw/pull/201956) test(update): add a Git release upgrade-survivor scenario
- [#202009](https://github.com/openclaw/openclaw/pull/202009) test(ui): wait for removed provider catalog settlement
- [#201897](https://github.com/openclaw/openclaw/pull/201897) fix: keep Auto Review timeouts from hiding reviewer results
- [#201652](https://github.com/openclaw/openclaw/pull/201652) improve: show plugin names and icons in Template contents without source labels
- [#187427](https://github.com/openclaw/openclaw/pull/187427) fix(codex): doctor --fix removes an appServer.command that points into a missing plugin generation
- [#201831](https://github.com/openclaw/openclaw/pull/201831) chore(gateway): test automatic cron restart on PostgreSQL
- [#201998](https://github.com/openclaw/openclaw/pull/201998) refactor(gateway): check system-agent approval authority once at request start
- [#201942](https://github.com/openclaw/openclaw/pull/201942) test(cron): align creation flows with automatic naming
- [#201996](https://github.com/openclaw/openclaw/pull/201996) refactor(tools): remove unused auth source hints
- [#201659](https://github.com/openclaw/openclaw/pull/201659) fix: show a distinct, fitting icon for each Template category
- [#201928](https://github.com/openclaw/openclaw/pull/201928) fix: let slow auto-compaction run to its configured timeout instead of stopping at 6 minutes
- [#201981](https://github.com/openclaw/openclaw/pull/201981) fix(perf): finish warm reload cleanup before releasing inputs
- [#201983](https://github.com/openclaw/openclaw/pull/201983) improve: reduce work when restricted operators read chat history
- [#201987](https://github.com/openclaw/openclaw/pull/201987) refactor(test): simplify provider contract fixtures
- [#201966](https://github.com/openclaw/openclaw/pull/201966) fix(test): keep compiled Gateway workers on their host build identity
- [#201538](https://github.com/openclaw/openclaw/pull/201538) fix: finish a half-switched Git update instead of reporting it current
- [#201967](https://github.com/openclaw/openclaw/pull/201967) refactor: reduce allocation while saving subagent progress
- [#201994](https://github.com/openclaw/openclaw/pull/201994) fix(test): avoid phase-specific catalog wait timing
- [#201657](https://github.com/openclaw/openclaw/pull/201657) fix(codex): let setup verify the standalone installer runtime
- [#194951](https://github.com/openclaw/openclaw/pull/194951) fix(models): models status and Doctor stay silent when provider catalog discovery fails
- [#201790](https://github.com/openclaw/openclaw/pull/201790) fix: accept follow-up chat messages after the previous run finishes
- [#201984](https://github.com/openclaw/openclaw/pull/201984) fix(update): bridge 2026.11.6 and 2026.11.10-beta.1 updaters
- [#201977](https://github.com/openclaw/openclaw/pull/201977) test(update): account for terminal recovery cleanup
- [#201979](https://github.com/openclaw/openclaw/pull/201979) test(searxng): honor configured-host redirect confinement
- [#201807](https://github.com/openclaw/openclaw/pull/201807) fix(sandbox): SSH sandbox file tools fail with tar errors when calls overlap
- [#200923](https://github.com/openclaw/openclaw/pull/200923) fix: warn on small-context manual picks and skip them in automatic setup
- [#201883](https://github.com/openclaw/openclaw/pull/201883) fix: let agents publish work from managed worktrees they created
- [#201975](https://github.com/openclaw/openclaw/pull/201975) chore(ui): refresh control ui locales
- [#201968](https://github.com/openclaw/openclaw/pull/201968) refactor(gateway): check node plugin approval decisions once
- [#201960](https://github.com/openclaw/openclaw/pull/201960) fix: keep subagent cleanup running with large retained tasks
- [#201961](https://github.com/openclaw/openclaw/pull/201961) fix(ci): use hosted CI when Boat has no start allowance
- [#201915](https://github.com/openclaw/openclaw/pull/201915) fix: avoid starting Codex on an unconfigured Gateway
- [#201955](https://github.com/openclaw/openclaw/pull/201955) fix(ci): switch the active WebKit package mirror
- [#201644](https://github.com/openclaw/openclaw/pull/201644) feat: share an agent as a template from the agent menu
- [#201947](https://github.com/openclaw/openclaw/pull/201947) refactor(gateway): check forwarded node approvals once at sanitization
- [#201950](https://github.com/openclaw/openclaw/pull/201950) improve: reduce repeated prompt estimation before agent replies
- [#201665](https://github.com/openclaw/openclaw/pull/201665) fix(ci): keep mixed extension batches off Boat runners
- [#201917](https://github.com/openclaw/openclaw/pull/201917) fix(update): build and serve Git releases outside node_modules
- [#201892](https://github.com/openclaw/openclaw/pull/201892) fix(ui): restore provider colors in model picker Favorites and Search
- [#201764](https://github.com/openclaw/openclaw/pull/201764) fix: agent-authored message buttons reach the agent on every channel
- [#201924](https://github.com/openclaw/openclaw/pull/201924) fix(usage): never record a placeholder $0 over a resolved model price
- [#201805](https://github.com/openclaw/openclaw/pull/201805) revert: remove temporary beta publication exception and repair after closeout
- [#201930](https://github.com/openclaw/openclaw/pull/201930) fix: stop repeated full-history rewrites during worktree cleanup
- [#201882](https://github.com/openclaw/openclaw/pull/201882) fix(ui): open command palette results in new tabs
- [#201887](https://github.com/openclaw/openclaw/pull/201887) refactor(gateway): check node dispatch run authority once at caller entry
- [#201711](https://github.com/openclaw/openclaw/pull/201711) fix: updates remove their own backups once verified and delete old updater backups
- [#201939](https://github.com/openclaw/openclaw/pull/201939) fix(ui): hide plugin toolbar actions in the resting phone composer
- [#196848](https://github.com/openclaw/openclaw/pull/196848) fix(discord): removed DM senders can still message and run commands through an existing session binding
- [#196841](https://github.com/openclaw/openclaw/pull/196841) fix(signal): view-once attachments are downloaded and passed to the agent
- [#201929](https://github.com/openclaw/openclaw/pull/201929) improve: use less CPU and memory when reading automation history
- [#196847](https://github.com/openclaw/openclaw/pull/196847) fix(web): self-hosted web tool endpoints can redirect requests to other hosts
- [#201926](https://github.com/openclaw/openclaw/pull/201926) test(signal): keep blocked retry check before deadline
- [#201912](https://github.com/openclaw/openclaw/pull/201912) fix: let macOS updates finish when an old Gateway left a dead lock file
- [#201505](https://github.com/openclaw/openclaw/pull/201505) fix(macos): allow reopening after credential startup fails
- [#201859](https://github.com/openclaw/openclaw/pull/201859) test(release): align verifier workflow expectations
- [#201851](https://github.com/openclaw/openclaw/pull/201851) fix(ci): track release workflow policy imports
- [#201927](https://github.com/openclaw/openclaw/pull/201927) chore(ui): refresh control ui locales
- [#201184](https://github.com/openclaw/openclaw/pull/201184) feat: name new automations from their prompt
- [#201914](https://github.com/openclaw/openclaw/pull/201914) fix: let older installs update on official Node when their state has legacy STAT4 statistics
- [#201910](https://github.com/openclaw/openclaw/pull/201910) improve: reduce CPU work when paging long chat histories
- [#201907](https://github.com/openclaw/openclaw/pull/201907) fix: release retired agent catalogs on Bun
- [#201539](https://github.com/openclaw/openclaw/pull/201539) fix: let Mac packaging run from a symlinked checkout path
- [#201900](https://github.com/openclaw/openclaw/pull/201900) improve: reduce Gateway work during streamed chat progress
- [#201898](https://github.com/openclaw/openclaw/pull/201898) feat(plugins): composer actions can need a draft and insert their result
- [#192450](https://github.com/openclaw/openclaw/pull/192450) feat(clawrouter): route qualified Bedrock Converse streams
- [#201823](https://github.com/openclaw/openclaw/pull/201823) fix: move mobile New Session chevrons beside their labels
- [#201816](https://github.com/openclaw/openclaw/pull/201816) fix(ci): keep launcher repair helper internal
- [#201911](https://github.com/openclaw/openclaw/pull/201911) test(gateway): align placement standing grant test with check-once approvals
- [#201902](https://github.com/openclaw/openclaw/pull/201902) fix(ios): make the setup code placeholder readable in Light appearance
- [#201381](https://github.com/openclaw/openclaw/pull/201381) fix: report actual dashboard pairing-link delivery
- [#201879](https://github.com/openclaw/openclaw/pull/201879) fix(gateway): open the main chat route before its first message
- [#201795](https://github.com/openclaw/openclaw/pull/201795) fix: make tool validation and truncation feedback actionable

#### 🐛 New Issues
- [#202001](https://github.com/openclaw/openclaw/issues/202001) Prompt cache invalidated by system prompt section churn between requests in one session (openai-completions); diagnostic reports it as a history rewrite `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬9
- [#201796](https://github.com/openclaw/openclaw/issues/201796) Cron agentTurn re-invokes a completed side-effecting tool call indefinitely after blocked_tool_call stall recovery (watchdog replays model call; loop detector warns but never halts) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬8
- [#201640](https://github.com/openclaw/openclaw/issues/201640) [Bug] Source build cannot boot: dist/extensions ships JS without openclaw.plugin.json manifests or assets, so plugins.entries.* fails validation (exit 78) `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬5
- [#201974](https://github.com/openclaw/openclaw/issues/201974) [Bug]: Direct npm install fallback leaves plugin-skills junctions broken; manual postinstall does not repair them and the gateway refuses to start `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-info` `impact:crash-loop` 💬4
- [#201833](https://github.com/openclaw/openclaw/issues/201833) [Bug]: iOS setup-code placeholder is nearly invisible in Light appearance `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#201606](https://github.com/openclaw/openclaw/issues/201606) [Feature]: Record and expose a run's output even when the automation delivers nothing `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬4
- [#202210](https://github.com/openclaw/openclaw/issues/202210) Make plugin preparation callback timeout configurable (hardcoded 15s fails valid local plugins on Windows) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬3
- [#201641](https://github.com/openclaw/openclaw/issues/201641) [Bug] tsdown-build.mts turns a successful build into rc=1 on a pre-existing INEFFECTIVE_DYNAMIC_IMPORT, so branches touching those modules cannot go green `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬3
- [#201993](https://github.com/openclaw/openclaw/issues/201993) [Bug]: 2026.11.1 backup probe timeout blocks self-upgrade to releases containing the fix `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬3
- [#201880](https://github.com/openclaw/openclaw/issues/201880) Update failure: update (2026.11.5) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬3
- [#201874](https://github.com/openclaw/openclaw/issues/201874) [Bug]: Managed Git install loads raw DeepSeek web-search contract under node_modules, breaking Gateway MCP startup `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#202215](https://github.com/openclaw/openclaw/issues/202215) [Bug]: Mac app shows "Gateway update needs help" after every app update when the Gateway's --wrapper script is stored under ~/.openclaw `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#202146](https://github.com/openclaw/openclaw/issues/202146) [Bug]: Default Proactive check runs a full main-session model turn every 30 minutes when no owner route exists `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬2
- [#202169](https://github.com/openclaw/openclaw/issues/202169) [Bug]: macOS Gateway aborts with Alloc(AllocError) in bundled Bun module resolver `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#202037](https://github.com/openclaw/openclaw/issues/202037) [Bug]: openclaw dashboard can never start or install the Gateway (--yes and the start prompt are unreachable) `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬2
- [#202079](https://github.com/openclaw/openclaw/issues/202079) Update failure: package-update (2026.11.1) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#201999](https://github.com/openclaw/openclaw/issues/201999) [Bug]: cron copies fatal execution errors into delivery diagnostics without outbound dispatch `bug` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬2
- [#201986](https://github.com/openclaw/openclaw/issues/201986) iOS: guide new users who don't have a Gateway yet `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#202021](https://github.com/openclaw/openclaw/issues/202021) Docker image 2026.11.6: /home/node is now 0700 (trixie base), breaks running as a non-1000 uid (EACCES on onboard) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#202023](https://github.com/openclaw/openclaw/issues/202023) [Bug]: reset --scope config+creds+sessions deletes config and credentials while an unmanaged Gateway still owns the state `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#201988](https://github.com/openclaw/openclaw/issues/201988) [Bug]: doctor ignores per-agent sandbox mode, so Docker/image problems go unreported when only agents.entries.<id>.sandbox is set `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#201855](https://github.com/openclaw/openclaw/issues/201855) claude-cli "You've hit your 5-hour limit" classified as unknown, no auth-profile rotation; 429 credits_required retried as transient `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬2
- [#201931](https://github.com/openclaw/openclaw/issues/201931) Lower repeat-guard threshold for side-effecting tool calls within a turn `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#201903](https://github.com/openclaw/openclaw/issues/201903) [Bug]: Tool calls just after 'Plugin replacement applied' still reach the disposed instance's before_tool_call hook and fail closed (Code Mode trigger evaluations fail; 2026.11.5) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#201854](https://github.com/openclaw/openclaw/issues/201854) ci: add a focused real-Gateway incident replay check `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#201860](https://github.com/openclaw/openclaw/issues/201860) [Bug]: skill_workshop tool description differs between human and internal turns of one session (embedded runner), breaking prompt-cache prefix `P2` `impact:other` 💬2
- [#201634](https://github.com/openclaw/openclaw/issues/201634) config validate fails with EACCES ("filesystem did not enforce the private directory DACL") on Windows 10 when a state DB exists `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#201793](https://github.com/openclaw/openclaw/issues/201793) [Bug]: Manual compaction accepts a nonexistent hook boundary and drops the retained model-context tail `bug` `no-stale` `bug:behavior` `P2` 💬2
- [#201751](https://github.com/openclaw/openclaw/issues/201751) [Bug]: Local TUI reports successful GitHub Copilot login but cannot use the token until restarted `bug` `bug:behavior` `P2` `impact:auth-provider` 💬2
- [#201658](https://github.com/openclaw/openclaw/issues/201658) [Bug]: @openclaw/whatsapp 2026.11.5 no longer logs outbound "Sent message <id> -> <recipient>" lines; is the removal intended? `P2` `impact:other` 💬2
- [#201609](https://github.com/openclaw/openclaw/issues/201609) [Bug]: 2026.11.5 Linux: spawn broker dies silently after ~1-2 days and is never respawned; all exec/MCP/cli-backend spawns fail until Gateway restart (regression of #173222?) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#202219](https://github.com/openclaw/openclaw/issues/202219) [Bug]: SQLite checkpointIncomplete undercounts false-returning calls during TRUNCATE-to-PASSIVE fallback `bug` `no-stale` `bug:behavior` `P3` 💬1
- [#202213](https://github.com/openclaw/openclaw/issues/202213) [Bug]: 2026.11.6 refuses to read compressed session archives; please ship #192743 and #193548 in a stable release `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#202218](https://github.com/openclaw/openclaw/issues/202218) [Bug]: Automatic session maintenance skips the documented quiet window after a concurrent write invalidates its plan `bug` `bug:behavior` `P2` `impact:other` 💬1
- [#202208](https://github.com/openclaw/openclaw/issues/202208) [Bug]: Phone, meeting and FaceTime voice consults ignore the agent's Claude CLI runtime and fail with "No API key" `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#202173](https://github.com/openclaw/openclaw/issues/202173) [Bug]: Foreground exec trims structured output `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#202199](https://github.com/openclaw/openclaw/issues/202199) [Feature]: Defer remote MCP discovery until a tool is needed in a Codex conversation `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#202201](https://github.com/openclaw/openclaw/issues/202201) Gateway agent accepts unknown sessionId with createSessionIfMissing: false for CLI clients `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#202163](https://github.com/openclaw/openclaw/issues/202163) [Feature]: Install guide for Control Plane `P3` 💬1
- [#202158](https://github.com/openclaw/openclaw/issues/202158) [Bug]: [Bug]: OpenClaw AI 응답 오류 반복 및 서비스 중단 `bug` `regression` `P2` `impact:ux-friction` 💬1
- [#202185](https://github.com/openclaw/openclaw/issues/202185) Update failure: requested (2026.11.10-beta.1) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#202140](https://github.com/openclaw/openclaw/issues/202140) Automation runs post a bare "⚠️ Tool Call failed" when record_result is repeated through Tool Search `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#202179](https://github.com/openclaw/openclaw/issues/202179) Discord realtime voice on GA OpenAI models needs a Platform API key even when signed in with ChatGPT `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#202178](https://github.com/openclaw/openclaw/issues/202178) [Feature]: Dismiss delivered browser notifications after their messages are viewed `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#202172](https://github.com/openclaw/openclaw/issues/202172) [Bug]: byte-triggered compaction counts the saved system prompt and tool schemas, so it fires early and latches on a freshly compacted chat `bug` `no-stale` `bug:behavior` `P2` 💬1
- [#202176](https://github.com/openclaw/openclaw/issues/202176) [Bug]: macOS process census fails the whole Codex start when any transient process has incomplete topology ("Process identity is unavailable") `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#202167](https://github.com/openclaw/openclaw/issues/202167) [Bug]: 2026.11.5 macOS BA-EA case collision persists — recovery identity failure and pending Codex migration `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#202151](https://github.com/openclaw/openclaw/issues/202151) [Feature]: Pick a new progress label each time a status starts (random from the pool, or a hook) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#202165](https://github.com/openclaw/openclaw/issues/202165) Realtime voice token usage is never recorded in session usage or cost reports `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#202159](https://github.com/openclaw/openclaw/issues/202159) [Bug]: backup create --verify detects case-only filename collision only after writing a 32.8 GB archive `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#202161](https://github.com/openclaw/openclaw/issues/202161) CLI-provider candidate in a cron agentTurn falls through to the OpenAI-completions stub (TypeError), masking the first-hop error `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` 💬1
- [#202152](https://github.com/openclaw/openclaw/issues/202152) [Bug]: Turn aborted right after auto-compaction succeeded shows "The operation was aborted. | 20" with no cause and no account of the work already done `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#202150](https://github.com/openclaw/openclaw/issues/202150) Prompt cache: a turn after a config.patch reload moves mid-session skills into the system prompt and drops their delta messages `P2` `clawsweeper:needs-info` `impact:session-state` `issue-rating: 🦐 gold shrimp` 💬1
- [#202016](https://github.com/openclaw/openclaw/issues/202016) `setup` rejects account-available models when the model catalog is cold `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#202137](https://github.com/openclaw/openclaw/issues/202137) Feature: configurable retention for generated + received chat media (media/outgoing grows unbounded) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#202138](https://github.com/openclaw/openclaw/issues/202138) workboard: Run Claude/Run OpenAI buttons hardcode models and ignore configured agent model `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#202134](https://github.com/openclaw/openclaw/issues/202134) [Bug]: Plugin helper-session cleanup rescans every orphan transcript under the session writer (8–13 s), so finished Active Memory recalls time out `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#202132](https://github.com/openclaw/openclaw/issues/202132) Control UI first-run setup should match the macOS welcome flow `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#202022](https://github.com/openclaw/openclaw/issues/202022) Worker task failures hide the real cause behind “channel closed” `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#202129](https://github.com/openclaw/openclaw/issues/202129) [Bug]: GitHub Copilot sol-fast success is reported as a model route change when responseModel is gpt-5.6-sol `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#202118](https://github.com/openclaw/openclaw/issues/202118) [Bug]: Claude CLI progress notes show as replies in the Control UI `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#202121](https://github.com/openclaw/openclaw/issues/202121) Update failure: candidate-doctor (2026.11.4) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#202123](https://github.com/openclaw/openclaw/issues/202123) [Feature]: Use GPT-Live-1.1 with an OpenAI API key `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#202094](https://github.com/openclaw/openclaw/issues/202094) Windows login-item installs: gateway status says 'Scheduled Task (registered)' and status/doctor always report a failed definition inspection `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#201820](https://github.com/openclaw/openclaw/issues/201820) [Bug]: openclaw logs prints the raw JSON record instead of a log line for records whose message arguments are empty, such as blank CLI lines `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#201969](https://github.com/openclaw/openclaw/issues/201969) [Bug]: PostgreSQL Gateway Talk stays "warming" and plugin-loading requests fail with "must run in a worker" after 2026.11.5 `bug` `no-stale` `P1` `clawsweeper:fix-shape-clear` 💬1
- [#202069](https://github.com/openclaw/openclaw/issues/202069) `openclaw update --tag 2026.11.6` fails in the snapshot phase with "too many SQL variables" (Postgres state engine) `P2` `impact:ux-friction` 💬1
- [#202059](https://github.com/openclaw/openclaw/issues/202059) [Bug]: Discord managed update handoff loses SQLite aggregate causes and fails before staging on Windows 11.5 `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#202047](https://github.com/openclaw/openclaw/issues/202047) ACP `session/prompt` with `_meta.deliver: true` never settles and streams no text when the session has an external reply route `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#202054](https://github.com/openclaw/openclaw/issues/202054) [Feature]: Discord should notify the chat when an agent run fails (errorPolicy parity with Telegram) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#202045](https://github.com/openclaw/openclaw/issues/202045) Control UI: Connect a device can't create a setup code on a new install and offers no way forward `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#202040](https://github.com/openclaw/openclaw/issues/202040) [Bug]: Docker: openclaw-cli has no shared PID namespace, so setup.sh and documented config/channel writes are refused once the Gateway runs `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#202034](https://github.com/openclaw/openclaw/issues/202034) [Bug]: doctor's session store owner restore command breaks for numeric agent IDs (value parsed as number) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#202032](https://github.com/openclaw/openclaw/issues/202032) [Bug]: doctor's fallback hint says to use config unset, but config unset refuses invalid configs and points back to doctor `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#202041](https://github.com/openclaw/openclaw/issues/202041) [Docs Bug]: Docker Manual/Headless flows don't create state dirs, so onboarding fails with EACCES on Linux Docker Engine `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#202039](https://github.com/openclaw/openclaw/issues/202039) [Docs Bug]: Raspberry Pi guide opens the printed dashboard URL over SSH, which has no pairing/auth `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#202038](https://github.com/openclaw/openclaw/issues/202038) [Bug]: TUI/gateway pairing messages say "devices approve --latest … then retry", but --latest only previews `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#202033](https://github.com/openclaw/openclaw/issues/202033) [Bug]: Telegram DM access hint sets dmPolicy=allowlist before allowFrom, so its first command fails validation 💬1
- [#202026](https://github.com/openclaw/openclaw/issues/202026) [Bug]: uninstall/reset print "Removed <path>" for paths that never existed (e.g. /Applications/OpenClaw.app) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#202024](https://github.com/openclaw/openclaw/issues/202024) [Bug]: Linux embedded dashboard cannot request microphone permission `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#202020](https://github.com/openclaw/openclaw/issues/202020) [Feature]: Explicit session deletion without a recovery archive `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#202025](https://github.com/openclaw/openclaw/issues/202025) [Bug]: uninstall --all leaves the node host service (openclaw node install) registered `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#202012](https://github.com/openclaw/openclaw/issues/202012) [Bug]: macOS update blocked by publication journal device identity mismatch on 2026.11.1 `P0` `impact:ux-release-blocker` 💬1
- [#201825](https://github.com/openclaw/openclaw/issues/201825) test(gateway): qualify automatic PostgreSQL cron retry across restart `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#202008](https://github.com/openclaw/openclaw/issues/202008) [Bug]: status --deep during Gateway startup says Checks "skipped (use --deep)" `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#202007](https://github.com/openclaw/openclaw/issues/202007) [Bug]: status and status --deep show a green "Plugin compatibility: none" without running the check `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#202004](https://github.com/openclaw/openclaw/issues/202004) [Bug]: models auth list shows expired cooldown/disabled windows as active, with recovery hints `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#202003](https://github.com/openclaw/openclaw/issues/202003) [Bug]: models auth login-github-copilot --yes still asks "Re-run login?" (default No), so the flag does nothing `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#202002](https://github.com/openclaw/openclaw/issues/202002) [Bug]: gateway install --port/--token on an installed service exits ok "already-installed" and silently keeps the old values `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#202005](https://github.com/openclaw/openclaw/issues/202005) [Bug]: models auth --agent help says "default: configured default agent", but auth mutations require --agent with multiple agents `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#201964](https://github.com/openclaw/openclaw/issues/201964) Compiled test Gateways can mistake their host build for an installation replacement `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#201995](https://github.com/openclaw/openclaw/issues/201995) Update failure: package-update (2026.11.4) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#201989](https://github.com/openclaw/openclaw/issues/201989) [Bug]: doctor --lint skills-readiness tells you to run --fix to disable missing-binary skills, but --fix keeps them enabled `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#201992](https://github.com/openclaw/openclaw/issues/201992) [Docs Bug]: doctor checks page says --fix refuses retired sandbox registry files, but doctor archives them `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#201990](https://github.com/openclaw/openclaw/issues/201990) [Bug]: channels add exits 0 with nothing written when the channel's plugin install fails or has no source `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#201991](https://github.com/openclaw/openclaw/issues/201991) [Bug]: doctor suggests a memory system for an agent whose workspace directory does not exist `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#201982](https://github.com/openclaw/openclaw/issues/201982) Update failure: package-update (2026.11.1) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#201980](https://github.com/openclaw/openclaw/issues/201980) Update failure: package-update (2026.11.2) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#201909](https://github.com/openclaw/openclaw/issues/201909) Gateway starts a Codex app-server at boot with nothing configured `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#201963](https://github.com/openclaw/openclaw/issues/201963) fix(test): preserve main-session RPC failures and observe event waiters `bug` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#201957](https://github.com/openclaw/openclaw/issues/201957) [Bug]: OpenClaw 2026.11.5 on native Intel macOS cannot validate configuration — SQLite read-only worker rejects bundled library `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#201953](https://github.com/openclaw/openclaw/issues/201953) refactor(perf): reuse filesystem counters in sandbox benchmarks `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#201806](https://github.com/openclaw/openclaw/issues/201806) [Bug]: SSH sandbox file tools fail with tar "File exists" / "Failed to restore metadata" when sandbox calls overlap `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#201948](https://github.com/openclaw/openclaw/issues/201948) Update failure: package-doctor (2026.11.5) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#201945](https://github.com/openclaw/openclaw/issues/201945) browser: `set credentials` does not get past HTTP Basic auth (fence leaves auth unanswered; extension relay refuses Playwright's Fetch session) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#201943](https://github.com/openclaw/openclaw/issues/201943) fix: leading NO_REPLY control line leaks when it ends with CRLF `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#201937](https://github.com/openclaw/openclaw/issues/201937) [Feature]: `agent_end` hook context has no `modelProviderId`/`modelId` (and no admission event id) on CLI backends `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#201936](https://github.com/openclaw/openclaw/issues/201936) [Feature]: `CompactionProvider.summarize` should receive the session identity, the triggering authority and the transcript entry ids of the range `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#201940](https://github.com/openclaw/openclaw/issues/201940) claude-cli: log why a session resumes with changed=system-prompt, and expose per-turn cache read/creation tokens `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#201935](https://github.com/openclaw/openclaw/issues/201935) [Feature]: Registered compaction provider is bypassed for `claude-cli`: no host-owned compaction route and no hook to take over native compaction `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#201938](https://github.com/openclaw/openclaw/issues/201938) [Feature]: Plugin `llm.complete` can't follow the session's current model without a blanket model-override grant `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#201932](https://github.com/openclaw/openclaw/issues/201932) [Bug]: prepareAuthProfileCredentialRead does not wait on AuthProfileCredentialPublicationPendingError, causing false OAuth fallback during background model catalog refresh `P2` `clawsweeper:source-repro` `impact:auth-provider` `issue-rating: 🦞 diamond lobster` 💬1
- [#201933](https://github.com/openclaw/openclaw/issues/201933) [Bug]: OpenAI token-sharing and xAI OAuth refresh do not mark provably pre-dispatch transport failures as not-attempted, burning valid refresh tokens on transient local outages `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#201808](https://github.com/openclaw/openclaw/issues/201808) [Bug]: memory index scopeHash uses localeCompare on extraPaths — reindex from a CJK-locale terminal permanently disables memory_search ("index scope changed"), byte-exact repro `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#201916](https://github.com/openclaw/openclaw/issues/201916) [Bug]: agents delete fails forever with "deletion is draining active work" for any agent whose subagent run was delivered (2026.11.5) `P2` `impact:session-state` 💬1
- [#201908](https://github.com/openclaw/openclaw/issues/201908) Matrix ingress: one undecryptable event blocks the room lane for 24h+ with no signal `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#201904](https://github.com/openclaw/openclaw/issues/201904) [Bug]: sessions_send steer blocks the caller 7+ min (past the 2-min steering deadline) while the target overflows, then the caller's run dies with SESSION_PLACEMENT_TURN_SETTLEMENT_CLOSED (2026.11.5) `P1` `impact:session-state` 💬1
- [#201896](https://github.com/openclaw/openclaw/issues/201896) Bug: account-models stale maxTokens overrides config, causing internal session effects (skill workshop review) context overflow `P2` `impact:other` 💬1
- [#201885](https://github.com/openclaw/openclaw/issues/201885) [Bug]: Telegram queued follow-up turn never shows typing (source dispatch seals the shared typing controller) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#201884](https://github.com/openclaw/openclaw/issues/201884) [Bug]: Intermittent missing streaming token usage with LiteLLM `bug` `regression` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#201881](https://github.com/openclaw/openclaw/issues/201881) [Windows] File descriptor 22/23 closed but not opened in unmanaged mode - noise warning `P2` `impact:ux-friction` 💬1
- [#201846](https://github.com/openclaw/openclaw/issues/201846) Dependency checks miss the full release workflow policy import `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#201861](https://github.com/openclaw/openclaw/issues/201861) [Bug]: 2026.11.5 replaced the all-agents session sidebar with an agent-only roster — restore one list with every agent's sessions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#201863](https://github.com/openclaw/openclaw/issues/201863) [Feature]: Expose Bitable delete (feishu_bitable_delete_record) in the official Feishu plugin — successor tracker for locked #55654/#61330/#43729 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#201830](https://github.com/openclaw/openclaw/issues/201830) Refactor benchmark filesystem call counters `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#201849](https://github.com/openclaw/openclaw/issues/201849) [Feature]: Recall-side marker/exclusion for dreaming stage reports (memory/dreaming/**) to stop self-referential echo polluting memory_search `P2` `impact:session-state` 💬1
- [#201834](https://github.com/openclaw/openclaw/issues/201834) Auto Review can lose a completed reviewer result and hide the handoff timeout `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#201818](https://github.com/openclaw/openclaw/issues/201818) muse plugin never grants workspace trust — Muse native runtime unusable headlessly, reported as "sign-in needed" `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#201809](https://github.com/openclaw/openclaw/issues/201809) [Bug]: macOS primary Gateway behind Cloudflare Access fails with 'TLS authority does not match' (follows Access login redirect; primary has no browser-session path) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#201810](https://github.com/openclaw/openclaw/issues/201810) [Feature]: Add Mistral as an image-generation provider `P3` 💬1
- [#201801](https://github.com/openclaw/openclaw/issues/201801) [Bug]: AgentSession.abort() allows an in-flight manual compaction hook to commit afterwards `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#201798](https://github.com/openclaw/openclaw/issues/201798) [Bug]: Documented Codex catalog cache-wait diagnostics and cache counters are missing `bug` `no-stale` `bug:behavior` `P3` 💬1
- [#201800](https://github.com/openclaw/openclaw/issues/201800) [Bug]: Custom compaction hooks can commit empty or whitespace-only summaries `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#201797](https://github.com/openclaw/openclaw/issues/201797) [Bug]: Non-finite OTEL_METRIC_EXPORT_INTERVAL creates a 1 ms export loop instead of using the default `bug` `no-stale` `bug:behavior` `P2` 💬1
- [#201780](https://github.com/openclaw/openclaw/issues/201780) Subagent completion to a direct chat drops the parent's text reply and sends the child's raw result `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#201772](https://github.com/openclaw/openclaw/issues/201772) Update failure: package-update (2026.11.3) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#201771](https://github.com/openclaw/openclaw/issues/201771) Prompt cache drops when automations and show_widget tool descriptions change within one session `P2` `impact:other` 💬1
- [#201768](https://github.com/openclaw/openclaw/issues/201768) [Bug]: Control UI model picker still omits alternate shared accounts (re-report of #167747, closed by inactivity) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#201765](https://github.com/openclaw/openclaw/issues/201765) Update failure: post-update-verification (2026.11.5) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#201753](https://github.com/openclaw/openclaw/issues/201753) [Bug]: 2026.11.3 → 2026.11.5 candidate Doctor still rejects WhatsApp migration reason change `P1` `impact:ux-friction` 💬1
- [#201738](https://github.com/openclaw/openclaw/issues/201738) Update failure: package-doctor (2026.11.5) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#201728](https://github.com/openclaw/openclaw/issues/201728) [Bug]: macOS projectless Codex sessions split into one catalog group per dated directory `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#201726](https://github.com/openclaw/openclaw/issues/201726) [Bug]: prompt-cache invalidated on every request: normalizeMessagesForLlmBoundary regenerates toolCall ids (history must be append-only) `P2` `impact:session-state` 💬1
- [#201714](https://github.com/openclaw/openclaw/issues/201714) [Bug]: `OPENCLAW_OAUTH_DIR` spelled through a state-dir alias is refused as `oauth-dir-outside-snapshot` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#201715](https://github.com/openclaw/openclaw/issues/201715) [Bug]: doctor skips managed npm plugins whose `openclaw.plugin.json` is JSON5 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#201699](https://github.com/openclaw/openclaw/issues/201699) [Feature]: Gateway-controlled GA realtime Talk over ChatGPT OAuth, with forced agent consult routing `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#201671](https://github.com/openclaw/openclaw/issues/201671) refactor(test): consolidate plugin-update cohort setup `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#201672](https://github.com/openclaw/openclaw/issues/201672) Qualify PostgreSQL cron finalization and pool reuse across in-process restarts `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#201663](https://github.com/openclaw/openclaw/issues/201663) Hourly mixed extension batches exhaust Boat runner memory `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#201605](https://github.com/openclaw/openclaw/issues/201605) [Bug]: sub-agent transient same-model retry after degenerate_output restarts with rewritten message 0, run loses its task and ends `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#201646](https://github.com/openclaw/openclaw/issues/201646) [Feature]: A2A tasks should say which agent handled them `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#201647](https://github.com/openclaw/openclaw/issues/201647) [Feature]: List the configured agent IDs when hooks.status / hooks list need an agent `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#201645](https://github.com/openclaw/openclaw/issues/201645) [Bug]: chat.history oversized-message placeholder drops `__openclaw.transport` (channel messageId) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#201622](https://github.com/openclaw/openclaw/issues/201622) Concurrent turn in a busy session aborts with 'SQLite transcript changed while preparing rewrite' (SqliteTranscriptMutationConflictError) 💬1
- [#201607](https://github.com/openclaw/openclaw/issues/201607) [Bug]: Windows: openclaw gateway start waits the full 90-minute startup deadline after the Gateway child exits fatally `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#201603](https://github.com/openclaw/openclaw/issues/201603) [Bug]: Tabs opened by the browser tool report `window.outerWidth/outerHeight = 0` at page load (headless signal) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1

#### 🔒 Closed Issues
- [#120385](https://github.com/openclaw/openclaw/issues/120385) [Bug]: Code Mode tool catalog built incomplete for scheduled/cron and memory-flush turns — MCP tools missing ("Unknown tool id"), surfaced only as "⚠️ 🛠️ Exec failed"
- [#131457](https://github.com/openclaw/openclaw/issues/131457) [Feature]: Add progress streaming mode to the Feishu (Lark) channel
- [#200289](https://github.com/openclaw/openclaw/issues/200289) [Bug]: 2026.11.3 → 2026.11.4 update takes hours, fails with SQLite lock during Gateway handoff, requires SSH recovery
- [#201796](https://github.com/openclaw/openclaw/issues/201796) Cron agentTurn re-invokes a completed side-effecting tool call indefinitely after blocked_tool_call stall recovery (watchdog replays model call; loop detector warns but never halts)
- [#199155](https://github.com/openclaw/openclaw/issues/199155) [Bug]: 2026.11.5-beta.2: a transcript row committed by another process (the CLI `message send` caller) is invisible to the gateway's resident session actor; the next append fails UNIQUE(transcript_events.session_id, seq)
- [#181884](https://github.com/openclaw/openclaw/issues/181884) Unknown-tool-name failure is kept as the run error after the model recovers via the Tool Search call tool, so a NO_REPLY cron run is reported as failed
- [#187757](https://github.com/openclaw/openclaw/issues/187757) [Bug]: Stable 2026.10.8 still retains update runtimes on "Could not classify PID: could not read package identity" (#177407 not in stable); update.run reports skipped
- [#183564](https://github.com/openclaw/openclaw/issues/183564) [Bug]: Published Codex 2026.10.7 still lacks recovery declarations fixed in #178286
- [#182685](https://github.com/openclaw/openclaw/issues/182685) [Feature]: Bind source-version dependencies to derived actions, separately from execution permission
- [#164811](https://github.com/openclaw/openclaw/issues/164811) Valid community ClawHub installs report provenance-invalid and suggest a futile reinstall
- [#138591](https://github.com/openclaw/openclaw/issues/138591) browser.tabCleanup.idleMinutes and maxTabsPerSession are hardcoded; shared multi-agent gateways need them configurable
- [#201640](https://github.com/openclaw/openclaw/issues/201640) [Bug] Source build cannot boot: dist/extensions ships JS without openclaw.plugin.json manifests or assets, so plugins.entries.* fails validation (exit 78)
- [#185092](https://github.com/openclaw/openclaw/issues/185092) Windows node paired but browser control fails with listener ownership/authentication error
- [#184521](https://github.com/openclaw/openclaw/issues/184521) [Bug]: Telegram follow-up messages queued during long agent runs and delayed after timeout (2026.10.7)
- [#184429](https://github.com/openclaw/openclaw/issues/184429) [Bug]: Isolated cron setup watchdog counts session-preparation SQLite write time; a run whose setup completes just after the deadline is still recorded as failed
- [#183164](https://github.com/openclaw/openclaw/issues/183164) Update failure: post-update-verification (2026.9.33)
- [#192460](https://github.com/openclaw/openclaw/issues/192460) [Bug]: WebChat keeps message(final=false) progress visible with Keep commentary off
- [#185280](https://github.com/openclaw/openclaw/issues/185280) [Bug]: message read --channel discord still loads all plugins when Discord is an external plugin (Gateway-owned skip never applies)
- [#185253](https://github.com/openclaw/openclaw/issues/185253) [Feature]: Byte-resumable artifact downloads for Git updates
- [#184724](https://github.com/openclaw/openclaw/issues/184724) Skill picker titles skills from the first body heading, so skills embedding shared boilerplate render identically
- [#184710](https://github.com/openclaw/openclaw/issues/184710) mcp serve: permissions_list_open returns [] while `openclaw approvals pending` shows an open exec approval
- [#201833](https://github.com/openclaw/openclaw/issues/201833) [Bug]: iOS setup-code placeholder is nearly invisible in Light appearance
- [#184630](https://github.com/openclaw/openclaw/issues/184630) [Bug]: OpenAI context planner can clamp advertised 500k budget to bundled 272k cache metadata
- [#184592](https://github.com/openclaw/openclaw/issues/184592) [Feature]: Google Chat thread replies need referenced-message context, not only reply routing
- [#184170](https://github.com/openclaw/openclaw/issues/184170) [Feature]: Home tab (main agent session): add the session context menu (preserving its current right-click) and message indicators (thinking, new message)
- [#183893](https://github.com/openclaw/openclaw/issues/183893) google-meet: durable meeting transcripts stay empty because the 5 s capture timer inherits the join caller's expired authority
- [#183642](https://github.com/openclaw/openclaw/issues/183642) Control UI silently loses unsaved agent core-file edits after Settings navigation
- [#183264](https://github.com/openclaw/openclaw/issues/183264) [Bug]: Image-output models used as the chat model: the generated image is dropped (OpenRouter `images` field ignored by the chat transport)
- [#199612](https://github.com/openclaw/openclaw/issues/199612) [Bug]: Telegram plugin slash commands answer "no longer available after the plugin registry changed" after a config hot reload
- [#19638](https://github.com/openclaw/openclaw/issues/19638) [CI]: oven-sh/setup-bun 401 Unauthorized blocks all PR check workflows
- [#185530](https://github.com/openclaw/openclaw/issues/185530) [Feature] Open selected automations directly from command palette search
- [#185481](https://github.com/openclaw/openclaw/issues/185481) [Bug]: Same MCP App view rendered under persisted and legacy:projection messages in one run
- [#185440](https://github.com/openclaw/openclaw/issues/185440) [Feature]: Skip the Matrix underline analysis for long replies without underline tags
- [#185439](https://github.com/openclaw/openclaw/issues/185439) [Bug]: Images over 1200 px read with the `read` tool get a wrong or missing coordinate hint
- [#185373](https://github.com/openclaw/openclaw/issues/185373) [Feature]: Android: persistent manual-only Agent browser previews
- [#185361](https://github.com/openclaw/openclaw/issues/185361) [Bug]: Telegram sendMediaGroup network failure leaves album outcome ambiguous; bounded transport diagnostics needed
- [#185174](https://github.com/openclaw/openclaw/issues/185174) [Bug]: Channel hot reload waits for all gateway active work (unrelated runs/exec/cron), not just the reloaded channel's work — up to 300 s delay
- [#185163](https://github.com/openclaw/openclaw/issues/185163) [Bug]: bundle-MCP runtimes tear down between attempts — every embedded run pays ~5.8s reconnecting all servers (median 93% of prep time)
- [#185161](https://github.com/openclaw/openclaw/issues/185161) [Feature]: Telegram channel: handle Telegram Stars payments (pre_checkout_query + successful_payment) to enable paid digital services in-bot
- [#185116](https://github.com/openclaw/openclaw/issues/185116) Docs: add a hosting guide for Prized
- [#185075](https://github.com/openclaw/openclaw/issues/185075) [Feature]: Matrix configured ACP bindings should accept a thread target (room + thread root), like Discord threads and Telegram topics
- [#184967](https://github.com/openclaw/openclaw/issues/184967) [Feature]: Codex final-image selection: avoid auto-publishing earlier candidates after the chosen image is sent
- [#184948](https://github.com/openclaw/openclaw/issues/184948) [Feature]: Support optional GitHub Projects scopes in managed OAuth connections
- [#184877](https://github.com/openclaw/openclaw/issues/184877) outbound-session: resolveAgentIdFromSessionKey called without configured default -> 'Session key does not contain an agent id' warning spam
- [#184872](https://github.com/openclaw/openclaw/issues/184872) [Feature]: Create native WhatsApp events in the current group conversation
- [#184870](https://github.com/openclaw/openclaw/issues/184870) [Feature]: Create recurring Discord scheduled events through the existing message action
- [#184840](https://github.com/openclaw/openclaw/issues/184840) [Feature]: let the Playwright CDP connect timeout be configured
- [#184812](https://github.com/openclaw/openclaw/issues/184812) [Bug] MCP Events Windows tests fail with EBUSY during SQLite temp cleanup
- [#200904](https://github.com/openclaw/openclaw/issues/200904) Pairing-required hint tells a remote client to run openclaw devices approve itself, which fails the same way
- [#184794](https://github.com/openclaw/openclaw/issues/184794) Session SQLite migration recovery report (session-sqlite-1793031076067-e8e3d4b2)
- [#185190](https://github.com/openclaw/openclaw/issues/185190) [Bug]: Adding GPT-6.1 Terra as agent fallback fails Unknown model validation with selected OAuth (2026.10.6)
- [#184709](https://github.com/openclaw/openclaw/issues/184709) [Feature]: Support keyterm prompting in ElevenLabs batch transcription
- [#184697](https://github.com/openclaw/openclaw/issues/184697) Optional version2 plugin tools absent from live session inventory; isolated construction succeeds
- [#184635](https://github.com/openclaw/openclaw/issues/184635) models: fallbacks add, image-fallbacks add and aliases add save an uncatalogued model id with no warning while models set warns
- [#184551](https://github.com/openclaw/openclaw/issues/184551) [Bug]: macOS npm update times out waiting for Gateway HTTP readiness after activation
- [#184534](https://github.com/openclaw/openclaw/issues/184534) Scheduled reminder re-delivered 6x in 37 min while cron layer healthy (2026.10.7)
- [#184476](https://github.com/openclaw/openclaw/issues/184476) [Feature]: Add labeled stream markers through the Twitch message integration
- [#184442](https://github.com/openclaw/openclaw/issues/184442) Git updates abandon repeated weak-network interruptions without transfer progress
- [#184378](https://github.com/openclaw/openclaw/issues/184378) Update failure: package-doctor (2026.10.5)
- [#184278](https://github.com/openclaw/openclaw/issues/184278) [Feature]: Create live Twitch clips through the Twitch message integration
- [#184199](https://github.com/openclaw/openclaw/issues/184199) Feature: opt-in post-authorization inbound-media staging hook
- [#184192](https://github.com/openclaw/openclaw/issues/184192) [Bug]: PostHog native MCP plugin sends literal header environment placeholders
- [#184140](https://github.com/openclaw/openclaw/issues/184140) Reply dispatchers that never markComplete() stay in activeReplyDispatchers forever (heap leak)
- [#184123](https://github.com/openclaw/openclaw/issues/184123) [Bug]: Linux desktop companion — Ctrl+V images never reach the composer (WebKitGTK: paste payload empty, clipboard API denied)
- [#184095](https://github.com/openclaw/openclaw/issues/184095) [Feature]: Read Discord scheduled-event subscribers through the message tool
- [#183892](https://github.com/openclaw/openclaw/issues/183892) [Feature]: Allow authored alt text on Slack image uploads
- [#183759](https://github.com/openclaw/openclaw/issues/183759) [Feature]: Create subscriber-only Telegram channel polls
- [#183758](https://github.com/openclaw/openclaw/issues/183758) [Feature]: Hide Telegram poll results until voting closes
- [#183753](https://github.com/openclaw/openclaw/issues/183753) Companion Talk: small always-on-top window for the current chat
- [#183639](https://github.com/openclaw/openclaw/issues/183639) [Feature]: Pass neighboring text context to ElevenLabs TTS requests
- [#183610](https://github.com/openclaw/openclaw/issues/183610) Docs: note that Go-based CLIs on macOS ignore SSL_CERT_FILE behind the secret egress proxy
- [#183537](https://github.com/openclaw/openclaw/issues/183537) Request: consider ShieldCortex and multi-clawd for the official plugin catalog or a verified-publisher listing
- [#183515](https://github.com/openclaw/openclaw/issues/183515) [Feature]: Select a supported Azure Neural speaking style in the bundled speech provider
- [#183482](https://github.com/openclaw/openclaw/issues/183482) [Feature]: Configurable reconnect/backoff for lost managed Tailscale Serve claims
- [#183455](https://github.com/openclaw/openclaw/issues/183455) [Bug]: Codex thread/resume rejects a persisted history item; changing model does not recover the affected thread
- [#183334](https://github.com/openclaw/openclaw/issues/183334) CI: let a fork run every job on its own self-hosted runners and cache, with no hosted fallback
- [#183288](https://github.com/openclaw/openclaw/issues/183288) Bug: infer image describe rejects plugin-discovered vision model as text-only while Gateway model.run succeeds
- [#200083](https://github.com/openclaw/openclaw/issues/200083) [Bug]: One failed HEARTBEAT.md archive write permanently blocks doctor heartbeat migration; the printed remedy ("Rerun doctor to retry safely") can never succeed
- [#201931](https://github.com/openclaw/openclaw/issues/201931) Lower repeat-guard threshold for side-effecting tool calls within a turn
- [#178182](https://github.com/openclaw/openclaw/issues/178182) [Bug]: Responses status-only events reset the no-progress timeout without producing output
- [#201854](https://github.com/openclaw/openclaw/issues/201854) ci: add a focused real-Gateway incident replay check
- [#184655](https://github.com/openclaw/openclaw/issues/184655) browser: default profile drops Basic auth, ?token= and path from an http(s) browser.cdpUrl
- [#201860](https://github.com/openclaw/openclaw/issues/201860) [Bug]: skill_workshop tool description differs between human and internal turns of one session (embedded runner), breaking prompt-cache prefix
- [#197351](https://github.com/openclaw/openclaw/issues/197351) [tools] browser: agent call via extension relay has no effective timeout — turn and lane held indefinitely
- [#201516](https://github.com/openclaw/openclaw/issues/201516) Plugin SDK: scoped background lifecycle access for extension-linked regular sessions
- [#177443](https://github.com/openclaw/openclaw/issues/177443) [Bug]: Discord native command continuations fail on active conversation targets in 2026.10.5
- [#189440](https://github.com/openclaw/openclaw/issues/189440) [Bug]: read rejects `optional: false` ("optional: must be equal to constant")
- [#202218](https://github.com/openclaw/openclaw/issues/202218) [Bug]: Automatic session maintenance skips the documented quiet window after a concurrent write invalidates its plan
- [#202173](https://github.com/openclaw/openclaw/issues/202173) [Bug]: Foreground exec trims structured output
- [#202140](https://github.com/openclaw/openclaw/issues/202140) Automation runs post a bare "⚠️ Tool Call failed" when record_result is repeated through Tool Search
- [#201511](https://github.com/openclaw/openclaw/issues/201511) Control UI 2026.11.5: routed plugin page never mounts on direct link/reload when a workspace replacement uses mountDefault (blank page)
- [#202016](https://github.com/openclaw/openclaw/issues/202016) `setup` rejects account-available models when the model catalog is cold
- [#202022](https://github.com/openclaw/openclaw/issues/202022) Worker task failures hide the real cause behind “channel closed”
- [#137242](https://github.com/openclaw/openclaw/issues/137242) [Bug]: 2.0 `gateway install` / `doctor` abort with `EPERM: fchmod` on Apple VirtioFS (chmod-less) state dirs
- [#201820](https://github.com/openclaw/openclaw/issues/201820) [Bug]: openclaw logs prints the raw JSON record instead of a log line for records whose message arguments are empty, such as blank CLI lines
- [#201969](https://github.com/openclaw/openclaw/issues/201969) [Bug]: PostgreSQL Gateway Talk stays "warming" and plugin-loading requests fail with "must run in a worker" after 2026.11.5
- [#202069](https://github.com/openclaw/openclaw/issues/202069) `openclaw update --tag 2026.11.6` fails in the snapshot phase with "too many SQL variables" (Postgres state engine)
- [#202047](https://github.com/openclaw/openclaw/issues/202047) ACP `session/prompt` with `_meta.deliver: true` never settles and streams no text when the session has an external reply route
- [#189947](https://github.com/openclaw/openclaw/issues/189947) [Bug]: Failure alerts for delivery.target "owner" automations resolve the session's last route instead of the owner DM
- [#202033](https://github.com/openclaw/openclaw/issues/202033) [Bug]: Telegram DM access hint sets dmPolicy=allowlist before allowFrom, so its first command fails validation
- [#202012](https://github.com/openclaw/openclaw/issues/202012) [Bug]: macOS update blocked by publication journal device identity mismatch on 2026.11.1
- [#201825](https://github.com/openclaw/openclaw/issues/201825) test(gateway): qualify automatic PostgreSQL cron retry across restart
- [#201576](https://github.com/openclaw/openclaw/issues/201576) [Bug]: Reply stall watchdog (~360s) aborts embedded auto-compaction before the configured compaction.timeoutSeconds (600s) can take effect
- [#201964](https://github.com/openclaw/openclaw/issues/201964) Compiled test Gateways can mistake their host build for an installation replacement
- [#201909](https://github.com/openclaw/openclaw/issues/201909) Gateway starts a Codex app-server at boot with nothing configured
- [#201916](https://github.com/openclaw/openclaw/issues/201916) [Bug]: agents delete fails forever with "deletion is draining active work" for any agent whose subagent run was delivered (2026.11.5)
- [#201528](https://github.com/openclaw/openclaw/issues/201528) Mac packaging fails with "Unexpected end of JSON input" when the checkout path goes through a symlink
- [#201904](https://github.com/openclaw/openclaw/issues/201904) [Bug]: sessions_send steer blocks the caller 7+ min (past the 2-min steering deadline) while the target overflows, then the caller's run dies with SESSION_PLACEMENT_TURN_SETTLEMENT_CLOSED (2026.11.5)
- [#201896](https://github.com/openclaw/openclaw/issues/201896) Bug: account-models stale maxTokens overrides config, causing internal session effects (skill workshop review) context overflow
- [#201881](https://github.com/openclaw/openclaw/issues/201881) [Windows] File descriptor 22/23 closed but not opened in unmanaged mode - noise warning
- [#201846](https://github.com/openclaw/openclaw/issues/201846) Dependency checks miss the full release workflow policy import
- [#201830](https://github.com/openclaw/openclaw/issues/201830) Refactor benchmark filesystem call counters
- [#201849](https://github.com/openclaw/openclaw/issues/201849) [Feature]: Recall-side marker/exclusion for dreaming stage reports (memory/dreaming/**) to stop self-referential echo polluting memory_search
- [#201479](https://github.com/openclaw/openclaw/issues/201479) Empty chats display message-loading skeletons
- [#201771](https://github.com/openclaw/openclaw/issues/201771) Prompt cache drops when automations and show_widget tool descriptions change within one session
- [#201753](https://github.com/openclaw/openclaw/issues/201753) [Bug]: 2026.11.3 → 2026.11.5 candidate Doctor still rejects WhatsApp migration reason change
- [#201726](https://github.com/openclaw/openclaw/issues/201726) [Bug]: prompt-cache invalidated on every request: normalizeMessagesForLlmBoundary regenerates toolCall ids (history must be append-only)
- [#201671](https://github.com/openclaw/openclaw/issues/201671) refactor(test): consolidate plugin-update cohort setup
- [#201672](https://github.com/openclaw/openclaw/issues/201672) Qualify PostgreSQL cron finalization and pool reuse across in-process restarts
- [#201663](https://github.com/openclaw/openclaw/issues/201663) Hourly mixed extension batches exhaust Boat runner memory
- [#201605](https://github.com/openclaw/openclaw/issues/201605) [Bug]: sub-agent transient same-model retry after degenerate_output restarts with rewritten message 0, run loses its task and ends
- [#197065](https://github.com/openclaw/openclaw/issues/197065) [Bug]: Matrix replies treat quoted bot mentions as new mentions
- [#201622](https://github.com/openclaw/openclaw/issues/201622) Concurrent turn in a busy session aborts with 'SQLite transcript changed while preparing rewrite' (SqliteTranscriptMutationConflictError)
- [#197958](https://github.com/openclaw/openclaw/issues/197958) talk.catalog: report which speech-to-text path Talk transcription uses
- [#198468](https://github.com/openclaw/openclaw/issues/198468) [Bug]: Enabling OpenClaw ID should enable its Access plugin and add it to an existing allowlist

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 264,784 · **Open issues:** 53,939 · **Last push:** <1h ago

On November 19, 2026, Hermes Agent released version v0.23.3, a patch update that consolidates approximately 370 pull requests since v0.23.2 into a stable release across its various platforms, including CLI, installers, and the Microsoft Store. In addition, a canary build, v0.23.2+canary.20261119T064637Z, was also made available. Significant merges included fixes for plugins related to memory-wiki, bubblewrap, Home Assistant, Spotify, and camofox. Among the active issues, a notable concern has arisen with issue #157667, where large pastes staged without a .txt extension result in preview errors, indicating that user experience could be impacted.

#### 🚀 New Releases
- [v0.23.3](https://github.com/nousresearch/hermes-agent/releases/tag/v0.23.3) Hermes Agent v0.23.3
- [v0.23.2+canary.20261119T064637Z](https://github.com/nousresearch/hermes-agent/releases/tag/v0.23.2%2Bcanary.20261119T064637Z) Hermes Agent canary v0.23.2+canary.20261119T064637Z

#### ✅ Merged PRs
- [#158093](https://github.com/NousResearch/hermes-agent/pull/158093) plugin-catalog: memory-wiki, bubblewrap, Home Assistant, Spotify and camofox get today's second batch of fixes

#### 🐛 New Issues
- [#157667](https://github.com/NousResearch/hermes-agent/issues/157667) Desktop: large paste staged without .txt extension — preview 404s ("Preview unavailable") `type/bug` `tool/file` `P2` `comp/desktop` 💬5
- [#158023](https://github.com/NousResearch/hermes-agent/issues/158023) [Bug]: Gateway-owned Group Chats never show "needs you" for @user mentions (docs promise it) `type/bug` `P2` `comp/desktop` 💬3
- [#158094](https://github.com/NousResearch/hermes-agent/issues/158094) [Bug]: Desktop: session vanishes from sidebar when its first turn is safety-refused (display retention vs min_messages=1) `type/bug` `P2` `comp/desktop` `area/sessions` 💬1
- [#158043](https://github.com/NousResearch/hermes-agent/issues/158043) gateway: bg-process completion notification truncates to 0 chars when the line-boundary snap eats the whole tail (sys-wv4zo0) `type/bug` `comp/gateway` `tool/file` `P2` 💬1
- [#158040](https://github.com/NousResearch/hermes-agent/issues/158040) docs: hooks.md contradicts itself on pre_llm_call injection placement (append vs prepend) and firing order vs compression `type/docs` `P3` `area/compression` 💬1
- [#158090](https://github.com/NousResearch/hermes-agent/issues/158090) [Feature]: Allow audio replacement before the transcription upload-size check `type/feature` `comp/plugins` `tool/tts` `P3`
- [#158086](https://github.com/NousResearch/hermes-agent/issues/158086) Desktop renderer crash-loop after update: refreshProfiles failed - TypeError: r?.includes is not a function (Object constructor leaks into the unreadFinishedSessions nanostore) `type/bug` `P2` `comp/desktop` `area/sessions`
- [#158085](https://github.com/NousResearch/hermes-agent/issues/158085) Windows Desktop v0.23.2: fresh local chat rejected with storage_unavailable `type/bug` `comp/gateway` `P2` `area/sessions`
- [#158081](https://github.com/NousResearch/hermes-agent/issues/158081) An open chat silently changes model when model.default is edited; it should apply to new chats only `type/bug` `comp/gateway` `area/config` `P2`
- [#158080](https://github.com/NousResearch/hermes-agent/issues/158080) [Bug]: Multiplexed secondary profile drops Telegram group messages queued while offline ("Blocked unauthorized user") during initial connect; group_allowed_chats ignored `type/bug` `comp/gateway` `platform/telegram` `area/auth`
- [#158076](https://github.com/NousResearch/hermes-agent/issues/158076) Kanban: let `schedule` / `block` take an expected status so a sweep cannot end a run it did not see start `type/feature` `comp/cli` `comp/cron` `comp/plugins`
- [#158072](https://github.com/NousResearch/hermes-agent/issues/158072) Telegram fallback transport never advances on HTTP 502 or ReadTimeout; bot stays offline for an hour `type/bug` `comp/plugins` `platform/telegram` `P2`
- [#158066](https://github.com/NousResearch/hermes-agent/issues/158066) [Bug] Interactive CLI on WSL2: bottom input box visibly flickers whenever content above it re-renders (streaming / tool-result repaints) `type/bug` `P3` `area/streaming` `os/windows`
- [#158065](https://github.com/NousResearch/hermes-agent/issues/158065) Desktop chats lose all MCP tools when dashboard.turn_isolation is enabled `type/bug` `tool/mcp` `P2` `comp/tui-gateway`
- [#158064](https://github.com/NousResearch/hermes-agent/issues/158064) [Setup]: Cannot setup with python 3.15 `type/bug` `comp/cli` `P2` `area/install-update`
- [#158063](https://github.com/NousResearch/hermes-agent/issues/158063) [Feature][Desktop]: Next/previous session in sidebar order (simple ⌥↑/⌥↓, no switcher semantics) `type/feature` `P3` `comp/desktop` `area/sessions`
- [#158059](https://github.com/NousResearch/hermes-agent/issues/158059) Desktop app: Files/Folder sidebar panel shows UNREADABLE (ENOENT) when switching from a remote gateway bot to a Local bot `type/bug` `P3` `comp/desktop` `desktop/sessions`
- [#158054](https://github.com/NousResearch/hermes-agent/issues/158054) [Bug]: Desktop new chat from Home pane sends the sidebar section token as cwd ('/resume') with cwd_explicit:false — session.create refuses with invalid_params `type/bug` `comp/gateway` `P2` `area/sessions`
- [#158051](https://github.com/NousResearch/hermes-agent/issues/158051) Small-window local models: tool schemas are ~77% of a fresh prompt; make the default tool_search defer list window-aware `type/feature` `comp/agent` `comp/tools` `tool/code-exec`
- [#158050](https://github.com/NousResearch/hermes-agent/issues/158050) write_file: local models re-send files they just wrote (38–48% of writes); the rewrite hint only covers ≥20k-char files `type/perf` `comp/tools` `tool/file` `P2`
- [#158047](https://github.com/NousResearch/hermes-agent/issues/158047) CLI startup takes 6 to 10 s before any command runs `type/perf` `comp/cli` `P2`
- [#158046](https://github.com/NousResearch/hermes-agent/issues/158046) Skip secret-source loading for read-only CLI commands (kanban list/show, --version) `type/feature` `comp/cli` `area/auth` `P3`
- [#158042](https://github.com/NousResearch/hermes-agent/issues/158042) [Feature]: Show the quoted message on replies in gateway-owned Group Chats (and give it to members) `type/feature` `comp/gateway` `P3`
- [#158041](https://github.com/NousResearch/hermes-agent/issues/158041) Community plugin: LearnHermes — evidence-based journey companion (beta testers wanted) `comp/plugins` `P3`
- [#158024](https://github.com/NousResearch/hermes-agent/issues/158024) [Bug]: BlueBubbles read-receipt task is not kept referenced and is not cancelled on disconnect `type/bug` `P3`

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 97,238 · **Open issues:** 10,732 · **Last push:** <1h ago

On November 20, 2026, there were no new releases for vLLM, but several significant pull requests were merged. Key updates included bug fixes for maintaining source daemons during cache issues and improving ModelOpt INT8 weight support, alongside enhancements to the Fast Start and Bugfix components. Notably, there were multiple bug reports filed, with heightened attention on the issue where stacked ModelOpt NVFP4 experts fail to load due to mapping inconsistencies. Additionally, another critical bug was identified regarding memory increases for DSV4.1 Model weights, raising performance concerns for users relying on H100 GPUs.

#### ✅ Merged PRs
- [#68653](https://github.com/vllm-project/vllm/pull/68653) [XPU][CI]Move BMG Engine (1 GPU) on k8s to avoid random hang
- [#64289](https://github.com/vllm-project/vllm/pull/64289) [Perf][MoE] Enable SM90 MXFP4 MegaMoE via FlashInfer MoE-EP
- [#68460](https://github.com/vllm-project/vllm/pull/68460) [Bugfix][Fast Start] Keep the source daemon up when the compiled cache cannot be published
- [#68844](https://github.com/vllm-project/vllm/pull/68844) [Recipe] Add HY4
- [#60969](https://github.com/vllm-project/vllm/pull/60969) [Bugfix][Reasoning] Return unfinished K2 Horizon reasoning as reasoning
- [#68176](https://github.com/vllm-project/vllm/pull/68176) [Fast Start] Support ModelOpt INT8 pre-processed weights
- [#60153](https://github.com/vllm-project/vllm/pull/60153) [ROCm][DSv4.1][Perf] Fuse the gfx942 mHC seam in the V4.1 AMD model
- [#68782](https://github.com/vllm-project/vllm/pull/68782) [Bugfix][Attention] Avoid GPU<->CPU sync in FlashInfer XQA ragged draft mask
- [#67680](https://github.com/vllm-project/vllm/pull/67680) [KV Connector][NIXL] Exclude indexer backends from the compatibility hash
- [#59058](https://github.com/vllm-project/vllm/pull/59058) [Bugfix][MoRIIO] Preserve WRITE receive mappings after consumer abort
- [#62480](https://github.com/vllm-project/vllm/pull/62480) [ROCm][Kernel] Add W4A8 MoE decode kernel for RDNA3/RDNA3.5 (gfx11)
- [#68799](https://github.com/vllm-project/vllm/pull/68799) [Bugfix][Scheduler] Free consumed encoder inputs at schedule time (simplifies #67385)
- [#68749](https://github.com/vllm-project/vllm/pull/68749) [Bugfix][ROCm] Fix a cross-wave race in the batched kpool decode update
- [#68586](https://github.com/vllm-project/vllm/pull/68586) [Bugfix][HiSparse] Keep shared KV layers bound when the target is host-resident
- [#68227](https://github.com/vllm-project/vllm/pull/68227) [Bugfix][NIXL] Don't invalidate a disconnected engine whose agents are gone
- [#68780](https://github.com/vllm-project/vllm/pull/68780) [Misc] Trim get_decode_stream_seed docstring
- [#68790](https://github.com/vllm-project/vllm/pull/68790) [CI] Free torch.compile state between tests in compile pass tests
- [#67648](https://github.com/vllm-project/vllm/pull/67648) [Bugfix][Transformers] Preserve received hidden states on later pipeline stages
- [#68724](https://github.com/vllm-project/vllm/pull/68724) [Transformers backend] Trace decorated forwards and pin `cache` in the fx tracer
- [#67166](https://github.com/vllm-project/vllm/pull/67166) [Bugfix] Don't re-append default custom ops on every `replace()`
- [#61428](https://github.com/vllm-project/vllm/pull/61428) [ROCm][Perf] Fuse GDN decode (conv1d + delta rule + gated norm) into AITER's gluon kernel (Qwen3.8-27B)
- [#68318](https://github.com/vllm-project/vllm/pull/68318) [XPU][Tests] Run Triton-only ReplaySSM/SSU tests on XPU
- [#68617](https://github.com/vllm-project/vllm/pull/68617) [CI][XPU] Add Hybrid SSM NixlConnector PD prefix cache test to Intel CI
- [#67959](https://github.com/vllm-project/vllm/pull/67959) [ROCm] AITER v0.1.29.post1
- [#66184](https://github.com/vllm-project/vllm/pull/66184) [ROCm][MiniMax-M3] Select the whole-layer mono decode with --monokernel and remove mono/envs.py
- [#66631](https://github.com/vllm-project/vllm/pull/66631) [HiSparse] Batch owner bookkeeping when unpinning pages
- [#68710](https://github.com/vllm-project/vllm/pull/68710) [Bugfix][KV Offload] Release SimpleCPUOffload CPU caches on connector shutdown
- [#63396](https://github.com/vllm-project/vllm/pull/63396) [ROCm][Perf][DSv4] gfx1250 W4A4 MoE: fused silu + fused quant + preshuffled weights
- [#63243](https://github.com/vllm-project/vllm/pull/63243) [ROCm][Perf][DSv4] Use AITER tuned GEMM for the Router GEMM on gfx1250
- [#61127](https://github.com/vllm-project/vllm/pull/61127) [Bugfix][CPU] Reject -1 placeholder drafts in the C++ rejection sampler
- [#68311](https://github.com/vllm-project/vllm/pull/68311) [CI][ROCm] Clean up the specialized decode test primitives (follow-up to #67135)
- [#63279](https://github.com/vllm-project/vllm/pull/63279) [Bugfix][FA4] Cover paged dense prefill specializations in the warmup
- [#68698](https://github.com/vllm-project/vllm/pull/68698) [Bugfix][Transformers backend] Fuse packed qkv that is sliced, not split
- [#68729](https://github.com/vllm-project/vllm/pull/68729) [Bugfix][HiSparse] Skip GPU restores for cancelled KV imports
- [#68084](https://github.com/vllm-project/vllm/pull/68084) [Bugfix][MoE] Fix missing SwiGLU clamp in batched DeepGEMM
- [#68701](https://github.com/vllm-project/vllm/pull/68701) [Kimi K3.1][Specialized decode] Serve GQA DSpark drafts on the specialized drafter
- [#68009](https://github.com/vllm-project/vllm/pull/68009) [Kernel] Restructure DSA kernels
- [#66812](https://github.com/vllm-project/vllm/pull/66812) [Kernel][Perf] Run GLM-5.3-Flash FP8 routed experts in SM90 DeepGEMM Mega MoE
- [#68257](https://github.com/vllm-project/vllm/pull/68257) [CI] Enroll 10 steps in automatic sharding
- [#67976](https://github.com/vllm-project/vllm/pull/67976) [MM][CG] Add encoder CUDA graph support for LFM3-VL
- [#68764](https://github.com/vllm-project/vllm/pull/68764) [Bugfix][Structured Output] Don't pin the grammar bitmask
- [#68353](https://github.com/vllm-project/vllm/pull/68353) [Bugfix][Kernel] Fix MXFP8 linear layers whose N is not a multiple of 8 or 32
- [#67385](https://github.com/vllm-project/vllm/pull/67385) [Bugfix][Scheduler] Don't let later image requests overtake a request deferred for encoder limits
- [#68070](https://github.com/vllm-project/vllm/pull/68070) [Perf][Parser] Skip per-tick conversion of non-JSON DeepSeek DSML argument values
- [#67348](https://github.com/vllm-project/vllm/pull/67348) [Frontend] Enforce max_tokenize_tokens limit to prevent unbounded inputs and DoS
- [#67981](https://github.com/vllm-project/vllm/pull/67981) [Bugfix][FA4] Warm the SplitKV combine kernel for the layer's query heads
- [#68510](https://github.com/vllm-project/vllm/pull/68510) [Refactor] Remove dead code in models
- [#65241](https://github.com/vllm-project/vllm/pull/65241) [Bugfix][Kernel] Add __syncwarp before the lane-0 stores in the fused KDA decode block reductions
- [#63397](https://github.com/vllm-project/vllm/pull/63397) [ROCm][Perf][MLA] Use AITER Triton bf16 BMM for the decode W_UV when tuned
- [#67941](https://github.com/vllm-project/vllm/pull/67941) [KV Cache] Allow mixed page sizes in a layer-compact KV layout (for Nemotron Shortcut)
- [#62912](https://github.com/vllm-project/vllm/pull/62912) [Perf][MoE] Select full-warp top-k rows with redux.sync and keep selections in registers (SM80+)
- [#68761](https://github.com/vllm-project/vllm/pull/68761) [Model][Perf] Inkling 2: Humming expert GEMMs on Hopper
- [#68529](https://github.com/vllm-project/vllm/pull/68529) [KV Connector] Honor per-request Mooncake offload limits
- [#65251](https://github.com/vllm-project/vllm/pull/65251) [ROCm] Move AITER MXFP4 linear op registration into _aiter_ops
- [#56617](https://github.com/vllm-project/vllm/pull/56617) [Bugfix][Pooling] Release cached queries when Flash scoring is cancelled
- [#68717](https://github.com/vllm-project/vllm/pull/68717) [Bugfix][torch.compile] Find the compiled module through `*args` in the bytecode hook

#### 🐛 New Issues
- [#68610](https://github.com/vllm-project/vllm/issues/68610) [Bug]: With TP>1, `vllm:num_requests_waiting` briefly includes requests the scheduler hasn't seen yet (since #65466) `bug` `scheduler` 💬4
- [#68711](https://github.com/vllm-project/vllm/issues/68711) [RFC]: A top-level --lm-head-config for the draft and verify lm_head, with per-arch defaults `rocm` `quantization` 💬3
- [#68763](https://github.com/vllm-project/vllm/issues/68763) [Bug]: Stacked ModelOpt NVFP4 experts fail to load: `experts.down_proj_input_scale` maps to nonexistent `w2_weight_input_scale` 💬3
- [#68725](https://github.com/vllm-project/vllm/issues/68725) [Bug]: HiSparse loses cached prefixes after long requests, far below host-pool capacity (0% hits on re-sent 60k prompts) `bug` `hisparse` 💬3
- [#68590](https://github.com/vllm-project/vllm/issues/68590) [Bug]: olmo3 tool parser, stream=true: a reply that is a leading prefix of <function_calls> never reaches the client `bug` `tool-calling` 💬3
- [#68575](https://github.com/vllm-project/vllm/issues/68575) [Bug]: /v1/responses silently drops previous_input_messages on non-Harmony models (returns 200 with the history ignored) `tool-calling` `gpt-oss` 💬3
- [#68692](https://github.com/vllm-project/vllm/issues/68692) [Bug]: Structured output does not see reasoning end at a tool-call opener for deepseek_v4 / deepseek_v41 (multi-token) and inkling `structured-output` `tool-calling` `deepseek` `inkling` 💬2
- [#68833](https://github.com/vllm-project/vllm/issues/68833) [Bug]: The faulthandler.dump_traceback used in the Watchdog can print stack traces for only 100 threads. `bug` 💬2
- [#68647](https://github.com/vllm-project/vllm/issues/68647) [Bug]: DSV4.1 Model weight memory increased from ~47 GiB to ~60 GiB per GPU between two nightlies (11.12 nightly and 11.18 nightly) H100 `bug` `deepseek` 💬2
- [#68579](https://github.com/vllm-project/vllm/issues/68579) [Bug]: Python frontend accepts two tools with the same name; the Rust frontend rejects them with 400 `bug` `tool-calling` `rust` 💬2
- [#68705](https://github.com/vllm-project/vllm/issues/68705) [Bug]: Qwen3.8-27B TP8 LoRA startup fails on non-contiguous Inductor-padded GDN output `bug` 💬1
- [#68791](https://github.com/vllm-project/vllm/issues/68791) [Feature]: Support tool search (tool_search / tool_search_output) on /v1/responses `tool-calling` 💬1
- [#68668](https://github.com/vllm-project/vllm/issues/68668) [Bug]: [HiSparse] GLM-5.3-Flash with fp8_ds_mla KV fails at the first prefill on Hopper (AssertionError in HiSparseMLAIndexGroup._prefill_gather_plan) `bug` `glm`
- [#68625](https://github.com/vllm-project/vllm/issues/68625) [Bug]: CPU offloading fails at startup with AttributeError: module 'os' has no attribute 'memfd_create' (uv-managed Python) `bug` `intel-gpu` 💬1
- [#68601](https://github.com/vllm-project/vllm/issues/68601) [Bug]: `/v1/completions` with `echo` + `logprobs` returns HTTP 500 `IndexError: list index out of range` when the request is aborted before its prompt is processed `bug` 💬1
- [#68589](https://github.com/vllm-project/vllm/issues/68589) [Bug]: A prompt of exactly max_model_len tokens gets "max_tokens must be at least 1, got 0" instead of the context-length error (Rust frontend returns the context-length error) `bug` `rust` 💬1
- [#68627](https://github.com/vllm-project/vllm/issues/68627) [Bug]: KeyError loading a w4afp8 checkpoint with --speculative-config.method mtp (MTP loader skips the quantization checkpoint mapper) `quantization`
- [#68817](https://github.com/vllm-project/vllm/issues/68817) [Bug]: SM120 FlashInfer sparse MLA cannot select dense-MHA prefill `bug`
- [#68813](https://github.com/vllm-project/vllm/issues/68813) [Bug]: DeepSeek-V3.2 / GLM-5.x drop the final-layer aux hidden state, so `extract_hidden_states` returns one fewer state than requested `deepseek` `glm`
- [#68784](https://github.com/vllm-project/vllm/issues/68784) [Tracking] Rust frontend as default `frontend` `rust`
- [#68762](https://github.com/vllm-project/vllm/issues/68762) [RFC]: Decode states at prefix-match boundaries for hybrid prefix caching (FlashStates) `kimi` `kv-cache-manager`
- [#68777](https://github.com/vllm-project/vllm/issues/68777) [RFC]: Upstream the vLLM gaps that Hugging Face TRL works around `quantization`
- [#68779](https://github.com/vllm-project/vllm/issues/68779) [Bug]: Hybrid Mamba + DFlash: `_mamba_block_aligned_split` splits on `cache_config.block_size` (64) instead of the Mamba block (4544) → 0% prefix-cache hits by default `bug`
- [#68778](https://github.com/vllm-project/vllm/issues/68778) [RFC]: Store the Gemma 4 global-layer KV cache once (attention_k_eq_v): 37.5% fewer global KV values, read by the stock attention kernel `RFC` `quantization`
- [#68736](https://github.com/vllm-project/vllm/issues/68736) [Bug][Multimodal] Muse-Spark-Open: video loader registration is a silent no-op — all videos fall back to opencv 32-frame sampling `multi-modality`
- [#68716](https://github.com/vllm-project/vllm/issues/68716) [Feature]: Async CP for PCP + DCP prefill: prefetch the next layer's KV and indexer K behind the current layer's compute `feature request`
- [#68695](https://github.com/vllm-project/vllm/issues/68695) DFlash/LiLiCorr speculator CUDA-graph capture segfault on GB10 (sm_121)
- [#68687](https://github.com/vllm-project/vllm/issues/68687) [Feature]: dual_key_gumbel watermarking for DFlash2 drafters
- [#68678](https://github.com/vllm-project/vllm/issues/68678) [RFC]: [KV Offload] Batched, serializable connector-manager interface `RFC`
- [#68671](https://github.com/vllm-project/vllm/issues/68671) [Bug][KV Connector][NIXL] Push mode decodes partially written KV when NIXL writes with UCX SGL (ai-dynamo/nixl#2632) and UCX lacks openucx/ucx#12381; check before upgrading NIXL `kv-connector`
- [#68669](https://github.com/vllm-project/vllm/issues/68669) [Bug]: [HiSparse][P/D] HiSparse on the decode instance fails for hybrid models (GLM-5.3-Flash): Mixed-device KV registration is only supported for MLA models without Mamba layers `bug` `glm`
- [#68616](https://github.com/vllm-project/vllm/issues/68616) [RFC]: Upstream migration plan for prime-rl vLLM integrations `RFC` `quantization`
- [#68628](https://github.com/vllm-project/vllm/issues/68628) [Bug]: A named attention backend prevents vllm serve from starting with spawn
- [#68619](https://github.com/vllm-project/vllm/issues/68619) [Bug]: null values in a --config YAML file are passed as the string "None"
- [#68587](https://github.com/vllm-project/vllm/issues/68587) [Bug]: Manual FlashInfer all-reduce + RMSNorm bypasses batch-invariant dispatch `quantization` `batch-invariance`
- [#68595](https://github.com/vllm-project/vllm/issues/68595) [Bug]: `/resume` while the engine is asleep (sleep level 1) kills EngineCore: "ValueError: Pointer argument cannot be accessed from Triton (cpu tensor?)" `bug`
- [#68573](https://github.com/vllm-project/vllm/issues/68573) [Feature]: Add before/after model-load hooks for worker extensions `feature request`

#### 🔒 Closed Issues
- [#50013](https://github.com/vllm-project/vllm/issues/50013) [Feature]: AMD Kimi K3 MoRI MI355X disagg
- [#55534](https://github.com/vllm-project/vllm/issues/55534) [Bug]: CUTLASS 3.x scaled_mm ignores leading strides of sliced tensors
- [#65618](https://github.com/vllm-project/vllm/issues/65618) [Bug]: DSpark draft for DeepSeek-V4 models has no `packed_modules_mapping` → fused layers ignore `ignored_layers`, 0% acceptance (repro: DeepSeek-V4.1-Flash)
- [#64392](https://github.com/vllm-project/vllm/issues/64392) [Bug]: TimeoutError: RPC call to sample_tokens timed out.
- [#46589](https://github.com/vllm-project/vllm/issues/46589) [Bug]: Segfault encountered in qwen3.5-27B long video (>2G)inference
- [#65592](https://github.com/vllm-project/vllm/issues/65592) [Bug]: /inference/v1/generate with "max_tokens": null bypasses default/override/platform output-token caps
- [#67197](https://github.com/vllm-project/vllm/issues/67197) [RFC]: Resource bound for the `/tokenize` endpoint
- [#68555](https://github.com/vllm-project/vllm/issues/68555) [CI Failure]: (MI355 DPX) Unlimited-OCR-2 - test_unlimited_ocr2_excess_markers_survive_preemption[ROCM_AITER_FA]
- [#67264](https://github.com/vllm-project/vllm/issues/67264) [Bug]: BLIP-2 tower/connector LoRA rejects a non-divisible encoder budget
- [#67292](https://github.com/vllm-project/vllm/issues/67292) [Bug]: With chunked prefill off and async scheduling, a multimodal request deferred for encoder limits can be overtaken by later image requests without limit
- [#62460](https://github.com/vllm-project/vllm/issues/62460) [Bug][Rust Frontend] /v1/completions rejects an array of prompts
- [#51049](https://github.com/vllm-project/vllm/issues/51049) [Bug]: `fused_qk_norm_rope` multi-head-per-warp kernel corrupts partial-NeoX (`rotary_dim < head_dim`) QK-Norm models on SM90
- [#68561](https://github.com/vllm-project/vllm/issues/68561) [Bug]: HiSparse + DSpark (shared draft KV) crashes in extend_kv_cache: KeyError in bind_kv_caches for host-resident target layer
- [#61117](https://github.com/vllm-project/vllm/issues/61117) [Bug]: CPU backend: C++ rejection_random_sample kernel accepts -1 placeholder drafts, so structured-output requests can sample from an unmasked row
- [#64997](https://github.com/vllm-project/vllm/issues/64997) [Frontend]: Render requests: keep mm_metadata in the response when the tensors are omitted
- [#58657](https://github.com/vllm-project/vllm/issues/58657) Use-case proposal: payment-gated self-hosted vLLM for agents (HTTP 402 + Nano)
- [#67946](https://github.com/vllm-project/vllm/issues/67946) [Bug][Watermarking]: `deduplicate_contexts="all"` misses repeats across the prompt boundary under speculative decoding

### SGLang (`sgl-project/sglang`)

**Stars:** 38,862 · **Open issues:** 7,014 · **Last push:** <1h ago

There were no new releases for SGLang today. Significant merged features include the introduction of NVTX range emission for profiling in PR #50140, along with enhancements to the model loader in PR #48227, which caps the bytes used by the multithreaded loader. Additionally, PR #51637 addresses a fix for the sgl-router to ensure accurate counting of media tie-breaks at the worker level. A notable new issue reported is #51531, highlighting a performance drop when using the bfloat16 data type for long-reasoning tasks with the Qwen3.5-9B model, indicating potential areas for optimization. Overall, today's updates reflect ongoing improvements in performance and stability rather than major version changes.

#### ✅ Merged PRs
- [#50140](https://github.com/sgl-project/sglang/pull/50140) [Feat] profiler: Emit the forward step span as an NVTX range
- [#48227](https://github.com/sgl-project/sglang/pull/48227) [Feat] model-loader: cap the bytes the multithreaded loader keeps in flight
- [#51671](https://github.com/sgl-project/sglang/pull/51671) [Fix] sgl-router: Count a media tie-break once, at the worker level
- [#51691](https://github.com/sgl-project/sglang/pull/51691) [Doc] cookbook: Add Hy4
- [#51424](https://github.com/sgl-project/sglang/pull/51424) [CI] [NPU] workflow: Re-enable PR trigger and rerun only the failed nightly jobs
- [#51594](https://github.com/sgl-project/sglang/pull/51594) [CI] diffusion: Give h100-computable-d its own denoise references
- [#49995](https://github.com/sgl-project/sglang/pull/49995) [Refactor] [NPU] operators: Migrate sgl-kernel-npu calls to public operators entry points
- [#51670](https://github.com/sgl-project/sglang/pull/51670) [Fix] linker: Read linker load-back from storage hits in the linker e2e tests
- [#50962](https://github.com/sgl-project/sglang/pull/50962) [Fix] hicache: Fail storage attach when the native hash extension cannot build
- [#51305](https://github.com/sgl-project/sglang/pull/51305) [Fix] mem_cache: Set FP4 default in page-sharded DSA test mock
- [#51662](https://github.com/sgl-project/sglang/pull/51662) [Test] sgl-router: Run the e2e suite on 4-gpu-h100 with a PD dp-aware 2P+2D test
- [#51637](https://github.com/sgl-project/sglang/pull/51637) [Fix] sgl-router: match the engine's Responses summary events, argument coercion, and error type
- [#49127](https://github.com/sgl-project/sglang/pull/49127) [Feat] linker: Expose external cache linker lookup, load, offload and wait metrics
- [#51338](https://github.com/sgl-project/sglang/pull/51338) [Feat] classify: Support independent multi-label probabilities
- [#48937](https://github.com/sgl-project/sglang/pull/48937) [Feat] sgl-router: Route DeepSeek image chats by prefix cache
- [#48389](https://github.com/sgl-project/sglang/pull/48389) [Feat] [NPU] mem-cache: support GLM DSA cache layer-split on Ascend
- [#51520](https://github.com/sgl-project/sglang/pull/51520) [Feat] kimi-k3: Support --enable-layernorm-sp for sequence-parallel prefill
- [#51649](https://github.com/sgl-project/sglang/pull/51649) [Doc] diffusion: Distinguish plain and pipelined Ulysses transports
- [#51652](https://github.com/sgl-project/sglang/pull/51652) [Doc] diffusion: Clarify FLUX.3 conditioning cache and VAE settings
- [#43279](https://github.com/sgl-project/sglang/pull/43279) [Feat] wan2.2-s2v: Add Wan2.2-S2V-14B speech-to-video with XPU support (port of #21609)
- [#51536](https://github.com/sgl-project/sglang/pull/51536) [CI] [NPU] chore: Bump SGLang kernel NPU tag to 2026.11.0.post10
- [#50823](https://github.com/sgl-project/sglang/pull/50823) [Feat] xpu: Consolidate simple XPU enablements
- [#51455](https://github.com/sgl-project/sglang/pull/51455) [Perf] disagg: Pack a DCP-collapsed draft with the target rows in DCP-1 -> DCP-N transfers
- [#51382](https://github.com/sgl-project/sglang/pull/51382) [Perf] MiniMax-M3: overlap the shared expert with MegaMoE under CUDA graph
- [#49532](https://github.com/sgl-project/sglang/pull/49532) [Perf] cosmos3: batch clean refresh and enable VAE fast paths for Bimanual model
- [#46603](https://github.com/sgl-project/sglang/pull/46603) [Perf] diffusion: Accelerate conditioning hashing with GPU BLAKE3
- [#51411](https://github.com/sgl-project/sglang/pull/51411) [Perf] diffusion/flux3: Encode prompts through the conditioning cache
- [#51643](https://github.com/sgl-project/sglang/pull/51643) [Chore] release: Cherry-pick [Test] [AMD] sana-video2: Skip the BF16 softmax attention test when the build is not CUDA to release/v1.0.0 (#50220)
- [#51642](https://github.com/sgl-project/sglang/pull/51642) [Chore] release: Cherry-pick [Fix] spec/dflash: Turn the DFLASH draft KV ring off by default to release/v1.0.0 (#51386)
- [#51391](https://github.com/sgl-project/sglang/pull/51391) [CI] permissions: update name for DevashishLal-CB to dlal-sgl
- [#35637](https://github.com/sgl-project/sglang/pull/35637) [Feat] scheduler: Add UniBoost tail-aware schedule policy with a rank-invariant TP/PP mode
- [#51521](https://github.com/sgl-project/sglang/pull/51521) [Fix] scheduler: Send Engine.collective_rpc through the control request path
- [#42314](https://github.com/sgl-project/sglang/pull/42314) [Feat] sgl-router: Serve the OpenAI Responses API on /v1/responses
- [#49246](https://github.com/sgl-project/sglang/pull/49246) [Feat] sampling: Honor per-request sampling_seed without deterministic inference
- [#48220](https://github.com/sgl-project/sglang/pull/48220) [Fix] [NVIDIA] cosmos3: Fix multi-node execution
- [#51380](https://github.com/sgl-project/sglang/pull/51380) [Perf] diffusion/flux3: Keep static streams across steps under CFG parallel
- [#51406](https://github.com/sgl-project/sglang/pull/51406) [Perf] diffusion/flux3: Shard the image VAE decode only with --vae-sp
- [#51607](https://github.com/sgl-project/sglang/pull/51607) [Fix] spec: Clear moe_dense_tp_size for a draft narrowed to plain TP
- [#51529](https://github.com/sgl-project/sglang/pull/51529) [Fix] diffusion/flux3: Honor --component-precisions.vae
- [#51554](https://github.com/sgl-project/sglang/pull/51554) [Perf] diffusion: Pick the plain Ulysses exchange's transport by payload
- [#51600](https://github.com/sgl-project/sglang/pull/51600) [Doc] diffusion: Clarify native Wan video request dimensions
- [#51415](https://github.com/sgl-project/sglang/pull/51415) [Feat] sgl-router: Add --decode-dp-rank-policy and rank least_tokens by expected KV
- [#51515](https://github.com/sgl-project/sglang/pull/51515) [Perf] [NVIDIA] dsa: Fuse the FP4 indexer key store and head gate
- [#51289](https://github.com/sgl-project/sglang/pull/51289) [Fix] dsa: Attend the sharded indexer's local slots in trtllm / prims_ts DCP decode
- [#51387](https://github.com/sgl-project/sglang/pull/51387) [Perf] diffusion/flux3: Run the native SwiGLU through the shared SiluAndMul layer

#### 🐛 New Issues
- [#51531](https://github.com/sgl-project/sglang/issues/51531) [Bug] `--mamba-ssm-dtype bfloat16` costs ~8 points on long-reasoning MATH-500 with Qwen3.5-9B (float16 does not); GSM8K-style checks miss it 💬3
- [#51627](https://github.com/sgl-project/sglang/issues/51627) [Bug] fused_moe_triton tuner: NemotronH is tuned with a gated SiLU shape, but its MoE is non-gated relu2 💬2
- [#51608](https://github.com/sgl-project/sglang/issues/51608) [Bug] HiCache L3 storage prefetch never completes under CP (attn_cp_size=8) with fast_file — storage_hit stays 0 while writes accumulate; requests admitted only after the full retry cap 💬2
- [#51555](https://github.com/sgl-project/sglang/issues/51555) [Bug] Arbitrary Directory Creation and File Overwrite via `extra_sampling_params` in `POST /rollout/generate` 💬2
- [#51430](https://github.com/sgl-project/sglang/issues/51430) [Bug] Chunked weight updates can lose cross-tensor loader state and commit partial updates 💬2
- [#51651](https://github.com/sgl-project/sglang/issues/51651) [Bug] Qwen3.5-9B fails to start with --enable-torch-compile: decode CUDA graph capture OOMs at bs=32 on a multi-GB allocation 💬1
- [#51576](https://github.com/sgl-project/sglang/issues/51576) [Roadmap] CUDA Graph Persistence with Foundry 💬1
- [#51480](https://github.com/sgl-project/sglang/issues/51480) [Bug] sgl-deep-gemm PyPI wheels are built with CUDA 13.0, which compiles out DeepGEMM's CUDA >= 13.4 paths (in-CTA-norm Mega mHC on Rubin) 💬1
- [#51470](https://github.com/sgl-project/sglang/issues/51470) rust-server: /generate hidden_states for the prefill step is one flat row, Python returns one row per token
- [#51701](https://github.com/sgl-project/sglang/issues/51701) [Bug] Unvalidated URLs in multimodal_gen /v1/videos (video_path, input_reference/image_path, control_path) lead to SSRF
- [#51699](https://github.com/sgl-project/sglang/issues/51699) [Bug] Sleep mode does not restore plain tensor attributes: only parameters and buffers survive release/resume
- [#51677](https://github.com/sgl-project/sglang/issues/51677) [Feature] Return per-token predictions from /v1/classify
- [#51630](https://github.com/sgl-project/sglang/issues/51630) [Feature] Support model-specific input and output processing on existing serving routes
- [#51628](https://github.com/sgl-project/sglang/issues/51628) [Perf] Mamba2 _chunk_scan_fwd_kernel compiles during serving on NemotronH, stalling the first large prefills
- [#51626](https://github.com/sgl-project/sglang/issues/51626) [Perf] Triton MoE is 5–8× slower than flashinfer_cutlass for Nemotron 3 Nano FP8 at TP8 on H100
- [#51614](https://github.com/sgl-project/sglang/issues/51614) [Bug] Gemma 4 non-streaming tool calls discard subsequent assistant text
- [#51613](https://github.com/sgl-project/sglang/issues/51613) [Bug] Gemma 4 vision pooling mixes padding into image tokens and overflows in FP16
- [#51550](https://github.com/sgl-project/sglang/issues/51550) [Tracking] GLM-5.3 (glm_moe_dsa) performance optimization on SM120
- [#51548](https://github.com/sgl-project/sglang/issues/51548) [Tracking] Kimi-K3 and Kimi-K3.1 performance optimization on consumer Blackwell (SM120)
- [#51496](https://github.com/sgl-project/sglang/issues/51496) SPF aging is ignored when choosing a shared prefix leader
- [#51478](https://github.com/sgl-project/sglang/issues/51478) [Bug] dsv41: MegaGate row masks are stale in decoder replay-tail CUDA graphs, so short prompts drift
- [#51472](https://github.com/sgl-project/sglang/issues/51472) [Bug] [NVIDIA] DSA dense-prefill threshold is ignored on SM120 despite native FA4 support
- [#51440](https://github.com/sgl-project/sglang/issues/51440) LMCache load-back over-evicts from the independent FULL KV pool

#### 🔒 Closed Issues
- [#50809](https://github.com/sgl-project/sglang/issues/50809) [Feature] Support multi-label classification in /v1/classify
- [#39971](https://github.com/sgl-project/sglang/issues/39971) [KDA] Fused intra-chunk prefill path (`chunk_kda_fwd_intra(fuse_diagonal=True)`) collapses for strong per-channel decays because of the ±126 clamp in the exp2 factorization
- [#40432](https://github.com/sgl-project/sglang/issues/40432) 4*5090 run nvidia/Qwen3.8-Flash-Next-NVFP4
- [#40156](https://github.com/sgl-project/sglang/issues/40156) [Bug] EAGLE spec-decode: num_token_non_padded is 0 for draft batches, masking all draft topk ids to -1 and corrupting the MoE dispatch
- [#40364](https://github.com/sgl-project/sglang/issues/40364) [Bug] DP scheduler SIGQUIT terminates the DataParallelController instead of notifying the Engine
- [#40393](https://github.com/sgl-project/sglang/issues/40393) [Bug] 0.5.20: `--quantization humming` crashes at weight load — `BlockQuantScaleParameter` has no attribute `format_ue8m0`
- [#40417](https://github.com/sgl-project/sglang/issues/40417) [Bug] humming MoE runner picks tuning config with a 4x-inflated shape under EP, and the obvious EP-aware fix regresses serving
- [#38707](https://github.com/sgl-project/sglang/issues/38707) [Bug][ROCm] PP + DSA: HIP fault on multi-chunk prefill; failure threshold tracks --cuda-graph-backend-decode
- [#40459](https://github.com/sgl-project/sglang/issues/40459) [Bug] handle_embedding_request does not abort over-length requests before enqueuing
- [#50073](https://github.com/sgl-project/sglang/issues/50073) [Bug] collective_rpc unreliable
- [#50583](https://github.com/sgl-project/sglang/issues/50583) [Bug] inkling2: Generic ModelOpt metadata overrides checkpoint precision config
- [#47508](https://github.com/sgl-project/sglang/issues/47508) [Bug][ROCm] Kimi-K3 fused KDA input-projection buffers are replaced on weight reload
- [#50749](https://github.com/sgl-project/sglang/issues/50749) [Bug] SM120: BF16 TileLang DSA decode exceeds per-block shared memory (170048 > 101376 bytes)

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 135,781 · **Open issues:** 2,610 · **Last push:** 4h ago

On November 20, 2026, the llama.cpp project released several updates, including version b12556, which fixed an issue with computing the slot count as uint32_t, and b12555, which added OpenCL support for dp4a in KQ matrix multiplication. Other notable releases included b12554, introducing BF16 support for ROPE and SET_ROWS on CPU and CUDA, and b12553, which addressed a projector loading issue in the YuE2 model, allowing audio generation to continue without failure. Significant merged pull requests included #32577, providing further OpenCL optimizations, and #32387, which enhanced BF16 functionality. The day also saw the emergence of new issues, notably feature request #32603, which seeks Vulkan support for K/V rows in FLASH_ATTN_EXT.

#### 🚀 New Releases
- [b12556](https://github.com/ggml-org/llama.cpp/releases/tag/b12556) b12556
- [b12555](https://github.com/ggml-org/llama.cpp/releases/tag/b12555) b12555
- [b12554](https://github.com/ggml-org/llama.cpp/releases/tag/b12554) b12554
- [b12553](https://github.com/ggml-org/llama.cpp/releases/tag/b12553) b12553
- [b12552](https://github.com/ggml-org/llama.cpp/releases/tag/b12552) b12552
- [b12551](https://github.com/ggml-org/llama.cpp/releases/tag/b12551) b12551
- [b12550](https://github.com/ggml-org/llama.cpp/releases/tag/b12550) b12550
- [b12549](https://github.com/ggml-org/llama.cpp/releases/tag/b12549) b12549
- [b12548](https://github.com/ggml-org/llama.cpp/releases/tag/b12548) b12548
- [b12547](https://github.com/ggml-org/llama.cpp/releases/tag/b12547) b12547

#### ✅ Merged PRs
- [#32505](https://github.com/ggml-org/llama.cpp/pull/32505) CUDA: implement support for duplicate expert IDs
- [#32601](https://github.com/ggml-org/llama.cpp/pull/32601) hrm : bound cache-slot count to prevent out-of-bounds write on load
- [#32577](https://github.com/ggml-org/llama.cpp/pull/32577) opencl: support dp4a for KQ mm in decomposed FA
- [#32606](https://github.com/ggml-org/llama.cpp/pull/32606) mtmd : fix YuE2 projector loading
- [#32387](https://github.com/ggml-org/llama.cpp/pull/32387) ggml : add BF16 support to ROPE and SET_ROWS (CPU, CUDA)
- [#32590](https://github.com/ggml-org/llama.cpp/pull/32590) ggml-openvino: fix OpenVINO CI, minor fixes and optimizations
- [#32489](https://github.com/ggml-org/llama.cpp/pull/32489) cuda: Scatter kernel for set_n
- [#27258](https://github.com/ggml-org/llama.cpp/pull/27258) Formalizing scheduler and async backend behavior through tests
- [#32429](https://github.com/ggml-org/llama.cpp/pull/32429) llama: fixes for Inkling 2 attention mask
- [#32602](https://github.com/ggml-org/llama.cpp/pull/32602) metal : fix the second argument of NSMakeRange
- [#32250](https://github.com/ggml-org/llama.cpp/pull/32250) webgpu: add POOL_2D support
- [#32596](https://github.com/ggml-org/llama.cpp/pull/32596) llama : remove redundant fields from llm_graph_params
- [#32597](https://github.com/ggml-org/llama.cpp/pull/32597) readme : fix release badge
- [#32594](https://github.com/ggml-org/llama.cpp/pull/32594) ci : fix build-opencl.yml
- [#32542](https://github.com/ggml-org/llama.cpp/pull/32542) metal : CONV_2D tensor API for M5, split-K for all chips
- [#32589](https://github.com/ggml-org/llama.cpp/pull/32589) qwen3vl : set t_layer_inp for EAGLE-3
- [#32555](https://github.com/ggml-org/llama.cpp/pull/32555) ui: cut Llama Chat's first-load JavaScript by 63%, load diagrams, math and PDFs on demand
- [#31910](https://github.com/ggml-org/llama.cpp/pull/31910) IQ2 creation speedup through caching
- [#32557](https://github.com/ggml-org/llama.cpp/pull/32557) llama : remove PATH_MAX
- [#32565](https://github.com/ggml-org/llama.cpp/pull/32565) ci : use LLVM 22
- [#32545](https://github.com/ggml-org/llama.cpp/pull/32545) llama : fall back to buffered I/O on EIO
- [#31045](https://github.com/ggml-org/llama.cpp/pull/31045) vulkan : enable MMQ with mixed signedness integer dots
- [#28528](https://github.com/ggml-org/llama.cpp/pull/28528) vulkan: Implement stream-k MUL_MAT
- [#32379](https://github.com/ggml-org/llama.cpp/pull/32379) vulkan: use floating-point zero for storage-only FP16 in DIAG/TRI
- [#32374](https://github.com/ggml-org/llama.cpp/pull/32374) CUDA: use 64-bit dst offsets in mul_mat_q
- [#32522](https://github.com/ggml-org/llama.cpp/pull/32522) opencl: allow adjusting KV scratch padding in decomposed FA

#### 🐛 New Issues
- [#32603](https://github.com/ggml-org/llama.cpp/issues/32603) Feature Request: Vulkan support for K/V rows in FLASH_ATTN_EXT `enhancement` 💬3
- [#32587](https://github.com/ggml-org/llama.cpp/issues/32587) Feature Request: server: per-span mean pooling on /embedding with --pooling none (`pool_groups`) `enhancement` 💬2
- [#32630](https://github.com/ggml-org/llama.cpp/issues/32630) Eval bug: Segmentation fault after upgrading hip-runtime-amd to 10.1-2.1 `bug-unconfirmed` 💬1
- [#32624](https://github.com/ggml-org/llama.cpp/issues/32624) Eval bug: gpt-oss-120b MXFP4 harmony tokens inside tool-call arguments break peg-native parser 💬1
- [#32598](https://github.com/ggml-org/llama.cpp/issues/32598) Misc. bug: Hexagon: test-backend-ops POOL_2D fails for 128-wide kernels with padding on HTP0 (v73) `bug-unconfirmed` 💬1
- [#32637](https://github.com/ggml-org/llama.cpp/issues/32637) Eval bug: Metal backend sampling returns token ID −1 for a 512-token vocabulary `bug-unconfirmed`
- [#32623](https://github.com/ggml-org/llama.cpp/issues/32623) Misc. bug: Semver releases (v1.0.0, etc.) have no release binaries `bug`
- [#32621](https://github.com/ggml-org/llama.cpp/issues/32621) Misc. bug: Metal SOLVE_TRI returns inf for large n `bug-unconfirmed`
- [#32607](https://github.com/ggml-org/llama.cpp/issues/32607) # [SYCL] MMQ kernels hang the GPU on Battlemage - first MUL_MAT batch dispatched to mmq.cpp never retires (dead since #7566) `bug-unconfirmed`

#### 🔒 Closed Issues
- [#25859](https://github.com/ggml-org/llama.cpp/issues/25859) Offloaded-MoE prefill leaves the GPU idle waiting on serial expert H2D copies (single-GPU -ncmoe)
- [#30755](https://github.com/ggml-org/llama.cpp/issues/30755) Compile bug: rocm-6.3.4, no matching function for call to group_mask_warp_inplace
- [#29288](https://github.com/ggml-org/llama.cpp/issues/29288) Misc. bug: Openvino cannot run gemma on intel core 7 155h
- [#32280](https://github.com/ggml-org/llama.cpp/issues/32280) Misc. bug: CPU→GPU prompt-cache restores can stall inference during concurrent requests with unified KV enabled.
- [#27388](https://github.com/ggml-org/llama.cpp/issues/27388) Server wedge: generation stalls mid-decode; /health OK but /slots hangs; needs SIGKILL
- [#29932](https://github.com/ggml-org/llama.cpp/issues/29932) qwen4exp: per_layer_token_embd is CPU-pinned — Q8 model cannot load on 2×96 GiB Vulkan+RPC (needs ~50.7 GiB host RAM)
- [#30004](https://github.com/ggml-org/llama.cpp/issues/30004) Misc. bug: CUDA ADD/GELU slower on B200 since PDL commit
- [#28761](https://github.com/ggml-org/llama.cpp/issues/28761) [CUDA] sm_75 FA mma-f16: 32-token Q-tile cap is suboptimal — register spill at head_dim=256, missed gain at head_dim=128
- [#29917](https://github.com/ggml-org/llama.cpp/issues/29917) ggml-cpu: ggml_vec_dot_bf16 has no NEON implementation - BF16 weights fall back to scalar loop on ARM
- [#30028](https://github.com/ggml-org/llama.cpp/issues/30028) Misc. bug: CPU flash attention produces NaN when the first key has an -inf score
- [#30074](https://github.com/ggml-org/llama.cpp/issues/30074) qwen4exp: Metal decode depth-decay on M5 Max — free-form 26.9 t/s at 175K vs 73.9 t/s with n-gram spec vs 53.9 t/s MLX
- [#32289](https://github.com/ggml-org/llama.cpp/issues/32289) Compile bug: Fails on GNU/Hurd due to unconditional `PATH_MAX` usage
- [#30032](https://github.com/ggml-org/llama.cpp/issues/30032) qwen4exp QSA indexer OOMs once vision disables the scalar fast path (O(n_kv × ubatch) mask/score materialization) — the TODO in #29824 is this exact cost
- [#30046](https://github.com/ggml-org/llama.cpp/issues/30046) Misc. bug: Heap out-of-bounds read in /v1/embeddings when started with --embeddings --rerank (RANK pooling)
- [#30058](https://github.com/ggml-org/llama.cpp/issues/30058) vulkan: cm1 int8 mmq uses fp16 mmq wg denoms (tile split breaks when BN differs)
- [#30070](https://github.com/ggml-org/llama.cpp/issues/30070) Misc. bug: default thread count ignores cgroup v2 CPU limits in containers
- [#32293](https://github.com/ggml-org/llama.cpp/issues/32293) Compile bug: test-llama-mmap: opened with direct I/O (alignment: 4096 bytes)

### Ollama (`ollama/ollama`)

**Stars:** 187,682 · **Open issues:** 4,692 · **Last push:** 4h ago

On November 20, 2026, there were no new releases for Ollama; however, the notable merged pull request #19678 includes adaptations to the mlxrunner for improved memory pressure handling based on saved history. Among the new issues reported, #19780 highlights a problem with empty assistant messages despite valid tool calls, while #19777 requests support for OVHcloud Olala models. Additionally, #19782 raises a concern regarding a Windows API error related to connection refusals, and #19773 notes issues with near-zero prompt-cache hits at the start of resumed sessions. Overall, the day was primarily routine maintenance, with attention focused on ongoing challenges and feature requests within the community.

#### ✅ Merged PRs
- [#19678](https://github.com/ollama/ollama/pull/19678) mlxrunner: adapt saved history to memory pressure

#### 🐛 New Issues
- [#19780](https://github.com/ollama/ollama/issues/19780) Empty assistant message with finish_reason: stop while completion_tokens shows a valid tool call 💬3
- [#19777](https://github.com/ollama/ollama/issues/19777) [Feature Request] Add support for OVHcloud Olala models `feature request`
- [#19782](https://github.com/ollama/ollama/issues/19782) Windows: /api/embed returns 400 because the runner POST /tokenize to 127.0.0.1:<high-port> is actively refused (connectex) 💬1
- [#19779](https://github.com/ollama/ollama/issues/19779) qwen2.5-coder advertises the "tools" capability but its chat template never emits native tool_calls 💬1
- [#19773](https://github.com/ollama/ollama/issues/19773) Ollama Cloud reports near-zero prompt-cache hits on the first requests of a long resumed session `cloud` 💬1
- [#19775](https://github.com/ollama/ollama/issues/19775) Add a CLI command to list and search models in the Ollama Library `feature request`
- [#19774](https://github.com/ollama/ollama/issues/19774) Prompt cache only reused on exact match; changing the last message re-reads the whole prompt (Vulkan, qwen3:8b) `bug`

#### 🔒 Closed Issues
- [#19780](https://github.com/ollama/ollama/issues/19780) Empty assistant message with finish_reason: stop while completion_tokens shows a valid tool call
- [#19779](https://github.com/ollama/ollama/issues/19779) qwen2.5-coder advertises the "tools" capability but its chat template never emits native tool_calls
- [#19775](https://github.com/ollama/ollama/issues/19775) Add a CLI command to list and search models in the Ollama Library
- [#19774](https://github.com/ollama/ollama/issues/19774) Prompt cache only reused on exact match; changing the last message re-reads the whole prompt (Vulkan, qwen3:8b)

### LiteLLM (`BerriAI/litellm`)

**Stars:** 63,572 · **Open issues:** 5,295 · **Last push:** <1h ago

On November 20, 2026, LiteLLM announced the release of version v1.112.0-dev.1, which includes a test ensuring no native pool is left in the proxy lifespan cleanup. The previous release, v1.111.0-rc.2, also verified multiple related Docker images and included various updates. Significant merged changes included a fix for the proxy to preserve multi-day budget reset offsets, updates to cache behavior for the responses API, and the introduction of a new FIPS 140-3 proxy image. Among the newly reported issues, #52853 highlights a critical bug where the Responses API drops the connection on certain streaming request errors, emphasizing the need for improved error handling in future updates.

#### 🚀 New Releases
- [v1.112.0-dev.1](https://github.com/BerriAI/litellm/releases/tag/v1.112.0-dev.1) v1.112.0-dev.1
- [v1.111.0-rc.2](https://github.com/BerriAI/litellm/releases/tag/v1.111.0-rc.2) v1.111.0-rc.2
- [v1.110.1](https://github.com/BerriAI/litellm/releases/tag/v1.110.1) v1.110.1
- [v1.108.12](https://github.com/BerriAI/litellm/releases/tag/v1.108.12) 1.108.12 (LTS)
- [v1.106.11](https://github.com/BerriAI/litellm/releases/tag/v1.106.11) v1.106.11

#### ✅ Merged PRs
- [#53024](https://github.com/BerriAI/litellm/pull/53024) test(e2e): allow a 3-token floor and 10% on provider token counts (backport #53023 to rc/1.111.0)
- [#53020](https://github.com/BerriAI/litellm/pull/53020) fix(proxy): preserve multi-day budget reset offsets
- [#53007](https://github.com/BerriAI/litellm/pull/53007) fix(responses): backport Claude tool search replay to lts/1.108.x
- [#53012](https://github.com/BerriAI/litellm/pull/53012) fix(proxy): compare budget window reset_at as a UTC instant for every duration
- [#53008](https://github.com/BerriAI/litellm/pull/53008) build(docker): refresh the Wolfi base image to main's digest on stable/1.109.x
- [#53004](https://github.com/BerriAI/litellm/pull/53004) fix(files): match gemini file id spellings to dispatch parsing
- [#52986](https://github.com/BerriAI/litellm/pull/52986) chore(model_prices): sync databricks gemini-4-carbon and gemini-4-hydrogen prices
- [#52924](https://github.com/BerriAI/litellm/pull/52924) fix(responses): cache bridged system prompts on stored GPT-6.2 requests on 1.106 stable
- [#52922](https://github.com/BerriAI/litellm/pull/52922) fix(responses): keep Claude Code billing metadata out of prompts (lts/1.108.x)
- [#52995](https://github.com/BerriAI/litellm/pull/52995) feat(redis): serve the dynamic rate limiter's active teams from a native store
- [#53000](https://github.com/BerriAI/litellm/pull/53000) test(responses): centralize exact system prompt placement expectations
- [#53001](https://github.com/BerriAI/litellm/pull/53001) test(vertex): align scripted authentication with Rust routing
- [#53002](https://github.com/BerriAI/litellm/pull/53002) test(vector-stores): isolate native fallback cooldown state
- [#52435](https://github.com/BerriAI/litellm/pull/52435) fix(proxy): point the startup schema drift check at the packaged schema.prisma
- [#50929](https://github.com/BerriAI/litellm/pull/50929) fix(proxy): decode double-encoded audit log values before masking them
- [#52993](https://github.com/BerriAI/litellm/pull/52993) refactor(ui): shrink zh-CN related test runs and write tests in English
- [#51102](https://github.com/BerriAI/litellm/pull/51102) fix(ocr): read Azure Document Intelligence query options from extra_body
- [#52828](https://github.com/BerriAI/litellm/pull/52828) fix(guardrails): keep tool_result is_error and system row output_config through /v1/messages guardrail rewrites
- [#50330](https://github.com/BerriAI/litellm/pull/50330) feat(docker): add a FIPS 140-3 proxy image
- [#52978](https://github.com/BerriAI/litellm/pull/52978) feat(bedrock): derive STS session tags and session name from caller identity
- [#52989](https://github.com/BerriAI/litellm/pull/52989) feat(proxy): link app member budgets to shared templates
- [#52991](https://github.com/BerriAI/litellm/pull/52991) fix(ui): show saved role on user Details without reload
- [#52990](https://github.com/BerriAI/litellm/pull/52990) feat(ui): complete zh-CN translations and align terms with the glossary
- [#48257](https://github.com/BerriAI/litellm/pull/48257) feat(ui): 接入官方简体中文词库
- [#50582](https://github.com/BerriAI/litellm/pull/50582) fix(bedrock): send native chat and Responses calls to aws_bedrock_runtime_endpoint like Converse
- [#50594](https://github.com/BerriAI/litellm/pull/50594) fix(realtime): keep push-to-talk for transcription sessions opened without intent under a transcript guardrail
- [#52929](https://github.com/BerriAI/litellm/pull/52929) fix(responses): backport #52906 to stable/1.109.x, cache bridged system prompts on stored GPT-6.2 requests
- [#52920](https://github.com/BerriAI/litellm/pull/52920) fix(responses): cache bridged system prompts on stored GPT-6.2 requests (backport #52906 to 1.110)
- [#52914](https://github.com/BerriAI/litellm/pull/52914) fix(responses): cache bridged system prompts on stored GPT-6.2 requests (backport #52906 to rc/1.111.0)
- [#52919](https://github.com/BerriAI/litellm/pull/52919) fix(responses): backport #52906 to lts/1.108.x, cache bridged system prompts on stored GPT-6.2 requests
- [#52860](https://github.com/BerriAI/litellm/pull/52860) feat(ui): configure team budget percentage email alerts
- [#52971](https://github.com/BerriAI/litellm/pull/52971) fix(caching): preserve otel cache hits and align logging metadata
- [#52859](https://github.com/BerriAI/litellm/pull/52859) feat(proxy): add team budget percentage email alerts
- [#52955](https://github.com/BerriAI/litellm/pull/52955) feat(proxy): emit budget alerts for app customer scopes
- [#52985](https://github.com/BerriAI/litellm/pull/52985) chore(cost-map): add together_ai/tencent/Hy4 from the Together models API
- [#52983](https://github.com/BerriAI/litellm/pull/52983) fix(wandb): set NVIDIA Nemotron 3.5 Super VL output price to $0.47 per 1M
- [#52959](https://github.com/BerriAI/litellm/pull/52959) fix(bedrock): send the BM25 tool search tool on Claude chat requests
- [#52972](https://github.com/BerriAI/litellm/pull/52972) fix(cost): bill priority rates for image input and cached image tokens
- [#52977](https://github.com/BerriAI/litellm/pull/52977) fix(responses): preserve deferred tool references on Anthropic routes
- [#52946](https://github.com/BerriAI/litellm/pull/52946) feat(apps): link overall app budgets to shared presets
- [#52949](https://github.com/BerriAI/litellm/pull/52949) feat(proxy): let operators omit x-litellm-* response headers
- [#52970](https://github.com/BerriAI/litellm/pull/52970) fix(packaging): ship the license public key in the litellm-proxy sdist
- [#52901](https://github.com/BerriAI/litellm/pull/52901) feat(anthropic): price Claude subscription OAuth allowance usage at $0, overage at API rates
- [#52966](https://github.com/BerriAI/litellm/pull/52966) refactor(auth-types): move the Claude Platform params next to AwsParams and VertexParams
- [#52940](https://github.com/BerriAI/litellm/pull/52940) test(secret-detection): keep the linear-scan test stable when the re cache is evicted
- [#52961](https://github.com/BerriAI/litellm/pull/52961) fix(spend): record the bound on the org admin spend log filter
- [#52938](https://github.com/BerriAI/litellm/pull/52938) fix(key-management): backport #52838 and #52925 to stable/1.110.x and cut 1.110.2
- [#52937](https://github.com/BerriAI/litellm/pull/52937) fix(key-management): backport #52838 and #52925 to stable/1.109.x, sync filelock and soupsieve with main, and cut 1.109.3
- [#52681](https://github.com/BerriAI/litellm/pull/52681) feat(messages): serve bedrock claude_platform messages on rust only
- [#52939](https://github.com/BerriAI/litellm/pull/52939) fix(key-management): backport #52838 and #52925 to rc/1.111.0
- [#52936](https://github.com/BerriAI/litellm/pull/52936) fix(key-management): backport #52838 and #52925 to stable/1.106.x, bump filelock, soupsieve and otel, and cut 1.106.12
- [#52942](https://github.com/BerriAI/litellm/pull/52942) fix(responses): send an HTTP status on websocket guardrail block frames
- [#52947](https://github.com/BerriAI/litellm/pull/52947) fix(cost-map): halve the fireworks_ai deepseek-v4p1-flash-1017 ultrafast price and add its flex router id
- [#52951](https://github.com/BerriAI/litellm/pull/52951) fix(auth-gcp): build the key file version on Windows
- [#52943](https://github.com/BerriAI/litellm/pull/52943) fix(proxy): org admin spend log scope and gemini file id parsing
- [#52933](https://github.com/BerriAI/litellm/pull/52933) refactor(ui): remove unused EndpointField from model hub parts
- [#52932](https://github.com/BerriAI/litellm/pull/52932) refactor(ui): remove unused getCategories from compliance prompts
- [#52931](https://github.com/BerriAI/litellm/pull/52931) refactor(ui): remove unused agentSnippets from model hub
- [#50301](https://github.com/BerriAI/litellm/pull/50301) feat(guardrails): opt-in pre_call scan of tool descriptions as text for PANW and Presidio
- [#52906](https://github.com/BerriAI/litellm/pull/52906) fix(responses): cache bridged system prompts on stored GPT-6.2 requests
- [#52950](https://github.com/BerriAI/litellm/pull/52950) chore: bump litellm-proxy-extras to 0.4.110.post1 on lts/1.108.x
- [#52874](https://github.com/BerriAI/litellm/pull/52874) fix(responses): send an HTTP status on managed websocket error frames
- [#52527](https://github.com/BerriAI/litellm/pull/52527) fix(proxy): keep pass-through handler usage when finalizing cost before dispatch
- [#52752](https://github.com/BerriAI/litellm/pull/52752) fix(responses): prevent stream restarts after non-text output (#52616) [rc/1.111.0]
- [#52751](https://github.com/BerriAI/litellm/pull/52751) fix(responses): prevent stream restarts after non-text output (#52616) [stable/1.110.x]
- [#52764](https://github.com/BerriAI/litellm/pull/52764) fix(proxy): backport failed-request body release to rc/1.111.0
- [#52713](https://github.com/BerriAI/litellm/pull/52713) fix: backport #52350 to lts/1.108.x
- [#52712](https://github.com/BerriAI/litellm/pull/52712) fix: backport #52350 to stable/1.109.x
- [#52470](https://github.com/BerriAI/litellm/pull/52470) fix: backport #52213, #52313, #52341, #52350 and #52378 to rc/1.111.0
- [#52469](https://github.com/BerriAI/litellm/pull/52469) fix: backport #52313, #52341 and #52350 to stable/1.110.x for v1.110.1
- [#52462](https://github.com/BerriAI/litellm/pull/52462) fix(proxy): backport #52080 to rc/1.111.0, serve a burst of first requests on new customer org aliases
- [#52463](https://github.com/BerriAI/litellm/pull/52463) fix(router): backport the Rust router memory fix to stable/1.110.x
- [#52691](https://github.com/BerriAI/litellm/pull/52691) fix(router): do not retry a Responses stream after an output item reached the client (#52461) [rc/1.111.0]
- [#52690](https://github.com/BerriAI/litellm/pull/52690) fix(router): do not retry a Responses stream after an output item reached the client (#52461) [stable/1.110.x]
- [#52895](https://github.com/BerriAI/litellm/pull/52895) fix(router): optionally reject raw model collisions across groups
- [#52930](https://github.com/BerriAI/litellm/pull/52930) fix(vertex_ai): count thinking tokens on non-streamed content filter replies
- [#52944](https://github.com/BerriAI/litellm/pull/52944) test(spend): include cache and margin fields in the daily activity repository goldens
- [#52945](https://github.com/BerriAI/litellm/pull/52945) test(sdk): drain streaming logs before the next fallback test
- [#52661](https://github.com/BerriAI/litellm/pull/52661) feat(db): rust repository for the spend logs window spend sum
- [#51611](https://github.com/BerriAI/litellm/pull/51611) fix(decisions): support the litellm_proxy provider
- [#52314](https://github.com/BerriAI/litellm/pull/52314) feat(messages): serve vertex ai claude messages on rust only
- [#52438](https://github.com/BerriAI/litellm/pull/52438) fix(guardrails): read per-request extra_body from the proxy request in the generic guardrail api
- [#52907](https://github.com/BerriAI/litellm/pull/52907) fix(key-management): backport #52838 and #52925 to lts/1.108.x and cut 1.108.13
- [#52737](https://github.com/BerriAI/litellm/pull/52737) test(s3-log): wait for the async upload failure report before checking it
- [#52925](https://github.com/BerriAI/litellm/pull/52925) fix(key-management): let a key read its own info by its plaintext key
- [#52909](https://github.com/BerriAI/litellm/pull/52909) fix(proxy-extras): make the app association budget migration re-runnable
- [#52899](https://github.com/BerriAI/litellm/pull/52899) fix(auth): bound model access group registry scans
- [#52927](https://github.com/BerriAI/litellm/pull/52927) chore(cost-map): add fal_ai Ideogram 4.6 text to image and edit rows
- [#52913](https://github.com/BerriAI/litellm/pull/52913) fix(router): scope cooldown reads to request candidates
- [#52928](https://github.com/BerriAI/litellm/pull/52928) fix(cost-map): lower four fireworks_ai spot router rows to the prices the serverless models API now lists
- [#52926](https://github.com/BerriAI/litellm/pull/52926) feat(cost-map): add openai gpt-live-1.1 at the per-minute rate OpenAI published on 2026-11-19
- [#52908](https://github.com/BerriAI/litellm/pull/52908) feat(proxy): run callback setup and cleanup hooks during the proxy lifespan
- [#52732](https://github.com/BerriAI/litellm/pull/52732) fix(responses): keep Claude Code billing metadata out of prompts
- [#52921](https://github.com/BerriAI/litellm/pull/52921) ci(lint): clear the two code-quality failures behind the stale provider file
- [#52911](https://github.com/BerriAI/litellm/pull/52911) docs(agents): prove translation and cost fixes on every request shape
- [#52917](https://github.com/BerriAI/litellm/pull/52917) ci(unit): run the proxy-extras tests when a pull request touches proxy-extras
- [#52904](https://github.com/BerriAI/litellm/pull/52904) fix(embeddings): preserve custom HTTP client error statuses
- [#52682](https://github.com/BerriAI/litellm/pull/52682) feat(customer-portal): unify budget editors and usage tables
- [#52902](https://github.com/BerriAI/litellm/pull/52902) fix(caching): allow excluding embeddings from response caching
- [#52918](https://github.com/BerriAI/litellm/pull/52918) chore(docs): regenerate provider endpoints support
- [#49599](https://github.com/BerriAI/litellm/pull/49599) fix(httpx): repair surrogate code points in raw text request bodies
- [#52894](https://github.com/BerriAI/litellm/pull/52894) test(translation): align stored Responses bridge fixtures
- [#52893](https://github.com/BerriAI/litellm/pull/52893) chore(model_prices): fill remaining successor_model for dated models
- [#52900](https://github.com/BerriAI/litellm/pull/52900) test(utils): skip gemini/genie-4 in the gemini tpm/rpm check
- [#52787](https://github.com/BerriAI/litellm/pull/52787) fix(customer-management)!: preserve permanent budgets across temporary increases
- [#52781](https://github.com/BerriAI/litellm/pull/52781) feat(proxy): app-scoped read access to Customer Management through object permissions
- [#52898](https://github.com/BerriAI/litellm/pull/52898) test(images): include cache and SVG fields in image routing fixture
- [#52388](https://github.com/BerriAI/litellm/pull/52388) fix(auth): keep refusing other exhausted limits before the body when the team is not cached
- [#52735](https://github.com/BerriAI/litellm/pull/52735) fix(perf): integrate pod CPU windows so cpu_seconds_per_request stops under-reading
- [#52390](https://github.com/BerriAI/litellm/pull/52390) fix(images): honor additional_drop_params given as a tuple or holding non-string entries
- [#52856](https://github.com/BerriAI/litellm/pull/52856) feat(vector-stores): fail over native search passthrough to configured fallback stores
- [#52864](https://github.com/BerriAI/litellm/pull/52864) fix(bedrock): bill legacy bedrock/mantle GovCloud calls at the region's rates
- [#52861](https://github.com/BerriAI/litellm/pull/52861) fix(logging): restore exception in model group rate limit callback kwargs
- [#52862](https://github.com/BerriAI/litellm/pull/52862) fix(bedrock): return a response for empty Invoke streams with complete_response
- [#52857](https://github.com/BerriAI/litellm/pull/52857) fix(images): read null cached token counts as 0 in image usage
- [#52858](https://github.com/BerriAI/litellm/pull/52858) fix(router): forward Responses lifecycle events after output instead of dropping them on stream failure
- [#52872](https://github.com/BerriAI/litellm/pull/52872) feat(cost-map): add gemini/genie-4 at the prices Google published on 2026-11-19
- [#52797](https://github.com/BerriAI/litellm/pull/52797) fix(proxy-extras): keep the host query param in the v2 migration lock URL
- [#52819](https://github.com/BerriAI/litellm/pull/52819) fix(proxy-extras): backport #52797 to lts/1.108.x
- [#51518](https://github.com/BerriAI/litellm/pull/51518) fix(proxy): prune expired LiteLLM_SpendLogGuardrailIndex rows with spend-log retention
- [#52873](https://github.com/BerriAI/litellm/pull/52873) feat(cost-map): add azure_ai/kimi-k3.1-pro at the Azure Global Standard rate
- [#52838](https://github.com/BerriAI/litellm/pull/52838) fix(key-management): stop ownerless keys from reading each other's key info
- [#52384](https://github.com/BerriAI/litellm/pull/52384) fix(mcp): return an upstream -32042 URL elicitation error from /mcp as a JSON-RPC error
- [#52763](https://github.com/BerriAI/litellm/pull/52763) fix(cost-map): refresh Azure and Together retirement dates and add GMI Gemini 4 Hydrogen
- [#52847](https://github.com/BerriAI/litellm/pull/52847) refactor(router-types): move RoutingStrategy and RoutingGroupSpec out of router-core
- [#52544](https://github.com/BerriAI/litellm/pull/52544) refactor(framer): relay SSE blocks without dropping a byte
- [#52836](https://github.com/BerriAI/litellm/pull/52836) refactor(messages): name the Messages body fields once, on the request type

#### 🐛 New Issues
- [#52853](https://github.com/BerriAI/litellm/issues/52853) Responses API: upstream 400 on streaming request drops the connection instead of returning an error (GenericEvent has no attribute 'type') `llm translation` 💬5
- [#52905](https://github.com/BerriAI/litellm/issues/52905) [Feature]: Show estimated provider cost avoided by response-cache hits in Cache Analytics
- [#52849](https://github.com/BerriAI/litellm/issues/52849) [Bug]: MCP tool discovery omits authorization servers when no upstream credential is supplied `bug` 💬3
- [#52962](https://github.com/BerriAI/litellm/issues/52962) [Bug]: Viewing logs triggers /compliance/gdpr and /compliance/eu-ai-act requests resulting in 403 ModelAccessDeniedProxyException `bug` `llm translation` 💬1
- [#52821](https://github.com/BerriAI/litellm/issues/52821) [Bug]: Image tokens ignore the service tier and the image cache-read rate in cost calculation (v1.108.0) `llm translation` 💬1
- [#52829](https://github.com/BerriAI/litellm/issues/52829) [Bug]: Vertex/Gemini non-streamed content_filter replies drop thoughtsTokenCount, so thinking tokens are not counted or billed (v1.108.0, still on main) `llm translation` 💬1
- [#52845](https://github.com/BerriAI/litellm/issues/52845) [Bug]: Policy template enrich/suggest endpoints default to gpt-4o-mini (OpenAI shutdown Jan 14, 2027) `llm translation` 💬1
- [#52824](https://github.com/BerriAI/litellm/issues/52824) [Bug]: Proxy logs a /v1/responses cache hit twice (two SpendLogs rows) on the Responses→chat bridge for prompts ≥ 256 KiB (v1.108.0) 💬1
- [#52774](https://github.com/BerriAI/litellm/issues/52774) [Docs]: /health/drain + GRACEFUL_SHUTDOWN_TIMEOUT — multi-worker (gunicorn) behavior and terminationGracePeriodSeconds sizing are undocumented 💬1
- [#53018](https://github.com/BerriAI/litellm/issues/53018) [Bug]: Cold virtual-key spend counter doubles to 2x when the DB reseed fails under concurrency
- [#52974](https://github.com/BerriAI/litellm/issues/52974) [Bug]: LANGSMITH_SAMPLING_RATE ignores fractional values (isdigit check), traces 100% of requests
- [#52965](https://github.com/BerriAI/litellm/issues/52965) [Bug]: v3 rate limiter 429 always sends retry-after equal to the full window, and reset_at moves with every rejection
- [#52957](https://github.com/BerriAI/litellm/issues/52957) Gemini/Vertex stream cut before finishReason still completes as finish_reason="stop" (not caught by #47665) `llm translation`
- [#52910](https://github.com/BerriAI/litellm/issues/52910) [Bug]: /v1/models omits team-scoped models for "all-team-models" keys when the team list contains "all-proxy-models" (#28173 still reproduces) `llm translation`
- [#52866](https://github.com/BerriAI/litellm/issues/52866) [Bug]: json_mode parameter is dropped for async streaming responses in chat transformation `bug` `llm translation`
- [#52865](https://github.com/BerriAI/litellm/issues/52865) [Bug]: list_batches error handler sets dummy HTTP method to 'create_thread' and uses singular 'list_batch' `bug`
- [#52863](https://github.com/BerriAI/litellm/issues/52863) [Bug]: Fine-tuning endpoints report operation as 'create_batch' and set dummy HTTP method to 'create_thread' `bug` `llm translation`
- [#52837](https://github.com/BerriAI/litellm/issues/52837) v1.108.10+ images are signed keyless only (project-releaser); please confirm the switch from the cosign.pub key
- [#52834](https://github.com/BerriAI/litellm/issues/52834) [Bug]: Proxy ignores the `Cache-Control` request header (`no-cache` / `no-store`): case-sensitive lookup on lower-cased headers (v1.108.0, still on main)
- [#52800](https://github.com/BerriAI/litellm/issues/52800) [Bug]: Vertex Gemini image adapters silently replace size/imageConfig, ignore edit image controls, and drop mask (v1.108.0) `llm translation`
- [#52775](https://github.com/BerriAI/litellm/issues/52775) [Feature]: broadcast /health/drain to all gunicorn workers (deterministic N/N preStop drain)
- [#52773](https://github.com/BerriAI/litellm/issues/52773) AsyncHTTPHandler retries ConnectError even when max_retries=0 `llm translation`

#### 🔒 Closed Issues
- [#50905](https://github.com/BerriAI/litellm/issues/50905) [Bug]: Audit logs: GET /audit returns 500 after /key/update or /team/update, before_value stored as a JSON string since v1.108.0
- [#52853](https://github.com/BerriAI/litellm/issues/52853) Responses API: upstream 400 on streaming request drops the connection instead of returning an error (GenericEvent has no attribute 'type')
- [#34747](https://github.com/BerriAI/litellm/issues/34747) [Bug]: store_prompts_in_spend_logs: true is loaded in v1.93.0, but LiteLLM_SpendLogs.messages is still persisted as {} for both acompletion and aresponses
- [#36882](https://github.com/BerriAI/litellm/issues/36882) [Bug]: LiteLLM Proxy v1.93.0 intermittently drops prompt_tokens_details.cached_tokens from final streaming usage
- [#38216](https://github.com/BerriAI/litellm/issues/38216) [Bug]: Router silently load-balances a raw model string across unrelated model_name groups when it collides on litellm_params.model
- [#44047](https://github.com/BerriAI/litellm/issues/44047) New global registry-load locks (v1.101.0+) have no timeout, unlike the per-request reads they replaced
- [#43578](https://github.com/BerriAI/litellm/issues/43578) _strip_prisma_query_params drops `host`, breaking every Unix-socket Postgres deployment
- [#36848](https://github.com/BerriAI/litellm/issues/36848) vertex_ai: tool schemas with tuple-form `items` crash `_build_vertex_schema` ('list' object has no attribute 'get')
- [#51823](https://github.com/BerriAI/litellm/issues/51823) [Feature]: Allow operators to omit LiteLLM response headers across proxy paths
- [#51825](https://github.com/BerriAI/litellm/issues/51825) [Feature]: Run custom proxy callback setup and cleanup during application lifespan
- [#51824](https://github.com/BerriAI/litellm/issues/51824) [Bug]: Raw HTTP text bodies with lone UTF-16 surrogates fail before dispatch
- [#43736](https://github.com/BerriAI/litellm/issues/43736) [Bug]: native tag-based routing raises + logs an ERROR for every non-matching fallback leg, even when later legs in the same chain would satisfy the request
- [#48649](https://github.com/BerriAI/litellm/issues/48649) [Bug]: failed sync completion() leaves exception/Logging reference cycle that pins request messages until a full GC
- [#52278](https://github.com/BerriAI/litellm/issues/52278) [Bug]: Failed proxy calls keep the whole request body in memory until a full GC (exception, traceback and frame cycle in the proxy)
- [#48712](https://github.com/BerriAI/litellm/issues/48712) [Bug]: `parent_otel_span` goes into the response cache key, so the cache never hits with otel
- [#36923](https://github.com/BerriAI/litellm/issues/36923) [Bug]: responses() crashes with TypeError 'int object is not iterable' when input is numeric instead of returning 400
- [#36954](https://github.com/BerriAI/litellm/issues/36954) [Feature]: Publish floating minor-version Docker tags for patch-only updates (e.g. 1.89 → latest 1.89.x)
- [#36956](https://github.com/BerriAI/litellm/issues/36956) AnthropicMessagesConfig.get_complete_url doesn't dedup trailing /v1 in api_base (yields /v1/v1/messages), unlike openai_like/deepseek siblings
- [#36959](https://github.com/BerriAI/litellm/issues/36959) Feature proposal: optional GoAnyAPI provider for SEO data tools
- [#36971](https://github.com/BerriAI/litellm/issues/36971) [Bug]: A2A agent calls report "NoneType takes no arguments" instead of the "install a2a-sdk" error
- [#52821](https://github.com/BerriAI/litellm/issues/52821) [Bug]: Image tokens ignore the service tier and the image cache-read rate in cost calculation (v1.108.0)
- [#46681](https://github.com/BerriAI/litellm/issues/46681) [Bug]: Responses translation drops Anthropic tool_reference blocks from function call outputs
- [#52829](https://github.com/BerriAI/litellm/issues/52829) [Bug]: Vertex/Gemini non-streamed content_filter replies drop thoughtsTokenCount, so thinking tokens are not counted or billed (v1.108.0, still on main)
- [#52598](https://github.com/BerriAI/litellm/issues/52598) Vertex Gemini image adapters silently replace or ignore invalid controls in strict mode
- [#43119](https://github.com/BerriAI/litellm/issues/43119) Proposal: a Nano (XNO) 402 pay-per-token example for the LiteLLM gateway
- [#50269](https://github.com/BerriAI/litellm/issues/50269) [Bug]: Guardrail write-back on /v1/messages drops tool_result.is_error and system output_config (seen with Headroom guardrail)
- [#51556](https://github.com/BerriAI/litellm/issues/51556) [Bug]: Bedrock Invoke drops the BM25 tool search tool on /v1/chat/completions, so deferred tools are never found
- [#44041](https://github.com/BerriAI/litellm/issues/44041) [Bug]: Managed Responses WebSocket errors omit status, leaving Codex waiting until timeout
- [#44050](https://github.com/BerriAI/litellm/issues/44050) Cooldown deployment lookup fetches cooldown state for every router deployment, not just the current model group
- [#52346](https://github.com/BerriAI/litellm/issues/52346) [Bug]: Vertex/Gemini embeddings on `:embedContent` turn upstream 429 and 503 into a 500 `APIConnectionError`
- [#46520](https://github.com/BerriAI/litellm/issues/46520) [Bug]: Per-input embedding caching can fill a shared Redis and evict rate-limit/spend keys

### Unsloth (`unslothai/unsloth`)

**Stars:** 79,802 · **Open issues:** 486 · **Last push:** <1h ago

On November 20, 2026, Unsloth released version v0.1.920-beta, which includes significant updates for AMD NPU support, allowing Q4NX model conversions to load seamlessly on NPUs, alongside new video diffusion LoRA functionalities. Highlights of this update also feature LTX-2.5 and MOSS-Image LoRA training, NVIDIA Cosmos3 FP8 video integration, and chat-responsive scheduled tasks. Among the merged pull requests, notable changes include the implementation of persistent conditioning cache by default in MiniMax-H3 and enhancements for decoding VAE on CPU-only hosts. Additionally, a bug was reported regarding an intermittent parsing failure in MiniMax-M3.1 tool calls, which halts agent execution.

#### 🚀 New Releases
- [v0.1.920-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.920-beta) AMD NPU + video diffusion LoRA

#### ✅ Merged PRs
- [#18551](https://github.com/unslothai/unsloth/pull/18551) Security audit: re-pin six reviewed unsloth-zoo 2026.11.7 sites in the package scan baseline
- [#18521](https://github.com/unslothai/unsloth/pull/18521) Studio sd.cpp: decode the FLUX.2 VAE in torch on CPU-only hosts
- [#18519](https://github.com/unslothai/unsloth/pull/18519) Studio diffusion training: persistent conditioning cache on by default, wired into MiniMax-H3
- [#18518](https://github.com/unslothai/unsloth/pull/18518) Studio diffusion training: checkpointing budget for SDXL and MiniMax-H3, step down after OOM, cached fp8 backward weights
- [#18506](https://github.com/unslothai/unsloth/pull/18506) Studio video VAE: write tiled decode frames and tiles into one preallocated output
- [#18444](https://github.com/unslothai/unsloth/pull/18444) Studio: CPU-only devices run image and video models as GGUFs on sd.cpp only
- [#18491](https://github.com/unslothai/unsloth/pull/18491) Studio sd.cpp: install the per-GPU-family CUDA bundle for the detected GPU
- [#18469](https://github.com/unslothai/unsloth/pull/18469) Studio: keep lora_alpha in every diffusion LoRA export
- [#18455](https://github.com/unslothai/unsloth/pull/18455) Studio diffusion: compile the cold-card int8 probe kernels while the weights are read (FLUX.3 INT8 cold load -2.6 to -2.9 s)
- [#18463](https://github.com/unslothai/unsloth/pull/18463) Studio diffusion: hash the int8 CUTLASS library once per process (FLUX.3 INT8 restart -3.2 s)
- [#18457](https://github.com/unslothai/unsloth/pull/18457) Studio diffusion: keep the default RNG untouched by the probe warm-up
- [#18458](https://github.com/unslothai/unsloth/pull/18458) Studio: show the running job's family in the Train form after a reload
- [#18454](https://github.com/unslothai/unsloth/pull/18454) Studio: re-decode a NaN 16-bit VAE decode in fp32; fp32 VAE on GPUs without tensor cores (GTX 16xx)
- [#18446](https://github.com/unslothai/unsloth/pull/18446) Studio: read diffusers GGUF checkpoints as views of the file mapping (GGUF load host RAM -52% to -66%)
- [#18451](https://github.com/unslothai/unsloth/pull/18451) Studio diffusion training: give int8 bases the budgeted dequant cache (exact, +7.4% with spare memory)
- [#18450](https://github.com/unslothai/unsloth/pull/18450) Studio: swap the chat model out for an image model inside one chat turn when both do not fit (opt-in)
- [#18504](https://github.com/unslothai/unsloth/pull/18504) Studio engines: find a per-user uv for vLLM / SGLang installs, and tell a retried failure apart
- [#17159](https://github.com/unslothai/unsloth/pull/17159) Studio FLUX.3 upsampler: count Vulkan VRAM on Linux ROCm before keeping the server resident
- [#18305](https://github.com/unslothai/unsloth/pull/18305) Studio video: route installs without PyTorch to the full install
- [#18441](https://github.com/unslothai/unsloth/pull/18441) Studio int8: run the raced CUTLASS GEMM on T4 native W8A8 linears (FLUX.3 klein -13% per step, byte-identical)
- [#18432](https://github.com/unslothai/unsloth/pull/18432) Studio Cosmos3 FP8: quantise ModelOpt W8A8 activations in one fused pass (Edge FP8 1.65 to 1.14 s/step on L4)
- [#18431](https://github.com/unslothai/unsloth/pull/18431) Studio FLUX.3: share the block quant under the strided attention processor (-2% per step on L4, byte-identical)
- [#17550](https://github.com/unslothai/unsloth/pull/17550) Studio: keep one corrupt session file from aborting the import
- [#18536](https://github.com/unslothai/unsloth/pull/18536) Tests: picker superseded-plan contract allows the pick release added in #18420
- [#18535](https://github.com/unslothai/unsloth/pull/18535) Diffusion tests: assert the typed LoRA reload refusal, skip encoder streaming without diffusers
- [#18430](https://github.com/unslothai/unsloth/pull/18430) Studio: do not pad weight-only int8 training bases (MiniMax-H3 int8 LoRA failed at load)
- [#18534](https://github.com/unslothai/unsloth/pull/18534) Studio image defaults tests: follow the filled-in defaults table and route effect from #18420
- [#18429](https://github.com/unslothai/unsloth/pull/18429) Studio: keep the text mask on a padded HunyuanVideo-1.5 CFG batched call
- [#18453](https://github.com/unslothai/unsloth/pull/18453) ROCm attention: keep AOTriton SDPA kernels that fail a per-GPU self-check out of Unsloth's attention
- [#18525](https://github.com/unslothai/unsloth/pull/18525) Tests: make the packed host-lengths carry test independent of test order
- [#18515](https://github.com/unslothai/unsloth/pull/18515) DoRA: compute the weight row norm from the rank-r factored identity (no eye(d_in), no dense B @ A)
- [#18424](https://github.com/unslothai/unsloth/pull/18424) Studio images: keep the text encoder resident only while the render fits, and lend it to other loads
- [#18524](https://github.com/unslothai/unsloth/pull/18524) Tests: read the source with an explicit encoding in the fused label smoothing test
- [#18498](https://github.com/unslothai/unsloth/pull/18498) Flex attention: keep float32 loads with head_dim above 128 off flex (Gemma 3 compile hang)
- [#18420](https://github.com/unslothai/unsloth/pull/18420) Studio Images: reload for new LoRAs on quantized loads, hold Generate during a model switch, show the loaded precision
- [#18496](https://github.com/unslothai/unsloth/pull/18496) Block CUDA graphs: hook gradients of adapters that become trainable after the first graphed call (DPO crash)
- [#18418](https://github.com/unslothai/unsloth/pull/18418) Studio diffusion: report the attention backend that actually runs
- [#18495](https://github.com/unslothai/unsloth/pull/18495) SFT: route label_smoothing_factor through the fused cross entropy (no full logits)
- [#18494](https://github.com/unslothai/unsloth/pull/18494) Packed SFT: read packed lengths on the host; loss-only eval skips the per-2-batch cache flush
- [#18488](https://github.com/unslothai/unsloth/pull/18488) Attention dispatch: route long SDPA training calls through automatic saved-attention GC replay
- [#18503](https://github.com/unslothai/unsloth/pull/18503) Tests: gate the ROCm SDPA self-check GPU tests on real CUDA
- [#18499](https://github.com/unslothai/unsloth/pull/18499) PEFT 0.22 compatibility: tensor parallel adapter save, regex LoRA target scope, classifier DDP default
- [#18342](https://github.com/unslothai/unsloth/pull/18342) Studio diffusion: precompute AdaLN modulation once per request, modulation weights off the card (FLUX.1 streamed -28% per step, bit-identical)
- [#18493](https://github.com/unslothai/unsloth/pull/18493) Studio chat: open a long conversation at its end while the empty composer eases
- [#18490](https://github.com/unslothai/unsloth/pull/18490) Tests: gate the Inductor Triton eager-vals GPU test on real CUDA
- [#18489](https://github.com/unslothai/unsloth/pull/18489) PEFT MoE conversion snapshot: add sarvam_mla
- [#18417](https://github.com/unslothai/unsloth/pull/18417) Studio MiniMax-H3-Image: pin the text encoder layers the host budget holds and stream the rest (8 GB new-prompt render 82.7 s to 36.7 s, bit-identical)
- [#18462](https://github.com/unslothai/unsloth/pull/18462) Block compile: keep torch's alignment guard for the memory-efficient SDPA backward on torch < 2.14 (Gemma 4 unaligned attn_bias)
- [#18484](https://github.com/unslothai/unsloth/pull/18484) Bump install.sh / install.ps1 pins to unsloth>=2026.11.7
- [#18472](https://github.com/unslothai/unsloth/pull/18472) Gemma / Gemma2: fix the torch < 2.13 Inductor AssertionError on the first backward under block compile
- [#18421](https://github.com/unslothai/unsloth/pull/18421) Studio multi-GPU: automatic placement picks one card plus a CFG replica for guided models when it is faster
- [#18482](https://github.com/unslothai/unsloth/pull/18482) Windows installers: spell out the gfx1153 GPU-name row as plain alternatives
- [#18480](https://github.com/unslothai/unsloth/pull/18480) Diffusion trainer tests: run against the real conditioning cache
- [#18471](https://github.com/unslothai/unsloth/pull/18471) Tests: fix four studio-shard failures on main (picker full-list setting, MLX batch sizes, QAT CUDA skip)
- [#18404](https://github.com/unslothai/unsloth/pull/18404) Studio: round a spreadsheet number's last shown decimal the way Excel does
- [#18466](https://github.com/unslothai/unsloth/pull/18466) GRPO fast_inference: do not ask TRL >= 1.18 for sampling masks the shared vLLM engine never returns
- [#18439](https://github.com/unslothai/unsloth/pull/18439) Native FSDP2 resume: load grouped_by_expert MoE LoRA-B columns in the saved order
- [#18383](https://github.com/unslothai/unsloth/pull/18383) Ebook datasets: read the XHTML fallback for a foreign spine item
- [#18386](https://github.com/unslothai/unsloth/pull/18386) Studio diffusion training: LTX-2.5 LoRA training (captions through the Gemma 4 worker, dev DiT, baked into the distilled Video page model)
- [#18468](https://github.com/unslothai/unsloth/pull/18468) Studio i18n: translate the model picker expand and monochrome icon settings
- [#18392](https://github.com/unslothai/unsloth/pull/18392) legacy cli: honor export flags without requiring --save_model
- [#18382](https://github.com/unslothai/unsloth/pull/18382) Raw text: close an empty code fence before tagging the next heading
- [#18413](https://github.com/unslothai/unsloth/pull/18413) Studio: load multi-file audio.cpp packages from runtime model specs
- [#18438](https://github.com/unslothai/unsloth/pull/18438) GRPO packing leak probe: restore each submodule's own training flag
- [#18452](https://github.com/unslothai/unsloth/pull/18452) GRPO: one vLLM rollout scope per tool-calling generate
- [#18375](https://github.com/unslothai/unsloth/pull/18375) Condense comments added since the last cleanup: Studio backend
- [#18374](https://github.com/unslothai/unsloth/pull/18374) Condense comments added since the last cleanup: Studio frontend and Tauri
- [#18377](https://github.com/unslothai/unsloth/pull/18377) Condense comments added since the last cleanup: installers, scripts and CI
- [#18376](https://github.com/unslothai/unsloth/pull/18376) Condense comments added since the last cleanup: core, CLI and tests
- [#18426](https://github.com/unslothai/unsloth/pull/18426) feat(studio): bring MLX Run settings up to GGUF parity
- [#18434](https://github.com/unslothai/unsloth/pull/18434) QAT: weight memo guards for inference mode, side streams and static scales; re-round after a base weight reload
- [#18412](https://github.com/unslothai/unsloth/pull/18412) Studio: keep exponents in Word and HTML attachments and knowledge bases
- [#18461](https://github.com/unslothai/unsloth/pull/18461) Document upload CI: retry opening the native Safari session
- [#18399](https://github.com/unslothai/unsloth/pull/18399) Keep torch.cuda peak memory at or above current memory on Apple Silicon
- [#18440](https://github.com/unslothai/unsloth/pull/18440) AsyncGRPO: keep the adapter trainable under native FSDP2; refuse a missing sampled-token logprob
- [#18447](https://github.com/unslothai/unsloth/pull/18447) Studio: keep the composer one row tall inside a conversation
- [#18445](https://github.com/unslothai/unsloth/pull/18445) Studio: model picker intro how-to page, picker search and sizes, remembered expand, monochrome icons
- [#18365](https://github.com/unslothai/unsloth/pull/18365) Studio: keep Deep Research site lists in sync across windows
- [#18142](https://github.com/unslothai/unsloth/pull/18142) Studio: add search-only MCP listings for cache-sensitive local chats
- [#18396](https://github.com/unslothai/unsloth/pull/18396) Studio: keep the server up through the first image on Apple Silicon
- [#18419](https://github.com/unslothai/unsloth/pull/18419) feat(studio): size MLX and transformers computer-use screenshots by the loaded processor's image tokens
- [#18436](https://github.com/unslothai/unsloth/pull/18436) VLM packing: refuse padding_free where the packed mask cannot be built (torch < 2.6); picklable rope index for spawn workers
- [#18433](https://github.com/unslothai/unsloth/pull/18433) NF4 dequant cache: no pre-hook on models without NF4 weights, keep autocast on the compiled route, invalidate on in-place scale writes
- [#18397](https://github.com/unslothai/unsloth/pull/18397) Studio: start a new training run right after the previous one ends
- [#18449](https://github.com/unslothai/unsloth/pull/18449) Studio: Guide to Install for editors that are not found, detected only when their setup opens
- [#18459](https://github.com/unslothai/unsloth/pull/18459) Studio i18n: translate browser.agentSettings.hostOnly in every overlay
- [#18401](https://github.com/unslothai/unsloth/pull/18401) MLX: exact torch.cuda.max_memory_reserved, and run the trainer API tests on Apple Silicon CI
- [#18075](https://github.com/unslothai/unsloth/pull/18075) fix(studio): accept Ollama OCI manifest reference layers
- [#18010](https://github.com/unslothai/unsloth/pull/18010) Studio: show GPU utilization and temperature on Windows ROCm
- [#18309](https://github.com/unslothai/unsloth/pull/18309) Studio: size computer-use screenshots by the model's image tokens, grid coordinates for local models
- [#18443](https://github.com/unslothai/unsloth/pull/18443) DeepSeek-V4.1: hc_pre keeps only the bf16 stream for backward
- [#18366](https://github.com/unslothai/unsloth/pull/18366) Studio: keep think tags in answers on /v1/responses
- [#18395](https://github.com/unslothai/unsloth/pull/18395) Studio: keep same-name prompt lists apart in a CSV export and its import
- [#18456](https://github.com/unslothai/unsloth/pull/18456) Image card contract test: follow the sandbox video MIME argument
- [#18269](https://github.com/unslothai/unsloth/pull/18269) Studio: Audio pages share the Images and Video shell
- [#18442](https://github.com/unslothai/unsloth/pull/18442) Skip the frozen bottom layers under gradient checkpointing when only upper layers are trained
- [#18300](https://github.com/unslothai/unsloth/pull/18300) Studio: simplify chat compaction feedback
- [#18400](https://github.com/unslothai/unsloth/pull/18400) Let the MLX smoke reload its GGUF without llama-cli
- [#18402](https://github.com/unslothai/unsloth/pull/18402) Studio: download the Blender MCP runtime again when it is missing
- [#18437](https://github.com/unslothai/unsloth/pull/18437) Gemma2 training masks: left pad queries attend only themselves on the sliding and global paths
- [#18435](https://github.com/unslothai/unsloth/pull/18435) ROCm packed attention: leave the compiled block when varlen is refused instead of attending over the dense mask
- [#18410](https://github.com/unslothai/unsloth/pull/18410) Studio: keep hidden rows when a LibreOffice sheet is attached in chat
- [#18406](https://github.com/unslothai/unsloth/pull/18406) Studio: play sandbox videos inline in chat
- [#18409](https://github.com/unslothai/unsloth/pull/18409) Studio: read the scanned pages of a PDF opened in Translate
- [#18398](https://github.com/unslothai/unsloth/pull/18398) Studio: refuse speech models for Apple Silicon audio training early
- [#18415](https://github.com/unslothai/unsloth/pull/18415) Studio Windows: fail loudly when ROCm torch cannot be installed on a supported AMD GPU
- [#18407](https://github.com/unslothai/unsloth/pull/18407) Studio: keep Always allow on a browser script prompt to that one site
- [#18416](https://github.com/unslothai/unsloth/pull/18416) Studio diffusion training: plan the nf4 dequant cache around the checkpointing budget (no step-2 OOM fallback; klein 1024 on L4 11% faster, 5.4 GB lower peak)
- [#16799](https://github.com/unslothai/unsloth/pull/16799) Studio: download the HNSW prebuilts (usearch + numkong) only when a knowledge base needs them
- [#18356](https://github.com/unslothai/unsloth/pull/18356) Studio: Blender and Godot setup fixes from a Linux run
- [#17643](https://github.com/unslothai/unsloth/pull/17643) Unsloth Studio: trusted folders that Python and Terminal can run from without asking
- [#18414](https://github.com/unslothai/unsloth/pull/18414) Studio: release the diffusion generate lock when the account slot import fails
- [#18334](https://github.com/unslothai/unsloth/pull/18334) Studio: keep a chat summary that is still streaming past two minutes
- [#18341](https://github.com/unslothai/unsloth/pull/18341) Studio: detect Unreal source builds through Unreal's engine registry
- [#18351](https://github.com/unslothai/unsloth/pull/18351) Studio: report an unreachable MCP server plainly
- [#18350](https://github.com/unslothai/unsloth/pull/18350) Studio: smooth Unreal MCP call_tool conventions
- [#18359](https://github.com/unslothai/unsloth/pull/18359) Studio: Unreal game-template toolset and calling guide
- [#18062](https://github.com/unslothai/unsloth/pull/18062) Unsloth Studio: let browser_navigate open files the model wrote in its tool workspace
- [#18427](https://github.com/unslothai/unsloth/pull/18427) Studio: introduce the composer model picker on the new-chat screen
- [#18425](https://github.com/unslothai/unsloth/pull/18425) TP / PP gloo tests: build from pinned tiny-repo revisions
- [#18385](https://github.com/unslothai/unsloth/pull/18385) Studio: apply a top-level grammar or json_schema on /v1/chat/completions instead of dropping it
- [#18379](https://github.com/unslothai/unsloth/pull/18379) Studio: fit the context again on a same-model GGUF reload under any preset
- [#18411](https://github.com/unslothai/unsloth/pull/18411) Studio: scheduled tasks that reply in a chat keep its System prompt
- [#18408](https://github.com/unslothai/unsloth/pull/18408) Studio: train every token of long raw-text rows when packing
- [#18280](https://github.com/unslothai/unsloth/pull/18280) Studio images: distilled checkpoints run their publishers' steps and guidance (HunyuanImage 2.1 distilled, Anima-Turbo, Chroma1-Flash)
- [#18355](https://github.com/unslothai/unsloth/pull/18355) Studio diffusion training: train DiT LoRAs on T4 and other non-bf16 GPUs in fp16 with loss scaling (FLUX.2-klein, Z-Image, Wan 2.2 5B)
- [#18364](https://github.com/unslothai/unsloth/pull/18364) Studio: keep Python charts in HTML and PDF exports

#### 🐛 New Issues
- [#18492](https://github.com/unslothai/unsloth/issues/18492) [Bug] user-level install of uv not found by "more engines" installation; uv not found message never clears and can't be discerned as repeated message `feature request` `bug` 💬2
- [#18465](https://github.com/unslothai/unsloth/issues/18465) [Feature] Support DaisyRose-27B `feature request` 💬1
- [#18481](https://github.com/unslothai/unsloth/issues/18481) [Bug] Intermittent MiniMax-M3.1 tool call parsing failure exposes raw protocol tokens and stops agent execution 💬1
- [#18546](https://github.com/unslothai/unsloth/issues/18546) [Bug] Studio xlsx reader shows numbers that an empty format section hides (0;-0;;@, 0;;)
- [#18523](https://github.com/unslothai/unsloth/issues/18523) Webview? Microsoft lock-in?
- [#18501](https://github.com/unslothai/unsloth/issues/18501) [Feature]Add Support for Older AMD XDNA NPUs (Ryzen AI 100/200 Series) `feature request`
- [#18497](https://github.com/unslothai/unsloth/issues/18497) Support SenseNova-Loop-9B (sensenova_loop): fine-tuning the looped hybrid on 8 GB cards

#### 🔒 Closed Issues
- [#17733](https://github.com/unslothai/unsloth/issues/17733) [Bug] mtp stopped working after updated llama cpp b12340-mix-6186f42
- [#18126](https://github.com/unslothai/unsloth/issues/18126) [Bug] Run settings clipping
- [#18492](https://github.com/unslothai/unsloth/issues/18492) [Bug] user-level install of uv not found by "more engines" installation; uv not found message never clears and can't be discerned as repeated message
- [#18058](https://github.com/unslothai/unsloth/issues/18058) [Studio Bug] New Ollama models omitted when legacy manifest contains OCI manifest-reference layer
- [#18005](https://github.com/unslothai/unsloth/issues/18005) Windows ROCm: GPU monitor never shows utilization or temperature (3D-only counter, no sensor source)
- [#18394](https://github.com/unslothai/unsloth/issues/18394) [Bug] Studio: prompt lists that share a name are merged after a CSV export and import
- [#17728](https://github.com/unslothai/unsloth/issues/17728) [Bug]After Llama cpp cuda upgrade, Qwen3.8 27B speed drop from 60t/s to 38t/s. what did it changed inside?
- [#18306](https://github.com/unslothai/unsloth/issues/18306) [Bug] API/provider connections: compaction spends time generating a summary, then fails to write it

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,194 · **Open issues:** 423 · **Last push:** 3h ago

On November 20, 2026, there were no new releases for AIBrix, but the team made progress by merging pull request #3436, which enhances the MDS (Python metadata service) by improving stress observability and adding support for an OpenTSDB dashboard. Several new issues were opened, including a bug (#3515) related to retrying source engine cleanup after a failed stop during relocation, and another (#3514) addressing the need to scrape ModelClaim metrics from each engine's bound port. Additionally, a bug reported in #3513 noted that the requestsInflight 429 message lacks the x-aibrix-config-profile, complicating identification of capping issues. The introduction of the request for comments (#3517) regarding Batch Worker Load Imbalance Metrics also indicates a growing focus on performance metrics and load distribution.

#### ✅ Merged PRs
- [#3436](https://github.com/vllm-project/aibrix/pull/3436) [Feat] Improve MDS (python metadata service) stress observability and add OpenTSDB dashboard support

#### 🐛 New Issues
- [#3515](https://github.com/vllm-project/aibrix/issues/3515) [Bug][ModelClaim] Retry source engine cleanup after a failed stop during relocation `kind/bug` `triage/needs-information` `area/orchestration` 💬4
- [#3514](https://github.com/vllm-project/aibrix/issues/3514) [Bug][Gateway] Scrape ModelClaim metrics from each engine's bound port `kind/bug` `area/gateway` 💬3
- [#3513](https://github.com/vllm-project/aibrix/issues/3513) [Bug] The requestsInflight 429 lacks x-aibrix-config-profile, so a config-profile: auto client can't tell which cap it hit `kind/bug` `area/gateway` 💬2
- [#3517](https://github.com/vllm-project/aibrix/issues/3517) [RFC]: Batch Worker Load Imbalance Metrics `kind/feature` `area/batch` 💬1

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,511 · **Open issues:** 668 · **Last push:** 1h ago

On November 20, 2026, Semantic Router saw no new releases or merged pull requests, indicating a day of routine maintenance. Among the new issues, the feature request #7121 aims to enhance the System One auto feature by validating, routing, and accepting Set, Span, and Track questions, which has generated some discussion in the community. Significant bugs raised include #7118, which addresses a timing calculation issue in Decision 3 that ignores explicitly declared zero costs, and #7114, highlighting similar oversight in the Scheduler's cost calculations. Additionally, #7119 reports a critical bug where the Builder can deploy a configuration that differs from the preview presented, raising concerns about deployment accuracy.

#### 🐛 New Issues
- [#7121](https://github.com/vllm-project/semantic-router/issues/7121) [Feature] System One auto: validate, route and accept Set, Span and Track questions `enhancement` `accepted` `wg/router-models-inference-runtime` 💬5
- [#7118](https://github.com/vllm-project/semantic-router/issues/7118) [Bug] Decision 3 timing calculation ignores explicitly declared zero cost `bug` `accepted` `wg/router-models-inference-runtime` 💬4
- [#7137](https://github.com/vllm-project/semantic-router/issues/7137) [Bug] Local Stack media E2E expects invalid_request instead of invalid_media `bug` `accepted` `in-progress` `wg/router-models-inference-runtime` 💬3
- [#7114](https://github.com/vllm-project/semantic-router/issues/7114) [Bug] Scheduler cost calculation ignores explicitly declared zero cost `bug` `accepted` `wg/router-models-inference-runtime` 💬3
- [#7119](https://github.com/vllm-project/semantic-router/issues/7119) [Bug] Builder can deploy a different config than the preview shows `bug` `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬2
- [#7113](https://github.com/vllm-project/semantic-router/issues/7113) [Bug] Chat streams still report tool_calls when output_tokens reaches the limit `bug` `accepted` `in-progress` `wg/data-plane-networking` 💬2
- [#7110](https://github.com/vllm-project/semantic-router/issues/7110) [Bug] Systemone signal states ignore the deployment's question budget and fail silently `bug` `accepted` `wg/data-plane-networking` 💬2
- [#7108](https://github.com/vllm-project/semantic-router/issues/7108) [Bug] A late response can overwrite the active run in the Dashboard `bug` `accepted` `wg/developer-experience-ecosystem` 💬2
- [#7153](https://github.com/vllm-project/semantic-router/issues/7153) [Feature] Reduce request latency with file-backed Router Replay enabled `enhancement` `needs-acceptance` `wg/data-plane-networking` 💬1
- [#7123](https://github.com/vllm-project/semantic-router/issues/7123) [Bug] Dashboard reports rollback success when the Router rejects the target `bug` `accepted` `in-progress` `wg/enterprise-environment` 💬1
- [#7120](https://github.com/vllm-project/semantic-router/issues/7120) [Bug] `config apply` can save an unvalidated config for restart `bug` `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬1
- [#7116](https://github.com/vllm-project/semantic-router/issues/7116) [Bug] The second structured-output call ignores the listener timeout in standalone mode `bug` `accepted` `in-progress` `wg/data-plane-networking` 💬1
- [#7083](https://github.com/vllm-project/semantic-router/issues/7083) [Bug] WebSearch and other Anthropic server tools are refused for every backend `bug` `accepted` `in-progress` `wg/data-plane-networking` 💬1
- [#7086](https://github.com/vllm-project/semantic-router/issues/7086) [Bug] The run view, usage and connect misreport blocks, costs, models and side requests `bug` `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬1
- [#7131](https://github.com/vllm-project/semantic-router/issues/7131) [Feature] Dashboard: read the cost saving against each request's priciest pool model, the Router's own calls apart `enhancement` `wg/developer-experience-ecosystem`
- [#7103](https://github.com/vllm-project/semantic-router/issues/7103) [Bug] Requests: the Cost vs reference hint cuts its "cost only" label off `bug` `wg/developer-experience-ecosystem`
- [#7100](https://github.com/vllm-project/semantic-router/issues/7100) [Bug] Main's Router and harness contracts fail: a Replay PostgreSQL test lost its storage annotation `bug` `accepted` `wg/developer-experience-ecosystem`
- [#7092](https://github.com/vllm-project/semantic-router/issues/7092) [Bug] Replay's run read loads every record's bodies, so a long agent session takes over a second `bug` `accepted` `wg/developer-experience-ecosystem`
- [#7091](https://github.com/vllm-project/semantic-router/issues/7091) [Feature] Requests: a Breakdown of three cards, money in one currency, Timeline event markers and a faster session expansion `enhancement` `accepted` `wg/developer-experience-ecosystem`

#### 🔒 Closed Issues
- [#6541](https://github.com/vllm-project/semantic-router/issues/6541) [Bug] A streamed request without usage never debits its output tokens from a token budget
- [#4950](https://github.com/vllm-project/semantic-router/issues/4950) [Docs] List NEED_CLARIFICATION among the feedback classes the baseline leaves unmeasured
- [#4690](https://github.com/vllm-project/semantic-router/issues/4690) [Bug] Router: garbage collection keeps standalone mode's p99 high at 32+ concurrent clients
- [#6964](https://github.com/vllm-project/semantic-router/issues/6964) [Bug] System One: a question the model cannot answer is reported three ways on /v1/systemone
- [#6785](https://github.com/vllm-project/semantic-router/issues/6785) [Bug] MemoryStore.GetConversationChain logs while holding the store read lock, stalling every writer
- [#6548](https://github.com/vllm-project/semantic-router/issues/6548) [Bug] A tool-continuation turn asks no tool-selection question
- [#7131](https://github.com/vllm-project/semantic-router/issues/7131) [Feature] Dashboard: read the cost saving against each request's priciest pool model, the Router's own calls apart
- [#7103](https://github.com/vllm-project/semantic-router/issues/7103) [Bug] Requests: the Cost vs reference hint cuts its "cost only" label off
- [#7100](https://github.com/vllm-project/semantic-router/issues/7100) [Bug] Main's Router and harness contracts fail: a Replay PostgreSQL test lost its storage annotation
- [#7092](https://github.com/vllm-project/semantic-router/issues/7092) [Bug] Replay's run read loads every record's bodies, so a long agent session takes over a second
- [#7091](https://github.com/vllm-project/semantic-router/issues/7091) [Feature] Requests: a Breakdown of three cards, money in one currency, Timeline event markers and a faster session expansion

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*