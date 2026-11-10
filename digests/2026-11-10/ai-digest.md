# 📡 AI Ecosystem Digest — 2026-11-10

> Generated 2026-11-10 04:30 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 155,116 | 28 | 3 | 0 | 2 |
| [OpenAI Codex](https://github.com/openai/codex) | 134,517 | 20 | 4 | 41 | 3 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 108,749 | 0 | 0 | 6 | 0 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,389 | 17 | 7 | 0 | 2 |
| [OpenCode](https://github.com/anomalyco/opencode) | 225,707 | 23 | 7 | 21 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 29,146 | 19 | 10 | 4 | 3 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 394,261 | 180 | 209 | 108 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 262,131 | 15 | 0 | 0 | 1 |
| [vLLM](https://github.com/vllm-project/vllm) | 96,638 | 24 | 17 | 46 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 38,631 | 27 | 21 | 45 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 133,863 | 17 | 23 | 31 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 186,470 | 5 | 12 | 2 | 1 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 63,005 | 21 | 189 | 64 | 1 |
| [Unsloth](https://github.com/unslothai/unsloth) | 79,259 | 7 | 8 | 110 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,183 | 4 | 1 | 4 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,436 | 18 | 14 | 1 | 0 |

---

## ✨ Highlights

- **Claude Code** released versions [v2.1.322](https://github.com/anthropics/claude-code/releases/tag/v2.1.322) and [v2.1.321](https://github.com/anthropics/claude-code/releases/tag/v2.1.321).
- **Hermes Agent** released [v0.23.1](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.1).
- **GitHub Copilot CLI** released versions [v1.0.109-0](https://github.com/github/copilot-cli/releases/tag/v1.0.109-0) and [v1.0.108](https://github.com/github/copilot-cli/releases/tag/v1.0.108).
- A new issue in **OpenCode**, [#62988](https://github.com/anomalyco/opencode/issues/62988), has gained attention for a Windows background service that steals keyboard focus, receiving 5 comments.
- **Qwen Code**'s issue [#16712](https://github.com/QwenLM/qwen-code/issues/16712) concerning a Java lane compilation failure has also attracted interest with 5 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 155,116 · **Open issues:** 16,942 · **Last push:** 2h ago

On November 10, 2026, Claude Code released version v2.1.322, introducing a fast mode for Vertex in global, US, and EU regions, reverting to standard speed if the fast mode is declined. Additionally, v2.1.321 brought the default Fable model upgrade to Claude Fable 5.2, featuring a 1M context and updated pricing of $8/$40 per Mtok, along with a new setting to apply configurations across remote-control sessions. There were no merged pull requests today, but several new issues emerged, notably issue #108601 concerning long-running orchestrator sessions that ignore explicit instructions, which has sparked discussion among users. Other reported bugs included the inability of the Desktop app to navigate certain folders and persistent errors preventing the usage of Claude Code, indicating potential stability concerns.

#### 🚀 New Releases
- [v2.1.322](https://github.com/anthropics/claude-code/releases/tag/v2.1.322) v2.1.322
- [v2.1.321](https://github.com/anthropics/claude-code/releases/tag/v2.1.321) v2.1.321

#### 🐛 New Issues
- [#108601](https://github.com/anthropics/claude-code/issues/108601) Claude Code: long-running orchestrator session repeatedly acts against explicit, written, standing instructions ("oversee only", "research the standard first", "no firefighting") — across Opus 5.5 and Fable 5.1, across compactions `bug` `area:model` `platform:vscode` `platform:wsl` 💬3
- [#108717](https://github.com/anthropics/claude-code/issues/108717) [Bug] Cyber Threat Block Triggered on Legitimate Encryption Work `bug` `platform:windows` `area:model` 💬1
- [#108716](https://github.com/anthropics/claude-code/issues/108716) Desktop start_session refuses folders and presets whose names contain U+FE0F (emoji variation selector) `bug` `platform:macos` `area:desktop` 💬1
- [#108637](https://github.com/anthropics/claude-code/issues/108637) Browser pane cookie import: Firefox no longer listed as a source on macOS `bug` `platform:macos` `regression` `area:desktop` 💬1
- [#108724](https://github.com/anthropics/claude-code/issues/108724) [GitHub integration] Unable to connect GitHub account to Claude `bug` `area:auth` `github-integration`
- [#108723](https://github.com/anthropics/claude-code/issues/108723) [Bug] Advisor Tool and Channels unavailable on claude.ai account since Nov 9 (v2.1.322, Windows) `bug` `platform:windows` `area:auth`
- [#108722](https://github.com/anthropics/claude-code/issues/108722) Title: Desktop app (Code) does not navigate when opening a second scheduled-tas… `bug` `platform:windows` `area:desktop` `area:routines`
- [#108721](https://github.com/anthropics/claude-code/issues/108721) [Bug] User unable to use Claude Code: recurring error message (no details provided) `bug` `platform:windows` `area:model`
- [#108720](https://github.com/anthropics/claude-code/issues/108720) [Bug] Opus 5.5 safeguard false positive: [reasoning_extraction] refusals on routine coding tasks in headless mode `bug` `duplicate` `platform:macos` `area:model`
- [#108719](https://github.com/anthropics/claude-code/issues/108719) fire em all up it was posted at 4;06 pm but i have used 64% of the ultra plan i… `bug` `area:cost`
- [#108718](https://github.com/anthropics/claude-code/issues/108718) [Mods] In auto mode, a tool.call input rewrite is refused and the refusal shows the rewritten input to the model `bug` `has repro` `platform:macos` `area:hooks`
- [#108715](https://github.com/anthropics/claude-code/issues/108715) Auto mode sends Bash commands the static analyser cannot parse to the user instead of the classifier (2.1.317) `bug` `platform:macos` `area:bash` `regression`
- [#108714](https://github.com/anthropics/claude-code/issues/108714) [BUG] After an extension update + "Restart Extensions", existing session tabs stay gray (webview still points at the removed old extension folder) `bug` `has repro` `platform:macos` `area:ide`
- [#108713](https://github.com/anthropics/claude-code/issues/108713) [Bug] Claude gives answers without basic reasoning, behaves like a magic 8-ball `bug` `platform:macos` `area:model` `needs-info`
- [#108712](https://github.com/anthropics/claude-code/issues/108712) Artifact and Docs viewer refuses Safari with "This browser isn't supported" `bug` `has repro` `platform:macos`
- [#108711](https://github.com/anthropics/claude-code/issues/108711) [BUG] Auto-compaction mid-turn silently drops long pasted text from the active user message; attachments survive, transcript tool can't recover it `bug` `area:core`
- [#108710](https://github.com/anthropics/claude-code/issues/108710) Claude Code: Private repository authentication fails despite successful GitHub integration check `bug` `area:auth` `area:claude-code-web` `platform:web`
- [#108709](https://github.com/anthropics/claude-code/issues/108709) [FEATURE] Desktop app: show which threads are actively working in the Projects view `enhancement` `area:desktop`
- [#108708](https://github.com/anthropics/claude-code/issues/108708) [Bug] Claude Code refuses benign "deep dive repo to understand purpose" prompt as harmful `bug` `platform:macos` `area:model`
- [#108707](https://github.com/anthropics/claude-code/issues/108707) [Bug] Claude app scroll position jumps to unrelated content on layout reflow (iOS/desktop) `bug` `platform:macos` `platform:ios`
- [#108706](https://github.com/anthropics/claude-code/issues/108706) [BUG] Resuming a session that starts with a compaction block inserts an empty per-turn-effort system message inside the kept turns, invalidating their thinking `bug` `has repro` `platform:macos` `area:model`
- [#108705](https://github.com/anthropics/claude-code/issues/108705) [BUG] Desktop (Windows): split view forces top/bottom panes when zoomed in — no way to choose left/right `bug` `platform:windows` `area:a11y` `area:desktop`
- [#108704](https://github.com/anthropics/claude-code/issues/108704) [Bug] Reply quote chips overflow message box without scroll or height limit `bug` `platform:macos` `area:desktop`
- [#108703](https://github.com/anthropics/claude-code/issues/108703) [Bug] Model excessively consumes token budget generating PRD files, exhausting usage limit `bug` `platform:linux` `area:cost` `area:model`
- [#108702](https://github.com/anthropics/claude-code/issues/108702) GitHub Integration still shows old org name after GitHub organisation rename; repos report "needs to be reconnected" `bug` `area:claude-code-web` `platform:web` `github-integration`
- [#108701](https://github.com/anthropics/claude-code/issues/108701) [BUG] Background refresh moves a branch-pinned marketplace to the default branch and silently downgrades its plugin `bug` `platform:windows` `area:plugins`
- [#108700](https://github.com/anthropics/claude-code/issues/108700) Bug Report: No issue details provided `bug` `platform:macos` `needs-info`
- [#108699](https://github.com/anthropics/claude-code/issues/108699) [GitHub integration] `bug` `needs-info` `github-integration`

#### 🔒 Closed Issues
- [#107895](https://github.com/anthropics/claude-code/issues/107895) [Desktop][Windows] "Enable computer use" toggle is greyed out although computer use is enabled in logs
- [#96858](https://github.com/anthropics/claude-code/issues/96858) Worktree fetch leaves ssh reading keystrokes from the terminal
- [#108637](https://github.com/anthropics/claude-code/issues/108637) Browser pane cookie import: Firefox no longer listed as a source on macOS

### OpenAI Codex (`openai/codex`)

**Stars:** 134,517 · **Open issues:** 26,999 · **Last push:** <1h ago

Today, OpenAI Codex released several new versions: rust-v0.169.0-alpha.7, rust-v0.169.0-alpha.6, and rust-v0.167.0-alpha.4.1, each improving stability and performance. Key merged pull requests include the handling of unfinished tool calls in restored history (#60519) and the routing of sandbox CLI launches through a shared sandbox manager (#60517), both aimed at enhancing user experience and system reliability. Notable fixes include the treatment of access program stream errors and policy violations as terminal errors, ensuring more robust error handling. Among new issues, one significant report (#60510) highlights a failure in the Codex app-server launch on Windows, pointing to broader potential usability problems.

#### 🚀 New Releases
- [rust-v0.169.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.169.0-alpha.7) 0.169.0-alpha.7
- [rust-v0.169.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.169.0-alpha.6) 0.169.0-alpha.6
- [rust-v0.167.0-alpha.4.1](https://github.com/openai/codex/releases/tag/rust-v0.167.0-alpha.4.1) 0.167.0-alpha.4.1

#### ✅ Merged PRs
- [#60519](https://github.com/openai/codex/pull/60519) Handle unfinished tool calls in restored history
- [#60517](https://github.com/openai/codex/pull/60517) Route sandbox CLI launches through the shared sandbox manager
- [#60513](https://github.com/openai/codex/pull/60513) Record an MCP refresh reason for session permission grants
- [#60511](https://github.com/openai/codex/pull/60511) Treat inference hook denials as terminal errors
- [#60507](https://github.com/openai/codex/pull/60507) Use hermetic LLVM for Windows MSVC Bazel builds
- [#60506](https://github.com/openai/codex/pull/60506) Preserve MCP trace context when tracing is disabled
- [#60505](https://github.com/openai/codex/pull/60505) Trace MCP refresh causes and plugin metadata changes
- [#60500](https://github.com/openai/codex/pull/60500) Derive sandbox telemetry labels directly from permission profiles
- [#60498](https://github.com/openai/codex/pull/60498) Unify Guardian context preparation across reviewers
- [#60496](https://github.com/openai/codex/pull/60496) Preserve typed gRPC code-mode session admission errors
- [#60492](https://github.com/openai/codex/pull/60492) Add local-only Claude Code skill migration
- [#60489](https://github.com/openai/codex/pull/60489) Honor feature overrides when starting the app-server daemon
- [#60488](https://github.com/openai/codex/pull/60488) Remove the Xcode 26.4 MCP elicitation compatibility workaround
- [#60487](https://github.com/openai/codex/pull/60487) Enable untrusted context tool outputs by default
- [#60486](https://github.com/openai/codex/pull/60486) Add device authorization to app-server gateway OAuth
- [#60482](https://github.com/openai/codex/pull/60482) Handle context length errors consistently across response transports
- [#60481](https://github.com/openai/codex/pull/60481) Treat invalid access program stream errors as terminal
- [#60480](https://github.com/openai/codex/pull/60480) Treat workspace access denials as terminal errors
- [#60479](https://github.com/openai/codex/pull/60479) Treat content policy violations as terminal errors
- [#60476](https://github.com/openai/codex/pull/60476) Treat access program denials as terminal errors
- [#60475](https://github.com/openai/codex/pull/60475) Stop retrying explicit invalid-workspace errors
- [#60473](https://github.com/openai/codex/pull/60473) Respect error retry policy during local compaction
- [#60472](https://github.com/openai/codex/pull/60472) Serialize default thread permissions as a permission profile
- [#60466](https://github.com/openai/codex/pull/60466) Keep thread storage available when diagnostic logs fail
- [#60462](https://github.com/openai/codex/pull/60462) Route TUI question answers through Cloud message admission
- [#60461](https://github.com/openai/codex/pull/60461) Honor permission grant scopes in executor capability discovery
- [#60455](https://github.com/openai/codex/pull/60455) Prefer native clipboard images on macOS and honor image orientation
- [#60454](https://github.com/openai/codex/pull/60454) Update OpenSSL Rust dependencies
- [#60443](https://github.com/openai/codex/pull/60443) Support cancellation and deadlines for realtime attachments
- [#60436](https://github.com/openai/codex/pull/60436) Revalidate request auth ownership after budget checks
- [#60435](https://github.com/openai/codex/pull/60435) Dismiss the model switch prompt when account usage recovers
- [#60434](https://github.com/openai/codex/pull/60434) Reset app-server turn summaries when a turn starts
- [#60433](https://github.com/openai/codex/pull/60433) Bind API workload identity source reuse to session claims
- [#60432](https://github.com/openai/codex/pull/60432) Upgrade bundled SQLite to 3.54 for WAL fixes
- [#60423](https://github.com/openai/codex/pull/60423) Expose deferred MCP servers in resource listings
- [#60418](https://github.com/openai/codex/pull/60418) Let terminal status become done while background terminals run
- [#60416](https://github.com/openai/codex/pull/60416) Keep fitting URLs intact in fullscreen Markdown transcripts
- [#60414](https://github.com/openai/codex/pull/60414) Enable model catalog discovery with gateway OAuth
- [#60391](https://github.com/openai/codex/pull/60391) Simplify Guardian's post-denial approval guidance
- [#60390](https://github.com/openai/codex/pull/60390) Allow deferring plain-text MCP output in thread item listings
- [#60389](https://github.com/openai/codex/pull/60389) Include Codex Apps configuration in cloud prewarm requests

#### 🐛 New Issues
- [#60392](https://github.com/openai/codex/issues/60392) Resume command references a nonexistent thread after a configuration error `bug` `CLI` `session` 💬2
- [#60510](https://github.com/openai/codex/issues/60510) [Windows][ChatGPT Work] Computer Use screenshot saving stopped working; Codex app-server fails to launch `bug` `windows-os` `app` `app-server` 💬2
- [#60501](https://github.com/openai/codex/issues/60501) Python SDK: restarting CodexClient replays the previous process's transport error `bug` `app-server` 💬2
- [#60520](https://github.com/openai/codex/issues/60520) Unexpected read-aloud audio continues after repeated Stop requests `bug` `app` 💬1
- [#60410](https://github.com/openai/codex/issues/60410) CLI image paste fails: no numbered image marker and no attachment sent `bug` `TUI` `CLI` 💬1
- [#60514](https://github.com/openai/codex/issues/60514) Windows desktop: exec_command rejected as "blocked by policy" without actionable rule/review details `bug` `windows-os` `sandbox` `app` 💬1
- [#60387](https://github.com/openai/codex/issues/60387) Windows Codex Desktop reports “saved environment account changed” when CODEX_APP_SERVER_FORCE_CLI=1 `bug` `windows-os` `app` `app-server` 💬1
- [#60508](https://github.com/openai/codex/issues/60508) Dot’s secure sign-in prompt expires before I can use it `bug` `auth` `dots` 💬1
- [#60509](https://github.com/openai/codex/issues/60509) Codex Windows Desktop — Account Switching Must Not Hide or Disrupt Existing Local Projects and Conversation History `bug` `windows-os` `auth` `app` 💬1
- [#60502](https://github.com/openai/codex/issues/60502) Desktop Computer Use URL denial during Bilibili editing: unclear target, safety boundary, and supported recovery `bug` `app` `computer-use` 💬1
- [#60494](https://github.com/openai/codex/issues/60494) Shell installer: literal $ in CODEX_INSTALL_DIR corrupts generated profile PATH `bug` `CLI` 💬1
- [#60504](https://github.com/openai/codex/issues/60504) VS Code Codex sidebar renderer_ready_timeout on Linux; launching with --disable-gpu restores UI `bug` `extension` 💬1
- [#60499](https://github.com/openai/codex/issues/60499) Windows: existing chat loses in-app browser control tools despite enabled Computer Use; app restart does not restore access `bug` `windows-os` `app` `computer-use` 💬1
- [#60521](https://github.com/openai/codex/issues/60521) Windows: Chrome 157 password and cookie imports fail with "unsupported Chrome key data" `bug` `windows-os` `app` `browser`
- [#60518](https://github.com/openai/codex/issues/60518) Windows: MXC 0x80070002 prevents shell, Node REPL and computer-use startup `bug` `windows-os` `sandbox` `tool-calls`
- [#60516](https://github.com/openai/codex/issues/60516) dot on Windows: Get-Location rejected before launch with Unrestricted/Enabled/Disabled sandbox configuration `bug` `windows-os` `sandbox` `tool-calls`
- [#60515](https://github.com/openai/codex/issues/60515) [App regression] PPT preview Request for edit stops after Working and loses annotation requests `bug` `app`
- [#60427](https://github.com/openai/codex/issues/60427) Posted questions not honoring background/foreground colors `bug` `TUI` `CLI`
- [#60512](https://github.com/openai/codex/issues/60512) [macOS] Scrolling stutters in the Codex in-app browser preview `bug` `app` `browser` `performance`
- [#60503](https://github.com/openai/codex/issues/60503) TypeScript SDK: streamed executions buffer unbounded child stderr in host memory `bug` `performance`

#### 🔒 Closed Issues
- [#42163](https://github.com/openai/codex/issues/42163) `/side` panics when fork occurs during a tool call
- [#60392](https://github.com/openai/codex/issues/60392) Resume command references a nonexistent thread after a configuration error
- [#60387](https://github.com/openai/codex/issues/60387) Windows Codex Desktop reports “saved environment account changed” when CODEX_APP_SERVER_FORCE_CLI=1
- [#60427](https://github.com/openai/codex/issues/60427) Posted questions not honoring background/foreground colors

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 108,749 · **Open issues:** 725 · **Last push:** 3h ago

On November 10, 2026, there were no new releases for Gemini CLI, but several important pull requests were merged. Key fixes included ensuring that `read-many-files` only inlines explicitly requested binary assets, which addresses issue #29045, and improving the immediate rejection behavior of `MessageBus.request()` when a publish fails. Additionally, a fix was merged to prevent recursive interactive sessions in shell mode, along with enhancements to manage child processes during headless aborts. The development team also resolved folder trust issues prior to entering the macOS Seatbelt sandbox. Overall, the day focused on addressing stability and reliability improvements within the CLI without any new issues raised.

#### ✅ Merged PRs
- [#30211](https://github.com/google-gemini/gemini-cli/pull/30211) fix(core): ensure read-many-files only inlines explicitly requested binary assets (#29045)
- [#30189](https://github.com/google-gemini/gemini-cli/pull/30189) fix(core): reject MessageBus.request() immediately when publish fails
- [#30185](https://github.com/google-gemini/gemini-cli/pull/30185) fix(cli): prevent recursive interactive gemini sessions in shell mode
- [#30204](https://github.com/google-gemini/gemini-cli/pull/30204) fix(cli,core): kill child processes, record cancelled tools, and preserve signal exit code on headless abort
- [#30164](https://github.com/google-gemini/gemini-cli/pull/30164) fix(cli): resolve folder trust before entering the macOS Seatbelt sandbox
- [#30160](https://github.com/google-gemini/gemini-cli/pull/30160) fix(cli): use isSubpath for theme file home-directory check

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,389 · **Open issues:** 2,204 · **Last push:** 6h ago

On November 10, 2026, GitHub Copilot CLI released version 1.0.109-0, introducing several improvements including a confirmation prompt for symlink operations during file sharing, enhanced URL permission management, and reduced frequency of permission requests for read-only shell scripts. Additionally, the previous version 1.0.108 saw enhancements such as the addition of a new filesystem policy for Windows and managed shared tgrep indexing activated by default. No new pull requests were merged, but several notable issues emerged, with #5400 highlighting a regression in deferred MCP function calls losing their namespace in version 1.0.108 being particularly significant. Other issues include credential storage failures on Windows and a problem with the macOS sandbox affecting local network settings.

#### 🚀 New Releases
- [v1.0.109-0](https://github.com/github/copilot-cli/releases/tag/v1.0.109-0) 1.0.109-0
- [v1.0.108](https://github.com/github/copilot-cli/releases/tag/v1.0.108) 1.0.108

#### 🐛 New Issues
- [#5400](https://github.com/github/copilot-cli/issues/5400) Regression in 1.0.108: deferred MCP function_call loses namespace on the next interaction 💬1
- [#5390](https://github.com/github/copilot-cli/issues/5390) macOS sandbox: allowLocalNetwork: true still generates hostLoopback: deny in proxy mode, blocking Gradle on CLI 1.0.107 `area:permissions` 💬1
- [#5404](https://github.com/github/copilot-cli/issues/5404) Windows: launching copilot in a git repo from interactive pwsh kills the parent pwsh.exe (tgrep indexing, 1.0.108) `triage`
- [#5403](https://github.com/github/copilot-cli/issues/5403) Configuring providers.json hides AIC quota in the statusline even when using GitHub-hosted models `triage`
- [#5396](https://github.com/github/copilot-cli/issues/5396) ACP: a preToolUse hook's `ask` is denied by host policy instead of reaching the client
- [#5402](https://github.com/github/copilot-cli/issues/5402) MCP Entra silent sign-in uses the /common authority and fails for single-tenant apps (AADSTS50194), so /mcp auth is needed every session since 1.0.107 `triage`
- [#5399](https://github.com/github/copilot-cli/issues/5399) Windows credential-storage failures need operation-level diagnostics and an accurate warning `triage`
- [#5398](https://github.com/github/copilot-cli/issues/5398) macOS 26: native canvas windows stay blank — WKWebView never loads the URL (webviewjs/tao pump_events) `triage`
- [#5397](https://github.com/github/copilot-cli/issues/5397) Copilot Connectors are not available in `--acp` mode `triage`
- [#5395](https://github.com/github/copilot-cli/issues/5395) Session stops accepting messages after session.background_tasks_changed times out; a background agent's result is lost `triage`
- [#5393](https://github.com/github/copilot-cli/issues/5393) Auto-compaction starts on one usage reading that its own context breakdown contradicts `triage`
- [#5394](https://github.com/github/copilot-cli/issues/5394) cancelBackgroundCompaction() emits no compaction_complete, so "Compacting conversation…" stays on screen `triage`
- [#5392](https://github.com/github/copilot-cli/issues/5392) Claude responses report the prompt doubled on ~0.3% of calls since 2026-11-04 — usage and billing `triage`
- [#5391](https://github.com/github/copilot-cli/issues/5391) Allow a fixed OAuth callback port for remote MCP servers `area:mcp`
- [#5388](https://github.com/github/copilot-cli/issues/5388) Sandbox: credential masking ineffective for GH_TOKEN / GH_ENTERPRISE_TOKEN on GHE Cloud data-residency tenants; token env vars are dropped before masking `area:permissions` `area:enterprise`
- [#5387](https://github.com/github/copilot-cli/issues/5387) [Windows] powershell tool session stays running indefinitely when a script spawns a background process with Start-Process -RedirectStandardOutput `area:platform-windows` `area:tools`
- [#5389](https://github.com/github/copilot-cli/issues/5389) Document the browser-use plugin and browser extension for enterprise security review `triage`

#### 🔒 Closed Issues
- [#5320](https://github.com/github/copilot-cli/issues/5320) Support OSC 7501 agent-status reporting for herdr-app/herdr-core
- [#4526](https://github.com/github/copilot-cli/issues/4526) MCP forced re-auth appends prompt=select_account for non-Microsoft OAuth providers
- [#5352](https://github.com/github/copilot-cli/issues/5352) Subagents refuse to read back files from temp due to misinterpretting instructions not to write or create in temp
- [#5400](https://github.com/github/copilot-cli/issues/5400) Regression in 1.0.108: deferred MCP function_call loses namespace on the next interaction
- [#5142](https://github.com/github/copilot-cli/issues/5142) Remote HTTP MCP servers fail behind Kerberos/Negotiate proxy ( proxy_auth_required ) while main fetch stack works
- [#144](https://github.com/github/copilot-cli/issues/144) `/add-dir` works with `~` but not `$HOME` for home directories
- [#5396](https://github.com/github/copilot-cli/issues/5396) ACP: a preToolUse hook's `ask` is denied by host policy instead of reaching the client

### OpenCode (`anomalyco/opencode`)

**Stars:** 225,707 · **Open issues:** 4,227 · **Last push:** <1h ago

On November 10, 2026, there were no new releases in OpenCode, but several important pull requests were merged, including the addition of Google and Vertex embedding entry points (#63017) and enhancements to the embedding models with the OpenAI embeddings protocol (#62832). A notable fix was implemented to prevent background compaction from interrupting a running Claude Agent session (#63025). The day also saw the introduction of GitHub Copilot Auto and a model resolve hook (#62997), which should improve coding assistance significantly. Among the new issues, one stood out: #63001 reported that the OpenCode Desktop window crashes on startup for Windows x64 users, highlighting a critical area for immediate attention.

#### ✅ Merged PRs
- [#63025](https://github.com/anomalyco/opencode/pull/63025) fix(core): keep background compaction from stopping a running Claude Agent session
- [#63022](https://github.com/anomalyco/opencode/pull/63022) refactor(core): share OAuth credential refresh between provider logins and MCP
- [#63017](https://github.com/anomalyco/opencode/pull/63017) feat(ai): add Google and Vertex embedding entry points
- [#62844](https://github.com/anomalyco/opencode/pull/62844) feat(ai): add Vertex predict embeddings
- [#63015](https://github.com/anomalyco/opencode/pull/63015) refactor(plugin): edit the model in place in experimental.model.resolve
- [#62997](https://github.com/anomalyco/opencode/pull/62997) feat(core): add GitHub Copilot Auto and a model resolve hook
- [#62843](https://github.com/anomalyco/opencode/pull/62843) feat(ai): add Google embedContent embeddings
- [#63006](https://github.com/anomalyco/opencode/pull/63006) fix(core): count session generate requests in the session's cost
- [#63012](https://github.com/anomalyco/opencode/pull/63012) fix(core): keep MCP OAuth credentials when a refresh fails temporarily
- [#63011](https://github.com/anomalyco/opencode/pull/63011) refactor(ai): remove the ImageResponse.image shortcut
- [#62832](https://github.com/anomalyco/opencode/pull/62832) feat(ai): add embedding models with the OpenAI embeddings protocol
- [#63005](https://github.com/anomalyco/opencode/pull/63005) docs(console): add MiniMax M3.1 Flash Free
- [#62999](https://github.com/anomalyco/opencode/pull/62999) chore(infra): point docs.opencode.ai at the site worker
- [#62994](https://github.com/anomalyco/opencode/pull/62994) fix(stats): map crouton alpha to muse ember
- [#62990](https://github.com/anomalyco/opencode/pull/62990) refactor(site): prune component CSS variants and split shell from route stylesheets
- [#62982](https://github.com/anomalyco/opencode/pull/62982) chore(core): update MCP SDK to 2.4.0
- [#62992](https://github.com/anomalyco/opencode/pull/62992) feat(app): keep assistant copy visible on dev builds
- [#62956](https://github.com/anomalyco/opencode/pull/62956) feat(site): translate the V1 docs' chrome and missing pages
- [#62951](https://github.com/anomalyco/opencode/pull/62951) feat(site): serve V1 docs in the new design at /v1/docs
- [#62950](https://github.com/anomalyco/opencode/pull/62950) refactor(site): parameterize src/docs for multiple docs sets
- [#62985](https://github.com/anomalyco/opencode/pull/62985) chore(perf): bench with strobe 0.27.0

#### 🐛 New Issues
- [#62988](https://github.com/anomalyco/opencode/issues/62988) Windows: background service spawns a visible console every ~2s and steals keyboard focus `pending close` `triaging` 💬5
- [#63019](https://github.com/anomalyco/opencode/issues/63019) app: Android composer ignores IME and gesture insets 💬4
- [#62872](https://github.com/anomalyco/opencode/issues/62872) Whole-config rejection without last-good fallback kills all running sessions when a concurrent writer leaves a transient partial state in opencode.jsonc `reproduced` 💬3
- [#63001](https://github.com/anomalyco/opencode/issues/63001) OpenCode Desktop window crashes on startup on Windows x64 `triaging` 💬3
- [#62991](https://github.com/anomalyco/opencode/issues/62991) Claude is not responding anymore `pending close` `triaging` 💬3
- [#62993](https://github.com/anomalyco/opencode/issues/62993) Session shell deny rules are ignored by user/API/template execution but enforced by the shell tool 💬2
- [#63013](https://github.com/anomalyco/opencode/issues/63013) desktop: connecting OpenCode Console provider silently deletes the active session (2.2.6) `severity:high` 💬2
- [#62897](https://github.com/anomalyco/opencode/issues/62897) [FEATURE]: Offer the Android client source under MIT, yours to rebrand 💬2
- [#63029](https://github.com/anomalyco/opencode/issues/63029) tui: @ в поле ввода не открывает список файлов проекта `triaging` 💬1
- [#63026](https://github.com/anomalyco/opencode/issues/63026) [FEATURE]: add Jevlin as a built-in web search provider 💬1
- [#63020](https://github.com/anomalyco/opencode/issues/63020) [FEATURE]: Desktop: separate app instance per OPENCODE_CONFIG_DIR profile 💬1
- [#63016](https://github.com/anomalyco/opencode/issues/63016) tui: no setting for message timestamps in the transcript `pending close` `triaging` 💬1
- [#63009](https://github.com/anomalyco/opencode/issues/63009) plugin: symlinked local plugins never pick up content changes (stale module cache until service restart) `pending close` `triaging` 💬1
- [#63004](https://github.com/anomalyco/opencode/issues/63004) [FEATURE]: setting for the log file location (OPENCODE_LOG_DIR) 💬1
- [#62996](https://github.com/anomalyco/opencode/issues/62996) 每天都沒有使用 但是都說沒有額度 `pending close` `triaging` 💬1
- [#62989](https://github.com/anomalyco/opencode/issues/62989) The built-in browser lacks a "save password" feature, so I have to manually re-enter my credentials every time I log in. 💬1
- [#62987](https://github.com/anomalyco/opencode/issues/62987) Integrar OpenUI para mejorar la experiencia con las respuestas de IA 💬1
- [#62986](https://github.com/anomalyco/opencode/issues/62986) [FEATURE]: acp: let the internal server use a fixed port, or no TCP port at all 💬1
- [#62981](https://github.com/anomalyco/opencode/issues/62981) desktop: size the variant flyout from the label, not a fixed 160px `reproduced` 💬1
- [#62973](https://github.com/anomalyco/opencode/issues/62973) mcp: failed servers are indistinguishable from unconfigured ones for the agent 💬1
- [#62969](https://github.com/anomalyco/opencode/issues/62969) desktop: add pinned tabs 💬1
- [#62967](https://github.com/anomalyco/opencode/issues/62967) feat(core): add EVREN LLM to /connect 💬1
- [#62959](https://github.com/anomalyco/opencode/issues/62959) github-copilot (Enterprise): first prompt after Location boot sends the Enterprise token to api.githubcopilot.com `reproduced` `severity:high` 💬1

#### 🔒 Closed Issues
- [#62447](https://github.com/anomalyco/opencode/issues/62447) tui: model picker shows only subset of declared custom provider models
- [#62803](https://github.com/anomalyco/opencode/issues/62803) Usage limit used in 2 minutes
- [#62783](https://github.com/anomalyco/opencode/issues/62783) time free plan
- [#62818](https://github.com/anomalyco/opencode/issues/62818) [FEATURE]: When the agent is interrupted, and the chatbox is empty, make it so clicking the send button resumes with no user input
- [#62814](https://github.com/anomalyco/opencode/issues/62814) opencode run ignores the caller's cwd and executes in the active TUI session's project directory; no way to set a directory for run
- [#62441](https://github.com/anomalyco/opencode/issues/62441) mcp: notebooklm-mcp@latest fails to start on Node 26 (ERR_MODULE_NOT_FOUND hono/ws)
- [#62781](https://github.com/anomalyco/opencode/issues/62781) OpenCode Desktop 2.2.6 — No models available

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 29,146 · **Open issues:** 2,142 · **Last push:** <1h ago

On November 10, 2026, Qwen Code released several updates including version v0.27.1 and its accompanying SDK TypeScript version v0.1.31. The new desktop version includes documentation improvements for OpenAI-compatible providers and a fix for naming an unusable view directory. Significant merged features include the addition of PR-watch host discovery and a validation check for existing tables in shared catalogs. A notable new issue arose concerning the main Java lane failing to compile due to duplicate case labels in the SurfaceAdmissionAcceptanceTest.

#### 🚀 New Releases
- [v0.27.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.27.1) Release v0.27.1
- [sdk-typescript-v0.1.31](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.31) SDK TypeScript Release v0.1.31
- [desktop-v0.27.1](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.27.1) Qwen Code Desktop v0.27.1

#### ✅ Merged PRs
- [#16743](https://github.com/QwenLM/qwen-code/pull/16743) feat(cli): send OpenTUI's model rounds through the shared agent loop
- [#16774](https://github.com/QwenLM/qwen-code/pull/16774) fix(web-templates): lift the export renderer budget to the merged size
- [#16732](https://github.com/QwenLM/qwen-code/pull/16732) feat(serve): add PR-watch host discovery and ordered shutdown
- [#16201](https://github.com/QwenLM/qwen-code/pull/16201) feat(managed-agent): validate existing tables in shared catalogs

#### 🐛 New Issues
- [#16712](https://github.com/QwenLM/qwen-code/issues/16712) ci: main's Java lane fails to compile — duplicate case labels in SurfaceAdmissionAcceptanceTest (from #16641) `priority/P1` `type/bug` `category/development` `scope/ci-cd` 💬5
- [#16778](https://github.com/QwenLM/qwen-code/issues/16778) feat(web-shell): improve session search experience `priority/P2` `category/ui` `type/enhancement` `scope/web-shell` 💬3
- [#16766](https://github.com/QwenLM/qwen-code/issues/16766) Generated UI card stuck at 'Loading the interactive view…' in Qwen Code Desktop (macOS WKWebView); same card renders in Chromium `priority/P2` `type/bug` `category/platform` `scope/mcp` 💬3
- [#16757](https://github.com/QwenLM/qwen-code/issues/16757) bug(core): non-UTF-8 ANSI-C bytes collapse to U+FFFD, so shell path guards miss the file bash touches `priority/P2` `type/bug` `category/security` `scope/shell` 💬3
- [#16782](https://github.com/QwenLM/qwen-code/issues/16782) chore(core): remove the deprecated session-commit registry now that the amend guard no longer reads it `priority/P3` `status/blocked` `category/core` `scope/shell` 💬2
- [#16775](https://github.com/QwenLM/qwen-code/issues/16775) Improve sidebar session sort placement next to multi-select `priority/P3` `category/ui` `type/enhancement` `status/ready-for-agent` 💬2
- [#16767](https://github.com/QwenLM/qwen-code/issues/16767) Spurious "The previous request was interrupted before the response completed." banner when a turn settles on a tool call `priority/P2` `type/bug` `category/core` `scope/session-management` 💬2
- [#16761](https://github.com/QwenLM/qwen-code/issues/16761) Web Shell: review panel squeezes per-edit diff blocks into thin bars when a turn contains many edits `priority/P2` `type/bug` `category/ui` `scope/web-shell` 💬2
- [#16753](https://github.com/QwenLM/qwen-code/issues/16753) feat(web-shell): configure outbound webhook Channels and select their destinations `priority/P2` `status/blocked` `type/feature-request` `category/ui` 💬2
- [#16752](https://github.com/QwenLM/qwen-code/issues/16752) feat(channels): add configured delivery targets and DingTalk webhook sending `priority/P2` `type/feature-request` `category/integration` `roadmap/background-automation` 💬2
- [#16751](https://github.com/QwenLM/qwen-code/issues/16751) feat(channels): support outbound platform webhooks through Channel delivery `priority/P3` `type/feature-request` `category/integration` `roadmap/background-automation` 💬2
- [#16714](https://github.com/QwenLM/qwen-code/issues/16714) Output speed (TPS) leaves out time to first token and reads higher than the end-to-end rate `priority/P2` `type/bug` `category/telemetry` `scope/metrics` 💬2
- [#16718](https://github.com/QwenLM/qwen-code/issues/16718) docs(providers): Standard Compute in the OpenAI-compatible providers section `priority/P3` `type/documentation` `category/integration` `content/providers` 💬2
- [#16769](https://github.com/QwenLM/qwen-code/issues/16769) Release Failed for v0.27.1-nightly.20261109.79a60bc1e2 on 2026-11-09 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#16754](https://github.com/QwenLM/qwen-code/issues/16754) Main CI failed: E2E Tests — cli/tool-hook-context.test.ts > … > interactive: withholds project hooks in an untrusted folder and says why `status/needs-triage` `type/bug`
- [#16744](https://github.com/QwenLM/qwen-code/issues/16744) Main CI failed: E2E Tests — sdk-typescript/workflow-mode.test.ts > … > honors explicit initial false over saved on and preserves it on th… `status/needs-triage` `type/bug`
- [#16742](https://github.com/QwenLM/qwen-code/issues/16742) Main CI failed: Qwen Code CI — src/serve/server/session-pr-refresh.test.ts > … > sweeps trusted workspaces and the untrusted primary, never … `status/needs-triage` `type/bug`
- [#16734](https://github.com/QwenLM/qwen-code/issues/16734) Main CI failed: E2E Tests — interactive/workflow-completion.test.ts > … > delivers 'WORKFLOW_PARTIAL_RESULT_12176' once `status/needs-triage` `type/bug`
- [#16733](https://github.com/QwenLM/qwen-code/issues/16733) Main CI failed: E2E Tests — interactive/workflow-mode.test.ts > … > changes the persistent mode locally, guides a fresh turn, and clears … `status/needs-triage` `type/bug`

#### 🔒 Closed Issues
- [#16690](https://github.com/QwenLM/qwen-code/issues/16690) GitHub channel: surface API budget and protect the mention lane from watch spend
- [#16712](https://github.com/QwenLM/qwen-code/issues/16712) ci: main's Java lane fails to compile — duplicate case labels in SurfaceAdmissionAcceptanceTest (from #16641)
- [#16691](https://github.com/QwenLM/qwen-code/issues/16691) GitHub channel: use conditional requests for PR state watch polling
- [#16714](https://github.com/QwenLM/qwen-code/issues/16714) Output speed (TPS) leaves out time to first token and reads higher than the end-to-end rate
- [#16698](https://github.com/QwenLM/qwen-code/issues/16698) feat(web-shell): add sidebar session multi-select with bulk pin and archive
- [#16383](https://github.com/QwenLM/qwen-code/issues/16383) Web Shell: hidden execution workspace makes scheduled tasks appear workspace-free
- [#16680](https://github.com/QwenLM/qwen-code/issues/16680) Release Failed for v0.27.0-nightly.20261108.6c3d5355de on 2026-11-08
- [#16668](https://github.com/QwenLM/qwen-code/issues/16668) Main CI failed: Qwen Code CI — src/hooks/file-changed-watcher.test.ts > … > preserves dynamic temporary-file registrations and similarly nam…
- [#16626](https://github.com/QwenLM/qwen-code/issues/16626) Main CI failed: Qwen Code CI — src/hooks/file-changed-watcher.test.ts > … > preserves static temporary-file registrations and similarly name…
- [#16609](https://github.com/QwenLM/qwen-code/issues/16609) Main CI failed: Qwen Code CI — src/ui/components/background-view/BackgroundTasksDialog.test.tsx > … > advertises only the activation hint wh…

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

**Stars:** 394,261 · **Open issues:** 8,085 · **Last push:** <1h ago

There were no new releases for OpenClaw in the last 24 hours. However, significant improvements were made with several merged pull requests, including a fix for stabilizing extended-stable qualification fixtures (PR #196412) and an enhancement to reduce memory allocation for thread-heavy processes (PR #196416). Moreover, fixes were implemented to prevent unnecessary cold-start initialization (PR #192552) and improve user experience by shortening blocking work during warm chat reloads (PR #196385). Among the new issues, a recurring update failure related to the package-update process (issue #196000) and bugs affecting control UI and Gateway functionality caught attention, indicating possible areas in need of urgent attention as they could impact user operations.

#### ✅ Merged PRs
- [#195822](https://github.com/openclaw/openclaw/pull/195822) fix(matrix): mark proven still images as not animated (MSC4230)
- [#196434](https://github.com/openclaw/openclaw/pull/196434) chore(ui): refresh control ui locales
- [#196422](https://github.com/openclaw/openclaw/pull/196422) fix(diagnostics): batch CPU profiles to avoid repeated startup stalls
- [#196373](https://github.com/openclaw/openclaw/pull/196373) fix(release): allow large recovery Docker archive transfers
- [#196423](https://github.com/openclaw/openclaw/pull/196423) fix(gateway): resume interrupted turns after workspace preparation
- [#196416](https://github.com/openclaw/openclaw/pull/196416) fix(exec): reduce memory-watch allocation for thread-heavy processes
- [#196385](https://github.com/openclaw/openclaw/pull/196385) fix(ui): shorten blocking work during warm chat reloads
- [#196425](https://github.com/openclaw/openclaw/pull/196425) fix(ui): restore content-width session titles
- [#196412](https://github.com/openclaw/openclaw/pull/196412) fix: stabilize extended-stable qualification fixtures
- [#196363](https://github.com/openclaw/openclaw/pull/196363) improve(ui): deliver heavy tool-turn output sooner
- [#196401](https://github.com/openclaw/openclaw/pull/196401) fix: start Gateway with conflicting legacy exec approvals
- [#192552](https://github.com/openclaw/openclaw/pull/192552) fix(gateway): avoid unnecessary cold-start initialization
- [#196410](https://github.com/openclaw/openclaw/pull/196410) fix(gateway): identify fatal shutdown causes and pending admissions
- [#196277](https://github.com/openclaw/openclaw/pull/196277) fix(sessions): prevent OOM from consumed input history
- [#196415](https://github.com/openclaw/openclaw/pull/196415) fix: prevent npm publication preflight module deadlock
- [#196420](https://github.com/openclaw/openclaw/pull/196420) fix(release): authorize scoped 2026.11.3 Kova waiver
- [#196207](https://github.com/openclaw/openclaw/pull/196207) feat(compaction): make compaction summary char cap configurable via maxSummaryChars
- [#196398](https://github.com/openclaw/openclaw/pull/196398) fix(knowledge): reject malformed UTF-8 chat exports
- [#196409](https://github.com/openclaw/openclaw/pull/196409) fix(update): keep maintenance usable after failed rollback recovery
- [#196269](https://github.com/openclaw/openclaw/pull/196269) fix(ui): header E2E checks fail after control sizing changes
- [#196333](https://github.com/openclaw/openclaw/pull/196333) improve: open Ask OpenClaw faster in Firefox
- [#195652](https://github.com/openclaw/openclaw/pull/195652) fix(media): accept parameterized image data URLs
- [#196391](https://github.com/openclaw/openclaw/pull/196391) fix(skills): accept BOM-prefixed model usage imports
- [#196405](https://github.com/openclaw/openclaw/pull/196405) fix(release): accept authenticated retained npm producer
- [#196400](https://github.com/openclaw/openclaw/pull/196400) fix(browser): prevent Lightpanda navigation from timing out
- [#196382](https://github.com/openclaw/openclaw/pull/196382) fix(models): surface the --json/--plain conflict as an ExpectedCliError
- [#196390](https://github.com/openclaw/openclaw/pull/196390) fix(worktrees): stop revoked copies before publishing files
- [#196331](https://github.com/openclaw/openclaw/pull/196331) fix(mattermost): use fence-aware chunker for outbound markdown
- [#196397](https://github.com/openclaw/openclaw/pull/196397) chore(ui): refresh control ui locales
- [#196386](https://github.com/openclaw/openclaw/pull/196386) improve(build): reduce runtime source retained by module loaders
- [#196387](https://github.com/openclaw/openclaw/pull/196387) fix(cron): release idle workers when automatic scheduling is disabled
- [#196376](https://github.com/openclaw/openclaw/pull/196376) fix(mcp-relay): stop interrupted reads before late results
- [#196384](https://github.com/openclaw/openclaw/pull/196384) chore(catalog): recommend Fable 5.2 and HY4
- [#196295](https://github.com/openclaw/openclaw/pull/196295) fix(release): recover qualification after interrupted ref creation
- [#189112](https://github.com/openclaw/openclaw/pull/189112) fix(codex): clarify policy boundaries and preserve legacy withdrawal
- [#196298](https://github.com/openclaw/openclaw/pull/196298) fix(worktrees): avoid minute-long ignored-file provisioning
- [#196097](https://github.com/openclaw/openclaw/pull/196097) fix(feishu): preserve quoted attachment filenames containing semicolons
- [#196355](https://github.com/openclaw/openclaw/pull/196355) docs: check hotfix ledger completeness at release closeout
- [#196229](https://github.com/openclaw/openclaw/pull/196229) fix(gateway): avoid repeated session-source scans during watch bursts
- [#196337](https://github.com/openclaw/openclaw/pull/196337) fix: let input policy hooks inspect prepared images
- [#196168](https://github.com/openclaw/openclaw/pull/196168) fix: preserve conversation workspace during local publication
- [#196313](https://github.com/openclaw/openclaw/pull/196313) improve(ui): show completed work as one "Worked for" line with a visible chevron
- [#195730](https://github.com/openclaw/openclaw/pull/195730) feat: create templates directly from chat
- [#195027](https://github.com/openclaw/openclaw/pull/195027) fix(knowledge): exclude image-alt links from navigation
- [#195215](https://github.com/openclaw/openclaw/pull/195215) fix(knowledge): large inventories stop before the final records
- [#195056](https://github.com/openclaw/openclaw/pull/195056) fix(knowledge): distinguish same-name transcript authors
- [#196159](https://github.com/openclaw/openclaw/pull/196159) fix: github_publish guidance hides its limits and next steps
- [#195204](https://github.com/openclaw/openclaw/pull/195204) fix(knowledge): reject malformed UTF-8 source manifests
- [#196368](https://github.com/openclaw/openclaw/pull/196368) fix(ui): prevent Gateway retry E2E from stalling on closed sockets
- [#196361](https://github.com/openclaw/openclaw/pull/196361) perf(ci): qualify mixed tooling workers
- [#196024](https://github.com/openclaw/openclaw/pull/196024) fix(ui): keep session event refresh retry windows monotonic
- [#196356](https://github.com/openclaw/openclaw/pull/196356) chore(ui): accept measured CSS feature cost after paydown
- [#196309](https://github.com/openclaw/openclaw/pull/196309) perf(chat): show the first streamed answer sooner
- [#196360](https://github.com/openclaw/openclaw/pull/196360) chore(ui): refresh control ui locales
- [#196351](https://github.com/openclaw/openclaw/pull/196351) fix(bench): honor scroll padding in Config readiness
- [#196352](https://github.com/openclaw/openclaw/pull/196352) fix(ci): preserve prepared pnpm when selecting Node
- [#196353](https://github.com/openclaw/openclaw/pull/196353) perf(ci): narrow workers for boundary and tooling tests
- [#196179](https://github.com/openclaw/openclaw/pull/196179) improve(ui): reduce chat layout work during streamed replies
- [#196320](https://github.com/openclaw/openclaw/pull/196320) improve: reduce Control UI preload and redundant styles
- [#194864](https://github.com/openclaw/openclaw/pull/194864) fix: chat links return 404 with unknown query parameters
- [#196343](https://github.com/openclaw/openclaw/pull/196343) fix(release): allow bounded receipt recovery history reads
- [#196319](https://github.com/openclaw/openclaw/pull/196319) fix(ui): keep streaming code controls and chat titles stable
- [#191513](https://github.com/openclaw/openclaw/pull/191513) feat(pairing): pair a browser with a short code approved on the host
- [#196332](https://github.com/openclaw/openclaw/pull/196332) fix(ci): reuse prepared pnpm caches in Testbox commands
- [#196335](https://github.com/openclaw/openclaw/pull/196335) perf(ci): narrow Codex integration worker compilation
- [#196081](https://github.com/openclaw/openclaw/pull/196081) fix(cli): show the invalid --agent option error in status
- [#196311](https://github.com/openclaw/openclaw/pull/196311) fix(ui): speed up warm chat reloads in Firefox
- [#196315](https://github.com/openclaw/openclaw/pull/196315) docs(release): backport main commits directly to release branches
- [#196148](https://github.com/openclaw/openclaw/pull/196148) perf(ci): narrow workers for qualified runtime tests
- [#196139](https://github.com/openclaw/openclaw/pull/196139) perf(test): retain session workers between dynamic tool cases
- [#191845](https://github.com/openclaw/openclaw/pull/191845) fix(crabbox): preserve Boat source and retained lease ownership
- [#196317](https://github.com/openclaw/openclaw/pull/196317) fix(ui): avoid loading Chat when opening Markdown pages
- [#196316](https://github.com/openclaw/openclaw/pull/196316) fix: keep composer comment chips compact
- [#196308](https://github.com/openclaw/openclaw/pull/196308) fix(sandbox): keep tool caches from blocking subagent spawns
- [#196044](https://github.com/openclaw/openclaw/pull/196044) improve: reduce sandbox preparation time across commits
- [#196299](https://github.com/openclaw/openclaw/pull/196299) fix(chat): keep End at the bottom while tool results stream
- [#196260](https://github.com/openclaw/openclaw/pull/196260) fix(ui): Templates page icon looks too faint
- [#196296](https://github.com/openclaw/openclaw/pull/196296) fix: reduce unnecessary rendering in large dashboard galleries
- [#196291](https://github.com/openclaw/openclaw/pull/196291) perf(ui): trim unused filter styles and defer popup geometry
- [#196294](https://github.com/openclaw/openclaw/pull/196294) fix(knowledge): saving one memory takes 10+ seconds on larger vaults
- [#194307](https://github.com/openclaw/openclaw/pull/194307) fix(kubernetes): Gateway refuses to start after an fsGroup volume remount widens its private stores
- [#196258](https://github.com/openclaw/openclaw/pull/196258) refactor(media): unify provider metadata declarations
- [#194824](https://github.com/openclaw/openclaw/pull/194824) fix(agents): replace expired API keys instead of recommending sign-in
- [#196284](https://github.com/openclaw/openclaw/pull/196284) fix(ios): handle qualification network permission explicitly
- [#193142](https://github.com/openclaw/openclaw/pull/193142) fix(agent): --config-override errors show a blank path when a top-level key is wrong
- [#196243](https://github.com/openclaw/openclaw/pull/196243) fix(mcp): stop sending wrapped MCP results to the model twice
- [#196278](https://github.com/openclaw/openclaw/pull/196278) fix: retain the first input in a fresh conversation
- [#196276](https://github.com/openclaw/openclaw/pull/196276) fix: keep connected apps tied to approving ID membership
- [#196280](https://github.com/openclaw/openclaw/pull/196280) perf(chat): reuse causal bounds within transcript lookups
- [#196201](https://github.com/openclaw/openclaw/pull/196201) perf(ui): skip hidden chat rail geometry reads
- [#196189](https://github.com/openclaw/openclaw/pull/196189) fix: release recovery exhausts its budget reading rerun history
- [#196213](https://github.com/openclaw/openclaw/pull/196213) fix: Goals stall after collected child work
- [#196259](https://github.com/openclaw/openclaw/pull/196259) fix(ios): retain release qualification failure details after test split
- [#196181](https://github.com/openclaw/openclaw/pull/196181) fix: keep Latest destination mounted until scrolling settles
- [#194422](https://github.com/openclaw/openclaw/pull/194422) fix(android): recover SMS sends denied by carrier lookup
- [#196198](https://github.com/openclaw/openclaw/pull/196198) fix(ui): admit chat transcripts after the first paint
- [#195135](https://github.com/openclaw/openclaw/pull/195135) fix(release): complete required 2026.9.37 stability backports
- [#196107](https://github.com/openclaw/openclaw/pull/196107) fix(ui): Mac app packaging fails when hoisted installs nest duplicate packages
- [#196227](https://github.com/openclaw/openclaw/pull/196227) refactor(memory-lancedb): keep query contracts in schema owner
- [#191950](https://github.com/openclaw/openclaw/pull/191950) fix(talk): stop voice claiming cancelled consult work finished
- [#196141](https://github.com/openclaw/openclaw/pull/196141) fix(gateway): keep assistant image response policies consistent
- [#194129](https://github.com/openclaw/openclaw/pull/194129) fix(gateway): shared-session runs lose access after session list updates
- [#196234](https://github.com/openclaw/openclaw/pull/196234) fix(ci): unblock human mention tests and reconcile the test budget
- [#196158](https://github.com/openclaw/openclaw/pull/196158) fix(memory): large session exports exhaust workers
- [#196133](https://github.com/openclaw/openclaw/pull/196133) fix(mcp): fenced MCP sign-in offers only Sign out in plugin settings
- [#196218](https://github.com/openclaw/openclaw/pull/196218) fix(templates): use automations in portable manifests
- [#196184](https://github.com/openclaw/openclaw/pull/196184) chore(ui): refresh control ui locales
- [#196206](https://github.com/openclaw/openclaw/pull/196206) fix: keep project session scratch out of shared clones

#### 🐛 New Issues
- [#196000](https://github.com/openclaw/openclaw/issues/196000) Update failure: package-update (2026.10.10) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬5
- [#196304](https://github.com/openclaw/openclaw/issues/196304) Update failure: package-update (2026.10.10) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬4
- [#196142](https://github.com/openclaw/openclaw/issues/196142) [Bug]: OpenRouter catalog rows built right after Gateway start say reasoning:false, so every thinking level clamps to off and reasoning-mandatory models reject the request `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#196381](https://github.com/openclaw/openclaw/issues/196381) Isolated cron sessions fail with MCP_AUTHORIZATION_RETIRED after secrets migration — auth-profile assertion, not MCP `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` 💬3
- [#196321](https://github.com/openclaw/openclaw/issues/196321) [Bug]: openclaw update rootRedirect across NVM installs with systemd drop-in leaves active CLI on old version with broken plugin discovery and dead-end doctor guidance `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#195857](https://github.com/openclaw/openclaw/issues/195857) [Bug]: Control UI still repeats claude-cli narration at the top of MEDIA image replies on main (after #188333) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬3
- [#195856](https://github.com/openclaw/openclaw/issues/195856) [Bug]: claude-cli: replies to the user that aren't the run's final are never persisted and vanish when the CLI session rotates (incl. answers from failed runs) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬3
- [#196255](https://github.com/openclaw/openclaw/issues/196255) [Bug]: Agent DB idle executor cap (MAX_IDLE_EXECUTORS = 4) makes live conversations reopen their database on multi-agent gateways, especially during the standing-intent startup sweep `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#196120](https://github.com/openclaw/openclaw/issues/196120) Config env.vars values treated as volatile secrets, regenerated across Gateway restarts (breaks local tools needing a stable password, e.g. gogcli file keyring) `P2` `impact:data-loss` `impact:security` `issue-rating: 🦪 silver shellfish` 💬2
- [#196126](https://github.com/openclaw/openclaw/issues/196126) [Bug]: Gateway restart drain is capped at 315 s even when systemd's TimeoutStopSec is longer and the restart intent asks for more (wait_ms) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#196251](https://github.com/openclaw/openclaw/issues/196251) [Bug]: Windows Native Setup Fails on "Finishing setup" Due to 10s Gateway Health Check Timeout `bug` `bug:behavior` `P0` `impact:ux-release-blocker` 💬2
- [#196208](https://github.com/openclaw/openclaw/issues/196208) [Bug]: status --all logs Codex registration failure because runtime config is not prepared (2026.11.1) `P2` `impact:ux-friction` 💬2
- [#196275](https://github.com/openclaw/openclaw/issues/196275) Update failure: [redacted-command] (2026.10.10) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#196210](https://github.com/openclaw/openclaw/issues/196210) `openclaw doctor --fix --non-interactive` finishes its work, reports failure, then never exits (2026.11.2, upgrade from 2026.10.7) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#196211](https://github.com/openclaw/openclaw/issues/196211) [Bug]: managed update rolls back with OPENCLAW_STATE_LEASE_LOST - post-update verification cannot take core:plugin-lifecycle/global while the update holds sqlite-maintenance ownership of the state DB `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬2
- [#196191](https://github.com/openclaw/openclaw/issues/196191) Update failure: not-recorded (2026.11.2) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#196182](https://github.com/openclaw/openclaw/issues/196182) Update failure: global-install-failed (2026.9.4) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#196183](https://github.com/openclaw/openclaw/issues/196183) [Docs Bug]: search is unavailable — /pagefind/pagefind.js is stuck at 1.5.2 on a 1-year immutable edge cache while the index is 1.6.0 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬2
- [#196066](https://github.com/openclaw/openclaw/issues/196066) [Bug]: Upgrade to 2026.11.2 blocked: doctor --fix refuses cold transcripts whose session keys use a renamed agent's old id, and no gateway can restore them `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#196076](https://github.com/openclaw/openclaw/issues/196076) exec under service-child group anchor reaps setsid-detached descendants at turn end (claude-cli runtime, macOS) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬2
- [#196056](https://github.com/openclaw/openclaw/issues/196056) [Bug]: npm update on 2026.11.1 fails when SQLite backup probe times out `P2` `impact:ux-friction` 💬2
- [#196035](https://github.com/openclaw/openclaw/issues/196035) Update failure: package-update (2026.10.10) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#196018](https://github.com/openclaw/openclaw/issues/196018) Update failure: package-update (2026.11.1) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#196027](https://github.com/openclaw/openclaw/issues/196027) [Bug]: Telegram consecutive tool-run compaction splits on invisible events (repeated Exec ×2 instead of Exec ×6) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#196017](https://github.com/openclaw/openclaw/issues/196017) Bug: Slack route eligibility is O(n²), blocking the Gateway main thread at 100% CPU `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬2
- [#196013](https://github.com/openclaw/openclaw/issues/196013) Gateway hang: main thread blocked on worker MessagePort close rwlock (SiblingGroup::Disentangle), RSS low, no GC — possibly distinct from #150955 `P1` `impact:crash-loop` 💬2
- [#195981](https://github.com/openclaw/openclaw/issues/195981) Update failure: package-update (2026.10.10) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#195971](https://github.com/openclaw/openclaw/issues/195971) Update failure: package-update (2026.11.1) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#195887](https://github.com/openclaw/openclaw/issues/195887) [Bug]: Legacy claude-cli automations are refused for a missing inference account after upgrading to 2026.11.2, but Doctor, lint and the startup check never flag them `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#195936](https://github.com/openclaw/openclaw/issues/195936) [Feature]: Count channel sessions from a linked channel identity as that person's own sessions (visible under `sessions.others: "none"`) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#195874](https://github.com/openclaw/openclaw/issues/195874) Update failure: update (2026.10.5) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#195861](https://github.com/openclaw/openclaw/issues/195861) Update failure: global-install-failed (2026.9.4) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#195814](https://github.com/openclaw/openclaw/issues/195814) [Bug]: Matrix: still images sent by the bot are labelled "GIF" in Element Web (no `is_animated` flag on m.image) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#196433](https://github.com/openclaw/openclaw/issues/196433) Codex harness: sandboxed agents (workspaceAccess ro/none) never receive AGENTS.md — executionWorkspace passed as resolvedWorkspace `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#196439](https://github.com/openclaw/openclaw/issues/196439) [Bug]: Killed subagent run leaves Control UI task notification stuck; delivery stays pending, agents_wait returns not_found `bug` `bug:behavior` `clawsweeper:intake:bug` 💬1
- [#196436](https://github.com/openclaw/openclaw/issues/196436) Android node photos.latest returns only one or two photos when several full-size photos are requested `clawsweeper:intake:bug` 💬1
- [#196429](https://github.com/openclaw/openclaw/issues/196429) [Bug]: Long replies with a code block arrive split into broken blocks on MS Teams, Tlon, Zalo, and Synology Chat `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#196428](https://github.com/openclaw/openclaw/issues/196428) [Bug]: Native Codex completion records a terminal parent reply, then fails source authority and is marked undelivered (Feishu, 2026.11.2) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#196417](https://github.com/openclaw/openclaw/issues/196417) [Bug]: A2A adapter lacks durableFinal.reconcileUnknownSend; plugin-handled delivery mirror has no retry on writer-claim rebound (false-negative dead-letters + bundled a2a still on legacy queueMessage) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#196408](https://github.com/openclaw/openclaw/issues/196408) [Feature]: Consultation-scoped MCP Relay grants and stable request identity `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#196403](https://github.com/openclaw/openclaw/issues/196403) Agent denies completing bootstrap on the next turn after BOOTSTRAP.md is removed `P2` `clawsweeper:needs-live-repro` `impact:session-state` `issue-rating: 🐚 platinum hermit` 💬1
- [#196406](https://github.com/openclaw/openclaw/issues/196406) iOS: new chat is created as a child of the currently open session (nests in sidebar) `P2` `impact:session-state` `impact:ux-friction` 💬1
- [#196396](https://github.com/openclaw/openclaw/issues/196396) [Bug]: Pinned npm 12.2.0 bundles undici 6.28.0, affected by GHSA-2m5v-pch6-74hx `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#196075](https://github.com/openclaw/openclaw/issues/196075) [Bug]: Feishu attachment downloads truncate quoted filenames containing semicolons `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#196358](https://github.com/openclaw/openclaw/issues/196358) Human corrections wait until the active task finishes instead of steering it `P1` `clawsweeper:source-repro` `impact:session-state` `issue-rating: 🦞 diamond lobster` 💬1
- [#196350](https://github.com/openclaw/openclaw/issues/196350) [Bug]: openclaw doctor early-returns with "controlled by another owner" on installationDrift when a systemd ExecStart drop-in is present, masking the drop-in diagnostic `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#196334](https://github.com/openclaw/openclaw/issues/196334) [Docs Bug]: Backup reference omits portable filename-collision checks `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#196328](https://github.com/openclaw/openclaw/issues/196328) [Bug]: `automations` tool result rejected by its own outputSchema during cron failure-repair turns (2026.11.1); not reproducible from a normal turn `P2` `impact:ux-friction` 💬1
- [#196318](https://github.com/openclaw/openclaw/issues/196318) Issue a node-only pairing code from the local Gateway state directory `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `impact:security` 💬1
- [#196314](https://github.com/openclaw/openclaw/issues/196314) [Feature]: Discord: treat follow-ups in a thread the bot answered in as implicit mentions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#196312](https://github.com/openclaw/openclaw/issues/196312) Slack: presentation table block without caption is silently dropped while delivery reports sent `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#196306](https://github.com/openclaw/openclaw/issues/196306) [Feature]: Slack: treat user-token posts from trusted apps as the posting user `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#196303](https://github.com/openclaw/openclaw/issues/196303) [Feature]: Keep the Discord progress draft when a plugin's reply hook only touches media `P2` `impact:ux-friction` 💬1
- [#196257](https://github.com/openclaw/openclaw/issues/196257) Consolidate media-understanding provider metadata declarations `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#196289](https://github.com/openclaw/openclaw/issues/196289) [Bug]: Windows: Gateway runtime worker (infra/sqlite-readonly-location.worker) opens a visible console window that stays open `P2` `impact:ux-friction` 💬1
- [#196287](https://github.com/openclaw/openclaw/issues/196287) [Bug]: Sandboxed tools cannot open a channel image by its media://inbound ref ("Sandbox media reference is not staged") `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#196285](https://github.com/openclaw/openclaw/issues/196285) [Docs Bug]: Gateway health reference omits its RPC timeout and startup distinction `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#196279](https://github.com/openclaw/openclaw/issues/196279) [Feature]: Add sessionKey and agentId to the internal talk.event diagnostic event `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#196175](https://github.com/openclaw/openclaw/issues/196175) [Bug]: Active Goal stays Pursuing after sessions_spawn fails on retired plugin inventory `bug` `P2` `clawsweeper:needs-info` `impact:session-state` 💬1
- [#196249](https://github.com/openclaw/openclaw/issues/196249) [Bug]: Gateway freezes during a long reasoning stream in a Slack DM when Slack streaming is off `bug` `bug:crash` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#196274](https://github.com/openclaw/openclaw/issues/196274) [Bug]: Codex turns constantly post canned "The tool run finished, but no final summary was produced" because settled-turn finalization always fails on Codex `P2` `impact:ux-friction` 💬1
- [#196273](https://github.com/openclaw/openclaw/issues/196273) [Bug]: Codex helper wake-ups force a deliberate NO_REPLY into a repeated answer, so users get the same reply 2–5 times `P2` `impact:message-loss` `clawsweeper:not-repro-on-main` `issue-rating: 🦪 silver shellfish` 💬1
- [#196190](https://github.com/openclaw/openclaw/issues/196190) [Bug]: Chat says "Interrupted" even though the task is still running in the background `bug` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#196264](https://github.com/openclaw/openclaw/issues/196264) After `refresh_token_expired`, every agent needs its own Codex OAuth re-login (no way to re-authenticate once for all agents) `P1` `clawsweeper:source-repro` `impact:auth-provider` `issue-rating: 🦞 diamond lobster` 💬1
- [#196263](https://github.com/openclaw/openclaw/issues/196263) refactor(memory-lancedb): separate shared policy data from config parsing `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#196253](https://github.com/openclaw/openclaw/issues/196253) [Bug]: Native completion fallback forces two redundant replies after silent completions `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#196248](https://github.com/openclaw/openclaw/issues/196248) Claude Fable 5.2 (`claude-fable-5-2`) unsupported in 2026.11.2: no catalog row, direct-path Claude Code identity below Anthropic's floor, prefix-check contract not applied `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#196245](https://github.com/openclaw/openclaw/issues/196245) [Bug]: Gateway-started update (update.run) on PostgreSQL fails immediately with "PostgreSQL connections must run in a worker" `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#196244](https://github.com/openclaw/openclaw/issues/196244) [Feature]: Show automation next runs countdown-first with recurrence icons `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#196231](https://github.com/openclaw/openclaw/issues/196231) Advisor reviews cron-spawned sub-agents, sessions_send turns and Workboard workers as user runs `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#196235](https://github.com/openclaw/openclaw/issues/196235) Channel manager restarts a channel after stop timeout during gateway shutdown drain `P2` `impact:crash-loop` `maturity:stable` 💬1
- [#196233](https://github.com/openclaw/openclaw/issues/196233) [Feature]: Scoped native Chrome/CUA access for owner-bound condition-triggered Codex automations `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#196188](https://github.com/openclaw/openclaw/issues/196188) [Bug]: One task leaves a growing pile of old Needs attention automation warnings `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#196132](https://github.com/openclaw/openclaw/issues/196132) [Bug]: memory-index session export exhausts its 512 MB worker, and can abort the Gateway, once a session holds about 140 MB of message text `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#196230](https://github.com/openclaw/openclaw/issues/196230) Advisor: Code Mode nested tool calls inflate everyToolCalls `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#196224](https://github.com/openclaw/openclaw/issues/196224) [Bug]: Knowledge scribe setup for one agent removes other agents' scheduled scribes `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#196222](https://github.com/openclaw/openclaw/issues/196222) Remove unused private media auth-source inputs `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#196219](https://github.com/openclaw/openclaw/issues/196219) [Bug] transcript_events UNIQUE constraint failure ends finished turns with "couldn't finish this reply" (2026.10.10, concurrent writers) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#196220](https://github.com/openclaw/openclaw/issues/196220) [Bug]: agent exec rejects a valid xAI OAuth profile ("Explicit auth order for xai has no usable profiles") while Gateway turns on the same profile work `P2` `impact:auth-provider` 💬1
- [#196163](https://github.com/openclaw/openclaw/issues/196163) Matrix: a reply over 4000 characters with a code block arrives split into broken blocks `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#196202](https://github.com/openclaw/openclaw/issues/196202) [Bug]: iOS calendar reads intermittently fail after silent-push wake with lifecycle rejection or disconnect `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#196150](https://github.com/openclaw/openclaw/issues/196150) [Bug]: Control UI file search skips the first match when Enter confirms IME input in Safari `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#196199](https://github.com/openclaw/openclaw/issues/196199) [Bug]: Regression since 2026.10.10: native Codex helper completions fail to resume the parent, pausing goals and locking users out of their assistant `P1` `clawsweeper:needs-info` `impact:session-state` `impact:message-loss` 💬1
- [#196195](https://github.com/openclaw/openclaw/issues/196195) Telegram: /commands sends nothing when the agent id is longer than 45 characters `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#196193](https://github.com/openclaw/openclaw/issues/196193) feat: install unpublished local Templates through the running Gateway `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#196194](https://github.com/openclaw/openclaw/issues/196194) Markdown image alt text shows literal Markdown, e.g. "![**Bold** chart](…)" renders as "**Bold** chart" `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#196185](https://github.com/openclaw/openclaw/issues/196185) [Docs Bug]: DNS setup reference omits the separate Gateway publishing configuration `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#196178](https://github.com/openclaw/openclaw/issues/196178) refactor(media): separate stored filename decoding from persistence `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#196174](https://github.com/openclaw/openclaw/issues/196174) [Bug]: CLI config writes on PostgreSQL state fail the first hot reload with "PostgreSQL connections must run in a worker"; the watcher re-run then applies the same write `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#195935](https://github.com/openclaw/openclaw/issues/195935) [Feature]: Same-person peer digest — let isolated DM sessions see each other's recent turns `P3` `impact:ux-friction` 💬1
- [#196160](https://github.com/openclaw/openclaw/issues/196160) openclaw status crashes with a stack trace when the gateway token is "${VAR}" and the variable is unset `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#196162](https://github.com/openclaw/openclaw/issues/196162) IRC: replies to messages arrive with raw Markdown (**bold**, [label](url), code fences) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#196161](https://github.com/openclaw/openclaw/issues/196161) Cron: a one-shot "at" reminder created by the agent tool or cron.add ignores tz and fires at the UTC time `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#196169](https://github.com/openclaw/openclaw/issues/196169) [Bug]: before_agent_finalize never sees the settled-tool finalization answer, so an unfinished turn is delivered as done `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#196156](https://github.com/openclaw/openclaw/issues/196156) [Feature]: Keep store identity and Gateway state ownership in PostgreSQL on all-PostgreSQL installs, as a first step to no local SQLite files `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#196154](https://github.com/openclaw/openclaw/issues/196154) [Feature]: Update an all-PostgreSQL install while the Gateway serves, stopping it only for the swap, migrations and restart `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#196112](https://github.com/openclaw/openclaw/issues/196112) 🦞 Lobby: a home for interactive tools created with your agent `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#196155](https://github.com/openclaw/openclaw/issues/196155) [Feature]: Keep PostgreSQL rollback and pre-migration captures in PostgreSQL instead of exporting them to SQLite `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#196143](https://github.com/openclaw/openclaw/issues/196143) `## Delegation` is not rendered when `sessions_spawn` is deferred by Tool Search 💬1
- [#196136](https://github.com/openclaw/openclaw/issues/196136) Control UI: make personal, shared, and per-agent GitHub accounts clear in Settings `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#196137](https://github.com/openclaw/openclaw/issues/196137) [Bug]: Workboard lifecycle sync fails every minute with "Session row preparation capacity reached" when the agent has more than 8192 session rows (2026.11.1) `P2` `impact:other` 💬1
- [#196122](https://github.com/openclaw/openclaw/issues/196122) [Bug]: contextInjection "continuation-skip" removes workspace files from the model's context on embedded runs; it does not dedupe them `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#196101](https://github.com/openclaw/openclaw/issues/196101) fix(android): decode HTML entities in inline progress tag attributes `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#196105](https://github.com/openclaw/openclaw/issues/196105) [Bug]: Post-turn memory maintenance inherits the completed foreground work scope `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#196104](https://github.com/openclaw/openclaw/issues/196104) [Docs Bug]: Retired HEARTBEAT.md guide omits intentional file retention `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#196102](https://github.com/openclaw/openclaw/issues/196102) fix(android): retry Wear TextToSpeech initialization after transient startup failure `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#196098](https://github.com/openclaw/openclaw/issues/196098) config set writes null holes into arrays for out-of-range indexes `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#196086](https://github.com/openclaw/openclaw/issues/196086) fix(android): preserve inline code text in markdown plain-text extraction `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#196085](https://github.com/openclaw/openclaw/issues/196085) [Bug]: macOS Peekaboo generation changes on every descriptor read, forcing node reconnects `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#196088](https://github.com/openclaw/openclaw/issues/196088) fix(android): abandon Wear audio focus request on transient focus loss `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#196087](https://github.com/openclaw/openclaw/issues/196087) fix(android): split fenced code language info string on any whitespace `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#196091](https://github.com/openclaw/openclaw/issues/196091) [Bug]: Graceful restart resumes idle main sessions that only held a run-less work admission (stable 2026.9.36 to 2026.11.2) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#196069](https://github.com/openclaw/openclaw/issues/196069) fix(android): wrap chat turn recap duration and token summary on compact widths `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#196068](https://github.com/openclaw/openclaw/issues/196068) fix(android): show unavailable fallback when inline widget resolver is not ready `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#196061](https://github.com/openclaw/openclaw/issues/196061) [Bug]: Running Codex tasks stall after silent pauses; follow-ups and helper results are rejected `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#196053](https://github.com/openclaw/openclaw/issues/196053) Update failure: gateway-stop-unverified (2026.10.9) `P2` `impact:ux-friction` 💬1
- [#196047](https://github.com/openclaw/openclaw/issues/196047) [Bug]: sessions_spawn thread:true still fails from claude-cli Discord channel sessions on 2026.11.1 (after #159136) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#196048](https://github.com/openclaw/openclaw/issues/196048) [Bug]: templates add leaves the new agent behind when it fails, and retries add duplicates `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#196031](https://github.com/openclaw/openclaw/issues/196031) sqlite-wal: call /sbin/mount by absolute path on darwin and fail closed on malformed or missing output `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#196030](https://github.com/openclaw/openclaw/issues/196030) darwin: let process identity fail closed instead of falling back to /bin/ps (opt-in) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#196029](https://github.com/openclaw/openclaw/issues/196029) Android: ChatReactionPicker custom emoji sheet is not scrollable in short viewports with large text `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#196021](https://github.com/openclaw/openclaw/issues/196021) Android: ChatSwarmProgressView starves or clips long swarm group labels and summary counts on compact widths `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#196016](https://github.com/openclaw/openclaw/issues/196016) [Android] OnboardingFlow: Additional features toggle omits Expanded/Collapsed stateDescription `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#196015](https://github.com/openclaw/openclaw/issues/196015) [Android] CronJobManagementPanel: deletion confirmation dialog omits automation name and ID `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#196012](https://github.com/openclaw/openclaw/issues/196012) [Bug]: backup create fails on Windows - SQLite header probe exceeds the 10 s spawnSync budget on a large state tree `P2` `impact:other` 💬1
- [#196006](https://github.com/openclaw/openclaw/issues/196006) [Feature]: Keep Talk conversational during long-running work `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#196008](https://github.com/openclaw/openclaw/issues/196008) [Android] ChatBrowserCard: collapsed browser preview overlay lacks contentDescription and Button role `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#196007](https://github.com/openclaw/openclaw/issues/196007) [Android] SidebarAttention: attention preview button omits Expanded/Collapsed stateDescription `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#195994](https://github.com/openclaw/openclaw/issues/195994) [Android] CronJobDetail: formatCronInterval drops non-zero minutes on multi-day intervals `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#195993](https://github.com/openclaw/openclaw/issues/195993) [Android] WorkspaceFilesScreen: workspace entry rows omit Folder/File accessibility semantics `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#195990](https://github.com/openclaw/openclaw/issues/195990) [Android] WearRealtimeTalkController: blank transcript update wipes existing Wear realtime transcript `clawsweeper:bulk-filed` 💬1
- [#195988](https://github.com/openclaw/openclaw/issues/195988) [Android] ShellScreen: opening Gateway settings from Overview or command palette leaves shell on Chat tab `clawsweeper:bulk-filed` 💬1
- [#195989](https://github.com/openclaw/openclaw/issues/195989) [Android] DreamingSettingsScreen: dream diary entries truncate at two lines with no detail view `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#195985](https://github.com/openclaw/openclaw/issues/195985) Codex harness: apply_patch intermittently fails with "No usable execution environment is available" since 2026.11.1 (Codex 0.164.0) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#195982](https://github.com/openclaw/openclaw/issues/195982) [Bug]: Control UI hold-to-dictate: no live input-level feedback while recording, no send/transcription progress after Send, transcript can be silently dropped `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#195973](https://github.com/openclaw/openclaw/issues/195973) [Bug]: Matrix user-target send reports "m.direct missing" when the account-data read actually failed `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#195975](https://github.com/openclaw/openclaw/issues/195975) fix(android): show target device name and ID in Reject and Remove pairing dialogs `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#195966](https://github.com/openclaw/openclaw/issues/195966) fix(android): preserve aggregate contact display name in contacts.search results `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#195965](https://github.com/openclaw/openclaw/issues/195965) fix(android): display gateway destination authority and path in TLS trust dialog `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#195964](https://github.com/openclaw/openclaw/issues/195964) fix(android): preserve multiline system.notify body when expanded via BigTextStyle `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#195967](https://github.com/openclaw/openclaw/issues/195967) [Bug] Control UI webchat: final assistant reply disappears and is not persisted when the agent runs on the Claude CLI runtime `bug` `bug:behavior` `P1` `impact:session-state` 💬1
- [#195962](https://github.com/openclaw/openclaw/issues/195962) [Bug]: Windows `tui --local` fails with DataCloneError on stable 2026.10.10-2026.11.2; #175929 fix not backported from main `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#195958](https://github.com/openclaw/openclaw/issues/195958) [Bug]: MCP OAuth UI sign-in rejects HTTPS loopback callback with Executor `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#195956](https://github.com/openclaw/openclaw/issues/195956) fix(android): expose selected accessibility state on branch switcher rows `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#195949](https://github.com/openclaw/openclaw/issues/195949) fix(android): enforce RemoteInput choices and allowFreeFormInput in notification reply `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#195947](https://github.com/openclaw/openclaw/issues/195947) Android: Threads layout toggle omits Compact/Detailed stateDescription semantics `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#195951](https://github.com/openclaw/openclaw/issues/195951) [Bug]: Native Codex subagents of a restricted (cron) parent see no MCP tools but inherit instructions advertising them (2026.10.10) `P2` `impact:other` 💬1
- [#195952](https://github.com/openclaw/openclaw/issues/195952) [Bug]: Native Codex requester: each subagent completion becomes a duplicate visible reply after the parent consumed it (2026.10.10) `P1` `impact:message-loss` 💬1
- [#195941](https://github.com/openclaw/openclaw/issues/195941) Android: AndroidPermissionSnapshot ignores app-wide notification blocking in NotificationManagerCompat `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#195940](https://github.com/openclaw/openclaw/issues/195940) Android: inline chat audio seek Slider omits accessible label `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#195937](https://github.com/openclaw/openclaw/issues/195937) Android: installed skill switches omit skill names from accessibility contentDescription `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#195938](https://github.com/openclaw/openclaw/issues/195938) Android: device.apps omits disabled launcher apps/components even when includeDisabled=true `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#195927](https://github.com/openclaw/openclaw/issues/195927) Android: phone-to-Wear reply projection discards canonical input_text and output_text blocks `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#195925](https://github.com/openclaw/openclaw/issues/195925) Android: message information timestamp buttons omit expanded/collapsed accessibility semantics `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#195915](https://github.com/openclaw/openclaw/issues/195915) Android: GatewaySourcePreviews caches transient HTTP favicon failures as null for the connection lifetime `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#195914](https://github.com/openclaw/openclaw/issues/195914) Android: image viewer Reset zoom control omits current zoom percentage from accessibility stateDescription `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#195854](https://github.com/openclaw/openclaw/issues/195854) Chat composer: Space-committing an IME composition drops the committed word and resets the caret to column 1 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#195872](https://github.com/openclaw/openclaw/issues/195872) Feature request: a per-agent way to declare "this agent never delegates" (`subagents.role: "leaf"`) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#195910](https://github.com/openclaw/openclaw/issues/195910) [Bug]: triage automation never clears `stale` or `clawsweeper:needs-info` after the reporter answers `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#195802](https://github.com/openclaw/openclaw/issues/195802) Scheduled supervision stops running, leaving ongoing work unattended `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#195826](https://github.com/openclaw/openclaw/issues/195826) android: remote deletion of the selected chat falls back to main without stopping active or pending Listen speech `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#195882](https://github.com/openclaw/openclaw/issues/195882) Android: Manual Refresh chat does not reconcile interactive questions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#195720](https://github.com/openclaw/openclaw/issues/195720) Telegram: a reply that mentions a start tag like `<b>` in prose is sent with an unclosed tag, loses its formatting and drops the tag text `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#195903](https://github.com/openclaw/openclaw/issues/195903) Android: Voice Settings microphone rows omit radio selection and disabled semantics `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#195904](https://github.com/openclaw/openclaw/issues/195904) Android: custom wake-phrase matcher strips Unicode combining marks and splits words at marks `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#195899](https://github.com/openclaw/openclaw/issues/195899) [Bug]: ACP agent replies are recorded in the session but do not appear in the bound Telegram topic `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#195898](https://github.com/openclaw/openclaw/issues/195898) [Bug]: Cron previous-run lookup throws for leap-day schedules (e.g. `0 0 29 2 *`), breaking catch-up and missed-run detection `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#195867](https://github.com/openclaw/openclaw/issues/195867) [Bug]: Shared provider sign-in rejects a canonical owner outside the agent roster `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#195896](https://github.com/openclaw/openclaw/issues/195896) Android: Delayed failed session rename from a retired gateway connection overwrites current gateway chat error `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#195895](https://github.com/openclaw/openclaw/issues/195895) Android: App language choices in Appearance settings omit radio-button selection semantics `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#195875](https://github.com/openclaw/openclaw/issues/195875) Consolidate DeepInfra video job completion policy `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#195881](https://github.com/openclaw/openclaw/issues/195881) Android: Sidebar Pages, catalog host, and workspace disclosure buttons omit expanded/collapsed accessibility state `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#195871](https://github.com/openclaw/openclaw/issues/195871) Native `sessions_spawn` child ignores the target agent's `thinkingDefault` and inherits the caller's thinking level `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#195869](https://github.com/openclaw/openclaw/issues/195869) [Bug]: Model probes hide their refusal reason when the gateway is running `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#195864](https://github.com/openclaw/openclaw/issues/195864) [Bug]: Agent turns end silently with no result or notice (CLI run aborted, stuck session recovery skipped, early message send closes turn) `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#195862](https://github.com/openclaw/openclaw/issues/195862) Android: Threads rows do not expose unread state to accessibility services `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#195863](https://github.com/openclaw/openclaw/issues/195863) Android: Native Talk speech playback continues at full volume during duckable audio focus loss `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:source-repro` 💬1
- [#195868](https://github.com/openclaw/openclaw/issues/195868) [Bug]: Voice (Talk/realtime) speech recognition cannot be pinned to a language: no `language` option is read, Vietnamese gets transcribed as Chinese/Cyrillic `bug` `bug:behavior` `P2` `impact:ux-friction` 💬1
- [#195818](https://github.com/openclaw/openclaw/issues/195818) [Bug]: Automation pause notice splits an emoji in a long configured name, garbling the delivered notice `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#195855](https://github.com/openclaw/openclaw/issues/195855) [Bug]: Active Memory misses Portuguese conversation searches and past decisions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1

#### 🔒 Closed Issues
- [#193962](https://github.com/openclaw/openclaw/issues/193962) [Bug]: Fix for the SQLite header-probe timeout (#187197) can't be reached from 2026.10.10: package-update runs the installed updater's 10 s probe
- [#149631](https://github.com/openclaw/openclaw/issues/149631) [Bug]: PR preflight throws at 121 jobs against the 120 Node matrix cap
- [#119294](https://github.com/openclaw/openclaw/issues/119294) [Feature]: Track migration to MCP 2.0 (2026-07-28 stateless spec) — @modelcontextprotocol/sdk → split client/server v2 packages
- [#112372](https://github.com/openclaw/openclaw/issues/112372) Add opt-in, origin-bound deferred completion to sessions_send
- [#175926](https://github.com/openclaw/openclaw/issues/175926) SQLite snapshot reclamation skips every cycle: Unrecognized snapshot directory
- [#134918](https://github.com/openclaw/openclaw/issues/134918) Embedded agent: incomplete/empty turns from a model surface "couldn't generate" errors without consuming retry budget (two signatures + local patches that fixed both)
- [#173167](https://github.com/openclaw/openclaw/issues/173167) exec shell tool: timeoutSeconds does not extend Code Mode wall-clock budget — commands >~10s always background
- [#150250](https://github.com/openclaw/openclaw/issues/150250) [Feature]: Skill Workshop — verify learning coverage and behavioral reuse
- [#192959](https://github.com/openclaw/openclaw/issues/192959) [Bug]: Gateway refuses to start after pod restart on Kubernetes: client credential directory rejected after fsGroup remount
- [#173313](https://github.com/openclaw/openclaw/issues/173313) config get masks sensitive values (auth.password) — verification loop misleads for hours during a Funnel outage recovery
- [#193929](https://github.com/openclaw/openclaw/issues/193929) [Bug]: Control UI spinners on main keep WebKit's GPU process busy every frame (regression from #189847)
- [#173518](https://github.com/openclaw/openclaw/issues/173518) Feature: select a web-search provider per isolated automation
- [#173060](https://github.com/openclaw/openclaw/issues/173060) [Bug]: plugin-provided tools are silently dropped by a narrowing tools.allow, even when each plugin tool is named explicitly
- [#172227](https://github.com/openclaw/openclaw/issues/172227) Session migration: supported reconciliation for historical archive receipts pointing to different paths (2026.10.3)
- [#176248](https://github.com/openclaw/openclaw/issues/176248) Session retirement: ended node placement cannot be deleted while its node is disconnected
- [#175941](https://github.com/openclaw/openclaw/issues/175941) [Feature]: Support Codex Micro hardware controls in OpenClaw desktop
- [#175869](https://github.com/openclaw/openclaw/issues/175869) Update failure: gateway-recovery-verification (2026.10.3)
- [#175708](https://github.com/openclaw/openclaw/issues/175708) RFC: Improve Advisor efficiency with event-driven triggers and windowed context
- [#175360](https://github.com/openclaw/openclaw/issues/175360) [Bug] openclaw delegator fails with Inference setup probe cleanup did not finish safely
- [#175003](https://github.com/openclaw/openclaw/issues/175003) 2026.10.3 upgrade: Gateway RSS and event-loop worst overdue stepped up
- [#196000](https://github.com/openclaw/openclaw/issues/196000) Update failure: package-update (2026.10.10)
- [#173170](https://github.com/openclaw/openclaw/issues/173170) Agent cannot open terminal panel — manual user action required at every session start before shell commands work
- [#173169](https://github.com/openclaw/openclaw/issues/173169) terminal tool: read() returns full unbounded buffer with no cursor/offset — output becomes unreliable in long sessions
- [#171544](https://github.com/openclaw/openclaw/issues/171544) [Bug]: Background exec "Completion will wake this conversation automatically" never wakes an idle session; registry flips to completed only on poll (2026.10.3)
- [#170076](https://github.com/openclaw/openclaw/issues/170076) Update failure: package-swap (2026.10.1)
- [#169448](https://github.com/openclaw/openclaw/issues/169448) [Bug]: SQLite worker broker: a long job on one database blocks other databases sharing its worker
- [#194408](https://github.com/openclaw/openclaw/issues/194408) [Feature]: Compaction: make MAX_COMPACTION_SUMMARY_CHARS (16,000) configurable; two-thirds of production compactions hit it
- [#133179](https://github.com/openclaw/openclaw/issues/133179) [Feature]: Show attach-only mode in browser status
- [#127785](https://github.com/openclaw/openclaw/issues/127785) workboard_move with an active claim moves the card but does not release the claim
- [#196304](https://github.com/openclaw/openclaw/issues/196304) Update failure: package-update (2026.10.10)
- [#175271](https://github.com/openclaw/openclaw/issues/175271) Control UI: "Applying chat settings" stuck forever after a lost ack (queue item stays in waiting-model)
- [#176243](https://github.com/openclaw/openclaw/issues/176243) memory-core: memory forget hits worker OOM for retained history, including a single session
- [#176222](https://github.com/openclaw/openclaw/issues/176222) [Feature]: Supported operator inspection and recovery for unknown managed-execution effects
- [#176076](https://github.com/openclaw/openclaw/issues/176076) raceWithTimeout overflows large deadlines into near-immediate timeouts
- [#175598](https://github.com/openclaw/openclaw/issues/175598) [Feature]: Check skill requires.bins inside the sandbox for sandboxed agents
- [#175002](https://github.com/openclaw/openclaw/issues/175002) bug: session usage logs exceed the cap with fractional limits
- [#173702](https://github.com/openclaw/openclaw/issues/173702) [Bug]: Duplicate chrome-devtools-mcp subprocess sets accumulate and are never reaped on 2026.10.5-beta.2 (post-#93559 regression cluster)
- [#173417](https://github.com/openclaw/openclaw/issues/173417) [Bug]: Session observer disables its run after transient Codex plugin-replacement admission errors
- [#161839](https://github.com/openclaw/openclaw/issues/161839) Bug: plugin source capture can consume the entire volume during plugin load churn (ENOSPC amplification loop)
- [#187535](https://github.com/openclaw/openclaw/issues/187535) [Bug]: Queued follow-up run carries operator authority but no Gateway context — in-process Gateway tool calls fail for the whole run
- [#172918](https://github.com/openclaw/openclaw/issues/172918) [Bug]: one transient stream match timeout ('worker task timed out') makes a stream cron job terminally restart-exhausted, no retry, no alert
- [#172018](https://github.com/openclaw/openclaw/issues/172018) [Bug]: inline chat A2UI (show_widget kind a2ui) button clicks never reach the conversation
- [#171424](https://github.com/openclaw/openclaw/issues/171424) session-observer and isolated utility completions starve on adaptive-thinking models when maxTokens is not expanded
- [#169002](https://github.com/openclaw/openclaw/issues/169002) [Bug]: Windows Control UI tests hang in Chromium --version probe
- [#170465](https://github.com/openclaw/openclaw/issues/170465) [Bug]: active-memory "Plugin session ownership target not found" persists on 2026.10.1 for named direct sessions (not internal-session-effects)
- [#170393](https://github.com/openclaw/openclaw/issues/170393) Codex OAuth migration blocked: current database is schema 20, documented bridge supports up to 19
- [#170179](https://github.com/openclaw/openclaw/issues/170179) Gateway RSS/native-memory growth with session SQLite stalls
- [#170175](https://github.com/openclaw/openclaw/issues/170175) [Bug]: Transcript-ownership refusals from sessions.reset and sessions.compact lack structured details and a retryable flag
- [#170036](https://github.com/openclaw/openclaw/issues/170036) Update failure: reconcile:abandoned (2026.10.1)
- [#170030](https://github.com/openclaw/openclaw/issues/170030) [2026.9.8] Control UI loses recent conversation from rendered history
- [#169979](https://github.com/openclaw/openclaw/issues/169979) [Feature]: Keep which skill a tool call used in the session transcript
- [#169762](https://github.com/openclaw/openclaw/issues/169762) [Android] No inline approval prompt in chat interface - approvals hidden in sidebar and separate panel only
- [#169569](https://github.com/openclaw/openclaw/issues/169569) sessions.reset / sessions.compact blocked while target session has an active run — automation regression in 9.9
- [#195618](https://github.com/openclaw/openclaw/issues/195618) [Bug]: Agent image/media tools reject valid data URLs with media type parameters (e.g. ;charset=utf-8)
- [#160742](https://github.com/openclaw/openclaw/issues/160742) Session controller: one stop operation for every entry point
- [#160739](https://github.com/openclaw/openclaw/issues/160739) Session controller: make it the only source of busy state and run ownership
- [#176246](https://github.com/openclaw/openclaw/issues/176246) cli: infer audio transcribe and video describe ignore --model provider/model when media models are configured
- [#176227](https://github.com/openclaw/openclaw/issues/176227) [Bug]: tools.toolsBySender changes the tool list and system prompt on every sender change, so the prompt cache misses in group chats
- [#176116](https://github.com/openclaw/openclaw/issues/176116) [Feature]: Opt-in bounded exec output artifacts for post-failure diagnosis
- [#176107](https://github.com/openclaw/openclaw/issues/176107) Code Mode: exec tool result returned in two shapes; envelope value is sometimes a JSON-encoded string
- [#176092](https://github.com/openclaw/openclaw/issues/176092) [Bug]: Scheduled job's final report is not posted after a progress message to the same chat
- [#176077](https://github.com/openclaw/openclaw/issues/176077) sessions: no retention control on transcript archives — unbounded .migrated-* / archive accumulation fills disk on long-lived agents
- [#176059](https://github.com/openclaw/openclaw/issues/176059) Discord voice consultations lose authenticated current-speaker identity at backend ingress
- [#176020](https://github.com/openclaw/openclaw/issues/176020) [Feature]: opt-in result middleware for pre-execution tool denials
- [#175909](https://github.com/openclaw/openclaw/issues/175909) Support prompt-created GPT-Live voice references
- [#175690](https://github.com/openclaw/openclaw/issues/175690) [Feature]: Supported authenticated-source custody across first Gateway code loading
- [#175583](https://github.com/openclaw/openclaw/issues/175583) [Feature]: Let a provider place the resolved credential in a named request header
- [#175581](https://github.com/openclaw/openclaw/issues/175581) Feature: Cloudflare Clef decisions through host CLI OAuth
- [#175522](https://github.com/openclaw/openclaw/issues/175522) [Bug]: iOS embedded Settings gets HTTP 401 behind Basic Auth while native Gateway works
- [#175434](https://github.com/openclaw/openclaw/issues/175434) Update failure: finalize-plugins (2026.9.8)
- [#175355](https://github.com/openclaw/openclaw/issues/175355) [Feature]: memory temporal decay needs a floor or configurable curve (30-day half-life buries reference notes)
- [#175001](https://github.com/openclaw/openclaw/issues/175001) [Feature]: Opt-in thinking level for meeting notes without changing chat defaults
- [#174733](https://github.com/openclaw/openclaw/issues/174733) [Bug]: OpenAI image generation is offered on Free ChatGPT plans but always fails with HTTP 400
- [#174690](https://github.com/openclaw/openclaw/issues/174690) System-prompt series markers persisted without prefix/hash, making cache restore impossible and forcing full prefix rewrites (2026.10.4)
- [#174679](https://github.com/openclaw/openclaw/issues/174679) Codex hosted web-search admission is coupled to native execution permissions
- [#174512](https://github.com/openclaw/openclaw/issues/174512) [Bug]: Memory Wiki apply compiles twice when the vault index is missing
- [#174483](https://github.com/openclaw/openclaw/issues/174483) [Bug]: local iMessage CAF voice notes fail transcription
- [#174418](https://github.com/openclaw/openclaw/issues/174418) [Feature]: Preserve structured MCP results for native Codex composition without parsing display text
- [#174384](https://github.com/openclaw/openclaw/issues/174384) [Docs]: Clarify personal OAuth account inheritance and explicit selection for sessions_spawn subagents
- [#174382](https://github.com/openclaw/openclaw/issues/174382) [MiniMax] Provider catalog still publishes MiniMax-M2.7 and M2.5 after upstream retires them on 2026-11-18
- [#174364](https://github.com/openclaw/openclaw/issues/174364) [Bug]: Workboard agent tool schema rejects board appearance resets
- [#174190](https://github.com/openclaw/openclaw/issues/174190) [Bug]: Phone long-press in chat cannot select text
- [#174092](https://github.com/openclaw/openclaw/issues/174092) [Bug]: Feishu dynamic agents ignore `--profile` and `OPENCLAW_STATE_DIR` and are created under `~/.openclaw`
- [#173562](https://github.com/openclaw/openclaw/issues/173562) [Bug]: Android dictation reports on-device speech unavailable for en-CA locale; works with en-US
- [#173365](https://github.com/openclaw/openclaw/issues/173365) [Bug]: source CLI switches from Node to auto-staged Bun, changing SQLite runtime
- [#195414](https://github.com/openclaw/openclaw/issues/195414) [Bug]: Memory format-upgrade rebuild never completes after 2026.11.2 — `worker task capacity reached` (Gateway and offline CLI)
- [#173308](https://github.com/openclaw/openclaw/issues/173308) formatCliCommand mangles version-suffixed openclaw invocations when a container hint or profile is set
- [#173194](https://github.com/openclaw/openclaw/issues/173194) [Feature]: Retire obsolete external delivery routes without replacing the conversation
- [#173148](https://github.com/openclaw/openclaw/issues/173148) [Feature]: Tell the agent which client sent a webchat message (iOS app vs. browser Control UI)
- [#173116](https://github.com/openclaw/openclaw/issues/173116) Control UI hides labeled, categorized sessions created by an automation (`createdActor.type: "system"`) from the session list
- [#173030](https://github.com/openclaw/openclaw/issues/173030) [Feature]: Supported reply-custody handoff for plugin tools with external asynchronous responses
- [#173021](https://github.com/openclaw/openclaw/issues/173021) [Bug]: Gateway tools.effective takes ~5 s with no MCP tools and 10–19 s with MCP tools, and stalls other Control UI requests
- [#173020](https://github.com/openclaw/openclaw/issues/173020) [Bug]: Codex agent invents node-eligibility diagnosis and misattributes prior drive-query evidence
- [#172984](https://github.com/openclaw/openclaw/issues/172984) Update failure: git-update (2026.10.3)
- [#172746](https://github.com/openclaw/openclaw/issues/172746) [Feature]: Deliver a turn's commentary to channels (merge into the durable final message)
- [#172688](https://github.com/openclaw/openclaw/issues/172688) memory-core: prune short-term recall entries atomically when source files move or archive
- [#172594](https://github.com/openclaw/openclaw/issues/172594) iOS: Cloudflare Access sign-in stays on the first account when adding another Gateway
- [#172501](https://github.com/openclaw/openclaw/issues/172501) Native audio input for audio-capable models (voice notes bypass STT)
- [#172483](https://github.com/openclaw/openclaw/issues/172483) [Bug]: Browser panel stays zoomed with an empty band below the page after a viewport resize fails
- [#172475](https://github.com/openclaw/openclaw/issues/172475) [Feature]: add `workboard edit` / `comment` / `proof` CLI verbs (Gateway methods already exist)
- [#172343](https://github.com/openclaw/openclaw/issues/172343) [Feature]: transcripts: make the meeting-notes language configurable (summary-model hard-codes "in the transcript's language")
- [#172323](https://github.com/openclaw/openclaw/issues/172323) Discord exec-approval tap returns "no longer pending" for an approval created by a separate CLI-run session while it is still pending (2026.10.1)
- [#172319](https://github.com/openclaw/openclaw/issues/172319) [Feature]: Supported Claws manual reconciliation/re-consent preserving intentional agent drift
- [#172272](https://github.com/openclaw/openclaw/issues/172272) [Bug]: Chrome extension reported as missing when macOS blocks Chrome profile reads
- [#172263](https://github.com/openclaw/openclaw/issues/172263) [Feature]: Report MCP App sandbox timeout back to the agent
- [#172142](https://github.com/openclaw/openclaw/issues/172142) Conditional local skill installation with preserved recovery content
- [#172119](https://github.com/openclaw/openclaw/issues/172119) [Bug]: background subsystem logs overwrite the remote TUI screen
- [#172093](https://github.com/openclaw/openclaw/issues/172093) feat(memory): add FTS5 trigram fallback and CamelCase/snake_case sub-tokenization for code identifier search
- [#172027](https://github.com/openclaw/openclaw/issues/172027) Feature: sessions_spawn child as sessions.fork branch from a chosen start point
- [#171547](https://github.com/openclaw/openclaw/issues/171547) [Feature]: Declarative, user-overridable model capability registry in config (thinking levels, params, valid values), so new models don't need a release
- [#171499](https://github.com/openclaw/openclaw/issues/171499) [Bug]: iOS push-to-talk drops the last words when released right after speaking
- [#171487](https://github.com/openclaw/openclaw/issues/171487) workboard: let a card worker request a human decision without blocking the card for 24h
- [#171486](https://github.com/openclaw/openclaw/issues/171486) workboard: a card left in "review" blocks all further dispatch for the same owner; no first-class acceptance path
- [#171352](https://github.com/openclaw/openclaw/issues/171352) Update failure: reconcile:abandoned (2026.10.1)
- [#171304](https://github.com/openclaw/openclaw/issues/171304) [Feature]: Plugin hooks: let `before_prompt_build` attach persistent context images (`prependImages`)
- [#171275](https://github.com/openclaw/openclaw/issues/171275) memory-wiki: executable, live-verified claims (check probes + verdicts as claim status/evidence)
- [#171196](https://github.com/openclaw/openclaw/issues/171196) Codex harness: finalize hooks don't run on many subagent wake-up turns
- [#171133](https://github.com/openclaw/openclaw/issues/171133) macOS native app: SQLite step failure lacks diagnostic context; request safe offline diagnostic
- [#171107](https://github.com/openclaw/openclaw/issues/171107) [Feature]: Live screencast for browsers routed through a paired node
- [#171083](https://github.com/openclaw/openclaw/issues/171083) workboard_specify: add optional expectedUpdatedAt (caller-side compare-and-set)
- [#170817](https://github.com/openclaw/openclaw/issues/170817) [Bug]: Aborted chat.send prompt is replayed as a live request on the next turn
- [#170577](https://github.com/openclaw/openclaw/issues/170577) [Feature]: Config $include: let a read-only include stay read-only, with UI writes kept in the including file
- [#170483](https://github.com/openclaw/openclaw/issues/170483) [Bug]: Zalo cuts message-tool sends and photo captions at 2000 characters and drops the rest
- [#170279](https://github.com/openclaw/openclaw/issues/170279) Feature request: let claws migrate adopt existing agents while leaving operator-side settings (thinking, model catalog/runtime, agentDir, agents.defaults) in config
- [#170216](https://github.com/openclaw/openclaw/issues/170216) Same-client human steering rejected (tool_authority_mismatch) during requester-settle turns after sessions_yield; human followup starves behind long completion-wake work (2026.10.2)
- [#170192](https://github.com/openclaw/openclaw/issues/170192) [Feature]: Opt-in Skill Workshop experience review for native subagent (and cron/hook) runs, attributed to the owning agent
- [#170104](https://github.com/openclaw/openclaw/issues/170104) [Feature]: Self-learning metrics: learning event log and weekly curator report
- [#170103](https://github.com/openclaw/openclaw/issues/170103) [Feature]: Native scheduled 'Learn from past conversations' per agent, including subagent/cron sessions
- [#170100](https://github.com/openclaw/openclaw/issues/170100) [Feature]: Experience review depth bar should count tool calls, not only model iterations (code mode under-qualifies)
- [#170018](https://github.com/openclaw/openclaw/issues/170018) Context metrics inconsistent across sessions_list, session store and /status on Codex sessions (Context 345%; denominator switches with fallback provenance)
- [#170015](https://github.com/openclaw/openclaw/issues/170015) [Feature]: Let operators limit how many automation jobs clients can create (cron.maxJobs)
- [#169991](https://github.com/openclaw/openclaw/issues/169991) Feature request: LiveKit SIP/RTC carrier for the existing voice-call plugin
- [#169969](https://github.com/openclaw/openclaw/issues/169969) [Feature]: Telegram DM Topics — allow commands in root DM while requiring topics for conversations
- [#169942](https://github.com/openclaw/openclaw/issues/169942) [Bug]: channels status --probe --json exits 0 when the Gateway is unreachable
- [#169941](https://github.com/openclaw/openclaw/issues/169941) [Bug]: Gateway stays up but deaf for 40 min when a plugin hook starves the event loop; no health signal or recovery
- [#169888](https://github.com/openclaw/openclaw/issues/169888) Backport #140730 (KNN child import slimming) to extended-stable: memory_search ~2x slower / times out on 2026.8.35
- [#169861](https://github.com/openclaw/openclaw/issues/169861) [Bug]: Removed plugin's data/settings migration stays "unfinished" forever; doctor --fix, registry refresh and uninstall can't retire it
- [#169796](https://github.com/openclaw/openclaw/issues/169796) [Feature]: ElevenLabs: configurable audio-tag prefix for Eleven v3/v4 models
- [#169790](https://github.com/openclaw/openclaw/issues/169790) [Bug]: LINE quote of a bot message sent before a Gateway restart no longer addresses the bot
- [#169734](https://github.com/openclaw/openclaw/issues/169734) [Bug]: Discord native session controls can silently fail after authorization
- [#169685](https://github.com/openclaw/openclaw/issues/169685) [Bug]: iOS chat messages jump only after the keyboard animation finishes
- [#169443](https://github.com/openclaw/openclaw/issues/169443) [Bug]: Telegram threaded mode: first DM message lands in root chat when the client creates the topic separately
- [#169376](https://github.com/openclaw/openclaw/issues/169376) Talk Gateway relay needs loss-detectable audio completion for buffered playback
- [#169357](https://github.com/openclaw/openclaw/issues/169357) [Bug]: History replay re-encodes stored photos on every model request
- [#169308](https://github.com/openclaw/openclaw/issues/169308) [Feature]: Subagent spawn envelope: let a child own its part (peer framing) or make the role lines configurable
- [#169274](https://github.com/openclaw/openclaw/issues/169274) [Bug] Legacy 2026.5.7 → 2026.10.1 Docker upgrade blocked: 9.5 ownership, 9.7 SQLite identity, 10.1 retired plugin index — supported bridge?
- [#169222](https://github.com/openclaw/openclaw/issues/169222) Run abandoned by a gateway restart (CLI embedded fallback → `EmbeddedAttemptSessionTakeoverError`) never gets an `agent.run.finished` audit event
- [#169203](https://github.com/openclaw/openclaw/issues/169203) [Bug]: macOS app hangs during Option + Space messaging workflow (2026.9.8)
- [#169191](https://github.com/openclaw/openclaw/issues/169191) macOS node: selecting Computer control provider = CUA drops computer.act/screen.snapshot from the node (driver logs 'service connect' WARN); Peekaboo works
- [#169158](https://github.com/openclaw/openclaw/issues/169158) [Bug]: openclaw system/custodian agent turns (agent:openclaw:openclaw-*) emit no post-resolve telemetry at all — no model_call_started, tool spans, model.usage, or agent_end
- [#169147](https://github.com/openclaw/openclaw/issues/169147) [Bug]: Discord fallback acknowledgement edits Components V2 source after deferred-update
- [#169087](https://github.com/openclaw/openclaw/issues/169087) Session SQLite migration recovery report (session-sqlite-1791719772645-d19ce33d)
- [#169067](https://github.com/openclaw/openclaw/issues/169067) [Bug]: Usage Started by shows raw Slack IDs and splits verified linked identities
- [#169014](https://github.com/openclaw/openclaw/issues/169014) [Feature]: iOS chat toolbar layering over a continuous transcript
- [#196208](https://github.com/openclaw/openclaw/issues/196208) [Bug]: status --all logs Codex registration failure because runtime config is not prepared (2026.11.1)
- [#163069](https://github.com/openclaw/openclaw/issues/163069) Session controller: decide heartbeat skips in mailbox admission
- [#163064](https://github.com/openclaw/openclaw/issues/163064) Session controller: steer through one controller-owned injection path
- [#163060](https://github.com/openclaw/openclaw/issues/163060) Session controller: queue messages refused as question answers instead of consuming them
- [#160744](https://github.com/openclaw/openclaw/issues/160744) Session controller: replace stuck-session recovery with a controller watchdog
- [#160740](https://github.com/openclaw/openclaw/issues/160740) Session controller: move follow-up queueing and steering into the controller
- [#194809](https://github.com/openclaw/openclaw/issues/194809) [Bug]: OpenCode api_key_expired recovery says sign in again despite explicit key-replacement instruction
- [#163067](https://github.com/openclaw/openclaw/issues/163067) Session controller: route the remaining direct run cancellations through the controller
- [#163059](https://github.com/openclaw/openclaw/issues/163059) Session controller: run main-session restart recovery as a controller turn
- [#160741](https://github.com/openclaw/openclaw/issues/160741) Session controller: route Gateway chat.send and agent RPC turns through the controller
- [#178811](https://github.com/openclaw/openclaw/issues/178811) [Feature]: Run scheduled automations as children of the conversation that creates them (tracking)
- [#178814](https://github.com/openclaw/openclaw/issues/178814) [Bug]: sessionTarget "current" runs in a detached cron session since #98236
- [#178813](https://github.com/openclaw/openclaw/issues/178813) [Bug]: Scheduled agent turns get different owner-only tools on embedded and CLI runtimes
- [#178812](https://github.com/openclaw/openclaw/issues/178812) [Feature]: Resolve scheduled-run authority into one per-occurrence execution context
- [#193879](https://github.com/openclaw/openclaw/issues/193879) [Bug]: macOS node worker rescans Claude session folders every second after the Claude sessions list is shown once
- [#196066](https://github.com/openclaw/openclaw/issues/196066) [Bug]: Upgrade to 2026.11.2 blocked: doctor --fix refuses cold transcripts whose session keys use a renamed agent's old id, and no gateway can restore them
- [#196076](https://github.com/openclaw/openclaw/issues/196076) exec under service-child group anchor reaps setsid-detached descendants at turn end (claude-cli runtime, macOS)
- [#196056](https://github.com/openclaw/openclaw/issues/196056) [Bug]: npm update on 2026.11.1 fails when SQLite backup probe times out
- [#196013](https://github.com/openclaw/openclaw/issues/196013) Gateway hang: main thread blocked on worker MessagePort close rwlock (SiblingGroup::Disentangle), RSS low, no GC — possibly distinct from #150955
- [#195887](https://github.com/openclaw/openclaw/issues/195887) [Bug]: Legacy claude-cli automations are refused for a missing inference account after upgrading to 2026.11.2, but Doctor, lint and the startup check never flag them
- [#195814](https://github.com/openclaw/openclaw/issues/195814) [Bug]: Matrix: still images sent by the bot are labelled "GIF" in Element Web (no `is_animated` flag on m.image)
- [#196406](https://github.com/openclaw/openclaw/issues/196406) iOS: new chat is created as a child of the currently open session (nests in sidebar)
- [#196075](https://github.com/openclaw/openclaw/issues/196075) [Bug]: Feishu attachment downloads truncate quoted filenames containing semicolons
- [#195013](https://github.com/openclaw/openclaw/issues/195013) [Bug]: Knowledge counts inert image-alt wikilinks as navigation edges
- [#195060](https://github.com/openclaw/openclaw/issues/195060) [Bug]: Knowledge records returns a continuation offset rejected by its own input schema
- [#194859](https://github.com/openclaw/openclaw/issues/194859) [Bug]: Control UI chat returns 404 for unknown query parameters, breaking an iPhone Home Screen shortcut
- [#196328](https://github.com/openclaw/openclaw/issues/196328) [Bug]: `automations` tool result rejected by its own outputSchema during cron failure-repair turns (2026.11.1); not reproducible from a normal turn
- [#196303](https://github.com/openclaw/openclaw/issues/196303) [Feature]: Keep the Discord progress draft when a plugin's reply hook only touches media
- [#196257](https://github.com/openclaw/openclaw/issues/196257) Consolidate media-understanding provider metadata declarations
- [#196289](https://github.com/openclaw/openclaw/issues/196289) [Bug]: Windows: Gateway runtime worker (infra/sqlite-readonly-location.worker) opens a visible console window that stays open
- [#196274](https://github.com/openclaw/openclaw/issues/196274) [Bug]: Codex turns constantly post canned "The tool run finished, but no final summary was produced" because settled-turn finalization always fails on Codex
- [#189070](https://github.com/openclaw/openclaw/issues/189070) [Bug]: Android realtime Talk claims task completion after agent-consult runs are cancelled
- [#196235](https://github.com/openclaw/openclaw/issues/196235) Channel manager restarts a channel after stop timeout during gateway shutdown drain
- [#196132](https://github.com/openclaw/openclaw/issues/196132) [Bug]: memory-index session export exhausts its 512 MB worker, and can abort the Gateway, once a session holds about 140 MB of message text
- [#196220](https://github.com/openclaw/openclaw/issues/196220) [Bug]: agent exec rejects a valid xAI OAuth profile ("Explicit auth order for xai has no usable profiles") while Gateway turns on the same profile work
- [#193840](https://github.com/openclaw/openclaw/issues/193840) [Bug]: Config snapshot reads run a sync filesystem case probe for every agent
- [#194781](https://github.com/openclaw/openclaw/issues/194781) [Bug]: Android keeps reconnecting to an abandoned Gateway address after a failed first connection
- [#193858](https://github.com/openclaw/openclaw/issues/193858) [Bug]: Every SQLite connection open on macOS forks `mount` synchronously, even for local APFS state
- [#194453](https://github.com/openclaw/openclaw/issues/194453) [Bug]: Plugin hooks on CLI-backed turns (claude-cli) get no memory audience
- [#196163](https://github.com/openclaw/openclaw/issues/196163) Matrix: a reply over 4000 characters with a code block arrives split into broken blocks
- [#196150](https://github.com/openclaw/openclaw/issues/196150) [Bug]: Control UI file search skips the first match when Enter confirms IME input in Safari
- [#196143](https://github.com/openclaw/openclaw/issues/196143) `## Delegation` is not rendered when `sessions_spawn` is deferred by Tool Search
- [#196137](https://github.com/openclaw/openclaw/issues/196137) [Bug]: Workboard lifecycle sync fails every minute with "Session row preparation capacity reached" when the agent has more than 8192 session rows (2026.11.1)
- [#196053](https://github.com/openclaw/openclaw/issues/196053) Update failure: gateway-stop-unverified (2026.10.9)
- [#196012](https://github.com/openclaw/openclaw/issues/196012) [Bug]: backup create fails on Windows - SQLite header probe exceeds the 10 s spawnSync budget on a large state tree
- [#195990](https://github.com/openclaw/openclaw/issues/195990) [Android] WearRealtimeTalkController: blank transcript update wipes existing Wear realtime transcript
- [#195988](https://github.com/openclaw/openclaw/issues/195988) [Android] ShellScreen: opening Gateway settings from Overview or command palette leaves shell on Chat tab
- [#195967](https://github.com/openclaw/openclaw/issues/195967) [Bug] Control UI webchat: final assistant reply disappears and is not persisted when the agent runs on the Claude CLI runtime
- [#195951](https://github.com/openclaw/openclaw/issues/195951) [Bug]: Native Codex subagents of a restricted (cron) parent see no MCP tools but inherit instructions advertising them (2026.10.10)
- [#195952](https://github.com/openclaw/openclaw/issues/195952) [Bug]: Native Codex requester: each subagent completion becomes a duplicate visible reply after the parent consumed it (2026.10.10)
- [#195720](https://github.com/openclaw/openclaw/issues/195720) Telegram: a reply that mentions a start tag like `<b>` in prose is sent with an unclosed tag, loses its formatting and drops the tag text
- [#195875](https://github.com/openclaw/openclaw/issues/195875) Consolidate DeepInfra video job completion policy
- [#193862](https://github.com/openclaw/openclaw/issues/193862) [Bug]: Native chat rebuilds every reply's source cards each time a transcript message arrives
- [#195868](https://github.com/openclaw/openclaw/issues/195868) [Bug]: Voice (Talk/realtime) speech recognition cannot be pinned to a language: no `language` option is read, Vietnamese gets transcribed as Chinese/Cyrillic
- [#195818](https://github.com/openclaw/openclaw/issues/195818) [Bug]: Automation pause notice splits an emoji in a long configured name, garbling the delivered notice

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 262,131 · **Open issues:** 53,963 · **Last push:** <1h ago

On November 9, 2026, Hermes Agent released version v0.23.1, a patch that consolidates approximately 618 merged pull requests since v0.23.0, ensuring stability across various platforms including the CLI, Microsoft Store app, Docker, and Hermes Cloud. Although there were no merged pull requests in the last 24 hours, multiple new issues emerged, with one notable bug (#152406) preventing newly released models like `MiniMax-M3.1-Flash` from appearing in the model picker and causing confusion with vendor errors. Other significant issues include bug reports related to the desktop application, such as incorrect connection statuses (#152216) and failures in building for aarch64-darwin (#152284). This maintenance day highlights the ongoing challenges users face, particularly with model visibility and application behavior.

#### 🚀 New Releases
- [v0.23.1](https://github.com/nousresearch/hermes-agent/releases/tag/v0.23.1) Hermes Agent v0.23.1

#### 🐛 New Issues
- [#152406](https://github.com/NousResearch/hermes-agent/issues/152406) [bug] MiniMax: newly released models (e.g. `MiniMax-M3.1-Flash`) never appear in the model picker; manually-entered near-miss IDs fail with opaque vendor 400 💬1
- [#152216](https://github.com/NousResearch/hermes-agent/issues/152216) MCP `_connected_summary` reports adopted shared connections as `failed: <name> (not attempted (in retry cooldown))` 💬1
- [#152284](https://github.com/NousResearch/hermes-agent/issues/152284) [Bug]: aarch64-darwin cannot build — pnpm-deps-hash mismatch 💬1
- [#152228](https://github.com/NousResearch/hermes-agent/issues/152228) Desktop keeps booting the old remote after promoting This device (stale v1 connection.json route) 💬1
- [#152380](https://github.com/NousResearch/hermes-agent/issues/152380) Tracker: open PRs from the Telegram/gateway bug sweep (review batch)
- [#152083](https://github.com/NousResearch/hermes-agent/issues/152083) [Bug]: [Webapp][Android] Bottom status bar overlaps Samsung gesture navigation in installed Webapp `type/bug` `P2` `comp/dashboard`
- [#152072](https://github.com/NousResearch/hermes-agent/issues/152072) Desktop can't open a Bot Chat held by an `api_server` row: `session.list title="Bot Chat"` raises `not_found` until a delivery moves the row aside `type/bug` `comp/gateway` `P2` `area/sessions`
- [#152313](https://github.com/NousResearch/hermes-agent/issues/152313) [Bug]: Claude DirectSDK retries have "extra_headers" in request `bug`
- [#152307](https://github.com/NousResearch/hermes-agent/issues/152307) [Bug]: Desktop: a clarify card answered in a profile window on a global remote returns "expired" and the answer is lost
- [#152344](https://github.com/NousResearch/hermes-agent/issues/152344) Desktop: `/new` in a remote gateway's Bot Chat opens a new session on the local device instead of compacting on the remote
- [#152302](https://github.com/NousResearch/hermes-agent/issues/152302) [Bug]: WebUI stores a value as text instead of a number in the config.yaml `bug`
- [#152102](https://github.com/NousResearch/hermes-agent/issues/152102) Kanban Webapp can't move a card to Done — 'no result or summary evidence' with no way to supply it `type/bug` `comp/cron` `tool/browser` `P2`
- [#152221](https://github.com/NousResearch/hermes-agent/issues/152221) [Bug]: Desktop: a profile's remote override (standalone hermes serve) flips the local session wire to legacy, breaking image paste
- [#152247](https://github.com/NousResearch/hermes-agent/issues/152247) Plugins Hermes can't read are skipped silently: `hermes plugins list` and Desktop drop them
- [#152270](https://github.com/NousResearch/hermes-agent/issues/152270) [Bug]: `hermes usage --provider anthropic` stays on 401 on an idle profile: the read-only resolver never renews an expired OAuth token

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 96,638 · **Open issues:** 10,128 · **Last push:** <1h ago

On November 10, 2026, there were no new releases for vLLM; however, several significant merged pull requests included enhancements to support Qwen2.5-Omni normalization and the integration of online FP8 routed experts for the Muse Spark model on Hopper. Noteworthy bug fixes addressed issues related to embedding retention during rendered placeholder round-tripping and improved shared expert output handling in FP16 for certain models. Additionally, a critical new issue emerged regarding the performance optimization of DeepSeek-V4.1-Flash on graphics hardware, highlighting ongoing challenges in ensuring efficiency across different platforms. Other bugs related to token caches and KV cache disclosure were also raised, indicating areas needing attention in the ongoing development process.

#### ✅ Merged PRs
- [#66690](https://github.com/vllm-project/vllm/pull/66690) [MM] Support mm_device_do_normalize for Qwen2.5-Omni
- [#54548](https://github.com/vllm-project/vllm/pull/54548) [Bugfix][Frontend] Keep is_embed when round-tripping rendered placeholders
- [#65842](https://github.com/vllm-project/vllm/pull/65842) [Bugfix][MoE] Only divide shared expert output in FP16 for models that compensate
- [#66139](https://github.com/vllm-project/vllm/pull/66139) [Model][Quantization] Muse Spark: online FP8 routed experts (fp8_per_channel) on Hopper
- [#61725](https://github.com/vllm-project/vllm/pull/61725) [Core] Add max_async_kv_loads_per_step to cap new async KV loads per step
- [#66306](https://github.com/vllm-project/vllm/pull/66306) [CI][ROCm] Run EP Weight Filter with EPLB on MI355
- [#66309](https://github.com/vllm-project/vllm/pull/66309) [ROCm][CI] Run XPress on MI355 with a GEMM latent MLP and mirror its nightly
- [#66532](https://github.com/vllm-project/vllm/pull/66532) [Model] Kimi K3.1: NVIDIA specialized decode and AMD model updates, ROCm TP8 support (Kimi K3.1 split 4/6)
- [#64403](https://github.com/vllm-project/vllm/pull/64403) [Bugfix][ROCm] Avoid unused index caches in MiniMax-M3 sharing layers
- [#64001](https://github.com/vllm-project/vllm/pull/64001) [ROCm][DSv4.1] Avoid runtime JIT for offset combine_topk_swa_indices inputs
- [#65996](https://github.com/vllm-project/vllm/pull/65996) [Bugfix][MRV2] Build multimodal prefix-LM attention ranges on every PP stage
- [#63432](https://github.com/vllm-project/vllm/pull/63432) [Bugfix][Spec Decode] Keep nested-config and YaRN drafts within their rotary cache
- [#65983](https://github.com/vllm-project/vllm/pull/65983) [Bugfix][Model] Build the tied embedding on the last PP rank for ERNIE 4.5 MoE and Falcon-H1
- [#64715](https://github.com/vllm-project/vllm/pull/64715) [ROCm][UMBP] Support UMBP standalone mode for DeepSeek-V4.1-Flash
- [#66291](https://github.com/vllm-project/vllm/pull/66291) [CI][Test] Add pipeline-parallel equivalence tests for text models
- [#66500](https://github.com/vllm-project/vllm/pull/66500) [ROCm][DSv4.1] Look up only local Engram hashes for peer-read tables
- [#60609](https://github.com/vllm-project/vllm/pull/60609) [XPU] Bump up kernel 0.1.17, change MoE and MLA interfaces
- [#65896](https://github.com/vllm-project/vllm/pull/65896) [Perf][PP] Copy-engine PP transport, on by default where supported (NVLink only)
- [#66207](https://github.com/vllm-project/vllm/pull/66207) [CI] Fix B200 nightly gsm8k evals: ReplaySSM and DeepEP LL
- [#66669](https://github.com/vllm-project/vllm/pull/66669) [Build][MiniMax-M3] Bump fmha_sm100 to 1443786
- [#65272](https://github.com/vllm-project/vllm/pull/65272) [Quantization] Support ModelOpt INT8_PB_WO (per-block INT8 weight-only) linear layers
- [#66480](https://github.com/vllm-project/vllm/pull/66480) [CI] Move the MoRIIO unit tests into their own folder and shard the step
- [#66479](https://github.com/vllm-project/vllm/pull/66479) [CI] Enroll 4 steps in automatic sharding
- [#65818](https://github.com/vllm-project/vllm/pull/65818) [Bugfix] Fix Granite 4.1 Vision deepstack handoff between pipeline stages
- [#63330](https://github.com/vllm-project/vllm/pull/63330) [XPU][Model] Gemma4: route MoE with topk_softmax on XPU
- [#61630](https://github.com/vllm-project/vllm/pull/61630) [XPU][Attention] Enable tuned large-head prefill config on XPU
- [#66321](https://github.com/vllm-project/vllm/pull/66321) [ROCm][CI] Support prefill context parallel for GLM-5.2 sparse MLA and mirror LM Eval PCP
- [#66512](https://github.com/vllm-project/vllm/pull/66512) [Perf][Qwen4Exp] Faster QSA kernel for large fp8 batches on Blackwell
- [#65888](https://github.com/vllm-project/vllm/pull/65888) [HiSparse] Alternative to #55398: promote P/D imports into GPU pages without NIXL changes
- [#65744](https://github.com/vllm-project/vllm/pull/65744) [Bugfix][Frontend] Normalize Chat Completions tools and tool_choice validation
- [#64897](https://github.com/vllm-project/vllm/pull/64897) [Bugfix][Spec Decode][XPU] greedy_argmax: treat NaN as -inf on the torch fallback
- [#60390](https://github.com/vllm-project/vllm/pull/60390) [Model][Core] Share the CPU-offloaded Qwen4Exp PLE table across co-located DP replicas
- [#66312](https://github.com/vllm-project/vllm/pull/66312) [CI][ROCm] Add an AMD mirror for the DeepGEMM kernels step with AITER block-FP8 tests
- [#66319](https://github.com/vllm-project/vllm/pull/66319) [ROCm][Mamba] Support Mamba cache stochastic rounding on gfx950
- [#61666](https://github.com/vllm-project/vllm/pull/61666) [Quantization] Support compressed-tensors MXFP6 (mxfp6-pack-quantized)
- [#65972](https://github.com/vllm-project/vllm/pull/65972) [Perf][MoE] Skip DP padding rows in TRT-LLM monolithic MoE with vLLM's top-k
- [#65576](https://github.com/vllm-project/vllm/pull/65576) [docker] Install AWS EFA in the main image; build DeepEP-EFA separately
- [#58094](https://github.com/vllm-project/vllm/pull/58094) [Bugfix][Spec Decode] Propagate rope hf_overrides to MTP draft
- [#66081](https://github.com/vllm-project/vllm/pull/66081) [Bugfix][Spec Decode] Fix non-deferred structured-output draft retrieval
- [#64834](https://github.com/vllm-project/vllm/pull/64834) [CI][XPU] Use supported block sizes in UCX backend tests
- [#66616](https://github.com/vllm-project/vllm/pull/66616) [CI] Fit the GLM-5.2 TP1-PCP4 eval's KV cache on B200
- [#60531](https://github.com/vllm-project/vllm/pull/60531) [Bugfix][Kernel] Preserve batch invariance in Triton unified attention on SM100
- [#65203](https://github.com/vllm-project/vllm/pull/65203) [Attention] Sync FA with upstream (54b044c8)
- [#66400](https://github.com/vllm-project/vllm/pull/66400) [ROCm][Bugfix] Drop sparse MLA metadata host sync; use persistent AITER for gfx950 long BF16 prefills
- [#59981](https://github.com/vllm-project/vllm/pull/59981) [Perf] V2 runner decode optimizations for NVIDIA Confidential Computing
- [#66546](https://github.com/vllm-project/vllm/pull/66546) [Transformers backend] Support EAGLE3 aux hidden states with pipeline parallelism and layer 0

#### 🐛 New Issues
- [#66587](https://github.com/vllm-project/vllm/issues/66587) [ROCm][AMD] DeepSeek-V4.1-Flash gfx950 / MI355X Performance Optimization (vLLM) `rocm` `deepseek` 💬3
- [#66525](https://github.com/vllm-project/vllm/issues/66525) [Bug]: Gemma4 suppression-token cache causes UnexpectedTracerError on TPU `bug` `tpu` 💬3
- [#66493](https://github.com/vllm-project/vllm/issues/66493) [Bug]: Boolean env vars are parsed six different ways - "true" either crashes or is silently ignored `bug` 💬3
- [#66698](https://github.com/vllm-project/vllm/issues/66698) [Bug]: `vllm bench serve --num-warmups` primes the prefix cache, so the first measured request is a cache hit `kv-cache-manager` 💬2
- [#66507](https://github.com/vllm-project/vllm/issues/66507) [Bug]: Streaming /v1/responses always emits empty logprobs=[] in response.output_text.done event 💬2
- [#66696](https://github.com/vllm-project/vllm/issues/66696) [Bug][KV Offload] A request with more unstored chunks than the CPU tier is never offloaded ("cannot store chunks" on every step) 💬1
- [#66650](https://github.com/vllm-project/vllm/issues/66650) [RFC]: Classify GPU faults in fault-tolerance status and mark sticky CUDA errors dead 💬1
- [#66700](https://github.com/vllm-project/vllm/issues/66700) [Bug]: In-process engine: requests aborted by a sleep or pause never finish, so `LLMEngine` stays busy forever 💬1
- [#66573](https://github.com/vllm-project/vllm/issues/66573) [Bug]: Qwen3.5 `qwen3_5.py` embedding does not receive `quant_config` (no dense fallback observed locally) `quantization` 💬1
- [#66699](https://github.com/vllm-project/vllm/issues/66699) [ROCm Product Quality Control]: Weekly Kimi Vendor Verifier (KVV) accuracy regression testing on AMD `feature request` `rocm` `kimi` 💬1
- [#66627](https://github.com/vllm-project/vllm/issues/66627) [Bug]: Cross-Tenant KV Cache Disclosure in vLLM MoRIIO WRITE Mode `bug` 💬1
- [#66629](https://github.com/vllm-project/vllm/issues/66629) [Bug]: Cross-Request Prompt Leakage in vLLM Suffix Speculative Decoding `bug` `speculative-decoding` 💬1
- [#66610](https://github.com/vllm-project/vllm/issues/66610) [Bug]: /detokenize returns 200 and silently drops out-of-vocabulary token IDs `bug` 💬1
- [#66588](https://github.com/vllm-project/vllm/issues/66588) [ROCm][AMD] MiniMax-M3 gfx950 / MI355X Performance Optimization (vLLM) `rocm` `minimax` 💬1
- [#66491](https://github.com/vllm-project/vllm/issues/66491) [RFC]: Packed-weight INT4 GEMM (W4A16 / W4A8) for RDNA4 (gfx1200/gfx1201) `rocm` `RFC` `quantization` 💬1
- [#66713](https://github.com/vllm-project/vllm/issues/66713) [EFA Product Quality Control]: Nightly multi-node E2E functionality, accuracy & performance testing for EFA NIXL and EFA Mooncake Store, EFA DeepEP `feature request` `kv-connector`
- [#66648](https://github.com/vllm-project/vllm/issues/66648) [Bug]: Grafana example latency panels scale with request rate
- [#66590](https://github.com/vllm-project/vllm/issues/66590) [Performance]: On H100, the default FP8 KV cache path (FA3, FP8 query) is ~11% slower than FlashInfer and its outputs vary from run to run `quantization`
- [#66570](https://github.com/vllm-project/vllm/issues/66570) [RFC]: Async CPU tier setup for OffloadingConnector `RFC`
- [#66557](https://github.com/vllm-project/vllm/issues/66557) [Performance]: Adaptive verification's varlen decode graphs lose Triton split-KV at small batches
- [#66556](https://github.com/vllm-project/vllm/issues/66556) [RFC]: Define an Optional In-Tree Integration Path for Hardware Backends `RFC`
- [#66538](https://github.com/vllm-project/vllm/issues/66538) [Feature]: Configurable request-header labels for Prometheus per-request metrics `feature request`
- [#66524](https://github.com/vllm-project/vllm/issues/66524) [Bug]: Kimi K3.1 low-latency decode with DSpark cannot start at TP8 on GPUs with fewer than 152 SMs (hardcoded grid for grouped batches 9-64) `kimi`
- [#66515](https://github.com/vllm-project/vllm/issues/66515) enable_gqa=True can be 2.59x slower than materializing the KV cache - silent MATH-backend fallback at decode `performance`

#### 🔒 Closed Issues
- [#45861](https://github.com/vllm-project/vllm/issues/45861) [Feature]: Performance Optimization for Deepseek V4
- [#66141](https://github.com/vllm-project/vllm/issues/66141) [Bug][ROCm]: ROCM_AITER_MLA can select an aiter MLA decode kernel that silently returns uncorrelated output (gqa_ratio=16, fp8 Q+KV, decode_qlen 3-4, non-persistent)
- [#48285](https://github.com/vllm-project/vllm/issues/48285) TRITON_MLA_SPARSE fallback crashes on SM80 during CUDA graph capture
- [#59818](https://github.com/vllm-project/vllm/issues/59818) [ROCm]: run-to-run GSM8K accuracy variance for simple-nemotron-h-8b in KV-Offload test on MI300
- [#58080](https://github.com/vllm-project/vllm/issues/58080) [Bug] MTP draft model does not inherit --hf-overrides (YaRN): length gate + dummy-0 drafts silently kill speculative acceptance beyond the draft's max_model_len
- [#65533](https://github.com/vllm-project/vllm/issues/65533) [Bug]: GLM-4.7-AWQ on Blackwell (sm_120) produces degenerate/looping output on v0.25.1 but correct on v0.14.0 — regression in compiled AWQ-MoE kernels
- [#66024](https://github.com/vllm-project/vllm/issues/66024) [CI Failure]: Entrypoints Integration - test_derender_parity.py::test_inline_derender_parity[n2]
- [#48319](https://github.com/vllm-project/vllm/issues/48319) [Bug]: Responses API: explicit "background": null or "truncation": null fails response construction (confusing 400 / broken SSE stream)
- [#48332](https://github.com/vllm-project/vllm/issues/48332) [Bugfix] Dynamic video sampling should reject invalid video metadata before decoding
- [#64436](https://github.com/vllm-project/vllm/issues/64436) [Bug]: Gemma4 MoE cannot load PEFT expert LoRA adapters without --enable-mixed-moe-lora-format
- [#66402](https://github.com/vllm-project/vllm/issues/66402) [Bug]: prompt_text is null when return_prompt_text is used with reused kv_transfer_params.prompt_token_ids
- [#66362](https://github.com/vllm-project/vllm/issues/66362) [Bug][XPU]: Expert weights transposed twice with vllm_xpu_kernels 0.1.17
- [#65405](https://github.com/vllm-project/vllm/issues/65405) [Bug]: MoE w2_bias is added tp_size times under tensor parallelism
- [#55855](https://github.com/vllm-project/vllm/issues/55855) [Feature]: Add RDMA-capable NIXL OBJ support for KV offload secondary tier
- [#66288](https://github.com/vllm-project/vllm/issues/66288) [Bug]: Qwen3.5 RMSNorm JIT-compiles FlashInfer kernels on sm75 (T4)
- [#64038](https://github.com/vllm-project/vllm/issues/64038) [Bug]: `/v1/chat/completions/derender` usage omits `reasoning_tokens` and `cached_tokens` that `/v1/chat/completions` reports
- [#65945](https://github.com/vllm-project/vllm/issues/65945) [Bug]: GPT-J silently ignores FP8 KV-cache scales from compressed-tensors (LLM Compressor) checkpoints

### SGLang (`sgl-project/sglang`)

**Stars:** 38,631 · **Open issues:** 6,513 · **Last push:** <1h ago

On November 10, 2026, SGLang did not release any new versions, but several notable changes were merged, including a performance enhancement for AMD graphics with the addition of a segmented split-K bf16 matmul for gfx950 in PR #45599, and a fix for illegal memory access in the W4A16/W8A16 Triton MoE kernel (PR #48556). Additionally, the handling of Memory Access in the scheduler was improved with a fix in PR #49386, which aims to enhance the recording of completion events. A significant new issue reported is the Use-After-Free vulnerability in the UnifiedRadixCache that exposes tenant KV data (issue #49361), drawing attention to potential security concerns within the project.

#### ✅ Merged PRs
- [#45599](https://github.com/sgl-project/sglang/pull/45599) [Perf] [AMD] batch-invariant: Segmented split-K bf16 matmul for gfx950
- [#46052](https://github.com/sgl-project/sglang/pull/46052) [Doc] cookbook: Fix the dead MiniMax-H3 "Learn more" anchors
- [#49422](https://github.com/sgl-project/sglang/pull/49422) [Feat] dsa: Run prims_ts on SM107 with the FlashInfer Prims-TS overlay from main
- [#48556](https://github.com/sgl-project/sglang/pull/48556) [Fix] moe: Fix illegal memory access in the W4A16/W8A16 Triton MoE kernel (unmasked K tail)
- [#49225](https://github.com/sgl-project/sglang/pull/49225) [Fix] diffusion: Use K/V gather when auto SP cannot split the DiT's heads (Z-Image on 4 GPUs)
- [#48860](https://github.com/sgl-project/sglang/pull/48860) [Fix] cuda_graph: Retain capture inputs for full graph replay
- [#49224](https://github.com/sgl-project/sglang/pull/49224) [Fix] diffusion: Let FLUX.3 Image start with --num-gpus alone
- [#49346](https://github.com/sgl-project/sglang/pull/49346) [Test] gemma4: Cover the multimem.ld_reduce rounding in the AR fusion residual check
- [#48605](https://github.com/sgl-project/sglang/pull/48605) [Perf] moe/paged-experts: decide block-wide and skip empty page-ins
- [#49235](https://github.com/sgl-project/sglang/pull/49235) [Test] comfyui: Attach loaded plugin modules to their parents so mock.patch works on Python 3.10
- [#47620](https://github.com/sgl-project/sglang/pull/47620) [Fix] hicache: vote the prefetch timeout once per tick, not per admission poll
- [#48956](https://github.com/sgl-project/sglang/pull/48956) [Chore] CODEOWNERS: Update score, decisions, and embeddings API owners
- [#48613](https://github.com/sgl-project/sglang/pull/48613) [Perf] kda: Run the fused CuTe DSpARK verify kernel on a BF16 SSM state
- [#48616](https://github.com/sgl-project/sglang/pull/48616) [Fix] gemm: Order the CuTe DSL kernels' TMEM release after the epilogue's tcgen05.ld
- [#49000](https://github.com/sgl-project/sglang/pull/49000) [Fix] [NPU] dsv4: Use explicit compressor state on Ascend 950
- [#49374](https://github.com/sgl-project/sglang/pull/49374) [Perf] R3: [sglang-miles] Keep routed-expert caches only on the output rank (cherry-pick #47552, #47553)
- [#45859](https://github.com/sgl-project/sglang/pull/45859) [Feat] rust/grpc: Report orchestrator launch facts in api.v1 discovery
- [#49411](https://github.com/sgl-project/sglang/pull/49411) [Feat] kernels: Kimi-K3.1 kernel changes split out of #48414
- [#47943](https://github.com/sgl-project/sglang/pull/47943) [Fix] ZeroMQ: make blocking send wait for queue space
- [#48126](https://github.com/sgl-project/sglang/pull/48126) [Feat] [NPU] attention: Support Modelslim GQA mxfp8 kvcache for 950 NPU
- [#46213](https://github.com/sgl-project/sglang/pull/46213) [Perf] flashinfer-megamoe: Add an optional decode workspace
- [#49386](https://github.com/sgl-project/sglang/pull/49386) [Fix] scheduler: Record every PP result completion event after the local forward
- [#44176](https://github.com/sgl-project/sglang/pull/44176) [Fix] dsa: Route mixed-chunk batches to the RAGGED top-k transform for bf16-only sparse prefill
- [#47585](https://github.com/sgl-project/sglang/pull/47585) [Fix] [AMD] quark: Widen the Quark MXFP4 W4A16 MoE gate to consumer RDNA and fail clearly without aiter
- [#49364](https://github.com/sgl-project/sglang/pull/49364) [Chore] docker: Drop the DeepGEMM and FlashMLA build steps from the K3.1 image
- [#49390](https://github.com/sgl-project/sglang/pull/49390) [Refactor] kimi-k3.1: Run FlashMLA from the sgl-flash-mla wheel and drop sgl-kernel's FlashMLA build
- [#49401](https://github.com/sgl-project/sglang/pull/49401) [Doc] cookbook: Move Rubin hardware row above AMD
- [#49398](https://github.com/sgl-project/sglang/pull/49398) [CI] whl-release: Prefix sgl-project/whl release tags with the package name
- [#47808](https://github.com/sgl-project/sglang/pull/47808) cherry-pick #47810 [Feat] deepseek-recipe: [sglang-miles] Expose convert and encode_conversation on DeepSeekRecipe
- [#49399](https://github.com/sgl-project/sglang/pull/49399) [Fix] ernie55: Import FlashMLA from the sgl-flash-mla wheel
- [#47529](https://github.com/sgl-project/sglang/pull/47529) [Fix] RL: Fix crash when returning routed experts under DCP or KV sharding
- [#49394](https://github.com/sgl-project/sglang/pull/49394) [CI] chore: add CI permissions for aaronlinear
- [#49262](https://github.com/sgl-project/sglang/pull/49262) [Perf] [NVIDIA] dsv41: Write the MegaMoE input from the fused decode mHC post
- [#37472](https://github.com/sgl-project/sglang/pull/37472) [Fix] dspark: Keep verify bookkeeping in range for rows without candidates
- [#49388](https://github.com/sgl-project/sglang/pull/49388) [Fix] [NVIDIA] mega_moe: Accept MXFP4 activations at DeepSeek-V4.1-Flash's 2304 intermediate size
- [#40962](https://github.com/sgl-project/sglang/pull/40962) [Fix] speculative: build target graphs outside draft contexts
- [#42790](https://github.com/sgl-project/sglang/pull/42790) [Feat] mamba: Allow skipping per-draft intermediate SSM state
- [#49362](https://github.com/sgl-project/sglang/pull/49362) [Chore] deps: Bump sgl-flash-mla to 1.0.4
- [#49350](https://github.com/sgl-project/sglang/pull/49350) [Fix] test: Drop the removed SGLANG_HICACHE_TMA_TRANSFER from the page-unified HiCache TMA test
- [#49253](https://github.com/sgl-project/sglang/pull/49253) [Fix] scheduler: Retract every KV holder on pause and order a few releases behind in-flight steps
- [#33059](https://github.com/sgl-project/sglang/pull/33059) [Fix] [AMD] dsa: Align Aiter paged rows with DP-attention metadata
- [#47750](https://github.com/sgl-project/sglang/pull/47750) [Fix] score: Validate logical item and MIS hidden-state row counts
- [#48418](https://github.com/sgl-project/sglang/pull/48418) [Fix] diffusion: Count reclaimable page cache as available inside a cgroup cap
- [#49205](https://github.com/sgl-project/sglang/pull/49205) [Feat] [AMD] custom-all-reduce: Add a DPX hierarchical 2shot_push to carv2 on MI450 (gfx1250)
- [#48984](https://github.com/sgl-project/sglang/pull/48984) [Perf] mhc: one-pass DeepGEMM prenorm GEMM; revert the sm107 decode MegaMoE SM reserve

#### 🐛 New Issues
- [#49336](https://github.com/sgl-project/sglang/issues/49336) [Perf] SM90 decode regression v0.5.22 → v0.5.23: +33~45% per-step at concurrency 12 (8K–64K), and `use_deep_select_decode` costs acceptance on Hopper 💬2
- [#49452](https://github.com/sgl-project/sglang/issues/49452) [Feat] kda: run the Kimi-K3 fused FlashInfer decode on a BF16 SSM state (NVIDIA SM100/103) 💬1
- [#49361](https://github.com/sgl-project/sglang/issues/49361) [Bug] Use-After-Free in SGLang UnifiedRadixCache Exposes Tenant KV Data 💬1
- [#49385](https://github.com/sgl-project/sglang/issues/49385) [Bug] dsv4: top-k v2 JIT module fails to build on Vera Rubin (CC 10.7, cu134 image): cluster kernels exceed 48 KB of static shared memory 💬1
- [#49327](https://github.com/sgl-project/sglang/issues/49327) [ROCm][AMD] DeepSeek-V4.1-Flash gfx950 / MI355X Performance Optimization (SGLang) 💬1
- [#49454](https://github.com/sgl-project/sglang/issues/49454) [Feat] kda: run the Kimi-K3 fused FlashInfer decode on a BF16 SSM state (NVIDIA SM100/103)
- [#49449](https://github.com/sgl-project/sglang/issues/49449) [EFA Product Quality Control]: Nightly multi-node E2E functionality, accuracy & performance testing for EFA NIXL and EFA Mooncake Store, EFA DeepEP
- [#49441](https://github.com/sgl-project/sglang/issues/49441) [ROCm Product Quality Control]: Weekly Kimi Vendor Verifier (KVV) accuracy regression testing on AMD
- [#49403](https://github.com/sgl-project/sglang/issues/49403) [Bug] EAGLE/EAGLE3 verify applies repetition_penalty to only one token per step, so speculative output differs from non-speculative decoding
- [#49395](https://github.com/sgl-project/sglang/issues/49395) [Bug] ModelOpt MIXED_PRECISION: layers with an unsupported quant_algo (FP8_PER_CHANNEL_PER_TOKEN) are built unquantized and load FP8 codes as BF16 values
- [#49378](https://github.com/sgl-project/sglang/issues/49378) [Bug] MiniCPM5, Poolside V1 and Step3 detectors mistype Optional[...] tool arguments
- [#49372](https://github.com/sgl-project/sglang/issues/49372) [Bug] compressed-tensors: a shared expert kept unquantized in `ignore` is still fused into the quantized MoE (Qwen3-Next AWQ fails to load)
- [#49369](https://github.com/sgl-project/sglang/issues/49369) [Bug] GLM-4.7-Flash compressed-tensors W4A16: MLA post-load step reads kv_b_proj.weight, which a packed layer does not have
- [#49368](https://github.com/sgl-project/sglang/issues/49368) [Bug] DeepSeek-V2/V2.5 with per-tensor FP8 scales (compressed-tensors): fusing q_a_proj and kv_a_proj_with_mqa concatenates their [1]-shaped scales
- [#49366](https://github.com/sgl-project/sglang/issues/49366) [Bug] compressed-tensors: block-FP8 checkpoints that list modules as targets fail to load (`weight_block_size` is None)
- [#49340](https://github.com/sgl-project/sglang/issues/49340) [CI] jit-kernel: B200 runs time out on a cold JIT cache after shared-header changes
- [#49334](https://github.com/sgl-project/sglang/issues/49334) [Bug] moe_route_warp crashes on CPU-offloaded correction_bias with --cpu-offload-gb (Tensor match failed ... device=cpu at route_warp.cuh:459)
- [#49324](https://github.com/sgl-project/sglang/issues/49324) [ROCm][AMD] Qwen3.8-27B gfx950 / MI355X Performance Optimization (SGLang)
- [#49314](https://github.com/sgl-project/sglang/issues/49314) [Feature] Support single-worker Replay simulation on Apple Silicon macOS
- [#49296](https://github.com/sgl-project/sglang/issues/49296) [Feature] flashinfer: Split the extend into ragged and paged passes under full prefill CUDA graphs with an FP8 KV cache
- [#49295](https://github.com/sgl-project/sglang/issues/49295) [Bug] Breakable prefill CUDA graphs return wrong, non-repeatable prompt logprobs for short prompts on Qwen3.8-2.4T-A95B-NVFP4 (B300)
- [#49291](https://github.com/sgl-project/sglang/issues/49291) [Bug] [NPU] DeepEP on Ascend A2 aborts mid decode-graph capture with a misleading EH0012 when the MC2 scratch does not fit
- [#49274](https://github.com/sgl-project/sglang/issues/49274) Silent deterministic output corruption: first token id 0 ("!") then [PAD] (id 163839) loop, spec accept-length pinned at 1.00, zero errors — Kimi-K3.1-Pro (hybrid mamba + DFlash2 draft) on AMD MI300X/AITER, fp8 KV, v0.5.23.dev20261104 (e67b2062e2)
- [#49261](https://github.com/sgl-project/sglang/issues/49261) [Bug] Profiling state conflicts return bare HTTP 500 responses
- [#49257](https://github.com/sgl-project/sglang/issues/49257) [Feature][RFC] STANDALONE PD: homogeneous TP=2 handoff and rank-consistent seed rejection
- [#49256](https://github.com/sgl-project/sglang/issues/49256) [Bug] NIXL decode listener exits on malformed STAGING_REQ
- [#49250](https://github.com/sgl-project/sglang/issues/49250) [Bug] ignore_eos requests finish early when their grammar terminates

#### 🔒 Closed Issues
- [#22935](https://github.com/sgl-project/sglang/issues/22935) [Bug] Mamba radix cache can turn fresh prefill prefix hits into 0-hit after split
- [#36224](https://github.com/sgl-project/sglang/issues/36224) [RFC] First-Class, Versioned KV Hint Envelope for SGLang
- [#38769](https://github.com/sgl-project/sglang/issues/38769) Bump bundled NVSHMEM to 3.7.2: 3.4.5 lacks NVSHMEM_IB_GID_INDEX, which restricted IB fabrics require
- [#38788](https://github.com/sgl-project/sglang/issues/38788) [Bug] Scripted-runtime rid reuse loses a race with rid_to_state release, surfacing as a 60s recv timeout (3 tests red in test/manual/chunked_prefill)
- [#38618](https://github.com/sgl-project/sglang/issues/38618) [Bug] GLM-5.3: checkpoints written by transformers load with MoE/mHC/KDA weights silently dropped
- [#38009](https://github.com/sgl-project/sglang/issues/38009) [Bug] [DFlash2] Greedy output diverges from target-only Qwen3.8-27B when thinking is enabled
- [#49173](https://github.com/sgl-project/sglang/issues/49173) [Bug] #48399 drops SM120/SM121 from the DSV4.1 DeepGEMM indexer gates — 8x prefill regression on GB10 (torch fallback calls tolist() per layer)
- [#49452](https://github.com/sgl-project/sglang/issues/49452) [Feat] kda: run the Kimi-K3 fused FlashInfer decode on a BF16 SSM state (NVIDIA SM100/103)
- [#38866](https://github.com/sgl-project/sglang/issues/38866) [HiCache] Track HybridLinear/Mamba pipeline-parallel correctness and support
- [#38899](https://github.com/sgl-project/sglang/issues/38899) [Bug] DSpark compact SPS profiling ignores forced budgets and fails on ragged mRoPE positions
- [#38863](https://github.com/sgl-project/sglang/issues/38863) [Perf] xgrammar backend: rollback() does an O(N) list copy -> O(N^2) grammar bitmask cost under speculative decoding
- [#38856](https://github.com/sgl-project/sglang/issues/38856) [Feature] Batched asynchronous Engram host-row prefetch
- [#38849](https://github.com/sgl-project/sglang/issues/38849) [Bug] GLM 5.3 segfault on MI300 in SGLang scheduler
- [#38817](https://github.com/sgl-project/sglang/issues/38817) [Bug] RuntimeError: Promotion for Float8 Types is not supported, attempted to promote Float8_e4m3fn and BFloat16
- [#38794](https://github.com/sgl-project/sglang/issues/38794) [Feature] Korean Localization for SGLang Cookbook
- [#38627](https://github.com/sgl-project/sglang/issues/38627) [Bug] Chunked prefill splits the encoder region of encoder-decoder models, corrupting `extend_num_tokens` and crashing the scheduler
- [#38768](https://github.com/sgl-project/sglang/issues/38768) [Bug] Qwen3ForSequenceClassification retains random head bias when loading bias-free checkpoints
- [#46572](https://github.com/sgl-project/sglang/issues/46572) [Bug] Inkling: fused attention prologue stores CUDA-graph padding rows into KV slot 0 → NaN logits (`probability tensor contains either inf, nan or element < 0` with `SGLANG_OPT_USE_GUMBEL_SAMPLE=0`)
- [#47490](https://github.com/sgl-project/sglang/issues/47490) [Bug] EAGLE draft extend crashes with negative dimension under DP attention + FlashInfer A2A + prefill CUDA graph
- [#46517](https://github.com/sgl-project/sglang/issues/46517) [Bug] Disconnected OpenAI chat requests can continue decoding after client disconnect
- [#47896](https://github.com/sgl-project/sglang/issues/47896) [Bug] Qwen3.5 GatedDeltaNet: finalize_fused_in_proj builds the fused in_proj weight on CPU under --cpu-offload-gb (mat2 is on cpu)

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 133,863 · **Open issues:** 2,605 · **Last push:** 2h ago

On November 10, 2026, multiple new versions of llama.cpp were released, including b12242, which addressed lazy grammar use when the response_format is set with tools, and b12241, which fixed a critical bug related to 64-bit FastRPC handle truncation. Notable merges included the addition of an OpenAI-compatible audio endpoint in the server and support for the Gemma 4 input audio stream in the mtmd module. A significant new issue raised was the Eval bug for Dspark compatibility with Spark x2.6 architecture, signaling potential challenges for users. Overall, today's updates enhance functionality and address critical bugs, reflecting ongoing improvements in the project.

#### 🚀 New Releases
- [b12242](https://github.com/ggml-org/llama.cpp/releases/tag/b12242) b12242
- [b12241](https://github.com/ggml-org/llama.cpp/releases/tag/b12241) b12241
- [b12240](https://github.com/ggml-org/llama.cpp/releases/tag/b12240) b12240
- [b12239](https://github.com/ggml-org/llama.cpp/releases/tag/b12239) b12239
- [b12238](https://github.com/ggml-org/llama.cpp/releases/tag/b12238) b12238
- [b12237](https://github.com/ggml-org/llama.cpp/releases/tag/b12237) b12237
- [b12236](https://github.com/ggml-org/llama.cpp/releases/tag/b12236) b12236
- [b12233](https://github.com/ggml-org/llama.cpp/releases/tag/b12233) b12233
- [b12230](https://github.com/ggml-org/llama.cpp/releases/tag/b12230) b12230
- [b12229](https://github.com/ggml-org/llama.cpp/releases/tag/b12229) b12229

#### ✅ Merged PRs
- [#31956](https://github.com/ggml-org/llama.cpp/pull/31956) chat : don't use lazy grammar when response_format is set with tools
- [#31935](https://github.com/ggml-org/llama.cpp/pull/31935) opencl : include climits
- [#30952](https://github.com/ggml-org/llama.cpp/pull/30952) hexagon: fix 64-bit FastRPC handle truncation on close
- [#26145](https://github.com/ggml-org/llama.cpp/pull/26145) Responses API: Convert text.format JSON schema into the corresponding Chat Completions response_format
- [#31978](https://github.com/ggml-org/llama.cpp/pull/31978) server : use common_chat_input in realtime api
- [#31763](https://github.com/ggml-org/llama.cpp/pull/31763) server: add oai-compat /v1/audio/speech endpoint
- [#31965](https://github.com/ggml-org/llama.cpp/pull/31965) mtmd: support gemma 4 input audio stream
- [#31964](https://github.com/ggml-org/llama.cpp/pull/31964) mtmd: add mtmd_helper_resampler
- [#31783](https://github.com/ggml-org/llama.cpp/pull/31783) opencl: add f32 MUL_MAT_ID
- [#31952](https://github.com/ggml-org/llama.cpp/pull/31952) ui: retry opening the sidebar when a demo imports its traces
- [#31949](https://github.com/ggml-org/llama.cpp/pull/31949) ui: make the app feel native on phones
- [#31185](https://github.com/ggml-org/llama.cpp/pull/31185) feat: external PLE file loading
- [#26014](https://github.com/ggml-org/llama.cpp/pull/26014) Windows unbuffered model load
- [#31874](https://github.com/ggml-org/llama.cpp/pull/31874) tests: fix CI flake in test_rope by bounding its tolerance by n_ctx
- [#31027](https://github.com/ggml-org/llama.cpp/pull/31027) server : functionality test for new spec dec
- [#31449](https://github.com/ggml-org/llama.cpp/pull/31449) models : Attach Granite NVFP4 weight scales Fixes #31448
- [#31824](https://github.com/ggml-org/llama.cpp/pull/31824) ggml-zdnn: accept non-zDNN tensors, invalidate compute tensors after every operation
- [#28697](https://github.com/ggml-org/llama.cpp/pull/28697) server : fix response_format json_schema when schema is not nested in the json_schema wrapper
- [#30712](https://github.com/ggml-org/llama.cpp/pull/30712) ggml : implement the backward pass for TRI
- [#31940](https://github.com/ggml-org/llama.cpp/pull/31940) tests : keep dummy ffn.act scales away from zero
- [#31927](https://github.com/ggml-org/llama.cpp/pull/31927) mtp: read the target hidden states from a device buffer
- [#31936](https://github.com/ggml-org/llama.cpp/pull/31936) ui: fold, preview and rearrange the sidebar's sections
- [#31419](https://github.com/ggml-org/llama.cpp/pull/31419) ggml-backend: don't upload inputs that are not read
- [#31567](https://github.com/ggml-org/llama.cpp/pull/31567) ci : Run gfx1151 ROCm job on Strix Halo Devlab runners
- [#31662](https://github.com/ggml-org/llama.cpp/pull/31662) metal : guard flash-attn vec output scratch zeroing
- [#30711](https://github.com/ggml-org/llama.cpp/pull/30711) metal : make ggml_tri select instead of scaling by the comparison
- [#31655](https://github.com/ggml-org/llama.cpp/pull/31655) mtmd: Pocket TTS - add generic support for temperature set via API
- [#29413](https://github.com/ggml-org/llama.cpp/pull/29413) RPC: Improve loading times
- [#30802](https://github.com/ggml-org/llama.cpp/pull/30802) ggml : support YaRN truncation config on openvino, sycl, vulkan, webgpu, rpc
- [#31126](https://github.com/ggml-org/llama.cpp/pull/31126) sycl: cache device-id
- [#31905](https://github.com/ggml-org/llama.cpp/pull/31905) ggml-zdnn: fix release binary not detecting backend lib

#### 🐛 New Issues
- [#31951](https://github.com/ggml-org/llama.cpp/issues/31951) Feature Request: backport ik_llama.cpp speed improvements. `enhancement` 💬5
- [#31985](https://github.com/ggml-org/llama.cpp/issues/31985) Eval bug: Dspark not working with spark x2.6 architecture `bug-unconfirmed` 💬2
- [#31953](https://github.com/ggml-org/llama.cpp/issues/31953) Misc. bug: realtime missing Gemma’s audio input `bug-unconfirmed` 💬1
- [#31971](https://github.com/ggml-org/llama.cpp/issues/31971) llama-ui: sidebar intercepts clicks when hidden (regression re-introduced after previous fix) `bug-unconfirmed` 💬1
- [#31963](https://github.com/ggml-org/llama.cpp/issues/31963) Feature Request: Kimi K3.1 vision support `enhancement`
- [#31944](https://github.com/ggml-org/llama.cpp/issues/31944) Feature Request: Add a dedicated "Skills" section like MCP to webUI `enhancement`
- [#31933](https://github.com/ggml-org/llama.cpp/issues/31933) Misc. bug: ggml-hexagon: GGML_HEXAGON_OPPOLL=1 floods logcat on Android (zero-timeout dspqueue_read takes the blocking path) 💬1
- [#31987](https://github.com/ggml-org/llama.cpp/issues/31987) Misc. bug: auto_fgdn hardcoded false so the fused GDN probe never runs `bug-unconfirmed`
- [#31979](https://github.com/ggml-org/llama.cpp/issues/31979) Misc. bug: llama-server should validate Content-Type `bug-unconfirmed`
- [#31974](https://github.com/ggml-org/llama.cpp/issues/31974) server: CUDA VMM-pool OOM during prompt processing aborts the process (ggml_cuda_mul_mat_q → ggml_abort) instead of failing
- [#31972](https://github.com/ggml-org/llama.cpp/issues/31972) Misc. bug: "Reporting a vulnerability" process is broken `bug-unconfirmed`
- [#31960](https://github.com/ggml-org/llama.cpp/issues/31960) Eval bug: OpenCL on Adreno X2 (Windows) generation 7x slower with driver 32.0.181.0, E17 compiler trips the E17 quirks `bug-unconfirmed`
- [#31950](https://github.com/ggml-org/llama.cpp/issues/31950) Misc. bug: server: Muse Spark Open — every grammar fails "Failed to initialize samplers" (generation prompt '<|start|>assistant'); response_format ignored
- [#31947](https://github.com/ggml-org/llama.cpp/issues/31947) Eval bug: unsloth/GLM-5.3-Flash-GGUF:UD-IQ3_XXS says it will load all layers on GPU and crashes with VRAM OOM `bug-unconfirmed`
- [#31943](https://github.com/ggml-org/llama.cpp/issues/31943) --lazy-mode auto resolves to off on iGPUs even with --load-mode mmap; pp512 drops 2.4x (Strix Halo, qwen4exp)
- [#31939](https://github.com/ggml-org/llama.cpp/issues/31939) SIGSEGV in `mtmd_get_memory_usage()` on Android arm64 (Snapdragon build) when an OpenCL buffer type is present
- [#31926](https://github.com/ggml-org/llama.cpp/issues/31926) Misc. bug: GROUP_NORM unit test triggers GGML_ASSERT for Vulkan on Windows Intel GPU `bug-unconfirmed`

#### 🔒 Closed Issues
- [#28211](https://github.com/ggml-org/llama.cpp/issues/28211) Eval bug: HIP/ROCm on gfx1151, wrong logits (not a crash), triggered by prompts longer than n_ubatch.
- [#10732](https://github.com/ggml-org/llama.cpp/issues/10732) Misc. bug: server provides strutured output for response_format: json_object, but not for response_format: json_schema
- [#31561](https://github.com/ggml-org/llama.cpp/issues/31561) Feature Request: Support mtmd_audio_stream for Gemma 4 E2B and E4B
- [#29373](https://github.com/ggml-org/llama.cpp/issues/29373) Compile bug: Vulkan fails with a glslc lacking GL_KHR_cooperative_matrix since #24406 (fa_decode shaders built as coopmat unconditionally)
- [#31189](https://github.com/ggml-org/llama.cpp/issues/31189) Eval bug: qwen4exp assert with merged tensors from #31028
- [#29159](https://github.com/ggml-org/llama.cpp/issues/29159) /v1/responses: reasoning item with "summary": null rejected as "Cannot determine type of 'item'"
- [#29441](https://github.com/ggml-org/llama.cpp/issues/29441) Non-uniform pressure
- [#29410](https://github.com/ggml-org/llama.cpp/issues/29410) Eval bug: RX 7800 XT Vulkan decode and MTP slower on 84e76d8a2 than c77ae695c; #27952 prefill gain not seen
- [#29318](https://github.com/ggml-org/llama.cpp/issues/29318) Feature Request: Show model download size in progress
- [#29322](https://github.com/ggml-org/llama.cpp/issues/29322) Misc. bug: prompt cache (--cache-ram) is dropped on wake from --sleep-idle-seconds, but kept in RAM while sleeping
- [#31342](https://github.com/ggml-org/llama.cpp/issues/31342) Misc. bug: `server: chat completions with tools + tool_choice=auto + response_format=json_object fail with 400 "Failed to initialize samplers: failed to parse grammar" (generated GBNF has an empty root rule)
- [#31883](https://github.com/ggml-org/llama.cpp/issues/31883) Feature Request: Clover model still unsupported.
- [#29436](https://github.com/ggml-org/llama.cpp/issues/29436) Feature Request: can you add model of to run on Qualcomm NPU
- [#29438](https://github.com/ggml-org/llama.cpp/issues/29438) CPU backend: null-pointer crash in ggml_backend_sched_graph_compute_async on first llama_decode (iOS, A15, v0.1.2)
- [#29445](https://github.com/ggml-org/llama.cpp/issues/29445) webui: MP4 selected via Images action makes later PNG fail in the same chat
- [#31953](https://github.com/ggml-org/llama.cpp/issues/31953) Misc. bug: realtime missing Gemma’s audio input
- [#31448](https://github.com/ggml-org/llama.cpp/issues/31448) Eval bug: granite: build_ffn() passes NULL for NVFP4 weight scales → garbage output
- [#31906](https://github.com/ggml-org/llama.cpp/issues/31906) Eval bug: llama-server not run QuantStack / Qwen-Image-GGUF
- [#31908](https://github.com/ggml-org/llama.cpp/issues/31908) Eval bug: gguf_init_from_reader: tensor name 0 is too long: 76 >= 64
- [#31696](https://github.com/ggml-org/llama.cpp/issues/31696) Misc. bug: server: realtime session.update asking for 24 kHz is accepted, the audio is still read as 16 kHz
- [#31106](https://github.com/ggml-org/llama.cpp/issues/31106) Feature Request: Support for Raon-1 architecture
- [#31918](https://github.com/ggml-org/llama.cpp/issues/31918) CUDA: dedicated mul_mat_id path for F32 activations with strided experts
- [#31654](https://github.com/ggml-org/llama.cpp/issues/31654) Historical HIP TILE flash-attention repeatability difference with an experimental guarded-loop patch (MI210, D512/D576)

### Ollama (`ollama/ollama`)

**Stars:** 186,470 · **Open issues:** 4,619 · **Last push:** 2h ago

On November 10, 2026, Ollama released v0.40.16, which includes the Ripple Preview model from Ricursive Intelligence, a 65B dense model designed for agentic coding with improved memory efficiency. Notable changes in this update feature a significant reduction in memory usage for Qwen3.8 Flash Next on Apple silicon, as well as enhancements in the `ollama launch` command that clarify routing for cloud models. Among the merged pull requests, improvements were made to the ChatGPT CLI for a smoother restore and graceful restart mechanism. A particularly pressing new issue includes a reported crash on Windows when more than 512 processes are running, indicating potential stability concerns that need addressing.

#### 🚀 New Releases
- [v0.40.16](https://github.com/ollama/ollama/releases/tag/v0.40.16) v0.40.16

#### ✅ Merged PRs
- [#19409](https://github.com/ollama/ollama/pull/19409) cmd/launch: use thinking metadata for OpenCode settings
- [#19583](https://github.com/ollama/ollama/pull/19583) Improve ChatGPT CLI restore and graceful restart

#### 🐛 New Issues
- [#19631](https://github.com/ollama/ollama/issues/19631) VRAM Accounting and GPU Splitting Fixes 💬2
- [#19624](https://github.com/ollama/ollama/issues/19624) OLLAMA_KEEP_ALIVE of 300 seconds (5 minutes) is too short `feature request` 💬2
- [#19621](https://github.com/ollama/ollama/issues/19621) Windows: app/updater crashes when more than 512 processes are running 💬1
- [#19627](https://github.com/ollama/ollama/issues/19627) Support for pasting screenshots/copied images `feature request`
- [#19623](https://github.com/ollama/ollama/issues/19623) Repeated compaction can retain a summary result without its matching call `bug`

#### 🔒 Closed Issues
- [#19262](https://github.com/ollama/ollama/issues/19262) Does OLLAMA_NUM_PARALLEL=1 do anything?
- [#19604](https://github.com/ollama/ollama/issues/19604) 403 Forbidden on ollama pull behind corporate proxy even though curl works
- [#19613](https://github.com/ollama/ollama/issues/19613) -v, --version showing unexpected "warning" text
- [#19201](https://github.com/ollama/ollama/issues/19201) [Vulkan][AMD RADV] ~30× generation slowdown after first request with prompt cache enabled — Ollama 0.40.8
- [#19418](https://github.com/ollama/ollama/issues/19418) Windows 11 26H2: native TCP tables return non-LISTEN states for the Ollama loopback endpoint
- [#19282](https://github.com/ollama/ollama/issues/19282) Performance guidance: Qwen3.5 4B GGUF prompt processing on 16GB M4 (100% GPU, llama.cpp)
- [#19631](https://github.com/ollama/ollama/issues/19631) VRAM Accounting and GPU Splitting Fixes
- [#19616](https://github.com/ollama/ollama/issues/19616) OLLAMA_LOAD_TIMEOUT of 300 seconds (5 minutes) is too damn short
- [#19591](https://github.com/ollama/ollama/issues/19591) CRITICAL: Account Billing Glitch / Charged $20 on Cancelled Account
- [#19473](https://github.com/ollama/ollama/issues/19473) model doesnt get recognized.
- [#19627](https://github.com/ollama/ollama/issues/19627) Support for pasting screenshots/copied images
- [#19474](https://github.com/ollama/ollama/issues/19474) Vulkan support

### LiteLLM (`BerriAI/litellm`)

**Stars:** 63,005 · **Open issues:** 5,114 · **Last push:** <1h ago

Today, LiteLLM released version 1.108.4, marking it as the latest Long-Term Support (LTS) version, with a recommendation to use the `lts` image tag for updates. Among the significant merged pull requests, enhancements were made to the proxy logging functionality (#50720), and fixes were implemented to improve the handling of responses in the router (#50730) and to ensure correct metadata merging (#50700). A noteworthy bug reported today includes issue #50788, which describes a problem with a custom guardrail dotted path being skipped at startup. Overall, the day saw routine updates focused on enhancing system stability and functionality.

#### 🚀 New Releases
- [v1.108.4](https://github.com/BerriAI/litellm/releases/tag/v1.108.4) 1.108.4 (LTS)

#### ✅ Merged PRs
- [#50730](https://github.com/BerriAI/litellm/pull/50730) fix(router): count a Responses WebSocket turn's tokens before the next turn is admitted
- [#50720](https://github.com/BerriAI/litellm/pull/50720) feat(proxy): log keys and teams still on the deprecated empty models defaults at boot
- [#50812](https://github.com/BerriAI/litellm/pull/50812) fix(hosted_vllm): omit empty tools list from chat requests
- [#50738](https://github.com/BerriAI/litellm/pull/50738) fix(proxy): list images in the Codex catalog only for models known to read them
- [#50764](https://github.com/BerriAI/litellm/pull/50764) feat(usage): split customer spend by the key's current team
- [#50820](https://github.com/BerriAI/litellm/pull/50820) test(integration): expect the 400 for a content-less leading system on Mantle count_tokens after #50708
- [#50743](https://github.com/BerriAI/litellm/pull/50743) fix(proxy): serve Codex its own Bedrock catalog entries for Bedrock deployments
- [#50773](https://github.com/BerriAI/litellm/pull/50773) fix(sso): read the SSO client secret before the refresh-token DB check
- [#50774](https://github.com/BerriAI/litellm/pull/50774) fix(accounting): keep delivering spend when another worker's maintenance lock is orphaned
- [#49920](https://github.com/BerriAI/litellm/pull/49920) fix(prometheus): record litellm_overhead_latency_metric for streams, stamp plus the proxy's first-chunk work
- [#50501](https://github.com/BerriAI/litellm/pull/50501) refactor(model-cost): move the cost map inputs, fetch and register_model overlay into Rust
- [#50795](https://github.com/BerriAI/litellm/pull/50795) test(integration): drop the empty-string n case from the Gemini long decode test
- [#50794](https://github.com/BerriAI/litellm/pull/50794) test(integration): drop the empty-string n case from the Gemini long decode test
- [#50547](https://github.com/BerriAI/litellm/pull/50547) feat(rust): add litellm-s3 crate, AwsCredentialsProvider and cost map fetch
- [#50796](https://github.com/BerriAI/litellm/pull/50796) test(integration): drop the empty-string n case from the Gemini long decode test
- [#50769](https://github.com/BerriAI/litellm/pull/50769) fix(router): let a retry leave a pinned deployment after a retryable failure
- [#50260](https://github.com/BerriAI/litellm/pull/50260) fix(router): honor request fallbacks in the mid-stream continuation check
- [#50755](https://github.com/BerriAI/litellm/pull/50755) fix(anthropic-messages): apply additional_drop_params before the unsupported param checks
- [#50753](https://github.com/BerriAI/litellm/pull/50753) fix(anthropic-messages): apply additional_drop_params before the unsupported param checks
- [#50700](https://github.com/BerriAI/litellm/pull/50700) fix(router): merge default metadata under the request's instead of replacing it
- [#50756](https://github.com/BerriAI/litellm/pull/50756) test: update stale integration expectations and backport the Together e2e repin (#50601)
- [#50782](https://github.com/BerriAI/litellm/pull/50782) test(integration): repair tests that merged changes left stale
- [#41831](https://github.com/BerriAI/litellm/pull/41831) fix(proxy): write SpendLogs failure rows for config-defined pass-through endpoints
- [#50757](https://github.com/BerriAI/litellm/pull/50757) test(e2e): backport the Together reasoning replay repin (#50601) to rc/1.109.0
- [#50776](https://github.com/BerriAI/litellm/pull/50776) fix(cost-map): price wandb DeepSeek-V4.1-Flash-1017 from the CoreWeave Forge listing
- [#50772](https://github.com/BerriAI/litellm/pull/50772) test(integration): assert team model visibility follows caller scope
- [#50775](https://github.com/BerriAI/litellm/pull/50775) chore(cost-map): add github_copilot/claude-fable-5.2 from the Copilot models-and-pricing table
- [#50703](https://github.com/BerriAI/litellm/pull/50703) test(integration): assert response ids stay scoped to their minting key
- [#50424](https://github.com/BerriAI/litellm/pull/50424) fix(messages): raise native messages failures as python's errors
- [#50425](https://github.com/BerriAI/litellm/pull/50425) fix(messages): bill a native stream the client abandoned like python
- [#50426](https://github.com/BerriAI/litellm/pull/50426) fix(messages): write the native unary cache entry after the router stamps it like python
- [#50423](https://github.com/BerriAI/litellm/pull/50423) fix(rust): run native async calls through python's async wrapper steps
- [#50422](https://github.com/BerriAI/litellm/pull/50422) fix(messages): pass non-message bodies through and refuse non-string headers as bad requests
- [#50421](https://github.com/BerriAI/litellm/pull/50421) fix(messages): log native messages request fields like python
- [#50420](https://github.com/BerriAI/litellm/pull/50420) fix(messages): log native messages success once, after the proxy releases it
- [#50335](https://github.com/BerriAI/litellm/pull/50335) fix(messages): let proxy /v1/messages requests run on the rust path
- [#50770](https://github.com/BerriAI/litellm/pull/50770) chore(cost-map): add openai gpt-6-cyber long context prices from the pricing page
- [#50572](https://github.com/BerriAI/litellm/pull/50572) feat(proxy): let a key's logging entry reference a proxy credential
- [#50767](https://github.com/BerriAI/litellm/pull/50767) test(audio): bill reported transcription seconds for measurable uploads
- [#50741](https://github.com/BerriAI/litellm/pull/50741) fix(complexity_router): keep Claude Code subagent and side-request traffic off other agents' tier pins
- [#50603](https://github.com/BerriAI/litellm/pull/50603) fix(proxy): fail-closed budget enforcement returns 403 naming /team/member_add for a team user with no membership row
- [#50742](https://github.com/BerriAI/litellm/pull/50742) test(integration): cover claude-fable-5-2 capability flags and prompt-cache pricing on Vertex AI and Bedrock Converse
- [#50750](https://github.com/BerriAI/litellm/pull/50750) feat(router): let deployments declare a shared encrypted content boundary
- [#50708](https://github.com/BerriAI/litellm/pull/50708) fix(bedrock): answer 400, not 500, for malformed count-tokens requests
- [#50718](https://github.com/BerriAI/litellm/pull/50718) fix(ollama_chat): backport streamed tool call indices to lts/1.108.x (#49183)
- [#50746](https://github.com/BerriAI/litellm/pull/50746) feat(cost-map): add GovCloud regional rows for Bedrock Claude Fable 5.2 and Mythos 5.2
- [#50502](https://github.com/BerriAI/litellm/pull/50502) fix(rust): install the rustls crypto provider at the Python host boundary
- [#50676](https://github.com/BerriAI/litellm/pull/50676) fix(redis): accept a bare service account email for GCP Memorystore IAM
- [#49183](https://github.com/BerriAI/litellm/pull/49183) fix(ollama_chat): give each streamed tool call its own index
- [#49583](https://github.com/BerriAI/litellm/pull/49583) fix(minimax): forward reasoning_effort instead of dropping it
- [#50455](https://github.com/BerriAI/litellm/pull/50455) feat(auth): grant access groups through principal attribute rules
- [#49806](https://github.com/BerriAI/litellm/pull/49806) fix(audio): measure duration for PathLike multipart tuple contents
- [#50735](https://github.com/BerriAI/litellm/pull/50735) fix(logging): bill a refused response the router falls back from
- [#50727](https://github.com/BerriAI/litellm/pull/50727) fix(cost)!: bill transcriptions by the seconds the provider reports
- [#50722](https://github.com/BerriAI/litellm/pull/50722) test(integration): cover claude-fable-5-2 capability flags and prompt-cache pricing on the scripted Anthropic upstream
- [#50713](https://github.com/BerriAI/litellm/pull/50713) feat(cost-map): add Claude Fable 5.2 on Vertex AI and repoint claude-fable-latest
- [#50704](https://github.com/BerriAI/litellm/pull/50704) perf(router): look up host step answers by id instead of scanning every candidate
- [#50721](https://github.com/BerriAI/litellm/pull/50721) fix(prompt_templates): keep moved private helpers importable from common_utils
- [#50593](https://github.com/BerriAI/litellm/pull/50593) build(ui): fail lint on hardcoded English in dashboard JSX
- [#50729](https://github.com/BerriAI/litellm/pull/50729) chore: bump litellm to 1.108.4 on lts/1.108.x
- [#50723](https://github.com/BerriAI/litellm/pull/50723) feat(azure): add azure_ai/claude-fable-5-2 and claude-fable-5-2-fast from the Foundry Claude page
- [#50462](https://github.com/BerriAI/litellm/pull/50462) fix(anthropic): backport background rejection on the /v1/messages Responses bridge to lts/1.108.x
- [#49199](https://github.com/BerriAI/litellm/pull/49199) fix(proxy): show committed spend in the remaining budget gauges
- [#50707](https://github.com/BerriAI/litellm/pull/50707) feat(cost-map): rolling registry update (Anthropic and Bedrock Fable 5.2, Azure realtime cache, Vertex, Friendli)

#### 🐛 New Issues
- [#50788](https://github.com/BerriAI/litellm/issues/50788) [Bug]: Custom guardrail dotted path that names an instance is skipped at startup `llm translation` 💬2
- [#50691](https://github.com/BerriAI/litellm/issues/50691) [Bug]: websearch interception reports only the first search when the agentic loop runs several on /v1/messages `llm translation` 💬2
- [#50680](https://github.com/BerriAI/litellm/issues/50680) [Bug]: Databricks Chat & Embeddings re-fetch OAuth M2M tokens on every request instead of using token cache `bug` 💬2
- [#50781](https://github.com/BerriAI/litellm/issues/50781) [Bug]: completion() with tools still requires 'mcp' in 1.108.3 (#46045 closed, fix not merged) `llm translation` 💬1
- [#50740](https://github.com/BerriAI/litellm/issues/50740) [Bug]: Proxy worker RSS grows linearly with requests because each request's Redis batch scope is never freed `llm translation` 💬1
- [#50706](https://github.com/BerriAI/litellm/issues/50706) [Bug]: Gemini thought images are returned in message.images next to the final image 💬1
- [#50677](https://github.com/BerriAI/litellm/issues/50677) [Bug]: A2A chat provider treats non-terminal task status messages as final responses `llm translation` 💬1
- [#50678](https://github.com/BerriAI/litellm/issues/50678) [Bug]: Streaming /responses (DeepSeek): reasoning items lack summary, and response.completed.output disagrees with output_item.done `llm translation` 💬1
- [#50679](https://github.com/BerriAI/litellm/issues/50679) [Bug]: A2A agent returns `team_model_access_denied` via `/v1/chat/completions` despite granted agent permissions `bug` `llm translation` 💬1
- [#50673](https://github.com/BerriAI/litellm/issues/50673) [Bug]: Responses bridge pairs a tool result with the wrong call when IDs repeat `bug` `llm translation` 💬1
- [#50826](https://github.com/BerriAI/litellm/issues/50826) [Bug]: Ollama model-info lookup ignores explicit api_base and uses OLLAMA_API_BASE `bug` `llm translation`
- [#50792](https://github.com/BerriAI/litellm/issues/50792) [Feature]: enrich GET /active/callbacks with class vs instance summaries
- [#50791](https://github.com/BerriAI/litellm/issues/50791) [Feature]: mark pre-call rejections with rejected_by_hook metadata `llm translation`
- [#50761](https://github.com/BerriAI/litellm/issues/50761) [Feature]: Every logger should report the same system prompt for the same request `enhancement` `llm translation` `claude code`
- [#50754](https://github.com/BerriAI/litellm/issues/50754) [Feature]: Reuse LiteLLM CLI PKCE login in the VS Code extension via auth print-token
- [#50748](https://github.com/BerriAI/litellm/issues/50748) Bundled tiktoken rank files have CRLF line endings in the 1.102.0 win_amd64 wheel, fail tiktoken's hash check and force a network download at import `llm translation`
- [#50725](https://github.com/BerriAI/litellm/issues/50725) [Bug]: /v1/messages/count_tokens returns 500 for Bedrock Claude models in a Region without a bedrock-mantle host (eu-west-3); token_count_framing not honoured `llm translation`
- [#50714](https://github.com/BerriAI/litellm/issues/50714) [Feature]: Allow hiding the Updates tab and bundled update content from the LiteLLM UI `enhancement`
- [#50687](https://github.com/BerriAI/litellm/issues/50687) [Bug]: /v1/rag/ingest rejects provider-supported DOCX and PPTX files as archives `bug` `llm translation`
- [#50672](https://github.com/BerriAI/litellm/issues/50672) [Bug]: Cohere v2 chat forwards OpenAI-shape history unchanged, so history from other providers is rejected `bug` `llm translation`
- [#50668](https://github.com/BerriAI/litellm/issues/50668) [Bug]: Presidio leaves tool call arguments in the chat history unmasked `llm translation`

#### 🔒 Closed Issues
- [#23777](https://github.com/BerriAI/litellm/issues/23777) Feature request: support multiple ChatGPT OAuth accounts in a single LiteLLM instance
- [#34140](https://github.com/BerriAI/litellm/issues/34140) v3 rate limiter double-counts team per-model limits (model_per_team) → effective RPM/TPM is half configured
- [#25214](https://github.com/BerriAI/litellm/issues/25214) [Bug]: /v1/messages streaming drops first chunk on content-block transitions (Bedrock reasoning models)
- [#15647](https://github.com/BerriAI/litellm/issues/15647) [Bug]: Updated fallback configuration not reloaded on redeploy
- [#45422](https://github.com/BerriAI/litellm/issues/45422) [Bug]: Consumed Tokens via GitHub BYOK is not operational
- [#27191](https://github.com/BerriAI/litellm/issues/27191) [Feature]: Cache Token Cost & Tracking for Custom Pricing and OpenAI-Compatible Providers
- [#39713](https://github.com/BerriAI/litellm/issues/39713) [Bug]: Per-customer RPM limits stop applying once the virtual key is cached
- [#47675](https://github.com/BerriAI/litellm/issues/47675) [Bug]: response_cost is null and spend stays $0 when custom_llm_provider=anthropic and the priced row lives under a different provider
- [#28859](https://github.com/BerriAI/litellm/issues/28859) [Bug]: Internal User (Create/Delete/View) cannot view Request/Response Data in Logs even with store_prompts_in_spend_logs: true
- [#22841](https://github.com/BerriAI/litellm/issues/22841) [Bug]: v1/messages 接口传递 tool_result 类型消息丢失
- [#32992](https://github.com/BerriAI/litellm/issues/32992) [Bug]: Routing deepseek-v4-pro through LiteLLM through Codex gives "An assistant message with 'tool_calls' must be followed by tool messages responding to each 'tool_call_id'" 400 error.
- [#43444](https://github.com/BerriAI/litellm/issues/43444) [Bug]: Price data reload wipes DB deployments' cost-map registrations when config model_list is empty (router not in _live_routers)
- [#40471](https://github.com/BerriAI/litellm/issues/40471) [Bug]: reasoning_effort=xhigh is silently downgraded to baseline instead of refused when the model map lacks the capability
- [#34101](https://github.com/BerriAI/litellm/issues/34101) [Bug]: project budgets missing from atomic pre-call budget reservation
- [#34217](https://github.com/BerriAI/litellm/issues/34217) [Bug]: POST /team/delete leaves deleted virtual keys auth-valid in cache
- [#31553](https://github.com/BerriAI/litellm/issues/31553) [Bug]: unexpected blank assistant message after an assistant message with "tool calls"
- [#33678](https://github.com/BerriAI/litellm/issues/33678) [Bug]: ollama_chat streaming emits index=0 for every tool call, merging parallel tool calls into malformed JSON
- [#37117](https://github.com/BerriAI/litellm/issues/37117) [Bug]: compression_savings_spend and prompt_caching_savings_spend always $0 with cost-based-routing and multiple deployments per model_name
- [#30657](https://github.com/BerriAI/litellm/issues/30657) [Bug]: Add Gemma 4 which is reachable via mantle endpoint
- [#46212](https://github.com/BerriAI/litellm/issues/46212) [Bug]: test_cold_concurrent_schema_validation_accepts_valid_arguments is flaky in the mcp-server CI shard
- [#42409](https://github.com/BerriAI/litellm/issues/42409) [Bug]: Azure requests include internal model_alias_map when a model alias resolves through LiteLLM
- [#37823](https://github.com/BerriAI/litellm/issues/37823) [Bug]: azure/us/ and azure/eu/ gpt-4o-2024-11-20 missing cache_read_input_token_cost at present cache reads billed at zero
- [#36174](https://github.com/BerriAI/litellm/issues/36174) [Bug]: Router pre-call context-window check blocks the event loop (sync token_counter on async path)
- [#31694](https://github.com/BerriAI/litellm/issues/31694) [Bug]: Complexity Router disappears from `/v2/model/info` after updating DB model
- [#40728](https://github.com/BerriAI/litellm/issues/40728) [Bug]: Azure AI model router no cost tracking
- [#37143](https://github.com/BerriAI/litellm/issues/37143) [Bug]: Docs mention litellm.turn_on_message_logging, which doesn't exist
- [#36327](https://github.com/BerriAI/litellm/issues/36327) [Bug]: /v1/responses streaming drops text from combined reasoning and content chunks
- [#32324](https://github.com/BerriAI/litellm/issues/32324) [Bug]: Valkey semantic cache failed as two self._get_async_embedding() call in `valkey_semantic_cache.py` forward `**kwargs` instead of `metadata`
- [#33434](https://github.com/BerriAI/litellm/issues/33434) [Bug]: Multiple app_roles in SSO payload just picks the first one
- [#50224](https://github.com/BerriAI/litellm/issues/50224) [Bug]: Bedrock adapter turns encrypted agent messages into text and breaks task delivery
- [#46398](https://github.com/BerriAI/litellm/issues/46398) [Bug]: Bridged /v1/responses stores the encoded resp_ id in SpendLogs.request_id, so previous_response_id session lookup never matches
- [#46052](https://github.com/BerriAI/litellm/issues/46052) [Bug]: token_counter raises KeyError 'items' for array tool params without items -> /v1/messages/count_tokens 500
- [#43569](https://github.com/BerriAI/litellm/issues/43569) Azure EU Data Zone GPT-6 Astra cost map underprices Sweden Central by 10%
- [#39370](https://github.com/BerriAI/litellm/issues/39370) [Bug]: Reset-budget job never self-heals a budget_duration=null row with a stale budget_reset_at — spend is silently zeroed on every tick forever
- [#34238](https://github.com/BerriAI/litellm/issues/34238) [Bug]: End-user budget can be bypassed via stale per-pod fallback spend after Redis counter clean-miss
- [#33026](https://github.com/BerriAI/litellm/issues/33026) [Bug]: /v1/audio/speech returns HTTP 500 for client-side (4xx) errors while /v1/audio/transcriptions returns the correct status
- [#32033](https://github.com/BerriAI/litellm/issues/32033) Add "azure/mistral-ocr-4-0" in "model_prices_and_context_window.json"
- [#28907](https://github.com/BerriAI/litellm/issues/28907) [Bug]: S3 batch flush drops queued logs before uploads finish
- [#29284](https://github.com/BerriAI/litellm/issues/29284) [Bug] Embedding cache merge corrupts `data[*].index` on partial cache hits
- [#11157](https://github.com/BerriAI/litellm/issues/11157) [Bug]: Redis cache timeout causes message content to leak into logs
- [#41517](https://github.com/BerriAI/litellm/issues/41517) regression: TestTeamScopedToAccessGroup broken by #41310
- [#34231](https://github.com/BerriAI/litellm/issues/34231) [Bug]: In the web UI on the "AI Hub" page the colored feature pills should use the same color for the same feature
- [#32782](https://github.com/BerriAI/litellm/issues/32782) [Bug]: ModuleNotFoundError (litellm_enterprise not found) when using background=true with Responses API
- [#35662](https://github.com/BerriAI/litellm/issues/35662) MCP servers granted to a key via /key/update are invisible to tools/list (works if granted at /key/generate, or with a brand-new key)
- [#35745](https://github.com/BerriAI/litellm/issues/35745) [Feature]: Add optional Microsoft Graph user search to Invite User modal
- [#43620](https://github.com/BerriAI/litellm/issues/43620) [Bug]: Responses bridge keeps only the last reasoning item when stream=False
- [#49805](https://github.com/BerriAI/litellm/issues/49805) [Bug]: Transcription duration is missing for multipart tuples containing pathlib.Path
- [#47829](https://github.com/BerriAI/litellm/issues/47829) [Bug]: one deployment's max_input_tokens / max_output_tokens overwrite the shared cost-map entry for every deployment of the same provider model
- [#47644](https://github.com/BerriAI/litellm/issues/47644) [Bug]: v1.106.0 Docker Admin UI shows API key fields for GitHub Copilot instead of documented per-user OAuth
- [#46322](https://github.com/BerriAI/litellm/issues/46322) [Bug]: Published OpenAI <3 constraint blocks Pydantic AI 2.55 after SDK 3 support merged
- [#46071](https://github.com/BerriAI/litellm/issues/46071) [Bug]: test_cold_concurrent_schema_validation_accepts_valid_arguments is flaky on main, fails ~25% of runs
- [#43850](https://github.com/BerriAI/litellm/issues/43850) [Documentation-Update]: The `completion()` related parameters should list the `drop_params` in the LiteLLM specific section
- [#40692](https://github.com/BerriAI/litellm/issues/40692) Bug]: generateContent route ignores vertex_location and applies the wrong regional cost uplift
- [#40079](https://github.com/BerriAI/litellm/issues/40079) [Bug]: MCP server with openapi spec, heathy check report "unhealthy"
- [#37538](https://github.com/BerriAI/litellm/issues/37538) [Bug]: search router silently drops provider-specific litellm_params from yaml search_tools entries
- [#35878](https://github.com/BerriAI/litellm/issues/35878) [Bug] use_chat_completions_api bridge: allowed_openai_params not forwarded + namespace/tool_search tools dropped
- [#35461](https://github.com/BerriAI/litellm/issues/35461) [Bug]: Usage dashboard "Ask AI" chat fails for every selectable model (calls litellm.acompletion() directly, bypassing the Router)
- [#30617](https://github.com/BerriAI/litellm/issues/30617) [Bug]: Streaming tool-call responses crash with TypeError: 'MockValSer' object is not an instance of 'SchemaSerializer'
- [#50359](https://github.com/BerriAI/litellm/issues/50359) [Feature]: feat(ui): internationalize left sidebar menu labels
- [#43658](https://github.com/BerriAI/litellm/issues/43658) [Bug]: `Auto-router baseline observation could not be initialized` warning logged on every /v1/messages request when no auto-router is involved
- [#43575](https://github.com/BerriAI/litellm/issues/43575) [Bug]: gemini-robotics-er-2-preview bills thinking tokens at 2x Google's current output rate
- [#41990](https://github.com/BerriAI/litellm/issues/41990) [Bug]: opentelemetry-api >= 1.44.0 breaks the OTel v2 integration and silently disables the newrelic callback (Events API removed)
- [#41804](https://github.com/BerriAI/litellm/issues/41804) Search tool rows silently drop every non-credential litellm_param (timeout, max_retries, provider-specific options)
- [#40123](https://github.com/BerriAI/litellm/issues/40123) [Bug]: gpt-6-astra registered as mode: "chat" — tool calls over /v1/chat/completions are rejected by OpenAI and the Responses bridge never engages
- [#37988](https://github.com/BerriAI/litellm/issues/37988) [Bug]: GCP Terraform module provisions Redis but proxy reports no coordination Redis
- [#37264](https://github.com/BerriAI/litellm/issues/37264) [Bug]: /v1/responses omits required reasoning_tokens for Gemini responses without thoughts, breaking Codex clients
- [#36637](https://github.com/BerriAI/litellm/issues/36637) Fix "azure/gpt-image-1.5" and "azure/gpt-image-2" entries in "model_prices_and_context_window.json"
- [#35696](https://github.com/BerriAI/litellm/issues/35696) [Bug]: close_duplicate_issues.py crashes on every run — splitlines() splits the JSON response on U+2028/U+2029 inside issue bodies
- [#35346](https://github.com/BerriAI/litellm/issues/35346) tests/test_litellm/interactions/test_openapi_compliance.py fails: Google Interactions API spec dropped Content discriminator and added "queued" status
- [#33392](https://github.com/BerriAI/litellm/issues/33392) [Feature]: terraform guardrail support
- [#32496](https://github.com/BerriAI/litellm/issues/32496) fireworks_ai cost calculator ignores cached_tokens / cache_read_input_token_cost
- [#32505](https://github.com/BerriAI/litellm/issues/32505) fix(anthropic_responses): translate_tool_choice_to_responses_api returns invalid objects instead of string literals
- [#38951](https://github.com/BerriAI/litellm/issues/38951) [Bug]: OpenAPI MCP cannot read YAML specs
- [#41009](https://github.com/BerriAI/litellm/issues/41009) chatgpt/ provider: gpt-5.6-sol response.completed has empty output[] despite streamed content, raises "Unknown items in responses API response: []"
- [#37284](https://github.com/BerriAI/litellm/issues/37284) [Bug]: Compression/caching savings always $0.00 for any custom (non-cost-map) model, even with a single deployment
- [#36414](https://github.com/BerriAI/litellm/issues/36414) Ask AI (Usage) should route through llm_router for proxy model aliases
- [#36424](https://github.com/BerriAI/litellm/issues/36424) [Feature]: Disable Healthcheck logging when LogLevel set to WARN
- [#27755](https://github.com/BerriAI/litellm/issues/27755) [Bug]: Cannot use image generation in ChatGPT Subscription
- [#32736](https://github.com/BerriAI/litellm/issues/32736) [Bug]: Price-Reload overrides my explicit definitions in the Proxy-Config.model_list. (Example I want to serve gpt-5.6 via mode: responses)
- [#35685](https://github.com/BerriAI/litellm/issues/35685) [Bug]: Vertex AI/Gemini _map_function silently drops tool parameters when schema key is input_schema instead of parameters
- [#35780](https://github.com/BerriAI/litellm/issues/35780) [Bug]: Responses API sends metadata to a strict OpenAI-compatible upstream although the client does not pass metadata
- [#50444](https://github.com/BerriAI/litellm/issues/50444) [Bug]: Complexity Router: Claude Code background requests overwrite subagent user_turn tier pins
- [#43947](https://github.com/BerriAI/litellm/issues/43947) [Bug]: After a streaming fallback, every chunk's _hidden_params["response_cost"] is 0.0
- [#47725](https://github.com/BerriAI/litellm/issues/47725) [Bug]: Unchanged custom pricing repeatedly invalidates model-info caches on the request path in v1.106.0
- [#46117](https://github.com/BerriAI/litellm/issues/46117) Anthropic document PDF is routed as an image URL for ChatGPT subscription provider
- [#45561](https://github.com/BerriAI/litellm/issues/45561) [Bug]: Sync Responses API streaming never closes the reasoning item
- [#45084](https://github.com/BerriAI/litellm/issues/45084) enable_pre_call_checks context-window check on /v1/messages ignores top-level system and tools, so max_input_tokens is not enforced for real Claude Code traffic
- [#44815](https://github.com/BerriAI/litellm/issues/44815) [Feature]: do not fall back on UnsupportedParamsError (a config error is hidden behind a 200 from the fallback model)
- [#41780](https://github.com/BerriAI/litellm/issues/41780) [Bug]: base_model not used for cost tracking with hosted_vllm, resulting in $0 spend
- [#41580](https://github.com/BerriAI/litellm/issues/41580) [Bug]: Pause (blocked) and delete are ignored at routing time for wildcard-model deployments — PatternMatchRouter pool is never reconciled
- [#41215](https://github.com/BerriAI/litellm/issues/41215) [Bug]: /v1/messages streaming + post-call guardrails: _on_deferred_native_stream_complete() takes 1 positional argument but 2 were given
- [#41159](https://github.com/BerriAI/litellm/issues/41159) [Bug]: POST /v1/responses returns 500 with a raw TypeError when 'input' is omitted
- [#40090](https://github.com/BerriAI/litellm/issues/40090) [DashScope/Qwen] Explicit (cache_control-based) and implicit (automatic) context-cache hits are merged, causing incorrect cost calculation
- [#39741](https://github.com/BerriAI/litellm/issues/39741) [Bug]: Claude Code ToolSearch fails on bedrock/openai after tool_reference handoff
- [#37263](https://github.com/BerriAI/litellm/issues/37263) Add Skills page to Internal Users page visibility settings
- [#37107](https://github.com/BerriAI/litellm/issues/37107) [Feature]: Let a pass-through target report which model actually served (x-litellm-response-model)
- [#37007](https://github.com/BerriAI/litellm/issues/37007) GET /spend/logs has no pagination and OOM-kills the proxy on a large LiteLLM_SpendLogs
- [#36817](https://github.com/BerriAI/litellm/issues/36817) [Bug]: SCIM PATCH/PUT/DELETE /Groups/{id} leave the in-memory team cache stale
- [#36342](https://github.com/BerriAI/litellm/issues/36342) docs llms.txt has dead links, including the Docusaurus template intro page
- [#35767](https://github.com/BerriAI/litellm/issues/35767) [Bug]: github copilot Reverse GPT5.6 model error
- [#33937](https://github.com/BerriAI/litellm/issues/33937) Add "GLM 5.2" in "model_prices_and_context_window.json"
- [#47687](https://github.com/BerriAI/litellm/issues/47687) [Bug]: Bedrock Claude 5 json_schema without thinking: the json tool path returns empty content_filtered replies (Opus/Sonnet 5.5)
- [#47381](https://github.com/BerriAI/litellm/issues/47381) [Bug]: Bedrock /v1/messages: strip-and-resign retry after invalid thinking signature reuses stale SigV4 Authorization (InvalidSignatureException)
- [#47339](https://github.com/BerriAI/litellm/issues/47339) reset_budget_windows() raises on every run: where={"budget_limits": {"not": None}} is not a valid Prisma null filter
- [#46432](https://github.com/BerriAI/litellm/issues/46432) [Bug]: chat completions to a custom anthropic/<model> deployment go upstream with max_tokens=4096 despite model_info.max_output_tokens
- [#46043](https://github.com/BerriAI/litellm/issues/46043) [Bug]: proxy crashes at startup under `USE_DDTRACE=True` — ddtrace 4.11.0's mcp integration vs mcp 2.2.0 in v1.105.0
- [#46067](https://github.com/BerriAI/litellm/issues/46067) [Bug]: litellm_key reads a deleted key as present, and destroying it fails with 404 "No keys found"
- [#46060](https://github.com/BerriAI/litellm/issues/46060) [Bug]: import litellm fails on Python 3.15: sre_constants and sre_parse were removed
- [#45999](https://github.com/BerriAI/litellm/issues/45999) [Bug]: Vertex AI text embeddings drop metadata.billableCharacterCount
- [#45787](https://github.com/BerriAI/litellm/issues/45787) [Bug]: Pass-through endpoint URL containing 'predict' substring is misidentified as Vertex AI route — KeyError('predictions') kills logging task, SpendLogs never written
- [#45103](https://github.com/BerriAI/litellm/issues/45103) [Bug]: Bedrock Converse streaming drops request timeout and can hang for 600s
- [#44373](https://github.com/BerriAI/litellm/issues/44373) [Bug]: MCP tools/call returns 404 'Tool not found' after proxy restart for DB-managed servers (cold tool-name mapping)
- [#44300](https://github.com/BerriAI/litellm/issues/44300) [Bug]: openai_like embeddings send extra_headers in the JSON body instead of as HTTP headers
- [#44032](https://github.com/BerriAI/litellm/issues/44032) [Bug]: Pass-through endpoints never get header-derived spend tags (extra_spend_tag_headers, user-agent)
- [#44022](https://github.com/BerriAI/litellm/issues/44022) Add Azure Data Zone pricing for GPT-6.1 Sol
- [#42938](https://github.com/BerriAI/litellm/issues/42938) [Bug]: sse_keepalive_ping_interval_seconds leaks a max_parallel_requests slot on every streaming request (ContextVar lost across asyncio.ensure_future)
- [#43124](https://github.com/BerriAI/litellm/issues/43124) [Bug]: /chat/completions rejects tool_choice type allowed_tools (valid OpenAI spec, works on gpt-5.6)
- [#42742](https://github.com/BerriAI/litellm/issues/42742) [Bug]: When using `generic_guardrail_api` (or `headroom`) with `default_on: true`, requests containing Gemini-native tools like `{"googleSearch": {}}` fail with a 500 error:
- [#42706](https://github.com/BerriAI/litellm/issues/42706) [Bug]: SSO login-code exchange overwrites the Secure token cookie with a non-Secure one
- [#42663](https://github.com/BerriAI/litellm/issues/42663) [Bug]: Streamed Anthropic server-tool requests price only the message_start cache-write breakdown, under-reporting spend
- [#41973](https://github.com/BerriAI/litellm/issues/41973) test_get_model_info_falls_back_from_dated_snapshot_to_undated_entry[...azure/gpt-5.6-luna] fails on current main
- [#41516](https://github.com/BerriAI/litellm/issues/41516) regression: test_outbound_http2_e2e broken by #41268
- [#41391](https://github.com/BerriAI/litellm/issues/41391) [Bug]: AsyncHTTPHandler.get() never checks the status, so every GET-based search adapter turns a rejected API key into a successful empty result
- [#41301](https://github.com/BerriAI/litellm/issues/41301) [Bug]: fireworks_ai drops reasoning_content from assistant messages since 1.100.0
- [#41002](https://github.com/BerriAI/litellm/issues/41002) [Bug]: /v1/embeddings returns duplicate "index" values when a batch mixes cached and uncached inputs
- [#40472](https://github.com/BerriAI/litellm/issues/40472) [Bug]: supports_none_reasoning_effort is never enforced, so gpt-5 / gpt-5-mini forward reasoning_effort=none into a predictable provider 400
- [#40201](https://github.com/BerriAI/litellm/issues/40201) [Bug]: PATCH /guardrails/{id} is not applied to the running guardrail — pii_entities_config changes silently ignored until restart (v1.99.0)
- [#39284](https://github.com/BerriAI/litellm/issues/39284) [Feature]: 希望可以支持添加中文名称的模型
- [#38177](https://github.com/BerriAI/litellm/issues/38177) [Bug]: client secret is backfilled when modifying SSO configuration
- [#37497](https://github.com/BerriAI/litellm/issues/37497) [Bug]: Per-user authorization-code credentials are omitted from MCP prompt and resource operations
- [#37080](https://github.com/BerriAI/litellm/issues/37080) [Bug]: MCP routes return HTTP 500 instead of 401 for missing/malformed Authorization (ProxyException escapes into generic handler)
- [#36536](https://github.com/BerriAI/litellm/issues/36536) [Bug]: Bedrock Converse 400s on forced tool_choice + parallel_tool_calls (Claude 4.5+/Opus): conflicting tool_choice injected into additionalModelRequestFields
- [#36290](https://github.com/BerriAI/litellm/issues/36290) [Bug]: Anthropic API reasoning_tokens always 0 under default thinking display — usage.output_tokens_details.thinking_tokens ignored (Claude Opus 5 / Fable 5)
- [#34875](https://github.com/BerriAI/litellm/issues/34875) [Bug]: Streaming: sync success handler races the async handler on shared model_call_details, so custom callbacks intermittently read response_cost=None
- [#33519](https://github.com/BerriAI/litellm/issues/33519) [Feature]: Add elevenlabs/scribe_v2 to model_prices_and_context_window.json
- [#31260](https://github.com/BerriAI/litellm/issues/31260) Router sync _embedding bypasses team/access-group scoping (no request_kwargs); sync cache read path strips metadata
- [#30061](https://github.com/BerriAI/litellm/issues/30061) [Bug]: OTEL NoneType crash
- [#40117](https://github.com/BerriAI/litellm/issues/40117) [Bug]: cannot parse chunks to standard response object in pass_through endpoints
- [#37118](https://github.com/BerriAI/litellm/issues/37118) [bug]: /v1/messages drops stop_sequences
- [#40704](https://github.com/BerriAI/litellm/issues/40704) [Bug]: Terraform provider cannot update a virtual key that has no team
- [#40361](https://github.com/BerriAI/litellm/issues/40361) docker/Dockerfile.database cannot be built: pinned wolfi-base digest has drifted from the apk packages installed into it
- [#38056](https://github.com/BerriAI/litellm/issues/38056) [Bug]: claude-3-haiku and claude-3-opus have the Sonnet 1-hour cache write price (12x over / 5x under)
- [#41225](https://github.com/BerriAI/litellm/issues/41225) [Bug]: Complexity auto-router session-affinity pin flaps across replicas — DualCache reads local in-memory before Redis
- [#47607](https://github.com/BerriAI/litellm/issues/47607) [Bug]: encrypted_content_affinity traps follow-ups on a failing deployment: retries return to it, order fallback gives 'No deployments available'
- [#35742](https://github.com/BerriAI/litellm/issues/35742) [Bug]: DATABASE_*_READ_REPLICA env vars have no effect on the docker/CLI startup path
- [#35765](https://github.com/BerriAI/litellm/issues/35765) [Feature]: honor x-litellm-tags header on MCP gateway routes (tools/list, tools/call)
- [#35787](https://github.com/BerriAI/litellm/issues/35787) [Bug]: Lowest-cost routing does not resolve provider-prefixed model pricing
- [#50099](https://github.com/BerriAI/litellm/issues/50099) Complexity Router: Claude Code Subagent Overwrites Parent's user_turn Tier Pin (Not Covered by #48701)
- [#49574](https://github.com/BerriAI/litellm/issues/49574) [Bug]: minimax provider silently drops top-level reasoning_effort (M3.1-Flash supports low|medium|high|max)
- [#50503](https://github.com/BerriAI/litellm/issues/50503) [Bug]: Vertex Gemini Pro cache writes above 200k tokens are billed at 0.25 USD/M, so a bigger prompt costs less
- [#49103](https://github.com/BerriAI/litellm/issues/49103) [Bug]: Router retry reuses success logging state and drops later attempt cost
- [#41238](https://github.com/BerriAI/litellm/issues/41238) [Bug]: /v1/audio/transcriptions and /v1/audio/speech fail with "LLM Provider NOT provided" when the provider is set via custom_llm_provider
- [#40586](https://github.com/BerriAI/litellm/issues/40586) [Bug]: A2A message/send re-discovers agent card from well-known paths instead of using the registered agent_card_params, breaking agents (e.g. Azure AI Foundry) that serve their card elsewhere
- [#39501](https://github.com/BerriAI/litellm/issues/39501) [Bug]: 41 of 85 openrouter/* entries disagree with openrouter.ai's own API on price (20 of them cite the page that contradicts them)
- [#39099](https://github.com/BerriAI/litellm/issues/39099) [Bug]: bedrock_mantle chat completions drop aws_role_name so AssumeRole never fires
- [#37316](https://github.com/BerriAI/litellm/issues/37316) [Bug]: langfuse_otel raises JSONDecodeError for Responses API function calls with empty or invalid arguments
- [#37223](https://github.com/BerriAI/litellm/issues/37223) [Feature]: Bump Granian from 2.7.4 to 2.8.1 in the published proxy
- [#36750](https://github.com/BerriAI/litellm/issues/36750) [feature-request]: Support grok-4.6
- [#35693](https://github.com/BerriAI/litellm/issues/35693) [Bug]: v1.95.0 cache-cost warning is unsuppressible — shared_backend_model_info() strips the cache_* fields the warning tells you to add
- [#47935](https://github.com/BerriAI/litellm/issues/47935) [Bug]: Logging Request Metadata - Crashes
- [#47297](https://github.com/BerriAI/litellm/issues/47297) [Bug]: Disk cache runs code from a tampered cache entry (CVE-2025-69872)
- [#46921](https://github.com/BerriAI/litellm/issues/46921) [Bug]: Vertex/Gemini: tool parameters mutated in place, spend logs store the converted schema
- [#46516](https://github.com/BerriAI/litellm/issues/46516) [Bug]: Long streamed responses freeze the proxy event loop: async_data_generator never yields while chunks are buffered
- [#45061](https://github.com/BerriAI/litellm/issues/45061) [Bug]: Bedrock file routing drops configured S3 endpoint and bucket parameters
- [#43845](https://github.com/BerriAI/litellm/issues/43845) [Bug]:
- [#43540](https://github.com/BerriAI/litellm/issues/43540) [Bug]: Pass-through endpoints ignore x-litellm-session-id; every spend log gets a fresh session
- [#40857](https://github.com/BerriAI/litellm/issues/40857) [Bug]: a content-filtered turn arrives on /v1/messages as stop_reason end_turn, same as an ordinary answer
- [#42484](https://github.com/BerriAI/litellm/issues/42484) Responses API streaming bridge crashes on usage-only chunks (choices: []) — fix in #34455 unreleased until 1.103.0rc1
- [#42469](https://github.com/BerriAI/litellm/issues/42469) [Bug]: Missing eu-west-2 Bedrock pricing for NVIDIA Nemotron Super 3 120B
- [#41589](https://github.com/BerriAI/litellm/issues/41589) [Bug]: /vertex_ai/live cost/logging doesn't resolve model_group_alias
- [#41405](https://github.com/BerriAI/litellm/issues/41405) [Feature]: support logging_only mode on litellm_content_filter
- [#41081](https://github.com/BerriAI/litellm/issues/41081) [Bug]: Responses WebSocket drops deployment custom_llm_provider before provider resolution
- [#41382](https://github.com/BerriAI/litellm/issues/41382) [Bug]: Anthropic input_transformations (preserved-thinking drop report) is dropped from the logged response — s3_v2 / spend logs never record thinking_dropped
- [#39394](https://github.com/BerriAI/litellm/issues/39394) [Bug]: /team/list omits a user's member teams in other orgs when they hold org_admin anywhere (_authorize_and_filter_teams if/elif)
- [#39280](https://github.com/BerriAI/litellm/issues/39280) [Bug]: when an openai/<model> declares supports_reasoning=true in its model metadata, allow reasoning_effort and pass its value through unchanged.
- [#38927](https://github.com/BerriAI/litellm/issues/38927) [Bug]: `langfuse_tags` header crashes router retry/fallback on deployments with `litellm_credential_name` (400 instead of failover)
- [#38033](https://github.com/BerriAI/litellm/issues/38033) [Bug]: POST /credentials lets a non-admin replace a config.yaml-defined credential by reusing its name
- [#38022](https://github.com/BerriAI/litellm/issues/38022) websearch_interception: Responses follow-up crashes with duplicate prompt_cache_key
- [#38011](https://github.com/BerriAI/litellm/issues/38011) [Feature]: Allow rebates per "sub-providers"
- [#37973](https://github.com/BerriAI/litellm/issues/37973) [Bug]: Gemini receives the previous turn's reasoning twice when an assistant message has both reasoning_content and a signed thinking block
- [#37866](https://github.com/BerriAI/litellm/issues/37866) [Bug]: cache_control blocks silently dropped when routing through SAP AI Core Orchestration (sap/ prefix)
- [#37805](https://github.com/BerriAI/litellm/issues/37805) [Bug]: RetryPolicy.InternalServerErrorRetries is silently ignored in get_num_retries_from_retry_policy
- [#37567](https://github.com/BerriAI/litellm/issues/37567) [Bug]: generateContent bridge drops functionDeclarations.parameters, so tool schemas are silently lost for non-Gemini providers
- [#37137](https://github.com/BerriAI/litellm/issues/37137) [Bug]: Proxy shutdown always fails with AttributeError when Redis cluster mode is enabled (async_redis_conn_pool is None)
- [#35904](https://github.com/BerriAI/litellm/issues/35904) Four Vertex AI MaaS models have incorrect prices in model_prices_and_context_window.json
- [#35608](https://github.com/BerriAI/litellm/issues/35608) [Bug]: databricks cost_calculator ignores cached/audio/reasoning tokens (hand-rolled instead of generic_cost_per_token)
- [#35344](https://github.com/BerriAI/litellm/issues/35344) Add "kimi k3" in "model_prices_and_context_window.json"
- [#35061](https://github.com/BerriAI/litellm/issues/35061) [Bug]: Anthropic /v1/messages with max_tokens=1 fails for GPT-5.x models, breaking Claude Code /model
- [#47638](https://github.com/BerriAI/litellm/issues/47638) [Feature]: Declare encryption-boundary peers for encrypted_content_affinity (model_info.encrypted_content_boundary)

### Unsloth (`unslothai/unsloth`)

**Stars:** 79,259 · **Open issues:** 522 · **Last push:** <1h ago

On November 10, 2026, Unsloth did not release any new versions but saw significant progress with the merging of several pull requests aimed at enhancing the Studio environment. Noteworthy changes include improvements to the long-chat gate that optimize performance on CPU and GPU, such as the implementation of an int8 ConvRot quantization under the span forward (#17337) and enhancements to the browser pane for smoother operation without React's Suspense (#17335). Additionally, issues related to Windows installations and chat code coloring were addressed, ensuring a more streamlined user experience. Among the new issues, a highlighted bug (#17295) involves video uploads being blocked for custom OpenAI-compatible connections, indicating a need for urgent attention.

#### ✅ Merged PRs
- [#17337](https://github.com/unslothai/unsloth/pull/17337) Studio: share the FLUX.3 joint block int8 ConvRot quant under the span forward
- [#17336](https://github.com/unslothai/unsloth/pull/17336) Long-chat gate: block on CPU / paint growth with chat length, judged on fresh-page rechecks
- [#17335](https://github.com/unslothai/unsloth/pull/17335) Studio: open the browser pane without React's Suspense reveal hold
- [#17334](https://github.com/unslothai/unsloth/pull/17334) Studio ROCm RDNA int8: Triton W8A8 kernels and fused Qwen-Image-2.1 projections (gfx1151 INT8 -12% per step, explicit int8 -26% to -34%)
- [#17331](https://github.com/unslothai/unsloth/pull/17331) Studio CI: WebKit leg for the long-chat gate, report-only paint / CPU length check, recheck gap fixed
- [#16959](https://github.com/unslothai/unsloth/pull/16959) Fix Windows wallpaper titlebar and Transparent glass surfaces
- [#16975](https://github.com/unslothai/unsloth/pull/16975) Unsloth Studio: restyle a video with Cosmos3-Nano-Sim-Transfer on sd-server
- [#17327](https://github.com/unslothai/unsloth/pull/17327) Studio: WebKitGTK Glass drops the sidebar's live blur and Frosted's grain tile (long-chat scroll)
- [#17284](https://github.com/unslothai/unsloth/pull/17284) Studio: modal opens stop re-laying out long chats in WebKit
- [#17323](https://github.com/unslothai/unsloth/pull/17323) Studio: key group hover / focus-within / active on the group class (WebKit long-chat menus and dialogs)
- [#17160](https://github.com/unslothai/unsloth/pull/17160) Studio: colour chat code blocks from the worker while scrolling and streaming
- [#17325](https://github.com/unslothai/unsloth/pull/17325) Studio ROCm TunableOp: label the results file with the HIP build string, not a raw read
- [#17319](https://github.com/unslothai/unsloth/pull/17319) Windows install: keep typer below 0.29 so studio setup does not hold pydantic_core open
- [#17282](https://github.com/unslothai/unsloth/pull/17282) Studio: browser pane opens without per-frame thread work on long chats
- [#17305](https://github.com/unslothai/unsloth/pull/17305) Studio: stream a reply without re-rendering every message client per token
- [#17174](https://github.com/unslothai/unsloth/pull/17174) Studio: keep the view_image picture visible when its tool card is collapsed
- [#17308](https://github.com/unslothai/unsloth/pull/17308) Studio: Glass Settings pane scrolls on the compositor; API monitor fade pauses its blur (software compositing)
- [#17304](https://github.com/unslothai/unsloth/pull/17304) Studio: title tooltips stop walking the whole thread on every pointer move
- [#16754](https://github.com/unslothai/unsloth/pull/16754) Use one glass surface for the docked Windows browser
- [#17310](https://github.com/unslothai/unsloth/pull/17310) Studio diffusion: keep the fused AdaLN census out of compiled FLUX.1 blocks (recompile limit on first render)
- [#17276](https://github.com/unslothai/unsloth/pull/17276) Studio native diffusion: run the text encoders on a second CUDA card when one card cannot hold the load
- [#17262](https://github.com/unslothai/unsloth/pull/17262) Long-chat gate: measure every appearance setting or allowlist it with a reason
- [#17269](https://github.com/unslothai/unsloth/pull/17269) Long-chat gate: measure streaming a reply into the chat
- [#17274](https://github.com/unslothai/unsloth/pull/17274) Long-chat gate: settle pointer targets before a trusted hover or click
- [#17299](https://github.com/unslothai/unsloth/pull/17299) Studio ROCm: use the measured fastest GEMM solution table for diffusion denoisers on gfx1151
- [#17317](https://github.com/unslothai/unsloth/pull/17317) Studio tests: skip the FLUX.3 group-offload test where diffusers is not installed
- [#17278](https://github.com/unslothai/unsloth/pull/17278) Studio diffusion: split the batch across two cards for LTX-2, Chroma, Qwen-Image, HunyuanImage and Krea-2, and pair Cosmos 3 guidance
- [#17309](https://github.com/unslothai/unsloth/pull/17309) Studio tests: pin the H3 cached-prequant lookup offline and cover the online twin rule
- [#17290](https://github.com/unslothai/unsloth/pull/17290) Studio diffusion: auto attention keeps native flash SDPA on A100 / L4 class cards
- [#14854](https://github.com/unslothai/unsloth/pull/14854) Studio CFG-parallel: treat an NVFP4 precision-state flip as a cold call so the two branches never compile at once
- [#15240](https://github.com/unslothai/unsloth/pull/15240) Studio: serve the hosted Wan2.2-A14B int8 pair to an offloaded load as torchao-free W8A8 layers
- [#17122](https://github.com/unslothai/unsloth/pull/17122) Studio: give FLUX.3's per-mode block stacks their own offload groups (5 GiB L4 int8: -17.6% per image)
- [#16548](https://github.com/unslothai/unsloth/pull/16548) Make shared composer drafts opt-in
- [#17293](https://github.com/unslothai/unsloth/pull/17293) Studio tests: stub stt-context when mic-target loads the voice settings store
- [#17061](https://github.com/unslothai/unsloth/pull/17061) Studio: load image / video / text-encoder weights from .safetensors first, reuse a cached .pt / .bin when its sha256 matches the Hub
- [#17252](https://github.com/unslothai/unsloth/pull/17252) Studio ROCm VAE attention: math SDPA in the VAE's bf16/fp16 dtype, not an fp32 upcast
- [#14655](https://github.com/unslothai/unsloth/pull/14655) Studio ROCm layer split: probe secondary cards read-only, at the attention dtype
- [#17244](https://github.com/unslothai/unsloth/pull/17244) gloo-tp tests: a rank that finished is not failed by an abort in interpreter teardown
- [#17253](https://github.com/unslothai/unsloth/pull/17253) Studio: bake the blurred chat wallpaper once instead of re-running the blur on every scroll frame
- [#16976](https://github.com/unslothai/unsloth/pull/16976) [Feature] Unsloth Studio / Desktop: let the mic send audio straight to any audio-input model
- [#16111](https://github.com/unslothai/unsloth/pull/16111) Condense comments added since the last cleanup: core, CLI and tests
- [#16110](https://github.com/unslothai/unsloth/pull/16110) Condense comments added since the last cleanup: Studio backend
- [#17237](https://github.com/unslothai/unsloth/pull/17237) Studio: pause Glass blur through bursts of keys and presses under software compositing
- [#17238](https://github.com/unslothai/unsloth/pull/17238) Studio video: run LTX-2.5 FP8 on a 24 GB card by streaming the hosted fp8 DiT instead of refusing it
- [#14472](https://github.com/unslothai/unsloth/pull/14472) Fix file drops in new project chats
- [#15810](https://github.com/unslothai/unsloth/pull/15810) Add configurable voice context to reduce Qwen3-ASR memory
- [#16877](https://github.com/unslothai/unsloth/pull/16877) Studio MiniMax-H3: keep the released bf16 denoiser resident beside a streamed conditioner on ~100 GB cards
- [#16901](https://github.com/unslothai/unsloth/pull/16901) Studio update: stop size-checking the managed Windows launcher
- [#16112](https://github.com/unslothai/unsloth/pull/16112) Condense comments added since the last cleanup: installers, scripts and CI
- [#16109](https://github.com/unslothai/unsloth/pull/16109) Condense comments added since the last cleanup: Studio frontend and Tauri
- [#17077](https://github.com/unslothai/unsloth/pull/17077) Studio LTX-2.5: use two CUDA cards, the sidecar text encoder priced on its own card
- [#16915](https://github.com/unslothai/unsloth/pull/16915) Studio chat: only a note followed by its wrapper starts an attachment
- [#17233](https://github.com/unslothai/unsloth/pull/17233) Studio diffusion: price a streamed Qwen-Image-2.1 edit's reference from its token count, not the flat allowance (A100 8 GiB edit -15%, ahead of the baseline)
- [#17230](https://github.com/unslothai/unsloth/pull/17230) Studio: fuse the int8 ConvRot rotation into its producers on FLUX.2 / FLUX.3 (ConvRot cost +8.7% to +0.5%)
- [#17178](https://github.com/unslothai/unsloth/pull/17178) Studio: keep single-file int8 denoiser weights as int8 on CPU instead of expanding them to float32
- [#17229](https://github.com/unslothai/unsloth/pull/17229) Studio: load INT8 instead of NVFP4 on pre-Blackwell GPUs
- [#17232](https://github.com/unslothai/unsloth/pull/17232) Studio LTX-2.5: compact conditioning transport and stage-two connector reuse
- [#17018](https://github.com/unslothai/unsloth/pull/17018) Studio RAG: pause linked-folder indexing while a local chat generates
- [#17019](https://github.com/unslothai/unsloth/pull/17019) Studio: save Image LoRA training settings as presets
- [#17010](https://github.com/unslothai/unsloth/pull/17010) Studio: stop the Windows Terminal from creating nul files through Git Bash
- [#17218](https://github.com/unslothai/unsloth/pull/17218) Studio: run FP8 on T4 and other Turing GPUs as weight-only fp8 instead of refusing it
- [#17149](https://github.com/unslothai/unsloth/pull/17149) Studio: hold mid-scroll code block work on WebKit, fixing the #16865 scroll regression
- [#17042](https://github.com/unslothai/unsloth/pull/17042) Studio: open Settings and the shortcuts list with one panel render and one focus move
- [#17035](https://github.com/unslothai/unsloth/pull/17035) Studio: stop the autoscroll follow flag restyling the whole thread in WebKit
- [#17007](https://github.com/unslothai/unsloth/pull/17007) Studio: drop the live Glass blur while anything moves, on software-composited pages
- [#17222](https://github.com/unslothai/unsloth/pull/17222) Studio: a streamed GGUF denoiser's top-level weights re-point to their host copy instead of copying back every step (FLUX.3 Q8_0 T4: -11% per image)
- [#17192](https://github.com/unslothai/unsloth/pull/17192) Studio diffusion: keep Qwen-Image-2.1 scoped LoRA prompt reuse after the no-K/V wrapper, and key callable helpers fully
- [#17180](https://github.com/unslothai/unsloth/pull/17180) Studio FLUX.3: pass cuDNN attention the projections' strided Q/K/V instead of contiguous copies
- [#17212](https://github.com/unslothai/unsloth/pull/17212) RoPE: no recompile per sequence length when a compiled backward hands over a seq-major gradient
- [#17193](https://github.com/unslothai/unsloth/pull/17193) Studio small-host INT8: armed layers compile once (eager-only call counters, follow-up to #17167)
- [#17234](https://github.com/unslothai/unsloth/pull/17234) Tool activity gate: wait for each card to open before reading it, not a fixed sleep
- [#17197](https://github.com/unslothai/unsloth/pull/17197) Studio Qwen-Image-2.1: encode a condition image again after load_state_dict(assign=True) on its VAE
- [#17181](https://github.com/unslothai/unsloth/pull/17181) Studio FLUX.3: keep reference-image modulation at one row per span in the joint blocks
- [#17219](https://github.com/unslothai/unsloth/pull/17219) Studio FLUX.3: price float32 compute on fp16-only GPUs from the measured activation table (x2), so a GGUF Q4 denoiser stays resident on a T4
- [#17228](https://github.com/unslothai/unsloth/pull/17228) Studio FLUX.3 on fp16-only GPUs: an explicit INT8 / FP8 quant reads the bf16 checkpoint as stored instead of widening the transformer to float32
- [#17223](https://github.com/unslothai/unsloth/pull/17223) Studio FLUX.3: run attention in float16 on fp16-only GPUs (T4: -15% per image GGUF, -34% INT8)
- [#17217](https://github.com/unslothai/unsloth/pull/17217) Studio: give each rotated native int8 Linear its own ConvRot buffer (FLUX.3 INT8 on T4 failed its first render)
- [#17201](https://github.com/unslothai/unsloth/pull/17201) Studio FLUX.3 manual cast: keep LoRA adapters at the fp32 compute dtype and out of the bf16 fold
- [#17191](https://github.com/unslothai/unsloth/pull/17191) Studio LoRA fuse: charge the host RAM guard what the pinned backup really holds
- [#17177](https://github.com/unslothai/unsloth/pull/17177) Studio diffusion: keep Qwen-Image-2.1 CFG pairing through its first-render compile
- [#17227](https://github.com/unslothai/unsloth/pull/17227) Studio: export chats as HTML and PDF
- [#17148](https://github.com/unslothai/unsloth/pull/17148) Studio sd.cpp: pin the prebuilt resynced with upstream master-1050
- [#17215](https://github.com/unslothai/unsloth/pull/17215) Studio: install FlashInfer 0.7.3 prebuilt kernels for diffusion NVFP4
- [#17194](https://github.com/unslothai/unsloth/pull/17194) Studio CUDA graphs: the sm_89 fp8 stream-K guard reads every split card, not only the primary (follow-up to #17166)
- [#17182](https://github.com/unslothai/unsloth/pull/17182) Studio FLUX.3 / Qwen-Image-2.1: prompt encodes keep only the hidden states they read
- [#17207](https://github.com/unslothai/unsloth/pull/17207) Studio diffusion: keep a streamed denoiser's blocks resident for the denoise phase, not the whole render (A100 8 GiB Qwen-Image-2.1 -18%, FLUX.3 -21 to -24%)
- [#17196](https://github.com/unslothai/unsloth/pull/17196) Studio compile cache: torch 2.7 keeps reused graphs in saved bundles (follow-up to #17110)
- [#17190](https://github.com/unslothai/unsloth/pull/17190) Studio MiniMax-H3: keep the conditioner read capture and tile decode traceable under torch.compile (#17095, #17097)
- [#17179](https://github.com/unslothai/unsloth/pull/17179) Studio LTX-2.5: auto text-encoder precision loads the hosted int8 ConvRot encoder
- [#17188](https://github.com/unslothai/unsloth/pull/17188) Studio: run Detailer inpaints on the image-generation pool
- [#17216](https://github.com/unslothai/unsloth/pull/17216) Studio: keep segment CUDA graphs on unprotected NVFP4 steps
- [#17226](https://github.com/unslothai/unsloth/pull/17226) Studio MiniMax-H3: keep the whole denoiser forward compilable with the render text cache (follow-up to #17203)
- [#17205](https://github.com/unslothai/unsloth/pull/17205) Compiled RoPE: keep per-tensor launches when only Q or K needs a gradient
- [#17214](https://github.com/unslothai/unsloth/pull/17214) Studio Qwen-Image-2.1: one GEMM for the dense gate + value and Q / K / V projections
- [#17202](https://github.com/unslothai/unsloth/pull/17202) Studio: decode the FLUX.2 / FLUX.3 VAE in row strips (36-43% less decode VRAM, same speed)
- [#17186](https://github.com/unslothai/unsloth/pull/17186) Studio diffusion: size CPU / MPS VAE decode tiles from free host memory (CPU 512 px decode 2.1x faster)
- [#17209](https://github.com/unslothai/unsloth/pull/17209) Studio: int8 ConvRot by default for FLUX.2 klein and FLUX.3 klein (LPIPS 0.10 to 0.04)
- [#17204](https://github.com/unslothai/unsloth/pull/17204) Studio GGUF: dequantise bit-identical to llama.cpp, rounded once to the compute dtype
- [#17221](https://github.com/unslothai/unsloth/pull/17221) Frontend CI: back off for minutes before giving up on the Bun download
- [#17085](https://github.com/unslothai/unsloth/pull/17085) Studio MiniMax-H3 Sol VAE: free expired Q/K/V slots before building the next, at most two live
- [#17070](https://github.com/unslothai/unsloth/pull/17070) Studio diffusion: read the XPU's float64 support from the device (Arc A-series LTX RoPE)
- [#17203](https://github.com/unslothai/unsloth/pull/17203) Studio MiniMax-H3: run the text stream once per render, pack the sequence in place, look up the streamed conditioner's vocabulary rows on the host
- [#17211](https://github.com/unslothai/unsloth/pull/17211) Backend CI: back off for about five minutes before giving up on the ruff-unsloth wheel
- [#17143](https://github.com/unslothai/unsloth/pull/17143) Studio: read the hosted LTX-2.5 int8 checkpoint when the load's own plan offloads the denoiser
- [#17187](https://github.com/unslothai/unsloth/pull/17187) Backend CI: split the g-r pytest shard into g-l and m-r
- [#17154](https://github.com/unslothai/unsloth/pull/17154) Studio: no header strips on macOS glass or over a plain background image
- [#17184](https://github.com/unslothai/unsloth/pull/17184) Studio diffusion: reload a released text encoder from its own safetensors files, no snapshot write
- [#17185](https://github.com/unslothai/unsloth/pull/17185) Context parallel: patch DPO / GRPO even when context_parallel is imported before the models
- [#17195](https://github.com/unslothai/unsloth/pull/17195) Studio tests: the two-card compiled W8A8 test judges each card on its own arch (follow-up to #17078)
- [#17189](https://github.com/unslothai/unsloth/pull/17189) Studio tests: make the compiled-wrapper onload test hold its own weakref (follow-up to #17141)

#### 🐛 New Issues
- [#17297](https://github.com/unslothai/unsloth/issues/17297) [Feature] Studio: persist "Full access" permission mode (session-only today) 💬1
- [#17235](https://github.com/unslothai/unsloth/issues/17235) [Bug] Linux Forced to use CPU instead of GPU `feature request` `bug` 💬1
- [#17333](https://github.com/unslothai/unsloth/issues/17333) [Feature] Please add Batches for New Chat `feature request`
- [#17332](https://github.com/unslothai/unsloth/issues/17332) [Bug] Chat: `Regenerate title` just copy a piece of my last message `feature request` `bug`
- [#17315](https://github.com/unslothai/unsloth/issues/17315) [Bug] Hermes launcher credential provisioning correctness with api key in yaml `feature request` `bug`
- [#17292](https://github.com/unslothai/unsloth/issues/17292) Managed account: Custom Folder browser returns 403 immediately on opening `feature request` `bug`
- [#17295](https://github.com/unslothai/unsloth/issues/17295) [Bug] Video upload blocked for custom OpenAI-compatible connection `feature request` `bug`

#### 🔒 Closed Issues
- [#16574](https://github.com/unslothai/unsloth/issues/16574) [Feature] Background Image should also shown in chatting + Ability to set Search bar at bottom in New Chat
- [#16897](https://github.com/unslothai/unsloth/issues/16897) [BUG] beta Update fails
- [#16913](https://github.com/unslothai/unsloth/issues/16913) Studio chat: an attached file whose content looks like an attachment note is parsed as a second attachment
- [#16992](https://github.com/unslothai/unsloth/issues/16992) [Feature] Project indexing should have a pause button or dynamic ressource management
- [#16979](https://github.com/unslothai/unsloth/issues/16979) [Feature] Support custom templates (profiles) for Image-LoRA training settings
- [#16991](https://github.com/unslothai/unsloth/issues/16991) [Bug] Please stop adding nul files to the working directory
- [#17235](https://github.com/unslothai/unsloth/issues/17235) [Bug] Linux Forced to use CPU instead of GPU
- [#16056](https://github.com/unslothai/unsloth/issues/16056) [Feature] Direct Microphone Input for Audio-Accepting Models

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,183 · **Open issues:** 406 · **Last push:** 2h ago

On November 10, 2026, AIBrix did not release any new versions; however, several important pull requests were merged. Notable updates include a fix addressing floating-point errors in the KPA and APA pod counts (PR #3401), and a feature that allows routing candidate selection under a single K, ranked by in-memory estimates (PR #3353). Additionally, issues related to preserving error bodies in streamed responses were resolved (PR #3382), and documentation clarifying what the value 0 signifies in decode abort profile fields was updated (PR #3421). Among new issues, #3434 has emerged as a significant concern, highlighting that PodArray still sorts the shared pod snapshot in place despite previous discussions and requests for a fix.

#### ✅ Merged PRs
- [#3401](https://github.com/vllm-project/aibrix/pull/3401) [Bug] Keep KPA and APA pod counts exact under floating-point error
- [#3353](https://github.com/vllm-project/aibrix/pull/3353) [Feat] Pick routing candidates under a single K, ranked by each strategy's in-memory estimate
- [#3421](https://github.com/vllm-project/aibrix/pull/3421) [Docs] Fix what 0 means for the decode abort profile fields
- [#3382](https://github.com/vllm-project/aibrix/pull/3382) [Bug] Preserve chunked upstream error bodies in streamed responses

#### 🐛 New Issues
- [#3434](https://github.com/vllm-project/aibrix/issues/3434) [Bug] PodArray still sorts the shared pod snapshot in place: #2741 was closed without a fix `kind/bug` `area/gateway` `triage/accepted` `bug` 💬3
- [#3439](https://github.com/vllm-project/aibrix/issues/3439) [Bug] KPA and APA skip a failed metric source, so the remaining sources can scale the target down `kind/bug` `area/orchestration` 💬1
- [#3428](https://github.com/vllm-project/aibrix/issues/3428) [Bug] ModelWarmup reports control-plane exclusion as namespace authorization failure `kind/bug` `area/orchestration` 💬1
- [#3433](https://github.com/vllm-project/aibrix/issues/3433) [RFC]: Runtime Manager For Durable Runtime Lifecycle Reconciliation `area/batch`

#### 🔒 Closed Issues
- [#3386](https://github.com/vllm-project/aibrix/issues/3386) [Bug] KPA and APA round scale-rate limits past the configured rate, so 50 pods at 1.1 can scale to 56

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,436 · **Open issues:** 630 · **Last push:** 1h ago

On November 10, 2026, there were no new releases for Semantic Router, but a significant merged pull request, #6061, improved the continuous integration by building fake secrets for the redactor test at runtime. Additionally, the day saw several new issues raised, notably issue #6022, which proposes the addition of a zentorch CPU backend for linear and attention kernel slots, garnering attention with four comments. Other notable new issues include #6052, focusing on localizing the search palette in the zh-Hans site, and #6067, which reports a bug where streamed answers ignore a missing delegated credential. Overall, the day involved routine maintenance with a focus on enhancing documentation and addressing various bugs and features under discussion.

#### ✅ Merged PRs
- [#6061](https://github.com/vllm-project/semantic-router/pull/6061) [CI/Build] Build the redactor test's fake secrets at run time

#### 🐛 New Issues
- [#6022](https://github.com/vllm-project/semantic-router/issues/6022) [Feature] Model runtime: zentorch CPU backend for the linear and attention kernel slots `enhancement` `needs-acceptance` `wg/router-models-inference-runtime` 💬4
- [#6025](https://github.com/vllm-project/semantic-router/issues/6025) [Docs] Localize the search palette in the zh-Hans site `accepted` `wg/developer-experience-ecosystem` `documentation` 💬3
- [#6052](https://github.com/vllm-project/semantic-router/issues/6052) [Feature] Reduce latency of cached audio embeddings `enhancement` `accepted` `wg/router-models-inference-runtime` 💬2
- [#6026](https://github.com/vllm-project/semantic-router/issues/6026) [Docs] Restore zh-Hans text in the Team page and shared Community navigation `accepted` `wg/developer-experience-ecosystem` `documentation` 💬2
- [#6067](https://github.com/vllm-project/semantic-router/issues/6067) [Bug] Streamed answers ignore a missing delegated credential `bug` `accepted` `wg/data-plane-networking` 💬1
- [#6073](https://github.com/vllm-project/semantic-router/issues/6073) [Feature] Move the vSR Claude Code plugin to integrations/coding-agents/, a home for coding-agent integrations `enhancement` `accepted` `wg/developer-experience-ecosystem` 💬1
- [#6068](https://github.com/vllm-project/semantic-router/issues/6068) [Bug] config migrate changes which decisions retrieve memory `bug` `accepted` `wg/mom-routing` 💬1
- [#6065](https://github.com/vllm-project/semantic-router/issues/6065) [Bug] A tools select match without a judge crashes the config load `bug` `accepted` `wg/mom-routing` 💬1
- [#6064](https://github.com/vllm-project/semantic-router/issues/6064) [Bug] Responses: include:["reasoning.encrypted_content"] is accepted, but replaying the returned reasoning item fails `bug` `accepted` `wg/data-plane-networking` 💬1
- [#6066](https://github.com/vllm-project/semantic-router/issues/6066) [Bug] previous_response_id history is silently truncated when an ancestor expired `bug` `accepted` `wg/data-plane-networking` 💬1
- [#6074](https://github.com/vllm-project/semantic-router/issues/6074) [Bug] config migrate drops the model names a release served by default `bug` `needs-acceptance` 💬1
- [#6070](https://github.com/vllm-project/semantic-router/issues/6070) [Bug] The response guard never reads an executor decision's answer `bug` `needs-acceptance` 💬1
- [#6069](https://github.com/vllm-project/semantic-router/issues/6069) [Bug] A question that fails in one batch entry fails in every entry `bug` `needs-acceptance` 💬1
- [#6046](https://github.com/vllm-project/semantic-router/issues/6046) [CI/Build] Declare the Netlify production docs build recipe in the repository `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬1
- [#6051](https://github.com/vllm-project/semantic-router/issues/6051) probe (will delete) `needs-acceptance`
- [#6050](https://github.com/vllm-project/semantic-router/issues/6050) [Bug] vSR: guard and redact stopped recording for five hours under CPU load, with no offline notice `bug` `needs-acceptance` `wg/developer-experience-ecosystem`
- [#6049](https://github.com/vllm-project/semantic-router/issues/6049) [Feature] vSR: let the /vsr pane scroll through every decision it keeps `enhancement` `needs-acceptance` `wg/developer-experience-ecosystem`
- [#6037](https://github.com/vllm-project/semantic-router/issues/6037) [Blog]: vSR, vLLM Semantic Router inside Claude Code

#### 🔒 Closed Issues
- [#4883](https://github.com/vllm-project/semantic-router/issues/4883) [Bug] The model_eval inventory ignores decision_model deployment bindings
- [#5965](https://github.com/vllm-project/semantic-router/issues/5965) [Bug] A repeated [DONE] sentinel turns a completed Chat stream into a server_error frame
- [#6025](https://github.com/vllm-project/semantic-router/issues/6025) [Docs] Localize the search palette in the zh-Hans site
- [#5958](https://github.com/vllm-project/semantic-router/issues/5958) [Bug] GET /api/v1/config returns listeners[].api_keys in plaintext to read-only roles
- [#5957](https://github.com/vllm-project/semantic-router/issues/5957) [Bug] Deeply nested DSL parentheses overflow the goroutine stack and kill the dashboard backend
- [#6015](https://github.com/vllm-project/semantic-router/issues/6015) [Test] The API overview test stopped checking the documented endpoints
- [#6006](https://github.com/vllm-project/semantic-router/issues/6006) [Bug] setup-kind hides a failed Kind download as Exec format error
- [#5996](https://github.com/vllm-project/semantic-router/issues/5996) [Bug] vllm-sr config migrate drops providers.models[].deployment
- [#5998](https://github.com/vllm-project/semantic-router/issues/5998) [Bug] K8s reconcile still resets explicit 0 to defaults for response_api, memory and flow state
- [#5991](https://github.com/vllm-project/semantic-router/issues/5991) [Bug] Operator reads any failed route.openshift.io List as OpenShift and caches it for the process lifetime
- [#5989](https://github.com/vllm-project/semantic-router/issues/5989) [Bug] Dashboard router contract allows POST /api/v1/diagnostics/nli, which the router no longer serves
- [#5949](https://github.com/vllm-project/semantic-router/issues/5949) [Feature] Ship vSR, a Claude Code plugin that runs the decision model inside the harness
- [#5885](https://github.com/vllm-project/semantic-router/issues/5885) [Feature] Make the decision model the first-class model for intelligent routing
- [#5222](https://github.com/vllm-project/semantic-router/issues/5222) [Bug] The production docs site still serves a pre-10-06 build

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*