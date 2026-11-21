# 📡 AI Ecosystem Digest — 2026-11-21

> Generated 2026-11-21 03:48 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 156,478 | 17 | 8 | 1 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 136,005 | 26 | 1 | 45 | 3 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 108,957 | 0 | 0 | 2 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,444 | 8 | 11 | 0 | 3 |
| [OpenCode](https://github.com/anomalyco/opencode) | 228,266 | 32 | 14 | 17 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 30,823 | 30 | 8 | 17 | 3 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 394,932 | 175 | 82 | 174 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 265,019 | 26 | 7 | 1 | 1 |
| [vLLM](https://github.com/vllm-project/vllm) | 97,289 | 29 | 14 | 36 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 38,890 | 26 | 24 | 74 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 135,878 | 17 | 19 | 45 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 187,778 | 5 | 1 | 6 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 63,631 | 26 | 33 | 115 | 6 |
| [Unsloth](https://github.com/unslothai/unsloth) | 79,860 | 14 | 4 | 145 | 2 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,198 | 7 | 1 | 13 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,514 | 25 | 11 | 2 | 0 |

---

## ✨ Highlights

- **Claude Code** released version [v2.1.330](https://github.com/anthropics/claude-code/releases/tag/v2.1.330).
- **OpenAI Codex** had a series of releases, including [rust-v0.173.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.173.0-alpha.4).
- **Qwen Code** pushed out a significant release with version [v0.28.3](https://github.com/QwenLM/qwen-code/releases/tag/v0.28.3).
- A notable issue in **OpenClaw** regarding repeating duplicate reminder messages in Discord has garnered attention, resulting in [#202246](https://github.com/openclaw/openclaw/issues/202246) with 7 comments.
- **vLLM** saw a critical bug report about GLM-5.3 failing to load, leading to issue [#68919](https://github.com/vllm-project/vllm/issues/68919) that has drawn 3 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 156,478 · **Open issues:** 15,953 · **Last push:** <1h ago

On November 21, 2026, Claude Code released version 2.1.330, introducing organizational sign-in capabilities through Anthropic's Enterprise Admin Console and the new easel mod, which enables automatic chart generation under MCP metrics results for Pro, Max, Team, and Enterprise users on macOS and Linux. A notable merge addressed the adjustment of not running @claude mentions on pull requests from forks. However, several significant new issues were reported, including a bug (#111477) where sending two skill slash commands in one message led to a misleading "@-mentions" error and another (#111469) where users were unable to log in due to verification emails not being sent.

#### 🚀 New Releases
- [v2.1.330](https://github.com/anthropics/claude-code/releases/tag/v2.1.330) v2.1.330

#### ✅ Merged PRs
- [#111198](https://github.com/anthropics/claude-code/pull/111198) Don't run @claude mentions on pull requests from forks

#### 🐛 New Issues
- [#111476](https://github.com/anthropics/claude-code/issues/111476) Desktop app: Remote Control drops after silent auto-update relaunch and only reconnects when a message is sent from the Mac `bug` `platform:macos` `area:desktop` 💬1
- [#111474](https://github.com/anthropics/claude-code/issues/111474) Desktop app model picker ignores settings.json default model for new Code sessions `bug` `platform:windows` `area:desktop` 💬1
- [#111479](https://github.com/anthropics/claude-code/issues/111479) I love this, parrallelisation that I'm always trying to get my agents to do ma… `enhancement` `area:desktop`
- [#111478](https://github.com/anthropics/claude-code/issues/111478) [FEATURE] After compaction, let Claude search the conversation it just threw away `enhancement` `area:core` `memory`
- [#111477](https://github.com/anthropics/claude-code/issues/111477) [BUG] Desktop app: sending two skill slash commands in one message fails with misleading "@-mentions" error `duplicate` `platform:windows` `area:skills` `area:desktop`
- [#111475](https://github.com/anthropics/claude-code/issues/111475) Desktop (Windows): Remote Control never serves WSL projects — trust keys `wsl:<distro>:/…` dropped as `not_absolute` at every launch `bug` `has repro` `platform:windows` `platform:wsl`
- [#111473](https://github.com/anthropics/claude-code/issues/111473) [BUG] Artifact comment auto-replies run without the session's context; the session is told only after the reply is posted `bug` `platform:windows` `area:core`
- [#111472](https://github.com/anthropics/claude-code/issues/111472) [BUG] Stop doesn't stop: artifact-auto-react notification starts a new turn right after Stop `bug` `platform:windows` `area:core` `area:desktop`
- [#111471](https://github.com/anthropics/claude-code/issues/111471) [Bug] Unable to determine issue from report: no technical details provided `bug` `platform:macos` `needs-info`
- [#111470](https://github.com/anthropics/claude-code/issues/111470) Claude Code repeatedly reports unfinished work as done; credits spent on rework; support bot won't escalate `bug` `area:model` `model` `area:claude-code-web`
- [#111469](https://github.com/anthropics/claude-code/issues/111469) [BUG] Cannot log into Claude Code or Web app, verification emails are not being sent `bug` `platform:windows` `area:auth`
- [#111468](https://github.com/anthropics/claude-code/issues/111468) [BUG] [Windows] kd.exe launched by Claude Code floods a pipe with ~2M writes/sec; kernel nonpaged pool grows ~1 GB/s until the system freezes `bug` `has repro` `platform:windows` `area:tools`
- [#111467](https://github.com/anthropics/claude-code/issues/111467) [BUG] /status shows the cached oauthAccount identity, not the account in use (re-file of #79222, still present on 2.1.330) `bug` `has repro` `platform:linux` `area:auth`
- [#111466](https://github.com/anthropics/claude-code/issues/111466) [BUG] Windows: /login in one process makes other running sessions fail with 'Not logged in' for ~1-4 s, not retried `bug` `platform:windows` `area:auth` `vscode`
- [#111465](https://github.com/anthropics/claude-code/issues/111465) Desktop app: a plugin pane stops scrolling short of its top while it holds the keyboard `bug` `has repro` `platform:windows` `area:plugins`
- [#111464](https://github.com/anthropics/claude-code/issues/111464) [BUG] Markdown tables not formatted correctly by Claude Code if not followed by a blank line `bug` `platform:linux` `area:tui`
- [#111463](https://github.com/anthropics/claude-code/issues/111463) [FEATURE] Auto-archive and self-archive for cloud sessions (claude.ai/code) `enhancement` `area:claude-code-web` `platform:web`

#### 🔒 Closed Issues
- [#110449](https://github.com/anthropics/claude-code/issues/110449) Windows desktop app: Code sessions missing from sidebar despite intact index and transcripts
- [#94167](https://github.com/anthropics/claude-code/issues/94167) [Bug][cyber] Safeguard false positive while fixing microcontroller buffer overflow crashes (req_011Cew6hVDgeCYELc4Qqbyzc)
- [#94166](https://github.com/anthropics/claude-code/issues/94166) [Bug][cyber] Safeguards block standard debugging of buffer overflow crashes in microcontroller app (req_011Cew6bnX58QrMB5TvLLrEt)
- [#94164](https://github.com/anthropics/claude-code/issues/94164) [Bug][cyber] Broad safeguard blocks embedded wireless firmware development and crash fixing (req_011Cew5MkQpYjTdKCctVu1G8)
- [#94163](https://github.com/anthropics/claude-code/issues/94163) [Bug][cyber] Broad safety filter triggered during embedded wireless application debugging (req_011Cew5Lf1bNsHa1xHqwhDEQ)
- [#100347](https://github.com/anthropics/claude-code/issues/100347) [DOCS] Sub-agents page omits the Agent tool's per-invocation effort parameter and the values the per-invocation model parameter accepts
- [#94165](https://github.com/anthropics/claude-code/issues/94165) [Bug][cyber] Safeguard falsely flagged embedded firmware crash debugging and feature requests (req_011Cew5NS62RXEWBSbRqPKUe)
- [#94310](https://github.com/anthropics/claude-code/issues/94310) [Bug] Unexpected high token consumption with delegated sub-agents in Fable

### OpenAI Codex (`openai/codex`)

**Stars:** 136,005 · **Open issues:** 28,161 · **Last push:** <1h ago

On November 21, 2026, three new alpha releases for the Rust project were made available, namely versions 0.173.0-alpha.2, 0.173.0-alpha.3, and 0.173.0-alpha.4, though specific feature updates were not detailed. Among the significant merged pull requests, #62889 improved JSON processing by avoiding temporary buffers for tool call metadata, while #62884 introduced tracking for explicit web search modes in the SDK. Additionally, #62879 allowed new threads to opt out of Daybreak propagation, enhancing flexibility in app configurations. Notably, a critical new issue (#62856) has emerged where the ChatGPT desktop application crashes on startup with an NSUnknownKeyException on macOS, impacting user accessibility.

#### 🚀 New Releases
- [rust-v0.173.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.173.0-alpha.4) 0.173.0-alpha.4
- [rust-v0.173.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.173.0-alpha.3) 0.173.0-alpha.3
- [rust-v0.173.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.173.0-alpha.2) 0.173.0-alpha.2

#### ✅ Merged PRs
- [#62889](https://github.com/openai/codex/pull/62889) Avoid temporary JSON buffers when sizing executed tool call metadata
- [#62888](https://github.com/openai/codex/pull/62888) Use a shared `ToolCallId` for dispatched tool invocations
- [#62884](https://github.com/openai/codex/pull/62884) Track explicit web search modes and expose indexed in the SDK
- [#62883](https://github.com/openai/codex/pull/62883) Tag user reports with the latest reasoning removal status
- [#62882](https://github.com/openai/codex/pull/62882) Compose managed domain rules across network config layers
- [#62879](https://github.com/openai/codex/pull/62879) Allow new threads to opt out of Daybreak propagation
- [#62876](https://github.com/openai/codex/pull/62876) Prewarm MCP servers during cloud catalog refresh
- [#62871](https://github.com/openai/codex/pull/62871) Preserve per-image metadata in app-server image generation items
- [#62870](https://github.com/openai/codex/pull/62870) Use runtime authentication for TUI WebRTC calls
- [#62867](https://github.com/openai/codex/pull/62867) Enable configuration server OAuth during app-server startup
- [#62865](https://github.com/openai/codex/pull/62865) Defer Windows sandbox owner restoration until sign-in
- [#62864](https://github.com/openai/codex/pull/62864) Keep agent concurrency guidance when native tools are disabled
- [#62863](https://github.com/openai/codex/pull/62863) Ask the Responses API to omit the echoed tool catalog
- [#62859](https://github.com/openai/codex/pull/62859) Define the startup OAuth protocol for config servers
- [#62858](https://github.com/openai/codex/pull/62858) Keep Cloud threads current in the Agents overview
- [#62857](https://github.com/openai/codex/pull/62857) Defer built-in Default mode instructions until after Plan mode
- [#62854](https://github.com/openai/codex/pull/62854) Specialize OpenTelemetry providers for HTTP traces and metrics
- [#62852](https://github.com/openai/codex/pull/62852) Limit guardian response resampling to one retry
- [#62849](https://github.com/openai/codex/pull/62849) Reduce allocations when preparing tool schemas and catalogs
- [#62846](https://github.com/openai/codex/pull/62846) Return an assessment for explicit Guardian reviews
- [#62842](https://github.com/openai/codex/pull/62842) Tag all multi-agent role instructions consistently
- [#62840](https://github.com/openai/codex/pull/62840) Reuse one syntax highlighter when building TUI Markdown styles
- [#62837](https://github.com/openai/codex/pull/62837) Load managed cloud config for plugin add and list
- [#62833](https://github.com/openai/codex/pull/62833) Record MCP tool call outcomes in traces
- [#62831](https://github.com/openai/codex/pull/62831) Let required hooks block continuation on failure
- [#62829](https://github.com/openai/codex/pull/62829) Apply elastic Guardian budgets to retained user and sender evidence
- [#62828](https://github.com/openai/codex/pull/62828) Honor Guardian retention settings for assistant messages
- [#62827](https://github.com/openai/codex/pull/62827) Persist Guardian retention limits in thread settings
- [#62824](https://github.com/openai/codex/pull/62824) Enable OAuth discovery by default for config servers
- [#62820](https://github.com/openai/codex/pull/62820) Upgrade Bazel to 9.3.3
- [#62810](https://github.com/openai/codex/pull/62810) Include native USD in ChatGPT turn cost telemetry
- [#62808](https://github.com/openai/codex/pull/62808) Remove model-selected Search MCP routing
- [#62807](https://github.com/openai/codex/pull/62807) Reset TUI thread-switch state on reconnect
- [#62771](https://github.com/openai/codex/pull/62771) Read Responses WebSocket messages during blocked uploads
- [#62749](https://github.com/openai/codex/pull/62749) Recover server replies after Responses WebSocket write failures
- [#62742](https://github.com/openai/codex/pull/62742) Flush idle Responses WebSocket pongs under backpressure
- [#62709](https://github.com/openai/codex/pull/62709) Link agent tool calls to delivered messages in rollout traces
- [#62691](https://github.com/openai/codex/pull/62691) Match TUI task mentions by displayed title
- [#62690](https://github.com/openai/codex/pull/62690) Let administrators disable Codex daemon updates
- [#62687](https://github.com/openai/codex/pull/62687) Copy pasted image files into temporary TUI attachments
- [#62684](https://github.com/openai/codex/pull/62684) Allow hosts to route selected analytics events
- [#62679](https://github.com/openai/codex/pull/62679) Retry executor discovery V2 failures with backoff
- [#62677](https://github.com/openai/codex/pull/62677) Keep explicitly pinned history outside the carryover token budget
- [#62675](https://github.com/openai/codex/pull/62675) Force executor capability rescans after V2 cache invalidation
- [#62674](https://github.com/openai/codex/pull/62674) Prewarm executor capability discovery during remote startup

#### 🐛 New Issues
- [#62700](https://github.com/openai/codex/issues/62700) macOS desktop regression in 26.1117.31558: enabled local skills disappear from the slash menu `bug` `app` `skills` 💬2
- [#62733](https://github.com/openai/codex/issues/62733) Windows Bluetooth dictation fails after update to 26.1117.3838.0: clock=unavailable `bug` `windows-os` `app` 💬5
- [#62856](https://github.com/openai/codex/issues/62856) [macOS] ChatGPT crashes on startup with NSUnknownKeyException (Desktop) – works on another user account `bug` `app` 💬5
- [#62877](https://github.com/openai/codex/issues/62877) Codex Remote Control spins or becomes unavailable from both iOS and macOS `bug` `app` `connectivity` `remote` 💬4
- [#62731](https://github.com/openai/codex/issues/62731) [Windows][26.1117.3838.0] Desktop app hangs on launch every time (MoAppHang c6e5), reproduces with empty CODEX_HOME `bug` `windows-os` `app` 💬3
- [#62725](https://github.com/openai/codex/issues/62725) [macOS] AirPods Pro dictation fails after ChatGPT desktop update `bug` `app` 💬2
- [#62866](https://github.com/openai/codex/issues/62866) macOS ChatGPT desktop crashes on launch; Codex.app compatibility path missing after reinstall `bug` `app` 💬2
- [#62868](https://github.com/openai/codex/issues/62868) AppX errors 0X80073D02 - 0x8007045B ( OpenAI.CodexPrimaryRuntime ) / x64 Chat GPT/Codex for Windows `bug` `windows-os` `sandbox` `app` 💬2
- [#62880](https://github.com/openai/codex/issues/62880) Codex macOS: misleading work status, incomplete stop handling, and rapid quota depletion `bug` `model-behavior` `rate-limits` `app` 💬2
- [#62722](https://github.com/openai/codex/issues/62722) [Windows] Quick relaunch fails with “Connection for host ID local not found” `bug` `windows-os` `app` `app-server` 💬2
- [#62750](https://github.com/openai/codex/issues/62750) CLI 0.170.0: slash-command picker loses blue selection inside tmux despite working truecolor `bug` `TUI` `CLI` 💬1
- [#62696](https://github.com/openai/codex/issues/62696) [File links] Clicking a valid local ZIP opens a UTF-8 text viewer and fails `bug` `TUI` `CLI` 💬1
- [#62887](https://github.com/openai/codex/issues/62887) Desktop: unified CUA hides Chrome bootstrap skill while cua_repl is omitted from Luna's code mode `bug` `app` `skills` `computer-use` 💬1
- [#62710](https://github.com/openai/codex/issues/62710) Transcript selection mode jumps a full viewport when moving down past the bottom with j `bug` `TUI` `CLI` 💬1
- [#62822](https://github.com/openai/codex/issues/62822) Shopify connector keeps six matching theme files in awaitingPublish after changed_on_shopify `bug` `tool-calls` `app` `skills` 💬1
- [#62718](https://github.com/openai/codex/issues/62718) [TUI] Clarify fan-out/fan-in intent across wait_threads/read_thread and native multi-agent semantics `enhancement` `mcp` `TUI` `CLI` 💬1
- [#62874](https://github.com/openai/codex/issues/62874) no-active-thread-01a1fb86-7801-7450-8091-90beefe3e3b7 `bug` `windows-os` `app` `connectivity` 💬1
- [#62873](https://github.com/openai/codex/issues/62873) Repeated cybersecurity safety blocks interrupt authorized my app development `bug` `app` `safety-check` 💬1
- [#62892](https://github.com/openai/codex/issues/62892) Windows Codex Mini intermittently reverts custom pet to default Codex avatar `bug` `windows-os` `app` `pets`
- [#62891](https://github.com/openai/codex/issues/62891) Windows sandbox writable-root initialization failure and clarification of allow_null_device() behavior `bug` `windows-os` `sandbox` `CLI`
- [#62890](https://github.com/openai/codex/issues/62890) Windows desktop: normal scrolling stutters and triggers RTX 5080 GPU engine timeouts with hardware acceleration on `bug` `windows-os` `app` `performance`
- [#62886](https://github.com/openai/codex/issues/62886) Codex app: mock images displayed before a choice prompt are missing at decision time `bug` `tool-calls` `app` `imagen`
- [#62885](https://github.com/openai/codex/issues/62885) [Desktop][Work] New chats with SSH projects are blocked by “This project does not support cloud work” `bug` `windows-os` `app` `remote`
- [#62881](https://github.com/openai/codex/issues/62881) Windows: built-in Browser Use refuses authorized website navigation `bug` `windows-os` `app` `browser`
- [#62878](https://github.com/openai/codex/issues/62878) [macOS][Codex] Browser tabs remain active across chats and app restarts `bug` `app` `browser` `performance`
- [#62875](https://github.com/openai/codex/issues/62875) Android Root Access execution flagged after 4 successful runs `bug` `model-behavior` `windows-os` `CLI`

#### 🔒 Closed Issues
- [#62700](https://github.com/openai/codex/issues/62700) macOS desktop regression in 26.1117.31558: enabled local skills disappear from the slash menu

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 108,957 · **Open issues:** 718 · **Last push:** 2h ago

On November 21, 2026, Gemini CLI released version v0.71.0-nightly.20261121.geecccfcd5, which includes significant updates such as the ability to expand Windows home-relative paths using tilde and backslash, and a fix that allows the CLI to resume the most recently active session instead of just the most recently started. These changes were introduced through merged pull requests #30376 and #30389. There were no new issues reported in the last 24 hours, indicating a stable day for the project following the latest improvements.

#### 🚀 New Releases
- [v0.71.0-nightly.20261121.geecccfcd5](https://github.com/google-gemini/gemini-cli/releases/tag/v0.71.0-nightly.20261121.geecccfcd5) Release v0.71.0-nightly.20261121.geecccfcd5

#### ✅ Merged PRs
- [#30389](https://github.com/google-gemini/gemini-cli/pull/30389) fix(cli): resume most recently active session instead of most recently started
- [#30376](https://github.com/google-gemini/gemini-cli/pull/30376) fix(cli): expand Windows home-relative paths using tilde and backslash

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,444 · **Open issues:** 2,182 · **Last push:** 1h ago

Today, GitHub Copilot CLI released version 1.0.115-4, which introduced structured clarification questions in ACP editors that support forms, fixed a race condition preventing plugin initialization, and improved resource cleanup for Git commands on Windows. Prior updates 1.0.115-3 and 1.0.115-2 also contributed key fixes and enhancements, including better behavior for the @ mention picker and default enabling of Windows sandbox package queries. No significant pull requests were merged in the last 24 hours, but several new issues emerged, with #5541 grabbing attention due to a critical bug where an agent's misconfiguration led to an irreversible data wipe in WSL. Other noteworthy new issues include #5538, addressing an approval flow challenge for Chromium browsers lacking a native toolbar, and #5536, related to permission prompts resetting question dialogs in the CLI.

#### 🚀 New Releases
- [v1.0.115-4](https://github.com/github/copilot-cli/releases/tag/v1.0.115-4) 1.0.115-4
- [v1.0.115-3](https://github.com/github/copilot-cli/releases/tag/v1.0.115-3) 1.0.115-3
- [v1.0.115-2](https://github.com/github/copilot-cli/releases/tag/v1.0.115-2) 1.0.115-2

#### 🐛 New Issues
- [#5542](https://github.com/github/copilot-cli/issues/5542) Supabase OAuth status probe fails with missing Mcp-Session-Id (HTTP 400) while normal App tool calls succeed `triage`
- [#5541](https://github.com/github/copilot-cli/issues/5541) Agent ran `rsync -a --delete <dir>/ /` in WSL (empty variable after quoting failure) and irrecoverably wiped a user drive `triage`
- [#5540](https://github.com/github/copilot-cli/issues/5540) Copilot CLI does not send MCP Tasks augmentation for task-required tools `triage`
- [#5539](https://github.com/github/copilot-cli/issues/5539) Permission UX: persistent user-level read access without per-repository duplication or complex policy rules `triage`
- [#5538](https://github.com/github/copilot-cli/issues/5538) Browser extension: approval flow for Chromium browsers without a native toolbar (e.g. Vivaldi) `triage`
- [#5537](https://github.com/github/copilot-cli/issues/5537) Show AI credits used in the session list `triage`
- [#5536](https://github.com/github/copilot-cli/issues/5536) Permission prompts resets questions dialogs in the CLI `triage`
- [#5535](https://github.com/github/copilot-cli/issues/5535) Model and context-window changes are applied non-deterministically; session sat on `auto` for ~12 minutes while the client showed another model `area:sessions` `area:non-interactive` `area:models`

#### 🔒 Closed Issues
- [#2109](https://github.com/github/copilot-cli/issues/2109) ACP: support an ask_user / ask_question style extension method
- [#4793](https://github.com/github/copilot-cli/issues/4793) CIMD declares callback port 33418 but Copilot CLI uses an ephemeral port
- [#5066](https://github.com/github/copilot-cli/issues/5066) Assisted permissions regression
- [#4916](https://github.com/github/copilot-cli/issues/4916) MCP `text/plain` `resource.blob` results reach the model as empty output
- [#4985](https://github.com/github/copilot-cli/issues/4985) MCP server env secret placeholders are not passed to spawned process
- [#4803](https://github.com/github/copilot-cli/issues/4803) /ask and /btw answers go blank while the dialog stays open
- [#5039](https://github.com/github/copilot-cli/issues/5039) MCP OAuth login fails with HTTP 400 when server rejects MCP-Protocol-Version (no fallback to older version)
- [#4733](https://github.com/github/copilot-cli/issues/4733) When hit max_output_tokens, some events are not emitted and logged
- [#4632](https://github.com/github/copilot-cli/issues/4632) WorkIQ OAuth callback returns 404 only when Copilot CLI runs in WSL
- [#5119](https://github.com/github/copilot-cli/issues/5119) Windows: uninstalling an installed plugin fails with Access is denied (os error 5)
- [#3064](https://github.com/github/copilot-cli/issues/3064) Stricter exit code when MCP servers fail to start (CI / agent use)

### OpenCode (`anomalyco/opencode`)

**Stars:** 228,266 · **Open issues:** 4,016 · **Last push:** <1h ago

On November 21, 2026, OpenCode did not release any new versions but saw significant activity with several important merged pull requests. Key updates included enabling session full-text search in development builds (#65300), replacing the automations flag with a config key (#65296), and adding a hidden login shortcut for authentication in the CLI (#65263). Additionally, multiple fixes were implemented to enhance functionality, such as resolving CI failures on Windows (#65308) and ensuring proper handling of tool call names in a provider-safe form (#65292). A notable new issue reported is #65156, where the Qwen2.5-Coder 1.5B returns empty `analyze` tool calls when used with Ollama, attracting attention from the community.

#### ✅ Merged PRs
- [#65322](https://github.com/anomalyco/opencode/pull/65322) fix(browser): keep every open tab in the strip
- [#65313](https://github.com/anomalyco/opencode/pull/65313) fix(browser): keep the pane's tabs unless the person or the agent closes them
- [#65308](https://github.com/anomalyco/opencode/pull/65308) fix: fix Windows MCP pool and review toggle CI failures
- [#65312](https://github.com/anomalyco/opencode/pull/65312) fix(app): keep the background pill's rows in place
- [#65302](https://github.com/anomalyco/opencode/pull/65302) fix: restore dev CI
- [#65300](https://github.com/anomalyco/opencode/pull/65300) feat(core): enable session full-text search in dev builds
- [#65296](https://github.com/anomalyco/opencode/pull/65296) feat(core): replace the automations flag with an automations config key
- [#65295](https://github.com/anomalyco/opencode/pull/65295) fix(core): machine review fixes
- [#65303](https://github.com/anomalyco/opencode/pull/65303) fix(app): keep foreground Code Mode scripts out of the background pill
- [#65052](https://github.com/anomalyco/opencode/pull/65052) feat(core): auto-update @latest, range and Git branch plugins
- [#65292](https://github.com/anomalyco/opencode/pull/65292) fix(ai): replay undeclared tool call names in provider-safe form
- [#65286](https://github.com/anomalyco/opencode/pull/65286) test: fix Windows automation and Electron unit failures
- [#65282](https://github.com/anomalyco/opencode/pull/65282) feat(mcp): negotiate the newest protocol by default
- [#65283](https://github.com/anomalyco/opencode/pull/65283) fix(core): watch PRs and pushes again after the shell exitCode rename
- [#65280](https://github.com/anomalyco/opencode/pull/65280) fix(core): prefer standard model offerings by default
- [#65263](https://github.com/anomalyco/opencode/pull/65263) feat(cli): add hidden login shortcut for auth login
- [#65268](https://github.com/anomalyco/opencode/pull/65268) feat(cli): add, list and remove machines

#### 🐛 New Issues
- [#65156](https://github.com/anomalyco/opencode/issues/65156) Qwen2.5-Coder 1.5B returns empty `analyze` tool calls when used with Ollama `triaging` `type/bug` `area/model-behavior` `version/v2` 💬7
- [#65278](https://github.com/anomalyco/opencode/issues/65278) Desktop: Inbox session row content paints above the sidebar list, inside the 8px drag inset - INVALID `triaging` `type/bug` `area/desktop` `version/v2` 💬5
- [#65092](https://github.com/anomalyco/opencode/issues/65092) Provider emitted step-start after the terminal event during tool calls with custom Anthropic-compatible provider `triaging` `type/bug` `area/providers` `version/v2` 💬5
- [#65200](https://github.com/anomalyco/opencode/issues/65200) 网络问题 `triaging` `type/bug` `area/network` `version/v2` 💬4
- [#65214](https://github.com/anomalyco/opencode/issues/65214) windows: shell tool returns empty output for path arguments on 2.3.2 `type/bug` `area/core` `version/v2` `platform/windows` 💬4
- [#65127](https://github.com/anomalyco/opencode/issues/65127) snapshots: capture includes git-ignored and >2 MiB files, packs 90 GB into the snapshot store `type/bug` `status/repro-simulated` `area/core` `version/v2` 💬4
- [#65309](https://github.com/anomalyco/opencode/issues/65309) OpenCode Desktop 2.3.2 keeps opening %USERPROFILE% instead of the selected project folder on Windows `pending close` `triaging` `type/bug` `area/desktop` 💬3
- [#65253](https://github.com/anomalyco/opencode/issues/65253) Can't upgrade with opencode upgrade `type/bug` `status/repro-plausible` `area/install-upgrade` `version/v2` 💬3
- [#65245](https://github.com/anomalyco/opencode/issues/65245) cli: infinite hang on first user message (no response, no error) `pending close` `triaging` `type/bug` `area/providers` 💬3
- [#65290](https://github.com/anomalyco/opencode/issues/65290) permissions: external_directory ask rule is loaded but never prompted; reads outside location proceed silently `severity:high` `type/bug` `area/core` `version/v2` 💬2
- [#65281](https://github.com/anomalyco/opencode/issues/65281) desktop: no Polish spellcheck suggestions when en-US is enabled alongside pl on Windows `type/bug` `area/desktop` `version/v2` `platform/windows` 💬2
- [#65251](https://github.com/anomalyco/opencode/issues/65251) [BUG]: plugin-recorded compaction result renders an unlabeled compaction row in the TUI `type/bug` `area/tui` `version/v2` `platform/linux` 💬2
- [#65279](https://github.com/anomalyco/opencode/issues/65279) session.interrupt reports every caller as reason="user", including opencode-initiated stops `type/feature` `area/sdk-api` `version/v2` `platform/linux` 💬2
- [#65250](https://github.com/anomalyco/opencode/issues/65250) TUI: session list scrolls to the top on the first navigation after a delete `reproduced` `type/bug` `area/tui` `version/v2` 💬2
- [#65231](https://github.com/anomalyco/opencode/issues/65231) mini/TUI status line shows the default model instead of the model resolved from --agent `type/bug` `status/repro-simulated` `area/tui` `version/v2` 💬2
- [#65158](https://github.com/anomalyco/opencode/issues/65158) tui: NumPad Home/End ignore explicit input bindings on Windows `type/bug` `area/tui` `version/v2` `platform/windows` 💬2
- [#65316](https://github.com/anomalyco/opencode/issues/65316) Parent reports completion while a native subagent is still working `type/feature` `area/core` `version/v2` `platform/macos` 💬1
- [#65315](https://github.com/anomalyco/opencode/issues/65315) provider: openai-compatible-chat stream rejects string error field (SchemaError: Expected object | null | undefined at ["error"]) `type/bug` `status/repro-simulated` `area/providers` `version/v2` 💬1
- [#65298](https://github.com/anomalyco/opencode/issues/65298) error `type/support` `area/providers` `inference/free-tier` 💬1
- [#65297](https://github.com/anomalyco/opencode/issues/65297) [FEATURE]: desktop: Add Project only discoverable inside Settings in projects-first sidebar layout `type/feature` `area/desktop` `version/v2` `platform/windows` 💬1
- [#65294](https://github.com/anomalyco/opencode/issues/65294) Expose a public Stop boundary for managed workflows `type/feature` `area/sdk-api` `version/v2` 💬1
- [#65287](https://github.com/anomalyco/opencode/issues/65287) v1: prompt_async drops session agent and model variant when omitted `type/bug` `area/sdk-api` `version/v1` 💬1
- [#65285](https://github.com/anomalyco/opencode/issues/65285) codemode: uncapped state.metadata.toolCalls in execute bloats DB and freezes Desktop UI `type/bug` `status/repro-simulated` `area/sessions-storage` `version/v2` 💬1
- [#65277](https://github.com/anomalyco/opencode/issues/65277) core(subagent): parent gemini-4-neon hallucinates <subagent state="completed"> blocks and user/model delimiters while children run `type/bug` `area/model-behavior` `inference/zen` `version/v2` 💬1
- [#65276](https://github.com/anomalyco/opencode/issues/65276) Additional Context: Agents Should Be Able to Collaborate Autonomously Without Using the User as a Message Relay `type/feature` `area/core` `version/v2` 💬1
- [#65273](https://github.com/anomalyco/opencode/issues/65273) [TEST] opencode is great 💬1
- [#65272](https://github.com/anomalyco/opencode/issues/65272) je n'arrive pas à travailler `triaging` `type/support` 💬1
- [#65257](https://github.com/anomalyco/opencode/issues/65257) Invalid credentials error while using OpenCode `type/bug` `area/auth` 💬1
- [#65256](https://github.com/anomalyco/opencode/issues/65256) Invalid credentials error while using OpenCode `triaging` `type/bug` `area/auth` 💬1
- [#65254](https://github.com/anomalyco/opencode/issues/65254) Shell tool: no upper bound on the timeout a model can ask for, so one call can hold a turn for hours `type/feature` `area/core` `version/v2` `platform/linux` 💬1
- [#65252](https://github.com/anomalyco/opencode/issues/65252) [FEATURE]: let the model pick a web search provider for a single call `type/feature` `area/core` `version/v2` 💬1
- [#65248](https://github.com/anomalyco/opencode/issues/65248) Interactive TUI silently allows `ask` permissions; the same rule creates a real request for `opencode run` `type/bug` `area/tui` `version/v2` `platform/linux` 💬1

#### 🔒 Closed Issues
- [#65156](https://github.com/anomalyco/opencode/issues/65156) Qwen2.5-Coder 1.5B returns empty `analyze` tool calls when used with Ollama
- [#65278](https://github.com/anomalyco/opencode/issues/65278) Desktop: Inbox session row content paints above the sidebar list, inside the 8px drag inset - INVALID
- [#65092](https://github.com/anomalyco/opencode/issues/65092) Provider emitted step-start after the terminal event during tool calls with custom Anthropic-compatible provider
- [#49663](https://github.com/anomalyco/opencode/issues/49663) cli: invalid directory arg shows raw ENOENT chdir stack trace instead of friendly error
- [#65200](https://github.com/anomalyco/opencode/issues/65200) 网络问题
- [#65214](https://github.com/anomalyco/opencode/issues/65214) windows: shell tool returns empty output for path arguments on 2.3.2
- [#65309](https://github.com/anomalyco/opencode/issues/65309) OpenCode Desktop 2.3.2 keeps opening %USERPROFILE% instead of the selected project folder on Windows
- [#65158](https://github.com/anomalyco/opencode/issues/65158) tui: NumPad Home/End ignore explicit input bindings on Windows
- [#65298](https://github.com/anomalyco/opencode/issues/65298) error
- [#50237](https://github.com/anomalyco/opencode/issues/50237) provider: openai-compatible endpoint rejects multi-dot tool names
- [#65287](https://github.com/anomalyco/opencode/issues/65287) v1: prompt_async drops session agent and model variant when omitted
- [#65276](https://github.com/anomalyco/opencode/issues/65276) Additional Context: Agents Should Be Able to Collaborate Autonomously Without Using the User as a Message Relay
- [#65273](https://github.com/anomalyco/opencode/issues/65273) [TEST] opencode is great
- [#65257](https://github.com/anomalyco/opencode/issues/65257) Invalid credentials error while using OpenCode

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 30,823 · **Open issues:** 2,481 · **Last push:** <1h ago

On November 21, 2026, Qwen Code released version 0.28.3, which introduced new capabilities for the Web Shell, allowing users to explain background tasks from the composer chips. Additionally, version 0.28.1-preview.1 included tests to observe real scheduled loop fires and improved the robustness of the watch-state shape guard in the verification process. Among significant merged pull requests, refactoring efforts on the managed agent included dropping redundant storage keys and loading transport wakes through passive verbs, enhancing overall performance and maintainability. However, the main CI system faced challenges, including failures in end-to-end tests related to CLI functionalities, underscoring ongoing stability concerns.

#### 🚀 New Releases
- [v0.28.3](https://github.com/QwenLM/qwen-code/releases/tag/v0.28.3) Release v0.28.3
- [v0.28.1-preview.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.28.1-preview.1) Release v0.28.1-preview.1
- [v0.28.0-nightly.20261120.19b31401f5](https://github.com/QwenLM/qwen-code/releases/tag/v0.28.0-nightly.20261120.19b31401f5) Release v0.28.0-nightly.20261120.19b31401f5

#### ✅ Merged PRs
- [#17921](https://github.com/QwenLM/qwen-code/pull/17921) test(managed-agent): use canonical schema initializer
- [#17919](https://github.com/QwenLM/qwen-code/pull/17919) refactor(managed-agent-server): retire the receipt-catalog SpotBugs exclusion with an analyzer-visible assertion
- [#17977](https://github.com/QwenLM/qwen-code/pull/17977) chore(release): v0.28.3
- [#17873](https://github.com/QwenLM/qwen-code/pull/17873) fix(cli): preserve command migration destinations
- [#17865](https://github.com/QwenLM/qwen-code/pull/17865) ci(managed-agent): stabilize required gate name
- [#17959](https://github.com/QwenLM/qwen-code/pull/17959) refactor(managed-agent): drop redundant in-process locks and the archived legacy Session guard stub
- [#17958](https://github.com/QwenLM/qwen-code/pull/17958) refactor(managed-agent): drop redundant storage keys
- [#17955](https://github.com/QwenLM/qwen-code/pull/17955) fix(managed-agent): load transport wakes through the passive verb
- [#17954](https://github.com/QwenLM/qwen-code/pull/17954) test(managed-agent): run the wake stamp suites on MySQL and pin each suspension gate clause
- [#17949](https://github.com/QwenLM/qwen-code/pull/17949) fix(managed-agent): create the ephemeral Runtime state directory before spawning
- [#17947](https://github.com/QwenLM/qwen-code/pull/17947) fix(models): support Gemini proxy streaming and model refresh
- [#17944](https://github.com/QwenLM/qwen-code/pull/17944) feat(managed-agent): degrade process components per package in content-only extension runtimes
- [#17941](https://github.com/QwenLM/qwen-code/pull/17941) docs(design): record recovery merge and fix workflow test isolation
- [#17932](https://github.com/QwenLM/qwen-code/pull/17932) fix(managed-agent): settle a parked turn whose runtime is terminally lost
- [#17928](https://github.com/QwenLM/qwen-code/pull/17928) docs(worktree): record merged delivery and verification
- [#17927](https://github.com/QwenLM/qwen-code/pull/17927) refactor(managed-agent): key tenant guard on readable VARCHAR scope (identity de-hash increment 1)
- [#17925](https://github.com/QwenLM/qwen-code/pull/17925) feat(channels): bind the email ledger to its registration identity

#### 🐛 New Issues
- [#17934](https://github.com/QwenLM/qwen-code/issues/17934) Main CI failed: E2E Tests — cli/qwen-serve-restart-recovery.test.ts > … > lists and continues a session after the daemon is SIGKILLed `status/needs-triage` `type/bug` 💬16
- [#17957](https://github.com/QwenLM/qwen-code/issues/17957) Main CI failed: Managed Agent gate — RuntimeProviderPluginsTest.builtinProvidersAreTrulyOptionalOnTheApplicationClasspath `status/needs-triage` `type/bug` 💬11
- [#17931](https://github.com/QwenLM/qwen-code/issues/17931) refactor(managed-agent): retire the replay SpotBugs exclusion with the analyzer-visible assertion idiom `priority/P3` `category/development` `scope/build-system` `type/enhancement` 💬3
- [#17983](https://github.com/QwenLM/qwen-code/issues/17983) reset replay cursors when the event epoch changes `status/in-progress` `priority/P2` `type/bug` `category/integration` 💬2
- [#17985](https://github.com/QwenLM/qwen-code/issues/17985) wait for shared peer endpoint cleanup `status/in-progress` `priority/P2` `type/bug` `category/core` 💬2
- [#17980](https://github.com/QwenLM/qwen-code/issues/17980) Peer discovery can omit live sessions by exhausting concurrent probe capacity `priority/P2` `type/bug` `category/integration` `scope/sdk` 💬2
- [#17978](https://github.com/QwenLM/qwen-code/issues/17978) TypeScript SDK spends quadratic work draining large buffered message bursts `priority/P2` `type/bug` `category/performance` `scope/sdk` 💬2
- [#17973](https://github.com/QwenLM/qwen-code/issues/17973) Python SDK rejects async callable permission objects but accepts uncallable callback signatures `priority/P2` `type/bug` `category/integration` `scope/sdk` 💬2
- [#17972](https://github.com/QwenLM/qwen-code/issues/17972) Python SDK accepts nonfinite deadlines and bypasses timeout validation for explicit objects `priority/P2` `type/bug` `category/integration` `scope/sdk` 💬2
- [#17971](https://github.com/QwenLM/qwen-code/issues/17971) Python SDK closes stdin before a later streamed turn can finish its permission exchange `priority/P2` `type/bug` `category/integration` `scope/sdk` 💬2
- [#17963](https://github.com/QwenLM/qwen-code/issues/17963) Web Shell: environment panel bottom is hidden behind the pending question card and cannot be scrolled into view `priority/P2` `type/bug` `category/ui` `scope/web-shell` 💬2
- [#17962](https://github.com/QwenLM/qwen-code/issues/17962) docs: pages describe features the install.sh binary (1.0.0-preview.2) does not expose, and pages don't say which release line they apply to `priority/P2` `type/documentation` `scope/installation` `scope/documentation` 💬2
- [#17946](https://github.com/QwenLM/qwen-code/issues/17946) workflow-authoring SKILL.md understates which agent() schemas are refused before dispatch `priority/P3` `type/documentation` `category/core` `status/ready-for-agent` 💬2
- [#17937](https://github.com/QwenLM/qwen-code/issues/17937) bug(core): "Always Allow" on a root-level file lets grep_search/glob search the whole drive or filesystem `priority/P1` `type/bug` `category/core` `scope/vulnerability` 💬2
- [#17939](https://github.com/QwenLM/qwen-code/issues/17939) Track restart-recovery scope and retention decisions `priority/P3` `type/feature-request` `category/cli` `scope/session-management` 💬2
- [#17943](https://github.com/QwenLM/qwen-code/issues/17943) bug(managed-agent): Broker HTTP threads cannot discover nested external-workspace providers `priority/P1` `type/bug` `managed-agent-server` 💬2
- [#17996](https://github.com/QwenLM/qwen-code/issues/17996) preserve notification envelope session scope 💬1
- [#17991](https://github.com/QwenLM/qwen-code/issues/17991) preserve completed bridge prompt outcomes 💬1
- [#18001](https://github.com/QwenLM/qwen-code/issues/18001) stop native REST requests after disposal 💬1
- [#17987](https://github.com/QwenLM/qwen-code/issues/17987) bound transcript notification traversal `priority/P2` `type/bug` `category/ui` `scope/web-shell` 💬1
- [#18000](https://github.com/QwenLM/qwen-code/issues/18000) preserve Unicode at transcript text limits 💬1
- [#17999](https://github.com/QwenLM/qwen-code/issues/17999) reuse refreshed client registrations 💬1
- [#18003](https://github.com/QwenLM/qwen-code/issues/18003) preserve generated UI revocation delivery 💬1
- [#18002](https://github.com/QwenLM/qwen-code/issues/18002) keep input open for all streamed turns 💬1
- [#17998](https://github.com/QwenLM/qwen-code/issues/17998) ignore invalid WebSocket message envelopes 💬1
- [#17993](https://github.com/QwenLM/qwen-code/issues/17993) propagate prompt input failures to query consumers 💬1
- [#17989](https://github.com/QwenLM/qwen-code/issues/17989) retain active prompts during bridge idle cleanup 💬1
- [#17966](https://github.com/QwenLM/qwen-code/issues/17966) Release Failed for v0.28.3 on 2026-11-21 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#17948](https://github.com/QwenLM/qwen-code/issues/17948) Release Failed for v0.28.2 on 2026-11-20 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#17969](https://github.com/QwenLM/qwen-code/issues/17969) Main CI failed: E2E Tests — interactive/tui-agent-loop-parity.test.ts > … > 'a shell command cancelled while it ru…' `status/needs-triage` `type/bug`

#### 🔒 Closed Issues
- [#17517](https://github.com/QwenLM/qwen-code/issues/17517) Aone channel: follow-up on deferred non-blocking review suggestions from #17442 (R4)
- [#17039](https://github.com/QwenLM/qwen-code/issues/17039) ci: make the Managed Agent gate name stable so it can become a required check
- [#16832](https://github.com/QwenLM/qwen-code/issues/16832) ci: manual PR re-review channel is dead — qwen-code-pr-review.yml gates on qwen-code-ci-bot, an account that no longer exists (404)
- [#17628](https://github.com/QwenLM/qwen-code/issues/17628) fix(cli): command migration can overwrite a newly created Markdown file
- [#17884](https://github.com/QwenLM/qwen-code/issues/17884) deflake: packages/web-shell/client/e2e/chat-transcript-document.test.ts › ExportTranscriptDocument browser gate > opens, searches, copies, and prints the maximum document with its pinned npm runtime
- [#17188](https://github.com/QwenLM/qwen-code/issues/17188) DeepSeek V3.1 and V3.2 fall back to the generic DeepSeek output limit
- [#17885](https://github.com/QwenLM/qwen-code/issues/17885) windows-latest Java lane red since a27b12becf (#17478): a 32780-char capture payload goes through argv, over the Windows 32767 limit
- [#17714](https://github.com/QwenLM/qwen-code/issues/17714) feat(managed-agent): support or gracefully degrade mcp/hooks contributions in content-only extension packages

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

**Stars:** 394,932 · **Open issues:** 8,702 · **Last push:** <1h ago

On November 21, 2026, there were no new releases for OpenClaw. However, 27 pull requests were merged, including significant fixes such as enhancing the handling of legacy sessions, ensuring the CLI configuration confirmation post-Gateway retries, and improving the workspace link helpers' internal management. Key updates also saw the Cloudflare Access JWT verification for trusted-proxy authentication being introduced in the gateway. Meanwhile, a notable new issue has emerged, with users reporting that goal-continuation prompts in Discord are generating duplicate reminder messages, highlighting ongoing challenges in session management.

#### ✅ Merged PRs
- [#201877](https://github.com/openclaw/openclaw/pull/201877) fix: keep first-use state writes working after peer schema changes
- [#202882](https://github.com/openclaw/openclaw/pull/202882) refactor(ios): remove obsolete typography metadata test
- [#202713](https://github.com/openclaw/openclaw/pull/202713) fix: keep workspace lease checks off the Gateway thread
- [#202907](https://github.com/openclaw/openclaw/pull/202907) chore(ui): refresh control ui locales
- [#202714](https://github.com/openclaw/openclaw/pull/202714) fix: confirm saved CLI config after the Gateway retries applying it
- [#202901](https://github.com/openclaw/openclaw/pull/202901) fix(ci): keep Gateway authorization helpers internal
- [#202710](https://github.com/openclaw/openclaw/pull/202710) fix(doctor): validate legacy sessions in the configured store
- [#201869](https://github.com/openclaw/openclaw/pull/201869) fix: let large PostgreSQL maintenance operations finish
- [#202651](https://github.com/openclaw/openclaw/pull/202651) fix: let doctor --fix finish when an old Matrix room session has a pending heartbeat result
- [#202865](https://github.com/openclaw/openclaw/pull/202865) fix(test): clear environment stubs after process.env replacement
- [#202636](https://github.com/openclaw/openclaw/pull/202636) fix: check publication read opt-in at request admission
- [#202896](https://github.com/openclaw/openclaw/pull/202896) chore(i18n): refresh native locales
- [#202878](https://github.com/openclaw/openclaw/pull/202878) fix: keep screenshots working for background tabs in headed Chrome
- [#202735](https://github.com/openclaw/openclaw/pull/202735) fix: wait for a busy gateway to restart before verifying a Git update
- [#202897](https://github.com/openclaw/openclaw/pull/202897) chore(ui): refresh control ui locales
- [#202841](https://github.com/openclaw/openclaw/pull/202841) refactor(transcripts): separate summary data from generation
- [#202815](https://github.com/openclaw/openclaw/pull/202815) fix: stop recursive Git shims from exhausting agent sandboxes
- [#202846](https://github.com/openclaw/openclaw/pull/202846) fix: preserve RFB cancellation and portable test ownership
- [#202879](https://github.com/openclaw/openclaw/pull/202879) fix(ci): keep workspace file-link helpers internal
- [#202824](https://github.com/openclaw/openclaw/pull/202824) fix: make onboarding next steps runnable when OpenClaw runs from npx
- [#200376](https://github.com/openclaw/openclaw/pull/200376) feat(gateway): opt-in Cloudflare Access JWT verification for trusted-proxy auth
- [#202835](https://github.com/openclaw/openclaw/pull/202835) fix(apple): remove two unused chat UI declarations that fail the dead-code scan
- [#201547](https://github.com/openclaw/openclaw/pull/201547) fix: keep Code Mode usable after read-only workers retire
- [#202871](https://github.com/openclaw/openclaw/pull/202871) docs(test): retain isolated MLX clock coverage
- [#202704](https://github.com/openclaw/openclaw/pull/202704) docs: document isolated PostgreSQL restore drills
- [#202852](https://github.com/openclaw/openclaw/pull/202852) fix: give scripts only the command's output when a command leaves a process running
- [#202850](https://github.com/openclaw/openclaw/pull/202850) fix: honor current home and stabilize runtime regression tests
- [#202832](https://github.com/openclaw/openclaw/pull/202832) fix(ci): isolate Git PPA index refresh
- [#202845](https://github.com/openclaw/openclaw/pull/202845) refactor(test): remove unused inline benchmark analysis
- [#202863](https://github.com/openclaw/openclaw/pull/202863) chore(ui): refresh control ui locales
- [#199509](https://github.com/openclaw/openclaw/pull/199509) fix(doctor): diagnose immutable state without pending writes
- [#202839](https://github.com/openclaw/openclaw/pull/202839) fix: let subagents inherit registered project folders
- [#202762](https://github.com/openclaw/openclaw/pull/202762) fix: report invalid PostgreSQL vector dimensions in Doctor
- [#202837](https://github.com/openclaw/openclaw/pull/202837) fix: release completed lease callers and keep input tests portable
- [#202838](https://github.com/openclaw/openclaw/pull/202838) feat(plugins): legacy memory runtimes as backends and optional provider store
- [#201519](https://github.com/openclaw/openclaw/pull/201519) fix: keep unused Code Mode lookups from tainting memory
- [#201488](https://github.com/openclaw/openclaw/pull/201488) fix: explain how to call deferred tools after a direct call
- [#201615](https://github.com/openclaw/openclaw/pull/201615) fix: keep invited collaborators from loosening your session's guardrails or approving your commands
- [#202812](https://github.com/openclaw/openclaw/pull/202812) chore(test): remove duplicate chat mention coverage
- [#202654](https://github.com/openclaw/openclaw/pull/202654) feat: prepare restricted connections for Session Share steering
- [#202478](https://github.com/openclaw/openclaw/pull/202478) feat: keep unused Knowledge workers asleep in lean mode
- [#201560](https://github.com/openclaw/openclaw/pull/201560) fix: update the checkout a macOS Gateway actually runs
- [#202396](https://github.com/openclaw/openclaw/pull/202396) fix: tell users to restart when session access cannot recover
- [#202778](https://github.com/openclaw/openclaw/pull/202778) docs(create-template): show the draft format and announce additions
- [#202757](https://github.com/openclaw/openclaw/pull/202757) improve(knowledge): speed up project recall after vault edits
- [#202810](https://github.com/openclaw/openclaw/pull/202810) fix: restore standalone metadata CI checks
- [#202774](https://github.com/openclaw/openclaw/pull/202774) fix(ai): keep reasoning across tool calls on OpenAI-compatible proxies
- [#202792](https://github.com/openclaw/openclaw/pull/202792) fix: isolate sidebar sessions opened in managed clones
- [#202534](https://github.com/openclaw/openclaw/pull/202534) feat: only link file paths that open in chat
- [#202736](https://github.com/openclaw/openclaw/pull/202736) fix(ui): remove resting chrome from Customize settings gears
- [#202784](https://github.com/openclaw/openclaw/pull/202784) fix: keep the compact Skill workshop heading accessible
- [#202808](https://github.com/openclaw/openclaw/pull/202808) fix: unblock macOS lint for the sign-in window
- [#202671](https://github.com/openclaw/openclaw/pull/202671) fix: make proactive checks opt-in on fresh installs
- [#202798](https://github.com/openclaw/openclaw/pull/202798) fix(test): prevent recursive Git processes in workflow fixtures
- [#202626](https://github.com/openclaw/openclaw/pull/202626) fix: keep same-email ChatGPT workspaces connected
- [#202793](https://github.com/openclaw/openclaw/pull/202793) fix: preserve Slack reads for scheduled cross-channel sessions
- [#202789](https://github.com/openclaw/openclaw/pull/202789) refactor: unify async SQLite descriptor admission
- [#202795](https://github.com/openclaw/openclaw/pull/202795) fix(ui): restore Plugins first-visit asset budget
- [#202785](https://github.com/openclaw/openclaw/pull/202785) fix: keep the Gateway memory threshold internal
- [#202797](https://github.com/openclaw/openclaw/pull/202797) chore(ui): refresh control ui locales
- [#201340](https://github.com/openclaw/openclaw/pull/201340) feat(plugins): let the memory slot owner query passive memory backends
- [#202768](https://github.com/openclaw/openclaw/pull/202768) fix: keep the profile avatar quiet on hover and focus
- [#202349](https://github.com/openclaw/openclaw/pull/202349) fix(ui): resume Logs auto-follow after delayed wheel input
- [#202348](https://github.com/openclaw/openclaw/pull/202348) fix(ui): keep chat rows aligned before the first scroll
- [#202782](https://github.com/openclaw/openclaw/pull/202782) chore(ui): refresh control ui locales
- [#202776](https://github.com/openclaw/openclaw/pull/202776) fix: account for npm preview waiver policy reads
- [#202771](https://github.com/openclaw/openclaw/pull/202771) refactor: share sandbox skills filesystem worker custody
- [#202773](https://github.com/openclaw/openclaw/pull/202773) improve: draft a Template from a description, not only from the current agent
- [#202765](https://github.com/openclaw/openclaw/pull/202765) fix: keep live state reads free of repeated filesystem checks
- [#201447](https://github.com/openclaw/openclaw/pull/201447) fix: bring composer attachment previews closer together
- [#202758](https://github.com/openclaw/openclaw/pull/202758) fix: keep installed plugins in the Featured list instead of hiding them
- [#201439](https://github.com/openclaw/openclaw/pull/201439) improve: stop Devices from saying "no devices" while the list loads
- [#202422](https://github.com/openclaw/openclaw/pull/202422) feat: show Gateway resource profiles and live worker memory
- [#201432](https://github.com/openclaw/openclaw/pull/201432) improve: stop floating "Loading…" beside Talk trigger words
- [#202769](https://github.com/openclaw/openclaw/pull/202769) fix: distinguish channel API examples from configuration
- [#202767](https://github.com/openclaw/openclaw/pull/202767) chore(ui): refresh control ui locales
- [#202739](https://github.com/openclaw/openclaw/pull/202739) fix: wait for automation details in saved-model test
- [#202759](https://github.com/openclaw/openclaw/pull/202759) fix: sample attachment menu height only while visible
- [#202694](https://github.com/openclaw/openclaw/pull/202694) fix(ui): restore Skills first-visit asset limits
- [#202747](https://github.com/openclaw/openclaw/pull/202747) fix: restore Skills discovery recovery checks
- [#202630](https://github.com/openclaw/openclaw/pull/202630) fix(database): report disabled memory search after a port
- [#202752](https://github.com/openclaw/openclaw/pull/202752) fix: wait for live chat events in cursor tests
- [#202629](https://github.com/openclaw/openclaw/pull/202629) fix: keep search current after small PostgreSQL transcript rewrites
- [#202726](https://github.com/openclaw/openclaw/pull/202726) fix(ui): show only SKILL.md in plugin skill previews
- [#201570](https://github.com/openclaw/openclaw/pull/201570) fix: preserve the running installation when an agent updates its Gateway
- [#202744](https://github.com/openclaw/openclaw/pull/202744) chore(ui): refresh control ui locales
- [#202748](https://github.com/openclaw/openclaw/pull/202748) fix(macos): unblock 2026.11.6 source-branch packaging
- [#202732](https://github.com/openclaw/openclaw/pull/202732) fix: show saved child results when idle delivery expires
- [#202731](https://github.com/openclaw/openclaw/pull/202731) refactor: reduce CPU spent preparing state reads
- [#202085](https://github.com/openclaw/openclaw/pull/202085) fix(cli): restore dashboard Gateway start and install recovery
- [#202719](https://github.com/openclaw/openclaw/pull/202719) fix: make plugin catalog artwork easier to recognize
- [#202709](https://github.com/openclaw/openclaw/pull/202709) fix: restore queued compaction writer-fence coverage
- [#202734](https://github.com/openclaw/openclaw/pull/202734) chore(ui): refresh control ui locales
- [#202692](https://github.com/openclaw/openclaw/pull/202692) fix: distinguish a recovered gateway from its failed update checks
- [#202725](https://github.com/openclaw/openclaw/pull/202725) fix(ui): keep known plugin details visible while loading
- [#199693](https://github.com/openclaw/openclaw/pull/199693) fix(cli): connect through gateway.remote.edgeAuth without a Gateway token
- [#202723](https://github.com/openclaw/openclaw/pull/202723) fix: make the Plugins catalog clear when disconnected
- [#202718](https://github.com/openclaw/openclaw/pull/202718) fix: let updates proceed when catalog model compat overrides are kept for review
- [#202724](https://github.com/openclaw/openclaw/pull/202724) fix: keep the Knowledge scribe from stopping at claim linking
- [#201428](https://github.com/openclaw/openclaw/pull/201428) fix(channels): configure and onboarding save channel tokens as plaintext
- [#202708](https://github.com/openclaw/openclaw/pull/202708) fix: preserve child results after source lifecycle changes
- [#202687](https://github.com/openclaw/openclaw/pull/202687) fix(ui): restore plugin route performance checks
- [#202678](https://github.com/openclaw/openclaw/pull/202678) fix: keep past update failures in the Inbox
- [#202581](https://github.com/openclaw/openclaw/pull/202581) feat(ui): open skills as pages instead of dialogs
- [#202712](https://github.com/openclaw/openclaw/pull/202712) fix(ui): fit chat install cards to a compact two-row layout
- [#202656](https://github.com/openclaw/openclaw/pull/202656) fix: resume model catalog publishing when a release ships minified code
- [#202696](https://github.com/openclaw/openclaw/pull/202696) improve: faster update recovery capture for large WhatsApp credential folders
- [#202703](https://github.com/openclaw/openclaw/pull/202703) fix: reduce Gateway work when Linux commands start and finish
- [#202698](https://github.com/openclaw/openclaw/pull/202698) fix(ci): repair Knowledge dead-code checks
- [#202691](https://github.com/openclaw/openclaw/pull/202691) fix: clear unused test-helper exports from dependency checks
- [#201773](https://github.com/openclaw/openclaw/pull/201773) fix(release): evaluate reusable evidence with Q-owned waivers
- [#200609](https://github.com/openclaw/openclaw/pull/200609) fix: Doctor no longer recommends restore when snapshot storage is full
- [#201857](https://github.com/openclaw/openclaw/pull/201857) fix: repair PostgreSQL session keys with boards
- [#202070](https://github.com/openclaw/openclaw/pull/202070) fix: point doctor to the config file when validation fails
- [#202664](https://github.com/openclaw/openclaw/pull/202664) fix: show saved child results when completion delivery fails
- [#199689](https://github.com/openclaw/openclaw/pull/199689) fix(daemon): Linux updates run out of space on a RAM-backed /tmp when TMPDIR was never set
- [#202190](https://github.com/openclaw/openclaw/pull/202190) fix: stop reporting removed paths that never existed
- [#197737](https://github.com/openclaw/openclaw/pull/197737) fix(auth): classify and explain model-route credential mismatches
- [#201383](https://github.com/openclaw/openclaw/pull/201383) fix: keep shell setup instructions visible after installation
- [#202685](https://github.com/openclaw/openclaw/pull/202685) fix(ui): unblock dead-export checks after Workshop and template refactors
- [#201366](https://github.com/openclaw/openclaw/pull/201366) fix: show how to read saved update reports
- [#176331](https://github.com/openclaw/openclaw/pull/176331) fix(models): auth list shows recovery advice after restrictions expire
- [#201856](https://github.com/openclaw/openclaw/pull/201856) fix: keep database workers healthy after silent connection loss
- [#202083](https://github.com/openclaw/openclaw/pull/202083) fix: clarify agent selection in auth command help
- [#202411](https://github.com/openclaw/openclaw/pull/202411) feat: let Knowledge learn from Slack
- [#202666](https://github.com/openclaw/openclaw/pull/202666) fix: restore plugin browser checks
- [#202673](https://github.com/openclaw/openclaw/pull/202673) test(signal): avoid spreading a possibly-string setupFiles in the Signal vitest config
- [#202410](https://github.com/openclaw/openclaw/pull/202410) feat: let agents list Slack channels and choose which token reads them
- [#202682](https://github.com/openclaw/openclaw/pull/202682) docs: help PR reviewers understand the problem before the fix
- [#202674](https://github.com/openclaw/openclaw/pull/202674) improve(ci): speed up forced-exit lint checks
- [#202681](https://github.com/openclaw/openclaw/pull/202681) chore(ui): refresh control ui locales
- [#202670](https://github.com/openclaw/openclaw/pull/202670) fix: restore update cleanup failure coverage
- [#202644](https://github.com/openclaw/openclaw/pull/202644) fix: stop stale file writes after session database replacement
- [#202605](https://github.com/openclaw/openclaw/pull/202605) fix(ci): remove unused settings and spawn exports
- [#202582](https://github.com/openclaw/openclaw/pull/202582) fix(ci): publish performance reports through pull requests
- [#201723](https://github.com/openclaw/openclaw/pull/201723) test(prompt-cache): extend the prefix journey with cron, steer, overflow and a concurrent chat on five transports
- [#202628](https://github.com/openclaw/openclaw/pull/202628) fix: reuse prepared plugin configuration during agent runs
- [#202631](https://github.com/openclaw/openclaw/pull/202631) fix: show publisher logos on chat cards without a plugin icon
- [#195850](https://github.com/openclaw/openclaw/pull/195850) chore: separate managed playback test coverage
- [#202655](https://github.com/openclaw/openclaw/pull/202655) fix: align CI tests with admitted tool calls
- [#202637](https://github.com/openclaw/openclaw/pull/202637) fix(channels): stop resending replayed session turns as channel history
- [#202548](https://github.com/openclaw/openclaw/pull/202548) fix(ui): read the skill card when its dialog opens; show the switch after Add
- [#202535](https://github.com/openclaw/openclaw/pull/202535) fix(ui): open template automations in place and read the whole SOUL.md on Show more
- [#202660](https://github.com/openclaw/openclaw/pull/202660) fix(release): complete stable closeout with authenticated recovery evidence
- [#202658](https://github.com/openclaw/openclaw/pull/202658) fix: ACP clients get the whole reply when a prompt waits behind other work
- [#202532](https://github.com/openclaw/openclaw/pull/202532) improve(ui): templates catalog as rows and template page with a facts column
- [#201642](https://github.com/openclaw/openclaw/pull/201642) fix(macos): complete OpenClaw ID sign-in inside the app
- [#202647](https://github.com/openclaw/openclaw/pull/202647) fix: keep child follow-up results valid after requester lifecycle changes
- [#202572](https://github.com/openclaw/openclaw/pull/202572) feat(ui): skill workshop start page with Drafts, History and Learned skills
- [#202531](https://github.com/openclaw/openclaw/pull/202531) improve(ui): skills list as rows and skill details laid out like plugin pages
- [#202545](https://github.com/openclaw/openclaw/pull/202545) fix(ui): Back and reload keep the open skill workshop page
- [#202624](https://github.com/openclaw/openclaw/pull/202624) chore(release): close out 2026.11.6 on main
- [#202561](https://github.com/openclaw/openclaw/pull/202561) fix(ci): report isolated-unit test file volumes
- [#202649](https://github.com/openclaw/openclaw/pull/202649) chore(ui): refresh control ui locales
- [#202541](https://github.com/openclaw/openclaw/pull/202541) fix: let updates finish when another tool briefly reads OpenClaw's databases
- [#202097](https://github.com/openclaw/openclaw/pull/202097) fix(config): reject reserved PostgreSQL schema prefixes
- [#202527](https://github.com/openclaw/openclaw/pull/202527) improve(ui): plugins catalog lists only plugins you have not installed
- [#202537](https://github.com/openclaw/openclaw/pull/202537) improve(ui): skill workshop as a start page with skill and draft pages
- [#201583](https://github.com/openclaw/openclaw/pull/201583) fix(database-port): treat SQLite zero sequence high-water as uncalled
- [#202634](https://github.com/openclaw/openclaw/pull/202634) fix(ui): keep Settings links on their routes as permissions load
- [#202592](https://github.com/openclaw/openclaw/pull/202592) fix: keep interrupted child results visible after restart
- [#202640](https://github.com/openclaw/openclaw/pull/202640) chore(ui): refresh control ui locales
- [#202568](https://github.com/openclaw/openclaw/pull/202568) fix(gateway): keep a worker session's system prompt pinned across instruction changes
- [#202608](https://github.com/openclaw/openclaw/pull/202608) fix: avoid copying live state during read-only inspection
- [#202618](https://github.com/openclaw/openclaw/pull/202618) fix(models): never list a model the provider's listing omits, including on the Gateway's first read
- [#202549](https://github.com/openclaw/openclaw/pull/202549) fix(ci): authenticate website installer sync builds
- [#202583](https://github.com/openclaw/openclaw/pull/202583) fix(models): apply a changed catalog source at once without breaking turns
- [#202110](https://github.com/openclaw/openclaw/pull/202110) fix(database): show PostgreSQL shared-state ownership
- [#202515](https://github.com/openclaw/openclaw/pull/202515) improve(ui): plugins catalog as rows and plugin page with a facts column
- [#202089](https://github.com/openclaw/openclaw/pull/202089) fix(ci): restore PostgreSQL conformance coverage
- [#202101](https://github.com/openclaw/openclaw/pull/202101) fix: catch incompatible ownership before porting to SQLite
- [#202104](https://github.com/openclaw/openclaw/pull/202104) fix: speed up compaction for PostgreSQL-backed chats
- [#202428](https://github.com/openclaw/openclaw/pull/202428) fix(cli): refuse saved history only when another CLI account ran the session
- [#202607](https://github.com/openclaw/openclaw/pull/202607) fix(worktrees): give chat writes breathing room during large cleanup

#### 🐛 New Issues
- [#202246](https://github.com/openclaw/openclaw/issues/202246) 2026.11.6: goal-continuation prompts repeatedly produce duplicate reminder messages in Discord `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬7
- [#202250](https://github.com/openclaw/openclaw/issues/202250) [Bug]: update migration-plan always refuses because candidate artifact digest cannot be supplied `bug` `regression` `P2` `clawsweeper:no-new-fix-pr` 💬5
- [#202741](https://github.com/openclaw/openclaw/issues/202741) [Bug]: native Telegram message.send with attachment reports existing threaded session not found; final MEDIA: renders in GUI but never reaches Telegram `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬4
- [#202672](https://github.com/openclaw/openclaw/issues/202672) [Bug]: anthropic-messages route: MiniMax-M3.1-Flash intermittently rejected at terminal tool-argument validation (0 on MiniMax-M3) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬3
- [#202643](https://github.com/openclaw/openclaw/issues/202643) [Bug]: MC-001: Empty Sweep Guard and Narrative Decomposition for Dreaming Pipeline `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬3
- [#202467](https://github.com/openclaw/openclaw/issues/202467) [Bug]: Control UI freezes in WebKit when opening the Sessions filter menu (Linux app 2026.11.6) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬3
- [#202384](https://github.com/openclaw/openclaw/issues/202384) [Bug]: transient doctor-contract load failure ("Plugin source changed while preparing its reload") is reported as an "immutable action order and authority" refusal, fails the update and leaves the Gateway stopped `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#202248](https://github.com/openclaw/openclaw/issues/202248) doctor --fix --non-interactive exits non-zero with unnamed "plugin load errors"; entrypoint never starts the Gateway (containerized 502 livelock) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#202518](https://github.com/openclaw/openclaw/issues/202518) [Bug]: claude-cli run never closes after sessions_spawn + sessions_yield in long sessions; later turns reuse the dead live session `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬2
- [#202366](https://github.com/openclaw/openclaw/issues/202366) Session rejects chat.send with SessionMutationFactsUnavailableError after its SQLite store worker dies mid-write `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#202499](https://github.com/openclaw/openclaw/issues/202499) Native Codex automation update rejects fresh owner turn with undifferentiated creator-authority error `P2` `clawsweeper:needs-live-repro` `impact:security` `issue-rating: 🐚 platinum hermit` 💬2
- [#202645](https://github.com/openclaw/openclaw/issues/202645) [Bug]: Cannot paste images into Codex terminal-mode chat input `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#202652](https://github.com/openclaw/openclaw/issues/202652) Enabling a paused automation puts its already-dismissed failure back in the Inbox `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬2
- [#202621](https://github.com/openclaw/openclaw/issues/202621) Hook agent runs leak agent:<id>:cron:<jobId> base sessions forever (not covered by cron.sessionRetention) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#202523](https://github.com/openclaw/openclaw/issues/202523) Prompt cache: worker-environment turns re-render the system prompt each turn `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬2
- [#202615](https://github.com/openclaw/openclaw/issues/202615) sessions_send: accept `text` as an alias for `message`, like the message tool does `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#202595](https://github.com/openclaw/openclaw/issues/202595) Skip unused forced-exit scope maps in CI `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#202479](https://github.com/openclaw/openclaw/issues/202479) [Bug]: Control UI "Latest update attempt" shows a later `update repair` run as a successful update and hides the failed update it repaired `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#202562](https://github.com/openclaw/openclaw/issues/202562) Reduce repeated reference scans in CI assertion lint `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬2
- [#202502](https://github.com/openclaw/openclaw/issues/202502) Update failure: package-update (2026.11.2) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#202302](https://github.com/openclaw/openclaw/issues/202302) Update failure: candidate-doctor (2026.11.4) `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#202433](https://github.com/openclaw/openclaw/issues/202433) [Bug]: computer tool silently omitted with text-only model; capabilities preview still lists it as available `bug` `no-stale` `bug:behavior` `P2` 💬2
- [#202265](https://github.com/openclaw/openclaw/issues/202265) Gateway stays stopped after a failed update check from 2026.9.37 to 2026.11.6 `P1` `clawsweeper:needs-info` `impact:crash-loop` `issue-rating: 🦐 gold shrimp` 💬2
- [#202314](https://github.com/openclaw/openclaw/issues/202314) Process supervisor wrappers and stdio MCP servers are not reclaimed (macOS, 2026.11.6) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#202264](https://github.com/openclaw/openclaw/issues/202264) Update failure: invalid-config (2026.11.2) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#202228](https://github.com/openclaw/openclaw/issues/202228) Update failure: gateway-recovery-verification (2026.11.3) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#202818](https://github.com/openclaw/openclaw/issues/202818) refactor(android): separate shared app policies from feature owners `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#202910](https://github.com/openclaw/openclaw/issues/202910) Realtime voice: consultPolicy "substantive" tells GPT-Live to call a tool it lacks (Voice Call) and is rejected by Discord `clawsweeper:intake:bug` 💬1
- [#202908](https://github.com/openclaw/openclaw/issues/202908) Matrix: session-binding bind() drops plugin metadata, so plugin-owned bindings fail ("plugin binding was created without plugin metadata") `P2` `impact:session-state` 💬1
- [#202904](https://github.com/openclaw/openclaw/issues/202904) [Feature]: Keep video mode capabilities aligned in BytePlus and OpenRouter `enhancement` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#202900](https://github.com/openclaw/openclaw/issues/202900) [Bug]: A stream automation whose relay dies is marked restart-exhausted at once, and re-enabling it fails until a Gateway restart `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#202872](https://github.com/openclaw/openclaw/issues/202872) refactor(ui): keep workspace link helpers private `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#202819](https://github.com/openclaw/openclaw/issues/202819) refactor: separate transcript summary data from generation `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#202891](https://github.com/openclaw/openclaw/issues/202891) [Bug]: `plugins inspect` drops npm-pack provenance (artifactKind/sourcePath/integrity) since #202608 `bug` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬1
- [#202893](https://github.com/openclaw/openclaw/issues/202893) Keep rerank execution out of provider registration `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#202884](https://github.com/openclaw/openclaw/issues/202884) [Feature]: Let WhatsApp users schedule OpenClaw tasks from a DM `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#202888](https://github.com/openclaw/openclaw/issues/202888) Update failure: package-update (2026.11.1) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#202889](https://github.com/openclaw/openclaw/issues/202889) Keep one Talk configuration test suite across SwiftPM and iOS `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#202822](https://github.com/openclaw/openclaw/issues/202822) [Bug]: Onboarding run through npx prints bare `openclaw` next-step commands, which fail with "command not found" `bug` `bug:behavior` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#202873](https://github.com/openclaw/openclaw/issues/202873) [Feature]: Matrix: send presentation choices as a native poll instead of text `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#202860](https://github.com/openclaw/openclaw/issues/202860) Separate chat presentation activity from transcript rendering `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#202854](https://github.com/openclaw/openclaw/issues/202854) Remove duplicate iOS wake-word matching ownership `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#202859](https://github.com/openclaw/openclaw/issues/202859) Consolidate iOS speech-language selection ownership `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#202857](https://github.com/openclaw/openclaw/issues/202857) Use one connection-state input for iOS chat status `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#202844](https://github.com/openclaw/openclaw/issues/202844) [Feature]: Use one Google music output-format policy for metadata and execution `enhancement` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#202851](https://github.com/openclaw/openclaw/issues/202851) refactor: keep attachment header inspection independent of image encoding `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#202842](https://github.com/openclaw/openclaw/issues/202842) refactor(tts): isolate automatic-mode schema from core config `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#202853](https://github.com/openclaw/openclaw/issues/202853) [Feature]: Keep a condition script's console output when its evaluation fails `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#202849](https://github.com/openclaw/openclaw/issues/202849) refactor(memory): isolate vector checks from cache persistence `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#202847](https://github.com/openclaw/openclaw/issues/202847) Reuse shared Decision provider integration fixtures `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#202761](https://github.com/openclaw/openclaw/issues/202761) [Bug]: PostgreSQL vector search DDL renders index dimensions without checking them `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#202830](https://github.com/openclaw/openclaw/issues/202830) Adding a manifest without activation.onStartup silently stops an enabled standalone plugin file from starting with the Gateway `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#202378](https://github.com/openclaw/openclaw/issues/202378) Expose the resource profile to plugins; Knowledge lazy start for lean `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#202827](https://github.com/openclaw/openclaw/issues/202827) Test iOS speech segmentation without constructing the Talk manager `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#202816](https://github.com/openclaw/openclaw/issues/202816) [Bug]: Plugin counter inc(labels, 0) is dropped, so a label set cannot be exported at 0 before its first event `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#202823](https://github.com/openclaw/openclaw/issues/202823) Give shared iOS agent presentation its own existing owner `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#202820](https://github.com/openclaw/openclaw/issues/202820) [Feature]: Filter automation run history by completion status `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#202821](https://github.com/openclaw/openclaw/issues/202821) Decouple iOS node-service contracts from concrete controllers `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#202814](https://github.com/openclaw/openclaw/issues/202814) Memory import: allow choosing which Claude Code auto-memory collection(s) to import (the 2000-file cap counts every project) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#202811](https://github.com/openclaw/openclaw/issues/202811) Update failure: candidate-doctor (2026.11.5) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#202806](https://github.com/openclaw/openclaw/issues/202806) [Feature]: Let Talk and Discord request GPT-Live-1.1 with ChatGPT sign-in `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#202804](https://github.com/openclaw/openclaw/issues/202804) [Feature]: Filter automation run history by time window `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#202802](https://github.com/openclaw/openclaw/issues/202802) [Bug]: SQLite synchronous-open failures leak broker clients and retained input `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#202796](https://github.com/openclaw/openclaw/issues/202796) [Feature]: Copy a link to a saved automation from its action menu `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#202794](https://github.com/openclaw/openclaw/issues/202794) [Bug]: `openclaw message send --media` fails with AgentSelectionRequiredError on explicit multi-agent gateways despite valid account binding (text-only sends work) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#202699](https://github.com/openclaw/openclaw/issues/202699) [Feature]: Scheduled automations select inference like interactive turns unless explicitly pinned `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#202787](https://github.com/openclaw/openclaw/issues/202787) [Feature]: List archived sessions from the CLI `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#202354](https://github.com/openclaw/openclaw/issues/202354) Logs: delayed wheel scrolling can miss Auto-follow resumption `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#202357](https://github.com/openclaw/openclaw/issues/202357) Cold transcript placement can admit an unmeasured predecessor into normal flow `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#202779](https://github.com/openclaw/openclaw/issues/202779) [Feature]: Show what a backup contains in `openclaw backup verify` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#202772](https://github.com/openclaw/openclaw/issues/202772) [Bug]: Update rollback restores SQLite DBs in journal_mode=DELETE; next update's Doctor fails with maintenance lease sqlite-busy (2026.11.6) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#202375](https://github.com/openclaw/openclaw/issues/202375) Add gateway.resources.profile (auto, standard, lean) with worker diagnostics `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#202763](https://github.com/openclaw/openclaw/issues/202763) [Bug]: Empty-response retry exhaustion (synthetic_no_response) mislabeled as reason="format", incorrectly skips fallback 💬1
- [#202751](https://github.com/openclaw/openclaw/issues/202751) [Docs Bug]: No documented way to try per-person roles on one machine without an identity provider `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#202750](https://github.com/openclaw/openclaw/issues/202750) [Bug]: Rejected trusted-proxy sign-in shows "web app requires device identity" and drops the trusted_proxy reason `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#202749](https://github.com/openclaw/openclaw/issues/202749) [Docs Bug]: Multiplayer "Shared secret" link opens the model provider auth page `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#202742](https://github.com/openclaw/openclaw/issues/202742) [Feature]: Automate verification, upstreamed detection, and upgrade checks for pnpm dependency patches `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#202728](https://github.com/openclaw/openclaw/issues/202728) [Bug]: Profile avatar upload silently does nothing in Control UI (2026.11.6); no users.setAvatar request sent `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#202729](https://github.com/openclaw/openclaw/issues/202729) [Bug]: Telegram polling silent stall → health-monitor restart fails repeatedly with 'still owns running work' (~49 min inbound loss) `P1` `impact:message-loss` 💬1
- [#202721](https://github.com/openclaw/openclaw/issues/202721) [Bug]: Control UI Agent Defaults → Models shows 'Unsupported schema node' — provider modelParamsSchema adds patternProperties the form analyzer rejects `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#202657](https://github.com/openclaw/openclaw/issues/202657) [Bug]: Inbox drops an unacknowledged failed update after a later build starts `bug` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬1
- [#202706](https://github.com/openclaw/openclaw/issues/202706) [Feature]: Show externally managed GitHub access in agent settings `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#202707](https://github.com/openclaw/openclaw/issues/202707) Posted (non-run) messages don't count as session activity, so unread state is missed `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#202705](https://github.com/openclaw/openclaw/issues/202705) Approval cards for claude-cli native tools: show why, read vs write, and what "Always allow" grants `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#202701](https://github.com/openclaw/openclaw/issues/202701) # On macOS, switching to the dev channel picks Apple's Git stub even when Git works in the shell `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#202702](https://github.com/openclaw/openclaw/issues/202702) # Updating an npm install on main took 3 to 5 minutes with current database schemas `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#202700](https://github.com/openclaw/openclaw/issues/202700) # openclaw update --no-restart rolls back when a foreground gateway owns the state and an external agent store needs migration `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `maturity:stable` 💬1
- [#202695](https://github.com/openclaw/openclaw/issues/202695) [Feature]: Tell saved model accounts apart: show the plan and let me rename them `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#202665](https://github.com/openclaw/openclaw/issues/202665) Wide-area DNS discovery publishes an invalid label for long hostnames `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#202693](https://github.com/openclaw/openclaw/issues/202693) Self-learning saves one-time holds and approval rulings as standing learned skills; agents re-learn a retired approval process `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#202669](https://github.com/openclaw/openclaw/issues/202669) [Bug]: A final reply to a steered message ends the run while the message that started it is still unanswered `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#202662](https://github.com/openclaw/openclaw/issues/202662) llama-cpp discovery marks thinking models as non-reasoning when the template lacks reasoning_effort `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#202661](https://github.com/openclaw/openclaw/issues/202661) Remember dismissed automation failures for the same operator across clients `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#202653](https://github.com/openclaw/openclaw/issues/202653) Two Inbox tabs can overwrite each other's dismissals `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#202650](https://github.com/openclaw/openclaw/issues/202650) Dismissing a second failed automation brings the first one back when browser storage is full `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#202642](https://github.com/openclaw/openclaw/issues/202642) Update failure: original-managed-service-compensation (2026.11.5) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#202638](https://github.com/openclaw/openclaw/issues/202638) [Bug]: Codex terminal view copies one character instead of the full link `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#202633](https://github.com/openclaw/openclaw/issues/202633) Update failure: gateway-recovery-verification (2026.11.5) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#202635](https://github.com/openclaw/openclaw/issues/202635) [Bug]: Meme Maker PNG output ignores system Chromium on Linux `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#202625](https://github.com/openclaw/openclaw/issues/202625) [Feature]: Allow pinning native Codex sessions `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#202611](https://github.com/openclaw/openclaw/issues/202611) Update failure: candidate-doctor (2026.11.3) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#202578](https://github.com/openclaw/openclaw/issues/202578) [Bug]: Telegram group gets no notice during a six-minute Codex capacity retry `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#202585](https://github.com/openclaw/openclaw/issues/202585) An isolated --profile Gateway opened the default profile's agent database `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:needs-info` 💬1
- [#202570](https://github.com/openclaw/openclaw/issues/202570) [Feature]: Include recent unquoted Signal group images on a later mention `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#202569](https://github.com/openclaw/openclaw/issues/202569) [Bug]: Terminal commands cannot open legacy session links whose keys resemble short IDs `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#202554](https://github.com/openclaw/openclaw/issues/202554) WhatsApp: quoted-sender label shows raw @lid (jidToE164 called without authDir in inbound/extract.ts) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#202553](https://github.com/openclaw/openclaw/issues/202553) Web chat should explain when a session reaches its subagent limit `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#202543](https://github.com/openclaw/openclaw/issues/202543) [Bug]: memory_search offers corpus=sessions to an agent that cannot search sessions, and its unavailable result's operator advice reaches the end user `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#202482](https://github.com/openclaw/openclaw/issues/202482) [Bug]: A child model fallback notice can replace its completed answer in the parent session `bug` `bug:behavior` `P2` `clawsweeper:source-repro` 💬1
- [#202374](https://github.com/openclaw/openclaw/issues/202374) Set MALLOC_ARENA_MAX=2 for the Gateway on Linux `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#202533](https://github.com/openclaw/openclaw/issues/202533) [Bug]: agent polls long-running work with checks that observe the check itself `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#202528](https://github.com/openclaw/openclaw/issues/202528) [Bug]: Realtime Talk force-agent-consult loses the written conversation thread (injected context is generic/hard-coded) `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#202519](https://github.com/openclaw/openclaw/issues/202519) Queued Goal turn fails OpenAI route selection immediately after successful Codex turn `bug` `regression` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#202484](https://github.com/openclaw/openclaw/issues/202484) Avoid repeated worker compilation across Control UI E2E shards `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#202510](https://github.com/openclaw/openclaw/issues/202510) [Bug]: owner's mid-turn message can't steer the turn that resumes after sessions_yield (requester-mismatch, then execution-settings-changed on CLI) `P2` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬1
- [#202382](https://github.com/openclaw/openclaw/issues/202382) [Bug]: install-cli.sh --json mixes npm's install output into its NDJSON stdout `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#202309](https://github.com/openclaw/openclaw/issues/202309) [Bug]: install-cli.sh finishes without saying ~/.openclaw/bin is not on PATH, so `openclaw onboard` is not found `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` `P0` 💬1
- [#202501](https://github.com/openclaw/openclaw/issues/202501) [Bug] Selected CI tests can inherit an unnecessary runtime build `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#202498](https://github.com/openclaw/openclaw/issues/202498) [Feature]: Decision-model gate for replying to unmentioned group messages `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#202488](https://github.com/openclaw/openclaw/issues/202488) [Feature]: Let the agent ask for browser take-over from chat and resume when control is released `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#202474](https://github.com/openclaw/openclaw/issues/202474) Avoid unused scope analysis in focused boundary lint `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#202473](https://github.com/openclaw/openclaw/issues/202473) [Mac App] node system.run still drops the WebSocket mid-command on 2026.11.5 (loopback, same host). Live repro for #89423 `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#202465](https://github.com/openclaw/openclaw/issues/202465) Reduce repeated compiler startup in core TypeScript boundary checks `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#202470](https://github.com/openclaw/openclaw/issues/202470) [Bug]: On macOS every Gateway restart takes the full agent-DB admission path (lease provenance is Linux-only), serially ~1-2 min per agent `P2` `impact:other` 💬1
- [#202461](https://github.com/openclaw/openclaw/issues/202461) [Bug]: Model setup cannot restore a small config after a failed activation ("OpenClaw blocked this config update") `bug` `bug:behavior` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#202458](https://github.com/openclaw/openclaw/issues/202458) [Bug]: Setup leaves a verified sign-in inactive after installing the provider plugin ("The connection changed before credential activation") `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#202460](https://github.com/openclaw/openclaw/issues/202460) [Bug]: Cached cron script runtime keeps executing against a stopped Docker sandbox container `bug` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬1
- [#202457](https://github.com/openclaw/openclaw/issues/202457) Update failure: gateway-recovery-verification (2026.10.7) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#202441](https://github.com/openclaw/openclaw/issues/202441) Third-party WS channel needs a public way to detach transport authority from post-ACK turn work `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#202440](https://github.com/openclaw/openclaw/issues/202440) WhatsApp outbound send fails with 'No active WhatsApp Web listener' during an app-silent watchdog reconnect instead of waiting for the replacement listener `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#202415](https://github.com/openclaw/openclaw/issues/202415) 2026.11.6: request after a deferred tool call (web_search via tool-search) ends with assistant text on openai-completions providers; Anthropic rejects it as assistant prefill `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#202430](https://github.com/openclaw/openclaw/issues/202430) [Bug]: Self-update blocked after /tmp handoff DB identity changes for a completed activation receipt `bug` `bug:behavior` `P0` `impact:ux-release-blocker` 💬1
- [#202431](https://github.com/openclaw/openclaw/issues/202431) [Bug]: Dashboard agents list lost its search/filter box after 2026.11.6 — regression, please restore (harder to manage many agents) `P2` `impact:ux-friction` 💬1
- [#202418](https://github.com/openclaw/openclaw/issues/202418) [Bug]: Repeated HTTP 429s abort interactive turns before the first configured model fallback `P2` `impact:auth-provider` 💬1
- [#202413](https://github.com/openclaw/openclaw/issues/202413) Update failure: update (2026.11.5) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#202311](https://github.com/openclaw/openclaw/issues/202311) Let administrators manage an existing profile’s assigned role from chat `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#202405](https://github.com/openclaw/openclaw/issues/202405) [Bug]: HTTP pool shutdown fallback leaves active streams and Node alive (2026.11.5 / 2026.11.6) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#202406](https://github.com/openclaw/openclaw/issues/202406) [Bug]: Claude bundle commands disappear when the manifest names a Markdown file `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#202287](https://github.com/openclaw/openclaw/issues/202287) [Feature]: consolidate heap totals in agent benchmarks `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#202393](https://github.com/openclaw/openclaw/issues/202393) [Bug]: managed worktree creation fails on PostgreSQL: column reference "owner" is ambiguous in capacity reservation upsert `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#202394](https://github.com/openclaw/openclaw/issues/202394) [Bug]: worktrees.remove on PostgreSQL fails with "must run in a worker" (assertWorktreeRemovalAvailable and removal claims guard read state_leases on the main thread) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#202350](https://github.com/openclaw/openclaw/issues/202350) [Bug]: Intentional heartbeat skip (empty scratch) is recorded as failed and spams "did not start" error `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#202395](https://github.com/openclaw/openclaw/issues/202395) [Bug]: image_generate in a cron run loops forever on "cron run completion handoffs are reserved for server-owned callers" `P2` `impact:other` 💬1
- [#202386](https://github.com/openclaw/openclaw/issues/202386) [Bug]: bundle LSP tools disappear when a server prompt reuses the initialize id `no-stale` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` 💬1
- [#202372](https://github.com/openclaw/openclaw/issues/202372) gpt-6.2 on the ChatGPT (Codex) Responses route: system prompt in `instructions` is never prompt-cached; same request on gpt-6.1 caches fully `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#202373](https://github.com/openclaw/openclaw/issues/202373) Lean Gateway resource profile for small machines `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `impact:crash-loop` 💬1
- [#202376](https://github.com/openclaw/openclaw/issues/202376) Lean: admit worker growth only within a memory budget, across every worker family `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `impact:crash-loop` 💬1
- [#202379](https://github.com/openclaw/openclaw/issues/202379) Lean: measure and ship further lean-only memory reductions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🦪 silver shellfish` 💬1
- [#202377](https://github.com/openclaw/openclaw/issues/202377) Lean: shared core worker host that shares code, not state `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#202365](https://github.com/openclaw/openclaw/issues/202365) [Feature]: Plugin session forks on a CLI runtime fork the native CLI session `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#202367](https://github.com/openclaw/openclaw/issues/202367) Update failure: update (2026.11.10-beta.1) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#202364](https://github.com/openclaw/openclaw/issues/202364) [Bug]: Google Chat spaces, Buzz threads and other channels lose the verified sender because their two conversation descriptions disagree `P2` `clawsweeper:source-repro` `impact:security` `issue-rating: 🦞 diamond lobster` 💬1
- [#202355](https://github.com/openclaw/openclaw/issues/202355) Skills mutation test can time out before its lazy detail dialog loads `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#202356](https://github.com/openclaw/openclaw/issues/202356) Inline-output browser test can poll subscription before its renderer is ready `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#202358](https://github.com/openclaw/openclaw/issues/202358) Smooth-scroll retarget test can reject an already-reached shortened endpoint `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `clawsweeper:needs-live-repro` 💬1
- [#202344](https://github.com/openclaw/openclaw/issues/202344) [Bug]: Cached chat reader jumps during a pending history refresh `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#202351](https://github.com/openclaw/openclaw/issues/202351) [Bug]: Pinned sessions are global — every agent shows the same pins and agent scope is ignored `P2` `impact:ux-friction` 💬1
- [#202316](https://github.com/openclaw/openclaw/issues/202316) Manual qualification skips lint for changed root tests `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#202332](https://github.com/openclaw/openclaw/issues/202332) Traditional Chinese docs sidebar falls back to English `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#202331](https://github.com/openclaw/openclaw/issues/202331) gateway status exits 0 when the Gateway is unreachable, so readiness checks built on it report success on a dead Gateway `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#202321](https://github.com/openclaw/openclaw/issues/202321) Owner-scoped tools (e.g. a2a) unavailable in requester-settle continuation after sessions_yield (senderIsOwner=false) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#202267](https://github.com/openclaw/openclaw/issues/202267) [Bug]: Paired macOS desktop stream closes with 1009 — node stream transport sends >64 KiB frames but Gateway attach maxPayload is 64 KiB `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#202320](https://github.com/openclaw/openclaw/issues/202320) [Bug]: Queued user messages vanish from chat transcript after Gateway restart mid-run (requester authority changed) `P2` `impact:session-state` 💬1
- [#202307](https://github.com/openclaw/openclaw/issues/202307) /goal with a misspelled subcommand silently starts a new goal instead of being rejected `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#202289](https://github.com/openclaw/openclaw/issues/202289) ci: attribute iOS comparison preparation delays and sampling gaps `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#202305](https://github.com/openclaw/openclaw/issues/202305) [Bug]: OpenAI OAuth image generation: custom sizes snapped to square; 4K request yields ~1.5MP; reported size not measured `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#202294](https://github.com/openclaw/openclaw/issues/202294) [Feature]: Warn when a skill's retired metadata.clawdbot block is being ignored `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#202296](https://github.com/openclaw/openclaw/issues/202296) Homebrew loses Gateway egress proxy CA when it filters subprocess environment `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬1
- [#202292](https://github.com/openclaw/openclaw/issues/202292) [Bug]: replies to sessions_create sessions' sessions_send reports are hidden as subagent coordination `bug` `P1` `clawsweeper:source-repro` `impact:message-loss` 💬1
- [#202261](https://github.com/openclaw/openclaw/issues/202261) [Bug]: Notices above the chat composer use mismatched styles `bug` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#202268](https://github.com/openclaw/openclaw/issues/202268) [Feature]: Move a conversation that has no project into one `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#202270](https://github.com/openclaw/openclaw/issues/202270) Active goal keeps posting continuation replies to Discord after context budget is exhausted `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#202263](https://github.com/openclaw/openclaw/issues/202263) # Let one parent run up to 100 ordinary subagents `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#202258](https://github.com/openclaw/openclaw/issues/202258) [Bug]: Bootstrap-token connect fails with 'duplicate column name: setup_id' when device_bootstrap_tokens already has the column `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `P0` 💬1
- [#202257](https://github.com/openclaw/openclaw/issues/202257) sessions_send to agy-cli session: "CLI transcript compaction failed ... agent tool caller authority is no longer active" after every completed reply `bug` `regression` `P2` `clawsweeper:no-new-fix-pr` 💬1

#### 🔒 Closed Issues
- [#162914](https://github.com/openclaw/openclaw/issues/162914) [Bug]: Intermittent "Aborted | sandbox_provisioning" run failures 5 to 7 s after start with rootless Podman sandbox
- [#185064](https://github.com/openclaw/openclaw/issues/185064) [Bug]: GPT-6.1 Terra available in native Codex catalog but fails route/auth preparation while Astra works
- [#186326](https://github.com/openclaw/openclaw/issues/186326) [Bug]: Windows managed update hits handoff SQLite file-lock timeout after npm layout repair (2026.10.10-beta.3 → beta.4)
- [#176187](https://github.com/openclaw/openclaw/issues/176187) memory-core: sparse vec0 allocation amplifies KNN reads and exceeds memory_search deadline (2026.10.1)
- [#170428](https://github.com/openclaw/openclaw/issues/170428) [Bug]: iOS app has no working way to reduce native chat text size; Settings -> Appearance -> Text size does not apply or persist
- [#202246](https://github.com/openclaw/openclaw/issues/202246) 2026.11.6: goal-continuation prompts repeatedly produce duplicate reminder messages in Discord
- [#165312](https://github.com/openclaw/openclaw/issues/165312) [Bug]: Browser tab stays blocked after one screenshot timeout ("previous screenshot or emulation action was cancelled but is still running")
- [#201993](https://github.com/openclaw/openclaw/issues/201993) [Bug]: 2026.11.1 backup probe timeout blocks self-upgrade to releases containing the fix
- [#201982](https://github.com/openclaw/openclaw/issues/201982) Update failure: package-update (2026.11.1)
- [#158103](https://github.com/openclaw/openclaw/issues/158103) msteams: stream finalize rejected by Teams, answer delivered twice (table degraded to code block)
- [#186716](https://github.com/openclaw/openclaw/issues/186716) [Bug]: Tool Search `tools` mode answers a direct call to a deferred tool with a bare "Tool <name> not found"
- [#202037](https://github.com/openclaw/openclaw/issues/202037) [Bug]: openclaw dashboard can never start or install the Gateway (--yes and the start prompt are unreachable)
- [#201980](https://github.com/openclaw/openclaw/issues/201980) Update failure: package-update (2026.11.2)
- [#202467](https://github.com/openclaw/openclaw/issues/202467) [Bug]: Control UI freezes in WebKit when opening the Sessions filter menu (Linux app 2026.11.6)
- [#202384](https://github.com/openclaw/openclaw/issues/202384) [Bug]: transient doctor-contract load failure ("Plugin source changed while preparing its reload") is reported as an "immutable action order and authority" refusal, fails the update and leaves the Gateway stopped
- [#202248](https://github.com/openclaw/openclaw/issues/202248) doctor --fix --non-interactive exits non-zero with unnamed "plugin load errors"; entrypoint never starts the Gateway (containerized 502 livelock)
- [#202210](https://github.com/openclaw/openclaw/issues/202210) Make plugin preparation callback timeout configurable (hardcoded 15s fails valid local plugins on Windows)
- [#196857](https://github.com/openclaw/openclaw/issues/196857) Code Mode catalog search taints the turn with no network call, so memory writes become permanently untrusted
- [#202366](https://github.com/openclaw/openclaw/issues/202366) Session rejects chat.send with SessionMutationFactsUnavailableError after its SQLite store worker dies mid-write
- [#199691](https://github.com/openclaw/openclaw/issues/199691) CLI and TUI won't connect through `gateway.remote.edgeAuth` without a Gateway token, so a Cloudflare Access user can't send the first pairing request
- [#202499](https://github.com/openclaw/openclaw/issues/202499) Native Codex automation update rejects fresh owner turn with undifferentiated creator-authority error
- [#202523](https://github.com/openclaw/openclaw/issues/202523) Prompt cache: worker-environment turns re-render the system prompt each turn
- [#202615](https://github.com/openclaw/openclaw/issues/202615) sessions_send: accept `text` as an alias for `message`, like the message tool does
- [#202595](https://github.com/openclaw/openclaw/issues/202595) Skip unused forced-exit scope maps in CI
- [#202562](https://github.com/openclaw/openclaw/issues/202562) Reduce repeated reference scans in CI assertion lint
- [#201986](https://github.com/openclaw/openclaw/issues/201986) iOS: guide new users who don't have a Gateway yet
- [#179563](https://github.com/openclaw/openclaw/issues/179563) [Bug]: npm git-source pack leaks its temp directory when the step runner throws
- [#202150](https://github.com/openclaw/openclaw/issues/202150) Prompt cache: a turn after a config.patch reload moves mid-session skills into the system prompt and drops their delta messages
- [#202059](https://github.com/openclaw/openclaw/issues/202059) [Bug]: Discord managed update handoff loses SQLite aggregate causes and fails before staging on Windows 11.5
- [#202021](https://github.com/openclaw/openclaw/issues/202021) Docker image 2026.11.6: /home/node is now 0700 (trixie base), breaks running as a non-1000 uid (EACCES on onboard)
- [#202265](https://github.com/openclaw/openclaw/issues/202265) Gateway stays stopped after a failed update check from 2026.9.37 to 2026.11.6
- [#202023](https://github.com/openclaw/openclaw/issues/202023) [Bug]: reset --scope config+creds+sessions deletes config and credentials while an unmanaged Gateway still owns the state
- [#202908](https://github.com/openclaw/openclaw/issues/202908) Matrix: session-binding bind() drops plugin metadata, so plugin-owned bindings fail ("plugin binding was created without plugin metadata")
- [#202872](https://github.com/openclaw/openclaw/issues/202872) refactor(ui): keep workspace link helpers private
- [#202819](https://github.com/openclaw/openclaw/issues/202819) refactor: separate transcript summary data from generation
- [#202822](https://github.com/openclaw/openclaw/issues/202822) [Bug]: Onboarding run through npx prints bare `openclaw` next-step commands, which fail with "command not found"
- [#200361](https://github.com/openclaw/openclaw/issues/200361) Trusted-proxy auth behind Cloudflare Access trusts identity headers without verifying the Access JWT
- [#202761](https://github.com/openclaw/openclaw/issues/202761) [Bug]: PostgreSQL vector search DDL renders index dimensions without checking them
- [#202378](https://github.com/openclaw/openclaw/issues/202378) Expose the resource profile to plugins; Knowledge lazy start for lean
- [#202354](https://github.com/openclaw/openclaw/issues/202354) Logs: delayed wheel scrolling can miss Auto-follow resumption
- [#202357](https://github.com/openclaw/openclaw/issues/202357) Cold transcript placement can admit an unmeasured predecessor into normal flow
- [#202375](https://github.com/openclaw/openclaw/issues/202375) Add gateway.resources.profile (auto, standard, lean) with worker diagnostics
- [#202763](https://github.com/openclaw/openclaw/issues/202763) [Bug]: Empty-response retry exhaustion (synthetic_no_response) mislabeled as reason="format", incorrectly skips fallback
- [#202729](https://github.com/openclaw/openclaw/issues/202729) [Bug]: Telegram polling silent stall → health-monitor restart fails repeatedly with 'still owns running work' (~49 min inbound loss)
- [#202657](https://github.com/openclaw/openclaw/issues/202657) [Bug]: Inbox drops an unacknowledged failed update after a later build starts
- [#200604](https://github.com/openclaw/openclaw/issues/200604) [Bug]: Doctor recommends database restore for temporary snapshot ENOSPC
- [#202032](https://github.com/openclaw/openclaw/issues/202032) [Bug]: doctor's fallback hint says to use config unset, but config unset refuses invalid configs and points back to doctor
- [#202026](https://github.com/openclaw/openclaw/issues/202026) [Bug]: uninstall/reset print "Removed <path>" for paths that never existed (e.g. /Applications/OpenClaw.app)
- [#202005](https://github.com/openclaw/openclaw/issues/202005) [Bug]: models auth --agent help says "default: configured default agent", but auth mutations require --agent with multiple agents
- [#201573](https://github.com/openclaw/openclaw/issues/201573) [Bug]: database port calls setval(seq, 0) for AUTOINCREMENT tables with sqlite_sequence = 0, aborting the port
- [#175333](https://github.com/openclaw/openclaw/issues/175333) [Bug]: openclaw configure, classic onboarding and agents add save new channel tokens as plaintext in openclaw.json
- [#202008](https://github.com/openclaw/openclaw/issues/202008) [Bug]: status --deep during Gateway startup says Checks "skipped (use --deep)"
- [#201992](https://github.com/openclaw/openclaw/issues/201992) [Docs Bug]: doctor checks page says --fix refuses retired sandbox registry files, but doctor archives them
- [#202038](https://github.com/openclaw/openclaw/issues/202038) [Bug]: TUI/gateway pairing messages say "devices approve --latest … then retry", but --latest only previews
- [#202039](https://github.com/openclaw/openclaw/issues/202039) [Docs Bug]: Raspberry Pi guide opens the printed dashboard URL over SSH, which has no pairing/auth
- [#202482](https://github.com/openclaw/openclaw/issues/202482) [Bug]: A child model fallback notice can replace its completed answer in the parent session
- [#202374](https://github.com/openclaw/openclaw/issues/202374) Set MALLOC_ARENA_MAX=2 for the Gateway on Linux
- [#202484](https://github.com/openclaw/openclaw/issues/202484) Avoid repeated worker compilation across Control UI E2E shards
- [#202382](https://github.com/openclaw/openclaw/issues/202382) [Bug]: install-cli.sh --json mixes npm's install output into its NDJSON stdout
- [#202309](https://github.com/openclaw/openclaw/issues/202309) [Bug]: install-cli.sh finishes without saying ~/.openclaw/bin is not on PATH, so `openclaw onboard` is not found
- [#202474](https://github.com/openclaw/openclaw/issues/202474) Avoid unused scope analysis in focused boundary lint
- [#202465](https://github.com/openclaw/openclaw/issues/202465) Reduce repeated compiler startup in core TypeScript boundary checks
- [#202470](https://github.com/openclaw/openclaw/issues/202470) [Bug]: On macOS every Gateway restart takes the full agent-DB admission path (lease provenance is Linux-only), serially ~1-2 min per agent
- [#202415](https://github.com/openclaw/openclaw/issues/202415) 2026.11.6: request after a deferred tool call (web_search via tool-search) ends with assistant text on openai-completions providers; Anthropic rejects it as assistant prefill
- [#202430](https://github.com/openclaw/openclaw/issues/202430) [Bug]: Self-update blocked after /tmp handoff DB identity changes for a completed activation receipt
- [#202431](https://github.com/openclaw/openclaw/issues/202431) [Bug]: Dashboard agents list lost its search/filter box after 2026.11.6 — regression, please restore (harder to manage many agents)
- [#202418](https://github.com/openclaw/openclaw/issues/202418) [Bug]: Repeated HTTP 429s abort interactive turns before the first configured model fallback
- [#202311](https://github.com/openclaw/openclaw/issues/202311) Let administrators manage an existing profile’s assigned role from chat
- [#202287](https://github.com/openclaw/openclaw/issues/202287) [Feature]: consolidate heap totals in agent benchmarks
- [#202118](https://github.com/openclaw/openclaw/issues/202118) [Bug]: Claude CLI progress notes show as replies in the Control UI
- [#202350](https://github.com/openclaw/openclaw/issues/202350) [Bug]: Intentional heartbeat skip (empty scratch) is recorded as failed and spams "did not start" error
- [#202395](https://github.com/openclaw/openclaw/issues/202395) [Bug]: image_generate in a cron run loops forever on "cron run completion handoffs are reserved for server-owned callers"
- [#202351](https://github.com/openclaw/openclaw/issues/202351) [Bug]: Pinned sessions are global — every agent shows the same pins and agent scope is ignored
- [#202316](https://github.com/openclaw/openclaw/issues/202316) Manual qualification skips lint for changed root tests
- [#202267](https://github.com/openclaw/openclaw/issues/202267) [Bug]: Paired macOS desktop stream closes with 1009 — node stream transport sends >64 KiB frames but Gateway attach maxPayload is 64 KiB
- [#202320](https://github.com/openclaw/openclaw/issues/202320) [Bug]: Queued user messages vanish from chat transcript after Gateway restart mid-run (requester authority changed)
- [#202307](https://github.com/openclaw/openclaw/issues/202307) /goal with a misspelled subcommand silently starts a new goal instead of being rejected
- [#201526](https://github.com/openclaw/openclaw/issues/201526) [Feature]: Unify OpenClaw ID member roles on the Gateway profile; close invited-member authority leaks
- [#202289](https://github.com/openclaw/openclaw/issues/202289) ci: attribute iOS comparison preparation delays and sampling gaps
- [#202261](https://github.com/openclaw/openclaw/issues/202261) [Bug]: Notices above the chat composer use mismatched styles
- [#201963](https://github.com/openclaw/openclaw/issues/201963) fix(test): preserve main-session RPC failures and observe event waiters
- [#201953](https://github.com/openclaw/openclaw/issues/201953) refactor(perf): reuse filesystem counters in sandbox benchmarks

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 265,019 · **Open issues:** 54,175 · **Last push:** 1h ago

On November 20, 2026, Hermes Agent released a new canary version, v0.23.3+canary.20261120T064609Z. This version includes a fix for the `skill_view` dedup entry, ensuring models that only encountered previews can now properly release skills. Notably, several new issues were reported, including a critical bug (#158266) involving a `ModuleNotFoundError` for 'hermes_state_runtime' triggered by chat requests, which may significantly impact user experience. Additionally, a control socket issue (#158441) was raised regarding a hard timeout that causes crashes under concurrent load, highlighting potential stability concerns.

#### 🚀 New Releases
- [v0.23.3+canary.20261120T064609Z](https://github.com/nousresearch/hermes-agent/releases/tag/v0.23.3%2Bcanary.20261120T064609Z) Hermes Agent canary v0.23.3+canary.20261120T064609Z

#### ✅ Merged PRs
- [#151194](https://github.com/NousResearch/hermes-agent/pull/151194) fix(skills): release a skill_view dedup entry the model only saw as a preview

#### 🐛 New Issues
- [#158266](https://github.com/NousResearch/hermes-agent/issues/158266) [Bug]: ModuleNotFoundError: No module named 'hermes_state_runtime' on every chat request (image digest sha256:3e9fe4c6ef36...) `type/bug` `comp/gateway` `P2` `area/sessions` 💬2
- [#158441](https://github.com/NousResearch/hermes-agent/issues/158441) control socket: 2s hard timeout turns "receipt not yet terminal" into a crashed kanban worker under concurrent load `type/bug` `comp/gateway` `tool/file` `area/config` 💬1
- [#158431](https://github.com/NousResearch/hermes-agent/issues/158431) probe `P3` 💬1
- [#158416](https://github.com/NousResearch/hermes-agent/issues/158416) [Feature]: Spoiler images in gateway replies via ||![alt](url)|| (Discord and Telegram) `type/feature` `comp/gateway` `platform/telegram` `platform/discord` 💬1
- [#158371](https://github.com/NousResearch/hermes-agent/issues/158371) kanban: live comment injection skips every comment signed with the worker's profile name, so the same agent's chat session can't steer its running card `type/bug` `comp/tools` `comp/cron` `comp/plugins` 💬1
- [#158383](https://github.com/NousResearch/hermes-agent/issues/158383) [Bug]: Cron jobs on the managed llama.cpp runtime store provider 'custom' and 401 on every run `type/bug` `comp/cli` `comp/cron` `area/auth` 💬1
- [#158390](https://github.com/NousResearch/hermes-agent/issues/158390) [Bug][Mobile iOS beta] Live Activity stays on "Thinking · 0 tools": relay /activity reports never reach the lock screen `type/bug` `comp/gateway` `P2` 💬1
- [#158456](https://github.com/NousResearch/hermes-agent/issues/158456) Gateway: evicting the agent after a provider fallback never releases it (memory provider writer threads accumulate) `type/perf` `comp/gateway` `tool/memory` `P2`
- [#158448](https://github.com/NousResearch/hermes-agent/issues/158448) [Feature]: Allow per-call reasoning effort in the plugin LLM API `type/feature` `comp/agent` `comp/plugins` `P3`
- [#158452](https://github.com/NousResearch/hermes-agent/issues/158452) kanban complete: name the missing PR proof instead of "unknown id or terminal state" `type/bug` `comp/cli` `P2`
- [#158451](https://github.com/NousResearch/hermes-agent/issues/158451) worktree sweep: skip a tree whose session spoke recently (worktrees.session_idle_hours) `type/bug` `comp/cli` `area/config` `P2`
- [#158439](https://github.com/NousResearch/hermes-agent/issues/158439) [Bug]: Ctrl+C landing during the TUI exit summary prints a raw KeyboardInterrupt traceback instead of the resume hint `type/bug` `comp/cli` `P2`
- [#158435](https://github.com/NousResearch/hermes-agent/issues/158435) diagnostic - deleting `comp/tools` `P3`
- [#158434](https://github.com/NousResearch/hermes-agent/issues/158434) [Vision] Preserve fine UI/rendering defects: opt-in high-fidelity screenshot mode (2K → 720p, lossy JPEG) `type/feature` `comp/tools` `tool/browser` `tool/vision`
- [#158430](https://github.com/NousResearch/hermes-agent/issues/158430) Support question: completed-delegation linkage lookup and normal approval workflow `comp/tools` `tool/delegate` `P3` `area/sessions`
- [#158426](https://github.com/NousResearch/hermes-agent/issues/158426) [Feature]: Public API for the write-approval queue (Desktop review plugin) `type/feature` `comp/tools` `tool/memory` `P3`
- [#158142](https://github.com/NousResearch/hermes-agent/issues/158142) Canary E2E on 32dbc1dcda2255fd35969ec99cfc0170988c3eca is red (4 jobs) `type/bug` `P3` `comp/desktop` `area/install-update`
- [#158409](https://github.com/NousResearch/hermes-agent/issues/158409) Native user images are sent full-size and never budget-evicted, causing 413 on ~10 MB-capped providers `type/bug` `comp/agent` `tool/file` `P2`
- [#158403](https://github.com/NousResearch/hermes-agent/issues/158403) [Bug]: pm worker tests fail on macOS 27: the range test server's listen backlog overflows `type/bug` `P3` `os/macos`
- [#158405](https://github.com/NousResearch/hermes-agent/issues/158405) [Bug]: desktop:all and the HUD toolchain test assume an x64 Linux host `type/bug` `P2` `comp/desktop`
- [#158404](https://github.com/NousResearch/hermes-agent/issues/158404) [Bug]: ui-tui fast-echo tests fail inside tmux because TERM is not stubbed `type/bug` `comp/tui` `tool/file` `P2`
- [#158400](https://github.com/NousResearch/hermes-agent/issues/158400) search_files: missing-path suggestion lookup has no timeout, can block for the full terminal timeout (180s) on macOS protected folders `type/perf` `comp/tools` `tool/terminal` `tool/file`
- [#158398](https://github.com/NousResearch/hermes-agent/issues/158398) [Feature]: Inquiry regarding non-linear scaling constants in recursive transformer architectures ( ϕ ϕ-optimization) `P3`
- [#158397](https://github.com/NousResearch/hermes-agent/issues/158397) Kanban: verdict refused after another actor closed the review run gives a generic error, and the closing event has no actor `type/bug` `comp/tools` `comp/cron` `comp/plugins`
- [#158396](https://github.com/NousResearch/hermes-agent/issues/158396) Kanban goal gate tells workers to create continuations with parents=[this task], which strands the child if the task then blocks `type/bug` `comp/tools` `comp/cron` `comp/plugins`
- [#158395](https://github.com/NousResearch/hermes-agent/issues/158395) Kanban goal gate rejects a handoff when the judge reply is not valid JSON (an unreachable judge fails open) `type/bug` `comp/cli` `comp/tools` `comp/cron`

#### 🔒 Closed Issues
- [#148023](https://github.com/NousResearch/hermes-agent/issues/148023) [Bug]: Gateway self-restart loop — startup native-session recovery blocks the event loop, watchdog exits 75 before startup completes
- [#158266](https://github.com/NousResearch/hermes-agent/issues/158266) [Bug]: ModuleNotFoundError: No module named 'hermes_state_runtime' on every chat request (image digest sha256:3e9fe4c6ef36...)
- [#46005](https://github.com/NousResearch/hermes-agent/issues/46005) Skill description YAML bug (15 files) + 57-char truncation too restrictive for CJK
- [#158431](https://github.com/NousResearch/hermes-agent/issues/158431) probe
- [#158435](https://github.com/NousResearch/hermes-agent/issues/158435) diagnostic - deleting
- [#151192](https://github.com/NousResearch/hermes-agent/issues/151192) [Bug]: skill_view returns the "unchanged" stub after its first result was spilled to a preview
- [#158142](https://github.com/NousResearch/hermes-agent/issues/158142) Canary E2E on 32dbc1dcda2255fd35969ec99cfc0170988c3eca is red (4 jobs)

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 97,289 · **Open issues:** 10,799 · **Last push:** 2h ago

On November 21, 2026, there were no new releases for vLLM; however, several important updates were merged. Key changes included a bugfix for the ROCm platform addressing KV-scale factors for compressed tensors (#66586) and support for HY4 Flash within the HiSparse backend (#69026). Additionally, an encoder-only attention hooks feature for model layouts was introduced (#67798), enhancing flexibility in model training. A notable issue raised today involved a KeyError when loading GLM-5.3 with specific configurations in the AMD DeepSeek V3.2 loader (#68919), underscoring ongoing challenges related to model compatibility.

#### ✅ Merged PRs
- [#69023](https://github.com/vllm-project/vllm/pull/69023) [Bugfix][DSv4.1] Read the DSpark draft's native mega MoE flag from its layers
- [#69026](https://github.com/vllm-project/vllm/pull/69026) [HiSparse] Support HY4 Flash
- [#67798](https://github.com/vllm-project/vllm/pull/67798) [Feature] Encoder-only attention hooks for model-owned layouts
- [#68760](https://github.com/vllm-project/vllm/pull/68760) [Benchmark] Add decisions backends to vllm bench serve
- [#66586](https://github.com/vllm-project/vllm/pull/66586) [Bugfix][ROCm] Apply the e4m3fnuz KV-scale factor for compressed-tensors
- [#61214](https://github.com/vllm-project/vllm/pull/61214) [ROCm][MoE] Add AITER Triton MXFP8 MoE backend for gfx942
- [#65935](https://github.com/vllm-project/vllm/pull/65935) [Bugfix][ROCm] benchmark_moe: keep HIP_VISIBLE_DEVICES for Ray
- [#68351](https://github.com/vllm-project/vllm/pull/68351) [Bugfix][Model Loader] Prefetch the whole checkpoint into every node's page cache
- [#63725](https://github.com/vllm-project/vllm/pull/63725) [ROCm][Perf][Muse Spark] Run the pooler and unpooler through the default ROCm GEMM dispatch on gfx942 and gfx950
- [#68012](https://github.com/vllm-project/vllm/pull/68012) [ROCm] Warm the AITER FA extend kernels from the attention backend
- [#60839](https://github.com/vllm-project/vllm/pull/60839) [ROCm][Bugfix] Keep non-float all-reduces off AITER custom all-reduce
- [#67572](https://github.com/vllm-project/vllm/pull/67572) [Doc] Make CUDA 13 the default in the GPU install guide
- [#68987](https://github.com/vllm-project/vllm/pull/68987) Revert "[ROCm][CI] Retarget `mi300_dpx` jobs to `mi300_1` queue temporarily"
- [#68528](https://github.com/vllm-project/vllm/pull/68528) [ROCm][CI] Don't run every AMD step on files only the CUDA build reads
- [#69039](https://github.com/vllm-project/vllm/pull/69039) [Recipe] Inkling 2 Mini: serve the full 1M context on one GPU
- [#69025](https://github.com/vllm-project/vllm/pull/69025) [ROCm][Bugfix] Avoid MIOpen's split-K conv solver in batch-invariant mode
- [#69019](https://github.com/vllm-project/vllm/pull/69019) [Rust Frontend] Support `additional_tools` input items in the Responses API
- [#68527](https://github.com/vllm-project/vllm/pull/68527) [ROCm][CI] Give apt a longer retry window in ROCm image builds
- [#68917](https://github.com/vllm-project/vllm/pull/68917) [Bugfix][Frontend] Read /v1/decisions predicates like /v1/systemone noul questions
- [#69027](https://github.com/vllm-project/vllm/pull/69027) [Recipe] Add Inkling 2 Mini
- [#68991](https://github.com/vllm-project/vllm/pull/68991) [Build] Relax PyNvVideoCodec pin to >=2.2.4 to resolve CVEs
- [#68789](https://github.com/vllm-project/vllm/pull/68789) [Misc] Remove --disable-cascade-attn past its removal version
- [#60648](https://github.com/vllm-project/vllm/pull/60648) [feat] Add Omni support to the Transformers backend
- [#68006](https://github.com/vllm-project/vllm/pull/68006) [Refactor] Use `FULL` instead of `NONE` during MR V2 full-graph capture
- [#68798](https://github.com/vllm-project/vllm/pull/68798) [Spec Decode] Derive speculator behavior from SpeculatorConfig instead of method checks
- [#68785](https://github.com/vllm-project/vllm/pull/68785) [HiSparse] Store one copy of the offloaded indexer across TP ranks
- [#67550](https://github.com/vllm-project/vllm/pull/67550) [ROCm][Model][Perf] Fold the k_out dequant and fp8 query quant into the QK-norm+RoPE+KV-cache fusion for ROCM_AITER_FA, ROCM_ATTN, and ROCM_AITER_UNIFIED_ATTN
- [#68975](https://github.com/vllm-project/vllm/pull/68975) [Model] Use upstream Transformers configs for Inkling
- [#68781](https://github.com/vllm-project/vllm/pull/68781) [Bugfix][Frontend] Hoist `additional_tools` input items into Responses tools
- [#68859](https://github.com/vllm-project/vllm/pull/68859) [Bugfix][Benchmark] Forward --seed to the spec_bench and speed_bench datasets
- [#68967](https://github.com/vllm-project/vllm/pull/68967) [Bugfix][HiSparse] Emit the prefill staging plan without a dense prefill backend
- [#68702](https://github.com/vllm-project/vllm/pull/68702) [Model] Voxtral: drop the unused model field from TranscriptionRequest
- [#68989](https://github.com/vllm-project/vllm/pull/68989) [Bugfix] Reject stop strings when the generate server has no tokenizer
- [#68981](https://github.com/vllm-project/vllm/pull/68981) [Docs] Add stecasta to reviewers
- [#68554](https://github.com/vllm-project/vllm/pull/68554) [Bugfix][ROCm] Give EngineCore the cleanup grace window when shutdown has no budget
- [#68829](https://github.com/vllm-project/vllm/pull/68829) [ROCm][CI] Retry ROCm image builds when a package mirror still fails after apt's retries

#### 🐛 New Issues
- [#68919](https://github.com/vllm-project/vllm/issues/68919) [Bug][ROCm] GLM-5.3 with `index_topk_freq` > 1 dies at load in the AMD DeepSeek V3.2 loader: `KeyError 'layers.14.self_attn.indexer.k_norm.weight'` (v0.31.0 to v0.34.0) `rocm` `deepseek` `glm` 💬3
- [#69058](https://github.com/vllm-project/vllm/issues/69058) [Bug]: HF3FS connector reports a failed load as finished and never returns the failed block IDs `rocm` 💬2
- [#69063](https://github.com/vllm-project/vllm/issues/69063) [Bug]: follow-up to #55451: unreadable image_embeds payloads still return 500 (prompt_embeds returns 400 for the same bytes) `rocm` 💬2
- [#69030](https://github.com/vllm-project/vllm/issues/69030) [RFC]: Deprecate and remove the TorchAO quantization backend `quantization` 💬2
- [#68920](https://github.com/vllm-project/vllm/issues/68920) [Performance][ROCm] GLM-5.3 runs with no CUDA graphs on mixed steps on gfx942 since the ROCm breakable default was emptied, `VLLM_USE_BREAKABLE_CUDAGRAPH=1` wins back 3 to 9% of decode (v0.32.0 to v0.34.0) `rocm` `glm` 💬2
- [#68890](https://github.com/vllm-project/vllm/issues/68890) [Feature]: Support attention-only LoRA under MRV2 prefill context parallelism (PCP) 💬2
- [#69012](https://github.com/vllm-project/vllm/issues/69012) [Bug]: Inkling 2 Small on SM12x (GB10 / DGX Spark): serves at TP8/EP8 over 8 nodes on the Hopper path, but the router's `k_group_partials` needs 196,868 B of shared memory from 2,048 tokens a step and the vision encoder calls FA3 `inkling` 💬1
- [#69010](https://github.com/vllm-project/vllm/issues/69010) [Feature]: Use Ruff banned-api to block torch.cuda calls 💬1
- [#69024](https://github.com/vllm-project/vllm/issues/69024) [Bug]: KV offload, hybrid models: after a request loads a prompt-tail checkpoint from the CPU tier, the rest of that chunk is never stored 💬1
- [#69038](https://github.com/vllm-project/vllm/issues/69038) [Bug]: After a KV connector loads the whole prompt, the recomputed last token is still reported as cached (cached_tokens == prompt_tokens, local_compute +0) 💬1
- [#68885](https://github.com/vllm-project/vllm/issues/68885) [Bug][Multimodal] Muse-Spark-Open: encoder profiling uses a 4-frame dummy while the model samples up to 600 — a single max-length video OOMs all TP ranks `multi-modality` 💬1
- [#68893](https://github.com/vllm-project/vllm/issues/68893) [RFC]: Fault-tolerant sharded RDT weight sync: continue on surviving inference engines `RFC` 💬1
- [#69067](https://github.com/vllm-project/vllm/issues/69067) [RFC]: End-to-end multimodal CI coverage for the Rust frontend `multi-modality` `rust`
- [#69047](https://github.com/vllm-project/vllm/issues/69047) [Bug]: Illegal memory access with Qwen3.5-family MTP (method=mtp, k=3) when two engines share one H200 under CUDA MPS (v0.33.0)
- [#69046](https://github.com/vllm-project/vllm/issues/69046) [Bug]: Inkling 2 Mini Docker image missing H100 CUDA kernels `bug` `inkling`
- [#68914](https://github.com/vllm-project/vllm/issues/68914) [Bug]: /v1/decisions reads `predicate` as a lettered choice, unlike /v1/systemone `noul`
- [#68876](https://github.com/vllm-project/vllm/issues/68876) [RFC]: Embedding-similarity ReadStrategy for /v1/systemone (kakaocorp/kanana-2-v-decide-3b-2611) `RFC`
- [#68938](https://github.com/vllm-project/vllm/issues/68938) [RFC]: Rank-local host backing and SM120 DCP for HiSparse
- [#68964](https://github.com/vllm-project/vllm/issues/68964) [Bug]: GDN decode hangs — host thread blocked inside CUDA driver call (cuModuleLoadData / cuLaunchKernel) in the triton GDN launch path on RTX 3090 / Windows (WDDM) `quantization`
- [#68959](https://github.com/vllm-project/vllm/issues/68959) [RFC][XPU] Enable HiSparse on Intel XPU `RFC`
- [#68916](https://github.com/vllm-project/vllm/issues/68916) [Bug]: SIGSEGV during TP=2 / DP=2 initialization on 4× NVIDIA L20; disabling custom all-reduce avoids the crash `bug` `nvidia`
- [#68906](https://github.com/vllm-project/vllm/issues/68906) [Bug]: DeepSeek-V4.1-Flash PP2 warmup hits the mHC residual assertion on H200 at the 20/20 split `deepseek`
- [#68877](https://github.com/vllm-project/vllm/issues/68877) [Benchmark] Qwen3.8-27B-FP8 at 256K on one RTX 4090 48GB: 18-batch code review — vLLM 0.34.0 vs FastLLM 1.9.2 / SGLang 0.5.23 / llama.cpp b12498 `llama`
- [#68897](https://github.com/vllm-project/vllm/issues/68897) [Bug]: DeepSeek-V4-Flash + DSpark TP4 on SM120: intermittent CUDA_ERROR_ILLEGAL_ADDRESS in KV-cache sizing warm-up `deepseek` `quantization`
- [#68894](https://github.com/vllm-project/vllm/issues/68894) [Performance]: Quantize Humming per-token FP8 activations before AgRs dispatch `performance` `quantization`
- [#68891](https://github.com/vllm-project/vllm/issues/68891) [RFC]: Token-Level Handoff for Encoder Disaggregation `RFC` `kv-connector`
- [#68870](https://github.com/vllm-project/vllm/issues/68870) [Bug]: Qwen3.5 BF16 crashes with DEBUG logging on GB10: CUDA graph capture/replay input mismatch (v0.34.0) `quantization`
- [#68848](https://github.com/vllm-project/vllm/issues/68848) [Bug]: GLM5.2 KV scale loading failure `bug` `quantization`
- [#68849](https://github.com/vllm-project/vllm/issues/68849) [Feature]: Transformers backend: gpt-oss experts are never fused, and MXFP4 raises NotImplementedError `gpt-oss` `quantization`

#### 🔒 Closed Issues
- [#34407](https://github.com/vllm-project/vllm/issues/34407) [RFC]: Disaggregated Frontend — Separating Online Serving from Engine
- [#65919](https://github.com/vllm-project/vllm/issues/65919) [Bug]: benchmark_moe.py fails with Ray 2.59 on ROCm: it replaces HIP_VISIBLE_DEVICES with ROCR_VISIBLE_DEVICES
- [#51752](https://github.com/vllm-project/vllm/issues/51752) [Bug]: Hybrid block-size alignment is skipped on pipeline-parallel ranks that own no attention layer
- [#46589](https://github.com/vllm-project/vllm/issues/46589) [Bug]: Segfault encountered in qwen3.5-27B long video (>2G)inference
- [#57069](https://github.com/vllm-project/vllm/issues/57069) [Feature]: Integrate CFT counted-write MoE all-to-all kernel
- [#68668](https://github.com/vllm-project/vllm/issues/68668) [Bug]: [HiSparse] GLM-5.3-Flash with fp8_ds_mla KV fails at the first prefill on Hopper (AssertionError in HiSparseMLAIndexGroup._prefill_gather_plan)
- [#59248](https://github.com/vllm-project/vllm/issues/59248) [Bug]: Qwen3-Coder-Next AutoRound routed MoE gate ignores checkpoint quantization
- [#68004](https://github.com/vllm-project/vllm/issues/68004) [Bug]: #67743 — LLaVA-OneVision crashes when videos have different frame counts
- [#58575](https://github.com/vllm-project/vllm/issues/58575) [Bug][ROCm]: v0.30.0 release is missing #57252, so GLM-5.3 (GlmMoeDsa) can't start on AMD
- [#68893](https://github.com/vllm-project/vllm/issues/68893) [RFC]: Fault-tolerant sharded RDT weight sync: continue on surviving inference engines
- [#68914](https://github.com/vllm-project/vllm/issues/68914) [Bug]: /v1/decisions reads `predicate` as a lettered choice, unlike /v1/systemone `noul`
- [#67247](https://github.com/vllm-project/vllm/issues/67247) [Bug]: Streaming `/inference/v1/generate` ignores `--enable-force-include-usage`: no usage without `stream_options`
- [#67790](https://github.com/vllm-project/vllm/issues/67790) [Bug]: /pooling always returns 400 on embedding servers with enable_chunked_processing
- [#68269](https://github.com/vllm-project/vllm/issues/68269) [Bug]: Qwen3-VL video pruning: text and decode positions after a video are wrong when the video is a prefix-cache hit

### SGLang (`sgl-project/sglang`)

**Stars:** 38,890 · **Open issues:** 7,064 · **Last push:** <1h ago

There were no new releases for SGLang today, but several significant changes were merged, including the addition of runtime worker management API in PR #50242 and updates to the Hunyuan-4-Flash models with text and vision-language support in PRs #51668 and #51937 respectively. Key fixes include improvements to the tokenizer in PR #50859 and adjustments to the scheduler in PR #51641, which enhance the control requests under specific conditions. A notable new issue was raised in PR #51733, requesting comments on HiCache's size and stage for unified memory on specific hardware configurations, indicating ongoing developments and discussions surrounding memory management in hybrid models. Overall, today was characterized by routine updates and the introduction of new features aimed at improving performance and usability.

#### ✅ Merged PRs
- [#51987](https://github.com/sgl-project/sglang/pull/51987) [Doc] diffusion/storage: Prefer workload credentials for S3 uploads
- [#51254](https://github.com/sgl-project/sglang/pull/51254) [Fix] hicache: Clear storage existence beliefs when a new backend is attached
- [#51252](https://github.com/sgl-project/sglang/pull/51252) [Refactor] hisparse: Route every allocator free through one path that releases the HiSparse mapping
- [#50859](https://github.com/sgl-project/sglang/pull/50859) [Fix] tokenizer: Return sampling masks on requests aborted from the waiting queue
- [#49537](https://github.com/sgl-project/sglang/pull/49537) [Feat] kv-cache: Metrics for write latency distribution from L2 to L3
- [#51641](https://github.com/sgl-project/sglang/pull/51641) [Fix] scheduler: Fix control requests under PP and local control broadcast
- [#47840](https://github.com/sgl-project/sglang/pull/47840) [Fix] disaggregation: fix HiSparse spec PD transfer on PP>1 prefill
- [#51983](https://github.com/sgl-project/sglang/pull/51983) [Fix] kernel_plugins: Let the K3.1 verify megakernel serve its own request buckets
- [#51961](https://github.com/sgl-project/sglang/pull/51961) [Perf] reject_sampling: Vocabulary-tiled block-verification accept
- [#51978](https://github.com/sgl-project/sglang/pull/51978) [Test] ci: Fix two base-a-test-cpu stubs broken by #51668 and #51788
- [#51939](https://github.com/sgl-project/sglang/pull/51939) [Perf] diffusion: Fetch a MiniMax-H3 request's remote condition inputs concurrently
- [#51973](https://github.com/sgl-project/sglang/pull/51973) [Fix] sgl-router: defer discovery restore while an API worker owns the URL
- [#51788](https://github.com/sgl-project/sglang/pull/51788) [Fix] speculative: Feed every accepted token to the penalizers
- [#51668](https://github.com/sgl-project/sglang/pull/51668) [Feat] models: Hunyuan-4-Flash text model
- [#51937](https://github.com/sgl-project/sglang/pull/51937) [Feat] models: Hunyuan-4-Flash vision-language support
- [#50684](https://github.com/sgl-project/sglang/pull/50684) [Feat] [NVIDIA] cuda-graph: Prefill CUDA graphs for FlashInfer CuTe DSL MoE and MegaMoE
- [#51688](https://github.com/sgl-project/sglang/pull/51688) [Perf] beam: Use the tiny FP32 router GEMM for NVFP4 checkpoints
- [#50242](https://github.com/sgl-project/sglang/pull/50242) [Feat] sgl-router: Add runtime worker management API
- [#51969](https://github.com/sgl-project/sglang/pull/51969) [Fix] hunyuan_v4_flash: Read TP size and rank through get_parallel() and list its fusion gate
- [#51759](https://github.com/sgl-project/sglang/pull/51759) [Doc] agents: Require kernel-organization before changing python/sglang/kernels
- [#51935](https://github.com/sgl-project/sglang/pull/51935) [Fix] diffusion: Follow the Pika-H3-Flex reference pipeline in keyframe fitting, audio length and reference resizing
- [#51933](https://github.com/sgl-project/sglang/pull/51933) [Perf] [AMD] diffusion: MiniMax-H3 packed attention on aiter's batch and MHA v4 kernels
- [#47020](https://github.com/sgl-project/sglang/pull/47020) [Fix] dflash: Apply request penalties under DFLASH and DSPARK
- [#51880](https://github.com/sgl-project/sglang/pull/51880) [Feat] cp: Let zigzag CP keep a batch with a request shorter than 2 x cp_size
- [#51909](https://github.com/sgl-project/sglang/pull/51909) [Feat] logprob: Return an input candidate selector's weights with the prompt logprobs
- [#51897](https://github.com/sgl-project/sglang/pull/51897) [Feat] rust-server: Let a processor publish multimodal features in its own transport
- [#51165](https://github.com/sgl-project/sglang/pull/51165) [Feat] scheduler: Report where an ignore_eos request's first stop token would have ended it
- [#51889](https://github.com/sgl-project/sglang/pull/51889) [Feat] cuda-graph: Let a model declare the dtype of the prefill input_embeds buffer
- [#51945](https://github.com/sgl-project/sglang/pull/51945) [Perf] rust-server: Decode each chunk's own bytes for byte-level BPE tokenizers
- [#51892](https://github.com/sgl-project/sglang/pull/51892) [Fix] disaggregation: A prefill request without a decode reservation yields its storage prefetch to a bootstrapped one
- [#51882](https://github.com/sgl-project/sglang/pull/51882) [Fix] disaggregation: A parked optimistic prefill yields its KV when a bootstrapped request is blocked on KV
- [#51932](https://github.com/sgl-project/sglang/pull/51932) [Refactor] rust-server: Remove the attention-DP generation relay
- [#51899](https://github.com/sgl-project/sglang/pull/51899) [Feat] logprob: Let a request choose its prompt logprob candidates in place of the top-k
- [#51904](https://github.com/sgl-project/sglang/pull/51904) [Perf] rust-server: Cut request-log and crash-dump copies and recorder lock holds
- [#51895](https://github.com/sgl-project/sglang/pull/51895) [Fix] rust-server: Honor return_prompt_token_ids on /generate and return_token_ids on /v1/completions
- [#51881](https://github.com/sgl-project/sglang/pull/51881) [Feat] rust-server: Export frontend queue depth, queue-full refusals and media fetch slot waits
- [#51891](https://github.com/sgl-project/sglang/pull/51891) [Fix] http_server: Write a single /generate stream's finishing event and [DONE] together
- [#51953](https://github.com/sgl-project/sglang/pull/51953) [Doc] cookbook: Use the rtx6000 hardware id for Inkling-2-Mini
- [#50841](https://github.com/sgl-project/sglang/pull/50841) [Fix] hicache: Keep device-only Mamba checkpoints through write-back eviction
- [#51914](https://github.com/sgl-project/sglang/pull/51914) [CI] diffusion: Tighten H100 and B200 latency baselines
- [#50195](https://github.com/sgl-project/sglang/pull/50195) [Fix] [NVIDIA] moe: keep the tuned autotune key for deferred-finalize FP4 TRT-LLM MoE calls
- [#51908](https://github.com/sgl-project/sglang/pull/51908) [Perf] diffusion: Replay the Qwen3 text encoder graph under tensor parallelism
- [#51624](https://github.com/sgl-project/sglang/pull/51624) [CI] kernels: Widen the Marlin MoE GEMV-vs-GEMM bound to 1e-2
- [#51686](https://github.com/sgl-project/sglang/pull/51686) [Test] sgl-router: Flush caches before the PD dp-aware spread test
- [#50354](https://github.com/sgl-project/sglang/pull/50354) [Feat] [AMD] tlx: Add the vendored gfx950 TLX GEMM and Muse MoE kernels on stock Triton via uTLX
- [#50806](https://github.com/sgl-project/sglang/pull/50806) [Refactor] diffusion: Fix silent failures and prune dead code in multimodal_gen (4/4)
- [#51648](https://github.com/sgl-project/sglang/pull/51648) [Test] diffusion: Put the real-checkpoint H3 TP check with manual tests
- [#51676](https://github.com/sgl-project/sglang/pull/51676) [Refactor] spec/dflash: Take the megakernel out of the DFLASH worker behind a guarded runtime binding
- [#51646](https://github.com/sgl-project/sglang/pull/51646) [Feat] kernels: Hy4-Flash IndexPool, Engram and fused iHC post-pre kernels
- [#51927](https://github.com/sgl-project/sglang/pull/51927) [Doc] cookbook: Add Inkling-2-Mini cookbook
- [#51930](https://github.com/sgl-project/sglang/pull/51930) [Doc] cookbook: Point the Inkling-2-Mini install at its pull request
- [#51464](https://github.com/sgl-project/sglang/pull/51464) [Fix] diffusion/zimage: Run n > 1 outputs one by one
- [#47889](https://github.com/sgl-project/sglang/pull/47889) [Perf] cosmos3: optimize Sim-Bimanual kv cache management
- [#51913](https://github.com/sgl-project/sglang/pull/51913) [CI] diffusion: Calibrate Hunyuan3D shape denoising on computable-e H100s
- [#50819](https://github.com/sgl-project/sglang/pull/50819) [Test] rust-server: Verify disconnect aborts an admitted unary prefill
- [#50897](https://github.com/sgl-project/sglang/pull/50897) [Refactor] rust-server: Keep only the test-support helpers that need crate internals
- [#50901](https://github.com/sgl-project/sglang/pull/50901) [Perf] tokenizer_manager: Drop the prompt token list once a single request is dispatched
- [#51258](https://github.com/sgl-project/sglang/pull/51258) [Chore] ci: Grant AndyDai-nv CI permissions
- [#50931](https://github.com/sgl-project/sglang/pull/50931) [Fix] [CI] diffusion: Repair cached subfolders and CI recovery
- [#51562](https://github.com/sgl-project/sglang/pull/51562) [Perf] diffusion/flux3: Replay the text encoder's forward as a CUDA graph
- [#46210](https://github.com/sgl-project/sglang/pull/46210) [Feat] [NVIDIA] megakernels: DSA / MLA binding view, EAGLE draft capture checks, early draft embedding sharing
- [#42254](https://github.com/sgl-project/sglang/pull/42254) [Perf] Foundry: adding the adapter of foundry to enable fast CUDA graph save/load
- [#51707](https://github.com/sgl-project/sglang/pull/51707) [Fix] distributed: Give the attention-TP subgroup a PyNCCL communicator under attention DP
- [#51079](https://github.com/sgl-project/sglang/pull/51079) [Fix] [AMD] unquant: Keep CPU inputs off the AITER GEMM path
- [#50817](https://github.com/sgl-project/sglang/pull/50817) [Fix] srt: Check IPv6 availability for default NCCL ports
- [#50846](https://github.com/sgl-project/sglang/pull/50846) [Perf] rust-server: Derive a multimodal item's identity from one BLAKE3 digest of its feature
- [#50864](https://github.com/sgl-project/sglang/pull/50864) [Feat] bench: Spread a one-batch benchmark batch over per-DP-rank listeners
- [#51088](https://github.com/sgl-project/sglang/pull/51088) [Feat] hicache: Forward request-scoped KV hints to storage backends
- [#51257](https://github.com/sgl-project/sglang/pull/51257) [Fix] scheduler: Admit a chunked ignore-eos streaming-session turn after its prefix
- [#51849](https://github.com/sgl-project/sglang/pull/51849) [Fix] simulator: Declare mock storage KV hints capability
- [#51718](https://github.com/sgl-project/sglang/pull/51718) [Fix] gemma4: Keep valid vision patches when pooling is skipped
- [#51616](https://github.com/sgl-project/sglang/pull/51616) [Fix] function_call: Preserve text between and after Gemma 4 tool calls
- [#51615](https://github.com/sgl-project/sglang/pull/51615) [Fix] gemma4: Exclude padding and preserve range during vision pooling
- [#51592](https://github.com/sgl-project/sglang/pull/51592) [Fix] function_call: Use call order for Gemma4 streaming tool indices

#### 🐛 New Issues
- [#51733](https://github.com/sgl-project/sglang/issues/51733) [RFC] HiCache: Size and stage for unified memory (GB10 / DGX Spark) 💬2
- [#51901](https://github.com/sgl-project/sglang/issues/51901) [Bug] Hybrid models at --hybrid-cache-checkpoints-level 2: an identical repeat restores 0 tokens when the previous request's decode crossed a Mamba tracking boundary 💬2
- [#51861](https://github.com/sgl-project/sglang/issues/51861) [Bug] Gemma 4 FA4 image masks ignore sliding_layers_only on full-attention layers 💬1
- [#51996](https://github.com/sgl-project/sglang/issues/51996) [Bug] HiCache backup of oversized request evicts all host-cached prefixes before giving up
- [#51990](https://github.com/sgl-project/sglang/issues/51990) [Bug] Dual-stream MoE blocks read the MoE input on one stream while the in-place triton runner overwrites it on the other
- [#51980](https://github.com/sgl-project/sglang/issues/51980) [Bug] PD disaggregation (NIXL): a decode request that reuses a live `bootstrap_room` gets the other request's output with HTTP 200 (follow-up to #40125)
- [#51853](https://github.com/sgl-project/sglang/issues/51853) [Perf] DSv4.1 on Hopper: stabilize mixed-prefill TTFT and small-batch decode latency
- [#51902](https://github.com/sgl-project/sglang/issues/51902) [Bug] Hybrid models: no fork-point Mamba checkpoint when the fork lies in a prefill chunk that starts off the 64-token grid, so later siblings restore 0
- [#51896](https://github.com/sgl-project/sglang/issues/51896) [Feature] Inkling 2 on SM12x (GB10 / DGX Spark): three SM100/multicast gates keep it off; the GPU has the kernels it would need
- [#51875](https://github.com/sgl-project/sglang/issues/51875) HiCache write-through issues one host copy per token with `page_first` and a small page size
- [#51865](https://github.com/sgl-project/sglang/issues/51865) [Feature] muse-spark: trtllm_mha is ~12% faster than the default fa3 on H200 (TP8/EP8, FP8 KV, DFLASH)
- [#51866](https://github.com/sgl-project/sglang/issues/51866) [Feature] muse-spark: Cap Marlin M blocks at 16 rows for small batches under EP
- [#51850](https://github.com/sgl-project/sglang/issues/51850) [Bug] CLI misclassifies remote diffusion pipelines with only a modular index
- [#51846](https://github.com/sgl-project/sglang/issues/51846) [Feature] Rust bench: allow a constant-interval (and tunable-burstiness) arrival process
- [#51716](https://github.com/sgl-project/sglang/issues/51716) [Bug] Gemma 4 vision encoder inverts the valid-patch mask when pooling is skipped
- [#51837](https://github.com/sgl-project/sglang/issues/51837) SGLang: multimodal requests accept unvalidated local file paths, enabling server-side arbitrary file reads
- [#51836](https://github.com/sgl-project/sglang/issues/51836) SGLang: /slow_down accepts an unbounded sleep value without authentication, stalling every subsequent inference
- [#51835](https://github.com/sgl-project/sglang/issues/51835) SGLang: max_new_tokens and n have no server-side upper bounds, so one request can monopolize the scheduler
- [#51834](https://github.com/sgl-project/sglang/issues/51834) SGLang: stop_regex is evaluated on the scheduler thread, so a crafted regex blocks all decoding for minutes
- [#51833](https://github.com/sgl-project/sglang/issues/51833) SGLang: structured output parameters are compiled without length or complexity limits, enabling denial of service
- [#51832](https://github.com/sgl-project/sglang/issues/51832) SGLang: /configure_logging dump folder is not validated, enabling arbitrary-path file writes
- [#51828](https://github.com/sgl-project/sglang/issues/51828) [Bug] Gemma 4 malformed vision features reach model forward and terminate the scheduler
- [#51827](https://github.com/sgl-project/sglang/issues/51827) [Bug] GLM-5.3-Flash PD decode with MTP and attention TP > 1 fails the PD warmup: `assert seq_lens.shape[0] >= batch` in the DSA kpool indexer
- [#51777](https://github.com/sgl-project/sglang/issues/51777) [Bug] Gemma 4 Triton image masks make full-attention layers bidirectional
- [#51740](https://github.com/sgl-project/sglang/issues/51740) [Benchmark] Qwen3.8-27B-FP8 at 256K on one RTX 4090 48GB: 18-batch code review — SGLang 0.5.23 vs FastLLM 1.9.2 / vLLM 0.34.0 / llama.cpp b12498
- [#51726](https://github.com/sgl-project/sglang/issues/51726) [Feature] diffusion/pi05: real-time chunking (RTC)

#### 🔒 Closed Issues
- [#22889](https://github.com/sgl-project/sglang/issues/22889) [Feature] Free-Threaded Python (3.14t / nogil) Support for SGLang
- [#24656](https://github.com/sgl-project/sglang/issues/24656) [RFC] Agent-Aware KV Cache Phase 1 for Agentic Workloads
- [#22283](https://github.com/sgl-project/sglang/issues/22283) [Apple Silicon] Optimize MoE performance
- [#35080](https://github.com/sgl-project/sglang/issues/35080) [Bug] Flashinfer backend is not supported on Blackwell GPUs
- [#37105](https://github.com/sgl-project/sglang/issues/37105) [Bug] GLM-5.3-Flash on RTX PRO 6000 (sm_120): two DSA backend blockers after the deep_gemm NameError
- [#30809](https://github.com/sgl-project/sglang/issues/30809) [Feature] Investigate CUTLASS 4.6 dynamic Epilogue Fusions and IKET profiling
- [#27890](https://github.com/sgl-project/sglang/issues/27890) [Parity with CUDA H200] MI300/MI325 DeepSeekv4 Pro Support
- [#40232](https://github.com/sgl-project/sglang/issues/40232) [Bug] HiCache staged write-back: the 128 KiB batch path passes registered host VAs to cudaMemcpyBatchAsync and faults where CanUseHostPointerForRegisteredMem == 0
- [#46203](https://github.com/sgl-project/sglang/issues/46203) [Bug] Xid 13 "CTA Not Present" in HiCache kvcacheio transfer kernels on Blackwell (B200) — 7 crashes across 4 machines / 7 GPU instances under agentic load
- [#25897](https://github.com/sgl-project/sglang/issues/25897) [Roadmap] Extended Adapter support for Multimodal LLM
- [#40504](https://github.com/sgl-project/sglang/issues/40504) [Bug] Hardcoded fp32 dtypes in KDA short-convs cause 2x bandwidth waste
- [#40522](https://github.com/sgl-project/sglang/issues/40522) [RFC] Decouple the SWA sidecar page size from the full-attention page size (DSv4, Hybrid Models)
- [#27417](https://github.com/sgl-project/sglang/issues/27417) [ROCm Test-First CI]: Day 0 SGLang MI455X UALoE72 Helios Rack open source community upstream CI by AMD Advancing AI July 22 2026
- [#40627](https://github.com/sgl-project/sglang/issues/40627) [Bug] launch_server hangs forever with no error when /tmp is noexec (NUMA wrapper script cannot be executed)
- [#40437](https://github.com/sgl-project/sglang/issues/40437) [Feature][weight-cache] Support DeepSeek-V4-Flash MXFP4 IPC loading
- [#38002](https://github.com/sgl-project/sglang/issues/38002) [Bug] Responses cancel endpoint accepts non-background responses
- [#40529](https://github.com/sgl-project/sglang/issues/40529) [tracking] thinking models + stop_sequences: five related defects — content loss, misreported stop_reason, enable_thinking ignored (PRs #33151–#33155)
- [#46752](https://github.com/sgl-project/sglang/issues/46752) [Bug] DSPARK/DFLASH speculative decoding silently ignores repetition_penalty / frequency_penalty / presence_penalty
- [#43820](https://github.com/sgl-project/sglang/issues/43820) [RFC] Prefill sequence parallelism with replicated MoE for small-TP long-prompt prefill (Qwen3.5 MoE)
- [#51184](https://github.com/sgl-project/sglang/issues/51184) [Bug] CUDA graph replay returns degenerate output (all token id 0) on sm_120 with NVFP4 + tilelang DSA + Mamba hybrid
- [#51614](https://github.com/sgl-project/sglang/issues/51614) [Bug] Gemma 4 non-streaming tool calls discard subsequent assistant text
- [#51716](https://github.com/sgl-project/sglang/issues/51716) [Bug] Gemma 4 vision encoder inverts the valid-patch mask when pooling is skipped
- [#51613](https://github.com/sgl-project/sglang/issues/51613) [Bug] Gemma 4 vision pooling mixes padding into image tokens and overflows in FP16
- [#51478](https://github.com/sgl-project/sglang/issues/51478) [Bug] dsv41: MegaGate row masks are stale in decoder replay-tail CUDA graphs, so short prompts drift

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 135,878 · **Open issues:** 2,605 · **Last push:** <1h ago

On November 21, 2026, llama.cpp released several new versions, including b12600, which introduced the "Inkling 2 Mini" model and various enhancements for model building and testing, and b12596, which allowed for greater flexibility in fused operations within the Metal backend. Notable merged features included optimizations for prompt processing in gemma4 and significant improvements to voice-related functionalities like drama3 voice cloning. Additionally, several new issues were reported, with #32707 highlighting a critical performance problem where the prefill process for the Inkling 2 Mini is excessively slow and crashes on certain GPU configurations. Overall, the day's updates reflect ongoing advancements in modeling capabilities and backend optimizations for enhanced performance.

#### 🚀 New Releases
- [b12600](https://github.com/ggml-org/llama.cpp/releases/tag/b12600) b12600
- [b12599](https://github.com/ggml-org/llama.cpp/releases/tag/b12599) b12599
- [b12597](https://github.com/ggml-org/llama.cpp/releases/tag/b12597) b12597
- [b12596](https://github.com/ggml-org/llama.cpp/releases/tag/b12596) b12596
- [b12591](https://github.com/ggml-org/llama.cpp/releases/tag/b12591) b12591
- [b12590](https://github.com/ggml-org/llama.cpp/releases/tag/b12590) b12590
- [b12589](https://github.com/ggml-org/llama.cpp/releases/tag/b12589) b12589
- [b12588](https://github.com/ggml-org/llama.cpp/releases/tag/b12588) b12588
- [b12584](https://github.com/ggml-org/llama.cpp/releases/tag/b12584) b12584
- [b12580](https://github.com/ggml-org/llama.cpp/releases/tag/b12580) b12580

#### ✅ Merged PRs
- [#31428](https://github.com/ggml-org/llama.cpp/pull/31428) sycl: Improve Grouped XMX GEMM by avoiding SLM staging
- [#32571](https://github.com/ggml-org/llama.cpp/pull/32571) convert: qwen3-asr: put "language ..." output into thinking block
- [#30967](https://github.com/ggml-org/llama.cpp/pull/30967) docs: openvino backend details, fix SYCL docs
- [#32694](https://github.com/ggml-org/llama.cpp/pull/32694) Inkling 2 Mini
- [#32389](https://github.com/ggml-org/llama.cpp/pull/32389) hip: add RDNA1 MMVQ parameter table (1 warp per block for ncols=1)
- [#32593](https://github.com/ggml-org/llama.cpp/pull/32593) ggml-openvino: update openvino CI runs triggers
- [#32300](https://github.com/ggml-org/llama.cpp/pull/32300) metal : allow the norm chain in either operand of the fused MUL/ADD
- [#32675](https://github.com/ggml-org/llama.cpp/pull/32675) ui: fix the flaky reset check of the MermaidPreview Flowchart story
- [#32680](https://github.com/ggml-org/llama.cpp/pull/32680) ui: stage Llama Voice's sources for CMake and Docker UI builds
- [#32674](https://github.com/ggml-org/llama.cpp/pull/32674) ci : disable musa.Dockerfile from docker.yml
- [#32673](https://github.com/ggml-org/llama.cpp/pull/32673) vulkan: add support for COL2IM_1D misalign bytes and split workgroups
- [#32578](https://github.com/ggml-org/llama.cpp/pull/32578) server: add more decision tests
- [#32647](https://github.com/ggml-org/llama.cpp/pull/32647) ggml : major version bump reminders + deprecate ggml_ftype
- [#32586](https://github.com/ggml-org/llama.cpp/pull/32586) mtmd: drama3 voice cloning
- [#32579](https://github.com/ggml-org/llama.cpp/pull/32579) server: add more audio tests
- [#32342](https://github.com/ggml-org/llama.cpp/pull/32342) gemma4: Optimized prompt processing for multi-seq queries
- [#32531](https://github.com/ggml-org/llama.cpp/pull/32531) ui: voice messages and dictation with live waveforms and transcripts
- [#32670](https://github.com/ggml-org/llama.cpp/pull/32670) ui: search message content and Discover models from the search dialog
- [#32667](https://github.com/ggml-org/llama.cpp/pull/32667) ui: publish llama-ui on npm as an alias of @ggml-org/llama-ui
- [#30207](https://github.com/ggml-org/llama.cpp/pull/30207) vulkan: chunked GATED_DELTA_NET implementation
- [#32664](https://github.com/ggml-org/llama.cpp/pull/32664) tts : forward -t to the mtmd context
- [#31708](https://github.com/ggml-org/llama.cpp/pull/31708) webgpu : add COL2IM_1D support
- [#32518](https://github.com/ggml-org/llama.cpp/pull/32518) Fix TypeError in histogram generation by casting bin count to int
- [#32661](https://github.com/ggml-org/llama.cpp/pull/32661) ui: load highlight.js languages on demand
- [#32633](https://github.com/ggml-org/llama.cpp/pull/32633) server: add --ui-mcp-proxy-allow-private-urls
- [#32570](https://github.com/ggml-org/llama.cpp/pull/32570) ui: focus the chat form when typing with nothing focused
- [#32660](https://github.com/ggml-org/llama.cpp/pull/32660) cuda : update GDN supports_op check
- [#32657](https://github.com/ggml-org/llama.cpp/pull/32657) model: Add `ffn_gate_up_exps` scales
- [#32658](https://github.com/ggml-org/llama.cpp/pull/32658) ci : remove ui-lib publish verification step
- [#32653](https://github.com/ggml-org/llama.cpp/pull/32653) llama : move the indexer key rotation choice into the model classes
- [#32615](https://github.com/ggml-org/llama.cpp/pull/32615) ui: slim the design tokens and set all text through type roles
- [#32617](https://github.com/ggml-org/llama.cpp/pull/32617) ui: show vision as glasses and audio as headphones
- [#32648](https://github.com/ggml-org/llama.cpp/pull/32648) llama : move the graph node budget into the model classes
- [#32632](https://github.com/ggml-org/llama.cpp/pull/32632) ui: set the reasoning effort from the model picker
- [#32591](https://github.com/ggml-org/llama.cpp/pull/32591) ui: full-screen diagram preview that zooms around what is on screen, inert diagrams
- [#32636](https://github.com/ggml-org/llama.cpp/pull/32636) llama : reserve graph nodes for the MoE cache
- [#32559](https://github.com/ggml-org/llama.cpp/pull/32559) model: add Domyn Edge 4B Model
- [#32600](https://github.com/ggml-org/llama.cpp/pull/32600) llamafile(s390x): add QK data type support
- [#32265](https://github.com/ggml-org/llama.cpp/pull/32265) kleidiai : allow OHOS (HarmonyOS) AArch64 target
- [#32576](https://github.com/ggml-org/llama.cpp/pull/32576) [WebGPU] Fix 2D indexing for copy kernel
- [#31268](https://github.com/ggml-org/llama.cpp/pull/31268) CUDA: optimize Orin single-column MMVQ
- [#31345](https://github.com/ggml-org/llama.cpp/pull/31345) CUDA: keep the MUL_MAT_ID precision in the per-expert fallback
- [#31149](https://github.com/ggml-org/llama.cpp/pull/31149) vulkan: optimize RMS_NORM_MUL_ROPE loop control
- [#32631](https://github.com/ggml-org/llama.cpp/pull/32631) opencl: fold gqa heads for f16 decomposed FA
- [#30826](https://github.com/ggml-org/llama.cpp/pull/30826) vulkan: disable subgroup arithmetic on Qualcomm's driver

#### 🐛 New Issues
- [#32707](https://github.com/ggml-org/llama.cpp/issues/32707) Eval bug: ggml-org/Inkling-2-Mini-GGUF:IQ4_NL prefill is abominably slow and crashes on 5090 `bug-unconfirmed` 💬4
- [#32688](https://github.com/ggml-org/llama.cpp/issues/32688) --reasoning-preserve default overrides templates whose own default drops past reasoning 💬1
- [#32683](https://github.com/ggml-org/llama.cpp/issues/32683) Eval bug: mxfp4-quantized tensors default to nvfp4 activations `bug-unconfirmed` 💬1
- [#32639](https://github.com/ggml-org/llama.cpp/issues/32639) ROCm: SIGSEGV in fattn kernel launch (flash_attn_ext_vec_case<256, Q4_0, Q4_0>) with q4_0 KV + flash attention + large --moe-cache-mib on qwen4exp UD-Q4_K_XL; UD-Q3_K_XL with identical flags never crashes 💬1
- [#32709](https://github.com/ggml-org/llama.cpp/issues/32709) Misc. bug: CUDA 13.5 build b12359 segfaults at --list-devices on WSL2 with RTX 5060 `bug-unconfirmed`
- [#32701](https://github.com/ggml-org/llama.cpp/issues/32701) server: expose the unified KV pool size in /props when --kv-unified-per-slot caps each slot
- [#32696](https://github.com/ggml-org/llama.cpp/issues/32696) ggml-backend-meta: set_rows into a mirrored cache view asserts when the index input is assigned a split state
- [#32689](https://github.com/ggml-org/llama.cpp/issues/32689) Eval bug: Qwen3-Omni / Qwen3-ASR audio: extra tokens from zero-padding, mismatch with transformers `bug-unconfirmed`
- [#32687](https://github.com/ggml-org/llama.cpp/issues/32687) Misc. bug: llama-server n_keep = INT32_MAX overflows and wipes KV cache on every context shift `bug-unconfirmed`
- [#32684](https://github.com/ggml-org/llama.cpp/issues/32684) Eval bug: llama.cpp tokenizer incorrectly tokenizes non-English characters such as Hangul and Bengali `bug-unconfirmed`
- [#32682](https://github.com/ggml-org/llama.cpp/issues/32682) Feature Request: diffusion-gemma (and quantize) `enhancement`
- [#32681](https://github.com/ggml-org/llama.cpp/issues/32681) Eval bug: Nemotron-3-Nano-Omni: The projector with audio crashes when loading (GGML_ASSERT in mtmd_graph_parakeet::build) since v0.9.0 `bug-unconfirmed`
- [#32678](https://github.com/ggml-org/llama.cpp/issues/32678) Eval bug: vllm-d3 server aborts (`non-causal attention requires n_ubatch >= n_tokens`) when concurrent /v1/systemone requests share a batch
- [#32666](https://github.com/ggml-org/llama.cpp/issues/32666) Misc. bug: router mode forwards the child's Connection: close, so keep-alive clients fail with 'other side closed'
- [#32662](https://github.com/ggml-org/llama.cpp/issues/32662) llama-vocab: unbounded id_to_token.resize(n_tokens) from untrusted llama.vocab_size in no_vocab path (783-byte file allocates ~43 GB) `bug-unconfirmed`
- [#32640](https://github.com/ggml-org/llama.cpp/issues/32640) [Benchmark] Qwen3.8-27B (FP8→Q8_0) at 256K on one RTX 4090 48GB: 18-batch code review — llama.cpp b12498 vs FastLLM 1.9.2 / vLLM 0.34.0 / SGLang 0.5.23
- [#32642](https://github.com/ggml-org/llama.cpp/issues/32642) closed

#### 🔒 Closed Issues
- [#24375](https://github.com/ggml-org/llama.cpp/issues/24375) Feature Request: Show microphone button when current model does not support audio but another loaded model does
- [#27682](https://github.com/ggml-org/llama.cpp/issues/27682) Eval bug: OpenVINO: low tg
- [#27544](https://github.com/ggml-org/llama.cpp/issues/27544) spec + vulkan: Performance Drop with MTP n-max > 1 and -np > 1
- [#28282](https://github.com/ggml-org/llama.cpp/issues/28282) Misc. bug: CUDA illegal memory access on GLM-5.3-Flash (glm5next) long prefill at -ub 2048 (Blackwell/sm_120)
- [#27687](https://github.com/ggml-org/llama.cpp/issues/27687) Misc. bug: llama-server (HIP/ROCm build) spins 2 threads at 100% CPU when idle in router mode (WSL2)
- [#29933](https://github.com/ggml-org/llama.cpp/issues/29933) llama-server (RPC client) occasionally ignores SIGTERM after long sessions — requires SIGKILL, holding a half-open RPC connection
- [#27536](https://github.com/ggml-org/llama.cpp/issues/27536) Compile bug: loop not unrolled ROCm warnings
- [#30056](https://github.com/ggml-org/llama.cpp/issues/30056) Eval bug: server: tool-call grammar build fails with many tools (MAX_REPETITION_THRESHOLD)
- [#32688](https://github.com/ggml-org/llama.cpp/issues/32688) --reasoning-preserve default overrides templates whose own default drops past reasoning
- [#29981](https://github.com/ggml-org/llama.cpp/issues/29981) Feature Request: shared native inference core for server, CLI and embedded applications
- [#30083](https://github.com/ggml-org/llama.cpp/issues/30083) Misc. bug: ggml-opt gradient accumulators are never cleared between optimizer steps (llama_opt_epoch / llama-finetune)
- [#30084](https://github.com/ggml-org/llama.cpp/issues/30084) Feature Request: CUDA OUT_PROD with a quantized src0 (LoRA training through a quantized base on NVIDIA)
- [#30085](https://github.com/ggml-org/llama.cpp/issues/30085) Feature Request: backward ops to fine-tune hybrid gated delta-net models (GATED_DELTA_NET, CONCAT, SSM_CONV, L2_NORM, SIGMOID)
- [#30086](https://github.com/ggml-org/llama.cpp/issues/30086) Feature Request: exact chunked training for long windows (chunk x window memory, gradient carried through the cached K/V and recurrent state)
- [#30123](https://github.com/ggml-org/llama.cpp/issues/30123) Misc. bug: server: flush metrics more frequently
- [#32584](https://github.com/ggml-org/llama.cpp/issues/32584) Crash loading cohere2moe model with --moe-cache-mib and KV cache q8_0 (0xC0000409)
- [#32547](https://github.com/ggml-org/llama.cpp/issues/32547) Eval bug: qwen3 asr outputs `language English<asr_text>` prefix which clients do not expect and cannot handle
- [#32295](https://github.com/ggml-org/llama.cpp/issues/32295) Misc. bug: metal : RMS_NORM+MUL+ADD fusion misses ADD with the chain in src[1]
- [#32642](https://github.com/ggml-org/llama.cpp/issues/32642) closed

### Ollama (`ollama/ollama`)

**Stars:** 187,778 · **Open issues:** 4,702 · **Last push:** <1h ago

On November 21, 2026, Ollama experienced routine maintenance with no new releases. Significant progress was made with the merging of several pull requests, including enhancements to the mlx and mlxrunner components, such as the addition of Inkling 2 Mini and improvements for default parallelism based on available memory. Notable fixes include support for a preview channel and adjustments to the verbose safetensors show command that omits bias and gamma vectors. However, users reported issues, particularly with a new bug where the stream ended unexpectedly in the /v1/chat/completions endpoint, leading to confusion about the termination of responses. Additionally, concerns regarding the operational capabilities of Ollama on Alpine Linux were raised.

#### ✅ Merged PRs
- [#19806](https://github.com/ollama/ollama/pull/19806) mlx: inkling follow up
- [#19799](https://github.com/ollama/ollama/pull/19799) mlxrunner: add Inkling 2 Mini
- [#19801](https://github.com/ollama/ollama/pull/19801) install: support preview channel
- [#19803](https://github.com/ollama/ollama/pull/19803) cmd: omit bias and gamma vectors from verbose safetensors show
- [#19742](https://github.com/ollama/ollama/pull/19742) test: stabilize Pi catalog timeout regressions
- [#19785](https://github.com/ollama/ollama/pull/19785) mlxrunner: choose default parallelism from available memory

#### 🐛 New Issues
- [#19800](https://github.com/ollama/ollama/issues/19800) Ollama wont run on alpine linux `bug` 💬1
- [#19792](https://github.com/ollama/ollama/issues/19792) /v1/chat/completions silently ends the stream (no finish_reason, no [DONE]) when the glimmer parser raises mid-generation — clients report "stream ended without reason" `bug` 💬1
- [#19804](https://github.com/ollama/ollama/issues/19804) [Bug] Cloud: beam returns empty content and no tool_calls on tool-bearing requests (regression ~Nov 19-20) `bug` `cloud`
- [#19789](https://github.com/ollama/ollama/issues/19789) Report GPU energy per response in the API metrics
- [#19787](https://github.com/ollama/ollama/issues/19787) Linux installer should verify downloaded bundles against the release sha256sum.txt

#### 🔒 Closed Issues
- [#19733](https://github.com/ollama/ollama/issues/19733) tensor blk.0.ssm_beta.weight not found

### LiteLLM (`BerriAI/litellm`)

**Stars:** 63,631 · **Open issues:** 5,340 · **Last push:** <1h ago

Today, LiteLLM released version v1.111.0-rc.3, with verification steps provided for various images, along with previous versions v1.110.2 and v1.109.3 also being updated. The latest release includes fixes for key issues such as preserving team order and weighted failovers, and improvements were made to the dashboard API types. Among today's notable merges, a new feature was introduced that rejects requests naming unregistered guardrails when the `reject_unregistered_guardrails` option is enabled. However, several bugs were reported, including a critical issue (#53185) where the OAuth client_id query parameter is rejected on pass-through GET requests, indicating a potential challenge for user authentication processes.

#### 🚀 New Releases
- [v1.111.0-rc.3](https://github.com/BerriAI/litellm/releases/tag/v1.111.0-rc.3) v1.111.0-rc.3
- [v1.110.2](https://github.com/BerriAI/litellm/releases/tag/v1.110.2) v1.110.2
- [v1.109.3](https://github.com/BerriAI/litellm/releases/tag/v1.109.3) v1.109.3
- [v1.108.14](https://github.com/BerriAI/litellm/releases/tag/v1.108.14) 1.108.14 (LTS)
- [v1.108.13](https://github.com/BerriAI/litellm/releases/tag/v1.108.13) 1.108.13 (LTS)
- [v1.106.12](https://github.com/BerriAI/litellm/releases/tag/v1.106.12) v1.106.12

#### ✅ Merged PRs
- [#53155](https://github.com/BerriAI/litellm/pull/53155) test(perf): gate large-body case on response time and CPU with a loose client p50 ceiling
- [#53264](https://github.com/BerriAI/litellm/pull/53264) fix(router): preserve team order and weighted failover across endpoints
- [#53271](https://github.com/BerriAI/litellm/pull/53271) fix(spend): retain billed failure accounting when error logs are disabled
- [#53289](https://github.com/BerriAI/litellm/pull/53289) fix(ui): regenerate the dashboard API types for reject_unregistered_guardrails
- [#53281](https://github.com/BerriAI/litellm/pull/53281) chore(lens): update the embedded UI to Lens 0.2.0
- [#51354](https://github.com/BerriAI/litellm/pull/51354) chore(deps): bump zip from 2.4.2 to 9.0.5 in /litellm/rust
- [#49899](https://github.com/BerriAI/litellm/pull/49899) test(e2e): run codex in fast mode under the real model name
- [#53237](https://github.com/BerriAI/litellm/pull/53237) fix(lint): clear the code-quality failures on main
- [#53287](https://github.com/BerriAI/litellm/pull/53287) fix(spend): read budget windows from the auth cache under the auth objects key family
- [#53265](https://github.com/BerriAI/litellm/pull/53265) fix(cost): bill speech at a deployment's custom per-character price
- [#53214](https://github.com/BerriAI/litellm/pull/53214) feat(guardrails): reject requests that name an unregistered guardrail when reject_unregistered_guardrails is on
- [#53256](https://github.com/BerriAI/litellm/pull/53256) fix(transcription): log the clip duration as usage when the provider sends none
- [#53274](https://github.com/BerriAI/litellm/pull/53274) fix(lens): send cost records to Lens without the conversation
- [#53268](https://github.com/BerriAI/litellm/pull/53268) fix(lens): keep the cost of a request too large to export whole
- [#52809](https://github.com/BerriAI/litellm/pull/52809) fix(mcp): preserve concurrent OAuth scope refusals
- [#51851](https://github.com/BerriAI/litellm/pull/51851) fix(cohere)!: map tool_choice, reasoning_effort and json_schema response_format on the v2 chat route
- [#53243](https://github.com/BerriAI/litellm/pull/53243) test(translation): heal stale Messages fixtures for bridged system input and unsigned Claude thinking
- [#52596](https://github.com/BerriAI/litellm/pull/52596) fix(gemini realtime): report barge-in as cancelled response.done
- [#53240](https://github.com/BerriAI/litellm/pull/53240) fix(responses): connect the Responses WebSocket to a plain http api_base
- [#53238](https://github.com/BerriAI/litellm/pull/53238) feat(realtime): serve Azure GPT-Live sessions on /v1/live/sessions
- [#53236](https://github.com/BerriAI/litellm/pull/53236) fix(caching): preserve stored completion finish reasons
- [#53234](https://github.com/BerriAI/litellm/pull/53234) fix(responses): drop unsupported o-series temperature when requested
- [#53239](https://github.com/BerriAI/litellm/pull/53239) test(integration): stop the Bedrock invoke outage test from assuming every cut-off stream is billed in full
- [#53223](https://github.com/BerriAI/litellm/pull/53223) test(responses): backport #53000 to lts/1.108.x, expect the system prompt as the leading Responses input
- [#53233](https://github.com/BerriAI/litellm/pull/53233) fix(gemini): preserve distinct parallel tool calls with identical arguments
- [#51872](https://github.com/BerriAI/litellm/pull/51872) feat(guardrails): hold streamed tool calls for the verdict and log prompts blocked with a reply
- [#53088](https://github.com/BerriAI/litellm/pull/53088) refactor(auth_cache): name the customer app cache families as AuthObjects
- [#53228](https://github.com/BerriAI/litellm/pull/53228) test(responses): wait on events instead of a one second deadline for closed socket rows
- [#53043](https://github.com/BerriAI/litellm/pull/53043) fix(proxy): name configured customer headers in authorization errors
- [#53229](https://github.com/BerriAI/litellm/pull/53229) test(s3): prove unlisted upload statuses are not retried from observed reports
- [#53230](https://github.com/BerriAI/litellm/pull/53230) test(tags): give the tag update fake a database transaction
- [#52182](https://github.com/BerriAI/litellm/pull/52182) feat(spend-logs): rust spend log callback
- [#52163](https://github.com/BerriAI/litellm/pull/52163) feat(spend-logs): rust spend log ledger writer
- [#52161](https://github.com/BerriAI/litellm/pull/52161) feat(spend-logs): rust spend log row builder
- [#52166](https://github.com/BerriAI/litellm/pull/52166) feat(budgets): run the ledger's post-call spend counter step in rust
- [#52151](https://github.com/BerriAI/litellm/pull/52151) feat(callbacks): spend log contract fields and native flush at shutdown
- [#53187](https://github.com/BerriAI/litellm/pull/53187) fix(vertex_ai): fail a Gemini stream cut before its finish reason
- [#51752](https://github.com/BerriAI/litellm/pull/51752) fix(proxy): size budget reservation from route output cap fields
- [#52840](https://github.com/BerriAI/litellm/pull/52840) fix(proxy): honor the Cache-Control no-cache and no-store request headers
- [#53218](https://github.com/BerriAI/litellm/pull/53218) refactor(budgets): use one budget window model for keys, teams, users and customers
- [#53044](https://github.com/BerriAI/litellm/pull/53044) fix(auth): return generic 401 for unknown JWT team
- [#53175](https://github.com/BerriAI/litellm/pull/53175) feat(cost-map): turn on Bedrock native structured output for GovCloud Claude rows
- [#52997](https://github.com/BerriAI/litellm/pull/52997) feat(docker): install cryptography, grpcio and libpq from chainguard apks in the fips image
- [#53217](https://github.com/BerriAI/litellm/pull/53217) fix(openai): relay param and plain message from OpenAI-compatible backend errors
- [#52934](https://github.com/BerriAI/litellm/pull/52934) refactor(ui): remove unused callback lookup helpers
- [#52935](https://github.com/BerriAI/litellm/pull/52935) refactor(ui): remove unused validateToolDisplayName from MCP utils
- [#53213](https://github.com/BerriAI/litellm/pull/53213) feat(lens): send the signed in user's name in the Lens login token
- [#53065](https://github.com/BerriAI/litellm/pull/53065) fix(budgets): preserve calendar periods across DST
- [#53210](https://github.com/BerriAI/litellm/pull/53210) fix(proxy): close encoded and backslash paths that skip the Gemini pass-through file ownership check
- [#53150](https://github.com/BerriAI/litellm/pull/53150) fix(cost): bill OpenAI token-priced speech on the length of the returned audio
- [#53212](https://github.com/BerriAI/litellm/pull/53212) fix(lens): stop /lens/login and the dashboard login page redirecting to each other forever
- [#53205](https://github.com/BerriAI/litellm/pull/53205) feat(proxy): delete the old username and password login page
- [#53177](https://github.com/BerriAI/litellm/pull/53177) fix(exceptions): map OpenAI forbidden invalid requests to permission denied
- [#53192](https://github.com/BerriAI/litellm/pull/53192) fix(proxy): echo the path model on nonstreaming chat responses when the body has none
- [#53188](https://github.com/BerriAI/litellm/pull/53188) fix(caching): preserve Responses objects on cache hits
- [#53173](https://github.com/BerriAI/litellm/pull/53173) chore: bump litellm to 1.108.14 on lts/1.108.x
- [#53202](https://github.com/BerriAI/litellm/pull/53202) chore(ui): remove the decision models announcement banner
- [#53151](https://github.com/BerriAI/litellm/pull/53151) fix(budgets): preserve full elapsed intervals between resets
- [#53190](https://github.com/BerriAI/litellm/pull/53190) feat(lens): add /lens/login so a LiteLLM login can sign in to standalone Lens
- [#53197](https://github.com/BerriAI/litellm/pull/53197) fix(lens): name gateway Codex runs codex-cli so they join Codex's own traces in Lens
- [#53194](https://github.com/BerriAI/litellm/pull/53194) fix(lens): start a new run when an agent with no session id repeats a prompt
- [#53170](https://github.com/BerriAI/litellm/pull/53170) fix(proxy): stop a forged Authorization header from recording zero spend on an operator OAuth deployment
- [#52807](https://github.com/BerriAI/litellm/pull/52807) fix(decisions): accept OpenAI input_json content parts on /v1/decisions
- [#52805](https://github.com/BerriAI/litellm/pull/52805) fix(decisions): accept OpenAI input_json content parts on /v1/decisions
- [#53186](https://github.com/BerriAI/litellm/pull/53186) feat(lens): send the calling agent's framework, task and session on gateway traces
- [#53193](https://github.com/BerriAI/litellm/pull/53193) test(model-hub): compare matching pass-through rows
- [#53141](https://github.com/BerriAI/litellm/pull/53141) test(realtime): place transcription sessions on both workers
- [#52675](https://github.com/BerriAI/litellm/pull/52675) refactor(db): move the rust pool refusal probe into a RefusalWatch behind a FailFastPool
- [#53189](https://github.com/BerriAI/litellm/pull/53189) test(aiohttp): verify streaming timeouts without wall-clock delays
- [#53183](https://github.com/BerriAI/litellm/pull/53183) fix(bedrock): keep the Nova embedding transform_response a plain forwarder
- [#53163](https://github.com/BerriAI/litellm/pull/53163) feat(lens): treat Lens's own calls as ordinary calls labeled lens-signals and remove x-lens-internal
- [#53171](https://github.com/BerriAI/litellm/pull/53171) fix(proxy): enforce file ownership on Gemini pass-through file get and delete
- [#53172](https://github.com/BerriAI/litellm/pull/53172) test(lens): isolate exporter Prometheus counters
- [#53142](https://github.com/BerriAI/litellm/pull/53142) fix(bedrock): report Nova embedding input tokens from the Bedrock metered count
- [#52964](https://github.com/BerriAI/litellm/pull/52964) fix(responses): send bridged system prompts too long for instructions as input
- [#53169](https://github.com/BerriAI/litellm/pull/53169) chore(repo): remove committed Lens review screenshots
- [#53166](https://github.com/BerriAI/litellm/pull/53166) chore(cost-map): add runwayml/seedance2_5_flash
- [#53041](https://github.com/BerriAI/litellm/pull/53041) fix(lens): update the embedded UI to the published release
- [#53167](https://github.com/BerriAI/litellm/pull/53167) chore(model_prices): mark xai/grok-build-0.1 as end of life on 2026-11-19
- [#53168](https://github.com/BerriAI/litellm/pull/53168) chore(model_prices): add databricks gpt-5 and gpt-5-mini retirement dates
- [#53165](https://github.com/BerriAI/litellm/pull/53165) chore(model_prices): add baseten bison and groundhog decision models
- [#53160](https://github.com/BerriAI/litellm/pull/53160) fix(proxy): skip model allow-lists on compliance check routes
- [#53054](https://github.com/BerriAI/litellm/pull/53054) fix(ui): keep auto-router simple setup when changing strategy
- [#53139](https://github.com/BerriAI/litellm/pull/53139) fix(ui): only offer teams where the caller can create keys in Create Key
- [#53146](https://github.com/BerriAI/litellm/pull/53146) fix(proxy): tolerate unavailable psycopg during migrations
- [#53154](https://github.com/BerriAI/litellm/pull/53154) test(perf): remove Postgres peak connection measurement
- [#53059](https://github.com/BerriAI/litellm/pull/53059) fix(mcp)!: make automatic gateway DCR registration opt-in
- [#53157](https://github.com/BerriAI/litellm/pull/53157) test(redis): exempt the state and hook cache classes from the key family check
- [#53158](https://github.com/BerriAI/litellm/pull/53158) fix(lens): do not send Lens's own analysis calls back to Lens as traces
- [#52960](https://github.com/BerriAI/litellm/pull/52960) fix(gemini): match tool results to calls split across assistant turns
- [#53121](https://github.com/BerriAI/litellm/pull/53121) test(perf): recalibrate the Postgres peak connection limit
- [#53148](https://github.com/BerriAI/litellm/pull/53148) test(lens): import TypedDict from typing_extensions so the Lens proxy tests pass on Python 3.10
- [#53135](https://github.com/BerriAI/litellm/pull/53135) fix(gemini): support explicit text in embedding inputs
- [#52875](https://github.com/BerriAI/litellm/pull/52875) feat(proxy): health check AI Hub models published through a wildcard
- [#53064](https://github.com/BerriAI/litellm/pull/53064) fix(proxy): preserve budget window edits during resets
- [#53144](https://github.com/BerriAI/litellm/pull/53144) test(auth): hold the JWT mapping insert the Rust repository now sends
- [#53143](https://github.com/BerriAI/litellm/pull/53143) chore: bump litellm-enterprise 0.1.87 -> 0.1.88, litellm-proxy-extras 0.4.119 -> 0.4.120
- [#53126](https://github.com/BerriAI/litellm/pull/53126) fix(streaming): preserve Azure model when bridge chunks omit it
- [#53132](https://github.com/BerriAI/litellm/pull/53132) fix(openai): preserve omitted headers for chat and embeddings
- [#53034](https://github.com/BerriAI/litellm/pull/53034) test: fix four flaky router and s3 log unit tests
- [#53125](https://github.com/BerriAI/litellm/pull/53125) fix(cost): bill Perplexity embeddings at the cost Perplexity reports
- [#53042](https://github.com/BerriAI/litellm/pull/53042) feat(proxy): send gateway model calls to Lens as traces when the Lens store is connected
- [#52998](https://github.com/BerriAI/litellm/pull/52998) fix(proxy): rotate all database secrets with the master key
- [#53130](https://github.com/BerriAI/litellm/pull/53130) fix(cost): bill Together AI speech rows priced per character at that rate
- [#52979](https://github.com/BerriAI/litellm/pull/52979) fix(complexity-router): support optional classifier output limits
- [#53128](https://github.com/BerriAI/litellm/pull/53128) test(spend): supply the usage cache in budget reset tests
- [#53129](https://github.com/BerriAI/litellm/pull/53129) test(projects): assert both project cache eviction keys
- [#52968](https://github.com/BerriAI/litellm/pull/52968) fix(ui): use one English name per admin UI concept
- [#53124](https://github.com/BerriAI/litellm/pull/53124) chore(docs): regenerate provider endpoints support for Together AI speech
- [#52867](https://github.com/BerriAI/litellm/pull/52867) test(perf): report unanswered RSS captures as probe incomplete, not worker death
- [#53017](https://github.com/BerriAI/litellm/pull/53017) test(spend): expect soft budget duration in customer scopes
- [#52912](https://github.com/BerriAI/litellm/pull/52912) chore(cost-map): rolling registry audit, Together/Perplexity/InferenceAPIs/AssemblyAI rows, xAI/Gemini/Anthropic metadata
- [#51259](https://github.com/BerriAI/litellm/pull/51259) fix(proxy): forward limit, order, after, before and include on GET /v1/responses/{id}/input_items
- [#53108](https://github.com/BerriAI/litellm/pull/53108) chore(model_prices): remove databricks-gemini-nano-banana-2-1 until Databricks documents the endpoint
- [#48373](https://github.com/BerriAI/litellm/pull/48373) fix(anthropic)!: send extra_body fields at the top level of the Messages request

#### 🐛 New Issues
- [#53185](https://github.com/BerriAI/litellm/issues/53185) [Bug]: OAuth client_id query parameter rejected on pass-through GET `bug` 💬5
- [#53079](https://github.com/BerriAI/litellm/issues/53079) [Bug]: Chat UI returns MCP permission 403 while the same user's team-bound key succeeds on /responses `bug` `llm translation` 💬2
- [#53067](https://github.com/BerriAI/litellm/issues/53067) [Bug]: Request/Response logs remain unavailable after enabling prompt storage (regression) 💬1
- [#53159](https://github.com/BerriAI/litellm/issues/53159) [Bug]: Responses bridge drops parallel tool-call arguments when OpenAI sends them only in `function_call_arguments.done` `llm translation` 💬1
- [#53119](https://github.com/BerriAI/litellm/issues/53119) [Bug]: Vertex Gemini image models: n > 1 on /chat/completions is forwarded as candidateCount and returns an opaque 400 INVALID_ARGUMENT `llm translation` 💬1
- [#53099](https://github.com/BerriAI/litellm/issues/53099) [Bug]: complexity_router with `plugins` returns RouterRateLimitError instead of applying fallbacks when the selected model is in cooldown `llm translation` 💬1
- [#53156](https://github.com/BerriAI/litellm/issues/53156) Billed-but-errored requests are dropped from spend when disable_error_logs is true
- [#53122](https://github.com/BerriAI/litellm/issues/53122) [Bug]: team order and weighted fallbacks never run on /v1/responses, /v1/messages and router decisions calls `llm translation`
- [#53263](https://github.com/BerriAI/litellm/issues/53263) [Bug]: New spend logs omit Request/Response payloads despite prompt storage being enabled on v1.110.2
- [#53152](https://github.com/BerriAI/litellm/issues/53152) Proxy callback settings convert JSON null to the literal string None
- [#53133](https://github.com/BerriAI/litellm/issues/53133) [Bug]: DeepSeek thinking controls are dropped or rewritten on DeepSeek, DashScope, and Volcengine `llm translation`
- [#53134](https://github.com/BerriAI/litellm/issues/53134) [Bug]: DashScope video status requests send the async creation header
- [#53120](https://github.com/BerriAI/litellm/issues/53120) [Bug]: Image generation / edit requests hold ~7–9× the image size in proxy memory per request in flight (Vertex Gemini image models) `llm translation`
- [#53118](https://github.com/BerriAI/litellm/issues/53118) [Feature]: Per-route / per-model request-size limit for image requests (Vertex Gemini rejects inline images over 256 MB only after the full upload) `llm translation`
- [#53117](https://github.com/BerriAI/litellm/issues/53117) [Feature]: Support Azure OpenAI deployment discovery for azure/* wildcard models `enhancement` `llm translation`
- [#53115](https://github.com/BerriAI/litellm/issues/53115) [Bug]: Cursor CLI relay returns 403 "cannot inspect content for guardrails" with the default parallel-request limiter
- [#53105](https://github.com/BerriAI/litellm/issues/53105) Langfuse tries to export every span batch with incomplete credentials
- [#53102](https://github.com/BerriAI/litellm/issues/53102) Proxy token-count server errors lose their per-call record at WARNING
- [#53095](https://github.com/BerriAI/litellm/issues/53095) Native Messages caches the consumed stream returned by web-search interception `llm translation`
- [#53092](https://github.com/BerriAI/litellm/issues/53092) [Bug]: Local token counting raises on assistant custom tool call history
- [#53080](https://github.com/BerriAI/litellm/issues/53080) [Bug]: GET /auto_router/session returns 500 for callers without an api_key (lite login session)
- [#53076](https://github.com/BerriAI/litellm/issues/53076) [Bug]: max_parallel_requests admits up to twice the cap after the slot counter's cache entry expires (600 s) `bug` `llm translation`
- [#53069](https://github.com/BerriAI/litellm/issues/53069) /v1/images/edits: response_format is passed to OpenAI for gpt-image models (400), and additional_drop_params leaks into the form body `llm translation`
- [#53058](https://github.com/BerriAI/litellm/issues/53058) [Bug]: azure_ai decision models silently drop image input (assets) — Microsoft-Decision-1.1 `llm translation`
- [#53040](https://github.com/BerriAI/litellm/issues/53040) [Feature]: Expose Prometheus outcomes for routed deployment attempts `llm translation`
- [#53031](https://github.com/BerriAI/litellm/issues/53031) [Bug]: Gemini tool schema conversion forwards unsupported JSON Schema keywords (uniqueItems etc.) and 400s `bug` `llm translation`

#### 🔒 Closed Issues
- [#18058](https://github.com/BerriAI/litellm/issues/18058) [Bug]: Cost calculation in LiteLLM proxy not working for ElevenLabs model
- [#30300](https://github.com/BerriAI/litellm/issues/30300) [Bug]: 400: [ERROR: Bad Request] when using image generation from OpenWeb UI
- [#49680](https://github.com/BerriAI/litellm/issues/49680) [Bug]: prisma_migration --skip_server_startup crashes with ImportError when psycopg cannot load libpq (unguarded import in ensure_request_log_indexes)
- [#51445](https://github.com/BerriAI/litellm/issues/51445) [Bug]: /v1/responses budget reservation is sized from max_tokens, which is never forwarded, so concurrent calls overrun max_budget
- [#36066](https://github.com/BerriAI/litellm/issues/36066) [Bug]: Realtime API does not resolve api_key from litellm_credential_name
- [#44538](https://github.com/BerriAI/litellm/issues/44538) [Bug]: /v1/audio/transcriptions with response_format=text logs zero usage
- [#36997](https://github.com/BerriAI/litellm/issues/36997) [Bug]: Admin UI session cookie is a non-HttpOnly JWT carrying the caller's proxy key
- [#37028](https://github.com/BerriAI/litellm/issues/37028) Gemini native custom api_base sends system_instruction instead of canonical systemInstruction
- [#49311](https://github.com/BerriAI/litellm/issues/49311) [Bug]: Exact-match response cache never hits when OTel is enabled and `enable_caching_on_provider_specific_optional_params` is true
- [#46454](https://github.com/BerriAI/litellm/issues/46454) [Feature]: Let the Bedrock guardrail screen tool-call arguments
- [#53067](https://github.com/BerriAI/litellm/issues/53067) [Bug]: Request/Response logs remain unavailable after enabling prompt storage (regression)
- [#49927](https://github.com/BerriAI/litellm/issues/49927) [Bug]: responses() sends temperature to OpenAI o-series models even with drop_params=True
- [#48831](https://github.com/BerriAI/litellm/issues/48831) [Bug]: Gemini conversion drops a parallel tool call when two calls have the same name and arguments, leaving more functionResponse than functionCall parts
- [#52834](https://github.com/BerriAI/litellm/issues/52834) [Bug]: Proxy ignores the `Cache-Control` request header (`no-cache` / `no-store`): case-sensitive lookup on lower-cased headers (v1.108.0, still on main)
- [#52957](https://github.com/BerriAI/litellm/issues/52957) Gemini/Vertex stream cut before finishReason still completes as finish_reason="stop" (not caught by #47665)
- [#36665](https://github.com/BerriAI/litellm/issues/36665) [Bug]: Blocking a model's primary deployment(s) skips the configured `fallbacks` chain entirely, instead of routing to the healthy fallback
- [#36992](https://github.com/BerriAI/litellm/issues/36992) [Bug]: completion(stream=True) silently drops reasoning-summary streaming for OpenAI reasoning models (79s of total silence)
- [#37008](https://github.com/BerriAI/litellm/issues/37008) Prisma engine watchdog treats ECHILD from waitpid as engine death and forces a reconnect
- [#47949](https://github.com/BerriAI/litellm/issues/47949) [Bug]: Errors relayed from an OpenAI-compatible backend lose `param` and arrive as a stringified JSON (or Python repr) inside `message`
- [#49936](https://github.com/BerriAI/litellm/issues/49936) [Bug]: OpenAI HTTP 403 raises APIError or BadRequestError instead of PermissionDeniedError
- [#49932](https://github.com/BerriAI/litellm/issues/49932) [Bug]: /engines/{model}/chat/completions and /openai/deployments/{model}/chat/completions return the provider model name without streaming
- [#49925](https://github.com/BerriAI/litellm/issues/49925) [Bug]: Cached responses() call on an Anthropic model fails with "provider returned a response with no 'choices'"
- [#52962](https://github.com/BerriAI/litellm/issues/52962) [Bug]: Viewing logs triggers /compliance/gdpr and /compliance/eu-ai-act requests resulting in 403 ModelAccessDeniedProxyException
- [#37454](https://github.com/BerriAI/litellm/issues/37454) fix(proxy): preserve timezone offsets when resetting multi-window budgets
- [#34896](https://github.com/BerriAI/litellm/issues/34896) [Bug]: budget_limits window resets are delayed by the timezone offset when litellm_settings.timezone is set
- [#53156](https://github.com/BerriAI/litellm/issues/53156) Billed-but-errored requests are dropped from spend when disable_error_logs is true
- [#53122](https://github.com/BerriAI/litellm/issues/53122) [Bug]: team order and weighted fallbacks never run on /v1/responses, /v1/messages and router decisions calls
- [#49929](https://github.com/BerriAI/litellm/issues/49929) [Bug]: A cache hit returns finish_reason "tool_calls" for a stored Anthropic response that had "stop"
- [#50243](https://github.com/BerriAI/litellm/issues/50243) [Bug]: Chat→Responses bridge puts system prompts longer than 1,048,576 characters into `instructions`, which OpenAI rejects
- [#49063](https://github.com/BerriAI/litellm/issues/49063) [Bug]: responses() with Gemini fails with "Missing corresponding tool call" when a reasoning item sits between two function_call items
- [#46719](https://github.com/BerriAI/litellm/issues/46719) [Bug]: Gemini embeddings read text that starts with data:, gs:// or files/ as media, with no way to send it as text
- [#50912](https://github.com/BerriAI/litellm/issues/50912) [Bug]: Azure streams bridged to the Responses API return chunks with model=None
- [#51464](https://github.com/BerriAI/litellm/issues/51464) [Bug]: openai.omit in extra_headers fails validation for chat completions and embeddings since v1.108.1

### Unsloth (`unslothai/unsloth`)

**Stars:** 79,860 · **Open issues:** 493 · **Last push:** <1h ago

On November 21, 2026, Unsloth released version v0.1.922-beta, introducing the Inkling 2 Mini model, a powerful 26.4B model optimized for 16GB RAM, which enhances image generation speed and efficiency on small GPUs, particularly benefiting Apple Silicon users with video restyling capabilities. This update also improves chat functionality by ensuring that conversations utilizing MCP tools no longer reprocess the entire dialogue for every message. Additionally, significant merged features included bug fixes related to the Studio environment, enhancements for model picker display, and updates to support newer installations on Apple Silicon. Among the new issues, users reported bugs with the Inkling model failing to load and a malware warning during the update process, drawing particular attention.

#### 🚀 New Releases
- [v0.1.922-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.922-beta) Inkling Mini + Bug fixes
- [v0.1.921-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.921-beta) Bug Fixes + Faster images +Inkling Mini + faster MCP chats

#### ✅ Merged PRs
- [#18675](https://github.com/unslothai/unsloth/pull/18675) GRPO num_iterations > 1: take old logps from the first loss pass, not a separate forward
- [#18721](https://github.com/unslothai/unsloth/pull/18721) Tests: give the SyntheticDataKit short-timeout wall-clock test room for runner jitter
- [#18707](https://github.com/unslothai/unsloth/pull/18707) Tighten recent README updates
- [#18704](https://github.com/unslothai/unsloth/pull/18704) Studio: bound skill frontmatter merge keys on the composed nodes so PyYAML 6.0.4 cannot hide the expansion
- [#18698](https://github.com/unslothai/unsloth/pull/18698) Studio tests: read the startup-crash rung gates by shape instead of counting them
- [#18533](https://github.com/unslothai/unsloth/pull/18533) Studio diffusion: real-step CUDA graph warm-ups by default
- [#18684](https://github.com/unslothai/unsloth/pull/18684) Studio diffusion: keep the checkpointing budget with DiT block swap
- [#18696](https://github.com/unslothai/unsloth/pull/18696) Bump install.sh / install.ps1 pin to unsloth>=2026.11.9
- [#18695](https://github.com/unslothai/unsloth/pull/18695) Studio: keep the drafter and shrink a Studio-chosen context when the target context does not fit
- [#18692](https://github.com/unslothai/unsloth/pull/18692) Studio: size Inkling 2's banded relative-bias attention for the next llama.cpp prebuild
- [#18689](https://github.com/unslothai/unsloth/pull/18689) Studio: size Inkling 2's dense relative-position bias in the GGUF compute buffer estimate
- [#18685](https://github.com/unslothai/unsloth/pull/18685) GRPO packing: MoE-aware self-check and varlen attention for packed rows
- [#18664](https://github.com/unslothai/unsloth/pull/18664) Studio: install the Data Designer seed plugins on Python 3.10
- [#18532](https://github.com/unslothai/unsloth/pull/18532) Studio diffusion: the INT8 attention sink path repeats a seed from the first render
- [#18687](https://github.com/unslothai/unsloth/pull/18687) Studio: model picker 420px on short windows, 440px up to 1080px tall
- [#18688](https://github.com/unslothai/unsloth/pull/18688) Tests: ignore torch.compile resume functions when counting MLP-skip arming layers
- [#18660](https://github.com/unslothai/unsloth/pull/18660) PrefixGrouper Qwen3-MoE: accept per-module config copies from the vLLM rebuild
- [#18677](https://github.com/unslothai/unsloth/pull/18677) Lint: record the Mistral regex tokenizer owners in the risky loader baseline
- [#18659](https://github.com/unslothai/unsloth/pull/18659) Studio: keep an Apple Silicon install's torch through studio update
- [#18673](https://github.com/unslothai/unsloth/pull/18673) Bump install.sh / install.ps1 pins to unsloth>=2026.11.8 and unsloth-zoo>=2026.11.8
- [#18662](https://github.com/unslothai/unsloth/pull/18662) Keep tokenizers loading when the Hub rate limits the Mistral tag lookup
- [#18665](https://github.com/unslothai/unsloth/pull/18665) Temperature fixes
- [#18649](https://github.com/unslothai/unsloth/pull/18649) Studio: keep the NPU notice while the first model list loads
- [#18648](https://github.com/unslothai/unsloth/pull/18648) Studio NPU: name a refused FastFlowLM DLL when Enable fails, instead of an empty reason
- [#18428](https://github.com/unslothai/unsloth/pull/18428) Install torch 2.13 on new Apple Silicon homes for the fused MPS attention kernel
- [#18661](https://github.com/unslothai/unsloth/pull/18661) Studio: expanding a collapsed model picker opens at full height
- [#18658](https://github.com/unslothai/unsloth/pull/18658) Studio NPU: delete the old lemond once FastFlowLM runs without it
- [#18657](https://github.com/unslothai/unsloth/pull/18657) Tests: the image switch guard follows the load-tail wait from #18626
- [#18656](https://github.com/unslothai/unsloth/pull/18656) LoRA MLP: build the skipped down projection output out of place
- [#18645](https://github.com/unslothai/unsloth/pull/18645) PrefixGrouper flex: skip the doomed compile on small-smem NVIDIA GPUs, opt-in small tiles
- [#18654](https://github.com/unslothai/unsloth/pull/18654) Tests: read checked-in files with an explicit encoding in the run report and FLM host tests
- [#18655](https://github.com/unslothai/unsloth/pull/18655) Tests: allowlist the WebKitGTK legacy-compositor flag in the appearance coverage gate
- [#18652](https://github.com/unslothai/unsloth/pull/18652) Tests: regenerate the diffusion family-data freeze for the FLUX.1-schnell ConvRot mapping
- [#18651](https://github.com/unslothai/unsloth/pull/18651) Tests: cover both NPU install paths in the Lemonade installer tests
- [#18631](https://github.com/unslothai/unsloth/pull/18631) Attention dispatch: saved attention routing scope, torch 2.4 enable_gqa floor, block SDPA cache tag
- [#18641](https://github.com/unslothai/unsloth/pull/18641) Skip the replayed LoRA MLP down projection under block compile
- [#18635](https://github.com/unslothai/unsloth/pull/18635) Packed attention lengths: keep them across BatchEncoding.to(), dense fallback for rejected varlen layers
- [#18634](https://github.com/unslothai/unsloth/pull/18634) GRPO rollout scope: off for async tools that call vLLM; leak probe child mode
- [#18633](https://github.com/unslothai/unsloth/pull/18633) Fused label smoothing: keep lm_head LoRA and bias in the loss, fallback paths
- [#18642](https://github.com/unslothai/unsloth/pull/18642) GRPO: score old / ref logps under no_grad, not inference_mode
- [#18626](https://github.com/unslothai/unsloth/pull/18626) Studio: wait out a published image load's tail instead of refusing generate with 409
- [#18639](https://github.com/unslothai/unsloth/pull/18639) Studio: hosted ConvRot INT8 file for FLUX.1-schnell (inert until the file is published)
- [#18528](https://github.com/unslothai/unsloth/pull/18528) Studio: show why the NPU model list failed in the chat model picker
- [#18554](https://github.com/unslothai/unsloth/pull/18554) Studio NPU: run FastFlowLM without Lemonade on Windows
- [#18640](https://github.com/unslothai/unsloth/pull/18640) Studio: pick DiT block swap from the training API and the Train tab
- [#18628](https://github.com/unslothai/unsloth/pull/18628) Studio: image and video loads read the cache only under HF_HUB_OFFLINE
- [#18600](https://github.com/unslothai/unsloth/pull/18600) [Bug] Unsloth Desktop: pinned sidebar glass haloes the logo on WebKitGTK before 2.54 (TextureMapper backdrop includes later layers)
- [#18632](https://github.com/unslothai/unsloth/pull/18632) Frozen prefix skip: looped stacks, bypassed stacks, outer fullgraph compile, Qwen3-VL in-place writes
- [#18644](https://github.com/unslothai/unsloth/pull/18644) Studio: list each GGUF repo from the Hub once per 2 minutes, and wait out a 429
- [#18553](https://github.com/unslothai/unsloth/pull/18553) Studio NPU: pin the AMD-signed FastFlowLM 1.0.13 and hide its decision models
- [#18448](https://github.com/unslothai/unsloth/pull/18448) Studio: keep a Windows iGPU's carve-out usable when a load is memory-mapped
- [#18636](https://github.com/unslothai/unsloth/pull/18636) Studio: list safetensors models under the chat picker's Safetensors filter on GPU hosts
- [#18638](https://github.com/unslothai/unsloth/pull/18638) GRPO vLLM sync on TRL >= 0.28: stream merged LoRA weights without merging into the training model
- [#18629](https://github.com/unslothai/unsloth/pull/18629) DoRA factored norm: fp32 rank terms on GPUs above rank 32, no fp64 on XPU, fp16 accumulation fallback
- [#18630](https://github.com/unslothai/unsloth/pull/18630) QAT rounding and NF4 dequant cache: inference-mode reloads, recipe marker, bit-exact checksums
- [#18577](https://github.com/unslothai/unsloth/pull/18577) [Bug] AMD NPU: non-streaming chat completions return no usage
- [#18580](https://github.com/unslothai/unsloth/pull/18580) [Bug] AMD NPU: run settings saved for an NPU model are named after the lemonade id, not the model name
- [#18579](https://github.com/unslothai/unsloth/pull/18579) [Bug] Unsloth Studio / Desktop: exported GGUFs and converted Q4NX models get their own Exported section in the model picker
- [#18627](https://github.com/unslothai/unsloth/pull/18627) Studio: skip a render's prompt upsampler when it cannot fit on the GPU
- [#18616](https://github.com/unslothai/unsloth/pull/18616) GRPO PrefixGrouper: cover transformers-native Qwen3-MoE attention (opt-in)
- [#18487](https://github.com/unslothai/unsloth/pull/18487) Unsloth Studio: raise the mlx-vlm floor to 0.6.4 and hold the MLX gate to the installed unsloth-zoo's floors
- [#18603](https://github.com/unslothai/unsloth/pull/18603) Add opt-in memory and batch efficiency reports
- [#18607](https://github.com/unslothai/unsloth/pull/18607) Skip the LoRA MLP down projection in gradient checkpoint replays
- [#18624](https://github.com/unslothai/unsloth/pull/18624) Studio: fit the MCP match search to the room left for a reply
- [#18474](https://github.com/unslothai/unsloth/pull/18474) Respect late-added LoRA dropout in preference prefix sharing
- [#18614](https://github.com/unslothai/unsloth/pull/18614) AsyncGRPO: run prefix-trie rows through the FlexAttention tree mask on fast backbones
- [#18538](https://github.com/unslothai/unsloth/pull/18538) Studio: keep dates in JSON and JSONL datasets as written
- [#18486](https://github.com/unslothai/unsloth/pull/18486) Studio: build the MCP catalog once per loaded-tool lookup and price the listing off the event loop
- [#16564](https://github.com/unslothai/unsloth/pull/16564) Studio: import and export Appearance theme files
- [#18612](https://github.com/unslothai/unsloth/pull/18612) GRPO tools: trim TRL's dummy tool-call prefix at EOS only when whitespace follows
- [#18609](https://github.com/unslothai/unsloth/pull/18609) Send frozen weights without an adapter to TRL's vLLM engine once, not every sync
- [#18605](https://github.com/unslothai/unsloth/pull/18605) AsyncGRPO fast_inference: export vLLM preemptions and engine counters on /metrics
- [#18590](https://github.com/unslothai/unsloth/pull/18590) Unsloth Studio video: run Restyle on Apple Silicon, with the VAE on Metal once sd.cpp has IM2COL_3D
- [#18510](https://github.com/unslothai/unsloth/pull/18510) MLX: give a batched formatting_func one-row batches instead of single rows
- [#18527](https://github.com/unslothai/unsloth/pull/18527) Studio: let Desktop start on Windows AMD when the Triton pairing fails
- [#18611](https://github.com/unslothai/unsloth/pull/18611) ROCm: pack hybrid models by default when flash varlen passes its self-check
- [#18529](https://github.com/unslothai/unsloth/pull/18529) Studio: keep the MCP tool list fixed per chat and add each message's matches as a search
- [#18557](https://github.com/unslothai/unsloth/pull/18557) Studio: let the tool output length setting raise MCP results on connections
- [#18594](https://github.com/unslothai/unsloth/pull/18594) [Bug] Unsloth Studio / Desktop: Estimated Memory Usage pops in late and shifts Run settings every time Model is opened
- [#18581](https://github.com/unslothai/unsloth/pull/18581) [Bug] Unsloth Studio: a reasoning model that runs out of room while thinking leaves a blank turn on server-side chat runs
- [#18483](https://github.com/unslothai/unsloth/pull/18483) Studio chat: stop re-reading a chat after this tab's own writes
- [#18562](https://github.com/unslothai/unsloth/pull/18562) fix(studio): open MLX Run settings in the model picker instead of the Hub
- [#18578](https://github.com/unslothai/unsloth/pull/18578) Studio MLX: cut the prompt cache's in-turn memory (own the cached prefix, capture at mlx-vlm's hook)
- [#18606](https://github.com/unslothai/unsloth/pull/18606) Studio diffusion: report per-render engagement (untiled vs tiled VAE decodes, FBCache computed vs skipped steps)
- [#18353](https://github.com/unslothai/unsloth/pull/18353) Studio: keep every tab signed in when a refresh answer is lost
- [#18476](https://github.com/unslothai/unsloth/pull/18476) Studio installer: skip the int8 GEMM torch probe where no wheel is published
- [#18485](https://github.com/unslothai/unsloth/pull/18485) Studio: render the export log in its own memoized list with stable row keys
- [#18478](https://github.com/unslothai/unsloth/pull/18478) Studio: remember a found GPU when resolving the embedding backend
- [#18618](https://github.com/unslothai/unsloth/pull/18618) Tests: settings-tabs smoke expects the Chat tab sections the moved controls now live in
- [#18608](https://github.com/unslothai/unsloth/pull/18608) Studio diffusion training: offer mxfp8 on sm100 / sm103 only, not sm120
- [#18470](https://github.com/unslothai/unsloth/pull/18470) Studio: read the browser cookie jar once per page cookie state
- [#18543](https://github.com/unslothai/unsloth/pull/18543) Studio: stop scheduled tasks using the translation model
- [#18540](https://github.com/unslothai/unsloth/pull/18540) Studio: read scanned pages of a PDF attached to a chat
- [#18473](https://github.com/unslothai/unsloth/pull/18473) Studio: list Hub file sizes only for Discover rows in the chat model picker
- [#18537](https://github.com/unslothai/unsloth/pull/18537) Studio transcribe: keep the engine's speaker for an interruption instead of guessing by overlap
- [#18539](https://github.com/unslothai/unsloth/pull/18539) Studio: keep all text in Word files attached to a chat
- [#18477](https://github.com/unslothai/unsloth/pull/18477) Studio: overlap the Hub search listings and ask only for rows that are read
- [#18617](https://github.com/unslothai/unsloth/pull/18617) Tests: build fake-CUDA Linear fixtures that run on a CPU-only torch
- [#18475](https://github.com/unslothai/unsloth/pull/18475) Studio Translate: skip repeat Hub listings and OCR past the kept text
- [#18507](https://github.com/unslothai/unsloth/pull/18507) Studio: keep rows from printing through the Older models header
- [#18604](https://github.com/unslothai/unsloth/pull/18604) Studio diffusion training: DiT block swap, used by auto where int8 was the only fit
- [#18601](https://github.com/unslothai/unsloth/pull/18601) Studio diffusion training: keep long attention outputs of checkpointed blocks
- [#18552](https://github.com/unslothai/unsloth/pull/18552) Studio: rate GGUFs on a GGUF-only Mac against Metal, not half of free RAM
- [#18544](https://github.com/unslothai/unsloth/pull/18544) Studio: keep images in imported Claude Code chats
- [#18602](https://github.com/unslothai/unsloth/pull/18602) Studio diffusion training: route masked attention to cuDNN on measured cards
- [#18591](https://github.com/unslothai/unsloth/pull/18591) Studio Triton kernels: resolve factory closure names on Triton 3.2 / 3.3
- [#18588](https://github.com/unslothai/unsloth/pull/18588) Studio RDNA W8A8: probe the weight's card and follow the operand's card
- [#18587](https://github.com/unslothai/unsloth/pull/18587) Studio int8 early prewarm: start the warm-up thread before publishing it
- [#18514](https://github.com/unslothai/unsloth/pull/18514) Studio: Stop before the first training step on Mac ends cleanly instead of erroring
- [#18542](https://github.com/unslothai/unsloth/pull/18542) Studio: do not save a memory from quoted text
- [#18547](https://github.com/unslothai/unsloth/pull/18547) Studio: hide numbers that an empty Excel format section hides
- [#18541](https://github.com/unslothai/unsloth/pull/18541) Studio: read every page of a multi-page TIFF in Translate
- [#18545](https://github.com/unslothai/unsloth/pull/18545) Studio: keep images in imported Codex chats
- [#18589](https://github.com/unslothai/unsloth/pull/18589) Studio MiniMax-H3-Image: stage attention tensors that sit on another card
- [#18585](https://github.com/unslothai/unsloth/pull/18585) Studio int8 GEMM: a huge race skipped for memory is raced again on a later load
- [#18584](https://github.com/unslothai/unsloth/pull/18584) Studio INT8 attention: key the strided cuDNN race by the call each card times
- [#18582](https://github.com/unslothai/unsloth/pull/18582) Studio Windows ROCm: decode compile only off for wide-head VAEs, fp64 kept, nested-safe SDPA guard
- [#18599](https://github.com/unslothai/unsloth/pull/18599) Studio: taller Translate language list with a bottom fade
- [#18598](https://github.com/unslothai/unsloth/pull/18598) Studio: close button on the Skipped update notice
- [#18597](https://github.com/unslothai/unsloth/pull/18597) Studio: Compare model bars match the chat wallpaper
- [#18596](https://github.com/unslothai/unsloth/pull/18596) Studio: Compare selects connected models instead of loading them locally
- [#18592](https://github.com/unslothai/unsloth/pull/18592) Studio MOSS rope offset test: skip on Triton ASTSource APIs it does not drive (3.2, 3.3)
- [#18586](https://github.com/unslothai/unsloth/pull/18586) Studio int8 GEMM: T4 native W8A8 tile race is read back from the race cache
- [#18583](https://github.com/unslothai/unsloth/pull/18583) Studio tests: fix two tests left stale by refactors (cuDNN strided hook, H3-Image LoRA reload message)
- [#18575](https://github.com/unslothai/unsloth/pull/18575) Studio int8: let an OOM in the native W8A8 CUTLASS GEMM propagate
- [#18595](https://github.com/unslothai/unsloth/pull/18595) Studio multi-GPU: CFG replicas of other models no longer import MOSS-Image (diffusers)
- [#18576](https://github.com/unslothai/unsloth/pull/18576) Studio: wallpaper composer fade, steady model picker height, effect render fixes, settings tidy
- [#18574](https://github.com/unslothai/unsloth/pull/18574) Studio diffusion probe cache: key persisted verdicts on the installed GPU driver
- [#18573](https://github.com/unslothai/unsloth/pull/18573) Studio VAE attention: gate ROCm half math on the autocast dtype that actually runs
- [#18571](https://github.com/unslothai/unsloth/pull/18571) Studio ROCm: an unanswered probe on an unverified card reads as math-only in split-device plans
- [#18570](https://github.com/unslothai/unsloth/pull/18570) Studio Restyle setup: keep a blob any other snapshot link still resolves to
- [#18569](https://github.com/unslothai/unsloth/pull/18569) Studio MiniMax-H3: bound reference audio resampling memory for rates coprime with 32 kHz
- [#18566](https://github.com/unslothai/unsloth/pull/18566) Studio MiniMax-H3-Image: roll back a parked VAE upload that runs out of memory
- [#18565](https://github.com/unslothai/unsloth/pull/18565) Studio ModelOpt FP8: never run the cold act-quant check or GEMM probe inside a CUDA graph capture
- [#18559](https://github.com/unslothai/unsloth/pull/18559) Studio multi-GPU: CFG replicas re-fuse MOSS-Image and Z-Image Q/K/V on their own card
- [#18572](https://github.com/unslothai/unsloth/pull/18572) Studio sd.cpp: fall back to the PNG decode when a latent response cannot be parsed
- [#18568](https://github.com/unslothai/unsloth/pull/18568) Studio LoRA placement: price PEFT embedding adapters (lora_embedding_A/B) in the measured reserve
- [#18567](https://github.com/unslothai/unsloth/pull/18567) Studio DiT training: record a failed text-encoder streaming setup as type and message only
- [#18564](https://github.com/unslothai/unsloth/pull/18564) Studio training cond cache: evict only entries the cache wrote
- [#18560](https://github.com/unslothai/unsloth/pull/18560) Studio SDXL LoRA training: route the VAE's attention on ROCm before encoding latents
- [#18502](https://github.com/unslothai/unsloth/pull/18502) Studio: clear the pending CUDA error after a refused host registration
- [#18558](https://github.com/unslothai/unsloth/pull/18558) Studio MiniMax-H3-Image training: key cached captions on the encoder that actually loaded
- [#18556](https://github.com/unslothai/unsloth/pull/18556) Studio: stop re-extracting a llama.cpp bundle that ships no DiffusionGemma visual-server
- [#18561](https://github.com/unslothai/unsloth/pull/18561) Tests: read diffusion.py with an explicit encoding in the VAE finite-decode test
- [#18517](https://github.com/unslothai/unsloth/pull/18517) Studio video: Wan umT5 encodes only the real prompt tokens on a CPU or MPS text encoder

#### 🐛 New Issues
- [#18563](https://github.com/unslothai/unsloth/issues/18563) v0.1.920-beta Crashes on Model Load `feature request` `bug` 💬5
- [#18690](https://github.com/unslothai/unsloth/issues/18690) [Bug] Inkling Fails to Load on my 32 GB DDR5 RAM Laptop `feature request` `bug` 💬2
- [#18717](https://github.com/unslothai/unsloth/issues/18717) [Feature] sort list of models `feature request`
- [#18713](https://github.com/unslothai/unsloth/issues/18713) [Feature] Dedicated System Prompts Manager and Creator separate from "Run Settings" `feature request`
- [#18706](https://github.com/unslothai/unsloth/issues/18706) [Feature] Themes Marketplace `feature request`
- [#18699](https://github.com/unslothai/unsloth/issues/18699) [Bug] Saw "A script was blocked because it contains malware. This script did not harm your Mac." while updating unsloth today `feature request` `bug` 💬1
- [#18622](https://github.com/unslothai/unsloth/issues/18622) [Bug] Dual RX 6700 XT ROCm crash `feature request` `bug` 💬1
- [#18691](https://github.com/unslothai/unsloth/issues/18691) [Feature] Inkling 2 Mini finetune supported by Unsloth? `feature request`
- [#18683](https://github.com/unslothai/unsloth/issues/18683) [Feature] Library Improvement Suggestions `feature request`
- [#18681](https://github.com/unslothai/unsloth/issues/18681) [Feature] Better Chat Organization `feature request`
- [#18674](https://github.com/unslothai/unsloth/issues/18674) [Bug] Unsloth Translate - Failed Hmong Detection + Add Hmong as a supported language `feature request` `bug`
- [#18666](https://github.com/unslothai/unsloth/issues/18666) [Feature] Unsloth Desktop Translation Mode Improvements Part 2 `feature request`
- [#18647](https://github.com/unslothai/unsloth/issues/18647) [Bug] Studio: managed accounts cannot load models from subfolder repos (e.g. audio-cpp/audio.cpp-gguf) `feature request` `bug`
- [#18637](https://github.com/unslothai/unsloth/issues/18637) [Bug] Crash on window minimize and during idle `feature request` `bug`

#### 🔒 Closed Issues
- [#17015](https://github.com/unslothai/unsloth/issues/17015) Studio: repeated full prompt processing across turns with Qwen hybrid model after tool use
- [#18001](https://github.com/unslothai/unsloth/issues/18001) [Bug] Incorrect loading into unified memory on Ryzen 8700G & Radeon 780M
- [#18690](https://github.com/unslothai/unsloth/issues/18690) [Bug] Inkling Fails to Load on my 32 GB DDR5 RAM Laptop
- [#18546](https://github.com/unslothai/unsloth/issues/18546) [Bug] Studio xlsx reader shows numbers that an empty format section hides (0;-0;;@, 0;;)

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,198 · **Open issues:** 422 · **Last push:** 1h ago

On November 21, 2026, there were no new releases for AIBrix, but several significant pull requests were merged, addressing key bugs and introducing new features. Notably, bug fixes included enhancements to gateway routing with improved arithmetic guards on running requests and ensuring HTTPRoute parents are ready before caching successes. Additional features merged included a per-request output-token rate metric for pods and improvements to the gateway's shutdown ordering. A few prominent new issues were reported, particularly a bug (#3527) regarding local mode where the ext_proc incorrectly parses responses, leading to erroneous outputs. Overall, the day's developments focused on refining system stability and enhancing performance.

#### ✅ Merged PRs
- [#3525](https://github.com/vllm-project/aibrix/pull/3525) [Bug] Guard running-request arithmetic in gateway routing
- [#3495](https://github.com/vllm-project/aibrix/pull/3495) [Feat] Block pods on upstream failure statuses in the gateway blacklist
- [#3529](https://github.com/vllm-project/aibrix/pull/3529) [Bug] Require a ready HTTPRoute parent before caching success
- [#3497](https://github.com/vllm-project/aibrix/pull/3497) [Feat] Add a per-request output-token rate metric for pods
- [#3512](https://github.com/vllm-project/aibrix/pull/3512) [CI] Verify gateway inference for concurrent ModelAdapters
- [#3472](https://github.com/vllm-project/aibrix/pull/3472) [Bug] Register the KV event sync metrics when the manager starts
- [#3402](https://github.com/vllm-project/aibrix/pull/3402) [Bug] Subscribe to a pod's KV events once it is Ready
- [#3431](https://github.com/vllm-project/aibrix/pull/3431) fix(runtime): give SGLang a readiness probe that outlasts its /health sleep
- [#3444](https://github.com/vllm-project/aibrix/pull/3444) fix(gateway): preserve tool-call history and nullable content in KV-sync chat tokenization (#3307)
- [#3511](https://github.com/vllm-project/aibrix/pull/3511) [Bug] Export running-request estimates through a scrape-time collector
- [#3483](https://github.com/vllm-project/aibrix/pull/3483) [Feat] Improve gateway shutdown ordering and add bounded request draining
- [#3504](https://github.com/vllm-project/aibrix/pull/3504) [Bug] Accept /v1/models/ in the gateway plugin
- [#3510](https://github.com/vllm-project/aibrix/pull/3510) [Feat] Filter remote running reader sweeps to ready pods and skip fresh entries (#3442)

#### 🐛 New Issues
- [#3527](https://github.com/vllm-project/aibrix/issues/3527) [bug] local mode: ext_proc parses /v1/models and /metrics responses, so /v1/models returns 500 and /metrics gets an error appended `kind/bug` `area/gateway` `triage/accepted` `bug` 💬3
- [#3521](https://github.com/vllm-project/aibrix/issues/3521) [Bug] Kustomize keeps hard-coded Envoy references when the namespace or resource names change `kind/bug` `area/gateway` `triage/accepted` `bug` 💬3
- [#3524](https://github.com/vllm-project/aibrix/issues/3524) [Bug] Gateway caches an HTTPRoute with empty status.parents as ready `area/gateway` `triage/accepted` `kind/misc` `area/orchestration` 💬3
- [#3522](https://github.com/vllm-project/aibrix/issues/3522) [Bug] Gateway ClusterRoles grant unused write permissions `kind/bug` `area/gateway` `triage/accepted` `bug` 💬3
- [#3523](https://github.com/vllm-project/aibrix/issues/3523) [Bug] Pod blacklist keeps a quarantine for a recreated Pod that reuses the name `kind/bug` `area/gateway` `triage/accepted` `area/orchestration` 💬3
- [#3530](https://github.com/vllm-project/aibrix/issues/3530) [Bug] The controller manager crash-loops when --controllers leaves out every controller of an API group `kind/bug` `triage/accepted` `area/orchestration` 💬2
- [#3519](https://github.com/vllm-project/aibrix/issues/3519) openai_frontend: support output persistence for vLLM-Omni synchronous videos `kind/feature` `area/batch` 💬2

#### 🔒 Closed Issues
- [#3503](https://github.com/vllm-project/aibrix/issues/3503) [Bug] Gateway model-list endpoint returns 404 for /v1/models/

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,514 · **Open issues:** 687 · **Last push:** <1h ago

On November 21, 2026, there were no new releases for the Semantic Router, but the day saw significant activity in merged pull requests, including the noteworthy feature of moving Router Replay file writes off the request path (#7198) and improvements to the CI/build process with batch reads in the hourly PR label sweep (#6915). In terms of new issues, the introduction of multiple models to the Model Catalog stands out, including the addition of Gemma 4 IT models (#7165), Mistral Large 4 (#7174), and an array of versions such as GPT-6.2 Astra, GPT-6.2 Sol, and GPT-6.1 Terra (#7166). Additionally, a bug was reported related to streamed tool calls failing mid-arguments, which could impact response integrity (#7184). Overall, the day focused on enhancements to model availability and addressing potential issues in tool interactions.

#### ✅ Merged PRs
- [#7198](https://github.com/vllm-project/semantic-router/pull/7198) [Feature] Move Router Replay file writes off the request path
- [#6915](https://github.com/vllm-project/semantic-router/pull/6915) [CI/Build] Batch reads in the hourly PR label sweep

#### 🐛 New Issues
- [#7165](https://github.com/vllm-project/semantic-router/issues/7165) [Feature] Add four Gemma 4 IT models to the Model Catalog `enhancement` `accepted` `in-progress` `wg/evaluation-quality` 💬2
- [#7174](https://github.com/vllm-project/semantic-router/issues/7174) [Feature] Add Mistral Large 4 to the Model Catalog `enhancement` `accepted` `in-progress` `wg/evaluation-quality` 💬2
- [#7166](https://github.com/vllm-project/semantic-router/issues/7166) [Feature] Add GPT-6.2 Astra, GPT-6.2 Sol, and GPT-6.1 Terra to the Model Catalog `enhancement` `accepted` `in-progress` `wg/evaluation-quality` 💬2
- [#7172](https://github.com/vllm-project/semantic-router/issues/7172) [Feature] Add Claude Haiku 5.5 to the Model Catalog `enhancement` `accepted` `in-progress` `wg/evaluation-quality` 💬2
- [#7170](https://github.com/vllm-project/semantic-router/issues/7170) [Feature] Add Kimi K3.1 Pro to the Model Catalog `enhancement` `accepted` `in-progress` `wg/evaluation-quality` 💬2
- [#7171](https://github.com/vllm-project/semantic-router/issues/7171) [Feature] Add Inkling 2 Small to the Model Catalog `enhancement` `accepted` `in-progress` `wg/evaluation-quality` 💬2
- [#7164](https://github.com/vllm-project/semantic-router/issues/7164) [Feature] Add Gemini 3.5 Flash-Lite to the Model Catalog `enhancement` `accepted` `in-progress` `wg/evaluation-quality` 💬2
- [#7163](https://github.com/vllm-project/semantic-router/issues/7163) [Feature] Add Gemini 4 Argon, Carbon, Hydrogen, and Neon to the Model Catalog `enhancement` `accepted` `in-progress` `wg/evaluation-quality` 💬2
- [#7184](https://github.com/vllm-project/semantic-router/issues/7184) [Bug] A streamed tool call the upstream cuts off mid-arguments fails the whole response `bug` `accepted` `wg/data-plane-networking` 💬2
- [#7179](https://github.com/vllm-project/semantic-router/issues/7179) [Bug] Model runtime: a long Decision 3.0 forward reserves about twice the memory it uses under the default CUDA allocator `bug` `accepted` `wg/router-models-inference-runtime` 💬1
- [#7178](https://github.com/vllm-project/semantic-router/issues/7178) [Feature] Add Traditional Chinese (zh-TW) results for d3-ultra to the Decision 3.0 language evaluation `accepted` `wg/router-models-inference-runtime` 💬1
- [#7177](https://github.com/vllm-project/semantic-router/issues/7177) [Feature] Review Meituan creator admission for LongCat-2.5 `enhancement` `accepted` `ready-for-dev` `wg/evaluation-quality` 💬1
- [#7176](https://github.com/vllm-project/semantic-router/issues/7176) [Feature] Review InclusionAI creator admission for Ling 3.1 Flash `enhancement` `accepted` `ready-for-dev` `wg/evaluation-quality` 💬1
- [#7175](https://github.com/vllm-project/semantic-router/issues/7175) [Feature] Review Reflection creator admission for Beam 1.0 `enhancement` `accepted` `ready-for-dev` `wg/evaluation-quality` 💬1
- [#7173](https://github.com/vllm-project/semantic-router/issues/7173) [Feature] Add Qwen4-Max to the Model Catalog `enhancement` `accepted` `ready-for-dev` `wg/evaluation-quality` 💬1
- [#7169](https://github.com/vllm-project/semantic-router/issues/7169) [Feature] Add Nemotron 3.5 Super VL and Bolt to the Model Catalog `enhancement` `accepted` `ready-for-dev` `wg/evaluation-quality` 💬1
- [#7168](https://github.com/vllm-project/semantic-router/issues/7168) [Feature] Add Muse Spark Open to the Model Catalog `enhancement` `accepted` `ready-for-dev` `wg/evaluation-quality` 💬1
- [#7167](https://github.com/vllm-project/semantic-router/issues/7167) [Feature] Add Muse Wonder and Muse Ember to the Model Catalog `enhancement` `accepted` `ready-for-dev` `wg/evaluation-quality` 💬1
- [#7162](https://github.com/vllm-project/semantic-router/issues/7162) [Feature] Add Tencent Hy4 and Hy4 Flash to the Model Catalog `enhancement` `accepted` `ready-for-dev` `wg/evaluation-quality` 💬1
- [#7161](https://github.com/vllm-project/semantic-router/issues/7161) [Epic] Refresh the built-in Model Catalog with verified model cards `enhancement` `accepted` `wg/evaluation-quality` `epic` 💬1
- [#7157](https://github.com/vllm-project/semantic-router/issues/7157) [Docs] Publish the contributor guide on the website and make it the Community entry point `accepted` `wg/developer-experience-ecosystem` `documentation` 💬1
- [#7222](https://github.com/vllm-project/semantic-router/issues/7222) [Bug] A change refused with `RESTART_REQUIRED` still goes live through the Router's file reload `bug` `needs-acceptance` `wg/developer-experience-ecosystem`
- [#7220](https://github.com/vllm-project/semantic-router/issues/7220) [Feature] Route image requests using opt-in quality and layout signals `needs-acceptance` `wg/mom-routing`
- [#7212](https://github.com/vllm-project/semantic-router/issues/7212) [Feature] Verify Ollama as a backend and raise its catalog conformance `enhancement` `needs-acceptance` `wg/data-plane-networking`
- [#7200](https://github.com/vllm-project/semantic-router/issues/7200) [Bug] Chat→Responses stream rejects finished tool calls with empty arguments as invalid_stream_tool_arguments `needs-acceptance` `wg/data-plane-networking`

#### 🔒 Closed Issues
- [#7118](https://github.com/vllm-project/semantic-router/issues/7118) [Bug] Decision 3 timing calculation ignores explicitly declared zero cost
- [#7114](https://github.com/vllm-project/semantic-router/issues/7114) [Bug] Scheduler cost calculation ignores explicitly declared zero cost
- [#7137](https://github.com/vllm-project/semantic-router/issues/7137) [Bug] Local Stack media E2E expects invalid_request instead of invalid_media
- [#6445](https://github.com/vllm-project/semantic-router/issues/6445) [Feature] Support MPEG-TS (video/mp2t) inputs for Decision 3.0 video classification
- [#7108](https://github.com/vllm-project/semantic-router/issues/7108) [Bug] A late response can overwrite the active run in the Dashboard
- [#7113](https://github.com/vllm-project/semantic-router/issues/7113) [Bug] Chat streams still report tool_calls when output_tokens reaches the limit
- [#7110](https://github.com/vllm-project/semantic-router/issues/7110) [Bug] Systemone signal states ignore the deployment's question budget and fail silently
- [#6547](https://github.com/vllm-project/semantic-router/issues/6547) [Bug] The reference configuration caps a streamed body at 1 MiB and leaves an enabled handler unbounded
- [#6916](https://github.com/vllm-project/semantic-router/issues/6916) [Bug] Requests carrying backend extension members (e.g. vLLM vllm_xargs) are rejected with no operator opt-in
- [#7083](https://github.com/vllm-project/semantic-router/issues/7083) [Bug] WebSearch and other Anthropic server tools are refused for every backend
- [#6904](https://github.com/vllm-project/semantic-router/issues/6904) [CI/Build] Batch reads in the hourly PR label sweep

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*