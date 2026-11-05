# 📡 AI Ecosystem Digest — 2026-11-05

> Generated 2026-11-05 03:14 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 154,567 | 27 | 0 | 0 | 0 |
| [OpenAI Codex](https://github.com/openai/codex) | 133,222 | 17 | 4 | 49 | 4 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 108,733 | 0 | 0 | 5 | 2 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,354 | 9 | 8 | 0 | 1 |
| [OpenCode](https://github.com/anomalyco/opencode) | 224,623 | 26 | 19 | 25 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 29,015 | 20 | 8 | 9 | 2 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 393,925 | 139 | 163 | 164 | 1 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 260,597 | 45 | 1 | 2 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 96,348 | 30 | 18 | 39 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 38,473 | 24 | 8 | 43 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 133,398 | 20 | 14 | 24 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 185,945 | 8 | 5 | 4 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 62,723 | 18 | 10 | 54 | 3 |
| [Unsloth](https://github.com/unslothai/unsloth) | 79,057 | 19 | 15 | 99 | 1 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,182 | 0 | 3 | 3 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,393 | 23 | 34 | 8 | 0 |

---

## ✨ Highlights

- **OpenAI Codex** released multiple versions, including [rust-v0.168.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.168.0-alpha.3).
- **Gemini CLI** launched [v0.68.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.68.0-preview.0).
- A notable new issue in **Qwen Code** regarding CI failures can be found in [#16265](https://github.com/QwenLM/qwen-code/issues/16265) with 10 comments.
- In **OpenClaw**, a feature request for a Claude web search provider was opened in [#192632](https://github.com/openclaw/openclaw/issues/192632), generating significant interest with 9 comments.
- **vLLM** has drawn attention due to a performance issue reported in [#65569](https://github.com/vllm-project/vllm/issues/65569), which has accumulated 7 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 154,567 · **Open issues:** 16,428 · **Last push:** 1d ago

On November 5, 2026, there were no new releases or merged pull requests for Claude Code. However, several new issues were reported, with #107363 proposing explicit exceptions for "ask" permission rules and #107367 highlighting a bug where idle compaction skips sessions locked out by usage limits, requiring a full cold cache rewrite. Additionally, #107375 addresses a bug where double-clicking the prompt's horizontal rule overwrites the clipboard. Notably, #107364 seeks to add a feature to hide Claude Code sessions in recent chats, indicating potential user experience improvements. Overall, the day involved routine monitoring of issues without significant code changes.

#### 🐛 New Issues
- [#107363](https://github.com/anthropics/claude-code/issues/107363) [FEATURE] Explicit exceptions for "ask" permission rules (e.g. ask Bash(rm *) except /tmp/claude/**) `enhancement` `area:bash` `area:permissions`
- [#107367](https://github.com/anthropics/claude-code/issues/107367) Idle compaction skips sessions locked out by a usage limit → full cold cache rewrite after reset `bug` `platform:windows` `area:cost` `area:core` 💬1
- [#107294](https://github.com/anthropics/claude-code/issues/107294) [GitHub integration] `bug` `platform:windows` `platform:web` `area:integrations` 💬1
- [#107376](https://github.com/anthropics/claude-code/issues/107376) VS Code extension: honor statusLine / expose rate_limits so tools don't need to read OAuth credentials `enhancement` `platform:vscode` `area:vscode` `area:statusline`
- [#107375](https://github.com/anthropics/claude-code/issues/107375) [BUG] Fullscreen: double-clicking the prompt's horizontal rule overwrites the clipboard `bug` `has repro` `platform:macos` `area:tui`
- [#107374](https://github.com/anthropics/claude-code/issues/107374) [BUG] `deny` rule for Read is silently ignored when the path is already inside an allowed/cwd directory `bug` `has repro` `platform:macos` `area:security`
- [#107373](https://github.com/anthropics/claude-code/issues/107373) [Bug] Opus 5.5 Refuses VMProtect Analysis Requests and Auto-Downgrades to Opus 4.8 `bug` `platform:windows` `area:model`
- [#107366](https://github.com/anthropics/claude-code/issues/107366) [BUG] VSCode becomes unresponsive when opening moderate subagent transcripts `bug` `has repro` `platform:windows` `area:ide`
- [#107365](https://github.com/anthropics/claude-code/issues/107365) [GitHub integration] GitHub connector missing from project “Power your project with tools” list `bug` `area:integrations` `github-integration`
- [#107364](https://github.com/anthropics/claude-code/issues/107364) [FEATURE] Hide claude code sessions in recent chats `enhancement` `platform:ios`
- [#107362](https://github.com/anthropics/claude-code/issues/107362) [GitHub integration] `bug` `area:integrations` `github-integration`
- [#107361](https://github.com/anthropics/claude-code/issues/107361) [GitHub integration] `bug` `platform:web` `needs-info` `github-integration`
- [#107360](https://github.com/anthropics/claude-code/issues/107360) 『このセッションでは有効になっていない』と返る `bug` `area:claude-code-web` `platform:web` `github-integration`
- [#107359](https://github.com/anthropics/claude-code/issues/107359) [BUG] Windows (MSIX): silent "stealth update" leaves the device key unreadable ("enclave key unavailable"), so the same PC re-registers as a new local device and all device-bound scheduled tasks/chats break (recurring roughly weekly) `bug` `platform:windows` `area:auth` `area:desktop`
- [#107358](https://github.com/anthropics/claude-code/issues/107358) [Bug] Specification gaming: Autonomous agent authoring anti-patterns into repo standards to evade browser tools & faking completion on pre-existing passing CI `bug` `platform:macos` `area:model`
- [#107357](https://github.com/anthropics/claude-code/issues/107357) [Bug] Opus 4.8 Reported as Legacy; Opus 5+ Models Perform Poorly `bug` `platform:linux` `area:model`
- [#107356](https://github.com/anthropics/claude-code/issues/107356) [Bug] Claude claims Opus 4.8 does not exist and searches web for its own model lineup `bug` `platform:linux` `area:model`
- [#107355](https://github.com/anthropics/claude-code/issues/107355) [Bug] Sending a message doesn't stop voice recording mode `bug` `platform:linux` `area:tui`
- [#107354](https://github.com/anthropics/claude-code/issues/107354) [BUG] Idle CLI session hangs after macOS sleep/DarkWake: CPU spin, heap grows past RAM (8.7 GB), ignores SIGTERM (2.1.316-2.1.318) `bug` `platform:macos` `area:core` `perf:memory`
- [#107353](https://github.com/anthropics/claude-code/issues/107353) [Bug] Claude Code refuses normal requests Why? `bug` `platform:linux` `area:model` `needs-info`
- [#107352](https://github.com/anthropics/claude-code/issues/107352) [Bug] Opus 4.8 malfunctioning `bug` `platform:linux` `area:model` `needs-info`
- [#107351](https://github.com/anthropics/claude-code/issues/107351) [Bug] Claude Code fails to list all user repositories after inspecting two - Claude wastes more of my time each day fighting it. Two more days and I'm not renewing. `bug` `platform:linux` `area:model`
- [#107350](https://github.com/anthropics/claude-code/issues/107350) Voice dictation: support Hebrew and let users limit dictation to a set of languages `enhancement`
- [#107349](https://github.com/anthropics/claude-code/issues/107349) [BUG] Edit tool always denied under --permission-mode dontAsk despite matching settings.json allow rule (Read with identical rule succeeds) `bug` `has repro` `platform:macos` `area:permissions`
- [#107348](https://github.com/anthropics/claude-code/issues/107348) le forfait journalier ne suffit pas , je ne peut pas choisir un forfait supérie… `question` `area:cost`
- [#107347](https://github.com/anthropics/claude-code/issues/107347) [Bug] OSC 7501 status reports idle while background Bash task is still running `bug` `platform:macos` `area:tui` `area:bash`
- [#107346](https://github.com/anthropics/claude-code/issues/107346) Built-in browser: sign-ins do not persist, 2FA asked again and again, no saved passwords `enhancement` `area:desktop`

### OpenAI Codex (`openai/codex`)

**Stars:** 133,222 · **Open issues:** 26,476 · **Last push:** <1h ago

On November 5, 2026, OpenAI Codex saw several new Rust releases, including versions rust-v0.168.0-alpha.3, rust-v0.168.0-alpha.2, rust-v0.167.0-alpha.5, and rust-v0.167.0-alpha.3.1, all contributing incremental improvements. Key features merged today include the addition of model provider browsing to the TUI configuration panel (#59541) and the introduction of a token-efficient model-facing ID generator (#59540). Notably, a significant issue arose regarding a sudden drop in weekly Codex quota from approximately 20% to 0% in just ten minutes, drawing attention to potential quota management concerns (#59487).

#### 🚀 New Releases
- [rust-v0.168.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.168.0-alpha.3) 0.168.0-alpha.3
- [rust-v0.168.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.168.0-alpha.2) 0.168.0-alpha.2
- [rust-v0.167.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.167.0-alpha.5) 0.167.0-alpha.5
- [rust-v0.167.0-alpha.3.1](https://github.com/openai/codex/releases/tag/rust-v0.167.0-alpha.3.1) 0.167.0-alpha.3.1

#### ✅ Merged PRs
- [#59544](https://github.com/openai/codex/pull/59544) Use paused time throughout the Noise relay recovery test
- [#59541](https://github.com/openai/codex/pull/59541) Add model provider browsing to the TUI configuration panel
- [#59540](https://github.com/openai/codex/pull/59540) Add a token-efficient model-facing ID generator
- [#59535](https://github.com/openai/codex/pull/59535) Add opt-in Unicode canonical matching to exec policy rules
- [#59531](https://github.com/openai/codex/pull/59531) Render host-owned V2 subagent rosters in environment context
- [#59530](https://github.com/openai/codex/pull/59530) Resolve workspace permissions at the sandbox launch boundary
- [#59527](https://github.com/openai/codex/pull/59527) Make side conversation panes resizable and interactive
- [#59524](https://github.com/openai/codex/pull/59524) Forward cloud message item lifecycle notifications
- [#59520](https://github.com/openai/codex/pull/59520) Populate the local secrets cache after successful saves
- [#59518](https://github.com/openai/codex/pull/59518) Validate UI trees at decode time and simplify display elements
- [#59517](https://github.com/openai/codex/pull/59517) Simplify pending interactive request tracking in the TUI
- [#59514](https://github.com/openai/codex/pull/59514) Add paginated cloud thread discovery to the cloud client
- [#59512](https://github.com/openai/codex/pull/59512) Bump the Python SDK build backend to `uv_build` 0.13
- [#59510](https://github.com/openai/codex/pull/59510) Use server model defaults for fresh TUI sessions on every connection
- [#59509](https://github.com/openai/codex/pull/59509) Forward caller metadata on MCP resource reads
- [#59507](https://github.com/openai/codex/pull/59507) Bind memory consolidation permissions to the memory root
- [#59505](https://github.com/openai/codex/pull/59505) Upgrade argument comment lint to Dylint 6.3.0
- [#59503](https://github.com/openai/codex/pull/59503) Keep threads on their saved model provider when defaults change
- [#59501](https://github.com/openai/codex/pull/59501) Fix the workspace policy test's auth loading call
- [#59497](https://github.com/openai/codex/pull/59497) Add debug timing for thread item pagination
- [#59496](https://github.com/openai/codex/pull/59496) Preserve project agent opt-ins across enabled legacy feature flags
- [#59495](https://github.com/openai/codex/pull/59495) Honor the configured credential store in gateway test fixtures
- [#59493](https://github.com/openai/codex/pull/59493) Add a native cloud backend to the app-server client
- [#59491](https://github.com/openai/codex/pull/59491) Preserve external auth through transient provider failures
- [#59489](https://github.com/openai/codex/pull/59489) Use MCP owner permissions for Guardian reviews and score reuse
- [#59481](https://github.com/openai/codex/pull/59481) Allow per-turn overrides for direct-only tool namespaces
- [#59480](https://github.com/openai/codex/pull/59480) Add per-turn prompt cache TTL options
- [#59479](https://github.com/openai/codex/pull/59479) Deprecate the `multi_agent` feature flag
- [#59478](https://github.com/openai/codex/pull/59478) Record saved multi-agent opt-outs in session telemetry
- [#59476](https://github.com/openai/codex/pull/59476) Honor project agent opt-ins over lower-priority legacy opt-outs
- [#59474](https://github.com/openai/codex/pull/59474) Refactor MCP tool argument parsing and approval preparation
- [#59473](https://github.com/openai/codex/pull/59473) Extract agent message board hosting into a dedicated crate
- [#59472](https://github.com/openai/codex/pull/59472) Preserve transcript interaction when switching panes with arrow keys
- [#59468](https://github.com/openai/codex/pull/59468) Allow prepared forks to use source revalidation
- [#59458](https://github.com/openai/codex/pull/59458) Drain queued side-conversation events before switching focus
- [#59455](https://github.com/openai/codex/pull/59455) Carry per-input extension data to user message completion callbacks
- [#59448](https://github.com/openai/codex/pull/59448) Prefer Launchpad for Linux zlib downloads in `rules_rs`
- [#59447](https://github.com/openai/codex/pull/59447) Restore the daemon auto-start feature flag
- [#59445](https://github.com/openai/codex/pull/59445) Warn when project instructions exceed the configured byte budget
- [#59444](https://github.com/openai/codex/pull/59444) Add opt-in elastic budgeting for synchronous Guardian reviews
- [#59404](https://github.com/openai/codex/pull/59404) Preserve pending agent messages across compaction
- [#59403](https://github.com/openai/codex/pull/59403) Fix missing item ID generators in retained instruction tests
- [#59401](https://github.com/openai/codex/pull/59401) Honor section limits in elastic Guardian context budgeting
- [#59369](https://github.com/openai/codex/pull/59369) Stabilize cross-platform tests and directory-change fork permissions
- [#59354](https://github.com/openai/codex/pull/59354) Share context window ID allocation through the agent runtime
- [#59351](https://github.com/openai/codex/pull/59351) Add managed thread prewarming to the cloud client
- [#59343](https://github.com/openai/codex/pull/59343) Add cloud thread activation with resolved settings
- [#59330](https://github.com/openai/codex/pull/59330) Stop TUI voice calls when the OS session locks
- [#59328](https://github.com/openai/codex/pull/59328) Introduce a dedicated context window ID type

#### 🐛 New Issues
- [#59549](https://github.com/openai/codex/issues/59549) Browser permission lifecycle: possible unanswered Ask prompt persists as denial after switching to Always allow `bug` `app` `computer-use` `browser` 💬3
- [#59308](https://github.com/openai/codex/issues/59308) Title: [Windows Desktop 26.1029.7803.0] Fork always fails with execution-config-loading for API-key users without ChatGPT sign-in `bug` `windows-os` `auth` `custom-model` 💬3
- [#59487](https://github.com/openai/codex/issues/59487) Weekly Codex quota suddenly dropped from ~20% remaining to 0% in ~10 minutes (Nov 4, 2026) `bug` `rate-limits` 💬3
- [#59326](https://github.com/openai/codex/issues/59326) [macOS][26.1021.31345] IAB existing-tab reactivation ends in debugger synchronization timeout `bug` `app` `browser` 💬2
- [#59553](https://github.com/openai/codex/issues/59553) Cross-device chat regression: intermittent “This is open in another app” warning with unclear recovery `bug` `app` `session` 💬1
- [#59552](https://github.com/openai/codex/issues/59552) Unable to read existing local Codex conversations by ID on two authorized Macs `bug` `app` `session` `dots` 💬1
- [#59543](https://github.com/openai/codex/issues/59543) Codex Desktop for macOS: In-App Browser and Chrome Extension Control Time Out `bug` `app` `connectivity` `browser` 💬1
- [#59542](https://github.com/openai/codex/issues/59542) Codex Desktop for macOS: In-App Browser and Chrome Extension Control Time Out `bug` `app` `connectivity` `browser` 💬1
- [#59554](https://github.com/openai/codex/issues/59554) [macOS Desktop 26.1027.61615] Existing conversation cannot load: invalid paginated history lineage / missing source rollout `bug` `app` `session`
- [#59551](https://github.com/openai/codex/issues/59551) [Dots cloud computer] api.deepseek.com resolves but unauthenticated HTTPS probe fails at TCP connect (ECONNREFUSED) `bug` `connectivity` `dots`
- [#59550](https://github.com/openai/codex/issues/59550) [Dots cloud browser] Sandboxed loopback iframe loads HTML and inline JS, but external scripts never reach server `bug` `browser` `dots`
- [#59548](https://github.com/openai/codex/issues/59548) Codex cloud: /goal option is missing when accessed from the mobile app `bug` `codex-web` `agent`
- [#59547](https://github.com/openai/codex/issues/59547) [ChatGPT / GitHub] Public GitHub Releases return DisabledError while the GitHub connector succeeds `bug` `model-behavior` `tool-calls`
- [#59546](https://github.com/openai/codex/issues/59546) [Desktop] Built-in automation restriction blocks monitoring tasks in external web systems, conflicting with Scheduled tasks docs `bug` `app` `automations`
- [#59545](https://github.com/openai/codex/issues/59545) [macOS Desktop] Enabling respect_system_proxy with remote PAC hangs startup and sometimes crashes (workspace routing timeout) `bug` `app` `connectivity`
- [#59539](https://github.com/openai/codex/issues/59539) [Windows][26.1027.3384.0] Codex Desktop UI hangs near task completion (Win32 timeouts and AppHangTransient) `bug` `windows-os` `app` `performance`
- [#59538](https://github.com/openai/codex/issues/59538) Codex exhausted 343 Firecrawl credits crawling off-domain URLs despite user intervention `bug` `model-behavior` `CLI`

#### 🔒 Closed Issues
- [#59549](https://github.com/openai/codex/issues/59549) Browser permission lifecycle: possible unanswered Ask prompt persists as denial after switching to Always allow
- [#57443](https://github.com/openai/codex/issues/57443) Selected model is at capacity. Please try a different model.
- [#43153](https://github.com/openai/codex/issues/43153) [macOS] Blank image block in ChatGPT conversation: composite sediment reference fails with 422 Invalid file_id
- [#48340](https://github.com/openai/codex/issues/48340) [macOS][Computer Use] Purple window capture indicator briefly disappears and reappears during native app observation

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 108,733 · **Open issues:** 780 · **Last push:** 1h ago

On November 5, 2026, Gemini CLI announced the release of v0.68.0-preview.0, which includes changelogs for previous versions and clarifications on tool scope and limitations. Additionally, v0.67.0 was officially released, featuring updates and improvements consistent with its nightly builds. Significant merged pull requests included a new `/stats heatmap` subcommand for tracking daily token usage and a fix that prevents environment variable collisions in the core system. Several other fixes addressed output serialization and template placeholder replacements to ensure better functionality. There were no new issues reported in the last 24 hours.

#### 🚀 New Releases
- [v0.68.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.68.0-preview.0) Release v0.68.0-preview.0
- [v0.67.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.67.0) Release v0.67.0

#### ✅ Merged PRs
- [#30141](https://github.com/google-gemini/gemini-cli/pull/30141) fix(cli): serialize AnsiOutput to text content in ACP tool call updates
- [#30140](https://github.com/google-gemini/gemini-cli/pull/30140) chore(release): bump version to 0.69.0-nightly.20261104.g89e9d25d6
- [#30138](https://github.com/google-gemini/gemini-cli/pull/30138) fix(core): prevent __GCLI_EXPAND_TARGET__ env collision in expandEnvVars
- [#30135](https://github.com/google-gemini/gemini-cli/pull/30135) feat(cli): add /stats heatmap subcommand for daily token usage
- [#30136](https://github.com/google-gemini/gemini-cli/pull/30136) fix(core,cli): preserve literal `$` characters during template placeholder replacement

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,354 · **Open issues:** 2,187 · **Last push:** 9h ago

On November 5, 2026, GitHub Copilot CLI released version 1.0.106-9, which includes critical fixes such as ensuring the `apply_patch` function accurately reflects line counts in various summaries and improving the `copilot config` command to issue warnings for incorrect value types in settings.json. There were no merged pull requests in the last 24 hours, but several new issues were reported, with #5354 drawing attention for not advertising Copilot Fusion availability interactively despite its presence. Other significant issues include intermittent stalls in version 1.0.105 on Windows (#5356) and challenges with temp file handling by subagents (#5352).

#### 🚀 New Releases
- [v1.0.106-9](https://github.com/github/copilot-cli/releases/tag/v1.0.106-9) 1.0.106-9

#### 🐛 New Issues
- [#5354](https://github.com/github/copilot-cli/issues/5354) ACP does not advertise Copilot Fusion or its tier configuration when Fusion is available interactively `triage` 💬1
- [#5356](https://github.com/github/copilot-cli/issues/5356) Windows / npm Copilot CLI 1.0.105: intermittent multi-minute stalls mid-turn; cancellation and continue required `triage` 💬1
- [#5352](https://github.com/github/copilot-cli/issues/5352) Subagents refuse to read back files from temp due to misinterpretting instructions not to write or create in temp `triage` 💬1
- [#5351](https://github.com/github/copilot-cli/issues/5351) MCP OAuth: pre-registered (static) client's secret isn't sent at token exchange → invalid_client 💬1
- [#5353](https://github.com/github/copilot-cli/issues/5353) Render markdown in submitted user messages in the timeline `triage` 💬1
- [#5358](https://github.com/github/copilot-cli/issues/5358) Support side-effect-free device sign-in and token-free auth status/reload `triage`
- [#5357](https://github.com/github/copilot-cli/issues/5357) Copilot -p fails with I/O failure `triage`
- [#5355](https://github.com/github/copilot-cli/issues/5355) Remote session auto-publish fails when launched with --add-dir `triage`
- [#5350](https://github.com/github/copilot-cli/issues/5350) MCP OAuth (interactive): authorization code is received and the success page is served, but the code->token exchange never runs — server stuck "Connecting" `triage`

#### 🔒 Closed Issues
- [#3387](https://github.com/github/copilot-cli/issues/3387) Add option to disable sending usage telemetry
- [#4451](https://github.com/github/copilot-cli/issues/4451) Explicit slash skill is redundantly reloaded through model registry and fails with “Skill not found”
- [#5130](https://github.com/github/copilot-cli/issues/5130) Constant error message around "Managed account policy"
- [#5322](https://github.com/github/copilot-cli/issues/5322) Prerelease version 1.0.106-2 is broken
- [#5285](https://github.com/github/copilot-cli/issues/5285) cli cannot interact with sandbox
- [#5351](https://github.com/github/copilot-cli/issues/5351) MCP OAuth: pre-registered (static) client's secret isn't sent at token exchange → invalid_client
- [#4318](https://github.com/github/copilot-cli/issues/4318) Autopilot task-completion enforcement can override explicit user instructions
- [#1931](https://github.com/github/copilot-cli/issues/1931) unreconized flag for Grep command make by cli on request analyze

### OpenCode (`anomalyco/opencode`)

**Stars:** 224,623 · **Open issues:** 4,027 · **Last push:** <1h ago

On November 5, 2026, there were no new releases for OpenCode. Key developments included the merging of important pull requests such as #61825, which introduces a unified registry for feature flags enabled by default in development builds, and #61882, which enhances error handling for site cookie reads. Various fixes focused on improving state machine functionality across GUI plugins and applications, including #61861 and #61848, which enhance user experience by improving message cursor behavior and showing appropriate elements based on page context. A notably hot issue emerged with #61827, which reports that the deepseek-v4.1-flash image rejection is causing session issues due to unavailability of image input. Overall, the day consisted mainly of routine maintenance tasks aimed at refining existing functionalities.

#### ✅ Merged PRs
- [#61892](https://github.com/anomalyco/opencode/pull/61892) fix(gui-plugins): drive the Office viewer worker with one explicit state machine
- [#61826](https://github.com/anomalyco/opencode/pull/61826) feat(core): a switch that turns every feature flag on
- [#61880](https://github.com/anomalyco/opencode/pull/61880) fix(core): keep retrying while the provider's host is unreachable
- [#61885](https://github.com/anomalyco/opencode/pull/61885) fix(desktop): serialize force focus and fix the debug bar toggle
- [#61883](https://github.com/anomalyco/opencode/pull/61883) fix(app): make blank /btw answers retryable
- [#61825](https://github.com/anomalyco/opencode/pull/61825) feat(core): one registry for feature flags, on by default in dev builds
- [#61869](https://github.com/anomalyco/opencode/pull/61869) fix(session-ui): drive shell runs, paced text and copy feedback through state machines
- [#61861](https://github.com/anomalyco/opencode/pull/61861) fix(app): show the browser element picker as on only once the page confirms it
- [#61848](https://github.com/anomalyco/opencode/pull/61848) fix(app): drive the active message cursor with an explicit state machine
- [#61857](https://github.com/anomalyco/opencode/pull/61857) fix(app): show a failed site cookie read and let it retry
- [#61855](https://github.com/anomalyco/opencode/pull/61855) fix(app): keep browser refs through downloads and blocked navigations
- [#61862](https://github.com/anomalyco/opencode/pull/61862) fix(app): show failed and offline review diffs instead of a clean tree
- [#61874](https://github.com/anomalyco/opencode/pull/61874) refactor(gui-plugins): never share machine state objects that reach a Solid store
- [#61866](https://github.com/anomalyco/opencode/pull/61866) fix(app): keep each screen's review model while anything holds it
- [#61868](https://github.com/anomalyco/opencode/pull/61868) fix(app): scroll the narrow review only to files focused there
- [#61844](https://github.com/anomalyco/opencode/pull/61844) fix(app): drive older-history paging with an explicit state machine
- [#61878](https://github.com/anomalyco/opencode/pull/61878) fix(app): remove the new messages divider
- [#61871](https://github.com/anomalyco/opencode/pull/61871) chore: bench with strobe 0.7.0; page cases check the OpenCode title
- [#61863](https://github.com/anomalyco/opencode/pull/61863) fix(gui-plugins): drive SSH connections and connect attempts with explicit machines
- [#61854](https://github.com/anomalyco/opencode/pull/61854) fix(gui-plugins): run browser pane attachments through one state machine
- [#61094](https://github.com/anomalyco/opencode/pull/61094) fix(tui): show an error when Ctrl+V can't read the clipboard
- [#61847](https://github.com/anomalyco/opencode/pull/61847) fix(app): reconnect a terminal once its restarted server lists it again
- [#61853](https://github.com/anomalyco/opencode/pull/61853) fix(gui-plugins): drive browser pane bindings and tabs through one state machine
- [#61852](https://github.com/anomalyco/opencode/pull/61852) fix(app): keep terminal focus and tab renames on what the user chose
- [#61850](https://github.com/anomalyco/opencode/pull/61850) fix(gui-plugins): report failed file link opens and key the file picker focus

#### 🐛 New Issues
- [#61827](https://github.com/anomalyco/opencode/issues/61827) go: deepseek-v4.1-flash image rejection bricks sessions ("image input is not available on this engine") 💬4
- [#61891](https://github.com/anomalyco/opencode/issues/61891) [Bug] Code Mode: 'DocumentationSearch' is callable directly but omitted from catalog and search() (undiscoverable by model) 💬3
- [#61845](https://github.com/anomalyco/opencode/issues/61845) opencode-go: gemini-4-argon returns 403 Endpoint is unavailable, other Go models work `pending close` `triaging` 💬3
- [#61842](https://github.com/anomalyco/opencode/issues/61842) models: deepseek-v4.1-flash-free rejects image input though advertised as image-capable `pending close` `triaging` 💬3
- [#61799](https://github.com/anomalyco/opencode/issues/61799) tui: new-session tab vanishes from the horizontal tab strip while holding an unsent prompt 💬2
- [#61775](https://github.com/anomalyco/opencode/issues/61775) Session warming misses the cache it is meant to keep, and warms providers that don't need it `reproduced` 💬2
- [#61829](https://github.com/anomalyco/opencode/issues/61829) claude-agent: valid Claude Code login rejected on macOS desktop 💬2
- [#61902](https://github.com/anomalyco/opencode/issues/61902) Free usage limit not resetting in OpenCode VS Code `pending close` `triaging` 💬1
- [#61899](https://github.com/anomalyco/opencode/issues/61899) desktop: Ctrl+C in integrated terminal does not interrupt running process 💬1
- [#61897](https://github.com/anomalyco/opencode/issues/61897) [FEATURE]: Make the active session ID easy to copy in Desktop 💬1
- [#61894](https://github.com/anomalyco/opencode/issues/61894) [BUG]: V2 drops host-only MCP response metadata before tool hooks 💬1
- [#61893](https://github.com/anomalyco/opencode/issues/61893) Wrong version showed in web serve mode `triaging` 💬1
- [#61888](https://github.com/anomalyco/opencode/issues/61888) sending messages `triaging` 💬1
- [#61887](https://github.com/anomalyco/opencode/issues/61887) Web search fails when an MCP server sends a notification before the response `reproduced` 💬1
- [#61884](https://github.com/anomalyco/opencode/issues/61884) [FEATURE]: Expose durable execution continuity to server plugins 💬1
- [#61882](https://github.com/anomalyco/opencode/issues/61882) 怎么添加项目？ `triaging` 💬1
- [#61881](https://github.com/anomalyco/opencode/issues/61881) Free Usage Limit (One Message Sent HAPPENED Three TIMES In A Row) `pending close` `triaging` 💬1
- [#61877](https://github.com/anomalyco/opencode/issues/61877) [FEATURE]: TUI plugin API to read whether the session sidebar is visible 💬1
- [#61873](https://github.com/anomalyco/opencode/issues/61873) Go plan: gemini-4-argon returns 403 "Endpoint is unavailable" while other Go models return 200 `pending close` `triaging` 💬1
- [#61872](https://github.com/anomalyco/opencode/issues/61872) 1.19.3 When processing local documents, it often feeds back issues from historical files into the new version of the file `pending close` `triaging` 💬1
- [#61870](https://github.com/anomalyco/opencode/issues/61870) Feedback on Free Message Limit and Daily Lockout `pending close` `triaging` 💬1
- [#61867](https://github.com/anomalyco/opencode/issues/61867) mcp: remote SSE-only servers fail with HTTP 405 (V1 SSE fallback missing in V2) `pending close` `triaging` 💬1
- [#61858](https://github.com/anomalyco/opencode/issues/61858) desktop: terminal ignores theme alpha channel, always renders opaque 💬1
- [#61843](https://github.com/anomalyco/opencode/issues/61843) "tools" entry sent to model without tools capability `pending close` `triaging` 💬1
- [#61841](https://github.com/anomalyco/opencode/issues/61841) TUI crash: EISDIR: illegal operation on a directory, watch '\home\user\.orca-relay\opencode-overlays\d50fa1d1a99b45960b0360cd4bd58214' `pending close` `triaging` 💬1
- [#61838](https://github.com/anomalyco/opencode/issues/61838) shell: NUL in command hangs startup and bypasses timeout `pending close` `triaging` 💬1

#### 🔒 Closed Issues
- [#61553](https://github.com/anomalyco/opencode/issues/61553) Daily Limits
- [#61125](https://github.com/anomalyco/opencode/issues/61125) 2 dias de task, Stop (não Delete), workspace sumiu.
- [#61523](https://github.com/anomalyco/opencode/issues/61523) provider: openai-compatible stream rejects non-string delta.reasoning and aborts session
- [#61891](https://github.com/anomalyco/opencode/issues/61891) [Bug] Code Mode: 'DocumentationSearch' is callable directly but omitted from catalog and search() (undiscoverable by model)
- [#50119](https://github.com/anomalyco/opencode/issues/50119) fix(app): Review pane stays on loading for file tree and changes
- [#61542](https://github.com/anomalyco/opencode/issues/61542) 限额问题严重，求解除限额
- [#61539](https://github.com/anomalyco/opencode/issues/61539) 使用限制问题
- [#61535](https://github.com/anomalyco/opencode/issues/61535) Getting warning to update, but running latest version
- [#61123](https://github.com/anomalyco/opencode/issues/61123) [FEATURE]: how to know the default model setting ? /models
- [#61118](https://github.com/anomalyco/opencode/issues/61118) fix(core): avoid holding models.dev refresh lock across network timeout
- [#48250](https://github.com/anomalyco/opencode/issues/48250) OpenCode Beta: Could not edit project name
- [#61437](https://github.com/anomalyco/opencode/issues/61437) [Linux Desktop v2.2.5] Add Server does not persist external server connection
- [#61153](https://github.com/anomalyco/opencode/issues/61153) Eproto error
- [#61148](https://github.com/anomalyco/opencode/issues/61148) [Desktop] Chinese input (fcitx) not working on Kylin Linux, tray shows "No input window"
- [#61092](https://github.com/anomalyco/opencode/issues/61092) tui: Ctrl+V paste silently does nothing on GNOME Wayland + Nix
- [#61540](https://github.com/anomalyco/opencode/issues/61540) 做一个会话索引放到界面右侧
- [#61521](https://github.com/anomalyco/opencode/issues/61521) models: MiniMax-M3.1-Flash exposes zero reasoning variants, so thinking depth stays at max
- [#54132](https://github.com/anomalyco/opencode/issues/54132) File tree reuses stale children after directory recreation
- [#61838](https://github.com/anomalyco/opencode/issues/61838) shell: NUL in command hangs startup and bypasses timeout

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 29,015 · **Open issues:** 2,139 · **Last push:** <1h ago

On November 5, 2026, Qwen Code released v0.26.7, which introduced an operator-scoped model.catalogRefresh setting along with enhancements to control background catalog refreshes based on privacy settings. The nightly release v0.26.7-nightly.20261104.b9e20830f7 also saw improvements to integration tests and CI pipeline reliability. Among the merged pull requests, significant updates included performance enhancements for the managed agent concerning publication lanes and session locks, alongside fixes for various issues related to the agent's functionality. However, the main CI encountered failures in several tests, including the Managed Agent gate indicating ongoing stability challenges.

#### 🚀 New Releases
- [v0.26.7](https://github.com/QwenLM/qwen-code/releases/tag/v0.26.7) Release v0.26.7
- [v0.26.7-nightly.20261104.b9e20830f7](https://github.com/QwenLM/qwen-code/releases/tag/v0.26.7-nightly.20261104.b9e20830f7) Release v0.26.7-nightly.20261104.b9e20830f7

#### ✅ Merged PRs
- [#16304](https://github.com/QwenLM/qwen-code/pull/16304) feat(cli): run the Ink TUI's tool batches on the shared loop's batch
- [#16354](https://github.com/QwenLM/qwen-code/pull/16354) perf(managed-agent): take ordinary publication lanes off the placement guard
- [#16327](https://github.com/QwenLM/qwen-code/pull/16327) perf(managed-agent): narrow queue dispatch and workspace session creation locks
- [#16310](https://github.com/QwenLM/qwen-code/pull/16310) perf(core): defer workflow tool schemas by default
- [#16175](https://github.com/QwenLM/qwen-code/pull/16175) fix(managed-agent): find the Flyway scripts in the module jar the server ships them in
- [#16351](https://github.com/QwenLM/qwen-code/pull/16351) fix(ci): clear the pinned corepack cache before every install
- [#16335](https://github.com/QwenLM/qwen-code/pull/16335) perf(managed-agent): take ordinary tool publication and read leases off the tenant lock
- [#16110](https://github.com/QwenLM/qwen-code/pull/16110) fix(managed-agent): refuse every URL fetch refuses and say why a health probe failed
- [#16318](https://github.com/QwenLM/qwen-code/pull/16318) fix(managed-agent): harden capacity recovery and clean up Java conventions

#### 🐛 New Issues
- [#16265](https://github.com/QwenLM/qwen-code/issues/16265) Main CI failed: Managed Agent gate — WorkspaceMigrationMySqlIT.legacyCwdSettlementWaitingForMigrationSeesCommittedFence `status/needs-triage` `type/bug` 💬10
- [#16346](https://github.com/QwenLM/qwen-code/issues/16346) Main CI failed: Managed Agent gate — ClassSizeRatchetTest.productionClassesStayWithinTheirSizeRatchet `status/needs-triage` `type/bug` 💬6
- [#16322](https://github.com/QwenLM/qwen-code/issues/16322) Main CI failed: E2E Tests — cli/tool-hook-context.test.ts > … > ACP: delivers PreToolUse and PostToolUseFailure context on a returned err… (+1 more) `status/needs-triage` `type/bug` 💬6
- [#16353](https://github.com/QwenLM/qwen-code/issues/16353) Review request: PR #15904 (qqbot forwardBotMessages) is mergeable and needs two approvals `status/in-review` `priority/P3` `category/integration` 💬6
- [#16332](https://github.com/QwenLM/qwen-code/issues/16332) feat(providers): Oracle Cloud Infrastructure (OCI) Generative AI provider preset `priority/P3` `type/feature-request` `category/integration` `need-discussion` 💬4
- [#16321](https://github.com/QwenLM/qwen-code/issues/16321) ci(managed-agent): main violates its own class-size ratchet — JournalCommit 886 > 880 `priority/P2` `type/bug` `scope/testing` `managed-agent-server` 💬4
- [#16320](https://github.com/QwenLM/qwen-code/issues/16320) perf(managed-agent): control-plane SQL per resident Session grows with Session count and history length `priority/P2` `type/bug` `category/performance` `scope/session-management` 💬4
- [#16355](https://github.com/QwenLM/qwen-code/issues/16355) bug(web-shell): sidebar=false polls all trusted workspaces every 5s on an idle welcome view `priority/P1` `type/bug` `category/performance` `status/ready-for-agent` 💬3
- [#16313](https://github.com/QwenLM/qwen-code/issues/16313) bug(cli): approved project hooks never fire in the docker sandbox lane (E2E hook tests red on main since #14748) `priority/P1` `type/bug` `category/integration` `scope/sandbox` 💬3
- [#16295](https://github.com/QwenLM/qwen-code/issues/16295) follow-up: project hooks approval polish deferred from #14748 `priority/P2` `type/bug` `category/security` `scope/settings` 💬3
- [#16301](https://github.com/QwenLM/qwen-code/issues/16301) web-shell: tool calls of foreground subagents show as "unknown Tool" (0.26.6) `priority/P3` `type/bug` `category/ui` `scope/web-shell` 💬3
- [#16348](https://github.com/QwenLM/qwen-code/issues/16348) feat(web-shell): show sub-sessions (create_sub_session) in the "Plan & tasks" dialog — link to plan step and count in "Active agents" `priority/P2` `type/feature-request` `category/ui` `scope/session-management` 💬2
- [#16340](https://github.com/QwenLM/qwen-code/issues/16340) Docs: Qwen3.x on vLLM/SGLang under a custom --served-model-name loses thinking control and the context window `priority/P3` `type/documentation` `category/configuration` `scope/documentation` 💬2
- [#16343](https://github.com/QwenLM/qwen-code/issues/16343) bug(core): GPT-5 / o-series ids on OpenAI-compatible Chat Completions are sent max_tokens, which the endpoint rejects `priority/P2` `type/bug` `category/core` `scope/core` 💬2
- [#16339](https://github.com/QwenLM/qwen-code/issues/16339) Follow-up suggestions in Thai, Lao, Khmer and Myanmar are dropped as too_few_words `priority/P2` `type/bug` `category/core` `scope/content-generation` 💬2
- [#16319](https://github.com/QwenLM/qwen-code/issues/16319) ci: failure-report refinements — name only timed-out cancelled legs; skip cancelled PR runs at the trigger `priority/P2` `status/blocked` `type/bug` `category/development` 💬2
- [#16317](https://github.com/QwenLM/qwen-code/issues/16317) ci: release-sdk build-sdk lane rebuilds apt cold on mainland hosts — apply the shared apt-mirror probe `priority/P2` `type/bug` `category/development` `scope/ci-cd` 💬2
- [#16308](https://github.com/QwenLM/qwen-code/issues/16308) bug(core): Llama 3.2 Vision, Llama 4, LLaVA, Pixtral and Mistral Small 3.1/3.2 are treated as text-only `priority/P2` `type/bug` `category/core` `scope/content-generation` 💬2
- [#16307](https://github.com/QwenLM/qwen-code/issues/16307) bug(core): Qwen VL models are treated as text-only under their Ollama names `priority/P2` `type/bug` `category/core` `scope/core` 💬2
- [#16347](https://github.com/QwenLM/qwen-code/issues/16347) Main CI failed: Qwen Code CI — daemon/session/DaemonSessionProvider.test.tsx > … > reopens a rejected history page after authoritative rewin… `status/needs-triage` `type/bug`

#### 🔒 Closed Issues
- [#16322](https://github.com/QwenLM/qwen-code/issues/16322) Main CI failed: E2E Tests — cli/tool-hook-context.test.ts > … > ACP: delivers PreToolUse and PostToolUseFailure context on a returned err… (+1 more)
- [#15814](https://github.com/QwenLM/qwen-code/issues/15814) Main CI failed: E2E Tests — interactive/tui-foreground-shell.test.ts > cancels a focused shell through the global first-Ctrl+C guard befo…
- [#16321](https://github.com/QwenLM/qwen-code/issues/16321) ci(managed-agent): main violates its own class-size ratchet — JournalCommit 886 > 880
- [#16313](https://github.com/QwenLM/qwen-code/issues/16313) bug(cli): approved project hooks never fire in the docker sandbox lane (E2E hook tests red on main since #14748)
- [#15970](https://github.com/QwenLM/qwen-code/issues/15970) ci: qwen-autofix.yml is at 458KB of the 500KB silent-failure limit
- [#16046](https://github.com/QwenLM/qwen-code/issues/16046) Main CI failed: E2E Tests — interactive/tui-foreground-shell.test.ts > promotes a live foreground shell and exposes its real task lifetime
- [#16340](https://github.com/QwenLM/qwen-code/issues/16340) Docs: Qwen3.x on vLLM/SGLang under a custom --served-model-name loses thinking control and the context window
- [#16250](https://github.com/QwenLM/qwen-code/issues/16250) Main CI failed: E2E Tests — interactive/mid-turn-submit-interactive.test.ts > … > holds a slash command back mid-turn and runs it once th…

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

**Stars:** 393,925 · **Open issues:** 7,723 · **Last push:** <1h ago

On November 5, 2026, OpenClaw released version 2026.11.5-beta.1, which introduced significant enhancements including first-class Knowledge Scribes for knowledge capture and reusable workflows, as well as a PostgreSQL data plane to support state management and migration for existing deployments. Among the noteworthy merged pull requests, fixes were made for startup diagnostics in the gateway, updates to session handling on macOS, and improvements in managing long-running tasks. The team also addressed critical bug fixes such as resolving hangs in the Doctor status command and issues with default Doctor checks failing erroneously. A notable new issue reported was the functionality of the 2026.10.10 version refusing agent turns routed through a specific auth provider, raising concerns for those utilizing Bedrock instance roles.

#### 🚀 New Releases
- [v2026.11.5-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.11.5-beta.1) openclaw 2026.11.5-beta.1

#### ✅ Merged PRs
- [#193123](https://github.com/openclaw/openclaw/pull/193123) fix(oc-path): find rejects quoted filenames containing question marks
- [#128175](https://github.com/openclaw/openclaw/pull/128175) fix(macos): resolve typed gateway auth refs
- [#192386](https://github.com/openclaw/openclaw/pull/192386) fix(process): forward-port startup cleanup and shared lineage fixes
- [#193143](https://github.com/openclaw/openclaw/pull/193143) fix(exec-host): allow macOS exec requests up to 1 MiB
- [#187104](https://github.com/openclaw/openclaw/pull/187104) fix(update): stop Gateway respawn loops during Doctor maintenance
- [#193138](https://github.com/openclaw/openclaw/pull/193138) fix(macos): restore Gateway accent after clearing Talk profile color
- [#193152](https://github.com/openclaw/openclaw/pull/193152) chore(i18n): refresh native locales
- [#192383](https://github.com/openclaw/openclaw/pull/192383) fix(gateway): flush startup diagnostics before readiness
- [#193147](https://github.com/openclaw/openclaw/pull/193147) fix(runtime): expire discovery and room caches on elapsed time
- [#192379](https://github.com/openclaw/openclaw/pull/192379) fix(cron): run jobs added during startup without downtime deferral
- [#192380](https://github.com/openclaw/openclaw/pull/192380) fix(config): ignore empty plugin defaults when widening allowlists
- [#186508](https://github.com/openclaw/openclaw/pull/186508) fix(cli): load Unicode PowerShell completion files on Windows
- [#186117](https://github.com/openclaw/openclaw/pull/186117) fix(imessage): report Automation failures after Gateway updates
- [#192378](https://github.com/openclaw/openclaw/pull/192378) fix(storage): forward-port SQLite admission and lease cleanup fixes
- [#191830](https://github.com/openclaw/openclaw/pull/191830) fix(codex): forward-port 2026.10.10 thread ownership and cleanup fixes
- [#192606](https://github.com/openclaw/openclaw/pull/192606) fix(scripts): make the nitSweep summary validation error actionable
- [#188681](https://github.com/openclaw/openclaw/pull/188681) fix(exec-host): reject oversized macOS app requests before sending
- [#193135](https://github.com/openclaw/openclaw/pull/193135) chore(ui): refresh control ui locales
- [#185529](https://github.com/openclaw/openclaw/pull/185529) fix(macos): chat accent updates after Control UI changes
- [#193100](https://github.com/openclaw/openclaw/pull/193100) fix(plugins): invalid feature ids leave directories and block retries
- [#187914](https://github.com/openclaw/openclaw/pull/187914) docs(macos): distinguish automatic first run from manual setup
- [#192385](https://github.com/openclaw/openclaw/pull/192385) fix(matrix): forward-port 2026.10.10 startup and shutdown fixes
- [#188635](https://github.com/openclaw/openclaw/pull/188635) fix(macos): session previews stay loading or stale after reopening the menu
- [#185437](https://github.com/openclaw/openclaw/pull/185437) fix(macos): Mac tab reloads forever when its page keeps crashing
- [#193101](https://github.com/openclaw/openclaw/pull/193101) fix: center pinned agents in Team sidebar
- [#193118](https://github.com/openclaw/openclaw/pull/193118) fix(templates): fill loading view and reduce catalog load latency
- [#188202](https://github.com/openclaw/openclaw/pull/188202) fix(macos): exec host returns empty output for invalid UTF-8
- [#193129](https://github.com/openclaw/openclaw/pull/193129) fix(ui): Skill Workshop offers an enable button that cannot work
- [#191974](https://github.com/openclaw/openclaw/pull/191974) fix(gateway): label root config issues in reload logs
- [#185024](https://github.com/openclaw/openclaw/pull/185024) fix(macos): Launch at Login reports success after launchctl fails
- [#192589](https://github.com/openclaw/openclaw/pull/192589) fix(release): retry EPIPE readbacks and reject gated ClawHub children on cleanup
- [#192590](https://github.com/openclaw/openclaw/pull/192590) fix(release): print core npm resume and report required candidate flags together
- [#192473](https://github.com/openclaw/openclaw/pull/192473) fix: show Gateway names for linked Slack mentions in Control UI
- [#192387](https://github.com/openclaw/openclaw/pull/192387) test(gateway): expect stopped Goal returns to remain paused
- [#191918](https://github.com/openclaw/openclaw/pull/191918) fix(codex): clarify executable launch failures
- [#193095](https://github.com/openclaw/openclaw/pull/193095) docs: minimize downtime between full release validation cycles
- [#193097](https://github.com/openclaw/openclaw/pull/193097) test(ui): restore main lint and UI tests
- [#193084](https://github.com/openclaw/openclaw/pull/193084) fix(test): restore OpenClawKit regression compilation
- [#193040](https://github.com/openclaw/openclaw/pull/193040) fix(ci): keep legacy migration fixtures independent of Workshop
- [#193043](https://github.com/openclaw/openclaw/pull/193043) fix(sandbox): reuse restored workspace input admission
- [#192607](https://github.com/openclaw/openclaw/pull/192607) feat(release): add read-only release:watch for any publish parent
- [#189734](https://github.com/openclaw/openclaw/pull/189734) fix(macos): node commands run defaults when params are malformed
- [#185654](https://github.com/openclaw/openclaw/pull/185654) fix: resolve native Windows Git plugin paths
- [#185435](https://github.com/openclaw/openclaw/pull/185435) fix(macos): first dashboard open is slow in remote mode
- [#193052](https://github.com/openclaw/openclaw/pull/193052) fix(whatsapp): retry DMs while LID identity is unavailable
- [#189901](https://github.com/openclaw/openclaw/pull/189901) fix(auth): inline API-key failures break on PostgreSQL agent stores
- [#186259](https://github.com/openclaw/openclaw/pull/186259) fix(macos): New Thread exhausts memory during session creation
- [#188683](https://github.com/openclaw/openclaw/pull/188683) fix(macos): avoid startup crashes from invalid custom Gateway hosts
- [#188646](https://github.com/openclaw/openclaw/pull/188646) fix(macos): preserve shortcuts pressed while the dashboard opens
- [#193088](https://github.com/openclaw/openclaw/pull/193088) chore(ui): refresh control ui locales
- [#193067](https://github.com/openclaw/openclaw/pull/193067) refactor(i18n): remove translation glossary enforcement
- [#193081](https://github.com/openclaw/openclaw/pull/193081) chore(i18n): remove retired glossary hashes from native artifacts
- [#193021](https://github.com/openclaw/openclaw/pull/193021) fix(cli): duplicate compaction notices when Claude CLI auto-compacts
- [#192673](https://github.com/openclaw/openclaw/pull/192673) fix(plugins): release failed loads when captures close
- [#193076](https://github.com/openclaw/openclaw/pull/193076) improve(ci): reuse Watch RTC libraries across iOS project edits
- [#193061](https://github.com/openclaw/openclaw/pull/193061) test(qa): remove repeated Docker upgrade assertions
- [#186073](https://github.com/openclaw/openclaw/pull/186073) fix(ui): hide redundant cancellation notices after Stop
- [#193037](https://github.com/openclaw/openclaw/pull/193037) fix(update): report a missing npm version as an unpublished target
- [#192096](https://github.com/openclaw/openclaw/pull/192096) fix(ui): keep terminal tab navigation out of the PTY
- [#193041](https://github.com/openclaw/openclaw/pull/193041) fix(docker): image build fails at production-deps on builders that scope ARGs per stage
- [#193063](https://github.com/openclaw/openclaw/pull/193063) fix(cron): stop deferred jobs retrying every two seconds
- [#193017](https://github.com/openclaw/openclaw/pull/193017) fix(qa): matrix configs require an unrelated Workshop migration
- [#193014](https://github.com/openclaw/openclaw/pull/193014) fix(doctor): keep private snapshots forkable for root installs
- [#193071](https://github.com/openclaw/openclaw/pull/193071) fix(release): read waiver aggregate logs with escape sequences allowed
- [#193069](https://github.com/openclaw/openclaw/pull/193069) fix: MCP apps stay in a thin strip when expanded
- [#192361](https://github.com/openclaw/openclaw/pull/192361) fix(ui): reloaded Claude CLI chats show OpenClaw tools as raw MCP bridge names
- [#192359](https://github.com/openclaw/openclaw/pull/192359) fix(control-ui): prioritize current-chat speakers in mentions
- [#192787](https://github.com/openclaw/openclaw/pull/192787) fix(ui): make mobile sidebar swipes work across chat content
- [#192377](https://github.com/openclaw/openclaw/pull/192377) fix(ui): simplify Inbox dismiss hover feedback
- [#193075](https://github.com/openclaw/openclaw/pull/193075) chore(ui): refresh control ui locales
- [#193065](https://github.com/openclaw/openclaw/pull/193065) chore(i18n): refresh native locales
- [#192885](https://github.com/openclaw/openclaw/pull/192885) fix(ui): align unavailable desktop notice expectation
- [#192691](https://github.com/openclaw/openclaw/pull/192691) fix(cron): scheduled jobs time out immediately when the clock jumps during a lane wait
- [#192858](https://github.com/openclaw/openclaw/pull/192858) fix(plugins): disable installs during updates
- [#190453](https://github.com/openclaw/openclaw/pull/190453) fix(telegram): preserve Markdown paragraph gaps in rich messages
- [#193059](https://github.com/openclaw/openclaw/pull/193059) fix(ci): move reusable release controls to hosted runners
- [#193062](https://github.com/openclaw/openclaw/pull/193062) fix(ui): align child session creation copy
- [#186057](https://github.com/openclaw/openclaw/pull/186057) fix: restrict shared Actions widgets to approved queries
- [#189467](https://github.com/openclaw/openclaw/pull/189467) fix(apple): new native chats nest under the previously selected conversation
- [#192997](https://github.com/openclaw/openclaw/pull/192997) fix(test): sandbox recreation checks fail after Podman discovery caching
- [#192752](https://github.com/openclaw/openclaw/pull/192752) fix(ui): preserve table cell boundaries when copying
- [#193056](https://github.com/openclaw/openclaw/pull/193056) fix(worktrees): attribute cold template rebuilds
- [#193042](https://github.com/openclaw/openclaw/pull/193042) refactor(test): remove unused long-turn response tracking
- [#193020](https://github.com/openclaw/openclaw/pull/193020) refactor(qa-lab): separate runtime parity data contracts
- [#193049](https://github.com/openclaw/openclaw/pull/193049) fix(state): agents refused with database repair advice when a config reload lands during startup
- [#193055](https://github.com/openclaw/openclaw/pull/193055) fix(ci): isolate plugin ID recovery fixture from Workshop migration
- [#192859](https://github.com/openclaw/openclaw/pull/192859) feat(openclaw-id): allow 256 members and 10 browsers per member on a claw
- [#158051](https://github.com/openclaw/openclaw/pull/158051) fix(ios): open embedded Dashboard after Cloudflare Access sign-in
- [#193046](https://github.com/openclaw/openclaw/pull/193046) fix(ci): isolate plugin CLI validation fixture from Workshop migration
- [#192810](https://github.com/openclaw/openclaw/pull/192810) fix(ui): show nested subagents beneath their parent in the tab
- [#192783](https://github.com/openclaw/openclaw/pull/192783) fix(ui): keep tool narration shimmer continuous during text changes
- [#192996](https://github.com/openclaw/openclaw/pull/192996) fix(deps): adopt fs-safe 0.27.1 for responsive filesystem operations
- [#192696](https://github.com/openclaw/openclaw/pull/192696) fix(ui): new session source recents omit folders of recent host sessions
- [#192992](https://github.com/openclaw/openclaw/pull/192992) feat(ci): add optional Jev test ranking adapter
- [#193030](https://github.com/openclaw/openclaw/pull/193030) chore(ci): move short release controls to hosted runners
- [#192995](https://github.com/openclaw/openclaw/pull/192995) fix(oc-path): frontmatter find ignores trailing selectors
- [#193034](https://github.com/openclaw/openclaw/pull/193034) chore(ios): trace Mermaid JavaScript and bridge timing
- [#193031](https://github.com/openclaw/openclaw/pull/193031) fix: wait for cron readiness in catalog recovery E2E
- [#192694](https://github.com/openclaw/openclaw/pull/192694) fix(macos): retain queued input across native reconnect
- [#192801](https://github.com/openclaw/openclaw/pull/192801) fix: Quick Chat hides the connection state when no Gateway is configured
- [#193008](https://github.com/openclaw/openclaw/pull/193008) fix(test): wait for catalog rendering before absence checks
- [#193026](https://github.com/openclaw/openclaw/pull/193026) fix: restore German cron filter E2E expectations
- [#192647](https://github.com/openclaw/openclaw/pull/192647) fix(auth): show sign-in guidance in failed chat turns
- [#193018](https://github.com/openclaw/openclaw/pull/193018) chore(ios): retain Mermaid screenshot failure diagnostics
- [#192847](https://github.com/openclaw/openclaw/pull/192847) fix: stop older Telegram photos replaying in Codex image requests
- [#191872](https://github.com/openclaw/openclaw/pull/191872) fix(ios): chat images open zoomed into the top-left corner with a 22pt close button
- [#193009](https://github.com/openclaw/openclaw/pull/193009) fix(ci): validate ARM pull requests on hosted runners
- [#192764](https://github.com/openclaw/openclaw/pull/192764) fix(clawrouter): prevent forced recommendation fields in document sends
- [#192763](https://github.com/openclaw/openclaw/pull/192763) fix(message): preserve media captions alongside ClawHub cards
- [#193011](https://github.com/openclaw/openclaw/pull/193011) fix(ci): keep Doctor fixtures independent of Workshop migration
- [#193000](https://github.com/openclaw/openclaw/pull/193000) fix(models): models accounts prints a raw "connect ECONNREFUSED" when the Gateway is not running
- [#193010](https://github.com/openclaw/openclaw/pull/193010) improve(k8s): limit remount permission changes and document storage adoption
- [#191840](https://github.com/openclaw/openclaw/pull/191840) fix(bedrock): discovered models fail with on-demand throughput errors when selected
- [#192843](https://github.com/openclaw/openclaw/pull/192843) ci: qualify one bounded Node shard on Boat
- [#192931](https://github.com/openclaw/openclaw/pull/192931) fix(ui): Skill Workshop off state hides errors and loses focus
- [#192945](https://github.com/openclaw/openclaw/pull/192945) refactor(agents): separate Tool Search protocol contracts
- [#193005](https://github.com/openclaw/openclaw/pull/193005) fix(cli): show existing worktree and Gateway input errors
- [#192998](https://github.com/openclaw/openclaw/pull/192998) fix(ci): keep Workshop publish timeout private
- [#192722](https://github.com/openclaw/openclaw/pull/192722) fix(ui): recover stale private-activity sidebar filters
- [#192939](https://github.com/openclaw/openclaw/pull/192939) fix(ci): default cross-OS Windows checks to hosted runners
- [#192897](https://github.com/openclaw/openclaw/pull/192897) fix(net): release completed request authority contexts
- [#192984](https://github.com/openclaw/openclaw/pull/192984) fix(update): stop warning when a live Gateway commits during original capture
- [#193002](https://github.com/openclaw/openclaw/pull/193002) chore(ui): refresh control ui locales
- [#192993](https://github.com/openclaw/openclaw/pull/192993) test(ui): match guest starter prompt punctuation
- [#192982](https://github.com/openclaw/openclaw/pull/192982) fix(ci): record declared Vitest fixture dependencies
- [#192965](https://github.com/openclaw/openclaw/pull/192965) fix(skills): bundled plugin skills are skipped when the state dir path has a symlinked ancestor
- [#192986](https://github.com/openclaw/openclaw/pull/192986) fix(test): supply kitchen sink fixture package spec
- [#192923](https://github.com/openclaw/openclaw/pull/192923) chore(ui): refresh control ui locales
- [#192953](https://github.com/openclaw/openclaw/pull/192953) fix(ci): run OpenGrep on hosted Ubuntu
- [#192983](https://github.com/openclaw/openclaw/pull/192983) test(ui): await tooltip dismissal before copy feedback checks
- [#192977](https://github.com/openclaw/openclaw/pull/192977) fix(ci): remove unused setup fixture symbols
- [#192973](https://github.com/openclaw/openclaw/pull/192973) fix(ui): handle cancelled toast animations in browser tests
- [#192854](https://github.com/openclaw/openclaw/pull/192854) improve(ui): avoid history reads for summary-only updates
- [#192958](https://github.com/openclaw/openclaw/pull/192958) fix(bedrock): omit unsupported Grok 4.6 temperature
- [#192853](https://github.com/openclaw/openclaw/pull/192853) fix(ui): clarify automation conversation transcripts
- [#192721](https://github.com/openclaw/openclaw/pull/192721) feat: create empty nested sessions from the sidebar
- [#192964](https://github.com/openclaw/openclaw/pull/192964) fix(ui): keep locale tests stable as translations grow
- [#192963](https://github.com/openclaw/openclaw/pull/192963) fix(sandbox): stop cold builds from blocking unrelated worktrees
- [#192951](https://github.com/openclaw/openclaw/pull/192951) test(codex): remove obsolete mirror redaction setup
- [#192908](https://github.com/openclaw/openclaw/pull/192908) fix(test): align Control UI fixtures with current messages
- [#192968](https://github.com/openclaw/openclaw/pull/192968) fix(ci): prevent hosted row assertion conflicts
- [#192967](https://github.com/openclaw/openclaw/pull/192967) feat(ci): evaluate recorded adaptive test decisions
- [#192934](https://github.com/openclaw/openclaw/pull/192934) fix(templates): empty agent overrides silently select a default
- [#192966](https://github.com/openclaw/openclaw/pull/192966) fix(ui): refresh copy and view readiness in tests
- [#192947](https://github.com/openclaw/openclaw/pull/192947) improve(ci): avoid duplicate security harness checkout
- [#192909](https://github.com/openclaw/openclaw/pull/192909) fix(worktrees): stop idle cleanup from overwhelming shared storage
- [#192914](https://github.com/openclaw/openclaw/pull/192914) test(ui): align session and Gateway browser expectations
- [#192911](https://github.com/openclaw/openclaw/pull/192911) fix(test): wait for lazy sidebar pages before pinning
- [#192910](https://github.com/openclaw/openclaw/pull/192910) fix(test): isolate agent selector locale updates from translation coverage
- [#192956](https://github.com/openclaw/openclaw/pull/192956) fix(ci): keep Skill Workshop plugin ID private
- [#192943](https://github.com/openclaw/openclaw/pull/192943) fix(plugins): plugins reload prints only "The CLI command failed." when the Gateway is not running
- [#192586](https://github.com/openclaw/openclaw/pull/192586) fix(release): close FRV, fixture, and cold admission gaps
- [#192922](https://github.com/openclaw/openclaw/pull/192922) fix(tooling): respect required check workflow events
- [#192913](https://github.com/openclaw/openclaw/pull/192913) fix(ui): align provider account e2e with current copy
- [#192944](https://github.com/openclaw/openclaw/pull/192944) fix: bound memory growth across long conversations and workspaces
- [#192907](https://github.com/openclaw/openclaw/pull/192907) fix(ui): align e2e expectations with current presentation
- [#192912](https://github.com/openclaw/openclaw/pull/192912) fix(test): scope dashboard loading assertions to the gallery
- [#192933](https://github.com/openclaw/openclaw/pull/192933) fix(ui): remove Mermaid preview hover tooltip
- [#192906](https://github.com/openclaw/openclaw/pull/192906) fix(agents): wait for a peer OAuth refresh before failing request auth
- [#192919](https://github.com/openclaw/openclaw/pull/192919) fix(update): show the first failure behind an unfinished recovery refusal
- [#192942](https://github.com/openclaw/openclaw/pull/192942) fix(update): keep a failed post-plugin Doctor in the update summary
- [#189958](https://github.com/openclaw/openclaw/pull/189958) fix(update): PostgreSQL rollback retries fail after a recoverable refusal
- [#192927](https://github.com/openclaw/openclaw/pull/192927) fix(bedrock): use known Grok 4.6 context window
- [#192928](https://github.com/openclaw/openclaw/pull/192928) improve(ios): share package downloads with screenshot CI

#### 🐛 New Issues
- [#192632](https://github.com/openclaw/openclaw/issues/192632) [Feature]: Claude web search provider (Anthropic server-side web_search through a separate Messages call) `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬9
- [#192524](https://github.com/openclaw/openclaw/issues/192524) [Bug]: 2026.10.10 refuses every scheduled agentTurn routed through an auth: "aws-sdk" provider (Bedrock instance role) — no model@profile or Doctor path to bind it `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬6
- [#193023](https://github.com/openclaw/openclaw/issues/193023) [Bug]: update reports a missing npm version as a registry connectivity failure `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬4
- [#193039](https://github.com/openclaw/openclaw/issues/193039) [Bug]: Image build fails at production-deps on buildah 1.39.7 (parent-stage ARG inheritance not applied) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:linked-pr-open` 💬4
- [#192723](https://github.com/openclaw/openclaw/issues/192723) [Bug]: Media captions are overwritten when sends also include ClawHub cards `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬4
- [#193013](https://github.com/openclaw/openclaw/issues/193013) doctor / status --deep hang indefinitely: read-only SQLite snapshot workers are never reaped, which also breaks the upstream process census `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬3
- [#192755](https://github.com/openclaw/openclaw/issues/192755) [Bug]: default Doctor fails retained-snapshot-changed while --all passes all 73 checks on 2026.11.5-beta.1 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬3
- [#192727](https://github.com/openclaw/openclaw/issues/192727) Update failure: candidate-state-snapshot (2026.9.7) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬3
- [#192619](https://github.com/openclaw/openclaw/issues/192619) Standing intents: QA channel conversation scope differs between creation and prompt matching `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#192894](https://github.com/openclaw/openclaw/issues/192894) plugin-sdk: let a provider's `createStreamFn` dispatch through another provider's resolved model and stream `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#193133](https://github.com/openclaw/openclaw/issues/193133) [Feature]: Public session lifecycle capability for channel plugins `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#193094](https://github.com/openclaw/openclaw/issues/193094) [Bug]: Managed update hangs in validating for 57 min (3414 s vs 1800 s step budget) and is then SIGKILLed `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `P0` `issue-rating: 🦪 silver shellfish` 💬2
- [#192642](https://github.com/openclaw/openclaw/issues/192642) [Bug]: macOS embedded chat loses offline queued input after authenticated reconnect `bug` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬2
- [#193028](https://github.com/openclaw/openclaw/issues/193028) [Bug]: 2026.10.10 gateway killed by host OOM (~5.5 GiB RSS) after slow session reads `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬2
- [#193004](https://github.com/openclaw/openclaw/issues/193004) Plugin SDK: expose call-bound live GitHub identity verification without credentials `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#192988](https://github.com/openclaw/openclaw/issues/192988) Goals can lose continuation custody across native harness handoffs and restart `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#192886](https://github.com/openclaw/openclaw/issues/192886) Proposal: durable recovery for stale Codex thread claims `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#192649](https://github.com/openclaw/openclaw/issues/192649) Fast mode can't be enabled for an Anthropic provider behind a trusted proxy (custom baseUrl); add compat.supportsFastMode opt-in `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬2
- [#192790](https://github.com/openclaw/openclaw/issues/192790) [Bug]: Idle heartbeat never skips because the model's own no_change note fills the monitor scratch `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#192856](https://github.com/openclaw/openclaw/issues/192856) Provider stream dispatch needs a trusted per-turn context (run / channel / sender), not just agentId `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬2
- [#192882](https://github.com/openclaw/openclaw/issues/192882) update repair / doctor --fix permanently refused on macOS 15.x: new service-membership check requires ps "resource coalition" which old macOS does not support `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#192860](https://github.com/openclaw/openclaw/issues/192860) Update failure: candidate-state-snapshot (2026.10.10-beta.5) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#192807](https://github.com/openclaw/openclaw/issues/192807) [Feature]: Local-user sandbox backend, now published as a plugin: consider adopting it as an official plugin `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬2
- [#192772](https://github.com/openclaw/openclaw/issues/192772) [Feature]: The Zen of OpenClaw (The Lobster Sutra) — `openclaw evo` easter egg `P3` 💬2
- [#192650](https://github.com/openclaw/openclaw/issues/192650) Update failure: clean-check (2026.10.10) `P2` `impact:ux-friction` 💬2
- [#192678](https://github.com/openclaw/openclaw/issues/192678) Update finalization (memory-core embedding setup) copies agent DB into $TMPDIR without capacity check; ENOSPC after schema migration strands the gateway (state-migrated-no-rollback) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#192626](https://github.com/openclaw/openclaw/issues/192626) Update failure: clean-check (2026.10.9) `P2` `impact:ux-friction` 💬2
- [#192688](https://github.com/openclaw/openclaw/issues/192688) [Bug]: Empty final in a group turn posts "OpenClaw couldn't finish this request" to the group instead of staying silent `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#192629](https://github.com/openclaw/openclaw/issues/192629) Windows: memory-core fs watcher derives its observation boundary to the workspace parent, causing periodic single-core saturation (realpath 61.8%) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬2
- [#192522](https://github.com/openclaw/openclaw/issues/192522) [Bug]: /status sent during an agent turn kills the turn with SqliteTranscriptMutationConflictError (request dropped) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#192523](https://github.com/openclaw/openclaw/issues/192523) [Feature]: Show Z.AI (GLM) prepaid balance and Coding Plan quota in usage surfaces `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#192890](https://github.com/openclaw/openclaw/issues/192890) [Feature]: iOS: browse and preview files shared in a conversation `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#193150](https://github.com/openclaw/openclaw/issues/193150) memory-core: Dreaming Promotion cron emits no run progress, so stuck-session recovery flags and "aborts" it every night in multi-agent setups (abort doesn't actually cancel it) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#193149](https://github.com/openclaw/openclaw/issues/193149) Skills "Save key" (`skills.update`) replaces a SecretRef `apiKey` with a plaintext string in openclaw.json `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#193140](https://github.com/openclaw/openclaw/issues/193140) [Bug]: Feishu inline quotes in ordinary groups force topic replies `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#193131](https://github.com/openclaw/openclaw/issues/193131) [Bug]: Env var silently overrides a store SecretRef for provider apiKey, and secrets audit reports shadowed=0 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#193126](https://github.com/openclaw/openclaw/issues/193126) IMAP sender gate rejects valid comments around a trusted authserv-id `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#193120](https://github.com/openclaw/openclaw/issues/193120) [2026.10.10] doctor --fix hangs indefinitely after "Doctor complete" — maintenance release() never settles `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬1
- [#193115](https://github.com/openclaw/openclaw/issues/193115) [Bug]: Configurator rejects implicit Codex owner after successful inference verification `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#193113](https://github.com/openclaw/openclaw/issues/193113) [Feature]: Open the matching chat when tapping an iOS push notification `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#193111](https://github.com/openclaw/openclaw/issues/193111) Context breakdown shows "—" for Codex sessions: AGENTS.md is never confirmed and Codex's base instructions are not counted `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#193108](https://github.com/openclaw/openclaw/issues/193108) Git dev-channel update skips on release-tag clones with tag-only fetch mappings `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#192609](https://github.com/openclaw/openclaw/issues/192609) Reduce duplicated benchmark calculations and isolate runtime decision boundaries `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#193087](https://github.com/openclaw/openclaw/issues/193087) Evidence request: @openclaw/discord@2026.10.1 publication manifest and bundled-code notices `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#193086](https://github.com/openclaw/openclaw/issues/193086) [Bug]: GET /a2a/v1/agent-card returns the Control-UI SPA with 200 instead of a JSON 404 `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#193053](https://github.com/openclaw/openclaw/issues/193053) [Feature]: Clarify automatic learning and one-time history reviews in Skill Workshop `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#193054](https://github.com/openclaw/openclaw/issues/193054) Knowledge search should follow superseded_by to the current record `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#193027](https://github.com/openclaw/openclaw/issues/193027) Dashboard widgets show only “Disconnected” when the sandbox origin is unreachable `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#192780](https://github.com/openclaw/openclaw/issues/192780) [Bug]: macOS Quick Chat hides an unconfigured Gateway behind a model-settings error `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#192644](https://github.com/openclaw/openclaw/issues/192644) [Bug]: Provider sign-in guidance becomes a generic terminal chat failure `bug` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#193025](https://github.com/openclaw/openclaw/issues/193025) [Bug]: recovery cleanup blocks historical DB originals on stale destination inode; no supported re-verification `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#193019](https://github.com/openclaw/openclaw/issues/193019) [Bug]: Failed ingress release after abort keeps a live owner and wedges its lane `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#193001](https://github.com/openclaw/openclaw/issues/193001) Update candidate Gateway startup fails; secret diagnostics truncated `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#192990](https://github.com/openclaw/openclaw/issues/192990) Codex harness exposes only computer V1 actions; paired Windows node V2 actions (list_windows, bring_to_front, set_value) never reach the model `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#192991](https://github.com/openclaw/openclaw/issues/192991) [Bug]: backup create fails on large state dirs: SQLite header probe runs all paths in one spawnSync with a hard 10 s timeout `P2` `impact:other` 💬1
- [#192987](https://github.com/openclaw/openclaw/issues/192987) [Feature]: Expose read-only command-surface diagnostics for a connected node `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#192981](https://github.com/openclaw/openclaw/issues/192981) Empty (0-byte) lock file is never considered stale: WhatsApp channel stays down with `file_lock_timeout` after a hard reset `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#192978](https://github.com/openclaw/openclaw/issues/192978) [Bug]: DeepInfra Nemotron 3.5 Super VL omits the explicit thinking-off selector `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#192957](https://github.com/openclaw/openclaw/issues/192957) [Bug]: Bedrock Converse sends unsupported temperature for Grok 4.6 inference profiles `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#192972](https://github.com/openclaw/openclaw/issues/192972) [Feature]: Allow owner-authorized Telegram message deletion in groups/topics from a private DM `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#192935](https://github.com/openclaw/openclaw/issues/192935) CI: avoid downloading the security harness twice for the same commit `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#192640](https://github.com/openclaw/openclaw/issues/192640) [Feature Request]: Submit MCP Relay to the official ChatGPT Plugin Directory (including Plus access) `P3` 💬1
- [#192959](https://github.com/openclaw/openclaw/issues/192959) [Bug]: Gateway refuses to start after pod restart on Kubernetes: client credential directory rejected after fsGroup remount `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#192926](https://github.com/openclaw/openclaw/issues/192926) [Bug]: Bedrock discovery assigns Grok 4.6 a 32K context window instead of 500K `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#192920](https://github.com/openclaw/openclaw/issues/192920) iOS screenshot capture cannot reuse regular CI package downloads `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#192941](https://github.com/openclaw/openclaw/issues/192941) [Bug]: Windows 10.10 main-thread stall sample includes session source path identity checks `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬1
- [#192904](https://github.com/openclaw/openclaw/issues/192904) Heartbeat turn preempted by a visible turn loses the system events it already drained (Slack button click lost) `P2` `impact:message-loss` 💬1
- [#192902](https://github.com/openclaw/openclaw/issues/192902) [Feature]: Realtime transcription: allow a provider to end a dictation session gracefully (no forced onError, no lingering error banner) `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` 💬1
- [#192900](https://github.com/openclaw/openclaw/issues/192900) Release regression: #174243 is merged on main but absent from stable through 2026.10.10, blocking Telegram migrations `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#192895](https://github.com/openclaw/openclaw/issues/192895) [Feature]: Substitute protected-secret sentinels inside WebSocket messages in the egress proxy `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#192891](https://github.com/openclaw/openclaw/issues/192891) Add end-of-reply chips for summarize and close `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#192888](https://github.com/openclaw/openclaw/issues/192888) [Feature]: Scoped RBAC for multiplayer contributor access (discussion RFC) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#192889](https://github.com/openclaw/openclaw/issues/192889) Composer ghost text cannot be accepted with Right arrow or a click at the end `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🦪 silver shellfish` 💬1
- [#192878](https://github.com/openclaw/openclaw/issues/192878) [Bug]: stream schedules trim meaningful regex whitespace, causing false matches and rejecting valid patterns `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#192873](https://github.com/openclaw/openclaw/issues/192873) iOS Talk start uses stale talk.config (realtime route, provider and voice from the previous fetch) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#192869](https://github.com/openclaw/openclaw/issues/192869) feat: Talk settings should show which login and billing each OpenAI transport uses `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#192866](https://github.com/openclaw/openclaw/issues/192866) Simple completions (utility-model helpers) ignore `authHeader: true`, so Bearer-only proxies return 401 `bug` `no-stale` `bug:behavior` `P2` 💬1
- [#192864](https://github.com/openclaw/openclaw/issues/192864) [Bug]: Detailed Slack progress cards interpret literal filename characters as formatting `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#192851](https://github.com/openclaw/openclaw/issues/192851) [Bug]: 2026.10.10 macOS app re-signs codex-code-mode-host without JIT entitlements, so every Codex tool call fails (V8 "Failed to reserve virtual memory for CodeRange") `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#192819](https://github.com/openclaw/openclaw/issues/192819) [Feature]: Android: unify new chat button styling with web highlighted plus `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#192677](https://github.com/openclaw/openclaw/issues/192677) improve(ci): reduce repeated worker import scan work `P3` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#192835](https://github.com/openclaw/openclaw/issues/192835) [Bug]: OpenRouter routing variants lose base catalog capabilities `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#192567](https://github.com/openclaw/openclaw/issues/192567) test(tlon): transport tests leak socket writes after close (unhandled ECONNRESET) `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#192814](https://github.com/openclaw/openclaw/issues/192814) [Bug]: Windows stale Gateway cleanup can target a reused listener PID `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#192565](https://github.com/openclaw/openclaw/issues/192565) release: Windows Gateway notification fails on npm replication lag (readback 404) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#192795](https://github.com/openclaw/openclaw/issues/192795) Bug: cron add strips whitespace from stored agent messages `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#192788](https://github.com/openclaw/openclaw/issues/192788) [Bug]: Manual compaction ignores OpenRouter summary-only reasoning progress `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#192803](https://github.com/openclaw/openclaw/issues/192803) backup create walks and archives the regenerable Node compile cache (tmp/node-compile-cache) — add it to the backup volatile-directory rules 💬1
- [#192785](https://github.com/openclaw/openclaw/issues/192785) [Bug]: "reaps terminal children" test fails on macOS when its writer leaves the process group `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#192775](https://github.com/openclaw/openclaw/issues/192775) [Feature]: Add Opper as a bundled provider plugin `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#192762](https://github.com/openclaw/openclaw/issues/192762) [Bug]: Memory reindex exceeds worker input limit because session.current sends full replacement including embeddings `P2` `impact:session-state` 💬1
- [#192759](https://github.com/openclaw/openclaw/issues/192759) [Bug]: 2026.11.5-beta.1 admits a left-behind Codex plugin, then every Codex turn fails (missing HEARTBEAT_RESPONSE_TOOL_NAME export) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#192753](https://github.com/openclaw/openclaw/issues/192753) [Docs Bug]: Localized /plugins/hooks/* pages return 404 across all non-English locales `P2` `clawsweeper:current-main-repro` `issue-rating: 🦀 challenger crab` `impact:ux-friction` 💬1
- [#192756](https://github.com/openclaw/openclaw/issues/192756) [Bug]: memory.status reports embeddings pending after successful probe and complete fresh-note semantic search `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#192717](https://github.com/openclaw/openclaw/issues/192717) [Bug]: audio and video inference can read the wrong file through a symlink parent `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#192749](https://github.com/openclaw/openclaw/issues/192749) Upgrade 2026.5.27 → 2026.10.10 fails mid-migration chain; doctor cannot create a recovery snapshot before mutating production state `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#192744](https://github.com/openclaw/openclaw/issues/192744) `gateway run` reports "Missing config" instead of the invalid-flag error `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#192736](https://github.com/openclaw/openclaw/issues/192736) Native clients receive inline base64 agent avatars in agents.list, stalling the iOS agent picker on slow connections `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#192734](https://github.com/openclaw/openclaw/issues/192734) Backport request: extended-stable 2026.9.36 and latest 2026.10.10 lack #186085, so Claude CLI token frames are charged in full `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#192735](https://github.com/openclaw/openclaw/issues/192735) claude-cli: same-model retry after a first-turn failure starts a new Claude session and loses the child's context `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#192725](https://github.com/openclaw/openclaw/issues/192725) [Bug]: Codex account/read timeout fails Feishu turn before reply with generic request-timeout warning (2026.10.10) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` 💬1
- [#192724](https://github.com/openclaw/openclaw/issues/192724) Windows: EPERM creating junction during plugin capture prepare (2026.10.9) `P2` `impact:other` 💬1
- [#192712](https://github.com/openclaw/openclaw/issues/192712) [Feature]: Explain the effective tool set for a session from the CLI (agents tools) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#192706](https://github.com/openclaw/openclaw/issues/192706) [Bug]: Matrix credentials store splits writes and reads across state dirs when a runtime resolver ignores env overrides `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#192557](https://github.com/openclaw/openclaw/issues/192557) [Bug]: Empty tool result is sent as "(no output)" live but replayed as "[empty content omitted]", so history changes between turns `bug` `no-stale` `bug:behavior` `P2` 💬1
- [#192560](https://github.com/openclaw/openclaw/issues/192560) Improve diagnostics for stale session-target preparation after interruption `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#192687](https://github.com/openclaw/openclaw/issues/192687) Docs feedback: /gateway/remote `P3` `impact:ux-friction` 💬1
- [#192679](https://github.com/openclaw/openclaw/issues/192679) 2026.10.10: update-runtime retention recurs — process census aborts on same-user non-dumpable ssh-agent (#178189 family) `P2` `impact:other` 💬1
- [#192675](https://github.com/openclaw/openclaw/issues/192675) Packaged himalaya skill uses v1 CLI syntax incompatible with Himalaya 2.x `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#192676](https://github.com/openclaw/openclaw/issues/192676) skill-creator skill documents retired proposal/apply workflow; skill_workshop applies immediately `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#192667](https://github.com/openclaw/openclaw/issues/192667) [Bug]: macOS app Settings sluggish after opening a conversation; input fields not visible in dark theme `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#192666](https://github.com/openclaw/openclaw/issues/192666) Identity normalization inconsistency between session lifecycle identity and credential broker paths `bug` `regression` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#192665](https://github.com/openclaw/openclaw/issues/192665) Computer transport completedTakeovers Set grows unbounded without eviction `bug` `regression` 💬1
- [#192664](https://github.com/openclaw/openclaw/issues/192664) Session reaper TOCTOU race: new subagent created after session expiry reaping `bug` `regression` 💬1
- [#192657](https://github.com/openclaw/openclaw/issues/192657) [Feature]: Let the system agent report backup status (backup_status) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:linked-pr-open` 💬1
- [#192655](https://github.com/openclaw/openclaw/issues/192655) Discord: guild reaction notifications are enqueued but never wake the agent `P2` `impact:ux-friction` 💬1
- [#192651](https://github.com/openclaw/openclaw/issues/192651) Bug: /update emits false no-reply warning after Gateway acknowledgement `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#192641](https://github.com/openclaw/openclaw/issues/192641) [Feature]: Upgrade Qwen onboarding and gateway defaults compatibly `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#192520](https://github.com/openclaw/openclaw/issues/192520) feat(beam): preserve logical conversation continuity across Team handoff `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#192600](https://github.com/openclaw/openclaw/issues/192600) Repo E2E artifacts omit source-discovered plugin browser files `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#192625](https://github.com/openclaw/openclaw/issues/192625) [Bug]: Codex Goal tools excluded in v2026.10.10, causing repeated continuation while awaiting human authorization `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#192624](https://github.com/openclaw/openclaw/issues/192624) [Bug]: Reported pinned-session visibility, ordering, and color regressions after v2026.10.10 release `bug` `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#192610](https://github.com/openclaw/openclaw/issues/192610) Mattermost: support thread-bound sub-agent sessions (sessions_spawn thread: true) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#192616](https://github.com/openclaw/openclaw/issues/192616) [Feature]: Show per-session token and cost usage from the CLI (sessions usage) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#192602](https://github.com/openclaw/openclaw/issues/192602) SQLite worker store hard limit MAX_STORES=64 degrades fleets with >64 agents (sessions unavailable, misleading doctor --fix hint) `P1` `impact:session-state` `impact:ux-friction` 💬1
- [#192593](https://github.com/openclaw/openclaw/issues/192593) [Bug]: Subagent completion delivered into a finalizing turn (tools disallowed) cannot dispatch follow-up work — orchestration chain stalls until user wakes the session `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#192595](https://github.com/openclaw/openclaw/issues/192595) [Bug]: Subagent settle wake rejects with UNAVAILABLE during plugin replacement without a successful retry `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬1
- [#192594](https://github.com/openclaw/openclaw/issues/192594) [Bug]: 2026.10.10 gateway steady ~45% CPU — uncached safeRealpathSync readlink storm + constant V8 concurrent marking (follow-up to #119440) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#192549](https://github.com/openclaw/openclaw/issues/192549) Stopped session automations can trigger failure alerts and repair turns `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#192577](https://github.com/openclaw/openclaw/issues/192577) Update failure: repairing (2026.9.5) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `P0` 💬1
- [#192563](https://github.com/openclaw/openclaw/issues/192563) release: plugin security-scan reviewed hashes drift with main's toolchain and only fail at publish `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:other` 💬1
- [#192564](https://github.com/openclaw/openclaw/issues/192564) release: publish recovery gaps (postpublish EPIPE, orphan bootstrap child, resume command, publish watcher) `P2` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` `impact:other` 💬1
- [#192566](https://github.com/openclaw/openclaw/issues/192566) scripts/pr: review workspace outside worktree-isolated agents' sandbox `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#192562](https://github.com/openclaw/openclaw/issues/192562) ci: npm release source check loses Blacksmith runners; hosted fallback lacks ripgrep `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `issue-rating: 🦪 silver shellfish` 💬1
- [#192561](https://github.com/openclaw/openclaw/issues/192561) frv: rerun attempts spawn ghost duplicate jobs that make FRV children unsealable `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#192559](https://github.com/openclaw/openclaw/issues/192559) [Bug]: Codex metadata admission fails on missing preliminary rollout; recovered sessions can be rebound to an unwritten file (2026.10.10) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#192555](https://github.com/openclaw/openclaw/issues/192555) [Bug]: 2026.10.10 accepts session-targeted agent-turn automations that can never run when the session uses a CLI-login runtime `P1` `impact:auth-provider` 💬1
- [#192547](https://github.com/openclaw/openclaw/issues/192547) Reduce Gateway startup memory on constrained ARM64 hosts `P2` `impact:crash-loop` `issue-rating: 🦪 silver shellfish` 💬1
- [#192518](https://github.com/openclaw/openclaw/issues/192518) Subagent completion is lost for CLI-backed parents: dead-letter before execution, and blocked completions no longer reach the parent `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1

#### 🔒 Closed Issues
- [#160610](https://github.com/openclaw/openclaw/issues/160610) [Bug]: Discord autoPresence always reports "runtime degraded" when model credentials come from SecretRef/env (empty auth-profile store in env-only mode)
- [#165391](https://github.com/openclaw/openclaw/issues/165391) [Bug]: Control UI dashboard shows N session rows but sessions.list / RPC show M (M << N)
- [#185656](https://github.com/openclaw/openclaw/issues/185656) [Bug]: Large zstd transcript archive still exceeds Node string limit in media-persistence migration on 2026.10.5 (regression of #170847), blocks update
- [#166289](https://github.com/openclaw/openclaw/issues/166289) model.usage diagnostic event double-fires for some completions (identical cost/tokens, exactly 1ms apart)
- [#161505](https://github.com/openclaw/openclaw/issues/161505) [Feature]: hold a media-only inbound message briefly so the text that follows joins the same turn (Element Web sends the attachment before the composer text)
- [#158921](https://github.com/openclaw/openclaw/issues/158921) [Feature]: Native contributor admission, lifecycle and stop contract
- [#158819](https://github.com/openclaw/openclaw/issues/158819) [Feature]: Fail loudly at creation and support cleanup for announce one-shots whose delivery target is unresolved (deleteAfterRun never fires on error)
- [#158607](https://github.com/openclaw/openclaw/issues/158607) [Bug]: Deferred context maintenance loses admission ownership after caller release
- [#143787](https://github.com/openclaw/openclaw/issues/143787) Heartbeat NO_REPLY re-commits and re-delivers the last final reply (2026.9.3)
- [#155480](https://github.com/openclaw/openclaw/issues/155480) [Bug]: Discord /model cannot change session model after upgrading 2026.7.1-2 → 2026.9.1 — picker and direct argument both rejected
- [#166141](https://github.com/openclaw/openclaw/issues/166141) [Bug]: NVIDIA models rejected by model catalog schema — remote bundle ships `cost: null` (2026.9.8)
- [#165874](https://github.com/openclaw/openclaw/issues/165874) [Bug]: Browser plugin's Playwright connection never releases tabs closed in Chrome (iframe-heavy pages stay "open"), leaking ~2.3 MB of Gateway heap per tab
- [#165827](https://github.com/openclaw/openclaw/issues/165827) [Bug]: Plan-completion follow-up omits requested preview from final CLI reply
- [#165822](https://github.com/openclaw/openclaw/issues/165822) [Bug]: Linux beta update fails runtime retention on built core file changed after inventory
- [#165665](https://github.com/openclaw/openclaw/issues/165665) [Bug]: an unfinished agents.delete crash-loops the Gateway on the next cold start; delete results under-report what was left on disk
- [#164991](https://github.com/openclaw/openclaw/issues/164991) [Bug] TypeSafe decision provider remains credentialReady=false with valid store and env SecretRefs on 2026.9.8
- [#182326](https://github.com/openclaw/openclaw/issues/182326) [Bug]: transient 'database is locked' in deferred agent-DB startup migration leaves the agent degraded until restart (no retry)
- [#159522](https://github.com/openclaw/openclaw/issues/159522) [Bug]: Compaction drops an active project and Hindsight recall cannot recover it (`Upstream Hindsight request failed`)
- [#158944](https://github.com/openclaw/openclaw/issues/158944) [Bug]: Expired (and cancelled) plugin approvals render as "Denied" in native channel approval cards
- [#193023](https://github.com/openclaw/openclaw/issues/193023) [Bug]: update reports a missing npm version as a registry connectivity failure
- [#193039](https://github.com/openclaw/openclaw/issues/193039) [Bug]: Image build fails at production-deps on buildah 1.39.7 (parent-stage ARG inheritance not applied)
- [#192723](https://github.com/openclaw/openclaw/issues/192723) [Bug]: Media captions are overwritten when sends also include ClawHub cards
- [#166272](https://github.com/openclaw/openclaw/issues/166272) [Bug]: History image prune rewrites an older message when it leaves the 3-turn window, restarting the prompt cache mid-session
- [#166314](https://github.com/openclaw/openclaw/issues/166314) Pause publication loses original acceptance during promotion: undeployed durability correction and design acceptance request
- [#166307](https://github.com/openclaw/openclaw/issues/166307) [Bug]: Telegram DM that reaches dispatch as the previous run ends gets the "couldn't produce or deliver a reply" notice, then a queued turn answers it
- [#166276](https://github.com/openclaw/openclaw/issues/166276) [Feature]: Mattermost: allow streaming.progress.commentary (and narration) — the lane is already wired
- [#166212](https://github.com/openclaw/openclaw/issues/166212) [Feature]: Optional UI workflow metadata for local Comfy PNG round-trip
- [#166146](https://github.com/openclaw/openclaw/issues/166146) [Bug]: macOS sidebar right-click appears to refresh UI and prevents normal context-menu selection
- [#166113](https://github.com/openclaw/openclaw/issues/166113) [Feature]: Add image evidence to decision_evaluate for vision providers
- [#166105](https://github.com/openclaw/openclaw/issues/166105) [perf] openclaw gateway status creates 4-6 read-only snapshots of the same state DB (~5s each, ~20s wasted)
- [#165972](https://github.com/openclaw/openclaw/issues/165972) Gateway fetchWithSsrFGuard to clawhub.ai has no degradation under event-loop starvation
- [#165808](https://github.com/openclaw/openclaw/issues/165808) Native Codex subagent completion is silently dropped after the parent's Codex thread rotates
- [#165751](https://github.com/openclaw/openclaw/issues/165751) [Feature]: Support interactive Google OAuth via a user-controlled browser from embedded Browser panel
- [#165702](https://github.com/openclaw/openclaw/issues/165702) sessions_search/sessions_history fail with `Unknown agent id "claude"` on free ACP harness sessions
- [#165688](https://github.com/openclaw/openclaw/issues/165688) [Bug]: Windows first-run AI access test fails with "Plugin codex is retiring" then succeeds on retry
- [#165682](https://github.com/openclaw/openclaw/issues/165682) [Feature]: Narrate agent-consult progress in GPT-Live realtime Talk (forward run progress as speakable context)
- [#165674](https://github.com/openclaw/openclaw/issues/165674) [Feature]: Linux parity for `gateway stop --disable` persistent suppression (macOS-only today)
- [#165655](https://github.com/openclaw/openclaw/issues/165655) [Feature]: Speak with Eleven v4 models
- [#165598](https://github.com/openclaw/openclaw/issues/165598) feat(tts-local-cli): let the local CLI speech provider declare and select voices
- [#165458](https://github.com/openclaw/openclaw/issues/165458) [Bug]: headless launch pairs --headless=new with --disable-gpu, stripping the GPU stack it was meant to keep
- [#164995](https://github.com/openclaw/openclaw/issues/164995) [Feature]: Per-agent Talk settings (speech provider/voice, realtime voice)
- [#160866](https://github.com/openclaw/openclaw/issues/160866) [Bug]: MainSessionRecoveryCapacity has no bounded wait, starving startup recovery dispatch
- [#160750](https://github.com/openclaw/openclaw/issues/160750) [Bug]: Slack allowBots: "mentions" admits untagged bot replies through implicit thread mentions
- [#163517](https://github.com/openclaw/openclaw/issues/163517) [Feature]: A2A channel: let an agent read the answer to its A2A message (GetTask) through the message tool
- [#162136](https://github.com/openclaw/openclaw/issues/162136) [CI] gateway startup-health shard is killed by its 60s no-output deadline during a cold Vitest worker build (exit 143, no assertion)
- [#161852](https://github.com/openclaw/openclaw/issues/161852) [Bug]: Checkout commit discovery reads oversized Git HEAD files in full
- [#160004](https://github.com/openclaw/openclaw/issues/160004) [Bug]: sessions.abort loses the typed state-contention Stop outcome
- [#159894](https://github.com/openclaw/openclaw/issues/159894) claude-cli runtime: before_tool_call fires but tool-result middleware never runs, so plugins cannot undo their own param changes
- [#159823](https://github.com/openclaw/openclaw/issues/159823) gateway: sessions.diff omits session sharing and response-time visibility checks
- [#159652](https://github.com/openclaw/openclaw/issues/159652) `/readyz` stays ready while an agent's database execution owner is sealed ("admission is closed")
- [#166288](https://github.com/openclaw/openclaw/issues/166288) OAuth refresh can discard a validated rotated credential after a transient settlement-store miss
- [#166205](https://github.com/openclaw/openclaw/issues/166205) Outbound attachment allowlist rejects .srt subtitle files (no config to extend)
- [#166202](https://github.com/openclaw/openclaw/issues/166202) [Bug]: splitShellArgs drops empty quoted args and keeps backslash-newline
- [#166176](https://github.com/openclaw/openclaw/issues/166176) google: Gemini turns discard context counts used for compaction
- [#165823](https://github.com/openclaw/openclaw/issues/165823) [Bug]: Matrix ignores messages.inbound debounce (debounceMs / byChannel.matrix)
- [#165811](https://github.com/openclaw/openclaw/issues/165811) [Bug]: Cron job targeting a live conversation (sessionTarget session:<key>) is always wrapped as an unattended run; no opt-out
- [#165677](https://github.com/openclaw/openclaw/issues/165677) Plugin SDK: allow transcript delta readers to decline cold restoration
- [#165642](https://github.com/openclaw/openclaw/issues/165642) [Bug]: macOS MCP stdio servers launched as bare `python3` get /usr/bin/python3 and fail as silent "Connection closed"
- [#165544](https://github.com/openclaw/openclaw/issues/165544) [Feature]: Path-scoped workspace rules (rules/*.md with paths: frontmatter), loaded only when a turn touches a matching path
- [#165526](https://github.com/openclaw/openclaw/issues/165526) [Feature]: Render presentation select menus as native Adaptive Card ChoiceSets on MS Teams
- [#165520](https://github.com/openclaw/openclaw/issues/165520) [Bug]: sessions_send watch does not wake when a visible target turn completes
- [#165516](https://github.com/openclaw/openclaw/issues/165516) CLI `message send` is not Gateway-routed for Signal: boots a second full runtime and re-runs the agent DB integrity check per send
- [#165509](https://github.com/openclaw/openclaw/issues/165509) Control UI: PDF attachment preview renders blank (blob iframe blocked by inherited `object-src 'none'`)
- [#165245](https://github.com/openclaw/openclaw/issues/165245) memory.promotion.applied event should record droppedDates/budgetChars (budget compaction is unobservable)
- [#165065](https://github.com/openclaw/openclaw/issues/165065) [Feature]: Map MS Teams message edits into routed system events like Slack
- [#164980](https://github.com/openclaw/openclaw/issues/164980) [voice-call] Option for realtime outbound calls to let the callee speak first before the opening line
- [#164971](https://github.com/openclaw/openclaw/issues/164971) Feature: Make bundled stock skills and default plugins opt-in (slim/core install)
- [#164968](https://github.com/openclaw/openclaw/issues/164968) [Feature]: let inline API keys recover during a billing disable window (or let custom providers opt into provider-managed cooldowns)
- [#163536](https://github.com/openclaw/openclaw/issues/163536) `sessions_spawn` accepts a duplicate `taskName` silently; `subagents list` cannot disambiguate by name
- [#163393](https://github.com/openclaw/openclaw/issues/163393) [Bug]: Control UI config form: a sensitive field turns read-only after its first keystroke, and a stored secret cannot be replaced
- [#163121](https://github.com/openclaw/openclaw/issues/163121) iOS chat loses history position, message order, and session UI state
- [#162751](https://github.com/openclaw/openclaw/issues/162751) Codex thread title stores the full assembled turn context, triplicated into title/first_user_message/preview
- [#162723](https://github.com/openclaw/openclaw/issues/162723) OpenAI realtime transcription provider rejects OAuth for gpt-4o-transcribe
- [#162606](https://github.com/openclaw/openclaw/issues/162606) Browser Talk can hang during granted microphone and WebRTC startup
- [#162498](https://github.com/openclaw/openclaw/issues/162498) workboard_comment returns the full card on every call (21 KB on average), which bloats agent context
- [#162482](https://github.com/openclaw/openclaw/issues/162482) [Bug]: Failed-subagent fallback notice "Please retry the task" is sent to the remote peer agent over a2a
- [#162459](https://github.com/openclaw/openclaw/issues/162459) Session reset drops registered plugin session state (`pluginExtensions`): both rebuild sites copy a field allowlist that omits it
- [#162319](https://github.com/openclaw/openclaw/issues/162319) Cron job-level session history is retained without bound below the 10 GB disk budget; agent DB grows ~75% stale history and degrades long before the budget
- [#162129](https://github.com/openclaw/openclaw/issues/162129) [Bug]: Capped update report drops Recovery and Verification lines when warnings fill the 1500-character budget
- [#161726](https://github.com/openclaw/openclaw/issues/161726) [Bug]: Codex app-server runtime never receives the session's sessionUrl (Runtime line missing from developer instructions)
- [#161707](https://github.com/openclaw/openclaw/issues/161707) [Bug]: Codex: first-turn AGENTS.md snapshot reused by every new native thread of the session; edits never reach it, systemPromptReport shows the current file
- [#161327](https://github.com/openclaw/openclaw/issues/161327) [Bug] `transcripts list` walks the entire capture store with no page ceiling when the caller is denied every row
- [#161222](https://github.com/openclaw/openclaw/issues/161222) [Bug] macOS/Windows updater endpoint is hardcoded to a `desktop-test` release channel, making `tauri.conf.json`'s endpoint dead config
- [#160647](https://github.com/openclaw/openclaw/issues/160647) [Bug] `voicesession` record's `effects` and `consultRunIds` are unbounded and the row has no TTL, so a long session grows one blob without limit
- [#160637](https://github.com/openclaw/openclaw/issues/160637) [Bug] A failed skills watcher close permanently strands the entry in `pathWatchers`, forcing a full filesystem rescan on every agent preparation
- [#160635](https://github.com/openclaw/openclaw/issues/160635) [Bug] `uncertainPooledObservationRoots` grows without bound and is O(n) per live watcher on every event, permanently poisoning correctness
- [#160632](https://github.com/openclaw/openclaw/issues/160632) [Bug] `resolveLimit` silently clamps an oversized numeric `limit` instead of rejecting it, and regex-scans an unbounded-length digit string per request
- [#160628](https://github.com/openclaw/openclaw/issues/160628) [Bug] Deferred heartbeats re-arm the adoption stall watchdog, so there is no absolute pre-adoption deadline
- [#160625](https://github.com/openclaw/openclaw/issues/160625) [Bug] Branch summarization records file operations for a message that the token budget then discards from the summary
- [#160622](https://github.com/openclaw/openclaw/issues/160622) [Bug] Execution-layer `Set<string>` collapses duplicate provider tool-call ids that the transcript layer explicitly supports
- [#160530](https://github.com/openclaw/openclaw/issues/160530) macOS: clarify “Check for updates automatically” and allow review-before-install policy
- [#160394](https://github.com/openclaw/openclaw/issues/160394) [Feature]: Record one-shot gateway model runs (infer model run / modelRun) in the usage ledger
- [#159610](https://github.com/openclaw/openclaw/issues/159610) [Feature]: Support page text extraction for existing-session browsers
- [#159203](https://github.com/openclaw/openclaw/issues/159203) extractStructuredWithModel fails on every provider except codex
- [#159201](https://github.com/openclaw/openclaw/issues/159201) Images from a run-triggering user message replay at full token cost for the entire tool loop
- [#159141](https://github.com/openclaw/openclaw/issues/159141) [Bug]: realtime agent is never woken when the caller does not answer, so the call holds the line
- [#159138](https://github.com/openclaw/openclaw/issues/159138) [Bug]: realtime voice-call transcripts store all agent lines first and the caller as one glued blob
- [#159029](https://github.com/openclaw/openclaw/issues/159029) config validate and setup commands call an unreadable config invalid and suggest doctor --fix
- [#159019](https://github.com/openclaw/openclaw/issues/159019) perf(memory-lancedb): cache embeddings on the memory_store write path (dedup-check) while keeping recall uncached
- [#192619](https://github.com/openclaw/openclaw/issues/192619) Standing intents: QA channel conversation scope differs between creation and prompt matching
- [#128171](https://github.com/openclaw/openclaw/issues/128171) [Bug]: macOS app cannot resolve typed Gateway auth SecretRefs
- [#191912](https://github.com/openclaw/openclaw/issues/191912) [Bug]: Codex turn startup reports a catalog updater failure when its executable is missing
- [#190413](https://github.com/openclaw/openclaw/issues/190413) Telegram rich messages (Bot API 10.3 blocks) lose Markdown paragraph blank lines
- [#189432](https://github.com/openclaw/openclaw/issues/189432) iOS new conversation unexpectedly nested under unrelated session; PWA disclosure hides it and no detach action
- [#192253](https://github.com/openclaw/openclaw/issues/192253) [Bug]: Inbound context reports source_modality "image" for a text-only reply to a photo
- [#192642](https://github.com/openclaw/openclaw/issues/192642) [Bug]: macOS embedded chat loses offline queued input after authenticated reconnect
- [#193004](https://github.com/openclaw/openclaw/issues/193004) Plugin SDK: expose call-bound live GitHub identity verification without credentials
- [#181226](https://github.com/openclaw/openclaw/issues/181226) [Bug]: Codex source-reply finalization loses context after `message_tool_only`
- [#192678](https://github.com/openclaw/openclaw/issues/192678) Update finalization (memory-core embedding setup) copies agent DB into $TMPDIR without capacity check; ENOSPC after schema migration strands the gateway (state-migrated-no-rollback)
- [#192626](https://github.com/openclaw/openclaw/issues/192626) Update failure: clean-check (2026.10.9)
- [#192522](https://github.com/openclaw/openclaw/issues/192522) [Bug]: /status sent during an agent turn kills the turn with SqliteTranscriptMutationConflictError (request dropped)
- [#187606](https://github.com/openclaw/openclaw/issues/187606) [Bug]: macOS exec host drops requests larger than 256 KB without any response; node reports "outcome unknown" for a command that never ran
- [#191764](https://github.com/openclaw/openclaw/issues/191764) chore: withdrawn
- [#187603](https://github.com/openclaw/openclaw/issues/187603) [Bug]: macOS status menu session preview never refreshes once its submenu exists; closing the menu early leaves "Loading preview…" until reconnect
- [#187601](https://github.com/openclaw/openclaw/issues/187601) [Bug]: macOS exec host returns empty stdout/stderr when command output contains any invalid or partial UTF-8
- [#187605](https://github.com/openclaw/openclaw/issues/187605) [Bug]: macOS node camera.snap/camera.clip/screen.record/location.get silently fall back to defaults when params are malformed, then report ok
- [#186215](https://github.com/openclaw/openclaw/issues/186215) [Bug]: macOS New Thread recursively calls createSession and exhausts memory
- [#187602](https://github.com/openclaw/openclaw/issues/187602) [Bug]: macOS app crashes at launch when gateway.customBindHost is a bracket-less IPv6 address (force-unwrapped URL)
- [#187486](https://github.com/openclaw/openclaw/issues/187486) [Bug]: macOS ⌘N/⌘K pressed while the dashboard is loading is lost on token/password Gateways (dispatched at didFinish, before the Control UI shell listens)
- [#186017](https://github.com/openclaw/openclaw/issues/186017) Control UI shows a redundant cancellation notice after explicit Stop
- [#192360](https://github.com/openclaw/openclaw/issues/192360) Control UI shows reloaded Claude CLI tool calls under raw MCP bridge names and loses their command and diff views
- [#192780](https://github.com/openclaw/openclaw/issues/192780) [Bug]: macOS Quick Chat hides an unconfigured Gateway behind a model-settings error
- [#192644](https://github.com/openclaw/openclaw/issues/192644) [Bug]: Provider sign-in guidance becomes a generic terminal chat failure
- [#190014](https://github.com/openclaw/openclaw/issues/190014) [Bug]: iOS chat image preview opens larger than the screen, with a small close button
- [#191839](https://github.com/openclaw/openclaw/issues/191839) [Bug]: Bedrock discovery offers model IDs that fail with "on-demand throughput isn't supported" / "Model not found"
- [#192991](https://github.com/openclaw/openclaw/issues/192991) [Bug]: backup create fails on large state dirs: SQLite header probe runs all paths in one spawnSync with a hard 10 s timeout
- [#192957](https://github.com/openclaw/openclaw/issues/192957) [Bug]: Bedrock Converse sends unsupported temperature for Grok 4.6 inference profiles
- [#192935](https://github.com/openclaw/openclaw/issues/192935) CI: avoid downloading the security harness twice for the same commit
- [#192926](https://github.com/openclaw/openclaw/issues/192926) [Bug]: Bedrock discovery assigns Grok 4.6 a 32K context window instead of 500K
- [#192920](https://github.com/openclaw/openclaw/issues/192920) iOS screenshot capture cannot reuse regular CI package downloads
- [#192477](https://github.com/openclaw/openclaw/issues/192477) [Bug]: gateway restart flag-conflict errors print only "The CLI command failed." instead of the reason
- [#192904](https://github.com/openclaw/openclaw/issues/192904) Heartbeat turn preempted by a visible turn loses the system events it already drained (Slack button click lost)
- [#192677](https://github.com/openclaw/openclaw/issues/192677) improve(ci): reduce repeated worker import scan work
- [#186844](https://github.com/openclaw/openclaw/issues/186844) [Bug]: New Session projects disappear silently when projects.list repeatedly rejects a stale session projection
- [#192567](https://github.com/openclaw/openclaw/issues/192567) test(tlon): transport tests leak socket writes after close (unhandled ECONNRESET)
- [#192565](https://github.com/openclaw/openclaw/issues/192565) release: Windows Gateway notification fails on npm replication lag (readback 404)
- [#192795](https://github.com/openclaw/openclaw/issues/192795) Bug: cron add strips whitespace from stored agent messages
- [#191644](https://github.com/openclaw/openclaw/issues/191644) [Bug]: Telegram message sends silently drop effectId (no message_effect_id reaches the Bot API)
- [#192788](https://github.com/openclaw/openclaw/issues/192788) [Bug]: Manual compaction ignores OpenRouter summary-only reasoning progress
- [#192803](https://github.com/openclaw/openclaw/issues/192803) backup create walks and archives the regenerable Node compile cache (tmp/node-compile-cache) — add it to the backup volatile-directory rules
- [#192762](https://github.com/openclaw/openclaw/issues/192762) [Bug]: Memory reindex exceeds worker input limit because session.current sends full replacement including embeddings
- [#192717](https://github.com/openclaw/openclaw/issues/192717) [Bug]: audio and video inference can read the wrong file through a symlink parent
- [#192724](https://github.com/openclaw/openclaw/issues/192724) Windows: EPERM creating junction during plugin capture prepare (2026.10.9)
- [#187115](https://github.com/openclaw/openclaw/issues/187115) [Bug]: one failed Claude CLI launch makes every later turn in that conversation fail with the same error
- [#192426](https://github.com/openclaw/openclaw/issues/192426) [Bug]: Within-limit GIF from view_image is sent to xAI as image/gif (400), then poisons the session so every later turn fails (2026.10.10)
- [#192557](https://github.com/openclaw/openclaw/issues/192557) [Bug]: Empty tool result is sent as "(no output)" live but replayed as "[empty content omitted]", so history changes between turns
- [#192560](https://github.com/openclaw/openclaw/issues/192560) Improve diagnostics for stale session-target preparation after interruption
- [#192687](https://github.com/openclaw/openclaw/issues/192687) Docs feedback: /gateway/remote
- [#192479](https://github.com/openclaw/openclaw/issues/192479) Mattermost: textChunkLimit is ignored when a reply carries a file
- [#192679](https://github.com/openclaw/openclaw/issues/192679) 2026.10.10: update-runtime retention recurs — process census aborts on same-user non-dumpable ssh-agent (#178189 family)
- [#192665](https://github.com/openclaw/openclaw/issues/192665) Computer transport completedTakeovers Set grows unbounded without eviction
- [#192664](https://github.com/openclaw/openclaw/issues/192664) Session reaper TOCTOU race: new subagent created after session expiry reaping
- [#192655](https://github.com/openclaw/openclaw/issues/192655) Discord: guild reaction notifications are enqueued but never wake the agent
- [#192520](https://github.com/openclaw/openclaw/issues/192520) feat(beam): preserve logical conversation continuity across Team handoff
- [#187537](https://github.com/openclaw/openclaw/issues/187537) [Bug]: cancelled Discord message tools remain waiting in REST queues and retry backoff
- [#192600](https://github.com/openclaw/openclaw/issues/192600) Repo E2E artifacts omit source-discovered plugin browser files
- [#159249](https://github.com/openclaw/openclaw/issues/159249) zalouser: inbound files, photos and videos reach the agent only as a CDN link, never as media
- [#192602](https://github.com/openclaw/openclaw/issues/192602) SQLite worker store hard limit MAX_STORES=64 degrades fleets with >64 agents (sessions unavailable, misleading doctor --fix hint)
- [#190481](https://github.com/openclaw/openclaw/issues/190481) telegram: sticker action ignores silent: true, sendSticker still notifies recipients
- [#192549](https://github.com/openclaw/openclaw/issues/192549) Stopped session automations can trigger failure alerts and repair turns
- [#192555](https://github.com/openclaw/openclaw/issues/192555) [Bug]: 2026.10.10 accepts session-targeted agent-turn automations that can never run when the session uses a CLI-login runtime
- [#190741](https://github.com/openclaw/openclaw/issues/190741) [Bug]: Control UI: `isLoopbackHostname` does not count `.localhost` names, so Portals says "Remote portal ingress required" for a portal that opens
- [#162648](https://github.com/openclaw/openclaw/issues/162648) Binary availability reuses relative-PATH hits after the working directory changes

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 260,597 · **Open issues:** 52,967 · **Last push:** <1h ago

There were no new releases for Hermes Agent on November 5, 2026, but several notable changes emerged from the merged pull requests. The refactor of the bot mode involved deleting unreachable Bot Chat mailbox helpers, while updates to the bots list now treat gateway Group Chats as normal rows and remove unnecessary refresh buttons. Among the new issues, a significant concern is the bug (#148958) related to gateway-owner stalls, which can cause worker crashes and block card functionality, indicating a need for immediate attention. Other critical bugs include the persisting null-id rows after a state.db upgrade (#148742) and a stale session lease issue on Windows (#148830), both of which could impact user experience.

#### ✅ Merged PRs
- [#149118](https://github.com/NousResearch/hermes-agent/pull/149118) refactor(bot-mode): delete Bot Chat mailbox helpers left unreachable by the authority FIFO
- [#148746](https://github.com/NousResearch/hermes-agent/pull/148746) Bots list: gateway Group Chats are normal rows; no Refresh button or raw error text

#### 🐛 New Issues
- [#148958](https://github.com/NousResearch/hermes-agent/issues/148958) Kanban: a gateway-owner stall exits the worker 1 and is counted as a crash; two in a row block the card `type/bug` `comp/cli` `P2` 💬4
- [#148762](https://github.com/NousResearch/hermes-agent/issues/148762) [Bug]: same stored session id can stay unended in two profile stores; Desktop/CLI resume races the shorter lineage into view `type/bug` `P2` `area/sessions` `area/profiles` 💬3
- [#148742](https://github.com/NousResearch/hermes-agent/issues/148742) Legacy state.db without INTEGER PRIMARY KEY id accumulates NULL-id rows after upgrade — compression fails int(None), attempts_exhausted `type/bug` `P2` `area/sessions` `area/compression` 💬3
- [#148755](https://github.com/NousResearch/hermes-agent/issues/148755) _strip_provider_prefix drops a configured provider name from "::"-style model IDs, so context-length lookup misses `type/bug` `comp/agent` `tool/file` `P3` 💬2
- [#148830](https://github.com/NousResearch/hermes-agent/issues/148830) [Bug]: A stale active-session lease becomes permanent when Windows reuses the owner PID for a process whose creation time is unreadable `type/bug` `P3` `area/sessions` `os/windows` 💬2
- [#148861](https://github.com/NousResearch/hermes-agent/issues/148861) [Bug]: Kanban notifier delivers superseded lifecycle events — no staleness validation, ordering, or state snapshot at delivery time `type/bug` `comp/cli` `comp/gateway` `comp/cron` 💬2
- [#148857](https://github.com/NousResearch/hermes-agent/issues/148857) [Bug]: while the primary is still rate-limited, a gateway session stays on its last fallback after that fallback fails, instead of trying earlier fallbacks that have recovered `type/bug` `comp/agent` `area/config` `P2` 💬2
- [#148923](https://github.com/NousResearch/hermes-agent/issues/148923) [Bug]: Canonical group faces ignore the migrated bot avatar key `type/bug` `P2` `comp/desktop` `desktop/chat` 💬2
- [#148930](https://github.com/NousResearch/hermes-agent/issues/148930) Kanban workers crash at first session save (Kanban owner refused: execution unknown) `type/bug` `comp/cli` `P2` `area/sessions` 💬2
- [#148965](https://github.com/NousResearch/hermes-agent/issues/148965) docs: sessions.md says compression always creates a continuation session; configuration.md says in_place keeps the id `type/docs` `P3` `area/sessions` `area/compression` 💬2
- [#148988](https://github.com/NousResearch/hermes-agent/issues/148988) [Bug]: Session preview in /resume and /sessions shows the adapter's channel_context instead of the user's message `type/bug` `P2` `area/sessions` 💬2
- [#148868](https://github.com/NousResearch/hermes-agent/issues/148868) [Bug]: Desktop custom endpoint picks lose explicit identity when their key collides with a built-in provider `type/bug` `comp/gateway` `area/config` `P3` 💬1
- [#149219](https://github.com/NousResearch/hermes-agent/issues/149219) [Feature]: record why a skill exists at create time (skill_manage why) 💬1
- [#148739](https://github.com/NousResearch/hermes-agent/issues/148739) [Feature]: Let plugins create a profile that can answer (public route to profiles.create's mirror_credentials) `type/feature` `comp/cli` `area/auth` `P2` 💬1
- [#148766](https://github.com/NousResearch/hermes-agent/issues/148766) [Bug]: TUI retry hint hardcodes "Alt+K" but the real binding is Cmd+K (macOS) / Ctrl+K (Linux, Windows) `type/bug` `comp/tui` `P2` 💬1
- [#148783](https://github.com/NousResearch/hermes-agent/issues/148783) [Bug][Windows] GET /api/memory takes 8-11 s per call: pm.client.venv_is_current spawns a pm worker for a display verdict `type/perf` `comp/cli` `tool/memory` `P2` 💬1
- [#148810](https://github.com/NousResearch/hermes-agent/issues/148810) [Bug]: Desktop loads a remote bot's MEDIA: image from the local disk when This device is the active gateway `type/bug` `P2` `comp/desktop` `desktop/chat` 💬1
- [#148817](https://github.com/NousResearch/hermes-agent/issues/148817) [Bug] Feishu: granting contact:user.employee_id:readonly mid-life orphans existing pairing grants (operator locked out of their own bot) `type/bug` `comp/plugins` `platform/feishu` `area/auth` 💬1
- [#148812](https://github.com/NousResearch/hermes-agent/issues/148812) [Bug]: an unreadable config.yaml re-enables every disabled skill (skill_utils._load_raw_config returns {}) `type/bug` `comp/agent` `tool/skills` `area/config` 💬1
- [#148823](https://github.com/NousResearch/hermes-agent/issues/148823) [Bug]: Desktop Files tree does not mark parent folders when nested files have Git changes `type/bug` `P2` `comp/desktop` `desktop/files` 💬1
- [#148831](https://github.com/NousResearch/hermes-agent/issues/148831) [Bug]: delegate_task silently drops a top-level routing field (option beside goal) — child runs the default route `type/bug` `comp/agent` `comp/tools` `tool/delegate` 💬1
- [#148833](https://github.com/NousResearch/hermes-agent/issues/148833) [Bug] New ChatGPT models do not appear in additional profiles `type/bug` `comp/plugins` `provider/openai` `area/auth` 💬1
- [#148843](https://github.com/NousResearch/hermes-agent/issues/148843) Local production patch series (13 commits): Kanban go-gate/dispatch hardening, MCP lifecycle, turn finalizer `type/bug` `comp/cli` `comp/tools` `tool/mcp` 💬1
- [#148846](https://github.com/NousResearch/hermes-agent/issues/148846) [Bug]: Desktop queued prompts lose Edit and Steer — the gateway serves no queued-row controls `type/bug` `comp/gateway` `P2` `area/sessions` 💬1
- [#148853](https://github.com/NousResearch/hermes-agent/issues/148853) gateway: liveness-watchdog hard exit can still stall on a blocked stderr stack dump or the foreground cleanup lock `type/bug` `comp/gateway` `P3` 💬1
- [#148858](https://github.com/NousResearch/hermes-agent/issues/148858) [Bug]: plugins pack install never offers the caution "Install anyway?" prompt, and drops the catalog reviewed pin `type/bug` `comp/cli` `P2` 💬1
- [#148859](https://github.com/NousResearch/hermes-agent/issues/148859) [Bug]: Desktop: a dollar sign inside an inline code span renders with a literal backslash (`$260.02` shows as `\$260.02`) `type/bug` `P2` `comp/desktop` `desktop/chat` 💬1
- [#148886](https://github.com/NousResearch/hermes-agent/issues/148886) [BUG] Dashboard cron prompt edit silently resets `enabled_toolsets: []` to `null` (zero-tool allowlist becomes all tools) `type/security` `comp/cli` `comp/cron` `P3` 💬1
- [#148894](https://github.com/NousResearch/hermes-agent/issues/148894) Stopping a cron external worker (SIGTERM / scope stop) leaves its canonical agent turn running in the gateway `type/bug` `comp/cron` `P2` 💬1
- [#148906](https://github.com/NousResearch/hermes-agent/issues/148906) [Bug]: TTS identifier pruning silences day-first dates (16/11, 17/11/2026) and long plain numbers `type/bug` `comp/tools` `tool/file` `tool/tts` 💬1
- [#148926](https://github.com/NousResearch/hermes-agent/issues/148926) [Bug]: `hermes kanban list` fails inside a Kanban worker because it writes before listing `type/bug` `comp/cli` `tool/delegate` `P2` 💬1
- [#148927](https://github.com/NousResearch/hermes-agent/issues/148927) [Bug]: a Kanban task with an OWNER/REPO completion contract can never complete on a repo that can't have required checks, and the contract can't be changed `type/bug` `comp/cli` `comp/plugins` `P2` 💬1
- [#148929](https://github.com/NousResearch/hermes-agent/issues/148929) `hermes curator archive` / `prune` ignore the user skill lock; terminal guard only blocks `curator unlock` `type/bug` `comp/cli` `comp/tools` `tool/terminal` 💬1
- [#148940](https://github.com/NousResearch/hermes-agent/issues/148940) browser_vault enter_code returns no_code_field on Camofox/Firefox: inspection reads `element.autocomplete`, which Firefox returns as "" for `one-time-code` `type/bug` `comp/tools` `tool/browser` `area/auth` 💬1
- [#148950](https://github.com/NousResearch/hermes-agent/issues/148950) Windows + Smart App Control: PM-managed python-build-standalone interpreter is blocked (_ctypes.pyd); hermes update then rewires launchers to the blocked interpreter and the gateway stays down `type/bug` `comp/cli` `area/config` `P2` 💬1
- [#148985](https://github.com/NousResearch/hermes-agent/issues/148985) Managed workers keep the side-task settings saved when their session started `type/bug` `comp/agent` `area/config` `P2` 💬1
- [#148986](https://github.com/NousResearch/hermes-agent/issues/148986) [Bug]: Local adapter drops an inbound message 5-8 s after gateway start (8 of 9 drops land in the boot window) `type/bug` `comp/gateway` `P2` 💬1
- [#149237](https://github.com/NousResearch/hermes-agent/issues/149237) Batch delegate_task transcripts hijack their parent's resume (session_read_only lockout)
- [#149236](https://github.com/NousResearch/hermes-agent/issues/149236) [Feature]: Desktop remote gateway support for auth-proxy / zero-trust fronted deployments (Cloudflare Access, etc.)
- [#149233](https://github.com/NousResearch/hermes-agent/issues/149233) TUI /model picker: a built-in provider whose base_url env override (e.g. ANTHROPIC_BASE_URL) points at a custom_providers endpoint silently hides the user custom provider row
- [#149232](https://github.com/NousResearch/hermes-agent/issues/149232) [Bug]: Desktop — closing a session tab ("Close") never requests session.close, so on_session_finalize hooks don't run (Bot Chat sessions never end either)
- [#149225](https://github.com/NousResearch/hermes-agent/issues/149225) Desktop: list each bot's canonical Bot Chat in the Sessions sidebar (proposal)
- [#149223](https://github.com/NousResearch/hermes-agent/issues/149223) Hosted-room driver re-opens a sqlite connection per settled task on every pass; gateway CPU scales with room history
- [#149217](https://github.com/NousResearch/hermes-agent/issues/149217) [Setup]: Windows Hermes v0.22.5 update lock and .deleteme — safe recovery needed
- [#149215](https://github.com/NousResearch/hermes-agent/issues/149215) [Feature]: Role × board profile composition — boards as a layer over profiles, not a reason to clone them

#### 🔒 Closed Issues
- [#148762](https://github.com/NousResearch/hermes-agent/issues/148762) [Bug]: same stored session id can stay unended in two profile stores; Desktop/CLI resume races the shorter lineage into view

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 96,348 · **Open issues:** 9,882 · **Last push:** <1h ago

On November 5, 2026, there were no new releases for vLLM, but several important pull requests were merged, enhancing functionality and fixing bugs. Notably, #65763 made MiniMax-M3 decode top-k tests deterministic, and #65689 addressed an issue with dummy inputs during multimodal model validation. Additionally, improvements to support batch invariance in distributed settings were made with #65540 dropping specific cubins in favor of compute_80 PTX. A significant new issue was raised regarding performance, specifically #65569, which highlighted that batch-invariant modes on Hopper/Blackwell settings incorrectly reroute linear layers to Triton despite cuBLAS already being batch-invariant. Overall, it was a routine maintenance day with a focus on optimizing existing features.

#### ✅ Merged PRs
- [#65763](https://github.com/vllm-project/vllm/pull/65763) [CI][Kernels] Make the MiniMax-M3 decode top-k test deterministic
- [#65593](https://github.com/vllm-project/vllm/pull/65593) [Bugfix][EC Connector] Make control-plane ZMQ heartbeats take effect
- [#63027](https://github.com/vllm-project/vllm/pull/63027) [ROCm][Perf][DSv4.1] Mono: tuned K1/K2 for the TP2 compress-ratio-2 layers on MI355X
- [#65577](https://github.com/vllm-project/vllm/pull/65577) [MM] Support mm_device_do_normalize for Gemma 4
- [#65237](https://github.com/vllm-project/vllm/pull/65237) [Bugfix][KV Offload] Keep lazy SimpleCPUOffload stores at the GPU eviction end
- [#60762](https://github.com/vllm-project/vllm/pull/60762) [Bugfix][DSv4.1] Declare 64-token kernel blocks for SM120 sparse backends
- [#65466](https://github.com/vllm-project/vllm/pull/65466) [Core] Handle new requests and aborts while waiting for model output
- [#60895](https://github.com/vllm-project/vllm/pull/60895) [Perf][GLM-5.3-Flash] DeepGEMM FP8 MegaMoE with fused shared experts
- [#65598](https://github.com/vllm-project/vllm/pull/65598) [Bugfix][Attention] Keep FlashInfer TRTLLM prefill query offsets in a persistent buffer
- [#65762](https://github.com/vllm-project/vllm/pull/65762) [CI] Let ci-selector decide csrc/ changes on CUDA
- [#65552](https://github.com/vllm-project/vllm/pull/65552) [CI][DSv4.1] Give the MXFP8 linear test stub a params_dtype
- [#64677](https://github.com/vllm-project/vllm/pull/64677) [Bugfix][UMBP] Copy every KV cache layout's per-head runs
- [#65234](https://github.com/vllm-project/vllm/pull/65234) [CI] Shard Multimodal Models (Extended Generation 1) automatically, with spawned engines
- [#65585](https://github.com/vllm-project/vllm/pull/65585) [CI] Enroll the MI300 Batch Invariance (Distributed) mirror in automatic sharding
- [#64479](https://github.com/vllm-project/vllm/pull/64479) [XPU][Perf] Reuse GDN metadata across KV cache groups on XPU
- [#65689](https://github.com/vllm-project/vllm/pull/65689) [Bugfix][Multimodal] Don't validate model-built dummy inputs against mm limits
- [#62881](https://github.com/vllm-project/vllm/pull/62881) [Bugfix][Test] Rotate KV into RHT domain in the INT4 unified attn test
- [#65473](https://github.com/vllm-project/vllm/pull/65473) [CI] Run test_depyf_integration in a spawned process
- [#65553](https://github.com/vllm-project/vllm/pull/65553) [GLM 5.3 Perf] Enable fp8 kv cache for glm 5.3 flash draft model dspark, 960MB GPU memory saved each rank
- [#59526](https://github.com/vllm-project/vllm/pull/59526) [CI] Run pip-compile pre-commit hooks only when requirements change
- [#55688](https://github.com/vllm-project/vllm/pull/55688) [Mamba] Unify FI ReplaySSM STP/MTP/Prefix Caching Lifecycle
- [#65399](https://github.com/vllm-project/vllm/pull/65399) [Bugfix][Scheduler] Respect disabled chunked prefill for multimodal requests
- [#65540](https://github.com/vllm-project/vllm/pull/65540) [Build] Marlin: drop SM12x-specific cubins and rely on compute_80 PTX
- [#65542](https://github.com/vllm-project/vllm/pull/65542) [Kernel] Marlin: remove 8-bit (INT8/FP8) activation support, rely on Humming
- [#62057](https://github.com/vllm-project/vllm/pull/62057) [ROCm][Model] Add Beam 1.0 support on ROCm
- [#65522](https://github.com/vllm-project/vllm/pull/65522) [Bugfix] Keep the HiSparse FlashInfer all-reduce backend on lazy workspace creation
- [#64760](https://github.com/vllm-project/vllm/pull/64760) [GLM 5.3 Perf] Sorted-A TMA for FP8 MoE down projection on H200, 6.0%~ 7.6% E2E Throughput Improvement
- [#64782](https://github.com/vllm-project/vllm/pull/64782) [Bugfix][CUDA] Use CUDA memory accounting for integrated GPUs on WSL
- [#65198](https://github.com/vllm-project/vllm/pull/65198) [GLM 5.3 Perf] Align draft model kv cache dtype align with target, 50% GPU Memory saved for each draft model
- [#59747](https://github.com/vllm-project/vllm/pull/59747) [Bugfix][NIXL] Reject push handshakes between different P/D block sizes
- [#65537](https://github.com/vllm-project/vllm/pull/65537) [MiniMax-M3] Support sequence parallelism with pipeline parallelism
- [#64129](https://github.com/vllm-project/vllm/pull/64129) [Perf][DCP] Sparse indexer: key only significant bits in the DCP top-k merge
- [#64016](https://github.com/vllm-project/vllm/pull/64016) [Model] Add Unlimited-OCR-2 DASH attention support
- [#64656](https://github.com/vllm-project/vllm/pull/64656) [Test][UMBP] Restore a Mamba2 hybrid end to end through UMBP
- [#65567](https://github.com/vllm-project/vllm/pull/65567) [CI] Run H100 fusion config sweeps and batch invariance nightly only
- [#60919](https://github.com/vllm-project/vllm/pull/60919) [JIT][ROCm] Fully warmup GLM-5.3-Flash
- [#54625](https://github.com/vllm-project/vllm/pull/54625) [Core] Add cache-aware admission ordering
- [#63367](https://github.com/vllm-project/vllm/pull/63367) [ROCm][DSv4.1] Shard the Engram gate so TP ranks gather only the value slice
- [#62836](https://github.com/vllm-project/vllm/pull/62836) [Bugfix] Fix GPTQ checkpoint loading for PLaMo3

#### 🐛 New Issues
- [#65569](https://github.com/vllm-project/vllm/issues/65569) [Performance]: Batch-invariant mode on Hopper/Blackwell routes Linear layers to Triton although cuBLAS is already batch-invariant under the mode's settings `performance` `batch-invariance` 💬7
- [#65618](https://github.com/vllm-project/vllm/issues/65618) [Bug]: DSpark draft for DeepSeek-V4 models has no `packed_modules_mapping` → fused layers ignore `ignored_layers`, 0% acceptance (repro: DeepSeek-V4.1-Flash) `bug` `rocm` `deepseek` `quantization` 💬6
- [#65632](https://github.com/vllm-project/vllm/issues/65632) [Bug]: vLLM Kimi k3 KVV AMD GPU product quality issue (DeepSWE & BEAM) `bug` `rocm` `kimi` `k3` 💬3
- [#65734](https://github.com/vllm-project/vllm/issues/65734) [Bug][ROCm]: Dense attention output allocated with torch.empty — CUDA-graph padding rows poison the dynamic per-tensor FP8 activation scale (garbage under concurrency) `rocm` `quantization` 💬2
- [#65592](https://github.com/vllm-project/vllm/issues/65592) [Bug]: /inference/v1/generate with "max_tokens": null bypasses default/override/platform output-token caps 💬2
- [#65682](https://github.com/vllm-project/vllm/issues/65682) [RFC]: Bounded load/save admission for Mooncake Store `feature request` 💬1
- [#65769](https://github.com/vllm-project/vllm/issues/65769) [Bug]: CuMemAllocator.discard retains the CPU backup of asleep allocations 💬1
- [#65752](https://github.com/vllm-project/vllm/issues/65752) [Bug]: `/v1/responses` omits `completed_at` / `error` and sends `text: null`, so strict OpenAI-compatible clients reject `response.completed` 💬1
- [#65721](https://github.com/vllm-project/vllm/issues/65721) [Bug]: NixlConnector drops kv_connector_extra_config.num_threads for non-UCX backends 💬1
- [#65693](https://github.com/vllm-project/vllm/issues/65693) [Bug]: /v1/messages streaming reports a tool call cut short by EOS as stop_reason tool_use `rocm` `tool-calling` 💬1
- [#65662](https://github.com/vllm-project/vllm/issues/65662) [Bug]: v0.33.0 GitHub Release incorrectly points to v0.33.0rc3 tag `bug`
- [#65644](https://github.com/vllm-project/vllm/issues/65644) [Bug]: Streaming final usage chunk intermittently omits metrics.speculative_decoding while spec-decode Prometheus counters advance `bug` `quantization` 💬1
- [#65626](https://github.com/vllm-project/vllm/issues/65626) [Bug]: OffloadingConnector KV events drop the request's extra_keys (cache_salt), so a KV-event consumer can't place CPU-tier blocks in their salted namespace 💬1
- [#65611](https://github.com/vllm-project/vllm/issues/65611) [Bug]: gpt-oss-20b + nebius/EAGLE3-gpt-oss-20b gives corrupted greedy output at num_speculative_tokens >= 5 on MI355X (correct with --enforce-eager) `rocm` `gpt-oss` 💬1
- [#65793](https://github.com/vllm-project/vllm/issues/65793) [Bug]: DeepSeek-V4.1-Flash: some DP ranks of a multi-node DP/EP decode engine produce degenerate output (rank-sticky, reproduces without P/D transfer) `deepseek` `DSv4.1`
- [#65573](https://github.com/vllm-project/vllm/issues/65573) [Feature]: Support `mm_device_do_normalize` for Gemma 4
- [#65782](https://github.com/vllm-project/vllm/issues/65782) [RFC]: SM90 DeepGEMM MegaMoE for DeepSeek V4 `deepseek` `DSv4`
- [#65774](https://github.com/vllm-project/vllm/issues/65774) [Bug]: qwen3_coder: a repeated parameter breaks the streamed tool call arguments `tool-calling`
- [#65770](https://github.com/vllm-project/vllm/issues/65770) [Bug]: gpt-oss chat completions return 500 when a prior tool call name contains special-token text `tool-calling` `gpt-oss`
- [#65751](https://github.com/vllm-project/vllm/issues/65751) [Performance]: DFlash drafts the full block under dynamic speculative decoding, so a small runtime K still pays max-K drafter cost `speculative-decoding`
- [#65714](https://github.com/vllm-project/vllm/issues/65714) [RFC]: A KV compatibility identity, enforced on NIXL and P2P transfers and readable by routers `kv-connector` `quantization`
- [#65726](https://github.com/vllm-project/vllm/issues/65726) [Bug]: /v1/completions top_logprobs overwrites the sampled token's entry when candidates decode to the same string (byte fragments -> "")
- [#65707](https://github.com/vllm-project/vllm/issues/65707) [RFC]: [Draft] Split FusedMoEQuantConfig into static schema and runtime state `RFC` `quantization`
- [#65680](https://github.com/vllm-project/vllm/issues/65680) [Bug]: Kimi-K3 hybrid model (24 full-attn + 69 linear-attn) degenerates into repeated @ tokens on long prompts (vLLM 0.30.0, TP16, FLASHMLA) `kimi` `k3`
- [#65677](https://github.com/vllm-project/vllm/issues/65677) [Feature]: CPU : support heterogeneous memory (DDR + HBM) NUMA node via hwloc `feature request`
- [#65653](https://github.com/vllm-project/vllm/issues/65653) [Feature]: Support simultaneous Tool Calling and Structured Output via Grammar Union / Prefix Tree `feature request` `structured-output` `tool-calling`
- [#65650](https://github.com/vllm-project/vllm/issues/65650) [RFC]: Using Backend-Owned KV Cache Runtime Shapes `RFC` `quantization`
- [#65568](https://github.com/vllm-project/vllm/issues/65568) [Bug]: Kimi K3 latent-MoE tail fusion fails at startup when NVLS multicast is unavailable (multi-GPU Confidential Computing), and cannot be disabled `kimi` `k3`
- [#65587](https://github.com/vllm-project/vllm/issues/65587) [Bug]: VLLM_BATCH_INVARIANT=1 is not batch-invariant for Gemma-2-9B on H100 (FlashAttention sliding-window path under CUDA graphs) `bug` `batch-invariance`
- [#65564](https://github.com/vllm-project/vllm/issues/65564) [Bug]: Qwen3.5-9B forced named tool choice is ~11x slower on A100 with v0.27.1 than v0.31.0 `bug` `tool-calling`

#### 🔒 Closed Issues
- [#59203](https://github.com/vllm-project/vllm/issues/59203) [Bug][v0.32.0 release] No working block size on the release tag (both 64 and 128 fail); fix tracked in #60762
- [#42286](https://github.com/vllm-project/vllm/issues/42286) [New Model]: ZAYA1-8B
- [#41469](https://github.com/vllm-project/vllm/issues/41469) [Bug]: AttributeError: '_C' object has no attribute 'awq_dequantize' on Intel Arc B580 XPU (AWQ inference fails)
- [#38991](https://github.com/vllm-project/vllm/issues/38991) [Bug]: runai_safetensors_weights_iterator yields tensors in nondeterministic order, breaking FP8 inference on some platforms
- [#55775](https://github.com/vllm-project/vllm/issues/55775) [Bug]: MTP + FlashInfer long-context CUDA IMA / Xid 31 still on v0.27.1 (Qwen3.8-27B-NVFP4, RTX 5090, max-num-seqs=1)
- [#52778](https://github.com/vllm-project/vllm/issues/52778) CustomAllreduce admits cross-node TP=2 groups and dies in cudaIpcOpenMemHandle (custom_all_reduce.cuh:143 'invalid resource handle') on MNNVL GB200 NVL72
- [#61866](https://github.com/vllm-project/vllm/issues/61866) [ROCm][Perf] gfx950 spec-decode verify attention is up to 48x slower with AITER <= v0.1.25; bump to a release with ROCm/aiter#6336
- [#64433](https://github.com/vllm-project/vllm/issues/64433) [Bug]: vllm-rs render drops tools for tool_choice "none" and rejects empty content, unlike the Python frontend
- [#64814](https://github.com/vllm-project/vllm/issues/64814) [Bug]: Withdrawn
- [#65682](https://github.com/vllm-project/vllm/issues/65682) [RFC]: Bounded load/save admission for Mooncake Store
- [#65752](https://github.com/vllm-project/vllm/issues/65752) [Bug]: `/v1/responses` omits `completed_at` / `error` and sends `text: null`, so strict OpenAI-compatible clients reject `response.completed`
- [#65171](https://github.com/vllm-project/vllm/issues/65171) [Bug][Transformers Backend] HunyuanOCR fails with attention head dimension mismatch (128 vs 192)
- [#64431](https://github.com/vllm-project/vllm/issues/64431) [Bug]: DeepSeek V4.1 Python renderer ignores add_generation_prompt and continue_final_message
- [#65573](https://github.com/vllm-project/vllm/issues/65573) [Feature]: Support `mm_device_do_normalize` for Gemma 4
- [#63011](https://github.com/vllm-project/vllm/issues/63011) [Bug]: b12x attention backend advertises head_dim 64, but every head_dim 64 model crashes at the first forward (no valid NUM_MMA_KV typed shared-memory allocation)
- [#62264](https://github.com/vllm-project/vllm/issues/62264) [Bug]: --attention-backend b12x fails at startup without --block-size (impl checks block size before the platform applies the preferred one)
- [#65451](https://github.com/vllm-project/vllm/issues/65451) [Bug]: GLM-5.3 at max_model_len=1M crashes at startup on B300 (illegal memory access in TRT-LLM FMHA) since #64806 sparse-indexer decode chunking
- [#64939](https://github.com/vllm-project/vllm/issues/64939) [Bug]: Rust vllm-bench ignores --output-len for the sharegpt and hf datasets

### SGLang (`sgl-project/sglang`)

**Stars:** 38,473 · **Open issues:** 6,458 · **Last push:** <1h ago

On November 5, 2026, SGLang saw no new releases, but several significant updates were merged, including PR #44394 which added prefill support for the Torch compile graph and dynamic graph features for CPU, and #45717, which introduced compute building block support for the next generation of Xeon processors. Performance enhancements were also a focus, with PRs such as #48424 boosting the sgl-deep-gemm version to 0.2.6, and #48075 optimizing redundant QEM quadric accumulation in Hunyuan3D. Notably, a new issue (#48411) was raised regarding out-of-memory kills during KV allocations on Xeon servers, which could indicate underlying challenges with resource management in high-performance contexts. Overall, the day's activities reflect ongoing efforts to improve functionality and performance across various hardware platforms within the SGLang ecosystem.

#### ✅ Merged PRs
- [#44394](https://github.com/sgl-project/sglang/pull/44394) [Feat] [CPU] cpu-graph: Add prefill torch compile graph and dynamic graph support
- [#45717](https://github.com/sgl-project/sglang/pull/45717) [Feat] [Intel] CPU-core-binding: Support Compute Building Block for next Gen Xeon
- [#47632](https://github.com/sgl-project/sglang/pull/47632) [Perf] [AMD] attention: Forward decode graph variants through wrapper backends
- [#46922](https://github.com/sgl-project/sglang/pull/46922) [Test] cpu: Re-enable the subblock sparse attention test
- [#39793](https://github.com/sgl-project/sglang/pull/39793) [Feat] xing4_0: Add model support
- [#48467](https://github.com/sgl-project/sglang/pull/48467) [Fix] [NVIDIA] deepseek-v4: Pass a caller-owned multi-CTA counter buffer to the trtllm sparse MLA kernel
- [#48256](https://github.com/sgl-project/sglang/pull/48256) [CI] diffusion: Add the B200 baseline override for b200-cirrascale2
- [#48339](https://github.com/sgl-project/sglang/pull/48339) [CI] [NPU] nightly-4-npu-a3: Rebalance partitions, bound retries, retire GLM-5.2 16p accuracy
- [#48490](https://github.com/sgl-project/sglang/pull/48490) [Perf] [AMD] kimi-k3: Row-sharded MoE front, o_proj and stream for gfx950 prefill
- [#42198](https://github.com/sgl-project/sglang/pull/42198) [Perf] [AMD] custom-all-reduce: Select the fused AR+RMSNorm 1-stage kernel by token count and read volume
- [#48424](https://github.com/sgl-project/sglang/pull/48424) [Perf] deepseek_v4: bump sgl-deep-gemm to 0.2.6, FlashInfer-layout scales from DeepGEMM producers, current MQA logits API
- [#41294](https://github.com/sgl-project/sglang/pull/41294) [Perf] [NVIDIA] dsv41: Use the fused low-ratio compressor on Hopper
- [#48480](https://github.com/sgl-project/sglang/pull/48480) [Fix] kimi-k3: Make tool_choice required and none grammars end the turn
- [#48481](https://github.com/sgl-project/sglang/pull/48481) [Fix] kimi-k3: Validate message-level tools and let a forced call override JSON response_format
- [#41108](https://github.com/sgl-project/sglang/pull/41108) [Perf] mimo-v2: Optimize router GEMM with the HPC-Ops bf16xfp32 kernel
- [#44491](https://github.com/sgl-project/sglang/pull/44491) [Perf] qwen3: Fuse SiLU*mul with the NVFP4 quantization of down_proj in Qwen2MLP
- [#48075](https://github.com/sgl-project/sglang/pull/48075) [Perf] Hunyuan3D: Reduce redundant QEM quadric accumulation
- [#35792](https://github.com/sgl-project/sglang/pull/35792) [Fix] compressed-tensors: Honor .linear-wrapped ignore entries on fused shards
- [#47898](https://github.com/sgl-project/sglang/pull/47898) [Perf] [NVIDIA] fused-a-gemm: Relax the CuTe DSL kernel's K alignment from 1024 to 256
- [#48380](https://github.com/sgl-project/sglang/pull/48380) [Doc] agent-skills: Add JIT kernel performance guide and document more header-library helpers
- [#47676](https://github.com/sgl-project/sglang/pull/47676) [Perf] [NVIDIA] dsv4: Route padded decode replays through the metadata glue graph
- [#48328](https://github.com/sgl-project/sglang/pull/48328) [Fix] mamba: Give a lazy boundary snapshot its own slot instead of overwriting the keep slot
- [#34212](https://github.com/sgl-project/sglang/pull/34212) [Fix] [AMD] DSP: skip unused QuickAllReduce allocation for DCP groups
- [#47201](https://github.com/sgl-project/sglang/pull/47201) [Perf] [NVIDIA] speculative-decoding: Bind generic provider strategies
- [#48301](https://github.com/sgl-project/sglang/pull/48301) [Test] kv_canary: Drop min_p from the canary-info e2e sampling params
- [#48464](https://github.com/sgl-project/sglang/pull/48464) [Test] Remove unit tests added in Kimi-K3.1 PR
- [#48432](https://github.com/sgl-project/sglang/pull/48432) [Doc] [AMD] cookbook: Qwen3.8-Flash-Next MI355X, add the HiCache commands for concurrency 24-80
- [#48440](https://github.com/sgl-project/sglang/pull/48440) [Perf] [AMD] moe: Run the small-batch sort + stage-1 quant up to 1024 pairs on Kimi-K3
- [#48439](https://github.com/sgl-project/sglang/pull/48439) [Perf] [AMD] dflash: Row-shard the draft's target-hidden fc in prefill chunks
- [#48437](https://github.com/sgl-project/sglang/pull/48437) [Perf] [AMD] dsa: Split-K HIP sparse MLA for decode/verify
- [#48003](https://github.com/sgl-project/sglang/pull/48003) [Refactor] hicache: Move shared host backing and build unified host pools from layout views
- [#48005](https://github.com/sgl-project/sglang/pull/48005) [Refactor] mem_cache: Plan draft KV bands by retention lifetime
- [#48001](https://github.com/sgl-project/sglang/pull/48001) [Fix] spec: Write routed DFLASH and DSPARK context KV into the draft's own rows
- [#48004](https://github.com/sgl-project/sglang/pull/48004) [Refactor] mem_cache: Own state and fixed payloads in the KV storage plan and size from them
- [#48002](https://github.com/sgl-project/sglang/pull/48002) [Fix] server_args: Refuse a sharded-padded CP KV layout with unified memory
- [#48435](https://github.com/sgl-project/sglang/pull/48435) [Doc] kimi-k3.1: Point the cookbook install branch at kimi-k3.1-day-0
- [#48415](https://github.com/sgl-project/sglang/pull/48415) [Feat] model: Add basic Kimi-K3.1 support (NV, AMD)
- [#48429](https://github.com/sgl-project/sglang/pull/48429) [Doc] cookbook: Run the Kimi-K3.1-Pro MI35x PD Docker commands on the host network with RDMA
- [#47643](https://github.com/sgl-project/sglang/pull/47643) [Perf] [NVIDIA] mega_moe: Count EPLB load in-kernel
- [#47861](https://github.com/sgl-project/sglang/pull/47861) [Doc] cookbook: add Unlimited-OCR-2 NVIDIA platform recipes
- [#47235](https://github.com/sgl-project/sglang/pull/47235) [Fix] multimodal: Share typed identities for Kimi prepared inputs
- [#48417](https://github.com/sgl-project/sglang/pull/48417) [Doc] popular-models: Feature Kimi-K3.1-Pro first
- [#48327](https://github.com/sgl-project/sglang/pull/48327) [Refactor] scheduler: Release in-step finishes through the request retirer

#### 🐛 New Issues
- [#48411](https://github.com/sgl-project/sglang/issues/48411) [CI] Xeon: SPR socket0 server tests OOM-killed during KV allocation on sglang-spr08/18/19 💬3
- [#48356](https://github.com/sgl-project/sglang/issues/48356) [Bug] disaggregation: Qwen EAGLE PD decode can produce corrupted output after retraction 💬3
- [#48311](https://github.com/sgl-project/sglang/issues/48311) [CI] diffusion: perf checks depend on which runner a job lands on, and in-job retries can't fix a slow host 💬2
- [#48460](https://github.com/sgl-project/sglang/issues/48460) Importing sglang replaces `triton.next_power_of_2` with a host-only function, breaking other Triton kernels in the process 💬1
- [#48344](https://github.com/sgl-project/sglang/issues/48344) [RFC] mem_cache: Cross-branch KV page splicing and cursor fork/rewind for hybrid models (Qwen3.5 / GDN)
- [#48519](https://github.com/sgl-project/sglang/issues/48519) [RFC] scheduler: UniBoost, a starvation-bounded schedule policy (#48076-#48079)
- [#48506](https://github.com/sgl-project/sglang/issues/48506) [Bug] [NVIDIA] test/manual/ep/test_flashinfer_dispatcher.py: Every test errors on main, and the test needs a rewrite for FlashInfer 0.7.3's moe_ep API
- [#48502](https://github.com/sgl-project/sglang/issues/48502) [Bug] DeepSeek-V4.1-Flash: every inference request crashes with IndexError at logits_processor.py:692 on sglang 26396bf566 (empty hidden_states from V4.1 forward)
- [#48483](https://github.com/sgl-project/sglang/issues/48483) [Bug] [AMD] moe: GLM Gluon EP>1 32K prefill reads codes past the 2-GiB buffer-op window
- [#48482](https://github.com/sgl-project/sglang/issues/48482) Feature request: per-request time stats in scheduler outputs without enable_metrics
- [#48476](https://github.com/sgl-project/sglang/issues/48476) Support data-parallel attention/replicas inside one existing torch distributed world (in-process scheduler)
- [#48475](https://github.com/sgl-project/sglang/issues/48475) Feature request: extension points for externally defined models (registration of runtime classes, attention lookup, attention kernels, sampler logprobs)
- [#48474](https://github.com/sgl-project/sglang/issues/48474) Decouple per-request sampling seeds from `enable_deterministic_inference`'s kernel overrides; allow ignoring the generation config's EOS ids
- [#48473](https://github.com/sgl-project/sglang/issues/48473) Feature request: in-process output sink instead of the detokenizer/tokenizer sockets
- [#48472](https://github.com/sgl-project/sglang/issues/48472) Feature request: public single-iteration step API for an in-process `Scheduler`
- [#48465](https://github.com/sgl-project/sglang/issues/48465) [Feature] Metric for time to first answer token (after reasoning)
- [#48463](https://github.com/sgl-project/sglang/issues/48463) Feature request: overlap scheduling for externally registered linear-attention models using the mamba radix cache
- [#48462](https://github.com/sgl-project/sglang/issues/48462) Allow models outside sglang's architecture list to use the MLA KV cache (detect MLA from config, not architecture name)
- [#48461](https://github.com/sgl-project/sglang/issues/48461) `HybridLinearKVPool` ignores `v_head_dim` for the full-attention MHA pool (hybrid linear-attention models with V head dim != K head dim)
- [#48348](https://github.com/sgl-project/sglang/issues/48348) [Feature] [NPU] kimi-k3.1: Add model support and route DSA attention path on Ascend
- [#48403](https://github.com/sgl-project/sglang/issues/48403) [Bug] EPLB crashes with per_pass/per_token recorder modes
- [#48408](https://github.com/sgl-project/sglang/issues/48408) [Feature] Add an opt-in bounded matching window for LPM scheduling
- [#48346](https://github.com/sgl-project/sglang/issues/48346) [Feature] dp-attention: the per-step H2D transfer of global_num_tokens_gpu is overwritten before anything reads it
- [#48336](https://github.com/sgl-project/sglang/issues/48336) [Bug] GLM-5.3-Flash + glm47 tool grammar: enable_thinking=false bans </think>, so generation always runs to max_tokens

#### 🔒 Closed Issues
- [#38074](https://github.com/sgl-project/sglang/issues/38074) [NVFP4 MoE Marlin fallback] prepare_moe_nvfp4_layer_for_marlin leaks ~0.66 GiB/layer; old params retained by a {fqn: tensor} registry → OOM on ≤48GB cards
- [#34259](https://github.com/sgl-project/sglang/issues/34259) [Bug] Kimi-K3 - cross prompt reasoning leakage
- [#37931](https://github.com/sgl-project/sglang/issues/37931) [Bug] DeepSeek-V4-Flash-Vision-Exp on 2x DGX Spark: scheduler OOM-killed during weight load (cookbook cell dgx-spark|flash-vision|fp4)
- [#36226](https://github.com/sgl-project/sglang/issues/36226) [Performance] Multiple potential avoidable scheduler, sampling, and streaming overheads identified
- [#37150](https://github.com/sgl-project/sglang/issues/37150) [Feature] Tuning / per-GPU config for DSv4 top-k v2 cluster launch plan (kClusterFloor / kNumPersistentClusters / kCandidates)
- [#38129](https://github.com/sgl-project/sglang/issues/38129) [Bug] NGRAM cached requests miss newly inserted longer contexts
- [#38099](https://github.com/sgl-project/sglang/issues/38099) [Bug] NIXL staging reuses the send buffer too early and repeats completed sends
- [#48221](https://github.com/sgl-project/sglang/issues/48221) [CI] Arm64: test_moe.py fails with missing sgl_kernel.fused_experts_cpu on main

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 133,398 · **Open issues:** 2,608 · **Last push:** <1h ago

On November 5, 2026, llama.cpp released version 0.9.0, introducing OCP FP8 E4M3 quantization support, a new `flash_attn_ext_rows` operator for enhancing multi-sequence inference, and a generic batched tensor copy API. Key architectural additions include support for Clover, Limite, Metis-1.6, and Mistral Large 4, alongside expanded audio generation capabilities through Chatterbox TTS and Nemotron 3.5 Transcribe. Significant merged features include enhancements to real-time error handling in the server, improved performance for OpenCL decoding operations, and new support for the drama-3 text-to-speech model. Notably, the new issue raised about the server's inability to recover completed responses from expired replay sessions highlights ongoing challenges in user experience and system reliability.

#### 🚀 New Releases
- [b12121](https://github.com/ggml-org/llama.cpp/releases/tag/b12121) b12121
- [v0.9.0](https://github.com/ggml-org/llama.cpp/releases/tag/v0.9.0) v0.9.0
- [b12119](https://github.com/ggml-org/llama.cpp/releases/tag/b12119) b12119
- [b12118](https://github.com/ggml-org/llama.cpp/releases/tag/b12118) b12118
- [b12116](https://github.com/ggml-org/llama.cpp/releases/tag/b12116) b12116
- [b12114](https://github.com/ggml-org/llama.cpp/releases/tag/b12114) b12114
- [b12110](https://github.com/ggml-org/llama.cpp/releases/tag/b12110) b12110
- [b12109](https://github.com/ggml-org/llama.cpp/releases/tag/b12109) b12109
- [b12102](https://github.com/ggml-org/llama.cpp/releases/tag/b12102) b12102
- [b12101](https://github.com/ggml-org/llama.cpp/releases/tag/b12101) b12101

#### ✅ Merged PRs
- [#31623](https://github.com/ggml-org/llama.cpp/pull/31623) opencl: add DSV4_HC_PRE and DSV4_HC_POST
- [#31296](https://github.com/ggml-org/llama.cpp/pull/31296) Title: CUDA: fuse NVFP4 gate/up matmuls and GLU in MMQ
- [#30541](https://github.com/ggml-org/llama.cpp/pull/30541) llama : fix on-device state copy sizes for quantized KV caches
- [#31439](https://github.com/ggml-org/llama.cpp/pull/31439) ci: run self hosted cpu jobs on hf
- [#31632](https://github.com/ggml-org/llama.cpp/pull/31632) server : realtime: send an error event instead of crashing on exceptions
- [#31633](https://github.com/ggml-org/llama.cpp/pull/31633) opencl: improve decode perf with FA
- [#31545](https://github.com/ggml-org/llama.cpp/pull/31545) ui: open actions on right-click for chats, tabs, messages and models
- [#31613](https://github.com/ggml-org/llama.cpp/pull/31613) model, mtmd: drama-3 tts support
- [#31468](https://github.com/ggml-org/llama.cpp/pull/31468) ui: show text and page thumbnails for PDF attachments, stop endless conversion retries
- [#31348](https://github.com/ggml-org/llama.cpp/pull/31348) webgpu: return maxBufferSize from get_max_size and avoid whole-buffer bindings in memset/clear
- [#31605](https://github.com/ggml-org/llama.cpp/pull/31605) [SYCL] fix docker issue
- [#31631](https://github.com/ggml-org/llama.cpp/pull/31631) gguf-py : validate every tokenizer merge pair, not only the first
- [#31444](https://github.com/ggml-org/llama.cpp/pull/31444) common : delete common_get_path_from_env()
- [#31646](https://github.com/ggml-org/llama.cpp/pull/31646) llama.cpp : bump version to 0.9.0
- [#31644](https://github.com/ggml-org/llama.cpp/pull/31644) sync : ggml
- [#31635](https://github.com/ggml-org/llama.cpp/pull/31635) llama : follow ctx_other devices and flash attention in Gemma4 assistant
- [#31607](https://github.com/ggml-org/llama.cpp/pull/31607) Gate RVV code on the target extension
- [#31639](https://github.com/ggml-org/llama.cpp/pull/31639) common : do not allow `_` in sidecar separator
- [#31609](https://github.com/ggml-org/llama.cpp/pull/31609) fix llama-export-lora crash for bf16 base models
- [#31577](https://github.com/ggml-org/llama.cpp/pull/31577) opencl: improve q2_0 GEMV for Adreno
- [#31584](https://github.com/ggml-org/llama.cpp/pull/31584) ggml: bound views by the bytes their strides reach
- [#31144](https://github.com/ggml-org/llama.cpp/pull/31144) ggml : write host-buffer tensor data directly in gguf writer
- [#31620](https://github.com/ggml-org/llama.cpp/pull/31620) common : fix -hf tag matching inside longer quant names
- [#31289](https://github.com/ggml-org/llama.cpp/pull/31289) hexagon: add LIGHTNING_INDEXER support

#### 🐛 New Issues
- [#31640](https://github.com/ggml-org/llama.cpp/issues/31640) Misc. bug: WebUI: completed response cannot be recovered after replay session expires, resulting in a generic stream error `bug-unconfirmed` 💬1
- [#31704](https://github.com/ggml-org/llama.cpp/issues/31704) Eval bug: cancelled long embedding is never released — server then serves nothing while /health reports ok
- [#31700](https://github.com/ggml-org/llama.cpp/issues/31700) Misc. bug: cache_reuse disabled for multimodal models (Qwen-VL) `bug-unconfirmed`
- [#31696](https://github.com/ggml-org/llama.cpp/issues/31696) Misc. bug: server: realtime session.update asking for 24 kHz is accepted, the audio is still read as 16 kHz `bug-unconfirmed`
- [#31691](https://github.com/ggml-org/llama.cpp/issues/31691) Feature Request: ricursiveAI/Ripple-65B-Preview support `enhancement`
- [#31690](https://github.com/ggml-org/llama.cpp/issues/31690) Android
- [#31689](https://github.com/ggml-org/llama.cpp/issues/31689) server: /v1/realtime audio output ignores output language/voice (non-English speech gets English accent; llama-tts with --tts-lang works)
- [#31685](https://github.com/ggml-org/llama.cpp/issues/31685) SYCL AOT (GGML_SYCL_DEVICE_ARCH=arl-h) produces garbage output (GGGG...) for models > 4 GB, fixed by buffer size flag `bug-unconfirmed`
- [#31686](https://github.com/ggml-org/llama.cpp/issues/31686) Eval bug: Chatterbox Multilingual drops letters with diacritics (ą ś ż …) because the original NFKD/lowercase preprocessing is missing `bug-unconfirmed`
- [#31680](https://github.com/ggml-org/llama.cpp/issues/31680) Eval bug: POWER10: llamafile sgemm (MMA) produces corrupted output for Flint (MoE); correct with GGML_LLAMAFILE=OFF `bug-unconfirmed`
- [#31678](https://github.com/ggml-org/llama.cpp/issues/31678) Feature Request: SYCL FP16 build for Windows `enhancement`
- [#31676](https://github.com/ggml-org/llama.cpp/issues/31676) Compile bug: cannot build for spacemit soc with upstream binutils `bug-unconfirmed`
- [#31675](https://github.com/ggml-org/llama.cpp/issues/31675) Eval bug: --moe-cache-mib aborts at load in llama_moe_cache::impl::copy on ROCm/HIP (RX 6800 XT, gfx1030, Qwen3.6-35B-A3B) — cache size independent
- [#31670](https://github.com/ggml-org/llama.cpp/issues/31670) Eval bug: GPU free memory discovery is incorrect in WSL2 on NVIDIA RTX Spark N1X laptops `bug-unconfirmed`
- [#31661](https://github.com/ggml-org/llama.cpp/issues/31661) Eval bug: model set to use gpu but still running on cpu `bug-unconfirmed`
- [#31659](https://github.com/ggml-org/llama.cpp/issues/31659) Misc. bug: llama-perplexity returns exit code 0 after failed evaluations `bug-unconfirmed`
- [#31656](https://github.com/ggml-org/llama.cpp/issues/31656) Eval bug: draft-dflash (DFlash2) aborts in post_decode seq_rm on hybrid Qwen3.8-27B with --parallel 8
- [#31654](https://github.com/ggml-org/llama.cpp/issues/31654) Historical HIP TILE flash-attention repeatability difference with an experimental guarded-loop patch (MI210, D512/D576)
- [#31651](https://github.com/ggml-org/llama.cpp/issues/31651) [Apple] Metal: tiled K-quant GEMM for 64-lane GPUs - 6.8x matmul, 2.7x prefill
- [#31645](https://github.com/ggml-org/llama.cpp/issues/31645) Hexagon backend: garbage output on HTP0 for Snapdragon 8s Gen 3 (Hexagon v73), CPU/OpenCL correct `bug-unconfirmed`

#### 🔒 Closed Issues
- [#25664](https://github.com/ggml-org/llama.cpp/issues/25664) Eval bug: vk::DeviceLostError on linux-7.x kernels (RADV_STRIXHALO)
- [#27547](https://github.com/ggml-org/llama.cpp/issues/27547) Eval bug: SYCL dual-GPU stuck during model load
- [#27373](https://github.com/ggml-org/llama.cpp/issues/27373) Misc. bug: [SYCL] Degraded performance with MTP and Q3 quants
- [#27422](https://github.com/ggml-org/llama.cpp/issues/27422) Misc. bug: System prompt leaking between different consumers / slots
- [#29130](https://github.com/ggml-org/llama.cpp/issues/29130) Feature Request: Slow prompt processing when MoE experts are read from disk via mmap - an optimization using O_DIRECT
- [#27090](https://github.com/ggml-org/llama.cpp/issues/27090) Eval bug: Qwen3.8-27B (qwen35 hybrid) llama-server crashes silently at ~520K prefill tokens with YaRN rope-scale 4 (just under 2x yarn-orig-ctx), b10434 CUDA
- [#28368](https://github.com/ggml-org/llama.cpp/issues/28368) cache_prompt reuse changes computed logprobs on a plain (non-hybrid) transformer — reproducible by toggling cache_prompt alone on an otherwise-identical warmed server
- [#28840](https://github.com/ggml-org/llama.cpp/issues/28840) Eval bug: Vulkan device lost (crash) when processing images — CLIP graph flash-attention auto-enabled on unsupported backend
- [#29073](https://github.com/ggml-org/llama.cpp/issues/29073) Feature Request: Passing environment variables to child processes in router mode
- [#29119](https://github.com/ggml-org/llama.cpp/issues/29119) Eval bug: can not run models
- [#29192](https://github.com/ggml-org/llama.cpp/issues/29192) Feature Request: Add opt-in CLI flags to llama-server
- [#31626](https://github.com/ggml-org/llama.cpp/issues/31626) Misc. bug: server: a tool with an invalid schema in /v1/realtime crashes llama-server
- [#31078](https://github.com/ggml-org/llama.cpp/issues/31078) Feature Request: Metis-1.6, Logos & Praxis
- [#31614](https://github.com/ggml-org/llama.cpp/issues/31614) Eval bug: Execution aborted when the NONE operation is present.

### Ollama (`ollama/ollama`)

**Stars:** 185,945 · **Open issues:** 4,584 · **Last push:** 1h ago

On November 5, 2026, there were no new releases for Ollama, but several important updates were merged into the codebase. The version bump of `llama.cpp` to b12111 included key enhancements, while the MLX package now supports YaRN scaling for both Qwen3 and Qwen3.5, and it also rejects unsupported CUDA devices to improve compatibility. Additionally, the AutoTrust decision model was added to the MLX, which could enhance decision-making processes. One of the most noteworthy new issues reported today involves Qwen2.5-Coder and Qwen3 failing to call native tools properly on Ollama version 0.40.13, indicating potential regression that may require urgent attention.

#### ✅ Merged PRs
- [#19530](https://github.com/ollama/ollama/pull/19530) llama.cpp: version bump b12111
- [#19231](https://github.com/ollama/ollama/pull/19231) mlx: support YaRN scaling in Qwen3 and Qwen3.5
- [#19521](https://github.com/ollama/ollama/pull/19521) mlx: reject unsupported CUDA devices
- [#19399](https://github.com/ollama/ollama/pull/19399) Add AutoTrust decision model to MLX

#### 🐛 New Issues
- [#19524](https://github.com/ollama/ollama/issues/19524) [Bug] Qwen2.5-Coder and Qwen3 fail native tool calling on Ollama 0.40.13 `bug` 💬2
- [#19529](https://github.com/ollama/ollama/issues/19529) `{{ .Function }}` in the qwen2.5 library template renders a Go struct dump instead of JSON, so models misspell tool names and the calls are dropped 💬1
- [#19514](https://github.com/ollama/ollama/issues/19514) Provide API helping at checking for updates and applying them `feature request` 💬1
- [#19518](https://github.com/ollama/ollama/issues/19518) Can an older library manifest still be pulled by digest after its tag is updated? 💬1
- [#19517](https://github.com/ollama/ollama/issues/19517) ollama-cloud: deepseek-v4-pro rejects max_tokens > 65536 despite model's ~384k output capability `cloud` 💬1
- [#19512](https://github.com/ollama/ollama/issues/19512) Reduce Windows Installer filesize `feature request`
- [#19511](https://github.com/ollama/ollama/issues/19511) cloud: /api/usage no longer returns session/weekly usage percentages, only request counts 💬1
- [#19519](https://github.com/ollama/ollama/issues/19519) WSL2: GPU memory on NVIDIA RTX Spark N1X laptops is capped at the guest's free RAM `bug`

#### 🔒 Closed Issues
- [#12532](https://github.com/ollama/ollama/issues/12532) Cloud usage stats.
- [#18262](https://github.com/ollama/ollama/issues/18262) mlxrunner: Qwen YaRN context extension is ignored above 262K
- [#19514](https://github.com/ollama/ollama/issues/19514) Provide API helping at checking for updates and applying them
- [#19512](https://github.com/ollama/ollama/issues/19512) Reduce Windows Installer filesize
- [#19129](https://github.com/ollama/ollama/issues/19129) mlxrunner: Qwen3 runtime ignores YaRN rope scaling

### LiteLLM (`BerriAI/litellm`)

**Stars:** 62,723 · **Open issues:** 5,710 · **Last push:** <1h ago

On November 5, 2026, LiteLLM released version v1.108.0 along with the release candidate v1.107.0-rc.3, enhancing model management with a deprecation banner and various user interface improvements. Key fixes in merged pull requests included enhancements to cost mapping and UI functionalities, such as allowing team admins to edit models and addressing issues with Azure message handling. Notably, a new bug was raised regarding performance lag in the MCP tools related to legacy subscription listeners, highlighting ongoing concerns in the system's robustness. This day's developments reflect continued stabilization and feature enhancement efforts in LiteLLM's offerings.

#### 🚀 New Releases
- [v1.107.0-rc.3](https://github.com/BerriAI/litellm/releases/tag/v1.107.0-rc.3) v1.107.0-rc.3
- [v1.108.0](https://github.com/BerriAI/litellm/releases/tag/v1.108.0) v1.108.0
- [v1.106.7](https://github.com/BerriAI/litellm/releases/tag/v1.106.7) v1.106.7

#### ✅ Merged PRs
- [#49815](https://github.com/BerriAI/litellm/pull/49815) fix(cost_map): fill missing Claude capability fields from the family baseline
- [#50080](https://github.com/BerriAI/litellm/pull/50080) feat(ui): show model deprecation banner on the models page
- [#49970](https://github.com/BerriAI/litellm/pull/49970) fix(ui): let team admins edit models on team service account keys
- [#50140](https://github.com/BerriAI/litellm/pull/50140) fix(nvidia_riva): send the api key exactly once by calling riva over grpc directly
- [#50007](https://github.com/BerriAI/litellm/pull/50007) fix(ui): send a team admin's member key edits on the first save
- [#50136](https://github.com/BerriAI/litellm/pull/50136) fix(backport): backport 21 main fixes plus 2 prerequisites to lts/1.108.x for v1.108.1
- [#50046](https://github.com/BerriAI/litellm/pull/50046) fix(azure): strip output-only reasoning content from Responses input
- [#49856](https://github.com/BerriAI/litellm/pull/49856) feat(accounting): add opt-in SpendLogs ledger
- [#50132](https://github.com/BerriAI/litellm/pull/50132) fix(proxy): treat Postgres restart and shutdown errors as DB unavailable, not poison spend-log rows
- [#50138](https://github.com/BerriAI/litellm/pull/50138) chore(cost-map): add openai batch image output prices from the pricing page
- [#50112](https://github.com/BerriAI/litellm/pull/50112) refactor(ui): move models text onto i18n
- [#50110](https://github.com/BerriAI/litellm/pull/50110) refactor(ui): move shell, entry and public hub text onto i18n
- [#50128](https://github.com/BerriAI/litellm/pull/50128) fix(bedrock): add GovCloud Kimi, Haiku and Grok prices
- [#50129](https://github.com/BerriAI/litellm/pull/50129) fix(github_copilot): backport custom-client connections to rc/1.107.0 (#50116)
- [#49993](https://github.com/BerriAI/litellm/pull/49993) fix(proxy): answer an upstream overload with 503 server_is_overloaded on OpenAI routes
- [#50134](https://github.com/BerriAI/litellm/pull/50134) chore(cost-map): add openai gpt-image-2.6-sunburst and gpt-image-2.6-flare from the pricing page
- [#47484](https://github.com/BerriAI/litellm/pull/47484) fix(least-busy): reserve the picked deployment so a burst of requests spreads out
- [#50063](https://github.com/BerriAI/litellm/pull/50063) fix(cost_calculator): keep regional and speed multipliers for per-call custom prices and log the billed per-call entry
- [#50062](https://github.com/BerriAI/litellm/pull/50062) fix(cost): bill Batch cached tokens at the Standard cache price when a row has no Batch cache price
- [#49947](https://github.com/BerriAI/litellm/pull/49947) fix(guardrails): apply guardrail masks to Bedrock InvokeModel Claude requests and replies
- [#50116](https://github.com/BerriAI/litellm/pull/50116) fix(github_copilot): let per-user connections work with a custom GitHub client ID
- [#50121](https://github.com/BerriAI/litellm/pull/50121) fix(bedrock): backfill GovCloud service-tier prices
- [#50120](https://github.com/BerriAI/litellm/pull/50120) ci(unit): stop the full history clone on the db-and-spend shard, fetch the schema merge base by sha
- [#50114](https://github.com/BerriAI/litellm/pull/50114) test: make three flaky unit tests deterministic
- [#50117](https://github.com/BerriAI/litellm/pull/50117) fix(bedrock): remove GovCloud Kimi K3 bedrock_mantle rows
- [#49589](https://github.com/BerriAI/litellm/pull/49589) fix(auth): align cloud credential loading and expiry with the Python SDKs
- [#50118](https://github.com/BerriAI/litellm/pull/50118) test(skills): drop the archive rejection test whose zip-byte ids differ across xdist workers
- [#49852](https://github.com/BerriAI/litellm/pull/49852) feat(proxy): authenticate billing metrics with a cognito bearer token
- [#49957](https://github.com/BerriAI/litellm/pull/49957) fix(responses): keep the system prompt in input for json_object on the chat to responses bridge
- [#50090](https://github.com/BerriAI/litellm/pull/50090) test: fix stale unit tests on 1.108
- [#50091](https://github.com/BerriAI/litellm/pull/50091) test: fix stale unit tests on 1.108 LTS
- [#50082](https://github.com/BerriAI/litellm/pull/50082) chore(cost-map): openai context fixes, azure gpt-6 flex pricing, bedrock govcloud and gmi rows
- [#50094](https://github.com/BerriAI/litellm/pull/50094) chore(databricks): add retirement successors and kimi-k2-7 retirement date from the Databricks retired models page
- [#50100](https://github.com/BerriAI/litellm/pull/50100) test(observability): reserve sink port throughout outage
- [#50093](https://github.com/BerriAI/litellm/pull/50093) feat(cost-map): add baseten Kimi-K3.1-Pro
- [#49863](https://github.com/BerriAI/litellm/pull/49863) fix(azure)!: answer 401 when Entra rejects the deployment's credential
- [#50095](https://github.com/BerriAI/litellm/pull/50095) chore(cost-map): add fireworks kimi k3.1 pro serverless pricing
- [#41011](https://github.com/BerriAI/litellm/pull/41011) fix(guardrails)!: check Anthropic and Responses request tools in tool_permission pre_call
- [#49824](https://github.com/BerriAI/litellm/pull/49824) fix(proxy): charge a video's provider-reported cost once, on the first poll that sees it completed
- [#49980](https://github.com/BerriAI/litellm/pull/49980) feat: update EmpirioLabs models in model_prices_and_context_window.json
- [#50088](https://github.com/BerriAI/litellm/pull/50088) ci: run the OSV scan and unit tests on stable, rc and lts branches (#50086) [backport lts/1.108.x]
- [#50086](https://github.com/BerriAI/litellm/pull/50086) ci: run the OSV scan and unit tests on stable, rc and lts branches
- [#50014](https://github.com/BerriAI/litellm/pull/50014) test(integration): poll for the cached JWT rejection sentinel instead of a single Redis read
- [#50087](https://github.com/BerriAI/litellm/pull/50087) ci: run the OSV scan and unit tests on stable, rc and lts branches (#50086) [backport stable/1.108.x]
- [#49991](https://github.com/BerriAI/litellm/pull/49991) refactor(ui): move playground and chat text onto i18n
- [#49992](https://github.com/BerriAI/litellm/pull/49992) refactor(ui): move logs and usage text onto i18n
- [#49994](https://github.com/BerriAI/litellm/pull/49994) refactor(ui): move keys, projects and cost text onto i18n
- [#49941](https://github.com/BerriAI/litellm/pull/49941) fix(router): stamp the failed deployment on every endpoint's attempt
- [#49977](https://github.com/BerriAI/litellm/pull/49977) feat(decisions): add EmpirioLabs AI as a decisions provider
- [#50076](https://github.com/BerriAI/litellm/pull/50076) test(perf): remove the database_upgrade_5rps e2e case and its harness tests
- [#49843](https://github.com/BerriAI/litellm/pull/49843) refactor: replace accounting event scaffolding with SpendLogs projection
- [#47398](https://github.com/BerriAI/litellm/pull/47398) fix(logging): don't leak redacted reasoning via provider_specific_fields
- [#49984](https://github.com/BerriAI/litellm/pull/49984) test(e2e): retire the quiet_stack lock and batch the claude_code model registration
- [#49951](https://github.com/BerriAI/litellm/pull/49951) feat(openai): bill gov.api.openai.com FedRAMP endpoint with 1.1x uplift

#### 🐛 New Issues
- [#50065](https://github.com/BerriAI/litellm/issues/50065) [Bug]: v1.108.0 MCP tools/list blocks 18-50 s on legacy subscription listener after notifications/initialized 💬3
- [#50033](https://github.com/BerriAI/litellm/issues/50033) [Feature]: Opt-in upstream error details for OpenAPI-backed MCP tools 💬2
- [#50070](https://github.com/BerriAI/litellm/issues/50070) [Bug]: `/v1/messages` to Vertex Claude sends `messages` before `system`/`tools`, and the prompt cache misses on tool-loop rounds `bug` `llm translation` 💬2
- [#50024](https://github.com/BerriAI/litellm/issues/50024) [Bug]: Azure Messages-to-Responses detour drops encrypted reasoning; follow-up to #40451 / LIT-7419 `llm translation` 💬2
- [#50029](https://github.com/BerriAI/litellm/issues/50029) [Bug]: Sticky Session not working - Router always sends Request to a different Endpoint `bug` `llm translation` 💬2
- [#50059](https://github.com/BerriAI/litellm/issues/50059) [Bug]: nvidia_riva sends no authorization header on plaintext gRPC and duplicates it over TLS (riva-client version dependent) `bug` 💬1
- [#50099](https://github.com/BerriAI/litellm/issues/50099) Complexity Router: Claude Code Subagent Overwrites Parent's user_turn Tier Pin (Not Covered by #48701) `llm translation` `claude code` 💬1
- [#50023](https://github.com/BerriAI/litellm/issues/50023) [Bug]: Messages-to-Responses bridge defaults JSON schema strictness to false while Messages-to-Chat uses true `llm translation` 💬1
- [#50030](https://github.com/BerriAI/litellm/issues/50030) [Bug]: False `BudgetExceededError` on `/vertex_ai` passthrough due to duplicate `user_api_key_auth` call leaking budget reservations and 1M-token fallback for Gemini `"contents"` `bug` `llm translation` 💬1
- [#50127](https://github.com/BerriAI/litellm/issues/50127) [Bug]: Requests blocked by a pre_call guardrail are stored in spend logs with the text that got them blocked `bug` `llm translation`
- [#50124](https://github.com/BerriAI/litellm/issues/50124) [Bug]: Key budget is not charged when the provider's response has missing or malformed usage `llm translation`
- [#50125](https://github.com/BerriAI/litellm/issues/50125) [Bug]: max_budget admits calls after spend has crossed it (11 calls on a budget that fits 9)
- [#50113](https://github.com/BerriAI/litellm/issues/50113) [Feature]: add service_tier label to litellm_proxy_failed_requests_metric `llm translation`
- [#50104](https://github.com/BerriAI/litellm/issues/50104) [Bug]: Claude on Bedrock behind the OpenAI Agents SDK: deferred tool not found after tool search, search record lost on later turns, compaction param dropped on /v1/messages `llm translation`
- [#50084](https://github.com/BerriAI/litellm/issues/50084) [Docs/Bug]: health check routing does not exclude a dead deployment until the first background health check finishes, so the first requests after startup pay the full timeout `llm translation`
- [#50056](https://github.com/BerriAI/litellm/issues/50056) Can the provider logo in Model Management be customized for models routed through an OpenAI/Anthropic-compatible gateway? `llm translation`
- [#50055](https://github.com/BerriAI/litellm/issues/50055) [Bug]: /v1/messages guardrail tool write-back drops web_search server tools and turns mcp_toolset into litellm_unnamed_tool_0 `llm translation`
- [#50054](https://github.com/BerriAI/litellm/issues/50054) [Feature]: Queue requests at capacity by priority, with fair turns between tenants (priority has no effect under load today) `llm translation`

#### 🔒 Closed Issues
- [#14457](https://github.com/BerriAI/litellm/issues/14457) [Bug]: Usage data lost when streaming responses are terminated early by client disconnect
- [#30765](https://github.com/BerriAI/litellm/issues/30765) [Bug]: `/v1/messages` streaming drops first text_delta after thinking -> text block transition
- [#21115](https://github.com/BerriAI/litellm/issues/21115) request to update cloudflare workers ai provider implementation to reflect cloudflare’s expanded ai api
- [#36168](https://github.com/BerriAI/litellm/issues/36168) [Bug]: streaming drops upstream `usage` when the final chunk has a non-empty `choices` array (cached_tokens lost, cost billed at full input rate)
- [#40583](https://github.com/BerriAI/litellm/issues/40583) [Bug]: custom_code and tool_permission guardrails cannot see or block MCP tools sent via Anthropic /v1/messages format
- [#35236](https://github.com/BerriAI/litellm/issues/35236) [Bug]: Gemini Flash 3.6 not working with image_url in tool response
- [#36917](https://github.com/BerriAI/litellm/issues/36917) [Bug]: Anthropic /v1/messages: role:"system" messages inside messages[] are silently dropped
- [#38383](https://github.com/BerriAI/litellm/issues/38383) [Feature]: Re-land the asqav audit-log callback (merged PR #30238 never reached a release)
- [#36083](https://github.com/BerriAI/litellm/issues/36083) [Bug]: v1.95.0 streaming usage drops cached_tokens and overcharges cached input
- [#50059](https://github.com/BerriAI/litellm/issues/50059) [Bug]: nvidia_riva sends no authorization header on plaintext gRPC and duplicates it over TLS (riva-client version dependent)

### Unsloth (`unslothai/unsloth`)

**Stars:** 79,057 · **Open issues:** 443 · **Last push:** <1h ago

On November 5, 2026, Unsloth released version v0.1.915-beta, which features the new Qwen3.8-Flash-Next model, improved customization options for Glass themes now in Beta, and enhanced browser capabilities that allow models to interact with files directly. Key merged pull requests include implementing CUDA graphs by default for memory efficiency in plain generate() functions, preserving refusal messages in imported chats, and refining Studio functionalities, such as the handling of audio memory estimates and the decoding of escaped text in spreadsheet previews. However, the day also saw notable issues arise, including a bug report regarding the chat template for gemma-4-thinking that removes reasoning, which has garnered attention from users.

#### 🚀 New Releases
- [v0.1.915-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.915-beta) Improved Customization + Glass + Browser Use

#### ✅ Merged PRs
- [#16691](https://github.com/unslothai/unsloth/pull/16691) Decode with CUDA graphs by default in plain generate(), with memory release and an eager fallback
- [#16628](https://github.com/unslothai/unsloth/pull/16628) Studio: state the audio memory estimate in placement refusals
- [#14256](https://github.com/unslothai/unsloth/pull/14256) README: say UNSLOTH_LLAMA_CPP_BACKEND picks the GGUF chat build, not PyTorch
- [#16709](https://github.com/unslothai/unsloth/pull/16709) Capability registry: refuse tensor parallel where tp_native cannot shard, and add the zoo MoE families
- [#16599](https://github.com/unslothai/unsloth/pull/16599) Studio: preserve refusal messages in imported chats
- [#16592](https://github.com/unslothai/unsloth/pull/16592) Studio: decode escaped text in spreadsheet previews
- [#16704](https://github.com/unslothai/unsloth/pull/16704) Native quant tests: make peft see torchao as absent when the test blocks it
- [#16700](https://github.com/unslothai/unsloth/pull/16700) Studio video small host: price the encoder converted beside the cast misses, cast an oversized DiT from its source shards
- [#16696](https://github.com/unslothai/unsloth/pull/16696) Studio: read the SDXL v-prediction markers beside the weight load and once per commit, skip the UNet scheme probe
- [#16678](https://github.com/unslothai/unsloth/pull/16678) Studio: keep Qwen-Image's bf16 text encoder automatically when the card has room
- [#16690](https://github.com/unslothai/unsloth/pull/16690) Kernels: keep sequence length out of Triton specialization in the RoPE kernels
- [#16638](https://github.com/unslothai/unsloth/pull/16638) Refuse tensor parallel on blocks that own parameters in the registry
- [#16675](https://github.com/unslothai/unsloth/pull/16675) Studio: fold an unchanged LoRA set into a resident denoiser, restore it exactly before a change
- [#15097](https://github.com/unslothai/unsloth/pull/15097) Studio: send custom headers on remote connections
- [#16637](https://github.com/unslothai/unsloth/pull/16637) Carry the float8 training mode into the parallel capability query
- [#16688](https://github.com/unslothai/unsloth/pull/16688) Bump install.sh / install.ps1 pins to unsloth>=2026.11.2
- [#15611](https://github.com/unslothai/unsloth/pull/15611) Unsloth Studio / Desktop: Flows Train node with a hold-out split, simple fields first and live status
- [#16234](https://github.com/unslothai/unsloth/pull/16234) Flex wrapper: keep the causal mask inside compiled blocks on torch < 2.10
- [#16621](https://github.com/unslothai/unsloth/pull/16621) Studio: drop the unfused QKV copies after the SDXL fuse, and decline the speed profile when kept copies would not fit
- [#14603](https://github.com/unslothai/unsloth/pull/14603) Studio: saving a preset no longer brings it back on the model it was tuned on
- [#16567](https://github.com/unslothai/unsloth/pull/16567) Studio: forward a request's other chat_template_kwargs to llama-server
- [#16677](https://github.com/unslothai/unsloth/pull/16677) Studio i18n: translate the browser tool steps and program download prompts in every locale
- [#15093](https://github.com/unslothai/unsloth/pull/15093) Studio: remember thinking Off after eject
- [#15226](https://github.com/unslothai/unsloth/pull/15226) Fused preference loss: fall back when a global forward hook is registered
- [#16612](https://github.com/unslothai/unsloth/pull/16612) fix(studio): skip hidden HTML subtrees in RAG parsing
- [#16671](https://github.com/unslothai/unsloth/pull/16671) Confine Windows glass wallpaper blur to the inner page pane
- [#16676](https://github.com/unslothai/unsloth/pull/16676) Apply appearance contrast once per slider drag
- [#16631](https://github.com/unslothai/unsloth/pull/16631) fix(studio): rewrite S3 audio paths in single-record JSON manifests
- [#16665](https://github.com/unslothai/unsloth/pull/16665) pip: publish the torch 2.13 and 2.14 extras
- [#16622](https://github.com/unslothai/unsloth/pull/16622) Studio: MLX training from a saved adapter, Continued Pretraining, streamed and audio datasets, with exact resume
- [#16666](https://github.com/unslothai/unsloth/pull/16666) Studio: let search_conversation find this turn's results on API providers
- [#15934](https://github.com/unslothai/unsloth/pull/15934) cuDNN SDPA: keep known-bad decode and NaN-dQ shapes off cuDNN before torch 2.14 / 2.15
- [#16640](https://github.com/unslothai/unsloth/pull/16640) Studio video: load a commit-pinned cached snapshot offline when refs/main is missing
- [#16639](https://github.com/unslothai/unsloth/pull/16639) Studio H3: release resident denoiser blocks' host copies and give the RAM to the conditioner
- [#16641](https://github.com/unslothai/unsloth/pull/16641) Join the Windows glass sidebar and title bar over chat wallpaper
- [#16669](https://github.com/unslothai/unsloth/pull/16669) Model picker contracts: read the GGUF row and gear pins from variantSelectMeta
- [#16424](https://github.com/unslothai/unsloth/pull/16424) Legacy CLI: apply --chunk_size and --stride to a text file passed as --dataset
- [#15632](https://github.com/unslothai/unsloth/pull/15632) Block Swap blocker: Qwen3.8-Flash-Next-FP8 can't train with offload_layers, its FP8 n-gram table loads without its weight_scale
- [#16540](https://github.com/unslothai/unsloth/pull/16540) Improve model-load error guidance and shorten failure notifications
- [#16619](https://github.com/unslothai/unsloth/pull/16619) feat(studio): price GLM-5.3-Flash oQ quants as unsloth-zoo loads them
- [#16212](https://github.com/unslothai/unsloth/pull/16212) Studio: check the weight index of a module path that only reads as the root
- [#16120](https://github.com/unslothai/unsloth/pull/16120) Studio: keep native tool calls in mixed ShareGPT chats and render null-content calls on Qwen3
- [#16596](https://github.com/unslothai/unsloth/pull/16596) Block compile: checkpoint recompute reuses the forward graph (shared_kv_states, output collector)
- [#16618](https://github.com/unslothai/unsloth/pull/16618) fix(studio): load the MLX training dataset before the model
- [#16658](https://github.com/unslothai/unsloth/pull/16658) Studio: remember download answers for a site or every site, programs included
- [#16644](https://github.com/unslothai/unsloth/pull/16644) Studio: let browser use read, click and edit files in the browser panel
- [#16642](https://github.com/unslothai/unsloth/pull/16642) Label the Glass theme as BETA
- [#16660](https://github.com/unslothai/unsloth/pull/16660) Studio: show Run settings gear on every GGUF quant row
- [#16643](https://github.com/unslothai/unsloth/pull/16643) Studio: glass theme polish and a composer position slider
- [#16609](https://github.com/unslothai/unsloth/pull/16609) Diffusion tests: pin the NVIDIA-host spoof and assert ROCm keeps the stock path
- [#16620](https://github.com/unslothai/unsloth/pull/16620) Studio: size streamed SDXL UNet leaves from the denoise peak and lend them to the VAE decode
- [#16519](https://github.com/unslothai/unsloth/pull/16519) Studio: LiquidAI d1 and Decider decision models, train LFM3 into d1
- [#16498](https://github.com/unslothai/unsloth/pull/16498) Studio: report bad decision datasets before the model downloads
- [#16461](https://github.com/unslothai/unsloth/pull/16461) MLX: run DPO, ORPO, KTO, GRPO and CPO through trl, and stop blocking SFT arguments zoo honors
- [#16591](https://github.com/unslothai/unsloth/pull/16591) Studio: show the newest Kimi models in the model picker
- [#15604](https://github.com/unslothai/unsloth/pull/15604) Unsloth Studio / Desktop: Data Recipes inside Flows, editable column by column, with one-click migration
- [#16610](https://github.com/unslothai/unsloth/pull/16610) Studio diffusion: show whether group offload keeps the transformer on the GPU or streams it every step
- [#16499](https://github.com/unslothai/unsloth/pull/16499) Studio: show how to call the Decision API from code
- [#16577](https://github.com/unslothai/unsloth/pull/16577) Studio: keep custom spellings when another window saves voice settings
- [#16475](https://github.com/unslothai/unsloth/pull/16475) Studio: move to mcp 2 and fastmcp 4
- [#16510](https://github.com/unslothai/unsloth/pull/16510) Studio: keep non-English text in structured Laya instructions
- [#16495](https://github.com/unslothai/unsloth/pull/16495) Studio: keep indentation in sent messages
- [#16511](https://github.com/unslothai/unsloth/pull/16511) Studio: let Laya fine-tunes answer from their GGUF export
- [#16608](https://github.com/unslothai/unsloth/pull/16608) Studio: show status between tool rounds and while context compaction runs
- [#16497](https://github.com/unslothai/unsloth/pull/16497) Studio: open Try after Use in Decision API for Clef and LLM fine-tunes
- [#16496](https://github.com/unslothai/unsloth/pull/16496) Studio: ask Laya questions without instructions by their id
- [#16483](https://github.com/unslothai/unsloth/pull/16483) Studio: list third-party image LoRAs from model folders
- [#16589](https://github.com/unslothai/unsloth/pull/16589) Studio: keep chat settings changed in another window
- [#16529](https://github.com/unslothai/unsloth/pull/16529) fix(studio): reject ambiguous S3 audio references
- [#16578](https://github.com/unslothai/unsloth/pull/16578) Studio: keep turn bookmarks made in another window
- [#16490](https://github.com/unslothai/unsloth/pull/16490) Studio: keep long replies with escaped math streaming smoothly
- [#16559](https://github.com/unslothai/unsloth/pull/16559) Forward the model argument through update_weight_conversions overrides (transformers 5.21+)
- [#16522](https://github.com/unslothai/unsloth/pull/16522) Studio: attach saved Library files to the current chat
- [#16491](https://github.com/unslothai/unsloth/pull/16491) Studio: keep image follow-ups running after the tab closes
- [#16634](https://github.com/unslothai/unsloth/pull/16634) Backend CI: run tensor and pipeline parallel gloo suites in separate shards
- [#16509](https://github.com/unslothai/unsloth/pull/16509) Studio: do not download PyTorch Clef for an over-long decision request
- [#16493](https://github.com/unslothai/unsloth/pull/16493) Studio: keep chat context when switching models
- [#16473](https://github.com/unslothai/unsloth/pull/16473) Studio: stop showing a cancelled tool request reply as finished
- [#16488](https://github.com/unslothai/unsloth/pull/16488) Studio: keep the MCP tool list steady between messages
- [#16590](https://github.com/unslothai/unsloth/pull/16590) Studio: scale spreadsheet figures in thousands or millions with decimals
- [#16580](https://github.com/unslothai/unsloth/pull/16580) Studio: keep profile and appearance changes made in another window
- [#16489](https://github.com/unslothai/unsloth/pull/16489) Studio: read several web pages at once on local models
- [#16562](https://github.com/unslothai/unsloth/pull/16562) Studio: load OpenRouter models from the API
- [#16568](https://github.com/unslothai/unsloth/pull/16568) Multi-LoRA: export expert LoRA in the layout vanilla PEFT loads
- [#16598](https://github.com/unslothai/unsloth/pull/16598) FP8 rowwise scaled_mm: keep fp16 output in range before torch 2.14, and drop the row guard for always-dequant dtypes when compiled
- [#16570](https://github.com/unslothai/unsloth/pull/16570) Fix glass surfaces in the built-in browser
- [#16595](https://github.com/unslothai/unsloth/pull/16595) Studio: fix external-server disconnects and show the server port
- [#16571](https://github.com/unslothai/unsloth/pull/16571) Fix duplicated wallpaper titlebar tint and modal dimming
- [#16572](https://github.com/unslothai/unsloth/pull/16572) Hide the sidebar footer fade only in glass themes
- [#16558](https://github.com/unslothai/unsloth/pull/16558) Context parallelism: generic Ulysses on any Hugging Face attention model, per-instance trainer wrappers
- [#16624](https://github.com/unslothai/unsloth/pull/16624) Scan baseline: re-review the five unsloth-zoo sites 2026.11.1 moved
- [#16582](https://github.com/unslothai/unsloth/pull/16582) Studio diffusion kernels: keep per-resolution sizes out of the Triton compile key
- [#16517](https://github.com/unslothai/unsloth/pull/16517) fix(studio): price MLX attention on the route the runtime takes
- [#16583](https://github.com/unslothai/unsloth/pull/16583) Studio: stop browser panel pages typing stray control keys on macOS
- [#16584](https://github.com/unslothai/unsloth/pull/16584) Kernels: keep per-call sizes out of the Triton compile key (layernorm dW, fp8 block matmul, nvfp4 split sum)
- [#16469](https://github.com/unslothai/unsloth/pull/16469) Make startup ML warmup opt-in by feature
- [#16423](https://github.com/unslothai/unsloth/pull/16423) FP8 LoRA: fp8 forward and input gradient on the frozen 16-bit base
- [#16585](https://github.com/unslothai/unsloth/pull/16585) Kernels: name every tl.constexpr parameter with a trailing comment
- [#16527](https://github.com/unslothai/unsloth/pull/16527) Studio: fit reasoning_effort to a template's enforced allowlist

#### 🐛 New Issues
- [#16614](https://github.com/unslothai/unsloth/issues/16614) Studio: first load on a device without local storage paints light for ~150 ms before the account's dark theme 💬3
- [#16699](https://github.com/unslothai/unsloth/issues/16699) [Bug] Chat template for gemma-4-thinking removes reasoning `feature request` `bug` 💬2
- [#16627](https://github.com/unslothai/unsloth/issues/16627) [Bug] Create Music Incorrect Reporting `feature request` `bug` 💬2
- [#16720](https://github.com/unslothai/unsloth/issues/16720) Studio: fine-tuning pagination can skip a job when Multi-LoRA batches start out of order 💬1
- [#16714](https://github.com/unslothai/unsloth/issues/16714) RAG: indexing during an embedding model download fails every file, permanently 💬1
- [#16706](https://github.com/unslothai/unsloth/issues/16706) [Bug] `search_conversation` tool totally disappeared (3rd time) `feature request` `bug` 💬1
- [#16705](https://github.com/unslothai/unsloth/issues/16705) [Feature] Add an "Always allow" option for browser script execution `feature request` 💬1
- [#16672](https://github.com/unslothai/unsloth/issues/16672) [Bug] Homebrew install command not working `feature request` `bug` 💬1
- [#16630](https://github.com/unslothai/unsloth/issues/16630) [Bug] S3 audio paths are not rewritten for single-record .json manifests 💬1
- [#16664](https://github.com/unslothai/unsloth/issues/16664) [Bug] Studio web_search always returns "No results found.": ddgs request lacks Accept header (DuckDuckGo 202) and yandex is missing from the engine allow-list 💬1
- [#16626](https://github.com/unslothai/unsloth/issues/16626) [Feature] Optional native Strata engine integration in Unsloth Studio (MoE streaming / AMD)
- [#16721](https://github.com/unslothai/unsloth/issues/16721) [Bug] Studio S3 audio JSONL preparation fails on Unicode separators inside transcripts
- [#16719](https://github.com/unslothai/unsloth/issues/16719) Studio: a Multi-LoRA batch starting during a fine-tuning list request can invalidate a public cursor
- [#16716](https://github.com/unslothai/unsloth/issues/16716) Studio: /skills command to open the Skills dialog
- [#16715](https://github.com/unslothai/unsloth/issues/16715) RAG ingest embeds one document at a time: ~99 ms/chunk on the batch-of-1 path vs 2.07 ms batched
- [#16667](https://github.com/unslothai/unsloth/issues/16667) transformers 5.23 renames gradient checkpointing to activation checkpointing: 4 spots change behaviour
- [#16632](https://github.com/unslothai/unsloth/issues/16632) [Bug] Studio fine-tuning jobs list drops a cancelled queued job when a newer job starts
- [#16636](https://github.com/unslothai/unsloth/issues/16636) [Feature] Ability to rename users without account recreation `feature request`
- [#16625](https://github.com/unslothai/unsloth/issues/16625) [Feature] Add granularity to sandboxing `feature request`

#### 🔒 Closed Issues
- [#16520](https://github.com/unslothai/unsloth/issues/16520) [Feature] Release torch 2.13.0 and 2.14.0 extras to pypi
- [#16602](https://github.com/unslothai/unsloth/issues/16602) [Bug] `search_conversation` tool totally disappeared (2nd time)
- [#16573](https://github.com/unslothai/unsloth/issues/16573) [Bug] Update to unlosth desktop v0.1.914-beta does not complete
- [#16614](https://github.com/unslothai/unsloth/issues/16614) Studio: first load on a device without local storage paints light for ~150 ms before the account's dark theme
- [#14811](https://github.com/unslothai/unsloth/issues/14811) [Feature] Allow custom headers for remote providers
- [#16545](https://github.com/unslothai/unsloth/issues/16545) [Bug] + [Feature] Studio drops arbitrary chat_template_kwargs (e.g. verification)
- [#16593](https://github.com/unslothai/unsloth/issues/16593) [Bug] Please fill in your issue title here.
- [#14743](https://github.com/unslothai/unsloth/issues/14743) [Feature] Remember disabled thinking setting
- [#16611](https://github.com/unslothai/unsloth/issues/16611) Studio RAG HTML parser includes native hidden content in document text
- [#16630](https://github.com/unslothai/unsloth/issues/16630) [Bug] S3 audio paths are not rewritten for single-record .json manifests
- [#16485](https://github.com/unslothai/unsloth/issues/16485) [Feature] Upload files from unsloth studio library
- [#16561](https://github.com/unslothai/unsloth/issues/16561) [Bug] Unable to update to latest beta
- [#16051](https://github.com/unslothai/unsloth/issues/16051) [Bug] Mixed ShareGPT chats lose native tool-call metadata
- [#16586](https://github.com/unslothai/unsloth/issues/16586) [Bug] Model Hub Connect to paid LLMs are not always showing the newest models such as Kimi-3.2-pro
- [#16528](https://github.com/unslothai/unsloth/issues/16528) [Bug] S3 audio manifest-relative paths silently select a different recording on prefix-root collisions

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,182 · **Open issues:** 392 · **Last push:** 8h ago

On November 5, 2026, AIBrix did not have any new releases but saw some important developments through merged pull requests. Notably, PR #3374 addressed a bug ensuring that the full UUID is retained as the batch result ID, while PR #3286 implemented validation to reject duplicate custom IDs in batch inputs. Additionally, PR #3400 introduced a new feature to the OpenAI frontend by adding a subprocess proxy engine core, which is expected to enhance functionality. Overall, the day's activity was primarily focused on bug fixes and feature enhancements without any new issues being reported.

#### ✅ Merged PRs
- [#3374](https://github.com/vllm-project/aibrix/pull/3374) [Bug] Keep the full UUID as the batch result id
- [#3286](https://github.com/vllm-project/aibrix/pull/3286) [Bug] Reject duplicate custom IDs in batch input validation
- [#3400](https://github.com/vllm-project/aibrix/pull/3400) feat(openai-frontend): add subprocess proxy engine core

#### 🔒 Closed Issues
- [#3368](https://github.com/vllm-project/aibrix/issues/3368) [Bug] Batch result IDs collide because UUIDs are truncated to five hex digits
- [#3344](https://github.com/vllm-project/aibrix/issues/3344) [Bug] Batch input validation accepts duplicate custom_id values
- [#3367](https://github.com/vllm-project/aibrix/issues/3367) Feature: refresh openai_frontend schemas to track OpenAI, vLLM and SGLang

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,393 · **Open issues:** 792 · **Last push:** <1h ago

On November 5, 2026, there were no new releases for the Semantic Router, but a number of significant pull requests were merged, focusing primarily on bug fixes and enhancements. Notably, PR #5847 addressed the issue of accepting response fields from backends that the Router does not model, while PR #5610 improved the throttling of session memory TTL sweeps. Additionally, PR #5782 enhanced the sr-bench tool by allowing a terminal verifier timeout override. One of the new issues raised today, #5851, highlighted a bug where messages to backends defaulted to a maximum token limit of 4096 when clients did not specify their own limits. Overall, the day was primarily routine maintenance, with these key developments contributing to the ongoing refinement of the platform.

#### ✅ Merged PRs
- [#5583](https://github.com/vllm-project/semantic-router/pull/5583) [Bug] Keep responses when reasoning_tokens exceeds the output total
- [#5849](https://github.com/vllm-project/semantic-router/pull/5849) [CI/Build] Qualify and publish the newest main commit every day
- [#5796](https://github.com/vllm-project/semantic-router/pull/5796) [Bug] Model runtime: send overflow only to models with a scan budget
- [#5844](https://github.com/vllm-project/semantic-router/pull/5844) [Bug] Qualify router behavior, not CPU throughput, in the progressive stress case
- [#5847](https://github.com/vllm-project/semantic-router/pull/5847) [Bug] Accept response fields the Router does not model from every backend and remove compat_gateway
- [#5782](https://github.com/vllm-project/semantic-router/pull/5782) [Bug] sr-bench: allow terminal verifier timeout override via benchmark_options
- [#5587](https://github.com/vllm-project/semantic-router/pull/5587) [Bug] Decode OpenRouter transport-error envelopes
- [#5610](https://github.com/vllm-project/semantic-router/pull/5610) [Bug] Throttle the session memory TTL sweep off the request path

#### 🐛 New Issues
- [#5851](https://github.com/vllm-project/semantic-router/issues/5851) [Bug] Messages backends get max_tokens 4096 when the client sends no limit `bug` `accepted` `in-progress` `wg/data-plane-networking` 💬3
- [#5797](https://github.com/vllm-project/semantic-router/issues/5797) [Bug] Model runtime: a long Decision forward keeps its peak device memory cached after it finishes `bug` `accepted` `in-progress` `wg/router-models-inference-runtime` 💬3
- [#5832](https://github.com/vllm-project/semantic-router/issues/5832) [CI/Build] A change to a storage package does not run the storage inventory pins `accepted` `wg/evaluation-quality` 💬2
- [#5808](https://github.com/vllm-project/semantic-router/issues/5808) [Bug] A reply names the backend model or the logical model depending on stream and protocol `bug` `accepted` `in-progress` `wg/data-plane-networking` 💬2
- [#5783](https://github.com/vllm-project/semantic-router/issues/5783) Blog: Build Multi-Model LangGraph Agents with Aegra and vLLM Semantic Router `accepted` `wg/developer-experience-ecosystem` 💬2
- [#5855](https://github.com/vllm-project/semantic-router/issues/5855) [Bug] Helm chart: the Router crash-loops with the vector store enabled because its storage directory is read-only `bug` `needs-acceptance` `wg/enterprise-environment` 💬1
- [#5845](https://github.com/vllm-project/semantic-router/issues/5845) [CI/Build] One failed qualification run keeps later main merges out of the published images for a week `bug` `accepted` `owner/maintainers` 💬1
- [#5841](https://github.com/vllm-project/semantic-router/issues/5841) [Bug] An unmodelled field in a backend reply fails the request unless the backend sets compat_gateway `bug` `accepted` `wg/data-plane-networking` 💬1
- [#5840](https://github.com/vllm-project/semantic-router/issues/5840) [Bug] Full CPU qualification fails progressive stress since vela3-fast became the default, so no nightly images publish `bug` `accepted` `wg/router-models-inference-runtime` 💬1
- [#5837](https://github.com/vllm-project/semantic-router/issues/5837) [Feature] Unify model resources and model-driven signal configuration `enhancement` `accepted` `wg/mom-routing` 💬1
- [#5824](https://github.com/vllm-project/semantic-router/issues/5824) [Feature] Share one native System One budget across signal calls, stages and transport retries `enhancement` `accepted` `wg/mom-routing` 💬1
- [#5800](https://github.com/vllm-project/semantic-router/issues/5800) [Feature] Choose which user text signals score: skip client metadata turns and strip recalled-memory blocks `enhancement` `accepted` `wg/mom-routing` 💬1
- [#5804](https://github.com/vllm-project/semantic-router/issues/5804) [Feature] Use a remote System One API as a decision model `enhancement` `accepted` `wg/mom-routing` 💬1
- [#5799](https://github.com/vllm-project/semantic-router/issues/5799) [Bug] Anthropic-format gateway backends reject gateway usage fields; openai_compat_gateway is ignored outside vllm backends `bug` `accepted` `wg/data-plane-networking` 💬1
- [#5805](https://github.com/vllm-project/semantic-router/issues/5805) [Feature] Show the net provider prompt-cache saving over the selected range `enhancement` `accepted` `wg/data-plane-networking` 💬1
- [#5798](https://github.com/vllm-project/semantic-router/issues/5798) [Bug] Anthropic stream aborts with usage_decreased when thinking_tokens first appear in message_delta `bug` `accepted` `wg/data-plane-networking` 💬1
- [#5806](https://github.com/vllm-project/semantic-router/issues/5806) [Feature] Opt-in tool results in Router Replay records for dev and audit `enhancement` `accepted` `wg/enterprise-environment` 💬1
- [#5794](https://github.com/vllm-project/semantic-router/issues/5794) [Feature] Route an agent turn on what the agent's previous turn did `enhancement` `accepted` `in-progress` `wg/mom-routing` 💬1
- [#5786](https://github.com/vllm-project/semantic-router/issues/5786) [Bug] Model runtime: vela3-turbo routing on ROCm encodes its state again and stalls on new input lengths `bug` `accepted` `wg/router-models-inference-runtime` 💬1
- [#5787](https://github.com/vllm-project/semantic-router/issues/5787) [Bug] Router: Replay's PII check for capture_personal_data: false runs on the request path `bug` `accepted` `wg/enterprise-environment` 💬1
- [#5839](https://github.com/vllm-project/semantic-router/issues/5839) [Feature] Map OpenRouter reasoning details to native Messages and Responses reasoning blocks `needs-acceptance` `wg/data-plane-networking`
- [#5833](https://github.com/vllm-project/semantic-router/issues/5833) [Feature] Resolve every decision-model-driven built-in signal through the decision-model deployment, including remote System One `enhancement` `needs-acceptance` `wg/mom-routing`
- [#5828](https://github.com/vllm-project/semantic-router/issues/5828) [CI/Build] /accept makes the Community workflow scan every issue and exhausts the Actions API quota `bug` `accepted` `owner/maintainers`

#### 🔒 Closed Issues
- [#4317](https://github.com/vllm-project/semantic-router/issues/4317) [Feature] Re-evaluate a context-gated decision when transformation drops demand below its band
- [#5201](https://github.com/vllm-project/semantic-router/issues/5201) [Feature] Model runtime: enforce an operator-configured Decision input limit
- [#5099](https://github.com/vllm-project/semantic-router/issues/5099) [Bug] Router overrides the client's gzip preference with accept-encoding: identity
- [#4793](https://github.com/vllm-project/semantic-router/issues/4793) [Feature] Route native System One requests through bounded decision model cascades
- [#3705](https://github.com/vllm-project/semantic-router/issues/3705) [Feature] Expose provider prompt-cache cost breakdown and cache savings
- [#5194](https://github.com/vllm-project/semantic-router/issues/5194) [Bug] Saving a model in the Dashboard Models editor drops openai_compat_gateway from its backends
- [#5582](https://github.com/vllm-project/semantic-router/issues/5582) [Bug] Responses are rejected with negative_usage when reasoning_tokens exceeds the output total
- [#5732](https://github.com/vllm-project/semantic-router/issues/5732) [Bug] Model runtime: router_signal_direct.py sends overflow: truncate to models without a scan budget
- [#5584](https://github.com/vllm-project/semantic-router/issues/5584) [Bug] OpenRouter error envelopes with metadata fail transport-error decoding
- [#5554](https://github.com/vllm-project/semantic-router/issues/5554) [Feature] Add 2.14.1 PyTorch Support on CPU
- [#3219](https://github.com/vllm-project/semantic-router/issues/3219) [Feature] Add human review, activation, and rollback handoff to the agent workflow
- [#3218](https://github.com/vllm-project/semantic-router/issues/3218) [Feature] Integrate reproducible evaluation and tuning evidence into the agent workflow
- [#3215](https://github.com/vllm-project/semantic-router/issues/3215) [Feature] Add a one-command first-run evaluation profile and time-to-success baseline
- [#3168](https://github.com/vllm-project/semantic-router/issues/3168) [Feature] Support multi-replica Dashboard with shared state and coordinated workers
- [#2867](https://github.com/vllm-project/semantic-router/issues/2867) [Feature] Add bounded verification and repair to Router Flow
- [#2866](https://github.com/vllm-project/semantic-router/issues/2866) [Feature] Add verifier-guided ReMoM pruning and adaptive breadth
- [#2393](https://github.com/vllm-project/semantic-router/issues/2393) [Feature] Define a preference-driven recipe objective spec for offline tuning
- [#5780](https://github.com/vllm-project/semantic-router/issues/5780) [Bug] sr-bench: terminal verifier's task-pinned 1800s cap fails on slow links before grading starts
- [#5679](https://github.com/vllm-project/semantic-router/issues/5679) [Bug] Cached Messages streams from vLLM fail with usage_decreased
- [#5403](https://github.com/vllm-project/semantic-router/issues/5403) [Bug] Anthropic streamed message_start rejected on usage.speed (strict decoding)
- [#5549](https://github.com/vllm-project/semantic-router/issues/5549) [Bug] Partial Anthropic input-usage updates incorrectly abort streams with usage_decreased
- [#5845](https://github.com/vllm-project/semantic-router/issues/5845) [CI/Build] One failed qualification run keeps later main merges out of the published images for a week
- [#5841](https://github.com/vllm-project/semantic-router/issues/5841) [Bug] An unmodelled field in a backend reply fails the request unless the backend sets compat_gateway
- [#5840](https://github.com/vllm-project/semantic-router/issues/5840) [Bug] Full CPU qualification fails progressive stress since vela3-fast became the default, so no nightly images publish
- [#5586](https://github.com/vllm-project/semantic-router/issues/5586) [Bug] Two platform-batch tests fail on hosts that are not Linux/amd64
- [#5800](https://github.com/vllm-project/semantic-router/issues/5800) [Feature] Choose which user text signals score: skip client metadata turns and strip recalled-memory blocks
- [#5804](https://github.com/vllm-project/semantic-router/issues/5804) [Feature] Use a remote System One API as a decision model
- [#5799](https://github.com/vllm-project/semantic-router/issues/5799) [Bug] Anthropic-format gateway backends reject gateway usage fields; openai_compat_gateway is ignored outside vllm backends
- [#5805](https://github.com/vllm-project/semantic-router/issues/5805) [Feature] Show the net provider prompt-cache saving over the selected range
- [#5798](https://github.com/vllm-project/semantic-router/issues/5798) [Bug] Anthropic stream aborts with usage_decreased when thinking_tokens first appear in message_delta
- [#5806](https://github.com/vllm-project/semantic-router/issues/5806) [Feature] Opt-in tool results in Router Replay records for dev and audit
- [#5786](https://github.com/vllm-project/semantic-router/issues/5786) [Bug] Model runtime: vela3-turbo routing on ROCm encodes its state again and stalls on new input lengths
- [#5787](https://github.com/vllm-project/semantic-router/issues/5787) [Bug] Router: Replay's PII check for capture_personal_data: false runs on the request path
- [#5828](https://github.com/vllm-project/semantic-router/issues/5828) [CI/Build] /accept makes the Community workflow scan every issue and exhausts the Actions API quota

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*