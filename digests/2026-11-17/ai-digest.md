# 📡 AI Ecosystem Digest — 2026-11-17

> Generated 2026-11-17 04:58 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 155,942 | 29 | 1 | 0 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 135,558 | 12 | 2 | 50 | 5 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 108,882 | 0 | 0 | 1 | 0 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,421 | 16 | 14 | 0 | 2 |
| [OpenCode](https://github.com/anomalyco/opencode) | 227,370 | 29 | 22 | 22 | 1 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 30,673 | 23 | 9 | 4 | 1 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 394,613 | 111 | 79 | 187 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 263,980 | 27 | 0 | 0 | 2 |
| [vLLM](https://github.com/vllm-project/vllm) | 97,066 | 42 | 11 | 50 | 1 |
| [SGLang](https://github.com/sgl-project/sglang) | 38,963 | 28 | 18 | 42 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 135,383 | 14 | 17 | 34 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 187,290 | 3 | 11 | 4 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 63,375 | 28 | 33 | 111 | 1 |
| [Unsloth](https://github.com/unslothai/unsloth) | 79,635 | 26 | 16 | 111 | 1 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,191 | 4 | 2 | 15 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 6,489 | 17 | 19 | 2 | 0 |

---

## ✨ Highlights

- **Claude Code** released version [v2.1.326](https://github.com/anthropics/claude-code/releases/tag/v2.1.326), featuring various improvements.
- **Hermes Agent** announced version [v0.23.2](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.2) and [v0.23.1+canary.20261116T070005Z](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.1+canary.20261116T070005Z).
- **OpenCode** merged multiple PRs, including [fix(ci): align v1 npm setup with dev](https://github.com/anomalyco/opencode/pull/64356).
- **OpenClaw** has a notable new issue, [Bug: 2026.11.3 → 2026.11.4 update takes hours, fails with SQLite lock](https://github.com/openclaw/openclaw/issues/200289), attracting 4 comments.
- **AIBrix** faces a significant challenge with the new issue, [flaky test: TestTRTAsyncPrefillFailures](https://github.com/vllm-project/aibrix/issues/3488), which has 5 comments.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 155,942 · **Open issues:** 17,021 · **Last push:** 2h ago

On November 17, 2026, Claude Code released version v2.1.326, which introduced support for enabling Code Mode while agent teams are active, ensuring that sessions begin in Code Mode if it was previously enabled. Additionally, a startup warning was added for incomplete `--allowedTools`, `--disallowedTools`, or `--tools` entries, along with an explanatory message regarding the halting of MCP servers by administrators. No pull requests were merged today, but several notable issues emerged, including #110569, where user messages sent from Warp's rich input arrive with the beginning missing, and #110403 that highlights subagents resending their entire history after a five-minute pause.

#### 🚀 New Releases
- [v2.1.326](https://github.com/anthropics/claude-code/releases/tag/v2.1.326) v2.1.326

#### 🐛 New Issues
- [#110569](https://github.com/anthropics/claude-code/issues/110569) User message arrives with its beginning missing when sent from Warp's rich input `bug` `platform:macos` `area:tui` 💬2
- [#110403](https://github.com/anthropics/claude-code/issues/110403) Subagents re-send their whole history after any pause over five minutes `enhancement` `area:cost` `area:agents` 💬2
- [#110565](https://github.com/anthropics/claude-code/issues/110565) AskUserQuestion: literal CR (U+000D) in model-emitted question/header/option strings collapses the question panel to ~2-3 chars per line `bug` `platform:macos` `area:tools` `area:desktop` 💬1
- [#110525](https://github.com/anthropics/claude-code/issues/110525) Make it easy to transfer all artifacts, rules, memories from other sessions/rep… `enhancement` `memory` 💬1
- [#110576](https://github.com/anthropics/claude-code/issues/110576) Bug Report: Insufficient details provided to identify issue `bug` `platform:macos` `needs-repro`
- [#110575](https://github.com/anthropics/claude-code/issues/110575) [BUG] Desktop app (Windows): dictation goes deaf until the Windows mic test holds the mic; mic level slides down; hold-to-record setting does not match behaviour `bug` `platform:windows` `area:desktop`
- [#110574](https://github.com/anthropics/claude-code/issues/110574) [BUG] Claude Desktop for Linux unexpectedly keeps trying to connect to bridge.claudeusercontent.com `bug` `platform:linux` `area:networking` `area:desktop`
- [#110573](https://github.com/anthropics/claude-code/issues/110573) [Bug] Claude ignores shared work rules, performs unrequested dev server deployment `bug` `platform:windows` `area:model` `platform:vscode`
- [#110572](https://github.com/anthropics/claude-code/issues/110572) [BUG] [Billing] "Your card was declined" when resubscribing to Pro after account reinstatement — payment never reaches the bank `invalid`
- [#110571](https://github.com/anthropics/claude-code/issues/110571) Why safety checks stopped this thread. I am medical professor working on ordin… `bug` `area:model`
- [#110570](https://github.com/anthropics/claude-code/issues/110570) [FEATURE] Separate plugins from connectors in Settings, and let Claude check for plugin updates `enhancement` `platform:macos` `area:cowork` `area:plugins`
- [#110568](https://github.com/anthropics/claude-code/issues/110568) [Bug] Auto mode blocks Bash commands rewritten by PreToolUse hook `bug` `platform:macos` `area:hooks` `regression`
- [#110567](https://github.com/anthropics/claude-code/issues/110567) [FEATURE] Mods: let a Button press in a mod's pane start a session (start_session refuses every plugin-initiated path) `enhancement` `platform:macos` `area:plugins` `area:desktop`
- [#110566](https://github.com/anthropics/claude-code/issues/110566) [BUG] Desktop Code tab (Windows): obsidian:// links in Claude's replies can't be clicked, so a passage can't be sent to the app that could show it `bug` `platform:windows` `area:desktop`
- [#110564](https://github.com/anthropics/claude-code/issues/110564) [Feature Request] Option to hide background commands output in the UI `enhancement` `platform:macos` `area:tui`
- [#110563](https://github.com/anthropics/claude-code/issues/110563) [GitHub integration] Let a Claude account restrict which GitHub App installations/owners it uses (personal account can reach employer org repos) `enhancement` `area:claude-code-web` `platform:web` `github-integration`
- [#110561](https://github.com/anthropics/claude-code/issues/110561) Agent teams in a background job: pane teammates inherit CLAUDE_JOB_DIR, write the job's status, and the daemon resumed the job into a teammate's transcript `bug` `has repro` `platform:macos` `area:agents`
- [#110560](https://github.com/anthropics/claude-code/issues/110560) [BUG] Desktop: start_session "offer" result orders Claude to end its turn, which throws away the rest of the reply the user is owed `bug` `platform:windows` `area:model` `area:desktop`
- [#110559](https://github.com/anthropics/claude-code/issues/110559) [BUG] Worktree guard suggests invalid path for its own gitDir input `bug` `platform:macos` `area:tools` `area:desktop`
- [#110558](https://github.com/anthropics/claude-code/issues/110558) [BUG] Desktop (Windows): request_directory silently refuses ~/.claude and the app's data folder with a misleading "could not be resolved" error, while the Files pane opens those same files via the home folder `bug` `platform:windows` `area:permissions` `area:desktop`
- [#110557](https://github.com/anthropics/claude-code/issues/110557) Claude Desktop (Windows) pops up "Windows Security" passkey dialog every ~4 hours `bug` `platform:windows` `area:auth` `area:desktop`
- [#110556](https://github.com/anthropics/claude-code/issues/110556) Claude spent the user's paid Anthropic API key without asking (257 calls, $5.94) `bug` `area:cost` `area:model` `area:desktop`
- [#110555](https://github.com/anthropics/claude-code/issues/110555) [GitHub integration] `bug` `area:claude-code-web` `platform:web` `github-integration`
- [#110554](https://github.com/anthropics/claude-code/issues/110554) [GitHub integration] `bug` `github-integration`
- [#110553](https://github.com/anthropics/claude-code/issues/110553) [BUG] '· summary' line rewrites the model's suggestions to the user as actions the model is taking ("I'm asking the listing agent…") `bug` `platform:linux` `area:tui` `area:model`
- [#110552](https://github.com/anthropics/claude-code/issues/110552) Option to silence "Scheduled task started" toasts (Code tab) `enhancement` `area:desktop`
- [#110551](https://github.com/anthropics/claude-code/issues/110551) [MODEL] Reported orientation complete without reading the governing documents its own search surfaced; hours of duplicate design followed, and a peer's file was overwritten `bug` `platform:windows` `area:model`
- [#110550](https://github.com/anthropics/claude-code/issues/110550) [GitHub integration] `bug` `github-integration`
- [#110549](https://github.com/anthropics/claude-code/issues/110549) [BUG] Links rendered using custom URI schemes are not clickable `bug` `platform:macos`

#### 🔒 Closed Issues
- [#110576](https://github.com/anthropics/claude-code/issues/110576) Bug Report: Insufficient details provided to identify issue

### OpenAI Codex (`openai/codex`)

**Stars:** 135,558 · **Open issues:** 27,608 · **Last push:** <1h ago

On November 17, 2026, the OpenAI Codex ecosystem saw the release of several Rust versions, including rust-v0.171.0-alpha.11 with various optimizations and improvements. Significant merged pull requests featured enhancements such as HTTP/2 fallback for SSH tunnels (#61964) and prewarming restored file images on cold resume (#61959). Additionally, a major refactor of the undo and redo history workflow (#61951) aims to improve user experience in the non-Vim prompt composer. However, the day was not without its challenges, as a critical new issue (#61961) was reported regarding intent-aware task branching, indicating potential coordination difficulties in managing child threads during complex operations.

#### 🚀 New Releases
- [rust-v0.171.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.171.0-alpha.11) 0.171.0-alpha.11
- [rust-v0.170.0-alpha.4.1](https://github.com/openai/codex/releases/tag/rust-v0.170.0-alpha.4.1) 0.170.0-alpha.4.1
- [rust-v0.171.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.171.0-alpha.9) 0.171.0-alpha.9
- [rust-v0.171.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.171.0-alpha.8) 0.171.0-alpha.8
- [rust-v0.171.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.171.0-alpha.10) 0.171.0-alpha.10

#### ✅ Merged PRs
- [#61964](https://github.com/openai/codex/pull/61964) Add HTTP/2 fallback for SSH tunnels
- [#61962](https://github.com/openai/codex/pull/61962) Capture local attachments before queuing turn input
- [#61959](https://github.com/openai/codex/pull/61959) Prewarm restored file images on cold resume
- [#61958](https://github.com/openai/codex/pull/61958) Support turn-scoped exhaustion in host usage accounting
- [#61956](https://github.com/openai/codex/pull/61956) Support saved environments when starting Cloud threads
- [#61955](https://github.com/openai/codex/pull/61955) Bound item loading for paginated `read_thread` calls
- [#61954](https://github.com/openai/codex/pull/61954) Add undo and redo to the non-Vim prompt composer
- [#61951](https://github.com/openai/codex/pull/61951) Refactor composer undo and redo history
- [#61949](https://github.com/openai/codex/pull/61949) Extract user input preparation into `codex-user-input`
- [#61947](https://github.com/openai/codex/pull/61947) Mask system SSH config drop-ins in the Linux sandbox
- [#61946](https://github.com/openai/codex/pull/61946) Include enclosing tool context in nested Guardian approvals
- [#61945](https://github.com/openai/codex/pull/61945) Allow host-started forks to inherit the root session ID
- [#61942](https://github.com/openai/codex/pull/61942) Centralize exec-server launches in `WrappedSandboxCommand`
- [#61941](https://github.com/openai/codex/pull/61941) Route turn-start client metadata through a dedicated helper
- [#61940](https://github.com/openai/codex/pull/61940) Add saved environment listing to the Cloud client
- [#61939](https://github.com/openai/codex/pull/61939) Preserve partial Git metadata when worktree status is slow
- [#61934](https://github.com/openai/codex/pull/61934) Allow independent app-server thread resumes to overlap
- [#61931](https://github.com/openai/codex/pull/61931) Log Windows MXC deny-read glob expansion timings
- [#61929](https://github.com/openai/codex/pull/61929) Freeze Guardian review views at ordered evidence cutoffs
- [#61928](https://github.com/openai/codex/pull/61928) Encapsulate app-server thread-list locking in `ThreadListState`
- [#61926](https://github.com/openai/codex/pull/61926) Allow agent search by thread ID and Git branch
- [#61922](https://github.com/openai/codex/pull/61922) Add conversation files to the TUI sidebar chooser
- [#61920](https://github.com/openai/codex/pull/61920) Track conversation files for the TUI sidebar
- [#61919](https://github.com/openai/codex/pull/61919) Add sidebar image previews and present generated images after answers
- [#61916](https://github.com/openai/codex/pull/61916) Preserve remote compaction summaries when interrupting child agents
- [#61915](https://github.com/openai/codex/pull/61915) Fall back to the built-in status line for invalid providers
- [#61911](https://github.com/openai/codex/pull/61911) Default Statsig metrics exports to Zstandard compression
- [#61910](https://github.com/openai/codex/pull/61910) Preserve native sandbox executable paths and PTY dispatch names
- [#61909](https://github.com/openai/codex/pull/61909) Add opt-in item-boundary interrupts for subagents
- [#61908](https://github.com/openai/codex/pull/61908) Pass a per-call voice session ID through TUI realtime startup
- [#61902](https://github.com/openai/codex/pull/61902) Filter thread listings before scanning rollout previews
- [#61900](https://github.com/openai/codex/pull/61900) Fix proc mount fallback detection for Bubblewrap 0.12
- [#61898](https://github.com/openai/codex/pull/61898) Tie Linux sandbox proxy bridges to the launcher lifetime
- [#61897](https://github.com/openai/codex/pull/61897) Add opt-in UTC dates to environment context
- [#61896](https://github.com/openai/codex/pull/61896) Bound rollout trace capture with configurable storage limits
- [#61894](https://github.com/openai/codex/pull/61894) Acknowledge agent messages and clarify how to wake idle recipients
- [#61890](https://github.com/openai/codex/pull/61890) Open source file links at line and column targets in the TUI
- [#61889](https://github.com/openai/codex/pull/61889) Add search, selection, and link navigation to document previews
- [#61888](https://github.com/openai/codex/pull/61888) Add read-only document previews to the TUI sidebar
- [#61887](https://github.com/openai/codex/pull/61887) Add app-server file preview read helpers
- [#61880](https://github.com/openai/codex/pull/61880) Preserve local Markdown document targets in transcript rendering
- [#61878](https://github.com/openai/codex/pull/61878) Support flat subgraphs in native Mermaid flowcharts
- [#61871](https://github.com/openai/codex/pull/61871) Preserve plugin skill picker ranking across version changes
- [#61866](https://github.com/openai/codex/pull/61866) Preserve SQLite row metadata in thread listings
- [#61865](https://github.com/openai/codex/pull/61865) Report remote plugin local versions from matching cached packages
- [#61860](https://github.com/openai/codex/pull/61860) Add opt-in tool-call attribution for upstream proxies
- [#61854](https://github.com/openai/codex/pull/61854) Allow model metadata to control multi-agent tools in code mode
- [#61852](https://github.com/openai/codex/pull/61852) Broadcast read-state changes to experimental clients
- [#61851](https://github.com/openai/codex/pull/61851) Allow network policy to enable transparent TCP capture
- [#61846](https://github.com/openai/codex/pull/61846) Reuse code-mode tool catalogs across executions

#### 🐛 New Issues
- [#61961](https://github.com/openai/codex/issues/61961) Intent-aware task branching with a parent conversation that coordinates child threads `enhancement` `session` 💬2
- [#61907](https://github.com/openai/codex/issues/61907) Codex Desktop: third-party JetBrains Central proxy quota failure surfaces as opaque HTTP 477 `enhancement` `custom-model` `app` `connectivity` 💬2
- [#61869](https://github.com/openai/codex/issues/61869) [macOS] Retained in-app browser tab disappears after read-only turn and loses unsaved form entries `bug` `app` `browser` 💬2
- [#61966](https://github.com/openai/codex/issues/61966) stream disconnected before completion: Connection refused (os error 61) `bug` `CLI` `connectivity` 💬1
- [#61965](https://github.com/openai/codex/issues/61965) Codex tends to stop code reviews too early without explicit planning or completion criteria `enhancement` `model-behavior` `code-review` `app` 💬1
- [#61963](https://github.com/openai/codex/issues/61963) Desktop: fork always fails with AppServerForkNotReadyError: execution-config-loading when execution assignments are unavailable `bug` `auth` `app` `app-server` 💬1
- [#61957](https://github.com/openai/codex/issues/61957) Work usage exhausted immediately after banked reset; attribution missing/mismatched `bug` `rate-limits` `app` 💬1
- [#61792](https://github.com/openai/codex/issues/61792) [TUI math] Support underbrace annotations in display formulas `enhancement` `TUI` `CLI` 💬1
- [#61952](https://github.com/openai/codex/issues/61952) False positive safety block during authorized security review with parallel subagents `bug` `CLI` `safety-check` `subagent` 💬1
- [#61950](https://github.com/openai/codex/issues/61950) macOS Computer Use: ziniaobrowser screenshot/AX succeed, coordinate input fails with -10005 noWindowsAvailable on 26.1111.21308 `bug` `app` `computer-use` 💬1
- [#61948](https://github.com/openai/codex/issues/61948) ChatGPT can't publish sites `bug` `app` `connectivity` 💬1
- [#61960](https://github.com/openai/codex/issues/61960) [macOS] In-app browser device preview clips the right edge at 430 × 932 when the page reports DPR 0.90 `bug` `app` `browser`

#### 🔒 Closed Issues
- [#59323](https://github.com/openai/codex/issues/59323) Desktop update blocks existing chats that use a different configured model provider
- [#61963](https://github.com/openai/codex/issues/61963) Desktop: fork always fails with AppServerForkNotReadyError: execution-config-loading when execution assignments are unavailable

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 108,882 · **Open issues:** 731 · **Last push:** 3h ago

On November 17, 2026, there were no new releases for Gemini CLI. The most notable update was the merging of PR #30283, which enhances the CLI by enabling it to skip system MCP servers that have insecure command permissions, improving overall security and usability. There were no new issues reported today, indicating a routine maintenance day with solid improvements in the codebase.

#### ✅ Merged PRs
- [#30283](https://github.com/google-gemini/gemini-cli/pull/30283) fix(cli): skip system MCP servers with insecure command permissions

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,421 · **Open issues:** 2,208 · **Last push:** 1h ago

On November 17, 2026, GitHub Copilot CLI released version 1.0.113-1, introducing an important feature that allows administrators to disable the built-in Browser Use capability using the managed setting features.browserUse, even in active sessions. Additionally, version 1.0.113-0 provided several fixes and changes, although no pull requests were merged during this period. Notably, the new issues logged include #5483, which addresses the handling of "immediate" messages by the model, and #5485, highlighting a message about disabled incoming account connections when another CLI instance is already handling remote control. The day was primarily routine maintenance but featured these emerging concerns, particularly the message handling issue that may affect user experience.

#### 🚀 New Releases
- [v1.0.113-1](https://github.com/github/copilot-cli/releases/tag/v1.0.113-1) 1.0.113-1
- [v1.0.113-0](https://github.com/github/copilot-cli/releases/tag/v1.0.113-0) 1.0.113-0

#### 🐛 New Issues
- [#5483](https://github.com/github/copilot-cli/issues/5483) Two mode: "immediate" messages taken in at one step reach the model as one string ("no" + "drop phase 7" = "nodrop phase 7") `triage` 💬1
- [#5485](https://github.com/github/copilot-cli/issues/5485) `/remote on` says "Incoming account connections are disabled" when another CLI on the machine already hosts remote control `triage`
- [#5484](https://github.com/github/copilot-cli/issues/5484) Copy older assistant responses `triage`
- [#5482](https://github.com/github/copilot-cli/issues/5482) Add an archived chats view with a Restore action (macOS and Windows) `triage`
- [#5481](https://github.com/github/copilot-cli/issues/5481) Organization-managed GPT models do not defer MCP tools despite Responses API and toolSearch enabled `triage`
- [#5480](https://github.com/github/copilot-cli/issues/5480) Python script execution replaces venv interpreter with global Python; behavior is not explained to the agent `triage`
- [#5479](https://github.com/github/copilot-cli/issues/5479) With forceRemoteSettingsRefresh, new sessions warn "Managed settings could not be confirmed" because no live policy fetch is started at session init `triage`
- [#5478](https://github.com/github/copilot-cli/issues/5478) Cortex XDR "parent_process_spoofing" kills the launching shell when Copilot CLI spawns git `triage`
- [#5477](https://github.com/github/copilot-cli/issues/5477) Vim editor mode: add visual mode (v/V) for selecting and deleting text `triage`
- [#5476](https://github.com/github/copilot-cli/issues/5476) Built-in functions.view returns no content for large files despite documenting automatic truncation `triage`
- [#5475](https://github.com/github/copilot-cli/issues/5475) Fusion standard 422 on code review request - Legitimate code review interrupted by a possible cybersecurity-risk flag `triage`
- [#5474](https://github.com/github/copilot-cli/issues/5474) Rename sessions `triage`
- [#5473](https://github.com/github/copilot-cli/issues/5473) Windows: stale copilot-keychain-chunk credentials accumulate and can exhaust Credential Manager `triage`
- [#5472](https://github.com/github/copilot-cli/issues/5472) Copilot Fusion MAX is reported unavailable, since GPT-6 SOL is missing, even though i have GPT-6.1 SOL. `triage`
- [#5471](https://github.com/github/copilot-cli/issues/5471) Security-review follow-up instructions are injected in non-interactive runs despite an explicit no-follow-ups prompt `triage`
- [#5470](https://github.com/github/copilot-cli/issues/5470) source.path is ignored for git-based extraKnownMarketplaces in enterprise team settings `triage`

#### 🔒 Closed Issues
- [#2881](https://github.com/github/copilot-cli/issues/2881) Autopilot mode enters infinite loop, draining premium requests until manually cancelled
- [#4041](https://github.com/github/copilot-cli/issues/4041) web_fetch tool fails on all URLs (TypeError: fetch failed) in IPv4-only sandbox environments
- [#4463](https://github.com/github/copilot-cli/issues/4463) MCP OAuth intermittently fails on Windows with socket error 10013
- [#5359](https://github.com/github/copilot-cli/issues/5359) Resumed session fails every request with 400 "Tool reference '...' not found in available tools" after an MCP server's tools change between launches
- [#5177](https://github.com/github/copilot-cli/issues/5177) Regression: Manual Approval no longer prompts for repository-mutating Git commands after Copilot harness migration
- [#2601](https://github.com/github/copilot-cli/issues/2601) Support 1M token context with Claude models
- [#4046](https://github.com/github/copilot-cli/issues/4046) System requirement doc for different Platform of sandboxing feature
- [#5098](https://github.com/github/copilot-cli/issues/5098) sessionStart hook stops running after adding sandbox.userPolicy.filesystem paths
- [#5107](https://github.com/github/copilot-cli/issues/5107) HOME override triggers script_action_changed for harmless echo in VS Code SDK host
- [#5390](https://github.com/github/copilot-cli/issues/5390) macOS sandbox: allowLocalNetwork: true still generates hostLoopback: deny in proxy mode, blocking Gradle on CLI 1.0.107
- [#5037](https://github.com/github/copilot-cli/issues/5037) Image pasted from clipboard lost after rwound
- [#4701](https://github.com/github/copilot-cli/issues/4701) Permission-gate/tool-approval preview truncates full Windows paths
- [#3973](https://github.com/github/copilot-cli/issues/3973) MCP OAuth re-auth repeatedly fails on Windows when the cached loopback redirect port is in an excluded TCP port range
- [#3907](https://github.com/github/copilot-cli/issues/3907) CPU usage at max.

### OpenCode (`anomalyco/opencode`)

**Stars:** 227,370 · **Open issues:** 4,023 · **Last push:** <1h ago

The major development today in OpenCode is the release of process-daemon v0.6.0 and its associated package opencode-pty 0.6.0, which adopts protocol 9. Significant fixes were merged, including improvements to the search functionality with #64347 allowing for plain string queries, and #64332 updating documentation to keep data retention terms until the Console reflects them. The release also introduced enhancements such as mid-conversation tool changes (#64166) and experimental schedules turning into automations (#64160). Among the new issues, #64269 regarding an "Invalid Credentials Error" after payment remains a hot topic, drawing considerable attention from users.

#### 🚀 New Releases
- [process-daemon-v0.6.0](https://github.com/anomalyco/opencode/releases/tag/process-daemon-v0.6.0) process-daemon v0.6.0

#### ✅ Merged PRs
- [#64356](https://github.com/anomalyco/opencode/pull/64356) fix(ci): align v1 npm setup with dev
- [#64347](https://github.com/anomalyco/opencode/pull/64347) fix(codemode): accept a plain string query in search
- [#64351](https://github.com/anomalyco/opencode/pull/64351) chore: upgrade oxlint to 1.93.0
- [#62578](https://github.com/anomalyco/opencode/pull/62578) fix(core): skip unreachable wellknown sources instead of dropping all
- [#62577](https://github.com/anomalyco/opencode/pull/62577) fix(core): include hidden files in ripgrep file search
- [#64349](https://github.com/anomalyco/opencode/pull/64349) fix(ci): use a github-hosted runner for v1 publishing
- [#64346](https://github.com/anomalyco/opencode/pull/64346) test(cli): wait out Windows EBUSY when removing the ACP fixture root
- [#64344](https://github.com/anomalyco/opencode/pull/64344) fix(codemode): drop the null result line before logs
- [#64341](https://github.com/anomalyco/opencode/pull/64341) fix(core): raise the Code Mode tool summary limit to 500 characters
- [#64251](https://github.com/anomalyco/opencode/pull/64251) fix(core): pin @opencode/pty 0.6.0 and use protocol 9
- [#63458](https://github.com/anomalyco/opencode/pull/63458) fix(ci): isolate v1 deploy and release jobs
- [#64342](https://github.com/anomalyco/opencode/pull/64342) docs(console): move MiniMax M3.1 Flash Free to deprecated models
- [#64166](https://github.com/anomalyco/opencode/pull/64166) feat(ai): add mid-conversation tool changes
- [#64333](https://github.com/anomalyco/opencode/pull/64333) fix(core): return a renamed tool's structured output in Code Mode
- [#64160](https://github.com/anomalyco/opencode/pull/64160) feat(core): turn experimental schedules into automations
- [#62576](https://github.com/anomalyco/opencode/pull/62576) fix(core): ignore a corrupt cached project id
- [#62490](https://github.com/anomalyco/opencode/pull/62490) feat(tui): choose where to save exports in the new export dialog
- [#62249](https://github.com/anomalyco/opencode/pull/62249) fix(core): keep grep results when a match is not valid UTF-8
- [#64332](https://github.com/anomalyco/opencode/pull/64332) docs(go): keep data retention terms until Console shows them
- [#64271](https://github.com/anomalyco/opencode/pull/64271) docs(go): link Go's per-model lists and tables to Console's Go page
- [#63633](https://github.com/anomalyco/opencode/pull/63633) fix(core): honor plugin tool renames in Code Mode
- [#63627](https://github.com/anomalyco/opencode/pull/63627) docs(console): Go Teams 2-member minimum, and Go workspaces can invite teammates

#### 🐛 New Issues
- [#64269](https://github.com/anomalyco/opencode/issues/64269) Invalid Credentials Error after entering Prompt on Open Code after payment and API Key confirm! `triaging` `type/bug` `area/auth` 💬7
- [#64277](https://github.com/anomalyco/opencode/issues/64277) Where can I get my OpenCode Go Subscription API Key if I am to silly to restore it? *lol* `pending close` `triaging` `type/support` `area/auth` 💬6
- [#64293](https://github.com/anomalyco/opencode/issues/64293) browse: page script throws TypeError reading 'startTime' in reportAllChanges `type/bug` `area/mcp` `version/v2` `platform/windows` 💬5
- [#64334](https://github.com/anomalyco/opencode/issues/64334) free quota exhaustion only visible after new session fails with 429 `pending close` `triaging` `type/feature` `area/tui` 💬3
- [#64321](https://github.com/anomalyco/opencode/issues/64321) tui: model dialog hides a provider model that search finds `pending close` `triaging` `type/feature` `area/tui` 💬3
- [#64307](https://github.com/anomalyco/opencode/issues/64307) Key shortcuts mismatch `triaging` `type/bug` `area/desktop` `platform/macos` 💬2
- [#64355](https://github.com/anomalyco/opencode/issues/64355) shell: every command fails when the session cwd was deleted outside opencode `type/feature` `area/core` `version/v2` 💬2
- [#64304](https://github.com/anomalyco/opencode/issues/64304) Four Free models incorrectly require training consent despite documented zero retention and no training `type/bug` `area/providers` `inference/free-tier` `version/v2` 💬2
- [#64327](https://github.com/anomalyco/opencode/issues/64327) [FEATURE]: Add: Notebook/Scratchpad to hold parts of prompts and agent outputs `type/feature` 💬2
- [#64317](https://github.com/anomalyco/opencode/issues/64317) desktop: closing a worktree session leaves an orphaned pty shell that locks the worktree directory (Windows) `reproduced` `type/bug` `area/desktop` `version/v2` 💬2
- [#64253](https://github.com/anomalyco/opencode/issues/64253) config: V1 "permission" block silently ignored in v2.3.0 (compat regression) `type/bug` `area/core` `version/v2` `platform/macos` 💬2
- [#64358](https://github.com/anomalyco/opencode/issues/64358) [FEATURE]: Add OpenDesign (open-design.ai) provider support to /connect `type/feature` `area/providers` `version/v2` 💬1
- [#64357](https://github.com/anomalyco/opencode/issues/64357) desktop: submenu not close after fast hovering another parent menu `type/bug` `area/desktop` `version/v2` `platform/windows` 💬1
- [#64354](https://github.com/anomalyco/opencode/issues/64354) Go Plus subscription payments fail repeatedly with 'We don't know why the payment failed' — no retry option `type/support` `inference/go` 💬1
- [#64352](https://github.com/anomalyco/opencode/issues/64352) [BUG]: Injected subagent-completion prompt switches session model to subagent's model (regression of #46111 / #42893) on v2.2.6 `type/bug` `area/core` `inference/go` `version/v2` 💬1
- [#64177](https://github.com/anomalyco/opencode/issues/64177) shell: processes a finished command left in its group are SIGKILLed 25 commands later, not at exit `reproduced` `type/bug` `area/service` `version/v2` 💬1
- [#64338](https://github.com/anomalyco/opencode/issues/64338) [FEATURE]: Configurable notification urgency and persistence per event `type/feature` `area/tui` `version/v2` `platform/linux` 💬1
- [#64337](https://github.com/anomalyco/opencode/issues/64337) tui: pinned sessions disappear from the session list once outside the newest 50 `reproduced` `type/bug` `area/tui` `version/v2` 💬1
- [#64336](https://github.com/anomalyco/opencode/issues/64336) OpenCode刚打开就提示免费额度耗尽 `type/bug` `inference/free-tier` 💬1
- [#64331](https://github.com/anomalyco/opencode/issues/64331) Free usage limit reset time keeps moving to the next day at 9:00 AM KST `type/bug` `area/desktop` `inference/free-tier` `version/v2` 💬1
- [#64326](https://github.com/anomalyco/opencode/issues/64326) permission: `"bash": {"*": "deny"}` ignored when `opencode run` is spawned directly as a subprocess (tool executes; enforced when spawned via shell) `type/bug` `area/core` `version/v1` `platform/macos` 💬1
- [#64325](https://github.com/anomalyco/opencode/issues/64325) [FEATURE]: a public signal that a client-attached MCP connection is registered (and which one serves its name) `type/feature` `area/mcp` `version/v2` 💬1
- [#64322](https://github.com/anomalyco/opencode/issues/64322) [FEATURE]: Server-side "mark as unread" for sessions (session.unview) `type/feature` `area/sdk-api` `version/v2` 💬1
- [#64311](https://github.com/anomalyco/opencode/issues/64311) Cache policy: conversation-tail breakpoint should skip ephemeral messages injected by plugin hooks `type/bug` `area/providers` `version/v2` 💬1
- [#64308](https://github.com/anomalyco/opencode/issues/64308) Unrealistically high TPS numbers `type/bug` `status/repro-simulated` `area/tui` `version/v2` 💬1
- [#64306](https://github.com/anomalyco/opencode/issues/64306) [FEATURE]: Support decision models from local OpenAI-compatible providers (LM Studio /v1/systemone) `type/feature` `area/providers` `version/v2` `platform/windows` 💬1
- [#64302](https://github.com/anomalyco/opencode/issues/64302) web: video and audio previews fail on password-protected servers (media-src CSP missing blob:) `reproduced` `type/bug` `area/web` `version/v2` 💬1
- [#64301](https://github.com/anomalyco/opencode/issues/64301) tui: down arrow in prompt opens subagent picker instead of moving cursor (fires on any line, not just last) `type/bug` `status/repro-simulated` `area/tui` `version/v2` 💬1
- [#64300](https://github.com/anomalyco/opencode/issues/64300) config: edits to a symlinked opencode.jsonc are never hot-reloaded (watcher follows the link, not its target) `type/bug` `area/core` `version/v2` `platform/linux` 💬1

#### 🔒 Closed Issues
- [#64096](https://github.com/anomalyco/opencode/issues/64096) [FEATURE]: Always-background subagents (2.3.0): please keep a way to run a subagent call as a blocking call
- [#63817](https://github.com/anomalyco/opencode/issues/63817) pty: shell commands leave zombies under opencode-pty daemon on Linux (2.3.0)
- [#64269](https://github.com/anomalyco/opencode/issues/64269) Invalid Credentials Error after entering Prompt on Open Code after payment and API Key confirm!
- [#63976](https://github.com/anomalyco/opencode/issues/63976) opencode-pty daemon leaks zombie child processes (unbounded growth under single daemon PID)
- [#64277](https://github.com/anomalyco/opencode/issues/64277) Where can I get my OpenCode Go Subscription API Key if I am to silly to restore it? *lol*
- [#64293](https://github.com/anomalyco/opencode/issues/64293) browse: page script throws TypeError reading 'startTime' in reportAllChanges
- [#53991](https://github.com/anomalyco/opencode/issues/53991) project: NUL-byte project ID breaks fromDirectory and blocks TUI model selection
- [#63530](https://github.com/anomalyco/opencode/issues/63530) Android: Selecting text accidentally opens the left sidebar
- [#64321](https://github.com/anomalyco/opencode/issues/64321) tui: model dialog hides a provider model that search finds
- [#64307](https://github.com/anomalyco/opencode/issues/64307) Key shortcuts mismatch
- [#46144](https://github.com/anomalyco/opencode/issues/46144) tui: @ file picker excludes tracked files under dot-directories on Windows V2
- [#51912](https://github.com/anomalyco/opencode/issues/51912) core: grep fails entirely when a matching line is not valid UTF-8
- [#64253](https://github.com/anomalyco/opencode/issues/64253) config: V1 "permission" block silently ignored in v2.3.0 (compat regression)
- [#64357](https://github.com/anomalyco/opencode/issues/64357) desktop: submenu not close after fast hovering another parent menu
- [#64354](https://github.com/anomalyco/opencode/issues/64354) Go Plus subscription payments fail repeatedly with 'We don't know why the payment failed' — no retry option
- [#46187](https://github.com/anomalyco/opencode/issues/46187) One unreachable well-known origin hides every other integration
- [#64177](https://github.com/anomalyco/opencode/issues/64177) shell: processes a finished command left in its group are SIGKILLed 25 commands later, not at exit
- [#64336](https://github.com/anomalyco/opencode/issues/64336) OpenCode刚打开就提示免费额度耗尽
- [#64331](https://github.com/anomalyco/opencode/issues/64331) Free usage limit reset time keeps moving to the next day at 9:00 AM KST
- [#64326](https://github.com/anomalyco/opencode/issues/64326) permission: `"bash": {"*": "deny"}` ignored when `opencode run` is spawned directly as a subprocess (tool executes; enforced when spawned via shell)
- [#64311](https://github.com/anomalyco/opencode/issues/64311) Cache policy: conversation-tail breakpoint should skip ephemeral messages injected by plugin hooks
- [#64300](https://github.com/anomalyco/opencode/issues/64300) config: edits to a symlinked opencode.jsonc are never hot-reloaded (watcher follows the link, not its target)

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 30,673 · **Open issues:** 2,355 · **Last push:** <1h ago

On November 17, 2026, Qwen Code released version v0.27.4-nightly.20261116.eb3a599ef3, introducing a sidebar workspace filter in the web shell and a new DingTalk adapter for the managed agent. Significant merged pull requests include the addition of an Aone Code channel plugin that supports polling event-stream inbound and a refactor that replaced regex DDL catalog parsing with a tokenizing parser. Noteworthy new issues surfaced, such as #17501, which details failures to call private-CA HTTPS endpoints due to the pinned undici dispatcher ignoring NODE_EXTRA_CA_CERTS, alongside a few bugs affecting the sdk-python and general build processes.

#### 🚀 New Releases
- [v0.27.4-nightly.20261116.eb3a599ef3](https://github.com/QwenLM/qwen-code/releases/tag/v0.27.4-nightly.20261116.eb3a599ef3) Release v0.27.4-nightly.20261116.eb3a599ef3

#### ✅ Merged PRs
- [#17442](https://github.com/QwenLM/qwen-code/pull/17442) feat(channels): add Aone Code channel plugin with polling event-stream inbound
- [#17509](https://github.com/QwenLM/qwen-code/pull/17509) refactor(managed-agent): replace regex DDL catalog parsing with a tokenizing parser
- [#17480](https://github.com/QwenLM/qwen-code/pull/17480) fix(managed-agent): resolve shared workspace owners for extension control
- [#17508](https://github.com/QwenLM/qwen-code/pull/17508) refactor(managed-agent): unify coordinator dispatch deduplication and lease renewal

#### 🐛 New Issues
- [#17501](https://github.com/QwenLM/qwen-code/issues/17501) Pinned undici dispatcher ignores NODE_EXTRA_CA_CERTS — provider calls to private-CA HTTPS endpoints fail with UNABLE_TO_VERIFY_LEAF_SIGNATURE `priority/P2` `type/bug` `category/core` `scope/core` 💬3
- [#17483](https://github.com/QwenLM/qwen-code/issues/17483) deflake: packages/web-shell/client/e2e/web-shell.session-overview.spec.ts › shadow portal details keep focus in the overview after hover replacement @smoke `priority/P3` `type/bug` `category/development` `scope/testing` 💬3
- [#17467](https://github.com/QwenLM/qwen-code/issues/17467) [managed-agent] managed-config_install is missing from the Session Store reference-container and dependency-traversal lists, so a commit drops its closure `priority/P1` `type/bug` `category/core` `bug` 💬3
- [#17517](https://github.com/QwenLM/qwen-code/issues/17517) Aone channel: follow-up on deferred non-blocking review suggestions from #17442 (R4) `priority/P3` `category/integration` `type/enhancement` 💬2
- [#17512](https://github.com/QwenLM/qwen-code/issues/17512) Qwen Code MCP is listed on MCP ServerList 💬2
- [#17490](https://github.com/QwenLM/qwen-code/issues/17490) Main CI failed: E2E Tests — cli/qwen-serve-generated-ui-state.test.ts > … > saves during a running turn, reads back after reload, and sta… `status/needs-triage` `type/bug` 💬2
- [#17496](https://github.com/QwenLM/qwen-code/issues/17496) bug(sdk-python): cancelling one initialization waiter cancels unrelated calls and input `priority/P2` `type/bug` `category/integration` `scope/sdk` 💬2
- [#17488](https://github.com/QwenLM/qwen-code/issues/17488) bug(acp): PreToolUse block notice is spliced into assistant prose instead of rendering as a discrete message `priority/P2` `type/bug` `category/integration` `scope/ide` 💬2
- [#17489](https://github.com/QwenLM/qwen-code/issues/17489) Windows: project settings created after startup are never hot-reloaded (bootstrap watcher ignores its own root) `priority/P2` `type/bug` `category/configuration` `scope/settings` 💬2
- [#17493](https://github.com/QwenLM/qwen-code/issues/17493) bug(sdk-python): close can return while a concurrently starting child remains alive `priority/P2` `type/bug` `category/integration` `scope/sdk` 💬2
- [#17494](https://github.com/QwenLM/qwen-code/issues/17494) bug(sdk-python): abandoned control calls retain pending requests and timeout handles `priority/P2` `type/bug` `category/integration` `scope/sdk` 💬2
- [#17481](https://github.com/QwenLM/qwen-code/issues/17481) test(web-shell): rationale comment and narrowing assertion for the large-file smoke test `priority/P3` `category/development` `scope/testing` `type/enhancement` 💬2
- [#17479](https://github.com/QwenLM/qwen-code/issues/17479) bug(serve): SSE can exhaust the listener cap and lock out /health; explicit --port silently duplicates daemons `priority/P1` `type/bug` `category/cli` `daemon` 💬2
- [#17424](https://github.com/QwenLM/qwen-code/issues/17424) [managed-agent] Tracker: issues found while adopting managed extension and skill assets end-to-end `priority/P2` `type/bug` `category/core` `scope/session-management` 💬2
- [#17463](https://github.com/QwenLM/qwen-code/issues/17463) Read unchanged placeholder: structured file_unchanged result for SDK and UI observability `priority/P3` `type/feature-request` `category/tools` `scope/web-shell` 💬2
- [#17464](https://github.com/QwenLM/qwen-code/issues/17464) Read dedup: per-invocation opt-out for non-model-facing reads (dedupUnchangedReads) `priority/P3` `category/core` `scope/file-operations` `scope/caching` 💬2
- [#17453](https://github.com/QwenLM/qwen-code/issues/17453) record_artifact reports status=available for files under skipped directories (.qwen/tmp) that never appear in the Artifacts panel `priority/P2` `type/bug` `category/tools` `scope/web-shell` 💬2
- [#17452](https://github.com/QwenLM/qwen-code/issues/17452) Web Shell: markdown image with a local filesystem path renders as broken placeholder, no fallback `priority/P2` `type/bug` `category/ui` `scope/markdown` 💬2
- [#17456](https://github.com/QwenLM/qwen-code/issues/17456) /config on a parent key prints nested API keys and base URLs unmasked `priority/P2` `type/bug` `category/cli` `scope/commands` 💬2
- [#17446](https://github.com/QwenLM/qwen-code/issues/17446) feat(cli): discover models during custom provider setup `priority/P2` `type/feature-request` `category/configuration` `scope/model-switching` 💬2
- [#17435](https://github.com/QwenLM/qwen-code/issues/17435) Cannot view the full model name when selecting a model in the VS Code extension. `priority/P2` `type/bug` `category/ui` `scope/model-switching` 💬2
- [#17505](https://github.com/QwenLM/qwen-code/issues/17505) Qwen Code still offers the discontinued free OAuth tier at sign-in 💬1
- [#17444](https://github.com/QwenLM/qwen-code/issues/17444) cli: AskUserQuestion skips the next question when a free-text answer is submitted with Enter `status/needs-triage` `type/bug`

#### 🔒 Closed Issues
- [#17038](https://github.com/QwenLM/qwen-code/issues/17038) The CLI remains stuck in the login verification state
- [#17262](https://github.com/QwenLM/qwen-code/issues/17262) deflake: packages/cli/src/serve/managed-runtime-terminal.test.ts › ManagedRuntimeTerminals › replays scrollback on reconnect of the same Session
- [#17366](https://github.com/QwenLM/qwen-code/issues/17366) deflake: packages/web-shell/client/e2e/web-shell.files.spec.ts › @smoke keeps large source files readable without tokenizing the entire text
- [#17501](https://github.com/QwenLM/qwen-code/issues/17501) Pinned undici dispatcher ignores NODE_EXTRA_CA_CERTS — provider calls to private-CA HTTPS endpoints fail with UNABLE_TO_VERIFY_LEAF_SIGNATURE
- [#17135](https://github.com/QwenLM/qwen-code/issues/17135) fix(runtime-broker): identity-free extension-status probe cannot resolve shared workspace bindings and surfaces as opaque 503
- [#17381](https://github.com/QwenLM/qwen-code/issues/17381) Managed hooks reject supported description and statusMessage metadata during extension installation
- [#17380](https://github.com/QwenLM/qwen-code/issues/17380) managed-agent: pre-admission Turn fails with hosted_harness_unavailable while Workspace runtime is still provisioning
- [#17512](https://github.com/QwenLM/qwen-code/issues/17512) Qwen Code MCP is listed on MCP ServerList
- [#17407](https://github.com/QwenLM/qwen-code/issues/17407) [managed-agent] External-files child session turn fails terminally with workspace_unavailable before admission

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

**Stars:** 394,613 · **Open issues:** 8,245 · **Last push:** <1h ago

On November 17, 2026, there were no new releases for OpenClaw, but several important pull requests were merged, including a fix ensuring handed-off services remain operational after logging, and a crucial correction to prevent Gateway stalls during recovery processes. Additionally, the updates improved UI elements, such as adjusting session menu scrollbars and refining plugin installation flows. Noteworthy new issues include a significant bug with the 2026.11.3 to 2026.11.4 update, which reported lengthy processing times and SQLite locking during Gateway handoffs, prompting concerns over necessary SSH recovery. Overall, the day consisted of routine maintenance with a focus on bug fixes and user interface enhancements.

#### ✅ Merged PRs
- [#200412](https://github.com/openclaw/openclaw/pull/200412) fix: keep handed-off services running after logging
- [#200409](https://github.com/openclaw/openclaw/pull/200409) fix(test): align tool discovery with bounded schema hints
- [#200402](https://github.com/openclaw/openclaw/pull/200402) fix(ci): classify recovery browser test server ownership
- [#200331](https://github.com/openclaw/openclaw/pull/200331) fix(update): a failed shell completion or service definition refresh is never retried after an update
- [#200407](https://github.com/openclaw/openclaw/pull/200407) fix(ui): start session menu scrollbars closer to the rounded corners
- [#200395](https://github.com/openclaw/openclaw/pull/200395) fix(ci): dependency checks fail on private helper exports
- [#200410](https://github.com/openclaw/openclaw/pull/200410) chore(ui): refresh control ui locales
- [#200392](https://github.com/openclaw/openclaw/pull/200392) fix: chat plugin installs reject Git and third-party npm sources
- [#200405](https://github.com/openclaw/openclaw/pull/200405) fix(ci): launch Windows artifact children without a shell
- [#200406](https://github.com/openclaw/openclaw/pull/200406) fix: confirm installs of hidden plugins
- [#200389](https://github.com/openclaw/openclaw/pull/200389) fix(gateway): leave a replaced installation to the update run that holds it
- [#200398](https://github.com/openclaw/openclaw/pull/200398) fix(ci): restore full release watcher startup
- [#184515](https://github.com/openclaw/openclaw/pull/184515) feat(auth): enable guests to access sessions through selected mentions
- [#200403](https://github.com/openclaw/openclaw/pull/200403) fix: use hosted catalog limits and input for live-listed models
- [#200399](https://github.com/openclaw/openclaw/pull/200399) fix: handle retired animation IDs in WebKit checks
- [#200401](https://github.com/openclaw/openclaw/pull/200401) fix: keep catalog publication regression serializable
- [#200397](https://github.com/openclaw/openclaw/pull/200397) improve(ci): reduce docs link audit overhead
- [#200374](https://github.com/openclaw/openclaw/pull/200374) fix(plugins): prevent Gateway stalls while copying reload recovery
- [#200393](https://github.com/openclaw/openclaw/pull/200393) fix(ui): keep the scrollbar inside the rounded corners of long session menus
- [#200391](https://github.com/openclaw/openclaw/pull/200391) fix: preserve Goal cancellation checks after consumed child returns
- [#200382](https://github.com/openclaw/openclaw/pull/200382) refactor: retire obsolete agent command policy mocks
- [#200400](https://github.com/openclaw/openclaw/pull/200400) chore(ui): refresh control ui locales
- [#200370](https://github.com/openclaw/openclaw/pull/200370) fix(gateway): prevent readiness probes from freezing the main thread
- [#200343](https://github.com/openclaw/openclaw/pull/200343) improve(ui): show plugin card installation and connection states
- [#200355](https://github.com/openclaw/openclaw/pull/200355) fix: agent session searches stall on large histories
- [#200360](https://github.com/openclaw/openclaw/pull/200360) fix(ios): approval alerts retain an earlier ID role
- [#200366](https://github.com/openclaw/openclaw/pull/200366) fix(update): keep openclaw runnable when a pnpm or Bun update is killed while replacing the package
- [#200338](https://github.com/openclaw/openclaw/pull/200338) fix: let interrupted Control UI builds recover on restart
- [#200339](https://github.com/openclaw/openclaw/pull/200339) fix: agents' first Knowledge saves and lookups fail because the prompt never shows their call shapes
- [#200350](https://github.com/openclaw/openclaw/pull/200350) fix: stop retrying worktree cleanup that cannot preserve data
- [#198251](https://github.com/openclaw/openclaw/pull/198251) fix(ios): keep conversation history visible during agent discovery
- [#200006](https://github.com/openclaw/openclaw/pull/200006) fix(deps): update Undici to 8.12.4
- [#200385](https://github.com/openclaw/openclaw/pull/200385) fix: honor mobile validation waiver for 2026.10.33
- [#200368](https://github.com/openclaw/openclaw/pull/200368) fix(pr): avoid disk-heavy exports during review and merge preparation
- [#200363](https://github.com/openclaw/openclaw/pull/200363) fix(codex): preserve prompt projection through quota fallback
- [#197136](https://github.com/openclaw/openclaw/pull/197136) fix(ios): keep Talk replies below the spoken turn that prompted them
- [#200375](https://github.com/openclaw/openclaw/pull/200375) fix(release): honor 2026.10.33 performance waiver
- [#200315](https://github.com/openclaw/openclaw/pull/200315) fix(ui): Escape doesn't stop a running reply when focus is outside the composer
- [#200353](https://github.com/openclaw/openclaw/pull/200353) fix: stop retained sends after device revocation
- [#200335](https://github.com/openclaw/openclaw/pull/200335) fix: slow worktree cleanup blocks new sessions
- [#200314](https://github.com/openclaw/openclaw/pull/200314) fix: keep automations running when you open another chat
- [#200358](https://github.com/openclaw/openclaw/pull/200358) fix: keep Send disabled after switching agents on a global chat until that agent's history loads
- [#194235](https://github.com/openclaw/openclaw/pull/194235) perf(ios): stop redrawing the model menu and buttons on every keystroke
- [#200320](https://github.com/openclaw/openclaw/pull/200320) fix(plugins): avoid Gateway stalls during source preparation
- [#200333](https://github.com/openclaw/openclaw/pull/200333) fix: keep Knowledge memory to decisions and outcomes, not step-by-step progress
- [#200326](https://github.com/openclaw/openclaw/pull/200326) refactor(sessions): stop chat work by a recorded cause, not by a changed id
- [#200299](https://github.com/openclaw/openclaw/pull/200299) fix(worktrees): partial-clone removal times out scanning promisor packs
- [#200349](https://github.com/openclaw/openclaw/pull/200349) refactor(doctor): consolidate browser readiness tests
- [#200352](https://github.com/openclaw/openclaw/pull/200352) chore(ui): refresh control ui locales
- [#199123](https://github.com/openclaw/openclaw/pull/199123) fix(ui): selection stays stuck when clicking beside chat messages
- [#199111](https://github.com/openclaw/openclaw/pull/199111) fix(ui): restore control styling and truncate long branch names
- [#200348](https://github.com/openclaw/openclaw/pull/200348) chore(ui): refresh control ui locales
- [#200337](https://github.com/openclaw/openclaw/pull/200337) fix(ui): long tool activity summaries run past the reply text in Safari and Firefox
- [#200064](https://github.com/openclaw/openclaw/pull/200064) fix: compact tool input hints hide required arguments when a schema is wide
- [#200327](https://github.com/openclaw/openclaw/pull/200327) fix(browser): surface existing routes before access handoff
- [#200313](https://github.com/openclaw/openclaw/pull/200313) fix(ci): repair beta qualification boundaries
- [#200330](https://github.com/openclaw/openclaw/pull/200330) fix(gateway): preserve clean exit while releasing retained state leases
- [#200249](https://github.com/openclaw/openclaw/pull/200249) fix(subagents): a child result committed to the requester transcript is never lost or replayed
- [#143882](https://github.com/openclaw/openclaw/pull/143882) feat(slack): show streamed reasoning as task rows and roll long native streams into continuation messages
- [#200145](https://github.com/openclaw/openclaw/pull/200145) feat(openclaw-id): members can recover access with a recovery kit
- [#200303](https://github.com/openclaw/openclaw/pull/200303) fix(templates): release earlier Template-managed agents
- [#200334](https://github.com/openclaw/openclaw/pull/200334) fix: recover restart dashboards and stabilize release qualification
- [#181446](https://github.com/openclaw/openclaw/pull/181446) feat(release): request stable and beta Gateway Store delivery
- [#197378](https://github.com/openclaw/openclaw/pull/197378) fix(daemon): gateway install fails when unit drop-ins exist before the first install
- [#200321](https://github.com/openclaw/openclaw/pull/200321) fix(sessions): shipped updaters refuse the next release because the transcript worker re-emits the Gateway graph
- [#198803](https://github.com/openclaw/openclaw/pull/198803) fix(templates): blocked Template Add leaves an agent Retry cannot finish
- [#200322](https://github.com/openclaw/openclaw/pull/200322) fix(update): keep SQLite contention frames in bounded failure reports
- [#196875](https://github.com/openclaw/openclaw/pull/196875) docs(install): describe the Ansible user service and onboarding accurately
- [#200319](https://github.com/openclaw/openclaw/pull/200319) docs: help readers understand PRs without reading the code
- [#199917](https://github.com/openclaw/openclaw/pull/199917) fix(release): accept freshly published package candidates
- [#200290](https://github.com/openclaw/openclaw/pull/200290) improve(ci): shorten candidate registry preparation
- [#199920](https://github.com/openclaw/openclaw/pull/199920) improve(ci): avoid unused release watcher checkouts
- [#200306](https://github.com/openclaw/openclaw/pull/200306) fix(storage): allow first session after missing-store reads
- [#199913](https://github.com/openclaw/openclaw/pull/199913) improve(ci): narrow FRV admission helper checkout
- [#199988](https://github.com/openclaw/openclaw/pull/199988) feat(templates): honor optional preferred models on Add
- [#200284](https://github.com/openclaw/openclaw/pull/200284) fix(state): prevent retained deleted agents from blocking Gateway startup
- [#200300](https://github.com/openclaw/openclaw/pull/200300) fix(templates): authorize new-agent rollback writes
- [#200311](https://github.com/openclaw/openclaw/pull/200311) chore(ui): refresh control ui locales
- [#200298](https://github.com/openclaw/openclaw/pull/200298) refactor(cli): retire unused configure test doubles
- [#200252](https://github.com/openclaw/openclaw/pull/200252) docs: fix first-time setup typo in Getting Started
- [#200302](https://github.com/openclaw/openclaw/pull/200302) fix: preserve 2026.10.33 plugin API compatibility identity
- [#200286](https://github.com/openclaw/openclaw/pull/200286) fix(ui): stop permission warnings on read-only sidebar group hover
- [#199659](https://github.com/openclaw/openclaw/pull/199659) fix: saved plugin config stays deferred while a native model catalog lookup hangs
- [#200277](https://github.com/openclaw/openclaw/pull/200277) fix: backport required replay, install and boot fixes to 2026.10.33
- [#198550](https://github.com/openclaw/openclaw/pull/198550) fix(tavily): allow a baseUrl override on a private or internal host
- [#200191](https://github.com/openclaw/openclaw/pull/200191) refactor(sessions): address chats by ChatRef, fence writers by lease, and stop refusing on captured ids
- [#199911](https://github.com/openclaw/openclaw/pull/199911) improve(ci): admit slow package recovery checks earlier
- [#199915](https://github.com/openclaw/openclaw/pull/199915) improve(ci): overlap isolated upgrade baseline probes
- [#200279](https://github.com/openclaw/openclaw/pull/200279) fix: resume accepted subagent answers after Gateway restart
- [#200268](https://github.com/openclaw/openclaw/pull/200268) fix(exec): count only declared services and drop the survivor settle window
- [#200265](https://github.com/openclaw/openclaw/pull/200265) fix: prevent session auth source checks from stalling the Gateway
- [#200088](https://github.com/openclaw/openclaw/pull/200088) feat(openclaw-id): owners can approve a member's new browser
- [#200278](https://github.com/openclaw/openclaw/pull/200278) fix(release): scope the approved 2026.10.33 iOS screenshot exception
- [#193487](https://github.com/openclaw/openclaw/pull/193487) fix(desktop): finish VncAuth before readiness probes close
- [#200255](https://github.com/openclaw/openclaw/pull/200255) fix(qa): live runs fail with configured SecretRefs
- [#200273](https://github.com/openclaw/openclaw/pull/200273) fix(update): openclaw cannot start when the first release-layout update is killed mid-conversion
- [#197782](https://github.com/openclaw/openclaw/pull/197782) feat(openclaw-id): members with an admin role are administrators
- [#200254](https://github.com/openclaw/openclaw/pull/200254) fix: complete replay-safe turns after deferred item conflict recovery
- [#199852](https://github.com/openclaw/openclaw/pull/199852) improve: make visual PR fixes easier to review
- [#200260](https://github.com/openclaw/openclaw/pull/200260) fix(update): preserve successful startup writes for the next Doctor
- [#200247](https://github.com/openclaw/openclaw/pull/200247) fix(installer): macOS onboarding cannot install plugins after the shell installer
- [#198073](https://github.com/openclaw/openclaw/pull/198073) fix: prevent worker writes to trusted runtime storage
- [#200246](https://github.com/openclaw/openclaw/pull/200246) fix: keep extended-stable qualification fixtures on their intended paths
- [#200245](https://github.com/openclaw/openclaw/pull/200245) test(research): expect lifecycle-only changes to keep transcript jobs
- [#200133](https://github.com/openclaw/openclaw/pull/200133) fix(ci): restore live audit consumers and readiness fixtures
- [#200225](https://github.com/openclaw/openclaw/pull/200225) fix(ci): recover stalled release ancestry hydration
- [#199677](https://github.com/openclaw/openclaw/pull/199677) fix: keep iPad keyboard accessory clear of composer actions
- [#200250](https://github.com/openclaw/openclaw/pull/200250) fix(exec): count only real services against the exec service cap
- [#200222](https://github.com/openclaw/openclaw/pull/200222) fix: keep credential diagnostics responsive on slow filesystems
- [#200205](https://github.com/openclaw/openclaw/pull/200205) fix(web): honor OpenClaw ID permissions in browser notifications
- [#200017](https://github.com/openclaw/openclaw/pull/200017) fix(onboard): import memories through the running Gateway
- [#200201](https://github.com/openclaw/openclaw/pull/200201) fix(release): admit candidate-owned plugin preflight transport
- [#199109](https://github.com/openclaw/openclaw/pull/199109) fix(signal): links with non-English characters are shown twice
- [#200242](https://github.com/openclaw/openclaw/pull/200242) fix(auth): main does not build after the identity path lookup moved
- [#200199](https://github.com/openclaw/openclaw/pull/200199) fix(cli): nodes push test still expects silent JSON-mode failures
- [#200229](https://github.com/openclaw/openclaw/pull/200229) fix(plugins): reuse captured package metadata during reconstruction
- [#200183](https://github.com/openclaw/openclaw/pull/200183) fix: restore hourly catalog, continuation, and replay checks
- [#200202](https://github.com/openclaw/openclaw/pull/200202) fix(sessions): stop self-only recall from scanning unrelated sessions
- [#200181](https://github.com/openclaw/openclaw/pull/200181) fix(update): --no-restart update fails when the Gateway restarts itself during Doctor's stop
- [#200203](https://github.com/openclaw/openclaw/pull/200203) refactor(paths): keep identity lookup imports passive
- [#200103](https://github.com/openclaw/openclaw/pull/200103) fix(test): retain source scan fixtures after cleanup failure
- [#200206](https://github.com/openclaw/openclaw/pull/200206) fix(release): honor scoped 2026.11.5 Telegram waiver
- [#200213](https://github.com/openclaw/openclaw/pull/200213) fix(auto-reply): show revoked queued input as a withheld failure instead of a silent cancel
- [#200204](https://github.com/openclaw/openclaw/pull/200204) fix(release): honor 2026.11.5 performance waiver
- [#200101](https://github.com/openclaw/openclaw/pull/200101) fix: isolate transport policy between shared-worker test files
- [#200211](https://github.com/openclaw/openclaw/pull/200211) fix: reduce Gateway stalls during session GitHub actions
- [#200171](https://github.com/openclaw/openclaw/pull/200171) fix(ci): accept intentional activated Gateway startup skips
- [#200216](https://github.com/openclaw/openclaw/pull/200216) fix: keep native resource startup responsive on slow filesystems
- [#200208](https://github.com/openclaw/openclaw/pull/200208) fix(ai): keep provider checkpoints across model switches
- [#200172](https://github.com/openclaw/openclaw/pull/200172) fix(update): finish managed updates when readers race the old updater's database capture
- [#200190](https://github.com/openclaw/openclaw/pull/200190) fix: keep retryable subagent completions scheduled
- [#200192](https://github.com/openclaw/openclaw/pull/200192) fix: keep cold credential reads responsive on slow filesystems
- [#200168](https://github.com/openclaw/openclaw/pull/200168) test(ui): resolve plugin fixture dependencies from repository root
- [#200193](https://github.com/openclaw/openclaw/pull/200193) fix: avoid synchronous compiler files during plugin loading
- [#198835](https://github.com/openclaw/openclaw/pull/198835) feat(update): keep each release in its own directory on OpenClaw-owned installs
- [#200195](https://github.com/openclaw/openclaw/pull/200195) chore(cli): consolidate log polling lifecycle proof
- [#200090](https://github.com/openclaw/openclaw/pull/200090) improve(ios): catch blank chat transcripts in the simulator behavior harness
- [#200114](https://github.com/openclaw/openclaw/pull/200114) improve(compaction): prepare large histories outside the Gateway thread
- [#200176](https://github.com/openclaw/openclaw/pull/200176) fix(gateway): detached work keeps its origin's authority when the parent chat is edited
- [#184206](https://github.com/openclaw/openclaw/pull/184206) fix(codex): stop background exec completions from replaying full history into a fresh thread
- [#200165](https://github.com/openclaw/openclaw/pull/200165) fix(subagents): retry completion delivery after requester interruption
- [#200169](https://github.com/openclaw/openclaw/pull/200169) fix(gateway): move managed update lease operations off the main thread
- [#194184](https://github.com/openclaw/openclaw/pull/194184) fix: Talk falls back to a supported thinking level instead of failing
- [#200179](https://github.com/openclaw/openclaw/pull/200179) refactor(infra): keep SQLite signal reads out of worker runtime
- [#200140](https://github.com/openclaw/openclaw/pull/200140) fix(knowledge): keep historical claims distinct and reject changed retries
- [#200138](https://github.com/openclaw/openclaw/pull/200138) fix(ui): align dropdown arrows on mobile New Session
- [#200187](https://github.com/openclaw/openclaw/pull/200187) chore(ui): refresh control ui locales
- [#198133](https://github.com/openclaw/openclaw/pull/198133) feat(ui): redesign tool-call rendering, grouping, and lifecycle narration
- [#200031](https://github.com/openclaw/openclaw/pull/200031) fix: local path commands pick a neighboring file when a symlinked folder is followed by `..`
- [#200173](https://github.com/openclaw/openclaw/pull/200173) refactor(plugins): centralize inspection lifetime tests
- [#199534](https://github.com/openclaw/openclaw/pull/199534) fix(ui): keep loaded history visible during compaction
- [#200157](https://github.com/openclaw/openclaw/pull/200157) fix(package): stop shipping private CI/QA docs and Chrome extension test helpers
- [#200162](https://github.com/openclaw/openclaw/pull/200162) fix: keep Gateway responsive during cold terminal startup
- [#200163](https://github.com/openclaw/openclaw/pull/200163) fix(openai): replay encrypted reasoning without unverifiable item ids
- [#200161](https://github.com/openclaw/openclaw/pull/200161) fix(agents): avoid unnecessary completion imports during model selection
- [#197300](https://github.com/openclaw/openclaw/pull/197300) docs: add v2026.11.4 patch release notes
- [#200117](https://github.com/openclaw/openclaw/pull/200117) chore(postgres): cover compaction watched-session prompts
- [#198943](https://github.com/openclaw/openclaw/pull/198943) test: consolidate redundant coverage (198795 recut)
- [#199957](https://github.com/openclaw/openclaw/pull/199957) Feat/add new flash model
- [#199918](https://github.com/openclaw/openclaw/pull/199918) fix(update): refuse Gateway-started updates on Windows Scheduled Task installs
- [#200126](https://github.com/openclaw/openclaw/pull/200126) test: expect the OpenAI API-key listing in the auth-order outcome
- [#199404](https://github.com/openclaw/openclaw/pull/199404) fix(ui): dashboard reports are cut off and catch swipes on phones
- [#200153](https://github.com/openclaw/openclaw/pull/200153) fix(update): stop reporting unset git config keys as failing checks
- [#200164](https://github.com/openclaw/openclaw/pull/200164) chore(ui): refresh control ui locales
- [#198936](https://github.com/openclaw/openclaw/pull/198936) test: consolidate redundant coverage (198793, part 2)
- [#200159](https://github.com/openclaw/openclaw/pull/200159) revert: skills-used full-transcript scan on every chat history page (#196065)
- [#200136](https://github.com/openclaw/openclaw/pull/200136) fix(gateway): avoid filesystem stalls during catalog refresh
- [#200099](https://github.com/openclaw/openclaw/pull/200099) refactor(sessions): follow the chat by key for stored delivery references
- [#200152](https://github.com/openclaw/openclaw/pull/200152) fix(update): bridge 2026.11.5-beta.4 updaters
- [#200156](https://github.com/openclaw/openclaw/pull/200156) fix(agents): keep read-only steering carriers when publishing suppressed user envelopes
- [#200043](https://github.com/openclaw/openclaw/pull/200043) fix(ci): match update refusal probe to selected candidate
- [#198933](https://github.com/openclaw/openclaw/pull/198933) test: consolidate redundant coverage (198793, part 1)
- [#198932](https://github.com/openclaw/openclaw/pull/198932) test: consolidate redundant coverage (198789, part 2)
- [#200144](https://github.com/openclaw/openclaw/pull/200144) refactor(cli): consolidate camera command tests
- [#200139](https://github.com/openclaw/openclaw/pull/200139) fix(cli): avoid initializing provider runtime during cleanup
- [#198879](https://github.com/openclaw/openclaw/pull/198879) fix(ui): show mobile destinations without the drawer exit delay
- [#200146](https://github.com/openclaw/openclaw/pull/200146) chore(ui): refresh control ui locales
- [#199899](https://github.com/openclaw/openclaw/pull/199899) improve(sessions): archive inactive transcripts by default
- [#200097](https://github.com/openclaw/openclaw/pull/200097) refactor(agents): own background commands and yield waits by the chat
- [#200102](https://github.com/openclaw/openclaw/pull/200102) fix(models): guessed non-chat models leave the default picker instead of being refused
- [#200128](https://github.com/openclaw/openclaw/pull/200128) fix(goals): resume goals in visible spawned tasks
- [#200134](https://github.com/openclaw/openclaw/pull/200134) fix(slack): settle progress cards after media replies
- [#196065](https://github.com/openclaw/openclaw/pull/196065) feat(ui): show skills used in conversation details
- [#193869](https://github.com/openclaw/openclaw/pull/193869) fix(subagents): stops a finished sub-agent's chat being deleted before its parent reads the result
- [#200092](https://github.com/openclaw/openclaw/pull/200092) fix(cron): retry one-shot jobs after transient aborts
- [#199371](https://github.com/openclaw/openclaw/pull/199371) fix(ci): serialize plugin reload product fixtures
- [#200063](https://github.com/openclaw/openclaw/pull/200063) fix(ai): keep provider checkpoints across credential sources

#### 🐛 New Issues
- [#200289](https://github.com/openclaw/openclaw/issues/200289) [Bug]: 2026.11.3 → 2026.11.4 update takes hours, fails with SQLite lock during Gateway handoff, requires SSH recovery `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `impact:crash-loop` 💬4
- [#200174](https://github.com/openclaw/openclaw/issues/200174) [Bug]: macOS/Codex admitted PPTX unavailable to workspace-only finance agent `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬4
- [#200060](https://github.com/openclaw/openclaw/issues/200060) [Bug]: An enabled stream automation counts as a permanently active cron run and blocks cooperative gateway suspend (2026.11.3) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬4
- [#200148](https://github.com/openclaw/openclaw/issues/200148) [Bug]: 2026.11.3 macOS: in-process /restart (SIGUSR2) hangs forever after failed gateway close ("Plugin runtime still owns resources | service child cleanup identity lost") — port closed, pid alive, no force-exit, launchd never respawns `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬4
- [#200022](https://github.com/openclaw/openclaw/issues/200022) Update failure: package-backup-retention (2026.11.4) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬4
- [#199990](https://github.com/openclaw/openclaw/issues/199990) Update failure: database-schema-preflight (2026.11.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬4
- [#200276](https://github.com/openclaw/openclaw/issues/200276) [Bug]: memory forget --dry-run uses unbounded SQLite IN lists for selected chunk IDs `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#200072](https://github.com/openclaw/openclaw/issues/200072) sessions_send followup reports initial policy denial as revoked and discards endpoint/reason `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#200404](https://github.com/openclaw/openclaw/issues/200404) Update failure: package-update (2026.10.10) `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#200408](https://github.com/openclaw/openclaw/issues/200408) [Bug]: TUI shows replies over 8,000 characters cut with "...(truncated)..." after reopening a session `bug` `no-stale` `bug:behavior` `P2` 💬2
- [#200344](https://github.com/openclaw/openclaw/issues/200344) [Feature]: one-way A2A dispatch that also suppresses failure receipts (refile of #44309) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#200270](https://github.com/openclaw/openclaw/issues/200270) `compaction.notifyUser`: start notice is sent only after the pre-compaction memory flush, so long flushes look like a hang `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#200263](https://github.com/openclaw/openclaw/issues/200263) OpenAI API-key onboarding misreports quota failures as Codex subscription exhaustion and remains Ready after a failed check `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#200261](https://github.com/openclaw/openclaw/issues/200261) Update failure: doctor-failed (2026.9.4) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#200240](https://github.com/openclaw/openclaw/issues/200240) Update failure: requested (2026.11.4) `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#200110](https://github.com/openclaw/openclaw/issues/200110) [Feature]: Secure noninteractive credential import from secret managers `P3` `impact:auth-provider` 💬2
- [#200111](https://github.com/openclaw/openclaw/issues/200111) [Feature]: Portable deployment profiles for model, agent and optional plugin suites `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#200112](https://github.com/openclaw/openclaw/issues/200112) [Feature]: Resumable small-host bootstrap with bounded acceptance receipts `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬2
- [#200224](https://github.com/openclaw/openclaw/issues/200224) [Bug]: 2026.11.5 beta update refuses retired agents.defaults.heartbeat, but removing it on stable re-enables heartbeats `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬2
- [#200207](https://github.com/openclaw/openclaw/issues/200207) Update failure: managed-service-update-handoff (2026.10.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#200175](https://github.com/openclaw/openclaw/issues/200175) SecretRef "unavailable in this command path" hides SECRET_PROVIDER_UNAVAILABLE when the CLI runs in a read-only sandbox `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#200170](https://github.com/openclaw/openclaw/issues/200170) macOS: every `openclaw update` re-installs the gateway LaunchAgent even when nothing changed, triggering a "Background Items Added" notification per release `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#200142](https://github.com/openclaw/openclaw/issues/200142) [Bug]: --json/generic failure hides already-composed remedies outside runCommandWithRuntime (models auth login --device-code, attach resolveSessionTarget) `no-stale` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` 💬2
- [#200083](https://github.com/openclaw/openclaw/issues/200083) [Bug]: One failed HEARTBEAT.md archive write permanently blocks doctor heartbeat migration; the printed remedy ("Rerun doctor to retry safely") can never succeed `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#200075](https://github.com/openclaw/openclaw/issues/200075) [Bug]: deleted cron-session archives (agent:<id>:cron:<job>) are counted as eligible memory sessions, keeping memory status dirty `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#199994](https://github.com/openclaw/openclaw/issues/199994) Claude Desktop group names with non-Latin-1 characters are shown garbled (UTF-16 Local Storage value decoded as latin1) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#200023](https://github.com/openclaw/openclaw/issues/200023) [Feature]: macOS: managed service pins TMPDIR to <stateDir>/tmp; exec children inherit it and nothing ages there `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#200365](https://github.com/openclaw/openclaw/issues/200365) macOS: Default DMG window clips the OpenClaw and Applications captions `no-stale` `P3` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#200361](https://github.com/openclaw/openclaw/issues/200361) Trusted-proxy auth behind Cloudflare Access trusts identity headers without verifying the Access JWT `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#200364](https://github.com/openclaw/openclaw/issues/200364) macOS: Local Network permission is requested before onboarding `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#200356](https://github.com/openclaw/openclaw/issues/200356) [Bug]: Agent port back to SQLite is refused after an update ("observed changed canonical rows or allocations") `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#200357](https://github.com/openclaw/openclaw/issues/200357) [Bug]: Git install update refuses targets after #198661: "Declaration input escapes checkout" in preflight-build `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#200351](https://github.com/openclaw/openclaw/issues/200351) gateway status takes 16-22s on Windows 11 - blocked in spawnSync -> tasklist.exe `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#200347](https://github.com/openclaw/openclaw/issues/200347) [Bug]: Codex appServer.networkProxy permission profile drops the /tmp that workspace-write grants `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#200346](https://github.com/openclaw/openclaw/issues/200346) Control UI dictation discards long recordings on screen lock / blur, and audio is not retained for retry (mobile) `P1` `impact:data-loss` 💬1
- [#200340](https://github.com/openclaw/openclaw/issues/200340) [Bug]: macOS app's first message fails with false "host is low on memory" because Bun's process.availableMemory() is free pages only `bug` `clawsweeper:source-repro` `P0` `issue-rating: 🦞 diamond lobster` 💬1
- [#200336](https://github.com/openclaw/openclaw/issues/200336) Subagent completion held 30 min for an idle requester, then discarded when the requester's settle turn messages the source session ("source lifecycle changed before completion delivery") `P1` `clawsweeper:needs-info` `impact:session-state` `impact:message-loss` 💬1
- [#200332](https://github.com/openclaw/openclaw/issues/200332) [Feature]: Bind explicit per-turn delivery consent to the accepted result in the plugin SDK `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#200325](https://github.com/openclaw/openclaw/issues/200325) [Bug]: Chat reports rejected saved credentials when no model is connected `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#200307](https://github.com/openclaw/openclaw/issues/200307) [Bug]: Unrelated same-agent session creation aborts cron conditions and can disable watchers `bug` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#200323](https://github.com/openclaw/openclaw/issues/200323) [Bug]: Chat shows an unconfigured built-in model as its selected default `no-stale` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` 💬1
- [#200316](https://github.com/openclaw/openclaw/issues/200316) PostgreSQL worktree cleanup fails with ambiguous value_json `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#200309](https://github.com/openclaw/openclaw/issues/200309) sessions.create fired from an authenticated Control UI client without user action resets the main session in place (context + cache prefix lost, senderId unknown) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#200308](https://github.com/openclaw/openclaw/issues/200308) [Feature]: Allow secret egress substitution over plain HTTP for operator-allowlisted private IPs `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#200271](https://github.com/openclaw/openclaw/issues/200271) [Bug]: Startup migrates completed retained-agent stores and crashes with vec0 error `bug` `no-stale` `P1` `clawsweeper:fix-shape-clear` 💬1
- [#200296](https://github.com/openclaw/openclaw/issues/200296) [Docs Bug]: Missing hyphen in Getting Started reading hint `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#200285](https://github.com/openclaw/openclaw/issues/200285) [Bug]: Sidebar group names show a write-access warning on ordinary hover `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#200283](https://github.com/openclaw/openclaw/issues/200283) [Bug]: Control-click on a sidebar session link does a full page reload instead of opening the session menu (macOS app, 2026.11.4) `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#200281](https://github.com/openclaw/openclaw/issues/200281) [Bug]: memory-lancedb recall and forget work in group chats, though its memory provider is owner-private `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#200269](https://github.com/openclaw/openclaw/issues/200269) Per-model opt-out of `compaction.model` so sessions on a local model compact on that same model `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#200267](https://github.com/openclaw/openclaw/issues/200267) isConfiguredAgentDatabaseTarget is quadratic at gateway boot (stat + realpath per target per row) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#200244](https://github.com/openclaw/openclaw/issues/200244) [Bug]: OpenClaw macOS onboarding crashes when detached npm inherits /dev/tty `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬1
- [#200259](https://github.com/openclaw/openclaw/issues/200259) [Bug]: Download button/link missing from Control UI file browser `bug` `bug:behavior` `P2` `impact:ux-friction` 💬1
- [#200248](https://github.com/openclaw/openclaw/issues/200248) [Bug]: 2026.11.3 and 2026.11.4 lack the merged fix #180692 — Dreaming light phase fails nightly with 'worker task timed out' `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#200243](https://github.com/openclaw/openclaw/issues/200243) [Bug]: GitHub publication result for a deleted session retries forever ("GitHub publication transcript owner changed") `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#200233](https://github.com/openclaw/openclaw/issues/200233) [Feature]: Control UI: show the voice level as a timeline across the composer `enhancement` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#200232](https://github.com/openclaw/openclaw/issues/200232) [Bug]: Historical Usage dashboard fails with usage refresh UNAVAILABLE and retained archive decompression error `P2` `impact:ux-friction` 💬1
- [#200228](https://github.com/openclaw/openclaw/issues/200228) CI fails before testing when Boat sandbox starts are exhausted `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#200227](https://github.com/openclaw/openclaw/issues/200227) [Bug]: memory-core native watcher pegs Gateway main thread (~1 core, 3.4 GB) on a large extraPaths tree (~100k .md / 7.8k dirs) on Linux `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` 💬1
- [#200214](https://github.com/openclaw/openclaw/issues/200214) Telegram native commands (plugin commands and /login) bypass before_dispatch on 2026.9.37 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#200217](https://github.com/openclaw/openclaw/issues/200217) Other stops at 15 sessions even when the sidebar has room `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#200215](https://github.com/openclaw/openclaw/issues/200215) No supported way for a plugin to append to another session's transcript from inside a run (2026.9.37, SessionTranscriptWriterClaimReboundError) 💬1
- [#200210](https://github.com/openclaw/openclaw/issues/200210) [Bug]: Incognito first-turn fix (PR #183800 / commit 34e60768, merged 2026-11-05) is absent from stable releases 2026.11.3 and 2026.11.4 `bug` `regression` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#200200](https://github.com/openclaw/openclaw/issues/200200) [Bug]: pnpm-workspace override pins @hono/node-server below 2.1.6; managed plugin installs are held below the host's own version `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#200188](https://github.com/openclaw/openclaw/issues/200188) Support larger native 1Password registries without weakening approvals `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#200194](https://github.com/openclaw/openclaw/issues/200194) [Bug]: Installing Bash completion hides existing login settings `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#200189](https://github.com/openclaw/openclaw/issues/200189) CLI backend: "Native tool authority capture is no longer active" causes recurring tool-call/turn failures (observed on 2026.11.4) `P1` `impact:message-loss` 💬1
- [#200184](https://github.com/openclaw/openclaw/issues/200184) [Bug]: Windows beta.4 terminal update hangs CPU-bound in validating after candidate-state-cleanup `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#200186](https://github.com/openclaw/openclaw/issues/200186) Plugin tool context lacks nativeChannelId on the MCP loopback (CLI backend) tool surface `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#200182](https://github.com/openclaw/openclaw/issues/200182) [Bug]: Native paste from the session transcript can duplicate text in the composer `P2` `clawsweeper:not-repro-on-main` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#200160](https://github.com/openclaw/openclaw/issues/200160) [Feature]: Lossless container upgrades — runtime-installed system dependencies have no persistence or restore path `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#200158](https://github.com/openclaw/openclaw/issues/200158) [Feature]: Managed worktrees: allow choosing the branch name or a branch prefix (currently fixed `openclaw/<name>`) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#200149](https://github.com/openclaw/openclaw/issues/200149) [Feature]: Gate background exec completion wakes — escalate failures to the originating session, skip silent successes `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#200141](https://github.com/openclaw/openclaw/issues/200141) CLI runner omits `modelProviderId`/`modelId` from the `before_agent_run` hook context (follow-up to #100427) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#200137](https://github.com/openclaw/openclaw/issues/200137) [Feature]: claude-cli: per-agent pass-through for allowlisted Claude Code settings `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#200131](https://github.com/openclaw/openclaw/issues/200131) [Bug]: Geolocation cache expiry is postponed when reopening a cached database `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#200130](https://github.com/openclaw/openclaw/issues/200130) compaction: size trigger budget to the smallest model window and fall back to a larger summarizer instead of hard-trimming `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#200129](https://github.com/openclaw/openclaw/issues/200129) sessions: pending input stuck in interrupted retries forever via CONTINUATION_PROMPT after turn-identity mismatch `P1` `impact:session-state` 💬1
- [#200124](https://github.com/openclaw/openclaw/issues/200124) [Bug]: transcripts path silently chooses one of conflicting artifact options `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#200122](https://github.com/openclaw/openclaw/issues/200122) fix(cli): progress reporting prints literal NaN% and a malformed OSC sequence on NaN percentage `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#200121](https://github.com/openclaw/openclaw/issues/200121) Update failure: package-update (2026.11.1) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#200119](https://github.com/openclaw/openclaw/issues/200119) [Bug]: OpenRouter Jev decisions rejected before dispatch because runtime preparation strips decision capabilities `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#200116](https://github.com/openclaw/openclaw/issues/200116) [Bug]: cron agentTurn into a session target fails in series when preflight compaction outlasts the 60 s setup watchdog `P1` `impact:other` 💬1
- [#200106](https://github.com/openclaw/openclaw/issues/200106) [Bug]: Streamable HTTP MCP session is never replaced when the server rejects it with "invalid session" `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#200096](https://github.com/openclaw/openclaw/issues/200096) [Bug]: Regression in 2026.11.4: reused claude-cli live session fails every other turn with "Native tool authority capture is no longer active." `P1` `impact:message-loss` 💬1
- [#200095](https://github.com/openclaw/openclaw/issues/200095) [Bug]: Android New chat / sidebar + records a parent link, so the Control UI nests ordinary chats and rejects pinning `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#200093](https://github.com/openclaw/openclaw/issues/200093) [Bug]: One failed trajectory export leaves a partial bundle at the output path, so every retry fails with EEXIST `P2` `impact:other` 💬1
- [#200082](https://github.com/openclaw/openclaw/issues/200082) [Bug]: cron scratch silently ignores --expected-revision on reads `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#200084](https://github.com/openclaw/openclaw/issues/200084) [Feature]: Preserve selected quotes from Telegram rich messages in agent context `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#200045](https://github.com/openclaw/openclaw/issues/200045) [Bug]: Slack: after a native progress stream expires (10-min limit), buffered progress narration posts as a separate message after the final reply `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#200078](https://github.com/openclaw/openclaw/issues/200078) Cold storage never archives past runs of rotating cron sessions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#200055](https://github.com/openclaw/openclaw/issues/200055) [Bug]: Feishu: two OpenClaw bots in one group loop forever (forced mention of bot sender + mention requires visible reply) `P2` `impact:message-loss` 💬1
- [#200047](https://github.com/openclaw/openclaw/issues/200047) [Feature]: bound cron run history by bytes and store each run's summary once `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#200042](https://github.com/openclaw/openclaw/issues/200042) Use maintained release diagnostics with primary failure and settlement evidence `P2` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#200034](https://github.com/openclaw/openclaw/issues/200034) [Bug]: Enter used to confirm IME text prematurely saves the rename dialog `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#200030](https://github.com/openclaw/openclaw/issues/200030) Automation webhook POSTs skip text as output when a run skips before it starts `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#200026](https://github.com/openclaw/openclaw/issues/200026) [Bug]: source CLI refuses its first build on systemd 239 after a native missing-unit reply `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#200021](https://github.com/openclaw/openclaw/issues/200021) Linux cloud worker resume crashes with raw errno (kill EPERM, procfs ENOENT) when the saved node.pid is stale `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#200018](https://github.com/openclaw/openclaw/issues/200018) [Bug]: Codex runtime-version rotation removes pending completion inventory without a disposition `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:fix-shape-clear` `clawsweeper:needs-maintainer-review` 💬1
- [#200016](https://github.com/openclaw/openclaw/issues/200016) [Feature]: Let the app-installation identity cover agent exec and github_publish, not only session reads `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#200001](https://github.com/openclaw/openclaw/issues/200001) [Bug]: doctor --lint forces retirement of runtime-inactive memory-lancedb after 5000 ms (2026.11.2) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#199986](https://github.com/openclaw/openclaw/issues/199986) Measure Node compile-cache costs with restore and cleanup included `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#199997](https://github.com/openclaw/openclaw/issues/199997) [Bug]: ask_user custom answer shows a selected checkbox with no tick in multi-select `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#199996](https://github.com/openclaw/openclaw/issues/199996) [Feature]: Workboard: list layout and toolbar filters for Sessions boards, matching cards boards `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#199989](https://github.com/openclaw/openclaw/issues/199989) Update failure: reconcile:abandoned (2026.10.8) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#199983](https://github.com/openclaw/openclaw/issues/199983) [Bug]: configure accepts impossible workspace paths and fails after leaving the prompt `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#199978](https://github.com/openclaw/openclaw/issues/199978) [Bug]: Git install dry-run shows a different directory from the actual target `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#199980](https://github.com/openclaw/openclaw/issues/199980) [Bug]: Doctor node recovery commands omit the diagnosed profile `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#199975](https://github.com/openclaw/openclaw/issues/199975) [Bug]: Podman setup ignores --help and mistyped options before provisioning `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#199972](https://github.com/openclaw/openclaw/issues/199972) [Bug]: custom-bind recovery hint drops the option needed to prompt for an address `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#199974](https://github.com/openclaw/openclaw/issues/199974) [Feature]: Workboard: give each card its own URL so it can be opened directly from a link `P2` `impact:ux-friction` 💬1

#### 🔒 Closed Issues
- [#166133](https://github.com/openclaw/openclaw/issues/166133) [Bug]: MCP tool_call wrapper coerces integer args to string, breaks MCP tools with integer params
- [#128090](https://github.com/openclaw/openclaw/issues/128090) [Feature]: Add rendered Markdown preview to Review files
- [#137613](https://github.com/openclaw/openclaw/issues/137613) Pre-compaction memory flush is disabled on CLI backends (ownsNativeCompaction gate), and the obvious fix hits a compactionCount trap
- [#112313](https://github.com/openclaw/openclaw/issues/112313) Dead-lettered outbound delivery queue entries are permanent: every accessor filters status='pending', no CLI/RPC/TTL can clear them
- [#165685](https://github.com/openclaw/openclaw/issues/165685) [Feature]: machine-readable reason on a registry-settled yielded collector, and a diagnostic for continuable parked yielded rows
- [#172547](https://github.com/openclaw/openclaw/issues/172547) [Feature]: Exclude fenced dreaming ranges from memory-search indexing and recall signal
- [#170893](https://github.com/openclaw/openclaw/issues/170893) Workboard: dispatchWithOptions rejects maxStarts 0 at the Gateway handler, so the data-only sweep is unreachable over RPC/CLI
- [#169533](https://github.com/openclaw/openclaw/issues/169533) [Bug]: gateway "agent" runs never persist a third-party agent harness's final reply to the transcript (post-run persists only runner "cli")
- [#165714](https://github.com/openclaw/openclaw/issues/165714) [Bug]: Control UI drops one assistant reply from view after claude-cli session resume; next reply stored twice
- [#148020](https://github.com/openclaw/openclaw/issues/148020) backup create --verify fails: portable path collision between case-only WhatsApp app-state-sync-key filenames
- [#135631](https://github.com/openclaw/openclaw/issues/135631) [Bug]: Session list ignores explicit membership, leaving no way to scope visibility to invited sessions
- [#172987](https://github.com/openclaw/openclaw/issues/172987) [Feature]: OpenClaw Deployment Profile System — one codebase scalable from small embedded devices to large servers
- [#172085](https://github.com/openclaw/openclaw/issues/172085) [Bug]: active-memory lane-1 quick recall times out on almost every turn on a 2-core host (1500 ms preflight is shorter than the memory search worker's ~5 s cold start)
- [#171527](https://github.com/openclaw/openclaw/issues/171527) [Bug]: Cron agent-turn timeouts are retried with the same budget; no floor, default policy or warning for too-short timeoutSeconds
- [#170686](https://github.com/openclaw/openclaw/issues/170686) Decision assistance prefilter is always skipped (pending-action-context) when active-memory registers its tool-authority before_prompt_build hook
- [#169001](https://github.com/openclaw/openclaw/issues/169001) [Bug]: Feishu streaming feels stepped after the card-update rewrite (flush-controller -> FeishuStreamingSession)
- [#151068](https://github.com/openclaw/openclaw/issues/151068) [Bug]: macOS menu-bar Settings flashes but does not surface dashboard window
- [#138761](https://github.com/openclaw/openclaw/issues/138761) [Bug]: Control UI web/mobile chat — signed-in user's avatar always visible and can't be hidden; assistant messages render with an empty avatar gutter
- [#172206](https://github.com/openclaw/openclaw/issues/172206) Slack status misreports user identities and mixed transport credentials
- [#171464](https://github.com/openclaw/openclaw/issues/171464) Windows: gateway startup blocks ~6-7s (3.3s idle + 1.3s synchronous PowerShell spawns) before first log line
- [#170985](https://github.com/openclaw/openclaw/issues/170985) Workboard automation nudge runs inherit the ended worker's plugin-runtime scope: script payload fails 'Plugin runtime changed'
- [#170678](https://github.com/openclaw/openclaw/issues/170678) Worktree-backed sessions_spawn is lost (no child, no worktree, unconfirmed admission) on Gateway hard restart
- [#170241](https://github.com/openclaw/openclaw/issues/170241) [Bug]: backup enable --to schedules offsite backups with the 10-minute command default timeout, so long archives are always killed
- [#170214](https://github.com/openclaw/openclaw/issues/170214) [Bug]: backup git create never commits large databases: hard-coded 120 s git timeout (add and pathspec commit each re-hash all dumps)
- [#170101](https://github.com/openclaw/openclaw/issues/170101) [Bug]: Pending experience reviews are lost on restart and can starve on a busy Gateway (in-memory, global 30 s idle)
- [#169565](https://github.com/openclaw/openclaw/issues/169565) [Bug]: Gateway stdio MCP fails -32000 while direct probe succeeds (macOS, 2026.9.8, absolute Python path)
- [#168793](https://github.com/openclaw/openclaw/issues/168793) [Bug]: memory-wiki: a compile killed after writing its compiled-cache candidate leaves the row until oldest-first namespace eviction (256 rows / 512 MiB)
- [#167911](https://github.com/openclaw/openclaw/issues/167911) [Feature]: diagnostics-prometheus: export session.stalled and session.long_running (stalled-session warnings have no metric)
- [#146221](https://github.com/openclaw/openclaw/issues/146221) Slack progress card is never finalized when the final reply carries media (2026.9.4)
- [#199990](https://github.com/openclaw/openclaw/issues/199990) Update failure: database-schema-preflight (2026.11.3)
- [#177056](https://github.com/openclaw/openclaw/issues/177056) [Bug]: Database page-cache warm fails every 15 min on stock WSL kernels: ENOENT /proc/self/io (CONFIG_TASKSTATS disabled)
- [#193444](https://github.com/openclaw/openclaw/issues/193444) [Bug]: Host Desktop readiness probes leave VncAuth handshakes incomplete and trigger TigerVNC loopback blacklisting
- [#169120](https://github.com/openclaw/openclaw/issues/169120) [Bug]: litellm image provider always sends `n` on edits; LiteLLM rejects it for Gemini image models (UnsupportedParamsError)
- [#197377](https://github.com/openclaw/openclaw/issues/197377) [Bug]: gateway install fails on first install when the unit's own systemd drop-ins already exist ("Managed service artifacts changed during publication")
- [#200110](https://github.com/openclaw/openclaw/issues/200110) [Feature]: Secure noninteractive credential import from secret managers
- [#181502](https://github.com/openclaw/openclaw/issues/181502) [Security] Google OAuth client secrets (`GOCSPX-…`) are not redacted from model-visible tool output
- [#199937](https://github.com/openclaw/openclaw/issues/199937) [Docs]: Quick start guides still describe automatic provider selection
- [#199941](https://github.com/openclaw/openclaw/issues/199941) [Docs]: Personal assistant guide says setup always opens onboarding
- [#199994](https://github.com/openclaw/openclaw/issues/199994) Claude Desktop group names with non-Latin-1 characters are shown garbled (UTF-16 Local Storage value decoded as latin1)
- [#197129](https://github.com/openclaw/openclaw/issues/197129) [Bug]: iOS Talk saves the assistant's reply above the user's spoken turn when transcription finishes late
- [#200346](https://github.com/openclaw/openclaw/issues/200346) Control UI dictation discards long recordings on screen lock / blur, and audio is not retained for retry (mobile)
- [#200307](https://github.com/openclaw/openclaw/issues/200307) [Bug]: Unrelated same-agent session creation aborts cron conditions and can disable watchers
- [#198761](https://github.com/openclaw/openclaw/issues/198761) [Bug]: Template Add proceeds with a blocked plan and leaves an empty agent that Retry cannot finish
- [#200271](https://github.com/openclaw/openclaw/issues/200271) [Bug]: Startup migrates completed retained-agent stores and crashes with vec0 error
- [#196048](https://github.com/openclaw/openclaw/issues/196048) [Bug]: templates add leaves the new agent behind when it fails, and retries add duplicates
- [#200296](https://github.com/openclaw/openclaw/issues/200296) [Docs Bug]: Missing hyphen in Getting Started reading hint
- [#200285](https://github.com/openclaw/openclaw/issues/200285) [Bug]: Sidebar group names show a write-access warning on ordinary hover
- [#199521](https://github.com/openclaw/openclaw/issues/199521) Pending model-catalog discovery can defer plugin configuration indefinitely with unknown-owner leases
- [#200244](https://github.com/openclaw/openclaw/issues/200244) [Bug]: OpenClaw macOS onboarding crashes when detached npm inherits /dev/tty
- [#200259](https://github.com/openclaw/openclaw/issues/200259) [Bug]: Download button/link missing from Control UI file browser
- [#199895](https://github.com/openclaw/openclaw/issues/199895) [Bug]: Custom setup onboarding exits after the memory embeddings question with "exclusive offline state ownership"
- [#199107](https://github.com/openclaw/openclaw/issues/199107) Signal: links with non-English characters are shown twice
- [#200232](https://github.com/openclaw/openclaw/issues/200232) [Bug]: Historical Usage dashboard fails with usage refresh UNAVAILABLE and retained archive decompression error
- [#200215](https://github.com/openclaw/openclaw/issues/200215) No supported way for a plugin to append to another session's transcript from inside a run (2026.9.37, SessionTranscriptWriterClaimReboundError)
- [#194183](https://github.com/openclaw/openclaw/issues/194183) Talk consults reject unsupported machine-selected thinking levels
- [#200189](https://github.com/openclaw/openclaw/issues/200189) CLI backend: "Native tool authority capture is no longer active" causes recurring tool-call/turn failures (observed on 2026.11.4)
- [#199950](https://github.com/openclaw/openclaw/issues/199950) [Bug]: local path commands resolve .. lexically through symlinked parents and operate on a different neighbor
- [#200129](https://github.com/openclaw/openclaw/issues/200129) sessions: pending input stuck in interrupted retries forever via CONTINUATION_PROMPT after turn-identity mismatch
- [#199710](https://github.com/openclaw/openclaw/issues/199710) [Bug]: Usage summary shows $0.00 for fully unpriced usage
- [#200116](https://github.com/openclaw/openclaw/issues/200116) [Bug]: cron agentTurn into a session target fails in series when preflight compaction outlasts the 60 s setup watchdog
- [#200096](https://github.com/openclaw/openclaw/issues/200096) [Bug]: Regression in 2026.11.4: reused claude-cli live session fails every other turn with "Native tool authority capture is no longer active."
- [#200093](https://github.com/openclaw/openclaw/issues/200093) [Bug]: One failed trajectory export leaves a partial bundle at the output path, so every retry fails with EEXIST
- [#170976](https://github.com/openclaw/openclaw/issues/170976) [Feature]: Android: add a New Chat action on Overview
- [#200045](https://github.com/openclaw/openclaw/issues/200045) [Bug]: Slack: after a native progress stream expires (10-min limit), buffered progress narration posts as a separate message after the final reply
- [#200078](https://github.com/openclaw/openclaw/issues/200078) Cold storage never archives past runs of rotating cron sessions
- [#192465](https://github.com/openclaw/openclaw/issues/192465) [Bug]: /v1/responses returns 500 "internal error" for the retryable "changed while starting work" rejection
- [#190480](https://github.com/openclaw/openclaw/issues/190480) media/link understanding scope: rawKeyPrefix rule matches every session and agent-stripped keyPrefix never matches
- [#199762](https://github.com/openclaw/openclaw/issues/199762) childRuntime reports available:true after a package upgrade breaks the running Node's shared libraries; children fail with 'cleanup identity lost: lifecycle channels were not created'
- [#195074](https://github.com/openclaw/openclaw/issues/195074) [Bug]: Signal quotes lose native mention recipients in agent context
- [#195585](https://github.com/openclaw/openclaw/issues/195585) Discord inbound mentions rewrite literal tokens inside code
- [#200055](https://github.com/openclaw/openclaw/issues/200055) [Bug]: Feishu: two OpenClaw bots in one group loop forever (forced mention of bot sender + mention requires visible reply)
- [#198524](https://github.com/openclaw/openclaw/issues/198524) Mocked Control UI E2E shards (checks-ui-e2e N/7) time out on slow hosted runners in hourly main CI
- [#199065](https://github.com/openclaw/openclaw/issues/199065) [Bug]: Browser microphone permission prompt stops Control UI dictation
- [#199888](https://github.com/openclaw/openclaw/issues/199888) Gateway memory import writes its pre-import backup to the Gateway's working directory
- [#199684](https://github.com/openclaw/openclaw/issues/199684) [Feature]: Use a saved Deepgram, ElevenLabs or Mistral API key for live transcription
- [#199986](https://github.com/openclaw/openclaw/issues/199986) Measure Node compile-cache costs with restore and cleanup included
- [#199417](https://github.com/openclaw/openclaw/issues/199417) Talk dictation stops working when the voice-note model's provider has no key, even with a working streaming provider
- [#199162](https://github.com/openclaw/openclaw/issues/199162) [Feature]: Bundled create-blobster skill and offline CLI avatar renderer
- [#199974](https://github.com/openclaw/openclaw/issues/199974) [Feature]: Workboard: give each card its own URL so it can be opened directly from a link

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 263,980 · **Open issues:** 53,433 · **Last push:** <1h ago

On November 16, 2026, Hermes Agent released v0.23.2, a patch update that consolidates approximately 1,989 pull requests merged since v0.23.1, improving the stability of the GitHub release (CLI, installers), Microsoft Store app, Docker, and Hermes Cloud. Additionally, a canary version v0.23.1+canary.20261116T070005Z was also made available on the same day. New issues reported include a significant bug (#156750) regarding prompt-cache scope hash discrepancies, causing mid-session cache key churn, and another bug (#156641) highlighting issues with usage-limit tokens that are not configurable by the provider. Overall, the focus remains on integrating new functionality while addressing unexpected bugs that can impact user experience.

#### 🚀 New Releases
- [v0.23.2](https://github.com/nousresearch/hermes-agent/releases/tag/v0.23.2) Hermes Agent v0.23.2
- [v0.23.1+canary.20261116T070005Z](https://github.com/nousresearch/hermes-agent/releases/tag/v0.23.1%2Bcanary.20261116T070005Z) Hermes Agent canary v0.23.1+canary.20261116T070005Z

#### 🐛 New Issues
- [#156750](https://github.com/NousResearch/hermes-agent/issues/156750) [Bug]: declared prompt-cache scope hashes two different `source` labels for one desktop conversation (gui vs local), so affinity/cache keys churn mid-session `type/bug` `comp/agent` `P2` `area/sessions` 💬3
- [#156670](https://github.com/NousResearch/hermes-agent/issues/156670) [Feature]: computer_use — keep agent windows off the user's active display and require approval for foreground delivery (even in yolo) `type/security` `comp/tools` `area/config` `P3` 💬3
- [#156665](https://github.com/NousResearch/hermes-agent/issues/156665) GUI session creation ships a stale `provider` with the configured model, and nothing validates the (provider, model) pair — subscription model billed to metered OpenRouter for 4 days `type/bug` `comp/gateway` `P3` `comp/desktop` 💬3
- [#156640](https://github.com/NousResearch/hermes-agent/issues/156640) [Bug]: Group chat approval card overflows the transcript when the command has a long unbroken token `type/bug` `tool/terminal` `P2` `comp/desktop` 💬2
- [#156641](https://github.com/NousResearch/hermes-agent/issues/156641) credential pool: 429s that carry their reset window only in the message body still wait on the same key even with #155714; usage-limit tokens are not provider-configurable `type/bug` `comp/agent` `area/auth` `area/config` 💬2
- [#156677](https://github.com/NousResearch/hermes-agent/issues/156677) [Bug]: check_execute_code_guard short-circuits unattended context evaluation, bypassing subsequent deny policies `type/security` `comp/tools` `tool/code-exec` `P3` 💬2
- [#156715](https://github.com/NousResearch/hermes-agent/issues/156715) [Bug]: Terminal(background=true, notify=true) on a command that finishes in a second costs a separate turn and reply per call `type/bug` `comp/tools` `tool/terminal` `backend/local` 💬2
- [#156720](https://github.com/NousResearch/hermes-agent/issues/156720) i18n: /egress status panel (format_status_text) is hardcoded English — bypasses i18n entirely `type/bug` `comp/cli` `P3` `area/i18n` 💬2
- [#156593](https://github.com/NousResearch/hermes-agent/issues/156593) [Bug]: "No space left on device" with 103 GB free — inode exhaustion bypasses every disk guard `type/bug` `comp/gateway` `P2` 💬2
- [#156767](https://github.com/NousResearch/hermes-agent/issues/156767) Stale edge-tts extra pin (7.2.7) downgrades working installs on every uv sync `type/bug` `tool/tts` `P2` `area/install-update` 💬1
- [#156768](https://github.com/NousResearch/hermes-agent/issues/156768) kanban dispatch crash on macOS: fd int leaks into _spawn_macos_worker (TypeError: expected str, bytes or os.PathLike object, not int) `type/bug` `comp/cli` `comp/cron` `comp/plugins` 💬1
- [#156671](https://github.com/NousResearch/hermes-agent/issues/156671) [Bug]: TodoStore._sanitize_parents pops parent from traversal root instead of cycle node `type/bug` `comp/tools` `P2` 💬1
- [#156668](https://github.com/NousResearch/hermes-agent/issues/156668) [Bug]: [Bug]: facts._windows_interactive_session calls GetProcessWindowStation on kernel32 instead of user32 `type/bug` `P2` `os/windows` 💬1
- [#156710](https://github.com/NousResearch/hermes-agent/issues/156710) [Bug]: Agent isn't told the Desktop client is on another machine: preview localhost and terminal pane resolve on the wrong host `type/bug` `comp/agent` `comp/tools` `P2` 💬1
- [#156790](https://github.com/NousResearch/hermes-agent/issues/156790) [Bug]: Local server-type probe sends no Authorization to LM Studio when the key comes from LM_API_KEY `type/bug` `comp/agent` `tool/vision` `area/auth`
- [#156792](https://github.com/NousResearch/hermes-agent/issues/156792) /v1/runs: tool.completed preview is always empty since 0.23 (session authority drops the result) `type/bug` `comp/gateway` `P2`
- [#156793](https://github.com/NousResearch/hermes-agent/issues/156793) /v1/runs: subagent.start / subagent.complete no longer reach the run's events since 0.23 `type/bug` `comp/gateway` `tool/delegate` `P2`
- [#156788](https://github.com/NousResearch/hermes-agent/issues/156788) Tool-loaded images (vision_analyze) become '[screenshot]' on the next turn and are never replayed `type/bug` `comp/agent` `tool/vision` `P2`
- [#156780](https://github.com/NousResearch/hermes-agent/issues/156780) [Bug]: Windows Startup-folder gateway launcher never restarts the gateway after exit 75 `type/bug` `comp/cli` `comp/gateway` `P2`
- [#156778](https://github.com/NousResearch/hermes-agent/issues/156778) [Feature]: No way to remove/hide legacy classic-room entries from the sidebar after migrating to gateway-hosted rooms `type/feature` `P2` `comp/desktop` `desktop/sessions`
- [#156777](https://github.com/NousResearch/hermes-agent/issues/156777) ACP session/new / session/load hangs forever on Windows: git version check inherits the ACP stdin pipe `type/bug` `comp/cli` `P2` `area/sessions`
- [#156776](https://github.com/NousResearch/hermes-agent/issues/156776) Flaky e2e: test_resize_scrollback duplicates transcript words after a two-step shrink mid-stream `type/bug` `comp/cli` `P2`
- [#156769](https://github.com/NousResearch/hermes-agent/issues/156769) [Bug]: _anthropic_image_fallback_cache is instance-scoped, re-running vision_analyze on every /v1/responses turn `type/perf` `comp/agent` `tool/file` `tool/vision`
- [#156764](https://github.com/NousResearch/hermes-agent/issues/156764) patch: pick the edit format from the arguments and drop `mode` `type/refactor` `comp/tools` `tool/file` `P3`
- [#156763](https://github.com/NousResearch/hermes-agent/issues/156763) Tracker: a chat releases everything it started when it ends `type/bug` `comp/agent` `comp/gateway` `comp/tools`
- [#156760](https://github.com/NousResearch/hermes-agent/issues/156760) Background process wake-up renders an empty body when the output is one long line (>2000 chars) `type/bug` `comp/gateway` `tool/file` `P2`
- [#156757](https://github.com/NousResearch/hermes-agent/issues/156757) [Bug]: Desktop: a plugin page is lost on reload or when opened by its address `type/bug` `P2` `comp/desktop` `area/sessions`

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 97,066 · **Open issues:** 10,491 · **Last push:** <1h ago

The vLLM team released version 0.34.0, which includes 1,061 commits from 412 contributors, introducing 10 new models, such as Mistral Large 4 and Nemotron-3.5-Transcribe. A significant change is the extensible KV cache being enabled by default, allowing models to utilize more memory for improved throughput. Among the merged pull requests, the support for CPU offloading with online NVFP4 MoE quantization stands out, alongside several bug fixes enhancing performance and usability. The new issue attracting attention involves the Triton top-k/top-p functionality, which returns excess tokens when the top-k cutoff is tied, indicating ongoing challenges in model behavior.

#### 🚀 New Releases
- [v0.34.0](https://github.com/vllm-project/vllm/releases/tag/v0.34.0) v0.34.0

#### ✅ Merged PRs
- [#67136](https://github.com/vllm-project/vllm/pull/67136) [Quantization] Support CPU offloading with online NVFP4 MoE quantization
- [#67243](https://github.com/vllm-project/vllm/pull/67243) [XPU][CI] Skip redundant LoRA TP4 tests on XPU
- [#68052](https://github.com/vllm-project/vllm/pull/68052) [XPU] Skip test_one_sided_all2all_default_follows_dispatch_format
- [#67188](https://github.com/vllm-project/vllm/pull/67188) [XPU] Update test_inactive_default_mm_lora
- [#67058](https://github.com/vllm-project/vllm/pull/67058) [Bugfix] Extend --chat-template-content-format to cross-encoder scoring
- [#65941](https://github.com/vllm-project/vllm/pull/65941) [MM] Nemotron VL: resize images and video frames on the GPU with CV-CUDA
- [#67877](https://github.com/vllm-project/vllm/pull/67877) [XPU] Avoid unrelated package lookups on the XPU kernel index
- [#65672](https://github.com/vllm-project/vllm/pull/65672) [Bugfix][Mooncake] Make early prefill abort cleanup idempotent
- [#67072](https://github.com/vllm-project/vllm/pull/67072) [ROCm] Fuse output proj to MoE topk and sort for M3.1 decode
- [#64574](https://github.com/vllm-project/vllm/pull/64574) [Bugfix][ROCm][KV Connector] MoRIIO: fix port collision with TP > 1 and DP > 1
- [#62590](https://github.com/vllm-project/vllm/pull/62590) [ROCm][Perf][Qwen4Exp] Tune sparse GQA prefill profile on gfx942 and gfx950
- [#49700](https://github.com/vllm-project/vllm/pull/49700) [EPLB] Expose narrow state overrides for out-of-tree devices
- [#65186](https://github.com/vllm-project/vllm/pull/65186) [Perf][GDN] Export Triton prefill checkpoints via per-sequence buffers
- [#67722](https://github.com/vllm-project/vllm/pull/67722) [Recipe] Kimi-K3.1-Pro: add the B300 AgentX disaggregated preset, align with InferenceX#5068
- [#67067](https://github.com/vllm-project/vllm/pull/67067) [Perf][Muse Spark] FP8 KV cache for the specialized decode
- [#67807](https://github.com/vllm-project/vllm/pull/67807) [Recipe] Kimi-K3.1-Pro: serve the Inferact/Kimi-K3.1-Pro-DSpark draft and fix the B300 baseline
- [#65656](https://github.com/vllm-project/vllm/pull/65656) [Perf][DSV4.1] Accelerate candidate prefill and decode with CuTe
- [#59506](https://github.com/vllm-project/vllm/pull/59506) [Bugfix][Frontend] Don't crash beam search on an extreme length_penalty
- [#67172](https://github.com/vllm-project/vllm/pull/67172) [XPU] Include oneAPI compiler build date in collect_env
- [#65107](https://github.com/vllm-project/vllm/pull/65107) [CI/Build] Mirror release and nightly images to the vllm/vllm, vllm/vllm-rocm and vllm/vllm-xpu DockerHub aliases
- [#65578](https://github.com/vllm-project/vllm/pull/65578) [Perf][Kernel] Fuse GELU + NVFP4 quant for BERT-style FFNs
- [#68025](https://github.com/vllm-project/vllm/pull/68025) [ROCm][CI] Skip wvSplitKQ fp8 skinny GEMM test where the kernel is not built
- [#67993](https://github.com/vllm-project/vllm/pull/67993) [ROCm][CI] Retarget 8 MI300 1 GPU jobs to the mi300_dpx queue
- [#64306](https://github.com/vllm-project/vllm/pull/64306) [Spec Decode][MRV2] Pass NewRequestData to speculator add_request; add shutdown hook
- [#67821](https://github.com/vllm-project/vllm/pull/67821) [CI][ROCm] Keep HIP uninitialized in the GPU memory wait
- [#67267](https://github.com/vllm-project/vllm/pull/67267) [Quant] LUT-B: fit per-channel block32 weight scales
- [#68005](https://github.com/vllm-project/vllm/pull/68005) [Bugfix][DSv4.1] Import the SM80/SM90 metadata builders lazily
- [#59564](https://github.com/vllm-project/vllm/pull/59564) [Perf] Use value-only reduction for FP8 group quantization
- [#45559](https://github.com/vllm-project/vllm/pull/45559) [ROCm][Kernel] Extend skinny gemm N=5 to N=8 cases on GFX12 (RDNA4) using SWMMAC optimization
- [#67182](https://github.com/vllm-project/vllm/pull/67182) [XPU][batch invariant] Optimize batch-invariant collectives with sharded reductions
- [#67094](https://github.com/vllm-project/vllm/pull/67094) [Spec Decode] Add DSpine support
- [#67809](https://github.com/vllm-project/vllm/pull/67809) [CI][Test] Share the narrow dummy FP8 fixture with the NVFP4 fusion test
- [#65711](https://github.com/vllm-project/vllm/pull/65711) [ROCm][Perf] Use tuned AITER Triton `gemm_a8w8` for per-tensor FP8 decode GEMMs on gfx950
- [#59208](https://github.com/vllm-project/vllm/pull/59208) [Bugfix][Distributed] Guard cross-node symmetric-memory rendezvous
- [#63086](https://github.com/vllm-project/vllm/pull/63086) [ROCm][Kimi-K3] Enable encoder graph capture for Kimi-K3 Vision Tower
- [#67215](https://github.com/vllm-project/vllm/pull/67215) [Bugfix][MiniMax-M3] Drop the stale config read from the FlashInfer indexer builder
- [#66653](https://github.com/vllm-project/vllm/pull/66653) [MoE] Disable expanded DeepEP v2 dispatch in all execution modes
- [#67984](https://github.com/vllm-project/vllm/pull/67984) [ROCm][Bugfix] Port Mistral Large 4 AMD indexer cache to get_kv_cache_config
- [#64406](https://github.com/vllm-project/vllm/pull/64406) [Perf][MoE] OCP MX emulation: dequantize only the routed experts
- [#63272](https://github.com/vllm-project/vllm/pull/63272) [ROCm][Quantization][Perf] Fuse the block Hadamard input rotation into AITER's MXFP4 activation quant
- [#67055](https://github.com/vllm-project/vllm/pull/67055) [Recipe][ROCm] ripple-65b on mi350x and mi355x
- [#67852](https://github.com/vllm-project/vllm/pull/67852) [CI][Test] Prevent NVSHMEM IB transport setup hang in DBO GSM8K tests
- [#67006](https://github.com/vllm-project/vllm/pull/67006) [Quantization] Online weight-only NVFP4 for dense linear layers
- [#67179](https://github.com/vllm-project/vllm/pull/67179) [Doc] Correct the batch-invariance comment on Hopper/Blackwell split-k
- [#65575](https://github.com/vllm-project/vllm/pull/65575) [KV Connector][Mooncake] Fail pulls from a lost prefill worker
- [#66583](https://github.com/vllm-project/vllm/pull/66583) [KV Offload] Set the CPU tier up in the background under async_init
- [#65931](https://github.com/vllm-project/vllm/pull/65931) [Kernel][Perf] Add H100 BF16 batch-invariant matmul configs for gpt-oss
- [#67806](https://github.com/vllm-project/vllm/pull/67806) [Bugfix] Select only batch-invariant MXFP8 linear kernels under VLLM_BATCH_INVARIANT
- [#67315](https://github.com/vllm-project/vllm/pull/67315) [Config] Make --monokernel and decode_backend=latency_specialized one switch
- [#59098](https://github.com/vllm-project/vllm/pull/59098) [Bugfix][ROCm] Fix ROCM_AITER_FA context loss on out-of-order batches

#### 🐛 New Issues
- [#67909](https://github.com/vllm-project/vllm/issues/67909) [RFC]: CPU offloading cache lifecycle metrics `RFC` 💬4
- [#67922](https://github.com/vllm-project/vllm/issues/67922) [RFC]: PLE Connector for Disaggregated Embedding Serving `kv-connector` `quantization` 💬1
- [#68016](https://github.com/vllm-project/vllm/issues/68016) [RFC]: Numerical testing for specialized decode — plan, status, and PR sequence `rocm` `RFC` `quantization` `kimi` 💬1
- [#67953](https://github.com/vllm-project/vllm/issues/67953) [Bug]: Triton top-k/top-p keeps more than k tokens when the top-k cutoff is tied and top-p is active 💬2
- [#67923](https://github.com/vllm-project/vllm/issues/67923) [Bug]: Rust qwen3_coder parser keeps the next <parameter=...> tag in the value when </parameter> is missing `bug` `tool-calling` `rust` 💬2
- [#68024](https://github.com/vllm-project/vllm/issues/68024) [Bug][Core] PrefillStats keeps the full external hit after a recovered KV load failure 💬1
- [#68022](https://github.com/vllm-project/vllm/issues/68022) [ROCm] Cached-context attention warmup: which kernels are missed `rocm` 💬1
- [#68003](https://github.com/vllm-project/vllm/issues/68003) [Bug]: #67755 — Mistral tokenizer corrupts emoji/multibyte characters `bug` `mistral` 💬1
- [#67948](https://github.com/vllm-project/vllm/issues/67948) [Bug]: LoRA ids of 2**31 or more crash the engine (int32 overflow in the model runner) 💬1
- [#67914](https://github.com/vllm-project/vllm/issues/67914) [Bug]: flashinfer_b12x NVFP4 MoE returns garbage on SM120 since #64692 (the DeepGEMM warmup overwrites its FC2 input scale) 💬1
- [#67862](https://github.com/vllm-project/vllm/issues/67862) [Bug]: MiniMax-M3.1-Flash NVFP4 packed routed experts fail to load with TP8 / TP4+PP2 on v0.33.0 (192 vs 384 in RoutedExperts._load_w13) `quantization` `minimax` 💬1
- [#67901](https://github.com/vllm-project/vllm/issues/67901) [Feature][ROCm]: MI308X (gfx942, 80 CUs) cannot use --monokernel; MXFP4 MoE experts fall back to Triton W4A16 — lossless FP8 128x128 repack doubles decode throughput `rocm` 💬1
- [#67876](https://github.com/vllm-project/vllm/issues/67876) [ROCm][AMD] MiniMax-M3.1-Flash gfx950 / MI355X Performance Optimization (vLLM) `rocm` `minimax` 💬1
- [#67865](https://github.com/vllm-project/vllm/issues/67865) [RFC]: Opt-in online quantization of the target model LM head `quantization`
- [#68081](https://github.com/vllm-project/vllm/issues/68081) [Bug]: MTP speculative decoding is a net performance negative on Qwen3.5/3.8 hybrid (GDN/mamba) models `speculative-decoding`
- [#68075](https://github.com/vllm-project/vllm/issues/68075) [RFC]: Keep agent KV in the CPU offload tier across tool calls, using client hints `feature request` `tool-calling`
- [#68079](https://github.com/vllm-project/vllm/issues/68079) [RFC]: Keep agent KV in the CPU offload tier across tool calls, using client hints `RFC` `tool-calling`
- [#68069](https://github.com/vllm-project/vllm/issues/68069) [Feature]: vllm prefetch strategy can be set in vllm plugin hook independently to accelerate model loading `feature request`
- [#68067](https://github.com/vllm-project/vllm/issues/68067) [Performance]: Batch-sharded sampling: NCCL point-to-point buffers take about 2.7 GiB per GPU at TP 8; NCCL_MAX_P2P_NCHANNELS limits them
- [#68034](https://github.com/vllm-project/vllm/issues/68034) [RFC]: Shared residual boundary contracts across model architectures `quantization` `kimi`
- [#68000](https://github.com/vllm-project/vllm/issues/68000) [Bug]: #67786 — LoRA adapter isn't applied correctly in mixed batches `bug`
- [#68001](https://github.com/vllm-project/vllm/issues/68001) [Bug]: #67774 — LoRA rank greater than max_lora_rank kills the engine `bug`
- [#68023](https://github.com/vllm-project/vllm/issues/68023) [Bug]: Rust frontend (vllm-rs) keeps the default 1024 open-file limit and fails accept under load `rust`
- [#68004](https://github.com/vllm-project/vllm/issues/68004) [Bug]: #67743 — LLaVA-OneVision crashes when videos have different frame counts `bug`
- [#68002](https://github.com/vllm-project/vllm/issues/68002) [Bug]: #67772 — ALiBi models silently lose ALiBi with FlashInfer + FP8 KV cache `bug`
- [#67999](https://github.com/vllm-project/vllm/issues/67999) [Bug]: I found issue #67790, which reports that /pooling returns HTTP 400 when chunked processing is enabled. `bug` `pooling`
- [#67996](https://github.com/vllm-project/vllm/issues/67996) [Bug][CPU][Arm]: oneDNN/ACL bf16 GEMM loses precision as K grows (up to ~2.5% at K=8192) `cpu`
- [#67988](https://github.com/vllm-project/vllm/issues/67988) [Bug]: Non-streaming parse() re-converts DeepSeek DSML tool arguments per chunk (O(n²)), blocking the API server event loop for minutes `tool-calling` `deepseek`
- [#67985](https://github.com/vllm-project/vllm/issues/67985) [Bug]: make_valid_python slices text before '(' instead of after, blocking token-by-token streaming argument deltas across pythonic tool parsers `bug` `tool-calling`
- [#67982](https://github.com/vllm-project/vllm/issues/67982) [Performance]: FA4 on SM90 under-splits the keys of varlen calls whose rows differ in length
- [#67968](https://github.com/vllm-project/vllm/issues/67968) [Usage]: Whisper large-v, lower concurrent transcription throughput on H100 than A100 80GB `usage`
- [#67962](https://github.com/vllm-project/vllm/issues/67962) [Bug]: Muse-Spark-Open emits tool names like `Bash.command`; the `muse` parser passes them through, so no tool matches `tool-calling`
- [#67934](https://github.com/vllm-project/vllm/issues/67934) [RFC]: Expose EPLB expert topology and per-expert token load metrics `RFC`
- [#67951](https://github.com/vllm-project/vllm/issues/67951) [Bug]: /v1/responses returns 400 'System message must be at the beginning' with instructions and a system input item
- [#67946](https://github.com/vllm-project/vllm/issues/67946) [Bug][Watermarking]: `deduplicate_contexts="all"` misses repeats across the prompt boundary under speculative decoding `speculative-decoding`
- [#67937](https://github.com/vllm-project/vllm/issues/67937) [Tracking]: Retire native models derived from Llama and Qwen2 `llama` `kimi`
- [#67929](https://github.com/vllm-project/vllm/issues/67929) [Feature]: EPLB and beyond `feature request`
- [#67915](https://github.com/vllm-project/vllm/issues/67915) [Feature]: Native grammar enforcement for Responses API custom tools on DeepSeek V4/V4.1 tool parsers `structured-output` `tool-calling` `deepseek`
- [#67913](https://github.com/vllm-project/vllm/issues/67913) [Feature]: Accept Responses API custom tools with grammar formats via best-effort fallback `structured-output` `tool-calling`
- [#67911](https://github.com/vllm-project/vllm/issues/67911) [Bug]: MiniMax-M3.1-Flash fails on nightly with transformers 5.23.0: 'MiniMaxM3VLTextConfig' object has no attribute 'sparse_attention_config' `bug` `minimax`
- [#67892](https://github.com/vllm-project/vllm/issues/67892) [RFC] Declarative metrics hooks, metric levels, and a runtime level control plane
- [#67874](https://github.com/vllm-project/vllm/issues/67874) [RFC][HiSparse] On-Demand KV Gather and Layerwise Two-Slot Reuse for Sparse-MLA (DSA) Prefill `RFC`

#### 🔒 Closed Issues
- [#25094](https://github.com/vllm-project/vllm/issues/25094) [Performance]: Compiled `QuantFP8.forward_native` group quantization (1, 128) slower than CUDA on H100/RTX5090
- [#30931](https://github.com/vllm-project/vllm/issues/30931) [Bug]: Prefix Cache Corruption with LoRA with the same name but different id
- [#41286](https://github.com/vllm-project/vllm/issues/41286) [Feature]: Migration from Model Runner v1 to Model Runner v2
- [#62697](https://github.com/vllm-project/vllm/issues/62697) [Bug][ROCm] `ROCM_ATTN` returns wrong attention (and can fault the GPU) on RDNA for head size ≥ 96 with KV block size ≠ 16, and for MHA with head size 192/256
- [#67948](https://github.com/vllm-project/vllm/issues/67948) [Bug]: LoRA ids of 2**31 or more crash the engine (int32 overflow in the model runner)
- [#61204](https://github.com/vllm-project/vllm/issues/61204) [Bug]: [ROCm] requirements/rocm.txt hard-requires mooncake-transfer-engine-rocm, which has no Python 3.14 wheel
- [#68075](https://github.com/vllm-project/vllm/issues/68075) [RFC]: Keep agent KV in the CPU offload tier across tool calls, using client hints
- [#68000](https://github.com/vllm-project/vllm/issues/68000) [Bug]: #67786 — LoRA adapter isn't applied correctly in mixed batches
- [#68001](https://github.com/vllm-project/vllm/issues/68001) [Bug]: #67774 — LoRA rank greater than max_lora_rank kills the engine
- [#64954](https://github.com/vllm-project/vllm/issues/64954) [Bug]: `--attention-backend TORCH_SDPA` passes config validation, then dies with "Backend TORCH_SDPA must be registered before use" — a ViT-only tag offered as a valid option, whose `ValueError` bypasses the "Selected backend ... is not valid" path
- [#67743](https://github.com/vllm-project/vllm/issues/67743) [Bug]: LLaVA-OneVision crashes when videos in one request have different frame counts

### SGLang (`sgl-project/sglang`)

**Stars:** 38,963 · **Open issues:** 6,810 · **Last push:** <1h ago

No new releases were made for SGLang today, but several important pull requests were merged. Key features included the addition of support for GLM-5.3-Flash on Ascend A3/A5, improvements to the attention mechanism for FP8 KV in DSA decode, and enhancements to output store management in the sglang-miles module. Notably, fixes addressed issues such as a crash related to missing kernel flags in Ascend prefill and improved handling of idle attention-DP ranks in the kimi-k3. A significant new issue emerged regarding multi-label classification support in the /v1/classify endpoint, attracting immediate attention for further investigation.

#### ✅ Merged PRs
- [#42806](https://github.com/sgl-project/sglang/pull/42806) [CI] wait-for-jobs: Retry transient GitHub API errors
- [#43305](https://github.com/sgl-project/sglang/pull/43305) [Feat] [NPU] glm5: Support GLM-5.3-Flash on Ascend A3/A5
- [#50486](https://github.com/sgl-project/sglang/pull/50486) [Fix] [MUSA] sgl-kernel: Restore the MUSA AOT wheel build
- [#45205](https://github.com/sgl-project/sglang/pull/45205) [Feat] [AMD] hicache: Enable HiCache for DSA DCP with a packed MTP draft
- [#50869](https://github.com/sgl-project/sglang/pull/50869) [Feat] RL: [sglang-miles] Keep an output store read buffer across reads in a ReadSlot
- [#40732](https://github.com/sgl-project/sglang/pull/40732) [Test] hisparse: Cover the PD decode retraction rebootstrap path
- [#49409](https://github.com/sgl-project/sglang/pull/49409) [Feat] RL: [sglang-miles] Re-land storing output store replay fields as layer blocks at layer splits
- [#40880](https://github.com/sgl-project/sglang/pull/40880) [Fix] [NPU] quantization: Shard W4A8 MoE scale_bias by MoE TP rank
- [#46022](https://github.com/sgl-project/sglang/pull/46022) [Fix] scheduler: Dedupe shared prefixes in shortest-first order under SPF
- [#50839](https://github.com/sgl-project/sglang/pull/50839) [Fix] kimi-k3: Handle idle attention-DP ranks and match the KDA checkpoint dtype
- [#50725](https://github.com/sgl-project/sglang/pull/50725) [Fix] [NPU] kda: Fix Ascend prefill crash due to missing kernel flag
- [#50097](https://github.com/sgl-project/sglang/pull/50097) [Feat] [NPU] attention: Support FP8 KV for DSA decode context parallelism
- [#50882](https://github.com/sgl-project/sglang/pull/50882) [Feat] gc: Log GC passes and long-GC warnings in every server process
- [#46063](https://github.com/sgl-project/sglang/pull/46063) [Fix] scheduler: Reserve encoder-replay rows in the shortest-prefill-first chunk reservation
- [#50470](https://github.com/sgl-project/sglang/pull/50470) [Fix] multimodal: Match CUDA tensors by device type for cuda-only gpu_tensors_blake3 kernel
- [#49481](https://github.com/sgl-project/sglang/pull/49481) [Feat] [NPU] prefill: breakable prefill graph for DSV4 and ascend_ops MoE
- [#50524](https://github.com/sgl-project/sglang/pull/50524) [Feat] inkling2: Add dense-path kernels
- [#50526](https://github.com/sgl-project/sglang/pull/50526) [Feat] inkling2: Add all-reduce and exchange kernels
- [#50870](https://github.com/sgl-project/sglang/pull/50870) [Fix] [AMD] dsa: Use 64-bit token offsets in the Triton sparse MLA kernels
- [#49884](https://github.com/sgl-project/sglang/pull/49884) [Perf] [AMD] distributed: Run the fused AR + RMSNorm + per-group FP8 quant on gfx942
- [#50512](https://github.com/sgl-project/sglang/pull/50512) [Perf] [AMD] deepseek-v4.1: Build the low-ratio extend slot gather once per forward, without a host sync
- [#50638](https://github.com/sgl-project/sglang/pull/50638) [Fix] diffusion: Align FLUX.3 request sizes to the 16-pixel latent grid
- [#34514](https://github.com/sgl-project/sglang/pull/34514) [Fix] diffusion/sana: Honor --vae-tiling in the AutoencoderDC VAE
- [#50656](https://github.com/sgl-project/sglang/pull/50656) [Perf] [AMD] custom-all-reduce: Drop the gfx1250 2shot_push clamp and retune carv2
- [#50868](https://github.com/sgl-project/sglang/pull/50868) [Doc] diffusion: Include action generation across public entry points
- [#50765](https://github.com/sgl-project/sglang/pull/50765) [Perf] cosmos3: opt sm120 gemm performance on bimanual
- [#50733](https://github.com/sgl-project/sglang/pull/50733) [Feat] cli: Edit the whole Guide command in your editor
- [#50825](https://github.com/sgl-project/sglang/pull/50825) [CI] openai_server: Sample greedily in the streaming tool-call args test
- [#41928](https://github.com/sgl-project/sglang/pull/41928) [Fix] [AMD] inkling: Initialize Inkling safely on ROCm
- [#48089](https://github.com/sgl-project/sglang/pull/48089) [Fix] [AMD] modelopt: Support ModelOpt FP8 Nemotron models on gfx950
- [#50813](https://github.com/sgl-project/sglang/pull/50813) [Chore] [AMD] mono-kernel: Pin sgl-amd-mono at a04ceab for Qwen3.5 FP8
- [#50838](https://github.com/sgl-project/sglang/pull/50838) [Fix] kimi-k3: Pass the EP-wide token count to MegaMoE under attention DP
- [#50865](https://github.com/sgl-project/sglang/pull/50865) [Chore] codeowners: Update CODEOWNERS
- [#49838](https://github.com/sgl-project/sglang/pull/49838) [Chore] diffusion: Fix stale comments and docstrings in serving, apps and CI scripts
- [#50855](https://github.com/sgl-project/sglang/pull/50855) [Fix] muse-glimmer: Fix vision embedding order
- [#50849](https://github.com/sgl-project/sglang/pull/50849) [Fix] dcp: Plan DCP attention metadata for GLM-4.7-Flash prefix hits
- [#50019](https://github.com/sgl-project/sglang/pull/50019) [Fix] moe: Apply the model's swiglu_limit in the CuTe DSL MoE runner
- [#50840](https://github.com/sgl-project/sglang/pull/50840) [Fix] mamba: Allow extra_buffer_lazy on a PD prefill worker
- [#49591](https://github.com/sgl-project/sglang/pull/49591) [Feat] dsv4: Serve routed experts as MXFP8 on a block-wise FP8 checkpoint
- [#50489](https://github.com/sgl-project/sglang/pull/50489) [CI] [AMD] nightly-benchmark: Run InferenceX's AgentX MiniMax-M3.1-Flash DSpark curve on MI35x
- [#46877](https://github.com/sgl-project/sglang/pull/46877) [Fix] [XPU] diffusion: Copy flash-attention inputs under torch.compile
- [#50555](https://github.com/sgl-project/sglang/pull/50555) [Fix] rust-server: Refuse return_hidden_states above the server's mode

#### 🐛 New Issues
- [#50809](https://github.com/sgl-project/sglang/issues/50809) [Feature] Support multi-label classification in /v1/classify 💬3
- [#50761](https://github.com/sgl-project/sglang/issues/50761) [Feature] fused MoE tuner: tuned configs can regress at the batch sizes between tuned keys 💬2
- [#50834](https://github.com/sgl-project/sglang/issues/50834) [Bug] --enable-return-routed-experts crashes on Gemma 4 (capturer reads only num_experts_per_tok) 💬2
- [#50892](https://github.com/sgl-project/sglang/issues/50892) [Bug] HiCache load-back aborts scheduler with 'must commit all promised FULL tokens or none' on a valid partial load-back (hybrid SWA, regression from #39283) 💬1
- [#50887](https://github.com/sgl-project/sglang/issues/50887) [Bug] All JIT-compiled kernels fail at launch with 'CUDA error: invalid resource handle' on torch 2.14.1+cu130 (works on +cu126) — 0.5.23, sm_89 💬1
- [#50780](https://github.com/sgl-project/sglang/issues/50780) [Bug] fused_hc_mix can hang on repeated calls from separate CUDA streams 💬1
- [#50722](https://github.com/sgl-project/sglang/issues/50722) [Bug] Streaming throughput down ~22% at high concurrency since c81230bffe (per-chunk is_disconnected() poll) 💬1
- [#50927](https://github.com/sgl-project/sglang/issues/50927) [CI] [NPU] Test-only changes need an isolated validation track after #50560
- [#50921](https://github.com/sgl-project/sglang/issues/50921) [Feature] Prune unused final-layer FFN computation for next-token generation
- [#50920](https://github.com/sgl-project/sglang/issues/50920) Idle-burst prefill: first request waits for the next batch (consecutive prefill overlap) and bursts are split 1+N
- [#50915](https://github.com/sgl-project/sglang/issues/50915) [Bug] macOS: --device cpu fails with RuntimeError running 'lscpu' (get_cpu_ids_by_node)
- [#50905](https://github.com/sgl-project/sglang/issues/50905) [Bug] deps: watchfiles and zstandard missing from non-default pyprojects (other/npu/xpu, watchfiles also cpu)
- [#50879](https://github.com/sgl-project/sglang/issues/50879) [Bug] /generate rejects "return_hidden_states": "last" since 0.5.22 (0.5.21 accepted it)
- [#50873](https://github.com/sgl-project/sglang/issues/50873) [Bug] Hybrid models: concurrent requests sharing a prefix lose most prefix-cache reuse at --hybrid-cache-checkpoints-level 2
- [#50837](https://github.com/sgl-project/sglang/issues/50837) [Feature] Request an AAC-free tml-renderers build from Thinking Machines Lab for Inkling
- [#50835](https://github.com/sgl-project/sglang/issues/50835) [Bug] Hyper-connection mix keeps a stale copy of input_mix_weight_up after online weight updates (batches <= 24 tokens)
- [#50833](https://github.com/sgl-project/sglang/issues/50833) [Bug] Laguna and Step-3.5 load_weights require every expert tensor in one call, so bucketed weight updates fail
- [#50795](https://github.com/sgl-project/sglang/issues/50795) [NPU] [Roadmap] Ascend MoE 2026 Roadmap `npu`
- [#50790](https://github.com/sgl-project/sglang/issues/50790) [Bug] HiCache `write_back`: prefill admits device KV that eviction cannot free, and the scheduler dies with "Prefill out of memory"
- [#50756](https://github.com/sgl-project/sglang/issues/50756) [RFC] Elastic KV tail: lend idle co-tenant VRAM to the KV cache and give it back on demand (HIP VMM, ROCm)
- [#50754](https://github.com/sgl-project/sglang/issues/50754) [NPU] [Roadmap] SGLang Diffusion Integration with MindIE-SD
- [#50749](https://github.com/sgl-project/sglang/issues/50749) [Bug] SM120: BF16 TileLang DSA decode exceeds per-block shared memory (170048 > 101376 bytes)
- [#50737](https://github.com/sgl-project/sglang/issues/50737) [Bug] Graceful shutdown: a request that arrives after the SIGTERM drain sent ShutdownReq is never answered, and the server does not exit until that client disconnects
- [#50735](https://github.com/sgl-project/sglang/issues/50735) [Bug] Streaming output leaks the head of a stop string when the next character is split across tokens
- [#50729](https://github.com/sgl-project/sglang/issues/50729) [Doc] [NPU] docs: Broken download links for MemFabric and memcache wheel packages
- [#50716](https://github.com/sgl-project/sglang/issues/50716) [Bug] After an in_place pause, a weight update can overwrite weights the last launched step is still reading
- [#50715](https://github.com/sgl-project/sglang/issues/50715) [Bug] [NPU] RMSNorm ignores explicit cast_x_before_out_mul=True
- [#50711](https://github.com/sgl-project/sglang/issues/50711) [Bug] PD decode stops making progress after a retraction: arrived transfers are never polled while the retracted request waits

#### 🔒 Closed Issues
- [#39830](https://github.com/sgl-project/sglang/issues/39830) [Bug] Hierarchical cache returns wrong output on a hybrid (GDN/Mamba) model: a full-length host-tier hit answers in a different pass's voice, 20/20, on main
- [#39651](https://github.com/sgl-project/sglang/issues/39651) benchmark serving tool does not control or record radix cache state; CI silently runs a different cache protocol than users copying the same command
- [#38536](https://github.com/sgl-project/sglang/issues/38536) Rust TreeCore (v0.5.19) shows e2e regression at concurrency on small dense model
- [#39645](https://github.com/sgl-project/sglang/issues/39645) Retracted input_embeds requests silently splice two generations into one successful response (send_token_offset survives the discard of output_ids)
- [#39922](https://github.com/sgl-project/sglang/issues/39922) [Bug] /v1/messages never reports cache_creation_input_tokens, so cache writes are billed as plain input
- [#38574](https://github.com/sgl-project/sglang/issues/38574) [Bug] compressed-tensors checkpoint + NEXTN/MTP head fails at construction with "No compressed-tensors compatible scheme was found" unless mtp.* is in `ignore` (module not named in the error)
- [#37128](https://github.com/sgl-project/sglang/issues/37128) [Bug] Spec V2 paths no longer emit speculative-decoding OpenTelemetry spans
- [#39302](https://github.com/sgl-project/sglang/issues/39302) [Bug] GLM-5.x NoPE MLA (qk_rope_head_dim=0) cannot run on SM120: every DSA sparse-MLA backend is unavailable
- [#39752](https://github.com/sgl-project/sglang/issues/39752) [Bug] /v1/messages streaming thinking blocks can end without a signature
- [#40025](https://github.com/sgl-project/sglang/issues/40025) [Bug] EAGLE draft-extend plan stream lacks an input-producer dependency
- [#39925](https://github.com/sgl-project/sglang/issues/39925) [Bug] FlashKDA prefill returns a tuple and crashes GLM-5.3-Flash with radix cache disabled
- [#39864](https://github.com/sgl-project/sglang/issues/39864) [Bug] OpenAI Chat Completions: Python SSE chunks have inconsistent id and created
- [#39936](https://github.com/sgl-project/sglang/issues/39936) [Bug] Rust server assigns the same HTTP port to multiple system-DP replicas
- [#39935](https://github.com/sgl-project/sglang/issues/39935) [Bug] Rust server cannot find a cached tokenizer when the model revision is a commit SHA
- [#39898](https://github.com/sgl-project/sglang/issues/39898) [Feature] Kimi-K3 Kimi-Vendor-Verifier (KVV) conformance:
- [#43342](https://github.com/sgl-project/sglang/issues/43342) [Bug] RuntimeError: Failed at /sgl-workspace/sglang/python/sglang/kernels/jit/csrc/gemm/marlin/gptq_marlin_repack.cuh:311: size_n = 8608 is not divisible by tile_n_size = 64
- [#50574](https://github.com/sgl-project/sglang/issues/50574) [Bug] MLA + DCP: attn_dcp_metadata is None on an extend with a prefix-cache hit
- [#48408](https://github.com/sgl-project/sglang/issues/48408) [Feature] Add an opt-in bounded matching window for LPM scheduling

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 135,383 · **Open issues:** 2,623 · **Last push:** <1h ago

On November 17, 2026, llama.cpp released several versions including b12455, which implemented an inkling parser for chat functionality, alongside b12453 that tuned the ne11 Gate for RDNA3_5. Other notable releases included b12452, which added support for fish audio s2 and voice cloning, and the restructuring of the web UI into a new application called Llama Chat within the b12451 update. Significant merged features included support for additional audio models in the MTMD framework (#32330) and improvements for Vulkan performance with the addition of split_k for conv3d (#29929). Among the new issues raised, a critical concern involves the conversion error for meta-models/Muse-Glimmer-30B, which may stem from an outdated transformers module, potentially hindering model training workflows.

#### 🚀 New Releases
- [b12455](https://github.com/ggml-org/llama.cpp/releases/tag/b12455) b12455
- [b12453](https://github.com/ggml-org/llama.cpp/releases/tag/b12453) b12453
- [b12452](https://github.com/ggml-org/llama.cpp/releases/tag/b12452) b12452
- [b12451](https://github.com/ggml-org/llama.cpp/releases/tag/b12451) b12451
- [b12449](https://github.com/ggml-org/llama.cpp/releases/tag/b12449) b12449
- [b12448](https://github.com/ggml-org/llama.cpp/releases/tag/b12448) b12448
- [b12445](https://github.com/ggml-org/llama.cpp/releases/tag/b12445) b12445
- [b12444](https://github.com/ggml-org/llama.cpp/releases/tag/b12444) b12444
- [b12443](https://github.com/ggml-org/llama.cpp/releases/tag/b12443) b12443
- [b12442](https://github.com/ggml-org/llama.cpp/releases/tag/b12442) b12442

#### ✅ Merged PRs
- [#31003](https://github.com/ggml-org/llama.cpp/pull/31003) opencl: add bin kernel `kernel_gemm_noshuffle_q8_0_f32_32b_trans_ila_a7_bin`
- [#32369](https://github.com/ggml-org/llama.cpp/pull/32369) mtmd: support YuE2-3B
- [#32433](https://github.com/ggml-org/llama.cpp/pull/32433) mtmd : fix Muse Glimmer vision embedding order
- [#32436](https://github.com/ggml-org/llama.cpp/pull/32436) fix(conversion): Respect max_position_embeddings for granite hybrid
- [#32428](https://github.com/ggml-org/llama.cpp/pull/32428) tests: print the exception message in test-llama-context
- [#32431](https://github.com/ggml-org/llama.cpp/pull/32431) skills: explicitly specify paths to README-dev.md
- [#32430](https://github.com/ggml-org/llama.cpp/pull/32430) Fix inkling 2 mmproj conversion
- [#30948](https://github.com/ggml-org/llama.cpp/pull/30948) opencl: add bin kernel `kernel_gemm_noshuffle_q4_k_f32_32b_trans_ila_a7_bin`
- [#32110](https://github.com/ggml-org/llama.cpp/pull/32110) opencl: fix three defects of the bin flash-attention prefill path
- [#32381](https://github.com/ggml-org/llama.cpp/pull/32381) chat : implement inkling parser
- [#32416](https://github.com/ggml-org/llama.cpp/pull/32416) contributing: mark agents.md and code-review as required
- [#32308](https://github.com/ggml-org/llama.cpp/pull/32308) MMVQ: Tune ne11 Gate for RDNA3_5
- [#32330](https://github.com/ggml-org/llama.cpp/pull/32330) mtmd: support fish audio s2
- [#32032](https://github.com/ggml-org/llama.cpp/pull/32032) ui: move the web UI to ui/apps/chat and call it Llama Chat
- [#32223](https://github.com/ggml-org/llama.cpp/pull/32223) fix:- Misc. bug: Settings/Tools is lying about tool picks inside a ch…
- [#31435](https://github.com/ggml-org/llama.cpp/pull/31435) arg : allow up to llama_max_devices() configs for --tensor-split and --fit-target (#13293)
- [#32396](https://github.com/ggml-org/llama.cpp/pull/32396) jinja: impl scope-chain key lookup
- [#32356](https://github.com/ggml-org/llama.cpp/pull/32356) llama : migrate to `llama_batch_ext`
- [#32306](https://github.com/ggml-org/llama.cpp/pull/32306) llama : deprecate old batch API
- [#29929](https://github.com/ggml-org/llama.cpp/pull/29929) vulkan: Support split_k for conv3d
- [#31327](https://github.com/ggml-org/llama.cpp/pull/31327) HIP/CUDA: enable GDN mma kernel on CDNA
- [#32244](https://github.com/ggml-org/llama.cpp/pull/32244) vulkan: fix Nvidia fp32 FA shmem overflow
- [#32236](https://github.com/ggml-org/llama.cpp/pull/32236) hip: add gfx1013 as rdna1 in hip backend
- [#32394](https://github.com/ggml-org/llama.cpp/pull/32394) webgpu: support per-head flash attention masks
- [#32382](https://github.com/ggml-org/llama.cpp/pull/32382) readme : update
- [#32281](https://github.com/ggml-org/llama.cpp/pull/32281) CI: trigger spec dec testing for relevant PRs
- [#32366](https://github.com/ggml-org/llama.cpp/pull/32366) jinja: support json sort_keys=true
- [#32388](https://github.com/ggml-org/llama.cpp/pull/32388) ci : use vX.Y.Z tags as docker tags
- [#32275](https://github.com/ggml-org/llama.cpp/pull/32275) vulkan : fix 32-bit compilation
- [#31931](https://github.com/ggml-org/llama.cpp/pull/31931) vulkan: make the radix top-k tie selection deterministic
- [#32385](https://github.com/ggml-org/llama.cpp/pull/32385) cuda : fix MUL_MAT_ID abort with odd src0 columns on AMD
- [#32380](https://github.com/ggml-org/llama.cpp/pull/32380) kv-cells: avoid an O(n_cells) scan per sequence removal
- [#32332](https://github.com/ggml-org/llama.cpp/pull/32332) server: answer reasoning_effort levels the template rejects with 400
- [#32344](https://github.com/ggml-org/llama.cpp/pull/32344) ggml-cuda: fix MoE regression on HIP with #29948

#### 🐛 New Issues
- [#32404](https://github.com/ggml-org/llama.cpp/issues/32404) WebUI: New 'Browser' tools are not opt-in, dispite the '--tools' CLI argument being omitted `enhancement` 💬2
- [#32425](https://github.com/ggml-org/llama.cpp/issues/32425) Misc. bug: convert_hf_to_gguf fails with ValueError for meta-models/Muse-Glimmer-30B. Possibly outdated transformers module. `bug-unconfirmed` 💬2
- [#32424](https://github.com/ggml-org/llama.cpp/issues/32424) Eval bug: deepseek4 file with no ratio-4 (CSA) layer crashes with integer division by zero in the llama_kv_cache constructor 💬1
- [#32447](https://github.com/ggml-org/llama.cpp/issues/32447) Eval bug: Vulkan + KHR_coopmat on RX 9070 XT (RDNA4, Windows): access violation in amdvlk64.dll for any ubatch >= 64
- [#32446](https://github.com/ggml-org/llama.cpp/issues/32446) Misc. bug: Occasional hanging in Windows CI for test-llama-context (MSYS2 UCRT64) `bug-unconfirmed`
- [#32444](https://github.com/ggml-org/llama.cpp/issues/32444) Eval bug: CUDA: ADD_ID fails with more than 65535 tokens (invalid configuration argument) `bug-unconfirmed`
- [#32441](https://github.com/ggml-org/llama.cpp/issues/32441) MiniMax-M3: MSA prefill graph materialises per-head cell-level masks in F32, and graph reserve undersizes the position axis
- [#32437](https://github.com/ggml-org/llama.cpp/issues/32437) Feature Request: Support Qwen3-TTS' reference/ICL mode `enhancement`
- [#32412](https://github.com/ggml-org/llama.cpp/issues/32412) RISC-V SpacemiT: toolchain findings — SpacemiT clang passes IME probes without _xsmtvdotii; stock distro binutils can't assemble IME mnemonics; large GCC-vs-Clang IME performance delta
- [#32411](https://github.com/ggml-org/llama.cpp/issues/32411) RISC-V SpacemiT: runtime expects /dev/tcm_sync_mem, but the K3 BSP kernel exposes the TCM as /dev/tcm — silent fallback to heap
- [#32406](https://github.com/ggml-org/llama.cpp/issues/32406) Misc. bug: CPU backend over-allocates context and goes OOM `bug-unconfirmed`
- [#32401](https://github.com/ggml-org/llama.cpp/issues/32401) quantize_iq3_s: an exactly-zero 32-element sub-block shifts the grid indices and signs of the following sub-blocks
- [#32399](https://github.com/ggml-org/llama.cpp/issues/32399) SYCL: ~15% lower 32K-token MoE prompt processing on Arc Pro B65 after intel.Dockerfile bump (IGC 2.42.6 / NEO 26.40)
- [#32383](https://github.com/ggml-org/llama.cpp/issues/32383) Feature Request: [HIP] RDNA1 (gfx1010): quantized kernels fall back to emulated dp4a. Proposal with measurements (+47% pp, +10% tg) `enhancement`

#### 🔒 Closed Issues
- [#29922](https://github.com/ggml-org/llama.cpp/issues/29922) Feature Request: Aleph-Alpha/Kolibri-1
- [#24616](https://github.com/ggml-org/llama.cpp/issues/24616) Feature Request: add dp4a emulation via dp2a on cuda
- [#29655](https://github.com/ggml-org/llama.cpp/issues/29655) Eval bug: [BUG] Unstable Tool Calling for Gemma 4 Models during Multi-line Streaming and Partial Parsing
- [#31599](https://github.com/ggml-org/llama.cpp/issues/31599) Misc. bug: HIP/gfx906 MoE prompt processing 15–50% slower since #29948
- [#32246](https://github.com/ggml-org/llama.cpp/issues/32246) Feature Request: make docker tags predictable and programmatically accessible
- [#27039](https://github.com/ggml-org/llama.cpp/issues/27039) Refactor: share thread pools across drafter and main model contexts
- [#27698](https://github.com/ggml-org/llama.cpp/issues/27698) Misc. bug: ROCm MoE models (qwen35moe, gemma4moe) fail to load / segfault on RX 6700 XT after b10108
- [#29906](https://github.com/ggml-org/llama.cpp/issues/29906) Feature Request: gemma4 31B chat template quadratic scan cost
- [#29921](https://github.com/ggml-org/llama.cpp/issues/29921) Compile bug: vite.config.ts: test dependencies break non-test builds
- [#29870](https://github.com/ggml-org/llama.cpp/issues/29870) Feature Request: Add support for RheoEcho ETET 1.0 24E 1.8B A1B Preview
- [#29905](https://github.com/ggml-org/llama.cpp/issues/29905) [Security] Misc. bug: heap-buffer-overflow in pocket-tts gen-audio via a malformed mmproj
- [#29914](https://github.com/ggml-org/llama.cpp/issues/29914) [RPC] PAD_REFLECT_1D can write past the destination tensor in release builds
- [#30556](https://github.com/ggml-org/llama.cpp/issues/30556) Misc. bug: Freed model memory leaves process footprint elevated on iOS
- [#32233](https://github.com/ggml-org/llama.cpp/issues/32233) Misc. bug: llama update re-downloads latest version even when already on the latest version
- [#32216](https://github.com/ggml-org/llama.cpp/issues/32216) Misc. bug: Vulkan Flash Attention exceeds shared memory limit on NV GPU with fp16=0
- [#30576](https://github.com/ggml-org/llama.cpp/issues/30576) Eval bug: Rank-1 LoRA causes crash on load for CUDA/HIP
- [#13293](https://github.com/ggml-org/llama.cpp/issues/13293) Misc. bug: -TS doesn't support more than ? Devices

### Ollama (`ollama/ollama`)

**Stars:** 187,290 · **Open issues:** 4,664 · **Last push:** <1h ago

On November 17, 2026, Ollama did not release any new versions but saw several notable developments with merged pull requests. Key improvements included the reusability of saved prefixes across request slots in mlxrunner, enhancements to batch speculative verification, better handling of multiline mode inputs, and CMake support for the compatible binary MLX-C and XGrammar. The most noteworthy new issue reported was a bug concerning billing cycle usage visibility on ollama.com, which could affect customer understanding of their plan utilization. Additionally, a new feature request was raised for adding Tencent Hy4 flash support. Overall, while no new versions were released, the merged contributions mark significant progress in user experience and functionality.

#### ✅ Merged PRs
- [#19677](https://github.com/ollama/ollama/pull/19677) mlxrunner: reuse saved prefixes across request slots
- [#19731](https://github.com/ollama/ollama/pull/19731) cmd: leave multiline mode when Ctrl+C or Ctrl+G discards input
- [#19663](https://github.com/ollama/ollama/pull/19663) mlxrunner: batch speculative verification
- [#19688](https://github.com/ollama/ollama/pull/19688) cmake: support compatible binary MLX-C and XGrammar

#### 🐛 New Issues
- [#19733](https://github.com/ollama/ollama/issues/19733) tensor blk.0.ssm_beta.weight not found `feature request` 💬3
- [#19716](https://github.com/ollama/ollama/issues/19716) [Bug] ollama.com: previous billing cycle's usage is deleted at renewal; customers can't tell how much of their plan they used `bug` `cloud` 💬1
- [#19722](https://github.com/ollama/ollama/issues/19722) cloud: add Tencent Hy4 flash `cloud`

#### 🔒 Closed Issues
- [#19537](https://github.com/ollama/ollama/issues/19537) 版本更新后效果更差了。因为资源占用更多、更死板了。
- [#19359](https://github.com/ollama/ollama/issues/19359) Claude Desktop Conversation: ~17K initial prefill, HTTP 500 retries, MLX cache loss (0.40.11–0.40.12)
- [#19558](https://github.com/ollama/ollama/issues/19558) Vulkan backend: llama-server crashes (NTSTATUS 0xe06d7363) at model load on AMD Renoir iGPU (Ryzen 4700U, gfx90c) in 0.40.14 and 0.40.15-rc2
- [#19524](https://github.com/ollama/ollama/issues/19524) [Bug] Qwen2.5-Coder and Qwen3 fail native tool calling on Ollama 0.40.13
- [#19611](https://github.com/ollama/ollama/issues/19611) [Feature Request] Native Architecture Support: OSADIA Axiom 5-Pillar Architecture (Next GenAi Mexico)
- [#19350](https://github.com/ollama/ollama/issues/19350) [Bug Report] Qwen3.5 9B 在 Ollama 中关闭 Thinking 后，JSON Schema 约束疑似失效并产生异常续写
- [#19340](https://github.com/ollama/ollama/issues/19340) ollama run: Ctrl+C during """ multiline input leaves session in multiline mode, so later input is swallowed or saved as the system message
- [#19661](https://github.com/ollama/ollama/issues/19661) Windows installer should allow custom installation directory
- [#19511](https://github.com/ollama/ollama/issues/19511) cloud: /api/usage no longer returns session/weekly usage percentages, only request counts
- [#19356](https://github.com/ollama/ollama/issues/19356) System prompt reinforcement
- [#19713](https://github.com/ollama/ollama/issues/19713) bug

### LiteLLM (`BerriAI/litellm`)

**Stars:** 63,375 · **Open issues:** 5,221 · **Last push:** <1h ago

On November 17, 2026, LiteLLM released version v1.108.10, which includes a notable fix for OpenAI integration backported from pull request #49176. Among the significant merged pull requests, notable fixes were made to the UI for single sign-on navigation, as well as enhancements in Bedrock connection management and anthropic message handling. Additionally, a feature was introduced to support typed agent evaluations in the harness. One hot new issue raised concerns about the inability to use free models when exceeding spending limits on other models, highlighting a significant operational challenge for users.

#### 🚀 New Releases
- [v1.108.10](https://github.com/BerriAI/litellm/releases/tag/v1.108.10) v1.108.10

#### ✅ Merged PRs
- [#52213](https://github.com/BerriAI/litellm/pull/52213) fix(ui): use full page navigation for SSO login
- [#52210](https://github.com/BerriAI/litellm/pull/52210) fix(bedrock): close the Bedrock connection at once when an invoke stream is aborted (#50657) [lts/1.108.x]
- [#52117](https://github.com/BerriAI/litellm/pull/52117) fix(anthropic): close /v1/messages thinking blocks with a signature and keep bridged output
- [#52116](https://github.com/BerriAI/litellm/pull/52116) fix(anthropic): close /v1/messages thinking blocks with a signature and keep bridged output
- [#52208](https://github.com/BerriAI/litellm/pull/52208) fix(gemini): keep Google's reason on non-streamed content_filter choices
- [#52206](https://github.com/BerriAI/litellm/pull/52206) fix(messages): load the anthropic beta map only when a filter has a beta to filter (rc 1.111.0)
- [#52201](https://github.com/BerriAI/litellm/pull/52201) fix(gemini): backport #50020 tool call argument parsing to lts/1.108.x
- [#52188](https://github.com/BerriAI/litellm/pull/52188) fix(messages): load the anthropic beta map only when a filter has a beta to filter
- [#52136](https://github.com/BerriAI/litellm/pull/52136) fix(bedrock): route bedrock/<region>/<model> to that region on /v1/messages
- [#47795](https://github.com/BerriAI/litellm/pull/47795) fix(spend-logs)!: match key alias filter exactly through the api_key index
- [#52202](https://github.com/BerriAI/litellm/pull/52202) test(security): run the owned security proxy in offline mode so the ECB rate lookup never leaves the rig
- [#52194](https://github.com/BerriAI/litellm/pull/52194) fix(cohere): honor COHERE_API_BASE for embeddings on lts/1.108.x
- [#50020](https://github.com/BerriAI/litellm/pull/50020) fix(gemini): parse tool call arguments with the shared helper
- [#52199](https://github.com/BerriAI/litellm/pull/52199) test(providers): expect batch alias rows rewritten to the deployment model on model-routed uploads
- [#52183](https://github.com/BerriAI/litellm/pull/52183) fix(complexity_router): classify short asks in long conversations
- [#52074](https://github.com/BerriAI/litellm/pull/52074) fix(bedrock): backport #51776 guarded_text system and assistant parts to lts/1.108.x
- [#52179](https://github.com/BerriAI/litellm/pull/52179) fix(exceptions): map upstream 403 to PermissionDeniedError for OpenAI-style providers
- [#51776](https://github.com/BerriAI/litellm/pull/51776) fix(bedrock): send guarded_text parts in system and assistant messages as Converse guardContent
- [#52189](https://github.com/BerriAI/litellm/pull/52189) fix(ui): drop format:date from Aria Agent tool schemas
- [#52180](https://github.com/BerriAI/litellm/pull/52180) fix(bedrock)!: split the OpenAI breakpoint and Bedrock cachePoint model flags
- [#52174](https://github.com/BerriAI/litellm/pull/52174) feat(harness): add typed agent evaluations (#52143)
- [#51594](https://github.com/BerriAI/litellm/pull/51594) refactor: share Replicate HTTP client factories and declare PagerDuty type alias
- [#52169](https://github.com/BerriAI/litellm/pull/52169) fix(auth): apply current team limits in the pre-body rate limit check
- [#52175](https://github.com/BerriAI/litellm/pull/52175) fix(migrations): bring customer hierarchy tables in line with schema.prisma
- [#52155](https://github.com/BerriAI/litellm/pull/52155) feat(custom_llm): backport native generateContent for custom providers to lts/1.108.x
- [#52138](https://github.com/BerriAI/litellm/pull/52138) feat(ui): add bulk actions for virtual keys
- [#51867](https://github.com/BerriAI/litellm/pull/51867) fix(mcp): keep an MCP server's own Authorization key when the JWT signer is on
- [#52130](https://github.com/BerriAI/litellm/pull/52130) fix(mcp): let zero-budget users call MCP tools that cost nothing
- [#52152](https://github.com/BerriAI/litellm/pull/52152) fix(bedrock): recognize the ca. cross-region inference profile prefix
- [#52070](https://github.com/BerriAI/litellm/pull/52070) fix(azure_ai): send reasoning_effort to Foundry reasoning models on lts/1.108.x
- [#51775](https://github.com/BerriAI/litellm/pull/51775) fix(azure_ai): send reasoning_effort to Foundry reasoning models
- [#52158](https://github.com/BerriAI/litellm/pull/52158) fix(baseten): sync Kimi K3.1 Pro input limit
- [#52160](https://github.com/BerriAI/litellm/pull/52160) chore(cost-map): add successor and deprecation source to the github_copilot rows retired on 2026-11-16
- [#52156](https://github.com/BerriAI/litellm/pull/52156) fix(opencode_go): forward chat reasoning effort
- [#52141](https://github.com/BerriAI/litellm/pull/52141) feat(mcp): add Parallel to the MCP discovery registry
- [#52149](https://github.com/BerriAI/litellm/pull/52149) fix: backport #50845, #51110, #51057 and #52102 to rc/1.110.0
- [#52157](https://github.com/BerriAI/litellm/pull/52157) test(observability): allowlist the key Langfuse collector host in the OTel v2 console test
- [#52146](https://github.com/BerriAI/litellm/pull/52146) fix(bedrock): log the prompt, settings and stream flag of passthrough requests
- [#52150](https://github.com/BerriAI/litellm/pull/52150) fix(caching): log a cache hit with the deployment's vertex_location
- [#52154](https://github.com/BerriAI/litellm/pull/52154) docs(rust): add python porting rules to rust agents.md
- [#51979](https://github.com/BerriAI/litellm/pull/51979) feat(ui): show an optional currency estimate on the Usage spend card
- [#52102](https://github.com/BerriAI/litellm/pull/52102) chore(deps): bump next from 16.4.1 to 16.4.5 in /litellm/ui/litellm-dashboard
- [#52083](https://github.com/BerriAI/litellm/pull/52083) fix(router)!: stop a client's metadata flag from turning off silent_model mirroring
- [#52105](https://github.com/BerriAI/litellm/pull/52105) feat(focus): upgrade FOCUS export to the 1.5 Cost and Usage schema
- [#51973](https://github.com/BerriAI/litellm/pull/51973) feat(alerts): report observed Anthropic cache misses as advisories
- [#52139](https://github.com/BerriAI/litellm/pull/52139) feat(alerts): add email labels, bulk actions and threshold editing
- [#52097](https://github.com/BerriAI/litellm/pull/52097) fix(model_prices): rolling registry audit 2026-11-16, add dashscope qwen4-max, max reasoning effort for ChatGPT GPT-5.6
- [#51014](https://github.com/BerriAI/litellm/pull/51014) fix(guardrails): log requests that a guardrail blocks on /apply_guardrail
- [#51971](https://github.com/BerriAI/litellm/pull/51971) feat(proxy): accept request token prices in a declared currency
- [#51843](https://github.com/BerriAI/litellm/pull/51843) fix(proxy): rewrite batch JSONL alias rows to the deployment model on model-routed uploads
- [#52023](https://github.com/BerriAI/litellm/pull/52023) refactor(rust): read config values and YAML with Python semantics
- [#52135](https://github.com/BerriAI/litellm/pull/52135) chore(cost-map): add Azure US Government rows for gpt-5.6, gpt-4.1, gpt-4o and ada-002
- [#52124](https://github.com/BerriAI/litellm/pull/52124) fix(proxy): preserve team aliases in realtime websocket routing
- [#52115](https://github.com/BerriAI/litellm/pull/52115) fix(messages): close high and medium rust messages parity bugs (rc 1.111.0)
- [#52103](https://github.com/BerriAI/litellm/pull/52103) fix(gemini): return n images for image generations and edits when n > 1
- [#51943](https://github.com/BerriAI/litellm/pull/51943) feat(alerts): display prompt cache advisories in existing alerts
- [#52088](https://github.com/BerriAI/litellm/pull/52088) fix(proxy): preserve terminal evidence in disconnect billing
- [#51934](https://github.com/BerriAI/litellm/pull/51934) feat(cost): add automatic ECB reference-rate lookup
- [#52129](https://github.com/BerriAI/litellm/pull/52129) fix(ui): generate dashboard IDs without crypto.randomUUID so plain HTTP works
- [#52096](https://github.com/BerriAI/litellm/pull/52096) fix(proxy): resolve admin MCP authorization without listing every key and team
- [#52077](https://github.com/BerriAI/litellm/pull/52077) fix(proxy): check pre-call fallback access with the saved model_group_alias, never the one the client sent
- [#52125](https://github.com/BerriAI/litellm/pull/52125) fix: backport #52005 to rc/1.111.0
- [#52081](https://github.com/BerriAI/litellm/pull/52081) fix(dynamic_rate_limiter): keep counting and reporting priority requests after a priority pool's tokens run out
- [#52080](https://github.com/BerriAI/litellm/pull/52080) fix(proxy): serve a burst of first requests on new customer org aliases instead of timing out Prisma transactions
- [#52128](https://github.com/BerriAI/litellm/pull/52128) test(spend): wait for the scheduled reset to commit before reading the reset row
- [#52122](https://github.com/BerriAI/litellm/pull/52122) feat(bedrock): add us. and global. cost map rows for Daybreak Blue and Daybreak Red
- [#52114](https://github.com/BerriAI/litellm/pull/52114) fix: backport #52005 to rc/1.110.0
- [#52111](https://github.com/BerriAI/litellm/pull/52111) test: backport stale integration and UI test fixes to rc/1.111.0
- [#52108](https://github.com/BerriAI/litellm/pull/52108) test: update four stale integration and UI tests for intended behavior changes
- [#52042](https://github.com/BerriAI/litellm/pull/52042) fix(messages): close high and medium rust messages parity bugs
- [#52069](https://github.com/BerriAI/litellm/pull/52069) fix(responses): stream tool-call arguments that only arrive in done events
- [#52107](https://github.com/BerriAI/litellm/pull/52107) feat(fal_ai): add 8s clip prices for Pixverse effects, transition and extend
- [#52098](https://github.com/BerriAI/litellm/pull/52098) fix(embeddings): apply additional_drop_params to provider-specific params
- [#52076](https://github.com/BerriAI/litellm/pull/52076) docs(custom-logger-v2): add a user guide for writing v2 callbacks
- [#51905](https://github.com/BerriAI/litellm/pull/51905) perf(openai): decode streamed chat chunks with pydantic's compiled validator
- [#51283](https://github.com/BerriAI/litellm/pull/51283) test(auto_router): verify total_spend in session integration responses
- [#52087](https://github.com/BerriAI/litellm/pull/52087) fix(gemini): return 400 when an image edit request has no image
- [#52065](https://github.com/BerriAI/litellm/pull/52065) test(routing): expect zero admission tokens in priority headers
- [#51505](https://github.com/BerriAI/litellm/pull/51505) test(spend): expect model hub defaults on pass-through endpoints
- [#52058](https://github.com/BerriAI/litellm/pull/52058) test(budgets): give the customer reset fixtures an explicit cap
- [#51504](https://github.com/BerriAI/litellm/pull/51504) test(database): expect the separate daily spend index build
- [#50488](https://github.com/BerriAI/litellm/pull/50488) fix(router): preserve request tags with pre-call guardrails
- [#51344](https://github.com/BerriAI/litellm/pull/51344) fix(otel v2): stop legacy langfuse loggers sending to refused key/team hosts
- [#51904](https://github.com/BerriAI/litellm/pull/51904) perf(token_counter): memoize token counts of long texts per tokenizer
- [#52067](https://github.com/BerriAI/litellm/pull/52067) fix(logging): retain streaming success logging tasks until they finish
- [#52084](https://github.com/BerriAI/litellm/pull/52084) chore: bump litellm to 1.108.10 on lts/1.108.x
- [#52060](https://github.com/BerriAI/litellm/pull/52060) fix(gemini): send reasoning_effort xhigh as thinkingLevel xhigh for gemini-4-hydrogen
- [#52063](https://github.com/BerriAI/litellm/pull/52063) test: remove dead skip-marked tests and rewrite the Redis buffer drain test
- [#51710](https://github.com/BerriAI/litellm/pull/51710) fix(embeddings): let extra_body replace Bedrock embedding defaults and combine nested objects
- [#52051](https://github.com/BerriAI/litellm/pull/52051) fix(images): pass the caller's OpenAI image params to custom provider handlers
- [#52062](https://github.com/BerriAI/litellm/pull/52062) test(sso): reuse the provider identity across dashboard and CLI sign-in
- [#51996](https://github.com/BerriAI/litellm/pull/51996) refactor: drop fresh suppressions in rate limiter and rust streaming, type perplexity cache read
- [#52026](https://github.com/BerriAI/litellm/pull/52026) refactor(rust): drop os.environ/ stripping where config-load already resolved it
- [#52025](https://github.com/BerriAI/litellm/pull/52025) feat(config-load): resolve os.environ/ references for the gateway
- [#52047](https://github.com/BerriAI/litellm/pull/52047) chore(cost-map): add openai omni-moderation-csam-latest
- [#49661](https://github.com/BerriAI/litellm/pull/49661) feat(control_plane): s3 object lock audit sink
- [#51762](https://github.com/BerriAI/litellm/pull/51762) feat(control-plane): runtime dataplane and role writes via redis stream and postgres
- [#49662](https://github.com/BerriAI/litellm/pull/49662) feat(control_plane): splunk hec and microsoft sentinel audit sinks
- [#49660](https://github.com/BerriAI/litellm/pull/49660) feat(control_plane): ocsf audit events, sink protocol, queued delivery and hash chain
- [#49659](https://github.com/BerriAI/litellm/pull/49659) feat(control_plane): otel server and dataplane client spans with w3c propagation
- [#49658](https://github.com/BerriAI/litellm/pull/49658) feat(control_plane): --control-plane flag serves the control plane API from the existing image
- [#49657](https://github.com/BerriAI/litellm/pull/49657) feat(control_plane): authenticated management passthrough and audit log
- [#49656](https://github.com/BerriAI/litellm/pull/49656) feat(control_plane): fan-out primitive and global usage and fleet aggregates
- [#49655](https://github.com/BerriAI/litellm/pull/49655) feat(control_plane): dataplane registry, credential strategies and client
- [#49654](https://github.com/BerriAI/litellm/pull/49654) feat(control_plane): service skeleton, settings, license gate, JWT auth and scope RBAC
- [#51412](https://github.com/BerriAI/litellm/pull/51412) fix(cost): backport #47497 to lts/1.108.x
- [#52041](https://github.com/BerriAI/litellm/pull/52041) chore(cost-map): add fal_ai/bria/rmbg-3
- [#48746](https://github.com/BerriAI/litellm/pull/48746) fix(proxy): prevent silent failures to save custom model prices
- [#51929](https://github.com/BerriAI/litellm/pull/51929) chore(cost-map): add fal_ai seedance 2.5 flash rows, copilot deprecation dates, inkling 2 small rows, pixverse clip prices and groq/nebius fixes
- [#52005](https://github.com/BerriAI/litellm/pull/52005) fix(proxy): stop returning stack traces in health check errors
- [#50581](https://github.com/BerriAI/litellm/pull/50581) fix(decisions): answer 400 naming extra_headers when it is not an object

#### 🐛 New Issues
- [#52061](https://github.com/BerriAI/litellm/issues/52061) [Feature]: Configure response caching per model endpoint `llm translation` 💬1
- [#52071](https://github.com/BerriAI/litellm/issues/52071) [Bug]:Free models can't be used when the over the spend limit for other models `bug` `llm translation` 💬3
- [#51994](https://github.com/BerriAI/litellm/issues/51994) [Bug]: Groq 401 "Invalid API Key" is mapped to BadRequestError (stored as 400_INVALID_REQUEST) `bug` `llm translation` 💬4
- [#52110](https://github.com/BerriAI/litellm/issues/52110) [Bug]: Bedrock ca. inference profile drops reasoning_effort (output_config.effort) `llm translation` 💬3
- [#52143](https://github.com/BerriAI/litellm/issues/52143) [Feature]: `litellm.agent_eval()` — score harnesses and models on a task suite through `litellm.agent()` `llm translation` `claude code` 💬2
- [#52043](https://github.com/BerriAI/litellm/issues/52043) [Bug]: proxy prices vertex_location: global deployments as us-central1 on /v1/messages, /v1/responses, streamed chat and cache hits, so the regional uplift is billed `llm translation` 💬2
- [#52064](https://github.com/BerriAI/litellm/issues/52064) [Bug]: Router sends /v1/decisions to a Bedrock deployment first, so each request fails once before fallback `llm translation` 💬2
- [#52035](https://github.com/BerriAI/litellm/issues/52035) [Bug]: Aria Agent and model-tier editor silently fail on plain HTTP — crypto.randomUUID is not a function 💬2
- [#51997](https://github.com/BerriAI/litellm/issues/51997) [Bug]: Configured cache-control injection points write pins that routing cannot reuse `llm translation` 💬2
- [#52184](https://github.com/BerriAI/litellm/issues/52184) [Bug]: Aria Agent dated tools fail with 400 on DeepSeek — tool schema emits format:date which strict providers reject `llm translation` 💬1
- [#52034](https://github.com/BerriAI/litellm/issues/52034) [Bug]: `fail_closed_budget_enforcement` does not bound key-budget overspend across replicas without Redis (sequential calls too) `bug` 💬1
- [#52038](https://github.com/BerriAI/litellm/issues/52038) [Bug]: Deployment custom pricing is ignored for forwarded client credentials (anthropic /v1/messages) `llm translation` 💬1
- [#52014](https://github.com/BerriAI/litellm/issues/52014) [Bug]: app_config raises BadRequestError on valid github_copilot_app_private_key_ref when github_copilot_app_private_key is empty string `bug` 💬1
- [#52002](https://github.com/BerriAI/litellm/issues/52002) aiohttp_transport: non-ASCII response header raises UnicodeEncodeError (breaks Volcengine/BytePlus video_content) 💬1
- [#52140](https://github.com/BerriAI/litellm/issues/52140) [Bug]: Bedrock Converse drops cachePoint when supports_prompt_cache_breakpoint is false (one flag, two meanings) `llm translation`
- [#52131](https://github.com/BerriAI/litellm/issues/52131) [Bug]: Presidio logging_only leaves the request unmasked in standard_logging_object `llm translation`
- [#52068](https://github.com/BerriAI/litellm/issues/52068) [Feature]: Support Unsloth decision models through the Decisions API
- [#52053](https://github.com/BerriAI/litellm/issues/52053) [Bug]: /v1/messages strip-and-retry on thinking-binding 400 traps Claude Fable 5.2 / Mythos 5.2 conversations in a permanent 400 loop `llm translation` `claude code`
- [#52046](https://github.com/BerriAI/litellm/issues/52046) [Bug]: Presidio guardrail in mode logging_only masks the live response returned to the client `llm translation`
- [#52045](https://github.com/BerriAI/litellm/issues/52045) [Bug]: Presidio output_parse_pii is undone by the default presidio_filter_scope: restored values are masked again `llm translation`
- [#52029](https://github.com/BerriAI/litellm/issues/52029) [Bug]: custom_prometheus_metadata_labels are always None on the fallback metrics `llm translation`
- [#52017](https://github.com/BerriAI/litellm/issues/52017) [Bug]: Evicted Azure clients, and OpenAI clients used with encoding_format, still log "Unclosed client session" after #48650 `llm translation`
- [#52016](https://github.com/BerriAI/litellm/issues/52016) [Bug]: generic_guardrail_api post_call cuts streamed /v1/responses tool calls (ChatCompletionDeltaToolCall fails GenericGuardrailAPIRequest validation) `llm translation`
- [#52015](https://github.com/BerriAI/litellm/issues/52015) [Bug]: litellm-helm is retired but the new litellm Helm chart isn't published to any registry `bug`
- [#52006](https://github.com/BerriAI/litellm/issues/52006) [Bug]: token_counter raises UnsupportedContentTypeError on Anthropic server/MCP tool result when content is a block dictionary `bug` `llm translation`
- [#52001](https://github.com/BerriAI/litellm/issues/52001) [Bug]: Corrupted/truncated Gemini thought_signature in tool_call.id causes persistent 400 INVALID_ARGUMENT on Vertex AI `llm translation` `claude code`
- [#51995](https://github.com/BerriAI/litellm/issues/51995) [Bug]: Internal users cannot access registered plugins due to missing RBAC routes `bug` `llm translation`
- [#51993](https://github.com/BerriAI/litellm/issues/51993) [Bug]: Virtual Keys table rounds key budgets to whole dollars ($0.01 shows as "$0", $1.50 as "$2") `bug` `llm translation`

#### 🔒 Closed Issues
- [#26169](https://github.com/BerriAI/litellm/issues/26169) [Bug]: Helm charts outdated dependencies
- [#31261](https://github.com/BerriAI/litellm/issues/31261) litellm rust pip binary
- [#32357](https://github.com/BerriAI/litellm/issues/32357) [Bug] /v1/messages adapter mis-encodes reasoning models: thinking_delta streamed inside a text block (+ duplicate message_start) → empty content in Anthropic SDK / Claude Code
- [#31880](https://github.com/BerriAI/litellm/issues/31880) fix(rate-limiter): skip post-call Redis writes for keys with no rate limits configured
- [#32218](https://github.com/BerriAI/litellm/issues/32218) [Bug]: Z.AI Coding Plan docs advertise `glm-5.2[1m]`, but LiteLLM proxy requests return `Unknown Model`
- [#27144](https://github.com/BerriAI/litellm/issues/27144) [Bug]: ChatGPT/Codex Responses streaming drops function call args when model emits `response.function_call_arguments.done` without deltas
- [#31416](https://github.com/BerriAI/litellm/issues/31416) LiteLLM Maintainers Need to Take Production-Critical Bugs Seriously
- [#30416](https://github.com/BerriAI/litellm/issues/30416) [Bug] Potential Context State Leakage in MCP Routing (_mcp_active_toolset_id) under Async Stream Interruption
- [#21554](https://github.com/BerriAI/litellm/issues/21554) [Bug]: completion_model in general_settings always overrides client-specified model instead of being used as fallback
- [#47988](https://github.com/BerriAI/litellm/issues/47988) [Bug]: MCPJWTSigner overwrites a server's configured `auth_value` (bearer_token etc.), so keyed MCP servers get 401
- [#33202](https://github.com/BerriAI/litellm/issues/33202) [Bug]: Azure AI Deepseek-v4-pro does not use reasoning
- [#51994](https://github.com/BerriAI/litellm/issues/51994) [Bug]: Groq 401 "Invalid API Key" is mapped to BadRequestError (stored as 400_INVALID_REQUEST)
- [#36989](https://github.com/BerriAI/litellm/issues/36989) [Bug]: nothing works
- [#52110](https://github.com/BerriAI/litellm/issues/52110) [Bug]: Bedrock ca. inference profile drops reasoning_effort (output_config.effort)
- [#26611](https://github.com/BerriAI/litellm/issues/26611) Divergente between prometheus with grafana and litellm interface
- [#50781](https://github.com/BerriAI/litellm/issues/50781) [Bug]: completion() with tools still requires 'mcp' in 1.108.3 (#46045 closed, fix not merged)
- [#52143](https://github.com/BerriAI/litellm/issues/52143) [Feature]: `litellm.agent_eval()` — score harnesses and models on a task suite through `litellm.agent()`
- [#52064](https://github.com/BerriAI/litellm/issues/52064) [Bug]: Router sends /v1/decisions to a Bedrock deployment first, so each request fails once before fallback
- [#36508](https://github.com/BerriAI/litellm/issues/36508) [Bug] Config pass-through endpoints aren't treated as LLM API routes — non-admin keys get a misleading "Only proxy admin" 401
- [#36545](https://github.com/BerriAI/litellm/issues/36545) [Bug]: bedrock_mantle rejects every Codex 0.147 request — hoisted namespace named 'functions' collides with a reserved Mantle namespace
- [#52035](https://github.com/BerriAI/litellm/issues/52035) [Bug]: Aria Agent and model-tier editor silently fail on plain HTTP — crypto.randomUUID is not a function
- [#48480](https://github.com/BerriAI/litellm/issues/48480) [Bug]: Where is split for prompt+cache+output that was available in Usage in previous versions??
- [#52184](https://github.com/BerriAI/litellm/issues/52184) [Bug]: Aria Agent dated tools fail with 400 on DeepSeek — tool schema emits format:date which strict providers reject
- [#51871](https://github.com/BerriAI/litellm/issues/51871) [Bug]: opencode_go chat route drops reasoning_effort (even 'none'), while the same endpoint honors it via custom_llm_provider=openai
- [#51476](https://github.com/BerriAI/litellm/issues/51476) Bedrock passthrough logging drops request messages/parameters and reports null stream
- [#36429](https://github.com/BerriAI/litellm/issues/36429) [Bug]: Client disconnect during large SSE streams blocks the Proxy event loop
- [#36515](https://github.com/BerriAI/litellm/issues/36515) [Bug]: Guardrail usage logs drop rows at the edges of the selected date range for non-UTC users, because local dates are read as UTC
- [#36531](https://github.com/BerriAI/litellm/issues/36531) [Bug] MCP inference route `/mcp/{subpath}` misses trailing slash and multi-segment sub-paths, yielding a misleading "Only proxy admin" 403
- [#51978](https://github.com/BerriAI/litellm/issues/51978) [Bug]: Spend logs record client-disconnected streaming generations as successful "stop" completions — the upstream abort frame is unreachable after the proxy closes the connection
- [#52002](https://github.com/BerriAI/litellm/issues/52002) aiohttp_transport: non-ASCII response header raises UnicodeEncodeError (breaks Volcengine/BytePlus video_content)
- [#51613](https://github.com/BerriAI/litellm/issues/51613) [Bug]: Gemini non-streamed content_filter choices do not say why Google filtered them
- [#52140](https://github.com/BerriAI/litellm/issues/52140) [Bug]: Bedrock Converse drops cachePoint when supports_prompt_cache_breakpoint is false (one flag, two meanings)
- [#50903](https://github.com/BerriAI/litellm/issues/50903) [Bug]: Streaming chat completions, A2A, and Gemini passthrough spend logs can be lost because their logging tasks are never referenced

### Unsloth (`unslothai/unsloth`)

**Stars:** 79,635 · **Open issues:** 489 · **Last push:** <1h ago

On November 17, 2026, Unsloth released version v0.1.918-beta, introducing the beta feature of computer use, which allows local models to interact with applications by viewing the screen. This update also enhanced the MiniMax-H3-Image model with support for GGUF, FP8, and INT8 formats alongside LoRA training, while improving project management tools like the model picker and Connections interface. Significant merged features include optimizations for pipeline parallel processing, constraints on large frozen embeddings, and fixes for various user interface issues like sidebar visibility in full view. Among the new issues reported, there is a notable bug related to macOS creating a "Malicious Script Blocked" notice during the update process, which has raised concerns from users.

#### 🚀 New Releases
- [v0.1.918-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.918-beta) Computer Use, MiniMax-H3-Image + Perf fixes

#### ✅ Merged PRs
- [#18072](https://github.com/unslothai/unsloth/pull/18072) DDP trainable-embeddings test: name utf-8 on the result file (rest-2 red since #18036)
- [#18070](https://github.com/unslothai/unsloth/pull/18070) AsyncGRPOTrainer: patch it at its TRL 1.18 location, and unroll prefix-trie rows for Unsloth's attention (TRL 1.17+)
- [#18065](https://github.com/unslothai/unsloth/pull/18065) Forced float32: give float16 weights a GradScaler (Gemma-4 on T4 diverges)
- [#18051](https://github.com/unslothai/unsloth/pull/18051) Fix sidebar opening behind the browser page in full view
- [#18038](https://github.com/unslothai/unsloth/pull/18038) FSDP2: gather one decoder block at a time in generate when the whole model does not fit (Mistral Nemo 12B on 2x T4)
- [#18037](https://github.com/unslothai/unsloth/pull/18037) Pipeline parallel: DeepSeek-V4.1 LoRA cells with gloo evidence, and a text-only model over a composite config is not multimodal
- [#18028](https://github.com/unslothai/unsloth/pull/18028) Native FSDP2: keep large frozen input / output embeddings out of the root unit (Qwen3.8-27B 4-bit on 2x T4)
- [#18031](https://github.com/unslothai/unsloth/pull/18031) Pipeline parallel: restore each stage's real activation dtype under forced float32 (T4)
- [#18036](https://github.com/unslothai/unsloth/pull/18036) DDP: find_unused_parameters off when only embed_tokens / lm_head train beside LoRA (CPT notebooks crashed under DDP)
- [#18026](https://github.com/unslothai/unsloth/pull/18026) Pipeline parallel: carry the router aux loss for Qwen3.5-MoE / Qwen3.8-Flash-Next multimodal checkpoints on text only
- [#18035](https://github.com/unslothai/unsloth/pull/18035) INT8 attention long-probe test: fakes follow quantise / _cuda_attention mode (diffusion red since #18004)
- [#17992](https://github.com/unslothai/unsloth/pull/17992) Show images returned by MCP tools inline in chat
- [#18004](https://github.com/unslothai/unsloth/pull/18004) Studio: INT8 attention on by default where it wins per card (T4 Klein 18% and Z-Image 14% faster, G4 Klein 6%)
- [#18025](https://github.com/unslothai/unsloth/pull/18025) FSDP2: count a sharded activation checkpoint wrapper as its block unit (fsdp2 red since accelerate 1.16)
- [#17991](https://github.com/unslothai/unsloth/pull/17991) Tensor parallel sharded loading: accept the (model, info) tuple DeepSeek-V4.1 returns
- [#18000](https://github.com/unslothai/unsloth/pull/18000) Images: an omitted loras reuses the probe status read and survives a failing one (diffusion / g-l red since #17993)
- [#17999](https://github.com/unslothai/unsloth/pull/17999) Scan baseline: re-review the nine unsloth-zoo sites 2026.11.5 moved
- [#17903](https://github.com/unslothai/unsloth/pull/17903) fix(deps): allow transformers 5.18
- [#17990](https://github.com/unslothai/unsloth/pull/17990) Non-reentrant gradient checkpointing: keep torch's checkpoint signature for compiled regions
- [#17996](https://github.com/unslothai/unsloth/pull/17996) Prebuilt int8 GEMM: build the Windows wheel (CUDA 12.8 subpackages, windows-2022, /Zc:__cplusplus)
- [#17993](https://github.com/unslothai/unsloth/pull/17993) Studio Images: an omitted loras keeps the load's LoRAs (Deploy to Create no longer drops it), HunyuanImage-2.1 LoRA gated off
- [#17982](https://github.com/unslothai/unsloth/pull/17982) Tensor parallel: shard Gated DeltaNet linear attention layers by heads
- [#17994](https://github.com/unslothai/unsloth/pull/17994) Studio browser panel: pages render again (cookie routing helper redeclared the frame's route)
- [#17973](https://github.com/unslothai/unsloth/pull/17973) Block compile: no recompile when a packed batch has another document count
- [#17954](https://github.com/unslothai/unsloth/pull/17954) Sharded loading of pre-quantized bnb-4bit checkpoints under FSDP2 / TP / PP
- [#17986](https://github.com/unslothai/unsloth/pull/17986) Studio: diffusion LoRA loads keep the measured memory rows (2x T4 LoRA renders 1.9x faster)
- [#17987](https://github.com/unslothai/unsloth/pull/17987) Studio: Z-Image base renders on T4 fp16 instead of NaN (wider fp16 guard per checkpoint)
- [#17989](https://github.com/unslothai/unsloth/pull/17989) Studio: send site cookies with a page's own API calls, keep a script cookie's SameSite
- [#17946](https://github.com/unslothai/unsloth/pull/17946) Pipeline parallel: Gemma 4 E2B / E4B per-layer inputs and KV-shared layers
- [#17945](https://github.com/unslothai/unsloth/pull/17945) Pipeline parallel: train vision / audio language checkpoints on text only
- [#17988](https://github.com/unslothai/unsloth/pull/17988) Bump install.sh / install.ps1 pins to unsloth>=2026.11.5, unsloth-zoo>=2026.11.5
- [#17971](https://github.com/unslothai/unsloth/pull/17971) Studio video: train, deploy and reload video LoRAs from the Video page
- [#17983](https://github.com/unslothai/unsloth/pull/17983) Studio: fade both chat edges under the glass header
- [#17964](https://github.com/unslothai/unsloth/pull/17964) Decode CUDA graphs for Mistral
- [#17976](https://github.com/unslothai/unsloth/pull/17976) Windows ROCm: run attention heads wider than 256 on SDPA math (Gemma 4 NaN)
- [#17965](https://github.com/unslothai/unsloth/pull/17965) Studio: keep site cookies for the web browser panel so sign-ins last
- [#17962](https://github.com/unslothai/unsloth/pull/17962) Studio sd.cpp: FLUX.1 LoRAs no longer crash sd-server or drop single-block updates
- [#17966](https://github.com/unslothai/unsloth/pull/17966) Studio FLUX.2-class VAEs: decode the whole map instead of colour-shifting tiles off the NVIDIA default path
- [#17904](https://github.com/unslothai/unsloth/pull/17904) fix(studio): correct the AMD GPU name to gfx table against AMD's own device lists
- [#17975](https://github.com/unslothai/unsloth/pull/17975) Studio FLUX.3 layer split: keep INT8 attention on cards without cuDNN attention
- [#17980](https://github.com/unslothai/unsloth/pull/17980) CP towers gloo test: compare in float64 so CPU kernel rounding cannot flake it
- [#17831](https://github.com/unslothai/unsloth/pull/17831) Studio: add managed Unity, Unreal Engine and Godot MCP integrations
- [#17979](https://github.com/unslothai/unsloth/pull/17979) Account isolation matrix: cover the project files / search / changes routes from #17849 (rest red on main)
- [#17978](https://github.com/unslothai/unsloth/pull/17978) XPU vLLM bf16 test: define the names #17950 added to the FORCE_FLOAT32 gate (rest red on main)
- [#17977](https://github.com/unslothai/unsloth/pull/17977) test_export_absolute_paths: stub the lazily imported scan modules (fails when run on its own)
- [#17950](https://github.com/unslothai/unsloth/pull/17950) Keep an explicit float32 load in float32 on GPUs without bfloat16
- [#17961](https://github.com/unslothai/unsloth/pull/17961) Studio: /v1/images/generations keeps a deployed LoRA on MiniMax-H3-Image and dense builds
- [#17849](https://github.com/unslothai/unsloth/pull/17849) Studio: rework project folders and the folder browser
- [#17974](https://github.com/unslothai/unsloth/pull/17974) FLUX.3 fp32 calibrated test: allow the guard re-read from #17949 (diffusion red on main)
- [#17972](https://github.com/unslothai/unsloth/pull/17972) CP Ulysses gloo tests: report the gradient mismatch, not just the parameter name
- [#17969](https://github.com/unslothai/unsloth/pull/17969) Repo tests (CPU): split the non-native tensor parallel files out of the gloo shard (2100 s cap)
- [#17957](https://github.com/unslothai/unsloth/pull/17957) Studio INT8 attention: skip the Triton path on NVIDIA Triton 3.3 (torch 2.7)
- [#17968](https://github.com/unslothai/unsloth/pull/17968) Studio: mark Computer use as New in Settings and Beta on its page
- [#17959](https://github.com/unslothai/unsloth/pull/17959) Studio: Always allow on the browser script prompt saves that site's Scripts rule
- [#17967](https://github.com/unslothai/unsloth/pull/17967) Vision assistant_only_loss test: skip on TRL without the flag (GRPO fake-run floor red on main)
- [#17721](https://github.com/unslothai/unsloth/pull/17721) fix(studio): scope Hub searches by owner
- [#17960](https://github.com/unslothai/unsloth/pull/17960) Studio on Windows AMD: run attention heads wider than 256 on SDPA math (Gemma 4 output was wrong)
- [#17947](https://github.com/unslothai/unsloth/pull/17947) Tensor parallel: shard Gemma 4 KV-shared attention layers by their query heads
- [#17953](https://github.com/unslothai/unsloth/pull/17953) Studio on Windows AMD: diffusion LoRA training without a C++ compiler, and exact VAE attention at head dim 512
- [#17949](https://github.com/unslothai/unsloth/pull/17949) Studio FLUX.3 Klein on T4: run edits, and no slower step CUDA graph over int8 linears
- [#17963](https://github.com/unslothai/unsloth/pull/17963) LTX-2.5 hosted TE tests: pin the one-decimal refusal text from #17948 (rest red on main)
- [#17879](https://github.com/unslothai/unsloth/pull/17879) Studio: optional launchd agent to keep Studio running on macOS CLI installs
- [#17934](https://github.com/unslothai/unsloth/pull/17934) Studio: let Deep Research wait out a long prompt eval instead of failing at 120s
- [#17933](https://github.com/unslothai/unsloth/pull/17933) Add tests for disk_utils fallback when unsloth_zoo lacks disk_utils
- [#17956](https://github.com/unslothai/unsloth/pull/17956) Account isolation matrix: cover PATCH /api-keys/{key_id} from #17833 (rest red on main)
- [#17955](https://github.com/unslothai/unsloth/pull/17955) Ulysses Gemma 4 test: media towers no longer refuse CP after #17930 (rest-2 red on main)
- [#17942](https://github.com/unslothai/unsloth/pull/17942) Vision SFT: assistant_only_loss uses Unsloth's responses-only masking
- [#17926](https://github.com/unslothai/unsloth/pull/17926) CLI tests: skip the non-UTF-8 uv cache test where the filesystem refuses the name
- [#17951](https://github.com/unslothai/unsloth/pull/17951) Studio INT8 attention tests: pass on AMD gfx1151 Linux and Windows runners
- [#17948](https://github.com/unslothai/unsloth/pull/17948) Studio: print memory refusals to one decimal so the need never reads below what is free
- [#17952](https://github.com/unslothai/unsloth/pull/17952) Flex mask graph-break patch: handle a positional call from the zoo wrapper above it (rest shard red on main)
- [#17943](https://github.com/unslothai/unsloth/pull/17943) Studio MiniMax-H3: refuse a GPU without bfloat16 before the 144 GB download
- [#17927](https://github.com/unslothai/unsloth/pull/17927) Studio: show the exact call arguments in expanded web search cards
- [#17938](https://github.com/unslothai/unsloth/pull/17938) Studio: train a local dataset folder on its train split, not every file
- [#17932](https://github.com/unslothai/unsloth/pull/17932) Ring context parallel: pin flash in fp16 / bf16 (torch's ringed efficient attention gives wrong dq / dk)
- [#17930](https://github.com/unslothai/unsloth/pull/17930) Context parallel: Gemma-4 vision / audio towers no longer refuse the text route
- [#17929](https://github.com/unslothai/unsloth/pull/17929) Context parallel: no recompile per sequence length on the Ulysses generic path
- [#17833](https://github.com/unslothai/unsloth/pull/17833) Studio: add inference only API keys
- [#17944](https://github.com/unslothai/unsloth/pull/17944) Chat UI gate: open the model picker once the selector names the loaded model (Windows race)
- [#17921](https://github.com/unslothai/unsloth/pull/17921) Warn once when gradient accumulation falls back to a mean of micro-batch means
- [#17803](https://github.com/unslothai/unsloth/pull/17803) Studio: do not size a SYCL llama-server from nvidia-smi / amd-smi VRAM
- [#17834](https://github.com/unslothai/unsloth/pull/17834) Studio: make multi-speaker speech findable on the Text to Speech page
- [#17920](https://github.com/unslothai/unsloth/pull/17920) GKD: pass a multimodal processor's tokenizer (Qwen3.5 / 3.6, Gemma 3 / 4 crashed)
- [#17935](https://github.com/unslothai/unsloth/pull/17935) Studio: smaller greeting sloth, greeting a little higher above the composer
- [#17910](https://github.com/unslothai/unsloth/pull/17910) Packed SFT rows: keep documents apart on Qwen2-VL / 2.5-VL and remote-code models
- [#17914](https://github.com/unslothai/unsloth/pull/17914) Block compile: reuse the trial forward's graph (halves Gemma-4 warmup compile)
- [#17923](https://github.com/unslothai/unsloth/pull/17923) Studio: new icon for the customize menu items, and a Customize profile menu entry
- [#17924](https://github.com/unslothai/unsloth/pull/17924) FSDP2 native units test: count the frozen per-layer table #17888 keeps whole (fsdp2-native red on main)
- [#17922](https://github.com/unslothai/unsloth/pull/17922) test_packed_block_compile: gate the CUDA tests on has_real_cuda() (skip-guard lint red on main)
- [#17912](https://github.com/unslothai/unsloth/pull/17912) Studio: LoRA training for FLUX.3 Klein, runs on Klein or Klein Base
- [#17810](https://github.com/unslothai/unsloth/pull/17810) SentenceTransformer fast encoder: pass the other LoRA options to LoraConfig
- [#17813](https://github.com/unslothai/unsloth/pull/17813) TextPreprocessor.add_structure_tokens: a fence opens at the start of its line
- [#17884](https://github.com/unslothai/unsloth/pull/17884) SFT: pack text datasets by default on epoch runs
- [#17917](https://github.com/unslothai/unsloth/pull/17917) Studio H3-Image edit: hide the Match Image 1 size picker it ignores, fix the size hint
- [#17814](https://github.com/unslothai/unsloth/pull/17814) Ebook text: drop ruby readings written directly in an <rtc>
- [#17916](https://github.com/unslothai/unsloth/pull/17916) Studio: slightly wider password letter spacing and a smaller login error
- [#17911](https://github.com/unslothai/unsloth/pull/17911) Tensor parallel: allow DeepSeek-V4.1 latent-query attention sinks
- [#17915](https://github.com/unslothai/unsloth/pull/17915) Fused head route tests: give the TRL kernel stand-in a forward (studio shard red after #17897)
- [#17898](https://github.com/unslothai/unsloth/pull/17898) GGUF: export GPT-OSS with an expert LoRA from the 16-bit merge instead of dropping the adapter
- [#17909](https://github.com/unslothai/unsloth/pull/17909) Studio images: return the remaining LoRA selection refusals as 400 on /v1
- [#17902](https://github.com/unslothai/unsloth/pull/17902) Studio UI gates: expand the collapsed model picker and find the renamed Context field
- [#17886](https://github.com/unslothai/unsloth/pull/17886) Tensor parallel DPO with PEFT: no DTensor copy into TRL's ref adapter
- [#17906](https://github.com/unslothai/unsloth/pull/17906) Preference, RLOO and Online DPO trainers: keep the fused chunked heads on Llama / Qwen3 (no silent full-logit fallback)
- [#17883](https://github.com/unslothai/unsloth/pull/17883) Block compile: packed and padding-free rows stay compiled (flash varlen in the graph), Gemma-4 and hybrid packing fixes
- [#17913](https://github.com/unslothai/unsloth/pull/17913) Repo tests (CPU): drop the dead test_t[!p] gloo glob, utf-8 for the MiniMax LoRA sidecar read
- [#17888](https://github.com/unslothai/unsloth/pull/17888) Gemma4 / Gemma3n under DDP and FSDP2: no graph split at DDP buckets, frozen weights out of the start broadcast, frozen per-layer embedding kept whole
- [#17908](https://github.com/unslothai/unsloth/pull/17908) Studio: computer use on Linux opens an app by its program name or the end of its desktop id
- [#17905](https://github.com/unslothai/unsloth/pull/17905) Studio: computer use points on the 0-1000 grid for Qwen3.5+ and Gemma 4 by default
- [#17899](https://github.com/unslothai/unsloth/pull/17899) Studio: keep a load's baked LoRAs on /v1/images/generations
- [#17863](https://github.com/unslothai/unsloth/pull/17863) Studio: LoRA training for MiniMax-H3-Image, and loading the trained LoRA
- [#17897](https://github.com/unslothai/unsloth/pull/17897) Fused LM head adapter: leave a kernel without a readable forward alone (CPU SFT on TRL 1.17+)

#### 🐛 New Issues
- [#18034](https://github.com/unslothai/unsloth/issues/18034) [Bug] macOS XProtect "Malicious Script Blocked" during 2026.11.5 update; setup stops after deps installed 💬3
- [#17918](https://github.com/unslothai/unsloth/issues/17918) [Reddit issue] Issues during inference 💬3
- [#17907](https://github.com/unslothai/unsloth/issues/17907) [Bug] Deep Research Failed in Unsloth Desktop `feature request` `bug` 💬2
- [#18063](https://github.com/unslothai/unsloth/issues/18063) [Bug] Weird Notice that states "Could not sync pinned chats. Try again when connected." + Laggy Interface `feature request` `bug` 💬1
- [#17981](https://github.com/unslothai/unsloth/issues/17981) [Bug] After last lama.cpp update unsloth desktop crashes `feature request` `bug` 💬1
- [#18002](https://github.com/unslothai/unsloth/issues/18002) [Bug] Unsloth v0.1.918 Beta has model loading issues immediately after update and is sluggish `feature request` `bug` 💬1
- [#18005](https://github.com/unslothai/unsloth/issues/18005) Windows ROCm: GPU monitor never shows utilization or temperature (3D-only counter, no sensor source) 💬1
- [#17985](https://github.com/unslothai/unsloth/issues/17985) [Bug] Image generation fails on AMD with black screen `feature request` `bug` 💬1
- [#17931](https://github.com/unslothai/unsloth/issues/17931) Add unit tests for the disk_utils fallback used when unsloth_zoo lacks disk_utils 💬1
- [#17925](https://github.com/unslothai/unsloth/issues/17925) [Bug] CLI test for non-UTF-8 uv cache path fails on macOS (APFS rejects the filename) 💬1
- [#17937](https://github.com/unslothai/unsloth/issues/17937) [Bug] Studio trains on every file in a local dataset folder: val.jsonl is merged into training and sidecar JSON breaks the load 💬1
- [#18013](https://github.com/unslothai/unsloth/issues/18013) [Bug] Browser Issue `feature request` `bug`
- [#18060](https://github.com/unslothai/unsloth/issues/18060) [Feature] Further Customization `feature request`
- [#18058](https://github.com/unslothai/unsloth/issues/18058) [Studio Bug] New Ollama models omitted when legacy manifest contains OCI manifest-reference layer
- [#18057](https://github.com/unslothai/unsloth/issues/18057) fix(desktop): graceful CLI-requested backend exit is logged as a crash
- [#18056](https://github.com/unslothai/unsloth/issues/18056) fix(docs): curl guide lists bash as a built-in tool name but the API selects terminal
- [#18055](https://github.com/unslothai/unsloth/issues/18055) fix(docs): API tool-policy guide describes obsolete defaults and overrides
- [#18054](https://github.com/unslothai/unsloth/issues/18054) fix(macos): shell launcher duplicates Desktop's bundle identifier
- [#18027](https://github.com/unslothai/unsloth/issues/18027) [Bug] datasets cache files in upload folder `feature request` `bug`
- [#18029](https://github.com/unslothai/unsloth/issues/18029) Feature Request: Support for NVIDIA Nemotron-Labs Dory 1.0 4B (looped LM architecture) `feature request`
- [#18016](https://github.com/unslothai/unsloth/issues/18016) ROCm Linux image gen fails at final VAE decode with NaN (head dims 384/512, half-math default) — v0.1.917+; UNSLOTH_VAE_ATTN_HALF_MATH=0 works around it `feature request` `bug`
- [#18001](https://github.com/unslothai/unsloth/issues/18001) [Bug] Incorrect loading into unified memory on Ryzen 8700G & Radeon 780M `feature request` `bug`
- [#17998](https://github.com/unslothai/unsloth/issues/17998) [Feature] Dedicated tab for Managing RAG Database + RAG QoL `feature request`
- [#17970](https://github.com/unslothai/unsloth/issues/17970) [Feature] Auto-enable / disable MCP servers per project / workspace `feature request`
- [#17939](https://github.com/unslothai/unsloth/issues/17939) [Feature] Voice mode `feature request`
- [#17928](https://github.com/unslothai/unsloth/issues/17928) Support for colibri engine `feature request`

#### 🔒 Closed Issues
- [#18034](https://github.com/unslothai/unsloth/issues/18034) [Bug] macOS XProtect "Malicious Script Blocked" during 2026.11.5 update; setup stops after deps installed
- [#17823](https://github.com/unslothai/unsloth/issues/17823) [Reddit issue] Unsloth MCP
- [#17837](https://github.com/unslothai/unsloth/issues/17837) [Bug] "Open links in: Default browser" is ignored and "Run scripts" re-prompts despite "Always allow"
- [#17918](https://github.com/unslothai/unsloth/issues/17918) [Reddit issue] Issues during inference
- [#17907](https://github.com/unslothai/unsloth/issues/17907) [Bug] Deep Research Failed in Unsloth Desktop
- [#17874](https://github.com/unslothai/unsloth/issues/17874) No AMD GPU Detected
- [#17665](https://github.com/unslothai/unsloth/issues/17665) [Feature] Search with "Owner/ModelName"
- [#17931](https://github.com/unslothai/unsloth/issues/17931) Add unit tests for the disk_utils fallback used when unsloth_zoo lacks disk_utils
- [#17925](https://github.com/unslothai/unsloth/issues/17925) [Bug] CLI test for non-UTF-8 uv cache path fails on macOS (APFS rejects the filename)
- [#17937](https://github.com/unslothai/unsloth/issues/17937) [Bug] Studio trains on every file in a local dataset folder: val.jsonl is merged into training and sidecar JSON breaks the load
- [#17822](https://github.com/unslothai/unsloth/issues/17822) [Reddit issue] Multi-speaker TTS and Live turn-based conversation
- [#17819](https://github.com/unslothai/unsloth/issues/17819) [Reddit issue] Remote access to the back-end API calls
- [#17787](https://github.com/unslothai/unsloth/issues/17787) [Studio Bug] Custom SYCL llama.cpp reads nvidia-smi VRAM on multi-GPU, capping context and forcing --no-mmproj-offload
- [#18013](https://github.com/unslothai/unsloth/issues/18013) [Bug] Browser Issue
- [#17877](https://github.com/unslothai/unsloth/issues/17877) [Feature] Studio: optional launchd agent to keep Studio running on macOS CLI installs
- [#17847](https://github.com/unslothai/unsloth/issues/17847) [Feature] Bump the upper version bound of transformers to 5.18

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,191 · **Open issues:** 413 · **Last push:** 1h ago

On November 17, 2026, AIBrix did not release any new versions but saw substantial activity with numerous merged pull requests aimed at improving functionality and fixing bugs. Notable enhancements included the introduction of a feature to expose gateway-local outstanding requests per inference pod (#3482) and a new validation mechanism for ModelClaim fields using an admission webhook (#3478). Significant bug fixes addressed issues such as forwarding vLLM-Omni synchronous video requests (#3462) and clarifying ModelWarmup control-plane exclusion diagnostics (#3429). Among new issues, a notable one was an identified flaky test concerning TRT async prefill failures (#3488) that may impact reliability moving forward. Overall, it was a day focused on refining system performance and reliability rather than introducing major changes.

#### ✅ Merged PRs
- [#3492](https://github.com/vllm-project/aibrix/pull/3492) [CI] Wait for prefill token release in TRT async failure tests
- [#3462](https://github.com/vllm-project/aibrix/pull/3462) [Bug] Forward vLLM-Omni synchronous video requests
- [#3482](https://github.com/vllm-project/aibrix/pull/3482) [Feat] Expose gateway-local outstanding requests per inference pod
- [#3385](https://github.com/vllm-project/aibrix/pull/3385) [Bug] Reopen a lost KV event replay socket, and fail the gap open if it stays lost
- [#3197](https://github.com/vllm-project/aibrix/pull/3197) [Feat] Pass encoders' ec_transfer_params to the request that consumes them
- [#3383](https://github.com/vllm-project/aibrix/pull/3383) [Bug] Don't hold pod events on the KV event replay in Start and Stop
- [#3416](https://github.com/vllm-project/aibrix/pull/3416) [Bug] Reject non-finite values in LoadEnvFloat
- [#3455](https://github.com/vllm-project/aibrix/pull/3455) [Misc] Parse only the metric families the gateway reads from engine scrapes
- [#3467](https://github.com/vllm-project/aibrix/pull/3467) [Feat] Run the inflight saturation filter on the candidate set
- [#3458](https://github.com/vllm-project/aibrix/pull/3458) [Bug] Break multi-strategy score ties by running requests before pod name
- [#3429](https://github.com/vllm-project/aibrix/pull/3429) [Bug] Clarify ModelWarmup control-plane exclusion diagnostics
- [#3459](https://github.com/vllm-project/aibrix/pull/3459) [Bug] Use a uniform load-balance capacity while any candidate is warming up
- [#3464](https://github.com/vllm-project/aibrix/pull/3464) [Bug] Report the auto-selected config profile on the model RPS 429
- [#3487](https://github.com/vllm-project/aibrix/pull/3487) [Bug] Do not count a headers-only success as a cancelled request
- [#3478](https://github.com/vllm-project/aibrix/pull/3478) [Feat] Validate ModelClaim fields with an admission webhook

#### 🐛 New Issues
- [#3488](https://github.com/vllm-project/aibrix/issues/3488) flaky test: TestTRTAsyncPrefillFailures/transport reads the token load before prefillDone has released it `area/gateway` `triage/accepted` `kind/misc` `area/cicd` 💬5
- [#3490](https://github.com/vllm-project/aibrix/issues/3490) [Feature]: Support SGLang in KV event sync `area/gateway` `triage/accepted` `kind/feature` `area/testing` 💬1
- [#3489](https://github.com/vllm-project/aibrix/issues/3489) Improve MDS batch stress observability with unified offline and dashboard telemetry `triage/accepted` `area/batch` 💬1
- [#3485](https://github.com/vllm-project/aibrix/issues/3485) Gateway HTTPRoute lookups ignore POD_NAMESPACE and always use aibrix-system `kind/bug` `area/gateway` `bug` `triage` 💬1

#### 🔒 Closed Issues
- [#3451](https://github.com/vllm-project/aibrix/issues/3451) [Bug] Config profiles share one requestsPerSecond counter, so one profile's traffic uses up another's limit
- [#3479](https://github.com/vllm-project/aibrix/issues/3479) [Feature]: Expose gateway-local outstanding requests per inference pod

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 6,489 · **Open issues:** 643 · **Last push:** 3h ago

On November 17, 2026, there were no new releases for Semantic Router, but several important updates were made through merged pull requests. Notably, PR #5170 addressed a bug that eliminated the unnecessary echoing of server paths and internal errors from the ToolsDBHandler, while PR #6412 fixed an issue that prevented the reporting of reasoning effort for models without a reasoning family. The day also saw the introduction of several new feature requests, with the most compelling being #6754, which proposes naming agent runs by their session title alongside more readable model names. Other prominent issues include feature requests aimed at enhancing the routing capabilities based on agent roles and enforcing spend budgets for agent runs.

#### ✅ Merged PRs
- [#5170](https://github.com/vllm-project/semantic-router/pull/5170) [Bug] Stop echoing server paths and internal errors from ToolsDBHandler
- [#6412](https://github.com/vllm-project/semantic-router/pull/6412) [Bug] Report no reasoning effort for a model without a reasoning family

#### 🐛 New Issues
- [#6754](https://github.com/vllm-project/semantic-router/issues/6754) [Feature] Name agent runs by their session title and show readable model names 💬2
- [#6750](https://github.com/vllm-project/semantic-router/issues/6750) [Feature] Route and block requests by agent role, subagent type and request class 💬1
- [#6746](https://github.com/vllm-project/semantic-router/issues/6746) [Feature] Show an agent run as one tree across Replay, traces and Insights 💬1
- [#6744](https://github.com/vllm-project/semantic-router/issues/6744) [Feature] Enforce spend budgets per agent run and per user window 💬1
- [#6742](https://github.com/vllm-project/semantic-router/issues/6742) [Feature] Decide protected model switches from cache receipts and cache prices 💬1
- [#6740](https://github.com/vllm-project/semantic-router/issues/6740) [Feature] Let Claude Code and Codex hand work to each other on their own logins 💬1
- [#6738](https://github.com/vllm-project/semantic-router/issues/6738) [Bug] The Dashboard cannot read a config with a global cost_baseline_model 💬1
- [#6736](https://github.com/vllm-project/semantic-router/issues/6736) [Bug] A Write role user can collect Router environment variables, and saves loosen the config mode 💬1
- [#6734](https://github.com/vllm-project/semantic-router/issues/6734) [Bug] vllm-sr usage and Replay miscount and leave Looper requests unpriced 💬1
- [#6732](https://github.com/vllm-project/semantic-router/issues/6732) [Bug] connect sessions, harness checks and undo misreport or change user files 💬1
- [#6730](https://github.com/vllm-project/semantic-router/issues/6730) [Bug] Router Replay misses refusals after routing and records failed answers as aborts 💬1
- [#6728](https://github.com/vllm-project/semantic-router/issues/6728) [Bug] The Responses API answers 503 on a config that names no store 💬1
- [#6785](https://github.com/vllm-project/semantic-router/issues/6785) MemoryStore.GetConversationChain logs while holding the store read lock, stalling every writer `needs-acceptance`
- [#6776](https://github.com/vllm-project/semantic-router/issues/6776) [Bug] system_prompt replace keeps a Messages client's system message inside messages `needs-acceptance` `wg/mom-routing`
- [#6772](https://github.com/vllm-project/semantic-router/issues/6772) [Feature] Choose per request across model and reasoning-effort candidates with CONCUR-style estimates `enhancement` `needs-acceptance` `wg/mom-routing`
- [#6768](https://github.com/vllm-project/semantic-router/issues/6768) [Bug] `config apply` on a `--minimal` stack drops serve's tracing-off projection, so every change is refused as a tracing change `bug` `needs-acceptance` `wg/developer-experience-ecosystem`
- [#6748](https://github.com/vllm-project/semantic-router/issues/6748) [Refactor] Decide whether to retire h2c Upgrade support `enhancement` `needs-acceptance` `wg/data-plane-networking`

#### 🔒 Closed Issues
- [#6340](https://github.com/vllm-project/semantic-router/issues/6340) [Bug] Windowed guard scans drop image and video inputs
- [#5169](https://github.com/vllm-project/semantic-router/issues/5169) [Bug] Stop echoing server filesystem paths and parse errors from ToolsDBHandler
- [#6150](https://github.com/vllm-project/semantic-router/issues/6150) [Bug] Preserve escaped path segments when appending connector operation paths
- [#6126](https://github.com/vllm-project/semantic-router/issues/6126) [Bug] Hybrid cache rebuilds the whole HNSW index on every write once it's full
- [#5141](https://github.com/vllm-project/semantic-router/issues/5141) [Feature] Add machine-readable Decision 3 quantized-package qualification records
- [#5399](https://github.com/vllm-project/semantic-router/issues/5399) [Feature] Document the recommended Decision 3.0 CUDA performance path on NVIDIA Ampere (A100/A800)
- [#6754](https://github.com/vllm-project/semantic-router/issues/6754) [Feature] Name agent runs by their session title and show readable model names
- [#6610](https://github.com/vllm-project/semantic-router/issues/6610) [Bug] h2c Upgrade buffers bodies before gateway limits and authentication
- [#6750](https://github.com/vllm-project/semantic-router/issues/6750) [Feature] Route and block requests by agent role, subagent type and request class
- [#6746](https://github.com/vllm-project/semantic-router/issues/6746) [Feature] Show an agent run as one tree across Replay, traces and Insights
- [#6744](https://github.com/vllm-project/semantic-router/issues/6744) [Feature] Enforce spend budgets per agent run and per user window
- [#6742](https://github.com/vllm-project/semantic-router/issues/6742) [Feature] Decide protected model switches from cache receipts and cache prices
- [#6740](https://github.com/vllm-project/semantic-router/issues/6740) [Feature] Let Claude Code and Codex hand work to each other on their own logins
- [#6738](https://github.com/vllm-project/semantic-router/issues/6738) [Bug] The Dashboard cannot read a config with a global cost_baseline_model
- [#6736](https://github.com/vllm-project/semantic-router/issues/6736) [Bug] A Write role user can collect Router environment variables, and saves loosen the config mode
- [#6734](https://github.com/vllm-project/semantic-router/issues/6734) [Bug] vllm-sr usage and Replay miscount and leave Looper requests unpriced
- [#6732](https://github.com/vllm-project/semantic-router/issues/6732) [Bug] connect sessions, harness checks and undo misreport or change user files
- [#6730](https://github.com/vllm-project/semantic-router/issues/6730) [Bug] Router Replay misses refusals after routing and records failed answers as aborts
- [#6728](https://github.com/vllm-project/semantic-router/issues/6728) [Bug] The Responses API answers 503 on a config that names no store

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*