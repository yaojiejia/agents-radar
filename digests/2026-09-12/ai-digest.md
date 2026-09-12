# 📡 AI Ecosystem Digest — 2026-09-12

> Generated 2026-09-12 00:56 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 144,784 | 29 | 1 | 0 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 123,420 | 21 | 4 | 48 | 6 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 106,927 | 0 | 0 | 2 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,163 | 14 | 1 | 0 | 1 |
| [OpenCode](https://github.com/anomalyco/opencode) | 206,767 | 29 | 3 | 5 | 0 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 27,777 | 22 | 14 | 4 | 1 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 389,459 | 296 | 169 | 210 | 1 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 244,611 | 15 | 15 | 0 | 1 |
| [vLLM](https://github.com/vllm-project/vllm) | 91,525 | 28 | 14 | 43 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 35,829 | 17 | 10 | 61 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 127,896 | 23 | 20 | 16 | 8 |
| [Ollama](https://github.com/ollama/ollama) | 180,700 | 8 | 2 | 2 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 58,537 | 22 | 9 | 60 | 1 |
| [Unsloth](https://github.com/unslothai/unsloth) | 76,039 | 25 | 2 | 10 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,083 | 1 | 0 | 3 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 5,741 | 16 | 12 | 4 | 0 |

---

## ✨ Highlights

- **Claude Code** released version [v2.1.269](https://github.com/anthropics/claude-code/releases/tag/v2.1.269).  
- **OpenAI Codex** made several new releases including [rust-v0.155.0-alpha.3.10](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.3.10).  
- A significant new issue was reported in **OpenClaw** regarding npm update failures, attracting attention with [12 comments](https://github.com/openclaw/openclaw/issues/144712).  
- **Gemini CLI** merged notable PRs addressing sandbox security and prompt injection issues.  
- **llama.cpp** captured attention with a critical evaluation bug leading to OpenVINO crashes, accumulating [6 comments](https://github.com/ggml-org/llama.cpp/issues/28726).

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 144,784 · **Open issues:** 12,515 · **Last push:** 5h ago

On September 12, 2026, Claude Code released version v2.1.269, which introduced the new `claude plugin eval` feature for running a plugin's evaluation suite and receiving scored, reproducible results in JSON and HTML formats. Additionally, the update added an `/output-style [name]` command that allows users to list and switch output styles, enhancing usability across different session types. Although no pull requests were merged, several new issues were reported, including a significant bug (#93507) affecting the Cowork macOS sandbox VM that has lost network routing capabilities—a regression identified since September 10. This growing list of issues highlights ongoing challenges, particularly regarding session management and system permissions.

#### 🚀 New Releases
- [v2.1.269](https://github.com/anthropics/claude-code/releases/tag/v2.1.269) v2.1.269

#### 🐛 New Issues
- [#93507](https://github.com/anthropics/claude-code/issues/93507) [BUG] Cowork macOS: local sandbox VM starts with NO network route (only loopback) and cloud egress proxy returns 403 for every domain, despite "Allow network egress: All domains" — regression since 2026-09-10 ~23:15 UTC `bug` `has repro` `platform:macos` `area:cowork` 💬9
- [#93667](https://github.com/anthropics/claude-code/issues/93667) Add setting to keep IDE selection indicator in footer instead of inline prompt `enhancement` `area:ide` `platform:vscode` `area:statusline` 💬3
- [#93707](https://github.com/anthropics/claude-code/issues/93707) Remote machine SSH connection fails with "No route to host" due to TCC-disclaimed subprocess lacking Local Network permission `bug` `has repro` `platform:macos` `area:networking` 💬2
- [#93748](https://github.com/anthropics/claude-code/issues/93748) Skill/command documentation examples using `!`cmd`` syntax are live-executed on load `bug` `area:security` `area:skills` 💬1
- [#93679](https://github.com/anthropics/claude-code/issues/93679) [BUG] Design window renderer grows unbounded during generation and is killed at 2-4GB (macOS, Apple Silicon) `bug` `platform:macos` `perf:memory` `area:desktop` 💬1
- [#93743](https://github.com/anthropics/claude-code/issues/93743) Project memory/session storage collides across different projects due to non-ASCII path slug encoding `bug` `platform:windows` `area:core` 💬1
- [#93722](https://github.com/anthropics/claude-code/issues/93722) Desktop app: worktree sessions reload every claude.ai connector; per-project disable list does not follow worktrees and deniedMcpServers cannot suppress app-injected connectors `bug` `has repro` `platform:macos` `area:mcp` 💬1
- [#93738](https://github.com/anthropics/claude-code/issues/93738) [Bug] Session resume fails with partial or full session ID after stop command `bug` `platform:linux` `area:cli` 💬1
- [#93607](https://github.com/anthropics/claude-code/issues/93607) [BUG] Bash tool (Linux): pkill -f / pgrep -f match the tool's own bash -c … eval wrapper (exit 144, phantom PIDs); 2.1.214 guard covers only the CLI process `bug` `has repro` `platform:linux` `area:bash` 💬1
- [#93750](https://github.com/anthropics/claude-code/issues/93750) [BUG/UX] Accepting the in-app "connect GitHub" recommendation made cloud the default session type, silently removing local filesystem and hardware access
- [#93749](https://github.com/anthropics/claude-code/issues/93749) [BUG] I[BUG] Fabricated user turn + leaked system-reminder block inside assistant message (desktop app) — same as #81855 / #79293, still reproduces `bug` `duplicate` `platform:macos` `area:model`
- [#93747](https://github.com/anthropics/claude-code/issues/93747) [BUG] Desktop app can't access Documents folder despite TCC grant — fragmented/duplicate app identities in Files & Folders `bug` `platform:macos` `area:permissions` `area:desktop`
- [#93746](https://github.com/anthropics/claude-code/issues/93746) [BUG] enableArtifact: false also disables the scratchpad directory `bug` `has repro` `area:core`
- [#93655](https://github.com/anthropics/claude-code/issues/93655) Browser pane per-action origin permission prompt has no "Allow always" option, ignores settings.json/bypassPermissions `duplicate` `enhancement` `platform:windows` `area:permissions`
- [#93687](https://github.com/anthropics/claude-code/issues/93687) [BUG] Desktop Scheduled Tasks catch-up ignores day-of-week/date cron fields, fires on wrong days `bug` `has repro` `platform:windows` `area:desktop`
- [#93745](https://github.com/anthropics/claude-code/issues/93745) [BUG] Stop hook blocks and bills a full turn when a background agent is mid-write; no way to distinguish in-progress work from abandoned work `bug` `area:cost` `area:hooks` `area:agents`
- [#93744](https://github.com/anthropics/claude-code/issues/93744) /goal: Stop condition evaluator cannot see the instruction passed via /goal, loops until it declares itself unachievable `bug` `has repro` `platform:macos` `area:core`
- [#93742](https://github.com/anthropics/claude-code/issues/93742) /model save-as-default rewrites all of settings.json from a stale session snapshot, silently reverting hooks `bug` `has repro` `platform:linux` `area:core`
- [#93741](https://github.com/anthropics/claude-code/issues/93741) [Feature Request] Make selected line count display position configurable `enhancement` `platform:macos` `area:ide` `area:ui`
- [#93740](https://github.com/anthropics/claude-code/issues/93740) Model questions and then overrides explicit live instruction with generic skill procedure and prints secrets in plain text `bug` `area:model` `area:security` `platform:vscode`
- [#93739](https://github.com/anthropics/claude-code/issues/93739) [Bug] Can Anthropic look at your session transcript to help us improve Claude Code? Not taking the y `bug` `area:tui`
- [#93697](https://github.com/anthropics/claude-code/issues/93697) [BUG] claude.ai connectors show "Connected" but unusable across all Claude products `bug` `platform:windows` `area:mcp` `platform:vscode`
- [#93737](https://github.com/anthropics/claude-code/issues/93737) [Bug] Incorrect keybind documentation in agents view (ctrl+c vs ctrl+x) `bug` `platform:linux` `area:agent-view`
- [#93736](https://github.com/anthropics/claude-code/issues/93736) [Bug] Subagent ignores explicit directive and inherits parent orchestrator role instead of executing assigned task `bug` `platform:windows` `area:agents`
- [#93735](https://github.com/anthropics/claude-code/issues/93735) Project-scope effortLevel in .claude/settings.json is never applied in desktop-app (Code tab) sessions; effective effort varies per session with no settings change `bug` `has repro` `platform:macos` `area:core`
- [#93734](https://github.com/anthropics/claude-code/issues/93734) App UI session list doesn't show sessions created via terminal (`claude --resume`) `enhancement` `platform:windows` `area:desktop`
- [#93733](https://github.com/anthropics/claude-code/issues/93733) [BUG] Agent re-submits a byte-identical rejected tool call 5x in a row while its prose claims the fix was applied `bug` `has repro` `area:model` `platform:vscode`
- [#93732](https://github.com/anthropics/claude-code/issues/93732) [FEATURE] Background compaction: keep the session running while the summary is produced `enhancement` `area:core` `performance`
- [#93731](https://github.com/anthropics/claude-code/issues/93731) [BUG] `/ide` connection banner reflows/displaces in-progress input text `bug` `platform:linux` `area:tui` `area:ide`

#### 🔒 Closed Issues
- [#93748](https://github.com/anthropics/claude-code/issues/93748) Skill/command documentation examples using `!`cmd`` syntax are live-executed on load

### OpenAI Codex (`openai/codex`)

**Stars:** 123,420 · **Open issues:** 16,713 · **Last push:** <1h ago

On September 12, 2026, several releases in the rust alpha series were made, including versions 0.155.0-alpha.3.10, 0.155.0-alpha.3.9, and 0.154.0-alpha.6.2. Key merged pull requests included #44948, which added context snapshots for async questions, and #44942, which clarified the Windows Visual C++ runtime notice for voice packages. Additionally, significant enhancements to TUI functionality were made, such as enabling voice conversations by default (PR #44921) and routing sandbox setup through the app server (PR #44945). Among the new issues, notable attention has been drawn to #44720, related to a persistent "ChatGPT hit a snag" bug that users are encountering.

#### 🚀 New Releases
- [rust-v0.155.0-alpha.3.9](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.3.9) 0.155.0-alpha.3.9
- [rust-v0.155.0-alpha.3.8](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.3.8) 0.155.0-alpha.3.8
- [rust-v0.155.0-alpha.3.7](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.3.7) 0.155.0-alpha.3.7
- [rust-v0.155.0-alpha.3.10](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.3.10) 0.155.0-alpha.3.10
- [rust-v0.155.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.3) 0.155.0-alpha.3
- [rust-v0.154.0-alpha.6.2](https://github.com/openai/codex/releases/tag/rust-v0.154.0-alpha.6.2) 0.154.0-alpha.6.2

#### ✅ Merged PRs
- [#44948](https://github.com/openai/codex/pull/44948) Add context snapshots for async questions and plugin refresh
- [#44946](https://github.com/openai/codex/pull/44946) Retire Friendly and Pragmatic personality selection
- [#44945](https://github.com/openai/codex/pull/44945) Route TUI Windows sandbox setup through the app server
- [#44944](https://github.com/openai/codex/pull/44944) Enforce managed provider requirements on existing app-server threads
- [#44942](https://github.com/openai/codex/pull/44942) Clarify the Windows Visual C++ runtime notice for voice packages
- [#44939](https://github.com/openai/codex/pull/44939) Respect execution hosts in Windows sandbox setup
- [#44938](https://github.com/openai/codex/pull/44938) Add connector auth failure detection without an install URL
- [#44935](https://github.com/openai/codex/pull/44935) Remove personality selection from the TUI
- [#44934](https://github.com/openai/codex/pull/44934) Add scenario snapshots for remote compaction and Code Mode tools
- [#44933](https://github.com/openai/codex/pull/44933) Remove Windows world-writable scans and warnings from the TUI
- [#44932](https://github.com/openai/codex/pull/44932) Unify context snapshots and group requests into windows
- [#44931](https://github.com/openai/codex/pull/44931) Stop setting `YARN_NO_PROXY` in the managed proxy environment
- [#44930](https://github.com/openai/codex/pull/44930) Embed friendly instructions in bundled GPT-5.4 and GPT-5.5
- [#44928](https://github.com/openai/codex/pull/44928) Preserve voice meter history through quiet samples
- [#44925](https://github.com/openai/codex/pull/44925) Accept voice response audio before captions on quiet turns
- [#44924](https://github.com/openai/codex/pull/44924) Refresh the speaker format when restarting voice output
- [#44922](https://github.com/openai/codex/pull/44922) Bundle native voice runtimes in Windows releases
- [#44921](https://github.com/openai/codex/pull/44921) Enable TUI voice conversations by default
- [#44915](https://github.com/openai/codex/pull/44915) Remove the deprecated `thread/rollback` API
- [#44905](https://github.com/openai/codex/pull/44905) Expose disabled plugin settings in the app-server API
- [#44903](https://github.com/openai/codex/pull/44903) Wire up the native Windows MXC helper entry point
- [#44893](https://github.com/openai/codex/pull/44893) Expose available access programs in model discovery
- [#44883](https://github.com/openai/codex/pull/44883) Reject token-budget history notes for unsupported starting models
- [#44879](https://github.com/openai/codex/pull/44879) Fade Astra composer stars and stabilize cursor redraws
- [#44877](https://github.com/openai/codex/pull/44877) Return public key metadata from user verification enrollment
- [#44872](https://github.com/openai/codex/pull/44872) Add managed network policy support to the Windows MXC sandbox
- [#44870](https://github.com/openai/codex/pull/44870) Enable worktrees by default and clarify local daemon errors
- [#44867](https://github.com/openai/codex/pull/44867) Preserve originating budgets for code mode notifications
- [#44866](https://github.com/openai/codex/pull/44866) Preserve originating context for yielded code-mode tool calls
- [#44865](https://github.com/openai/codex/pull/44865) Scope code mode callback delegates to individual executions
- [#44862](https://github.com/openai/codex/pull/44862) Preserve parent cache affinity for ephemeral forks
- [#44857](https://github.com/openai/codex/pull/44857) Add consistent theme-based thread colors across the TUI
- [#44832](https://github.com/openai/codex/pull/44832) Add trusted enterprise MCP auth configuration
- [#44826](https://github.com/openai/codex/pull/44826) Expose advertised MCP server capabilities in status responses
- [#44814](https://github.com/openai/codex/pull/44814) Test approved command execution with managed unified exec disabled
- [#44755](https://github.com/openai/codex/pull/44755) Check folder consent before creating or resuming TUI tasks
- [#44752](https://github.com/openai/codex/pull/44752) Render Markdown in agent overview task details
- [#44749](https://github.com/openai/codex/pull/44749) Preserve voice caption order when replaying TUI history
- [#44747](https://github.com/openai/codex/pull/44747) Update `quinn-proto` and allow the pinned H3 Git source
- [#44746](https://github.com/openai/codex/pull/44746) Check folder trust after resolving the startup destination
- [#44744](https://github.com/openai/codex/pull/44744) Make archive confirmation number shortcuts act immediately
- [#44742](https://github.com/openai/codex/pull/44742) Preserve editor yanks across new sessions and thread switches
- [#44732](https://github.com/openai/codex/pull/44732) Clarify folder trust prompts and add restricted widget support
- [#44714](https://github.com/openai/codex/pull/44714) Bundle Linux voice runtimes and improve audio reliability
- [#44711](https://github.com/openai/codex/pull/44711) Return to the command center after session cancellation or deletion
- [#44701](https://github.com/openai/codex/pull/44701) Add a provider for thread-scoped instructions
- [#44694](https://github.com/openai/codex/pull/44694) Include the Windows sandbox service in release artifacts
- [#44693](https://github.com/openai/codex/pull/44693) Preserve selected profile settings over managed new-thread defaults

#### 🐛 New Issues
- [#44720](https://github.com/openai/codex/issues/44720) ChatGPT hit a snag bug reproduce `bug` `app` `pets` 💬31
- [#44743](https://github.com/openai/codex/issues/44743) macOS app 26.908.31748: blank window when online — renderer throws "r is not a function" (authed-route ↔ app-primary circular import) `bug` `app` 💬8
- [#44824](https://github.com/openai/codex/issues/44824) Second modal window `ChatGPT hit a snag` is shown togehter with main window `bug` `app` 💬6
- [#44783](https://github.com/openai/codex/issues/44783) Windows sandbox still fails with CreateProcessAsUserW error 2 on 0.154.0 after successful reprovision `bug` `windows-os` `sandbox` `CLI` 💬4
- [#44703](https://github.com/openai/codex/issues/44703) Codex usage decreases while idle/relaunching on two separate accounts (Pro and Plus) since Sep 9 `bug` `rate-limits` `app` 💬2
- [#44767](https://github.com/openai/codex/issues/44767) Codex CLI 0.154.0 hangs when launched inside tmux. `bug` `TUI` `CLI` 💬2
- [#44728](https://github.com/openai/codex/issues/44728) macOS VoiceOver regression in 0.154.0: repeated output fragments; disabling animations restores usability `bug` `TUI` `CLI` 💬2
- [#44943](https://github.com/openai/codex/issues/44943) [Windows][Browser Use] Taobao blocked by site-safety policy despite explicit Always allow permission `bug` `windows-os` `app` `browser` 💬1
- [#44941](https://github.com/openai/codex/issues/44941) Weekly usage meter showed 25% remaining, then unexpectedly reached the limit `bug` `rate-limits` `app` 💬1
- [#44762](https://github.com/openai/codex/issues/44762) Feature request: enable Codex TUI/CLI remote-control pairing for mobile (Claude Code parity) `enhancement` `CLI` `remote` 💬1
- [#44773](https://github.com/openai/codex/issues/44773) Bug: Summarized file anchors show truncated "..." instead of the file path `bug` `model-behavior` `context` 💬1
- [#44940](https://github.com/openai/codex/issues/44940) Locked use still fails on macOS 26.6.2 after refreshing authorization plug-in to build 1000968 `bug` `app` `computer-use` 💬1
- [#44774](https://github.com/openai/codex/issues/44774) TUI: allow opt-in client environment metadata on app-server turns `enhancement` `CLI` `app-server` 💬1
- [#44868](https://github.com/openai/codex/issues/44868) Codex hijacks terminal mid typing when asking for approval `bug` `sandbox` `TUI` `CLI` 💬1
- [#44937](https://github.com/openai/codex/issues/44937) Very low work efficiency: repeated excuses and self-defense instead of completing tasks `bug` `model-behavior` 💬1
- [#44929](https://github.com/openai/codex/issues/44929) Codex in ChatGPT Android: skill references show SKILL.md and cannot be opened `bug` `skills` 💬1
- [#44727](https://github.com/openai/codex/issues/44727) [Windows Store] Official update manifest advertises 26.908.3777.0 but Store still serves 26.903.9818.0 `bug` `windows-os` `app` 💬1
- [#44950](https://github.com/openai/codex/issues/44950) Remote SSH reports `socket hang up` when remote app-server cannot initialize SQLite state on NFS CODEX_HOME `bug` `app` `connectivity` `app-server`
- [#44949](https://github.com/openai/codex/issues/44949) Codex CLI rejects DOCX attachments with unknown file variant `bug` `windows-os` `CLI` `app-server`
- [#44947](https://github.com/openai/codex/issues/44947) Old Codex chats cannot open after desktop app update `bug` `app` `session`
- [#44936](https://github.com/openai/codex/issues/44936) Potentially dangerous misalignment, definite boundary safety issue - Astra attempted to deceive by obfuscating connection requests after repeated rejections. `bug` `model-behavior` `app`

#### 🔒 Closed Issues
- [#44720](https://github.com/openai/codex/issues/44720) ChatGPT hit a snag bug reproduce
- [#44728](https://github.com/openai/codex/issues/44728) macOS VoiceOver regression in 0.154.0: repeated output fragments; disabling animations restores usability
- [#35910](https://github.com/openai/codex/issues/35910) Codex generates 214-character loose checkpoint refs that exceed Windows path limits
- [#44727](https://github.com/openai/codex/issues/44727) [Windows Store] Official update manifest advertises 26.908.3777.0 but Store still serves 26.903.9818.0

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 106,927 · **Open issues:** 816 · **Last push:** 3h ago

On September 12, 2026, Gemini CLI released version v0.61.0-nightly.20260911.ged2ac40df, introducing improvements captured in the full changelog. Significant merged pull requests included #29214, which enhances filesystem boundaries for better isolation of runtime state, and #29250, a fix in the core that prevents indirect prompt injection by addressing potential vulnerabilities in build file modifications and untrusted flags. No new issues were reported in the last 24 hours, making it a routine day in terms of issue tracking.

#### 🚀 New Releases
- [v0.61.0-nightly.20260911.ged2ac40df](https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0-nightly.20260911.ged2ac40df) Release v0.61.0-nightly.20260911.ged2ac40df

#### ✅ Merged PRs
- [#29214](https://github.com/google-gemini/gemini-cli/pull/29214) fix(sandbox): harden filesystem boundaries and isolate runtime state
- [#29250](https://github.com/google-gemini/gemini-cli/pull/29250) fix(core): prevent indirect prompt injection via build file modifications and untrusted flags

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,163 · **Open issues:** 2,363 · **Last push:** 3h ago

On September 12, 2026, GitHub Copilot CLI released version 1.0.84-5, which introduced session and memory import commands for the semantic JSONL interchange format and improved shell completions. The command-line parsing was transitioned from Commander to a Rust grammar, enhancing error handling and help messaging. While no pull requests were merged, several new issues emerged, including #4824, which reports that the ctrl-t enqueue prompt is not functioning, and #4821, a feature request for supporting the OpenAI Flex Tier in the Copilot CLI. Other noteworthy issues involve installation problems and functionality errors, highlighting ongoing areas for improvement in the CLI's usability.

#### 🚀 New Releases
- [v1.0.84-5](https://github.com/github/copilot-cli/releases/tag/v1.0.84-5) 1.0.84-5

#### 🐛 New Issues
- [#4824](https://github.com/github/copilot-cli/issues/4824) ctrl-t enqueue prompt doesn't work `triage`
- [#4823](https://github.com/github/copilot-cli/issues/4823) Improve readability of /skills list output `triage`
- [#4822](https://github.com/github/copilot-cli/issues/4822) AGENTS.md discovery follows resolved symlinks and walks every ancestor, importing unrelated repos’ instructions `triage`
- [#4821](https://github.com/github/copilot-cli/issues/4821) Feature Request: Support OpenAI Flex Tier in Copilot CLI `triage`
- [#4820](https://github.com/github/copilot-cli/issues/4820) Add an "end of session" hook that can run a process/skill `triage`
- [#4819](https://github.com/github/copilot-cli/issues/4819) Default model choice fails when org policy loads model list after copilot load `triage`
- [#4818](https://github.com/github/copilot-cli/issues/4818) Remote/HTTP MCP servers (e.g. atlassian) are stranded 'failed' after every /clear or session relaunch `triage`
- [#4817](https://github.com/github/copilot-cli/issues/4817) Multiple-choice ask_user silently renders as a free-text prompt when trailing tool-call parameters leak into the preceding string argument `triage`
- [#4816](https://github.com/github/copilot-cli/issues/4816) Installer broke path environment variable. `triage`
- [#4815](https://github.com/github/copilot-cli/issues/4815) Factually incorrect and suggested scripts and files not existent `triage`
- [#4814](https://github.com/github/copilot-cli/issues/4814) Voice mode install fails — 401 Unauthorized on internal Foundry Local NuGet feed `triage`
- [#4813](https://github.com/github/copilot-cli/issues/4813) Support custom status line and context-window usage in the Copilot desktop app `triage`
- [#4812](https://github.com/github/copilot-cli/issues/4812) Feature Request: Argument auto-completion for skills / custom commands `triage`
- [#4811](https://github.com/github/copilot-cli/issues/4811) /new fails to load STDIO MCP and requires /mcp reload `triage`

#### 🔒 Closed Issues
- [#4464](https://github.com/github/copilot-cli/issues/4464) Remote MCP OAuth: silent refresh fails with AADSTS70011 (refresh reuses granted scope mixing `.default` + resource-specific scopes), forcing repeated interactive sign-in

### OpenCode (`anomalyco/opencode`)

**Stars:** 206,767 · **Open issues:** 5,770 · **Last push:** <1h ago

On September 12, 2026, OpenCode saw no new releases, but several important fixes were merged, including updates to the release process by omitting the node CLI from the latest version and ensuring the signing of the V2 Windows CLI artifacts. Documentation was also improved to reflect the use of stable V2 packages. Notably, the new issues logged include a critical failure report (#48552) related to fetching data, which has garnered attention, alongside other issues like OAuth login failures (#48572) and concerns about corrupt output in the TUI (#48520). Overall, while maintenance activities were routine, the ongoing issues indicate areas needing immediate attention and improvement.

#### ✅ Merged PRs
- [#48568](https://github.com/anomalyco/opencode/pull/48568) fix(release): omit node CLI from latest
- [#48576](https://github.com/anomalyco/opencode/pull/48576) docs: use stable V2 packages
- [#48571](https://github.com/anomalyco/opencode/pull/48571) fix(release): use V2 Docker artifact paths
- [#48567](https://github.com/anomalyco/opencode/pull/48567) fix(release): sign primary Windows CLI
- [#48566](https://github.com/anomalyco/opencode/pull/48566) fix(release): sign v2 Windows CLI

#### 🐛 New Issues
- [#48552](https://github.com/anomalyco/opencode/issues/48552) Failed to fetch 💬2
- [#48530](https://github.com/anomalyco/opencode/issues/48530) session.error events are ignored by global sync (stuck busy, no error shown) 💬2
- [#48512](https://github.com/anomalyco/opencode/issues/48512) zen/go gateway: muse-spark-1.3-contributor still 500 on /chat/completions (follow-up to #47349) 💬2
- [#48506](https://github.com/anomalyco/opencode/issues/48506) mando un mensaje y en el chat no sale nada 💬2
- [#48520](https://github.com/anomalyco/opencode/issues/48520) TUI: library console output corrupts alternate screen display 💬2
- [#48578](https://github.com/anomalyco/opencode/issues/48578) "Did you mean" suggests the exact model ID it just rejected 💬1
- [#48572](https://github.com/anomalyco/opencode/issues/48572) Bug: OAuth login fails with {"error":"未找到授权码 💬1
- [#48569](https://github.com/anomalyco/opencode/issues/48569) [FEATURE]: a command to toggle sidebar 💬1
- [#48565](https://github.com/anomalyco/opencode/issues/48565) [DOCS]: Italian docs out of date — hide/fallback non-English versions when stale `needs:compliance` 💬1
- [#48556](https://github.com/anomalyco/opencode/issues/48556) [FEATURE]: Community showcase — Unofficial native Android client for OpenCode 💬1
- [#48553](https://github.com/anomalyco/opencode/issues/48553) [Desktop] v1.18.30: first-launch splash overlay never hides (white screen with pulsing logo, UI works underneath) 💬1
- [#48543](https://github.com/anomalyco/opencode/issues/48543) Compaction persists a summary boundary when the request never returned: no parts, error null, tokens never populated 💬1
- [#48540](https://github.com/anomalyco/opencode/issues/48540) [v2] How to rename a project in the TUI? `2.0` 💬1
- [#48542](https://github.com/anomalyco/opencode/issues/48542) Compaction requests write an Anthropic prompt cache entry that is never read (1.28M cache-write tokens, 0 reads in 7 days) 💬1
- [#48525](https://github.com/anomalyco/opencode/issues/48525) Cannot add same git repo with different branches as separate projects 💬1
- [#48522](https://github.com/anomalyco/opencode/issues/48522) [FEATURE]: Web App - Toggle to show thinking 💬1
- [#48577](https://github.com/anomalyco/opencode/issues/48577) Plugin configured by a non-existent directory path is dropped with zero diagnostics
- [#48573](https://github.com/anomalyco/opencode/issues/48573) tui: nested Mermaid states cause infinite allocation and OOM `2.0`
- [#48563](https://github.com/anomalyco/opencode/issues/48563) [FEATURE]: Make the model and variant labels in the TUI prompt footer clickable
- [#48558](https://github.com/anomalyco/opencode/issues/48558) Cannot update opencode2 on windows in git bash `2.0`
- [#48557](https://github.com/anomalyco/opencode/issues/48557) [FEATURE]: Publish App under Microsoft Store
- [#48555](https://github.com/anomalyco/opencode/issues/48555) Funny bug - agent rejected even if model is recognized
- [#48554](https://github.com/anomalyco/opencode/issues/48554) Desktop 1.18.30 (Windows): layout toggle button needs multiple presses after update
- [#48548](https://github.com/anomalyco/opencode/issues/48548) tui: sidebar missing when viewing a subagent session — no context usage or cost for that session `2.0`
- [#48532](https://github.com/anomalyco/opencode/issues/48532) Permission dock actions overflow in a detached tray on narrow widths
- [#48531](https://github.com/anomalyco/opencode/issues/48531) Workspace terminals are torn down when switching session routes
- [#48529](https://github.com/anomalyco/opencode/issues/48529) V1 follow-up prompts are sent to the project directory instead of the session directory
- [#48528](https://github.com/anomalyco/opencode/issues/48528) Prompt text is lost when the composer store is empty but the DOM editor still holds it
- [#48519](https://github.com/anomalyco/opencode/issues/48519) tui: session.panel hides the sidebar and shrinks the composer `2.0`

#### 🔒 Closed Issues
- [#48552](https://github.com/anomalyco/opencode/issues/48552) Failed to fetch
- [#48512](https://github.com/anomalyco/opencode/issues/48512) zen/go gateway: muse-spark-1.3-contributor still 500 on /chat/completions (follow-up to #47349)
- [#48506](https://github.com/anomalyco/opencode/issues/48506) mando un mensaje y en el chat no sale nada

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 27,777 · **Open issues:** 1,387 · **Last push:** <1h ago

On September 12, 2026, Qwen Code released version v0.23.3-nightly.20260911.aaa6a32aae, which includes significant changes such as the removal of obsolete background response aggregation and message prefix filtering. Key merged features include the enhancement of web-shell to allow continuation of interrupted sessions and improvements to extension skills naming. Noteworthy fixes addressed issues in core responses, maintaining data integrity, and refining CI processes. However, new issues have emerged, with a notable bug (#11667) related to raw request-body prefixes appearing in responses' debug logs, which has drawn attention among the team.

#### 🚀 New Releases
- [v0.23.3-nightly.20260911.aaa6a32aae](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.3-nightly.20260911.aaa6a32aae) Release v0.23.3-nightly.20260911.aaa6a32aae

#### ✅ Merged PRs
- [#11545](https://github.com/QwenLM/qwen-code/pull/11545) feat(web-shell): continue interrupted sessions
- [#10841](https://github.com/QwenLM/qwen-code/pull/10841) feat(skills): extension skills are named by their extension
- [#11567](https://github.com/QwenLM/qwen-code/pull/11567) fix(core): keep Responses reasoning replay data off foreign wires
- [#11417](https://github.com/QwenLM/qwen-code/pull/11417) fix(cli): quiesce the fire-and-forget serve handler across tests

#### 🐛 New Issues
- [#11667](https://github.com/QwenLM/qwen-code/issues/11667) bug(core): Responses debug logs contain raw request-body prefixes `priority/P2` `type/bug` `category/security` `scope/content-generation` 💬3
- [#11610](https://github.com/QwenLM/qwen-code/issues/11610) hooks: align the hook contract with Claude Code (plain-text stdout, stop_hook_active, timeout unit, matchers, common input) `priority/P1` `type/bug` `category/core` `scope/settings` 💬3
- [#11666](https://github.com/QwenLM/qwen-code/issues/11666) bug(telemetry): API request content is exported despite logPrompts=false `priority/P2` `type/bug` `category/telemetry` `scope/data-privacy` 💬3
- [#11665](https://github.com/QwenLM/qwen-code/issues/11665) bug(core): Responses cleanup can break reasoning/tool-call adjacency `priority/P2` `type/bug` `category/core` `scope/content-generation` 💬3
- [#11633](https://github.com/QwenLM/qwen-code/issues/11633) ECS runner fleet is stale: the qwen update failed `type/bug` `scope/ci-cd` 💬3
- [#11682](https://github.com/QwenLM/qwen-code/issues/11682) Track thoughtSignature/encrypted_content telemetry-export policy decision (#11666 second clause) `priority/P3` `category/telemetry` `scope/data-privacy` `type/enhancement` 💬2
- [#11675](https://github.com/QwenLM/qwen-code/issues/11675) hooks: surface legacy millisecond command-hook timeouts at startup `priority/P2` `category/core` `scope/settings` `type/enhancement` 💬2
- [#11673](https://github.com/QwenLM/qwen-code/issues/11673) hooks: Stop-hook consecutive-block cap resets on tool round trips `priority/P2` `type/bug` `category/core` `roadmap/hooks-events` 💬2
- [#11664](https://github.com/QwenLM/qwen-code/issues/11664) Vision bridge times out on medical form screenshots Описание: При обработке скриншотов медицинских форм (Электронная медицинская карта, вкладка «Талон») vision bridge завершается по тайм-ауту (30000ms, 2 попытки). Изображение недоступно для анализа. Окру `status/need-information` `priority/P3` `type/bug` `category/core` 💬2
- [#11657](https://github.com/QwenLM/qwen-code/issues/11657) Fireworks: Qwen3 tool-call continuation fails with 400 due to mirrored messages[].reasoning `priority/P1` `type/bug` `category/core` `scope/content-generation` 💬2
- [#11645](https://github.com/QwenLM/qwen-code/issues/11645) Channel session history should show the exact prompt delivered to the model `priority/P2` `type/feature-request` `category/integration` `scope/session-management` 💬2
- [#11672](https://github.com/QwenLM/qwen-code/issues/11672) Deferred review findings from PR #11086: feat(serve): scope extensions to workspace runtimes 💬1
- [#11680](https://github.com/QwenLM/qwen-code/issues/11680) Main CI failed: E2E Tests on aaa6a32aae4e `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#11678](https://github.com/QwenLM/qwen-code/issues/11678) Main CI failed: Qwen Code CI on 28df8b8a7897 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#11661](https://github.com/QwenLM/qwen-code/issues/11661) Main CI failed: E2E Tests on 91a09e76ae56 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#11660](https://github.com/QwenLM/qwen-code/issues/11660) Main CI failed: E2E Tests on 9969640815cf `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#11648](https://github.com/QwenLM/qwen-code/issues/11648) Main CI failed: E2E Tests on 518f6795f9ed `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#11655](https://github.com/QwenLM/qwen-code/issues/11655) Main CI failed: E2E Tests on 20ecdaf6b2fb `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#11654](https://github.com/QwenLM/qwen-code/issues/11654) Main CI failed: E2E Tests on 782c22bff531 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#11681](https://github.com/QwenLM/qwen-code/issues/11681) Deferred review findings from PR #11625: chore(pnpm): gate pnpm-lock on package-lock and declare hoisted imports
- [#11671](https://github.com/QwenLM/qwen-code/issues/11671) Deferred review findings from PR #11663: fix(cli): keep the OpenTUI expanded confirmation inside the viewport (#11660)
- [#11637](https://github.com/QwenLM/qwen-code/issues/11637) Deferred review findings from PR #11395: fix(acp): preserve caller-owned mode after child reap

#### 🔒 Closed Issues
- [#4218](https://github.com/QwenLM/qwen-code/issues/4218) [Bug Report] MCP Server "filesystem" shows connected on UI, but tools are not available to the model
- [#11511](https://github.com/QwenLM/qwen-code/issues/11511) vscode-ide-companion force-closes the superseded session on navigation, discarding in-flight work
- [#8908](https://github.com/QwenLM/qwen-code/issues/8908) feat(serve): Support standalone sessions without a workspace
- [#11510](https://github.com/QwenLM/qwen-code/issues/11510) ACP disconnect escalation: shutdown grace is smaller than a supported CLI shutdown, and POSIX has no catchable rung
- [#9453](https://github.com/QwenLM/qwen-code/issues/9453) bug(core): model switches can send one provider's reasoning metadata to another provider
- [#11667](https://github.com/QwenLM/qwen-code/issues/11667) bug(core): Responses debug logs contain raw request-body prefixes
- [#11432](https://github.com/QwenLM/qwen-code/issues/11432) fix(vscode/web-shell): localize rewind preflight errors and suppress abort toasts
- [#10103](https://github.com/QwenLM/qwen-code/issues/10103) proposal(channels): Add owner-scoped named sessions for concurrent tasks
- [#11601](https://github.com/QwenLM/qwen-code/issues/11601) bug(core): threshold-gated image reattach replays stale screenshots — model loops on outdated UI state
- [#9408](https://github.com/QwenLM/qwen-code/issues/9408) Extension skills load under flat global names; advertised extension:skill form does not resolve
- [#11326](https://github.com/QwenLM/qwen-code/issues/11326) bug(goal): a stalled-checkpoint stop cannot say which failure stopped it, and no surface shows a failing checkpoint before it does
- [#10557](https://github.com/QwenLM/qwen-code/issues/10557) vscode: closing a web-shell permission diff tab leaves the approval row locked without a re-open path
- [#11645](https://github.com/QwenLM/qwen-code/issues/11645) Channel session history should show the exact prompt delivered to the model
- [#11648](https://github.com/QwenLM/qwen-code/issues/11648) Main CI failed: E2E Tests on 518f6795f9ed

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

**Stars:** 389,459 · **Open issues:** 6,891 · **Last push:** <1h ago

On September 12, 2026, OpenClaw released version 2026.9.4, which introduced significant enhancements such as a rollback feature for failed updates that ensures the previous package and configuration are retained when safe, and a consolidated location for discovering and installing both bundled and ClawHub plugins. Key merged pull requests include a refactor to speed up inline edit previews, alongside important fixes addressing configuration failures and a streamlined UI for environment picking. Notably, a critical issue has been reported regarding update failures due to a retained version-1 handoff lease row that disrupts configuration writing, classified as a release blocker.

#### 🚀 New Releases
- [v2026.9.4](https://github.com/openclaw/openclaw/releases/tag/v2026.9.4) openclaw 2026.9.4

#### ✅ Merged PRs
- [#145411](https://github.com/openclaw/openclaw/pull/145411) refactor(macos): remove unused presentation status work
- [#145437](https://github.com/openclaw/openclaw/pull/145437) fix(macos): observe fast child process exits reliably
- [#145365](https://github.com/openclaw/openclaw/pull/145365) fix: report config failures after saving accurately
- [#145375](https://github.com/openclaw/openclaw/pull/145375) fix: preserve edited watchers through cron recovery
- [#145177](https://github.com/openclaw/openclaw/pull/145177) refactor: reuse the last frontmatter recovery result
- [#144454](https://github.com/openclaw/openclaw/pull/144454) feat(crabbox): add a lease-backed sandbox backend for tool-call isolation
- [#145319](https://github.com/openclaw/openclaw/pull/145319) improve(ui): speed up inline edit previews
- [#145257](https://github.com/openclaw/openclaw/pull/145257) perf(models): reuse provider policies during catalog materialization
- [#144981](https://github.com/openclaw/openclaw/pull/144981) refactor(cli): centralize progress lifetime cleanup
- [#145287](https://github.com/openclaw/openclaw/pull/145287) improve: reduce copying during Anthropic tool schema preparation
- [#145376](https://github.com/openclaw/openclaw/pull/145376) fix(doctor): continue past skipped legacy audit-log recovery instead of stopping as a refusal
- [#145431](https://github.com/openclaw/openclaw/pull/145431) fix(ci): rebalance config-cli test roots into state-logging
- [#145044](https://github.com/openclaw/openclaw/pull/145044) fix: unattended update repair fails on newer candidate state
- [#145407](https://github.com/openclaw/openclaw/pull/145407) refactor(tests): reuse runtime spies in Signal SSE tests
- [#145183](https://github.com/openclaw/openclaw/pull/145183) improve(ui): simplify environment picker and cloud configuration
- [#145421](https://github.com/openclaw/openclaw/pull/145421) fix: stabilize native relay deadline test
- [#145316](https://github.com/openclaw/openclaw/pull/145316) improve(chat): show how each provider is signed in inside the model picker
- [#145300](https://github.com/openclaw/openclaw/pull/145300) fix(update): dev updates can mix checkouts and accept timed-out checks
- [#145200](https://github.com/openclaw/openclaw/pull/145200) refactor: derive status report inputs from table helpers
- [#145364](https://github.com/openclaw/openclaw/pull/145364) perf(agents): skip preparing discarded terminal answers
- [#145406](https://github.com/openclaw/openclaw/pull/145406) test: drain interrupted speech requests before fixture reset
- [#145389](https://github.com/openclaw/openclaw/pull/145389) refactor(cli): share Discord admin command registration
- [#145404](https://github.com/openclaw/openclaw/pull/145404) test(outbound): avoid repeated channel resolution test imports
- [#145186](https://github.com/openclaw/openclaw/pull/145186) refactor(system-agent): share setup planner JSON extraction
- [#145172](https://github.com/openclaw/openclaw/pull/145172) feat(sessions): automatically archive older transcripts
- [#145399](https://github.com/openclaw/openclaw/pull/145399) refactor(comfy): reuse guarded JSON test responses
- [#145168](https://github.com/openclaw/openclaw/pull/145168) fix(delivery): join pending queue reads before shutdown
- [#145327](https://github.com/openclaw/openclaw/pull/145327) fix: attribute Codex usage to OpenClaw tasks
- [#145387](https://github.com/openclaw/openclaw/pull/145387) refactor(tests): reuse field assertions in devices CLI tests
- [#145383](https://github.com/openclaw/openclaw/pull/145383) refactor(bonjour): simplify advertiser test fixtures
- [#145136](https://github.com/openclaw/openclaw/pull/145136) fix(doctor): preserve consumers of renamed auth profiles
- [#129157](https://github.com/openclaw/openclaw/pull/129157) fix(ui): show nested tool activity and failure details
- [#145367](https://github.com/openclaw/openclaw/pull/145367) fix(meetings): make saved notes readable and searchable
- [#145359](https://github.com/openclaw/openclaw/pull/145359) refactor(secrets): share static auth-profile secret collection
- [#145193](https://github.com/openclaw/openclaw/pull/145193) fix(update): report unsupported install layouts as a recorded non-outcome instead of not-git-install failures
- [#145347](https://github.com/openclaw/openclaw/pull/145347) fix(ui): recover session links interrupted by reconnect
- [#145351](https://github.com/openclaw/openclaw/pull/145351) fix(computer): honor capture-free CUA window observations
- [#145366](https://github.com/openclaw/openclaw/pull/145366) fix(ci): resolve performance targets with split config schemas
- [#145354](https://github.com/openclaw/openclaw/pull/145354) refactor(agents): remove retired session statistics method
- [#145322](https://github.com/openclaw/openclaw/pull/145322) fix: update triage misses incompatible systemd shutdown settings
- [#145334](https://github.com/openclaw/openclaw/pull/145334) perf: defer migration runtimes during Doctor config repair
- [#145360](https://github.com/openclaw/openclaw/pull/145360) fix(state): retain read-only snapshots until native cleanup succeeds
- [#145361](https://github.com/openclaw/openclaw/pull/145361) refactor(agents): share media failure cleanup
- [#145243](https://github.com/openclaw/openclaw/pull/145243) test: avoid repeated worker builds in cache checks
- [#144155](https://github.com/openclaw/openclaw/pull/144155) fix(update): preserve compatible state when switching to npm stable
- [#144252](https://github.com/openclaw/openclaw/pull/144252) refactor: keep plugin work and cleanup owned during retirement
- [#145212](https://github.com/openclaw/openclaw/pull/145212) perf: reduce cold imports during provider discovery
- [#145368](https://github.com/openclaw/openclaw/pull/145368) test: share installer git reference fixtures
- [#145374](https://github.com/openclaw/openclaw/pull/145374) fix: isolate loader tests that simulate missing native hooks
- [#145333](https://github.com/openclaw/openclaw/pull/145333) fix(macos): stop dashboard reloads after port ownership rejection
- [#145337](https://github.com/openclaw/openclaw/pull/145337) fix(ui): show Gateway connection actions only when needed
- [#145342](https://github.com/openclaw/openclaw/pull/145342) fix(update): keep the candidate canary off the live Gateway's configured listener ports
- [#145345](https://github.com/openclaw/openclaw/pull/145345) fix(channels): hide intermediate tool failures in quiet progress
- [#145277](https://github.com/openclaw/openclaw/pull/145277) perf(anthropic): limit MIME sniff decoding to a canonical prefix
- [#144982](https://github.com/openclaw/openclaw/pull/144982) refactor(logbook): run SQLite operations in owned workers
- [#145273](https://github.com/openclaw/openclaw/pull/145273) refactor(docs-i18n): remove duplicate translation fixture owners
- [#145350](https://github.com/openclaw/openclaw/pull/145350) refactor(tests): reuse runtime fixtures in backup tests
- [#145275](https://github.com/openclaw/openclaw/pull/145275) perf(ui): reuse browser tab selection within each pane render
- [#145341](https://github.com/openclaw/openclaw/pull/145341) feat(ui): move the Mac app Gateway picker into the sidebar footer
- [#145089](https://github.com/openclaw/openclaw/pull/145089) fix(models): keep provider facts fresh across clients
- [#145331](https://github.com/openclaw/openclaw/pull/145331) fix(workers): avoid repeated checkpoint cleanup during startup
- [#144262](https://github.com/openclaw/openclaw/pull/144262) docs(wechat): document pairing limitations in plugin 2.4.8
- [#145352](https://github.com/openclaw/openclaw/pull/145352) fix(computer): preserve CUA input evidence and scope guidance
- [#145279](https://github.com/openclaw/openclaw/pull/145279) perf(cli): reuse command metadata across completion cache writes
- [#145268](https://github.com/openclaw/openclaw/pull/145268) refactor(media): remove test-only cache reset hooks
- [#145226](https://github.com/openclaw/openclaw/pull/145226) perf(plugins): avoid allocating bundled-directory cache keys
- [#145346](https://github.com/openclaw/openclaw/pull/145346) fix(agents): keep internal workers out of persistent sidebar sessions
- [#145317](https://github.com/openclaw/openclaw/pull/145317) fix(install): never replace or break an existing nvm during installation
- [#145250](https://github.com/openclaw/openclaw/pull/145250) perf(build): reuse static asset discovery during postbuild
- [#145191](https://github.com/openclaw/openclaw/pull/145191) fix(gateway): keep slow control connections online while pings are queued
- [#144844](https://github.com/openclaw/openclaw/pull/144844) fix(ui): preserve useful automatic-build failure diagnostics
- [#145329](https://github.com/openclaw/openclaw/pull/145329) fix(openai): hide unsupported Off reasoning choices
- [#145271](https://github.com/openclaw/openclaw/pull/145271) perf(gateway): avoid unused tool-event copies
- [#142626](https://github.com/openclaw/openclaw/pull/142626) fix(imessage): restore feedback after bridge recovery
- [#145254](https://github.com/openclaw/openclaw/pull/145254) improve: reduce repeated fence searches while splitting replies
- [#145209](https://github.com/openclaw/openclaw/pull/145209) refactor(usage): await database admission and retain cache ownership
- [#145265](https://github.com/openclaw/openclaw/pull/145265) perf(agents): compact transport replay messages in place
- [#145207](https://github.com/openclaw/openclaw/pull/145207) refactor(memory): own source indexing on its database
- [#145314](https://github.com/openclaw/openclaw/pull/145314) refactor(policy): reuse diagnostic finding construction
- [#145332](https://github.com/openclaw/openclaw/pull/145332) fix(clawrouter): avoid repeated provider names in model labels
- [#145259](https://github.com/openclaw/openclaw/pull/145259) refactor(tests): share nested Git environment setup
- [#145328](https://github.com/openclaw/openclaw/pull/145328) fix: show loading feedback for Gateway host stats
- [#145320](https://github.com/openclaw/openclaw/pull/145320) fix(update): recover an unusable handoff store instead of refusing it
- [#145326](https://github.com/openclaw/openclaw/pull/145326) refactor: reuse Mattermost monitor test setup
- [#145315](https://github.com/openclaw/openclaw/pull/145315) refactor(tests): reuse storage fixture in update report tests
- [#145324](https://github.com/openclaw/openclaw/pull/145324) refactor(acp): share labeled parented-session test fixtures
- [#145323](https://github.com/openclaw/openclaw/pull/145323) chore(ui): refresh control ui locales
- [#145263](https://github.com/openclaw/openclaw/pull/145263) perf(tailscale): select primary addresses without unused collections
- [#145261](https://github.com/openclaw/openclaw/pull/145261) perf(matrix): reuse spoiler source analysis during formatting
- [#145284](https://github.com/openclaw/openclaw/pull/145284) fix: recover orphan task deliveries during Doctor repair
- [#145311](https://github.com/openclaw/openclaw/pull/145311) chore(i18n): refresh native locales
- [#145238](https://github.com/openclaw/openclaw/pull/145238) perf(ui): reuse file reads across memory search matches
- [#145220](https://github.com/openclaw/openclaw/pull/145220) fix(doctor): doctor --fix leaves systemd-user gateway stopped after repair
- [#145236](https://github.com/openclaw/openclaw/pull/145236) fix(ui): release retired Automation page state
- [#145302](https://github.com/openclaw/openclaw/pull/145302) fix(workers): reduce prepared repository startup delay
- [#145310](https://github.com/openclaw/openclaw/pull/145310) test: reuse marketplace archive manifest fixtures
- [#145251](https://github.com/openclaw/openclaw/pull/145251) test: reuse compiled modules in native update fixtures
- [#145304](https://github.com/openclaw/openclaw/pull/145304) refactor(tests): share sidebar narration initialization
- [#145303](https://github.com/openclaw/openclaw/pull/145303) fix(ui): preserve plugin URLs on reload
- [#145234](https://github.com/openclaw/openclaw/pull/145234) refactor(tlon): remove unused private media writer
- [#142497](https://github.com/openclaw/openclaw/pull/142497) fix: doctor reports a failed restart while the gateway is still binding
- [#145112](https://github.com/openclaw/openclaw/pull/145112) improve(chat): declutter the model picker
- [#145306](https://github.com/openclaw/openclaw/pull/145306) docs(ui): add stress-test galleries with per-example feedback
- [#145231](https://github.com/openclaw/openclaw/pull/145231) perf(cron): reuse the time-zone formatter within each parse
- [#145297](https://github.com/openclaw/openclaw/pull/145297) improve(ui): use the gear icon for Agent settings in the sidebar agent menu
- [#145180](https://github.com/openclaw/openclaw/pull/145180) fix(state): retain avatar database identity across fetch
- [#145124](https://github.com/openclaw/openclaw/pull/145124) chore(deps): refresh seven-day-cooled npm dependencies
- [#93265](https://github.com/openclaw/openclaw/pull/93265) feat(channels): show labels and official docs in JSON listings
- [#145286](https://github.com/openclaw/openclaw/pull/145286) refactor(browser): simplify Chrome MCP test gates
- [#145030](https://github.com/openclaw/openclaw/pull/145030) refactor(sqlite): support existing-only worker acquisition
- [#145283](https://github.com/openclaw/openclaw/pull/145283) refactor: reuse ACPX lifecycle test latches
- [#145175](https://github.com/openclaw/openclaw/pull/145175) perf(skills): avoid errors for missing Unix binary candidates
- [#145269](https://github.com/openclaw/openclaw/pull/145269) refactor(tests): share UI command field assertions
- [#145281](https://github.com/openclaw/openclaw/pull/145281) test: reuse agent-turn defaults with explicit overrides
- [#145038](https://github.com/openclaw/openclaw/pull/145038) feat(macos): run a local Gateway alongside a remote primary
- [#145211](https://github.com/openclaw/openclaw/pull/145211) refactor(qa): finish retiring the standalone Discord artifact path
- [#145109](https://github.com/openclaw/openclaw/pull/145109) fix(crabbox): install 0.56.0 for prepared Daytona workers
- [#145222](https://github.com/openclaw/openclaw/pull/145222) fix: keep terminal retries with matching errors
- [#145164](https://github.com/openclaw/openclaw/pull/145164) refactor(hooks): await policy preparation through relay lifetime
- [#145048](https://github.com/openclaw/openclaw/pull/145048) refactor(state): defer repository database opening until use
- [#145110](https://github.com/openclaw/openclaw/pull/145110) chore(i18n): refresh native locales
- [#145247](https://github.com/openclaw/openclaw/pull/145247) refactor(tests): share fresh compaction quality runtime setup
- [#145062](https://github.com/openclaw/openclaw/pull/145062) improve(ui): keep agent creation in Settings
- [#145240](https://github.com/openclaw/openclaw/pull/145240) fix: keep earlier messages selected during chat refresh
- [#145123](https://github.com/openclaw/openclaw/pull/145123) feat(ui): prefetch GitHub previews for visible chat links
- [#145246](https://github.com/openclaw/openclaw/pull/145246) refactor: reuse empty ACPX session store fixtures
- [#145227](https://github.com/openclaw/openclaw/pull/145227) fix: preserve dashboard HTTP errors when diagnostics fail
- [#144640](https://github.com/openclaw/openclaw/pull/144640) fix(gateway): worker workspace downloads continue after credential revocation
- [#145233](https://github.com/openclaw/openclaw/pull/145233) refactor(tests): cover model auth through image decisions
- [#145239](https://github.com/openclaw/openclaw/pull/145239) refactor: shorten held-upgrade Gateway tests
- [#145105](https://github.com/openclaw/openclaw/pull/145105) fix(codex): preserve refusals when fallback access is denied
- [#145107](https://github.com/openclaw/openclaw/pull/145107) fix(memory): preserve standing intents after prompt hook timeouts
- [#145165](https://github.com/openclaw/openclaw/pull/145165) refactor(node-host): trim unused argv preparation inputs
- [#145210](https://github.com/openclaw/openclaw/pull/145210) fix(browser): warn when response bodies are truncated
- [#145204](https://github.com/openclaw/openclaw/pull/145204) improve: reduce config snapshot work for selected model providers
- [#145147](https://github.com/openclaw/openclaw/pull/145147) fix(webchat): allow ACP binding in dashboard conversations
- [#145159](https://github.com/openclaw/openclaw/pull/145159) refactor(memory): await generation lease cleanup
- [#145084](https://github.com/openclaw/openclaw/pull/145084) fix(doctor): discover historical Workshop workspace setup before migrating its records
- [#144901](https://github.com/openclaw/openclaw/pull/144901) fix(update): let large candidate snapshots finish
- [#145162](https://github.com/openclaw/openclaw/pull/145162) fix(discord): retire resolved Activity launch records
- [#145090](https://github.com/openclaw/openclaw/pull/145090) perf(build): overlap staged SDK compilers within memory capacity
- [#145198](https://github.com/openclaw/openclaw/pull/145198) fix: prepare Bun SQLite before Vitest workers
- [#145163](https://github.com/openclaw/openclaw/pull/145163) refactor(storage): extract connection-owned plugin state queries
- [#145187](https://github.com/openclaw/openclaw/pull/145187) chore(ui): refresh control ui locales
- [#145155](https://github.com/openclaw/openclaw/pull/145155) refactor(terminal): keep note wrapping in one owner
- [#145143](https://github.com/openclaw/openclaw/pull/145143) fix(models): preserve replacement keys during removal
- [#145158](https://github.com/openclaw/openclaw/pull/145158) refactor(plugins): deprecate synchronous keyed storage
- [#145170](https://github.com/openclaw/openclaw/pull/145170) fix: archive sessions with provisioning cloud workers
- [#145153](https://github.com/openclaw/openclaw/pull/145153) fix(ui): hide Stop when a failed worker is already gone
- [#145140](https://github.com/openclaw/openclaw/pull/145140) fix: preserve config edits made during Doctor confirmation
- [#145131](https://github.com/openclaw/openclaw/pull/145131) ci(android): retain existing test timing reports
- [#145078](https://github.com/openclaw/openclaw/pull/145078) ci: avoid duplicate startup corpus runs on main
- [#145151](https://github.com/openclaw/openclaw/pull/145151) perf(skills): skip unused execution-workspace collision indexes
- [#145178](https://github.com/openclaw/openclaw/pull/145178) refactor(tests): share runtime fixtures in status tests
- [#145061](https://github.com/openclaw/openclaw/pull/145061) fix(ui): compact the New Session environment picker
- [#145185](https://github.com/openclaw/openclaw/pull/145185) test: remove unused node approval fixture initializer
- [#144852](https://github.com/openclaw/openclaw/pull/144852) fix(qa): isolate Matrix progress scenario events
- [#144841](https://github.com/openclaw/openclaw/pull/144841) fix(e2e): qualify rich Telegram scenario by source
- [#144833](https://github.com/openclaw/openclaw/pull/144833) fix(e2e): avoid suspicious ClawHub install candidates
- [#145047](https://github.com/openclaw/openclaw/pull/145047) refactor(voice-call): await call persistence and lifecycle work
- [#145173](https://github.com/openclaw/openclaw/pull/145173) fix(matrix): preserve native relations in recovered receipts
- [#144962](https://github.com/openclaw/openclaw/pull/144962) refactor(ai): simplify Responses endpoint policy
- [#144907](https://github.com/openclaw/openclaw/pull/144907) fix(matrix): detach outbound sends from monitor lifetime
- [#144900](https://github.com/openclaw/openclaw/pull/144900) fix(qa): fence Matrix progress scenarios by event
- [#144899](https://github.com/openclaw/openclaw/pull/144899) fix(matrix): detach outbound sends from monitor lifetime
- [#145031](https://github.com/openclaw/openclaw/pull/145031) refactor(transcripts): await reads and retain snapshot ownership
- [#144988](https://github.com/openclaw/openclaw/pull/144988) refactor(agents): separate subagent registration records
- [#145149](https://github.com/openclaw/openclaw/pull/145149) improve: speed up generic streaming commentary updates
- [#144983](https://github.com/openclaw/openclaw/pull/144983) refactor(tasks): separate flow record transformations
- [#145085](https://github.com/openclaw/openclaw/pull/145085) fix(update): recover a handoff store left readable by an interrupted write
- [#145128](https://github.com/openclaw/openclaw/pull/145128) fix(scripts): drop unverified local git identities from squash co-author credit
- [#145146](https://github.com/openclaw/openclaw/pull/145146) refactor: initialize setup wizard mocks once per test
- [#144694](https://github.com/openclaw/openclaw/pull/144694) fix: allow cross-browser steering of active sessions
- [#145046](https://github.com/openclaw/openclaw/pull/145046) fix(sqlite): retain Bun worker library and handle ownership
- [#145045](https://github.com/openclaw/openclaw/pull/145045) fix(update): keep updating core when a plugin target is unavailable
- [#145144](https://github.com/openclaw/openclaw/pull/145144) chore(ui): refresh control ui locales
- [#145139](https://github.com/openclaw/openclaw/pull/145139) improve: speed up search in large model catalogs
- [#145033](https://github.com/openclaw/openclaw/pull/145033) perf(reply): reduce cold imports during heartbeat preflight
- [#145054](https://github.com/openclaw/openclaw/pull/145054) fix(ui): hide empty native CLI catalogs in the sessions sidebar
- [#144957](https://github.com/openclaw/openclaw/pull/144957) refactor(whatsapp): centralize fixed plugin wiring
- [#145130](https://github.com/openclaw/openclaw/pull/145130) refactor(tests): reuse deferred fixtures in plugin lifecycle tests
- [#145135](https://github.com/openclaw/openclaw/pull/145135) refactor(tests): remove unused ACP bootstrap mock default
- [#145129](https://github.com/openclaw/openclaw/pull/145129) fix(sessions): acquire bulk identity locks without unbounded recursion
- [#144674](https://github.com/openclaw/openclaw/pull/144674) refactor(tasks): await fresh owner reads in media and prompts
- [#130647](https://github.com/openclaw/openclaw/pull/130647) fix(subagents): deliver child replies that match the empty placeholder
- [#145118](https://github.com/openclaw/openclaw/pull/145118) fix(gateway): cancel dashboard preparation during shutdown
- [#145106](https://github.com/openclaw/openclaw/pull/145106) refactor(tests): share Workboard Gateway registration fixtures
- [#145122](https://github.com/openclaw/openclaw/pull/145122) fix: hide dismissed snapshot builds when refresh fails
- [#145113](https://github.com/openclaw/openclaw/pull/145113) test(daemon): split install reinstall coverage under max-lines
- [#145125](https://github.com/openclaw/openclaw/pull/145125) refactor(goals): simplify goal state handling
- [#145111](https://github.com/openclaw/openclaw/pull/145111) fix(tasks): explain when completion wins cancellation
- [#145065](https://github.com/openclaw/openclaw/pull/145065) feat(ui): open native CLI sessions in a main-area terminal route
- [#145108](https://github.com/openclaw/openclaw/pull/145108) fix(ui): keep sidebar tab menus visible over an open Browser
- [#145115](https://github.com/openclaw/openclaw/pull/145115) fix: restore core lint for daemon install tests
- [#145102](https://github.com/openclaw/openclaw/pull/145102) fix: preserve project and current task context in visible spawns
- [#145094](https://github.com/openclaw/openclaw/pull/145094) fix(update): accept failed systemd unit state in managed update park and recovery
- [#144700](https://github.com/openclaw/openclaw/pull/144700) fix: keep memory writes and indexing correct under Bun
- [#144226](https://github.com/openclaw/openclaw/pull/144226) fix: keep Mac desktops available and resolve session views directly
- [#145100](https://github.com/openclaw/openclaw/pull/145100) docs(agents): require update-behavior review and best-effort updates
- [#144734](https://github.com/openclaw/openclaw/pull/144734) refactor(slack): preserve SDK types in slash command wiring
- [#145082](https://github.com/openclaw/openclaw/pull/145082) fix(ui): hide owner-filtered catalogs from sidebar peers
- [#145097](https://github.com/openclaw/openclaw/pull/145097) refactor(tests): type runtime mocks through vi.fn generics
- [#145077](https://github.com/openclaw/openclaw/pull/145077) refactor(chat): keep one setup action on empty chats
- [#143905](https://github.com/openclaw/openclaw/pull/143905) fix(update): prevent stale children from changing native services
- [#145064](https://github.com/openclaw/openclaw/pull/145064) fix: keep Node fixtures portable under Bun
- [#145055](https://github.com/openclaw/openclaw/pull/145055) chore(i18n): refresh native locales
- [#144359](https://github.com/openclaw/openclaw/pull/144359) improve: keep baseline maintenance out of unrelated CI tests
- [#145068](https://github.com/openclaw/openclaw/pull/145068) fix: continue cloud provisioning after a Gateway restart
- [#145059](https://github.com/openclaw/openclaw/pull/145059) chore(ui): refresh control ui locales
- [#145040](https://github.com/openclaw/openclaw/pull/145040) fix(macos): show browser sign-in recovery in gateway windows

#### 🐛 New Issues
- [#144712](https://github.com/openclaw/openclaw/issues/144712) [Bug]: npm update fails at "global install swap"; intact rollback reported as "recovery is unverified" `clawsweeper:source-repro` `P0` `issue-rating: 🦞 diamond lobster` `maturity:stable` 💬12
- [#144911](https://github.com/openclaw/openclaw/issues/144911) [Bug]: MCP server init timeout crashes the Gateway — unhandled rejection "service child cleanup identity lost" in child cleanup path `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬7
- [#145266](https://github.com/openclaw/openclaw/issues/145266) [Bug]: Git/dev Doctor refreshes Codex from npm and shadows rebuilt bundled plugin (missing native-hook-relay export) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-live-repro` `impact:message-loss` 💬7
- [#144742](https://github.com/openclaw/openclaw/issues/144742) 2026.9.4 ships without #144208: a retained version-1 handoff lease row fails every config write (release blocker) `bug` `maintainer` `clawsweeper:not-repro-on-main` `P0` 💬7
- [#144581](https://github.com/openclaw/openclaw/issues/144581) Windows: `openclaw update` fails at candidate snapshot with a malformed canary path -> runtime-verification-failed `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬5
- [#145192](https://github.com/openclaw/openclaw/issues/145192) 2026.9.2 → 2026.9.4 managed update fails at candidate-Doctor on a live v1 handoff lease, then rolls back onto 9.4-migrated state (#144742 upgrade path) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:crash-loop` `P0` 💬5
- [#144678](https://github.com/openclaw/openclaw/issues/144678) [Bug]: iOS manual Gateway host schemes silently disable the Connect action `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` `P0` 💬5
- [#144809](https://github.com/openclaw/openclaw/issues/144809) claude-cli: turns longer than RUN_STALE_TAKEOVER_MS lose their entire generated reply ("no active tool authority snapshot"); plus one 42s turn that fails the same way `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬5
- [#145307](https://github.com/openclaw/openclaw/issues/145307) Update failure: global-install-failed (2026.9.3) `P0` `maturity:stable` `impact:ux-release-blocker` 💬4
- [#145020](https://github.com/openclaw/openclaw/issues/145020) Update failure: runtime-verification-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬4
- [#145021](https://github.com/openclaw/openclaw/issues/145021) [Feature]: Allow plugin-owned cancellation of host-bound current-turn delivery `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬4
- [#144776](https://github.com/openclaw/openclaw/issues/144776) [Bug]: MiniMax API-key catalog ignores configured CN or proxy base URL 💬4
- [#145340](https://github.com/openclaw/openclaw/issues/145340) [Bug]: update repair blocked by checkpointless scrubbed config-audit archive; supported recovery needed `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬3
- [#145280](https://github.com/openclaw/openclaw/issues/145280) [Bug]: Update canary inherits live mcp.apps.sandboxPort and dies EADDRINUSE while gateway runs `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬3
- [#145292](https://github.com/openclaw/openclaw/issues/145292) [Bug]: Install script obliterates existing nvm `bug` `no-stale` `bug:behavior` `clawsweeper:fix-shape-clear` 💬3
- [#145126](https://github.com/openclaw/openclaw/issues/145126) [Bug]: ask_user answer that misses one of several questions is dropped with no reply `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#144858](https://github.com/openclaw/openclaw/issues/144858) [Bug]: Candidate rehearsal is capped at 300 seconds despite a larger update step timeout `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬3
- [#144639](https://github.com/openclaw/openclaw/issues/144639) Update failure: post-update-plugins (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬3
- [#145005](https://github.com/openclaw/openclaw/issues/145005) Update failure: repairing (2026.9.3) `P0` `maturity:stable` `impact:ux-release-blocker` 💬3
- [#144859](https://github.com/openclaw/openclaw/issues/144859) [Bug]: Post-update readiness timeout interrupts a gateway that needs more than 60 seconds to start `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬3
- [#144792](https://github.com/openclaw/openclaw/issues/144792) bug: claude-cli backend still hits spawn ENAMETOOLONG on Windows — the --allowedTools list is not relocated by the #71600 fix `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#144788](https://github.com/openclaw/openclaw/issues/144788) [Bug]: runDetachedWebhookWork no longer acquires an AsyncWorkScope in 2026.9.4, breaking async post-agent_end embedded-agent work `bug` `no-stale` `regression` `P1` 💬3
- [#144672](https://github.com/openclaw/openclaw/issues/144672) [Bug]: App shows no actionable error after connecting to wrong Control Port 💬3
- [#144582](https://github.com/openclaw/openclaw/issues/144582) macOS app: Control UI "New window" / "New tab" always fails with "Allow pop-ups for this site, then try again." `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#145445](https://github.com/openclaw/openclaw/issues/145445) [Bug]: Voice-call Realtime returns one in-flight consult result for distinct requests `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#145308](https://github.com/openclaw/openclaw/issues/145308) Feature: lazy skill-catalog discovery to reduce startup context and remove prompt-count ceiling `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#144739](https://github.com/openclaw/openclaw/issues/144739) [Bug]: 2026.9.3 → 2026.9.4 npm update runs 2026.9.3 against schema-17 candidate state 💬2
- [#145371](https://github.com/openclaw/openclaw/issues/145371) Terminal subagent projections rewrite linked flows on every Gateway restart `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#145252](https://github.com/openclaw/openclaw/issues/145252) [Tracking] 2026.9.3 / 2026.9.4 update, upgrade and recovery reliability `maintainer` `P0` `issue-rating: 🌊 off-meta tidepool` `impact:ux-release-blocker` 💬2
- [#145394](https://github.com/openclaw/openclaw/issues/145394) Cron timer runs a write transaction on the shared state database per agent per tick, before the session reaper's throttle (632-agent fleet, 2026.9.3 and 2026.9.4) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬2
- [#145184](https://github.com/openclaw/openclaw/issues/145184) Gateway blocks its event loop 70-82 s after ready hydrating every agent's sessions, and 13-17 s every ~5 min in the session-list prewarm, on a 632-agent fleet (2026.9.3 and 2026.9.4, not the #142476 reaper) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` 💬2
- [#145388](https://github.com/openclaw/openclaw/issues/145388) Update failure: unexpected-error (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#145156](https://github.com/openclaw/openclaw/issues/145156) Update failure: not-git-install (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#145362](https://github.com/openclaw/openclaw/issues/145362) Update failure: plugin-target-unavailable (2026.9.3) `P0` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#145309](https://github.com/openclaw/openclaw/issues/145309) [Bug]: claude-cli backend looks for transcripts under $HOME/.claude and ignores CLAUDE_CONFIG_DIR — missing-transcript resets and cli_live_session_changed failover `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#145339](https://github.com/openclaw/openclaw/issues/145339) [Bug]: Update from 2026.9.3 to 2026.9.4 fails candidate Doctor lint with Discord groupPolicy=open `bug` `regression` `clawsweeper:source-repro` `P0` 💬2
- [#145325](https://github.com/openclaw/openclaw/issues/145325) Update failure: global-install-failed (2026.9.3) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#145070](https://github.com/openclaw/openclaw/issues/145070) [Bug]: doctor --fix on a systemd --user gateway always fails final revalidation ("ownership or manager identity changed") and leaves the gateway stopped (2026.9.4) — Windows-only fix in #137377 `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#145301](https://github.com/openclaw/openclaw/issues/145301) [Bug]: `openclaw update` (npm mode) always fails at "global install swap": package integrity scan hits hard 30 s cap on large install trees `bug` `regression` `P0` `maturity:stable` 💬2
- [#145217](https://github.com/openclaw/openclaw/issues/145217) [Bug]: sessions.compact fails with "no explicit owner" on literal global-keyed sessions despite explicit agentId, correct systemAgent config `bug` `no-stale` `bug:behavior` `P1` 💬2
- [#145157](https://github.com/openclaw/openclaw/issues/145157) Trim unused policy inputs from node-host argv preparation `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬2
- [#145244](https://github.com/openclaw/openclaw/issues/145244) Update failure: doctor-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#145152](https://github.com/openclaw/openclaw/issues/145152) Stuck-session recovery reports a force-clear as an abort, names no run/owner identity, and releases the reply lane by session id (2026.7.1) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#145201](https://github.com/openclaw/openclaw/issues/145201) [Bug] telegram: richMessages vs older self-hosted Bot API server (apiRoot) — every send 400s "rich message must be non-empty", total channel blackout `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#145214](https://github.com/openclaw/openclaw/issues/145214) Native PR merge success tests fail after author verification `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬2
- [#145182](https://github.com/openclaw/openclaw/issues/145182) msteams 2026.9.4: Teams SSO broken — onTokenExchange looked up on App instead of app.oauthHandlers `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#145203](https://github.com/openclaw/openclaw/issues/145203) [Bug] hung openai-completions SSE stream (48.5 min) never recovered: stream_progress touches starve the stall watchdog (recovery=none) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#145134](https://github.com/openclaw/openclaw/issues/145134) [Bug]: codex settled-turn finalization rejects OpenClaw's own custom_message parts → unsupported_content `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#145116](https://github.com/openclaw/openclaw/issues/145116) [Bug]: Bulk session identity lock acquisition overflows the stack and crashes Gateway on 2026.9.4 `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` `clawsweeper:source-repro` 💬2
- [#145154](https://github.com/openclaw/openclaw/issues/145154) [Bug]: doctor/wizard migration silently reroutes Codex-OAuth traffic to paid API key when both auth profiles exist `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#144732](https://github.com/openclaw/openclaw/issues/144732) Update failure: plugin-target-unavailable (2026.9.3) `P2` `impact:ux-friction` 💬2
- [#145137](https://github.com/openclaw/openclaw/issues/145137) Small-model security block prevents local/Ollama models from using web_search and web_fetch tools `security` `P2` `impact:auth-provider` `clawsweeper:not-repro-on-main` 💬2
- [#145148](https://github.com/openclaw/openclaw/issues/145148) Update failure: doctor-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬2
- [#145138](https://github.com/openclaw/openclaw/issues/145138) Update failure: validating (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#145145](https://github.com/openclaw/openclaw/issues/145145) Update failure: doctor-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#145072](https://github.com/openclaw/openclaw/issues/145072) [Bug]: macOS npm update fails at "global install swap" — `Package rollback launcher backup changed` (launcher fingerprint includes symlink mode; shim backup copy never chmod'ed) `bug` `no-stale` `regression` `clawsweeper:fix-shape-clear` 💬2
- [#145101](https://github.com/openclaw/openclaw/issues/145101) [Bug]: Review tab gets stuck showing a subagent transcript instead of the session diff `bug` `bug:behavior` `P2` `impact:ux-friction` 💬2
- [#145099](https://github.com/openclaw/openclaw/issues/145099) [Bug]: macOS sidebar browser obscures the tab-selector dropdown `bug` `no-stale` `bug:behavior` `P2` 💬2
- [#145050](https://github.com/openclaw/openclaw/issues/145050) [Bug]: Doctor skips historical Workshop workspace setup, then refuses migration on that same root `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `impact:session-state` `clawsweeper:current-main-repro` 💬2
- [#145098](https://github.com/openclaw/openclaw/issues/145098) Control UI serves stale cached bundle after gateway upgrade — streaming rendering breaks (tables degrade to plain text) until manual hard refresh `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#145087](https://github.com/openclaw/openclaw/issues/145087) [Bug]: update verifying false-negatives on a version mismatch and strands a healthy gateway (win32/npm) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#144825](https://github.com/openclaw/openclaw/issues/144825) Update failure: repairing (2026.9.3) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#145029](https://github.com/openclaw/openclaw/issues/145029) [Bug]: restart-safe recovery silently strips side-effecting tools; the recovery prompt tells the model to continue and never mentions the restriction `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#144767](https://github.com/openclaw/openclaw/issues/144767) Reasoning stream/final asymmetry: raw CoT streams as untagged deltaText, then inconsistently vanishes or stays at final assembly (no thinking param, R1-style models) `P2` `impact:session-state` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#144612](https://github.com/openclaw/openclaw/issues/144612) Compaction can open a competing writer for an already-loaded Codex chat `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#144966](https://github.com/openclaw/openclaw/issues/144966) Plugin startup race in plugin-sdk/collection-runtime.js — fatal on 2026.9.3, recoverable-but-noisy on 2026.9.2 `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬2
- [#145017](https://github.com/openclaw/openclaw/issues/145017) Update failure: global-install-failed (2026.9.3) `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` `impact:ux-release-blocker` 💬2
- [#144958](https://github.com/openclaw/openclaw/issues/144958) Source-reply transcript mirror refusal fails an already-delivered send, causing duplicate Slack deliveries (2026.9.3+) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-info` 💬2
- [#144971](https://github.com/openclaw/openclaw/issues/144971) [Bug]: `doctor --fix` "ownership or shutdown could not be verified" on macOS when the gateway is a **system** LaunchDaemon with state owned by a separate service account (blocks 9.3 Workshop migration) `P2` `impact:ux-friction` 💬2
- [#144876](https://github.com/openclaw/openclaw/issues/144876) [Bug]: Tool-backed dashboard sessions can end silently after length finalization failure `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#144942](https://github.com/openclaw/openclaw/issues/144942) [Regression 2026.9.3] Cron announce pipeline leaks raw <tool_call> XML when model output contains escape markers between tags `P2` `impact:ux-friction` 💬2
- [#144796](https://github.com/openclaw/openclaw/issues/144796) Bonjour: transient Docker bridge removal causes ENODEV mDNS warning bursts on Linux `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#144934](https://github.com/openclaw/openclaw/issues/144934) Update failure: post-update-plugins (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬2
- [#144877](https://github.com/openclaw/openclaw/issues/144877) [Bug]: category (custom group) does not override CLI catalog placement in CODING zone `bug` `no-stale` `bug:behavior` `P2` 💬2
- [#144860](https://github.com/openclaw/openclaw/issues/144860) [Bug]: MCP session DELETE returning 404 is treated as failed cleanup `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#144866](https://github.com/openclaw/openclaw/issues/144866) [Bug]: Subagent spawn clamps thinking level to high for config-declared models — model-level compat.supportedReasoningEfforts never reaches the spawn-path profile resolution `P2` `clawsweeper:source-repro` `impact:auth-provider` `issue-rating: 🦞 diamond lobster` 💬2
- [#144851](https://github.com/openclaw/openclaw/issues/144851) QA Channel can modify or remove a reply after promoting its preview to final `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#144722](https://github.com/openclaw/openclaw/issues/144722) [Bug]: Telegram debounce and text-fragment buffers can dispatch messages out of order `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#144842](https://github.com/openclaw/openclaw/issues/144842) Embedded agent runs with an explicit contextTokenBudget can permanently lose tool access after a stopReason: "length" turn `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬2
- [#144800](https://github.com/openclaw/openclaw/issues/144800) Update failure: managed-service-handoff-cancelled (2026.9.4) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬2
- [#144803](https://github.com/openclaw/openclaw/issues/144803) [Feature]: Support bounded loading of managed HTML reports larger than 2 MiB `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#144791](https://github.com/openclaw/openclaw/issues/144791) [Bug] Windows npm update 2026.9.3 → 2026.9.4 fails at candidate snapshot with unresolved `P0` `impact:ux-release-blocker` 💬2
- [#144793](https://github.com/openclaw/openclaw/issues/144793) [Bug]: claude-cli runs on a token auth profile fail with "Not logged in" when a second CLI session is already live `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:auth-provider` 💬2
- [#144772](https://github.com/openclaw/openclaw/issues/144772) [Bug]: macOS gateway crash loop: EXC_GUARD abort on guarded fd close, restart-recovery replays the crashing session forever `bug` `bug:crash` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬2
- [#144679](https://github.com/openclaw/openclaw/issues/144679) [Design]: Make Connect a recognizable primary button in iOS Gateway setup `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#144610](https://github.com/openclaw/openclaw/issues/144610) [Bug]: 2026.9.3 Skill Workshop relocation leaves cron command argv and trigger scripts pointing at the deleted workspace/skills path `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#144585](https://github.com/openclaw/openclaw/issues/144585) Backup hardlink aliases of generic SQLite databases can omit uncheckpointed WAL data `maintainer` `clawsweeper:source-repro` `impact:data-loss` `P0` 💬2
- [#144597](https://github.com/openclaw/openclaw/issues/144597) Talk relay can lose readiness while accepting the WebRTC answer `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#144594](https://github.com/openclaw/openclaw/issues/144594) Inter-session messages accepted into `pendingInputs` can be silently retained in `interrupted` state with no automatic replay and no bilateral warning `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#144561](https://github.com/openclaw/openclaw/issues/144561) Read-only worker paths throw "Prepared synthetic auth is missing for anthropic" when a provider apiKey uses env name ANTHROPIC_AUTH_TOKEN `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:message-loss` 💬2
- [#144546](https://github.com/openclaw/openclaw/issues/144546) Browser Talk never collects the spoken confirmation for high-impact tools, so voice-originated runs can never execute `P1` `impact:session-state` `impact:ux-friction` 💬2
- [#145457](https://github.com/openclaw/openclaw/issues/145457) `prepared model runtime plugin generation was superseded` still reproduces on 2026.9.3 — admission gate uses identity where its sibling check tolerates derived generations `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#145454](https://github.com/openclaw/openclaw/issues/145454) Update failure: global-install-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#145336](https://github.com/openclaw/openclaw/issues/145336) [Bug]: Cron startup recovery can disable an acknowledged watcher replacement `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#145440](https://github.com/openclaw/openclaw/issues/145440) macOS native fullscreen renders content in narrow centered column on black background (9.4) `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#145438](https://github.com/openclaw/openclaw/issues/145438) [Docs Bug]: OpenAI OAuth recovery omits Advanced Account Security enrollment and credential ownership `security` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬1
- [#145419](https://github.com/openclaw/openclaw/issues/145419) Update failure: global-install-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#145414](https://github.com/openclaw/openclaw/issues/145414) [Bug]: Settings navigation skeleton is seven plain bars, not the grouped icon + label rows it replaces `maintainer` `bug:behavior` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#145413](https://github.com/openclaw/openclaw/issues/145413) [Bug]: Plugins hub loading skeleton draws list rows with uneven pills instead of the card grid `maintainer` `bug:behavior` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#145412](https://github.com/openclaw/openclaw/issues/145412) Gateway header-only agent preflight copies entire databases `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#145181](https://github.com/openclaw/openclaw/issues/145181) Share JSON extraction in the one-shot setup planner `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#145403](https://github.com/openclaw/openclaw/issues/145403) [Bug]: sessions.history.read holds SQLite transaction while visitor callbacks run, freezing Gateway for 465s `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#145397](https://github.com/openclaw/openclaw/issues/145397) Issue on docs `P3` 💬1
- [#145358](https://github.com/openclaw/openclaw/issues/145358) Consolidate static auth-profile secret collection `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#145363](https://github.com/openclaw/openclaw/issues/145363) [Bug]: release performance validation rejects split agent-defaults schemas `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#145276](https://github.com/openclaw/openclaw/issues/145276) Anthropic image MIME checks decode complete supported images `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#145370](https://github.com/openclaw/openclaw/issues/145370) [Bug]: Doctor switch fixture rejects loaded-service inspection `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#145373](https://github.com/openclaw/openclaw/issues/145373) Terminal subagent projections rewrite linked flows on every Gateway restart `P2` `impact:other` 💬1
- [#145272](https://github.com/openclaw/openclaw/issues/145272) Documentation translation tests duplicate fixture ownership `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#145274](https://github.com/openclaw/openclaw/issues/145274) Chat pane browser previews prepare the same selections twice `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#145278](https://github.com/openclaw/openclaw/issues/145278) Completion cache writes prepare command metadata repeatedly `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#145267](https://github.com/openclaw/openclaw/issues/145267) Media tests retain obsolete cache reset plumbing `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#145225](https://github.com/openclaw/openclaw/issues/145225) Repeated bundled-plugin directory lookups allocate selection keys `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#145249](https://github.com/openclaw/openclaw/issues/145249) Runtime postbuild discovers the same static plugin assets twice `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#145270](https://github.com/openclaw/openclaw/issues/145270) Tool event delivery copies session and payload data unnecessarily `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#145176](https://github.com/openclaw/openclaw/issues/145176) Avoid parsing the final failed frontmatter recovery result twice `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#145344](https://github.com/openclaw/openclaw/issues/145344) fix(config): support guarded include publication and backup effects `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#145264](https://github.com/openclaw/openclaw/issues/145264) Transport replay preparation allocates avoidable intermediate arrays `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#145313](https://github.com/openclaw/openclaw/issues/145313) Consolidate Policy diagnostic finding construction without changing output `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#145258](https://github.com/openclaw/openclaw/issues/145258) Script tests duplicate temporary Git environment setup `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#145256](https://github.com/openclaw/openclaw/issues/145256) Catalog materialization repeats provider policy selection `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#145262](https://github.com/openclaw/openclaw/issues/145262) Primary tailnet lookups build unused address collections `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#145330](https://github.com/openclaw/openclaw/issues/145330) Quoted reply context is lost when steering into an active embedded run `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#145260](https://github.com/openclaw/openclaw/issues/145260) Matrix spoiler formatting repeats source analysis `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#145237](https://github.com/openclaw/openclaw/issues/145237) Memory search previews read the same file repeatedly `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#145235](https://github.com/openclaw/openclaw/issues/145235) Automation navigation retains the previous agent page state `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#145318](https://github.com/openclaw/openclaw/issues/145318) Feature Request: Per-sender queue mode — steer only for same sender, followup for others (group chats) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#145232](https://github.com/openclaw/openclaw/issues/145232) Tlon retains an unused private inbound media writer `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#145230](https://github.com/openclaw/openclaw/issues/145230) Zoned date parsing repeats formatter construction `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#145293](https://github.com/openclaw/openclaw/issues/145293) [Bug]: Sidebar agent menu shows the users icon for Agent settings instead of the gear `maintainer` `bug:behavior` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#145096](https://github.com/openclaw/openclaw/issues/145096) Refresh npm dependencies with a seven-day release cutoff `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#145174](https://github.com/openclaw/openclaw/issues/145174) Reduce missing-command lookup overhead without caching misses `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#145296](https://github.com/openclaw/openclaw/issues/145296) Is the unwired AuthStorage.login() intentional for Anthropic? `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#145289](https://github.com/openclaw/openclaw/issues/145289) memory-core: dreaming promotion silently drops to candidates=0 when workspace is bind-mounted at two paths (workspace state keyed by path string, not inode) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#145290](https://github.com/openclaw/openclaw/issues/145290) Update failure: runtime-verification-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#145208](https://github.com/openclaw/openclaw/issues/145208) QA Lab still tests the retired Discord observation artifact `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#145253](https://github.com/openclaw/openclaw/issues/145253) Update failure: runtime-verification-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#145245](https://github.com/openclaw/openclaw/issues/145245) Reply fails with "no active tool authority snapshot" after tool-heavy turns in group chats (2026.9.2 and 2026.9.3) `P1` `impact:message-loss` 💬1
- [#145221](https://github.com/openclaw/openclaw/issues/145221) OpenClaw 2026.9.4 stable feedback: automatic updates `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#145229](https://github.com/openclaw/openclaw/issues/145229) Update failure: unexpected-error (2026.9.3) `P2` `impact:ux-friction` 💬1
- [#145228](https://github.com/openclaw/openclaw/issues/145228) [Bug]: Device-hosted worker-turn sessions have no working GitHub-publishing path (all three documented mechanisms explicitly exclude them) `P2` `impact:auth-provider` `issue-rating: 🦪 silver shellfish` 💬1
- [#145224](https://github.com/openclaw/openclaw/issues/145224) Update failure: unexpected-error (2026.9.4) `P2` `impact:ux-friction` 💬1
- [#145189](https://github.com/openclaw/openclaw/issues/145189) Control UI disconnects while WebSocket pings are queued behind outgoing data `maintainer` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#145218](https://github.com/openclaw/openclaw/issues/145218) Update failure: runtime-verification-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#145114](https://github.com/openclaw/openclaw/issues/145114) [Bug]: Doctor overwrites config edits saved while its repair confirmation is open `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#145205](https://github.com/openclaw/openclaw/issues/145205) Plugin registry is cached per agent workspace, so a shared gateway holds one identical copy of every plugin loader per agent (92 MiB at 85 agents, LRU ceiling 128) `P2` `impact:other` 💬1
- [#145150](https://github.com/openclaw/openclaw/issues/145150) Avoid unused execution-skill collision indexes on agent-only loads `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#145202](https://github.com/openclaw/openclaw/issues/145202) [Bug] session init/post-ready prewarm parses session-sqlite-import-archive on the main thread — ~6-min event-loop freezes, healthcheck fails, SIGUSR1 unhandleable `impact:message-loss` `impact:crash-loop` `P0` `issue-rating: 🦪 silver shellfish` 💬1
- [#145197](https://github.com/openclaw/openclaw/issues/145197) Update failure: post-update-plugins (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#145194](https://github.com/openclaw/openclaw/issues/145194) Update failure: runtime-verification-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#145195](https://github.com/openclaw/openclaw/issues/145195) Update failure: global-install-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#144961](https://github.com/openclaw/openclaw/issues/144961) Reduce unnecessary Responses endpoint policy classifications `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#145179](https://github.com/openclaw/openclaw/issues/145179) [Bug]: Bundled IMAP plugin deliver:true fails to deliver to Telegram without target <chatId> `bug` `bug:behavior` `P1` `impact:message-loss` 💬1
- [#145161](https://github.com/openclaw/openclaw/issues/145161) [Bug]: Chat collapse chevrons point in three different directions (text box, task progress, sessions) `maintainer` `bug:behavior` `P3` `clawsweeper:no-new-fix-pr` 💬1
- [#145092](https://github.com/openclaw/openclaw/issues/145092) Bundle MCP stdio runtimes leak on every heartbeat run with `isolatedSession: true` (2026.9.4) `P1` `impact:crash-loop` 💬1
- [#144956](https://github.com/openclaw/openclaw/issues/144956) Maintenance: centralize fixed WhatsApp plugin wiring `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#145141](https://github.com/openclaw/openclaw/issues/145141) Breaking change: web_search and web_fetch tools silently stop working for local/Ollama models after upgrade `P3` 💬1
- [#145120](https://github.com/openclaw/openclaw/issues/145120) Native Codex progress is not wired to the channel reply operation, causing false stall interruptions `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#145119](https://github.com/openclaw/openclaw/issues/145119) [Bug]: `infer image describe` still throws AgentSelectionRequiredError with a valid --agent (agentId dropped before ownership check, missed by #124926/#125143) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#144733](https://github.com/openclaw/openclaw/issues/144733) Preserve SDK types in Slack slash-command wiring `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#145104](https://github.com/openclaw/openclaw/issues/145104) Update failure: readyz-unhealthy (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#145095](https://github.com/openclaw/openclaw/issues/145095) [Feature]: cron runs CLI cannot filter by several statuses at once `P2` `clawsweeper:no-new-fix-pr` `issue-rating: 🌊 off-meta tidepool` `impact:ux-friction` 💬1
- [#145086](https://github.com/openclaw/openclaw/issues/145086) Control UI reports a harness-owned subscription credential as rejected: Settings shows "Credentials rejected" and the picker flips to "sign-in needed" (Codex + ChatGPT OAuth) `P2` `clawsweeper:needs-info` `impact:auth-provider` `issue-rating: 🦐 gold shrimp` 💬1
- [#145083](https://github.com/openclaw/openclaw/issues/145083) Update failure: doctor-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦐 gold shrimp` `impact:ux-release-blocker` 💬1
- [#145081](https://github.com/openclaw/openclaw/issues/145081) Update failure: managed-service-preflight (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#145079](https://github.com/openclaw/openclaw/issues/145079) [Bug]: Gemini and Vertex AI turns fail with "Google SSE stream ended with an incomplete frame" instead of retrying when the stream is cut mid-event `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#145069](https://github.com/openclaw/openclaw/issues/145069) [Bug]: 9.3 → 9.4 update fails: snapshot preparation consumes hard-capped canary startup budget `bug` `regression` `P0` `impact:ux-release-blocker` 💬1
- [#145075](https://github.com/openclaw/openclaw/issues/145075) [Feature]: Add contextual file actions and window large text previews in Control UI `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#145073](https://github.com/openclaw/openclaw/issues/145073) [Bug]: OpenRouter model discovery fails after API key is added via Web UI `bug` `bug:behavior` `impact:auth-provider` `P0` 💬1
- [#145071](https://github.com/openclaw/openclaw/issues/145071) Support GPT-Live-1 through the public Live API `maintainer` `P2` `impact:session-state` `impact:auth-provider` 💬1
- [#144721](https://github.com/openclaw/openclaw/issues/144721) [Bug]: Refreshing Plugins page returns 404 Not Found due to UI/plugin HTTP route collision (2026.9.4) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#144997](https://github.com/openclaw/openclaw/issues/144997) [Bug]: `openclaw mcp doctor` reports a stdio MCP server as ok when its `command` is a directory, but every launch fails with EACCES `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#145052](https://github.com/openclaw/openclaw/issues/145052) Remove the retired external credential scanner `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#145063](https://github.com/openclaw/openclaw/issues/145063) [Feature]: Operator-enforced completion handoff for sessions_spawn `P2` `impact:message-loss` 💬1
- [#145058](https://github.com/openclaw/openclaw/issues/145058) [Bug]: nodes invoke forwards a blank --idempotency-key to the Gateway and fails with a cryptic schema error `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#145000](https://github.com/openclaw/openclaw/issues/145000) subagent announce completions can trigger recursive self-announcements `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` `clawsweeper:needs-live-repro` 💬1
- [#145014](https://github.com/openclaw/openclaw/issues/145014) [removed] `P3` `clawsweeper:bulk-filed` 💬1
- [#145013](https://github.com/openclaw/openclaw/issues/145013) [removed] `P3` `clawsweeper:bulk-filed` 💬1
- [#145012](https://github.com/openclaw/openclaw/issues/145012) [removed] `P3` `clawsweeper:bulk-filed` 💬1
- [#145011](https://github.com/openclaw/openclaw/issues/145011) [removed] `P3` `clawsweeper:bulk-filed` 💬1
- [#145010](https://github.com/openclaw/openclaw/issues/145010) [removed] `P3` `clawsweeper:bulk-filed` 💬1
- [#145009](https://github.com/openclaw/openclaw/issues/145009) [removed] `P3` `clawsweeper:bulk-filed` 💬1
- [#145008](https://github.com/openclaw/openclaw/issues/145008) [removed] `P3` `clawsweeper:bulk-filed` 💬1
- [#145007](https://github.com/openclaw/openclaw/issues/145007) [removed] `P3` `clawsweeper:bulk-filed` 💬1
- [#145006](https://github.com/openclaw/openclaw/issues/145006) [removed] `P3` `clawsweeper:bulk-filed` 💬1
- [#144919](https://github.com/openclaw/openclaw/issues/144919) [Bug]: Docker Compose doctor --fix fails with unhandled "service child cleanup identity lost" on 2026.9.3 / 2026.9.4 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🦪 silver shellfish` 💬1
- [#144735](https://github.com/openclaw/openclaw/issues/144735) Update failure: [redacted-command] (2026.9.4) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#144718](https://github.com/openclaw/openclaw/issues/144718) Update failure: node-runtime-preflight (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#144706](https://github.com/openclaw/openclaw/issues/144706) Update failure: managed-service-handoff-unsafe-recovery (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#144875](https://github.com/openclaw/openclaw/issues/144875) Update failure: repairing (2026.9.3) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `P0` `issue-rating: 🦪 silver shellfish` 💬1
- [#145037](https://github.com/openclaw/openclaw/issues/145037) Feishu plugin: bot→bot replies intermittently render as empty/placeholder (请升级至最新版本客户端) `P2` `clawsweeper:needs-info` `impact:message-loss` `issue-rating: 🦪 silver shellfish` 💬1
- [#144995](https://github.com/openclaw/openclaw/issues/144995) [Bug]: Workboard backend tests do not enforce SQLite persistence contracts `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#145036](https://github.com/openclaw/openclaw/issues/145036) Feishu plugin: mention validation fails for bot senders → cross-bot group messages silently dropped `P2` `impact:message-loss` `issue-rating: 🦪 silver shellfish` 💬1
- [#145035](https://github.com/openclaw/openclaw/issues/145035) [Feature]: [Feat/Model] Support DeepSeek 4.1 Flash model in DeepSeek provider `enhancement` `P2` `impact:auth-provider` 💬1
- [#144643](https://github.com/openclaw/openclaw/issues/144643) Codex async questions lose structured answer controls `maintainer` `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` 💬1
- [#145027](https://github.com/openclaw/openclaw/issues/145027) Update failure: plugin-target-unavailable (2026.9.4) `P2` `impact:ux-friction` 💬1
- [#145022](https://github.com/openclaw/openclaw/issues/145022) Update failure: finalize:doctor (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#145018](https://github.com/openclaw/openclaw/issues/145018) [Feature]: Turn Nextcloud Talk setup and editing into a guided, verifiable recipe `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `P0` 💬1
- [#145016](https://github.com/openclaw/openclaw/issues/145016) [Bug]: Control UI setup.verify fails with 'The staged default-agent route does not match the requested inference candidate' for OpenRouter auth `impact:auth-provider` `P0` `impact:ux-release-blocker` 💬1
- [#144980](https://github.com/openclaw/openclaw/issues/144980) [Feature]: On a WhatsApp account linked as the owner's own number, default DMs to the owner only instead of pairing every contact who messages them `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#144977](https://github.com/openclaw/openclaw/issues/144977) [Bug]: WhatsApp linking fails through the Control UI and the `whatsapp_login` tool ("connection timed out before login", phone says "Connection failed") while the CLI login links on the same host, account and version the next day `bug` `bug:behavior` `clawsweeper:no-new-fix-pr` `P0` 💬1
- [#144974](https://github.com/openclaw/openclaw/issues/144974) [Bug]: the agent's built-in `openclaw` helper tool reports WhatsApp "not linked" while the gateway reports it linked, running and connected `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#144978](https://github.com/openclaw/openclaw/issues/144978) [Bug]: mantis Telegram script tests fail on macOS: bare python spawn and a 107-byte socket path `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#144976](https://github.com/openclaw/openclaw/issues/144976) Gateway (systemd --user, Restart=always) auto-restarts after a slow drain on explicit 'stop', but not after a fast one `P2` `issue-rating: 🦪 silver shellfish` `impact:other` `maturity:stable` 💬1
- [#144972](https://github.com/openclaw/openclaw/issues/144972) [Bug]: `openclaw channels login` rewrites openclaw.json and enables the bundled `codex` plugin, which then errors on every agent run `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#144969](https://github.com/openclaw/openclaw/issues/144969) [Bug]: An abandoned Control UI setup wizard holds setup admission on every device ("setup is already in progress") with no owner-reachable cancel `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#144973](https://github.com/openclaw/openclaw/issues/144973) Update failure: plugin-target-unavailable (2026.9.3) `P2` `impact:ux-friction` 💬1
- [#144970](https://github.com/openclaw/openclaw/issues/144970) Update failure: post-update-plugins (2026.9.4) `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#144968](https://github.com/openclaw/openclaw/issues/144968) msteams plugin ignores configured tenantId for outbound Bot Framework auth, breaking single-tenant bots silently `P1` `impact:message-loss` `impact:auth-provider` `issue-rating: 🦪 silver shellfish` 💬1
- [#144964](https://github.com/openclaw/openclaw/issues/144964) Update failure: unexpected-error (2026.9.3) `P2` `impact:ux-friction` 💬1
- [#144963](https://github.com/openclaw/openclaw/issues/144963) Update failure: runtime-verification-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#144959](https://github.com/openclaw/openclaw/issues/144959) tasks list --status failed counts intentional heartbeat "empty-heartbeat-file" skips as failed `bug` `bug:behavior` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#144944](https://github.com/openclaw/openclaw/issues/144944) Bug: Runtime context block exposed in Telegram/WebChat replies `P2` `impact:security` `impact:ux-friction` 💬1
- [#144952](https://github.com/openclaw/openclaw/issues/144952) Terminal input: $(...) shell syntax is masked as *** by secret scrubber `P2` 💬1
- [#144953](https://github.com/openclaw/openclaw/issues/144953) Webchat UI: assistant message appears duplicated (shown once as user, once as assistant) `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#144950](https://github.com/openclaw/openclaw/issues/144950) [Feature]: List the resolved approval ledger from the CLI `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#144773](https://github.com/openclaw/openclaw/issues/144773) [Bug]: preserve malformed legacy sandbox registry when quarantine fails `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#144945](https://github.com/openclaw/openclaw/issues/144945) [Bug]: Healthy MCP server fails candidate doctor lint after ~4 minutes, and the update failure record truncates away the finding `P2` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `maturity:stable` 💬1
- [#144882](https://github.com/openclaw/openclaw/issues/144882) [Bug]: Matrix migration failure can move an unrelated sibling file `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#144938](https://github.com/openclaw/openclaw/issues/144938) [Bug]: Feishu plugin tools registered at gateway but never injected into agent tool list (2026.9.2 → 2026.9.4) `P1` `issue-rating: 🦪 silver shellfish` `impact:other` 💬1
- [#144937](https://github.com/openclaw/openclaw/issues/144937) Outbound message filter does not suppress intermediate/progress steps `P2` `impact:ux-friction` 💬1
- [#144933](https://github.com/openclaw/openclaw/issues/144933) Update failure: plugin-target-unavailable (2026.9.3) `P2` `impact:ux-friction` 💬1
- [#144857](https://github.com/openclaw/openclaw/issues/144857) [Bug]: Documented Fireworks alias rejects the default GLM model `maintainer` `P2` `clawsweeper:source-repro` `impact:auth-provider` 💬1
- [#144932](https://github.com/openclaw/openclaw/issues/144932) Update failure: global-install-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `maturity:stable` 💬1
- [#144928](https://github.com/openclaw/openclaw/issues/144928) Update failure: finalize:doctor (2026.9.4) `P2` `impact:ux-friction` 💬1
- [#144930](https://github.com/openclaw/openclaw/issues/144930) [Bug]: Local `openclaw infer` image, embedding, audio, and video commands fail with "secret reference was not materialized by the active runtime" for saved provider accounts stored as SecretRefs `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#144924](https://github.com/openclaw/openclaw/issues/144924) Update failure: doctor-failed (2026.9.3) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#144922](https://github.com/openclaw/openclaw/issues/144922) [Bug]: Agent sessions aborted at ~82 s by internal watchdog when a model call is in flight, then silently re-dispatched — duplicate side effects (duplicate message delivery) `bug` `bug:behavior` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#144918](https://github.com/openclaw/openclaw/issues/144918) Duplicate messages displayed in chat UI `P2` `impact:ux-friction` 💬1
- [#144917](https://github.com/openclaw/openclaw/issues/144917) [Bug]: Codex-backed dashboard sessions appear to start new threads instead of resuming `bug` `bug:behavior` `P1` `impact:session-state` 💬1
- [#144912](https://github.com/openclaw/openclaw/issues/144912) Update failure: repairing (2026.9.3) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#144910](https://github.com/openclaw/openclaw/issues/144910) Update failure: preflight-no-good-commit (2026.9.3) `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#144909](https://github.com/openclaw/openclaw/issues/144909) Update failure: global-install-failed (2026.9.3) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#144908](https://github.com/openclaw/openclaw/issues/144908) "Reply operation has no active tool authority snapshot" error recurs repeatedly `P1` `clawsweeper:needs-info` `impact:session-state` `issue-rating: 🦪 silver shellfish` 💬1
- [#144905](https://github.com/openclaw/openclaw/issues/144905) Terminal masks $(...) command substitution as *** `P2` `impact:ux-friction` 💬1
- [#144906](https://github.com/openclaw/openclaw/issues/144906) Update failure: preflight-worktree-failed (2026.9.3) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#144903](https://github.com/openclaw/openclaw/issues/144903) [Bug] 2026.9.3: version-gated model claude-fable-5-1 rejected "model not allowed" (upstream + config verified healthy) `P2` `impact:auth-provider` `issue-rating: 🦪 silver shellfish` 💬1
- [#144898](https://github.com/openclaw/openclaw/issues/144898) Update failure: doctor-failed (2026.9.3) `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#144897](https://github.com/openclaw/openclaw/issues/144897) Update failure: repairing (2026.9.3) `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#144885](https://github.com/openclaw/openclaw/issues/144885) [Bug]: Slack DM completion rejects a committed final receipt addressed to the verified conversation ID `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#144889](https://github.com/openclaw/openclaw/issues/144889) [Bug]: claude-cli heartbeat / exec-completion wakes get only the node-only `exec`, so gateway-local commands silently run on the paired Mac node `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `impact:security` 💬1
- [#144886](https://github.com/openclaw/openclaw/issues/144886) [Bug]: Restart delivery evidence drops sourceReplyFinal and loses progress-only classification `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#144881](https://github.com/openclaw/openclaw/issues/144881) [Feature]: Make the 256 KB workspace file preview cap configurable (or raise the default) `enhancement` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` 💬1
- [#144879](https://github.com/openclaw/openclaw/issues/144879) [Bug]: Detail panel "Markdown Renderizado" view shows syntax-highlighted raw Markdown instead of rendered HTML `P2` `impact:ux-friction` 💬1
- [#144872](https://github.com/openclaw/openclaw/issues/144872) Workboard: cards run as view-only subagents and cannot be continued when dispatched from automation/heartbeat `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#144795](https://github.com/openclaw/openclaw/issues/144795) fix(cli): reject blank message channel selectors before outbound actions `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#144855](https://github.com/openclaw/openclaw/issues/144855) Update failure: database-schema-preflight (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#144850](https://github.com/openclaw/openclaw/issues/144850) [Bug]: Installing a memory plugin from the Control UI silently reassigns plugins.slots.memory to an unconfigured backend (recall down 3+ days) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#144845](https://github.com/openclaw/openclaw/issues/144845) [Bug]: Gateway crash-loops silently for hours when the Tailscale backend is stopped (mode=serve + launchd KeepAlive) `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#144837](https://github.com/openclaw/openclaw/issues/144837) Webchat console shows configured model during response, not the active model `P2` `clawsweeper:needs-live-repro` `issue-rating: 🐚 platinum hermit` `impact:ux-friction` 💬1
- [#144835](https://github.com/openclaw/openclaw/issues/144835) Update failure: managed-service-preflight (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#144830](https://github.com/openclaw/openclaw/issues/144830) [Bug]: Secret egress proxy cannot connect to privately trusted/self-signed HTTPS upstreams `bug` `bug:behavior` `P2` `impact:security` 💬1
- [#144725](https://github.com/openclaw/openclaw/issues/144725) Separate SQLite integrity check time from gate waiting `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#144827](https://github.com/openclaw/openclaw/issues/144827) [Bug]: qqbot channel: core advice to add allowFrom "*" contradicts plugin schema; warning mispredicts DM admission under dmPolicy="open" `P2` `impact:ux-friction` 💬1
- [#144823](https://github.com/openclaw/openclaw/issues/144823) Update failure: runtime-verification-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#144812](https://github.com/openclaw/openclaw/issues/144812) [Bug]: Interleaved widget cards move away from their progress text in Control UI `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#144814](https://github.com/openclaw/openclaw/issues/144814) [Feature]: Allow explicitly authorized Slack users to manage cross-session automations `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#144728](https://github.com/openclaw/openclaw/issues/144728) Reduce repeated Matrix backup restore command construction `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:linked-pr-open` 💬1
- [#144789](https://github.com/openclaw/openclaw/issues/144789) Make Doctor distinguish declared and verifiable external ingress `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#144797](https://github.com/openclaw/openclaw/issues/144797) [Bug]: reused claude-cli live session keeps a deleted --mcp-config; all mcp__openclaw__* tools die mid-session with HTTP 401 `P1` `impact:session-state` `impact:auth-provider` `issue-rating: 🦪 silver shellfish` 💬1
- [#144784](https://github.com/openclaw/openclaw/issues/144784) Native scheduled provider-attempt admission and neutral upstream skips `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#144774](https://github.com/openclaw/openclaw/issues/144774) [Feature]: show Obsidian integration state in wiki status and doctor `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#144769](https://github.com/openclaw/openclaw/issues/144769) Progress card cannot be dismissed by the user unless every plan step is completed (note-only cards never dismissible) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#144765](https://github.com/openclaw/openclaw/issues/144765) [Bug]: Control UI WebChat body text never streams - agent/thinking delivers 346 delta frames per turn, agent/assistant delivers 2 `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#144726](https://github.com/openclaw/openclaw/issues/144726) [Bug]: Partial model catalogue refresh warning hides effort/speed controls in existing chats, but not new sessions (2026.9.4) `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#144744](https://github.com/openclaw/openclaw/issues/144744) config set reports no reason when a new agent model ref cannot resolve `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬1
- [#144743](https://github.com/openclaw/openclaw/issues/144743) Update failure: target-metadata-preflight (2026.9.3) `P2` `impact:ux-friction` 💬1
- [#144719](https://github.com/openclaw/openclaw/issues/144719) [Bug]: Plugins category sections wait ~80 seconds for full catalogue pagination (2026.9.4) `P2` `impact:ux-friction` 💬1
- [#144709](https://github.com/openclaw/openclaw/issues/144709) Update failure: plugin-target-unavailable (2026.9.3) `P2` `impact:ux-friction` 💬1
- [#144695](https://github.com/openclaw/openclaw/issues/144695) [Feature]: Native WhatsApp participant info/add/remove actions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#144702](https://github.com/openclaw/openclaw/issues/144702) Update failure: plugin-target-unavailable (2026.9.3) `P2` `impact:ux-friction` 💬1
- [#144763](https://github.com/openclaw/openclaw/issues/144763) opencode-go still 400 on latest release 2026.9.2 — session-header fix (#137464) merged Sep 6 but contained in no release 💬1
- [#144689](https://github.com/openclaw/openclaw/issues/144689) Isolate agent database ownership refusals without blocking healthy agents `maintainer` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#144683](https://github.com/openclaw/openclaw/issues/144683) [Bug]: iOS shows no error when Tailscale Gateway is unreachable `P0` `maturity:stable` `impact:ux-release-blocker` 💬1
- [#144662](https://github.com/openclaw/openclaw/issues/144662) [Bug]: screenshot and video uploads fail through protected egress with Bad Content-Length `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#144657](https://github.com/openclaw/openclaw/issues/144657) docs: add detailed release notes for v2026.9.4 `maintainer` `P3` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#144660](https://github.com/openclaw/openclaw/issues/144660) Anthropic cacheWrite dominates cost (~93-94%) — cache breakpoint not advancing through conversation history despite 2026.9.3 "Prompt cache continuity" fix 💬1
- [#144656](https://github.com/openclaw/openclaw/issues/144656) Update failure: runtime-verification-failed (2026.9.3) `clawsweeper:needs-info` `P0` `issue-rating: 🦪 silver shellfish` `impact:ux-release-blocker` 💬1
- [#144649](https://github.com/openclaw/openclaw/issues/144649) Update failure: doctor-failed (2026.9.3) `P2` `clawsweeper:needs-info` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬1
- [#144625](https://github.com/openclaw/openclaw/issues/144625) [Bug]: Unsandboxed coding-profile worktree workers receive replacement Codex tools after sessions_spawn `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#144627](https://github.com/openclaw/openclaw/issues/144627) [Bug]: Cron/agent run with model fallback fails with "Transcript idempotency key \"<runId>:terminal-error\" conflicts with the admitted message", masking the real error and leaving delivery unknown `P2` `impact:session-state` 💬1
- [#144630](https://github.com/openclaw/openclaw/issues/144630) memory-wiki: no opt-in way to scope shared-vault bridge reads for non-sandboxed agents `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `impact:session-state` 💬1
- [#144617](https://github.com/openclaw/openclaw/issues/144617) Spawned sessions can inherit a stale Codex dynamic-tool list `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#144608](https://github.com/openclaw/openclaw/issues/144608) Tool policy hooks cannot distinguish native preflight from host execution `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#144607](https://github.com/openclaw/openclaw/issues/144607) Scheduled automation tools cannot access their current-job checkpoint `P2` 💬1
- [#144606](https://github.com/openclaw/openclaw/issues/144606) Finite automation tool requests lose their scope before creator discovery `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#144592](https://github.com/openclaw/openclaw/issues/144592) Complete asynchronous runtime storage boundaries while retaining SQLite `maintainer` `P2` `issue-rating: 🌊 off-meta tidepool` 💬1
- [#144574](https://github.com/openclaw/openclaw/issues/144574) [Bug]: exec with timeoutSeconds=1400 cancelled as a whole run at 924s by the diagnostic stale threshold (reason=stuck_recovery) — bare `sleep` trace for #144514 `P1` `impact:session-state` 💬1
- [#144556](https://github.com/openclaw/openclaw/issues/144556) Codex Telegram photo follow-ups replay older image attachments `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#144557](https://github.com/openclaw/openclaw/issues/144557) OAuth audio transcription rejects the trusted-network opt-in `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#144545](https://github.com/openclaw/openclaw/issues/144545) LINE credential rotation after single-account promotion silently keeps the promoted stale credential `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` `clawsweeper:source-repro` 💬1
- [#144552](https://github.com/openclaw/openclaw/issues/144552) [Bug]: backup create aborts on a valid, non-corrupt third-party SQLite file that fails foreign_key_check `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#144996](https://github.com/openclaw/openclaw/issues/144996) test
- [#144667](https://github.com/openclaw/openclaw/issues/144667) [Bug]: pnpm 12.1.0 global update fails staging preflight because global-bin-dir override is ignored
- [#144668](https://github.com/openclaw/openclaw/issues/144668) Session memory search hits fail memory_get with misleading path required error `maintainer`
- [#144675](https://github.com/openclaw/openclaw/issues/144675) [Feature]: Show the recorded container runtime in Fleet status

#### 🔒 Closed Issues
- [#49876](https://github.com/openclaw/openclaw/issues/49876) Cron sessions deliver hallucinated output instead of failing cleanly when tool calls fail
- [#144712](https://github.com/openclaw/openclaw/issues/144712) [Bug]: npm update fails at "global install swap"; intact rollback reported as "recovery is unverified"
- [#9016](https://github.com/openclaw/openclaw/issues/9016) Feature: Expose OpenRouter usage cost to agent runtime
- [#79168](https://github.com/openclaw/openclaw/issues/79168) [Feature] Content-based prompt injection scanning on tool output
- [#140908](https://github.com/openclaw/openclaw/issues/140908) doctor --fix / gateway status --deep fail with EACCES on systemctl --user is-enabled under systemd --user service account (sudo -u), blocking all post-upgrade migrations
- [#92367](https://github.com/openclaw/openclaw/issues/92367) Feature request — scope-bound gateway auth tokens (`gateway.auth.tokens[]`) + per-agent dispatch-lane primitive
- [#117703](https://github.com/openclaw/openclaw/issues/117703) Feature request: log failed tool executions to a persistent log
- [#79384](https://github.com/openclaw/openclaw/issues/79384) web_search: maxResults hardcoded to 5, should be configurable via tools.web.search.maxResults
- [#144581](https://github.com/openclaw/openclaw/issues/144581) Windows: `openclaw update` fails at candidate snapshot with a malformed canary path -> runtime-verification-failed
- [#69926](https://github.com/openclaw/openclaw/issues/69926) [Feature]: WhatsApp: per-group allowFrom for sender authorization (parity with Feishu/IRC/LINE/Telegram/Nextcloud-talk)
- [#140037](https://github.com/openclaw/openclaw/issues/140037) [Bug]: Telegram progress mode exposes failed tool rows when toolProgress is false
- [#145307](https://github.com/openclaw/openclaw/issues/145307) Update failure: global-install-failed (2026.9.3)
- [#144286](https://github.com/openclaw/openclaw/issues/144286) LM Studio models onboarded with reasoning:true hang indefinitely on openai-completions (model finishes, agent stays 'pondering')
- [#115450](https://github.com/openclaw/openclaw/issues/115450) Hook timeout releases lane but leaves hook child processes alive
- [#145020](https://github.com/openclaw/openclaw/issues/145020) Update failure: runtime-verification-failed (2026.9.3)
- [#144776](https://github.com/openclaw/openclaw/issues/144776) [Bug]: MiniMax API-key catalog ignores configured CN or proxy base URL
- [#144424](https://github.com/openclaw/openclaw/issues/144424) Concurrent heartbeat lanes on unrelated dashboard sessions collide, trip real Anthropic 429s, and the retry backoff isn't honored (self-sustaining storm)
- [#145340](https://github.com/openclaw/openclaw/issues/145340) [Bug]: update repair blocked by checkpointless scrubbed config-audit archive; supported recovery needed
- [#143123](https://github.com/openclaw/openclaw/issues/143123) [Bug]: Bug: Agent avatar not reflected in Control UI after update (2026.9.3) — persists across browsers, OS, and restarts
- [#145280](https://github.com/openclaw/openclaw/issues/145280) [Bug]: Update canary inherits live mcp.apps.sandboxPort and dies EADDRINUSE while gateway runs
- [#145292](https://github.com/openclaw/openclaw/issues/145292) [Bug]: Install script obliterates existing nvm
- [#141228](https://github.com/openclaw/openclaw/issues/141228) Update-run tracking record stuck at phase 'requested' forever, even after successful doctor --fix restart
- [#144132](https://github.com/openclaw/openclaw/issues/144132) Fresh-profile updates to npm stable initialize an incompatible database
- [#144858](https://github.com/openclaw/openclaw/issues/144858) [Bug]: Candidate rehearsal is capped at 300 seconds despite a larger update step timeout
- [#145005](https://github.com/openclaw/openclaw/issues/145005) Update failure: repairing (2026.9.3)
- [#144859](https://github.com/openclaw/openclaw/issues/144859) [Bug]: Post-update readiness timeout interrupts a gateway that needs more than 60 seconds to start
- [#144124](https://github.com/openclaw/openclaw/issues/144124) resolvePairingSetupAuthLabel reports misleading "no token or password" error for gateway.auth.mode none/trusted-proxy
- [#139588](https://github.com/openclaw/openclaw/issues/139588) [Bug]: Update guidance interpreted as prohibiting authorized repair of an independent remote instance
- [#145156](https://github.com/openclaw/openclaw/issues/145156) Update failure: not-git-install (2026.9.4)
- [#145362](https://github.com/openclaw/openclaw/issues/145362) Update failure: plugin-target-unavailable (2026.9.3)
- [#145070](https://github.com/openclaw/openclaw/issues/145070) [Bug]: doctor --fix on a systemd --user gateway always fails final revalidation ("ownership or manager identity changed") and leaves the gateway stopped (2026.9.4) — Windows-only fix in #137377
- [#142452](https://github.com/openclaw/openclaw/issues/142452) [Bug]: doctor gateway-restart flow races the readiness probe (fixed 1500ms sleep + single-shot health check) → spurious "Health check failed"
- [#145301](https://github.com/openclaw/openclaw/issues/145301) [Bug]: `openclaw update` (npm mode) always fails at "global install swap": package integrity scan hits hard 30 s cap on large install trees
- [#142633](https://github.com/openclaw/openclaw/issues/142633) [Bug]: 2026.9.3 candidate Gateway canary exits before readiness (Discord git-tree path install + isolated xAI OAuth)
- [#145157](https://github.com/openclaw/openclaw/issues/145157) Trim unused policy inputs from node-host argv preparation
- [#145214](https://github.com/openclaw/openclaw/issues/145214) Native PR merge success tests fail after author verification
- [#145116](https://github.com/openclaw/openclaw/issues/145116) [Bug]: Bulk session identity lock acquisition overflows the stack and crashes Gateway on 2026.9.4
- [#144732](https://github.com/openclaw/openclaw/issues/144732) Update failure: plugin-target-unavailable (2026.9.3)
- [#145101](https://github.com/openclaw/openclaw/issues/145101) [Bug]: Review tab gets stuck showing a subagent transcript instead of the session diff
- [#145050](https://github.com/openclaw/openclaw/issues/145050) [Bug]: Doctor skips historical Workshop workspace setup, then refuses migration on that same root
- [#143797](https://github.com/openclaw/openclaw/issues/143797) [Bug]: Unconfigured npm self-update fails post-plugin config validation
- [#143786](https://github.com/openclaw/openclaw/issues/143786) [Bug]: Doctor blocks upgrades when an implicit Codex preference has no installed plugin
- [#144971](https://github.com/openclaw/openclaw/issues/144971) [Bug]: `doctor --fix` "ownership or shutdown could not be verified" on macOS when the gateway is a **system** LaunchDaemon with state owned by a separate service account (blocks 9.3 Workshop migration)
- [#144942](https://github.com/openclaw/openclaw/issues/144942) [Regression 2026.9.3] Cron announce pipeline leaks raw <tool_call> XML when model output contains escape markers between tags
- [#144796](https://github.com/openclaw/openclaw/issues/144796) Bonjour: transient Docker bridge removal causes ENODEV mDNS warning bursts on Linux
- [#144378](https://github.com/openclaw/openclaw/issues/144378) [Bug]: refresh bundled provider model catalog for DeepSeek V4.1 renaming (and handle legacy model ids in releases)
- [#144722](https://github.com/openclaw/openclaw/issues/144722) [Bug]: Telegram debounce and text-fragment buffers can dispatch messages out of order
- [#144791](https://github.com/openclaw/openclaw/issues/144791) [Bug] Windows npm update 2026.9.3 → 2026.9.4 fails at candidate snapshot with unresolved
- [#138383](https://github.com/openclaw/openclaw/issues/138383) [Bug]: `dir_fetch` reports "channel attaches first 25" but always attaches 0 — not in `TRUSTED_TOOL_RESULT_MEDIA` and never calls `toolContext.delivery.send()`
- [#144610](https://github.com/openclaw/openclaw/issues/144610) [Bug]: 2026.9.3 Skill Workshop relocation leaves cron command argv and trigger scripts pointing at the deleted workspace/skills path
- [#144357](https://github.com/openclaw/openclaw/issues/144357) [Bug]: Recorded update warnings corrupt plaintext transcripts output
- [#144585](https://github.com/openclaw/openclaw/issues/144585) Backup hardlink aliases of generic SQLite databases can omit uncheckpointed WAL data
- [#140193](https://github.com/openclaw/openclaw/issues/140193) [Bug]: backup SQLite discovery treats macOS AppleDouble `._*.sqlite` files as databases
- [#144152](https://github.com/openclaw/openclaw/issues/144152) [Bug]: Channels page ignores plugin icons when channel and plugin IDs differ
- [#144546](https://github.com/openclaw/openclaw/issues/144546) Browser Talk never collects the spoken confirmation for high-impact tools, so voice-originated runs can never execute
- [#145336](https://github.com/openclaw/openclaw/issues/145336) [Bug]: Cron startup recovery can disable an acknowledged watcher replacement
- [#145181](https://github.com/openclaw/openclaw/issues/145181) Share JSON extraction in the one-shot setup planner
- [#145397](https://github.com/openclaw/openclaw/issues/145397) Issue on docs
- [#145358](https://github.com/openclaw/openclaw/issues/145358) Consolidate static auth-profile secret collection
- [#145363](https://github.com/openclaw/openclaw/issues/145363) [Bug]: release performance validation rejects split agent-defaults schemas
- [#145276](https://github.com/openclaw/openclaw/issues/145276) Anthropic image MIME checks decode complete supported images
- [#145373](https://github.com/openclaw/openclaw/issues/145373) Terminal subagent projections rewrite linked flows on every Gateway restart
- [#145272](https://github.com/openclaw/openclaw/issues/145272) Documentation translation tests duplicate fixture ownership
- [#145274](https://github.com/openclaw/openclaw/issues/145274) Chat pane browser previews prepare the same selections twice
- [#145278](https://github.com/openclaw/openclaw/issues/145278) Completion cache writes prepare command metadata repeatedly
- [#145267](https://github.com/openclaw/openclaw/issues/145267) Media tests retain obsolete cache reset plumbing
- [#145225](https://github.com/openclaw/openclaw/issues/145225) Repeated bundled-plugin directory lookups allocate selection keys
- [#145249](https://github.com/openclaw/openclaw/issues/145249) Runtime postbuild discovers the same static plugin assets twice
- [#145270](https://github.com/openclaw/openclaw/issues/145270) Tool event delivery copies session and payload data unnecessarily
- [#142603](https://github.com/openclaw/openclaw/issues/142603) [Bug]: iMessage typing and read receipts stay disabled after bridge recovery
- [#145176](https://github.com/openclaw/openclaw/issues/145176) Avoid parsing the final failed frontmatter recovery result twice
- [#145264](https://github.com/openclaw/openclaw/issues/145264) Transport replay preparation allocates avoidable intermediate arrays
- [#145313](https://github.com/openclaw/openclaw/issues/145313) Consolidate Policy diagnostic finding construction without changing output
- [#145258](https://github.com/openclaw/openclaw/issues/145258) Script tests duplicate temporary Git environment setup
- [#145256](https://github.com/openclaw/openclaw/issues/145256) Catalog materialization repeats provider policy selection
- [#145262](https://github.com/openclaw/openclaw/issues/145262) Primary tailnet lookups build unused address collections
- [#145260](https://github.com/openclaw/openclaw/issues/145260) Matrix spoiler formatting repeats source analysis
- [#145237](https://github.com/openclaw/openclaw/issues/145237) Memory search previews read the same file repeatedly
- [#145235](https://github.com/openclaw/openclaw/issues/145235) Automation navigation retains the previous agent page state
- [#145232](https://github.com/openclaw/openclaw/issues/145232) Tlon retains an unused private inbound media writer
- [#145230](https://github.com/openclaw/openclaw/issues/145230) Zoned date parsing repeats formatter construction
- [#145293](https://github.com/openclaw/openclaw/issues/145293) [Bug]: Sidebar agent menu shows the users icon for Agent settings instead of the gear
- [#145096](https://github.com/openclaw/openclaw/issues/145096) Refresh npm dependencies with a seven-day release cutoff
- [#145174](https://github.com/openclaw/openclaw/issues/145174) Reduce missing-command lookup overhead without caching misses
- [#145208](https://github.com/openclaw/openclaw/issues/145208) QA Lab still tests the retired Discord observation artifact
- [#145245](https://github.com/openclaw/openclaw/issues/145245) Reply fails with "no active tool authority snapshot" after tool-heavy turns in group chats (2026.9.2 and 2026.9.3)
- [#145221](https://github.com/openclaw/openclaw/issues/145221) OpenClaw 2026.9.4 stable feedback: automatic updates
- [#145229](https://github.com/openclaw/openclaw/issues/145229) Update failure: unexpected-error (2026.9.3)
- [#145224](https://github.com/openclaw/openclaw/issues/145224) Update failure: unexpected-error (2026.9.4)
- [#145189](https://github.com/openclaw/openclaw/issues/145189) Control UI disconnects while WebSocket pings are queued behind outgoing data
- [#145114](https://github.com/openclaw/openclaw/issues/145114) [Bug]: Doctor overwrites config edits saved while its repair confirmation is open
- [#145205](https://github.com/openclaw/openclaw/issues/145205) Plugin registry is cached per agent workspace, so a shared gateway holds one identical copy of every plugin loader per agent (92 MiB at 85 agents, LRU ceiling 128)
- [#145150](https://github.com/openclaw/openclaw/issues/145150) Avoid unused execution-skill collision indexes on agent-only loads
- [#144961](https://github.com/openclaw/openclaw/issues/144961) Reduce unnecessary Responses endpoint policy classifications
- [#145179](https://github.com/openclaw/openclaw/issues/145179) [Bug]: Bundled IMAP plugin deliver:true fails to deliver to Telegram without target <chatId>
- [#145092](https://github.com/openclaw/openclaw/issues/145092) Bundle MCP stdio runtimes leak on every heartbeat run with `isolatedSession: true` (2026.9.4)
- [#144956](https://github.com/openclaw/openclaw/issues/144956) Maintenance: centralize fixed WhatsApp plugin wiring
- [#145141](https://github.com/openclaw/openclaw/issues/145141) Breaking change: web_search and web_fetch tools silently stop working for local/Ollama models after upgrade
- [#144733](https://github.com/openclaw/openclaw/issues/144733) Preserve SDK types in Slack slash-command wiring
- [#145069](https://github.com/openclaw/openclaw/issues/145069) [Bug]: 9.3 → 9.4 update fails: snapshot preparation consumes hard-capped canary startup budget
- [#145073](https://github.com/openclaw/openclaw/issues/145073) [Bug]: OpenRouter model discovery fails after API key is added via Web UI
- [#144721](https://github.com/openclaw/openclaw/issues/144721) [Bug]: Refreshing Plugins page returns 404 Not Found due to UI/plugin HTTP route collision (2026.9.4)
- [#144997](https://github.com/openclaw/openclaw/issues/144997) [Bug]: `openclaw mcp doctor` reports a stdio MCP server as ok when its `command` is a directory, but every launch fails with EACCES
- [#145052](https://github.com/openclaw/openclaw/issues/145052) Remove the retired external credential scanner
- [#145063](https://github.com/openclaw/openclaw/issues/145063) [Feature]: Operator-enforced completion handoff for sessions_spawn
- [#145014](https://github.com/openclaw/openclaw/issues/145014) [removed]
- [#145013](https://github.com/openclaw/openclaw/issues/145013) [removed]
- [#145012](https://github.com/openclaw/openclaw/issues/145012) [removed]
- [#145011](https://github.com/openclaw/openclaw/issues/145011) [removed]
- [#145010](https://github.com/openclaw/openclaw/issues/145010) [removed]
- [#145009](https://github.com/openclaw/openclaw/issues/145009) [removed]
- [#145008](https://github.com/openclaw/openclaw/issues/145008) [removed]
- [#145007](https://github.com/openclaw/openclaw/issues/145007) [removed]
- [#145006](https://github.com/openclaw/openclaw/issues/145006) [removed]
- [#144919](https://github.com/openclaw/openclaw/issues/144919) [Bug]: Docker Compose doctor --fix fails with unhandled "service child cleanup identity lost" on 2026.9.3 / 2026.9.4
- [#144212](https://github.com/openclaw/openclaw/issues/144212) Session cleanup repeatedly validates large databases and miscounts archive storage
- [#144995](https://github.com/openclaw/openclaw/issues/144995) [Bug]: Workboard backend tests do not enforce SQLite persistence contracts
- [#145035](https://github.com/openclaw/openclaw/issues/145035) [Feature]: [Feat/Model] Support DeepSeek 4.1 Flash model in DeepSeek provider
- [#144643](https://github.com/openclaw/openclaw/issues/144643) Codex async questions lose structured answer controls
- [#145027](https://github.com/openclaw/openclaw/issues/145027) Update failure: plugin-target-unavailable (2026.9.4)
- [#145016](https://github.com/openclaw/openclaw/issues/145016) [Bug]: Control UI setup.verify fails with 'The staged default-agent route does not match the requested inference candidate' for OpenRouter auth
- [#144973](https://github.com/openclaw/openclaw/issues/144973) Update failure: plugin-target-unavailable (2026.9.3)
- [#144964](https://github.com/openclaw/openclaw/issues/144964) Update failure: unexpected-error (2026.9.3)
- [#144952](https://github.com/openclaw/openclaw/issues/144952) Terminal input: $(...) shell syntax is masked as *** by secret scrubber
- [#144773](https://github.com/openclaw/openclaw/issues/144773) [Bug]: preserve malformed legacy sandbox registry when quarantine fails
- [#144882](https://github.com/openclaw/openclaw/issues/144882) [Bug]: Matrix migration failure can move an unrelated sibling file
- [#144937](https://github.com/openclaw/openclaw/issues/144937) Outbound message filter does not suppress intermediate/progress steps
- [#144933](https://github.com/openclaw/openclaw/issues/144933) Update failure: plugin-target-unavailable (2026.9.3)
- [#144857](https://github.com/openclaw/openclaw/issues/144857) [Bug]: Documented Fireworks alias rejects the default GLM model
- [#144928](https://github.com/openclaw/openclaw/issues/144928) Update failure: finalize:doctor (2026.9.4)
- [#144918](https://github.com/openclaw/openclaw/issues/144918) Duplicate messages displayed in chat UI
- [#144912](https://github.com/openclaw/openclaw/issues/144912) Update failure: repairing (2026.9.3)
- [#144905](https://github.com/openclaw/openclaw/issues/144905) Terminal masks $(...) command substitution as ***
- [#144897](https://github.com/openclaw/openclaw/issues/144897) Update failure: repairing (2026.9.3)
- [#144879](https://github.com/openclaw/openclaw/issues/144879) [Bug]: Detail panel "Markdown Renderizado" view shows syntax-highlighted raw Markdown instead of rendered HTML
- [#144200](https://github.com/openclaw/openclaw/issues/144200) [Bug]: Source launcher converts child signals into normal exit codes
- [#144795](https://github.com/openclaw/openclaw/issues/144795) fix(cli): reject blank message channel selectors before outbound actions
- [#144725](https://github.com/openclaw/openclaw/issues/144725) Separate SQLite integrity check time from gate waiting
- [#144827](https://github.com/openclaw/openclaw/issues/144827) [Bug]: qqbot channel: core advice to add allowFrom "*" contradicts plugin schema; warning mispredicts DM admission under dmPolicy="open"
- [#143607](https://github.com/openclaw/openclaw/issues/143607) [Feature]: type in chat while an existing session loads
- [#144728](https://github.com/openclaw/openclaw/issues/144728) Reduce repeated Matrix backup restore command construction
- [#140457](https://github.com/openclaw/openclaw/issues/140457) [Bug]: continuation of llama-cpp plugin is unable to connect to unsloth hosted on the same machine
- [#127528](https://github.com/openclaw/openclaw/issues/127528) Compaction omits the aggregate bootstrap-truncation notice
- [#132752](https://github.com/openclaw/openclaw/issues/132752) [Bug]: web_search surfaces the wrong (last, not first) provider's error on an all-fallback-failed result
- [#144726](https://github.com/openclaw/openclaw/issues/144726) [Bug]: Partial model catalogue refresh warning hides effort/speed controls in existing chats, but not new sessions (2026.9.4)
- [#144743](https://github.com/openclaw/openclaw/issues/144743) Update failure: target-metadata-preflight (2026.9.3)
- [#143604](https://github.com/openclaw/openclaw/issues/143604) [Feature]: Complete keyboard navigation for the chat position rail
- [#144719](https://github.com/openclaw/openclaw/issues/144719) [Bug]: Plugins category sections wait ~80 seconds for full catalogue pagination (2026.9.4)
- [#144709](https://github.com/openclaw/openclaw/issues/144709) Update failure: plugin-target-unavailable (2026.9.3)
- [#144702](https://github.com/openclaw/openclaw/issues/144702) Update failure: plugin-target-unavailable (2026.9.3)
- [#144763](https://github.com/openclaw/openclaw/issues/144763) opencode-go still 400 on latest release 2026.9.2 — session-header fix (#137464) merged Sep 6 but contained in no release
- [#144683](https://github.com/openclaw/openclaw/issues/144683) [Bug]: iOS shows no error when Tailscale Gateway is unreachable
- [#143539](https://github.com/openclaw/openclaw/issues/143539) [Feature]: Reveal chat widget actions on hover and keyboard focus
- [#144657](https://github.com/openclaw/openclaw/issues/144657) docs: add detailed release notes for v2026.9.4
- [#144627](https://github.com/openclaw/openclaw/issues/144627) [Bug]: Cron/agent run with model fallback fails with "Transcript idempotency key \"<runId>:terminal-error\" conflicts with the admitted message", masking the real error and leaving delivery unknown
- [#133418](https://github.com/openclaw/openclaw/issues/133418) [Bug]: ask_user options arrive as plain text on LINE, so there is nothing to tap
- [#144607](https://github.com/openclaw/openclaw/issues/144607) Scheduled automation tools cannot access their current-job checkpoint
- [#142870](https://github.com/openclaw/openclaw/issues/142870) Durable context-engine commits lose the resolved model window and budget
- [#144494](https://github.com/openclaw/openclaw/issues/144494) [Bug]: channels.start reports false for an admitted account omitted by plugin inventory
- [#144574](https://github.com/openclaw/openclaw/issues/144574) [Bug]: exec with timeoutSeconds=1400 cancelled as a whole run at 924s by the diagnostic stale threshold (reason=stuck_recovery) — bare `sleep` trace for #144514
- [#134667](https://github.com/openclaw/openclaw/issues/134667) feat(reef): allow OpenAI OAuth for guard classification
- [#144526](https://github.com/openclaw/openclaw/issues/144526) Prepare progress-card storage for asynchronous database operations
- [#113365](https://github.com/openclaw/openclaw/issues/113365) LINE template carousels with a column missing actions, a title, or a thumbnail are rejected whole by LINE (HTTP 400) and the reply is lost
- [#123862](https://github.com/openclaw/openclaw/issues/123862) [Feature]: Add caller-bound session ID guard to sessions.reset
- [#132025](https://github.com/openclaw/openclaw/issues/132025) Sending several photos at once to a LINE bot answers only some of them, with no sign the rest were dropped
- [#144477](https://github.com/openclaw/openclaw/issues/144477) Add a download action for assets opened in the Browser sidebar
- [#144996](https://github.com/openclaw/openclaw/issues/144996) test
- [#144667](https://github.com/openclaw/openclaw/issues/144667) [Bug]: pnpm 12.1.0 global update fails staging preflight because global-bin-dir override is ignored
- [#144668](https://github.com/openclaw/openclaw/issues/144668) Session memory search hits fail memory_get with misleading path required error

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 244,611 · **Open issues:** 42,119 · **Last push:** <1h ago

On September 11, 2026, Hermes Agent released version v0.21.2, addressing critical issues from the previous v0.21.0 release, particularly those affecting the stability of the `state.db` and session handling, which had resulted in database corruption and issues with session lists. There were no new merged pull requests in the last 24 hours, but several new issues were reported, including a significant bug (#108575) where the `hermes profile create --clone` command failed to carry over the `agent.max_turns`, causing cloned profiles to default to a restrictive 4-turn budget, leading to failures in kanban dispatch. Other noteworthy issues involve problems with session management and bugs in cron functionality that may impact user experience. Overall, it was a day focused on addressing existing complications rather than adding new features.

#### 🚀 New Releases
- [v2026.9.11](https://github.com/nousresearch/hermes-agent/releases/tag/v2026.9.11) Hermes Agent v0.21.2 (v2026.9.11)

#### 🐛 New Issues
- [#108575](https://github.com/NousResearch/hermes-agent/issues/108575) [Bug]: `hermes profile create --clone` does not carry over `agent.max_turns`. Cloned profiles run with a 4-turn budget. Kanban dispatch fails with "Iteration budget exhausted (4/4)" `type/bug` `comp/cli` `P3` `area/profiles` 💬5
- [#108656](https://github.com/NousResearch/hermes-agent/issues/108656) fix(gemini): preserve model-scoped quota failures and honor body RetryInfo instead of exhausting API-key pools `type/bug` `comp/agent` `provider/gemini` `P2` 💬4
- [#108638](https://github.com/NousResearch/hermes-agent/issues/108638) [Bug]: _apply_llamacpp_props never falls back to /props when /v1/props returns 200 with a non-props payload — allocated n_ctx is silently discarded `type/bug` `comp/agent` `P2` `bug` 💬2
- [#108647](https://github.com/NousResearch/hermes-agent/issues/108647) [Bug]: Tail message floor overrides the lean token budget with no upper bound (6.3x observed) `type/bug` `comp/agent` `P2` `sweeper:risk-session-state` 💬2
- [#108659](https://github.com/NousResearch/hermes-agent/issues/108659) Native image/video turns can get a previous request's answer when a custom provider forces cache_prompt unconditionally `type/bug` `comp/agent` `tool/vision` `area/config` 💬1
- [#108674](https://github.com/NousResearch/hermes-agent/issues/108674) [Bug]: sudo `hermes gateway start|stop --system` targets `hermes-gateway-<hash>.service` and fails with "Unit ... not found" (exit 5) — regression from the #105525 fix `type/bug` `comp/cli` `comp/gateway` `P1` 💬1
- [#108698](https://github.com/NousResearch/hermes-agent/issues/108698) Plugin slash commands run without session context (get_session_env('HERMES_SESSION_KEY') empty in command handlers)
- [#108694](https://github.com/NousResearch/hermes-agent/issues/108694) [Bug]: Desktop — new session on a project lane fails with 'invalid reference: main' when the repo's default branch is master `type/bug` `P2` `sweeper:risk-session-state` `comp/desktop`
- [#108679](https://github.com/NousResearch/hermes-agent/issues/108679) [Bug][Desktop/macOS] Hard reload halves session-tile widths: split-share memory replays 0.5 against the re-dock chain (persisted tree drifts from [1,1,1,1] to [1,1,0.5,0.5]) `type/bug` `P3` `sweeper:risk-session-state` `comp/desktop`
- [#108684](https://github.com/NousResearch/hermes-agent/issues/108684) [Bug]: concurrent cron notepad writes can exceed the per-job capacity and block later updates `type/bug` `comp/cron` `P3`
- [#108685](https://github.com/NousResearch/hermes-agent/issues/108685) [Bug]: cron delivery timeout ignores retained terminal outcomes and reports delivered messages as failed `type/bug` `comp/cron` `P3` `sweeper:risk-message-delivery`
- [#108671](https://github.com/NousResearch/hermes-agent/issues/108671) RFC: Explicit credential access policy for isolated and shared profile runtimes `type/feature` `comp/cli` `area/auth` `P3`
- [#108672](https://github.com/NousResearch/hermes-agent/issues/108672) [Setup]: Hermes `invalid` `P3`
- [#108662](https://github.com/NousResearch/hermes-agent/issues/108662) Bug `type/bug` `comp/agent` `platform/telegram` `provider/nous`
- [#108663](https://github.com/NousResearch/hermes-agent/issues/108663) tool_describe/tool_call say 'call it directly' for a tool disabled on this platform, causing a failed-retry guardrail loop `type/bug` `comp/agent` `comp/tools` `area/config`

#### 🔒 Closed Issues
- [#106005](https://github.com/NousResearch/hermes-agent/issues/106005) Multiplex profiles: MCP connections, toolset resolution, and status are not profile-scoped — only the first profile gets tools
- [#91654](https://github.com/NousResearch/hermes-agent/issues/91654) MCP session/circuit-breaker registries are keyed by server name only — profiles multiplexed in one gateway process can collide
- [#107327](https://github.com/NousResearch/hermes-agent/issues/107327) Multiplexed gateway: process-global path memoisation makes the protected-instruction gate and the config.yaml hard-block depend on which profile ran first
- [#107399](https://github.com/NousResearch/hermes-agent/issues/107399) Multiplexed gateway: a passthrough key in the process environment breaks restart-safe cron dispatch (UnscopedSecretError)
- [#103717](https://github.com/NousResearch/hermes-agent/issues/103717) [Bug]: multiplex_profiles — busy-session follow-up messages from secondary profile owners are dropped as unauthorized (no profile scope on busy path)
- [#65941](https://github.com/NousResearch/hermes-agent/issues/65941) Nous requests can use another profile's endpoint
- [#82903](https://github.com/NousResearch/hermes-agent/issues/82903) session_search tool ignores 'profile' arg in gateway: executor drops it, always searches root (default) state.db
- [#107422](https://github.com/NousResearch/hermes-agent/issues/107422) [Bug]: Multiplexed dashboard (app-global remote mode): one-shot TERMINAL_* ambient bridge latches a secondary profile's docker policy; primary-profile tool calls spawn mislabeled containers (residual of #68559)
- [#99121](https://github.com/NousResearch/hermes-agent/issues/99121) mem0 plugin fails closed on self-hosted OSS when no API key exists — unconditional get_secret() contradicts api_key_required = mode != "oss"
- [#97820](https://github.com/NousResearch/hermes-agent/issues/97820) [Bug]: OpenRouter routing suffixes (:floor/:nitro/:free) break models.dev catalog lookup — context window falls back to hardcoded family default
- [#95685](https://github.com/NousResearch/hermes-agent/issues/95685) [Bug]: Tool schema f-strings call display_hermes_home() at import time, freezing a stale profile path into tool descriptions
- [#80099](https://github.com/NousResearch/hermes-agent/issues/80099) fix(whatsapp): _apply_yaml_config writes WHATSAPP_* to global os.environ
- [#89302](https://github.com/NousResearch/hermes-agent/issues/89302) cron: deliver=origin to a live native adapter fails when profile config has no platforms block
- [#104933](https://github.com/NousResearch/hermes-agent/issues/104933) fix(gateway): profile_routes lacks bot discriminator, hijacking dedicated secondary adapters in multiplexing
- [#100397](https://github.com/NousResearch/hermes-agent/issues/100397) Bot Mode New Agent can clone API-server listener intent and be skipped by the default multiplexer

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 91,525 · **Open issues:** 7,910 · **Last push:** <1h ago

On September 12, 2026, there were no new releases for vLLM, but several important features and bug fixes were merged. Notably, PR #56503 improved performance by utilizing AITER mHC for delayed pre-blocks, while PR #56153 removed tl.constexpr to reduce cold-compile churn in the indexer gather kernel. Bug fixes included changes to ensure DP token padding is addressed in dflash attention metadata (#56181), and improvements for reading sparse model settings from text config (#56160). A significant new issue, #56506, emerged regarding DeepSeek-V4.1-Flash performance on ROCm, highlighting ongoing challenges in optimizing this platform. Overall, the day included routine maintenance alongside key performance enhancements and bug resolutions.

#### ✅ Merged PRs
- [#56503](https://github.com/vllm-project/vllm/pull/56503) [ROCm][DSV4.1][Perf] Use AITER mHC for the delayed pre block
- [#56485](https://github.com/vllm-project/vllm/pull/56485) [KDA] Update flashKDA to support bf16 checkpoint state
- [#56405](https://github.com/vllm-project/vllm/pull/56405) [Rust Frontend][gRPC] Surface engine generation errors
- [#56522](https://github.com/vllm-project/vllm/pull/56522) [ROCm][CI] Extend timeout for `Basic Models (other)`
- [#56153](https://github.com/vllm-project/vllm/pull/56153) [ROCm][Kernel][DSV4] Remove tl.constexpr to avoid cold-compile churn in indexer gather kernel
- [#56181](https://github.com/vllm-project/vllm/pull/56181) [BugFix] Fix DP token padding in dflash attention metadata
- [#56160](https://github.com/vllm-project/vllm/pull/56160) [Bugfix][MLA] Read sparse model settings from text config
- [#46994](https://github.com/vllm-project/vllm/pull/46994) [Spec][V2] Support MTP speculative decoding under pipeline parallelism
- [#55424](https://github.com/vllm-project/vllm/pull/55424) [Bugfix][KV Connector] Only enforce disk block alignment for O_DIRECT
- [#56312](https://github.com/vllm-project/vllm/pull/56312) [MRV1] Scope breakable cudagraphs to the piecewise path only
- [#56388](https://github.com/vllm-project/vllm/pull/56388) Upgrade tpu-inference to v0.29.0
- [#55426](https://github.com/vllm-project/vllm/pull/55426) [Bugfix][Kimi-K3] Fix KDA projection overlap on Hopper
- [#56499](https://github.com/vllm-project/vllm/pull/56499) [Agents] Link Triton skill to JIT kernel warmup guide
- [#53280](https://github.com/vllm-project/vllm/pull/53280) [Kernel][MoE] Optimize batched_moe_align_block_size with cooperative writes
- [#56269](https://github.com/vllm-project/vllm/pull/56269) [Docs] Correct API key authentication scope (/inference does NOT bypass the API key)
- [#55107](https://github.com/vllm-project/vllm/pull/55107) [Model][ROCm] Enable DeepSeek V4 Vision
- [#56429](https://github.com/vllm-project/vllm/pull/56429) Revert "[Rocm][Kimi-k3] Fix pipeline_parallel support for the kimik3 DCP mode (#53664)"
- [#56460](https://github.com/vllm-project/vllm/pull/56460) [httpx migration] Import httpx from huggingface_hub
- [#55353](https://github.com/vllm-project/vllm/pull/55353) [Deprecation] Deprecate items scheduled for 0.29
- [#55356](https://github.com/vllm-project/vllm/pull/55356) [Kimi Perf] Group fp8 mla cahche insertion, 4~6x kernel level performance improvement for small batch
- [#53675](https://github.com/vllm-project/vllm/pull/53675) [Multimodal] Use GPU NVDEC for EPD encoder-only instance video media IO
- [#56459](https://github.com/vllm-project/vllm/pull/56459) [ROCm][Docker] Pin AINIC apt repo to snapshot 1.117.5-a-77
- [#48866](https://github.com/vllm-project/vllm/pull/48866) [Metrics] Consolidate Prometheus histogram bucket defaults into a single module
- [#56395](https://github.com/vllm-project/vllm/pull/56395) [Proposal][HiSparse] Simplify cache initialization and block-size resolution
- [#56446](https://github.com/vllm-project/vllm/pull/56446) [Bugfix] Align vLLM YaRN with Transformers and stop re-scaling max_model_len
- [#53699](https://github.com/vllm-project/vllm/pull/53699) [Bugfix] Fix Qwen3-VL and Cosmos3-Edge text architectures for CPU and pipeline parallelism
- [#56017](https://github.com/vllm-project/vllm/pull/56017) [Bugfix][Scoring] Warn when serving original Qwen3 reranker without chat template
- [#56447](https://github.com/vllm-project/vllm/pull/56447) [Bugfix] Fix GLM-OCR MTP position masking during CUDA graph capture
- [#55326](https://github.com/vllm-project/vllm/pull/55326) [Bugfix][Multimodal] Parse decoded video frame lists as a single video
- [#55305](https://github.com/vllm-project/vllm/pull/55305) [Bugfix][Responses] Fix browser.find action type
- [#56433](https://github.com/vllm-project/vllm/pull/56433) [ROCm][Bugfix] Fix AITER preshuffled FP8 block-scale kernel
- [#56415](https://github.com/vllm-project/vllm/pull/56415) [Bugfix][Pooling] Restore token limits for offline Jina scoring
- [#56260](https://github.com/vllm-project/vllm/pull/56260) [Bugfix][Rust Frontend][Renderer] Align DeepSeek tool-call arguments with deepseek-recipe
- [#55127](https://github.com/vllm-project/vllm/pull/55127) [Misc] Log FlashInfer allreduce workspace init failure as error
- [#55667](https://github.com/vllm-project/vllm/pull/55667) [ROCm][CI] Add HY-V4 generation coverage
- [#56214](https://github.com/vllm-project/vllm/pull/56214) [Model] Support DeepSeek-V4.1-Flash
- [#55450](https://github.com/vllm-project/vllm/pull/55450) [Bugfix][Core] Retire Mamba states across null gaps
- [#56355](https://github.com/vllm-project/vllm/pull/56355) [XPU][CI] Add decord to test requirements
- [#56138](https://github.com/vllm-project/vllm/pull/56138) [Bugfix] Pin EPLB and MLA host-to-device transfer buffers
- [#55095](https://github.com/vllm-project/vllm/pull/55095) [Bugfix] Fall back to full decode graphs for noncompiled models
- [#56300](https://github.com/vllm-project/vllm/pull/56300) [Bugfix][Bench] Fix bench mm-processor crash in shared request sampling
- [#56365](https://github.com/vllm-project/vllm/pull/56365) [CI/Build][Rust Frontend] Publish vllm-proto on crates.io
- [#55352](https://github.com/vllm-project/vllm/pull/55352) [CPU] Speedup LM Head on Arm CPUs

#### 🐛 New Issues
- [#56506](https://github.com/vllm-project/vllm/issues/56506) [RFC]: DeepSeek-V4.1-Flash performance on ROCm `performance` `rocm` `RFC` `deepseek` 💬5
- [#56370](https://github.com/vllm-project/vllm/issues/56370) [Bug]: Batch invariance is broken when sequence parallelism / async TP is enabled (`VLLM_BATCH_INVARIANT=1` + `pass_config.enable_sp`) `bug` 💬3
- [#56389](https://github.com/vllm-project/vllm/issues/56389) [Bug]: DeepSeek-V4.1-Flash dsv4_topk Triton illegal memory access under high concurrency on H20; mitigated by max_num_seqs=256 `deepseek` `DSv4` 💬4
- [#56443](https://github.com/vllm-project/vllm/issues/56443) [Bug]: DeepSeek-V4.1-Flash + DSpark spec decode hits CUDA device-side assert in `map_draft_to_target` at draft warmup on SM90 (H200) with Marlin MXFP4 MoE backend `deepseek` `DSv4` 💬3
- [#56410](https://github.com/vllm-project/vllm/issues/56410) [Bug]: --cpu-offload-gb uses ~1.9x the host memory it asks for `bug` 💬3
- [#56540](https://github.com/vllm-project/vllm/issues/56540) [Bug]: ROCm Stack DeepSeekv4.1 Flash Issue spamming logs with GLUON backend not available. Using TRITON backend!!! `bug` `rocm` 💬2
- [#56461](https://github.com/vllm-project/vllm/issues/56461) [Bug]: DeepSeek-V4.1-Flash cannot serve on SM120/SM121 (GB10) at e77daef89 — SWA cache block 32 vs SM120 decode page 64; ratio-1 indexer block_kv=128 vs DeepGEMM sm120 (64 only) `deepseek` `DSv4` 💬2
- [#56428](https://github.com/vllm-project/vllm/issues/56428) [Bug]: Reasoning still returned in /responses while include_reasoning is set to false `bug` `tool-calling` 💬2
- [#56457](https://github.com/vllm-project/vllm/issues/56457) [Bug] Qwen4Exp QSA indexer: per-chunk logits buffer grows with max_seq_len, caching allocator keeps every size, device OOM/hang on unified-memory GB10 (SM121) during long prefill 💬2
- [#56397](https://github.com/vllm-project/vllm/issues/56397) [CI Failure]: Multimodal Processor shards - test_tensor_schema[naver-hyperclovax/HyperCLOVAX-SEED-Think-32B] - upstream model_type hyperclovax_vision_v2 unknown to CI transformers `rocm` `multi-modality` `ci-failure` 💬2
- [#56417](https://github.com/vllm-project/vllm/issues/56417) [Bug]: extract_hidden_states uses first-column feedback for multi-token outputs `bug` 💬2
- [#56384](https://github.com/vllm-project/vllm/issues/56384) [Bug]: [Bug][Docker] Recipe references vllm/vllm-openai-rocm:deepseekv41-flash-0909 but the image is not available on Docker Hub `bug` `rocm` `kimi` 💬2
- [#56521](https://github.com/vllm-project/vllm/issues/56521) [Bug][ROCm]: Intermittent worker segfault in libhsa-runtime64 — ROCPROFILER_QUEUE_INTERPOSITION=0 forces an unfixed ROCr heap overflow `rocm` 💬1
- [#56419](https://github.com/vllm-project/vllm/issues/56419) [Bug]: CPU Gated-DeltaNet — EngineCore dies when constrained decoding rejects all speculative draft tokens (num_accepted_tokens=0 violates causal_conv1d_update_cpu precondition) `structured-output` `speculative-decoding` `tool-calling` 💬1
- [#56396](https://github.com/vllm-project/vllm/issues/56396) [Bug]: DeepSeek-V4.1-Flash: SimpleCPUOffloadConnector crashes with `assert block_size % hash_block_size == 0` (block_size=8, hash_block_size=32) `bug` `deepseek` `DSv4` 💬1
- [#56470](https://github.com/vllm-project/vllm/issues/56470) [Bug] MTP speculative decoding crashes with PP>1 due to missing record_stream on idx_mapping `speculative-decoding` 💬1
- [#56402](https://github.com/vllm-project/vllm/issues/56402) [RFC]: Efficient Routed-Expert Replay with Prefix Omission and KV Cache Offloading `RFC` 💬1
- [#56422](https://github.com/vllm-project/vllm/issues/56422) [Bug][XPU]: Kimi-K3 MLA fused ops not registered on XPU — Kimi-Linear-48B crashes on first attention forward `intel-gpu` `kimi` `k3` 💬1
- [#56407](https://github.com/vllm-project/vllm/issues/56407) [Build] Extract legacy HIP and MoE extension CMake configuration `rocm` 💬1
- [#56400](https://github.com/vllm-project/vllm/issues/56400) [Model Support] DeepSeek-V4.1 Tracking Issue `documentation` `rocm` `deepseek` `DSv4` 💬1
- [#56380](https://github.com/vllm-project/vllm/issues/56380) [Bug][ROCm] GLM-5.3-Flash indexer block-table mismatch on gfx942 `rocm` `glm` 💬1
- [#56371](https://github.com/vllm-project/vllm/issues/56371) [Bug]: /v1/messages non-streaming omits stop_sequence when null (exclude_none) `bug` 💬1
- [#56527](https://github.com/vllm-project/vllm/issues/56527) [Bug]: malformed EXIF in an image fails the request with a 500 from `MultiModalHasher.serialize_item`
- [#56516](https://github.com/vllm-project/vllm/issues/56516) [Doc]: prompt_lookup_min/prompt_lookup_max docstrings give the wrong defaults
- [#56514](https://github.com/vllm-project/vllm/issues/56514) [Doc]: metrics page is missing the spec-decode counters and cache_config_info
- [#56507](https://github.com/vllm-project/vllm/issues/56507) [Doc]: ec_cpu_connector.md refers to a no-NIXL import test that doesn't exist `kv-connector`
- [#56504](https://github.com/vllm-project/vllm/issues/56504) [Bug]: activation override in test_flashinfer_cutedsl_fp4_moe silently tests RELU2 for every parametrize case
- [#56482](https://github.com/vllm-project/vllm/issues/56482) [Bug]: DSML tool-call recovery (#55954) emits ghost empty-argument calls on truncation and narration, and recovers undeclared tools `tool-calling`

#### 🔒 Closed Issues
- [#53504](https://github.com/vllm-project/vllm/issues/53504) [Performance]: MTP first repeat misses prefix cache on a hybrid Mamba/GDN model
- [#42303](https://github.com/vllm-project/vllm/issues/42303) [Bug]: `prompt_token_ids` dropped in `EmbedsInput` pipeline
- [#45178](https://github.com/vllm-project/vllm/issues/45178) [Bug]: VLLM_MEMORY_PROFILER_ESTIMATE_CUDAGRAPHS is enabled by default and overestimates memory requirements (lowering KV cache space)
- [#42164](https://github.com/vllm-project/vllm/issues/42164) [RFC]: Introducing State Management in vLLM IR System
- [#42291](https://github.com/vllm-project/vllm/issues/42291) [Bug]: FlashInfer JIT compilation fails with "No such file or directory" in v0.20.1/v0.20.2 (docker)
- [#56428](https://github.com/vllm-project/vllm/issues/56428) [Bug]: Reasoning still returned in /responses while include_reasoning is set to false
- [#42226](https://github.com/vllm-project/vllm/issues/42226) [Bug]: benchmark_serving_multi_turn.py deadlocks after clients exit when --max-num-requests is used
- [#42268](https://github.com/vllm-project/vllm/issues/42268) Featured your project on osalt.dev — README badge available if you'd like to use it
- [#42271](https://github.com/vllm-project/vllm/issues/42271) [Bug]: MTP + FULL_AND_PIECEWISE cudagraph deadlocks at HT batched-decode when bonus-token-only forward shape is scheduled
- [#56470](https://github.com/vllm-project/vllm/issues/56470) [Bug] MTP speculative decoding crashes with PP>1 due to missing record_stream on idx_mapping
- [#55295](https://github.com/vllm-project/vllm/issues/55295) [Bug]: Responses browser.find raises ActionFind validation errors
- [#55350](https://github.com/vllm-project/vllm/issues/55350) [Bug]: [Kimi-K3][Hopper] Low-M TP8 KDA projection fails CUTLASS DSL compilation for sm_90a
- [#55501](https://github.com/vllm-project/vllm/issues/55501) [Feature]: Warn or auto-select the shipped score template when serving an original Qwen3-Reranker without --chat-template
- [#55545](https://github.com/vllm-project/vllm/issues/55545) [Bug]: rsLoRA scaling factor ignored for MoE expert LoRA adapters (pack_moe / pack_moe_stacked recompute alpha/rank)

### SGLang (`sgl-project/sglang`)

**Stars:** 35,829 · **Open issues:** 5,316 · **Last push:** <1h ago

On September 12, 2026, there were no new releases for SGLang, but several notable pull requests were merged, including the installation of elfutils headers for DeepGEMM wheel builds and the support for mixed precision in full and breakable prefill CUDA graphs with LoRA. Significant fixes included addressing session idle timeouts after rejected requests and refining weight checking for AITER-shuffled block FP8 weights, while improvements to the DeepGEMM's paged sparse MQA logits were also implemented. Among the new issues reported, a critical bug was identified where the GLM-5.3 crashed during disaggregate decoding with specific attention mechanisms.

#### ✅ Merged PRs
- [#39152](https://github.com/sgl-project/sglang/pull/39152) [CI] Install elfutils headers for DeepGEMM wheel builds
- [#37709](https://github.com/sgl-project/sglang/pull/37709) [PD] Transfer the DCP-replicated DSPARK draft KV in DCP1->DCP-N relayouts
- [#39138](https://github.com/sgl-project/sglang/pull/39138) [DeepSeek-V4.1] Commit the engram decode history inside the hash kernel
- [#39035](https://github.com/sgl-project/sglang/pull/39035) [Session] Fix session idle timeout after rejected requests
- [#39029](https://github.com/sgl-project/sglang/pull/39029) [Cookbook][AMD] Kimi-K3 MI350X/MI355X: pin a ROCm image with the DSPARK graph-capture fix, add measured cell numbers
- [#34330](https://github.com/sgl-project/sglang/pull/34330) [AMD] Fix weight checking for AITER-shuffled block FP8 weights
- [#38851](https://github.com/sgl-project/sglang/pull/38851) fix(qsa): make the paged sparse-decode gather memory-safe (zero-fill scratch, int64 offsets, dequant FP8 on gather)
- [#39119](https://github.com/sgl-project/sglang/pull/39119) [sglang-miles] Remove obsolete PD retract guard after rebootstrap support (#25372); squash into 17c3be8e5d (#23672/#23887)
- [#38578](https://github.com/sgl-project/sglang/pull/38578) [LoRA] Support MoE in full and breakable prefill CUDA graphs
- [#38936](https://github.com/sgl-project/sglang/pull/38936) [Fix] Disable NCCL graph buffer registration for the TP LM-head all-to-all (pure-DP decode hang under request bursts)
- [#38585](https://github.com/sgl-project/sglang/pull/38585) [AMD][CI] Skip failing Wave test and relax multi-LoRA output check
- [#38611](https://github.com/sgl-project/sglang/pull/38611) [docs] Add the NVIDIA NVFP4 export to the Qwen3.8-27B cookbook
- [#39106](https://github.com/sgl-project/sglang/pull/39106) [AMD] Use the triton DSA backend for GLM-5.2 MXFP4 on MI355X
- [#38944](https://github.com/sgl-project/sglang/pull/38944) [DSV4.1] Enable the two-level candidate indexer on DeepGEMM's paged sparse MQA logits
- [#34432](https://github.com/sgl-project/sglang/pull/34432) [AMD][DCP 1/N] add dcp support for aiter backend
- [#35503](https://github.com/sgl-project/sglang/pull/35503) [OpenAI] Propagate PD routing metadata through /v1/responses
- [#38756](https://github.com/sgl-project/sglang/pull/38756) [AMD] aiter: resolve SWA KV pool for draft workers + guard paged decode
- [#33939](https://github.com/sgl-project/sglang/pull/33939) [AMD] Add gfx1151 (Strix Halo / Ryzen AI MAX+) Docker image
- [#39101](https://github.com/sgl-project/sglang/pull/39101) Fix stale DSV4 indexer metadata names in the TopK v2 dispatch test
- [#38529](https://github.com/sgl-project/sglang/pull/38529) [Diffusion] Optimize SANA-WM convolution post-processing and streaming GDN
- [#39100](https://github.com/sgl-project/sglang/pull/39100) [PD] Read nixl TransferInfo.is_dummy as a field in unit tests
- [#36612](https://github.com/sgl-project/sglang/pull/36612) [PD] Share the prefill->decode failure notification across backends
- [#38782](https://github.com/sgl-project/sglang/pull/38782) [Diffusion][CI] Expose nightly server telemetry coverage
- [#38533](https://github.com/sgl-project/sglang/pull/38533) [Diffusion] Preserve BF16 rounding in Hopper LTX QKNorm and RoPE fusion
- [#38783](https://github.com/sgl-project/sglang/pull/38783) [Diffusion] Quiet request-path cache diagnostics
- [#39098](https://github.com/sgl-project/sglang/pull/39098) [DSV4.1] Support raw-index output in TopK v2 (port of #33672)
- [#38693](https://github.com/sgl-project/sglang/pull/38693) Add granite_thinking_parser reasoning parser for Granite 4.2
- [#33672](https://github.com/sgl-project/sglang/pull/33672) [DSV4] Support raw-index output in TopK v2
- [#39021](https://github.com/sgl-project/sglang/pull/39021) [Diffusion] Pin layerwise host stores in place at their exact size
- [#38297](https://github.com/sgl-project/sglang/pull/38297) Auto-detect GLM-5.3 chat templates as glm45/glm47 parsers
- [#39068](https://github.com/sgl-project/sglang/pull/39068) [DSV4.1] Fuse DSpark verify compression, indexer and projections
- [#39034](https://github.com/sgl-project/sglang/pull/39034) [Diffusion] Recover IPC JIT initialization after interrupted builds
- [#38827](https://github.com/sgl-project/sglang/pull/38827) [NPU][Hicache] Add Ascend Memcache Hicache L3 storage backend
- [#38807](https://github.com/sgl-project/sglang/pull/38807) [NPU]glm5.2 fp8 memory opt
- [#39077](https://github.com/sgl-project/sglang/pull/39077) [CI] Add CI permissions for PP contributor stepinto
- [#38814](https://github.com/sgl-project/sglang/pull/38814) [Router] Preserve global cache affinity with bucket routing
- [#38269](https://github.com/sgl-project/sglang/pull/38269) [Unified Cache][AMD] Support DeepSeek-V4 unified KV in direct external linkers
- [#38968](https://github.com/sgl-project/sglang/pull/38968) [NPU] Change npu.Dockerfile working directory to /sgl-workspace
- [#39013](https://github.com/sgl-project/sglang/pull/39013) [CI] Trim DSV4 trtllm B200 tests
- [#38993](https://github.com/sgl-project/sglang/pull/38993) [Refactor] Generalize attention graph variants in the decode runner
- [#39044](https://github.com/sgl-project/sglang/pull/39044) [AMD][CI] Temporarily pause MI355X disaggregated nightly
- [#39036](https://github.com/sgl-project/sglang/pull/39036) [ROCm] Raise HiCache JIT block quota for mapped-host throughput
- [#38835](https://github.com/sgl-project/sglang/pull/38835) [HiCache] fix: preserve SWA host lock boundaries across splits
- [#38964](https://github.com/sgl-project/sglang/pull/38964) Keep DSpark SWA paged with encoder bounded replay
- [#38755](https://github.com/sgl-project/sglang/pull/38755) [AMD] aiter: fail loudly on cross-layer KV sharing in target_verify
- [#38446](https://github.com/sgl-project/sglang/pull/38446) [AMD] Fix DeepSeek block-FP8 loading on gfx94x
- [#39019](https://github.com/sgl-project/sglang/pull/39019) [Test] Fix Q8KV8 sparse-prefill pool fixture after page-size rename
- [#34977](https://github.com/sgl-project/sglang/pull/34977) [PD] Add is_dummy truth-table wire tests for mooncake and nixl
- [#38356](https://github.com/sgl-project/sglang/pull/38356) [kv-shard 1/4] Logical-page placement with UnifiedRadixCache
- [#38985](https://github.com/sgl-project/sglang/pull/38985) [API] Fix DeepSeek V4.1 `/v1/responses` empty prompt routing
- [#38963](https://github.com/sgl-project/sglang/pull/38963) Fix DeepSeek-V4.1 VL routing dropping the fused shared expert
- [#38992](https://github.com/sgl-project/sglang/pull/38992) [Bug] Include DSA variant in exact-bucket graph admission
- [#38791](https://github.com/sgl-project/sglang/pull/38791) test(lora): enable ROCm logprob accuracy coverage
- [#38976](https://github.com/sgl-project/sglang/pull/38976) [DeepSeek-V4.1] Optimize small DSpark batches on Blackwell (BS1 803 tok/s)
- [#37394](https://github.com/sgl-project/sglang/pull/37394) [xpu] install xpu-kernel by released wheel
- [#32798](https://github.com/sgl-project/sglang/pull/32798) DFLASH support added for XPU
- [#36278](https://github.com/sgl-project/sglang/pull/36278) [XPU] Add xpu forward in Gemma3RMSNorm & Add test and benchmark for Gemma3RMSNorm
- [#38754](https://github.com/sgl-project/sglang/pull/38754) [AMD] aiter: honor per-layer softmax scale
- [#38957](https://github.com/sgl-project/sglang/pull/38957) Fix HiCache with DeepSeek-V4.1 encoder SWA replay
- [#30548](https://github.com/sgl-project/sglang/pull/30548) Speculative Decoding support for intel_xpu attention backend on XPU target
- [#32093](https://github.com/sgl-project/sglang/pull/32093) [XPU] Adapt device agnostic API usage

#### 🐛 New Issues
- [#39072](https://github.com/sgl-project/sglang/issues/39072) [Bug] GLM-5.3 crash on disagg decode + dp-attention + spec decode 💬2
- [#39103](https://github.com/sgl-project/sglang/issues/39103) [Bug] doesnt support include_reasoning false still produces it in responses, chat completions, completions 💬1
- [#38980](https://github.com/sgl-project/sglang/issues/38980) [Bug] sgl_kernel flash_attn: is_fa3_supported() accepts sm_89 but no sm_89 cubin ships, and `ver` is ignored 💬1
- [#39147](https://github.com/sgl-project/sglang/issues/39147) [Bug] HiCacheFile reports an unrestorable prefix for hybrid cache pools
- [#39125](https://github.com/sgl-project/sglang/issues/39125) [Bug / Security] Potential DFA state explosion and CPU thread hanging in JSON Schema grammar compilation under deeply nested schemas
- [#39107](https://github.com/sgl-project/sglang/issues/39107) [Feature] TRTLLM MLA target verification misses fused FP8 KV/Q preparation in forward_extend
- [#39096](https://github.com/sgl-project/sglang/issues/39096) [Bug] --preferred-sampling-params is inert on /v1/chat/completions (re-report of #21816; the five get_param keys are affected too)
- [#39092](https://github.com/sgl-project/sglang/issues/39092) [Bug] SGLANG_GRAPH_BATCH_CAPTURE mislabels capture traces and crashes with IndexError when a bs bucket captures multiple graphs
- [#39087](https://github.com/sgl-project/sglang/issues/39087) [Bug] Quantized DFlash2 draft silently yields ~0% acceptance — no error, no warning (the quiet counterpart to #36599)
- [#39073](https://github.com/sgl-project/sglang/issues/39073) [Bug] Fatal multimodal processor lookup errors omit processor import failures
- [#39070](https://github.com/sgl-project/sglang/issues/39070) [Bug] FLUX.2 rejects --attention-backend sage_attn: model-level whitelist excludes SAGE_ATTN (regression since #22423)
- [#39063](https://github.com/sgl-project/sglang/issues/39063) [Bug] SM120 grouped FP8 DeepGEMM weight preparation skips UE8M0 requantization
- [#39054](https://github.com/sgl-project/sglang/issues/39054) is_musa() graph-breaks TorchDynamo (gb0069) on the traced prefill path since b6c31b155c, killing tc_piecewise prefill CUDA-graph capture
- [#39042](https://github.com/sgl-project/sglang/issues/39042) [Simulator] OFFLINE mode includes predictor query time in cpu_overhead
- [#38981](https://github.com/sgl-project/sglang/issues/38981) [Bug] Kimi-K3: aborting a request mid-prefill kills every rank — `free_kv_row_segments` asserts "segment at N shares a page with the one ending at N"
- [#38975](https://github.com/sgl-project/sglang/issues/38975) [Bug] GDN packed decode and KDA replay decode round sigmoid(beta) through bf16; recurrent-state drift accumulates with context length
- [#38971](https://github.com/sgl-project/sglang/issues/38971) [Bug][NPU] ForwardBatch use pin_mem cause dp-attn graph hang

#### 🔒 Closed Issues
- [#24703](https://github.com/sgl-project/sglang/issues/24703) [RFC] Refactor weight loading code
- [#30991](https://github.com/sgl-project/sglang/issues/30991) [Feature] sglang cp more than 8
- [#31053](https://github.com/sgl-project/sglang/issues/31053) [Feature] Streaming ASR: sliding window, server-side VAD, and segment-streaming mode
- [#30145](https://github.com/sgl-project/sglang/issues/30145) [Feature] Unified Radix Cache Split: TreeCore
- [#38793](https://github.com/sgl-project/sglang/issues/38793) [Bug] H20 8card can't launch Qwen3.8-Flash-Next-FP8
- [#31045](https://github.com/sgl-project/sglang/issues/31045) [Bug] glm-5.2-w4afp8 with sglang0.5.15 error
- [#30970](https://github.com/sgl-project/sglang/issues/30970) [Diffusion][Realtime] Overlap VAE decode(N) with DiT denoise(N+1) in the realtime causal path?
- [#32897](https://github.com/sgl-project/sglang/issues/32897) [Bug] PD disaggregation misses the handoff token in reasoning usage
- [#35497](https://github.com/sgl-project/sglang/issues/35497) [Bug] /v1/responses endpoint does not support PD disaggregation
- [#35460](https://github.com/sgl-project/sglang/issues/35460) [Bug] /v1/responses returns 400 "texts cannot be empty and tokenizer must be initialized" for multimodal Kimi-K3

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 127,896 · **Open issues:** 2,488 · **Last push:** 2h ago

On September 12, 2026, the llama.cpp project released several updates, most notably version b10917, which addresses a precompiled header issue encountered when using MSVC in the llama-server. Additionally, version b10909 introduced a single-source fusion table for the Metal backend, streamlining op patterns while version b10908 resolved idle thread issues in specific kernels. Key merged features included refactoring the server's subprocess handling and improving the test coverage for quantization functions. However, the day also brought attention to significant new issues, particularly the evaluation bug (#28726) causing crashes in the OpenVINO backend due to AVX-512 instructions, highlighting ongoing challenges in optimizing performance across various architectures.

#### 🚀 New Releases
- [b10917](https://github.com/ggml-org/llama.cpp/releases/tag/b10917) b10917
- [b10909](https://github.com/ggml-org/llama.cpp/releases/tag/b10909) b10909
- [b10908](https://github.com/ggml-org/llama.cpp/releases/tag/b10908) b10908
- [b10907](https://github.com/ggml-org/llama.cpp/releases/tag/b10907) b10907
- [b10906](https://github.com/ggml-org/llama.cpp/releases/tag/b10906) b10906
- [b10905](https://github.com/ggml-org/llama.cpp/releases/tag/b10905) b10905
- [b10903](https://github.com/ggml-org/llama.cpp/releases/tag/b10903) b10903
- [b10902](https://github.com/ggml-org/llama.cpp/releases/tag/b10902) b10902

#### ✅ Merged PRs
- [#28555](https://github.com/ggml-org/llama.cpp/pull/28555) server: refactor subproc handling
- [#28301](https://github.com/ggml-org/llama.cpp/pull/28301) metal : skip the empty half of the mul_mm_id token tile, load iq2/iq3 codebooks as uint32
- [#28740](https://github.com/ggml-org/llama.cpp/pull/28740) ci : run test-backend-ops as a dedicated ci/run.sh test
- [#28763](https://github.com/ggml-org/llama.cpp/pull/28763) cmake : skip PCH for llama-server PCH when using MSVC
- [#16234](https://github.com/ggml-org/llama.cpp/pull/16234) Tests: extend test-quantize-fns to test nrc=2 (i8mm) kernels
- [#28091](https://github.com/ggml-org/llama.cpp/pull/28091) cmake : add PCH and unity build to improve build times
- [#28759](https://github.com/ggml-org/llama.cpp/pull/28759) server: fix Windows CI flake in test_completion_unified
- [#28739](https://github.com/ggml-org/llama.cpp/pull/28739) ggml: skip 0-sized ids tensor when offloading selected experts
- [#28750](https://github.com/ggml-org/llama.cpp/pull/28750) common : fix typo in speculative.cpp comment [no ci]
- [#28715](https://github.com/ggml-org/llama.cpp/pull/28715) server: fix speculation after an image
- [#28164](https://github.com/ggml-org/llama.cpp/pull/28164) metal : single-source fusion table + fusion debug rework
- [#28692](https://github.com/ggml-org/llama.cpp/pull/28692) metal : fix idle threads in the remaining iq mul_mv kernels for ne00 < 1024
- [#28630](https://github.com/ggml-org/llama.cpp/pull/28630) model : fix MTP context kv cache allocation for deepseek2, glm4moe, c…
- [#28102](https://github.com/ggml-org/llama.cpp/pull/28102) CUDA/HIP: Flash Attention tuning (gfx1201)
- [#28708](https://github.com/ggml-org/llama.cpp/pull/28708) ci : key cache to sanitizer matrix
- [#28705](https://github.com/ggml-org/llama.cpp/pull/28705) vulkan: fix data race and OOB access in argsort(large)

#### 🐛 New Issues
- [#28726](https://github.com/ggml-org/llama.cpp/issues/28726) Eval bug: OpenVINO backend crashes with STATUS_ILLEGAL_INSTRUCTION due to AVX-512 `bug-unconfirmed` 💬6
- [#28773](https://github.com/ggml-org/llama.cpp/issues/28773) Feature Request: do not hide the build or version number anymore `enhancement`
- [#28752](https://github.com/ggml-org/llama.cpp/issues/28752) Misc. bug: Severe drop in prompt processing speed after b10780 on Vulkan, RDNA3 `bug-unconfirmed` 💬3
- [#28758](https://github.com/ggml-org/llama.cpp/issues/28758) Windows/MSVC: llama-server link fails with LNK2001 unresolved external "__" after #28091 (WINDOWS_EXPORT_ALL_SYMBOLS + PCH) 💬2
- [#28745](https://github.com/ggml-org/llama.cpp/issues/28745) Eval bug: Qwen3.8 model has unused tensor `bug-unconfirmed` 💬2
- [#28790](https://github.com/ggml-org/llama.cpp/issues/28790) Eval bug: MTP (--spec-type draft-mtp) causes ~57x prefill slowdown on a self-compiled Windows build (MSVC + CUDA 12.8) 💬1
- [#28772](https://github.com/ggml-org/llama.cpp/issues/28772) Refactor: continue modularization of model code 💬1
- [#28744](https://github.com/ggml-org/llama.cpp/issues/28744) Eval bug: W srv stop: cancel task, id_task = 55354 `bug-unconfirmed` 💬1
- [#28761](https://github.com/ggml-org/llama.cpp/issues/28761) [CUDA] sm_75 FA mma-f16: 32-token Q-tile cap is suboptimal — register spill at head_dim=256, missed gain at head_dim=128 💬1
- [#28760](https://github.com/ggml-org/llama.cpp/issues/28760) [CUDA] sm_75 (Turing) uses the Ampere mmq config table — A/B results on the hot path, plus two crashing configs 💬1
- [#28788](https://github.com/ggml-org/llama.cpp/issues/28788) [MSVC] \uHHHH escapes in BPE pre-tokenizer patterns abort model load (regex_error)
- [#28786](https://github.com/ggml-org/llama.cpp/issues/28786) Eval bug: minja does not support numeric dotted attribute access (x.0), making jinja caps return all-false
- [#28783](https://github.com/ggml-org/llama.cpp/issues/28783) Misc. bug: internal MCP server does not handle non-text results `bug-unconfirmed`
- [#28778](https://github.com/ggml-org/llama.cpp/issues/28778) SYCL: DFlash2 draft model triggers GPU driver TDR reset (VIDEO_TDR_TIMEOUT_DETECTED) on dual Arc Pro B70
- [#28777](https://github.com/ggml-org/llama.cpp/issues/28777) DFlash2 + --split-mode tensor: GGML_ASSERT crash in ggml-backend-meta.cpp (works fine with --split-mode layer)
- [#28774](https://github.com/ggml-org/llama.cpp/issues/28774) Misc. bug: Race condition in router scheduler during concurrent cold-start with --models-max 1 `bug-unconfirmed`
- [#28768](https://github.com/ggml-org/llama.cpp/issues/28768) Eval bug: HIP/ROCm on Windows gfx1201 (R9700), batched target scoring changes logits/top-1; Vulkan control is stable `bug-unconfirmed`
- [#28765](https://github.com/ggml-org/llama.cpp/issues/28765) Eval bug: Multi-GPU SYCL decode crash with false OOM if output tensor is on device with non-zero index `bug-unconfirmed`
- [#28756](https://github.com/ggml-org/llama.cpp/issues/28756) Eval bug: Qwen-AgentWorld-35B-A3B (qwen35moe MoE) SIGILL on CPU inference (llama-cpp-python cu124 wheel, AMD Zen5, AMX_INT8=1 reported but unsupported)
- [#28753](https://github.com/ggml-org/llama.cpp/issues/28753) Misc. bug: ggml crash - ggml_backend_sched_alloc_splits: unexpected graph reallocation `bug-unconfirmed`
- [#28734](https://github.com/ggml-org/llama.cpp/issues/28734) Eval bug: qwen4exp (Qwen3.8-Flash-Next) CUDA: decode slows linearly with context `bug-unconfirmed`
- [#28733](https://github.com/ggml-org/llama.cpp/issues/28733) Feature Request: reduce memory requirements for llama-perplexity on large context sizes (from O(ctx*vocab) to O(vocab)) `enhancement`
- [#28728](https://github.com/ggml-org/llama.cpp/issues/28728) Eval bug: SYCL: bad output on Qwen3.6 35B A3B `bug-unconfirmed`

#### 🔒 Closed Issues
- [#26208](https://github.com/ggml-org/llama.cpp/issues/26208) Misc. bug: VRAM does not allocate with ROCm 7.14 on gfx1201
- [#28590](https://github.com/ggml-org/llama.cpp/issues/28590) Misc. bug: Vulkan Validation Error VUID-RuntimeSpirv-cooperativeMatrixFlexibleDimensionsMaxDimension-10167 on Intel B70 Linux
- [#24701](https://github.com/ggml-org/llama.cpp/issues/24701) UI: Improve accessibility for screenreaders: Not able to delete old conversations
- [#24680](https://github.com/ggml-org/llama.cpp/issues/24680) Misc. bug: Web-UI uploaded images are not width-constrained
- [#25511](https://github.com/ggml-org/llama.cpp/issues/25511) Eval bug: regex misses quoted tokens
- [#28758](https://github.com/ggml-org/llama.cpp/issues/28758) Windows/MSVC: llama-server link fails with LNK2001 unresolved external "__" after #28091 (WINDOWS_EXPORT_ALL_SYMBOLS + PCH)
- [#28745](https://github.com/ggml-org/llama.cpp/issues/28745) Eval bug: Qwen3.8 model has unused tensor
- [#25015](https://github.com/ggml-org/llama.cpp/issues/25015) Misc. bug: backend sampling has to be explicitly enabled in server ui even when specified via cli
- [#26100](https://github.com/ggml-org/llama.cpp/issues/26100) Misc. bug: speculative draft-cache replay path bypasses p_min - inflates repeated-prompt benchmarks ~10x, degrades mixed-traffic serving ~3x
- [#26197](https://github.com/ggml-org/llama.cpp/issues/26197) Eval bug: Vulkan - Using multiple AMD GPUs lead to gibberish output
- [#28744](https://github.com/ggml-org/llama.cpp/issues/28744) Eval bug: W srv stop: cancel task, id_task = 55354
- [#24761](https://github.com/ggml-org/llama.cpp/issues/24761) Misc. bug: Bug of how web-ui provides MCP server to model
- [#25279](https://github.com/ggml-org/llama.cpp/issues/25279) Misc. bug: Releases are not created for UI only PRs
- [#26169](https://github.com/ggml-org/llama.cpp/issues/26169) server: inconsistent `created` timestamp in `/v1/models` endpoint breaks client caching
- [#26186](https://github.com/ggml-org/llama.cpp/issues/26186) Compile bug: ggml-cpu: clang-cl build fails with GGML_AVX_VNNI (alderlake variant of GGML_CPU_ALL_VARIANTS): always_inline requires target feature 'avxvnni'
- [#26188](https://github.com/ggml-org/llama.cpp/issues/26188) Eval bug: CUDA 5060
- [#26195](https://github.com/ggml-org/llama.cpp/issues/26195) Eval bug: Vulkan flash-attn produces garbled output with quantized V cache on head_dim=256 models (Adreno X1-85)
- [#26200](https://github.com/ggml-org/llama.cpp/issues/26200) CPU decode: GGML_OPENMP=ON with mingw-w64 libgomp costs ~40% on small-op-heavy graphs (every graph barrier is a kernel semaphore; the port cannot spin)
- [#26205](https://github.com/ggml-org/llama.cpp/issues/26205) Eval bug: Silent crash during/before server initialization on RTX 5060 (sm_120) using Andgihat Blackwell build
- [#28626](https://github.com/ggml-org/llama.cpp/issues/28626) Misc. bug: MTP draft context allocates KV for every layer (deepseek2 / glm4moe / cohere2moe)

### Ollama (`ollama/ollama`)

**Stars:** 180,700 · **Open issues:** 3,965 · **Last push:** 3h ago

On September 12, 2026, there were no new releases for Ollama, but several significant updates came from the merged pull requests. Notably, the team merged PR #18376, which keeps the Gemma3n projector off the CPU to optimize performance, and PR #18393, which removed the built-in agent, potentially streamlining command usage. Among new issues, the most pressing is #18385, which requests the exposure of per-model metadata in the model API to align with offerings from other providers, highlighting a need for enhanced model management capabilities. Other reported concerns include the Gemma 4 E4B multimodal projector causing out-of-memory issues on the Jetson Orin Nano and persistent problems with cloud model performance after about 45 minutes.

#### ✅ Merged PRs
- [#18376](https://github.com/ollama/ollama/pull/18376) llm: keep gemma3n projector off the CPU
- [#18393](https://github.com/ollama/ollama/pull/18393) cmd: remove built-in agent

#### 🐛 New Issues
- [#18385](https://github.com/ollama/ollama/issues/18385) ollama-cloud: expose per-model metadata in the model API mirroring other providers `feature request` 💬3
- [#18387](https://github.com/ollama/ollama/issues/18387) More than ten ellipses between Titles and Page Numbers in Table of Contents will cause ollama 'cancel task' `bug` 💬1
- [#18390](https://github.com/ollama/ollama/issues/18390) gemma4: tool-call object keys containing spaces are left unquoted by the parser and the whole call is dropped as an empty response 💬1
- [#18379](https://github.com/ollama/ollama/issues/18379) deepseek-v4.1-flash Downloadable Model `model` 💬1
- [#18381](https://github.com/ollama/ollama/issues/18381) Cloud models wedge after ~45 min on 0.34.0 (502, no error); 0.33.1 works 💬1
- [#18396](https://github.com/ollama/ollama/issues/18396) Jetson Orin Nano 8GB: Gemma 4 E4B multimodal projector causes host OOM, despite successful CPU-projector configuration `bug`
- [#18394](https://github.com/ollama/ollama/issues/18394) Include the served manifest digest in local /api/chat responses (tested v0.34.0 patch)
- [#18392](https://github.com/ollama/ollama/issues/18392) Sustained `/api/embed` load exhausts loopback ports on Windows: llama-server HTTP client has keep-alive disabled

#### 🔒 Closed Issues
- [#18344](https://github.com/ollama/ollama/issues/18344) ollama serve leaks one file descriptor per successfully served /api/generate request
- [#15412](https://github.com/ollama/ollama/issues/15412) Model files for glm-5.1 for downloading and offline usage

### LiteLLM (`BerriAI/litellm`)

**Stars:** 58,537 · **Open issues:** 5,047 · **Last push:** <1h ago

On September 12, 2026, LiteLLM released version v1.102.0-dev.2, with all Docker images now signed using cosign for enhanced security verification. Significant features merged included the addition of new UI links for organization identifiers in various sections, such as Deleted Teams, Prompts, Memory, and API responses, as well as enhancements to the OCR component with new Azure and Vertex adapters. Key fixes addressed issues in cost mapping, UI navigation, and logging, notably the reversion of credential coverage lost due to recent entropy limits. Among the newly reported issues, a notable bug was identified where the bedrock_converse command rejects follow-up turns when tool-call history is included without a corresponding tools array, highlighting potential disruption in agent interactions.

#### 🚀 New Releases
- [v1.102.0-dev.2](https://github.com/BerriAI/litellm/releases/tag/v1.102.0-dev.2) v1.102.0-dev.2

#### ✅ Merged PRs
- [#40751](https://github.com/BerriAI/litellm/pull/40751) feat(ui): link the Organization and Deleted By cells on Deleted Teams
- [#40753](https://github.com/BerriAI/litellm/pull/40753) feat(ui): link the Created By cell on the Prompts page
- [#40750](https://github.com/BerriAI/litellm/pull/40750) feat(ui): link the User ID, Created By and Deleted By cells on Deleted Keys
- [#40752](https://github.com/BerriAI/litellm/pull/40752) feat(ui): link the User ID and Team ID cells on the Memory page
- [#40811](https://github.com/BerriAI/litellm/pull/40811) docs(pr-template): note untested assumptions under Caveats
- [#40749](https://github.com/BerriAI/litellm/pull/40749) feat(ui): link the Organization cell on the Teams page
- [#40793](https://github.com/BerriAI/litellm/pull/40793) fix(otel v2): name Langfuse traces from the langfuse_trace_name header or metadata.trace_name
- [#40792](https://github.com/BerriAI/litellm/pull/40792) feat(proxy): expose complexity routing headers
- [#40482](https://github.com/BerriAI/litellm/pull/40482) test(load): add a Redis timeout chaos load test
- [#40777](https://github.com/BerriAI/litellm/pull/40777) feat(rust): count tiktoken cl100k_base admission tokens in Rust
- [#40190](https://github.com/BerriAI/litellm/pull/40190) fix(hide-secrets): restore credential coverage lost to the 4.5 entropy limit
- [#39699](https://github.com/BerriAI/litellm/pull/39699) fix(guardrails): stop logging the request payload as guardrail_response on pre_call hooks
- [#40794](https://github.com/BerriAI/litellm/pull/40794) feat(rust): count tiktoken o200k_base admission tokens in Rust
- [#40748](https://github.com/BerriAI/litellm/pull/40748) fix(vertex_ai): return 400 for invalid reasoning_effort instead of 500
- [#40509](https://github.com/BerriAI/litellm/pull/40509) feat(ocr): add Vertex DeepSeek adapter and remove legacy OCR pipeline
- [#40507](https://github.com/BerriAI/litellm/pull/40507) feat(ocr): add Vertex Mistral adapter
- [#40535](https://github.com/BerriAI/litellm/pull/40535) feat(ocr): add Reducto legacy and v3 adapters
- [#40534](https://github.com/BerriAI/litellm/pull/40534) feat(ocr): add Azure Document Intelligence adapter
- [#40502](https://github.com/BerriAI/litellm/pull/40502) feat(ocr): add Azure Mistral adapter with native authentication
- [#40644](https://github.com/BerriAI/litellm/pull/40644) fix(ui): jump straight to the last Request Logs page instead of advancing one page
- [#40786](https://github.com/BerriAI/litellm/pull/40786) test(responses): fix stale Anthropic smoke request
- [#40740](https://github.com/BerriAI/litellm/pull/40740) fix(cost-map): bedrock reasoning effort flags, registry audit fixes for vertex/openai/together/openrouter, absorb cerebras and inception rows
- [#40760](https://github.com/BerriAI/litellm/pull/40760) fix(content_filter): log only scan time as streaming post_call guardrail duration
- [#39697](https://github.com/BerriAI/litellm/pull/39697) fix(policy_engine): run global policy pipelines before scoped ones
- [#40779](https://github.com/BerriAI/litellm/pull/40779) fix(search): propagate GET provider HTTP errors
- [#40666](https://github.com/BerriAI/litellm/pull/40666) fix(datadog_llm_obs): keep tool call and result structure under redaction and emit tool output tokens
- [#40533](https://github.com/BerriAI/litellm/pull/40533) feat(ocr): add Azure Mistral adapter and document fetching
- [#40555](https://github.com/BerriAI/litellm/pull/40555) fix(mcp): write failure spend log for guardrail-blocked /mcp-rest/tools/call
- [#40330](https://github.com/BerriAI/litellm/pull/40330) feat(auto-router): show the routed model and session savings in Claude Code and Codex
- [#40532](https://github.com/BerriAI/litellm/pull/40532) refactor(ocr): route native requests through core
- [#40754](https://github.com/BerriAI/litellm/pull/40754) test(e2e): wait for serving propagation in UI journeys
- [#40554](https://github.com/BerriAI/litellm/pull/40554) fix(proxy): retain metadata when retrieving public team aliases
- [#40558](https://github.com/BerriAI/litellm/pull/40558) fix(proxy): keep call_type and request start time on failed-request spend logs
- [#40757](https://github.com/BerriAI/litellm/pull/40757) fix(router): fall back from unhealthy auto-router tier
- [#39548](https://github.com/BerriAI/litellm/pull/39548) fix(proxy): authorize every Responses API id, not only the ones the proxy issued
- [#39523](https://github.com/BerriAI/litellm/pull/39523) fix(ai-gateway): build the release image again and cover it in CI
- [#39516](https://github.com/BerriAI/litellm/pull/39516) fix(vector-stores): surface retrieval failures to the API caller
- [#39507](https://github.com/BerriAI/litellm/pull/39507) fix(oci): pin one response id per streamed completion, skip the [DONE] sentinel
- [#40440](https://github.com/BerriAI/litellm/pull/40440) fix(mcp): log upstream request method, body and response on tool-list and OAuth2 token failures
- [#40679](https://github.com/BerriAI/litellm/pull/40679) fix(mcp): explain refused OAuth registration and bound discovery retries
- [#40663](https://github.com/BerriAI/litellm/pull/40663) docs(router): name both affinity TTL knobs in the _claim_pin docstring
- [#40687](https://github.com/BerriAI/litellm/pull/40687) perf(proxy): register liveness and core inference routes first
- [#40725](https://github.com/BerriAI/litellm/pull/40725) feat(proxy): make the in-memory management cache capacity configurable
- [#40475](https://github.com/BerriAI/litellm/pull/40475) feat(secret_managers): support customer-managed KMS key for virtual keys stored in AWS Secrets Manager
- [#40724](https://github.com/BerriAI/litellm/pull/40724) fix(passthrough): parse Bedrock stream spend incrementally instead of buffering the whole response
- [#40713](https://github.com/BerriAI/litellm/pull/40713) fix(proxy): give user-key objects their own in-memory cache partition
- [#40691](https://github.com/BerriAI/litellm/pull/40691) perf(proxy): lazy-load provider passthrough routes
- [#40606](https://github.com/BerriAI/litellm/pull/40606) fix(model_prices): registry audit rolling PR: deepseek-flash, gpt-live-1, xAI/Groq deprecation dates, Perplexity Nemotron reasoning
- [#40665](https://github.com/BerriAI/litellm/pull/40665) fix(mcp): check OpenAPI specifications without native MCP handshakes
- [#40664](https://github.com/BerriAI/litellm/pull/40664) fix(mcp): accept VS Code OAuth registration callbacks
- [#40624](https://github.com/BerriAI/litellm/pull/40624) fix(caching): keep an open Redis circuit breaker open and quiet on the sync read and spend counter paths
- [#40658](https://github.com/BerriAI/litellm/pull/40658) chore(ci): promote internal staging to main
- [#40655](https://github.com/BerriAI/litellm/pull/40655) fix(auto-router): omit Claude Code system text from classifier
- [#40647](https://github.com/BerriAI/litellm/pull/40647) feat(ui): link the entity cells on the team detail page's keys table
- [#40660](https://github.com/BerriAI/litellm/pull/40660) fix(helm): give the collector sidecar the pod PgBouncer env when database.connectionPool is enabled
- [#40630](https://github.com/BerriAI/litellm/pull/40630) chore: bump litellm-proxy-extras 0.4.95 -> 0.4.96
- [#40650](https://github.com/BerriAI/litellm/pull/40650) fix(streaming): keep admitted mock streams alive with empty stream_options and honor zero prompt counts
- [#40643](https://github.com/BerriAI/litellm/pull/40643) test: respect optional logging payload fields
- [#40646](https://github.com/BerriAI/litellm/pull/40646) feat(ui): link the Team, Organization, User and Created By cells on the Virtual Keys page
- [#39869](https://github.com/BerriAI/litellm/pull/39869) fix(logging): finish response metadata before the sync logging thread reads it

#### 🐛 New Issues
- [#40735](https://github.com/BerriAI/litellm/issues/40735) [Bug]: bedrock_converse rejects agent follow-up turns that carry tool-call history without a tools array `llm translation` 💬3
- [#40761](https://github.com/BerriAI/litellm/issues/40761) [Bug]: Config-file models are evicted and never restored when litellm_params changes (store_model_in_db) 💬1
- [#40728](https://github.com/BerriAI/litellm/issues/40728) [Bug]: Azure AI model router no cost tracking `bug` `proxy` `llm translation` 💬1
- [#40654](https://github.com/BerriAI/litellm/issues/40654) [Bug]: Responses-to-Chat bridge drops raw reasoning_text in streaming and non-streaming results `proxy` `llm translation` 💬1
- [#40649](https://github.com/BerriAI/litellm/issues/40649) [Bug]: Admin UI model edit persists derived pricing; price-map reload then records Azure spend as $0` `bug` `proxy` `llm translation` 💬1
- [#40651](https://github.com/BerriAI/litellm/issues/40651) [Bug]: lite codex silently bypasses the proxy when -c is passed after a Codex subcommand (exec/resume/review) `llm translation` 💬1
- [#40675](https://github.com/BerriAI/litellm/issues/40675) [Bug]: cache_control_injection_points silently dropped entirely when client marks cache_control on an unrelated message `llm translation` 💬1
- [#40783](https://github.com/BerriAI/litellm/issues/40783) [Bug]: Updating team_member_budget silently does not apply to existing team members
- [#40780](https://github.com/BerriAI/litellm/issues/40780) [Bug]: openai/-prefixed self-hosted models route /v1/messages to the Responses API, silently breaking multimodal `llm translation`
- [#40746](https://github.com/BerriAI/litellm/issues/40746) [Feature]: Add inception/mercury-2.5 pricing and model settings to the model cost map `enhancement` `proxy` `llm translation`
- [#40741](https://github.com/BerriAI/litellm/issues/40741) [Bug]: model_info keys present but None block cost-map enrichment, silently disabling budget reservation `llm translation`
- [#40736](https://github.com/BerriAI/litellm/issues/40736) [Bug]: Streaming usage merger retains stale cache-write tokens after explicit zero update `bug` `proxy` `llm translation`
- [#40722](https://github.com/BerriAI/litellm/issues/40722) [Bug]: Terraform provider rejects legitimate 2xx responses (201/202) from litellm_mcp_server `bug`
- [#40706](https://github.com/BerriAI/litellm/issues/40706) [Bug]: Terraform litellm_vector_store fails to create, and its attributes never read back `proxy` `llm translation`
- [#40705](https://github.com/BerriAI/litellm/issues/40705) [Bug]: Terraform provider stores an empty key_alias, then every other aliasless key fails to update `proxy`
- [#40704](https://github.com/BerriAI/litellm/issues/40704) [Bug]: Terraform provider cannot update a virtual key that has no team `proxy`
- [#40693](https://github.com/BerriAI/litellm/issues/40693) [Bug]: Anthropic /v1/messages -> Responses -> Chat Completions can emit non-leading system messages `bug` `proxy` `llm translation` `claude code`
- [#40689](https://github.com/BerriAI/litellm/issues/40689) [Bug]: anthropic streaming: chunk_parser KeyError 'text' when content_block_start omits text field (non-compliant upstreams) `llm translation`
- [#40692](https://github.com/BerriAI/litellm/issues/40692) Bug]: generateContent route ignores vertex_location and applies the wrong regional cost uplift `bug` `proxy` `llm translation`
- [#40688](https://github.com/BerriAI/litellm/issues/40688) [Feature]: `enhancement` `ui-dashboard`
- [#40681](https://github.com/BerriAI/litellm/issues/40681) [Bug]: Bedrock Converse silently drops OpenAI `video_url` content (inline data URI never mapped to VideoBlock) `bug` `llm translation` `SDK`
- [#40678](https://github.com/BerriAI/litellm/issues/40678) sirf ek hi bar start hua he uske bad stat hi nhai h irha he or linits bhi de rha he linit less banao `bug`

#### 🔒 Closed Issues
- [#19384](https://github.com/BerriAI/litellm/issues/19384) [Bug]: litellm.BadRequestError: BedrockException
- [#27171](https://github.com/BerriAI/litellm/issues/27171) [Bug] ResetBudgetJob crashes globally due to budget_limits list not being serialized to JSON in jsonify_object
- [#27300](https://github.com/BerriAI/litellm/issues/27300) [Bug]: max_budget is ignored after reset
- [#27835](https://github.com/BerriAI/litellm/issues/27835) support for aws external id is missing for bedrock embedding
- [#29831](https://github.com/BerriAI/litellm/issues/29831) Neural Network Notebook Fails on Full Dataset Due to Memory Exhaustion
- [#40553](https://github.com/BerriAI/litellm/issues/40553) bug(proxy): public team aliases omit model metadata from /v1/models
- [#40578](https://github.com/BerriAI/litellm/issues/40578) [Bug]: OpenAI-compatible streaming chunk_parser silently drops in-band `data: {"error": ...}` events (returns empty success instead of raising)
- [#40474](https://github.com/BerriAI/litellm/issues/40474) [Bug]: invalid reasoning_effort on Gemini/Vertex raises a bare ValueError and returns HTTP 500 instead of a 400
- [#40580](https://github.com/BerriAI/litellm/issues/40580) Datadog Observability - Cost & Auto-router - Follow-up request for PR #39320

### Unsloth (`unslothai/unsloth`)

**Stars:** 76,039 · **Open issues:** 1,383 · **Last push:** 1h ago

On September 12, 2026, there were no new releases for Unsloth; however, several significant improvements were merged, including a fix for conflicting model loading settings (#10756) and updates that allow unsloth chat and MLX paths to exceed their previous token limits (#10665). The Windows installer was enhanced to ensure installations proceed smoothly even when user profile paths contain spaces (#10765). Notably, a new issue was reported regarding the SFTConfig.__init__() method encountering an unexpected keyword argument 'max_seq_length' (#10785), highlighting potential integration challenges with model configuration. Overall, the day focused on enhancing usability and stability, with a keen eye on ongoing integration concerns.

#### ✅ Merged PRs
- [#10756](https://github.com/unslothai/unsloth/pull/10756) Reject conflicting model loading settings
- [#10665](https://github.com/unslothai/unsloth/pull/10665) Stop capping unsloth chat at 512 tokens and the transformers/MLX paths at 2048
- [#10765](https://github.com/unslothai/unsloth/pull/10765) Windows installer: fix installs when the user profile path contains a space
- [#10734](https://github.com/unslothai/unsloth/pull/10734) fix(dataprep): don't append EOS to full-size mid-stride chunks
- [#10761](https://github.com/unslothai/unsloth/pull/10761) Studio: Show an error when chat history cannot be restored
- [#10762](https://github.com/unslothai/unsloth/pull/10762) Studio: Keep images returned by tools
- [#10757](https://github.com/unslothai/unsloth/pull/10757) Studio: Show Anthropic web search errors
- [#10706](https://github.com/unslothai/unsloth/pull/10706) Studio: narrower desktop window and a sidebar edge trigger
- [#10717](https://github.com/unslothai/unsloth/pull/10717) Studio: keep long reasoning responsive with bounded pages
- [#10760](https://github.com/unslothai/unsloth/pull/10760) Upload merged models to the requested branch or pull request

#### 🐛 New Issues
- [#10785](https://github.com/unslothai/unsloth/issues/10785) SFTConfig.__init__() got an unexpected keyword argument 'max_seq_length' `feature request` `bug` 💬1
- [#10801](https://github.com/unslothai/unsloth/issues/10801) [Feature] Plugin / Integration Store for Unsloth Studio 💬1
- [#10817](https://github.com/unslothai/unsloth/issues/10817) [Bug] Unsloth Studio / Desktop: the Run settings sidebar and the model dropdown's Run settings page keep separate drafts and silently disagree 💬1
- [#10768](https://github.com/unslothai/unsloth/issues/10768) [Bug] CUDA error: CUBLAS_STATUS_NOT_INITIALIZED during FLUX.2 Klein VAE decoding in pipeline_flux2_klein `feature request` `bug` 💬1
- [#10777](https://github.com/unslothai/unsloth/issues/10777) [Feature] Automatic model routing for Planner, Worker and Verifier agents
- [#10769](https://github.com/unslothai/unsloth/issues/10769) [Bug] Unsloth Desktop Large Codeblocks Causes Lots of Lag in Interface `feature request` `bug` 💬1
- [#10824](https://github.com/unslothai/unsloth/issues/10824) [Feature / Bug] Voice Typing over LAN does not work `feature request`
- [#10822](https://github.com/unslothai/unsloth/issues/10822) [Feature] One Click MCP Installs from an MCP Hub + Allow MCPs when Remote Access is On `feature request`
- [#10821](https://github.com/unslothai/unsloth/issues/10821) [Bug] Manual GPU mode logs `--fit: on` while passing `--fit off`, making a normal launch look like a failed GPU probe
- [#10807](https://github.com/unslothai/unsloth/issues/10807) [Feature] Unsloth Cumulative Token Usage Tracker needs Actual Line Graphs `feature request`
- [#10806](https://github.com/unslothai/unsloth/issues/10806) GPU idle for most of each step training a Qwen3.5-9B LoRA with unsloth-cli.py on B200: fla rebuilt its autotune key on every launch
- [#10805](https://github.com/unslothai/unsloth/issues/10805) [Bug] install.ps1 is flagged by antivirus, unable to proceed with update via powershell `feature request` `bug`
- [#10800](https://github.com/unslothai/unsloth/issues/10800) [Feature] Native Browser Use / Browser Automation tool for Unsloth Studio agents
- [#10795](https://github.com/unslothai/unsloth/issues/10795) [Unsloth Bug] X11 + NVIDIA: WebKitWebProcess leaks DMA-BUF sync_file fds until EMFILE — blank/frozen window (looks like a hang)
- [#10793](https://github.com/unslothai/unsloth/issues/10793) Improve default Studio and llama-server logs for troubleshooting
- [#10792](https://github.com/unslothai/unsloth/issues/10792) [Unsloth Bug] Duplicate tool-call guard blocks re-running a command after files changed (e.g. re-running tests after an edit) `feature request` `bug`
- [#10791](https://github.com/unslothai/unsloth/issues/10791) [Unsloth Bug] Replayed tool calls sort argument keys, so llama-server re-processes every multi-parameter call (edit_file) `feature request` `bug`
- [#10787](https://github.com/unslothai/unsloth/issues/10787) [Bug] Unsupported parameter: 'max_tokens' instead of 'max_completion_tokens'. `feature request` `bug`
- [#10786](https://github.com/unslothai/unsloth/issues/10786) [Bug] On web browser, UI returns 404 on loopback (127.0.0.1 / localhost) but serves fine on LAN IP `feature request` `bug`
- [#10776](https://github.com/unslothai/unsloth/issues/10776) [Feature] Native multi-agent orchestration with Supervisor and local Subagents
- [#10775](https://github.com/unslothai/unsloth/issues/10775) [Feature] Persistent Project and Agent Memory with explicit local controls
- [#10774](https://github.com/unslothai/unsloth/issues/10774) [Feature] Native Skills system with versioning, updates and reusable Skill Packs
- [#10773](https://github.com/unslothai/unsloth/issues/10773) [Feature] Native Agent Builder with reusable Agent Profiles in Unsloth Studio
- [#10772](https://github.com/unslothai/unsloth/issues/10772) RFC: Ascend NPU (昇腾) backend support for unsloth
- [#10767](https://github.com/unslothai/unsloth/issues/10767) [Feature] Inject Message During Generation `feature request`

#### 🔒 Closed Issues
- [#10479](https://github.com/unslothai/unsloth/issues/10479) [Bug] Model Thinks It's Running Low on Tool Calls / Has a Budget
- [#10722](https://github.com/unslothai/unsloth/issues/10722) [Bug] Problems with the Windows/Powershe installer if your username profile contains spaces.

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,083 · **Open issues:** 374 · **Last push:** 1h ago

On September 12, 2026, AIBrix did not release new versions but saw significant activity in merged pull requests. Notably, PR #2701 addressed a bug concerning the Helm chart drift by fixing the missing modelclaims CRD, stale RBAC, and broken vedeployment webhook, enhancing the deployment stability. Additionally, PR #2711 introduced a path-based PR labeler, while PR #2707 made the AIBrix Bot's PR validation advisory, streamlining development workflows. Among new issues, #2708 focuses on adding Gateway Plugin integration and functional regression coverage, indicating a move towards enhancing the project's testing capabilities. Overall, the day was marked by maintenance-focused improvements and preparations for future features.

#### ✅ Merged PRs
- [#2711](https://github.com/vllm-project/aibrix/pull/2711) [Misc] Add path-based PR labeler
- [#2701](https://github.com/vllm-project/aibrix/pull/2701) [Bug] Fix Helm chart drift: missing modelclaims CRD, stale RBAC, and broken vedeployment webhook
- [#2707](https://github.com/vllm-project/aibrix/pull/2707) [Misc] Make AIBrix Bot PR validation advisory

#### 🐛 New Issues
- [#2708](https://github.com/vllm-project/aibrix/issues/2708) [TEST] Add Gateway Plugin integration and functional regression coverage `area/gateway` `area/testing` `testing` 💬1

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 5,741 · **Open issues:** 551 · **Last push:** 5h ago

On September 12, 2026, Semantic Router did not release any new versions, but several key features were merged that enhance the router's functionality. Notably, PR #3495 introduced a bounded router generation drain on shutdown, while PR #3729 added the functionality to return routing latency and cost as response headers. Additionally, PR #3701 delivered info-level per-request signal/decision phase timing events, and PR #3724 unified agent routing and benchmark contracts. Among the new issues, #3741 raised concerns about the visual distinction of the live model verification success dot, indicating a need for improved UI clarity.

#### ✅ Merged PRs
- [#3495](https://github.com/vllm-project/semantic-router/pull/3495) [Feature] Add bounded router generation drain on shutdown
- [#3729](https://github.com/vllm-project/semantic-router/pull/3729) [Feature] Return routing latency and cost as response headers
- [#3701](https://github.com/vllm-project/semantic-router/pull/3701) [Feature] Add info-level per-request signal/decision phase timing events
- [#3724](https://github.com/vllm-project/semantic-router/pull/3724) [Feature] unify agent routing and benchmark contracts

#### 🐛 New Issues
- [#3741](https://github.com/vllm-project/semantic-router/issues/3741) [Enhancement] Live model verification success dot is not visually distinct from idle state `enhancement` `accepted` `in-progress` `wg/developer-experience-ecosystem` 💬4
- [#3742](https://github.com/vllm-project/semantic-router/issues/3742) [Enhancement]: Improve the field position or orientation while checking the Model Live Status `enhancement` `good first issue` `help wanted` `accepted` 💬3
- [#3738](https://github.com/vllm-project/semantic-router/issues/3738) [Bug] External-API RAG keeps only the first query window `bug` `accepted` `wg/router-models-inference-runtime` 💬2
- [#3728](https://github.com/vllm-project/semantic-router/issues/3728) [Feature] Return routing latency and cost as response headers `enhancement` `accepted` `wg/mom-routing` 💬2
- [#3722](https://github.com/vllm-project/semantic-router/issues/3722) [Bug] The generated config schema is stale after the Fusion analysis mode field `bug` `accepted` `wg/enterprise-environment` 💬2
- [#3719](https://github.com/vllm-project/semantic-router/issues/3719) [Bug] The ONNX build does not compile after the feedback probability change `bug` `accepted` `wg/router-models-inference-runtime` 💬2
- [#3737](https://github.com/vllm-project/semantic-router/issues/3737) [Feature] Bound the key dimension in chunked_sdpa with an online softmax `enhancement` `accepted` `wg/router-models-inference-runtime` 💬2
- [#3736](https://github.com/vllm-project/semantic-router/issues/3736) [Bug] Qwen3 and Gemma3 embedding attention run in f64 `bug` `accepted` `wg/router-models-inference-runtime` 💬2
- [#3726](https://github.com/vllm-project/semantic-router/issues/3726) [Feature] Add per-backend circuit breaker for remote classifiers `enhancement` `good first issue` `help wanted` `accepted` 💬2
- [#3734](https://github.com/vllm-project/semantic-router/issues/3734) [Bug] Kubernetes reconcile resets explicit `false` and `0` global values to their defaults `bug` `accepted` `wg/enterprise-environment` 💬1
- [#3725](https://github.com/vllm-project/semantic-router/issues/3725) [Bug] Playground feedback should record for all signed-in users, appear on Insights, and not let shared read accounts change routing `bug` `good first issue` `help wanted` `accepted` 💬1
- [#3718](https://github.com/vllm-project/semantic-router/issues/3718) [Bug] plugin-request-mutations cannot reliably distinguish header overwrite from append `bug` `accepted` `wg/evaluation-quality` 💬1
- [#3715](https://github.com/vllm-project/semantic-router/issues/3715) [Bug] Conversation signal reports a cumulative extraction latency for every rule after the first `bug` `accepted` `wg/router-models-inference-runtime` 💬1
- [#3714](https://github.com/vllm-project/semantic-router/issues/3714) [Bug] Signal match and extraction metrics skip recipe scoping at five call sites `bug` `accepted` `wg/router-models-inference-runtime` 💬1
- [#3732](https://github.com/vllm-project/semantic-router/issues/3732) [Bug] Dashboard user edit UI save button is not fully displayed `bug` `accepted` `wg/developer-experience-ecosystem`
- [#3727](https://github.com/vllm-project/semantic-router/issues/3727) [Feature] Report routing split, cost, and routing time consistently in bench `enhancement` `needs-acceptance` `wg/evaluation-quality`

#### 🔒 Closed Issues
- [#2865](https://github.com/vllm-project/semantic-router/issues/2865) [Feature] Make Fusion adaptive and support repeated self-sampling
- [#3728](https://github.com/vllm-project/semantic-router/issues/3728) [Feature] Return routing latency and cost as response headers
- [#3722](https://github.com/vllm-project/semantic-router/issues/3722) [Bug] The generated config schema is stale after the Fusion analysis mode field
- [#3719](https://github.com/vllm-project/semantic-router/issues/3719) [Bug] The ONNX build does not compile after the feedback probability change
- [#3709](https://github.com/vllm-project/semantic-router/issues/3709) [Bug] Static selection ignores the matched domain's `model_scores`
- [#3642](https://github.com/vllm-project/semantic-router/issues/3642) [Bug] Evaluation latency is divided by the number of columns instead of the number of rows
- [#3534](https://github.com/vllm-project/semantic-router/issues/3534) [Bug] Feedback detector reports a fabricated confidence below its threshold
- [#3708](https://github.com/vllm-project/semantic-router/issues/3708) [Bug] vLLM 0.21.0 non-streaming chat responses rejected by prompt_routed_experts
- [#2470](https://github.com/vllm-project/semantic-router/issues/2470) [Feature] Introduce generation-owned construction, reload, and graceful shutdown
- [#3698](https://github.com/vllm-project/semantic-router/issues/3698) [Feature] Expose per-phase routing latency (signal/decision) at info level for end-to-end decomposition
- [#3695](https://github.com/vllm-project/semantic-router/issues/3695) [Feature] Generate one Router configuration contract for CLI, Dashboard, and agents
- [#3732](https://github.com/vllm-project/semantic-router/issues/3732) [Bug] Dashboard user edit UI save button is not fully displayed

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*