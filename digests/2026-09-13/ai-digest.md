# 📡 AI Ecosystem Digest — 2026-09-13

> Generated 2026-09-13 00:39 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 144,864 | 21 | 20 | 2 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 123,635 | 33 | 6 | 17 | 0 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 106,946 | 0 | 0 | 0 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,167 | 4 | 1 | 1 | 0 |
| [OpenCode](https://github.com/anomalyco/opencode) | 206,951 | 33 | 4 | 0 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 27,807 | 28 | 10 | 6 | 1 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 389,529 | 279 | 164 | 210 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 244,904 | 31 | 3 | 0 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 91,594 | 13 | 31 | 41 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 35,862 | 6 | 21 | 42 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 128,012 | 13 | 21 | 18 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 180,761 | 5 | 1 | 0 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 58,592 | 11 | 15 | 66 | 0 |
| [Unsloth](https://github.com/unslothai/unsloth) | 76,075 | 4 | 0 | 2 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,085 | 1 | 0 | 3 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 5,759 | 5 | 12 | 11 | 0 |

---

## ✨ Highlights

- **Gemini CLI** released version [v0.61.0-nightly.20260912.g9c1b0a610](https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0-nightly.20260912.g9c1b0a610).
- **Claude Code** merged PR [#93452](https://github.com/anthropics/claude-code/pull/93452), updating the /diff panel to match built-in functionality.
- **OpenClaw** merged PR [#146408](https://github.com/openclaw/openclaw/pull/146408), improving PDF handling as a recognized media tool.
- **Hermes Agent** reported a hot new issue [#109243](https://github.com/NousResearch/hermes-agent/issues/109243) with a 17-comment discussion on external-worker handoff timing challenges.
- **OpenCode** issues like [#48728](https://github.com/anomalyco/opencode/issues/48728) regarding authentication failures and [#48604](https://github.com/anomalyco/opencode/issues/48604) on credit updates are generating significant attention with 5 comments each.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 144,864 · **Open issues:** 12,500 · **Last push:** 2h ago

On September 13, 2026, Claude Code released version 2.1.270, which fixed a regression from the previous version that caused read-only git commands in Bash to unexpectedly prompt for permission during long sessions. Notable merged pull requests included updates to the diff panel to align it with built-in features and the addition of unit tests for various system components. A significant new issue emerged regarding single code reviews using Fable 5.1 that consumed the entire session budget of $100/month without completing, highlighting potential challenges for users on limited plans. Other issues raised include concerns about macOS permissions accumulating across releases and frequent invalidation of OAuth access tokens.

#### 🚀 New Releases
- [v2.1.270](https://github.com/anthropics/claude-code/releases/tag/v2.1.270) v2.1.270

#### ✅ Merged PRs
- [#93452](https://github.com/anthropics/claude-code/pull/93452) mods/diff: match the built-in /diff panel
- [#93912](https://github.com/anthropics/claude-code/pull/93912) mods: unit tests for diff, sec-default and telemetry, typed against the plugin declarations

#### 🐛 New Issues
- [#93894](https://github.com/anthropics/claude-code/issues/93894) Single code-review at high effort using Fable 5.1 blows through entire session budget at $100/month subscription level without completing `bug` `platform:macos` `area:cost` `area:skills` 💬2
- [#93910](https://github.com/anthropics/claude-code/issues/93910) [FEATURE] Cowork: persist a chat's open tasks in the Progress panel across sessions `enhancement` `area:cowork` 💬2
- [#93929](https://github.com/anthropics/claude-code/issues/93929) [BUG] macOS permission rows accumulate one per release: version-named binary path defeats stable signing identity (refiling stale-closed #76615) `bug` `has repro` `platform:macos` `area:packaging`
- [#93930](https://github.com/anthropics/claude-code/issues/93930) [Cursor] Add voice dictation button to AskUserQuestion "Other" free-text field `enhancement` `platform:macos` `area:ide`
- [#93928](https://github.com/anthropics/claude-code/issues/93928) [Bug] Claude loses context of offline tasks after reconnection `bug` `platform:linux` `area:core` `needs-repro`
- [#93927](https://github.com/anthropics/claude-code/issues/93927) You've hit your session limit · resets 4:20am (Europe/Rome) `question` `platform:windows` `area:cost` `platform:vscode`
- [#93879](https://github.com/anthropics/claude-code/issues/93879) OAuth access token revoked/invalidated twice in one week (4 of 7 days), disconnects both headless AND interactive sessions `bug` `platform:macos` `area:auth`
- [#93926](https://github.com/anthropics/claude-code/issues/93926) I appreciate you reaching out, but I'm unable to generate a meaningful GitHub issue title from this message. The text doesn't contain clear technical information about Claude Code or a specific bug that can be reproduced. To create a proper issue, please `duplicate` `platform:windows` `area:tui`
- [#93925](https://github.com/anthropics/claude-code/issues/93925) [BUG] macOS desktop app (Code tab) repeatedly blacks out during long sessions — "Main webview is unresponsive, will kill and reload" `bug` `platform:macos` `area:desktop`
- [#93924](https://github.com/anthropics/claude-code/issues/93924) Remote Control (/rc) makes local interactive session noticeably slower `bug` `has repro` `platform:macos` `performance`
- [#93923](https://github.com/anthropics/claude-code/issues/93923) [Bug] Anthropic API Error: Sonnet 5 Safeguards Incorrectly Blocking Legitimate Game Development Tasks `bug` `duplicate` `platform:macos` `area:model`
- [#93922](https://github.com/anthropics/claude-code/issues/93922) Remote Control: "unreachable" error omits the peer session / host name `enhancement` `platform:macos` `user-experience`
- [#93921](https://github.com/anthropics/claude-code/issues/93921) [Bug] Anthropic API Error: Legitimate Kafka/Redis integration flagged as security risk `bug` `platform:macos` `area:model` `platform:vscode`
- [#93920](https://github.com/anthropics/claude-code/issues/93920) Desktop sessions become permanently unreachable ("Remote Control disconnected") after going dormant, with no local transcript cache `bug` `platform:windows` `area:desktop`
- [#93919](https://github.com/anthropics/claude-code/issues/93919) [FEATURE] Export the resolved model id as an environment variable to Bash-tool processes and hook commands, next to CLAUDE_EFFORT, e.g. CLAUDE_CODE_MODEL=claude-fable-5-1. `enhancement` `area:bash` `area:hooks`
- [#93918](https://github.com/anthropics/claude-code/issues/93918) [BUG] Prompt cache expires during active session, causing massive token spikes on next prompt `duplicate` `platform:windows` `area:cost` `area:core`
- [#93915](https://github.com/anthropics/claude-code/issues/93915) [BUG] Windows: Bash commands >8KB silently truncated, backslash pairs silently collapsed (argv transport to MSYS2 bash) `bug` `has repro` `platform:windows` `area:bash`
- [#93917](https://github.com/anthropics/claude-code/issues/93917) [BUG] Teleport command rejects a checkout from the feature branch repo `bug` `platform:macos` `area:claude-code-web` `area:cli`
- [#93916](https://github.com/anthropics/claude-code/issues/93916) [Bug] Overly restrictive content filtering on non-human biological research `bug` `platform:windows` `external` `area:model`
- [#93914](https://github.com/anthropics/claude-code/issues/93914) [Bug] Session switched to Opus due to inappropriate safety flag on harmless request `bug` `platform:windows` `area:model`
- [#93913](https://github.com/anthropics/claude-code/issues/93913) You've hit your session limit · resets 2am (Europe/Berlin) `question` `platform:macos` `area:cost`

#### 🔒 Closed Issues
- [#70161](https://github.com/anthropics/claude-code/issues/70161) [BUG] Statusline OSC 8 hyperlinks no longer clickable (regression in 2.1.181)
- [#74329](https://github.com/anthropics/claude-code/issues/74329) Stdio MCP server that exits mid-session: lazy reconnect serves one call, then tools are wrongly deregistered while respawned process leaks
- [#86828](https://github.com/anthropics/claude-code/issues/86828) [STILL PRESENT]: Cloud sessions: GitHub gate overrides "Full" network access — anonymous public-repo API/HTML reads 403, user Authorization headers swallowed
- [#84750](https://github.com/anthropics/claude-code/issues/84750) [BUG] Abnormal token consumption still happening - regression from ~2 weeks ago (ref #13552)
- [#77469](https://github.com/anthropics/claude-code/issues/77469) Usage-limit message states a reset time ~3.5h later than when access actually returns ("session limit" vs "5-hour limit")
- [#79427](https://github.com/anthropics/claude-code/issues/79427) Shared claude daemon leaks ANTHROPIC_AUTH_TOKEN from first session into all later sessions on the machine — silent wrong-account auth/billing
- [#86857](https://github.com/anthropics/claude-code/issues/86857) Workspace trust dialog fails to prompt on launch, silently disabling gated features (e.g. statusLine)
- [#74165](https://github.com/anthropics/claude-code/issues/74165) Session limit banner contradicts /usage after window reset: usage shows ~3%, requests refused with a reset time 4+ hours later than actual recovery
- [#86864](https://github.com/anthropics/claude-code/issues/86864) [BUG] Desktop app: pinned sessions are unreachable to peers unless manually opened, and ListAgents gives no signal why
- [#86280](https://github.com/anthropics/claude-code/issues/86280) [BUG] All Cowork projects lost — local-agent-mode-sessions recreated empty after macOS update/reboot; separately, cleanupPeriodDays=30 default silently deleted session transcripts
- [#78189](https://github.com/anthropics/claude-code/issues/78189) Windows: detached background pty hosts (--bg-pty-host --bg-spare) cause visible pwsh/console window flashes at session start
- [#83013](https://github.com/anthropics/claude-code/issues/83013) [FEATURE] FleetView: pinned sessions should render in a separate section, not just sort to the top
- [#80119](https://github.com/anthropics/claude-code/issues/80119) Background job session auto-marked 'completed' without user request, 3x same day
- [#82192](https://github.com/anthropics/claude-code/issues/82192) /exit in a --worktree session backgrounds it instead of quitting, skipping worktree cleanup, and the background sessions view offers no way out
- [#83996](https://github.com/anthropics/claude-code/issues/83996) Left-arrow at position 0 in the composer navigates screens, killing running background agents
- [#87007](https://github.com/anthropics/claude-code/issues/87007) [Bug] Incorrect error message when session limit exceeded shows spend limit message
- [#86994](https://github.com/anthropics/claude-code/issues/86994) [BUG] iOS Simulator tool always returns "Xcode not selected" even after xcode-select, Developer Mode, and Developer Tools permission are all correctly configured
- [#86993](https://github.com/anthropics/claude-code/issues/86993) Remote Control toggle shows enabled in /config but session doesn't connect to mobile app
- [#86992](https://github.com/anthropics/claude-code/issues/86992) SendUserFile (Cowork) returns HTTP 429 continuously for 23h+, blocking file delivery — not a Drive/usage quota issue
- [#86990](https://github.com/anthropics/claude-code/issues/86990) [BUG]

### OpenAI Codex (`openai/codex`)

**Stars:** 123,635 · **Open issues:** 16,861 · **Last push:** <1h ago

On September 13, 2026, there were no new releases for OpenAI Codex, but several important updates were merged, including the removal of the Astra sparkle animation from the TUI composer and improvements to the preview streaming prose feature. Notably, a feature flag was added for asynchronous user messages, and enhancements were made to context preservation and automatic recap layouts. A significant new issue emerged regarding a severe usage drain in Codex, with reports of approximately 86% consumed in only 26 minutes with just two prompts, attracting community attention. Additionally, usability concerns were raised, including issues with the scoped approval control on Windows and the persistence of clipboard copy behaviors within SSH sessions.

#### ✅ Merged PRs
- [#45137](https://github.com/openai/codex/pull/45137) Remove Astra sparkle animation from the TUI composer
- [#45135](https://github.com/openai/codex/pull/45135) Preview streaming prose before a newline arrives in the TUI
- [#45124](https://github.com/openai/codex/pull/45124) Add a feature flag for asynchronous user messages
- [#45116](https://github.com/openai/codex/pull/45116) Prevent multiline report notes from submitting early
- [#45112](https://github.com/openai/codex/pull/45112) Use blueberry in the realtime background-agent test fixture
- [#45108](https://github.com/openai/codex/pull/45108) Cancel pending thread title generation after manual renames
- [#45094](https://github.com/openai/codex/pull/45094) Estimate history tokens from content instead of serialized envelopes
- [#45090](https://github.com/openai/codex/pull/45090) Preserve conversation context and separate next actions in recaps
- [#45089](https://github.com/openai/codex/pull/45089) Delay automatic recaps and compact their TUI layout
- [#45051](https://github.com/openai/codex/pull/45051) Consolidate Rust release artifact downloads
- [#45039](https://github.com/openai/codex/pull/45039) Use gzip compression level 6 for Codex package archives
- [#45035](https://github.com/openai/codex/pull/45035) Run DotSlash publishing directly on Ubuntu runners
- [#44976](https://github.com/openai/codex/pull/44976) Make context snapshot text rendering consistent
- [#44970](https://github.com/openai/codex/pull/44970) Show task tokens and usage estimates in the agent command center
- [#44969](https://github.com/openai/codex/pull/44969) Open tasks managed elsewhere as read-only history in the command center
- [#44957](https://github.com/openai/codex/pull/44957) Add model grouping to the agent command center
- [#44952](https://github.com/openai/codex/pull/44952) Keep voice captions visible across speaker updates and history handoff

#### 🐛 New Issues
- [#45073](https://github.com/openai/codex/issues/45073) Severe 5-hour usage drain in Codex: ~86% consumed in ~26 minutes with only 2 prompts `bug` `windows-os` `rate-limits` `CLI` 💬3
- [#45115](https://github.com/openai/codex/issues/45115) Unable to find a scoped approval control for a denied subagent action on Windows desktop `bug` `windows-os` `sandbox` `app` 💬2
- [#45075](https://github.com/openai/codex/issues/45075) [Windows][26.908.40834] Desktop reloads during active task; running turn is interrupted and becomes retry ▶ button `bug` `windows-os` `app` `session` 💬2
- [#45132](https://github.com/openai/codex/issues/45132) app-server clients cannot use Luna Reserve: supportsLunaReserve exists but has no accept/redeem action `bug` `rate-limits` `app-server` 💬2
- [#45068](https://github.com/openai/codex/issues/45068) /copy copies to the host machine's native clipboard instead of the clipboard of the SSH client when Codex is running inside a persistent tmux session that was originally started locally `bug` `windows-os` `TUI` `CLI` 💬2
- [#45126](https://github.com/openai/codex/issues/45126) `codex resume <unique-session-name>` fails whenever session lookup spans multiple pages `bug` `CLI` `session` 💬2
- [#45095](https://github.com/openai/codex/issues/45095) Astra reasoning quality appears significantly degraded compared with previous sessions `bug` `model-behavior` `app` 💬2
- [#45097](https://github.com/openai/codex/issues/45097) My App running very slow the GPT Astra 6 light `bug` `app` `performance` 💬2
- [#45117](https://github.com/openai/codex/issues/45117) [Linux desktop] GUI launch fails with `Unexpected end of JSON input` when `~/package.json` is empty `bug` `app` 💬2
- [#45145](https://github.com/openai/codex/issues/45145) Windows app: authorized Edge launch and execpolicy diagnostic rejected with unexplained policy block `bug` `windows-os` `sandbox` `tool-calls` 💬1
- [#45144](https://github.com/openai/codex/issues/45144) [macOS][26.908.40834] Renderer V8 OOM in chunked-message-receiver.join() when switching between large threads `bug` `app` `session` `performance` 💬1
- [#45130](https://github.com/openai/codex/issues/45130) Codex Security 0.1.24 accepts final replacement but retains stale deferred coverage `bug` `skills` 💬1
- [#45143](https://github.com/openai/codex/issues/45143) [TUI] codex agents initially focuses the new-task composer, so arrow-key navigation appears unresponsive `bug` `TUI` `CLI` 💬1
- [#45142](https://github.com/openai/codex/issues/45142) Codex/Astra blocked when working on non-security-related fuzz tests `bug` `CLI` `safety-check` 💬1
- [#45138](https://github.com/openai/codex/issues/45138) Windows desktop: recurring missing integration entries, marketplace path failures and intermittent prompt submission failure (26.908) `bug` `windows-os` `app` `skills` 💬1
- [#45139](https://github.com/openai/codex/issues/45139) Command runner failing in clean chat context - Codex is unable to use the shell `bug` `CLI` `tool-calls` `app-server` 💬1
- [#45134](https://github.com/openai/codex/issues/45134) Windows app 26.908.4834.0 fails to start: unable to locate Codex CLI or runtime components `bug` `windows-os` `app` 💬1
- [#44956](https://github.com/openai/codex/issues/44956) Codex TUI hangs on "Working" without rendering output when stream contains long text without newlines `bug` `TUI` `CLI` 💬1
- [#45131](https://github.com/openai/codex/issues/45131) Async questions remain pending and accumulate after cancellation requests; no agent-visible cancel/resolve operation `bug` `app-server` 💬1
- [#45129](https://github.com/openai/codex/issues/45129) Project Chats not there `bug` `windows-os` `app` `session` 💬1
- [#45127](https://github.com/openai/codex/issues/45127) [Desktop][Custom provider] Thread title generation silently falls back from gpt-5.6-luna to deepseek-v4-pro `bug` `custom-model` `app` `session` 💬1
- [#45080](https://github.com/openai/codex/issues/45080) Windows Computer Use: Filmora File-menu popup capture returns underlying window pixels `bug` `windows-os` `app` `computer-use` 💬1
- [#45103](https://github.com/openai/codex/issues/45103) Windows: codex doctor always warns about unverified exclusions when Defender is detected `bug` `windows-os` `CLI` 💬1
- [#45111](https://github.com/openai/codex/issues/45111) Pet size is not retained when switching pets, while slider retains previous value `bug` `windows-os` `app` `pets` 💬1
- [#45120](https://github.com/openai/codex/issues/45120) [ChatGPT Work cloud browser] Native confirm click followed by persistent CDP refresh timeouts; dialog recovery also blocked `bug` `tool-calls` `browser` 💬1
- [#45098](https://github.com/openai/codex/issues/45098) Codex Pet does not receive keyboard input on Linux Mint Xfce/X11 `bug` `app` `pets` 💬1
- [#45125](https://github.com/openai/codex/issues/45125) CLI: queued async questions do not emit notifications; only turn completion alerts appear `bug` `TUI` `CLI`
- [#45141](https://github.com/openai/codex/issues/45141) Bug: Incorrect sorting in "Recents" view / Missing recent chats and maybe broken search index `bug` `app` `session`
- [#45140](https://github.com/openai/codex/issues/45140) Android ChatGPT app spontaneously switched UI language from English to Bosnian `bug`
- [#45136](https://github.com/openai/codex/issues/45136) [macOS] Codex Micro action picker does not scroll with mouse or trackpad `bug` `app`
- [#45133](https://github.com/openai/codex/issues/45133) Estimate credits needed to finish an interrupted task before purchasing more credits `enhancement` `rate-limits` `app`
- [#45119](https://github.com/openai/codex/issues/45119) macOS 14.2: sandbox startup fails with unbound variable TIOCSTI `bug` `sandbox` `CLI`
- [#45122](https://github.com/openai/codex/issues/45122) Make tasks needing user input easier to find in the multi-task view `enhancement` `TUI` `CLI`

#### 🔒 Closed Issues
- [#34028](https://github.com/openai/codex/issues/34028) Feature request: Windows-to-Windows Codex Remote Control
- [#44774](https://github.com/openai/codex/issues/44774) TUI: allow opt-in client environment metadata on app-server turns
- [#45139](https://github.com/openai/codex/issues/45139) Command runner failing in clean chat context - Codex is unable to use the shell
- [#44956](https://github.com/openai/codex/issues/44956) Codex TUI hangs on "Working" without rendering output when stream contains long text without newlines
- [#45131](https://github.com/openai/codex/issues/45131) Async questions remain pending and accumulate after cancellation requests; no agent-visible cancel/resolve operation
- [#45122](https://github.com/openai/codex/issues/45122) Make tasks needing user input easier to find in the multi-task view

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 106,946 · **Open issues:** 821 · **Last push:** 23h ago

On September 13, 2026, Gemini CLI released version v0.61.0-nightly.20260912.g9c1b0a610, which includes crucial updates aimed at enhancing security. Notably, the release features a fix that prevents indirect prompt injection via modifications to build files and untrusted flags, contributed by @villahernandez-coder. Additionally, @diegogodinezr implemented improvements to harden filesystem boundaries and isolate runtime state in the sandbox environment. There were no merged pull requests or new issues reported in the last 24 hours, indicating a routine maintenance day with a focus on reinforcing the platform's security framework.

#### 🚀 New Releases
- [v0.61.0-nightly.20260912.g9c1b0a610](https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0-nightly.20260912.g9c1b0a610) Release v0.61.0-nightly.20260912.g9c1b0a610

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,167 · **Open issues:** 2,367 · **Last push:** 8h ago

On September 13, 2026, there were no new releases for GitHub Copilot CLI, but one notable merged pull request was made: #4808, which pins GitHub Actions to specific commit SHAs to enhance stability. The day also saw the creation of several new issues, with the most significant being #4829, which reports a bug affecting subagents that execute long tool-call sequences in a single turn, causing failures in prompt caching and token consumption. Additionally, #4830 proposes an important new command to add or revoke directory access, while #4825 introduces enhancements to HydraFusion by emitting per-phase model attributes to OpenTelemetry. Overall, it was a routine day of development with a focus on improving functionality and addressing emerging bugs.

#### ✅ Merged PRs
- [#4808](https://github.com/github/copilot-cli/pull/4808) Pin GitHub Actions to commit SHAs

#### 🐛 New Issues
- [#4831](https://github.com/github/copilot-cli/issues/4831) One pasted image and claude-opus-5 won't look at any more images `triage`
- [#4830](https://github.com/github/copilot-cli/issues/4830) Add /remove-dir command to revoke directory access `triage`
- [#4829](https://github.com/github/copilot-cli/issues/4829) [Bug] Subagents executing long tool-call sequences in a single turn fail prompt caching and compound token consumption `triage`
- [#4825](https://github.com/github/copilot-cli/issues/4825) HydraFusion: emit per-phase model, verdict and credit attributes to OpenTelemetry `triage`

#### 🔒 Closed Issues
- [#4759](https://github.com/github/copilot-cli/issues/4759) Copilot CLI should send MCP cancellation requests

### OpenCode (`anomalyco/opencode`)

**Stars:** 206,951 · **Open issues:** 5,801 · **Last push:** <1h ago

On September 13, 2026, there were no new releases or merged pull requests for OpenCode. The community reported several new issues, with the most significant being issue #48728 regarding the failure of the NVIDIA API key to authenticate, which has garnered 5 comments. Other notable concerns include issue #48604 about payment deductions not reflecting in credits, also attracting 5 comments, and a feature request (#48661) to enhance the desktop interface by allowing users to double-click the Review/Context tab for maximizing and restoring the pane, which has generated 4 comments. Overall, the day included routine maintenance with a focus on user feedback and feature requests from the community.

#### 🐛 New Issues
- [#48728](https://github.com/anomalyco/opencode/issues/48728) NVIDIA API key not working - provider fails to authenticate `needs:compliance` 💬5
- [#48604](https://github.com/anomalyco/opencode/issues/48604) Payment deducted but credits not updated (CreditsError Insufficient balance) 💬5
- [#48661](https://github.com/anomalyco/opencode/issues/48661) [FEATURE]: Desktop: Double-click Review / Context tab to maximize/restore pane (JetBrains-style) - Recreated 💬4
- [#48711](https://github.com/anomalyco/opencode/issues/48711) Ошибка OpenCode 💬2
- [#48684](https://github.com/anomalyco/opencode/issues/48684) opencode ne reponds pas 💬2
- [#48681](https://github.com/anomalyco/opencode/issues/48681) Suscrito pero no me deja seguir trabajando 💬2
- [#48687](https://github.com/anomalyco/opencode/issues/48687) DeepSeek 4.1 Flash Weekly Limit Issue 💬2
- [#48675](https://github.com/anomalyco/opencode/issues/48675) "opencode run": zero-chunk provider stream stall never surfaces — no timeout, no retry, no exit (1.18.30) 💬2
- [#48656](https://github.com/anomalyco/opencode/issues/48656) 终端显示的问题反馈Feedback on terminal display issues 💬2
- [#48721](https://github.com/anomalyco/opencode/issues/48721) ProviderModelNotFoundError suggests the identical model string; multi-segment model keys fail as opaque "Unexpected server error" 💬1
- [#48715](https://github.com/anomalyco/opencode/issues/48715) Desktop: server sidecar crashes repeatedly (0xC0000409) under memory pressure; image-count errors also brick sessions 💬1
- [#48720](https://github.com/anomalyco/opencode/issues/48720) tui: slash-invoked skills drop trailing arguments after autocomplete 💬1
- [#48718](https://github.com/anomalyco/opencode/issues/48718) [FEATURE]: Open session selector with -s without a session ID `2.0` 💬1
- [#48717](https://github.com/anomalyco/opencode/issues/48717) [FEATURE]:requeste 💬1
- [#48714](https://github.com/anomalyco/opencode/issues/48714) [Bug]: TUI streaming Markdown renders item 2 over item 1 nested bullet points (cursor offset) 💬1
- [#48690](https://github.com/anomalyco/opencode/issues/48690) xai: grok-4.6 websocket 1006 kills session drain 💬1
- [#48683](https://github.com/anomalyco/opencode/issues/48683) One-shot `run` exits before plugin-backgrounded work completes; plugins cannot detect a headless client on the shared service `2.0` 💬1
- [#48678](https://github.com/anomalyco/opencode/issues/48678) OpenCode Desktop crashes on Windows when workspace contains very long generated paths 💬1
- [#48676](https://github.com/anomalyco/opencode/issues/48676) 改动AI写的代码后，后续AI会将其恢复 💬1
- [#48736](https://github.com/anomalyco/opencode/issues/48736) Worktrees do not load.
- [#48725](https://github.com/anomalyco/opencode/issues/48725) [FEATURE]:Add "Open in Terminal" to the Linux app dropdown
- [#48723](https://github.com/anomalyco/opencode/issues/48723) TUI crash: EditorView is destroyed `2.0`
- [#48708](https://github.com/anomalyco/opencode/issues/48708) [Desktop] Text shimmer repaints every frame; propose an opacity pulse (design review)
- [#48706](https://github.com/anomalyco/opencode/issues/48706) plugins: config-entry options silently ignored when the spec duplicates an auto-discovered local plugin
- [#48707](https://github.com/anomalyco/opencode/issues/48707) tool/edit: stale-content error mentions "permission approval" though any concurrent write triggers it
- [#48705](https://github.com/anomalyco/opencode/issues/48705) tui: tok/s excludes reported reasoning tokens in V2
- [#48703](https://github.com/anomalyco/opencode/issues/48703) [app] Replace transition-all with explicit transition properties (6 spots)
- [#48701](https://github.com/anomalyco/opencode/issues/48701) [Desktop] Session panel width animation costs ~0.24s of main-thread work per toggle
- [#48697](https://github.com/anomalyco/opencode/issues/48697) [Desktop] Tool status title animates width on state swaps (small layout churn)
- [#48693](https://github.com/anomalyco/opencode/issues/48693) [Desktop] Streaming count labels animate layout properties (grid-template-columns / width)
- [#48691](https://github.com/anomalyco/opencode/issues/48691) Terminals are killed when their location is evicted after 60 minutes of chat inactivity
- [#48688](https://github.com/anomalyco/opencode/issues/48688) Official Alpine image: integrated terminal fails because bun-pty lacks musl support
- [#48685](https://github.com/anomalyco/opencode/issues/48685) [Desktop] Expand/collapse all button overflows with longer locale labels

#### 🔒 Closed Issues
- [#48711](https://github.com/anomalyco/opencode/issues/48711) Ошибка OpenCode
- [#48684](https://github.com/anomalyco/opencode/issues/48684) opencode ne reponds pas
- [#48681](https://github.com/anomalyco/opencode/issues/48681) Suscrito pero no me deja seguir trabajando
- [#48656](https://github.com/anomalyco/opencode/issues/48656) 终端显示的问题反馈Feedback on terminal display issues

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 27,807 · **Open issues:** 1,396 · **Last push:** <1h ago

On September 13, 2026, Qwen Code released version v0.23.3-nightly.20260912.54aa66834b, which includes a refactor to remove obsolete background response aggregation and the removal of message prefix filtering in the channels feature. Significant merged pull requests included a fix for synchronizing target documents before queries, enhancements to the web-terminal's PTY execution via the ConPTY backend, and the addition of model role and context window configuration in the web-shell. A notable new issue emerged regarding a crash in version 0.23.3 linked to a React error while a native monitor task continued running. Other notable issues included high memory usage and a proposal for an official Android companion client, highlighting ongoing enhancements and stability challenges within the platform.

#### 🚀 New Releases
- [v0.23.3-nightly.20260912.54aa66834b](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.3-nightly.20260912.54aa66834b) Release v0.23.3-nightly.20260912.54aa66834b

#### ✅ Merged PRs
- [#11443](https://github.com/QwenLM/qwen-code/pull/11443) fix(lsp): synchronize target documents before queries
- [#11643](https://github.com/QwenLM/qwen-code/pull/11643) fix(core): run web terminal PTYs on the bundled ConPTY backend
- [#11740](https://github.com/QwenLM/qwen-code/pull/11740) test(web-shell): give the 200-record history-viewport smoke case its own budget
- [#11342](https://github.com/QwenLM/qwen-code/pull/11342) feat(web-shell): add model role and context window configuration
- [#11690](https://github.com/QwenLM/qwen-code/pull/11690) feat(goal): rerun a stalled checkpoint in batches, smaller after each stall
- [#11691](https://github.com/QwenLM/qwen-code/pull/11691) feat(workflows): add effort and disallowedTools to agent() options

#### 🐛 New Issues
- [#11732](https://github.com/QwenLM/qwen-code/issues/11732) Qwen Code 0.23.3 crashes with React error #185 while native monitor task continues running `priority/P1` `type/bug` `category/ui` `scope/rendering` 💬6
- [#11695](https://github.com/QwenLM/qwen-code/issues/11695) tracking(core): separate the agent harness from the execution environment `priority/P2` `type/feature-request` `category/core` `category/security` 💬5
- [#11704](https://github.com/QwenLM/qwen-code/issues/11704) proposal(mobile): official Android companion client for qwen serve over ACP `priority/P3` `type/feature-request` `category/platform` `roadmap/platform-distribution` 💬5
- [#11736](https://github.com/QwenLM/qwen-code/issues/11736) ci(web-shell): the 200-record history-viewport smoke case uses 75-91% of its 60s budget and timed out on all 3 attempts once `priority/P2` `type/bug` `category/development` `scope/testing` 💬4
- [#11728](https://github.com/QwenLM/qwen-code/issues/11728) test(cli): close the remaining fail-open gaps in the REST docs contract guard `priority/P3` `type/bug` `category/development` `scope/testing` 💬4
- [#11689](https://github.com/QwenLM/qwen-code/issues/11689) bug(goal): the Goal judge fence unwrap backtracks, and the terminal verifier still rejects fenced replies `priority/P2` `type/bug` `category/core` `status/ready-for-agent` 💬3
- [#11720](https://github.com/QwenLM/qwen-code/issues/11720) Cron next-fire calculation returns a past instant during the repeated DST hour `priority/P2` `type/bug` `category/core` `scope/core` 💬3
- [#11717](https://github.com/QwenLM/qwen-code/issues/11717) WebShell create action times out while sequential default SDK requests are still valid `priority/P3` `type/bug` `category/ui` `welcome-pr` 💬3
- [#11724](https://github.com/QwenLM/qwen-code/issues/11724) High memory usage detected: 7.00 GB. If you experience a crash, please file a bug report by running `status/need-information` `status/need-retesting` `priority/P2` `type/bug` 💬3
- [#11718](https://github.com/QwenLM/qwen-code/issues/11718) Desktop AppImage: bundled Python's PYTHONHOME/PYTHONPATH leak into spawned stdio MCP servers, crashing external Python interpreters `status/need-information` `priority/P2` `type/bug` `category/platform` 💬3
- [#11710](https://github.com/QwenLM/qwen-code/issues/11710) Virtual Viewport (VP) leaves dirty state on exit in some terminal emulators `priority/P2` `type/bug` `category/cli` `scope/interactive` 💬3
- [#11747](https://github.com/QwenLM/qwen-code/issues/11747) Qwen's interactive TUI can silently/native-crash when the host Node runtime has a broken/unavailable Intl.Segmenter; Qwen does not detect the condition or emit an actionable diagnostic `priority/P2` `type/bug` `category/platform` `scope/interactive` 💬2
- [#11746](https://github.com/QwenLM/qwen-code/issues/11746) feat(core): add an SSH transport for the execution worker, so agent tools can run on a remote host `priority/P2` `status/blocked` `type/feature-request` `category/core` 💬2
- [#11734](https://github.com/QwenLM/qwen-code/issues/11734) fix(web-terminal): suppress terminal query answers during replay instead of server-side scrubbing `priority/P2` `status/blocked` `type/bug` `category/core` 💬2
- [#11729](https://github.com/QwenLM/qwen-code/issues/11729) Shell output between the generic spill gate and the tool's own budget loses its trailing exit status `priority/P2` `type/bug` `category/core` `category/tools` 💬2
- [#11719](https://github.com/QwenLM/qwen-code/issues/11719) bug(acp): non-file resource links lose the original filename in model prompts `priority/P2` `type/bug` `category/integration` `scope/ide` 💬2
- [#11725](https://github.com/QwenLM/qwen-code/issues/11725) High memory usage detected: 7.00 GB. If you experience a crash, please file a bug report by running /b `status/need-information` `status/need-retesting` `priority/P2` `type/bug` 💬2
- [#11715](https://github.com/QwenLM/qwen-code/issues/11715) telemetry: preserve ripgrep fallback probe-vs-unavailable distinction after error redaction `priority/P3` `category/telemetry` `scope/analytics` `type/enhancement` 💬2
- [#11712](https://github.com/QwenLM/qwen-code/issues/11712) Three design-document accuracy defects `priority/P3` `type/documentation` 💬2
- [#11707](https://github.com/QwenLM/qwen-code/issues/11707) fix(live): attribute project task threads to qwen-live `priority/P2` `type/bug` `category/cli` `scope/session-management` 💬2
- [#11706](https://github.com/QwenLM/qwen-code/issues/11706) fix(core): make persisted session pagination safe for equal mtimes `priority/P2` `type/bug` `category/core` `scope/session-management` 💬2
- [#11699](https://github.com/QwenLM/qwen-code/issues/11699) Follow-up work left by #10841 (skill naming) `priority/P2` `type/bug` `category/configuration` `scope/settings` 💬2
- [#11738](https://github.com/QwenLM/qwen-code/issues/11738) Deferred review findings from PR #11635: feat(web-shell): show fixed scheduled tasks in session sidebar 💬1
- [#11744](https://github.com/QwenLM/qwen-code/issues/11744) Main CI failed: Qwen Code CI on b5c7635ff983 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#11694](https://github.com/QwenLM/qwen-code/issues/11694) Deferred review findings from PR #11659: fix(cli): keep the expanded OpenTUI confirmation dialog on screen (#11655) 💬1
- [#11685](https://github.com/QwenLM/qwen-code/issues/11685) Deferred review findings from PR #11679: fix(live): accept monitor debug directories on Windows 💬1
- [#11726](https://github.com/QwenLM/qwen-code/issues/11726) Main CI failed: E2E Tests on 1e768979c5a6 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#11709](https://github.com/QwenLM/qwen-code/issues/11709) Deferred review findings from PR #11623: fix(core): reap surviving hook process trees on Windows

#### 🔒 Closed Issues
- [#11736](https://github.com/QwenLM/qwen-code/issues/11736) ci(web-shell): the 200-record history-viewport smoke case uses 75-91% of its 60s budget and timed out on all 3 attempts once
- [#11577](https://github.com/QwenLM/qwen-code/issues/11577) bug(goal): a checkpoint that fails on an overflowing window is retried with the identical request until the Goal stops
- [#10953](https://github.com/QwenLM/qwen-code/issues/10953) Todo plan state goes stale while work is delegated to subagents (the active-todo reminder never fires)
- [#11439](https://github.com/QwenLM/qwen-code/issues/11439) bug(lsp): queries return stale document content after on-disk edits
- [#11657](https://github.com/QwenLM/qwen-code/issues/11657) Fireworks: Qwen3 tool-call continuation fails with 400 due to mirrored messages[].reasoning
- [#11689](https://github.com/QwenLM/qwen-code/issues/11689) bug(goal): the Goal judge fence unwrap backtracks, and the terminal verifier still rejects fenced replies
- [#11720](https://github.com/QwenLM/qwen-code/issues/11720) Cron next-fire calculation returns a past instant during the repeated DST hour
- [#11336](https://github.com/QwenLM/qwen-code/issues/11336) chore: follow up deferred #11101 review suggestions
- [#11666](https://github.com/QwenLM/qwen-code/issues/11666) bug(telemetry): API request content is exported despite logPrompts=false
- [#11719](https://github.com/QwenLM/qwen-code/issues/11719) bug(acp): non-file resource links lose the original filename in model prompts

### Claude Code Skills (`anthropics/skills`)

Top open skill PRs by community engagement:
- [#1298](https://github.com/anthropics/skills/pull/1298) fix(skill-creator): run_eval.py always reports 0% recall — install the eval artifact as a real skill; fix Windows stream reading, trigger detection, and parallel workers
- [#1734](https://github.com/anthropics/skills/pull/1734) Detect orphaned docx comments
- [#514](https://github.com/anthropics/skills/pull/514) Add document-typography skill: typographic quality control for generated documents
- [#1742](https://github.com/anthropics/skills/pull/1742) fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers
- [#1615](https://github.com/anthropics/skills/pull/1615) Add scnet-hpc skill

---

## 🦞 OpenClaw Ecosystem

### OpenClaw (`openclaw/openclaw`)

**Stars:** 389,529 · **Open issues:** 7,095 · **Last push:** <1h ago

On September 13, 2026, OpenClaw did not release any new versions but saw several key developments in merged pull requests. Notable fixes included #146406, which improved CPU efficiency for processing verbose command output, and #146129, enabling access and reply policy application in Telegram without needing to reconnect. Enhancements were also made to the UI, such as fixing the collapse chevrons in settings (#146564) and ensuring coding session discovery settings are easily accessible (#146502). Among newly reported issues, #145689 stands out, highlighting a bug where existing cron updates were blocked by tool-policy migration and owner validation.

#### ✅ Merged PRs
- [#146342](https://github.com/openclaw/openclaw/pull/146342) fix(models): show fetched models after Show all
- [#146408](https://github.com/openclaw/openclaw/pull/146408) fix(tools): treat pdf as a known core media tool
- [#146575](https://github.com/openclaw/openclaw/pull/146575) improve(msteams): reduce repeated reads during poll cleanup
- [#146586](https://github.com/openclaw/openclaw/pull/146586) fix(worktrees): preserve inherited ACLs on APFS
- [#146513](https://github.com/openclaw/openclaw/pull/146513) fix(models): reclaim plugin captures after catalog workers stop
- [#146584](https://github.com/openclaw/openclaw/pull/146584) improve: reduce repeated Code Mode result fitting
- [#146576](https://github.com/openclaw/openclaw/pull/146576) test(compaction): cover registration at the provider boundary
- [#146574](https://github.com/openclaw/openclaw/pull/146574) improve: avoid repeated history sizing during active runs
- [#146578](https://github.com/openclaw/openclaw/pull/146578) improve: speed up chat catch-up in marker-heavy histories
- [#146498](https://github.com/openclaw/openclaw/pull/146498) fix(gateway): release retired catalog waiters
- [#146523](https://github.com/openclaw/openclaw/pull/146523) refactor: share allow-always approval test fixtures
- [#146564](https://github.com/openclaw/openclaw/pull/146564) fix(ui): point settings collapse chevrons right when closed and down when open
- [#146353](https://github.com/openclaw/openclaw/pull/146353) perf(ci): share compiled workers across test groups
- [#146508](https://github.com/openclaw/openclaw/pull/146508) fix(gateway): classify opening timeouts and repair lifetime checks
- [#146129](https://github.com/openclaw/openclaw/pull/146129) feat(telegram): apply access and reply policy without reconnecting
- [#146546](https://github.com/openclaw/openclaw/pull/146546) feat(voice): share GPT Live across meetings and calls
- [#146396](https://github.com/openclaw/openclaw/pull/146396) fix(ui): open Models settings from prepared catalogs
- [#146356](https://github.com/openclaw/openclaw/pull/146356) fix(nextcloud-talk): reject excess concurrent webhook reads
- [#146573](https://github.com/openclaw/openclaw/pull/146573) improve(push): load less data for test notifications
- [#146532](https://github.com/openclaw/openclaw/pull/146532) fix(msteams): preserve escaped labels in native mentions
- [#146566](https://github.com/openclaw/openclaw/pull/146566) refactor(agents): centralize interrupted-turn transcript reads
- [#144587](https://github.com/openclaw/openclaw/pull/144587) fix(exec): complex commands trigger human approval fallback due to reviewer token truncation
- [#146406](https://github.com/openclaw/openclaw/pull/146406) improve: process verbose command output with less CPU
- [#146502](https://github.com/openclaw/openclaw/pull/146502) fix(ui): make coding session discovery settings easy to find
- [#146512](https://github.com/openclaw/openclaw/pull/146512) fix: avoid repeated agent database integrity scans
- [#146476](https://github.com/openclaw/openclaw/pull/146476) fix(update): explain owner update refusals in agent guidance
- [#146520](https://github.com/openclaw/openclaw/pull/146520) test(tailscale): speed up startup timeout coverage
- [#146466](https://github.com/openclaw/openclaw/pull/146466) fix(ui): show reconnecting messages only once
- [#145167](https://github.com/openclaw/openclaw/pull/145167) fix(ui): unify chat collapse chevron direction (right closed, down open)
- [#146470](https://github.com/openclaw/openclaw/pull/146470) improve: avoid needless binary searches for unavailable skills
- [#146317](https://github.com/openclaw/openclaw/pull/146317) fix(models): refresh expired provider inventory in background
- [#146516](https://github.com/openclaw/openclaw/pull/146516) docs(plugins): remove obsolete Gateway restart guidance
- [#146390](https://github.com/openclaw/openclaw/pull/146390) improve: load session history with fewer SQLite queries
- [#146410](https://github.com/openclaw/openclaw/pull/146410) fix(ui): stop unrelated sidebar child refreshes
- [#146548](https://github.com/openclaw/openclaw/pull/146548) fix(ci): keep archived UI dependencies on their source revision
- [#146541](https://github.com/openclaw/openclaw/pull/146541) fix(tooling): pnpm wrappers ignore empty POSIX PATH entries
- [#146556](https://github.com/openclaw/openclaw/pull/146556) fix(macos): honor requested Node version in app workers
- [#146538](https://github.com/openclaw/openclaw/pull/146538) fix: restore core test shard headroom
- [#146510](https://github.com/openclaw/openclaw/pull/146510) perf(ui): reuse usage bucket dates and stop matched hour scans
- [#146403](https://github.com/openclaw/openclaw/pull/146403) feat(worktrees): share source storage with ReFS clones
- [#146530](https://github.com/openclaw/openclaw/pull/146530) fix(test): avoid shutdown deadlocks after profiler errors
- [#146384](https://github.com/openclaw/openclaw/pull/146384) improve(cron): avoid loading retained history during settlement
- [#146455](https://github.com/openclaw/openclaw/pull/146455) refactor: share HTTP assistant streaming test fixtures
- [#146529](https://github.com/openclaw/openclaw/pull/146529) fix(update): preserve diagnostics when executor release fails
- [#146414](https://github.com/openclaw/openclaw/pull/146414) refactor: share native channel approval test contracts
- [#146526](https://github.com/openclaw/openclaw/pull/146526) chore(ui): refresh the Control UI startup budget baseline
- [#146409](https://github.com/openclaw/openclaw/pull/146409) fix(outbound): guard cross-provider topic mutations
- [#146258](https://github.com/openclaw/openclaw/pull/146258) chore(deps): advance cooled dependencies and major upgrades
- [#146366](https://github.com/openclaw/openclaw/pull/146366) improve: keep CI focused for precisely selected tests
- [#146363](https://github.com/openclaw/openclaw/pull/146363) fix(sessions): show recovery guidance for tombstoned room sessions
- [#146494](https://github.com/openclaw/openclaw/pull/146494) fix(memory): avoid rereading indexed chunks during provenance checks
- [#146459](https://github.com/openclaw/openclaw/pull/146459) fix(ui): keep About copy retries busy until completion
- [#146398](https://github.com/openclaw/openclaw/pull/146398) test(channels): simplify JSON response fixtures
- [#146483](https://github.com/openclaw/openclaw/pull/146483) fix(plugins): preserve update failures and prevent duplicate settlement
- [#146488](https://github.com/openclaw/openclaw/pull/146488) fix: avoid rebuilding provider metadata during usage reads
- [#146500](https://github.com/openclaw/openclaw/pull/146500) improve(ui): prepare edit previews without realigning unchanged prefixes
- [#146481](https://github.com/openclaw/openclaw/pull/146481) fix(plugins): apply first channel setup without restarting Gateway
- [#146465](https://github.com/openclaw/openclaw/pull/146465) improve: avoid duplicate startup corpus runs in broad PRs
- [#146506](https://github.com/openclaw/openclaw/pull/146506) improve(media): speed up image result size estimation
- [#146479](https://github.com/openclaw/openclaw/pull/146479) fix: preserve requested output limits for custom models
- [#146504](https://github.com/openclaw/openclaw/pull/146504) fix(gateway): close TLS renewal with the gateway lifetime
- [#146343](https://github.com/openclaw/openclaw/pull/146343) fix: allow session thinking and fast-mode changes with write access
- [#146486](https://github.com/openclaw/openclaw/pull/146486) fix: prevent plugin dependencies from slowing unrelated imports
- [#146461](https://github.com/openclaw/openclaw/pull/146461) fix(updates): preserve exact handoff file identity
- [#146413](https://github.com/openclaw/openclaw/pull/146413) fix(plugins): apply approved artifacts without a Gateway restart
- [#146495](https://github.com/openclaw/openclaw/pull/146495) refactor: run managed flow writes in the SQLite worker
- [#146507](https://github.com/openclaw/openclaw/pull/146507) improve(memory): reduce text fetched during fallback vector search
- [#146452](https://github.com/openclaw/openclaw/pull/146452) refactor: remove redundant host-hook contract checks
- [#146139](https://github.com/openclaw/openclaw/pull/146139) fix(update): restore Gateway startup after legacy config writeback
- [#146467](https://github.com/openclaw/openclaw/pull/146467) improve: prepare URL-containing replies without unnecessary skill scans
- [#146415](https://github.com/openclaw/openclaw/pull/146415) fix(docs): restore publishing without changing existing anchors
- [#146485](https://github.com/openclaw/openclaw/pull/146485) fix(ui): keep agent picker selection checkmarks compact
- [#146487](https://github.com/openclaw/openclaw/pull/146487) fix(agents): resume interrupted turns after tool activity
- [#146404](https://github.com/openclaw/openclaw/pull/146404) fix(macos): drag windows from empty side-panel tab headers
- [#146267](https://github.com/openclaw/openclaw/pull/146267) feat(gateway): renew TLS certificates without restarting listeners
- [#146397](https://github.com/openclaw/openclaw/pull/146397) fix(qa): isolate gateway child supervisor state
- [#146369](https://github.com/openclaw/openclaw/pull/146369) fix: avoid disconnects and delays during hosted tool calls
- [#146480](https://github.com/openclaw/openclaw/pull/146480) fix: session loading stalls during skill watcher startup
- [#146478](https://github.com/openclaw/openclaw/pull/146478) fix(ui): keep failed tool diagnostics behind expansion
- [#146456](https://github.com/openclaw/openclaw/pull/146456) improve(sessions): reduce allocations when filtering internal records
- [#146482](https://github.com/openclaw/openclaw/pull/146482) improve(config): speed up schema section lookups
- [#146312](https://github.com/openclaw/openclaw/pull/146312) feat(dashboard): embed websites in fullscreen session dashboards
- [#146453](https://github.com/openclaw/openclaw/pull/146453) improve(gateway): reduce allocations while tracking tool progress
- [#146469](https://github.com/openclaw/openclaw/pull/146469) improve(talk): reduce voice conversion CPU work
- [#146450](https://github.com/openclaw/openclaw/pull/146450) improve(sessions): reduce allocations during ordinary session lookups
- [#146463](https://github.com/openclaw/openclaw/pull/146463) improve(buzz): reuse saved room activations during recovery
- [#146370](https://github.com/openclaw/openclaw/pull/146370) fix: stop GPT Live caption repeats and honor spoken confirmations
- [#146458](https://github.com/openclaw/openclaw/pull/146458) improve(sessions): reduce reads when validating long transcript chains
- [#146401](https://github.com/openclaw/openclaw/pull/146401) fix(worktrees): avoid slow APFS worktree cloning
- [#146389](https://github.com/openclaw/openclaw/pull/146389) fix(security): block HOMEBREW_CURL_PATH and HOMEBREW_GIT_PATH from workspace .env
- [#146202](https://github.com/openclaw/openclaw/pull/146202) refactor(slack): apply policy changes without reconnecting
- [#146462](https://github.com/openclaw/openclaw/pull/146462) docs: clarify authorization for internal repair decisions
- [#146412](https://github.com/openclaw/openclaw/pull/146412) fix(gateway): register TLS renewal with sidecar owner
- [#146352](https://github.com/openclaw/openclaw/pull/146352) fix(plugins): keep workspace plugins out of auto-enable
- [#142591](https://github.com/openclaw/openclaw/pull/142591) fix(cron): list run sessions read-only in the reaper to stop event-loop stalls (#142476)
- [#146354](https://github.com/openclaw/openclaw/pull/146354) refactor(cli): reuse log severity styling for level and message
- [#146316](https://github.com/openclaw/openclaw/pull/146316) refactor: reuse channel command test runtimes
- [#146379](https://github.com/openclaw/openclaw/pull/146379) refactor: share Teams and Zoom meeting test contracts
- [#146248](https://github.com/openclaw/openclaw/pull/146248) fix: clear stale subagent activity after restart cleanup
- [#146325](https://github.com/openclaw/openclaw/pull/146325) fix: await approval target persistence before completing delivery
- [#146335](https://github.com/openclaw/openclaw/pull/146335) refactor: share media generation lifecycle test contracts
- [#146378](https://github.com/openclaw/openclaw/pull/146378) improve(sessions): load large session pages faster
- [#146375](https://github.com/openclaw/openclaw/pull/146375) improve(browser): return large debug logs faster
- [#136253](https://github.com/openclaw/openclaw/pull/136253) feat: share selected sessions read-only with a paired team Gateway
- [#146381](https://github.com/openclaw/openclaw/pull/146381) improve: avoid loading transcript revisions for exact retries
- [#146364](https://github.com/openclaw/openclaw/pull/146364) improve(memory-wiki): speed up Wiki searches and compilation
- [#146380](https://github.com/openclaw/openclaw/pull/146380) improve(memory): reduce text loaded during vector recall
- [#146336](https://github.com/openclaw/openclaw/pull/146336) fix(auth): keep plugin auth available during provider discovery
- [#146377](https://github.com/openclaw/openclaw/pull/146377) improve: speed up plugin capacity checks and migration previews
- [#146386](https://github.com/openclaw/openclaw/pull/146386) docs: mirror v2026.9.4 release notes in the changelog
- [#146367](https://github.com/openclaw/openclaw/pull/146367) fix(tui): keep active run status visible after Ctrl+C
- [#146272](https://github.com/openclaw/openclaw/pull/146272) refactor(ai): remove redundant streaming JSON recovery
- [#146319](https://github.com/openclaw/openclaw/pull/146319) fix(discord): await component registration and cleanup
- [#146297](https://github.com/openclaw/openclaw/pull/146297) fix(browser): guard explicit download navigation
- [#146388](https://github.com/openclaw/openclaw/pull/146388) fix(computer): explain filtered accessibility targets
- [#146344](https://github.com/openclaw/openclaw/pull/146344) improve(gateway): reduce allocation pressure under parallel agent work
- [#146296](https://github.com/openclaw/openclaw/pull/146296) refactor: reuse canonical SQL for first-use database setup
- [#146289](https://github.com/openclaw/openclaw/pull/146289) fix(discord): support continuous GPT Live conversations
- [#144631](https://github.com/openclaw/openclaw/pull/144631) fix(codex): require per-call approval for requester-scoped MCP tools
- [#146223](https://github.com/openclaw/openclaw/pull/146223) fix: let cloud worker commands open apps on their desktop
- [#146094](https://github.com/openclaw/openclaw/pull/146094) improve: keep image and PDF processing responsive
- [#146222](https://github.com/openclaw/openclaw/pull/146222) fix(tts): avoid synthesis for unsupported remote output
- [#146189](https://github.com/openclaw/openclaw/pull/146189) fix(gateway): wait for lifecycle ownership during restart
- [#146091](https://github.com/openclaw/openclaw/pull/146091) fix(update): recognize custom npm prefix installations
- [#146275](https://github.com/openclaw/openclaw/pull/146275) refactor: consolidate plugin reload ownership and startup overlays
- [#146345](https://github.com/openclaw/openclaw/pull/146345) fix(qa): prevent blank scenario filters from launching default runs
- [#146305](https://github.com/openclaw/openclaw/pull/146305) fix(codex): restore native discovery and hide empty catalogs
- [#146273](https://github.com/openclaw/openclaw/pull/146273) fix: reduce repeated Git work during repository requests
- [#146172](https://github.com/openclaw/openclaw/pull/146172) refactor: move shared database admission into its worker
- [#146360](https://github.com/openclaw/openclaw/pull/146360) refactor(test): consolidate bundled plugin source loading
- [#146271](https://github.com/openclaw/openclaw/pull/146271) improve(channels): limit filtered status account inspection
- [#146327](https://github.com/openclaw/openclaw/pull/146327) perf: reuse unchanged cloud workspace content hashes
- [#146095](https://github.com/openclaw/openclaw/pull/146095) fix(agents): forward ordered saved subscription credentials to CLI runs
- [#146362](https://github.com/openclaw/openclaw/pull/146362) improve(msteams): format image and mention replies faster
- [#143880](https://github.com/openclaw/openclaw/pull/143880) fix(channels): Slack task cards repeat the command text when a command finishes
- [#146022](https://github.com/openclaw/openclaw/pull/146022) fix(daemon): install the Gateway on systemd 239 with legacy busctl output
- [#145505](https://github.com/openclaw/openclaw/pull/145505) fix(android): Chat actions menu flickers closed on some phones
- [#146338](https://github.com/openclaw/openclaw/pull/146338) feat(worktrees): share source storage with APFS clones
- [#146322](https://github.com/openclaw/openclaw/pull/146322) refactor: remove redundant release-helper declarations
- [#146318](https://github.com/openclaw/openclaw/pull/146318) improve: reduce repeated transcript lookup work
- [#146253](https://github.com/openclaw/openclaw/pull/146253) docs: make PR descriptions plain-language first
- [#146334](https://github.com/openclaw/openclaw/pull/146334) refactor(tests): reuse native JSON response fixtures
- [#146340](https://github.com/openclaw/openclaw/pull/146340) improve(signal): format long list replies with less metadata copying
- [#146292](https://github.com/openclaw/openclaw/pull/146292) improve(sessions): batch committed transcript cursor reads
- [#146310](https://github.com/openclaw/openclaw/pull/146310) improve(sessions): reduce allocations when creating and listing sessions
- [#146328](https://github.com/openclaw/openclaw/pull/146328) improve(ai): prepare mixed tool results without unused serialization
- [#146084](https://github.com/openclaw/openclaw/pull/146084) fix(gateway): honor actions.sendMessage for update lifecycle notices
- [#146309](https://github.com/openclaw/openclaw/pull/146309) improve(skills): reduce watcher work during unrelated file activity
- [#146320](https://github.com/openclaw/openclaw/pull/146320) improve: avoid repeated source loading in repair tests
- [#146323](https://github.com/openclaw/openclaw/pull/146323) fix(qa): select the renamed diagnostics browser test
- [#146247](https://github.com/openclaw/openclaw/pull/146247) fix(browser): include element refs in plain ARIA snapshots
- [#146286](https://github.com/openclaw/openclaw/pull/146286) improve: speed up loading long session histories
- [#146168](https://github.com/openclaw/openclaw/pull/146168) improve(memory): keep large-note searches responsive
- [#146161](https://github.com/openclaw/openclaw/pull/146161) fix(backup): preserve cyclic symbolic links during archive creation
- [#146304](https://github.com/openclaw/openclaw/pull/146304) improve(gateway): avoid scanning long replies for control prefixes
- [#146302](https://github.com/openclaw/openclaw/pull/146302) improve: load large session contexts more efficiently
- [#146263](https://github.com/openclaw/openclaw/pull/146263) fix(llama-cpp): count same-tick chunks in download speed
- [#146307](https://github.com/openclaw/openclaw/pull/146307) improve(terminal): speed up Windows table rendering
- [#146299](https://github.com/openclaw/openclaw/pull/146299) refactor(markdown): reuse freshly owned link spans
- [#146300](https://github.com/openclaw/openclaw/pull/146300) improve(boards): batch tab writes and board removals
- [#146306](https://github.com/openclaw/openclaw/pull/146306) improve(logbook): batch expired frame pruning
- [#146294](https://github.com/openclaw/openclaw/pull/146294) perf(imessage): reduce cold delivery imports
- [#146301](https://github.com/openclaw/openclaw/pull/146301) improve(memory): reduce unrelated project recall reads
- [#146100](https://github.com/openclaw/openclaw/pull/146100) feat(browser): apply control policy without restarting the gateway
- [#146217](https://github.com/openclaw/openclaw/pull/146217) fix(gateway): exit cleanly when native shutdown drains time out
- [#144542](https://github.com/openclaw/openclaw/pull/144542) fix(update): retain schema snapshots through cancellation
- [#146284](https://github.com/openclaw/openclaw/pull/146284) improve: avoid loading browser subscriptions for notification preflights
- [#146295](https://github.com/openclaw/openclaw/pull/146295) chore(ui): refresh control ui locales
- [#146285](https://github.com/openclaw/openclaw/pull/146285) improve: avoid loading plugin state values for record counts
- [#146122](https://github.com/openclaw/openclaw/pull/146122) fix(ui): avoid redundant child-session refreshes in chat
- [#146207](https://github.com/openclaw/openclaw/pull/146207) fix(ui): show active work beyond the first history page
- [#146279](https://github.com/openclaw/openclaw/pull/146279) refactor: simplify reclaimed worker resume
- [#146239](https://github.com/openclaw/openclaw/pull/146239) fix(plugins): reduce memory retained after repeated reloads
- [#146260](https://github.com/openclaw/openclaw/pull/146260) improve(test): avoid 10-second waits in Nextcloud error-body coverage
- [#146280](https://github.com/openclaw/openclaw/pull/146280) fix(ui): keep loading shimmers at the top of chat
- [#146082](https://github.com/openclaw/openclaw/pull/146082) improve: make large file edits faster
- [#146174](https://github.com/openclaw/openclaw/pull/146174) fix(linux): show OpenClaw as the tray menu name
- [#146067](https://github.com/openclaw/openclaw/pull/146067) fix: bound concurrent compute work and pending worker inputs
- [#143836](https://github.com/openclaw/openclaw/pull/143836) feat(ui): watch live desktops in Picture-in-Picture
- [#146069](https://github.com/openclaw/openclaw/pull/146069) fix(ui): hide empty sidebar groups in personal session filters
- [#146111](https://github.com/openclaw/openclaw/pull/146111) chore(ui): refresh control ui locales
- [#146281](https://github.com/openclaw/openclaw/pull/146281) improve: reuse transcript statistics query compilation
- [#146274](https://github.com/openclaw/openclaw/pull/146274) improve(skills): share binary probes within status reports
- [#146240](https://github.com/openclaw/openclaw/pull/146240) test(agents): reuse fresh nonzero usage fixtures
- [#146270](https://github.com/openclaw/openclaw/pull/146270) perf(cli): reuse PowerShell choice text across aliases
- [#146283](https://github.com/openclaw/openclaw/pull/146283) improve: avoid loading memory origins before deletion
- [#146278](https://github.com/openclaw/openclaw/pull/146278) improve: avoid reading old plugin values during registration
- [#146251](https://github.com/openclaw/openclaw/pull/146251) feat(worktrees): reduce source storage with filesystem snapshots
- [#146219](https://github.com/openclaw/openclaw/pull/146219) refactor(gateway): reduce allocations during parallel sessions
- [#146134](https://github.com/openclaw/openclaw/pull/146134) fix(ai): preserve declared reasoning tiers in embedded sessions
- [#146103](https://github.com/openclaw/openclaw/pull/146103) test(ai): preserve provider contracts under Bun
- [#145927](https://github.com/openclaw/openclaw/pull/145927) fix(ui): publish initial model catalog on connect
- [#146266](https://github.com/openclaw/openclaw/pull/146266) improve: reduce memory used by source validation
- [#146231](https://github.com/openclaw/openclaw/pull/146231) fix(diagnostics): identify SQLite read and reclamation stalls
- [#146259](https://github.com/openclaw/openclaw/pull/146259) fix(ui): restore complete failed-run error details
- [#146228](https://github.com/openclaw/openclaw/pull/146228) perf(status): reuse scan snapshots and expose local stage timings
- [#146261](https://github.com/openclaw/openclaw/pull/146261) fix(kimi): normalize legacy model IDs before runtime loads
- [#146229](https://github.com/openclaw/openclaw/pull/146229) fix(update): let JSON failure diagnostics finish before exit
- [#146159](https://github.com/openclaw/openclaw/pull/146159) refactor(nodes): simplify node status aggregation
- [#146254](https://github.com/openclaw/openclaw/pull/146254) improve(markdown): reduce CPU work for streamed code replies
- [#146245](https://github.com/openclaw/openclaw/pull/146245) improve(workboard): claim owners without loading unrelated card history
- [#146156](https://github.com/openclaw/openclaw/pull/146156) improve(acp): reduce metadata escaping overhead
- [#146226](https://github.com/openclaw/openclaw/pull/146226) fix(gateway): avoid loopback connections for embedded config reads
- [#146256](https://github.com/openclaw/openclaw/pull/146256) improve: rank CJK memory results faster
- [#146243](https://github.com/openclaw/openclaw/pull/146243) improve: reduce busy sidebar session switch overhead
- [#146241](https://github.com/openclaw/openclaw/pull/146241) improve: skip integer scanning for ordinary tool arguments
- [#146244](https://github.com/openclaw/openclaw/pull/146244) improve(trajectory): trim capture windows without fetching event bodies
- [#146242](https://github.com/openclaw/openclaw/pull/146242) improve(markdown): prepare long newline-chunked replies faster
- [#146186](https://github.com/openclaw/openclaw/pull/146186) fix(update): prevent lint OOMs during legacy Git upgrades
- [#146235](https://github.com/openclaw/openclaw/pull/146235) improve(skills): load pinned library revisions in one query

#### 🐛 New Issues
- [#145689](https://github.com/openclaw/openclaw/issues/145689) [Bug]: Existing cron update blocked by tool-policy migration and owner validation `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:needs-live-repro` 💬8
- [#145929](https://github.com/openclaw/openclaw/issues/145929) Auth profile logout/write permanently fails with lock-may-be-busy after interrupted self-update, even with zero competing processes `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` `P0` 💬7
- [#145503](https://github.com/openclaw/openclaw/issues/145503) [Bug]: skill_workshop tool not registered for agent turns after 2026.9.3 Workshop migration; doctor --fix recommends an alsoAllow fix its own resolver rejects `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬6
- [#146096](https://github.com/openclaw/openclaw/issues/146096) Agent whole-file writes accept stale read-derived content and discard intervening workspace updates `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬6
- [#145510](https://github.com/openclaw/openclaw/issues/145510) Update failure: runtime-verification-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬6
- [#146118](https://github.com/openclaw/openclaw/issues/146118) [Bug]: #123737 superseded-task compaction guard does not cover Codex-native or non-overflow compaction `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬6
- [#145993](https://github.com/openclaw/openclaw/issues/145993) Codex prompt annotation fingerprints prepared content instead of persisted admission `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬5
- [#145782](https://github.com/openclaw/openclaw/issues/145782) Update failure: repairing (2026.9.3) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬5
- [#146004](https://github.com/openclaw/openclaw/issues/146004) [Bug] Subagent completion triggers unwanted channel-less dashboard heartbeat turn on 2026.9.3 `bug` `regression` `P2` `clawsweeper:needs-info` 💬5
- [#145562](https://github.com/openclaw/openclaw/issues/145562) [Bug]: available_skills catalog missing from native Google/Gemini systemInstruction despite systemPromptReport claiming it's included `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬5
- [#146116](https://github.com/openclaw/openclaw/issues/146116) [Bug]: fresh 2026.9.2 → 2026.9.4 update fails migrating shared state: skill_workshop_collection_reviews column definitions differ `bug` `maintainer` `P0` `issue-rating: 🦪 silver shellfish` 💬4
- [#146209](https://github.com/openclaw/openclaw/issues/146209) Exec allowlist grant works live, denied every time from a scheduled/headless automation — identical command, identical grant `P1` `impact:security` `issue-rating: 🦪 silver shellfish` 💬4
- [#146124](https://github.com/openclaw/openclaw/issues/146124) Control UI: heartbeat sessions bypass System and Automation filters `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#146157](https://github.com/openclaw/openclaw/issues/146157) Update failure: global-install-failed (2026.9.3) `P0` `maturity:stable` `impact:ux-release-blocker` 💬4
- [#145998](https://github.com/openclaw/openclaw/issues/145998) Update-run/restart-sentinel notices can leak to non-owner chat sessions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬4
- [#145995](https://github.com/openclaw/openclaw/issues/145995) Plugin inspection intermittently fails: SQLite state source did not stabilize `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#145563](https://github.com/openclaw/openclaw/issues/145563) [Bug]: WeChat channel reply dispatch fails with `PreparedModelCatalogConfigReplacedError` `bug` `bug:behavior` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬4
- [#145638](https://github.com/openclaw/openclaw/issues/145638) [Bug]: npm stable update fails with ENOSPC copying the state directory into os.tmpdir(), with no option to relocate the snapshot `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` `P0` 💬4
- [#145658](https://github.com/openclaw/openclaw/issues/145658) [Bug]: Setup fails in install-cli step due to unsupported Node version (Node 22.22.3 requested instead of 24/26) `bug` `bug:behavior` `P0` `impact:ux-release-blocker` 💬4
- [#145491](https://github.com/openclaw/openclaw/issues/145491) Update failure: doctor-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬4
- [#146392](https://github.com/openclaw/openclaw/issues/146392) [Bug]: doctor reports core tool `pdf` as an unknown plugin-only allowlist entry, because it is missing from CORE_TOOL_DEFINITIONS `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#146331](https://github.com/openclaw/openclaw/issues/146331) [Bug]: Replay normalization leaves a stale turn boundary and drops current input/tool results `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#146347](https://github.com/openclaw/openclaw/issues/146347) Update failure: unexpected-error (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬3
- [#146359](https://github.com/openclaw/openclaw/issues/146359) Update failure: plugin-target-unavailable (2026.9.3) `P0` `maturity:stable` `impact:ux-release-blocker` 💬3
- [#145504](https://github.com/openclaw/openclaw/issues/145504) Android: Chat actions (⋯) menu flickers closed immediately on some phones `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬3
- [#146221](https://github.com/openclaw/openclaw/issues/146221) Slack progress card is never finalized when the final reply carries media (2026.9.4) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#146017](https://github.com/openclaw/openclaw/issues/146017) [Bug]: Update candidate rehearsal drops gateway.auth.rateLimit and fails policy Doctor lint `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#145994](https://github.com/openclaw/openclaw/issues/145994) Codex session catalog routes supplemental managed-agent homes through native user auth `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬3
- [#145938](https://github.com/openclaw/openclaw/issues/145938) [Bug]: Git backup verify/restore fails on U+2028/U+2029 `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#145781](https://github.com/openclaw/openclaw/issues/145781) Update failure: database-schema-preflight (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬3
- [#145827](https://github.com/openclaw/openclaw/issues/145827) [Bug]: tmux skill find-sessions.sh emits literal \t and a nonexistent tmux variable, corrupting all three listed fields `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#145636](https://github.com/openclaw/openclaw/issues/145636) [Bug]: Paired-node Claude continuation reads an expired request context instead of the durable Gateway resolver `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#145723](https://github.com/openclaw/openclaw/issues/145723) Skill Workshop: stale proposals hidden in UI with no cleanup action `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬3
- [#145494](https://github.com/openclaw/openclaw/issues/145494) Update failure: fetch-failed (2026.9.3) `maintainer` `clawsweeper:source-repro` `impact:crash-loop` `P0` 💬3
- [#146197](https://github.com/openclaw/openclaw/issues/146197) Reduce SQLite fetch and payload materialization overhead `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` `impact:other` 💬2
- [#145679](https://github.com/openclaw/openclaw/issues/145679) Reduce repeated work across Gateway startup, history, and streaming `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` `impact:other` 💬2
- [#146567](https://github.com/openclaw/openclaw/issues/146567) Update failure: database-schema-preflight (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#146580](https://github.com/openclaw/openclaw/issues/146580) Update failure: managed-service-handoff-unavailable (2026.9.3) `P0` `impact:ux-release-blocker` 💬2
- [#146224](https://github.com/openclaw/openclaw/issues/146224) [Bug]: Subagent activity remains running after orphan cleanup `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬2
- [#146484](https://github.com/openclaw/openclaw/issues/146484) opencode-go: catalog publishes only 7 of 36 models (no modelCatalog.modelsDev opt-in), forcing hand-written models.providers entries `P1` `impact:auth-provider` `impact:other` 💬2
- [#145909](https://github.com/openclaw/openclaw/issues/145909) [Bug]: Slow SQLite `bug` `bug:behavior` `P1` `impact:other` 💬2
- [#145627](https://github.com/openclaw/openclaw/issues/145627) [Bug]: Copilot public runtime headers poison secret redaction of qualified model names `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬2
- [#146376](https://github.com/openclaw/openclaw/issues/146376) Count and existence probes load plugin and transcript payloads unnecessarily `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#146399](https://github.com/openclaw/openclaw/issues/146399) Update failure: managed-service-preflight (2026.9.3) `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#146394](https://github.com/openclaw/openclaw/issues/146394) Update failure: global-install-failed (2026.9.3) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#146276](https://github.com/openclaw/openclaw/issues/146276) buzz: a session tombstoned by restart recovery silently fails every later mention in that room; CLI cannot delete/reset channel-scoped keys `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬2
- [#146290](https://github.com/openclaw/openclaw/issues/146290) A plugin's idle DB client connection error (PostgreSQL 57P01) exits the whole Gateway instead of degrading to a tool error `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#146311](https://github.com/openclaw/openclaw/issues/146311) [Bug]: transcript echo fires per bot account in shared multi-agent group chats (N identical echoes per voice note) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#146268](https://github.com/openclaw/openclaw/issues/146268) MCP stdio server with a missing launcher binary (e.g. uvx not installed) fails silently as generic "Connection closed" `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬2
- [#146110](https://github.com/openclaw/openclaw/issues/146110) [Bug]: Shutdown drain budget (TimeoutStopSec-15s) ignores provider/agent timeouts — a restart with a long call in flight exits 1 and leaves the unit failed with no restart `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬2
- [#145870](https://github.com/openclaw/openclaw/issues/145870) [Feature Request] Add delete command to channels dead-letters `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#145825](https://github.com/openclaw/openclaw/issues/145825) [Bug]: tmux skill wait-for-text.sh matches the command echo, returning success before the command runs `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#146265](https://github.com/openclaw/openclaw/issues/146265) [Bug]: After gateway restart, shared AsyncWorkScope stays closed process-wide — all DB/Fleet agent tools fail "Async work scope is closed" while gateway health reports OK `P1` `clawsweeper:needs-info` `issue-rating: 🦐 gold shrimp` `impact:other` 💬2
- [#146282](https://github.com/openclaw/openclaw/issues/146282) [Feature]: Activate a plugin-provided sandbox backend from agents.*.sandbox.backend at Gateway startup `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#146277](https://github.com/openclaw/openclaw/issues/146277) Update failure: post-update-plugins (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#145740](https://github.com/openclaw/openclaw/issues/145740) agent exec resolves unrelated store: SecretRefs against temporary state and ignores auth.order `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬2
- [#146142](https://github.com/openclaw/openclaw/issues/146142) [Bug]: Supervised restart races the gateway-lifecycle ownership coordinator — successor fails to start and systemd start-limit leaves the Gateway down (2026.9.3) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` `impact:crash-loop` 💬2
- [#145951](https://github.com/openclaw/openclaw/issues/145951) active-memory: the recall sub-run prompt has no observer framing, so directives inside the conversation read as instructions to the recall agent `P2` `clawsweeper:needs-live-repro` `impact:session-state` `issue-rating: 🐚 platinum hermit` 💬2
- [#146038](https://github.com/openclaw/openclaw/issues/146038) [Bug]: update refused with "package manager owner is unknown" on nvm + ~/.npm-global installs `bug` `maintainer` `clawsweeper:needs-live-repro` `P0` 💬2
- [#145984](https://github.com/openclaw/openclaw/issues/145984) [Bug]: Windows - gateway restart/stop fails with "port is still busy; remaining listener ownership could not be verified" against a healthy gateway `P1` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#146173](https://github.com/openclaw/openclaw/issues/146173) nodes.invoke: queue background-capable commands when an iOS node is asleep instead of dropping them `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#146032](https://github.com/openclaw/openclaw/issues/146032) claude-cli backend fails with `write EPIPE` on every turn right after live session start (2026.9.4, Docker) — all turns silently fall back `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#146147](https://github.com/openclaw/openclaw/issues/146147) Update failure: unexpected-error (2026.9.3) `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#146135](https://github.com/openclaw/openclaw/issues/146135) Update failure: global-install-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#146121](https://github.com/openclaw/openclaw/issues/146121) Update failure: runtime-verification-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#146125](https://github.com/openclaw/openclaw/issues/146125) Control UI: add a global cross-agent session Watchlist `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#146062](https://github.com/openclaw/openclaw/issues/146062) Update failure: runtime-verification-failed (2026.9.3) `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#146064](https://github.com/openclaw/openclaw/issues/146064) WhatsApp debounce drops earlier media from rapid-message batches `P2` `impact:message-loss` 💬2
- [#145954](https://github.com/openclaw/openclaw/issues/145954) [Bug]: `openclaw update` fails at "global install swap" - "retained package tree changed" / "Installation recovery is unverified" (2026.9.3 -> 2026.9.4) `bug` `regression` `P0` `maturity:stable` 💬2
- [#146023](https://github.com/openclaw/openclaw/issues/146023) [Bug]: Skill collection review inherits bootstrap instructions outside its restricted Workshop root `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#145986](https://github.com/openclaw/openclaw/issues/145986) Update failure: post-update-plugins (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#145957](https://github.com/openclaw/openclaw/issues/145957) Update failure: verifying (2026.9.4) `P2` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-friction` 💬2
- [#145955](https://github.com/openclaw/openclaw/issues/145955) Update failure: runtime-verification-failed (2026.9.3) `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#146010](https://github.com/openclaw/openclaw/issues/146010) Control UI deletion gives retry-only timeouts for pending results on offline device workers `maintainer` `clawsweeper:source-repro` `impact:session-state` `P0` 💬2
- [#146012](https://github.com/openclaw/openclaw/issues/146012) Continue on Gateway cannot abandon a pending workspace result: drain rejects before abandonment runs `maintainer` `clawsweeper:source-repro` `impact:session-state` `P0` 💬2
- [#145937](https://github.com/openclaw/openclaw/issues/145937) [Bug]: QQ channel left without a fully-working plugin on 2026.9.x — first-party @openclaw/qqbot crashes on every inbound (runtime injection contract removed), successor @tencent-connect/openclaw-qqbot streaming drafts receive zero chunks `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬2
- [#145865](https://github.com/openclaw/openclaw/issues/145865) sessions_send A2A announce delivery dropped: agent tool caller authority is no longer active (deferred announce runs after caller run ends) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬2
- [#145949](https://github.com/openclaw/openclaw/issues/145949) CRITICAL: Heartbeat disabled state not persisting — re-enables automatically after 1–10 days `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#145933](https://github.com/openclaw/openclaw/issues/145933) Feature: auth-free model route and cooldown status without credential fragments or account identifiers `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#145881](https://github.com/openclaw/openclaw/issues/145881) Update failure: repairing (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#145871](https://github.com/openclaw/openclaw/issues/145871) Update failure: global-install-failed (2026.9.3) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#145842](https://github.com/openclaw/openclaw/issues/145842) [Bug]: No Linux .deb/.AppImage attached to any release since v2026.8.2 (4 releases and counting), while macOS/Windows ship every time `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:current-main-repro` `P0` 💬2
- [#145829](https://github.com/openclaw/openclaw/issues/145829) Update failure: validating (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#145808](https://github.com/openclaw/openclaw/issues/145808) Update failure: runtime-verification-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#145619](https://github.com/openclaw/openclaw/issues/145619) buzz: message-tool replies triggered from a mid-thread message omit the NIP-10 root tag, relay rejects with "root tag does not match thread ancestry" `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#145653](https://github.com/openclaw/openclaw/issues/145653) Update failure: doctor-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#145637](https://github.com/openclaw/openclaw/issues/145637) [Bug]: Native CLI terminal exit leaves the Web catalog on a stale non-continuable snapshot `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#145608](https://github.com/openclaw/openclaw/issues/145608) Busy Gateway allocates excessively while preparing parallel agent turns `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#145655](https://github.com/openclaw/openclaw/issues/145655) Update failure: plugin-target-unavailable (2026.9.3) `clawsweeper:not-repro-on-main` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#145641](https://github.com/openclaw/openclaw/issues/145641) Update failure: doctor-failed (2026.9.3) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#145588](https://github.com/openclaw/openclaw/issues/145588) Heartbeat/cron run can consume its full execution timeout in pre-run session-work admission without reaching agent.run.started `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#145557](https://github.com/openclaw/openclaw/issues/145557) Update failure: database-schema-preflight (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#145561](https://github.com/openclaw/openclaw/issues/145561) Assembled context keeps a full UUID line per omitted tool result — 47% of lines / 35% of bytes are placeholders for dropped content `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#145528](https://github.com/openclaw/openclaw/issues/145528) Update failure: repairing (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#145485](https://github.com/openclaw/openclaw/issues/145485) Update failure: finalize:doctor (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#145499](https://github.com/openclaw/openclaw/issues/145499) Update failure: unexpected-error (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#145457](https://github.com/openclaw/openclaw/issues/145457) Misleading error: "prepared model runtime plugin generation was superseded" is thrown when a run's model chain references a DISABLED plugin (and `config validate` passes) `P2` `impact:auth-provider` `clawsweeper:not-repro-on-main` `issue-rating: 🦪 silver shellfish` 💬2
- [#146594](https://github.com/openclaw/openclaw/issues/146594) Update failure: global-install-failed (2026.9.3) 💬1
- [#146593](https://github.com/openclaw/openclaw/issues/146593) [Bug]: setup-inference probes bypass before_model_resolve — plugin-routed provider with placeholder baseUrl causes UND_ERR_SOCKET retry storm 💬1
- [#146590](https://github.com/openclaw/openclaw/issues/146590) [Feature]: Emoji shortcode autocomplete and conversion in Control UI `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#146552](https://github.com/openclaw/openclaw/issues/146552) Settings › Advanced collapse chevrons point down/up instead of right/down `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#146577](https://github.com/openclaw/openclaw/issues/146577) Allow agents to operate the browser page shown in a dashboard `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` `impact:ux-friction` 💬1
- [#146562](https://github.com/openclaw/openclaw/issues/146562) Extend managed-GitHub-identity overlay (GH_CONFIG_DIR) to node-backed Codex remote-exec placement `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#146519](https://github.com/openclaw/openclaw/issues/146519) Usage charts repeatedly validate dates across quarter-hour buckets `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#146509](https://github.com/openclaw/openclaw/issues/146509) Avoid rescanning matched sessions in Usage hour filters `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#146560](https://github.com/openclaw/openclaw/issues/146560) TUI: reconnect replays full session history into scrollback instead of only the gap `P2` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` `impact:ux-friction` 💬1
- [#146537](https://github.com/openclaw/openclaw/issues/146537) Core test shard exceeds its headroom target after new plugin tests `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#146549](https://github.com/openclaw/openclaw/issues/146549) [Bug]: Cron terminal errors are lost after same-generation session label updates `bug` `maintainer` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#146435](https://github.com/openclaw/openclaw/issues/146435) [Bug]: Rollback error replaces root peer-link error in plugin update finalization `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#146496](https://github.com/openclaw/openclaw/issues/146496) Avoid repeated line alignment for unchanged edit-preview prefixes `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#146505](https://github.com/openclaw/openclaw/issues/146505) Improve large image result size-estimation performance `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#146511](https://github.com/openclaw/openclaw/issues/146511) [Regression] ClawX startup overwrites per-agent API key in auth_profile_store on 2026.7.1-2 `P1` `impact:data-loss` `impact:auth-provider` 💬1
- [#145568](https://github.com/openclaw/openclaw/issues/145568) [Bug]: Agent selector shows the selected agent with a giant checkmark and stacked DEFAULT badge `maintainer` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#146501](https://github.com/openclaw/openclaw/issues/146501) claude-cli: per-agent `deny: ["group:web"]` does not cover Claude Code's native `WebSearch`/`WebFetch` — calls fall through to human approval instead of being denied `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` `impact:security` 💬1
- [#146477](https://github.com/openclaw/openclaw/issues/146477) Reduce repeated path parsing during configuration schema lookup `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#146303](https://github.com/openclaw/openclaw/issues/146303) Feature: display hosted websites in fullscreen session dashboards `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#146468](https://github.com/openclaw/openclaw/issues/146468) Reduce CPU used by realtime and telephony audio conversion `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#146472](https://github.com/openclaw/openclaw/issues/146472) Control UI: stale client state — duplicated assistant bubbles (stream vs final) and deleted sessions persisting in Home dock until hard refresh `P2` `clawsweeper:needs-info` `impact:session-state` `issue-rating: 🦐 gold shrimp` 💬1
- [#146442](https://github.com/openclaw/openclaw/issues/146442) [Bug]: Telegram accepts forum topic:0 while rejecting direct-topic:0 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#146440](https://github.com/openclaw/openclaw/issues/146440) [Bug]: Doctor WhatsApp-responsiveness check silently disabled on Windows `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#146437](https://github.com/openclaw/openclaw/issues/146437) [Bug]: WhatsApp toWhatsappJid passes any @-string through unvalidated `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` 💬1
- [#146441](https://github.com/openclaw/openclaw/issues/146441) [Bug]: Discord isLikelyUsername matches any digit-suffixed string `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:message-loss` 💬1
- [#146443](https://github.com/openclaw/openclaw/issues/146443) [Bug]: Configured provider fallback only inspects models[0] `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:auth-provider` 💬1
- [#146444](https://github.com/openclaw/openclaw/issues/146444) [Bug]: Discord forum thread creation fabricates starter message ID from thread ID `P3` `clawsweeper:bulk-filed` 💬1
- [#146446](https://github.com/openclaw/openclaw/issues/146446) [Bug]: String staggerMs values silently discarded, 5-minute default can apply `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#146449](https://github.com/openclaw/openclaw/issues/146449) [Bug]: sessions tail renders UTC without label while logs use local+offset `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#146445](https://github.com/openclaw/openclaw/issues/146445) [Bug]: Support-bundle redaction misses payment identifiers the main redactor catches `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#146447](https://github.com/openclaw/openclaw/issues/146447) [Bug]: Control UI cron timeout copy contradicts validator on 0 `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#146430](https://github.com/openclaw/openclaw/issues/146430) [Bug]: buildHistoryPrunePlan inflates budget by SAFETY_MARGIN, under-pruning history `P2` `impact:session-state` `clawsweeper:bulk-filed` 💬1
- [#146429](https://github.com/openclaw/openclaw/issues/146429) [Bug]: normalizePatchPath swallows resolver errors; policy sees incomplete paths `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `impact:security` 💬1
- [#146423](https://github.com/openclaw/openclaw/issues/146423) [Bug]: Deadline-less keepalive can never reap half-open desktop streams `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#146432](https://github.com/openclaw/openclaw/issues/146432) [Bug]: NaN read limit counts as explicit, collapsing adaptive paging `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` 💬1
- [#146439](https://github.com/openclaw/openclaw/issues/146439) [Bug]: Slack thread seeding discards retained history for threads over 3 pages `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#146427](https://github.com/openclaw/openclaw/issues/146427) [Bug]: deleteSession leaks activeExecSessions; waitForExecScope can hang `P2` `impact:crash-loop` `clawsweeper:bulk-filed` 💬1
- [#146416](https://github.com/openclaw/openclaw/issues/146416) [Bug]: Tool-event recipient TTL is refreshed on read and never fires `P3` `clawsweeper:bulk-filed` 💬1
- [#146431](https://github.com/openclaw/openclaw/issues/146431) [Bug]: Tool-result budget helpers return NaN for non-finite context windows `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-live-repro` `impact:session-state` 💬1
- [#146438](https://github.com/openclaw/openclaw/issues/146438) [Bug]: Slack replyToMode off still threads replies when threadId is present `P3` `clawsweeper:bulk-filed` 💬1
- [#146436](https://github.com/openclaw/openclaw/issues/146436) [Bug]: WhatsApp send passes mediaPayload.fileName as if it were a media URL `P3` `clawsweeper:bulk-filed` 💬1
- [#146434](https://github.com/openclaw/openclaw/issues/146434) [Bug]: Plugin install transaction leaks past completion via spread (double-settle) `P3` `clawsweeper:bulk-filed` 💬1
- [#146425](https://github.com/openclaw/openclaw/issues/146425) [Bug]: Worker credential-expiry timer overflows on far-future expiries `P3` `clawsweeper:bulk-filed` 💬1
- [#146433](https://github.com/openclaw/openclaw/issues/146433) [Bug]: WhatsApp allowFrom with only-invalid entries silently becomes unrestricted `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#146426](https://github.com/openclaw/openclaw/issues/146426) [Bug]: buildExecExitOutcome coerces null exitCode to 0, reporting kills as completed `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` 💬1
- [#146424](https://github.com/openclaw/openclaw/issues/146424) [Bug]: Queued diagnostics writer silently drops mkdir/append failures `P3` `impact:other` `clawsweeper:bulk-filed` 💬1
- [#146428](https://github.com/openclaw/openclaw/issues/146428) [Bug]: Non-standard tool results coerced to success, losing error status `P2` `impact:session-state` `clawsweeper:bulk-filed` 💬1
- [#146419](https://github.com/openclaw/openclaw/issues/146419) [Bug]: Slow-consumer 1008 close is destroyed by immediate terminate() `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#146422](https://github.com/openclaw/openclaw/issues/146422) [Bug]: Public-share negative identity cache pins null forever `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` 💬1
- [#146417](https://github.com/openclaw/openclaw/issues/146417) [Bug]: Device-required probe short-circuit cache is unbounded `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#146420](https://github.com/openclaw/openclaw/issues/146420) [Bug]: Duplicate abort registration returns a detached controller `P2` `clawsweeper:bulk-filed` 💬1
- [#146418](https://github.com/openclaw/openclaw/issues/146418) [Bug]: Stale positive run-to-session cache never expires after session delete `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:session-state` 💬1
- [#146421](https://github.com/openclaw/openclaw/issues/146421) [Bug]: Session-history SSE heartbeat holds the event loop and re-auths every 15s `P3` `impact:other` `clawsweeper:bulk-filed` 💬1
- [#146374](https://github.com/openclaw/openclaw/issues/146374) Consolidate Teams and Zoom meeting integration test contracts `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#146333](https://github.com/openclaw/openclaw/issues/146333) Consolidate shared media generation lifecycle test contracts `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#146402](https://github.com/openclaw/openclaw/issues/146402) [Bug]: Frozen official builds produce different full dist artifacts `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#146293](https://github.com/openclaw/openclaw/issues/146293) Consolidate canonical DDL ownership for first-use database setup `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#146391](https://github.com/openclaw/openclaw/issues/146391) [Bug]: Fresh Groq setup cannot resolve manifest model from an external plugin `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#146365](https://github.com/openclaw/openclaw/issues/146365) [Bug]: Discord /acp spawn thread never dispatches: "prepared reply dispatch runtime owner was not published for claude" under agents.ownership explicit `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#146252](https://github.com/openclaw/openclaw/issues/146252) Gateway Git inspection repeats work and competes with interactive requests `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#146383](https://github.com/openclaw/openclaw/issues/146383) [Feature Request] Support custom agent display order in Control UI roster `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#146337](https://github.com/openclaw/openclaw/issues/146337) Consolidate bundled plugin contract-test source loading `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#146371](https://github.com/openclaw/openclaw/issues/146371) Transcript counts materialize unused marker positions and metadata `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#146341](https://github.com/openclaw/openclaw/issues/146341) [Feature]: Attest chat sender on outbound MCP HTTP (peer header / per-requester connection) `enhancement` `P2` `impact:security` 💬1
- [#146288](https://github.com/openclaw/openclaw/issues/146288) Add APFS copy-on-write cloning for managed worktrees `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` `impact:other` 💬1
- [#146314](https://github.com/openclaw/openclaw/issues/146314) Retire duplicate declarations beside typed release helpers `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#146358](https://github.com/openclaw/openclaw/issues/146358) Web chat /new fires command:new plugin hooks without previousSessionMemory while /reset carries it (2026.9.2) `P2` `impact:session-state` 💬1
- [#146313](https://github.com/openclaw/openclaw/issues/146313) Transcript reads do repeated work on cold-state checks and pending index scans `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#146349](https://github.com/openclaw/openclaw/issues/146349) Bug: automatic reset hooks lose delayed tracked work after the triggering request closes `P2` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬1
- [#146346](https://github.com/openclaw/openclaw/issues/146346) Consolidate config authoring types with canonical schema owners `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#146330](https://github.com/openclaw/openclaw/issues/146330) Reply directives strip code indentation from streamed WebChat history `maintainer` `P2` `clawsweeper:source-repro` `impact:session-state` 💬1
- [#146166](https://github.com/openclaw/openclaw/issues/146166) CPU-heavy memory, media, and session work stalls Gateway request handling `maintainer` `P2` `clawsweeper:source-repro` `impact:crash-loop` 💬1
- [#146315](https://github.com/openclaw/openclaw/issues/146315) [Bug]: cron runs fail with 'Transcript idempotency key <sessionId>:terminal-error conflicts with the admitted message' `P2` `impact:session-state` 💬1
- [#146308](https://github.com/openclaw/openclaw/issues/146308) [Feature]: Shared dashboard fullscreen defaults with personal overrides `enhancement` `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#146287](https://github.com/openclaw/openclaw/issues/146287) [Bug]: cron completion announcements ignore `inheritSessionThread`, so Slack Agent View pulls every scheduled brief into one DM thread `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#146250](https://github.com/openclaw/openclaw/issues/146250) Reduce managed worktree source storage with filesystem copy-on-write `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#146269](https://github.com/openclaw/openclaw/issues/146269) Feature: let plugin mcpServers entries declare a uv/brew/node install dependency, like skills already can `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#145590](https://github.com/openclaw/openclaw/issues/145590) [Bug]: Input redaction masks benign user text after PASSWORD: without distinguishable provenance `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#146210](https://github.com/openclaw/openclaw/issues/146210) Workboard statistics hydrate full cards for count-only reads `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#146200](https://github.com/openclaw/openclaw/issues/146200) Remove duplicated request declarations from send handlers `maintainer` 💬1
- [#146232](https://github.com/openclaw/openclaw/issues/146232) [Feature]: configurable triage agent priority / allowlist so automatic recovery can prefer Codex over Claude Code `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#146198](https://github.com/openclaw/openclaw/issues/146198) Consolidate automation CLI integer validation `maintainer` 💬1
- [#146211](https://github.com/openclaw/openclaw/issues/146211) Update failure: managed-service-handoff-unavailable (2026.9.4) `P0` `impact:ux-release-blocker` 💬1
- [#146195](https://github.com/openclaw/openclaw/issues/146195) [Bug]: Multi-agent migration stamps explicit ownership and permanently loses the default agent identity (all agents report isDefault=false after restart) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#146080](https://github.com/openclaw/openclaw/issues/146080) [Bug]: Matrix-enabled selected Docker source builds fail the import guard `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#146187](https://github.com/openclaw/openclaw/issues/146187) [Bug]: A PATH directory named like a required binary makes `skills check` report the skill as ready `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#145587](https://github.com/openclaw/openclaw/issues/145587) [Bug]: Dedicated worker RPCs are missing Gateway latency diagnostics `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#146169](https://github.com/openclaw/openclaw/issues/146169) doctor --fix widens LINE group access because LINE declares no group-allowlist contract `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#146137](https://github.com/openclaw/openclaw/issues/146137) Feature: show individual OpenAI subscription account quotas in Usage `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `impact:auth-provider` 💬1
- [#146136](https://github.com/openclaw/openclaw/issues/146136) Remove or make optional the Claude Code / Anthropic SDK references in the package `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#146087](https://github.com/openclaw/openclaw/issues/146087) Unify generation-tool preparation and task resource handoff `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#146117](https://github.com/openclaw/openclaw/issues/146117) Feature request: opt-in WhatsApp rapid image coalescing into one turn `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#146085](https://github.com/openclaw/openclaw/issues/146085) Consolidate Matrix inbound media and prepared context ownership `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#146098](https://github.com/openclaw/openclaw/issues/146098) [Bug]: Heartbeat duplicate suppression ignores a changed delivery destination `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#146055](https://github.com/openclaw/openclaw/issues/146055) [Bug]: local schema checks omit the Kova workflow regression `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#146088](https://github.com/openclaw/openclaw/issues/146088) [Bug]: The most recent Linux AppImage does not ship with the correct versions of libs needed to run `bug` `bug:behavior` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#146086](https://github.com/openclaw/openclaw/issues/146086) sessions_spawn visible:true fails with 'unknown parent session' from DM turns when session.dmScope=main (runtime-policy key used as parentSessionKey) `P2` `impact:session-state` 💬1
- [#146070](https://github.com/openclaw/openclaw/issues/146070) Feature: ship an .rpm package for the Linux companion `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#146065](https://github.com/openclaw/openclaw/issues/146065) WhatsApp watchdog reconnects healthy idle chats despite active transport `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#146039](https://github.com/openclaw/openclaw/issues/146039) [Bug]: iOS/iPadOS native WSS connection fails over NetBird after TLS fingerprint trust `impact:security` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#146043](https://github.com/openclaw/openclaw/issues/146043) [Bug]: doctor stops later repairs when a legacy ~/.openclaw/agent payload exists; quarantine directories accumulate `bug` `maintainer` `clawsweeper:source-repro` `P0` 💬1
- [#146033](https://github.com/openclaw/openclaw/issues/146033) Changing dmScope to per-account-channel-peer abandons existing DM sessions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#146029](https://github.com/openclaw/openclaw/issues/146029) [Bug]: Bug: install-cli.sh descarga Node 22.22.3 en vez de Node 24.x, falla instalación en Windows/WSL2 `bug` `regression` `P0` `impact:ux-release-blocker` 💬1
- [#146030](https://github.com/openclaw/openclaw/issues/146030) [Bug]: macOS app open/quit timeout with eight cooperative threads blocked in AppleEventPermissionProbe `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` `impact:crash-loop` 💬1
- [#146028](https://github.com/openclaw/openclaw/issues/146028) docs: thinking resolution order omits per-model defaults `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#146025](https://github.com/openclaw/openclaw/issues/146025) Update failure: database-schema-preflight (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#145862](https://github.com/openclaw/openclaw/issues/145862) Catalog pane updates rebuild unchanged saved transcripts `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#146011](https://github.com/openclaw/openclaw/issues/146011) Control UI failed-session removal reported blocked while exact-identity sessions.delete succeeds `maintainer` `P2` `impact:session-state` `issue-rating: 🦪 silver shellfish` 💬1
- [#146007](https://github.com/openclaw/openclaw/issues/146007) [Bug]: Multi-line /steer (/tell) drops every line after the first `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#145992](https://github.com/openclaw/openclaw/issues/145992) Make session-title identity hiding (phone/account ID vs first-message-derived) configurable `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#145979](https://github.com/openclaw/openclaw/issues/145979) Desktop proof fails when the OpenSSH runtime directory is missing `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#145607](https://github.com/openclaw/openclaw/issues/145607) Keep idle state-lifecycle SQLite coordinator connections warm `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#145978](https://github.com/openclaw/openclaw/issues/145978) Windows desktop: allow running without administrator privileges (requireAdministrator manifest blocks dictation tools like Wispr Flow) `P2` `impact:security` `impact:ux-friction` 💬1
- [#145972](https://github.com/openclaw/openclaw/issues/145972) Trigger-handling tests duplicate shared environment restoration `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#145911](https://github.com/openclaw/openclaw/issues/145911) Session discovery retains unused snippets and copies fresh sort arrays `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#145918](https://github.com/openclaw/openclaw/issues/145918) Provider policy preparation copies readonly plugin metadata `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#145913](https://github.com/openclaw/openclaw/issues/145913) Model owner fallback repeats pattern matching and prefix preparation `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#145899](https://github.com/openclaw/openclaw/issues/145899) Heartbeat active-hours checks repeat explicit timezone formatter setup `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#145897](https://github.com/openclaw/openclaw/issues/145897) Runtime overlay checks build complete inventories after finding missing output `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#145722](https://github.com/openclaw/openclaw/issues/145722) [Bug]: Cron startup recovery overwrites an acknowledged cadence edit with an old next-run time `maintainer` `P2` `clawsweeper:source-repro` `impact:data-loss` 💬1
- [#145894](https://github.com/openclaw/openclaw/issues/145894) CLI root help prepares activation policy for every manifest owner `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#145890](https://github.com/openclaw/openclaw/issues/145890) Feishu media save failures leave acquired response streams open `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#145892](https://github.com/openclaw/openclaw/issues/145892) Discord voice encoding copies complete PCM inputs before encoding `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#145948](https://github.com/openclaw/openclaw/issues/145948) Feature: opt-in recursive harness self-improvement for agent loops `P3` 💬1
- [#145884](https://github.com/openclaw/openclaw/issues/145884) Cursor history projects ordinary transcript messages twice `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#145882](https://github.com/openclaw/openclaw/issues/145882) Config change collection traverses identical shared branches `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#145920](https://github.com/openclaw/openclaw/issues/145920) [Flake] resolve-auth case with an explicit 1000 ms budget times out intermittently on loaded CI shards `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#145908](https://github.com/openclaw/openclaw/issues/145908) Session continues after chat timeout — unbounded loop requiring Gateway restart `P1` `impact:session-state` `impact:message-loss` `issue-rating: 🦪 silver shellfish` 💬1
- [#145906](https://github.com/openclaw/openclaw/issues/145906) Retired Control UI connections retain obsolete reply previews `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#145878](https://github.com/openclaw/openclaw/issues/145878) Environment snapshot cleanup retains inherited-name variables `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#145875](https://github.com/openclaw/openclaw/issues/145875) Temporary-home acquisition failures can drain sibling session writes `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#145860](https://github.com/openclaw/openclaw/issues/145860) Script harness cleanup forgets failed roots and skips siblings `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#145767](https://github.com/openclaw/openclaw/issues/145767) Refactor: consolidate native browser title publication `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#145845](https://github.com/openclaw/openclaw/issues/145845) Config form edits clone an unchanged comparison baseline `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#145843](https://github.com/openclaw/openclaw/issues/145843) Plugin test runtime exports retain unused typed factories `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#145855](https://github.com/openclaw/openclaw/issues/145855) [Bug]: iOS Native App: mTLS Client Certificate Support for WebSocket / URLSession connections `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#145813](https://github.com/openclaw/openclaw/issues/145813) Container CLI retains runtime state from the retired sudo path `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#145811](https://github.com/openclaw/openclaw/issues/145811) LAN pairing probes routes when only one eligible address exists `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#145803](https://github.com/openclaw/openclaw/issues/145803) [Bug]: Another plugin instance can invalidate live callbacks `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#145836](https://github.com/openclaw/openclaw/issues/145836) [Bug]: macOS companion app window sometimes renders blank/white; normal quit-and-reopen doesn't fix it, force-quit required `P0` `impact:ux-release-blocker` 💬1
- [#145727](https://github.com/openclaw/openclaw/issues/145727) [Bug]: Canceled steering input still reaches the active run after chat.abort succeeds `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#145762](https://github.com/openclaw/openclaw/issues/145762) Refactor: consolidate Buzz directory query and limit policy `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#145824](https://github.com/openclaw/openclaw/issues/145824) skills.entries.<key>.env does not resolve SecretRef:NAME strings into process.env values 💬1
- [#145752](https://github.com/openclaw/openclaw/issues/145752) Fresh-profile updates ignore explicit local override replay `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#145686](https://github.com/openclaw/openclaw/issues/145686) Reduce remaining Gateway allocation churn under sustained parallel agent work `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#145620](https://github.com/openclaw/openclaw/issues/145620) [Bug]: Context-engine operations leak resources or dispose them before deferred work completes `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#145753](https://github.com/openclaw/openclaw/issues/145753) Cron isolated sessions fail exec when secret egress proxy is enabled `P1` `impact:security` `impact:other` 💬1
- [#145779](https://github.com/openclaw/openclaw/issues/145779) [Bug]: background exec runs can vanish from the runtime "Active exec sessions" carrier while the process tool still lists them `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `impact:session-state` 💬1
- [#145777](https://github.com/openclaw/openclaw/issues/145777) Webchat: noticeable input lag when typing in the chat composer `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#145623](https://github.com/openclaw/openclaw/issues/145623) Artifact reads can fail when a peer archives the session after restoration `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#145760](https://github.com/openclaw/openclaw/issues/145760) CI flakes with evidence: CLI process spawn stall and native Mermaid permanent failures `maintainer` `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#145756](https://github.com/openclaw/openclaw/issues/145756) Improve mobile chat layout for remote/computer-control usage `P3` `impact:ux-friction` 💬1
- [#145746](https://github.com/openclaw/openclaw/issues/145746) [Bug]: npm global update always fails at "global install swap" with "Package rollback launcher backup changed" when the updater umask differs from the shim creator umask `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#145738](https://github.com/openclaw/openclaw/issues/145738) Update failure: plugin-target-unavailable (2026.9.3) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#145700](https://github.com/openclaw/openclaw/issues/145700) Slack reply preparation repeats unused table and chart scans `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#145719](https://github.com/openclaw/openclaw/issues/145719) [Bug]: Subscription 429 with a multi-hour Retry-After blocks the turn instead of rotating auth profiles or falling back `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#145698](https://github.com/openclaw/openclaw/issues/145698) Update integrity scan: 30s hard cap (MAX_SCAN_MS) + min() clamp makes --timeout ineffective, and fails deterministically on large install trees `P0` `impact:ux-release-blocker` 💬1
- [#145690](https://github.com/openclaw/openclaw/issues/145690) [Bug]: subagent run completion releases its model-runtime generation — next lane task fails in ~15ms, fallback chain burns out on a runtime-level error, user message dropped as a bogus timeout `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#145691](https://github.com/openclaw/openclaw/issues/145691) google-meet: agent/bidi Chrome join leaves camera ON by default, broadcasting host machine's live video (no camera-off step, unlike zoom/teams plugins) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#145681](https://github.com/openclaw/openclaw/issues/145681) [Bug]: Session stuck in 'running' after model idle-timeout; user messages silently dropped during the stall `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#145609](https://github.com/openclaw/openclaw/issues/145609) Google: consolidate lazy provider loading ownership `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#145675](https://github.com/openclaw/openclaw/issues/145675) [Bug]: Model catalog scan runs as one uninterrupted microtask batch, starving the Gateway event loop on large catalogs `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#145656](https://github.com/openclaw/openclaw/issues/145656) [Bug] opencode-go: live-discovered models (glm-5.1/5.2/5.3/5.3-flash) appear in discovery but cannot be configured/used `P1` `impact:auth-provider` 💬1
- [#145635](https://github.com/openclaw/openclaw/issues/145635) [Bug]: Plugin-owned Webchat continuation loses its conversation binding when To is absent `P2` `impact:session-state` 💬1
- [#145567](https://github.com/openclaw/openclaw/issues/145567) Omarchy bar plugin with agents, sessions, and desktop app handoff `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` `impact:ux-friction` 💬1
- [#145579](https://github.com/openclaw/openclaw/issues/145579) Reduce redundant Gateway work under sustained session activity `maintainer` `P2` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` 💬1
- [#145497](https://github.com/openclaw/openclaw/issues/145497) Consolidate ACP session metadata reads `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#145502](https://github.com/openclaw/openclaw/issues/145502) Tauri companion: support the shared inline browser workflow `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` `impact:ux-friction` 💬1
- [#145589](https://github.com/openclaw/openclaw/issues/145589) fs-safe: O_NONBLOCK read truncates files >65512 B on WSL2 9p mounts, causing false "Memory source changed while indexing" that aborts every memory reindex `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#145474](https://github.com/openclaw/openclaw/issues/145474) Simplify State database admission while preserving upgrade and deletion checks `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#145529](https://github.com/openclaw/openclaw/issues/145529) Show Git change counts and associated PR previews in Activity `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#145551](https://github.com/openclaw/openclaw/issues/145551) [Bug]: Answering a pending ask_user question crashes the run - SQLite transcript changed while preparing rewrite `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#145550](https://github.com/openclaw/openclaw/issues/145550) [Feature]: Render ask_user question options as native interactive-card buttons on Feishu `P2` `impact:ux-friction` 💬1
- [#145472](https://github.com/openclaw/openclaw/issues/145472) Reduce repository access-check round trips for prepared cloud workers `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` `impact:other` 💬1
- [#145522](https://github.com/openclaw/openclaw/issues/145522) [Bug]: macOS Remote over SSH does not forward widget sandbox port; canvas widgets fail `bug` `bug:behavior` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#145509](https://github.com/openclaw/openclaw/issues/145509) [Bug]: Feishu exec tool progress shows bare "Exec" — commandText policy not exposed by plugin schema (regression vs 2026.7.1-2) `P2` `impact:ux-friction` 💬1
- [#145506](https://github.com/openclaw/openclaw/issues/145506) [Bug]: Compaction retry loses plugin delivery capability and triggers false model fallback `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:needs-live-repro` 💬1
- [#145492](https://github.com/openclaw/openclaw/issues/145492) Update failure: plugin-target-unavailable (2026.9.4) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#145486](https://github.com/openclaw/openclaw/issues/145486) Update failure: plugin-target-unavailable (2026.9.3) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#145454](https://github.com/openclaw/openclaw/issues/145454) Update failure: global-install-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#146599](https://github.com/openclaw/openclaw/issues/146599) Update failure: repairing (2026.9.4)
- [#146448](https://github.com/openclaw/openclaw/issues/146448) [Bug]: Control UI webhook URL check weaker than server validation

#### 🔒 Closed Issues
- [#142476](https://github.com/openclaw/openclaw/issues/142476) 2026.9.3: cron session reaper opens every agent database with a synchronous PRAGMA integrity_check, blocking the event loop 14-76s every few minutes on a 632-agent gateway
- [#140620](https://github.com/openclaw/openclaw/issues/140620) [Bug] In-place upgrade 2026.7.1-2 -> 2026.9.2: session-transcript reconciliation imports 27/~1500 sessions then stalls; pre-upgrade sessions unfindable via sessions_search
- [#96007](https://github.com/openclaw/openclaw/issues/96007) Discord: subsequent message content truncated after inline error text
- [#145689](https://github.com/openclaw/openclaw/issues/145689) [Bug]: Existing cron update blocked by tool-policy migration and owner validation
- [#145266](https://github.com/openclaw/openclaw/issues/145266) [Bug]: Git/dev Doctor refreshes Codex from npm and shadows rebuilt bundled plugin (missing native-hook-relay export)
- [#77798](https://github.com/openclaw/openclaw/issues/77798) feat: collaborative markdown editor via Canvas embed (like ChatGPT Canvas)
- [#146096](https://github.com/openclaw/openclaw/issues/146096) Agent whole-file writes accept stale read-derived content and discard intervening workspace updates
- [#100941](https://github.com/openclaw/openclaw/issues/100941) Gateway drops concurrent in-process tool-to-gateway WebSocket connections (1006) under parallel tool fan-out; misleading Gateway-crashed error (2026.6.11)
- [#144793](https://github.com/openclaw/openclaw/issues/144793) [Bug]: claude-cli runs on a token auth profile fail with "Not logged in" when a second CLI session is already live
- [#107787](https://github.com/openclaw/openclaw/issues/107787) [Bug]: Thinking block leaking into telegram and confuses Agent
- [#126876](https://github.com/openclaw/openclaw/issues/126876) [Feature]: Accessibility audit: 13 screen reader barriers in setup, reported by the first blind user to publicly document an install
- [#145782](https://github.com/openclaw/openclaw/issues/145782) Update failure: repairing (2026.9.3)
- [#145072](https://github.com/openclaw/openclaw/issues/145072) [Bug]: macOS npm update fails at "global install swap" — `Package rollback launcher backup changed` (launcher fingerprint includes symlink mode; shim backup copy never chmod'ed)
- [#146209](https://github.com/openclaw/openclaw/issues/146209) Exec allowlist grant works live, denied every time from a scheduled/headless automation — identical command, identical grant
- [#146157](https://github.com/openclaw/openclaw/issues/146157) Update failure: global-install-failed (2026.9.3)
- [#145998](https://github.com/openclaw/openclaw/issues/145998) Update-run/restart-sentinel notices can leak to non-owner chat sessions
- [#145563](https://github.com/openclaw/openclaw/issues/145563) [Bug]: WeChat channel reply dispatch fails with `PreparedModelCatalogConfigReplacedError`
- [#142583](https://github.com/openclaw/openclaw/issues/142583) [Bug]: 2026.9.3 Doctor reports Skill Workshop proposals as retargeted but immediately flags external targets again
- [#136555](https://github.com/openclaw/openclaw/issues/136555) [Feature]: Agent Icon in chat.
- [#145638](https://github.com/openclaw/openclaw/issues/145638) [Bug]: npm stable update fails with ENOSPC copying the state directory into os.tmpdir(), with no option to relocate the snapshot
- [#145658](https://github.com/openclaw/openclaw/issues/145658) [Bug]: Setup fails in install-cli step due to unsupported Node version (Node 22.22.3 requested instead of 24/26)
- [#144672](https://github.com/openclaw/openclaw/issues/144672) [Bug]: App shows no actionable error after connecting to wrong Control Port
- [#94268](https://github.com/openclaw/openclaw/issues/94268) wecom-openclaw-plugin MCP tool: fetch failed (cause: invalid onRequestStart method) with global undici dispatcher on Node 25
- [#120571](https://github.com/openclaw/openclaw/issues/120571) before_tool_call { block: true } silently unenforced for Codex-native exec when appServer.approvalPolicy is "never" (fails open, logs claim it blocked)
- [#146392](https://github.com/openclaw/openclaw/issues/146392) [Bug]: doctor reports core tool `pdf` as an unknown plugin-only allowlist entry, because it is missing from CORE_TOOL_DEFINITIONS
- [#141657](https://github.com/openclaw/openclaw/issues/141657) System prompt instructs gateway-capable agents to use `gateway update.run`, which the update runtime refuses — and forbids the path it recommends
- [#126520](https://github.com/openclaw/openclaw/issues/126520) [Bug]: Thinking-level change requires operator.admin, locking it out of all mobile clients (parity with #120867), and the refusal is not surfaced in the picker
- [#146359](https://github.com/openclaw/openclaw/issues/146359) Update failure: plugin-target-unavailable (2026.9.3)
- [#145504](https://github.com/openclaw/openclaw/issues/145504) Android: Chat actions (⋯) menu flickers closed immediately on some phones
- [#146017](https://github.com/openclaw/openclaw/issues/146017) [Bug]: Update candidate rehearsal drops gateway.auth.rateLimit and fails policy Doctor lint
- [#141923](https://github.com/openclaw/openclaw/issues/141923) [Bug]: backup create fails permanently when the state directory contains any absolute symlink an asset doesn't own
- [#145339](https://github.com/openclaw/openclaw/issues/145339) [Bug]: Update from 2026.9.3 to 2026.9.4 fails candidate Doctor lint with Discord groupPolicy=open
- [#145154](https://github.com/openclaw/openclaw/issues/145154) [Bug]: doctor/wizard migration silently reroutes Codex-OAuth traffic to paid API key when both auth profiles exist
- [#145494](https://github.com/openclaw/openclaw/issues/145494) Update failure: fetch-failed (2026.9.3)
- [#126341](https://github.com/openclaw/openclaw/issues/126341) wiki ingest intermittently fails: nlink>1 hardlink guard races its own APFS copy-on-write clone
- [#146580](https://github.com/openclaw/openclaw/issues/146580) Update failure: managed-service-handoff-unavailable (2026.9.3)
- [#144476](https://github.com/openclaw/openclaw/issues/144476) exec auto-reviewer hard-caps output at 360 tokens → fails closed on long/complex commands
- [#146224](https://github.com/openclaw/openclaw/issues/146224) [Bug]: Subagent activity remains running after orphan cleanup
- [#146484](https://github.com/openclaw/openclaw/issues/146484) opencode-go: catalog publishes only 7 of 36 models (no modelCatalog.modelsDev opt-in), forcing hand-written models.providers entries
- [#145909](https://github.com/openclaw/openclaw/issues/145909) [Bug]: Slow SQLite
- [#146376](https://github.com/openclaw/openclaw/issues/146376) Count and existence probes load plugin and transcript payloads unnecessarily
- [#142940](https://github.com/openclaw/openclaw/issues/142940) [Bug]: openclaw gateway install` fails with `SERVICE_DEFINITION_UNKNOWN` on systemd 239 (busctl `--json=short` unsupported)
- [#127973](https://github.com/openclaw/openclaw/issues/127973) openclaw doctor is silent about a pending legacy device auth migration and reports zero local device auth findings
- [#146110](https://github.com/openclaw/openclaw/issues/146110) [Bug]: Shutdown drain budget (TimeoutStopSec-15s) ignores provider/agent timeouts — a restart with a long call in flight exits 1 and leaves the unit failed with no restart
- [#144866](https://github.com/openclaw/openclaw/issues/144866) [Bug]: Subagent spawn clamps thinking level to high for config-declared models — model-level compat.supportedReasoningEfforts never reaches the spawn-path profile resolution
- [#146142](https://github.com/openclaw/openclaw/issues/146142) [Bug]: Supervised restart races the gateway-lifecycle ownership coordinator — successor fails to start and systemd start-limit leaves the Gateway down (2026.9.3)
- [#146038](https://github.com/openclaw/openclaw/issues/146038) [Bug]: update refused with "package manager owner is unknown" on nvm + ~/.npm-global installs
- [#146032](https://github.com/openclaw/openclaw/issues/146032) claude-cli backend fails with `write EPIPE` on every turn right after live session start (2026.9.4, Docker) — all turns silently fall back
- [#146064](https://github.com/openclaw/openclaw/issues/146064) WhatsApp debounce drops earlier media from rapid-message batches
- [#145954](https://github.com/openclaw/openclaw/issues/145954) [Bug]: `openclaw update` fails at "global install swap" - "retained package tree changed" / "Installation recovery is unverified" (2026.9.3 -> 2026.9.4)
- [#144059](https://github.com/openclaw/openclaw/issues/144059) chat.send truncates X status URLs before before_prompt_build hooks
- [#145608](https://github.com/openclaw/openclaw/issues/145608) Busy Gateway allocates excessively while preparing parallel agent turns
- [#144689](https://github.com/openclaw/openclaw/issues/144689) Isolate agent database ownership refusals without blocking healthy agents
- [#145457](https://github.com/openclaw/openclaw/issues/145457) Misleading error: "prepared model runtime plugin generation was superseded" is thrown when a run's model chain references a DISABLED plugin (and `config validate` passes)
- [#146552](https://github.com/openclaw/openclaw/issues/146552) Settings › Advanced collapse chevrons point down/up instead of right/down
- [#145161](https://github.com/openclaw/openclaw/issues/145161) [Bug]: Chat collapse chevrons point in three different directions (text box, task progress, sessions)
- [#146519](https://github.com/openclaw/openclaw/issues/146519) Usage charts repeatedly validate dates across quarter-hour buckets
- [#146509](https://github.com/openclaw/openclaw/issues/146509) Avoid rescanning matched sessions in Usage hour filters
- [#146537](https://github.com/openclaw/openclaw/issues/146537) Core test shard exceeds its headroom target after new plugin tests
- [#146435](https://github.com/openclaw/openclaw/issues/146435) [Bug]: Rollback error replaces root peer-link error in plugin update finalization
- [#146496](https://github.com/openclaw/openclaw/issues/146496) Avoid repeated line alignment for unchanged edit-preview prefixes
- [#146505](https://github.com/openclaw/openclaw/issues/146505) Improve large image result size-estimation performance
- [#146511](https://github.com/openclaw/openclaw/issues/146511) [Regression] ClawX startup overwrites per-agent API key in auth_profile_store on 2026.7.1-2
- [#145568](https://github.com/openclaw/openclaw/issues/145568) [Bug]: Agent selector shows the selected agent with a giant checkmark and stacked DEFAULT badge
- [#146477](https://github.com/openclaw/openclaw/issues/146477) Reduce repeated path parsing during configuration schema lookup
- [#146303](https://github.com/openclaw/openclaw/issues/146303) Feature: display hosted websites in fullscreen session dashboards
- [#146468](https://github.com/openclaw/openclaw/issues/146468) Reduce CPU used by realtime and telephony audio conversion
- [#146443](https://github.com/openclaw/openclaw/issues/146443) [Bug]: Configured provider fallback only inspects models[0]
- [#146444](https://github.com/openclaw/openclaw/issues/146444) [Bug]: Discord forum thread creation fabricates starter message ID from thread ID
- [#146430](https://github.com/openclaw/openclaw/issues/146430) [Bug]: buildHistoryPrunePlan inflates budget by SAFETY_MARGIN, under-pruning history
- [#146427](https://github.com/openclaw/openclaw/issues/146427) [Bug]: deleteSession leaks activeExecSessions; waitForExecScope can hang
- [#146416](https://github.com/openclaw/openclaw/issues/146416) [Bug]: Tool-event recipient TTL is refreshed on read and never fires
- [#146431](https://github.com/openclaw/openclaw/issues/146431) [Bug]: Tool-result budget helpers return NaN for non-finite context windows
- [#146438](https://github.com/openclaw/openclaw/issues/146438) [Bug]: Slack replyToMode off still threads replies when threadId is present
- [#146436](https://github.com/openclaw/openclaw/issues/146436) [Bug]: WhatsApp send passes mediaPayload.fileName as if it were a media URL
- [#146434](https://github.com/openclaw/openclaw/issues/146434) [Bug]: Plugin install transaction leaks past completion via spread (double-settle)
- [#146425](https://github.com/openclaw/openclaw/issues/146425) [Bug]: Worker credential-expiry timer overflows on far-future expiries
- [#146424](https://github.com/openclaw/openclaw/issues/146424) [Bug]: Queued diagnostics writer silently drops mkdir/append failures
- [#146428](https://github.com/openclaw/openclaw/issues/146428) [Bug]: Non-standard tool results coerced to success, losing error status
- [#146420](https://github.com/openclaw/openclaw/issues/146420) [Bug]: Duplicate abort registration returns a detached controller
- [#146421](https://github.com/openclaw/openclaw/issues/146421) [Bug]: Session-history SSE heartbeat holds the event loop and re-auths every 15s
- [#146374](https://github.com/openclaw/openclaw/issues/146374) Consolidate Teams and Zoom meeting integration test contracts
- [#146333](https://github.com/openclaw/openclaw/issues/146333) Consolidate shared media generation lifecycle test contracts
- [#146293](https://github.com/openclaw/openclaw/issues/146293) Consolidate canonical DDL ownership for first-use database setup
- [#146252](https://github.com/openclaw/openclaw/issues/146252) Gateway Git inspection repeats work and competes with interactive requests
- [#146337](https://github.com/openclaw/openclaw/issues/146337) Consolidate bundled plugin contract-test source loading
- [#146288](https://github.com/openclaw/openclaw/issues/146288) Add APFS copy-on-write cloning for managed worktrees
- [#146314](https://github.com/openclaw/openclaw/issues/146314) Retire duplicate declarations beside typed release helpers
- [#146358](https://github.com/openclaw/openclaw/issues/146358) Web chat /new fires command:new plugin hooks without previousSessionMemory while /reset carries it (2026.9.2)
- [#146313](https://github.com/openclaw/openclaw/issues/146313) Transcript reads do repeated work on cold-state checks and pending index scans
- [#146166](https://github.com/openclaw/openclaw/issues/146166) CPU-heavy memory, media, and session work stalls Gateway request handling
- [#146315](https://github.com/openclaw/openclaw/issues/146315) [Bug]: cron runs fail with 'Transcript idempotency key <sessionId>:terminal-error conflicts with the admitted message'
- [#146250](https://github.com/openclaw/openclaw/issues/146250) Reduce managed worktree source storage with filesystem copy-on-write
- [#144932](https://github.com/openclaw/openclaw/issues/144932) Update failure: global-install-failed (2026.9.3)
- [#146210](https://github.com/openclaw/openclaw/issues/146210) Workboard statistics hydrate full cards for count-only reads
- [#146200](https://github.com/openclaw/openclaw/issues/146200) Remove duplicated request declarations from send handlers
- [#146198](https://github.com/openclaw/openclaw/issues/146198) Consolidate automation CLI integer validation
- [#146211](https://github.com/openclaw/openclaw/issues/146211) Update failure: managed-service-handoff-unavailable (2026.9.4)
- [#146080](https://github.com/openclaw/openclaw/issues/146080) [Bug]: Matrix-enabled selected Docker source builds fail the import guard
- [#145587](https://github.com/openclaw/openclaw/issues/145587) [Bug]: Dedicated worker RPCs are missing Gateway latency diagnostics
- [#143829](https://github.com/openclaw/openclaw/issues/143829) Feature: watch the live desktop in browser Picture-in-Picture
- [#146087](https://github.com/openclaw/openclaw/issues/146087) Unify generation-tool preparation and task resource handoff
- [#146085](https://github.com/openclaw/openclaw/issues/146085) Consolidate Matrix inbound media and prepared context ownership
- [#146055](https://github.com/openclaw/openclaw/issues/146055) [Bug]: local schema checks omit the Kova workflow regression
- [#146086](https://github.com/openclaw/openclaw/issues/146086) sessions_spawn visible:true fails with 'unknown parent session' from DM turns when session.dmScope=main (runtime-policy key used as parentSessionKey)
- [#146029](https://github.com/openclaw/openclaw/issues/146029) [Bug]: Bug: install-cli.sh descarga Node 22.22.3 en vez de Node 24.x, falla instalación en Windows/WSL2
- [#145862](https://github.com/openclaw/openclaw/issues/145862) Catalog pane updates rebuild unchanged saved transcripts
- [#145979](https://github.com/openclaw/openclaw/issues/145979) Desktop proof fails when the OpenSSH runtime directory is missing
- [#145607](https://github.com/openclaw/openclaw/issues/145607) Keep idle state-lifecycle SQLite coordinator connections warm
- [#145972](https://github.com/openclaw/openclaw/issues/145972) Trigger-handling tests duplicate shared environment restoration
- [#145911](https://github.com/openclaw/openclaw/issues/145911) Session discovery retains unused snippets and copies fresh sort arrays
- [#145918](https://github.com/openclaw/openclaw/issues/145918) Provider policy preparation copies readonly plugin metadata
- [#145913](https://github.com/openclaw/openclaw/issues/145913) Model owner fallback repeats pattern matching and prefix preparation
- [#145899](https://github.com/openclaw/openclaw/issues/145899) Heartbeat active-hours checks repeat explicit timezone formatter setup
- [#145897](https://github.com/openclaw/openclaw/issues/145897) Runtime overlay checks build complete inventories after finding missing output
- [#145722](https://github.com/openclaw/openclaw/issues/145722) [Bug]: Cron startup recovery overwrites an acknowledged cadence edit with an old next-run time
- [#145894](https://github.com/openclaw/openclaw/issues/145894) CLI root help prepares activation policy for every manifest owner
- [#145890](https://github.com/openclaw/openclaw/issues/145890) Feishu media save failures leave acquired response streams open
- [#145892](https://github.com/openclaw/openclaw/issues/145892) Discord voice encoding copies complete PCM inputs before encoding
- [#145948](https://github.com/openclaw/openclaw/issues/145948) Feature: opt-in recursive harness self-improvement for agent loops
- [#145884](https://github.com/openclaw/openclaw/issues/145884) Cursor history projects ordinary transcript messages twice
- [#145882](https://github.com/openclaw/openclaw/issues/145882) Config change collection traverses identical shared branches
- [#145878](https://github.com/openclaw/openclaw/issues/145878) Environment snapshot cleanup retains inherited-name variables
- [#145875](https://github.com/openclaw/openclaw/issues/145875) Temporary-home acquisition failures can drain sibling session writes
- [#144945](https://github.com/openclaw/openclaw/issues/144945) [Bug]: Healthy MCP server fails candidate doctor lint after ~4 minutes, and the update failure record truncates away the finding
- [#127444](https://github.com/openclaw/openclaw/issues/127444) Include-only config edits do not advance the write CAS token and can be overwritten by stale drafts
- [#145860](https://github.com/openclaw/openclaw/issues/145860) Script harness cleanup forgets failed roots and skips siblings
- [#145767](https://github.com/openclaw/openclaw/issues/145767) Refactor: consolidate native browser title publication
- [#145845](https://github.com/openclaw/openclaw/issues/145845) Config form edits clone an unchanged comparison baseline
- [#145843](https://github.com/openclaw/openclaw/issues/145843) Plugin test runtime exports retain unused typed factories
- [#145813](https://github.com/openclaw/openclaw/issues/145813) Container CLI retains runtime state from the retired sudo path
- [#145811](https://github.com/openclaw/openclaw/issues/145811) LAN pairing probes routes when only one eligible address exists
- [#145803](https://github.com/openclaw/openclaw/issues/145803) [Bug]: Another plugin instance can invalidate live callbacks
- [#145836](https://github.com/openclaw/openclaw/issues/145836) [Bug]: macOS companion app window sometimes renders blank/white; normal quit-and-reopen doesn't fix it, force-quit required
- [#145727](https://github.com/openclaw/openclaw/issues/145727) [Bug]: Canceled steering input still reaches the active run after chat.abort succeeds
- [#145762](https://github.com/openclaw/openclaw/issues/145762) Refactor: consolidate Buzz directory query and limit policy
- [#145824](https://github.com/openclaw/openclaw/issues/145824) skills.entries.<key>.env does not resolve SecretRef:NAME strings into process.env values
- [#145752](https://github.com/openclaw/openclaw/issues/145752) Fresh-profile updates ignore explicit local override replay
- [#145686](https://github.com/openclaw/openclaw/issues/145686) Reduce remaining Gateway allocation churn under sustained parallel agent work
- [#145412](https://github.com/openclaw/openclaw/issues/145412) Gateway header-only agent preflight copies entire databases
- [#145620](https://github.com/openclaw/openclaw/issues/145620) [Bug]: Context-engine operations leak resources or dispose them before deferred work completes
- [#145623](https://github.com/openclaw/openclaw/issues/145623) Artifact reads can fail when a peer archives the session after restoration
- [#145756](https://github.com/openclaw/openclaw/issues/145756) Improve mobile chat layout for remote/computer-control usage
- [#145746](https://github.com/openclaw/openclaw/issues/145746) [Bug]: npm global update always fails at "global install swap" with "Package rollback launcher backup changed" when the updater umask differs from the shim creator umask
- [#145738](https://github.com/openclaw/openclaw/issues/145738) Update failure: plugin-target-unavailable (2026.9.3)
- [#145700](https://github.com/openclaw/openclaw/issues/145700) Slack reply preparation repeats unused table and chart scans
- [#145698](https://github.com/openclaw/openclaw/issues/145698) Update integrity scan: 30s hard cap (MAX_SCAN_MS) + min() clamp makes --timeout ineffective, and fails deterministically on large install trees
- [#145609](https://github.com/openclaw/openclaw/issues/145609) Google: consolidate lazy provider loading ownership
- [#145656](https://github.com/openclaw/openclaw/issues/145656) [Bug] opencode-go: live-discovered models (glm-5.1/5.2/5.3/5.3-flash) appear in discovery but cannot be configured/used
- [#145635](https://github.com/openclaw/openclaw/issues/145635) [Bug]: Plugin-owned Webchat continuation loses its conversation binding when To is absent
- [#145567](https://github.com/openclaw/openclaw/issues/145567) Omarchy bar plugin with agents, sessions, and desktop app handoff
- [#145579](https://github.com/openclaw/openclaw/issues/145579) Reduce redundant Gateway work under sustained session activity
- [#145497](https://github.com/openclaw/openclaw/issues/145497) Consolidate ACP session metadata reads
- [#144280](https://github.com/openclaw/openclaw/issues/144280) [Bug]: Managed update failure reports drop phases retained in the update ledger
- [#145502](https://github.com/openclaw/openclaw/issues/145502) Tauri companion: support the shared inline browser workflow
- [#145474](https://github.com/openclaw/openclaw/issues/145474) Simplify State database admission while preserving upgrade and deletion checks
- [#145071](https://github.com/openclaw/openclaw/issues/145071) Support GPT-Live-1 through the public Live API
- [#145529](https://github.com/openclaw/openclaw/issues/145529) Show Git change counts and associated PR previews in Activity
- [#144930](https://github.com/openclaw/openclaw/issues/144930) [Bug]: Local `openclaw infer` image, embedding, audio, and video commands fail with "secret reference was not materialized by the active runtime" for saved provider accounts stored as SecretRefs
- [#145550](https://github.com/openclaw/openclaw/issues/145550) [Feature]: Render ask_user question options as native interactive-card buttons on Feishu
- [#145472](https://github.com/openclaw/openclaw/issues/145472) Reduce repository access-check round trips for prepared cloud workers
- [#145509](https://github.com/openclaw/openclaw/issues/145509) [Bug]: Feishu exec tool progress shows bare "Exec" — commandText policy not exposed by plugin schema (regression vs 2026.7.1-2)
- [#145492](https://github.com/openclaw/openclaw/issues/145492) Update failure: plugin-target-unavailable (2026.9.4)
- [#145486](https://github.com/openclaw/openclaw/issues/145486) Update failure: plugin-target-unavailable (2026.9.3)

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 244,904 · **Open issues:** 42,335 · **Last push:** <1h ago

There were no new releases or merged pull requests for Hermes Agent on September 13, 2026. The day was marked by the reporting of several new issues, with #109243 highlighting a timeout problem during the external-worker handoff, and #109440 revealing a critical bug where the command `hermes chat -q -m <direct alias>` inadvertently exposes an API key to the default provider, posing a security risk. Other notable issues include #109375, which discusses the potential loss of skill background reviews in short-lived contexts, and #109480, which indicates that profiles accessed via the Web UI appear to be malfunctioning. These emerging problems suggest areas of immediate focus for the development team.

#### 🐛 New Issues
- [#109243](https://github.com/NousResearch/hermes-agent/issues/109243) cron: external-worker handoff requires an ack within 5s, but a cold worker start takes ~12s `type/bug` `comp/cron` `P2` 💬17
- [#109440](https://github.com/NousResearch/hermes-agent/issues/109440) [Bug]: `hermes chat -q -m <direct alias>` sends the alias's API key to the default provider's host (cross-origin credential leak) — reproduced on v0.21.2 `type/bug` `duplicate` `comp/cli` `area/auth` 💬3
- [#109375](https://github.com/NousResearch/hermes-agent/issues/109375) Skill background review can be lost in Kanban and Group Bot Chat short-lived runtimes `type/bug` `comp/agent` `comp/cron` `tool/skills` 💬3
- [#109480](https://github.com/NousResearch/hermes-agent/issues/109480) [Bug]: Profiles seems broken via Web UI `type/bug` `comp/gateway` `P2` `needs-repro` 💬2
- [#109452](https://github.com/NousResearch/hermes-agent/issues/109452) [Bug]: Kanban re-promotes a non-sticky blocked card every dispatcher tick with no backoff and no breaker - 30 identical model runs in 30 minutes `type/bug` `duplicate` `comp/cron` `P3` 💬2
- [#109448](https://github.com/NousResearch/hermes-agent/issues/109448) memory/hindsight: local_embedded daemon restarts on every session init — profile-env compare never matches (HINDSIGHT_API_PORT) `type/bug` `duplicate` `comp/plugins` `tool/memory` 💬2
- [#109258](https://github.com/NousResearch/hermes-agent/issues/109258) [Bug]: /save md save-stuff.md fails in Telegram UI `type/bug` `duplicate` `comp/gateway` `platform/telegram` 💬2
- [#109423](https://github.com/NousResearch/hermes-agent/issues/109423) [Bug]: Telegram allowed_chats stored as JSON string is mis-parsed → group messages silently dropped `type/bug` `comp/gateway` `platform/telegram` `area/config` 💬1
- [#109482](https://github.com/NousResearch/hermes-agent/issues/109482) hermes update silently drops failed sibling profile config migrations with no visible warning `type/bug` `comp/cli` `area/config` `P3` 💬1
- [#109422](https://github.com/NousResearch/hermes-agent/issues/109422) Multiplexed profiles sharing an OAuth MCP server URL silently adopt each other's authenticated identity `type/bug` `comp/gateway` `tool/mcp` `area/auth` 💬1
- [#109063](https://github.com/NousResearch/hermes-agent/issues/109063) [Bug]: Desktop plugin routes stay stale after late registration with React Compiler (ChatRoutesSurface / RouteTilePane) `type/bug` `comp/plugins` `P3` `comp/desktop` 💬1
- [#108883](https://github.com/NousResearch/hermes-agent/issues/108883) tests: file-tool mock assertions use unnormalized /tmp paths on macOS `type/test` `tool/file` `P3` 💬1
- [#109238](https://github.com/NousResearch/hermes-agent/issues/109238) A2A inbound: orphan-task watchdog hardcodes 300s - long-running tasks marked FAILED in store while still executing `type/bug` `duplicate` `comp/plugins` `P3` 💬1
- [#109233](https://github.com/NousResearch/hermes-agent/issues/109233) [Desktop] Chat pane blanks to brand-splash loader for ~1s with multiple tabs mounted — no connection event `type/bug` `P3` `comp/desktop` `area/sessions`
- [#109235](https://github.com/NousResearch/hermes-agent/issues/109235) npm update clears 4 of 8 advisories: sanitize-html, browserslist, baseline-browser-mapping, colord are patched within their locked ranges `type/bug` `P3` `comp/dashboard`
- [#109473](https://github.com/NousResearch/hermes-agent/issues/109473) [Bug]: `hermes gateway migrate --standalone` ignores --dry-run, kills itself mid-rollback, and leaves a stale served_profiles that blocks every repair with exit 78 `type/bug` `comp/cli` `comp/gateway` `P1`
- [#109475](https://github.com/NousResearch/hermes-agent/issues/109475) Discord auto-thread semantic rename skipped under shared-token profile routing `type/bug` `comp/gateway` `platform/discord` `P2`
- [#109476](https://github.com/NousResearch/hermes-agent/issues/109476) bug(gateway): custom-HERMES_HOME update leaves legacy user unit invisible and restart runs foreground `type/bug` `comp/cli` `comp/gateway` `P2`
- [#109469](https://github.com/NousResearch/hermes-agent/issues/109469) [Docs/UX]: In-product agent and docs describe Desktop Remote-gateway UI that Add connection does not have `type/docs` `area/auth` `P3` `comp/desktop`
- [#109450](https://github.com/NousResearch/hermes-agent/issues/109450) [Bug]: single corrupt system_prompts row (truncated UTF-8) crashes all session-list/load queries via _system_prompt_resolved (Could not decode to UTF-8) `type/bug` `comp/agent` `P2` `sweeper:risk-session-state`
- [#109451](https://github.com/NousResearch/hermes-agent/issues/109451) [Bug]: Kanban promotes children on parent STATUS only - a task that completes with a negative result (e.g. GATE_FAIL) still releases its children `type/bug` `comp/cron` `P3` `needs-decision`
- [#109453](https://github.com/NousResearch/hermes-agent/issues/109453) [Bug]: kanban.auto_decompose defaults to true - any card parked in triage by automation is rewritten and spawned within one tick, no per-card opt-out `type/bug` `comp/cron` `area/config` `P3`
- [#109454](https://github.com/NousResearch/hermes-agent/issues/109454) [Bug]: Native review lane - after a run is recorded crashed (pid not alive), later runs' kanban_complete/kanban_block are rejected against the dead pid / 'claimed by run N' `type/bug` `comp/cron` `P3` `sweeper:risk-automation`
- [#109455](https://github.com/NousResearch/hermes-agent/issues/109455) [Feature]: Expose trusted per-turn voice context to the agent across Desktop and TUI `type/feature` `comp/agent` `comp/tui` `tool/tts`
- [#109459](https://github.com/NousResearch/hermes-agent/issues/109459) [Feature]: Bot Mode chats should read as a conversation, not a transcript `type/feature` `P3` `comp/desktop`
- [#109443](https://github.com/NousResearch/hermes-agent/issues/109443) agent.tool_search.enabled silently ignored — no validation, no error; correct key is tools.tool_search.enabled `type/bug` `comp/cli` `area/config` `P3`
- [#109435](https://github.com/NousResearch/hermes-agent/issues/109435) [Bug]: kanban create stamps another board's project when the store is pinned (HERMES_KANBAN_DB) `type/bug` `comp/cron` `area/config` `P3`
- [#109433](https://github.com/NousResearch/hermes-agent/issues/109433) [Feature]: Make "Home" a first-class sidebar item, not a project row `type/feature` `P3` `comp/desktop`
- [#109429](https://github.com/NousResearch/hermes-agent/issues/109429) mTLS client certs excluded from MCP connection identity - same cross-profile leak shape as #109422 `type/bug` `comp/gateway` `tool/mcp` `area/auth`
- [#109417](https://github.com/NousResearch/hermes-agent/issues/109417) Tracking: profile multiplexing as the only gateway mode — done, open, and the gate for forced migration `type/feature` `comp/gateway` `P2` `sweeper:risk-compatibility`
- [#109411](https://github.com/NousResearch/hermes-agent/issues/109411) cron: duration schedules compute the wrong next-run instant across DST transitions `type/bug` `comp/cron` `P2`

#### 🔒 Closed Issues
- [#101975](https://github.com/NousResearch/hermes-agent/issues/101975) [Bug]: Model switch auto-corrects uncataloged models to different existing models (e.g. gemini-3.8-flash → gemini-3.6-flash)
- [#109448](https://github.com/NousResearch/hermes-agent/issues/109448) memory/hindsight: local_embedded daemon restarts on every session init — profile-env compare never matches (HINDSIGHT_API_PORT)
- [#108883](https://github.com/NousResearch/hermes-agent/issues/108883) tests: file-tool mock assertions use unnormalized /tmp paths on macOS

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 91,594 · **Open issues:** 7,896 · **Last push:** <1h ago

On September 13, 2026, there were no new releases for vLLM, but multiple significant pull requests were merged, including enhancements to the DSv4 with the migration of MHC TileLang and sampling kernels. Notably, the support for dual-key Gumbel-max watermarking for speculative decoding was added, alongside a bug fix addressing elastic EP scaling deadlocks. Despite the productive day in terms of updates, new issues arose, with a particularly concerning bug (#56605) reported on GLM-5.3-Flash, where it degenerates into a repeated-token "word salad" during multi-turn interactions. Other notable bugs included issues with garbled output when using run:ai distributed streamer and a crashed vLLM startup due to an unconditional xgrammar import.

#### ✅ Merged PRs
- [#50178](https://github.com/vllm-project/vllm/pull/50178) [9/N][warmup][DSv4] Migrate MHC TileLang kernels
- [#56323](https://github.com/vllm-project/vllm/pull/56323) [6/N][warmup][DSv4] Migrate sampling, and DFlash JIT kernels
- [#56629](https://github.com/vllm-project/vllm/pull/56629) [5/N] Share HiSparse host cache across TP ranks (reopens #52760)
- [#56157](https://github.com/vllm-project/vllm/pull/56157) [PCP][DCP] Enable PCP+DCP on sparse-MLA models
- [#56610](https://github.com/vllm-project/vllm/pull/56610) [ROCm][Bugfix] Fix elastic EP scaling deadlock
- [#56122](https://github.com/vllm-project/vllm/pull/56122) [watermarking] Dual-key gumbel-max watermarking for speculative decoding support
- [#56599](https://github.com/vllm-project/vllm/pull/56599) [CI] Update DeepSeek V4.1 MegaMoE routing test
- [#56600](https://github.com/vllm-project/vllm/pull/56600) [CI] Fix Qwen3 Omni DSpark load test config
- [#56452](https://github.com/vllm-project/vllm/pull/56452) [Bugfix] Fix DeepGEMM FP8 warmup coverage
- [#56061](https://github.com/vllm-project/vllm/pull/56061) [4/N] Expose HiSparse cache metrics via KV connector stats
- [#55522](https://github.com/vllm-project/vllm/pull/55522) [Refactor][ROCm] Migrate the RDNA3 W4A16 MoE to the oracle/experts pa…
- [#55799](https://github.com/vllm-project/vllm/pull/55799) [Bugfix][CI] skip conftest for NPU compatibility test
- [#56332](https://github.com/vllm-project/vllm/pull/56332) [CI/Build] Add DSv4.1 auto-label rules and narrow DSv4
- [#56501](https://github.com/vllm-project/vllm/pull/56501) Add @arpera to CODEOWNERS of Structured Output
- [#56594](https://github.com/vllm-project/vllm/pull/56594) [Bugfix][CI] Update CuTeDSL indexer Q sentinel test for migrated wrappers
- [#54821](https://github.com/vllm-project/vllm/pull/54821) [Frontend][Rust] Reject empty structured-output values
- [#54985](https://github.com/vllm-project/vllm/pull/54985) [Elastic EP] Reuse CUDA graphs across reconfiguration
- [#56562](https://github.com/vllm-project/vllm/pull/56562) [Perf] Fuse DSV4.1 input metadata preparation with Triton
- [#56555](https://github.com/vllm-project/vllm/pull/56555) [XPU][CI] Skip ROCm test on non-ROCm platforms
- [#56401](https://github.com/vllm-project/vllm/pull/56401) [Bugfix] Initialize data parser in Nano-Nemotron audio test
- [#56398](https://github.com/vllm-project/vllm/pull/56398) [Nano-Nemotron] Fix Nano-Nemotron precomputed multimodal embeddings
- [#55171](https://github.com/vllm-project/vllm/pull/55171) [XPU][CI] Remove pip install dependency in test yaml files
- [#54007](https://github.com/vllm-project/vllm/pull/54007) [Build] Define _USE_MATH_DEFINES for FlashMLA targets
- [#56596](https://github.com/vllm-project/vllm/pull/56596) [CI/Build] Give the Torch ABI audit time to start
- [#56541](https://github.com/vllm-project/vllm/pull/56541) [CI] Sample GPU utilization and memory alongside test timelines
- [#56554](https://github.com/vllm-project/vllm/pull/56554) [DSV4.1] Remove compressor-aware image sentinel token padding
- [#56392](https://github.com/vllm-project/vllm/pull/56392) [Frontend] create unified Cohere parser
- [#54927](https://github.com/vllm-project/vllm/pull/54927) [CI] Bump CUTLASS DSL to 4.7
- [#55252](https://github.com/vllm-project/vllm/pull/55252) [ROCm][CI] Stage F gating
- [#55088](https://github.com/vllm-project/vllm/pull/55088) [Bugfix][Examples] Launch prefill and decode concurrently in NixlPushConnector demo
- [#54416](https://github.com/vllm-project/vllm/pull/54416) [Bugfix][Spec Decode] Avoid fastsafetensors deadlock for PP draft models
- [#56378](https://github.com/vllm-project/vllm/pull/56378) [Rust Frontend] Support `generation` blocks in HF chat template
- [#53781](https://github.com/vllm-project/vllm/pull/53781) [3/N] HiSparse: host-resident sparse-MLA decode hot-buffering
- [#53566](https://github.com/vllm-project/vllm/pull/53566) [5/N][warmup][DSv4] Migrate NVIDIA CuTeDSL attention kernels
- [#56386](https://github.com/vllm-project/vllm/pull/56386) [Rust Frontend] Honor HF revisions, offline mode, and cache directory
- [#56546](https://github.com/vllm-project/vllm/pull/56546) Revert "[Agents] Link Triton skill to JIT kernel warmup guide"
- [#55047](https://github.com/vllm-project/vllm/pull/55047) [Rust Frontend][Multimodal] Accept preprocessed multimodal gRPC features
- [#56463](https://github.com/vllm-project/vllm/pull/56463) [XPU][CI] skip DeepSeek-V4.1-Flash in `test_tensor_schema.py`
- [#56526](https://github.com/vllm-project/vllm/pull/56526) [ROCm][Kimi-K3] Fix non-contiguous state_indices crash and GPU-sync assert in fused KDA/MLA prefill
- [#56329](https://github.com/vllm-project/vllm/pull/56329) [CI] Give every Buildkite step an explicit key, and a hook to enforce it
- [#54689](https://github.com/vllm-project/vllm/pull/54689) [Bugfix][NIXL] Don't evict a remote engine a transfer is still reading from

#### 🐛 New Issues
- [#56605](https://github.com/vllm-project/vllm/issues/56605) [Bug]: GLM-5.3-Flash degenerates into repeated-token "word salad" in multi-turn agentic use `bug` `glm` 💬5
- [#56583](https://github.com/vllm-project/vllm/issues/56583) [Bug]: Garbled output for GLM 5.3 Flash when weights loaded with run:ai distributed streamer `bug` `glm` 💬1
- [#56626](https://github.com/vllm-project/vllm/issues/56626) [Bug]: enable_adaptive_verification silently overrides cudagraph_mode to FULL_AND_PIECEWISE; ~7 GiB capture makes it a net loss on offload lanes 💬2
- [#56556](https://github.com/vllm-project/vllm/issues/56556) [Bug]: JSON schema with multiple allOf branches is silently ignored by the xgrammar structured-output backend `bug` `structured-output` 💬2
- [#56563](https://github.com/vllm-project/vllm/issues/56563) [Bug]: FLASH_ATTN_MLA_SPARSE emits 'Failed to initialize the TMA descriptor 1' every step for GLM-5.3-Flash (zero-extent descriptors; output correct) `glm` 💬1
- [#56548](https://github.com/vllm-project/vllm/issues/56548) [Bug]: cuda_archs_loose_intersection drops plain "10.0" when TORCH_CUDA_ARCH_LIST also has "10.0a", producing sm_100a-only kernels that fail on B300 (CC 10.3) 💬1
- [#56569](https://github.com/vllm-project/vllm/issues/56569) [Bug]: API server closes connection with zero response (no HTTP status) when the prompt contains `and <number>/` — reproducible on /tokenize with GLM-5.3-Flash `bug` `glm` 💬1
- [#56574](https://github.com/vllm-project/vllm/issues/56574) [Bug][ROCm]: DeepSeek-V4.1 dropped four pieces of ROCm wiring that DeepSeek-V4 still has `rocm` `deepseek` `quantization` `DSv4` 💬1
- [#56559](https://github.com/vllm-project/vllm/issues/56559) [Bug]: Unconditional xgrammar import in backend_xgrammar.py crashes vLLM startup on s390x `bug` `structured-output` 💬1
- [#56646](https://github.com/vllm-project/vllm/issues/56646) 2-node TP: MambaModelConfig's derived mamba_cache_mode never reaches the remote rank — cross-worker KV-spec assert with --enable-prefix-caching on hybrid GDN/mamba models
- [#56581](https://github.com/vllm-project/vllm/issues/56581) [RFC]: Streaming prompt prefill for overlapping upstream generation and downstream prefill
- [#56578](https://github.com/vllm-project/vllm/issues/56578) [Bug]: Triton attention softcap returns NaN for large attention logits `bug`
- [#56564](https://github.com/vllm-project/vllm/issues/56564) [Performance]: GLM-5.3-Flash on H100: auto-selected FLASHINFER_MLA_SPARSE_SM90 is 36-70% slower than FLASH_ATTN_MLA_SPARSE `glm`

#### 🔒 Closed Issues
- [#42024](https://github.com/vllm-project/vllm/issues/42024) [Bug]: NIXL connector silently disables HMA, halving KV cache capacity — flip default to HMA=on even with connectors
- [#42525](https://github.com/vllm-project/vllm/issues/42525) [Bug]: Regression: vllm/vllm-openai:nightly fails to import nixl_ep due to missing libcudart.so.12
- [#52644](https://github.com/vllm-project/vllm/issues/52644) [Bug][ROCm]: DeepSeek V4 accuracy drops with MRV2 on MI350/MI355 when FULL_DECODE_ONLY graph
- [#44460](https://github.com/vllm-project/vllm/issues/44460) [Refactor] RDNA3 W4A16 MoE dispatch to oracle/expert class pattern
- [#42381](https://github.com/vllm-project/vllm/issues/42381) [Bug]: Scheduler deadlocks after VLLMValidationError when prompt exceeds max_model_len by 1 token
- [#42385](https://github.com/vllm-project/vllm/issues/42385) [Bug]: MooncakeConnector startup failure triggers secondary `AttributeError` during cleanup (`async_zmq_ctx`)
- [#42088](https://github.com/vllm-project/vllm/issues/42088) [aiter] Qwen3Next shared expert fusion improvements
- [#42125](https://github.com/vllm-project/vllm/issues/42125) [Bug]: Runtime LoRA same-name reload can reuse stale prefix-cache blocks from previous adapter version
- [#42489](https://github.com/vllm-project/vllm/issues/42489) [Bug]: Same-request resumable streaming_update can overflow prompt width in gpu_input_batch.add_request
- [#42389](https://github.com/vllm-project/vllm/issues/42389) [Bug]: vLLM serve with tensor-parallel-size=8 on Kubernetes + vGPU fails: NCCL TCPStore broken pipe, EngineCore initialization failed
- [#42419](https://github.com/vllm-project/vllm/issues/42419) [RFC]: [V1][Attention] Add an experimental training-free sparse prefill attention backend for long-context workloads (vLLM 0.19.1)
- [#42544](https://github.com/vllm-project/vllm/issues/42544) [Bug]: TurboQuant decode attention: workspace allocation not sized during warmup → AssertionError on first decode after lock_workspace()
- [#42548](https://github.com/vllm-project/vllm/issues/42548) [Bug]: benchmark_serving_multi_turn.py produces 0 final-content tokens on reasoning models because thinking budget consumes max_tokens
- [#56626](https://github.com/vllm-project/vllm/issues/56626) [Bug]: enable_adaptive_verification silently overrides cudagraph_mode to FULL_AND_PIECEWISE; ~7 GiB capture makes it a net loss on offload lanes
- [#56347](https://github.com/vllm-project/vllm/issues/56347) [Bug][ROCm]: DeepSeek-V4.1 segfaults on the 3rd decode token with FULL_DECODE_ONLY graphs unless --no-async-scheduling is set
- [#50959](https://github.com/vllm-project/vllm/issues/50959) [Bug] fastsafetensors ParallelLoader broadcasts on group.WORLD; PP-scoped draft loads deadlock
- [#42049](https://github.com/vllm-project/vllm/issues/42049) vLLM 0.20.1 hard-pins torch 2.11.0, which OOMs during CUDA initialization on RTX 4090 / cu130
- [#42051](https://github.com/vllm-project/vllm/issues/42051) [Feature]: Output prompt text when enable `--enable-log-requests`
- [#42085](https://github.com/vllm-project/vllm/issues/42085) [Bug]: SimpleCPUOffloadConnector + Hybrid KV Cache Manager: GPU block pool exhaustion (popleft_n assert) on second long-context request
- [#42149](https://github.com/vllm-project/vllm/issues/42149) [Bug]: vllm 0.11.2 the p2p_nccl_engine not support ipv6? which version is ok
- [#42404](https://github.com/vllm-project/vllm/issues/42404) [Bug]: expandable_segments:True rejected with SimpleCPUOffloadConnector — no opt-in mechanism for DMA-only connectors
- [#42432](https://github.com/vllm-project/vllm/issues/42432) [Bug]: deepseek v4 failed to work on R6000 GPU
- [#42494](https://github.com/vllm-project/vllm/issues/42494) [Bug]: FA2 paged-KV may read stale block-table tail entries
- [#42496](https://github.com/vllm-project/vllm/issues/42496) [Bug]: FA2 partial-block clamp can load unwritten padded KV slots
- [#42510](https://github.com/vllm-project/vllm/issues/42510) [Bug]: vllm serve crashes at KV cache initialization when using --block-size 1 or 8 despite being listed as valid choices
- [#42511](https://github.com/vllm-project/vllm/issues/42511) [Bug]: mooncake-transfer-engine fails to import in CUDA 13 images: libcudart.so.12 missing
- [#42571](https://github.com/vllm-project/vllm/issues/42571) [Bug]: KV Block double free when using eager SimpleCPUOffloading + Sliding window attention
- [#53573](https://github.com/vllm-project/vllm/issues/53573) [Bug]: [PCP+DCP][MLA] Rank-local PCP context metadata causes divergent DCP KV-gather collectives
- [#53935](https://github.com/vllm-project/vllm/issues/53935) [Bug]: M_LOG2E availability depends on build configuration in the FlashMLA extension
- [#56569](https://github.com/vllm-project/vllm/issues/56569) [Bug]: API server closes connection with zero response (no HTTP status) when the prompt contains `and <number>/` — reproducible on /tokenize with GLM-5.3-Flash
- [#56574](https://github.com/vllm-project/vllm/issues/56574) [Bug][ROCm]: DeepSeek-V4.1 dropped four pieces of ROCm wiring that DeepSeek-V4 still has

### SGLang (`sgl-project/sglang`)

**Stars:** 35,862 · **Open issues:** 5,296 · **Last push:** <1h ago

On September 13, 2026, there were no new releases for SGLang, but multiple significant changes were merged, enhancing functionality and stability. Notably, PR #39241 fixed DeepGEMM release dependencies, while PR #39213 updated the GLM-5.3-Flash cookbook to improve compatibility on Blackwell systems. Additional work included optimizations for unique-image serving on H100 in PR #36411 and scope reduction for graph-pool borrowing, aimed at minimizing fragmentation (PR #39177). However, several new issues emerged, including #39216, which highlights a critical bug where client disconnections cause crashes in the engine due to unhandled exceptions during active requests.

#### ✅ Merged PRs
- [#39202](https://github.com/sgl-project/sglang/pull/39202) config: delete the redundant full stamp in initialize_model_parallel
- [#39137](https://github.com/sgl-project/sglang/pull/39137) config: delete dead ensure_model_parallel_initialized
- [#39134](https://github.com/sgl-project/sglang/pull/39134) config: an out-of-tree replacement point for every resolution-pipeline step
- [#39241](https://github.com/sgl-project/sglang/pull/39241) Fix DeepGEMM release dependencies and bound GPU validation
- [#38328](https://github.com/sgl-project/sglang/pull/38328) [MoE][ROCm] Admit the unified Triton router on ROCm, including single-group routing
- [#38845](https://github.com/sgl-project/sglang/pull/38845) [GLM-5.3 Flash] Restore and enable KPool metadata fusion
- [#39230](https://github.com/sgl-project/sglang/pull/39230) [AMD] Document GLM-5.2 MXFP4 recipe update on MI355X
- [#39116](https://github.com/sgl-project/sglang/pull/39116) [AMD] Fix Dspark accept length and reduce host bubble on DSV4
- [#39213](https://github.com/sgl-project/sglang/pull/39213) [Docs] GLM-5.3-Flash cookbook: fixed MTP 5/1/6, EP1 + flashinfer_trtllm on Blackwell
- [#39177](https://github.com/sgl-project/sglang/pull/39177) Scope graph-pool borrowing to the runtime and reduce fragmentation
- [#36411](https://github.com/sgl-project/sglang/pull/36411) [Perf] Optimize Qwen3-VL unique-image serving on H100
- [#39176](https://github.com/sgl-project/sglang/pull/39176) Reuse live CUDA graph executables during dedup registration
- [#39144](https://github.com/sgl-project/sglang/pull/39144) [Session + MM] Fix text positions in session continuations
- [#37679](https://github.com/sgl-project/sglang/pull/37679) [GraniteMoE] Load split per-expert quantized MoE weights
- [#37584](https://github.com/sgl-project/sglang/pull/37584) [Unified Tree] Port SWA Branching-Point Caching to the Rust TreeCore
- [#38482](https://github.com/sgl-project/sglang/pull/38482) [Unified Tree] Preserve aux LRU recency when splitting nodes
- [#38689](https://github.com/sgl-project/sglang/pull/38689) [Diffusion] Pick the attention backend by measuring it
- [#39097](https://github.com/sgl-project/sglang/pull/39097) [diffusion] Remove MOVA Ulysses two-GPU CI case
- [#38690](https://github.com/sgl-project/sglang/pull/38690) [Feat][Responses API] Support custom tools, encrypted reasoning replay, developer tier and model validation
- [#34556](https://github.com/sgl-project/sglang/pull/34556) Inference Support Mamba 2 and 1
- [#38908](https://github.com/sgl-project/sglang/pull/38908) Fix gpt-oss RunAI streamer weight ownership
- [#38577](https://github.com/sgl-project/sglang/pull/38577) [HiCache][LoRA] Isolate storage pages by extra key
- [#38960](https://github.com/sgl-project/sglang/pull/38960) [Qwen 3.8 Next] Remove unused tokenwise QSA implementation and tests
- [#39104](https://github.com/sgl-project/sglang/pull/39104) [AMD] Update MI355X MXFP4 HiCache defaults and quick-reduce quantization for Qwen3.5 cookbook
- [#37254](https://github.com/sgl-project/sglang/pull/37254) [AMD] Fix Quark load of MiniMax-M3 MXFP4 index_qkv_proj
- [#39022](https://github.com/sgl-project/sglang/pull/39022) [Diffusion] Read mapped layers directly when the host cannot cache them
- [#39165](https://github.com/sgl-project/sglang/pull/39165) [DCP] Resolve --dcp-comm-backend to fi_a2a/a2a by default for every model
- [#39105](https://github.com/sgl-project/sglang/pull/39105) [Fix] Seed raw tokenizer_path for smg-grpc-servicer in gRPC mode
- [#39195](https://github.com/sgl-project/sglang/pull/39195) [CI] Fix base-a wait for skipped CPU matrix
- [#39194](https://github.com/sgl-project/sglang/pull/39194) [CI] Extend DeepGEMM SM90 test timeout to four hours
- [#38346](https://github.com/sgl-project/sglang/pull/38346) fix(qsa): clamp the compress gather to the rows this forward has
- [#39190](https://github.com/sgl-project/sglang/pull/39190) [Cookbook] Kimi-K3: keep DCP under HiCache L1+L2 with DSPARK
- [#36651](https://github.com/sgl-project/sglang/pull/36651) [Qwen3.8-Next] Add PD state transfer for Flash Next
- [#39141](https://github.com/sgl-project/sglang/pull/39141) Keep NVFP4 blockscale swizzle padding on the input device
- [#38988](https://github.com/sgl-project/sglang/pull/38988) Fix RunAI object-storage checkpoint index filtering
- [#37565](https://github.com/sgl-project/sglang/pull/37565) [NPU] Support DFlash speculative decoding for MiMo-V2.5-Pro (mxfp4)
- [#39163](https://github.com/sgl-project/sglang/pull/39163) [CI] Fix DeepGEMM sanitizer setup and Blackwell test timeouts
- [#37903](https://github.com/sgl-project/sglang/pull/37903) [diffusion] model: support VDN-H3 (hybrid window softmax + Video Delta linear attention MiniMax-H3, 8-NFE distill) with a hybrid_window_attn_h3 backend
- [#37069](https://github.com/sgl-project/sglang/pull/37069) feat: support TP>1 Domino rollout for DFlash V2
- [#38758](https://github.com/sgl-project/sglang/pull/38758) [AMD] Allow aiter attention backend for Gemma-4
- [#38757](https://github.com/sgl-project/sglang/pull/38757) [AMD] aiter: route head_dim>256 prefill through Triton unified_attention
- [#37818](https://github.com/sgl-project/sglang/pull/37818) [Bugfix] Track DFlash Mamba state at checkpoint boundaries

#### 🐛 New Issues
- [#39192](https://github.com/sgl-project/sglang/issues/39192) [RFC] Contention-aware batching for dynamic EPLB expert migration
- [#39235](https://github.com/sgl-project/sglang/issues/39235) [Bug] DeepSeek-V4 SM120 decode pads q to 64 heads for an SM90 constraint; removing the pad changes greedy output despite the kernel being bit-identical
- [#39226](https://github.com/sgl-project/sglang/issues/39226) [Bug] --moe-runner-backend deep_gemm accepted for DSV4.1 MXFP4 experts, then fails in CUDA graph capture (layout.hpp:108, sm_121)
- [#39216](https://github.com/sgl-project/sglang/issues/39216) [Bug] Client disconnect during active request crashes entire engine (uncaught asyncio.CancelledError bypasses except Exception)
- [#39193](https://github.com/sgl-project/sglang/issues/39193) [Bug] DeepSeek-V4.1 fp8 wo_a absorb GEMM is silently ~25% wrong when DEEPGEMM_SCALE_UE8M0 is false (SM121)
- [#39173](https://github.com/sgl-project/sglang/issues/39173) [Bug] DeepSeek-V4.1-Flash + Engram: profiled SPS table (compact ragged verify) dies in CUDA-graph capture with "engram target-verify expects one equal block per request"

#### 🔒 Closed Issues
- [#31120](https://github.com/sgl-project/sglang/issues/31120) [Bug] Significant Performance Degradation of Qwen3.5-4B on RTX 5090
- [#24921](https://github.com/sgl-project/sglang/issues/24921) [Roadmap] Intel CPU Roadmap (2026Q2)
- [#26399](https://github.com/sgl-project/sglang/issues/26399) [Bug] GLM-5.1 TP8 EAGLE verify hangs when KV pool is near-full, watchdog kills process
- [#30609](https://github.com/sgl-project/sglang/issues/30609) [Bug] KVTransferError when deploying the GLM-5.2 model using SGLang's PD disaggregation with the sglang:nightly-dev-20260706-8673e85e image.
- [#36131](https://github.com/sgl-project/sglang/issues/36131) [Performance] Unified-cache default flip regresses long-prefix decode throughput on Spark and Thor
- [#29599](https://github.com/sgl-project/sglang/issues/29599) [npu] Does Latest SGLang Support DeepSeek V4 on Ascend NPU now?
- [#31093](https://github.com/sgl-project/sglang/issues/31093) [Bug] GLM-5.2 NVFP4 + EAGLE: CUDA illegal memory access during decode CUDA-graph capture on v0.5.15 and main (works on 2026-07-03 dev-glm52-nvfp4)
- [#30985](https://github.com/sgl-project/sglang/issues/30985) Unable to reproduce the throughput of hisparse blog
- [#31000](https://github.com/sgl-project/sglang/issues/31000) [Bug] LongCat-2.0 second attention RoPE crash under EP MoE backend (hidden stays scattered while positions is full)
- [#29359](https://github.com/sgl-project/sglang/issues/29359) [Bug] GLM-Image deployed on NPU yields poorer generation quality than official outputs.
- [#31117](https://github.com/sgl-project/sglang/issues/31117) [Bug] custom all-reduce (V2 one-shot push) deadlocks when one communicator is issued concurrently from two CUDA streams
- [#31235](https://github.com/sgl-project/sglang/issues/31235) [Feature] Support serialized static-FP8 MXFP4 MoE on the resident FlashInfer backend (SM120/SM121)
- [#31207](https://github.com/sgl-project/sglang/issues/31207) [Feature] DeepSeek-V4 hybrid KV pool: host/storage integrations assume k/v two-buffer pools (LMCache connector, decode KV offload)
- [#31205](https://github.com/sgl-project/sglang/issues/31205) [Bug] PD prefill silently starves forever when a request's SWA budget exceeds the SWA pool (DeepSeek-V4 hybrid pool)
- [#31200](https://github.com/sgl-project/sglang/issues/31200) [Bug] Qwen3-VL video frames double-sampled when --mm-process-config sets fps (visual tokens halved since v0.5.11)
- [#31178](https://github.com/sgl-project/sglang/issues/31178) [Bug] D node deployed with sglang glm 5.2 pd is throwing an error when using speculative decoding.
- [#31175](https://github.com/sgl-project/sglang/issues/31175) Add native OLMo3 (Olmo3ForCausalLM) support by reusing the Olmo2 implementation
- [#31133](https://github.com/sgl-project/sglang/issues/31133) [Bug] MiniMax sparse prefill: OOB GPU write when max_seqlen_k < seq_lens.max() (silent topk corruption / Xid 31 / NCCL watchdog kills)
- [#31116](https://github.com/sgl-project/sglang/issues/31116) DP attention + prefill CUDA graph + return_routed_experts (gated path): two fixes ready — is enabling it wanted?
- [#38815](https://github.com/sgl-project/sglang/issues/38815) [Bug] SWA branching attaches a later Mamba checkpoint to an earlier prefix
- [#37817](https://github.com/sgl-project/sglang/issues/37817) [Bug] DFlash misses Mamba checkpoints when accepted tokens cross a tracking boundary

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 128,012 · **Open issues:** 2,473 · **Last push:** <1h ago

Today, llama.cpp released several new versions, with the most notable being b10934, which implemented a common_schema internal representation for JSON schemas and various related optimizations and refactors. Additionally, b10933 added support for dot property integer literals in Jinja, while b10932 addressed build issues related to precompiled headers in Clang. Among the merged pull requests, the improvement of complex type parsing in the chat system and the addition of a cache in the UI stand out. However, a significant concern has emerged with issue #28813, which reports consistent out-of-memory crashes when using specific configurations, highlighting ongoing stability challenges.

#### 🚀 New Releases
- [b10934](https://github.com/ggml-org/llama.cpp/releases/tag/b10934) b10934
- [b10933](https://github.com/ggml-org/llama.cpp/releases/tag/b10933) b10933
- [b10932](https://github.com/ggml-org/llama.cpp/releases/tag/b10932) b10932
- [b10931](https://github.com/ggml-org/llama.cpp/releases/tag/b10931) b10931
- [b10930](https://github.com/ggml-org/llama.cpp/releases/tag/b10930) b10930
- [b10929](https://github.com/ggml-org/llama.cpp/releases/tag/b10929) b10929
- [b10927](https://github.com/ggml-org/llama.cpp/releases/tag/b10927) b10927
- [b10926](https://github.com/ggml-org/llama.cpp/releases/tag/b10926) b10926
- [b10924](https://github.com/ggml-org/llama.cpp/releases/tag/b10924) b10924
- [b10923](https://github.com/ggml-org/llama.cpp/releases/tag/b10923) b10923

#### ✅ Merged PRs
- [#28742](https://github.com/ggml-org/llama.cpp/pull/28742) chat : improve parsing of complex types in qwen3-coder
- [#28586](https://github.com/ggml-org/llama.cpp/pull/28586) common: add LOG_JSON macro to log structured data
- [#28736](https://github.com/ggml-org/llama.cpp/pull/28736) common : implement common_schema internal representation for JSON schemas
- [#28817](https://github.com/ggml-org/llama.cpp/pull/28817) jinja : support dot property integer literals
- [#28816](https://github.com/ggml-org/llama.cpp/pull/28816) cmake: leave the timestamp out of precompiled headers on clang
- [#28802](https://github.com/ggml-org/llama.cpp/pull/28802) ui : add cache
- [#28530](https://github.com/ggml-org/llama.cpp/pull/28530) server : allow model downloads at model limit fix issue #26809
- [#27841](https://github.com/ggml-org/llama.cpp/pull/27841) ggml-cuda: hip: add missing AMD GCN MMQ config
- [#28795](https://github.com/ggml-org/llama.cpp/pull/28795) server : add missing headers
- [#28681](https://github.com/ggml-org/llama.cpp/pull/28681) syscl : Handle (fail gracefully) unsupported tq1_0 quants
- [#28787](https://github.com/ggml-org/llama.cpp/pull/28787) vendor : update cpp-httplib to 0.56.0
- [#28492](https://github.com/ggml-org/llama.cpp/pull/28492) Fix #28491 linking bug when compiling with BUILD_SHARED_LIBS=OFF
- [#28747](https://github.com/ggml-org/llama.cpp/pull/28747) server: fix Windows CI flake from the log color reset
- [#27630](https://github.com/ggml-org/llama.cpp/pull/27630) opencl: fix several bugs where the backend aborts
- [#28677](https://github.com/ggml-org/llama.cpp/pull/28677) opencl: add bin kernel `kernel_gemm_noshuffle_q4_k_f32_32b_trans_ila_a8_bin`
- [#28382](https://github.com/ggml-org/llama.cpp/pull/28382) webgpu: align tensor bindings to the type block size
- [#28589](https://github.com/ggml-org/llama.cpp/pull/28589) hexagon: support for multi-device model split (aka row-split)
- [#28683](https://github.com/ggml-org/llama.cpp/pull/28683) ggml-webgpu: Update to a recent version of Dawn

#### 🐛 New Issues
- [#28813](https://github.com/ggml-org/llama.cpp/issues/28813) Misc. bug: Consistent OOM crashes when using -np 3 `bug-unconfirmed` 💬3
- [#28805](https://github.com/ggml-org/llama.cpp/issues/28805) Eval bug: qwen4exp (Qwen3.8-Flash-Next) on Metal: decode emits 1 token then EOS at long context — silent empty output, stochastic at threshold, threshold moves with model quant / KV quant / n_ctx 💬2
- [#28820](https://github.com/ggml-org/llama.cpp/issues/28820) Misc. bug: server: (router) --api-key is not forwarded to child instances while --api-key-file is `bug-unconfirmed` 💬1
- [#28808](https://github.com/ggml-org/llama.cpp/issues/28808) Eval bug: Vulkan n_ubatch 512 hangs the GPU ring on gfx1010 / Navi 10 (384 is fine) 💬1
- [#28807](https://github.com/ggml-org/llama.cpp/issues/28807) Eval bug: Vulkan CONCAT (SSM conv input) hangs the GPU ring on gfx1010 / Navi 10 💬1
- [#28804](https://github.com/ggml-org/llama.cpp/issues/28804) Feature Request: Support for fraunhofer-iis/elmod-2.7b-it `enhancement`
- [#28827](https://github.com/ggml-org/llama.cpp/issues/28827) Eval bug: gemma4 thinking starts to emit progressivly long trailing garbage `bug-unconfirmed`
- [#28826](https://github.com/ggml-org/llama.cpp/issues/28826) Eval bug: segmentation fault with -sm tensor and DeepSeek V4 Flash `bug-unconfirmed`
- [#28814](https://github.com/ggml-org/llama.cpp/issues/28814) Compile bug: Linker error for bin/ggml-rpc-server, LLVM 23 and HIP `bug-unconfirmed`
- [#28812](https://github.com/ggml-org/llama.cpp/issues/28812) Vulkan: enabling all supported device features (incl. protectedMemory) kills the process on Huawei Maleoon GPU `bug-unconfirmed`
- [#28801](https://github.com/ggml-org/llama.cpp/issues/28801) Unexpected Subjectivity Emergence in Low-Precision Quantization `bug-unconfirmed`
- [#28798](https://github.com/ggml-org/llama.cpp/issues/28798) Eval bug: SIGSEGV in `ggml_compute_forward_flash_attn_ext_tiled` (CPU) on long prompts — reproduces across multiple models/commits, workaround is `--flash-attn off`
- [#28794](https://github.com/ggml-org/llama.cpp/issues/28794) Misc. bug: Web UI MCP Servers `bug-unconfirmed`

#### 🔒 Closed Issues
- [#20260](https://github.com/ggml-org/llama.cpp/issues/20260) Eval bug: unsloth/Qwen3.5-35B-A3B-GGUF `peg-native` chat format parser fails when model outputs text before `<tool_call>` (thinking model + tool calling)
- [#22477](https://github.com/ggml-org/llama.cpp/issues/22477) Model Request Hy3
- [#24177](https://github.com/ggml-org/llama.cpp/issues/24177) Eval bug: Using RPC: top_k backend sampling crashes with GGML_ASSERT(shared_mem <= smpb) in argsort.cu (affects all AMD GPUs)
- [#25887](https://github.com/ggml-org/llama.cpp/issues/25887) Qwen 3.6 27B GHCP VS Code agent interruptions
- [#25067](https://github.com/ggml-org/llama.cpp/issues/25067) Eval bug: Premature "reasoning-budget: deactivated (natural end)", even BEFORE prompt processing
- [#28491](https://github.com/ggml-org/llama.cpp/issues/28491) Compile bug: Mac linking bug when compiling with BUILD_SHARED_LIBS=OFF
- [#23460](https://github.com/ggml-org/llama.cpp/issues/23460) Misc. bug: Unable to pass samplers to models-preset in server router mode
- [#28813](https://github.com/ggml-org/llama.cpp/issues/28813) Misc. bug: Consistent OOM crashes when using -np 3
- [#26115](https://github.com/ggml-org/llama.cpp/issues/26115) Feature Request: support Upstage's Solar-Open2
- [#26125](https://github.com/ggml-org/llama.cpp/issues/26125) Feature Request: Support Motif-3-Beta
- [#26249](https://github.com/ggml-org/llama.cpp/issues/26249) Feature Request: Huggingface remove old models on model updates
- [#25809](https://github.com/ggml-org/llama.cpp/issues/25809) Misc. bug: OpenVINO NPU: first model load fails with RoPE shape mismatch, second attempt succeeds
- [#26073](https://github.com/ggml-org/llama.cpp/issues/26073) Eval bug: Bonsai 27B ternary (Q2) not running on Metal
- [#28786](https://github.com/ggml-org/llama.cpp/issues/28786) Eval bug: minja does not support numeric dotted attribute access (x.0), making jinja caps return all-false
- [#26236](https://github.com/ggml-org/llama.cpp/issues/26236) Feature Request: llama-bench should move to next combination on error
- [#26246](https://github.com/ggml-org/llama.cpp/issues/26246) Eval bug: Ollama experiencing CUDA crash during a Gemma4b12 load
- [#26266](https://github.com/ggml-org/llama.cpp/issues/26266) Eval bug: Thinking process triggered resulting in doubled generation time
- [#26268](https://github.com/ggml-org/llama.cpp/issues/26268) Misc. bug: llama_params_fit aborts instead of reporting FAILURE for a large context
- [#26273](https://github.com/ggml-org/llama.cpp/issues/26273) Feature Request: Add a CLI flag to escape special tokens in user input and tool responses
- [#28680](https://github.com/ggml-org/llama.cpp/issues/28680) Misc. bug: CI syscl : tq1_0 is not handled by sycl backend
- [#28794](https://github.com/ggml-org/llama.cpp/issues/28794) Misc. bug: Web UI MCP Servers

### Ollama (`ollama/ollama`)

**Stars:** 180,761 · **Open issues:** 3,980 · **Last push:** 1d ago

On September 13, 2026, Ollama had a quiet day with no new releases or merged pull requests. However, several notable issues were raised, highlighting some user concerns. Issue #18412 reports a crash in llama-server on Linux with hybrid graphics setups, specifically involving the Intel Raptor Lake-S iGPU and NVIDIA RTX 4080. Additionally, issue #18416 addresses a potential oversight where the command `ollama create --quantize` from safetensors leaves an unreferenced F16 blob in the `blobs/` directory. Other new issues include UI glitches on Windows 10 with version 0.34.0 and documentation gaps regarding model version requirements.

#### 🐛 New Issues
- [#18412](https://github.com/ollama/ollama/issues/18412) Linux hybrid graphics (Intel Raptor Lake-S iGPU + NVIDIA RTX 4080): llama-server crashes with SIGABRT during backend/device loading 💬1
- [#18416](https://github.com/ollama/ollama/issues/18416) `ollama create --quantize` from safetensors leaves the unquantized F16 blob in `blobs/` (unreferenced, never removed)
- [#18415](https://github.com/ollama/ollama/issues/18415) Windows 10: brief visible PowerShell window when opening Ollama desktop 0.34.0
- [#18414](https://github.com/ollama/ollama/issues/18414) Some models have undocumented version requirements `bug`
- [#18411](https://github.com/ollama/ollama/issues/18411) Responses: web_search path emits function_call before reasoning completion, breaking Codex tool replay

#### 🔒 Closed Issues
- [#18287](https://github.com/ollama/ollama/issues/18287) Hy4 Model

### LiteLLM (`BerriAI/litellm`)

**Stars:** 58,592 · **Open issues:** 5,040 · **Last push:** <1h ago

There were no new releases for LiteLLM on September 13, 2026. However, several important merged PRs included enhancements such as the addition of OpenAI reasoning-family fallback generalization in PR #40902 and new functionality for serving registered skills as an Agent Skills index in PR #40770. Additionally, various fixes aimed at improving system performance and correctness were implemented, such as resolving Redis chaos issues in PR #40886 and ensuring proper logging configurations in PR #40772. Notably, a new bug was reported regarding responses-to-Chat streaming losing reasoning progress, tracked under issue #40887, which may impact user experience significantly.

#### ✅ Merged PRs
- [#40907](https://github.com/BerriAI/litellm/pull/40907) fix(proxy): allow key_alias substring matching on /key/list for non-admins
- [#40902](https://github.com/BerriAI/litellm/pull/40902) feat(registry): add openai reasoning-family fallback generalization
- [#40824](https://github.com/BerriAI/litellm/pull/40824) fix(proxy): attribute gate-rejected requests to their endpoint in cache analytics
- [#39395](https://github.com/BerriAI/litellm/pull/39395) feat(realtime): add Meta Muse Voice transcription
- [#40767](https://github.com/BerriAI/litellm/pull/40767) fix(cost): honour deployment custom pricing for OCR calls
- [#36609](https://github.com/BerriAI/litellm/pull/36609) fix(cost): honour deployment custom pricing for OCR calls
- [#40764](https://github.com/BerriAI/litellm/pull/40764) fix(redis): count pool wait timeouts as breaker timeouts
- [#40771](https://github.com/BerriAI/litellm/pull/40771) test: tighten regression tests added in #37974
- [#40855](https://github.com/BerriAI/litellm/pull/40855) fix(registry): sync Azure/Together deprecation dates, fix computer-use-preview and OpenRouter metadata
- [#40772](https://github.com/BerriAI/litellm/pull/40772) fix(proxy): resolve config include directives for bucket-hosted configs
- [#40766](https://github.com/BerriAI/litellm/pull/40766) fix(anthropic): price recovered tokens when a /v1/messages client disconnects mid-stream
- [#39895](https://github.com/BerriAI/litellm/pull/39895) test: deflake redis semantic cache sys.modules leak, LangSmith init loop patch, wall-clock stagger assertion, and zombie grandchild check in the fake prisma cli
- [#40770](https://github.com/BerriAI/litellm/pull/40770) feat(proxy): serve registered skills as an Agent Skills well-known index
- [#40768](https://github.com/BerriAI/litellm/pull/40768) fix(proxy): run migrations through python -m prisma when the prisma console script is not on PATH
- [#40652](https://github.com/BerriAI/litellm/pull/40652) feat(ui): search Key Activity by key alias, key hash, user id, or email
- [#40901](https://github.com/BerriAI/litellm/pull/40901) test(fireworks): stop pinning prices in the cost-map tests
- [#40905](https://github.com/BerriAI/litellm/pull/40905) chore: bump litellm-enterprise 0.1.66 -> 0.1.67, litellm-proxy-extras 0.4.96 -> 0.4.97
- [#40656](https://github.com/BerriAI/litellm/pull/40656) fix(ui): show loading state instead of stale rows while a table search is pending
- [#40882](https://github.com/BerriAI/litellm/pull/40882) fix(guardrails): log mask when a guardrail adds request keys
- [#40883](https://github.com/BerriAI/litellm/pull/40883) perf(policy_engine): dedup attachments in one pass after sorting
- [#40895](https://github.com/BerriAI/litellm/pull/40895) fix(ui): persist cleared budgets and reset intervals
- [#40869](https://github.com/BerriAI/litellm/pull/40869) fix(proxy): accept both deferred stream logging arg shapes on native routes
- [#40886](https://github.com/BerriAI/litellm/pull/40886) fix(redis): backport Redis chaos fixes and load gate to rc/1.101.0
- [#40880](https://github.com/BerriAI/litellm/pull/40880) fix(key): recover from a cascade-deleted key instead of failing the apply
- [#40774](https://github.com/BerriAI/litellm/pull/40774) test(e2e): verify cached answers and upstream request count
- [#40697](https://github.com/BerriAI/litellm/pull/40697) fix(ui): clarify blank TPM/RPM hint on budget modals
- [#40734](https://github.com/BerriAI/litellm/pull/40734) refactor(ocr): complete native lifecycle and preserve Azure auth
- [#40826](https://github.com/BerriAI/litellm/pull/40826) fix(ui): preserve clear and default semantics in local forms
- [#40781](https://github.com/BerriAI/litellm/pull/40781) fix(ui): restore MCP catalog provider logos
- [#40865](https://github.com/BerriAI/litellm/pull/40865) fix(mcp): enforce end user mcp_tool_permissions on tools/list and tools/call
- [#40785](https://github.com/BerriAI/litellm/pull/40785) feat(guardrails): add Conduct Guard integration with validated hooks and forwarded params
- [#40836](https://github.com/BerriAI/litellm/pull/40836) fix(keys): support explicit project detachment
- [#40839](https://github.com/BerriAI/litellm/pull/40839) fix(router): restore compression inheritance when clearing overrides
- [#40829](https://github.com/BerriAI/litellm/pull/40829) feat(cli): configure Claude Code and Codex with a gateway key
- [#40828](https://github.com/BerriAI/litellm/pull/40828) fix(responses): preserve hosted web search calls
- [#40841](https://github.com/BerriAI/litellm/pull/40841) perf(proxy): one MGET and one pipeline for post-call spend counters, no team/user/org refetch on the response path
- [#40834](https://github.com/BerriAI/litellm/pull/40834) perf(auth): read user, team, membership, org, project and spend counters in one MGET, one query and one pipeline
- [#40837](https://github.com/BerriAI/litellm/pull/40837) fix(proxy): persist clearing user model budgets
- [#40838](https://github.com/BerriAI/litellm/pull/40838) test(ocr): exempt native parity requests from cassette replay
- [#40765](https://github.com/BerriAI/litellm/pull/40765) fix(proxy): expand access groups in /health scoping and allowlist health display fields
- [#39990](https://github.com/BerriAI/litellm/pull/39990) test(e2e): reusable JWT fixtures and management lifecycle coverage
- [#40773](https://github.com/BerriAI/litellm/pull/40773) test(e2e): memory regression test for failing requests on the release gate
- [#40798](https://github.com/BerriAI/litellm/pull/40798) fix(bedrock_mantle): gate reasoning.summary on the OpenAI Responses path
- [#40791](https://github.com/BerriAI/litellm/pull/40791) fix(mcp): use gateway authentication for root discovery
- [#40808](https://github.com/BerriAI/litellm/pull/40808) fix(mcp): match per-server OAuth metadata issuers
- [#40790](https://github.com/BerriAI/litellm/pull/40790) fix(mcp): cache upstream discovery lists
- [#40820](https://github.com/BerriAI/litellm/pull/40820) fix(proxy): keep the raw model string out of the unknown-model spend-log error message
- [#40659](https://github.com/BerriAI/litellm/pull/40659) feat(ui): search, sort and role filter for the team member table
- [#40830](https://github.com/BerriAI/litellm/pull/40830) test(pgbouncer): stop the never-listens replacement test flaking under CI load
- [#40831](https://github.com/BerriAI/litellm/pull/40831) fix(ui): make the env-credential login warning banner dismissible
- [#40609](https://github.com/BerriAI/litellm/pull/40609) fix(guardrails): fail closed with a named error when a Responses input rewrite cannot be applied
- [#40827](https://github.com/BerriAI/litellm/pull/40827) fix(shadow-eval): skip hosted web search samples
- [#40815](https://github.com/BerriAI/litellm/pull/40815) fix(db): carry DATABASE_SSLMODE/DATABASE_SSLROOTCERT into the assembled writer and reader URLs
- [#40682](https://github.com/BerriAI/litellm/pull/40682) fix(fireworks_ai): keep reasoning_content on replayed assistant messages
- [#40812](https://github.com/BerriAI/litellm/pull/40812) feat(model_prices): add DeepSeek V4.1 Flash on Fireworks
- [#40769](https://github.com/BerriAI/litellm/pull/40769) fix(realtime): dial Azure's GA realtime upstream for GA clients
- [#40795](https://github.com/BerriAI/litellm/pull/40795) fix(ui): preserve cleared shared select values
- [#40806](https://github.com/BerriAI/litellm/pull/40806) fix(guardrails): keep post_call guardrail info on streamed chat completions
- [#40572](https://github.com/BerriAI/litellm/pull/40572) fix(proxy): prevent spend counter double counting
- [#40396](https://github.com/BerriAI/litellm/pull/40396) fix(proxy): emit internal user budget webhook alerts
- [#40751](https://github.com/BerriAI/litellm/pull/40751) feat(ui): link the Organization and Deleted By cells on Deleted Teams
- [#40753](https://github.com/BerriAI/litellm/pull/40753) feat(ui): link the Created By cell on the Prompts page
- [#40750](https://github.com/BerriAI/litellm/pull/40750) feat(ui): link the User ID, Created By and Deleted By cells on Deleted Keys
- [#40752](https://github.com/BerriAI/litellm/pull/40752) feat(ui): link the User ID and Team ID cells on the Memory page
- [#40811](https://github.com/BerriAI/litellm/pull/40811) docs(pr-template): note untested assumptions under Caveats
- [#40749](https://github.com/BerriAI/litellm/pull/40749) feat(ui): link the Organization cell on the Teams page

#### 🐛 New Issues
- [#40887](https://github.com/BerriAI/litellm/issues/40887) [Bug]: Responses-to-Chat streaming loses reasoning progress and cached reasoning state `proxy` `llm translation` `potential-duplicate` 💬4
- [#40851](https://github.com/BerriAI/litellm/issues/40851) [Bug]: LiteLLM_SpendLogs.session_id doesn't reflect litellm_session_id, breaks session grouping `proxy` `llm translation` 💬2
- [#40822](https://github.com/BerriAI/litellm/issues/40822) Helm chart ships empty podSecurityContext and securityContext, so pods run as root by default 💬2
- [#40908](https://github.com/BerriAI/litellm/issues/40908) [Bug]: enable_anthropic_prompt_caching starves the vector-store pre-call hook `llm translation` `SDK`
- [#40893](https://github.com/BerriAI/litellm/issues/40893) [Feature]: Web UI management for ChatGPT/Codex subscriptions (OAuth/Device Code), Team/Key assignment, and RBAC delegation `llm translation` `ui-dashboard`
- [#40890](https://github.com/BerriAI/litellm/issues/40890) [Bug]: /v1/messages passthrough drops adaptive thinking and effort `bug` `proxy` `llm translation`
- [#40888](https://github.com/BerriAI/litellm/issues/40888) [Feature]: OpenAI-compatible GPT-Live API support in LiteLLM Proxy `proxy` `llm translation`
- [#40866](https://github.com/BerriAI/litellm/issues/40866) A key limit above its team's limit is accepted silently and can never take effect
- [#40857](https://github.com/BerriAI/litellm/issues/40857) [Bug]: a content-filtered turn arrives on /v1/messages as stop_reason end_turn, same as an ordinary answer `proxy` `llm translation`
- [#40846](https://github.com/BerriAI/litellm/issues/40846) [Bug]: Completed /v1/responses requests retain max_parallel_requests slots during deferred logging `proxy` `llm translation`
- [#40821](https://github.com/BerriAI/litellm/issues/40821) Official runtime image runs the LiteLLM proxy as root

#### 🔒 Closed Issues
- [#28206](https://github.com/BerriAI/litellm/issues/28206) [Bug]: Vertex AI models show as "Unhealthy" in Model Health Status dashboard since v1.84.0
- [#27724](https://github.com/BerriAI/litellm/issues/27724) [Feature]:Openrouter video generation support
- [#32613](https://github.com/BerriAI/litellm/issues/32613) [Feature]: Add support fort Kimi-K2.7-Code in Azure
- [#33326](https://github.com/BerriAI/litellm/issues/33326) [Bug]: model_max_budget shares one budget window start across models and durations
- [#33329](https://github.com/BerriAI/litellm/issues/33329) [Bug]: simple-shuffle ignores weights when the first healthy deployment has none
- [#33873](https://github.com/BerriAI/litellm/issues/33873) [Bug]: spend-log batches are dropped when a non-transport database write fails
- [#33546](https://github.com/BerriAI/litellm/issues/33546) [Bug]: /v1/responses bridge breaks multi-turn replay after Anthropic native web_search (vertex_ai): server_tool_use surfaced as generic function_call
- [#40050](https://github.com/BerriAI/litellm/issues/40050) Bug: False Budget has been exceeded on /v1/messages (Claude Code) - enforced cost far exceeds real recorded spend
- [#33325](https://github.com/BerriAI/litellm/issues/33325) [Bug]: model_max_budget reads pod-local spend and can exceed the cap across replicas
- [#38028](https://github.com/BerriAI/litellm/issues/38028) [Bug]: bedrock_mantle chat completions ignore per-model static AWS keys
- [#35570](https://github.com/BerriAI/litellm/issues/35570) [Bug]: Reservation reseed marks actual cost applied without incrementing it
- [#36939](https://github.com/BerriAI/litellm/issues/36939) [Bug]: CheckBatchCost can apply completed batch spend more than once
- [#40345](https://github.com/BerriAI/litellm/issues/40345) [Bug]: Bridged /v1/messages streams append a 500 error after message_stop when deferred logging receives two arguments
- [#29877](https://github.com/BerriAI/litellm/issues/29877) [Feature]: Render images in LiteLLM UI Logs
- [#36608](https://github.com/BerriAI/litellm/issues/36608) [Bug]: OCR cost ignores deployment custom pricing — a model absent from the cost map silently bills $0

### Unsloth (`unslothai/unsloth`)

**Stars:** 76,075 · **Open issues:** 1,381 · **Last push:** 2h ago

On September 13, 2026, there were no new releases for Unsloth, but several significant merged pull requests aimed to enhance stability and functionality. Notably, PR #10832 addressed multiple issues causing delays in the pull request backlog while unbreaking the main branch, and PR #10825 ensured that Unsloth's TRL patches are not disabled for Docker Studio on GPU hosts. Among the new issues raised, #10835 reported a bug with safety checks failing on devised commands, and #10840 highlighted an AppImage packaging issue that prevents downloading larger models. Additionally, #10839 flagged a problem with systematically truncated MCP calls, suggesting a deduplication issue that requires attention.

#### ✅ Merged PRs
- [#10832](https://github.com/unslothai/unsloth/pull/10832) Unbreak main, and fix the five causes reddening the PR backlog
- [#10825](https://github.com/unslothai/unsloth/pull/10825) Docker Studio: stop disabling Unsloth's TRL patches on GPU hosts

#### 🐛 New Issues
- [#10835](https://github.com/unslothai/unsloth/issues/10835) [Bug] Safety check does not work with devised commands. `feature request` `bug`
- [#10840](https://github.com/unslothai/unsloth/issues/10840) [Bug] Unsloth Desktop Appimage is missing a package. Cannot download larger models as a result. `feature request` `bug`
- [#10839](https://github.com/unslothai/unsloth/issues/10839) [Bug] MCP call is systematically truncated and cannot be bypassed (deduplication problem?) `feature request` `bug`
- [#10838](https://github.com/unslothai/unsloth/issues/10838) [Feature] Deepseek v4.1 flash gguf and support in llamacpp `feature request`

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,085 · **Open issues:** 375 · **Last push:** 7h ago

On September 13, 2026, there were no new releases for AIBrix. Significant progress was made with the merging of several pull requests, including a fix for chat tokenizer examples related to JSON message content (#2713), and the addition of end-to-end coverage for both a PD failure scenario (#2712) and a successful PD protocol contract (#2709). Additionally, a new issue was opened regarding the improvement of issue and pull request label automation (#2714), which may streamline future contributions. Overall, the day was focused on enhancing documentation and adding testing coverage without any major version updates.

#### ✅ Merged PRs
- [#2713](https://github.com/vllm-project/aibrix/pull/2713) [Docs] Fix chat tokenizer examples for JSON message content
- [#2712](https://github.com/vllm-project/aibrix/pull/2712) [Misc] Add PD failure E2E coverage
- [#2709](https://github.com/vllm-project/aibrix/pull/2709) [Misc] Add successful PD protocol contract E2E coverage

#### 🐛 New Issues
- [#2714](https://github.com/vllm-project/aibrix/issues/2714) Improve issue and PR label automation `good first issue` `help wanted` `kind/misc` `area/cicd` 💬1

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 5,759 · **Open issues:** 538 · **Last push:** <1h ago

On September 13, 2026, there were no new releases for Semantic Router. However, several important updates were merged, including the addition of initial Fireworks AI serverless model mappings in PR #3739, which enhances the project's support for serverless architectures. Notable bug fixes included ensuring that the configuration rename process does not fall back to non-atomic writes (PR #3707) and preserving the correctness of the mmBERT long-context classifier (PR #3761). A new feature request was opened to expose the dashboard on port 8700 in Kubernetes deployments (issue #3751), indicating ongoing enhancements in the deployment visibility. Overall, the day was focused on critical improvements and stability fixes rather than major version changes.

#### ✅ Merged PRs
- [#3743](https://github.com/vllm-project/semantic-router/pull/3743) [CI/Build] Pin golangci-lint once and upgrade to v2.13.2
- [#3707](https://github.com/vllm-project/semantic-router/pull/3707) [Bug] Don't fall back to a non-atomic write when the config rename fails
- [#3767](https://github.com/vllm-project/semantic-router/pull/3767) [Bug] correct branding and docs links
- [#3739](https://github.com/vllm-project/semantic-router/pull/3739) [Feature] Add initial Fireworks AI serverless model mappings
- [#3761](https://github.com/vllm-project/semantic-router/pull/3761) [Bug] Preserve mmBERT long-context classifier correctness
- [#3749](https://github.com/vllm-project/semantic-router/pull/3749) [Bug] Use success color for verified live verification dot
- [#3754](https://github.com/vllm-project/semantic-router/pull/3754) [Bug] Report a reachable Dashboard address for the Kubernetes target
- [#3717](https://github.com/vllm-project/semantic-router/pull/3717) [Bug] Time each conversation rule on its own clock
- [#3716](https://github.com/vllm-project/semantic-router/pull/3716) [Bug] Record every signal metric through the recipe scoping helper
- [#3649](https://github.com/vllm-project/semantic-router/pull/3649) [Test] Cover request mutation plugin effects end to end
- [#3498](https://github.com/vllm-project/semantic-router/pull/3498) [Feature] Add token_spans.v1 contract and HTTP token classifier backend for PII

#### 🐛 New Issues
- [#3751](https://github.com/vllm-project/semantic-router/issues/3751) [Feature] Expose dashboard (port 8700) in Kubernetes deployments `enhancement` `accepted` `wg/enterprise-environment` 💬4
- [#3756](https://github.com/vllm-project/semantic-router/issues/3756) [Bug] Generic classifier signal's local backend cannot load any registered (ModernBERT-family) model `bug` `accepted` `wg/router-models-inference-runtime` 💬2
- [#3753](https://github.com/vllm-project/semantic-router/issues/3753) [Bug] vllm-sr dashboard --target k8s prints a ClusterIP that cannot be opened `accepted` `wg/developer-experience-ecosystem` 💬2
- [#3758](https://github.com/vllm-project/semantic-router/issues/3758) [Bug] Kubernetes startup skips global config validation `bug` `accepted` `wg/enterprise-environment` 💬1
- [#3771](https://github.com/vllm-project/semantic-router/issues/3771) [Feature] Pass bounded prior user turns to learned signal backends (continuity as a routing signal) `enhancement` `needs-acceptance` `wg/mom-routing`

#### 🔒 Closed Issues
- [#2922](https://github.com/vllm-project/semantic-router/issues/2922) [Feature] Define the token_spans.v1 contract for PII backends
- [#3339](https://github.com/vllm-project/semantic-router/issues/3339) [Refactor] Route Looper model calls through the shared connector
- [#3197](https://github.com/vllm-project/semantic-router/issues/3197) [Research] Establish a versioned quality baseline and gap report for built-in Router Models
- [#3751](https://github.com/vllm-project/semantic-router/issues/3751) [Feature] Expose dashboard (port 8700) in Kubernetes deployments
- [#3741](https://github.com/vllm-project/semantic-router/issues/3741) [Enhancement] Live model verification success dot is not visually distinct from idle state
- [#3612](https://github.com/vllm-project/semantic-router/issues/3612) [Feature] Add initial Fireworks AI serverless model mappings
- [#3753](https://github.com/vllm-project/semantic-router/issues/3753) [Bug] vllm-sr dashboard --target k8s prints a ClusterIP that cannot be opened
- [#3715](https://github.com/vllm-project/semantic-router/issues/3715) [Bug] Conversation signal reports a cumulative extraction latency for every rule after the first
- [#3714](https://github.com/vllm-project/semantic-router/issues/3714) [Bug] Signal match and extraction metrics skip recipe scoping at five call sites
- [#3738](https://github.com/vllm-project/semantic-router/issues/3738) [Bug] External-API RAG keeps only the first query window
- [#3682](https://github.com/vllm-project/semantic-router/issues/3682) [Chore] Fix Dashboard AMD logo and docs header links
- [#3734](https://github.com/vllm-project/semantic-router/issues/3734) [Bug] Kubernetes reconcile resets explicit `false` and `0` global values to their defaults

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*