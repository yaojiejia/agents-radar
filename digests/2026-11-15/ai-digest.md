# 📡 AI Ecosystem Digest — 2026-11-15

> Generated 2026-11-15 02:25 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 155,692 | 30 | 1 | 0 | 0 |
| [OpenAI Codex](https://github.com/openai/codex) | 135,310 | 18 | 2 | 23 | 0 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 108,834 | 0 | 0 | 0 | 0 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,415 | 6 | 8 | 0 | 0 |
| [OpenCode](https://github.com/anomalyco/opencode) | 226,885 | 34 | 16 | 0 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 30,370 | 35 | 4 | 1 | 1 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 394,463 | 157 | 61 | 130 | 1 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 263,426 | 22 | 14 | 2 | 1 |
| [vLLM](https://github.com/vllm-project/vllm) | 96,940 | 20 | 3 | 27 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 38,879 | 38 | 21 | 50 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 135,087 | 18 | 11 | 33 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 186,985 | 1 | 1 | 0 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 63,263 | 9 | 13 | 84 | 3 |
| [Unsloth](https://github.com/unslothai/unsloth) | 79,514 | 9 | 18 | 109 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,186 | 0 | 0 | 1 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,476 | 28 | 8 | 6 | 0 |

---

## ✨ Highlights

- **Qwen Code** has released [v0.27.2-nightly.20261113.6f754be654](https://github.com/QwenLM/qwen-code/releases/tag/v0.27.2-nightly.20261113.6f754be654).
- **OpenClaw** has released [v2026.11.5-beta.3](https://github.com/openclaw/openclaw/releases/tag/v2026.11.5-beta.3).
- Significant merged PRs in **OpenAI Codex** include [#61596](https://github.com/openai/codex/pull/61596), which scopes the agent overview refresh state to each backend, and [#61587](https://github.com/openai/codex/pull/61587), adding request IDs to model request hooks.
- **Hermes Agent** saw the addition of a new [tracking issue](https://github.com/NousResearch/hermes-agent/issues/155595) related to profile creation and lifecycle with eight comments.
- Notably contentious in **Semantic Router** are multiple new issues regarding streamed requests, the most commented being [#6545](https://github.com/vllm-project/semantic-router/issues/6545), noted for having five comments about TTFT recording.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 155,692 · **Open issues:** 17,235 · **Last push:** <1h ago

On November 15, 2026, there were no new releases or merged pull requests for Claude Code. Several new issues were reported, including a bug in which the agents view no longer displays model and context for subagent rows following the update to version 2.1.325, and a complaint about the model ignoring specific instructions, highlighting ongoing performance concerns. A requested feature aims to fix the "Read Aloud" controls in both the Claude GUI app and the mobile app. Notably, a bug report indicates that the desktop app version 5.22750.0 erroneously runs an earlier version, 2.1.321, leading to problems with theme protocol compliance and backdrop rendering.

#### 🐛 New Issues
- [#110123](https://github.com/anthropics/claude-code/issues/110123) Bug Report: Refuses detailed collaborative problem-solving requests `bug` `area:model` `platform:wsl` 💬1
- [#110122](https://github.com/anthropics/claude-code/issues/110122) [FEATURE] Fix "Read Aloud" controls in Claude GUI App & Mobile App `invalid` 💬1
- [#109843](https://github.com/anthropics/claude-code/issues/109843) [Bug] Agents view: subagent rows no longer show model and context after update to 2.1.325 (regression from 2.1.323) `bug` `platform:linux` `regression` `area:agent-view` 💬1
- [#110112](https://github.com/anthropics/claude-code/issues/110112) [BUG] Desktop 5.22750.0 (latest channel) runs Claude Code 2.1.321, which predates its front end's theme protocol: mod backdrops never draw `bug` `has repro` `platform:macos` `area:plugins`
- [#110106](https://github.com/anthropics/claude-code/issues/110106) [MODEL] Ignored instructions: extra complaint 22 of 100 (page meaning, with evidence) `bug` `area:model` `model` 💬1
- [#110103](https://github.com/anthropics/claude-code/issues/110103) [MODEL] Ignored instructions: extra complaint 19 of 100 (page meaning, with evidence) `bug` `area:model` `model` 💬1
- [#110131](https://github.com/anthropics/claude-code/issues/110131) [BUG] Desktop (Windows): quitting and relaunching the app turns Remote Control off for every session, and there is no way to turn it back on in bulk `bug`
- [#110130](https://github.com/anthropics/claude-code/issues/110130) After /compact, task reminders say "Read the output file"; the launch message says "Do NOT Read or tail this file via the shell tool" (it's the multi-MB subagent transcript) `bug` `platform:windows` `area:core` `area:agents`
- [#110129](https://github.com/anthropics/claude-code/issues/110129) [GitHub integration] `bug` `needs-info` `github-integration`
- [#110128](https://github.com/anthropics/claude-code/issues/110128) Desktop: a scheduled task created from a session should keep Bypass permissions; the rule that drops it is unreasonable, and the permission control in the edit dialog is unlabeled `enhancement` `platform:windows` `area:permissions` `area:desktop`
- [#110127](https://github.com/anthropics/claude-code/issues/110127) Opt-in display of a blocking hook message without the generic banner `enhancement` `area:tui` `area:hooks`
- [#110126](https://github.com/anthropics/claude-code/issues/110126) [FEATURE] Independent settings for the plan-mode model and the implementation model `enhancement` `area:model`
- [#110125](https://github.com/anthropics/claude-code/issues/110125) Una sesión de Cowork ya no puede pedir acceso al repositorio de GitHub (add_repo no está disponible) `duplicate` `platform:macos` `area:cowork` `github-integration`
- [#110124](https://github.com/anthropics/claude-code/issues/110124) Claude in Chrome: desktop app never pairs with the extension in a second organization of the same account; error says "not installed or not signed in" `bug` `has repro` `platform:macos` `area:desktop`
- [#110121](https://github.com/anthropics/claude-code/issues/110121) Glad it helped! If you have another bug report, paste it in and I'll generate a title for it. `bug` `platform:linux` `platform:vscode`
- [#110120](https://github.com/anthropics/claude-code/issues/110120) Feature request: please add a way to clear or archive the main project chat his… `enhancement`
- [#110119](https://github.com/anthropics/claude-code/issues/110119) [Bug] Fork shortcut Ctrl+Alt+Enter does nothing when message contains pasted image (Russian layout) `bug` `has repro` `platform:windows` `area:desktop`
- [#110118](https://github.com/anthropics/claude-code/issues/110118) [BUG] Projects thread (cloud): "Update environment" approval card ignores clicks on both buttons, thread is permanently frozen `bug` `platform:macos` `area:claude-code-web` `area:desktop`
- [#110117](https://github.com/anthropics/claude-code/issues/110117) [Feature Request] Add refresh button to sync chats across devices in Claude desktop app `enhancement` `platform:linux` `area:desktop`
- [#110116](https://github.com/anthropics/claude-code/issues/110116) [GitHub integration] `bug` `github-integration`
- [#110115](https://github.com/anthropics/claude-code/issues/110115) [BUG] Idle session spins at 100% CPU for hours after a VM resume and ignores SIGTERM (timer loop in the embedded Bun) `bug` `platform:linux` `area:core` `perf:cpu`
- [#110114](https://github.com/anthropics/claude-code/issues/110114) [Desktop] Side sessions can't be started over Remote Control (start_session refused) `enhancement` `platform:windows` `area:desktop`
- [#110113](https://github.com/anthropics/claude-code/issues/110113) [Bug] Opus ignores explicit ship instructions, falsely reports work as shipped/running `bug` `platform:linux` `area:model`
- [#110111](https://github.com/anthropics/claude-code/issues/110111) [Feature Request] Improve test writing and monitoring for unit and integration tests to reduce wasted tokens and time `enhancement` `platform:macos` `area:model`
- [#110110](https://github.com/anthropics/claude-code/issues/110110) [GitHub integration] signalement de probleme `bug` `platform:web` `area:integrations` `github-integration`
- [#110109](https://github.com/anthropics/claude-code/issues/110109) Hit usage limits in 5 minutes and 9 seconds using Sonnet... `bug` `platform:macos` `area:cost`
- [#110108](https://github.com/anthropics/claude-code/issues/110108) Custom themes can't do a pure black background in dark mode `enhancement` `platform:macos` `area:ui` `area:desktop`
- [#110107](https://github.com/anthropics/claude-code/issues/110107) [MODEL] Ignored instructions: extra complaint 23 of 100 (page meaning, with evidence) `bug` `area:model` `model`
- [#110105](https://github.com/anthropics/claude-code/issues/110105) [MODEL] Ignored instructions: extra complaint 21 of 100 (page meaning, with evidence) `duplicate` `area:model` `model`
- [#110104](https://github.com/anthropics/claude-code/issues/110104) [MODEL] Ignored instructions: extra complaint 20 of 100 (page meaning, with evidence) `bug` `area:model` `model`

#### 🔒 Closed Issues
- [#109843](https://github.com/anthropics/claude-code/issues/109843) [Bug] Agents view: subagent rows no longer show model and context after update to 2.1.325 (regression from 2.1.323)

### OpenAI Codex (`openai/codex`)

**Stars:** 135,310 · **Open issues:** 27,668 · **Last push:** <1h ago

On November 15, 2026, there were no new releases for OpenAI Codex, but several significant pull requests were merged, including enhancements to the agent overview refresh state and improvements in managing rollout budgets. Notably, PR #61579 introduced support for fractional rollout budgets, allowing for more configurable context reminders, while PR #61587 added request IDs and attempt numbers to model request hooks, improving traceability. The day's new issues highlighted concerns such as a false-positive cybersecurity filter blocking benign prompts (#61592) and problems with connected Windows VMs not being controllable (#61459). Overall, it was a routine day in terms of releases, but the developments in budget management and request handling stood out.

#### ✅ Merged PRs
- [#61596](https://github.com/openai/codex/pull/61596) Keep agent overview refresh state scoped to each backend
- [#61595](https://github.com/openai/codex/pull/61595) Scope TUI history item lookups to their owning turns
- [#61587](https://github.com/openai/codex/pull/61587) Add request IDs and attempt numbers to model request hooks
- [#61583](https://github.com/openai/codex/pull/61583) Refactor rollout budget checks and turn completion state
- [#61582](https://github.com/openai/codex/pull/61582) Gate new rollout work on shared budget exhaustion
- [#61581](https://github.com/openai/codex/pull/61581) Record neutral interruption markers for rollout budget stops
- [#61580](https://github.com/openai/codex/pull/61580) Account for synchronous MCP post-hook costs in rollout budgets
- [#61579](https://github.com/openai/codex/pull/61579) Support fractional rollout budgets and configurable context reminders
- [#61578](https://github.com/openai/codex/pull/61578) Recheck rollout budgets before starting tool work
- [#61577](https://github.com/openai/codex/pull/61577) Add response processing after completion and usage accounting
- [#61562](https://github.com/openai/codex/pull/61562) Unify model request hook lifecycles across sampling and compaction
- [#61535](https://github.com/openai/codex/pull/61535) Add trusted request-country metadata to Responses requests
- [#61494](https://github.com/openai/codex/pull/61494) Describe context and permissions per environment behind a feature flag
- [#61490](https://github.com/openai/codex/pull/61490) Preserve the current Cloud task until navigation is ready
- [#61488](https://github.com/openai/codex/pull/61488) Harden Git remote collection and limit remote URL metadata
- [#61486](https://github.com/openai/codex/pull/61486) Keep archived threads read-only and support unarchiving in the TUI
- [#61481](https://github.com/openai/codex/pull/61481) Allow Ctrl+C to quit during Cloud session switches
- [#61480](https://github.com/openai/codex/pull/61480) Add snapshot pagination for persisted realtime history
- [#61473](https://github.com/openai/codex/pull/61473) Persist timestamped realtime frames before acknowledging completion
- [#61465](https://github.com/openai/codex/pull/61465) Move JSON byte counting into `codex-utils-string`
- [#61461](https://github.com/openai/codex/pull/61461) Refactor session mail recording and compaction metadata capture
- [#61452](https://github.com/openai/codex/pull/61452) Add optional tool output rendering for context window hints
- [#61449](https://github.com/openai/codex/pull/61449) Add explicit cloud catalog refresh before turn admission

#### 🐛 New Issues
- [#61459](https://github.com/openai/codex/issues/61459) Dot cannot control connected Windows VM: GetCursorPos access denied `bug` `windows-os` `computer-use` `dots` 💬3
- [#61491](https://github.com/openai/codex/issues/61491) CLI 0.169.0: resume panics in history pagination with reversed slice `bug` `TUI` `CLI` `session` 💬2
- [#61598](https://github.com/openai/codex/issues/61598) Existing chats cannot migrate from deprecated legacy WSL project to newly added WSL project `bug` `windows-os` `app` `session` 💬1
- [#61597](https://github.com/openai/codex/issues/61597) Android Remote repeatedly shows stale Windows Codex conversation `bug` `windows-os` `app` `remote` 💬1
- [#61592](https://github.com/openai/codex/issues/61592) False-positive cybersecurity filtering blocks benign prompts even with Daybreak enabled `bug` `CLI` `safety-check` 💬1
- [#61591](https://github.com/openai/codex/issues/61591) Windows desktop 26.1111: temporary-index Git staging workers survive launcher exit and accumulate multi-GiB memory `bug` `windows-os` `app` `performance` 💬1
- [#61590](https://github.com/openai/codex/issues/61590) Multiple ChatGPT Accounts Experienced Sudden Codex Weekly Quota Depletion `bug` `extension` `rate-limits` 💬1
- [#61576](https://github.com/openai/codex/issues/61576) Codex CLI: fail-closed authorization for subagents and process input `bug` `documentation` `sandbox` `CLI` 💬1
- [#61586](https://github.com/openai/codex/issues/61586) PDF preview refresh button does not appear during Remote Control session `bug` `app` `remote` 💬1
- [#61519](https://github.com/openai/codex/issues/61519) Android Codex Remote threads select multi-agent V1 even when managed app-server config/read reports V2 enabled (0.167.0) `bug` `subagent` `app-server` `remote` 💬1
- [#61594](https://github.com/openai/codex/issues/61594) [Bug] Codex Desktop still blocked by usage limit after Reset Card (Usage page shows 100% remaining) `bug` `rate-limits` `app`
- [#61593](https://github.com/openai/codex/issues/61593) Opt-in display of a blocking hook message without the generic banner `enhancement` `windows-os` `TUI` `CLI`
- [#61589](https://github.com/openai/codex/issues/61589) [macOS][In-app Browser] Pages with an unsaved-changes warning can't be reloaded or left: no "Leave site?" dialog, navigation silently cancelled `bug` `app` `browser`
- [#61588](https://github.com/openai/codex/issues/61588) [iOS] ChatGPT becomes unresponsive for minutes shortly after launch with Codex `bug` `iOS` `app` `performance`
- [#61584](https://github.com/openai/codex/issues/61584) [Windows] Global dictation cannot save Ctrl+Win+Z with the Russian keyboard layout `bug` `windows-os` `app`
- [#61575](https://github.com/openai/codex/issues/61575) After a CRIU restore on another host, codex deletes its own in-use `logs_2.sqlite-wal`, and later writes to `logs_2` are lost `bug` `CLI` `session`
- [#61574](https://github.com/openai/codex/issues/61574) [Windows][Dot] Dot-created task runs in PowerShell despite WSL agent setting `bug` `windows-os` `app` `dots`
- [#61573](https://github.com/openai/codex/issues/61573) "Work across projects in one voice chat `enhancement` `app` `session`

#### 🔒 Closed Issues
- [#61491](https://github.com/openai/codex/issues/61491) CLI 0.169.0: resume panics in history pagination with reversed slice
- [#61592](https://github.com/openai/codex/issues/61592) False-positive cybersecurity filtering blocks benign prompts even with Daybreak enabled

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,415 · **Open issues:** 2,203 · **Last push:** 1d ago

On November 15, 2026, there were no new releases or merged pull requests for GitHub Copilot CLI, indicating a routine maintenance day. However, the team received several new issues, with highlights including a request for a version compatible with macOS 12.7.6 and an issue regarding the ask_user command where text isn't displayed in the response. Another notable concern was raised about the agent's model turns spending time on polling while a background job is active, which could impact performance. Additionally, users reported that defaults for subagent models were including options unavailable on the free plan, leading to unexpected errors. The influx of new issues suggests that user feedback and feature requests remain a priority for upcoming improvements.

#### 🐛 New Issues
- [#5461](https://github.com/github/copilot-cli/issues/5461) Request for a GitHub Copilot CLI Version Compatible with macOS 12.7.6 `triage`
- [#5460](https://github.com/github/copilot-cli/issues/5460) ask_user: text written in the same response as an ask_user call is not shown `triage`
- [#5459](https://github.com/github/copilot-cli/issues/5459) Agent spends model turns on `sleep N; check` polling while a background job runs `triage`
- [#5458](https://github.com/github/copilot-cli/issues/5458) Feature request: hook/notification event when MCP server startup completes (all connected or failed) `triage`
- [#5457](https://github.com/github/copilot-cli/issues/5457) Fusion tier "high" silently resolves to policy "standard" (max works) `triage`
- [#5456](https://github.com/github/copilot-cli/issues/5456) Defaults for subagent models include models unavailable on free plan, causing errors `triage`

#### 🔒 Closed Issues
- [#3985](https://github.com/github/copilot-cli/issues/3985) cannot copy (/copy) to clipboard
- [#4615](https://github.com/github/copilot-cli/issues/4615) Bug: /copy still fails on GNOME/Mutter Wayland in 1.0.80 — xclip fallback wrongly gated on WAYLAND_DISPLAY being unset
- [#4391](https://github.com/github/copilot-cli/issues/4391) Copying text clears the screen on certain codepages
- [#3173](https://github.com/github/copilot-cli/issues/3173) --add-dir does not load skills from added directory when running Copilot CLI outside that directory
- [#4489](https://github.com/github/copilot-cli/issues/4489) When resuming an old session the agent used in that old session is not selected
- [#3915](https://github.com/github/copilot-cli/issues/3915) /compact: agent activity indicator fires immediately when next message is queued, making it look like the message was sent mid-compact
- [#5446](https://github.com/github/copilot-cli/issues/5446) MCP tool cache grows with temporary workspaces and can exhaust memory at startup
- [#5306](https://github.com/github/copilot-cli/issues/5306) `--available-tools` with an empty value exposes all tools instead of none

### OpenCode (`anomalyco/opencode`)

**Stars:** 226,885 · **Open issues:** 4,001 · **Last push:** <1h ago

On November 15, 2026, OpenCode saw no new releases or merged pull requests. Among the newly opened issues, #63956 highlights a problem with the Gemini model in GitHub Copilot, which fails to support the Responses API when directory wake/boot is initiated before asynchronous model synchronization is complete. Another notable issue, #63935, addresses the loss of prompt cache occurring in about one in three requests when only the reasoning effort changes, which raises concerns about consistency in response handling. Additionally, issue #63921 reports that LM Studio's discovery feature fails to capture server-reported reasoning capabilities, underscoring the need for model-specific configurations. Overall, the day reflected typical maintenance, with these emerging issues set to capture community attention.

#### 🐛 New Issues
- [#63956](https://github.com/anomalyco/opencode/issues/63956) github-copilot: Gemini model fails on directory wake/boot with "does not support Responses API" before async /models sync finishes `type/bug` `status/repro-simulated` `area/providers` `version/v2` 💬5
- [#63935](https://github.com/anomalyco/opencode/issues/63935) Prompt cache is lost on about one request in three when only reasoning_effort changes (opencode-go, /zen/go/v1, deepseek-v4.1-flash) `pending close` `triaging` `type/bug` `area/providers` 💬5
- [#63921](https://github.com/anomalyco/opencode/issues/63921) [lmstudio] discovery drops server-reported reasoning capabilities — thinking variants require hand-written per-model config `type/feature` `area/providers` `version/v2` `platform/linux` 💬4
- [#63902](https://github.com/anomalyco/opencode/issues/63902) mcp: tools.browse.execute runs code in the Code Mode sandbox instead of the browse relay `triaging` `type/bug` `area/mcp` `version/v2` 💬3
- [#63971](https://github.com/anomalyco/opencode/issues/63971) tui: hardware cursor paints at intermediate cells while a response streams (no cursor hide, no sync output) `type/bug` `area/tui` `version/v2` `platform/macos` 💬3
- [#63931](https://github.com/anomalyco/opencode/issues/63931) network: MAC address spoofing to bypass rate limits on free models `triaging` `type/bug` `area/network` `inference/free-tier` 💬3
- [#63894](https://github.com/anomalyco/opencode/issues/63894) Background subagent reports wake the parent for every hidden/internal agent turn (2.3.0) `type/feature` `area/plugins` `version/v2` 💬2
- [#63976](https://github.com/anomalyco/opencode/issues/63976) opencode-pty daemon leaks zombie child processes (unbounded growth under single daemon PID) `reproduced` `type/bug` `area/service` `version/v2` 💬2
- [#63992](https://github.com/anomalyco/opencode/issues/63992) [FEATURE]: Notify the iOS app for sessions started from desktop or CLI (Always Notify toggle in app) `type/feature` `version/v2` `platform/windows` `area/mobile` 💬2
- [#63952](https://github.com/anomalyco/opencode/issues/63952) when i used for a full day a deepseek model or i think even any chinese model when it was used for too much time it starts saying chinese words `triaging` `type/bug` `area/model-behavior` 💬2
- [#63947](https://github.com/anomalyco/opencode/issues/63947) [FEATURE]: Control Plus Arrows || (numlock OFF) Arrows `triaging` `type/feature` `area/tui` `platform/wsl` 💬2
- [#63977](https://github.com/anomalyco/opencode/issues/63977) tui: GNOME Terminal background stays theme color after exit `triaging` `type/bug` `area/tui` `version/v2` 💬2
- [#63975](https://github.com/anomalyco/opencode/issues/63975) opencodejr AI moderator closed issue without checking if duplicate was open `type/feature` 💬2
- [#63932](https://github.com/anomalyco/opencode/issues/63932) Collapsible thoughts 2.30 `triaging` `type/bug` `version/v2` `platform/windows` 💬2
- [#63930](https://github.com/anomalyco/opencode/issues/63930) menu doesnt work. `triaging` `type/bug` 💬2
- [#63968](https://github.com/anomalyco/opencode/issues/63968) [FEATURE]: Don't hide undo, copy and fork buttons under a spoiler `type/feature` `area/web` `version/v2` 💬2
- [#64006](https://github.com/anomalyco/opencode/issues/64006) core: remaining text cuts can split UTF-16 surrogate pairs `reproduced` `type/bug` `area/core` `version/v2` 💬1
- [#63995](https://github.com/anomalyco/opencode/issues/63995) TUI: hidden prompt autocomplete mounts every option row on each session view 💬1
- [#64004](https://github.com/anomalyco/opencode/issues/64004) Usage not reseting `type/bug` 💬1
- [#64003](https://github.com/anomalyco/opencode/issues/64003) desktop: Linux native menu bar is auto-hidden, dismisses on any click, and cannot be pinned `type/feature` `area/desktop` `version/v2` `platform/linux` 💬1
- [#64002](https://github.com/anomalyco/opencode/issues/64002) provider/zai: image generation fails with "zai/zai-images does not support n" `type/bug` `area/providers` `version/v2` `platform/linux` 💬1
- [#64001](https://github.com/anomalyco/opencode/issues/64001) desktop: View menu drops command items — no Toggle Terminal / Toggle Sidebar (2.3.0, Linux) `type/support` `area/desktop` `version/v2` `platform/linux` 💬1
- [#63999](https://github.com/anomalyco/opencode/issues/63999) server: managed provider model list stale for days after network outage; restart does not force resync `type/bug` `area/providers` `inference/zen` `inference/free-tier` 💬1
- [#63997](https://github.com/anomalyco/opencode/issues/63997) tui: after the background service restarts, --session TUIs show the home screen and --prompt is submitted again `type/bug` `area/tui` `version/v2` `platform/macos` 💬1
- [#63993](https://github.com/anomalyco/opencode/issues/63993) [FEATURE]: Show related fork sessions as contextual TUI tabs `type/feature` `area/tui` `version/v2` `platform/windows` 💬1
- [#63996](https://github.com/anomalyco/opencode/issues/63996) TUI: composer subagents tab walks every session while the tab is closed `type/feature` `area/tui` `version/v2` 💬1
- [#63994](https://github.com/anomalyco/opencode/issues/63994) free-usage-limit problem `type/bug` `area/providers` `inference/free-tier` `version/v2` 💬1
- [#63991](https://github.com/anomalyco/opencode/issues/63991) [FEATURE]: TUI: add Delete and Fork to the session tab menu `type/feature` `area/tui` `version/v2` `platform/windows` 💬1
- [#63990](https://github.com/anomalyco/opencode/issues/63990) [FEATURE]: GUI plugins for sessions on every connected server, in the web app and Desktop `type/feature` `area/plugins` `version/v2` 💬1
- [#63987](https://github.com/anomalyco/opencode/issues/63987) subagent: resume fails — sessionID emitted as bare "ses" prefix; completion reports omit sessionID `type/bug` `area/core` `version/v2` `platform/linux` 💬1
- [#63985](https://github.com/anomalyco/opencode/issues/63985) tool-use: streamed tool-call arguments drop to empty {} placeholder, session hangs (GLM-5.3 via ollama-cloud) `triaging` `type/bug` `area/model-behavior` `version/v2` 💬1
- [#63983](https://github.com/anomalyco/opencode/issues/63983) Show free-tier usage, remaining quota, and warnings before reaching the limit `type/feature` `area/tui` `inference/free-tier` `version/v2` 💬1
- [#63981](https://github.com/anomalyco/opencode/issues/63981) [FEATURE]: Configurable editing tool selection and patch result style `type/feature` `area/core` `version/v2` 💬1
- [#63970](https://github.com/anomalyco/opencode/issues/63970) File menu not hiding submenus when moving to the next element in the menu `type/bug` `area/desktop` `version/v2` `platform/windows` 💬1

#### 🔒 Closed Issues
- [#63935](https://github.com/anomalyco/opencode/issues/63935) Prompt cache is lost on about one request in three when only reasoning_effort changes (opencode-go, /zen/go/v1, deepseek-v4.1-flash)
- [#63902](https://github.com/anomalyco/opencode/issues/63902) mcp: tools.browse.execute runs code in the Code Mode sandbox instead of the browse relay
- [#63971](https://github.com/anomalyco/opencode/issues/63971) tui: hardware cursor paints at intermediate cells while a response streams (no cursor hide, no sync output)
- [#63931](https://github.com/anomalyco/opencode/issues/63931) network: MAC address spoofing to bypass rate limits on free models
- [#63952](https://github.com/anomalyco/opencode/issues/63952) when i used for a full day a deepseek model or i think even any chinese model when it was used for too much time it starts saying chinese words
- [#63947](https://github.com/anomalyco/opencode/issues/63947) [FEATURE]: Control Plus Arrows || (numlock OFF) Arrows
- [#63932](https://github.com/anomalyco/opencode/issues/63932) Collapsible thoughts 2.30
- [#63930](https://github.com/anomalyco/opencode/issues/63930) menu doesnt work.
- [#64004](https://github.com/anomalyco/opencode/issues/64004) Usage not reseting
- [#64002](https://github.com/anomalyco/opencode/issues/64002) provider/zai: image generation fails with "zai/zai-images does not support n"
- [#64001](https://github.com/anomalyco/opencode/issues/64001) desktop: View menu drops command items — no Toggle Terminal / Toggle Sidebar (2.3.0, Linux)
- [#63997](https://github.com/anomalyco/opencode/issues/63997) tui: after the background service restarts, --session TUIs show the home screen and --prompt is submitted again
- [#63994](https://github.com/anomalyco/opencode/issues/63994) free-usage-limit problem
- [#63987](https://github.com/anomalyco/opencode/issues/63987) subagent: resume fails — sessionID emitted as bare "ses" prefix; completion reports omit sessionID
- [#63983](https://github.com/anomalyco/opencode/issues/63983) Show free-tier usage, remaining quota, and warnings before reaching the limit
- [#63970](https://github.com/anomalyco/opencode/issues/63970) File menu not hiding submenus when moving to the next element in the menu

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 30,370 · **Open issues:** 2,305 · **Last push:** <1h ago

On November 15, 2026, Qwen Code released version v0.27.2-nightly.20261113.6f754be654, which introduced a feature allowing managed agents to register client filesystems into managed sessions and improved web shell functionality by enabling the opening of the shadow overview from its footer entry. Additionally, merged pull request #17264 implemented a new capability for the Hosted Harness model to run on the shared agent loop, enhancing its operational efficiency. A notable issue raised today was #17278, which reported failures in the main CI related to the E2E tests for the interactive TUI memory manager, indicating potential instability in that area. Other significant concerns included issues with the Web Shell on Windows that caused numerous command prompt windows to open, as well as requests for multi-workspace daemon support on the Goals page.

#### 🚀 New Releases
- [v0.27.2-nightly.20261113.6f754be654](https://github.com/QwenLM/qwen-code/releases/tag/v0.27.2-nightly.20261113.6f754be654) Release v0.27.2-nightly.20261113.6f754be654

#### ✅ Merged PRs
- [#17264](https://github.com/QwenLM/qwen-code/pull/17264) feat(serve): run the Hosted Harness model round on the shared agent loop

#### 🐛 New Issues
- [#17278](https://github.com/QwenLM/qwen-code/issues/17278) Main CI failed: E2E Tests — interactive/tui-memory-manager.test.ts [ interactive/tui-memory-manager.test.ts ] `status/needs-triage` `type/bug` 💬3
- [#17266](https://github.com/QwenLM/qwen-code/issues/17266) Web Shell on Windows: "Toggle environment information" causes a storm of visible cmd.exe windows and overlapping git polls `priority/P2` `type/bug` `category/platform` `scope/git` 💬3
- [#17275](https://github.com/QwenLM/qwen-code/issues/17275) Web Shell Goals page should support multi-workspace daemons `status/in-progress` `priority/P3` `type/feature-request` `category/ui` 💬3
- [#17261](https://github.com/QwenLM/qwen-code/issues/17261) [managed-agent] Content-only child agent launches but produces no output until turn deadline (hosted_turn_deadline_exceeded) `status/need-retesting` `priority/P2` `type/bug` `category/core` 💬3
- [#17262](https://github.com/QwenLM/qwen-code/issues/17262) deflake: packages/cli/src/serve/managed-runtime-terminal.test.ts › ManagedRuntimeTerminals › replays scrollback on reconnect of the same Session `duplicate` `autofix/skip` `autofix/in-progress` 💬3
- [#17247](https://github.com/QwenLM/qwen-code/issues/17247) managed-agent: public child-agent delegation is refused on external-workspace profiles (Public child recovery profile changed) `status/need-information` `priority/P3` `type/bug` `category/integration` 💬3
- [#17243](https://github.com/QwenLM/qwen-code/issues/17243) deflake: integrations/external-context/src/provider-extension-local.test.ts › local provider extension example > packs an executable that fails fast without provider configuration `priority/P3` `type/bug` `category/development` `scope/testing` 💬3
- [#17306](https://github.com/QwenLM/qwen-code/issues/17306) feat(core): carry the truncation output budget into subagent and ACP/daemon write rejections `priority/P3` `status/blocked` `category/core` `scope/token-management` 💬2
- [#17302](https://github.com/QwenLM/qwen-code/issues/17302) docs(design): translate generation-stats to Chinese `status/in-review` `priority/P3` `type/documentation` `category/development` 💬2
- [#17303](https://github.com/QwenLM/qwen-code/issues/17303) docs(design): translate github-channel-publication-contract to Chinese 💬2
- [#17298](https://github.com/QwenLM/qwen-code/issues/17298) Main CI failed: E2E Tests — interactive/tui-memory-manager.test.ts > Memory B: actual preferred User context and newly created Project fi… (+5 more) `status/needs-triage` `type/bug` 💬2
- [#17289](https://github.com/QwenLM/qwen-code/issues/17289) Custom commands alter `$$`, `$&`, `` $` `` and `$'` in typed arguments `priority/P2` `type/bug` `category/cli` `scope/commands` 💬2
- [#17290](https://github.com/QwenLM/qwen-code/issues/17290) Web Shell: "Ask for details" HTML page ignores the "Language: Model output" setting (always the UI locale language) `priority/P3` `category/ui` `scope/settings` `type/enhancement` 💬2
- [#17287](https://github.com/QwenLM/qwen-code/issues/17287) Ideas for making your CI faster `priority/P3` `type/feature-request` `category/development` `scope/ci-cd` 💬2
- [#17288](https://github.com/QwenLM/qwen-code/issues/17288) How can I report a security vulnerability privately? `priority/P1` `type/documentation` `category/security` 💬2
- [#17284](https://github.com/QwenLM/qwen-code/issues/17284) Agent loop: what #17045 leaves to a follow-up `priority/P2` `type/feature-request` `category/core` `roadmap/session-management` 💬2
- [#17274](https://github.com/QwenLM/qwen-code/issues/17274) Absurdo `status/need-information` `type/bug` `type/badcase` 💬2
- [#17270](https://github.com/QwenLM/qwen-code/issues/17270) Web Shell: selection menu does not appear when a full line is selected (triple-click or drag to the line edge) `priority/P3` `type/bug` `category/ui` `scope/web-shell` 💬2
- [#17267](https://github.com/QwenLM/qwen-code/issues/17267) feat(web-shell): surface pending loop wakeups (loop_wakeup) — "Scheduled tasks" page + per-session indicator (0.27.2) `priority/P3` `type/feature-request` `category/ui` `roadmap/background-automation` 💬2
- [#17260](https://github.com/QwenLM/qwen-code/issues/17260) [managed-agent] Stale public-child CANCELLING turn loops forever in recovery after shell→external-files topology migration `priority/P2` `type/bug` `category/integration` `scope/session-management` 💬2
- [#17258](https://github.com/QwenLM/qwen-code/issues/17258) Subscription models: window-budgeted output cap conflicts with fixed thinking_budget — "max_completion_tokens [4000] must be greater than thinking_budget [16384]" `priority/P1` `type/bug` `category/core` `scope/token-management` 💬2
- [#17252](https://github.com/QwenLM/qwen-code/issues/17252) deflake: packages/web-shell/client/e2e/web-shell.turn-navigation-scroll-follow.spec.ts › global turn navigation follows transcript scrolling @smoke `status/ready-for-agent` `autofix/in-progress` 💬2
- [#17251](https://github.com/QwenLM/qwen-code/issues/17251) Archiving a session still loaded in another daemon recreates a zombie live transcript ("history gap") `priority/P2` `type/bug` `category/core` `scope/session-management` 💬2
- [#17245](https://github.com/QwenLM/qwen-code/issues/17245) regular timeout to llama.cpp server `status/need-information` `priority/P2` `type/bug` `category/core` 💬2
- [#17215](https://github.com/QwenLM/qwen-code/issues/17215) [Feature] Add WeCom group-webhook delivery to Channels and Web Shell `priority/P3` `type/feature-request` `category/integration` `roadmap/background-automation` 💬2
- [#17315](https://github.com/QwenLM/qwen-code/issues/17315) feat(core): derive image token estimates from resolution instead of the flat constant 💬1
- [#17313](https://github.com/QwenLM/qwen-code/issues/17313) feat(core): give the model a context-remaining tool and a self-triggered compaction path 💬1
- [#17312](https://github.com/QwenLM/qwen-code/issues/17312) ci: ephemeral runner manager retries blind through a quota window and never alarms `status/needs-triage` `type/bug` `scope/github-actions` `scope/ci-cd` 💬1
- [#17311](https://github.com/QwenLM/qwen-code/issues/17311) ci: give the ephemeral runner manager a credential identity that does not share an API quota with maintainers `priority/P1` `status/needs-triage` `type/feature-request` `scope/github-actions` 💬1
- [#17308](https://github.com/QwenLM/qwen-code/issues/17308) Release Failed for v0.27.4 on 2026-11-15 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#17305](https://github.com/QwenLM/qwen-code/issues/17305) Release Failed for v0.27.4 on 2026-11-15 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#17297](https://github.com/QwenLM/qwen-code/issues/17297) Release Failed for v0.27.3-nightly.20261114.90be7c869f on 2026-11-15 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#17293](https://github.com/QwenLM/qwen-code/issues/17293) Release Failed for v0.27.4 on 2026-11-14 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#17292](https://github.com/QwenLM/qwen-code/issues/17292) Release Failed for v0.27.4 on 2026-11-14 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#17314](https://github.com/QwenLM/qwen-code/issues/17314) feat(core): carry recent failed tool attempts into the compaction input

#### 🔒 Closed Issues
- [#17275](https://github.com/QwenLM/qwen-code/issues/17275) Web Shell Goals page should support multi-workspace daemons
- [#17243](https://github.com/QwenLM/qwen-code/issues/17243) deflake: integrations/external-context/src/provider-extension-local.test.ts › local provider extension example > packs an executable that fails fast without provider configuration
- [#17303](https://github.com/QwenLM/qwen-code/issues/17303) docs(design): translate github-channel-publication-contract to Chinese
- [#17215](https://github.com/QwenLM/qwen-code/issues/17215) [Feature] Add WeCom group-webhook delivery to Channels and Web Shell

### Claude Code Skills (`anthropics/skills`)

Top open skill PRs by community engagement:
- [#1742](https://github.com/anthropics/skills/pull/1742) fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers
- [#1298](https://github.com/anthropics/skills/pull/1298) fix(skill-creator): isolate trigger evals and handle Windows and runtime failures
- [#1245](https://github.com/anthropics/skills/pull/1245) Add notion-spec-to-implementation and quantitative-resume-auditor skills
- [#1980](https://github.com/anthropics/skills/pull/1980) webapp-testing: avoid shell=True in with_server.py
- [#1792](https://github.com/anthropics/skills/pull/1792) fix(docx): report LibreOffice timeout as an error and verify the output

_Quiet today: Gemini CLI_

---

## 🦞 OpenClaw Ecosystem

### OpenClaw (`openclaw/openclaw`)

**Stars:** 394,463 · **Open issues:** 8,472 · **Last push:** <1h ago

On November 15, 2026, OpenClaw released version v2026.11.5-beta.3, which introduces significant improvements in large-session reliability by reducing memory pressure during transcript indexing, trimming, and compaction, as well as ensuring restart and delivery safety through permission ceilings on queued messages. Key merged pull requests included enhancements to session performance by minimizing queries in full context snapshots and the identification of the serving process in local startup probes, alongside numerous critical bug fixes such as resolving issues with active memory recall and invalid input reporting in MCP declarations. A notable new bug was reported concerning the updater-runtime-retention failing to manage hard-links under specific conditions, highlighting ongoing challenges in system stability amidst the enhancements.

#### 🚀 New Releases
- [v2026.11.5-beta.3](https://github.com/openclaw/openclaw/releases/tag/v2026.11.5-beta.3) openclaw 2026.11.5-beta.3

#### ✅ Merged PRs
- [#199344](https://github.com/openclaw/openclaw/pull/199344) fix(update): dev update replays one local-commit conflict across every candidate
- [#198598](https://github.com/openclaw/openclaw/pull/198598) fix(templates): invalid MCP declarations report only "Invalid input"
- [#198586](https://github.com/openclaw/openclaw/pull/198586) fix: templates build rejects BOOTSTRAP.md that passes validation
- [#199366](https://github.com/openclaw/openclaw/pull/199366) fix(ci): spread cold release work across existing jobs
- [#183729](https://github.com/openclaw/openclaw/pull/183729) fix: Doctor stays silent when personal recall lacks Active Memory
- [#199362](https://github.com/openclaw/openclaw/pull/199362) fix(ci): admit bounded Gateway audit captures
- [#199226](https://github.com/openclaw/openclaw/pull/199226) improve: use OpenClaw consistently as the app name
- [#199356](https://github.com/openclaw/openclaw/pull/199356) feat(gateway): identify the serving process in local startup probes
- [#198552](https://github.com/openclaw/openclaw/pull/198552) fix(openclaw-id): reopening an approved invite link is refused as already used
- [#199337](https://github.com/openclaw/openclaw/pull/199337) fix(update): runtime retention falls back from hard links without saying why
- [#199358](https://github.com/openclaw/openclaw/pull/199358) fix(ci): expose slow Bun staging phases
- [#199339](https://github.com/openclaw/openclaw/pull/199339) fix(feishu): escape Markdown link destinations in incoming posts
- [#198426](https://github.com/openclaw/openclaw/pull/198426) fix(claude-cli): follow-up turns on a warm process fail with "Native tool authority capture is no longer active"
- [#199325](https://github.com/openclaw/openclaw/pull/199325) perf(sessions): reduce queries in full context snapshots
- [#199307](https://github.com/openclaw/openclaw/pull/199307) fix(cli): cancel gateway call reads that land after Ctrl+C
- [#199053](https://github.com/openclaw/openclaw/pull/199053) fix(ci): retain worker delivery reporter in wrapper closure
- [#198765](https://github.com/openclaw/openclaw/pull/198765) fix(ci): retain public repo E2E timeout diagnostics
- [#198742](https://github.com/openclaw/openclaw/pull/198742) fix: keep automation reads working across detached gateway calls
- [#199313](https://github.com/openclaw/openclaw/pull/199313) fix(ui): triple-click selection stops at session links
- [#198659](https://github.com/openclaw/openclaw/pull/198659) fix(backup): prevent concurrent cleanup from interrupting verification
- [#199283](https://github.com/openclaw/openclaw/pull/199283) fix(agents): sessions_yield awaits wake-armed background commands in one-shot runs
- [#195669](https://github.com/openclaw/openclaw/pull/195669) fix(android): release stale camera activity after destruction
- [#199331](https://github.com/openclaw/openclaw/pull/199331) fix(ci): bound hosted main command test groups
- [#199332](https://github.com/openclaw/openclaw/pull/199332) fix(ui): remove duplicate plugin apps from the Apps directory
- [#199083](https://github.com/openclaw/openclaw/pull/199083) fix: accept authenticated receipt recovery in publication preflight
- [#199311](https://github.com/openclaw/openclaw/pull/199311) fix(ui): keep the composer expanded in wider windows
- [#199047](https://github.com/openclaw/openclaw/pull/199047) fix(e2e): recognize closed directory-watch helper lifetimes
- [#199319](https://github.com/openclaw/openclaw/pull/199319) refactor(bench): share inline command build verification
- [#199329](https://github.com/openclaw/openclaw/pull/199329) fix(ui): stop saved-message warnings flickering during refresh
- [#198980](https://github.com/openclaw/openclaw/pull/198980) fix(test): finish realtime proxy cleanup after closer failures
- [#199292](https://github.com/openclaw/openclaw/pull/199292) fix(web-fetch): escape Markdown link syntax in extracted anchors
- [#198454](https://github.com/openclaw/openclaw/pull/198454) improve(browser): show the agent a Browser panel note only during take-over
- [#198489](https://github.com/openclaw/openclaw/pull/198489) test(update): run the published-driver cell on a linked package path
- [#199312](https://github.com/openclaw/openclaw/pull/199312) fix(ci): unblock Activity unused-export checks
- [#199197](https://github.com/openclaw/openclaw/pull/199197) fix(automations): scheduled runs can't read or save their own scratch
- [#199297](https://github.com/openclaw/openclaw/pull/199297) perf(sessions): prepare event sharing only for target checks
- [#199277](https://github.com/openclaw/openclaw/pull/199277) improve: render large plugin inventories faster in WebKit
- [#198697](https://github.com/openclaw/openclaw/pull/198697) fix(cron): run keeps owner-private memory after its requester loses owner status
- [#199156](https://github.com/openclaw/openclaw/pull/199156) fix(bonjour): Bonjour discovery fails on npm installs of 2026.11.5 betas
- [#199306](https://github.com/openclaw/openclaw/pull/199306) perf(sandbox): reuse prepared workspace transport and unchanged packs
- [#199202](https://github.com/openclaw/openclaw/pull/199202) chore(ui): refresh control ui locales
- [#199198](https://github.com/openclaw/openclaw/pull/199198) improve(ui): remove Start if due from automation menus
- [#199304](https://github.com/openclaw/openclaw/pull/199304) fix(ci): keep isolated Gateway tests out of methods inventory
- [#199303](https://github.com/openclaw/openclaw/pull/199303) fix(ui): restore blocked palette submission e2e coverage
- [#199136](https://github.com/openclaw/openclaw/pull/199136) improve: speed up Control UI device authentication
- [#198194](https://github.com/openclaw/openclaw/pull/198194) fix(gateway): reduce resident memory on constrained hosts
- [#199237](https://github.com/openclaw/openclaw/pull/199237) perf(agents): avoid token-pressure match allocations
- [#199293](https://github.com/openclaw/openclaw/pull/199293) chore(ui): refresh control ui locales
- [#199214](https://github.com/openclaw/openclaw/pull/199214) fix(ci): dependency check fails on the web push benchmark's OpenSSL call
- [#199230](https://github.com/openclaw/openclaw/pull/199230) test(release): preflight consumer fixtures miss trusted tooling imports
- [#199221](https://github.com/openclaw/openclaw/pull/199221) fix(ui): Cmd+K image attachments do not open previews
- [#195410](https://github.com/openclaw/openclaw/pull/195410) improve(ui): make chat messages calmer and easier to read
- [#199168](https://github.com/openclaw/openclaw/pull/199168) improve(ui): remove browser-local Activity tool feed
- [#199250](https://github.com/openclaw/openclaw/pull/199250) fix(acpx): Codex ACP sessions ignore the configured model_context_window
- [#199252](https://github.com/openclaw/openclaw/pull/199252) perf(ai): inspect unchanged Anthropic hook history once
- [#199256](https://github.com/openclaw/openclaw/pull/199256) chore(ui): account for route byte costs after paydown
- [#199244](https://github.com/openclaw/openclaw/pull/199244) perf(trajectory): reuse field encodings while reducing oversized events
- [#199233](https://github.com/openclaw/openclaw/pull/199233) perf(sessions): avoid renormalizing resolved session store paths
- [#199170](https://github.com/openclaw/openclaw/pull/199170) improve(ui): remove the Usage conversation reader
- [#199212](https://github.com/openclaw/openclaw/pull/199212) perf(sessions): reuse retained partitions for owner counts
- [#199228](https://github.com/openclaw/openclaw/pull/199228) perf(agents): yield during long subagent registry sweeps
- [#199224](https://github.com/openclaw/openclaw/pull/199224) fix(ui): restore upload and channel setup e2e checks
- [#199196](https://github.com/openclaw/openclaw/pull/199196) perf(ui): keep session-management English out of boot
- [#199234](https://github.com/openclaw/openclaw/pull/199234) perf(ai): remove recursive diagnostic field-reader allocation
- [#199142](https://github.com/openclaw/openclaw/pull/199142) improve(ui): keep composer predictions compact and readable
- [#199222](https://github.com/openclaw/openclaw/pull/199222) fix(exec): adopted durable commands claim no exit wake after a Gateway restart
- [#194224](https://github.com/openclaw/openclaw/pull/194224) fix(ios): chat reconnects load the transcript before refreshing catalogs
- [#199191](https://github.com/openclaw/openclaw/pull/199191) perf(sessions): share patch encodings across delivery histories
- [#199236](https://github.com/openclaw/openclaw/pull/199236) chore(ui): refresh control ui locales
- [#199113](https://github.com/openclaw/openclaw/pull/199113) fix(exec): agent gets one wake turn per command when background commands exit together
- [#199165](https://github.com/openclaw/openclaw/pull/199165) improve(ui): keep agent tab icons circular
- [#199186](https://github.com/openclaw/openclaw/pull/199186) fix: cancel response bodies after headers with foreign signals
- [#199177](https://github.com/openclaw/openclaw/pull/199177) perf(ui): skip anchor fallbacks for hidden overlays
- [#199204](https://github.com/openclaw/openclaw/pull/199204) perf(ai): reuse Anthropic history bytes after payload hook edits
- [#194823](https://github.com/openclaw/openclaw/pull/194823) feat(backup): omit Doctor migration originals from archives on request
- [#198986](https://github.com/openclaw/openclaw/pull/198986) fix(ui): empty model picker leaves an effort-control gap on narrow screens
- [#199220](https://github.com/openclaw/openclaw/pull/199220) chore(ui): refresh control ui locales
- [#199157](https://github.com/openclaw/openclaw/pull/199157) improve(ui): remove image galleries from Activity
- [#199181](https://github.com/openclaw/openclaw/pull/199181) fix(ui): keep older history still after prepend measurement
- [#199173](https://github.com/openclaw/openclaw/pull/199173) fix(ui): Cmd+K loses its mode on reload and ignores Cmd+Enter in Search
- [#199161](https://github.com/openclaw/openclaw/pull/199161) improve(ui): remove Usage Activity by time
- [#199160](https://github.com/openclaw/openclaw/pull/199160) improve(ui): remove Usage Recently viewed
- [#199190](https://github.com/openclaw/openclaw/pull/199190) perf(sessions): check row currency before classifying incognito keys
- [#199171](https://github.com/openclaw/openclaw/pull/199171) fix(ui): provider logos look different sizes in the model picker
- [#199016](https://github.com/openclaw/openclaw/pull/199016) fix(gateway): stop legacy Claude CLI gap notes from duplicating user messages (#198606)
- [#199094](https://github.com/openclaw/openclaw/pull/199094) improve: stop recommending tables in progress cards
- [#199166](https://github.com/openclaw/openclaw/pull/199166) fix(ui): clarify the Activity pulse chart
- [#199122](https://github.com/openclaw/openclaw/pull/199122) fix(agents): wake on every background exit and carry the result
- [#199085](https://github.com/openclaw/openclaw/pull/199085) fix(gateway): durable execs are reported as stopped after a Gateway restart
- [#199140](https://github.com/openclaw/openclaw/pull/199140) improve(ui): explain notification fields and agent work clearly
- [#199108](https://github.com/openclaw/openclaw/pull/199108) fix(irc): tab-separated words are joined together in sent messages
- [#199081](https://github.com/openclaw/openclaw/pull/199081) fix(perf): measure live Control UI boots without readiness polling
- [#199143](https://github.com/openclaw/openclaw/pull/199143) fix(ui): distinguish billing failures and explain usage cost averages
- [#199148](https://github.com/openclaw/openclaw/pull/199148) fix(gateway): resume interrupted sessions while other agents start
- [#199100](https://github.com/openclaw/openclaw/pull/199100) improve(ui): explain approval access and recorded decisions clearly
- [#199077](https://github.com/openclaw/openclaw/pull/199077) improve: make the command palette bottom bar compact and quieter
- [#199169](https://github.com/openclaw/openclaw/pull/199169) fix(telegram): edited-caption history test fails on every changed-extensions run
- [#199132](https://github.com/openclaw/openclaw/pull/199132) fix: long automation prompts crowd out settings
- [#199144](https://github.com/openclaw/openclaw/pull/199144) fix(ui): avoid unsupported claims in diagnostic states
- [#199134](https://github.com/openclaw/openclaw/pull/199134) improve(ui): clarify browser annotations and device recovery guidance
- [#199130](https://github.com/openclaw/openclaw/pull/199130) fix(ui): clarify configured channels and skill removal
- [#199127](https://github.com/openclaw/openclaw/pull/199127) fix(ui): qualify transcript search and pending stop notices
- [#199112](https://github.com/openclaw/openclaw/pull/199112) improve(ui): correct Settings descriptions and clarify agent setup
- [#199104](https://github.com/openclaw/openclaw/pull/199104) fix(ui): describe condition-triggered automations accurately
- [#199138](https://github.com/openclaw/openclaw/pull/199138) perf(push): reuse VAPID signatures across notification sends
- [#199098](https://github.com/openclaw/openclaw/pull/199098) fix: reject pending worktree merges before recovery capture
- [#199141](https://github.com/openclaw/openclaw/pull/199141) fix: unblock complete plugin release publication
- [#199137](https://github.com/openclaw/openclaw/pull/199137) fix: model refresh fails with empty legacy Codex auth file
- [#199126](https://github.com/openclaw/openclaw/pull/199126) fix: report native Gateway subscriber buffer overflows
- [#199121](https://github.com/openclaw/openclaw/pull/199121) fix(gateway): dedupe legacy Claude CLI gap-only turns
- [#199089](https://github.com/openclaw/openclaw/pull/199089) fix(ui): remove excess space before the model picker chevron
- [#198078](https://github.com/openclaw/openclaw/pull/198078) fix(ui): conversation Markdown copy includes tool calls and tool output
- [#199135](https://github.com/openclaw/openclaw/pull/199135) chore(i18n): refresh native locales
- [#199050](https://github.com/openclaw/openclaw/pull/199050) fix(sessions): keep the canonical abort outcome when compaction is interrupted
- [#199133](https://github.com/openclaw/openclaw/pull/199133) chore(ui): refresh control ui locales
- [#198909](https://github.com/openclaw/openclaw/pull/198909) perf(ui): simplify Skills inventory status rendering
- [#197704](https://github.com/openclaw/openclaw/pull/197704) feat(cron): persist per-job Access selection
- [#199096](https://github.com/openclaw/openclaw/pull/199096) improve(ui): clarify everyday prompts and restore the Inbox empty state
- [#199062](https://github.com/openclaw/openclaw/pull/199062) chore(ci): cover the compaction subprocess entry in deadcode tests
- [#199021](https://github.com/openclaw/openclaw/pull/199021) fix: recover qualification receipts with approved release waivers
- [#199086](https://github.com/openclaw/openclaw/pull/199086) improve: show send shortcuts in the new-session tooltip
- [#199117](https://github.com/openclaw/openclaw/pull/199117) chore(ui): refresh control ui locales
- [#199099](https://github.com/openclaw/openclaw/pull/199099) perf(sessions): reuse broadcast bytes and skip excluded-row disclosure
- [#199103](https://github.com/openclaw/openclaw/pull/199103) fix(ui): wait for offline toast renderer in browser CI
- [#198246](https://github.com/openclaw/openclaw/pull/198246) improve(ios): isolate typing updates in slash-command suggestions
- [#198247](https://github.com/openclaw/openclaw/pull/198247) fix(ios): avoid blocking chat while decoding history
- [#198112](https://github.com/openclaw/openclaw/pull/198112) fix: unrelated Gateway traffic crowds native chat event queues
- [#199078](https://github.com/openclaw/openclaw/pull/199078) improve(ui): declutter new-session context pickers
- [#198684](https://github.com/openclaw/openclaw/pull/198684) fix(gateway): discard queued input after node unpairing
- [#198891](https://github.com/openclaw/openclaw/pull/198891) feat(ui): show what an idle chat is waiting on

#### 🐛 New Issues
- [#199030](https://github.com/openclaw/openclaw/issues/199030) [Bug]: updater-runtime-retention hard-links nothing (linked 0, copied 162786) when an explicit temp dir is on another Btrfs subvolume `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬4
- [#198995](https://github.com/openclaw/openclaw/issues/198995) [Bug]: X mention polling buffers every page before delivery without any page or byte bound `bug` `no-stale` `bug:behavior` `P2` 💬4
- [#198757](https://github.com/openclaw/openclaw/issues/198757) [Bug]: Windows 陈旧 Gateway 锁恢复被 pid-alive.ts 两个 bug 卡死 — readNativeLiveness catch + isPidDefinitelyDead 无 Windows fallback` `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬4
- [#198985](https://github.com/openclaw/openclaw/issues/198985) [Bug]: My sessions sidebar narrows to one agent when opening a cross-agent conversation `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#198602](https://github.com/openclaw/openclaw/issues/198602) [Bug]: DM follow-up queue retries forever: channel restart recovery requires source-keyed user-turn admission `P1` `impact:message-loss` 💬3
- [#199355](https://github.com/openclaw/openclaw/issues/199355) video_generate: OpenRouter returns HTTP 401 "User not found" while same key succeeds via curl `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `impact:security` 💬2
- [#199328](https://github.com/openclaw/openclaw/issues/199328) sessions_send to a session with a running turn: input rejected with ActiveTurnClaimError, stored as interrupted, never delivered `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬2
- [#199316](https://github.com/openclaw/openclaw/issues/199316) [Bug]: kimi-coding: interim assistant text arrives without commentary phase signature — progress drafts show no commentary rows `bug` `bug:behavior` `P3` `clawsweeper:no-new-fix-pr` 💬2
- [#198864](https://github.com/openclaw/openclaw/issues/198864) [Feature]: Hand off blocked desktop tasks on iOS and Android `P2` `issue-rating: 🌊 off-meta tidepool` `impact:ux-friction` 💬2
- [#199207](https://github.com/openclaw/openclaw/issues/199207) MCP tool manifest collapses to core-only tools (e.g. only message tool survives) on "reuse=reusable-drift:system-prompt" session reuse path; also causes "no active tool authority snapshot" errors `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#199209](https://github.com/openclaw/openclaw/issues/199209) Use OpenClaw consistently for the app, reserving dashboards for the feature `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬2
- [#198758](https://github.com/openclaw/openclaw/issues/198758) [Bug]: On `main`, the Templates catalog lists 150 official Templates that cannot be opened or added (retired `packages` key) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬2
- [#198902](https://github.com/openclaw/openclaw/issues/198902) OpenClaw 2026.10.3 arm64: local Gateway startup fails with “Permission denied” `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `P0` `issue-rating: 🦪 silver shellfish` 💬2
- [#198824](https://github.com/openclaw/openclaw/issues/198824) Empty-response recovery gives up after one repair attempt, with no configuration surface to raise it `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬2
- [#198848](https://github.com/openclaw/openclaw/issues/198848) [Bug]: HEARTBEAT.md over 256 KiB or not UTF-8 passes templates validate, inspect and build, then Add planning fails with a generic CLI error `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#198846](https://github.com/openclaw/openclaw/issues/198846) [Bug]: Successful remote exec approval completion fails to resume main session with SESSION_WORK_START_CHANGED (2026.11.3) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬2
- [#198817](https://github.com/openclaw/openclaw/issues/198817) [Feature]: Let Logbook Ask retrieve relevant details from older observations `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#198685](https://github.com/openclaw/openclaw/issues/198685) Fix remaining .slice(0, N) calls on text content that can split emoji/surrogate pairs `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬2
- [#198636](https://github.com/openclaw/openclaw/issues/198636) Identical inbound messages are admitted separately: six copies, no dedupe observed on the intake path `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#198635](https://github.com/openclaw/openclaw/issues/198635) Followup queue drain repeats ~71,000 times in 12 hours, with no backoff `P1` `impact:message-loss` 💬2
- [#198584](https://github.com/openclaw/openclaw/issues/198584) [Bug]: Tool-free completion relay turns receive continuation instructions and report spurious task failures `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#199378](https://github.com/openclaw/openclaw/issues/199378) Talk voice consults fail on Claude CLI and locked native-harness chats that answer typed messages `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#199373](https://github.com/openclaw/openclaw/issues/199373) [Bug]: 2026.11.1 Control UI lists ACP sessions of agents not in agents.entries but cannot open or delete them ("Unknown agent id") `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#199364](https://github.com/openclaw/openclaw/issues/199364) [Bug]: iOS dashboard view prevents opening the selected conversation chat `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#199350](https://github.com/openclaw/openclaw/issues/199350) Update failure: package-doctor (2026.11.5-beta.3) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#199345](https://github.com/openclaw/openclaw/issues/199345) [Bug]: claude-cli runtime: steer is admitted as a new turn instead of joining the live run `P2` `impact:session-state` 💬1
- [#199341](https://github.com/openclaw/openclaw/issues/199341) [Bug]: Compaction summary keeps credentials printed by a failed tool call `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#199340](https://github.com/openclaw/openclaw/issues/199340) Docker build: source chmod steps take ~5 min on overlayfs builders `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#199336](https://github.com/openclaw/openclaw/issues/199336) [Feature]: Stable incremental usage record export (Gateway method) so dashboards stop reading internal SQLite `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#199335](https://github.com/openclaw/openclaw/issues/199335) [Feature]: Stable incremental usage record export (Gateway method) so dashboards stop reading internal SQLite `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#199326](https://github.com/openclaw/openclaw/issues/199326) cache_entries cost-usage cache: add configurable TTL + periodic expired-row reclamation `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#199318](https://github.com/openclaw/openclaw/issues/199318) Consolidate inline-command benchmark build verification `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#199327](https://github.com/openclaw/openclaw/issues/199327) [Bug]: Every session MCP runtime eagerly compiles an output-schema validator for every tool (~15–20 MB per runtime, nothing shared) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#199324](https://github.com/openclaw/openclaw/issues/199324) [Windows] Stability report after 2026.10.7 → 2026.11.3: multi-minute startup, successful upgrades recorded as failed, recurring runtime warnings `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬1
- [#199065](https://github.com/openclaw/openclaw/issues/199065) [Bug]: Browser microphone permission prompt stops Control UI dictation `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#199194](https://github.com/openclaw/openclaw/issues/199194) Automations: scheduled runs can't read or save their own scratch on main ("Automation not found") `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#198695](https://github.com/openclaw/openclaw/issues/198695) Automation run keeps owner-private memory after its requester loses owner status while it waits for a run slot `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#199291](https://github.com/openclaw/openclaw/issues/199291) [Bug]: Control UI hides an assistant reply that completed before a steered follow-up in the same run `P2` `clawsweeper:needs-info` `issue-rating: 🦐 gold shrimp` `impact:ux-friction` 💬1
- [#199290](https://github.com/openclaw/openclaw/issues/199290) [Bug]: main/systemEvent scheduled turns hit account refusal but capture/Doctor exclude them (2026.11.5-beta.2) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#199278](https://github.com/openclaw/openclaw/issues/199278) [Bug]: A turn sent from a scheduled run to a busy Claude CLI session fails with "Cron occurrence source authority is no longer active" `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬1
- [#199260](https://github.com/openclaw/openclaw/issues/199260) [Feature]: Protected website accounts: sign up and log in without the model seeing credentials (tracking) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#199264](https://github.com/openclaw/openclaw/issues/199264) [Feature]: Protected browser profiles whose cookies and sessions the agent cannot read `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#199262](https://github.com/openclaw/openclaw/issues/199262) [Feature]: Capture a credential shown on a web page into the secret store `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#199263](https://github.com/openclaw/openclaw/issues/199263) [Feature]: Per-agent, per-site, expiring grants for website account actions with a value-free audit log `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#199261](https://github.com/openclaw/openclaw/issues/199261) [Feature]: Generate and store a website password at signup without the model seeing it `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#199251](https://github.com/openclaw/openclaw/issues/199251) Inline (config-backed) API keys ignore provider rate-limit deadlines: concurrent runs keep hitting 429 instead of waiting `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#199241](https://github.com/openclaw/openclaw/issues/199241) [Bug]: iOS Share forces low thinking and rejects models without that level `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#199185](https://github.com/openclaw/openclaw/issues/199185) [Bug]: foreign AbortSignals stop canceling SDK response bodies after headers `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#199216](https://github.com/openclaw/openclaw/issues/199216) [Bug]: Bundled hooks silently not loaded when the installed package files are hard-linked (hooks check: 0, internal-hooks=skipped) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#199106](https://github.com/openclaw/openclaw/issues/199106) IRC: tab-separated words are joined together in sent messages `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#199180](https://github.com/openclaw/openclaw/issues/199180) Agent spawn fails with 'context length exceeded' when using fork mode with large session history 💬1
- [#199174](https://github.com/openclaw/openclaw/issues/199174) [Feature]: Stop ask_user question expiry after user interaction `enhancement` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#199162](https://github.com/openclaw/openclaw/issues/199162) [Feature]: Bundled create-blobster skill and offline CLI avatar renderer `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#199114](https://github.com/openclaw/openclaw/issues/199114) [Bug]: Automations editor renders long prompts as an unbounded, cramped duplicate text block `bug` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬1
- [#199155](https://github.com/openclaw/openclaw/issues/199155) [Bug]: 2026.11.5-beta.2: a transcript row committed by another process (the CLI `message send` caller) is invisible to the gateway's resident session actor; the next append fails UNIQUE(transcript_events.session_id, seq) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#199151](https://github.com/openclaw/openclaw/issues/199151) [Docs Bug]: MCP OAuth docs say an agent can run `openclaw mcp login`, but it refuses while the Gateway runs `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#199152](https://github.com/openclaw/openclaw/issues/199152) [Bug]: Heartbeat turns triggered by system events (Slack button presses) drop the effective prompt; model sees only the placeholder 💬1
- [#199147](https://github.com/openclaw/openclaw/issues/199147) Answer single-choice questions with one tap instead of select-then-Submit `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#199115](https://github.com/openclaw/openclaw/issues/199115) [Bug]: Empty legacy Codex auth.json makes model refresh fail and shows a generic Automations warning `bug` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬1
- [#199131](https://github.com/openclaw/openclaw/issues/199131) [Bug]: memory_search loses prior private-session windows after session rollover (retained SQLite windows never enter the Memory Core corpus) `P2` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬1
- [#199118](https://github.com/openclaw/openclaw/issues/199118) [Bug]: LanceDB recall starts search after its deadline and reuses time spent preparing the table `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#199101](https://github.com/openclaw/openclaw/issues/199101) [Bug]: MCP Events accepts impossible calendar dates in callbacks and subscription expiry `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#199107](https://github.com/openclaw/openclaw/issues/199107) Signal: links with non-English characters are shown twice `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#199095](https://github.com/openclaw/openclaw/issues/199095) [Bug]: Android SMS and call-log commands turn JSON null into literal text `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#199084](https://github.com/openclaw/openclaw/issues/199084) [Bug]: Android system.notify replaces distinct notifications posted in the same millisecond `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#199088](https://github.com/openclaw/openclaw/issues/199088) [Bug]: iPhone Safari offers "AutoFill Contact" over the keyboard in the Control UI chat composer `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🦪 silver shellfish` 💬1
- [#198606](https://github.com/openclaw/openclaw/issues/198606) claude-cli: session-gap note leaks into chat as a duplicate user message when a replay block precedes it `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#199092](https://github.com/openclaw/openclaw/issues/199092) [Feature]: Protected secret egress for cron command payloads `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#199073](https://github.com/openclaw/openclaw/issues/199073) [Bug]: Kind helper overrides the explicitly selected container provider `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#199071](https://github.com/openclaw/openclaw/issues/199071) [Bug]: Gateway SSH tunnels retain diagnostics throughout the connection `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#199017](https://github.com/openclaw/openclaw/issues/199017) [Bug]: ACP session creation stays rate-limited after a backward system-clock adjustment `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#199070](https://github.com/openclaw/openclaw/issues/199070) [Bug]: Shared outbound delivery treats `messageId: "unknown"` as confirmed platform identity (Matrix empty receipt) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#199063](https://github.com/openclaw/openclaw/issues/199063) [Bug]: SearXNG preflight DNS ignores search cancellation and timeout `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#199010](https://github.com/openclaw/openclaw/issues/199010) --runtime bun broken on releases ≥ 2026.11.1: install.sh pin parser rejects booleans in openclaw-bun.json `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#199055](https://github.com/openclaw/openclaw/issues/199055) [Bug]: Wide-area discovery accepts domains that make the generated service name too long `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#199045](https://github.com/openclaw/openclaw/issues/199045) [Bug]: Wide-area discovery silently splits oversized TXT values `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#199028](https://github.com/openclaw/openclaw/issues/199028) Update failure: gateway-recovery-verification (2026.11.3) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#199033](https://github.com/openclaw/openclaw/issues/199033) Update failure: runtime-verification-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#199031](https://github.com/openclaw/openclaw/issues/199031) [Bug]: dev update preflight replays the same local-commit rebase conflict across all 10 candidates `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#199013](https://github.com/openclaw/openclaw/issues/199013) [Bug]: Named operator role's agent allowlist is not enforced for agents.files.* / agents.workspace.* `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#198927](https://github.com/openclaw/openclaw/issues/198927) [Bug]: file.fetch labels valid UTF-8 text as binary at the sniff boundary `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#199011](https://github.com/openclaw/openclaw/issues/199011) [Bug]: Google Meet Calendar pagination keeps requesting a repeated page token `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#199008](https://github.com/openclaw/openclaw/issues/199008) Plugin API to register secret values for redaction (secret-redaction-registry) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#198953](https://github.com/openclaw/openclaw/issues/198953) [Bug]: Geolocation cannot load gzip database URLs with query parameters or fragments `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#199004](https://github.com/openclaw/openclaw/issues/199004) [Feature]: Context engines cannot tell which admitted turn they assemble for, or where it came from `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#199001](https://github.com/openclaw/openclaw/issues/199001) [Bug]: npm package omits the workspace memory and skills worker entrypoints `bug` `bug:behavior` `P2` `impact:other` 💬1
- [#198997](https://github.com/openclaw/openclaw/issues/198997) [Bug]: MCP channel bridge keeps an unbounded pending Claude permission map `bug` `no-stale` `bug:behavior` `P2` 💬1
- [#198999](https://github.com/openclaw/openclaw/issues/198999) [Bug]: Inline SVG image downloads use .svg+xml instead of .svg `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#198987](https://github.com/openclaw/openclaw/issues/198987) [Docs Bug]: Device command guide incorrectly lists Android reminders support `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#198981](https://github.com/openclaw/openclaw/issues/198981) [Bug]: Kubernetes init-config reports success after configuration seeding fails `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#198978](https://github.com/openclaw/openclaw/issues/198978) [Bug]: Updating an A2A peer token removes its outbound URL and credential `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#198970](https://github.com/openclaw/openclaw/issues/198970) [Bug]: Codex model catalog timeout can abort replies before model fallback `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#198956](https://github.com/openclaw/openclaw/issues/198956) [Bug]: 2026.11.3: tool results reach the model without secret redaction (2026.10.8 redacted them) — intended? `bug` `regression` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#198958](https://github.com/openclaw/openclaw/issues/198958) [Bug]: memory-core heading-only chunk merge produces 8000-byte chunks that non-native OpenAI-compatible embedding endpoints reject (400/1210), aborting the whole index rebuild `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#198947](https://github.com/openclaw/openclaw/issues/198947) [Bug]: dir.list returns a non-advancing page for fractional maxEntries below one `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#198913](https://github.com/openclaw/openclaw/issues/198913) [Bug]: Kubernetes deployment help fails without a configured cluster `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#198910](https://github.com/openclaw/openclaw/issues/198910) [Feature]: Release-matched synthetic example for offline migration and lifecycle qualification `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#198901](https://github.com/openclaw/openclaw/issues/198901) [Bug]: Updated plugin SecretInput contracts stay stale across reload until a full gateway restart `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#198892](https://github.com/openclaw/openclaw/issues/198892) [Bug]: SSH config resolution changes identity filenames containing repeated whitespace `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#198743](https://github.com/openclaw/openclaw/issues/198743) [Bug]: Template automation `name` over 200 characters (or an oversized `heartbeat.every`) passes validation and fails Add after the agent is created `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#198877](https://github.com/openclaw/openclaw/issues/198877) [Feature]: Restore a "propose" mode for the Skill Workshop (draft, then human approval) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#198865](https://github.com/openclaw/openclaw/issues/198865) [Feature]: Open session files in the OS default app from the browser Control UI (webchat) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#198819](https://github.com/openclaw/openclaw/issues/198819) IMAP unsolicited FETCH updates can advance the cursor past unprocessed mail `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#198854](https://github.com/openclaw/openclaw/issues/198854) Gateway method / plugin-sdk API to send a Web Push notification to one user profile (`push.web.send`) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#198852](https://github.com/openclaw/openclaw/issues/198852) [Bug]: templates --json output uses a different success field and error shape in each subcommand `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#198850](https://github.com/openclaw/openclaw/issues/198850) [Bug]: Scripts in a Template's bundled skill lose their executable bit, so the added agent cannot run them `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#198847](https://github.com/openclaw/openclaw/issues/198847) [Bug]: templates validate, build and dev reject a project whose manifest is at nested/CLAW.md, which the docs allow `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#198838](https://github.com/openclaw/openclaw/issues/198838) [Bug]: Custom providers on api.anthropic.com get 400 "thinking block bound to a different conversation" on every request after a model switch `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#198834](https://github.com/openclaw/openclaw/issues/198834) [Feature]: Supported per-command isolated execution without replacing session filesystem tools `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#198826](https://github.com/openclaw/openclaw/issues/198826) automations tool: every action rejected by its own outputSchema (list and add) `P2` `clawsweeper:needs-info` `issue-rating: 🦐 gold shrimp` `impact:ux-friction` 💬1
- [#198830](https://github.com/openclaw/openclaw/issues/198830) LM Studio embedding preload requests the model max context (32768) and OOMs on a 16 GB host when no catalog entry exists `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#198782](https://github.com/openclaw/openclaw/issues/198782) Knowledge Scribes: Replace with new asks the scribe twice when retried after the connection drops `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#198811](https://github.com/openclaw/openclaw/issues/198811) [Feature]: Add an explicit way to remove a stored channel credential `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#198805](https://github.com/openclaw/openclaw/issues/198805) macOS node repeatedly loses pairing ownership ("node pairing changed before request dispatch") `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#198801](https://github.com/openclaw/openclaw/issues/198801) [Feature]: canvas-implied show_widget warns as unavailable allowlist entry on surfaces without inline-widgets (re-report of #158832) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#198802](https://github.com/openclaw/openclaw/issues/198802) [Bug]: Gateway heap grows ~90 MB/h: process plugin cache keeps every generation's native namespace member maps (incl. disabled plugins) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#198790](https://github.com/openclaw/openclaw/issues/198790) Agent turn aborts with `UNIQUE constraint failed: transcript_events.session_id, transcript_events.seq` right after a delivery mirror was appended during the turn `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#198792](https://github.com/openclaw/openclaw/issues/198792) [Feature]: iOS app — center the agent avatar in chat and increase text size for a friendlier feel `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#198787](https://github.com/openclaw/openclaw/issues/198787) Update failure: candidate-doctor (2026.9.7) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#198737](https://github.com/openclaw/openclaw/issues/198737) Test-only reduction campaign: consolidate duplicate coverage and fixtures `P3` `issue-rating: 🌊 off-meta tidepool` `impact:other` 💬1
- [#198767](https://github.com/openclaw/openclaw/issues/198767) [Bug]: Binary workspace files in a Template are decoded as text in the catalog detail and preview `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#198770](https://github.com/openclaw/openclaw/issues/198770) [Bug]: Templates catalog preview fails for a `@publisher/slug` reference to an unscoped Template `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#198761](https://github.com/openclaw/openclaw/issues/198761) [Bug]: Template Add proceeds with a blocked plan and leaves an empty agent that Retry cannot finish `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬1
- [#198764](https://github.com/openclaw/openclaw/issues/198764) [Bug]: A Template or version that does not exist reports "ClawHub catalog is unavailable." `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#198755](https://github.com/openclaw/openclaw/issues/198755) [Bug]: `templates validate` and `build` reject a bundled folder near the documented 4,096-file limit that `inspect` and Add accept `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#198750](https://github.com/openclaw/openclaw/issues/198750) [Bug]: Two bundled plugin folders with the same plugin id pass validate and the Add preview, then fail after the agent is created `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#198753](https://github.com/openclaw/openclaw/issues/198753) [Bug]: Bundled Template dependency errors do not say which entry is wrong or why `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#198748](https://github.com/openclaw/openclaw/issues/198748) [Bug]: A newer Template release whose bundled plugin changed cannot be added once the older release was added `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#198747](https://github.com/openclaw/openclaw/issues/198747) [Bug]: Template `agent.identity.avatar` validates against a case- and slash-folded path but is stored verbatim, so the avatar does not resolve `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#198744](https://github.com/openclaw/openclaw/issues/198744) [Bug]: Template agent kept after a failed Add never receives `BOOTSTRAP.md` or the default workspace files `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#198724](https://github.com/openclaw/openclaw/issues/198724) [Bug]: Every Control UI incognito thread fails its first turn: memory session actor is released when sessions.create returns `bug` `regression` `P1` `impact:session-state` 💬1
- [#198705](https://github.com/openclaw/openclaw/issues/198705) Workboard: drop the claim and observation records from #197471 before they ship `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:linked-pr-open` 💬1
- [#198702](https://github.com/openclaw/openclaw/issues/198702) Together chat models outside the built-in catalog are hidden from model lists and refused with "This model doesn't support chat" `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#198693](https://github.com/openclaw/openclaw/issues/198693) Update failure: global-install-failed (2026.9.4) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#198691](https://github.com/openclaw/openclaw/issues/198691) Claude sessions OpenClaw starts on a paired node run under Claude Code's default prompt, with OpenClaw's prompt only appended `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#198687](https://github.com/openclaw/openclaw/issues/198687) [Bug]: cron add silently ignores script limits on other payloads `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#198682](https://github.com/openclaw/openclaw/issues/198682) [Bug]: cron run silently ignores wait options when --wait is missing `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#198670](https://github.com/openclaw/openclaw/issues/198670) [Feature]: Capture downloads from Chrome DevTools MCP existing sessions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#198678](https://github.com/openclaw/openclaw/issues/198678) [Bug]: /v1/chat/completions sessions record no creator profile — a member's second turn with the same user is refused under sessions.others "none" `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#198680](https://github.com/openclaw/openclaw/issues/198680) [Bug]: WebChat assistant video is intermittently missing — silent session-writer drops, 5 MiB staging cap, and 16 MiB video hard cap without resize `P2` `clawsweeper:needs-info` `impact:message-loss` `issue-rating: 🦪 silver shellfish` 💬1
- [#198676](https://github.com/openclaw/openclaw/issues/198676) [Bug]: WebChat assistant video is intermittently missing — silent session-writer drops, 5 MiB staging cap, and 16 MiB video hard cap without resize `P2` `clawsweeper:needs-info` `impact:message-loss` `issue-rating: 🦪 silver shellfish` 💬1
- [#198667](https://github.com/openclaw/openclaw/issues/198667) [Bug]: Claude CLI runtime never runs before_agent_finalize (native Stop hook not relayed) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#198649](https://github.com/openclaw/openclaw/issues/198649) [Feature]: Support batch actions on existing-session browser profiles `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#198594](https://github.com/openclaw/openclaw/issues/198594) cron edit silently accepts an explicitly blank --stagger `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#198642](https://github.com/openclaw/openclaw/issues/198642) [Bug]: iOS chat sends thinking "off" to Claude CLI models with a reasoning opt-out, and the Gateway rejects every turn `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#198634](https://github.com/openclaw/openclaw/issues/198634) The provider request array is not append-only: it diverges from the previous request on the first call of many turns `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#198611](https://github.com/openclaw/openclaw/issues/198611) CI: hourly main runs keep failing on Knip unused exports that PR CI never scanned `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#198628](https://github.com/openclaw/openclaw/issues/198628) [Bug]: Pre-update safety backup probes every workspace file in one 10s-capped spawnSync worker; npm updates permanently impossible on fat workspaces `P2` `impact:ux-friction` 💬1
- [#198587](https://github.com/openclaw/openclaw/issues/198587) cron edit ignores --on-exit-cwd when patching stream metadata `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#198581](https://github.com/openclaw/openclaw/issues/198581) LiteLLM proxy chat models are hidden from model lists and refused with "This model doesn't support chat" `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#198625](https://github.com/openclaw/openclaw/issues/198625) [Bug]: Gateway main-thread stalls up to 12.3s on macOS arm64 2026.11.3 (gateway:rpc attributed; fs-safe frames in stall profiles) with 11s+ chat-send preparation `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬1
- [#198622](https://github.com/openclaw/openclaw/issues/198622) [Feature]: Real-time voice front-end that can actually call tools (Gemini Live -> real agent turn) 💬1
- [#198617](https://github.com/openclaw/openclaw/issues/198617) Bug: hybrid search applies hard-coded 30-day temporal decay to ALL memory chunks, contradicting documented behavior (dated daily notes only; evergreen files exempt) `P2` `impact:session-state` 💬1
- [#198616](https://github.com/openclaw/openclaw/issues/198616) Update failure: package-doctor (2026.11.5-beta.2) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#198615](https://github.com/openclaw/openclaw/issues/198615) [Docs Bug]: Liquid AI setup asks for a Gateway restart after installing the local plugin `bug` `docs` `no-stale` `P3` 💬1
- [#198613](https://github.com/openclaw/openclaw/issues/198613) [Bug]: backup create --all times out in SQLite header probe on large state dirs (fixed 10s spawnSync) `P2` `impact:other` 💬1
- [#198612](https://github.com/openclaw/openclaw/issues/198612) [Docs Bug]: BytePlus setup says to restart the Gateway after installing the plugin `bug` `docs` `no-stale` `P3` 💬1

#### 🔒 Closed Issues
- [#172837](https://github.com/openclaw/openclaw/issues/172837) [Bug]: Codex nativeSubagentAssignments are never removed after completion delivery gives up; every new parent thread re-pins and re-sends them
- [#114913](https://github.com/openclaw/openclaw/issues/114913) Memory search: bound primary embeddings before the outer tool deadline and fall back to FTS
- [#102961](https://github.com/openclaw/openclaw/issues/102961) after_tool_call hook receives a flattened string, not the structured ToolResult — plugins cannot detect exec/bash failures
- [#167762](https://github.com/openclaw/openclaw/issues/167762) [Bug]: direct anthropic/claude-opus-5-5 exposes no selectable context windows; sessions.patch rejects contextWindow "200k"
- [#197810](https://github.com/openclaw/openclaw/issues/197810) MCP loopback: claude-cli announce/settle turns get no OpenClaw tools — capability read after the first await escapes `withPreparedSessionCapabilityRead` (500 / -32603)
- [#143396](https://github.com/openclaw/openclaw/issues/143396) Stuck-session recovery aborts healthy claude-cli turns: progress marker pins on one tool call while later tool calls keep completing (2026.9.2)
- [#166970](https://github.com/openclaw/openclaw/issues/166970) [Feature]: Opt-in foreground inference workers on iPhone and iPad (design request)
- [#166408](https://github.com/openclaw/openclaw/issues/166408) [Feature]: Signal channel cannot send native voice notes (audioAsVoice ignored; signal-cli --voice-note unused)
- [#161346](https://github.com/openclaw/openclaw/issues/161346) [Bug]: task_runs.detail_json is missing the usage field scoped in #106041
- [#186995](https://github.com/openclaw/openclaw/issues/186995) Update failure: gateway-stop-unverified (2026.10.8)
- [#198554](https://github.com/openclaw/openclaw/issues/198554) [Bug]: Invalid Template MCP declarations report only "Invalid input"
- [#183700](https://github.com/openclaw/openclaw/issues/183700) [Bug]: rememberAcrossConversations is on by default, but its required Active Memory plugin is disabled by default, so cross-conversation recall silently does nothing
- [#183277](https://github.com/openclaw/openclaw/issues/183277) [Feature]: Leave Doctor's retained `*.pre-startup-migration-*.bak` originals out of `openclaw backup create` archives (or make it optional)
- [#198602](https://github.com/openclaw/openclaw/issues/198602) [Bug]: DM follow-up queue retries forever: channel restart recovery requires source-keyed user-turn admission
- [#187171](https://github.com/openclaw/openclaw/issues/187171) Gateway: reserved readiness endpoints (/ready /readyz /startup) are unqueryable during the entire boot window — external watchers cannot distinguish starting from dead
- [#186723](https://github.com/openclaw/openclaw/issues/186723) Control UI side-panel PDF preview renders blank in WebKit hosts (macOS app / Safari): blob: URL in iframe unsupported
- [#196183](https://github.com/openclaw/openclaw/issues/196183) [Docs Bug]: search is unavailable — /pagefind/pagefind.js is stuck at 1.5.2 on a 1-year immutable edge cache while the index is 1.6.0
- [#198685](https://github.com/openclaw/openclaw/issues/198685) Fix remaining .slice(0, N) calls on text content that can split emoji/surrogate pairs
- [#197767](https://github.com/openclaw/openclaw/issues/197767) [Bug]: with tools.fs.workspaceOnly the agent cannot load its own generated images (tool-image-generation outside workspace)
- [#181772](https://github.com/openclaw/openclaw/issues/181772) [Bug]: Control UI drops bounded-context warnings delivered to external chat channels
- [#198635](https://github.com/openclaw/openclaw/issues/198635) Followup queue drain repeats ~71,000 times in 12 hours, with no backoff
- [#197450](https://github.com/openclaw/openclaw/issues/197450) Add optional claim, execution-observation, and verification records to Workboard results
- [#198559](https://github.com/openclaw/openclaw/issues/198559) [Bug]: `templates validate` accepts a `BOOTSTRAP.md` that `templates build` rejects
- [#199345](https://github.com/openclaw/openclaw/issues/199345) [Bug]: claude-cli runtime: steer is admitted as a new turn instead of joining the live run
- [#195636](https://github.com/openclaw/openclaw/issues/195636) Android: CameraCaptureManager retains destroyed ComponentActivity reference across recreation
- [#199318](https://github.com/openclaw/openclaw/issues/199318) Consolidate inline-command benchmark build verification
- [#198449](https://github.com/openclaw/openclaw/issues/198449) Browser: agent gets a "user used this browser" note without take-over
- [#199194](https://github.com/openclaw/openclaw/issues/199194) Automations: scheduled runs can't read or save their own scratch on main ("Automation not found")
- [#198695](https://github.com/openclaw/openclaw/issues/198695) Automation run keeps owner-private memory after its requester loses owner status while it waits for a run slot
- [#199185](https://github.com/openclaw/openclaw/issues/199185) [Bug]: foreign AbortSignals stop canceling SDK response bodies after headers
- [#194223](https://github.com/openclaw/openclaw/issues/194223) [Bug]: Apple chat repeats its catalog refreshes on every reconnect while the transcript is still loading
- [#199106](https://github.com/openclaw/openclaw/issues/199106) IRC: tab-separated words are joined together in sent messages
- [#199180](https://github.com/openclaw/openclaw/issues/199180) Agent spawn fails with 'context length exceeded' when using fork mode with large session history
- [#199114](https://github.com/openclaw/openclaw/issues/199114) [Bug]: Automations editor renders long prompts as an unbounded, cramped duplicate text block
- [#199152](https://github.com/openclaw/openclaw/issues/199152) [Bug]: Heartbeat turns triggered by system events (Slack button presses) drop the effective prompt; model sees only the placeholder
- [#199115](https://github.com/openclaw/openclaw/issues/199115) [Bug]: Empty legacy Codex auth.json makes model refresh fail and shows a generic Automations warning
- [#198606](https://github.com/openclaw/openclaw/issues/198606) claude-cli: session-gap note leaks into chat as a duplicate user message when a replay block precedes it
- [#199017](https://github.com/openclaw/openclaw/issues/199017) [Bug]: ACP session creation stays rate-limited after a backward system-clock adjustment
- [#199010](https://github.com/openclaw/openclaw/issues/199010) --runtime bun broken on releases ≥ 2026.11.1: install.sh pin parser rejects booleans in openclaw-bun.json
- [#198927](https://github.com/openclaw/openclaw/issues/198927) [Bug]: file.fetch labels valid UTF-8 text as binary at the sniff boundary
- [#198953](https://github.com/openclaw/openclaw/issues/198953) [Bug]: Geolocation cannot load gzip database URLs with query parameters or fragments
- [#199001](https://github.com/openclaw/openclaw/issues/199001) [Bug]: npm package omits the workspace memory and skills worker entrypoints
- [#198743](https://github.com/openclaw/openclaw/issues/198743) [Bug]: Template automation `name` over 200 characters (or an oversized `heartbeat.every`) passes validation and fails Add after the agent is created
- [#198819](https://github.com/openclaw/openclaw/issues/198819) IMAP unsolicited FETCH updates can advance the cursor past unprocessed mail
- [#198782](https://github.com/openclaw/openclaw/issues/198782) Knowledge Scribes: Replace with new asks the scribe twice when retried after the connection drops
- [#187677](https://github.com/openclaw/openclaw/issues/187677) Telegram: forwarded rich messages bypass inbound debounce, so a forward burst yields one turn per message
- [#192158](https://github.com/openclaw/openclaw/issues/192158) [Bug]: Telegram rich messages show authored `<tg-time>` dates as raw markup instead of a Telegram date
- [#198724](https://github.com/openclaw/openclaw/issues/198724) [Bug]: Every Control UI incognito thread fails its first turn: memory session actor is released when sessions.create returns
- [#197940](https://github.com/openclaw/openclaw/issues/197940) [Bug]: Every plugin agent_end handler fails with "Plugin invocation scope is closed" after a turn that called dispatch_action
- [#198450](https://github.com/openclaw/openclaw/issues/198450) Workboard: a late completion from a retried card's first run settles the retry
- [#198594](https://github.com/openclaw/openclaw/issues/198594) cron edit silently accepts an explicitly blank --stagger
- [#198628](https://github.com/openclaw/openclaw/issues/198628) [Bug]: Pre-update safety backup probes every workspace file in one 10s-capped spawnSync worker; npm updates permanently impossible on fat workspaces
- [#198587](https://github.com/openclaw/openclaw/issues/198587) cron edit ignores --on-exit-cwd when patching stream metadata
- [#197443](https://github.com/openclaw/openclaw/issues/197443) Support restart-surviving durable exec and owning-session completion wakeups on macOS
- [#198581](https://github.com/openclaw/openclaw/issues/198581) LiteLLM proxy chat models are hidden from model lists and refused with "This model doesn't support chat"
- [#198622](https://github.com/openclaw/openclaw/issues/198622) [Feature]: Real-time voice front-end that can actually call tools (Gemini Live -> real agent turn)
- [#198543](https://github.com/openclaw/openclaw/issues/198543) agents.delete waits for unrelated model-catalog work in every worker; hourly CI times out on it
- [#198451](https://github.com/openclaw/openclaw/issues/198451) Control UI: switching back from another app after a dropped connection waits up to 5 s for the reply
- [#198462](https://github.com/openclaw/openclaw/issues/198462) Browser pairing page shows `openclaw pair CODE` even when the issuing Gateway runs under a named profile
- [#198617](https://github.com/openclaw/openclaw/issues/198617) Bug: hybrid search applies hard-coded 30-day temporal decay to ALL memory chunks, contradicting documented behavior (dated daily notes only; evergreen files exempt)
- [#198613](https://github.com/openclaw/openclaw/issues/198613) [Bug]: backup create --all times out in SQLite header probe on large state dirs (fixed 10s spawnSync)

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 263,426 · **Open issues:** 53,099 · **Last push:** <1h ago

On November 14, 2026, Hermes Agent released canary version v0.23.1+canary.20261114T064334Z, which supports macOS on Apple Silicon. Significant merged updates included the addition of an end-of-life plugin in PR #154896 and a fix in PR #155753 that enables Bot Mode to list the selected bot's Telegram sessions accurately. Among the newly reported issues, #155595 stands out, which tracks ongoing work related to profile creation and lifecycle management, including provisioning and safety proofs. Other notable mentions include a bug regarding outbound file messages with excessively long display names (#155926) and silent API failures during background reviews (#155892), suggesting that the team has multiple pressing matters to address moving forward.

#### 🚀 New Releases
- [v0.23.1+canary.20261114T064334Z](https://github.com/nousresearch/hermes-agent/releases/tag/v0.23.1%2Bcanary.20261114T064334Z) Hermes Agent canary v0.23.1+canary.20261114T064334Z

#### ✅ Merged PRs
- [#154896](https://github.com/NousResearch/hermes-agent/pull/154896) feat(plugin-catalog): add eol plugin
- [#155753](https://github.com/NousResearch/hermes-agent/pull/155753) fix(desktop): Bot Mode lists the selected bot's Telegram sessions

#### 🐛 New Issues
- [#155595](https://github.com/NousResearch/hermes-agent/issues/155595) Tracking: profile creation and lifecycle — shipped provisioning, Honcho cleanup, safety proofs, and remaining work `comp/cli` `P3` `area/profiles` 💬8
- [#155829](https://github.com/NousResearch/hermes-agent/issues/155829) hermes-mobile-push: agent cron jobs with deliver: bot-chat send two notifications `type/bug` `comp/plugins` `P2` 💬2
- [#155891](https://github.com/NousResearch/hermes-agent/issues/155891) checkpoints prune: 'store above its size cap' is counted as an error `type/bug` `comp/cli` `comp/tools` `tool/file` 💬1
- [#155926](https://github.com/NousResearch/hermes-agent/issues/155926) bug: cache_document_from_bytes does not bound display-name length — ENAMETOOLONG drops inbound file messages (real WeCom percent-encoded CJK names, 470 bytes observed) `type/bug` `comp/gateway` `P2` 💬1
- [#155919](https://github.com/NousResearch/hermes-agent/issues/155919) [Bug]: Sessions page sorts by created_at, so long-lived chats vanish under cron runs (order=recent never requested) `type/bug` `P2` `comp/dashboard` `area/sessions` 💬1
- [#155892](https://github.com/NousResearch/hermes-agent/issues/155892) [Bug]: Background-review API failures are silent in gateway mode — warn status is dropped after the turn ends `type/bug` `comp/agent` `tool/memory` `platform/feishu` 💬1
- [#155933](https://github.com/NousResearch/hermes-agent/issues/155933) fix(desktop): preserve multi-column layout and focused chat column when creating a session from a sidebar folder `type/bug` `P2` `comp/desktop` `area/sessions`
- [#155932](https://github.com/NousResearch/hermes-agent/issues/155932) [Bug]: mid-turn steer on a yielded foreground command drops the replacement reply — turn ends interrupted_during_api_call and the yielded command renders Result unavailable `type/bug` `comp/agent` `tool/terminal` `P2`
- [#155930](https://github.com/NousResearch/hermes-agent/issues/155930) `desktop_project` create/switch returns `success: true` even when the session's workspace wasn't moved (e.g. the primary folder doesn't exist) `type/bug` `comp/tools` `P2` `comp/tui-gateway`
- [#155928](https://github.com/NousResearch/hermes-agent/issues/155928) [Feature]: per-channel cwd override so a messaging session can work in a project `type/feature` `comp/gateway` `tool/terminal` `platform/telegram`
- [#155923](https://github.com/NousResearch/hermes-agent/issues/155923) [Feature]: Allow trusting a directory tree for project skills (one consent covers repos under it) `type/feature` `comp/cli` `tool/skills` `area/config`
- [#155920](https://github.com/NousResearch/hermes-agent/issues/155920) Update custody: "gateway restart owed" warning never discharges when the armed obligation owner PID is dead (v0.23.1) `type/bug` `comp/cli` `P2` `area/install-update`
- [#155909](https://github.com/NousResearch/hermes-agent/issues/155909) 1Password vault backend: Logins without a website and non-Login items are silently unlisted `type/bug` `tool/file` `P2`
- [#155907](https://github.com/NousResearch/hermes-agent/issues/155907) cron: `database is locked` in `adopt_claimed_execution` under normal multi-job concurrency — schema DDL re-runs on every connection `type/bug` `comp/cron` `P2`
- [#155908](https://github.com/NousResearch/hermes-agent/issues/155908) [Feature]: Fail-closed policy seams for a plugin that gives server members a bot without its tools `type/security` `comp/cli` `comp/plugins` `platform/discord`
- [#155904](https://github.com/NousResearch/hermes-agent/issues/155904) [Bug]: Whats app blocker `type/bug` `comp/cli` `platform/whatsapp` `P2`
- [#155903](https://github.com/NousResearch/hermes-agent/issues/155903) [Feature]: Desktop plugin SDK: a host-owned backdrop area behind the app `type/feature` `P3` `comp/desktop` `desktop/shell`
- [#155902](https://github.com/NousResearch/hermes-agent/issues/155902) Telegram inbound photo with a caption loses the image (caption text only); caption-less photos work — v0.23.1 `type/bug` `comp/plugins` `platform/telegram` `P2`
- [#155900](https://github.com/NousResearch/hermes-agent/issues/155900) update: post-update Node-deps repair step assumes old workspace layout, false-fails a successful update with exit 3 `type/bug` `comp/cli` `P2` `area/install-update`
- [#155898](https://github.com/NousResearch/hermes-agent/issues/155898) browser_harness daemon: session-scoped CDP responses never resolve against Chrome 152 headless (browser_exec 5s IPC timeouts) `type/bug` `comp/gateway` `tool/browser` `P2`
- [#155897](https://github.com/NousResearch/hermes-agent/issues/155897) CLI clarify multi_select: Enter commits the form instead of toggling the highlighted option (Space toggles but is undiscoverable) `type/bug` `comp/cli` `P2`
- [#155893](https://github.com/NousResearch/hermes-agent/issues/155893) fleet pruner deleted 4 live worktrees (incl. one mid-build) — per-tree prune audit log, a supported liveness primitive, and a guarded external-tree reclaim `comp/cron` `P2`

#### 🔒 Closed Issues
- [#136071](https://github.com/NousResearch/hermes-agent/issues/136071) [Bug]: Desktop generates invalid `agy auth add ...` login command for external-process Antigravity plugins
- [#127044](https://github.com/NousResearch/hermes-agent/issues/127044) [Bug]: pm update git: fetch_url builds a nonexistent PortableGit filename for .windows.1 releases (404)
- [#139327](https://github.com/NousResearch/hermes-agent/issues/139327) Image build bakes two world-writable uv cache lock files into /opt/hermes/uv-cache
- [#7485](https://github.com/NousResearch/hermes-agent/issues/7485) [Security] ReDoS risk in dangerous command regex patterns (tools/approval.py)
- [#117815](https://github.com/NousResearch/hermes-agent/issues/117815) Hardening: approval/redaction granularity — four places where the reviewer's view differs from what runs
- [#143691](https://github.com/NousResearch/hermes-agent/issues/143691) runtime self-delete floor resolves relative paths against the agent's cwd, ignoring a preceding `cd`
- [#148835](https://github.com/NousResearch/hermes-agent/issues/148835) [Bug]: pinned Git for Windows 2.53.0.3 still trusts the compromised eMudhra intermediates
- [#128930](https://github.com/NousResearch/hermes-agent/issues/128930) history-check can never reject: merge-base runs against the merge ref, not the PR head
- [#144380](https://github.com/NousResearch/hermes-agent/issues/144380) MCP trust gate uses a cached readOnlyHint before acquiring the connection; a write-capable tool can run without consent after a reconnect
- [#147212](https://github.com/NousResearch/hermes-agent/issues/147212) Primary provider auth failure is masked when the fallback provider fails (user sees out-of-credits, never told to re-login)
- [#134019](https://github.com/NousResearch/hermes-agent/issues/134019) `scripts/whatsapp-bridge` and `plugins/platforms/photon/sidecar` lockfiles are generated outside the repo's `min-release-age=14` cooldown
- [#108382](https://github.com/NousResearch/hermes-agent/issues/108382) [Bug]: CI hardening - unpinned wheel, unquoted setup-exe-url, unsanitized GITHUB_OUTPUT values
- [#122024](https://github.com/NousResearch/hermes-agent/issues/122024) [Bug]: execute_code stdout spills bypass secret redaction; runner spill path is forgeable
- [#155359](https://github.com/NousResearch/hermes-agent/issues/155359) Multiplexed host profile loses env-only credentials after a forced plugin rediscovery

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 96,940 · **Open issues:** 10,386 · **Last push:** <1h ago

There were no new releases in vLLM over the past 24 hours, but several notable merge requests were completed. Key improvements included the enhancement of the multi_process_parallel Ray cluster configuration and performance optimizations for DeepSeek-V4.1, particularly in dense MXFP8 GEMMs. Additionally, the Transformers modeling backend was updated to serve the Qwen2 model, and various bug fixes were implemented to improve functionality, like maintaining dummy-run requests within the max_model_len limit. A significant issue was raised regarding the glm47 tool parser, which is reportedly dropping tool calls with unknown function names, leading to empty responses and potentially trapping clients in retry loops.

#### ✅ Merged PRs
- [#67391](https://github.com/vllm-project/vllm/pull/67391) [CI] Start multi_process_parallel's Ray cluster with one CPU per rank
- [#67377](https://github.com/vllm-project/vllm/pull/67377) [Perf][ROCm][DSv4.1] DeepSeek-V4.1-Flash: dense MXFP8 GEMMs and wo_a on AITER's tuned FlyDSL kernels, and a faster MXFP8 activation quant (MI355X)
- [#66821](https://github.com/vllm-project/vllm/pull/66821) [Transformers backend] Serve Qwen2 with the Transformers modeling backend
- [#67693](https://github.com/vllm-project/vllm/pull/67693) [Model Loader] Fill dummy FP8 weights with random codes across the range
- [#63483](https://github.com/vllm-project/vllm/pull/63483) [Core][DBO] Dual batch overlap under pure tensor parallelism (split PR of M3.1)
- [#67636](https://github.com/vllm-project/vllm/pull/67636) [CI][Test] Stub pipeline_relay in the engram DP-shard model forward test
- [#67545](https://github.com/vllm-project/vllm/pull/67545) [Bugfix][Core] Keep dummy-run requests within max_model_len
- [#64255](https://github.com/vllm-project/vllm/pull/64255) [XPU][MLA] Register XPUFlashAttnMLABackend for FLASH_ATTN_MLA in XPU
- [#66401](https://github.com/vllm-project/vllm/pull/66401) [Bugfix][MRV2] Allow non 8-bytes aligned `--max-num-batched-tokens` for DeepSeek-v4
- [#67502](https://github.com/vllm-project/vllm/pull/67502) [CI] Bump Transformers version to 5.23.0
- [#67505](https://github.com/vllm-project/vllm/pull/67505) [MM] Support mm_device_do_normalize for LLaVA-OneVision
- [#67297](https://github.com/vllm-project/vllm/pull/67297) [Perf] Use `slots=True` on all internal dataclasses
- [#67273](https://github.com/vllm-project/vllm/pull/67273) [Chore] Update agent skill for vLLM
- [#67426](https://github.com/vllm-project/vllm/pull/67426) [MM] Support mm_device_do_normalize for Qwen3-Omni
- [#67637](https://github.com/vllm-project/vllm/pull/67637) [CI][Test] Run test_mm_prefix_lm_pipeline_parallel with spawned workers
- [#67601](https://github.com/vllm-project/vllm/pull/67601) [CI][XPU] Bound DeepStack test profiling to avoid OOM
- [#65453](https://github.com/vllm-project/vllm/pull/65453) [Bugfix][Multimodal] Repeat-last default padding for `cu_seqlens` in multimodal CG
- [#67591](https://github.com/vllm-project/vllm/pull/67591) [Perf] Allow EPLB with modular TRT-LLM FP8 block-scale MoE
- [#67599](https://github.com/vllm-project/vllm/pull/67599) [Bugfix][AuxOutput] Size the routed-experts row cache from one source
- [#67632](https://github.com/vllm-project/vllm/pull/67632) [Model] Remove OpenPangu-VL
- [#66375](https://github.com/vllm-project/vllm/pull/66375) [Perf][Bugfix][RL] Fix sparse NCCL update OOM and improve performance
- [#64753](https://github.com/vllm-project/vllm/pull/64753) [Quantization][MoE] Keep NVFP4 expert scales CSF-compressed on the GPU with B12X
- [#67519](https://github.com/vllm-project/vllm/pull/67519) [Bugfix] Fix EAGLE-3 on Transformers backend VLMs
- [#64515](https://github.com/vllm-project/vllm/pull/64515) [Bugfix][XPU] Use int64 token index in the DeepSeek-V4 qnorm/RoPE kernel
- [#66672](https://github.com/vllm-project/vllm/pull/66672) [CI][ROCm] Bake torchao into the ROCm test image off the default path and re-enable MI300/MI355 Quantization
- [#66933](https://github.com/vllm-project/vllm/pull/66933) [ROCm] M3.1 GEMM improvements
- [#66934](https://github.com/vllm-project/vllm/pull/66934) [ROCm] Minimax M3.1 attn indexer XCD balancing

#### 🐛 New Issues
- [#67684](https://github.com/vllm-project/vllm/issues/67684) [Bug]: glm47 tool parser silently drops tool calls with unknown function names, returning empty responses that trap clients in retry loops `tool-calling` 💬2
- [#67631](https://github.com/vllm-project/vllm/issues/67631) [Bug]: DeepSeek-V4-Pro (HCA compress_ratio=128) + user-specified --block-size 64 crashes with ZeroDivisionError in kv_cache_planning (page_size_bytes silently 0, no block_size vs tokens_per_state validation) `deepseek` 💬2
- [#67598](https://github.com/vllm-project/vllm/issues/67598) [Bug]: Qwen3.5-0.8B too slow on AVX2 CPU `bug` `quantization` 💬2
- [#67653](https://github.com/vllm-project/vllm/issues/67653) [Feature]: vllm.Inference: check the render fingerprint on GenerateRequest 💬1
- [#67664](https://github.com/vllm-project/vllm/issues/67664) [CI Failure]: Quantization Shard 4/4 - quantization/test_modelopt.py::test_modelopt_(nested_mixed|mixed_dspark)_checkpoint `rocm` `ci-failure` `quantization` 💬1
- [#67595](https://github.com/vllm-project/vllm/issues/67595) [Bug]: pip install vllm==0.33.0 resolves mismatched CUDA toolchain (nvcc 13.5.x + cuda-toolkit 13.0.x), breaking FlashInfer JIT 💬1
- [#67720](https://github.com/vllm-project/vllm/issues/67720) [Bug]: `--data-parallel-start-rank` is silently replaced by 0 instead of rejected
- [#67652](https://github.com/vllm-project/vllm/issues/67652) [Feature]: vllm.Render: Derender for Completions and Responses, with client JSON and SSE envelopes
- [#67696](https://github.com/vllm-project/vllm/issues/67696) [RFC]: CPU Backend support for VLLM_BATCH_INVARIANT=1 `cpu` `quantization` `batch-invariance`
- [#67692](https://github.com/vllm-project/vllm/issues/67692) [Bug]: Unauthenticated P2P Offload Exposes Full CPU KV Cache to Arbitrary Peers `bug`
- [#67688](https://github.com/vllm-project/vllm/issues/67688) [Performance]: DP prefill cadence: a capacity-bound rank prefills alone while its lockstep peers keep deferring
- [#67683](https://github.com/vllm-project/vllm/issues/67683) Feature request: a documented, supported pattern for fast weight synchronization between an RL trainer and vLLM rollout workers `feature request`
- [#67674](https://github.com/vllm-project/vllm/issues/67674) [Performance]: `--prefix-match-unit` recovers hybrid-model prefix hits on multi-turn and agent traces, but on the Triton/FLA GDN backend it costs about 30 ms of TTFT on almost every request
- [#67665](https://github.com/vllm-project/vllm/issues/67665) [Feature]: Support online linear re-quantization from FP8 checkpoints (Fp8LinearMethod.dequantize_weight) `feature request` `quantization`
- [#67630](https://github.com/vllm-project/vllm/issues/67630) [Bug][Perf]: flashinfer_autotune / _dummy_run never calls compute_logits, leaving FP8 LM-head GEMM un-autotuned
- [#67629](https://github.com/vllm-project/vllm/issues/67629) [Bug]: AllReduceFusionPass.__del__ destroys process-global FlashInfer all-reduce workspace while CUDA graphs / communicators still use it
- [#67619](https://github.com/vllm-project/vllm/issues/67619) [Bug]: Background /v1/responses requests never report in_progress; GET returns queued until they finish `bug`
- [#67617](https://github.com/vllm-project/vllm/issues/67617) [Bug]: Rejected LoRA reload replaces cached weights when all slots are pinned
- [#67613](https://github.com/vllm-project/vllm/issues/67613) [Bug][Rust Frontend]: Tokenization endpoints return 404 for loaded LoRA adapters `rust`
- [#67603](https://github.com/vllm-project/vllm/issues/67603) [Bug]: Quark W4A4 (`w_mxfp4_a_mxfp4`) gpt-oss MoE fails to load on Blackwell, and the CUTLASS W4A4 kernel silently drops expert biases `bug` `gpt-oss` `nvidia`

#### 🔒 Closed Issues
- [#47169](https://github.com/vllm-project/vllm/issues/47169) [Usage]: vLLM 0.24.0 crashes on startup with Qwen3.6-27B-FP8 on Blackwell SM120 — DeepGemm warmup ignores auto-disable
- [#52416](https://github.com/vllm-project/vllm/issues/52416) [Bug] XPU qnorm/rope kernel: int32 overflow in the address computation past 2^31 q elements
- [#67619](https://github.com/vllm-project/vllm/issues/67619) [Bug]: Background /v1/responses requests never report in_progress; GET returns queued until they finish

### SGLang (`sgl-project/sglang`)

**Stars:** 38,879 · **Open issues:** 6,790 · **Last push:** 1h ago

Today saw no new releases for SGLang, but several important PRs were merged, including the addition of an admin API key requirement for sensitive endpoints (#49896), which enhances security measures. Performance improvements were highlighted with the diffusion module, notably through changes that optimize QK-norm and RoPE operations (#50392 and #50388). Documentations were updated as well, with the MI355X agentic cookbook aligned to the latest InferenceX standards (#50398), ensuring users have accurate guidance. Among new issues, a bug was reported concerning NaN outputs from the FP16 Stream-K GEMM operation (#50521), which is drawing attention for its potential impact on numerical stability.

#### ✅ Merged PRs
- [#49896](https://github.com/sgl-project/sglang/pull/49896) [Feat] entrypoints: Require --admin-api-key for sensitive admin endpoints
- [#50392](https://github.com/sgl-project/sglang/pull/50392) [Perf] diffusion: Run head_dim-64 rounded NeoX QK-norm+RoPE four rows per warp
- [#50388](https://github.com/sgl-project/sglang/pull/50388) [Perf] diffusion: Walk one token's heads per warp in the two-rows QK-norm+RoPE kernel
- [#50544](https://github.com/sgl-project/sglang/pull/50544) [Feat] dp-controller: Forward a scheduler's router_l3_layout entry in the startup handshake
- [#50426](https://github.com/sgl-project/sglang/pull/50426) [CI] diffusion: Detect custom all-reduce v2 by its symmetric workspace log in the BCG TP2 test
- [#50528](https://github.com/sgl-project/sglang/pull/50528) [CI] mem_cache: Scope the rendezvous mock in the unmapped-rank gather tests to the pool construction
- [#50398](https://github.com/sgl-project/sglang/pull/50398) [Doc] [AMD] dsv41: Align MI355X agentic cookbook with InferenceX #5029
- [#50456](https://github.com/sgl-project/sglang/pull/50456) [Doc] [AMD] cookbook: Refresh GLM-5.2 MI355X AgentX recipe
- [#42978](https://github.com/sgl-project/sglang/pull/42978) [Feat] [NPU] dsa: Token shard, every head for this rank's slice of the tokens (2/2)
- [#48902](https://github.com/sgl-project/sglang/pull/48902) [Feat] [AMD] kimi-k3.1: PD over MoRI between same-size DCP roles
- [#50013](https://github.com/sgl-project/sglang/pull/50013) [AMD][K3.1] Run the HIP KDA prefill inside breakable prefill graphs
- [#50223](https://github.com/sgl-project/sglang/pull/50223) [Fix] comfyui: Stop pinning the H3 source SHA for the ComfyUI alignment patch
- [#49270](https://github.com/sgl-project/sglang/pull/49270) [Perf] diffusion: Hy-Nomas fuse groupwise INT8 weight dequantization
- [#50321](https://github.com/sgl-project/sglang/pull/50321) [Fix] diffusion: Stop the multi-rank IPC all-to-all leak with one IPC handle per peer
- [#49248](https://github.com/sgl-project/sglang/pull/49248) [CI] diffusion: Skip the server suites for ComfyUI-plugin-only changes
- [#49915](https://github.com/sgl-project/sglang/pull/49915) [Fix] sampling: Reject expensive Python stop regexes
- [#50007](https://github.com/sgl-project/sglang/pull/50007) [Fix] qwen-vl: Bound GPU memory of image preprocessing (fixes #49796)
- [#50345](https://github.com/sgl-project/sglang/pull/50345) [Fix] [NPU] pp: Avoid output AllGather during graph replay
- [#50034](https://github.com/sgl-project/sglang/pull/50034) [Doc] hybrid: Document hybrid cache checkpoint levels
- [#49905](https://github.com/sgl-project/sglang/pull/49905) [Perf] gdn: Fuse MIS mapped gates into QKV preparation
- [#47346](https://github.com/sgl-project/sglang/pull/47346) [Fix] distributed: Keep deprecated parallel_state getters traceable under torch.compile
- [#46781](https://github.com/sgl-project/sglang/pull/46781) [Perf] spec: Avoid blocking H2D for MRoPE delta in spec decode
- [#49121](https://github.com/sgl-project/sglang/pull/49121) [Perf] glm: Bound Triton variants on decode replay
- [#50318](https://github.com/sgl-project/sglang/pull/50318) [Perf] qwen4-exp: gather prefill PLE rows on the host for the file-backed table
- [#50371](https://github.com/sgl-project/sglang/pull/50371) [Test] mem_cache: Check request-end Mamba states under spec decode at both checkpoint levels
- [#50175](https://github.com/sgl-project/sglang/pull/50175) [Fix] runtime_context: Read platform facts under torch.compile fullgraph
- [#47013](https://github.com/sgl-project/sglang/pull/47013) [Fix] kvcache: Skip the reserved padding slot in the zero-RoPE MLA KV writer
- [#49805](https://github.com/sgl-project/sglang/pull/49805) [Fix] models: Forward router top_k to fused MoE experts
- [#50510](https://github.com/sgl-project/sglang/pull/50510) [CI] disaggregation: Drop sglang-router from CUDA CI and the NPU PD tests
- [#46411](https://github.com/sgl-project/sglang/pull/46411) [Refactor] multimodal: [MM refactor 5/9] Add a token-space multimodal processor
- [#50502](https://github.com/sgl-project/sglang/pull/50502) [CI] sgl-router: Build the router once for the e2e and k8s tests
- [#50176](https://github.com/sgl-project/sglang/pull/50176) [CI] disaggregation: Launch sgl-router instead of sgl-model-gateway in the PD tests
- [#46363](https://github.com/sgl-project/sglang/pull/46363) [Perf] hicache: Let the PP-sync channel run the pipeline's depth ahead, not one round (#45351)
- [#50324](https://github.com/sgl-project/sglang/pull/50324) [Feat] unified_cache: Support MXFP8 KV caches in the direct external linker
- [#50496](https://github.com/sgl-project/sglang/pull/50496) [Fix] constrained: Print grammar objects without a memory address
- [#50203](https://github.com/sgl-project/sglang/pull/50203) [Refactor] [NPU] dsv4: consume registered sgl-kernel-npu Transformer APIs
- [#50036](https://github.com/sgl-project/sglang/pull/50036) [CI] [AMD] kimi-k3: Expect FutureWarning from the renamed KDA env aliases
- [#50476](https://github.com/sgl-project/sglang/pull/50476) [CI] diffusion: Refresh the B200 MiniMax-H3-Image GT after #50101
- [#50397](https://github.com/sgl-project/sglang/pull/50397) [Chore] deps: Bump sglang-kernel to 0.4.11 and sgl-fa3 to 0.1.0
- [#50466](https://github.com/sgl-project/sglang/pull/50466) [Test] ep: Temporarily disable test_mooncake_ep_small on the Mooncake EP JIT nvcc spawn flake
- [#46410](https://github.com/sgl-project/sglang/pull/46410) [Refactor] multimodal: [MM refactor 4/9] Split feature transport and preprocessing placement out of the base processor
- [#49234](https://github.com/sgl-project/sglang/pull/49234) [Perf] cosmos: optimize bf16 fa
- [#50390](https://github.com/sgl-project/sglang/pull/50390) [Perf] diffusion: Look up the rounded SiLU of the gated activation in a table on sm_10x
- [#49895](https://github.com/sgl-project/sglang/pull/49895) [Fix] entrypoints: Resolve auth levels of included routers and pin a level for every route
- [#34353](https://github.com/sgl-project/sglang/pull/34353) [Fix] [NPU] modelslime: Fix NEXTN startup and mamba scatter UB overflow
- [#38362](https://github.com/sgl-project/sglang/pull/38362) [Fix] hicache: Include logical KV dtype in storage keys
- [#50400](https://github.com/sgl-project/sglang/pull/50400) [Perf] sampling: Re-derive the top-k flags when a running batch drops rows
- [#49970](https://github.com/sgl-project/sglang/pull/49970) [Feat] rust-server: Accept client request IDs up to 256 bytes
- [#50401](https://github.com/sgl-project/sglang/pull/50401) [Feat] rust-server: Serve HTTP/2 (h2c) beside HTTP/1.1 with --enable-http2
- [#50407](https://github.com/sgl-project/sglang/pull/50407) [Feat] rust-server: Pass the video item frame and token caps to multimodal processors

#### 🐛 New Issues
- [#50516](https://github.com/sgl-project/sglang/issues/50516) [Bug] Forward the upstream Retry-After header in OpenAI gateway responses 💬2
- [#50497](https://github.com/sgl-project/sglang/issues/50497) [Feature] EAGLE tree verify without per-node state snapshots for GDN layers
- [#50521](https://github.com/sgl-project/sglang/issues/50521) [Bug][Humming] FP16 Stream-K GEMM produces NaNs for an exact-zero result 💬1
- [#50487](https://github.com/sgl-project/sglang/issues/50487) [MeetUp][NPU] GDN hybrid models (Qwen3.8-27B) crash on Ascend 910B unless --mamba-ssm-dtype bfloat16 💬1
- [#50468](https://github.com/sgl-project/sglang/issues/50468) [MeetUp][NPU][Qwen3.8-27B] Save shared-prefix and suffix lengths in benchmark JSONL 💬1
- [#50457](https://github.com/sgl-project/sglang/issues/50457) [MeetUp][NPU][Qwen3.8-27B] A2 32GB: tutorial config cannot serve 128K; mamba slot rule silently kills the server 💬1
- [#50447](https://github.com/sgl-project/sglang/issues/50447) [Docs] [NPU][MeetUp] Document SGLANG_SCHEDULER_DECREASE_PREFILL_IDLE / SGLANG_PREFILL_DELAYER_MAX_DELAY_PASSES (30% TPOT reduction on 128K prefix-cache workload) 💬1
- [#50438](https://github.com/sgl-project/sglang/issues/50438) [NPU][Docs] W8A8 keeps less KV cache than BF16 at the same `--mem-fraction-static` 💬1
- [#50446](https://github.com/sgl-project/sglang/issues/50446) [NPU][Docs] Die-to-TP conversion is documented only for A3, not for A2 💬1
- [#50445](https://github.com/sgl-project/sglang/issues/50445) [NPU][Docs] Prefix-cache guidance is contradictory on the Qwen3.6-27B best-practices page 💬1
- [#50439](https://github.com/sgl-project/sglang/issues/50439) [NPU][Docs] Missing model deployment page for Qwen3.8-27B 💬1
- [#50437](https://github.com/sgl-project/sglang/issues/50437) [NPU][Docs] GSM8K evaluation fails with the default ModelScope dataset hub 💬1
- [#50436](https://github.com/sgl-project/sglang/issues/50436) [NPU][Docs] Accuracy evaluation fails when `--model` points to a read-only weights directory 💬1
- [#50422](https://github.com/sgl-project/sglang/issues/50422) [Bug] Spark2.5 rounds large integer tool arguments 💬1
- [#50411](https://github.com/sgl-project/sglang/issues/50411) [Feature] [MeetUp][NPU] DeepSeek-V4-Flash: document reproducible shared-prefix TPOT evaluation 💬1
- [#50566](https://github.com/sgl-project/sglang/issues/50566) [Bug][Humming backend] Tree K-partial reduction reports divergent barriers under synccheck
- [#50553](https://github.com/sgl-project/sglang/issues/50553) [Bug] HiCache write_back: TP ranks diverge on reclaim victims with MiniMax-M3.1-Flash TP4 on MI355X
- [#50547](https://github.com/sgl-project/sglang/issues/50547) [RFC] pd: Let decode compute the prompt tail and sample the first token, for any model
- [#50507](https://github.com/sgl-project/sglang/issues/50507) [Perf] muse-spark: EP Marlin tile density uses local expert count
- [#50535](https://github.com/sgl-project/sglang/issues/50535) [Bug] hicache: fast_file reuses space reserved by pending writes
- [#50532](https://github.com/sgl-project/sglang/issues/50532) [Bug] FA3/FA4 cascade attention counts learned sinks twice
- [#50501](https://github.com/sgl-project/sglang/issues/50501) [Feature] [Rust server] Encode only what a multi-turn chat prompt appends to an earlier prompt
- [#50499](https://github.com/sgl-project/sglang/issues/50499) dspark_accept SoftmaxTemp.execute (flashinfer branch) returns NaN rows on GB10 in 6/17 cold starts — cross-ref flashinfer#9486
- [#50488](https://github.com/sgl-project/sglang/issues/50488) [NPU][Qwen3.8-27B] Docs: Add A2 (910B3) deployment guidance, 128K prefix-cache best practice, and fix testing instructions
- [#50479](https://github.com/sgl-project/sglang/issues/50479) [Feature][MeetUp][NPU][Docs][Qwen3.8-27B] Add long-context memory tuning guidance for Qwen3.8-27B on Ascend 910B
- [#50478](https://github.com/sgl-project/sglang/issues/50478) [MeetUp][Docs][NPU] Qwen3.8-27B BF16 and W8A8 Test Results on Ascend 910B
- [#50474](https://github.com/sgl-project/sglang/issues/50474) [Doc][NPU][Qwen3.8-27B] Shared-prefix (90% cache) workload silently runs with zero cache hits when launched from the 128k no-cache recipe
- [#50461](https://github.com/sgl-project/sglang/issues/50461) [MeetUp][Docs][NPU] Qwen3.8-27B MeetUp Test Results for BF16&W8A8 on Ascend 910B
- [#50453](https://github.com/sgl-project/sglang/issues/50453) [NPU][Docs] Qwen3.8-27B MeetUp test results for BF16 and W8A8 on Ascend
- [#50450](https://github.com/sgl-project/sglang/issues/50450) [MeetUp][NPU][Docs] Qwen3.8-27B on Ascend A2: consolidated deployment and evaluation findings
- [#50444](https://github.com/sgl-project/sglang/issues/50444) [Bug] [NPU][MeetUp][Qwen3.8-27B] Server crashes on 128K prefill with --chunked-prefill-size -1 on A2 (32GB); no root cause in log
- [#50443](https://github.com/sgl-project/sglang/issues/50443) [Bug] [NPU][MeetUp][Qwen3.8-27B] Output silently truncated to 1 token when KV pool is smaller than input length (hybrid model, 128K on A2 32GB)
- [#50421](https://github.com/sgl-project/sglang/issues/50421) [Feature] [MeetUp][NPU] Qwen3.8-27B（virtual machine）Meetup Task
- [#50429](https://github.com/sgl-project/sglang/issues/50429) [Bug] Weight updates crash the scheduler for dense Marlin layers (GPTQ, AWQ, compressed-tensors W4A16, FP8 on sm86)
- [#50424](https://github.com/sgl-project/sglang/issues/50424) [Bug] Native serving benchmark counts a context-length stream error as a successful request
- [#50423](https://github.com/sgl-project/sglang/issues/50423) [MeetUp][NPU][DeepSeek-V4-Flash-0731] Add DeepSeek-V4-Flash 950PR/DT performance recipe
- [#50416](https://github.com/sgl-project/sglang/issues/50416) [Bug] Muse Spark: the hook's `SGLANG_OPT_UNIFIED_CACHE_FREE_OUT_OF_WINDOW_SLOTS=False` default collapses the prefix cache when SWA memory is tight
- [#50408](https://github.com/sgl-project/sglang/issues/50408) [Feature] glm-5.3: Encode message content as ordinary text in the built-in GLM-5.3 chat template

#### 🔒 Closed Issues
- [#38628](https://github.com/sgl-project/sglang/issues/38628) [Performance] tiny_gemm regresses DeepSeek-R1 NVFP4 decode on Blackwell despite faster standalone kernel
- [#39147](https://github.com/sgl-project/sglang/issues/39147) [Bug] HiCacheFile reports an unrestorable prefix for hybrid cache pools
- [#38902](https://github.com/sgl-project/sglang/issues/38902) [Feature] Store DeepSeek-V4.1 C1/C2 Main KV in packed FP4 on Hopper
- [#32752](https://github.com/sgl-project/sglang/issues/32752) [Bug] sgl-router decode affinity metric is never recorded
- [#39497](https://github.com/sgl-project/sglang/issues/39497) errors on model type `qwen4_exp` for nvidia/Qwen3.8-Flash-Next-NVFP4
- [#39583](https://github.com/sgl-project/sglang/issues/39583) [Bug] Kimi K3 leaks raw XTML tool calls into content when no tools are declared
- [#49796](https://github.com/sgl-project/sglang/issues/49796) [Bug] Qwen-VL image preprocessing OOMs on GPU: 2.87x peak from torch.cat(processed_images) plus a cache that never returns memory
- [#39640](https://github.com/sgl-project/sglang/issues/39640) [Bug] SGLANG_FORWARD_UNKNOWN_TOOLS is not honoured by four tool-call detectors on the one-shot path
- [#39626](https://github.com/sgl-project/sglang/issues/39626) [Bug] Block-FP8 Triton matmul silently accepts an unsupported K tile and returns wrong results
- [#39604](https://github.com/sgl-project/sglang/issues/39604) [Feature] [KV events] Include the removal reason in `BlockRemoved`
- [#39570](https://github.com/sgl-project/sglang/issues/39570) [Bug] qwen38flashnext cookbook image predates #38851: start-up crash in the QSA KV-extraction kernel once max_running_requests reaches ~4000 (e.g. with --disable-radix-cache)
- [#39569](https://github.com/sgl-project/sglang/issues/39569) [Bug] Kimi-K3 TP16 on GB200 (dev 2026-09-11): 'K3 fused KDA decode disabled: unexpected conv/A_log/dt_bias layout' on every layer
- [#39521](https://github.com/sgl-project/sglang/issues/39521) [RFC] FuseEP Integration for MiniMax-M3 Prefill on Ascend NPU
- [#39517](https://github.com/sgl-project/sglang/issues/39517) [Bug] NEXTN with Qwen3.5-122B-A10B-FP8 memory-faults on MI300X/MI325X/MI355X (aiter backend, rocm10 nightlies); triton works, SGLANG_USE_AITER_UNIFIED_ATTN works on gfx942 only
- [#45351](https://github.com/sgl-project/sglang/issues/45351) [Perf] HiCache PP-sync drain makes the PP prefill scheduler lock-step across ranks
- [#50438](https://github.com/sgl-project/sglang/issues/50438) [NPU][Docs] W8A8 keeps less KV cache than BF16 at the same `--mem-fraction-static`
- [#50446](https://github.com/sgl-project/sglang/issues/50446) [NPU][Docs] Die-to-TP conversion is documented only for A3, not for A2
- [#50445](https://github.com/sgl-project/sglang/issues/50445) [NPU][Docs] Prefix-cache guidance is contradictory on the Qwen3.6-27B best-practices page
- [#50439](https://github.com/sgl-project/sglang/issues/50439) [NPU][Docs] Missing model deployment page for Qwen3.8-27B
- [#50437](https://github.com/sgl-project/sglang/issues/50437) [NPU][Docs] GSM8K evaluation fails with the default ModelScope dataset hub
- [#50436](https://github.com/sgl-project/sglang/issues/50436) [NPU][Docs] Accuracy evaluation fails when `--model` points to a read-only weights directory

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 135,087 · **Open issues:** 2,611 · **Last push:** <1h ago

Today, llama.cpp released versions b12387, b12386, and b12385, featuring important fixes such as correcting ctz64 operations on 32-bit systems, resolving hexagon mask tail issues, and adjusting feedforward weight scales in the qwen2vl model to prevent output errors. Significant merged pull requests included enhancements for the Inkling 2 support and various optimizations across the Metal and Vulkan backends, improving overall performance and compatibility. Notably, a new issue was reported regarding CPU-to-GPU prompt-cache restores, causing inference stalls under specific conditions, which will require attention in upcoming updates.

#### 🚀 New Releases
- [b12387](https://github.com/ggml-org/llama.cpp/releases/tag/b12387) b12387
- [b12386](https://github.com/ggml-org/llama.cpp/releases/tag/b12386) b12386
- [b12385](https://github.com/ggml-org/llama.cpp/releases/tag/b12385) b12385
- [b12383](https://github.com/ggml-org/llama.cpp/releases/tag/b12383) b12383
- [b12381](https://github.com/ggml-org/llama.cpp/releases/tag/b12381) b12381
- [b12380](https://github.com/ggml-org/llama.cpp/releases/tag/b12380) b12380
- [b12379](https://github.com/ggml-org/llama.cpp/releases/tag/b12379) b12379
- [b12378](https://github.com/ggml-org/llama.cpp/releases/tag/b12378) b12378
- [b12377](https://github.com/ggml-org/llama.cpp/releases/tag/b12377) b12377
- [b12376](https://github.com/ggml-org/llama.cpp/releases/tag/b12376) b12376

#### ✅ Merged PRs
- [#32296](https://github.com/ggml-org/llama.cpp/pull/32296) model : metal : workaround fusion for LFM3
- [#32217](https://github.com/ggml-org/llama.cpp/pull/32217) feat: add Inkling 2 support (text + vision)
- [#31478](https://github.com/ggml-org/llama.cpp/pull/31478) common : reject out-of-range grammar_triggers type instead of aborting (#30835)
- [#30492](https://github.com/ggml-org/llama.cpp/pull/30492) Fix connection reuse after streamed responses
- [#32228](https://github.com/ggml-org/llama.cpp/pull/32228) hexagon: add TIMESTEP_EMBEDDING HVX kernel
- [#32287](https://github.com/ggml-org/llama.cpp/pull/32287) memory : fix non-consecutive position warning for M-RoPE
- [#32203](https://github.com/ggml-org/llama.cpp/pull/32203) llamafile: introduce more Q0 quant support for s390x
- [#31438](https://github.com/ggml-org/llama.cpp/pull/31438) llama : allocate the tensor staging buffer from the CPU buffer type
- [#31416](https://github.com/ggml-org/llama.cpp/pull/31416) vulkan: Explicitly include SPIRV-Headers
- [#31323](https://github.com/ggml-org/llama.cpp/pull/31323) vulkan: optimize prompt processing Flash Attention for RDNA3 and RDNA4
- [#28982](https://github.com/ggml-org/llama.cpp/pull/28982) cuda : keep columns in registers for cooperative softmax
- [#31990](https://github.com/ggml-org/llama.cpp/pull/31990) vulkan: optimize matrix multiplication for narrow N
- [#32024](https://github.com/ggml-org/llama.cpp/pull/32024) vulkan: use GPU copies on UMA with uncached memory on Intel
- [#32109](https://github.com/ggml-org/llama.cpp/pull/32109) sycl : optimize mtmd image processing
- [#32164](https://github.com/ggml-org/llama.cpp/pull/32164) chat : allow undeclared tool calls in LFM2 tool-call grammar
- [#32259](https://github.com/ggml-org/llama.cpp/pull/32259) docs : add OpenVINO backend to ops matrix
- [#32271](https://github.com/ggml-org/llama.cpp/pull/32271) chat : allow tool calls inside reasoning blocks for Ministral-3
- [#32282](https://github.com/ggml-org/llama.cpp/pull/32282) common : fix infinite recursion in debug build for peg parser dump
- [#32251](https://github.com/ggml-org/llama.cpp/pull/32251) opencl: fixes for q4_k mv oob access, f16 swiglu_oai, cpy with strided dst, batched group_norm and bf16 sigmoid
- [#32232](https://github.com/ggml-org/llama.cpp/pull/32232) chat : allow Gemma4 tool call during thought
- [#32273](https://github.com/ggml-org/llama.cpp/pull/32273) Fix ctz64 on 32bit
- [#32243](https://github.com/ggml-org/llama.cpp/pull/32243) hexagon: fix fa no-mask tail
- [#32241](https://github.com/ggml-org/llama.cpp/pull/32241) qwen2vl : apply FFN weight scales
- [#32237](https://github.com/ggml-org/llama.cpp/pull/32237) Register Granite4VisionForConditionalGeneration for text conversion
- [#31775](https://github.com/ggml-org/llama.cpp/pull/31775) ggml-backend : start a new split at an incompatible weight in a split without inputs
- [#32156](https://github.com/ggml-org/llama.cpp/pull/32156) convert : require matcher to check backbone definition (model_type)
- [#32267](https://github.com/ggml-org/llama.cpp/pull/32267) mtmd: fix video pixel aspect ratio and video rotation
- [#32188](https://github.com/ggml-org/llama.cpp/pull/32188) mtmd : allow custom video decoder
- [#32023](https://github.com/ggml-org/llama.cpp/pull/32023) jinja : reduce template rendering overhead
- [#30403](https://github.com/ggml-org/llama.cpp/pull/30403) mtmd : avoid padding-only Whisper audio chunks
- [#32016](https://github.com/ggml-org/llama.cpp/pull/32016) spec + model: refactor DFlash based speculative decoding methods
- [#31954](https://github.com/ggml-org/llama.cpp/pull/31954) Hexagon: add support for IQ2_XXS and NVFP4
- [#32230](https://github.com/ggml-org/llama.cpp/pull/32230) chat : remove mistral workaround

#### 🐛 New Issues
- [#32252](https://github.com/ggml-org/llama.cpp/issues/32252) Compile bug: NixOS build from flake.nix fails on building webui `bug` `nix` 💬1
- [#32280](https://github.com/ggml-org/llama.cpp/issues/32280) Misc. bug: CPU→GPU prompt-cache restores can stall inference during concurrent requests with unified KV enabled. `bug-unconfirmed` 💬4
- [#32276](https://github.com/ggml-org/llama.cpp/issues/32276) Misc. bug: infinite recursion + crash on debug dump `bug-unconfirmed` 💬3
- [#32246](https://github.com/ggml-org/llama.cpp/issues/32246) Feature Request: make docker tags predictable and programmatically accessible `enhancement` 💬3
- [#32274](https://github.com/ggml-org/llama.cpp/issues/32274) Eval bug: server: request bodies > 100 MiB silently rejected with HTTP 413 (vendored cpp-httplib default) — make the limit configurable at runtime `bug` `server` 💬1
- [#32263](https://github.com/ggml-org/llama.cpp/issues/32263) RPC backend crashes with "peer closed" and "send failed" between Windows (AMD/Vulkan) and macOS (Apple Silicon/Metal) `bug-unconfirmed` 💬1
- [#32272](https://github.com/ggml-org/llama.cpp/issues/32272) Feature Request: Still no support for Clover-35B-A3B-Preview? `enhancement` 💬1
- [#32270](https://github.com/ggml-org/llama.cpp/issues/32270) Misc. bug: FP8 KV cache (-ctk/-ctv f8_e4m3) aborts at load on Metal: cache_k view in MTL0 cannot run SET_ROWS 💬1
- [#32258](https://github.com/ggml-org/llama.cpp/issues/32258) Eval bug: iSWA + KV Unified Fails to Find Memory Slots `bug-unconfirmed` 💬1
- [#32245](https://github.com/ggml-org/llama.cpp/issues/32245) Misc. bug: [Regression] Significant prefill performance drop on V100 (sm_70) in v1.0.0 compared to v0.8.0 `bug-unconfirmed` 💬1
- [#32295](https://github.com/ggml-org/llama.cpp/issues/32295) Misc. bug: metal : RMS_NORM+MUL+ADD fusion misses ADD with the chain in src[1] `bug-unconfirmed`
- [#32293](https://github.com/ggml-org/llama.cpp/issues/32293) Compile bug: test-llama-mmap: opened with direct I/O (alignment: 4096 bytes) `bug-unconfirmed`
- [#32291](https://github.com/ggml-org/llama.cpp/issues/32291) Misc. bug: OpenVINO backend fails on Qwen3.5 models (mask shape mismatch on CPU device, SIGSEGV on GPU device)
- [#32290](https://github.com/ggml-org/llama.cpp/issues/32290) Eval bug: Vulkan/RADV ~18% tg128 regression on Radeon 890M (RDNA 3.5, UMA) between b10830 and b12387
- [#32289](https://github.com/ggml-org/llama.cpp/issues/32289) Compile bug: Fails on GNU/Hurd due to unconditional `PATH_MAX` usage `bug-unconfirmed`
- [#32283](https://github.com/ggml-org/llama.cpp/issues/32283) Eval bug: MTP draft context fails to allocate when the build carries a second backend that sees other GPUs
- [#32264](https://github.com/ggml-org/llama.cpp/issues/32264) Feature Request: Honor --chunks when using llama-perplexity with --kl-divergence- #32257⁠ `enhancement`
- [#32260](https://github.com/ggml-org/llama.cpp/issues/32260) Misc. bug: llama-server: 500 "Unexpected empty grammar stack after accepting piece" when server-side grammar is combined with ignore-eos

#### 🔒 Closed Issues
- [#20837](https://github.com/ggml-org/llama.cpp/issues/20837) Eval bug: Qwen3.5 9B often prints tool calls in XML and stops when thinking is enabled - tool calls inside thinking block
- [#28661](https://github.com/ggml-org/llama.cpp/issues/28661) Server/CUDA: CUDA Flash-Attention Causes Server Crash using SM70 V100 Volta for models with Non-Standard Dimension Heads
- [#32276](https://github.com/ggml-org/llama.cpp/issues/32276) Misc. bug: infinite recursion + crash on debug dump
- [#29680](https://github.com/ggml-org/llama.cpp/issues/29680) server: streaming responses advertise Keep-Alive but the connection is closed after the stream, causing ReadError/RemoteProtocolError on pooled HTTP clients
- [#31900](https://github.com/ggml-org/llama.cpp/issues/31900) Misc. bug: Vulkan, Intel Arc 140T iGPU (Windows): device→host read-back ~10x slower than host→device (prompt_save and context checkpoints)
- [#29248](https://github.com/ggml-org/llama.cpp/issues/29248) Eval bug: Ministral-3 tool-calls during reasoning are not processed
- [#30835](https://github.com/ggml-org/llama.cpp/issues/30835) Misc. bug: Missing range check on grammar_triggers[].type allows remote SIGABRT in llama-server
- [#31675](https://github.com/ggml-org/llama.cpp/issues/31675) Eval bug: --moe-cache-mib aborts at load in llama_moe_cache::impl::copy on ROCm/HIP (RX 6800 XT, gfx1030, Qwen3.6-35B-A3B) — cache size independent
- [#32231](https://github.com/ggml-org/llama.cpp/issues/32231) Eval bug: Gemma4 fails to call tool after a thought session
- [#32101](https://github.com/ggml-org/llama.cpp/issues/32101) Eval bug: qwen2vl graph ignores NVFP4 FFN scales (NULL ffn_*_s), NVIDIA Qwen2.5-VL-7B-Instruct-NVFP4 gives NaN / PPL ~1e6
- [#32152](https://github.com/ggml-org/llama.cpp/issues/32152) Misc. bug: pplx-decider detection matches non-Qwen3.5 models by file names only, blocks conversion

### Ollama (`ollama/ollama`)

**Stars:** 186,985 · **Open issues:** 4,655 · **Last push:** 1d ago

On November 15, 2026, there were no new releases or merged pull requests for Ollama, indicating a routine maintenance day. The only notable item was the opening of a new issue labeled #19701, which inquires about an unspecified problem in Chinese, potentially drawing attention from the community for further clarification. As there were no significant updates or fixes, the focus remains on addressing the new issue that could impact user experience or functionality.

#### 🐛 New Issues
- [#19701](https://github.com/ollama/ollama/issues/19701) 你好, 请问这个是什么问题导致的 `bug` 💬1

#### 🔒 Closed Issues
- [#13503](https://github.com/ollama/ollama/issues/13503) Request to Publish Public FP16 Model on Ollama Cloud – PrettyBird BCE Basic 14B Coder

### LiteLLM (`BerriAI/litellm`)

**Stars:** 63,263 · **Open issues:** 5,184 · **Last push:** <1h ago

Today, LiteLLM saw the release of version v1.110.0-rc.3 and v1.108.9, both of which include Docker images signed with the new cosign key, enhancing security around image deployment. Additionally, v1.107.0-rc.4 was also released as a further candidate for testing in the 1.107 series. Among the significant merged pull requests, the team implemented a fix to rename the Customer Portal to Customer Management, transitioned the litellm-proxy package to align with the core liteLLM version, and introduced features addressing database error handling and performance optimizations. A noteworthy new issue raised today is the request for a configurable denylist for request-body parameters, indicating an ongoing focus on improving user customization and safety.

#### 🚀 New Releases
- [v1.110.0-rc.3](https://github.com/BerriAI/litellm/releases/tag/v1.110.0-rc.3) v1.110.0-rc.3
- [v1.108.9](https://github.com/BerriAI/litellm/releases/tag/v1.108.9) v1.108.9
- [v1.107.0-rc.4](https://github.com/BerriAI/litellm/releases/tag/v1.107.0-rc.4) v1.107.0-rc.4

#### ✅ Merged PRs
- [#51891](https://github.com/BerriAI/litellm/pull/51891) fix(ui): rename Customer Portal to Customer Management
- [#51807](https://github.com/BerriAI/litellm/pull/51807) fix(packaging): keep the litellm-proxy package version in step with litellm
- [#51868](https://github.com/BerriAI/litellm/pull/51868) fix(spend): support PostgreSQL 12 delivery migrations
- [#51857](https://github.com/BerriAI/litellm/pull/51857) test(e2e): run the batch lifecycle with a key that only reaches its own deployment
- [#51876](https://github.com/BerriAI/litellm/pull/51876) chore: bump litellm-enterprise 0.1.85 -> 0.1.86, litellm-proxy-extras 0.4.116 -> 0.4.117
- [#51881](https://github.com/BerriAI/litellm/pull/51881) chore(cost-map): add fal_ai seedream v5 pro US edit and text-to-image rows priced per image from their fal.ai pages
- [#51878](https://github.com/BerriAI/litellm/pull/51878) test(router): hold the concurrent upsert where its build reads the list back
- [#51864](https://github.com/BerriAI/litellm/pull/51864) ci(unit): cut unit check time with cheaper per-test resets and fewer non-unit tests
- [#51726](https://github.com/BerriAI/litellm/pull/51726) feat(otel v2): proxy-level default langfuse_span_scope for key and team destinations
- [#51875](https://github.com/BerriAI/litellm/pull/51875) test(integration): backport stale daily activity, Vertex image edit and Gemini image usage tests to lts/1.108.x
- [#51549](https://github.com/BerriAI/litellm/pull/51549) feat(db): take the rollup lock_timeout from the caller and keep team lock statements unnamed under PgBouncer
- [#49801](https://github.com/BerriAI/litellm/pull/49801) feat(db): classify errors and recycle poisoned pools like Prisma
- [#49810](https://github.com/BerriAI/litellm/pull/49810) feat(db): emit DB service events from native operations
- [#49804](https://github.com/BerriAI/litellm/pull/49804) feat(db): add an optional native reader pool with explicit routing
- [#49798](https://github.com/BerriAI/litellm/pull/49798) feat(db): add the SQLx pool foundation with the writer pool
- [#51644](https://github.com/BerriAI/litellm/pull/51644) refactor(router): shape attempt kwargs in router-core
- [#51539](https://github.com/BerriAI/litellm/pull/51539) feat(s3-log): replace the python s3_v2 logger with a rust callback
- [#51863](https://github.com/BerriAI/litellm/pull/51863) fix(vertex_ai): backport #40376 versioned Claude max_tokens to lts/1.108.x
- [#40376](https://github.com/BerriAI/litellm/pull/40376) fix(vertex_ai): resolve correct default max_tokens for versioned claude ids
- [#51487](https://github.com/BerriAI/litellm/pull/51487) fix(proxy): close streams before rebuilding the served output for logging
- [#51835](https://github.com/BerriAI/litellm/pull/51835) fix(vertex-ai): send union-root tool schemas as parametersJsonSchema
- [#51860](https://github.com/BerriAI/litellm/pull/51860) fix(openai): backport #49176 to lts/1.108.x
- [#51770](https://github.com/BerriAI/litellm/pull/51770) perf(logging): scan opt-in spend-log tokens natively
- [#51401](https://github.com/BerriAI/litellm/pull/51401) feat(guardrails): straiker stream_mode, per-phase logging and prompt-block replies
- [#51482](https://github.com/BerriAI/litellm/pull/51482) feat: email key owners before opted-in virtual keys expire
- [#51721](https://github.com/BerriAI/litellm/pull/51721) feat(messages): serve azure ai foundry messages on rust only
- [#51805](https://github.com/BerriAI/litellm/pull/51805) fix(proxy): stop wildcard aliases over unknown orgs listing every catalog id
- [#51858](https://github.com/BerriAI/litellm/pull/51858) fix: backport #51451, #51449 and #51715 to rc/1.110.0
- [#51817](https://github.com/BerriAI/litellm/pull/51817) fix(sdk): stop global model_fallbacks from recursing on every completion call
- [#51859](https://github.com/BerriAI/litellm/pull/51859) test(anthropic): expect adaptive thinking temperature dropping under drop_params
- [#51838](https://github.com/BerriAI/litellm/pull/51838) fix(router)!: name the request size when usage-based routing refuses an over-tpm request
- [#51771](https://github.com/BerriAI/litellm/pull/51771) feat(cli): backport per-user GitHub Copilot credential connect to rc/1.107.0 (#50863)
- [#51854](https://github.com/BerriAI/litellm/pull/51854) fix: backport #51334, #51380 and main's dependency bumps to rc/1.110.0
- [#51853](https://github.com/BerriAI/litellm/pull/51853) chore: bump litellm to 1.108.9 on lts/1.108.x
- [#51608](https://github.com/BerriAI/litellm/pull/51608) feat(proxy): add per-model project batch enqueued token limits
- [#51385](https://github.com/BerriAI/litellm/pull/51385) fix(otel): send the Langfuse environment, release and version on OTel v2
- [#51802](https://github.com/BerriAI/litellm/pull/51802) fix(openai): cap and bill web search rounds on Responses-pinned chat completions
- [#51848](https://github.com/BerriAI/litellm/pull/51848) test(configuration): restore isolated gateway launcher imports
- [#51847](https://github.com/BerriAI/litellm/pull/51847) test(spend): align queued baggage mapping fixtures
- [#51849](https://github.com/BerriAI/litellm/pull/51849) test(streaming): assert queued first-error JSON response
- [#51800](https://github.com/BerriAI/litellm/pull/51800) chore: move LiteLLM's configs and e2e tests off gpt-4o and gpt-4.1 before their 2027-01-14 shutdown
- [#51292](https://github.com/BerriAI/litellm/pull/51292) fix(bedrock): backport OpenAI vector store search filter mapping to lts/1.108.x
- [#51291](https://github.com/BerriAI/litellm/pull/51291) fix(bedrock): map OpenAI vector store search filters to AWS RetrievalFilter
- [#50657](https://github.com/BerriAI/litellm/pull/50657) fix(aiohttp): reset the upstream connection when a stream closes early, so aborted Bedrock Invoke streams stop
- [#51829](https://github.com/BerriAI/litellm/pull/51829) fix(scim): skip groups with no team so a PATCH or PUT still deactivates the user
- [#51834](https://github.com/BerriAI/litellm/pull/51834) fix(gateway)!: apply a deployment's Messages params and fill model capabilities from the cost map
- [#51827](https://github.com/BerriAI/litellm/pull/51827) fix(together_ai): stop listing retired Together ids
- [#51427](https://github.com/BerriAI/litellm/pull/51427) feat(github_copilot): support GitHub App authentication with PEM upload
- [#51250](https://github.com/BerriAI/litellm/pull/51250) feat(decisions): backport Vercel AI Gateway decision models to lts/1.108.x (#50642)
- [#51816](https://github.com/BerriAI/litellm/pull/51816) test(e2e): move audio, realtime, and Langfuse tests off model ids with shutdown dates
- [#50642](https://github.com/BerriAI/litellm/pull/50642) feat(decisions): support Vercel AI Gateway decision models
- [#51753](https://github.com/BerriAI/litellm/pull/51753) fix(proxy): run baggage tag mappings and budget checks on /queue/chat/completions
- [#51133](https://github.com/BerriAI/litellm/pull/51133) fix(proxy): count the request's tool_choice on the token count routes
- [#50210](https://github.com/BerriAI/litellm/pull/50210) fix(openrouter): suppress empty post-finish choice before usage trailer
- [#51763](https://github.com/BerriAI/litellm/pull/51763) feat(proxy): support budget_limits windows on internal users
- [#51787](https://github.com/BerriAI/litellm/pull/51787) fix(logging): send one async success log per sync bridged Responses stream
- [#51083](https://github.com/BerriAI/litellm/pull/51083) feat(custom_llm): let custom providers serve native generateContent
- [#51769](https://github.com/BerriAI/litellm/pull/51769) fix(azure): backport Foundry project and resource /openai/v1 Responses bases to lts/1.108.x
- [#51767](https://github.com/BerriAI/litellm/pull/51767) fix(azure): send no api-version on Foundry project /openai/v1 Responses bases
- [#51796](https://github.com/BerriAI/litellm/pull/51796) fix(responses): backport cache_control breakpoints on the chat-to-Responses bridge to lts/1.108.x
- [#51783](https://github.com/BerriAI/litellm/pull/51783) fix(responses): send cache_control as a prompt_cache_breakpoint on the chat-to-Responses bridge
- [#51780](https://github.com/BerriAI/litellm/pull/51780) fix(proxy): retrieve and delete a managed file when the request also names a model
- [#51751](https://github.com/BerriAI/litellm/pull/51751) fix(responses): accept a string or tuple allowed_openai_params on Responses models instead of answering 500
- [#50249](https://github.com/BerriAI/litellm/pull/50249) fix(cohere): honor COHERE_API_BASE for embeddings
- [#51804](https://github.com/BerriAI/litellm/pull/51804) refactor: drop a comprehension suppression and restating comments from new customer hierarchy and v2 callback code
- [#51252](https://github.com/BerriAI/litellm/pull/51252) fix(proxy): honor cancel_on_disconnect on the rerank endpoints
- [#51329](https://github.com/BerriAI/litellm/pull/51329) fix(mistral): send Magistral reasoning as supported native levels
- [#50653](https://github.com/BerriAI/litellm/pull/50653) feat(mistral): add native upstream token counting support (#50652)
- [#51239](https://github.com/BerriAI/litellm/pull/51239) fix(vertex_ai): reuse one Google token across RAG Engine searches and cold bursts
- [#51760](https://github.com/BerriAI/litellm/pull/51760) fix(azure): drop the traceback from stream-cut errors sent to clients and alerts
- [#51774](https://github.com/BerriAI/litellm/pull/51774) fix(gateway): return Claude thinking blocks on chat completions instead of a 500
- [#51786](https://github.com/BerriAI/litellm/pull/51786) feat(vertex_ai): backport caller identity labels on Vertex requests to lts/1.108.x
- [#51748](https://github.com/BerriAI/litellm/pull/51748) fix(azure_ai): send reasoning_effort to Foundry Kimi K3 and keep its reasoning_content on lts/1.108.x
- [#51747](https://github.com/BerriAI/litellm/pull/51747) fix(azure_ai): send reasoning_effort to Foundry Kimi K3 and keep its reasoning_content
- [#50401](https://github.com/BerriAI/litellm/pull/50401) fix(bedrock): backport Converse s3:// media sources to lts/1.108.x
- [#51754](https://github.com/BerriAI/litellm/pull/51754) fix(proxy): list key and team aliases on /model_group/info and apply listing callbacks to them
- [#50577](https://github.com/BerriAI/litellm/pull/50577) fix(bedrock): send s3:// image, document and video URLs to Converse as S3 sources
- [#51305](https://github.com/BerriAI/litellm/pull/51305) fix(anthropic): restore sync messages streams for OpenAI and Azure
- [#50732](https://github.com/BerriAI/litellm/pull/50732) feat(vertex_ai): label Vertex requests with the caller's key, team, org, and project
- [#51339](https://github.com/BerriAI/litellm/pull/51339) test(logging): isolate bridged call recorder per request
- [#51356](https://github.com/BerriAI/litellm/pull/51356) fix(responses): backport mixed reasoning and answer preservation to lts/1.108.x
- [#51743](https://github.com/BerriAI/litellm/pull/51743) ci(integration): point the rust gateway install step at litellm/packaging
- [#51284](https://github.com/BerriAI/litellm/pull/51284) fix(count_tokens): answer 400, not 500, for a message without role or content on Anthropic and Azure AI
- [#51319](https://github.com/BerriAI/litellm/pull/51319) fix(cli): let Claude Code renew a --pkce login's key through lite's apiKeyHelper

#### 🐛 New Issues
- [#51765](https://github.com/BerriAI/litellm/issues/51765) [Feature]: Configurable request-body parameter denylist (general_settings.banned_request_body_params) 💬3
- [#51871](https://github.com/BerriAI/litellm/issues/51871) [Bug]: opencode_go chat route drops reasoning_effort (even 'none'), while the same endpoint honors it via custom_llm_provider=openai `llm translation` 💬1
- [#51826](https://github.com/BerriAI/litellm/issues/51826) [Docs]: Explain how Python callbacks behave during the Rust gateway rollout 💬1
- [#51825](https://github.com/BerriAI/litellm/issues/51825) [Feature]: Run custom proxy callback setup and cleanup during application lifespan 💬1
- [#51824](https://github.com/BerriAI/litellm/issues/51824) [Bug]: Raw HTTP text bodies with lone UTF-16 surrogates fail before dispatch 💬1
- [#51823](https://github.com/BerriAI/litellm/issues/51823) [Feature]: Allow operators to omit LiteLLM response headers across proxy paths 💬1
- [#51832](https://github.com/BerriAI/litellm/issues/51832) [Bug]: Datadog LLM Observability drops synchronous SDK completion spans `llm translation`
- [#51813](https://github.com/BerriAI/litellm/issues/51813) Native Gemini generateContent logs as acompletion with empty model_group, so Endpoint Activity omits it `llm translation`
- [#51810](https://github.com/BerriAI/litellm/issues/51810) [Feature]: Hide api_base from non-admin callers on /model/info, as /health already does `llm translation`

#### 🔒 Closed Issues
- [#35563](https://github.com/BerriAI/litellm/issues/35563) [Bug]: Reused provider response IDs collide in spend logs
- [#50156](https://github.com/BerriAI/litellm/issues/50156) [Bug]: OpenRouter streaming emits an empty post-finish choice without usage before the final usage chunk (v1.108.0)
- [#50248](https://github.com/BerriAI/litellm/issues/50248) [Bug]: COHERE_API_BASE is ignored for cohere embeddings (rerank honors it)
- [#40363](https://github.com/BerriAI/litellm/issues/40363) [Bug]: Vertex AI claude versioned ids get a silent 4096 max_tokens default, and vertex_ai/claude-haiku-4-5* map entries cap output at 8192 instead of 64000
- [#50514](https://github.com/BerriAI/litellm/issues/50514) [Bug]: Bedrock Invoke /v1/messages stream keeps generating after the detached-drain abort - httpx response is never closed
- [#51197](https://github.com/BerriAI/litellm/issues/51197) [Bug]: /v1/rerank ignores general_settings.cancel_on_disconnect, so abandoned reranks hold upstream calls until timeout and retry
- [#51666](https://github.com/BerriAI/litellm/issues/51666) [Bug]: `opencode_go` streaming via `/v1/chat/completions` dies with `TypeError: 'NoneType' object is not an iterator` (APIConnectionError 500) for models whose Go endpoint is `/v1/messages`
- [#43483](https://github.com/BerriAI/litellm/issues/43483) [Bug]: Spend-log rows are dropped when the flush fails with a non-Prisma error
- [#36938](https://github.com/BerriAI/litellm/issues/36938) [Bug]: Helm upgrade rolls new proxy pods before the migration Job completes
- [#41639](https://github.com/BerriAI/litellm/issues/41639) [Bug]: Vertex AI 400 rejection when tools define top-level anyOf parameter schemas without type: object
- [#47898](https://github.com/BerriAI/litellm/issues/47898) [Bug]: OTel v2 LangfuseMapper drops langfuse.environment / release / version (parity regression from OTel v1)
- [#50636](https://github.com/BerriAI/litellm/issues/50636) [Feature]: Support Vercel AI Gateway decision models on /v1/decisions
- [#50652](https://github.com/BerriAI/litellm/issues/50652) [Feature]: Support native upstream token counting for Mistral models via Mistral's official responses token count endpoint.

### Unsloth (`unslothai/unsloth`)

**Stars:** 79,514 · **Open issues:** 442 · **Last push:** <1h ago

On November 15, 2026, there were no new releases for Unsloth; however, notable merged pull requests included enhancements to the Studio and AMD NPU functionalities. Improvements in the Studio encompassed adjustments for handling connections, quality maintenance in MiniMax-H3 GGUF video exports, and the introduction of a feature that allows the application to ask for user confirmation before executing risky commands. Additionally, a fix was implemented to ensure that model loads properly indicate errors instead of generic failure messages. Among new issues, a significant bug was reported regarding a drop in speed for the Qwen3.8 model following an upgrade to the Llama cpp library, prompting inquiries into the underlying changes affecting performance.

#### ✅ Merged PRs
- [#17546](https://github.com/unslothai/unsloth/pull/17546) Studio: keep link text before a nested anchor
- [#17782](https://github.com/unslothai/unsloth/pull/17782) Orchestrator shutdown tests: write the partial frame directly instead of racing the drainer
- [#17770](https://github.com/unslothai/unsloth/pull/17770) Studio: MiniMax-H3 GGUF video follows the reference recipe and keeps quality through the MP4 export
- [#17753](https://github.com/unslothai/unsloth/pull/17753) Studio: rework Settings > Connections with status, a provider gallery and new connection types
- [#17729](https://github.com/unslothai/unsloth/pull/17729) Studio: tell the run when a 4-bit request trains 16-bit, or a module selector is ignored
- [#17769](https://github.com/unslothai/unsloth/pull/17769) Studio INT8 attention: faster kernel on T4, L4, A100 and RTX PRO 6000, same output bits
- [#17743](https://github.com/unslothai/unsloth/pull/17743) Studio: summarize long cloud chats instead of dropping their oldest turns
- [#17768](https://github.com/unslothai/unsloth/pull/17768) Scan baseline: re-review fastmcp-slim 4.2.0 apps_dev.py
- [#17764](https://github.com/unslothai/unsloth/pull/17764) Studio: follow the MiniMax-H3 reference recipe for references, sampling and seeds
- [#17766](https://github.com/unslothai/unsloth/pull/17766) Studio: MiniMax-H3-Image follows the reference recipe for references, seeding and output size
- [#15513](https://github.com/unslothai/unsloth/pull/15513) Desktop: flat shadows and square dialogs when WebKitGTK paints on the CPU
- [#17535](https://github.com/unslothai/unsloth/pull/17535) [Feature] AMD NPU: Settings > Storage counts and lists downloaded NPU models and deletes them per folder through Lemonade
- [#17610](https://github.com/unslothai/unsloth/pull/17610) [Feature] AMD NPU: name NPU models by their Hugging Face repo instead of the Lemonade ID
- [#17330](https://github.com/unslothai/unsloth/pull/17330) fix(windows): recover blocked Python with a signed managed runtime
- [#17767](https://github.com/unslothai/unsloth/pull/17767) Baseline the new credential-path test input from #17708
- [#17510](https://github.com/unslothai/unsloth/pull/17510) [Feature] AMD NPU: power mode, prefill chunk length and image pre-resize in model settings
- [#17765](https://github.com/unslothai/unsloth/pull/17765) Lift the private-push refusal into the model card upload test harness
- [#17708](https://github.com/unslothai/unsloth/pull/17708) Studio: ask before trap or script runs a risky command
- [#17526](https://github.com/unslothai/unsloth/pull/17526) [Feature] AMD NPU: large model downloads check free disk space first, can be cancelled and resumed, refuse a second Unsloth Studio process, and show Verifying/Finishing instead of a frozen 99%
- [#17757](https://github.com/unslothai/unsloth/pull/17757) install.sh: use a checkout macOS arm64 overrides only when installing that checkout
- [#17758](https://github.com/unslothai/unsloth/pull/17758) Studio: INT8 attention for diffusers-dispatch DiTs (Qwen-Image-2.1, Wan 2.2)
- [#17759](https://github.com/unslothai/unsloth/pull/17759) [Bug] AMD NPU: Qwen3.5 Q4NX exports fail to load in FastFlowLM
- [#17539](https://github.com/unslothai/unsloth/pull/17539) [Bug] AMD NPU: a failed model load hides FastFlowLM's own error, so the user only sees "Failed to load X model!"
- [#17531](https://github.com/unslothai/unsloth/pull/17531) [Bug] AMD NPU: models larger than the memory the NPU can map download fully, then fail at load with no warning
- [#17760](https://github.com/unslothai/unsloth/pull/17760) Extract the private-push refusal into the merged Hub destination test harness
- [#17512](https://github.com/unslothai/unsloth/pull/17512) [Feature] AMD NPU: write Lemonade's output to its own log like llama-server, and show why a model failed to load
- [#17515](https://github.com/unslothai/unsloth/pull/17515) [Feature] AMD NPU: pick the Q4NX source GGUF with a model picker instead of free-text fields
- [#17756](https://github.com/unslothai/unsloth/pull/17756) Tests: read the vendor guard by path component, name the encoding of a rollout fixture
- [#17525](https://github.com/unslothai/unsloth/pull/17525) [Bug] AMD NPU: shared Hub ?npu= links only open their card when the format filter is already NPU, and the card's README can be newer than the installed files
- [#17754](https://github.com/unslothai/unsloth/pull/17754) Tests: bump soupsieve to 4.0 in the RAG upload test requirements
- [#17755](https://github.com/unslothai/unsloth/pull/17755) Security lint: record the sandbox editable-finder exec in the exec baseline
- [#17522](https://github.com/unslothai/unsloth/pull/17522) [Feature] AMD NPU: Q4NX export only on machines with an AMD NPU and FastFlowLM installed
- [#17506](https://github.com/unslothai/unsloth/pull/17506) [Feature] AMD NPU: drop the FastFlowLM / Lemonade version line from the model picker and Hub
- [#17747](https://github.com/unslothai/unsloth/pull/17747) Studio: keep MiniMax-H3 reference images at the size Studio fits them to
- [#17749](https://github.com/unslothai/unsloth/pull/17749) Studio: keep the first-run password off loopback pages fetched by another OS user
- [#17705](https://github.com/unslothai/unsloth/pull/17705) fix(studio): import and dataset pipeline edge fixes
- [#17533](https://github.com/unslothai/unsloth/pull/17533) [Bug] AMD NPU: Q4NX export accepts any model of a supported architecture, so Llama 3.3 70B, Gemma 4 26B-A4B and Qwen3.5-122B convert into files FastFlowLM can't run
- [#17460](https://github.com/unslothai/unsloth/pull/17460) Studio Transcribe: optional speaker accent hint
- [#17727](https://github.com/unslothai/unsloth/pull/17727) fix(studio): make the conversation wallpaper preview match the chat
- [#17752](https://github.com/unslothai/unsloth/pull/17752) Save: refuse a private=True Hub push into an existing public repo
- [#17523](https://github.com/unslothai/unsloth/pull/17523) [Bug] AMD: Unsloth Studio / Desktop VRAM tile reads Unknown when an unreadable shared iGPU sits beside discrete cards that report usage
- [#15275](https://github.com/unslothai/unsloth/pull/15275) Desktop: keep the AppImage's bundled atk-bridge off unless the user chose
- [#17508](https://github.com/unslothai/unsloth/pull/17508) [Feature] AMD NPU: show the NPU and its resident model in the live monitor
- [#17707](https://github.com/unslothai/unsloth/pull/17707) Studio: keep line breaks and indentation when pasting formatted text
- [#11033](https://github.com/unslothai/unsloth/pull/11033) Studio: Information section with Hub model details in the chat settings
- [#17616](https://github.com/unslothai/unsloth/pull/17616) [Feature] AMD NPU: auto compaction for NPU chats instead of stopping at a full context window
- [#17521](https://github.com/unslothai/unsloth/pull/17521) [Bug] AMD NPU: convert stock Qwen3.5 GGUFs to Q4NX with the converter fix that stops routing them to the Qwen3 converter
- [#17534](https://github.com/unslothai/unsloth/pull/17534) [Bug] AMD NPU: Q4NX export parses the whole GGUF vocab twice before converting and re-quantizes Q4_K_M even when Q4_0/Q4_1 was also exported, on every non-Qwen3.5 model
- [#17530](https://github.com/unslothai/unsloth/pull/17530) [Bug] AMD NPU: Unsloth Studio sends a tool catalog on every NPU chat, which turns FastFlowLM speculative decoding off and drops qwen3.8 decode to ~0.3 tok/s
- [#17626](https://github.com/unslothai/unsloth/pull/17626) Studio: keep a chat's pip install out of Studio's own Python environment
- [#17748](https://github.com/unslothai/unsloth/pull/17748) Tests: excuse the uv copy in the CUDA runtime wheel test from the AV009 lint
- [#17532](https://github.com/unslothai/unsloth/pull/17532) [Bug] AMD NPU: chat titles run on the loaded NPU model and evict the chat's conversation cache, so the next turn re-prefills the whole conversation
- [#17715](https://github.com/unslothai/unsloth/pull/17715) Studio: count in-flight huggingface_hub 1.18+ partials in image and video load progress
- [#17744](https://github.com/unslothai/unsloth/pull/17744) Studio: say when a llama.cpp update leaves the CUDA build on the CPU
- [#17509](https://github.com/unslothai/unsloth/pull/17509) [Bug] AMD: Strix Halo VRAM shows carve-out plus shared RAM instead of the carve-out
- [#17736](https://github.com/unslothai/unsloth/pull/17736) Tests: make the diffusion LM tests import inference on their own, count the diffusion shard
- [#17737](https://github.com/unslothai/unsloth/pull/17737) Studio INT8 attention: read ROCm through is_rocm_torch, skip the dispatch fixture without diffusers
- [#17745](https://github.com/unslothai/unsloth/pull/17745) Studio: trim comments on the empty browser tab check
- [#17514](https://github.com/unslothai/unsloth/pull/17514) [Feature] AMD NPU: open the Hugging Face model card for NPU models in the Hub
- [#17513](https://github.com/unslothai/unsloth/pull/17513) [Feature] AMD NPU: list new models that run on a Ryzen AI laptop first in the picker and Hub
- [#17646](https://github.com/unslothai/unsloth/pull/17646) Studio browser: import history, camera and microphone site settings, local links
- [#17740](https://github.com/unslothai/unsloth/pull/17740) Studio: composer picker restores header picker behaviour for favorites, cached MLX, updates and deletes
- [#17741](https://github.com/unslothai/unsloth/pull/17741) Studio: answer 503 on the speed limit route and keep capabilities up when the limit cannot be read
- [#15217](https://github.com/unslothai/unsloth/pull/15217) Decode graphs: release() and invalidate() re-arm a model that a capture failure disabled
- [#17731](https://github.com/unslothai/unsloth/pull/17731) fix: TextPreprocessor.validate_dataset counts samples while iterating, not with len(dataset)
- [#17652](https://github.com/unslothai/unsloth/pull/17652) Studio: let the Projects page import picker offer Markdown chats
- [#17692](https://github.com/unslothai/unsloth/pull/17692) studio: honor stop strings that are hidden special tokens
- [#16481](https://github.com/unslothai/unsloth/pull/16481) CLI: let inference and chat load models that need trust_remote_code
- [#17720](https://github.com/unslothai/unsloth/pull/17720) Studio sd.cpp: show Edit again for Qwen-Image 2.1 on shared-library builds
- [#15224](https://github.com/unslothai/unsloth/pull/15224) FP8 block dequant on gfx11 ROCm: route fp16 output to the byte decoder too
- [#16707](https://github.com/unslothai/unsloth/pull/16707) Studio: Always allow for browser scripts, globally or per site
- [#17505](https://github.com/unslothai/unsloth/pull/17505) [Feature] AMD NPU: list FastFlowLM and Lemonade versions under Settings > Engines
- [#17236](https://github.com/unslothai/unsloth/pull/17236) MoE: cover the autotuner with an empty expert
- [#17520](https://github.com/unslothai/unsloth/pull/17520) [Bug] AMD: GPU utilization on Windows is missing on comma-decimal locales (de-DE, fr-FR) because Get-Counter values are formatted with the host culture
- [#17697](https://github.com/unslothai/unsloth/pull/17697) Studio: download and load whole-pipeline SDXL GGUFs from the Hub
- [#17656](https://github.com/unslothai/unsloth/pull/17656) Studio: keep chats apart in a Combined CSV export and its import
- [#17645](https://github.com/unslothai/unsloth/pull/17645) Studio: refuse downloads when bandwidth settings cannot be read
- [#17710](https://github.com/unslothai/unsloth/pull/17710) Studio: import the prompts and replies current Codex versions write
- [#17702](https://github.com/unslothai/unsloth/pull/17702) Studio: show messages sent from another device in an open chat
- [#17046](https://github.com/unslothai/unsloth/pull/17046) BF16 AdamW on CPU: give each parameter its own rounding stream
- [#16943](https://github.com/unslothai/unsloth/pull/16943) Studio: sync the window material preference to the account
- [#16869](https://github.com/unslothai/unsloth/pull/16869) fix(chat_templates): map each turn by the keys it has
- [#17691](https://github.com/unslothai/unsloth/pull/17691) dataprep: keep special tokens in raw-text chunks
- [#17696](https://github.com/unslothai/unsloth/pull/17696) Studio: download single-file image checkpoints from the Model hub
- [#16429](https://github.com/unslothai/unsloth/pull/16429) Studio: hide MoE Layers on CPU when GPU Layers is 0
- [#15302](https://github.com/unslothai/unsloth/pull/15302) Studio: keep an offline copy of the Unsloth docs for RAG
- [#15979](https://github.com/unslothai/unsloth/pull/15979) Studio: Redesign the Audio pages
- [#17507](https://github.com/unslothai/unsloth/pull/17507) [Feature] AMD NPU: show the NPU models footer in the model picker as a full row
- [#17700](https://github.com/unslothai/unsloth/pull/17700) Studio: keep the download panel usable while a dialog is open
- [#17709](https://github.com/unslothai/unsloth/pull/17709) Studio: keep link addresses in PDF chat exports
- [#17712](https://github.com/unslothai/unsloth/pull/17712) Studio: keep the system prompt as typed in HTML and PDF exports
- [#17704](https://github.com/unslothai/unsloth/pull/17704) Studio: keep a closed Images or Video load toast closed
- [#16321](https://github.com/unslothai/unsloth/pull/16321) Studio Settings: search keeps its results after opening one
- [#17719](https://github.com/unslothai/unsloth/pull/17719) Studio Images: preserve gallery selections during generation
- [#17675](https://github.com/unslothai/unsloth/pull/17675) Studio: find uv off PATH for the CUDA runtime wheel step, and name Repair in the GPU backend warning
- [#10948](https://github.com/unslothai/unsloth/pull/10948) studio: add native IFM reasoning and tool-call support
- [#17695](https://github.com/unslothai/unsloth/pull/17695) Make the Colab password readable in dark mode
- [#17706](https://github.com/unslothai/unsloth/pull/17706) Studio: keep the Library's Suggested order and scroll position when an item is opened
- [#13779](https://github.com/unslothai/unsloth/pull/13779) feat(studio): add Delete all chats option to Recents dropdown
- [#17607](https://github.com/unslothai/unsloth/pull/17607) fix(studio): recognize direct lazy tensor mode
- [#17711](https://github.com/unslothai/unsloth/pull/17711) Studio: keep slash commands and pasted images in imported Claude Code chats
- [#17648](https://github.com/unslothai/unsloth/pull/17648) feat(studio): allow TLS certs from environment
- [#14570](https://github.com/unslothai/unsloth/pull/14570) Studio chat: open a new chat from a ?q= link
- [#17670](https://github.com/unslothai/unsloth/pull/17670) Studio: load update release notes on slower connections
- [#17603](https://github.com/unslothai/unsloth/pull/17603) Studio: size MOSS-Transcribe-Diarize max_tokens to the clip and the context
- [#17647](https://github.com/unslothai/unsloth/pull/17647) Studio: update audio.cpp in Docker, where its tree is on an image layer
- [#17726](https://github.com/unslothai/unsloth/pull/17726) Studio INT8 attention: Triton fallback when the CUDA kernel cannot load on NVIDIA
- [#17718](https://github.com/unslothai/unsloth/pull/17718) Studio: INT8 attention kernel for diffusion DiTs (NVIDIA sm75 to sm120, AMD gfx1151)
- [#17723](https://github.com/unslothai/unsloth/pull/17723) Backend CI: run test_diffusion* in its own pytest shard

#### 🐛 New Issues
- [#17733](https://github.com/unslothai/unsloth/issues/17733) [Bug] mtp stopped working after updated llama cpp b12340-mix-6186f42 `feature request` `bug` 💬3
- [#17773](https://github.com/unslothai/unsloth/issues/17773) [Bug] iOS "Add to Home Screen" shows a text-letter icon instead of the logo (no apple-touch-icon) 💬1
- [#17735](https://github.com/unslothai/unsloth/issues/17735) [Studio Bug] Windows Application Control blocks Python `_socket` DLL during Unsloth Studio setup `feature request` `bug` 💬1
- [#17724](https://github.com/unslothai/unsloth/issues/17724) [Bug] [UI] Assistant message background differs from conversation preview `feature request` `bug` 💬1
- [#17738](https://github.com/unslothai/unsloth/issues/17738) [Feature] ROCm: hybrid linear-attention packing opt-in passes the exactness probe but gives no net speedup on gfx1151 💬1
- [#17728](https://github.com/unslothai/unsloth/issues/17728) [Bug]After Llama cpp cuda upgrade, Qwen3.8 27B speed drop from 60t/s to 38t/s. what did it changed inside? `feature request` `bug` 💬1
- [#17730](https://github.com/unslothai/unsloth/issues/17730) [Bug] TextPreprocessor.validate_dataset miscounts total_samples for dict input and raises on IterableDataset `feature request` `bug` 💬1
- [#17772](https://github.com/unslothai/unsloth/issues/17772) [Feature] Create "Default Model" feature `feature request`
- [#17734](https://github.com/unslothai/unsloth/issues/17734) [Bug][ROCm] GDN causal conv1d falls back to MIOpen on gfx1151 - the HIP gate costs 3.1x step time, the Triton kernel is correct

#### 🔒 Closed Issues
- [#14766](https://github.com/unslothai/unsloth/issues/14766) [Feature] Automate the curl -sL https://unsloth.ai/docs/llms-full.txt https://unsloth.ai/docs/llms-full.txt/1 > unsloth-docs.md for each Unsloth Release
- [#17605](https://github.com/unslothai/unsloth/issues/17605) [Bug] Unsloth 0.1.917 forces mmap despite explicit --load-mode none, causing excessive RAM and SSD usage
- [#17638](https://github.com/unslothai/unsloth/issues/17638) [Bug] in docker, audio.cpp update fails with "invalid cross-device link"
- [#17735](https://github.com/unslothai/unsloth/issues/17735) [Studio Bug] Windows Application Control blocks Python `_socket` DLL during Unsloth Studio setup
- [#17440](https://github.com/unslothai/unsloth/issues/17440) [Feature] Add an optional speaker accent hint to transcription
- [#17724](https://github.com/unslothai/unsloth/issues/17724) [Bug] [UI] Assistant message background differs from conversation preview
- [#17730](https://github.com/unslothai/unsloth/issues/17730) [Bug] TextPreprocessor.validate_dataset miscounts total_samples for dict input and raises on IterableDataset
- [#16705](https://github.com/unslothai/unsloth/issues/16705) [Feature] Add an "Always allow" option for browser script execution
- [#16313](https://github.com/unslothai/unsloth/issues/16313) [Feature] Studio search results should be re-used after clicking
- [#17663](https://github.com/unslothai/unsloth/issues/17663) [UX] GPU idle after engine update - only “Restore installation” restored GPU inference
- [#17640](https://github.com/unslothai/unsloth/issues/17640) [Feature] set ssl certfile and keyfile from config file or environment
- [#17661](https://github.com/unslothai/unsloth/issues/17661) [Bug] `Show release notes` Button Always Fail, why then keep it?
- [#17598](https://github.com/unslothai/unsloth/issues/17598) [Bug] Studio Transcribe: MOSS-Transcribe-Diarize fails on long audio because Studio never sends max_tokens
- [#17651](https://github.com/unslothai/unsloth/issues/17651) [Studio] Projects page "Import chats" file picker hides Markdown exports in the web UI
- [#17716](https://github.com/unslothai/unsloth/issues/17716) [Bug] Can't select edit for Image models even tho it's support and i did do image edit before
- [#17655](https://github.com/unslothai/unsloth/issues/17655) Studio: a Combined CSV export of several chats re-imports as one merged chat
- [#17689](https://github.com/unslothai/unsloth/issues/17689) [Unsloth Bug] Mobile (Cloudflare) chat updates not reconciled in Desktop embedded WebView
- [#10764](https://github.com/unslothai/unsloth/issues/10764) [Feature] Add get URL parameters for queries

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,186 · **Open issues:** 416 · **Last push:** 5h ago

On November 15, 2026, there were no new releases for AIBrix. However, a notable update was made with the merging of PR #3471, which addresses broken links in the documentation for KV event sync, VTC, and Melange, enhancing the accessibility and usability of key resources. There were no new issues reported today, indicating a routine maintenance day for the project. The documentation fixes stand out as a valuable improvement for users seeking clarity in navigating AIBrix's features.

#### ✅ Merged PRs
- [#3471](https://github.com/vllm-project/aibrix/pull/3471) [Docs] Fix broken links in KV event sync, VTC and Melange docs

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,476 · **Open issues:** 627 · **Last push:** <1h ago

On November 15, 2026, there were no new releases for Semantic Router. However, several important features were merged, including the addition of a catalog entry for the gateway model in Codex (#6578) and enhancements that allow Codex to utilize the gateway for its own subscription login (#6479). Bug fixes notably addressed issues like improper caller login presentation on the provider's own API (#6476) and unnecessary model-load retries due to malformed safetensors headers (#6502). The most critical new issue reported involves a streamed request improperly recording its time-to-first-token (TTFT) from the first body chunk, including keepalives (#6545), indicating ongoing challenges in request handling.

#### ✅ Merged PRs
- [#6578](https://github.com/vllm-project/semantic-router/pull/6578) [Feature] Give Codex a catalog entry for the gateway model in connect
- [#6576](https://github.com/vllm-project/semantic-router/pull/6576) [Test] End the held call the vSR view test leaves running
- [#6479](https://github.com/vllm-project/semantic-router/pull/6479) [Feature] Let Codex use the gateway on its own subscription login
- [#6476](https://github.com/vllm-project/semantic-router/pull/6476) [Bug] Present a caller login only on its provider's own API
- [#6475](https://github.com/vllm-project/semantic-router/pull/6475) [Docs] Say who a caller backend may serve under the provider's terms
- [#6559](https://github.com/vllm-project/semantic-router/pull/6559) [Bug] Leave separators out of the spans the model runtime answers

#### 🐛 New Issues
- [#6545](https://github.com/vllm-project/semantic-router/issues/6545) [Bug] A streamed request records its TTFT from the first body chunk, keepalives included `bug` `accepted` `wg/router-models-inference-runtime` 💬5
- [#6542](https://github.com/vllm-project/semantic-router/issues/6542) [Bug] A streamed trace records no gen_ai.response.model `bug` `accepted` `wg/router-models-inference-runtime` 💬5
- [#6541](https://github.com/vllm-project/semantic-router/issues/6541) [Bug] A streamed request without usage never debits its output tokens from a token budget `bug` `accepted` `wg/router-models-inference-runtime` 💬5
- [#6502](https://github.com/vllm-project/semantic-router/issues/6502) [Bug] Malformed safetensors headers trigger unnecessary model-load retries `bug` `accepted` `in-progress` `wg/router-models-inference-runtime` 💬5
- [#6501](https://github.com/vllm-project/semantic-router/issues/6501) [Bug] Single-call full-coverage guards accept unverified decision-model answers `bug` `accepted` `in-progress` `wg/router-models-inference-runtime` 💬4
- [#6499](https://github.com/vllm-project/semantic-router/issues/6499) [Bug] Jailbreak classifier drops the initiating user message before tool results `bug` `accepted` `in-progress` `wg/router-models-inference-runtime` 💬4
- [#6539](https://github.com/vllm-project/semantic-router/issues/6539) [Bug] A configuration with no servable model loads and fails on every matched request `bug` `accepted` `wg/mom-routing` 💬3
- [#6537](https://github.com/vllm-project/semantic-router/issues/6537) [Bug] A keyword signal with no keywords matches every request `bug` `accepted` `wg/mom-routing` 💬3
- [#6547](https://github.com/vllm-project/semantic-router/issues/6547) [Bug] The reference configuration caps a streamed body at 1 MiB and leaves an enabled handler unbounded `bug` `accepted` `wg/data-plane-networking` 💬2
- [#6548](https://github.com/vllm-project/semantic-router/issues/6548) [Bug] A tool-continuation turn asks no tool-selection question `bug` `accepted` `wg/mom-routing` 💬2
- [#6546](https://github.com/vllm-project/semantic-router/issues/6546) [Bug] A response the cache does not store keeps its singleflight lease for the whole lease `bug` `accepted` `wg/data-plane-networking` 💬2
- [#6544](https://github.com/vllm-project/semantic-router/issues/6544) [Bug] An input.video rule reads the last user turn only and never resolves the video it cannot read `bug` `accepted` `wg/agentic-context` 💬2
- [#6543](https://github.com/vllm-project/semantic-router/issues/6543) [Bug] An input.audio rule is asked about the text only `bug` `accepted` `wg/agentic-context` 💬2
- [#6540](https://github.com/vllm-project/semantic-router/issues/6540) [Bug] RAG and vector-store clients replay their credential to a redirect target `bug` `accepted` `wg/agentic-context` 💬2
- [#6538](https://github.com/vllm-project/semantic-router/issues/6538) [Bug] A keyed listener that serves Chat and SystemOne lists no SystemOne models `bug` `accepted` `wg/data-plane-networking` 💬2
- [#6577](https://github.com/vllm-project/semantic-router/issues/6577) [Feature] Codex warns on every session that vllm-sr connect sets up that it has no model metadata `accepted` `wg/developer-experience-ecosystem` 💬1
- [#6575](https://github.com/vllm-project/semantic-router/issues/6575) [Test] The vSR view test leaves a tool call open and fails the plugin suite `accepted` `wg/developer-experience-ecosystem` 💬1
- [#6558](https://github.com/vllm-project/semantic-router/issues/6558) [Bug] The model runtime opens a value's span on the comma before it `accepted` `wg/router-models-inference-runtime` 💬1
- [#6554](https://github.com/vllm-project/semantic-router/issues/6554) [Bug] Codex on a ChatGPT login logs that it cannot read the gateway's model list `accepted` `wg/data-plane-networking` 💬1
- [#6513](https://github.com/vllm-project/semantic-router/issues/6513) [Bug] Masking lets a value through inside its own placeholder shape and reuses a client's placeholder `bug` `accepted` `in-progress` `wg/mom-routing` 💬1
- [#6505](https://github.com/vllm-project/semantic-router/issues/6505) [Feature] Make the Dashboard's vSR agent plugins panel say what each choice does `enhancement` `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬1
- [#6504](https://github.com/vllm-project/semantic-router/issues/6504) [Feature] Let people write their own rules for what vSR hides and holds `enhancement` `accepted` `in-progress` `wg/mom-routing` 💬1
- [#6550](https://github.com/vllm-project/semantic-router/issues/6550) [Bug] vllm-sr connect cannot set Codex up for a caller-login gateway `accepted` `wg/developer-experience-ecosystem` 💬1
- [#6534](https://github.com/vllm-project/semantic-router/issues/6534) [Bug] A replay id reaches the Milvus expression unescaped `bug` `accepted` `wg/mom-routing` 💬1
- [#6572](https://github.com/vllm-project/semantic-router/issues/6572) Ideas for making your CI faster `needs-acceptance`
- [#6571](https://github.com/vllm-project/semantic-router/issues/6571) [Bug] Hallucination detection test counts infrastructure errors as detection failures in failed_tests `bug` `needs-acceptance` `wg/evaluation-quality`
- [#6568](https://github.com/vllm-project/semantic-router/issues/6568) [Bug] Synthetic process failure case in model runtime evidence is not declared in expected_cases inventory `bug` `needs-acceptance` `wg/router-models-inference-runtime`
- [#6569](https://github.com/vllm-project/semantic-router/issues/6569) [Bug] Sentinel-skipped non-faithful items are counted as detector false negatives in evaluate_halugate metrics `bug` `needs-acceptance` `wg/evaluation-quality`

#### 🔒 Closed Issues
- [#6577](https://github.com/vllm-project/semantic-router/issues/6577) [Feature] Codex warns on every session that vllm-sr connect sets up that it has no model metadata
- [#6575](https://github.com/vllm-project/semantic-router/issues/6575) [Test] The vSR view test leaves a tool call open and fails the plugin suite
- [#6558](https://github.com/vllm-project/semantic-router/issues/6558) [Bug] The model runtime opens a value's span on the comma before it
- [#6554](https://github.com/vllm-project/semantic-router/issues/6554) [Bug] Codex on a ChatGPT login logs that it cannot read the gateway's model list
- [#6550](https://github.com/vllm-project/semantic-router/issues/6550) [Bug] vllm-sr connect cannot set Codex up for a caller-login gateway
- [#6473](https://github.com/vllm-project/semantic-router/issues/6473) [Feature] Let Codex use the gateway on its own ChatGPT login
- [#6472](https://github.com/vllm-project/semantic-router/issues/6472) [Bug] A caller backend receives a bearer that came in on another provider's API
- [#6471](https://github.com/vllm-project/semantic-router/issues/6471) [Docs] Say who a caller backend may serve under Anthropic's credential policy

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*