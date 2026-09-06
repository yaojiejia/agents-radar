# 📡 AI Ecosystem Digest — 2026-09-06

> Generated 2026-09-06 00:38 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 144,178 | 13 | 24 | 0 | 0 |
| [OpenAI Codex](https://github.com/openai/codex) | 121,750 | 21 | 0 | 36 | 0 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 106,821 | 0 | 0 | 0 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,138 | 4 | 2 | 0 | 0 |
| [OpenCode](https://github.com/anomalyco/opencode) | 204,672 | 31 | 13 | 5 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 27,676 | 32 | 14 | 2 | 2 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 388,971 | 99 | 60 | 199 | 1 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 242,001 | 24 | 2 | 2 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 91,038 | 24 | 19 | 19 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 35,509 | 6 | 13 | 45 | 1 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 127,168 | 12 | 19 | 4 | 3 |
| [Ollama](https://github.com/ollama/ollama) | 180,254 | 7 | 14 | 3 | 1 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 58,119 | 9 | 10 | 84 | 0 |
| [Unsloth](https://github.com/unslothai/unsloth) | 75,677 | 19 | 1 | 13 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,060 | 0 | 2 | 1 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 5,596 | 3 | 4 | 3 | 0 |

---

## ✨ Highlights

- **Gemini CLI** released [v0.60.0-nightly.20260905.g85aca163f](https://github.com/google-gemini/gemini-cli/releases/tag/v0.60.0-nightly.20260905.g85aca163f).
- **Qwen Code** released [v0.23.1-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.1-preview.0) and [v0.23.0-nightly.20260905.e3d26283e6](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.0-nightly.20260905.e3d26283e6).
- **OpenAI Codex** merged [PR #43118](https://github.com/openai/codex/issues/43118): New issue raised on potential credit issues with the Codex Desktop agent, receiving 4 comments.
- **OpenClaw** encountered major issues with [#139173](https://github.com/openclaw/openclaw/issues/139173): A reported bug explains that 2026.9.1 discards completed Codex replies, attracting 4 comments.
- **Hermes Agent** has a new issue [#103904](https://github.com/NousResearch/hermes-agent/issues/103904) regarding Cron jobs firing late, accumulating 4 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 144,178 · **Open issues:** 13,612 · **Last push:** 1d ago

Today was a routine maintenance day for Claude Code, with no releases or merged pull requests reported. Notably, several new issues have been opened, including a bug (#92401) related to an auto-update regression that breaks launch on macOS Monterey without any warning or rollback option. Additionally, users have reported issues with stray configuration files affecting MSIX installations (#92345) and a misleading auto mode system message for Bash on Windows (#92407). Other highlighted bugs involve problems with drag-and-drop functionality in VS Code (#92403) and permission-denied message context (#92398).

#### 🐛 New Issues
- [#92345](https://github.com/anthropics/claude-code/issues/92345) [BUG] Stray priconfig.xml in Desktop MSIX breaks installation with 0x80073CF9 `bug` `has repro` `platform:windows` `area:cowork` 💬2
- [#92407](https://github.com/anthropics/claude-code/issues/92407) [BUG] Auto mode system message instructs Claude to use Bash, even on Windows `bug` `platform:windows` `area:bash` 💬1
- [#92406](https://github.com/anthropics/claude-code/issues/92406) [BUG] GitHub repo not accessible via "Add from GitHub" in claude.ai Chat despite successful connection `invalid`
- [#92301](https://github.com/anthropics/claude-code/issues/92301) execute_zapier_write_action / execute_zapier_read_action fail with "Invalid input: expected record, received string" (path: params) `bug` `has repro` `platform:windows` `area:mcp`
- [#92383](https://github.com/anthropics/claude-code/issues/92383) [BUG] Cross-session send_message from an auto-permission-mode sender is silently dropped (45s no-ack settle); bypassPermissions sender delivers `bug` `has repro` `platform:windows` `area:permissions`
- [#92405](https://github.com/anthropics/claude-code/issues/92405) SendUserFile: 送信した画像に常時表示のダウンロードアイコンが出なくなった `bug` `platform:windows` `area:tools` `area:ui`
- [#92404](https://github.com/anthropics/claude-code/issues/92404) / bug report `bug` `platform:windows` `area:networking`
- [#92403](https://github.com/anthropics/claude-code/issues/92403) [BUG] Drag & drop from the VS Code Explorer silently does nothing in Remote-WSL/SSH/Dev Containers — drop handler only accepts `file://` URIs `bug` `has repro` `platform:windows` `area:ide`
- [#92402](https://github.com/anthropics/claude-code/issues/92402) [FEATURE] Keyboard shortcut for microphone in main chat window (Claude Desktop macOS) `duplicate` `platform:windows` `area:desktop` `keybindings`
- [#92401](https://github.com/anthropics/claude-code/issues/92401) Auto-update regression (2.1.255) broke launch on macOS Monterey with no warning or rollback path `enhancement` `platform:macos` `area:packaging`
- [#92400](https://github.com/anthropics/claude-code/issues/92400) [FEATURE] @-file picker: Tab should complete to the longest common prefix, not full-accept the top match `enhancement` `area:tui`
- [#92399](https://github.com/anthropics/claude-code/issues/92399) `run_in_background` Bash call returns "completed" immediately when the script backgrounds its own children, and a follow-up `ps` can miss the still-running children `bug` `has repro` `platform:macos` `area:bash`
- [#92398](https://github.com/anthropics/claude-code/issues/92398) Permission-denied message shows a sub-command excerpt of the Bash command, not the full command or the matching deny rule `bug` `has repro` `platform:macos` `area:bash`

#### 🔒 Closed Issues
- [#81263](https://github.com/anthropics/claude-code/issues/81263) [BUG] heron_brook prompt text names a nonexistent tool ("AgentTool") and contradicts the background-job subagent instruction in the same prompt
- [#82211](https://github.com/anthropics/claude-code/issues/82211) `task_reminder` injects the full task store (incl. `description`) every turn, contradicting the tools' own documented split (`TaskList` = summary, `TaskGet` = full on demand)
- [#91477](https://github.com/anthropics/claude-code/issues/91477) [MODEL] Fable 5.1 defaults to using Bash on windows no matter how many times I correct it.
- [#82420](https://github.com/anthropics/claude-code/issues/82420) [BUG]
- [#82430](https://github.com/anthropics/claude-code/issues/82430) Self-reported: Claude Code violations caught by the user 72.5% of the time (user-configured accountability system)
- [#82429](https://github.com/anthropics/claude-code/issues/82429) Fable model blocked by "manage usage credits" prompt in CLI despite 100% credits remaining (works in desktop app)
- [#77466](https://github.com/anthropics/claude-code/issues/77466) [BUG] Sandbox blocks its own zsh `eval` wrapper — every Bash command fails with exit 126
- [#80272](https://github.com/anthropics/claude-code/issues/80272) Statusline/model picker shows base model (missing "1M context") on session resume until model picker is reopened
- [#82404](https://github.com/anthropics/claude-code/issues/82404) Max plan account shown 'usage credits required' billing gate; session then stuck replaying identical error across 7+ turns despite successful /model switches
- [#82334](https://github.com/anthropics/claude-code/issues/82334) [Bug] Model switching blocked by organization settings on personal account
- [#81912](https://github.com/anthropics/claude-code/issues/81912) Assistant response occasionally includes a fabricated user turn
- [#82432](https://github.com/anthropics/claude-code/issues/82432) NO_COLOR not respected by spinner status text and permission-mode indicator
- [#82428](https://github.com/anthropics/claude-code/issues/82428) [Bug] CLAUDE_CONFIG_DIR not respected during marketplace plugin installation
- [#82427](https://github.com/anthropics/claude-code/issues/82427) [MODEL]
- [#82425](https://github.com/anthropics/claude-code/issues/82425) 测试探索1
- [#82415](https://github.com/anthropics/claude-code/issues/82415) [Bug] Overly aggressive content safeguards blocking legitimate use cases
- [#82412](https://github.com/anthropics/claude-code/issues/82412) list_connected_browsers returns empty / extension never pairs, despite valid native-host install
- [#82411](https://github.com/anthropics/claude-code/issues/82411) [Bug] Excessive false positive safety filter rejections on straightforward coding tasks
- [#82403](https://github.com/anthropics/claude-code/issues/82403) [FEATURE] Remote Control: start a new session in the host session’s local directory from mobile
- [#82402](https://github.com/anthropics/claude-code/issues/82402) Long session unrecoverable: writes blocked during upstream 529, then oversized tool result forces 'Prompt is too long' with no compaction escape
- [#82401](https://github.com/anthropics/claude-code/issues/82401) [Bug] Project Access Failure with Inconsistent Model Availability Across Sessions
- [#82397](https://github.com/anthropics/claude-code/issues/82397) Project skill named code-review silently shadows built-in /code-review, making /code-review ultra unreachable
- [#82399](https://github.com/anthropics/claude-code/issues/82399) [Bug] Unauthorized image processing consuming API quota during tool execution
- [#82231](https://github.com/anthropics/claude-code/issues/82231) [BUG] Server-side usage loop exhausting Max limits on idle account with no active sessions

### OpenAI Codex (`openai/codex`)

**Stars:** 121,750 · **Open issues:** 15,463 · **Last push:** <1h ago

There were no new releases in the last 24 hours. Significant merged pull requests included enhancements for native Windows voice builds with the addition of explicit tool selection and the exposure of native build tools through Bazel targets. Other notable merges involved improvements to the voice SDKs, like incorporating GIO and handling Opus RTP, as well as optimizations for managing conversation history and agent memory opt-ins. Among the new issues, #43118 reports that the Codex Desktop agent used the user's full reset credit without confirmation, drawing attention as a major concern from users.

#### ✅ Merged PRs
- [#43126](https://github.com/openai/codex/pull/43126) Expose native Windows build tools through Bazel targets
- [#43125](https://github.com/openai/codex/pull/43125) Add explicit Windows tool selection for native voice builds
- [#43121](https://github.com/openai/codex/pull/43121) Require a prepared runtime when assembling voice helper packages
- [#43120](https://github.com/openai/codex/pull/43120) Add managed worktree creation to TUI session commands
- [#43117](https://github.com/openai/codex/pull/43117) Link Unix Bazel bindings against the prepared voice runtime
- [#43114](https://github.com/openai/codex/pull/43114) Add Bazel preparation for native voice runtimes
- [#43113](https://github.com/openai/codex/pull/43113) Save subagent and memory opt-ins through the app server
- [#43111](https://github.com/openai/codex/pull/43111) Add a Bazel target for native voice dependencies
- [#43110](https://github.com/openai/codex/pull/43110) Record reasoning effort changes in conversation history behind a flag
- [#43109](https://github.com/openai/codex/pull/43109) Add explicit toolchain inputs for native voice builds
- [#43104](https://github.com/openai/codex/pull/43104) Move Guardian thread context into `guardianv2` configuration
- [#43102](https://github.com/openai/codex/pull/43102) Include GIO in voice SDKs and native runtimes
- [#43100](https://github.com/openai/codex/pull/43100) Add bounded incoming Opus RTP handling to the voice host
- [#43099](https://github.com/openai/codex/pull/43099) Add receipt-verified native voice SDK export
- [#43097](https://github.com/openai/codex/pull/43097) Add a helper-backed realtime WebRTC session API
- [#43090](https://github.com/openai/codex/pull/43090) Send processed microphone audio over RTP in voice-host
- [#43083](https://github.com/openai/codex/pull/43083) Supply Bazel-managed CMake and Ninja for the bundled Opus build
- [#43079](https://github.com/openai/codex/pull/43079) Add opt-in local audio devices to the voice helper
- [#43074](https://github.com/openai/codex/pull/43074) Show a retryable error when the apps popup fails to load
- [#43070](https://github.com/openai/codex/pull/43070) Clarify comments in CI setup and the Rust workflow
- [#43069](https://github.com/openai/codex/pull/43069) Support managed worktrees for interactive sessions and forks
- [#43055](https://github.com/openai/codex/pull/43055) Allow `/copy` to copy status output and individual fields
- [#43043](https://github.com/openai/codex/pull/43043) Avoid filesystem scans when seeding the agents overview
- [#43039](https://github.com/openai/codex/pull/43039) Refresh live thread tools through `app/installed`
- [#43031](https://github.com/openai/codex/pull/43031) Keep refreshed MCP tool catalogs with their clients
- [#43005](https://github.com/openai/codex/pull/43005) Add Guardian V2 failure reasons and connection timing metrics
- [#43002](https://github.com/openai/codex/pull/43002) Replace Guardian tickets with parent response IDs
- [#43000](https://github.com/openai/codex/pull/43000) Preserve the resolved multi-agent version when reverting threads
- [#42993](https://github.com/openai/codex/pull/42993) Remove the deprecated `codex mcp-server` command
- [#42990](https://github.com/openai/codex/pull/42990) Refresh session hooks after external plugin updates
- [#42933](https://github.com/openai/codex/pull/42933) Wait for turn analytics before shutting down the Guardian v2 test
- [#42931](https://github.com/openai/codex/pull/42931) Update OpenAI Docs skill guidance for GPT-6 Astra
- [#42904](https://github.com/openai/codex/pull/42904) Use static instructions for the Default collaboration mode
- [#42903](https://github.com/openai/codex/pull/42903) Preserve TUI question state and integrate history and queue navigation
- [#42900](https://github.com/openai/codex/pull/42900) Establish root turn identity for independent tasks and memory requests
- [#42897](https://github.com/openai/codex/pull/42897) Add inline Other answers to async question choices

#### 🐛 New Issues
- [#43118](https://github.com/openai/codex/issues/43118) Codex Desktop agent spent my Full reset credit without confirmation `bug` `model-behavior` `rate-limits` `app` 💬4
- [#42912](https://github.com/openai/codex/issues/42912) 5-hour quota starts ~40% depleted and continues draining while idle after reset (Plus, macOS) `bug` `rate-limits` `app` 💬3
- [#42945](https://github.com/openai/codex/issues/42945) [Windows][26.901.5003.0] Built-in and custom pets pass clicks through to the desktop after app restart `bug` `windows-os` `app` `pets` 💬3
- [#43017](https://github.com/openai/codex/issues/43017) Android Remote thread/list omits agent-created threads and returns duplicate IDs; early user event restores visibility `bug` `app` `app-server` `remote` 💬2
- [#43119](https://github.com/openai/codex/issues/43119) macOS 26.6.2: coordinate click/drag fails with -10005 noWindowsAvailable in Safari and Krita, but works in TextEdit `bug` `app` `computer-use` 💬2
- [#43107](https://github.com/openai/codex/issues/43107) Frustrating Bug `bug` `windows-os` `app` `session` 💬2
- [#42971](https://github.com/openai/codex/issues/42971) [Windows Desktop] Switching ChatGPT accounts restores a stale turn for the same local Codex task `bug` `windows-os` `app` `session` 💬2
- [#43129](https://github.com/openai/codex/issues/43129) macOS: newest-first thread lookup returns two-day-old in-progress turn despite newer persisted messages `bug` `app` `app-server` 💬1
- [#43124](https://github.com/openai/codex/issues/43124) macOS desktop history freezes at older turns: projection expected ordinal 3185, got 3184; migration says already_paginated `bug` `app` `session` 💬1
- [#43115](https://github.com/openai/codex/issues/43115) Codex Windows voice companion loses transparency after restart and blocks desktop input `bug` `windows-os` `app` 💬1
- [#43112](https://github.com/openai/codex/issues/43112) Could not load this ChatGPT conversation `bug` `app` `session` 💬1
- [#43108](https://github.com/openai/codex/issues/43108) This content can't be shown reviewing my own actor framework `bug` `CLI` `safety-check` 💬1
- [#43106](https://github.com/openai/codex/issues/43106) [Windows] Delete All archived chats leaves a hidden archived fork that may block its source `bug` `windows-os` `app` `app-server` 💬1
- [#43103](https://github.com/openai/codex/issues/43103) Astra tasks fail to converge: premature stops, repeated compaction and code rework during persistent execution `bug` `model-behavior` `windows-os` `context` 💬1
- [#43101](https://github.com/openai/codex/issues/43101) Windows Computer Use: Storyline state dropdown click can submit underlying dialog; fresh UIA operations fail with cache errors `bug` `windows-os` `app` `computer-use` 💬1
- [#43128](https://github.com/openai/codex/issues/43128) Windows: Luna Reserve panel is clipped and partially untranslated in Russian UI `bug` `windows-os` `app`
- [#43127](https://github.com/openai/codex/issues/43127) Click pet no reaction `bug` `app` `pets`
- [#43123](https://github.com/openai/codex/issues/43123) Windows Desktop: plugin Hooks settings stay on “Loading hooks…” with no local projects `bug` `windows-os` `app` `skills`
- [#43122](https://github.com/openai/codex/issues/43122) [Desktop] Unobserved MCP extension-host query is evicted after 5 minutes, retaining old sessions and spawning new MCP processes `bug` `windows-os` `mcp` `app`
- [#43116](https://github.com/openai/codex/issues/43116) [Windows] Chat turn navigator overlaps the rounded top-left chat corner `bug` `windows-os` `app`
- [#43105](https://github.com/openai/codex/issues/43105) [macOS][Computer Use] iOS Simulator Save Password prompt cannot be clicked: windowNotFoundAtPosition `bug` `tool-calls` `computer-use`

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 106,821 · **Open issues:** 849 · **Last push:** 23h ago

On September 6, 2026, Gemini CLI saw the release of version v0.60.0-nightly.20260905.g85aca163f, which introduced several crucial fixes including enhancements for prompting user consent on environment changes and sanitizing runtime-altering environment variables, contributed by @amelidev. Additionally, @jesussamuel-byte implemented improvements to workspace path boundary checks and symlink resolution, enhancing command safety and file discovery. There were no new issues reported or merged pull requests in the last 24 hours, indicating a routine maintenance day for the project.

#### 🚀 New Releases
- [v0.60.0-nightly.20260905.g85aca163f](https://github.com/google-gemini/gemini-cli/releases/tag/v0.60.0-nightly.20260905.g85aca163f) Release v0.60.0-nightly.20260905.g85aca163f

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,138 · **Open issues:** 2,294 · **Last push:** 1d ago

On September 6, 2026, there were no new releases or merged pull requests for GitHub Copilot CLI. However, the day saw the emergence of several significant new issues, including report #4735 regarding the assistant's text before tool calls being misclassified as reasoning, and #4734 which highlights a bug where users encounter "Worktree missing" errors after upgrading to desktop version 2.98.0 and runtime 1.1.15. Additionally, #4733 raised concerns about events not being emitted and logged when the max_output_tokens limit is reached, while #4732 noted an issue where the Copilot unexpectedly switched to a less effective model, GPT-5 mini, leading to incomplete task processing. Overall, it was a routine day with important user-reported problems that may impact future updates.

#### 🐛 New Issues
- [#4735](https://github.com/github/copilot-cli/issues/4735) Assistant text preceding a tool call is reclassified as reasoning and summarized into "Thought for Ns" (never shown to the user) `triage`
- [#4734](https://github.com/github/copilot-cli/issues/4734) Bug: "Worktree missing" on all project sessions (existing and new) after upgrade to desktop 2.98.0 / runtime 1.1.15 `triage`
- [#4733](https://github.com/github/copilot-cli/issues/4733) When hit max_output_tokens, some events are not emitted and logged `triage`
- [#4732](https://github.com/github/copilot-cli/issues/4732) GH Copilot all of a sudden switched me to GPT-5 mini which just stops in the middle of tasks `triage`

#### 🔒 Closed Issues
- [#4272](https://github.com/github/copilot-cli/issues/4272) new models are greyed out and can't be selected
- [#4677](https://github.com/github/copilot-cli/issues/4677) CLI server emits `assistant.message_delta` with `streaming: false

### OpenCode (`anomalyco/opencode`)

**Stars:** 204,672 · **Open issues:** 5,738 · **Last push:** <1h ago

On September 6, 2026, there were no new releases for OpenCode, but several significant pull requests were merged, including #47436, which enhances Bedrock credentials resolution through the AWS default chain, and #47213, which fixes session ID transmission in Copilot requests. Additional improvements include the addition of GitLab reasoning variants in #47306 and fixes for loading worktree inventory on demand in #47441. A notable new issue reported was #47540, concerning installation errors, which has already generated 4 comments, signaling its urgency among users. Overall, the day was characterized by ongoing refinements and user-reported challenges rather than major version updates.

#### ✅ Merged PRs
- [#47436](https://github.com/anomalyco/opencode/pull/47436) feat(ai): resolve Bedrock credentials through the AWS default chain
- [#47213](https://github.com/anomalyco/opencode/pull/47213) fix(core): send session ID with Copilot requests
- [#47306](https://github.com/anomalyco/opencode/pull/47306) fix(opencode): add GitLab reasoning variants
- [#47441](https://github.com/anomalyco/opencode/pull/47441) fix(app): load worktree inventory on demand and cap concurrent server requests
- [#47537](https://github.com/anomalyco/opencode/pull/47537) fix(core): reload local plugin helpers without restarting

#### 🐛 New Issues
- [#47540](https://github.com/anomalyco/opencode/issues/47540) installing error 💬4
- [#47530](https://github.com/anomalyco/opencode/issues/47530) impossible de continuer 💬3
- [#47501](https://github.com/anomalyco/opencode/issues/47501) Single-line file mention expands to wrong line range (1-based vs 0-based LSP) 💬3
- [#47547](https://github.com/anomalyco/opencode/issues/47547) Go subscription blocked — Monthly Usage shows 100% via sum of per-model percentages, not actual dollars vs $60 limit 💬2
- [#47544](https://github.com/anomalyco/opencode/issues/47544) [FEATURE]:New opportunities for OpenCode. 💬2
- [#47511](https://github.com/anomalyco/opencode/issues/47511) Deceptive messaging 💬2
- [#47520](https://github.com/anomalyco/opencode/issues/47520) Usage 💬2
- [#47508](https://github.com/anomalyco/opencode/issues/47508) bug 💬2
- [#47479](https://github.com/anomalyco/opencode/issues/47479) [FEATURE]: notifications in the web UI 💬2
- [#47499](https://github.com/anomalyco/opencode/issues/47499) OpenCode CLI and GUI not responding 💬2
- [#47500](https://github.com/anomalyco/opencode/issues/47500) opencode go不稳定 💬2
- [#47491](https://github.com/anomalyco/opencode/issues/47491) Bug Report: OpenCode Go Quota Calculation Incorrectly Sums Percentages Instead of Dollar Usage* 💬2
- [#47492](https://github.com/anomalyco/opencode/issues/47492) [fvck u & hurry up] OpenCode Go Quota Calculation Incorrectly Sums Percentages Instead of Dollar Usage 💬2
- [#47546](https://github.com/anomalyco/opencode/issues/47546) Subagent hangs after a completed bash tool call while a detached descendant process stays alive; primary sessions unaffected 💬1
- [#47543](https://github.com/anomalyco/opencode/issues/47543) Anthropic MCP tools fail when input schema uses root-level anyOf/oneOf/allOf 💬1
- [#47535](https://github.com/anomalyco/opencode/issues/47535) opencode web bugs ! 💬1
- [#47526](https://github.com/anomalyco/opencode/issues/47526) Background subagent completion flips active TUI model without viewing child session 💬1
- [#47514](https://github.com/anomalyco/opencode/issues/47514) desktop: refocus prompt input when switching tabs with Cmd+number `bug` `2.0` 💬1
- [#47518](https://github.com/anomalyco/opencode/issues/47518) I can't rename project names 💬1
- [#47517](https://github.com/anomalyco/opencode/issues/47517) plugin: Git subdirectory package fails to install from GitHub `2.0` 💬1
- [#47515](https://github.com/anomalyco/opencode/issues/47515) [FEATURE]:NOUS PORTAL INTEGRATION 💬1
- [#47516](https://github.com/anomalyco/opencode/issues/47516) tui: stale subagent sessions cause SessionNotFoundError unhandled rejection bursts `2.0` 💬1
- [#47502](https://github.com/anomalyco/opencode/issues/47502) mcp: injected ?codemode= query param breaks strict remote MCP servers (Zoho returns 400, retry fix only covers 404) `2.0` 💬1
- [#47509](https://github.com/anomalyco/opencode/issues/47509) Desktop: session row silently deleted from opencode.db after app restart (no deletion event, data recoverable from event log) 💬1
- [#47545](https://github.com/anomalyco/opencode/issues/47545) Auto mode causes repeated false permission notifications in terminals
- [#47541](https://github.com/anomalyco/opencode/issues/47541) [FEATURE]: Expose request-scoped tool execution to provider plugins
- [#47538](https://github.com/anomalyco/opencode/issues/47538) V2 media normalization double-prefixes uppercase DATA: URLs
- [#47534](https://github.com/anomalyco/opencode/issues/47534) Window position/size settings are not saved on multi-monitor setup (Tauri window state bug)
- [#47525](https://github.com/anomalyco/opencode/issues/47525) HTTP 408 is not retried on either path; 409 regressed since #39391
- [#47513](https://github.com/anomalyco/opencode/issues/47513) chore: session-ui prompt-input uses \\200B CSS escape that oxlint reports as an error, breaking bun run lint
- [#47512](https://github.com/anomalyco/opencode/issues/47512) fix: models-dev user agent is evaluated at module load, leaking host OPENCODE_CLIENT into requests

#### 🔒 Closed Issues
- [#46870](https://github.com/anomalyco/opencode/issues/46870) Opencode Go: DeepSeek Zero Data Retention (ZDR) policy expired August 31 according to documentation
- [#47540](https://github.com/anomalyco/opencode/issues/47540) installing error
- [#47530](https://github.com/anomalyco/opencode/issues/47530) impossible de continuer
- [#47501](https://github.com/anomalyco/opencode/issues/47501) Single-line file mention expands to wrong line range (1-based vs 0-based LSP)
- [#47520](https://github.com/anomalyco/opencode/issues/47520) Usage
- [#47508](https://github.com/anomalyco/opencode/issues/47508) bug
- [#47499](https://github.com/anomalyco/opencode/issues/47499) OpenCode CLI and GUI not responding
- [#47500](https://github.com/anomalyco/opencode/issues/47500) opencode go不稳定
- [#47491](https://github.com/anomalyco/opencode/issues/47491) Bug Report: OpenCode Go Quota Calculation Incorrectly Sums Percentages Instead of Dollar Usage*
- [#47492](https://github.com/anomalyco/opencode/issues/47492) [fvck u & hurry up] OpenCode Go Quota Calculation Incorrectly Sums Percentages Instead of Dollar Usage
- [#47518](https://github.com/anomalyco/opencode/issues/47518) I can't rename project names
- [#47502](https://github.com/anomalyco/opencode/issues/47502) mcp: injected ?codemode= query param breaks strict remote MCP servers (Zoho returns 400, retry fix only covers 404)
- [#47304](https://github.com/anomalyco/opencode/issues/47304) [FEATURE]: Add reasoning variants for GitLab Duo models

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 27,676 · **Open issues:** 1,315 · **Last push:** <1h ago

On September 6, 2026, Qwen Code released two versions: v0.23.1-preview.0 and v0.23.0-nightly.20260905.e3d26283e6, both introducing enhanced functionality for visualizing and managing dynamic workflow runs, along with performance improvements in session workflow projection. Among the merged pull requests, notable updates include a fix for handling deferred review follow-ups in the web-shell and adjustments to the core configuration initialization process. A highlight of the day's new issues is #11091, which addresses a problem where the mermaid export is still flattened into the transcript renderer, despite its size.

#### 🚀 New Releases
- [v0.23.1-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.1-preview.0) Release v0.23.1-preview.0
- [v0.23.0-nightly.20260905.e3d26283e6](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.0-nightly.20260905.e3d26283e6) Release v0.23.0-nightly.20260905.e3d26283e6

#### ✅ Merged PRs
- [#11107](https://github.com/QwenLM/qwen-code/pull/11107) fix(web-shell): close the four deferred #9812 review follow-ups
- [#11113](https://github.com/QwenLM/qwen-code/pull/11113) test(core): pin Config.initialize() join ordering so the await-drop mutant fails

#### 🐛 New Issues
- [#11091](https://github.com/QwenLM/qwen-code/issues/11091) fix(export): mermaid (~6 MB) is still flattened into the exported transcript renderer `priority/P2` `category/performance` `scope/build-system` `type/enhancement` 💬6
- [#11076](https://github.com/QwenLM/qwen-code/issues/11076) chore(web-shell): follow up deferred #9812 review suggestions `priority/P3` `category/development` `scope/testing` `scope/documentation` 💬4
- [#11119](https://github.com/QwenLM/qwen-code/issues/11119) serve: background shell output and wake notifications silently dropped when the session runtime recycles, wedging the session `priority/P1` `type/bug` `category/core` `scope/session-management` 💬3
- [#11109](https://github.com/QwenLM/qwen-code/issues/11109) release.yml repeats work the same run already did, and one 20-minute step verifies nothing `priority/P2` `type/bug` `category/development` `scope/github-actions` 💬3
- [#11108](https://github.com/QwenLM/qwen-code/issues/11108) fix(web-shell): Cmd+A in composer selects entire page instead of input content `priority/P3` `type/bug` `category/ui` `scope/web-shell` 💬3
- [#11100](https://github.com/QwenLM/qwen-code/issues/11100) fix(web-shell): the transcript entry still carries the daemon hook runtime `priority/P2` `type/bug` `category/ui` `category/performance` 💬3
- [#11130](https://github.com/QwenLM/qwen-code/issues/11130) Embed Agent-Friendly Score badge in README `priority/P3` `type/documentation` `duplicate` 💬2
- [#11128](https://github.com/QwenLM/qwen-code/issues/11128) refactor(ci): collapse upsert-deferred-issue.sh's two hand-mirrored neutralization chains into one `priority/P3` `status/blocked` `category/development` `scope/ci-cd` 💬2
- [#11123](https://github.com/QwenLM/qwen-code/issues/11123) fix(serve): the explicit-close and kill paths also discard the child's error detail as `[object Object]` `priority/P3` `type/bug` `category/core` `scope/session-management` 💬2
- [#11118](https://github.com/QwenLM/qwen-code/issues/11118) fix(serve): a session doing cron, goal, monitor or history-mutation work can never be reclaimed `priority/P2` `type/bug` `category/core` `scope/session-management` 💬2
- [#11112](https://github.com/QwenLM/qwen-code/issues/11112) fix(web-shell): newly added model cannot be selected — Set model failed: Invalid params `status/need-retesting` `priority/P2` `type/bug` `category/configuration` 💬2
- [#11111](https://github.com/QwenLM/qwen-code/issues/11111) feat(search): session search should match conversation content, not just titles `status/need-information` `priority/P2` `type/feature-request` `category/cli` 💬2
- [#11096](https://github.com/QwenLM/qwen-code/issues/11096) fix(export): exports built from main point at an unpkg URL that 404s `priority/P2` `type/bug` `category/development` `scope/packaging` 💬2
- [#11087](https://github.com/QwenLM/qwen-code/issues/11087) Main CI failed: Qwen Code CI on 87270610a799 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#11092](https://github.com/QwenLM/qwen-code/issues/11092) chore(deps): two majors of react-markdown are installed in one tree `priority/P3` `category/development` `scope/build-system` `type/enhancement` 💬2
- [#11088](https://github.com/QwenLM/qwen-code/issues/11088) Main CI failed: E2E Tests on 0b8a926348be `type/bug` `status/ready-for-agent` `autofix/skip` `autofix/in-progress` 💬2
- [#11138](https://github.com/QwenLM/qwen-code/issues/11138) Release Failed for v0.23.0-nightly.20260905.0c945a6136 on 2026-09-05 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#11137](https://github.com/QwenLM/qwen-code/issues/11137) Main CI failed: E2E Tests on 0c945a61361f `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#11135](https://github.com/QwenLM/qwen-code/issues/11135) Main CI failed: Qwen Code CI on e133150ed18d `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#11121](https://github.com/QwenLM/qwen-code/issues/11121) Release Failed for v0.23.1-preview.0 on 2026-09-05 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#11131](https://github.com/QwenLM/qwen-code/issues/11131) Main CI failed: E2E Tests on 07726bee3df9 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#11104](https://github.com/QwenLM/qwen-code/issues/11104) Release Failed for v0.23.1-preview.0 on 2026-09-05 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#11122](https://github.com/QwenLM/qwen-code/issues/11122) Release Failed for v0.23.1-preview.0 on 2026-09-05 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#11114](https://github.com/QwenLM/qwen-code/issues/11114) Release Failed for v0.23.1-preview.0 on 2026-09-05 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#11116](https://github.com/QwenLM/qwen-code/issues/11116) Main CI failed: Qwen Code CI on f74799953952 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#11097](https://github.com/QwenLM/qwen-code/issues/11097) Main CI failed: E2E Tests on 077c57d2005b `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#11098](https://github.com/QwenLM/qwen-code/issues/11098) Release Failed for v0.23.1-preview.0 on 2026-09-05 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#11056](https://github.com/QwenLM/qwen-code/issues/11056) Deferred review findings from PR #11046 💬1
- [#11136](https://github.com/QwenLM/qwen-code/issues/11136) Deferred review findings from PR #11127
- [#11126](https://github.com/QwenLM/qwen-code/issues/11126) Deferred review findings from PR #11110
- [#11125](https://github.com/QwenLM/qwen-code/issues/11125) Deferred review findings from PR #10906
- [#11115](https://github.com/QwenLM/qwen-code/issues/11115) Deferred review findings from PR #11044

#### 🔒 Closed Issues
- [#5823](https://github.com/QwenLM/qwen-code/issues/5823) /loop cron tasks fire silently with no visibility — model cannot list or stop its own scheduled tasks
- [#8227](https://github.com/QwenLM/qwen-code/issues/8227) Windows: validated @-file reads lose O_NOFOLLOW and may have vacuous dev/ino identity checks (follow-up to #7206)
- [#4441](https://github.com/QwenLM/qwen-code/issues/4441) 无法给微信bot发图片，会报错。
- [#11076](https://github.com/QwenLM/qwen-code/issues/11076) chore(web-shell): follow up deferred #9812 review suggestions
- [#379](https://github.com/QwenLM/qwen-code/issues/379) [MCP stdio] Client serializes complex tool arguments as JSON strings instead of native types
- [#9348](https://github.com/QwenLM/qwen-code/issues/9348) [API Error: Model response leaked thinking tags:.](按Ctrl+Y重试。)
- [#10148](https://github.com/QwenLM/qwen-code/issues/10148) Agent View: deliver queued follow-ups from the provider, not the keyed composer
- [#11130](https://github.com/QwenLM/qwen-code/issues/11130) Embed Agent-Friendly Score badge in README
- [#11087](https://github.com/QwenLM/qwen-code/issues/11087) Main CI failed: Qwen Code CI on 87270610a799
- [#11088](https://github.com/QwenLM/qwen-code/issues/11088) Main CI failed: E2E Tests on 0b8a926348be
- [#10816](https://github.com/QwenLM/qwen-code/issues/10816) feat(channels): add configurable inbound message prefix
- [#6988](https://github.com/QwenLM/qwen-code/issues/6988) Support full-turn multimodal routing for image prompts with text-only primary models
- [#11121](https://github.com/QwenLM/qwen-code/issues/11121) Release Failed for v0.23.1-preview.0 on 2026-09-05
- [#11104](https://github.com/QwenLM/qwen-code/issues/11104) Release Failed for v0.23.1-preview.0 on 2026-09-05

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

**Stars:** 388,971 · **Open issues:** 6,272 · **Last push:** <1h ago

OpenClaw released version 2026.9.2, which enhances chat responsiveness by improving the handling of long transcripts and enables reliable upgrades while preserving active settings. Significant merged pull requests include fixes that optimize session creation and improve error management, along with enhancements to the user interface and performance across various components, such as the browser and Gateway. However, the day also saw the emergence of several notable issues, including a bug in version 2026.9.1 that discards completed Codex replies after a 120-second timeout and another critical bug in 2026.9.2 that causes the gateway to loop on a stale codex@beta, requiring an explicit npm source for recovery.

#### 🚀 New Releases
- [v2026.9.2](https://github.com/openclaw/openclaw/releases/tag/v2026.9.2) openclaw 2026.9.2

#### ✅ Merged PRs
- [#139523](https://github.com/openclaw/openclaw/pull/139523) fix(models): recover automations with retired model overrides
- [#139517](https://github.com/openclaw/openclaw/pull/139517) fix(process): require cleanup evidence before releasing owned work
- [#139476](https://github.com/openclaw/openclaw/pull/139476) perf(agents): stop error summary projection after the first line
- [#139552](https://github.com/openclaw/openclaw/pull/139552) test(reply): reuse accounting database with isolated session identities
- [#139545](https://github.com/openclaw/openclaw/pull/139545) refactor: use consistent media factory test snapshots
- [#139543](https://github.com/openclaw/openclaw/pull/139543) improve: start SQLite snapshot checks with fewer imports
- [#139125](https://github.com/openclaw/openclaw/pull/139125) fix(sdk): report replaced runs as cancelled
- [#139529](https://github.com/openclaw/openclaw/pull/139529) fix(sessions): avoid pauses decoding unrelated prompts during creation
- [#139486](https://github.com/openclaw/openclaw/pull/139486) refactor: consolidate Windows CI routing tests
- [#139483](https://github.com/openclaw/openclaw/pull/139483) improve: replace forced Gateway lifetime waits with real barriers
- [#139520](https://github.com/openclaw/openclaw/pull/139520) fix: speed up model filtering and preserve async tool results
- [#139535](https://github.com/openclaw/openclaw/pull/139535) perf(prometheus): reduce temporary scrape allocations
- [#139509](https://github.com/openclaw/openclaw/pull/139509) fix(gateway): converge monitors after config publication
- [#139533](https://github.com/openclaw/openclaw/pull/139533) perf(tui): prepare highlight patterns once per query
- [#139532](https://github.com/openclaw/openclaw/pull/139532) perf(browser): reuse parent links when finding role-tree roots
- [#139502](https://github.com/openclaw/openclaw/pull/139502) perf(browser): avoid temporary NodeList copies in snapshots
- [#139500](https://github.com/openclaw/openclaw/pull/139500) fix(gateway): prevent shutdown hanging during suspension
- [#139466](https://github.com/openclaw/openclaw/pull/139466) feat(browser): set up the Chrome extension from this Mac
- [#139519](https://github.com/openclaw/openclaw/pull/139519) fix(test): unblock CI after storage-failure regression assertion
- [#139459](https://github.com/openclaw/openclaw/pull/139459) feat: enable CLI agents by default
- [#127757](https://github.com/openclaw/openclaw/pull/127757) perf(build): avoid unrelated gateway artifact scans
- [#139289](https://github.com/openclaw/openclaw/pull/139289) fix(update): deliver final progress after updates exceed 45 minutes
- [#139384](https://github.com/openclaw/openclaw/pull/139384) fix(ui): show session hover cards for local chat URLs
- [#139400](https://github.com/openclaw/openclaw/pull/139400) perf(ui): reuse unchanged transcript key snapshots
- [#139381](https://github.com/openclaw/openclaw/pull/139381) fix(ui): make subagent sessions view-only
- [#139487](https://github.com/openclaw/openclaw/pull/139487) fix: open agent state on SQLite builds without extensions
- [#139478](https://github.com/openclaw/openclaw/pull/139478) perf(skills): detach cached metadata from source strings
- [#136736](https://github.com/openclaw/openclaw/pull/136736) fix(ui): show primary user in multi-agent profile hero
- [#136361](https://github.com/openclaw/openclaw/pull/136361) perf(sessions): reuse committed identity after entry patches
- [#139482](https://github.com/openclaw/openclaw/pull/139482) refactor(exec): share package-manager option scans
- [#139441](https://github.com/openclaw/openclaw/pull/139441) fix(ci): keep frozen mobile candidates releasable
- [#139467](https://github.com/openclaw/openclaw/pull/139467) fix: avoid session deletion slowdown in large session stores
- [#139354](https://github.com/openclaw/openclaw/pull/139354) perf(gateway): reuse node invocation idle timers
- [#139413](https://github.com/openclaw/openclaw/pull/139413) fix(auth): retain selected metadata through account planning
- [#139484](https://github.com/openclaw/openclaw/pull/139484) fix(discord): retain voice input until transcription completes
- [#139409](https://github.com/openclaw/openclaw/pull/139409) fix(agents): name Gateway storage failures in run-failure copy
- [#139385](https://github.com/openclaw/openclaw/pull/139385) fix(ui): add shortcuts for every side panel
- [#139450](https://github.com/openclaw/openclaw/pull/139450) fix: keep subagent checks responsive in large session stores
- [#139463](https://github.com/openclaw/openclaw/pull/139463) fix(memory): index notes when optional embeddings cannot start
- [#139457](https://github.com/openclaw/openclaw/pull/139457) fix: refresh pending approvals when reopening chat
- [#139461](https://github.com/openclaw/openclaw/pull/139461) fix(tooling): preserve Git hook choices during install
- [#139306](https://github.com/openclaw/openclaw/pull/139306) feat: render dashboard data reports without iframes
- [#139372](https://github.com/openclaw/openclaw/pull/139372) fix(ui): keep activity labels visible and unify row typography
- [#138210](https://github.com/openclaw/openclaw/pull/138210) docs(mantis): correct proof publishing and QA dispatch guidance
- [#139464](https://github.com/openclaw/openclaw/pull/139464) docs: fix communication-only session visibility example
- [#138351](https://github.com/openclaw/openclaw/pull/138351) perf(agents): skip redundant shared-provider config hashing
- [#139292](https://github.com/openclaw/openclaw/pull/139292) fix(telegram): preserve typing in concurrent forum topics
- [#139474](https://github.com/openclaw/openclaw/pull/139474) refactor: consolidate generic channel account tests
- [#139397](https://github.com/openclaw/openclaw/pull/139397) fix: continue agent tasks after temporary rate limits
- [#139429](https://github.com/openclaw/openclaw/pull/139429) fix(agents): derive compaction targets after runtime admission
- [#139456](https://github.com/openclaw/openclaw/pull/139456) fix(channels): restore native subagent progress and pause inactive cards
- [#139473](https://github.com/openclaw/openclaw/pull/139473) fix(claws): show owned cron jobs once in removal previews
- [#139317](https://github.com/openclaw/openclaw/pull/139317) fix(media): prevent stale transcription models and PDF defaults
- [#139244](https://github.com/openclaw/openclaw/pull/139244) perf(agents): reduce small-context discovery overhead
- [#125906](https://github.com/openclaw/openclaw/pull/125906) perf(gateway): skip provider catalog rewarm on rate limits
- [#139345](https://github.com/openclaw/openclaw/pull/139345) chore(ui): refresh control ui locales
- [#139311](https://github.com/openclaw/openclaw/pull/139311) perf(config): reduce dispatch config preparation
- [#139113](https://github.com/openclaw/openclaw/pull/139113) fix: preserve saved settings across delayed reads and reconnects
- [#127837](https://github.com/openclaw/openclaw/pull/127837) fix(agents): bound fresh workspace prompt caching
- [#139295](https://github.com/openclaw/openclaw/pull/139295) fix(agents): preserve model errors during thinking recovery
- [#139355](https://github.com/openclaw/openclaw/pull/139355) fix(ui): link file references with line ranges, not version numbers
- [#139455](https://github.com/openclaw/openclaw/pull/139455) fix(gateway): keep worker provisioning resumable across restart
- [#139371](https://github.com/openclaw/openclaw/pull/139371) fix(ui): hide author avatars in subagent transcripts
- [#139291](https://github.com/openclaw/openclaw/pull/139291) fix(infra): arm worker pool idle retirement on the pool's own clock
- [#139462](https://github.com/openclaw/openclaw/pull/139462) docs: clarify configuration reload outcomes
- [#138196](https://github.com/openclaw/openclaw/pull/138196) perf(net): prepare proxy target facts once per request
- [#139432](https://github.com/openclaw/openclaw/pull/139432) fix(tasks): avoid pauses from saved prompts during maintenance
- [#139454](https://github.com/openclaw/openclaw/pull/139454) fix: make config schema tests exercise their intended inputs
- [#138848](https://github.com/openclaw/openclaw/pull/138848) refactor: simplify shared proxy initialization
- [#138948](https://github.com/openclaw/openclaw/pull/138948) fix(discord): keep Components v2 text in thread starters
- [#139431](https://github.com/openclaw/openclaw/pull/139431) fix(anthropic): retain tool schema references and constraints
- [#139414](https://github.com/openclaw/openclaw/pull/139414) perf(process): bound encoding for UTF-8 output tails
- [#139403](https://github.com/openclaw/openclaw/pull/139403) fix(ios): restore release qualification
- [#139452](https://github.com/openclaw/openclaw/pull/139452) docs(release): carry stable release authorization through macOS
- [#139424](https://github.com/openclaw/openclaw/pull/139424) refactor(agents): reuse owned tool projection arrays
- [#139442](https://github.com/openclaw/openclaw/pull/139442) refactor(test): remove obsolete Vitest config adapters
- [#139446](https://github.com/openclaw/openclaw/pull/139446) improve: avoid real cleanup delay in Gateway lifecycle tests
- [#139391](https://github.com/openclaw/openclaw/pull/139391) fix: concurrent MCP shutdown reports a spurious listener error
- [#139447](https://github.com/openclaw/openclaw/pull/139447) chore(ui): refresh control ui locales
- [#139445](https://github.com/openclaw/openclaw/pull/139445) refactor: remove vacuous Ollama test and share model fixtures
- [#139420](https://github.com/openclaw/openclaw/pull/139420) fix(code-mode): reserve released slots for Swarm continuations
- [#139373](https://github.com/openclaw/openclaw/pull/139373) fix(ui): keep resized Review tool cards within transcript bounds
- [#139437](https://github.com/openclaw/openclaw/pull/139437) fix(gateway): resume idle cloud sessions after Gateway updates
- [#139427](https://github.com/openclaw/openclaw/pull/139427) fix(test): drain Git stdin in merge authorization fixtures
- [#139430](https://github.com/openclaw/openclaw/pull/139430) fix(android): complete chat health refresh after overlapping history
- [#139415](https://github.com/openclaw/openclaw/pull/139415) fix: native archive plugins fail to load when bundle metadata is present
- [#139435](https://github.com/openclaw/openclaw/pull/139435) refactor: simplify pure config validation tests
- [#139422](https://github.com/openclaw/openclaw/pull/139422) refactor(update): remove redundant CLI command runner
- [#139425](https://github.com/openclaw/openclaw/pull/139425) refactor(state): separate machine-state reads and writes
- [#139368](https://github.com/openclaw/openclaw/pull/139368) fix(agents): authorize overrides with destination model rules
- [#139426](https://github.com/openclaw/openclaw/pull/139426) test(memory): remove ignored hybrid fixture inputs
- [#139434](https://github.com/openclaw/openclaw/pull/139434) refactor: consolidate image runtime test setup
- [#139389](https://github.com/openclaw/openclaw/pull/139389) refactor(workboard): stream card preloads and share revision checks
- [#139416](https://github.com/openclaw/openclaw/pull/139416) refactor(test): simplify Moonshot catalog assertions
- [#139395](https://github.com/openclaw/openclaw/pull/139395) fix: migrate workspace setup early and expose channel startup errors
- [#139339](https://github.com/openclaw/openclaw/pull/139339) fix(setup): verify and save provider starter aliases correctly
- [#139423](https://github.com/openclaw/openclaw/pull/139423) docs: add v2026.9.2 release notes
- [#139410](https://github.com/openclaw/openclaw/pull/139410) refactor(agents): remove recovery adapters and auth accessors
- [#139390](https://github.com/openclaw/openclaw/pull/139390) fix: preserve indentation in Discord and session messages
- [#139405](https://github.com/openclaw/openclaw/pull/139405) fix(crabbox): preserve payload output and script options
- [#139398](https://github.com/openclaw/openclaw/pull/139398) refactor(workboard): build typed board and subscription upserts
- [#139417](https://github.com/openclaw/openclaw/pull/139417) feat(ui): filter the folder browser live while typing a path
- [#139367](https://github.com/openclaw/openclaw/pull/139367) fix(agents): keep progress cards out of subagent sessions
- [#139377](https://github.com/openclaw/openclaw/pull/139377) refactor(test): simplify Vitest launch and project ownership
- [#138852](https://github.com/openclaw/openclaw/pull/138852) feat(ui): rename paired devices from the Control UI devices page
- [#139419](https://github.com/openclaw/openclaw/pull/139419) test(tlon): consolidate SSE acknowledgement coverage
- [#137313](https://github.com/openclaw/openclaw/pull/137313) fix(channels): preserve forwarded text and threaded sender commands
- [#139406](https://github.com/openclaw/openclaw/pull/139406) chore(i18n): restore canonical native locale refresh
- [#139393](https://github.com/openclaw/openclaw/pull/139393) fix(update): report launchd service recovery correctly after a failed update
- [#139334](https://github.com/openclaw/openclaw/pull/139334) fix: honor global plugin disablement during PDF extraction
- [#139401](https://github.com/openclaw/openclaw/pull/139401) docs(plugins): clarify retained session SDK compatibility helpers
- [#139333](https://github.com/openclaw/openclaw/pull/139333) fix(daemon): project native service-manager environments
- [#139386](https://github.com/openclaw/openclaw/pull/139386) refactor(cli): reduce repeated command argument parsing
- [#139375](https://github.com/openclaw/openclaw/pull/139375) fix(ui): remove per-subagent edit counters from chat rows
- [#138264](https://github.com/openclaw/openclaw/pull/138264) chore(test): migrate to stable Vitest 5
- [#139283](https://github.com/openclaw/openclaw/pull/139283) fix(tailscale): guide recovery of existing foreground claims
- [#139225](https://github.com/openclaw/openclaw/pull/139225) fix(heartbeat): persist accepted monitor scratch
- [#139374](https://github.com/openclaw/openclaw/pull/139374) fix(cron): retain run-owned pricing through finalization
- [#139353](https://github.com/openclaw/openclaw/pull/139353) fix(codex): keep completed replies when settlement expires
- [#139380](https://github.com/openclaw/openclaw/pull/139380) chore: simplify maintainer skills and sync shared tooling
- [#139304](https://github.com/openclaw/openclaw/pull/139304) fix(gateway): drain update notice work before shutdown
- [#139369](https://github.com/openclaw/openclaw/pull/139369) chore(release): bring 2026.9.2 release state to main
- [#139349](https://github.com/openclaw/openclaw/pull/139349) fix: stop reporting failed native broadcasts as successful
- [#139346](https://github.com/openclaw/openclaw/pull/139346) refactor(ui): remove obsolete chat media plumbing
- [#139366](https://github.com/openclaw/openclaw/pull/139366) refactor(sqlite): reduce repeated schema validation work
- [#139352](https://github.com/openclaw/openclaw/pull/139352) perf(plugins): avoid preparing dispatch lists for hook presence checks
- [#139387](https://github.com/openclaw/openclaw/pull/139387) fix(gateway): avoid slow scratch preparation when starting workers
- [#137868](https://github.com/openclaw/openclaw/pull/137868) fix(ui): prevent activity pages jumping during live refresh
- [#139399](https://github.com/openclaw/openclaw/pull/139399) fix: recognize 2026.9.3 plugin security release context
- [#139370](https://github.com/openclaw/openclaw/pull/139370) refactor(media): streamline understanding section assembly
- [#139302](https://github.com/openclaw/openclaw/pull/139302) refactor(sqlite): separate quarantine errors from migrations
- [#139378](https://github.com/openclaw/openclaw/pull/139378) refactor(update): remove unused build-manager modes
- [#139358](https://github.com/openclaw/openclaw/pull/139358) fix(channels): keep setup choices in the selected workspace
- [#139359](https://github.com/openclaw/openclaw/pull/139359) refactor(runtime): share sealed subprocess bootstrap
- [#139350](https://github.com/openclaw/openclaw/pull/139350) perf(memory): reuse typed chunk publication statements
- [#139376](https://github.com/openclaw/openclaw/pull/139376) fix(doctor): avoid unrelated plugin setup during migrations
- [#139061](https://github.com/openclaw/openclaw/pull/139061) fix(gateway): avoid crashes when an upgrading client disconnects
- [#139363](https://github.com/openclaw/openclaw/pull/139363) perf(replies): skip wrapper projection for ordinary text
- [#139275](https://github.com/openclaw/openclaw/pull/139275) fix(browser): recover Chrome relay target identities
- [#139356](https://github.com/openclaw/openclaw/pull/139356) perf(ui): reuse active-locale duration and relative-time formatters
- [#139362](https://github.com/openclaw/openclaw/pull/139362) refactor(agents): simplify failure recovery bookkeeping
- [#139382](https://github.com/openclaw/openclaw/pull/139382) chore(ui): refresh control ui locales
- [#139335](https://github.com/openclaw/openclaw/pull/139335) refactor(ios): keep cron snapshot pagination consistent
- [#96311](https://github.com/openclaw/openclaw/pull/96311) fix(feishu): preserve mentions in single and batched messages
- [#139241](https://github.com/openclaw/openclaw/pull/139241) fix(desktop): restore tray stop and simplify Rust state
- [#139348](https://github.com/openclaw/openclaw/pull/139348) fix(macos): await onboarding activation consent settlement
- [#139379](https://github.com/openclaw/openclaw/pull/139379) refactor(test): preserve typed Nextcloud comparison calls
- [#139314](https://github.com/openclaw/openclaw/pull/139314) docs: make TaskFlow skill examples runnable
- [#139280](https://github.com/openclaw/openclaw/pull/139280) feat: identify the runtime serving Prometheus metrics
- [#139342](https://github.com/openclaw/openclaw/pull/139342) refactor(test): consolidate OpenRouter request assertions
- [#139261](https://github.com/openclaw/openclaw/pull/139261) fix(tailscale): release managed routes after Gateway crashes
- [#136363](https://github.com/openclaw/openclaw/pull/136363) fix(llama-cpp): reconcile managed router state before requests
- [#139233](https://github.com/openclaw/openclaw/pull/139233) refactor(sessions): unify restart recovery admission snapshots
- [#138757](https://github.com/openclaw/openclaw/pull/138757) fix(ui): acknowledge successful remote config open
- [#139227](https://github.com/openclaw/openclaw/pull/139227) fix(daemon): unify recovery hints and preserve log paths
- [#139176](https://github.com/openclaw/openclaw/pull/139176) test(agents): give the sibling-drain completion wait a tolerance on slow runners
- [#139218](https://github.com/openclaw/openclaw/pull/139218) fix(auth): keep an unset default model unchanged during login
- [#138732](https://github.com/openclaw/openclaw/pull/138732) fix(android): reduce repeated retries to unreachable gateways
- [#139192](https://github.com/openclaw/openclaw/pull/139192) fix(gateway): keep chat metadata responsive across auth refresh
- [#139193](https://github.com/openclaw/openclaw/pull/139193) fix(doctor): keep Workshop relocation lint read-only
- [#139037](https://github.com/openclaw/openclaw/pull/139037) fix: sessions_spawn rejection wrongly marks a recovered run as failed
- [#139189](https://github.com/openclaw/openclaw/pull/139189) refactor(acp): simplify pending operation accounting
- [#136533](https://github.com/openclaw/openclaw/pull/136533) fix(compaction): heartbeat sessions ignore the active transcript byte cap
- [#139184](https://github.com/openclaw/openclaw/pull/139184) fix(skills): validate names in library forms
- [#139165](https://github.com/openclaw/openclaw/pull/139165) fix(agents): keep fresh tool results readable under context pressure
- [#139148](https://github.com/openclaw/openclaw/pull/139148) improve: reuse encoded properties in Gateway broadcasts
- [#139141](https://github.com/openclaw/openclaw/pull/139141) fix(android): keep workspace previews open when sharing fails
- [#139111](https://github.com/openclaw/openclaw/pull/139111) fix(ci): unblock Docker smoke tests on current runtimes
- [#139122](https://github.com/openclaw/openclaw/pull/139122) improve: avoid splitting discarded tool-output lines
- [#139124](https://github.com/openclaw/openclaw/pull/139124) refactor(gateway): share approval snapshot projection
- [#139115](https://github.com/openclaw/openclaw/pull/139115) improve: reuse token estimates during compaction planning
- [#139132](https://github.com/openclaw/openclaw/pull/139132) fix(matrix): stop SDK test clients before tearing down runtime
- [#139116](https://github.com/openclaw/openclaw/pull/139116) test(update): isolate campaign RPC ledger state
- [#138059](https://github.com/openclaw/openclaw/pull/138059) feat(agents): allow bounded recursive session spawning by default
- [#117339](https://github.com/openclaw/openclaw/pull/117339) fix(media): reject non-binary generated video downloads across providers
- [#138964](https://github.com/openclaw/openclaw/pull/138964) fix(control-ui): recover bundled startup without losing sign-in
- [#138821](https://github.com/openclaw/openclaw/pull/138821) fix(subagents): prevent stale completion after requester delivery
- [#139081](https://github.com/openclaw/openclaw/pull/139081) ci: run prepared real-Gateway suites on two workers
- [#139052](https://github.com/openclaw/openclaw/pull/139052) refactor(reply): share dispatch hook invocation
- [#139064](https://github.com/openclaw/openclaw/pull/139064) fix(browser): historical previews launch unwanted browsers
- [#138991](https://github.com/openclaw/openclaw/pull/138991) fix(sessions): preserve agents in global views and local commands
- [#123120](https://github.com/openclaw/openclaw/pull/123120) perf(agents): native reasoning delta fast path avoids O(n²) rescans
- [#139265](https://github.com/openclaw/openclaw/pull/139265) fix: unblock sessions after force-clearing stalled startup
- [#139315](https://github.com/openclaw/openclaw/pull/139315) refactor(test): reuse speech request assertions
- [#139326](https://github.com/openclaw/openclaw/pull/139326) refactor(process): remove unused spawn fallback controls
- [#139329](https://github.com/openclaw/openclaw/pull/139329) perf(media): reuse validated inline image encoding
- [#139101](https://github.com/openclaw/openclaw/pull/139101) fix(agents): prevent stale options across provider runtimes
- [#139331](https://github.com/openclaw/openclaw/pull/139331) fix(release): pin ClawHub workflow with recovery receipt lookup
- [#139327](https://github.com/openclaw/openclaw/pull/139327) perf(sessions): avoid discarded waits in queued store writes
- [#139337](https://github.com/openclaw/openclaw/pull/139337) fix(config): preserve sensitivity and URL redaction metadata
- [#139336](https://github.com/openclaw/openclaw/pull/139336) refactor(test): preserve typed Tlon mock-call assertions
- [#139251](https://github.com/openclaw/openclaw/pull/139251) fix(workers): avoid session stalls behind slow cloud provisioning
- [#139273](https://github.com/openclaw/openclaw/pull/139273) fix: reconcile selected-source dependencies before remote checks
- [#136926](https://github.com/openclaw/openclaw/pull/136926) fix(codex): restore turns after in-process plugin updates
- [#139307](https://github.com/openclaw/openclaw/pull/139307) refactor(plugins): centralize installed-index transaction queries
- [#139325](https://github.com/openclaw/openclaw/pull/139325) perf(replies): bound pending tool-delivery observers
- [#134198](https://github.com/openclaw/openclaw/pull/134198) fix(config): do not claim rejected payload saved when sidecar write fails
- [#139332](https://github.com/openclaw/openclaw/pull/139332) fix(config): restore missing writer labels in config history
- [#139276](https://github.com/openclaw/openclaw/pull/139276) fix(commands): preserve selected agent when stopping global sessions

#### 🐛 New Issues
- [#139173](https://github.com/openclaw/openclaw/issues/139173) [Bug]: 2026.9.1 discards completed Codex replies after 120s terminal settlement timeout `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬4
- [#139207](https://github.com/openclaw/openclaw/issues/139207) [Bug]: doctor false-positives 'unknown-model' for every google/* reference (manifest omits static catalog) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#139277](https://github.com/openclaw/openclaw/issues/139277) Android Talk voice silently reverts to default agent after gateway reconnect (agent selection only applied on picker tap, never persisted) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#138934](https://github.com/openclaw/openclaw/issues/138934) Windows: openclaw update to 2026.9.1 fails with service-revalidation-failed, leaves the Scheduled Task disabled, and the new --task-supervisor launcher cannot start the gateway `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` `P0` 💬3
- [#139235](https://github.com/openclaw/openclaw/issues/139235) [Bug]: Retired ChatGPT model overrides repeatedly fail automations without doctor repair `bug` `maintainer` `P1` `clawsweeper:source-repro` 💬2
- [#139527](https://github.com/openclaw/openclaw/issues/139527) [Bug]: 2026.9.2 gateway loops on stale codex@beta; recovery requires explicit npm source in affected image `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬2
- [#139549](https://github.com/openclaw/openclaw/issues/139549) [Bug]: State-only backup traverses the shared workspace base `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#139518](https://github.com/openclaw/openclaw/issues/139518) Subagent lists decode unrelated saved prompts in large session stores `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#139443](https://github.com/openclaw/openclaw/issues/139443) [feishu] Streaming card dies during long tool phases: 200850 idle timeout followed by ~1000 blind 300309 retries `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#138763](https://github.com/openclaw/openclaw/issues/138763) [Bug]: Telegram typing coalescing suppresses concurrent forum-topic indicators `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#139341](https://github.com/openclaw/openclaw/issues/139341) [Bug]: watchdog-released ingress retry is rejected as skipped:duplicate by the committed inbound dedupe and recorded as completed — queued message silently destroyed `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬2
- [#138929](https://github.com/openclaw/openclaw/issues/138929) [Bug]: Model emits malformed pseudo tool-call text on first "read" tool use, causing "Agent couldn't generate a response" `bug` `bug:behavior` `P1` `clawsweeper:needs-live-repro` 💬2
- [#139278](https://github.com/openclaw/openclaw/issues/139278) Realtime Talk: force-agent-consult couples interruptResponseOnInputAudio to autoRespondToAudio, disabling barge-in (phone path behaves differently) 💬2
- [#139274](https://github.com/openclaw/openclaw/issues/139274) [Bug]: Native /codex bind drops voice-note attachments and skips configured STT `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#139088](https://github.com/openclaw/openclaw/issues/139088) [Bug]: heartbeat_respond accepts `scratch` and reports scratchPending, but the scratch is never written `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬2
- [#139249](https://github.com/openclaw/openclaw/issues/139249) [Bug]: Pending preview prevents complete Codex answer from surviving settlement `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#138812](https://github.com/openclaw/openclaw/issues/138812) buzz: message-tool replies inside a thread are parented to the triggering message, so Buzz mobile renders every bot reply as a nested sub-thread `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#139262](https://github.com/openclaw/openclaw/issues/139262) [Bug]: macOS desktop app opens Dashboard instead of downloading attachments from a remote Gateway `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#139257](https://github.com/openclaw/openclaw/issues/139257) [Bug]: CLI human-readable output suspends with SIGTTOU on SSH PTY; JSON output unaffected `bug` `regression` `impact:crash-loop` `P0` 💬2
- [#139166](https://github.com/openclaw/openclaw/issues/139166) Memory Core doctor gives no recovery guidance for symlinked host-event paths `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬2
- [#139188](https://github.com/openclaw/openclaw/issues/139188) feat(diagnostics-prometheus): expose provider subscription usage windows `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#139185](https://github.com/openclaw/openclaw/issues/139185) Windows double-drive-letter path bug (C:\c\Users\...) via MSYS2 git output in worktrees.branches and backup repository check [2026.9.1] `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#139557](https://github.com/openclaw/openclaw/issues/139557) Browser proxy files are saved as a bare UUID, discarding the node file name the envelope already carries `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#139365](https://github.com/openclaw/openclaw/issues/139365) [Bug]: Logbook AM/PM timestamps overlap the activity stripe `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#139526](https://github.com/openclaw/openclaw/issues/139526) Session creation decodes saved prompts from unrelated sessions `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#139547](https://github.com/openclaw/openclaw/issues/139547) Expose garbage collection duration in diagnostics metrics `enhancement` `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#139121](https://github.com/openclaw/openclaw/issues/139121) Bug: SDK misclassifies run cancellation and provisional errors `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#139544](https://github.com/openclaw/openclaw/issues/139544) [Feature]: Discord thread membership (add/remove members) in the message tool `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#139515](https://github.com/openclaw/openclaw/issues/139515) Long model streams rescan growing text and async replay can invent missing results `maintainer` `P2` `clawsweeper:source-repro` `impact:session-state` 💬1
- [#139537](https://github.com/openclaw/openclaw/issues/139537) [Bug]: SDK late run streams append older events after the retained replay tail `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#139521](https://github.com/openclaw/openclaw/issues/139521) [Feature]: Same-model transient retry for CLI-backend runs before advancing the model fallback chain `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#139448](https://github.com/openclaw/openclaw/issues/139448) Simplify Chrome extension setup with a supported macOS install request `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#139513](https://github.com/openclaw/openclaw/issues/139513) Bug: bailian/qwen3.7-plus request failed — Cannot read properties of undefined (reading 'trim') `P1` `clawsweeper:needs-info` `impact:session-state` `impact:auth-provider` 💬1
- [#139504](https://github.com/openclaw/openclaw/issues/139504) cron: a booked manual run is unobservable until it starts — the returned runId matches no row, and cron_run_receipts has no queued state `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#139505](https://github.com/openclaw/openclaw/issues/139505) cron: config_revision is a content hash that cycles, so there is no monotonic witness for scheduler mutations `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#139498](https://github.com/openclaw/openclaw/issues/139498) [Bug]: models.list/TUI picker stays on the static startup catalog after a Gateway restart until a refresh:true call `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:auth-provider` 💬1
- [#139499](https://github.com/openclaw/openclaw/issues/139499) [Bug]: Telegram /models hides anthropic/* models bound to claude-cli (auth checker skips applyCliRuntimeModelAuthAvailability) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:auth-provider` 💬1
- [#139494](https://github.com/openclaw/openclaw/issues/139494) [Bug]: gateway.auth.token literal "undefined" is accepted silently; doctor and security audit do not flag it `security` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` 💬1
- [#139485](https://github.com/openclaw/openclaw/issues/139485) [Bug]: 2026.9.2 update finalize remains alive after gateway shutdown, leaving OCM upgrade offline `maintainer` `P1` `impact:crash-loop` `issue-rating: 🦪 silver shellfish` 💬1
- [#139488](https://github.com/openclaw/openclaw/issues/139488) [Bug]: Dashboard current-session automations falsely fail delivery with an unrelated channel configured `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#139449](https://github.com/openclaw/openclaw/issues/139449) [Bug]: package prepare replaces configured Git hook paths and changes shared worktree config `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#139471](https://github.com/openclaw/openclaw/issues/139471) [Feature]: Recover and resume structured-input waits in managed Lobster flows `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#139438](https://github.com/openclaw/openclaw/issues/139438) [Docs Bug]: Multi-agent "Communication-only" example sets tools.sessions.visibility as a per-agent profile, but that key is only valid globally `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#139477](https://github.com/openclaw/openclaw/issues/139477) [Feature]: Honor `tools.toolSearch` for bundle-MCP CLI backends — the loopback MCP config hardcodes `alwaysLoad: true` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#139475](https://github.com/openclaw/openclaw/issues/139475) MCP tools with parameter-free inputSchema return empty tool result to the agent (related to #58246) `P2` `impact:other` `clawsweeper:bulk-filed` 💬1
- [#139312](https://github.com/openclaw/openclaw/issues/139312) Agent tasks stop on temporary rate limits after completed work `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#139305](https://github.com/openclaw/openclaw/issues/139305) [Bug]: Config writes lose audit-origin labels through the runtime writer `bug` `maintainer` 💬1
- [#139468](https://github.com/openclaw/openclaw/issues/139468) [Bug]: Windows + Norton 360: task-launched gateway killed at start — PowerShell Add-Type ACL step flagged as IDP.HELU.PSE90 (2026.9.1 and 2026.9.2; 2026.7.1-2 unaffected) `bug` `regression` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` 💬1
- [#139472](https://github.com/openclaw/openclaw/issues/139472) Realtime voice: no asynchronous delegation - every agent-backed turn blocks the conversation (serial consults + autoRespondToAudio off) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#139440](https://github.com/openclaw/openclaw/issues/139440) [Bug]: HTTP streams lose repeated text from distinct assistant items `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#139453](https://github.com/openclaw/openclaw/issues/139453) [Feature]: Add attachments to Workboard card creation and editing `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#139407](https://github.com/openclaw/openclaw/issues/139407) [Bug]: Swarm completion callbacks overflow Code Mode bridge slots `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#139411](https://github.com/openclaw/openclaw/issues/139411) [Bug]: Android chat Refresh can lose its health check after overlapping history requests `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#139444](https://github.com/openclaw/openclaw/issues/139444) [feishu] Persistent collapsible panels for reasoning + tool calls in reply/streaming cards (follow-up to #75113) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#139433](https://github.com/openclaw/openclaw/issues/139433) Codex-supervised model-locked Chat silently ignores live model switch — UI shows selected model while session runs on locked model, burning tokens with no warning `P2` `clawsweeper:needs-info` `impact:session-state` `impact:auth-provider` 💬1
- [#139428](https://github.com/openclaw/openclaw/issues/139428) Test audit: reduce redundant test code and full-suite runtime `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` `impact:other` 💬1
- [#139360](https://github.com/openclaw/openclaw/issues/139360) Simplify focused Vitest launches and preserve test ownership `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#139328](https://github.com/openclaw/openclaw/issues/139328) Native plugin send failures are reported as successful broadcasts `maintainer` `P2` `clawsweeper:source-repro` `impact:message-loss` 💬1
- [#139351](https://github.com/openclaw/openclaw/issues/139351) [Bug]: Skill Workshop review outlives timeout and starves unrelated heartbeats `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬1
- [#139340](https://github.com/openclaw/openclaw/issues/139340) MCP loopback server singleton cached with no liveness check — all MCP tool calls fail permanently after listener dies `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#139383](https://github.com/openclaw/openclaw/issues/139383) [Bug]: macOS npm upgrade from 2026.9.1 to 2026.9.2 leaves Gateway stopped and UI stuck updating `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` `impact:crash-loop` 💬1
- [#139322](https://github.com/openclaw/openclaw/issues/139322) [Refactor]: centralize iOS cron snapshot pagination `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#139361](https://github.com/openclaw/openclaw/issues/139361) gateway/slack: healthState removal silently broke external health monitors; incident exposed missing ingress backpressure visibility and mid-turn kill replay `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#139347](https://github.com/openclaw/openclaw/issues/139347) ask_user from one channel silently holds a shared multi-channel session for the full 900 s timeout; other channels can neither see nor answer it and their messages queue into the stall watchdog `P1` `impact:session-state` `impact:message-loss` 💬1
- [#139268](https://github.com/openclaw/openclaw/issues/139268) Prometheus scrapes need the serving runtime identity `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` `impact:other` 💬1
- [#139128](https://github.com/openclaw/openclaw/issues/139128) Bug: prebuilt UI test harness calls removed asset-readiness helper `maintainer` 💬1
- [#139263](https://github.com/openclaw/openclaw/issues/139263) [Feature]: Native data reports for dashboards `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#139242](https://github.com/openclaw/openclaw/issues/139242) [Bug]: Force-clearing stalled startup leaves the session unable to accept messages `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` `impact:session-state` 💬1
- [#139303](https://github.com/openclaw/openclaw/issues/139303) Parallels macOS smoke intermittently loses guest exec `bug` `maintainer` 💬1
- [#139316](https://github.com/openclaw/openclaw/issues/139316) Control UI: assistant reply renders twice when confirmed via delta history catch-up `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#139330](https://github.com/openclaw/openclaw/issues/139330) [Bug]: Final-turn channel replies are never ledgered in conversation_deliveries (operation_kind='turn' has 0 rows); agent cannot see its own delivery receipt `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#139279](https://github.com/openclaw/openclaw/issues/139279) Realtime voice: no timeout or progress cue during forced agent consult - caller hears dead silence for 100+ seconds `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#139310](https://github.com/openclaw/openclaw/issues/139310) Android secondary connections can stall after rapid lifecycle changes `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#138950](https://github.com/openclaw/openclaw/issues/138950) Discord doctor: legacy TTS config migration walks __proto__ into Object.prototype `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#139296](https://github.com/openclaw/openclaw/issues/139296) [Withdrawn] memory-core dreaming first-finisher race report — observations were from v2026.7.1-2, not v2026.9.1 (duplicate of #123360) 💬1
- [#139270](https://github.com/openclaw/openclaw/issues/139270) Session Observer model picker retains stale catalogs and abandoned reads `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#139284](https://github.com/openclaw/openclaw/issues/139284) [Bug]: Track update-run terminalization and late progress recovery `clawsweeper:source-repro` `P0` `issue-rating: 🦞 diamond lobster` `maturity:stable` 💬1
- [#139223](https://github.com/openclaw/openclaw/issues/139223) [Bug]: Retained dashboard panes lose the acknowledged progress owner `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#139219](https://github.com/openclaw/openclaw/issues/139219) [Bug]: Dashboard progress card disappears after a temporary refresh failure `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#138835](https://github.com/openclaw/openclaw/issues/138835) [Bug]: completed Codex failures are reported as active in another runner `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#139239](https://github.com/openclaw/openclaw/issues/139239) [Bug]: iOS/iPadOS 2026.8.1: image attachments hang before reaching the gateway `bug` `bug:behavior` `P1` `impact:message-loss` 💬1
- [#139253](https://github.com/openclaw/openclaw/issues/139253) [Bug]: Failed cron command followed by NO_REPLY announces a fallback and records succeeded on 2026.9.1 `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#139226](https://github.com/openclaw/openclaw/issues/139226) macOS recovery hints rewrite literal backslashes in restart-log paths `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#139238](https://github.com/openclaw/openclaw/issues/139238) Feature request: user-facing notice for before_tool_call blocks (userNotice) — offload/defer blocks render as "⚠️ tool blocked" failures `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#139210](https://github.com/openclaw/openclaw/issues/139210) [Bug]: OPEN CLAW INSTALLATION ERROR `bug` `bug:behavior` `impact:auth-provider` `P0` 💬1
- [#139208](https://github.com/openclaw/openclaw/issues/139208) [Feature]: Read one-shot model prompts from bounded stdin `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:linked-pr-open` 💬1
- [#139209](https://github.com/openclaw/openclaw/issues/139209) [Bug]: Native Telegram plugin commands lose replied-message context `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#138956](https://github.com/openclaw/openclaw/issues/138956) Canvas rejects connected Macs reporting versioned platform metadata `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#139169](https://github.com/openclaw/openclaw/issues/139169) [Bug]: Control UI "Automations Enabled" toggle shows OFF while the scheduler is running (schema declares no default; ~65 other optional booleans render the same way) `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#139204](https://github.com/openclaw/openclaw/issues/139204) [Bug]: Any non-core `tools.deny` entry silently removes every account-connected Codex App from that agent's Codex turns `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#139172](https://github.com/openclaw/openclaw/issues/139172) Provider headers override (User-Agent) causes "model was not found by the provider" on UA-filtering relays [2026.9.1] `P2` `clawsweeper:needs-info` `impact:auth-provider` `issue-rating: 🦪 silver shellfish` 💬1
- [#139053](https://github.com/openclaw/openclaw/issues/139053) Bug: config and skills lose structured errors after the option terminator `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#139178](https://github.com/openclaw/openclaw/issues/139178) Manual compaction timeout leaves Gateway draining and blocks recovery (2026.9.1-beta.1) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `impact:session-state` 💬1
- [#139170](https://github.com/openclaw/openclaw/issues/139170) Inference verification drift blocks chat RPC after config/secrets changes; catch swallows root cause [2026.9.1] `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` `impact:auth-provider` 💬1
- [#139217](https://github.com/openclaw/openclaw/issues/139217) [Bug]: Codex commentary is stored as stream fallback but never reaches Discord progress draft on 2026.9.1 `P2` `impact:message-loss` `issue-rating: 🦪 silver shellfish` 💬1
- [#139215](https://github.com/openclaw/openclaw/issues/139215) Cron scheduler silently swallows scheduled ticks since 2026.9.1 — some fires never launch (no error, no run entry) `P1` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#139214](https://github.com/openclaw/openclaw/issues/139214) SQLite state DB corrupts reliably on Docker Desktop macOS overlayfs (broken WAL locking); message send --presentation silently ignored `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `impact:data-loss` 💬1
- [#139180](https://github.com/openclaw/openclaw/issues/139180) Chrome extension connects at relay level but browser control never registers the session (Windows manual pairing) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `P0` `issue-rating: 🦪 silver shellfish` 💬1
- [#139154](https://github.com/openclaw/openclaw/issues/139154) Agent hooks cannot report terminal delivery outcomes `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1

#### 🔒 Closed Issues
- [#42840](https://github.com/openclaw/openclaw/issues/42840) Feature Request: Add MathJax/LaTeX Support to Control UI
- [#111630](https://github.com/openclaw/openclaw/issues/111630) [Bug]: session_status and /status show Context: ?/1.0m for minimax-portal/MiniMax-M3 — TUI formatter "?" + provider usage payload gap
- [#139173](https://github.com/openclaw/openclaw/issues/139173) [Bug]: 2026.9.1 discards completed Codex replies after 120s terminal settlement timeout
- [#115478](https://github.com/openclaw/openclaw/issues/115478) WeChat plugin (@tencent-weixin/openclaw-weixin 2.4.6) fails to load: missing openclaw/plugin-sdk/channel-runtime export
- [#51347](https://github.com/openclaw/openclaw/issues/51347) Bug: ignores config and returns success on media failure
- [#78038](https://github.com/openclaw/openclaw/issues/78038) [Feature]: Improve zh-CN translation accuracy and completeness
- [#93272](https://github.com/openclaw/openclaw/issues/93272) Model fallback does not trigger for Codex/OpenAI auth and zero-output assistant failures
- [#80621](https://github.com/openclaw/openclaw/issues/80621) Plugin loaded but registerTool fails — "plugin must declare contracts.tools"
- [#128305](https://github.com/openclaw/openclaw/issues/128305) Slack: bounded Socket Mode reconnect and delivery-health diagnostics after event-loop starvation
- [#135291](https://github.com/openclaw/openclaw/issues/135291) [Bug]: Skill Workshop approval buttons missing in Telegram DM on 2026.8.1
- [#78861](https://github.com/openclaw/openclaw/issues/78861) [CRITICAL] Single-threaded Event Loop Bottleneck — 100s WS Response Times, 3min Agent Tasks Even With Minimal Config
- [#121351](https://github.com/openclaw/openclaw/issues/121351) [Bug]: `stripFormattedReasoningMessage` trims substantive answer body whitespace
- [#137492](https://github.com/openclaw/openclaw/issues/137492) [Bug]: Empty system-owned heartbeats wait behind busy queues, time out after 600 seconds, and enter retry storms
- [#138374](https://github.com/openclaw/openclaw/issues/138374) [Bug]: Memory Wiki "How to enable" has no visible effect in remote Control UI sessions
- [#139235](https://github.com/openclaw/openclaw/issues/139235) [Bug]: Retired ChatGPT model overrides repeatedly fail automations without doctor repair
- [#138763](https://github.com/openclaw/openclaw/issues/138763) [Bug]: Telegram typing coalescing suppresses concurrent forum-topic indicators
- [#97655](https://github.com/openclaw/openclaw/issues/97655) [Bug/RFC] Missing binding causes silent fallback to main agent — no warning, no validation
- [#138099](https://github.com/openclaw/openclaw/issues/138099) [Feature]: Allow renaming paired devices (operator alias) from the Control UI
- [#132625](https://github.com/openclaw/openclaw/issues/132625) infer model run without --thinking sends enable_thinking:false to Z.AI GLM-5.x and fails with 400 (always-thinking models)
- [#127506](https://github.com/openclaw/openclaw/issues/127506) Workspace prompt-content cache is unbounded and retains deleted workspace bytes
- [#126445](https://github.com/openclaw/openclaw/issues/126445) [Bug]: launchd restart can orphan the Tailscale claimant and crash-loop on port 443
- [#139088](https://github.com/openclaw/openclaw/issues/139088) [Bug]: heartbeat_respond accepts `scratch` and reports scratchPending, but the scratch is never written
- [#137201](https://github.com/openclaw/openclaw/issues/137201) [Feature]: adopt Vitest 5 with validated test performance
- [#138540](https://github.com/openclaw/openclaw/issues/138540) [Bug]: ask_user (mcp__openclaw__ask_user) never delivers to Telegram, silently falls back to Control UI only
- [#138812](https://github.com/openclaw/openclaw/issues/138812) buzz: message-tool replies inside a thread are parented to the triggering message, so Buzz mobile renders every bot reply as a nested sub-thread
- [#139166](https://github.com/openclaw/openclaw/issues/139166) Memory Core doctor gives no recovery guidance for symlinked host-event paths
- [#139526](https://github.com/openclaw/openclaw/issues/139526) Session creation decodes saved prompts from unrelated sessions
- [#139121](https://github.com/openclaw/openclaw/issues/139121) Bug: SDK misclassifies run cancellation and provisional errors
- [#139515](https://github.com/openclaw/openclaw/issues/139515) Long model streams rescan growing text and async replay can invent missing results
- [#139448](https://github.com/openclaw/openclaw/issues/139448) Simplify Chrome extension setup with a supported macOS install request
- [#139449](https://github.com/openclaw/openclaw/issues/139449) [Bug]: package prepare replaces configured Git hook paths and changes shared worktree config
- [#139438](https://github.com/openclaw/openclaw/issues/139438) [Docs Bug]: Multi-agent "Communication-only" example sets tools.sessions.visibility as a per-agent profile, but that key is only valid globally
- [#139475](https://github.com/openclaw/openclaw/issues/139475) MCP tools with parameter-free inputSchema return empty tool result to the agent (related to #58246)
- [#139312](https://github.com/openclaw/openclaw/issues/139312) Agent tasks stop on temporary rate limits after completed work
- [#139305](https://github.com/openclaw/openclaw/issues/139305) [Bug]: Config writes lose audit-origin labels through the runtime writer
- [#137579](https://github.com/openclaw/openclaw/issues/137579) [Docs]: the reload table documents a two-way contract; buildGatewayReloadPlan implements a three-way one
- [#139407](https://github.com/openclaw/openclaw/issues/139407) [Bug]: Swarm completion callbacks overflow Code Mode bridge slots
- [#139411](https://github.com/openclaw/openclaw/issues/139411) [Bug]: Android chat Refresh can lose its health check after overlapping history requests
- [#46630](https://github.com/openclaw/openclaw/issues/46630) [Feature]: Shortcut/Keyword Sidebar Panel
- [#139360](https://github.com/openclaw/openclaw/issues/139360) Simplify focused Vitest launches and preserve test ownership
- [#139328](https://github.com/openclaw/openclaw/issues/139328) Native plugin send failures are reported as successful broadcasts
- [#139322](https://github.com/openclaw/openclaw/issues/139322) [Refactor]: centralize iOS cron snapshot pagination
- [#139347](https://github.com/openclaw/openclaw/issues/139347) ask_user from one channel silently holds a shared multi-channel session for the full 900 s timeout; other channels can neither see nor answer it and their messages queue into the stall watchdog
- [#139268](https://github.com/openclaw/openclaw/issues/139268) Prometheus scrapes need the serving runtime identity
- [#139128](https://github.com/openclaw/openclaw/issues/139128) Bug: prebuilt UI test harness calls removed asset-readiness helper
- [#139263](https://github.com/openclaw/openclaw/issues/139263) [Feature]: Native data reports for dashboards
- [#139242](https://github.com/openclaw/openclaw/issues/139242) [Bug]: Force-clearing stalled startup leaves the session unable to accept messages
- [#127586](https://github.com/openclaw/openclaw/issues/127586) Chat Completions loses ownership boundaries across parallel tool-result images
- [#138587](https://github.com/openclaw/openclaw/issues/138587) [Feature]: Previewable conversation-position rail in Control UI
- [#138950](https://github.com/openclaw/openclaw/issues/138950) Discord doctor: legacy TTS config migration walks __proto__ into Object.prototype
- [#139296](https://github.com/openclaw/openclaw/issues/139296) [Withdrawn] memory-core dreaming first-finisher race report — observations were from v2026.7.1-2, not v2026.9.1 (duplicate of #123360)
- [#139270](https://github.com/openclaw/openclaw/issues/139270) Session Observer model picker retains stale catalogs and abandoned reads
- [#139223](https://github.com/openclaw/openclaw/issues/139223) [Bug]: Retained dashboard panes lose the acknowledged progress owner
- [#139219](https://github.com/openclaw/openclaw/issues/139219) [Bug]: Dashboard progress card disappears after a temporary refresh failure
- [#138835](https://github.com/openclaw/openclaw/issues/138835) [Bug]: completed Codex failures are reported as active in another runner
- [#137643](https://github.com/openclaw/openclaw/issues/137643) [Bug]: announceTimeoutMs (120s) now cancels the requester settle-wake turn mid-execution after #135854; partial replies leak to the channel and the wake is retried into the same cut-off
- [#139226](https://github.com/openclaw/openclaw/issues/139226) macOS recovery hints rewrite literal backslashes in restart-log paths
- [#138956](https://github.com/openclaw/openclaw/issues/138956) Canvas rejects connected Macs reporting versioned platform metadata
- [#139053](https://github.com/openclaw/openclaw/issues/139053) Bug: config and skills lose structured errors after the option terminator
- [#139154](https://github.com/openclaw/openclaw/issues/139154) Agent hooks cannot report terminal delivery outcomes

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 242,001 · **Open issues:** 40,047 · **Last push:** <1h ago

There were no new releases for Hermes Agent on September 6, 2026, but a couple of important pull requests were merged, including a fix for bot-mode that matches scoped bot selection in the reset guard and a resolution for MCP servers that were vanishing from the model. New issues reported include a bug where a cron job's next_run_at persists as UTC, causing it to fire two hours late in the Europe/Warsaw timezone, and a request for a simplified structured-output contract in `delegate_task` to facilitate easier model development. Additionally, there is an issue with the select_backend() function that returns 'cuda' on Linux with NVIDIA, yet lacks a prebuilt version, resulting in auto backend failures. This mix of fixes and requests reflects ongoing efforts to enhance functionality and address critical bugs in the Hermes Agent ecosystem.

#### ✅ Merged PRs
- [#103943](https://github.com/NousResearch/hermes-agent/pull/103943) MCP servers named like a built-in toolset no longer vanish from the model (salvage #19793)
- [#103856](https://github.com/NousResearch/hermes-agent/pull/103856) fix(bot-mode): match scoped bot selection in reset guard

#### 🐛 New Issues
- [#103904](https://github.com/NousResearch/hermes-agent/issues/103904) Cron: recurring job next_run_at persisted as UTC after a run — fires 2h late vs configured timezone (Europe/Warsaw) `type/bug` `comp/cron` `area/config` `P2` 💬4
- [#103917](https://github.com/NousResearch/hermes-agent/issues/103917) `delegate_task`: add a simplified structured-output contract so models do not have to author arbitrary inline JSON Schema `type/feature` `comp/agent` `tool/delegate` `P3` 💬3
- [#103949](https://github.com/NousResearch/hermes-agent/issues/103949) local_runtime: select_backend() returns 'cuda' on Linux+NVIDIA but no Linux CUDA prebuilt exists — auto backend fails unconditionally `type/bug` `comp/cli` `P2` 💬2
- [#103870](https://github.com/NousResearch/hermes-agent/issues/103870) [Bug]: RuntimeWarning: coroutine '_watch_stdio_children' was never awaited (mcp_tool.py:6189, fix #81995) `type/bug` `duplicate` `tool/mcp` `P3` 💬2
- [#103900](https://github.com/NousResearch/hermes-agent/issues/103900) bug(desktop): Pinned sessions are local-only and diverge from native Hermes `type/bug` `P2` `sweeper:risk-session-state` `comp/desktop` 💬2
- [#103946](https://github.com/NousResearch/hermes-agent/issues/103946) [Bug]: 32K-model startup blocked by 64K minimum despite context_length: 65536 and YaRN-served 64K `type/bug` `comp/agent` `area/config` `P2` 💬1
- [#103940](https://github.com/NousResearch/hermes-agent/issues/103940) [Feature]: Global hotkey to summon the HUD floating chat from anywhere (like ChatGPT Quick Chat) `type/feature` `P3` `comp/desktop` 💬1
- [#103936](https://github.com/NousResearch/hermes-agent/issues/103936) kanban task log wraps/truncates large tool stdout — breaks literal evidence capture `type/bug` `comp/cron` `P3` 💬1
- [#103933](https://github.com/NousResearch/hermes-agent/issues/103933) fix(cli): startup -m/--model <alias> drops the alias's base_url, misrouting to the default provider `type/bug` `comp/cli` `area/config` `P2` 💬1
- [#103579](https://github.com/NousResearch/hermes-agent/issues/103579) [Bug]: background_review fork drops external memory-provider tools, breaking tools[] cache parity `type/bug` `comp/agent` `tool/memory` `P0` 💬1
- [#103932](https://github.com/NousResearch/hermes-agent/issues/103932) [Feature]: Remote computer_use — drive cua-driver on a different machine over the network `type/feature` `comp/tools` `P3` 💬1
- [#103925](https://github.com/NousResearch/hermes-agent/issues/103925) [kanban] Native time-gate for window-gated cards: dispatch_after / dispatch_window `type/feature` `comp/cron` `P3` 💬1
- [#103919](https://github.com/NousResearch/hermes-agent/issues/103919) [Feature]: 0.21.0's strengthened runtime guidance overrides user-authored SOUL.md constraints — persona continuity breaks for customized agents `type/feature` `comp/agent` `P3` 💬1
- [#103956](https://github.com/NousResearch/hermes-agent/issues/103956) [Bug]: Telegram LaunchAgent maintenance: Astra repeatedly refuses reload while Sol executes and verifies it `type/bug` `comp/agent` `tool/terminal` `platform/telegram`
- [#103941](https://github.com/NousResearch/hermes-agent/issues/103941) Proposal: expose execution-scoped original-message context to native plugins `type/feature` `comp/gateway` `comp/plugins` `P3`
- [#103944](https://github.com/NousResearch/hermes-agent/issues/103944) feat(providers): per-model reasoning_format for custom_providers (aggregator gateways host mixed backends on one URL) `type/feature` `comp/agent` `area/config` `P3`
- [#103947](https://github.com/NousResearch/hermes-agent/issues/103947) Extended keys: the modifier dimension is unbuilt — 52,736 sequences, 3.2% mapped, one report per key `type/bug` `comp/cli` `P2`
- [#103931](https://github.com/NousResearch/hermes-agent/issues/103931) Remote computer_use: drive cua-driver on a different machine over the network `type/feature` `comp/tools` `P3`
- [#103920](https://github.com/NousResearch/hermes-agent/issues/103920) [Feature] Memory write-path guardrails: per-target write policy, write-time near-duplicate detection, mis-target warnings, entry timestamps `type/feature` `comp/agent` `tool/memory` `P3`
- [#103903](https://github.com/NousResearch/hermes-agent/issues/103903) bug(desktop): Session rename can display locally without updating the Personal profile record `type/bug` `P2` `needs-repro` `sweeper:risk-session-state`
- [#103893](https://github.com/NousResearch/hermes-agent/issues/103893) Group-chat hold directive misclassifies German filler words `type/bug` `P3` `sweeper:risk-session-state` `comp/desktop`
- [#103885](https://github.com/NousResearch/hermes-agent/issues/103885) [Bug]: TUI drops every keystroke when kitty CSI-u carries sub-parameters `type/bug` `comp/tui` `P2`
- [#103887](https://github.com/NousResearch/hermes-agent/issues/103887) bot mode: a2a dm transports carry no author, so memory providers attribute bot speech to the recipient's user `type/bug` `comp/agent` `comp/gateway` `tool/memory`
- [#103875](https://github.com/NousResearch/hermes-agent/issues/103875) [Bug]: numpad does nothing in the curses menus under the kitty keyboard protocol `type/bug` `comp/cli` `P3`

#### 🔒 Closed Issues
- [#30563](https://github.com/NousResearch/hermes-agent/issues/30563) MCP server name can silently collide with a native toolset; native wins with no warning
- [#103931](https://github.com/NousResearch/hermes-agent/issues/103931) Remote computer_use: drive cua-driver on a different machine over the network

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 91,038 · **Open issues:** 7,608 · **Last push:** 7h ago

Today saw no new releases for vLLM, but several key features and bug fixes were merged into the codebase. Notably, the bugfix PR #55448 improved the bound renderer warmup process to adhere to the prefill token budget, and PR #55059 added Triton iHC pre/post fallback support. Other significant updates included enhancements to the Core functionality with PR #50514, enabling eagle3 spec decoding with pipeline parallel, and performance improvements through PR #55415, which avoids duplicate text embedding in Qwen2.5-Omni. Among new issues, a critical bug was reported (#55427) concerning deadlocks in the /v1/embeddings endpoint when handling truncated inputs, highlighting ongoing challenges with input processing.

#### ✅ Merged PRs
- [#55448](https://github.com/vllm-project/vllm/pull/55448) [Bugfix][Multimodal] Bound renderer warmup to the prefill token budget
- [#55059](https://github.com/vllm-project/vllm/pull/55059) [Kernel][HY V4] Add Triton iHC pre/post fallback
- [#53835](https://github.com/vllm-project/vllm/pull/53835) [Bugfix][Kernel] Build fused GDN MTP decode for SM110
- [#55375](https://github.com/vllm-project/vllm/pull/55375) [Bugfix][Qwen4Exp] fix state index strides in fused PLE conv
- [#50514](https://github.com/vllm-project/vllm/pull/50514) [Core][MRV2] Support eagle3 spec decode with pipeline parallel
- [#54110](https://github.com/vllm-project/vllm/pull/54110) [Kernel] Fall back from persistent top-k on low-shared-memory GPUs
- [#55299](https://github.com/vllm-project/vllm/pull/55299) [Bugfix][DSv4] Seed the -1 sentinel in the prefill sparse index workspace
- [#50254](https://github.com/vllm-project/vllm/pull/50254) [Bugfix] complete VLLMValidationError migration in chat_utils.py
- [#54944](https://github.com/vllm-project/vllm/pull/54944) [Docs][Models] Use the official FunASR Nano vLLM checkpoint
- [#55415](https://github.com/vllm-project/vllm/pull/55415) [Perf][Multimodal] Avoid duplicate text embedding in Qwen2.5-Omni
- [#55119](https://github.com/vllm-project/vllm/pull/55119) [Feat] Add EPLB support for GLM-5.3-Flash
- [#51444](https://github.com/vllm-project/vllm/pull/51444) [Security] Validate cache salts before they reach LMCache
- [#54819](https://github.com/vllm-project/vllm/pull/54819) [Attention] Sync FA with upstream
- [#55409](https://github.com/vllm-project/vllm/pull/55409) [CI][ROCm] Disable Transformers nightly groups
- [#55410](https://github.com/vllm-project/vllm/pull/55410) [CI][ROCm] Restore Wikitext coverage for Qwen OCP-MX
- [#55308](https://github.com/vllm-project/vllm/pull/55308) [CI][ROCm] Raise AMD job and server readiness timeouts
- [#55242](https://github.com/vllm-project/vllm/pull/55242) [Perf] Kimi K3 nvfp4 Align in_proj weights by 128 to avoid elementwise copy
- [#54770](https://github.com/vllm-project/vllm/pull/54770) [Bugfix][Quantization] Register Quark per-block FP8 scales as weight_scale
- [#55404](https://github.com/vllm-project/vllm/pull/55404) [Perf][GDN] Build cudagraph-capture metadata without a device sync

#### 🐛 New Issues
- [#55427](https://github.com/vllm-project/vllm/issues/55427) [Bug]: /v1/embeddings deadlocks when a truncated input follows a short one in the same request `rocm` 💬4
- [#55431](https://github.com/vllm-project/vllm/issues/55431) [Bug]: VLLM_KV_CACHE_LAYOUT=BLHNC asserts in MLAAttention.bind_kv_cache for DeepSeek-V3.2 sparse MLA `deepseek` 💬3
- [#55416](https://github.com/vllm-project/vllm/issues/55416) [Bug]: --numa-bind is a silent no-op on ROCm images (numactl not installed) `rocm` 💬3
- [#55434](https://github.com/vllm-project/vllm/issues/55434) [Performance]: GLM-5.3 P/D on GB200 — NIXL issues up to ~112k KV descriptors per rank-transfer, making MNNVL/cuda_ipc slower than RDMA on this workload `kv-connector` `glm` 💬2
- [#55439](https://github.com/vllm-project/vllm/issues/55439) [Doc]: multi_modal_uuids / per-item uuid caching needs a multi-tenant security note 💬2
- [#55425](https://github.com/vllm-project/vllm/issues/55425) [Bug]: [XPU] Intel Arc Pro B70: Qwen3.8-27B MTP2 at 160K causes xe CCS timeout / BCS fault; MTP1 stable `bug` `intel-gpu` `quantization` 💬2
- [#55512](https://github.com/vllm-project/vllm/issues/55512) [New Model]: K2-Horizon-MoVA (MoVA attention) — single-GPU Int4 via out-of-tree plugin; native support? 💬1
- [#55502](https://github.com/vllm-project/vllm/issues/55502) [Bug]: /rerank keeps processing queued documents after the client disconnects, despite @with_cancellation 💬1
- [#55496](https://github.com/vllm-project/vllm/issues/55496) [Bug]: ModelOpt MIXED_PRECISION cannot load FP8_BLOCK_SCALES MTP experts (nvidia/Qwen3.8-Flash-Next-NVFP4 + MTP) `nvidia` `quantization` 💬1
- [#55428](https://github.com/vllm-project/vllm/issues/55428) [Bug]: KV cache offload crash-loops under NVIDIA Confidential Computing (TDX guest, H200 CC-On): cudaHostRegister is not allowed in CC mode (documented), and every built-in offload path depends on it `nvidia` 💬1
- [#55452](https://github.com/vllm-project/vllm/issues/55452) [Bug][ROCm] Startup aborts in CUDA graph capture with --max-num-seqs > 64: AITER split-K workspace is warmed on a different stream than capture uses `rocm` 💬1
- [#55441](https://github.com/vllm-project/vllm/issues/55441) structured-output benchmark: correctness check never validates the schema and never reads expected (correct_rate = JSON-parseability) `structured-output` 💬1
- [#55515](https://github.com/vllm-project/vllm/issues/55515) [Bug]: Qwen4Exp N-gram PLE embedding requires pipeline_parallel_size=1 because non-first pipeline ranks do not receive the raw input_ids it needs. Please run with PP=1 `bug`
- [#55510](https://github.com/vllm-project/vllm/issues/55510) [Bug]: EngineCore and TP workers survive a SIGKILLed API server, keep the GPUs, and reparent to the launching process
- [#55509](https://github.com/vllm-project/vllm/issues/55509) [Bug]: --attention-backend FLASHINFER fails the startup KV-cache check at a max-model-len that FLASH_ATTN serves; the message never names the backend
- [#55503](https://github.com/vllm-project/vllm/issues/55503) [Bug]: OffloadingConnector multi-tier (CPU+fs secondary tier) + MTP speculative decoding crashes EngineCore in _build_store_jobs (assert len(offload_keys) == len(offload_block_ids)) `speculative-decoding` `quantization`
- [#55501](https://github.com/vllm-project/vllm/issues/55501) [Feature]: Warn or auto-select the shipped score template when serving an original Qwen3-Reranker without --chat-template
- [#55495](https://github.com/vllm-project/vllm/issues/55495) [Bug]: qwen3_xml tool parser emits a truncated `arguments` string with a leaked `</parameter` tag; the Responses API then rejects every later request of the conversation with `400 Expecting value` `tool-calling`
- [#55487](https://github.com/vllm-project/vllm/issues/55487) [RFC] Publish typed extra_keys in BlockStored KV events
- [#55486](https://github.com/vllm-project/vllm/issues/55486) [Bug]: vLLM 0.28.0 — DeepSeek V4 on B200 (TP8+EP, fp8 KV, FULL_AND_PIECEWISE) generates only BOS tokens with V2 model runner default `deepseek`
- [#55463](https://github.com/vllm-project/vllm/issues/55463) [Feature]: Zero-Copy In-Place KV-Cache Compactor via In-Situ Cycle Permutations (1.65x Speedup, 0 Bytes Aux VRAM) `feature request`
- [#55462](https://github.com/vllm-project/vllm/issues/55462) [Performance]: AWQ CUDA GEMM kernel is heavily L1/Memory bound (Profiled on RTX 3070 Ti) `performance` `quantization`
- [#55421](https://github.com/vllm-project/vllm/issues/55421) [RFC] RL Test Consolidation: File Ownership, Coverage Docstrings, and CI Integration `quantization`
- [#55420](https://github.com/vllm-project/vllm/issues/55420) [Feature]: Option to suppress EOS inside the reasoning block and force `reasoning_end` first (Qwen3.8 samples `<|im_end|>` mid-`<think>`, returning empty `content` with `finish_reason: stop`) `tool-calling`

#### 🔒 Closed Issues
- [#37941](https://github.com/vllm-project/vllm/issues/37941) [Usage]: Using RIXL Connector on AMD GPU
- [#41447](https://github.com/vllm-project/vllm/issues/41447) [Feature]: MoE Active Expert Management --moe-gpu-prefetch <num>
- [#41094](https://github.com/vllm-project/vllm/issues/41094) [Bug]: [GLM-5.1] [MTP] DeepGEMM context_lens.is_contiguous assertion in paged MQA metadata
- [#38602](https://github.com/vllm-project/vllm/issues/38602) [Bug] API hangs/deadlocks when requesting logprobs on multi-node Ray deployment (PP=2, TP=8)
- [#41153](https://github.com/vllm-project/vllm/issues/41153) [Bug]:[Qwen3.5] V1 KV cache page size unification fails for Qwen3.5/Qwen3.6 hybrid GPTQ Marlin model
- [#39613](https://github.com/vllm-project/vllm/issues/39613) [Doc]: Docs audit: CLI, plugins, features, env vars, and auth mismatches
- [#40920](https://github.com/vllm-project/vllm/issues/40920) [Bug]: RuntimeError: flashinfer_fp8_blockscale_gemm fails on H100 NVL MIG 3g.47gb with Qwen3.6-35B-A3B-FP8
- [#41604](https://github.com/vllm-project/vllm/issues/41604) [Bug]: DeepseekV4Attention crashes with KeyError: scale_fmt on non-canonical DSv4 quantizations
- [#53462](https://github.com/vllm-project/vllm/issues/53462) [Bug]: GDN MTP fused decode kernel (fused_gdn_decode_post_conv_mtp) crashes with "no kernel image is available" on SM110a (Jetson Thor) — capability guard checks symbol presence, not cubin arch
- [#40901](https://github.com/vllm-project/vllm/issues/40901) [Installation]: ERROR: Failed building wheel for vllm
- [#41511](https://github.com/vllm-project/vllm/issues/41511) [Bug]: compressed-tensors W4A16 MoE: weight_scale not sharded along K under tensor parallelism, kernel computes wrong group_size
- [#41525](https://github.com/vllm-project/vllm/issues/41525) [Bug]: the A800 architecture cannot start the glm5.1 model.
- [#41619](https://github.com/vllm-project/vllm/issues/41619) [Bug]: Qwen3.6 hybrid Mamba models fail KV cache allocation on RTX PRO 6000 Blackwell + WSL2 — 16 GiB invisible CUDA overhead
- [#41660](https://github.com/vllm-project/vllm/issues/41660) [Bug]: CPUWorker shutdown reports "RuntimeError: Cannot access accelerator device when none is available."
- [#41553](https://github.com/vllm-project/vllm/issues/41553) [Feature]: Hashicorp Vault Integration for API Key
- [#41615](https://github.com/vllm-project/vllm/issues/41615) [Feature]: Polymorphic buffer management for V1 worker (CPU/GPU staged tensors, lower hot-path overhead)
- [#41650](https://github.com/vllm-project/vllm/issues/41650) 📝 Integration Proposal: CAJAL — Scientific Paper Model Serving
- [#49418](https://github.com/vllm-project/vllm/issues/49418) [Bug]: DeepSeek-V4-Flash-DSpark fails to launch with DSpark speculative decoding on SM120 Pro6000D (works fine when disabled)
- [#55332](https://github.com/vllm-project/vllm/issues/55332) [Feature]: Validate hash-only decode requests in token-in/token-out protocol

### SGLang (`sgl-project/sglang`)

**Stars:** 35,509 · **Open issues:** 5,160 · **Last push:** <1h ago

On September 6, 2026, SGLang released version v0.5.19, highlighting contributions from 214 contributors and introducing the new autoregressive model Qwen3.8 (2.4T-A95B). Significant merged features include support for NoPE layers in the tokenspeed_mla FP8 prefill hook and the addition of support for the Nanbeige4.2 model. Notable fixes addressed issues in the performance of EPD receiver validation and batching, as well as improvements in unified memory behavior on DGX Spark devices. Among the new issues, a critical bug was reported regarding HiCache host-memory sizing, which led to co-located ranks being charged twice and causing allocation failures.

#### 🚀 New Releases
- [v0.5.19](https://github.com/sgl-project/sglang/releases/tag/v0.5.19) v0.5.19

#### ✅ Merged PRs
- [#38163](https://github.com/sgl-project/sglang/pull/38163) Revert "[AMD][DSV4] Fix unified-KV pool sizing and SWA ring accounting"
- [#30315](https://github.com/sgl-project/sglang/pull/30315) [AMD][DSV4] Fix unified-KV pool sizing and SWA ring accounting
- [#38152](https://github.com/sgl-project/sglang/pull/38152) Support NoPE layers in the tokenspeed_mla FP8 prefill hook
- [#37696](https://github.com/sgl-project/sglang/pull/37696) [CI] Pin the Rust TreeCore build to the resolved libtorch instead of interpreter discovery
- [#32151](https://github.com/sgl-project/sglang/pull/32151) [Model] Add support for Nanbeige4.2
- [#38121](https://github.com/sgl-project/sglang/pull/38121) [Qwen4-Exp] Load nvidia/Qwen3.8-Flash-Next-NVFP4 (ModelOpt MIXED_PRECISION) on qwen4-main-squashed
- [#38082](https://github.com/sgl-project/sglang/pull/38082) [Kernel] Add KDA FP8 skinny GEMM for SM120
- [#38132](https://github.com/sgl-project/sglang/pull/38132) [CI][NPU] Fix pr-test-npu failing at Install dependencies with set: Illegal option -o pipefail
- [#38123](https://github.com/sgl-project/sglang/pull/38123) Fix PLE file prefetch offsets for TP shards
- [#37622](https://github.com/sgl-project/sglang/pull/37622) perf(lfm2): fuse gating and short convolution on SM90
- [#32405](https://github.com/sgl-project/sglang/pull/32405) [MoE Refactor] Migrate SM100 trtllm-gen mxfp4 MoE onto MoeRunner
- [#38110](https://github.com/sgl-project/sglang/pull/38110) [Diffusion] Enable breakable CUDA graph for JoyEcho
- [#36945](https://github.com/sgl-project/sglang/pull/36945) fix(vlm): harden EPD receiver validation and liveness
- [#37971](https://github.com/sgl-project/sglang/pull/37971) fix(glm4v): disambiguate mixed image video offsets
- [#37990](https://github.com/sgl-project/sglang/pull/37990) test(npu): remove obsolete npu pr nightly cases, move accuracy cases to full
- [#36949](https://github.com/sgl-project/sglang/pull/36949) fix(vlm): make EPD cache publication transactional
- [#37068](https://github.com/sgl-project/sglang/pull/37068) [Qwen4-Exp] File-backed PLE table backend for unified-memory devices (GB10 / DGX Spark)
- [#35489](https://github.com/sgl-project/sglang/pull/35489) [CI] Remove metrics artifact mechanism from nightly NPU workflows
- [#38044](https://github.com/sgl-project/sglang/pull/38044) [diffusion] fuse LingBot MoE group-limited top-k index selection
- [#38020](https://github.com/sgl-project/sglang/pull/38020) [Diffusion] Port the Wan VAE decoder fast paths to the Qwen-Image VAE
- [#38085](https://github.com/sgl-project/sglang/pull/38085) fix(moe): cast filtered-activation expert_ids to int32 for torch.compile
- [#38039](https://github.com/sgl-project/sglang/pull/38039) fix(mamba): unify causal_conv1d col* dtype to x (MiniCPM-V-4.6 GDN prefill bf16/fp16 mismatch)
- [#34424](https://github.com/sgl-project/sglang/pull/34424) [AMD] Fix ROCm VAE Conv2D fast path breaking spatial-parallel decode
- [#37795](https://github.com/sgl-project/sglang/pull/37795) [Refactor] Let eviction policies take construction parameters
- [#38012](https://github.com/sgl-project/sglang/pull/38012) [diffusion] fix host-resident vocab tables loaded on GPU
- [#37959](https://github.com/sgl-project/sglang/pull/37959) [diffusion] Add request-scoped Skip Softmax attention
- [#37378](https://github.com/sgl-project/sglang/pull/37378) fix(modelopt_fp4): skip NVFP4 swiglu-fusion interleave for shared experts with swiglu_limit
- [#37610](https://github.com/sgl-project/sglang/pull/37610) Fail fast on undersized swa pool
- [#37618](https://github.com/sgl-project/sglang/pull/37618) [CI] Add /rerun-test --changed to rerun every test file a PR modifies
- [#38033](https://github.com/sgl-project/sglang/pull/38033) [Model] Add K2 Horizon FP8 checkpoint support
- [#38103](https://github.com/sgl-project/sglang/pull/38103) [mem_cache] Clean up unified allocator leftovers
- [#34565](https://github.com/sgl-project/sglang/pull/34565) [Unified Tree] Support Branching-Point Caching for the SWA Component
- [#37510](https://github.com/sgl-project/sglang/pull/37510) Fix Muse Glimmer ModelOpt mixed weight mapping
- [#37843](https://github.com/sgl-project/sglang/pull/37843) [Router] Add load-aware prefill admission and bounded policy proposals
- [#38093](https://github.com/sgl-project/sglang/pull/38093) [Test] Prune redundant unified-memory allocator and pool tests
- [#33930](https://github.com/sgl-project/sglang/pull/33930) Clean logging under --weight-loader-prefetch-checkpoints
- [#38072](https://github.com/sgl-project/sglang/pull/38072) [mem_cache] Move the unified-memory allocators into `allocator/` and split the composites out
- [#38042](https://github.com/sgl-project/sglang/pull/38042) [diffusion] add Helios per-token gated-residual fusion (quality-gated)
- [#38079](https://github.com/sgl-project/sglang/pull/38079) [GLM-5.3] Fix DFlash graph counts and startup DeepGEMM memory budget
- [#37578](https://github.com/sgl-project/sglang/pull/37578) [Unified Cache][6/N]: Add UMBP external linker
- [#38006](https://github.com/sgl-project/sglang/pull/38006) [FP8] SM120: route FP8 linear to per-tensor (cudnn/nvjet) instead of channelwise cutlass
- [#36805](https://github.com/sgl-project/sglang/pull/36805) Support Hy4-preview
- [#38001](https://github.com/sgl-project/sglang/pull/38001) [diffusion] auto-keep video DiT resident on high-memory GPUs
- [#35770](https://github.com/sgl-project/sglang/pull/35770) [AMD] Optimize Kimi-K3 Triton MLA prefill on gfx950
- [#37878](https://github.com/sgl-project/sglang/pull/37878) [Cookbook] Kimi-K3: add measured B300 1x8 Unified 8k/1k speed numbers

#### 🐛 New Issues
- [#38156](https://github.com/sgl-project/sglang/issues/38156) [Bug] HiCache host-memory sizing guard charges co-located ranks twice and rejects pools that fit (host_memory_budget_bytes, #35540)
- [#38143](https://github.com/sgl-project/sglang/issues/38143) [Bug] MiniMax-M3 W4A16 (compressed-tensors) on 2x DGX Spark (sm_121, TP=2): serves but every token is id 0 — all-NUL output on the Triton MiniMaxSparse path; same weights correct on vLLM
- [#38129](https://github.com/sgl-project/sglang/issues/38129) [Bug] NGRAM cached requests miss newly inserted longer contexts
- [#38118](https://github.com/sgl-project/sglang/issues/38118) [Bug] Decode running batch pinned at `max_running_requests - 1` under Chunked Prefill
- [#38104](https://github.com/sgl-project/sglang/issues/38104) [Bug] `--default-chat-template-kwargs` with `reasoning_effort` silently overrides the per-request `reasoning_effort`
- [#38099](https://github.com/sgl-project/sglang/issues/38099) [Bug] NIXL staging reuses the send buffer too early and repeats completed sends

#### 🔒 Closed Issues
- [#29358](https://github.com/sgl-project/sglang/issues/29358) [Bug] glm-5.2-w4afp8 --chunked-prefill-size 16384/32768 it not effect and gemm warmup slower
- [#25563](https://github.com/sgl-project/sglang/issues/25563) [Bug] GLM-5-NVFP4 + EAGLE on B300 (sm_103): trtllm_batched_gemm_runner.cu:276 dispatches sm100f kernel — crashes at bs=128 draft graph capture (v0.5.12-cu130; v0.5.11 works)
- [#24029](https://github.com/sgl-project/sglang/issues/24029) Calling qwen3-vl for image description, the output does not match the image at all
- [#30168](https://github.com/sgl-project/sglang/issues/30168) [Bug] Qwen3.6/GDN LoRA: `get_hidden_dim` not implemented for `in_proj_qkv`/`in_proj_z` — crashes server at startup
- [#29687](https://github.com/sgl-project/sglang/issues/29687) [Bug][ROCm] Multimodal CUDA-IPC non-pooled fallback crashes (hipErrorInvalidDevicePointer) on MmItemMemoryPool overflow — encoder-DP nightly (follow-up to #29227)
- [#29835](https://github.com/sgl-project/sglang/issues/29835) [Bug] Mistral-medium-3.5 does not start since 0.5.13 release
- [#29317](https://github.com/sgl-project/sglang/issues/29317) [GB10 / ARM64] sgl_kernel missing SM121 aarch64 wheels (DGX Spark)
- [#22521](https://github.com/sgl-project/sglang/issues/22521) [NPU] [Roadmap] NPU MoE 2026 Q2 Roadmap
- [#30354](https://github.com/sgl-project/sglang/issues/30354) [Bug] Step-3.5-Flash multi-layer EAGLE crashes in eager mode with KV-cache batch size mismatch (expected 4, got 7) on v0.5.14
- [#34260](https://github.com/sgl-project/sglang/issues/34260) [Bug] Kimi-K3 - sglang crash
- [#30428](https://github.com/sgl-project/sglang/issues/30428) [Bug] Resource leak of POSIX shared memory and CUDA host registrations in HostSharedMemoryManager
- [#30419](https://github.com/sgl-project/sglang/issues/30419) [RFC] KVTC KV-cache compression method for SGLang
- [#37968](https://github.com/sgl-project/sglang/issues/37968) [Bug] GLM-5.3-flash mixed image-video requests assign video frame offsets to image items

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 127,168 · **Open issues:** 2,427 · **Last push:** <1h ago

On September 6, 2026, the Llama.cpp project released several new versions: b10819 fixed a memory leak in the Metal backend, b10818 addressed a CI break while restoring Kronecker product FWHT support in the SYCL backend, and b10817 introduced environment variables to trace device allocations, aiding memory-related debugging. Merged pull requests included #28435, which limited blank issues to maintainers, and #28399, enhancing memory management in the Metal backend. Notably, the new issue #28453 reported fatal errors during a graph-enabled prefill on Windows V100 NVLink, highlighting potential instability in specific setups.

#### 🚀 New Releases
- [b10819](https://github.com/ggml-org/llama.cpp/releases/tag/b10819) b10819
- [b10818](https://github.com/ggml-org/llama.cpp/releases/tag/b10818) b10818
- [b10817](https://github.com/ggml-org/llama.cpp/releases/tag/b10817) b10817

#### ✅ Merged PRs
- [#28435](https://github.com/ggml-org/llama.cpp/pull/28435) Github: limit blank issues to maintainers
- [#28254](https://github.com/ggml-org/llama.cpp/pull/28254) sycl : fix test-backend-ops CI break && restore Kronecker product FWHT support (#28016)
- [#28399](https://github.com/ggml-org/llama.cpp/pull/28399) metal : fix memory leak in early return
- [#27631](https://github.com/ggml-org/llama.cpp/pull/27631) sycl: attribute device allocations by site (GGML_SYCL_MEMTRACE)

#### 🐛 New Issues
- [#28453](https://github.com/ggml-org/llama.cpp/issues/28453) Eval bug: Windows V100 NVLink fatal errors during graph-enabled prefill with custom tensor P2P all-reduce 💬2
- [#28448](https://github.com/ggml-org/llama.cpp/issues/28448) ggml_gallocr silently reuses stale allocation plan on identity change at fixed position (sparse MoE corruption) 💬2
- [#28455](https://github.com/ggml-org/llama.cpp/issues/28455) Misc. bug: quantized KV cache (q5_x, q4_x) with -fa on silently fallback CPU attn `bug-unconfirmed` 💬1
- [#28454](https://github.com/ggml-org/llama.cpp/issues/28454) CUDA: sparse-fa (DSV4/GLM) has no quantized-KV path — q8_0 KV cache causes ~2.8x decode slowdown 💬1
- [#28444](https://github.com/ggml-org/llama.cpp/issues/28444) Misc. bug: Llama.cpp localhost shows the ui even when llama.cpp isnt running. `bug-unconfirmed`
- [#28436](https://github.com/ggml-org/llama.cpp/issues/28436) server/HIP: small per-inference-call device memory growth, not observed on CUDA, across differing model architectures 💬1
- [#28441](https://github.com/ggml-org/llama.cpp/issues/28441) Eval bug: intermittent silent Qwen2.5-Omni audio corruption on Metal under system load (b10809) `bug-unconfirmed` 💬1
- [#28438](https://github.com/ggml-org/llama.cpp/issues/28438) Misc. bug: Data corruption for Q8_0 quantization for larger models under numpy 1.* `bug-unconfirmed` 💬1
- [#28429](https://github.com/ggml-org/llama.cpp/issues/28429) peg-native: GBNF rule-name sanitization collides on non-ASCII (e.g. Chinese) tool parameter names - parameter silently dropped from the grammar, constrained sampling forces wrong parameter names 💬1
- [#28425](https://github.com/ggml-org/llama.cpp/issues/28425) server: recurrent/hybrid seq_rm partial-rollback (n_rs_seq) unreachable outside speculative decoding — crash or unbounded memory growth 💬1
- [#28443](https://github.com/ggml-org/llama.cpp/issues/28443) Eval bug: Scheduling multiple requests for multiple different models simultaneously -> one model idling, other never gets loaded `bug-unconfirmed`
- [#28433](https://github.com/ggml-org/llama.cpp/issues/28433) Eval bug: draft-mtp draft context is sized from llama_n_ctx() (total) rather than llama_n_ctx_seq(), killing the server at decode entry on large --ctx-size

#### 🔒 Closed Issues
- [#23774](https://github.com/ggml-org/llama.cpp/issues/23774) Misc. bug: Huge performance degradation with MTP on Vulkan
- [#26220](https://github.com/ggml-org/llama.cpp/issues/26220) Bug: Native MMA FA kernel regresses prompt processing up to 2x at depth on RDNA4 (gfx1201) after rocWMMA removal
- [#18864](https://github.com/ggml-org/llama.cpp/issues/18864) Feature Request: generalize MMQ CUDA kernel for floating-point data
- [#27750](https://github.com/ggml-org/llama.cpp/issues/27750) Eval bug: 2-GPU CUDA tensor split is unstable with Qwen3.8-27B on Windows, including with MTP disabled
- [#23984](https://github.com/ggml-org/llama.cpp/issues/23984) Misc. bug: Unable to use the OpenVINO NPU backend
- [#25967](https://github.com/ggml-org/llama.cpp/issues/25967) Duplicate rule definitions in generated GBNF grammar with large tools list (harmony/gpt-oss) → "failed to parse grammar"
- [#26781](https://github.com/ggml-org/llama.cpp/issues/26781) chat: enable_thinking forced true in jinja/caps.cpp capability probe leaks into non-DeepSeek templates (regression from #26398)
- [#28453](https://github.com/ggml-org/llama.cpp/issues/28453) Eval bug: Windows V100 NVLink fatal errors during graph-enabled prefill with custom tensor P2P all-reduce
- [#28403](https://github.com/ggml-org/llama.cpp/issues/28403) Eval bug: CUDA SOFT_MAX "invalid argument" on qwen4_exp / Qwen3.8-Flash-Next (Blackwell, compute_120a)
- [#28404](https://github.com/ggml-org/llama.cpp/issues/28404) Eval bug: two co-resident llama-server processes (one per GPU) — second replica deterministically dies at ggml-cuda.cu:107 after CUDA graph reuse; GGML_CUDA_DISABLE_GRAPHS=1 fixes it (Windows, 2x RTX 5060 Ti, sm_120)
- [#25976](https://github.com/ggml-org/llama.cpp/issues/25976) Arm CPU backend: quantized decode is compute-bound at ~55-60% of memory bandwidth (Neoverse-N2, SVE2+i8mm); perf profile included
- [#25582](https://github.com/ggml-org/llama.cpp/issues/25582) Eval bug: deepseek4 (DeepSeek-V4-Flash): garbled/degraded output when MoE expert layers run on CUDA — CPU-only experts (--n-cpu-moe) produce correct output
- [#25906](https://github.com/ggml-org/llama.cpp/issues/25906) Eval bug: Vulkan / Adreno 702 / Turnip
- [#28377](https://github.com/ggml-org/llama.cpp/issues/28377) Eval bug: CUDA `cublasGemmEx` "an internal operation failed" during prefill of specific prompts (qwen4exp / Qwen3.8-Flash-Next, GB10 sm_121) — data-dependent, avoided by `-ub 256`
- [#28436](https://github.com/ggml-org/llama.cpp/issues/28436) server/HIP: small per-inference-call device memory growth, not observed on CUDA, across differing model architectures
- [#25958](https://github.com/ggml-org/llama.cpp/issues/25958) Misc. bug: Bug 13: RPC create_node Linear Dependency Chain Stack Overflow
- [#25959](https://github.com/ggml-org/llama.cpp/issues/25959) Misc. bug: Bug 14: Server chat_parser Cyclic PEG Sequence Stack Overflow
- [#25960](https://github.com/ggml-org/llama.cpp/issues/25960) Misc. bug: Bug 17: Server %llguidance Grammar Disabled-Build GGML_ABORT DoS
- [#25977](https://github.com/ggml-org/llama.cpp/issues/25977) Arm CPU backend: prefill GEMM flat at ~18 t/s pp512 regardless of thread count or batch size (Neoverse-N2, i8mm+bf16 present)

### Ollama (`ollama/ollama`)

**Stars:** 180,254 · **Open issues:** 3,906 · **Last push:** 23h ago

Ollama released version v0.34.0-rc1, enabling direct use of Ollama models in ChatGPT Desktop on macOS, enhancing structured output performance on Apple Silicon, and improving compatibility with OpenAI client tools. Notable merged pull requests include hardening the Codex desktop proxy handling and ensuring image preservation through response compaction. Among the new issues, the most significant is #18257, which highlights that the Codex CLI catalog ignores the context loaded in Ollama, raising concerns about user experience and efficiency.

#### 🚀 New Releases
- [v0.34.0-rc1](https://github.com/ollama/ollama/releases/tag/v0.34.0-rc1) v0.34.0

#### ✅ Merged PRs
- [#18244](https://github.com/ollama/ollama/pull/18244) app: harden Codex desktop proxy handling
- [#18245](https://github.com/ollama/ollama/pull/18245) openai: preserve images through response compaction
- [#18246](https://github.com/ollama/ollama/pull/18246) app: route Codex auto review through selected model

#### 🐛 New Issues
- [#18257](https://github.com/ollama/ollama/issues/18257) launch: Codex CLI catalog ignores Ollama loaded context `launch` `codex` 💬1
- [#18256](https://github.com/ollama/ollama/issues/18256) launch: Qwen Code advertises a context larger than Ollama `launch` 💬1
- [#18262](https://github.com/ollama/ollama/issues/18262) mlxrunner: Qwen YaRN context extension is ignored above 262K 💬1
- [#18267](https://github.com/ollama/ollama/issues/18267) MLX runner: prefix-cache restore truncated to a multiple of 8192, costing a fixed 17-27 s re-prefill after every cold prompt
- [#18264](https://github.com/ollama/ollama/issues/18264) llama-server prompt cache grows to 8 GiB of host RAM per runner, outside Ollama's memory accounting and with no way to bound it
- [#18252](https://github.com/ollama/ollama/issues/18252) qwen2.5-coder:3b-instruct q2_K / q3_K_S / q3_K_M / q3_K_L library artifacts are functionally broken (0% on code tasks; sibling quants unaffected)
- [#18251](https://github.com/ollama/ollama/issues/18251) Update README with Agent Friendly Score badge

#### 🔒 Closed Issues
- [#17842](https://github.com/ollama/ollama/issues/17842) Support legacy MacOS versions
- [#18091](https://github.com/ollama/ollama/issues/18091) Does Ollama Qwen3.8-27B uses reasoning "xhigh"?
- [#17790](https://github.com/ollama/ollama/issues/17790) qwen3.8:27b: POST /v1/chat/completions never responds (works fine via /api/chat and ollama run)
- [#18075](https://github.com/ollama/ollama/issues/18075) Pls support qwen3.8 flash next for windows pc
- [#17636](https://github.com/ollama/ollama/issues/17636) ollama pull hf.co/... doesn't apply the built-in RENDERER/PARSER for recognized architectures, causing unreliable tool-calling
- [#18242](https://github.com/ollama/ollama/issues/18242) Can't set custom values for Context Length
- [#17768](https://github.com/ollama/ollama/issues/17768) qwen3.8:27b-mtp-q4_K_M failed to run
- [#17831](https://github.com/ollama/ollama/issues/17831) Change ollama config OLLAMA_HOST port for IP4 not IP6
- [#17816](https://github.com/ollama/ollama/issues/17816) qwen3.8 download defunct
- [#17756](https://github.com/ollama/ollama/issues/17756) Ollama Cloud API returning 503 — api.ollama.cloud down since Aug 14 2026
- [#17785](https://github.com/ollama/ollama/issues/17785) Nemotron 3 reasoning-effort controls (chat_template_kwargs.enable_thinking/low_effort, reasoning_budget) silently ignored on both /v1/chat/completions and /api/chat
- [#17969](https://github.com/ollama/ollama/issues/17969) qwen3: cannot disable thinking via OpenAI-compatible /v1 endpoint (/no_think and reasoning_effort both ignored)
- [#18110](https://github.com/ollama/ollama/issues/18110) Nemotron Answering as Qwen
- [#18264](https://github.com/ollama/ollama/issues/18264) llama-server prompt cache grows to 8 GiB of host RAM per runner, outside Ollama's memory accounting and with no way to bound it

### LiteLLM (`BerriAI/litellm`)

**Stars:** 58,119 · **Open issues:** 4,889 · **Last push:** <1h ago

There were no new releases for LiteLLM on September 6, 2026; however, several significant updates were made through merged pull requests. Key features include the addition of a new inspect_embeddings toggle for AIM and Cato, and GovCloud pricing support for all unpriced Bedrock models. Additionally, important fixes were implemented, such as addressing the 1MB ingestion cap in Azure Sentinel, improving the Admin UI bundle, and ensuring guardrail costs are accurately maintained on cache hits. A notable new issue was raised regarding client-side timeouts leaking into outbound provider request bodies, which highlights potential complications in handling request management.

#### ✅ Merged PRs
- [#39978](https://github.com/BerriAI/litellm/pull/39978) refactor(ui): route the sidebar by pathname and shrink the ?page= shim to a redirect table
- [#39918](https://github.com/BerriAI/litellm/pull/39918) feat(guardrails): add inspect_embeddings toggle for AIM and Cato
- [#39880](https://github.com/BerriAI/litellm/pull/39880) fix(azure_sentinel): split batches under the 1MB ingestion cap
- [#39764](https://github.com/BerriAI/litellm/pull/39764) feat(pricing): add GovCloud pricing for every live but unpriced Bedrock model
- [#36841](https://github.com/BerriAI/litellm/pull/36841) feat(cli): add lite pi to run the pi coding agent through the proxy
- [#39972](https://github.com/BerriAI/litellm/pull/39972) fix(file_search): scope emulated file_search to the request's vector stores
- [#39964](https://github.com/BerriAI/litellm/pull/39964) fix(proxy): redact provider keys from pass-through failure tracebacks
- [#39849](https://github.com/BerriAI/litellm/pull/39849) chore(ci): promote internal staging to main
- [#39959](https://github.com/BerriAI/litellm/pull/39959) chore: rebuild Admin UI bundle for the next release
- [#39969](https://github.com/BerriAI/litellm/pull/39969) revert: perf: lazy-load SDK symbols so import litellm stays under 60 MB RSS (#39121)
- [#39963](https://github.com/BerriAI/litellm/pull/39963) fix(ui): read Usage Total Requests tile from gateway request counts
- [#39968](https://github.com/BerriAI/litellm/pull/39968) fix(ui): remove unreachable AI Hub dialog that put the session key in a URL
- [#39953](https://github.com/BerriAI/litellm/pull/39953) test(e2e): judge /v1/messages streaming on the clock, not on the provider's delta count
- [#39960](https://github.com/BerriAI/litellm/pull/39960) fix(proxy): keep guardrail cost in spend on cache hits
- [#39862](https://github.com/BerriAI/litellm/pull/39862) feat(ocr): add Cohere Parse support for cohere and azure_ai
- [#39938](https://github.com/BerriAI/litellm/pull/39938) test(e2e): prove Vertex context caching on the first cold call and on the spend row
- [#35154](https://github.com/BerriAI/litellm/pull/35154) fix(ui): show indirectly granted and name-keyed MCP servers in the tool matrix
- [#39853](https://github.com/BerriAI/litellm/pull/39853) feat(ui): show guardrail usage units and cost on the Guardrails Monitor
- [#39946](https://github.com/BerriAI/litellm/pull/39946) test(e2e): stream a longer /v1/messages reply so the delta-count pin has margin
- [#39947](https://github.com/BerriAI/litellm/pull/39947) fix(proxy): reject ambiguous name or alias keys in mcp_tool_permissions on write
- [#35153](https://github.com/BerriAI/litellm/pull/35153) fix(ui): keep MCP tool allowlists for team servers granted indirectly
- [#35142](https://github.com/BerriAI/litellm/pull/35142) fix(mcp): scan and mask MCP tool call arguments in unified guardrails
- [#39889](https://github.com/BerriAI/litellm/pull/39889) feat(proxy): serve Prometheus /metrics from a separate process via --prometheus_metrics_port
- [#39728](https://github.com/BerriAI/litellm/pull/39728) feat(guardrails): add non-blocking flag() verdict to custom code guardrails
- [#39766](https://github.com/BerriAI/litellm/pull/39766) refactor(native): separate request data from execution context
- [#39922](https://github.com/BerriAI/litellm/pull/39922) fix(ci): grant pull_requests write for release wheel reporter
- [#39279](https://github.com/BerriAI/litellm/pull/39279) test(e2e): cover presidio post_call, tool_permission, and weave logging cells
- [#39121](https://github.com/BerriAI/litellm/pull/39121) perf: lazy-load SDK symbols so import litellm stays under 60 MB RSS
- [#35394](https://github.com/BerriAI/litellm/pull/35394) feat(mcp): warn when an oauth2_id_jag server outruns the SSO provider's assertion capture
- [#35401](https://github.com/BerriAI/litellm/pull/35401) feat(mcp): renew the stored SSO identity assertion behind ID-JAG
- [#39823](https://github.com/BerriAI/litellm/pull/39823) feat(auto-router): decouple compression between the routing decision and the model call
- [#39934](https://github.com/BerriAI/litellm/pull/39934) test(e2e/ui): select 50 rows per page before asserting the Tags and Model Hub tables overflow
- [#39917](https://github.com/BerriAI/litellm/pull/39917) test(e2e): cover key spend reset, regenerate grace period, and the llm_api_routes grant
- [#39920](https://github.com/BerriAI/litellm/pull/39920) test(e2e): cover Anthropic and OpenAI prompt caching, Cohere embeddings, and costed /openai chat passthrough
- [#39932](https://github.com/BerriAI/litellm/pull/39932) test: repair two CI tests broken by intentional changes
- [#39695](https://github.com/BerriAI/litellm/pull/39695) feat(terraform/gcp): dependencies-only mode and bring-your-own-network for GKE
- [#39930](https://github.com/BerriAI/litellm/pull/39930) feat(ui): deep link guardrail detail with ?guardrail= on guardrails pages
- [#39879](https://github.com/BerriAI/litellm/pull/39879) fix(hide-secrets): stop redacting benign identifiers
- [#39873](https://github.com/BerriAI/litellm/pull/39873) fix(cloudzero): preserve late resource tags
- [#39871](https://github.com/BerriAI/litellm/pull/39871) fix(cloudzero): infer daily batch schema from every row
- [#39887](https://github.com/BerriAI/litellm/pull/39887) fix(router): coordinate async and sync failure handlers at remaining router call sites
- [#39916](https://github.com/BerriAI/litellm/pull/39916) test(e2e): cover Anthropic /chat/completions streaming and tool calls
- [#39892](https://github.com/BerriAI/litellm/pull/39892) fix(proxy): make the invalid-model 403 path cheap under a burst of rejections
- [#39890](https://github.com/BerriAI/litellm/pull/39890) perf(logging): scan large base64 payloads for log truncation off the event loop
- [#39926](https://github.com/BerriAI/litellm/pull/39926) fix(mcp): reject URL credentials for none auth
- [#39883](https://github.com/BerriAI/litellm/pull/39883) fix(proxy): retry deadlocks and requeue spend logs on any DB write error
- [#39859](https://github.com/BerriAI/litellm/pull/39859) fix(router): hold max_parallel_requests slot until streaming response is exhausted or closed
- [#39725](https://github.com/BerriAI/litellm/pull/39725) feat(responses): honor supported_endpoints /v1/responses opt-in for OpenAI-compatible deployments
- [#39727](https://github.com/BerriAI/litellm/pull/39727) fix(guardrails): record guardrail information for undecorated custom apply_guardrail overrides
- [#39804](https://github.com/BerriAI/litellm/pull/39804) test(e2e): repair the wildcard readiness probe and the semantic auto-router spend assertion
- [#39912](https://github.com/BerriAI/litellm/pull/39912) chore: bump litellm-enterprise 0.1.64 -> 0.1.65, litellm-proxy-extras 0.4.93 -> 0.4.94
- [#39680](https://github.com/BerriAI/litellm/pull/39680) fix(ui): make Admin UI table pagination honor the selected page size
- [#39672](https://github.com/BerriAI/litellm/pull/39672) feat(organization): expose PATCH /v2/organization/{organization_id} in the OpenAPI spec
- [#39817](https://github.com/BerriAI/litellm/pull/39817) fix(shadow_eval): size the judge output cap for a judge that reasons
- [#39674](https://github.com/BerriAI/litellm/pull/39674) feat(router): meter auto-router tier and prompt customization against the auto_router license feature
- [#39851](https://github.com/BerriAI/litellm/pull/39851) fix(realtime): relay the upstream websocket close to the client instead of hanging
- [#39856](https://github.com/BerriAI/litellm/pull/39856) fix(ui): bring the inline-object lint budget back under its ceiling
- [#39841](https://github.com/BerriAI/litellm/pull/39841) fix(proxy): gate the OpenAI websocket passthrough behind an explicit opt-in
- [#39810](https://github.com/BerriAI/litellm/pull/39810) fix(batches): register ownership for every batch create path
- [#39840](https://github.com/BerriAI/litellm/pull/39840) feat(dashboard): configure classifier vision input
- [#39286](https://github.com/BerriAI/litellm/pull/39286) fix(mcp): let config.yaml MCP servers pin server_id
- [#39844](https://github.com/BerriAI/litellm/pull/39844) fix(responses): decode JSON-string tool schemas before sending to the provider
- [#39843](https://github.com/BerriAI/litellm/pull/39843) feat(helm): render nodeSelector, tolerations, and affinity on the componentized chart migrations Job
- [#39461](https://github.com/BerriAI/litellm/pull/39461) refactor(typing): cut 1,397 Any errors across 183 backend files
- [#39518](https://github.com/BerriAI/litellm/pull/39518) refactor: clear fresh tech debt from the last 24 hours (2026-09-03, 2026-09-04)
- [#39847](https://github.com/BerriAI/litellm/pull/39847) test(e2e/batches): assert Bedrock batch cancel and list in the lifecycle
- [#39828](https://github.com/BerriAI/litellm/pull/39828) feat(shadow_eval): scope a job to model groups, ANDed with its key, team, and user targets
- [#39698](https://github.com/BerriAI/litellm/pull/39698) feat(otel): stamp litellm.request.route on the LLM call span
- [#39842](https://github.com/BerriAI/litellm/pull/39842) test(store_model_in_db): assert the 400 contract in the unknown-model spend log test
- [#39306](https://github.com/BerriAI/litellm/pull/39306) test: deflake JWT tamper, fuzzy picker, tag routing, liveliness, redis stall burst, and pre-commit interrupt tests
- [#39435](https://github.com/BerriAI/litellm/pull/39435) feat(cli): add `lite debug claude` session report and /debug-lite slash command
- [#39848](https://github.com/BerriAI/litellm/pull/39848) fix(datadog_llm_obs): keep guardrail_cost_by_unit on redacted spans
- [#39822](https://github.com/BerriAI/litellm/pull/39822) feat(access-groups): resolve resource names on access group responses
- [#39825](https://github.com/BerriAI/litellm/pull/39825) feat(complexity_router): let the LLM classifier see request images
- [#39827](https://github.com/BerriAI/litellm/pull/39827) feat(cost-map): add azure/gpt-6-astra and azure/us/gpt-6-astra Foundry pricing
- [#38703](https://github.com/BerriAI/litellm/pull/38703) fix(team_endpoints): let member_delete clear a team left on the user row
- [#39809](https://github.com/BerriAI/litellm/pull/39809) feat(router): auto-escalate stalled complexity-router tasks
- [#39818](https://github.com/BerriAI/litellm/pull/39818) feat(shadow_eval): judge tool-call turns instead of dropping or erroring on them
- [#39281](https://github.com/BerriAI/litellm/pull/39281) fix(bedrock): stop sending toolConfig tool definitions to guardrails on passthrough converse
- [#39780](https://github.com/BerriAI/litellm/pull/39780) fix(proxy): strip every TypedDict qualifier before numeric form-field detection
- [#39729](https://github.com/BerriAI/litellm/pull/39729) fix(proxy): invalidate end-user spend counter and cache on budget reset (#39726)
- [#39702](https://github.com/BerriAI/litellm/pull/39702) fix(datadog_llm_obs): keep the guardrail audit record under message redaction
- [#39763](https://github.com/BerriAI/litellm/pull/39763) fix(fireworks_ai): resolve tool_choice and reasoning support for short model names
- [#39811](https://github.com/BerriAI/litellm/pull/39811) feat(vector_stores): add a MongoDB vector store provider for Atlas and self-managed deployments

#### 🐛 New Issues
- [#39899](https://github.com/BerriAI/litellm/issues/39899) client_side_timeout leaks into the outbound provider request body (400 "Extra inputs are not permitted") `llm translation` 💬2
- [#39979](https://github.com/BerriAI/litellm/issues/39979) [Bug]: Request Logs date-range filter interprets the picker's local times as UTC — non-UTC users get silently shifted windows 💬1
- [#39909](https://github.com/BerriAI/litellm/issues/39909) [Bug]: register_model's case-insensitive builtin merge leaks one deployment's declared max_input_tokens/supports_vision into same-model-different-case deployments — Router silently excludes the wrong deployment from mixed-capability groups `llm translation` 💬1
- [#39911](https://github.com/BerriAI/litellm/issues/39911) Are community PRs still being reviewed? `llm translation` 💬1
- [#39838](https://github.com/BerriAI/litellm/issues/39838) A model-less PATCH can attach complexity_router_config to a non-router deployment 💬1
- [#39882](https://github.com/BerriAI/litellm/issues/39882) test_logging: test_level_routing_handler_falls_back_to_stderr_when_stdout_is_unusable leaves sys.stdout on a closed capsys stream, module teardown errors 💬1
- [#39910](https://github.com/BerriAI/litellm/issues/39910) [Bug]: token_counter costs Anthropic-format images at flat 85 tokens (OpenAI low-detail) and raises on {"type":"image"} blocks — 32x undercount breaks context-window pre-call checks for Anthropic proxies `llm translation` `claude code`
- [#39901](https://github.com/BerriAI/litellm/issues/39901) Unprefixed request tag breaks routing once tag_routing_prefix is configured
- [#39854](https://github.com/BerriAI/litellm/issues/39854) [Bug]: CodestralTextCompletionConfig.get_supported_openai_params omits min_tokens despite being mapped `llm translation` `SDK`

#### 🔒 Closed Issues
- [#29340](https://github.com/BerriAI/litellm/issues/29340) [Bug]: /ui/login returns 404
- [#28234](https://github.com/BerriAI/litellm/issues/28234) [Feature]: Compare daily usage across multiple keys of a single user in the Usage dashboard
- [#26450](https://github.com/BerriAI/litellm/issues/26450) [Bug]: Azure Sentinel logging fails due to Azure limits
- [#28196](https://github.com/BerriAI/litellm/issues/28196) Anthropic reasoning_effort silently dropped when passed as Reasoning(effort, summary) dict (regression in v1.85.0)
- [#28232](https://github.com/BerriAI/litellm/issues/28232) [Bug]: Responses→Chat lowering drops input_file in function_call_output.output (Vertex / Bedrock)
- [#28880](https://github.com/BerriAI/litellm/issues/28880) [Bug]: Users created with leading whitespace in email addresses should be trimmed
- [#29382](https://github.com/BerriAI/litellm/issues/29382) [Bug]: v1.83.14-stable linux/arm64 image contains amd64 binaries (mislabeled manifest)
- [#39899](https://github.com/BerriAI/litellm/issues/39899) client_side_timeout leaks into the outbound provider request body (400 "Extra inputs are not permitted")
- [#29400](https://github.com/BerriAI/litellm/issues/29400) w
- [#39726](https://github.com/BerriAI/litellm/issues/39726) [Bug]: End-user budget reset does not invalidate spend cache

### Unsloth (`unslothai/unsloth`)

**Stars:** 75,677 · **Open issues:** 1,440 · **Last push:** <1h ago

On September 6, 2026, Unsloth saw no new releases but a series of key updates were merged into the codebase. Notable changes include updates to Docker configurations, such as printing the Studio admin password in Docker logs (#10344) and synchronizing the Hub page with the DOCKER_API_KEY (#10343). Additionally, several fixes were implemented for the Studio, including a resolution for desktop titlebar button alignment (#10321) and restored features that had been unintentionally altered (#10331, #10329, #10328). A significant new issue raised today is #10345, advocating for human-centric context management, which has generated interest in the community.

#### ✅ Merged PRs
- [#10344](https://github.com/unslothai/unsloth/pull/10344) Docker: print the Studio admin password in docker logs, add UNSLOTH_STUDIO_PASSWORD
- [#10294](https://github.com/unslothai/unsloth/pull/10294) Make the credential probe actually delete its throwaway tag
- [#10298](https://github.com/unslothai/unsloth/pull/10298) Revert "Studio: keep a Downloads entry when the list is empty"
- [#10343](https://github.com/unslothai/unsloth/pull/10343) Docker publish: sync the Hub page with DOCKER_API_KEY on the namespace route
- [#10321](https://github.com/unslothai/unsloth/pull/10321) fix(studio): align desktop titlebar buttons
- [#10331](https://github.com/unslothai/unsloth/pull/10331) Restore facts the comment trim cut from the studiobench harness
- [#10329](https://github.com/unslothai/unsloth/pull/10329) Restore facts the comment trim cut from the Studio backend
- [#10328](https://github.com/unslothai/unsloth/pull/10328) Restore facts the comment trim cut from the unsloth package
- [#10326](https://github.com/unslothai/unsloth/pull/10326) Stop asserting the titlebar navigation padding from source
- [#10334](https://github.com/unslothai/unsloth/pull/10334) Docker: describe the shipped images on Docker Hub and in the README
- [#10333](https://github.com/unslothai/unsloth/pull/10333) Docker publish: verify the merged manifest against the arches' children
- [#10278](https://github.com/unslothai/unsloth/pull/10278) Studio: fix whisper prebuilt pairing on linux-arm64 with a GPU llama runtime
- [#10324](https://github.com/unslothai/unsloth/pull/10324) Install the cublas wheel NVIDIA actually publishes for the bundle's CUDA major

#### 🐛 New Issues
- [#10345](https://github.com/unslothai/unsloth/issues/10345) Human-centric context management `feature request` 💬3
- [#10337](https://github.com/unslothai/unsloth/issues/10337) [Bug] Tokens per chat are not being counted Again `feature request` `bug`
- [#10336](https://github.com/unslothai/unsloth/issues/10336) [Bug] Laguna iq4_nl not loading anymore `feature request` `bug` 💬1
- [#10359](https://github.com/unslothai/unsloth/issues/10359) [Feature] Add options to strictly uses completely custom llamacpp flags without unsloth studio internal flags optimizers `feature request`
- [#10352](https://github.com/unslothai/unsloth/issues/10352) [Bug] `unsloth chat` can load the wrong GGUF when multiple unrelated GGUFs share a directory
- [#10356](https://github.com/unslothai/unsloth/issues/10356) [Feature] How to install Unsloth Desktop in completely offline environment? `feature request`
- [#10355](https://github.com/unslothai/unsloth/issues/10355) [Bug] It fucking ignores --tensor-split `feature request` `bug`
- [#10354](https://github.com/unslothai/unsloth/issues/10354) calling Claude Codex Hermes using the unsloth API is quite low `feature request` `bug`
- [#10353](https://github.com/unslothai/unsloth/issues/10353) [Feature] `feature request`
- [#10350](https://github.com/unslothai/unsloth/issues/10350) [Bug] torch.dynamo circular import error when running Z-Image-GGUF (Q4_K_M) in Unsloth Desktop `feature request` `bug`
- [#10349](https://github.com/unslothai/unsloth/issues/10349) [Bug] Tool responses are truncated to arbitrary 16000 chars `feature request` `bug`
- [#10348](https://github.com/unslothai/unsloth/issues/10348) [Bug] Unsloth sends opaque calls to the model `feature request` `bug`
- [#10347](https://github.com/unslothai/unsloth/issues/10347) [Feature] Custom API providers need an endpoint/API type option (OpenAI Responses API) — gpt-5.6-luna on OpenCode Go returns 500 `feature request`
- [#10341](https://github.com/unslothai/unsloth/issues/10341) [Bug] Model still sitting in RAM while Box Checked for No Ram Offload. `feature request` `bug`
- [#10340](https://github.com/unslothai/unsloth/issues/10340) Official Unsloth VS Code Extension (Native Language Model Provider)
- [#10339](https://github.com/unslothai/unsloth/issues/10339) [Bug] Model doesn't want to unload, Pressing the red Circle next to the model causes this error `feature request` `bug`
- [#10338](https://github.com/unslothai/unsloth/issues/10338) [Bug] Pressing "Switch Back" on a chat that was originally started with a local model, loads the model with 4096 context. `feature request` `bug`
- [#10332](https://github.com/unslothai/unsloth/issues/10332) [Feature] ARM64 Linux build of Unsloth Desktop (aarch64 / DGX Spark)
- [#10330](https://github.com/unslothai/unsloth/issues/10330) [Bug] First time user Qwen3.8-UD-IQ4_XS outputs only gibberish `feature request` `bug`

#### 🔒 Closed Issues
- [#4851](https://github.com/unslothai/unsloth/issues/4851) [Feature ]Support for PyTorch 2.11 to catch up with the newest vllm

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,060 · **Open issues:** 378 · **Last push:** 5h ago

On September 6, 2026, there were no new releases for AIBrix, but a significant development was the merging of pull request #2665, which introduced integration tests for the ModelAdapter controller. This enhancement aims to improve the reliability of model interactions within the framework. Additionally, no new issues were reported today, indicating a stable environment for ongoing development. Overall, the day was marked by routine maintenance with the notable advancement of testing capabilities through the recent merge.

#### ✅ Merged PRs
- [#2665](https://github.com/vllm-project/aibrix/pull/2665) [Misc] Add ModelAdapter controller integration tests

#### 🔒 Closed Issues
- [#2667](https://github.com/vllm-project/aibrix/issues/2667) [Bug] Flaky KVCache pod-triggered reconciliation integration test
- [#2663](https://github.com/vllm-project/aibrix/issues/2663) /v1/embeddings rejects all inputs over 8192 tokens

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 5,596 · **Open issues:** 478 · **Last push:** <1h ago

On September 6, 2026, there were no new releases for Semantic Router, but several important pull requests were merged. Notably, PR #3454 fixed a bug that prevented the writing of FP32 weights under an fp16 name during the CK graph rewrite. Additionally, PR #3504 addressed a critical issue by changing the RouterDC affinity to use a SHA-256 digest of the full query instead of its 32-byte prefix, enhancing routing accuracy. Another significant PR, #3512, implemented tests for long-text classification API cases to improve the robustness of the codebase. Among new issues, PR #3513 highlighted a bug where the PyPI sim publish workflow could cancel itself mid-release, drawing attention for its potential to disrupt deployment processes.

#### ✅ Merged PRs
- [#3454](https://github.com/vllm-project/semantic-router/pull/3454) [Bug] Refuse to write FP32 weights under an fp16 name in the CK graph rewrite
- [#3512](https://github.com/vllm-project/semantic-router/pull/3512) [Test] Run the long-text classification API cases in the PR lane
- [#3504](https://github.com/vllm-project/semantic-router/pull/3504) [Bug] Key RouterDC affinity on a SHA-256 digest of the full query instead of its 32-byte prefix

#### 🐛 New Issues
- [#3513](https://github.com/vllm-project/semantic-router/issues/3513) [Bug] PyPI sim publish workflow can cancel itself mid-release `bug` `accepted` `in-progress` `wg/data-plane-networking` 💬2
- [#3515](https://github.com/vllm-project/semantic-router/issues/3515) [Bug] Dashboard collapsible headers and context menus are not keyboard reachable `bug` `accepted` `wg/developer-experience-ecosystem` 💬1
- [#3516](https://github.com/vllm-project/semantic-router/issues/3516) [Feature] Qualify native macOS (Apple Silicon) support: darwin build and Metal device wiring `enhancement` `needs-acceptance` `wg/enterprise-environment`

#### 🔒 Closed Issues
- [#3374](https://github.com/vllm-project/semantic-router/issues/3374) [Bug] Enforce Fusion quorum over usable panel responses
- [#3452](https://github.com/vllm-project/semantic-router/issues/3452) [Bug] RouterDC hashQuery keys affinity by 32-byte prefix, not by query
- [#3388](https://github.com/vllm-project/semantic-router/issues/3388) [Bug] Gemma embedding fails instead of clamping past 2048 tokens
- [#3414](https://github.com/vllm-project/semantic-router/issues/3414) [CI/Build] Pre-commit tooling image builds with no layer cache

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*