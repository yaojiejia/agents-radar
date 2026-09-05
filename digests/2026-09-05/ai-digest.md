# 📡 AI Ecosystem Digest — 2026-09-05

> Generated 2026-09-05 00:39 UTC by [yaojiejia/agents-radar](https://github.com/yaojiejia/agents-radar)

## 📊 24h Snapshot

| Repo | ⭐ Stars | New Issues | Closed | Merged PRs | Releases |
|------|---------|-----------|--------|-----------|----------|
| [Claude Code](https://github.com/anthropics/claude-code) | 144,092 | 24 | 12 | 0 | 1 |
| [OpenAI Codex](https://github.com/openai/codex) | 121,549 | 24 | 0 | 47 | 3 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 106,815 | 0 | 0 | 3 | 1 |
| [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 11,136 | 16 | 4 | 0 | 4 |
| [OpenCode](https://github.com/anomalyco/opencode) | 204,123 | 30 | 7 | 9 | 2 |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 27,657 | 31 | 11 | 2 | 0 |
| [OpenClaw](https://github.com/openclaw/openclaw) | 388,869 | 110 | 62 | 146 | 0 |
| [Hermes Agent](https://github.com/nousresearch/hermes-agent) | 241,487 | 33 | 2 | 3 | 0 |
| [vLLM](https://github.com/vllm-project/vllm) | 90,981 | 31 | 14 | 53 | 0 |
| [SGLang](https://github.com/sgl-project/sglang) | 35,478 | 24 | 18 | 71 | 0 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 127,072 | 16 | 14 | 23 | 10 |
| [Ollama](https://github.com/ollama/ollama) | 180,165 | 7 | 5 | 4 | 0 |
| [LiteLLM](https://github.com/BerriAI/litellm) | 58,055 | 29 | 25 | 46 | 0 |
| [Unsloth](https://github.com/unslothai/unsloth) | 75,628 | 10 | 4 | 29 | 0 |
| [AIBrix](https://github.com/vllm-project/aibrix) | 5,058 | 2 | 1 | 7 | 0 |
| [Semantic Router](https://github.com/vllm-project/semantic-router) | 5,567 | 4 | 12 | 3 | 0 |

---

## ✨ Highlights

- **Claude Code** released version [v2.1.261](https://github.com/anthropics/claude-code/releases/tag/v2.1.261), addressing numerous bugs in the desktop application.  
- **OpenAI Codex** showcased multiple releases, including [rust-v0.154.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.154.0-alpha.3), while also merging significant PRs that integrate asynchronous questions into the TUI.  
- **Gemini CLI** made strides by releasing [v0.60.0-nightly.20260904.g87a9c71d5](https://github.com/google-gemini/gemini-cli/releases/tag/v0.60.0-nightly.20260904.g87a9c71d5), enhancing command safety with several merged PRs.  
- A major issue in **OpenClaw** was raised regarding Android Talk dropping connections, gaining traction with [#138272](https://github.com/openclaw/openclaw/issues/138272) and accumulating 6 comments.  
- In **vLLM**, the issue concerning repeated tokens from [Qwen3.6-27B-FP8](https://github.com/vllm-project/vllm/issues/55291) sparked notable attention, with 5 comments so far.

---

## 🖥️ AI CLI Tools

### Claude Code (`anthropics/claude-code`)

**Stars:** 144,092 · **Open issues:** 14,112 · **Last push:** 4h ago

On September 5, 2026, Claude Code released version 2.1.261, which introduced several enhancements, including an "Organization policy" line in the `/status` and `claude doctor` outputs to clarify why an organization's policy could not be loaded. Additionally, the update added `bashOutputMaxChars` and `taskOutputMaxChars` settings, allowing users to increase the amount of command and background-task output displayed inline, up to 128K characters. Notably, new issues reported included a significant bug (#92016) where the Claude Desktop app auto-denies CLI-native SendMessage, impacting subagent resumption, and several complaints related to the desktop app becoming unresponsive after idle periods (#92005) and aggressive self-update behavior (#92246).

#### 🚀 New Releases
- [v2.1.261](https://github.com/anthropics/claude-code/releases/tag/v2.1.261) v2.1.261

#### 🐛 New Issues
- [#92016](https://github.com/anthropics/claude-code/issues/92016) [BUG] Claude Desktop (Code tab) auto-denies CLI-native SendMessage, breaking subagent resumption; the desktop replacement only covers session-to-session `bug` `platform:macos` `area:agents` `regression` 💬7
- [#92005](https://github.com/anthropics/claude-code/issues/92005) [BUG] Claude desktop app becomes unresponsive after being idle, then fails to relaunch with "another program already using it" `bug` `platform:windows` `area:desktop` 💬2
- [#92246](https://github.com/anthropics/claude-code/issues/92246) Windows desktop app self-updates and restarts over a running session — nine forced restarts in nine days, no opt-out `bug` `has repro` `platform:windows` `area:desktop` 💬1
- [#92247](https://github.com/anthropics/claude-code/issues/92247) [MODEL] CLAUDE 5 CLI SAID SONNET 4.6 NO LONGER AVAILABLE `bug` `platform:windows` `area:model` `model`
- [#92245](https://github.com/anthropics/claude-code/issues/92245) [Bug] Anthropic API Error: Safety guidelines blocking legitimate game development requests `bug` `platform:windows` `area:model` `needs-repro`
- [#92244](https://github.com/anthropics/claude-code/issues/92244) [BUG] Agent teams: one teammate message or idle_notification is delivered to the lead up to 4 times with an identical timestamp (successor to #74112, stale-closed) `bug` `has repro` `platform:linux` `area:agents`
- [#92243](https://github.com/anthropics/claude-code/issues/92243) Permission dialog presents machine-composed commands as unreadable monochrome text `duplicate` `platform:vscode` `area:permissions`
- [#92242](https://github.com/anthropics/claude-code/issues/92242) [Bug] /goal stop hook repeatedly re-fires after user accepts BLOCKED outcome via AskUserQuestion `bug` `has repro` `platform:windows` `platform:vscode`
- [#92241](https://github.com/anthropics/claude-code/issues/92241) all of them `bug` `model` `needs-info` `needs-repro`
- [#92240](https://github.com/anthropics/claude-code/issues/92240) [BUG] `invalid`
- [#92239](https://github.com/anthropics/claude-code/issues/92239) You've hit your monthly spend limit · `duplicate` `question` `platform:windows` `area:cost`
- [#92238](https://github.com/anthropics/claude-code/issues/92238) [bug] [/cost] Current session 101% used `bug` `platform:linux` `area:cost` `area:tui`
- [#92237](https://github.com/anthropics/claude-code/issues/92237) monthly spend limit `question` `platform:windows` `area:cost` `platform:vscode`
- [#92236](https://github.com/anthropics/claude-code/issues/92236) [BUG] Archived sessions inaccessible when all sessions archived `bug` `area:claude-code-web` `platform:web` `area:ui`
- [#92235](https://github.com/anthropics/claude-code/issues/92235) Mobile client creates a duplicate session on every reconnect to a remote session; auto-archive on disconnect no longer fires `bug` `platform:macos` `regression` `area:desktop`
- [#92234](https://github.com/anthropics/claude-code/issues/92234) [BUG] Broken security_reminder_hook.py plugin persists after reinstall `bug` `platform:windows` `area:hooks` `area:plugins`
- [#92215](https://github.com/anthropics/claude-code/issues/92215) Claude Design first-party MCP always 403s: transport never attaches design-scoped token, `claude mcp login` OAuth flow is dead, and the error message suggests a nonexistent `/design-login` command `bug` `platform:macos` `area:auth` `area:mcp`
- [#92233](https://github.com/anthropics/claude-code/issues/92233) You've hit your session limit · resets 2am (Europe/London) `bug` `duplicate` `platform:macos` `area:cost`
- [#92232](https://github.com/anthropics/claude-code/issues/92232) [FEATURE] Design canvas: reorder pages — the Pages menu is append-only (switch/rename/new only) `enhancement` `area:claude-code-web` `platform:web`
- [#92231](https://github.com/anthropics/claude-code/issues/92231) [Bug] Unexpected model switching from Haiku to Opus `bug` `platform:linux` `area:model` `needs-repro`
- [#92230](https://github.com/anthropics/claude-code/issues/92230) [BUG] Claude Desktop crashes mid-session during active use, no quit event or system crash report, only a Crashpad dump `invalid`
- [#92229](https://github.com/anthropics/claude-code/issues/92229) [BUG] Claude in Chrome blocks navigation/content access to specific domains even after granting "Full access"; persists across restarts `bug` `platform:macos` `area:mcp` `area:permissions`
- [#92222](https://github.com/anthropics/claude-code/issues/92222) [Bug] Sessions freeze intermittently without error output `bug` `platform:macos` `area:tui` `needs-repro`
- [#92228](https://github.com/anthropics/claude-code/issues/92228) Background tasks killed for "low memory" with 17.9 GB available (MemFree vs MemAvailable) `duplicate` `platform:linux` `area:bash`

#### 🔒 Closed Issues
- [#91488](https://github.com/anthropics/claude-code/issues/91488) Fable 5.1 unreachable in Claude Code despite unused plan-included Fable allocation; credit-block dialog shows "not included in plan" copy with no affirmative action
- [#91745](https://github.com/anthropics/claude-code/issues/91745) [BUG] Dispatch cannot start a second Code session in the same folder since 1.44121.x: exclusiveCwd hardcoded true in startCodeSession
- [#79548](https://github.com/anthropics/claude-code/issues/79548) [Bug] Claude Fable 5 incorrectly consumes usage credits on Claude Code 2.1.215 with 20x Max subscription
- [#81300](https://github.com/anthropics/claude-code/issues/81300) Opus 5: verification allocation, commitment ordering, and regeneration fidelity in orchestration roles
- [#71382](https://github.com/anthropics/claude-code/issues/71382) [Bug] Code-review workflow hangs at synthesis phase; nested-parallel agents bypass cache on resume
- [#91237](https://github.com/anthropics/claude-code/issues/91237) [FEATURE] Add a setting to disable sound effects in the Claude Desktop app
- [#81329](https://github.com/anthropics/claude-code/issues/81329) [Bug] Model picker fallback entry shows Opus 4.7 instead of Opus 4.8
- [#81332](https://github.com/anthropics/claude-code/issues/81332) [Bug] Anthropic API Error: Opus 5 Excessive Content Filtering on Code Generation
- [#81331](https://github.com/anthropics/claude-code/issues/81331) Restore the system prompt: Opus follows instructions much worse now
- [#81328](https://github.com/anthropics/claude-code/issues/81328) [Bug] Anthropic API Error: HTTP 529 Overloaded
- [#81323](https://github.com/anthropics/claude-code/issues/81323) [Bug] Session incorrectly falls back to Opus instead of Fable for non-security requests
- [#81327](https://github.com/anthropics/claude-code/issues/81327) [BUG] API Error: 529 Overloaded. This is a server-side issue, usually temporary — try again in a moment. If it persists, check https://status.claude.com.

### OpenAI Codex (`openai/codex`)

**Stars:** 121,549 · **Open issues:** 15,281 · **Last push:** <1h ago

On September 5, 2026, OpenAI Codex released rust-v0.153.4, which fixed issues related to Astra's visibility in the bundled model picker, making it the default when no model is configured, and updated its guidance for asynchronous questions based on tool availability. Prior, rust-v0.153.3 introduced GPT-6-Astra to the Amazon Bedrock model picker while correcting its guidance for asynchronous clarifications. Notable merged features included support for selectable answers for asynchronous TUI questions and the integration of asynchronous questions into the TUI. Key new issues reported included Astra not showing reliably on Codex Linux and a concerning crash triggered by the Alt+P keyboard shortcut.

#### 🚀 New Releases
- [rust-v0.153.4](https://github.com/openai/codex/releases/tag/rust-v0.153.4) 0.153.4
- [rust-v0.153.3](https://github.com/openai/codex/releases/tag/rust-v0.153.3) 0.153.3
- [rust-v0.154.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.154.0-alpha.3) 0.154.0-alpha.3

#### ✅ Merged PRs
- [#42894](https://github.com/openai/codex/pull/42894) Support selectable answers for asynchronous TUI questions
- [#42891](https://github.com/openai/codex/pull/42891) Integrate asynchronous questions into the TUI
- [#42889](https://github.com/openai/codex/pull/42889) Add TUI building blocks for inline async question editing
- [#42883](https://github.com/openai/codex/pull/42883) Add client-side exec-server RPC attempt metrics
- [#42879](https://github.com/openai/codex/pull/42879) List GPT-6-Astra in the model picker
- [#42878](https://github.com/openai/codex/pull/42878) [0.153 hotfix] Qualify Astra async-question guidance by tool availability
- [#42874](https://github.com/openai/codex/pull/42874) [0.153 hotfix] Show Astra in bundled model picker
- [#42870](https://github.com/openai/codex/pull/42870) Avoid redundant filesystem sandbox path resolution
- [#42863](https://github.com/openai/codex/pull/42863) Preserve precedence across feature requirement aliases
- [#42854](https://github.com/openai/codex/pull/42854) Persist Daybreak preferences in thread metadata
- [#42852](https://github.com/openai/codex/pull/42852) Harden Guardian reviews after context compaction
- [#42850](https://github.com/openai/codex/pull/42850) Use jemalloc for Linux musl binaries
- [#42847](https://github.com/openai/codex/pull/42847) Preserve Markdown formatting when copying TUI responses
- [#42844](https://github.com/openai/codex/pull/42844) Retain user instructions in Guardian context
- [#42842](https://github.com/openai/codex/pull/42842) Add Astra sparkle effects to the TUI composer
- [#42841](https://github.com/openai/codex/pull/42841) Add a native Windows MXC sandbox adapter
- [#42838](https://github.com/openai/codex/pull/42838) Preserve executor paths in Guardian approval reviews
- [#42836](https://github.com/openai/codex/pull/42836) Make GPT-6-Astra user input guidance conditional
- [#42835](https://github.com/openai/codex/pull/42835) Preserve Windows managed deny reads in the sandbox CLI
- [#42833](https://github.com/openai/codex/pull/42833) Preserve SystemRoot for Windows sandbox wrapper setup
- [#42832](https://github.com/openai/codex/pull/42832) Preserve root authorization context in Guardian reviews
- [#42824](https://github.com/openai/codex/pull/42824) Refine user input guidance for GPT-6
- [#42823](https://github.com/openai/codex/pull/42823) Expose managed WebMCP policy through the app server
- [#42821](https://github.com/openai/codex/pull/42821) Report managed filesystem policy in `codex doctor`
- [#42819](https://github.com/openai/codex/pull/42819) Route Guardian approvals independently of async scoring
- [#42814](https://github.com/openai/codex/pull/42814) Support custom report event titles
- [#42811](https://github.com/openai/codex/pull/42811) Enable staging login issuer overrides in packaged builds
- [#42809](https://github.com/openai/codex/pull/42809) [0.153 hotfix] Update Astra async-question guidance
- [#42805](https://github.com/openai/codex/pull/42805) [0.153 hotfix] Add GPT-6-Astra to Amazon Bedrock catalogs
- [#42807](https://github.com/openai/codex/pull/42807) Add request-scoped Guardian approval decisions
- [#42801](https://github.com/openai/codex/pull/42801) Keep the Windows sandbox command runner hidden
- [#42798](https://github.com/openai/codex/pull/42798) Add data-use disclosures to the user report dialog
- [#42792](https://github.com/openai/codex/pull/42792) Extract the note input view into its own module
- [#42791](https://github.com/openai/codex/pull/42791) Keep TUI prompt history tied to local settings
- [#42781](https://github.com/openai/codex/pull/42781) Add direct SigV4 transport to exec-server
- [#42773](https://github.com/openai/codex/pull/42773) Avoid holding metadata permit during cold resume config load
- [#42770](https://github.com/openai/codex/pull/42770) Preserve acceptance order in retained thread context
- [#42767](https://github.com/openai/codex/pull/42767) Avoid port races in streamable HTTP tests
- [#42762](https://github.com/openai/codex/pull/42762) Retain user instructions in guardian thread context
- [#42758](https://github.com/openai/codex/pull/42758) Propagate response tickets to Guardian reviews
- [#42755](https://github.com/openai/codex/pull/42755) Stabilize the interactive tmux startup safety test
- [#42752](https://github.com/openai/codex/pull/42752) Preserve response IDs for fast collaborator tool events
- [#42749](https://github.com/openai/codex/pull/42749) Improve automatic thread naming in the TUI
- [#42746](https://github.com/openai/codex/pull/42746) Handle pending network reviews after process completion
- [#42744](https://github.com/openai/codex/pull/42744) Honor model-provided Guardian review policies
- [#42741](https://github.com/openai/codex/pull/42741) Make the TUI symlink startup test Bazel-compatible
- [#42718](https://github.com/openai/codex/pull/42718) Gate unified exec TTY support behind a feature flag

#### 🐛 New Issues
- [#42661](https://github.com/openai/codex/issues/42661) [Windows][Pets] Input region is offset; pet stays click-through after Windows reboots `bug` `windows-os` `app` `pets` 💬5
- [#42683](https://github.com/openai/codex/issues/42683) Using the Alt+P keyboard shortcut causes the app to crash and exit `bug` `windows-os` `app` 💬4
- [#42868](https://github.com/openai/codex/issues/42868) Astra not showing on Codex Linux reliably `bug` `CLI` `app` 💬5
- [#42853](https://github.com/openai/codex/issues/42853) [Windows Desktop] GPT-6 Astra missing from model picker for eligible ChatGPT Pro account `bug` `windows-os` `app` 💬4
- [#42739](https://github.com/openai/codex/issues/42739) Bug report: Local projects disappear from sidebar after Windows desktop update `bug` `windows-os` `app` `session` 💬4
- [#42714](https://github.com/openai/codex/issues/42714) [Windows] Codex desktop launches processes but shows no window after update `bug` `windows-os` `app` 💬2
- [#42830](https://github.com/openai/codex/issues/42830) [Desktop] Luna Reserve collapses model picker to Reserve only, hiding custom/routed models after native quota exhaustion 💬1
- [#42893](https://github.com/openai/codex/issues/42893) [agent] macOS: scrolling is unusably choppy on battery, smooth on AC power `bug` `app` `performance` 💬1
- [#42890](https://github.com/openai/codex/issues/42890) Windows Desktop: pending follow-ups stall after completion; manual resume processes only the last of three `bug` `windows-os` `agent` `app` 💬1
- [#42888](https://github.com/openai/codex/issues/42888) Banked reset didn't work `bug` `rate-limits` `app` 💬1
- [#42864](https://github.com/openai/codex/issues/42864) Codex CLI 0.153.0: unified_exec drops structured command outcomes from rollouts and PostToolUse `bug` `windows-os` `exec` `CLI` 💬1
- [#42846](https://github.com/openai/codex/issues/42846) Add official Computer Use support to the Linux desktop app `enhancement` `app` `computer-use` 💬1
- [#42885](https://github.com/openai/codex/issues/42885) Suspected false positive: authorized defensive code review `bug` `code-review` `CLI` `app` 💬1
- [#42884](https://github.com/openai/codex/issues/42884) 019f318d-432f-7780-adf1-6f4ec3111010 `bug` `windows-os` `rate-limits` `app` 💬1
- [#42881](https://github.com/openai/codex/issues/42881) Hooks: permission_mode never reports "plan" during a Plan-mode turn `bug` `CLI` `hooks` `plan` 💬1
- [#42882](https://github.com/openai/codex/issues/42882) VS Code extension regression: chatgpt.openSidebar command not found in version 26.901.22334 `bug` `extension` 💬1
- [#42880](https://github.com/openai/codex/issues/42880) Long-running Codex tasks lose state and overstate background execution or completed outcomes `bug` `model-behavior` `app` `session` 💬1
- [#42877](https://github.com/openai/codex/issues/42877) Enable permanent chat deletion for personal accounts in the desktop app `enhancement` `app` `session` 💬1
- [#42887](https://github.com/openai/codex/issues/42887) Voice drains quota too quickly `bug` `rate-limits` `app`
- [#42886](https://github.com/openai/codex/issues/42886) Avoid a persistent Node launcher for each computer-use REPL `enhancement` `app` `computer-use` `performance`
- [#42875](https://github.com/openai/codex/issues/42875) [Data loss] ~221 GB deleted from $HOME while gpt-5.6-sol sessions were running (codex-cli 0.153.0, macOS 26.6) `bug` `sandbox` `exec` `CLI`
- [#42873](https://github.com/openai/codex/issues/42873) macOS: let sandboxed codex doctor collect security history through an authorized host diagnostic `enhancement` `sandbox` `CLI` `app-server`
- [#42872](https://github.com/openai/codex/issues/42872) odex doctor `bug` `CLI`
- [#42871](https://github.com/openai/codex/issues/42871) Hanyy07 `bug` `windows-os` `CLI`

### Gemini CLI (`google-gemini/gemini-cli`)

**Stars:** 106,815 · **Open issues:** 860 · **Last push:** 6h ago

On September 5, 2026, Gemini CLI released version v0.60.0-nightly.20260904.g87a9c71d5, which includes a significant enhancement to the OAuth flow by enforcing RFC 9207 issuer identification, contributed by @jvargassanchez-dot. Additional notable merges include a fix for stricter permission and ownership checks on system-wide configuration paths, improved workspace path boundary checks, and enhanced prompts for consent regarding environment changes along with sanitization of environment variables. No new issues were reported in the last 24 hours, indicating a stable environment following the recent updates.

#### 🚀 New Releases
- [v0.60.0-nightly.20260904.g87a9c71d5](https://github.com/google-gemini/gemini-cli/releases/tag/v0.60.0-nightly.20260904.g87a9c71d5) Release v0.60.0-nightly.20260904.g87a9c71d5

#### ✅ Merged PRs
- [#29115](https://github.com/google-gemini/gemini-cli/pull/29115) fix(config): enforce strict permission and ownership checks on system-wide configuration paths
- [#29170](https://github.com/google-gemini/gemini-cli/pull/29170) fix(core): enhance workspace path boundary checks and symlink resolution in command safety and file discovery
- [#28863](https://github.com/google-gemini/gemini-cli/pull/28863) fix(extensions): prompt for consent on environment changes and sanitize runtime-altering environment variables

### GitHub Copilot CLI (`github/copilot-cli`)

**Stars:** 11,136 · **Open issues:** 2,292 · **Last push:** 1h ago

On September 5, 2026, GitHub Copilot CLI saw the release of v1.0.84-1, which added support for GPT-6 Astra, and v1.0.84-0, enhancing session management by allowing users to disable managed sandbox sessions. Additionally, fixes in v1.0.84-0 addressed issues related to PowerShell command execution across multiple GitHub accounts. No new pull requests were merged in the last 24 hours, but several new issues were reported, with #4725 highlighting frequent JavaScript heap out of memory errors as a notable concern among users. Other emerging issues include complications with the auto-update feature and startup problems during large session histories.

#### 🚀 New Releases
- [v1.0.84-1](https://github.com/github/copilot-cli/releases/tag/v1.0.84-1) 1.0.84-1
- [v1.0.84-0](https://github.com/github/copilot-cli/releases/tag/v1.0.84-0) 1.0.84-0
- [v1.0.83](https://github.com/github/copilot-cli/releases/tag/v1.0.83) 1.0.83
- [v1.0.83-5](https://github.com/github/copilot-cli/releases/tag/v1.0.83-5) 1.0.83-5

#### 🐛 New Issues
- [#4730](https://github.com/github/copilot-cli/issues/4730) dsfdsfs `invalid` 💬1
- [#4725](https://github.com/github/copilot-cli/issues/4725) Frequent JavaScript heap out of memory `triage` 💬1
- [#4731](https://github.com/github/copilot-cli/issues/4731) A tools/list refresh dispatched into a server still blocked by a just-cancelled tool call times out and permanently strips that server's tools for the life of the process `triage`
- [#4729](https://github.com/github/copilot-cli/issues/4729) Built-in research agent tells subagents to call unavailable github/get_me tool `triage`
- [#4728](https://github.com/github/copilot-cli/issues/4728) Auto-update rewrites the `copilot.exe` it was launched from, breaking the GitHub Copilot app's bundled CLI `triage`
- [#4727](https://github.com/github/copilot-cli/issues/4727) Changes tab does not update after the session's PR is merged `triage`
- [#4726](https://github.com/github/copilot-cli/issues/4726) OTel: post-reload resumed turn emits `invoke_agent` root without input messages `triage`
- [#4724](https://github.com/github/copilot-cli/issues/4724) Auto-compact on idle, aligned to the model's prompt cache TTL `triage`
- [#4723](https://github.com/github/copilot-cli/issues/4723) [Bug] --interactive startup prompt is silently dropped with a local plugin custom agent `triage`
- [#4722](https://github.com/github/copilot-cli/issues/4722) Leading underscores (e.g., _test) vanish in Copilot Chat bubbles and output due to Markdown parsing of unclosed emphasis `triage`
- [#4721](https://github.com/github/copilot-cli/issues/4721) Canvas open_canvas arguments corrupted by CLI — JSON-RPC serialization bug `triage`
- [#4720](https://github.com/github/copilot-cli/issues/4720) Bug: Copilot CLI 1.0.82 BYOK silently disables prompt caching (~5x cost) `triage`
- [#4716](https://github.com/github/copilot-cli/issues/4716) /voice dictation intermittently captures nothing on WSL2/WSLg (PvRecorder read failure during RDP audio reconnect) `area:platform-linux`
- [#4719](https://github.com/github/copilot-cli/issues/4719) Detached PowerShell command is reported completed while its child process is still running `area:platform-windows` `area:tools`
- [#4717](https://github.com/github/copilot-cli/issues/4717) Extension startup fails on large session histories `area:sessions` `area:plugins`
- [#4718](https://github.com/github/copilot-cli/issues/4718) Withdrawn

#### 🔒 Closed Issues
- [#4525](https://github.com/github/copilot-cli/issues/4525) 1.0.81-1 sends legacy `initialize` after successful modern `server/discover`, causing -32022
- [#4730](https://github.com/github/copilot-cli/issues/4730) dsfdsfs
- [#4471](https://github.com/github/copilot-cli/issues/4471) `/plugins` TUI does not distinguish disabled skills or persist disabled state
- [#4718](https://github.com/github/copilot-cli/issues/4718) Withdrawn

### OpenCode (`anomalyco/opencode`)

**Stars:** 204,123 · **Open issues:** 5,716 · **Last push:** <1h ago

On September 5, 2026, OpenCode released version v1.18.29, which includes important bug fixes that enhance Codex OAuth model filtering to recognize integer GPT versions and resolve visibility issues for the gpt-6-astra model in user subscriptions. Additionally, version v1.18.28 introduced improvements such as sending session IDs in GitHub Copilot interaction headers for better request tracking. Notable merged pull requests focused on refining GPT version comparisons and clarifying search guidance in Code Mode. Among the new issues raised, the absence of GPT-6 Astra from the Codex OAuth model picker has drawn significant attention, highlighting a potential gap in user access to the latest features.

#### 🚀 New Releases
- [v1.18.29](https://github.com/anomalyco/opencode/releases/tag/v1.18.29) v1.18.29
- [v1.18.28](https://github.com/anomalyco/opencode/releases/tag/v1.18.28) v1.18.28

#### ✅ Merged PRs
- [#47404](https://github.com/anomalyco/opencode/pull/47404) fix(core): compare Codex GPT versions by major and minor
- [#47360](https://github.com/anomalyco/opencode/pull/47360) fix(core): clarify how to call search in Code Mode guidance
- [#47386](https://github.com/anomalyco/opencode/pull/47386) fix(app): list OpenCode Go before Zen
- [#47385](https://github.com/anomalyco/opencode/pull/47385) fix(opencode): compare Codex GPT versions by major and minor
- [#47384](https://github.com/anomalyco/opencode/pull/47384) fix(opencode): allow integer GPT versions in Codex model filter
- [#47358](https://github.com/anomalyco/opencode/pull/47358) feat(worktree): support configurable plugin strategies
- [#47377](https://github.com/anomalyco/opencode/pull/47377) fix(app): keep pending worktree composer styling consistent
- [#47379](https://github.com/anomalyco/opencode/pull/47379) fix(app): apply worktree message color during preparation
- [#47370](https://github.com/anomalyco/opencode/pull/47370) fix(app): align desktop worktree location with TUI

#### 🐛 New Issues
- [#47363](https://github.com/anomalyco/opencode/issues/47363) GPT-6 Astra is missing from the OpenAI Codex OAuth model picker 💬2
- [#47312](https://github.com/anomalyco/opencode/issues/47312) [FEATURE]: Add Support for Augure AI Models 💬5
- [#47367](https://github.com/anomalyco/opencode/issues/47367) Jinja Exception 💬4
- [#47317](https://github.com/anomalyco/opencode/issues/47317) 实际使用和套餐额度不一致 💬3
- [#47351](https://github.com/anomalyco/opencode/issues/47351) [FEATURE]: Support enforced OTLP settings in managed configuration 💬3
- [#47350](https://github.com/anomalyco/opencode/issues/47350) Shell tool never returns when a command leaves a background process holding its stdio 💬3
- [#47393](https://github.com/anomalyco/opencode/issues/47393) bug(sdk): native Headers entries are lost when configuring client scope 💬2
- [#47368](https://github.com/anomalyco/opencode/issues/47368) Remote MCP regression in OpenCode 1.18.28 – KitWright tools unavailable 💬2
- [#47349](https://github.com/anomalyco/opencode/issues/47349) zen/go gateway: muse-spark 1.2/1.3 contributor return 500; grok-4.6 rejected on both wire formats `needs:compliance` 💬2
- [#47335](https://github.com/anomalyco/opencode/issues/47335) opencode problem 💬2
- [#47336](https://github.com/anomalyco/opencode/issues/47336) Edit Project 💬2
- [#47406](https://github.com/anomalyco/opencode/issues/47406) [UI] Right sidebar (project files) hidden on "New Session" screen before sending first prompt 💬1
- [#47405](https://github.com/anomalyco/opencode/issues/47405) v2: OpenAI OAuth filters out gpt-6-astra `2.0` 💬1
- [#47365](https://github.com/anomalyco/opencode/issues/47365) Bug: V2 Node process-lock implementation imports unavailable node:ffi, blocking embedded SDK `2.0` 💬1
- [#47359](https://github.com/anomalyco/opencode/issues/47359) [Ollama] /thinking toggle and think parameter not passed to local Ollama provider API requests 💬1
- [#47361](https://github.com/anomalyco/opencode/issues/47361) [Feature] Add event-log GC/compaction and/or per-project database to prevent unbounded opencode.db growth 💬1
- [#47296](https://github.com/anomalyco/opencode/issues/47296) Bedrock GPT-5.6: usage total counts cached input twice, so auto-compaction fires after every message 💬1
- [#47413](https://github.com/anomalyco/opencode/issues/47413) Legacy agent Markdown loses a separate model variant
- [#47411](https://github.com/anomalyco/opencode/issues/47411) Configured commands interpret literal dollar sequences in arguments
- [#47409](https://github.com/anomalyco/opencode/issues/47409) Core HTML conversion loses inline-code boundary backticks
- [#47407](https://github.com/anomalyco/opencode/issues/47407) Core HTML conversion hangs when a code block exceeds the remaining budget
- [#47402](https://github.com/anomalyco/opencode/issues/47402) Core tool-output suffix previews allocate full character arrays
- [#47398](https://github.com/anomalyco/opencode/issues/47398) v2 (opencode2): max_tokens never sent for @ai-sdk/openai-compatible models, limit.output ignored, thinking turns truncate at provider default `2.0`
- [#47399](https://github.com/anomalyco/opencode/issues/47399) bug: Read truncation can split Unicode surrogate pairs
- [#47381](https://github.com/anomalyco/opencode/issues/47381) Git quoted paths containing literal Unicode are corrupted during decoding
- [#47380](https://github.com/anomalyco/opencode/issues/47380) Allow bounded parent directory verification without listing contents
- [#47366](https://github.com/anomalyco/opencode/issues/47366) [FEATURE]: Allow provider-native options in stateless generate.text
- [#47356](https://github.com/anomalyco/opencode/issues/47356) plugin: permission.evaluate hook does not fire for cd-led shell commands `2.0`
- [#47345](https://github.com/anomalyco/opencode/issues/47345) [FEATURE]: expose the plugin manager as a /plugins slash command
- [#47344](https://github.com/anomalyco/opencode/issues/47344) [FEATURE]: Discover vLLM models out of the box on dev (port of #43022)

#### 🔒 Closed Issues
- [#36808](https://github.com/anomalyco/opencode/issues/36808) opencode.ai resolves to four IPv6 addresses and stalls Bun fetch on IPv6 blackhole networks
- [#47367](https://github.com/anomalyco/opencode/issues/47367) Jinja Exception
- [#47317](https://github.com/anomalyco/opencode/issues/47317) 实际使用和套餐额度不一致
- [#47349](https://github.com/anomalyco/opencode/issues/47349) zen/go gateway: muse-spark 1.2/1.3 contributor return 500; grok-4.6 rejected on both wire formats
- [#47335](https://github.com/anomalyco/opencode/issues/47335) opencode problem
- [#47336](https://github.com/anomalyco/opencode/issues/47336) Edit Project
- [#47361](https://github.com/anomalyco/opencode/issues/47361) [Feature] Add event-log GC/compaction and/or per-project database to prevent unbounded opencode.db growth

### Qwen Code (`QwenLM/qwen-code`)

**Stars:** 27,657 · **Open issues:** 1,317 · **Last push:** <1h ago

On September 5, 2026, there were no new releases for Qwen Code; however, a notable merged pull request introduced the feature `ui.showToolCallArgs`, which enables rendering tool-call arguments inline. Additionally, a fix was made to label usage-limited goal cards correctly in the web shell environment. New issues reported include a critical problem with the Cerebras module that leads to failed multi-turn requests due to a '400 status code' error, as well as several CI failures that may affect ongoing testing and deployment processes. Another interesting addition was a feature request for an independent Quick Chat floating surface in the web shell.

#### ✅ Merged PRs
- [#10565](https://github.com/QwenLM/qwen-code/pull/10565) feat(ui): add ui.showToolCallArgs to render tool-call arguments inline
- [#10553](https://github.com/QwenLM/qwen-code/pull/10553) fix(web-shell): label usage-limited goal cards correctly

#### 🐛 New Issues
- [#11045](https://github.com/QwenLM/qwen-code/issues/11045) Cerebras (OpenAI-compatible): every multi-turn request fails with '400 status code (no body)' — reasoning_content rejected on input `priority/P1` `type/bug` `category/core` `scope/content-generation` 💬3
- [#11031](https://github.com/QwenLM/qwen-code/issues/11031) fix(export): stop embedding the Web Shell runtime in every HTML file `priority/P1` `type/bug` `category/ui` `category/performance` 💬3
- [#11027](https://github.com/QwenLM/qwen-code/issues/11027) Main CI failed: E2E Tests on b4baaf665c17 `type/bug` `status/ready-for-agent` `autofix/skip` 💬3
- [#11017](https://github.com/QwenLM/qwen-code/issues/11017) feat(web-shell): Add an independent Quick Chat floating surface `priority/P2` `type/feature-request` `category/ui` `roadmap/session-management` 💬3
- [#10984](https://github.com/QwenLM/qwen-code/issues/10984) feat(cli): support per-process user configuration directories `priority/P3` `type/feature-request` `category/configuration` `scope/settings` 💬3
- [#10995](https://github.com/QwenLM/qwen-code/issues/10995) customHeaders: support a ${session_id} template for per-conversation request headers `priority/P3` `type/feature-request` `category/configuration` `scope/content-generation` 💬2
- [#11043](https://github.com/QwenLM/qwen-code/issues/11043) Main CI failed: E2E Tests on 74fe3a659dde `type/bug` `status/ready-for-agent` `autofix/skip` `autofix/approved` 💬2
- [#11002](https://github.com/QwenLM/qwen-code/issues/11002) Main CI failed: E2E Tests on 56f75adf2992 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬2
- [#11024](https://github.com/QwenLM/qwen-code/issues/11024) feat(channels): Worktree session lifecycle cleanup and residual Part 4A findings `priority/P2` `type/feature-request` `category/cli` `scope/session-management` 💬2
- [#11023](https://github.com/QwenLM/qwen-code/issues/11023) 🎉 #10000 — What 10,000 issues and PRs say about Qwen Code `duplicate` 💬2
- [#11022](https://github.com/QwenLM/qwen-code/issues/11022) Publish a new @qwen-code/sdk release with the managed-memory and prompt-cache fixes `priority/P2` `type/feature-request` `category/development` `scope/packaging` 💬2
- [#11019](https://github.com/QwenLM/qwen-code/issues/11019) AUTO mode: user approvals never reach the classifier (blocks are unoverridable); approval mode also reverts to AUTO on session rebuild `priority/P2` `type/bug` `category/security` `scope/session-management` 💬2
- [#11013](https://github.com/QwenLM/qwen-code/issues/11013) Dynamic Workflows: close the remaining gaps against Claude Code 2.1.260 (contract, entry/budget, resilience, distribution) `priority/P2` `type/feature-request` `category/core` `roadmap/subagents-tools` 💬2
- [#11010](https://github.com/QwenLM/qwen-code/issues/11010) Main CI failed: Qwen Code CI on 9c320cb0cc32 `type/bug` `status/ready-for-agent` `autofix/skip` `autofix/in-progress` 💬2
- [#10989](https://github.com/QwenLM/qwen-code/issues/10989) web-shell: the daemon prompt authority is only polled where the sidebar is mounted, so the #9487 indicator fix is inert in the VS Code companion `priority/P2` `type/bug` `category/ui` `scope/vscode` 💬2
- [#11050](https://github.com/QwenLM/qwen-code/issues/11050) Release Failed for v0.23.0-nightly.20260904.74fe3a659d on 2026-09-04 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#11032](https://github.com/QwenLM/qwen-code/issues/11032) Deferred review findings from PR #10919 💬1
- [#11042](https://github.com/QwenLM/qwen-code/issues/11042) Main CI failed: E2E Tests on 39a84c9e1db4 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#11040](https://github.com/QwenLM/qwen-code/issues/11040) Main CI failed: Qwen Code CI on 419e8d57b2a9 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#11039](https://github.com/QwenLM/qwen-code/issues/11039) Main CI failed: E2E Tests on 0dd5bf28763b `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#11030](https://github.com/QwenLM/qwen-code/issues/11030) Main CI failed: E2E Tests on cf44c778c077 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#11034](https://github.com/QwenLM/qwen-code/issues/11034) Main CI failed: E2E Tests on 9bb2f8530306 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#10994](https://github.com/QwenLM/qwen-code/issues/10994) Main CI failed: E2E Tests on d4e3e4fc8747 `type/bug` `status/ready-for-agent` `autofix/in-progress` 💬1
- [#11021](https://github.com/QwenLM/qwen-code/issues/11021) Deferred review findings from PR #10920 💬1
- [#11016](https://github.com/QwenLM/qwen-code/issues/11016) Main CI failed: Qwen Code CI on 05b8ee06a261 `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#11009](https://github.com/QwenLM/qwen-code/issues/11009) Main CI failed: E2E Tests on a6dcae2ce52d `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#11008](https://github.com/QwenLM/qwen-code/issues/11008) Deferred review findings from PR #10930 💬1
- [#10990](https://github.com/QwenLM/qwen-code/issues/10990) Main CI failed: E2E Tests on b7815a7e1a82 `type/bug` `status/ready-for-agent` `autofix/in-progress` `autofix/approved` 💬1
- [#10976](https://github.com/QwenLM/qwen-code/issues/10976) Main CI failed: E2E Tests on 60161cb64a2b `type/bug` `status/ready-for-agent` `autofix/skip` 💬1
- [#11048](https://github.com/QwenLM/qwen-code/issues/11048) Deferred review findings from PR #10697
- [#11028](https://github.com/QwenLM/qwen-code/issues/11028) Deferred review findings from PR #11007

#### 🔒 Closed Issues
- [#11027](https://github.com/QwenLM/qwen-code/issues/11027) Main CI failed: E2E Tests on b4baaf665c17
- [#10936](https://github.com/QwenLM/qwen-code/issues/10936) DingTalk channel prints clientSecret and stream ticket to stdout on every connect
- [#9521](https://github.com/QwenLM/qwen-code/issues/9521) docs: align follow-up suggestion copy across TUI and Web Shell
- [#11023](https://github.com/QwenLM/qwen-code/issues/11023) 🎉 #10000 — What 10,000 issues and PRs say about Qwen Code
- [#11010](https://github.com/QwenLM/qwen-code/issues/11010) Main CI failed: Qwen Code CI on 9c320cb0cc32
- [#10905](https://github.com/QwenLM/qwen-code/issues/10905) OpenTUI: slash command output never reaches the screen (invocation echo + result messages)
- [#11030](https://github.com/QwenLM/qwen-code/issues/11030) Main CI failed: E2E Tests on cf44c778c077
- [#10994](https://github.com/QwenLM/qwen-code/issues/10994) Main CI failed: E2E Tests on d4e3e4fc8747
- [#10976](https://github.com/QwenLM/qwen-code/issues/10976) Main CI failed: E2E Tests on 60161cb64a2b
- [#9767](https://github.com/QwenLM/qwen-code/issues/9767) feat(ui): add a setting to show full tool-call name + arguments inline (restore pre-compact verbosity)
- [#10927](https://github.com/QwenLM/qwen-code/issues/10927) DWS group mentions do not enter the /btw side-question path

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

**Stars:** 388,869 · **Open issues:** 6,309 · **Last push:** <1h ago

On September 5, 2026, OpenClaw did not release any new versions, but significant development occurred with multiple merged pull requests. Notable fixes included a resolution for interrupted tasks after gateway restarts (#138394), as well as enhancements to task suggestion retryability post-agent recovery (#138653). Additionally, performance improvements were made in reducing allocations for Canvas-heavy chat history (#138654) and preserving verbose statuses in native choice menus (#118822). A critical new issue was reported regarding the Android Talk gateway-relay dropping on task-requiring turns with a "no live response owner" error, which has been confirmed across several releases.

#### ✅ Merged PRs
- [#138600](https://github.com/openclaw/openclaw/pull/138600) refactor(agents): remove unreachable footer runtime
- [#138394](https://github.com/openclaw/openclaw/pull/138394) fix(agents): resume interrupted tasks after gateway restarts
- [#138182](https://github.com/openclaw/openclaw/pull/138182) fix(ci): allow unchanged mobile release outputs
- [#138473](https://github.com/openclaw/openclaw/pull/138473) fix(codex): preserve native threads after interrupted compaction
- [#138654](https://github.com/openclaw/openclaw/pull/138654) improve(gateway): reduce allocations for Canvas-heavy chat history
- [#118822](https://github.com/openclaw/openclaw/pull/118822) fix(commands): preserve verbose status in native choice menus
- [#138653](https://github.com/openclaw/openclaw/pull/138653) fix(gateway): keep task suggestions retryable after agent recovery
- [#138681](https://github.com/openclaw/openclaw/pull/138681) test(qa): preload the Slack action graph before scenario deadlines
- [#126547](https://github.com/openclaw/openclaw/pull/126547) fix(gateway): keep channels working after plugin reloads
- [#138438](https://github.com/openclaw/openclaw/pull/138438) fix(cli): automations runs required --id while sibling commands took a positional id
- [#138710](https://github.com/openclaw/openclaw/pull/138710) fix(sqlite): avoid writes when reacquiring data-free coordinators
- [#138186](https://github.com/openclaw/openclaw/pull/138186) fix(android): build Mermaid assets package-locally
- [#138683](https://github.com/openclaw/openclaw/pull/138683) refactor(build): simplify declaration hooks and regression fixtures
- [#138665](https://github.com/openclaw/openclaw/pull/138665) fix(ci): preserve Periphery findings after delayed draft events
- [#138545](https://github.com/openclaw/openclaw/pull/138545) fix: preserve tasks following text directives
- [#138647](https://github.com/openclaw/openclaw/pull/138647) improve: avoid redundant work when rendering subagent status
- [#138678](https://github.com/openclaw/openclaw/pull/138678) fix(ui): hide broken Customize UI control
- [#138372](https://github.com/openclaw/openclaw/pull/138372) chore(i18n): refresh native locales
- [#138646](https://github.com/openclaw/openclaw/pull/138646) improve: reduce allocations while budgeting multilingual tool results
- [#122146](https://github.com/openclaw/openclaw/pull/122146) fix(workboard): stop SQLite descriptor leaks on plugin reload
- [#138671](https://github.com/openclaw/openclaw/pull/138671) test(memory): verify structured consolidation requests
- [#125336](https://github.com/openclaw/openclaw/pull/125336) fix(sessions): write the transcript header when a reset lands on an empty window
- [#138622](https://github.com/openclaw/openclaw/pull/138622) perf(markdown): binary-search ordered code spans
- [#138618](https://github.com/openclaw/openclaw/pull/138618) fix(workboard): remove session capture action
- [#138611](https://github.com/openclaw/openclaw/pull/138611) test(tts): wait for voice requests before measuring deadlines
- [#138440](https://github.com/openclaw/openclaw/pull/138440) fix(build): keep nested checkout declarations on pinned local inputs
- [#138673](https://github.com/openclaw/openclaw/pull/138673) feat(update): repair installations with configured inference
- [#138601](https://github.com/openclaw/openclaw/pull/138601) perf(agents): skip impossible tool image prefixes
- [#138638](https://github.com/openclaw/openclaw/pull/138638) fix(channels): apply acknowledgement settings without reconnecting
- [#138310](https://github.com/openclaw/openclaw/pull/138310) fix(macos): bind heartbeat status to the active gateway
- [#138577](https://github.com/openclaw/openclaw/pull/138577) perf(agents): skip serializing unchanged recovery messages
- [#138609](https://github.com/openclaw/openclaw/pull/138609) perf(http): avoid copying rejected response bodies
- [#138551](https://github.com/openclaw/openclaw/pull/138551) fix(gateway): clear stale active model after recovery
- [#138604](https://github.com/openclaw/openclaw/pull/138604) fix: reduce memory spikes during large batch scans
- [#138582](https://github.com/openclaw/openclaw/pull/138582) refactor(skills): keep loaded skills paired with their frontmatter
- [#138608](https://github.com/openclaw/openclaw/pull/138608) perf(agents): size only the final output line
- [#138621](https://github.com/openclaw/openclaw/pull/138621) fix(build): publish declarations before smoke validation
- [#138527](https://github.com/openclaw/openclaw/pull/138527) fix: start Mac Swift CI on hosted runners
- [#136146](https://github.com/openclaw/openclaw/pull/136146) fix(gateway): keep received work inside its state lifetime
- [#138581](https://github.com/openclaw/openclaw/pull/138581) fix(sessions): preserve signal exit status in tail follow
- [#138331](https://github.com/openclaw/openclaw/pull/138331) fix(telegram): drop per-poll isolated worker poll-start info log
- [#138585](https://github.com/openclaw/openclaw/pull/138585) fix(sessions): restore incognito history and release stopped worker leases
- [#138469](https://github.com/openclaw/openclaw/pull/138469) fix(ui): preserve cloud startup input and restore recovery
- [#138434](https://github.com/openclaw/openclaw/pull/138434) fix(agents): preserve Astra continuation history and effort caches
- [#138483](https://github.com/openclaw/openclaw/pull/138483) fix(talk): avoid full plugin imports during cold catalog discovery
- [#137424](https://github.com/openclaw/openclaw/pull/137424) fix(state): revalidate recreated agent databases
- [#138536](https://github.com/openclaw/openclaw/pull/138536) fix(discord): keep voice sessions alive through partial-frame pauses
- [#138467](https://github.com/openclaw/openclaw/pull/138467) fix(ci): preserve draft conversions during PR CI sweeps
- [#138494](https://github.com/openclaw/openclaw/pull/138494) fix: let SSH cloud sessions finish cleanup after RPC expiry
- [#138612](https://github.com/openclaw/openclaw/pull/138612) fix(testbox): preserve hydrated runtime across native sync
- [#138209](https://github.com/openclaw/openclaw/pull/138209) fix(macos): serialize Cron refreshes and stabilize native fixtures
- [#138649](https://github.com/openclaw/openclaw/pull/138649) fix(compaction): stop cancelled queued preparation
- [#138640](https://github.com/openclaw/openclaw/pull/138640) feat(ui): render live dashboard gallery previews
- [#138607](https://github.com/openclaw/openclaw/pull/138607) perf(agents): bound streamed paragraph separator checks
- [#138625](https://github.com/openclaw/openclaw/pull/138625) fix(gateway): reconcile removed device workers after caller retirement
- [#137734](https://github.com/openclaw/openclaw/pull/137734) fix(github): recover rejected publication selections
- [#138413](https://github.com/openclaw/openclaw/pull/138413) fix(discord): preserve code across message boundaries
- [#138626](https://github.com/openclaw/openclaw/pull/138626) fix(openai): preserve GPT-6 reasoning without catalog metadata
- [#138617](https://github.com/openclaw/openclaw/pull/138617) test: avoid real sleeps in PR metadata retry tests
- [#138651](https://github.com/openclaw/openclaw/pull/138651) fix(ci): retain failure diagnostics and shard provenance
- [#138201](https://github.com/openclaw/openclaw/pull/138201) fix: avoid provider blame for unclassified run failures
- [#138628](https://github.com/openclaw/openclaw/pull/138628) improve(memory): avoid redundant cache reads during reindexing
- [#138559](https://github.com/openclaw/openclaw/pull/138559) chore(ui): refresh control ui locales
- [#138636](https://github.com/openclaw/openclaw/pull/138636) refactor(workboard): reduce SQLite queries for lists
- [#138575](https://github.com/openclaw/openclaw/pull/138575) fix: preserve live steering when runtime context is present
- [#138496](https://github.com/openclaw/openclaw/pull/138496) ci: avoid duplicate browser test work
- [#138637](https://github.com/openclaw/openclaw/pull/138637) improve(trajectory): keep capture trimming bounded
- [#138533](https://github.com/openclaw/openclaw/pull/138533) fix(ci): avoid false GREEN from unrelated PR checks
- [#138459](https://github.com/openclaw/openclaw/pull/138459) fix(ui): preserve proof recordings during screenshots
- [#138431](https://github.com/openclaw/openclaw/pull/138431) fix(qa): wait for background commands before reporting success
- [#138615](https://github.com/openclaw/openclaw/pull/138615) perf(plugins): skip route preparation when no hook exists
- [#138631](https://github.com/openclaw/openclaw/pull/138631) improve(acp): avoid reloading history when recording updates
- [#138583](https://github.com/openclaw/openclaw/pull/138583) perf(browser): reduce cold bridge startup and cleanup stalls
- [#138550](https://github.com/openclaw/openclaw/pull/138550) fix(ui): restore conversation when opening compact Home
- [#138047](https://github.com/openclaw/openclaw/pull/138047) fix: limit environment inheritance in port diagnostics
- [#138455](https://github.com/openclaw/openclaw/pull/138455) improve: start Codex cloud sessions without unused worker prewarm
- [#138450](https://github.com/openclaw/openclaw/pull/138450) fix(release): report stale Linux release requests
- [#132729](https://github.com/openclaw/openclaw/pull/132729) fix(config): resolve channel schema ownership via preferOver
- [#138465](https://github.com/openclaw/openclaw/pull/138465) fix(ui): distinguish Mermaid renderer failures from invalid diagrams
- [#138578](https://github.com/openclaw/openclaw/pull/138578) fix(release): emit v2 ClawHub recovery approval bound to the authorized child
- [#122006](https://github.com/openclaw/openclaw/pull/122006) fix(sessions): preserve case-distinct peers during plugin cleanup
- [#138002](https://github.com/openclaw/openclaw/pull/138002) feat(macos): add six icon designs with light and dark pairs
- [#138606](https://github.com/openclaw/openclaw/pull/138606) perf(skills): reuse catalog rendering for optional remote notes
- [#138605](https://github.com/openclaw/openclaw/pull/138605) perf(media): bound directive prefix casing
- [#138356](https://github.com/openclaw/openclaw/pull/138356) fix(providers): self-hosted model discovery drops runtime context for most models after a clock step
- [#138362](https://github.com/openclaw/openclaw/pull/138362) fix(agents): recover final summaries after transient post-tool failures
- [#137390](https://github.com/openclaw/openclaw/pull/137390) fix(anthropic): name the failing field when rejecting malformed Claude user questions
- [#138586](https://github.com/openclaw/openclaw/pull/138586) perf(queues): avoid redundant mixed-route scans
- [#138436](https://github.com/openclaw/openclaw/pull/138436) fix(openai): honor settings and validate required-input history
- [#138598](https://github.com/openclaw/openclaw/pull/138598) test(qa): verify fallback receipts and visible acknowledgments
- [#138541](https://github.com/openclaw/openclaw/pull/138541) fix(ui): avoid native notification downloads in browsers
- [#138593](https://github.com/openclaw/openclaw/pull/138593) fix(ui): preserve rich preview metadata beside shortcodes
- [#137336](https://github.com/openclaw/openclaw/pull/137336) fix(cli): reject blank log numeric options
- [#138520](https://github.com/openclaw/openclaw/pull/138520) refactor(sqlite): share bounded worker error diagnostics
- [#126548](https://github.com/openclaw/openclaw/pull/126548) fix(ui): keep Stop available while reconnecting
- [#138487](https://github.com/openclaw/openclaw/pull/138487) fix(slack): retry explicit rate-limit rejections
- [#138572](https://github.com/openclaw/openclaw/pull/138572) fix(ci): keep ancillary PR checks alive after delayed draft events
- [#128644](https://github.com/openclaw/openclaw/pull/128644) docs(providers): replace inferrs with llmman
- [#138425](https://github.com/openclaw/openclaw/pull/138425) fix: stop abandoned session transcript searches
- [#138458](https://github.com/openclaw/openclaw/pull/138458) fix(agents): stop canceled runs retaining prepared runtime state
- [#138399](https://github.com/openclaw/openclaw/pull/138399) fix(browser): finalize stderr before reporting attach diagnostics
- [#138449](https://github.com/openclaw/openclaw/pull/138449) fix: allow environment-only agent runs without a native harness
- [#138511](https://github.com/openclaw/openclaw/pull/138511) fix(sessions): preserve writer ownership in transcript reports
- [#131901](https://github.com/openclaw/openclaw/pull/131901) fix(system-agent): isolate Codex sessions per conversation
- [#138535](https://github.com/openclaw/openclaw/pull/138535) perf(plugins): prepare enabled-state facts once per inventory pass
- [#138297](https://github.com/openclaw/openclaw/pull/138297) ci: run CLI tests with fewer jobs and builds
- [#136411](https://github.com/openclaw/openclaw/pull/136411) fix(plugins): emit warning diagnostics through the warning sink
- [#138195](https://github.com/openclaw/openclaw/pull/138195) perf(logging): reuse resolved default redaction patterns
- [#138414](https://github.com/openclaw/openclaw/pull/138414) perf(channels): bound Unicode preparation when splitting presentations
- [#138565](https://github.com/openclaw/openclaw/pull/138565) fix(gateway): preserve queued replies during restart
- [#137342](https://github.com/openclaw/openclaw/pull/137342) fix(channels): keep quiet progress and the tool log under toolProgress
- [#138470](https://github.com/openclaw/openclaw/pull/138470) improve(sessions): reduce cleanup work for excluded sessions
- [#137439](https://github.com/openclaw/openclaw/pull/137439) fix(ui): expose config mode and accordion selection state programmatically
- [#138510](https://github.com/openclaw/openclaw/pull/138510) refactor(memory): reduce repeated database reads during search
- [#138549](https://github.com/openclaw/openclaw/pull/138549) fix(commands): preserve dashboard skill selection in native commands
- [#138506](https://github.com/openclaw/openclaw/pull/138506) refactor(storage): use Kysely for delivery state transitions
- [#138526](https://github.com/openclaw/openclaw/pull/138526) fix: show actionable errors when cloud cleanup is pending
- [#138482](https://github.com/openclaw/openclaw/pull/138482) fix(ci): keep ready PR checks alive after delayed draft events
- [#138509](https://github.com/openclaw/openclaw/pull/138509) refactor(storage): reject async hooks at compile time
- [#138498](https://github.com/openclaw/openclaw/pull/138498) fix(ci): repair full release fixture and startup gates
- [#138507](https://github.com/openclaw/openclaw/pull/138507) refactor(storage): keep lease transactions on their acquired database
- [#138563](https://github.com/openclaw/openclaw/pull/138563) docs(lobster): clarify plugin installation
- [#138542](https://github.com/openclaw/openclaw/pull/138542) fix(file-transfer): directory tools hide filenames from direct model calls
- [#138538](https://github.com/openclaw/openclaw/pull/138538) fix(workers): fence queued transcript commits by live turn ownership
- [#138497](https://github.com/openclaw/openclaw/pull/138497) feat(gateway): hot reload dashboard enablement
- [#138477](https://github.com/openclaw/openclaw/pull/138477) fix(agents): retain local Gateway tools through admission
- [#138508](https://github.com/openclaw/openclaw/pull/138508) improve(sessions): reduce database queries when resuming long transcripts
- [#138393](https://github.com/openclaw/openclaw/pull/138393) perf(plugins): prepare doctor artifact candidates once
- [#138442](https://github.com/openclaw/openclaw/pull/138442) fix: serve fresh bytes for mutable media
- [#138523](https://github.com/openclaw/openclaw/pull/138523) fix(exec): clear delivered completion notices after external polls
- [#138462](https://github.com/openclaw/openclaw/pull/138462) fix(logging): hot reload retained loggers and browser import permission
- [#138463](https://github.com/openclaw/openclaw/pull/138463) docs(database): record contracts for a future backend
- [#138475](https://github.com/openclaw/openclaw/pull/138475) fix(native): preserve disconnect errors during cleanup
- [#138539](https://github.com/openclaw/openclaw/pull/138539) test(android): derive locale expectation from packaged resources
- [#138380](https://github.com/openclaw/openclaw/pull/138380) fix(sessions): preserve logical shared-store ownership
- [#138519](https://github.com/openclaw/openclaw/pull/138519) fix: preserve other restart markers when one reply finishes
- [#137614](https://github.com/openclaw/openclaw/pull/137614) perf(gateway): resolve heartbeat enrollment once per health and status snapshot
- [#138529](https://github.com/openclaw/openclaw/pull/138529) fix(ui): reduce dashboard startup download size
- [#138505](https://github.com/openclaw/openclaw/pull/138505) fix(storage): avoid creating shared state during blob reads
- [#138521](https://github.com/openclaw/openclaw/pull/138521) perf(gateway): collect plugin node policy commands in one pass
- [#138517](https://github.com/openclaw/openclaw/pull/138517) fix: reuse existing bootstrap files in read-only workspaces
- [#138481](https://github.com/openclaw/openclaw/pull/138481) test(sessions): scope reclamation faults to their connection
- [#138402](https://github.com/openclaw/openclaw/pull/138402) fix(memory): keep frozen plugin managers usable
- [#138384](https://github.com/openclaw/openclaw/pull/138384) fix(workboard): nest card payloads so blocked cards are not graded as tool failures
- [#138433](https://github.com/openclaw/openclaw/pull/138433) perf(vydra): prepare result URL keys once per extraction
- [#138317](https://github.com/openclaw/openclaw/pull/138317) fix: Testbox runs fail on large dirty checkouts

#### 🐛 New Issues
- [#138272](https://github.com/openclaw/openclaw/issues/138272) Android Talk (gateway-relay) drops with "no live response owner" on task-requiring turns — confirmed on 2026.7.1-2→2026.8.2→2026.9.1 `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬6
- [#138368](https://github.com/openclaw/openclaw/issues/138368) [Bug]: llm_input and before_prompt_build hooks firing only with default model (regression) `bug` `regression` `P2` `clawsweeper:no-new-fix-pr` 💬4
- [#138610](https://github.com/openclaw/openclaw/issues/138610) [Bug]: read rejects cursor 0 on an empty first line and can trap agents in a retry loop `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬4
- [#137991](https://github.com/openclaw/openclaw/issues/137991) [Bug]: Resumed subagent task remains failed after run replacement `maintainer` `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬3
- [#138684](https://github.com/openclaw/openclaw/issues/138684) [Bug]: self-update leaves gateway stopped when workboard plugin's build-hash manifest fails the clean-checkout safety check 💬3
- [#138663](https://github.com/openclaw/openclaw/issues/138663) [Bug]: Nested/stacked scrollbars (up to 3 deep) in expanded tool-call activity (Control UI) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#138630](https://github.com/openclaw/openclaw/issues/138630) [Bug]: Discord Working previews remain beside normal replies after heartbeat timeouts on 2026.9.1 `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#138642](https://github.com/openclaw/openclaw/issues/138642) Cover atomic managed skill-directory symlink replacement `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `issue-rating: 🌊 off-meta tidepool` 💬3
- [#138480](https://github.com/openclaw/openclaw/issues/138480) Directory tools hide entries and saved manifests from direct model calls `bug` `no-stale` `P1` `clawsweeper:fix-shape-clear` 💬3
- [#138370](https://github.com/openclaw/openclaw/issues/138370) [Bug]: normalizeRegisteredMemoryManager's Proxy throws on a frozen plugin search manager, doctor.memory.status fails `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬3
- [#138419](https://github.com/openclaw/openclaw/issues/138419) Bug: Control UI rejects a valid Mermaid decision flowchart in 2026.9.1 `maintainer` `P2` `issue-rating: 🦪 silver shellfish` `impact:ux-friction` 💬3
- [#137914](https://github.com/openclaw/openclaw/issues/137914) Codex native thread is lost when compaction rotates session generation `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#138672](https://github.com/openclaw/openclaw/issues/138672) [Bug]: llama-cpp managed setup fails on macOS 26 arm64 — 15s --version timeout vs ~37s unsigned-binary security scan `security` `no-stale` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#138437](https://github.com/openclaw/openclaw/issues/138437) automations runs requires --id while sibling commands take a positional job id `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` `clawsweeper:linked-pr-open` 💬2
- [#138279](https://github.com/openclaw/openclaw/issues/138279) Feature: ship Linux companion builds for aarch64 (deb + AppImage) `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#138706](https://github.com/openclaw/openclaw/issues/138706) [Bug]: Windows Job anchor reintroduces a visible Gateway console despite the hidden VBS launcher `bug` `no-stale` `bug:behavior` `P1` 💬2
- [#138652](https://github.com/openclaw/openclaw/issues/138652) [Bug]: Config validator rejects auto-written `plugins.installs` key, blocking scheduled-task gateway start (2026.9.1 Windows) `bug` `bug:crash` 💬2
- [#138632](https://github.com/openclaw/openclaw/issues/138632) [Bug]: v2026.9.1 top-level requester settle wake drops completed subagent result (`requester settle wake deferred too many times`) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬2
- [#138614](https://github.com/openclaw/openclaw/issues/138614) [Feature]: iOS Chat: Support hardware keyboard Return/Cmd+Return to send message `enhancement` `no-stale` `P2` `clawsweeper:fix-shape-clear` 💬2
- [#138288](https://github.com/openclaw/openclaw/issues/138288) [telegram] isolated polling worker poll-start logged at info level on every getUpdates poll (19k+/day per fleet) `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#138662](https://github.com/openclaw/openclaw/issues/138662) Reasoning prose is published when a standalone NO_REPLY line accompanies it — silent-reply detection is a phrase allowlist that fails open `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#138620](https://github.com/openclaw/openclaw/issues/138620) 2026.9.1: update repair loses external service policy in fresh Doctor child and cannot converge `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#138650](https://github.com/openclaw/openclaw/issues/138650) [Bug]: Temporary CI sync cleanup drops failure captures `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#138589](https://github.com/openclaw/openclaw/issues/138589) [Bug]: LM Studio discovery caps detected context at 64000, ignoring larger loaded instance context `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#138561](https://github.com/openclaw/openclaw/issues/138561) [Bug]: active-memory plugin stops recalling after 2026.8.2 upgrade, with no signal at info log level `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#138590](https://github.com/openclaw/openclaw/issues/138590) [Bug]: Context usage meter measures against native contextWindow instead of effective budget `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#138569](https://github.com/openclaw/openclaw/issues/138569) [Feature]: Redesign OpenClaw WebUI for Better Usability and Streamlined Agent Workflows `enhancement` `P3` 💬2
- [#138408](https://github.com/openclaw/openclaw/issues/138408) [Bug]: Nested tsdown declaration builds consume ancestor type dependencies `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬2
- [#138540](https://github.com/openclaw/openclaw/issues/138540) [Bug]: ask_user (mcp__openclaw__ask_user) never delivers to Telegram, silently falls back to Control UI only `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#138592](https://github.com/openclaw/openclaw/issues/138592) [Bug]: realtime `conversation.item.truncate` uses wall-clock, not audio played — rejected truncates leave the model believing it spoke `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#138584](https://github.com/openclaw/openclaw/issues/138584) Web UI chat blocked 100% by verified-inference owner gate: probe succeeds but credential fingerprint can never be re-derived (Windows, v2026.9.1) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#138531](https://github.com/openclaw/openclaw/issues/138531) [Bug]: # L5 — Upstream-issue: model-fallback triggert niet bij zachte providerfout (definitief, 2026-09-03) `bug` `no-stale` `regression` `P1` 💬2
- [#137927](https://github.com/openclaw/openclaw/issues/137927) Internal context block (<<<BEGIN_OPENCLAW_INTERNAL_CONTEXT>>>) leaks into visible Telegram message text `P1` `impact:session-state` `impact:security` 💬2
- [#138426](https://github.com/openclaw/openclaw/issues/138426) Managed local model setup should choose and verify a model for the Gateway hardware `maintainer` 💬2
- [#138409](https://github.com/openclaw/openclaw/issues/138409) gateway-active-work drain telt controller-sessie als blocker - deadlock bij plugin-updates `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#138443](https://github.com/openclaw/openclaw/issues/138443) [Bug]: Cold Talk discovery still blocks the Gateway on full plugin imports `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#138468](https://github.com/openclaw/openclaw/issues/138468) Add Gemini 3.8 Flash and Cerebras Qwen 3.8 27B `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#138493](https://github.com/openclaw/openclaw/issues/138493) Reliability: prevent relayed A2A content from rendering as verified native agent output `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#138518](https://github.com/openclaw/openclaw/issues/138518) [Bug]: One finishing reply cancels other restart recovery markers `bug` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬2
- [#138528](https://github.com/openclaw/openclaw/issues/138528) Stuck-session recovery discards the blocked_tool_call classification at abort(), so a cron run killed by the exec-approval gate reports no cause (run history: "cron isolated agent run aborted"; chat alert: "Check automation history for details.") `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬2
- [#138430](https://github.com/openclaw/openclaw/issues/138430) iOS: gateway.roles + Tailscale onboarding leaves operator disconnected 💬2
- [#138308](https://github.com/openclaw/openclaw/issues/138308) workboard_comment/heartbeat/release return isError:true on success when the card status is "blocked" (details.status collides with the host tool-result contract) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#138422](https://github.com/openclaw/openclaw/issues/138422) [Bug]: Headless cron sessions: approval binder denies && chains and pipelines (SYSTEM_RUN_DENIED) while ; passes; parallel Bash calls in one turn all fail (2026.8.2) `P1` `impact:other` 💬2
- [#138339](https://github.com/openclaw/openclaw/issues/138339) [Bug]: Control UI update restarts a freshly activated systemd gateway after five seconds `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#138036](https://github.com/openclaw/openclaw/issues/138036) [Bug]: Port/process diagnostics inherit unrelated application environment `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬2
- [#138491](https://github.com/openclaw/openclaw/issues/138491) [Bug]: authorized operator-token CLI rotation and revocation fail `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬2
- [#138424](https://github.com/openclaw/openclaw/issues/138424) Windows: claude-cli backend cannot launch — pathToClaudeCodeExecutable gets the bare command, not the resolved .exe (spawn-path counterpart to #134960) `no-stale` `P1` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬2
- [#138486](https://github.com/openclaw/openclaw/issues/138486) [Bug]: Chrome MCP startup failure can report cleanup complete while its subprocess is still running `bug` `maintainer` `P2` `clawsweeper:needs-live-repro` 💬2
- [#138721](https://github.com/openclaw/openclaw/issues/138721) [Feature]: Durable Reef plugin workflows with broker-backed guards `maintainer` 💬1
- [#138729](https://github.com/openclaw/openclaw/issues/138729) [Bug]: Plugin-only tools.allow agents fail with 'no registered tools matched `bug` `bug:behavior` 💬1
- [#138530](https://github.com/openclaw/openclaw/issues/138530) [Bug]: Text exec directives reject or drop the following task `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#138705](https://github.com/openclaw/openclaw/issues/138705) Managed local-model setup can pass while the first CPU chat times out `maintainer` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:source-repro` 💬1
- [#138515](https://github.com/openclaw/openclaw/issues/138515) openclaw delegation-tool config proposals never fire openclaw.approval.requested; report needsApproval/proposalId with no actionable surface anywhere `P1` `clawsweeper:source-repro` `issue-rating: 🦞 diamond lobster` `impact:ux-friction` 💬1
- [#138661](https://github.com/openclaw/openclaw/issues/138661) buzz: replies omit the NIP-10 p tag of the replied-to author, so Buzz mobile Activity never shows bot replies `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#138704](https://github.com/openclaw/openclaw/issues/138704) [Bug]: Chat navigation forgets an uncertain GitHub publication `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#138660](https://github.com/openclaw/openclaw/issues/138660) [Bug]: Native AI setup recovery conflates rejected tests with saved settings `bug` `maintainer` `clawsweeper:source-repro` `impact:auth-provider` 💬1
- [#138702](https://github.com/openclaw/openclaw/issues/138702) Plugin SDK: expose host-issued continuation ownership for `continueAgent` executions `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#138668](https://github.com/openclaw/openclaw/issues/138668) Bug: native session catalog drops results from hosts that finish after the partial response `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#138664](https://github.com/openclaw/openclaw/issues/138664) [Feature]: AGENTS.md gets no compliance-priming line in the system prompt, unlike SOUL/MEMORY/USER.md `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#138548](https://github.com/openclaw/openclaw/issues/138548) [Bug]: composer can retain the fallback model label after recovery `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#138571](https://github.com/openclaw/openclaw/issues/138571) [Bug]: Passive draft events can displace ready ancillary PR validation `bug` `maintainer` 💬1
- [#138564](https://github.com/openclaw/openclaw/issues/138564) Queued RPC replies lose restart recovery before final delivery `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#138676](https://github.com/openclaw/openclaw/issues/138676) fix: agent deletion cannot purge its fenced session database `maintainer` `P1` `clawsweeper:source-repro` `impact:session-state` 💬1
- [#138677](https://github.com/openclaw/openclaw/issues/138677) [Bug]: Native declaration receipts accept ancestor checkout inputs `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#138657](https://github.com/openclaw/openclaw/issues/138657) [Bug]: Stale `gateway*.lock*` files survive an unclean stop and wedge `openclaw gateway restart` as "already running under schtasks" (2026.9.1 Windows) `bug` `bug:crash` `P1` `impact:crash-loop` 💬1
- [#138573](https://github.com/openclaw/openclaw/issues/138573) [Bug]: OpenAI live steering waits for completion when runtime context is present `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#138613](https://github.com/openclaw/openclaw/issues/138613) [Bug]: blank --port is treated as omitted by the shared Gateway CLI parser `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#138616](https://github.com/openclaw/openclaw/issues/138616) Global board updates notify the wrong session viewers `maintainer` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-security-review` 💬1
- [#138525](https://github.com/openclaw/openclaw/issues/138525) [Bug]: PR CI watcher reports GREEN from an unrelated PR run sharing the head SHA `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#138644](https://github.com/openclaw/openclaw/issues/138644) [Bug]: CLI no-output watchdog kills the turn during Claude Code auto-compaction — the defer path counts tool calls but has no signal for an in-flight compaction `P1` `clawsweeper:needs-live-repro` `impact:session-state` `issue-rating: 🐚 platinum hermit` 💬1
- [#138547](https://github.com/openclaw/openclaw/issues/138547) [Bug]: saved task panel can hide the compact Home conversation `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#138634](https://github.com/openclaw/openclaw/issues/138634) Deterministic gateway-level output footer/template (session cost + context %) for outgoing channel messages `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#138629](https://github.com/openclaw/openclaw/issues/138629) 2026.9.1: bundled Codex ACP adapter returns end_turn for terminal failed turns without typed sessionFailure `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-live-repro` 💬1
- [#138580](https://github.com/openclaw/openclaw/issues/138580) ACP raw external target is used as the OpenClaw session owner `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#138570](https://github.com/openclaw/openclaw/issues/138570) [Bug]: Explicit strict Canvas previews lose typed input on capability renewal `bug` `maintainer` `P2` `clawsweeper:source-repro` 💬1
- [#138479](https://github.com/openclaw/openclaw/issues/138479) [Bug]: Slack writes stop after explicit rate-limit rejection `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#138602](https://github.com/openclaw/openclaw/issues/138602) [Bug]: cron.get reports a healthy, existing cron job as "not found" when called from that agent's own heartbeat sub-session `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#138599](https://github.com/openclaw/openclaw/issues/138599) Auto-compaction deadlocks when session exceeds compaction model context window (reasoning-only -> retries exhausted -> stalled; manual compact succeeds) `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `impact:session-state` 💬1
- [#138513](https://github.com/openclaw/openclaw/issues/138513) [Feature]: Let a single-user Gateway owner set their own profile without GitHub OAuth, and keep it independent of the agent's own GitHub identity 💬1
- [#138245](https://github.com/openclaw/openclaw/issues/138245) [Feature] Output guards: catch pseudo tool-calls emitted as plain text + stream repetition/length guard — before they poison session history `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#138587](https://github.com/openclaw/openclaw/issues/138587) [Feature]: Previewable conversation-position rail in Control UI `maintainer` `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` 💬1
- [#138591](https://github.com/openclaw/openclaw/issues/138591) browser.tabCleanup.idleMinutes and maxTabsPerSession are hardcoded; shared multi-agent gateways need them configurable `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#138588](https://github.com/openclaw/openclaw/issues/138588) [Bug] Telegram group update silently dropped: spooled + offset committed but never materialized (no error logged) `P1` `impact:message-loss` 💬1
- [#138546](https://github.com/openclaw/openclaw/issues/138546) [Bug]: native /dashboard can select a workspace skill instead of the bundled workflow `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#138476](https://github.com/openclaw/openclaw/issues/138476) [Docs Bug]: Lobster guide says no installation is required for the separately published plugin `no-stale` `P2` `clawsweeper:fix-shape-clear` `clawsweeper:queueable-fix` 💬1
- [#138471](https://github.com/openclaw/openclaw/issues/138471) [Bug]: Local CLI tools lose embedded Gateway context after admission `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#138532](https://github.com/openclaw/openclaw/issues/138532) [Bug]: Discord realtime voice stops after a partial-frame provider pause `maintainer` `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:source-repro` 💬1
- [#138567](https://github.com/openclaw/openclaw/issues/138567) [Regression]: Restore Telegram-first owner control plane for updates and protected input `P2` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-product-decision` `clawsweeper:needs-security-review` 💬1
- [#138522](https://github.com/openclaw/openclaw/issues/138522) [Bug]: Completed process notices remain queued after MCP and Codex polls `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#138555](https://github.com/openclaw/openclaw/issues/138555) [Bug]: requester-settle truncates child completion to 512 chars before parent processing `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#138514](https://github.com/openclaw/openclaw/issues/138514) [Bug]: Reusing an existing read-only workspace fails during bootstrap staging `bug` 💬1
- [#138560](https://github.com/openclaw/openclaw/issues/138560) [Bug]: Windows Control UI update aborts before install with managed-service-handoff-failed `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:source-repro` `P0` 💬1
- [#138554](https://github.com/openclaw/openclaw/issues/138554) Discord channel emits a phantom internal-runtime-context event reusing the real message's ID `P3` 💬1
- [#138552](https://github.com/openclaw/openclaw/issues/138552) [Bug]: Native approvals retain old configuration after hot reload `bug` `maintainer` `P2` `clawsweeper:no-new-fix-pr` 💬1
- [#138474](https://github.com/openclaw/openclaw/issues/138474) Gateway 2026.8.2: synchronous node:sqlite transactions + memory-worker lock spin freeze the entire gateway (45-90s) on a large agent DB `P1` `impact:other` 💬1
- [#138446](https://github.com/openclaw/openclaw/issues/138446) [Bug]: Linux release requests silently skip when main advances `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#138499](https://github.com/openclaw/openclaw/issues/138499) [Bug]: Timed-out cron session leaves session-scoped CLI task running `bug` `maintainer` `P1` `clawsweeper:no-new-fix-pr` 💬1
- [#138503](https://github.com/openclaw/openclaw/issues/138503) Discord: include reply-target message content in inbound context `P2` `impact:session-state` `maturity:stable` 💬1
- [#138466](https://github.com/openclaw/openclaw/issues/138466) [Feature]: Resize Fleet cell compute limits after creation `P3` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#138488](https://github.com/openclaw/openclaw/issues/138488) [Bug]: Windows gateway cannot restart after 2026.9.1 upgrade without standalone OpenSSL `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#138489](https://github.com/openclaw/openclaw/issues/138489) [Bug]: SystemAgent Gateway restart schedules without restart-sentinel continuation `P1` `clawsweeper:no-new-fix-pr` `clawsweeper:needs-maintainer-review` `clawsweeper:needs-product-decision` 💬1
- [#138432](https://github.com/openclaw/openclaw/issues/138432) [Bug]: Dashboard bootstrap never sends hello with explicit no-auth mode `bug` `maintainer` 💬1
- [#138395](https://github.com/openclaw/openclaw/issues/138395) [Bug]: ChatGPT Codex backend (openai-chatgpt-responses) omits store:false — 400 "Store must be set to false" 💬1
- [#138306](https://github.com/openclaw/openclaw/issues/138306) [Bug]: Git backup silently produces an unrestorable dump — node:sqlite truncates TEXT at embedded NUL, collapsing distinct primary keys 💬1
- [#138421](https://github.com/openclaw/openclaw/issues/138421) agent exec with environment-only OpenAI authentication fails without Codex `bug` `maintainer` `P1` `clawsweeper:source-repro` 💬1
- [#138724](https://github.com/openclaw/openclaw/issues/138724) Cloud sessions should start without a Gateway checkout `enhancement` `maintainer`
- [#138723](https://github.com/openclaw/openclaw/issues/138723) [Bug][Regression] Codex native subagent completion cannot wake its parent run (not_streaming / no_active_run); parent hangs to the command-lane ceiling
- [#138722](https://github.com/openclaw/openclaw/issues/138722) [Bug]: memory chunker emits chunks ~2.2x the configured cap (overlap carry not enforced); one oversized chunk aborts the whole index
- [#138686](https://github.com/openclaw/openclaw/issues/138686) [Bug]: terminated Windows PID returns EPERM and blocks stale-owner recovery
- [#138698](https://github.com/openclaw/openclaw/issues/138698) [Feature]: Connect Mac gateways through browser sign-in and website handoff `maintainer`

#### 🔒 Closed Issues
- [#107814](https://github.com/openclaw/openclaw/issues/107814) [Bug]: gpt-5.3-codex-spark emits empty arguments for required tool calls
- [#131807](https://github.com/openclaw/openclaw/issues/131807) [Bug]: System-agent conversations share one Codex session key and invalidate fresh turns
- [#110771](https://github.com/openclaw/openclaw/issues/110771) WebChat persists internal records and loses durable turn status
- [#103159](https://github.com/openclaw/openclaw/issues/103159) Recurring "LLM request failed: provider rejected the request schema or tool payload" — 6 events in ~28 hours, unknown root cause
- [#137024](https://github.com/openclaw/openclaw/issues/137024) [Bug]: NO_REPLY silence is defeated by settled-turn fallback — agentTurn cron announces a placeholder on every healthy run
- [#90082](https://github.com/openclaw/openclaw/issues/90082) [Bug] active-memory circuit breaker too aggressive; fallback prompt pollutes main session (v2026.6.1)
- [#137991](https://github.com/openclaw/openclaw/issues/137991) [Bug]: Resumed subagent task remains failed after run replacement
- [#126848](https://github.com/openclaw/openclaw/issues/126848) Transient network failure on the final post-tool_use model call discards the whole completed turn — no replay/checkpoint of the side-effect-free delivery call
- [#121984](https://github.com/openclaw/openclaw/issues/121984) [Bug]: Plugin session cleanup clears case-distinct Matrix and Signal sessions
- [#137367](https://github.com/openclaw/openclaw/issues/137367) [Bug]: AskUserQuestion validation error is a generic, unhelpful message with no field-level detail
- [#138480](https://github.com/openclaw/openclaw/issues/138480) Directory tools hide entries and saved manifests from direct model calls
- [#137570](https://github.com/openclaw/openclaw/issues/137570) 2026.9.1: health/heartbeat summary rebuilds the agent roster per agent (O(agents²)); 632-agent gateway blocks 45-57s every ~6 min after ready
- [#138370](https://github.com/openclaw/openclaw/issues/138370) [Bug]: normalizeRegisteredMemoryManager's Proxy throws on a frozen plugin search manager, doctor.memory.status fails
- [#137473](https://github.com/openclaw/openclaw/issues/137473) [Bug]: CRT/Phosphor composer drops parts of JetBrains Mono ligatures at the caret
- [#138419](https://github.com/openclaw/openclaw/issues/138419) Bug: Control UI rejects a valid Mermaid decision flowchart in 2026.9.1
- [#137914](https://github.com/openclaw/openclaw/issues/137914) Codex native thread is lost when compaction rotates session generation
- [#138437](https://github.com/openclaw/openclaw/issues/138437) automations runs requires --id while sibling commands take a positional job id
- [#121592](https://github.com/openclaw/openclaw/issues/121592) Workboard SQLite store leaks connections on plugin-registry replacement
- [#130396](https://github.com/openclaw/openclaw/issues/130396) Long-running exec tool-result fails to attach to agent turn (missing tool result / transcript repair)
- [#119616](https://github.com/openclaw/openclaw/issues/119616) [Bug]:
- [#138288](https://github.com/openclaw/openclaw/issues/138288) [telegram] isolated polling worker poll-start logged at info level on every getUpdates poll (19k+/day per fleet)
- [#138650](https://github.com/openclaw/openclaw/issues/138650) [Bug]: Temporary CI sync cleanup drops failure captures
- [#138569](https://github.com/openclaw/openclaw/issues/138569) [Feature]: Redesign OpenClaw WebUI for Better Usability and Streamlined Agent Workflows
- [#138408](https://github.com/openclaw/openclaw/issues/138408) [Bug]: Nested tsdown declaration builds consume ancestor type dependencies
- [#138426](https://github.com/openclaw/openclaw/issues/138426) Managed local model setup should choose and verify a model for the Gateway hardware
- [#138443](https://github.com/openclaw/openclaw/issues/138443) [Bug]: Cold Talk discovery still blocks the Gateway on full plugin imports
- [#138468](https://github.com/openclaw/openclaw/issues/138468) Add Gemini 3.8 Flash and Cerebras Qwen 3.8 27B
- [#138518](https://github.com/openclaw/openclaw/issues/138518) [Bug]: One finishing reply cancels other restart recovery markers
- [#138308](https://github.com/openclaw/openclaw/issues/138308) workboard_comment/heartbeat/release return isError:true on success when the card status is "blocked" (details.status collides with the host tool-result contract)
- [#138422](https://github.com/openclaw/openclaw/issues/138422) [Bug]: Headless cron sessions: approval binder denies && chains and pipelines (SYSTEM_RUN_DENIED) while ; passes; parallel Bash calls in one turn all fail (2026.8.2)
- [#138339](https://github.com/openclaw/openclaw/issues/138339) [Bug]: Control UI update restarts a freshly activated systemd gateway after five seconds
- [#138036](https://github.com/openclaw/openclaw/issues/138036) [Bug]: Port/process diagnostics inherit unrelated application environment
- [#138491](https://github.com/openclaw/openclaw/issues/138491) [Bug]: authorized operator-token CLI rotation and revocation fail
- [#138530](https://github.com/openclaw/openclaw/issues/138530) [Bug]: Text exec directives reject or drop the following task
- [#138548](https://github.com/openclaw/openclaw/issues/138548) [Bug]: composer can retain the fallback model label after recovery
- [#136145](https://github.com/openclaw/openclaw/issues/136145) [Bug]: Gateway test state can be released before received work finishes
- [#127348](https://github.com/openclaw/openclaw/issues/127348) `sessions tail --follow` maps SIGINT and SIGTERM to a successful exit
- [#138571](https://github.com/openclaw/openclaw/issues/138571) [Bug]: Passive draft events can displace ready ancillary PR validation
- [#138564](https://github.com/openclaw/openclaw/issues/138564) Queued RPC replies lose restart recovery before final delivery
- [#138657](https://github.com/openclaw/openclaw/issues/138657) [Bug]: Stale `gateway*.lock*` files survive an unclean stop and wedge `openclaw gateway restart` as "already running under schtasks" (2026.9.1 Windows)
- [#138573](https://github.com/openclaw/openclaw/issues/138573) [Bug]: OpenAI live steering waits for completion when runtime context is present
- [#138525](https://github.com/openclaw/openclaw/issues/138525) [Bug]: PR CI watcher reports GREEN from an unrelated PR run sharing the head SHA
- [#138547](https://github.com/openclaw/openclaw/issues/138547) [Bug]: saved task panel can hide the compact Home conversation
- [#138479](https://github.com/openclaw/openclaw/issues/138479) [Bug]: Slack writes stop after explicit rate-limit rejection
- [#138513](https://github.com/openclaw/openclaw/issues/138513) [Feature]: Let a single-user Gateway owner set their own profile without GitHub OAuth, and keep it independent of the agent's own GitHub identity
- [#138588](https://github.com/openclaw/openclaw/issues/138588) [Bug] Telegram group update silently dropped: spooled + offset committed but never materialized (no error logged)
- [#138546](https://github.com/openclaw/openclaw/issues/138546) [Bug]: native /dashboard can select a workspace skill instead of the bundled workflow
- [#138476](https://github.com/openclaw/openclaw/issues/138476) [Docs Bug]: Lobster guide says no installation is required for the separately published plugin
- [#138471](https://github.com/openclaw/openclaw/issues/138471) [Bug]: Local CLI tools lose embedded Gateway context after admission
- [#138532](https://github.com/openclaw/openclaw/issues/138532) [Bug]: Discord realtime voice stops after a partial-frame provider pause
- [#138522](https://github.com/openclaw/openclaw/issues/138522) [Bug]: Completed process notices remain queued after MCP and Codex polls
- [#138514](https://github.com/openclaw/openclaw/issues/138514) [Bug]: Reusing an existing read-only workspace fails during bootstrap staging
- [#138554](https://github.com/openclaw/openclaw/issues/138554) Discord channel emits a phantom internal-runtime-context event reusing the real message's ID
- [#137472](https://github.com/openclaw/openclaw/issues/137472) [Bug]: Control UI chat renders RTL messages left-to-right when the text starts with a bidi control (RLM/RLI)
- [#138474](https://github.com/openclaw/openclaw/issues/138474) Gateway 2026.8.2: synchronous node:sqlite transactions + memory-worker lock spin freeze the entire gateway (45-90s) on a large agent DB
- [#132624](https://github.com/openclaw/openclaw/issues/132624) [Bug]: Telegram rich messages leak literal <details> tags when the block contains headings, code, quotes, or tables
- [#132133](https://github.com/openclaw/openclaw/issues/132133) [Bug]: config validate rejects channel keys the plugin actually serving the channel accepts
- [#138446](https://github.com/openclaw/openclaw/issues/138446) [Bug]: Linux release requests silently skip when main advances
- [#138503](https://github.com/openclaw/openclaw/issues/138503) Discord: include reply-target message content in inbound context
- [#138395](https://github.com/openclaw/openclaw/issues/138395) [Bug]: ChatGPT Codex backend (openai-chatgpt-responses) omits store:false — 400 "Store must be set to false"
- [#138306](https://github.com/openclaw/openclaw/issues/138306) [Bug]: Git backup silently produces an unrestorable dump — node:sqlite truncates TEXT at embedded NUL, collapsing distinct primary keys
- [#138421](https://github.com/openclaw/openclaw/issues/138421) agent exec with environment-only OpenAI authentication fails without Codex

### Hermes Agent (`nousresearch/hermes-agent`)

**Stars:** 241,487 · **Open issues:** 39,717 · **Last push:** <1h ago

On September 5, 2026, Hermes Agent saw no new releases but several important merges, including a fix for the macOS parent-death watchdog that addresses marker drift and improvements to the dashboard preventing PTY input from blocking the event loop. Another significant fix stops the embedded TUI from repainting unnecessarily on OS app switches. Notably, a new issue was raised regarding Desktop SSH mode returning a 401 error on every API call since a recent commit, indicating that the served session token is an import-time snapshot rather than the expected SSH session token. Additional new issues include support requests for GPT-6 Astra and various bug reports affecting desktop functionality and user experience.

#### ✅ Merged PRs
- [#103172](https://github.com/NousResearch/hermes-agent/pull/103172) fix(desktop): macOS parent-death watchdog treats ps: marker drift as inconclusive
- [#93565](https://github.com/NousResearch/hermes-agent/pull/93565) fix(dashboard): prevent PTY input from blocking event loop
- [#103165](https://github.com/NousResearch/hermes-agent/pull/103165) fix(dashboard): stop the embedded TUI repainting on every OS app-switch

#### 🐛 New Issues
- [#102930](https://github.com/NousResearch/hermes-agent/issues/102930) Desktop SSH mode: 401 on every API call since d3630f8532 — served session token is an import-time snapshot, not the --ssh-session-token-file token `type/bug` `backend/ssh` `comp/cli` `area/auth` 💬6
- [#103015](https://github.com/NousResearch/hermes-agent/issues/103015) [Tracker]: GPT-6 Astra support across Hermes Agent `type/feature` `comp/agent` `provider/openai` `P2` 💬5
- [#103221](https://github.com/NousResearch/hermes-agent/issues/103221) [Bug]: OP_BIOMETRIC_UNLOCK_ENABLED is filtered out by _OP_ENV_ALLOWLIST, so 1Password's documented app-integration switch never reaches op `type/bug` `comp/agent` `area/auth` `P3` 💬3
- [#102619](https://github.com/NousResearch/hermes-agent/issues/102619) [Bug]: 'Too big for this machine' tag applied to models that fit easily on unified-memory Macs (Qwen3.8 27B on 128 GB M5 Max) `type/bug` `comp/cli` `backend/local` `P3` 💬2
- [#103246](https://github.com/NousResearch/hermes-agent/issues/103246) [Feature]: Support Astra native compaction with reasoning updates `type/feature` `comp/agent` `provider/openai` `P3` 💬2
- [#103234](https://github.com/NousResearch/hermes-agent/issues/103234) Same issue on macOS: Remote backend "ready" in logs, but UI still shows SSH connection failed `type/bug` `duplicate` `P2` `comp/desktop` 💬2
- [#103313](https://github.com/NousResearch/hermes-agent/issues/103313) Desktop SSH remote mode 401s every sensitive API call: mount_spa injects a stale session token (regression from 5f1feb5344) `type/bug` `duplicate` `backend/ssh` `comp/cli` 💬1
- [#103230](https://github.com/NousResearch/hermes-agent/issues/103230) [Bug]: Desktop: profile wake requests silently die in the 3-slot queue — UI hangs on "Waking up…" forever with no timeout feedback `type/bug` `P2` `comp/desktop` `bug` 💬1
- [#103257](https://github.com/NousResearch/hermes-agent/issues/103257) [Bug]: cron and webhook subcommands exit 0 when the command fails `type/bug` `comp/cli` `comp/cron` `platform/webhook` 💬1
- [#103244](https://github.com/NousResearch/hermes-agent/issues/103244) [Bug]: Native Windows Git Bash turns 2>NUL into literal NUL files in the workspace `type/bug` `tool/terminal` `backend/local` `P2` 💬1
- [#103237](https://github.com/NousResearch/hermes-agent/issues/103237) Desktop SSH remote gateway: /api/ws auth fails forever (dial failed loop) — stale session token frozen at mount_spa() import time `type/bug` `duplicate` `backend/ssh` `comp/cli` 💬1
- [#103303](https://github.com/NousResearch/hermes-agent/issues/103303) kanban: decompose_triage_task lets scratch siblings inherit the root's workspace_path, so concurrent workers share one directory `type/bug` `comp/cron` `P3`
- [#103304](https://github.com/NousResearch/hermes-agent/issues/103304) [Bug]: Desktop compaction repeatedly hits 300s Codex timeout, then quota-failing fallback (402) `type/bug` `comp/agent` `provider/openai` `P2`
- [#103301](https://github.com/NousResearch/hermes-agent/issues/103301) [Bug]: delegate_task timeout does not stop children — parent reports "timed out" while children keep running and committing `type/bug` `comp/agent` `tool/delegate` `P2`
- [#103302](https://github.com/NousResearch/hermes-agent/issues/103302) [Bug]: subagent worktree isolation silently degrades to shared cwd and appends to the parent repo's .gitignore `type/bug` `comp/tools` `tool/delegate` `area/config`
- [#103288](https://github.com/NousResearch/hermes-agent/issues/103288) Windows desktop hard-codes System32 OpenSSH ssh.exe; a broken in-box OpenSSH makes the desktop boot-loop forever `type/bug` `P2` `sweeper:risk-platform-windows` `comp/desktop`
- [#103291](https://github.com/NousResearch/hermes-agent/issues/103291) [Setup]: Cannot be installed `type/bug` `comp/cli` `P2` `needs-repro`
- [#103020](https://github.com/NousResearch/hermes-agent/issues/103020) [Validation]: Prove GPT-6 Astra compatibility across Hermes CLI and gateway `type/test` `comp/agent` `comp/cli` `comp/gateway`
- [#103280](https://github.com/NousResearch/hermes-agent/issues/103280) [Bug]: browser_vision times out in local mode after successful CDP navigation `type/bug` `tool/browser` `tool/vision` `P3`
- [#103281](https://github.com/NousResearch/hermes-agent/issues/103281) [Bug]: WhatsApp self-chat mode ingests separate Meta AI prompts as agent commands (LID/PN identity confusion) `type/bug` `comp/gateway` `comp/plugins` `platform/whatsapp`
- [#103285](https://github.com/NousResearch/hermes-agent/issues/103285) [Bug]: browser_click sends accessibility refs to Playwright as CSS selectors `type/bug` `comp/tools` `tool/browser` `P2`
- [#103287](https://github.com/NousResearch/hermes-agent/issues/103287) gateway /steer confirms 'queued' but silently strands text when no run is active `type/bug` `comp/agent` `comp/gateway` `comp/tui`
- [#103277](https://github.com/NousResearch/hermes-agent/issues/103277) [Bug]: config set reports success but private-URL settings remain false in a Desktop profile `type/bug` `comp/cli` `tool/browser` `area/config`
- [#103271](https://github.com/NousResearch/hermes-agent/issues/103271) hermes verify records evidence under session 'default' but edit-tracking uses the real session id → unclearable false 'verification stale' `type/bug` `comp/agent` `comp/cli` `P2`
- [#103270](https://github.com/NousResearch/hermes-agent/issues/103270) [Feature]: Add a field for custom flags and a button to unload local models with llama.cpp. `type/feature` `comp/cli` `P3` `comp/desktop`
- [#103262](https://github.com/NousResearch/hermes-agent/issues/103262) SSE run-events endpoint (/v1/runs/{run_id}/events) is single-consumer per run_id, not broadcast `type/bug` `comp/gateway` `P2` `sweeper:risk-message-delivery`
- [#103266](https://github.com/NousResearch/hermes-agent/issues/103266) Feature request: --quick / offline flag for hermes doctor to avoid slow-run false negatives in automation (boot hooks) `type/feature` `comp/cli` `P3`
- [#103258](https://github.com/NousResearch/hermes-agent/issues/103258) API Server needs a plugin credential-authorizer boundary `type/feature` `comp/gateway` `comp/plugins` `area/auth`
- [#103259](https://github.com/NousResearch/hermes-agent/issues/103259) [Feature]: Desktop should allow a remote server `type/feature` `P3` `comp/desktop`
- [#103251](https://github.com/NousResearch/hermes-agent/issues/103251) Dashboard profile switcher ignores a profile's display_name and always shows the canonical id `type/bug` `comp/cli` `P3` `comp/dashboard`
- [#103245](https://github.com/NousResearch/hermes-agent/issues/103245) Desktop Comment Mode loses its destination after Browser pop-out `type/bug` `P3` `comp/desktop`
- [#103236](https://github.com/NousResearch/hermes-agent/issues/103236) [Bug] Gateway en macOS muere con SIGTERM y no auto-revive (Telegram queda caído) `type/bug` `comp/gateway` `platform/telegram` `P2`
- [#103235](https://github.com/NousResearch/hermes-agent/issues/103235) Background review completion log reports result=none for patch and write_file (prefix classifier misses the tool's message formats) `type/bug` `comp/agent` `tool/skills` `P3`

#### 🔒 Closed Issues
- [#93958](https://github.com/NousResearch/hermes-agent/issues/93958) [Bug]: Desktop local spawn immediately exits with code 0 on macOS after port announcement (parent watchdog / readiness lifecycle)
- [#95693](https://github.com/NousResearch/hermes-agent/issues/95693) [Bug]: macOS — parent-death watchdog orphans every backend after a TZ change; DST on Oct 25 hits all EU users

---

## ⚙️ AI Infrastructure

### vLLM (`vllm-project/vllm`)

**Stars:** 90,981 · **Open issues:** 7,568 · **Last push:** <1h ago

On September 5, 2026, there were no new releases for vLLM, but several important updates were merged, including enhancements to async memory management with PR #55202 and a fix for warm-up requirements in CUDA graph captures via PR #55341. Notably, PR #55234 restored the DSpark cache-group capability under optimized Python, while PR #55288 fixed a double beginning-of-sequence token issue in the `LLM.chat()` function for multimodal models. Among newly reported issues, #55291 highlights a serious bug with the Qwen3.6-27B-FP8 model that collapses into repeated tokens, which could significantly impact user interactions. Overall, the day marked routine maintenance with a focus on performance improvements and bug fixes.

#### ✅ Merged PRs
- [#55202](https://github.com/vllm-project/vllm/pull/55202) [Perf] Ensure async h2d copies are pinned in more places
- [#55178](https://github.com/vllm-project/vllm/pull/55178) [Bugfix] Preserve Mamba state for padded prompt tails
- [#54518](https://github.com/vllm-project/vllm/pull/54518) [Bugfix][NIXL] Don't assert when a failed transfer is cleaned up twice
- [#55341](https://github.com/vllm-project/vllm/pull/55341) [Bugfix][V2] Warm up kernels before capturing CUDA graphs
- [#55392](https://github.com/vllm-project/vllm/pull/55392) Revert "[CI] Remove deleted nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16 and its arch aliases"
- [#50945](https://github.com/vllm-project/vllm/pull/50945) [1/2][Model Runner V2] DBO support, eager mode
- [#54169](https://github.com/vllm-project/vllm/pull/54169) [Mypy] Fix mypy typing for P models
- [#54374](https://github.com/vllm-project/vllm/pull/54374) [Bugfix][Spec Decode] Drop FlashAttention's AOT schedule for a sliding-window DFlash drafter
- [#55234](https://github.com/vllm-project/vllm/pull/55234) [Bugfix][MLA] Restore DSpark cache-group capability under optimized Python
- [#54887](https://github.com/vllm-project/vllm/pull/54887) [Bugfix] Reject 0 or non-positive max concurrency
- [#55331](https://github.com/vllm-project/vllm/pull/55331) [Perf] Read VidCom2 frame budgets once
- [#54826](https://github.com/vllm-project/vllm/pull/54826) [Bugfix][Spec Decode] Honour the draft's attention_backend on Model Runner V2
- [#51392](https://github.com/vllm-project/vllm/pull/51392) [Quantization] Support online quantization with partially pre-quantized checkpoints
- [#55354](https://github.com/vllm-project/vllm/pull/55354) [ROCm][CI] Bump ROCk release image build timeout to 3h
- [#54860](https://github.com/vllm-project/vllm/pull/54860) [CI] Surface why the CRCR nightly report cannot read its Buildkite secret
- [#55136](https://github.com/vllm-project/vllm/pull/55136) [CI] Raise AMD Spec Decode Eagle 1 job timeout to 35min
- [#50220](https://github.com/vllm-project/vllm/pull/50220) [Bug-fix] Fix MoE fused sum row offsets
- [#54814](https://github.com/vllm-project/vllm/pull/54814) [Rust Frontend][gRPC] Preserve multimodal metadata for remote-prefill decode
- [#54941](https://github.com/vllm-project/vllm/pull/54941) [Transformers backend] Find attention with a fuser and attach vLLM's layer to it
- [#51826](https://github.com/vllm-project/vllm/pull/51826) [feat] add torchcodec as audio loader and implement selective audio backend
- [#54285](https://github.com/vllm-project/vllm/pull/54285) [Frontend] Warn when removed guided-decoding fields are present in a request
- [#55349](https://github.com/vllm-project/vllm/pull/55349) [CI] Only run GitHub Actions on the main repo
- [#55069](https://github.com/vllm-project/vllm/pull/55069) [Bugfix][MoE] Allow TRTLLM FP8 block-scale MoE with SwiGLU clamp
- [#55288](https://github.com/vllm-project/vllm/pull/55288) [Bugfix] Fix double BOS in LLM.chat() for multimodal models
- [#54921](https://github.com/vllm-project/vllm/pull/54921) Fast Start
- [#54177](https://github.com/vllm-project/vllm/pull/54177) [Mypy] Fix mypy typing for L models
- [#55315](https://github.com/vllm-project/vllm/pull/55315) [Test] Split test_sampling_mask_preserves_top_k_boundary_ties to remove Triton-kernel-specific assumption Description
- [#54873](https://github.com/vllm-project/vllm/pull/54873) [Qwen3.8-Flash-Next] Improve QSA sparse GQA for prefill and short-ctx decode
- [#55317](https://github.com/vllm-project/vllm/pull/55317) [CI/Build] Fix flaky failures in CPU CI image building
- [#54935](https://github.com/vllm-project/vllm/pull/54935) [Security] Cap GLMGA video sampling to prevent request-driven resource exhaustion
- [#55214](https://github.com/vllm-project/vllm/pull/55214) [Bugfix][Docs] Package glm5next nvidia subtree and fix its docstrings
- [#52494](https://github.com/vllm-project/vllm/pull/52494) [AMD][kimik3][ROCm][Perf] Fuse MLA q/kv RMSNorm in AMD Kimi-K3 MLA wrapper
- [#54687](https://github.com/vllm-project/vllm/pull/54687) [Kernel] Reuse Qwen4Exp HC combine-norm for MTP input
- [#53497](https://github.com/vllm-project/vllm/pull/53497) [CI/Test] Add expert parallelism coverage to external LB tests
- [#53037](https://github.com/vllm-project/vllm/pull/53037) [XPU] Fix device assignment for DP external LB
- [#55245](https://github.com/vllm-project/vllm/pull/55245) [SpecDecode]Fix spec decode warmup device selection
- [#54915](https://github.com/vllm-project/vllm/pull/54915) [Qwen3.8-Flash-Next] Compact indexer logits workspace to improve prefill efficiency
- [#55266](https://github.com/vllm-project/vllm/pull/55266) [XPU][UT] skip GLM-5.3-Flash test on XPU
- [#52358](https://github.com/vllm-project/vllm/pull/52358) [MRV2][Metrics] Support `CUDAGraphStat` in MRV2
- [#54265](https://github.com/vllm-project/vllm/pull/54265) [Docs] Add example for Renderer.render_cmpl() usage
- [#52755](https://github.com/vllm-project/vllm/pull/52755) [Rust Frontend] Record Mooncake/NIXL KV-connector metrics
- [#54886](https://github.com/vllm-project/vllm/pull/54886) [Bugfix] Reject tokenizer-less Qwen VL processor init
- [#55271](https://github.com/vllm-project/vllm/pull/55271) docs: note that enforce_eager also disables torch.compile
- [#54878](https://github.com/vllm-project/vllm/pull/54878) [Bugfix][KV Connector] Fix DecodeBenchConnector prefix block selection
- [#55246](https://github.com/vllm-project/vllm/pull/55246) [ROCm][CI] Bump ROCk base to ROCm 10.0
- [#47941](https://github.com/vllm-project/vllm/pull/47941) [EC Connector] P2P NIXL + CPU EC Connector
- [#55061](https://github.com/vllm-project/vllm/pull/55061) [Performance][DSv4] Size dequant gather launch grid by rows
- [#55126](https://github.com/vllm-project/vllm/pull/55126) [Bugfix][PD] Pad resumed speculative decode requests
- [#51886](https://github.com/vllm-project/vllm/pull/51886) [KVConnector] Add retention interval to OffloadingConnector
- [#55014](https://github.com/vllm-project/vllm/pull/55014) [ROCm][CI] Build and publish TheRock nightly docker images
- [#51381](https://github.com/vllm-project/vllm/pull/51381) [Core][KV Events] Echo session_id on GPU BlockStored events
- [#54908](https://github.com/vllm-project/vllm/pull/54908) [Bugfix][DCP] Materialize prefill keys on non-owner ranks
- [#54901](https://github.com/vllm-project/vllm/pull/54901) [Perf][Model Runner V2] Compact sampling masks on GPU instead of unpacking the full-vocab bitmask on CPU

#### 🐛 New Issues
- [#55291](https://github.com/vllm-project/vllm/issues/55291) [Bug]: Qwen3.6-27B-FP8 eventually collapses into repeated ! tokens, affecting all subsequent requests `bug` 💬5
- [#55312](https://github.com/vllm-project/vllm/issues/55312) [Bug]: Speculative decoding draft and target can select attention backends with disjoint KV cache layouts `speculative-decoding` 💬4
- [#55279](https://github.com/vllm-project/vllm/issues/55279) [Bug]: DFlash2 (dflash method) deterministic cumulative OOB — engine dies with CUDA IMA / Xid 31 after ~11k decode steps under sampling load (sm_80, v0.27.1) 💬3
- [#55373](https://github.com/vllm-project/vllm/issues/55373) [Bug][ROCm] Sparse indexer clears the full max_model_len logits buffer every decode step: 17% throughput on a 1M context `rocm` 💬2
- [#55383](https://github.com/vllm-project/vllm/issues/55383) AOT compile cache key ignores the LoRA module tree, loading an incompatible artifact (`KeyError: 'weight'`) 💬1
- [#55357](https://github.com/vllm-project/vllm/issues/55357) [Bug] Qwen3.8-Flash-Next (qwen4_exp) + MTP: episodic 0% draft acceptance + repetition collapse in thinking block until max_tokens (SM120, bf16 KV, nightly @73029d4) `tool-calling` `quantization` 💬1
- [#55281](https://github.com/vllm-project/vllm/issues/55281) [Bug]: Whisper segment timestamps collapse under `prompt` — the reference timestamp decoding rules are not applied 💬1
- [#55351](https://github.com/vllm-project/vllm/issues/55351) [Bug][ROCm] gfx950 FP32 router GEMM is unreachable for DeepSeek-family models: shape (6144, 256) is listed but the weight is bf16 `rocm` `deepseek` 💬1
- [#55345](https://github.com/vllm-project/vllm/issues/55345) [Bug][ROCm] QuickReduce converts bf16 to fp16 without saturation: activations above 65504 silently become inf `rocm` `quantization` 💬1
- [#55344](https://github.com/vllm-project/vllm/issues/55344) [Bug][ROCm] Startup crash (bare AssertionError) when the AITER custom-AR cutoff is below the fused allreduce+RMSNorm compile range `rocm` 💬1
- [#55327](https://github.com/vllm-project/vllm/issues/55327) [ROCm] gfx950 top-k policy is gated on topK==1024, leaving index_topk=2048 models (GLM-5.x) on the generic 10-way split `rocm` `glm` 💬1
- [#55280](https://github.com/vllm-project/vllm/issues/55280) [Bug][ROCm] GLM-5.3-Flash kpool 32-page split (hybrid block_size=1152) GPU Memory access fault on MTP decode `rocm` `glm` 💬1
- [#55265](https://github.com/vllm-project/vllm/issues/55265) [RFC] Length-aware batch composition for admission scheduling — experimental evidence, fairness fix, and where it breaks 💬1
- [#55336](https://github.com/vllm-project/vllm/issues/55336) [Bug]: Model Runner V2 never locks the workspace, so post-capture growth silently invalidates captured CUDA graphs
- [#55406](https://github.com/vllm-project/vllm/issues/55406) [Bug]: Nemotron-3.5-Lightning-30B-A3B-NVFP4 dies with CUDA illegal memory access in cudagraph replay on SM110 (Jetson Thor); deterministic 5-request repro; --enforce-eager works around it
- [#55397](https://github.com/vllm-project/vllm/issues/55397) [Bug]: NVFP4 dense linear kernel selection on SM12x picks FlashInferCuteDslNvFp4W4A16LinearKernel over the W4A4 Cutlass kernel (prefill regression on GB10) `bug` `nvidia`
- [#55395](https://github.com/vllm-project/vllm/issues/55395) [Bug]: Muse Glimmer tool parser leaks incomplete ATEM markers `tool-calling`
- [#55394](https://github.com/vllm-project/vllm/issues/55394) [RFC]: Tile-union QSA sparse attention for prefill (Qwen3.8-Flash-Next): share the K/V gather across neighbouring query rows, −4.7 % TTFT on GB10
- [#55381](https://github.com/vllm-project/vllm/issues/55381) [Bug]: Scheduler batch defaults silently fall back to smallest-GPU values inside MIG containers (NVML permission error swallowed), costing 28-53% throughput on H200 2g.35gb `scheduler`
- [#55382](https://github.com/vllm-project/vllm/issues/55382) [Feature]: Let `reasoning_effort` set a default `thinking_token_budget` via a server-side effort→budget map `tool-calling`
- [#55350](https://github.com/vllm-project/vllm/issues/55350) [Bug]: [Kimi-K3][Hopper] Low-M TP8 KDA projection fails CUTLASS DSL compilation for sm_90a `bug` `nvidia` `quantization` `kimi`
- [#55267](https://github.com/vllm-project/vllm/issues/55267) [RFC]: add uno spec decode `RFC`
- [#55339](https://github.com/vllm-project/vllm/issues/55339) [RFC]: Unify ModelOpt MoE methods (mirror of #49381) `RFC` `quantization`
- [#55332](https://github.com/vllm-project/vllm/issues/55332) [Feature]: Validate hash-only decode requests in token-in/token-out protocol `feature request`
- [#55324](https://github.com/vllm-project/vllm/issues/55324) [Bug]: /v1/messages streaming omits stop_sequence from message_delta (exclude_unset) `bug`
- [#55284](https://github.com/vllm-project/vllm/issues/55284) [Bug]: Responses API streaming aborts mid-stream (nameless ResponseFunctionToolCallItem) with Qwen3.8 + qwen3_coder + DFlash speculative decoding `speculative-decoding` `tool-calling`
- [#55322](https://github.com/vllm-project/vllm/issues/55322) [Bug]: Qwen3.5/3.6 MTP resolves n_predict=None for multimodal-wrapper checkpoints (mtp_num_hidden_layers is read from the wrapper, not text_config) `multi-modality`
- [#55323](https://github.com/vllm-project/vllm/issues/55323) [Bug]: num_speculative_tokens cannot default from the draft config's n_predict for MTP models (TypeError in SpeculativeConfig MTP auto-detection)
- [#55313](https://github.com/vllm-project/vllm/issues/55313) [Bug]: Qwen3.8 + DSpark + streaming json_schema can desync XGrammar and emit 250k trailing spaces with HTTP 200 `bug` `structured-output`
- [#55295](https://github.com/vllm-project/vllm/issues/55295) [Bug]: Responses browser.find raises ActionFind validation errors `bug`
- [#55276](https://github.com/vllm-project/vllm/issues/55276) [Doc]: Clarify ITL vs. TPOT Prometheus metrics

#### 🔒 Closed Issues
- [#55169](https://github.com/vllm-project/vllm/issues/55169) [Bug]: occasional gross error in memory profiling
- [#46531](https://github.com/vllm-project/vllm/issues/46531) [CI Flaky test]: Flaky batch invariant test with FLEX_ATTENTION
- [#47281](https://github.com/vllm-project/vllm/issues/47281) [Bug]: Humming backend hits CUDA illegal memory access on Qwen3.5-397B-A17B-GPTQ-Int4 startup, while Marlin works
- [#53975](https://github.com/vllm-project/vllm/issues/53975) [Bug]: legacy guided_json is silently ignored - request returns 200 with unconstrained free-form text
- [#53691](https://github.com/vllm-project/vllm/issues/53691) [Performance]: DSA indexer is computed redundantly on every TP rank (NVIDIA / CUDA)
- [#41716](https://github.com/vllm-project/vllm/issues/41716) [Bug]: GPT-OSS-20B repeats itself for some prompts
- [#41719](https://github.com/vllm-project/vllm/issues/41719) [Bug]: TokenizersBackend fallback returns tokenizer without `max_chars_per_token`
- [#54649](https://github.com/vllm-project/vllm/issues/54649) [Bug]: Kimi-K3 DSpark/DCP illegal memory access
- [#54907](https://github.com/vllm-project/vllm/issues/54907) [Bug][DCP] GLM-5.3 dense prefill consumes uninitialized K rows on non-owner ranks
- [#41724](https://github.com/vllm-project/vllm/issues/41724) [Feature]: [IR] mm_encoder_attn migration on hold pending FlashInfer workspace support
- [#54670](https://github.com/vllm-project/vllm/issues/54670) [Bug]: multimodal convert plus skip-tokenizer-init breaks processor construction
- [#55336](https://github.com/vllm-project/vllm/issues/55336) [Bug]: Model Runner V2 never locks the workspace, so post-capture growth silently invalidates captured CUDA graphs
- [#55197](https://github.com/vllm-project/vllm/issues/55197) [Bug]: Offline LLM.chat() can add BOS twice for multimodal models
- [#49863](https://github.com/vllm-project/vllm/issues/49863) [Bug] Modular MoE reports zero local experts after a backend releases source weights

### SGLang (`sgl-project/sglang`)

**Stars:** 35,478 · **Open issues:** 5,178 · **Last push:** <1h ago

On September 5, 2026, SGLang experienced a routine day with no new releases but notable progress reflected in merged pull requests. Key updates included enhancements to GPU performance, such as the vectorization of alloc_extend_naive to eliminate Python loops and the reuse of output storage across prefill CUDA graphs, both aimed at optimizing memory management. Additionally, several fixes and features were introduced, including response-level token IDs for chat completions via SglExt and addressing mapped courier tensor lifetimes. Among the new issues, the bug regarding a malformed multimodal request causing cascading failures across the engine drew attention, highlighting potential stability concerns.

#### ✅ Merged PRs
- [#38078](https://github.com/sgl-project/sglang/pull/38078) fix: gather CP-sharded tokens before TP-sharded dense MLP under prefill CP
- [#37938](https://github.com/sgl-project/sglang/pull/37938) [Perf] Vectorize alloc_extend_naive to remove the per-request Python loop
- [#38038](https://github.com/sgl-project/sglang/pull/38038) [Memory] Reuse output storage across full prefill CUDA graphs
- [#34488](https://github.com/sgl-project/sglang/pull/34488) [feature] Add response-level input/output token ids to chat completions via SglExt
- [#38076](https://github.com/sgl-project/sglang/pull/38076) [GLM-5.3] Add H200 serving recipe E2E coverage
- [#37965](https://github.com/sgl-project/sglang/pull/37965) [diffusion] fix: preserve mapped courier tensor lifetime
- [#38071](https://github.com/sgl-project/sglang/pull/38071) [GLM-5.3] Remove experimental DSA metadata optimizations
- [#38062](https://github.com/sgl-project/sglang/pull/38062) [Fix] Clear Mamba extra-buffer state on ReqKvInfo
- [#38067](https://github.com/sgl-project/sglang/pull/38067) [Profiler] Add SGLANG_PROFILE_BY_STAGE_DECODE_MIN_BS to defer the decode-stage capture
- [#38066](https://github.com/sgl-project/sglang/pull/38066) [Fix] Read DSA tail request index from ReqKvInfo
- [#35544](https://github.com/sgl-project/sglang/pull/35544) [GDN] Amortize ReplaySSM checkpoint materialization
- [#38060](https://github.com/sgl-project/sglang/pull/38060) [GLM-5.3] Remove remaining context-parallel additions
- [#38065](https://github.com/sgl-project/sglang/pull/38065) Add num_prealloc_ready_tokens to decode load snapshot
- [#38058](https://github.com/sgl-project/sglang/pull/38058) [GLM-5.3] Drop optional FlashAttention and FlashInfer MLA changes
- [#38061](https://github.com/sgl-project/sglang/pull/38061) [GLM-5.3] Extract KPool-specific DSA backend helpers
- [#37954](https://github.com/sgl-project/sglang/pull/37954) fix(qwen3_5): let the GDN gated norm follow the model's device
- [#38059](https://github.com/sgl-project/sglang/pull/38059) [Refactor] Replace defensive getattr with direct field access
- [#37989](https://github.com/sgl-project/sglang/pull/37989) [Docs] Document --retraction-policy, --return-hidden-states-mode, --language-model-only
- [#32172](https://github.com/sgl-project/sglang/pull/32172) [Docs] Clarify OpenAI chat template defaults
- [#38057](https://github.com/sgl-project/sglang/pull/38057) [GLM-5.3] Remove serving lifecycle changes split to #37316
- [#37888](https://github.com/sgl-project/sglang/pull/37888) [Fix] Coordinate FullCG prefix variants across DP ranks
- [#38026](https://github.com/sgl-project/sglang/pull/38026) Update DeepSeek-V4 Pro for B200 FP4 agentic HiCache DSpark
- [#37636](https://github.com/sgl-project/sglang/pull/37636) [Metrics] Export scheduler stage wall time
- [#36267](https://github.com/sgl-project/sglang/pull/36267) [Performance] Optimize Qwen3.5 GDN prefill projection layouts
- [#38015](https://github.com/sgl-project/sglang/pull/38015) [NPU] Optimize the execution logic of NPU pr‑test tasks
- [#38021](https://github.com/sgl-project/sglang/pull/38021) chore: add code owners for the Rust radix tree core
- [#38023](https://github.com/sgl-project/sglang/pull/38023) fix: reformat cosmos3_edge.py to satisfy ruff-format
- [#37278](https://github.com/sgl-project/sglang/pull/37278) fix: align write-through pending across tree cores
- [#37424](https://github.com/sgl-project/sglang/pull/37424) [HiCache] Buffer mode support sidecar pool
- [#37461](https://github.com/sgl-project/sglang/pull/37461) [Metrics] Add rolling scheduler utilization counters
- [#33572](https://github.com/sgl-project/sglang/pull/33572) [Cosmos3] Add cosmos3 Reasoner to llm only inference
- [#37915](https://github.com/sgl-project/sglang/pull/37915) [Diffusion] Make nightly performance measurements robust
- [#38011](https://github.com/sgl-project/sglang/pull/38011) [CI][NPU] Remove model tests from PR-test pipeline
- [#37967](https://github.com/sgl-project/sglang/pull/37967) [Rust] Bound multimodal media ingress
- [#36415](https://github.com/sgl-project/sglang/pull/36415) [Fix] Vacuous marker writes in the cache tests, and an undebited Mamba admission slot
- [#37945](https://github.com/sgl-project/sglang/pull/37945) [diffusion] MiniMax-H3: warm up at the served clip shape
- [#37898](https://github.com/sgl-project/sglang/pull/37898) sm120 32GB mem-tier: raise decode cuda-graph max_bs 24->48 + chunked_prefill 2k->4k
- [#34660](https://github.com/sgl-project/sglang/pull/34660) [mm] refactor mm code for rust tokenizer manager
- [#31755](https://github.com/sgl-project/sglang/pull/31755) [Quant][ue8m0 fix] group requant_weight_ue8m0 reduce reserved gpu memory
- [#37966](https://github.com/sgl-project/sglang/pull/37966) [Memory] Retire graph borrow pool before updating static runs
- [#37750](https://github.com/sgl-project/sglang/pull/37750) [Docs] Refresh TPU model list and link cookbooks
- [#37546](https://github.com/sgl-project/sglang/pull/37546) [sp] Make attention-TP sequence sharding a per-forward batch property
- [#37876](https://github.com/sgl-project/sglang/pull/37876) [mem_cache] Route hybrid SWA full-side kv-row frees through `free_segment`
- [#35255](https://github.com/sgl-project/sglang/pull/35255) Fix: abort handling for dispatched requests after client disconnect
- [#37658](https://github.com/sgl-project/sglang/pull/37658) [AMD][DSv4] Fuse inverse-RoPE into the fp8 wo_a quant (stacked on #37423)
- [#37836](https://github.com/sgl-project/sglang/pull/37836) Fix mamba radix cache ssm state indexing
- [#37890](https://github.com/sgl-project/sglang/pull/37890) [Diffusion] Improve BCG warmup frame-count diagnostics for video models
- [#37580](https://github.com/sgl-project/sglang/pull/37580) [AMD] Skip unused TOPK v2 plan kernel on ROCm
- [#37423](https://github.com/sgl-project/sglang/pull/37423) [AMD][DSv4] Switch output projection gemm (oproj_a) to fp8
- [#31031](https://github.com/sgl-project/sglang/pull/31031) [Intel GPU] Align XPU toml file for rust support
- [#37764](https://github.com/sgl-project/sglang/pull/37764) [AMD][DSv4] Fuse the DSv4 FP4 indexer prefill-schedule preamble into one kernel
- [#37910](https://github.com/sgl-project/sglang/pull/37910) [Diffusion] Fuse LingBot per-token gated residual and RMSNorm modulate
- [#35176](https://github.com/sgl-project/sglang/pull/35176) [AMD] [Kimi-K3] Fuse the KDA input projection into a single GEMM on ROCm
- [#35751](https://github.com/sgl-project/sglang/pull/35751) [XPU] Support GPT-OSS MXFP4 checkpoints on Intel XPU
- [#32902](https://github.com/sgl-project/sglang/pull/32902) [Bugfix] Fix Llama 4 FA3 local attention with paged KV cache
- [#37119](https://github.com/sgl-project/sglang/pull/37119) [AMD] CI: fix Lean decode crash on the EAGLE path
- [#35092](https://github.com/sgl-project/sglang/pull/35092) [AMD] Fix DSV4 unified attention sink TP slice
- [#37937](https://github.com/sgl-project/sglang/pull/37937) [Fix] Register triton.runtime.cache.triton_key in the MPS stub so torch.compile keeps working
- [#37891](https://github.com/sgl-project/sglang/pull/37891) [Diffusion][Docs] Add single-GPU large-VRAM performance notes (B300)
- [#37804](https://github.com/sgl-project/sglang/pull/37804) [diffusion] Reduce hot-path server log noise
- [#37829](https://github.com/sgl-project/sglang/pull/37829) [AMD] Update v4 amd cookbook 0903
- [#37930](https://github.com/sgl-project/sglang/pull/37930) [CI] Fix handle_platform_cp_compatibility reading legacy CP flags off the record
- [#37532](https://github.com/sgl-project/sglang/pull/37532) [XPU][CI] Move XPU tests to nightly and add per-subclass server launch timeout
- [#37206](https://github.com/sgl-project/sglang/pull/37206) [Comm] Drop the in-tree MNNVL CuTe DSL port in favor of FlashInfer 0.6.18
- [#37922](https://github.com/sgl-project/sglang/pull/37922) Add code owner for sglang-simulator
- [#37805](https://github.com/sgl-project/sglang/pull/37805) [diffusion] Remove unreachable Cosmos3 transfer encoding
- [#37887](https://github.com/sgl-project/sglang/pull/37887) Allow the GDN out_proj LoRA target in the CLI
- [#36223](https://github.com/sgl-project/sglang/pull/36223) [CP V1 Deprecation 2/5] Make strategy prefill CP canonical
- [#33824](https://github.com/sgl-project/sglang/pull/33824) [Simulator] Add high-fidelity CPU-based inference simulator
- [#37820](https://github.com/sgl-project/sglang/pull/37820) [CI] Build the Rust extensions for aarch64 too
- [#37395](https://github.com/sgl-project/sglang/pull/37395) [CPU][CI]: rename Xeon CPU CI suites to stage-*-intel

#### 🐛 New Issues
- [#38019](https://github.com/sgl-project/sglang/issues/38019) [Bug] test_unified_radix_cache_kl_cp.py (Qwen3-32B, prefill CP=2 + HiCache) livelocks on KV-pool-full retractions since main 2026-09-04 💬1
- [#38004](https://github.com/sgl-project/sglang/issues/38004) [RFC] Quantization module layout: Config, Scheme, backend kernels 💬1
- [#38031](https://github.com/sgl-project/sglang/issues/38031) [Bug] GLM-5.3-Flash (DSA): HiCache host-tier load-back corrupts generation even without speculative decoding — dropped tool calls, degenerate repetition loops (8×H100, TP8)
- [#37931](https://github.com/sgl-project/sglang/issues/37931) [Bug] DeepSeek-V4-Flash-Vision-Exp on 2x DGX Spark: scheduler OOM-killed during weight load (cookbook cell dgx-spark|flash-vision|fp4) 💬1
- [#38022](https://github.com/sgl-project/sglang/issues/38022) [Bug] A single malformed multimodal request takes down the whole engine, and client retries spread it node-by-node across the cluster 💬1
- [#37936](https://github.com/sgl-project/sglang/issues/37936) Reproducible EAGLE `vectorized_gather_kernel` OOB with concurrent constrained tool request → NCCL abort / Xid 43 💬1
- [#37944](https://github.com/sgl-project/sglang/issues/37944) [Feature] Dynamic Prefill Context Parallelism 💬1
- [#37963](https://github.com/sgl-project/sglang/issues/37963) [Bug] Mapped-layer courier can reuse CUDA storage before compute finishes
- [#38075](https://github.com/sgl-project/sglang/issues/38075) [Feature] Implement the standard gRPC Health Checking Protocol
- [#38074](https://github.com/sgl-project/sglang/issues/38074) [NVFP4 MoE Marlin fallback] prepare_moe_nvfp4_layer_for_marlin leaks ~0.66 GiB/layer; old params retained by a {fqn: tensor} registry → OOM on ≤48GB cards
- [#38073](https://github.com/sgl-project/sglang/issues/38073) [NVFP4 MoE Marlin fallback] w13/w2_blockscale_swizzled dead copies waste ~3.5 GiB per GPU (SM80–SM90x)
- [#38069](https://github.com/sgl-project/sglang/issues/38069) [Feature] Per-request opt-out from prefix cache insertion (skip_cache_insert)
- [#38029](https://github.com/sgl-project/sglang/issues/38029) [Bug] EAGLE DSA draft backend misses KVIndexTranslator in FP8 MHA prefix reads
- [#38013](https://github.com/sgl-project/sglang/issues/38013) [Bug]
- [#38009](https://github.com/sgl-project/sglang/issues/38009) [Bug] [DFlash2] Greedy output diverges from target-only Qwen3.8-27B when thinking is enabled
- [#38002](https://github.com/sgl-project/sglang/issues/38002) [Bug] Responses cancel endpoint accepts non-background responses
- [#37993](https://github.com/sgl-project/sglang/issues/37993) [Playground] Verified cell: h200 / flash-official / fp4 / low-latency / single
- [#37983](https://github.com/sgl-project/sglang/issues/37983) [Bug] VisionTritonAttention drops MiMo-style window attention and sinks
- [#37968](https://github.com/sgl-project/sglang/issues/37968) [Bug] GLM-5.3-flash mixed image-video requests assign video frame offsets to image items
- [#37904](https://github.com/sgl-project/sglang/issues/37904) [PDMux] scheduler event loop deadlocks in decode_stream.synchronize() when a mixed decode+split-prefill batch follows a >=4K-token prefill (hybrid GDN models)
- [#37892](https://github.com/sgl-project/sglang/issues/37892) [Bug] DeepSeek-V4 long-context prefill: illegal memory access in the DSA indexer top-k kernel (`topk_v1.cuh:348`); the paged prefill path can never reach the v2 kernel
- [#37919](https://github.com/sgl-project/sglang/issues/37919) The initial CI workflows were stopped by the PR gate because the `run-ci` label is missing, so no tests were executed.
- [#37912](https://github.com/sgl-project/sglang/issues/37912) [Bug] [Rust gateway] reasoning_effort: support full OpenAI 7-tier set (blocked on smg release)
- [#37896](https://github.com/sgl-project/sglang/issues/37896) [Bug] NameError: name 'return_lse' is not defined in trtllm_mla backend

#### 🔒 Closed Issues
- [#20865](https://github.com/sgl-project/sglang/issues/20865) [Feature] Improve Unit Test Coverage
- [#34235](https://github.com/sgl-project/sglang/issues/34235) [Bug] sglang 0.5.17 + hierarchical cache + chunked prefill 16K: scheduler hang in DSV4 sparse prefill (watchdog abort) on DeepSeek-V4 FP8 / H20 — plus sampling device-side assert on 0.5.16+PR
- [#28618](https://github.com/sgl-project/sglang/issues/28618) [RFC] Add SM89/L20 support for DeepSeek-V4-Flash-FP8
- [#27356](https://github.com/sgl-project/sglang/issues/27356) [Feature] Add KVarN KV-cache quantization support for long-context reasoning
- [#33984](https://github.com/sgl-project/sglang/issues/33984) [Usage]: HiCacheL1 + L2 + Mooncake(SSD) Drop‑off in Cache Hit Rate
- [#37745](https://github.com/sgl-project/sglang/issues/37745) [Bug] FlashInfer MNNVL AllReduce reduces GLM-5 NEXTN acceptance on Blackwell
- [#30532](https://github.com/sgl-project/sglang/issues/30532) [Bug] Scheduler watchdog timeout / eviction deadlock with HiCache + EAGLE on DeepSeek-V4-Flash (v0.5.14)
- [#30084](https://github.com/sgl-project/sglang/issues/30084) The deepseekv4 model experienced a performance degradation in ttft when subjected to pd separation.
- [#30037](https://github.com/sgl-project/sglang/issues/30037) [Bug] sglang:v0.5.14-cu130 deploy GLM-5.2-FP8 RuntimeError: shape '[2048, -1, 64]' is invalid for input of size 8368128
- [#30000](https://github.com/sgl-project/sglang/issues/30000) [Bug] GLM52 Continue_final_message mode support
- [#30294](https://github.com/sgl-project/sglang/issues/30294) [Bug] Decode running batch pinned at `max_running_requests - 1` under Chunked Prefill
- [#30263](https://github.com/sgl-project/sglang/issues/30263) [Feature] Per-request opt-out of speculative decoding (RFC: disable_speculative_decoding sampling param)
- [#30262](https://github.com/sgl-project/sglang/issues/30262) [Feature] Complete command-line configuration for multi-node and PD separation scenarios
- [#30233](https://github.com/sgl-project/sglang/issues/30233) [Bug] PD disaggregation: aborted prefill requests (input too long) cause decode to generate garbage from incomplete KV cache
- [#30190](https://github.com/sgl-project/sglang/issues/30190) PD disaggregation over Mooncake multi-protocol (rdma+hip) is unstable on AMD/ROCm: single-node warmup SIGSEGV + cross-node KV transfer err17
- [#38019](https://github.com/sgl-project/sglang/issues/38019) [Bug] test_unified_radix_cache_kl_cp.py (Qwen3-32B, prefill CP=2 + HiCache) livelocks on KV-pool-full retractions since main 2026-09-04
- [#37963](https://github.com/sgl-project/sglang/issues/37963) [Bug] Mapped-layer courier can reuse CUDA storage before compute finishes
- [#37896](https://github.com/sgl-project/sglang/issues/37896) [Bug] NameError: name 'return_lse' is not defined in trtllm_mla backend

### llama.cpp (`ggml-org/llama.cpp`)

**Stars:** 127,072 · **Open issues:** 2,420 · **Last push:** <1h ago

On September 5, 2026, llama.cpp released version v0.4.0, introducing support for Qwen3.8-Flash-Next and Nemotron-3-Puzzle, along with features like on-demand tensor reading, per-slot server context limits, and expanded video input options. This update also includes significant updates to the ggml library, including a major overhaul of sparse flash attention and RDMA capabilities. Among merged pull requests, enhancements to OpenCL elementwise operations and the addition of Adreno xmem SDPA paths stand out. However, new issues have emerged, particularly a bug affecting the Qwen3.8-Flash-Next model where the N-gram embedding table fails to load, leading to considerable slowdowns during prefill, highlighting ongoing challenges in the model's deployment.

#### 🚀 New Releases
- [v0.4.0](https://github.com/ggml-org/llama.cpp/releases/tag/v0.4.0) v0.4.0
- [b10816](https://github.com/ggml-org/llama.cpp/releases/tag/b10816) b10816
- [b10814](https://github.com/ggml-org/llama.cpp/releases/tag/b10814) b10814
- [b10813](https://github.com/ggml-org/llama.cpp/releases/tag/b10813) b10813
- [b10809](https://github.com/ggml-org/llama.cpp/releases/tag/b10809) b10809
- [b10798](https://github.com/ggml-org/llama.cpp/releases/tag/b10798) b10798
- [b10797](https://github.com/ggml-org/llama.cpp/releases/tag/b10797) b10797
- [b10796](https://github.com/ggml-org/llama.cpp/releases/tag/b10796) b10796
- [b10795](https://github.com/ggml-org/llama.cpp/releases/tag/b10795) b10795
- [b10794](https://github.com/ggml-org/llama.cpp/releases/tag/b10794) b10794

#### ✅ Merged PRs
- [#28396](https://github.com/ggml-org/llama.cpp/pull/28396) M3 fa vec tuning
- [#28089](https://github.com/ggml-org/llama.cpp/pull/28089) ui : fix MCP image attachments not displayed in tool block (#25789)
- [#27633](https://github.com/ggml-org/llama.cpp/pull/27633) opencl: extend the elementwise and data‐movement op coverage
- [#26331](https://github.com/ggml-org/llama.cpp/pull/26331) opencl: add Adreno xmem SDPA path
- [#28375](https://github.com/ggml-org/llama.cpp/pull/28375) ci : move more jobs to ccache-buckets
- [#27432](https://github.com/ggml-org/llama.cpp/pull/27432) ui: export conversations from database instead of cached store
- [#28386](https://github.com/ggml-org/llama.cpp/pull/28386) llama.cpp : bump version to 0.4.0
- [#28127](https://github.com/ggml-org/llama.cpp/pull/28127) Model: add Tencent Hy 4 (hy_v4) preview architecture support
- [#28379](https://github.com/ggml-org/llama.cpp/pull/28379) sync : ggml
- [#28335](https://github.com/ggml-org/llama.cpp/pull/28335) model, mtmd: fix gemma4 vision handling
- [#28373](https://github.com/ggml-org/llama.cpp/pull/28373) metal : add remaining fa-vec tunings for M3 Max
- [#28270](https://github.com/ggml-org/llama.cpp/pull/28270) ui : don't use npx inside package.json script
- [#28364](https://github.com/ggml-org/llama.cpp/pull/28364) ggml : replace compile definitions with version.h.in
- [#28365](https://github.com/ggml-org/llama.cpp/pull/28365) docs : update maintainer PRs link and regenerate AUTHORS
- [#28323](https://github.com/ggml-org/llama.cpp/pull/28323) src : add n_expert_used_max function
- [#28271](https://github.com/ggml-org/llama.cpp/pull/28271) ggml : don't crash when backend search path can't be read
- [#28177](https://github.com/ggml-org/llama.cpp/pull/28177) ggml : remove GGML_CUDA_PEER_MAX_BATCH_SIZE
- [#28354](https://github.com/ggml-org/llama.cpp/pull/28354) vendor: update BoringSSL to 0.20260903.0
- [#28347](https://github.com/ggml-org/llama.cpp/pull/28347) ci:ggml-openvino: disable failing tests
- [#28322](https://github.com/ggml-org/llama.cpp/pull/28322) common : make build info output stream configurable
- [#28332](https://github.com/ggml-org/llama.cpp/pull/28332) ggml-cpu(s390x): fix q5_1 uninitialized v_acc
- [#27610](https://github.com/ggml-org/llama.cpp/pull/27610) sycl: fuse rms_norm+mul+add and add+add residual chains
- [#26863](https://github.com/ggml-org/llama.cpp/pull/26863) SYCL: Refactor GGML_SYCL_ENABLE_MKL_FA to global var

#### 🐛 New Issues
- [#28355](https://github.com/ggml-org/llama.cpp/issues/28355) Misc. bug: Qwen3.8-Flash-Next (qwen4_exp): 51B N-gram embedding table not loaded after build 10665, causing extremely slow prefill `bug-unconfirmed` 💬3
- [#28384](https://github.com/ggml-org/llama.cpp/issues/28384) Misc. bug: [SYCL] test-backend-ops failures CONV_2D, CPY, ROLL, FLASH_ATTN_EXT `bug-unconfirmed` 💬2
- [#28380](https://github.com/ggml-org/llama.cpp/issues/28380) Feature Request: Support per-layer active expert count (top-k) for MoE architectures `enhancement` 💬2
- [#28404](https://github.com/ggml-org/llama.cpp/issues/28404) Eval bug: two co-resident llama-server processes (one per GPU) — second replica deterministically dies at ggml-cuda.cu:107 after CUDA graph reuse; GGML_CUDA_DISABLE_GRAPHS=1 fixes it (Windows, 2x RTX 5060 Ti, sm_120) 💬1
- [#28403](https://github.com/ggml-org/llama.cpp/issues/28403) Eval bug: CUDA SOFT_MAX "invalid argument" on qwen4_exp / Qwen3.8-Flash-Next (Blackwell, compute_120a) `bug-unconfirmed` 💬1
- [#28400](https://github.com/ggml-org/llama.cpp/issues/28400) Misc. bug: URL query is parsed into the host when the URL has no path `bug-unconfirmed` 💬1
- [#28360](https://github.com/ggml-org/llama.cpp/issues/28360) Eval bug: RPC Issue in add GLM-5.3-Flash (GLM5-Next) support - #27773#27773 `bug-unconfirmed` 💬1
- [#28361](https://github.com/ggml-org/llama.cpp/issues/28361) Eval bug: K2-Horizon models fail to load `bug-unconfirmed` 💬1
- [#28416](https://github.com/ggml-org/llama.cpp/issues/28416) CUDA: sm_70 (V100) builds with toolkit 12.9.x fail weight-buffer allocation on an empty 32GB GPU; identical source built with 12.8.x loads fine
- [#28397](https://github.com/ggml-org/llama.cpp/issues/28397) Misc. bug: build-info.cmake reports an unrelated repository's commit when a release tarball is built inside a git tree
- [#28377](https://github.com/ggml-org/llama.cpp/issues/28377) Eval bug: CUDA `cublasGemmEx` "an internal operation failed" during prefill of specific prompts (qwen4exp / Qwen3.8-Flash-Next, GB10 sm_121) — data-dependent, avoided by `-ub 256`
- [#28376](https://github.com/ggml-org/llama.cpp/issues/28376) Misc. bug: MMID shared-memory read-after-write hazard `bug-unconfirmed`
- [#28370](https://github.com/ggml-org/llama.cpp/issues/28370) ggml-cuda: NaN in MoE selection bias can cause conflicting writes to expert IDs `bug-unconfirmed`
- [#28369](https://github.com/ggml-org/llama.cpp/issues/28369) Stall during long-prompt first prefill with DFlash2 spec decode (~120s for 75K tokens)
- [#28368](https://github.com/ggml-org/llama.cpp/issues/28368) cache_prompt reuse changes computed logprobs on a plain (non-hybrid) transformer — reproducible by toggling cache_prompt alone on an otherwise-identical warmed server
- [#28357](https://github.com/ggml-org/llama.cpp/issues/28357) Eval bug: heap corruption with Qwen3-Embedding-0.6B on macOS 26 + Metal — new libmalloc signature and kernel vm_reclaim evidence (likely the same defect as #23072)

#### 🔒 Closed Issues
- [#28113](https://github.com/ggml-org/llama.cpp/issues/28113) Eval bug: CUDA/HIP: MoE models produce garbage output on RDNA3.5 (gfx1151) since #27621
- [#24812](https://github.com/ggml-org/llama.cpp/issues/24812) Qwen3.5 on Vulkan/RADV RX590 produces clustered garbage / question-mark output in warm llama-server streaming
- [#25789](https://github.com/ggml-org/llama.cpp/issues/25789) Misc. bug: webui does not display image attachments returned by MCP tools (tool block regression in #25450, inline references never resolved)
- [#23909](https://github.com/ggml-org/llama.cpp/issues/23909) Feature Request: ADD Q2_0
- [#25855](https://github.com/ggml-org/llama.cpp/issues/25855) Feature Request: Support internlm/Intern-S2-Preview-397B
- [#28355](https://github.com/ggml-org/llama.cpp/issues/28355) Misc. bug: Qwen3.8-Flash-Next (qwen4_exp): 51B N-gram embedding table not loaded after build 10665, causing extremely slow prefill
- [#25742](https://github.com/ggml-org/llama.cpp/issues/25742) Eval bug: models attempt/fail unwanted tool calls to huggingface
- [#25744](https://github.com/ggml-org/llama.cpp/issues/25744) Eval bug: DeepSeek-v4 Flash takes 200 seconds for prefill of 10 tokens.
- [#28047](https://github.com/ggml-org/llama.cpp/issues/28047) RPC: [create_node] invalid data ptr — split scheduler ships compute-flagged views to the wrong RPC worker (reproduced with deepseek4 and glm-dsa, >=2 workers, master)
- [#28318](https://github.com/ggml-org/llama.cpp/issues/28318) mtmd: Gemma 4 E2B/E4B image tokens are decoded non-causally, the models expect causal attention
- [#28048](https://github.com/ggml-org/llama.cpp/issues/28048) Misc. bug: OpenVINO GPU aborts on hybrid recurrent models — `cache_r_l1` view pre-allocated in an OPENVINO0 buffer that cannot run CPY
- [#28281](https://github.com/ggml-org/llama.cpp/issues/28281) Bug: s390x ggml_vec_dot_q5_1_q8_1 reads an uninitialised accumulator
- [#28345](https://github.com/ggml-org/llama.cpp/issues/28345) Misc. bug: SIGFPE (integer divide-by-zero) loading nemotron_h_moe GGUFs whose NextN/MTP blocks have zeroed per-layer expert arrays
- [#28266](https://github.com/ggml-org/llama.cpp/issues/28266) qwen4exp (Qwen3.8-Flash-Next): streaming multi-turn generation collapses to 1-5 tokens after ~2-8K accumulated tokens, HIP/gfx1100, non-deterministic onset

### Ollama (`ollama/ollama`)

**Stars:** 180,165 · **Open issues:** 3,905 · **Last push:** <1h ago

On September 5, 2026, there were no new releases for Ollama, but the team made notable progress with several merged pull requests. Key updates included the addition of Codex compaction support and client tool search capabilities, enhancing the app's functionality. Additionally, macOS MLX payload build processes were optimized for better performance, and Ollama was integrated into the ChatGPT Desktop environment. Among new issues, a significant one emerged regarding the loaded context length not being shown, which raised concerns over silent deviations from the Modelfile's num_ctx parameter. The team may need to prioritize addressing these issues to maintain a seamless user experience.

#### ✅ Merged PRs
- [#18240](https://github.com/ollama/ollama/pull/18240) ci: bound and cache the macOS MLX payload build
- [#18236](https://github.com/ollama/ollama/pull/18236) app: add Ollama to ChatGPT Desktop
- [#18224](https://github.com/ollama/ollama/pull/18224) openai: add Codex compaction support
- [#18223](https://github.com/ollama/ollama/pull/18223) openai: add client tool search support

#### 🐛 New Issues
- [#18229](https://github.com/ollama/ollama/issues/18229) Loaded context length: source not shown (default/env/Modelfile/request) – silent deviation from Modelfile num_ctx 💬2
- [#18242](https://github.com/ollama/ollama/issues/18242) Can't set custom values for Context Length `bug` 💬1
- [#18226](https://github.com/ollama/ollama/issues/18226) Anthropic-compatible /v1/messages: "failed to parse grammar" when a tool schema pattern contains \/ or \- inside array items (breaks Claude Code interactive mode) 💬1
- [#18241](https://github.com/ollama/ollama/issues/18241) jinja exception `bug`
- [#18232](https://github.com/ollama/ollama/issues/18232) CUDA crash (0xc0000409, shared object initialization failed) on Blackwell RTX 5060 Ti — root cause: num_ctx affects Flash Attention MMA kernel shared memory allocation
- [#18231](https://github.com/ollama/ollama/issues/18231) MLX runner: fatal OOM at long context — prefix-cache eviction only counts paged-out snapshots, no alloc-failure retry
- [#18230](https://github.com/ollama/ollama/issues/18230) @AKB0700 I've opened a new pull request, #18, to work on those changes. Once the pull request is ready, I'll request review from you.

#### 🔒 Closed Issues
- [#14116](https://github.com/ollama/ollama/issues/14116) Tiered context length can exhaust VRAM
- [#18074](https://github.com/ollama/ollama/issues/18074) Granite 4.2 models (8B/3B) do not respect safe default context ( eg. 4096) base on available VRAM and cause OOM kills
- [#18220](https://github.com/ollama/ollama/issues/18220) Regression: Gemma 4 26B A4B enters reasoning loop instead of issuing tool calls after Ollama update
- [#18241](https://github.com/ollama/ollama/issues/18241) jinja exception
- [#18230](https://github.com/ollama/ollama/issues/18230) @AKB0700 I've opened a new pull request, #18, to work on those changes. Once the pull request is ready, I'll request review from you.

### LiteLLM (`BerriAI/litellm`)

**Stars:** 58,055 · **Open issues:** 4,879 · **Last push:** <1h ago

On September 5, 2026, there were no new releases for LiteLLM; however, several notable changes were merged, including a fix for the `/v1/compress` and `/v1/retrieve` calls to implement a timeout (#39527), and enhancements to the routing policy with the addition of exception handling for `ServiceUnavailableErrorRetries` (#35853). The CLI saw a significant update with the feature to sync OpenCode models from `/v1/models` (#39789), alongside a fix for the Anthropic integration that prevents cache control from being carried over on translated thinking blocks (#39815). Among the newly reported issues, a bug was identified where service tier settings were silently dropped for the Azure GPT-4.1/4O family when certain parameters were used (#39719), signaling a need for urgent attention.

#### ✅ Merged PRs
- [#39527](https://github.com/BerriAI/litellm/pull/39527) fix(headroom): bound the /v1/compress and /v1/retrieve calls with a timeout
- [#35853](https://github.com/BerriAI/litellm/pull/35853) fix(router): resolve retry_policy by exception hierarchy, add ServiceUnavailableErrorRetries and DefaultRetries
- [#36575](https://github.com/BerriAI/litellm/pull/36575) fix(responses/mcp): keep follow-up calls stateless when store=false
- [#39815](https://github.com/BerriAI/litellm/pull/39815) fix(anthropic): never carry cache_control on translated thinking blocks
- [#39572](https://github.com/BerriAI/litellm/pull/39572) fix(spend-tracking): keep internal service-account key names readable in spend logs
- [#39789](https://github.com/BerriAI/litellm/pull/39789) feat(cli): sync OpenCode models from /v1/models in lite opencode
- [#39802](https://github.com/BerriAI/litellm/pull/39802) fix(proxy): recognize opencode's bare x-session-id header for session affinity
- [#39688](https://github.com/BerriAI/litellm/pull/39688) fix(auto_router): derive tier definitions in prompt editor
- [#39196](https://github.com/BerriAI/litellm/pull/39196) feat(guardrails): roll up Bedrock guardrail cost per usage counter
- [#39675](https://github.com/BerriAI/litellm/pull/39675) fix(complexity_router): fall back to a live peer when the decided tier model is fully cooled down
- [#39808](https://github.com/BerriAI/litellm/pull/39808) fix(jwt): invalidate JWT key mapping cache on /key/regenerate
- [#39388](https://github.com/BerriAI/litellm/pull/39388) fix(model_prices): verified registry audit, Databricks Sep-2026 catalog, realtime image pricing, deprecation dates
- [#39807](https://github.com/BerriAI/litellm/pull/39807) fix(ui): accept any routing group name the backend accepts
- [#39696](https://github.com/BerriAI/litellm/pull/39696) fix(router): bound auto-router classifier latency
- [#39801](https://github.com/BerriAI/litellm/pull/39801) fix(health): probe test_connection with the credential the request names
- [#39361](https://github.com/BerriAI/litellm/pull/39361) fix(bedrock_mantle): anchor MANTLE_HOST_RE so custom Mantle hosts are honored
- [#39797](https://github.com/BerriAI/litellm/pull/39797) fix(auto-router): route 1M complex tier to GPT Sol
- [#39794](https://github.com/BerriAI/litellm/pull/39794) feat(organization): expose PATCH /v2/organization/{organization_id} in the OpenAPI schema
- [#39793](https://github.com/BerriAI/litellm/pull/39793) fix(organization): reject negative limits and unparseable budget_duration on PATCH /v2/organization
- [#39670](https://github.com/BerriAI/litellm/pull/39670) fix(organization): clear org budget limits when PATCH /organization/update sends null
- [#39632](https://github.com/BerriAI/litellm/pull/39632) fix(cost): honor off_peak_pricing in the fireworks_ai and perplexity cost calculators
- [#39589](https://github.com/BerriAI/litellm/pull/39589) fix(proxy): log mid-stream /v1/messages failures as failures with partial usage
- [#39568](https://github.com/BerriAI/litellm/pull/39568) fix(spend-tracking): keep batch spend keys joinable after v1.99 provenance gate
- [#39682](https://github.com/BerriAI/litellm/pull/39682) fix(ui): paginate per-user usage with the shared server-side DataTable footer
- [#39717](https://github.com/BerriAI/litellm/pull/39717) feat(mcp): use x-mcp-<access_group>-* headers as default upstream credentials for group members
- [#39776](https://github.com/BerriAI/litellm/pull/39776) fix(ui): clamp server-paginated DataTable page index when rowCount shrinks
- [#39773](https://github.com/BerriAI/litellm/pull/39773) test(caching): drive the redis stall burst off the clock, not asyncio.wait_for
- [#39772](https://github.com/BerriAI/litellm/pull/39772) ci: report every failing test in a job instead of stopping at the first
- [#39701](https://github.com/BerriAI/litellm/pull/39701) feat(router): add classifier circuit breaker
- [#39771](https://github.com/BerriAI/litellm/pull/39771) feat(team): report per-user spend within a team for JWT traffic
- [#39770](https://github.com/BerriAI/litellm/pull/39770) test: repair four chronically failing CI tests
- [#39399](https://github.com/BerriAI/litellm/pull/39399) fix: restore Python compatibility and test 3.10 through 3.14
- [#39704](https://github.com/BerriAI/litellm/pull/39704) feat(python): rename Rust rollout API
- [#39706](https://github.com/BerriAI/litellm/pull/39706) refactor(rust): extract config crate
- [#39691](https://github.com/BerriAI/litellm/pull/39691) feat: page the public model hub table off /public/v1/model_hub, keeping every filter
- [#39689](https://github.com/BerriAI/litellm/pull/39689) test(ocr): complete Rust unit test parity
- [#39628](https://github.com/BerriAI/litellm/pull/39628) refactor(tests): restructure rust python harness around strategy definitions
- [#39111](https://github.com/BerriAI/litellm/pull/39111) fix(ci): pin setup-uv to v10.0.1
- [#39693](https://github.com/BerriAI/litellm/pull/39693) feat(ui): add one-click Auto Router setup
- [#39590](https://github.com/BerriAI/litellm/pull/39590) feat(caching): add semantic_cache_scope to isolate semantic cache hits per end user
- [#35392](https://github.com/BerriAI/litellm/pull/35392) fix(mcp): pre-flight the ID-JAG credential at the transport edge
- [#31731](https://github.com/BerriAI/litellm/pull/31731) fix(model_checks): drop wildcard routes like bedrock/* from /v1/models
- [#39637](https://github.com/BerriAI/litellm/pull/39637) fix(azure): restrict the storage credential chain to deployment identities
- [#39273](https://github.com/BerriAI/litellm/pull/39273) fix(proxy): emit SSE keepalives on queue, rag, azure passthrough, usage chat and policy enrich streams
- [#39352](https://github.com/BerriAI/litellm/pull/39352) feat(proxy): per-worker admission control that rejects excess requests with 503
- [#39453](https://github.com/BerriAI/litellm/pull/39453) fix(snowflake): normalize Cortex Claude request shapes

#### 🐛 New Issues
- [#39722](https://github.com/BerriAI/litellm/issues/39722) [Docs]: LITELLM_JOB_ROLE is documented but not present in the current codebase 💬2
- [#39724](https://github.com/BerriAI/litellm/issues/39724) LiteLLM `ollama/` provider silently replaces the model's chat template with an Alpaca-style prompt `llm translation` 💬2
- [#39713](https://github.com/BerriAI/litellm/issues/39713) [Bug]: Per-customer RPM limits stop applying once the virtual key is cached `bug` `proxy` 💬2
- [#39736](https://github.com/BerriAI/litellm/issues/39736) [Bug]: mistral drops a named tool_choice, so the pinned tool is never called `llm translation` `SDK` `potential-duplicate` 💬2
- [#39719](https://github.com/BerriAI/litellm/issues/39719) [Bug]: service_tier silently dropped for Azure gpt-4.1/4o family with drop_params=true (missing from AzureOpenAIConfig.get_supported_openai_params) `llm translation` 💬2
- [#39721](https://github.com/BerriAI/litellm/issues/39721) [Bug]: Anthropic /v1/messages erases OpenAI Responses refusal blocks into empty content array `proxy` `llm translation` `potential-duplicate` `claude code` 💬2
- [#39796](https://github.com/BerriAI/litellm/issues/39796) Streaming re-chunker drops tool_calls[].id and function.name when upstream sends a full tool_call in one delta `llm translation` 💬1
- [#39735](https://github.com/BerriAI/litellm/issues/39735) [Bug]: mistral drops a named tool_choice, so the pinned tool is never called `llm translation` `SDK` 💬1
- [#39715](https://github.com/BerriAI/litellm/issues/39715) [Bug]: DELETE /v1/files/{file_id} returns 500 "BedrockFilesConfig does not support file deletion" — Bedrock files cannot be cleaned up `bug` `proxy` `llm translation` 💬1
- [#39720](https://github.com/BerriAI/litellm/issues/39720) [Bug]: service_tier echo dropped from normalized /chat/completions response for OpenAI models with mode=responses `llm translation` 💬1
- [#39829](https://github.com/BerriAI/litellm/issues/39829) [Bug]: Bedrock Converse does not drop temperature for reasoning models `proxy` `llm translation`
- [#39816](https://github.com/BerriAI/litellm/issues/39816) Rate limit 429 body reports local time labelled "UTC"
- [#39774](https://github.com/BerriAI/litellm/issues/39774) [Feature]: Export the spend, budget and reliability metrics over OTel, not just Prometheus `proxy` `llm translation` `claude code`
- [#39778](https://github.com/BerriAI/litellm/issues/39778) Dead conditional branches in duration_parser reset handlers
- [#39767](https://github.com/BerriAI/litellm/issues/39767) [Bug]: Proxy exited 139 after hiredis Redis read timeouts
- [#39759](https://github.com/BerriAI/litellm/issues/39759) [Bug]: Ollama provider raises KeyError on a custom prompt template that omits initial_prompt_value or final_prompt_value `bug` `llm translation` `SDK`
- [#39758](https://github.com/BerriAI/litellm/issues/39758) [Feature]: First-class Anthropic subscription OAuth provider for generic clients `llm translation` `claude code`
- [#39757](https://github.com/BerriAI/litellm/issues/39757) [Bug]:Wrong-key 401 response leaks backend identity, DB table name, and SHA-256 hash of the submitted key `bug` `proxy` `llm translation`
- [#39751](https://github.com/BerriAI/litellm/issues/39751) MCP 1.98: tool schema validation oscillates + mapping not populated for dynamically-registered http servers (Context7 repro)
- [#39749](https://github.com/BerriAI/litellm/issues/39749) [Bug]: Spend logs silently dropped since v1.99.0 for providers returning id:null (Databricks-Gemini) — request_id becomes "None" and collides on primary key `bug` `proxy` `llm translation`
- [#39744](https://github.com/BerriAI/litellm/issues/39744) [Bug]: lowest-latency routing treats tpm=0/rpm=0 as unlimited instead of blocked (falsy-zero in or-chain)
- [#39741](https://github.com/BerriAI/litellm/issues/39741) [Bug]: Claude Code ToolSearch fails on bedrock/openai after tool_reference handoff `bug` `llm translation` `SDK` `claude code`
- [#39730](https://github.com/BerriAI/litellm/issues/39730) [Bug] Cancelled spend-log cleanup runs have no outcome metric or failure log
- [#39726](https://github.com/BerriAI/litellm/issues/39726) [Bug]: End-user budget reset does not invalidate spend cache `bug` `proxy` `llm translation`
- [#39716](https://github.com/BerriAI/litellm/issues/39716) [Feature]: Upgrade tiktoken to 0.14.0 `SDK`
- [#39710](https://github.com/BerriAI/litellm/issues/39710) HTTP 500 on key generate/update from invalid duration (key expiry never validated)
- [#39709](https://github.com/BerriAI/litellm/issues/39709) [Feature]: honour mcp_tool_search_enabled for Responses API type: "mcp" tools pointing at litellm_proxy/ `proxy` `llm translation`
- [#39703](https://github.com/BerriAI/litellm/issues/39703) [Bug]: /v1/messages Responses bridge hides upstream failures — response.failed becomes stop_reason "end_turn" (<=1.96) / the raise is swallowed leaving an unterminated stream (1.97+) `llm translation` `claude code`
- [#39692](https://github.com/BerriAI/litellm/issues/39692) [Feature]: Complete MCP proxy mode with schema discovery `enhancement` `proxy`

#### 🔒 Closed Issues
- [#26594](https://github.com/BerriAI/litellm/issues/26594) [Bug]: Database connection failed when running in database mode on Windows (v1.83.11)
- [#38202](https://github.com/BerriAI/litellm/issues/38202) [Bug]: LiteLLM is not compat with Python 3.10
- [#29602](https://github.com/BerriAI/litellm/issues/29602) [Bug] Streaming requests that time out mid-stream are logged as success (not reported as failures)
- [#21347](https://github.com/BerriAI/litellm/issues/21347) Validate LiteLLM output and provider mappings using API specs
- [#26807](https://github.com/BerriAI/litellm/issues/26807) [Bug]: Cached prompt tokens billed as regular input in custom pricing cost path
- [#29353](https://github.com/BerriAI/litellm/issues/29353) [Bug]: Cloudflare Workers AI returns empty content for OpenAI-style result.choices[0].message.content responses
- [#37584](https://github.com/BerriAI/litellm/issues/37584) Fix "novita/openai/gpt-oss-120b" entry in "model_prices_and_context_window.json"
- [#29283](https://github.com/BerriAI/litellm/issues/29283) [Bug]: AllowedFailsPolicy.InternalServerErrorAllowedFails is silently ignored in get_allowed_fails_from_policy
- [#29322](https://github.com/BerriAI/litellm/issues/29322) [Bug]: Enable cache-control for qwen models
- [#29342](https://github.com/BerriAI/litellm/issues/29342) [Bug]: LiteLLM_SpendLogToolIndex is never pruned — grows unbounded, orphaned after spend log retention cleanup
- [#36384](https://github.com/BerriAI/litellm/issues/36384) [Bug]: pydantic.errors.PydanticUserError: `Message` is not fully defined
- [#29187](https://github.com/BerriAI/litellm/issues/29187) Bedrock passthrough requests appear to hang then fail with "Internal server error" when Anthropic is overloaded — overloaded error is never surfaced to the client (e.g. Claude Code)
- [#29247](https://github.com/BerriAI/litellm/issues/29247) Cast settings do not take effect
- [#29258](https://github.com/BerriAI/litellm/issues/29258) [Feature]: Add native /v1beta/cachedContents CRUD routes to google_endpoints (parity with /v1beta/interactions)
- [#29266](https://github.com/BerriAI/litellm/issues/29266) [Bug]: /health/test_connection ignores model_info — health_check_supports_max_tokens: false never respected
- [#29272](https://github.com/BerriAI/litellm/issues/29272) [Bug]: workspace_id is sent in the Anthropic Messages request body (not just the header) on the bedrock/claude_platform chat-completions route
- [#29274](https://github.com/BerriAI/litellm/issues/29274) [Bug]: model_list and models_by_provider have different outputs
- [#29292](https://github.com/BerriAI/litellm/issues/29292) [Bug]: DailySpend values silently failing to store in database
- [#29295](https://github.com/BerriAI/litellm/issues/29295) Your project is tracked on HVTracker — any data we should correct?
- [#29302](https://github.com/BerriAI/litellm/issues/29302) [Bug]: RunwayML Credential Form Hides Required Fields and Returns 422 Validation Error
- [#29305](https://github.com/BerriAI/litellm/issues/29305) [Bug] /key/update fails with 403 when a previously-assigned MCP server has been deleted
- [#29348](https://github.com/BerriAI/litellm/issues/29348) [Bug]: Helm chart default image tag main-<appVersion> does not exist on ghcr for stable releases → ImagePullBackOff
- [#39342](https://github.com/BerriAI/litellm/issues/39342) [Bug]: Add baseten/zai-org/GLM-5.3 to the model pricing registry
- [#39735](https://github.com/BerriAI/litellm/issues/39735) [Bug]: mistral drops a named tool_choice, so the pinned tool is never called
- [#39720](https://github.com/BerriAI/litellm/issues/39720) [Bug]: service_tier echo dropped from normalized /chat/completions response for OpenAI models with mode=responses

### Unsloth (`unslothai/unsloth`)

**Stars:** 75,628 · **Open issues:** 1,415 · **Last push:** <1h ago

On September 5, 2026, there were no new releases for Unsloth, but several significant merged pull requests enhanced the platform's functionality and performance. Notable updates included the addition of Unsloth Docker images optimized for any NVIDIA GPU, the restoration of the Studio resource monitor, and various fixes to improve the frontend, including the rendering of data-URI images in chat markdown and addressing export timeouts in the Studio. Additionally, new issues emerged, with a notable bug report (#10322) indicating that MTP fails to load with the Qwen3.8-Flash-Next-GGUF model, which may impact users reliant on this integration. Overall, it was a productive day focused on refining existing features and fixing bugs.

#### ✅ Merged PRs
- [#10292](https://github.com/unslothai/unsloth/pull/10292) Restore the facts the frontend comment trim reworded away
- [#5748](https://github.com/unslothai/unsloth/pull/5748) Add Unsloth Docker images (base + Studio) for any NVIDIA GPU host, Ampere through Blackwell
- [#10113](https://github.com/unslothai/unsloth/pull/10113) Trim comments in tests, scripts, CI helpers and unsloth_cli
- [#10307](https://github.com/unslothai/unsloth/pull/10307) Pin the auth mount gate to its behaviour, not one spelling of the guard
- [#10249](https://github.com/unslothai/unsloth/pull/10249) Fix Hub GGUF fit estimates for companion files
- [#10269](https://github.com/unslothai/unsloth/pull/10269) fix(frontend): render data-URI images in chat markdown
- [#10237](https://github.com/unslothai/unsloth/pull/10237) Restore persisted Studio resource monitor
- [#10236](https://github.com/unslothai/unsloth/pull/10236) Lazy-load Studio entry surfaces
- [#10256](https://github.com/unslothai/unsloth/pull/10256) Studio: fix Restore settings breaking preset saving
- [#10297](https://github.com/unslothai/unsloth/pull/10297) Anchor studio source slices on declarations, not on comment text
- [#10222](https://github.com/unslothai/unsloth/pull/10222) Studio: stop hiding every model pulled with ollama pull
- [#10257](https://github.com/unslothai/unsloth/pull/10257) Stop unsloth chat from reloading a model the server already has
- [#10258](https://github.com/unslothai/unsloth/pull/10258) Studio: stop exports timing out while they are still working
- [#10209](https://github.com/unslothai/unsloth/pull/10209) Fix Studio find-in-page correctness and typing
- [#10224](https://github.com/unslothai/unsloth/pull/10224) Studio: report free memory on Mac as what is actually free
- [#10291](https://github.com/unslothai/unsloth/pull/10291) Add a dispatch-only Docker Hub credential probe
- [#10114](https://github.com/unslothai/unsloth/pull/10114) Trim comments in studio/frontend chat, model picker and media features
- [#4958](https://github.com/unslothai/unsloth/pull/4958) Keep probing for a usable nvidia-smi before falling back to ROCm on Windows
- [#10270](https://github.com/unslothai/unsloth/pull/10270) Kaggle: fix the nightly, which has never once got as far as Kaggle
- [#10289](https://github.com/unslothai/unsloth/pull/10289) Studio: assert the write ordering, not what the write resolves to
- [#6955](https://github.com/unslothai/unsloth/pull/6955) Add cu128/cu126/cu130 torch 2.11.0 extras (torch2110) with xformers 0.0.35
- [#7256](https://github.com/unslothai/unsloth/pull/7256) Windows torch release preservation and a torch 2.11 default across installers
- [#10160](https://github.com/unslothai/unsloth/pull/10160) Studio: let the API load settings panel forget an entry
- [#10219](https://github.com/unslothai/unsloth/pull/10219) Studio: turn the generation prompt off on the final answer continuation
- [#10284](https://github.com/unslothai/unsloth/pull/10284) Studio: pin which rejection site the confirm-stream tests assert
- [#10221](https://github.com/unslothai/unsloth/pull/10221) Studio: fall back when a page declares a charset we do not know
- [#10220](https://github.com/unslothai/unsloth/pull/10220) Studio: size a Deep Research run to the model it actually runs on
- [#10267](https://github.com/unslothai/unsloth/pull/10267) Studio: match the update banner tests on classes, not on file substrings
- [#9912](https://github.com/unslothai/unsloth/pull/9912) fix(studio): stop handing a wildcard bind's public IP to LAN peers

#### 🐛 New Issues
- [#10322](https://github.com/unslothai/unsloth/issues/10322) [Bug] MTP fails to load with Qwen3.8-Flash-Next-GGUF `feature request` `bug` 💬1
- [#10288](https://github.com/unslothai/unsloth/issues/10288) [Bug] tapClientLookup: Index 1 out of bounds (length: 0) & MessagePartText can only be used inside text or reasoning message parts. `feature request` `bug` 💬2
- [#10290](https://github.com/unslothai/unsloth/issues/10290) [Feature] Make parallelism configurable in unsloth desktop API settings `feature request` 💬1
- [#10306](https://github.com/unslothai/unsloth/issues/10306) [Bug] Accessing Models running in Unsloth via PocketPal - Model does not autoload when prompt is sent via API `feature request` `bug`
- [#10300](https://github.com/unslothai/unsloth/issues/10300) [Bug] Workspace files with extensions (.cs/.php/.js/…) are still inaccessible for reading, writing, and indexing — continuation of topic #8843. `feature request` `bug`
- [#10299](https://github.com/unslothai/unsloth/issues/10299) [Issue] I only display Create under Images `feature request` `bug`
- [#10296](https://github.com/unslothai/unsloth/issues/10296) [Feature] Support for custom mmproj path (stop rejecting compatible mmproj files as "metadata mismatch") `feature request`
- [#10295](https://github.com/unslothai/unsloth/issues/10295) [Feature] Show all the files for the same detected quantization level `feature request`
- [#10293](https://github.com/unslothai/unsloth/issues/10293) [Feature] Give the user the option to select file extensions for RAG Linked local folders `feature request`
- [#10276](https://github.com/unslothai/unsloth/issues/10276) Qwen3.8-27B-unsloth-bnb-4bit: GatedDeltaNet projections load with no quant_state

#### 🔒 Closed Issues
- [#8868](https://github.com/unslothai/unsloth/issues/8868) [Bug] [Security] -H 0.0.0.0 serves wrong IP address on MacOS
- [#8785](https://github.com/unslothai/unsloth/issues/8785) [Bug] No GPU selector in windows desktop app
- [#10290](https://github.com/unslothai/unsloth/issues/10290) [Feature] Make parallelism configurable in unsloth desktop API settings
- [#10159](https://github.com/unslothai/unsloth/issues/10159) [Feature] allow deleting "Settings applied on API load" for custom paths after path removal

### AIBrix (`vllm-project/aibrix`)

**Stars:** 5,058 · **Open issues:** 380 · **Last push:** <1h ago

On September 5, 2026, AIBrix had a routine maintenance day with no new releases. Significant enhancements included the stabilization of KVCache pod-triggered reconciliation tests and the addition of unit tests for the scaling algorithm factory and constraints, as noted in merged pull request #2669 and #2666, respectively. Notable bug fixes were implemented, addressing input limits for the /v1/embeddings gateway in #2664 and improving error capture during batch dispatch in #2660. A new issue was raised regarding a flaky KVCache pod-triggered reconciliation integration test, tagged as #2667, signaling ongoing challenges in stability testing.

#### ✅ Merged PRs
- [#2669](https://github.com/vllm-project/aibrix/pull/2669) [CI] Stabilize KVCache pod-triggered reconciliation tests
- [#2666](https://github.com/vllm-project/aibrix/pull/2666) [Misc] Add unit tests for scaling algorithm factory and constraints
- [#2664](https://github.com/vllm-project/aibrix/pull/2664) [Bug] Fix /v1/embeddings input limits the gateway cannot measure
- [#2614](https://github.com/vllm-project/aibrix/pull/2614) [Bug] Batch: disable prometheus sink by default
- [#2660](https://github.com/vllm-project/aibrix/pull/2660) [Bug] Batch: Improve batch dispatch error capture
- [#2630](https://github.com/vllm-project/aibrix/pull/2630) [CI] Upgrade golangci-lint to v2.13.1
- [#2652](https://github.com/vllm-project/aibrix/pull/2652) [Misc] Add RayClusterFleet integration tests

#### 🐛 New Issues
- [#2667](https://github.com/vllm-project/aibrix/issues/2667) [Bug] Flaky KVCache pod-triggered reconciliation integration test 💬1
- [#2670](https://github.com/vllm-project/aibrix/issues/2670) [RFC]: Add pending replica guard to PodAutoscaler KPA/APA to prevent cascading scale-up `area/autoscaling`

#### 🔒 Closed Issues
- [#2456](https://github.com/vllm-project/aibrix/issues/2456) [ModelClaim] Surface invalid pool policy configuration to operators

### Semantic Router (`vllm-project/semantic-router`)

**Stars:** 5,567 · **Open issues:** 470 · **Last push:** 1h ago

On September 5, 2026, there were no new releases for Semantic Router, but several important updates were merged. Notably, PR #3363 addressed a bug by ensuring that delivery-state labels are cleared once an issue is closed, and PR #3399 added end-to-end coverage for the event signal to enhance testing capabilities. Additionally, PR #3456 restored multi-architecture image builds for the dashboard, improving CI/build processes. Among new issues, #3496 highlights a critical bug where the canonical response validation incorrectly rejects responses from Azure OpenAI and AI Foundry, raising concerns for users reliant on those services.

#### ✅ Merged PRs
- [#3363](https://github.com/vllm-project/semantic-router/pull/3363) [Bug] Clear issue delivery-state labels once the issue closes
- [#3399](https://github.com/vllm-project/semantic-router/pull/3399) [Test] Add E2E coverage for the event signal
- [#3456](https://github.com/vllm-project/semantic-router/pull/3456) [CI/Build] Restore dashboard multi-architecture image builds

#### 🐛 New Issues
- [#3464](https://github.com/vllm-project/semantic-router/issues/3464) [Docs] Expand online playground credentials in README and link the playground `enhancement` `community` `accepted` `wg/developer-experience-ecosystem` 💬3
- [#3496](https://github.com/vllm-project/semantic-router/issues/3496) [Bug] Canonical response validation rejects every Azure OpenAI / AI Foundry response `bug` `accepted` `wg/data-plane-networking` 💬2
- [#3490](https://github.com/vllm-project/semantic-router/issues/3490) [Bug] Evaluation catalog rejects valid built-in routing plans `bug` `accepted` `wg/evaluation-quality` 💬2
- [#3500](https://github.com/vllm-project/semantic-router/issues/3500) [Bug] Streaming rejects a message_delta without stop_sequence that the buffered path accepts `bug` `accepted` `wg/data-plane-networking` 💬1

#### 🔒 Closed Issues
- [#3128](https://github.com/vllm-project/semantic-router/issues/3128) [Feature] Extract a shared connector for remote Router Model deployments
- [#3331](https://github.com/vllm-project/semantic-router/issues/3331) [Bug] Byte-replay bypasses forced include_usage; streamed usage goes unrecorded
- [#3464](https://github.com/vllm-project/semantic-router/issues/3464) [Docs] Expand online playground credentials in README and link the playground
- [#3169](https://github.com/vllm-project/semantic-router/issues/3169) [Feature] Define a minimal Responses state profile for gateway-integrated deployments
- [#3490](https://github.com/vllm-project/semantic-router/issues/3490) [Bug] Evaluation catalog rejects valid built-in routing plans
- [#3420](https://github.com/vllm-project/semantic-router/issues/3420) [Bug] dashboard image has not published since 2026-08-19: arm64 leg cross-builds with GOARCH=amd64
- [#3367](https://github.com/vllm-project/semantic-router/issues/3367) [Bug] Signal windows overflow the 512-token cap on dense and CJK text
- [#3222](https://github.com/vllm-project/semantic-router/issues/3222) [CI] Guard current documentation translation coverage against silent regressions
- [#3439](https://github.com/vllm-project/semantic-router/issues/3439) [Docs] Add community.vllm-sr.ai link and Slack channel hyperlink to README
- [#3358](https://github.com/vllm-project/semantic-router/issues/3358) [Docs] Add Chinese documentation entrypoint in README
- [#3357](https://github.com/vllm-project/semantic-router/issues/3357) [Feature] Add declarative Evaluation Benchmark Packs
- [#3435](https://github.com/vllm-project/semantic-router/issues/3435) [Bug] vllm-sr CLI still carries unreachable Python symbols after dead-file cleanup

---
*This digest is auto-generated by [agents-radar](https://github.com/yaojiejia/agents-radar).*