# 📡 AI Ecosystem Digest — 2026-09-19

> Generated 2026-09-19 01:00 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 146,300 | 32 | 2 | 5 | 2 |
| [OpenAI Codex](https://github.com/openai/codex) | 125,156 | 22 | 0 | 49 | 6 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 107,072 | 0 | 0 | 6 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,184 | 11 | 12 | 0 | 1 |
| [OpenCode](https://github.com/anomalyco/opencode) | 208,460 | 32 | 4 | 17 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 27,968 | 31 | 16 | 0 | 2 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 390,059 | 253 | 89 | 218 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 246,918 | 35 | 4 | 2 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 92,126 | 35 | 22 | 45 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 36,152 | 14 | 15 | 47 | 1 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 128,735 | 14 | 14 | 18 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 181,231 | 10 | 7 | 3 | 1 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 59,109 | 33 | 24 | 103 | 1 |
| [Unsloth](https://github.com/unslothai/unsloth) | 76,393 | 9 | 4 | 58 | 1 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,097 | 1 | 1 | 4 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 5,859 | 12 | 13 | 11 | 0 |

---

## ✨ Highlights

- **Claude Code** released version [v2.1.277](https://github.com/anthropics/claude-code/releases/tag/v2.1.277), introducing updates to the AI CLI tool.  
- **OpenAI Codex** had multiple releases including [rust-v0.156.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.156.0-alpha.5), enhancing its capabilities.  
- **Ollama** released version [v0.34.3-rc0](https://github.com/ollama/ollama/releases/tag/v0.34.3) with various improvements and bug fixes.  
- A notable new issue in **OpenAI Codex**, [#46398](https://github.com/openai/codex/issues/46398), has garnered significant attention with 10 comments regarding unexpected HTTP errors.  
- **OpenClaw** has attracted user concern with issue [#152252](https://github.com/openclaw/openclaw/issues/152252), reporting a critical bug related to config write stamps, generating 6 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 146,300 · **Open issues:** 12,433 · **Last push:** <1h ago

On September 19, 2026, Claude Code released v2.1.277, introducing support for AGENTS.md in lieu of CLAUDE.md for project instructions and adding a configuration option for gateways operating behind a forward proxy. This version also fixed a regression in v2.1.276 that caused requests to fail with a 400 error when the `ANTHROPIC_BASE_URL` pointed to a proxy. Significant merged pull requests included improvements to the handling of AGENTS.md and enhancements to the repository diff experience. On the issues front, a notable bug (#95489) reported that the desktop app was experiencing excessive retries with fswatch-probe, leading to significant system resource leaks.

#### 🚀 New Releases
- [v2.1.277](https://github.com/anthropics/claude-code/releases/tag/v2.1.277) v2.1.277
- [v2.1.276](https://github.com/anthropics/claude-code/releases/tag/v2.1.276) v2.1.276

#### ✅ Merged PRs
- [#95488](https://github.com/anthropics/claude-code/pull/95488) diff: a docked pane reads the repository before it opens, so it never lands on Loading diff
- [#95476](https://github.com/anthropics/claude-code/pull/95476) diff: the first edit opens the pane only from the main loop with checkpointing on, and an open the engine leaves waiting is withdrawn
- [#95198](https://github.com/anthropics/claude-code/pull/95198) mods/diff: type openPane's answer as unknown so a richer $.ui.open result compiles
- [#95417](https://github.com/anthropics/claude-code/pull/95417) mods/agents-md: a Read attaches no nested AGENTS.md where the engine attaches nothing to a turn
- [#95409](https://github.com/anthropics/claude-code/pull/95409) mods/agents-md: the AGENTS.md project-instructions mod

#### 🐛 New Issues
- [#95264](https://github.com/anthropics/claude-code/issues/95264) Windows: Claude desktop app window intermittently gets stuck as always-on-top (WS_EX_TOPMOST) `invalid` `platform:windows` `area:desktop` 💬3
- [#95455](https://github.com/anthropics/claude-code/issues/95455) [BUG] 2.1.277: excludedCommands "every part must match" also drops single commands carrying a pre-subcommand flag (git -C, -c, --git-dir) `bug` `has repro` `api:vertex` `platform:linux` 💬3
- [#95367](https://github.com/anthropics/claude-code/issues/95367) [BUG] No disk-sourced skills load in 2.1.271 — user skills and enabled-plugin skills both absent; only bundled skills register `bug` `has repro` `platform:macos` `regression` 💬2
- [#95489](https://github.com/anthropics/claude-code/issues/95489) [BUG] Windows/MSIX Desktop: bundled Claude Code engine retries a failing fswatch-probe open ~38,000x/s forever, leaking ntfs.sys NtFC nonpaged pool ~230 MB/min until reboot (workaround: CLAUDE_CODE_TMPDIR) `bug` `has repro` `platform:windows` `perf:memory` 💬1
- [#95485](https://github.com/anthropics/claude-code/issues/95485) Desktop (Linux): Code tab session started without a project folder runs in a throwaway scratch workspace, silently disabling SessionStart hooks `bug` `has repro` `platform:linux` `area:hooks` 💬1
- [#95472](https://github.com/anthropics/claude-code/issues/95472) Desktop app: folder picker "Recent" list capped at 8 (was 20+), and scheduled routines crowd out real projects `bug` `has repro` `platform:windows` `regression` 💬1
- [#95478](https://github.com/anthropics/claude-code/issues/95478) claude:// session deep link opens app but not the specific session (Remote Control "local" session) `bug` `platform:ios` 💬1
- [#95479](https://github.com/anthropics/claude-code/issues/95479) [Bug] Classifier over-triggering false positives in tool execution validation `bug` `platform:macos` `area:permissions` 💬1
- [#95442](https://github.com/anthropics/claude-code/issues/95442) [Bug] Artifact version picker missing from Share menu `bug` `platform:windows` `area:claude-code-web` 💬1
- [#95345](https://github.com/anthropics/claude-code/issues/95345) [BUG] Implementer sub-agent modified production authentication (login/MFA) to make a test pass — undisclosed except in a footnote `bug` `platform:macos` `area:model` `area:agents` 💬1
- [#95492](https://github.com/anthropics/claude-code/issues/95492) [Bug] Claude provides inaccurate scientific analysis with false confidence and resists correction `bug` `platform:windows` `area:model`
- [#95491](https://github.com/anthropics/claude-code/issues/95491) [BUG] Remote Control is not restored for sessions killed by a stealth auto-update `bug` `platform:windows` `area:desktop`
- [#95490](https://github.com/anthropics/claude-code/issues/95490) [Bug] Content filter blocks "cyber" keyword in project names `bug` `platform:macos` `area:model`
- [#95487](https://github.com/anthropics/claude-code/issues/95487) [BUG] "Last updated" refresh does not update the remaining credit `bug` `area:cost` `platform:web`
- [#95486](https://github.com/anthropics/claude-code/issues/95486) [Bug] All API requests reporting errors regardless of input `bug` `needs-info`
- [#95484](https://github.com/anthropics/claude-code/issues/95484) [BUG] Single ~60 MB file upload writes one oversized transcript entry; session then never loads (blank window, Windows desktop) `bug` `has repro` `platform:windows` `area:desktop`
- [#95483](https://github.com/anthropics/claude-code/issues/95483) [Bug] [cyber] safety classifier stopped 7+ turns across 3 sessions while building my own home camera system on my own LAN (Opus 5 and Fable 5.1; Opus 4.8 unaffected) `bug` `platform:macos` `area:model` `api:anthropic`
- [#95482](https://github.com/anthropics/claude-code/issues/95482) [BUG] Exit hint prints `claude --resume "<title>"` for sessions the resume list hides (first user message is a slash command) `bug` `has repro` `platform:macos` `area:cli`
- [#95481](https://github.com/anthropics/claude-code/issues/95481) [Bug] Concurrent GitHub edits cause agent confusion with file state `bug` `platform:macos` `area:agents` `needs-info`
- [#95480](https://github.com/anthropics/claude-code/issues/95480) [MODEL] Treated a normal platform artifact as the bug symptom for ~2 hours without establishing a baseline `bug` `platform:windows` `area:model` `model`
- [#95477](https://github.com/anthropics/claude-code/issues/95477) Regression: sessions >30 days old lost history again after forced re-sign-in (previously fixed in 1.34493.0) `bug` `has repro` `platform:macos` `area:auth`
- [#95475](https://github.com/anthropics/claude-code/issues/95475) [Feature Request] Implement confidence calibration and evidence tracking for root-cause analysis in coding workflows `enhancement` `platform:linux` `area:model`
- [#95474](https://github.com/anthropics/claude-code/issues/95474) [BUG] Plugin account-upload is last-write-wins with no compare-and-swap, so concurrent sessions silently destroy each other's hook fixes `bug` `area:cowork` `platform:web` `area:plugins`
- [#95473](https://github.com/anthropics/claude-code/issues/95473) [FEATURE] No way to switch model at the plan-approval step in the Desktop app's Code tab `enhancement` `platform:windows` `area:ui` `area:desktop`
- [#95471](https://github.com/anthropics/claude-code/issues/95471) [Bug] Inactive terminal window scrolling disabled `bug` `platform:macos` `area:tui`
- [#95470](https://github.com/anthropics/claude-code/issues/95470) [Feature Request] Restore /low-priority command functionality `enhancement` `platform:linux` `area:cli`
- [#95469](https://github.com/anthropics/claude-code/issues/95469) [BUG] Stacked skills: only the first is treated as user-invoked, so a disable-model-invocation skill in position 2+ is refused `bug` `has repro` `platform:windows` `area:skills`
- [#95468](https://github.com/anthropics/claude-code/issues/95468) [Bug] Claude refusing legitimate security tasks due to overly strict safeguard filtering `bug` `platform:macos` `area:model` `needs-repro`
- [#95467](https://github.com/anthropics/claude-code/issues/95467) Worktree exit dialog offers "Remove worktree" for a worktree it will refuse to remove `bug` `has repro` `platform:macos` `area:tui`
- [#95466](https://github.com/anthropics/claude-code/issues/95466) iOS Simulator tool: touch/tap injection silently no-ops after Xcode 27 upgrade (Simulator.app replaced by headless DeviceHub) `bug` `platform:macos` `area:tools`
- [#95465](https://github.com/anthropics/claude-code/issues/95465) [BUG] A Stop hook's blocked reply is still shown to the user, so every retry reads as the assistant repeating itself `bug` `area:hooks` `area:cowork` `platform:web`
- [#95464](https://github.com/anthropics/claude-code/issues/95464) Desktop app: folder picker has no path input, and the diff pane is empty when the session root is not the edited git repo `bug` `platform:macos` `area:ui` `area:desktop`

#### 🔒 Closed Issues
- [#76953](https://github.com/anthropics/claude-code/issues/76953) [FEATURE]
- [#76960](https://github.com/anthropics/claude-code/issues/76960) Desktop app: no discoverable way to switch project/working folder for a new session

### OpenAI Codex (`openai/codex`)

**Stars:** 125,156 · **Open issues:** 17,785 · **Last push:** <1h ago

On September 19, 2026, OpenAI Codex released rust-v0.155.1, which introduced a key bug fix ensuring that new local TUI sessions have reasoning summaries disabled by default to avoid request rejections from incompatible providers. Additionally, several alpha versions of rust-v0.156.0 were released, culminating in alpha.5. Among the important merged pull requests, #46544 exposed declared onboarding skills in plugin details, while #46543 added bounded filesystem path diagnostics to `codex doctor`. Notably, a new issue (#46398) raised concerns about an unexpected access_programs.cyber parameter leading to HTTP 400 errors during normal operations, highlighting a potential area for urgent attention.

#### 🚀 New Releases
- [rust-v0.155.1](https://github.com/openai/codex/releases/tag/rust-v0.155.1) 0.155.1
- [rust-v0.156.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.156.0-alpha.5) 0.156.0-alpha.5
- [rust-v0.156.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.156.0-alpha.4) 0.156.0-alpha.4
- [rust-v0.156.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.156.0-alpha.3) 0.156.0-alpha.3
- [rust-v0.156.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.156.0-alpha.2) 0.156.0-alpha.2
- [rust-v0.155.0-alpha.9.2](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.9.2) 0.155.0-alpha.9.2

#### ✅ Merged PRs
- [#46544](https://github.com/openai/codex/pull/46544) Expose declared onboarding skills in plugin details
- [#46543](https://github.com/openai/codex/pull/46543) Add bounded filesystem path diagnostics to `codex doctor`
- [#46542](https://github.com/openai/codex/pull/46542) Add authenticated remote plugin measurement references
- [#46541](https://github.com/openai/codex/pull/46541) Add opt-in compaction after final responses
- [#46540](https://github.com/openai/codex/pull/46540) Centralize retry decisions and delays in `CodexErr`
- [#46539](https://github.com/openai/codex/pull/46539) Add a command-start callback for tool lifecycle extensions
- [#46535](https://github.com/openai/codex/pull/46535) Allow unrelated namespace mounts in Linux sandbox socket checks
- [#46534](https://github.com/openai/codex/pull/46534) Support `env_inherit` in `workspace_root_test`
- [#46533](https://github.com/openai/codex/pull/46533) Disable reasoning summaries by default for new TUI threads
- [#46532](https://github.com/openai/codex/pull/46532) Remove `com.apple.runningboard` from Seatbelt platform defaults
- [#46531](https://github.com/openai/codex/pull/46531) Preserve request-level reasoning effort for memory and title workers
- [#46530](https://github.com/openai/codex/pull/46530) Gate reasoning effort updates on explicit model support
- [#46529](https://github.com/openai/codex/pull/46529) Allow compatible feature overrides when starting the shared daemon
- [#46528](https://github.com/openai/codex/pull/46528) Bind executor plugin measurements to the trusted plugin version
- [#46527](https://github.com/openai/codex/pull/46527) Pin WinGet publishing dependencies in the release workflow
- [#46524](https://github.com/openai/codex/pull/46524) Retry busy executable launches in packaged daemon tests
- [#46523](https://github.com/openai/codex/pull/46523) Default local binding to true for MXC managed networking
- [#46522](https://github.com/openai/codex/pull/46522) Enable Guardian parent-compaction reuse by default
- [#46521](https://github.com/openai/codex/pull/46521) Use macOS member fallback in shared process-group termination helpers
- [#46519](https://github.com/openai/codex/pull/46519) Use paused time in sampler and model catalog timeout tests
- [#46518](https://github.com/openai/codex/pull/46518) Handle delayed process startup in the Guardian network approval test
- [#46517](https://github.com/openai/codex/pull/46517) Stabilize the TUI exit interruption test
- [#46516](https://github.com/openai/codex/pull/46516) Handle completion timing in the multi-agent resume test
- [#46514](https://github.com/openai/codex/pull/46514) Replay guardian checkpoints into a fresh session in tests
- [#46513](https://github.com/openai/codex/pull/46513) Rename `AgentControl` to `LocalAgentControl`
- [#46511](https://github.com/openai/codex/pull/46511) Avoid cloning excluded turn items during thread resume
- [#46512](https://github.com/openai/codex/pull/46512) Capture Guardian review checkpoints from live context
- [#46510](https://github.com/openai/codex/pull/46510) Avoid cloning active turn items for metadata-only thread resumes
- [#46509](https://github.com/openai/codex/pull/46509) Flush completed Guardian reviews before delivering decisions
- [#46508](https://github.com/openai/codex/pull/46508) Refresh the model catalog before turns after auth changes
- [#46507](https://github.com/openai/codex/pull/46507) Run Windows sandbox tests exclusively when local
- [#46506](https://github.com/openai/codex/pull/46506) Share ChatGPT cookies between HTTP and WebSocket transports
- [#46505](https://github.com/openai/codex/pull/46505) Support catalog parameter schemas for Multi-Agent V2 tools
- [#46504](https://github.com/openai/codex/pull/46504) Add six bundled TUI themes and theme-aware accents
- [#46503](https://github.com/openai/codex/pull/46503) Use catalog model display names throughout the TUI
- [#46501](https://github.com/openai/codex/pull/46501) Add configuration and feature diagnostics to report metadata
- [#46500](https://github.com/openai/codex/pull/46500) Block mutating fcntls in restricted macOS Seatbelt policies
- [#46499](https://github.com/openai/codex/pull/46499) Allow approved escalation with environment-owned network policies
- [#46498](https://github.com/openai/codex/pull/46498) Allow worktree sessions to use an existing local daemon
- [#46495](https://github.com/openai/codex/pull/46495) Preserve the provisioned macOS CLI's code-signing identity
- [#46494](https://github.com/openai/codex/pull/46494) Keep remote workspace roots under server control
- [#46493](https://github.com/openai/codex/pull/46493) Allow `/review` during MCP startup
- [#46492](https://github.com/openai/codex/pull/46492) Unify TUI tool output previews with a three-row limit
- [#46490](https://github.com/openai/codex/pull/46490) Compose gateway OAuth with primary provider authentication
- [#46488](https://github.com/openai/codex/pull/46488) Split analytics tests into focused suites
- [#46487](https://github.com/openai/codex/pull/46487) Keep TUI exploration grouped across reasoning and nonzero exits
- [#46486](https://github.com/openai/codex/pull/46486) Make TUI async question replies compatible with desktop
- [#46482](https://github.com/openai/codex/pull/46482) Handle unknown error classifications and configure gateway OAuth
- [#46467](https://github.com/openai/codex/pull/46467) [0.155 hotfix] Restore none as the TUI reasoning summary default

#### 🐛 New Issues
- [#46398](https://github.com/openai/codex/issues/46398) Unexpected access_programs.cyber parameter causes HTTP 400 during ordinary Codex work `bug` `CLI` `safety-check` 💬10
- [#46537](https://github.com/openai/codex/issues/46537) I can't access voice chat `bug` `windows-os` `auth` `app` 💬5
- [#46382](https://github.com/openai/codex/issues/46382) [Windows][26.915.31029] Account/profile APIs fail with status 432 "Workspace routing is unavailable" `bug` `windows-os` `auth` `app` 💬4
- [#46449](https://github.com/openai/codex/issues/46449) macOS: Cannot enable remote control after enabling authenticator MFA `bug` `auth` `app` `remote` 💬4
- [#46515](https://github.com/openai/codex/issues/46515) CLI 0.155.x: Windows sandbox fails for a non-admin user (sandbox users missing or incompatible with marker version); 0.154.0 works `bug` `windows-os` `sandbox` `CLI` 💬3
- [#46526](https://github.com/openai/codex/issues/46526) Windows: approved .git write grant remains ineffective; sandbox setup JSON EOF `bug` `windows-os` `sandbox` `app` 💬3
- [#46430](https://github.com/openai/codex/issues/46430) codex login removes the existing auth.json before the flow can succeed, so a failed login logs the user out `bug` `auth` `CLI` 💬3
- [#46520](https://github.com/openai/codex/issues/46520) chatgpt error `bug` `app` 💬2
- [#46497](https://github.com/openai/codex/issues/46497) The access_programs parameter is not enabled for this organization `bug` `windows-os` `CLI` `safety-check` 💬2
- [#46377](https://github.com/openai/codex/issues/46377) False-positive cybersecurity block during compiler development: “Daybreak isn’t available for Astra” `bug` `CLI` `safety-check` 💬2
- [#46545](https://github.com/openai/codex/issues/46545) VOICE CHAT `bug` `auth` `app` 💬1
- [#46478](https://github.com/openai/codex/issues/46478) Codex Desktop (Windows): bundled pwsh.exe invocations blocked at startup by Defender/AMSI (HackTool:PowerShell/ApexToolkit.A); matched content unknown `bug` `windows-os` `tool-calls` `app` 💬1
- [#46491](https://github.com/openai/codex/issues/46491) Allow Codex agents to read and update their current project's settings and instructions `enhancement` `app` `config` 💬1
- [#46485](https://github.com/openai/codex/issues/46485) Codex App hides a persistent task’s older conversation after reopening; messages remain in JSONL `bug` `app` `subagent` `session` 💬1
- [#46484](https://github.com/openai/codex/issues/46484) Native multi-provider model switching in Codex Desktop `enhancement` `custom-model` `app` 💬1
- [#46483](https://github.com/openai/codex/issues/46483) Daybreak isn’t available for Astra. Some cybersecurity requests may still be limited `bug` `CLI` `safety-check` 💬1
- [#46538](https://github.com/openai/codex/issues/46538) [Linux] Keyboard input ignored under Wayland/X11 with IBus `bug` `app`
- [#46536](https://github.com/openai/codex/issues/46536) Feature request: add spell-check to the CLI prompt editor `enhancement` `TUI` `CLI`
- [#46525](https://github.com/openai/codex/issues/46525) Conversation interrupted - tell the model what to do differently. Something went wrong? `bug` `windows-os` `CLI` `agent`
- [#46502](https://github.com/openai/codex/issues/46502) Eng. `bug` `app`
- [#46496](https://github.com/openai/codex/issues/46496) [macOS][In-app browser] Allow location is not persisted and setting Allow in browser settings is prevented `bug` `app` `browser`
- [#46489](https://github.com/openai/codex/issues/46489) Responses WebSocket transport ignores SSL_CERT_FILE (custom CA), fails with UnknownIssuer behind TLS-intercepting proxies while HTTP honors it `bug` `CLI` `connectivity`

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 107,072 · **Open issues:** 843 · **Last push:** 3h ago

On September 19, 2026, Gemini CLI released version v0.62.0-nightly.20260918.g9450ade79, which includes key changes such as retaining the OAuth refresh token during refreshes and making credential deletion idempotent. Several important fixes were merged, including improvements to terminal buffer memory management, synchronization of the ConPTY process exit lifecycle, and enhancements to the user interface to prevent negative layout dimensions during border rendering. Notably, there were no new issues reported in the past 24 hours, indicating a day of stable development and maintenance for the Gemini CLI ecosystem.

#### 🚀 New Releases
- [v0.62.0-nightly.20260918.g9450ade79](https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0-nightly.20260918.g9450ade79) Release v0.62.0-nightly.20260918.g9450ade79

#### ✅ Merged PRs
- [#29343](https://github.com/google-gemini/gemini-cli/pull/29343) fix(cli): suppress uncaught AbortError logs during request cancellation
- [#29377](https://github.com/google-gemini/gemini-cli/pull/29377) fix(core): update auth error documentation link to valid anchor and add fallback (#26140)
- [#29378](https://github.com/google-gemini/gemini-cli/pull/29378) fix(vscode-ide-companion): preserve terminal focus when closing diff tabs
- [#29380](https://github.com/google-gemini/gemini-cli/pull/29380) fix(core,cli): improve terminal buffer memory management and format Windows diagnostic paths
- [#29379](https://github.com/google-gemini/gemini-cli/pull/29379) fix(core): synchronize ConPTY process exit lifecycle and harden PTY output finalization
- [#29383](https://github.com/google-gemini/gemini-cli/pull/29383) chore/release: bump version to 0.62.0-nightly.20260918.g9450ade79

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,184 · **Open issues:** 2,377 · **Last push:** 3h ago

On September 19, 2026, GitHub Copilot CLI released version 1.0.87-0, which introduced user and managed startup defaults for the Auto routing tier, allowing for a more customizable organization policy, as well as improved message handling in the chat interface. There were no merged pull requests in the last 24 hours, but several notable new issues emerged, with #4905 attracting attention due to desktop app sessions prematurely dying, resulting in fatal catalog errors. Additional issues included #4901 regarding unauthorized client errors with Atlassian MCP OAuth and #4900 concerning the loss of trustedFolders in config.json due to concurrent session overwrites. Overall, the day focused on addressing emerging challenges faced by users while continuing to enhance the tool's features.

#### 🚀 New Releases
- [v1.0.87-0](https://github.com/github/copilot-cli/releases/tag/v1.0.87-0) 1.0.87-0

#### 🐛 New Issues
- [#4905](https://github.com/github/copilot-cli/issues/4905) Desktop app: sessions die minutes after spawn — "GitHub credential registration is no longer available for this session" makes the github-mcp-server catalog stale and fatal `triage` 💬3
- [#4901](https://github.com/github/copilot-cli/issues/4901) Atlassian MCP OAuth fails: unauthorized_client: redirect_uri is not registered (v2 endpoint) `triage` 💬1
- [#4900](https://github.com/github/copilot-cli/issues/4900) config.json trustedFolders (and other managed state) lost when concurrent sessions overwrite the file on exit `triage` 💬1
- [#4907](https://github.com/github/copilot-cli/issues/4907) Periodic MCP reconnect notifications flood conversation history, even while the session is idle `triage`
- [#4906](https://github.com/github/copilot-cli/issues/4906) MCP OAuth: DCR sends client_name "copilot-cli", rejected with 403 by Figma's allowlist (expects "GitHub Copilot CLI") `triage`
- [#4904](https://github.com/github/copilot-cli/issues/4904) Session/chat metadata (status, title, transcript) is stale/unreliable relative to actual sub-session state `triage`
- [#4903](https://github.com/github/copilot-cli/issues/4903) Branch-type sessions all get updated_at bumped on any git checkout, flooding the sidebar `triage`
- [#4902](https://github.com/github/copilot-cli/issues/4902) -p/--prompt values starting with - incorrectly parsed as flags (regression in 1.0.85) `triage`
- [#4899](https://github.com/github/copilot-cli/issues/4899) Add a configurable delay before autopilot skips clarification questions `triage`
- [#4898](https://github.com/github/copilot-cli/issues/4898) Explicit control over model context window size `triage`
- [#4897](https://github.com/github/copilot-cli/issues/4897) CLI session preemptively locks tool execution before credit exhaustion `triage`

#### 🔒 Closed Issues
- [#1632](https://github.com/github/copilot-cli/issues/1632) Support subfolders for skills to better organize them
- [#3858](https://github.com/github/copilot-cli/issues/3858) Ctrl+Backspace (delete previous word) doesn't work on Windows
- [#1086](https://github.com/github/copilot-cli/issues/1086) Do not enforce PowerShell on Windows
- [#2654](https://github.com/github/copilot-cli/issues/2654) `session_store_sql` silently returns empty when session sync is set to local
- [#3480](https://github.com/github/copilot-cli/issues/3480) Rubber Duck - Specify Model
- [#2892](https://github.com/github/copilot-cli/issues/2892) MCP stdio transport for sub-agents (task tool) closes after ~4 seconds while agent is still running
- [#1982](https://github.com/github/copilot-cli/issues/1982) COPILOT_CUSTOM_INSTRUCTIONS_DIRS failing to load *.instructions.md
- [#4264](https://github.com/github/copilot-cli/issues/4264) Extensions slash command firing multiple times for single command
- [#4236](https://github.com/github/copilot-cli/issues/4236) Allow copyOnSelect to target the X11/Wayland PRIMARY selection (mouse clipboard)
- [#3900](https://github.com/github/copilot-cli/issues/3900) Secret filtering can block the CLI UI thread
- [#2850](https://github.com/github/copilot-cli/issues/2850) bash tool fails inside devenv shell with bash 5.3 — "Invalid shell ID: 0 / no active shell sessions"
- [#4698](https://github.com/github/copilot-cli/issues/4698) Cannot compact session

### OpenCode (`anomalyco/opencode`)

**Stars:** 208,460 · **Open issues:** 5,928 · **Last push:** <1h ago

On September 19, 2026, there were no new releases for OpenCode, but several significant pull requests were merged that focused on performance enhancements. Notable updates include enabling the V8 code cache for the renderer scheme, improving how background colors are persisted, and optimizing the loading of the browser pane on first use. Additionally, a fix was implemented to ensure images are included in UI captures, addressing previous user concerns. Among new issues, users reported recurring error messages associated with the free tier, highlighting a consistent problem where it can only be utilized within OpenCode, indicating a potential need for clarification in documentation and user guidance.

#### ✅ Merged PRs
- [#49869](https://github.com/anomalyco/opencode/pull/49869) perf(desktop): show the first window the moment Electron is ready
- [#49780](https://github.com/anomalyco/opencode/pull/49780) perf(client): poll for a starting service every 25 ms
- [#49778](https://github.com/anomalyco/opencode/pull/49778) perf(ui): let the resize observer take the first scrollbar measurement
- [#49767](https://github.com/anomalyco/opencode/pull/49767) perf(desktop): enable the V8 code cache for the renderer scheme
- [#49789](https://github.com/anomalyco/opencode/pull/49789) perf(desktop): load node-pty when an interactive WSL install starts
- [#49797](https://github.com/anomalyco/opencode/pull/49797) perf(desktop): collect orphaned draft blobs after the window is up
- [#49770](https://github.com/anomalyco/opencode/pull/49770) perf(desktop): only persist the background colour when it changes
- [#49772](https://github.com/anomalyco/opencode/pull/49772) perf(desktop): leave declarations and source maps out of the asar
- [#49763](https://github.com/anomalyco/opencode/pull/49763) perf(desktop): create windows before the background service connects
- [#49868](https://github.com/anomalyco/opencode/pull/49868) fix(simulation): include images in UI captures
- [#49838](https://github.com/anomalyco/opencode/pull/49838) feat(plugin): add list to the tool domain
- [#49791](https://github.com/anomalyco/opencode/pull/49791) perf(desktop): replace electron-store with a plain JSON settings store
- [#49792](https://github.com/anomalyco/opencode/pull/49792) perf(desktop): remember window bounds without electron-window-state
- [#49774](https://github.com/anomalyco/opencode/pull/49774) perf(desktop): load the browser pane on first use
- [#49762](https://github.com/anomalyco/opencode/pull/49762) perf(desktop): ship the bundled CLI version instead of spawning for it
- [#49758](https://github.com/anomalyco/opencode/pull/49758) chore(desktop): add a packaged startup benchmark
- [#49866](https://github.com/anomalyco/opencode/pull/49866) revert(core): remove autonomous goal command

#### 🐛 New Issues
- [#49680](https://github.com/anomalyco/opencode/issues/49680) Error from provider (Console): OpenCode's free tier can only be used from within OpenCode 💬5
- [#49678](https://github.com/anomalyco/opencode/issues/49678) "Error from provider (Console): OpenCode's free tier can only be used from within OpenCode" in latest version of Open Code 💬5
- [#49777](https://github.com/anomalyco/opencode/issues/49777) tui: /btw crashes when rendering answer dialog 💬3
- [#49800](https://github.com/anomalyco/opencode/issues/49800) [Bug]: Zen streaming output token-merge corruption on opencode/big-pickle — glued tail fragments, duplicated emission, non-ASCII leakage (2026-09-18) 💬2
- [#49698](https://github.com/anomalyco/opencode/issues/49698) opencodde not working 💬1
- [#49723](https://github.com/anomalyco/opencode/issues/49723) subagents: explore agent denied free tier can only be used from within OpenCode while running inside the CLI — general works with identical models `2.0` 💬2
- [#49725](https://github.com/anomalyco/opencode/issues/49725) The shell tool expects `command`, but the model sends `cmd`, causing the missing-key error. `2.0` 💬2
- [#49756](https://github.com/anomalyco/opencode/issues/49756) Server (1.18.31): Free tier zen models fail - User-Agent not forwarded to zen API 💬1
- [#49858](https://github.com/anomalyco/opencode/issues/49858) Looks like the doc is now a lie: Error from provider (Console): OpenCode's free tier can only be used from within OpenCode 💬1
- [#49736](https://github.com/anomalyco/opencode/issues/49736) Frequent Failure 💬1
- [#49852](https://github.com/anomalyco/opencode/issues/49852) Plugin package with a subpath export fails to install (pkg/subpath parsed as GitHub repo) 💬1
- [#49836](https://github.com/anomalyco/opencode/issues/49836) OPENCODE_DISABLE_PROJECT_CONFIG=1 and --pure don't stop .opencode/plugins/*.js from loading 💬1
- [#49840](https://github.com/anomalyco/opencode/issues/49840) Proposal: background subagents, monitors, cron, worktree isolation — interested in contributions? 💬1
- [#49721](https://github.com/anomalyco/opencode/issues/49721) [web] Auto-approve permissions setting in Settings UI does not respond when clicked/tapped 💬1
- [#49817](https://github.com/anomalyco/opencode/issues/49817) [Bug]: Re-opening moved/renamed project fails with PlatformError: NotFound: FileSystem.realPath (stale project.worktree in opencode.db) 💬1
- [#49867](https://github.com/anomalyco/opencode/issues/49867) Subscription not found
- [#49864](https://github.com/anomalyco/opencode/issues/49864) [FEATURE]:Built-in support SysML v2
- [#49861](https://github.com/anomalyco/opencode/issues/49861) bug: SSE event stream drops all events for worktree sessions (still present on current dev)
- [#49860](https://github.com/anomalyco/opencode/issues/49860) Desktop (Windows): boot stall — renderer 'Failed to fetch', embedded server binds port then stops listening (V8 zone OOM observed); TUI/serve fine on same box/DB/config
- [#49859](https://github.com/anomalyco/opencode/issues/49859) bug(bedrock): cachePoint after reasoning block still wedges sessions on 1.18.31 — a tested fix exists in auto-closed PR #36532
- [#49856](https://github.com/anomalyco/opencode/issues/49856) question tool: model omits required "header" on later multi-question entries, producing SchemaError
- [#49851](https://github.com/anomalyco/opencode/issues/49851) Remote Streamable HTTP MCP: GET /mcp 405 (POST-only server) treated as fatal — all tool invocations fail with generic 'An error occurred invoking'
- [#49847](https://github.com/anomalyco/opencode/issues/49847) openai: ChatGPT OAuth requests use Zen API key
- [#49844](https://github.com/anomalyco/opencode/issues/49844) Error: ConfigInvalidError
- [#49842](https://github.com/anomalyco/opencode/issues/49842) Proposal: background subagents, monitors, cron, worktree isolation
- [#49841](https://github.com/anomalyco/opencode/issues/49841) интерфейс приложение
- [#49833](https://github.com/anomalyco/opencode/issues/49833) docs: list SCVD skill and MCP integration in ecosystem projects
- [#49829](https://github.com/anomalyco/opencode/issues/49829) Version 2 Web - Mermaid Diagram - Not Copy-able `2.0`
- [#49830](https://github.com/anomalyco/opencode/issues/49830) [FEATURE]:Add ability to copy individual assistant messages
- [#49827](https://github.com/anomalyco/opencode/issues/49827) migrate-v1: non-git sessions in "global" project hidden after V1→V2 upgrade
- [#49825](https://github.com/anomalyco/opencode/issues/49825) [FEATURE]: Permission action for session utilities (session_move / session_rename)
- [#49824](https://github.com/anomalyco/opencode/issues/49824) [FEATURE]: Dispatch-time session location for subagents (task directory parameter, or per-agent isolation: worktree)

#### 🔒 Closed Issues
- [#49590](https://github.com/anomalyco/opencode/issues/49590) Official OpenCode Desktop incorrectly rejects free-tier models with "can only be used from within OpenCode"
- [#49133](https://github.com/anomalyco/opencode/issues/49133) tui: tab key does not switch agents, shift+tab cycles instead
- [#37817](https://github.com/anomalyco/opencode/issues/37817) [FEATURE]: Please enable GitHub's Discussions for this project
- [#49840](https://github.com/anomalyco/opencode/issues/49840) Proposal: background subagents, monitors, cron, worktree isolation — interested in contributions?

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 27,968 · **Open issues:** 1,465 · **Last push:** 1h ago

On September 19, 2026, Qwen Code released v0.24.1-preview.0 and v0.24.0-nightly.20260918.537311b8a5, both implementing important updates including changes to document handling related to merged ACP boundary acceptance and improvements to the CI process for packaging VSIX files. No pull requests were merged during this period; however, several new issues emerged, with #12224 highlighting a critical bug that prevents users from changing directories after updating to v0.24.0, stirring significant discussion among users. Other noteworthy issues include #12223, which addresses project-local permission rules, and #12212, pointing out distinct failures in the session writer lease that could lead to persistent service errors.

#### 🚀 New Releases
- [v0.24.1-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.1-preview.0) Release v0.24.1-preview.0
- [v0.24.0-nightly.20260918.537311b8a5](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.0-nightly.20260918.537311b8a5) Release v0.24.0-nightly.20260918.537311b8a5

#### 🐛 New Issues
- [#12224](https://github.com/QwenLM/qwen-code/issues/12224) bug: unable to change directory with /cd after v0.24.0 update `priority/P1` `type/bug` `category/cli` `scope/commands` 💬5
- [#12223](https://github.com/QwenLM/qwen-code/issues/12223) Project-local permission rules should override broader user-level rules `priority/P3` `type/feature-request` `category/security` `scope/non-interactive` 💬4
- [#12217](https://github.com/QwenLM/qwen-code/issues/12217) A comment before `export const meta` fails the workflow script and misleads the hint `priority/P2` `type/bug` `category/core` `scope/core` 💬4
- [#12212](https://github.com/QwenLM/qwen-code/issues/12212) Session writer lease: distinct failures share errorKind "session_writer_unavailable" (a residual .claim is a permanent 503) `priority/P2` `category/core` `scope/session-management` `type/enhancement` 💬4
- [#12213](https://github.com/QwenLM/qwen-code/issues/12213) daemon: read-only inventory of the session writer lock directory at startup `priority/P2` `type/feature-request` `category/core` `scope/session-management` 💬4
- [#12214](https://github.com/QwenLM/qwen-code/issues/12214) docs(conversations-recovery): add explicit non-graceful shutdown guidance (fence detached ACP writers first) `priority/P3` `type/documentation` `category/core` `scope/session-management` 💬4
- [#12206](https://github.com/QwenLM/qwen-code/issues/12206) LSP: non-ASCII responses are silently dropped (Content-Length in bytes compared to UTF-16 string length) `priority/P1` `type/bug` `category/core` `scope/core` 💬4
- [#12195](https://github.com/QwenLM/qwen-code/issues/12195) Main CI failed: Qwen Code CI on 377a5753a73f `type/bug` `status/ready-for-agent` `autofix/skip` 💬4
- [#12179](https://github.com/QwenLM/qwen-code/issues/12179) Goal: retire the legacy card projection (ladder step 5-b) `priority/P2` `category/core` `scope/non-interactive` `type/enhancement` 💬4
- [#12193](https://github.com/QwenLM/qwen-code/issues/12193) review ci: the qwen-review/reviewed skip anchor is not scoped by pull request or base ref `priority/P3` `status/blocked` `type/feature-request` `category/development` 💬4
- [#12165](https://github.com/QwenLM/qwen-code/issues/12165) bug(core): MCP OAuth drops registrationUrl from WWW-Authenticate discovery, breaking Atlassian remote MCP `priority/P2` `type/bug` `category/core` `scope/oauth` 💬4
- [#12167](https://github.com/QwenLM/qwen-code/issues/12167) node-repl: a top-level statement without a trailing semicolon fails the whole cell with an internal SyntaxError `priority/P2` `type/bug` `category/tools` `scope/mcp` 💬4
- [#12147](https://github.com/QwenLM/qwen-code/issues/12147) feat(extensions): load deployment-managed extensions from a directory `priority/P3` `type/feature-request` `category/core` `scope/extensions` 💬4
- [#12216](https://github.com/QwenLM/qwen-code/issues/12216) bug(lsp): MCP workspace-discovery config starts a second, unused LSP server set per ACP process (inherits --experimental-lsp) `priority/P2` `type/bug` `category/core` `scope/mcp` 💬3
- [#12220](https://github.com/QwenLM/qwen-code/issues/12220) LSP: a failed server is reported as 'no results' (per-request errors swallowed into an empty array) `priority/P2` `type/bug` `category/core` `status/ready-for-human` 💬3
- [#12215](https://github.com/QwenLM/qwen-code/issues/12215) Fix sed --quiet/--silent classified as 'unknown' (SAFE_SED_OPTION whitelist unreachable) `priority/P3` `type/bug` `category/core` `scope/shell` 💬3
- [#12209](https://github.com/QwenLM/qwen-code/issues/12209) feat(acp): schedule managed auto-skill review at the ACP turn boundary `priority/P3` `type/feature-request` `category/core` `scope/memory` 💬3
- [#12207](https://github.com/QwenLM/qwen-code/issues/12207) Background task notifications are deferred while a prompt is pending (delayed arbitrarily; dropped on queue overflow) `priority/P3` `category/core` `scope/session-management` `type/enhancement` 💬3
- [#12204](https://github.com/QwenLM/qwen-code/issues/12204) withdrawn by author 💬3
- [#12200](https://github.com/QwenLM/qwen-code/issues/12200) Web Shell: the Goal status strip does not show turn or active-time ceilings `status/in-review` `priority/P3` `category/ui` `type/enhancement` 💬3
- [#12186](https://github.com/QwenLM/qwen-code/issues/12186) fix(web-shell): close the publish-correctness gaps found while adding it to the CLI release `type/bug` `category/platform` `scope/packaging` `scope/build-system` 💬3
- [#12185](https://github.com/QwenLM/qwen-code/issues/12185) web-shell: published package ships unresolvable `@/` type imports and inlines six declared runtime deps `priority/P1` `type/bug` `category/platform` `scope/packaging` 💬3
- [#12170](https://github.com/QwenLM/qwen-code/issues/12170) feat(live): resolve the Live Voice model from modelProviders via a realtimeOnly route `priority/P2` `type/feature-request` `category/configuration` `scope/model-switching` 💬3
- [#12176](https://github.com/QwenLM/qwen-code/issues/12176) bug(cli): a saved workflow launched as a slash command never reports back — empty result, nothing shown in chat `priority/P2` `type/bug` `category/cli` `scope/commands` 💬3
- [#12172](https://github.com/QwenLM/qwen-code/issues/12172) fix(web-shell): inline message editor overflows narrow chat panes `priority/P2` `type/bug` `category/ui` `scope/web-shell` 💬3
- [#12169](https://github.com/QwenLM/qwen-code/issues/12169) Batch API uploads bypass the pinned dispatcher, so they fail behind a proxy or TLS interception (one-line fix per site, demonstrated) `priority/P2` `type/bug` `category/cli` `category/core` 💬3
- [#12164](https://github.com/QwenLM/qwen-code/issues/12164) feat(live): let the Web Shell act as a browser Live Host for realtime voice `priority/P2` `type/feature-request` `category/integration` `roadmap/platform-distribution` 💬3
- [#12160](https://github.com/QwenLM/qwen-code/issues/12160) MCP tools stay disconnected after a turn is aborted (AbortError skips session repair) `priority/P2` `type/bug` `category/tools` `scope/mcp` 💬3
- [#12226](https://github.com/QwenLM/qwen-code/issues/12226) Filesystem-scoped permission authority and centrally managed repository rules `priority/P3` `type/feature-request` `category/security` `scope/non-interactive` 💬2
- [#12219](https://github.com/QwenLM/qwen-code/issues/12219) Main CI failed: Qwen Code CI on 537311b8a5d8 `type/bug` `status/ready-for-agent` `autofix/skip` 💬2
- [#12192](https://github.com/QwenLM/qwen-code/issues/12192) Release Failed for v0.24.1-preview.2 on 2026-09-18 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2

#### 🔒 Closed Issues
- [#11148](https://github.com/QwenLM/qwen-code/issues/11148) fix(cli): full-turn cancellation is recorded as a scheduling failure
- [#12223](https://github.com/QwenLM/qwen-code/issues/12223) Project-local permission rules should override broader user-level rules
- [#12195](https://github.com/QwenLM/qwen-code/issues/12195) Main CI failed: Qwen Code CI on 377a5753a73f
- [#12179](https://github.com/QwenLM/qwen-code/issues/12179) Goal: retire the legacy card projection (ladder step 5-b)
- [#11995](https://github.com/QwenLM/qwen-code/issues/11995) Web Shell session-recovery banner false positive: it can show for turns that completed normally
- [#11717](https://github.com/QwenLM/qwen-code/issues/11717) WebShell create action times out while sequential default SDK requests are still valid
- [#11895](https://github.com/QwenLM/qwen-code/issues/11895) review: dimension agents read the main checkout instead of the PR worktree — the brief gives only the diff's absolute path, never the worktree's
- [#11987](https://github.com/QwenLM/qwen-code/issues/11987) bug(web-shell): first-prompt attach aborted by a controlled session switch leaves the new session on Connection lost
- [#10362](https://github.com/QwenLM/qwen-code/issues/10362) docs: hosted OpenAI-compatible modelProviders example (/v1, selectedType openai)
- [#12204](https://github.com/QwenLM/qwen-code/issues/12204) withdrawn by author
- [#12200](https://github.com/QwenLM/qwen-code/issues/12200) Web Shell: the Goal status strip does not show turn or active-time ceilings
- [#12170](https://github.com/QwenLM/qwen-code/issues/12170) feat(live): resolve the Live Voice model from modelProviders via a realtimeOnly route
- [#11526](https://github.com/QwenLM/qwen-code/issues/11526) fix(node-repl): 解决独立 MCP server 与 Qwen Code 的版本同步问题
- [#12192](https://github.com/QwenLM/qwen-code/issues/12192) Release Failed for v0.24.1-preview.2 on 2026-09-18
- [#12112](https://github.com/QwenLM/qwen-code/issues/12112) Main CI failed: E2E Tests on 673601db3f83
- [#11918](https://github.com/QwenLM/qwen-code/issues/11918) Main CI failed: E2E Tests on e4a6ccd44980

### Claude Code Skills (`anthropics/skills`)

Top open skill PRs by community engagement:
- [#1298](https://github.com/anthropics/skills/pull/1298) fix(skill-creator): isolate trigger evals and handle Windows and runtime failures
- [#1771](https://github.com/anthropics/skills/pull/1771) feat(skills): add proofcore-contract-auditor for smart contract notarization
- [#1703](https://github.com/anthropics/skills/pull/1703) Add md2video-audio skill
- [#1742](https://github.com/anthropics/skills/pull/1742) fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers
- [#1734](https://github.com/anthropics/skills/pull/1734) Detect orphaned docx comments

---

## 🦞 OpenClaw Ecosystem

### OpenClaw (`openclaw/openclaw`)

**Stars:** 390,059 · **Open issues:** 7,892 · **Last push:** <1h ago

On September 19, 2026, OpenClaw did not release any new versions, but several important changes were merged. Notable updates include the addition of a feature that allows users to view sessions they are mentioned in (#152083), improvements in performance related to task handling and gateway memory usage (#152279, #152260), and critical fixes for issues relating to chat layout changes and media access (#151726, #152219). Among the newly reported issues, the bug concerning the older Gateway hard-failing startup due to problematic config write stamps (#152252) stands out, as it highlights a significant challenge for users attempting upgrades.

#### ✅ Merged PRs
- [#152083](https://github.com/openclaw/openclaw/pull/152083) feat: show mentioned sessions in Involving me
- [#152294](https://github.com/openclaw/openclaw/pull/152294) perf(tasks): reuse prepared audit summaries
- [#152195](https://github.com/openclaw/openclaw/pull/152195) fix(mac): preserve LaunchAgent bytes and permissions on rollback
- [#151726](https://github.com/openclaw/openclaw/pull/151726) fix: stop chat layout changes from loading extra history
- [#152279](https://github.com/openclaw/openclaw/pull/152279) perf(gateway): streamline config reload comparison
- [#111737](https://github.com/openclaw/openclaw/pull/111737) fix(xai): reject invalid UTF-8 OAuth responses
- [#152287](https://github.com/openclaw/openclaw/pull/152287) fix: deliver watcher results while other sessions are busy
- [#152290](https://github.com/openclaw/openclaw/pull/152290) fix(release): accept waived advisory performance evidence for stable publication
- [#152143](https://github.com/openclaw/openclaw/pull/152143) fix(test): use Gateway WebSocket transport in network fixtures
- [#152274](https://github.com/openclaw/openclaw/pull/152274) perf(media): reuse attachment filename classification
- [#152293](https://github.com/openclaw/openclaw/pull/152293) refactor(build): reuse forwarded option scanning
- [#152292](https://github.com/openclaw/openclaw/pull/152292) chore(diagnostics-otel): revert unapproved duration-bucket merge
- [#152094](https://github.com/openclaw/openclaw/pull/152094) feat: open Crabbox apps beside the conversation
- [#152219](https://github.com/openclaw/openclaw/pull/152219) fix: stop chat media reads after access changes
- [#152173](https://github.com/openclaw/openclaw/pull/152173) improve: retain quota refresh evidence from successful CI runs
- [#152263](https://github.com/openclaw/openclaw/pull/152263) improve(agents): speed up subagent capability lookups
- [#152260](https://github.com/openclaw/openclaw/pull/152260) improve(gateway): reduce memory used by session selection
- [#149128](https://github.com/openclaw/openclaw/pull/149128) refactor(matrix): centralize media metadata assembly
- [#152276](https://github.com/openclaw/openclaw/pull/152276) chore(ui): refresh control ui locales
- [#152268](https://github.com/openclaw/openclaw/pull/152268) refactor: simplify worker and model fallback handling
- [#152257](https://github.com/openclaw/openclaw/pull/152257) perf(codex): reconcile session catalogs incrementally
- [#152241](https://github.com/openclaw/openclaw/pull/152241) fix(ui): keep submitted prompts visible across session startup
- [#148630](https://github.com/openclaw/openclaw/pull/148630) perf(sessions): move automatic maintenance database work to workers
- [#152226](https://github.com/openclaw/openclaw/pull/152226) fix(diagnostics-otel): retain buckets for slow tool and model calls
- [#152231](https://github.com/openclaw/openclaw/pull/152231) fix: preserve reply metadata through outbound preparation
- [#152009](https://github.com/openclaw/openclaw/pull/152009) fix(codex): prevent side-question tests hanging during startup cleanup
- [#152242](https://github.com/openclaw/openclaw/pull/152242) fix(release): prepare AI shrinkwrap before sealing
- [#150712](https://github.com/openclaw/openclaw/pull/150712) fix(hooks): reject native relay responses after deadline
- [#150554](https://github.com/openclaw/openclaw/pull/150554) fix(matrix): message read returns room history instead of the requested --message-id
- [#152227](https://github.com/openclaw/openclaw/pull/152227) improve(plugins): skip unnecessary native import path conversion
- [#152239](https://github.com/openclaw/openclaw/pull/152239) fix(test): isolate Crabbox fixtures and preserve readiness failures
- [#152214](https://github.com/openclaw/openclaw/pull/152214) test: isolate native recovery from session discovery
- [#151667](https://github.com/openclaw/openclaw/pull/151667) fix: show database and recovery paths when updates fail
- [#151683](https://github.com/openclaw/openclaw/pull/151683) fix(doctor): prioritize repairs during large-fleet updates
- [#151805](https://github.com/openclaw/openclaw/pull/151805) fix: prevent large-fleet Gateway startup failures and stalls
- [#152174](https://github.com/openclaw/openclaw/pull/152174) Fix false failures in completed and queued automations
- [#152183](https://github.com/openclaw/openclaw/pull/152183) fix: stop delayed heartbeats from contaminating spawn fallback tests
- [#152194](https://github.com/openclaw/openclaw/pull/152194) fix(ui): preserve person picker selection and profile photos
- [#151957](https://github.com/openclaw/openclaw/pull/151957) feat(meetings): summarize meetings during live capture
- [#152228](https://github.com/openclaw/openclaw/pull/152228) refactor(watch): share delivery status text formatting
- [#152235](https://github.com/openclaw/openclaw/pull/152235) fix(skills): keep idle reviews out of retired foreground plugin scope
- [#151618](https://github.com/openclaw/openclaw/pull/151618) fix: show pasted text as compact chat chips
- [#112001](https://github.com/openclaw/openclaw/pull/112001) fix(whatsapp): batch rapid messages without reordering replies
- [#152215](https://github.com/openclaw/openclaw/pull/152215) fix(mcp): stop cancelled question tests leaking into later cases
- [#152230](https://github.com/openclaw/openclaw/pull/152230) fix(release): qualify 2026.7.34 frozen SDK
- [#149099](https://github.com/openclaw/openclaw/pull/149099) refactor(config): share issue-location container scanning
- [#152068](https://github.com/openclaw/openclaw/pull/152068) fix(sessions): notify Home about new sessions by default
- [#152179](https://github.com/openclaw/openclaw/pull/152179) fix(ui): open workspace links with spaces and emoji
- [#152202](https://github.com/openclaw/openclaw/pull/152202) fix(update): reconcile completed updates after interrupted verification
- [#151678](https://github.com/openclaw/openclaw/pull/151678) fix: reduce repeated update validation for large agent fleets
- [#152212](https://github.com/openclaw/openclaw/pull/152212) fix: keep Windows Gateway running after agent restart
- [#150532](https://github.com/openclaw/openclaw/pull/150532) fix: worktree creation fails with an output limit error when .worktreeinclude sits beside a large ignored tree
- [#152225](https://github.com/openclaw/openclaw/pull/152225) docs: clarify WebChat commentary attachment compatibility
- [#152223](https://github.com/openclaw/openclaw/pull/152223) fix(ui): unify fullscreen widget menu typography
- [#152213](https://github.com/openclaw/openclaw/pull/152213) test(gateway): make unstable task-list coverage deterministic
- [#152024](https://github.com/openclaw/openclaw/pull/152024) fix(ui): keep cloud startup prompts and progress in chat
- [#152135](https://github.com/openclaw/openclaw/pull/152135) fix(ui): keep keyboard-focused automation controls clear of sticky actions
- [#151969](https://github.com/openclaw/openclaw/pull/151969) fix(media): report CLI models with missing command or args
- [#152101](https://github.com/openclaw/openclaw/pull/152101) improve(plugins): reduce runtime and tool-call allocations
- [#152028](https://github.com/openclaw/openclaw/pull/152028) fix: preserve model failure causes and worker fallback runtime
- [#151878](https://github.com/openclaw/openclaw/pull/151878) improve(gateway): reduce duplicate worker data fetched from SQLite
- [#151291](https://github.com/openclaw/openclaw/pull/151291) fix: restore automation creation for remote administrators
- [#151935](https://github.com/openclaw/openclaw/pull/151935) improve: defer internal agent-turn execution imports until use
- [#152207](https://github.com/openclaw/openclaw/pull/152207) fix(agents): resume private child results in channel conversations
- [#152142](https://github.com/openclaw/openclaw/pull/152142) fix(models): prepare configless catalogs asynchronously
- [#152082](https://github.com/openclaw/openclaw/pull/152082) refactor(logging): reuse canonical file log serialization
- [#151581](https://github.com/openclaw/openclaw/pull/151581) fix: keep gateway responsive during sqlite recovery load
- [#152209](https://github.com/openclaw/openclaw/pull/152209) fix(tooling): release completed PR operations with exited loaders
- [#149129](https://github.com/openclaw/openclaw/pull/149129) refactor(slack): share markdown preparation
- [#152206](https://github.com/openclaw/openclaw/pull/152206) fix(release): allow stable npm bootstrap under an operator soak waiver
- [#151387](https://github.com/openclaw/openclaw/pull/151387) fix(daemon): avoid false restart timeouts during slow startup
- [#150584](https://github.com/openclaw/openclaw/pull/150584) feat: read agent documents from a host-owned workspace
- [#152192](https://github.com/openclaw/openclaw/pull/152192) improve(startup): skip redundant single-agent directory checks
- [#152198](https://github.com/openclaw/openclaw/pull/152198) fix(ui): wait for widget readiness in board layout tests
- [#151952](https://github.com/openclaw/openclaw/pull/151952) perf(browser): move dashboard event discovery to SQLite worker
- [#152140](https://github.com/openclaw/openclaw/pull/152140) improve(auth): reduce pauses during concurrent credential reads
- [#152134](https://github.com/openclaw/openclaw/pull/152134) refactor: share current-conversation binding row serialization
- [#152093](https://github.com/openclaw/openclaw/pull/152093) improve(ui): load older chat history in smaller pages
- [#152186](https://github.com/openclaw/openclaw/pull/152186) fix(release): reject incomplete legacy npm install trees
- [#152187](https://github.com/openclaw/openclaw/pull/152187) test(tooling): preserve Node and terminal fixture ownership under Bun
- [#152190](https://github.com/openclaw/openclaw/pull/152190) fix(sqlite): prevent worker timeouts through state path aliases
- [#151560](https://github.com/openclaw/openclaw/pull/151560) chore: prepare extended-stable 2026.7.34
- [#152191](https://github.com/openclaw/openclaw/pull/152191) improve: reduce CPU work for long CLI reasoning streams
- [#152196](https://github.com/openclaw/openclaw/pull/152196) chore(ui): refresh control ui locales
- [#152073](https://github.com/openclaw/openclaw/pull/152073) refactor(agents): unify tool availability and plugin work ownership
- [#152051](https://github.com/openclaw/openclaw/pull/152051) fix(cron): keep scheduled jobs alive after their creating request ends
- [#152065](https://github.com/openclaw/openclaw/pull/152065) test: restore document focus after shared cleanup
- [#151989](https://github.com/openclaw/openclaw/pull/151989) fix(ui): RTL side panel resize moves opposite the input
- [#152184](https://github.com/openclaw/openclaw/pull/152184) test(subagents): align lifecycle retries with durable completion owners
- [#152097](https://github.com/openclaw/openclaw/pull/152097) perf: avoid redundant participant maps in session lists
- [#149282](https://github.com/openclaw/openclaw/pull/149282) refactor(stream): share auxiliary queue overflow handling
- [#152076](https://github.com/openclaw/openclaw/pull/152076) fix(test): execute CLI fixture preloads on Node and Bun
- [#152177](https://github.com/openclaw/openclaw/pull/152177) test(talk): fail fast when native-action readiness is missed
- [#152172](https://github.com/openclaw/openclaw/pull/152172) fix(codex): deliver delegated results after the parent yields
- [#152041](https://github.com/openclaw/openclaw/pull/152041) fix(wear): make long assistant replies fully readable
- [#152175](https://github.com/openclaw/openclaw/pull/152175) test(process): preserve lifecycle error coverage under Bun
- [#130035](https://github.com/openclaw/openclaw/pull/130035) fix(onboard): show explicit repair command for invalid config
- [#152138](https://github.com/openclaw/openclaw/pull/152138) fix(crabbox): classify source fetch failures
- [#152176](https://github.com/openclaw/openclaw/pull/152176) fix(release): wait for npm registry propagation before readback
- [#152159](https://github.com/openclaw/openclaw/pull/152159) perf(agents): specialize the image hydration guard
- [#152163](https://github.com/openclaw/openclaw/pull/152163) fix(ui): reserve attachment tiles while files load
- [#149075](https://github.com/openclaw/openclaw/pull/149075) fix(agents): strip C1 controls from console diagnostics
- [#152158](https://github.com/openclaw/openclaw/pull/152158) perf(plugins): skip impossible provider ownership scans
- [#151926](https://github.com/openclaw/openclaw/pull/151926) fix(gateway): avoid event-loop stalls during device-token storage
- [#152157](https://github.com/openclaw/openclaw/pull/152157) perf(gateway): reuse privately assembled tool catalog groups
- [#152160](https://github.com/openclaw/openclaw/pull/152160) refactor(cli): count enabled plugins without an intermediate list
- [#152130](https://github.com/openclaw/openclaw/pull/152130) fix(ui): keep Control UI test imports off the state database
- [#151696](https://github.com/openclaw/openclaw/pull/151696) fix(release): restore AI runtime in extended-stable installs
- [#152156](https://github.com/openclaw/openclaw/pull/152156) perf(backup): reuse verified archive entry membership
- [#152127](https://github.com/openclaw/openclaw/pull/152127) improve(startup): avoid repeated plugin path resolution
- [#152018](https://github.com/openclaw/openclaw/pull/152018) fix: record rejected Workshop reviews despite silent replies
- [#152155](https://github.com/openclaw/openclaw/pull/152155) perf(gateway): select native command specs before projection
- [#152116](https://github.com/openclaw/openclaw/pull/152116) fix: keep stale Stop messages from canceling replacement sessions
- [#152050](https://github.com/openclaw/openclaw/pull/152050) fix: prevent shared-state writes timing out behind native writers
- [#152026](https://github.com/openclaw/openclaw/pull/152026) fix: retire failed setup plugins without replaying facade initialization
- [#152162](https://github.com/openclaw/openclaw/pull/152162) fix(test): select Node for built runtime recovery fixtures
- [#152166](https://github.com/openclaw/openclaw/pull/152166) refactor(auth): reuse privately assembled choice groups
- [#149125](https://github.com/openclaw/openclaw/pull/149125) refactor(matrix): reuse canonical poll timestamp validation
- [#152079](https://github.com/openclaw/openclaw/pull/152079) fix: preserve chat media delivery and session boundaries
- [#152154](https://github.com/openclaw/openclaw/pull/152154) improve(plugins): reduce mutable argument handling overhead
- [#152078](https://github.com/openclaw/openclaw/pull/152078) fix(scripts): prevent host tooling drift from blocking PR workflows
- [#152128](https://github.com/openclaw/openclaw/pull/152128) improve: reduce model capability preparation work
- [#152165](https://github.com/openclaw/openclaw/pull/152165) fix: stop marking delivered scheduled reports as failed
- [#151936](https://github.com/openclaw/openclaw/pull/151936) fix: start background context maintenance after durable turns
- [#152119](https://github.com/openclaw/openclaw/pull/152119) fix(models): avoid ambient state reads during prepared selection
- [#152006](https://github.com/openclaw/openclaw/pull/152006) feat: recover abandoned Crabbox source staging
- [#152098](https://github.com/openclaw/openclaw/pull/152098) chore(ui): refresh control ui locales
- [#152107](https://github.com/openclaw/openclaw/pull/152107) fix: report completed subprocess cleanup after cancellation
- [#152110](https://github.com/openclaw/openclaw/pull/152110) perf(reply): reuse normalized inbound text
- [#152045](https://github.com/openclaw/openclaw/pull/152045) fix(ui): load remote images in compact activity previews
- [#152126](https://github.com/openclaw/openclaw/pull/152126) fix(cron): paused future one-shots disappear after Run now
- [#152109](https://github.com/openclaw/openclaw/pull/152109) perf(sessions): reuse rows and skip discarded terminal labels
- [#152089](https://github.com/openclaw/openclaw/pull/152089) fix: keep dashboard tests within the file size limit
- [#151985](https://github.com/openclaw/openclaw/pull/151985) fix(workers): show the cause of rejected worker launches
- [#152108](https://github.com/openclaw/openclaw/pull/152108) refactor(health): skip unused verbose account projection
- [#152115](https://github.com/openclaw/openclaw/pull/152115) fix: prevent co-author parsing from stalling GitHub previews
- [#152100](https://github.com/openclaw/openclaw/pull/152100) fix(qa-lab): stabilize timeout recovery delivery validation
- [#152075](https://github.com/openclaw/openclaw/pull/152075) fix: probe SQLite when Node denies worker threads
- [#151973](https://github.com/openclaw/openclaw/pull/151973) refactor: remove retired runtime code and duplicate helpers
- [#152074](https://github.com/openclaw/openclaw/pull/152074) perf(gateway): avoid session list stalls on broad updates
- [#152038](https://github.com/openclaw/openclaw/pull/152038) test(memory): seed restart fixtures with the Gateway stopped
- [#152080](https://github.com/openclaw/openclaw/pull/152080) perf(logging): reduce Gateway hot-path info log volume
- [#152112](https://github.com/openclaw/openclaw/pull/152112) improve: format messages with many links faster
- [#152029](https://github.com/openclaw/openclaw/pull/152029) perf(cron): avoid unused SQL binding in config projections
- [#152043](https://github.com/openclaw/openclaw/pull/152043) fix: explain cloud worker startup failures
- [#151932](https://github.com/openclaw/openclaw/pull/151932) refactor: reuse fs-safe and fix Windows asset retention
- [#149214](https://github.com/openclaw/openclaw/pull/149214) refactor(discord): share ordered Markdown edit rendering
- [#149272](https://github.com/openclaw/openclaw/pull/149272) refactor(media): remove unreachable geometry metadata backfills
- [#152039](https://github.com/openclaw/openclaw/pull/152039) chore(autoreview): sync mirror to agent-skills a7e91e1
- [#152099](https://github.com/openclaw/openclaw/pull/152099) fix: restore Control UI test collection
- [#152061](https://github.com/openclaw/openclaw/pull/152061) fix(clickclack): finish SQLite cleanup between persistence tests
- [#152102](https://github.com/openclaw/openclaw/pull/152102) fix(workboard): isolate board deletion from unrelated subscriptions
- [#151689](https://github.com/openclaw/openclaw/pull/151689) fix: session group moves lag while requests are pending
- [#151907](https://github.com/openclaw/openclaw/pull/151907) fix(agents): preserve active cleanup during requester settlement
- [#152092](https://github.com/openclaw/openclaw/pull/152092) perf(sessions): keep deletion responsive under disk pressure
- [#151870](https://github.com/openclaw/openclaw/pull/151870) fix: preserve successful direct replies without serializing bookkeeping keys
- [#151273](https://github.com/openclaw/openclaw/pull/151273) fix(gateway): keep the previous plugin generation serving when a replacement stalls on admitted work
- [#152062](https://github.com/openclaw/openclaw/pull/152062) perf(skills): silence identical collisions across workspaces
- [#151879](https://github.com/openclaw/openclaw/pull/151879) fix(agents): resume parent tasks after provider retries
- [#151366](https://github.com/openclaw/openclaw/pull/151366) fix: reduce Doctor preparation time for large fleets
- [#152067](https://github.com/openclaw/openclaw/pull/152067) perf(ui): reuse session snapshots for roster updates
- [#152088](https://github.com/openclaw/openclaw/pull/152088) perf(tasks): skip SQLite admission for transient agent events
- [#151634](https://github.com/openclaw/openclaw/pull/151634) fix: await initial task persistence before Gateway activation
- [#152064](https://github.com/openclaw/openclaw/pull/152064) test: keep Vitest prototype ownership on execFile mocks
- [#152069](https://github.com/openclaw/openclaw/pull/152069) fix(pr): recover interrupted checkouts and isolate allocation state
- [#152090](https://github.com/openclaw/openclaw/pull/152090) fix(test): keep quota observer armed during Codex prewarm
- [#152077](https://github.com/openclaw/openclaw/pull/152077) refactor(shared): reduce immutable graph traversal allocations
- [#151121](https://github.com/openclaw/openclaw/pull/151121) fix(doctor): repair tool policies that set both allow and alsoAllow
- [#151938](https://github.com/openclaw/openclaw/pull/151938) fix: avoid unrelated session scans in catalog responses
- [#152055](https://github.com/openclaw/openclaw/pull/152055) fix(telegram): preserve dispatcher composition under Bun
- [#152058](https://github.com/openclaw/openclaw/pull/152058) fix(gateway): avoid native plugin imports in auth fixtures
- [#151858](https://github.com/openclaw/openclaw/pull/151858) fix(ui): retain attachment keyboard focus during link refresh
- [#152063](https://github.com/openclaw/openclaw/pull/152063) perf(tests): isolate metadata heap checks
- [#149905](https://github.com/openclaw/openclaw/pull/149905) fix(doctor): move Workshop diagnostic reads off the caller thread
- [#151327](https://github.com/openclaw/openclaw/pull/151327) fix(google): prevent Gemini errors from optional schema metadata
- [#152003](https://github.com/openclaw/openclaw/pull/152003) test: retain safe quota recovery failure evidence
- [#152048](https://github.com/openclaw/openclaw/pull/152048) fix(qa-lab): stabilize self-yield follow-up release proof
- [#152035](https://github.com/openclaw/openclaw/pull/152035) perf(codex): reduce residual app-server framing overhead
- [#152054](https://github.com/openclaw/openclaw/pull/152054) improve(cron): batch automation names in chat history
- [#151972](https://github.com/openclaw/openclaw/pull/151972) fix(ui): preserve transparent chat widget backgrounds
- [#151975](https://github.com/openclaw/openclaw/pull/151975) fix(ui): keep session Actions clickable beside attachments
- [#152031](https://github.com/openclaw/openclaw/pull/152031) fix(ui): HTML attachment previews leave most of the side panel unused
- [#152042](https://github.com/openclaw/openclaw/pull/152042) perf(gateway): coalesce person presence activity broadcasts
- [#152087](https://github.com/openclaw/openclaw/pull/152087) refactor(qa): reuse Matrix CLI JSON parser
- [#151867](https://github.com/openclaw/openclaw/pull/151867) improve(heartbeat): avoid unused config work in membership checks
- [#151590](https://github.com/openclaw/openclaw/pull/151590) fix: publish acknowledged managed task receipts
- [#152027](https://github.com/openclaw/openclaw/pull/152027) feat(ui): navigate message images in the lightbox
- [#151951](https://github.com/openclaw/openclaw/pull/151951) fix(codex): avoid fallback replies after intentional silence
- [#150295](https://github.com/openclaw/openclaw/pull/150295) fix: owner-gated plugin calls fail after the parent yields
- [#152023](https://github.com/openclaw/openclaw/pull/152023) perf(doctor): reuse task identity for flow recovery reports
- [#152025](https://github.com/openclaw/openclaw/pull/152025) fix: avoid rebuilding empty memory indexes on every search
- [#151250](https://github.com/openclaw/openclaw/pull/151250) fix(secrets): recover Gateway tokens corrupted by redacted saves
- [#152032](https://github.com/openclaw/openclaw/pull/152032) fix(ui): show when a dashboard view is already the default
- [#151698](https://github.com/openclaw/openclaw/pull/151698) chore(ui): refresh control ui locales
- [#151994](https://github.com/openclaw/openclaw/pull/151994) fix(matrix): keep startup storage SQLite off the Gateway thread
- [#152049](https://github.com/openclaw/openclaw/pull/152049) improve(gateway): reduce memory used by session relationships
- [#152017](https://github.com/openclaw/openclaw/pull/152017) fix(ui): refresh plugin chat cards after installation
- [#151652](https://github.com/openclaw/openclaw/pull/151652) fix: isolate pending system events by conversation owner
- [#152053](https://github.com/openclaw/openclaw/pull/152053) improve(ui): move fullscreen widget controls into the page menu
- [#151389](https://github.com/openclaw/openclaw/pull/151389) fix(test): prevent worker-artifact timeouts on slow runners
- [#152040](https://github.com/openclaw/openclaw/pull/152040) improve: speed up memory event journaling
- [#151338](https://github.com/openclaw/openclaw/pull/151338) fix(android): keep Gateway field labels and setup errors visible
- [#152019](https://github.com/openclaw/openclaw/pull/152019) test: prepare progress consumer SDK before behavior deadline
- [#152044](https://github.com/openclaw/openclaw/pull/152044) fix(discord): let authorized speakers change the current voice
- [#151976](https://github.com/openclaw/openclaw/pull/151976) fix(test): run Node recovery fixtures with Node
- [#151658](https://github.com/openclaw/openclaw/pull/151658) fix(codex): restore background completions with managed hooks
- [#151998](https://github.com/openclaw/openclaw/pull/151998) perf(codex): suppress unused app-server notifications
- [#149189](https://github.com/openclaw/openclaw/pull/149189) refactor(media): share Base64 alphabet decoding
- [#151996](https://github.com/openclaw/openclaw/pull/151996) fix(scripts): explain merge aborts and invalid review fields
- [#136218](https://github.com/openclaw/openclaw/pull/136218) fix(media): restore attachment reads through macOS path aliases
- [#151825](https://github.com/openclaw/openclaw/pull/151825) feat(ci): profile installed Gateway startup
- [#152008](https://github.com/openclaw/openclaw/pull/152008) perf(tui): retain prepared tool output across activity updates
- [#151877](https://github.com/openclaw/openclaw/pull/151877) fix(test): close identity databases before session fixture cleanup
- [#152030](https://github.com/openclaw/openclaw/pull/152030) fix(codex): synchronize side-question cleanup test readiness
- [#152013](https://github.com/openclaw/openclaw/pull/152013) improve: serialize compact runtime JSON faster
- [#152022](https://github.com/openclaw/openclaw/pull/152022) refactor(config): share committed candidate projection
- [#151997](https://github.com/openclaw/openclaw/pull/151997) fix(process): avoid repeated background registration scans
- [#152010](https://github.com/openclaw/openclaw/pull/152010) fix(ui): show starting branch for cloud sessions

#### 🐛 New Issues
- [#152252](https://github.com/openclaw/openclaw/issues/152252) [Bug]: Config write stamps meta.migrations.utilityModelSeparation; older Gateway hard-fails startup (exit 78) and systemd stays down `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `impact:crash-loop` `P0` 💬6
- [#151962](https://github.com/openclaw/openclaw/issues/151962) Phantom user messages: internal runtime strings (heartbeat poll / async command completion / queued user message) submitted as user prompts, not persisted to transcript_events `P2` `clawsweeper:needs-info` `impact:session-state` `impact:message-loss` 💬5
- [#151467](https://github.com/openclaw/openclaw/issues/151467) [Bug Report] Self-Upgrade Deadlock & Rollback Cron Failure — v6.33 → v9.4 `clawsweeper:needs-info` `impact:crash-loop` `P0` `issue-rating: 🦐 gold shrimp` 💬5
- [#151295](https://github.com/openclaw/openclaw/issues/151295) [Bug]: Large fleets cannot upgrade from 2026.9.4: candidate Doctor exhausts the installed updater's 300 s canary budget, then writes a migration marker the installed runtime rejects `maintainer` `P1` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` 💬4
- [#152121](https://github.com/openclaw/openclaw/issues/152121) [Bug]: Telegram post-reply error banner appears after successful reply on 2026.9.4 / Node 24.21.0 `bug` `regression` `P2` `clawsweeper:needs-info` 💬4
- [#151794](https://github.com/openclaw/openclaw/issues/151794) [plugins] A load-path-selected local plugin makes every openclaw update fail at finalize:plugins ("has no authoritative package-owner metadata") `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#152284](https://github.com/openclaw/openclaw/issues/152284) [Bug]: Building checkout dist under a live managed Gateway deletes modules mid-flight (installation changed / ERR_MODULE_NOT_FOUND) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#152296](https://github.com/openclaw/openclaw/issues/152296) [Bug]: After Gateway recovery, openai/* runs with profile=- to api.openai.com (401 Missing bearer) when Codex ChatGPT auth is stale and agent has no OpenClaw OAuth profile `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `impact:auth-provider` 💬3
- [#152182](https://github.com/openclaw/openclaw/issues/152182) [Bug]: memory_search (provider: local): transient "index was built for <model>, expected fts-only" unavailable error when a search races the managed llama.cpp idle-stop/respawn `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#152125](https://github.com/openclaw/openclaw/issues/152125) [Bug]: subagents cancel rejects spawn identifiers and returns misleading "Task outside session tree" for unresolvable taskIds `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#151852](https://github.com/openclaw/openclaw/issues/151852) [Bug]: OpenClaw won't execute commands using `gog` `bug` `bug:behavior` `P2` `issue-rating: 🦪 silver shellfish` 💬3
- [#152145](https://github.com/openclaw/openclaw/issues/152145) [Bug]: Control UI interleaves typed and realtime Talk messages out of chronological order `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#151883](https://github.com/openclaw/openclaw/issues/151883) A `type: "cli"` media model with no `command`/`args` passes config validation and doctor, then runs the command with no file `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬3
- [#151986](https://github.com/openclaw/openclaw/issues/151986) Webchat: failed send persists as immortal client-side retry for days, then fires the stale action when retried `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#151706](https://github.com/openclaw/openclaw/issues/151706) [Bug]: In-turn context-engine reload times out and leaves Gateway model runtime unavailable `bug` `maintainer` `clawsweeper:source-repro` `impact:crash-loop` 💬3
- [#151307](https://github.com/openclaw/openclaw/issues/151307) Update failure: readyz-unhealthy (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬3
- [#151657](https://github.com/openclaw/openclaw/issues/151657) [Bug]: extended-stable 2026.7.33: shipped npm-shrinkwrap.json omits @openclaw/ai → clean install silently produces broken tree; targeted install crashes arborist (edgesOut) `bug` `regression` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬3
- [#151596](https://github.com/openclaw/openclaw/issues/151596) Control UI: returning to New Session animates the restored draft downward `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬3
- [#152304](https://github.com/openclaw/openclaw/issues/152304) [Bug]: openclaw-live-updater update-main.mjs fails closed on Linux systemd (gateway_launchagent_unavailable) after ff-merge, leaving rebuild incomplete `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬2
- [#152185](https://github.com/openclaw/openclaw/issues/152185) [Bug]: openclaw_cost_usd_total / openclaw_tokens_total omit non-delivering (NO_REPLY) turns — cost telemetry undercounts real spend `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#152170](https://github.com/openclaw/openclaw/issues/152170) [Bug]: Codex parents can lose completed delegated results after yielding `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#151546](https://github.com/openclaw/openclaw/issues/151546) update 2026.9.3→2026.9.4: rehearsal budget caps block 38-agent install; state schema inspection (30s) fails even with minimal state `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `P0` `issue-rating: 🦪 silver shellfish` 💬2
- [#151647](https://github.com/openclaw/openclaw/issues/151647) [Bug]: session group moves lack immediate feedback and lose confirmed placement on refresh failure `maintainer` `P2` `clawsweeper:source-repro` `impact:session-state` 💬2
- [#152070](https://github.com/openclaw/openclaw/issues/152070) [Bug]: materialized sandbox-skills directory is empty inside the container (host dir replaced after the bind is made) `P1` `issue-rating: 🦪 silver shellfish` `impact:other` 💬2
- [#152046](https://github.com/openclaw/openclaw/issues/152046) [Feature]: Optional automatic equal-column session layout in Control UI `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬2
- [#151769](https://github.com/openclaw/openclaw/issues/151769) [Bug]: Completed subagent results recur after closed delivery; fallback send of child results is not at-most-once `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `clawsweeper:needs-live-repro` 💬2
- [#151953](https://github.com/openclaw/openclaw/issues/151953) [Bug]: [iOS] Reasoning remains visible after /reasoning off; same conversation renders correctly in Control UI `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#151861](https://github.com/openclaw/openclaw/issues/151861) Provider-prefixed model reference is passed through verbatim => upstream API 400 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#151859](https://github.com/openclaw/openclaw/issues/151859) ACP session cleanup fails every minute (undiagnosable) + programmatic stop reports error while the session is already stopped `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#151437](https://github.com/openclaw/openclaw/issues/151437) Discord /model interactive picker fails with PreparedModelCatalogConfigReplacedError while direct arguments work (2026.9.4) `P2` `impact:auth-provider` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#151792](https://github.com/openclaw/openclaw/issues/151792) Feishu: inbound files silently dropped when sent as rich-text `post` (multi-file or file + caption) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#151884](https://github.com/openclaw/openclaw/issues/151884) An unset {{Language}} templates to an empty CLI argument instead of being dropped `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#151795](https://github.com/openclaw/openclaw/issues/151795) [plugins] Path-managed (--link) plugin installs are not trusted: channels refuse to start ("Channel ingress queue is unavailable") `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#151847](https://github.com/openclaw/openclaw/issues/151847) gateway tool's update.run ignores commands.ownerAllowFrom — only literal /update respects it `P2` `impact:security` `impact:ux-friction` 💬2
- [#151789](https://github.com/openclaw/openclaw/issues/151789) Windows: deleting explicit sessions fails with ENOENT when sessionId contains colon `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#151462](https://github.com/openclaw/openclaw/issues/151462) [Feature]: automatic updates for idle headless nodes `enhancement` `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` 💬2
- [#151766](https://github.com/openclaw/openclaw/issues/151766) [Bug]: active-memory recall-intent patterns missing German (DE) — default `mode: "escalate"` never fires for German users `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#151665](https://github.com/openclaw/openclaw/issues/151665) [Bug]: Claude CLI auth not detected in onboarding despite successful claude auth login inside OpenClawGateway WSL distro `bug` `regression` `impact:auth-provider` `P0` 💬2
- [#151671](https://github.com/openclaw/openclaw/issues/151671) [Bug]: Spawn broker exits when an unbuffered (streaming) command hits EMFILE, ending every command it runs `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#151557](https://github.com/openclaw/openclaw/issues/151557) [Bug]: compact plan placement assertion fails on pull-request plans after 70916d062e1 moved admission ahead of placement `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬2
- [#151376](https://github.com/openclaw/openclaw/issues/151376) config writes silently clear agents.defaults.sessionStore.agentId (2026.9.4) `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬2
- [#151577](https://github.com/openclaw/openclaw/issues/151577) [Bug]: messaging tsgo core test shard has 701 roots on main, tsgo-core-test-shards.test.ts fails on every PR `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#151589](https://github.com/openclaw/openclaw/issues/151589) Update failure: target-metadata-preflight (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#151460](https://github.com/openclaw/openclaw/issues/151460) Update failure: post-update-failed (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#151363](https://github.com/openclaw/openclaw/issues/151363) Verified backup retains source agent leases and blocks Doctor on a restored copy `maintainer` `P2` `clawsweeper:source-repro` `impact:session-state` 💬2
- [#151311](https://github.com/openclaw/openclaw/issues/151311) Scheduled cron agent turns intermittently fail with Async work scope is closed; possible inherited timer scope (2026.9.4) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬2
- [#152072](https://github.com/openclaw/openclaw/issues/152072) Mentions should add sessions to Involving me, with personal hide/show `enhancement` `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#152310](https://github.com/openclaw/openclaw/issues/152310) [Feature]: Favicons and social previews on browser-tab cards `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#152307](https://github.com/openclaw/openclaw/issues/152307) Plugin metadata loads select unused artifacts and reuse stale profile or Gateway facts `P2` `clawsweeper:source-repro` `impact:auth-provider` `issue-rating: 🦞 diamond lobster` 💬1
- [#152300](https://github.com/openclaw/openclaw/issues/152300) Telegram image sent as a file reaches the model as "Unsupported document format: image/png" instead of vision input `P2` `impact:message-loss` 💬1
- [#151843](https://github.com/openclaw/openclaw/issues/151843) [Bug]: Chat composer context lets the landscape action bar cover typed text `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#152288](https://github.com/openclaw/openclaw/issues/152288) [Bug]: Session-store reload sends queued heartbeat context into another store `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#152285](https://github.com/openclaw/openclaw/issues/152285) [Bug]: Skill Workshop read/prepare_patch guidance omits separate foreground-repair authorization `bug` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬1
- [#152283](https://github.com/openclaw/openclaw/issues/152283) macOS app cannot authenticate native control and Voice Wake to a token-protected local gateway `impact:auth-provider` `P0` `impact:ux-release-blocker` 💬1
- [#152275](https://github.com/openclaw/openclaw/issues/152275) [Bug]: Post-commit plugin activation failure leaves model catalog and reply dispatch unavailable until restart `bug` `gateway` `maintainer` `bug:behavior` 💬1
- [#152267](https://github.com/openclaw/openclaw/issues/152267) [Bug]: `openclaw.cache-ttl` transcript marker is appended as a full snapshot on every change and is 52% of transcript bytes in the agent SQLite store `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#152217](https://github.com/openclaw/openclaw/issues/152217) [Bug]: Tool and model latency histograms overflow above 10 seconds `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#152264](https://github.com/openclaw/openclaw/issues/152264) Show host and thread CPU context in the compact busyness tile `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` `impact:ux-friction` 💬1
- [#152253](https://github.com/openclaw/openclaw/issues/152253) [Bug]: New Session resize moves Start below the viewport `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#152178](https://github.com/openclaw/openclaw/issues/152178) Control UI: preserve person picker selection and selected profile photos `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#152245](https://github.com/openclaw/openclaw/issues/152245) [Bug]: gateway.publicOrigin not wired into LINE plugin outbound media (createHostedOutboundMediaStore unused) `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#151554](https://github.com/openclaw/openclaw/issues/151554) [Feature]: Show pasted text as a compact comment-style chip `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` `impact:ux-friction` 💬1
- [#152234](https://github.com/openclaw/openclaw/issues/152234) Plugin SDK: optional typed judgment providers for native consumers `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#152229](https://github.com/openclaw/openclaw/issues/152229) Control UI: apply a theme’s default fonts and colors when selecting it `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` `impact:ux-friction` 💬1
- [#152224](https://github.com/openclaw/openclaw/issues/152224) Update failure: finalize:doctor (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#151988](https://github.com/openclaw/openclaw/issues/151988) [Feature]: Start background sessions from the command palette `enhancement` `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#152218](https://github.com/openclaw/openclaw/issues/152218) Refresh workspace dependencies with September 11 release cutoff `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#152216](https://github.com/openclaw/openclaw/issues/152216) [Bug]: Hidden welcome content shifts New Session when switching agents `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#152208](https://github.com/openclaw/openclaw/issues/152208) Shared pluggable decision engine for Auto model routing and more `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#152204](https://github.com/openclaw/openclaw/issues/152204) Background exec completion starves when its requester session stays busy `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#152201](https://github.com/openclaw/openclaw/issues/152201) [Bug]: Page tabs shift horizontally when a scrollbar appears after loading `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#151853](https://github.com/openclaw/openclaw/issues/151853) Discord: replies to bot-posted notifications lose the quoted message text 💬1
- [#152113](https://github.com/openclaw/openclaw/issues/152113) [Bug]: PreparedModelCatalogConfigReplacedError still wedges channel reply dispatch after #128515/#133221 `bug` `bug:behavior` `P1` `impact:message-loss` 💬1
- [#152105](https://github.com/openclaw/openclaw/issues/152105) [Bug]: A2A task can complete on model fallback notice before the actual final answer `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#152103](https://github.com/openclaw/openclaw/issues/152103) [Bug]: Feishu react and reactions fail with "Feishu reaction requires messageId." when messageId is omitted `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#152091](https://github.com/openclaw/openclaw/issues/152091) Control UI: Debug refresh shifts populated snapshots down and back `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#152199](https://github.com/openclaw/openclaw/issues/152199) [Bug]: Automations Name field jumps on the first keystroke `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#152197](https://github.com/openclaw/openclaw/issues/152197) Update failure: unexpected-error (2026.9.4) `P0` `impact:ux-release-blocker` 💬1
- [#152193](https://github.com/openclaw/openclaw/issues/152193) Update failure: unexpected-error (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#152141](https://github.com/openclaw/openclaw/issues/152141) [Bug]: Attachment preparation replaces the thumbnail area with a loading row `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#152167](https://github.com/openclaw/openclaw/issues/152167) [Feature]: keep each history image adjacent to its message in Codex turn/start (interleave items instead of one text + flat image list) `P2` `impact:session-state` 💬1
- [#152151](https://github.com/openclaw/openclaw/issues/152151) Control UI: Gateway activity collapses its loading row on the first response `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#152150](https://github.com/openclaw/openclaw/issues/152150) Control UI: Gateway charts push settings down on the first automatic refresh `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#152081](https://github.com/openclaw/openclaw/issues/152081) [Bug]: dashboard test file exceeds line cap after concurrent UI merges `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#152144](https://github.com/openclaw/openclaw/issues/152144) [Bug]: talk.session.cancelOutput terminates the whole realtime Talk session instead of cancelling output `P1` `impact:session-state` `impact:ux-friction` 💬1
- [#152106](https://github.com/openclaw/openclaw/issues/152106) Control UI: reopening a scrolled picker hides its selected option `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#151326](https://github.com/openclaw/openclaw/issues/151326) Gemini native requests reject serialized ~optional tool schema metadata `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#151970](https://github.com/openclaw/openclaw/issues/151970) [Bug]: Chat jumps to the beginning after closing a search with no matches `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#151981](https://github.com/openclaw/openclaw/issues/151981) [Feature]: Navigate between images in a chat message lightbox `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` `impact:ux-friction` 💬1
- [#152059](https://github.com/openclaw/openclaw/issues/152059) [Bug]: Canceling New group from the session menu loses keyboard focus `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#152033](https://github.com/openclaw/openclaw/issues/152033) [Feature]: Add a selectable Carapace theme to Appearance `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#152047](https://github.com/openclaw/openclaw/issues/152047) [Bug]: config.patch rejects explicit keyed agent deletions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#152036](https://github.com/openclaw/openclaw/issues/152036) [Feature]: Show profile avatars inside selected human mentions `enhancement` `maintainer` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#151928](https://github.com/openclaw/openclaw/issues/151928) Reduce duplicated filesystem transfer and discovery loops `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#152015](https://github.com/openclaw/openclaw/issues/152015) [Feature]: Supported user-authorized APK document delivery from host-local media `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#151963](https://github.com/openclaw/openclaw/issues/151963) [Feature]: Recognizable avatar-led search results `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` `impact:ux-friction` 💬1
- [#152004](https://github.com/openclaw/openclaw/issues/152004) [Feature]: Automatically prepare Chrome extension installation and pairing from desktop apps `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#151999](https://github.com/openclaw/openclaw/issues/151999) [Bug]: Grouped sidebar clears and rebuilds its session list during reconnect `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#151937](https://github.com/openclaw/openclaw/issues/151937) [Bug]: Chat leaves the end of the conversation behind after narrowing split view `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#151983](https://github.com/openclaw/openclaw/issues/151983) [Bug]: Tool group summaries repeat long commands and split Exec counts `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#151980](https://github.com/openclaw/openclaw/issues/151980) [Feature]: Session model pins should inherit the agent's fallback chain `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `impact:auth-provider` 💬1
- [#151971](https://github.com/openclaw/openclaw/issues/151971) Chat 'flutter' and 'Reply operation has no active tool authority snapshot' error `P1` `impact:session-state` `impact:message-loss` `issue-rating: 🦪 silver shellfish` 💬1
- [#151948](https://github.com/openclaw/openclaw/issues/151948) [Bug]: Delivered expired subagent completions remain blocked and stop new launches `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#151964](https://github.com/openclaw/openclaw/issues/151964) [Bug]: media generation completion wake queues behind the requester's own run — image_generate action=status deadlocks on "Generated media; delivering completion" and then logs a false delivery failure `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#151364](https://github.com/openclaw/openclaw/issues/151364) [Bug]: Teams reaction actions ignore the current inbound message ID `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#151804](https://github.com/openclaw/openclaw/issues/151804) [Bug]: Canceling Crabbox wrapper runs can interrupt local staging cleanup `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#151905](https://github.com/openclaw/openclaw/issues/151905) Many active agent databases can delay I/O despite per-store write yielding `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#151944](https://github.com/openclaw/openclaw/issues/151944) agent exec fails with GATEWAY_SECRET_REF_UNAVAILABLE when gateway.auth.token is a store SecretRef (preflight cannot bootstrap; documented workarounds don't apply) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#151566](https://github.com/openclaw/openclaw/issues/151566) [Bug]: automatic update campaign records a failed update run whose cause is never logged `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#151914](https://github.com/openclaw/openclaw/issues/151914) Memory: allow stable extra paths to opt out of mtime decay `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:linked-pr-open` 💬1
- [#151876](https://github.com/openclaw/openclaw/issues/151876) Activity people projection formats participants that cannot appear in the people list `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#151901](https://github.com/openclaw/openclaw/issues/151901) [Feature]: Supported plugin-owned one-shot ACP runtime `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#151899](https://github.com/openclaw/openclaw/issues/151899) [Bug]: Exec delivery banner renders commands garbled as pseudo-Python ("print text → … in …") and flags failure even when the task succeeds — recurrence of #125446 `P2` `impact:ux-friction` 💬1
- [#151895](https://github.com/openclaw/openclaw/issues/151895) [Bug]: Chat code blocks collapse again after scrolling away and back `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#151882](https://github.com/openclaw/openclaw/issues/151882) [Bug]: Image preview still scales when reduced motion is enabled `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#151866](https://github.com/openclaw/openclaw/issues/151866) [Bug]: memory-core dreaming sentinel reaches provider with explicit OpenClaw runtime (2026.9.4) `P2` `impact:session-state` 💬1
- [#151860](https://github.com/openclaw/openclaw/issues/151860) allowedAgents can disagree with configured ACP adapters (ghost-agent / enumeration risk) `P3` 💬1
- [#151855](https://github.com/openclaw/openclaw/issues/151855) [Bug]: every built-in "openclaw" system-expert tool call fails in lease admission with "prepared model runtime plugin generation was superseded" (2026.9.x, no disabled provider plugin involved) `P1` `impact:auth-provider` `impact:ux-friction` 💬1
- [#151850](https://github.com/openclaw/openclaw/issues/151850) [Bug]: Closing the last Chat side-panel tab loses keyboard focus `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#151553](https://github.com/openclaw/openclaw/issues/151553) Control UI: mobile page navigation briefly overlaps the topbar and shifts content `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#151808](https://github.com/openclaw/openclaw/issues/151808) [Bug]: `channels login --account` accepts over-length and metacharacter-bearing account ids without validation `P3` 💬1
- [#151807](https://github.com/openclaw/openclaw/issues/151807) [Bug]: sessions_send with empty message body leaks internal runtime context wrapper as visible content `P2` `clawsweeper:needs-info` `impact:session-state` `issue-rating: 🦐 gold shrimp` 💬1
- [#151803](https://github.com/openclaw/openclaw/issues/151803) Devices: late Gateway metrics shift the visible inventory down `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#151797](https://github.com/openclaw/openclaw/issues/151797) buzz: archiving one room (or any bus rebuild) silently aborts in-flight replies in every other room `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#151796](https://github.com/openclaw/openclaw/issues/151796) Profile: initial Identity loading shifts Connected accounts out of place `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#151793](https://github.com/openclaw/openclaw/issues/151793) [Qwen provider] Token Plan: model catalog lags the endpoint, reasoning-replay compat missing, and provider-level failure handling is misleading `P1` `clawsweeper:needs-live-repro` `impact:auth-provider` `issue-rating: 🐚 platinum hermit` 💬1
- [#151790](https://github.com/openclaw/openclaw/issues/151790) Discord direct-mode CLI send can outlive the message by 30-47s; callers' deadlines kill it mid-bookkeeping `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬1
- [#151787](https://github.com/openclaw/openclaw/issues/151787) Agents: initial roster load shows a false selection prompt and shifts the narrow toolbar `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#151774](https://github.com/openclaw/openclaw/issues/151774) Tasks: initial loading shows zero counts and empty results before the snapshot arrives `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#151768](https://github.com/openclaw/openclaw/issues/151768) [Bug]: Agent loses sight of background exec sessions started mid-turn; active-exec runtime facts computed against wrong process scope `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#151751](https://github.com/openclaw/openclaw/issues/151751) Tasks: closing a transcript loses the originating list position and keyboard focus `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#151756](https://github.com/openclaw/openclaw/issues/151756) Update: run the Homebrew upgrade itself for openclaw-cli installs instead of only advising `enhancement` `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151749](https://github.com/openclaw/openclaw/issues/151749) [Bug]: Automation run-alias placement pins the alias key, so turns addressed by the job's stable session key are refused `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#151746](https://github.com/openclaw/openclaw/issues/151746) `markdownDetails` capability is granted by channel name, so non-browser webchat clients get raw `<details>` tags `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#151742](https://github.com/openclaw/openclaw/issues/151742) Automations: disabled scheduler banner shifts controls after initial render `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#151744](https://github.com/openclaw/openclaw/issues/151744) Automations: narrow header grows when the agent selector loads `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#151613](https://github.com/openclaw/openclaw/issues/151613) Video tool construction repeats plugin-policy normalization across manifests `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#151716](https://github.com/openclaw/openclaw/issues/151716) WebUI: Advanced settings header shifts columns after schema loading `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#151345](https://github.com/openclaw/openclaw/issues/151345) Telegram progress draft is suppressed whenever a plugin registers a modifying outbound hook `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#151720](https://github.com/openclaw/openclaw/issues/151720) Coercion helper checks serialize repository source reads `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#151725](https://github.com/openclaw/openclaw/issues/151725) /new (or /reset) carries forward the previous session's last-used model instead of resolving the agent's current configured default `P2` `impact:session-state` `impact:auth-provider` 💬1
- [#151328](https://github.com/openclaw/openclaw/issues/151328) Telegram deletes a pending ask_user question card when the tool-progress draft is retired `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#151625](https://github.com/openclaw/openclaw/issues/151625) Control UI: global command palette hides selected results below short viewports `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#151705](https://github.com/openclaw/openclaw/issues/151705) active-memory: recall always skipped with destination-not-allowed in subagent / isolated cron sessions (hook context missing agent identity) `P3` `impact:session-state` 💬1
- [#151659](https://github.com/openclaw/openclaw/issues/151659) Control UI: changing Sessions filters collapses the loading table and resets page scroll `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#151629](https://github.com/openclaw/openclaw/issues/151629) [Bug]: Non-strict Computer Use readiness blocks Codex turn startup for up to 120 seconds `bug` `maintainer` `P1` `clawsweeper:source-repro` 💬1
- [#151690](https://github.com/openclaw/openclaw/issues/151690) [Feature]: Support Jev / OpenJev for fast, repeatable decisions and bulk classification `enhancement` `P3` 💬1
- [#151660](https://github.com/openclaw/openclaw/issues/151660) Control UI: Sessions tooltip events desynchronize the Filters expanded state `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#151639](https://github.com/openclaw/openclaw/issues/151639) [Bug]: Telegram streaming delivers whole content array as JSON text (thinking blocks leaked) with anthropic-messages provider (MiniMax-M3) + thinkingLevel=adaptive `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:needs-info` 💬1
- [#151637](https://github.com/openclaw/openclaw/issues/151637) Control UI: command palette search status shifts results and footer by 52 px `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#151622](https://github.com/openclaw/openclaw/issues/151622) [Bug]: exec host=node always fails with "approval id does not match request" (sessionKey lost in runtime approval context) `bug` `bug:behavior` `P1` `impact:security` 💬1
- [#151628](https://github.com/openclaw/openclaw/issues/151628) Concurrent inbound message during long-running turn triggers 'no active tool authority snapshot' error, drops second message `P1` `impact:message-loss` 💬1
- [#151602](https://github.com/openclaw/openclaw/issues/151602) Long provider requests allocate complete temporary strings for retry fingerprinting `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#151621](https://github.com/openclaw/openclaw/issues/151621) Update failure: managed-service-handoff-unavailable (2026.9.4) `P0` `impact:ux-release-blocker` 💬1
- [#151620](https://github.com/openclaw/openclaw/issues/151620) OAuth login reports "Auth profile saved" but gateway model routes see zero usable openai profiles (2026.9.4, multi-agent, custom OPENCLAW_STATE_DIR) `impact:auth-provider` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#151614](https://github.com/openclaw/openclaw/issues/151614) Control UI: Incognito toggle makes the mobile composer overshoot and reverse `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#151558](https://github.com/openclaw/openclaw/issues/151558) [Bug]: Plugin hot reload waits on idle context-engine references and leaves the Gateway unready `bug` `maintainer` `P1` `clawsweeper:source-repro` 💬1
- [#151378](https://github.com/openclaw/openclaw/issues/151378) [Bug]: Long sidebar identity names are clipped without a readable overflow reveal `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#151386](https://github.com/openclaw/openclaw/issues/151386) Progress card jumps when pressing Enter `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#151605](https://github.com/openclaw/openclaw/issues/151605) [Bug]: Bound system-expert admission skips the configured model fallback chain `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#151600](https://github.com/openclaw/openclaw/issues/151600) Control UI: project search jumps when the workspace option is filtered out `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#151579](https://github.com/openclaw/openclaw/issues/151579) [Bug]: messaging type-test shard exceeds the 700-root guard on main `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#151572](https://github.com/openclaw/openclaw/issues/151572) [Feature]: Resume quota-exhausted turns on a configured fallback without replaying completed tool actions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#151414](https://github.com/openclaw/openclaw/issues/151414) Control UI: alerts above the composer have inconsistent corners `bug` `app: web-ui` `maintainer` `P3` 💬1
- [#151562](https://github.com/openclaw/openclaw/issues/151562) Normal steering queues during sustained automatic fallback despite unchanged model selection `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#151543](https://github.com/openclaw/openclaw/issues/151543) Control UI: New Session machine-name loading shifts the What selector `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#151542](https://github.com/openclaw/openclaw/issues/151542) Control UI: preserve responsive and scrolling behavior across shared styles `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151538](https://github.com/openclaw/openclaw/issues/151538) Control UI: centralize shared color, spacing, and geometry tokens `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151539](https://github.com/openclaw/openclaw/issues/151539) Control UI: consolidate focus, hover, and disabled styles `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151482](https://github.com/openclaw/openclaw/issues/151482) Control UI: consolidate select controls `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151540](https://github.com/openclaw/openclaw/issues/151540) Control UI: consolidate shared motion styles `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151541](https://github.com/openclaw/openclaw/issues/151541) Control UI: align shared styles with typography, theme, and density settings `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151481](https://github.com/openclaw/openclaw/issues/151481) Control UI: consolidate upload controls and dropzones `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151476](https://github.com/openclaw/openclaw/issues/151476) Control UI: consolidate secret fields `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151472](https://github.com/openclaw/openclaw/issues/151472) Control UI: consolidate shared components and visual styles `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151536](https://github.com/openclaw/openclaw/issues/151536) Control UI: consolidate Workboard widget presentation `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151537](https://github.com/openclaw/openclaw/issues/151537) Control UI: consolidate shared UI presentation across plugin boundaries `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151534](https://github.com/openclaw/openclaw/issues/151534) Control UI: consolidate charts and sparklines `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151535](https://github.com/openclaw/openclaw/issues/151535) Control UI: consolidate metric cards `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151533](https://github.com/openclaw/openclaw/issues/151533) Control UI: consolidate media previews `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151529](https://github.com/openclaw/openclaw/issues/151529) Control UI: consolidate code block presentation `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151526](https://github.com/openclaw/openclaw/issues/151526) Control UI: consolidate keyboard shortcut labels `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151532](https://github.com/openclaw/openclaw/issues/151532) Control UI: consolidate attachment cards `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151528](https://github.com/openclaw/openclaw/issues/151528) Control UI: consolidate Markdown presentation `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151519](https://github.com/openclaw/openclaw/issues/151519) Control UI: consolidate list row presentation `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151522](https://github.com/openclaw/openclaw/issues/151522) Control UI: consolidate resizable panel chrome `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151531](https://github.com/openclaw/openclaw/issues/151531) Control UI: consolidate log presentation `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151524](https://github.com/openclaw/openclaw/issues/151524) Control UI: consolidate icon rendering `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151525](https://github.com/openclaw/openclaw/issues/151525) Control UI: consolidate text and metadata styles `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151530](https://github.com/openclaw/openclaw/issues/151530) Control UI: consolidate file diff presentation `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151521](https://github.com/openclaw/openclaw/issues/151521) Control UI: consolidate toolbars and filter groups `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151523](https://github.com/openclaw/openclaw/issues/151523) Control UI: consolidate avatars `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151527](https://github.com/openclaw/openclaw/issues/151527) Control UI: consolidate separators `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151520](https://github.com/openclaw/openclaw/issues/151520) Control UI: consolidate card and panel surfaces `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151518](https://github.com/openclaw/openclaw/issues/151518) Control UI: consolidate table presentation `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151474](https://github.com/openclaw/openclaw/issues/151474) Control UI: consolidate textareas 💬1
- [#151517](https://github.com/openclaw/openclaw/issues/151517) Control UI: consolidate disclosure controls `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151516](https://github.com/openclaw/openclaw/issues/151516) Control UI: consolidate panel error states `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151513](https://github.com/openclaw/openclaw/issues/151513) Control UI: consolidate shimmer styles `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151514](https://github.com/openclaw/openclaw/issues/151514) Control UI: consolidate spinners `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151515](https://github.com/openclaw/openclaw/issues/151515) Control UI: consolidate empty states `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151512](https://github.com/openclaw/openclaw/issues/151512) Control UI: consolidate skeleton styles `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151506](https://github.com/openclaw/openclaw/issues/151506) Control UI: consolidate tooltips `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151511](https://github.com/openclaw/openclaw/issues/151511) Control UI: consolidate command palette presentation `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151510](https://github.com/openclaw/openclaw/issues/151510) Control UI: consolidate dialog, drawer, and sheet presentation `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151503](https://github.com/openclaw/openclaw/issues/151503) Control UI: consolidate alerts and banners `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151504](https://github.com/openclaw/openclaw/issues/151504) Control UI: consolidate status indicators and badges `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151505](https://github.com/openclaw/openclaw/issues/151505) Control UI: consolidate progress and capacity meters `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151509](https://github.com/openclaw/openclaw/issues/151509) Control UI: consolidate dropdown and context menus `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151507](https://github.com/openclaw/openclaw/issues/151507) Control UI: consolidate popovers and hovercards `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151501](https://github.com/openclaw/openclaw/issues/151501) Control UI: consolidate onboarding step controls `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151499](https://github.com/openclaw/openclaw/issues/151499) Control UI: consolidate breadcrumbs `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151502](https://github.com/openclaw/openclaw/issues/151502) Control UI: consolidate toast presentation `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151498](https://github.com/openclaw/openclaw/issues/151498) Control UI: consolidate sidebar navigation items `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151500](https://github.com/openclaw/openclaw/issues/151500) Control UI: consolidate pagination controls `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151496](https://github.com/openclaw/openclaw/issues/151496) Control UI: consolidate content tabs `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151497](https://github.com/openclaw/openclaw/issues/151497) Control UI: consolidate segmented controls `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151490](https://github.com/openclaw/openclaw/issues/151490) Control UI: consolidate toggle buttons `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151451](https://github.com/openclaw/openclaw/issues/151451) [Bug]: Chat messages sit too close together on mobile `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#151493](https://github.com/openclaw/openclaw/issues/151493) Control UI: consolidate navigation tabs `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151494](https://github.com/openclaw/openclaw/issues/151494) Control UI: consolidate panel tabs `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151495](https://github.com/openclaw/openclaw/issues/151495) Control UI: consolidate board tabs `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151492](https://github.com/openclaw/openclaw/issues/151492) Control UI: consolidate action groups `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151487](https://github.com/openclaw/openclaw/issues/151487) Control UI: consolidate color selection controls `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151489](https://github.com/openclaw/openclaw/issues/151489) Control UI: consolidate icon buttons `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151491](https://github.com/openclaw/openclaw/issues/151491) Control UI: consolidate copy actions and feedback `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151485](https://github.com/openclaw/openclaw/issues/151485) Control UI: consolidate date and time fields `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151488](https://github.com/openclaw/openclaw/issues/151488) Control UI: consolidate buttons `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151483](https://github.com/openclaw/openclaw/issues/151483) Control UI: consolidate contextual pickers `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151484](https://github.com/openclaw/openclaw/issues/151484) Control UI: consolidate multiselect controls `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151480](https://github.com/openclaw/openclaw/issues/151480) Control UI: consolidate switches `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151486](https://github.com/openclaw/openclaw/issues/151486) Control UI: consolidate range controls `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151479](https://github.com/openclaw/openclaw/issues/151479) Control UI: consolidate radio controls and option cards `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151478](https://github.com/openclaw/openclaw/issues/151478) Control UI: consolidate checkboxes `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151473](https://github.com/openclaw/openclaw/issues/151473) Control UI: consolidate text and number inputs `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151475](https://github.com/openclaw/openclaw/issues/151475) Control UI: consolidate search fields `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151477](https://github.com/openclaw/openclaw/issues/151477) Control UI: consolidate field labels, help, and validation `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#151439](https://github.com/openclaw/openclaw/issues/151439) Control UI: Usage context panel stretches to long conversations and clips its controls `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#151440](https://github.com/openclaw/openclaw/issues/151440) [Bug]: Transcript bubble corners differ from code blocks in rounded themes `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#151438](https://github.com/openclaw/openclaw/issues/151438) Control UI: Usage timeline loading shifts Conversation and ready context controls `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#151434](https://github.com/openclaw/openclaw/issues/151434) Usage Guard Policy: Retention & Notifications `P3` 💬1
- [#151431](https://github.com/openclaw/openclaw/issues/151431) Comments-only messages render an unnecessary bubble in Control UI `maintainer` `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#151408](https://github.com/openclaw/openclaw/issues/151408) Control UI: selecting a Usage session collapses the list on narrow screens `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#151413](https://github.com/openclaw/openclaw/issues/151413) [Bug]: Channel plugin's before_tool_call hook and trusted tool policy are registered, reported by plugins inspect, and never dispatched (hook-only plugin works) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` `impact:security` 💬1
- [#151405](https://github.com/openclaw/openclaw/issues/151405) [Feature]: Compact, searchable Agents directory `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` `impact:ux-friction` 💬1
- [#151391](https://github.com/openclaw/openclaw/issues/151391) Composer comments cannot be cleared together and deleting one closes the preview `maintainer` `P2` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` 💬1
- [#151369](https://github.com/openclaw/openclaw/issues/151369) [Bug]: doctor --fix reports a completed meeting transcript migration as refused and skips later repairs when its scratch file cannot be deleted `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#151374](https://github.com/openclaw/openclaw/issues/151374) Control UI hides audio transcripts without spaces `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#151368](https://github.com/openclaw/openclaw/issues/151368) WebChat 2026.9.4: sessions.history returns two assistant entries per turn (one id absent from storage); commentary replayed as combined preamble `P2` `impact:session-state` `impact:ux-friction` 💬1
- [#151362](https://github.com/openclaw/openclaw/issues/151362) Panels above the chat composer have flat backgrounds `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#151359](https://github.com/openclaw/openclaw/issues/151359) Feature request: rate-limit-aware message queue for cross-channel response recovery `P2` `impact:message-loss` 💬1
- [#151354](https://github.com/openclaw/openclaw/issues/151354) Feature Request: Auto-refresh model auth profiles when API keys change in Control UI `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` `impact:auth-provider` 💬1
- [#151352](https://github.com/openclaw/openclaw/issues/151352) [Feature]: Control UI login gate blocks password managers (no form, autocomplete=off) — allow opt-in save/autofill `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1

#### 🔒 Closed Issues
- [#150201](https://github.com/openclaw/openclaw/issues/150201) Windows: update candidate snapshot fails on 2026.9.3; Gateway SQLite check times out
- [#148529](https://github.com/openclaw/openclaw/issues/148529) 2026.9.4: Gateway takes ~12 minutes from start to ready on a 632-agent fleet (2026.7.1-2: ~2 s), with a per-phase breakdown
- [#142586](https://github.com/openclaw/openclaw/issues/142586) [Bug]: 2026.9.3 Doctor detects orphan task_delivery_state foreign keys but provides no supported recovery path
- [#140978](https://github.com/openclaw/openclaw/issues/140978) Discord message tool: channel-edit blocked by trust guard, pin/delete/read blocked by delegation guard (external plugin), even in the exact current conversation
- [#151295](https://github.com/openclaw/openclaw/issues/151295) [Bug]: Large fleets cannot upgrade from 2026.9.4: candidate Doctor exhausts the installed updater's 300 s canary budget, then writes a migration marker the installed runtime rejects
- [#151794](https://github.com/openclaw/openclaw/issues/151794) [plugins] A load-path-selected local plugin makes every openclaw update fail at finalize:plugins ("has no authoritative package-owner metadata")
- [#151883](https://github.com/openclaw/openclaw/issues/151883) A `type: "cli"` media model with no `command`/`args` passes config validation and doctor, then runs the command with no file
- [#151706](https://github.com/openclaw/openclaw/issues/151706) [Bug]: In-turn context-engine reload times out and leaves Gateway model runtime unavailable
- [#120306](https://github.com/openclaw/openclaw/issues/120306) [Bug]: Discord progress draft renders completed tool rows name-only, drops the resolved command/args (raw mode)
- [#136652](https://github.com/openclaw/openclaw/issues/136652) [Bug]: Icon cosmetics is wrong
- [#151265](https://github.com/openclaw/openclaw/issues/151265) [Bug]: Remote administrator management removes ordinary automation creation
- [#152170](https://github.com/openclaw/openclaw/issues/152170) [Bug]: Codex parents can lose completed delegated results after yielding
- [#151647](https://github.com/openclaw/openclaw/issues/151647) [Bug]: session group moves lack immediate feedback and lose confirmed placement on refresh failure
- [#151189](https://github.com/openclaw/openclaw/issues/151189) [Bug]: redaction sentinel `__OPENCLAW_REDACTED__` can be written into the secret store as the gateway token, locking out every paired device (and weakening auth to a public constant)
- [#137365](https://github.com/openclaw/openclaw/issues/137365) [Feature]: exec-approvals writes have no success-path audit log or confirmation gate for self-broadening
- [#151847](https://github.com/openclaw/openclaw/issues/151847) gateway tool's update.run ignores commands.ownerAllowFrom — only literal /update respects it
- [#151462](https://github.com/openclaw/openclaw/issues/151462) [Feature]: automatic updates for idle headless nodes
- [#151665](https://github.com/openclaw/openclaw/issues/151665) [Bug]: Claude CLI auth not detected in onboarding despite successful claude auth login inside OpenClawGateway WSL distro
- [#151376](https://github.com/openclaw/openclaw/issues/151376) config writes silently clear agents.defaults.sessionStore.agentId (2026.9.4)
- [#151577](https://github.com/openclaw/openclaw/issues/151577) [Bug]: messaging tsgo core test shard has 701 roots on main, tsgo-core-test-shards.test.ts fails on every PR
- [#151058](https://github.com/openclaw/openclaw/issues/151058) Scheduled message sends continue after job authority revocation
- [#134447](https://github.com/openclaw/openclaw/issues/134447) [Bug]: macOS UI never appears; Intel app hangs in AppKit Writing Tools startup (v2026.8.1)
- [#152072](https://github.com/openclaw/openclaw/issues/152072) Mentions should add sessions to Involving me, with personal hide/show
- [#152300](https://github.com/openclaw/openclaw/issues/152300) Telegram image sent as a file reaches the model as "Unsupported document format: image/png" instead of vision input
- [#152283](https://github.com/openclaw/openclaw/issues/152283) macOS app cannot authenticate native control and Voice Wake to a token-protected local gateway
- [#128409](https://github.com/openclaw/openclaw/issues/128409) fix(codex): bound native child hook admission lifetime
- [#150700](https://github.com/openclaw/openclaw/issues/150700) [Bug]: Native hook relay CLI can accept a response after its deadline
- [#150552](https://github.com/openclaw/openclaw/issues/150552) [Bug]: Matrix message read ignores --message-id and returns the newest room history instead
- [#152217](https://github.com/openclaw/openclaw/issues/152217) [Bug]: Tool and model latency histograms overflow above 10 seconds
- [#152178](https://github.com/openclaw/openclaw/issues/152178) Control UI: preserve person picker selection and selected profile photos
- [#151554](https://github.com/openclaw/openclaw/issues/151554) [Feature]: Show pasted text as a compact comment-style chip
- [#150531](https://github.com/openclaw/openclaw/issues/150531) [Bug]: Managed worktree creation fails with "output limit exceeded" when a repository has .worktreeinclude and a large ignored dependency tree
- [#152113](https://github.com/openclaw/openclaw/issues/152113) [Bug]: PreparedModelCatalogConfigReplacedError still wedges channel reply dispatch after #128515/#133221
- [#152197](https://github.com/openclaw/openclaw/issues/152197) Update failure: unexpected-error (2026.9.4)
- [#152141](https://github.com/openclaw/openclaw/issues/152141) [Bug]: Attachment preparation replaces the thumbnail area with a loading row
- [#152167](https://github.com/openclaw/openclaw/issues/152167) [Feature]: keep each history image adjacent to its message in Codex turn/start (interleave items instead of one text + flat image list)
- [#152081](https://github.com/openclaw/openclaw/issues/152081) [Bug]: dashboard test file exceeds line cap after concurrent UI merges
- [#152144](https://github.com/openclaw/openclaw/issues/152144) [Bug]: talk.session.cancelOutput terminates the whole realtime Talk session instead of cancelling output
- [#151326](https://github.com/openclaw/openclaw/issues/151326) Gemini native requests reject serialized ~optional tool schema metadata
- [#151981](https://github.com/openclaw/openclaw/issues/151981) [Feature]: Navigate between images in a chat message lightbox
- [#151119](https://github.com/openclaw/openclaw/issues/151119) [Bug]: doctor --fix cannot repair a tool policy that sets both allow and alsoAllow without a profile, so the Gateway stays down
- [#151928](https://github.com/openclaw/openclaw/issues/151928) Reduce duplicated filesystem transfer and discovery loops
- [#151963](https://github.com/openclaw/openclaw/issues/151963) [Feature]: Recognizable avatar-led search results
- [#151948](https://github.com/openclaw/openclaw/issues/151948) [Bug]: Delivered expired subagent completions remain blocked and stop new launches
- [#151364](https://github.com/openclaw/openclaw/issues/151364) [Bug]: Teams reaction actions ignore the current inbound message ID
- [#151804](https://github.com/openclaw/openclaw/issues/151804) [Bug]: Canceling Crabbox wrapper runs can interrupt local staging cleanup
- [#151905](https://github.com/openclaw/openclaw/issues/151905) Many active agent databases can delay I/O despite per-store write yielding
- [#151566](https://github.com/openclaw/openclaw/issues/151566) [Bug]: automatic update campaign records a failed update run whose cause is never logged
- [#147586](https://github.com/openclaw/openclaw/issues/147586) [Feature]: Consolidate model setup into Models settings
- [#151876](https://github.com/openclaw/openclaw/issues/151876) Activity people projection formats participants that cannot appear in the people list
- [#151899](https://github.com/openclaw/openclaw/issues/151899) [Bug]: Exec delivery banner renders commands garbled as pseudo-Python ("print text → … in …") and flags failure even when the task succeeds — recurrence of #125446
- [#151866](https://github.com/openclaw/openclaw/issues/151866) [Bug]: memory-core dreaming sentinel reaches provider with explicit OpenClaw runtime (2026.9.4)
- [#151860](https://github.com/openclaw/openclaw/issues/151860) allowedAgents can disagree with configured ACP adapters (ghost-agent / enumeration risk)
- [#151855](https://github.com/openclaw/openclaw/issues/151855) [Bug]: every built-in "openclaw" system-expert tool call fails in lease admission with "prepared model runtime plugin generation was superseded" (2026.9.x, no disabled provider plugin involved)
- [#127156](https://github.com/openclaw/openclaw/issues/127156) [Bug]: Gravatar coalescing shares caller deadlines and retains disconnected waiters
- [#151808](https://github.com/openclaw/openclaw/issues/151808) [Bug]: `channels login --account` accepts over-length and metacharacter-bearing account ids without validation
- [#127125](https://github.com/openclaw/openclaw/issues/127125) [Bug]: Failed ACPX admission retains managed-tools delegate
- [#127081](https://github.com/openclaw/openclaw/issues/127081) [Bug]: Durable browser tab retirement retains cold activity identities
- [#151613](https://github.com/openclaw/openclaw/issues/151613) Video tool construction repeats plugin-policy normalization across manifests
- [#151720](https://github.com/openclaw/openclaw/issues/151720) Coercion helper checks serialize repository source reads
- [#151725](https://github.com/openclaw/openclaw/issues/151725) /new (or /reset) carries forward the previous session's last-used model instead of resolving the agent's current configured default
- [#151705](https://github.com/openclaw/openclaw/issues/151705) active-memory: recall always skipped with destination-not-allowed in subagent / isolated cron sessions (hook context missing agent identity)
- [#151629](https://github.com/openclaw/openclaw/issues/151629) [Bug]: Non-strict Computer Use readiness blocks Codex turn startup for up to 120 seconds
- [#151690](https://github.com/openclaw/openclaw/issues/151690) [Feature]: Support Jev / OpenJev for fast, repeatable decisions and bulk classification
- [#147982](https://github.com/openclaw/openclaw/issues/147982) Simplify Gateway session-name precedence
- [#145906](https://github.com/openclaw/openclaw/issues/145906) Retired Control UI connections retain obsolete reply previews
- [#151628](https://github.com/openclaw/openclaw/issues/151628) Concurrent inbound message during long-running turn triggers 'no active tool authority snapshot' error, drops second message
- [#151602](https://github.com/openclaw/openclaw/issues/151602) Long provider requests allocate complete temporary strings for retry fingerprinting
- [#151621](https://github.com/openclaw/openclaw/issues/151621) Update failure: managed-service-handoff-unavailable (2026.9.4)
- [#151558](https://github.com/openclaw/openclaw/issues/151558) [Bug]: Plugin hot reload waits on idle context-engine references and leaves the Gateway unready
- [#151378](https://github.com/openclaw/openclaw/issues/151378) [Bug]: Long sidebar identity names are clipped without a readable overflow reveal
- [#150438](https://github.com/openclaw/openclaw/issues/150438) Unavailable image attachment card keeps its preview height and loses its border at the corners
- [#151386](https://github.com/openclaw/openclaw/issues/151386) Progress card jumps when pressing Enter
- [#150781](https://github.com/openclaw/openclaw/issues/150781) Refactor searchable TUI highlighting onto the ANSI owner
- [#138867](https://github.com/openclaw/openclaw/issues/138867) [Bug]: openai-responses parser fails on DeepSeek Responses output with reasoning items (LLM returned invalid JSON)
- [#151579](https://github.com/openclaw/openclaw/issues/151579) [Bug]: messaging type-test shard exceeds the 700-root guard on main
- [#150541](https://github.com/openclaw/openclaw/issues/150541) Gateway retains plugin build temp directories after forced exits
- [#151414](https://github.com/openclaw/openclaw/issues/151414) Control UI: alerts above the composer have inconsistent corners
- [#151278](https://github.com/openclaw/openclaw/issues/151278) [Bug]: Teams polls can be submitted after message authority is withdrawn
- [#150724](https://github.com/openclaw/openclaw/issues/150724) Raw-trace usage diagnostics retain full transcript message arrays
- [#150617](https://github.com/openclaw/openclaw/issues/150617) Conversation delivery retries repeat synchronous query compilation
- [#148935](https://github.com/openclaw/openclaw/issues/148935) Retire private Doctor heartbeat-repair test hooks
- [#150467](https://github.com/openclaw/openclaw/issues/150467) [Bug]: Agent shell reports enter other sessions as human messages
- [#151434](https://github.com/openclaw/openclaw/issues/151434) Usage Guard Policy: Retention & Notifications
- [#151368](https://github.com/openclaw/openclaw/issues/151368) WebChat 2026.9.4: sessions.history returns two assistant entries per turn (one id absent from storage); commentary replayed as combined preamble
- [#150422](https://github.com/openclaw/openclaw/issues/150422) Mobile web UI: chat bubbles should keep a side margin instead of going full width
- [#150878](https://github.com/openclaw/openclaw/issues/150878) Control UI theme flashes need coverage across first paint, profile loading, and reconnect
- [#151238](https://github.com/openclaw/openclaw/issues/151238) Composer reply and mention previews look detached from the input
- [#151359](https://github.com/openclaw/openclaw/issues/151359) Feature request: rate-limit-aware message queue for cross-channel response recovery

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 246,918 · **Open issues:** 43,565 · **Last push:** <1h ago

On September 19, 2026, there were no new releases for Hermes Agent. However, significant progress was made with the merging of PR #114322, which added the pstack plugin to the catalog, and PR #114863, which improved the gateway's non-interactive startup process on Windows by resolving an installation issue. Among the new issues logged, the most notable is #115061, which highlights a problem where tool-call JSON that arrives truncated or malformed is not repaired, leaving plugins without a native button callback. Other noteworthy issues include a bug causing data loss when deleting attachments and a troubling exit code for the Hermes update process, indicating “Fleet restart incomplete.” Overall, while the day reflected routine maintenance, the ongoing challenges underline the need for continued improvement in system reliability.

#### ✅ Merged PRs
- [#114322](https://github.com/NousResearch/hermes-agent/pull/114322) plugin-catalog: add pstack (community)
- [#114863](https://github.com/NousResearch/hermes-agent/pull/114863) fix(gateway-windows): non-interactive `gateway start` starts the gateway without installing login auto-start (#113977)

#### 🐛 New Issues
- [#115061](https://github.com/NousResearch/hermes-agent/issues/115061) Tool-call JSON that arrives truncated/malformed is not repaired; plugins have no native button callback `type/bug` `comp/agent` `provider/deepseek` `P2` 💬6
- [#115462](https://github.com/NousResearch/hermes-agent/issues/115462) [Bug]: Desktop - prompt clip: single click expands and collapses at once, clean state collapses on any mouse move `type/bug` `P3` `comp/desktop` `bug` 💬3
- [#115311](https://github.com/NousResearch/hermes-agent/issues/115311) hermes update exits 1 with "Fleet restart incomplete" after a successful code update — empty fleet_restart_pending obligation can never be discharged `type/bug` `comp/cli` `comp/gateway` `P2` 💬3
- [#114564](https://github.com/NousResearch/hermes-agent/issues/114564) [Bug]: kanban delete_attachment() unlinks a blob another row still references — silent data loss (shared stored_path) `type/bug` `comp/cron` `P3` 💬2
- [#115306](https://github.com/NousResearch/hermes-agent/issues/115306) [Bug]: AQ. Gemini keys from Google AI studio no longer work `type/bug` `comp/agent` `provider/gemini` `area/auth` 💬2
- [#115517](https://github.com/NousResearch/hermes-agent/issues/115517) External context engines: pass max_tokens to update_model() (+ optional compaction event) `type/feature` `comp/agent` `comp/plugins` `P3` 💬1
- [#115505](https://github.com/NousResearch/hermes-agent/issues/115505) hermes dashboard /chat on mobile: Android IME/composition input duplicates words and reverts Backspace deletions `type/bug` `P3` `comp/dashboard` 💬1
- [#115366](https://github.com/NousResearch/hermes-agent/issues/115366) [skills-index-watchdog] Skills index is stale or degraded (degraded) `type/bug` `tool/skills` `P3` `sweeper:risk-automation` 💬1
- [#115475](https://github.com/NousResearch/hermes-agent/issues/115475) Bug: hardcoded stream: True in gateway API call leaks DSML tool-call markup into Telegram `type/bug` `comp/gateway` `platform/telegram` `provider/nous` 💬1
- [#115342](https://github.com/NousResearch/hermes-agent/issues/115342) [Bug]: write_file/patch report a bogus `[Errno 2]` when the process cwd was deleted — LSP workspace resolver raises after a successful write `type/bug` `tool/file` `P2` `comp/lsp` 💬1
- [#115516](https://github.com/NousResearch/hermes-agent/issues/115516) [Bug]: Gateway exits 75 when the startup warm-up warning blocks the event loop on a contended logging handler lock `type/bug` `comp/gateway` `platform/discord` `P2`
- [#115528](https://github.com/NousResearch/hermes-agent/issues/115528) Relay session-scope fallback retries a RuntimeError raised by relay.scope.push itself
- [#115512](https://github.com/NousResearch/hermes-agent/issues/115512) [Bug]: Desktop SSH mode spawns `hermes serve --isolated` under umask 077 — every terminal-tool command (and sudo) creates 0600/0700 files `type/bug` `backend/ssh` `tool/terminal` `P2`
- [#115499](https://github.com/NousResearch/hermes-agent/issues/115499) [Bug]: hindsight_reflect ignores the configured tag filter, so reflect scans the whole bank `type/bug` `comp/plugins` `tool/memory` `area/config`
- [#115496](https://github.com/NousResearch/hermes-agent/issues/115496) [Bug]: Retired OpenCode Zen model x-preview-f-free stays in the picker — exclusion set names the wrong slug and the curated catalog is never filtered `type/bug` `comp/cli` `P3`
- [#115489](https://github.com/NousResearch/hermes-agent/issues/115489) [Bug] Lineage-wide archive hides the live messaging tip from the Desktop sidebar (orphan-reap collateral) `type/bug` `comp/agent` `comp/gateway` `platform/feishu`
- [#115490](https://github.com/NousResearch/hermes-agent/issues/115490) [Bug][Desktop]: live background process missing from background list after cancelled kill `type/bug` `tool/terminal` `P2` `sweeper:risk-session-state`
- [#115493](https://github.com/NousResearch/hermes-agent/issues/115493) [Bug]: /undo and /retry are dead for the rest of a session after a turn ends with no assistant reply ("session history changed before the rewind could be persisted") `type/bug` `comp/agent` `comp/cli` `P2`
- [#115376](https://github.com/NousResearch/hermes-agent/issues/115376) [Feature] Agent-managed scoped work: recursive Sections, reusable Bots, threads, groups and views `type/feature` `P3` `comp/desktop` `area/sessions`
- [#115478](https://github.com/NousResearch/hermes-agent/issues/115478) Composer path completion on a docker backend sends every listing to the smart-approval LLM (idle Desktop makes model calls every ~4 min) `type/bug` `comp/tui` `tool/terminal` `backend/docker`
- [#115481](https://github.com/NousResearch/hermes-agent/issues/115481) tirith_security.py maps Android/Termux to unknown-linux-gnu, installing an unrunnable (glibc) binary `type/bug` `duplicate` `comp/tools` `P3`
- [#115482](https://github.com/NousResearch/hermes-agent/issues/115482) Agent burns 60k-100k tokens on trivial setup tasks and delivers nothing `type/bug` `comp/agent` `tool/skills` `area/docker`
- [#115483](https://github.com/NousResearch/hermes-agent/issues/115483) [Bug]: Dead stdio MCP child causes zero-timeout lifecycle spin and starves gateway after 180s `type/bug` `comp/tools` `tool/mcp` `P1`
- [#115469](https://github.com/NousResearch/hermes-agent/issues/115469) [Bug]: Cron standalone-delivery fallback waits unbounded; a hung cron run can never be skipped by the restart drain `type/bug` `comp/gateway` `comp/cron` `P2`
- [#115470](https://github.com/NousResearch/hermes-agent/issues/115470) cron: job with --script loses its pre-run Script Output block when dispatched by the live scheduler (works via cron tick) `type/bug` `comp/cron` `P2` `needs-repro`
- [#115471](https://github.com/NousResearch/hermes-agent/issues/115471) Relay scope-handle race on concurrent turns: 'scope handle is not at the top of the stack' in shared-metrics close path `type/bug` `comp/agent` `comp/cli` `P3`
- [#115439](https://github.com/NousResearch/hermes-agent/issues/115439) [Bug]: No env user allowlists configured warning shown in API-only setup with zero messaging platforms `type/bug` `comp/gateway` `P3` `bug`
- [#115464](https://github.com/NousResearch/hermes-agent/issues/115464) [Bug]: Desktop - auto-scroll during streaming discards the active text selection (cannot copy while streaming) `type/bug` `P3` `needs-repro` `comp/desktop`
- [#115466](https://github.com/NousResearch/hermes-agent/issues/115466) [Bug]: self-update v0.21.1 → v0.21.3 aborts the fleet tail with `TypeError: _find_stale_dashboard_pids() got an unexpected keyword argument 'scope_home'` (mixed pre/post-pull modules) — update lands but is reported failed `type/bug` `comp/cli` `comp/gateway` `P2`
- [#115467](https://github.com/NousResearch/hermes-agent/issues/115467) [dande-crm MCP] listar_negocios ignora parametro criados_ate (regressao 18/09/2026) `invalid` `tool/mcp` `P3`
- [#115460](https://github.com/NousResearch/hermes-agent/issues/115460) [Bug]: Kanban notifications to a profile_routes-pinned chat are undeliverable when the pinned profile has other-platform adapters but no adapter for the subscription's platform (silent rewind) `type/bug` `comp/gateway` `comp/cron` `platform/telegram`
- [#115451](https://github.com/NousResearch/hermes-agent/issues/115451) Dashboard chat: accept non-image file attachments (drag/drop, paste, attach button) `type/feature` `P3` `comp/dashboard`
- [#115345](https://github.com/NousResearch/hermes-agent/issues/115345) [Bug]: Desktop cron run history is scoped to the active profile while the job list is cross-profile — non-owner jobs always show "No runs yet"; maintainer decision requested on list scope `type/bug` `comp/cron` `P2` `sweeper:risk-session-state`
- [#115329](https://github.com/NousResearch/hermes-agent/issues/115329) MCP OAuth: token request sent without User-Agent → CloudFront WAF 403 at token exchange; login also deletes cached AS metadata it then needs (TradingView MCP) `type/bug` `comp/cli` `comp/tools` `tool/mcp`
- [#115313](https://github.com/NousResearch/hermes-agent/issues/115313) Desktop: slash command silently degrades to a chat message when an attachment is present (/goal never sets goal/criteria) `type/bug` `duplicate` `P2` `comp/desktop`

#### 🔒 Closed Issues
- [#114564](https://github.com/NousResearch/hermes-agent/issues/114564) [Bug]: kanban delete_attachment() unlinks a blob another row still references — silent data loss (shared stored_path)
- [#114509](https://github.com/NousResearch/hermes-agent/issues/114509) Restart-safe cron worker becomes a zombie when terminal state is observed before child exit
- [#113977](https://github.com/NousResearch/hermes-agent/issues/113977) [Bug]: Windows 'hermes gateway start' installs login auto-start on non-interactive stdin - all three prompts default to Yes
- [#84838](https://github.com/NousResearch/hermes-agent/issues/84838) [Bug] MiniMax API-key provider: anthropic_messages transport but no base_url_override -> every call 404s when user has model.base_url=/v1 in config.yaml

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 92,126 · **Open issues:** 8,137 · **Last push:** <1h ago

Today was a routine maintenance day for vLLM, with no new releases. Significant merged pull requests included bug fixes for Multi-Model Communication, such as the resolution of intermittent ROCR host segmentation faults, and enhancements to diffusion models like DiffusionGemma, which now properly honors logprob_token_ids. Additionally, a notable performance optimization was implemented for MegaMoE staging and NVFP4 cache gathers. Among new issues, a significant concern has been raised regarding CUDA graph memory estimates potentially leading to out-of-memory (OOM) errors during high GPU memory utilization, indicating a need for further attention in this area.

#### ✅ Merged PRs
- [#57362](https://github.com/vllm-project/vllm/pull/57362) [CI] Reclaim GPU memory between model initialization tests
- [#56456](https://github.com/vllm-project/vllm/pull/56456) [Bugfix][MRV2] Match fast-prefill padding to active LoRA batches
- [#56227](https://github.com/vllm-project/vllm/pull/56227) [Feat][Model] Support encoder-side SWA-bounded replay for DeepSeek-V4.1-Flash
- [#56841](https://github.com/vllm-project/vllm/pull/56841) [Bugfix][KVConnector] Make ExampleHiddenStatesConnector abort-safe
- [#57575](https://github.com/vllm-project/vllm/pull/57575) [Bugfix][MLA] Reserve sparse prefill buffers before KV cache sizing
- [#57583](https://github.com/vllm-project/vllm/pull/57583) [ROCm][CI] Shard MI300 Entrypoints Integration (Pooling)
- [#56162](https://github.com/vllm-project/vllm/pull/56162) [CI][ROCm] Deprecate DinD for MI250 test groups
- [#57570](https://github.com/vllm-project/vllm/pull/57570) [Bugfix][NIXL] Avoid receive reports for notification-only requests
- [#57417](https://github.com/vllm-project/vllm/pull/57417) [Model] DiffusionGemma: honor logprob_token_ids on the converging step
- [#57604](https://github.com/vllm-project/vllm/pull/57604) [Perf][DSV4.1] Optimize MegaMoE staging and NVFP4 cache gathers
- [#50045](https://github.com/vllm-project/vllm/pull/50045) [KV Offloading] Back-pressure detection and remediation
- [#50455](https://github.com/vllm-project/vllm/pull/50455) [ROCm][DSv4] Fix sparse-indexer logits collapse on gfx950/gfx942
- [#57576](https://github.com/vllm-project/vllm/pull/57576) [Multimodal] Type dummy options per modality
- [#57520](https://github.com/vllm-project/vllm/pull/57520) [Deprecation] Remove assistant_token_mask support
- [#55854](https://github.com/vllm-project/vllm/pull/55854) [Nixl] Separate transport-failure metrics from KV expiry
- [#53936](https://github.com/vllm-project/vllm/pull/53936) [Core] Make parallel sampling (n>1) reqs admission atomic
- [#57485](https://github.com/vllm-project/vllm/pull/57485) [XPU] sleep mode: fix KV cache release test
- [#57465](https://github.com/vllm-project/vllm/pull/57465) [DeepSeek V4] Fix fused MoE expert distribution
- [#57556](https://github.com/vllm-project/vllm/pull/57556) [Misc] Remove unnecessary Transformers version guards
- [#50550](https://github.com/vllm-project/vllm/pull/50550) [Frontend] Add stream reasoning and tool calls from the derender endpoint
- [#53162](https://github.com/vllm-project/vllm/pull/53162) [Quantization][XPU] Enable int8_w8a8 MoE on the Triton backend for XPU
- [#52101](https://github.com/vllm-project/vllm/pull/52101) [Distributed][MoonEP] BF16 integration of MoonEP balanced EP backend
- [#57563](https://github.com/vllm-project/vllm/pull/57563) [fix] Mistral-Large-3 accuracy regression on `main`
- [#57430](https://github.com/vllm-project/vllm/pull/57430) [Quantization] Support kimi-k3 routed expert quant
- [#57328](https://github.com/vllm-project/vllm/pull/57328) [ROCm][Bugfix] Fix intermittent ROCR host segfault
- [#55911](https://github.com/vllm-project/vllm/pull/55911) [Model][Gemma4] Load Weights with AutoWeightsLoader
- [#51856](https://github.com/vllm-project/vllm/pull/51856) [Bugfix] Attach request-level tools to existing system message in DeepSeek V4 Python renderer
- [#54142](https://github.com/vllm-project/vllm/pull/54142) [Mypy] Fix mypy typing for N/O models
- [#56325](https://github.com/vllm-project/vllm/pull/56325) [Tokenizer] Drop dead Mistral tokenizer shims for transformers#41962
- [#57272](https://github.com/vllm-project/vllm/pull/57272) [Frontend] Upgrade XGrammar to 0.2.7 and Rust structural tags to 0.3.0
- [#56882](https://github.com/vllm-project/vllm/pull/56882) [Bugfix][Multimodal] Preserve DeepSeek V4 image block spacing
- [#57361](https://github.com/vllm-project/vllm/pull/57361) [CI] Raise GSM8K startup max wait to 2400s for flaky 30B+ MoE eval configs
- [#57359](https://github.com/vllm-project/vllm/pull/57359) [CI] Add flaky rerun markers / timeout skips to sibling tests lacking them
- [#56649](https://github.com/vllm-project/vllm/pull/56649) [CI] Add residual timeout headroom after JIT rollback
- [#57287](https://github.com/vllm-project/vllm/pull/57287) [CI] Raise Elastic EP Scaling step timeout 30m -> 40m
- [#49942](https://github.com/vllm-project/vllm/pull/49942) [CPU] Add CPU FP8 W8A8 linear/MoE support
- [#48606](https://github.com/vllm-project/vllm/pull/48606) [Quantization] Support native Quark W4A16 INT4/UINT4 exports in vLLM
- [#57377](https://github.com/vllm-project/vllm/pull/57377) C3x SM100 FP8 blockwise - Pad activation scales to multiple of 4
- [#57142](https://github.com/vllm-project/vllm/pull/57142) [Bugfix][CPU] Fix macOS multimodal SHM cache initialization
- [#51065](https://github.com/vllm-project/vllm/pull/51065) [Bugfix][MLA] TritonMLA: fix illegal memory access on causal multi-token decode
- [#56777](https://github.com/vllm-project/vllm/pull/56777) [Rust Frontend] Return sampling masks over gRPC
- [#57502](https://github.com/vllm-project/vllm/pull/57502) [Bugfix][DBO] Fix DeepEP low-latency profiling crash with DP+EP+DBO
- [#55190](https://github.com/vllm-project/vllm/pull/55190) [Perf] Fuse CohereASR relative attention score accumulation
- [#56271](https://github.com/vllm-project/vllm/pull/56271) [Frontend] Fix the parsing of missing `string=` in DeepSeek V4
- [#57425](https://github.com/vllm-project/vllm/pull/57425) [Bugfix][ROCm] Alias SparseAttnIndexerKpool.forward_cuda to forward_native (GLM-5.3-Flash boot crash)

#### 🐛 New Issues
- [#57475](https://github.com/vllm-project/vllm/issues/57475) [Bug] CUDA graph memory estimate under-reserves → OOM during graph capture at high `--gpu-memory-utilization` 💬6
- [#57493](https://github.com/vllm-project/vllm/issues/57493) [Bug]: [ROCm][gfx1151] ROCM_ATTN returns different outputs for the same greedy request after other requests `bug` `rocm` `quantization` 💬5
- [#57555](https://github.com/vllm-project/vllm/issues/57555) [Performance]: KV offload: DMA/Triton load threshold needs per-device profiling 💬5
- [#57473](https://github.com/vllm-project/vllm/issues/57473) [Bug]: Aria expert loading looks up w13_weight.weight / w2_weight.weight `quantization` 💬4
- [#57610](https://github.com/vllm-project/vllm/issues/57610) [Bug]: Sliding-window prefix cache misses entirely when a request diverges inside the last alignment block of a cached prompt (sparse retention keeps a tail exactly `need` blocks long) `kv-cache-manager` 💬3
- [#57623](https://github.com/vllm-project/vllm/issues/57623) [Bug]: The nested-RoPE validator patch is gated by model type only at install time, then applies to every later config in the process `rocm` 💬3
- [#57574](https://github.com/vllm-project/vllm/issues/57574) [Feature]: Integer token IDs for logprobs in `/inference/v1/generate` responses (`GenerateLogProbs`) `feature request` 💬3
- [#57596](https://github.com/vllm-project/vllm/issues/57596) [Bug]: With a KV connector, prompt_logprobs requests are counted as full external prefix cache misses `rocm` `kv-cache-manager` 💬3
- [#57486](https://github.com/vllm-project/vllm/issues/57486) [Bug]: On SM12x, fp8 block linear still selects DeepGEMM when E8M0 is disabled, which now hard-fails after the a6bbb80 pin `quantization` 💬3
- [#57494](https://github.com/vllm-project/vllm/issues/57494) [Installation]: [ROCm][gfx1151] q_gemm.cu fails to compile: missing half and half2 atomicAdd overloads `installation` `rocm` `quantization` 💬3
- [#57630](https://github.com/vllm-project/vllm/issues/57630) [Bug][Spec Decode] Llama 4 / Mistral Large 3 EAGLE drafters crash at startup with a multimodal target: no attribute `_embed_text_input_ids` `speculative-decoding` `multi-modality` `llama` `quantization` 💬2
- [#57614](https://github.com/vllm-project/vllm/issues/57614) [Bug]: [ROCm][gfx1151] Navi paged attention silently accepts unsupported ALiBi and block size 32 `bug` `rocm` 💬2
- [#57532](https://github.com/vllm-project/vllm/issues/57532) [Bug]: GLM-5.3-Flash NVFP4 + MTP fails to load on main: NVFP4 weight_scale for 'parallel_lm_head' was never loaded (still NaN) `quantization` `glm` 💬2
- [#57483](https://github.com/vllm-project/vllm/issues/57483) [CI Failure]: Model Executor Test - model_executor/model_loader/test_reload.py::test_padded_moe_reload_releases_each_layer `rocm` `ci-failure` 💬2
- [#57572](https://github.com/vllm-project/vllm/issues/57572) [Feature]: Shared per choice `ChatStreamProcessor` for chat serving and streaming derender `feature request` 💬1
- [#57571](https://github.com/vllm-project/vllm/issues/57571) [Feature]: Parser cache for streaming chat derender and stable tool call IDs on retried calls `feature request` `tool-calling` 💬1
- [#57593](https://github.com/vllm-project/vllm/issues/57593) [Feature]: Share non-streaming chat message assembly between `OpenAIServingChat` and batch derender `feature request` `kimi` 💬1
- [#57521](https://github.com/vllm-project/vllm/issues/57521) [Bug][Perf][DSpark] #54674 stacked context WKV regresses TTFT ~3.3% on 2-node DGX Spark (GB10, TP=2), with no decode gain `quantization` 💬1
- [#57588](https://github.com/vllm-project/vllm/issues/57588) [Feature][ROCm][Perf]: Add AITER gluon sparse MLA for rope-free BF16 (GLM-5.3-Flash, gfx950) `feature request` `rocm` `glm` 💬1
- [#57580](https://github.com/vllm-project/vllm/issues/57580) [Bug][Scheduler][Mamba] Track uncomputed align checkpoint visibility after same-step priority preemption `scheduler` 💬1
- [#57578](https://github.com/vllm-project/vllm/issues/57578) [Bug]: GLM-5.3-Flash (glm5_next, qk_rope_head_dim=0 / NoPE MLA) crashes — concat_and_cache_mla requires pe_dim==64 `glm` 💬1
- [#57562](https://github.com/vllm-project/vllm/issues/57562) [Bug]: AsyncScheduler num_output_placeholders underflow with chunked prefill + concurrency (no spec decode, no preemption) — regression from 0.24.0 💬1
- [#57541](https://github.com/vllm-project/vllm/issues/57541) [Bug]: Qwen3 parser treats <tool_call> inside fenced code blocks as a real tool call `tool-calling` 💬1
- [#57515](https://github.com/vllm-project/vllm/issues/57515) [Bug]: a error i can not find any stack `bug` 💬1
- [#57469](https://github.com/vllm-project/vllm/issues/57469) DeepSeek-V4.1-Flash fails to start on 4x H20 (587GiB RAM): MEMCG OOM from host shmem (TP weight shards), not GPU `deepseek` `quantization` `DSv4.1` 💬1
- [#57631](https://github.com/vllm-project/vllm/issues/57631) GLM-OCR MTP broken by two defects: loader drops model.language_model.layers.* MTP weights before prefix rewrite; MTP forward not CUDA-graph safe `glm`
- [#57608](https://github.com/vllm-project/vllm/issues/57608) [Feature][Spec Decode]: host-context hook between draft proposal and verify for out-of-graph per-layer caches
- [#57550](https://github.com/vllm-project/vllm/issues/57550) [Bug]: xgrammar feature detection misses constraints when JSON Schema omits type `structured-output`
- [#57566](https://github.com/vllm-project/vllm/issues/57566) [RFC]: Stable, versioned plugin contract for out-of-tree attention backends + custom KV-cache specs `RFC`
- [#57544](https://github.com/vllm-project/vllm/issues/57544) [Feature]: Support jina-ocr-v1 `feature request`
- [#57530](https://github.com/vllm-project/vllm/issues/57530) [RFC]: A failure spine for the Mooncake connectors
- [#57503](https://github.com/vllm-project/vllm/issues/57503) [Bug][XPU]: LoRA initialization fails for W4A8 layer after XPU weight repacking `intel-gpu` `quantization`
- [#57499](https://github.com/vllm-project/vllm/issues/57499) [RFC]: Stateless Responses API in the Rust frontend `rust`
- [#57490](https://github.com/vllm-project/vllm/issues/57490) [Bug]: internlm loses tool calls when the opening marker is split across chunks `bug` `tool-calling`
- [#57479](https://github.com/vllm-project/vllm/issues/57479) [RFC]: Bound frontend drain latency for bulk aborts and long non-streaming completions `RFC`

#### 🔒 Closed Issues
- [#31985](https://github.com/vllm-project/vllm/issues/31985) [Feature]: Unwrap FusedMoE custom op
- [#25991](https://github.com/vllm-project/vllm/issues/25991) [Bug]: VLLM V1 Engine crashes with KeyError when processing concurrent embedding requests
- [#27157](https://github.com/vllm-project/vllm/issues/27157) [Bug]: Qwen3-VL-30B-A3B-Instruct keeps outputting the same phrases over and over
- [#39071](https://github.com/vllm-project/vllm/issues/39071) [Bug]: Gemma 4 31B Structured Outputs weird behaviour / character output - might be a quick solve
- [#57227](https://github.com/vllm-project/vllm/issues/57227) [Bug][ROCm/gfx950] GLM-5.3-Flash 16K-chunk prefill: GPU memory-access fault when indexer triton kernels JIT during lazy CUDA-graph capture — clean under --enforce-eager
- [#21336](https://github.com/vllm-project/vllm/issues/21336) [Bug]: vLLM crashes when using --enable-sleep-mode with Blackwell PRO 6000 GPUs
- [#32262](https://github.com/vllm-project/vllm/issues/32262) [Usage]: Requests get stuck with high GPU utilization on vLLM docker
- [#57475](https://github.com/vllm-project/vllm/issues/57475) [Bug] CUDA graph memory estimate under-reserves → OOM during graph capture at high `--gpu-memory-utilization`
- [#57424](https://github.com/vllm-project/vllm/issues/57424) [Bug][ROCm] GLM-5.3-Flash fails to boot on 0.3.1 nightly: SparseAttnIndexerKpool (AMD) missing forward_cuda → NotImplementedError
- [#56400](https://github.com/vllm-project/vllm/issues/56400) [Model Support] DeepSeek-V4.1 Tracking Issue
- [#34763](https://github.com/vllm-project/vllm/issues/34763) [Performance]: Remove `batch_size` and `max_seq_len` padding when cuDNN is upgraded to 9.19
- [#42741](https://github.com/vllm-project/vllm/issues/42741) [Bug]: DeepSeek V4 model fails to load with transformers ≥ 4.57 — `compress_ratios` attribute removed
- [#56785](https://github.com/vllm-project/vllm/issues/56785) [Bug]: HiSparse MLA indexer crashes with CUDA error: invalid argument during piecewise cudagraph capture - logical_topk_ready is recorded inside the capture segment but waited on after eager_break_during_capture ends capture
- [#57354](https://github.com/vllm-project/vllm/issues/57354) [Bug]: DeepSeek-V4 sparse-MLA mixed warmup intermittently segfaults on ROCm
- [#57483](https://github.com/vllm-project/vllm/issues/57483) [CI Failure]: Model Executor Test - model_executor/model_loader/test_reload.py::test_padded_moe_reload_releases_each_layer
- [#51829](https://github.com/vllm-project/vllm/issues/51829) [Bug]: DeepSeek V4 Python renderer misplaces tools when a system message exists
- [#42720](https://github.com/vllm-project/vllm/issues/42720) [Bug]: vllm serve starts healthy but all requests fail with ModuleNotFoundError when using --prefix-caching-hash-algo xxhash or xxhash_cbor without xxhash installed
- [#42742](https://github.com/vllm-project/vllm/issues/42742) [Bug]: Silent worker termination after long idle on dual-node `--no-ray` setup (likely `TORCH_NCCL_HEARTBEAT_TIMEOUT_SEC` SIGABRT)
- [#57449](https://github.com/vllm-project/vllm/issues/57449) [Bug]: MLA Workspace OOM At Runtime
- [#56521](https://github.com/vllm-project/vllm/issues/56521) [Bug][ROCm]: Intermittent worker segfault in libhsa-runtime64 — ROCPROFILER_QUEUE_INTERPOSITION=0 forces an unfixed ROCr heap overflow
- [#57376](https://github.com/vllm-project/vllm/issues/57376) [Bug]: --fingerprint-mode=none still emits "system_fingerprint": null in non-streaming responses
- [#49135](https://github.com/vllm-project/vllm/issues/49135) [Bug]: Latency histograms get host-uptime-sized values when a request finishes before reaching a milestone

### SGLang (`sgl-project/sglang`)

**Stars:** 36,152 · **Open issues:** 5,394 · **Last push:** <1h ago

On September 19, 2026, SGLang released version v0.5.20, featuring 713 pull requests from 237 contributors, which included significant new models such as GLM-5.3-Flash. Key merged features included a bug fix for top-1 Mixture of Experts (MoE) routing (#40187) and improvements in performance for sampling processes (#39234). Additionally, a critical new issue emerged regarding DeepSeek V4/V3.2, where tool calls were incorrectly returned as content due to various implementation defects, raising concerns about the robustness of this feature (#40236).

#### 🚀 New Releases
- [v0.5.20](https://github.com/sgl-project/sglang/releases/tag/v0.5.20) v0.5.20

#### ✅ Merged PRs
- [#40263](https://github.com/sgl-project/sglang/pull/40263) [PD] Allow decode radix cache and HiCache L1/L2 with DCP
- [#40264](https://github.com/sgl-project/sglang/pull/40264) [Test] Drop dead and strictly-subsumed CI test registrations
- [#40070](https://github.com/sgl-project/sglang/pull/40070) Name the two widths of the WORLD group
- [#40069](https://github.com/sgl-project/sglang/pull/40069) One read path for every parallel name
- [#40068](https://github.com/sgl-project/sglang/pull/40068) Read process groups through the runtime context
- [#39477](https://github.com/sgl-project/sglang/pull/39477) Support unified memory page-envelope transfers in PD
- [#40067](https://github.com/sgl-project/sglang/pull/40067) Give the attention-DP width and rank one home
- [#40187](https://github.com/sgl-project/sglang/pull/40187) [Bugfix] Fix top-1 MoE routing with non-unit scaling
- [#39234](https://github.com/sgl-project/sglang/pull/39234) perf(sampling): avoid GPU syncs when applying custom logit processors
- [#35798](https://github.com/sgl-project/sglang/pull/35798) [Spec] Fix CDF boundary handling in `TreeSpeculativeSamplingTargetOnly`
- [#40257](https://github.com/sgl-project/sglang/pull/40257) [Test] Add a ci-test-audit skill cataloging CI and test audit patterns
- [#39502](https://github.com/sgl-project/sglang/pull/39502) [Spec] Add explicit prefill shared-read capability for plugins
- [#38948](https://github.com/sgl-project/sglang/pull/38948) [Perf] Fuse SWA page lookup and mapping clear
- [#39773](https://github.com/sgl-project/sglang/pull/39773) Fix corrupted chat prompts on mistral_common tokenizers (tool_choice auto never fires)
- [#39185](https://github.com/sgl-project/sglang/pull/39185) Fix Mistral3 retaining every vision-tower layer to read one
- [#40010](https://github.com/sgl-project/sglang/pull/40010) [MM] Copy placeholder ids to CUDA asynchronously
- [#40043](https://github.com/sgl-project/sglang/pull/40043) [PD] Enable optimistic prefill with buffer-only L3 write-through HiCache
- [#40005](https://github.com/sgl-project/sglang/pull/40005) [MM] Skip VMM error gathers for text-only requests
- [#40042](https://github.com/sgl-project/sglang/pull/40042) [HiCache] Stop arming a prefetch retry for a too-short storage span
- [#39871](https://github.com/sgl-project/sglang/pull/39871) Fix DSA partial DP-TP mode log to use derived attn_tp_size
- [#40013](https://github.com/sgl-project/sglang/pull/40013) [HiCache] Read the in-flight buffer backup's node id from its snapshot in sanity_check
- [#40030](https://github.com/sgl-project/sglang/pull/40030) Support MXFP8 and deferred route weighting in DeepEP v2
- [#40075](https://github.com/sgl-project/sglang/pull/40075) [mem_cache] Release up to `owned_kv_len` on radix cache insert
- [#36340](https://github.com/sgl-project/sglang/pull/36340) feat(kv-cache): support SM100 NVFP4 GenMHA and speculative decoding
- [#40239](https://github.com/sgl-project/sglang/pull/40239) [HiCache] Document transfer arguments
- [#40186](https://github.com/sgl-project/sglang/pull/40186) [AMD][DSV4] fix: drop shadowing local get_exec import that breaks model startup on ROCm
- [#40007](https://github.com/sgl-project/sglang/pull/40007) [Logprob] Borrow graph-pool memory for input logprob logits construction
- [#39465](https://github.com/sgl-project/sglang/pull/39465) [Router] Log every request at one site; derive its outcome from the final status (3/3)
- [#39859](https://github.com/sgl-project/sglang/pull/39859) Use runtime token widths for Triton speculative verification
- [#39452](https://github.com/sgl-project/sglang/pull/39452) Add registration for external model configurations
- [#40034](https://github.com/sgl-project/sglang/pull/40034) [Benchmark] Add agentic rollout simulator and offline explorer
- [#39464](https://github.com/sgl-project/sglang/pull/39464) [Router] Treat an upstream 503/429 as backpressure, not a breaker fault (2/3)
- [#38798](https://github.com/sgl-project/sglang/pull/38798) dsv4.1: remaining model and runtime integration
- [#39980](https://github.com/sgl-project/sglang/pull/39980) [Unified Tree] fix: exempt host-locked aux nodes from the sanity_check host-LRU check
- [#40148](https://github.com/sgl-project/sglang/pull/40148) [AMD] GLM-5.2 MI355X MXFP4: bump image to 20260916, use HIP Top-K
- [#36176](https://github.com/sgl-project/sglang/pull/36176) [kernel] Share the warp vectorized copy and enforce its alignment
- [#39883](https://github.com/sgl-project/sglang/pull/39883) [Diffusion] Sync CFG and tracing documentation
- [#40039](https://github.com/sgl-project/sglang/pull/40039) [Quant] Serve 32-wide-K ue8m0 block-FP8 linears through the FlashInfer MXFP8 GEMMs
- [#39364](https://github.com/sgl-project/sglang/pull/39364) [DSV4] fix: keep the TileLang JIT cache under SGLANG_CACHE_DIR
- [#39823](https://github.com/sgl-project/sglang/pull/39823) [NPU] Run arch35 block-FP8 dense linears on the native MXFP8 GEMM
- [#39879](https://github.com/sgl-project/sglang/pull/39879) [NPU] Gate DFlash replay metadata refresh behind spec_algorithm check
- [#40147](https://github.com/sgl-project/sglang/pull/40147) [CI] Add a unified-memory rerun test group
- [#39881](https://github.com/sgl-project/sglang/pull/39881) [NPU] Fuse MXFP4 W4A8 MoE gmm1 + swiglu + requant into one kernel
- [#35573](https://github.com/sgl-project/sglang/pull/35573) [ROCm][diffusion] Enable fused qk norm and rope on ROCm
- [#32963](https://github.com/sgl-project/sglang/pull/32963) [NVIDIA][comm] Merge EP+MoE-TP post-experts all-reduces into one _TP reduction
- [#39589](https://github.com/sgl-project/sglang/pull/39589) [NPU] support kimi k3 on A5 and improve performance
- [#39463](https://github.com/sgl-project/sglang/pull/39463) [Router] Derive error status from a failure class; preserve the worker's status (1/3)

#### 🐛 New Issues
- [#40236](https://github.com/sgl-project/sglang/issues/40236) [Bug] DeepSeek V4/V3.2: DSML tool calls returned as content with no tool_calls (bare invoke, unterminated section, malformed sibling) 💬2
- [#40144](https://github.com/sgl-project/sglang/issues/40144) [Bug] DFLASH draft layout is assumed, not validated: anchor-first checkpoints shift every position silently 💬2
- [#40083](https://github.com/sgl-project/sglang/issues/40083) [Bug] json_schema accepts uniqueItems and multipleOf but does not enforce them 💬1
- [#40084](https://github.com/sgl-project/sglang/issues/40084) [ROCm][QuickReduce] Q8 BF16→FP16 low-amplitude scale saturation attenuates all-reduce output 💬1
- [#40125](https://github.com/sgl-project/sglang/issues/40125) [PD disaggregation] Duplicate client-supplied `bootstrap_room` crashes prefill and decode schedulers (uncaught `KeyError` / `ValueError`) # Checklist 💬1
- [#40127](https://github.com/sgl-project/sglang/issues/40127) [Bug] [diffusion] MiniMax-H3 INT8 ConvRot checkpoints skip the head-interleaved QKV reorder, silently corrupting video/audio (same defect as #34227, non-FSDP path) 💬1
- [#40094](https://github.com/sgl-project/sglang/issues/40094) Prefill CUDA graph reserves ~1.8 GB and starves quantized-KV long-context prefill on small cards (no auto-disable rule looks at free VRAM) 💬1
- [#40076](https://github.com/sgl-project/sglang/issues/40076) [Bug] A single /v1/chat/completions request with top_logprobs > vocab size kills the scheduler 💬1
- [#40232](https://github.com/sgl-project/sglang/issues/40232) HiCache staged write-back: the 128 KiB batch path passes registered host VAs to cudaMemcpyBatchAsync and faults where CanUseHostPointerForRegisteredMem == 0
- [#40156](https://github.com/sgl-project/sglang/issues/40156) [Bug] EAGLE spec-decode: num_token_non_padded is 0 for draft batches, masking all draft topk ids to -1 and corrupting the MoE dispatch
- [#40155](https://github.com/sgl-project/sglang/issues/40155) [Bug] Spec-v2 workers diverge on forward_batch_generation signature — 4 of 7 missing pp_proxy_tensors the scheduler always passes `bug`
- [#40152](https://github.com/sgl-project/sglang/issues/40152) [Feature] Track DeepSeek-V4.1 support on the main branch
- [#40082](https://github.com/sgl-project/sglang/issues/40082) [Bug] developer messages are silently dropped by chat templates without role support
- [#40072](https://github.com/sgl-project/sglang/issues/40072) [Bug] Tokenizer workers open CUDA contexts on the base GPU despite --mm-feature-transport cpu

#### 🔒 Closed Issues
- [#27462](https://github.com/sgl-project/sglang/issues/27462) [Roadmap] Parallel Speculative Decoding Roadmap
- [#31473](https://github.com/sgl-project/sglang/issues/31473) Optimistic prefill can reach a cross-stage capacity stall
- [#31720](https://github.com/sgl-project/sglang/issues/31720) [Bug] Qwen3.6-27B (hybrid GDN) + AWQ degenerates on few-shot / multi-turn prompts at temperature 0; same checkpoint is clean on vLLM
- [#31356](https://github.com/sgl-project/sglang/issues/31356) Provide a factory to build the OpenAI ASGI app bound to an in-process Engine
- [#31347](https://github.com/sgl-project/sglang/issues/31347) JIT hadamard/DSA-indexer kernel compile races on shared NFS tvm-ffi cache — ESTALE link failure on multi-node cold start
- [#31828](https://github.com/sgl-project/sglang/issues/31828) [Feature] Support pre-sampled video input to decouple decoding from mm preprocessor/encoder
- [#25802](https://github.com/sgl-project/sglang/issues/25802) [Tracking] Nemotron Labs Diffusion upstreaming stack
- [#31271](https://github.com/sgl-project/sglang/issues/31271) Can not load gpt-oss-20b model specific tokenizer
- [#31711](https://github.com/sgl-project/sglang/issues/31711) [Bug] XGrammar rollback copies the full token history during EAGLE constrained decoding
- [#31799](https://github.com/sgl-project/sglang/issues/31799) [Bug] DeepSeek V4 Pro TP24 failure on Hopper: GPU VocabParallelEmbedding skips required vocabulary padding
- [#31765](https://github.com/sgl-project/sglang/issues/31765) [Bug] Queued abort leaves streaming sessions stuck in flight
- [#35252](https://github.com/sgl-project/sglang/issues/35252) [Bug] MoE tuner writes config files the runtime never reads (int4_w4a16)
- [#33292](https://github.com/sgl-project/sglang/issues/33292) [Bug] [multimodal_gen] CustomOp.dispatch_forward() XPU breaking model construction on Intel GPUs
- [#35771](https://github.com/sgl-project/sglang/issues/35771) [Bug] Target-only speculative sampler can accept a zero-probability draft at RNG boundary
- [#38773](https://github.com/sgl-project/sglang/issues/38773) [Bug] flashinfer_mxfp4 crashes on 0-token MoE batches

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 128,735 · **Open issues:** 2,502 · **Last push:** 1h ago

On September 19, 2026, several updates were released for llama.cpp, including versions b11046, b11045, and b11044, which introduced support for new OpenCL and Hexagon operations, notably the `flash_attn_f32_f16_bin` kernel and the ROLL operation, enhancing performance and flexibility. In addition to these releases, key merged pull requests included the update to handle IM2COL operations in Hexagon and the addition of various models to the Model-Saver, expanding functionality for architecture support. However, the day was not without issues, as a significant new problem was reported regarding increased VRAM usage from the SYCL backend in version b10680, sparking discussions among users about potential solutions.

#### 🚀 New Releases
- [b11046](https://github.com/ggml-org/llama.cpp/releases/tag/b11046) b11046
- [b11045](https://github.com/ggml-org/llama.cpp/releases/tag/b11045) b11045
- [b11044](https://github.com/ggml-org/llama.cpp/releases/tag/b11044) b11044
- [b11043](https://github.com/ggml-org/llama.cpp/releases/tag/b11043) b11043
- [b11042](https://github.com/ggml-org/llama.cpp/releases/tag/b11042) b11042
- [b11040](https://github.com/ggml-org/llama.cpp/releases/tag/b11040) b11040
- [b11039](https://github.com/ggml-org/llama.cpp/releases/tag/b11039) b11039
- [b11037](https://github.com/ggml-org/llama.cpp/releases/tag/b11037) b11037
- [b11036](https://github.com/ggml-org/llama.cpp/releases/tag/b11036) b11036
- [b11035](https://github.com/ggml-org/llama.cpp/releases/tag/b11035) b11035

#### ✅ Merged PRs
- [#29046](https://github.com/ggml-org/llama.cpp/pull/29046) opencl: add support for bin kernel `flash_attn_f32_f16_bin`
- [#29105](https://github.com/ggml-org/llama.cpp/pull/29105) hexagon: add ROLL op support
- [#29103](https://github.com/ggml-org/llama.cpp/pull/29103) hexagon: im2col update
- [#26539](https://github.com/ggml-org/llama.cpp/pull/26539) hexagon: support for HMX flash-attention head_dim not multiple of 64
- [#28678](https://github.com/ggml-org/llama.cpp/pull/28678) opencl: add bin kernel `kernel_gemm_noshuffle_q6_k_f32_32b_trans_ila_a8_bin`
- [#27779](https://github.com/ggml-org/llama.cpp/pull/27779) ggml-cpu: add F16 input to the FWHT
- [#28149](https://github.com/ggml-org/llama.cpp/pull/28149) ggml : check for allocation failures to prevent crashes
- [#29042](https://github.com/ggml-org/llama.cpp/pull/29042) Model-Saver: Write the SWA pattern, 15 more architectures roundtrip
- [#29079](https://github.com/ggml-org/llama.cpp/pull/29079) ci: rename ubuntu-latest to ubuntu-24.04
- [#28978](https://github.com/ggml-org/llama.cpp/pull/28978) ggml-webgpu: fix supports_op condition for GET_ROWS
- [#26070](https://github.com/ggml-org/llama.cpp/pull/26070) ggml : handle graph buffer reservation failure
- [#29036](https://github.com/ggml-org/llama.cpp/pull/29036) gguf-py: fix Q8_1 block size in GGML_QUANT_SIZES (2+2+32)
- [#28822](https://github.com/ggml-org/llama.cpp/pull/28822) vulkan: add IQ3_S MMQ matmul kernels
- [#29033](https://github.com/ggml-org/llama.cpp/pull/29033) vocab : add ufakzeka pre-tokenizer
- [#29026](https://github.com/ggml-org/llama.cpp/pull/29026) fix: build fails when GGML_CPU=OFF and GGML_CUDA=ON
- [#29068](https://github.com/ggml-org/llama.cpp/pull/29068) ci : disable GHA cache for copilot
- [#28501](https://github.com/ggml-org/llama.cpp/pull/28501) vulkan: raise the hoisted row-id limit for mul_mat_id from 256 to 512 experts
- [#29065](https://github.com/ggml-org/llama.cpp/pull/29065) ci : bump android-actions/setup-android to 4.0.4

#### 🐛 New Issues
- [#29063](https://github.com/ggml-org/llama.cpp/issues/29063) Eval bug: VRAM usage increased from b10680 (SYCL backend) `bug-unconfirmed` 💬2
- [#29078](https://github.com/ggml-org/llama.cpp/issues/29078) convert_hf_to_gguf.py: very large models need either the full model in RAM or 2x its size on disk (streaming two-pass mode?) 💬3
- [#29093](https://github.com/ggml-org/llama.cpp/issues/29093) Eval bug: Vulkan qwen4exp Image Multimodality Seems Broken `bug-unconfirmed` 💬1
- [#29092](https://github.com/ggml-org/llama.cpp/issues/29092) HIP/ROCm — fused Gated Delta Net op carries recurrent state across requests on a reused server slot (qwen35 / qwen35moe); earlier prompts' text is emitted verbatim in later completions `bug-unconfirmed` 💬1
- [#29089](https://github.com/ggml-org/llama.cpp/issues/29089) PEG→GBNF: `until()` can stop mid-delimiter, leaving Gemma 4 tool calls unconstrained under `tool_choice: required` `bug-unconfirmed` 💬1
- [#29091](https://github.com/ggml-org/llama.cpp/issues/29091) Misc. bug: [llama-server] /v1/models metadata serializes "vocab_type" as boolean true instead of integer enum `bug-unconfirmed` 💬1
- [#29082](https://github.com/ggml-org/llama.cpp/issues/29082) Eval bug: [Vulkan] GGML_ABORT cache_k_l0 in Vulkan buffer on SWA models — regression 2.40/2.41 vs 2.39 `bug-unconfirmed` 💬1
- [#29104](https://github.com/ggml-org/llama.cpp/issues/29104) Eval bug: server silently stops processing when /metrics endpoint is scraped by VictoriaMetrics `bug-unconfirmed`
- [#29098](https://github.com/ggml-org/llama.cpp/issues/29098) Misc. bug: Two llama-server processes on the same RX 6800 cause 100% GPU when HIP graphs enabled `bug-unconfirmed`
- [#29090](https://github.com/ggml-org/llama.cpp/issues/29090) Eval bug: init_batch: failed to prepare attention ubatches with --kv-unified on serveur `bug-unconfirmed`
- [#29088](https://github.com/ggml-org/llama.cpp/issues/29088) Misc. bug: [convert_hf_to_gguf] KeyError: 'speaker_encoder_config' when converting Qwen3-TTS CustomVoice variant `bug-unconfirmed`
- [#29087](https://github.com/ggml-org/llama.cpp/issues/29087) Eval bug: OpenVINO backend fails with "unable to create context" when KV cache exceeds CL_DEVICE_MAX_MEM_ALLOC_SIZE `bug-unconfirmed`
- [#29081](https://github.com/ggml-org/llama.cpp/issues/29081) Eval bug: [OpenCL] MUL_MAT produces wrong results on Adreno 730 (x8_gqa_r4_img) `bug-unconfirmed`
- [#29073](https://github.com/ggml-org/llama.cpp/issues/29073) Feature Request: Passing environment variables to child processes in router mode `enhancement`

#### 🔒 Closed Issues
- [#26369](https://github.com/ggml-org/llama.cpp/issues/26369) Deepseek4
- [#24090](https://github.com/ggml-org/llama.cpp/issues/24090) Feature Request: WebUI - Projects / Folders for Conversations
- [#24657](https://github.com/ggml-org/llama.cpp/issues/24657) Eval bug: GGML_ASSERT(n_inputs < GGML_SCHED_MAX_SPLIT_INPUTS) - On more than one GPU
- [#26455](https://github.com/ggml-org/llama.cpp/issues/26455) Feature Request: ggml model cache and kv cache in remote rpc server
- [#29028](https://github.com/ggml-org/llama.cpp/issues/29028) Eval bug: qwen4exp / deepseek-v4 abort at first decode on Vulkan (RADV, gfx1151)
- [#26587](https://github.com/ggml-org/llama.cpp/issues/26587) Feature Request: convrot for int8 and fp4
- [#27817](https://github.com/ggml-org/llama.cpp/issues/27817) ggml-backend: discarded ggml_gallocr_reserve_n return value turns an allocation failure into a segfault
- [#29059](https://github.com/ggml-org/llama.cpp/issues/29059) Misc. bug: Releases page appears newly busted
- [#26546](https://github.com/ggml-org/llama.cpp/issues/26546) Eval bug: CUDA: Out-of-bounds read in gated_delta_net_cuda on Pascal (SM61) reported by Compute Sanitizer
- [#26565](https://github.com/ggml-org/llama.cpp/issues/26565) `llama-server` / `llama-cli` never call `llama_encode()` for encoder-decoder (T5/mT5) models: crashes or produces garbage on every T5-family GGUF
- [#28072](https://github.com/ggml-org/llama.cpp/issues/28072) Eval bug: context type MTP requested but model doesn't contain MTP layers
- [#26559](https://github.com/ggml-org/llama.cpp/issues/26559) `-fa auto` costs prefill throughput on plain F16 KV cache on Arm CPU (Graviton)
- [#26600](https://github.com/ggml-org/llama.cpp/issues/26600) Misc. bug: Issue draft — "llama-server: unauthenticated POST /completion with deeply nested grammar crashes the process (SIGSEGV)
- [#27834](https://github.com/ggml-org/llama.cpp/issues/27834) Build fails when GGML_CPU=OFF: tests, examples and POCs link against CPU-only symbols

### Ollama (`ollama/ollama`)

**Stars:** 181,231 · **Open issues:** 4,034 · **Last push:** <1h ago

On September 19, 2026, Ollama released version v0.34.3, which includes enhancements such as the advertisement of each model's thinking controls, with adjustable settings for user-defined thinking levels. Notable merged pull requests include support for registry cross-host redirects among allowlisted hosts and a fix that stops macOS from reopening closed windows. A significant new issue has emerged regarding the qwen3.5-family hybrid GDN models on ROCm, where earlier prompts' text is inadvertently appearing in later responses, indicating a cross-request state leak.

#### 🚀 New Releases
- [v0.34.3-rc0](https://github.com/ollama/ollama/releases/tag/v0.34.3-rc0) v0.34.3

#### ✅ Merged PRs
- [#18533](https://github.com/ollama/ollama/pull/18533) server: allow registry cross-host redirects among allowlisted hosts
- [#18473](https://github.com/ollama/ollama/pull/18473) api: expose model thinking levels and defaults
- [#18518](https://github.com/ollama/ollama/pull/18518) app: keep closed macOS windows from reopening on activation

#### 🐛 New Issues
- [#18528](https://github.com/ollama/ollama/issues/18528) qwen3.5-family hybrid GDN models on ROCm: cross-request state leak in the bundled llama-server (0.32.14 and 0.34.1) — earlier prompts' text appears in later responses; tracking ggml-org/llama.cpp#29092 `bug` 💬6
- [#18527](https://github.com/ollama/ollama/issues/18527) [Cloud] deepseek-v4.1-flash silently discards all image input while advertising `vision` in capabilities `bug` `cloud` 💬5
- [#18525](https://github.com/ollama/ollama/issues/18525) More granular memory split controls `feature request` 💬4
- [#18529](https://github.com/ollama/ollama/issues/18529) deepseek3 renderer drops `thinking` on assistant messages that carry tool calls, although its own `isCurrentTurn` gate would admit them, impacting DS Flash Ollama Cloud 💬2
- [#18526](https://github.com/ollama/ollama/issues/18526) Intermittent redirect failures when pulling HF models on 0.34.2 `bug` 💬1
- [#18521](https://github.com/ollama/ollama/issues/18521) Support Prism ternary GGUFs (PQ2_0 type 142 / PTQ1_0 type 143): import fails with unsupported tensor size overflows `model`
- [#18522](https://github.com/ollama/ollama/issues/18522) gpt-oss:20b (MXFP4) deterministic llama-server abort in CUDA ADD_ID on a short two-message /api/chat (0.32.13 and 0.33.3) `bug` `nvidia` 💬1
- [#18534](https://github.com/ollama/ollama/issues/18534) OpenAI-compatible endpoint silently ignores `reasoning_content` on assistant messages, dropping replayed reasoning for DeepSeek models
- [#18531](https://github.com/ollama/ollama/issues/18531) Vulkan on Intel Iris Xe iGPU: qwen2.5:14b fails with ErrorOutOfDeviceMemory (KV cache alloc) on 0.33.3 and 0.34.2; works on 0.32.6
- [#18530](https://github.com/ollama/ollama/issues/18530) qwen3-coder: tool call silently lost when the model puts reasoning before it (model omits <tool_call> opener; parser only keys on the literal tag)

#### 🔒 Closed Issues
- [#6169](https://github.com/ollama/ollama/issues/6169) How to fix the default settings of the model?
- [#18490](https://github.com/ollama/ollama/issues/18490) Feature Request: Restore built-in agent as an opt-in CLI command / launcher option
- [#4694](https://github.com/ollama/ollama/issues/4694) always fail to push models
- [#18525](https://github.com/ollama/ollama/issues/18525) More granular memory split controls
- [#18507](https://github.com/ollama/ollama/issues/18507) Windows 11 26200, Ollama 0.34.1 — tray app shows icon but never starts server; manual ollama serve works perfectly
- [#18529](https://github.com/ollama/ollama/issues/18529) deepseek3 renderer drops `thinking` on assistant messages that carry tool calls, although its own `isCurrentTurn` gate would admit them, impacting DS Flash Ollama Cloud
- [#18526](https://github.com/ollama/ollama/issues/18526) Intermittent redirect failures when pulling HF models on 0.34.2

### LiteLLM (`BerriAI/litellm`)

**Stars:** 59,109 · **Open issues:** 5,190 · **Last push:** <1h ago

LiteLLM released version v1.103.0-dev.2, enhancing security by ensuring all Docker images are signed with cosign, providing a robust mechanism for verifying image integrity. Significant merged features included improvements to the proxy's handling of configurations and model group aliases, alongside fixes that resolved issues with off-peak pricing, ensuring a smoother user experience. Notable bug fixes addressed problems with the Bedrock models regarding encrypted reasoning and response handling, enhancing reliability. Additionally, new issues were reported, including a bug where Bedrock rejects encrypted reasoning and a timeout issue with MCP tool discovery, signaling ongoing challenges in those areas.

#### 🚀 New Releases
- [v1.103.0-dev.2](https://github.com/BerriAI/litellm/releases/tag/v1.103.0-dev.2) v1.103.0-dev.2

#### ✅ Merged PRs
- [#41847](https://github.com/BerriAI/litellm/pull/41847) fix(schema): classify off_peak_pricing as a structured object in the model prices schema generator
- [#41667](https://github.com/BerriAI/litellm/pull/41667) feat(mcp): allowlist MCP client applications at the gateway
- [#41902](https://github.com/BerriAI/litellm/pull/41902) chore(model_info): backfill reseller Gemini entries from provider catalogs and prune retired ids
- [#41870](https://github.com/BerriAI/litellm/pull/41870) fix(bedrock): clamp maxTokens to the 16-token minimum for OpenAI GPT and xAI Grok models on Converse
- [#40243](https://github.com/BerriAI/litellm/pull/40243) fix(responses): emit typed streaming failure events
- [#41878](https://github.com/BerriAI/litellm/pull/41878) fix(proxy): requeue daily spend rows when the commit fails without the Redis buffer
- [#41901](https://github.com/BerriAI/litellm/pull/41901) test(integration): cover off-peak pricing on a live proxy
- [#41868](https://github.com/BerriAI/litellm/pull/41868) fix(proxy): refuse config-owned keys on POST /config/update
- [#41354](https://github.com/BerriAI/litellm/pull/41354) fix(proxy): track project spend and enforce project budgets additively
- [#41895](https://github.com/BerriAI/litellm/pull/41895) fix(enterprise): resolve openai_moderations model at call time and default to omni-moderation-latest
- [#41347](https://github.com/BerriAI/litellm/pull/41347) fix(team): apply team_member_budget updates to members still on the team default
- [#41892](https://github.com/BerriAI/litellm/pull/41892) fix(gemini): preserve candidates with finishReason and no content (#40477)
- [#41885](https://github.com/BerriAI/litellm/pull/41885) refactor(rust): formalize legacy callback contract
- [#41887](https://github.com/BerriAI/litellm/pull/41887) fix: set vertex gemma-4-26b-a4b-it-maas context window to 262144
- [#41894](https://github.com/BerriAI/litellm/pull/41894) ci: remove the dead Agent Shin triage workflows and scripts
- [#41786](https://github.com/BerriAI/litellm/pull/41786) fix(otel): keep caller traceparent and tracestate on pass-through relays
- [#41871](https://github.com/BerriAI/litellm/pull/41871) feat: honor eager_input_streaming on Bedrock and Anthropic Claude tools
- [#41881](https://github.com/BerriAI/litellm/pull/41881) fix(responses): merge deployment litellm_params into native websocket response.create frames
- [#41583](https://github.com/BerriAI/litellm/pull/41583) fix(proxy): name the blocking guardrail in x-litellm-applied-guardrails
- [#41888](https://github.com/BerriAI/litellm/pull/41888) feat(ui): link MCP Servers page to the user's connected MCP servers
- [#41838](https://github.com/BerriAI/litellm/pull/41838) fix(proxy): reset sibling tpm/rpm counters when the shared rate limit window rolls over
- [#41483](https://github.com/BerriAI/litellm/pull/41483) fix(proxy): resolve model_group_alias to its target for /v1/models metadata
- [#41883](https://github.com/BerriAI/litellm/pull/41883) ci(duplicate-check): let Codex reach GitHub from its sandbox
- [#41138](https://github.com/BerriAI/litellm/pull/41138) fix(bedrock): carry s3_endpoint_url and s3_region_name into file content downloads
- [#41783](https://github.com/BerriAI/litellm/pull/41783) fix(proxy): keep requested model guardrails and key disable_fallbacks on rate-limit fallback
- [#41324](https://github.com/BerriAI/litellm/pull/41324) feat(proxy): add LiteLLM_DailyGlobalSpend key-free rollup for the usage dashboard
- [#41884](https://github.com/BerriAI/litellm/pull/41884) test(ocr): declarative provider x auth x input matrix, fix Rust 401 mapping
- [#41882](https://github.com/BerriAI/litellm/pull/41882) fix(proxy): classify Azure Speech short audio behind a prefixed api base
- [#41554](https://github.com/BerriAI/litellm/pull/41554) feat(passthrough): deepgram streaming /v1/listen WebSocket passthrough with duration-based cost tracking
- [#41062](https://github.com/BerriAI/litellm/pull/41062) fix(mistral): accept reasoning_effort on all models and drop client_metadata for Codex compatibility
- [#39424](https://github.com/BerriAI/litellm/pull/39424) feat(azure_ai): support FLUX.2 flex images
- [#40878](https://github.com/BerriAI/litellm/pull/40878) fix(router): report null cost for unpriced deployments instead of 0
- [#40737](https://github.com/BerriAI/litellm/pull/40737) fix(ui): show internal user email in logs table and log detail drawer
- [#41873](https://github.com/BerriAI/litellm/pull/41873) feat(rust): port exception_type to litellm-core-utils
- [#33101](https://github.com/BerriAI/litellm/pull/33101) fix(responses): stop managed Responses WebSocket from leaking litellm_params into provider request body
- [#41557](https://github.com/BerriAI/litellm/pull/41557) feat(proxy): add Azure AI Speech pass-through route
- [#41349](https://github.com/BerriAI/litellm/pull/41349) fix(proxy): track team member spend when the member has no budget
- [#41875](https://github.com/BerriAI/litellm/pull/41875) fix(router): honor stream_timeout on the SDK-native passthrough route (/v1/messages, /converse)
- [#41384](https://github.com/BerriAI/litellm/pull/41384) fix(azure): keep api-version query after vector store search path
- [#41754](https://github.com/BerriAI/litellm/pull/41754) feat(models): add qwen3.8 flash rows, fix Cohere embed v3 context, Bedrock Mantle and OpenRouter pricing
- [#41725](https://github.com/BerriAI/litellm/pull/41725) feat(mcp): let proxy admins force-close live MCP sessions and revoke stored user credentials
- [#41865](https://github.com/BerriAI/litellm/pull/41865) feat(vscode): add LiteLLM language model provider extension
- [#41862](https://github.com/BerriAI/litellm/pull/41862) fix(proxy): make SettingsStore.clear() terminate when the config file owns a key
- [#40982](https://github.com/BerriAI/litellm/pull/40982) feat(proxy): limit repeated failed Admin UI sign-in attempts
- [#41846](https://github.com/BerriAI/litellm/pull/41846) chore(deps): bump anyio from 4.13.0 to 4.14.2
- [#41293](https://github.com/BerriAI/litellm/pull/41293) perf(proxy): split aggregated usage query into key-free rollups and bounded top-N keys
- [#41830](https://github.com/BerriAI/litellm/pull/41830) fix(scim): accept entitlements and roles entries without a value on SCIM user PUT
- [#41860](https://github.com/BerriAI/litellm/pull/41860) test(docs): read only the first column of the router_settings reference table
- [#40807](https://github.com/BerriAI/litellm/pull/40807) feat(keys): let team service account keys use key management endpoints for their own team
- [#41757](https://github.com/BerriAI/litellm/pull/41757) feat(guardrails): add TypeSafe Jev relevance-based compaction guardrail
- [#41203](https://github.com/BerriAI/litellm/pull/41203) fix(anthropic): register thinking-binding-controls-2026-08-01 in beta headers config
- [#41854](https://github.com/BerriAI/litellm/pull/41854) fix: backport eight backport-stable fixes to rc/1.102.0 (#40596, #41046, #41086, #41171, #41178, #41283, #41495, #41689)
- [#40500](https://github.com/BerriAI/litellm/pull/40500) fix(bedrock): send aws_session_tags on every STS call via one typed auth struct
- [#41351](https://github.com/BerriAI/litellm/pull/41351) fix(router): validate routing_groups at save time and keep invalid DB groups from blocking SSO load
- [#41695](https://github.com/BerriAI/litellm/pull/41695) ci: classify new issues into domain, provider, kind, priority and lift labels
- [#41275](https://github.com/BerriAI/litellm/pull/41275) fix(azure): strip litellm format field from file and image content parts
- [#41511](https://github.com/BerriAI/litellm/pull/41511) feat(a2a): reach Microsoft Foundry agents with Entra auth and versioned card discovery
- [#41506](https://github.com/BerriAI/litellm/pull/41506) feat(vertex_ai): stream GCS batch output files from /v1/files/{id}/content
- [#41539](https://github.com/BerriAI/litellm/pull/41539) feat(vault): add separate login and secret namespaces for HashiCorp Vault
- [#41620](https://github.com/BerriAI/litellm/pull/41620) feat(proxy): temporary budget increase for team members
- [#40935](https://github.com/BerriAI/litellm/pull/40935) ci: replace the title-similarity duplicate bot with a Codex semantic check
- [#41692](https://github.com/BerriAI/litellm/pull/41692) feat(mcp): show live gateway sessions by AI client and user
- [#41636](https://github.com/BerriAI/litellm/pull/41636) feat(proxy): per-key default budget for dynamically created customers
- [#41515](https://github.com/BerriAI/litellm/pull/41515) feat(proxy): add Amazon Transcribe pass-through with completion-time job pricing
- [#41585](https://github.com/BerriAI/litellm/pull/41585) perf: defer fastapi and tiktoken BPE imports out of import litellm
- [#41555](https://github.com/BerriAI/litellm/pull/41555) feat(router): reject with 429 when a deployment's max_parallel_requests slots are all in use
- [#40730](https://github.com/BerriAI/litellm/pull/40730) fix(responses): honor nested additional_drop_params paths
- [#41832](https://github.com/BerriAI/litellm/pull/41832) fix(cost): bill cache-read tokens at the input rate when the map has no cache-read rate
- [#39308](https://github.com/BerriAI/litellm/pull/39308) fix(ui): show per-second pricing for video models instead of $0.00 token costs
- [#40700](https://github.com/BerriAI/litellm/pull/40700) fix(ui): let admins change a model's team from the model edit page
- [#41779](https://github.com/BerriAI/litellm/pull/41779) refactor(proxy): make the config file win over the database
- [#41772](https://github.com/BerriAI/litellm/pull/41772) chore(prices): sync OpenRouter prices: 15 models, 6 deprecated
- [#41829](https://github.com/BerriAI/litellm/pull/41829) refactor(rust): align crates with Python package layering
- [#41663](https://github.com/BerriAI/litellm/pull/41663) refactor(interactions): remove expired use_legacy_interactions_schema shim
- [#41658](https://github.com/BerriAI/litellm/pull/41658) chore(ui): remove orphaned useDeleteProject hook and its test
- [#41657](https://github.com/BerriAI/litellm/pull/41657) refactor(ui): remove dead useKeyList hook from key_list.tsx
- [#41656](https://github.com/BerriAI/litellm/pull/41656) refactor(ui): remove dead networking exports and orphaned Claude Code marketplace helpers
- [#41655](https://github.com/BerriAI/litellm/pull/41655) chore(ui): remove unused access-groups type interfaces
- [#41653](https://github.com/BerriAI/litellm/pull/41653) refactor(ui): drop unused rolesAllowedToSeeUsage, viewOnlyRoles and isViewOnlyRole exports
- [#41651](https://github.com/BerriAI/litellm/pull/41651) refactor(ui): drop unused cost-tracking barrel re-exports and response types
- [#41650](https://github.com/BerriAI/litellm/pull/41650) refactor(ui): remove unused createCredentialFromModel helper and CredentialValues interface
- [#41649](https://github.com/BerriAI/litellm/pull/41649) chore(ui): remove dead compareUI ModelSelector and its test
- [#41647](https://github.com/BerriAI/litellm/pull/41647) chore(ui): remove unused NewBadge component and its test
- [#41646](https://github.com/BerriAI/litellm/pull/41646) chore(ui): remove never-rendered GuardrailConfig mock component and its test
- [#41645](https://github.com/BerriAI/litellm/pull/41645) chore(ui): remove orphaned ROLE_STYLES and RoleStyle from pretty messages view
- [#41644](https://github.com/BerriAI/litellm/pull/41644) refactor(ui): remove unused HelpLink and HelpIcon components
- [#41707](https://github.com/BerriAI/litellm/pull/41707) fix(proxy): evict jwt key mapping cache on user, team, org, and bulk key deletion
- [#41541](https://github.com/BerriAI/litellm/pull/41541) fix(proxy): run prompt injection heuristics off the event loop
- [#41770](https://github.com/BerriAI/litellm/pull/41770) chore(prices): sync OpenRouter prices: 2 models, 1 deprecated
- [#41748](https://github.com/BerriAI/litellm/pull/41748) fix(proxy): persist only the keys a caller changed in save_config
- [#41767](https://github.com/BerriAI/litellm/pull/41767) fix(batches): bill Bedrock Titan embedding batch lines from inputTextTokenCount
- [#41727](https://github.com/BerriAI/litellm/pull/41727) chore(prices): sync OpenRouter prices: 443 models, 191 new, 4 deprecated
- [#41756](https://github.com/BerriAI/litellm/pull/41756) test(e2e/ui): wait for the filtered budget list before clicking a row action
- [#41763](https://github.com/BerriAI/litellm/pull/41763) test(cost_map): drop tests that pin provider-owned catalog values
- [#41752](https://github.com/BerriAI/litellm/pull/41752) refactor(rust): isolate legacy callback contract
- [#41736](https://github.com/BerriAI/litellm/pull/41736) fix(model_prices): add cache-read pricing to Mistral chat models missing it
- [#41734](https://github.com/BerriAI/litellm/pull/41734) test(cost_map): stop pinning supports_reasoning absent on the openrouter o1 entry
- [#41723](https://github.com/BerriAI/litellm/pull/41723) fix(proxy): forward every method on the typesafe pass-through route
- [#41729](https://github.com/BerriAI/litellm/pull/41729) test(logging): add azure_spillover to the GCS pub/sub spend-log golden
- [#41597](https://github.com/BerriAI/litellm/pull/41597) fix(models): rolling registry audit: Azure retirement dates, Bedrock Mantle Grok 4.3 context window
- [#41719](https://github.com/BerriAI/litellm/pull/41719) fix(ocr): keep a downloaded document inlined when callbacks intercept the request (#41550 follow-up)
- [#41469](https://github.com/BerriAI/litellm/pull/41469) fix(responses): drop top_p for gpt-5 reasoning models when drop_params is set
- [#41448](https://github.com/BerriAI/litellm/pull/41448) fix(passthrough): keep target URL query when client sends no query params

#### 🐛 New Issues
- [#41792](https://github.com/BerriAI/litellm/issues/41792) [Bug]: Bedrock rejects encrypted reasoning after intentional model switches `proxy` `llm translation` `potential-duplicate` 💬2
- [#41765](https://github.com/BerriAI/litellm/issues/41765) MCP: tools discovery times out — serial list_prompts/list_resources probing of upstreams that don't support them 💬3
- [#41793](https://github.com/BerriAI/litellm/issues/41793) Bedrock OpenAI encrypted reasoning fails when switching models with shared credentials `llm translation` `potential-duplicate` 💬3
- [#41810](https://github.com/BerriAI/litellm/issues/41810) [Bug]: Virtual-key model allowlist bypass on /v1/chat/completions via the `?model=` query string `proxy` `llm translation` 💬2
- [#41849](https://github.com/BerriAI/litellm/issues/41849) [Bug]: reasoning_tokens reported as 0 on /v1/responses and completion_tokens_details null on /v1/chat/completions for hosted_vllm reasoning models 💬1
- [#41834](https://github.com/BerriAI/litellm/issues/41834) [Bug]: Databricks service_tier is dropped in request translation, streaming, and pricing `llm translation` 💬1
- [#41827](https://github.com/BerriAI/litellm/issues/41827) bedrock_mantle: no Anthropic Messages API transformation for Claude models that require it (e.g. anthropic.claude-sonnet-5) `llm translation` 💬1
- [#41804](https://github.com/BerriAI/litellm/issues/41804) Search tool rows silently drop every non-credential litellm_param (timeout, max_retries, provider-specific options) 💬1
- [#41805](https://github.com/BerriAI/litellm/issues/41805) [Bug]: Support for SAP Multiple Orchestration Deployment URLs `bug` `SDK` 💬1
- [#41820](https://github.com/BerriAI/litellm/issues/41820) [Bug]: image_edit serializes image/mask file params as bracketed string form fields `llm translation` 💬1
- [#41782](https://github.com/BerriAI/litellm/issues/41782) [Bug]: Wrong calculation of cost for Nebius provider `bug` `proxy` 💬1
- [#41780](https://github.com/BerriAI/litellm/issues/41780) [Bug]: base_model not used for cost tracking with hosted_vllm, resulting in $0 spend `bug` `proxy` `llm translation` 💬1
- [#41743](https://github.com/BerriAI/litellm/issues/41743) [Feature]: Publish each release's database schema changes and the rolling-upgrade procedure they require `proxy` 💬1
- [#41732](https://github.com/BerriAI/litellm/issues/41732) [Bug]: UI /key/generate no "send_invite_email": true `bug` `ui-dashboard` 💬1
- [#41913](https://github.com/BerriAI/litellm/issues/41913) [Bug]: tool and instruction fields dropped in translation (const, strict, parallel_tool_calls, allowed_callers, developer role) `bug` `llm translation`
- [#41912](https://github.com/BerriAI/litellm/issues/41912) [Bug]: attached files and audio are dropped before the provider sees them `bug` `llm translation`
- [#41899](https://github.com/BerriAI/litellm/issues/41899) [Bug]: ui/nginx.conf never serves App Router RSC payloads under /ui, so dashboard soft navigation always falls back to a full page load
- [#41859](https://github.com/BerriAI/litellm/issues/41859) [Bug]: Responses WebSocket logs lack first-token timestamps and report session-level duration
- [#41858](https://github.com/BerriAI/litellm/issues/41858) [Bug]: Responses WebSocket logs do not render formatted payloads and lose request history
- [#41848](https://github.com/BerriAI/litellm/issues/41848) [Bug]: Support custom request body transformation for directEndpoint / A2A (JSON-RPC) endpoints `bug` `llm translation`
- [#41835](https://github.com/BerriAI/litellm/issues/41835) [Bug]: Vertex Grok (`vertex_ai/xai/grok-*`) is rejected on `/v1beta/models/{model}:generateContent` while `/v1/chat/completions` on the same deployment works `bug` `proxy` `llm translation`
- [#41861](https://github.com/BerriAI/litellm/issues/41861) Gemini explicit cache creation drops lifecycle usage; spend callbacks omit creation and storage accounting `llm translation`
- [#41855](https://github.com/BerriAI/litellm/issues/41855) [Bug]: Windows wheel ships its tiktoken caches with CRLF line endings, so `import litellm` needs the network `llm translation`
- [#41803](https://github.com/BerriAI/litellm/issues/41803) [Bug]: OpenAI Batches and Files API drop `project` / `OpenAI-Project` parameter, causing access errors on multi-project keys `bug` `proxy` `llm translation`
- [#41777](https://github.com/BerriAI/litellm/issues/41777) [Bug]: a Responses stream cut in transit is reported as HTTP 400 invalid_request_error, so clients never retry `proxy` `llm translation`
- [#41774](https://github.com/BerriAI/litellm/issues/41774) [Bug]: Alerting Settings UI displays negative placeholder values for "In Config" fields `bug` `ui-dashboard`
- [#41750](https://github.com/BerriAI/litellm/issues/41750) [Bug]: Bedrock embedding batches are billed at $0 with zero tokens recorded `bug` `proxy` `llm translation`
- [#41762](https://github.com/BerriAI/litellm/issues/41762) [Bug]: All /ui/* routes return LiteLLM's own compiled 404 page when SERVER_ROOT_PATH has multiple path segments (including bare /ui/ index) `bug` `llm translation` `ui-dashboard`
- [#41753](https://github.com/BerriAI/litellm/issues/41753) [Bug]: batch output files are invisible to `GET /v1/files` for the user who created them `bug` `proxy` `llm translation`
- [#41751](https://github.com/BerriAI/litellm/issues/41751) [Bug]: `GET /v1/files/{id}` 500s for a Bedrock batch *output* file `bug` `proxy` `llm translation`
- [#41749](https://github.com/BerriAI/litellm/issues/41749) [Bug]: Bedrock batch retrieve reports a queued job as validating `bug` `proxy` `llm translation`
- [#41735](https://github.com/BerriAI/litellm/issues/41735) [Bug] Deployment `prompt_version` is ignored on the router path; first-registered version of a prompt_id is always served (dotprompt, DB prompts) `llm translation`
- [#41730](https://github.com/BerriAI/litellm/issues/41730) [Bug]: /model/info returns empty data for access grouped models `bug` `proxy`

#### 🔒 Closed Issues
- [#24677](https://github.com/BerriAI/litellm/issues/24677) [Bug]: Incorrect TPM limiting for virtual keys
- [#25255](https://github.com/BerriAI/litellm/issues/25255) [Feature Request]: Support for NVIDIA NeMo Guardrails (Python Library & Proxy API Server)
- [#30043](https://github.com/BerriAI/litellm/issues/30043) [Critical Hotfix Request]: No stable LiteLLM path for Claude Code → vLLM
- [#25843](https://github.com/BerriAI/litellm/issues/25843) Streaming fallback inconsistent with non-stream fallback on key-level router_settings
- [#19499](https://github.com/BerriAI/litellm/issues/19499) [Bug]: Prompt Injection Detection Issues
- [#27450](https://github.com/BerriAI/litellm/issues/27450) Add "Kimi-K2.6" in "model_prices_and_context_window.json" for Provider Together AI
- [#36407](https://github.com/BerriAI/litellm/issues/36407) [Bug]: Support of reasonning effort on Mistral-medium-3-5
- [#41793](https://github.com/BerriAI/litellm/issues/41793) Bedrock OpenAI encrypted reasoning fails when switching models with shared credentials
- [#28237](https://github.com/BerriAI/litellm/issues/28237) [Feature] : Litellm with session idle timeout
- [#30355](https://github.com/BerriAI/litellm/issues/30355) [Feature]: Preserve Gemini image `part.thought` metadata in LiteLLM image responses
- [#36644](https://github.com/BerriAI/litellm/issues/36644) [Bug]: azure_ai/flux.2-pro images.edit drops width/height and forwards unsupported `size` key — output is always 1024x1024 (input gets cropped/zoomed)
- [#30836](https://github.com/BerriAI/litellm/issues/30836) [Bug]: /v1/messages ignores timeout/stream_timeout, hard-capped at 600s (peak-time latency kills long streams)
- [#40080](https://github.com/BerriAI/litellm/issues/40080) [Bug]: GPT-5.6 cross-region inference profiles on Bedrock fail with image input (routed through Converse instead of OpenAI endpoint)
- [#41849](https://github.com/BerriAI/litellm/issues/41849) [Bug]: reasoning_tokens reported as 0 on /v1/responses and completion_tokens_details null on /v1/chat/completions for hosted_vllm reasoning models
- [#30362](https://github.com/BerriAI/litellm/issues/30362) [Feature]: Support HTTP/2 for outbound requests to upstream LLM providers
- [#33448](https://github.com/BerriAI/litellm/issues/33448) [Bug]: Responses WebSocket drops deployment-level default request parameters
- [#41820](https://github.com/BerriAI/litellm/issues/41820) [Bug]: image_edit serializes image/mask file params as bracketed string form fields
- [#36446](https://github.com/BerriAI/litellm/issues/36446) [Bug]: /config/update silently wipes router_settings.model_group_alias on every router-settings edit (Pydantic {} default leaks through exclude_none)
- [#40783](https://github.com/BerriAI/litellm/issues/40783) [Bug]: Updating team_member_budget silently does not apply to existing team members
- [#36881](https://github.com/BerriAI/litellm/issues/36881) Vertex/Gemini: content-less candidate (thinking model at MAX_TOKENS) yields empty choices -> IndexError on choices[0]
- [#40477](https://github.com/BerriAI/litellm/issues/40477) [Bug]: Gemini candidate with a finishReason but no content is dropped, so the reason never reaches the client
- [#41202](https://github.com/BerriAI/litellm/issues/41202) [Bug]: thinking-binding-controls-2026-08-01 beta header is stripped on /v1/messages, so thinking.block_binding 400s on Bedrock/Vertex
- [#36310](https://github.com/BerriAI/litellm/issues/36310) Admin UI lets you save routing_groups config the runtime hard-rejects (model in two groups), silently breaking ALL groups
- [#41750](https://github.com/BerriAI/litellm/issues/41750) [Bug]: Bedrock embedding batches are billed at $0 with zero tokens recorded

### Unsloth (`unslothai/unsloth`)

**Stars:** 76,393 · **Open issues:** 1,246 · **Last push:** <1h ago

On September 19, 2026, Unsloth released version v0.1.811-beta, which includes significant updates such as Docker support for both NVIDIA and AMD, multi-user accounts, and improved performance for RDNA1+2 and FP8/INT8 diffusion, alongside a hotfix for Qwen3.8-Flash-Next that provides a 2x speed boost. Key merged pull requests included enhancements to the Studio environment, such as preserving local model inventories and ensuring proper handling of cache filesystem errors. Additionally, fixes addressed issues like blocked updates in the desktop environment and maintaining Claude Code prompt cache integrity. Notably, new issues emerged regarding heavy performance degradation and bugs in PowerShell install scripts, highlighting a few areas needing attention.

#### 🚀 New Releases
- [v0.1.811-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.811-beta) Docker + Multi User + AMD Support

#### ✅ Merged PRs
- [#11309](https://github.com/unslothai/unsloth/pull/11309) Stop one test's app settings answering another test's read
- [#11214](https://github.com/unslothai/unsloth/pull/11214) Studio: train a gated upstream model through its public Unsloth copy
- [#11272](https://github.com/unslothai/unsloth/pull/11272) Studio: preserve local model inventory after cache filesystem errors
- [#11274](https://github.com/unslothai/unsloth/pull/11274) Desktop: support SQF script attachments
- [#11273](https://github.com/unslothai/unsloth/pull/11273) fix(desktop): explain updates blocked by an existing Studio server
- [#11154](https://github.com/unslothai/unsloth/pull/11154) Studio: tell the model which tool calls were skipped by the per turn limit
- [#11160](https://github.com/unslothai/unsloth/pull/11160) Studio: fetch a remote image URL instead of forwarding it to llama-server
- [#11231](https://github.com/unslothai/unsloth/pull/11231) Studio: restore an exported chat backup as separate chats
- [#11018](https://github.com/unslothai/unsloth/pull/11018) Studio: preserve partial state for canceled GGUF companions
- [#11304](https://github.com/unslothai/unsloth/pull/11304) Disengage FBCache on the word of whoever owns it
- [#11121](https://github.com/unslothai/unsloth/pull/11121) Studio: preserve Claude Code prompt cache with custom output styles
- [#11229](https://github.com/unslothai/unsloth/pull/11229) Studio: keep a LoRA push private when the Hub repo already exists
- [#11303](https://github.com/unslothai/unsloth/pull/11303) Route the last direct pwsh spawns through the shared runner
- [#11249](https://github.com/unslothai/unsloth/pull/11249) Studio: run one repair at a time, however many times Retry is pressed
- [#11285](https://github.com/unslothai/unsloth/pull/11285) Route today's new PowerShell test calls through the shared runner
- [#11302](https://github.com/unslothai/unsloth/pull/11302) studiobench: count the attachments the composer actually renders
- [#11288](https://github.com/unslothai/unsloth/pull/11288) Assert the companion scan's thread, not how fast the machine is
- [#11287](https://github.com/unslothai/unsloth/pull/11287) Stop three tests stranding a waiting request in a module-level dict
- [#11284](https://github.com/unslothai/unsloth/pull/11284) Give the page-fault stall test a window the scheduler cannot close
- [#11131](https://github.com/unslothai/unsloth/pull/11131) fix the Hub README's tag and GPU support claims
- [#11280](https://github.com/unslothai/unsloth/pull/11280) Carry over five temp-scanner fixes that landed after #11217 merged
- [#11279](https://github.com/unslothai/unsloth/pull/11279) Bump install.sh / install.ps1 pin to unsloth>=2026.9.7
- [#11208](https://github.com/unslothai/unsloth/pull/11208) Size VRAM from the pool, not the carve-out, on integrated NVIDIA parts
- [#11217](https://github.com/unslothai/unsloth/pull/11217) Contain a temp-scan failure to the directory that raised it, and refuse a partial scan
- [#11237](https://github.com/unslothai/unsloth/pull/11237) Studio: stop the macOS update re-probing binaries and resolving 16 releases
- [#11101](https://github.com/unslothai/unsloth/pull/11101) perf(studio): enable the scoped MLX residual normalization and MoE router fusions
- [#11248](https://github.com/unslothai/unsloth/pull/11248) Studio: stop a Windows update deleting the venv it is running from
- [#11232](https://github.com/unslothai/unsloth/pull/11232) Studio: make Save Steps 0 actually turn off checkpoints
- [#11271](https://github.com/unslothai/unsloth/pull/11271) Make the Colab pip cache able to shrink, which #11270 assumed it already could
- [#11142](https://github.com/unslothai/unsloth/pull/11142) Studio: probe the GPU once per embedding backend, not on every encode
- [#11270](https://github.com/unslothai/unsloth/pull/11270) Trim 2.59 GiB per generation from the Colab smoke job's pip cache
- [#11268](https://github.com/unslothai/unsloth/pull/11268) Find the overlay rails by testid, not by the corner spelled into the pattern
- [#11257](https://github.com/unslothai/unsloth/pull/11257) Wait for the claim release, not the teardown, in the idle-unload test
- [#11263](https://github.com/unslothai/unsloth/pull/11263) Wait for the diffusion run record instead of sleeping 0.1s for it
- [#11174](https://github.com/unslothai/unsloth/pull/11174) Stop a redundant step-cache engage from tearing the cache down
- [#11255](https://github.com/unslothai/unsloth/pull/11255) Say "Unsloth" on desktop surfaces, and sweep the whole crate for it
- [#11262](https://github.com/unslothai/unsloth/pull/11262) Re-couple the Docker restore hint to the script that prints it
- [#11196](https://github.com/unslothai/unsloth/pull/11196) Studio: bring the picker's Connected rows up to the On Device rows
- [#11244](https://github.com/unslothai/unsloth/pull/11244) unsloth: modernize account settings and show signed-in identity
- [#11226](https://github.com/unslothai/unsloth/pull/11226) Studio: stop showing "Update failed" when the window is reloaded during an update
- [#11224](https://github.com/unslothai/unsloth/pull/11224) Studio: stop the false "Failed to refresh models" error during a desktop update
- [#11233](https://github.com/unslothai/unsloth/pull/11233) Studio: delete a chat's uploaded documents when the chat is deleted
- [#11260](https://github.com/unslothai/unsloth/pull/11260) Studio: stop the overlay rail clipping card shadows in dark mode
- [#11261](https://github.com/unslothai/unsloth/pull/11261) Studio: give whisper.cpp its own update notification switch
- [#11256](https://github.com/unslothai/unsloth/pull/11256) Studio: search the shortcut list by pressing the chord
- [#11253](https://github.com/unslothai/unsloth/pull/11253) Studio: press every shipped shortcut chord in the smoke suite
- [#11195](https://github.com/unslothai/unsloth/pull/11195) Studio: match the roundness of Connections settings boxes to the rest of Settings
- [#11258](https://github.com/unslothai/unsloth/pull/11258) Studio: give the shortcuts tab the same heading as every other tab
- [#11254](https://github.com/unslothai/unsloth/pull/11254) Use Unsloth branding in remaining user-facing text
- [#11252](https://github.com/unslothai/unsloth/pull/11252) Studio: keep the find query readable when nothing matches
- [#11251](https://github.com/unslothai/unsloth/pull/11251) Studio: say "Unsloth Studio" in user-facing strings
- [#11250](https://github.com/unslothai/unsloth/pull/11250) Studio: shared pill selector in settings toggles, plus queue and steer shortcuts
- [#11228](https://github.com/unslothai/unsloth/pull/11228) Studio: stop listing EAGLE3 draft files as models, and pick MXFP4 when it is the only real option
- [#11225](https://github.com/unslothai/unsloth/pull/11225) Studio: retry remote access when cloudflared gives no URL
- [#11230](https://github.com/unslothai/unsloth/pull/11230) Studio: do not upload the seed token when publishing a dataset
- [#11234](https://github.com/unslothai/unsloth/pull/11234) Studio: keep Max Tool Calls Per Message set to Off after a reload
- [#11236](https://github.com/unslothai/unsloth/pull/11236) Studio: keep a cached quant On Device when only its companion is missing
- [#11240](https://github.com/unslothai/unsloth/pull/11240) Re-approve the four unsloth-zoo findings that 2026.9.5 reopened

#### 🐛 New Issues
- [#11278](https://github.com/unslothai/unsloth/issues/11278) [Bug] heavy performance degradation `feature request` `bug` 💬5
- [#11245](https://github.com/unslothai/unsloth/issues/11245) [Feature] Redesign UI for this model loader notification `feature request` 💬2
- [#11313](https://github.com/unslothai/unsloth/issues/11313) [Bug] Unsloth Studio / Desktop: a reinstall or repair with the uv cache on another drive doubles the install's disk use, and a full disk fails as "studio setup failed"
- [#11308](https://github.com/unslothai/unsloth/issues/11308) Studio: DFlash sidecar + --split-mode tensor asserts on ROCm (ggml-backend-meta.cpp:543), silently falls back to layer split — upstream llama.cpp#27858 fixes it, verified on gfx1201
- [#11290](https://github.com/unslothai/unsloth/issues/11290) [Unsloth Bug] PowerShell install script fails during rollback due to space in Windows username (HOMEPC~1 path not found) `feature request` `bug`
- [#11282](https://github.com/unslothai/unsloth/issues/11282) [Feature] Copy FULL prompt in the API monitor instead of the trimmed version `feature request`
- [#11247](https://github.com/unslothai/unsloth/issues/11247) Studio (Windows): update after a GPU vendor change half-deletes the venv, and Retry starts duplicate repairs
- [#11259](https://github.com/unslothai/unsloth/issues/11259) [Bug] Bonsai models suddenly do not load at all. `feature request` `bug`
- [#11243](https://github.com/unslothai/unsloth/issues/11243) [Feature]Consider adding this software to Scoop official bucket (Scoop Installer) `feature request`

#### 🔒 Closed Issues
- [#11278](https://github.com/unslothai/unsloth/issues/11278) [Bug] heavy performance degradation
- [#10716](https://github.com/unslothai/unsloth/issues/10716) [Bug] Resolved: Diffusion issues
- [#11010](https://github.com/unslothai/unsloth/issues/11010) Studio: a remote image_url is forwarded to llama-server, which fetches it from the host
- [#11247](https://github.com/unslothai/unsloth/issues/11247) Studio (Windows): update after a GPU vendor change half-deletes the venv, and Retry starts duplicate repairs

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,097 · **Open issues:** 378 · **Last push:** 7h ago

On September 19, 2026, there were no new releases for AIBrix. Key developments included the merging of several significant pull requests, such as #2739, which added integration coverage for the ModelClaim controller, and #2743, enhancing the lifecycle E2E coverage for the ModelRouter. Additionally, PR #2748 introduced unit tests for SLOQueue featuresKey and higherRank, while #2738 provided unit tests for SLOQueue's Dequeue guard and Route error propagation. Notably, a new issue was raised in #2747 regarding the option to disable all gateway rate limiting even when Redis is configured.

#### ✅ Merged PRs
- [#2739](https://github.com/vllm-project/aibrix/pull/2739) [CI] Add ModelClaim controller integration coverage
- [#2748](https://github.com/vllm-project/aibrix/pull/2748) [Misc] Add unit tests for SLOQueue featuresKey and higherRank
- [#2743](https://github.com/vllm-project/aibrix/pull/2743) [CI] Add ModelRouter lifecycle E2E coverage
- [#2738](https://github.com/vllm-project/aibrix/pull/2738) [Misc] Add unit tests for SLOQueue Dequeue guard and Route error propagation

#### 🐛 New Issues
- [#2747](https://github.com/vllm-project/aibrix/issues/2747) Allow disabling all gateway rate limiting while Redis remains configured `area/gateway` `kind/feature` 💬1

#### 🔒 Closed Issues
- [#2422](https://github.com/vllm-project/aibrix/issues/2422) [Question] Non-atomic window between pod selection and AddRequestCount causes burst routing to the same pod under concurrency

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 5,859 · **Open issues:** 511 · **Last push:** <1h ago

On September 19, 2026, there were no new releases for Semantic Router, but several notable updates were merged, including a fix in PR #2522 that ensures lifecycle-own workflow states and real resume semantics. The introduction of a fallback policy for quorum failures in PR #3405 and reasoning controls for external LLM classifiers in PR #3883 highlight ongoing feature enhancements. Bug fixes also played a significant role, with PR #3915 addressing the issue of starting replay records before dispatching shadows and PR #3850 implementing safeguards against blank vector store queries. Among new issues, PR #3923 raised concerns about the DSL-compiler WASM hiding prerequisites instead of naming them, indicating areas that might need urgent attention.

#### ✅ Merged PRs
- [#3505](https://github.com/vllm-project/semantic-router/pull/3505) [Test] Migrate the dashboard profile values to canonical v0.3
- [#3162](https://github.com/vllm-project/semantic-router/pull/3162) [Feature] Treat semantic-cache NLI verifier failures as cache misses
- [#2522](https://github.com/vllm-project/semantic-router/pull/2522) [Router] fix(looper): lifecycle-own workflow state and make resume semantics real
- [#3436](https://github.com/vllm-project/semantic-router/pull/3436) [Feature] Add recent-outcome evidence window for session switch gate
- [#3915](https://github.com/vllm-project/semantic-router/pull/3915) [Bug] Start the replay record before dispatching the shadow
- [#3883](https://github.com/vllm-project/semantic-router/pull/3883) [Feature] Add reasoning control to external LLM classifiers
- [#3903](https://github.com/vllm-project/semantic-router/pull/3903) [Feature] Admit IBM Granite models to the built in Model Card catalog
- [#3620](https://github.com/vllm-project/semantic-router/pull/3620) [Bug] Attribute selected-model header to the final dispatch model and document routing capabilities
- [#3908](https://github.com/vllm-project/semantic-router/pull/3908) [Bug] looper: fill verifier_version in attempt traces and report faithfulness as tie (#2857)
- [#3850](https://github.com/vllm-project/semantic-router/pull/3850) [Bug] Reject a blank vector store query as a client error
- [#3405](https://github.com/vllm-project/semantic-router/pull/3405) [Feature] Add Fusion quorum-failure fallback policy

#### 🐛 New Issues
- [#3923](https://github.com/vllm-project/semantic-router/issues/3923) [Bug] The missing DSL-compiler WASM hides its prerequisite instead of naming it `bug` `accepted` `wg/developer-experience-ecosystem` 💬2
- [#3902](https://github.com/vllm-project/semantic-router/issues/3902) [CI/Build] Mergify cannot update approved PRs that trail a workflow change `bug` `accepted` `owner/maintainers` 💬2
- [#3914](https://github.com/vllm-project/semantic-router/issues/3914) [Bug] Deferred replay start leaves every shadow dispatch outcome unrecorded `bug` `accepted` `wg/mom-routing` 💬1
- [#3904](https://github.com/vllm-project/semantic-router/issues/3904) [Bug] Dashboard images return 403 when built from a restrictive checkout `bug` `accepted` `wg/developer-experience-ecosystem` 💬1
- [#3925](https://github.com/vllm-project/semantic-router/issues/3925) [Bug] Training scripts pass warmup_ratio/logging_dir removed in transformers 5.15 `bug` `needs-acceptance` `wg/router-models-inference-runtime`
- [#3922](https://github.com/vllm-project/semantic-router/issues/3922) [Feature] Gate post-decision semantic plugins on request and backend capabilities `enhancement` `needs-acceptance` `wg/data-plane-networking`
- [#3921](https://github.com/vllm-project/semantic-router/issues/3921) [Feature] Move DeepSeek and OpenRouter request dialects into bounded protocol codec adapters `enhancement` `needs-acceptance` `wg/data-plane-networking`
- [#3920](https://github.com/vllm-project/semantic-router/issues/3920) [Feature] Define and verify the media path under full-duplex-streamed request bodies `enhancement` `needs-acceptance` `wg/data-plane-networking`
- [#3919](https://github.com/vllm-project/semantic-router/issues/3919) [Feature] Add a bounded video-output codec vertical `enhancement` `needs-acceptance` `wg/data-plane-networking`
- [#3918](https://github.com/vllm-project/semantic-router/issues/3918) [Feature] Add a bounded audio-output codec vertical `enhancement` `needs-acceptance` `wg/data-plane-networking`
- [#3916](https://github.com/vllm-project/semantic-router/issues/3916) [Bug] Expression validation success state still uses the migrated --color-primary alias instead of the semantic success color `wg/developer-experience-ecosystem`
- [#3907](https://github.com/vllm-project/semantic-router/issues/3907) [Bug] Router fails to start with model_type=multimodal when a recipe has no contrastive jailbreak rule `bug` `accepted` `wg/router-models-inference-runtime`

#### 🔒 Closed Issues
- [#3377](https://github.com/vllm-project/semantic-router/issues/3377) [Feature] Gate session model switches on calibrated recent-window progress evidence
- [#3798](https://github.com/vllm-project/semantic-router/issues/3798) [Feature] Add reasoning control to LLM classifier signals
- [#3375](https://github.com/vllm-project/semantic-router/issues/3375) [Feature] Define Fusion quorum-failure fallback policies
- [#3176](https://github.com/vllm-project/semantic-router/issues/3176) [Feature] Define the runtime failure policy for semantic-cache NLI verification
- [#3496](https://github.com/vllm-project/semantic-router/issues/3496) [Bug] Canonical response validation rejects every Azure OpenAI / AI Foundry response
- [#3611](https://github.com/vllm-project/semantic-router/issues/3611) [Feature] Add initial Together AI serverless model mappings
- [#2471](https://github.com/vllm-project/semantic-router/issues/2471) [Bug] Lifecycle-own Looper workflow state and make resume semantics real
- [#3782](https://github.com/vllm-project/semantic-router/issues/3782) [Bug] The Presidio dataset download URL returns 404
- [#3914](https://github.com/vllm-project/semantic-router/issues/3914) [Bug] Deferred replay start leaves every shadow dispatch outcome unrecorded
- [#3849](https://github.com/vllm-project/semantic-router/issues/3849) [Bug] Vector store search reports a whitespace query as an internal error
- [#3904](https://github.com/vllm-project/semantic-router/issues/3904) [Bug] Dashboard images return 403 when built from a restrictive checkout
- [#3916](https://github.com/vllm-project/semantic-router/issues/3916) [Bug] Expression validation success state still uses the migrated --color-primary alias instead of the semantic success color
- [#3907](https://github.com/vllm-project/semantic-router/issues/3907) [Bug] Router fails to start with model_type=multimodal when a recipe has no contrastive jailbreak rule

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*